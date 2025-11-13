import { AwsV4Signer } from "aws4fetch";
import * as Data from "effect/data/Data";
import * as Effect from "effect/Effect";
import { Credentials } from "./credentials.ts";
import type { AwsErrorMeta } from "./error.ts";
import { Fetcher } from "./fetch.service.ts";
import type { ProtocolHandler } from "./protocols/interface.ts";

const errorTags: {
  [serviceName: string]: {
    [errorName: string]: any;
  };
} = {};

// Helper to create service-specific error dynamically
function createServiceError(
  serviceName: string,
  errorName: string,
  errorMeta: AwsErrorMeta & { message?: string },
) {
  // Create a tagged error dynamically with the correct error name
  return new ((errorTags[serviceName] ??= {})[errorName] ??= (() =>
    Data.TaggedError(errorName)<AwsErrorMeta & { message?: string }>)())(
    errorMeta,
  );
}

// Types
export interface ServiceMetadata {
  readonly sdkId: string;
  readonly version: string;
  readonly protocol: string;
  readonly sigV4ServiceName: string;
  readonly endpointPrefix?: string;
  readonly targetPrefix?: string; // only used for awsJson1_0 and awsJson1_1
  readonly globalEndpoint?: string; // For global services like IAM and CloudFront
  readonly signingRegion?: string; // Override signing region for global services
  readonly operations?: Record<
    string,
    | string
    | {
        readonly http?: string;
        readonly traits?: Record<string, string>;
        readonly inputTraits?: Record<string, string>;
        readonly outputTraits?: Record<string, string>;
      }
  >; // Operation mappings for restJson1 and trait mappings
}

export interface AwsCredentials {
  readonly accessKeyId: string;
  readonly secretAccessKey: string;
  readonly sessionToken?: string;
}

// Client configuration options
export interface AWSClientConfig {
  readonly credentials?: AwsCredentials;
  readonly region?: string;
  readonly endpoint?: string;
}

// Base AWS service class that all services extend
export abstract class AWSServiceClient {
  protected readonly config: Required<AWSClientConfig>;
  constructor(config: AWSClientConfig) {
    this.config = {
      region: config.region ?? "us-east-1",
      credentials: config.credentials ?? (undefined as any), // Will be resolved later
      endpoint: config.endpoint ?? (undefined as any), // Will be resolved per service
    };
  }
}

// Standalone service proxy creator function
export function createServiceProxy<T>(
  metadata: ServiceMetadata,
  config: AWSClientConfig,
  protocolHandler: ProtocolHandler,
): T {
  return new Proxy(
    {},
    {
      get(_, methodName) {
        if (typeof methodName !== "string") {
          return undefined;
        }

        return (input: unknown) => {
          const program = Effect.gen(function* () {
            const fetch = yield* Effect.service(Fetcher);

            // Convert camelCase method to PascalCase operation
            const operation =
              methodName.charAt(0).toUpperCase() + methodName.slice(1);

            // Build request with protocol handler
            const req = yield* Effect.promise(() =>
              protocolHandler.buildHttpRequest(input, operation, metadata),
            );

            // Use custom endpoint, global endpoint, or construct regional AWS endpoint
            const endpoint =
              config.endpoint ??
              metadata.globalEndpoint ??
              (metadata.endpointPrefix
                ? `https://${metadata.endpointPrefix}.${config.region}.amazonaws.com`
                : `https://${metadata.sdkId.toLowerCase()}.${config.region}.amazonaws.com`);

            // Build full URL with path
            const fullUrl = endpoint.replace(/\/$/, "") + req.path;

            const shouldSign = !(
              metadata.sigV4ServiceName === "sso-oauth" &&
              methodName === "createToken"
            );

            let signedRequest;
            let url;
            if (shouldSign) {
              const credentials =
                config.credentials ??
                (yield* Effect.service(Credentials).pipe(
                  Effect.flatMap((c) =>
                    Effect.promise(() => c.getCredentials()),
                  ),
                ));

              // Create AWS V4 Signer for this request
              const signer = new AwsV4Signer({
                method: req.method,
                url: fullUrl,
                headers: req.headers,
                body:
                  req.method === "GET" || req.method === "DELETE"
                    ? undefined
                    : req.body,
                accessKeyId: credentials.accessKeyId,
                secretAccessKey: credentials.secretAccessKey,
                sessionToken: credentials.sessionToken,
                service: metadata.sigV4ServiceName,
                // IAM is a global service, so it doesn't have a region
                // TODO(sam): any others? Can we get from spec?
                region:
                  metadata.sigV4ServiceName === "iam"
                    ? undefined
                    : config.region,
              });

              // Sign the request
              signedRequest = yield* Effect.promise(() => signer.sign());
              url = signedRequest.url.toString();
            } else {
              signedRequest = req;
              url = fullUrl;
            }

            // Log the AWS request
            yield* Effect.logDebug("AWS Request", {
              service: metadata.sdkId,
              operation,
              method: signedRequest.method,
              url,
              headers: signedRequest.headers,
              input,
              body: signedRequest.body,
            });

            // Use global fetch instead of client.fetch
            const response = yield* Effect.promise(() =>
              fetch(url, {
                method: signedRequest.method,
                headers: signedRequest.headers,
                body: signedRequest.body,
              }),
            ).pipe(Effect.timeout("30 seconds")); //FIXME: why a 30-second timeout?

            const statusCode = response.status;

            if (statusCode >= 200 && statusCode < 300) {
              // Success
              const result = protocolHandler.parseResponse(
                response,
                statusCode,
                metadata,
                response.headers,
                operation,
              );
              return yield* Effect.promise(() => result);
            } else {
              // Error handling - now standardized across all protocols
              const parsedError = yield* Effect.promise(() =>
                protocolHandler.parseError(
                  response,
                  statusCode,
                  response.headers,
                ),
              );

              const errorMeta: AwsErrorMeta = {
                statusCode,
                requestId: parsedError.requestId,
              };

              // Use the sanitized error type directly from the protocol handler
              return yield* Effect.fail(
                createServiceError(
                  metadata.sigV4ServiceName,
                  parsedError.errorType,
                  {
                    ...errorMeta,
                    message: parsedError.message,
                  },
                ),
              );
            }
          });
          return program;
        };
      },
    },
  ) as T;
}

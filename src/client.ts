import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { AwsClient } from "aws4fetch";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import {
  AccessDeniedException,
  RequestTimeout,
  ServiceUnavailable,
  ThrottlingException,
  UnauthorizedException,
  ValidationException,
  type AwsErrorMeta,
} from "./error.ts";
import type { ProtocolHandler } from "./protocols/interface.ts";

// Helper to create service-specific error dynamically
function createServiceError(
  errorName: string,
  errorMeta: AwsErrorMeta & { message?: string },
) {
  // Create a tagged error dynamically with the correct error name
  const ErrorClass = Data.TaggedError(errorName)<
    AwsErrorMeta & { message?: string }
  >;
  return new ErrorClass(errorMeta);
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
  readonly protocolHandler: ProtocolHandler;
}

// Base AWS service class that all services extend
export abstract class AWSServiceClient {
  protected readonly config: Required<AWSClientConfig>;
  constructor(config: AWSClientConfig) {
    this.config = {
      region: config.region ?? "us-east-1",
      credentials: config.credentials ?? (undefined as any), // Will be resolved later
      endpoint: config.endpoint ?? (undefined as any), // Will be resolved per service
      protocolHandler: config.protocolHandler,
    };
  }
}

// Promise-based AWS client creator
async function createAwsClient(service: string, config: AWSClientConfig) {
  // Use provided credentials or fall back to AWS credential chain
  const credentials = config.credentials
    ? config.credentials
    : await fromNodeProviderChain()();

  return new AwsClient({
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    sessionToken: credentials.sessionToken,
    service: service,
    region: config.region,
  });
}

// Standalone service proxy creator function
export function createServiceProxy<T>(
  metadata: ServiceMetadata,
  config: AWSClientConfig,
): T {
  const _client: Promise<AwsClient> = createAwsClient(
    metadata.sigV4ServiceName,
    config,
  );

  return new Proxy(
    {},
    {
      get(_, methodName: string | symbol) {
        if (typeof methodName !== "string") {
          return undefined;
        }

        return (input: unknown) =>
          Effect.gen(function* () {
            const client = yield* Effect.promise(() => _client);

            // Convert camelCase method to PascalCase operation
            const operation =
              methodName.charAt(0).toUpperCase() + methodName.slice(1);

            // Build request with protocol handler
            const req = yield* Effect.promise(() =>
              config.protocolHandler.buildHttpRequest(
                input,
                operation,
                metadata,
              ),
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

            // Log the AWS request
            yield* Effect.logDebug("AWS Request", {
              service: metadata.sdkId,
              operation,
              method: req.method,
              url: fullUrl,
              headers: req.headers,
              input,
              body: req.body,
            });

            const response = yield* Effect.promise(() =>
              client.fetch(fullUrl, {
                method: req.method,
                headers: req.headers,
                // Don't send body for GET/DELETE requests
                body:
                  req.method === "GET" || req.method === "DELETE"
                    ? undefined
                    : req.body,
              }),
            ).pipe(Effect.timeout("30 seconds")); //FIXME: why a 30-second timeout?

            const responseText = yield* Effect.promise(() => response.text());

            const statusCode = response.status;

            // Log the AWS response
            yield* Effect.logDebug("AWS Response", {
              service: metadata.sdkId,
              operation,
              statusCode,
              headers: (() => {
                const headersObj: Record<string, string> = {};
                response.headers.forEach((value, key) => {
                  headersObj[key] = value;
                });
                return headersObj;
              })(),
              responseText,
            });

            if (statusCode >= 200 && statusCode < 300) {
              // Success
              const result = config.protocolHandler.parseResponse(
                responseText,
                statusCode,
                metadata,
                response.headers,
                operation,
              );
              return yield* Effect.promise(() => result);
            } else {
              // Error handling - now standardized across all protocols
              const parsedError = config.protocolHandler.parseError(
                responseText,
                statusCode,
                response.headers,
              );

              const errorMeta: AwsErrorMeta = {
                statusCode,
                requestId: parsedError.requestId,
              };

              // Use the sanitized error type directly from the protocol handler
              const errorType = parsedError.errorType;

              // Map to specific error types
              switch (errorType) {
                case "ThrottlingException":
                case "TooManyRequestsException":
                  yield* Effect.fail(new ThrottlingException(errorMeta));
                  break;
                case "ServiceUnavailable":
                  yield* Effect.fail(new ServiceUnavailable(errorMeta));
                  break;
                case "RequestTimeout":
                  yield* Effect.fail(new RequestTimeout(errorMeta));
                  break;
                case "AccessDeniedException":
                  yield* Effect.fail(new AccessDeniedException(errorMeta));
                  break;
                case "UnauthorizedException":
                  yield* Effect.fail(new UnauthorizedException(errorMeta));
                  break;
                case "ValidationException":
                  yield* Effect.fail(new ValidationException(errorMeta));
                  break;
                default:
                  // All service-specific errors - create dynamically with correct _tag
                  yield* Effect.fail(
                    createServiceError(errorType, {
                      ...errorMeta,
                      message: parsedError.message,
                    }),
                  );
              }
            }
          });
      },
    },
  ) as T;
}

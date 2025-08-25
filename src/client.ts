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
import { loadServiceMetadata } from "./metadata-loader.ts";
import { AwsJson10Handler } from "./protocols/aws-json-1-0.ts";
import { AwsJson11Handler } from "./protocols/aws-json-1-1.ts";
import { AwsQueryHandler } from "./protocols/aws-query.ts";
import { Ec2QueryHandler } from "./protocols/ec2-query.ts";
import type { ProtocolHandler } from "./protocols/interface.ts";
import { RestJson1Handler } from "./protocols/rest-json-1.ts";
import { RestXmlHandler } from "./protocols/rest-xml.ts";

function resolveProtocolHandler(protocol: string): ProtocolHandler {
  switch (protocol) {
    case "ec2Query":
      return new Ec2QueryHandler();
    case "awsQuery":
      return new AwsQueryHandler();
    case "awsJson1_0":
      return new AwsJson10Handler();
    case "awsJson1_1":
      return new AwsJson11Handler();
    case "restJson1":
      return new RestJson1Handler();
    case "restXml":
      return new RestXmlHandler();
  }
  throw new Error(`Unknown protocol: ${protocol}`);
}

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
export type AwsRegion = string;

export interface AwsCredentials {
  readonly accessKeyId: string;
  readonly secretAccessKey: string;
  readonly sessionToken?: string;
}

// Client configuration options
export interface AWSClientConfig {
  readonly region?: string;
  readonly credentials?: AwsCredentials;
  readonly endpoint?: string;
}

// Base AWS service class that all services extend
export abstract class AWSServiceClient {
  protected readonly config: Required<AWSClientConfig>;
  constructor(config?: AWSClientConfig) {
    this.config = {
      region: config?.region ?? "us-east-1",
      credentials: config?.credentials ?? (undefined as any), // Will be resolved later
      endpoint: config?.endpoint ?? (undefined as any), // Will be resolved per service
    };
  }
}

// Promise-based AWS client creator
async function createAwsClient(
  service: string,
  config: Required<AWSClientConfig>,
) {
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
  serviceName: string,
  config: AWSClientConfig = {},
): T {
  const resolvedConfig: Required<AWSClientConfig> = {
    region: config.region ?? "us-east-1",
    credentials: config.credentials ?? (undefined as any), // Will be resolved later
    endpoint: config.endpoint ?? (undefined as any), // Will be resolved per service
  };

  const normalizedServiceName = serviceName.toLowerCase();

  const _client: Promise<AwsClient> = createAwsClient(
    normalizedServiceName,
    resolvedConfig,
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
            // Load metadata dynamically
            const metadata = yield* Effect.promise(() =>
              loadServiceMetadata(normalizedServiceName),
            );

            const client = yield* Effect.promise(() => _client);

            // Convert camelCase method to PascalCase action
            const action =
              methodName.charAt(0).toUpperCase() + methodName.slice(1);

            // Get protocol handler for this service
            const protocolHandler = resolveProtocolHandler(metadata.protocol);

            // Build request with protocol handler
            const req = yield* Effect.promise(() =>
              protocolHandler.buildHttpRequest(input, action, metadata),
            );

            // Use custom endpoint, global endpoint, or construct regional AWS endpoint
            const endpoint =
              resolvedConfig.endpoint ??
              metadata.globalEndpoint ??
              (metadata.endpointPrefix
                ? `https://${metadata.endpointPrefix}.${resolvedConfig.region}.amazonaws.com`
                : `https://${metadata.sdkId.toLowerCase()}.${resolvedConfig.region}.amazonaws.com`);

            // Build full URL with path
            const fullUrl = endpoint.replace(/\/$/, "") + req.path;

            // Log the AWS request
            yield* Effect.logDebug("AWS Request", {
              service: normalizedServiceName,
              action,
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
              service: normalizedServiceName,
              action,
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
              const result = protocolHandler.parseResponse(
                responseText,
                statusCode,
                metadata,
                response.headers,
                action,
              );
              return yield* Effect.promise(() => result);
            } else {
              // Error handling - now standardized across all protocols
              const parsedError = protocolHandler.parseError(
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

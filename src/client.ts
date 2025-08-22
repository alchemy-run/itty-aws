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
import { serviceMetadata } from "./metadata.ts";
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
  const metadata =
    serviceMetadata[normalizedServiceName as keyof typeof serviceMetadata];

  // if (!metadata) {
  //   throw new Error(`Unknown service: ${serviceName}`);
  // }

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
            const client = yield* Effect.promise(() => _client);

            // Convert camelCase method to PascalCase action
            const action =
              methodName.charAt(0).toUpperCase() + methodName.slice(1);

            // Get protocol handler for this service
            const protocolHandler = resolveProtocolHandler(metadata.protocol);

            // Extract operation-specific metadata for restJson1
            let httpMethod = "POST";
            let uriPath = "/";
            let finalInput = input;

            if (metadata.protocol === "restJson1") {
              const operationSpec = (metadata as any).operations?.[action];

              if (operationSpec) {
                // Parse "METHOD /path/with/{params}" format
                const spaceIndex = operationSpec.indexOf(" ");
                if (spaceIndex > 0) {
                  httpMethod = operationSpec.substring(0, spaceIndex);
                  uriPath = operationSpec.substring(spaceIndex + 1);
                }
              }

              // Extract path parameters from URI template
              const pathParams = [...uriPath.matchAll(/\{(\w+)\}/g)].map(
                (m) => m[1],
              );

              if (pathParams.length > 0 && input && typeof input === "object") {
                // Build URI with path substitution and separate body
                let processedUri = uriPath;
                const remainingInput = { ...input };

                for (const param of pathParams) {
                  if (param in (input as any)) {
                    const value = (input as any)[param];
                    processedUri = processedUri.replace(
                      `{${param}}`,
                      encodeURIComponent(String(value)),
                    );
                    delete (remainingInput as any)[param];
                  }
                }

                uriPath = processedUri;
                finalInput = remainingInput;
              }
            }

            // Serialize request body using protocol handler
            const body = protocolHandler.buildRequest(
              finalInput,
              action,
              metadata,
            );

            // Get headers from protocol handler (with body for Content-Length)
            const headers = protocolHandler.getHeaders(action, metadata, body);

            // Use custom endpoint, global endpoint, or construct regional AWS endpoint
            const baseEndpoint = resolvedConfig.endpoint
              ? resolvedConfig.endpoint
              : (metadata as any).globalEndpoint
                ? (metadata as any).globalEndpoint
                : `https://${metadata.endpointPrefix}.${resolvedConfig.region}.amazonaws.com`;

            // Build full URL with path
            const fullUrl = baseEndpoint.replace(/\/$/, "") + uriPath;

            // Log the AWS request
            yield* Effect.logDebug("AWS Request", {
              service: normalizedServiceName,
              action,
              method: httpMethod,
              url: fullUrl,
              headers,
              input,
              finalInput,
              body,
            });

            const response = yield* Effect.promise(() =>
              client.fetch(fullUrl, {
                method: httpMethod,
                headers,
                // Don't send body for GET/DELETE requests
                body:
                  httpMethod === "GET" || httpMethod === "DELETE"
                    ? undefined
                    : body,
              }),
            ).pipe(Effect.timeout("30 seconds"));

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
              if (!responseText) return {};
              return protocolHandler.parseResponse(responseText, 200, metadata);
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

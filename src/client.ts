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
import type { ProtocolHandler } from "./protocols/interface.ts";

// Helper function to extract simple error name from AWS namespaced error type
function extractErrorName(awsErrorType: string): string {
  // AWS returns errors like "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException"
  // We need to extract "ResourceNotFoundException"
  const parts = awsErrorType.split("#");
  return parts.length > 1 ? parts[1] : awsErrorType;
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
export class AWSServiceClient {
  protected readonly config: Required<AWSClientConfig>;
  protected readonly serviceName: string;
  protected readonly protocol: ProtocolHandler;

  constructor(serviceName: string, protocol: ProtocolHandler, config?: AWSClientConfig) {
    this.serviceName = serviceName;
    this.protocol = protocol;
    this.config = {
      region: config?.region ?? "us-east-1",
      credentials: config?.credentials ?? (undefined as any), // Will be resolved later
      endpoint: config?.endpoint ?? (undefined as any), // Will be resolved per service
    };
  }

  // Method that service classes will call to make AWS API requests
  protected call(action: string, input: unknown): any {
    return (createServiceProxy(this.serviceName, this.protocol, this.config) as any)[action](input);
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
  protocol: ProtocolHandler,
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

  if (!metadata) {
    throw new Error(`Unknown service: ${serviceName}`);
  }

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

            // Use the provided protocol handler
            const protocolHandler = protocol;

            // Serialize request body using protocol handler
            const body = protocolHandler.buildRequest(input, action, metadata);

            // Get headers from protocol handler (with body for Content-Length)
            const headers = protocolHandler.getHeaders(action, metadata, body);

            // Use custom endpoint or construct AWS endpoint
            const endpoint = resolvedConfig.endpoint
              ? resolvedConfig.endpoint
              : `https://${metadata.endpointPrefix}.${resolvedConfig.region}.amazonaws.com/`;

            const response = yield* Effect.promise(() =>
              client.fetch(endpoint, {
                method: "POST",
                headers,
                body,
              }),
            ).pipe(Effect.timeout("30 seconds"));

            const responseText = yield* Effect.promise(() => response.text());
            const statusCode = response.status;

            if (statusCode >= 200 && statusCode < 300) {
              // Success
              if (!responseText) return {};
              return protocolHandler.parseResponse(responseText, 200);
            } else {
              // Error handling
              const errorData = protocolHandler.parseError(
                responseText,
                statusCode,
                response.headers,
              );

              // Extract error info from protocol-specific error data
              let errorType = "UnknownError";
              let errorMessage = "Unknown error";
              let requestId: string | undefined;

              // Handle different protocol error formats
              if (errorData && typeof errorData === "object") {
                if ("name" in errorData && "$metadata" in errorData) {
                  // EC2 Query protocol format (Error object)
                  errorType = (errorData as any).name;
                  errorMessage = (errorData as any).message || "Unknown error";
                  requestId = (errorData as any).$metadata?.requestId;
                } else {
                  // AWS JSON protocol format (plain object)
                  errorType =
                    (errorData as any).__type ||
                    (errorData as any).code ||
                    "UnknownError";
                  errorMessage = (errorData as any).message || "Unknown error";
                }
              }

              // Fallback to headers for request ID if not found in error data
              if (!requestId) {
                requestId =
                  response.headers.get("x-amzn-requestid") ||
                  response.headers.get("x-amz-request-id") ||
                  undefined;
              }

              const errorMeta: AwsErrorMeta = {
                statusCode,
                requestId,
              };

              // Extract simple error name from AWS namespaced error type
              const simpleErrorName = extractErrorName(errorType);

              // Map to specific error types
              switch (simpleErrorName) {
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
                    createServiceError(simpleErrorName, {
                      ...errorMeta,
                      message: errorMessage,
                    }),
                  );
              }
            }
          });
      },
    },
  ) as T;
}

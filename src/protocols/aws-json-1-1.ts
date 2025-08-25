import type {
  ParsedError,
  ProtocolHandler,
  ServiceMetadata,
} from "./interface.ts";
import { stringifyAwsJson } from "./json-serializer.ts";

function extractErrorType(
  errorData: any,
  headers?: Headers,
): string | undefined {
  // Check for error type in priority order per AWS JSON 1.1 spec
  if (errorData.__type) {
    return sanitizeErrorType(errorData.__type);
  }
  if (headers?.get("x-amzn-errortype")) {
    return sanitizeErrorType(headers.get("x-amzn-errortype")!);
  }
  if (errorData.code) {
    return sanitizeErrorType(errorData.code);
  }
  return undefined;
}

function sanitizeErrorType(errorType: string): string {
  // Remove namespace prefixes as per AWS spec
  let sanitized = errorType;

  // Remove content before first `:` (legacy format)
  const colonIndex = sanitized.indexOf(":");
  if (colonIndex !== -1) {
    sanitized = sanitized.substring(0, colonIndex);
  }

  // Remove content before first `#` (shape ID format)
  const hashIndex = sanitized.indexOf("#");
  if (hashIndex !== -1) {
    sanitized = sanitized.substring(hashIndex + 1);
  }

  return sanitized;
}

export class AwsJson11Handler implements ProtocolHandler {
  readonly name = "awsJson1_1";
  readonly contentType = "application/x-amz-json-1.1";

  buildRequest(
    input: unknown,
    _action: string,
    _metadata: ServiceMetadata,
  ): Promise<string> {
    // Ensure empty input becomes {}
    const payload = input === null || input === undefined ? {} : input;
    return Promise.resolve(stringifyAwsJson(payload));
  }

  getHeaders(
    action: string,
    metadata: ServiceMetadata,
    body?: string,
  ): Record<string, string> {
    const headers: Record<string, string> = {
      "Content-Type": this.contentType,
      "X-Amz-Target": `${metadata.targetPrefix}.${action}`,
      "User-Agent": "itty-aws",
    };

    // Add Content-Length if body is provided
    if (body !== undefined) {
      headers["Content-Length"] = new TextEncoder()
        .encode(body)
        .length.toString();
    }

    return headers;
  }

  parseResponse(
    responseText: string,
    _statusCode: number,
    _metadata?: ServiceMetadata,
    _headers?: Headers,
    _action?: string,
  ): Promise<unknown> {
    if (!responseText || responseText.trim() === "") return Promise.resolve({});

    try {
      return Promise.resolve(JSON.parse(responseText));
    } catch (error) {
      throw new Error(
        `Invalid JSON response: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  parseError(
    responseText: string,
    _statusCode: number,
    headers?: Headers,
  ): ParsedError {
    let errorData: any;

    try {
      errorData = JSON.parse(responseText);
    } catch {
      return {
        errorType: "UnknownError",
        message: responseText || "Unknown error",
        requestId:
          headers?.get("x-amzn-requestid") ||
          headers?.get("x-amz-request-id") ||
          undefined,
      };
    }

    // Extract error type according to AWS JSON 1.1 spec
    const errorType = extractErrorType(errorData, headers) || "UnknownError";
    const message = errorData.Message || errorData.message || "Unknown error";
    const requestId =
      headers?.get("x-amzn-requestid") ||
      headers?.get("x-amz-request-id") ||
      undefined;

    return {
      errorType,
      message,
      requestId,
    };
  }
}

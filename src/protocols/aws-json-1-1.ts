import type { ServiceMetadata } from "../client.ts";
import type {
  ParsedError,
  ProtocolHandler,
  ProtocolRequest,
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

  async buildHttpRequest(
    input: unknown,
    operation: string,
    metadata: ServiceMetadata,
  ): Promise<ProtocolRequest> {
    const payload = input === null || input === undefined ? {} : input;
    const body = stringifyAwsJson(payload);
    const headers: Record<string, string> = {
      "Content-Type": this.contentType,
      "X-Amz-Target": `${metadata.targetPrefix}.${operation}`,
      "User-Agent": "itty-aws",
      "Content-Length": new TextEncoder().encode(body).length.toString(),
    };
    return { method: "POST", path: "/", headers, body };
  }

  async parseResponse(
    response: Response,
    _statusCode: number,
    _metadata?: ServiceMetadata,
    _headers?: Headers,
    _operation?: string,
  ): Promise<unknown> {
    const responseText = await response.text();
    if (!responseText || responseText.trim() === "") return Promise.resolve({});

    try {
      return Promise.resolve(JSON.parse(responseText));
    } catch (error) {
      throw new Error(
        `Invalid JSON response: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  async parseError(
    response: Response,
    _statusCode: number,
    headers?: Headers,
  ): Promise<ParsedError> {
    const responseText = await response.text();
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

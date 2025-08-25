import type {
  ParsedError,
  ProtocolHandler,
  ProtocolRequest,
  ServiceMetadata,
} from "./interface.ts";
import { stringifyAwsJson } from "./json-serializer.ts";

export class AwsJson10Handler implements ProtocolHandler {
  readonly name = "awsJson1_0";
  readonly contentType = "application/x-amz-json-1.0";

  async buildHttpRequest(
    input: unknown,
    action: string,
    metadata: ServiceMetadata,
  ): Promise<ProtocolRequest> {
    const body = stringifyAwsJson(
      input === undefined || input === null ? {} : input,
    );
    const headers: Record<string, string> = {
      "Content-Type": this.contentType,
      "X-Amz-Target": `${metadata.targetPrefix}.${action}`,
      "User-Agent": "itty-aws",
      "Content-Length": new TextEncoder().encode(body).length.toString(),
    };
    return { method: "POST", path: "/", headers, body };
  }

  parseResponse(
    responseText: string,
    _statusCode: number,
    _metadata?: ServiceMetadata,
    _headers?: Headers,
    _action?: string,
  ): Promise<unknown> {
    // Empty response body should return empty object
    if (!responseText || responseText.trim() === "") return Promise.resolve({});
    return Promise.resolve(JSON.parse(responseText));
  }

  parseError(
    responseText: string,
    _statusCode: number,
    headers?: Headers,
  ): ParsedError {
    let errorBody: any;
    try {
      errorBody = JSON.parse(responseText);
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

    // Extract error type according to AWS JSON 1.0 spec (priority order)
    const errorType =
      this.extractErrorType(errorBody, headers) || "UnknownError";
    const message = errorBody.Message || errorBody.message || "Unknown error";
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

  private extractErrorType(
    errorBody: any,
    headers?: Headers,
  ): string | undefined {
    // AWS JSON 1.0 spec: check X-Amzn-Errortype header, code field, then __type
    const errorTypeHeader = headers?.get("x-amzn-errortype");
    if (errorTypeHeader) {
      return this.sanitizeErrorType(errorTypeHeader);
    }

    if (errorBody.code) {
      return this.sanitizeErrorType(errorBody.code);
    }

    if (errorBody.__type) {
      return this.sanitizeErrorType(errorBody.__type);
    }

    return undefined;
  }

  private sanitizeErrorType(errorType: string): string {
    // Remove common prefixes and suffixes as per AWS spec
    let sanitized = errorType;

    // Remove timestamp suffix (e.g., ":2023-01-01T00:00:00Z")
    const colonIndex = sanitized.indexOf(":");
    if (colonIndex !== -1) {
      sanitized = sanitized.substring(0, colonIndex);
    }

    // Remove hash suffix (e.g., "#ValidationException")
    const hashIndex = sanitized.indexOf("#");
    if (hashIndex !== -1) {
      sanitized = sanitized.substring(hashIndex + 1);
    }

    return sanitized;
  }
}

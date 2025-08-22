import type {
  ParsedError,
  ProtocolHandler,
  ServiceMetadata,
} from "./interface.ts";
import { stringifyRestJson } from "./json-serializer.ts";

export class RestJson1Handler implements ProtocolHandler {
  readonly name = "restJson1";
  readonly contentType = "application/json";

  buildRequest(
    input: unknown,
    _action: string,
    _metadata: ServiceMetadata,
  ): string {
    // Input has already been processed by the client to remove path/query params
    // Just serialize the remaining fields as JSON
    if (
      !input ||
      (typeof input === "object" && Object.keys(input).length === 0)
    ) {
      return "";
    }
    return stringifyRestJson(input);
  }

  getHeaders(
    _action: string,
    _metadata: ServiceMetadata,
    body?: string,
  ): Record<string, string> {
    const headers: Record<string, string> = {
      "User-Agent": "itty-aws",
    };

    // Only set Content-Type if there's a body
    if (body) {
      headers["Content-Type"] = this.contentType;
    }

    return headers;
  }

  parseResponse(
    responseText: string,
    statusCode: number,
    metadata?: ServiceMetadata,
    headers?: Headers,
    action?: string,
  ): unknown {
    // Check if this operation has special HTTP trait mappings
    const operationTraits =
      metadata && action && (metadata as any).operations?.[action]?.traits;

    if (operationTraits) {
      // Handle operations with @httpPayload, @httpHeader, @httpResponseCode traits
      const result: any = {};

      // Process each field based on its trait
      for (const [fieldName, trait] of Object.entries(operationTraits)) {
        if (trait === "httpPayload") {
          // Field gets the entire response body
          result[fieldName] = responseText || "";
        } else if (trait === "httpResponseCode") {
          // Field gets the HTTP status code
          result[fieldName] = statusCode;
        } else if (typeof trait === "string" && trait.includes("-")) {
          // Field gets value from HTTP header (trait is the header name)
          result[fieldName] = headers?.get(trait);
        }
      }

      return result;
    }

    // Standard JSON response handling for operations without special traits
    if (!responseText) return {};
    try {
      const parsed = JSON.parse(responseText);
      return this.removeNulls(parsed);
    } catch {
      // If response isn't JSON, return as-is (could be binary data)
      return responseText;
    }
  }

  private removeNulls(obj: unknown): unknown {
    if (obj === null || obj === undefined) {
      return undefined;
    }

    if (Array.isArray(obj)) {
      return obj
        .map((item) => this.removeNulls(item))
        .filter((item) => item !== undefined);
    }

    if (typeof obj === "object") {
      const result: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(obj)) {
        const cleaned = this.removeNulls(value);
        if (cleaned !== undefined) {
          result[key] = cleaned;
        }
      }
      return result;
    }

    return obj;
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

    // Extract error type according to restJson1 spec (priority order)
    const errorType =
      this.extractErrorType(errorData, headers) || "UnknownError";
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

  private extractErrorType(
    errorData: any,
    headers?: Headers,
  ): string | undefined {
    // restJson1 spec: check X-Amzn-Errortype header, __type field, then code field
    const errorTypeHeader = headers?.get("x-amzn-errortype");
    if (errorTypeHeader) {
      return this.sanitizeErrorType(errorTypeHeader);
    }

    if (errorData.__type) {
      return this.sanitizeErrorType(errorData.__type);
    }

    if (errorData.code) {
      return this.sanitizeErrorType(errorData.code);
    }

    return undefined;
  }

  private sanitizeErrorType(errorType: string): string {
    // Remove namespace prefixes as per AWS restJson1 spec
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
}

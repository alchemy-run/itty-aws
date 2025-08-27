import type { ServiceMetadata } from "../client.ts";
import type {
  ParsedError,
  ProtocolHandler,
  ProtocolRequest,
} from "./interface.ts";
import { stringifyRestJson } from "./json-serializer.ts";

export class RestJson1Handler implements ProtocolHandler {
  readonly name = "restJson1";
  readonly contentType = "application/json";

  async buildHttpRequest(
    input: unknown,
    operation: string,
    metadata: ServiceMetadata,
  ): Promise<ProtocolRequest> {
    // Determine METHOD and URI path from operation metadata
    let httpMethod = "POST";
    let uriPath = "/";
    let remainingInput = input as any;

    const operationSpec = (metadata as any).operations?.[operation];
    if (operationSpec) {
      const httpSpec =
        typeof operationSpec === "string" ? operationSpec : operationSpec.http;
      if (httpSpec) {
        const spaceIndex = httpSpec.indexOf(" ");
        if (spaceIndex > 0) {
          httpMethod = httpSpec.substring(0, spaceIndex);
          uriPath = httpSpec.substring(spaceIndex + 1);
        }
      }
    }

    // Replace path params and strip from body
    const pathParams = [...uriPath.matchAll(/\{(\w+)\}/g)].map((m) => m[1]);
    if (pathParams.length > 0 && input && typeof input === "object") {
      let processedUri = uriPath;
      const inputCopy: Record<string, unknown> = { ...(input as any) };
      for (const param of pathParams) {
        if (param in inputCopy) {
          const value = inputCopy[param];
          processedUri = processedUri.replace(
            `{${param}}`,
            encodeURIComponent(String(value)),
          );
          delete inputCopy[param];
        }
      }
      uriPath = processedUri;
      remainingInput = inputCopy;
    }

    // Body: only when present and not GET/DELETE
    let body: string | undefined;
    if (
      httpMethod !== "GET" &&
      httpMethod !== "DELETE" &&
      remainingInput &&
      (typeof remainingInput !== "object" ||
        Object.keys(remainingInput).length > 0)
    ) {
      body = stringifyRestJson(remainingInput);
    }

    const headers: Record<string, string> = {
      "User-Agent": "itty-aws",
    };
    if (body) headers["Content-Type"] = this.contentType;

    return { method: httpMethod, path: uriPath, headers, body };
  }

  parseResponse(
    responseText: string,
    statusCode: number,
    metadata?: ServiceMetadata,
    headers?: Headers,
    operation?: string,
  ): Promise<unknown> {
    // Check if this operation has special HTTP trait mappings
    const operationTraits =
      metadata &&
      operation &&
      (metadata as any).operations?.[operation]?.traits;

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

      return Promise.resolve(result);
    }

    // Standard JSON response handling for operations without special traits
    if (!responseText) return Promise.resolve({});
    try {
      const parsed = JSON.parse(responseText, (_key, value) => {
        // Remove nulls and undefineds
        if (value === null || value === undefined) {
          return undefined;
        }
        return value;
      });
      return Promise.resolve(parsed);
    } catch {
      // If response isn't JSON, return as-is (could be binary data)
      return Promise.resolve(responseText);
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

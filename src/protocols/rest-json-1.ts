import type { ProtocolHandler, ServiceMetadata } from "./interface.ts";

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
    return JSON.stringify(input);
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
    _statusCode: number,
    _metadata?: ServiceMetadata,
  ): unknown {
    if (!responseText) return {};
    try {
      return JSON.parse(responseText);
    } catch {
      // If response isn't JSON, return as-is (could be binary data)
      return responseText;
    }
  }

  parseError(
    responseText: string,
    _statusCode: number,
    headers?: Headers,
  ): unknown {
    // RestJson1 errors are identified by X-Amzn-Errortype header
    const errorType = headers?.get("x-amzn-errortype") || "UnknownError";

    try {
      const parsed = JSON.parse(responseText);
      // Ensure __type is set for error handling
      return { ...parsed, __type: errorType };
    } catch {
      return {
        message: responseText || "Unknown error",
        __type: errorType,
      };
    }
  }
}

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
    return JSON.stringify(input, (_key, value) =>
      value === null ? undefined : value,
    );
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

import type { ProtocolHandler, ServiceMetadata } from "./interface.ts";

export class RestJson1Handler implements ProtocolHandler {
  readonly name = "restJson1";
  readonly contentType = "application/json";

  buildRequest(
    input: unknown,
    _action: string,
    _metadata: ServiceMetadata,
  ): string {
    return JSON.stringify(input);
  }

  getHeaders(
    _action: string,
    _metadata: ServiceMetadata,
    _body?: string,
  ): Record<string, string> {
    return {
      "Content-Type": this.contentType,
      "User-Agent": "itty-aws",
    };
  }

  parseResponse(responseText: string, _statusCode: number, _metadata?: import("./interface.ts").ServiceMetadata): unknown {
    if (!responseText) return {};
    return JSON.parse(responseText);
  }

  parseError(
    responseText: string,
    _statusCode: number,
    _headers?: Headers,
  ): unknown {
    try {
      return JSON.parse(responseText);
    } catch {
      return { message: responseText };
    }
  }
}

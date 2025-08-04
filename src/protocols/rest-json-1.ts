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
  ): Record<string, string> {
    return {
      "Content-Type": this.contentType,
      "User-Agent": "itty-aws",
    };
  }

  parseResponse(responseText: string, _statusCode: number): unknown {
    if (!responseText) return {};
    return JSON.parse(responseText);
  }

  parseError(responseText: string, _statusCode: number): unknown {
    try {
      return JSON.parse(responseText);
    } catch {
      return { message: responseText };
    }
  }
}

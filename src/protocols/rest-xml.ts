import type { ServiceMetadata } from "../client.ts";
import type {
  ParsedError,
  ProtocolHandler,
  ProtocolRequest,
} from "./interface.ts";

export class RestXmlHandler implements ProtocolHandler {
  readonly name = "restXml";
  readonly contentType = "application/xml";

  buildHttpRequest(
    input: unknown,
    _operation: string,
    _metadata: ServiceMetadata,
  ): Promise<ProtocolRequest> {
    // Placeholder: serialize as JSON until full XML and traits are supported
    const body = JSON.stringify(input ?? {});
    return Promise.resolve({
      method: "POST",
      path: "/",
      headers: { "Content-Type": this.contentType, "User-Agent": "itty-aws" },
      body,
    });
  }

  parseResponse(
    responseText: string,
    _statusCode: number,
    _metadata?: ServiceMetadata,
    _headers?: Headers,
    _operation?: string,
  ): Promise<unknown> {
    if (!responseText) return Promise.resolve({});
    // TODO: Implement proper XML parsing for S3 responses
    // For now, fall back to JSON parsing
    try {
      return Promise.resolve(JSON.parse(responseText));
    } catch {
      return Promise.resolve({ data: responseText });
    }
  }

  parseError(
    responseText: string,
    _statusCode: number,
    headers?: Headers,
  ): ParsedError {
    // TODO: Implement proper XML error parsing for S3
    // For now, return a basic error structure
    return {
      errorType: "UnknownError",
      message: responseText || "Unknown error",
      requestId:
        headers?.get("x-amzn-requestid") ||
        headers?.get("x-amz-request-id") ||
        undefined,
    };
  }
}

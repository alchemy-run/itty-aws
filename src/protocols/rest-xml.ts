import type {
  ParsedError,
  ProtocolHandler,
  ServiceMetadata,
} from "./interface.ts";

export class RestXmlHandler implements ProtocolHandler {
  readonly name = "restXml";
  readonly contentType = "application/xml";

  buildRequest(
    input: unknown,
    _action: string,
    _metadata: ServiceMetadata,
  ): string {
    // For now, we'll serialize as JSON until proper XML serialization is implemented
    // This is a placeholder for future S3 support
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

  parseResponse(
    responseText: string,
    _statusCode: number,
    _metadata?: ServiceMetadata,
  ): unknown {
    if (!responseText) return {};
    // TODO: Implement proper XML parsing for S3 responses
    // For now, fall back to JSON parsing
    try {
      return JSON.parse(responseText);
    } catch {
      return { data: responseText };
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

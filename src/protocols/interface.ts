import type { ServiceMetadata } from "../client.ts";

// Protocol handler interface for AWS Smithy protocols

export interface ParsedError {
  readonly errorType: string;
  readonly message: string;
  readonly requestId?: string;
}

export interface ProtocolRequest {
  readonly method: string;
  readonly path: string; // begins with '/'
  readonly headers: Record<string, string>;
  readonly body?: string;
}

export interface ProtocolHandler {
  readonly name: string;
  readonly contentType: string;

  // Build the complete HTTP request details for the given operation input
  buildHttpRequest(
    input: unknown,
    operation: string,
    metadata: ServiceMetadata,
  ): Promise<ProtocolRequest>;

  // Translate protocol-specific response (e.g. XML) into JSON
  parseResponse(
    responseText: string,
    statusCode: number,
    metadata?: ServiceMetadata,
    headers?: Headers,
    operation?: string,
  ): Promise<unknown>;
  parseError(
    responseText: string,
    statusCode: number,
    headers?: Headers,
  ): ParsedError;
}

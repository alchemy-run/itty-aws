// Protocol handler interface for AWS Smithy protocols

export interface ServiceMetadata {
  readonly sdkId: string;
  readonly version: string;
  readonly endpointPrefix: string;
  readonly protocol: string;
  readonly targetPrefix: string;
  readonly globalEndpoint?: string; // For global services like IAM and CloudFront
  readonly signingRegion?: string; // Override signing region for global services
}

export interface ParsedError {
  readonly errorType: string;
  readonly message: string;
  readonly requestId?: string;
}

export interface ProtocolHandler {
  readonly name: string;
  readonly contentType: string;

  // Translate input JSON into protocol-specific request format (e.g. XML)
  buildRequest(
    input: unknown,
    action: string,
    metadata: ServiceMetadata,
  ): string;

  getHeaders(
    action: string,
    metadata: ServiceMetadata,
    body?: string,
  ): Record<string, string>;

  // Translate protocol-specific response (e.g. XML) into JSON
  parseResponse(
    responseText: string,
    statusCode: number,
    metadata?: ServiceMetadata,
    headers?: Headers,
    action?: string,
  ): unknown;
  parseError(
    responseText: string,
    statusCode: number,
    headers?: Headers,
  ): ParsedError;
}

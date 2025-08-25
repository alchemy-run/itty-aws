// Protocol handler interface for AWS Smithy protocols

export interface ServiceMetadata {
  readonly sdkId: string;
  readonly version: string;
  readonly protocol: string;
  readonly endpointPrefix?: string;
  readonly targetPrefix?: string; // only used for awsJson1_0 and awsJson1_1
  readonly globalEndpoint?: string; // For global services like IAM and CloudFront
  readonly signingRegion?: string; // Override signing region for global services
  readonly operations?: Record<
    string,
    | string
    | {
        readonly http?: string;
        readonly traits?: Record<string, string>;
      }
  >; // Operation mappings for restJson1 and trait mappings
}

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
    action: string,
    metadata: ServiceMetadata,
  ): Promise<ProtocolRequest>;

  // Translate protocol-specific response (e.g. XML) into JSON
  parseResponse(
    responseText: string,
    statusCode: number,
    metadata?: ServiceMetadata,
    headers?: Headers,
    action?: string,
  ): Promise<unknown>;
  parseError(
    responseText: string,
    statusCode: number,
    headers?: Headers,
  ): ParsedError;
}

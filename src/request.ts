export interface RawRequest {
  unsignedUri: string;
  unsignedHeaders: Record<string, string>;
  unsignedBody?: Record<string, unknown> | string | Uint8Array | ReadableStream | undefined;
}

export interface UnsignedRequest {
  unsignedUri: string;
  unsignedHeaders: Record<string, string>;
  unsignedBody?: string | Uint8Array | ReadableStream | undefined;
}

/**
 * A protocol-agnostic HTTP response representation.
 * This is what the protocol deserializer consumes.
 */
export interface Response {
  /** HTTP status code */
  status: number;
  /** HTTP status text */
  statusText: string;
  /** Response headers */
  headers: Record<string, string>;
  /** Response body */
  body: string;
}

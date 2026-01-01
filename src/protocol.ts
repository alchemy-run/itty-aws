import type * as S from "effect/Schema";
import type { Request } from "./request.ts";
import type { Response } from "./response.ts";

/**
 * A Protocol handles serialization and deserialization of requests/responses
 * according to a specific AWS protocol (restXml, restJson1, awsJson1_0, etc.)
 */
export interface Protocol {
  /**
   * Serialize an input object into an HTTP request.
   * The input schema contains all operation metadata via annotations:
   * - A.Http({ method, uri }) - HTTP binding
   * - A.AwsApiService({ sdkId }) - Service identification
   * - A.XmlNamespace(uri) - XML namespace (for restXml)
   *
   * @param inputSchema - The input schema (contains operation metadata)
   * @param input - The input object to serialize
   * @returns The serialized HTTP request
   */
  serializeRequest(inputSchema: S.Schema.AnyNoContext, input: unknown): Request;

  /**
   * Deserialize an HTTP response into an output object.
   * @param outputSchema - The output schema
   * @param response - The HTTP response to deserialize
   * @returns The deserialized output object
   */
  deserializeResponse(outputSchema: S.Schema.AnyNoContext, response: Response): unknown;
}

import type * as Effect from "effect/Effect";
import type { ParseError } from "./error-parser.ts";
import type { Operation } from "./operation.ts";
import type { Request } from "./request.ts";
import type { Response } from "./response.ts";

/**
 * A ProtocolHandler is created by a Protocol factory function
 * with the operation pre-bound, allowing one-time preprocessing
 * of schema metadata (like getEncodedPropertySignatures, etc.).
 */
export interface ProtocolHandler {
  /**
   * Serialize an input object into an HTTP request.
   * @param input - The input object to serialize
   * @returns Effect yielding the serialized HTTP request
   */
  serializeRequest(input: unknown): Effect.Effect<Request, ParseError>;

  /**
   * Deserialize an HTTP response into an output object.
   * @param response - The HTTP response to deserialize
   * @returns Effect yielding the deserialized output object
   */
  deserializeResponse(response: Response): Effect.Effect<unknown>;
}

/**
 * A Protocol is a factory function that takes an operation
 * and returns a ProtocolHandler with pre-computed metadata.
 *
 * This allows expensive operations like getEncodedPropertySignatures
 * to be done once at initialization time rather than on every request.
 */
export type Protocol = (operation: Operation) => ProtocolHandler;

/**
 * Response Parser - wraps Protocol to parse responses.
 *
 * This layer:
 * 1. Uses the Protocol to deserialize the response
 * 2. Applies schema decoding/validation
 * 3. Handles error responses
 *
 * This is independently testable without making HTTP requests.
 */

import * as Effect from "effect/Effect";
import * as ParseResult from "effect/ParseResult";
import type * as S from "effect/Schema";
import * as Schema from "effect/Schema";
import { getProtocol } from "./annotations.ts";
import type { Protocol } from "./protocol.ts";
import type { Response } from "./response.ts";

export interface ResponseParserOptions {
  /** Override the protocol (otherwise discovered from schema annotations) */
  protocol?: Protocol;
  /** Skip schema validation (return raw deserialized object) */
  skipValidation?: boolean;
}

export type ResponseParser<A, R> = (
  response: Response,
) => Effect.Effect<A, ParseResult.ParseError, R>;

/**
 * Create a response parser for a given output schema.
 *
 * Expensive work (protocol discovery) is done once at creation time.
 *
 * @param outputSchema - The output schema (with protocol annotations)
 * @param options - Optional overrides
 * @returns A function that parses responses
 */
export const makeResponseParser = <A, I, R>(
  outputSchema: S.Schema<A, I, R>,
  options?: ResponseParserOptions,
): ResponseParser<A, R> => {
  // Discover protocol from annotations or use override (done once)
  const protocol = options?.protocol ?? getProtocol(outputSchema.ast);
  if (!protocol) {
    throw new Error("No protocol found on output schema");
  }

  // Pre-create the decoder (done once)
  const decode = Schema.decodeUnknown(outputSchema);

  // Return a function that parses responses
  return (response: Response): Effect.Effect<A, ParseResult.ParseError, R> => {
    return Effect.gen(function* () {
      // Deserialize response using the protocol
      const deserialized = protocol.deserializeResponse(
        outputSchema as S.Schema.AnyNoContext,
        response,
      );

      // Skip validation if requested (useful for testing raw deserialization)
      if (options?.skipValidation) {
        return deserialized as A;
      }

      // Decode through schema for validation and transformation
      return yield* decode(deserialized);
    });
  };
};

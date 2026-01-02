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
import * as Schema from "effect/Schema";
import { COMMON_ERRORS, UnknownAwsError } from "./aws/errors.ts";
import type { Operation } from "./operation.ts";
import type { Protocol, ProtocolHandler } from "./protocol.ts";
import type { Response } from "./response.ts";
import { getProtocol } from "./traits.ts";
import { getIdentifier } from "./util/ast.ts";

export interface ResponseParserOptions {
  /** Override the protocol (otherwise discovered from schema annotations) */
  protocol?: Protocol;
}

export type ResponseParser<A, R> = (
  response: Response,
) => Effect.Effect<A, ParseResult.ParseError, R>;

/**
 * Create a response parser for a given operation.
 *
 * Expensive work (protocol discovery, preprocessing) is done once at creation time.
 *
 * @param operation - The operation (with input/output schemas and protocol annotations)
 * @param options - Optional overrides
 * @returns A function that parses responses
 */
export const makeResponseParser = <A, I, R>(
  operation: Operation,
  options?: ResponseParserOptions,
) => {
  const inputAst = operation.input.ast;
  const outputSchema = operation.output;

  // Discover protocol factory from annotations or use override (done once)
  const protocolFactory = options?.protocol ?? getProtocol(inputAst);
  if (!protocolFactory) {
    throw new Error("No protocol found on input schema");
  }

  // Create the protocol handler (preprocessing done once)
  const protocol: ProtocolHandler = protocolFactory(operation as Operation);

  // Pre-create the decoder (done once)
  const decode = Schema.decodeUnknown(outputSchema);

  // Build error schema map: _tag -> Schema (done once)
  const errorSchemas = new Map<string, Schema.Schema.AnyNoContext>();
  for (const err of operation.errors ?? []) {
    const tag = getIdentifier(err.ast);
    if (tag) errorSchemas.set(tag, err);
  }
  for (const err of COMMON_ERRORS) {
    const tag = getIdentifier(err.ast);
    if (tag) errorSchemas.set(tag, err);
  }

  // Return a function that parses responses
  return Effect.fn(function* (response: Response) {
    // Success path
    if (response.status >= 200 && response.status < 300) {
      const deserialized = yield* protocol.deserializeResponse(response);
      return yield* decode(deserialized);
    }

    // Error path
    const { errorCode, data } = yield* protocol.deserializeError(response);
    const errorSchema = errorSchemas.get(errorCode);

    if (errorSchema) {
      // Add _tag to data for TaggedError decoding
      const dataWithTag = { _tag: errorCode, ...data };
      const decoded = yield* Schema.decodeUnknown(errorSchema)(dataWithTag).pipe(
        Effect.catchAll(() => Effect.succeed(dataWithTag)),
      );
      return yield* Effect.fail(decoded);
    }

    return yield* Effect.fail(new UnknownAwsError({ errorTag: errorCode, errorData: data }));
  });
};

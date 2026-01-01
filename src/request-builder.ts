/**
 * Request Builder - wraps Protocol and Middleware to build complete requests.
 *
 * This layer:
 * 1. Uses the Protocol to serialize the input into a Request
 * 2. Applies middleware (e.g., checksum computation)
 * 3. Adds common headers
 *
 * This is independently testable without making HTTP requests.
 */

import * as Effect from "effect/Effect";
import type * as S from "effect/Schema";
import { getMiddleware, getProtocol } from "./traits.ts";
import type { Protocol } from "./protocol.ts";
import type { Request } from "./request.ts";

export interface RequestBuilderOptions {
  /** Override the protocol (otherwise discovered from schema annotations) */
  protocol?: Protocol;
}

export type RequestBuilder = (input: unknown) => Effect.Effect<Request>;

/**
 * Create a request builder for a given input schema.
 *
 * Expensive work (protocol/middleware discovery) is done once at creation time.
 *
 * @param inputSchema - The input schema (with protocol/middleware annotations)
 * @param options - Optional overrides
 * @returns A function that builds requests from input values
 */
export const makeRequestBuilder = (
  inputSchema: S.Schema.AnyNoContext,
  options?: RequestBuilderOptions,
): RequestBuilder => {
  // Discover protocol from annotations or use override (done once)
  const protocol = options?.protocol ?? getProtocol(inputSchema.ast);
  if (!protocol) {
    throw new Error("No protocol found on input schema");
  }

  // Discover middleware from annotations (done once)
  const middleware = getMiddleware(inputSchema.ast);

  // Return a function that builds requests
  return (input: unknown): Effect.Effect<Request> => {
    return Effect.gen(function* () {
      // Serialize request using the protocol
      let request = protocol.serializeRequest(inputSchema, input);

      // Apply middleware
      for (const mw of middleware) {
        request = yield* mw(inputSchema, request);
      }

      // Add common headers
      request = {
        ...request,
        headers: {
          ...request.headers,
          "User-Agent": "itty-aws/1.0",
        },
      };

      return request;
    });
  };
};

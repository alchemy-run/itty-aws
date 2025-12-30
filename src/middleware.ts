import type * as Effect from "effect/Effect";
import type { RawResponse, UnsignedRequest } from "./client.ts";

export interface Middleware {
  request?: (request: UnsignedRequest) => Effect.Effect<UnsignedRequest>;
  response?: (response: RawResponse) => Effect.Effect<RawResponse>;
}

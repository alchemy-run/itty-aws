import type * as Effect from "effect/Effect";
import type { UnsignedRequest } from "../request.ts";
import type { RawResponse } from "../response.ts";

export interface Middleware {
  request?: (request: UnsignedRequest) => Effect.Effect<UnsignedRequest>;
  response?: (response: RawResponse) => Effect.Effect<RawResponse>;
}

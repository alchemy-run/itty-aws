import type * as Effect from "effect/Effect";
import type { Request } from "../request.ts";
import type { Response } from "../response.ts";

export interface Middleware {
  request?: (request: Request) => Effect.Effect<Request>;
  response?: (response: Response) => Effect.Effect<Response>;
}

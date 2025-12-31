import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import type { ErrorResponse } from "./error-response.ts";
import type { ParseError } from "./parse-error.ts";
import type { RawResponse } from "./response.ts";

export type ParseErrors = (
  response: RawResponse,
) => Effect.Effect<ErrorResponse, ParseError, never>;

export class ErrorParser extends Context.Tag("ErrorParser")<ErrorParser, ParseErrors>() {}

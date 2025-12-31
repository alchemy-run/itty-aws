import * as Effect from "effect/Effect";
import type { RawRequest } from "../request.ts";
import type { RawResponse } from "../response.ts";

export const NoopRequest = (value: RawRequest) =>
  Effect.succeed({
    unsignedUri: value.unsignedUri,
    unsignedHeaders: value.unsignedHeaders,
    unsignedBody: value.unsignedBody,
  });

export const NoopResponse = (value: RawResponse) =>
  Effect.succeed({
    headers: value.headers,
    body: {},
  });

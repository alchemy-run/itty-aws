import * as Effect from "effect/Effect";
import type { RawRequest } from "../request.ts";
import type { RawResponse } from "../response.ts";

export const FormatJSONRequest = (value: RawRequest) =>
  Effect.succeed({
    ...value,
    unsignedBody: value.unsignedBody ? JSON.stringify(value.unsignedBody) : undefined,
  });

export const FormatJSONResponse = (value: RawResponse) =>
  Effect.succeed({
    headers: value.headers,
    body: JSON.parse(value.body),
  });

export const FormatAwsJSON10Request = (value: RawRequest) =>
  Effect.succeed({
    ...value,
    unsignedHeaders: {
      ...value.unsignedHeaders,
      "Content-Type": "application/x-amz-json-1.0",
      "X-Amz-Target": value.meta.name,
    },
    unsignedBody: value.unsignedBody ? JSON.stringify(value.unsignedBody) : undefined,
  });

export const FormatAwsJSON11Request = (value: RawRequest) =>
  Effect.succeed({
    ...value,
    unsignedHeaders: {
      ...value.unsignedHeaders,
      "Content-Type": "application/x-amz-json-1.0",
      "X-Amz-Target": value.meta.name,
    },
    unsignedBody: value.unsignedBody ? JSON.stringify(value.unsignedBody) : undefined,
  });

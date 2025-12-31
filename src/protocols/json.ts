import * as Effect from "effect/Effect";
import type { Operation } from "../operation.ts";
import type { RawRequest } from "../request.ts";
import type { RawResponse } from "../response.ts";

export const FormatJSONRequest = (op: Operation) => (value: RawRequest) =>
  Effect.succeed({
    ...value,
    unsignedBody: value.unsignedBody ? JSON.stringify(value.unsignedBody) : undefined,
  });

export const FormatJSONResponse = (op: Operation) => (value: RawResponse) =>
  Effect.succeed({
    headers: value.headers,
    body: JSON.parse(value.body),
  });

export const FormatAwsJSON10Request = (op: Operation) => (value: RawRequest) =>
  Effect.succeed({
    ...value,
    unsignedHeaders: {
      ...value.unsignedHeaders,
      "Content-Type": "application/x-amz-json-1.0",
      "X-Amz-Target": value.meta.name,
    },
    unsignedBody: value.unsignedBody ? JSON.stringify(value.unsignedBody) : undefined,
  });

export const FormatAwsJSON11Request = (op: Operation) => (value: RawRequest) =>
  Effect.succeed({
    ...value,
    unsignedHeaders: {
      ...value.unsignedHeaders,
      "Content-Type": "application/x-amz-json-1.0",
      "X-Amz-Target": value.meta.name,
    },
    unsignedBody: value.unsignedBody ? JSON.stringify(value.unsignedBody) : undefined,
  });

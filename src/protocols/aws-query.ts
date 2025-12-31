import * as Effect from "effect/Effect";
import * as ParseResult from "effect/ParseResult";
import type { RawRequest } from "../request.ts";
import type { RawResponse } from "../response.ts";
import * as XML from "../util/xml.ts";

export const FormatAwsQueryRequest = Effect.fn(function* (value: RawRequest, _, ast) {
  if (
    typeof value.unsignedBody === "string" ||
    value.unsignedBody instanceof Uint8Array ||
    value.unsignedBody instanceof ReadableStream
  ) {
    return yield* Effect.fail(new ParseResult.Forbidden(ast, value, "cannot encode aws query"));
  }

  const params = new URLSearchParams();
  params.append("Action", value.meta.name);
  params.append("Version", value.meta.version);

  if (value.unsignedBody) {
    for (const [key, propertyValue] of Object.entries(value.unsignedBody)) {
      serializeAwsQueryValue(params, key, propertyValue);
    }
  }

  const queryParams = `${value.unsignedUri}?${params.toString()}`;

  return {
    unsignedUri: queryParams,
    unsignedBody: undefined,
    unsignedHeaders: {
      ...value.unsignedHeaders,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
});

export const FormatAwsQueryResponse = Effect.fn(function* (value: RawResponse, _, ast) {
  const data = yield* Effect.try({
    try: () => XML.parser.parse(value.body),
    catch: () => new ParseResult.Forbidden(ast, value, "cannot decode JSON"),
  });

  const name = value.meta.name.split(".")[1];

  return {
    headers: value.headers,
    body: data?.[`${name}Response`]?.[`${name}Result`],
  };
});

//todo(pear): this is vibe coded. maybe give it a 2nd look / move to effect match
function serializeAwsQueryValue(params: URLSearchParams, key: string, value: unknown): void {
  if (value === null || value === undefined) {
    return;
  }

  if (typeof value === "string") {
    params.append(key, value);
  } else if (typeof value === "boolean") {
    params.append(key, value ? "true" : "false");
  } else if (typeof value === "number" || typeof value === "bigint") {
    params.append(key, String(value));
  } else if (value instanceof Uint8Array) {
    const base64 = btoa(String.fromCharCode(...value));
    params.append(key, base64);
  } else if (value instanceof Date) {
    params.append(key, value.toISOString());
  } else if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      serializeAwsQueryValue(params, `${key}.${i + 1}`, value[i]);
    }
  } else if (typeof value === "object") {
    for (const [memberName, memberValue] of Object.entries(value)) {
      serializeAwsQueryValue(params, `${key}.${memberName}`, memberValue);
    }
  }
}

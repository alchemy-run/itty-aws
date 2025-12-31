import * as Effect from "effect/Effect";
import { ParseError } from "../parse-error.ts";
import type { RawResponse } from "../response.ts";

//see: https://smithy.io/2.0/aws/protocols/aws-restjson1-protocol.html#operation-error-serialization
export const FormatAwsRestJSONError = Effect.fn(function* (value: RawResponse) {
  const data = yield* Effect.try({
    try: () => JSON.parse(value.body),
    catch: () => new ParseError({ message: "cannot decode JSON" }),
  });

  const errorTagValue = value.headers?.["X-Amzn-Errortype"] ?? data?.code ?? data?.__type;

  if (typeof errorTagValue !== "string") {
    return yield* Effect.fail(new ParseError({ message: "Unable to parse error code" }));
  }

  return {
    _tag: errorTagValue.replace(/^.*#/, "").replace(/:.*$/, ""),
    data,
  };
});

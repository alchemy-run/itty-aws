import * as Effect from "effect/Effect";
import * as ParseResult from "effect/ParseResult";
import type { RawResponse } from "../response.ts";
import * as XML from "../util/xml.ts";

//todo(pear): can we just make this different behavior in `FormatAwsQueryResponse`
export const FormatAwsEc2QueryResponse = Effect.fn(function* (value: RawResponse, _, ast) {
  const data = yield* Effect.try({
    try: () => XML.parser.parse(value.body),
    catch: () => new ParseResult.Forbidden(ast, value, "cannot decode JSON"),
  });

  const name = value.meta.name.split(".")[1];

  return {
    headers: value.headers,
    body: data?.[`${name}Response`],
  };
});

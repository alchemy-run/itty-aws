import * as Effect from "effect/Effect";
import { ParseError } from "../error-parser.ts";
import type { Operation } from "../operation.ts";
import type { RawResponse } from "../response.ts";
import * as XML from "../util/xml.ts";

//todo(pear) support error wrapping https://smithy.io/2.0/aws/protocols/aws-restxml-protocol.html#restxml-errors
export const FormatAwsXMLError = (op: Operation) =>
  Effect.fn(function* (value: RawResponse) {
    const data = yield* Effect.try({
      try: () => XML.parser.parse(value.body),
      catch: () => new ParseError({ message: "cannot decode XML" }),
    });

    //todo(pear): define options somehow in generate-client
    //            part of the problem here is aws defaults might not be the smartest
    //            which then creates bloat for each request and its all just gross
    //            proper solution for just aws rest xml:
    // const _tag = yield* Effect.if(options?.noErrorWrapping ?? false, {
    //   onTrue: () => Effect.succeed(data?.Error?.Code),
    //   onFalse: () => Effect.succeed(data?.ErrorResponse?.Error?.Code),
    // });
    //            however we also handle it for AWS query and AWS EC2 query
    const _tag =
      data?.Response?.Errors?.Error?.Code ?? data?.ErrorResponse?.Error?.Code ?? data?.Error?.Code;

    if (typeof _tag !== "string") {
      return yield* Effect.fail(new ParseError({ message: "Unable to parse error code" }));
    }

    return {
      _tag,
      data,
    };
  });

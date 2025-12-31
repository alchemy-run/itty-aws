import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as ParseResult from "effect/ParseResult";
import * as Schema from "effect/Schema";
import * as AST from "effect/SchemaAST";
import { getAnnotations } from "./annotations.ts";
import type { Operation } from "./operation.ts";
import type { ParsedResponse, RawResponse } from "./response.ts";

export type ParseResponse = (
  response: RawResponse,
) => Effect.Effect<ParsedResponse, ParseResult.ParseError, never>;

export type ParseResponseMiddleware = (op: Operation) => ParseResponse;

export const make = <Op extends Operation>(op: Op) => {
  const outputSchema = op.outputSchema;
  const outputAst = outputSchema.ast;
  const structAst = AST.isTransformation(outputAst) ? outputAst.from : outputAst;
  const props = AST.isTypeLiteral(structAst) ? structAst.propertySignatures : [];
  const parseResponse = op.responseParser(op);

  return Effect.fnUntraced(function* (response: RawResponse) {
    const parsedResponse = yield* parseResponse(response);
    const payload: Record<string, unknown> = {};
    for (const prop of props) {
      const name = prop.name as keyof typeof payload;

      const annotations = getAnnotations(prop.type);

      if (Option.isSome(annotations.header)) {
        payload[name] = response.headers[annotations.header.value];
      } else if (Option.isSome(annotations.body)) {
        // TODO(sam): value.body needs to be parsed?
        payload[name] = getNested(parsedResponse.body, annotations.body.value);
      } else if (name in parsedResponse.body) {
        payload[name] = parsedResponse.body[name];
      }
    }

    return yield* Schema.decodeUnknown(outputSchema)(payload);
  });
};
// TODO(sam): what is this weird splitting logic? seems specific to a protocol or something?
const getNested = (obj: object, path: string) =>
  //@ts-expect-error
  path.split(".").reduce((acc, key) => acc?.[key], obj);

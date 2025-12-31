import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as ParseResult from "effect/ParseResult";
import * as Schema from "effect/Schema";
import * as AST from "effect/SchemaAST";
import { requestBodySymbol, requestHeaderSymbol } from "./annotations.ts";
import type { Operation } from "./operation.ts";
import type { ParsedResponse, RawResponse } from "./response.ts";

export type ParseResponse = (
  response: RawResponse,
) => Effect.Effect<ParsedResponse, ParseResult.ParseError, never>;

export class ResponseParser extends Context.Tag("ResponseParser")<
  ResponseParser,
  ParseResponse
>() {}

export const make = <A extends Schema.Schema.AnyNoContext>(op: Operation) =>
  Layer.effect(
    ResponseParser,
    // @ts-expect-error
    Effect.gen(function* () {
      const outputSchema = op.outputSchema.fields.output;
      const outputAst = outputSchema.ast;
      const structAst = AST.isTransformation(outputAst) ? outputAst.from : outputAst;
      const props = AST.isTypeLiteral(structAst) ? structAst.propertySignatures : [];

      return Effect.fnUntraced(function* (value: RawResponse) {
        const payload: Record<string, unknown> = {};
        for (const prop of props) {
          const name = prop.name as keyof typeof value;

          const headerAannotations = AST.getAnnotation<string>(prop.type, requestHeaderSymbol);
          const bodyAnnotation = AST.getAnnotation<string>(prop.type, requestBodySymbol);

          if (Option.isSome(headerAannotations)) {
            payload[name] = value.headers[headerAannotations.value];
          } else if (Option.isSome(bodyAnnotation)) {
            // TODO(sam): value.body needs to be parsed?
            payload[name] = getNested(value.body, bodyAnnotation.value);
          } else if (name in value.body) {
            payload[name] = value.body[name];
          }
        }

        const result = yield* Schema.decodeUnknown(outputSchema)(payload);
        return result;
      });
    }),
  );

// TODO(sam): what is this weird splitting logic? seems specific to a protocol or something?
const getNested = (obj: object, path: string) =>
  //@ts-expect-error
  path.split(".").reduce((acc, key) => acc?.[key], obj);

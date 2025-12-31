import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as ParseResult from "effect/ParseResult";
import * as Schema from "effect/Schema";
import * as AST from "effect/SchemaAST";
import { getAnnotations } from "./annotations.ts";
import type { Operation } from "./operation.ts";
import type { RawRequest, UnsignedRequest } from "./request.ts";

export type FormatRequest = (
  request: RawRequest,
) => Effect.Effect<UnsignedRequest, ParseResult.ParseError, never>;

export class RequestFormatter extends Context.Tag("RequestFormatter")<
  RequestFormatter,
  FormatRequest
>() {}

export const make = <A extends Schema.Schema.AnyNoContext>(op: Operation) =>
  Layer.effect(
    RequestFormatter,
    Effect.gen(function* () {
      const inputSchema = op.inputSchema.fields.input;
      const inputAst = inputSchema.ast;
      const structAst = AST.isTransformation(inputAst) ? inputAst.from : inputAst;
      const props = AST.isTypeLiteral(structAst) ? structAst.propertySignatures : [];

      return Effect.fnUntraced(function* (value: A) {
        const headers: Record<string, string> = {
          "User-Agent": "itty-aws",
        };
        let uri = op.uri;
        let body: Record<string, unknown> | undefined | string | Uint8Array | ReadableStream;

        for (const prop of props) {
          const name = prop.name as keyof typeof value;

          const annotations = getAnnotations(prop.type);

          if (Option.isSome(annotations.header)) {
            headers[annotations.header.value] = value[name] as string;
          } else if (Option.isSome(annotations.path)) {
            uri = uri.replace(new RegExp(`{${annotations.path.value}\\+?}`), `${value[name]}`);
            // uri = `https://s3.us-east-1.amazonaws.com/${value[name]}`;
          } else if (Option.isSome(annotations.body)) {
            body = { [annotations.body.value]: value[name] };
          } else if (Option.isSome(annotations.streamBody)) {
            body = value[name] as string | Uint8Array | ReadableStream;
          }
        }

        return {
          unsignedUri: uri,
          unsignedHeaders: headers,
          unsignedBody: body,
          meta,
        };
      }) as FormatRequest;
    }),
  );

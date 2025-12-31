import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as ParseResult from "effect/ParseResult";
import * as AST from "effect/SchemaAST";
import { getAnnotations } from "./annotations.ts";
import type { Operation } from "./operation.ts";
import type { RawRequest, UnsignedRequest } from "./request.ts";

export type FormatRequest = (
  request: RawRequest,
) => Effect.Effect<UnsignedRequest, ParseResult.ParseError, never>;

export type FormatRequestMiddleware = (op: Operation) => FormatRequest;

export const make = <Op extends Operation>(op: Op) => {
  const inputSchema = op.inputSchema;
  const inputAst = inputSchema.ast;
  const structAst = AST.isTransformation(inputAst) ? inputAst.from : inputAst;
  const props = AST.isTypeLiteral(structAst) ? structAst.propertySignatures : [];
  const formatRequest = op.requestFormatter(op);

  return Effect.fnUntraced(function* (input: Operation.Input<Op>) {
    const headers: Record<string, string> = {
      "User-Agent": "distilled-aws-sdk",
    };
    let uri = op.uri ?? "/";
    let body;

    for (const prop of props) {
      const name = prop.name as keyof typeof input;
      const annotations = getAnnotations(prop.type);

      if (Option.isSome(annotations.header)) {
        headers[annotations.header.value] = input[name] as string;
      } else if (Option.isSome(annotations.path)) {
        uri = uri.replace(new RegExp(`{${annotations.path.value}\\+?}`), `${input[name]}`);
        // uri = `https://s3.us-east-1.amazonaws.com/${value[name]}`;
      } else if (Option.isSome(annotations.body)) {
        body = { [annotations.body.value]: input[name] };
      } else if (Option.isSome(annotations.streamBody)) {
        body = input[name];
      }
    }

    let unsignedRequest = yield* formatRequest({
      unsignedHeaders: headers,
      unsignedUri: uri,
      unsignedBody: body,
    });

    for (const middleware of op.middleware ?? []) {
      if (middleware.request) {
        unsignedRequest = yield* middleware.request(unsignedRequest);
      }
    }

    return unsignedRequest;
  });
};

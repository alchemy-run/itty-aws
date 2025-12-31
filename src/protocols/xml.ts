import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as AST from "effect/SchemaAST";
import { getAnnotations, requestBodySymbol, xmlNameSymbol } from "../annotations.ts";
import type { Operation } from "../operation.ts";
import type { RawRequest } from "../request.ts";
import type { RawResponse } from "../response.ts";
import type { AnyClass } from "../util/schema.ts";
import * as XML from "../util/xml.ts";

export const FormatXMLRequest = (op: Operation) => {
  const structSchema = op.inputSchema as unknown as AnyClass;
  const structAst = structSchema.ast.from;
  const props = AST.isTypeLiteral(structAst) ? structAst.propertySignatures : [];

  return (value: RawRequest) => {
    let body = "";
    for (const prop of props) {
      op.name;
      const bodyAnnotation = AST.getAnnotation<string>(prop.type, requestBodySymbol).pipe(
        Option.getOrUndefined,
      );
      if (bodyAnnotation) {
        const xml = XML.formatNode(
          prop.type,
          value.unsignedBody?.[prop.name as keyof typeof value.unsignedBody],
        );
        body += xml;
      }
    }
    return Effect.succeed({
      ...value,
      unsignedBody: body,
    });
  };
};

export const FormatXMLResponse = (op: Operation) => {
  const structSchema = op.outputSchema;
  const structAst = AST.isTransformation(structSchema.ast) ? structSchema.ast.from : undefined;
  // For S.Class schemas, the annotation is on ast.to (the Declaration), not the Transformation itself
  const structXmlName = (
    AST.isTransformation(structSchema.ast)
      ? AST.getAnnotation<string>(structSchema.ast.to, xmlNameSymbol)
      : AST.getAnnotation<string>(structSchema.ast, xmlNameSymbol)
  ).pipe(Option.getOrUndefined);
  const props = structAst && AST.isTypeLiteral(structAst) ? structAst.propertySignatures : [];

  return (value: RawResponse) => {
    const body = XML.parser.parse(value.body);
    if (structAst) {
      let result: Record<string, unknown> = {};
      for (const prop of props) {
        const annotations = getAnnotations(prop.type);
        if (Option.isSome(annotations.header)) {
        } else if (Option.isSome(annotations.path)) {
        } else if (Option.isSome(annotations.streamBody)) {
        } else if (Option.isSome(annotations.body)) {
          // TODO(sam): handle the annotations.body.name if it exists
          const parsedBody = XML.parseNode(structAst, body, structXmlName);
          if (parsedBody) {
            result = Object.assign(result, parsedBody);
          }
        } else {
          const parsedBody = XML.parseNode(structAst, body, structXmlName);
          if (parsedBody) {
            result = Object.assign(result, parsedBody);
          }
        }
        return Effect.succeed({
          headers: value.headers,
          body: result,
        });
      }
    }
    return Effect.succeed({
      headers: value.headers,
      //todo(pear): wrap in a try-catch
      body: XML.parser.parse(value.body),
    });
  };
};

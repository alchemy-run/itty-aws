import * as Schema from "effect/Schema";
import * as AST from "effect/SchemaAST";

export const requestHeaderSymbol = Symbol.for("itty-aws/request-header");
export const requestBodySymbol = Symbol.for("itty-aws/request-body");
export const requestBodyStreamSymbol = Symbol.for("itty-aws/request-body-stream");
export const xmlNameSymbol = Symbol.for("itty-aws/xml-name");
export const requestPathSymbol = Symbol.for("itty-aws/request-path");
export const requestMetaSymbol = Symbol.for("itty-aws/request-meta");
export const requestError = Symbol.for("itty-aws/error");

export const XmlName =
  (name: string) =>
  <S extends Schema.Schema.AnyNoContext>(schema: S) =>
    schema.pipe(Schema.annotations({ [xmlNameSymbol]: name }));

export function Header(headerName: string): ReturnType<(typeof Schema.String)["annotations"]>;
export function Header<S extends Schema.Schema.AnyNoContext>(
  headerName: string,
  schema: S,
): ReturnType<S["annotations"]>;
export function Header(headerName: string, schema: Schema.Schema.AnyNoContext = Schema.String) {
  return schema.pipe(Schema.annotations({ [requestHeaderSymbol]: headerName }));
}
export const Body = <S extends Schema.Schema.AnyNoContext>(bodyName: string, schema: S) =>
  schema.pipe(Schema.annotations({ [requestBodySymbol]: bodyName }));
export type StreamBody = ReturnType<typeof StreamBody>["Type"];
export const StreamBody = () =>
  Schema.Union(
    Schema.String,
    Schema.instanceOf(Uint8Array),
    Schema.instanceOf(ReadableStream),
  ).pipe(Schema.annotations({ [requestBodyStreamSymbol]: true }));
export const Path = <S extends Schema.Schema.AnyNoContext>(pathName: string, schema: S) =>
  schema.pipe(Schema.annotations({ [requestPathSymbol]: pathName }));

export const getAnnotations = (schema: AST.AST) => {
  const header = AST.getAnnotation<string>(schema, requestHeaderSymbol);
  const body = AST.getAnnotation<string>(schema, requestBodySymbol);
  const streamBody = AST.getAnnotation<string>(schema, requestBodyStreamSymbol);
  const path = AST.getAnnotation<string>(schema, requestPathSymbol);
  const xmlName = AST.getAnnotation<string>(schema, xmlNameSymbol);
  const meta = AST.getAnnotation<string>(schema, requestMetaSymbol);
  const error = AST.getAnnotation<string>(schema, requestError);

  return {
    header,
    body,
    streamBody,
    path,
    xmlName,
    meta,
    error,
  };
};

/**
 * Get the xmlName annotation from an AST node, checking various locations
 * where the annotation might be stored (direct, transformation, union unwrap)
 */
export const getXmlName = (ast: AST.AST): string | undefined => {
  // Check direct annotations first
  const direct = ast.annotations?.[xmlNameSymbol];
  if (typeof direct === "string") return direct;

  // For Transformation, check the from AST annotations
  if (ast._tag === "Transformation") {
    const fromXmlName = ast.from?.annotations?.[xmlNameSymbol];
    if (typeof fromXmlName === "string") return fromXmlName;
  }

  // Unwrap Union types (for S.optional which creates Union of T | undefined)
  if (ast._tag === "Union") {
    const nonNullishTypes = ast.types.filter(
      (t) => t._tag !== "UndefinedKeyword" && !(t._tag === "Literal" && t.literal === null),
    );
    if (nonNullishTypes.length === 1) {
      return getXmlName(nonNullishTypes[0]);
    }
  }

  return undefined;
};

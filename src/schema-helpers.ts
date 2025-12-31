import { Schema } from "effect";

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

export const OperationMeta = Schema.Struct({
  inputSchema: Schema.optional(Schema.Any),
  outputSchema: Schema.optional(Schema.Any),
  uri: Schema.optional(Schema.String),
  method: Schema.optional(
    Schema.Union(
      Schema.Literal("GET"),
      Schema.Literal("POST"),
      Schema.Literal("PUT"),
      Schema.Literal("DELETE"),
      Schema.Literal("PATCH"),
      Schema.Literal("HEAD"),
      Schema.Literal("OPTIONS"),
    ),
  ),
  sdkId: Schema.String,
  sigV4ServiceName: Schema.String,
  name: Schema.String,
  version: Schema.String,
});

export const Operation = <
  Input extends Schema.Schema.AnyNoContext,
  Output extends Schema.Schema.AnyNoContext,
  //todo(pear): this should extend schema so we ensure errors are tagged
  Error,
>(
  meta: Schema.Schema.Type<typeof OperationMeta>,
  inputSchema: Input,
  outputSchema: Output,
  errorList: Array<Error>,
): {
  errors: Error;
  schema: Schema.Struct<{
    input: Input;
    output: Output;
  }>;
} =>
  Schema.Struct({
    input: inputSchema,
    output: outputSchema,
  }).pipe(
    Schema.annotations({
      [requestMetaSymbol]: {
        ...meta,
        inputSchema,
        outputSchema,
      },
      [requestError]: errorList,
    }),
  ) as any;

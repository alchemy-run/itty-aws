import { Schema } from "effect";

export const requestHeaderSymbol = Symbol.for("itty-aws/request-header");
export const requestBodySymbol = Symbol.for("itty-aws/request-body");
export const requestBodyStreamSymbol = Symbol.for(
  "itty-aws/request-body-stream",
);
export const requestPathSymbol = Symbol.for("itty-aws/request-path");
export const requestMetaSymbol = Symbol.for("itty-aws/request-meta");
export const requestError = Symbol.for("itty-aws/error");

export function Header(
  headerName: string,
): ReturnType<(typeof Schema.String)["annotations"]>;
export function Header<S extends Schema.Schema.AnyNoContext>(
  headerName: string,
  schema: S,
): ReturnType<S["annotations"]>;
export function Header(
  headerName: string,
  schema: Schema.Schema.AnyNoContext = Schema.String,
) {
  return schema.pipe(Schema.annotations({ [requestHeaderSymbol]: headerName }));
}
export const Body = <S extends Schema.Schema.AnyNoContext>(
  bodyName: string,
  schema: S,
) => schema.pipe(Schema.annotations({ [requestBodySymbol]: bodyName }));
export const StreamBody = () =>
  Schema.Union(
    Schema.String,
    Schema.instanceOf(Uint8Array),
    Schema.instanceOf(ReadableStream),
  ).pipe(Schema.annotations({ [requestBodyStreamSymbol]: true }));
export const Path = <S extends Schema.Schema.AnyNoContext>(
  pathName: string,
  schema: S,
) => schema.pipe(Schema.annotations({ [requestPathSymbol]: pathName }));

export const OperationMeta = Schema.Struct({
  uri: Schema.String,
  method: Schema.Union(
    Schema.Literal("GET"),
    Schema.Literal("POST"),
    Schema.Literal("PUT"),
    Schema.Literal("DELETE"),
    Schema.Literal("PATCH"),
    Schema.Literal("HEAD"),
    Schema.Literal("OPTIONS"),
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
      [requestMetaSymbol]: meta,
      [requestError]: errorList,
    }),
  ) as any;

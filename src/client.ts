import {
  Schema,
  SchemaAST as AST,
  ParseResult,
  Option,
  Record,
  Effect,
} from "effect";
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import { Credentials } from "./credentials";
import { Region } from "./region";
import { AwsV4Signer } from "aws4fetch";
import {
  Operation,
  requestBodyStreamSymbol,
  requestBodySymbol,
  requestError,
  requestHeaderSymbol,
  requestMetaSymbol,
  requestPathSymbol,
  type ErrorSchema,
  type OperationMeta,
} from "./schema-helpers";
import { HttpBody, HttpClient } from "@effect/platform";
import type { HttpClientError } from "@effect/platform/HttpClientError";
import { createDynamicTaggedError, type DynamicErrorUnion } from "./aws-errors";

const builder = new XMLBuilder();
const parser = new XMLParser();

const rawRequest = Schema.Struct({
  unsignedUri: Schema.String,
  unsignedHeaders: Schema.Record({
    key: Schema.String,
    value: Schema.String,
  }),
  unsignedBody: Schema.UndefinedOr(
    Schema.Union(
      Schema.Record({
        key: Schema.String,
        value: Schema.Any,
      }),
      Schema.String,
      Schema.instanceOf(Uint8Array),
      Schema.instanceOf(ReadableStream),
    ),
  ),
});
const unsignedRequest = Schema.Struct({
  unsignedUri: Schema.String,
  unsignedHeaders: Schema.Record({
    key: Schema.String,
    value: Schema.String,
  }),
  unsignedBody: Schema.UndefinedOr(
    Schema.Union(
      Schema.String,
      Schema.instanceOf(Uint8Array),
      Schema.instanceOf(ReadableStream),
    ),
  ),
});
const rawResponse = Schema.Struct({
  headers: Schema.Record({
    key: Schema.String,
    value: Schema.Unknown,
  }),
  //todo(pear): handle streams somehow
  body: Schema.String,
});
const response = Schema.Struct({
  headers: Schema.Record({
    key: Schema.String,
    value: Schema.Unknown,
  }),
  //todo(pear): handle streams somehow
  body: Schema.Record({
    key: Schema.String,
    value: Schema.Unknown,
  }),
});

export const FormatXMLRequest = Schema.asSchema(
  Schema.transformOrFail(rawRequest, unsignedRequest, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(
        new ParseResult.Forbidden(ast, actual, "cannot encode XML"),
      ),
    decode: (value) =>
      Effect.succeed({
        ...value,
        unsignedBody: value.unsignedBody
          ? builder.build(value.unsignedBody)
          : undefined,
      }),
  }),
);

export const FormatXMLResponse = Schema.asSchema(
  Schema.transformOrFail(rawResponse, response, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(
        new ParseResult.Forbidden(ast, actual, "cannot encode XML"),
      ),
    decode: (value) =>
      Effect.succeed({
        headers: value.headers,
        body: parser.parse(value.body),
      }),
  }),
);

export const NoopRequest = Schema.asSchema(
  Schema.transformOrFail(rawRequest, unsignedRequest, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(
        new ParseResult.Forbidden(ast, actual, "cannot encode Noop"),
      ),
    decode: (value) =>
      Effect.succeed(value as Schema.Schema.Type<typeof unsignedRequest>),
  }),
);

export const NoopResponse = Schema.asSchema(
  Schema.transformOrFail(rawResponse, response, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(
        new ParseResult.Forbidden(ast, actual, "cannot encode Noop"),
      ),
    decode: (value) =>
      Effect.succeed({
        headers: value.headers,
        body: {},
      }),
  }),
);

export const makeFormatRequestSchema = <A extends Schema.Schema.AnyNoContext>(
  operationSchema: Schema.Struct<{
    input: A;
    output: Schema.Schema.AnyNoContext;
    error: Schema.Union<Array<ErrorSchema>> | ErrorSchema | typeof Schema.Void;
  }>,
  MiddlewareSchema: Schema.Schema<
    Schema.Schema.Type<typeof unsignedRequest>,
    Schema.Schema.Type<typeof rawRequest>,
    never
  >,
) => {
  const inputSchema = operationSchema.fields.input;
  const inputAst = inputSchema.ast;

  const RequestFromInput = Schema.asSchema(
    Schema.transformOrFail(inputSchema, rawRequest, {
      strict: true,
      encode: (actual, _, ast) =>
        ParseResult.fail(
          new ParseResult.Forbidden(ast, actual, "cannot encode Input"),
        ),
      decode: (value, _, ast) =>
        Effect.gen(function* () {
          const structAst = AST.isTransformation(inputAst)
            ? inputAst.from
            : inputAst;
          const props = AST.isTypeLiteral(structAst)
            ? structAst.propertySignatures
            : [];
          const meta = yield* AST.getAnnotation<OperationMeta>(
            operationSchema.ast,
            requestMetaSymbol,
          );

          const headers: Record<string, string> = {
            "User-Agent": "itty-aws",
          };
          let uri = meta.uri;
          let body:
            | Record<string, unknown>
            | undefined
            | string
            | Uint8Array
            | ReadableStream;

          for (const prop of props) {
            const name = prop.name as keyof typeof value;

            const headerAannotations = AST.getAnnotation<string>(
              prop.type,
              requestHeaderSymbol,
            );
            const bodyAnnotation = AST.getAnnotation<string>(
              prop.type,
              requestBodySymbol,
            );
            const streamBodyAnnotation = AST.getAnnotation<string>(
              prop.type,
              requestBodyStreamSymbol,
            );
            const pathAnnotation = AST.getAnnotation<string>(
              prop.type,
              requestPathSymbol,
            );

            if (Option.isSome(headerAannotations)) {
              headers[headerAannotations.value] = value[name] as string;
            } else if (Option.isSome(pathAnnotation)) {
              uri = uri.replace(
                new RegExp(`{${pathAnnotation.value}\\+?}`),
                `${value[name]}`,
              );
              // uri = `https://s3.us-east-1.amazonaws.com/${value[name]}`;
            } else if (Option.isSome(bodyAnnotation)) {
              body = { [bodyAnnotation.value]: value[name] };
            } else if (Option.isSome(streamBodyAnnotation)) {
              body = value[name] as string | Uint8Array | ReadableStream;
            }
          }

          return {
            unsignedUri: uri,
            unsignedHeaders: headers,
            unsignedBody: body,
          };
        }).pipe(
          Effect.mapError((e) => new ParseResult.Type(ast, value, e.message)),
        ),
    }),
  );

  return Schema.asSchema(Schema.compose(RequestFromInput, MiddlewareSchema));
};

export const makeFormatResponseSchema = <A extends Schema.Schema.AnyNoContext>(
  operationSchema: Schema.Struct<{
    output: A;
    input: Schema.Schema.AnyNoContext;
    error: Schema.Union<Array<ErrorSchema>> | ErrorSchema | typeof Schema.Void;
  }>,
  MiddlewareSchema: Schema.Schema<
    Schema.Schema.Type<typeof response>,
    Schema.Schema.Type<typeof rawResponse>,
    never
  >,
) => {
  const outputSchema = operationSchema.fields.output;
  const outputAst = outputSchema.ast;

  const OutputFromResponse = Schema.asSchema(
    Schema.transformOrFail(response, outputSchema, {
      strict: true,
      encode: (actual, _, ast) =>
        ParseResult.fail(
          new ParseResult.Forbidden(ast, actual, "cannot encode output"),
        ),
      decode: (value, _, ast) =>
        Effect.gen(function* () {
          const structAst = AST.isTransformation(outputAst)
            ? outputAst.from
            : outputAst;
          const props = AST.isTypeLiteral(structAst)
            ? structAst.propertySignatures
            : [];

          const payload: Record<string, unknown> = {};

          for (const prop of props) {
            const name = prop.name as keyof typeof value;

            const headerAannotations = AST.getAnnotation<string>(
              prop.type,
              requestHeaderSymbol,
            );
            const bodyAnnotation = AST.getAnnotation<string>(
              prop.type,
              requestBodySymbol,
            );

            if (Option.isSome(headerAannotations)) {
              payload[name] = value.headers[headerAannotations.value];
            } else if (Option.isSome(bodyAnnotation)) {
              payload[name] = getNested(value.body, bodyAnnotation.value);
            }
          }

          const result = yield* Schema.decodeUnknown(outputSchema)(payload);
          return result;
        }).pipe(
          Effect.mapError((e) => new ParseResult.Type(ast, value, e.message)),
        ),
    }),
  );

  return Schema.asSchema(Schema.compose(MiddlewareSchema, OutputFromResponse));
};

const getNested = (obj: object, path: string) =>
  //@ts-expect-error
  path.split(".").reduce((acc, key) => acc?.[key], obj);

export const makeFormatErrorSchema = <
  A extends Schema.Union<Array<ErrorSchema>> | ErrorSchema | typeof Schema.Void,
>(
  operationSchema: Schema.Struct<{
    output: Schema.Schema.AnyNoContext;
    input: Schema.Schema.AnyNoContext;
    error: A;
  }>,
  MiddlewareSchema: Schema.Schema<
    Schema.Schema.Type<typeof response>,
    Schema.Schema.Type<typeof rawResponse>,
    never
  >,
) => {
  const errorSchema = operationSchema.fields.error;
  const errorAst = errorSchema.ast;

  const OutputFromResponse = Schema.asSchema(
    Schema.transformOrFail(response, errorSchema, {
      strict: true,
      encode: (actual, _, ast) =>
        ParseResult.fail(
          new ParseResult.Forbidden(ast, actual, "cannot encode output"),
        ),
      decode: (value, _, ast) =>
        Effect.gen(function* () {
          const unsafeStructAst = AST.isTransformation(errorAst)
            ? errorAst.from
            : errorAst;

          const safeStructAsts = AST.isUnion(unsafeStructAst)
            ? unsafeStructAst.types
            : [unsafeStructAst];

          for (const structAst of safeStructAsts) {
            const props = AST.isTypeLiteral(structAst)
              ? structAst.propertySignatures
              : [];

            const payload: Record<string, unknown> = {
              _tag: structAst.annotations[requestError],
            };

            for (const prop of props) {
              const name = prop.name as keyof typeof value;

              const headerAannotations = AST.getAnnotation<string>(
                prop.type,
                requestHeaderSymbol,
              );
              const bodyAnnotation = AST.getAnnotation<string>(
                prop.type,
                requestBodySymbol,
              );

              if (Option.isSome(headerAannotations)) {
                payload[name] = value.headers[headerAannotations.value];
              } else if (Option.isSome(bodyAnnotation)) {
                payload[name] = getNested(value.body, bodyAnnotation.value);
              }
            }

            const result = yield* Schema.decodeUnknown(errorSchema)(payload);
            return result;
          }

          yield* Effect.fail(new ParseResult.Type(ast, value, "Unknown Error"));
        }).pipe(
          Effect.mapError((e) => new ParseResult.Type(ast, value, e.message)),
        ),
    }),
  );

  return Schema.asSchema(Schema.compose(MiddlewareSchema, OutputFromResponse));
};

export const makeOperation = <A extends ReturnType<typeof Operation>>(
  operationSchemaGenerator: () => A,
  RequestMiddleware: Schema.Schema<
    Schema.Schema.Type<typeof unsignedRequest>,
    Schema.Schema.Type<typeof rawRequest>,
    never
  > = NoopRequest,
  ResponseMiddleware: Schema.Schema<
    Schema.Schema.Type<typeof response>,
    Schema.Schema.Type<typeof rawResponse>,
    never
  > = NoopResponse,
  ErrorMiddleware: Schema.Schema<
    Schema.Schema.Type<typeof response>,
    Schema.Schema.Type<typeof rawResponse>,
    never
  > = NoopResponse,
): ((
  payload: Schema.Schema.Type<A["fields"]["input"]>,
) => Effect.Effect<
  Schema.Schema.Type<A["fields"]["output"]>,
  | DynamicErrorUnion<A["fields"]["error"]>
  | ParseResult.ParseError
  | HttpClientError,
  Region | Credentials | HttpClient.HttpClient
>) => {
  const operationSchema = operationSchemaGenerator();
  const FormatRequest = makeFormatRequestSchema(
    operationSchema,
    RequestMiddleware,
  );
  const FormatResponse = makeFormatResponseSchema(
    operationSchema,
    ResponseMiddleware,
  );
  const FormatError = makeFormatErrorSchema(operationSchema, ErrorMiddleware);
  return Effect.fn(function* (
    payload: Schema.Schema.Type<A["fields"]["input"]>,
  ) {
    const httpClient = yield* HttpClient.HttpClient;

    const meta = yield* AST.getAnnotation<OperationMeta>(
      operationSchema.ast,
      requestMetaSymbol,
    );

    yield* Effect.logDebug(
      `AWS Request - ${meta.sdkId}:${meta.name} - payload: ${JSON.stringify(payload)}`,
    );

    const unsignedRequest = yield* Schema.decode(FormatRequest)(payload);

    yield* Effect.logDebug(
      `AWS Request - ${meta.sdkId}:${meta.name} - formatted request: ${JSON.stringify(unsignedRequest)}`,
    );

    const credentials = yield* Credentials;
    const region = yield* Region;
    const creds = yield* credentials.getCredentials();

    const signer = new AwsV4Signer({
      method: meta.method,
      url: `https://${meta.sdkId.toLowerCase()}.${region}.amazonaws.com${unsignedRequest.unsignedUri}`,
      headers: unsignedRequest.unsignedHeaders,
      body: unsignedRequest.unsignedBody,
      accessKeyId: creds.accessKeyId,
      secretAccessKey: creds.secretAccessKey,
      sessionToken: creds.sessionToken,
      service: meta.sigV4ServiceName,
      region,
    });
    const signedRequest = yield* Effect.promise(() => signer.sign());

    yield* Effect.logDebug(
      `AWS Request - ${meta.sdkId}:${meta.name} - signed request: ${JSON.stringify(signedRequest)}`,
    );

    const effectHttpMethod = EFFECT_HTTP_MAP[
      signedRequest.method as keyof typeof EFFECT_HTTP_MAP
    ] as (typeof EFFECT_HTTP_MAP)[keyof typeof EFFECT_HTTP_MAP] | undefined;
    if (effectHttpMethod == null) {
      //todo(pear): better error
      return yield* Effect.fail(
        new Error(`Unsupported HTTP method: ${signedRequest.method}`),
      );
    }

    const rawResponse = yield* httpClient[effectHttpMethod](signedRequest.url, {
      headers: signedRequest.headers,
      body: signedRequest.body
        ? typeof signedRequest.body === "string"
          ? HttpBody.text(signedRequest.body)
          : HttpBody.stream(signedRequest.body)
        : undefined,
    });

    const responsePayload = {
      body: yield* rawResponse.text,
      headers: rawResponse.headers,
    };
    yield* Effect.logDebug(
      `AWS Request - ${meta.sdkId}:${meta.name} - raw response: ${JSON.stringify(responsePayload)}`,
    );
    if (rawResponse.status >= 200 && rawResponse.status < 300) {
      const response = yield* Schema.decode(FormatResponse)(responsePayload);
      yield* Effect.logDebug(
        `AWS Request - ${meta.sdkId}:${meta.name} - parsed response: ${JSON.stringify(response)}`,
      );
      return response;
    } else {
      const { _tag: errorTag, ...error } =
        yield* Schema.decode(FormatError)(responsePayload);
      yield* Effect.logDebug(
        `AWS Request - ${meta.sdkId}:${meta.name} - parsed error: ${JSON.stringify(error)}`,
      );
      return yield* Effect.fail(createDynamicTaggedError(errorTag, error));
    }
  }) as any;
};

const EFFECT_HTTP_MAP = {
  PUT: "put",
  POST: "post",
  DELETE: "del",
  PATCH: "patch",
  HEAD: "head",
  OPTIONS: "options",
} as const;

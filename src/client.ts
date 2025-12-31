import { HttpBody, HttpClient } from "@effect/platform";
import type { HttpClientError } from "@effect/platform/HttpClientError";
import { AwsV4Signer } from "aws4fetch";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as ParseResult from "effect/ParseResult";
import * as Schema from "effect/Schema";
import * as AST from "effect/SchemaAST";
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import { COMMON_ERRORS, type CommonAwsError, UnknownAwsError } from "./aws-errors";
import { Credentials } from "./credentials.ts";
import type { Middleware } from "./middleware.ts";
import { Region } from "./region.ts";
import {
  Operation,
  OperationMeta,
  requestBodyStreamSymbol,
  requestBodySymbol,
  requestError,
  requestHeaderSymbol,
  requestMetaSymbol,
  requestPathSymbol,
  xmlNameSymbol,
} from "./schema-helpers";
import { formatNode, parseNode } from "./xml.ts";

const builder = new XMLBuilder();
const parser = new XMLParser();

const rawRequest = Schema.Struct({
  //todo(pear): we create this so we don't need to validate
  meta: OperationMeta,
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
export class UnsignedRequest extends Schema.Class<UnsignedRequest>("UnsignedRequest")({
  unsignedUri: Schema.String,
  unsignedHeaders: Schema.Record({
    key: Schema.String,
    value: Schema.String,
  }),
  unsignedBody: Schema.UndefinedOr(
    Schema.Union(Schema.String, Schema.instanceOf(Uint8Array), Schema.instanceOf(ReadableStream)),
  ),
}) {}

export class RawResponse extends Schema.Class<RawResponse>("RawResponse")({
  //todo(pear): we create this so we don't need to validate
  meta: OperationMeta,
  headers: Schema.Record({
    key: Schema.String,
    value: Schema.Unknown,
  }),
  //todo(pear): handle streams somehow
  body: Schema.String,
}) {}

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
const errorResponse = Schema.Struct({
  _tag: Schema.String,
  //todo(pear): handle streams somehow
  data: Schema.Record({
    key: Schema.String,
    value: Schema.Unknown,
  }),
});

export const FormatJSONRequest = Schema.asSchema(
  Schema.transformOrFail(rawRequest, UnsignedRequest, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode JSON")),
    decode: (value) =>
      Effect.succeed({
        ...value,
        unsignedBody: value.unsignedBody ? JSON.stringify(value.unsignedBody) : undefined,
      }),
  }),
);

export const FormatAwsJSON10Request = Schema.asSchema(
  Schema.transformOrFail(rawRequest, UnsignedRequest, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode JSON")),
    decode: (value) =>
      Effect.succeed({
        ...value,
        unsignedHeaders: {
          ...value.unsignedHeaders,
          "Content-Type": "application/x-amz-json-1.0",
          "X-Amz-Target": value.meta.name,
        },
        unsignedBody: value.unsignedBody ? JSON.stringify(value.unsignedBody) : undefined,
      }),
  }),
);

export const FormatAwsJSON11Request = Schema.asSchema(
  Schema.transformOrFail(rawRequest, UnsignedRequest, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode JSON")),
    decode: (value) =>
      Effect.succeed({
        ...value,
        unsignedHeaders: {
          ...value.unsignedHeaders,
          "Content-Type": "application/x-amz-json-1.0",
          "X-Amz-Target": value.meta.name,
        },
        unsignedBody: value.unsignedBody ? JSON.stringify(value.unsignedBody) : undefined,
      }),
  }),
);

export const FormatJSONResponse = Schema.asSchema(
  Schema.transformOrFail(RawResponse, response, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode JSON")),
    decode: (value) =>
      Effect.succeed({
        headers: value.headers,
        body: JSON.parse(value.body),
      }),
  }),
);

export const FormatAwsRestJSONError = Schema.asSchema(
  Schema.transformOrFail(RawResponse, errorResponse, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode JSON")),
    //see: https://smithy.io/2.0/aws/protocols/aws-restjson1-protocol.html#operation-error-serialization
    decode: Effect.fn(function* (value, _, ast) {
      const data = yield* Effect.try({
        try: () => JSON.parse(value.body),
        catch: () => new ParseResult.Forbidden(ast, value, "cannot decode JSON"),
      });

      const errorTagValue = value.headers?.["X-Amzn-Errortype"] ?? data?.code ?? data?.__type;

      if (typeof errorTagValue !== "string") {
        return yield* Effect.fail(
          new ParseResult.Forbidden(ast, value, "Unable to parse error code"),
        );
      }

      return {
        _tag: errorTagValue.replace(/^.*#/, "").replace(/:.*$/, ""),
        data,
      };
    }),
  }),
);

export const FormatXMLRequest = Schema.asSchema(
  Schema.transformOrFail(rawRequest, UnsignedRequest, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode XML")),
    decode: (value, _, ast) => {
      const structSchema = value.meta.inputSchema;
      const structAst = structSchema.ast.from;
      const props = AST.isTypeLiteral(structAst) ? structAst.propertySignatures : [];
      let body = "";
      for (const prop of props) {
        const bodyAnnotation = AST.getAnnotation<string>(prop.type, requestBodySymbol).pipe(
          Option.getOrUndefined,
        );
        if (bodyAnnotation) {
          body += formatNode(
            prop.type,
            value.unsignedBody?.[prop.name as keyof typeof value.unsignedBody],
          );
        }
      }
      return Effect.succeed({
        ...value,
        unsignedBody: body,
      });
    },
  }),
);

export const FormatXMLResponse = Schema.asSchema(
  Schema.transformOrFail(RawResponse, response, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode XML")),
    decode: (value) => {
      const structSchema = value.meta.outputSchema;
      const structAst = AST.isTransformation(structSchema.ast) ? structSchema.ast.from : undefined;
      // For S.Class schemas, the annotation is on ast.to (the Declaration), not the Transformation itself
      const structXmlName = (
        AST.isTransformation(structSchema.ast)
          ? AST.getAnnotation<string>(structSchema.ast.to, xmlNameSymbol)
          : AST.getAnnotation<string>(structSchema.ast, xmlNameSymbol)
      ).pipe(Option.getOrUndefined);
      const body = parser.parse(value.body);
      if (structAst) {
        const props = AST.isTypeLiteral(structAst) ? structAst.propertySignatures : [];
        for (const prop of props) {
          // TODO(sam): detect if this property is meant to be parsed from the body
          const isBodyProperty = prop.name === "TagSet";
          if (isBodyProperty) {
            const parsedBody = parseNode(structAst, body, structXmlName);
            // I don't need to do this because our job is to create the raw response
            // const decodedBody = Schema.decodeSync(structSchema)(parsedBody);
            return Effect.succeed({
              headers: value.headers,
              body: parsedBody,
            });
          }
        }
      }
      return Effect.succeed({
        headers: value.headers,
        //todo(pear): wrap in a try-catch
        body: parser.parse(value.body),
      });
    },
  }),
);

//todo(pear): this is vibe coded. maybe give it a 2nd look / move to effect match
function serializeAwsQueryValue(params: URLSearchParams, key: string, value: unknown): void {
  if (value === null || value === undefined) {
    return;
  }

  if (typeof value === "string") {
    params.append(key, value);
  } else if (typeof value === "boolean") {
    params.append(key, value ? "true" : "false");
  } else if (typeof value === "number" || typeof value === "bigint") {
    params.append(key, String(value));
  } else if (value instanceof Uint8Array) {
    const base64 = btoa(String.fromCharCode(...value));
    params.append(key, base64);
  } else if (value instanceof Date) {
    params.append(key, value.toISOString());
  } else if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      serializeAwsQueryValue(params, `${key}.${i + 1}`, value[i]);
    }
  } else if (typeof value === "object") {
    for (const [memberName, memberValue] of Object.entries(value)) {
      serializeAwsQueryValue(params, `${key}.${memberName}`, memberValue);
    }
  }
}

export const FormatAwsQueryRequest = Schema.asSchema(
  Schema.transformOrFail(rawRequest, UnsignedRequest, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode aws query")),
    decode: Effect.fn(function* (value, _, ast) {
      if (
        typeof value.unsignedBody === "string" ||
        value.unsignedBody instanceof Uint8Array ||
        value.unsignedBody instanceof ReadableStream
      ) {
        return yield* Effect.fail(new ParseResult.Forbidden(ast, value, "cannot encode aws query"));
      }

      const params = new URLSearchParams();
      params.append("Action", value.meta.name);
      params.append("Version", value.meta.version);

      if (value.unsignedBody) {
        for (const [key, propertyValue] of Object.entries(value.unsignedBody)) {
          serializeAwsQueryValue(params, key, propertyValue);
        }
      }

      const queryParams = `${value.unsignedUri}?${params.toString()}`;

      return {
        unsignedUri: queryParams,
        unsignedBody: undefined,
        unsignedHeaders: {
          ...value.unsignedHeaders,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
    }),
  }),
);

export const FormatAwsQueryResponse = Schema.asSchema(
  Schema.transformOrFail(RawResponse, response, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode XML")),
    decode: Effect.fn(function* (value, _, ast) {
      const data = yield* Effect.try({
        try: () => parser.parse(value.body),
        catch: () => new ParseResult.Forbidden(ast, value, "cannot decode JSON"),
      });

      const name = value.meta.name.split(".")[1];

      return {
        headers: value.headers,
        body: data?.[`${name}Response`]?.[`${name}Result`],
      };
    }),
  }),
);

//todo(pear): can we just make this different behavior in `FormatAwsQueryResponse`
export const FormatAwsEc2QueryResponse = Schema.asSchema(
  Schema.transformOrFail(RawResponse, response, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode XML")),
    decode: Effect.fn(function* (value, _, ast) {
      const data = yield* Effect.try({
        try: () => parser.parse(value.body),
        catch: () => new ParseResult.Forbidden(ast, value, "cannot decode JSON"),
      });

      const name = value.meta.name.split(".")[1];

      return {
        headers: value.headers,
        body: data?.[`${name}Response`],
      };
    }),
  }),
);

//todo(pear) support error wrapping https://smithy.io/2.0/aws/protocols/aws-restxml-protocol.html#restxml-errors
export const FormatAwsXMLError = Schema.asSchema(
  Schema.transformOrFail(RawResponse, errorResponse, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode XML")),
    decode: Effect.fn(function* (value, _, ast) {
      const data = yield* Effect.try({
        try: () => parser.parse(value.body),
        catch: () => new ParseResult.Forbidden(ast, value, "cannot decode XML"),
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
        data?.Response?.Errors?.Error?.Code ??
        data?.ErrorResponse?.Error?.Code ??
        data?.Error?.Code;

      if (typeof _tag !== "string") {
        return yield* Effect.fail(
          new ParseResult.Forbidden(ast, value, "Unable to parse error code"),
        );
      }

      return {
        _tag,
        data,
      };
    }),
  }),
);

export const NoopRequest = Schema.asSchema(
  Schema.transformOrFail(rawRequest, UnsignedRequest, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode Noop")),
    decode: (value) => Effect.succeed(value as Schema.Schema.Type<typeof UnsignedRequest>),
  }),
);

export const NoopResponse = Schema.asSchema(
  Schema.transformOrFail(RawResponse, response, {
    strict: true,
    encode: (actual, _, ast) =>
      ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot decode Noop")),
    decode: (value) =>
      Effect.succeed({
        headers: value.headers,
        body: {},
      }),
  }),
);

function getSafeMetadata(
  partialMeta: Schema.Schema.Type<typeof OperationMeta>,
): Required<Schema.Schema.Type<typeof OperationMeta>> {
  // @ts-expect-error - we known inputSchema and outputSchema are present
  return {
    ...partialMeta,
    uri: partialMeta.uri ?? "/",
    method: partialMeta.method ?? "POST",
  };
}

export const makeFormatRequestSchema = <A extends Schema.Schema.AnyNoContext>(
  operationSchema: Schema.Struct<{
    input: A;
    output: Schema.Schema.AnyNoContext;
  }>,
  MiddlewareSchema: Schema.Schema<
    Schema.Schema.Type<typeof UnsignedRequest>,
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
        ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode Input")),
      decode: (value, _, ast) =>
        Effect.gen(function* () {
          const structAst = AST.isTransformation(inputAst) ? inputAst.from : inputAst;
          const props = AST.isTypeLiteral(structAst) ? structAst.propertySignatures : [];
          const meta = getSafeMetadata(
            yield* AST.getAnnotation<Schema.Schema.Type<typeof OperationMeta>>(
              operationSchema.ast,
              requestMetaSymbol,
            ),
          );

          const headers: Record<string, string> = {
            "User-Agent": "itty-aws",
          };
          let uri = meta.uri;
          let body: Record<string, unknown> | undefined | string | Uint8Array | ReadableStream;

          for (const prop of props) {
            const name = prop.name as keyof typeof value;

            const headerAannotations = AST.getAnnotation<string>(prop.type, requestHeaderSymbol);
            const bodyAnnotation = AST.getAnnotation<string>(prop.type, requestBodySymbol);
            const streamBodyAnnotation = AST.getAnnotation<string>(
              prop.type,
              requestBodyStreamSymbol,
            );
            const pathAnnotation = AST.getAnnotation<string>(prop.type, requestPathSymbol);

            if (Option.isSome(headerAannotations)) {
              headers[headerAannotations.value] = value[name] as string;
            } else if (Option.isSome(pathAnnotation)) {
              uri = uri.replace(new RegExp(`{${pathAnnotation.value}\\+?}`), `${value[name]}`);
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
            meta,
          };
        }).pipe(Effect.mapError((e) => new ParseResult.Type(ast, value, e.message))),
    }),
  );

  return Schema.asSchema(Schema.compose(RequestFromInput, MiddlewareSchema));
};

export const makeFormatResponseSchema = <A extends Schema.Schema.AnyNoContext>(
  operationSchema: Schema.Struct<{
    output: A;
    input: Schema.Schema.AnyNoContext;
  }>,
  MiddlewareSchema: Schema.Schema<
    Schema.Schema.Type<typeof response>,
    Schema.Schema.Type<typeof RawResponse>,
    never
  >,
) => {
  const outputSchema = operationSchema.fields.output;
  const outputAst = outputSchema.ast;

  const OutputFromResponse = Schema.asSchema(
    Schema.transformOrFail(response, outputSchema, {
      strict: true,
      encode: (actual, _, ast) =>
        ParseResult.fail(new ParseResult.Forbidden(ast, actual, "cannot encode output")),
      decode: (value, _, ast) =>
        Effect.gen(function* () {
          const structAst = AST.isTransformation(outputAst) ? outputAst.from : outputAst;
          const props = AST.isTypeLiteral(structAst) ? structAst.propertySignatures : [];

          const payload: Record<string, unknown> = {};

          for (const prop of props) {
            const name = prop.name as keyof typeof value;

            const headerAannotations = AST.getAnnotation<string>(prop.type, requestHeaderSymbol);
            const bodyAnnotation = AST.getAnnotation<string>(prop.type, requestBodySymbol);

            if (Option.isSome(headerAannotations)) {
              payload[name] = value.headers[headerAannotations.value];
            } else if (Option.isSome(bodyAnnotation)) {
              payload[name] = getNested(value.body, bodyAnnotation.value);
            } else if (name in value.body) {
              payload[name] = value.body[name];
            }
          }

          const result = yield* Schema.decodeUnknown(outputSchema)(payload);
          return result;
        }).pipe(Effect.mapError((e) => new ParseResult.Type(ast, value, e.message))),
    }),
  );

  return Schema.asSchema(Schema.compose(MiddlewareSchema, OutputFromResponse));
};

const getNested = (obj: object, path: string) =>
  //@ts-expect-error
  path.split(".").reduce((acc, key) => acc?.[key], obj);

type Instance<T> = T extends abstract new (...args: any) => infer U ? U : T;

export const makeOperation = <A extends ReturnType<typeof Operation>>(
  operationSchemaGenerator: () => A,
  RequestMiddleware: Schema.Schema<
    Schema.Schema.Type<typeof UnsignedRequest>,
    Schema.Schema.Type<typeof rawRequest>,
    never
  >,
  ResponseMiddleware: Schema.Schema<
    Schema.Schema.Type<typeof response>,
    Schema.Schema.Type<typeof RawResponse>,
    never
  >,
  ErrorMiddleware: Schema.Schema<
    Schema.Schema.Type<typeof errorResponse>,
    Schema.Schema.Type<typeof RawResponse>,
    never
  >,
  ...middlewares: Middleware[]
): ((
  payload: Schema.Schema.Type<A["schema"]["fields"]["input"]>,
) => Effect.Effect<
  Schema.Schema.Type<A["schema"]["fields"]["output"]>,
  | Instance<A["errors"]>
  | ParseResult.ParseError
  | HttpClientError
  | UnknownAwsError
  | CommonAwsError,
  Region | Credentials | HttpClient.HttpClient
>) => {
  const operationSchema = operationSchemaGenerator() as any as A["schema"];
  const FormatRequest = makeFormatRequestSchema(operationSchema, RequestMiddleware);
  const FormatResponse = makeFormatResponseSchema(operationSchema, ResponseMiddleware);

  // const FormatError = makeFormatErrorSchema(operationSchema, ErrorMiddleware);
  return Effect.fn(function* (payload: Schema.Schema.Type<A["schema"]["fields"]["input"]>) {
    const httpClient = yield* HttpClient.HttpClient;

    const meta = yield* AST.getAnnotation<Schema.Schema.Type<typeof OperationMeta>>(
      operationSchema.ast,
      requestMetaSymbol,
    );

    yield* Effect.logDebug(
      `AWS Request - ${meta.sdkId}:${meta.name} - payload: ${JSON.stringify(payload)}`,
    );

    let unsignedRequest = yield* Schema.decode(FormatRequest)(payload);
    for (const middleware of middlewares) {
      if (middleware.request) {
        unsignedRequest = yield* middleware.request(unsignedRequest);
      }
    }

    yield* Effect.logDebug(
      `AWS Request - ${meta.sdkId}:${meta.name} - formatted request: ${JSON.stringify(unsignedRequest)}`,
    );

    const credentials = yield* Credentials;
    const region = yield* Region;
    const creds = yield* credentials.getCredentials();

    // TODO(sam): don't create this per request
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
      // TODO(sam): don't construct this string per request, it's expensive
      `AWS Request - ${meta.sdkId}:${meta.name} - signed request: ${JSON.stringify(signedRequest)}`,
    );

    const effectHttpMethod = EFFECT_HTTP_MAP[
      signedRequest.method as keyof typeof EFFECT_HTTP_MAP
    ] as (typeof EFFECT_HTTP_MAP)[keyof typeof EFFECT_HTTP_MAP] | undefined;
    if (effectHttpMethod == null) {
      //todo(pear): better error
      return yield* Effect.fail(new Error(`Unsupported HTTP method: ${signedRequest.method}`));
    }

    const rawResponse = yield* httpClient[effectHttpMethod](signedRequest.url, {
      // @ts-expect-error - TODO(sam): what are the proper types here
      headers: signedRequest.headers,
      body: signedRequest.body
        ? typeof signedRequest.body === "string"
          ? HttpBody.text(signedRequest.body)
          : // @ts-expect-error - TODO(sam): what are the proper types here
            HttpBody.stream(signedRequest.body)
        : undefined,
    });

    const responsePayload = {
      meta,
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
      const { _tag: errorTag, data: errorData } =
        yield* Schema.decode(ErrorMiddleware)(responsePayload);
      const errorClasses = [
        ...(operationSchema.ast.annotations[requestError] as Array<unknown>),
        ...COMMON_ERRORS,
      ] as Array<{ _tag: string; make: (data: unknown) => A["errors"] }>;
      const matchingErrorClass = errorClasses.find((errorClass) => errorClass._tag === errorTag);
      if (matchingErrorClass == null) {
        return yield* Effect.fail(
          UnknownAwsError.make({
            errorTag,
            errorData,
          }),
        );
      }
      yield* Effect.logDebug(
        `AWS Request - ${meta.sdkId}:${meta.name} - parsed error: ${JSON.stringify(errorData)}`,
      );
      return yield* Effect.fail(matchingErrorClass.make(errorData));
    }
  }) as any;
};

const EFFECT_HTTP_MAP = {
  GET: "get",
  PUT: "put",
  POST: "post",
  DELETE: "del",
  PATCH: "patch",
  HEAD: "head",
  OPTIONS: "options",
} as const;

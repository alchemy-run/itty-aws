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
  OperationMeta,
} from "./schema-helpers";
import { HttpBody, HttpClient } from "@effect/platform";
import type { HttpClientError } from "@effect/platform/HttpClientError";
import {
  COMMON_ERRORS,
  type CommonAwsError,
  UnknownAwsError,
} from "./aws-errors";

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
  //todo(pear): we create this so we don't need to validate
  meta: OperationMeta,
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
const errorResponse = Schema.Struct({
  _tag: Schema.String,
  //todo(pear): handle streams somehow
  data: Schema.Record({
    key: Schema.String,
    value: Schema.Unknown,
  }),
});

type RawRequest = Schema.Schema.Type<typeof rawRequest>;
type UnsignedRequest = Schema.Schema.Type<typeof unsignedRequest>;
type RawResponse = Schema.Schema.Type<typeof rawResponse>;
type Response = Schema.Schema.Type<typeof response>;
type ErrorResponse = Schema.Schema.Type<typeof errorResponse>;

export type FormatMiddleware = {
  request: (value: RawRequest) => Effect.Effect<UnsignedRequest, ParseResult.ParseIssue>;
  response: (value: RawResponse) => Effect.Effect<Response, ParseResult.ParseIssue>;
};

export type ErrorFormatMiddleware = (
  value: RawResponse,
) => Effect.Effect<ErrorResponse, ParseResult.ParseIssue>;

export const FormatJSON: FormatMiddleware = {
  request: (value) =>
    Effect.succeed({
      ...value,
      unsignedBody: value.unsignedBody
        ? JSON.stringify(value.unsignedBody)
        : undefined,
    }),
  response: (value) =>
    Effect.succeed({
      headers: value.headers,
      body: JSON.parse(value.body),
    }),
};

export const FormatAwsJSON10: FormatMiddleware = {
  request: (value) =>
    Effect.succeed({
      ...value,
      unsignedHeaders: {
        ...value.unsignedHeaders,
        "Content-Type": "application/x-amz-json-1.0",
        "X-Amz-Target": value.meta.name,
      },
      unsignedBody: value.unsignedBody
        ? JSON.stringify(value.unsignedBody)
        : undefined,
    }),
  response: FormatJSON.response,
};

export const FormatAwsJSON11: FormatMiddleware = {
  request: (value) =>
    Effect.succeed({
      ...value,
      unsignedHeaders: {
        ...value.unsignedHeaders,
        "Content-Type": "application/x-amz-json-1.0",
        "X-Amz-Target": value.meta.name,
      },
      unsignedBody: value.unsignedBody
        ? JSON.stringify(value.unsignedBody)
        : undefined,
    }),
  response: FormatJSON.response,
};

//see: https://smithy.io/2.0/aws/protocols/aws-restjson1-protocol.html#operation-error-serialization
export const FormatAwsRestJSONError: ErrorFormatMiddleware = (value) =>
  Effect.gen(function* () {
    const data = JSON.parse(value.body);
    const errorTagValue =
      value.headers?.["X-Amzn-Errortype"] ?? data?.code ?? data?.__type;

    if (typeof errorTagValue !== "string") {
      return yield* Effect.fail(
        new ParseResult.Type(errorResponse.ast, value, "Unable to parse error code"),
      );
    }

    return {
      _tag: errorTagValue.replace(/^.*#/, "").replace(/:.*$/, ""),
      data,
    };
  });

export const FormatXML: FormatMiddleware = {
  request: (value) =>
    Effect.succeed({
      ...value,
      unsignedBody: value.unsignedBody
        ? //todo(pear): wrap in a try-catch
          builder.build(value.unsignedBody)
        : undefined,
    }),
  response: (value) =>
    Effect.succeed({
      headers: value.headers,
      //todo(pear): wrap in a try-catch
      body: parser.parse(value.body),
    }),
};

//todo(pear): this is vibe coded. maybe give it a 2nd look / move to effect match
function serializeAwsQueryValue(
  params: URLSearchParams,
  key: string,
  value: unknown,
): void {
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

const formatAwsQueryRequest = (value: RawRequest) =>
  Effect.gen(function* () {
    if (
      typeof value.unsignedBody === "string" ||
      value.unsignedBody instanceof Uint8Array ||
      value.unsignedBody instanceof ReadableStream
    ) {
      return yield* Effect.fail(
        new ParseResult.Type(rawRequest.ast, value, "cannot encode aws query"),
      );
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
  });

export const FormatAwsQuery: FormatMiddleware = {
  request: formatAwsQueryRequest,
  response: (value) =>
    Effect.succeed({
      headers: value.headers,
      body: (() => {
        const data = parser.parse(value.body);
        const name = value.meta.name.split(".")[1];
        return data?.[`${name}Response`]?.[`${name}Result`];
      })(),
    }),
};

//todo(pear): can we just make this different behavior in `FormatAwsQuery`
export const FormatAwsEc2Query: FormatMiddleware = {
  request: formatAwsQueryRequest,
  response: (value) =>
    Effect.succeed({
      headers: value.headers,
      body: (() => {
        const data = parser.parse(value.body);
        const name = value.meta.name.split(".")[1];
        return data?.[`${name}Response`];
      })(),
    }),
};

//todo(pear) support error wrapping https://smithy.io/2.0/aws/protocols/aws-restxml-protocol.html#restxml-errors
export const FormatAwsXMLError: ErrorFormatMiddleware = (value) =>
  Effect.gen(function* () {
    const data = parser.parse(value.body);

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
        new ParseResult.Type(errorResponse.ast, value, "Unable to parse error code"),
      );
    }

    return {
      _tag,
      data,
    };
  });

export const FormatNoop: FormatMiddleware = {
  request: (value) => Effect.succeed(value as UnsignedRequest),
  response: (value) =>
    Effect.succeed({
      headers: value.headers,
      body: {},
    }),
};

function getSafeMetadata(
  partialMeta: Schema.Schema.Type<typeof OperationMeta>,
): Required<Schema.Schema.Type<typeof OperationMeta>> {
  return {
    uri: partialMeta.uri ?? "/",
    method: partialMeta.method ?? "POST",
    ...partialMeta,
  };
}

const getNested = (obj: object, path: string) =>
  //@ts-expect-error
  path.split(".").reduce((acc, key) => acc?.[key], obj);

type Instance<T> = T extends abstract new (...args: any) => infer U ? U : T;

export const makeOperation = <A extends ReturnType<typeof Operation>>(
  operationSchemaGenerator: () => A,
  Format: FormatMiddleware,
  ErrorMiddleware: ErrorFormatMiddleware,
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
  const inputSchema = operationSchema.fields.input;
  const inputAst = inputSchema.ast;
  const outputSchema = operationSchema.fields.output;
  const outputAst = outputSchema.ast;

  return Effect.fn(function* (
    payload: Schema.Schema.Type<A["schema"]["fields"]["input"]>,
  ) {
    const httpClient = yield* HttpClient.HttpClient;

    const meta = getSafeMetadata(
      yield* AST.getAnnotation<Schema.Schema.Type<typeof OperationMeta>>(
        operationSchema.ast,
        requestMetaSymbol,
      ),
    );

    yield* Effect.logDebug(
      `AWS Request - ${meta.sdkId}:${meta.name} - payload: ${JSON.stringify(payload)}`,
    );

    // Build raw request from input payload
    const structAst = AST.isTransformation(inputAst) ? inputAst.from : inputAst;
    const inputProps = AST.isTypeLiteral(structAst)
      ? structAst.propertySignatures
      : [];

    const headers: Record<string, string> = {
      "User-Agent": "itty-aws",
    };
    let uri = meta.uri;
    let requestBody:
      | Record<string, unknown>
      | undefined
      | string
      | Uint8Array
      | ReadableStream;

    for (const prop of inputProps) {
      const name = prop.name as keyof typeof payload;

      const headerAnnotation = AST.getAnnotation<string>(
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

      if (Option.isSome(headerAnnotation)) {
        headers[headerAnnotation.value] = payload[name] as string;
      } else if (Option.isSome(pathAnnotation)) {
        uri = uri.replace(
          new RegExp(`{${pathAnnotation.value}\\+?}`),
          `${payload[name]}`,
        );
      } else if (Option.isSome(bodyAnnotation)) {
        requestBody = { [bodyAnnotation.value]: payload[name] };
      } else if (Option.isSome(streamBodyAnnotation)) {
        requestBody = payload[name] as string | Uint8Array | ReadableStream;
      }
    }

    const rawReq: RawRequest = {
      unsignedUri: uri,
      unsignedHeaders: headers,
      unsignedBody: requestBody,
      meta,
    };

    // Apply format middleware to request
    const unsignedRequest = yield* Format.request(rawReq);

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

    const httpResponse = yield* httpClient[effectHttpMethod](signedRequest.url, {
      // @ts-expect-error - TODO(sam): what are the proper types here
      headers: signedRequest.headers,
      body: signedRequest.body
        ? typeof signedRequest.body === "string"
          ? HttpBody.text(signedRequest.body)
          : // @ts-expect-error - TODO(sam): what are the proper types here
            HttpBody.stream(signedRequest.body)
        : undefined,
    });

    const rawResp: RawResponse = {
      meta,
      body: yield* httpResponse.text,
      headers: httpResponse.headers,
    };

    yield* Effect.logDebug(
      `AWS Request - ${meta.sdkId}:${meta.name} - raw response: ${JSON.stringify(rawResp)}`,
    );

    if (httpResponse.status >= 200 && httpResponse.status < 300) {
      // Apply format middleware to response
      const formattedResponse = yield* Format.response(rawResp);

      // Extract output from formatted response
      const outputStructAst = AST.isTransformation(outputAst)
        ? outputAst.from
        : outputAst;
      const outputProps = AST.isTypeLiteral(outputStructAst)
        ? outputStructAst.propertySignatures
        : [];

      const outputPayload: Record<string, unknown> = {};

      for (const prop of outputProps) {
        const name = prop.name as string;

        const headerAnnotation = AST.getAnnotation<string>(
          prop.type,
          requestHeaderSymbol,
        );
        const bodyAnnotation = AST.getAnnotation<string>(
          prop.type,
          requestBodySymbol,
        );

        if (Option.isSome(headerAnnotation)) {
          outputPayload[name] = formattedResponse.headers[headerAnnotation.value];
        } else if (Option.isSome(bodyAnnotation)) {
          outputPayload[name] = getNested(
            formattedResponse.body,
            bodyAnnotation.value,
          );
        }
      }

      const result = yield* Schema.decodeUnknown(outputSchema)(outputPayload);

      yield* Effect.logDebug(
        `AWS Request - ${meta.sdkId}:${meta.name} - parsed response: ${JSON.stringify(result)}`,
      );
      return result;
    } else {
      const { _tag: errorTag, data: errorData } =
        yield* ErrorMiddleware(rawResp);
      const errorClasses = [
        ...(operationSchema.ast.annotations[requestError] as Array<unknown>),
        ...COMMON_ERRORS,
      ] as Array<{ _tag: string; make: (data: unknown) => A["errors"] }>;
      const matchingErrorClass = errorClasses.find(
        (errorClass) => errorClass._tag === errorTag,
      );
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
  PUT: "put",
  POST: "post",
  DELETE: "del",
  PATCH: "patch",
  HEAD: "head",
  OPTIONS: "options",
} as const;

import { HttpBody, HttpClient } from "@effect/platform";
import type { HttpClientError } from "@effect/platform/HttpClientError";
import { AwsV4Signer } from "aws4fetch";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as ParseResult from "effect/ParseResult";
import * as Schema from "effect/Schema";
import { requestError } from "./annotations.ts";
import { Credentials } from "./aws/credentials.ts";
import { Endpoint } from "./aws/endpoint.ts";
import { COMMON_ERRORS, UnknownAwsError, type CommonAwsError } from "./aws/errors.ts";
import { Region } from "./aws/region.ts";
import type { Middleware } from "./middleware/middleware.ts";
import type { Operation } from "./operation.ts";
import * as RequestFormatter from "./request-formatter.ts";
import * as ResponseParser from "./response-parser.ts";

export const make = <Op extends Operation>(
  initOperation: () => Op,
  ...middlewares: Middleware[]
): ((
  payload: Operation.Input<Op>,
) => Effect.Effect<
  Operation.Output<Op>,
  Operation.Error<Op> | ParseResult.ParseError | HttpClientError | UnknownAwsError | CommonAwsError,
  Region | Credentials | HttpClient.HttpClient
>) => {
  const op = initOperation();
  // pass these in as Layers so they can use Effects as part of their initialization once per-operation
  const requestFormatter = RequestFormatter.make(op);
  const responseParser = ResponseParser.make(op);

  // const FormatError = makeFormatErrorSchema(operationSchema, ErrorMiddleware);
  return (payload: Operation.Input<Op>) =>
    Effect.gen(function* () {
      const httpClient = yield* HttpClient.HttpClient;
      const formatRequest = yield* RequestFormatter.RequestFormatter;
      const parseResponse = yield* ResponseParser.ResponseParser;

      yield* Effect.logDebug(op.name, "Payload", payload);

      let unsignedRequest = yield* formatRequest(payload);
      for (const middleware of middlewares) {
        if (middleware.request) {
          unsignedRequest = yield* middleware.request(unsignedRequest);
        }
      }

      yield* Effect.logDebug(op.name, "Unsigned Request", unsignedRequest);

      const credentials = yield* Credentials;
      const region = yield* Region;
      const creds = yield* credentials.getCredentials();
      const endpoint = (yield* Effect.serviceOption(Endpoint)).pipe(
        Option.getOrElse(() => `${region}.amazonaws.com`),
      );

      // TODO(sam): don't create this per request
      const signer = new AwsV4Signer({
        method: op.method,
        url: `https://${op.sdkId.toLowerCase()}.${endpoint}${unsignedRequest.unsignedUri}`,
        headers: unsignedRequest.unsignedHeaders,
        body: unsignedRequest.unsignedBody,
        accessKeyId: creds.accessKeyId,
        secretAccessKey: creds.secretAccessKey,
        sessionToken: creds.sessionToken,
        service: op.sigV4ServiceName,
        region,
      });
      const signedRequest = yield* Effect.promise(() => signer.sign());

      yield* Effect.logDebug(op.name, "Signed Request", signedRequest);

      let httpClientMethod = signedRequest.method.toLocaleLowerCase() as
        | "get"
        | "post"
        | "put"
        | "del"
        | "patch"
        | "head"
        | "options"
        | "delete";
      if (httpClientMethod === "delete") {
        httpClientMethod = "del";
      }

      const rawResponse = yield* httpClient[httpClientMethod](signedRequest.url, {
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
        op,
        body: yield* rawResponse.text,
        headers: rawResponse.headers,
      };
      yield* Effect.logDebug(op.name, "Raw Response", responsePayload);
      if (rawResponse.status >= 200 && rawResponse.status < 300) {
        const response = yield* parseResponse(responsePayload);
        yield* Effect.logDebug(op.name, "Parsed Response", response);
        return response;
      } else {
        const { _tag: errorTag, data: errorData } =
          yield* Schema.decode(parseErrors)(responsePayload);
        const errorClasses = [
          ...(op.ast.annotations[requestError] as Array<unknown>),
          ...COMMON_ERRORS,
        ] as Array<{ _tag: string; make: (data: unknown) => Op["errors"] }>;
        const matchingErrorClass = errorClasses.find((errorClass) => errorClass._tag === errorTag);
        if (matchingErrorClass == null) {
          return yield* Effect.fail(
            UnknownAwsError.make({
              errorTag,
              errorData,
            }),
          );
        }
        yield* Effect.logDebug(op.name, "Parsed Error", errorData);
        return yield* Effect.fail(matchingErrorClass.make(errorData));
      }
    }).pipe(
      // TODO(sam): do these layers initializer only once per operation or is actually once per call?
      Effect.provide(Layer.mergeAll(requestFormatter, responseParser)),
    ) as any;
};

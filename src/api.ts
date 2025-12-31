import { HttpBody, HttpClient } from "@effect/platform";
import type { HttpClientError } from "@effect/platform/HttpClientError";
import { AwsV4Signer } from "aws4fetch";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as ParseResult from "effect/ParseResult";
import { Credentials } from "./aws/credentials.ts";
import { Endpoint } from "./aws/endpoint.ts";
import { COMMON_ERRORS, UnknownAwsError, type CommonAwsError } from "./aws/errors.ts";
import { Region } from "./aws/region.ts";
import type { Operation } from "./operation.ts";
import * as RequestBuilder from "./request-builder.ts";
import * as ResponseParser from "./response-parser.ts";

export const make = <Op extends Operation>(
  initOperation: () => Op,
): ((
  payload: Operation.Input<Op>,
) => Effect.Effect<
  Operation.Output<Op>,
  Operation.Error<Op> | ParseResult.ParseError | HttpClientError | UnknownAwsError | CommonAwsError,
  Region | Credentials | HttpClient.HttpClient
>) => {
  const op = initOperation();
  // pass these in as Layers so they can use Effects as part of their initialization once per-operation
  const createRequest = RequestBuilder.make(op);
  const parseResponse = ResponseParser.make(op);
  const parseError = op.errorParser(op);

  const errorClasses = Object.fromEntries(
    [...op.errors, ...COMMON_ERRORS].map((err) => [err._tag, err]),
  );

  return Effect.fnUntraced(function* (payload: Operation.Input<Op>) {
    const httpClient = yield* HttpClient.HttpClient;

    yield* Effect.logDebug(op.name, "Payload", payload);

    const unsignedRequest = yield* createRequest(payload);

    yield* Effect.logDebug(op.name, "Unsigned Request", unsignedRequest);

    const credentials = yield* Credentials;
    const region = yield* Region;
    const creds = yield* credentials.getCredentials();
    const endpoint = (yield* Effect.serviceOption(Endpoint)).pipe(
      // TODO(sam): implement rule-based endpoint resolution
      Option.getOrElse(() => `https://${op.sdkId.toLowerCase()}.${region}.amazonaws.com`),
    );

    const signer = new AwsV4Signer({
      method: op.method ?? "POST",
      url: `${endpoint}${unsignedRequest.unsignedUri}`,
      headers: unsignedRequest.unsignedHeaders,
      body:
        // TODO(sam): is this efficient?
        unsignedRequest.unsignedBody instanceof Uint8Array
          ? Buffer.from(unsignedRequest.unsignedBody)
          : unsignedRequest.unsignedBody,
      accessKeyId: creds.accessKeyId,
      secretAccessKey: creds.secretAccessKey,
      sessionToken: creds.sessionToken,
      service: op.sigV4ServiceName,
      region,
    });
    const signedRequest = yield* Effect.promise(() => signer.sign());

    yield* Effect.logDebug(op.name, "Signed Request", signedRequest);

    let httpClientMethod = signedRequest.method.toLocaleLowerCase();
    if (httpClientMethod === "delete") {
      httpClientMethod = "del";
    }

    const rawResponse = yield* httpClient[
      httpClientMethod as "get" | "post" | "put" | "del" | "patch" | "head" | "options" | "del"
    ](signedRequest.url, {
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
      const { _tag: errorTag, data: errorData } = yield* parseError(responsePayload);
      const matchingErrorClass = errorClasses[errorTag];
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
  });
};

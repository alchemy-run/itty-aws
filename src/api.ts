import { AwsV4Signer } from "aws4fetch";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import type * as ParseResult from "effect/ParseResult";
import { Credentials } from "./aws/credentials.ts";
import { Endpoint } from "./aws/endpoint.ts";
import { UnknownAwsError, type CommonAwsError } from "./aws/errors.ts";
import { Region } from "./aws/region.ts";
import type { Operation } from "./operation.ts";
import { makeRequestBuilder } from "./request-builder.ts";
import { makeResponseParser } from "./response-parser.ts";
import { getAwsAuthSigv4 } from "./traits.ts";

export const make = <Op extends Operation>(
  initOperation: () => Op,
): ((
  payload: Operation.Input<Op>,
) => Effect.Effect<
  Operation.Output<Op>,
  | Operation.Error<Op>
  | ParseResult.ParseError
  | Error
  | UnknownAwsError
  | CommonAwsError,
  Region | Credentials
>) => {
  const op = initOperation();
  let _init;
  const init = () => {
    const inputAst = op.input.ast;

    // Create request builder and response parser (preprocessing done once)
    const buildRequest = makeRequestBuilder(op);
    const parseResponse = makeResponseParser(op);

    // Get SigV4 service name from annotations
    const sigv4 = getAwsAuthSigv4(inputAst);
    return {
      buildRequest,
      parseResponse,
      sigv4,
    };
  };

  const fn = Effect.fnUntraced(function* (payload: Operation.Input<Op>) {
    const { buildRequest, parseResponse, sigv4 } = (_init ??=
      init()) as ReturnType<typeof init>;
    yield* Effect.logDebug("Payload", payload);

    // Build request using the request builder (handles protocol serialization + middleware)
    const request = yield* buildRequest(payload);

    yield* Effect.logDebug("Built Request", request);

    // Sign the request
    const credentials = yield* Credentials;
    const region = yield* Region;
    const creds = yield* credentials.getCredentials();
    const serviceName = sigv4?.name ?? "s3";
    const endpoint = (yield* Effect.serviceOption(Endpoint)).pipe(
      Option.getOrElse(() => `https://${serviceName}.${region}.amazonaws.com`),
    );

    // Build full URL with query string
    const queryString = Object.entries(request.query)
      .filter(([_, v]) => v !== undefined)
      .map(([k, v]) =>
        v
          ? `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
          : encodeURIComponent(k),
      )
      .join("&");
    const fullPath = queryString
      ? `${request.path}?${queryString}`
      : request.path;

    const signer = new AwsV4Signer({
      method: request.method,
      url: `${endpoint}${fullPath}`,
      headers: request.headers,
      body:
        request.body instanceof Uint8Array
          ? Buffer.from(request.body)
          : request.body,
      accessKeyId: creds.accessKeyId,
      secretAccessKey: creds.secretAccessKey,
      sessionToken: creds.sessionToken,
      service: serviceName,
      region,
    });
    const signedRequest = yield* Effect.promise(() => signer.sign());

    yield* Effect.logDebug("Signed Request", signedRequest);

    // Determine the body for fetch
    const isStreaming = signedRequest.body instanceof ReadableStream;
    let fetchBody: BodyInit | undefined;

    if (signedRequest.body) {
      if (typeof signedRequest.body === "string") {
        fetchBody = signedRequest.body;
      } else if (
        signedRequest.body instanceof Uint8Array ||
        signedRequest.body instanceof ArrayBuffer
      ) {
        fetchBody = signedRequest.body;
      } else if (isStreaming) {
        fetchBody = signedRequest.body;
      }
    }

    // Build headers object for fetch
    const fetchHeaders: Record<string, string> = {};
    signedRequest.headers.forEach((value, key) => {
      fetchHeaders[key] = value;
    });

    // Make the fetch request with full control
    // The signal from Effect.tryPromise enables proper interruption
    const rawResponse = yield* Effect.tryPromise({
      try: (signal) =>
        fetch(signedRequest.url, {
          method: signedRequest.method,
          headers: fetchHeaders,
          body: fetchBody,
          signal, // Propagate abort signal for Effect interruption
          // Enable streaming uploads - required for ReadableStream bodies
          ...(isStreaming ? { duplex: "half" as const } : {}),
        } as RequestInit),
      catch: (error) => new Error(`Fetch error: ${error}`),
    });

    yield* Effect.logDebug("Raw Response Status", rawResponse.status);

    // Convert response headers to Record
    const responseHeaders: Record<string, string> = {};
    rawResponse.headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });

    // Create response body stream
    const contentLength = responseHeaders["content-length"];
    const isEmptyBody = contentLength === "0" || rawResponse.status === 204;
    const responseBody = isEmptyBody
      ? new ReadableStream<Uint8Array>({ start: (c) => c.close() })
      : (rawResponse.body ??
        new ReadableStream<Uint8Array>({ start: (c) => c.close() }));

    // Parse response using the response parser
    // Handles both success (protocol deserialization + schema decoding)
    // and error responses (error deserialization + schema matching)
    const parsed = yield* parseResponse({
      status: rawResponse.status,
      statusText: rawResponse.statusText,
      headers: responseHeaders,
      body: responseBody,
    });

    yield* Effect.logDebug("Parsed Response", parsed);

    return parsed;
  });

  return Object.assign(fn, op);
};

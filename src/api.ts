import { HttpBody, HttpClient } from "@effect/platform";
import type { HttpClientError } from "@effect/platform/HttpClientError";
import { AwsV4Signer } from "aws4fetch";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import type * as ParseResult from "effect/ParseResult";
import * as Stream from "effect/Stream";
import { Credentials } from "./aws/credentials.ts";
import { Endpoint } from "./aws/endpoint.ts";
import { UnknownAwsError, type CommonAwsError } from "./aws/errors.ts";
import { Region } from "./aws/region.ts";
import type { Operation } from "./operation.ts";
import { getAwsAuthSigv4, getMiddleware, getProtocol } from "./traits.ts";

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
  const inputSchema = op.input;
  const inputAst = inputSchema.ast;

  // Discover protocol factory from input schema annotations
  const protocolFactory = getProtocol(inputAst);
  if (!protocolFactory) {
    throw new Error("No protocol found on input schema");
  }

  // Create the protocol handler with the operation (preprocessing done once)
  const protocol = protocolFactory(op);

  // Discover middleware from input schema annotations
  const middleware = getMiddleware(inputAst);

  // Get SigV4 service name from annotations
  const sigv4 = getAwsAuthSigv4(inputAst);

  // @ts-expect-error
  return Effect.fnUntraced(function* (payload: Operation.Input<Op>) {
    const httpClient = yield* HttpClient.HttpClient;

    yield* Effect.logDebug("Payload", payload);

    // Serialize request using the protocol handler
    let request = yield* protocol.serializeRequest(payload);

    yield* Effect.logDebug("Serialized Request", request);

    // Apply middleware
    for (const mw of middleware) {
      request = yield* mw(inputSchema, request);
    }

    yield* Effect.logDebug("After Middleware", request);

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
        v ? `${encodeURIComponent(k)}=${encodeURIComponent(v)}` : encodeURIComponent(k),
      )
      .join("&");
    const fullPath = queryString ? `${request.path}?${queryString}` : request.path;

    const signer = new AwsV4Signer({
      method: request.method,
      url: `${endpoint}${fullPath}`,
      headers: request.headers,
      body: request.body instanceof Uint8Array ? Buffer.from(request.body) : request.body,
      accessKeyId: creds.accessKeyId,
      secretAccessKey: creds.secretAccessKey,
      sessionToken: creds.sessionToken,
      service: serviceName,
      region,
    });
    const signedRequest = yield* Effect.promise(() => signer.sign());

    yield* Effect.logDebug("Signed Request", signedRequest);

    let httpClientMethod = signedRequest.method.toLowerCase();
    if (httpClientMethod === "delete") {
      httpClientMethod = "del";
    }

    // Determine the correct HttpBody type based on the body content
    // Use HttpBody.raw for string/binary bodies to preserve our Content-Type header
    // (HttpBody.text would override with "text/plain")
    let httpBody: HttpBody.HttpBody | undefined;
    if (signedRequest.body) {
      if (typeof signedRequest.body === "string") {
        // Encode string to Uint8Array and use raw to preserve Content-Type header
        httpBody = HttpBody.raw(new TextEncoder().encode(signedRequest.body));
      } else if (
        signedRequest.body instanceof Uint8Array ||
        signedRequest.body instanceof ArrayBuffer
      ) {
        httpBody = HttpBody.raw(
          signedRequest.body instanceof ArrayBuffer
            ? new Uint8Array(signedRequest.body)
            : signedRequest.body,
        );
      } else if (signedRequest.body instanceof ReadableStream) {
        // Convert ReadableStream to Effect Stream, then to HttpBody.stream
        // This ensures duplex: "half" is set for streaming uploads
        const effectStream = Stream.fromReadableStream(
          () => signedRequest.body as ReadableStream,
          (e) => new Error(String(e)),
        );
        httpBody = HttpBody.stream(effectStream);
      }
    }

    const rawResponse = yield* httpClient[
      httpClientMethod as "get" | "post" | "put" | "del" | "patch" | "head" | "options"
    ](signedRequest.url, {
      // @ts-expect-error - TODO: fix types
      headers: signedRequest.headers,
      body: httpBody,
    });

    yield* Effect.logDebug("Raw Response Status", rawResponse.status);

    // Effect's Headers is already a Record<string, string> with lowercase keys
    const responseHeaders = rawResponse.headers as unknown as Record<string, string>;

    // Create empty ReadableStream for empty bodies, otherwise convert Effect Stream
    const contentLength = responseHeaders["content-length"];
    const isEmptyBody = contentLength === "0" || rawResponse.status === 204;
    const responseBody = isEmptyBody
      ? new ReadableStream<Uint8Array>({ start: (c) => c.close() })
      : Stream.toReadableStream(rawResponse.stream);

    if (rawResponse.status >= 200 && rawResponse.status < 300) {
      // Deserialize response using the protocol handler
      const parsed = yield* protocol.deserializeResponse({
        status: rawResponse.status,
        statusText: "",
        headers: responseHeaders,
        body: responseBody,
      });

      yield* Effect.logDebug("Parsed Response", parsed);

      // Decode through schema for validation and transformation
      return parsed;
    } else {
      // For errors, read the body as text for error message
      const errorBody = yield* rawResponse.text;
      return yield* Effect.fail(
        UnknownAwsError.make({
          errorTag: "UnknownError",
          errorData: { body: errorBody, status: rawResponse.status },
        }),
      );
    }
  });
};

import { AwsV4Signer } from "aws4fetch";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import type * as ParseResult from "effect/ParseResult";
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
  Operation.Error<Op> | ParseResult.ParseError | Error | UnknownAwsError | CommonAwsError,
  Region | Credentials
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
      : (rawResponse.body ?? new ReadableStream<Uint8Array>({ start: (c) => c.close() }));

    if (rawResponse.status >= 200 && rawResponse.status < 300) {
      // Deserialize response using the protocol handler
      const parsed = yield* protocol.deserializeResponse({
        status: rawResponse.status,
        statusText: rawResponse.statusText,
        headers: responseHeaders,
        body: responseBody,
      });

      yield* Effect.logDebug("Parsed Response", parsed);

      // Decode through schema for validation and transformation
      return parsed;
    } else {
      // For errors, read the body as text for error message
      const errorBody = yield* Effect.tryPromise({
        try: () => rawResponse.text(),
        catch: (e) => new Error(`Failed to read error body: ${e}`),
      });
      return yield* Effect.fail(
        UnknownAwsError.make({
          errorTag: "UnknownError",
          errorData: { body: errorBody, status: rawResponse.status },
        }),
      );
    }
  });
};

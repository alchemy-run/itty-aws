import { Effect } from "effect";
import { HttpClient } from "@effect/platform";
import type { ServiceMetadata } from "../service-metadata";
import { Credentials } from "../credentials";
import { Region } from "../region";
//todo(pear): this is a massive 7kb
import { XMLBuilder, XMLParser } from "fast-xml-parser";
//todo(pear): this is a massive 7kb
import { AwsV4Signer } from "aws4fetch";
import { createDynamicTaggedError, UnknownAwsError } from "../aws-errors";

const commonErrorDetails = {
  AccessDeniedException: [],
  ExpiredTokenException: [],
  IncompleteSignature: [],
  InternalFailure: [],
  MalformedHttpRequestException: [],
  NotAuthorized: [],
  OptInRequired: [],
  RequestAbortedException: [],
  RequestEntityTooLargeException: [],
  RequestExpired: [],
  RequestTimeoutException: [],
  ServiceUnavailable: [],
  ThrottlingException: [],
  UnrecognizedClientException: [],
  UnknownOperationException: [],
  ValidationError: [],
  ValidationException: [],
};

//todo(pear): make these single letter variables
export type EndpointMetadata = {
  name: string;
  method: string; //* method => //todo(pear): narrower type
  uri: string; //* uri
  body: Record<string, ["p" | "b", string] | [string]>; //* body
  //todo(pear): these seem to always be in the body?
  errors: Record<string, Array<string>>;
  isStream?: boolean;
};

//todo(pear): there is stuff here that could be shared across protocols
export const restXmlProvider = Effect.fn(function* (metadata: ServiceMetadata) {
  const credentials = yield* Credentials;
  const region = yield* Region;
  const builder = new XMLBuilder();
  const parser = new XMLParser();
  const httpClient = yield* HttpClient.HttpClient;

  return {
    call: (endpointMetadata: EndpointMetadata) =>
      Effect.fn(function* (input: Record<string, unknown>) {
        let uri = endpointMetadata.uri;
        const rawBody: Record<string, unknown> = {};
        const unsignedHeaders: Record<string, unknown> = {
          "User-Agent": "itty-aws",
        };

        for (const key in input) {
          const value = input[key];
          const meta = endpointMetadata.body[key];

          if (!meta) {
            unsignedHeaders[
              `x-amz-${key
                .replace(/([A-Z])/g, "-$1")
                .toLowerCase()
                .slice(1)}`
            ] = value;
          } else if (meta[0] === "p") {
            uri = uri.replace(
              new RegExp(`{${meta[1] ?? key}\\+?}`),
              `${value}`,
            );
          } else if (meta[0] === "b") {
            rawBody[meta[1] ?? key] = value;
          } else {
            unsignedHeaders[meta[0]] = value;
          }
        }

        const unsignedBody = builder.build(rawBody);

        //todo(pear): more url options?
        const baseUrl = `https://${metadata.sdkId.toLowerCase()}.${region}.amazonaws.com`;
        let unsignedUrl = `${baseUrl}${uri}`;

        yield* Effect.logDebug(
          `AWS Request - ${metadata.sdkId}:${endpointMetadata.name} - data:`,
          {
            unsignedUrl,
            unsignedHeaders,
            unsignedBody,
          },
        );

        const creds = yield* credentials.getCredentials();
        const signer = new AwsV4Signer({
          method: endpointMetadata.method,
          url: unsignedUrl,
          headers: unsignedHeaders,
          body:
            endpointMetadata.method === "GET" ||
            endpointMetadata.method === "DELETE"
              ? undefined
              : unsignedBody,
          accessKeyId: creds.accessKeyId,
          secretAccessKey: creds.secretAccessKey,
          sessionToken: creds.sessionToken,
          service: metadata.sigV4ServiceName,
          region,
        });

        //todo(pear): better error
        const signedRequest = yield* Effect.promise(() => signer.sign());

        yield* Effect.logDebug(
          `AWS Request - ${metadata.sdkId}:${endpointMetadata.name} - request info:`,
          {
            method: signedRequest.method,
            url: signedRequest.url.toString(),
            headers: signedRequest.headers,
            body: signedRequest.body,
          },
        );

        //todo(pear): better error
        const response = yield* httpClient[
          (signedRequest.method === "DELETE"
            ? "del"
            : signedRequest.method.toLowerCase()) as
            | "get"
            | "post"
            | "put"
            | "del"
            | "patch"
            | "head"
            | "options"
        ](signedRequest.url, {
          headers: signedRequest.headers,
          body: signedRequest.body,
        });

        yield* Effect.logDebug(
          `AWS Request - ${metadata.sdkId}:${endpointMetadata.name} - response code: ${response.status}`,
        );

        //todo(pear): is this a good error distinguisher -- it is not
        if (response.status >= 200 && response.status < 300) {
          //convert to response type
          yield* Effect.logDebug(
            `AWS Request - ${metadata.sdkId}:${endpointMetadata.name} - response headers: ${JSON.stringify(response.headers)}`,
          );
          yield* Effect.logDebug("test", endpointMetadata);
          return yield* response.text;
        } else {
          const text = yield* response.text;

          yield* Effect.logDebug(
            `AWS Request - ${metadata.sdkId}:${endpointMetadata.name} - raw error:`,
            text,
          );

          const parsedResponse = parser.parse(text);

          yield* Effect.logDebug(
            `AWS Request - ${metadata.sdkId}:${endpointMetadata.name} - error:`,
            parsedResponse,
          );

          const errorFmt: Array<string> | undefined =
            endpointMetadata.errors[parsedResponse.Error.Code] ??
            //@ts-expect-error
            commonErrorDetails[parsedResponse.Error.Code];

          return yield* Effect.if(errorFmt != null, {
            onFalse: () =>
              Effect.fail(
                new UnknownAwsError({
                  key: parsedResponse.Error.Code,
                  data: parsedResponse,
                }),
              ),
            onTrue: () =>
              Effect.fail(
                createDynamicTaggedError(
                  parsedResponse.Error.Code,
                  errorFmt!.reduce((acc, curr) => {
                    const value = parsedResponse.Error[curr];
                    if (value != null) {
                      return { ...acc, [curr]: parsedResponse.Error[curr] };
                    }
                    return acc;
                  }, {}),
                ),
              ),
          });
        }
      }),
  } as {
    call: (metadata: any) => (input: any) => Effect.Effect<any>;
    _endpointMetadataType: EndpointMetadata;
  };
});

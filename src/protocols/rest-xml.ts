import { Effect, Match } from "effect";
import type { ServiceMetadata } from "../service-metadata";
import { Credentials } from "../credentials";

export type ClientConfig = {};

//todo(pear): make these single letter variables
export type EndpointMetadata = {
  method: string; //todo(pear): narrower type
  uri: string;
  //* p: => path, b: => body, default string => header; missing => header x-amz-
  // body: Record<string, `p:${string}` | `b:${string}` | string>;
  body: Record<string, ["p" | "b", string] | [string]>;
};

export const restXmlProvider = Effect.fn(function* (
  clientConfig: ClientConfig,
  metadata: ServiceMetadata,
) {
  const credentials = yield* Credentials;
  return {
    call: (endpointMetadata: EndpointMetadata) =>
      Effect.fn(function* (input: Record<string, unknown>) {
        let url = endpointMetadata.uri;
        const body: Record<string, unknown> = {};
        const headers: Record<string, unknown> = {};

        for (const key in input) {
          const value = input[key];
          const meta = endpointMetadata.body[key];

          if (!meta) {
            headers[
              `x-amz-${key
                .replace(/([A-Z])/g, "-$1")
                .toLowerCase()
                .slice(1)}`
            ] = value;
          } else if (meta[0] === "p") {
            url = url
              .replace(`{${key}}`, `${value}`)
              .replace(`{${key}+}`, `${value}`);
          } else if (meta[0] === "b") {
            body[meta[1]!] = value;
          } else {
            headers[meta[0]] = value;
          }
        }

        console.log({ url, body, headers });

        yield* Effect.void;
      }),
  } as {
    call: (metadata: any) => (input: any) => Effect.Effect<any>;
    _endpointMetadataType: EndpointMetadata;
  };
});

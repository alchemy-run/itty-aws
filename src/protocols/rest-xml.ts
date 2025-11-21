import { Effect, Match } from "effect";
import type { ServiceMetadata } from "../service-metadata";
import { Credentials } from "../credentials";

export type ClientConfig = {};

//todo(pear): make these single letter variables
export type EndpointMetadata = {
  method: string; //todo(pear): narrower type
  uri: string;
  //* p: => path, b: => body, default string => header; missing => header x-amz-
  body: Record<string, `p:${string}` | `b:${string}` | string>;
};

export const restXmlProvider = Effect.fn(function* (
  clientConfig: ClientConfig,
  metadata: ServiceMetadata,
) {
  const credentials = yield* Credentials;
  return {
    call: (endpointMetadata: EndpointMetadata) =>
      Effect.fn(function* (input: Record<string, unknown>) {
        const result = yield* Effect.reduce(
          Object.entries(input),
          {
            url: endpointMetadata.uri,
            body: {} as Record<string, unknown>,
            headers: {} as Record<string, unknown>,
          },
          (acc, [key, value]) => {
            const mapping = endpointMetadata.body[key];
            if (!mapping) {
              return Effect.succeed({
                ...acc,
                headers: {
                  ...acc.headers,
                  ["x-amz-" +
                  key
                    .replace(/([A-Z])/g, "-$1")
                    .toLowerCase()
                    .slice(1)]: value,
                },
              });
            }

            return Match.value(mapping).pipe(
              Match.when(
                (m) => m.startsWith("p:"),
                (m) =>
                  Effect.succeed({
                    ...acc,
                    url: acc.url.replace(
                      new RegExp(`\\{${key}\\+?\\}`, "g"),
                      String(value),
                    ),
                  }),
              ),
              Match.when(
                (m) => m.startsWith("b:"),
                (m) =>
                  Effect.succeed({
                    ...acc,
                    body: { ...acc.body, [m.slice(2)]: value },
                  }),
              ),
              Match.orElse((m) =>
                Effect.succeed({
                  ...acc,
                  headers: { ...acc.headers, [m]: value },
                }),
              ),
            );
          },
        );

        console.log(result);
      }),
  } as {
    call: (metadata: any) => (input: any) => Effect.Effect<any>;
    _endpointMetadataType: EndpointMetadata;
  };
});

import { Effect } from "effect";
import type { ServiceMetadata } from "../service-metadata";

export function loggerProvider(clientConfig: any, metadata: ServiceMetadata) {
  return {
    call: (endpointMetadata: any) => (input: any) =>
      Effect.sync(() => {
        console.log("Client Config:", clientConfig);
        console.log("Service metadata:", metadata);
        console.log("Endpoint metadata:", endpointMetadata);
        console.log("Input:", input);
      }),
  };
}

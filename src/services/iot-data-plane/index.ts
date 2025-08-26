import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTDataPlane as _IoTDataPlane } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "IoT Data Plane",
  version: "2015-05-28",
  protocol: "restJson1",
  sigV4ServiceName: "iotdata",
  endpointPrefix: "data-ats.iot",
  operations: {
    DeleteThingShadow: {
      http: "DELETE /things/{thingName}/shadow",
      traits: {
        payload: "httpPayload",
      },
    },
    GetRetainedMessage: "GET /retainedMessage/{topic}",
    GetThingShadow: {
      http: "GET /things/{thingName}/shadow",
      traits: {
        payload: "httpPayload",
      },
    },
    ListNamedShadowsForThing:
      "GET /api/things/shadow/ListNamedShadowsForThing/{thingName}",
    ListRetainedMessages: "GET /retainedMessage",
    Publish: "POST /topics/{topic}",
    UpdateThingShadow: {
      http: "POST /things/{thingName}/shadow",
      traits: {
        payload: "httpPayload",
      },
    },
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const IoTDataPlane = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _IoTDataPlane;

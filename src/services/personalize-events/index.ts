import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { PersonalizeEvents as _PersonalizeEvents } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Personalize Events",
  version: "2018-03-22",
  protocol: "restJson1",
  sigV4ServiceName: "personalize",
  endpointPrefix: "personalize-events",
  operations: {
    PutActionInteractions: "POST /action-interactions",
    PutActions: "POST /actions",
    PutEvents: "POST /events",
    PutItems: "POST /items",
    PutUsers: "POST /users",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const PersonalizeEvents = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _PersonalizeEvents;

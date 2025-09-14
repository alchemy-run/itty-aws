import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { PersonalizeEvents as _PersonalizeEventsClient } from "./types.ts";

export * from "./types.ts";

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

export type PersonalizeEvents = typeof PersonalizeEvents;
export const PersonalizeEvents = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestJson1Handler());
  }
} as unknown as typeof _PersonalizeEventsClient;

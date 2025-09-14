import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { WorkMailMessageFlow as _WorkMailMessageFlowClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "WorkMailMessageFlow",
  version: "2019-05-01",
  protocol: "restJson1",
  sigV4ServiceName: "workmailmessageflow",
  endpointPrefix: "workmailmessageflow",
  operations: {
    GetRawMessageContent: {
      http: "GET /messages/{messageId}",
      traits: {
        messageContent: "httpPayload",
      },
    },
    PutRawMessageContent: "POST /messages/{messageId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type WorkMailMessageFlow = typeof WorkMailMessageFlow;
export const WorkMailMessageFlow = class extends AWSServiceClient {
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
} as unknown as typeof _WorkMailMessageFlowClient;

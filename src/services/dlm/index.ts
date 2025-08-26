import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { DLM as _DLM } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "DLM",
  version: "2018-01-12",
  protocol: "restJson1",
  sigV4ServiceName: "dlm",
  endpointPrefix: "dlm",
  operations: {
    CreateLifecyclePolicy: "POST /policies",
    DeleteLifecyclePolicy: "DELETE /policies/{PolicyId}",
    GetLifecyclePolicies: "GET /policies",
    GetLifecyclePolicy: "GET /policies/{PolicyId}",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateLifecyclePolicy: "PATCH /policies/{PolicyId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const DLM = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _DLM;

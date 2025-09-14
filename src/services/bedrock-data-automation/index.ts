import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { BedrockDataAutomation as _BedrockDataAutomationClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Bedrock Data Automation",
  version: "2023-07-26",
  protocol: "restJson1",
  sigV4ServiceName: "bedrock",
  endpointPrefix: "bedrock-data-automation",
  operations: {
    CreateBlueprintVersion: "POST /blueprints/{blueprintArn}/versions/",
    ListTagsForResource: "POST /listTagsForResource",
    TagResource: "POST /tagResource",
    UntagResource: "POST /untagResource",
    CreateBlueprint: "PUT /blueprints/",
    CreateDataAutomationProject: "PUT /data-automation-projects/",
    DeleteBlueprint: "DELETE /blueprints/{blueprintArn}/",
    DeleteDataAutomationProject:
      "DELETE /data-automation-projects/{projectArn}/",
    GetBlueprint: "POST /blueprints/{blueprintArn}/",
    GetDataAutomationProject: "POST /data-automation-projects/{projectArn}/",
    ListBlueprints: "POST /blueprints/",
    ListDataAutomationProjects: "POST /data-automation-projects/",
    UpdateBlueprint: "PUT /blueprints/{blueprintArn}/",
    UpdateDataAutomationProject: "PUT /data-automation-projects/{projectArn}/",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type BedrockDataAutomation = typeof BedrockDataAutomation;
export const BedrockDataAutomation = class extends AWSServiceClient {
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
} as unknown as typeof _BedrockDataAutomationClient;

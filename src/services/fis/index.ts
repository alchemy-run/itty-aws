import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { fis as _fisClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "fis",
  version: "2020-12-01",
  protocol: "restJson1",
  sigV4ServiceName: "fis",
  endpointPrefix: "fis",
  operations: {
    CreateExperimentTemplate: "POST /experimentTemplates",
    CreateTargetAccountConfiguration:
      "POST /experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}",
    DeleteExperimentTemplate: "DELETE /experimentTemplates/{id}",
    DeleteTargetAccountConfiguration:
      "DELETE /experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}",
    GetAction: "GET /actions/{id}",
    GetExperiment: "GET /experiments/{id}",
    GetExperimentTargetAccountConfiguration:
      "GET /experiments/{experimentId}/targetAccountConfigurations/{accountId}",
    GetExperimentTemplate: "GET /experimentTemplates/{id}",
    GetSafetyLever: "GET /safetyLevers/{id}",
    GetTargetAccountConfiguration:
      "GET /experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}",
    GetTargetResourceType: "GET /targetResourceTypes/{resourceType}",
    ListActions: "GET /actions",
    ListExperimentResolvedTargets:
      "GET /experiments/{experimentId}/resolvedTargets",
    ListExperiments: "GET /experiments",
    ListExperimentTargetAccountConfigurations:
      "GET /experiments/{experimentId}/targetAccountConfigurations",
    ListExperimentTemplates: "GET /experimentTemplates",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListTargetAccountConfigurations:
      "GET /experimentTemplates/{experimentTemplateId}/targetAccountConfigurations",
    ListTargetResourceTypes: "GET /targetResourceTypes",
    StartExperiment: "POST /experiments",
    StopExperiment: "DELETE /experiments/{id}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateExperimentTemplate: "PATCH /experimentTemplates/{id}",
    UpdateSafetyLeverState: "PATCH /safetyLevers/{id}/state",
    UpdateTargetAccountConfiguration:
      "PATCH /experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type fis = typeof fis;
export const fis = class extends AWSServiceClient {
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
} as unknown as typeof _fisClient;

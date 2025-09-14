import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { OSIS as _OSISClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "OSIS",
  version: "2022-01-01",
  protocol: "restJson1",
  sigV4ServiceName: "osis",
  endpointPrefix: "osis",
  operations: {
    CreatePipeline: "POST /2022-01-01/osis/createPipeline",
    DeletePipeline: "DELETE /2022-01-01/osis/deletePipeline/{PipelineName}",
    GetPipeline: "GET /2022-01-01/osis/getPipeline/{PipelineName}",
    GetPipelineBlueprint:
      "GET /2022-01-01/osis/getPipelineBlueprint/{BlueprintName}",
    GetPipelineChangeProgress:
      "GET /2022-01-01/osis/getPipelineChangeProgress/{PipelineName}",
    ListPipelineBlueprints: "POST /2022-01-01/osis/listPipelineBlueprints",
    ListPipelines: "GET /2022-01-01/osis/listPipelines",
    ListTagsForResource: "GET /2022-01-01/osis/listTagsForResource",
    StartPipeline: "PUT /2022-01-01/osis/startPipeline/{PipelineName}",
    StopPipeline: "PUT /2022-01-01/osis/stopPipeline/{PipelineName}",
    TagResource: "POST /2022-01-01/osis/tagResource",
    UntagResource: "POST /2022-01-01/osis/untagResource",
    UpdatePipeline: "PUT /2022-01-01/osis/updatePipeline/{PipelineName}",
    ValidatePipeline: "POST /2022-01-01/osis/validatePipeline",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const OSIS = class extends AWSServiceClient {
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
} as unknown as typeof _OSISClient;

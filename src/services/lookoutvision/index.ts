import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { LookoutVision as _LookoutVision } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "LookoutVision",
  version: "2020-11-20",
  protocol: "restJson1",
  sigV4ServiceName: "lookoutvision",
  endpointPrefix: "lookoutvision",
  operations: {
    CreateDataset: "POST /2020-11-20/projects/{ProjectName}/datasets",
    CreateModel: "POST /2020-11-20/projects/{ProjectName}/models",
    CreateProject: "POST /2020-11-20/projects",
    DeleteDataset:
      "DELETE /2020-11-20/projects/{ProjectName}/datasets/{DatasetType}",
    DeleteModel:
      "DELETE /2020-11-20/projects/{ProjectName}/models/{ModelVersion}",
    DeleteProject: "DELETE /2020-11-20/projects/{ProjectName}",
    DescribeDataset:
      "GET /2020-11-20/projects/{ProjectName}/datasets/{DatasetType}",
    DescribeModel:
      "GET /2020-11-20/projects/{ProjectName}/models/{ModelVersion}",
    DescribeModelPackagingJob:
      "GET /2020-11-20/projects/{ProjectName}/modelpackagingjobs/{JobName}",
    DescribeProject: "GET /2020-11-20/projects/{ProjectName}",
    DetectAnomalies:
      "POST /2020-11-20/projects/{ProjectName}/models/{ModelVersion}/detect",
    ListDatasetEntries:
      "GET /2020-11-20/projects/{ProjectName}/datasets/{DatasetType}/entries",
    ListModelPackagingJobs:
      "GET /2020-11-20/projects/{ProjectName}/modelpackagingjobs",
    ListModels: "GET /2020-11-20/projects/{ProjectName}/models",
    ListProjects: "GET /2020-11-20/projects",
    ListTagsForResource: "GET /2020-11-20/tags/{ResourceArn}",
    StartModel:
      "POST /2020-11-20/projects/{ProjectName}/models/{ModelVersion}/start",
    StartModelPackagingJob:
      "POST /2020-11-20/projects/{ProjectName}/modelpackagingjobs",
    StopModel:
      "POST /2020-11-20/projects/{ProjectName}/models/{ModelVersion}/stop",
    TagResource: "POST /2020-11-20/tags/{ResourceArn}",
    UntagResource: "DELETE /2020-11-20/tags/{ResourceArn}",
    UpdateDatasetEntries:
      "PATCH /2020-11-20/projects/{ProjectName}/datasets/{DatasetType}/entries",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const LookoutVision = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _LookoutVision;

import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { m2 as _m2 } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "m2",
  version: "2021-04-28",
  protocol: "restJson1",
  sigV4ServiceName: "m2",
  endpointPrefix: "m2",
  operations: {
    GetSignedBluinsightsUrl: "GET /signed-bi-url",
    ListEngineVersions: "GET /engine-versions",
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CancelBatchJobExecution:
      "POST /applications/{applicationId}/batch-job-executions/{executionId}/cancel",
    CreateApplication: "POST /applications",
    CreateDataSetExportTask:
      "POST /applications/{applicationId}/dataset-export-task",
    CreateDataSetImportTask:
      "POST /applications/{applicationId}/dataset-import-task",
    CreateDeployment: "POST /applications/{applicationId}/deployments",
    CreateEnvironment: "POST /environments",
    DeleteApplication: "DELETE /applications/{applicationId}",
    DeleteApplicationFromEnvironment:
      "DELETE /applications/{applicationId}/environment/{environmentId}",
    DeleteEnvironment: "DELETE /environments/{environmentId}",
    GetApplication: "GET /applications/{applicationId}",
    GetApplicationVersion:
      "GET /applications/{applicationId}/versions/{applicationVersion}",
    GetBatchJobExecution:
      "GET /applications/{applicationId}/batch-job-executions/{executionId}",
    GetDataSetDetails:
      "GET /applications/{applicationId}/datasets/{dataSetName}",
    GetDataSetExportTask:
      "GET /applications/{applicationId}/dataset-export-tasks/{taskId}",
    GetDataSetImportTask:
      "GET /applications/{applicationId}/dataset-import-tasks/{taskId}",
    GetDeployment:
      "GET /applications/{applicationId}/deployments/{deploymentId}",
    GetEnvironment: "GET /environments/{environmentId}",
    ListApplicationVersions: "GET /applications/{applicationId}/versions",
    ListApplications: "GET /applications",
    ListBatchJobDefinitions:
      "GET /applications/{applicationId}/batch-job-definitions",
    ListBatchJobExecutions:
      "GET /applications/{applicationId}/batch-job-executions",
    ListBatchJobRestartPoints:
      "GET /applications/{applicationId}/batch-job-executions/{executionId}/steps",
    ListDataSetExportHistory:
      "GET /applications/{applicationId}/dataset-export-tasks",
    ListDataSetImportHistory:
      "GET /applications/{applicationId}/dataset-import-tasks",
    ListDataSets: "GET /applications/{applicationId}/datasets",
    ListDeployments: "GET /applications/{applicationId}/deployments",
    ListEnvironments: "GET /environments",
    StartApplication: "POST /applications/{applicationId}/start",
    StartBatchJob: "POST /applications/{applicationId}/batch-job",
    StopApplication: "POST /applications/{applicationId}/stop",
    UpdateApplication: "PATCH /applications/{applicationId}",
    UpdateEnvironment: "PATCH /environments/{environmentId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const m2 = class extends AWSServiceClient {
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
} as unknown as typeof _m2;

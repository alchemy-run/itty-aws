import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { EMRServerless as _EMRServerless } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "EMR Serverless",
  version: "2021-07-13",
  protocol: "restJson1",
  sigV4ServiceName: "emr-serverless",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CancelJobRun: "DELETE /applications/{applicationId}/jobruns/{jobRunId}",
    CreateApplication: "POST /applications",
    DeleteApplication: "DELETE /applications/{applicationId}",
    GetApplication: "GET /applications/{applicationId}",
    GetDashboardForJobRun:
      "GET /applications/{applicationId}/jobruns/{jobRunId}/dashboard",
    GetJobRun: "GET /applications/{applicationId}/jobruns/{jobRunId}",
    ListApplications: "GET /applications",
    ListJobRunAttempts:
      "GET /applications/{applicationId}/jobruns/{jobRunId}/attempts",
    ListJobRuns: "GET /applications/{applicationId}/jobruns",
    StartApplication: "POST /applications/{applicationId}/start",
    StartJobRun: "POST /applications/{applicationId}/jobruns",
    StopApplication: "POST /applications/{applicationId}/stop",
    UpdateApplication: "PATCH /applications/{applicationId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const EMRServerless = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _EMRServerless;

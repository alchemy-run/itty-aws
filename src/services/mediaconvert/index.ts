import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MediaConvert as _MediaConvertClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "MediaConvert",
  version: "2017-08-29",
  protocol: "restJson1",
  sigV4ServiceName: "mediaconvert",
  endpointPrefix: "mediaconvert",
  operations: {
    AssociateCertificate: "POST /2017-08-29/certificates",
    CancelJob: "DELETE /2017-08-29/jobs/{Id}",
    CreateJob: "POST /2017-08-29/jobs",
    CreateJobTemplate: "POST /2017-08-29/jobTemplates",
    CreatePreset: "POST /2017-08-29/presets",
    CreateQueue: "POST /2017-08-29/queues",
    DeleteJobTemplate: "DELETE /2017-08-29/jobTemplates/{Name}",
    DeletePolicy: "DELETE /2017-08-29/policy",
    DeletePreset: "DELETE /2017-08-29/presets/{Name}",
    DeleteQueue: "DELETE /2017-08-29/queues/{Name}",
    DescribeEndpoints: "POST /2017-08-29/endpoints",
    DisassociateCertificate: "DELETE /2017-08-29/certificates/{Arn}",
    GetJob: "GET /2017-08-29/jobs/{Id}",
    GetJobTemplate: "GET /2017-08-29/jobTemplates/{Name}",
    GetPolicy: "GET /2017-08-29/policy",
    GetPreset: "GET /2017-08-29/presets/{Name}",
    GetQueue: "GET /2017-08-29/queues/{Name}",
    ListJobs: "GET /2017-08-29/jobs",
    ListJobTemplates: "GET /2017-08-29/jobTemplates",
    ListPresets: "GET /2017-08-29/presets",
    ListQueues: "GET /2017-08-29/queues",
    ListTagsForResource: "GET /2017-08-29/tags/{Arn}",
    ListVersions: "GET /2017-08-29/versions",
    Probe: "POST /2017-08-29/probe",
    PutPolicy: "PUT /2017-08-29/policy",
    SearchJobs: "GET /2017-08-29/search",
    TagResource: "POST /2017-08-29/tags",
    UntagResource: "PUT /2017-08-29/tags/{Arn}",
    UpdateJobTemplate: "PUT /2017-08-29/jobTemplates/{Name}",
    UpdatePreset: "PUT /2017-08-29/presets/{Name}",
    UpdateQueue: "PUT /2017-08-29/queues/{Name}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MediaConvert = class extends AWSServiceClient {
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
} as unknown as typeof _MediaConvertClient;

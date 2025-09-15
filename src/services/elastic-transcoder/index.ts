import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ElasticTranscoder as _ElasticTranscoderClient } from "./types.ts";

export * from "./types.ts";

export {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Elastic Transcoder",
  version: "2012-09-25",
  protocol: "restJson1",
  sigV4ServiceName: "elastictranscoder",
  endpointPrefix: "elastictranscoder",
  operations: {
    CancelJob: "DELETE /2012-09-25/jobs/{Id}",
    CreateJob: "POST /2012-09-25/jobs",
    CreatePipeline: "POST /2012-09-25/pipelines",
    CreatePreset: "POST /2012-09-25/presets",
    DeletePipeline: "DELETE /2012-09-25/pipelines/{Id}",
    DeletePreset: "DELETE /2012-09-25/presets/{Id}",
    ListJobsByPipeline: "GET /2012-09-25/jobsByPipeline/{PipelineId}",
    ListJobsByStatus: "GET /2012-09-25/jobsByStatus/{Status}",
    ListPipelines: "GET /2012-09-25/pipelines",
    ListPresets: "GET /2012-09-25/presets",
    ReadJob: "GET /2012-09-25/jobs/{Id}",
    ReadPipeline: "GET /2012-09-25/pipelines/{Id}",
    ReadPreset: "GET /2012-09-25/presets/{Id}",
    TestRole: "POST /2012-09-25/roleTests",
    UpdatePipeline: "PUT /2012-09-25/pipelines/{Id}",
    UpdatePipelineNotifications:
      "POST /2012-09-25/pipelines/{Id}/notifications",
    UpdatePipelineStatus: "POST /2012-09-25/pipelines/{Id}/status",
  },
} as const satisfies ServiceMetadata;

export type _ElasticTranscoder = _ElasticTranscoderClient;
export interface ElasticTranscoder extends _ElasticTranscoder {}
export const ElasticTranscoder = class extends AWSServiceClient {
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
} as unknown as typeof _ElasticTranscoderClient;

import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ApplicationCostProfiler as _ApplicationCostProfilerClient } from "./types.ts";

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
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "ApplicationCostProfiler",
  version: "2020-09-10",
  protocol: "restJson1",
  sigV4ServiceName: "application-cost-profiler",
  endpointPrefix: "application-cost-profiler",
  operations: {
    DeleteReportDefinition: "DELETE /reportDefinition/{reportId}",
    GetReportDefinition: "GET /reportDefinition/{reportId}",
    ImportApplicationUsage: "POST /importApplicationUsage",
    ListReportDefinitions: "GET /reportDefinition",
    PutReportDefinition: "POST /reportDefinition",
    UpdateReportDefinition: "PUT /reportDefinition/{reportId}",
  },
} as const satisfies ServiceMetadata;

export type _ApplicationCostProfiler = _ApplicationCostProfilerClient;
export interface ApplicationCostProfiler extends _ApplicationCostProfiler {}
export const ApplicationCostProfiler = class extends AWSServiceClient {
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
} as unknown as typeof _ApplicationCostProfilerClient;

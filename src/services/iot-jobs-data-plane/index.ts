import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTJobsDataPlane as _IoTJobsDataPlaneClient } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "IoT Jobs Data Plane",
  version: "2017-09-29",
  protocol: "restJson1",
  sigV4ServiceName: "iot-jobs-data",
  endpointPrefix: "data.jobs.iot",
  operations: {
    DescribeJobExecution: "GET /things/{thingName}/jobs/{jobId}",
    GetPendingJobExecutions: "GET /things/{thingName}/jobs",
    StartCommandExecution: "POST /command-executions",
    StartNextPendingJobExecution: "PUT /things/{thingName}/jobs/$next",
    UpdateJobExecution: "POST /things/{thingName}/jobs/{jobId}",
  },
} as const satisfies ServiceMetadata;

export type _IoTJobsDataPlane = _IoTJobsDataPlaneClient;
export interface IoTJobsDataPlane extends _IoTJobsDataPlane {}
export const IoTJobsDataPlane = class extends AWSServiceClient {
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
} as unknown as typeof _IoTJobsDataPlaneClient;

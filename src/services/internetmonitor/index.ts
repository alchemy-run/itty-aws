import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { InternetMonitor as _InternetMonitorClient } from "./types.ts";

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
  sdkId: "InternetMonitor",
  version: "2021-06-03",
  protocol: "restJson1",
  sigV4ServiceName: "internetmonitor",
  operations: {
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    CreateMonitor: "POST /v20210603/Monitors",
    DeleteMonitor: "DELETE /v20210603/Monitors/{MonitorName}",
    GetHealthEvent:
      "GET /v20210603/Monitors/{MonitorName}/HealthEvents/{EventId}",
    GetInternetEvent: "GET /v20210603/InternetEvents/{EventId}",
    GetMonitor: "GET /v20210603/Monitors/{MonitorName}",
    GetQueryResults:
      "GET /v20210603/Monitors/{MonitorName}/Queries/{QueryId}/Results",
    GetQueryStatus:
      "GET /v20210603/Monitors/{MonitorName}/Queries/{QueryId}/Status",
    ListHealthEvents: "GET /v20210603/Monitors/{MonitorName}/HealthEvents",
    ListInternetEvents: "GET /v20210603/InternetEvents",
    ListMonitors: "GET /v20210603/Monitors",
    StartQuery: "POST /v20210603/Monitors/{MonitorName}/Queries",
    StopQuery: "DELETE /v20210603/Monitors/{MonitorName}/Queries/{QueryId}",
    UpdateMonitor: "PATCH /v20210603/Monitors/{MonitorName}",
  },
  retryableErrors: {
    InternalServerErrorException: {},
    TooManyRequestsException: {},
    InternalServerException: {},
    ThrottlingException: {},
  },
} as const satisfies ServiceMetadata;

export type _InternetMonitor = _InternetMonitorClient;
export interface InternetMonitor extends _InternetMonitor {}
export const InternetMonitor = class extends AWSServiceClient {
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
} as unknown as typeof _InternetMonitorClient;

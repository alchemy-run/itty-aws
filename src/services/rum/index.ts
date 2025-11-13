import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { RUM as _RUMClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "RUM",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "rum",
  operations: {
    "ListTagsForResource": "GET /tags/{ResourceArn}",
    "PutRumEvents": "POST /appmonitors/{Id}/",
    "TagResource": "POST /tags/{ResourceArn}",
    "UntagResource": "DELETE /tags/{ResourceArn}",
    "BatchCreateRumMetricDefinitions": "POST /rummetrics/{AppMonitorName}/metrics",
    "BatchDeleteRumMetricDefinitions": "DELETE /rummetrics/{AppMonitorName}/metrics",
    "BatchGetRumMetricDefinitions": "GET /rummetrics/{AppMonitorName}/metrics",
    "CreateAppMonitor": "POST /appmonitor",
    "DeleteAppMonitor": "DELETE /appmonitor/{Name}",
    "DeleteResourcePolicy": "DELETE /appmonitor/{Name}/policy",
    "DeleteRumMetricsDestination": "DELETE /rummetrics/{AppMonitorName}/metricsdestination",
    "GetAppMonitor": "GET /appmonitor/{Name}",
    "GetAppMonitorData": "POST /appmonitor/{Name}/data",
    "GetResourcePolicy": "GET /appmonitor/{Name}/policy",
    "ListAppMonitors": "POST /appmonitors",
    "ListRumMetricsDestinations": "GET /rummetrics/{AppMonitorName}/metricsdestination",
    "PutResourcePolicy": "PUT /appmonitor/{Name}/policy",
    "PutRumMetricsDestination": "POST /rummetrics/{AppMonitorName}/metricsdestination",
    "UpdateAppMonitor": "PATCH /appmonitor/{Name}",
    "UpdateRumMetricDefinition": "PATCH /rummetrics/{AppMonitorName}/metrics",
  },
  retryableErrors: {
    "InternalServerException": {"retryAfterSeconds":"Retry-After"},
    "ThrottlingException": {"retryAfterSeconds":"Retry-After"},
  },
} as const satisfies ServiceMetadata;

export type _RUM = _RUMClient;
export interface RUM extends _RUM {}
export const RUM = class extends AWSServiceClient {
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
} as unknown as typeof _RUMClient;

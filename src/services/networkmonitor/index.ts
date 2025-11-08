import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { NetworkMonitor as _NetworkMonitorClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "NetworkMonitor",
  version: "2023-08-01",
  protocol: "restJson1",
  sigV4ServiceName: "networkmonitor",
  operations: {
    "ListTagsForResource": "GET /tags/{resourceArn}",
    "TagResource": "POST /tags/{resourceArn}",
    "UntagResource": "DELETE /tags/{resourceArn}",
    "CreateMonitor": "POST /monitors",
    "CreateProbe": "POST /monitors/{monitorName}/probes",
    "DeleteMonitor": "DELETE /monitors/{monitorName}",
    "DeleteProbe": "DELETE /monitors/{monitorName}/probes/{probeId}",
    "GetMonitor": "GET /monitors/{monitorName}",
    "GetProbe": "GET /monitors/{monitorName}/probes/{probeId}",
    "ListMonitors": "GET /monitors",
    "UpdateMonitor": "PATCH /monitors/{monitorName}",
    "UpdateProbe": "PATCH /monitors/{monitorName}/probes/{probeId}",
  },
} as const satisfies ServiceMetadata;

export type _NetworkMonitor = _NetworkMonitorClient;
export interface NetworkMonitor extends _NetworkMonitor {}
export const NetworkMonitor = class extends AWSServiceClient {
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
} as unknown as typeof _NetworkMonitorClient;

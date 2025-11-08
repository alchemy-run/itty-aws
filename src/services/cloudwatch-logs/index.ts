import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { CloudWatchLogs as _CloudWatchLogsClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "CloudWatch Logs",
  version: "2014-03-28",
  protocol: "awsJson1_1",
  sigV4ServiceName: "logs",
  endpointPrefix: "logs",
  targetPrefix: "Logs_20140328",
} as const satisfies ServiceMetadata;

export type _CloudWatchLogs = _CloudWatchLogsClient;
export interface CloudWatchLogs extends _CloudWatchLogs {}
export const CloudWatchLogs = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new AwsJson11Handler());
  }
} as unknown as typeof _CloudWatchLogsClient;

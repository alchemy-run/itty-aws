import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { KinesisAnalyticsV2 as _KinesisAnalyticsV2Client } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Kinesis Analytics V2",
  version: "2018-05-23",
  protocol: "awsJson1_1",
  sigV4ServiceName: "kinesisanalytics",
  endpointPrefix: "kinesisanalytics",
  targetPrefix: "KinesisAnalytics_20180523",
} as const satisfies ServiceMetadata;

export type _KinesisAnalyticsV2 = _KinesisAnalyticsV2Client;
export interface KinesisAnalyticsV2 extends _KinesisAnalyticsV2 {}
export const KinesisAnalyticsV2 = class extends AWSServiceClient {
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
} as unknown as typeof _KinesisAnalyticsV2Client;

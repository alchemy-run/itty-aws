import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { CostandUsageReportService as _CostandUsageReportServiceClient } from "./types.ts";

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
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Cost and Usage Report Service",
  version: "2017-01-06",
  protocol: "awsJson1_1",
  sigV4ServiceName: "cur",
  endpointPrefix: "cur",
  targetPrefix: "AWSOrigamiServiceGatewayService",
} as const satisfies ServiceMetadata;

export type _CostandUsageReportService = _CostandUsageReportServiceClient;
export interface CostandUsageReportService extends _CostandUsageReportService {}
export const CostandUsageReportService = class extends AWSServiceClient {
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
} as unknown as typeof _CostandUsageReportServiceClient;

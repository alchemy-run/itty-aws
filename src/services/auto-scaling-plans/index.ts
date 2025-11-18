import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { AutoScalingPlans as _AutoScalingPlansClient } from "./types.ts";

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
  sdkId: "Auto Scaling Plans",
  version: "2018-01-06",
  protocol: "awsJson1_1",
  sigV4ServiceName: "autoscaling-plans",
  endpointPrefix: "autoscaling-plans",
  targetPrefix: "AnyScaleScalingPlannerFrontendService",
} as const satisfies ServiceMetadata;

export type _AutoScalingPlans = _AutoScalingPlansClient;
export interface AutoScalingPlans extends _AutoScalingPlans {}
export const AutoScalingPlans = class extends AWSServiceClient {
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
} as unknown as typeof _AutoScalingPlansClient;

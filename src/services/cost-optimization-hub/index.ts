import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { CostOptimizationHub as _CostOptimizationHubClient } from "./types.ts";

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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Cost Optimization Hub",
  version: "2022-07-26",
  protocol: "awsJson1_0",
  sigV4ServiceName: "cost-optimization-hub",
  endpointPrefix: "cost-optimization-hub",
  targetPrefix: "CostOptimizationHubService",
} as const satisfies ServiceMetadata;

export type _CostOptimizationHub = _CostOptimizationHubClient;
export interface CostOptimizationHub extends _CostOptimizationHub {}
export const CostOptimizationHub = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new AwsJson10Handler());
  }
} as unknown as typeof _CostOptimizationHubClient;

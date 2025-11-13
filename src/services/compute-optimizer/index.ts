import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { ComputeOptimizer as _ComputeOptimizerClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Compute Optimizer",
  version: "2019-11-01",
  protocol: "awsJson1_0",
  sigV4ServiceName: "compute-optimizer",
  endpointPrefix: "compute-optimizer",
  targetPrefix: "ComputeOptimizerService",
} as const satisfies ServiceMetadata;

export type _ComputeOptimizer = _ComputeOptimizerClient;
export interface ComputeOptimizer extends _ComputeOptimizer {}
export const ComputeOptimizer = class extends AWSServiceClient {
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
} as unknown as typeof _ComputeOptimizerClient;

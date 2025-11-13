import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { BCMRecommendedActions as _BCMRecommendedActionsClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "BCM Recommended Actions",
  version: "2024-11-14",
  protocol: "awsJson1_0",
  sigV4ServiceName: "bcm-recommended-actions",
  endpointPrefix: "bcm-recommended-actions",
  targetPrefix: "AWSBillingAndCostManagementRecommendedActions",
} as const satisfies ServiceMetadata;

export type _BCMRecommendedActions = _BCMRecommendedActionsClient;
export interface BCMRecommendedActions extends _BCMRecommendedActions {}
export const BCMRecommendedActions = class extends AWSServiceClient {
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
} as unknown as typeof _BCMRecommendedActionsClient;

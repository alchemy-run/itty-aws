import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { BCMPricingCalculator as _BCMPricingCalculatorClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "BCM Pricing Calculator",
  version: "2024-06-19",
  protocol: "awsJson1_0",
  sigV4ServiceName: "bcm-pricing-calculator",
  targetPrefix: "AWSBCMPricingCalculator",
} as const satisfies ServiceMetadata;

export type _BCMPricingCalculator = _BCMPricingCalculatorClient;
export interface BCMPricingCalculator extends _BCMPricingCalculator {}
export const BCMPricingCalculator = class extends AWSServiceClient {
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
} as unknown as typeof _BCMPricingCalculatorClient;

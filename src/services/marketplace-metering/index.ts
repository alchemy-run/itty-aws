import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { MarketplaceMetering as _MarketplaceMeteringClient } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
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
  ValidationException,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Marketplace Metering",
  version: "2016-01-14",
  protocol: "awsJson1_1",
  sigV4ServiceName: "aws-marketplace",
  endpointPrefix: "metering.marketplace",
  targetPrefix: "AWSMPMeteringService",
} as const satisfies ServiceMetadata;

export type _MarketplaceMetering = _MarketplaceMeteringClient;
export interface MarketplaceMetering extends _MarketplaceMetering {}
export const MarketplaceMetering = class extends AWSServiceClient {
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
} as unknown as typeof _MarketplaceMeteringClient;

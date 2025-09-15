import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { MarketplaceEntitlementService as _MarketplaceEntitlementServiceClient } from "./types.ts";

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
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Marketplace Entitlement Service",
  version: "2017-01-11",
  protocol: "awsJson1_1",
  sigV4ServiceName: "aws-marketplace",
  endpointPrefix: "entitlement.marketplace",
  targetPrefix: "AWSMPEntitlementService",
} as const satisfies ServiceMetadata;

export type _MarketplaceEntitlementService =
  _MarketplaceEntitlementServiceClient;
export interface MarketplaceEntitlementService
  extends _MarketplaceEntitlementService {}
export const MarketplaceEntitlementService = class extends AWSServiceClient {
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
} as unknown as typeof _MarketplaceEntitlementServiceClient;

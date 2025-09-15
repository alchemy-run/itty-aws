import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { MarketplaceCommerceAnalytics as _MarketplaceCommerceAnalyticsClient } from "./types.ts";

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
  ValidationException,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Marketplace Commerce Analytics",
  version: "2015-07-01",
  protocol: "awsJson1_1",
  sigV4ServiceName: "marketplacecommerceanalytics",
  endpointPrefix: "marketplacecommerceanalytics",
  targetPrefix: "MarketplaceCommerceAnalytics20150701",
} as const satisfies ServiceMetadata;

export type _MarketplaceCommerceAnalytics = _MarketplaceCommerceAnalyticsClient;
export interface MarketplaceCommerceAnalytics
  extends _MarketplaceCommerceAnalytics {}
export const MarketplaceCommerceAnalytics = class extends AWSServiceClient {
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
} as unknown as typeof _MarketplaceCommerceAnalyticsClient;

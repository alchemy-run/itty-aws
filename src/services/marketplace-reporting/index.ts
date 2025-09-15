import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MarketplaceReporting as _MarketplaceReportingClient } from "./types.ts";

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
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Marketplace Reporting",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "aws-marketplace",
  endpointPrefix: "reporting-marketplace",
  operations: {
    GetBuyerDashboard: "POST /getBuyerDashboard",
  },
} as const satisfies ServiceMetadata;

export type _MarketplaceReporting = _MarketplaceReportingClient;
export interface MarketplaceReporting extends _MarketplaceReporting {}
export const MarketplaceReporting = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestJson1Handler());
  }
} as unknown as typeof _MarketplaceReportingClient;

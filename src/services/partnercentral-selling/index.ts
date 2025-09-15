import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { PartnerCentralSelling as _PartnerCentralSellingClient } from "./types.ts";

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
  sdkId: "PartnerCentral Selling",
  version: "2022-07-26",
  protocol: "awsJson1_0",
  sigV4ServiceName: "partnercentral-selling",
  endpointPrefix: "partnercentral-selling",
  targetPrefix: "AWSPartnerCentralSelling",
} as const satisfies ServiceMetadata;

export type _PartnerCentralSelling = _PartnerCentralSellingClient;
export interface PartnerCentralSelling extends _PartnerCentralSelling {}
export const PartnerCentralSelling = class extends AWSServiceClient {
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
} as unknown as typeof _PartnerCentralSellingClient;

import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { MarketplaceAgreement as _MarketplaceAgreementClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Marketplace Agreement",
  version: "2020-03-01",
  protocol: "awsJson1_0",
  sigV4ServiceName: "aws-marketplace",
  endpointPrefix: "agreement-marketplace",
  targetPrefix: "AWSMPCommerceService_v20200301",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type MarketplaceAgreement = typeof MarketplaceAgreement;
export const MarketplaceAgreement = class extends AWSServiceClient {
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
} as unknown as typeof _MarketplaceAgreementClient;

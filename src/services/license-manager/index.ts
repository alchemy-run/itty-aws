import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { LicenseManager as _LicenseManagerClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "License Manager",
  version: "2018-08-01",
  protocol: "awsJson1_1",
  sigV4ServiceName: "license-manager",
  endpointPrefix: "license-manager",
  targetPrefix: "AWSLicenseManager",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type LicenseManager = typeof LicenseManager;
export const LicenseManager = class extends AWSServiceClient {
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
} as unknown as typeof _LicenseManagerClient;

import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { SSOAdmin as _SSOAdminClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "SSO Admin",
  version: "2020-07-20",
  protocol: "awsJson1_1",
  sigV4ServiceName: "sso",
  endpointPrefix: "sso",
  targetPrefix: "SWBExternalService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type SSOAdmin = typeof SSOAdmin;
export const SSOAdmin = class extends AWSServiceClient {
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
} as unknown as typeof _SSOAdminClient;

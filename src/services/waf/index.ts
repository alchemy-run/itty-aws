import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { WAF as _WAFClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "WAF",
  version: "2015-08-24",
  protocol: "awsJson1_1",
  sigV4ServiceName: "waf",
  endpointPrefix: "waf",
  targetPrefix: "AWSWAF_20150824",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type WAF = typeof WAF;
export const WAF = class extends AWSServiceClient {
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
} as unknown as typeof _WAFClient;

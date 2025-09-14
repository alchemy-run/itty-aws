import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { WAFRegional as _WAFRegionalClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "WAF Regional",
  version: "2016-11-28",
  protocol: "awsJson1_1",
  sigV4ServiceName: "waf-regional",
  endpointPrefix: "waf-regional",
  targetPrefix: "AWSWAF_Regional_20161128",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const WAFRegional = class extends AWSServiceClient {
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
} as unknown as typeof _WAFRegionalClient;

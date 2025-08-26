import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { WAF as _WAF } from "./types.ts";

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

export const WAF = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _WAF;

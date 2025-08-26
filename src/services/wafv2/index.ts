import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { WAFV2 as _WAFV2 } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "WAFV2",
  version: "2019-07-29",
  protocol: "awsJson1_1",
  sigV4ServiceName: "wafv2",
  endpointPrefix: "wafv2",
  targetPrefix: "AWSWAF_20190729",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const WAFV2 = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _WAFV2;

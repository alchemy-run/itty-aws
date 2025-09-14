import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { Comprehend as _ComprehendClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Comprehend",
  version: "2017-11-27",
  protocol: "awsJson1_1",
  sigV4ServiceName: "comprehend",
  endpointPrefix: "comprehend",
  targetPrefix: "Comprehend_20171127",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type Comprehend = typeof Comprehend;
export const Comprehend = class extends AWSServiceClient {
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
} as unknown as typeof _ComprehendClient;

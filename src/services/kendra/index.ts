import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { kendra as _kendraClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "kendra",
  version: "2019-02-03",
  protocol: "awsJson1_1",
  sigV4ServiceName: "kendra",
  endpointPrefix: "kendra",
  targetPrefix: "AWSKendraFrontendService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type kendra = typeof kendra;
export const kendra = class extends AWSServiceClient {
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
} as unknown as typeof _kendraClient;

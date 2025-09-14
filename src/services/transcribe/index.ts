import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { Transcribe as _TranscribeClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Transcribe",
  version: "2017-10-26",
  protocol: "awsJson1_1",
  sigV4ServiceName: "transcribe",
  endpointPrefix: "transcribe",
  targetPrefix: "Transcribe",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type Transcribe = typeof Transcribe;
export const Transcribe = class extends AWSServiceClient {
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
} as unknown as typeof _TranscribeClient;

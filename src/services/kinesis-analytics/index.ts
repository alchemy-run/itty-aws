import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { KinesisAnalytics as _KinesisAnalytics } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Kinesis Analytics",
  version: "2015-08-14",
  protocol: "awsJson1_1",
  sigV4ServiceName: "kinesisanalytics",
  endpointPrefix: "kinesisanalytics",
  targetPrefix: "KinesisAnalytics_20150814",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const KinesisAnalytics = class extends AWSServiceClient {
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
} as unknown as typeof _KinesisAnalytics;

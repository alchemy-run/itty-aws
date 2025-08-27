import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { KeyspacesStreams as _KeyspacesStreams } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "KeyspacesStreams",
  version: "2024-09-09",
  protocol: "awsJson1_0",
  sigV4ServiceName: "cassandra",
  endpointPrefix: "cassandra-streams",
  targetPrefix: "KeyspacesStreams",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const KeyspacesStreams = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new AwsJson10Handler());
  }
} as unknown as typeof _KeyspacesStreams;

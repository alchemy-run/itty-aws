import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { BackupGateway as _BackupGateway } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Backup Gateway",
  version: "2021-01-01",
  protocol: "awsJson1_0",
  sigV4ServiceName: "backup-gateway",
  endpointPrefix: "backup-gateway",
  targetPrefix: "BackupOnPremises_v20210101",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const BackupGateway = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson10Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _BackupGateway;

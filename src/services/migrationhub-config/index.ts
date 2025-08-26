import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { MigrationHubConfig as _MigrationHubConfig } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "MigrationHub Config",
  version: "2019-06-30",
  protocol: "awsJson1_1",
  sigV4ServiceName: "mgh",
  endpointPrefix: "migrationhub-config",
  targetPrefix: "AWSMigrationHubMultiAccountService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MigrationHubConfig = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _MigrationHubConfig;

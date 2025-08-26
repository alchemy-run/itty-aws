import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { SMS as _SMS } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "SMS",
  version: "2016-10-24",
  protocol: "awsJson1_1",
  sigV4ServiceName: "sms",
  endpointPrefix: "sms",
  targetPrefix: "AWSServerMigrationService_V2016_10_24",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const SMS = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _SMS;

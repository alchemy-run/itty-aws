import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { OpsWorksCM as _OpsWorksCM } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "OpsWorksCM",
  version: "2016-11-01",
  protocol: "awsJson1_1",
  sigV4ServiceName: "opsworks-cm",
  endpointPrefix: "opsworks-cm",
  targetPrefix: "OpsWorksCM_V2016_11_01",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const OpsWorksCM = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _OpsWorksCM;

import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { EC2InstanceConnect as _EC2InstanceConnectClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "EC2 Instance Connect",
  version: "2018-04-02",
  protocol: "awsJson1_1",
  sigV4ServiceName: "ec2-instance-connect",
  endpointPrefix: "ec2-instance-connect",
  targetPrefix: "AWSEC2InstanceConnectService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const EC2InstanceConnect = class extends AWSServiceClient {
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
} as unknown as typeof _EC2InstanceConnectClient;

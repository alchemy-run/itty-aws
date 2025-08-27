import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { Route53RecoveryCluster as _Route53RecoveryCluster } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Route53 Recovery Cluster",
  version: "2019-12-02",
  protocol: "awsJson1_0",
  sigV4ServiceName: "route53-recovery-cluster",
  endpointPrefix: "route53-recovery-cluster",
  targetPrefix: "ToggleCustomerAPI",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Route53RecoveryCluster = class extends AWSServiceClient {
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
} as unknown as typeof _Route53RecoveryCluster;

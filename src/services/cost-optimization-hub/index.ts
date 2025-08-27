import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { CostOptimizationHub as _CostOptimizationHub } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Cost Optimization Hub",
  version: "2022-07-26",
  protocol: "awsJson1_0",
  sigV4ServiceName: "cost-optimization-hub",
  endpointPrefix: "cost-optimization-hub",
  targetPrefix: "CostOptimizationHubService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CostOptimizationHub = class extends AWSServiceClient {
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
} as unknown as typeof _CostOptimizationHub;

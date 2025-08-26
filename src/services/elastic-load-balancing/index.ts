import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import type { ElasticLoadBalancing as _ElasticLoadBalancing } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Elastic Load Balancing",
  version: "2012-06-01",
  protocol: "awsQuery",
  sigV4ServiceName: "elasticloadbalancing",
  endpointPrefix: "elasticloadbalancing",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ElasticLoadBalancing = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsQueryHandler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ElasticLoadBalancing;

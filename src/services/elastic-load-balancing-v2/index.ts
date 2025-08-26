import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import { metadata as protocolMetadata } from "../../awsquery-metadata/elastic-load-balancing-v2.ts";
import type { ElasticLoadBalancingv2 as _ElasticLoadBalancingv2 } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Elastic Load Balancing v2",
  version: "2015-12-01",
  protocol: "awsQuery",
  sigV4ServiceName: "elasticloadbalancing",
  endpointPrefix: "elasticloadbalancing",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ElasticLoadBalancingv2 = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsQueryHandler(protocolMetadata),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ElasticLoadBalancingv2;

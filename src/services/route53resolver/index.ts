import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { Route53Resolver as _Route53Resolver } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Route53Resolver",
  version: "2018-04-01",
  protocol: "awsJson1_1",
  sigV4ServiceName: "route53resolver",
  endpointPrefix: "route53resolver",
  targetPrefix: "Route53Resolver",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Route53Resolver = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Route53Resolver;

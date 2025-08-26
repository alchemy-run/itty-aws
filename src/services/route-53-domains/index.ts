import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { Route53Domains as _Route53Domains } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Route 53 Domains",
  version: "2014-05-15",
  protocol: "awsJson1_1",
  sigV4ServiceName: "route53domains",
  endpointPrefix: "route53domains",
  targetPrefix: "Route53Domains_v20140515",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Route53Domains = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Route53Domains;

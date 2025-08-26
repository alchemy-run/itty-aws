import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { ServiceDiscovery as _ServiceDiscovery } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "ServiceDiscovery",
  version: "2017-03-14",
  protocol: "awsJson1_1",
  sigV4ServiceName: "servicediscovery",
  endpointPrefix: "servicediscovery",
  targetPrefix: "Route53AutoNaming_v20170314",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ServiceDiscovery = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ServiceDiscovery;

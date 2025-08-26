import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { NetworkFirewall as _NetworkFirewall } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Network Firewall",
  version: "2020-11-12",
  protocol: "awsJson1_0",
  sigV4ServiceName: "network-firewall",
  endpointPrefix: "network-firewall",
  targetPrefix: "NetworkFirewall_20201112",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const NetworkFirewall = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson10Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _NetworkFirewall;

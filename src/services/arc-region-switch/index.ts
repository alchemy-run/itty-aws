import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { ARCRegionswitch as _ARCRegionswitch } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "ARC Region switch",
  version: "2022-07-26",
  protocol: "awsJson1_0",
  sigV4ServiceName: "arc-region-switch",
  endpointPrefix: "arc-region-switch",
  targetPrefix: "ArcRegionSwitch",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ARCRegionswitch = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson10Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ARCRegionswitch;

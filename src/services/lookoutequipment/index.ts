import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { LookoutEquipment as _LookoutEquipment } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "LookoutEquipment",
  version: "2020-12-15",
  protocol: "awsJson1_0",
  sigV4ServiceName: "lookoutequipment",
  endpointPrefix: "lookoutequipment",
  targetPrefix: "AWSLookoutEquipmentFrontendService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const LookoutEquipment = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson10Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _LookoutEquipment;

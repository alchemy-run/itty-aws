import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { CloudHSMV2 as _CloudHSMV2 } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "CloudHSM V2",
  version: "2017-04-28",
  protocol: "awsJson1_1",
  sigV4ServiceName: "cloudhsm",
  endpointPrefix: "cloudhsmv2",
  targetPrefix: "BaldrApiService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CloudHSMV2 = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _CloudHSMV2;

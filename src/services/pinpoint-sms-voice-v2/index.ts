import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { PinpointSMSVoiceV2 as _PinpointSMSVoiceV2 } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Pinpoint SMS Voice V2",
  version: "2022-03-31",
  protocol: "awsJson1_0",
  sigV4ServiceName: "sms-voice",
  endpointPrefix: "sms-voice",
  targetPrefix: "PinpointSMSVoiceV2",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const PinpointSMSVoiceV2 = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson10Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _PinpointSMSVoiceV2;

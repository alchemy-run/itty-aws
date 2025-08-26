import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { VoiceID as _VoiceID } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Voice ID",
  version: "2021-09-27",
  protocol: "awsJson1_0",
  sigV4ServiceName: "voiceid",
  endpointPrefix: "voiceid",
  targetPrefix: "VoiceID",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const VoiceID = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson10Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _VoiceID;

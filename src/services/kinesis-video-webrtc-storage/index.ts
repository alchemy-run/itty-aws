import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { KinesisVideoWebRTCStorage as _KinesisVideoWebRTCStorage } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Kinesis Video WebRTC Storage",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "kinesisvideo",
  endpointPrefix: "kinesisvideo",
  operations: {
    JoinStorageSession: "POST /joinStorageSession",
    JoinStorageSessionAsViewer: "POST /joinStorageSessionAsViewer",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const KinesisVideoWebRTCStorage = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _KinesisVideoWebRTCStorage;

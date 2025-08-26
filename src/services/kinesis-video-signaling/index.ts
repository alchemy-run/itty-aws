import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { KinesisVideoSignaling as _KinesisVideoSignaling } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Kinesis Video Signaling",
  version: "2019-12-04",
  protocol: "restJson1",
  sigV4ServiceName: "kinesisvideo",
  endpointPrefix: "kinesisvideo",
  operations: {
    GetIceServerConfig: "POST /v1/get-ice-server-config",
    SendAlexaOfferToMaster: "POST /v1/send-alexa-offer-to-master",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const KinesisVideoSignaling = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _KinesisVideoSignaling;

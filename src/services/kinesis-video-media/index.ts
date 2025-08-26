import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { KinesisVideoMedia as _KinesisVideoMedia } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Kinesis Video Media",
  version: "2017-09-30",
  protocol: "restJson1",
  sigV4ServiceName: "kinesisvideo",
  endpointPrefix: "kinesisvideo",
  operations: {
    GetMedia: {
      http: "POST /getMedia",
      traits: {
        ContentType: "Content-Type",
        Payload: "httpPayload",
      },
    },
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const KinesisVideoMedia = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _KinesisVideoMedia;

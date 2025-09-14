import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { KinesisVideoArchivedMedia as _KinesisVideoArchivedMediaClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Kinesis Video Archived Media",
  version: "2017-09-30",
  protocol: "restJson1",
  sigV4ServiceName: "kinesisvideo",
  endpointPrefix: "kinesisvideo",
  operations: {
    GetClip: {
      http: "POST /getClip",
      traits: {
        ContentType: "Content-Type",
        Payload: "httpPayload",
      },
    },
    GetDASHStreamingSessionURL: "POST /getDASHStreamingSessionURL",
    GetHLSStreamingSessionURL: "POST /getHLSStreamingSessionURL",
    GetImages: "POST /getImages",
    GetMediaForFragmentList: {
      http: "POST /getMediaForFragmentList",
      traits: {
        ContentType: "Content-Type",
        Payload: "httpPayload",
      },
    },
    ListFragments: "POST /listFragments",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const KinesisVideoArchivedMedia = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestJson1Handler());
  }
} as unknown as typeof _KinesisVideoArchivedMediaClient;

import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { KinesisVideo as _KinesisVideo } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Kinesis Video",
  version: "2017-09-30",
  protocol: "restJson1",
  sigV4ServiceName: "kinesisvideo",
  endpointPrefix: "kinesisvideo",
  operations: {
    CreateSignalingChannel: "POST /createSignalingChannel",
    CreateStream: "POST /createStream",
    DeleteEdgeConfiguration: "POST /deleteEdgeConfiguration",
    DeleteSignalingChannel: "POST /deleteSignalingChannel",
    DeleteStream: "POST /deleteStream",
    DescribeEdgeConfiguration: "POST /describeEdgeConfiguration",
    DescribeImageGenerationConfiguration:
      "POST /describeImageGenerationConfiguration",
    DescribeMappedResourceConfiguration:
      "POST /describeMappedResourceConfiguration",
    DescribeMediaStorageConfiguration:
      "POST /describeMediaStorageConfiguration",
    DescribeNotificationConfiguration:
      "POST /describeNotificationConfiguration",
    DescribeSignalingChannel: "POST /describeSignalingChannel",
    DescribeStream: "POST /describeStream",
    GetDataEndpoint: "POST /getDataEndpoint",
    GetSignalingChannelEndpoint: "POST /getSignalingChannelEndpoint",
    ListEdgeAgentConfigurations: "POST /listEdgeAgentConfigurations",
    ListSignalingChannels: "POST /listSignalingChannels",
    ListStreams: "POST /listStreams",
    ListTagsForResource: "POST /ListTagsForResource",
    ListTagsForStream: "POST /listTagsForStream",
    StartEdgeConfigurationUpdate: "POST /startEdgeConfigurationUpdate",
    TagResource: "POST /TagResource",
    TagStream: "POST /tagStream",
    UntagResource: "POST /UntagResource",
    UntagStream: "POST /untagStream",
    UpdateDataRetention: "POST /updateDataRetention",
    UpdateImageGenerationConfiguration:
      "POST /updateImageGenerationConfiguration",
    UpdateMediaStorageConfiguration: "POST /updateMediaStorageConfiguration",
    UpdateNotificationConfiguration: "POST /updateNotificationConfiguration",
    UpdateSignalingChannel: "POST /updateSignalingChannel",
    UpdateStream: "POST /updateStream",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const KinesisVideo = class extends AWSServiceClient {
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
} as unknown as typeof _KinesisVideo;

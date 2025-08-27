import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MediaTailor as _MediaTailor } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "MediaTailor",
  version: "2018-04-23",
  protocol: "restJson1",
  sigV4ServiceName: "mediatailor",
  endpointPrefix: "api.mediatailor",
  operations: {
    ConfigureLogsForPlaybackConfiguration:
      "PUT /configureLogs/playbackConfiguration",
    ListAlerts: "GET /alerts",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    ConfigureLogsForChannel: "PUT /configureLogs/channel",
    CreateChannel: "POST /channel/{ChannelName}",
    CreateLiveSource:
      "POST /sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}",
    CreatePrefetchSchedule:
      "POST /prefetchSchedule/{PlaybackConfigurationName}/{Name}",
    CreateProgram: "POST /channel/{ChannelName}/program/{ProgramName}",
    CreateSourceLocation: "POST /sourceLocation/{SourceLocationName}",
    CreateVodSource:
      "POST /sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}",
    DeleteChannel: "DELETE /channel/{ChannelName}",
    DeleteChannelPolicy: "DELETE /channel/{ChannelName}/policy",
    DeleteLiveSource:
      "DELETE /sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}",
    DeletePlaybackConfiguration: "DELETE /playbackConfiguration/{Name}",
    DeletePrefetchSchedule:
      "DELETE /prefetchSchedule/{PlaybackConfigurationName}/{Name}",
    DeleteProgram: "DELETE /channel/{ChannelName}/program/{ProgramName}",
    DeleteSourceLocation: "DELETE /sourceLocation/{SourceLocationName}",
    DeleteVodSource:
      "DELETE /sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}",
    DescribeChannel: "GET /channel/{ChannelName}",
    DescribeLiveSource:
      "GET /sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}",
    DescribeProgram: "GET /channel/{ChannelName}/program/{ProgramName}",
    DescribeSourceLocation: "GET /sourceLocation/{SourceLocationName}",
    DescribeVodSource:
      "GET /sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}",
    GetChannelPolicy: "GET /channel/{ChannelName}/policy",
    GetChannelSchedule: "GET /channel/{ChannelName}/schedule",
    GetPlaybackConfiguration: "GET /playbackConfiguration/{Name}",
    GetPrefetchSchedule:
      "GET /prefetchSchedule/{PlaybackConfigurationName}/{Name}",
    ListChannels: "GET /channels",
    ListLiveSources: "GET /sourceLocation/{SourceLocationName}/liveSources",
    ListPlaybackConfigurations: "GET /playbackConfigurations",
    ListPrefetchSchedules: "POST /prefetchSchedule/{PlaybackConfigurationName}",
    ListSourceLocations: "GET /sourceLocations",
    ListVodSources: "GET /sourceLocation/{SourceLocationName}/vodSources",
    PutChannelPolicy: "PUT /channel/{ChannelName}/policy",
    PutPlaybackConfiguration: "PUT /playbackConfiguration",
    StartChannel: "PUT /channel/{ChannelName}/start",
    StopChannel: "PUT /channel/{ChannelName}/stop",
    UpdateChannel: "PUT /channel/{ChannelName}",
    UpdateLiveSource:
      "PUT /sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}",
    UpdateProgram: "PUT /channel/{ChannelName}/program/{ProgramName}",
    UpdateSourceLocation: "PUT /sourceLocation/{SourceLocationName}",
    UpdateVodSource:
      "PUT /sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MediaTailor = class extends AWSServiceClient {
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
} as unknown as typeof _MediaTailor;

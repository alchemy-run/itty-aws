import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MediaPackageV2 as _MediaPackageV2Client } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "MediaPackageV2",
  version: "2022-12-25",
  protocol: "restJson1",
  sigV4ServiceName: "mediapackagev2",
  endpointPrefix: "mediapackagev2",
  operations: {
    "ListTagsForResource": "GET /tags/{ResourceArn}",
    "TagResource": "POST /tags/{ResourceArn}",
    "UntagResource": "DELETE /tags/{ResourceArn}",
    "CancelHarvestJob": "PUT /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/harvestJob/{HarvestJobName}",
    "CreateChannel": "POST /channelGroup/{ChannelGroupName}/channel",
    "CreateChannelGroup": "POST /channelGroup",
    "CreateHarvestJob": "POST /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/harvestJob",
    "CreateOriginEndpoint": "POST /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint",
    "DeleteChannel": "DELETE /channelGroup/{ChannelGroupName}/channel/{ChannelName}/",
    "DeleteChannelGroup": "DELETE /channelGroup/{ChannelGroupName}",
    "DeleteChannelPolicy": "DELETE /channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy",
    "DeleteOriginEndpoint": "DELETE /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}",
    "DeleteOriginEndpointPolicy": "DELETE /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy",
    "GetChannel": "GET /channelGroup/{ChannelGroupName}/channel/{ChannelName}/",
    "GetChannelGroup": "GET /channelGroup/{ChannelGroupName}",
    "GetChannelPolicy": "GET /channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy",
    "GetHarvestJob": "GET /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/harvestJob/{HarvestJobName}",
    "GetOriginEndpoint": "GET /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}",
    "GetOriginEndpointPolicy": "GET /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy",
    "ListChannelGroups": "GET /channelGroup",
    "ListChannels": "GET /channelGroup/{ChannelGroupName}/channel",
    "ListHarvestJobs": "GET /channelGroup/{ChannelGroupName}/harvestJob",
    "ListOriginEndpoints": "GET /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint",
    "PutChannelPolicy": "PUT /channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy",
    "PutOriginEndpointPolicy": "POST /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy",
    "ResetChannelState": "POST /channelGroup/{ChannelGroupName}/channel/{ChannelName}/reset",
    "ResetOriginEndpointState": "POST /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/reset",
    "UpdateChannel": "PUT /channelGroup/{ChannelGroupName}/channel/{ChannelName}/",
    "UpdateChannelGroup": "PUT /channelGroup/{ChannelGroupName}",
    "UpdateOriginEndpoint": "PUT /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}",
  },
} as const satisfies ServiceMetadata;

export type _MediaPackageV2 = _MediaPackageV2Client;
export interface MediaPackageV2 extends _MediaPackageV2 {}
export const MediaPackageV2 = class extends AWSServiceClient {
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
} as unknown as typeof _MediaPackageV2Client;

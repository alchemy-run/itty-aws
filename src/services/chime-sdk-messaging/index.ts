import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ChimeSDKMessaging as _ChimeSDKMessaging } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Chime SDK Messaging",
  version: "2021-05-15",
  protocol: "restJson1",
  sigV4ServiceName: "chime",
  endpointPrefix: "messaging-chime",
  operations: {
    AssociateChannelFlow: "PUT /channels/{ChannelArn}/channel-flow",
    BatchCreateChannelMembership:
      "POST /channels/{ChannelArn}/memberships?operation=batch-create",
    ChannelFlowCallback:
      "POST /channels/{ChannelArn}?operation=channel-flow-callback",
    CreateChannel: "POST /channels",
    CreateChannelBan: "POST /channels/{ChannelArn}/bans",
    CreateChannelFlow: "POST /channel-flows",
    CreateChannelMembership: "POST /channels/{ChannelArn}/memberships",
    CreateChannelModerator: "POST /channels/{ChannelArn}/moderators",
    DeleteChannel: "DELETE /channels/{ChannelArn}",
    DeleteChannelBan: "DELETE /channels/{ChannelArn}/bans/{MemberArn}",
    DeleteChannelFlow: "DELETE /channel-flows/{ChannelFlowArn}",
    DeleteChannelMembership:
      "DELETE /channels/{ChannelArn}/memberships/{MemberArn}",
    DeleteChannelMessage: "DELETE /channels/{ChannelArn}/messages/{MessageId}",
    DeleteChannelModerator:
      "DELETE /channels/{ChannelArn}/moderators/{ChannelModeratorArn}",
    DeleteMessagingStreamingConfigurations:
      "DELETE /app-instances/{AppInstanceArn}/streaming-configurations",
    DescribeChannel: "GET /channels/{ChannelArn}",
    DescribeChannelBan: "GET /channels/{ChannelArn}/bans/{MemberArn}",
    DescribeChannelFlow: "GET /channel-flows/{ChannelFlowArn}",
    DescribeChannelMembership:
      "GET /channels/{ChannelArn}/memberships/{MemberArn}",
    DescribeChannelMembershipForAppInstanceUser:
      "GET /channels/{ChannelArn}?scope=app-instance-user-membership",
    DescribeChannelModeratedByAppInstanceUser:
      "GET /channels/{ChannelArn}?scope=app-instance-user-moderated-channel",
    DescribeChannelModerator:
      "GET /channels/{ChannelArn}/moderators/{ChannelModeratorArn}",
    DisassociateChannelFlow:
      "DELETE /channels/{ChannelArn}/channel-flow/{ChannelFlowArn}",
    GetChannelMembershipPreferences:
      "GET /channels/{ChannelArn}/memberships/{MemberArn}/preferences",
    GetChannelMessage: "GET /channels/{ChannelArn}/messages/{MessageId}",
    GetChannelMessageStatus:
      "GET /channels/{ChannelArn}/messages/{MessageId}?scope=message-status",
    GetMessagingSessionEndpoint: "GET /endpoints/messaging-session",
    GetMessagingStreamingConfigurations:
      "GET /app-instances/{AppInstanceArn}/streaming-configurations",
    ListChannelBans: "GET /channels/{ChannelArn}/bans",
    ListChannelFlows: "GET /channel-flows",
    ListChannelMemberships: "GET /channels/{ChannelArn}/memberships",
    ListChannelMembershipsForAppInstanceUser:
      "GET /channels?scope=app-instance-user-memberships",
    ListChannelMessages: "GET /channels/{ChannelArn}/messages",
    ListChannelModerators: "GET /channels/{ChannelArn}/moderators",
    ListChannels: "GET /channels",
    ListChannelsAssociatedWithChannelFlow:
      "GET /channels?scope=channel-flow-associations",
    ListChannelsModeratedByAppInstanceUser:
      "GET /channels?scope=app-instance-user-moderated-channels",
    ListSubChannels: "GET /channels/{ChannelArn}/subchannels",
    ListTagsForResource: "GET /tags",
    PutChannelExpirationSettings:
      "PUT /channels/{ChannelArn}/expiration-settings",
    PutChannelMembershipPreferences:
      "PUT /channels/{ChannelArn}/memberships/{MemberArn}/preferences",
    PutMessagingStreamingConfigurations:
      "PUT /app-instances/{AppInstanceArn}/streaming-configurations",
    RedactChannelMessage:
      "POST /channels/{ChannelArn}/messages/{MessageId}?operation=redact",
    SearchChannels: "POST /channels?operation=search",
    SendChannelMessage: "POST /channels/{ChannelArn}/messages",
    TagResource: "POST /tags?operation=tag-resource",
    UntagResource: "POST /tags?operation=untag-resource",
    UpdateChannel: "PUT /channels/{ChannelArn}",
    UpdateChannelFlow: "PUT /channel-flows/{ChannelFlowArn}",
    UpdateChannelMessage: "PUT /channels/{ChannelArn}/messages/{MessageId}",
    UpdateChannelReadMarker: "PUT /channels/{ChannelArn}/readMarker",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ChimeSDKMessaging = class extends AWSServiceClient {
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
} as unknown as typeof _ChimeSDKMessaging;

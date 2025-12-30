import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const MemberArns = S.Array(S.String);
export const ChannelMemberArns = S.Array(S.String);
export const ChannelModeratorArns = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AssociateChannelFlowRequest extends S.Class<AssociateChannelFlowRequest>("AssociateChannelFlowRequest")({ChannelArn: S.String, ChannelFlowArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class BatchCreateChannelMembershipRequest extends S.Class<BatchCreateChannelMembershipRequest>("BatchCreateChannelMembershipRequest")({ChannelArn: S.String, Type: S.optional(S.String), MemberArns: MemberArns, ChimeBearer: H.Header("x-amz-chime-bearer"), SubChannelId: S.optional(S.String)}) {}
export class CreateChannelBanRequest extends S.Class<CreateChannelBanRequest>("CreateChannelBanRequest")({ChannelArn: S.String, MemberArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class CreateChannelMembershipRequest extends S.Class<CreateChannelMembershipRequest>("CreateChannelMembershipRequest")({ChannelArn: S.String, MemberArn: S.String, Type: S.String, ChimeBearer: H.Header("x-amz-chime-bearer"), SubChannelId: S.optional(S.String)}) {}
export class CreateChannelModeratorRequest extends S.Class<CreateChannelModeratorRequest>("CreateChannelModeratorRequest")({ChannelArn: S.String, ChannelModeratorArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class DeleteChannelRequest extends S.Class<DeleteChannelRequest>("DeleteChannelRequest")({ChannelArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class DeleteChannelBanRequest extends S.Class<DeleteChannelBanRequest>("DeleteChannelBanRequest")({ChannelArn: S.String, MemberArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class DeleteChannelFlowRequest extends S.Class<DeleteChannelFlowRequest>("DeleteChannelFlowRequest")({ChannelFlowArn: S.String}) {}
export class DeleteChannelMembershipRequest extends S.Class<DeleteChannelMembershipRequest>("DeleteChannelMembershipRequest")({ChannelArn: S.String, MemberArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer"), SubChannelId: S.optional(S.String)}) {}
export class DeleteChannelMessageRequest extends S.Class<DeleteChannelMessageRequest>("DeleteChannelMessageRequest")({ChannelArn: S.String, MessageId: S.String, ChimeBearer: H.Header("x-amz-chime-bearer"), SubChannelId: S.optional(S.String)}) {}
export class DeleteChannelModeratorRequest extends S.Class<DeleteChannelModeratorRequest>("DeleteChannelModeratorRequest")({ChannelArn: S.String, ChannelModeratorArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class DeleteMessagingStreamingConfigurationsRequest extends S.Class<DeleteMessagingStreamingConfigurationsRequest>("DeleteMessagingStreamingConfigurationsRequest")({AppInstanceArn: S.String}) {}
export class DescribeChannelRequest extends S.Class<DescribeChannelRequest>("DescribeChannelRequest")({ChannelArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class DescribeChannelBanRequest extends S.Class<DescribeChannelBanRequest>("DescribeChannelBanRequest")({ChannelArn: S.String, MemberArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class DescribeChannelFlowRequest extends S.Class<DescribeChannelFlowRequest>("DescribeChannelFlowRequest")({ChannelFlowArn: S.String}) {}
export class DescribeChannelMembershipRequest extends S.Class<DescribeChannelMembershipRequest>("DescribeChannelMembershipRequest")({ChannelArn: S.String, MemberArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer"), SubChannelId: S.optional(S.String)}) {}
export class DescribeChannelMembershipForAppInstanceUserRequest extends S.Class<DescribeChannelMembershipForAppInstanceUserRequest>("DescribeChannelMembershipForAppInstanceUserRequest")({ChannelArn: S.String, AppInstanceUserArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class DescribeChannelModeratedByAppInstanceUserRequest extends S.Class<DescribeChannelModeratedByAppInstanceUserRequest>("DescribeChannelModeratedByAppInstanceUserRequest")({ChannelArn: S.String, AppInstanceUserArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class DescribeChannelModeratorRequest extends S.Class<DescribeChannelModeratorRequest>("DescribeChannelModeratorRequest")({ChannelArn: S.String, ChannelModeratorArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class DisassociateChannelFlowRequest extends S.Class<DisassociateChannelFlowRequest>("DisassociateChannelFlowRequest")({ChannelArn: S.String, ChannelFlowArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class GetChannelMembershipPreferencesRequest extends S.Class<GetChannelMembershipPreferencesRequest>("GetChannelMembershipPreferencesRequest")({ChannelArn: S.String, MemberArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class GetChannelMessageRequest extends S.Class<GetChannelMessageRequest>("GetChannelMessageRequest")({ChannelArn: S.String, MessageId: S.String, ChimeBearer: H.Header("x-amz-chime-bearer"), SubChannelId: S.optional(S.String)}) {}
export class GetChannelMessageStatusRequest extends S.Class<GetChannelMessageStatusRequest>("GetChannelMessageStatusRequest")({ChannelArn: S.String, MessageId: S.String, ChimeBearer: H.Header("x-amz-chime-bearer"), SubChannelId: S.optional(S.String)}) {}
export class GetMessagingSessionEndpointRequest extends S.Class<GetMessagingSessionEndpointRequest>("GetMessagingSessionEndpointRequest")({NetworkType: S.optional(S.String)}) {}
export class GetMessagingStreamingConfigurationsRequest extends S.Class<GetMessagingStreamingConfigurationsRequest>("GetMessagingStreamingConfigurationsRequest")({AppInstanceArn: S.String}) {}
export class ListChannelBansRequest extends S.Class<ListChannelBansRequest>("ListChannelBansRequest")({ChannelArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class ListChannelFlowsRequest extends S.Class<ListChannelFlowsRequest>("ListChannelFlowsRequest")({AppInstanceArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListChannelMembershipsRequest extends S.Class<ListChannelMembershipsRequest>("ListChannelMembershipsRequest")({ChannelArn: S.String, Type: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ChimeBearer: H.Header("x-amz-chime-bearer"), SubChannelId: S.optional(S.String)}) {}
export class ListChannelMembershipsForAppInstanceUserRequest extends S.Class<ListChannelMembershipsForAppInstanceUserRequest>("ListChannelMembershipsForAppInstanceUserRequest")({AppInstanceUserArn: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class ListChannelMessagesRequest extends S.Class<ListChannelMessagesRequest>("ListChannelMessagesRequest")({ChannelArn: S.String, SortOrder: S.optional(S.String), NotBefore: S.optional(S.Date), NotAfter: S.optional(S.Date), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ChimeBearer: H.Header("x-amz-chime-bearer"), SubChannelId: S.optional(S.String)}) {}
export class ListChannelModeratorsRequest extends S.Class<ListChannelModeratorsRequest>("ListChannelModeratorsRequest")({ChannelArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class ListChannelsRequest extends S.Class<ListChannelsRequest>("ListChannelsRequest")({AppInstanceArn: S.String, Privacy: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class ListChannelsAssociatedWithChannelFlowRequest extends S.Class<ListChannelsAssociatedWithChannelFlowRequest>("ListChannelsAssociatedWithChannelFlowRequest")({ChannelFlowArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListChannelsModeratedByAppInstanceUserRequest extends S.Class<ListChannelsModeratedByAppInstanceUserRequest>("ListChannelsModeratedByAppInstanceUserRequest")({AppInstanceUserArn: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class ListSubChannelsRequest extends S.Class<ListSubChannelsRequest>("ListSubChannelsRequest")({ChannelArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer"), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String}) {}
export class ExpirationSettings extends S.Class<ExpirationSettings>("ExpirationSettings")({ExpirationDays: S.Number, ExpirationCriterion: S.String}) {}
export class PutChannelExpirationSettingsRequest extends S.Class<PutChannelExpirationSettingsRequest>("PutChannelExpirationSettingsRequest")({ChannelArn: S.String, ChimeBearer: S.optional(H.Header("x-amz-chime-bearer")), ExpirationSettings: S.optional(ExpirationSettings)}) {}
export class RedactChannelMessageRequest extends S.Class<RedactChannelMessageRequest>("RedactChannelMessageRequest")({ChannelArn: S.String, MessageId: S.String, ChimeBearer: H.Header("x-amz-chime-bearer"), SubChannelId: S.optional(S.String)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, Tags: TagList}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export class UpdateChannelRequest extends S.Class<UpdateChannelRequest>("UpdateChannelRequest")({ChannelArn: S.String, Name: S.optional(S.String), Mode: S.optional(S.String), Metadata: S.optional(S.String), ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export class LambdaConfiguration extends S.Class<LambdaConfiguration>("LambdaConfiguration")({ResourceArn: S.String, InvocationType: S.String}) {}
export class ProcessorConfiguration extends S.Class<ProcessorConfiguration>("ProcessorConfiguration")({Lambda: LambdaConfiguration}) {}
export class Processor extends S.Class<Processor>("Processor")({Name: S.String, Configuration: ProcessorConfiguration, ExecutionOrder: S.Number, FallbackAction: S.String}) {}
export const ProcessorList = S.Array(Processor);
export class UpdateChannelFlowRequest extends S.Class<UpdateChannelFlowRequest>("UpdateChannelFlowRequest")({ChannelFlowArn: S.String, Processors: ProcessorList, Name: S.String}) {}
export class UpdateChannelMessageRequest extends S.Class<UpdateChannelMessageRequest>("UpdateChannelMessageRequest")({ChannelArn: S.String, MessageId: S.String, Content: S.String, Metadata: S.optional(S.String), ChimeBearer: H.Header("x-amz-chime-bearer"), SubChannelId: S.optional(S.String), ContentType: S.optional(S.String)}) {}
export class UpdateChannelReadMarkerRequest extends S.Class<UpdateChannelReadMarkerRequest>("UpdateChannelReadMarkerRequest")({ChannelArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer")}) {}
export const SearchFieldValues = S.Array(S.String);
export class PushNotificationConfiguration extends S.Class<PushNotificationConfiguration>("PushNotificationConfiguration")({Title: S.optional(S.String), Body: S.optional(S.String), Type: S.optional(S.String)}) {}
export const MessageAttributeStringValues = S.Array(S.String);
export class MessageAttributeValue extends S.Class<MessageAttributeValue>("MessageAttributeValue")({StringValues: S.optional(MessageAttributeStringValues)}) {}
export const MessageAttributeMap = S.Record({key: S.String, value: MessageAttributeValue});
export class ChannelMessageCallback extends S.Class<ChannelMessageCallback>("ChannelMessageCallback")({MessageId: S.String, Content: S.optional(S.String), Metadata: S.optional(S.String), PushNotification: S.optional(PushNotificationConfiguration), MessageAttributes: S.optional(MessageAttributeMap), SubChannelId: S.optional(S.String), ContentType: S.optional(S.String)}) {}
export class ElasticChannelConfiguration extends S.Class<ElasticChannelConfiguration>("ElasticChannelConfiguration")({MaximumSubChannels: S.Number, TargetMembershipsPerSubChannel: S.Number, MinimumMembershipPercentage: S.Number}) {}
export class ChannelSummary extends S.Class<ChannelSummary>("ChannelSummary")({Name: S.optional(S.String), ChannelArn: S.optional(S.String), Mode: S.optional(S.String), Privacy: S.optional(S.String), Metadata: S.optional(S.String), LastMessageTimestamp: S.optional(S.Date)}) {}
export class AppInstanceUserMembershipSummary extends S.Class<AppInstanceUserMembershipSummary>("AppInstanceUserMembershipSummary")({Type: S.optional(S.String), ReadMarkerTimestamp: S.optional(S.Date), SubChannelId: S.optional(S.String)}) {}
export class ChannelMembershipForAppInstanceUserSummary extends S.Class<ChannelMembershipForAppInstanceUserSummary>("ChannelMembershipForAppInstanceUserSummary")({ChannelSummary: S.optional(ChannelSummary), AppInstanceUserMembershipSummary: S.optional(AppInstanceUserMembershipSummary)}) {}
export const ChannelMembershipForAppInstanceUserSummaryList = S.Array(ChannelMembershipForAppInstanceUserSummary);
export class ChannelModeratedByAppInstanceUserSummary extends S.Class<ChannelModeratedByAppInstanceUserSummary>("ChannelModeratedByAppInstanceUserSummary")({ChannelSummary: S.optional(ChannelSummary)}) {}
export const ChannelModeratedByAppInstanceUserSummaryList = S.Array(ChannelModeratedByAppInstanceUserSummary);
export class StreamingConfiguration extends S.Class<StreamingConfiguration>("StreamingConfiguration")({DataType: S.String, ResourceArn: S.String}) {}
export const StreamingConfigurationList = S.Array(StreamingConfiguration);
export class SearchField extends S.Class<SearchField>("SearchField")({Key: S.String, Values: SearchFieldValues, Operator: S.String}) {}
export const SearchFields = S.Array(SearchField);
export class Target extends S.Class<Target>("Target")({MemberArn: S.optional(S.String)}) {}
export const TargetList = S.Array(Target);
export class ChannelFlowCallbackRequest extends S.Class<ChannelFlowCallbackRequest>("ChannelFlowCallbackRequest")({CallbackId: S.String, ChannelArn: S.String, DeleteResource: S.optional(S.Boolean), ChannelMessage: ChannelMessageCallback}) {}
export class CreateChannelRequest extends S.Class<CreateChannelRequest>("CreateChannelRequest")({AppInstanceArn: S.String, Name: S.String, Mode: S.optional(S.String), Privacy: S.optional(S.String), Metadata: S.optional(S.String), ClientRequestToken: S.String, Tags: S.optional(TagList), ChimeBearer: H.Header("x-amz-chime-bearer"), ChannelId: S.optional(S.String), MemberArns: S.optional(ChannelMemberArns), ModeratorArns: S.optional(ChannelModeratorArns), ElasticChannelConfiguration: S.optional(ElasticChannelConfiguration), ExpirationSettings: S.optional(ExpirationSettings)}) {}
export class Identity extends S.Class<Identity>("Identity")({Arn: S.optional(S.String), Name: S.optional(S.String)}) {}
export class CreateChannelMembershipResponse extends S.Class<CreateChannelMembershipResponse>("CreateChannelMembershipResponse")({ChannelArn: S.optional(S.String), Member: S.optional(Identity), SubChannelId: S.optional(S.String)}) {}
export class CreateChannelModeratorResponse extends S.Class<CreateChannelModeratorResponse>("CreateChannelModeratorResponse")({ChannelArn: S.optional(S.String), ChannelModerator: S.optional(Identity)}) {}
export class PushNotificationPreferences extends S.Class<PushNotificationPreferences>("PushNotificationPreferences")({AllowNotifications: S.String, FilterRule: S.optional(S.String)}) {}
export class ChannelMembershipPreferences extends S.Class<ChannelMembershipPreferences>("ChannelMembershipPreferences")({PushNotifications: S.optional(PushNotificationPreferences)}) {}
export class GetChannelMembershipPreferencesResponse extends S.Class<GetChannelMembershipPreferencesResponse>("GetChannelMembershipPreferencesResponse")({ChannelArn: S.optional(S.String), Member: S.optional(Identity), Preferences: S.optional(ChannelMembershipPreferences)}) {}
export class GetMessagingStreamingConfigurationsResponse extends S.Class<GetMessagingStreamingConfigurationsResponse>("GetMessagingStreamingConfigurationsResponse")({StreamingConfigurations: S.optional(StreamingConfigurationList)}) {}
export class ListChannelMembershipsForAppInstanceUserResponse extends S.Class<ListChannelMembershipsForAppInstanceUserResponse>("ListChannelMembershipsForAppInstanceUserResponse")({ChannelMemberships: S.optional(ChannelMembershipForAppInstanceUserSummaryList), NextToken: S.optional(S.String)}) {}
export class ListChannelsModeratedByAppInstanceUserResponse extends S.Class<ListChannelsModeratedByAppInstanceUserResponse>("ListChannelsModeratedByAppInstanceUserResponse")({Channels: S.optional(ChannelModeratedByAppInstanceUserSummaryList), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class PutChannelExpirationSettingsResponse extends S.Class<PutChannelExpirationSettingsResponse>("PutChannelExpirationSettingsResponse")({ChannelArn: S.optional(S.String), ExpirationSettings: S.optional(ExpirationSettings)}) {}
export class PutMessagingStreamingConfigurationsRequest extends S.Class<PutMessagingStreamingConfigurationsRequest>("PutMessagingStreamingConfigurationsRequest")({AppInstanceArn: S.String, StreamingConfigurations: StreamingConfigurationList}) {}
export class RedactChannelMessageResponse extends S.Class<RedactChannelMessageResponse>("RedactChannelMessageResponse")({ChannelArn: S.optional(S.String), MessageId: S.optional(S.String), SubChannelId: S.optional(S.String)}) {}
export class SearchChannelsRequest extends S.Class<SearchChannelsRequest>("SearchChannelsRequest")({ChimeBearer: S.optional(H.Header("x-amz-chime-bearer")), Fields: SearchFields, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class UpdateChannelResponse extends S.Class<UpdateChannelResponse>("UpdateChannelResponse")({ChannelArn: S.optional(S.String)}) {}
export class UpdateChannelFlowResponse extends S.Class<UpdateChannelFlowResponse>("UpdateChannelFlowResponse")({ChannelFlowArn: S.optional(S.String)}) {}
export class ChannelMessageStatusStructure extends S.Class<ChannelMessageStatusStructure>("ChannelMessageStatusStructure")({Value: S.optional(S.String), Detail: S.optional(S.String)}) {}
export class UpdateChannelMessageResponse extends S.Class<UpdateChannelMessageResponse>("UpdateChannelMessageResponse")({ChannelArn: S.optional(S.String), MessageId: S.optional(S.String), Status: S.optional(ChannelMessageStatusStructure), SubChannelId: S.optional(S.String)}) {}
export class UpdateChannelReadMarkerResponse extends S.Class<UpdateChannelReadMarkerResponse>("UpdateChannelReadMarkerResponse")({ChannelArn: S.optional(S.String)}) {}
export const Members = S.Array(Identity);
export class BatchChannelMemberships extends S.Class<BatchChannelMemberships>("BatchChannelMemberships")({InvitedBy: S.optional(Identity), Type: S.optional(S.String), Members: S.optional(Members), ChannelArn: S.optional(S.String), SubChannelId: S.optional(S.String)}) {}
export class BatchCreateChannelMembershipError extends S.Class<BatchCreateChannelMembershipError>("BatchCreateChannelMembershipError")({MemberArn: S.optional(S.String), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const BatchCreateChannelMembershipErrors = S.Array(BatchCreateChannelMembershipError);
export class Channel extends S.Class<Channel>("Channel")({Name: S.optional(S.String), ChannelArn: S.optional(S.String), Mode: S.optional(S.String), Privacy: S.optional(S.String), Metadata: S.optional(S.String), CreatedBy: S.optional(Identity), CreatedTimestamp: S.optional(S.Date), LastMessageTimestamp: S.optional(S.Date), LastUpdatedTimestamp: S.optional(S.Date), ChannelFlowArn: S.optional(S.String), ElasticChannelConfiguration: S.optional(ElasticChannelConfiguration), ExpirationSettings: S.optional(ExpirationSettings)}) {}
export class ChannelBan extends S.Class<ChannelBan>("ChannelBan")({Member: S.optional(Identity), ChannelArn: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), CreatedBy: S.optional(Identity)}) {}
export class ChannelFlow extends S.Class<ChannelFlow>("ChannelFlow")({ChannelFlowArn: S.optional(S.String), Processors: S.optional(ProcessorList), Name: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), LastUpdatedTimestamp: S.optional(S.Date)}) {}
export class ChannelMembership extends S.Class<ChannelMembership>("ChannelMembership")({InvitedBy: S.optional(Identity), Type: S.optional(S.String), Member: S.optional(Identity), ChannelArn: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), LastUpdatedTimestamp: S.optional(S.Date), SubChannelId: S.optional(S.String)}) {}
export class ChannelModerator extends S.Class<ChannelModerator>("ChannelModerator")({Moderator: S.optional(Identity), ChannelArn: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), CreatedBy: S.optional(Identity)}) {}
export class ChannelMessage extends S.Class<ChannelMessage>("ChannelMessage")({ChannelArn: S.optional(S.String), MessageId: S.optional(S.String), Content: S.optional(S.String), Metadata: S.optional(S.String), Type: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), LastEditedTimestamp: S.optional(S.Date), LastUpdatedTimestamp: S.optional(S.Date), Sender: S.optional(Identity), Redacted: S.optional(S.Boolean), Persistence: S.optional(S.String), Status: S.optional(ChannelMessageStatusStructure), MessageAttributes: S.optional(MessageAttributeMap), SubChannelId: S.optional(S.String), ContentType: S.optional(S.String), Target: S.optional(TargetList)}) {}
export class MessagingSessionEndpoint extends S.Class<MessagingSessionEndpoint>("MessagingSessionEndpoint")({Url: S.optional(S.String)}) {}
export class ChannelBanSummary extends S.Class<ChannelBanSummary>("ChannelBanSummary")({Member: S.optional(Identity)}) {}
export const ChannelBanSummaryList = S.Array(ChannelBanSummary);
export class ChannelFlowSummary extends S.Class<ChannelFlowSummary>("ChannelFlowSummary")({ChannelFlowArn: S.optional(S.String), Name: S.optional(S.String), Processors: S.optional(ProcessorList)}) {}
export const ChannelFlowSummaryList = S.Array(ChannelFlowSummary);
export class ChannelMembershipSummary extends S.Class<ChannelMembershipSummary>("ChannelMembershipSummary")({Member: S.optional(Identity)}) {}
export const ChannelMembershipSummaryList = S.Array(ChannelMembershipSummary);
export class ChannelMessageSummary extends S.Class<ChannelMessageSummary>("ChannelMessageSummary")({MessageId: S.optional(S.String), Content: S.optional(S.String), Metadata: S.optional(S.String), Type: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), LastUpdatedTimestamp: S.optional(S.Date), LastEditedTimestamp: S.optional(S.Date), Sender: S.optional(Identity), Redacted: S.optional(S.Boolean), Status: S.optional(ChannelMessageStatusStructure), MessageAttributes: S.optional(MessageAttributeMap), ContentType: S.optional(S.String), Target: S.optional(TargetList)}) {}
export const ChannelMessageSummaryList = S.Array(ChannelMessageSummary);
export class ChannelModeratorSummary extends S.Class<ChannelModeratorSummary>("ChannelModeratorSummary")({Moderator: S.optional(Identity)}) {}
export const ChannelModeratorSummaryList = S.Array(ChannelModeratorSummary);
export const ChannelSummaryList = S.Array(ChannelSummary);
export class ChannelAssociatedWithFlowSummary extends S.Class<ChannelAssociatedWithFlowSummary>("ChannelAssociatedWithFlowSummary")({Name: S.optional(S.String), ChannelArn: S.optional(S.String), Mode: S.optional(S.String), Privacy: S.optional(S.String), Metadata: S.optional(S.String)}) {}
export const ChannelAssociatedWithFlowSummaryList = S.Array(ChannelAssociatedWithFlowSummary);
export class SubChannelSummary extends S.Class<SubChannelSummary>("SubChannelSummary")({SubChannelId: S.optional(S.String), MembershipCount: S.optional(S.Number)}) {}
export const SubChannelSummaryList = S.Array(SubChannelSummary);
export class BatchCreateChannelMembershipResponse extends S.Class<BatchCreateChannelMembershipResponse>("BatchCreateChannelMembershipResponse")({BatchChannelMemberships: S.optional(BatchChannelMemberships), Errors: S.optional(BatchCreateChannelMembershipErrors)}) {}
export class ChannelFlowCallbackResponse extends S.Class<ChannelFlowCallbackResponse>("ChannelFlowCallbackResponse")({ChannelArn: S.optional(S.String), CallbackId: S.optional(S.String)}) {}
export class CreateChannelResponse extends S.Class<CreateChannelResponse>("CreateChannelResponse")({ChannelArn: S.optional(S.String)}) {}
export class CreateChannelBanResponse extends S.Class<CreateChannelBanResponse>("CreateChannelBanResponse")({ChannelArn: S.optional(S.String), Member: S.optional(Identity)}) {}
export class DescribeChannelResponse extends S.Class<DescribeChannelResponse>("DescribeChannelResponse")({Channel: S.optional(Channel)}) {}
export class DescribeChannelBanResponse extends S.Class<DescribeChannelBanResponse>("DescribeChannelBanResponse")({ChannelBan: S.optional(ChannelBan)}) {}
export class DescribeChannelFlowResponse extends S.Class<DescribeChannelFlowResponse>("DescribeChannelFlowResponse")({ChannelFlow: S.optional(ChannelFlow)}) {}
export class DescribeChannelMembershipResponse extends S.Class<DescribeChannelMembershipResponse>("DescribeChannelMembershipResponse")({ChannelMembership: S.optional(ChannelMembership)}) {}
export class DescribeChannelModeratedByAppInstanceUserResponse extends S.Class<DescribeChannelModeratedByAppInstanceUserResponse>("DescribeChannelModeratedByAppInstanceUserResponse")({Channel: S.optional(ChannelModeratedByAppInstanceUserSummary)}) {}
export class DescribeChannelModeratorResponse extends S.Class<DescribeChannelModeratorResponse>("DescribeChannelModeratorResponse")({ChannelModerator: S.optional(ChannelModerator)}) {}
export class GetChannelMessageResponse extends S.Class<GetChannelMessageResponse>("GetChannelMessageResponse")({ChannelMessage: S.optional(ChannelMessage)}) {}
export class GetChannelMessageStatusResponse extends S.Class<GetChannelMessageStatusResponse>("GetChannelMessageStatusResponse")({Status: S.optional(ChannelMessageStatusStructure)}) {}
export class GetMessagingSessionEndpointResponse extends S.Class<GetMessagingSessionEndpointResponse>("GetMessagingSessionEndpointResponse")({Endpoint: S.optional(MessagingSessionEndpoint)}) {}
export class ListChannelBansResponse extends S.Class<ListChannelBansResponse>("ListChannelBansResponse")({ChannelArn: S.optional(S.String), NextToken: S.optional(S.String), ChannelBans: S.optional(ChannelBanSummaryList)}) {}
export class ListChannelFlowsResponse extends S.Class<ListChannelFlowsResponse>("ListChannelFlowsResponse")({ChannelFlows: S.optional(ChannelFlowSummaryList), NextToken: S.optional(S.String)}) {}
export class ListChannelMembershipsResponse extends S.Class<ListChannelMembershipsResponse>("ListChannelMembershipsResponse")({ChannelArn: S.optional(S.String), ChannelMemberships: S.optional(ChannelMembershipSummaryList), NextToken: S.optional(S.String)}) {}
export class ListChannelMessagesResponse extends S.Class<ListChannelMessagesResponse>("ListChannelMessagesResponse")({ChannelArn: S.optional(S.String), NextToken: S.optional(S.String), ChannelMessages: S.optional(ChannelMessageSummaryList), SubChannelId: S.optional(S.String)}) {}
export class ListChannelModeratorsResponse extends S.Class<ListChannelModeratorsResponse>("ListChannelModeratorsResponse")({ChannelArn: S.optional(S.String), NextToken: S.optional(S.String), ChannelModerators: S.optional(ChannelModeratorSummaryList)}) {}
export class ListChannelsResponse extends S.Class<ListChannelsResponse>("ListChannelsResponse")({Channels: S.optional(ChannelSummaryList), NextToken: S.optional(S.String)}) {}
export class ListChannelsAssociatedWithChannelFlowResponse extends S.Class<ListChannelsAssociatedWithChannelFlowResponse>("ListChannelsAssociatedWithChannelFlowResponse")({Channels: S.optional(ChannelAssociatedWithFlowSummaryList), NextToken: S.optional(S.String)}) {}
export class ListSubChannelsResponse extends S.Class<ListSubChannelsResponse>("ListSubChannelsResponse")({ChannelArn: S.optional(S.String), SubChannels: S.optional(SubChannelSummaryList), NextToken: S.optional(S.String)}) {}
export class PutChannelMembershipPreferencesRequest extends S.Class<PutChannelMembershipPreferencesRequest>("PutChannelMembershipPreferencesRequest")({ChannelArn: S.String, MemberArn: S.String, ChimeBearer: H.Header("x-amz-chime-bearer"), Preferences: ChannelMembershipPreferences}) {}
export class PutMessagingStreamingConfigurationsResponse extends S.Class<PutMessagingStreamingConfigurationsResponse>("PutMessagingStreamingConfigurationsResponse")({StreamingConfigurations: S.optional(StreamingConfigurationList)}) {}
export class SearchChannelsResponse extends S.Class<SearchChannelsResponse>("SearchChannelsResponse")({Channels: S.optional(ChannelSummaryList), NextToken: S.optional(S.String)}) {}
export class SendChannelMessageRequest extends S.Class<SendChannelMessageRequest>("SendChannelMessageRequest")({ChannelArn: S.String, Content: S.String, Type: S.String, Persistence: S.String, Metadata: S.optional(S.String), ClientRequestToken: S.String, ChimeBearer: H.Header("x-amz-chime-bearer"), PushNotification: S.optional(PushNotificationConfiguration), MessageAttributes: S.optional(MessageAttributeMap), SubChannelId: S.optional(S.String), ContentType: S.optional(S.String), Target: S.optional(TargetList)}) {}
export class CreateChannelFlowRequest extends S.Class<CreateChannelFlowRequest>("CreateChannelFlowRequest")({AppInstanceArn: S.String, Processors: ProcessorList, Name: S.String, Tags: S.optional(TagList), ClientRequestToken: S.String}) {}
export class DescribeChannelMembershipForAppInstanceUserResponse extends S.Class<DescribeChannelMembershipForAppInstanceUserResponse>("DescribeChannelMembershipForAppInstanceUserResponse")({ChannelMembership: S.optional(ChannelMembershipForAppInstanceUserSummary)}) {}
export class PutChannelMembershipPreferencesResponse extends S.Class<PutChannelMembershipPreferencesResponse>("PutChannelMembershipPreferencesResponse")({ChannelArn: S.optional(S.String), Member: S.optional(Identity), Preferences: S.optional(ChannelMembershipPreferences)}) {}
export class SendChannelMessageResponse extends S.Class<SendChannelMessageResponse>("SendChannelMessageResponse")({ChannelArn: S.optional(S.String), MessageId: S.optional(S.String), Status: S.optional(ChannelMessageStatusStructure), SubChannelId: S.optional(S.String)}) {}
export class CreateChannelFlowResponse extends S.Class<CreateChannelFlowResponse>("CreateChannelFlowResponse")({ChannelFlowArn: S.optional(S.String)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class ServiceFailureException extends S.TaggedError<ServiceFailureException>()("ServiceFailureException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class ThrottledClientException extends S.TaggedError<ThrottledClientException>()("ThrottledClientException", {}) {};
export class UnauthorizedClientException extends S.TaggedError<UnauthorizedClientException>()("UnauthorizedClientException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class ResourceLimitExceededException extends S.TaggedError<ResourceLimitExceededException>()("ResourceLimitExceededException", {}) {};

//# Operations
/**
 * Deletes the streaming configurations for an `AppInstance`. For more information, see
 * Streaming messaging data in the *Amazon Chime SDK Developer Guide*.
 */export const deleteMessagingStreamingConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/app-instances/{AppInstanceArn}/streaming-configurations", method: "DELETE", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DeleteMessagingStreamingConfigurations" }, DeleteMessagingStreamingConfigurationsRequest, S.Struct({}), [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified tags from the specified Amazon Chime SDK messaging resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/tags?operation=untag-resource", method: "POST", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.UntagResource" }, UntagResourceRequest, S.Struct({}), [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a channel flow with a channel. Once associated, all messages to that channel go through channel flow processors. To stop processing, use the
 * `DisassociateChannelFlow` API.
 * 
 * 
 * 
 * 
 * Only administrators or channel moderators can associate a channel flow. The
 * `x-amz-chime-bearer` request header is mandatory. Use the ARN of the
 * `AppInstanceUser` or `AppInstanceBot`
 * that makes the API call as the value in the header.
 */export const associateChannelFlow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/channel-flow", method: "PUT", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.AssociateChannelFlow" }, AssociateChannelFlowRequest, S.Struct({}), [BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a member to a channel. The `InvitedBy` field in `ChannelMembership`
 * is derived from the request header. A channel member can:
 * 
 * 
 * 
 * - List messages
 * 
 * 
 * 
 * - Send messages
 * 
 * 
 * 
 * - Receive messages
 * 
 * 
 * 
 * - Edit their own messages
 * 
 * 
 * 
 * - Leave the channel
 * 
 * 
 * 
 * 
 * 
 * Privacy settings impact this action as follows:
 * 
 * 
 * 
 * - Public Channels: You do not need to be a member to list messages, but you must be
 * a member to send messages.
 * 
 * 
 * 
 * - Private Channels: You must be a member to list or send messages.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUserArn` or `AppInstanceBot` that makes the API call
 * as the value in the header.
 */export const createChannelMembership = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/memberships", method: "POST", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.CreateChannelMembership" }, CreateChannelMembershipRequest, CreateChannelMembershipResponse, [BadRequestException, ConflictException, ForbiddenException, NotFoundException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new `ChannelModerator`. A channel moderator can:
 * 
 * 
 * 
 * - Add and remove other members of the channel.
 * 
 * 
 * 
 * - Add and remove other moderators of the channel.
 * 
 * 
 * 
 * - Add and remove user bans for the channel.
 * 
 * 
 * 
 * - Redact messages in the channel.
 * 
 * 
 * 
 * - List messages in the channel.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot`of the user that makes the API call as the value in
 * the header.
 */export const createChannelModerator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/moderators", method: "POST", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.CreateChannelModerator" }, CreateChannelModeratorRequest, CreateChannelModeratorResponse, [BadRequestException, ConflictException, ForbiddenException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Immediately makes a channel and its memberships inaccessible and marks them for
 * deletion. This is an irreversible process.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUserArn` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const deleteChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}", method: "DELETE", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DeleteChannel" }, DeleteChannelRequest, S.Struct({}), [BadRequestException, ConflictException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a member from a channel's ban list.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const deleteChannelBan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/bans/{MemberArn}", method: "DELETE", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DeleteChannelBan" }, DeleteChannelBanRequest, S.Struct({}), [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a channel flow, an irreversible process. This is a developer API.
 * 
 * 
 * 
 * 
 * This API works only when the channel flow is not associated with any channel. To get a list of all channels that a channel flow is associated with, use the
 * `ListChannelsAssociatedWithChannelFlow` API. Use the `DisassociateChannelFlow` API to disassociate a channel flow from all channels.
 */export const deleteChannelFlow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channel-flows/{ChannelFlowArn}", method: "DELETE", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DeleteChannelFlow" }, DeleteChannelFlowRequest, S.Struct({}), [BadRequestException, ConflictException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a member from a channel.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * `AppInstanceUserArn` of the user that makes the API call as the value in
 * the header.
 */export const deleteChannelMembership = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/memberships/{MemberArn}", method: "DELETE", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DeleteChannelMembership" }, DeleteChannelMembershipRequest, S.Struct({}), [BadRequestException, ConflictException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a channel message. Only admins can perform this action. Deletion makes messages
 * inaccessible immediately. A background process deletes any revisions created by
 * `UpdateChannelMessage`.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const deleteChannelMessage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/messages/{MessageId}", method: "DELETE", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DeleteChannelMessage" }, DeleteChannelMessageRequest, S.Struct({}), [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a channel moderator.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const deleteChannelModerator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/moderators/{ChannelModeratorArn}", method: "DELETE", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DeleteChannelModerator" }, DeleteChannelModeratorRequest, S.Struct({}), [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a channel flow from all its channels. Once disassociated, all messages to
 * that channel stop going through the channel flow processor.
 * 
 * 
 * 
 * 
 * Only administrators or channel moderators can disassociate a channel flow.
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const disassociateChannelFlow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/channel-flow/{ChannelFlowArn}", method: "DELETE", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DisassociateChannelFlow" }, DisassociateChannelFlowRequest, S.Struct({}), [BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the membership preferences of an `AppInstanceUser` or `AppInstanceBot`
 * for the specified channel. A user or a bot must be a member of the channel and own the membership in order to retrieve membership preferences.
 * Users or bots in the `AppInstanceAdmin` and channel moderator roles can't
 * retrieve preferences for other users or bots. Banned users or bots can't retrieve membership preferences for the
 * channel from which they are banned.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const getChannelMembershipPreferences = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/memberships/{MemberArn}/preferences", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.GetChannelMembershipPreferences" }, GetChannelMembershipPreferencesRequest, GetChannelMembershipPreferencesResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the data streaming configuration for an `AppInstance`. For more information, see
 * Streaming messaging data in the *Amazon Chime SDK Developer Guide*.
 */export const getMessagingStreamingConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/app-instances/{AppInstanceArn}/streaming-configurations", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.GetMessagingStreamingConfigurations" }, GetMessagingStreamingConfigurationsRequest, GetMessagingStreamingConfigurationsResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all channels that an `AppInstanceUser` or `AppInstanceBot` is a part of.
 * Only an `AppInstanceAdmin` can call the API with a user ARN that is not their own.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const listChannelMembershipsForAppInstanceUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels?scope=app-instance-user-memberships", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.ListChannelMembershipsForAppInstanceUser" }, ListChannelMembershipsForAppInstanceUserRequest, ListChannelMembershipsForAppInstanceUserResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A list of the channels moderated by an `AppInstanceUser`.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const listChannelsModeratedByAppInstanceUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels?scope=app-instance-user-moderated-channels", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.ListChannelsModeratedByAppInstanceUser" }, ListChannelsModeratedByAppInstanceUserRequest, ListChannelsModeratedByAppInstanceUserResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags applied to an Amazon Chime SDK messaging resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/tags", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the number of days before the channel is automatically deleted.
 * 
 * 
 * 
 * 
 * 
 * - A background process deletes expired channels within 6 hours of expiration.
 * Actual deletion times may vary.
 * 
 * 
 * 
 * - Expired channels that have not yet been deleted appear as active, and you can update
 * their expiration settings. The system honors the new settings.
 * 
 * 
 * 
 * - The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const putChannelExpirationSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/expiration-settings", method: "PUT", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.PutChannelExpirationSettings" }, PutChannelExpirationSettingsRequest, PutChannelExpirationSettingsResponse, [BadRequestException, ConflictException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Redacts message content and metadata. The message exists in the back end, but the
 * action returns null content, and the state shows as redacted.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const redactChannelMessage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/messages/{MessageId}?operation=redact", method: "POST", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.RedactChannelMessage" }, RedactChannelMessageRequest, RedactChannelMessageResponse, [BadRequestException, ConflictException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Applies the specified tags to the specified Amazon Chime SDK messaging resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/tags?operation=tag-resource", method: "POST", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.TagResource" }, TagResourceRequest, S.Struct({}), [BadRequestException, ForbiddenException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a channel's attributes.
 * 
 * 
 * 
 * **Restriction**: You can't change a channel's privacy.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const updateChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}", method: "PUT", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.UpdateChannel" }, UpdateChannelRequest, UpdateChannelResponse, [BadRequestException, ConflictException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates channel flow attributes. This is a developer API.
 */export const updateChannelFlow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channel-flows/{ChannelFlowArn}", method: "PUT", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.UpdateChannelFlow" }, UpdateChannelFlowRequest, UpdateChannelFlowResponse, [BadRequestException, ConflictException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the content of a message.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const updateChannelMessage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/messages/{MessageId}", method: "PUT", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.UpdateChannelMessage" }, UpdateChannelMessageRequest, UpdateChannelMessageResponse, [BadRequestException, ConflictException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The details of the time when a user last read messages in a channel.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const updateChannelReadMarker = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/readMarker", method: "PUT", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.UpdateChannelReadMarker" }, UpdateChannelReadMarkerRequest, UpdateChannelReadMarkerResponse, [BadRequestException, ConflictException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a specified number of users and bots to a channel.
 */export const batchCreateChannelMembership = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/memberships?operation=batch-create", method: "POST", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.BatchCreateChannelMembership" }, BatchCreateChannelMembershipRequest, BatchCreateChannelMembershipResponse, [BadRequestException, ForbiddenException, NotFoundException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Calls back Amazon Chime SDK messaging with a processing response message. This should be invoked from the processor Lambda. This is a developer API.
 * 
 * 
 * You can return one of the following processing responses:
 * 
 * 
 * 
 * - Update message content or metadata
 * 
 * 
 * 
 * - Deny a message
 * 
 * 
 * 
 * - Make no changes to the message
 */export const channelFlowCallback = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}?operation=channel-flow-callback", method: "POST", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.ChannelFlowCallback" }, ChannelFlowCallbackRequest, ChannelFlowCallbackResponse, [BadRequestException, ConflictException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a channel to which you can add users and send messages.
 * 
 * 
 * 
 * **Restriction**: You can't change a channel's
 * privacy.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const createChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels", method: "POST", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.CreateChannel" }, CreateChannelRequest, CreateChannelResponse, [BadRequestException, ConflictException, ForbiddenException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Permanently bans a member from a channel. Moderators can't add banned members to a
 * channel. To undo a ban, you first have to `DeleteChannelBan`, and then
 * `CreateChannelMembership`. Bans are cleaned up when you delete users or
 * channels.
 * 
 * 
 * If you ban a user who is already part of a channel, that user is automatically kicked
 * from the channel.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const createChannelBan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/bans", method: "POST", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.CreateChannelBan" }, CreateChannelBanRequest, CreateChannelBanResponse, [BadRequestException, ConflictException, ForbiddenException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the full details of a channel in an Amazon Chime
 * `AppInstance`.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const describeChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DescribeChannel" }, DescribeChannelRequest, DescribeChannelResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the full details of a channel ban.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const describeChannelBan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/bans/{MemberArn}", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DescribeChannelBan" }, DescribeChannelBanRequest, DescribeChannelBanResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the full details of a channel flow in an Amazon Chime `AppInstance`. This is a developer API.
 */export const describeChannelFlow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channel-flows/{ChannelFlowArn}", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DescribeChannelFlow" }, DescribeChannelFlowRequest, DescribeChannelFlowResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the full details of a user's channel membership.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const describeChannelMembership = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/memberships/{MemberArn}", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DescribeChannelMembership" }, DescribeChannelMembershipRequest, DescribeChannelMembershipResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the full details of a channel moderated by the specified
 * `AppInstanceUser` or `AppInstanceBot`.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const describeChannelModeratedByAppInstanceUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}?scope=app-instance-user-moderated-channel", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DescribeChannelModeratedByAppInstanceUser" }, DescribeChannelModeratedByAppInstanceUserRequest, DescribeChannelModeratedByAppInstanceUserResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the full details of a single ChannelModerator.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * `AppInstanceUserArn` of the user that makes the API call as the value in
 * the header.
 */export const describeChannelModerator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/moderators/{ChannelModeratorArn}", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DescribeChannelModerator" }, DescribeChannelModeratorRequest, DescribeChannelModeratorResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the full details of a channel message.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const getChannelMessage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/messages/{MessageId}", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.GetChannelMessage" }, GetChannelMessageRequest, GetChannelMessageResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets message status for a specified `messageId`. Use this API to determine the intermediate status of messages going through channel flow processing. The API provides an alternative to
 * retrieving message status if the event was not received because a client wasn't connected to a websocket.
 * 
 * 
 * Messages can have any one of these statuses.
 * 
 * 
 * 
 * ### SENT
 * 
 * 
 * 
 * Message processed successfully
 * 
 * 
 * 
 * 
 * ### PENDING
 * 
 * 
 * 
 * Ongoing processing
 * 
 * 
 * 
 * 
 * ### FAILED
 * 
 * 
 * 
 * Processing failed
 * 
 * 
 * 
 * 
 * ### DENIED
 * 
 * 
 * 
 * Message denied by the processor
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * - This API does not return statuses for denied messages, because we don't store them once the processor denies them.
 * 
 * 
 * 
 * - Only the message sender can invoke this API.
 * 
 * 
 * 
 * - The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const getChannelMessageStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/messages/{MessageId}?scope=message-status", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.GetChannelMessageStatus" }, GetChannelMessageStatusRequest, GetChannelMessageStatusResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The details of the endpoint for the messaging session.
 */export const getMessagingSessionEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/endpoints/messaging-session", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.GetMessagingSessionEndpoint" }, GetMessagingSessionEndpointRequest, GetMessagingSessionEndpointResponse, [ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the users and bots banned from a particular channel.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const listChannelBans = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/bans", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.ListChannelBans" }, ListChannelBansRequest, ListChannelBansResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a paginated lists of all the channel flows created under a single Chime. This is a developer API.
 */export const listChannelFlows = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channel-flows", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.ListChannelFlows" }, ListChannelFlowsRequest, ListChannelFlowsResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all channel memberships in a channel.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 * 
 * 
 * 
 * 
 * If you want to list the channels to which a specific app instance user belongs, see the
 * ListChannelMembershipsForAppInstanceUser API.
 */export const listChannelMemberships = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/memberships", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.ListChannelMemberships" }, ListChannelMembershipsRequest, ListChannelMembershipsResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all the messages in a channel. Returns a paginated list of
 * `ChannelMessages`. By default, sorted by creation timestamp in descending
 * order.
 * 
 * 
 * 
 * 
 * Redacted messages appear in the results as empty, since they are only redacted, not
 * deleted. Deleted messages do not appear in the results. This action always returns the
 * latest version of an edited message.
 * 
 * 
 * Also, the `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const listChannelMessages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/messages", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.ListChannelMessages" }, ListChannelMessagesRequest, ListChannelMessagesResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the moderators for a channel.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const listChannelModerators = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/moderators", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.ListChannelModerators" }, ListChannelModeratorsRequest, ListChannelModeratorsResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all Channels created under a single Chime App as a paginated list. You can specify
 * filters to narrow results.
 * 
 * 
 * **Functionality & restrictions**
 * 
 * 
 * 
 * 
 * - Use privacy = `PUBLIC` to retrieve all public channels in the
 * account.
 * 
 * 
 * 
 * - Only an `AppInstanceAdmin` can set privacy = `PRIVATE` to
 * list the private channels in an account.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const listChannels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.ListChannels" }, ListChannelsRequest, ListChannelsResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all channels associated with a specified channel flow. You can associate a channel flow with multiple channels, but you can only associate a channel with one channel flow. This is a developer API.
 */export const listChannelsAssociatedWithChannelFlow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels?scope=channel-flow-associations", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.ListChannelsAssociatedWithChannelFlow" }, ListChannelsAssociatedWithChannelFlowRequest, ListChannelsAssociatedWithChannelFlowResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the SubChannels in an elastic channel when given a channel ID. Available only to the app instance admins and channel moderators of elastic channels.
 */export const listSubChannels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/subchannels", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.ListSubChannels" }, ListSubChannelsRequest, ListSubChannelsResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the data streaming configuration for an `AppInstance`. For more information, see
 * Streaming messaging data in the *Amazon Chime SDK Developer Guide*.
 */export const putMessagingStreamingConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/app-instances/{AppInstanceArn}/streaming-configurations", method: "PUT", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.PutMessagingStreamingConfigurations" }, PutMessagingStreamingConfigurationsRequest, PutMessagingStreamingConfigurationsResponse, [BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows the `ChimeBearer` to search channels by channel members. Users or bots can search
 * across the channels that they belong to. Users in the `AppInstanceAdmin` role can search across
 * all channels.
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 * 
 * 
 * 
 * 
 * This operation isn't supported for `AppInstanceUsers` with a large number of memberships.
 */export const searchChannels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels?operation=search", method: "POST", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.SearchChannels" }, SearchChannelsRequest, SearchChannelsResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the details of a channel based on the membership of the specified
 * `AppInstanceUser` or `AppInstanceBot`.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */export const describeChannelMembershipForAppInstanceUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}?scope=app-instance-user-membership", method: "GET", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.DescribeChannelMembershipForAppInstanceUser" }, DescribeChannelMembershipForAppInstanceUserRequest, DescribeChannelMembershipForAppInstanceUserResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the membership preferences of an `AppInstanceUser` or `AppInstanceBot`
 * for the specified channel. The user or bot must be a member of the channel. Only the user or bot who owns the
 * membership can set preferences. Users or bots in the `AppInstanceAdmin` and channel moderator roles can't set
 * preferences for other users. Banned users or bots can't set membership preferences for the channel from
 * which they are banned.
 * 
 * 
 * 
 * 
 * The x-amz-chime-bearer request header is mandatory. Use the ARN of an
 * `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the
 * header.
 */export const putChannelMembershipPreferences = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/memberships/{MemberArn}/preferences", method: "PUT", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.PutChannelMembershipPreferences" }, PutChannelMembershipPreferencesRequest, PutChannelMembershipPreferencesResponse, [BadRequestException, ConflictException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends a message to a particular channel that the member is a part of.
 * 
 * 
 * 
 * 
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 * 
 * 
 * Also, `STANDARD` messages can be up to 4KB in size and contain metadata. Metadata is arbitrary,
 * and you can use it in a variety of ways, such as containing a link to an attachment.
 * 
 * 
 * 
 * `CONTROL` messages are limited to 30 bytes and do not contain metadata.
 */export const sendChannelMessage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channels/{ChannelArn}/messages", method: "POST", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.SendChannelMessage" }, SendChannelMessageRequest, SendChannelMessageResponse, [BadRequestException, ConflictException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a channel flow, a container for processors. Processors are AWS Lambda functions
 * that perform actions on chat messages, such as stripping out profanity. You can associate
 * channel flows with channels, and the processors in the channel flow then take action on all
 * messages sent to that channel. This is a developer API.
 * 
 * 
 * Channel flows process the following items:
 * 
 * 
 * 
 * - New and updated messages
 * 
 * 
 * 
 * - Persistent and non-persistent messages
 * 
 * 
 * 
 * - The Standard message type
 * 
 * 
 * 
 * 
 * 
 * 
 * Channel flows don't process Control or System messages. For more information about the message types provided by Chime SDK messaging, refer to
 * Message types in the *Amazon Chime developer guide*.
 */export const createChannelFlow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-05-15", uri: "/channel-flows", method: "POST", sdkId: "Chime SDK Messaging", sigV4ServiceName: "chime", name: "ChimeMessagingService.CreateChannelFlow" }, CreateChannelFlowRequest, CreateChannelFlowResponse, [BadRequestException, ConflictException, ForbiddenException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

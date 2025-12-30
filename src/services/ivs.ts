import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ChannelArnList = S.Array(S.String);
export const StreamKeyArnList = S.Array(S.String);
export const PlaybackRestrictionPolicyAllowedCountryList = S.Array(S.String);
export const PlaybackRestrictionPolicyAllowedOriginList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class BatchGetChannelRequest extends S.Class<BatchGetChannelRequest>("BatchGetChannelRequest")({arns: ChannelArnList}) {}
export class BatchGetStreamKeyRequest extends S.Class<BatchGetStreamKeyRequest>("BatchGetStreamKeyRequest")({arns: StreamKeyArnList}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class CreatePlaybackRestrictionPolicyRequest extends S.Class<CreatePlaybackRestrictionPolicyRequest>("CreatePlaybackRestrictionPolicyRequest")({allowedCountries: S.optional(PlaybackRestrictionPolicyAllowedCountryList), allowedOrigins: S.optional(PlaybackRestrictionPolicyAllowedOriginList), enableStrictOriginEnforcement: S.optional(S.Boolean), name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class CreateStreamKeyRequest extends S.Class<CreateStreamKeyRequest>("CreateStreamKeyRequest")({channelArn: S.String, tags: S.optional(Tags)}) {}
export class DeleteChannelRequest extends S.Class<DeleteChannelRequest>("DeleteChannelRequest")({arn: S.String}) {}
export class DeletePlaybackKeyPairRequest extends S.Class<DeletePlaybackKeyPairRequest>("DeletePlaybackKeyPairRequest")({arn: S.String}) {}
export class DeletePlaybackKeyPairResponse extends S.Class<DeletePlaybackKeyPairResponse>("DeletePlaybackKeyPairResponse")({}) {}
export class DeletePlaybackRestrictionPolicyRequest extends S.Class<DeletePlaybackRestrictionPolicyRequest>("DeletePlaybackRestrictionPolicyRequest")({arn: S.String}) {}
export class DeleteRecordingConfigurationRequest extends S.Class<DeleteRecordingConfigurationRequest>("DeleteRecordingConfigurationRequest")({arn: S.String}) {}
export class DeleteStreamKeyRequest extends S.Class<DeleteStreamKeyRequest>("DeleteStreamKeyRequest")({arn: S.String}) {}
export class GetChannelRequest extends S.Class<GetChannelRequest>("GetChannelRequest")({arn: S.String}) {}
export class GetPlaybackKeyPairRequest extends S.Class<GetPlaybackKeyPairRequest>("GetPlaybackKeyPairRequest")({arn: S.String}) {}
export class GetPlaybackRestrictionPolicyRequest extends S.Class<GetPlaybackRestrictionPolicyRequest>("GetPlaybackRestrictionPolicyRequest")({arn: S.String}) {}
export class GetRecordingConfigurationRequest extends S.Class<GetRecordingConfigurationRequest>("GetRecordingConfigurationRequest")({arn: S.String}) {}
export class GetStreamRequest extends S.Class<GetStreamRequest>("GetStreamRequest")({channelArn: S.String}) {}
export class GetStreamKeyRequest extends S.Class<GetStreamKeyRequest>("GetStreamKeyRequest")({arn: S.String}) {}
export class GetStreamSessionRequest extends S.Class<GetStreamSessionRequest>("GetStreamSessionRequest")({channelArn: S.String, streamId: S.optional(S.String)}) {}
export class ImportPlaybackKeyPairRequest extends S.Class<ImportPlaybackKeyPairRequest>("ImportPlaybackKeyPairRequest")({publicKeyMaterial: S.String, name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class ListChannelsRequest extends S.Class<ListChannelsRequest>("ListChannelsRequest")({filterByName: S.optional(S.String), filterByRecordingConfigurationArn: S.optional(S.String), filterByPlaybackRestrictionPolicyArn: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListPlaybackKeyPairsRequest extends S.Class<ListPlaybackKeyPairsRequest>("ListPlaybackKeyPairsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListPlaybackRestrictionPoliciesRequest extends S.Class<ListPlaybackRestrictionPoliciesRequest>("ListPlaybackRestrictionPoliciesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListRecordingConfigurationsRequest extends S.Class<ListRecordingConfigurationsRequest>("ListRecordingConfigurationsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListStreamKeysRequest extends S.Class<ListStreamKeysRequest>("ListStreamKeysRequest")({channelArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListStreamSessionsRequest extends S.Class<ListStreamSessionsRequest>("ListStreamSessionsRequest")({channelArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class PutMetadataRequest extends S.Class<PutMetadataRequest>("PutMetadataRequest")({channelArn: S.String, metadata: S.String}) {}
export class StartViewerSessionRevocationRequest extends S.Class<StartViewerSessionRevocationRequest>("StartViewerSessionRevocationRequest")({channelArn: S.String, viewerId: S.String, viewerSessionVersionsLessThanOrEqualTo: S.optional(S.Number)}) {}
export class StartViewerSessionRevocationResponse extends S.Class<StartViewerSessionRevocationResponse>("StartViewerSessionRevocationResponse")({}) {}
export class StopStreamRequest extends S.Class<StopStreamRequest>("StopStreamRequest")({channelArn: S.String}) {}
export class StopStreamResponse extends S.Class<StopStreamResponse>("StopStreamResponse")({}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class MultitrackInputConfiguration extends S.Class<MultitrackInputConfiguration>("MultitrackInputConfiguration")({enabled: S.optional(S.Boolean), policy: S.optional(S.String), maximumResolution: S.optional(S.String)}) {}
export class UpdateChannelRequest extends S.Class<UpdateChannelRequest>("UpdateChannelRequest")({arn: S.String, name: S.optional(S.String), latencyMode: S.optional(S.String), type: S.optional(S.String), authorized: S.optional(S.Boolean), recordingConfigurationArn: S.optional(S.String), insecureIngest: S.optional(S.Boolean), preset: S.optional(S.String), playbackRestrictionPolicyArn: S.optional(S.String), multitrackInputConfiguration: S.optional(MultitrackInputConfiguration), containerFormat: S.optional(S.String)}) {}
export class UpdatePlaybackRestrictionPolicyRequest extends S.Class<UpdatePlaybackRestrictionPolicyRequest>("UpdatePlaybackRestrictionPolicyRequest")({arn: S.String, allowedCountries: S.optional(PlaybackRestrictionPolicyAllowedCountryList), allowedOrigins: S.optional(PlaybackRestrictionPolicyAllowedOriginList), enableStrictOriginEnforcement: S.optional(S.Boolean), name: S.optional(S.String)}) {}
export const ThumbnailConfigurationStorageList = S.Array(S.String);
export const RenditionConfigurationRenditionList = S.Array(S.String);
export class BatchStartViewerSessionRevocationViewerSession extends S.Class<BatchStartViewerSessionRevocationViewerSession>("BatchStartViewerSessionRevocationViewerSession")({channelArn: S.String, viewerId: S.String, viewerSessionVersionsLessThanOrEqualTo: S.optional(S.Number)}) {}
export const BatchStartViewerSessionRevocationViewerSessionList = S.Array(BatchStartViewerSessionRevocationViewerSession);
export class ThumbnailConfiguration extends S.Class<ThumbnailConfiguration>("ThumbnailConfiguration")({recordingMode: S.optional(S.String), targetIntervalSeconds: S.optional(S.Number), resolution: S.optional(S.String), storage: S.optional(ThumbnailConfigurationStorageList)}) {}
export class RenditionConfiguration extends S.Class<RenditionConfiguration>("RenditionConfiguration")({renditionSelection: S.optional(S.String), renditions: S.optional(RenditionConfigurationRenditionList)}) {}
export class StreamFilters extends S.Class<StreamFilters>("StreamFilters")({health: S.optional(S.String)}) {}
export class BatchStartViewerSessionRevocationRequest extends S.Class<BatchStartViewerSessionRevocationRequest>("BatchStartViewerSessionRevocationRequest")({viewerSessions: BatchStartViewerSessionRevocationViewerSessionList}) {}
export class CreateChannelRequest extends S.Class<CreateChannelRequest>("CreateChannelRequest")({name: S.optional(S.String), latencyMode: S.optional(S.String), type: S.optional(S.String), authorized: S.optional(S.Boolean), recordingConfigurationArn: S.optional(S.String), tags: S.optional(Tags), insecureIngest: S.optional(S.Boolean), preset: S.optional(S.String), playbackRestrictionPolicyArn: S.optional(S.String), multitrackInputConfiguration: S.optional(MultitrackInputConfiguration), containerFormat: S.optional(S.String)}) {}
export class StreamKey extends S.Class<StreamKey>("StreamKey")({arn: S.optional(S.String), value: S.optional(S.String), channelArn: S.optional(S.String), tags: S.optional(Tags)}) {}
export class CreateStreamKeyResponse extends S.Class<CreateStreamKeyResponse>("CreateStreamKeyResponse")({streamKey: S.optional(StreamKey)}) {}
export class Srt extends S.Class<Srt>("Srt")({endpoint: S.optional(S.String), passphrase: S.optional(S.String)}) {}
export class Channel extends S.Class<Channel>("Channel")({arn: S.optional(S.String), name: S.optional(S.String), latencyMode: S.optional(S.String), type: S.optional(S.String), recordingConfigurationArn: S.optional(S.String), ingestEndpoint: S.optional(S.String), playbackUrl: S.optional(S.String), authorized: S.optional(S.Boolean), tags: S.optional(Tags), insecureIngest: S.optional(S.Boolean), preset: S.optional(S.String), srt: S.optional(Srt), playbackRestrictionPolicyArn: S.optional(S.String), multitrackInputConfiguration: S.optional(MultitrackInputConfiguration), containerFormat: S.optional(S.String)}) {}
export class GetChannelResponse extends S.Class<GetChannelResponse>("GetChannelResponse")({channel: S.optional(Channel)}) {}
export class PlaybackRestrictionPolicy extends S.Class<PlaybackRestrictionPolicy>("PlaybackRestrictionPolicy")({arn: S.String, allowedCountries: PlaybackRestrictionPolicyAllowedCountryList, allowedOrigins: PlaybackRestrictionPolicyAllowedOriginList, enableStrictOriginEnforcement: S.optional(S.Boolean), name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class GetPlaybackRestrictionPolicyResponse extends S.Class<GetPlaybackRestrictionPolicyResponse>("GetPlaybackRestrictionPolicyResponse")({playbackRestrictionPolicy: S.optional(PlaybackRestrictionPolicy)}) {}
export class GetStreamKeyResponse extends S.Class<GetStreamKeyResponse>("GetStreamKeyResponse")({streamKey: S.optional(StreamKey)}) {}
export class PlaybackKeyPair extends S.Class<PlaybackKeyPair>("PlaybackKeyPair")({arn: S.optional(S.String), name: S.optional(S.String), fingerprint: S.optional(S.String), tags: S.optional(Tags)}) {}
export class ImportPlaybackKeyPairResponse extends S.Class<ImportPlaybackKeyPairResponse>("ImportPlaybackKeyPairResponse")({keyPair: S.optional(PlaybackKeyPair)}) {}
export class ListStreamsRequest extends S.Class<ListStreamsRequest>("ListStreamsRequest")({filterBy: S.optional(StreamFilters), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Tags}) {}
export class UpdateChannelResponse extends S.Class<UpdateChannelResponse>("UpdateChannelResponse")({channel: S.optional(Channel)}) {}
export class UpdatePlaybackRestrictionPolicyResponse extends S.Class<UpdatePlaybackRestrictionPolicyResponse>("UpdatePlaybackRestrictionPolicyResponse")({playbackRestrictionPolicy: S.optional(PlaybackRestrictionPolicy)}) {}
export class S3DestinationConfiguration extends S.Class<S3DestinationConfiguration>("S3DestinationConfiguration")({bucketName: S.String}) {}
export class BatchError extends S.Class<BatchError>("BatchError")({arn: S.optional(S.String), code: S.optional(S.String), message: S.optional(S.String)}) {}
export const BatchErrors = S.Array(BatchError);
export const StreamKeys = S.Array(StreamKey);
export class DestinationConfiguration extends S.Class<DestinationConfiguration>("DestinationConfiguration")({s3: S.optional(S3DestinationConfiguration)}) {}
export class RecordingConfiguration extends S.Class<RecordingConfiguration>("RecordingConfiguration")({arn: S.String, name: S.optional(S.String), destinationConfiguration: DestinationConfiguration, state: S.String, tags: S.optional(Tags), thumbnailConfiguration: S.optional(ThumbnailConfiguration), recordingReconnectWindowSeconds: S.optional(S.Number), renditionConfiguration: S.optional(RenditionConfiguration)}) {}
export class Stream extends S.Class<Stream>("Stream")({channelArn: S.optional(S.String), streamId: S.optional(S.String), playbackUrl: S.optional(S.String), startTime: S.optional(S.Date), state: S.optional(S.String), health: S.optional(S.String), viewerCount: S.optional(S.Number)}) {}
export class ChannelSummary extends S.Class<ChannelSummary>("ChannelSummary")({arn: S.optional(S.String), name: S.optional(S.String), latencyMode: S.optional(S.String), authorized: S.optional(S.Boolean), recordingConfigurationArn: S.optional(S.String), tags: S.optional(Tags), insecureIngest: S.optional(S.Boolean), type: S.optional(S.String), preset: S.optional(S.String), playbackRestrictionPolicyArn: S.optional(S.String)}) {}
export const ChannelList = S.Array(ChannelSummary);
export class PlaybackKeyPairSummary extends S.Class<PlaybackKeyPairSummary>("PlaybackKeyPairSummary")({arn: S.optional(S.String), name: S.optional(S.String), tags: S.optional(Tags)}) {}
export const PlaybackKeyPairList = S.Array(PlaybackKeyPairSummary);
export class PlaybackRestrictionPolicySummary extends S.Class<PlaybackRestrictionPolicySummary>("PlaybackRestrictionPolicySummary")({arn: S.String, allowedCountries: PlaybackRestrictionPolicyAllowedCountryList, allowedOrigins: PlaybackRestrictionPolicyAllowedOriginList, enableStrictOriginEnforcement: S.optional(S.Boolean), name: S.optional(S.String), tags: S.optional(Tags)}) {}
export const PlaybackRestrictionPolicyList = S.Array(PlaybackRestrictionPolicySummary);
export class RecordingConfigurationSummary extends S.Class<RecordingConfigurationSummary>("RecordingConfigurationSummary")({arn: S.String, name: S.optional(S.String), destinationConfiguration: DestinationConfiguration, state: S.String, tags: S.optional(Tags)}) {}
export const RecordingConfigurationList = S.Array(RecordingConfigurationSummary);
export class StreamKeySummary extends S.Class<StreamKeySummary>("StreamKeySummary")({arn: S.optional(S.String), channelArn: S.optional(S.String), tags: S.optional(Tags)}) {}
export const StreamKeyList = S.Array(StreamKeySummary);
export class StreamSessionSummary extends S.Class<StreamSessionSummary>("StreamSessionSummary")({streamId: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), hasErrorEvent: S.optional(S.Boolean)}) {}
export const StreamSessionList = S.Array(StreamSessionSummary);
export class VideoConfiguration extends S.Class<VideoConfiguration>("VideoConfiguration")({avcProfile: S.optional(S.String), avcLevel: S.optional(S.String), codec: S.optional(S.String), encoder: S.optional(S.String), targetBitrate: S.optional(S.Number), targetFramerate: S.optional(S.Number), videoHeight: S.optional(S.Number), videoWidth: S.optional(S.Number), level: S.optional(S.String), track: S.optional(S.String), profile: S.optional(S.String)}) {}
export const VideoConfigurationList = S.Array(VideoConfiguration);
export class AudioConfiguration extends S.Class<AudioConfiguration>("AudioConfiguration")({codec: S.optional(S.String), targetBitrate: S.optional(S.Number), sampleRate: S.optional(S.Number), channels: S.optional(S.Number), track: S.optional(S.String)}) {}
export const AudioConfigurationList = S.Array(AudioConfiguration);
export class BatchGetStreamKeyResponse extends S.Class<BatchGetStreamKeyResponse>("BatchGetStreamKeyResponse")({streamKeys: S.optional(StreamKeys), errors: S.optional(BatchErrors)}) {}
export class CreateChannelResponse extends S.Class<CreateChannelResponse>("CreateChannelResponse")({channel: S.optional(Channel), streamKey: S.optional(StreamKey)}) {}
export class CreatePlaybackRestrictionPolicyResponse extends S.Class<CreatePlaybackRestrictionPolicyResponse>("CreatePlaybackRestrictionPolicyResponse")({playbackRestrictionPolicy: S.optional(PlaybackRestrictionPolicy)}) {}
export class CreateRecordingConfigurationRequest extends S.Class<CreateRecordingConfigurationRequest>("CreateRecordingConfigurationRequest")({name: S.optional(S.String), destinationConfiguration: DestinationConfiguration, tags: S.optional(Tags), thumbnailConfiguration: S.optional(ThumbnailConfiguration), recordingReconnectWindowSeconds: S.optional(S.Number), renditionConfiguration: S.optional(RenditionConfiguration)}) {}
export class GetPlaybackKeyPairResponse extends S.Class<GetPlaybackKeyPairResponse>("GetPlaybackKeyPairResponse")({keyPair: S.optional(PlaybackKeyPair)}) {}
export class GetRecordingConfigurationResponse extends S.Class<GetRecordingConfigurationResponse>("GetRecordingConfigurationResponse")({recordingConfiguration: S.optional(RecordingConfiguration)}) {}
export class GetStreamResponse extends S.Class<GetStreamResponse>("GetStreamResponse")({stream: S.optional(Stream)}) {}
export class ListChannelsResponse extends S.Class<ListChannelsResponse>("ListChannelsResponse")({channels: ChannelList, nextToken: S.optional(S.String)}) {}
export class ListPlaybackKeyPairsResponse extends S.Class<ListPlaybackKeyPairsResponse>("ListPlaybackKeyPairsResponse")({keyPairs: PlaybackKeyPairList, nextToken: S.optional(S.String)}) {}
export class ListPlaybackRestrictionPoliciesResponse extends S.Class<ListPlaybackRestrictionPoliciesResponse>("ListPlaybackRestrictionPoliciesResponse")({playbackRestrictionPolicies: PlaybackRestrictionPolicyList, nextToken: S.optional(S.String)}) {}
export class ListRecordingConfigurationsResponse extends S.Class<ListRecordingConfigurationsResponse>("ListRecordingConfigurationsResponse")({recordingConfigurations: RecordingConfigurationList, nextToken: S.optional(S.String)}) {}
export class ListStreamKeysResponse extends S.Class<ListStreamKeysResponse>("ListStreamKeysResponse")({streamKeys: StreamKeyList, nextToken: S.optional(S.String)}) {}
export class ListStreamSessionsResponse extends S.Class<ListStreamSessionsResponse>("ListStreamSessionsResponse")({streamSessions: StreamSessionList, nextToken: S.optional(S.String)}) {}
export class IngestConfigurations extends S.Class<IngestConfigurations>("IngestConfigurations")({videoConfigurations: VideoConfigurationList, audioConfigurations: AudioConfigurationList}) {}
export class StreamEvent extends S.Class<StreamEvent>("StreamEvent")({name: S.optional(S.String), type: S.optional(S.String), eventTime: S.optional(S.Date), code: S.optional(S.String)}) {}
export const StreamEvents = S.Array(StreamEvent);
export const Channels = S.Array(Channel);
export class BatchStartViewerSessionRevocationError extends S.Class<BatchStartViewerSessionRevocationError>("BatchStartViewerSessionRevocationError")({channelArn: S.String, viewerId: S.String, code: S.optional(S.String), message: S.optional(S.String)}) {}
export const BatchStartViewerSessionRevocationErrors = S.Array(BatchStartViewerSessionRevocationError);
export class StreamSummary extends S.Class<StreamSummary>("StreamSummary")({channelArn: S.optional(S.String), streamId: S.optional(S.String), state: S.optional(S.String), health: S.optional(S.String), viewerCount: S.optional(S.Number), startTime: S.optional(S.Date)}) {}
export const StreamList = S.Array(StreamSummary);
export class BatchGetChannelResponse extends S.Class<BatchGetChannelResponse>("BatchGetChannelResponse")({channels: S.optional(Channels), errors: S.optional(BatchErrors)}) {}
export class BatchStartViewerSessionRevocationResponse extends S.Class<BatchStartViewerSessionRevocationResponse>("BatchStartViewerSessionRevocationResponse")({errors: S.optional(BatchStartViewerSessionRevocationErrors)}) {}
export class CreateRecordingConfigurationResponse extends S.Class<CreateRecordingConfigurationResponse>("CreateRecordingConfigurationResponse")({recordingConfiguration: S.optional(RecordingConfiguration)}) {}
export class ListStreamsResponse extends S.Class<ListStreamsResponse>("ListStreamsResponse")({streams: StreamList, nextToken: S.optional(S.String)}) {}
export class IngestConfiguration extends S.Class<IngestConfiguration>("IngestConfiguration")({video: S.optional(VideoConfiguration), audio: S.optional(AudioConfiguration)}) {}
export class StreamSession extends S.Class<StreamSession>("StreamSession")({streamId: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), channel: S.optional(Channel), ingestConfiguration: S.optional(IngestConfiguration), ingestConfigurations: S.optional(IngestConfigurations), recordingConfiguration: S.optional(RecordingConfiguration), truncatedEvents: S.optional(StreamEvents)}) {}
export class GetStreamSessionResponse extends S.Class<GetStreamSessionResponse>("GetStreamSessionResponse")({streamSession: S.optional(StreamSession)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class PendingVerification extends S.TaggedError<PendingVerification>()("PendingVerification", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ChannelNotBroadcasting extends S.TaggedError<ChannelNotBroadcasting>()("ChannelNotBroadcasting", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class StreamUnavailable extends S.TaggedError<StreamUnavailable>()("StreamUnavailable", {exceptionMessage: S.optional(S.String)}) {};

//# Operations
/**
 * Removes tags from the resource with the specified ARN.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified channel and its associated stream keys.
 * 
 * 
 * If you try to delete a live channel, you will get an error (409 ConflictException). To
 * delete a channel that is live, call StopStream, wait for the Amazon
 * EventBridge "Stream End" event (to verify that the stream's state is no longer Live), then
 * call DeleteChannel. (See Using EventBridge with Amazon IVS.)
 */export const deleteChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DeleteChannel", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.DeleteChannel" }, DeleteChannelRequest, S.Struct({}), [AccessDeniedException, ConflictException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a specified authorization key pair. This invalidates future viewer tokens
 * generated using the key pair’s `privateKey`. For more information, see Setting Up Private
 * Channels in the *Amazon IVS User Guide*.
 */export const deletePlaybackKeyPair = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DeletePlaybackKeyPair", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.DeletePlaybackKeyPair" }, DeletePlaybackKeyPairRequest, DeletePlaybackKeyPairResponse, [AccessDeniedException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified playback restriction policy.
 */export const deletePlaybackRestrictionPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DeletePlaybackRestrictionPolicy", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.DeletePlaybackRestrictionPolicy" }, DeletePlaybackRestrictionPolicyRequest, S.Struct({}), [AccessDeniedException, ConflictException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the recording configuration for the specified ARN.
 * 
 * 
 * If you try to delete a recording configuration that is associated with a channel, you will
 * get an error (409 ConflictException). To avoid this, for all channels that reference the
 * recording configuration, first use UpdateChannel to set the
 * `recordingConfigurationArn` field to an empty string, then use
 * DeleteRecordingConfiguration.
 */export const deleteRecordingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DeleteRecordingConfiguration", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.DeleteRecordingConfiguration" }, DeleteRecordingConfigurationRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the stream key for the specified ARN, so it can no longer be used to
 * stream.
 */export const deleteStreamKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DeleteStreamKey", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.DeleteStreamKey" }, DeleteStreamKeyRequest, S.Struct({}), [AccessDeniedException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the channel configuration for the specified channel ARN. See also BatchGetChannel.
 */export const getChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetChannel", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.GetChannel" }, GetChannelRequest, GetChannelResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the specified playback restriction policy.
 */export const getPlaybackRestrictionPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetPlaybackRestrictionPolicy", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.GetPlaybackRestrictionPolicy" }, GetPlaybackRestrictionPolicyRequest, GetPlaybackRestrictionPolicyResponse, [AccessDeniedException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets stream-key information for a specified ARN.
 */export const getStreamKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetStreamKey", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.GetStreamKey" }, GetStreamKeyRequest, GetStreamKeyResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Imports the public portion of a new key pair and returns its `arn` and
 * `fingerprint`. The `privateKey` can then be used to generate viewer
 * authorization tokens, to grant viewers access to private channels. For more information, see
 * Setting Up
 * Private Channels in the *Amazon IVS User Guide*.
 */export const importPlaybackKeyPair = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ImportPlaybackKeyPair", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.ImportPlaybackKeyPair" }, ImportPlaybackKeyPairRequest, ImportPlaybackKeyPairResponse, [AccessDeniedException, ConflictException, PendingVerification, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about Amazon Web Services tags for the specified ARN.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/tags/{resourceArn}", method: "GET", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Inserts metadata into the active stream of the specified channel. At most 5 requests per
 * second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient
 * for your needs, we recommend batching your data into a single PutMetadata call.) At most 155
 * requests per second per account are allowed. Also see Embedding Metadata within a Video Stream in
 * the *Amazon IVS User Guide*.
 */export const putMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/PutMetadata", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.PutMetadata" }, PutMetadataRequest, S.Struct({}), [AccessDeniedException, ChannelNotBroadcasting, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the process of revoking the viewer session associated with a specified channel ARN
 * and viewer ID. Optionally, you can provide a version to revoke viewer sessions less than and
 * including that version. For instructions on associating a viewer ID with a viewer session, see
 * Setting Up
 * Private Channels.
 */export const startViewerSessionRevocation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/StartViewerSessionRevocation", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.StartViewerSessionRevocation" }, StartViewerSessionRevocationRequest, StartViewerSessionRevocationResponse, [AccessDeniedException, InternalServerException, PendingVerification, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disconnects the incoming RTMPS stream for the specified channel. Can be used in
 * conjunction with DeleteStreamKey to prevent further streaming to a
 * channel.
 * 
 * 
 * 
 * 
 * Many streaming client-software libraries automatically reconnect a dropped RTMPS
 * session, so to stop the stream permanently, you may want to first revoke the
 * `streamKey` attached to the channel.
 */export const stopStream = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/StopStream", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.StopStream" }, StopStreamRequest, StopStreamResponse, [AccessDeniedException, ChannelNotBroadcasting, ResourceNotFoundException, StreamUnavailable, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or updates tags for the Amazon Web Services resource with the specified ARN.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/tags/{resourceArn}", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a channel's configuration. Live channels cannot be updated. You must stop the
 * ongoing stream, update the channel, and restart the stream for the changes to take
 * effect.
 */export const updateChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/UpdateChannel", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.UpdateChannel" }, UpdateChannelRequest, UpdateChannelResponse, [AccessDeniedException, ConflictException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a specified playback restriction policy.
 */export const updatePlaybackRestrictionPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/UpdatePlaybackRestrictionPolicy", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.UpdatePlaybackRestrictionPolicy" }, UpdatePlaybackRestrictionPolicyRequest, UpdatePlaybackRestrictionPolicyResponse, [AccessDeniedException, ConflictException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Performs GetStreamKey on multiple ARNs simultaneously.
 */export const batchGetStreamKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/BatchGetStreamKey", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.BatchGetStreamKey" }, BatchGetStreamKeyRequest, BatchGetStreamKeyResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new channel and an associated stream key to start streaming.
 */export const createChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/CreateChannel", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.CreateChannel" }, CreateChannelRequest, CreateChannelResponse, [AccessDeniedException, PendingVerification, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new playback restriction policy, for constraining playback by countries and/or
 * origins.
 */export const createPlaybackRestrictionPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/CreatePlaybackRestrictionPolicy", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.CreatePlaybackRestrictionPolicy" }, CreatePlaybackRestrictionPolicyRequest, CreatePlaybackRestrictionPolicyResponse, [AccessDeniedException, PendingVerification, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a stream key, used to initiate a stream, for the specified channel ARN.
 * 
 * 
 * Note that CreateChannel creates a stream key. If you subsequently use
 * CreateStreamKey on the same channel, it will fail because a stream key already exists and
 * there is a limit of 1 stream key per channel. To reset the stream key on a channel, use DeleteStreamKey and then CreateStreamKey.
 */export const createStreamKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/CreateStreamKey", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.CreateStreamKey" }, CreateStreamKeyRequest, CreateStreamKeyResponse, [AccessDeniedException, PendingVerification, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a specified playback authorization key pair and returns the `arn` and
 * `fingerprint`. The `privateKey` held by the caller can be used to
 * generate viewer authorization tokens, to grant viewers access to private channels. For more
 * information, see Setting Up Private Channels in the Amazon IVS User
 * Guide.
 */export const getPlaybackKeyPair = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetPlaybackKeyPair", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.GetPlaybackKeyPair" }, GetPlaybackKeyPairRequest, GetPlaybackKeyPairResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the recording configuration for the specified ARN.
 */export const getRecordingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetRecordingConfiguration", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.GetRecordingConfiguration" }, GetRecordingConfigurationRequest, GetRecordingConfigurationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the active (live) stream on a specified channel.
 */export const getStream = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetStream", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.GetStream" }, GetStreamRequest, GetStreamResponse, [AccessDeniedException, ChannelNotBroadcasting, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about all channels in your account, in the Amazon Web Services
 * region where the API request is processed. This list can be filtered to match a specified name
 * or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If
 * you try to use both filters, you will get an error (409 ConflictException).
 */export const listChannels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListChannels", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.ListChannels" }, ListChannelsRequest, ListChannelsResponse, [AccessDeniedException, ConflictException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about playback key pairs. For more information, see Setting Up Private
 * Channels in the *Amazon IVS User Guide*.
 */export const listPlaybackKeyPairs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListPlaybackKeyPairs", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.ListPlaybackKeyPairs" }, ListPlaybackKeyPairsRequest, ListPlaybackKeyPairsResponse, [AccessDeniedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about playback restriction policies.
 */export const listPlaybackRestrictionPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListPlaybackRestrictionPolicies", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.ListPlaybackRestrictionPolicies" }, ListPlaybackRestrictionPoliciesRequest, ListPlaybackRestrictionPoliciesResponse, [AccessDeniedException, ConflictException, PendingVerification, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about all recording configurations in your account, in the
 * Amazon Web Services region where the API request is processed.
 */export const listRecordingConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListRecordingConfigurations", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.ListRecordingConfigurations" }, ListRecordingConfigurationsRequest, ListRecordingConfigurationsResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about stream keys for the specified channel.
 */export const listStreamKeys = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListStreamKeys", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.ListStreamKeys" }, ListStreamKeysRequest, ListStreamKeysResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a summary of current and previous streams for a specified channel in your account, in
 * the AWS region where the API request is processed.
 */export const listStreamSessions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListStreamSessions", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.ListStreamSessions" }, ListStreamSessionsRequest, ListStreamSessionsResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Performs GetChannel on multiple ARNs simultaneously.
 */export const batchGetChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/BatchGetChannel", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.BatchGetChannel" }, BatchGetChannelRequest, BatchGetChannelResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Performs StartViewerSessionRevocation on multiple channel ARN and viewer
 * ID pairs simultaneously.
 */export const batchStartViewerSessionRevocation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/BatchStartViewerSessionRevocation", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.BatchStartViewerSessionRevocation" }, BatchStartViewerSessionRevocationRequest, BatchStartViewerSessionRevocationResponse, [AccessDeniedException, PendingVerification, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new recording configuration, used to enable recording to Amazon S3.
 * 
 * 
 * 
 * **Known issue:** In the us-east-1 region, if you use the
 * Amazon Web Services CLI to create a recording configuration, it returns success even if the
 * S3 bucket is in a different region. In this case, the `state` of the recording
 * configuration is `CREATE_FAILED` (instead of `ACTIVE`). (In other
 * regions, the CLI correctly returns failure if the bucket is in a different region.)
 * 
 * 
 * 
 * **Workaround:** Ensure that your S3 bucket is in the same
 * region as the recording configuration. If you create a recording configuration in a different
 * region as your S3 bucket, delete that recording configuration and create a new one with an S3
 * bucket from the correct region.
 */export const createRecordingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/CreateRecordingConfiguration", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.CreateRecordingConfiguration" }, CreateRecordingConfigurationRequest, CreateRecordingConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, PendingVerification, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about live streams in your account, in the Amazon Web Services
 * region where the API request is processed.
 */export const listStreams = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListStreams", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.ListStreams" }, ListStreamsRequest, ListStreamsResponse, [AccessDeniedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets metadata on a specified stream.
 */export const getStreamSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetStreamSession", method: "POST", sdkId: "ivs", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoService.GetStreamSession" }, GetStreamSessionRequest, GetStreamSessionResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

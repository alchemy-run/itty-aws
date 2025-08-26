import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ChimeSDKMediaPipelines extends AWSServiceClient {
  createMediaCapturePipeline(
    input: CreateMediaCapturePipelineRequest,
  ): Effect.Effect<
    CreateMediaCapturePipelineResponse,
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createMediaConcatenationPipeline(
    input: CreateMediaConcatenationPipelineRequest,
  ): Effect.Effect<
    CreateMediaConcatenationPipelineResponse,
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createMediaInsightsPipeline(
    input: CreateMediaInsightsPipelineRequest,
  ): Effect.Effect<
    CreateMediaInsightsPipelineResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createMediaInsightsPipelineConfiguration(
    input: CreateMediaInsightsPipelineConfigurationRequest,
  ): Effect.Effect<
    CreateMediaInsightsPipelineConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createMediaLiveConnectorPipeline(
    input: CreateMediaLiveConnectorPipelineRequest,
  ): Effect.Effect<
    CreateMediaLiveConnectorPipelineResponse,
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createMediaPipelineKinesisVideoStreamPool(
    input: CreateMediaPipelineKinesisVideoStreamPoolRequest,
  ): Effect.Effect<
    CreateMediaPipelineKinesisVideoStreamPoolResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createMediaStreamPipeline(
    input: CreateMediaStreamPipelineRequest,
  ): Effect.Effect<
    CreateMediaStreamPipelineResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteMediaCapturePipeline(
    input: DeleteMediaCapturePipelineRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteMediaInsightsPipelineConfiguration(
    input: DeleteMediaInsightsPipelineConfigurationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteMediaPipeline(
    input: DeleteMediaPipelineRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteMediaPipelineKinesisVideoStreamPool(
    input: DeleteMediaPipelineKinesisVideoStreamPoolRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getMediaCapturePipeline(
    input: GetMediaCapturePipelineRequest,
  ): Effect.Effect<
    GetMediaCapturePipelineResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getMediaInsightsPipelineConfiguration(
    input: GetMediaInsightsPipelineConfigurationRequest,
  ): Effect.Effect<
    GetMediaInsightsPipelineConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getMediaPipeline(
    input: GetMediaPipelineRequest,
  ): Effect.Effect<
    GetMediaPipelineResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getMediaPipelineKinesisVideoStreamPool(
    input: GetMediaPipelineKinesisVideoStreamPoolRequest,
  ): Effect.Effect<
    GetMediaPipelineKinesisVideoStreamPoolResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getSpeakerSearchTask(
    input: GetSpeakerSearchTaskRequest,
  ): Effect.Effect<
    GetSpeakerSearchTaskResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceToneAnalysisTask(
    input: GetVoiceToneAnalysisTaskRequest,
  ): Effect.Effect<
    GetVoiceToneAnalysisTaskResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listMediaCapturePipelines(
    input: ListMediaCapturePipelinesRequest,
  ): Effect.Effect<
    ListMediaCapturePipelinesResponse,
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listMediaInsightsPipelineConfigurations(
    input: ListMediaInsightsPipelineConfigurationsRequest,
  ): Effect.Effect<
    ListMediaInsightsPipelineConfigurationsResponse,
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listMediaPipelineKinesisVideoStreamPools(
    input: ListMediaPipelineKinesisVideoStreamPoolsRequest,
  ): Effect.Effect<
    ListMediaPipelineKinesisVideoStreamPoolsResponse,
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listMediaPipelines(
    input: ListMediaPipelinesRequest,
  ): Effect.Effect<
    ListMediaPipelinesResponse,
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  startSpeakerSearchTask(
    input: StartSpeakerSearchTaskRequest,
  ): Effect.Effect<
    StartSpeakerSearchTaskResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  startVoiceToneAnalysisTask(
    input: StartVoiceToneAnalysisTaskRequest,
  ): Effect.Effect<
    StartVoiceToneAnalysisTaskResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  stopSpeakerSearchTask(
    input: StopSpeakerSearchTaskRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  stopVoiceToneAnalysisTask(
    input: StopVoiceToneAnalysisTaskRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateMediaInsightsPipelineConfiguration(
    input: UpdateMediaInsightsPipelineConfigurationRequest,
  ): Effect.Effect<
    UpdateMediaInsightsPipelineConfigurationResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateMediaInsightsPipelineStatus(
    input: UpdateMediaInsightsPipelineStatusRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateMediaPipelineKinesisVideoStreamPool(
    input: UpdateMediaPipelineKinesisVideoStreamPoolRequest,
  ): Effect.Effect<
    UpdateMediaPipelineKinesisVideoStreamPoolResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
}

export declare class ChimeSdkMediaPipelines extends ChimeSDKMediaPipelines {}

export interface ActiveSpeakerOnlyConfiguration {
  ActiveSpeakerPosition?: ActiveSpeakerPosition;
}
export type ActiveSpeakerPosition =
  | "TopLeft"
  | "TopRight"
  | "BottomLeft"
  | "BottomRight";
export type AmazonResourceName = string;

export interface AmazonTranscribeCallAnalyticsProcessorConfiguration {
  LanguageCode: CallAnalyticsLanguageCode;
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: VocabularyFilterMethod;
  LanguageModelName?: string;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: PartialResultsStability;
  ContentIdentificationType?: ContentType;
  ContentRedactionType?: ContentType;
  PiiEntityTypes?: string;
  FilterPartialResults?: boolean;
  PostCallAnalyticsSettings?: PostCallAnalyticsSettings;
  CallAnalyticsStreamCategories?: Array<string>;
}
export interface AmazonTranscribeProcessorConfiguration {
  LanguageCode?: CallAnalyticsLanguageCode;
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: VocabularyFilterMethod;
  ShowSpeakerLabel?: boolean;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: PartialResultsStability;
  ContentIdentificationType?: ContentType;
  ContentRedactionType?: ContentType;
  PiiEntityTypes?: string;
  LanguageModelName?: string;
  FilterPartialResults?: boolean;
  IdentifyLanguage?: boolean;
  IdentifyMultipleLanguages?: boolean;
  LanguageOptions?: string;
  PreferredLanguage?: CallAnalyticsLanguageCode;
  VocabularyNames?: string;
  VocabularyFilterNames?: string;
}
export type Arn = string;

export interface ArtifactsConcatenationConfiguration {
  Audio: AudioConcatenationConfiguration;
  Video: VideoConcatenationConfiguration;
  Content: ContentConcatenationConfiguration;
  DataChannel: DataChannelConcatenationConfiguration;
  TranscriptionMessages: TranscriptionMessagesConcatenationConfiguration;
  MeetingEvents: MeetingEventsConcatenationConfiguration;
  CompositedVideo: CompositedVideoConcatenationConfiguration;
}
export type ArtifactsConcatenationState = "Enabled" | "Disabled";
export interface ArtifactsConfiguration {
  Audio: AudioArtifactsConfiguration;
  Video: VideoArtifactsConfiguration;
  Content: ContentArtifactsConfiguration;
  CompositedVideo?: CompositedVideoArtifactsConfiguration;
}
export type ArtifactsState = "Enabled" | "Disabled";
export type AttendeeIdList = Array<string>;
export type AudioArtifactsConcatenationState = "Enabled";
export interface AudioArtifactsConfiguration {
  MuxType: AudioMuxType;
}
export type AudioChannelsOption = "Stereo" | "Mono";
export interface AudioConcatenationConfiguration {
  State: AudioArtifactsConcatenationState;
}
export type AudioMuxType =
  | "AudioOnly"
  | "AudioWithActiveSpeakerVideo"
  | "AudioWithCompositedVideo";
export type AudioSampleRateOption = string;

export type AwsRegion = string;

export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type ChimeSdkMediaPipelinesBoolean = boolean;

export type BorderColor =
  | "Black"
  | "Blue"
  | "Red"
  | "Green"
  | "White"
  | "Yellow";
export type BorderThickness = number;

export type CallAnalyticsLanguageCode =
  | "en-US"
  | "en-GB"
  | "es-US"
  | "fr-CA"
  | "fr-FR"
  | "en-AU"
  | "it-IT"
  | "de-DE"
  | "pt-BR";
export type CanvasOrientation = "Landscape" | "Portrait";
export type CategoryName = string;

export type CategoryNameList = Array<string>;
export interface ChannelDefinition {
  ChannelId: number;
  ParticipantRole?: ParticipantRole;
}
export type ChannelDefinitions = Array<ChannelDefinition>;
export type ChannelId = number;

export interface ChimeSdkMeetingConcatenationConfiguration {
  ArtifactsConfiguration: ArtifactsConcatenationConfiguration;
}
export interface ChimeSdkMeetingConfiguration {
  SourceConfiguration?: SourceConfiguration;
  ArtifactsConfiguration?: ArtifactsConfiguration;
}
export interface ChimeSdkMeetingLiveConnectorConfiguration {
  Arn: string;
  MuxType: LiveConnectorMuxType;
  CompositedVideo?: CompositedVideoArtifactsConfiguration;
  SourceConfiguration?: SourceConfiguration;
}
export type ClientRequestToken = string;

export interface CompositedVideoArtifactsConfiguration {
  Layout?: LayoutOption;
  Resolution?: ResolutionOption;
  GridViewConfiguration: GridViewConfiguration;
}
export interface CompositedVideoConcatenationConfiguration {
  State: ArtifactsConcatenationState;
}
export interface ConcatenationSink {
  Type: ConcatenationSinkType;
  S3BucketSinkConfiguration: S3BucketSinkConfiguration;
}
export type ConcatenationSinkList = Array<ConcatenationSink>;
export type ConcatenationSinkType = "S3Bucket";
export interface ConcatenationSource {
  Type: ConcatenationSourceType;
  MediaCapturePipelineSourceConfiguration: MediaCapturePipelineSourceConfiguration;
}
export type ConcatenationSourceList = Array<ConcatenationSource>;
export type ConcatenationSourceType = "MediaCapturePipeline";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface ContentArtifactsConfiguration {
  State: ArtifactsState;
  MuxType?: ContentMuxType;
}
export interface ContentConcatenationConfiguration {
  State: ArtifactsConcatenationState;
}
export type ContentMuxType = "ContentOnly";
export type ContentRedactionOutput = "redacted" | "redacted_and_unredacted";
export type ContentShareLayoutOption =
  | "PresenterOnly"
  | "Horizontal"
  | "Vertical"
  | "ActiveSpeakerOnly";
export type ContentType = "PII";
export type CornerRadius = number;

export interface CreateMediaCapturePipelineRequest {
  SourceType: MediaPipelineSourceType;
  SourceArn: string;
  SinkType: MediaPipelineSinkType;
  SinkArn: string;
  ClientRequestToken?: string;
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
  SseAwsKeyManagementParams?: SseAwsKeyManagementParams;
  SinkIamRoleArn?: string;
  Tags?: Array<Tag>;
}
export interface CreateMediaCapturePipelineResponse {
  MediaCapturePipeline?: MediaCapturePipeline;
}
export interface CreateMediaConcatenationPipelineRequest {
  Sources: Array<ConcatenationSource>;
  Sinks: Array<ConcatenationSink>;
  ClientRequestToken?: string;
  Tags?: Array<Tag>;
}
export interface CreateMediaConcatenationPipelineResponse {
  MediaConcatenationPipeline?: MediaConcatenationPipeline;
}
export interface CreateMediaInsightsPipelineConfigurationRequest {
  MediaInsightsPipelineConfigurationName: string;
  ResourceAccessRoleArn: string;
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration;
  Elements: Array<MediaInsightsPipelineConfigurationElement>;
  Tags?: Array<Tag>;
  ClientRequestToken?: string;
}
export interface CreateMediaInsightsPipelineConfigurationResponse {
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration;
}
export interface CreateMediaInsightsPipelineRequest {
  MediaInsightsPipelineConfigurationArn: string;
  KinesisVideoStreamSourceRuntimeConfiguration?: KinesisVideoStreamSourceRuntimeConfiguration;
  MediaInsightsRuntimeMetadata?: Record<string, string>;
  KinesisVideoStreamRecordingSourceRuntimeConfiguration?: KinesisVideoStreamRecordingSourceRuntimeConfiguration;
  S3RecordingSinkRuntimeConfiguration?: S3RecordingSinkRuntimeConfiguration;
  Tags?: Array<Tag>;
  ClientRequestToken?: string;
}
export interface CreateMediaInsightsPipelineResponse {
  MediaInsightsPipeline: MediaInsightsPipeline;
}
export interface CreateMediaLiveConnectorPipelineRequest {
  Sources: Array<LiveConnectorSourceConfiguration>;
  Sinks: Array<LiveConnectorSinkConfiguration>;
  ClientRequestToken?: string;
  Tags?: Array<Tag>;
}
export interface CreateMediaLiveConnectorPipelineResponse {
  MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline;
}
export interface CreateMediaPipelineKinesisVideoStreamPoolRequest {
  StreamConfiguration: KinesisVideoStreamConfiguration;
  PoolName: string;
  ClientRequestToken?: string;
  Tags?: Array<Tag>;
}
export interface CreateMediaPipelineKinesisVideoStreamPoolResponse {
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration;
}
export interface CreateMediaStreamPipelineRequest {
  Sources: Array<MediaStreamSource>;
  Sinks: Array<MediaStreamSink>;
  ClientRequestToken?: string;
  Tags?: Array<Tag>;
}
export interface CreateMediaStreamPipelineResponse {
  MediaStreamPipeline?: MediaStreamPipeline;
}
export interface DataChannelConcatenationConfiguration {
  State: ArtifactsConcatenationState;
}
export type DataRetentionChangeInHours = number;

export type DataRetentionInHours = number;

export interface DeleteMediaCapturePipelineRequest {
  MediaPipelineId: string;
}
export interface DeleteMediaInsightsPipelineConfigurationRequest {
  Identifier: string;
}
export interface DeleteMediaPipelineKinesisVideoStreamPoolRequest {
  Identifier: string;
}
export interface DeleteMediaPipelineRequest {
  MediaPipelineId: string;
}
export type ErrorCode =
  | "BadRequest"
  | "Forbidden"
  | "NotFound"
  | "ResourceLimitExceeded"
  | "ServiceFailure"
  | "ServiceUnavailable"
  | "Throttling";
export type ExternalUserIdList = Array<string>;
export type ExternalUserIdType = string;

export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type FragmentNumberString = string;

export interface FragmentSelector {
  FragmentSelectorType: FragmentSelectorType;
  TimestampRange: TimestampRange;
}
export type FragmentSelectorType = "ProducerTimestamp" | "ServerTimestamp";
export interface GetMediaCapturePipelineRequest {
  MediaPipelineId: string;
}
export interface GetMediaCapturePipelineResponse {
  MediaCapturePipeline?: MediaCapturePipeline;
}
export interface GetMediaInsightsPipelineConfigurationRequest {
  Identifier: string;
}
export interface GetMediaInsightsPipelineConfigurationResponse {
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration;
}
export interface GetMediaPipelineKinesisVideoStreamPoolRequest {
  Identifier: string;
}
export interface GetMediaPipelineKinesisVideoStreamPoolResponse {
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration;
}
export interface GetMediaPipelineRequest {
  MediaPipelineId: string;
}
export interface GetMediaPipelineResponse {
  MediaPipeline?: MediaPipeline;
}
export interface GetSpeakerSearchTaskRequest {
  Identifier: string;
  SpeakerSearchTaskId: string;
}
export interface GetSpeakerSearchTaskResponse {
  SpeakerSearchTask?: SpeakerSearchTask;
}
export interface GetVoiceToneAnalysisTaskRequest {
  Identifier: string;
  VoiceToneAnalysisTaskId: string;
}
export interface GetVoiceToneAnalysisTaskResponse {
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}
export interface GridViewConfiguration {
  ContentShareLayout: ContentShareLayoutOption;
  PresenterOnlyConfiguration?: PresenterOnlyConfiguration;
  ActiveSpeakerOnlyConfiguration?: ActiveSpeakerOnlyConfiguration;
  HorizontalLayoutConfiguration?: HorizontalLayoutConfiguration;
  VerticalLayoutConfiguration?: VerticalLayoutConfiguration;
  VideoAttribute?: VideoAttribute;
  CanvasOrientation?: CanvasOrientation;
}
export type GuidString = string;

export type HighlightColor =
  | "Black"
  | "Blue"
  | "Red"
  | "Green"
  | "White"
  | "Yellow";
export interface HorizontalLayoutConfiguration {
  TileOrder?: TileOrder;
  TilePosition?: HorizontalTilePosition;
  TileCount?: number;
  TileAspectRatio?: string;
}
export type HorizontalTilePosition = "Top" | "Bottom";
export type Iso8601Timestamp = Date | string;

export interface IssueDetectionConfiguration {
  RuleName: string;
}
export type Keyword = string;

export interface KeywordMatchConfiguration {
  RuleName: string;
  Keywords: Array<string>;
  Negate?: boolean;
}
export type KeywordMatchWordList = Array<string>;
export interface KinesisDataStreamSinkConfiguration {
  InsightsTarget?: string;
}
export type KinesisVideoStreamArn = string;

export interface KinesisVideoStreamConfiguration {
  Region: string;
  DataRetentionInHours?: number;
}
export interface KinesisVideoStreamConfigurationUpdate {
  DataRetentionInHours?: number;
}
export interface KinesisVideoStreamPoolConfiguration {
  PoolArn?: string;
  PoolName?: string;
  PoolId?: string;
  PoolStatus?: KinesisVideoStreamPoolStatus;
  PoolSize?: number;
  StreamConfiguration?: KinesisVideoStreamConfiguration;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export type KinesisVideoStreamPoolId = string;

export type KinesisVideoStreamPoolName = string;

export type KinesisVideoStreamPoolSize = number;

export type KinesisVideoStreamPoolStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "FAILED";
export interface KinesisVideoStreamPoolSummary {
  PoolName?: string;
  PoolId?: string;
  PoolArn?: string;
}
export type KinesisVideoStreamPoolSummaryList =
  Array<KinesisVideoStreamPoolSummary>;
export interface KinesisVideoStreamRecordingSourceRuntimeConfiguration {
  Streams: Array<RecordingStreamConfiguration>;
  FragmentSelector: FragmentSelector;
}
export interface KinesisVideoStreamSourceRuntimeConfiguration {
  Streams: Array<StreamConfiguration>;
  MediaEncoding: MediaEncoding;
  MediaSampleRate: number;
}
export interface KinesisVideoStreamSourceTaskConfiguration {
  StreamArn: string;
  ChannelId: number;
  FragmentNumber?: string;
}
export interface LambdaFunctionSinkConfiguration {
  InsightsTarget?: string;
}
export type LanguageOptions = string;

export type LayoutOption = "GridView";
export interface ListMediaCapturePipelinesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMediaCapturePipelinesResponse {
  MediaCapturePipelines?: Array<MediaCapturePipelineSummary>;
  NextToken?: string;
}
export interface ListMediaInsightsPipelineConfigurationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMediaInsightsPipelineConfigurationsResponse {
  MediaInsightsPipelineConfigurations?: Array<MediaInsightsPipelineConfigurationSummary>;
  NextToken?: string;
}
export interface ListMediaPipelineKinesisVideoStreamPoolsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMediaPipelineKinesisVideoStreamPoolsResponse {
  KinesisVideoStreamPools?: Array<KinesisVideoStreamPoolSummary>;
  NextToken?: string;
}
export interface ListMediaPipelinesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMediaPipelinesResponse {
  MediaPipelines?: Array<MediaPipelineSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type LiveConnectorMuxType =
  | "AudioWithCompositedVideo"
  | "AudioWithActiveSpeakerVideo";
export interface LiveConnectorRTMPConfiguration {
  Url: string;
  AudioChannels?: AudioChannelsOption;
  AudioSampleRate?: string;
}
export interface LiveConnectorSinkConfiguration {
  SinkType: LiveConnectorSinkType;
  RTMPConfiguration: LiveConnectorRTMPConfiguration;
}
export type LiveConnectorSinkList = Array<LiveConnectorSinkConfiguration>;
export type LiveConnectorSinkType = "RTMP";
export interface LiveConnectorSourceConfiguration {
  SourceType: LiveConnectorSourceType;
  ChimeSdkMeetingLiveConnectorConfiguration: ChimeSdkMeetingLiveConnectorConfiguration;
}
export type LiveConnectorSourceList = Array<LiveConnectorSourceConfiguration>;
export type LiveConnectorSourceType = "ChimeSdkMeeting";
export interface MediaCapturePipeline {
  MediaPipelineId?: string;
  MediaPipelineArn?: string;
  SourceType?: MediaPipelineSourceType;
  SourceArn?: string;
  Status?: MediaPipelineStatus;
  SinkType?: MediaPipelineSinkType;
  SinkArn?: string;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
  SseAwsKeyManagementParams?: SseAwsKeyManagementParams;
  SinkIamRoleArn?: string;
}
export interface MediaCapturePipelineSourceConfiguration {
  MediaPipelineArn: string;
  ChimeSdkMeetingConfiguration: ChimeSdkMeetingConcatenationConfiguration;
}
export interface MediaCapturePipelineSummary {
  MediaPipelineId?: string;
  MediaPipelineArn?: string;
}
export type MediaCapturePipelineSummaryList =
  Array<MediaCapturePipelineSummary>;
export interface MediaConcatenationPipeline {
  MediaPipelineId?: string;
  MediaPipelineArn?: string;
  Sources?: Array<ConcatenationSource>;
  Sinks?: Array<ConcatenationSink>;
  Status?: MediaPipelineStatus;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export type MediaEncoding = "pcm";
export interface MediaInsightsPipeline {
  MediaPipelineId?: string;
  MediaPipelineArn?: string;
  MediaInsightsPipelineConfigurationArn?: string;
  Status?: MediaPipelineStatus;
  KinesisVideoStreamSourceRuntimeConfiguration?: KinesisVideoStreamSourceRuntimeConfiguration;
  MediaInsightsRuntimeMetadata?: Record<string, string>;
  KinesisVideoStreamRecordingSourceRuntimeConfiguration?: KinesisVideoStreamRecordingSourceRuntimeConfiguration;
  S3RecordingSinkRuntimeConfiguration?: S3RecordingSinkRuntimeConfiguration;
  CreatedTimestamp?: Date | string;
  ElementStatuses?: Array<MediaInsightsPipelineElementStatus>;
}
export interface MediaInsightsPipelineConfiguration {
  MediaInsightsPipelineConfigurationName?: string;
  MediaInsightsPipelineConfigurationArn?: string;
  ResourceAccessRoleArn?: string;
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration;
  Elements?: Array<MediaInsightsPipelineConfigurationElement>;
  MediaInsightsPipelineConfigurationId?: string;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export interface MediaInsightsPipelineConfigurationElement {
  Type: MediaInsightsPipelineConfigurationElementType;
  AmazonTranscribeCallAnalyticsProcessorConfiguration?: AmazonTranscribeCallAnalyticsProcessorConfiguration;
  AmazonTranscribeProcessorConfiguration?: AmazonTranscribeProcessorConfiguration;
  KinesisDataStreamSinkConfiguration?: KinesisDataStreamSinkConfiguration;
  S3RecordingSinkConfiguration?: S3RecordingSinkConfiguration;
  VoiceAnalyticsProcessorConfiguration?: VoiceAnalyticsProcessorConfiguration;
  LambdaFunctionSinkConfiguration?: LambdaFunctionSinkConfiguration;
  SqsQueueSinkConfiguration?: SqsQueueSinkConfiguration;
  SnsTopicSinkConfiguration?: SnsTopicSinkConfiguration;
  VoiceEnhancementSinkConfiguration?: VoiceEnhancementSinkConfiguration;
}
export type MediaInsightsPipelineConfigurationElements =
  Array<MediaInsightsPipelineConfigurationElement>;
export type MediaInsightsPipelineConfigurationElementType =
  | "AmazonTranscribeCallAnalyticsProcessor"
  | "VoiceAnalyticsProcessor"
  | "AmazonTranscribeProcessor"
  | "KinesisDataStreamSink"
  | "LambdaFunctionSink"
  | "SqsQueueSink"
  | "SnsTopicSink"
  | "S3RecordingSink"
  | "VoiceEnhancementSink";
export type MediaInsightsPipelineConfigurationNameString = string;

export interface MediaInsightsPipelineConfigurationSummary {
  MediaInsightsPipelineConfigurationName?: string;
  MediaInsightsPipelineConfigurationId?: string;
  MediaInsightsPipelineConfigurationArn?: string;
}
export type MediaInsightsPipelineConfigurationSummaryList =
  Array<MediaInsightsPipelineConfigurationSummary>;
export interface MediaInsightsPipelineElementStatus {
  Type?: MediaInsightsPipelineConfigurationElementType;
  Status?: MediaPipelineElementStatus;
}
export type MediaInsightsPipelineElementStatuses =
  Array<MediaInsightsPipelineElementStatus>;
export type MediaInsightsRuntimeMetadata = Record<string, string>;
export interface MediaLiveConnectorPipeline {
  Sources?: Array<LiveConnectorSourceConfiguration>;
  Sinks?: Array<LiveConnectorSinkConfiguration>;
  MediaPipelineId?: string;
  MediaPipelineArn?: string;
  Status?: MediaPipelineStatus;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export interface MediaPipeline {
  MediaCapturePipeline?: MediaCapturePipeline;
  MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline;
  MediaConcatenationPipeline?: MediaConcatenationPipeline;
  MediaInsightsPipeline?: MediaInsightsPipeline;
  MediaStreamPipeline?: MediaStreamPipeline;
}
export type MediaPipelineElementStatus =
  | "NotStarted"
  | "NotSupported"
  | "Initializing"
  | "InProgress"
  | "Failed"
  | "Stopping"
  | "Stopped"
  | "Paused";
export type MediaPipelineList = Array<MediaPipelineSummary>;
export type MediaPipelineSinkType = "S3Bucket";
export type MediaPipelineSourceType = "ChimeSdkMeeting";
export type MediaPipelineStatus =
  | "Initializing"
  | "InProgress"
  | "Failed"
  | "Stopping"
  | "Stopped"
  | "Paused"
  | "NotStarted";
export type MediaPipelineStatusUpdate = "Pause" | "Resume";
export interface MediaPipelineSummary {
  MediaPipelineId?: string;
  MediaPipelineArn?: string;
}
export type MediaPipelineTaskStatus =
  | "NotStarted"
  | "Initializing"
  | "InProgress"
  | "Failed"
  | "Stopping"
  | "Stopped";
export type MediaSampleRateHertz = number;

export interface MediaStreamPipeline {
  MediaPipelineId?: string;
  MediaPipelineArn?: string;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  Status?: MediaPipelineStatus;
  Sources?: Array<MediaStreamSource>;
  Sinks?: Array<MediaStreamSink>;
}
export type MediaStreamPipelineSinkType = "KinesisVideoStreamPool";
export interface MediaStreamSink {
  SinkArn: string;
  SinkType: MediaStreamPipelineSinkType;
  ReservedStreamCapacity: number;
  MediaStreamType: MediaStreamType;
}
export type MediaStreamSinkList = Array<MediaStreamSink>;
export interface MediaStreamSource {
  SourceType: MediaPipelineSourceType;
  SourceArn: string;
}
export type MediaStreamSourceList = Array<MediaStreamSource>;
export type MediaStreamType = "MixedAudio" | "IndividualAudio";
export interface MeetingEventsConcatenationConfiguration {
  State: ArtifactsConcatenationState;
}
export type ModelName = string;

export type NonEmptyString = string;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type NumberOfChannels = number;

export type PartialResultsStability = "high" | "medium" | "low";
export type ParticipantRole = "AGENT" | "CUSTOMER";
export type PiiEntityTypes = string;

export interface PostCallAnalyticsSettings {
  OutputLocation: string;
  DataAccessRoleArn: string;
  ContentRedactionOutput?: ContentRedactionOutput;
  OutputEncryptionKMSKeyId?: string;
}
export interface PresenterOnlyConfiguration {
  PresenterPosition?: PresenterPosition;
}
export type PresenterPosition =
  | "TopLeft"
  | "TopRight"
  | "BottomLeft"
  | "BottomRight";
export interface RealTimeAlertConfiguration {
  Disabled?: boolean;
  Rules?: Array<RealTimeAlertRule>;
}
export interface RealTimeAlertRule {
  Type: RealTimeAlertRuleType;
  KeywordMatchConfiguration?: KeywordMatchConfiguration;
  SentimentConfiguration?: SentimentConfiguration;
  IssueDetectionConfiguration?: IssueDetectionConfiguration;
}
export type RealTimeAlertRuleList = Array<RealTimeAlertRule>;
export type RealTimeAlertRuleType =
  | "KeywordMatch"
  | "Sentiment"
  | "IssueDetection";
export type RecordingFileFormat = "Wav" | "Opus";
export interface RecordingStreamConfiguration {
  StreamArn?: string;
}
export type RecordingStreamList = Array<RecordingStreamConfiguration>;
export type ReservedStreamCapacity = number;

export type ResolutionOption = "HD" | "FHD";
export declare class ResourceLimitExceededException extends EffectData.TaggedError(
  "ResourceLimitExceededException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type ResultMax = number;

export type RuleName = string;

export interface S3BucketSinkConfiguration {
  Destination: string;
}
export interface S3RecordingSinkConfiguration {
  Destination?: string;
  RecordingFileFormat?: RecordingFileFormat;
}
export interface S3RecordingSinkRuntimeConfiguration {
  Destination: string;
  RecordingFileFormat: RecordingFileFormat;
}
export interface SelectedVideoStreams {
  AttendeeIds?: Array<string>;
  ExternalUserIds?: Array<string>;
}
export type SensitiveString = string;

export interface SentimentConfiguration {
  RuleName: string;
  SentimentType: SentimentType;
  TimePeriod: number;
}
export type SentimentTimePeriodInSeconds = number;

export type SentimentType = "NEGATIVE";
export declare class ServiceFailureException extends EffectData.TaggedError(
  "ServiceFailureException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface SnsTopicSinkConfiguration {
  InsightsTarget?: string;
}
export interface SourceConfiguration {
  SelectedVideoStreams?: SelectedVideoStreams;
}
export interface SpeakerSearchTask {
  SpeakerSearchTaskId?: string;
  SpeakerSearchTaskStatus?: MediaPipelineTaskStatus;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export interface SqsQueueSinkConfiguration {
  InsightsTarget?: string;
}
export interface SseAwsKeyManagementParams {
  AwsKmsKeyId: string;
  AwsKmsEncryptionContext?: string;
}
export interface StartSpeakerSearchTaskRequest {
  Identifier: string;
  VoiceProfileDomainArn: string;
  KinesisVideoStreamSourceTaskConfiguration?: KinesisVideoStreamSourceTaskConfiguration;
  ClientRequestToken?: string;
}
export interface StartSpeakerSearchTaskResponse {
  SpeakerSearchTask?: SpeakerSearchTask;
}
export interface StartVoiceToneAnalysisTaskRequest {
  Identifier: string;
  LanguageCode: VoiceAnalyticsLanguageCode;
  KinesisVideoStreamSourceTaskConfiguration?: KinesisVideoStreamSourceTaskConfiguration;
  ClientRequestToken?: string;
}
export interface StartVoiceToneAnalysisTaskResponse {
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}
export interface StopSpeakerSearchTaskRequest {
  Identifier: string;
  SpeakerSearchTaskId: string;
}
export interface StopVoiceToneAnalysisTaskRequest {
  Identifier: string;
  VoiceToneAnalysisTaskId: string;
}
export interface StreamChannelDefinition {
  NumberOfChannels: number;
  ChannelDefinitions?: Array<ChannelDefinition>;
}
export interface StreamConfiguration {
  StreamArn: string;
  FragmentNumber?: string;
  StreamChannelDefinition: StreamChannelDefinition;
}
export type Streams = Array<StreamConfiguration>;
export type ChimeSdkMediaPipelinesString = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottledClientException extends EffectData.TaggedError(
  "ThrottledClientException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type TileAspectRatio = string;

export type TileCount = number;

export type TileOrder = "JoinSequence" | "SpeakerSequence";
export type Timestamp = Date | string;

export interface TimestampRange {
  StartTimestamp: Date | string;
  EndTimestamp: Date | string;
}
export interface TranscriptionMessagesConcatenationConfiguration {
  State: ArtifactsConcatenationState;
}
export declare class UnauthorizedClientException extends EffectData.TaggedError(
  "UnauthorizedClientException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateMediaInsightsPipelineConfigurationRequest {
  Identifier: string;
  ResourceAccessRoleArn: string;
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration;
  Elements: Array<MediaInsightsPipelineConfigurationElement>;
}
export interface UpdateMediaInsightsPipelineConfigurationResponse {
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration;
}
export interface UpdateMediaInsightsPipelineStatusRequest {
  Identifier: string;
  UpdateStatus: MediaPipelineStatusUpdate;
}
export interface UpdateMediaPipelineKinesisVideoStreamPoolRequest {
  Identifier: string;
  StreamConfiguration?: KinesisVideoStreamConfigurationUpdate;
}
export interface UpdateMediaPipelineKinesisVideoStreamPoolResponse {
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration;
}
export interface VerticalLayoutConfiguration {
  TileOrder?: TileOrder;
  TilePosition?: VerticalTilePosition;
  TileCount?: number;
  TileAspectRatio?: string;
}
export type VerticalTilePosition = "Left" | "Right";
export interface VideoArtifactsConfiguration {
  State: ArtifactsState;
  MuxType?: VideoMuxType;
}
export interface VideoAttribute {
  CornerRadius?: number;
  BorderColor?: BorderColor;
  HighlightColor?: HighlightColor;
  BorderThickness?: number;
}
export interface VideoConcatenationConfiguration {
  State: ArtifactsConcatenationState;
}
export type VideoMuxType = "VideoOnly";
export type VocabularyFilterMethod = "remove" | "mask" | "tag";
export type VocabularyFilterName = string;

export type VocabularyFilterNames = string;

export type VocabularyName = string;

export type VocabularyNames = string;

export type VoiceAnalyticsConfigurationStatus = "Enabled" | "Disabled";
export type VoiceAnalyticsLanguageCode = "en-US";
export interface VoiceAnalyticsProcessorConfiguration {
  SpeakerSearchStatus?: VoiceAnalyticsConfigurationStatus;
  VoiceToneAnalysisStatus?: VoiceAnalyticsConfigurationStatus;
}
export interface VoiceEnhancementSinkConfiguration {
  Disabled?: boolean;
}
export interface VoiceToneAnalysisTask {
  VoiceToneAnalysisTaskId?: string;
  VoiceToneAnalysisTaskStatus?: MediaPipelineTaskStatus;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export declare namespace CreateMediaCapturePipeline {
  export type Input = CreateMediaCapturePipelineRequest;
  export type Output = CreateMediaCapturePipelineResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateMediaConcatenationPipeline {
  export type Input = CreateMediaConcatenationPipelineRequest;
  export type Output = CreateMediaConcatenationPipelineResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateMediaInsightsPipeline {
  export type Input = CreateMediaInsightsPipelineRequest;
  export type Output = CreateMediaInsightsPipelineResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateMediaInsightsPipelineConfiguration {
  export type Input = CreateMediaInsightsPipelineConfigurationRequest;
  export type Output = CreateMediaInsightsPipelineConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateMediaLiveConnectorPipeline {
  export type Input = CreateMediaLiveConnectorPipelineRequest;
  export type Output = CreateMediaLiveConnectorPipelineResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateMediaPipelineKinesisVideoStreamPool {
  export type Input = CreateMediaPipelineKinesisVideoStreamPoolRequest;
  export type Output = CreateMediaPipelineKinesisVideoStreamPoolResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateMediaStreamPipeline {
  export type Input = CreateMediaStreamPipelineRequest;
  export type Output = CreateMediaStreamPipelineResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteMediaCapturePipeline {
  export type Input = DeleteMediaCapturePipelineRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteMediaInsightsPipelineConfiguration {
  export type Input = DeleteMediaInsightsPipelineConfigurationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteMediaPipeline {
  export type Input = DeleteMediaPipelineRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteMediaPipelineKinesisVideoStreamPool {
  export type Input = DeleteMediaPipelineKinesisVideoStreamPoolRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetMediaCapturePipeline {
  export type Input = GetMediaCapturePipelineRequest;
  export type Output = GetMediaCapturePipelineResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetMediaInsightsPipelineConfiguration {
  export type Input = GetMediaInsightsPipelineConfigurationRequest;
  export type Output = GetMediaInsightsPipelineConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetMediaPipeline {
  export type Input = GetMediaPipelineRequest;
  export type Output = GetMediaPipelineResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetMediaPipelineKinesisVideoStreamPool {
  export type Input = GetMediaPipelineKinesisVideoStreamPoolRequest;
  export type Output = GetMediaPipelineKinesisVideoStreamPoolResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetSpeakerSearchTask {
  export type Input = GetSpeakerSearchTaskRequest;
  export type Output = GetSpeakerSearchTaskResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceToneAnalysisTask {
  export type Input = GetVoiceToneAnalysisTaskRequest;
  export type Output = GetVoiceToneAnalysisTaskResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListMediaCapturePipelines {
  export type Input = ListMediaCapturePipelinesRequest;
  export type Output = ListMediaCapturePipelinesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListMediaInsightsPipelineConfigurations {
  export type Input = ListMediaInsightsPipelineConfigurationsRequest;
  export type Output = ListMediaInsightsPipelineConfigurationsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListMediaPipelineKinesisVideoStreamPools {
  export type Input = ListMediaPipelineKinesisVideoStreamPoolsRequest;
  export type Output = ListMediaPipelineKinesisVideoStreamPoolsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListMediaPipelines {
  export type Input = ListMediaPipelinesRequest;
  export type Output = ListMediaPipelinesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace StartSpeakerSearchTask {
  export type Input = StartSpeakerSearchTaskRequest;
  export type Output = StartSpeakerSearchTaskResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace StartVoiceToneAnalysisTask {
  export type Input = StartVoiceToneAnalysisTaskRequest;
  export type Output = StartVoiceToneAnalysisTaskResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace StopSpeakerSearchTask {
  export type Input = StopSpeakerSearchTaskRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace StopVoiceToneAnalysisTask {
  export type Input = StopVoiceToneAnalysisTaskRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateMediaInsightsPipelineConfiguration {
  export type Input = UpdateMediaInsightsPipelineConfigurationRequest;
  export type Output = UpdateMediaInsightsPipelineConfigurationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateMediaInsightsPipelineStatus {
  export type Input = UpdateMediaInsightsPipelineStatusRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateMediaPipelineKinesisVideoStreamPool {
  export type Input = UpdateMediaPipelineKinesisVideoStreamPoolRequest;
  export type Output = UpdateMediaPipelineKinesisVideoStreamPoolResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

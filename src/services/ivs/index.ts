import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ivs extends AWSServiceClient {
  batchGetChannel(
    input: BatchGetChannelRequest,
  ): Effect.Effect<BatchGetChannelResponse, CommonAwsError>;
  batchGetStreamKey(
    input: BatchGetStreamKeyRequest,
  ): Effect.Effect<BatchGetStreamKeyResponse, CommonAwsError>;
  batchStartViewerSessionRevocation(
    input: BatchStartViewerSessionRevocationRequest,
  ): Effect.Effect<
    BatchStartViewerSessionRevocationResponse,
    | AccessDeniedException
    | PendingVerification
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createChannel(
    input: CreateChannelRequest,
  ): Effect.Effect<
    CreateChannelResponse,
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createPlaybackRestrictionPolicy(
    input: CreatePlaybackRestrictionPolicyRequest,
  ): Effect.Effect<
    CreatePlaybackRestrictionPolicyResponse,
    | AccessDeniedException
    | PendingVerification
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRecordingConfiguration(
    input: CreateRecordingConfigurationRequest,
  ): Effect.Effect<
    CreateRecordingConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | PendingVerification
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createStreamKey(
    input: CreateStreamKeyRequest,
  ): Effect.Effect<
    CreateStreamKeyResponse,
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteChannel(
    input: DeleteChannelRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deletePlaybackKeyPair(
    input: DeletePlaybackKeyPairRequest,
  ): Effect.Effect<
    DeletePlaybackKeyPairResponse,
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deletePlaybackRestrictionPolicy(
    input: DeletePlaybackRestrictionPolicyRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteRecordingConfiguration(
    input: DeleteRecordingConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteStreamKey(
    input: DeleteStreamKeyRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getChannel(
    input: GetChannelRequest,
  ): Effect.Effect<
    GetChannelResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getPlaybackKeyPair(
    input: GetPlaybackKeyPairRequest,
  ): Effect.Effect<
    GetPlaybackKeyPairResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getPlaybackRestrictionPolicy(
    input: GetPlaybackRestrictionPolicyRequest,
  ): Effect.Effect<
    GetPlaybackRestrictionPolicyResponse,
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getRecordingConfiguration(
    input: GetRecordingConfigurationRequest,
  ): Effect.Effect<
    GetRecordingConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getStream(
    input: GetStreamRequest,
  ): Effect.Effect<
    GetStreamResponse,
    | AccessDeniedException
    | ChannelNotBroadcasting
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getStreamKey(
    input: GetStreamKeyRequest,
  ): Effect.Effect<
    GetStreamKeyResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getStreamSession(
    input: GetStreamSessionRequest,
  ): Effect.Effect<
    GetStreamSessionResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  importPlaybackKeyPair(
    input: ImportPlaybackKeyPairRequest,
  ): Effect.Effect<
    ImportPlaybackKeyPairResponse,
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  listChannels(
    input: ListChannelsRequest,
  ): Effect.Effect<
    ListChannelsResponse,
    | AccessDeniedException
    | ConflictException
    | ValidationException
    | CommonAwsError
  >;
  listPlaybackKeyPairs(
    input: ListPlaybackKeyPairsRequest,
  ): Effect.Effect<
    ListPlaybackKeyPairsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listPlaybackRestrictionPolicies(
    input: ListPlaybackRestrictionPoliciesRequest,
  ): Effect.Effect<
    ListPlaybackRestrictionPoliciesResponse,
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ValidationException
    | CommonAwsError
  >;
  listRecordingConfigurations(
    input: ListRecordingConfigurationsRequest,
  ): Effect.Effect<
    ListRecordingConfigurationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listStreamKeys(
    input: ListStreamKeysRequest,
  ): Effect.Effect<
    ListStreamKeysResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listStreams(
    input: ListStreamsRequest,
  ): Effect.Effect<
    ListStreamsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listStreamSessions(
    input: ListStreamSessionsRequest,
  ): Effect.Effect<
    ListStreamSessionsResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putMetadata(
    input: PutMetadataRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ChannelNotBroadcasting
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startViewerSessionRevocation(
    input: StartViewerSessionRevocationRequest,
  ): Effect.Effect<
    StartViewerSessionRevocationResponse,
    | AccessDeniedException
    | InternalServerException
    | PendingVerification
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopStream(
    input: StopStreamRequest,
  ): Effect.Effect<
    StopStreamResponse,
    | AccessDeniedException
    | ChannelNotBroadcasting
    | ResourceNotFoundException
    | StreamUnavailable
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateChannel(
    input: UpdateChannelRequest,
  ): Effect.Effect<
    UpdateChannelResponse,
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updatePlaybackRestrictionPolicy(
    input: UpdatePlaybackRestrictionPolicyRequest,
  ): Effect.Effect<
    UpdatePlaybackRestrictionPolicyResponse,
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Ivs extends ivs {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly exceptionMessage?: string;
}> {}
export interface AudioConfiguration {
  codec?: string;
  targetBitrate?: number;
  sampleRate?: number;
  channels?: number;
  track?: string;
}
export type AudioConfigurationList = Array<AudioConfiguration>;
export interface BatchError {
  arn?: string;
  code?: string;
  message?: string;
}
export type BatchErrors = Array<BatchError>;
export interface BatchGetChannelRequest {
  arns: Array<string>;
}
export interface BatchGetChannelResponse {
  channels?: Array<Channel>;
  errors?: Array<BatchError>;
}
export interface BatchGetStreamKeyRequest {
  arns: Array<string>;
}
export interface BatchGetStreamKeyResponse {
  streamKeys?: Array<StreamKey>;
  errors?: Array<BatchError>;
}
export interface BatchStartViewerSessionRevocationError {
  channelArn: string;
  viewerId: string;
  code?: string;
  message?: string;
}
export type BatchStartViewerSessionRevocationErrors =
  Array<BatchStartViewerSessionRevocationError>;
export interface BatchStartViewerSessionRevocationRequest {
  viewerSessions: Array<BatchStartViewerSessionRevocationViewerSession>;
}
export interface BatchStartViewerSessionRevocationResponse {
  errors?: Array<BatchStartViewerSessionRevocationError>;
}
export interface BatchStartViewerSessionRevocationViewerSession {
  channelArn: string;
  viewerId: string;
  viewerSessionVersionsLessThanOrEqualTo?: number;
}
export type BatchStartViewerSessionRevocationViewerSessionList =
  Array<BatchStartViewerSessionRevocationViewerSession>;
export type IvsBoolean = boolean;

export interface Channel {
  arn?: string;
  name?: string;
  latencyMode?: string;
  type?: ChannelType;
  recordingConfigurationArn?: string;
  ingestEndpoint?: string;
  playbackUrl?: string;
  authorized?: boolean;
  tags?: Record<string, string>;
  insecureIngest?: boolean;
  preset?: TranscodePreset;
  srt?: Srt;
  playbackRestrictionPolicyArn?: string;
  multitrackInputConfiguration?: MultitrackInputConfiguration;
  containerFormat?: string;
}
export type ChannelArn = string;

export type ChannelArnList = Array<string>;
export type ChannelLatencyMode = string;

export type ChannelList = Array<ChannelSummary>;
export type ChannelName = string;

export declare class ChannelNotBroadcasting extends EffectData.TaggedError(
  "ChannelNotBroadcasting",
)<{
  readonly exceptionMessage?: string;
}> {}
export type ChannelPlaybackRestrictionPolicyArn = string;

export type ChannelRecordingConfigurationArn = string;

export type Channels = Array<Channel>;
export interface ChannelSummary {
  arn?: string;
  name?: string;
  latencyMode?: string;
  authorized?: boolean;
  recordingConfigurationArn?: string;
  tags?: Record<string, string>;
  insecureIngest?: boolean;
  type?: ChannelType;
  preset?: TranscodePreset;
  playbackRestrictionPolicyArn?: string;
}
export type ChannelType = "BASIC" | "STANDARD" | "ADVANCED_SD" | "ADVANCED_HD";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly exceptionMessage?: string;
}> {}
export type ContainerFormat = string;

export interface CreateChannelRequest {
  name?: string;
  latencyMode?: string;
  type?: ChannelType;
  authorized?: boolean;
  recordingConfigurationArn?: string;
  tags?: Record<string, string>;
  insecureIngest?: boolean;
  preset?: TranscodePreset;
  playbackRestrictionPolicyArn?: string;
  multitrackInputConfiguration?: MultitrackInputConfiguration;
  containerFormat?: string;
}
export interface CreateChannelResponse {
  channel?: Channel;
  streamKey?: StreamKey;
}
export interface CreatePlaybackRestrictionPolicyRequest {
  allowedCountries?: Array<string>;
  allowedOrigins?: Array<string>;
  enableStrictOriginEnforcement?: boolean;
  name?: string;
  tags?: Record<string, string>;
}
export interface CreatePlaybackRestrictionPolicyResponse {
  playbackRestrictionPolicy?: PlaybackRestrictionPolicy;
}
export interface CreateRecordingConfigurationRequest {
  name?: string;
  destinationConfiguration: DestinationConfiguration;
  tags?: Record<string, string>;
  thumbnailConfiguration?: ThumbnailConfiguration;
  recordingReconnectWindowSeconds?: number;
  renditionConfiguration?: RenditionConfiguration;
}
export interface CreateRecordingConfigurationResponse {
  recordingConfiguration?: RecordingConfiguration;
}
export interface CreateStreamKeyRequest {
  channelArn: string;
  tags?: Record<string, string>;
}
export interface CreateStreamKeyResponse {
  streamKey?: StreamKey;
}
export interface DeleteChannelRequest {
  arn: string;
}
export interface DeletePlaybackKeyPairRequest {
  arn: string;
}
export interface DeletePlaybackKeyPairResponse {}
export interface DeletePlaybackRestrictionPolicyRequest {
  arn: string;
}
export interface DeleteRecordingConfigurationRequest {
  arn: string;
}
export interface DeleteStreamKeyRequest {
  arn: string;
}
export interface DestinationConfiguration {
  s3?: S3DestinationConfiguration;
}
export type errorCode = string;

export type errorMessage = string;

export interface GetChannelRequest {
  arn: string;
}
export interface GetChannelResponse {
  channel?: Channel;
}
export interface GetPlaybackKeyPairRequest {
  arn: string;
}
export interface GetPlaybackKeyPairResponse {
  keyPair?: PlaybackKeyPair;
}
export interface GetPlaybackRestrictionPolicyRequest {
  arn: string;
}
export interface GetPlaybackRestrictionPolicyResponse {
  playbackRestrictionPolicy?: PlaybackRestrictionPolicy;
}
export interface GetRecordingConfigurationRequest {
  arn: string;
}
export interface GetRecordingConfigurationResponse {
  recordingConfiguration?: RecordingConfiguration;
}
export interface GetStreamKeyRequest {
  arn: string;
}
export interface GetStreamKeyResponse {
  streamKey?: StreamKey;
}
export interface GetStreamRequest {
  channelArn: string;
}
export interface GetStreamResponse {
  stream?: Stream;
}
export interface GetStreamSessionRequest {
  channelArn: string;
  streamId?: string;
}
export interface GetStreamSessionResponse {
  streamSession?: StreamSession;
}
export interface ImportPlaybackKeyPairRequest {
  publicKeyMaterial: string;
  name?: string;
  tags?: Record<string, string>;
}
export interface ImportPlaybackKeyPairResponse {
  keyPair?: PlaybackKeyPair;
}
export interface IngestConfiguration {
  video?: VideoConfiguration;
  audio?: AudioConfiguration;
}
export interface IngestConfigurations {
  videoConfigurations: Array<VideoConfiguration>;
  audioConfigurations: Array<AudioConfiguration>;
}
export type IngestEndpoint = string;

export type InsecureIngest = boolean;

export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly exceptionMessage?: string;
}> {}
export type IsAuthorized = boolean;

export type IsMultitrackInputEnabled = boolean;

export interface ListChannelsRequest {
  filterByName?: string;
  filterByRecordingConfigurationArn?: string;
  filterByPlaybackRestrictionPolicyArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListChannelsResponse {
  channels: Array<ChannelSummary>;
  nextToken?: string;
}
export interface ListPlaybackKeyPairsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListPlaybackKeyPairsResponse {
  keyPairs: Array<PlaybackKeyPairSummary>;
  nextToken?: string;
}
export interface ListPlaybackRestrictionPoliciesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListPlaybackRestrictionPoliciesResponse {
  playbackRestrictionPolicies: Array<PlaybackRestrictionPolicySummary>;
  nextToken?: string;
}
export interface ListRecordingConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListRecordingConfigurationsResponse {
  recordingConfigurations: Array<RecordingConfigurationSummary>;
  nextToken?: string;
}
export interface ListStreamKeysRequest {
  channelArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListStreamKeysResponse {
  streamKeys: Array<StreamKeySummary>;
  nextToken?: string;
}
export interface ListStreamSessionsRequest {
  channelArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListStreamSessionsResponse {
  streamSessions: Array<StreamSessionSummary>;
  nextToken?: string;
}
export interface ListStreamsRequest {
  filterBy?: StreamFilters;
  nextToken?: string;
  maxResults?: number;
}
export interface ListStreamsResponse {
  streams: Array<StreamSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: Record<string, string>;
}
export type MaxChannelResults = number;

export type MaxPlaybackKeyPairResults = number;

export type MaxPlaybackRestrictionPolicyResults = number;

export type MaxRecordingConfigurationResults = number;

export type MaxStreamKeyResults = number;

export type MaxStreamResults = number;

export interface MultitrackInputConfiguration {
  enabled?: boolean;
  policy?: MultitrackPolicy;
  maximumResolution?: MultitrackMaximumResolution;
}
export type MultitrackMaximumResolution = "SD" | "HD" | "FULL_HD";
export type MultitrackPolicy = "ALLOW" | "REQUIRE";
export type PaginationToken = string;

export declare class PendingVerification extends EffectData.TaggedError(
  "PendingVerification",
)<{
  readonly exceptionMessage?: string;
}> {}
export interface PlaybackKeyPair {
  arn?: string;
  name?: string;
  fingerprint?: string;
  tags?: Record<string, string>;
}
export type PlaybackKeyPairArn = string;

export type PlaybackKeyPairFingerprint = string;

export type PlaybackKeyPairList = Array<PlaybackKeyPairSummary>;
export type PlaybackKeyPairName = string;

export interface PlaybackKeyPairSummary {
  arn?: string;
  name?: string;
  tags?: Record<string, string>;
}
export type PlaybackPublicKeyMaterial = string;

export interface PlaybackRestrictionPolicy {
  arn: string;
  allowedCountries: Array<string>;
  allowedOrigins: Array<string>;
  enableStrictOriginEnforcement?: boolean;
  name?: string;
  tags?: Record<string, string>;
}
export type PlaybackRestrictionPolicyAllowedCountry = string;

export type PlaybackRestrictionPolicyAllowedCountryList = Array<string>;
export type PlaybackRestrictionPolicyAllowedOrigin = string;

export type PlaybackRestrictionPolicyAllowedOriginList = Array<string>;
export type PlaybackRestrictionPolicyArn = string;

export type PlaybackRestrictionPolicyEnableStrictOriginEnforcement = boolean;

export type PlaybackRestrictionPolicyList =
  Array<PlaybackRestrictionPolicySummary>;
export type PlaybackRestrictionPolicyName = string;

export interface PlaybackRestrictionPolicySummary {
  arn: string;
  allowedCountries: Array<string>;
  allowedOrigins: Array<string>;
  enableStrictOriginEnforcement?: boolean;
  name?: string;
  tags?: Record<string, string>;
}
export type PlaybackURL = string;

export interface PutMetadataRequest {
  channelArn: string;
  metadata: string;
}
export interface RecordingConfiguration {
  arn: string;
  name?: string;
  destinationConfiguration: DestinationConfiguration;
  state: string;
  tags?: Record<string, string>;
  thumbnailConfiguration?: ThumbnailConfiguration;
  recordingReconnectWindowSeconds?: number;
  renditionConfiguration?: RenditionConfiguration;
}
export type RecordingConfigurationArn = string;

export type RecordingConfigurationList = Array<RecordingConfigurationSummary>;
export type RecordingConfigurationName = string;

export type RecordingConfigurationState = string;

export interface RecordingConfigurationSummary {
  arn: string;
  name?: string;
  destinationConfiguration: DestinationConfiguration;
  state: string;
  tags?: Record<string, string>;
}
export type RecordingMode = string;

export type RecordingReconnectWindowSeconds = number;

export interface RenditionConfiguration {
  renditionSelection?: string;
  renditions?: Array<RenditionConfigurationRendition>;
}
export type RenditionConfigurationRendition =
  | "SD"
  | "HD"
  | "FULL_HD"
  | "LOWEST_RESOLUTION";
export type RenditionConfigurationRenditionList =
  Array<RenditionConfigurationRendition>;
export type RenditionConfigurationRenditionSelection = string;

export type ResourceArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly exceptionMessage?: string;
}> {}
export type S3DestinationBucketName = string;

export interface S3DestinationConfiguration {
  bucketName: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly exceptionMessage?: string;
}> {}
export interface Srt {
  endpoint?: string;
  passphrase?: string;
}
export type SrtEndpoint = string;

export type SrtPassphrase = string;

export interface StartViewerSessionRevocationRequest {
  channelArn: string;
  viewerId: string;
  viewerSessionVersionsLessThanOrEqualTo?: number;
}
export interface StartViewerSessionRevocationResponse {}
export interface StopStreamRequest {
  channelArn: string;
}
export interface StopStreamResponse {}
export interface Stream {
  channelArn?: string;
  streamId?: string;
  playbackUrl?: string;
  startTime?: Date | string;
  state?: string;
  health?: string;
  viewerCount?: number;
}
export interface StreamEvent {
  name?: string;
  type?: string;
  eventTime?: Date | string;
  code?: string;
}
export type StreamEvents = Array<StreamEvent>;
export interface StreamFilters {
  health?: string;
}
export type StreamHealth = string;

export type StreamId = string;

export interface StreamKey {
  arn?: string;
  value?: string;
  channelArn?: string;
  tags?: Record<string, string>;
}
export type StreamKeyArn = string;

export type StreamKeyArnList = Array<string>;
export type StreamKeyList = Array<StreamKeySummary>;
export type StreamKeys = Array<StreamKey>;
export interface StreamKeySummary {
  arn?: string;
  channelArn?: string;
  tags?: Record<string, string>;
}
export type StreamKeyValue = string;

export type StreamList = Array<StreamSummary>;
export type StreamMetadata = string;

export interface StreamSession {
  streamId?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  channel?: Channel;
  ingestConfiguration?: IngestConfiguration;
  ingestConfigurations?: IngestConfigurations;
  recordingConfiguration?: RecordingConfiguration;
  truncatedEvents?: Array<StreamEvent>;
}
export type StreamSessionList = Array<StreamSessionSummary>;
export interface StreamSessionSummary {
  streamId?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  hasErrorEvent?: boolean;
}
export type StreamStartTime = Date | string;

export type StreamState = string;

export interface StreamSummary {
  channelArn?: string;
  streamId?: string;
  state?: string;
  health?: string;
  viewerCount?: number;
  startTime?: Date | string;
}
export declare class StreamUnavailable extends EffectData.TaggedError(
  "StreamUnavailable",
)<{
  readonly exceptionMessage?: string;
}> {}
export type StreamViewerCount = number;

export type IvsString = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagValue = string;

export type TargetIntervalSeconds = number;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly exceptionMessage?: string;
}> {}
export interface ThumbnailConfiguration {
  recordingMode?: string;
  targetIntervalSeconds?: number;
  resolution?: ThumbnailConfigurationResolution;
  storage?: Array<string>;
}
export type ThumbnailConfigurationResolution =
  | "SD"
  | "HD"
  | "FULL_HD"
  | "LOWEST_RESOLUTION";
export type ThumbnailConfigurationStorage = string;

export type ThumbnailConfigurationStorageList = Array<string>;
export type Time = Date | string;

export type TranscodePreset =
  | "HIGHER_BANDWIDTH_DELIVERY"
  | "CONSTRAINED_BANDWIDTH_DELIVERY";
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateChannelRequest {
  arn: string;
  name?: string;
  latencyMode?: string;
  type?: ChannelType;
  authorized?: boolean;
  recordingConfigurationArn?: string;
  insecureIngest?: boolean;
  preset?: TranscodePreset;
  playbackRestrictionPolicyArn?: string;
  multitrackInputConfiguration?: MultitrackInputConfiguration;
  containerFormat?: string;
}
export interface UpdateChannelResponse {
  channel?: Channel;
}
export interface UpdatePlaybackRestrictionPolicyRequest {
  arn: string;
  allowedCountries?: Array<string>;
  allowedOrigins?: Array<string>;
  enableStrictOriginEnforcement?: boolean;
  name?: string;
}
export interface UpdatePlaybackRestrictionPolicyResponse {
  playbackRestrictionPolicy?: PlaybackRestrictionPolicy;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly exceptionMessage?: string;
}> {}
export interface VideoConfiguration {
  avcProfile?: string;
  avcLevel?: string;
  codec?: string;
  encoder?: string;
  targetBitrate?: number;
  targetFramerate?: number;
  videoHeight?: number;
  videoWidth?: number;
  level?: string;
  track?: string;
  profile?: string;
}
export type VideoConfigurationList = Array<VideoConfiguration>;
export type ViewerId = string;

export type ViewerSessionVersion = number;

export declare namespace BatchGetChannel {
  export type Input = BatchGetChannelRequest;
  export type Output = BatchGetChannelResponse;
  export type Error = CommonAwsError;
}

export declare namespace BatchGetStreamKey {
  export type Input = BatchGetStreamKeyRequest;
  export type Output = BatchGetStreamKeyResponse;
  export type Error = CommonAwsError;
}

export declare namespace BatchStartViewerSessionRevocation {
  export type Input = BatchStartViewerSessionRevocationRequest;
  export type Output = BatchStartViewerSessionRevocationResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateChannel {
  export type Input = CreateChannelRequest;
  export type Output = CreateChannelResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePlaybackRestrictionPolicy {
  export type Input = CreatePlaybackRestrictionPolicyRequest;
  export type Output = CreatePlaybackRestrictionPolicyResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRecordingConfiguration {
  export type Input = CreateRecordingConfigurationRequest;
  export type Output = CreateRecordingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | PendingVerification
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateStreamKey {
  export type Input = CreateStreamKeyRequest;
  export type Output = CreateStreamKeyResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteChannel {
  export type Input = DeleteChannelRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePlaybackKeyPair {
  export type Input = DeletePlaybackKeyPairRequest;
  export type Output = DeletePlaybackKeyPairResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePlaybackRestrictionPolicy {
  export type Input = DeletePlaybackRestrictionPolicyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRecordingConfiguration {
  export type Input = DeleteRecordingConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteStreamKey {
  export type Input = DeleteStreamKeyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetChannel {
  export type Input = GetChannelRequest;
  export type Output = GetChannelResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPlaybackKeyPair {
  export type Input = GetPlaybackKeyPairRequest;
  export type Output = GetPlaybackKeyPairResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPlaybackRestrictionPolicy {
  export type Input = GetPlaybackRestrictionPolicyRequest;
  export type Output = GetPlaybackRestrictionPolicyResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRecordingConfiguration {
  export type Input = GetRecordingConfigurationRequest;
  export type Output = GetRecordingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStream {
  export type Input = GetStreamRequest;
  export type Output = GetStreamResponse;
  export type Error =
    | AccessDeniedException
    | ChannelNotBroadcasting
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStreamKey {
  export type Input = GetStreamKeyRequest;
  export type Output = GetStreamKeyResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStreamSession {
  export type Input = GetStreamSessionRequest;
  export type Output = GetStreamSessionResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ImportPlaybackKeyPair {
  export type Input = ImportPlaybackKeyPairRequest;
  export type Output = ImportPlaybackKeyPairResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListChannels {
  export type Input = ListChannelsRequest;
  export type Output = ListChannelsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPlaybackKeyPairs {
  export type Input = ListPlaybackKeyPairsRequest;
  export type Output = ListPlaybackKeyPairsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPlaybackRestrictionPolicies {
  export type Input = ListPlaybackRestrictionPoliciesRequest;
  export type Output = ListPlaybackRestrictionPoliciesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRecordingConfigurations {
  export type Input = ListRecordingConfigurationsRequest;
  export type Output = ListRecordingConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStreamKeys {
  export type Input = ListStreamKeysRequest;
  export type Output = ListStreamKeysResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStreams {
  export type Input = ListStreamsRequest;
  export type Output = ListStreamsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStreamSessions {
  export type Input = ListStreamSessionsRequest;
  export type Output = ListStreamSessionsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutMetadata {
  export type Input = PutMetadataRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ChannelNotBroadcasting
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartViewerSessionRevocation {
  export type Input = StartViewerSessionRevocationRequest;
  export type Output = StartViewerSessionRevocationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | PendingVerification
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopStream {
  export type Input = StopStreamRequest;
  export type Output = StopStreamResponse;
  export type Error =
    | AccessDeniedException
    | ChannelNotBroadcasting
    | ResourceNotFoundException
    | StreamUnavailable
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateChannel {
  export type Input = UpdateChannelRequest;
  export type Output = UpdateChannelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePlaybackRestrictionPolicy {
  export type Input = UpdatePlaybackRestrictionPolicyRequest;
  export type Output = UpdatePlaybackRestrictionPolicyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

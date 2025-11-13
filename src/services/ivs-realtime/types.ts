import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | ThrottlingException
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class IVSRealTime extends AWSServiceClient {
  createEncoderConfiguration(
    input: CreateEncoderConfigurationRequest,
  ): Effect.Effect<
    CreateEncoderConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createIngestConfiguration(
    input: CreateIngestConfigurationRequest,
  ): Effect.Effect<
    CreateIngestConfigurationResponse,
    | AccessDeniedException
    | PendingVerification
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createParticipantToken(
    input: CreateParticipantTokenRequest,
  ): Effect.Effect<
    CreateParticipantTokenResponse,
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createStage(
    input: CreateStageRequest,
  ): Effect.Effect<
    CreateStageResponse,
    | AccessDeniedException
    | PendingVerification
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createStorageConfiguration(
    input: CreateStorageConfigurationRequest,
  ): Effect.Effect<
    CreateStorageConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteEncoderConfiguration(
    input: DeleteEncoderConfigurationRequest,
  ): Effect.Effect<
    DeleteEncoderConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteIngestConfiguration(
    input: DeleteIngestConfigurationRequest,
  ): Effect.Effect<
    DeleteIngestConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deletePublicKey(
    input: DeletePublicKeyRequest,
  ): Effect.Effect<
    DeletePublicKeyResponse,
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteStage(
    input: DeleteStageRequest,
  ): Effect.Effect<
    DeleteStageResponse,
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteStorageConfiguration(
    input: DeleteStorageConfigurationRequest,
  ): Effect.Effect<
    DeleteStorageConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  disconnectParticipant(
    input: DisconnectParticipantRequest,
  ): Effect.Effect<
    DisconnectParticipantResponse,
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getComposition(
    input: GetCompositionRequest,
  ): Effect.Effect<
    GetCompositionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  getEncoderConfiguration(
    input: GetEncoderConfigurationRequest,
  ): Effect.Effect<
    GetEncoderConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  getIngestConfiguration(
    input: GetIngestConfigurationRequest,
  ): Effect.Effect<
    GetIngestConfigurationResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getParticipant(
    input: GetParticipantRequest,
  ): Effect.Effect<
    GetParticipantResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getPublicKey(
    input: GetPublicKeyRequest,
  ): Effect.Effect<
    GetPublicKeyResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getStage(
    input: GetStageRequest,
  ): Effect.Effect<
    GetStageResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getStageSession(
    input: GetStageSessionRequest,
  ): Effect.Effect<
    GetStageSessionResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getStorageConfiguration(
    input: GetStorageConfigurationRequest,
  ): Effect.Effect<
    GetStorageConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  importPublicKey(
    input: ImportPublicKeyRequest,
  ): Effect.Effect<
    ImportPublicKeyResponse,
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  listCompositions(
    input: ListCompositionsRequest,
  ): Effect.Effect<
    ListCompositionsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  listEncoderConfigurations(
    input: ListEncoderConfigurationsRequest,
  ): Effect.Effect<
    ListEncoderConfigurationsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  listIngestConfigurations(
    input: ListIngestConfigurationsRequest,
  ): Effect.Effect<
    ListIngestConfigurationsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listParticipantEvents(
    input: ListParticipantEventsRequest,
  ): Effect.Effect<
    ListParticipantEventsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listParticipantReplicas(
    input: ListParticipantReplicasRequest,
  ): Effect.Effect<
    ListParticipantReplicasResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listParticipants(
    input: ListParticipantsRequest,
  ): Effect.Effect<
    ListParticipantsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listPublicKeys(
    input: ListPublicKeysRequest,
  ): Effect.Effect<
    ListPublicKeysResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listStages(
    input: ListStagesRequest,
  ): Effect.Effect<
    ListStagesResponse,
    | AccessDeniedException
    | ConflictException
    | ValidationException
    | CommonAwsError
  >;
  listStageSessions(
    input: ListStageSessionsRequest,
  ): Effect.Effect<
    ListStageSessionsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listStorageConfigurations(
    input: ListStorageConfigurationsRequest,
  ): Effect.Effect<
    ListStorageConfigurationsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
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
  startComposition(
    input: StartCompositionRequest,
  ): Effect.Effect<
    StartCompositionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  startParticipantReplication(
    input: StartParticipantReplicationRequest,
  ): Effect.Effect<
    StartParticipantReplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  stopComposition(
    input: StopCompositionRequest,
  ): Effect.Effect<
    StopCompositionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  stopParticipantReplication(
    input: StopParticipantReplicationRequest,
  ): Effect.Effect<
    StopParticipantReplicationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
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
  updateIngestConfiguration(
    input: UpdateIngestConfigurationRequest,
  ): Effect.Effect<
    UpdateIngestConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateStage(
    input: UpdateStageRequest,
  ): Effect.Effect<
    UpdateStageResponse,
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class IvsRealtime extends IVSRealTime {}

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly accessControlAllowOrigin?: string;
  readonly accessControlExposeHeaders?: string;
  readonly cacheControl?: string;
  readonly contentSecurityPolicy?: string;
  readonly strictTransportSecurity?: string;
  readonly xContentTypeOptions?: string;
  readonly xFrameOptions?: string;
  readonly xAmznErrorType?: string;
  readonly exceptionMessage?: string;
}> {}
export type AttributeKey = string;

export interface AutoParticipantRecordingConfiguration {
  storageConfigurationArn: string;
  mediaTypes?: Array<ParticipantRecordingMediaType>;
  thumbnailConfiguration?: ParticipantThumbnailConfiguration;
  recordingReconnectWindowSeconds?: number;
  hlsConfiguration?: ParticipantRecordingHlsConfiguration;
  recordParticipantReplicas?: boolean;
}
export type AutoParticipantRecordingStorageConfigurationArn = string;

export type Bitrate = number;

export type IvsRealtimeBoolean = boolean;

export type ChannelArn = string;

export interface ChannelDestinationConfiguration {
  channelArn: string;
  encoderConfigurationArn?: string;
}
export interface Composition {
  arn: string;
  stageArn: string;
  state: string;
  layout: LayoutConfiguration;
  destinations: Array<Destination>;
  tags?: Record<string, string>;
  startTime?: Date | string;
  endTime?: Date | string;
}
export type CompositionArn = string;

export type CompositionClientToken = string;

export interface CompositionRecordingHlsConfiguration {
  targetSegmentDurationSeconds?: number;
}
export type CompositionRecordingTargetSegmentDurationSeconds = number;

export type CompositionState = string;

export interface CompositionSummary {
  arn: string;
  stageArn: string;
  destinations: Array<DestinationSummary>;
  state: string;
  tags?: Record<string, string>;
  startTime?: Date | string;
  endTime?: Date | string;
}
export type CompositionSummaryList = Array<CompositionSummary>;
export interface CompositionThumbnailConfiguration {
  targetIntervalSeconds?: number;
  storage?: Array<ThumbnailStorageType>;
}
export type CompositionThumbnailConfigurationList =
  Array<CompositionThumbnailConfiguration>;
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly accessControlAllowOrigin?: string;
  readonly accessControlExposeHeaders?: string;
  readonly cacheControl?: string;
  readonly contentSecurityPolicy?: string;
  readonly strictTransportSecurity?: string;
  readonly xContentTypeOptions?: string;
  readonly xFrameOptions?: string;
  readonly xAmznErrorType?: string;
  readonly exceptionMessage?: string;
}> {}
export interface CreateEncoderConfigurationRequest {
  name?: string;
  video?: Video;
  tags?: Record<string, string>;
}
export interface CreateEncoderConfigurationResponse {
  encoderConfiguration?: EncoderConfiguration;
}
export interface CreateIngestConfigurationRequest {
  name?: string;
  stageArn?: string;
  userId?: string;
  attributes?: Record<string, string>;
  ingestProtocol: IngestProtocol;
  insecureIngest?: boolean;
  tags?: Record<string, string>;
}
export interface CreateIngestConfigurationResponse {
  ingestConfiguration?: IngestConfiguration;
}
export interface CreateParticipantTokenRequest {
  stageArn: string;
  duration?: number;
  userId?: string;
  attributes?: Record<string, string>;
  capabilities?: Array<string>;
}
export interface CreateParticipantTokenResponse {
  participantToken?: ParticipantToken;
}
export interface CreateStageRequest {
  name?: string;
  participantTokenConfigurations?: Array<ParticipantTokenConfiguration>;
  tags?: Record<string, string>;
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration;
}
export interface CreateStageResponse {
  stage?: Stage;
  participantTokens?: Array<ParticipantToken>;
}
export interface CreateStorageConfigurationRequest {
  name?: string;
  s3: S3StorageConfiguration;
  tags?: Record<string, string>;
}
export interface CreateStorageConfigurationResponse {
  storageConfiguration?: StorageConfiguration;
}
export interface DeleteEncoderConfigurationRequest {
  arn: string;
}
export interface DeleteEncoderConfigurationResponse {}
export interface DeleteIngestConfigurationRequest {
  arn: string;
  force?: boolean;
}
export interface DeleteIngestConfigurationResponse {}
export interface DeletePublicKeyRequest {
  arn: string;
}
export interface DeletePublicKeyResponse {}
export interface DeleteStageRequest {
  arn: string;
}
export interface DeleteStageResponse {}
export interface DeleteStorageConfigurationRequest {
  arn: string;
}
export interface DeleteStorageConfigurationResponse {}
export interface Destination {
  id: string;
  state: string;
  startTime?: Date | string;
  endTime?: Date | string;
  configuration: DestinationConfiguration;
  detail?: DestinationDetail;
}
export interface DestinationConfiguration {
  name?: string;
  channel?: ChannelDestinationConfiguration;
  s3?: S3DestinationConfiguration;
}
export type DestinationConfigurationList = Array<DestinationConfiguration>;
export type DestinationConfigurationName = string;

export interface DestinationDetail {
  s3?: S3Detail;
}
export type DestinationList = Array<Destination>;
export type DestinationState = string;

export interface DestinationSummary {
  id: string;
  state: string;
  startTime?: Date | string;
  endTime?: Date | string;
}
export type DestinationSummaryList = Array<DestinationSummary>;
export type DisconnectParticipantReason = string;

export interface DisconnectParticipantRequest {
  stageArn: string;
  participantId: string;
  reason?: string;
}
export interface DisconnectParticipantResponse {}
export interface EncoderConfiguration {
  arn: string;
  name?: string;
  video?: Video;
  tags?: Record<string, string>;
}
export type EncoderConfigurationArn = string;

export type EncoderConfigurationArnList = Array<string>;
export type EncoderConfigurationName = string;

export interface EncoderConfigurationSummary {
  arn: string;
  name?: string;
  tags?: Record<string, string>;
}
export type EncoderConfigurationSummaryList =
  Array<EncoderConfigurationSummary>;
export type errorMessage = string;

export interface Event {
  name?: string;
  participantId?: string;
  eventTime?: Date | string;
  remoteParticipantId?: string;
  errorCode?: EventErrorCode;
  destinationStageArn?: string;
  destinationSessionId?: string;
  replica?: boolean;
}
export type EventErrorCode =
  | "INSUFFICIENT_CAPABILITIES"
  | "QUOTA_EXCEEDED"
  | "PUBLISHER_NOT_FOUND"
  | "BITRATE_EXCEEDED"
  | "RESOLUTION_EXCEEDED"
  | "STREAM_DURATION_EXCEEDED"
  | "INVALID_AUDIO_CODEC"
  | "INVALID_VIDEO_CODEC"
  | "INVALID_PROTOCOL"
  | "INVALID_STREAM_KEY"
  | "REUSE_OF_STREAM_KEY"
  | "B_FRAME_PRESENT"
  | "INVALID_INPUT"
  | "INTERNAL_SERVER_EXCEPTION";
export type EventList = Array<Event>;
export type EventName = string;

export type Framerate = number;

export interface GetCompositionRequest {
  arn: string;
}
export interface GetCompositionResponse {
  composition?: Composition;
}
export interface GetEncoderConfigurationRequest {
  arn: string;
}
export interface GetEncoderConfigurationResponse {
  encoderConfiguration?: EncoderConfiguration;
}
export interface GetIngestConfigurationRequest {
  arn: string;
}
export interface GetIngestConfigurationResponse {
  ingestConfiguration?: IngestConfiguration;
}
export interface GetParticipantRequest {
  stageArn: string;
  sessionId: string;
  participantId: string;
}
export interface GetParticipantResponse {
  participant?: Participant;
}
export interface GetPublicKeyRequest {
  arn: string;
}
export interface GetPublicKeyResponse {
  publicKey?: PublicKey;
}
export interface GetStageRequest {
  arn: string;
}
export interface GetStageResponse {
  stage?: Stage;
}
export interface GetStageSessionRequest {
  stageArn: string;
  sessionId: string;
}
export interface GetStageSessionResponse {
  stageSession?: StageSession;
}
export interface GetStorageConfigurationRequest {
  arn: string;
}
export interface GetStorageConfigurationResponse {
  storageConfiguration?: StorageConfiguration;
}
export interface GridConfiguration {
  featuredParticipantAttribute?: string;
  omitStoppedVideo?: boolean;
  videoAspectRatio?: VideoAspectRatio;
  videoFillMode?: VideoFillMode;
  gridGap?: number;
  participantOrderAttribute?: string;
}
export type GridGap = number;

export type Height = number;

export interface ImportPublicKeyRequest {
  publicKeyMaterial: string;
  name?: string;
  tags?: Record<string, string>;
}
export interface ImportPublicKeyResponse {
  publicKey?: PublicKey;
}
export interface IngestConfiguration {
  name?: string;
  arn: string;
  ingestProtocol: IngestProtocol;
  streamKey: string;
  stageArn: string;
  participantId: string;
  state: string;
  userId?: string;
  attributes?: Record<string, string>;
  tags?: Record<string, string>;
}
export type IngestConfigurationArn = string;

export type IngestConfigurationList = Array<IngestConfigurationSummary>;
export type IngestConfigurationName = string;

export type IngestConfigurationStageArn = string;

export type IngestConfigurationState = string;

export interface IngestConfigurationSummary {
  name?: string;
  arn: string;
  ingestProtocol: IngestProtocol;
  stageArn: string;
  participantId: string;
  state: string;
  userId?: string;
}
export type IngestProtocol = "RTMP" | "RTMPS";
export type InsecureIngest = boolean;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly accessControlAllowOrigin?: string;
  readonly accessControlExposeHeaders?: string;
  readonly cacheControl?: string;
  readonly contentSecurityPolicy?: string;
  readonly strictTransportSecurity?: string;
  readonly xContentTypeOptions?: string;
  readonly xFrameOptions?: string;
  readonly xAmznErrorType?: string;
  readonly exceptionMessage?: string;
}> {}
export interface LayoutConfiguration {
  grid?: GridConfiguration;
  pip?: PipConfiguration;
}
export interface ListCompositionsRequest {
  filterByStageArn?: string;
  filterByEncoderConfigurationArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCompositionsResponse {
  compositions: Array<CompositionSummary>;
  nextToken?: string;
}
export interface ListEncoderConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListEncoderConfigurationsResponse {
  encoderConfigurations: Array<EncoderConfigurationSummary>;
  nextToken?: string;
}
export interface ListIngestConfigurationsRequest {
  filterByStageArn?: string;
  filterByState?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListIngestConfigurationsResponse {
  ingestConfigurations: Array<IngestConfigurationSummary>;
  nextToken?: string;
}
export interface ListParticipantEventsRequest {
  stageArn: string;
  sessionId: string;
  participantId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListParticipantEventsResponse {
  events: Array<Event>;
  nextToken?: string;
}
export interface ListParticipantReplicasRequest {
  sourceStageArn: string;
  participantId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListParticipantReplicasResponse {
  replicas: Array<ParticipantReplica>;
  nextToken?: string;
}
export interface ListParticipantsRequest {
  stageArn: string;
  sessionId: string;
  filterByUserId?: string;
  filterByPublished?: boolean;
  filterByState?: string;
  nextToken?: string;
  maxResults?: number;
  filterByRecordingState?: string;
}
export interface ListParticipantsResponse {
  participants: Array<ParticipantSummary>;
  nextToken?: string;
}
export interface ListPublicKeysRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListPublicKeysResponse {
  publicKeys: Array<PublicKeySummary>;
  nextToken?: string;
}
export interface ListStageSessionsRequest {
  stageArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListStageSessionsResponse {
  stageSessions: Array<StageSessionSummary>;
  nextToken?: string;
}
export interface ListStagesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListStagesResponse {
  stages: Array<StageSummary>;
  nextToken?: string;
}
export interface ListStorageConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListStorageConfigurationsResponse {
  storageConfigurations: Array<StorageConfigurationSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: Record<string, string>;
}
export type MaxCompositionResults = number;

export type MaxEncoderConfigurationResults = number;

export type MaxIngestConfigurationResults = number;

export type MaxParticipantEventResults = number;

export type MaxParticipantReplicaResults = number;

export type MaxParticipantResults = number;

export type MaxPublicKeyResults = number;

export type MaxStageResults = number;

export type MaxStageSessionResults = number;

export type MaxStorageConfigurationResults = number;

export type OmitStoppedVideo = boolean;

export type PaginationToken = string;

export interface Participant {
  participantId?: string;
  userId?: string;
  state?: string;
  firstJoinTime?: Date | string;
  attributes?: Record<string, string>;
  published?: boolean;
  ispName?: string;
  osName?: string;
  osVersion?: string;
  browserName?: string;
  browserVersion?: string;
  sdkVersion?: string;
  recordingS3BucketName?: string;
  recordingS3Prefix?: string;
  recordingState?: string;
  protocol?: ParticipantProtocol;
  replicationType?: string;
  replicationState?: string;
  sourceStageArn?: string;
  sourceSessionId?: string;
}
export type ParticipantAttributes = Record<string, string>;
export type ParticipantClientAttribute = string;

export type ParticipantId = string;

export type ParticipantList = Array<ParticipantSummary>;
export type ParticipantProtocol = "UNKNOWN" | "WHIP" | "RTMP" | "RTMPS";
export type ParticipantRecordingFilterByRecordingState = string;

export interface ParticipantRecordingHlsConfiguration {
  targetSegmentDurationSeconds?: number;
}
export type ParticipantRecordingMediaType =
  | "AUDIO_VIDEO"
  | "AUDIO_ONLY"
  | "NONE";
export type ParticipantRecordingMediaTypeList =
  Array<ParticipantRecordingMediaType>;
export type ParticipantRecordingReconnectWindowSeconds = number;

export type ParticipantRecordingS3BucketName = string;

export type ParticipantRecordingS3Prefix = string;

export type ParticipantRecordingState = string;

export type ParticipantRecordingTargetSegmentDurationSeconds = number;

export interface ParticipantReplica {
  sourceStageArn: string;
  participantId: string;
  sourceSessionId: string;
  destinationStageArn: string;
  destinationSessionId: string;
  replicationState: string;
}
export type ParticipantReplicaList = Array<ParticipantReplica>;
export type ParticipantState = string;

export interface ParticipantSummary {
  participantId?: string;
  userId?: string;
  state?: string;
  firstJoinTime?: Date | string;
  published?: boolean;
  recordingState?: string;
  replicationType?: string;
  replicationState?: string;
  sourceStageArn?: string;
  sourceSessionId?: string;
}
export interface ParticipantThumbnailConfiguration {
  targetIntervalSeconds?: number;
  storage?: Array<ThumbnailStorageType>;
  recordingMode?: ThumbnailRecordingMode;
}
export interface ParticipantToken {
  participantId?: string;
  token?: string;
  userId?: string;
  attributes?: Record<string, string>;
  duration?: number;
  capabilities?: Array<string>;
  expirationTime?: Date | string;
}
export type ParticipantTokenAttributes = Record<string, string>;
export type ParticipantTokenCapabilities = Array<string>;
export type ParticipantTokenCapability = string;

export interface ParticipantTokenConfiguration {
  duration?: number;
  userId?: string;
  attributes?: Record<string, string>;
  capabilities?: Array<string>;
}
export type ParticipantTokenConfigurations =
  Array<ParticipantTokenConfiguration>;
export type ParticipantTokenDurationMinutes = number;

export type ParticipantTokenExpirationTime = Date | string;

export type ParticipantTokenId = string;

export type ParticipantTokenList = Array<ParticipantToken>;
export type ParticipantTokenString = string;

export type ParticipantTokenUserId = string;

export declare class PendingVerification extends Data.TaggedError(
  "PendingVerification",
)<{
  readonly accessControlAllowOrigin?: string;
  readonly accessControlExposeHeaders?: string;
  readonly cacheControl?: string;
  readonly contentSecurityPolicy?: string;
  readonly strictTransportSecurity?: string;
  readonly xContentTypeOptions?: string;
  readonly xFrameOptions?: string;
  readonly xAmznErrorType?: string;
  readonly exceptionMessage?: string;
}> {}
export type PipBehavior = "STATIC" | "DYNAMIC";
export interface PipConfiguration {
  featuredParticipantAttribute?: string;
  omitStoppedVideo?: boolean;
  videoFillMode?: VideoFillMode;
  gridGap?: number;
  pipParticipantAttribute?: string;
  pipBehavior?: PipBehavior;
  pipOffset?: number;
  pipPosition?: PipPosition;
  pipWidth?: number;
  pipHeight?: number;
  participantOrderAttribute?: string;
}
export type PipHeight = number;

export type PipOffset = number;

export type PipPosition =
  | "TOP_LEFT"
  | "TOP_RIGHT"
  | "BOTTOM_LEFT"
  | "BOTTOM_RIGHT";
export type PipWidth = number;

export interface PublicKey {
  arn?: string;
  name?: string;
  publicKeyMaterial?: string;
  fingerprint?: string;
  tags?: Record<string, string>;
}
export type PublicKeyArn = string;

export type PublicKeyFingerprint = string;

export type PublicKeyList = Array<PublicKeySummary>;
export type PublicKeyMaterial = string;

export type PublicKeyName = string;

export interface PublicKeySummary {
  arn?: string;
  name?: string;
  tags?: Record<string, string>;
}
export type Published = boolean;

export type ReconnectWindowSeconds = number;

export interface RecordingConfiguration {
  hlsConfiguration?: CompositionRecordingHlsConfiguration;
  format?: string;
}
export type RecordingConfigurationFormat = string;

export type RecordParticipantReplicas = boolean;

export type Replica = boolean;

export type ReplicationState = string;

export type ReplicationType = string;

export type ResourceArn = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly accessControlAllowOrigin?: string;
  readonly accessControlExposeHeaders?: string;
  readonly cacheControl?: string;
  readonly contentSecurityPolicy?: string;
  readonly strictTransportSecurity?: string;
  readonly xContentTypeOptions?: string;
  readonly xFrameOptions?: string;
  readonly xAmznErrorType?: string;
  readonly exceptionMessage?: string;
}> {}
export type S3BucketName = string;

export interface S3DestinationConfiguration {
  storageConfigurationArn: string;
  encoderConfigurationArns: Array<string>;
  recordingConfiguration?: RecordingConfiguration;
  thumbnailConfigurations?: Array<CompositionThumbnailConfiguration>;
}
export interface S3Detail {
  recordingPrefix: string;
}
export interface S3StorageConfiguration {
  bucketName: string;
}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly accessControlAllowOrigin?: string;
  readonly accessControlExposeHeaders?: string;
  readonly cacheControl?: string;
  readonly contentSecurityPolicy?: string;
  readonly strictTransportSecurity?: string;
  readonly xContentTypeOptions?: string;
  readonly xFrameOptions?: string;
  readonly xAmznErrorType?: string;
  readonly exceptionMessage?: string;
}> {}
export interface Stage {
  arn: string;
  name?: string;
  activeSessionId?: string;
  tags?: Record<string, string>;
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration;
  endpoints?: StageEndpoints;
}
export type StageArn = string;

export type StageEndpoint = string;

export interface StageEndpoints {
  events?: string;
  whip?: string;
  rtmp?: string;
  rtmps?: string;
}
export type StageName = string;

export interface StageSession {
  sessionId?: string;
  startTime?: Date | string;
  endTime?: Date | string;
}
export type StageSessionId = string;

export type StageSessionList = Array<StageSessionSummary>;
export interface StageSessionSummary {
  sessionId?: string;
  startTime?: Date | string;
  endTime?: Date | string;
}
export interface StageSummary {
  arn: string;
  name?: string;
  activeSessionId?: string;
  tags?: Record<string, string>;
}
export type StageSummaryList = Array<StageSummary>;
export interface StartCompositionRequest {
  stageArn: string;
  idempotencyToken?: string;
  layout?: LayoutConfiguration;
  destinations: Array<DestinationConfiguration>;
  tags?: Record<string, string>;
}
export interface StartCompositionResponse {
  composition?: Composition;
}
export interface StartParticipantReplicationRequest {
  sourceStageArn: string;
  destinationStageArn: string;
  participantId: string;
  reconnectWindowSeconds?: number;
  attributes?: Record<string, string>;
}
export interface StartParticipantReplicationResponse {
  accessControlAllowOrigin?: string;
  accessControlExposeHeaders?: string;
  cacheControl?: string;
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xContentTypeOptions?: string;
  xFrameOptions?: string;
}
export interface StopCompositionRequest {
  arn: string;
}
export interface StopCompositionResponse {}
export interface StopParticipantReplicationRequest {
  sourceStageArn: string;
  destinationStageArn: string;
  participantId: string;
}
export interface StopParticipantReplicationResponse {
  accessControlAllowOrigin?: string;
  accessControlExposeHeaders?: string;
  cacheControl?: string;
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xContentTypeOptions?: string;
  xFrameOptions?: string;
}
export interface StorageConfiguration {
  arn: string;
  name?: string;
  s3?: S3StorageConfiguration;
  tags?: Record<string, string>;
}
export type StorageConfigurationArn = string;

export type StorageConfigurationName = string;

export interface StorageConfigurationSummary {
  arn: string;
  name?: string;
  s3?: S3StorageConfiguration;
  tags?: Record<string, string>;
}
export type StorageConfigurationSummaryList =
  Array<StorageConfigurationSummary>;
export type StreamKey = string;

export type IvsRealtimeString = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagValue = string;

export type ThumbnailIntervalSeconds = number;

export type ThumbnailRecordingMode = "INTERVAL" | "DISABLED";
export type ThumbnailStorageType = "SEQUENTIAL" | "LATEST";
export type ThumbnailStorageTypeList = Array<ThumbnailStorageType>;
export type Time = Date | string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateIngestConfigurationRequest {
  arn: string;
  stageArn?: string;
}
export interface UpdateIngestConfigurationResponse {
  ingestConfiguration?: IngestConfiguration;
}
export interface UpdateStageRequest {
  arn: string;
  name?: string;
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration;
}
export interface UpdateStageResponse {
  stage?: Stage;
}
export type UserId = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly accessControlAllowOrigin?: string;
  readonly accessControlExposeHeaders?: string;
  readonly cacheControl?: string;
  readonly contentSecurityPolicy?: string;
  readonly strictTransportSecurity?: string;
  readonly xContentTypeOptions?: string;
  readonly xFrameOptions?: string;
  readonly xAmznErrorType?: string;
  readonly exceptionMessage?: string;
}> {}
export interface Video {
  width?: number;
  height?: number;
  framerate?: number;
  bitrate?: number;
}
export type VideoAspectRatio = "AUTO" | "VIDEO" | "SQUARE" | "PORTRAIT";
export type VideoFillMode = "FILL" | "COVER" | "CONTAIN";
export type Width = number;

export declare namespace CreateEncoderConfiguration {
  export type Input = CreateEncoderConfigurationRequest;
  export type Output = CreateEncoderConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIngestConfiguration {
  export type Input = CreateIngestConfigurationRequest;
  export type Output = CreateIngestConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateParticipantToken {
  export type Input = CreateParticipantTokenRequest;
  export type Output = CreateParticipantTokenResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateStage {
  export type Input = CreateStageRequest;
  export type Output = CreateStageResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateStorageConfiguration {
  export type Input = CreateStorageConfigurationRequest;
  export type Output = CreateStorageConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEncoderConfiguration {
  export type Input = DeleteEncoderConfigurationRequest;
  export type Output = DeleteEncoderConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIngestConfiguration {
  export type Input = DeleteIngestConfigurationRequest;
  export type Output = DeleteIngestConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePublicKey {
  export type Input = DeletePublicKeyRequest;
  export type Output = DeletePublicKeyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteStage {
  export type Input = DeleteStageRequest;
  export type Output = DeleteStageResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteStorageConfiguration {
  export type Input = DeleteStorageConfigurationRequest;
  export type Output = DeleteStorageConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisconnectParticipant {
  export type Input = DisconnectParticipantRequest;
  export type Output = DisconnectParticipantResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetComposition {
  export type Input = GetCompositionRequest;
  export type Output = GetCompositionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEncoderConfiguration {
  export type Input = GetEncoderConfigurationRequest;
  export type Output = GetEncoderConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIngestConfiguration {
  export type Input = GetIngestConfigurationRequest;
  export type Output = GetIngestConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetParticipant {
  export type Input = GetParticipantRequest;
  export type Output = GetParticipantResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPublicKey {
  export type Input = GetPublicKeyRequest;
  export type Output = GetPublicKeyResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStage {
  export type Input = GetStageRequest;
  export type Output = GetStageResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStageSession {
  export type Input = GetStageSessionRequest;
  export type Output = GetStageSessionResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStorageConfiguration {
  export type Input = GetStorageConfigurationRequest;
  export type Output = GetStorageConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ImportPublicKey {
  export type Input = ImportPublicKeyRequest;
  export type Output = ImportPublicKeyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCompositions {
  export type Input = ListCompositionsRequest;
  export type Output = ListCompositionsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEncoderConfigurations {
  export type Input = ListEncoderConfigurationsRequest;
  export type Output = ListEncoderConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIngestConfigurations {
  export type Input = ListIngestConfigurationsRequest;
  export type Output = ListIngestConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListParticipantEvents {
  export type Input = ListParticipantEventsRequest;
  export type Output = ListParticipantEventsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListParticipantReplicas {
  export type Input = ListParticipantReplicasRequest;
  export type Output = ListParticipantReplicasResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListParticipants {
  export type Input = ListParticipantsRequest;
  export type Output = ListParticipantsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPublicKeys {
  export type Input = ListPublicKeysRequest;
  export type Output = ListPublicKeysResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStages {
  export type Input = ListStagesRequest;
  export type Output = ListStagesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStageSessions {
  export type Input = ListStageSessionsRequest;
  export type Output = ListStageSessionsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStorageConfigurations {
  export type Input = ListStorageConfigurationsRequest;
  export type Output = ListStorageConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
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

export declare namespace StartComposition {
  export type Input = StartCompositionRequest;
  export type Output = StartCompositionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartParticipantReplication {
  export type Input = StartParticipantReplicationRequest;
  export type Output = StartParticipantReplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopComposition {
  export type Input = StopCompositionRequest;
  export type Output = StopCompositionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopParticipantReplication {
  export type Input = StopParticipantReplicationRequest;
  export type Output = StopParticipantReplicationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
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

export declare namespace UpdateIngestConfiguration {
  export type Input = UpdateIngestConfigurationRequest;
  export type Output = UpdateIngestConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateStage {
  export type Input = UpdateStageRequest;
  export type Output = UpdateStageResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export type IVSRealTimeErrors =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | PendingVerification
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonAwsError;

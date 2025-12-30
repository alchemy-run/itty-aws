import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ParticipantTokenCapabilities = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class DeleteEncoderConfigurationRequest extends S.Class<DeleteEncoderConfigurationRequest>("DeleteEncoderConfigurationRequest")({arn: S.String}) {}
export class DeleteEncoderConfigurationResponse extends S.Class<DeleteEncoderConfigurationResponse>("DeleteEncoderConfigurationResponse")({}) {}
export class DeleteIngestConfigurationRequest extends S.Class<DeleteIngestConfigurationRequest>("DeleteIngestConfigurationRequest")({arn: S.String, force: S.optional(S.Boolean)}) {}
export class DeleteIngestConfigurationResponse extends S.Class<DeleteIngestConfigurationResponse>("DeleteIngestConfigurationResponse")({}) {}
export class DeletePublicKeyRequest extends S.Class<DeletePublicKeyRequest>("DeletePublicKeyRequest")({arn: S.String}) {}
export class DeletePublicKeyResponse extends S.Class<DeletePublicKeyResponse>("DeletePublicKeyResponse")({}) {}
export class DeleteStageRequest extends S.Class<DeleteStageRequest>("DeleteStageRequest")({arn: S.String}) {}
export class DeleteStageResponse extends S.Class<DeleteStageResponse>("DeleteStageResponse")({}) {}
export class DeleteStorageConfigurationRequest extends S.Class<DeleteStorageConfigurationRequest>("DeleteStorageConfigurationRequest")({arn: S.String}) {}
export class DeleteStorageConfigurationResponse extends S.Class<DeleteStorageConfigurationResponse>("DeleteStorageConfigurationResponse")({}) {}
export class DisconnectParticipantRequest extends S.Class<DisconnectParticipantRequest>("DisconnectParticipantRequest")({stageArn: S.String, participantId: S.String, reason: S.optional(S.String)}) {}
export class DisconnectParticipantResponse extends S.Class<DisconnectParticipantResponse>("DisconnectParticipantResponse")({}) {}
export class GetCompositionRequest extends S.Class<GetCompositionRequest>("GetCompositionRequest")({arn: S.String}) {}
export class GetEncoderConfigurationRequest extends S.Class<GetEncoderConfigurationRequest>("GetEncoderConfigurationRequest")({arn: S.String}) {}
export class GetIngestConfigurationRequest extends S.Class<GetIngestConfigurationRequest>("GetIngestConfigurationRequest")({arn: S.String}) {}
export class GetParticipantRequest extends S.Class<GetParticipantRequest>("GetParticipantRequest")({stageArn: S.String, sessionId: S.String, participantId: S.String}) {}
export class GetPublicKeyRequest extends S.Class<GetPublicKeyRequest>("GetPublicKeyRequest")({arn: S.String}) {}
export class GetStageRequest extends S.Class<GetStageRequest>("GetStageRequest")({arn: S.String}) {}
export class GetStageSessionRequest extends S.Class<GetStageSessionRequest>("GetStageSessionRequest")({stageArn: S.String, sessionId: S.String}) {}
export class GetStorageConfigurationRequest extends S.Class<GetStorageConfigurationRequest>("GetStorageConfigurationRequest")({arn: S.String}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class ImportPublicKeyRequest extends S.Class<ImportPublicKeyRequest>("ImportPublicKeyRequest")({publicKeyMaterial: S.String, name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class ListCompositionsRequest extends S.Class<ListCompositionsRequest>("ListCompositionsRequest")({filterByStageArn: S.optional(S.String), filterByEncoderConfigurationArn: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListEncoderConfigurationsRequest extends S.Class<ListEncoderConfigurationsRequest>("ListEncoderConfigurationsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListIngestConfigurationsRequest extends S.Class<ListIngestConfigurationsRequest>("ListIngestConfigurationsRequest")({filterByStageArn: S.optional(S.String), filterByState: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListParticipantEventsRequest extends S.Class<ListParticipantEventsRequest>("ListParticipantEventsRequest")({stageArn: S.String, sessionId: S.String, participantId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListParticipantReplicasRequest extends S.Class<ListParticipantReplicasRequest>("ListParticipantReplicasRequest")({sourceStageArn: S.String, participantId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListParticipantsRequest extends S.Class<ListParticipantsRequest>("ListParticipantsRequest")({stageArn: S.String, sessionId: S.String, filterByUserId: S.optional(S.String), filterByPublished: S.optional(S.Boolean), filterByState: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), filterByRecordingState: S.optional(S.String)}) {}
export class ListPublicKeysRequest extends S.Class<ListPublicKeysRequest>("ListPublicKeysRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListStagesRequest extends S.Class<ListStagesRequest>("ListStagesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListStageSessionsRequest extends S.Class<ListStageSessionsRequest>("ListStageSessionsRequest")({stageArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListStorageConfigurationsRequest extends S.Class<ListStorageConfigurationsRequest>("ListStorageConfigurationsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export const ParticipantAttributes = S.Record({key: S.String, value: S.String});
export class StartParticipantReplicationRequest extends S.Class<StartParticipantReplicationRequest>("StartParticipantReplicationRequest")({sourceStageArn: S.String, destinationStageArn: S.String, participantId: S.String, reconnectWindowSeconds: S.optional(S.Number), attributes: S.optional(ParticipantAttributes)}) {}
export class StopCompositionRequest extends S.Class<StopCompositionRequest>("StopCompositionRequest")({arn: S.String}) {}
export class StopCompositionResponse extends S.Class<StopCompositionResponse>("StopCompositionResponse")({}) {}
export class StopParticipantReplicationRequest extends S.Class<StopParticipantReplicationRequest>("StopParticipantReplicationRequest")({sourceStageArn: S.String, destinationStageArn: S.String, participantId: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateIngestConfigurationRequest extends S.Class<UpdateIngestConfigurationRequest>("UpdateIngestConfigurationRequest")({arn: S.String, stageArn: S.optional(S.String)}) {}
export const ParticipantRecordingMediaTypeList = S.Array(S.String);
export const ThumbnailStorageTypeList = S.Array(S.String);
export class ParticipantThumbnailConfiguration extends S.Class<ParticipantThumbnailConfiguration>("ParticipantThumbnailConfiguration")({targetIntervalSeconds: S.optional(S.Number), storage: S.optional(ThumbnailStorageTypeList), recordingMode: S.optional(S.String)}) {}
export class ParticipantRecordingHlsConfiguration extends S.Class<ParticipantRecordingHlsConfiguration>("ParticipantRecordingHlsConfiguration")({targetSegmentDurationSeconds: S.optional(S.Number)}) {}
export class AutoParticipantRecordingConfiguration extends S.Class<AutoParticipantRecordingConfiguration>("AutoParticipantRecordingConfiguration")({storageConfigurationArn: S.String, mediaTypes: S.optional(ParticipantRecordingMediaTypeList), thumbnailConfiguration: S.optional(ParticipantThumbnailConfiguration), recordingReconnectWindowSeconds: S.optional(S.Number), hlsConfiguration: S.optional(ParticipantRecordingHlsConfiguration), recordParticipantReplicas: S.optional(S.Boolean)}) {}
export class UpdateStageRequest extends S.Class<UpdateStageRequest>("UpdateStageRequest")({arn: S.String, name: S.optional(S.String), autoParticipantRecordingConfiguration: S.optional(AutoParticipantRecordingConfiguration)}) {}
export class Video extends S.Class<Video>("Video")({width: S.optional(S.Number), height: S.optional(S.Number), framerate: S.optional(S.Number), bitrate: S.optional(S.Number)}) {}
export const ParticipantTokenAttributes = S.Record({key: S.String, value: S.String});
export class ParticipantTokenConfiguration extends S.Class<ParticipantTokenConfiguration>("ParticipantTokenConfiguration")({duration: S.optional(S.Number), userId: S.optional(S.String), attributes: S.optional(ParticipantTokenAttributes), capabilities: S.optional(ParticipantTokenCapabilities)}) {}
export const ParticipantTokenConfigurations = S.Array(ParticipantTokenConfiguration);
export class S3StorageConfiguration extends S.Class<S3StorageConfiguration>("S3StorageConfiguration")({bucketName: S.String}) {}
export const EncoderConfigurationArnList = S.Array(S.String);
export class CreateEncoderConfigurationRequest extends S.Class<CreateEncoderConfigurationRequest>("CreateEncoderConfigurationRequest")({name: S.optional(S.String), video: S.optional(Video), tags: S.optional(Tags)}) {}
export class CreateIngestConfigurationRequest extends S.Class<CreateIngestConfigurationRequest>("CreateIngestConfigurationRequest")({name: S.optional(S.String), stageArn: S.optional(S.String), userId: S.optional(S.String), attributes: S.optional(ParticipantAttributes), ingestProtocol: S.String, insecureIngest: S.optional(S.Boolean), tags: S.optional(Tags)}) {}
export class CreateParticipantTokenRequest extends S.Class<CreateParticipantTokenRequest>("CreateParticipantTokenRequest")({stageArn: S.String, duration: S.optional(S.Number), userId: S.optional(S.String), attributes: S.optional(ParticipantTokenAttributes), capabilities: S.optional(ParticipantTokenCapabilities)}) {}
export class CreateStorageConfigurationRequest extends S.Class<CreateStorageConfigurationRequest>("CreateStorageConfigurationRequest")({name: S.optional(S.String), s3: S3StorageConfiguration, tags: S.optional(Tags)}) {}
export class PublicKey extends S.Class<PublicKey>("PublicKey")({arn: S.optional(S.String), name: S.optional(S.String), publicKeyMaterial: S.optional(S.String), fingerprint: S.optional(S.String), tags: S.optional(Tags)}) {}
export class ImportPublicKeyResponse extends S.Class<ImportPublicKeyResponse>("ImportPublicKeyResponse")({publicKey: S.optional(PublicKey)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Tags}) {}
export class StartParticipantReplicationResponse extends S.Class<StartParticipantReplicationResponse>("StartParticipantReplicationResponse")({accessControlAllowOrigin: S.optional(H.Header("Access-Control-Allow-Origin")), accessControlExposeHeaders: S.optional(H.Header("Access-Control-Expose-Headers")), cacheControl: S.optional(H.Header("Cache-Control")), contentSecurityPolicy: S.optional(H.Header("Content-Security-Policy")), strictTransportSecurity: S.optional(H.Header("Strict-Transport-Security")), xContentTypeOptions: S.optional(H.Header("X-Content-Type-Options")), xFrameOptions: S.optional(H.Header("X-Frame-Options"))}) {}
export class StopParticipantReplicationResponse extends S.Class<StopParticipantReplicationResponse>("StopParticipantReplicationResponse")({accessControlAllowOrigin: S.optional(H.Header("Access-Control-Allow-Origin")), accessControlExposeHeaders: S.optional(H.Header("Access-Control-Expose-Headers")), cacheControl: S.optional(H.Header("Cache-Control")), contentSecurityPolicy: S.optional(H.Header("Content-Security-Policy")), strictTransportSecurity: S.optional(H.Header("Strict-Transport-Security")), xContentTypeOptions: S.optional(H.Header("X-Content-Type-Options")), xFrameOptions: S.optional(H.Header("X-Frame-Options"))}) {}
export class IngestConfiguration extends S.Class<IngestConfiguration>("IngestConfiguration")({name: S.optional(S.String), arn: S.String, ingestProtocol: S.String, streamKey: S.String, stageArn: S.String, participantId: S.String, state: S.String, userId: S.optional(S.String), attributes: S.optional(ParticipantAttributes), tags: S.optional(Tags)}) {}
export class UpdateIngestConfigurationResponse extends S.Class<UpdateIngestConfigurationResponse>("UpdateIngestConfigurationResponse")({ingestConfiguration: S.optional(IngestConfiguration)}) {}
export class StageEndpoints extends S.Class<StageEndpoints>("StageEndpoints")({events: S.optional(S.String), whip: S.optional(S.String), rtmp: S.optional(S.String), rtmps: S.optional(S.String)}) {}
export class Stage extends S.Class<Stage>("Stage")({arn: S.String, name: S.optional(S.String), activeSessionId: S.optional(S.String), tags: S.optional(Tags), autoParticipantRecordingConfiguration: S.optional(AutoParticipantRecordingConfiguration), endpoints: S.optional(StageEndpoints)}) {}
export class UpdateStageResponse extends S.Class<UpdateStageResponse>("UpdateStageResponse")({stage: S.optional(Stage)}) {}
export class GridConfiguration extends S.Class<GridConfiguration>("GridConfiguration")({featuredParticipantAttribute: S.optional(S.String), omitStoppedVideo: S.optional(S.Boolean), videoAspectRatio: S.optional(S.String), videoFillMode: S.optional(S.String), gridGap: S.optional(S.Number), participantOrderAttribute: S.optional(S.String)}) {}
export class PipConfiguration extends S.Class<PipConfiguration>("PipConfiguration")({featuredParticipantAttribute: S.optional(S.String), omitStoppedVideo: S.optional(S.Boolean), videoFillMode: S.optional(S.String), gridGap: S.optional(S.Number), pipParticipantAttribute: S.optional(S.String), pipBehavior: S.optional(S.String), pipOffset: S.optional(S.Number), pipPosition: S.optional(S.String), pipWidth: S.optional(S.Number), pipHeight: S.optional(S.Number), participantOrderAttribute: S.optional(S.String)}) {}
export class ChannelDestinationConfiguration extends S.Class<ChannelDestinationConfiguration>("ChannelDestinationConfiguration")({channelArn: S.String, encoderConfigurationArn: S.optional(S.String)}) {}
export class EncoderConfiguration extends S.Class<EncoderConfiguration>("EncoderConfiguration")({arn: S.String, name: S.optional(S.String), video: S.optional(Video), tags: S.optional(Tags)}) {}
export class Participant extends S.Class<Participant>("Participant")({participantId: S.optional(S.String), userId: S.optional(S.String), state: S.optional(S.String), firstJoinTime: S.optional(S.Date), attributes: S.optional(ParticipantAttributes), published: S.optional(S.Boolean), ispName: S.optional(S.String), osName: S.optional(S.String), osVersion: S.optional(S.String), browserName: S.optional(S.String), browserVersion: S.optional(S.String), sdkVersion: S.optional(S.String), recordingS3BucketName: S.optional(S.String), recordingS3Prefix: S.optional(S.String), recordingState: S.optional(S.String), protocol: S.optional(S.String), replicationType: S.optional(S.String), replicationState: S.optional(S.String), sourceStageArn: S.optional(S.String), sourceSessionId: S.optional(S.String)}) {}
export class StageSession extends S.Class<StageSession>("StageSession")({sessionId: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date)}) {}
export class StorageConfiguration extends S.Class<StorageConfiguration>("StorageConfiguration")({arn: S.String, name: S.optional(S.String), s3: S.optional(S3StorageConfiguration), tags: S.optional(Tags)}) {}
export class EncoderConfigurationSummary extends S.Class<EncoderConfigurationSummary>("EncoderConfigurationSummary")({arn: S.String, name: S.optional(S.String), tags: S.optional(Tags)}) {}
export const EncoderConfigurationSummaryList = S.Array(EncoderConfigurationSummary);
export class IngestConfigurationSummary extends S.Class<IngestConfigurationSummary>("IngestConfigurationSummary")({name: S.optional(S.String), arn: S.String, ingestProtocol: S.String, stageArn: S.String, participantId: S.String, state: S.String, userId: S.optional(S.String)}) {}
export const IngestConfigurationList = S.Array(IngestConfigurationSummary);
export class ParticipantReplica extends S.Class<ParticipantReplica>("ParticipantReplica")({sourceStageArn: S.String, participantId: S.String, sourceSessionId: S.String, destinationStageArn: S.String, destinationSessionId: S.String, replicationState: S.String}) {}
export const ParticipantReplicaList = S.Array(ParticipantReplica);
export class ParticipantSummary extends S.Class<ParticipantSummary>("ParticipantSummary")({participantId: S.optional(S.String), userId: S.optional(S.String), state: S.optional(S.String), firstJoinTime: S.optional(S.Date), published: S.optional(S.Boolean), recordingState: S.optional(S.String), replicationType: S.optional(S.String), replicationState: S.optional(S.String), sourceStageArn: S.optional(S.String), sourceSessionId: S.optional(S.String)}) {}
export const ParticipantList = S.Array(ParticipantSummary);
export class PublicKeySummary extends S.Class<PublicKeySummary>("PublicKeySummary")({arn: S.optional(S.String), name: S.optional(S.String), tags: S.optional(Tags)}) {}
export const PublicKeyList = S.Array(PublicKeySummary);
export class StageSummary extends S.Class<StageSummary>("StageSummary")({arn: S.String, name: S.optional(S.String), activeSessionId: S.optional(S.String), tags: S.optional(Tags)}) {}
export const StageSummaryList = S.Array(StageSummary);
export class StageSessionSummary extends S.Class<StageSessionSummary>("StageSessionSummary")({sessionId: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date)}) {}
export const StageSessionList = S.Array(StageSessionSummary);
export class StorageConfigurationSummary extends S.Class<StorageConfigurationSummary>("StorageConfigurationSummary")({arn: S.String, name: S.optional(S.String), s3: S.optional(S3StorageConfiguration), tags: S.optional(Tags)}) {}
export const StorageConfigurationSummaryList = S.Array(StorageConfigurationSummary);
export class LayoutConfiguration extends S.Class<LayoutConfiguration>("LayoutConfiguration")({grid: S.optional(GridConfiguration), pip: S.optional(PipConfiguration)}) {}
export class CompositionThumbnailConfiguration extends S.Class<CompositionThumbnailConfiguration>("CompositionThumbnailConfiguration")({targetIntervalSeconds: S.optional(S.Number), storage: S.optional(ThumbnailStorageTypeList)}) {}
export const CompositionThumbnailConfigurationList = S.Array(CompositionThumbnailConfiguration);
export class CreateEncoderConfigurationResponse extends S.Class<CreateEncoderConfigurationResponse>("CreateEncoderConfigurationResponse")({encoderConfiguration: S.optional(EncoderConfiguration)}) {}
export class CreateIngestConfigurationResponse extends S.Class<CreateIngestConfigurationResponse>("CreateIngestConfigurationResponse")({ingestConfiguration: S.optional(IngestConfiguration)}) {}
export class CreateStageRequest extends S.Class<CreateStageRequest>("CreateStageRequest")({name: S.optional(S.String), participantTokenConfigurations: S.optional(ParticipantTokenConfigurations), tags: S.optional(Tags), autoParticipantRecordingConfiguration: S.optional(AutoParticipantRecordingConfiguration)}) {}
export class CreateStorageConfigurationResponse extends S.Class<CreateStorageConfigurationResponse>("CreateStorageConfigurationResponse")({storageConfiguration: S.optional(StorageConfiguration)}) {}
export class GetEncoderConfigurationResponse extends S.Class<GetEncoderConfigurationResponse>("GetEncoderConfigurationResponse")({encoderConfiguration: S.optional(EncoderConfiguration)}) {}
export class GetIngestConfigurationResponse extends S.Class<GetIngestConfigurationResponse>("GetIngestConfigurationResponse")({ingestConfiguration: S.optional(IngestConfiguration)}) {}
export class GetParticipantResponse extends S.Class<GetParticipantResponse>("GetParticipantResponse")({participant: S.optional(Participant)}) {}
export class GetPublicKeyResponse extends S.Class<GetPublicKeyResponse>("GetPublicKeyResponse")({publicKey: S.optional(PublicKey)}) {}
export class GetStageSessionResponse extends S.Class<GetStageSessionResponse>("GetStageSessionResponse")({stageSession: S.optional(StageSession)}) {}
export class GetStorageConfigurationResponse extends S.Class<GetStorageConfigurationResponse>("GetStorageConfigurationResponse")({storageConfiguration: S.optional(StorageConfiguration)}) {}
export class ListEncoderConfigurationsResponse extends S.Class<ListEncoderConfigurationsResponse>("ListEncoderConfigurationsResponse")({encoderConfigurations: EncoderConfigurationSummaryList, nextToken: S.optional(S.String)}) {}
export class ListIngestConfigurationsResponse extends S.Class<ListIngestConfigurationsResponse>("ListIngestConfigurationsResponse")({ingestConfigurations: IngestConfigurationList, nextToken: S.optional(S.String)}) {}
export class ListParticipantReplicasResponse extends S.Class<ListParticipantReplicasResponse>("ListParticipantReplicasResponse")({replicas: ParticipantReplicaList, nextToken: S.optional(S.String)}) {}
export class ListParticipantsResponse extends S.Class<ListParticipantsResponse>("ListParticipantsResponse")({participants: ParticipantList, nextToken: S.optional(S.String)}) {}
export class ListPublicKeysResponse extends S.Class<ListPublicKeysResponse>("ListPublicKeysResponse")({publicKeys: PublicKeyList, nextToken: S.optional(S.String)}) {}
export class ListStagesResponse extends S.Class<ListStagesResponse>("ListStagesResponse")({stages: StageSummaryList, nextToken: S.optional(S.String)}) {}
export class ListStageSessionsResponse extends S.Class<ListStageSessionsResponse>("ListStageSessionsResponse")({stageSessions: StageSessionList, nextToken: S.optional(S.String)}) {}
export class ListStorageConfigurationsResponse extends S.Class<ListStorageConfigurationsResponse>("ListStorageConfigurationsResponse")({storageConfigurations: StorageConfigurationSummaryList, nextToken: S.optional(S.String)}) {}
export class DestinationSummary extends S.Class<DestinationSummary>("DestinationSummary")({id: S.String, state: S.String, startTime: S.optional(S.Date), endTime: S.optional(S.Date)}) {}
export const DestinationSummaryList = S.Array(DestinationSummary);
export class ExchangedParticipantToken extends S.Class<ExchangedParticipantToken>("ExchangedParticipantToken")({capabilities: S.optional(ParticipantTokenCapabilities), attributes: S.optional(ParticipantTokenAttributes), userId: S.optional(S.String), expirationTime: S.optional(S.Date)}) {}
export class CompositionRecordingHlsConfiguration extends S.Class<CompositionRecordingHlsConfiguration>("CompositionRecordingHlsConfiguration")({targetSegmentDurationSeconds: S.optional(S.Number)}) {}
export class ParticipantToken extends S.Class<ParticipantToken>("ParticipantToken")({participantId: S.optional(S.String), token: S.optional(S.String), userId: S.optional(S.String), attributes: S.optional(ParticipantTokenAttributes), duration: S.optional(S.Number), capabilities: S.optional(ParticipantTokenCapabilities), expirationTime: S.optional(S.Date)}) {}
export const ParticipantTokenList = S.Array(ParticipantToken);
export class CompositionSummary extends S.Class<CompositionSummary>("CompositionSummary")({arn: S.String, stageArn: S.String, destinations: DestinationSummaryList, state: S.String, tags: S.optional(Tags), startTime: S.optional(S.Date), endTime: S.optional(S.Date)}) {}
export const CompositionSummaryList = S.Array(CompositionSummary);
export class Event extends S.Class<Event>("Event")({name: S.optional(S.String), participantId: S.optional(S.String), eventTime: S.optional(S.Date), remoteParticipantId: S.optional(S.String), errorCode: S.optional(S.String), destinationStageArn: S.optional(S.String), destinationSessionId: S.optional(S.String), replica: S.optional(S.Boolean), previousToken: S.optional(ExchangedParticipantToken), newToken: S.optional(ExchangedParticipantToken)}) {}
export const EventList = S.Array(Event);
export class RecordingConfiguration extends S.Class<RecordingConfiguration>("RecordingConfiguration")({hlsConfiguration: S.optional(CompositionRecordingHlsConfiguration), format: S.optional(S.String)}) {}
export class CreateParticipantTokenResponse extends S.Class<CreateParticipantTokenResponse>("CreateParticipantTokenResponse")({participantToken: S.optional(ParticipantToken)}) {}
export class CreateStageResponse extends S.Class<CreateStageResponse>("CreateStageResponse")({stage: S.optional(Stage), participantTokens: S.optional(ParticipantTokenList)}) {}
export class GetStageResponse extends S.Class<GetStageResponse>("GetStageResponse")({stage: S.optional(Stage)}) {}
export class ListCompositionsResponse extends S.Class<ListCompositionsResponse>("ListCompositionsResponse")({compositions: CompositionSummaryList, nextToken: S.optional(S.String)}) {}
export class ListParticipantEventsResponse extends S.Class<ListParticipantEventsResponse>("ListParticipantEventsResponse")({events: EventList, nextToken: S.optional(S.String)}) {}
export class S3DestinationConfiguration extends S.Class<S3DestinationConfiguration>("S3DestinationConfiguration")({storageConfigurationArn: S.String, encoderConfigurationArns: EncoderConfigurationArnList, recordingConfiguration: S.optional(RecordingConfiguration), thumbnailConfigurations: S.optional(CompositionThumbnailConfigurationList)}) {}
export class S3Detail extends S.Class<S3Detail>("S3Detail")({recordingPrefix: S.String}) {}
export class DestinationConfiguration extends S.Class<DestinationConfiguration>("DestinationConfiguration")({name: S.optional(S.String), channel: S.optional(ChannelDestinationConfiguration), s3: S.optional(S3DestinationConfiguration)}) {}
export const DestinationConfigurationList = S.Array(DestinationConfiguration);
export class DestinationDetail extends S.Class<DestinationDetail>("DestinationDetail")({s3: S.optional(S3Detail)}) {}
export class StartCompositionRequest extends S.Class<StartCompositionRequest>("StartCompositionRequest")({stageArn: S.String, idempotencyToken: S.optional(S.String), layout: S.optional(LayoutConfiguration), destinations: DestinationConfigurationList, tags: S.optional(Tags)}) {}
export class Destination extends S.Class<Destination>("Destination")({id: S.String, state: S.String, startTime: S.optional(S.Date), endTime: S.optional(S.Date), configuration: DestinationConfiguration, detail: S.optional(DestinationDetail)}) {}
export const DestinationList = S.Array(Destination);
export class Composition extends S.Class<Composition>("Composition")({arn: S.String, stageArn: S.String, state: S.String, layout: LayoutConfiguration, destinations: DestinationList, tags: S.optional(Tags), startTime: S.optional(S.Date), endTime: S.optional(S.Date)}) {}
export class GetCompositionResponse extends S.Class<GetCompositionResponse>("GetCompositionResponse")({composition: S.optional(Composition)}) {}
export class StartCompositionResponse extends S.Class<StartCompositionResponse>("StartCompositionResponse")({composition: S.optional(Composition)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class PendingVerification extends S.TaggedError<PendingVerification>()("PendingVerification", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Adds or updates tags for the AWS resource with the specified ARN.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/tags/{resourceArn}", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from the resource with the specified ARN.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an EncoderConfiguration resource. Ensures that no Compositions are using this
 * template; otherwise, returns an error.
 */export const deleteEncoderConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DeleteEncoderConfiguration", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.DeleteEncoderConfiguration" }, DeleteEncoderConfigurationRequest, DeleteEncoderConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a specified IngestConfiguration, so it can no longer be used to broadcast. An IngestConfiguration cannot be deleted if the publisher is actively streaming to a stage, unless `force` is set to `true`.
 */export const deleteIngestConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DeleteIngestConfiguration", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.DeleteIngestConfiguration" }, DeleteIngestConfigurationRequest, DeleteIngestConfigurationResponse, [AccessDeniedException, ConflictException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified public key used to sign stage participant tokens.
 * This invalidates future participant tokens generated using the key pair’s private key.
 */export const deletePublicKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DeletePublicKey", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.DeletePublicKey" }, DeletePublicKeyRequest, DeletePublicKeyResponse, [AccessDeniedException, ConflictException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Shuts down and deletes the specified stage (disconnecting all participants). This operation also
 * removes the `stageArn` from the associated IngestConfiguration, if there are participants
 * using the IngestConfiguration to publish to the stage.
 */export const deleteStage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DeleteStage", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.DeleteStage" }, DeleteStageRequest, DeleteStageResponse, [AccessDeniedException, ConflictException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the storage configuration for the specified ARN.
 * 
 * 
 * If you try to delete a storage configuration that is used by a Composition, you will get an error (409 ConflictException).
 * To avoid this, for all Compositions that reference the storage configuration, first use StopComposition and wait for it to complete,
 * then use DeleteStorageConfiguration.
 */export const deleteStorageConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DeleteStorageConfiguration", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.DeleteStorageConfiguration" }, DeleteStorageConfigurationRequest, DeleteStorageConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disconnects a specified participant from a specified stage. If the participant is publishing using
 * an IngestConfiguration, DisconnectParticipant also updates the `stageArn`
 * in the IngestConfiguration to be an empty string.
 */export const disconnectParticipant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DisconnectParticipant", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.DisconnectParticipant" }, DisconnectParticipantRequest, DisconnectParticipantResponse, [AccessDeniedException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Import a public key to be used for signing stage participant tokens.
 */export const importPublicKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ImportPublicKey", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.ImportPublicKey" }, ImportPublicKeyRequest, ImportPublicKeyResponse, [AccessDeniedException, ConflictException, PendingVerification, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about AWS tags for the specified ARN.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/tags/{resourceArn}", method: "GET", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts replicating a publishing participant from a source stage to a destination stage.
 */export const startParticipantReplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/StartParticipantReplication", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.StartParticipantReplication" }, StartParticipantReplicationRequest, StartParticipantReplicationResponse, [AccessDeniedException, ConflictException, InternalServerException, PendingVerification, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops and deletes a Composition resource. Any broadcast from the Composition resource
 * is stopped.
 */export const stopComposition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/StopComposition", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.StopComposition" }, StopCompositionRequest, StopCompositionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops a replicated participant session.
 */export const stopParticipantReplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/StopParticipantReplication", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.StopParticipantReplication" }, StopParticipantReplicationRequest, StopParticipantReplicationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a specified IngestConfiguration. Only the stage ARN attached to the IngestConfiguration can be updated. An IngestConfiguration that is active cannot be updated.
 */export const updateIngestConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/UpdateIngestConfiguration", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.UpdateIngestConfiguration" }, UpdateIngestConfigurationRequest, UpdateIngestConfigurationResponse, [AccessDeniedException, ConflictException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a stage’s configuration.
 */export const updateStage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/UpdateStage", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.UpdateStage" }, UpdateStageRequest, UpdateStageResponse, [AccessDeniedException, ConflictException, PendingVerification, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an EncoderConfiguration object.
 */export const createEncoderConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/CreateEncoderConfiguration", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.CreateEncoderConfiguration" }, CreateEncoderConfigurationRequest, CreateEncoderConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, PendingVerification, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new IngestConfiguration resource, used to specify the ingest protocol for a stage.
 */export const createIngestConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/CreateIngestConfiguration", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.CreateIngestConfiguration" }, CreateIngestConfigurationRequest, CreateIngestConfigurationResponse, [AccessDeniedException, PendingVerification, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new storage configuration, used to enable recording to Amazon S3.
 * When a StorageConfiguration is created, IVS will modify the S3 bucketPolicy of the provided bucket.
 * This will ensure that IVS has sufficient permissions to write content to the provided bucket.
 */export const createStorageConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/CreateStorageConfiguration", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.CreateStorageConfiguration" }, CreateStorageConfigurationRequest, CreateStorageConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, PendingVerification, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified EncoderConfiguration resource.
 */export const getEncoderConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetEncoderConfiguration", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.GetEncoderConfiguration" }, GetEncoderConfigurationRequest, GetEncoderConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified IngestConfiguration.
 */export const getIngestConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetIngestConfiguration", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.GetIngestConfiguration" }, GetIngestConfigurationRequest, GetIngestConfigurationResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified participant token.
 */export const getParticipant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetParticipant", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.GetParticipant" }, GetParticipantRequest, GetParticipantResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information for the specified public key.
 */export const getPublicKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetPublicKey", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.GetPublicKey" }, GetPublicKeyRequest, GetPublicKeyResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information for the specified stage session.
 */export const getStageSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetStageSession", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.GetStageSession" }, GetStageSessionRequest, GetStageSessionResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the storage configuration for the specified ARN.
 */export const getStorageConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetStorageConfiguration", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.GetStorageConfiguration" }, GetStorageConfigurationRequest, GetStorageConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about all EncoderConfigurations in your account, in the AWS
 * region where the API request is processed.
 */export const listEncoderConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListEncoderConfigurations", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.ListEncoderConfigurations" }, ListEncoderConfigurationsRequest, ListEncoderConfigurationsResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all IngestConfigurations in your account, in the AWS region where the API request is processed.
 */export const listIngestConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListIngestConfigurations", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.ListIngestConfigurations" }, ListIngestConfigurationsRequest, ListIngestConfigurationsResponse, [AccessDeniedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the replicas for a participant from a source stage.
 */export const listParticipantReplicas = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListParticipantReplicas", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.ListParticipantReplicas" }, ListParticipantReplicasRequest, ListParticipantReplicasResponse, [AccessDeniedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all participants in a specified stage session.
 */export const listParticipants = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListParticipants", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.ListParticipants" }, ListParticipantsRequest, ListParticipantsResponse, [AccessDeniedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about all public keys in your account, in the AWS region where the API request is processed.
 */export const listPublicKeys = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListPublicKeys", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.ListPublicKeys" }, ListPublicKeysRequest, ListPublicKeysResponse, [AccessDeniedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about all stages in your account, in the AWS region where the
 * API request is processed.
 */export const listStages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListStages", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.ListStages" }, ListStagesRequest, ListStagesResponse, [AccessDeniedException, ConflictException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets all sessions for a specified stage.
 */export const listStageSessions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListStageSessions", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.ListStageSessions" }, ListStageSessionsRequest, ListStageSessionsResponse, [AccessDeniedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about all storage configurations in your account,
 * in the AWS region where the API request is processed.
 */export const listStorageConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListStorageConfigurations", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.ListStorageConfigurations" }, ListStorageConfigurationsRequest, ListStorageConfigurationsResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an additional token for a specified stage. This can be done after stage creation
 * or when tokens expire. Tokens always are scoped to the stage for which they are
 * created.
 * 
 * 
 * Encryption keys are owned by Amazon IVS and never used directly by your
 * application.
 */export const createParticipantToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/CreateParticipantToken", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.CreateParticipantToken" }, CreateParticipantTokenRequest, CreateParticipantTokenResponse, [AccessDeniedException, PendingVerification, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new stage (and optionally participant tokens).
 */export const createStage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/CreateStage", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.CreateStage" }, CreateStageRequest, CreateStageResponse, [AccessDeniedException, PendingVerification, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information for the specified stage.
 */export const getStage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetStage", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.GetStage" }, GetStageRequest, GetStageResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about all Compositions in your account, in the AWS region
 * where the API request is processed.
 */export const listCompositions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListCompositions", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.ListCompositions" }, ListCompositionsRequest, ListCompositionsResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists events for a specified participant that occurred during a specified stage
 * session.
 */export const listParticipantEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListParticipantEvents", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.ListParticipantEvents" }, ListParticipantEventsRequest, ListParticipantEventsResponse, [AccessDeniedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get information about the specified Composition resource.
 */export const getComposition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetComposition", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.GetComposition" }, GetCompositionRequest, GetCompositionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a Composition from a stage based on the configuration provided in the
 * request.
 * 
 * 
 * A Composition is an ephemeral resource that exists after this operation returns
 * successfully. Composition stops and the resource is deleted:
 * 
 * 
 * 
 * - When StopComposition is called.
 * 
 * 
 * 
 * - After a 1-minute timeout, when all participants are disconnected from the
 * stage.
 * 
 * 
 * 
 * - After a 1-minute timeout, if there are no participants in the stage when
 * StartComposition is called.
 * 
 * 
 * 
 * - When broadcasting to the IVS channel fails and all retries are exhausted.
 * 
 * 
 * 
 * - When broadcasting is disconnected and all attempts to reconnect are
 * exhausted.
 */export const startComposition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/StartComposition", sdkId: "IVS RealTime", sigV4ServiceName: "ivs", name: "AmazonInteractiveVideoServiceRealTime.StartComposition" }, StartCompositionRequest, StartCompositionResponse, [AccessDeniedException, ConflictException, InternalServerException, PendingVerification, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

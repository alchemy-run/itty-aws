import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ChimeSDKMeetings extends AWSServiceClient {
  batchCreateAttendee(
    input: BatchCreateAttendeeRequest,
  ): Effect.Effect<
    BatchCreateAttendeeResponse,
    | BadRequestException
    | ForbiddenException
    | LimitExceededException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnprocessableEntityException
    | CommonAwsError
  >;
  batchUpdateAttendeeCapabilitiesExcept(
    input: BatchUpdateAttendeeCapabilitiesExceptRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createAttendee(
    input: CreateAttendeeRequest,
  ): Effect.Effect<
    CreateAttendeeResponse,
    | BadRequestException
    | ForbiddenException
    | LimitExceededException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnprocessableEntityException
    | CommonAwsError
  >;
  createMeeting(
    input: CreateMeetingRequest,
  ): Effect.Effect<
    CreateMeetingResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | LimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createMeetingWithAttendees(
    input: CreateMeetingWithAttendeesRequest,
  ): Effect.Effect<
    CreateMeetingWithAttendeesResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | LimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteAttendee(
    input: DeleteAttendeeRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteMeeting(
    input: DeleteMeetingRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getAttendee(
    input: GetAttendeeRequest,
  ): Effect.Effect<
    GetAttendeeResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getMeeting(
    input: GetMeetingRequest,
  ): Effect.Effect<
    GetMeetingResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listAttendees(
    input: ListAttendeesRequest,
  ): Effect.Effect<
    ListAttendeesResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | ForbiddenException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  startMeetingTranscription(
    input: StartMeetingTranscriptionRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | LimitExceededException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnprocessableEntityException
    | CommonAwsError
  >;
  stopMeetingTranscription(
    input: StopMeetingTranscriptionRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnprocessableEntityException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | BadRequestException
    | ForbiddenException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | TooManyTagsException
    | UnauthorizedException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | BadRequestException
    | ForbiddenException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateAttendeeCapabilities(
    input: UpdateAttendeeCapabilitiesRequest,
  ): Effect.Effect<
    UpdateAttendeeCapabilitiesResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
}

export declare class ChimeSdkMeetings extends ChimeSDKMeetings {}

export type AmazonResourceName = string;

export type Arn = string;

export interface Attendee {
  ExternalUserId?: string;
  AttendeeId?: string;
  JoinToken?: string;
  Capabilities?: AttendeeCapabilities;
}
export interface AttendeeCapabilities {
  Audio: MediaCapabilities;
  Video: MediaCapabilities;
  Content: MediaCapabilities;
}
export interface AttendeeFeatures {
  MaxCount?: number;
}
export interface AttendeeIdItem {
  AttendeeId: string;
}
export type AttendeeIdsList = Array<AttendeeIdItem>;
export type AttendeeList = Array<Attendee>;
export type AttendeeMax = number;

export interface AudioFeatures {
  EchoReduction?: MeetingFeatureStatus;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type BatchCreateAttendeeErrorList = Array<CreateAttendeeError>;
export interface BatchCreateAttendeeRequest {
  MeetingId: string;
  Attendees: Array<CreateAttendeeRequestItem>;
}
export interface BatchCreateAttendeeResponse {
  Attendees?: Array<Attendee>;
  Errors?: Array<CreateAttendeeError>;
}
export interface BatchUpdateAttendeeCapabilitiesExceptRequest {
  MeetingId: string;
  ExcludedAttendeeIds: Array<AttendeeIdItem>;
  Capabilities: AttendeeCapabilities;
}
export type ChimeSdkMeetingsBoolean = boolean;

export type ClientRequestToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface ContentFeatures {
  MaxResolution?: ContentResolution;
}
export type ContentResolution = "NONE" | "FHD" | "UHD";
export interface CreateAttendeeError {
  ExternalUserId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export interface CreateAttendeeRequest {
  MeetingId: string;
  ExternalUserId: string;
  Capabilities?: AttendeeCapabilities;
}
export interface CreateAttendeeRequestItem {
  ExternalUserId: string;
  Capabilities?: AttendeeCapabilities;
}
export type CreateAttendeeRequestItemList = Array<CreateAttendeeRequestItem>;
export interface CreateAttendeeResponse {
  Attendee?: Attendee;
}
export interface CreateMeetingRequest {
  ClientRequestToken: string;
  MediaRegion: string;
  MeetingHostId?: string;
  ExternalMeetingId: string;
  NotificationsConfiguration?: NotificationsConfiguration;
  MeetingFeatures?: MeetingFeaturesConfiguration;
  PrimaryMeetingId?: string;
  TenantIds?: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateMeetingResponse {
  Meeting?: Meeting;
}
export interface CreateMeetingWithAttendeesRequest {
  ClientRequestToken: string;
  MediaRegion: string;
  MeetingHostId?: string;
  ExternalMeetingId: string;
  MeetingFeatures?: MeetingFeaturesConfiguration;
  NotificationsConfiguration?: NotificationsConfiguration;
  Attendees: Array<CreateAttendeeRequestItem>;
  PrimaryMeetingId?: string;
  TenantIds?: Array<string>;
  Tags?: Array<Tag>;
}
export type CreateMeetingWithAttendeesRequestItemList =
  Array<CreateAttendeeRequestItem>;
export interface CreateMeetingWithAttendeesResponse {
  Meeting?: Meeting;
  Attendees?: Array<Attendee>;
  Errors?: Array<CreateAttendeeError>;
}
export interface DeleteAttendeeRequest {
  MeetingId: string;
  AttendeeId: string;
}
export interface DeleteMeetingRequest {
  MeetingId: string;
}
export interface EngineTranscribeMedicalSettings {
  LanguageCode: TranscribeMedicalLanguageCode;
  Specialty: TranscribeMedicalSpecialty;
  Type: TranscribeMedicalType;
  VocabularyName?: string;
  Region?: TranscribeMedicalRegion;
  ContentIdentificationType?: TranscribeMedicalContentIdentificationType;
}
export interface EngineTranscribeSettings {
  LanguageCode?: TranscribeLanguageCode;
  VocabularyFilterMethod?: TranscribeVocabularyFilterMethod;
  VocabularyFilterName?: string;
  VocabularyName?: string;
  Region?: TranscribeRegion;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: TranscribePartialResultsStability;
  ContentIdentificationType?: TranscribeContentIdentificationType;
  ContentRedactionType?: TranscribeContentRedactionType;
  PiiEntityTypes?: string;
  LanguageModelName?: string;
  IdentifyLanguage?: boolean;
  LanguageOptions?: string;
  PreferredLanguage?: TranscribeLanguageCode;
  VocabularyNames?: string;
  VocabularyFilterNames?: string;
}
export type ExternalMeetingId = string;

export type ExternalUserId = string;

export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface GetAttendeeRequest {
  MeetingId: string;
  AttendeeId: string;
}
export interface GetAttendeeResponse {
  Attendee?: Attendee;
}
export interface GetMeetingRequest {
  MeetingId: string;
}
export interface GetMeetingResponse {
  Meeting?: Meeting;
}
export type GuidString = string;

export type JoinTokenString = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface ListAttendeesRequest {
  MeetingId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAttendeesResponse {
  Attendees?: Array<Attendee>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type MediaCapabilities = "SEND_RECEIVE" | "SEND" | "RECEIVE" | "NONE";
export interface MediaPlacement {
  AudioHostUrl?: string;
  AudioFallbackUrl?: string;
  SignalingUrl?: string;
  TurnControlUrl?: string;
  ScreenDataUrl?: string;
  ScreenViewingUrl?: string;
  ScreenSharingUrl?: string;
  EventIngestionUrl?: string;
}
export type MediaRegion = string;

export interface Meeting {
  MeetingId?: string;
  MeetingHostId?: string;
  ExternalMeetingId?: string;
  MediaRegion?: string;
  MediaPlacement?: MediaPlacement;
  MeetingFeatures?: MeetingFeaturesConfiguration;
  PrimaryMeetingId?: string;
  TenantIds?: Array<string>;
  MeetingArn?: string;
}
export interface MeetingFeaturesConfiguration {
  Audio?: AudioFeatures;
  Video?: VideoFeatures;
  Content?: ContentFeatures;
  Attendee?: AttendeeFeatures;
}
export type MeetingFeatureStatus = "AVAILABLE" | "UNAVAILABLE";
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface NotificationsConfiguration {
  LambdaFunctionArn?: string;
  SnsTopicArn?: string;
  SqsQueueArn?: string;
}
export type PrimaryMeetingId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly RequestId?: string;
  readonly ResourceName?: string;
}> {}
export type ResultMax = number;

export type RetryAfterSeconds = string;

export declare class ServiceFailureException extends EffectData.TaggedError(
  "ServiceFailureException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly RequestId?: string;
  readonly RetryAfterSeconds?: string;
}> {}
export interface StartMeetingTranscriptionRequest {
  MeetingId: string;
  TranscriptionConfiguration: TranscriptionConfiguration;
}
export interface StopMeetingTranscriptionRequest {
  MeetingId: string;
}
export type ChimeSdkMeetingsString = string;

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

export type TenantId = string;

export type TenantIdList = Array<string>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly RequestId?: string;
  readonly ResourceName?: string;
}> {}
export type TranscribeContentIdentificationType = "PII";
export type TranscribeContentRedactionType = "PII";
export type TranscribeLanguageCode =
  | "EN_US"
  | "EN_GB"
  | "ES_US"
  | "FR_CA"
  | "FR_FR"
  | "EN_AU"
  | "IT_IT"
  | "DE_DE"
  | "PT_BR"
  | "JA_JP"
  | "KO_KR"
  | "ZH_CN"
  | "TH_TH"
  | "HI_IN";
export type TranscribeLanguageModelName = string;

export type TranscribeLanguageOptions = string;

export type TranscribeMedicalContentIdentificationType = "PHI";
export type TranscribeMedicalLanguageCode = "EN_US";
export type TranscribeMedicalRegion =
  | "US_EAST_1"
  | "US_EAST_2"
  | "US_WEST_2"
  | "AP_SOUTHEAST_2"
  | "CA_CENTRAL_1"
  | "EU_WEST_1"
  | "AUTO";
export type TranscribeMedicalSpecialty =
  | "PRIMARYCARE"
  | "CARDIOLOGY"
  | "NEUROLOGY"
  | "ONCOLOGY"
  | "RADIOLOGY"
  | "UROLOGY";
export type TranscribeMedicalType = "CONVERSATION" | "DICTATION";
export type TranscribePartialResultsStability = "LOW" | "MEDIUM" | "HIGH";
export type TranscribePiiEntityTypes = string;

export type TranscribeRegion =
  | "US_EAST_2"
  | "US_EAST_1"
  | "US_WEST_2"
  | "AP_NORTHEAST_2"
  | "AP_SOUTHEAST_2"
  | "AP_NORTHEAST_1"
  | "CA_CENTRAL_1"
  | "EU_CENTRAL_1"
  | "EU_WEST_1"
  | "EU_WEST_2"
  | "SA_EAST_1"
  | "AUTO"
  | "US_GOV_WEST_1";
export type TranscribeVocabularyFilterMethod = "REMOVE" | "MASK" | "TAG";
export type TranscribeVocabularyNamesOrFilterNamesString = string;

export interface TranscriptionConfiguration {
  EngineTranscribeSettings?: EngineTranscribeSettings;
  EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings;
}
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class UnprocessableEntityException extends EffectData.TaggedError(
  "UnprocessableEntityException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAttendeeCapabilitiesRequest {
  MeetingId: string;
  AttendeeId: string;
  Capabilities: AttendeeCapabilities;
}
export interface UpdateAttendeeCapabilitiesResponse {
  Attendee?: Attendee;
}
export interface VideoFeatures {
  MaxResolution?: VideoResolution;
}
export type VideoResolution = "NONE" | "HD" | "FHD";
export declare namespace BatchCreateAttendee {
  export type Input = BatchCreateAttendeeRequest;
  export type Output = BatchCreateAttendeeResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | LimitExceededException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace BatchUpdateAttendeeCapabilitiesExcept {
  export type Input = BatchUpdateAttendeeCapabilitiesExceptRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateAttendee {
  export type Input = CreateAttendeeRequest;
  export type Output = CreateAttendeeResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | LimitExceededException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CreateMeeting {
  export type Input = CreateMeetingRequest;
  export type Output = CreateMeetingResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | LimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateMeetingWithAttendees {
  export type Input = CreateMeetingWithAttendeesRequest;
  export type Output = CreateMeetingWithAttendeesResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | LimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteAttendee {
  export type Input = DeleteAttendeeRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteMeeting {
  export type Input = DeleteMeetingRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetAttendee {
  export type Input = GetAttendeeRequest;
  export type Output = GetAttendeeResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetMeeting {
  export type Input = GetMeetingRequest;
  export type Output = GetMeetingResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListAttendees {
  export type Input = ListAttendeesRequest;
  export type Output = ListAttendeesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace StartMeetingTranscription {
  export type Input = StartMeetingTranscriptionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | LimitExceededException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace StopMeetingTranscription {
  export type Input = StopMeetingTranscriptionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | TooManyTagsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateAttendeeCapabilities {
  export type Input = UpdateAttendeeCapabilitiesRequest;
  export type Output = UpdateAttendeeCapabilitiesResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

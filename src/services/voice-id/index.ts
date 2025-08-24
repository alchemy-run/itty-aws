import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class VoiceID extends AWSServiceClient {
  associateFraudster(
    input: AssociateFraudsterRequest,
  ): Effect.Effect<
    AssociateFraudsterResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createWatchlist(
    input: CreateWatchlistRequest,
  ): Effect.Effect<
    CreateWatchlistResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteFraudster(
    input: DeleteFraudsterRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteSpeaker(
    input: DeleteSpeakerRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteWatchlist(
    input: DeleteWatchlistRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeFraudster(
    input: DescribeFraudsterRequest,
  ): Effect.Effect<
    DescribeFraudsterResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeFraudsterRegistrationJob(
    input: DescribeFraudsterRegistrationJobRequest,
  ): Effect.Effect<
    DescribeFraudsterRegistrationJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeSpeaker(
    input: DescribeSpeakerRequest,
  ): Effect.Effect<
    DescribeSpeakerResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeSpeakerEnrollmentJob(
    input: DescribeSpeakerEnrollmentJobRequest,
  ): Effect.Effect<
    DescribeSpeakerEnrollmentJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeWatchlist(
    input: DescribeWatchlistRequest,
  ): Effect.Effect<
    DescribeWatchlistResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateFraudster(
    input: DisassociateFraudsterRequest,
  ): Effect.Effect<
    DisassociateFraudsterResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  evaluateSession(
    input: EvaluateSessionRequest,
  ): Effect.Effect<
    EvaluateSessionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFraudsterRegistrationJobs(
    input: ListFraudsterRegistrationJobsRequest,
  ): Effect.Effect<
    ListFraudsterRegistrationJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFraudsters(
    input: ListFraudstersRequest,
  ): Effect.Effect<
    ListFraudstersResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSpeakerEnrollmentJobs(
    input: ListSpeakerEnrollmentJobsRequest,
  ): Effect.Effect<
    ListSpeakerEnrollmentJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSpeakers(
    input: ListSpeakersRequest,
  ): Effect.Effect<
    ListSpeakersResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listWatchlists(
    input: ListWatchlistsRequest,
  ): Effect.Effect<
    ListWatchlistsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  optOutSpeaker(
    input: OptOutSpeakerRequest,
  ): Effect.Effect<
    OptOutSpeakerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startFraudsterRegistrationJob(
    input: StartFraudsterRegistrationJobRequest,
  ): Effect.Effect<
    StartFraudsterRegistrationJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startSpeakerEnrollmentJob(
    input: StartSpeakerEnrollmentJobRequest,
  ): Effect.Effect<
    StartSpeakerEnrollmentJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateWatchlist(
    input: UpdateWatchlistRequest,
  ): Effect.Effect<
    UpdateWatchlistResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDomain(
    input: CreateDomainRequest,
  ): Effect.Effect<
    CreateDomainResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDomain(
    input: DeleteDomainRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDomain(
    input: DescribeDomainRequest,
  ): Effect.Effect<
    DescribeDomainResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDomains(
    input: ListDomainsRequest,
  ): Effect.Effect<
    ListDomainsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDomain(
    input: UpdateDomainRequest,
  ): Effect.Effect<
    UpdateDomainResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class VoiceId extends VoiceID {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AmazonResourceName = string;

export type Arn = string;

export interface AssociateFraudsterRequest {
  DomainId: string;
  WatchlistId: string;
  FraudsterId: string;
}
export interface AssociateFraudsterResponse {
  Fraudster?: Fraudster;
}
export interface AuthenticationConfiguration {
  AcceptanceThreshold: number;
}
export type AuthenticationDecision = string;

export interface AuthenticationResult {
  AuthenticationResultId?: string;
  AudioAggregationStartedAt?: Date | string;
  AudioAggregationEndedAt?: Date | string;
  CustomerSpeakerId?: string;
  GeneratedSpeakerId?: string;
  Decision?: string;
  Score?: number;
  Configuration?: AuthenticationConfiguration;
}
export type VoiceIdBoolean = boolean;

export type ClientTokenString = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly ConflictType?: string;
}> {}
export type ConflictType = string;

export interface CreateDomainRequest {
  Name: string;
  Description?: string;
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
  ClientToken?: string;
  Tags?: Array<Tag>;
}
export interface CreateDomainResponse {
  Domain?: Domain;
}
export interface CreateWatchlistRequest {
  DomainId: string;
  Name: string;
  Description?: string;
  ClientToken?: string;
}
export interface CreateWatchlistResponse {
  Watchlist?: Watchlist;
}
export type CustomerSpeakerId = string;

export interface DeleteDomainRequest {
  DomainId: string;
}
export interface DeleteFraudsterRequest {
  DomainId: string;
  FraudsterId: string;
}
export interface DeleteSpeakerRequest {
  DomainId: string;
  SpeakerId: string;
}
export interface DeleteWatchlistRequest {
  DomainId: string;
  WatchlistId: string;
}
export interface DescribeDomainRequest {
  DomainId: string;
}
export interface DescribeDomainResponse {
  Domain?: Domain;
}
export interface DescribeFraudsterRegistrationJobRequest {
  DomainId: string;
  JobId: string;
}
export interface DescribeFraudsterRegistrationJobResponse {
  Job?: FraudsterRegistrationJob;
}
export interface DescribeFraudsterRequest {
  DomainId: string;
  FraudsterId: string;
}
export interface DescribeFraudsterResponse {
  Fraudster?: Fraudster;
}
export interface DescribeSpeakerEnrollmentJobRequest {
  DomainId: string;
  JobId: string;
}
export interface DescribeSpeakerEnrollmentJobResponse {
  Job?: SpeakerEnrollmentJob;
}
export interface DescribeSpeakerRequest {
  DomainId: string;
  SpeakerId: string;
}
export interface DescribeSpeakerResponse {
  Speaker?: Speaker;
}
export interface DescribeWatchlistRequest {
  DomainId: string;
  WatchlistId: string;
}
export interface DescribeWatchlistResponse {
  Watchlist?: Watchlist;
}
export type Description = string;

export interface DisassociateFraudsterRequest {
  DomainId: string;
  WatchlistId: string;
  FraudsterId: string;
}
export interface DisassociateFraudsterResponse {
  Fraudster?: Fraudster;
}
export interface Domain {
  DomainId?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  DomainStatus?: string;
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  ServerSideEncryptionUpdateDetails?: ServerSideEncryptionUpdateDetails;
  WatchlistDetails?: WatchlistDetails;
}
export type DomainId = string;

export type DomainName = string;

export type DomainStatus = string;

export type DomainSummaries = Array<DomainSummary>;
export interface DomainSummary {
  DomainId?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  DomainStatus?: string;
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  ServerSideEncryptionUpdateDetails?: ServerSideEncryptionUpdateDetails;
  WatchlistDetails?: WatchlistDetails;
}
export type DuplicateRegistrationAction = string;

export interface EnrollmentConfig {
  ExistingEnrollmentAction?: string;
  FraudDetectionConfig?: EnrollmentJobFraudDetectionConfig;
}
export interface EnrollmentJobFraudDetectionConfig {
  FraudDetectionAction?: string;
  RiskThreshold?: number;
  WatchlistIds?: Array<string>;
}
export type EnrollmentJobFraudDetectionConfigWatchlistIds = Array<string>;
export interface EvaluateSessionRequest {
  DomainId: string;
  SessionNameOrId: string;
}
export interface EvaluateSessionResponse {
  DomainId?: string;
  SessionId?: string;
  SessionName?: string;
  StreamingStatus?: string;
  AuthenticationResult?: AuthenticationResult;
  FraudDetectionResult?: FraudDetectionResult;
}
export type ExistingEnrollmentAction = string;

export interface FailureDetails {
  StatusCode?: number;
  Message?: string;
}
export type FraudDetectionAction = string;

export interface FraudDetectionConfiguration {
  RiskThreshold?: number;
  WatchlistId?: string;
}
export type FraudDetectionDecision = string;

export type FraudDetectionReason = string;

export type FraudDetectionReasons = Array<string>;
export interface FraudDetectionResult {
  FraudDetectionResultId?: string;
  AudioAggregationStartedAt?: Date | string;
  AudioAggregationEndedAt?: Date | string;
  Configuration?: FraudDetectionConfiguration;
  Decision?: string;
  Reasons?: Array<string>;
  RiskDetails?: FraudRiskDetails;
}
export interface FraudRiskDetails {
  KnownFraudsterRisk: KnownFraudsterRisk;
  VoiceSpoofingRisk: VoiceSpoofingRisk;
}
export interface Fraudster {
  DomainId?: string;
  GeneratedFraudsterId?: string;
  CreatedAt?: Date | string;
  WatchlistIds?: Array<string>;
}
export type FraudsterId = string;

export interface FraudsterRegistrationJob {
  JobName?: string;
  JobId?: string;
  JobStatus?: string;
  DomainId?: string;
  DataAccessRoleArn?: string;
  RegistrationConfig?: RegistrationConfig;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  CreatedAt?: Date | string;
  EndedAt?: Date | string;
  FailureDetails?: FailureDetails;
  JobProgress?: JobProgress;
}
export type FraudsterRegistrationJobStatus = string;

export type FraudsterRegistrationJobSummaries =
  Array<FraudsterRegistrationJobSummary>;
export interface FraudsterRegistrationJobSummary {
  JobName?: string;
  JobId?: string;
  JobStatus?: string;
  DomainId?: string;
  CreatedAt?: Date | string;
  EndedAt?: Date | string;
  FailureDetails?: FailureDetails;
  JobProgress?: JobProgress;
}
export type FraudsterSummaries = Array<FraudsterSummary>;
export interface FraudsterSummary {
  DomainId?: string;
  GeneratedFraudsterId?: string;
  CreatedAt?: Date | string;
  WatchlistIds?: Array<string>;
}
export type GeneratedFraudsterId = string;

export type GeneratedSpeakerId = string;

export type IamRoleArn = string;

export interface InputDataConfig {
  S3Uri: string;
}
export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type JobId = string;

export type JobName = string;

export interface JobProgress {
  PercentComplete?: number;
}
export type KmsKeyId = string;

export interface KnownFraudsterRisk {
  RiskScore: number;
  GeneratedFraudsterId?: string;
}
export interface ListDomainsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDomainsResponse {
  DomainSummaries?: Array<DomainSummary>;
  NextToken?: string;
}
export interface ListFraudsterRegistrationJobsRequest {
  DomainId: string;
  JobStatus?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFraudsterRegistrationJobsResponse {
  JobSummaries?: Array<FraudsterRegistrationJobSummary>;
  NextToken?: string;
}
export interface ListFraudstersRequest {
  DomainId: string;
  WatchlistId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFraudstersResponse {
  FraudsterSummaries?: Array<FraudsterSummary>;
  NextToken?: string;
}
export interface ListSpeakerEnrollmentJobsRequest {
  DomainId: string;
  JobStatus?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSpeakerEnrollmentJobsResponse {
  JobSummaries?: Array<SpeakerEnrollmentJobSummary>;
  NextToken?: string;
}
export interface ListSpeakersRequest {
  DomainId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSpeakersResponse {
  SpeakerSummaries?: Array<SpeakerSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListWatchlistsRequest {
  DomainId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListWatchlistsResponse {
  WatchlistSummaries?: Array<WatchlistSummary>;
  NextToken?: string;
}
export type MaxResultsForList = number;

export type MaxResultsForListDomainFe = number;

export type NextToken = string;

export interface OptOutSpeakerRequest {
  DomainId: string;
  SpeakerId: string;
}
export interface OptOutSpeakerResponse {
  Speaker?: Speaker;
}
export interface OutputDataConfig {
  S3Uri: string;
  KmsKeyId?: string;
}
export interface RegistrationConfig {
  DuplicateRegistrationAction?: string;
  FraudsterSimilarityThreshold?: number;
  WatchlistIds?: Array<string>;
}
export type RegistrationConfigWatchlistIds = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
}> {}
export type ResourceType = string;

export type ResponseWatchlistIds = Array<string>;
export type S3Uri = string;

export type Score = number;

export interface ServerSideEncryptionConfiguration {
  KmsKeyId: string;
}
export interface ServerSideEncryptionUpdateDetails {
  OldKmsKeyId?: string;
  UpdateStatus?: string;
  Message?: string;
}
export type ServerSideEncryptionUpdateStatus = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export type SessionId = string;

export type SessionName = string;

export type SessionNameOrId = string;

export interface Speaker {
  DomainId?: string;
  CustomerSpeakerId?: string;
  GeneratedSpeakerId?: string;
  Status?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  LastAccessedAt?: Date | string;
}
export interface SpeakerEnrollmentJob {
  JobName?: string;
  JobId?: string;
  JobStatus?: string;
  DomainId?: string;
  DataAccessRoleArn?: string;
  EnrollmentConfig?: EnrollmentConfig;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  CreatedAt?: Date | string;
  EndedAt?: Date | string;
  FailureDetails?: FailureDetails;
  JobProgress?: JobProgress;
}
export type SpeakerEnrollmentJobStatus = string;

export type SpeakerEnrollmentJobSummaries = Array<SpeakerEnrollmentJobSummary>;
export interface SpeakerEnrollmentJobSummary {
  JobName?: string;
  JobId?: string;
  JobStatus?: string;
  DomainId?: string;
  CreatedAt?: Date | string;
  EndedAt?: Date | string;
  FailureDetails?: FailureDetails;
  JobProgress?: JobProgress;
}
export type SpeakerId = string;

export type SpeakerStatus = string;

export type SpeakerSummaries = Array<SpeakerSummary>;
export interface SpeakerSummary {
  DomainId?: string;
  CustomerSpeakerId?: string;
  GeneratedSpeakerId?: string;
  Status?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  LastAccessedAt?: Date | string;
}
export interface StartFraudsterRegistrationJobRequest {
  ClientToken?: string;
  JobName?: string;
  DomainId: string;
  DataAccessRoleArn: string;
  RegistrationConfig?: RegistrationConfig;
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
}
export interface StartFraudsterRegistrationJobResponse {
  Job?: FraudsterRegistrationJob;
}
export interface StartSpeakerEnrollmentJobRequest {
  ClientToken?: string;
  JobName?: string;
  DomainId: string;
  DataAccessRoleArn: string;
  EnrollmentConfig?: EnrollmentConfig;
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
}
export interface StartSpeakerEnrollmentJobResponse {
  Job?: SpeakerEnrollmentJob;
}
export type StreamingStatus = string;

export type VoiceIdString = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type Timestamp = Date | string;

export type UniqueIdLarge = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateDomainRequest {
  DomainId: string;
  Name: string;
  Description?: string;
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
}
export interface UpdateDomainResponse {
  Domain?: Domain;
}
export interface UpdateWatchlistRequest {
  DomainId: string;
  WatchlistId: string;
  Name?: string;
  Description?: string;
}
export interface UpdateWatchlistResponse {
  Watchlist?: Watchlist;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export interface VoiceSpoofingRisk {
  RiskScore: number;
}
export interface Watchlist {
  DomainId?: string;
  WatchlistId?: string;
  Name?: string;
  Description?: string;
  DefaultWatchlist?: boolean;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type WatchlistDescription = string;

export interface WatchlistDetails {
  DefaultWatchlistId: string;
}
export type WatchlistId = string;

export type WatchlistName = string;

export type WatchlistSummaries = Array<WatchlistSummary>;
export interface WatchlistSummary {
  DomainId?: string;
  WatchlistId?: string;
  Name?: string;
  Description?: string;
  DefaultWatchlist?: boolean;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export declare namespace AssociateFraudster {
  export type Input = AssociateFraudsterRequest;
  export type Output = AssociateFraudsterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWatchlist {
  export type Input = CreateWatchlistRequest;
  export type Output = CreateWatchlistResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFraudster {
  export type Input = DeleteFraudsterRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSpeaker {
  export type Input = DeleteSpeakerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWatchlist {
  export type Input = DeleteWatchlistRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeFraudster {
  export type Input = DescribeFraudsterRequest;
  export type Output = DescribeFraudsterResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeFraudsterRegistrationJob {
  export type Input = DescribeFraudsterRegistrationJobRequest;
  export type Output = DescribeFraudsterRegistrationJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSpeaker {
  export type Input = DescribeSpeakerRequest;
  export type Output = DescribeSpeakerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSpeakerEnrollmentJob {
  export type Input = DescribeSpeakerEnrollmentJobRequest;
  export type Output = DescribeSpeakerEnrollmentJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeWatchlist {
  export type Input = DescribeWatchlistRequest;
  export type Output = DescribeWatchlistResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateFraudster {
  export type Input = DisassociateFraudsterRequest;
  export type Output = DisassociateFraudsterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EvaluateSession {
  export type Input = EvaluateSessionRequest;
  export type Output = EvaluateSessionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFraudsterRegistrationJobs {
  export type Input = ListFraudsterRegistrationJobsRequest;
  export type Output = ListFraudsterRegistrationJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFraudsters {
  export type Input = ListFraudstersRequest;
  export type Output = ListFraudstersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSpeakerEnrollmentJobs {
  export type Input = ListSpeakerEnrollmentJobsRequest;
  export type Output = ListSpeakerEnrollmentJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSpeakers {
  export type Input = ListSpeakersRequest;
  export type Output = ListSpeakersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWatchlists {
  export type Input = ListWatchlistsRequest;
  export type Output = ListWatchlistsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace OptOutSpeaker {
  export type Input = OptOutSpeakerRequest;
  export type Output = OptOutSpeakerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartFraudsterRegistrationJob {
  export type Input = StartFraudsterRegistrationJobRequest;
  export type Output = StartFraudsterRegistrationJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartSpeakerEnrollmentJob {
  export type Input = StartSpeakerEnrollmentJobRequest;
  export type Output = StartSpeakerEnrollmentJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWatchlist {
  export type Input = UpdateWatchlistRequest;
  export type Output = UpdateWatchlistResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDomain {
  export type Input = CreateDomainRequest;
  export type Output = CreateDomainResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDomain {
  export type Input = DeleteDomainRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDomain {
  export type Input = DescribeDomainRequest;
  export type Output = DescribeDomainResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDomains {
  export type Input = ListDomainsRequest;
  export type Output = ListDomainsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDomain {
  export type Input = UpdateDomainRequest;
  export type Output = UpdateDomainResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "Voice ID",
  version: "2021-09-27",
  protocol: "awsJson1_0",
  endpointPrefix: "voiceid",
  targetPrefix: "VoiceID",
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;

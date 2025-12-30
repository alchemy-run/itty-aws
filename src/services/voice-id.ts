import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class AssociateFraudsterRequest extends S.Class<AssociateFraudsterRequest>("AssociateFraudsterRequest")({DomainId: S.String, WatchlistId: S.String, FraudsterId: S.String}) {}
export class CreateWatchlistRequest extends S.Class<CreateWatchlistRequest>("CreateWatchlistRequest")({DomainId: S.String, Name: S.String, Description: S.optional(S.String), ClientToken: S.optional(S.String)}) {}
export class DeleteFraudsterRequest extends S.Class<DeleteFraudsterRequest>("DeleteFraudsterRequest")({DomainId: S.String, FraudsterId: S.String}) {}
export class DeleteSpeakerRequest extends S.Class<DeleteSpeakerRequest>("DeleteSpeakerRequest")({DomainId: S.String, SpeakerId: S.String}) {}
export class DeleteWatchlistRequest extends S.Class<DeleteWatchlistRequest>("DeleteWatchlistRequest")({DomainId: S.String, WatchlistId: S.String}) {}
export class DescribeFraudsterRequest extends S.Class<DescribeFraudsterRequest>("DescribeFraudsterRequest")({DomainId: S.String, FraudsterId: S.String}) {}
export class DescribeFraudsterRegistrationJobRequest extends S.Class<DescribeFraudsterRegistrationJobRequest>("DescribeFraudsterRegistrationJobRequest")({DomainId: S.String, JobId: S.String}) {}
export class DescribeSpeakerRequest extends S.Class<DescribeSpeakerRequest>("DescribeSpeakerRequest")({DomainId: S.String, SpeakerId: S.String}) {}
export class DescribeSpeakerEnrollmentJobRequest extends S.Class<DescribeSpeakerEnrollmentJobRequest>("DescribeSpeakerEnrollmentJobRequest")({DomainId: S.String, JobId: S.String}) {}
export class DescribeWatchlistRequest extends S.Class<DescribeWatchlistRequest>("DescribeWatchlistRequest")({DomainId: S.String, WatchlistId: S.String}) {}
export class DisassociateFraudsterRequest extends S.Class<DisassociateFraudsterRequest>("DisassociateFraudsterRequest")({DomainId: S.String, WatchlistId: S.String, FraudsterId: S.String}) {}
export class EvaluateSessionRequest extends S.Class<EvaluateSessionRequest>("EvaluateSessionRequest")({DomainId: S.String, SessionNameOrId: S.String}) {}
export class ListFraudsterRegistrationJobsRequest extends S.Class<ListFraudsterRegistrationJobsRequest>("ListFraudsterRegistrationJobsRequest")({DomainId: S.String, JobStatus: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListFraudstersRequest extends S.Class<ListFraudstersRequest>("ListFraudstersRequest")({DomainId: S.String, WatchlistId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListSpeakerEnrollmentJobsRequest extends S.Class<ListSpeakerEnrollmentJobsRequest>("ListSpeakerEnrollmentJobsRequest")({DomainId: S.String, JobStatus: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListSpeakersRequest extends S.Class<ListSpeakersRequest>("ListSpeakersRequest")({DomainId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class ListWatchlistsRequest extends S.Class<ListWatchlistsRequest>("ListWatchlistsRequest")({DomainId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class OptOutSpeakerRequest extends S.Class<OptOutSpeakerRequest>("OptOutSpeakerRequest")({DomainId: S.String, SpeakerId: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateWatchlistRequest extends S.Class<UpdateWatchlistRequest>("UpdateWatchlistRequest")({DomainId: S.String, WatchlistId: S.String, Name: S.optional(S.String), Description: S.optional(S.String)}) {}
export const RegistrationConfigWatchlistIds = S.Array(S.String);
export class RegistrationConfig extends S.Class<RegistrationConfig>("RegistrationConfig")({DuplicateRegistrationAction: S.optional(S.String), FraudsterSimilarityThreshold: S.optional(S.Number), WatchlistIds: S.optional(RegistrationConfigWatchlistIds)}) {}
export class InputDataConfig extends S.Class<InputDataConfig>("InputDataConfig")({S3Uri: S.String}) {}
export class OutputDataConfig extends S.Class<OutputDataConfig>("OutputDataConfig")({S3Uri: S.String, KmsKeyId: S.optional(S.String)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export const EnrollmentJobFraudDetectionConfigWatchlistIds = S.Array(S.String);
export const ResponseWatchlistIds = S.Array(S.String);
export class Fraudster extends S.Class<Fraudster>("Fraudster")({DomainId: S.optional(S.String), GeneratedFraudsterId: S.optional(S.String), CreatedAt: S.optional(S.Date), WatchlistIds: S.optional(ResponseWatchlistIds)}) {}
export class DescribeFraudsterResponse extends S.Class<DescribeFraudsterResponse>("DescribeFraudsterResponse")({Fraudster: S.optional(Fraudster)}) {}
export class Watchlist extends S.Class<Watchlist>("Watchlist")({DomainId: S.optional(S.String), WatchlistId: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), DefaultWatchlist: S.optional(S.Boolean), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date)}) {}
export class DescribeWatchlistResponse extends S.Class<DescribeWatchlistResponse>("DescribeWatchlistResponse")({Watchlist: S.optional(Watchlist)}) {}
export class DisassociateFraudsterResponse extends S.Class<DisassociateFraudsterResponse>("DisassociateFraudsterResponse")({Fraudster: S.optional(Fraudster)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class Speaker extends S.Class<Speaker>("Speaker")({DomainId: S.optional(S.String), CustomerSpeakerId: S.optional(S.String), GeneratedSpeakerId: S.optional(S.String), Status: S.optional(S.String), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), LastAccessedAt: S.optional(S.Date)}) {}
export class OptOutSpeakerResponse extends S.Class<OptOutSpeakerResponse>("OptOutSpeakerResponse")({Speaker: S.optional(Speaker)}) {}
export class StartFraudsterRegistrationJobRequest extends S.Class<StartFraudsterRegistrationJobRequest>("StartFraudsterRegistrationJobRequest")({ClientToken: S.optional(S.String), JobName: S.optional(S.String), DomainId: S.String, DataAccessRoleArn: S.String, RegistrationConfig: S.optional(RegistrationConfig), InputDataConfig: InputDataConfig, OutputDataConfig: OutputDataConfig}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UpdateWatchlistResponse extends S.Class<UpdateWatchlistResponse>("UpdateWatchlistResponse")({Watchlist: S.optional(Watchlist)}) {}
export const FraudDetectionReasons = S.Array(S.String);
export class EnrollmentJobFraudDetectionConfig extends S.Class<EnrollmentJobFraudDetectionConfig>("EnrollmentJobFraudDetectionConfig")({FraudDetectionAction: S.optional(S.String), RiskThreshold: S.optional(S.Number), WatchlistIds: S.optional(EnrollmentJobFraudDetectionConfigWatchlistIds)}) {}
export class EnrollmentConfig extends S.Class<EnrollmentConfig>("EnrollmentConfig")({ExistingEnrollmentAction: S.optional(S.String), FraudDetectionConfig: S.optional(EnrollmentJobFraudDetectionConfig)}) {}
export class FailureDetails extends S.Class<FailureDetails>("FailureDetails")({StatusCode: S.optional(S.Number), Message: S.optional(S.String)}) {}
export class JobProgress extends S.Class<JobProgress>("JobProgress")({PercentComplete: S.optional(S.Number)}) {}
export class SpeakerEnrollmentJob extends S.Class<SpeakerEnrollmentJob>("SpeakerEnrollmentJob")({JobName: S.optional(S.String), JobId: S.optional(S.String), JobStatus: S.optional(S.String), DomainId: S.optional(S.String), DataAccessRoleArn: S.optional(S.String), EnrollmentConfig: S.optional(EnrollmentConfig), InputDataConfig: S.optional(InputDataConfig), OutputDataConfig: S.optional(OutputDataConfig), CreatedAt: S.optional(S.Date), EndedAt: S.optional(S.Date), FailureDetails: S.optional(FailureDetails), JobProgress: S.optional(JobProgress)}) {}
export class FraudsterRegistrationJobSummary extends S.Class<FraudsterRegistrationJobSummary>("FraudsterRegistrationJobSummary")({JobName: S.optional(S.String), JobId: S.optional(S.String), JobStatus: S.optional(S.String), DomainId: S.optional(S.String), CreatedAt: S.optional(S.Date), EndedAt: S.optional(S.Date), FailureDetails: S.optional(FailureDetails), JobProgress: S.optional(JobProgress)}) {}
export const FraudsterRegistrationJobSummaries = S.Array(FraudsterRegistrationJobSummary);
export class FraudsterSummary extends S.Class<FraudsterSummary>("FraudsterSummary")({DomainId: S.optional(S.String), GeneratedFraudsterId: S.optional(S.String), CreatedAt: S.optional(S.Date), WatchlistIds: S.optional(ResponseWatchlistIds)}) {}
export const FraudsterSummaries = S.Array(FraudsterSummary);
export class SpeakerEnrollmentJobSummary extends S.Class<SpeakerEnrollmentJobSummary>("SpeakerEnrollmentJobSummary")({JobName: S.optional(S.String), JobId: S.optional(S.String), JobStatus: S.optional(S.String), DomainId: S.optional(S.String), CreatedAt: S.optional(S.Date), EndedAt: S.optional(S.Date), FailureDetails: S.optional(FailureDetails), JobProgress: S.optional(JobProgress)}) {}
export const SpeakerEnrollmentJobSummaries = S.Array(SpeakerEnrollmentJobSummary);
export class SpeakerSummary extends S.Class<SpeakerSummary>("SpeakerSummary")({DomainId: S.optional(S.String), CustomerSpeakerId: S.optional(S.String), GeneratedSpeakerId: S.optional(S.String), Status: S.optional(S.String), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), LastAccessedAt: S.optional(S.Date)}) {}
export const SpeakerSummaries = S.Array(SpeakerSummary);
export class WatchlistSummary extends S.Class<WatchlistSummary>("WatchlistSummary")({DomainId: S.optional(S.String), WatchlistId: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), DefaultWatchlist: S.optional(S.Boolean), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date)}) {}
export const WatchlistSummaries = S.Array(WatchlistSummary);
export class AssociateFraudsterResponse extends S.Class<AssociateFraudsterResponse>("AssociateFraudsterResponse")({Fraudster: S.optional(Fraudster)}) {}
export class CreateWatchlistResponse extends S.Class<CreateWatchlistResponse>("CreateWatchlistResponse")({Watchlist: S.optional(Watchlist)}) {}
export class DescribeSpeakerResponse extends S.Class<DescribeSpeakerResponse>("DescribeSpeakerResponse")({Speaker: S.optional(Speaker)}) {}
export class DescribeSpeakerEnrollmentJobResponse extends S.Class<DescribeSpeakerEnrollmentJobResponse>("DescribeSpeakerEnrollmentJobResponse")({Job: S.optional(SpeakerEnrollmentJob)}) {}
export class ListFraudsterRegistrationJobsResponse extends S.Class<ListFraudsterRegistrationJobsResponse>("ListFraudsterRegistrationJobsResponse")({JobSummaries: S.optional(FraudsterRegistrationJobSummaries), NextToken: S.optional(S.String)}) {}
export class ListFraudstersResponse extends S.Class<ListFraudstersResponse>("ListFraudstersResponse")({FraudsterSummaries: S.optional(FraudsterSummaries), NextToken: S.optional(S.String)}) {}
export class ListSpeakerEnrollmentJobsResponse extends S.Class<ListSpeakerEnrollmentJobsResponse>("ListSpeakerEnrollmentJobsResponse")({JobSummaries: S.optional(SpeakerEnrollmentJobSummaries), NextToken: S.optional(S.String)}) {}
export class ListSpeakersResponse extends S.Class<ListSpeakersResponse>("ListSpeakersResponse")({SpeakerSummaries: S.optional(SpeakerSummaries), NextToken: S.optional(S.String)}) {}
export class ListWatchlistsResponse extends S.Class<ListWatchlistsResponse>("ListWatchlistsResponse")({WatchlistSummaries: S.optional(WatchlistSummaries), NextToken: S.optional(S.String)}) {}
export class FraudsterRegistrationJob extends S.Class<FraudsterRegistrationJob>("FraudsterRegistrationJob")({JobName: S.optional(S.String), JobId: S.optional(S.String), JobStatus: S.optional(S.String), DomainId: S.optional(S.String), DataAccessRoleArn: S.optional(S.String), RegistrationConfig: S.optional(RegistrationConfig), InputDataConfig: S.optional(InputDataConfig), OutputDataConfig: S.optional(OutputDataConfig), CreatedAt: S.optional(S.Date), EndedAt: S.optional(S.Date), FailureDetails: S.optional(FailureDetails), JobProgress: S.optional(JobProgress)}) {}
export class StartFraudsterRegistrationJobResponse extends S.Class<StartFraudsterRegistrationJobResponse>("StartFraudsterRegistrationJobResponse")({Job: S.optional(FraudsterRegistrationJob)}) {}
export class StartSpeakerEnrollmentJobRequest extends S.Class<StartSpeakerEnrollmentJobRequest>("StartSpeakerEnrollmentJobRequest")({ClientToken: S.optional(S.String), JobName: S.optional(S.String), DomainId: S.String, DataAccessRoleArn: S.String, EnrollmentConfig: S.optional(EnrollmentConfig), InputDataConfig: InputDataConfig, OutputDataConfig: OutputDataConfig}) {}
export class AuthenticationConfiguration extends S.Class<AuthenticationConfiguration>("AuthenticationConfiguration")({AcceptanceThreshold: S.Number}) {}
export class FraudDetectionConfiguration extends S.Class<FraudDetectionConfiguration>("FraudDetectionConfiguration")({RiskThreshold: S.optional(S.Number), WatchlistId: S.optional(S.String)}) {}
export class AuthenticationResult extends S.Class<AuthenticationResult>("AuthenticationResult")({AuthenticationResultId: S.optional(S.String), AudioAggregationStartedAt: S.optional(S.Date), AudioAggregationEndedAt: S.optional(S.Date), CustomerSpeakerId: S.optional(S.String), GeneratedSpeakerId: S.optional(S.String), Decision: S.optional(S.String), Score: S.optional(S.Number), Configuration: S.optional(AuthenticationConfiguration)}) {}
export class KnownFraudsterRisk extends S.Class<KnownFraudsterRisk>("KnownFraudsterRisk")({RiskScore: S.Number, GeneratedFraudsterId: S.optional(S.String)}) {}
export class VoiceSpoofingRisk extends S.Class<VoiceSpoofingRisk>("VoiceSpoofingRisk")({RiskScore: S.Number}) {}
export class DescribeFraudsterRegistrationJobResponse extends S.Class<DescribeFraudsterRegistrationJobResponse>("DescribeFraudsterRegistrationJobResponse")({Job: S.optional(FraudsterRegistrationJob)}) {}
export class StartSpeakerEnrollmentJobResponse extends S.Class<StartSpeakerEnrollmentJobResponse>("StartSpeakerEnrollmentJobResponse")({Job: S.optional(SpeakerEnrollmentJob)}) {}
export class FraudRiskDetails extends S.Class<FraudRiskDetails>("FraudRiskDetails")({KnownFraudsterRisk: KnownFraudsterRisk, VoiceSpoofingRisk: VoiceSpoofingRisk}) {}
export class FraudDetectionResult extends S.Class<FraudDetectionResult>("FraudDetectionResult")({FraudDetectionResultId: S.optional(S.String), AudioAggregationStartedAt: S.optional(S.Date), AudioAggregationEndedAt: S.optional(S.Date), Configuration: S.optional(FraudDetectionConfiguration), Decision: S.optional(S.String), Reasons: S.optional(FraudDetectionReasons), RiskDetails: S.optional(FraudRiskDetails)}) {}
export class EvaluateSessionResponse extends S.Class<EvaluateSessionResponse>("EvaluateSessionResponse")({DomainId: S.optional(S.String), SessionId: S.optional(S.String), SessionName: S.optional(S.String), StreamingStatus: S.optional(S.String), AuthenticationResult: S.optional(AuthenticationResult), FraudDetectionResult: S.optional(FraudDetectionResult)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Deletes the specified watchlist from Voice ID. This API throws an exception when
 * there are fraudsters in the watchlist that you are trying to delete. You must delete the
 * fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted.
 */export const deleteWatchlist = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.DeleteWatchlist" }, DeleteWatchlistRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified fraudster.
 */export const describeFraudster = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.DescribeFraudster" }, DescribeFraudsterRequest, DescribeFraudsterResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified watchlist.
 */export const describeWatchlist = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.DescribeWatchlist" }, DescribeWatchlistRequest, DescribeWatchlistResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the fraudsters from the watchlist specified. Voice ID always expects a
 * fraudster to be a part of at least one watchlist. If
 * you try to disassociate a fraudster from its only watchlist, a `ValidationException` is thrown.
 */export const disassociateFraudster = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.DisassociateFraudster" }, DisassociateFraudsterRequest, DisassociateFraudsterResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all tags associated with a specified Voice ID resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tags a Voice ID resource with the provided list of tags.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes specified tags from a specified Amazon Connect Voice ID resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified watchlist. Every domain has a default watchlist which cannot be updated.
 */export const updateWatchlist = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.UpdateWatchlist" }, UpdateWatchlistRequest, UpdateWatchlistResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the fraudsters with the watchlist specified in the same domain.
 */export const associateFraudster = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.AssociateFraudster" }, AssociateFraudsterRequest, AssociateFraudsterResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a watchlist that fraudsters can be a part of.
 */export const createWatchlist = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.CreateWatchlist" }, CreateWatchlistRequest, CreateWatchlistResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.
 */export const deleteFraudster = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.DeleteFraudster" }, DeleteFraudsterRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified speaker from Voice ID.
 */export const deleteSpeaker = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.DeleteSpeaker" }, DeleteSpeakerRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified speaker.
 */export const describeSpeaker = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.DescribeSpeaker" }, DescribeSpeakerRequest, DescribeSpeakerResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified speaker enrollment job.
 */export const describeSpeakerEnrollmentJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.DescribeSpeakerEnrollmentJob" }, DescribeSpeakerEnrollmentJobRequest, DescribeSpeakerEnrollmentJobResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the fraudster registration jobs in the domain with the given
 * `JobStatus`. If `JobStatus` is not provided, this lists all
 * fraudster registration jobs in the given domain.
 */export const listFraudsterRegistrationJobs = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.ListFraudsterRegistrationJobs" }, ListFraudsterRegistrationJobsRequest, ListFraudsterRegistrationJobsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all fraudsters in a specified watchlist or domain.
 */export const listFraudsters = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.ListFraudsters" }, ListFraudstersRequest, ListFraudstersResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the speaker enrollment jobs in the domain with the specified
 * `JobStatus`. If `JobStatus` is not provided, this lists all
 * jobs with all possible speaker enrollment job statuses.
 */export const listSpeakerEnrollmentJobs = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.ListSpeakerEnrollmentJobs" }, ListSpeakerEnrollmentJobsRequest, ListSpeakerEnrollmentJobsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all speakers in a specified domain.
 */export const listSpeakers = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.ListSpeakers" }, ListSpeakersRequest, ListSpeakersResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all watchlists in a specified domain.
 */export const listWatchlists = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.ListWatchlists" }, ListWatchlistsRequest, ListWatchlistsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or
 * not they already exist in Voice ID. If they don't yet exist, a new speaker is created
 * in an opted out state. If they already exist, their existing status is overridden and
 * they are opted out. Enrollment and evaluation authentication requests are rejected for
 * opted out speakers, and opted out speakers have no voice embeddings stored in
 * Voice ID.
 */export const optOutSpeaker = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.OptOutSpeaker" }, OptOutSpeakerRequest, OptOutSpeakerResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a new batch fraudster registration job using provided details.
 */export const startFraudsterRegistrationJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.StartFraudsterRegistrationJob" }, StartFraudsterRegistrationJobRequest, StartFraudsterRegistrationJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified fraudster registration job.
 */export const describeFraudsterRegistrationJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.DescribeFraudsterRegistrationJob" }, DescribeFraudsterRegistrationJobRequest, DescribeFraudsterRegistrationJobResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a new batch speaker enrollment job using specified details.
 */export const startSpeakerEnrollmentJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.StartSpeakerEnrollmentJob" }, StartSpeakerEnrollmentJobRequest, StartSpeakerEnrollmentJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Evaluates a specified session based on audio data accumulated during a streaming
 * Amazon Connect Voice ID call.
 */export const evaluateSession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-27", uri: "/", method: "POST", sdkId: "Voice ID", sigV4ServiceName: "voiceid", name: "VoiceID.EvaluateSession" }, EvaluateSessionRequest, EvaluateSessionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

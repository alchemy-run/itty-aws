import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const CcEmailAddressList = S.Array(S.String);
export const CaseIdList = S.Array(S.String);
export const ServiceCodeList = S.Array(S.String);
export const StringList = S.Array(S.String);
export class AddCommunicationToCaseRequest extends S.Class<AddCommunicationToCaseRequest>("AddCommunicationToCaseRequest")({caseId: S.optional(S.String), communicationBody: S.String, ccEmailAddresses: S.optional(CcEmailAddressList), attachmentSetId: S.optional(S.String)}) {}
export class CreateCaseRequest extends S.Class<CreateCaseRequest>("CreateCaseRequest")({subject: S.String, serviceCode: S.optional(S.String), severityCode: S.optional(S.String), categoryCode: S.optional(S.String), communicationBody: S.String, ccEmailAddresses: S.optional(CcEmailAddressList), language: S.optional(S.String), issueType: S.optional(S.String), attachmentSetId: S.optional(S.String)}) {}
export class DescribeAttachmentRequest extends S.Class<DescribeAttachmentRequest>("DescribeAttachmentRequest")({attachmentId: S.String}) {}
export class DescribeCasesRequest extends S.Class<DescribeCasesRequest>("DescribeCasesRequest")({caseIdList: S.optional(CaseIdList), displayId: S.optional(S.String), afterTime: S.optional(S.String), beforeTime: S.optional(S.String), includeResolvedCases: S.optional(S.Boolean), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), language: S.optional(S.String), includeCommunications: S.optional(S.Boolean)}) {}
export class DescribeCommunicationsRequest extends S.Class<DescribeCommunicationsRequest>("DescribeCommunicationsRequest")({caseId: S.String, beforeTime: S.optional(S.String), afterTime: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class DescribeCreateCaseOptionsRequest extends S.Class<DescribeCreateCaseOptionsRequest>("DescribeCreateCaseOptionsRequest")({issueType: S.String, serviceCode: S.String, language: S.String, categoryCode: S.String}) {}
export class DescribeServicesRequest extends S.Class<DescribeServicesRequest>("DescribeServicesRequest")({serviceCodeList: S.optional(ServiceCodeList), language: S.optional(S.String)}) {}
export class DescribeSeverityLevelsRequest extends S.Class<DescribeSeverityLevelsRequest>("DescribeSeverityLevelsRequest")({language: S.optional(S.String)}) {}
export class DescribeSupportedLanguagesRequest extends S.Class<DescribeSupportedLanguagesRequest>("DescribeSupportedLanguagesRequest")({issueType: S.String, serviceCode: S.String, categoryCode: S.String}) {}
export class DescribeTrustedAdvisorCheckRefreshStatusesRequest extends S.Class<DescribeTrustedAdvisorCheckRefreshStatusesRequest>("DescribeTrustedAdvisorCheckRefreshStatusesRequest")({checkIds: StringList}) {}
export class DescribeTrustedAdvisorCheckResultRequest extends S.Class<DescribeTrustedAdvisorCheckResultRequest>("DescribeTrustedAdvisorCheckResultRequest")({checkId: S.String, language: S.optional(S.String)}) {}
export class DescribeTrustedAdvisorChecksRequest extends S.Class<DescribeTrustedAdvisorChecksRequest>("DescribeTrustedAdvisorChecksRequest")({language: S.String}) {}
export class DescribeTrustedAdvisorCheckSummariesRequest extends S.Class<DescribeTrustedAdvisorCheckSummariesRequest>("DescribeTrustedAdvisorCheckSummariesRequest")({checkIds: StringList}) {}
export class RefreshTrustedAdvisorCheckRequest extends S.Class<RefreshTrustedAdvisorCheckRequest>("RefreshTrustedAdvisorCheckRequest")({checkId: S.String}) {}
export class ResolveCaseRequest extends S.Class<ResolveCaseRequest>("ResolveCaseRequest")({caseId: S.optional(S.String)}) {}
export class Attachment extends S.Class<Attachment>("Attachment")({fileName: S.optional(S.String), data: S.optional(H.StreamBody())}) {}
export const Attachments = S.Array(Attachment);
export class AddAttachmentsToSetRequest extends S.Class<AddAttachmentsToSetRequest>("AddAttachmentsToSetRequest")({attachmentSetId: S.optional(S.String), attachments: Attachments}) {}
export class AddCommunicationToCaseResponse extends S.Class<AddCommunicationToCaseResponse>("AddCommunicationToCaseResponse")({result: S.optional(S.Boolean)}) {}
export class CreateCaseResponse extends S.Class<CreateCaseResponse>("CreateCaseResponse")({caseId: S.optional(S.String)}) {}
export class DescribeAttachmentResponse extends S.Class<DescribeAttachmentResponse>("DescribeAttachmentResponse")({attachment: S.optional(Attachment)}) {}
export class TrustedAdvisorCheckRefreshStatus extends S.Class<TrustedAdvisorCheckRefreshStatus>("TrustedAdvisorCheckRefreshStatus")({checkId: S.String, status: S.String, millisUntilNextRefreshable: S.Number}) {}
export class RefreshTrustedAdvisorCheckResponse extends S.Class<RefreshTrustedAdvisorCheckResponse>("RefreshTrustedAdvisorCheckResponse")({status: TrustedAdvisorCheckRefreshStatus}) {}
export class ResolveCaseResponse extends S.Class<ResolveCaseResponse>("ResolveCaseResponse")({initialCaseStatus: S.optional(S.String), finalCaseStatus: S.optional(S.String)}) {}
export class SeverityLevel extends S.Class<SeverityLevel>("SeverityLevel")({code: S.optional(S.String), name: S.optional(S.String)}) {}
export const SeverityLevelsList = S.Array(SeverityLevel);
export class SupportedLanguage extends S.Class<SupportedLanguage>("SupportedLanguage")({code: S.optional(S.String), language: S.optional(S.String), display: S.optional(S.String)}) {}
export const SupportedLanguagesList = S.Array(SupportedLanguage);
export const TrustedAdvisorCheckRefreshStatusList = S.Array(TrustedAdvisorCheckRefreshStatus);
export class TrustedAdvisorCheckDescription extends S.Class<TrustedAdvisorCheckDescription>("TrustedAdvisorCheckDescription")({id: S.String, name: S.String, description: S.String, category: S.String, metadata: StringList}) {}
export const TrustedAdvisorCheckList = S.Array(TrustedAdvisorCheckDescription);
export class TrustedAdvisorResourcesSummary extends S.Class<TrustedAdvisorResourcesSummary>("TrustedAdvisorResourcesSummary")({resourcesProcessed: S.Number, resourcesFlagged: S.Number, resourcesIgnored: S.Number, resourcesSuppressed: S.Number}) {}
export class TrustedAdvisorCostOptimizingSummary extends S.Class<TrustedAdvisorCostOptimizingSummary>("TrustedAdvisorCostOptimizingSummary")({estimatedMonthlySavings: S.Number, estimatedPercentMonthlySavings: S.Number}) {}
export class TrustedAdvisorCategorySpecificSummary extends S.Class<TrustedAdvisorCategorySpecificSummary>("TrustedAdvisorCategorySpecificSummary")({costOptimizing: S.optional(TrustedAdvisorCostOptimizingSummary)}) {}
export class TrustedAdvisorCheckSummary extends S.Class<TrustedAdvisorCheckSummary>("TrustedAdvisorCheckSummary")({checkId: S.String, timestamp: S.String, status: S.String, hasFlaggedResources: S.optional(S.Boolean), resourcesSummary: TrustedAdvisorResourcesSummary, categorySpecificSummary: TrustedAdvisorCategorySpecificSummary}) {}
export const TrustedAdvisorCheckSummaryList = S.Array(TrustedAdvisorCheckSummary);
export class AddAttachmentsToSetResponse extends S.Class<AddAttachmentsToSetResponse>("AddAttachmentsToSetResponse")({attachmentSetId: S.optional(S.String), expiryTime: S.optional(S.String)}) {}
export class AttachmentSetExpired extends S.Class<AttachmentSetExpired>("AttachmentSetExpired")({message: S.optional(S.String)}) {}
export class AttachmentSetIdNotFound extends S.Class<AttachmentSetIdNotFound>("AttachmentSetIdNotFound")({message: S.optional(S.String)}) {}
export class AttachmentIdNotFound extends S.Class<AttachmentIdNotFound>("AttachmentIdNotFound")({message: S.optional(S.String)}) {}
export class DescribeSeverityLevelsResponse extends S.Class<DescribeSeverityLevelsResponse>("DescribeSeverityLevelsResponse")({severityLevels: S.optional(SeverityLevelsList)}) {}
export class DescribeSupportedLanguagesResponse extends S.Class<DescribeSupportedLanguagesResponse>("DescribeSupportedLanguagesResponse")({supportedLanguages: S.optional(SupportedLanguagesList)}) {}
export class DescribeTrustedAdvisorCheckRefreshStatusesResponse extends S.Class<DescribeTrustedAdvisorCheckRefreshStatusesResponse>("DescribeTrustedAdvisorCheckRefreshStatusesResponse")({statuses: TrustedAdvisorCheckRefreshStatusList}) {}
export class DescribeTrustedAdvisorChecksResponse extends S.Class<DescribeTrustedAdvisorChecksResponse>("DescribeTrustedAdvisorChecksResponse")({checks: TrustedAdvisorCheckList}) {}
export class DescribeTrustedAdvisorCheckSummariesResponse extends S.Class<DescribeTrustedAdvisorCheckSummariesResponse>("DescribeTrustedAdvisorCheckSummariesResponse")({summaries: TrustedAdvisorCheckSummaryList}) {}
export class InternalServerError extends S.Class<InternalServerError>("InternalServerError")({message: S.optional(S.String)}) {}
export class CaseIdNotFound extends S.Class<CaseIdNotFound>("CaseIdNotFound")({message: S.optional(S.String)}) {}
export class AttachmentDetails extends S.Class<AttachmentDetails>("AttachmentDetails")({attachmentId: S.optional(S.String), fileName: S.optional(S.String)}) {}
export const AttachmentSet = S.Array(AttachmentDetails);
export class Communication extends S.Class<Communication>("Communication")({caseId: S.optional(S.String), body: S.optional(S.String), submittedBy: S.optional(S.String), timeCreated: S.optional(S.String), attachmentSet: S.optional(AttachmentSet)}) {}
export const CommunicationList = S.Array(Communication);
export class RecentCaseCommunications extends S.Class<RecentCaseCommunications>("RecentCaseCommunications")({communications: S.optional(CommunicationList), nextToken: S.optional(S.String)}) {}
export class SupportedHour extends S.Class<SupportedHour>("SupportedHour")({startTime: S.optional(S.String), endTime: S.optional(S.String)}) {}
export const SupportedHoursList = S.Array(SupportedHour);
export class DateInterval extends S.Class<DateInterval>("DateInterval")({startDateTime: S.optional(S.String), endDateTime: S.optional(S.String)}) {}
export const DatesWithoutSupportList = S.Array(DateInterval);
export class Category extends S.Class<Category>("Category")({code: S.optional(S.String), name: S.optional(S.String)}) {}
export const CategoryList = S.Array(Category);
export class TrustedAdvisorResourceDetail extends S.Class<TrustedAdvisorResourceDetail>("TrustedAdvisorResourceDetail")({status: S.String, region: S.optional(S.String), resourceId: S.String, isSuppressed: S.optional(S.Boolean), metadata: StringList}) {}
export const TrustedAdvisorResourceDetailList = S.Array(TrustedAdvisorResourceDetail);
export class CaseDetails extends S.Class<CaseDetails>("CaseDetails")({caseId: S.optional(S.String), displayId: S.optional(S.String), subject: S.optional(S.String), status: S.optional(S.String), serviceCode: S.optional(S.String), categoryCode: S.optional(S.String), severityCode: S.optional(S.String), submittedBy: S.optional(S.String), timeCreated: S.optional(S.String), recentCommunications: S.optional(RecentCaseCommunications), ccEmailAddresses: S.optional(CcEmailAddressList), language: S.optional(S.String)}) {}
export const CaseList = S.Array(CaseDetails);
export class CommunicationTypeOptions extends S.Class<CommunicationTypeOptions>("CommunicationTypeOptions")({type: S.optional(S.String), supportedHours: S.optional(SupportedHoursList), datesWithoutSupport: S.optional(DatesWithoutSupportList)}) {}
export const CommunicationTypeOptionsList = S.Array(CommunicationTypeOptions);
export class Service extends S.Class<Service>("Service")({code: S.optional(S.String), name: S.optional(S.String), categories: S.optional(CategoryList)}) {}
export const ServiceList = S.Array(Service);
export class AttachmentLimitExceeded extends S.Class<AttachmentLimitExceeded>("AttachmentLimitExceeded")({message: S.optional(S.String)}) {}
export class CaseCreationLimitExceeded extends S.Class<CaseCreationLimitExceeded>("CaseCreationLimitExceeded")({message: S.optional(S.String)}) {}
export class DescribeAttachmentLimitExceeded extends S.Class<DescribeAttachmentLimitExceeded>("DescribeAttachmentLimitExceeded")({message: S.optional(S.String)}) {}
export class DescribeCasesResponse extends S.Class<DescribeCasesResponse>("DescribeCasesResponse")({cases: S.optional(CaseList), nextToken: S.optional(S.String)}) {}
export class DescribeCommunicationsResponse extends S.Class<DescribeCommunicationsResponse>("DescribeCommunicationsResponse")({communications: S.optional(CommunicationList), nextToken: S.optional(S.String)}) {}
export class DescribeCreateCaseOptionsResponse extends S.Class<DescribeCreateCaseOptionsResponse>("DescribeCreateCaseOptionsResponse")({languageAvailability: S.optional(S.String), communicationTypes: S.optional(CommunicationTypeOptionsList)}) {}
export class DescribeServicesResponse extends S.Class<DescribeServicesResponse>("DescribeServicesResponse")({services: S.optional(ServiceList)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.optional(S.String)}) {}
export class TrustedAdvisorCheckResult extends S.Class<TrustedAdvisorCheckResult>("TrustedAdvisorCheckResult")({checkId: S.String, timestamp: S.String, status: S.String, resourcesSummary: TrustedAdvisorResourcesSummary, categorySpecificSummary: TrustedAdvisorCategorySpecificSummary, flaggedResources: TrustedAdvisorResourceDetailList}) {}
export class AttachmentSetSizeLimitExceeded extends S.Class<AttachmentSetSizeLimitExceeded>("AttachmentSetSizeLimitExceeded")({message: S.optional(S.String)}) {}
export class DescribeTrustedAdvisorCheckResultResponse extends S.Class<DescribeTrustedAdvisorCheckResultResponse>("DescribeTrustedAdvisorCheckResultResponse")({result: S.optional(TrustedAdvisorCheckResult)}) {}

//# Errors
export class AttachmentSetExpiredError extends S.TaggedError<AttachmentSetExpiredError>()("AttachmentSetExpired", AttachmentSetExpired.fields) {};
export class AttachmentSetIdNotFoundError extends S.TaggedError<AttachmentSetIdNotFoundError>()("AttachmentSetIdNotFound", AttachmentSetIdNotFound.fields) {};
export class CaseIdNotFoundError extends S.TaggedError<CaseIdNotFoundError>()("CaseIdNotFound", CaseIdNotFound.fields) {};
export class InternalServerErrorError extends S.TaggedError<InternalServerErrorError>()("InternalServerError", InternalServerError.fields) {};
export class AttachmentIdNotFoundError extends S.TaggedError<AttachmentIdNotFoundError>()("AttachmentIdNotFound", AttachmentIdNotFound.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class AttachmentLimitExceededError extends S.TaggedError<AttachmentLimitExceededError>()("AttachmentLimitExceeded", AttachmentLimitExceeded.fields) {};
export class CaseCreationLimitExceededError extends S.TaggedError<CaseCreationLimitExceededError>()("CaseCreationLimitExceeded", CaseCreationLimitExceeded.fields) {};
export class DescribeAttachmentLimitExceededError extends S.TaggedError<DescribeAttachmentLimitExceededError>()("DescribeAttachmentLimitExceeded", DescribeAttachmentLimitExceeded.fields) {};
export class AttachmentSetSizeLimitExceededError extends S.TaggedError<AttachmentSetSizeLimitExceededError>()("AttachmentSetSizeLimitExceeded", AttachmentSetSizeLimitExceeded.fields) {};

//# Operations
export const addCommunicationToCase = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.AddCommunicationToCase" }, AddCommunicationToCaseRequest, AddCommunicationToCaseResponse, [AttachmentSetExpiredError, AttachmentSetIdNotFoundError, CaseIdNotFoundError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeSeverityLevels = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeSeverityLevels" }, DescribeSeverityLevelsRequest, DescribeSeverityLevelsResponse, [InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeTrustedAdvisorCheckRefreshStatuses = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses" }, DescribeTrustedAdvisorCheckRefreshStatusesRequest, DescribeTrustedAdvisorCheckRefreshStatusesResponse, [InternalServerErrorError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeTrustedAdvisorChecks = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeTrustedAdvisorChecks" }, DescribeTrustedAdvisorChecksRequest, DescribeTrustedAdvisorChecksResponse, [InternalServerErrorError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeTrustedAdvisorCheckSummaries = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries" }, DescribeTrustedAdvisorCheckSummariesRequest, DescribeTrustedAdvisorCheckSummariesResponse, [InternalServerErrorError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const refreshTrustedAdvisorCheck = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.RefreshTrustedAdvisorCheck" }, RefreshTrustedAdvisorCheckRequest, RefreshTrustedAdvisorCheckResponse, [InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const resolveCase = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.ResolveCase" }, ResolveCaseRequest, ResolveCaseResponse, [CaseIdNotFoundError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createCase = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.CreateCase" }, CreateCaseRequest, CreateCaseResponse, [AttachmentSetExpiredError, AttachmentSetIdNotFoundError, CaseCreationLimitExceededError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeAttachment = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeAttachment" }, DescribeAttachmentRequest, DescribeAttachmentResponse, [AttachmentIdNotFoundError, DescribeAttachmentLimitExceededError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeCases = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeCases" }, DescribeCasesRequest, DescribeCasesResponse, [CaseIdNotFoundError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeCommunications = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeCommunications" }, DescribeCommunicationsRequest, DescribeCommunicationsResponse, [CaseIdNotFoundError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeCreateCaseOptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeCreateCaseOptions" }, DescribeCreateCaseOptionsRequest, DescribeCreateCaseOptionsResponse, [InternalServerErrorError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeServices = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeServices" }, DescribeServicesRequest, DescribeServicesResponse, [InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeSupportedLanguages = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeSupportedLanguages" }, DescribeSupportedLanguagesRequest, DescribeSupportedLanguagesResponse, [InternalServerErrorError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const addAttachmentsToSet = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.AddAttachmentsToSet" }, AddAttachmentsToSetRequest, AddAttachmentsToSetResponse, [AttachmentLimitExceededError, AttachmentSetExpiredError, AttachmentSetIdNotFoundError, AttachmentSetSizeLimitExceededError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeTrustedAdvisorCheckResult = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeTrustedAdvisorCheckResult" }, DescribeTrustedAdvisorCheckResultRequest, DescribeTrustedAdvisorCheckResultResponse, [InternalServerErrorError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

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
export class DescribeSeverityLevelsResponse extends S.Class<DescribeSeverityLevelsResponse>("DescribeSeverityLevelsResponse")({severityLevels: S.optional(SeverityLevelsList)}) {}
export class DescribeSupportedLanguagesResponse extends S.Class<DescribeSupportedLanguagesResponse>("DescribeSupportedLanguagesResponse")({supportedLanguages: S.optional(SupportedLanguagesList)}) {}
export class DescribeTrustedAdvisorCheckRefreshStatusesResponse extends S.Class<DescribeTrustedAdvisorCheckRefreshStatusesResponse>("DescribeTrustedAdvisorCheckRefreshStatusesResponse")({statuses: TrustedAdvisorCheckRefreshStatusList}) {}
export class DescribeTrustedAdvisorChecksResponse extends S.Class<DescribeTrustedAdvisorChecksResponse>("DescribeTrustedAdvisorChecksResponse")({checks: TrustedAdvisorCheckList}) {}
export class DescribeTrustedAdvisorCheckSummariesResponse extends S.Class<DescribeTrustedAdvisorCheckSummariesResponse>("DescribeTrustedAdvisorCheckSummariesResponse")({summaries: TrustedAdvisorCheckSummaryList}) {}
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
export class DescribeCasesResponse extends S.Class<DescribeCasesResponse>("DescribeCasesResponse")({cases: S.optional(CaseList), nextToken: S.optional(S.String)}) {}
export class DescribeCommunicationsResponse extends S.Class<DescribeCommunicationsResponse>("DescribeCommunicationsResponse")({communications: S.optional(CommunicationList), nextToken: S.optional(S.String)}) {}
export class DescribeCreateCaseOptionsResponse extends S.Class<DescribeCreateCaseOptionsResponse>("DescribeCreateCaseOptionsResponse")({languageAvailability: S.optional(S.String), communicationTypes: S.optional(CommunicationTypeOptionsList)}) {}
export class DescribeServicesResponse extends S.Class<DescribeServicesResponse>("DescribeServicesResponse")({services: S.optional(ServiceList)}) {}
export class TrustedAdvisorCheckResult extends S.Class<TrustedAdvisorCheckResult>("TrustedAdvisorCheckResult")({checkId: S.String, timestamp: S.String, status: S.String, resourcesSummary: TrustedAdvisorResourcesSummary, categorySpecificSummary: TrustedAdvisorCategorySpecificSummary, flaggedResources: TrustedAdvisorResourceDetailList}) {}
export class DescribeTrustedAdvisorCheckResultResponse extends S.Class<DescribeTrustedAdvisorCheckResultResponse>("DescribeTrustedAdvisorCheckResultResponse")({result: S.optional(TrustedAdvisorCheckResult)}) {}

//# Errors
export class AttachmentSetExpired extends S.TaggedError<AttachmentSetExpired>()("AttachmentSetExpired", {}) {};
export class AttachmentSetIdNotFound extends S.TaggedError<AttachmentSetIdNotFound>()("AttachmentSetIdNotFound", {}) {};
export class CaseIdNotFound extends S.TaggedError<CaseIdNotFound>()("CaseIdNotFound", {}) {};
export class InternalServerError extends S.TaggedError<InternalServerError>()("InternalServerError", {}) {};
export class AttachmentIdNotFound extends S.TaggedError<AttachmentIdNotFound>()("AttachmentIdNotFound", {message: S.optional(S.String)}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class AttachmentLimitExceeded extends S.TaggedError<AttachmentLimitExceeded>()("AttachmentLimitExceeded", {message: S.optional(S.String)}) {};
export class CaseCreationLimitExceeded extends S.TaggedError<CaseCreationLimitExceeded>()("CaseCreationLimitExceeded", {message: S.optional(S.String)}) {};
export class DescribeAttachmentLimitExceeded extends S.TaggedError<DescribeAttachmentLimitExceeded>()("DescribeAttachmentLimitExceeded", {message: S.optional(S.String)}) {};
export class AttachmentSetSizeLimitExceeded extends S.TaggedError<AttachmentSetSizeLimitExceeded>()("AttachmentSetSizeLimitExceeded", {message: S.optional(S.String)}) {};

//# Operations
export const addCommunicationToCase = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.AddCommunicationToCase" }, AddCommunicationToCaseRequest, AddCommunicationToCaseResponse, [AttachmentSetExpired, AttachmentSetIdNotFound, CaseIdNotFound, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeSeverityLevels = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeSeverityLevels" }, DescribeSeverityLevelsRequest, DescribeSeverityLevelsResponse, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeTrustedAdvisorCheckRefreshStatuses = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses" }, DescribeTrustedAdvisorCheckRefreshStatusesRequest, DescribeTrustedAdvisorCheckRefreshStatusesResponse, [InternalServerError, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeTrustedAdvisorChecks = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeTrustedAdvisorChecks" }, DescribeTrustedAdvisorChecksRequest, DescribeTrustedAdvisorChecksResponse, [InternalServerError, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeTrustedAdvisorCheckSummaries = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries" }, DescribeTrustedAdvisorCheckSummariesRequest, DescribeTrustedAdvisorCheckSummariesResponse, [InternalServerError, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const refreshTrustedAdvisorCheck = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.RefreshTrustedAdvisorCheck" }, RefreshTrustedAdvisorCheckRequest, RefreshTrustedAdvisorCheckResponse, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const resolveCase = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.ResolveCase" }, ResolveCaseRequest, ResolveCaseResponse, [CaseIdNotFound, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createCase = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.CreateCase" }, CreateCaseRequest, CreateCaseResponse, [AttachmentSetExpired, AttachmentSetIdNotFound, CaseCreationLimitExceeded, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeAttachment = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeAttachment" }, DescribeAttachmentRequest, DescribeAttachmentResponse, [AttachmentIdNotFound, DescribeAttachmentLimitExceeded, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeCases = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeCases" }, DescribeCasesRequest, DescribeCasesResponse, [CaseIdNotFound, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeCommunications = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeCommunications" }, DescribeCommunicationsRequest, DescribeCommunicationsResponse, [CaseIdNotFound, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeCreateCaseOptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeCreateCaseOptions" }, DescribeCreateCaseOptionsRequest, DescribeCreateCaseOptionsResponse, [InternalServerError, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeServices = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeServices" }, DescribeServicesRequest, DescribeServicesResponse, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeSupportedLanguages = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeSupportedLanguages" }, DescribeSupportedLanguagesRequest, DescribeSupportedLanguagesResponse, [InternalServerError, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const addAttachmentsToSet = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.AddAttachmentsToSet" }, AddAttachmentsToSetRequest, AddAttachmentsToSetResponse, [AttachmentLimitExceeded, AttachmentSetExpired, AttachmentSetIdNotFound, AttachmentSetSizeLimitExceeded, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeTrustedAdvisorCheckResult = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", uri: "/", method: "POST", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeTrustedAdvisorCheckResult" }, DescribeTrustedAdvisorCheckResultRequest, DescribeTrustedAdvisorCheckResultResponse, [InternalServerError, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

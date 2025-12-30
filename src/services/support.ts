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
/**
 * Adds additional customer communication to an Amazon Web Services Support case. Use the `caseId`
 * parameter to identify the case to which to add communication. You can list a set of
 * email addresses to copy on the communication by using the `ccEmailAddresses`
 * parameter. The `communicationBody` value contains the text of the
 * communication.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 */export const addCommunicationToCase = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.AddCommunicationToCase" }, AddCommunicationToCaseRequest, AddCommunicationToCaseResponse, [AttachmentSetExpired, AttachmentSetIdNotFound, CaseIdNotFound, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the list of severity levels that you can assign to a support case. The
 * severity level for a case is also a field in the CaseDetails data type
 * that you include for a CreateCase request.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 */export const describeSeverityLevels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeSeverityLevels" }, DescribeSeverityLevelsRequest, DescribeSeverityLevelsResponse, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the refresh status of the Trusted Advisor checks that have the specified check
 * IDs. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation.
 * 
 * Some checks are refreshed automatically, and you can't return their refresh statuses
 * by using the `DescribeTrustedAdvisorCheckRefreshStatuses` operation. If you
 * call this operation for these checks, you might see an
 * `InvalidParameterValue` error.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 * 
 * To call the Trusted Advisor operations in
 * the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland)
 * endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support
 * API in the *Amazon Web Services Support User Guide*.
 */export const describeTrustedAdvisorCheckRefreshStatuses = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses" }, DescribeTrustedAdvisorCheckRefreshStatusesRequest, DescribeTrustedAdvisorCheckRefreshStatusesResponse, [InternalServerError, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about all available Trusted Advisor checks, including the name, ID,
 * category, description, and metadata. You must specify a language code.
 * 
 * The response contains a TrustedAdvisorCheckDescription object for
 * each check. You must set the Amazon Web Services Region to us-east-1.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the `SubscriptionRequiredException` error
 * message appears. For information about changing your support plan, see
 * Amazon Web Services Support.
 * 
 * - The names and descriptions for Trusted Advisor checks are subject to change. We
 * recommend that you specify the check ID in your code to uniquely identify a
 * check.
 * 
 * To call the Trusted Advisor operations in
 * the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland)
 * endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support
 * API in the *Amazon Web Services Support User Guide*.
 */export const describeTrustedAdvisorChecks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeTrustedAdvisorChecks" }, DescribeTrustedAdvisorChecksRequest, DescribeTrustedAdvisorChecksResponse, [InternalServerError, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the results for the Trusted Advisor check summaries for the check IDs that you
 * specified. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation.
 * 
 * The response contains an array of TrustedAdvisorCheckSummary
 * objects.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 * 
 * To call the Trusted Advisor operations in
 * the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland)
 * endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support
 * API in the *Amazon Web Services Support User Guide*.
 */export const describeTrustedAdvisorCheckSummaries = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries" }, DescribeTrustedAdvisorCheckSummariesRequest, DescribeTrustedAdvisorCheckSummariesResponse, [InternalServerError, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Refreshes the Trusted Advisor check that you specify using the check ID. You can get the
 * check IDs by calling the DescribeTrustedAdvisorChecks
 * operation.
 * 
 * Some checks are refreshed automatically. If you call the
 * `RefreshTrustedAdvisorCheck` operation to refresh them, you might see
 * the `InvalidParameterValue` error.
 * 
 * The response contains a TrustedAdvisorCheckRefreshStatus
 * object.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 * 
 * To call the Trusted Advisor operations in
 * the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland)
 * endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support
 * API in the *Amazon Web Services Support User Guide*.
 */export const refreshTrustedAdvisorCheck = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.RefreshTrustedAdvisorCheck" }, RefreshTrustedAdvisorCheckRequest, RefreshTrustedAdvisorCheckResponse, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Resolves a support case. This operation takes a `caseId` and returns the
 * initial and final state of the case.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 */export const resolveCase = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.ResolveCase" }, ResolveCaseRequest, ResolveCaseResponse, [CaseIdNotFound, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a case in the Amazon Web Services Support Center. This operation is similar to how you create a case
 * in the Amazon Web Services Support Center Create
 * Case page.
 * 
 * The Amazon Web Services Support API doesn't support requesting service limit increases. You can submit a
 * service limit increase in the following ways:
 * 
 * - Submit a request from the Amazon Web Services Support Center Create Case page.
 * 
 * - Use the Service Quotas RequestServiceQuotaIncrease operation.
 * 
 * A successful `CreateCase` request returns an Amazon Web Services Support case number. You can use
 * the DescribeCases operation and specify the case number to get
 * existing Amazon Web Services Support cases. After you create a case, use the AddCommunicationToCase operation to add additional communication or
 * attachments to an existing case.
 * 
 * The `caseId` is separate from the `displayId` that appears in
 * the Amazon Web Services Support Center. Use the DescribeCases operation to get the `displayId`.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 */export const createCase = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.CreateCase" }, CreateCaseRequest, CreateCaseResponse, [AttachmentSetExpired, AttachmentSetIdNotFound, CaseCreationLimitExceeded, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the attachment that has the specified ID. Attachments can include screenshots,
 * error logs, or other files that describe your issue. Attachment IDs are generated by the
 * case management system when you add an attachment to a case or case communication.
 * Attachment IDs are returned in the AttachmentDetails objects that are
 * returned by the DescribeCommunications operation.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 */export const describeAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeAttachment" }, DescribeAttachmentRequest, DescribeAttachmentResponse, [AttachmentIdNotFound, DescribeAttachmentLimitExceeded, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of cases that you specify by passing one or more case IDs. You can use
 * the `afterTime` and `beforeTime` parameters to filter the cases by
 * date. You can set values for the `includeResolvedCases` and
 * `includeCommunications` parameters to specify how much information to
 * return.
 * 
 * The response returns the following in JSON format:
 * 
 * - One or more CaseDetails data types.
 * 
 * - One or more `nextToken` values, which specify where to paginate the
 * returned records represented by the `CaseDetails` objects.
 * 
 * Case data is available for 12 months after creation. If a case was created more than
 * 12 months ago, a request might return an error.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 */export const describeCases = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeCases" }, DescribeCasesRequest, DescribeCasesResponse, [CaseIdNotFound, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns communications and attachments for one or more support cases. Use the
 * `afterTime` and `beforeTime` parameters to filter by date. You
 * can use the `caseId` parameter to restrict the results to a specific
 * case.
 * 
 * Case data is available for 12 months after creation. If a case was created more than
 * 12 months ago, a request for data might cause an error.
 * 
 * You can use the `maxResults` and `nextToken` parameters to
 * control the pagination of the results. Set `maxResults` to the number of
 * cases that you want to display on each page, and use `nextToken` to specify
 * the resumption of pagination.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 */export const describeCommunications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeCommunications" }, DescribeCommunicationsRequest, DescribeCommunicationsResponse, [CaseIdNotFound, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of CreateCaseOption types along with the
 * corresponding supported hours and language availability. You can specify the `language`
 * `categoryCode`,
 * `issueType` and `serviceCode` used to retrieve the CreateCaseOptions.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 */export const describeCreateCaseOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeCreateCaseOptions" }, DescribeCreateCaseOptionsRequest, DescribeCreateCaseOptionsResponse, [InternalServerError, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the current list of Amazon Web Services services and a list of service categories for each
 * service. You then use service names and categories in your CreateCase
 * requests. Each Amazon Web Services service has its own set of categories.
 * 
 * The service codes and category codes correspond to the values that appear in the
 * **Service** and **Category** lists on the Amazon Web Services Support Center Create Case page. The values in those fields
 * don't necessarily match the service codes and categories returned by the
 * `DescribeServices` operation. Always use the service codes and categories
 * that the `DescribeServices` operation returns, so that you have the most
 * recent set of service and category codes.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 */export const describeServices = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeServices" }, DescribeServicesRequest, DescribeServicesResponse, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of supported languages for a specified `categoryCode`,
 * `issueType` and `serviceCode`. The returned supported languages will
 * include a ISO 639-1 code for the `language`, and the language display name.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 */export const describeSupportedLanguages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeSupportedLanguages" }, DescribeSupportedLanguagesRequest, DescribeSupportedLanguagesResponse, [InternalServerError, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more attachments to an attachment set.
 * 
 * An attachment set is a temporary container for attachments that you add to a case or
 * case communication. The set is available for 1 hour after it's created. The
 * `expiryTime` returned in the response is when the set expires.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 */export const addAttachmentsToSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.AddAttachmentsToSet" }, AddAttachmentsToSetRequest, AddAttachmentsToSetResponse, [AttachmentLimitExceeded, AttachmentSetExpired, AttachmentSetIdNotFound, AttachmentSetSizeLimitExceeded, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the results of the Trusted Advisor check that has the specified check ID. You
 * can get the check IDs by calling the DescribeTrustedAdvisorChecks
 * operation.
 * 
 * The response contains a TrustedAdvisorCheckResult object, which
 * contains these three objects:
 * 
 * - TrustedAdvisorCategorySpecificSummary
 * 
 * - TrustedAdvisorResourceDetail
 * 
 * - TrustedAdvisorResourcesSummary
 * 
 * In addition, the response contains these fields:
 * 
 * - **status** - The alert status of the check
 * can be `ok` (green), `warning` (yellow),
 * `error` (red), or `not_available`.
 * 
 * - **timestamp** - The time of the last refresh
 * of the check.
 * 
 * - **checkId** - The unique identifier for the
 * check.
 * 
 * - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 * API.
 * 
 * - If you call the Amazon Web Services Support API from an account that doesn't have a
 * Business, Enterprise On-Ramp, or Enterprise Support plan, the
 * `SubscriptionRequiredException` error message appears. For
 * information about changing your support plan, see Amazon Web Services Support.
 * 
 * To call the Trusted Advisor operations in
 * the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland)
 * endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support
 * API in the *Amazon Web Services Support User Guide*.
 */export const describeTrustedAdvisorCheckResult = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-15", sdkId: "Support", sigV4ServiceName: "support", name: "AWSSupport_20130415.DescribeTrustedAdvisorCheckResult" }, DescribeTrustedAdvisorCheckResultRequest, DescribeTrustedAdvisorCheckResultResponse, [InternalServerError, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

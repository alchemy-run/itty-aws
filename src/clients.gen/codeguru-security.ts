import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetAccountConfigurationRequest extends S.Class<GetAccountConfigurationRequest>("GetAccountConfigurationRequest")({}) {}
export const TagKeyList = S.Array(S.String);
export class CreateUploadUrlRequest extends S.Class<CreateUploadUrlRequest>("CreateUploadUrlRequest")({scanName: S.String}) {}
export class GetFindingsRequest extends S.Class<GetFindingsRequest>("GetFindingsRequest")({scanName: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), status: S.optional(S.String)}) {}
export class GetMetricsSummaryRequest extends S.Class<GetMetricsSummaryRequest>("GetMetricsSummaryRequest")({date: S.Date}) {}
export class GetScanRequest extends S.Class<GetScanRequest>("GetScanRequest")({scanName: S.String, runId: S.optional(S.String)}) {}
export class ListFindingsMetricsRequest extends S.Class<ListFindingsMetricsRequest>("ListFindingsMetricsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), startDate: S.Date, endDate: S.Date}) {}
export class ListScansRequest extends S.Class<ListScansRequest>("ListScansRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class EncryptionConfig extends S.Class<EncryptionConfig>("EncryptionConfig")({kmsKeyArn: S.optional(S.String)}) {}
export class UpdateAccountConfigurationRequest extends S.Class<UpdateAccountConfigurationRequest>("UpdateAccountConfigurationRequest")({encryptionConfig: EncryptionConfig}) {}
export class FindingIdentifier extends S.Class<FindingIdentifier>("FindingIdentifier")({scanName: S.String, findingId: S.String}) {}
export const FindingIdentifiers = S.Array(FindingIdentifier);
export const ResourceId = S.Union(S.String);
export class BatchGetFindingsRequest extends S.Class<BatchGetFindingsRequest>("BatchGetFindingsRequest")({findingIdentifiers: FindingIdentifiers}) {}
export class CreateScanRequest extends S.Class<CreateScanRequest>("CreateScanRequest")({clientToken: S.optional(S.String), resourceId: ResourceId, scanName: S.String, scanType: S.optional(S.String), analysisType: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class GetAccountConfigurationResponse extends S.Class<GetAccountConfigurationResponse>("GetAccountConfigurationResponse")({encryptionConfig: EncryptionConfig}) {}
export class GetScanResponse extends S.Class<GetScanResponse>("GetScanResponse")({scanName: S.String, runId: S.String, scanState: S.String, createdAt: S.Date, analysisType: S.String, updatedAt: S.optional(S.Date), numberOfRevisions: S.optional(S.Number), scanNameArn: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({errorCode: S.String, message: S.String, resourceId: S.optional(S.String), resourceType: S.optional(S.String)}) {}
export class ConflictException extends S.Class<ConflictException>("ConflictException")({errorCode: S.String, message: S.String, resourceId: S.String, resourceType: S.String}) {}
export class UpdateAccountConfigurationResponse extends S.Class<UpdateAccountConfigurationResponse>("UpdateAccountConfigurationResponse")({encryptionConfig: EncryptionConfig}) {}
export const DetectorTags = S.Array(S.String);
export class ScanNameWithFindingNum extends S.Class<ScanNameWithFindingNum>("ScanNameWithFindingNum")({scanName: S.optional(S.String), findingNumber: S.optional(S.Number)}) {}
export const ScansWithMostOpenCriticalFindings = S.Array(ScanNameWithFindingNum);
export const RequestHeaderMap = S.Record({key: S.String, value: S.String});
export class FindingMetricsValuePerSeverity extends S.Class<FindingMetricsValuePerSeverity>("FindingMetricsValuePerSeverity")({info: S.optional(S.Number), low: S.optional(S.Number), medium: S.optional(S.Number), high: S.optional(S.Number), critical: S.optional(S.Number)}) {}
export class AccountFindingsMetric extends S.Class<AccountFindingsMetric>("AccountFindingsMetric")({date: S.optional(S.Date), newFindings: S.optional(FindingMetricsValuePerSeverity), closedFindings: S.optional(FindingMetricsValuePerSeverity), openFindings: S.optional(FindingMetricsValuePerSeverity), meanTimeToClose: S.optional(FindingMetricsValuePerSeverity)}) {}
export const FindingsMetricList = S.Array(AccountFindingsMetric);
export class ScanSummary extends S.Class<ScanSummary>("ScanSummary")({scanState: S.String, createdAt: S.Date, updatedAt: S.optional(S.Date), scanName: S.String, runId: S.String, scanNameArn: S.optional(S.String)}) {}
export const ScanSummaries = S.Array(ScanSummary);
export const ReferenceUrls = S.Array(S.String);
export const RelatedVulnerabilities = S.Array(S.String);
export class CreateScanResponse extends S.Class<CreateScanResponse>("CreateScanResponse")({scanName: S.String, runId: S.String, resourceId: ResourceId, scanState: S.String, scanNameArn: S.optional(S.String)}) {}
export class CreateUploadUrlResponse extends S.Class<CreateUploadUrlResponse>("CreateUploadUrlResponse")({s3Url: S.String, requestHeaders: RequestHeaderMap, codeArtifactId: S.String}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({error: S.optional(S.String), message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({errorCode: S.String, message: S.String, resourceId: S.String, resourceType: S.String}) {}
export class ListFindingsMetricsResponse extends S.Class<ListFindingsMetricsResponse>("ListFindingsMetricsResponse")({findingsMetrics: S.optional(FindingsMetricList), nextToken: S.optional(S.String)}) {}
export class ListScansResponse extends S.Class<ListScansResponse>("ListScansResponse")({summaries: S.optional(ScanSummaries), nextToken: S.optional(S.String)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({errorCode: S.String, message: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String)}) {}
export class Resource extends S.Class<Resource>("Resource")({id: S.optional(S.String), subResourceId: S.optional(S.String)}) {}
export class CategoryWithFindingNum extends S.Class<CategoryWithFindingNum>("CategoryWithFindingNum")({categoryName: S.optional(S.String), findingNumber: S.optional(S.Number)}) {}
export const CategoriesWithMostFindings = S.Array(CategoryWithFindingNum);
export const ScansWithMostOpenFindings = S.Array(ScanNameWithFindingNum);
export class BatchGetFindingsError extends S.Class<BatchGetFindingsError>("BatchGetFindingsError")({scanName: S.String, findingId: S.String, errorCode: S.String, message: S.String}) {}
export const BatchGetFindingsErrors = S.Array(BatchGetFindingsError);
export class MetricsSummary extends S.Class<MetricsSummary>("MetricsSummary")({date: S.optional(S.Date), openFindings: S.optional(FindingMetricsValuePerSeverity), categoriesWithMostFindings: S.optional(CategoriesWithMostFindings), scansWithMostOpenFindings: S.optional(ScansWithMostOpenFindings), scansWithMostOpenCriticalFindings: S.optional(ScansWithMostOpenCriticalFindings)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class Recommendation extends S.Class<Recommendation>("Recommendation")({text: S.optional(S.String), url: S.optional(S.String)}) {}
export class SuggestedFix extends S.Class<SuggestedFix>("SuggestedFix")({description: S.optional(S.String), code: S.optional(S.String)}) {}
export const SuggestedFixes = S.Array(SuggestedFix);
export class CodeLine extends S.Class<CodeLine>("CodeLine")({number: S.optional(S.Number), content: S.optional(S.String)}) {}
export const CodeSnippet = S.Array(CodeLine);
export class FilePath extends S.Class<FilePath>("FilePath")({name: S.optional(S.String), path: S.optional(S.String), startLine: S.optional(S.Number), endLine: S.optional(S.Number), codeSnippet: S.optional(CodeSnippet)}) {}
export class Vulnerability extends S.Class<Vulnerability>("Vulnerability")({referenceUrls: S.optional(ReferenceUrls), relatedVulnerabilities: S.optional(RelatedVulnerabilities), id: S.optional(S.String), filePath: S.optional(FilePath), itemCount: S.optional(S.Number)}) {}
export class Remediation extends S.Class<Remediation>("Remediation")({recommendation: S.optional(Recommendation), suggestedFixes: S.optional(SuggestedFixes)}) {}
export class Finding extends S.Class<Finding>("Finding")({createdAt: S.optional(S.Date), description: S.optional(S.String), generatorId: S.optional(S.String), id: S.optional(S.String), updatedAt: S.optional(S.Date), type: S.optional(S.String), status: S.optional(S.String), resource: S.optional(Resource), vulnerability: S.optional(Vulnerability), severity: S.optional(S.String), remediation: S.optional(Remediation), title: S.optional(S.String), detectorTags: S.optional(DetectorTags), detectorId: S.optional(S.String), detectorName: S.optional(S.String), ruleId: S.optional(S.String)}) {}
export const Findings = S.Array(Finding);
export class BatchGetFindingsResponse extends S.Class<BatchGetFindingsResponse>("BatchGetFindingsResponse")({findings: Findings, failedFindings: BatchGetFindingsErrors}) {}
export class GetMetricsSummaryResponse extends S.Class<GetMetricsSummaryResponse>("GetMetricsSummaryResponse")({metricsSummary: S.optional(MetricsSummary)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({errorCode: S.String, message: S.String, reason: S.String, fieldList: S.optional(ValidationExceptionFieldList)}) {}
export class GetFindingsResponse extends S.Class<GetFindingsResponse>("GetFindingsResponse")({findings: S.optional(Findings), nextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "CodeGuru Security", sigV4ServiceName: "codeguru-security", name: "AwsCodeGuruSecurity.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateAccountConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/updateAccountConfiguration", method: "PUT", sdkId: "CodeGuru Security", sigV4ServiceName: "codeguru-security", name: "AwsCodeGuruSecurity.UpdateAccountConfiguration" }, UpdateAccountConfigurationRequest, UpdateAccountConfigurationResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createScan = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/scans", method: "POST", sdkId: "CodeGuru Security", sigV4ServiceName: "codeguru-security", name: "AwsCodeGuruSecurity.CreateScan" }, CreateScanRequest, CreateScanResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createUploadUrl = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/uploadUrl", method: "POST", sdkId: "CodeGuru Security", sigV4ServiceName: "codeguru-security", name: "AwsCodeGuruSecurity.CreateUploadUrl" }, CreateUploadUrlRequest, CreateUploadUrlResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getAccountConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/accountConfiguration/get", method: "GET", sdkId: "CodeGuru Security", sigV4ServiceName: "codeguru-security", name: "AwsCodeGuruSecurity.GetAccountConfiguration" }, GetAccountConfigurationRequest, GetAccountConfigurationResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getScan = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/scans/{scanName}", method: "GET", sdkId: "CodeGuru Security", sigV4ServiceName: "codeguru-security", name: "AwsCodeGuruSecurity.GetScan" }, GetScanRequest, GetScanResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listFindingsMetrics = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/metrics/findings", method: "GET", sdkId: "CodeGuru Security", sigV4ServiceName: "codeguru-security", name: "AwsCodeGuruSecurity.ListFindingsMetrics" }, ListFindingsMetricsRequest, ListFindingsMetricsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listScans = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/scans", method: "GET", sdkId: "CodeGuru Security", sigV4ServiceName: "codeguru-security", name: "AwsCodeGuruSecurity.ListScans" }, ListScansRequest, ListScansResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "GET", sdkId: "CodeGuru Security", sigV4ServiceName: "codeguru-security", name: "AwsCodeGuruSecurity.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchGetFindings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/batchGetFindings", method: "POST", sdkId: "CodeGuru Security", sigV4ServiceName: "codeguru-security", name: "AwsCodeGuruSecurity.BatchGetFindings" }, BatchGetFindingsRequest, BatchGetFindingsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getMetricsSummary = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/metrics/summary", method: "GET", sdkId: "CodeGuru Security", sigV4ServiceName: "codeguru-security", name: "AwsCodeGuruSecurity.GetMetricsSummary" }, GetMetricsSummaryRequest, GetMetricsSummaryResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "POST", sdkId: "CodeGuru Security", sigV4ServiceName: "codeguru-security", name: "AwsCodeGuruSecurity.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getFindings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/findings/{scanName}", method: "GET", sdkId: "CodeGuru Security", sigV4ServiceName: "codeguru-security", name: "AwsCodeGuruSecurity.GetFindings" }, GetFindingsRequest, GetFindingsResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

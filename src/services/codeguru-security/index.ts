import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class CodeGuruSecurity extends AWSServiceClient {
  batchGetFindings(
    input: BatchGetFindingsRequest,
  ): Effect.Effect<
    BatchGetFindingsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createScan(
    input: CreateScanRequest,
  ): Effect.Effect<
    CreateScanResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createUploadUrl(
    input: CreateUploadUrlRequest,
  ): Effect.Effect<
    CreateUploadUrlResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAccountConfiguration(
    input: GetAccountConfigurationRequest,
  ): Effect.Effect<
    GetAccountConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getFindings(
    input: GetFindingsRequest,
  ): Effect.Effect<
    GetFindingsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMetricsSummary(
    input: GetMetricsSummaryRequest,
  ): Effect.Effect<
    GetMetricsSummaryResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getScan(
    input: GetScanRequest,
  ): Effect.Effect<
    GetScanResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFindingsMetrics(
    input: ListFindingsMetricsRequest,
  ): Effect.Effect<
    ListFindingsMetricsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listScans(
    input: ListScansRequest,
  ): Effect.Effect<
    ListScansResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
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
  updateAccountConfiguration(
    input: UpdateAccountConfigurationRequest,
  ): Effect.Effect<
    UpdateAccountConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class CodeguruSecurity extends CodeGuruSecurity {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly errorCode: string;
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export interface AccountFindingsMetric {
  date?: Date | string;
  newFindings?: FindingMetricsValuePerSeverity;
  closedFindings?: FindingMetricsValuePerSeverity;
  openFindings?: FindingMetricsValuePerSeverity;
  meanTimeToClose?: FindingMetricsValuePerSeverity;
}
export type AnalysisType = "Security" | "All";
export interface BatchGetFindingsError {
  scanName: string;
  findingId: string;
  errorCode: ErrorCode;
  message: string;
}
export type BatchGetFindingsErrors = Array<BatchGetFindingsError>;
export interface BatchGetFindingsRequest {
  findingIdentifiers: Array<FindingIdentifier>;
}
export interface BatchGetFindingsResponse {
  findings: Array<Finding>;
  failedFindings: Array<BatchGetFindingsError>;
}
export type CategoriesWithMostFindings = Array<CategoryWithFindingNum>;
export interface CategoryWithFindingNum {
  categoryName?: string;
  findingNumber?: number;
}
export type ClientToken = string;

export interface CodeLine {
  number?: number;
  content?: string;
}
export type CodeSnippet = Array<CodeLine>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly errorCode: string;
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CreateScanRequest {
  clientToken?: string;
  resourceId: ResourceId;
  scanName: string;
  scanType?: ScanType;
  analysisType?: AnalysisType;
  tags?: Record<string, string>;
}
export interface CreateScanResponse {
  scanName: string;
  runId: string;
  resourceId: ResourceId;
  scanState: ScanState;
  scanNameArn?: string;
}
export interface CreateUploadUrlRequest {
  scanName: string;
}
export interface CreateUploadUrlResponse {
  s3Url: string;
  requestHeaders: Record<string, string>;
  codeArtifactId: string;
}
export type DetectorTags = Array<string>;
export interface EncryptionConfig {
  kmsKeyArn?: string;
}
export type ErrorCode =
  | "DUPLICATE_IDENTIFIER"
  | "ITEM_DOES_NOT_EXIST"
  | "INTERNAL_ERROR"
  | "INVALID_FINDING_ID"
  | "INVALID_SCAN_NAME";
export type ErrorMessage = string;

export interface FilePath {
  name?: string;
  path?: string;
  startLine?: number;
  endLine?: number;
  codeSnippet?: Array<CodeLine>;
}
export interface Finding {
  createdAt?: Date | string;
  description?: string;
  generatorId?: string;
  id?: string;
  updatedAt?: Date | string;
  type?: string;
  status?: Status;
  resource?: Resource;
  vulnerability?: Vulnerability;
  severity?: Severity;
  remediation?: Remediation;
  title?: string;
  detectorTags?: Array<string>;
  detectorId?: string;
  detectorName?: string;
  ruleId?: string;
}
export interface FindingIdentifier {
  scanName: string;
  findingId: string;
}
export type FindingIdentifiers = Array<FindingIdentifier>;
export interface FindingMetricsValuePerSeverity {
  info?: number;
  low?: number;
  medium?: number;
  high?: number;
  critical?: number;
}
export type Findings = Array<Finding>;
export type FindingsMetricList = Array<AccountFindingsMetric>;
export interface GetAccountConfigurationRequest {}
export interface GetAccountConfigurationResponse {
  encryptionConfig: EncryptionConfig;
}
export interface GetFindingsRequest {
  scanName: string;
  nextToken?: string;
  maxResults?: number;
  status?: Status;
}
export interface GetFindingsResponse {
  findings?: Array<Finding>;
  nextToken?: string;
}
export interface GetMetricsSummaryRequest {
  date: Date | string;
}
export interface GetMetricsSummaryResponse {
  metricsSummary?: MetricsSummary;
}
export interface GetScanRequest {
  scanName: string;
  runId?: string;
}
export interface GetScanResponse {
  scanName: string;
  runId: string;
  scanState: ScanState;
  createdAt: Date | string;
  analysisType: AnalysisType;
  updatedAt?: Date | string;
  numberOfRevisions?: number;
  scanNameArn?: string;
  errorMessage?: string;
}
export type HeaderKey = string;

export type HeaderValue = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly error?: string;
  readonly message?: string;
}> {}
export type KmsKeyArn = string;

export interface ListFindingsMetricsRequest {
  nextToken?: string;
  maxResults?: number;
  startDate: Date | string;
  endDate: Date | string;
}
export interface ListFindingsMetricsResponse {
  findingsMetrics?: Array<AccountFindingsMetric>;
  nextToken?: string;
}
export interface ListScansRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListScansResponse {
  summaries?: Array<ScanSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface MetricsSummary {
  date?: Date | string;
  openFindings?: FindingMetricsValuePerSeverity;
  categoriesWithMostFindings?: Array<CategoryWithFindingNum>;
  scansWithMostOpenFindings?: Array<ScanNameWithFindingNum>;
  scansWithMostOpenCriticalFindings?: Array<ScanNameWithFindingNum>;
}
export type NextToken = string;

export interface Recommendation {
  text?: string;
  url?: string;
}
export type ReferenceUrls = Array<string>;
export type RelatedVulnerabilities = Array<string>;
export interface Remediation {
  recommendation?: Recommendation;
  suggestedFixes?: Array<SuggestedFix>;
}
export type RequestHeaderMap = Record<string, string>;
export interface Resource {
  id?: string;
  subResourceId?: string;
}
interface _ResourceId {
  codeArtifactId?: string;
}

export type ResourceId = _ResourceId & { codeArtifactId: string };
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly errorCode: string;
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type S3Url = string;

export type ScanName = string;

export type ScanNameArn = string;

export interface ScanNameWithFindingNum {
  scanName?: string;
  findingNumber?: number;
}
export type ScanState = "InProgress" | "Successful" | "Failed";
export type ScanSummaries = Array<ScanSummary>;
export interface ScanSummary {
  scanState: ScanState;
  createdAt: Date | string;
  updatedAt?: Date | string;
  scanName: string;
  runId: string;
  scanNameArn?: string;
}
export type ScansWithMostOpenCriticalFindings = Array<ScanNameWithFindingNum>;
export type ScansWithMostOpenFindings = Array<ScanNameWithFindingNum>;
export type ScanType = "Standard" | "Express";
export type Severity = "Critical" | "High" | "Medium" | "Low" | "Info";
export type Status = "Closed" | "Open" | "All";
export interface SuggestedFix {
  description?: string;
  code?: string;
}
export type SuggestedFixes = Array<SuggestedFix>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly errorCode: string;
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAccountConfigurationRequest {
  encryptionConfig: EncryptionConfig;
}
export interface UpdateAccountConfigurationResponse {
  encryptionConfig: EncryptionConfig;
}
export type Uuid = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly errorCode: string;
  readonly message: string;
  readonly reason: ValidationExceptionReason;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "other"
  | "lambdaCodeShaMisMatch";
export interface Vulnerability {
  referenceUrls?: Array<string>;
  relatedVulnerabilities?: Array<string>;
  id?: string;
  filePath?: FilePath;
  itemCount?: number;
}
export declare namespace BatchGetFindings {
  export type Input = BatchGetFindingsRequest;
  export type Output = BatchGetFindingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateScan {
  export type Input = CreateScanRequest;
  export type Output = CreateScanResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateUploadUrl {
  export type Input = CreateUploadUrlRequest;
  export type Output = CreateUploadUrlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAccountConfiguration {
  export type Input = GetAccountConfigurationRequest;
  export type Output = GetAccountConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFindings {
  export type Input = GetFindingsRequest;
  export type Output = GetFindingsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMetricsSummary {
  export type Input = GetMetricsSummaryRequest;
  export type Output = GetMetricsSummaryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetScan {
  export type Input = GetScanRequest;
  export type Output = GetScanResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFindingsMetrics {
  export type Input = ListFindingsMetricsRequest;
  export type Output = ListFindingsMetricsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListScans {
  export type Input = ListScansRequest;
  export type Output = ListScansResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
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

export declare namespace UpdateAccountConfiguration {
  export type Input = UpdateAccountConfigurationRequest;
  export type Output = UpdateAccountConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

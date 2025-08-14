import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class BackupSearch extends AWSServiceClient {
  listSearchJobBackups(
    input: ListSearchJobBackupsInput,
  ): Effect.Effect<
    ListSearchJobBackupsOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  listSearchJobResults(
    input: ListSearchJobResultsInput,
  ): Effect.Effect<
    ListSearchJobResultsOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
}

export declare class Backupsearch extends BackupSearch {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface BackupCreationTimeFilter {
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CurrentSearchProgress {
  RecoveryPointsScannedCount?: number;
  ItemsScannedCount?: number;
  ItemsMatchedCount?: number;
}
export interface EBSItemFilter {
  FilePaths?: Array<StringCondition>;
  Sizes?: Array<LongCondition>;
  CreationTimes?: Array<TimeCondition>;
  LastModificationTimes?: Array<TimeCondition>;
}
export type EBSItemFilters = Array<EBSItemFilter>;
export interface EBSResultItem {
  BackupResourceArn?: string;
  SourceResourceArn?: string;
  BackupVaultName?: string;
  FileSystemIdentifier?: string;
  FilePath?: string;
  FileSize?: number;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type EncryptionKeyArn = string;

export type ExportJobArn = string;

export type ExportJobStatus = "RUNNING" | "FAILED" | "COMPLETED";
export type ExportJobSummaries = Array<ExportJobSummary>;
export interface ExportJobSummary {
  ExportJobIdentifier: string;
  ExportJobArn?: string;
  Status?: ExportJobStatus;
  CreationTime?: Date | string;
  CompletionTime?: Date | string;
  StatusMessage?: string;
  SearchJobArn?: string;
}
interface _ExportSpecification {
  s3ExportSpecification?: S3ExportSpecification;
}

export type ExportSpecification = _ExportSpecification & {
  s3ExportSpecification: S3ExportSpecification;
};
export type FilePath = string;

export type GenericId = string;

export interface GetSearchJobInput {
  SearchJobIdentifier: string;
}
export interface GetSearchJobOutput {
  Name?: string;
  SearchScopeSummary?: SearchScopeSummary;
  CurrentSearchProgress?: CurrentSearchProgress;
  StatusMessage?: string;
  EncryptionKeyArn?: string;
  CompletionTime?: Date | string;
  Status: SearchJobState;
  SearchScope: SearchScope;
  ItemFilters: ItemFilters;
  CreationTime: Date | string;
  SearchJobIdentifier: string;
  SearchJobArn: string;
}
export interface GetSearchResultExportJobInput {
  ExportJobIdentifier: string;
}
export interface GetSearchResultExportJobOutput {
  ExportJobIdentifier: string;
  ExportJobArn?: string;
  Status?: ExportJobStatus;
  CreationTime?: Date | string;
  CompletionTime?: Date | string;
  StatusMessage?: string;
  ExportSpecification?: ExportSpecification;
  SearchJobArn?: string;
}
export type IamRoleArn = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface ItemFilters {
  S3ItemFilters?: Array<S3ItemFilter>;
  EBSItemFilters?: Array<EBSItemFilter>;
}
export interface ListSearchJobBackupsInput {
  SearchJobIdentifier: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSearchJobBackupsOutput {
  Results: Array<SearchJobBackupsResult>;
  NextToken?: string;
}
export interface ListSearchJobResultsInput {
  SearchJobIdentifier: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSearchJobResultsOutput {
  Results: Array<ResultItem>;
  NextToken?: string;
}
export interface ListSearchJobsInput {
  ByStatus?: SearchJobState;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSearchJobsOutput {
  SearchJobs: Array<SearchJobSummary>;
  NextToken?: string;
}
export interface ListSearchResultExportJobsInput {
  Status?: ExportJobStatus;
  SearchJobIdentifier?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSearchResultExportJobsOutput {
  ExportJobs: Array<ExportJobSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Partial<Record<string, string>>;
}
export interface LongCondition {
  Value: number;
  Operator?: LongConditionOperator;
}
export type LongConditionList = Array<LongCondition>;
export type LongConditionOperator =
  | "EQUALS_TO"
  | "NOT_EQUALS_TO"
  | "LESS_THAN_EQUAL_TO"
  | "GREATER_THAN_EQUAL_TO";
export type ObjectKey = string;

export type RecoveryPoint = string;

export type RecoveryPointArnList = Array<string>;
export type ResourceArnList = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ResourceType = "S3" | "EBS";
export type ResourceTypeList = Array<ResourceType>;
interface _ResultItem {
  S3ResultItem?: S3ResultItem;
  EBSResultItem?: EBSResultItem;
}

export type ResultItem =
  | (_ResultItem & { S3ResultItem: S3ResultItem })
  | (_ResultItem & { EBSResultItem: EBSResultItem });
export type Results = Array<ResultItem>;
export interface S3ExportSpecification {
  DestinationBucket: string;
  DestinationPrefix?: string;
}
export interface S3ItemFilter {
  ObjectKeys?: Array<StringCondition>;
  Sizes?: Array<LongCondition>;
  CreationTimes?: Array<TimeCondition>;
  VersionIds?: Array<StringCondition>;
  ETags?: Array<StringCondition>;
}
export type S3ItemFilters = Array<S3ItemFilter>;
export interface S3ResultItem {
  BackupResourceArn?: string;
  SourceResourceArn?: string;
  BackupVaultName?: string;
  ObjectKey?: string;
  ObjectSize?: number;
  CreationTime?: Date | string;
  ETag?: string;
  VersionId?: string;
}
export type SearchJobArn = string;

export interface SearchJobBackupsResult {
  Status?: SearchJobState;
  StatusMessage?: string;
  ResourceType?: ResourceType;
  BackupResourceArn?: string;
  SourceResourceArn?: string;
  IndexCreationTime?: Date | string;
  BackupCreationTime?: Date | string;
}
export type SearchJobBackupsResults = Array<SearchJobBackupsResult>;
export type SearchJobs = Array<SearchJobSummary>;
export type SearchJobState =
  | "RUNNING"
  | "COMPLETED"
  | "STOPPING"
  | "STOPPED"
  | "FAILED";
export interface SearchJobSummary {
  SearchJobIdentifier?: string;
  SearchJobArn?: string;
  Name?: string;
  Status?: SearchJobState;
  CreationTime?: Date | string;
  CompletionTime?: Date | string;
  SearchScopeSummary?: SearchScopeSummary;
  StatusMessage?: string;
}
export interface SearchScope {
  BackupResourceTypes: Array<ResourceType>;
  BackupResourceCreationTime?: BackupCreationTimeFilter;
  SourceResourceArns?: Array<string>;
  BackupResourceArns?: Array<string>;
  BackupResourceTags?: Partial<Record<string, string>>;
}
export interface SearchScopeSummary {
  TotalRecoveryPointsToScanCount?: number;
  TotalItemsToScanCount?: number;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export interface StartSearchJobInput {
  Tags?: Partial<Record<string, string>>;
  Name?: string;
  EncryptionKeyArn?: string;
  ClientToken?: string;
  SearchScope: SearchScope;
  ItemFilters?: ItemFilters;
}
export interface StartSearchJobOutput {
  SearchJobArn?: string;
  CreationTime?: Date | string;
  SearchJobIdentifier?: string;
}
export interface StartSearchResultExportJobInput {
  SearchJobIdentifier: string;
  ExportSpecification: ExportSpecification;
  ClientToken?: string;
  Tags?: Partial<Record<string, string>>;
  RoleArn?: string;
}
export interface StartSearchResultExportJobOutput {
  ExportJobArn?: string;
  ExportJobIdentifier: string;
}
export interface StopSearchJobInput {
  SearchJobIdentifier: string;
}
export interface StopSearchJobOutput {}
export interface StringCondition {
  Value: string;
  Operator?: StringConditionOperator;
}
export type StringConditionList = Array<StringCondition>;
export type StringConditionOperator =
  | "EQUALS_TO"
  | "NOT_EQUALS_TO"
  | "CONTAINS"
  | "DOES_NOT_CONTAIN"
  | "BEGINS_WITH"
  | "ENDS_WITH"
  | "DOES_NOT_BEGIN_WITH"
  | "DOES_NOT_END_WITH";
export type TagKeys = Array<string>;
export type TagMap = Partial<Record<string, string>>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Partial<Record<string, string>>;
}
export interface TagResourceResponse {}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface TimeCondition {
  Value: Date | string;
  Operator?: TimeConditionOperator;
}
export type TimeConditionList = Array<TimeCondition>;
export type TimeConditionOperator =
  | "EQUALS_TO"
  | "NOT_EQUALS_TO"
  | "LESS_THAN_EQUAL_TO"
  | "GREATER_THAN_EQUAL_TO";
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export declare namespace ListSearchJobBackups {
  export type Input = ListSearchJobBackupsInput;
  export type Output = ListSearchJobBackupsOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace ListSearchJobResults {
  export type Input = ListSearchJobResultsInput;
  export type Output = ListSearchJobResultsOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ResourceGroupsTaggingAPI extends AWSServiceClient {
  describeReportCreation(
    input: DescribeReportCreationInput,
  ): Effect.Effect<
    DescribeReportCreationOutput,
    | ConstraintViolationException
    | InternalServiceException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError
  >;
  getComplianceSummary(
    input: GetComplianceSummaryInput,
  ): Effect.Effect<
    GetComplianceSummaryOutput,
    | ConstraintViolationException
    | InternalServiceException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError
  >;
  getResources(
    input: GetResourcesInput,
  ): Effect.Effect<
    GetResourcesOutput,
    | InternalServiceException
    | InvalidParameterException
    | PaginationTokenExpiredException
    | ThrottledException
    | CommonAwsError
  >;
  getTagKeys(
    input: GetTagKeysInput,
  ): Effect.Effect<
    GetTagKeysOutput,
    | InternalServiceException
    | InvalidParameterException
    | PaginationTokenExpiredException
    | ThrottledException
    | CommonAwsError
  >;
  getTagValues(
    input: GetTagValuesInput,
  ): Effect.Effect<
    GetTagValuesOutput,
    | InternalServiceException
    | InvalidParameterException
    | PaginationTokenExpiredException
    | ThrottledException
    | CommonAwsError
  >;
  startReportCreation(
    input: StartReportCreationInput,
  ): Effect.Effect<
    StartReportCreationOutput,
    | ConcurrentModificationException
    | ConstraintViolationException
    | InternalServiceException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError
  >;
  tagResources(
    input: TagResourcesInput,
  ): Effect.Effect<
    TagResourcesOutput,
    | InternalServiceException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError
  >;
  untagResources(
    input: UntagResourcesInput,
  ): Effect.Effect<
    UntagResourcesOutput,
    | InternalServiceException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError
  >;
}

export declare class ResourceGroupsTaggingApi extends ResourceGroupsTaggingAPI {}

export type AmazonResourceType = string;

export interface ComplianceDetails {
  NoncompliantKeys?: Array<string>;
  KeysWithNoncompliantValues?: Array<string>;
  ComplianceStatus?: boolean;
}
export type ComplianceStatus = boolean;

export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export declare class ConstraintViolationException extends EffectData.TaggedError(
  "ConstraintViolationException",
)<{
  readonly Message?: string;
}> {}
export interface DescribeReportCreationInput {}
export interface DescribeReportCreationOutput {
  Status?: string;
  S3Location?: string;
  StartDate?: string;
  ErrorMessage?: string;
}
export type ErrorCode =
  | "INTERNAL_SERVICE_EXCEPTION"
  | "INVALID_PARAMETER_EXCEPTION";
export type ErrorMessage = string;

export type ExceptionMessage = string;

export type ExcludeCompliantResources = boolean;

export type FailedResourcesMap = Record<string, FailureInfo>;
export interface FailureInfo {
  StatusCode?: number;
  ErrorCode?: ErrorCode;
  ErrorMessage?: string;
}
export interface GetComplianceSummaryInput {
  TargetIdFilters?: Array<string>;
  RegionFilters?: Array<string>;
  ResourceTypeFilters?: Array<string>;
  TagKeyFilters?: Array<string>;
  GroupBy?: Array<GroupByAttribute>;
  MaxResults?: number;
  PaginationToken?: string;
}
export interface GetComplianceSummaryOutput {
  SummaryList?: Array<Summary>;
  PaginationToken?: string;
}
export interface GetResourcesInput {
  PaginationToken?: string;
  TagFilters?: Array<TagFilter>;
  ResourcesPerPage?: number;
  TagsPerPage?: number;
  ResourceTypeFilters?: Array<string>;
  IncludeComplianceDetails?: boolean;
  ExcludeCompliantResources?: boolean;
  ResourceARNList?: Array<string>;
}
export interface GetResourcesOutput {
  PaginationToken?: string;
  ResourceTagMappingList?: Array<ResourceTagMapping>;
}
export interface GetTagKeysInput {
  PaginationToken?: string;
}
export interface GetTagKeysOutput {
  PaginationToken?: string;
  TagKeys?: Array<string>;
}
export interface GetTagValuesInput {
  PaginationToken?: string;
  Key: string;
}
export interface GetTagValuesOutput {
  PaginationToken?: string;
  TagValues?: Array<string>;
}
export type GroupBy = Array<GroupByAttribute>;
export type GroupByAttribute = "TARGET_ID" | "REGION" | "RESOURCE_TYPE";
export type IncludeComplianceDetails = boolean;

export declare class InternalServiceException extends EffectData.TaggedError(
  "InternalServiceException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message?: string;
}> {}
export type LastUpdated = string;

export type MaxResultsGetComplianceSummary = number;

export type NonCompliantResources = number;

export type PaginationToken = string;

export declare class PaginationTokenExpiredException extends EffectData.TaggedError(
  "PaginationTokenExpiredException",
)<{
  readonly Message?: string;
}> {}
export type Region = string;

export type RegionFilterList = Array<string>;
export type ResourceARN = string;

export type ResourceARNListForGet = Array<string>;
export type ResourceARNListForTagUntag = Array<string>;
export type ResourcesPerPage = number;

export interface ResourceTagMapping {
  ResourceARN?: string;
  Tags?: Array<Tag>;
  ComplianceDetails?: ComplianceDetails;
}
export type ResourceTagMappingList = Array<ResourceTagMapping>;
export type ResourceTypeFilterList = Array<string>;
export type S3Bucket = string;

export type S3Location = string;

export type StartDate = string;

export interface StartReportCreationInput {
  S3Bucket: string;
}
export interface StartReportCreationOutput {}
export type Status = string;

export type StatusCode = number;

export interface Summary {
  LastUpdated?: string;
  TargetId?: string;
  TargetIdType?: TargetIdType;
  Region?: string;
  ResourceType?: string;
  NonCompliantResources?: number;
}
export type SummaryList = Array<Summary>;
export interface Tag {
  Key: string;
  Value: string;
}
export interface TagFilter {
  Key?: string;
  Values?: Array<string>;
}
export type TagFilterList = Array<TagFilter>;
export type TagKey = string;

export type TagKeyFilterList = Array<string>;
export type TagKeyList = Array<string>;
export type TagKeyListForUntag = Array<string>;
export type TagList = Array<Tag>;
export type TagMap = Record<string, string>;
export interface TagResourcesInput {
  ResourceARNList: Array<string>;
  Tags: Record<string, string>;
}
export interface TagResourcesOutput {
  FailedResourcesMap?: Record<string, FailureInfo>;
}
export type TagsPerPage = number;

export type TagValue = string;

export type TagValueList = Array<string>;
export type TagValuesOutputList = Array<string>;
export type TargetId = string;

export type TargetIdFilterList = Array<string>;
export type TargetIdType = "ACCOUNT" | "OU" | "ROOT";
export declare class ThrottledException extends EffectData.TaggedError(
  "ThrottledException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourcesInput {
  ResourceARNList: Array<string>;
  TagKeys: Array<string>;
}
export interface UntagResourcesOutput {
  FailedResourcesMap?: Record<string, FailureInfo>;
}
export declare namespace DescribeReportCreation {
  export type Input = DescribeReportCreationInput;
  export type Output = DescribeReportCreationOutput;
  export type Error =
    | ConstraintViolationException
    | InternalServiceException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetComplianceSummary {
  export type Input = GetComplianceSummaryInput;
  export type Output = GetComplianceSummaryOutput;
  export type Error =
    | ConstraintViolationException
    | InternalServiceException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetResources {
  export type Input = GetResourcesInput;
  export type Output = GetResourcesOutput;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | PaginationTokenExpiredException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetTagKeys {
  export type Input = GetTagKeysInput;
  export type Output = GetTagKeysOutput;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | PaginationTokenExpiredException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetTagValues {
  export type Input = GetTagValuesInput;
  export type Output = GetTagValuesOutput;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | PaginationTokenExpiredException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace StartReportCreation {
  export type Input = StartReportCreationInput;
  export type Output = StartReportCreationOutput;
  export type Error =
    | ConcurrentModificationException
    | ConstraintViolationException
    | InternalServiceException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace TagResources {
  export type Input = TagResourcesInput;
  export type Output = TagResourcesOutput;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace UntagResources {
  export type Input = UntagResourcesInput;
  export type Output = UntagResourcesOutput;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError;
}

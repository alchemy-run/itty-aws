import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class CostandUsageReportService extends AWSServiceClient {
  deleteReportDefinition(
    input: DeleteReportDefinitionRequest,
  ): Effect.Effect<
    DeleteReportDefinitionResponse,
    InternalErrorException | ValidationException | CommonAwsError
  >;
  describeReportDefinitions(
    input: DescribeReportDefinitionsRequest,
  ): Effect.Effect<
    DescribeReportDefinitionsResponse,
    InternalErrorException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalErrorException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  modifyReportDefinition(
    input: ModifyReportDefinitionRequest,
  ): Effect.Effect<
    ModifyReportDefinitionResponse,
    InternalErrorException | ValidationException | CommonAwsError
  >;
  putReportDefinition(
    input: PutReportDefinitionRequest,
  ): Effect.Effect<
    PutReportDefinitionResponse,
    | DuplicateReportNameException
    | InternalErrorException
    | ReportLimitReachedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalErrorException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalErrorException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class CostAndUsageReportService extends CostandUsageReportService {}

export type AdditionalArtifact = "REDSHIFT" | "QUICKSIGHT" | "ATHENA";
export type AdditionalArtifactList = Array<AdditionalArtifact>;
export type AWSRegion =
  | "CAPE_TOWN"
  | "HONG_KONG"
  | "MUMBAI"
  | "HYDERABAD"
  | "SINGAPORE"
  | "SYDNEY"
  | "JAKARTA"
  | "TOKYO"
  | "SEOUL"
  | "OSAKA"
  | "CANADA_CENTRAL"
  | "FRANKFURT"
  | "ZURICH"
  | "IRELAND"
  | "LONDON"
  | "PARIS"
  | "STOCKHOLM"
  | "MILANO"
  | "SPAIN"
  | "UAE"
  | "BAHRAIN"
  | "SAO_PAULO"
  | "US_STANDARD"
  | "OHIO"
  | "NORTHERN_CALIFORNIA"
  | "OREGON"
  | "BEIJING"
  | "NINGXIA";
export type BillingViewArn = string;

export type CompressionFormat = "ZIP" | "GZIP" | "Parquet";
export interface DeleteReportDefinitionRequest {
  ReportName: string;
}
export interface DeleteReportDefinitionResponse {
  ResponseMessage?: string;
}
export type DeleteResponseMessage = string;

export interface DescribeReportDefinitionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeReportDefinitionsResponse {
  ReportDefinitions?: Array<ReportDefinition>;
  NextToken?: string;
}
export declare class DuplicateReportNameException extends EffectData.TaggedError(
  "DuplicateReportNameException",
)<{
  readonly Message?: string;
}> {}
export type ErrorMessage = string;

export type GenericString = string;

export declare class InternalErrorException extends EffectData.TaggedError(
  "InternalErrorException",
)<{
  readonly Message?: string;
}> {}
export type LastDelivery = string;

export type LastStatus = "SUCCESS" | "ERROR_PERMISSIONS" | "ERROR_NO_BUCKET";
export interface ListTagsForResourceRequest {
  ReportName: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type MaxResults = number;

export interface ModifyReportDefinitionRequest {
  ReportName: string;
  ReportDefinition: ReportDefinition;
}
export interface ModifyReportDefinitionResponse {}
export interface PutReportDefinitionRequest {
  ReportDefinition: ReportDefinition;
  Tags?: Array<Tag>;
}
export interface PutReportDefinitionResponse {}
export type RefreshClosedReports = boolean;

export interface ReportDefinition {
  ReportName: string;
  TimeUnit: TimeUnit;
  Format: ReportFormat;
  Compression: CompressionFormat;
  AdditionalSchemaElements: Array<SchemaElement>;
  S3Bucket: string;
  S3Prefix: string;
  S3Region: AWSRegion;
  AdditionalArtifacts?: Array<AdditionalArtifact>;
  RefreshClosedReports?: boolean;
  ReportVersioning?: ReportVersioning;
  BillingViewArn?: string;
  ReportStatus?: ReportStatus;
}
export type ReportDefinitionList = Array<ReportDefinition>;
export type ReportFormat = "CSV" | "Parquet";
export declare class ReportLimitReachedException extends EffectData.TaggedError(
  "ReportLimitReachedException",
)<{
  readonly Message?: string;
}> {}
export type ReportName = string;

export interface ReportStatus {
  lastDelivery?: string;
  lastStatus?: LastStatus;
}
export type ReportVersioning = "CREATE_NEW_REPORT" | "OVERWRITE_REPORT";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type S3Bucket = string;

export type S3Prefix = string;

export type SchemaElement =
  | "RESOURCES"
  | "SPLIT_COST_ALLOCATION_DATA"
  | "MANUAL_DISCOUNT_COMPATIBILITY";
export type SchemaElementList = Array<SchemaElement>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ReportName: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TimeUnit = "HOURLY" | "DAILY" | "MONTHLY";
export interface UntagResourceRequest {
  ReportName: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace DeleteReportDefinition {
  export type Input = DeleteReportDefinitionRequest;
  export type Output = DeleteReportDefinitionResponse;
  export type Error =
    | InternalErrorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeReportDefinitions {
  export type Input = DescribeReportDefinitionsRequest;
  export type Output = DescribeReportDefinitionsResponse;
  export type Error = InternalErrorException | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalErrorException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ModifyReportDefinition {
  export type Input = ModifyReportDefinitionRequest;
  export type Output = ModifyReportDefinitionResponse;
  export type Error =
    | InternalErrorException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutReportDefinition {
  export type Input = PutReportDefinitionRequest;
  export type Output = PutReportDefinitionResponse;
  export type Error =
    | DuplicateReportNameException
    | InternalErrorException
    | ReportLimitReachedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalErrorException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalErrorException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

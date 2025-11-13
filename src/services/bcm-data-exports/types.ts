import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type {
  AccessDeniedException,
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | AccessDeniedException
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class BCMDataExports extends AWSServiceClient {
  createExport(
    input: CreateExportRequest,
  ): Effect.Effect<
    CreateExportResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteExport(
    input: DeleteExportRequest,
  ): Effect.Effect<
    DeleteExportResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getExecution(
    input: GetExecutionRequest,
  ): Effect.Effect<
    GetExecutionResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getExport(
    input: GetExportRequest,
  ): Effect.Effect<
    GetExportResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTable(
    input: GetTableRequest,
  ): Effect.Effect<
    GetTableResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listExecutions(
    input: ListExecutionsRequest,
  ): Effect.Effect<
    ListExecutionsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listExports(
    input: ListExportsRequest,
  ): Effect.Effect<
    ListExportsResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTables(
    input: ListTablesRequest,
  ): Effect.Effect<
    ListTablesResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
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
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateExport(
    input: UpdateExportRequest,
  ): Effect.Effect<
    UpdateExportResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class BcmDataExports extends BCMDataExports {}

export type Arn = string;

export interface Column {
  Name?: string;
  Type?: string;
  Description?: string;
}
export type ColumnList = Array<Column>;
export type CompressionOption = "GZIP" | "PARQUET";
export interface CreateExportRequest {
  Export: Export;
  ResourceTags?: Array<ResourceTag>;
}
export interface CreateExportResponse {
  ExportArn?: string;
}
export interface DataQuery {
  QueryStatement: string;
  TableConfigurations?: Record<string, Record<string, string>>;
}
export interface DeleteExportRequest {
  ExportArn: string;
}
export interface DeleteExportResponse {
  ExportArn?: string;
}
export interface DestinationConfigurations {
  S3Destination: S3Destination;
}
export interface ExecutionReference {
  ExecutionId: string;
  ExecutionStatus: ExecutionStatus;
}
export type ExecutionReferenceList = Array<ExecutionReference>;
export interface ExecutionStatus {
  StatusCode?: ExecutionStatusCode;
  StatusReason?: ExecutionStatusReason;
  CreatedAt?: Date | string;
  CompletedAt?: Date | string;
  LastUpdatedAt?: Date | string;
}
export type ExecutionStatusCode =
  | "INITIATION_IN_PROCESS"
  | "QUERY_QUEUED"
  | "QUERY_IN_PROCESS"
  | "QUERY_FAILURE"
  | "DELIVERY_IN_PROCESS"
  | "DELIVERY_SUCCESS"
  | "DELIVERY_FAILURE";
export type ExecutionStatusReason =
  | "INSUFFICIENT_PERMISSION"
  | "BILL_OWNER_CHANGED"
  | "INTERNAL_FAILURE";
export interface Export {
  ExportArn?: string;
  Name: string;
  Description?: string;
  DataQuery: DataQuery;
  DestinationConfigurations: DestinationConfigurations;
  RefreshCadence: RefreshCadence;
}
export type ExportName = string;

export interface ExportReference {
  ExportArn: string;
  ExportName: string;
  ExportStatus: ExportStatus;
}
export type ExportReferenceList = Array<ExportReference>;
export interface ExportStatus {
  StatusCode?: ExportStatusCode;
  StatusReason?: ExecutionStatusReason;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  LastRefreshedAt?: Date | string;
}
export type ExportStatusCode = "HEALTHY" | "UNHEALTHY";
export type FormatOption = "TEXT_OR_CSV" | "PARQUET";
export type FrequencyOption = "SYNCHRONOUS";
export type GenericString = string;

export type GenericStringList = Array<string>;
export interface GetExecutionRequest {
  ExportArn: string;
  ExecutionId: string;
}
export interface GetExecutionResponse {
  ExecutionId?: string;
  Export?: Export;
  ExecutionStatus?: ExecutionStatus;
}
export interface GetExportRequest {
  ExportArn: string;
}
export interface GetExportResponse {
  Export?: Export;
  ExportStatus?: ExportStatus;
}
export interface GetTableRequest {
  TableName: string;
  TableProperties?: Record<string, string>;
}
export interface GetTableResponse {
  TableName?: string;
  Description?: string;
  TableProperties?: Record<string, string>;
  Schema?: Array<Column>;
}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export interface ListExecutionsRequest {
  ExportArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListExecutionsResponse {
  Executions?: Array<ExecutionReference>;
  NextToken?: string;
}
export interface ListExportsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListExportsResponse {
  Exports?: Array<ExportReference>;
  NextToken?: string;
}
export interface ListTablesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTablesResponse {
  Tables?: Array<Table>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTagsForResourceResponse {
  ResourceTags?: Array<ResourceTag>;
  NextToken?: string;
}
export type MaxResults = number;

export type NextPageToken = string;

export type OverwriteOption = "CREATE_NEW_REPORT" | "OVERWRITE_REPORT";
export type QueryStatement = string;

export interface RefreshCadence {
  Frequency: FrequencyOption;
}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export interface ResourceTag {
  Key: string;
  Value: string;
}
export type ResourceTagKey = string;

export type ResourceTagKeyList = Array<string>;
export type ResourceTagList = Array<ResourceTag>;
export type ResourceTagValue = string;

export interface S3Destination {
  S3Bucket: string;
  S3Prefix: string;
  S3Region: string;
  S3OutputConfigurations: S3OutputConfigurations;
}
export interface S3OutputConfigurations {
  OutputType: S3OutputType;
  Format: FormatOption;
  Compression: CompressionOption;
  Overwrite: OverwriteOption;
}
export type S3OutputType = "CUSTOM";
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
  readonly QuotaCode: string;
  readonly ServiceCode: string;
}> {}
export interface Table {
  TableName?: string;
  Description?: string;
  TableProperties?: Array<TablePropertyDescription>;
}
export type TableConfigurations = Record<string, Record<string, string>>;
export type TableList = Array<Table>;
export type TableName = string;

export type TableProperties = Record<string, string>;
export type TableProperty = string;

export interface TablePropertyDescription {
  Name?: string;
  ValidValues?: Array<string>;
  DefaultValue?: string;
  Description?: string;
}
export type TablePropertyDescriptionList = Array<TablePropertyDescription>;
export interface TagResourceRequest {
  ResourceArn: string;
  ResourceTags: Array<ResourceTag>;
}
export interface TagResourceResponse {}
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly QuotaCode?: string;
  readonly ServiceCode?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  ResourceTagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateExportRequest {
  ExportArn: string;
  Export: Export;
}
export interface UpdateExportResponse {
  ExportArn?: string;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason?: ValidationExceptionReason;
  readonly Fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "other";
export declare namespace CreateExport {
  export type Input = CreateExportRequest;
  export type Output = CreateExportResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteExport {
  export type Input = DeleteExportRequest;
  export type Output = DeleteExportResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExecution {
  export type Input = GetExecutionRequest;
  export type Output = GetExecutionResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExport {
  export type Input = GetExportRequest;
  export type Output = GetExportResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTable {
  export type Input = GetTableRequest;
  export type Output = GetTableResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExecutions {
  export type Input = ListExecutionsRequest;
  export type Output = ListExecutionsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExports {
  export type Input = ListExportsRequest;
  export type Output = ListExportsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTables {
  export type Input = ListTablesRequest;
  export type Output = ListTablesResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
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
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateExport {
  export type Input = UpdateExportRequest;
  export type Output = UpdateExportResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type BCMDataExportsErrors =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;

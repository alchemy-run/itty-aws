import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ResourceTagKeyList = S.Array(S.String);
export class DeleteExportRequest extends S.Class<DeleteExportRequest>("DeleteExportRequest")({ExportArn: S.String}) {}
export class GetExecutionRequest extends S.Class<GetExecutionRequest>("GetExecutionRequest")({ExportArn: S.String, ExecutionId: S.String}) {}
export class GetExportRequest extends S.Class<GetExportRequest>("GetExportRequest")({ExportArn: S.String}) {}
export class ListExecutionsRequest extends S.Class<ListExecutionsRequest>("ListExecutionsRequest")({ExportArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListExportsRequest extends S.Class<ListExportsRequest>("ListExportsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTablesRequest extends S.Class<ListTablesRequest>("ListTablesRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ResourceTag extends S.Class<ResourceTag>("ResourceTag")({Key: S.String, Value: S.String}) {}
export const ResourceTagList = S.Array(ResourceTag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, ResourceTags: ResourceTagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, ResourceTagKeys: ResourceTagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TableProperties = S.Record({key: S.String, value: S.String});
export const TableConfigurations = S.Record({key: S.String, value: TableProperties});
export class DataQuery extends S.Class<DataQuery>("DataQuery")({QueryStatement: S.String, TableConfigurations: S.optional(TableConfigurations)}) {}
export class S3OutputConfigurations extends S.Class<S3OutputConfigurations>("S3OutputConfigurations")({OutputType: S.String, Format: S.String, Compression: S.String, Overwrite: S.String}) {}
export class S3Destination extends S.Class<S3Destination>("S3Destination")({S3Bucket: S.String, S3Prefix: S.String, S3Region: S.String, S3OutputConfigurations: S3OutputConfigurations}) {}
export class DestinationConfigurations extends S.Class<DestinationConfigurations>("DestinationConfigurations")({S3Destination: S3Destination}) {}
export class RefreshCadence extends S.Class<RefreshCadence>("RefreshCadence")({Frequency: S.String}) {}
export class Export extends S.Class<Export>("Export")({ExportArn: S.optional(S.String), Name: S.String, Description: S.optional(S.String), DataQuery: DataQuery, DestinationConfigurations: DestinationConfigurations, RefreshCadence: RefreshCadence}) {}
export class UpdateExportRequest extends S.Class<UpdateExportRequest>("UpdateExportRequest")({ExportArn: S.String, Export: Export}) {}
export class DeleteExportResponse extends S.Class<DeleteExportResponse>("DeleteExportResponse")({ExportArn: S.optional(S.String)}) {}
export class GetTableRequest extends S.Class<GetTableRequest>("GetTableRequest")({TableName: S.String, TableProperties: S.optional(TableProperties)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({ResourceTags: S.optional(ResourceTagList), NextToken: S.optional(S.String)}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({Message: S.String}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: S.String, ResourceId: S.String, ResourceType: S.String}) {}
export class UpdateExportResponse extends S.Class<UpdateExportResponse>("UpdateExportResponse")({ExportArn: S.optional(S.String)}) {}
export class ExecutionStatus extends S.Class<ExecutionStatus>("ExecutionStatus")({StatusCode: S.optional(S.String), StatusReason: S.optional(S.String), CreatedAt: S.optional(S.Date), CompletedAt: S.optional(S.Date), LastUpdatedAt: S.optional(S.Date)}) {}
export class ExportStatus extends S.Class<ExportStatus>("ExportStatus")({StatusCode: S.optional(S.String), StatusReason: S.optional(S.String), CreatedAt: S.optional(S.Date), LastUpdatedAt: S.optional(S.Date), LastRefreshedAt: S.optional(S.Date)}) {}
export class ExecutionReference extends S.Class<ExecutionReference>("ExecutionReference")({ExecutionId: S.String, ExecutionStatus: ExecutionStatus}) {}
export const ExecutionReferenceList = S.Array(ExecutionReference);
export class ExportReference extends S.Class<ExportReference>("ExportReference")({ExportArn: S.String, ExportName: S.String, ExportStatus: ExportStatus}) {}
export const ExportReferenceList = S.Array(ExportReference);
export const GenericStringList = S.Array(S.String);
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({Message: S.String, QuotaCode: S.optional(S.String), ServiceCode: S.optional(S.String)}) {}
export class GetExecutionResponse extends S.Class<GetExecutionResponse>("GetExecutionResponse")({ExecutionId: S.optional(S.String), Export: S.optional(Export), ExecutionStatus: S.optional(ExecutionStatus)}) {}
export class GetExportResponse extends S.Class<GetExportResponse>("GetExportResponse")({Export: S.optional(Export), ExportStatus: S.optional(ExportStatus)}) {}
export class ListExecutionsResponse extends S.Class<ListExecutionsResponse>("ListExecutionsResponse")({Executions: S.optional(ExecutionReferenceList), NextToken: S.optional(S.String)}) {}
export class ListExportsResponse extends S.Class<ListExportsResponse>("ListExportsResponse")({Exports: S.optional(ExportReferenceList), NextToken: S.optional(S.String)}) {}
export class TablePropertyDescription extends S.Class<TablePropertyDescription>("TablePropertyDescription")({Name: S.optional(S.String), ValidValues: S.optional(GenericStringList), DefaultValue: S.optional(S.String), Description: S.optional(S.String)}) {}
export const TablePropertyDescriptionList = S.Array(TablePropertyDescription);
export class Column extends S.Class<Column>("Column")({Name: S.optional(S.String), Type: S.optional(S.String), Description: S.optional(S.String)}) {}
export const ColumnList = S.Array(Column);
export class Table extends S.Class<Table>("Table")({TableName: S.optional(S.String), Description: S.optional(S.String), TableProperties: S.optional(TablePropertyDescriptionList)}) {}
export const TableList = S.Array(Table);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({Name: S.String, Message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class GetTableResponse extends S.Class<GetTableResponse>("GetTableResponse")({TableName: S.optional(S.String), Description: S.optional(S.String), TableProperties: S.optional(TableProperties), Schema: S.optional(ColumnList)}) {}
export class ListTablesResponse extends S.Class<ListTablesResponse>("ListTablesResponse")({Tables: S.optional(TableList), NextToken: S.optional(S.String)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({Message: S.String, Reason: S.optional(S.String), Fields: S.optional(ValidationExceptionFieldList)}) {}
export class CreateExportRequest extends S.Class<CreateExportRequest>("CreateExportRequest")({Export: Export, ResourceTags: S.optional(ResourceTagList)}) {}
export class CreateExportResponse extends S.Class<CreateExportResponse>("CreateExportResponse")({ExportArn: S.optional(S.String)}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({Message: S.String, ResourceId: S.optional(S.String), ResourceType: S.optional(S.String), QuotaCode: S.String, ServiceCode: S.String}) {}

//# Errors
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateExport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.UpdateExport" }, UpdateExportRequest, UpdateExportResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteExport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.DeleteExport" }, DeleteExportRequest, DeleteExportResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getExecution = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.GetExecution" }, GetExecutionRequest, GetExecutionResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getExport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.GetExport" }, GetExportRequest, GetExportResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listExecutions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.ListExecutions" }, ListExecutionsRequest, ListExecutionsResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listExports = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.ListExports" }, ListExportsRequest, ListExportsResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getTable = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.GetTable" }, GetTableRequest, GetTableResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTables = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.ListTables" }, ListTablesRequest, ListTablesResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createExport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.CreateExport" }, CreateExportRequest, CreateExportResponse, [InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

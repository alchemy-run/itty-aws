import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const ResourceTagKeyList = Schema.Array(Schema.String);
export class DeleteExportRequest extends Schema.Class<DeleteExportRequest>("DeleteExportRequest")({ExportArn: Schema.String}) {}
export class GetExecutionRequest extends Schema.Class<GetExecutionRequest>("GetExecutionRequest")({ExportArn: Schema.String, ExecutionId: Schema.String}) {}
export class GetExportRequest extends Schema.Class<GetExportRequest>("GetExportRequest")({ExportArn: Schema.String}) {}
export class ListExecutionsRequest extends Schema.Class<ListExecutionsRequest>("ListExecutionsRequest")({ExportArn: Schema.String, MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)}) {}
export class ListExportsRequest extends Schema.Class<ListExportsRequest>("ListExportsRequest")({MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)}) {}
export class ListTablesRequest extends Schema.Class<ListTablesRequest>("ListTablesRequest")({NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: Schema.String, MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)}) {}
export class ResourceTag extends Schema.Class<ResourceTag>("ResourceTag")({Key: Schema.String, Value: Schema.String}) {}
export const ResourceTagList = Schema.Array(ResourceTag);
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: Schema.String, ResourceTags: ResourceTagList}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: Schema.String, ResourceTagKeys: ResourceTagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TableProperties = Schema.Record({key: Schema.String, value: Schema.String});
export const TableConfigurations = Schema.Record({key: Schema.String, value: TableProperties});
export class DataQuery extends Schema.Class<DataQuery>("DataQuery")({QueryStatement: Schema.String, TableConfigurations: Schema.optional(TableConfigurations)}) {}
export class S3OutputConfigurations extends Schema.Class<S3OutputConfigurations>("S3OutputConfigurations")({OutputType: Schema.String, Format: Schema.String, Compression: Schema.String, Overwrite: Schema.String}) {}
export class S3Destination extends Schema.Class<S3Destination>("S3Destination")({S3Bucket: Schema.String, S3Prefix: Schema.String, S3Region: Schema.String, S3OutputConfigurations: S3OutputConfigurations}) {}
export class DestinationConfigurations extends Schema.Class<DestinationConfigurations>("DestinationConfigurations")({S3Destination: S3Destination}) {}
export class RefreshCadence extends Schema.Class<RefreshCadence>("RefreshCadence")({Frequency: Schema.String}) {}
export class Export extends Schema.Class<Export>("Export")({ExportArn: Schema.optional(Schema.String), Name: Schema.String, Description: Schema.optional(Schema.String), DataQuery: DataQuery, DestinationConfigurations: DestinationConfigurations, RefreshCadence: RefreshCadence}) {}
export class UpdateExportRequest extends Schema.Class<UpdateExportRequest>("UpdateExportRequest")({ExportArn: Schema.String, Export: Export}) {}
export class DeleteExportResponse extends Schema.Class<DeleteExportResponse>("DeleteExportResponse")({ExportArn: Schema.optional(Schema.String)}) {}
export class GetTableRequest extends Schema.Class<GetTableRequest>("GetTableRequest")({TableName: Schema.String, TableProperties: Schema.optional(TableProperties)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({ResourceTags: Schema.optional(ResourceTagList), NextToken: Schema.optional(Schema.String)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({Message: Schema.String}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.String, ResourceId: Schema.String, ResourceType: Schema.String}) {}
export class UpdateExportResponse extends Schema.Class<UpdateExportResponse>("UpdateExportResponse")({ExportArn: Schema.optional(Schema.String)}) {}
export class ExecutionStatus extends Schema.Class<ExecutionStatus>("ExecutionStatus")({StatusCode: Schema.optional(Schema.String), StatusReason: Schema.optional(Schema.String), CreatedAt: Schema.optional(Schema.Date), CompletedAt: Schema.optional(Schema.Date), LastUpdatedAt: Schema.optional(Schema.Date)}) {}
export class ExportStatus extends Schema.Class<ExportStatus>("ExportStatus")({StatusCode: Schema.optional(Schema.String), StatusReason: Schema.optional(Schema.String), CreatedAt: Schema.optional(Schema.Date), LastUpdatedAt: Schema.optional(Schema.Date), LastRefreshedAt: Schema.optional(Schema.Date)}) {}
export class ExecutionReference extends Schema.Class<ExecutionReference>("ExecutionReference")({ExecutionId: Schema.String, ExecutionStatus: ExecutionStatus}) {}
export const ExecutionReferenceList = Schema.Array(ExecutionReference);
export class ExportReference extends Schema.Class<ExportReference>("ExportReference")({ExportArn: Schema.String, ExportName: Schema.String, ExportStatus: ExportStatus}) {}
export const ExportReferenceList = Schema.Array(ExportReference);
export const GenericStringList = Schema.Array(Schema.String);
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.String, QuotaCode: Schema.optional(Schema.String), ServiceCode: Schema.optional(Schema.String)}) {}
export class GetExecutionResponse extends Schema.Class<GetExecutionResponse>("GetExecutionResponse")({ExecutionId: Schema.optional(Schema.String), Export: Schema.optional(Export), ExecutionStatus: Schema.optional(ExecutionStatus)}) {}
export class GetExportResponse extends Schema.Class<GetExportResponse>("GetExportResponse")({Export: Schema.optional(Export), ExportStatus: Schema.optional(ExportStatus)}) {}
export class ListExecutionsResponse extends Schema.Class<ListExecutionsResponse>("ListExecutionsResponse")({Executions: Schema.optional(ExecutionReferenceList), NextToken: Schema.optional(Schema.String)}) {}
export class ListExportsResponse extends Schema.Class<ListExportsResponse>("ListExportsResponse")({Exports: Schema.optional(ExportReferenceList), NextToken: Schema.optional(Schema.String)}) {}
export class TablePropertyDescription extends Schema.Class<TablePropertyDescription>("TablePropertyDescription")({Name: Schema.optional(Schema.String), ValidValues: Schema.optional(GenericStringList), DefaultValue: Schema.optional(Schema.String), Description: Schema.optional(Schema.String)}) {}
export const TablePropertyDescriptionList = Schema.Array(TablePropertyDescription);
export class Column extends Schema.Class<Column>("Column")({Name: Schema.optional(Schema.String), Type: Schema.optional(Schema.String), Description: Schema.optional(Schema.String)}) {}
export const ColumnList = Schema.Array(Column);
export class Table extends Schema.Class<Table>("Table")({TableName: Schema.optional(Schema.String), Description: Schema.optional(Schema.String), TableProperties: Schema.optional(TablePropertyDescriptionList)}) {}
export const TableList = Schema.Array(Table);
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({Name: Schema.String, Message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class GetTableResponse extends Schema.Class<GetTableResponse>("GetTableResponse")({TableName: Schema.optional(Schema.String), Description: Schema.optional(Schema.String), TableProperties: Schema.optional(TableProperties), Schema: Schema.optional(ColumnList)}) {}
export class ListTablesResponse extends Schema.Class<ListTablesResponse>("ListTablesResponse")({Tables: Schema.optional(TableList), NextToken: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.String, Reason: Schema.optional(Schema.String), Fields: Schema.optional(ValidationExceptionFieldList)}) {}
export class CreateExportRequest extends Schema.Class<CreateExportRequest>("CreateExportRequest")({Export: Export, ResourceTags: Schema.optional(ResourceTagList)}) {}
export class CreateExportResponse extends Schema.Class<CreateExportResponse>("CreateExportResponse")({ExportArn: Schema.optional(Schema.String)}) {}
export class ServiceQuotaExceededException extends Schema.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({Message: Schema.String, ResourceId: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), QuotaCode: Schema.String, ServiceCode: Schema.String}) {}

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateExport = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.UpdateExport" }, UpdateExportRequest, UpdateExportResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteExport = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.DeleteExport" }, DeleteExportRequest, DeleteExportResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getExecution = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.GetExecution" }, GetExecutionRequest, GetExecutionResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getExport = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.GetExport" }, GetExportRequest, GetExportResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listExecutions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.ListExecutions" }, ListExecutionsRequest, ListExecutionsResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listExports = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.ListExports" }, ListExportsRequest, ListExportsResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getTable = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.GetTable" }, GetTableRequest, GetTableResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTables = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.ListTables" }, ListTablesRequest, ListTablesResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createExport = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/", method: "POST", sdkId: "BCM Data Exports", sigV4ServiceName: "bcm-data-exports", name: "AWSBillingAndCostManagementDataExports.CreateExport" }, CreateExportRequest, CreateExportResponse, [InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

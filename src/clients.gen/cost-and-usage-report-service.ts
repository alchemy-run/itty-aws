import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class DeleteReportDefinitionRequest extends Schema.Class<DeleteReportDefinitionRequest>("DeleteReportDefinitionRequest")({ReportName: Schema.String}) {}
export class DescribeReportDefinitionsRequest extends Schema.Class<DescribeReportDefinitionsRequest>("DescribeReportDefinitionsRequest")({MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ReportName: Schema.String}) {}
export class Tag extends Schema.Class<Tag>("Tag")({Key: Schema.String, Value: Schema.String}) {}
export const TagList = Schema.Array(Tag);
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({ReportName: Schema.String, Tags: TagList}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({ReportName: Schema.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const SchemaElementList = Schema.Array(Schema.String);
export const AdditionalArtifactList = Schema.Array(Schema.String);
export class ReportStatus extends Schema.Class<ReportStatus>("ReportStatus")({lastDelivery: Schema.optional(Schema.String), lastStatus: Schema.optional(Schema.String)}) {}
export class ReportDefinition extends Schema.Class<ReportDefinition>("ReportDefinition")({ReportName: Schema.String, TimeUnit: Schema.String, Format: Schema.String, Compression: Schema.String, AdditionalSchemaElements: SchemaElementList, S3Bucket: Schema.String, S3Prefix: Schema.String, S3Region: Schema.String, AdditionalArtifacts: Schema.optional(AdditionalArtifactList), RefreshClosedReports: Schema.optional(Schema.Boolean), ReportVersioning: Schema.optional(Schema.String), BillingViewArn: Schema.optional(Schema.String), ReportStatus: Schema.optional(ReportStatus)}) {}
export const ReportDefinitionList = Schema.Array(ReportDefinition);
export class DeleteReportDefinitionResponse extends Schema.Class<DeleteReportDefinitionResponse>("DeleteReportDefinitionResponse")({ResponseMessage: Schema.optional(Schema.String)}) {}
export class DescribeReportDefinitionsResponse extends Schema.Class<DescribeReportDefinitionsResponse>("DescribeReportDefinitionsResponse")({ReportDefinitions: Schema.optional(ReportDefinitionList), NextToken: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: Schema.optional(TagList)}) {}
export class PutReportDefinitionRequest extends Schema.Class<PutReportDefinitionRequest>("PutReportDefinitionRequest")({ReportDefinition: ReportDefinition, Tags: Schema.optional(TagList)}) {}
export class PutReportDefinitionResponse extends Schema.Class<PutReportDefinitionResponse>("PutReportDefinitionResponse")({}) {}
export class InternalErrorException extends Schema.Class<InternalErrorException>("InternalErrorException")({Message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.optional(Schema.String)}) {}
export class ModifyReportDefinitionRequest extends Schema.Class<ModifyReportDefinitionRequest>("ModifyReportDefinitionRequest")({ReportName: Schema.String, ReportDefinition: ReportDefinition}) {}
export class ModifyReportDefinitionResponse extends Schema.Class<ModifyReportDefinitionResponse>("ModifyReportDefinitionResponse")({}) {}
export class DuplicateReportNameException extends Schema.Class<DuplicateReportNameException>("DuplicateReportNameException")({Message: Schema.optional(Schema.String)}) {}
export class ReportLimitReachedException extends Schema.Class<ReportLimitReachedException>("ReportLimitReachedException")({Message: Schema.optional(Schema.String)}) {}

//# Errors
export class InternalErrorExceptionError extends Schema.TaggedError<InternalErrorExceptionError>()("InternalErrorException", InternalErrorException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class DuplicateReportNameExceptionError extends Schema.TaggedError<DuplicateReportNameExceptionError>()("DuplicateReportNameException", DuplicateReportNameException.fields) {};
export class ReportLimitReachedExceptionError extends Schema.TaggedError<ReportLimitReachedExceptionError>()("ReportLimitReachedException", ReportLimitReachedException.fields) {};

//# Operations
export const describeReportDefinitions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.DescribeReportDefinitions" }, DescribeReportDefinitionsRequest, DescribeReportDefinitionsResponse, [InternalErrorExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalErrorExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalErrorExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalErrorExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteReportDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.DeleteReportDefinition" }, DeleteReportDefinitionRequest, DeleteReportDefinitionResponse, [InternalErrorExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const modifyReportDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.ModifyReportDefinition" }, ModifyReportDefinitionRequest, ModifyReportDefinitionResponse, [InternalErrorExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putReportDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.PutReportDefinition" }, PutReportDefinitionRequest, PutReportDefinitionResponse, [DuplicateReportNameExceptionError, InternalErrorExceptionError, ReportLimitReachedExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

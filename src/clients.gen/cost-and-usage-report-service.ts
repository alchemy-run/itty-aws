import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const DeleteReportDefinitionRequest = Schema.Struct({ReportName: Schema.String});
export const DescribeReportDefinitionsRequest = Schema.Struct({MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)});
export const ListTagsForResourceRequest = Schema.Struct({ReportName: Schema.String});
export const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const TagList = Schema.Array(Tag);
export const TagResourceRequest = Schema.Struct({ReportName: Schema.String, Tags: TagList});
export const TagResourceResponse = Schema.Struct({});
export const UntagResourceRequest = Schema.Struct({ReportName: Schema.String, TagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const SchemaElementList = Schema.Array(Schema.String);
export const AdditionalArtifactList = Schema.Array(Schema.String);
export const ReportStatus = Schema.Struct({lastDelivery: Schema.optional(Schema.String), lastStatus: Schema.optional(Schema.String)});
export const ReportDefinition = Schema.Struct({ReportName: Schema.String, TimeUnit: Schema.String, Format: Schema.String, Compression: Schema.String, AdditionalSchemaElements: SchemaElementList, S3Bucket: Schema.String, S3Prefix: Schema.String, S3Region: Schema.String, AdditionalArtifacts: Schema.optional(AdditionalArtifactList), RefreshClosedReports: Schema.optional(Schema.Boolean), ReportVersioning: Schema.optional(Schema.String), BillingViewArn: Schema.optional(Schema.String), ReportStatus: Schema.optional(ReportStatus)});
export const ReportDefinitionList = Schema.Array(ReportDefinition);
export const DeleteReportDefinitionResponse = Schema.Struct({ResponseMessage: Schema.optional(Schema.String)});
export const DescribeReportDefinitionsResponse = Schema.Struct({ReportDefinitions: Schema.optional(ReportDefinitionList), NextToken: Schema.optional(Schema.String)});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(TagList)});
export const PutReportDefinitionRequest = Schema.Struct({ReportDefinition: ReportDefinition, Tags: Schema.optional(TagList)});
export const PutReportDefinitionResponse = Schema.Struct({});
export const InternalErrorException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ModifyReportDefinitionRequest = Schema.Struct({ReportName: Schema.String, ReportDefinition: ReportDefinition});
export const ModifyReportDefinitionResponse = Schema.Struct({});
export const DuplicateReportNameException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ReportLimitReachedException = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class InternalErrorExceptionError extends Schema.TaggedError<InternalErrorExceptionError>()("InternalErrorException", InternalErrorException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class DuplicateReportNameExceptionError extends Schema.TaggedError<DuplicateReportNameExceptionError>()("DuplicateReportNameException", DuplicateReportNameException) {};
export class ReportLimitReachedExceptionError extends Schema.TaggedError<ReportLimitReachedExceptionError>()("ReportLimitReachedException", ReportLimitReachedException) {};

//# Operations
export const describeReportDefinitions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.DescribeReportDefinitions" }, DescribeReportDefinitionsRequest, DescribeReportDefinitionsResponse, [InternalErrorExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalErrorExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalErrorExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalErrorExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteReportDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.DeleteReportDefinition" }, DeleteReportDefinitionRequest, DeleteReportDefinitionResponse, [InternalErrorExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const modifyReportDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.ModifyReportDefinition" }, ModifyReportDefinitionRequest, ModifyReportDefinitionResponse, [InternalErrorExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putReportDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.PutReportDefinition" }, PutReportDefinitionRequest, PutReportDefinitionResponse, [DuplicateReportNameExceptionError, InternalErrorExceptionError, ReportLimitReachedExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

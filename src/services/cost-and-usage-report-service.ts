import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class DeleteReportDefinitionRequest extends S.Class<DeleteReportDefinitionRequest>("DeleteReportDefinitionRequest")({ReportName: S.String}) {}
export class DescribeReportDefinitionsRequest extends S.Class<DescribeReportDefinitionsRequest>("DescribeReportDefinitionsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ReportName: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ReportName: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ReportName: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const SchemaElementList = S.Array(S.String);
export const AdditionalArtifactList = S.Array(S.String);
export class ReportStatus extends S.Class<ReportStatus>("ReportStatus")({lastDelivery: S.optional(S.String), lastStatus: S.optional(S.String)}) {}
export class ReportDefinition extends S.Class<ReportDefinition>("ReportDefinition")({ReportName: S.String, TimeUnit: S.String, Format: S.String, Compression: S.String, AdditionalSchemaElements: SchemaElementList, S3Bucket: S.String, S3Prefix: S.String, S3Region: S.String, AdditionalArtifacts: S.optional(AdditionalArtifactList), RefreshClosedReports: S.optional(S.Boolean), ReportVersioning: S.optional(S.String), BillingViewArn: S.optional(S.String), ReportStatus: S.optional(ReportStatus)}) {}
export const ReportDefinitionList = S.Array(ReportDefinition);
export class DeleteReportDefinitionResponse extends S.Class<DeleteReportDefinitionResponse>("DeleteReportDefinitionResponse")({ResponseMessage: S.optional(S.String)}) {}
export class DescribeReportDefinitionsResponse extends S.Class<DescribeReportDefinitionsResponse>("DescribeReportDefinitionsResponse")({ReportDefinitions: S.optional(ReportDefinitionList), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class PutReportDefinitionRequest extends S.Class<PutReportDefinitionRequest>("PutReportDefinitionRequest")({ReportDefinition: ReportDefinition, Tags: S.optional(TagList)}) {}
export class PutReportDefinitionResponse extends S.Class<PutReportDefinitionResponse>("PutReportDefinitionResponse")({}) {}
export class ModifyReportDefinitionRequest extends S.Class<ModifyReportDefinitionRequest>("ModifyReportDefinitionRequest")({ReportName: S.String, ReportDefinition: ReportDefinition}) {}
export class ModifyReportDefinitionResponse extends S.Class<ModifyReportDefinitionResponse>("ModifyReportDefinitionResponse")({}) {}

//# Errors
export class InternalErrorException extends S.TaggedError<InternalErrorException>()("InternalErrorException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class DuplicateReportNameException extends S.TaggedError<DuplicateReportNameException>()("DuplicateReportNameException", {Message: S.optional(S.String)}) {};
export class ReportLimitReachedException extends S.TaggedError<ReportLimitReachedException>()("ReportLimitReachedException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Lists the Amazon Web Services Cost and Usage Report available to this account.
 */export const describeReportDefinitions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.DescribeReportDefinitions" }, DescribeReportDefinitionsRequest, DescribeReportDefinitionsResponse, [InternalErrorException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags associated with the specified report definition.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalErrorException, ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a set of tags with a report definition.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalErrorException, ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a set of tags from a report definition.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalErrorException, ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified report. Any tags associated with the report are also
 * deleted.
 */export const deleteReportDefinition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.DeleteReportDefinition" }, DeleteReportDefinitionRequest, DeleteReportDefinitionResponse, [InternalErrorException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows you to programmatically update your report preferences.
 */export const modifyReportDefinition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.ModifyReportDefinition" }, ModifyReportDefinitionRequest, ModifyReportDefinitionResponse, [InternalErrorException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new report using the description that you provide.
 */export const putReportDefinition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-06", uri: "/", method: "POST", sdkId: "Cost and Usage Report Service", sigV4ServiceName: "cur", name: "AWSOrigamiServiceGatewayService.PutReportDefinition" }, PutReportDefinitionRequest, PutReportDefinitionResponse, [DuplicateReportNameException, InternalErrorException, ReportLimitReachedException, ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

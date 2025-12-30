import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class DeleteRescoreExecutionPlanRequest extends S.Class<DeleteRescoreExecutionPlanRequest>("DeleteRescoreExecutionPlanRequest")({Id: S.String}) {}
export class DescribeRescoreExecutionPlanRequest extends S.Class<DescribeRescoreExecutionPlanRequest>("DescribeRescoreExecutionPlanRequest")({Id: S.String}) {}
export class ListRescoreExecutionPlansRequest extends S.Class<ListRescoreExecutionPlansRequest>("ListRescoreExecutionPlansRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class CapacityUnitsConfiguration extends S.Class<CapacityUnitsConfiguration>("CapacityUnitsConfiguration")({RescoreCapacityUnits: S.Number}) {}
export class UpdateRescoreExecutionPlanRequest extends S.Class<UpdateRescoreExecutionPlanRequest>("UpdateRescoreExecutionPlanRequest")({Id: S.String, Name: S.optional(S.String), Description: S.optional(S.String), CapacityUnits: S.optional(CapacityUnitsConfiguration)}) {}
export const TitleTokensList = S.Array(S.String);
export const BodyTokensList = S.Array(S.String);
export class Document extends S.Class<Document>("Document")({Id: S.String, GroupId: S.optional(S.String), Title: S.optional(S.String), Body: S.optional(S.String), TokenizedTitle: S.optional(TitleTokensList), TokenizedBody: S.optional(BodyTokensList), OriginalScore: S.Number}) {}
export const DocumentList = S.Array(Document);
export class CreateRescoreExecutionPlanRequest extends S.Class<CreateRescoreExecutionPlanRequest>("CreateRescoreExecutionPlanRequest")({Name: S.String, Description: S.optional(S.String), CapacityUnits: S.optional(CapacityUnitsConfiguration), Tags: S.optional(TagList), ClientToken: S.optional(S.String)}) {}
export class DescribeRescoreExecutionPlanResponse extends S.Class<DescribeRescoreExecutionPlanResponse>("DescribeRescoreExecutionPlanResponse")({Id: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), CapacityUnits: S.optional(CapacityUnitsConfiguration), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), Status: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class RescoreRequest extends S.Class<RescoreRequest>("RescoreRequest")({RescoreExecutionPlanId: S.String, SearchQuery: S.String, Documents: DocumentList}) {}
export class RescoreExecutionPlanSummary extends S.Class<RescoreExecutionPlanSummary>("RescoreExecutionPlanSummary")({Name: S.optional(S.String), Id: S.optional(S.String), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), Status: S.optional(S.String)}) {}
export const RescoreExecutionPlanSummaryList = S.Array(RescoreExecutionPlanSummary);
export class CreateRescoreExecutionPlanResponse extends S.Class<CreateRescoreExecutionPlanResponse>("CreateRescoreExecutionPlanResponse")({Id: S.String, Arn: S.String}) {}
export class ListRescoreExecutionPlansResponse extends S.Class<ListRescoreExecutionPlansResponse>("ListRescoreExecutionPlansResponse")({SummaryItems: S.optional(RescoreExecutionPlanSummaryList), NextToken: S.optional(S.String)}) {}
export class RescoreResultItem extends S.Class<RescoreResultItem>("RescoreResultItem")({DocumentId: S.optional(S.String), Score: S.optional(S.Number)}) {}
export const RescoreResultItemList = S.Array(RescoreResultItem);
export class RescoreResult extends S.Class<RescoreResult>("RescoreResult")({RescoreId: S.optional(S.String), ResultItems: S.optional(RescoreResultItemList)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ResourceUnavailableException extends S.TaggedError<ResourceUnavailableException>()("ResourceUnavailableException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Adds a specified tag to a specified rescore execution
 * plan. A rescore execution plan is an Amazon Kendra
 * Intelligent Ranking resource used for provisioning the
 * `Rescore` API. If the tag already exists,
 * the existing value is replaced with the new value.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-10-19", uri: "/", method: "POST", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceUnavailableException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag from a rescore execution plan. A rescore
 * execution plan is an Amazon Kendra Intelligent
 * Ranking resource used for provisioning the
 * `Rescore` operation.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-10-19", uri: "/", method: "POST", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceUnavailableException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a rescore execution plan. A rescore execution
 * plan is an Amazon Kendra Intelligent Ranking resource
 * used for provisioning the `Rescore` API. You set
 * the number of capacity units that you require for
 * Amazon Kendra Intelligent Ranking to rescore or re-rank
 * a search service's results.
 * 
 * 
 * For an example of using the
 * `CreateRescoreExecutionPlan` API, including using
 * the Python and Java SDKs, see Semantically
 * ranking a search service's results.
 */export const createRescoreExecutionPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-10-19", uri: "/rescore-execution-plans", method: "POST", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan" }, CreateRescoreExecutionPlanRequest, CreateRescoreExecutionPlanResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a rescore execution plan. A rescore execution
 * plan is an Amazon Kendra Intelligent Ranking resource
 * used for provisioning the `Rescore` API.
 */export const deleteRescoreExecutionPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-10-19", uri: "/rescore-execution-plans/{Id}", method: "DELETE", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.DeleteRescoreExecutionPlan" }, DeleteRescoreExecutionPlanRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a rescore execution plan. A rescore
 * execution plan is an Amazon Kendra Intelligent Ranking
 * resource used for provisioning the `Rescore` API.
 */export const describeRescoreExecutionPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-10-19", uri: "/rescore-execution-plans/{Id}", method: "GET", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.DescribeRescoreExecutionPlan" }, DescribeRescoreExecutionPlanRequest, DescribeRescoreExecutionPlanResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists your rescore execution plans. A rescore execution plan
 * is an Amazon Kendra Intelligent Ranking resource used for
 * provisioning the `Rescore` API.
 */export const listRescoreExecutionPlans = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-10-19", uri: "/rescore-execution-plans", method: "GET", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.ListRescoreExecutionPlans" }, ListRescoreExecutionPlansRequest, ListRescoreExecutionPlansResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of tags associated with a specified resource.
 * A rescore execution plan is an example of a resource that
 * can have tags associated with it.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-10-19", uri: "/", method: "POST", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceUnavailableException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a rescore execution plan. A rescore execution plan
 * is an Amazon Kendra Intelligent Ranking resource used for
 * provisioning the `Rescore` API. You can update the
 * number of capacity units you require for Amazon Kendra
 * Intelligent Ranking to rescore or re-rank a search service's
 * results.
 */export const updateRescoreExecutionPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-10-19", uri: "/rescore-execution-plans/{Id}", method: "PUT", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.UpdateRescoreExecutionPlan" }, UpdateRescoreExecutionPlanRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Rescores or re-ranks search results from a search service
 * such as OpenSearch (self managed). You use the semantic search
 * capabilities of Amazon Kendra Intelligent Ranking to
 * improve the search service's results.
 */export const rescore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-10-19", uri: "/rescore-execution-plans/{RescoreExecutionPlanId}/rescore", method: "POST", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.Rescore" }, RescoreRequest, RescoreResult, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

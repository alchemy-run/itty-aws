import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const DeleteRescoreExecutionPlanRequest = Schema.Struct({Id: Schema.String});
export const DescribeRescoreExecutionPlanRequest = Schema.Struct({Id: Schema.String});
export const ListRescoreExecutionPlansRequest = Schema.Struct({NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const ListTagsForResourceRequest = Schema.Struct({ResourceARN: Schema.String});
export const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const TagList = Schema.Array(Tag);
export const TagResourceRequest = Schema.Struct({ResourceARN: Schema.String, Tags: TagList});
export const TagResourceResponse = Schema.Struct({});
export const UntagResourceRequest = Schema.Struct({ResourceARN: Schema.String, TagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const CapacityUnitsConfiguration = Schema.Struct({RescoreCapacityUnits: Schema.Number});
export const UpdateRescoreExecutionPlanRequest = Schema.Struct({Id: Schema.String, Name: Schema.optional(Schema.String), Description: Schema.optional(Schema.String), CapacityUnits: Schema.optional(CapacityUnitsConfiguration)});
export const TitleTokensList = Schema.Array(Schema.String);
export const BodyTokensList = Schema.Array(Schema.String);
export const Document = Schema.Struct({Id: Schema.String, GroupId: Schema.optional(Schema.String), Title: Schema.optional(Schema.String), Body: Schema.optional(Schema.String), TokenizedTitle: Schema.optional(TitleTokensList), TokenizedBody: Schema.optional(BodyTokensList), OriginalScore: Schema.Number});
export const DocumentList = Schema.Array(Document);
export const CreateRescoreExecutionPlanRequest = Schema.Struct({Name: Schema.String, Description: Schema.optional(Schema.String), CapacityUnits: Schema.optional(CapacityUnitsConfiguration), Tags: Schema.optional(TagList), ClientToken: Schema.optional(Schema.String)});
export const AccessDeniedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const DescribeRescoreExecutionPlanResponse = Schema.Struct({Id: Schema.optional(Schema.String), Arn: Schema.optional(Schema.String), Name: Schema.optional(Schema.String), Description: Schema.optional(Schema.String), CapacityUnits: Schema.optional(CapacityUnitsConfiguration), CreatedAt: Schema.optional(Schema.Date), UpdatedAt: Schema.optional(Schema.Date), Status: Schema.optional(Schema.String), ErrorMessage: Schema.optional(Schema.String)});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(TagList)});
export const RescoreRequest = Schema.Struct({RescoreExecutionPlanId: Schema.String, SearchQuery: Schema.String, Documents: DocumentList});
export const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ResourceUnavailableException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ConflictException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const RescoreExecutionPlanSummary = Schema.Struct({Name: Schema.optional(Schema.String), Id: Schema.optional(Schema.String), CreatedAt: Schema.optional(Schema.Date), UpdatedAt: Schema.optional(Schema.Date), Status: Schema.optional(Schema.String)});
export const RescoreExecutionPlanSummaryList = Schema.Array(RescoreExecutionPlanSummary);
export const CreateRescoreExecutionPlanResponse = Schema.Struct({Id: Schema.String, Arn: Schema.String});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ListRescoreExecutionPlansResponse = Schema.Struct({SummaryItems: Schema.optional(RescoreExecutionPlanSummaryList), NextToken: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ServiceQuotaExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const RescoreResultItem = Schema.Struct({DocumentId: Schema.optional(Schema.String), Score: Schema.optional(Schema.Number)});
export const RescoreResultItemList = Schema.Array(RescoreResultItem);
export const RescoreResult = Schema.Struct({RescoreId: Schema.optional(Schema.String), ResultItems: Schema.optional(RescoreResultItemList)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ResourceUnavailableExceptionError extends Schema.TaggedError<ResourceUnavailableExceptionError>()("ResourceUnavailableException", ResourceUnavailableException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-19", uri: "/", method: "POST", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceUnavailableExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-19", uri: "/", method: "POST", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceUnavailableExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createRescoreExecutionPlan = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-19", uri: "/rescore-execution-plans", method: "POST", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan" }, CreateRescoreExecutionPlanRequest, CreateRescoreExecutionPlanResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteRescoreExecutionPlan = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-19", uri: "/rescore-execution-plans/{Id}", method: "DELETE", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.DeleteRescoreExecutionPlan" }, DeleteRescoreExecutionPlanRequest, Schema.Struct({}), [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeRescoreExecutionPlan = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-19", uri: "/rescore-execution-plans/{Id}", method: "GET", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.DescribeRescoreExecutionPlan" }, DescribeRescoreExecutionPlanRequest, DescribeRescoreExecutionPlanResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listRescoreExecutionPlans = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-19", uri: "/rescore-execution-plans", method: "GET", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.ListRescoreExecutionPlans" }, ListRescoreExecutionPlansRequest, ListRescoreExecutionPlansResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-19", uri: "/", method: "POST", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceUnavailableExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateRescoreExecutionPlan = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-19", uri: "/rescore-execution-plans/{Id}", method: "PUT", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.UpdateRescoreExecutionPlan" }, UpdateRescoreExecutionPlanRequest, Schema.Struct({}), [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const rescore = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-19", uri: "/rescore-execution-plans/{RescoreExecutionPlanId}/rescore", method: "POST", sdkId: "Kendra Ranking", sigV4ServiceName: "kendra-ranking", name: "AWSKendraRerankingFrontendService.Rescore" }, RescoreRequest, RescoreResult, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

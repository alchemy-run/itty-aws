import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const BillingViewSourceViewsList = S.Array(S.String);
export const BillingViewArnList = S.Array(S.String);
export const BillingViewTypeList = S.Array(S.String);
export const ResourceTagKeyList = S.Array(S.String);
export class AssociateSourceViewsRequest extends S.Class<AssociateSourceViewsRequest>("AssociateSourceViewsRequest")({arn: S.String, sourceViews: BillingViewSourceViewsList}) {}
export class DeleteBillingViewRequest extends S.Class<DeleteBillingViewRequest>("DeleteBillingViewRequest")({arn: S.String, force: S.optional(S.Boolean)}) {}
export class DisassociateSourceViewsRequest extends S.Class<DisassociateSourceViewsRequest>("DisassociateSourceViewsRequest")({arn: S.String, sourceViews: BillingViewSourceViewsList}) {}
export class GetBillingViewRequest extends S.Class<GetBillingViewRequest>("GetBillingViewRequest")({arn: S.String}) {}
export class GetResourcePolicyRequest extends S.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({resourceArn: S.String}) {}
export class ListSourceViewsForBillingViewRequest extends S.Class<ListSourceViewsForBillingViewRequest>("ListSourceViewsForBillingViewRequest")({arn: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class ResourceTag extends S.Class<ResourceTag>("ResourceTag")({key: S.String, value: S.optional(S.String)}) {}
export const ResourceTagList = S.Array(ResourceTag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, resourceTags: ResourceTagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, resourceTagKeys: ResourceTagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const Values = S.Array(S.String);
export class DimensionValues extends S.Class<DimensionValues>("DimensionValues")({key: S.String, values: Values}) {}
export class TagValues extends S.Class<TagValues>("TagValues")({key: S.String, values: Values}) {}
export class TimeRange extends S.Class<TimeRange>("TimeRange")({beginDateInclusive: S.optional(S.Date), endDateInclusive: S.optional(S.Date)}) {}
export class Expression extends S.Class<Expression>("Expression")({dimensions: S.optional(DimensionValues), tags: S.optional(TagValues), timeRange: S.optional(TimeRange)}) {}
export class UpdateBillingViewRequest extends S.Class<UpdateBillingViewRequest>("UpdateBillingViewRequest")({arn: S.String, name: S.optional(S.String), description: S.optional(S.String), dataFilterExpression: S.optional(Expression)}) {}
export class ActiveTimeRange extends S.Class<ActiveTimeRange>("ActiveTimeRange")({activeAfterInclusive: S.Date, activeBeforeInclusive: S.Date}) {}
export class StringSearch extends S.Class<StringSearch>("StringSearch")({searchOption: S.String, searchValue: S.String}) {}
export const StringSearches = S.Array(StringSearch);
export class AssociateSourceViewsResponse extends S.Class<AssociateSourceViewsResponse>("AssociateSourceViewsResponse")({arn: S.String}) {}
export class DeleteBillingViewResponse extends S.Class<DeleteBillingViewResponse>("DeleteBillingViewResponse")({arn: S.String}) {}
export class DisassociateSourceViewsResponse extends S.Class<DisassociateSourceViewsResponse>("DisassociateSourceViewsResponse")({arn: S.String}) {}
export class GetResourcePolicyResponse extends S.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({resourceArn: S.String, policy: S.optional(S.String)}) {}
export class ListBillingViewsRequest extends S.Class<ListBillingViewsRequest>("ListBillingViewsRequest")({activeTimeRange: S.optional(ActiveTimeRange), arns: S.optional(BillingViewArnList), billingViewTypes: S.optional(BillingViewTypeList), names: S.optional(StringSearches), ownerAccountId: S.optional(S.String), sourceAccountId: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListSourceViewsForBillingViewResponse extends S.Class<ListSourceViewsForBillingViewResponse>("ListSourceViewsForBillingViewResponse")({sourceViews: BillingViewSourceViewsList, nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({resourceTags: S.optional(ResourceTagList)}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String}) {}
export class UpdateBillingViewResponse extends S.Class<UpdateBillingViewResponse>("UpdateBillingViewResponse")({arn: S.String, updatedAt: S.optional(S.Date)}) {}
export const BillingViewStatusReasons = S.Array(S.String);
export class BillingViewHealthStatusException extends S.Class<BillingViewHealthStatusException>("BillingViewHealthStatusException")({message: S.String}) {}
export class CreateBillingViewRequest extends S.Class<CreateBillingViewRequest>("CreateBillingViewRequest")({name: S.String, description: S.optional(S.String), sourceViews: BillingViewSourceViewsList, dataFilterExpression: S.optional(Expression), clientToken: S.optional(H.Header("X-Amzn-Client-Token")), resourceTags: S.optional(ResourceTagList)}) {}
export class ConflictException extends S.Class<ConflictException>("ConflictException")({message: S.String, resourceId: S.String, resourceType: S.String}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String, resourceId: S.String, resourceType: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: S.String, resourceId: S.String, resourceType: S.String, serviceCode: S.String, quotaCode: S.String}) {}
export class BillingViewHealthStatus extends S.Class<BillingViewHealthStatus>("BillingViewHealthStatus")({statusCode: S.optional(S.String), statusReasons: S.optional(BillingViewStatusReasons)}) {}
export class BillingViewElement extends S.Class<BillingViewElement>("BillingViewElement")({arn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), billingViewType: S.optional(S.String), ownerAccountId: S.optional(S.String), sourceAccountId: S.optional(S.String), dataFilterExpression: S.optional(Expression), createdAt: S.optional(S.Date), updatedAt: S.optional(S.Date), derivedViewCount: S.optional(S.Number), sourceViewCount: S.optional(S.Number), viewDefinitionLastUpdatedAt: S.optional(S.Date), healthStatus: S.optional(BillingViewHealthStatus)}) {}
export class BillingViewListElement extends S.Class<BillingViewListElement>("BillingViewListElement")({arn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), ownerAccountId: S.optional(S.String), sourceAccountId: S.optional(S.String), billingViewType: S.optional(S.String), healthStatus: S.optional(BillingViewHealthStatus)}) {}
export const BillingViewList = S.Array(BillingViewListElement);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class CreateBillingViewResponse extends S.Class<CreateBillingViewResponse>("CreateBillingViewResponse")({arn: S.String, createdAt: S.optional(S.Date)}) {}
export class GetBillingViewResponse extends S.Class<GetBillingViewResponse>("GetBillingViewResponse")({billingView: BillingViewElement}) {}
export class ListBillingViewsResponse extends S.Class<ListBillingViewsResponse>("ListBillingViewsResponse")({billingViews: BillingViewList, nextToken: S.optional(S.String)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String, reason: S.String, fieldList: S.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class BillingViewHealthStatusExceptionError extends S.TaggedError<BillingViewHealthStatusExceptionError>()("BillingViewHealthStatusException", BillingViewHealthStatusException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const associateSourceViews = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.AssociateSourceViews" }, AssociateSourceViewsRequest, AssociateSourceViewsResponse, [AccessDeniedExceptionError, BillingViewHealthStatusExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteBillingView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.DeleteBillingView" }, DeleteBillingViewRequest, DeleteBillingViewResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const disassociateSourceViews = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.DisassociateSourceViews" }, DisassociateSourceViewsRequest, DisassociateSourceViewsResponse, [AccessDeniedExceptionError, BillingViewHealthStatusExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getResourcePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateBillingView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.UpdateBillingView" }, UpdateBillingViewRequest, UpdateBillingViewResponse, [AccessDeniedExceptionError, BillingViewHealthStatusExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createBillingView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.CreateBillingView" }, CreateBillingViewRequest, CreateBillingViewResponse, [AccessDeniedExceptionError, BillingViewHealthStatusExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getBillingView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.GetBillingView" }, GetBillingViewRequest, GetBillingViewResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listBillingViews = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.ListBillingViews" }, ListBillingViewsRequest, ListBillingViewsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listSourceViewsForBillingView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.ListSourceViewsForBillingView" }, ListSourceViewsForBillingViewRequest, ListSourceViewsForBillingViewResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

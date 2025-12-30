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
export class UpdateBillingViewResponse extends S.Class<UpdateBillingViewResponse>("UpdateBillingViewResponse")({arn: S.String, updatedAt: S.optional(S.Date)}) {}
export const BillingViewStatusReasons = S.Array(S.String);
export class CreateBillingViewRequest extends S.Class<CreateBillingViewRequest>("CreateBillingViewRequest")({name: S.String, description: S.optional(S.String), sourceViews: BillingViewSourceViewsList, dataFilterExpression: S.optional(Expression), clientToken: S.optional(H.Header("X-Amzn-Client-Token")), resourceTags: S.optional(ResourceTagList)}) {}
export class BillingViewHealthStatus extends S.Class<BillingViewHealthStatus>("BillingViewHealthStatus")({statusCode: S.optional(S.String), statusReasons: S.optional(BillingViewStatusReasons)}) {}
export class BillingViewElement extends S.Class<BillingViewElement>("BillingViewElement")({arn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), billingViewType: S.optional(S.String), ownerAccountId: S.optional(S.String), sourceAccountId: S.optional(S.String), dataFilterExpression: S.optional(Expression), createdAt: S.optional(S.Date), updatedAt: S.optional(S.Date), derivedViewCount: S.optional(S.Number), sourceViewCount: S.optional(S.Number), viewDefinitionLastUpdatedAt: S.optional(S.Date), healthStatus: S.optional(BillingViewHealthStatus)}) {}
export class BillingViewListElement extends S.Class<BillingViewListElement>("BillingViewListElement")({arn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), ownerAccountId: S.optional(S.String), sourceAccountId: S.optional(S.String), billingViewType: S.optional(S.String), healthStatus: S.optional(BillingViewHealthStatus)}) {}
export const BillingViewList = S.Array(BillingViewListElement);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class CreateBillingViewResponse extends S.Class<CreateBillingViewResponse>("CreateBillingViewResponse")({arn: S.String, createdAt: S.optional(S.Date)}) {}
export class GetBillingViewResponse extends S.Class<GetBillingViewResponse>("GetBillingViewResponse")({billingView: BillingViewElement}) {}
export class ListBillingViewsResponse extends S.Class<ListBillingViewsResponse>("ListBillingViewsResponse")({billingViews: BillingViewList, nextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class BillingViewHealthStatusException extends S.TaggedError<BillingViewHealthStatusException>()("BillingViewHealthStatusException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Lists tags associated with the billing view resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * An API operation for adding one or more tags (key-value pairs) to a resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates one or more source billing views with an existing billing view. This allows creating aggregate billing views that combine data from multiple sources.
 */export const associateSourceViews = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.AssociateSourceViews" }, AssociateSourceViewsRequest, AssociateSourceViewsResponse, [AccessDeniedException, BillingViewHealthStatusException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified billing view.
 */export const deleteBillingView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.DeleteBillingView" }, DeleteBillingViewRequest, DeleteBillingViewResponse, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the association between one or more source billing views and an existing billing view. This allows modifying the composition of aggregate billing views.
 */export const disassociateSourceViews = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.DisassociateSourceViews" }, DisassociateSourceViewsRequest, DisassociateSourceViewsResponse, [AccessDeniedException, BillingViewHealthStatusException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the resource-based policy document attached to the resource in `JSON` format.
 */export const getResourcePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * An API to update the attributes of the billing view.
 */export const updateBillingView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.UpdateBillingView" }, UpdateBillingViewRequest, UpdateBillingViewResponse, [AccessDeniedException, BillingViewHealthStatusException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a billing view with the specified billing view attributes.
 */export const createBillingView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.CreateBillingView" }, CreateBillingViewRequest, CreateBillingViewResponse, [AccessDeniedException, BillingViewHealthStatusException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the metadata associated to the specified billing view ARN.
 */export const getBillingView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.GetBillingView" }, GetBillingViewRequest, GetBillingViewResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the billing views available for a given time period.
 * 
 * Every Amazon Web Services account has a unique `PRIMARY` billing view that represents the billing data available by default. Accounts that use Billing Conductor also have `BILLING_GROUP` billing views representing pro forma costs associated with each created billing group.
 */export const listBillingViews = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.ListBillingViews" }, ListBillingViewsRequest, ListBillingViewsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the source views (managed Amazon Web Services billing views) associated with the billing view.
 */export const listSourceViewsForBillingView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "Billing", sigV4ServiceName: "billing", name: "AWSBilling.ListSourceViewsForBillingView" }, ListSourceViewsForBillingViewRequest, ListSourceViewsForBillingViewResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

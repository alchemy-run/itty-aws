import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const GroupByAttributesList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const AccountIdFilterList = S.Array(S.String);
export const BillingGroupArnList = S.Array(S.String);
export class BillingPeriodRange extends S.Class<BillingPeriodRange>("BillingPeriodRange")({InclusiveStartBillingPeriod: S.String, ExclusiveEndBillingPeriod: S.String}) {}
export class ListAccountAssociationsFilter extends S.Class<ListAccountAssociationsFilter>("ListAccountAssociationsFilter")({Association: S.optional(S.String), AccountId: S.optional(S.String), AccountIds: S.optional(AccountIdFilterList)}) {}
export class ListBillingGroupCostReportsFilter extends S.Class<ListBillingGroupCostReportsFilter>("ListBillingGroupCostReportsFilter")({BillingGroupArns: S.optional(BillingGroupArnList)}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class GetBillingGroupCostReportInput extends S.Class<GetBillingGroupCostReportInput>("GetBillingGroupCostReportInput")({Arn: S.String, BillingPeriodRange: S.optional(BillingPeriodRange), GroupBy: S.optional(GroupByAttributesList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListAccountAssociationsInput extends S.Class<ListAccountAssociationsInput>("ListAccountAssociationsInput")({BillingPeriod: S.optional(S.String), Filters: S.optional(ListAccountAssociationsFilter), NextToken: S.optional(S.String)}) {}
export class ListBillingGroupCostReportsInput extends S.Class<ListBillingGroupCostReportsInput>("ListBillingGroupCostReportsInput")({BillingPeriod: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Filters: S.optional(ListBillingGroupCostReportsFilter)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class AccountAssociationsListElement extends S.Class<AccountAssociationsListElement>("AccountAssociationsListElement")({AccountId: S.optional(S.String), BillingGroupArn: S.optional(S.String), AccountName: S.optional(S.String), AccountEmail: S.optional(S.String)}) {}
export const AccountAssociationsList = S.Array(AccountAssociationsListElement);
export class BillingGroupCostReportElement extends S.Class<BillingGroupCostReportElement>("BillingGroupCostReportElement")({Arn: S.optional(S.String), AWSCost: S.optional(S.String), ProformaCost: S.optional(S.String), Margin: S.optional(S.String), MarginPercentage: S.optional(S.String), Currency: S.optional(S.String)}) {}
export const BillingGroupCostReportList = S.Array(BillingGroupCostReportElement);
export class ListAccountAssociationsOutput extends S.Class<ListAccountAssociationsOutput>("ListAccountAssociationsOutput")({LinkedAccounts: S.optional(AccountAssociationsList), NextToken: S.optional(S.String)}) {}
export class ListBillingGroupCostReportsOutput extends S.Class<ListBillingGroupCostReportsOutput>("ListBillingGroupCostReportsOutput")({BillingGroupCostReports: S.optional(BillingGroupCostReportList), NextToken: S.optional(S.String)}) {}
export class Attribute extends S.Class<Attribute>("Attribute")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const AttributesList = S.Array(Attribute);
export class BillingGroupCostReportResultElement extends S.Class<BillingGroupCostReportResultElement>("BillingGroupCostReportResultElement")({Arn: S.optional(S.String), AWSCost: S.optional(S.String), ProformaCost: S.optional(S.String), Margin: S.optional(S.String), MarginPercentage: S.optional(S.String), Currency: S.optional(S.String), Attributes: S.optional(AttributesList)}) {}
export const BillingGroupCostReportResultsList = S.Array(BillingGroupCostReportResultElement);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({Name: S.String, Message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class GetBillingGroupCostReportOutput extends S.Class<GetBillingGroupCostReportOutput>("GetBillingGroupCostReportOutput")({BillingGroupCostReportResults: S.optional(BillingGroupCostReportResultsList), NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * Associates the specified tags to a resource with the specified `resourceArn`. If existing tags on a resource are not specified in the request parameters, they are not changed.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-07-30", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes specified tags from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-07-30", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.
 */export const listAccountAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-07-30", uri: "/list-account-associations", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.ListAccountAssociations" }, ListAccountAssociationsInput, ListAccountAssociationsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.
 */export const listBillingGroupCostReports = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-07-30", uri: "/list-billing-group-cost-reports", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.ListBillingGroupCostReports" }, ListBillingGroupCostReportsInput, ListBillingGroupCostReportsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the margin summary report, which includes the Amazon Web Services cost and charged amount (pro forma cost) by Amazon Web Services service for a specific billing group.
 */export const getBillingGroupCostReport = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-07-30", uri: "/get-billing-group-cost-report", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.GetBillingGroupCostReport" }, GetBillingGroupCostReportInput, GetBillingGroupCostReportOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A list the tags for a resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-07-30", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

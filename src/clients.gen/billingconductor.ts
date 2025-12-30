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
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({Message: S.String}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({Message: S.String, RetryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: S.String, ResourceId: S.String, ResourceType: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({Message: S.String, RetryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
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
export class ValidationException extends S.Class<ValidationException>("ValidationException")({Message: S.String, Reason: S.optional(S.String), Fields: S.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-07-30", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-07-30", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAccountAssociations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-07-30", uri: "/list-account-associations", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.ListAccountAssociations" }, ListAccountAssociationsInput, ListAccountAssociationsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listBillingGroupCostReports = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-07-30", uri: "/list-billing-group-cost-reports", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.ListBillingGroupCostReports" }, ListBillingGroupCostReportsInput, ListBillingGroupCostReportsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getBillingGroupCostReport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-07-30", uri: "/get-billing-group-cost-report", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.GetBillingGroupCostReport" }, GetBillingGroupCostReportInput, GetBillingGroupCostReportOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-07-30", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

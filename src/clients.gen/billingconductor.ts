import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const GroupByAttributesList = Schema.Array(Schema.String);
export const TagKeyList = Schema.Array(Schema.String);
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: Schema.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const AccountIdFilterList = Schema.Array(Schema.String);
export const BillingGroupArnList = Schema.Array(Schema.String);
export class BillingPeriodRange extends Schema.Class<BillingPeriodRange>("BillingPeriodRange")({InclusiveStartBillingPeriod: Schema.String, ExclusiveEndBillingPeriod: Schema.String}) {}
export class ListAccountAssociationsFilter extends Schema.Class<ListAccountAssociationsFilter>("ListAccountAssociationsFilter")({Association: Schema.optional(Schema.String), AccountId: Schema.optional(Schema.String), AccountIds: Schema.optional(AccountIdFilterList)}) {}
export class ListBillingGroupCostReportsFilter extends Schema.Class<ListBillingGroupCostReportsFilter>("ListBillingGroupCostReportsFilter")({BillingGroupArns: Schema.optional(BillingGroupArnList)}) {}
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class GetBillingGroupCostReportInput extends Schema.Class<GetBillingGroupCostReportInput>("GetBillingGroupCostReportInput")({Arn: Schema.String, BillingPeriodRange: Schema.optional(BillingPeriodRange), GroupBy: Schema.optional(GroupByAttributesList), MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)}) {}
export class ListAccountAssociationsInput extends Schema.Class<ListAccountAssociationsInput>("ListAccountAssociationsInput")({BillingPeriod: Schema.optional(Schema.String), Filters: Schema.optional(ListAccountAssociationsFilter), NextToken: Schema.optional(Schema.String)}) {}
export class ListBillingGroupCostReportsInput extends Schema.Class<ListBillingGroupCostReportsInput>("ListBillingGroupCostReportsInput")({BillingPeriod: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String), Filters: Schema.optional(ListBillingGroupCostReportsFilter)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: Schema.optional(TagMap)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: Schema.String, Tags: TagMap}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({Message: Schema.String}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({Message: Schema.String, RetryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.String, ResourceId: Schema.String, ResourceType: Schema.String}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.String, RetryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class AccountAssociationsListElement extends Schema.Class<AccountAssociationsListElement>("AccountAssociationsListElement")({AccountId: Schema.optional(Schema.String), BillingGroupArn: Schema.optional(Schema.String), AccountName: Schema.optional(Schema.String), AccountEmail: Schema.optional(Schema.String)}) {}
export const AccountAssociationsList = Schema.Array(AccountAssociationsListElement);
export class BillingGroupCostReportElement extends Schema.Class<BillingGroupCostReportElement>("BillingGroupCostReportElement")({Arn: Schema.optional(Schema.String), AWSCost: Schema.optional(Schema.String), ProformaCost: Schema.optional(Schema.String), Margin: Schema.optional(Schema.String), MarginPercentage: Schema.optional(Schema.String), Currency: Schema.optional(Schema.String)}) {}
export const BillingGroupCostReportList = Schema.Array(BillingGroupCostReportElement);
export class ListAccountAssociationsOutput extends Schema.Class<ListAccountAssociationsOutput>("ListAccountAssociationsOutput")({LinkedAccounts: Schema.optional(AccountAssociationsList), NextToken: Schema.optional(Schema.String)}) {}
export class ListBillingGroupCostReportsOutput extends Schema.Class<ListBillingGroupCostReportsOutput>("ListBillingGroupCostReportsOutput")({BillingGroupCostReports: Schema.optional(BillingGroupCostReportList), NextToken: Schema.optional(Schema.String)}) {}
export class Attribute extends Schema.Class<Attribute>("Attribute")({Key: Schema.optional(Schema.String), Value: Schema.optional(Schema.String)}) {}
export const AttributesList = Schema.Array(Attribute);
export class BillingGroupCostReportResultElement extends Schema.Class<BillingGroupCostReportResultElement>("BillingGroupCostReportResultElement")({Arn: Schema.optional(Schema.String), AWSCost: Schema.optional(Schema.String), ProformaCost: Schema.optional(Schema.String), Margin: Schema.optional(Schema.String), MarginPercentage: Schema.optional(Schema.String), Currency: Schema.optional(Schema.String), Attributes: Schema.optional(AttributesList)}) {}
export const BillingGroupCostReportResultsList = Schema.Array(BillingGroupCostReportResultElement);
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({Name: Schema.String, Message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class GetBillingGroupCostReportOutput extends Schema.Class<GetBillingGroupCostReportOutput>("GetBillingGroupCostReportOutput")({BillingGroupCostReportResults: Schema.optional(BillingGroupCostReportResultsList), NextToken: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.String, Reason: Schema.optional(Schema.String), Fields: Schema.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-30", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-30", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAccountAssociations = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-30", uri: "/list-account-associations", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.ListAccountAssociations" }, ListAccountAssociationsInput, ListAccountAssociationsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listBillingGroupCostReports = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-30", uri: "/list-billing-group-cost-reports", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.ListBillingGroupCostReports" }, ListBillingGroupCostReportsInput, ListBillingGroupCostReportsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getBillingGroupCostReport = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-30", uri: "/get-billing-group-cost-report", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.GetBillingGroupCostReport" }, GetBillingGroupCostReportInput, GetBillingGroupCostReportOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-30", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

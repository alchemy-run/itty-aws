import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const GroupByAttributesList = Schema.Array(Schema.String);
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const AccountIdFilterList = Schema.Array(Schema.String);
export const BillingGroupArnList = Schema.Array(Schema.String);
export const BillingPeriodRange = Schema.Struct({InclusiveStartBillingPeriod: Schema.String, ExclusiveEndBillingPeriod: Schema.String});
export const ListAccountAssociationsFilter = Schema.Struct({Association: Schema.optional(Schema.String), AccountId: Schema.optional(Schema.String), AccountIds: Schema.optional(AccountIdFilterList)});
export const ListBillingGroupCostReportsFilter = Schema.Struct({BillingGroupArns: Schema.optional(BillingGroupArnList)});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const GetBillingGroupCostReportInput = Schema.Struct({Arn: Schema.String, BillingPeriodRange: Schema.optional(BillingPeriodRange), GroupBy: Schema.optional(GroupByAttributesList), MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)});
export const ListAccountAssociationsInput = Schema.Struct({BillingPeriod: Schema.optional(Schema.String), Filters: Schema.optional(ListAccountAssociationsFilter), NextToken: Schema.optional(Schema.String)});
export const ListBillingGroupCostReportsInput = Schema.Struct({BillingPeriod: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String), Filters: Schema.optional(ListBillingGroupCostReportsFilter)});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(TagMap)});
export const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap});
export const TagResourceResponse = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({Message: Schema.String});
export const InternalServerException = Schema.Struct({Message: Schema.String, RetryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.String, ResourceId: Schema.String, ResourceType: Schema.String});
export const ThrottlingException = Schema.Struct({Message: Schema.String, RetryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const AccountAssociationsListElement = Schema.Struct({AccountId: Schema.optional(Schema.String), BillingGroupArn: Schema.optional(Schema.String), AccountName: Schema.optional(Schema.String), AccountEmail: Schema.optional(Schema.String)});
export const AccountAssociationsList = Schema.Array(AccountAssociationsListElement);
export const BillingGroupCostReportElement = Schema.Struct({Arn: Schema.optional(Schema.String), AWSCost: Schema.optional(Schema.String), ProformaCost: Schema.optional(Schema.String), Margin: Schema.optional(Schema.String), MarginPercentage: Schema.optional(Schema.String), Currency: Schema.optional(Schema.String)});
export const BillingGroupCostReportList = Schema.Array(BillingGroupCostReportElement);
export const ListAccountAssociationsOutput = Schema.Struct({LinkedAccounts: Schema.optional(AccountAssociationsList), NextToken: Schema.optional(Schema.String)});
export const ListBillingGroupCostReportsOutput = Schema.Struct({BillingGroupCostReports: Schema.optional(BillingGroupCostReportList), NextToken: Schema.optional(Schema.String)});
export const Attribute = Schema.Struct({Key: Schema.optional(Schema.String), Value: Schema.optional(Schema.String)});
export const AttributesList = Schema.Array(Attribute);
export const BillingGroupCostReportResultElement = Schema.Struct({Arn: Schema.optional(Schema.String), AWSCost: Schema.optional(Schema.String), ProformaCost: Schema.optional(Schema.String), Margin: Schema.optional(Schema.String), MarginPercentage: Schema.optional(Schema.String), Currency: Schema.optional(Schema.String), Attributes: Schema.optional(AttributesList)});
export const BillingGroupCostReportResultsList = Schema.Array(BillingGroupCostReportResultElement);
export const ValidationExceptionField = Schema.Struct({Name: Schema.String, Message: Schema.String});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const GetBillingGroupCostReportOutput = Schema.Struct({BillingGroupCostReportResults: Schema.optional(BillingGroupCostReportResultsList), NextToken: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({Message: Schema.String, Reason: Schema.optional(Schema.String), Fields: Schema.optional(ValidationExceptionFieldList)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-30", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-30", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAccountAssociations = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-30", uri: "/list-account-associations", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.ListAccountAssociations" }, ListAccountAssociationsInput, ListAccountAssociationsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listBillingGroupCostReports = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-30", uri: "/list-billing-group-cost-reports", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.ListBillingGroupCostReports" }, ListBillingGroupCostReportsInput, ListBillingGroupCostReportsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getBillingGroupCostReport = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-30", uri: "/get-billing-group-cost-report", method: "POST", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.GetBillingGroupCostReport" }, GetBillingGroupCostReportInput, GetBillingGroupCostReportOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-30", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "billingconductor", sigV4ServiceName: "billingconductor", name: "AWSBillingConductor.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class GetPreferencesRequest extends Schema.Class<GetPreferencesRequest>("GetPreferencesRequest")({}) {}
export const RateTypes = Schema.Array(Schema.String);
export const ResourceTagKeys = Schema.Array(Schema.String);
export class GetPreferencesResponse extends Schema.Class<GetPreferencesResponse>("GetPreferencesResponse")({managementAccountRateTypeSelections: Schema.optional(RateTypes), memberAccountRateTypeSelections: Schema.optional(RateTypes), standaloneAccountRateTypeSelections: Schema.optional(RateTypes)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({arn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({arn: Schema.String, tagKeys: ResourceTagKeys}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdatePreferencesRequest extends Schema.Class<UpdatePreferencesRequest>("UpdatePreferencesRequest")({managementAccountRateTypeSelections: Schema.optional(RateTypes), memberAccountRateTypeSelections: Schema.optional(RateTypes), standaloneAccountRateTypeSelections: Schema.optional(RateTypes)}) {}
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export class DataUnavailableException extends Schema.Class<DataUnavailableException>("DataUnavailableException")({message: Schema.String}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(Tags)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({arn: Schema.String, tags: Tags}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String}) {}
export class UpdatePreferencesResponse extends Schema.Class<UpdatePreferencesResponse>("UpdatePreferencesResponse")({managementAccountRateTypeSelections: Schema.optional(RateTypes), memberAccountRateTypeSelections: Schema.optional(RateTypes), standaloneAccountRateTypeSelections: Schema.optional(RateTypes)}) {}
export class ServiceQuotaExceededException extends Schema.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String)}) {}

//# Errors
export class DataUnavailableExceptionError extends Schema.TaggedError<DataUnavailableExceptionError>()("DataUnavailableException", DataUnavailableException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const getPreferences = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.GetPreferences" }, GetPreferencesRequest, GetPreferencesResponse, [DataUnavailableExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updatePreferences = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.UpdatePreferences" }, UpdatePreferencesRequest, UpdatePreferencesResponse, [DataUnavailableExceptionError, ServiceQuotaExceededExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

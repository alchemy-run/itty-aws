import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const GetPreferencesRequest = Schema.Struct({});
export const RateTypes = Schema.Array(Schema.String);
export const ResourceTagKeys = Schema.Array(Schema.String);
export const GetPreferencesResponse = Schema.Struct({managementAccountRateTypeSelections: Schema.optional(RateTypes), memberAccountRateTypeSelections: Schema.optional(RateTypes), standaloneAccountRateTypeSelections: Schema.optional(RateTypes)});
export const ListTagsForResourceRequest = Schema.Struct({arn: Schema.String});
export const UntagResourceRequest = Schema.Struct({arn: Schema.String, tagKeys: ResourceTagKeys});
export const UntagResourceResponse = Schema.Struct({});
export const UpdatePreferencesRequest = Schema.Struct({managementAccountRateTypeSelections: Schema.optional(RateTypes), memberAccountRateTypeSelections: Schema.optional(RateTypes), standaloneAccountRateTypeSelections: Schema.optional(RateTypes)});
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export const DataUnavailableException = Schema.Struct({message: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(Tags)});
export const TagResourceRequest = Schema.Struct({arn: Schema.String, tags: Tags});
export const TagResourceResponse = Schema.Struct({});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});
export const UpdatePreferencesResponse = Schema.Struct({managementAccountRateTypeSelections: Schema.optional(RateTypes), memberAccountRateTypeSelections: Schema.optional(RateTypes), standaloneAccountRateTypeSelections: Schema.optional(RateTypes)});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String)});

//# Errors
export class DataUnavailableExceptionError extends Schema.TaggedError<DataUnavailableExceptionError>()("DataUnavailableException", DataUnavailableException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};

//# Operations
export const getPreferences = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.GetPreferences" }, GetPreferencesRequest, GetPreferencesResponse, [DataUnavailableExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updatePreferences = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.UpdatePreferences" }, UpdatePreferencesRequest, UpdatePreferencesResponse, [DataUnavailableExceptionError, ServiceQuotaExceededExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

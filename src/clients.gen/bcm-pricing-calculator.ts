import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetPreferencesRequest extends S.Class<GetPreferencesRequest>("GetPreferencesRequest")({}) {}
export const RateTypes = S.Array(S.String);
export const ResourceTagKeys = S.Array(S.String);
export class GetPreferencesResponse extends S.Class<GetPreferencesResponse>("GetPreferencesResponse")({managementAccountRateTypeSelections: S.optional(RateTypes), memberAccountRateTypeSelections: S.optional(RateTypes), standaloneAccountRateTypeSelections: S.optional(RateTypes)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({arn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({arn: S.String, tagKeys: ResourceTagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdatePreferencesRequest extends S.Class<UpdatePreferencesRequest>("UpdatePreferencesRequest")({managementAccountRateTypeSelections: S.optional(RateTypes), memberAccountRateTypeSelections: S.optional(RateTypes), standaloneAccountRateTypeSelections: S.optional(RateTypes)}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class DataUnavailableException extends S.Class<DataUnavailableException>("DataUnavailableException")({message: S.String}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(Tags)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({arn: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String, resourceId: S.String, resourceType: S.String}) {}
export class UpdatePreferencesResponse extends S.Class<UpdatePreferencesResponse>("UpdatePreferencesResponse")({managementAccountRateTypeSelections: S.optional(RateTypes), memberAccountRateTypeSelections: S.optional(RateTypes), standaloneAccountRateTypeSelections: S.optional(RateTypes)}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: S.String, resourceId: S.String, resourceType: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String)}) {}

//# Errors
export class DataUnavailableExceptionError extends S.TaggedError<DataUnavailableExceptionError>()("DataUnavailableException", DataUnavailableException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const getPreferences = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.GetPreferences" }, GetPreferencesRequest, GetPreferencesResponse, [DataUnavailableExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updatePreferences = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.UpdatePreferences" }, UpdatePreferencesRequest, UpdatePreferencesResponse, [DataUnavailableExceptionError, ServiceQuotaExceededExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-06-19", uri: "/", method: "POST", sdkId: "BCM Pricing Calculator", sigV4ServiceName: "bcm-pricing-calculator", name: "AWSBCMPricingCalculator.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

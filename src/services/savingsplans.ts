import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const SavingsPlanArnList = S.Array(S.String);
export const SavingsPlanIdList = S.Array(S.String);
export const SavingsPlanStateList = S.Array(S.String);
export const UUIDs = S.Array(S.String);
export const SavingsPlanPaymentOptionList = S.Array(S.String);
export const SavingsPlanTypeList = S.Array(S.String);
export const SavingsPlanProductTypeList = S.Array(S.String);
export const SavingsPlanRateServiceCodeList = S.Array(S.String);
export const SavingsPlanRateUsageTypeList = S.Array(S.String);
export const SavingsPlanRateOperationList = S.Array(S.String);
export const DurationsList = S.Array(S.Number);
export const CurrencyList = S.Array(S.String);
export const SavingsPlanDescriptionsList = S.Array(S.String);
export const SavingsPlanServiceCodeList = S.Array(S.String);
export const SavingsPlanUsageTypeList = S.Array(S.String);
export const SavingsPlanOperationList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class DeleteQueuedSavingsPlanRequest extends S.Class<DeleteQueuedSavingsPlanRequest>("DeleteQueuedSavingsPlanRequest")({savingsPlanId: S.String}) {}
export class DeleteQueuedSavingsPlanResponse extends S.Class<DeleteQueuedSavingsPlanResponse>("DeleteQueuedSavingsPlanResponse")({}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class ReturnSavingsPlanRequest extends S.Class<ReturnSavingsPlanRequest>("ReturnSavingsPlanRequest")({savingsPlanId: S.String, clientToken: S.optional(S.String)}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const ListOfStrings = S.Array(S.String);
export const FilterValuesList = S.Array(S.String);
export class SavingsPlanRateFilter extends S.Class<SavingsPlanRateFilter>("SavingsPlanRateFilter")({name: S.optional(S.String), values: S.optional(ListOfStrings)}) {}
export const SavingsPlanRateFilterList = S.Array(SavingsPlanRateFilter);
export class SavingsPlanFilter extends S.Class<SavingsPlanFilter>("SavingsPlanFilter")({name: S.optional(S.String), values: S.optional(ListOfStrings)}) {}
export const SavingsPlanFilterList = S.Array(SavingsPlanFilter);
export class SavingsPlanOfferingRateFilterElement extends S.Class<SavingsPlanOfferingRateFilterElement>("SavingsPlanOfferingRateFilterElement")({name: S.optional(S.String), values: S.optional(FilterValuesList)}) {}
export const SavingsPlanOfferingRateFiltersList = S.Array(SavingsPlanOfferingRateFilterElement);
export class SavingsPlanOfferingFilterElement extends S.Class<SavingsPlanOfferingFilterElement>("SavingsPlanOfferingFilterElement")({name: S.optional(S.String), values: S.optional(FilterValuesList)}) {}
export const SavingsPlanOfferingFiltersList = S.Array(SavingsPlanOfferingFilterElement);
export class CreateSavingsPlanRequest extends S.Class<CreateSavingsPlanRequest>("CreateSavingsPlanRequest")({savingsPlanOfferingId: S.String, commitment: S.String, upfrontPaymentAmount: S.optional(S.String), purchaseTime: S.optional(S.Date), clientToken: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class DescribeSavingsPlanRatesRequest extends S.Class<DescribeSavingsPlanRatesRequest>("DescribeSavingsPlanRatesRequest")({savingsPlanId: S.String, filters: S.optional(SavingsPlanRateFilterList), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class DescribeSavingsPlansRequest extends S.Class<DescribeSavingsPlansRequest>("DescribeSavingsPlansRequest")({savingsPlanArns: S.optional(SavingsPlanArnList), savingsPlanIds: S.optional(SavingsPlanIdList), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), states: S.optional(SavingsPlanStateList), filters: S.optional(SavingsPlanFilterList)}) {}
export class DescribeSavingsPlansOfferingRatesRequest extends S.Class<DescribeSavingsPlansOfferingRatesRequest>("DescribeSavingsPlansOfferingRatesRequest")({savingsPlanOfferingIds: S.optional(UUIDs), savingsPlanPaymentOptions: S.optional(SavingsPlanPaymentOptionList), savingsPlanTypes: S.optional(SavingsPlanTypeList), products: S.optional(SavingsPlanProductTypeList), serviceCodes: S.optional(SavingsPlanRateServiceCodeList), usageTypes: S.optional(SavingsPlanRateUsageTypeList), operations: S.optional(SavingsPlanRateOperationList), filters: S.optional(SavingsPlanOfferingRateFiltersList), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class DescribeSavingsPlansOfferingsRequest extends S.Class<DescribeSavingsPlansOfferingsRequest>("DescribeSavingsPlansOfferingsRequest")({offeringIds: S.optional(UUIDs), paymentOptions: S.optional(SavingsPlanPaymentOptionList), productType: S.optional(S.String), planTypes: S.optional(SavingsPlanTypeList), durations: S.optional(DurationsList), currencies: S.optional(CurrencyList), descriptions: S.optional(SavingsPlanDescriptionsList), serviceCodes: S.optional(SavingsPlanServiceCodeList), usageTypes: S.optional(SavingsPlanUsageTypeList), operations: S.optional(SavingsPlanOperationList), filters: S.optional(SavingsPlanOfferingFiltersList), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class ReturnSavingsPlanResponse extends S.Class<ReturnSavingsPlanResponse>("ReturnSavingsPlanResponse")({savingsPlanId: S.optional(S.String)}) {}
export class CreateSavingsPlanResponse extends S.Class<CreateSavingsPlanResponse>("CreateSavingsPlanResponse")({savingsPlanId: S.optional(S.String)}) {}
export class SavingsPlan extends S.Class<SavingsPlan>("SavingsPlan")({offeringId: S.optional(S.String), savingsPlanId: S.optional(S.String), savingsPlanArn: S.optional(S.String), description: S.optional(S.String), start: S.optional(S.String), end: S.optional(S.String), state: S.optional(S.String), region: S.optional(S.String), ec2InstanceFamily: S.optional(S.String), savingsPlanType: S.optional(S.String), paymentOption: S.optional(S.String), productTypes: S.optional(SavingsPlanProductTypeList), currency: S.optional(S.String), commitment: S.optional(S.String), upfrontPaymentAmount: S.optional(S.String), recurringPaymentAmount: S.optional(S.String), termDurationInSeconds: S.optional(S.Number), tags: S.optional(TagMap), returnableUntil: S.optional(S.String)}) {}
export const SavingsPlanList = S.Array(SavingsPlan);
export class DescribeSavingsPlansResponse extends S.Class<DescribeSavingsPlansResponse>("DescribeSavingsPlansResponse")({savingsPlans: S.optional(SavingsPlanList), nextToken: S.optional(S.String)}) {}
export class SavingsPlanRateProperty extends S.Class<SavingsPlanRateProperty>("SavingsPlanRateProperty")({name: S.optional(S.String), value: S.optional(S.String)}) {}
export const SavingsPlanRatePropertyList = S.Array(SavingsPlanRateProperty);
export class ParentSavingsPlanOffering extends S.Class<ParentSavingsPlanOffering>("ParentSavingsPlanOffering")({offeringId: S.optional(S.String), paymentOption: S.optional(S.String), planType: S.optional(S.String), durationSeconds: S.optional(S.Number), currency: S.optional(S.String), planDescription: S.optional(S.String)}) {}
export class SavingsPlanOfferingRateProperty extends S.Class<SavingsPlanOfferingRateProperty>("SavingsPlanOfferingRateProperty")({name: S.optional(S.String), value: S.optional(S.String)}) {}
export const SavingsPlanOfferingRatePropertyList = S.Array(SavingsPlanOfferingRateProperty);
export class SavingsPlanOfferingProperty extends S.Class<SavingsPlanOfferingProperty>("SavingsPlanOfferingProperty")({name: S.optional(S.String), value: S.optional(S.String)}) {}
export const SavingsPlanOfferingPropertyList = S.Array(SavingsPlanOfferingProperty);
export class SavingsPlanRate extends S.Class<SavingsPlanRate>("SavingsPlanRate")({rate: S.optional(S.String), currency: S.optional(S.String), unit: S.optional(S.String), productType: S.optional(S.String), serviceCode: S.optional(S.String), usageType: S.optional(S.String), operation: S.optional(S.String), properties: S.optional(SavingsPlanRatePropertyList)}) {}
export const SavingsPlanRateList = S.Array(SavingsPlanRate);
export class SavingsPlanOfferingRate extends S.Class<SavingsPlanOfferingRate>("SavingsPlanOfferingRate")({savingsPlanOffering: S.optional(ParentSavingsPlanOffering), rate: S.optional(S.String), unit: S.optional(S.String), productType: S.optional(S.String), serviceCode: S.optional(S.String), usageType: S.optional(S.String), operation: S.optional(S.String), properties: S.optional(SavingsPlanOfferingRatePropertyList)}) {}
export const SavingsPlanOfferingRatesList = S.Array(SavingsPlanOfferingRate);
export class SavingsPlanOffering extends S.Class<SavingsPlanOffering>("SavingsPlanOffering")({offeringId: S.optional(S.String), productTypes: S.optional(SavingsPlanProductTypeList), planType: S.optional(S.String), description: S.optional(S.String), paymentOption: S.optional(S.String), durationSeconds: S.optional(S.Number), currency: S.optional(S.String), serviceCode: S.optional(S.String), usageType: S.optional(S.String), operation: S.optional(S.String), properties: S.optional(SavingsPlanOfferingPropertyList)}) {}
export const SavingsPlanOfferingsList = S.Array(SavingsPlanOffering);
export class DescribeSavingsPlanRatesResponse extends S.Class<DescribeSavingsPlanRatesResponse>("DescribeSavingsPlanRatesResponse")({savingsPlanId: S.optional(S.String), searchResults: S.optional(SavingsPlanRateList), nextToken: S.optional(S.String)}) {}
export class DescribeSavingsPlansOfferingRatesResponse extends S.Class<DescribeSavingsPlansOfferingRatesResponse>("DescribeSavingsPlansOfferingRatesResponse")({searchResults: S.optional(SavingsPlanOfferingRatesList), nextToken: S.optional(S.String)}) {}
export class DescribeSavingsPlansOfferingsResponse extends S.Class<DescribeSavingsPlansOfferingsResponse>("DescribeSavingsPlansOfferingsResponse")({searchResults: S.optional(SavingsPlanOfferingsList), nextToken: S.optional(S.String)}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Lists the tags for the specified resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-28", uri: "/ListTagsForResource", sdkId: "savingsplans", sigV4ServiceName: "savingsplans", name: "AWSSavingsPlan.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the specified Savings Plan.
 */export const returnSavingsPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-28", uri: "/ReturnSavingsPlan", sdkId: "savingsplans", sigV4ServiceName: "savingsplans", name: "AWSSavingsPlan.ReturnSavingsPlan" }, ReturnSavingsPlanRequest, ReturnSavingsPlanResponse, [InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds the specified tags to the specified resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-28", uri: "/TagResource", sdkId: "savingsplans", sigV4ServiceName: "savingsplans", name: "AWSSavingsPlan.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified tags from the specified resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-28", uri: "/UntagResource", sdkId: "savingsplans", sigV4ServiceName: "savingsplans", name: "AWSSavingsPlan.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Savings Plan.
 */export const createSavingsPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-28", uri: "/CreateSavingsPlan", sdkId: "savingsplans", sigV4ServiceName: "savingsplans", name: "AWSSavingsPlan.CreateSavingsPlan" }, CreateSavingsPlanRequest, CreateSavingsPlanResponse, [InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the queued purchase for the specified Savings Plan.
 */export const deleteQueuedSavingsPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-28", uri: "/DeleteQueuedSavingsPlan", sdkId: "savingsplans", sigV4ServiceName: "savingsplans", name: "AWSSavingsPlan.DeleteQueuedSavingsPlan" }, DeleteQueuedSavingsPlanRequest, DeleteQueuedSavingsPlanResponse, [InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified Savings Plans.
 */export const describeSavingsPlans = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-28", uri: "/DescribeSavingsPlans", sdkId: "savingsplans", sigV4ServiceName: "savingsplans", name: "AWSSavingsPlan.DescribeSavingsPlans" }, DescribeSavingsPlansRequest, DescribeSavingsPlansResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the rates for a specific, existing Savings Plan.
 */export const describeSavingsPlanRates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-28", uri: "/DescribeSavingsPlanRates", sdkId: "savingsplans", sigV4ServiceName: "savingsplans", name: "AWSSavingsPlan.DescribeSavingsPlanRates" }, DescribeSavingsPlanRatesRequest, DescribeSavingsPlanRatesResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the offering rates for Savings Plans you might want to purchase.
 */export const describeSavingsPlansOfferingRates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-28", uri: "/DescribeSavingsPlansOfferingRates", sdkId: "savingsplans", sigV4ServiceName: "savingsplans", name: "AWSSavingsPlan.DescribeSavingsPlansOfferingRates" }, DescribeSavingsPlansOfferingRatesRequest, DescribeSavingsPlansOfferingRatesResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the offerings for the specified Savings Plans.
 */export const describeSavingsPlansOfferings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-28", uri: "/DescribeSavingsPlansOfferings", sdkId: "savingsplans", sigV4ServiceName: "savingsplans", name: "AWSSavingsPlan.DescribeSavingsPlansOfferings" }, DescribeSavingsPlansOfferingsRequest, DescribeSavingsPlansOfferingsResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

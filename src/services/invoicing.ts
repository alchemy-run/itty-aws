import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const AccountIdList = S.Array(S.String);
export const ResourceTagKeyList = S.Array(S.String);
export class BatchGetInvoiceProfileRequest extends S.Class<BatchGetInvoiceProfileRequest>("BatchGetInvoiceProfileRequest")({AccountIds: AccountIdList}) {}
export class DeleteInvoiceUnitRequest extends S.Class<DeleteInvoiceUnitRequest>("DeleteInvoiceUnitRequest")({InvoiceUnitArn: S.String}) {}
export class DeleteProcurementPortalPreferenceRequest extends S.Class<DeleteProcurementPortalPreferenceRequest>("DeleteProcurementPortalPreferenceRequest")({ProcurementPortalPreferenceArn: S.String}) {}
export class GetInvoicePDFRequest extends S.Class<GetInvoicePDFRequest>("GetInvoicePDFRequest")({InvoiceId: S.String}) {}
export class GetInvoiceUnitRequest extends S.Class<GetInvoiceUnitRequest>("GetInvoiceUnitRequest")({InvoiceUnitArn: S.String, AsOf: S.optional(S.Date)}) {}
export class GetProcurementPortalPreferenceRequest extends S.Class<GetProcurementPortalPreferenceRequest>("GetProcurementPortalPreferenceRequest")({ProcurementPortalPreferenceArn: S.String}) {}
export class ListProcurementPortalPreferencesRequest extends S.Class<ListProcurementPortalPreferencesRequest>("ListProcurementPortalPreferencesRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export const InvoiceUnitArns = S.Array(S.String);
export const SellerOfRecords = S.Array(S.String);
export class ProcurementPortalPreferenceSelector extends S.Class<ProcurementPortalPreferenceSelector>("ProcurementPortalPreferenceSelector")({InvoiceUnitArns: S.optional(InvoiceUnitArns), SellerOfRecords: S.optional(SellerOfRecords)}) {}
export class TestEnvPreferenceInput extends S.Class<TestEnvPreferenceInput>("TestEnvPreferenceInput")({BuyerDomain: S.String, BuyerIdentifier: S.String, SupplierDomain: S.String, SupplierIdentifier: S.String, ProcurementPortalSharedSecret: S.optional(S.String), ProcurementPortalInstanceEndpoint: S.optional(S.String)}) {}
export const EinvoiceDeliveryDocumentTypes = S.Array(S.String);
export const EinvoiceDeliveryAttachmentTypes = S.Array(S.String);
export class PurchaseOrderDataSource extends S.Class<PurchaseOrderDataSource>("PurchaseOrderDataSource")({EinvoiceDeliveryDocumentType: S.optional(S.String), PurchaseOrderDataSourceType: S.optional(S.String)}) {}
export const PurchaseOrderDataSources = S.Array(PurchaseOrderDataSource);
export class EinvoiceDeliveryPreference extends S.Class<EinvoiceDeliveryPreference>("EinvoiceDeliveryPreference")({EinvoiceDeliveryDocumentTypes: EinvoiceDeliveryDocumentTypes, EinvoiceDeliveryAttachmentTypes: S.optional(EinvoiceDeliveryAttachmentTypes), Protocol: S.String, PurchaseOrderDataSources: PurchaseOrderDataSources, ConnectionTestingMethod: S.String, EinvoiceDeliveryActivationDate: S.Date}) {}
export class Contact extends S.Class<Contact>("Contact")({Name: S.optional(S.String), Email: S.optional(S.String)}) {}
export const Contacts = S.Array(Contact);
export class PutProcurementPortalPreferenceRequest extends S.Class<PutProcurementPortalPreferenceRequest>("PutProcurementPortalPreferenceRequest")({ProcurementPortalPreferenceArn: S.String, Selector: S.optional(ProcurementPortalPreferenceSelector), ProcurementPortalSharedSecret: S.optional(S.String), ProcurementPortalInstanceEndpoint: S.optional(S.String), TestEnvPreference: S.optional(TestEnvPreferenceInput), EinvoiceDeliveryEnabled: S.Boolean, EinvoiceDeliveryPreference: S.optional(EinvoiceDeliveryPreference), PurchaseOrderRetrievalEnabled: S.Boolean, Contacts: Contacts}) {}
export class ResourceTag extends S.Class<ResourceTag>("ResourceTag")({Key: S.String, Value: S.String}) {}
export const ResourceTagList = S.Array(ResourceTag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, ResourceTags: ResourceTagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, ResourceTagKeys: ResourceTagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const RuleAccountIdList = S.Array(S.String);
export class InvoiceUnitRule extends S.Class<InvoiceUnitRule>("InvoiceUnitRule")({LinkedAccounts: S.optional(RuleAccountIdList), BillSourceAccounts: S.optional(RuleAccountIdList)}) {}
export class UpdateInvoiceUnitRequest extends S.Class<UpdateInvoiceUnitRequest>("UpdateInvoiceUnitRequest")({InvoiceUnitArn: S.String, Description: S.optional(S.String), TaxInheritanceDisabled: S.optional(S.Boolean), Rule: S.optional(InvoiceUnitRule)}) {}
export class UpdateProcurementPortalPreferenceStatusRequest extends S.Class<UpdateProcurementPortalPreferenceStatusRequest>("UpdateProcurementPortalPreferenceStatusRequest")({ProcurementPortalPreferenceArn: S.String, EinvoiceDeliveryPreferenceStatus: S.optional(S.String), EinvoiceDeliveryPreferenceStatusReason: S.optional(S.String), PurchaseOrderRetrievalPreferenceStatus: S.optional(S.String), PurchaseOrderRetrievalPreferenceStatusReason: S.optional(S.String)}) {}
export const InvoiceUnitNames = S.Array(S.String);
export class InvoiceSummariesSelector extends S.Class<InvoiceSummariesSelector>("InvoiceSummariesSelector")({ResourceType: S.String, Value: S.String}) {}
export class Filters extends S.Class<Filters>("Filters")({Names: S.optional(InvoiceUnitNames), InvoiceReceivers: S.optional(AccountIdList), Accounts: S.optional(AccountIdList), BillSourceAccounts: S.optional(AccountIdList)}) {}
export class CreateInvoiceUnitRequest extends S.Class<CreateInvoiceUnitRequest>("CreateInvoiceUnitRequest")({Name: S.String, InvoiceReceiver: S.String, Description: S.optional(S.String), TaxInheritanceDisabled: S.optional(S.Boolean), Rule: InvoiceUnitRule, ResourceTags: S.optional(ResourceTagList)}) {}
export class DeleteInvoiceUnitResponse extends S.Class<DeleteInvoiceUnitResponse>("DeleteInvoiceUnitResponse")({InvoiceUnitArn: S.optional(S.String)}) {}
export class DeleteProcurementPortalPreferenceResponse extends S.Class<DeleteProcurementPortalPreferenceResponse>("DeleteProcurementPortalPreferenceResponse")({ProcurementPortalPreferenceArn: S.String}) {}
export class GetInvoiceUnitResponse extends S.Class<GetInvoiceUnitResponse>("GetInvoiceUnitResponse")({InvoiceUnitArn: S.optional(S.String), InvoiceReceiver: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), TaxInheritanceDisabled: S.optional(S.Boolean), Rule: S.optional(InvoiceUnitRule), LastModified: S.optional(S.Date)}) {}
export class ListInvoiceUnitsRequest extends S.Class<ListInvoiceUnitsRequest>("ListInvoiceUnitsRequest")({Filters: S.optional(Filters), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), AsOf: S.optional(S.Date)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({ResourceTags: S.optional(ResourceTagList)}) {}
export class PutProcurementPortalPreferenceResponse extends S.Class<PutProcurementPortalPreferenceResponse>("PutProcurementPortalPreferenceResponse")({ProcurementPortalPreferenceArn: S.String}) {}
export class UpdateInvoiceUnitResponse extends S.Class<UpdateInvoiceUnitResponse>("UpdateInvoiceUnitResponse")({InvoiceUnitArn: S.optional(S.String)}) {}
export class UpdateProcurementPortalPreferenceStatusResponse extends S.Class<UpdateProcurementPortalPreferenceStatusResponse>("UpdateProcurementPortalPreferenceStatusResponse")({ProcurementPortalPreferenceArn: S.String}) {}
export class DateInterval extends S.Class<DateInterval>("DateInterval")({StartDate: S.Date, EndDate: S.Date}) {}
export class BillingPeriod extends S.Class<BillingPeriod>("BillingPeriod")({Month: S.Number, Year: S.Number}) {}
export class InvoiceSummariesFilter extends S.Class<InvoiceSummariesFilter>("InvoiceSummariesFilter")({TimeInterval: S.optional(DateInterval), BillingPeriod: S.optional(BillingPeriod), InvoicingEntity: S.optional(S.String)}) {}
export class ProcurementPortalPreferenceSummary extends S.Class<ProcurementPortalPreferenceSummary>("ProcurementPortalPreferenceSummary")({AwsAccountId: S.String, ProcurementPortalPreferenceArn: S.String, ProcurementPortalName: S.String, BuyerDomain: S.String, BuyerIdentifier: S.String, SupplierDomain: S.String, SupplierIdentifier: S.String, Selector: S.optional(ProcurementPortalPreferenceSelector), EinvoiceDeliveryEnabled: S.Boolean, PurchaseOrderRetrievalEnabled: S.Boolean, EinvoiceDeliveryPreferenceStatus: S.optional(S.String), EinvoiceDeliveryPreferenceStatusReason: S.optional(S.String), PurchaseOrderRetrievalPreferenceStatus: S.optional(S.String), PurchaseOrderRetrievalPreferenceStatusReason: S.optional(S.String), Version: S.Number, CreateDate: S.Date, LastUpdateDate: S.Date}) {}
export const ProcurementPortalPreferenceSummaries = S.Array(ProcurementPortalPreferenceSummary);
export class CreateInvoiceUnitResponse extends S.Class<CreateInvoiceUnitResponse>("CreateInvoiceUnitResponse")({InvoiceUnitArn: S.optional(S.String)}) {}
export class CreateProcurementPortalPreferenceRequest extends S.Class<CreateProcurementPortalPreferenceRequest>("CreateProcurementPortalPreferenceRequest")({ProcurementPortalName: S.String, BuyerDomain: S.String, BuyerIdentifier: S.String, SupplierDomain: S.String, SupplierIdentifier: S.String, Selector: S.optional(ProcurementPortalPreferenceSelector), ProcurementPortalSharedSecret: S.optional(S.String), ProcurementPortalInstanceEndpoint: S.optional(S.String), TestEnvPreference: S.optional(TestEnvPreferenceInput), EinvoiceDeliveryEnabled: S.Boolean, EinvoiceDeliveryPreference: S.optional(EinvoiceDeliveryPreference), PurchaseOrderRetrievalEnabled: S.Boolean, Contacts: Contacts, ResourceTags: S.optional(ResourceTagList), ClientToken: S.optional(S.String)}) {}
export class ListInvoiceSummariesRequest extends S.Class<ListInvoiceSummariesRequest>("ListInvoiceSummariesRequest")({Selector: InvoiceSummariesSelector, Filter: S.optional(InvoiceSummariesFilter), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListProcurementPortalPreferencesResponse extends S.Class<ListProcurementPortalPreferencesResponse>("ListProcurementPortalPreferencesResponse")({ProcurementPortalPreferences: S.optional(ProcurementPortalPreferenceSummaries), NextToken: S.optional(S.String)}) {}
export class ReceiverAddress extends S.Class<ReceiverAddress>("ReceiverAddress")({AddressLine1: S.optional(S.String), AddressLine2: S.optional(S.String), AddressLine3: S.optional(S.String), DistrictOrCounty: S.optional(S.String), City: S.optional(S.String), StateOrRegion: S.optional(S.String), CountryCode: S.optional(S.String), CompanyName: S.optional(S.String), PostalCode: S.optional(S.String)}) {}
export class SupplementalDocument extends S.Class<SupplementalDocument>("SupplementalDocument")({DocumentUrl: S.optional(S.String), DocumentUrlExpirationDate: S.optional(S.Date)}) {}
export const SupplementalDocuments = S.Array(SupplementalDocument);
export class TestEnvPreference extends S.Class<TestEnvPreference>("TestEnvPreference")({BuyerDomain: S.String, BuyerIdentifier: S.String, SupplierDomain: S.String, SupplierIdentifier: S.String, ProcurementPortalSharedSecret: S.optional(S.String), ProcurementPortalInstanceEndpoint: S.optional(S.String), PurchaseOrderRetrievalEndpoint: S.optional(S.String)}) {}
export class InvoiceProfile extends S.Class<InvoiceProfile>("InvoiceProfile")({AccountId: S.optional(S.String), ReceiverName: S.optional(S.String), ReceiverAddress: S.optional(ReceiverAddress), ReceiverEmail: S.optional(S.String), Issuer: S.optional(S.String), TaxRegistrationNumber: S.optional(S.String)}) {}
export const ProfileList = S.Array(InvoiceProfile);
export class InvoicePDF extends S.Class<InvoicePDF>("InvoicePDF")({InvoiceId: S.optional(S.String), DocumentUrl: S.optional(S.String), DocumentUrlExpirationDate: S.optional(S.Date), SupplementalDocuments: S.optional(SupplementalDocuments)}) {}
export class ProcurementPortalPreference extends S.Class<ProcurementPortalPreference>("ProcurementPortalPreference")({AwsAccountId: S.String, ProcurementPortalPreferenceArn: S.String, ProcurementPortalName: S.String, BuyerDomain: S.String, BuyerIdentifier: S.String, SupplierDomain: S.String, SupplierIdentifier: S.String, Selector: S.optional(ProcurementPortalPreferenceSelector), ProcurementPortalSharedSecret: S.optional(S.String), ProcurementPortalInstanceEndpoint: S.optional(S.String), PurchaseOrderRetrievalEndpoint: S.optional(S.String), TestEnvPreference: S.optional(TestEnvPreference), EinvoiceDeliveryEnabled: S.Boolean, EinvoiceDeliveryPreference: S.optional(EinvoiceDeliveryPreference), PurchaseOrderRetrievalEnabled: S.Boolean, Contacts: S.optional(Contacts), EinvoiceDeliveryPreferenceStatus: S.optional(S.String), EinvoiceDeliveryPreferenceStatusReason: S.optional(S.String), PurchaseOrderRetrievalPreferenceStatus: S.optional(S.String), PurchaseOrderRetrievalPreferenceStatusReason: S.optional(S.String), Version: S.Number, CreateDate: S.Date, LastUpdateDate: S.Date}) {}
export class InvoiceUnit extends S.Class<InvoiceUnit>("InvoiceUnit")({InvoiceUnitArn: S.optional(S.String), InvoiceReceiver: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), TaxInheritanceDisabled: S.optional(S.Boolean), Rule: S.optional(InvoiceUnitRule), LastModified: S.optional(S.Date)}) {}
export const InvoiceUnits = S.Array(InvoiceUnit);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class BatchGetInvoiceProfileResponse extends S.Class<BatchGetInvoiceProfileResponse>("BatchGetInvoiceProfileResponse")({Profiles: S.optional(ProfileList)}) {}
export class CreateProcurementPortalPreferenceResponse extends S.Class<CreateProcurementPortalPreferenceResponse>("CreateProcurementPortalPreferenceResponse")({ProcurementPortalPreferenceArn: S.String}) {}
export class GetInvoicePDFResponse extends S.Class<GetInvoicePDFResponse>("GetInvoicePDFResponse")({InvoicePDF: S.optional(InvoicePDF)}) {}
export class GetProcurementPortalPreferenceResponse extends S.Class<GetProcurementPortalPreferenceResponse>("GetProcurementPortalPreferenceResponse")({ProcurementPortalPreference: ProcurementPortalPreference}) {}
export class ListInvoiceUnitsResponse extends S.Class<ListInvoiceUnitsResponse>("ListInvoiceUnitsResponse")({InvoiceUnits: S.optional(InvoiceUnits), NextToken: S.optional(S.String)}) {}
export class Entity extends S.Class<Entity>("Entity")({InvoicingEntity: S.optional(S.String)}) {}
export class CurrencyExchangeDetails extends S.Class<CurrencyExchangeDetails>("CurrencyExchangeDetails")({SourceCurrencyCode: S.optional(S.String), TargetCurrencyCode: S.optional(S.String), Rate: S.optional(S.String)}) {}
export class DiscountsBreakdownAmount extends S.Class<DiscountsBreakdownAmount>("DiscountsBreakdownAmount")({Description: S.optional(S.String), Amount: S.optional(S.String), Rate: S.optional(S.String)}) {}
export const DiscountsBreakdownAmountList = S.Array(DiscountsBreakdownAmount);
export class TaxesBreakdownAmount extends S.Class<TaxesBreakdownAmount>("TaxesBreakdownAmount")({Description: S.optional(S.String), Amount: S.optional(S.String), Rate: S.optional(S.String)}) {}
export const TaxesBreakdownAmountList = S.Array(TaxesBreakdownAmount);
export class FeesBreakdownAmount extends S.Class<FeesBreakdownAmount>("FeesBreakdownAmount")({Description: S.optional(S.String), Amount: S.optional(S.String), Rate: S.optional(S.String)}) {}
export const FeesBreakdownAmountList = S.Array(FeesBreakdownAmount);
export class DiscountsBreakdown extends S.Class<DiscountsBreakdown>("DiscountsBreakdown")({Breakdown: S.optional(DiscountsBreakdownAmountList), TotalAmount: S.optional(S.String)}) {}
export class TaxesBreakdown extends S.Class<TaxesBreakdown>("TaxesBreakdown")({Breakdown: S.optional(TaxesBreakdownAmountList), TotalAmount: S.optional(S.String)}) {}
export class FeesBreakdown extends S.Class<FeesBreakdown>("FeesBreakdown")({Breakdown: S.optional(FeesBreakdownAmountList), TotalAmount: S.optional(S.String)}) {}
export class AmountBreakdown extends S.Class<AmountBreakdown>("AmountBreakdown")({SubTotalAmount: S.optional(S.String), Discounts: S.optional(DiscountsBreakdown), Taxes: S.optional(TaxesBreakdown), Fees: S.optional(FeesBreakdown)}) {}
export class InvoiceCurrencyAmount extends S.Class<InvoiceCurrencyAmount>("InvoiceCurrencyAmount")({TotalAmount: S.optional(S.String), TotalAmountBeforeTax: S.optional(S.String), CurrencyCode: S.optional(S.String), AmountBreakdown: S.optional(AmountBreakdown), CurrencyExchangeDetails: S.optional(CurrencyExchangeDetails)}) {}
export class InvoiceSummary extends S.Class<InvoiceSummary>("InvoiceSummary")({AccountId: S.optional(S.String), InvoiceId: S.optional(S.String), IssuedDate: S.optional(S.Date), DueDate: S.optional(S.Date), Entity: S.optional(Entity), BillingPeriod: S.optional(BillingPeriod), InvoiceType: S.optional(S.String), OriginalInvoiceId: S.optional(S.String), PurchaseOrderNumber: S.optional(S.String), BaseCurrencyAmount: S.optional(InvoiceCurrencyAmount), TaxCurrencyAmount: S.optional(InvoiceCurrencyAmount), PaymentCurrencyAmount: S.optional(InvoiceCurrencyAmount)}) {}
export const InvoiceSummaries = S.Array(InvoiceSummary);
export class ListInvoiceSummariesResponse extends S.Class<ListInvoiceSummariesResponse>("ListInvoiceSummariesResponse")({InvoiceSummaries: InvoiceSummaries, NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};

//# Operations
/**
 * Adds a tag to a resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * You can update the invoice unit configuration at any time, and Amazon Web Services will use the latest configuration at the end of the month.
 */export const updateInvoiceUnit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.UpdateInvoiceUnit" }, UpdateInvoiceUnitRequest, UpdateInvoiceUnitResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the status of a procurement portal preference, including the activation state of e-invoice delivery and purchase order retrieval features.
 */export const updateProcurementPortalPreferenceStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.UpdateProcurementPortalPreferenceStatus" }, UpdateProcurementPortalPreferenceStatusRequest, UpdateProcurementPortalPreferenceStatusResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This creates a new invoice unit with the provided definition.
 */export const createInvoiceUnit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.CreateInvoiceUnit" }, CreateInvoiceUnitRequest, CreateInvoiceUnitResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This deletes an invoice unit with the provided invoice unit ARN.
 */export const deleteInvoiceUnit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.DeleteInvoiceUnit" }, DeleteInvoiceUnitRequest, DeleteInvoiceUnitResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing procurement portal preference. This action cannot be undone. Active e-invoice delivery and PO retrieval configurations will be terminated.
 */export const deleteProcurementPortalPreference = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.DeleteProcurementPortalPreference" }, DeleteProcurementPortalPreferenceRequest, DeleteProcurementPortalPreferenceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This retrieves the invoice unit definition.
 */export const getInvoiceUnit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.GetInvoiceUnit" }, GetInvoiceUnitRequest, GetInvoiceUnitResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of procurement portal preferences associated with the Amazon Web Services account.
 */export const listProcurementPortalPreferences = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.ListProcurementPortalPreferences" }, ListProcurementPortalPreferencesRequest, ListProcurementPortalPreferencesResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing procurement portal preference configuration. This operation can modify settings for e-invoice delivery and purchase order retrieval.
 */export const putProcurementPortalPreference = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.PutProcurementPortalPreference" }, PutProcurementPortalPreferenceRequest, PutProcurementPortalPreferenceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This gets the invoice profile associated with a set of accounts. The accounts must be linked accounts under the requester management account organization.
 */export const batchGetInvoiceProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.BatchGetInvoiceProfile" }, BatchGetInvoiceProfileRequest, BatchGetInvoiceProfileResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a procurement portal preference configuration for e-invoice delivery and purchase order retrieval. This preference defines how invoices are delivered to a procurement portal and how purchase orders are retrieved.
 */export const createProcurementPortalPreference = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.CreateProcurementPortalPreference" }, CreateProcurementPortalPreferenceRequest, CreateProcurementPortalPreferenceResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a URL to download the invoice document and supplemental documents associated with an invoice. The URLs are pre-signed and have expiration time. For special cases like Brazil, where Amazon Web Services generated invoice identifiers and government provided identifiers do not match, use the Amazon Web Services generated invoice identifier when making API requests. To grant IAM permission to use this operation, the caller needs the `invoicing:GetInvoicePDF` policy action.
 */export const getInvoicePDF = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.GetInvoicePDF" }, GetInvoicePDFRequest, GetInvoicePDFResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details of a specific procurement portal preference configuration.
 */export const getProcurementPortalPreference = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.GetProcurementPortalPreference" }, GetProcurementPortalPreferenceRequest, GetProcurementPortalPreferenceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This fetches a list of all invoice unit definitions for a given account, as of the provided `AsOf` date.
 */export const listInvoiceUnits = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.ListInvoiceUnits" }, ListInvoiceUnitsRequest, ListInvoiceUnitsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags for a resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves your invoice details programmatically, without line item details.
 */export const listInvoiceSummaries = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-12-01", sdkId: "Invoicing", sigV4ServiceName: "invoicing", name: "Invoicing.ListInvoiceSummaries" }, ListInvoiceSummariesRequest, ListInvoiceSummariesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

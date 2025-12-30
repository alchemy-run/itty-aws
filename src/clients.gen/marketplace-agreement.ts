import * as Schema from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class DescribeAgreementInput extends Schema.Class<DescribeAgreementInput>("DescribeAgreementInput")({agreementId: Schema.String}) {}
export class GetAgreementTermsInput extends Schema.Class<GetAgreementTermsInput>("GetAgreementTermsInput")({agreementId: Schema.String, maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)}) {}
export const FilterValueList = Schema.Array(Schema.String);
export class Filter extends Schema.Class<Filter>("Filter")({name: Schema.optional(Schema.String), values: Schema.optional(FilterValueList)}) {}
export const FilterList = Schema.Array(Filter);
export class Sort extends Schema.Class<Sort>("Sort")({sortBy: Schema.optional(Schema.String), sortOrder: Schema.optional(Schema.String)}) {}
export class SearchAgreementsInput extends Schema.Class<SearchAgreementsInput>("SearchAgreementsInput")({catalog: Schema.optional(Schema.String), filters: Schema.optional(FilterList), sort: Schema.optional(Sort), maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)}) {}
export class Acceptor extends Schema.Class<Acceptor>("Acceptor")({accountId: Schema.optional(Schema.String)}) {}
export class Proposer extends Schema.Class<Proposer>("Proposer")({accountId: Schema.optional(Schema.String)}) {}
export class EstimatedCharges extends Schema.Class<EstimatedCharges>("EstimatedCharges")({currencyCode: Schema.optional(Schema.String), agreementValue: Schema.optional(Schema.String)}) {}
export class Resource extends Schema.Class<Resource>("Resource")({id: Schema.optional(Schema.String), type: Schema.optional(Schema.String)}) {}
export const Resources = Schema.Array(Resource);
export class SupportTerm extends Schema.Class<SupportTerm>("SupportTerm")({type: Schema.optional(Schema.String), refundPolicy: Schema.optional(Schema.String)}) {}
export class ByolPricingTerm extends Schema.Class<ByolPricingTerm>("ByolPricingTerm")({type: Schema.optional(Schema.String)}) {}
export class RecurringPaymentTerm extends Schema.Class<RecurringPaymentTerm>("RecurringPaymentTerm")({type: Schema.optional(Schema.String), currencyCode: Schema.optional(Schema.String), billingPeriod: Schema.optional(Schema.String), price: Schema.optional(Schema.String)}) {}
export class ValidityTerm extends Schema.Class<ValidityTerm>("ValidityTerm")({type: Schema.optional(Schema.String), agreementDuration: Schema.optional(Schema.String), agreementStartDate: Schema.optional(Schema.Date), agreementEndDate: Schema.optional(Schema.Date)}) {}
export class GrantItem extends Schema.Class<GrantItem>("GrantItem")({dimensionKey: Schema.optional(Schema.String), maxQuantity: Schema.optional(Schema.Number)}) {}
export const GrantList = Schema.Array(GrantItem);
export class FixedUpfrontPricingTerm extends Schema.Class<FixedUpfrontPricingTerm>("FixedUpfrontPricingTerm")({type: Schema.optional(Schema.String), currencyCode: Schema.optional(Schema.String), duration: Schema.optional(Schema.String), price: Schema.optional(Schema.String), grants: Schema.optional(GrantList)}) {}
export class ProposalSummary extends Schema.Class<ProposalSummary>("ProposalSummary")({resources: Schema.optional(Resources), offerId: Schema.optional(Schema.String), offerSetId: Schema.optional(Schema.String)}) {}
export class AgreementViewSummary extends Schema.Class<AgreementViewSummary>("AgreementViewSummary")({agreementId: Schema.optional(Schema.String), acceptanceTime: Schema.optional(Schema.Date), startTime: Schema.optional(Schema.Date), endTime: Schema.optional(Schema.Date), agreementType: Schema.optional(Schema.String), acceptor: Schema.optional(Acceptor), proposer: Schema.optional(Proposer), proposalSummary: Schema.optional(ProposalSummary), status: Schema.optional(Schema.String)}) {}
export const AgreementViewSummaryList = Schema.Array(AgreementViewSummary);
export class DocumentItem extends Schema.Class<DocumentItem>("DocumentItem")({type: Schema.optional(Schema.String), url: Schema.optional(Schema.String), version: Schema.optional(Schema.String)}) {}
export const DocumentList = Schema.Array(DocumentItem);
export class RenewalTermConfiguration extends Schema.Class<RenewalTermConfiguration>("RenewalTermConfiguration")({enableAutoRenew: Schema.Boolean}) {}
export class ScheduleItem extends Schema.Class<ScheduleItem>("ScheduleItem")({chargeDate: Schema.optional(Schema.Date), chargeAmount: Schema.optional(Schema.String)}) {}
export const ScheduleList = Schema.Array(ScheduleItem);
export class VariablePaymentTermConfiguration extends Schema.Class<VariablePaymentTermConfiguration>("VariablePaymentTermConfiguration")({paymentRequestApprovalStrategy: Schema.String, expirationDuration: Schema.optional(Schema.String)}) {}
export class DescribeAgreementOutput extends Schema.Class<DescribeAgreementOutput>("DescribeAgreementOutput")({agreementId: Schema.optional(Schema.String), acceptor: Schema.optional(Acceptor), proposer: Schema.optional(Proposer), startTime: Schema.optional(Schema.Date), endTime: Schema.optional(Schema.Date), acceptanceTime: Schema.optional(Schema.Date), agreementType: Schema.optional(Schema.String), estimatedCharges: Schema.optional(EstimatedCharges), proposalSummary: Schema.optional(ProposalSummary), status: Schema.optional(Schema.String)}) {}
export class SearchAgreementsOutput extends Schema.Class<SearchAgreementsOutput>("SearchAgreementsOutput")({agreementViewSummaries: Schema.optional(AgreementViewSummaryList), nextToken: Schema.optional(Schema.String)}) {}
export class LegalTerm extends Schema.Class<LegalTerm>("LegalTerm")({type: Schema.optional(Schema.String), documents: Schema.optional(DocumentList)}) {}
export class RenewalTerm extends Schema.Class<RenewalTerm>("RenewalTerm")({type: Schema.optional(Schema.String), configuration: Schema.optional(RenewalTermConfiguration)}) {}
export class PaymentScheduleTerm extends Schema.Class<PaymentScheduleTerm>("PaymentScheduleTerm")({type: Schema.optional(Schema.String), currencyCode: Schema.optional(Schema.String), schedule: Schema.optional(ScheduleList)}) {}
export class FreeTrialPricingTerm extends Schema.Class<FreeTrialPricingTerm>("FreeTrialPricingTerm")({type: Schema.optional(Schema.String), duration: Schema.optional(Schema.String), grants: Schema.optional(GrantList)}) {}
export class VariablePaymentTerm extends Schema.Class<VariablePaymentTerm>("VariablePaymentTerm")({type: Schema.optional(Schema.String), currencyCode: Schema.optional(Schema.String), maxTotalChargeAmount: Schema.optional(Schema.String), configuration: Schema.optional(VariablePaymentTermConfiguration)}) {}
export class RateCardItem extends Schema.Class<RateCardItem>("RateCardItem")({dimensionKey: Schema.optional(Schema.String), price: Schema.optional(Schema.String)}) {}
export const RateCardList = Schema.Array(RateCardItem);
export class Selector extends Schema.Class<Selector>("Selector")({type: Schema.optional(Schema.String), value: Schema.optional(Schema.String)}) {}
export class Constraints extends Schema.Class<Constraints>("Constraints")({multipleDimensionSelection: Schema.optional(Schema.String), quantityConfiguration: Schema.optional(Schema.String)}) {}
export class Dimension extends Schema.Class<Dimension>("Dimension")({dimensionKey: Schema.String, dimensionValue: Schema.Number}) {}
export const DimensionList = Schema.Array(Dimension);
export class UsageBasedRateCardItem extends Schema.Class<UsageBasedRateCardItem>("UsageBasedRateCardItem")({rateCard: Schema.optional(RateCardList)}) {}
export const UsageBasedRateCardList = Schema.Array(UsageBasedRateCardItem);
export class ConfigurableUpfrontRateCardItem extends Schema.Class<ConfigurableUpfrontRateCardItem>("ConfigurableUpfrontRateCardItem")({selector: Schema.optional(Selector), constraints: Schema.optional(Constraints), rateCard: Schema.optional(RateCardList)}) {}
export const ConfigurableUpfrontRateCardList = Schema.Array(ConfigurableUpfrontRateCardItem);
export class ConfigurableUpfrontPricingTermConfiguration extends Schema.Class<ConfigurableUpfrontPricingTermConfiguration>("ConfigurableUpfrontPricingTermConfiguration")({selectorValue: Schema.String, dimensions: DimensionList}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({requestId: Schema.optional(Schema.String), message: Schema.optional(Schema.String)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({requestId: Schema.optional(Schema.String), message: Schema.optional(Schema.String)}) {}
export class UsageBasedPricingTerm extends Schema.Class<UsageBasedPricingTerm>("UsageBasedPricingTerm")({type: Schema.optional(Schema.String), currencyCode: Schema.optional(Schema.String), rateCards: Schema.optional(UsageBasedRateCardList)}) {}
export class ConfigurableUpfrontPricingTerm extends Schema.Class<ConfigurableUpfrontPricingTerm>("ConfigurableUpfrontPricingTerm")({type: Schema.optional(Schema.String), currencyCode: Schema.optional(Schema.String), rateCards: Schema.optional(ConfigurableUpfrontRateCardList), configuration: Schema.optional(ConfigurableUpfrontPricingTermConfiguration)}) {}
export const AcceptedTerm = Schema.Union(LegalTerm, SupportTerm, RenewalTerm, UsageBasedPricingTerm, ConfigurableUpfrontPricingTerm, ByolPricingTerm, RecurringPaymentTerm, ValidityTerm, PaymentScheduleTerm, FreeTrialPricingTerm, FixedUpfrontPricingTerm, VariablePaymentTerm);
export const AcceptedTermList = Schema.Array(AcceptedTerm);
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({requestId: Schema.optional(Schema.String), message: Schema.optional(Schema.String), resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String)}) {}
export class GetAgreementTermsOutput extends Schema.Class<GetAgreementTermsOutput>("GetAgreementTermsOutput")({acceptedTerms: Schema.optional(AcceptedTermList), nextToken: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({requestId: Schema.optional(Schema.String), message: Schema.optional(Schema.String)}) {}
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({requestId: Schema.optional(Schema.String), message: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), fields: Schema.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const getAgreementTerms = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-03-01", uri: "/", method: "POST", sdkId: "Marketplace Agreement", sigV4ServiceName: "aws-marketplace", name: "AWSMPCommerceService_v20200301.GetAgreementTerms" }, GetAgreementTermsInput, GetAgreementTermsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const searchAgreements = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-03-01", uri: "/", method: "POST", sdkId: "Marketplace Agreement", sigV4ServiceName: "aws-marketplace", name: "AWSMPCommerceService_v20200301.SearchAgreements" }, SearchAgreementsInput, SearchAgreementsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeAgreement = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-03-01", uri: "/", method: "POST", sdkId: "Marketplace Agreement", sigV4ServiceName: "aws-marketplace", name: "AWSMPCommerceService_v20200301.DescribeAgreement" }, DescribeAgreementInput, DescribeAgreementOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

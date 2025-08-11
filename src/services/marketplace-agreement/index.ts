import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class MarketplaceAgreement extends AWSServiceClient {
  describeAgreement(
    input: DescribeAgreementInput,
  ): Effect.Effect<
    DescribeAgreementOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAgreementTerms(
    input: GetAgreementTermsInput,
  ): Effect.Effect<
    GetAgreementTermsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchAgreements(
    input: SearchAgreementsInput,
  ): Effect.Effect<
    SearchAgreementsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

interface _AcceptedTerm {
  legalTerm?: LegalTerm;
  supportTerm?: SupportTerm;
  renewalTerm?: RenewalTerm;
  usageBasedPricingTerm?: UsageBasedPricingTerm;
  configurableUpfrontPricingTerm?: ConfigurableUpfrontPricingTerm;
  byolPricingTerm?: ByolPricingTerm;
  recurringPaymentTerm?: RecurringPaymentTerm;
  validityTerm?: ValidityTerm;
  paymentScheduleTerm?: PaymentScheduleTerm;
  freeTrialPricingTerm?: FreeTrialPricingTerm;
  fixedUpfrontPricingTerm?: FixedUpfrontPricingTerm;
}

export type AcceptedTerm =
  | (_AcceptedTerm & { legalTerm: LegalTerm })
  | (_AcceptedTerm & { supportTerm: SupportTerm })
  | (_AcceptedTerm & { renewalTerm: RenewalTerm })
  | (_AcceptedTerm & { usageBasedPricingTerm: UsageBasedPricingTerm })
  | (_AcceptedTerm & {
      configurableUpfrontPricingTerm: ConfigurableUpfrontPricingTerm;
    })
  | (_AcceptedTerm & { byolPricingTerm: ByolPricingTerm })
  | (_AcceptedTerm & { recurringPaymentTerm: RecurringPaymentTerm })
  | (_AcceptedTerm & { validityTerm: ValidityTerm })
  | (_AcceptedTerm & { paymentScheduleTerm: PaymentScheduleTerm })
  | (_AcceptedTerm & { freeTrialPricingTerm: FreeTrialPricingTerm })
  | (_AcceptedTerm & { fixedUpfrontPricingTerm: FixedUpfrontPricingTerm });
export type AcceptedTermList = Array<AcceptedTerm>;
export interface Acceptor {
  accountId?: string;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly requestId?: string;
  readonly message?: string;
}> {}
export type AgreementResourceType = string;

export type AgreementStatus =
  | "ACTIVE"
  | "ARCHIVED"
  | "CANCELLED"
  | "EXPIRED"
  | "RENEWED"
  | "REPLACED"
  | "ROLLED_BACK"
  | "SUPERSEDED"
  | "TERMINATED";
export type AgreementType = string;

export interface AgreementViewSummary {
  agreementId?: string;
  acceptanceTime?: Date | string;
  startTime?: Date | string;
  endTime?: Date | string;
  agreementType?: string;
  acceptor?: Acceptor;
  proposer?: Proposer;
  proposalSummary?: ProposalSummary;
  status?: AgreementStatus;
}
export type AgreementViewSummaryList = Array<AgreementViewSummary>;
export type AWSAccountId = string;

export type MarketplaceAgreementBoolean = boolean;

export type BoundedString = string;

export interface ByolPricingTerm {
  type?: string;
}
export type Catalog = string;

export interface ConfigurableUpfrontPricingTerm {
  type?: string;
  currencyCode?: string;
  rateCards?: Array<ConfigurableUpfrontRateCardItem>;
  configuration?: ConfigurableUpfrontPricingTermConfiguration;
}
export interface ConfigurableUpfrontPricingTermConfiguration {
  selectorValue: string;
  dimensions: Array<Dimension>;
}
export interface ConfigurableUpfrontRateCardItem {
  selector?: Selector;
  constraints?: Constraints;
  rateCard?: Array<RateCardItem>;
}
export type ConfigurableUpfrontRateCardList =
  Array<ConfigurableUpfrontRateCardItem>;
export interface Constraints {
  multipleDimensionSelection?: string;
  quantityConfiguration?: string;
}
export type CurrencyCode = string;

export interface DescribeAgreementInput {
  agreementId: string;
}
export interface DescribeAgreementOutput {
  agreementId?: string;
  acceptor?: Acceptor;
  proposer?: Proposer;
  startTime?: Date | string;
  endTime?: Date | string;
  acceptanceTime?: Date | string;
  agreementType?: string;
  estimatedCharges?: EstimatedCharges;
  proposalSummary?: ProposalSummary;
  status?: AgreementStatus;
}
export interface Dimension {
  dimensionKey: string;
  dimensionValue: number;
}
export type DimensionList = Array<Dimension>;
export interface DocumentItem {
  type?: string;
  url?: string;
  version?: string;
}
export type DocumentList = Array<DocumentItem>;
export interface EstimatedCharges {
  currencyCode?: string;
  agreementValue?: string;
}
export type ExceptionMessage = string;

export interface Filter {
  name?: string;
  values?: Array<string>;
}
export type FilterList = Array<Filter>;
export type FilterName = string;

export type FilterValue = string;

export type FilterValueList = Array<string>;
export interface FixedUpfrontPricingTerm {
  type?: string;
  currencyCode?: string;
  duration?: string;
  price?: string;
  grants?: Array<GrantItem>;
}
export interface FreeTrialPricingTerm {
  type?: string;
  duration?: string;
  grants?: Array<GrantItem>;
}
export interface GetAgreementTermsInput {
  agreementId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface GetAgreementTermsOutput {
  acceptedTerms?: Array<AcceptedTerm>;
  nextToken?: string;
}
export interface GrantItem {
  dimensionKey?: string;
  maxQuantity?: number;
}
export type GrantList = Array<GrantItem>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly requestId?: string;
  readonly message?: string;
}> {}
export interface LegalTerm {
  type?: string;
  documents?: Array<DocumentItem>;
}
export type MaxResults = number;

export type NextToken = string;

export type OfferId = string;

export interface PaymentScheduleTerm {
  type?: string;
  currencyCode?: string;
  schedule?: Array<ScheduleItem>;
}
export type PositiveIntegerWithDefaultValueOne = number;

export interface ProposalSummary {
  resources?: Array<Resource>;
  offerId?: string;
}
export interface Proposer {
  accountId?: string;
}
export interface RateCardItem {
  dimensionKey?: string;
  price?: string;
}
export type RateCardList = Array<RateCardItem>;
export interface RecurringPaymentTerm {
  type?: string;
  currencyCode?: string;
  billingPeriod?: string;
  price?: string;
}
export interface RenewalTerm {
  type?: string;
  configuration?: RenewalTermConfiguration;
}
export interface RenewalTermConfiguration {
  enableAutoRenew: boolean;
}
export type RequestId = string;

export interface Resource {
  id?: string;
  type?: string;
}
export type ResourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly requestId?: string;
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: ResourceType;
}> {}
export type Resources = Array<Resource>;
export type ResourceType = "AGREEMENT";
export interface ScheduleItem {
  chargeDate?: Date | string;
  chargeAmount?: string;
}
export type ScheduleList = Array<ScheduleItem>;
export interface SearchAgreementsInput {
  catalog?: string;
  filters?: Array<Filter>;
  sort?: Sort;
  maxResults?: number;
  nextToken?: string;
}
export interface SearchAgreementsOutput {
  agreementViewSummaries?: Array<AgreementViewSummary>;
  nextToken?: string;
}
export interface Selector {
  type?: string;
  value?: string;
}
export interface Sort {
  sortBy?: string;
  sortOrder?: SortOrder;
}
export type SortBy = string;

export type SortOrder = "ASCENDING" | "DESCENDING";
export interface SupportTerm {
  type?: string;
  refundPolicy?: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly requestId?: string;
  readonly message?: string;
}> {}
export type Timestamp = Date | string;

export type UnversionedTermType = string;

export interface UsageBasedPricingTerm {
  type?: string;
  currencyCode?: string;
  rateCards?: Array<UsageBasedRateCardItem>;
}
export interface UsageBasedRateCardItem {
  rateCard?: Array<RateCardItem>;
}
export type UsageBasedRateCardList = Array<UsageBasedRateCardItem>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly requestId?: string;
  readonly message?: string;
  readonly reason?: ValidationExceptionReason;
  readonly fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "INVALID_AGREEMENT_ID"
  | "MISSING_AGREEMENT_ID"
  | "INVALID_CATALOG"
  | "INVALID_FILTER_NAME"
  | "INVALID_FILTER_VALUES"
  | "INVALID_SORT_BY"
  | "INVALID_SORT_ORDER"
  | "INVALID_NEXT_TOKEN"
  | "INVALID_MAX_RESULTS"
  | "UNSUPPORTED_FILTERS"
  | "OTHER";
export interface ValidityTerm {
  type?: string;
  agreementDuration?: string;
  agreementStartDate?: Date | string;
  agreementEndDate?: Date | string;
}
export type ZeroValueInteger = number;

export declare namespace DescribeAgreement {
  export type Input = DescribeAgreementInput;
  export type Output = DescribeAgreementOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAgreementTerms {
  export type Input = GetAgreementTermsInput;
  export type Output = GetAgreementTermsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchAgreements {
  export type Input = SearchAgreementsInput;
  export type Output = SearchAgreementsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

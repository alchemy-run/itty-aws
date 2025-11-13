import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class Invoicing extends AWSServiceClient {
  batchGetInvoiceProfile(
    input: BatchGetInvoiceProfileRequest,
  ): Effect.Effect<
    BatchGetInvoiceProfileResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createInvoiceUnit(
    input: CreateInvoiceUnitRequest,
  ): Effect.Effect<
    CreateInvoiceUnitResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteInvoiceUnit(
    input: DeleteInvoiceUnitRequest,
  ): Effect.Effect<
    DeleteInvoiceUnitResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getInvoiceUnit(
    input: GetInvoiceUnitRequest,
  ): Effect.Effect<
    GetInvoiceUnitResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listInvoiceSummaries(
    input: ListInvoiceSummariesRequest,
  ): Effect.Effect<
    ListInvoiceSummariesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listInvoiceUnits(
    input: ListInvoiceUnitsRequest,
  ): Effect.Effect<
    ListInvoiceUnitsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateInvoiceUnit(
    input: UpdateInvoiceUnitRequest,
  ): Effect.Effect<
    UpdateInvoiceUnitResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export type AccountIdList = Array<string>;
export type AccountIdString = string;

export interface AmountBreakdown {
  SubTotalAmount?: string;
  Discounts?: DiscountsBreakdown;
  Taxes?: TaxesBreakdown;
  Fees?: FeesBreakdown;
}
export type AsOfTimestamp = Date | string;

export type BasicString = string;

export type BasicStringWithoutSpace = string;

export interface BatchGetInvoiceProfileRequest {
  AccountIds: Array<string>;
}
export interface BatchGetInvoiceProfileResponse {
  Profiles?: Array<InvoiceProfile>;
}
export interface BillingPeriod {
  Month: number;
  Year: number;
}
export interface CreateInvoiceUnitRequest {
  Name: string;
  InvoiceReceiver: string;
  Description?: string;
  TaxInheritanceDisabled?: boolean;
  Rule: InvoiceUnitRule;
  ResourceTags?: Array<ResourceTag>;
}
export interface CreateInvoiceUnitResponse {
  InvoiceUnitArn?: string;
}
export type CurrencyCode = string;

export interface CurrencyExchangeDetails {
  SourceCurrencyCode?: string;
  TargetCurrencyCode?: string;
  Rate?: string;
}
export interface DateInterval {
  StartDate: Date | string;
  EndDate: Date | string;
}
export interface DeleteInvoiceUnitRequest {
  InvoiceUnitArn: string;
}
export interface DeleteInvoiceUnitResponse {
  InvoiceUnitArn?: string;
}
export type DescriptionString = string;

export interface DiscountsBreakdown {
  Breakdown?: Array<DiscountsBreakdownAmount>;
  TotalAmount?: string;
}
export interface DiscountsBreakdownAmount {
  Description?: string;
  Amount?: string;
  Rate?: string;
}
export type DiscountsBreakdownAmountList = Array<DiscountsBreakdownAmount>;
export interface Entity {
  InvoicingEntity?: string;
}
export interface FeesBreakdown {
  Breakdown?: Array<FeesBreakdownAmount>;
  TotalAmount?: string;
}
export interface FeesBreakdownAmount {
  Description?: string;
  Amount?: string;
  Rate?: string;
}
export type FeesBreakdownAmountList = Array<FeesBreakdownAmount>;
export interface Filters {
  Names?: Array<string>;
  InvoiceReceivers?: Array<string>;
  Accounts?: Array<string>;
}
export interface GetInvoiceUnitRequest {
  InvoiceUnitArn: string;
  AsOf?: Date | string;
}
export interface GetInvoiceUnitResponse {
  InvoiceUnitArn?: string;
  InvoiceReceiver?: string;
  Name?: string;
  Description?: string;
  TaxInheritanceDisabled?: boolean;
  Rule?: InvoiceUnitRule;
  LastModified?: Date | string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly retryAfterSeconds?: number;
  readonly message?: string;
}> {}
export interface InvoiceCurrencyAmount {
  TotalAmount?: string;
  TotalAmountBeforeTax?: string;
  CurrencyCode?: string;
  AmountBreakdown?: AmountBreakdown;
  CurrencyExchangeDetails?: CurrencyExchangeDetails;
}
export interface InvoiceProfile {
  AccountId?: string;
  ReceiverName?: string;
  ReceiverAddress?: ReceiverAddress;
  ReceiverEmail?: string;
  Issuer?: string;
  TaxRegistrationNumber?: string;
}
export type InvoiceSummaries = Array<InvoiceSummary>;
export interface InvoiceSummariesFilter {
  TimeInterval?: DateInterval;
  BillingPeriod?: BillingPeriod;
  InvoicingEntity?: string;
}
export type InvoiceSummariesMaxResults = number;

export interface InvoiceSummariesSelector {
  ResourceType: ListInvoiceSummariesResourceType;
  Value: string;
}
export interface InvoiceSummary {
  AccountId?: string;
  InvoiceId?: string;
  IssuedDate?: Date | string;
  DueDate?: Date | string;
  Entity?: Entity;
  BillingPeriod?: BillingPeriod;
  InvoiceType?: InvoiceType;
  OriginalInvoiceId?: string;
  PurchaseOrderNumber?: string;
  BaseCurrencyAmount?: InvoiceCurrencyAmount;
  TaxCurrencyAmount?: InvoiceCurrencyAmount;
  PaymentCurrencyAmount?: InvoiceCurrencyAmount;
}
export type InvoiceType = "INVOICE" | "CREDIT_MEMO";
export interface InvoiceUnit {
  InvoiceUnitArn?: string;
  InvoiceReceiver?: string;
  Name?: string;
  Description?: string;
  TaxInheritanceDisabled?: boolean;
  Rule?: InvoiceUnitRule;
  LastModified?: Date | string;
}
export type InvoiceUnitArnString = string;

export type InvoiceUnitName = string;

export type InvoiceUnitNames = Array<string>;
export interface InvoiceUnitRule {
  LinkedAccounts?: Array<string>;
}
export type InvoiceUnits = Array<InvoiceUnit>;
export type LastModifiedTimestamp = Date | string;

export interface ListInvoiceSummariesRequest {
  Selector: InvoiceSummariesSelector;
  Filter?: InvoiceSummariesFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type ListInvoiceSummariesResourceType = "ACCOUNT_ID" | "INVOICE_ID";
export interface ListInvoiceSummariesResponse {
  InvoiceSummaries: Array<InvoiceSummary>;
  NextToken?: string;
}
export interface ListInvoiceUnitsRequest {
  Filters?: Filters;
  NextToken?: string;
  MaxResults?: number;
  AsOf?: Date | string;
}
export interface ListInvoiceUnitsResponse {
  InvoiceUnits?: Array<InvoiceUnit>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  ResourceTags?: Array<ResourceTag>;
}
export type MaxResultsInteger = number;

export type Month = number;

export type NextTokenString = string;

export type ProfileList = Array<InvoiceProfile>;
export interface ReceiverAddress {
  AddressLine1?: string;
  AddressLine2?: string;
  AddressLine3?: string;
  DistrictOrCounty?: string;
  City?: string;
  StateOrRegion?: string;
  CountryCode?: string;
  CompanyName?: string;
  PostalCode?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export interface ResourceTag {
  Key: string;
  Value: string;
}
export type ResourceTagKey = string;

export type ResourceTagKeyList = Array<string>;
export type ResourceTagList = Array<ResourceTag>;
export type ResourceTagValue = string;

export type SensitiveBasicStringWithoutSpace = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type StringWithoutNewLine = string;

export interface TagResourceRequest {
  ResourceArn: string;
  ResourceTags: Array<ResourceTag>;
}
export interface TagResourceResponse {
}
export type TagrisArn = string;

export interface TaxesBreakdown {
  Breakdown?: Array<TaxesBreakdownAmount>;
  TotalAmount?: string;
}
export interface TaxesBreakdownAmount {
  Description?: string;
  Amount?: string;
  Rate?: string;
}
export type TaxesBreakdownAmountList = Array<TaxesBreakdownAmount>;
export type TaxInheritanceDisabledFlag = boolean;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  ResourceTagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateInvoiceUnitRequest {
  InvoiceUnitArn: string;
  Description?: string;
  TaxInheritanceDisabled?: boolean;
  Rule?: InvoiceUnitRule;
}
export interface UpdateInvoiceUnitResponse {
  InvoiceUnitArn?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
  readonly reason?: ValidationExceptionReason;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = "nonMemberPresent" | "maxAccountsExceeded" | "maxInvoiceUnitsExceeded" | "duplicateInvoiceUnit" | "mutualExclusionError" | "accountMembershipError" | "taxSettingsError" | "expiredNextToken" | "invalidNextToken" | "invalidInput" | "fieldValidationFailed" | "cannotParse" | "unknownOperation" | "other";
export type Year = number;

export declare namespace BatchGetInvoiceProfile {
  export type Input = BatchGetInvoiceProfileRequest;
  export type Output = BatchGetInvoiceProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateInvoiceUnit {
  export type Input = CreateInvoiceUnitRequest;
  export type Output = CreateInvoiceUnitResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInvoiceUnit {
  export type Input = DeleteInvoiceUnitRequest;
  export type Output = DeleteInvoiceUnitResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInvoiceUnit {
  export type Input = GetInvoiceUnitRequest;
  export type Output = GetInvoiceUnitResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInvoiceSummaries {
  export type Input = ListInvoiceSummariesRequest;
  export type Output = ListInvoiceSummariesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInvoiceUnits {
  export type Input = ListInvoiceUnitsRequest;
  export type Output = ListInvoiceUnitsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateInvoiceUnit {
  export type Input = UpdateInvoiceUnitRequest;
  export type Output = UpdateInvoiceUnitResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type InvoicingErrors = AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError;


import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class Route53Domains extends AWSServiceClient {
  acceptDomainTransferFromAnotherAwsAccount(
    input: AcceptDomainTransferFromAnotherAwsAccountRequest,
  ): Effect.Effect<
    AcceptDomainTransferFromAnotherAwsAccountResponse,
    | DomainLimitExceeded
    | InvalidInput
    | OperationLimitExceeded
    | UnsupportedTLD
    | CommonAwsError
  >;
  associateDelegationSignerToDomain(
    input: AssociateDelegationSignerToDomainRequest,
  ): Effect.Effect<
    AssociateDelegationSignerToDomainResponse,
    | DnssecLimitExceeded
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError
  >;
  cancelDomainTransferToAnotherAwsAccount(
    input: CancelDomainTransferToAnotherAwsAccountRequest,
  ): Effect.Effect<
    CancelDomainTransferToAnotherAwsAccountResponse,
    InvalidInput | OperationLimitExceeded | UnsupportedTLD | CommonAwsError
  >;
  checkDomainAvailability(
    input: CheckDomainAvailabilityRequest,
  ): Effect.Effect<
    CheckDomainAvailabilityResponse,
    InvalidInput | UnsupportedTLD | CommonAwsError
  >;
  checkDomainTransferability(
    input: CheckDomainTransferabilityRequest,
  ): Effect.Effect<
    CheckDomainTransferabilityResponse,
    InvalidInput | UnsupportedTLD | CommonAwsError
  >;
  deleteDomain(
    input: DeleteDomainRequest,
  ): Effect.Effect<
    DeleteDomainResponse,
    | DuplicateRequest
    | InvalidInput
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError
  >;
  deleteTagsForDomain(
    input: DeleteTagsForDomainRequest,
  ): Effect.Effect<
    DeleteTagsForDomainResponse,
    InvalidInput | OperationLimitExceeded | UnsupportedTLD | CommonAwsError
  >;
  disableDomainAutoRenew(
    input: DisableDomainAutoRenewRequest,
  ): Effect.Effect<
    DisableDomainAutoRenewResponse,
    InvalidInput | UnsupportedTLD | CommonAwsError
  >;
  disableDomainTransferLock(
    input: DisableDomainTransferLockRequest,
  ): Effect.Effect<
    DisableDomainTransferLockResponse,
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError
  >;
  disassociateDelegationSignerFromDomain(
    input: DisassociateDelegationSignerFromDomainRequest,
  ): Effect.Effect<
    DisassociateDelegationSignerFromDomainResponse,
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError
  >;
  enableDomainAutoRenew(
    input: EnableDomainAutoRenewRequest,
  ): Effect.Effect<
    EnableDomainAutoRenewResponse,
    InvalidInput | TLDRulesViolation | UnsupportedTLD | CommonAwsError
  >;
  enableDomainTransferLock(
    input: EnableDomainTransferLockRequest,
  ): Effect.Effect<
    EnableDomainTransferLockResponse,
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError
  >;
  getContactReachabilityStatus(
    input: GetContactReachabilityStatusRequest,
  ): Effect.Effect<
    GetContactReachabilityStatusResponse,
    InvalidInput | OperationLimitExceeded | UnsupportedTLD | CommonAwsError
  >;
  getDomainDetail(
    input: GetDomainDetailRequest,
  ): Effect.Effect<
    GetDomainDetailResponse,
    InvalidInput | UnsupportedTLD | CommonAwsError
  >;
  getDomainSuggestions(
    input: GetDomainSuggestionsRequest,
  ): Effect.Effect<
    GetDomainSuggestionsResponse,
    InvalidInput | UnsupportedTLD | CommonAwsError
  >;
  getOperationDetail(
    input: GetOperationDetailRequest,
  ): Effect.Effect<GetOperationDetailResponse, InvalidInput | CommonAwsError>;
  listDomains(
    input: ListDomainsRequest,
  ): Effect.Effect<ListDomainsResponse, InvalidInput | CommonAwsError>;
  listOperations(
    input: ListOperationsRequest,
  ): Effect.Effect<ListOperationsResponse, InvalidInput | CommonAwsError>;
  listPrices(
    input: ListPricesRequest,
  ): Effect.Effect<
    ListPricesResponse,
    InvalidInput | UnsupportedTLD | CommonAwsError
  >;
  listTagsForDomain(
    input: ListTagsForDomainRequest,
  ): Effect.Effect<
    ListTagsForDomainResponse,
    InvalidInput | OperationLimitExceeded | UnsupportedTLD | CommonAwsError
  >;
  pushDomain(
    input: PushDomainRequest,
  ): Effect.Effect<
    {},
    InvalidInput | OperationLimitExceeded | UnsupportedTLD | CommonAwsError
  >;
  registerDomain(
    input: RegisterDomainRequest,
  ): Effect.Effect<
    RegisterDomainResponse,
    | DomainLimitExceeded
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError
  >;
  rejectDomainTransferFromAnotherAwsAccount(
    input: RejectDomainTransferFromAnotherAwsAccountRequest,
  ): Effect.Effect<
    RejectDomainTransferFromAnotherAwsAccountResponse,
    InvalidInput | OperationLimitExceeded | UnsupportedTLD | CommonAwsError
  >;
  renewDomain(
    input: RenewDomainRequest,
  ): Effect.Effect<
    RenewDomainResponse,
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError
  >;
  resendContactReachabilityEmail(
    input: ResendContactReachabilityEmailRequest,
  ): Effect.Effect<
    ResendContactReachabilityEmailResponse,
    InvalidInput | OperationLimitExceeded | UnsupportedTLD | CommonAwsError
  >;
  resendOperationAuthorization(
    input: ResendOperationAuthorizationRequest,
  ): Effect.Effect<{}, InvalidInput | CommonAwsError>;
  retrieveDomainAuthCode(
    input: RetrieveDomainAuthCodeRequest,
  ): Effect.Effect<
    RetrieveDomainAuthCodeResponse,
    InvalidInput | UnsupportedTLD | CommonAwsError
  >;
  transferDomain(
    input: TransferDomainRequest,
  ): Effect.Effect<
    TransferDomainResponse,
    | DomainLimitExceeded
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError
  >;
  transferDomainToAnotherAwsAccount(
    input: TransferDomainToAnotherAwsAccountRequest,
  ): Effect.Effect<
    TransferDomainToAnotherAwsAccountResponse,
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | UnsupportedTLD
    | CommonAwsError
  >;
  updateDomainContact(
    input: UpdateDomainContactRequest,
  ): Effect.Effect<
    UpdateDomainContactResponse,
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError
  >;
  updateDomainContactPrivacy(
    input: UpdateDomainContactPrivacyRequest,
  ): Effect.Effect<
    UpdateDomainContactPrivacyResponse,
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError
  >;
  updateDomainNameservers(
    input: UpdateDomainNameserversRequest,
  ): Effect.Effect<
    UpdateDomainNameserversResponse,
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError
  >;
  updateTagsForDomain(
    input: UpdateTagsForDomainRequest,
  ): Effect.Effect<
    UpdateTagsForDomainResponse,
    InvalidInput | OperationLimitExceeded | UnsupportedTLD | CommonAwsError
  >;
  viewBilling(
    input: ViewBillingRequest,
  ): Effect.Effect<ViewBillingResponse, InvalidInput | CommonAwsError>;
}

export interface AcceptDomainTransferFromAnotherAwsAccountRequest {
  DomainName: string;
  Password: string;
}
export interface AcceptDomainTransferFromAnotherAwsAccountResponse {
  OperationId?: string;
}
export type AccountId = string;

export type AddressLine = string;

export interface AssociateDelegationSignerToDomainRequest {
  DomainName: string;
  SigningAttributes: DnssecSigningAttributes;
}
export interface AssociateDelegationSignerToDomainResponse {
  OperationId?: string;
}
export interface BillingRecord {
  DomainName?: string;
  Operation?: OperationType;
  InvoiceId?: string;
  BillDate?: Date | string;
  Price?: number;
}
export type BillingRecords = Array<BillingRecord>;
export type Route53DomainsBoolean = boolean;

export interface CancelDomainTransferToAnotherAwsAccountRequest {
  DomainName: string;
}
export interface CancelDomainTransferToAnotherAwsAccountResponse {
  OperationId?: string;
}
export interface CheckDomainAvailabilityRequest {
  DomainName: string;
  IdnLangCode?: string;
}
export interface CheckDomainAvailabilityResponse {
  Availability?: DomainAvailability;
}
export interface CheckDomainTransferabilityRequest {
  DomainName: string;
  AuthCode?: string;
}
export interface CheckDomainTransferabilityResponse {
  Transferability?: DomainTransferability;
  Message?: string;
}
export type City = string;

export interface Consent {
  MaxPrice: number;
  Currency: string;
}
export interface ContactDetail {
  FirstName?: string;
  LastName?: string;
  ContactType?: ContactType;
  OrganizationName?: string;
  AddressLine1?: string;
  AddressLine2?: string;
  City?: string;
  State?: string;
  CountryCode?: CountryCode;
  ZipCode?: string;
  PhoneNumber?: string;
  Email?: string;
  Fax?: string;
  ExtraParams?: Array<ExtraParam>;
}
export type ContactName = string;

export type ContactNumber = string;

export type ContactType =
  | "PERSON"
  | "COMPANY"
  | "ASSOCIATION"
  | "PUBLIC_BODY"
  | "RESELLER";
export type CountryCode =
  | "AC"
  | "AD"
  | "AE"
  | "AF"
  | "AG"
  | "AI"
  | "AL"
  | "AM"
  | "AN"
  | "AO"
  | "AQ"
  | "AR"
  | "AS"
  | "AT"
  | "AU"
  | "AW"
  | "AX"
  | "AZ"
  | "BA"
  | "BB"
  | "BD"
  | "BE"
  | "BF"
  | "BG"
  | "BH"
  | "BI"
  | "BJ"
  | "BL"
  | "BM"
  | "BN"
  | "BO"
  | "BQ"
  | "BR"
  | "BS"
  | "BT"
  | "BV"
  | "BW"
  | "BY"
  | "BZ"
  | "CA"
  | "CC"
  | "CD"
  | "CF"
  | "CG"
  | "CH"
  | "CI"
  | "CK"
  | "CL"
  | "CM"
  | "CN"
  | "CO"
  | "CR"
  | "CU"
  | "CV"
  | "CW"
  | "CX"
  | "CY"
  | "CZ"
  | "DE"
  | "DJ"
  | "DK"
  | "DM"
  | "DO"
  | "DZ"
  | "EC"
  | "EE"
  | "EG"
  | "EH"
  | "ER"
  | "ES"
  | "ET"
  | "FI"
  | "FJ"
  | "FK"
  | "FM"
  | "FO"
  | "FR"
  | "GA"
  | "GB"
  | "GD"
  | "GE"
  | "GF"
  | "GG"
  | "GH"
  | "GI"
  | "GL"
  | "GM"
  | "GN"
  | "GP"
  | "GQ"
  | "GR"
  | "GS"
  | "GT"
  | "GU"
  | "GW"
  | "GY"
  | "HK"
  | "HM"
  | "HN"
  | "HR"
  | "HT"
  | "HU"
  | "ID"
  | "IE"
  | "IL"
  | "IM"
  | "IN"
  | "IO"
  | "IQ"
  | "IR"
  | "IS"
  | "IT"
  | "JE"
  | "JM"
  | "JO"
  | "JP"
  | "KE"
  | "KG"
  | "KH"
  | "KI"
  | "KM"
  | "KN"
  | "KP"
  | "KR"
  | "KW"
  | "KY"
  | "KZ"
  | "LA"
  | "LB"
  | "LC"
  | "LI"
  | "LK"
  | "LR"
  | "LS"
  | "LT"
  | "LU"
  | "LV"
  | "LY"
  | "MA"
  | "MC"
  | "MD"
  | "ME"
  | "MF"
  | "MG"
  | "MH"
  | "MK"
  | "ML"
  | "MM"
  | "MN"
  | "MO"
  | "MP"
  | "MQ"
  | "MR"
  | "MS"
  | "MT"
  | "MU"
  | "MV"
  | "MW"
  | "MX"
  | "MY"
  | "MZ"
  | "NA"
  | "NC"
  | "NE"
  | "NF"
  | "NG"
  | "NI"
  | "NL"
  | "NO"
  | "NP"
  | "NR"
  | "NU"
  | "NZ"
  | "OM"
  | "PA"
  | "PE"
  | "PF"
  | "PG"
  | "PH"
  | "PK"
  | "PL"
  | "PM"
  | "PN"
  | "PR"
  | "PS"
  | "PT"
  | "PW"
  | "PY"
  | "QA"
  | "RE"
  | "RO"
  | "RS"
  | "RU"
  | "RW"
  | "SA"
  | "SB"
  | "SC"
  | "SD"
  | "SE"
  | "SG"
  | "SH"
  | "SI"
  | "SJ"
  | "SK"
  | "SL"
  | "SM"
  | "SN"
  | "SO"
  | "SR"
  | "SS"
  | "ST"
  | "SV"
  | "SX"
  | "SY"
  | "SZ"
  | "TC"
  | "TD"
  | "TF"
  | "TG"
  | "TH"
  | "TJ"
  | "TK"
  | "TL"
  | "TM"
  | "TN"
  | "TO"
  | "TP"
  | "TR"
  | "TT"
  | "TV"
  | "TW"
  | "TZ"
  | "UA"
  | "UG"
  | "US"
  | "UY"
  | "UZ"
  | "VA"
  | "VC"
  | "VE"
  | "VG"
  | "VI"
  | "VN"
  | "VU"
  | "WF"
  | "WS"
  | "YE"
  | "YT"
  | "ZA"
  | "ZM"
  | "ZW";
export type Currency = string;

export type CurrentExpiryYear = number;

export interface DeleteDomainRequest {
  DomainName: string;
}
export interface DeleteDomainResponse {
  OperationId?: string;
}
export interface DeleteTagsForDomainRequest {
  DomainName: string;
  TagsToDelete: Array<string>;
}
export interface DeleteTagsForDomainResponse {}
export interface DisableDomainAutoRenewRequest {
  DomainName: string;
}
export interface DisableDomainAutoRenewResponse {}
export interface DisableDomainTransferLockRequest {
  DomainName: string;
}
export interface DisableDomainTransferLockResponse {
  OperationId?: string;
}
export interface DisassociateDelegationSignerFromDomainRequest {
  DomainName: string;
  Id: string;
}
export interface DisassociateDelegationSignerFromDomainResponse {
  OperationId?: string;
}
export type DNSSec = string;

export interface DnssecKey {
  Algorithm?: number;
  Flags?: number;
  PublicKey?: string;
  DigestType?: number;
  Digest?: string;
  KeyTag?: number;
  Id?: string;
}
export type DnssecKeyList = Array<DnssecKey>;
export declare class DnssecLimitExceeded extends EffectData.TaggedError(
  "DnssecLimitExceeded",
)<{
  readonly message?: string;
}> {}
export type DnssecPublicKey = string;

export interface DnssecSigningAttributes {
  Algorithm?: number;
  Flags?: number;
  PublicKey?: string;
}
export type DomainAuthCode = string;

export type DomainAvailability =
  | "AVAILABLE"
  | "AVAILABLE_RESERVED"
  | "AVAILABLE_PREORDER"
  | "UNAVAILABLE"
  | "UNAVAILABLE_PREMIUM"
  | "UNAVAILABLE_RESTRICTED"
  | "RESERVED"
  | "DONT_KNOW"
  | "INVALID_NAME_FOR_TLD"
  | "PENDING";
export declare class DomainLimitExceeded extends EffectData.TaggedError(
  "DomainLimitExceeded",
)<{
  readonly message?: string;
}> {}
export type DomainName = string;

export interface DomainPrice {
  Name?: string;
  RegistrationPrice?: PriceWithCurrency;
  TransferPrice?: PriceWithCurrency;
  RenewalPrice?: PriceWithCurrency;
  ChangeOwnershipPrice?: PriceWithCurrency;
  RestorationPrice?: PriceWithCurrency;
}
export type DomainPriceList = Array<DomainPrice>;
export type DomainPriceName = string;

export type DomainStatus = string;

export type DomainStatusList = Array<string>;
export interface DomainSuggestion {
  DomainName?: string;
  Availability?: string;
}
export type DomainSuggestionsList = Array<DomainSuggestion>;
export interface DomainSummary {
  DomainName?: string;
  AutoRenew?: boolean;
  TransferLock?: boolean;
  Expiry?: Date | string;
}
export type DomainSummaryList = Array<DomainSummary>;
export interface DomainTransferability {
  Transferable?: Transferable;
}
export declare class DuplicateRequest extends EffectData.TaggedError(
  "DuplicateRequest",
)<{
  readonly requestId?: string;
  readonly message?: string;
}> {}
export type DurationInYears = number;

export type Email = string;

export interface EnableDomainAutoRenewRequest {
  DomainName: string;
}
export interface EnableDomainAutoRenewResponse {}
export interface EnableDomainTransferLockRequest {
  DomainName: string;
}
export interface EnableDomainTransferLockResponse {
  OperationId?: string;
}
export type ErrorMessage = string;

export interface ExtraParam {
  Name: ExtraParamName;
  Value: string;
}
export type ExtraParamList = Array<ExtraParam>;
export type ExtraParamName =
  | "DUNS_NUMBER"
  | "BRAND_NUMBER"
  | "BIRTH_DEPARTMENT"
  | "BIRTH_DATE_IN_YYYY_MM_DD"
  | "BIRTH_COUNTRY"
  | "BIRTH_CITY"
  | "DOCUMENT_NUMBER"
  | "AU_ID_NUMBER"
  | "AU_ID_TYPE"
  | "CA_LEGAL_TYPE"
  | "CA_BUSINESS_ENTITY_TYPE"
  | "CA_LEGAL_REPRESENTATIVE"
  | "CA_LEGAL_REPRESENTATIVE_CAPACITY"
  | "ES_IDENTIFICATION"
  | "ES_IDENTIFICATION_TYPE"
  | "ES_LEGAL_FORM"
  | "FI_BUSINESS_NUMBER"
  | "ONWER_FI_ID_NUMBER"
  | "FI_NATIONALITY"
  | "FI_ORGANIZATION_TYPE"
  | "IT_NATIONALITY"
  | "IT_PIN"
  | "IT_REGISTRANT_ENTITY_TYPE"
  | "RU_PASSPORT_DATA"
  | "SE_ID_NUMBER"
  | "SG_ID_NUMBER"
  | "VAT_NUMBER"
  | "UK_CONTACT_TYPE"
  | "UK_COMPANY_NUMBER"
  | "EU_COUNTRY_OF_CITIZENSHIP"
  | "AU_PRIORITY_TOKEN";
export type ExtraParamValue = string;

export type FIAuthKey = string;

export interface FilterCondition {
  Name: ListDomainsAttributeName;
  Operator: Operator;
  Values: Array<string>;
}
export type FilterConditions = Array<FilterCondition>;
export interface GetContactReachabilityStatusRequest {
  domainName?: string;
}
export interface GetContactReachabilityStatusResponse {
  domainName?: string;
  status?: ReachabilityStatus;
}
export interface GetDomainDetailRequest {
  DomainName: string;
}
export interface GetDomainDetailResponse {
  DomainName?: string;
  Nameservers?: Array<Nameserver>;
  AutoRenew?: boolean;
  AdminContact?: ContactDetail;
  RegistrantContact?: ContactDetail;
  TechContact?: ContactDetail;
  AdminPrivacy?: boolean;
  RegistrantPrivacy?: boolean;
  TechPrivacy?: boolean;
  RegistrarName?: string;
  WhoIsServer?: string;
  RegistrarUrl?: string;
  AbuseContactEmail?: string;
  AbuseContactPhone?: string;
  RegistryDomainId?: string;
  CreationDate?: Date | string;
  UpdatedDate?: Date | string;
  ExpirationDate?: Date | string;
  Reseller?: string;
  DnsSec?: string;
  StatusList?: Array<string>;
  DnssecKeys?: Array<DnssecKey>;
  BillingContact?: ContactDetail;
  BillingPrivacy?: boolean;
}
export interface GetDomainSuggestionsRequest {
  DomainName: string;
  SuggestionCount: number;
  OnlyAvailable: boolean;
}
export interface GetDomainSuggestionsResponse {
  SuggestionsList?: Array<DomainSuggestion>;
}
export interface GetOperationDetailRequest {
  OperationId: string;
}
export interface GetOperationDetailResponse {
  OperationId?: string;
  Status?: OperationStatus;
  Message?: string;
  DomainName?: string;
  Type?: OperationType;
  SubmittedDate?: Date | string;
  LastUpdatedDate?: Date | string;
  StatusFlag?: StatusFlag;
}
export type GlueIp = string;

export type GlueIpList = Array<string>;
export type HostName = string;

export type Integer = number;

export declare class InvalidInput extends EffectData.TaggedError(
  "InvalidInput",
)<{
  readonly message?: string;
}> {}
export type InvoiceId = string;

export type Label = string;

export type LangCode = string;

export type ListDomainsAttributeName = "DomainName" | "Expiry";
export interface ListDomainsRequest {
  FilterConditions?: Array<FilterCondition>;
  SortCondition?: SortCondition;
  Marker?: string;
  MaxItems?: number;
}
export interface ListDomainsResponse {
  Domains?: Array<DomainSummary>;
  NextPageMarker?: string;
}
export interface ListOperationsRequest {
  SubmittedSince?: Date | string;
  Marker?: string;
  MaxItems?: number;
  Status?: Array<OperationStatus>;
  Type?: Array<OperationType>;
  SortBy?: ListOperationsSortAttributeName;
  SortOrder?: SortOrder;
}
export interface ListOperationsResponse {
  Operations?: Array<OperationSummary>;
  NextPageMarker?: string;
}
export type ListOperationsSortAttributeName = "SubmittedDate";
export type ListPricesPageMaxItems = number;

export interface ListPricesRequest {
  Tld?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListPricesResponse {
  Prices?: Array<DomainPrice>;
  NextPageMarker?: string;
}
export interface ListTagsForDomainRequest {
  DomainName: string;
}
export interface ListTagsForDomainResponse {
  TagList?: Array<Tag>;
}
export type Message = string;

export interface Nameserver {
  Name: string;
  GlueIps?: Array<string>;
}
export type NameserverList = Array<Nameserver>;
export type NullableInteger = number;

export type OperationId = string;

export declare class OperationLimitExceeded extends EffectData.TaggedError(
  "OperationLimitExceeded",
)<{
  readonly message?: string;
}> {}
export type OperationStatus =
  | "SUBMITTED"
  | "IN_PROGRESS"
  | "ERROR"
  | "SUCCESSFUL"
  | "FAILED";
export type OperationStatusList = Array<OperationStatus>;
export interface OperationSummary {
  OperationId?: string;
  Status?: OperationStatus;
  Type?: OperationType;
  SubmittedDate?: Date | string;
  DomainName?: string;
  Message?: string;
  StatusFlag?: StatusFlag;
  LastUpdatedDate?: Date | string;
}
export type OperationSummaryList = Array<OperationSummary>;
export type OperationType =
  | "REGISTER_DOMAIN"
  | "DELETE_DOMAIN"
  | "TRANSFER_IN_DOMAIN"
  | "UPDATE_DOMAIN_CONTACT"
  | "UPDATE_NAMESERVER"
  | "CHANGE_PRIVACY_PROTECTION"
  | "DOMAIN_LOCK"
  | "ENABLE_AUTORENEW"
  | "DISABLE_AUTORENEW"
  | "ADD_DNSSEC"
  | "REMOVE_DNSSEC"
  | "EXPIRE_DOMAIN"
  | "TRANSFER_OUT_DOMAIN"
  | "CHANGE_DOMAIN_OWNER"
  | "RENEW_DOMAIN"
  | "PUSH_DOMAIN"
  | "INTERNAL_TRANSFER_OUT_DOMAIN"
  | "INTERNAL_TRANSFER_IN_DOMAIN"
  | "RELEASE_TO_GANDI"
  | "TRANSFER_ON_RENEW"
  | "RESTORE_DOMAIN";
export type OperationTypeList = Array<OperationType>;
export type Operator = "LE" | "GE" | "BEGINS_WITH";
export type PageMarker = string;

export type PageMaxItems = number;

export type Password = string;

export type Price = number;

export interface PriceWithCurrency {
  Price: number;
  Currency: string;
}
export interface PushDomainRequest {
  DomainName: string;
  Target: string;
}
export type ReachabilityStatus = "PENDING" | "DONE" | "EXPIRED";
export interface RegisterDomainRequest {
  DomainName: string;
  IdnLangCode?: string;
  DurationInYears: number;
  AutoRenew?: boolean;
  AdminContact: ContactDetail;
  RegistrantContact: ContactDetail;
  TechContact: ContactDetail;
  PrivacyProtectAdminContact?: boolean;
  PrivacyProtectRegistrantContact?: boolean;
  PrivacyProtectTechContact?: boolean;
  BillingContact?: ContactDetail;
  PrivacyProtectBillingContact?: boolean;
}
export interface RegisterDomainResponse {
  OperationId?: string;
}
export type RegistrarName = string;

export type RegistrarUrl = string;

export type RegistrarWhoIsServer = string;

export type RegistryDomainId = string;

export interface RejectDomainTransferFromAnotherAwsAccountRequest {
  DomainName: string;
}
export interface RejectDomainTransferFromAnotherAwsAccountResponse {
  OperationId?: string;
}
export interface RenewDomainRequest {
  DomainName: string;
  DurationInYears?: number;
  CurrentExpiryYear: number;
}
export interface RenewDomainResponse {
  OperationId?: string;
}
export type RequestId = string;

export type Reseller = string;

export interface ResendContactReachabilityEmailRequest {
  domainName?: string;
}
export interface ResendContactReachabilityEmailResponse {
  domainName?: string;
  emailAddress?: string;
  isAlreadyVerified?: boolean;
}
export interface ResendOperationAuthorizationRequest {
  OperationId: string;
}
export interface RetrieveDomainAuthCodeRequest {
  DomainName: string;
}
export interface RetrieveDomainAuthCodeResponse {
  AuthCode?: string;
}
export interface SortCondition {
  Name: ListDomainsAttributeName;
  SortOrder: SortOrder;
}
export type SortOrder = "ASC" | "DESC";
export type State = string;

export type StatusFlag =
  | "PENDING_ACCEPTANCE"
  | "PENDING_CUSTOMER_ACTION"
  | "PENDING_AUTHORIZATION"
  | "PENDING_PAYMENT_VERIFICATION"
  | "PENDING_SUPPORT_CASE";
export type Route53DomainsString = string;

export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export type TagValue = string;

export type Timestamp = Date | string;

export type TldName = string;

export declare class TLDRulesViolation extends EffectData.TaggedError(
  "TLDRulesViolation",
)<{
  readonly message?: string;
}> {}
export type Transferable =
  | "TRANSFERABLE"
  | "UNTRANSFERABLE"
  | "DONT_KNOW"
  | "DOMAIN_IN_OWN_ACCOUNT"
  | "DOMAIN_IN_ANOTHER_ACCOUNT"
  | "PREMIUM_DOMAIN";
export interface TransferDomainRequest {
  DomainName: string;
  IdnLangCode?: string;
  DurationInYears: number;
  Nameservers?: Array<Nameserver>;
  AuthCode?: string;
  AutoRenew?: boolean;
  AdminContact: ContactDetail;
  RegistrantContact: ContactDetail;
  TechContact: ContactDetail;
  PrivacyProtectAdminContact?: boolean;
  PrivacyProtectRegistrantContact?: boolean;
  PrivacyProtectTechContact?: boolean;
  BillingContact?: ContactDetail;
  PrivacyProtectBillingContact?: boolean;
}
export interface TransferDomainResponse {
  OperationId?: string;
}
export interface TransferDomainToAnotherAwsAccountRequest {
  DomainName: string;
  AccountId: string;
}
export interface TransferDomainToAnotherAwsAccountResponse {
  OperationId?: string;
  Password?: string;
}
export declare class UnsupportedTLD extends EffectData.TaggedError(
  "UnsupportedTLD",
)<{
  readonly message?: string;
}> {}
export interface UpdateDomainContactPrivacyRequest {
  DomainName: string;
  AdminPrivacy?: boolean;
  RegistrantPrivacy?: boolean;
  TechPrivacy?: boolean;
  BillingPrivacy?: boolean;
}
export interface UpdateDomainContactPrivacyResponse {
  OperationId?: string;
}
export interface UpdateDomainContactRequest {
  DomainName: string;
  AdminContact?: ContactDetail;
  RegistrantContact?: ContactDetail;
  TechContact?: ContactDetail;
  Consent?: Consent;
  BillingContact?: ContactDetail;
}
export interface UpdateDomainContactResponse {
  OperationId?: string;
}
export interface UpdateDomainNameserversRequest {
  DomainName: string;
  FIAuthKey?: string;
  Nameservers: Array<Nameserver>;
}
export interface UpdateDomainNameserversResponse {
  OperationId?: string;
}
export interface UpdateTagsForDomainRequest {
  DomainName: string;
  TagsToUpdate?: Array<Tag>;
}
export interface UpdateTagsForDomainResponse {}
export type Value = string;

export type Values = Array<string>;
export interface ViewBillingRequest {
  Start?: Date | string;
  End?: Date | string;
  Marker?: string;
  MaxItems?: number;
}
export interface ViewBillingResponse {
  NextPageMarker?: string;
  BillingRecords?: Array<BillingRecord>;
}
export type ZipCode = string;

export declare namespace AcceptDomainTransferFromAnotherAwsAccount {
  export type Input = AcceptDomainTransferFromAnotherAwsAccountRequest;
  export type Output = AcceptDomainTransferFromAnotherAwsAccountResponse;
  export type Error =
    | DomainLimitExceeded
    | InvalidInput
    | OperationLimitExceeded
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace AssociateDelegationSignerToDomain {
  export type Input = AssociateDelegationSignerToDomainRequest;
  export type Output = AssociateDelegationSignerToDomainResponse;
  export type Error =
    | DnssecLimitExceeded
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace CancelDomainTransferToAnotherAwsAccount {
  export type Input = CancelDomainTransferToAnotherAwsAccountRequest;
  export type Output = CancelDomainTransferToAnotherAwsAccountResponse;
  export type Error =
    | InvalidInput
    | OperationLimitExceeded
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace CheckDomainAvailability {
  export type Input = CheckDomainAvailabilityRequest;
  export type Output = CheckDomainAvailabilityResponse;
  export type Error = InvalidInput | UnsupportedTLD | CommonAwsError;
}

export declare namespace CheckDomainTransferability {
  export type Input = CheckDomainTransferabilityRequest;
  export type Output = CheckDomainTransferabilityResponse;
  export type Error = InvalidInput | UnsupportedTLD | CommonAwsError;
}

export declare namespace DeleteDomain {
  export type Input = DeleteDomainRequest;
  export type Output = DeleteDomainResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace DeleteTagsForDomain {
  export type Input = DeleteTagsForDomainRequest;
  export type Output = DeleteTagsForDomainResponse;
  export type Error =
    | InvalidInput
    | OperationLimitExceeded
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace DisableDomainAutoRenew {
  export type Input = DisableDomainAutoRenewRequest;
  export type Output = DisableDomainAutoRenewResponse;
  export type Error = InvalidInput | UnsupportedTLD | CommonAwsError;
}

export declare namespace DisableDomainTransferLock {
  export type Input = DisableDomainTransferLockRequest;
  export type Output = DisableDomainTransferLockResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace DisassociateDelegationSignerFromDomain {
  export type Input = DisassociateDelegationSignerFromDomainRequest;
  export type Output = DisassociateDelegationSignerFromDomainResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace EnableDomainAutoRenew {
  export type Input = EnableDomainAutoRenewRequest;
  export type Output = EnableDomainAutoRenewResponse;
  export type Error =
    | InvalidInput
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace EnableDomainTransferLock {
  export type Input = EnableDomainTransferLockRequest;
  export type Output = EnableDomainTransferLockResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace GetContactReachabilityStatus {
  export type Input = GetContactReachabilityStatusRequest;
  export type Output = GetContactReachabilityStatusResponse;
  export type Error =
    | InvalidInput
    | OperationLimitExceeded
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace GetDomainDetail {
  export type Input = GetDomainDetailRequest;
  export type Output = GetDomainDetailResponse;
  export type Error = InvalidInput | UnsupportedTLD | CommonAwsError;
}

export declare namespace GetDomainSuggestions {
  export type Input = GetDomainSuggestionsRequest;
  export type Output = GetDomainSuggestionsResponse;
  export type Error = InvalidInput | UnsupportedTLD | CommonAwsError;
}

export declare namespace GetOperationDetail {
  export type Input = GetOperationDetailRequest;
  export type Output = GetOperationDetailResponse;
  export type Error = InvalidInput | CommonAwsError;
}

export declare namespace ListDomains {
  export type Input = ListDomainsRequest;
  export type Output = ListDomainsResponse;
  export type Error = InvalidInput | CommonAwsError;
}

export declare namespace ListOperations {
  export type Input = ListOperationsRequest;
  export type Output = ListOperationsResponse;
  export type Error = InvalidInput | CommonAwsError;
}

export declare namespace ListPrices {
  export type Input = ListPricesRequest;
  export type Output = ListPricesResponse;
  export type Error = InvalidInput | UnsupportedTLD | CommonAwsError;
}

export declare namespace ListTagsForDomain {
  export type Input = ListTagsForDomainRequest;
  export type Output = ListTagsForDomainResponse;
  export type Error =
    | InvalidInput
    | OperationLimitExceeded
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace PushDomain {
  export type Input = PushDomainRequest;
  export type Output = {};
  export type Error =
    | InvalidInput
    | OperationLimitExceeded
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace RegisterDomain {
  export type Input = RegisterDomainRequest;
  export type Output = RegisterDomainResponse;
  export type Error =
    | DomainLimitExceeded
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace RejectDomainTransferFromAnotherAwsAccount {
  export type Input = RejectDomainTransferFromAnotherAwsAccountRequest;
  export type Output = RejectDomainTransferFromAnotherAwsAccountResponse;
  export type Error =
    | InvalidInput
    | OperationLimitExceeded
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace RenewDomain {
  export type Input = RenewDomainRequest;
  export type Output = RenewDomainResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace ResendContactReachabilityEmail {
  export type Input = ResendContactReachabilityEmailRequest;
  export type Output = ResendContactReachabilityEmailResponse;
  export type Error =
    | InvalidInput
    | OperationLimitExceeded
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace ResendOperationAuthorization {
  export type Input = ResendOperationAuthorizationRequest;
  export type Output = {};
  export type Error = InvalidInput | CommonAwsError;
}

export declare namespace RetrieveDomainAuthCode {
  export type Input = RetrieveDomainAuthCodeRequest;
  export type Output = RetrieveDomainAuthCodeResponse;
  export type Error = InvalidInput | UnsupportedTLD | CommonAwsError;
}

export declare namespace TransferDomain {
  export type Input = TransferDomainRequest;
  export type Output = TransferDomainResponse;
  export type Error =
    | DomainLimitExceeded
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace TransferDomainToAnotherAwsAccount {
  export type Input = TransferDomainToAnotherAwsAccountRequest;
  export type Output = TransferDomainToAnotherAwsAccountResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace UpdateDomainContact {
  export type Input = UpdateDomainContactRequest;
  export type Output = UpdateDomainContactResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace UpdateDomainContactPrivacy {
  export type Input = UpdateDomainContactPrivacyRequest;
  export type Output = UpdateDomainContactPrivacyResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace UpdateDomainNameservers {
  export type Input = UpdateDomainNameserversRequest;
  export type Output = UpdateDomainNameserversResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | OperationLimitExceeded
    | TLDRulesViolation
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace UpdateTagsForDomain {
  export type Input = UpdateTagsForDomainRequest;
  export type Output = UpdateTagsForDomainResponse;
  export type Error =
    | InvalidInput
    | OperationLimitExceeded
    | UnsupportedTLD
    | CommonAwsError;
}

export declare namespace ViewBilling {
  export type Input = ViewBillingRequest;
  export type Output = ViewBillingResponse;
  export type Error = InvalidInput | CommonAwsError;
}

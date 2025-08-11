import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class PartnerCentralSelling extends AWSServiceClient {
  getSellingSystemSettings(
    input: GetSellingSystemSettingsRequest,
  ): Effect.Effect<
    GetSellingSystemSettingsResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putSellingSystemSettings(
    input: PutSellingSystemSettingsRequest,
  ): Effect.Effect<
    PutSellingSystemSettingsResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class PartnercentralSelling extends PartnerCentralSelling {}

export interface AcceptEngagementInvitationRequest {
  Catalog: string;
  Identifier: string;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface Account {
  Industry?: Industry;
  OtherIndustry?: string;
  CompanyName: string;
  WebsiteUrl?: string;
  AwsAccountId?: string;
  Address?: Address;
  Duns?: string;
}
export interface AccountReceiver {
  Alias?: string;
  AwsAccountId: string;
}
export interface AccountSummary {
  Industry?: Industry;
  OtherIndustry?: string;
  CompanyName: string;
  WebsiteUrl?: string;
  Address?: AddressSummary;
}
export interface Address {
  City?: string;
  PostalCode?: string;
  StateOrRegion?: string;
  CountryCode?: CountryCode;
  StreetAddress?: string;
}
export type AddressPart = string;

export interface AddressSummary {
  City?: string;
  PostalCode?: string;
  StateOrRegion?: string;
  CountryCode?: CountryCode;
}
export type Alias = string;

export type ApnPrograms = Array<string>;
export interface AssigneeContact {
  Email: string;
  FirstName: string;
  LastName: string;
  BusinessTitle: string;
}
export interface AssignOpportunityRequest {
  Catalog: string;
  Identifier: string;
  Assignee: AssigneeContact;
}
export interface AssociateOpportunityRequest {
  Catalog: string;
  OpportunityIdentifier: string;
  RelatedEntityType: RelatedEntityType;
  RelatedEntityIdentifier: string;
}
export type AwsAccount = string;

export type AwsAccountIdOrAliasList = Array<string>;
export type AwsAccountList = Array<string>;
export type AwsClosedLostReason =
  | "ADMINISTRATIVE"
  | "BUSINESS_ASSOCIATE_AGREEMENT"
  | "COMPANY_ACQUIRED_DISSOLVED"
  | "COMPETITIVE_OFFERING"
  | "CUSTOMER_DATA_REQUIREMENT"
  | "CUSTOMER_DEFICIENCY"
  | "CUSTOMER_EXPERIENCE"
  | "DELAY_CANCELLATION_OF_PROJECT"
  | "DUPLICATE"
  | "DUPLICATE_OPPORTUNITY"
  | "EXECUTIVE_BLOCKER"
  | "FAILED_VETTING"
  | "FEATURE_LIMITATION"
  | "FINANCIAL_COMMERCIAL"
  | "INSUFFICIENT_AMAZON_VALUE"
  | "INSUFFICIENT_AWS_VALUE"
  | "INTERNATIONAL_CONSTRAINTS"
  | "LEGAL_TAX_REGULATORY"
  | "LEGAL_TERMS_AND_CONDITIONS"
  | "LOST_TO_COMPETITOR"
  | "LOST_TO_COMPETITOR_GOOGLE"
  | "LOST_TO_COMPETITOR_MICROSOFT"
  | "LOST_TO_COMPETITOR_OTHER"
  | "LOST_TO_COMPETITOR_RACKSPACE"
  | "LOST_TO_COMPETITOR_SOFTLAYER"
  | "LOST_TO_COMPETITOR_VMWARE"
  | "NO_CUSTOMER_REFERENCE"
  | "NO_INTEGRATION_RESOURCES"
  | "NO_OPPORTUNITY"
  | "NO_PERCEIVED_VALUE_OF_MP"
  | "NO_RESPONSE"
  | "NOT_COMMITTED_TO_AWS"
  | "NO_UPDATE"
  | "ON_PREMISES_DEPLOYMENT"
  | "OTHER"
  | "OTHER_DETAILS_IN_DESCRIPTION"
  | "PARTNER_GAP"
  | "PAST_DUE"
  | "PEOPLE_RELATIONSHIP_GOVERNANCE"
  | "PLATFORM_TECHNOLOGY_LIMITATION"
  | "PREFERENCE_FOR_COMPETITOR"
  | "PRICE"
  | "PRODUCT_TECHNOLOGY"
  | "PRODUCT_NOT_ON_AWS"
  | "SECURITY_COMPLIANCE"
  | "SELF_SERVICE"
  | "TECHNICAL_LIMITATIONS"
  | "TERM_SHEET_IMPASSE";
export type AwsFundingUsed = "YES" | "NO";
export type AwsMarketplaceOfferIdentifier = string;

export type AwsMarketplaceOfferIdentifiers = Array<string>;
export type AwsMemberBusinessTitle =
  | "AWS_SALES_REP"
  | "AWS_ACCOUNT_OWNER"
  | "WWPSPDM"
  | "PDM"
  | "PSM"
  | "ISVSM";
export interface AwsOpportunityCustomer {
  Contacts?: Array<Contact>;
}
export interface AwsOpportunityInsights {
  NextBestActions?: string;
  EngagementScore?: EngagementScore;
}
export interface AwsOpportunityLifeCycle {
  TargetCloseDate?: string;
  ClosedLostReason?: AwsClosedLostReason;
  Stage?: AwsOpportunityStage;
  NextSteps?: string;
  NextStepsHistory?: Array<ProfileNextStepsHistory>;
}
export interface AwsOpportunityProject {
  ExpectedCustomerSpend?: Array<ExpectedCustomerSpend>;
}
export interface AwsOpportunityRelatedEntities {
  AwsProducts?: Array<string>;
  Solutions?: Array<string>;
}
export type AwsOpportunityStage =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "PROSPECT"
  | "ENGAGED"
  | "IDENTIFIED"
  | "QUALIFY"
  | "RESEARCH"
  | "SELLER_ENGAGED"
  | "EVALUATING"
  | "SELLER_REGISTERED"
  | "TERM_SHEET_NEGOTIATION"
  | "CONTRACT_NEGOTIATION"
  | "ONBOARDING"
  | "BUILDING_INTEGRATION"
  | "QUALIFIED"
  | "ON_HOLD"
  | "TECHNICAL_VALIDATION"
  | "BUSINESS_VALIDATION"
  | "COMMITTED"
  | "LAUNCHED"
  | "DEFERRED_TO_PARTNER"
  | "CLOSED_LOST"
  | "COMPLETED"
  | "CLOSED_INCOMPLETE";
export type AwsOpportunityTeamMembersList = Array<AwsTeamMember>;
export type AwsProductIdentifier = string;

export type AwsProductIdentifiers = Array<string>;
export interface AwsSubmission {
  InvolvementType: SalesInvolvementType;
  Visibility?: Visibility;
}
export interface AwsTeamMember {
  Email?: string;
  FirstName?: string;
  LastName?: string;
  BusinessTitle?: AwsMemberBusinessTitle;
}
export type CatalogIdentifier = string;

export type Channel =
  | "AWS_MARKETING_CENTRAL"
  | "CONTENT_SYNDICATION"
  | "DISPLAY"
  | "EMAIL"
  | "LIVE_EVENT"
  | "OUT_OF_HOME"
  | "PRINT"
  | "SEARCH"
  | "SOCIAL"
  | "TELEMARKETING"
  | "TV"
  | "VIDEO"
  | "VIRTUAL_EVENT";
export type Channels = Array<Channel>;
export type ClientToken = string;

export type ClosedLostReason =
  | "CUSTOMER_DEFICIENCY"
  | "DELAY_CANCELLATION_OF_PROJECT"
  | "LEGAL_TAX_REGULATORY"
  | "LOST_TO_COMPETITOR_GOOGLE"
  | "LOST_TO_COMPETITOR_MICROSOFT"
  | "LOST_TO_COMPETITOR_SOFTLAYER"
  | "LOST_TO_COMPETITOR_VMWARE"
  | "LOST_TO_COMPETITOR_OTHER"
  | "NO_OPPORTUNITY"
  | "ON_PREMISES_DEPLOYMENT"
  | "PARTNER_GAP"
  | "PRICE"
  | "SECURITY_COMPLIANCE"
  | "TECHNICAL_LIMITATIONS"
  | "CUSTOMER_EXPERIENCE"
  | "OTHER"
  | "PEOPLERELATIONSHIPGOVERNANCE"
  | "PRODUCTTECHNOLOGY"
  | "FINANCIALCOMMERCIAL";
export type CompanyName = string;

export type CompanyWebsiteUrl = string;

export type CompetitorName =
  | "ORACLE_CLOUD"
  | "ON_PREM"
  | "CO_LOCATION"
  | "AKAMAI"
  | "ALICLOUD"
  | "GOOGLE_CLOUD_PLATFORM"
  | "IBM_SOFTLAYER"
  | "MICROSOFT_AZURE"
  | "OTHER_COST_OPTIMIZATION"
  | "NO_COMPETITION"
  | "OTHER";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface Contact {
  Email?: string;
  FirstName?: string;
  LastName?: string;
  BusinessTitle?: string;
  Phone?: string;
}
export type CountryCode =
  | "US"
  | "AF"
  | "AX"
  | "AL"
  | "DZ"
  | "AS"
  | "AD"
  | "AO"
  | "AI"
  | "AQ"
  | "AG"
  | "AR"
  | "AM"
  | "AW"
  | "AU"
  | "AT"
  | "AZ"
  | "BS"
  | "BH"
  | "BD"
  | "BB"
  | "BY"
  | "BE"
  | "BZ"
  | "BJ"
  | "BM"
  | "BT"
  | "BO"
  | "BQ"
  | "BA"
  | "BW"
  | "BV"
  | "BR"
  | "IO"
  | "BN"
  | "BG"
  | "BF"
  | "BI"
  | "KH"
  | "CM"
  | "CA"
  | "CV"
  | "KY"
  | "CF"
  | "TD"
  | "CL"
  | "CN"
  | "CX"
  | "CC"
  | "CO"
  | "KM"
  | "CG"
  | "CK"
  | "CR"
  | "CI"
  | "HR"
  | "CU"
  | "CW"
  | "CY"
  | "CZ"
  | "CD"
  | "DK"
  | "DJ"
  | "DM"
  | "DO"
  | "EC"
  | "EG"
  | "SV"
  | "GQ"
  | "ER"
  | "EE"
  | "ET"
  | "FK"
  | "FO"
  | "FJ"
  | "FI"
  | "FR"
  | "GF"
  | "PF"
  | "TF"
  | "GA"
  | "GM"
  | "GE"
  | "DE"
  | "GH"
  | "GI"
  | "GR"
  | "GL"
  | "GD"
  | "GP"
  | "GU"
  | "GT"
  | "GG"
  | "GN"
  | "GW"
  | "GY"
  | "HT"
  | "HM"
  | "VA"
  | "HN"
  | "HK"
  | "HU"
  | "IS"
  | "IN"
  | "ID"
  | "IR"
  | "IQ"
  | "IE"
  | "IM"
  | "IL"
  | "IT"
  | "JM"
  | "JP"
  | "JE"
  | "JO"
  | "KZ"
  | "KE"
  | "KI"
  | "KR"
  | "KW"
  | "KG"
  | "LA"
  | "LV"
  | "LB"
  | "LS"
  | "LR"
  | "LY"
  | "LI"
  | "LT"
  | "LU"
  | "MO"
  | "MK"
  | "MG"
  | "MW"
  | "MY"
  | "MV"
  | "ML"
  | "MT"
  | "MH"
  | "MQ"
  | "MR"
  | "MU"
  | "YT"
  | "MX"
  | "FM"
  | "MD"
  | "MC"
  | "MN"
  | "ME"
  | "MS"
  | "MA"
  | "MZ"
  | "MM"
  | "NA"
  | "NR"
  | "NP"
  | "NL"
  | "AN"
  | "NC"
  | "NZ"
  | "NI"
  | "NE"
  | "NG"
  | "NU"
  | "NF"
  | "MP"
  | "NO"
  | "OM"
  | "PK"
  | "PW"
  | "PS"
  | "PA"
  | "PG"
  | "PY"
  | "PE"
  | "PH"
  | "PN"
  | "PL"
  | "PT"
  | "PR"
  | "QA"
  | "RE"
  | "RO"
  | "RU"
  | "RW"
  | "BL"
  | "SH"
  | "KN"
  | "LC"
  | "MF"
  | "PM"
  | "VC"
  | "WS"
  | "SM"
  | "ST"
  | "SA"
  | "SN"
  | "RS"
  | "SC"
  | "SL"
  | "SG"
  | "SX"
  | "SK"
  | "SI"
  | "SB"
  | "SO"
  | "ZA"
  | "GS"
  | "SS"
  | "ES"
  | "LK"
  | "SD"
  | "SR"
  | "SJ"
  | "SZ"
  | "SE"
  | "CH"
  | "SY"
  | "TW"
  | "TJ"
  | "TZ"
  | "TH"
  | "TL"
  | "TG"
  | "TK"
  | "TO"
  | "TT"
  | "TN"
  | "TR"
  | "TM"
  | "TC"
  | "TV"
  | "UG"
  | "UA"
  | "AE"
  | "GB"
  | "UM"
  | "UY"
  | "UZ"
  | "VU"
  | "VE"
  | "VN"
  | "VG"
  | "VI"
  | "WF"
  | "EH"
  | "YE"
  | "ZM"
  | "ZW";
export interface CreateEngagementInvitationRequest {
  Catalog: string;
  ClientToken: string;
  EngagementIdentifier: string;
  Invitation: Invitation;
}
export interface CreateEngagementInvitationResponse {
  Id: string;
  Arn: string;
}
export interface CreateEngagementRequest {
  Catalog: string;
  ClientToken: string;
  Title: string;
  Description: string;
  Contexts?: Array<EngagementContextDetails>;
}
export interface CreateEngagementResponse {
  Id?: string;
  Arn?: string;
}
export interface CreateOpportunityRequest {
  Catalog: string;
  PrimaryNeedsFromAws?: Array<PrimaryNeedFromAws>;
  NationalSecurity?: NationalSecurity;
  PartnerOpportunityIdentifier?: string;
  Customer?: Customer;
  Project?: Project;
  OpportunityType?: OpportunityType;
  Marketing?: Marketing;
  SoftwareRevenue?: SoftwareRevenue;
  ClientToken: string;
  LifeCycle?: LifeCycle;
  Origin?: OpportunityOrigin;
  OpportunityTeam?: Array<Contact>;
}
export interface CreateOpportunityResponse {
  Id: string;
  PartnerOpportunityIdentifier?: string;
  LastModifiedDate?: Date | string;
}
export interface CreateResourceSnapshotJobRequest {
  Catalog: string;
  ClientToken: string;
  EngagementIdentifier: string;
  ResourceType: ResourceType;
  ResourceIdentifier: string;
  ResourceSnapshotTemplateIdentifier: string;
  Tags?: Array<Tag>;
}
export interface CreateResourceSnapshotJobResponse {
  Id?: string;
  Arn?: string;
}
export interface CreateResourceSnapshotRequest {
  Catalog: string;
  EngagementIdentifier: string;
  ResourceType: ResourceType;
  ResourceIdentifier: string;
  ResourceSnapshotTemplateIdentifier: string;
  ClientToken: string;
}
export interface CreateResourceSnapshotResponse {
  Arn?: string;
  Revision?: number;
}
export type CurrencyCode =
  | "USD"
  | "EUR"
  | "GBP"
  | "AUD"
  | "CAD"
  | "CNY"
  | "NZD"
  | "INR"
  | "JPY"
  | "CHF"
  | "SEK"
  | "AED"
  | "AFN"
  | "ALL"
  | "AMD"
  | "ANG"
  | "AOA"
  | "ARS"
  | "AWG"
  | "AZN"
  | "BAM"
  | "BBD"
  | "BDT"
  | "BGN"
  | "BHD"
  | "BIF"
  | "BMD"
  | "BND"
  | "BOB"
  | "BOV"
  | "BRL"
  | "BSD"
  | "BTN"
  | "BWP"
  | "BYN"
  | "BZD"
  | "CDF"
  | "CHE"
  | "CHW"
  | "CLF"
  | "CLP"
  | "COP"
  | "COU"
  | "CRC"
  | "CUC"
  | "CUP"
  | "CVE"
  | "CZK"
  | "DJF"
  | "DKK"
  | "DOP"
  | "DZD"
  | "EGP"
  | "ERN"
  | "ETB"
  | "FJD"
  | "FKP"
  | "GEL"
  | "GHS"
  | "GIP"
  | "GMD"
  | "GNF"
  | "GTQ"
  | "GYD"
  | "HKD"
  | "HNL"
  | "HRK"
  | "HTG"
  | "HUF"
  | "IDR"
  | "ILS"
  | "IQD"
  | "IRR"
  | "ISK"
  | "JMD"
  | "JOD"
  | "KES"
  | "KGS"
  | "KHR"
  | "KMF"
  | "KPW"
  | "KRW"
  | "KWD"
  | "KYD"
  | "KZT"
  | "LAK"
  | "LBP"
  | "LKR"
  | "LRD"
  | "LSL"
  | "LYD"
  | "MAD"
  | "MDL"
  | "MGA"
  | "MKD"
  | "MMK"
  | "MNT"
  | "MOP"
  | "MRU"
  | "MUR"
  | "MVR"
  | "MWK"
  | "MXN"
  | "MXV"
  | "MYR"
  | "MZN"
  | "NAD"
  | "NGN"
  | "NIO"
  | "NOK"
  | "NPR"
  | "OMR"
  | "PAB"
  | "PEN"
  | "PGK"
  | "PHP"
  | "PKR"
  | "PLN"
  | "PYG"
  | "QAR"
  | "RON"
  | "RSD"
  | "RUB"
  | "RWF"
  | "SAR"
  | "SBD"
  | "SCR"
  | "SDG"
  | "SGD"
  | "SHP"
  | "SLL"
  | "SOS"
  | "SRD"
  | "SSP"
  | "STN"
  | "SVC"
  | "SYP"
  | "SZL"
  | "THB"
  | "TJS"
  | "TMT"
  | "TND"
  | "TOP"
  | "TRY"
  | "TTD"
  | "TWD"
  | "TZS"
  | "UAH"
  | "UGX"
  | "USN"
  | "UYI"
  | "UYU"
  | "UZS"
  | "VEF"
  | "VND"
  | "VUV"
  | "WST"
  | "XAF"
  | "XCD"
  | "XDR"
  | "XOF"
  | "XPF"
  | "XSU"
  | "XUA"
  | "YER"
  | "ZAR"
  | "ZMW"
  | "ZWL";
export interface Customer {
  Account?: Account;
  Contacts?: Array<Contact>;
}
export type CustomerContactsList = Array<Contact>;
export interface CustomerProjectsContext {
  Customer?: EngagementCustomer;
  Project?: EngagementCustomerProjectDetails;
}
export interface CustomerSummary {
  Account?: AccountSummary;
}
export type PartnercentralSellingDate = string;

export type DateTime = Date | string;

export interface DeleteResourceSnapshotJobRequest {
  Catalog: string;
  ResourceSnapshotJobIdentifier: string;
}
export type DeliveryModel =
  | "SAAS_OR_PAAS"
  | "BYOL_OR_AMI"
  | "MANAGED_SERVICES"
  | "PROFESSIONAL_SERVICES"
  | "RESELL"
  | "OTHER";
export type DeliveryModels = Array<DeliveryModel>;
export interface DisassociateOpportunityRequest {
  Catalog: string;
  OpportunityIdentifier: string;
  RelatedEntityType: RelatedEntityType;
  RelatedEntityIdentifier: string;
}
export type DunsNumber = string;

export type Email = string;

export type EngagementArn = string;

export type EngagementArnOrIdentifier = string;

export interface EngagementContextDetails {
  Type: EngagementContextType;
  Payload?: EngagementContextPayload;
}
interface _EngagementContextPayload {
  CustomerProject?: CustomerProjectsContext;
}

export type EngagementContextPayload = _EngagementContextPayload & {
  CustomerProject: CustomerProjectsContext;
};
export type EngagementContexts = Array<EngagementContextDetails>;
export type EngagementContextType = "CUSTOMER_PROJECT";
export interface EngagementCustomer {
  Industry: Industry;
  CompanyName: string;
  WebsiteUrl: string;
  CountryCode: CountryCode;
}
export type EngagementCustomerBusinessProblem = string;

export interface EngagementCustomerProjectDetails {
  Title: string;
  BusinessProblem: string;
  TargetCompletionDate: string;
}
export type EngagementCustomerProjectTitle = string;

export type EngagementDescription = string;

export type EngagementIdentifier = string;

export type EngagementIdentifiers = Array<string>;
export type EngagementInvitationArn = string;

export type EngagementInvitationArnOrIdentifier = string;

export type EngagementInvitationIdentifier = string;

export type EngagementInvitationIdentifiers = Array<string>;
export type EngagementInvitationPayloadType = "OPPORTUNITY_INVITATION";
export type EngagementInvitationsPayloadType =
  Array<EngagementInvitationPayloadType>;
export type EngagementInvitationSummaries = Array<EngagementInvitationSummary>;
export interface EngagementInvitationSummary {
  Arn?: string;
  PayloadType?: EngagementInvitationPayloadType;
  Id: string;
  EngagementId?: string;
  EngagementTitle?: string;
  Status?: InvitationStatus;
  InvitationDate?: Date | string;
  ExpirationDate?: Date | string;
  SenderAwsAccountId?: string;
  SenderCompanyName?: string;
  Receiver?: Receiver;
  Catalog: string;
  ParticipantType?: ParticipantType;
}
export interface EngagementMember {
  CompanyName?: string;
  WebsiteUrl?: string;
  AccountId?: string;
}
export type EngagementMembers = Array<EngagementMember>;
export type EngagementMemberSummaries = Array<EngagementMemberSummary>;
export interface EngagementMemberSummary {
  CompanyName?: string;
  WebsiteUrl?: string;
}
export type EngagementPageSize = number;

export interface EngagementResourceAssociationSummary {
  Catalog: string;
  EngagementId?: string;
  ResourceType?: ResourceType;
  ResourceId?: string;
  CreatedBy?: string;
}
export type EngagementResourceAssociationSummaryList =
  Array<EngagementResourceAssociationSummary>;
export type EngagementScore = "HIGH" | "MEDIUM" | "LOW";
export interface EngagementSort {
  SortOrder: SortOrder;
  SortBy: EngagementSortName;
}
export type EngagementSortName = "CreatedDate";
export interface EngagementSummary {
  Arn?: string;
  Id?: string;
  Title?: string;
  CreatedAt?: Date | string;
  CreatedBy?: string;
  MemberCount?: number;
}
export type EngagementSummaryList = Array<EngagementSummary>;
export type EngagementTitle = string;

export interface ExpectedCustomerSpend {
  Amount: string;
  CurrencyCode: CurrencyCode;
  Frequency: PaymentFrequency;
  TargetCompany: string;
  EstimationUrl?: string;
}
export type ExpectedCustomerSpendList = Array<ExpectedCustomerSpend>;
export type FilterIdentifier = Array<string>;
export type FilterLifeCycleReviewStatus = Array<ReviewStatus>;
export type FilterLifeCycleStage = Array<Stage>;
export type FilterStatus = Array<SolutionStatus>;
export interface GetAwsOpportunitySummaryRequest {
  Catalog: string;
  RelatedOpportunityIdentifier: string;
}
export interface GetAwsOpportunitySummaryResponse {
  Catalog: string;
  RelatedOpportunityId?: string;
  Origin?: OpportunityOrigin;
  InvolvementType?: SalesInvolvementType;
  Visibility?: Visibility;
  LifeCycle?: AwsOpportunityLifeCycle;
  OpportunityTeam?: Array<AwsTeamMember>;
  Insights?: AwsOpportunityInsights;
  InvolvementTypeChangeReason?: InvolvementTypeChangeReason;
  RelatedEntityIds?: AwsOpportunityRelatedEntities;
  Customer?: AwsOpportunityCustomer;
  Project?: AwsOpportunityProject;
}
export interface GetEngagementInvitationRequest {
  Catalog: string;
  Identifier: string;
}
export interface GetEngagementInvitationResponse {
  Arn?: string;
  PayloadType?: EngagementInvitationPayloadType;
  Id: string;
  EngagementId?: string;
  EngagementTitle?: string;
  Status?: InvitationStatus;
  InvitationDate?: Date | string;
  ExpirationDate?: Date | string;
  SenderAwsAccountId?: string;
  SenderCompanyName?: string;
  Receiver?: Receiver;
  Catalog: string;
  RejectionReason?: string;
  Payload?: Payload;
  InvitationMessage?: string;
  EngagementDescription?: string;
  ExistingMembers?: Array<EngagementMemberSummary>;
}
export interface GetEngagementRequest {
  Catalog: string;
  Identifier: string;
}
export interface GetEngagementResponse {
  Id?: string;
  Arn?: string;
  Title?: string;
  Description?: string;
  CreatedAt?: Date | string;
  CreatedBy?: string;
  MemberCount?: number;
  Contexts?: Array<EngagementContextDetails>;
}
export interface GetOpportunityRequest {
  Catalog: string;
  Identifier: string;
}
export interface GetOpportunityResponse {
  Catalog: string;
  PrimaryNeedsFromAws?: Array<PrimaryNeedFromAws>;
  NationalSecurity?: NationalSecurity;
  PartnerOpportunityIdentifier?: string;
  Customer?: Customer;
  Project?: Project;
  OpportunityType?: OpportunityType;
  Marketing?: Marketing;
  SoftwareRevenue?: SoftwareRevenue;
  Id: string;
  Arn?: string;
  LastModifiedDate: Date | string;
  CreatedDate: Date | string;
  RelatedEntityIdentifiers: RelatedEntityIdentifiers;
  LifeCycle?: LifeCycle;
  OpportunityTeam?: Array<Contact>;
}
export interface GetResourceSnapshotJobRequest {
  Catalog: string;
  ResourceSnapshotJobIdentifier: string;
}
export interface GetResourceSnapshotJobResponse {
  Catalog: string;
  Id?: string;
  Arn?: string;
  EngagementId?: string;
  ResourceType?: ResourceType;
  ResourceId?: string;
  ResourceArn?: string;
  ResourceSnapshotTemplateName?: string;
  CreatedAt?: Date | string;
  Status?: ResourceSnapshotJobStatus;
  LastSuccessfulExecutionDate?: Date | string;
  LastFailure?: string;
}
export interface GetResourceSnapshotRequest {
  Catalog: string;
  EngagementIdentifier: string;
  ResourceType: ResourceType;
  ResourceIdentifier: string;
  ResourceSnapshotTemplateIdentifier: string;
  Revision?: number;
}
export interface GetResourceSnapshotResponse {
  Catalog: string;
  Arn?: string;
  CreatedBy?: string;
  CreatedAt?: Date | string;
  EngagementId?: string;
  ResourceType?: ResourceType;
  ResourceId?: string;
  ResourceSnapshotTemplateName?: string;
  Revision?: number;
  Payload?: ResourceSnapshotPayload;
}
export interface GetSellingSystemSettingsRequest {
  Catalog: string;
}
export interface GetSellingSystemSettingsResponse {
  Catalog: string;
  ResourceSnapshotJobRoleArn?: string;
}
export type Industry =
  | "AEROSPACE_SATELLITE"
  | "AGRICULTURE"
  | "AUTOMOTIVE"
  | "COMPUTERS_ELECTRONICS"
  | "CONSUMER_GOODS"
  | "EDUCATION"
  | "ENERGY_OIL_GAS"
  | "ENERGY_POWER_UTILITIES"
  | "FINANCIAL_SERVICES"
  | "GAMING"
  | "GOVERNMENT"
  | "HEALTHCARE"
  | "HOSPITALITY"
  | "LIFE_SCIENCES"
  | "MANUFACTURING"
  | "MARKETING_ADVERTISING"
  | "MEDIA_ENTERTAINMENT"
  | "MINING"
  | "NON_PROFIT_ORGANIZATION"
  | "PROFESSIONAL_SERVICES"
  | "REALESTATE_CONSTRUCTION"
  | "RETAIL"
  | "SOFTWARE_INTERNET"
  | "TELECOMMUNICATIONS"
  | "TRANSPORTATION_LOGISTICS"
  | "TRAVEL"
  | "WHOLESALE_DISTRIBUTION"
  | "OTHER";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface Invitation {
  Message: string;
  Receiver: Receiver;
  Payload: Payload;
}
export type InvitationMessage = string;

export type InvitationStatus = "ACCEPTED" | "PENDING" | "REJECTED" | "EXPIRED";
export type InvitationStatusList = Array<InvitationStatus>;
export type InvolvementTypeChangeReason =
  | "EXPANSION_OPPORTUNITY"
  | "CHANGE_IN_DEAL_INFORMATION"
  | "CUSTOMER_REQUESTED"
  | "TECHNICAL_COMPLEXITY"
  | "RISK_MITIGATION";
export type JobTitle = string;

export interface LastModifiedDate {
  AfterLastModifiedDate?: Date | string;
  BeforeLastModifiedDate?: Date | string;
}
export interface LifeCycle {
  Stage?: Stage;
  ClosedLostReason?: ClosedLostReason;
  NextSteps?: string;
  TargetCloseDate?: string;
  ReviewStatus?: ReviewStatus;
  ReviewComments?: string;
  ReviewStatusReason?: string;
  NextStepsHistory?: Array<NextStepsHistory>;
}
export interface LifeCycleForView {
  TargetCloseDate?: string;
  ReviewStatus?: ReviewStatus;
  Stage?: Stage;
  NextSteps?: string;
}
export interface LifeCycleSummary {
  Stage?: Stage;
  ClosedLostReason?: ClosedLostReason;
  NextSteps?: string;
  TargetCloseDate?: string;
  ReviewStatus?: ReviewStatus;
  ReviewComments?: string;
  ReviewStatusReason?: string;
}
export interface ListEngagementByAcceptingInvitationTasksRequest {
  MaxResults?: number;
  NextToken?: string;
  Sort?: ListTasksSortBase;
  Catalog: string;
  TaskStatus?: Array<TaskStatus>;
  OpportunityIdentifier?: Array<string>;
  EngagementInvitationIdentifier?: Array<string>;
  TaskIdentifier?: Array<string>;
}
export interface ListEngagementByAcceptingInvitationTasksResponse {
  TaskSummaries?: Array<ListEngagementByAcceptingInvitationTaskSummary>;
  NextToken?: string;
}
export type ListEngagementByAcceptingInvitationTaskSummaries =
  Array<ListEngagementByAcceptingInvitationTaskSummary>;
export interface ListEngagementByAcceptingInvitationTaskSummary {
  TaskId?: string;
  TaskArn?: string;
  StartTime?: Date | string;
  TaskStatus?: TaskStatus;
  Message?: string;
  ReasonCode?: ReasonCode;
  OpportunityId?: string;
  ResourceSnapshotJobId?: string;
  EngagementInvitationId?: string;
}
export interface ListEngagementFromOpportunityTasksRequest {
  MaxResults?: number;
  NextToken?: string;
  Sort?: ListTasksSortBase;
  Catalog: string;
  TaskStatus?: Array<TaskStatus>;
  TaskIdentifier?: Array<string>;
  OpportunityIdentifier?: Array<string>;
  EngagementIdentifier?: Array<string>;
}
export interface ListEngagementFromOpportunityTasksResponse {
  TaskSummaries?: Array<ListEngagementFromOpportunityTaskSummary>;
  NextToken?: string;
}
export type ListEngagementFromOpportunityTaskSummaries =
  Array<ListEngagementFromOpportunityTaskSummary>;
export interface ListEngagementFromOpportunityTaskSummary {
  TaskId?: string;
  TaskArn?: string;
  StartTime?: Date | string;
  TaskStatus?: TaskStatus;
  Message?: string;
  ReasonCode?: ReasonCode;
  OpportunityId?: string;
  ResourceSnapshotJobId?: string;
  EngagementId?: string;
  EngagementInvitationId?: string;
}
export interface ListEngagementInvitationsRequest {
  Catalog: string;
  MaxResults?: number;
  NextToken?: string;
  Sort?: OpportunityEngagementInvitationSort;
  PayloadType?: Array<EngagementInvitationPayloadType>;
  ParticipantType: ParticipantType;
  Status?: Array<InvitationStatus>;
  EngagementIdentifier?: Array<string>;
  SenderAwsAccountId?: Array<string>;
}
export interface ListEngagementInvitationsResponse {
  EngagementInvitationSummaries?: Array<EngagementInvitationSummary>;
  NextToken?: string;
}
export interface ListEngagementMembersRequest {
  Catalog: string;
  Identifier: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListEngagementMembersResponse {
  EngagementMemberList: Array<EngagementMember>;
  NextToken?: string;
}
export interface ListEngagementResourceAssociationsRequest {
  Catalog: string;
  MaxResults?: number;
  NextToken?: string;
  EngagementIdentifier?: string;
  ResourceType?: ResourceType;
  ResourceIdentifier?: string;
  CreatedBy?: string;
}
export interface ListEngagementResourceAssociationsResponse {
  EngagementResourceAssociationSummaries: Array<EngagementResourceAssociationSummary>;
  NextToken?: string;
}
export interface ListEngagementsRequest {
  Catalog: string;
  CreatedBy?: Array<string>;
  ExcludeCreatedBy?: Array<string>;
  Sort?: EngagementSort;
  MaxResults?: number;
  NextToken?: string;
  EngagementIdentifier?: Array<string>;
}
export interface ListEngagementsResponse {
  EngagementSummaryList: Array<EngagementSummary>;
  NextToken?: string;
}
export interface ListOpportunitiesRequest {
  Catalog: string;
  MaxResults?: number;
  NextToken?: string;
  Sort?: OpportunitySort;
  LastModifiedDate?: LastModifiedDate;
  Identifier?: Array<string>;
  LifeCycleStage?: Array<Stage>;
  LifeCycleReviewStatus?: Array<ReviewStatus>;
  CustomerCompanyName?: Array<string>;
}
export interface ListOpportunitiesResponse {
  OpportunitySummaries: Array<OpportunitySummary>;
  NextToken?: string;
}
export interface ListResourceSnapshotJobsRequest {
  Catalog: string;
  MaxResults?: number;
  NextToken?: string;
  EngagementIdentifier?: string;
  Status?: ResourceSnapshotJobStatus;
  Sort?: SortObject;
}
export interface ListResourceSnapshotJobsResponse {
  ResourceSnapshotJobSummaries: Array<ResourceSnapshotJobSummary>;
  NextToken?: string;
}
export interface ListResourceSnapshotsRequest {
  Catalog: string;
  MaxResults?: number;
  NextToken?: string;
  EngagementIdentifier: string;
  ResourceType?: ResourceType;
  ResourceIdentifier?: string;
  ResourceSnapshotTemplateIdentifier?: string;
  CreatedBy?: string;
}
export interface ListResourceSnapshotsResponse {
  ResourceSnapshotSummaries: Array<ResourceSnapshotSummary>;
  NextToken?: string;
}
export interface ListSolutionsRequest {
  Catalog: string;
  MaxResults?: number;
  NextToken?: string;
  Sort?: SolutionSort;
  Status?: Array<SolutionStatus>;
  Identifier?: Array<string>;
  Category?: Array<string>;
}
export interface ListSolutionsResponse {
  SolutionSummaries: Array<SolutionBase>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags: Array<Tag>;
}
export interface ListTasksSortBase {
  SortOrder: SortOrder;
  SortBy: ListTasksSortName;
}
export type ListTasksSortName = "START_TIME";
export interface Marketing {
  CampaignName?: string;
  Source?: MarketingSource;
  UseCases?: Array<string>;
  Channels?: Array<Channel>;
  AwsFundingUsed?: AwsFundingUsed;
}
export type MarketingSource = "MARKETING_ACTIVITY" | "NONE";
export type MemberCompanyName = string;

export type MemberPageSize = number;

export interface MonetaryValue {
  Amount: string;
  CurrencyCode: CurrencyCode;
}
export type Name = string;

export type NationalSecurity = "YES" | "NO";
export type NextStepsHistories = Array<NextStepsHistory>;
export interface NextStepsHistory {
  Value: string;
  Time: Date | string;
}
export type OpportunityArn = string;

export interface OpportunityEngagementInvitationSort {
  SortOrder: SortOrder;
  SortBy: OpportunityEngagementInvitationSortName;
}
export type OpportunityEngagementInvitationSortName = "INVITATION_DATE";
export type OpportunityIdentifier = string;

export type OpportunityIdentifiers = Array<string>;
export interface OpportunityInvitationPayload {
  SenderContacts?: Array<SenderContact>;
  ReceiverResponsibilities: Array<ReceiverResponsibility>;
  Customer: EngagementCustomer;
  Project: ProjectDetails;
}
export type OpportunityOrigin = "AWS_REFERRAL" | "PARTNER_REFERRAL";
export interface OpportunitySort {
  SortOrder: SortOrder;
  SortBy: OpportunitySortName;
}
export type OpportunitySortName =
  | "LAST_MODIFIEDDATE"
  | "IDENTIFIER"
  | "CUSTOMER_COMPANY_NAME";
export type OpportunitySummaries = Array<OpportunitySummary>;
export interface OpportunitySummary {
  Catalog: string;
  Id?: string;
  Arn?: string;
  PartnerOpportunityIdentifier?: string;
  OpportunityType?: OpportunityType;
  LastModifiedDate?: Date | string;
  CreatedDate?: Date | string;
  LifeCycle?: LifeCycleSummary;
  Customer?: CustomerSummary;
  Project?: ProjectSummary;
}
export interface OpportunitySummaryView {
  OpportunityType?: OpportunityType;
  Lifecycle?: LifeCycleForView;
  OpportunityTeam?: Array<Contact>;
  PrimaryNeedsFromAws?: Array<PrimaryNeedFromAws>;
  Customer?: Customer;
  Project?: ProjectView;
  RelatedEntityIdentifiers?: RelatedEntityIdentifiers;
}
export type OpportunityType = "NET_NEW_BUSINESS" | "FLAT_RENEWAL" | "EXPANSION";
export type PageSize = number;

export type ParticipantType = "SENDER" | "RECEIVER";
export type PartnerOpportunityTeamMembersList = Array<Contact>;
interface _Payload {
  OpportunityInvitation?: OpportunityInvitationPayload;
}

export type Payload = _Payload & {
  OpportunityInvitation: OpportunityInvitationPayload;
};
export type PaymentFrequency = "MONTHLY";
export type PhoneNumber = string;

export type PiiString = string;

export type PrimaryNeedFromAws =
  | "CO_SELL_ARCHITECTURAL_VALIDATION"
  | "CO_SELL_BUSINESS_PRESENTATION"
  | "CO_SELL_COMPETITIVE_INFORMATION"
  | "CO_SELL_PRICING_ASSISTANCE"
  | "CO_SELL_TECHNICAL_CONSULTATION"
  | "CO_SELL_TOTAL_COST_OF_OWNERSHIP_EVALUATION"
  | "CO_SELL_DEAL_SUPPORT"
  | "CO_SELL_SUPPORT_FOR_PUBLIC_TENDER_RFX";
export type PrimaryNeedsFromAws = Array<PrimaryNeedFromAws>;
export type ProfileNextStepsHistories = Array<ProfileNextStepsHistory>;
export interface ProfileNextStepsHistory {
  Value: string;
  Time: Date | string;
}
export interface Project {
  DeliveryModels?: Array<DeliveryModel>;
  ExpectedCustomerSpend?: Array<ExpectedCustomerSpend>;
  Title?: string;
  ApnPrograms?: Array<string>;
  CustomerBusinessProblem?: string;
  CustomerUseCase?: string;
  RelatedOpportunityIdentifier?: string;
  SalesActivities?: Array<SalesActivity>;
  CompetitorName?: CompetitorName;
  OtherCompetitorNames?: string;
  OtherSolutionDescription?: string;
  AdditionalComments?: string;
}
export interface ProjectDetails {
  BusinessProblem: string;
  Title: string;
  TargetCompletionDate: string;
  ExpectedCustomerSpend: Array<ExpectedCustomerSpend>;
}
export interface ProjectSummary {
  DeliveryModels?: Array<DeliveryModel>;
  ExpectedCustomerSpend?: Array<ExpectedCustomerSpend>;
}
export interface ProjectView {
  DeliveryModels?: Array<DeliveryModel>;
  ExpectedCustomerSpend?: Array<ExpectedCustomerSpend>;
  CustomerUseCase?: string;
  SalesActivities?: Array<SalesActivity>;
  OtherSolutionDescription?: string;
}
export interface PutSellingSystemSettingsRequest {
  Catalog: string;
  ResourceSnapshotJobRoleIdentifier?: string;
}
export interface PutSellingSystemSettingsResponse {
  Catalog: string;
  ResourceSnapshotJobRoleArn?: string;
}
export type ReasonCode =
  | "INVITATION_ACCESS_DENIED"
  | "INVITATION_VALIDATION_FAILED"
  | "ENGAGEMENT_ACCESS_DENIED"
  | "OPPORTUNITY_ACCESS_DENIED"
  | "RESOURCE_SNAPSHOT_JOB_ACCESS_DENIED"
  | "RESOURCE_SNAPSHOT_JOB_VALIDATION_FAILED"
  | "RESOURCE_SNAPSHOT_JOB_CONFLICT"
  | "ENGAGEMENT_VALIDATION_FAILED"
  | "ENGAGEMENT_CONFLICT"
  | "OPPORTUNITY_SUBMISSION_FAILED"
  | "ENGAGEMENT_INVITATION_CONFLICT"
  | "INTERNAL_ERROR"
  | "OPPORTUNITY_VALIDATION_FAILED"
  | "OPPORTUNITY_CONFLICT"
  | "RESOURCE_SNAPSHOT_ACCESS_DENIED"
  | "RESOURCE_SNAPSHOT_VALIDATION_FAILED"
  | "RESOURCE_SNAPSHOT_CONFLICT"
  | "SERVICE_QUOTA_EXCEEDED"
  | "REQUEST_THROTTLED";
interface _Receiver {
  Account?: AccountReceiver;
}

export type Receiver = _Receiver & { Account: AccountReceiver };
export type ReceiverResponsibility =
  | "DISTRIBUTOR"
  | "RESELLER"
  | "HARDWARE_PARTNER"
  | "MANAGED_SERVICE_PROVIDER"
  | "SOFTWARE_PARTNER"
  | "SERVICES_PARTNER"
  | "TRAINING_PARTNER"
  | "CO_SELL_FACILITATOR"
  | "FACILITATOR";
export type ReceiverResponsibilityList = Array<ReceiverResponsibility>;
export interface RejectEngagementInvitationRequest {
  Catalog: string;
  Identifier: string;
  RejectionReason?: string;
}
export type RejectionReasonString = string;

export interface RelatedEntityIdentifiers {
  AwsMarketplaceOffers?: Array<string>;
  Solutions?: Array<string>;
  AwsProducts?: Array<string>;
}
export type RelatedEntityType =
  | "SOLUTIONS"
  | "AWS_PRODUCTS"
  | "AWS_MARKETPLACE_OFFERS";
export type ResourceArn = string;

export type ResourceIdentifier = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourceSnapshotArn = string;

export type ResourceSnapshotJobArn = string;

export type ResourceSnapshotJobIdentifier = string;

export type ResourceSnapshotJobRoleArn = string;

export type ResourceSnapshotJobRoleIdentifier = string;

export type ResourceSnapshotJobStatus = "RUNNING" | "STOPPED";
export interface ResourceSnapshotJobSummary {
  Id?: string;
  Arn?: string;
  EngagementId?: string;
  Status?: ResourceSnapshotJobStatus;
}
export type ResourceSnapshotJobSummaryList = Array<ResourceSnapshotJobSummary>;
interface _ResourceSnapshotPayload {
  OpportunitySummary?: OpportunitySummaryView;
}

export type ResourceSnapshotPayload = _ResourceSnapshotPayload & {
  OpportunitySummary: OpportunitySummaryView;
};
export type ResourceSnapshotRevision = number;

export interface ResourceSnapshotSummary {
  Arn?: string;
  Revision?: number;
  ResourceType?: ResourceType;
  ResourceId?: string;
  ResourceSnapshotTemplateName?: string;
  CreatedBy?: string;
}
export type ResourceSnapshotSummaryList = Array<ResourceSnapshotSummary>;
export type ResourceTemplateName = string;

export type ResourceType = "OPPORTUNITY";
export type RevenueModel = "CONTRACT" | "PAY_AS_YOU_GO" | "SUBSCRIPTION";
export type ReviewStatus =
  | "PENDING_SUBMISSION"
  | "SUBMITTED"
  | "IN_REVIEW"
  | "APPROVED"
  | "REJECTED"
  | "ACTION_REQUIRED";
export type SalesActivities = Array<SalesActivity>;
export type SalesActivity =
  | "INITIALIZED_DISCUSSIONS_WITH_CUSTOMER"
  | "CUSTOMER_HAS_SHOWN_INTEREST"
  | "CONDUCTED_POC_DEMO"
  | "IN_EVALUATION_PLANNING_STAGE"
  | "AGREED_ON_SOLUTION_TO_BUSINESS_PROBLEM"
  | "COMPLETED_ACTION_PLAN"
  | "FINALIZED_DEPLOYMENT_NEEDS"
  | "SOW_SIGNED";
export type SalesInvolvementType = "FOR_VISIBILITY_ONLY" | "CO_SELL";
export interface SenderContact {
  Email: string;
  FirstName?: string;
  LastName?: string;
  BusinessTitle?: string;
  Phone?: string;
}
export type SenderContactEmail = string;

export type SenderContactList = Array<SenderContact>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export interface SoftwareRevenue {
  DeliveryModel?: RevenueModel;
  Value?: MonetaryValue;
  EffectiveDate?: string;
  ExpirationDate?: string;
}
export type SolutionArn = string;

export interface SolutionBase {
  Catalog: string;
  Id: string;
  Arn?: string;
  Name: string;
  Status: SolutionStatus;
  Category: string;
  CreatedDate: Date | string;
}
export type SolutionIdentifier = string;

export type SolutionIdentifiers = Array<string>;
export type SolutionList = Array<SolutionBase>;
export interface SolutionSort {
  SortOrder: SortOrder;
  SortBy: SolutionSortName;
}
export type SolutionSortName =
  | "IDENTIFIER"
  | "NAME"
  | "STATUS"
  | "CATEGORY"
  | "CREATEDDATE";
export type SolutionStatus = "ACTIVE" | "INACTIVE" | "DRAFT";
export type SortBy = "CREATED_DATE";
export interface SortObject {
  SortBy?: SortBy;
  SortOrder?: SortOrder;
}
export type SortOrder = "ASCENDING" | "DESCENDING";
export type Stage =
  | "PROSPECT"
  | "QUALIFIED"
  | "TECHNICAL_VALIDATION"
  | "BUSINESS_VALIDATION"
  | "COMMITTED"
  | "LAUNCHED"
  | "CLOSED_LOST";
export interface StartEngagementByAcceptingInvitationTaskRequest {
  Catalog: string;
  ClientToken: string;
  Identifier: string;
  Tags?: Array<Tag>;
}
export interface StartEngagementByAcceptingInvitationTaskResponse {
  TaskId?: string;
  TaskArn?: string;
  StartTime?: Date | string;
  TaskStatus?: TaskStatus;
  Message?: string;
  ReasonCode?: ReasonCode;
  OpportunityId?: string;
  ResourceSnapshotJobId?: string;
  EngagementInvitationId?: string;
}
export interface StartEngagementFromOpportunityTaskRequest {
  Catalog: string;
  ClientToken: string;
  Identifier: string;
  AwsSubmission: AwsSubmission;
  Tags?: Array<Tag>;
}
export interface StartEngagementFromOpportunityTaskResponse {
  TaskId?: string;
  TaskArn?: string;
  StartTime?: Date | string;
  TaskStatus?: TaskStatus;
  Message?: string;
  ReasonCode?: ReasonCode;
  OpportunityId?: string;
  ResourceSnapshotJobId?: string;
  EngagementId?: string;
  EngagementInvitationId?: string;
}
export interface StartResourceSnapshotJobRequest {
  Catalog: string;
  ResourceSnapshotJobIdentifier: string;
}
export interface StopResourceSnapshotJobRequest {
  Catalog: string;
  ResourceSnapshotJobIdentifier: string;
}
export type StringList = Array<string>;
export interface SubmitOpportunityRequest {
  Catalog: string;
  Identifier: string;
  InvolvementType: SalesInvolvementType;
  Visibility?: Visibility;
}
export interface Tag {
  Key: string;
  Value: string;
}
export type TaggableResourceArn = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TaskArn = string;

export type TaskArnOrIdentifier = string;

export type TaskIdentifier = string;

export type TaskIdentifiers = Array<string>;
export type TaskStatus = "IN_PROGRESS" | "COMPLETE" | "FAILED";
export type TaskStatuses = Array<TaskStatus>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateOpportunityRequest {
  Catalog: string;
  PrimaryNeedsFromAws?: Array<PrimaryNeedFromAws>;
  NationalSecurity?: NationalSecurity;
  PartnerOpportunityIdentifier?: string;
  Customer?: Customer;
  Project?: Project;
  OpportunityType?: OpportunityType;
  Marketing?: Marketing;
  SoftwareRevenue?: SoftwareRevenue;
  LastModifiedDate: Date | string;
  Identifier: string;
  LifeCycle?: LifeCycle;
}
export interface UpdateOpportunityResponse {
  Id: string;
  LastModifiedDate: Date | string;
}
export type UseCases = Array<string>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason: ValidationExceptionReason;
  readonly ErrorList?: Array<ValidationExceptionError>;
}> {}
export interface ValidationExceptionError {
  FieldName?: string;
  Message: string;
  Code: ValidationExceptionErrorCode;
}
export type ValidationExceptionErrorCode =
  | "REQUIRED_FIELD_MISSING"
  | "INVALID_ENUM_VALUE"
  | "INVALID_STRING_FORMAT"
  | "INVALID_VALUE"
  | "TOO_MANY_VALUES"
  | "INVALID_RESOURCE_STATE"
  | "DUPLICATE_KEY_VALUE"
  | "VALUE_OUT_OF_RANGE"
  | "ACTION_NOT_PERMITTED";
export type ValidationExceptionErrorList = Array<ValidationExceptionError>;
export type ValidationExceptionReason =
  | "REQUEST_VALIDATION_FAILED"
  | "BUSINESS_VALIDATION_FAILED";
export type Visibility = "FULL" | "LIMITED";
export type WebsiteUrl = string;

export declare namespace GetSellingSystemSettings {
  export type Input = GetSellingSystemSettingsRequest;
  export type Output = GetSellingSystemSettingsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
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

export declare namespace PutSellingSystemSettings {
  export type Input = PutSellingSystemSettingsRequest;
  export type Output = PutSellingSystemSettingsResponse;
  export type Error =
    | AccessDeniedException
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
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

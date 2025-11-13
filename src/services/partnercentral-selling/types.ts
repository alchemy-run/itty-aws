import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class PartnerCentralSelling extends AWSServiceClient {
  getSellingSystemSettings(
    input: GetSellingSystemSettingsRequest,
  ): Effect.Effect<
    GetSellingSystemSettingsResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putSellingSystemSettings(
    input: PutSellingSystemSettingsRequest,
  ): Effect.Effect<
    PutSellingSystemSettingsResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  acceptEngagementInvitation(
    input: AcceptEngagementInvitationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  assignOpportunity(
    input: AssignOpportunityRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateOpportunity(
    input: AssociateOpportunityRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createEngagement(
    input: CreateEngagementRequest,
  ): Effect.Effect<
    CreateEngagementResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createEngagementInvitation(
    input: CreateEngagementInvitationRequest,
  ): Effect.Effect<
    CreateEngagementInvitationResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createOpportunity(
    input: CreateOpportunityRequest,
  ): Effect.Effect<
    CreateOpportunityResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createResourceSnapshot(
    input: CreateResourceSnapshotRequest,
  ): Effect.Effect<
    CreateResourceSnapshotResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createResourceSnapshotJob(
    input: CreateResourceSnapshotJobRequest,
  ): Effect.Effect<
    CreateResourceSnapshotJobResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteResourceSnapshotJob(
    input: DeleteResourceSnapshotJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateOpportunity(
    input: DisassociateOpportunityRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAwsOpportunitySummary(
    input: GetAwsOpportunitySummaryRequest,
  ): Effect.Effect<
    GetAwsOpportunitySummaryResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getEngagement(
    input: GetEngagementRequest,
  ): Effect.Effect<
    GetEngagementResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getEngagementInvitation(
    input: GetEngagementInvitationRequest,
  ): Effect.Effect<
    GetEngagementInvitationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getOpportunity(
    input: GetOpportunityRequest,
  ): Effect.Effect<
    GetOpportunityResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getResourceSnapshot(
    input: GetResourceSnapshotRequest,
  ): Effect.Effect<
    GetResourceSnapshotResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getResourceSnapshotJob(
    input: GetResourceSnapshotJobRequest,
  ): Effect.Effect<
    GetResourceSnapshotJobResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEngagementByAcceptingInvitationTasks(
    input: ListEngagementByAcceptingInvitationTasksRequest,
  ): Effect.Effect<
    ListEngagementByAcceptingInvitationTasksResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEngagementFromOpportunityTasks(
    input: ListEngagementFromOpportunityTasksRequest,
  ): Effect.Effect<
    ListEngagementFromOpportunityTasksResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEngagementInvitations(
    input: ListEngagementInvitationsRequest,
  ): Effect.Effect<
    ListEngagementInvitationsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEngagementMembers(
    input: ListEngagementMembersRequest,
  ): Effect.Effect<
    ListEngagementMembersResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEngagementResourceAssociations(
    input: ListEngagementResourceAssociationsRequest,
  ): Effect.Effect<
    ListEngagementResourceAssociationsResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEngagements(
    input: ListEngagementsRequest,
  ): Effect.Effect<
    ListEngagementsResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listOpportunities(
    input: ListOpportunitiesRequest,
  ): Effect.Effect<
    ListOpportunitiesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listResourceSnapshotJobs(
    input: ListResourceSnapshotJobsRequest,
  ): Effect.Effect<
    ListResourceSnapshotJobsResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listResourceSnapshots(
    input: ListResourceSnapshotsRequest,
  ): Effect.Effect<
    ListResourceSnapshotsResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listSolutions(
    input: ListSolutionsRequest,
  ): Effect.Effect<
    ListSolutionsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  rejectEngagementInvitation(
    input: RejectEngagementInvitationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startEngagementByAcceptingInvitationTask(
    input: StartEngagementByAcceptingInvitationTaskRequest,
  ): Effect.Effect<
    StartEngagementByAcceptingInvitationTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startEngagementFromOpportunityTask(
    input: StartEngagementFromOpportunityTaskRequest,
  ): Effect.Effect<
    StartEngagementFromOpportunityTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startResourceSnapshotJob(
    input: StartResourceSnapshotJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  stopResourceSnapshotJob(
    input: StopResourceSnapshotJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  submitOpportunity(
    input: SubmitOpportunityRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateOpportunity(
    input: UpdateOpportunityRequest,
  ): Effect.Effect<
    UpdateOpportunityResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
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

export type Amount = string;

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
export type AwsClosedLostReason = "Administrative" | "Business Associate Agreement" | "Company Acquired/Dissolved" | "Competitive Offering" | "Customer Data Requirement" | "Customer Deficiency" | "Customer Experience" | "Delay / Cancellation of Project" | "Duplicate" | "Duplicate Opportunity" | "Executive Blocker" | "Failed Vetting" | "Feature Limitation" | "Financial/Commercial" | "Insufficient Amazon Value" | "Insufficient AWS Value" | "International Constraints" | "Legal / Tax / Regulatory" | "Legal Terms and Conditions" | "Lost to Competitor" | "Lost to Competitor - Google" | "Lost to Competitor - Microsoft" | "Lost to Competitor - Other" | "Lost to Competitor - Rackspace" | "Lost to Competitor - SoftLayer" | "Lost to Competitor - VMWare" | "No Customer Reference" | "No Integration Resources" | "No Opportunity" | "No Perceived Value of MP" | "No Response" | "Not Committed to AWS" | "No Update" | "On Premises Deployment" | "Other" | "Other (Details in Description)" | "Partner Gap" | "Past Due" | "People/Relationship/Governance" | "Platform Technology Limitation" | "Preference for Competitor" | "Price" | "Product/Technology" | "Product Not on AWS" | "Security / Compliance" | "Self-Service" | "Technical Limitations" | "Term Sheet Impasse";
export type AwsFundingUsed = "Yes" | "No";
export type AwsMarketplaceOfferIdentifier = string;

export type AwsMarketplaceOfferIdentifiers = Array<string>;
export type AwsMemberBusinessTitle = "AWSSalesRep" | "AWSAccountOwner" | "WWPSPDM" | "PDM" | "PSM" | "ISVSM";
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
export type AwsOpportunityStage = "Not Started" | "In Progress" | "Prospect" | "Engaged" | "Identified" | "Qualify" | "Research" | "Seller Engaged" | "Evaluating" | "Seller Registered" | "Term Sheet Negotiation" | "Contract Negotiation" | "Onboarding" | "Building Integration" | "Qualified" | "On-hold" | "Technical Validation" | "Business Validation" | "Committed" | "Launched" | "Deferred to Partner" | "Closed Lost" | "Completed" | "Closed Incomplete";
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

export type Channel = "AWS Marketing Central" | "Content Syndication" | "Display" | "Email" | "Live Event" | "Out Of Home (OOH)" | "Print" | "Search" | "Social" | "Telemarketing" | "TV" | "Video" | "Virtual Event";
export type Channels = Array<Channel>;
export type ClientToken = string;

export type ClosedLostReason = "Customer Deficiency" | "Delay / Cancellation of Project" | "Legal / Tax / Regulatory" | "Lost to Competitor - Google" | "Lost to Competitor - Microsoft" | "Lost to Competitor - SoftLayer" | "Lost to Competitor - VMWare" | "Lost to Competitor - Other" | "No Opportunity" | "On Premises Deployment" | "Partner Gap" | "Price" | "Security / Compliance" | "Technical Limitations" | "Customer Experience" | "Other" | "People/Relationship/Governance" | "Product/Technology" | "Financial/Commercial";
export type CompanyName = string;

export type CompanyWebsiteUrl = string;

export type CompetitorName = "Oracle Cloud" | "On-Prem" | "Co-location" | "Akamai" | "AliCloud" | "Google Cloud Platform" | "IBM Softlayer" | "Microsoft Azure" | "Other- Cost Optimization" | "No Competition" | "*Other";
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
export type CountryCode = "US" | "AF" | "AX" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BQ" | "BA" | "BW" | "BV" | "BR" | "IO" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CG" | "CK" | "CR" | "CI" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CD" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "VA" | "HN" | "HK" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "KI" | "KR" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "AN" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "RE" | "RO" | "RU" | "RW" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "ST" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SZ" | "SE" | "CH" | "SY" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "UM" | "UY" | "UZ" | "VU" | "VE" | "VN" | "VG" | "VI" | "WF" | "EH" | "YE" | "ZM" | "ZW";
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
  Tags?: Array<Tag>;
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
export type CurrencyCode = "USD" | "EUR" | "GBP" | "AUD" | "CAD" | "CNY" | "NZD" | "INR" | "JPY" | "CHF" | "SEK" | "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CDF" | "CHE" | "CHW" | "CLF" | "CLP" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "FJD" | "FKP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USN" | "UYI" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XDR" | "XOF" | "XPF" | "XSU" | "XUA" | "YER" | "ZAR" | "ZMW" | "ZWL";
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
export type DeliveryModel = "SaaS or PaaS" | "BYOL or AMI" | "Managed Services" | "Professional Services" | "Resell" | "Other";
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

export type EngagementContextPayload = (_EngagementContextPayload & { CustomerProject: CustomerProjectsContext });
export type EngagementContexts = Array<EngagementContextDetails>;
export type EngagementContextType = "CustomerProject";
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
export type EngagementInvitationPayloadType = "OpportunityInvitation";
export type EngagementInvitationsPayloadType = Array<EngagementInvitationPayloadType>;
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
export type EngagementResourceAssociationSummaryList = Array<EngagementResourceAssociationSummary>;
export type EngagementScore = "High" | "Medium" | "Low";
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
export type Industry = "Aerospace" | "Agriculture" | "Automotive" | "Computers and Electronics" | "Consumer Goods" | "Education" | "Energy - Oil and Gas" | "Energy - Power and Utilities" | "Financial Services" | "Gaming" | "Government" | "Healthcare" | "Hospitality" | "Life Sciences" | "Manufacturing" | "Marketing and Advertising" | "Media and Entertainment" | "Mining" | "Non-Profit Organization" | "Professional Services" | "Real Estate and Construction" | "Retail" | "Software and Internet" | "Telecommunications" | "Transportation and Logistics" | "Travel" | "Wholesale and Distribution" | "Other";
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
export type InvolvementTypeChangeReason = "Expansion Opportunity" | "Change in Deal Information" | "Customer Requested" | "Technical Complexity" | "Risk Mitigation";
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
export type ListEngagementByAcceptingInvitationTaskSummaries = Array<ListEngagementByAcceptingInvitationTaskSummary>;
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
export type ListEngagementFromOpportunityTaskSummaries = Array<ListEngagementFromOpportunityTaskSummary>;
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
export type ListTasksSortName = "StartTime";
export interface Marketing {
  CampaignName?: string;
  Source?: MarketingSource;
  UseCases?: Array<string>;
  Channels?: Array<Channel>;
  AwsFundingUsed?: AwsFundingUsed;
}
export type MarketingSource = "Marketing Activity" | "None";
export type MemberCompanyName = string;

export type MemberPageSize = number;

export interface MonetaryValue {
  Amount: string;
  CurrencyCode: CurrencyCode;
}
export type Name = string;

export type NationalSecurity = "Yes" | "No";
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
export type OpportunityEngagementInvitationSortName = "InvitationDate";
export type OpportunityIdentifier = string;

export type OpportunityIdentifiers = Array<string>;
export interface OpportunityInvitationPayload {
  SenderContacts?: Array<SenderContact>;
  ReceiverResponsibilities: Array<ReceiverResponsibility>;
  Customer: EngagementCustomer;
  Project: ProjectDetails;
}
export type OpportunityOrigin = "AWS Referral" | "Partner Referral";
export interface OpportunitySort {
  SortOrder: SortOrder;
  SortBy: OpportunitySortName;
}
export type OpportunitySortName = "LastModifiedDate" | "Identifier" | "CustomerCompanyName";
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
export type OpportunityType = "Net New Business" | "Flat Renewal" | "Expansion";
export type PageSize = number;

export type ParticipantType = "SENDER" | "RECEIVER";
export type PartnerOpportunityTeamMembersList = Array<Contact>;
interface _Payload {
  OpportunityInvitation?: OpportunityInvitationPayload;
}

export type Payload = (_Payload & { OpportunityInvitation: OpportunityInvitationPayload });
export type PaymentFrequency = "Monthly";
export type PhoneNumber = string;

export type PiiString = string;

export type PrimaryNeedFromAws = "Co-Sell - Architectural Validation" | "Co-Sell - Business Presentation" | "Co-Sell - Competitive Information" | "Co-Sell - Pricing Assistance" | "Co-Sell - Technical Consultation" | "Co-Sell - Total Cost of Ownership Evaluation" | "Co-Sell - Deal Support" | "Co-Sell - Support for Public Tender / RFx";
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
export type ReasonCode = "InvitationAccessDenied" | "InvitationValidationFailed" | "EngagementAccessDenied" | "OpportunityAccessDenied" | "ResourceSnapshotJobAccessDenied" | "ResourceSnapshotJobValidationFailed" | "ResourceSnapshotJobConflict" | "EngagementValidationFailed" | "EngagementConflict" | "OpportunitySubmissionFailed" | "EngagementInvitationConflict" | "InternalError" | "OpportunityValidationFailed" | "OpportunityConflict" | "ResourceSnapshotAccessDenied" | "ResourceSnapshotValidationFailed" | "ResourceSnapshotConflict" | "ServiceQuotaExceeded" | "RequestThrottled";
interface _Receiver {
  Account?: AccountReceiver;
}

export type Receiver = (_Receiver & { Account: AccountReceiver });
export type ReceiverResponsibility = "Distributor" | "Reseller" | "Hardware Partner" | "Managed Service Provider" | "Software Partner" | "Services Partner" | "Training Partner" | "Co-Sell Facilitator" | "Facilitator";
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
export type RelatedEntityType = "Solutions" | "AwsProducts" | "AwsMarketplaceOffers";
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

export type ResourceSnapshotJobStatus = "Running" | "Stopped";
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

export type ResourceSnapshotPayload = (_ResourceSnapshotPayload & { OpportunitySummary: OpportunitySummaryView });
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

export type ResourceType = "Opportunity";
export type RevenueModel = "Contract" | "Pay-as-you-go" | "Subscription";
export type ReviewStatus = "Pending Submission" | "Submitted" | "In review" | "Approved" | "Rejected" | "Action Required";
export type SalesActivities = Array<SalesActivity>;
export type SalesActivity = "Initialized discussions with customer" | "Customer has shown interest in solution" | "Conducted POC / Demo" | "In evaluation / planning stage" | "Agreed on solution to Business Problem" | "Completed Action Plan" | "Finalized Deployment Need" | "SOW Signed";
export type SalesInvolvementType = "For Visibility Only" | "Co-Sell";
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
export type SolutionSortName = "Identifier" | "Name" | "Status" | "Category" | "CreatedDate";
export type SolutionStatus = "Active" | "Inactive" | "Draft";
export type SortBy = "CreatedDate";
export interface SortObject {
  SortBy?: SortBy;
  SortOrder?: SortOrder;
}
export type SortOrder = "ASCENDING" | "DESCENDING";
export type Stage = "Prospect" | "Qualified" | "Technical Validation" | "Business Validation" | "Committed" | "Launched" | "Closed Lost";
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
export interface TagResourceResponse {
}
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
export interface UntagResourceResponse {
}
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
export type ValidationExceptionErrorCode = "REQUIRED_FIELD_MISSING" | "INVALID_ENUM_VALUE" | "INVALID_STRING_FORMAT" | "INVALID_VALUE" | "TOO_MANY_VALUES" | "INVALID_RESOURCE_STATE" | "DUPLICATE_KEY_VALUE" | "VALUE_OUT_OF_RANGE" | "ACTION_NOT_PERMITTED";
export type ValidationExceptionErrorList = Array<ValidationExceptionError>;
export type ValidationExceptionReason = "REQUEST_VALIDATION_FAILED" | "BUSINESS_VALIDATION_FAILED";
export type Visibility = "Full" | "Limited";
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

export declare namespace AcceptEngagementInvitation {
  export type Input = AcceptEngagementInvitationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssignOpportunity {
  export type Input = AssignOpportunityRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateOpportunity {
  export type Input = AssociateOpportunityRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateEngagement {
  export type Input = CreateEngagementRequest;
  export type Output = CreateEngagementResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateEngagementInvitation {
  export type Input = CreateEngagementInvitationRequest;
  export type Output = CreateEngagementInvitationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateOpportunity {
  export type Input = CreateOpportunityRequest;
  export type Output = CreateOpportunityResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateResourceSnapshot {
  export type Input = CreateResourceSnapshotRequest;
  export type Output = CreateResourceSnapshotResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateResourceSnapshotJob {
  export type Input = CreateResourceSnapshotJobRequest;
  export type Output = CreateResourceSnapshotJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourceSnapshotJob {
  export type Input = DeleteResourceSnapshotJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateOpportunity {
  export type Input = DisassociateOpportunityRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAwsOpportunitySummary {
  export type Input = GetAwsOpportunitySummaryRequest;
  export type Output = GetAwsOpportunitySummaryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEngagement {
  export type Input = GetEngagementRequest;
  export type Output = GetEngagementResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEngagementInvitation {
  export type Input = GetEngagementInvitationRequest;
  export type Output = GetEngagementInvitationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOpportunity {
  export type Input = GetOpportunityRequest;
  export type Output = GetOpportunityResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourceSnapshot {
  export type Input = GetResourceSnapshotRequest;
  export type Output = GetResourceSnapshotResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourceSnapshotJob {
  export type Input = GetResourceSnapshotJobRequest;
  export type Output = GetResourceSnapshotJobResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEngagementByAcceptingInvitationTasks {
  export type Input = ListEngagementByAcceptingInvitationTasksRequest;
  export type Output = ListEngagementByAcceptingInvitationTasksResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEngagementFromOpportunityTasks {
  export type Input = ListEngagementFromOpportunityTasksRequest;
  export type Output = ListEngagementFromOpportunityTasksResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEngagementInvitations {
  export type Input = ListEngagementInvitationsRequest;
  export type Output = ListEngagementInvitationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEngagementMembers {
  export type Input = ListEngagementMembersRequest;
  export type Output = ListEngagementMembersResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEngagementResourceAssociations {
  export type Input = ListEngagementResourceAssociationsRequest;
  export type Output = ListEngagementResourceAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEngagements {
  export type Input = ListEngagementsRequest;
  export type Output = ListEngagementsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOpportunities {
  export type Input = ListOpportunitiesRequest;
  export type Output = ListOpportunitiesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceSnapshotJobs {
  export type Input = ListResourceSnapshotJobsRequest;
  export type Output = ListResourceSnapshotJobsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceSnapshots {
  export type Input = ListResourceSnapshotsRequest;
  export type Output = ListResourceSnapshotsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSolutions {
  export type Input = ListSolutionsRequest;
  export type Output = ListSolutionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RejectEngagementInvitation {
  export type Input = RejectEngagementInvitationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartEngagementByAcceptingInvitationTask {
  export type Input = StartEngagementByAcceptingInvitationTaskRequest;
  export type Output = StartEngagementByAcceptingInvitationTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartEngagementFromOpportunityTask {
  export type Input = StartEngagementFromOpportunityTaskRequest;
  export type Output = StartEngagementFromOpportunityTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartResourceSnapshotJob {
  export type Input = StartResourceSnapshotJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopResourceSnapshotJob {
  export type Input = StopResourceSnapshotJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SubmitOpportunity {
  export type Input = SubmitOpportunityRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOpportunity {
  export type Input = UpdateOpportunityRequest;
  export type Output = UpdateOpportunityResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type PartnerCentralSellingErrors = AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError;


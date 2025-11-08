import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | ThrottlingException | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class LicenseManager extends AWSServiceClient {
  acceptGrant(
    input: AcceptGrantRequest,
  ): Effect.Effect<
    AcceptGrantResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  checkInLicense(
    input: CheckInLicenseRequest,
  ): Effect.Effect<
    CheckInLicenseResponse,
    AccessDeniedException | AuthorizationException | ConflictException | InvalidParameterValueException | RateLimitExceededException | ResourceNotFoundException | ServerInternalException | ValidationException | CommonAwsError
  >;
  checkoutBorrowLicense(
    input: CheckoutBorrowLicenseRequest,
  ): Effect.Effect<
    CheckoutBorrowLicenseResponse,
    AccessDeniedException | AuthorizationException | EntitlementNotAllowedException | InvalidParameterValueException | NoEntitlementsAllowedException | RateLimitExceededException | RedirectException | ResourceNotFoundException | ServerInternalException | UnsupportedDigitalSignatureMethodException | ValidationException | CommonAwsError
  >;
  checkoutLicense(
    input: CheckoutLicenseRequest,
  ): Effect.Effect<
    CheckoutLicenseResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | NoEntitlementsAllowedException | RateLimitExceededException | RedirectException | ResourceNotFoundException | ServerInternalException | UnsupportedDigitalSignatureMethodException | ValidationException | CommonAwsError
  >;
  createGrant(
    input: CreateGrantRequest,
  ): Effect.Effect<
    CreateGrantResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  createGrantVersion(
    input: CreateGrantVersionRequest,
  ): Effect.Effect<
    CreateGrantVersionResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  createLicense(
    input: CreateLicenseRequest,
  ): Effect.Effect<
    CreateLicenseResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | RedirectException | ServerInternalException | ValidationException | CommonAwsError
  >;
  createLicenseConfiguration(
    input: CreateLicenseConfigurationRequest,
  ): Effect.Effect<
    CreateLicenseConfigurationResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ServerInternalException | CommonAwsError
  >;
  createLicenseConversionTaskForResource(
    input: CreateLicenseConversionTaskForResourceRequest,
  ): Effect.Effect<
    CreateLicenseConversionTaskForResourceResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  createLicenseManagerReportGenerator(
    input: CreateLicenseManagerReportGeneratorRequest,
  ): Effect.Effect<
    CreateLicenseManagerReportGeneratorResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ResourceNotFoundException | ServerInternalException | ValidationException | CommonAwsError
  >;
  createLicenseVersion(
    input: CreateLicenseVersionRequest,
  ): Effect.Effect<
    CreateLicenseVersionResponse,
    AccessDeniedException | AuthorizationException | ConflictException | RateLimitExceededException | RedirectException | ResourceNotFoundException | ServerInternalException | ValidationException | CommonAwsError
  >;
  createToken(
    input: CreateTokenRequest,
  ): Effect.Effect<
    CreateTokenResponse,
    AccessDeniedException | AuthorizationException | RateLimitExceededException | RedirectException | ResourceLimitExceededException | ResourceNotFoundException | ServerInternalException | ValidationException | CommonAwsError
  >;
  deleteGrant(
    input: DeleteGrantRequest,
  ): Effect.Effect<
    DeleteGrantResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  deleteLicense(
    input: DeleteLicenseRequest,
  ): Effect.Effect<
    DeleteLicenseResponse,
    AccessDeniedException | AuthorizationException | ConflictException | InvalidParameterValueException | RateLimitExceededException | RedirectException | ServerInternalException | ValidationException | CommonAwsError
  >;
  deleteLicenseConfiguration(
    input: DeleteLicenseConfigurationRequest,
  ): Effect.Effect<
    DeleteLicenseConfigurationResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  deleteLicenseManagerReportGenerator(
    input: DeleteLicenseManagerReportGeneratorRequest,
  ): Effect.Effect<
    DeleteLicenseManagerReportGeneratorResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ResourceNotFoundException | ServerInternalException | ValidationException | CommonAwsError
  >;
  deleteToken(
    input: DeleteTokenRequest,
  ): Effect.Effect<
    DeleteTokenResponse,
    AccessDeniedException | AuthorizationException | RateLimitExceededException | RedirectException | ResourceNotFoundException | ServerInternalException | ValidationException | CommonAwsError
  >;
  extendLicenseConsumption(
    input: ExtendLicenseConsumptionRequest,
  ): Effect.Effect<
    ExtendLicenseConsumptionResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceNotFoundException | ServerInternalException | ValidationException | CommonAwsError
  >;
  getAccessToken(
    input: GetAccessTokenRequest,
  ): Effect.Effect<
    GetAccessTokenResponse,
    AccessDeniedException | AuthorizationException | RateLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  getGrant(
    input: GetGrantRequest,
  ): Effect.Effect<
    GetGrantResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  getLicense(
    input: GetLicenseRequest,
  ): Effect.Effect<
    GetLicenseResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  getLicenseConfiguration(
    input: GetLicenseConfigurationRequest,
  ): Effect.Effect<
    GetLicenseConfigurationResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  getLicenseConversionTask(
    input: GetLicenseConversionTaskRequest,
  ): Effect.Effect<
    GetLicenseConversionTaskResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  getLicenseManagerReportGenerator(
    input: GetLicenseManagerReportGeneratorRequest,
  ): Effect.Effect<
    GetLicenseManagerReportGeneratorResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ResourceNotFoundException | ServerInternalException | ValidationException | CommonAwsError
  >;
  getLicenseUsage(
    input: GetLicenseUsageRequest,
  ): Effect.Effect<
    GetLicenseUsageResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  getServiceSettings(
    input: GetServiceSettingsRequest,
  ): Effect.Effect<
    GetServiceSettingsResponse,
    AccessDeniedException | AuthorizationException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  listAssociationsForLicenseConfiguration(
    input: ListAssociationsForLicenseConfigurationRequest,
  ): Effect.Effect<
    ListAssociationsForLicenseConfigurationResponse,
    AccessDeniedException | AuthorizationException | FilterLimitExceededException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  listDistributedGrants(
    input: ListDistributedGrantsRequest,
  ): Effect.Effect<
    ListDistributedGrantsResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  listFailuresForLicenseConfigurationOperations(
    input: ListFailuresForLicenseConfigurationOperationsRequest,
  ): Effect.Effect<
    ListFailuresForLicenseConfigurationOperationsResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  listLicenseConfigurations(
    input: ListLicenseConfigurationsRequest,
  ): Effect.Effect<
    ListLicenseConfigurationsResponse,
    AccessDeniedException | AuthorizationException | FilterLimitExceededException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  listLicenseConversionTasks(
    input: ListLicenseConversionTasksRequest,
  ): Effect.Effect<
    ListLicenseConversionTasksResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  listLicenseManagerReportGenerators(
    input: ListLicenseManagerReportGeneratorsRequest,
  ): Effect.Effect<
    ListLicenseManagerReportGeneratorsResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ResourceNotFoundException | ServerInternalException | ValidationException | CommonAwsError
  >;
  listLicenses(
    input: ListLicensesRequest,
  ): Effect.Effect<
    ListLicensesResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  listLicenseSpecificationsForResource(
    input: ListLicenseSpecificationsForResourceRequest,
  ): Effect.Effect<
    ListLicenseSpecificationsForResourceResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  listLicenseVersions(
    input: ListLicenseVersionsRequest,
  ): Effect.Effect<
    ListLicenseVersionsResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  listReceivedGrants(
    input: ListReceivedGrantsRequest,
  ): Effect.Effect<
    ListReceivedGrantsResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  listReceivedGrantsForOrganization(
    input: ListReceivedGrantsForOrganizationRequest,
  ): Effect.Effect<
    ListReceivedGrantsForOrganizationResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  listReceivedLicenses(
    input: ListReceivedLicensesRequest,
  ): Effect.Effect<
    ListReceivedLicensesResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  listReceivedLicensesForOrganization(
    input: ListReceivedLicensesForOrganizationRequest,
  ): Effect.Effect<
    ListReceivedLicensesForOrganizationResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  listResourceInventory(
    input: ListResourceInventoryRequest,
  ): Effect.Effect<
    ListResourceInventoryResponse,
    AccessDeniedException | AuthorizationException | FailedDependencyException | FilterLimitExceededException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  listTokens(
    input: ListTokensRequest,
  ): Effect.Effect<
    ListTokensResponse,
    AccessDeniedException | AuthorizationException | RateLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  listUsageForLicenseConfiguration(
    input: ListUsageForLicenseConfigurationRequest,
  ): Effect.Effect<
    ListUsageForLicenseConfigurationResponse,
    AccessDeniedException | AuthorizationException | FilterLimitExceededException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  rejectGrant(
    input: RejectGrantRequest,
  ): Effect.Effect<
    RejectGrantResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ServerInternalException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  updateLicenseConfiguration(
    input: UpdateLicenseConfigurationRequest,
  ): Effect.Effect<
    UpdateLicenseConfigurationResponse,
    AccessDeniedException | AuthorizationException | ConflictException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ServerInternalException | CommonAwsError
  >;
  updateLicenseManagerReportGenerator(
    input: UpdateLicenseManagerReportGeneratorRequest,
  ): Effect.Effect<
    UpdateLicenseManagerReportGeneratorResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ResourceLimitExceededException | ResourceNotFoundException | ServerInternalException | ValidationException | CommonAwsError
  >;
  updateLicenseSpecificationsForResource(
    input: UpdateLicenseSpecificationsForResourceRequest,
  ): Effect.Effect<
    UpdateLicenseSpecificationsForResourceResponse,
    AccessDeniedException | AuthorizationException | ConflictException | InvalidParameterValueException | InvalidResourceStateException | LicenseUsageException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
  updateServiceSettings(
    input: UpdateServiceSettingsRequest,
  ): Effect.Effect<
    UpdateServiceSettingsResponse,
    AccessDeniedException | AuthorizationException | InvalidParameterValueException | RateLimitExceededException | ServerInternalException | CommonAwsError
  >;
}

export interface AcceptGrantRequest {
  GrantArn: string;
}
export interface AcceptGrantResponse {
  GrantArn?: string;
  Status?: GrantStatus;
  Version?: string;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type ActivationOverrideBehavior = "DISTRIBUTED_GRANTS_ONLY" | "ALL_GRANTS_PERMITTED_BY_ISSUER";
export type AllowedOperation = "CreateGrant" | "CheckoutLicense" | "CheckoutBorrowLicense" | "CheckInLicense" | "ExtendConsumptionLicense" | "ListPurchasedLicenses" | "CreateToken";
export type AllowedOperationList = Array<AllowedOperation>;
export type Arn = string;

export type ArnList = Array<string>;
export declare class AuthorizationException extends EffectData.TaggedError(
  "AuthorizationException",
)<{
  readonly Message?: string;
}> {}
export interface AutomatedDiscoveryInformation {
  LastRunTime?: Date | string;
}
export type LicenseManagerBoolean = boolean;

export interface BorrowConfiguration {
  AllowEarlyCheckIn: boolean;
  MaxTimeToLiveInMinutes: number;
}
export type BoxBoolean = boolean;

export type BoxInteger = number;

export type BoxLong = number;

export interface CheckInLicenseRequest {
  LicenseConsumptionToken: string;
  Beneficiary?: string;
}
export interface CheckInLicenseResponse {
}
export interface CheckoutBorrowLicenseRequest {
  LicenseArn: string;
  Entitlements: Array<EntitlementData>;
  DigitalSignatureMethod: DigitalSignatureMethod;
  NodeId?: string;
  CheckoutMetadata?: Array<Metadata>;
  ClientToken: string;
}
export interface CheckoutBorrowLicenseResponse {
  LicenseArn?: string;
  LicenseConsumptionToken?: string;
  EntitlementsAllowed?: Array<EntitlementData>;
  NodeId?: string;
  SignedToken?: string;
  IssuedAt?: string;
  Expiration?: string;
  CheckoutMetadata?: Array<Metadata>;
}
export interface CheckoutLicenseRequest {
  ProductSKU: string;
  CheckoutType: CheckoutType;
  KeyFingerprint: string;
  Entitlements: Array<EntitlementData>;
  ClientToken: string;
  Beneficiary?: string;
  NodeId?: string;
}
export interface CheckoutLicenseResponse {
  CheckoutType?: CheckoutType;
  LicenseConsumptionToken?: string;
  EntitlementsAllowed?: Array<EntitlementData>;
  SignedToken?: string;
  NodeId?: string;
  IssuedAt?: string;
  Expiration?: string;
  LicenseArn?: string;
}
export type CheckoutType = "PROVISIONAL" | "PERPETUAL";
export type ClientRequestToken = string;

export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface ConsumedLicenseSummary {
  ResourceType?: ResourceType;
  ConsumedLicenses?: number;
}
export type ConsumedLicenseSummaryList = Array<ConsumedLicenseSummary>;
export interface ConsumptionConfiguration {
  RenewType?: RenewType;
  ProvisionalConfiguration?: ProvisionalConfiguration;
  BorrowConfiguration?: BorrowConfiguration;
}
export interface CreateGrantRequest {
  ClientToken: string;
  GrantName: string;
  LicenseArn: string;
  Principals: Array<string>;
  HomeRegion: string;
  AllowedOperations: Array<AllowedOperation>;
  Tags?: Array<Tag>;
}
export interface CreateGrantResponse {
  GrantArn?: string;
  Status?: GrantStatus;
  Version?: string;
}
export interface CreateGrantVersionRequest {
  ClientToken: string;
  GrantArn: string;
  GrantName?: string;
  AllowedOperations?: Array<AllowedOperation>;
  Status?: GrantStatus;
  StatusReason?: string;
  SourceVersion?: string;
  Options?: Options;
}
export interface CreateGrantVersionResponse {
  GrantArn?: string;
  Status?: GrantStatus;
  Version?: string;
}
export interface CreateLicenseConfigurationRequest {
  Name: string;
  Description?: string;
  LicenseCountingType: LicenseCountingType;
  LicenseCount?: number;
  LicenseCountHardLimit?: boolean;
  LicenseRules?: Array<string>;
  Tags?: Array<Tag>;
  DisassociateWhenNotFound?: boolean;
  ProductInformationList?: Array<ProductInformation>;
}
export interface CreateLicenseConfigurationResponse {
  LicenseConfigurationArn?: string;
}
export interface CreateLicenseConversionTaskForResourceRequest {
  ResourceArn: string;
  SourceLicenseContext: LicenseConversionContext;
  DestinationLicenseContext: LicenseConversionContext;
}
export interface CreateLicenseConversionTaskForResourceResponse {
  LicenseConversionTaskId?: string;
}
export interface CreateLicenseManagerReportGeneratorRequest {
  ReportGeneratorName: string;
  Type: Array<ReportType>;
  ReportContext: ReportContext;
  ReportFrequency: ReportFrequency;
  ClientToken: string;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface CreateLicenseManagerReportGeneratorResponse {
  LicenseManagerReportGeneratorArn?: string;
}
export interface CreateLicenseRequest {
  LicenseName: string;
  ProductName: string;
  ProductSKU: string;
  Issuer: Issuer;
  HomeRegion: string;
  Validity: DatetimeRange;
  Entitlements: Array<Entitlement>;
  Beneficiary: string;
  ConsumptionConfiguration: ConsumptionConfiguration;
  LicenseMetadata?: Array<Metadata>;
  ClientToken: string;
  Tags?: Array<Tag>;
}
export interface CreateLicenseResponse {
  LicenseArn?: string;
  Status?: LicenseStatus;
  Version?: string;
}
export interface CreateLicenseVersionRequest {
  LicenseArn: string;
  LicenseName: string;
  ProductName: string;
  Issuer: Issuer;
  HomeRegion: string;
  Validity: DatetimeRange;
  LicenseMetadata?: Array<Metadata>;
  Entitlements: Array<Entitlement>;
  ConsumptionConfiguration: ConsumptionConfiguration;
  Status: LicenseStatus;
  ClientToken: string;
  SourceVersion?: string;
}
export interface CreateLicenseVersionResponse {
  LicenseArn?: string;
  Version?: string;
  Status?: LicenseStatus;
}
export interface CreateTokenRequest {
  LicenseArn: string;
  RoleArns?: Array<string>;
  ExpirationInDays?: number;
  TokenProperties?: Array<string>;
  ClientToken: string;
}
export interface CreateTokenResponse {
  TokenId?: string;
  TokenType?: TokenType;
  Token?: string;
}
export type DateTime = Date | string;

export interface DatetimeRange {
  Begin: string;
  End?: string;
}
export interface DeleteGrantRequest {
  GrantArn: string;
  StatusReason?: string;
  Version: string;
}
export interface DeleteGrantResponse {
  GrantArn?: string;
  Status?: GrantStatus;
  Version?: string;
}
export interface DeleteLicenseConfigurationRequest {
  LicenseConfigurationArn: string;
}
export interface DeleteLicenseConfigurationResponse {
}
export interface DeleteLicenseManagerReportGeneratorRequest {
  LicenseManagerReportGeneratorArn: string;
}
export interface DeleteLicenseManagerReportGeneratorResponse {
}
export interface DeleteLicenseRequest {
  LicenseArn: string;
  SourceVersion: string;
}
export interface DeleteLicenseResponse {
  Status?: LicenseDeletionStatus;
  DeletionDate?: string;
}
export interface DeleteTokenRequest {
  TokenId: string;
}
export interface DeleteTokenResponse {
}
export type DigitalSignatureMethod = "JWT_PS384";
export interface Entitlement {
  Name: string;
  Value?: string;
  MaxCount?: number;
  Overage?: boolean;
  Unit: EntitlementUnit;
  AllowCheckIn?: boolean;
}
export interface EntitlementData {
  Name: string;
  Value?: string;
  Unit: EntitlementDataUnit;
}
export type EntitlementDataList = Array<EntitlementData>;
export type EntitlementDataUnit = "Count" | "None" | "Seconds" | "Microseconds" | "Milliseconds" | "Bytes" | "Kilobytes" | "Megabytes" | "Gigabytes" | "Terabytes" | "Bits" | "Kilobits" | "Megabits" | "Gigabits" | "Terabits" | "Percent" | "Bytes/Second" | "Kilobytes/Second" | "Megabytes/Second" | "Gigabytes/Second" | "Terabytes/Second" | "Bits/Second" | "Kilobits/Second" | "Megabits/Second" | "Gigabits/Second" | "Terabits/Second" | "Count/Second";
export type EntitlementList = Array<Entitlement>;
export declare class EntitlementNotAllowedException extends EffectData.TaggedError(
  "EntitlementNotAllowedException",
)<{
  readonly Message?: string;
}> {}
export type EntitlementUnit = "Count" | "None" | "Seconds" | "Microseconds" | "Milliseconds" | "Bytes" | "Kilobytes" | "Megabytes" | "Gigabytes" | "Terabytes" | "Bits" | "Kilobits" | "Megabits" | "Gigabits" | "Terabits" | "Percent" | "Bytes/Second" | "Kilobytes/Second" | "Megabytes/Second" | "Gigabytes/Second" | "Terabytes/Second" | "Bits/Second" | "Kilobits/Second" | "Megabits/Second" | "Gigabits/Second" | "Terabits/Second" | "Count/Second";
export interface EntitlementUsage {
  Name: string;
  ConsumedValue: string;
  MaxCount?: string;
  Unit: EntitlementDataUnit;
}
export type EntitlementUsageList = Array<EntitlementUsage>;
export interface ExtendLicenseConsumptionRequest {
  LicenseConsumptionToken: string;
  DryRun?: boolean;
}
export interface ExtendLicenseConsumptionResponse {
  LicenseConsumptionToken?: string;
  Expiration?: string;
}
export declare class FailedDependencyException extends EffectData.TaggedError(
  "FailedDependencyException",
)<{
  readonly Message?: string;
  readonly ErrorCode?: string;
}> {}
export interface Filter {
  Name?: string;
  Values?: Array<string>;
}
export declare class FilterLimitExceededException extends EffectData.TaggedError(
  "FilterLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type FilterList = Array<Filter>;
export type FilterName = string;

export type Filters = Array<Filter>;
export type FilterValue = string;

export type FilterValues = Array<string>;
export interface GetAccessTokenRequest {
  Token: string;
  TokenProperties?: Array<string>;
}
export interface GetAccessTokenResponse {
  AccessToken?: string;
}
export interface GetGrantRequest {
  GrantArn: string;
  Version?: string;
}
export interface GetGrantResponse {
  Grant?: Grant;
}
export interface GetLicenseConfigurationRequest {
  LicenseConfigurationArn: string;
}
export interface GetLicenseConfigurationResponse {
  LicenseConfigurationId?: string;
  LicenseConfigurationArn?: string;
  Name?: string;
  Description?: string;
  LicenseCountingType?: LicenseCountingType;
  LicenseRules?: Array<string>;
  LicenseCount?: number;
  LicenseCountHardLimit?: boolean;
  ConsumedLicenses?: number;
  Status?: string;
  OwnerAccountId?: string;
  ConsumedLicenseSummaryList?: Array<ConsumedLicenseSummary>;
  ManagedResourceSummaryList?: Array<ManagedResourceSummary>;
  Tags?: Array<Tag>;
  ProductInformationList?: Array<ProductInformation>;
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
  DisassociateWhenNotFound?: boolean;
}
export interface GetLicenseConversionTaskRequest {
  LicenseConversionTaskId: string;
}
export interface GetLicenseConversionTaskResponse {
  LicenseConversionTaskId?: string;
  ResourceArn?: string;
  SourceLicenseContext?: LicenseConversionContext;
  DestinationLicenseContext?: LicenseConversionContext;
  StatusMessage?: string;
  Status?: LicenseConversionTaskStatus;
  StartTime?: Date | string;
  LicenseConversionTime?: Date | string;
  EndTime?: Date | string;
}
export interface GetLicenseManagerReportGeneratorRequest {
  LicenseManagerReportGeneratorArn: string;
}
export interface GetLicenseManagerReportGeneratorResponse {
  ReportGenerator?: ReportGenerator;
}
export interface GetLicenseRequest {
  LicenseArn: string;
  Version?: string;
}
export interface GetLicenseResponse {
  License?: License;
}
export interface GetLicenseUsageRequest {
  LicenseArn: string;
}
export interface GetLicenseUsageResponse {
  LicenseUsage?: LicenseUsage;
}
export interface GetServiceSettingsRequest {
}
export interface GetServiceSettingsResponse {
  S3BucketArn?: string;
  SnsTopicArn?: string;
  OrganizationConfiguration?: OrganizationConfiguration;
  EnableCrossAccountsDiscovery?: boolean;
  LicenseManagerResourceShareArn?: string;
}
export interface Grant {
  GrantArn: string;
  GrantName: string;
  ParentArn: string;
  LicenseArn: string;
  GranteePrincipalArn: string;
  HomeRegion: string;
  GrantStatus: GrantStatus;
  StatusReason?: string;
  Version: string;
  GrantedOperations: Array<AllowedOperation>;
  Options?: Options;
}
export interface GrantedLicense {
  LicenseArn?: string;
  LicenseName?: string;
  ProductName?: string;
  ProductSKU?: string;
  Issuer?: IssuerDetails;
  HomeRegion?: string;
  Status?: LicenseStatus;
  Validity?: DatetimeRange;
  Beneficiary?: string;
  Entitlements?: Array<Entitlement>;
  ConsumptionConfiguration?: ConsumptionConfiguration;
  LicenseMetadata?: Array<Metadata>;
  CreateTime?: string;
  Version?: string;
  ReceivedMetadata?: ReceivedMetadata;
}
export type GrantedLicenseList = Array<GrantedLicense>;
export type GrantList = Array<Grant>;
export type GrantStatus = "PENDING_WORKFLOW" | "PENDING_ACCEPT" | "REJECTED" | "ACTIVE" | "FAILED_WORKFLOW" | "DELETED" | "PENDING_DELETE" | "DISABLED" | "WORKFLOW_COMPLETED";
export type Integer = number;

export declare class InvalidParameterValueException extends EffectData.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidResourceStateException extends EffectData.TaggedError(
  "InvalidResourceStateException",
)<{
  readonly Message?: string;
}> {}
export interface InventoryFilter {
  Name: string;
  Condition: InventoryFilterCondition;
  Value?: string;
}
export type InventoryFilterCondition = "EQUALS" | "NOT_EQUALS" | "BEGINS_WITH" | "CONTAINS";
export type InventoryFilterList = Array<InventoryFilter>;
export type ISO8601DateTime = string;

export interface Issuer {
  Name: string;
  SignKey?: string;
}
export interface IssuerDetails {
  Name?: string;
  SignKey?: string;
  KeyFingerprint?: string;
}
export interface License {
  LicenseArn?: string;
  LicenseName?: string;
  ProductName?: string;
  ProductSKU?: string;
  Issuer?: IssuerDetails;
  HomeRegion?: string;
  Status?: LicenseStatus;
  Validity?: DatetimeRange;
  Beneficiary?: string;
  Entitlements?: Array<Entitlement>;
  ConsumptionConfiguration?: ConsumptionConfiguration;
  LicenseMetadata?: Array<Metadata>;
  CreateTime?: string;
  Version?: string;
}
export interface LicenseConfiguration {
  LicenseConfigurationId?: string;
  LicenseConfigurationArn?: string;
  Name?: string;
  Description?: string;
  LicenseCountingType?: LicenseCountingType;
  LicenseRules?: Array<string>;
  LicenseCount?: number;
  LicenseCountHardLimit?: boolean;
  DisassociateWhenNotFound?: boolean;
  ConsumedLicenses?: number;
  Status?: string;
  OwnerAccountId?: string;
  ConsumedLicenseSummaryList?: Array<ConsumedLicenseSummary>;
  ManagedResourceSummaryList?: Array<ManagedResourceSummary>;
  ProductInformationList?: Array<ProductInformation>;
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
}
export interface LicenseConfigurationAssociation {
  ResourceArn?: string;
  ResourceType?: ResourceType;
  ResourceOwnerId?: string;
  AssociationTime?: Date | string;
  AmiAssociationScope?: string;
}
export type LicenseConfigurationAssociations = Array<LicenseConfigurationAssociation>;
export type LicenseConfigurations = Array<LicenseConfiguration>;
export type LicenseConfigurationStatus = "AVAILABLE" | "DISABLED";
export interface LicenseConfigurationUsage {
  ResourceArn?: string;
  ResourceType?: ResourceType;
  ResourceStatus?: string;
  ResourceOwnerId?: string;
  AssociationTime?: Date | string;
  ConsumedLicenses?: number;
}
export type LicenseConfigurationUsageList = Array<LicenseConfigurationUsage>;
export interface LicenseConversionContext {
  UsageOperation?: string;
  ProductCodes?: Array<ProductCodeListItem>;
}
export interface LicenseConversionTask {
  LicenseConversionTaskId?: string;
  ResourceArn?: string;
  SourceLicenseContext?: LicenseConversionContext;
  DestinationLicenseContext?: LicenseConversionContext;
  Status?: LicenseConversionTaskStatus;
  StatusMessage?: string;
  StartTime?: Date | string;
  LicenseConversionTime?: Date | string;
  EndTime?: Date | string;
}
export type LicenseConversionTaskId = string;

export type LicenseConversionTasks = Array<LicenseConversionTask>;
export type LicenseConversionTaskStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED";
export type LicenseCountingType = "vCPU" | "Instance" | "Core" | "Socket";
export type LicenseDeletionStatus = "PENDING_DELETE" | "DELETED";
export type LicenseList = Array<License>;
export interface LicenseOperationFailure {
  ResourceArn?: string;
  ResourceType?: ResourceType;
  ErrorMessage?: string;
  FailureTime?: Date | string;
  OperationName?: string;
  ResourceOwnerId?: string;
  OperationRequestedBy?: string;
  MetadataList?: Array<Metadata>;
}
export type LicenseOperationFailureList = Array<LicenseOperationFailure>;
export interface LicenseSpecification {
  LicenseConfigurationArn: string;
  AmiAssociationScope?: string;
}
export type LicenseSpecifications = Array<LicenseSpecification>;
export type LicenseStatus = "AVAILABLE" | "PENDING_AVAILABLE" | "DEACTIVATED" | "SUSPENDED" | "EXPIRED" | "PENDING_DELETE" | "DELETED";
export interface LicenseUsage {
  EntitlementUsages?: Array<EntitlementUsage>;
}
export declare class LicenseUsageException extends EffectData.TaggedError(
  "LicenseUsageException",
)<{
  readonly Message?: string;
}> {}
export interface ListAssociationsForLicenseConfigurationRequest {
  LicenseConfigurationArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAssociationsForLicenseConfigurationResponse {
  LicenseConfigurationAssociations?: Array<LicenseConfigurationAssociation>;
  NextToken?: string;
}
export interface ListDistributedGrantsRequest {
  GrantArns?: Array<string>;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDistributedGrantsResponse {
  Grants?: Array<Grant>;
  NextToken?: string;
}
export interface ListFailuresForLicenseConfigurationOperationsRequest {
  LicenseConfigurationArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFailuresForLicenseConfigurationOperationsResponse {
  LicenseOperationFailureList?: Array<LicenseOperationFailure>;
  NextToken?: string;
}
export interface ListLicenseConfigurationsRequest {
  LicenseConfigurationArns?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface ListLicenseConfigurationsResponse {
  LicenseConfigurations?: Array<LicenseConfiguration>;
  NextToken?: string;
}
export interface ListLicenseConversionTasksRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface ListLicenseConversionTasksResponse {
  LicenseConversionTasks?: Array<LicenseConversionTask>;
  NextToken?: string;
}
export interface ListLicenseManagerReportGeneratorsRequest {
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListLicenseManagerReportGeneratorsResponse {
  ReportGenerators?: Array<ReportGenerator>;
  NextToken?: string;
}
export interface ListLicenseSpecificationsForResourceRequest {
  ResourceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListLicenseSpecificationsForResourceResponse {
  LicenseSpecifications?: Array<LicenseSpecification>;
  NextToken?: string;
}
export interface ListLicensesRequest {
  LicenseArns?: Array<string>;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListLicensesResponse {
  Licenses?: Array<License>;
  NextToken?: string;
}
export interface ListLicenseVersionsRequest {
  LicenseArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListLicenseVersionsResponse {
  Licenses?: Array<License>;
  NextToken?: string;
}
export interface ListReceivedGrantsForOrganizationRequest {
  LicenseArn: string;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListReceivedGrantsForOrganizationResponse {
  Grants?: Array<Grant>;
  NextToken?: string;
}
export interface ListReceivedGrantsRequest {
  GrantArns?: Array<string>;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListReceivedGrantsResponse {
  Grants?: Array<Grant>;
  NextToken?: string;
}
export interface ListReceivedLicensesForOrganizationRequest {
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListReceivedLicensesForOrganizationResponse {
  Licenses?: Array<GrantedLicense>;
  NextToken?: string;
}
export interface ListReceivedLicensesRequest {
  LicenseArns?: Array<string>;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListReceivedLicensesResponse {
  Licenses?: Array<GrantedLicense>;
  NextToken?: string;
}
export interface ListResourceInventoryRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<InventoryFilter>;
}
export interface ListResourceInventoryResponse {
  ResourceInventoryList?: Array<ResourceInventory>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListTokensRequest {
  TokenIds?: Array<string>;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTokensResponse {
  Tokens?: Array<TokenData>;
  NextToken?: string;
}
export interface ListUsageForLicenseConfigurationRequest {
  LicenseConfigurationArn: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface ListUsageForLicenseConfigurationResponse {
  LicenseConfigurationUsageList?: Array<LicenseConfigurationUsage>;
  NextToken?: string;
}
export type Location = string;

export type Long = number;

export interface ManagedResourceSummary {
  ResourceType?: ResourceType;
  AssociationCount?: number;
}
export type ManagedResourceSummaryList = Array<ManagedResourceSummary>;
export type MaxSize100 = number;

export type MaxSize3StringList = Array<string>;
export type Message = string;

export interface Metadata {
  Name?: string;
  Value?: string;
}
export type MetadataList = Array<Metadata>;
export declare class NoEntitlementsAllowedException extends EffectData.TaggedError(
  "NoEntitlementsAllowedException",
)<{
  readonly Message?: string;
}> {}
export interface Options {
  ActivationOverrideBehavior?: ActivationOverrideBehavior;
}
export interface OrganizationConfiguration {
  EnableIntegration: boolean;
}
export type PrincipalArnList = Array<string>;
export type ProductCodeId = string;

export type ProductCodeList = Array<ProductCodeListItem>;
export interface ProductCodeListItem {
  ProductCodeId: string;
  ProductCodeType: ProductCodeType;
}
export type ProductCodeType = "marketplace";
export interface ProductInformation {
  ResourceType: string;
  ProductInformationFilterList: Array<ProductInformationFilter>;
}
export interface ProductInformationFilter {
  ProductInformationFilterName: string;
  ProductInformationFilterValue?: Array<string>;
  ProductInformationFilterComparator: string;
}
export type ProductInformationFilterList = Array<ProductInformationFilter>;
export type ProductInformationList = Array<ProductInformation>;
export interface ProvisionalConfiguration {
  MaxTimeToLiveInMinutes: number;
}
export declare class RateLimitExceededException extends EffectData.TaggedError(
  "RateLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ReceivedMetadata {
  ReceivedStatus?: ReceivedStatus;
  ReceivedStatusReason?: string;
  AllowedOperations?: Array<AllowedOperation>;
}
export type ReceivedStatus = "PENDING_WORKFLOW" | "PENDING_ACCEPT" | "REJECTED" | "ACTIVE" | "FAILED_WORKFLOW" | "DELETED" | "DISABLED" | "WORKFLOW_COMPLETED";
export declare class RedirectException extends EffectData.TaggedError(
  "RedirectException",
)<{
  readonly Location?: string;
  readonly Message?: string;
}> {}
export interface RejectGrantRequest {
  GrantArn: string;
}
export interface RejectGrantResponse {
  GrantArn?: string;
  Status?: GrantStatus;
  Version?: string;
}
export type RenewType = "None" | "Weekly" | "Monthly";
export interface ReportContext {
  licenseConfigurationArns: Array<string>;
}
export interface ReportFrequency {
  value?: number;
  period?: ReportFrequencyType;
}
export type ReportFrequencyType = "DAY" | "WEEK" | "MONTH";
export interface ReportGenerator {
  ReportGeneratorName?: string;
  ReportType?: Array<ReportType>;
  ReportContext?: ReportContext;
  ReportFrequency?: ReportFrequency;
  LicenseManagerReportGeneratorArn?: string;
  LastRunStatus?: string;
  LastRunFailureReason?: string;
  LastReportGenerationTime?: string;
  ReportCreatorAccount?: string;
  Description?: string;
  S3Location?: S3Location;
  CreateTime?: string;
  Tags?: Array<Tag>;
}
export type ReportGeneratorList = Array<ReportGenerator>;
export type ReportGeneratorName = string;

export type ReportType = "LicenseConfigurationSummaryReport" | "LicenseConfigurationUsageReport";
export type ReportTypeList = Array<ReportType>;
export interface ResourceInventory {
  ResourceId?: string;
  ResourceType?: ResourceType;
  ResourceArn?: string;
  Platform?: string;
  PlatformVersion?: string;
  ResourceOwningAccountId?: string;
}
export type ResourceInventoryList = Array<ResourceInventory>;
export declare class ResourceLimitExceededException extends EffectData.TaggedError(
  "ResourceLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourceType = "EC2_INSTANCE" | "EC2_HOST" | "EC2_AMI" | "RDS" | "SYSTEMS_MANAGER_MANAGED_INSTANCE";
export interface S3Location {
  bucket?: string;
  keyPrefix?: string;
}
export declare class ServerInternalException extends EffectData.TaggedError(
  "ServerInternalException",
)<{
  readonly Message?: string;
}> {}
export type SignedToken = string;

export type StatusReasonMessage = string;

export type LicenseManagerString = string;

export type StringList = Array<string>;
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export interface TokenData {
  TokenId?: string;
  TokenType?: string;
  LicenseArn?: string;
  ExpirationTime?: string;
  TokenProperties?: Array<string>;
  RoleArns?: Array<string>;
  Status?: string;
}
export type TokenList = Array<TokenData>;
export type TokenString = string;

export type TokenType = "REFRESH_TOKEN";
export declare class UnsupportedDigitalSignatureMethodException extends EffectData.TaggedError(
  "UnsupportedDigitalSignatureMethodException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateLicenseConfigurationRequest {
  LicenseConfigurationArn: string;
  LicenseConfigurationStatus?: LicenseConfigurationStatus;
  LicenseRules?: Array<string>;
  LicenseCount?: number;
  LicenseCountHardLimit?: boolean;
  Name?: string;
  Description?: string;
  ProductInformationList?: Array<ProductInformation>;
  DisassociateWhenNotFound?: boolean;
}
export interface UpdateLicenseConfigurationResponse {
}
export interface UpdateLicenseManagerReportGeneratorRequest {
  LicenseManagerReportGeneratorArn: string;
  ReportGeneratorName: string;
  Type: Array<ReportType>;
  ReportContext: ReportContext;
  ReportFrequency: ReportFrequency;
  ClientToken: string;
  Description?: string;
}
export interface UpdateLicenseManagerReportGeneratorResponse {
}
export interface UpdateLicenseSpecificationsForResourceRequest {
  ResourceArn: string;
  AddLicenseSpecifications?: Array<LicenseSpecification>;
  RemoveLicenseSpecifications?: Array<LicenseSpecification>;
}
export interface UpdateLicenseSpecificationsForResourceResponse {
}
export interface UpdateServiceSettingsRequest {
  S3BucketArn?: string;
  SnsTopicArn?: string;
  OrganizationConfiguration?: OrganizationConfiguration;
  EnableCrossAccountsDiscovery?: boolean;
}
export interface UpdateServiceSettingsResponse {
}
export type UsageOperation = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace AcceptGrant {
  export type Input = AcceptGrantRequest;
  export type Output = AcceptGrantResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CheckInLicense {
  export type Input = CheckInLicenseRequest;
  export type Output = CheckInLicenseResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | ConflictException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceNotFoundException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CheckoutBorrowLicense {
  export type Input = CheckoutBorrowLicenseRequest;
  export type Output = CheckoutBorrowLicenseResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | EntitlementNotAllowedException
    | InvalidParameterValueException
    | NoEntitlementsAllowedException
    | RateLimitExceededException
    | RedirectException
    | ResourceNotFoundException
    | ServerInternalException
    | UnsupportedDigitalSignatureMethodException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CheckoutLicense {
  export type Input = CheckoutLicenseRequest;
  export type Output = CheckoutLicenseResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | NoEntitlementsAllowedException
    | RateLimitExceededException
    | RedirectException
    | ResourceNotFoundException
    | ServerInternalException
    | UnsupportedDigitalSignatureMethodException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGrant {
  export type Input = CreateGrantRequest;
  export type Output = CreateGrantResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGrantVersion {
  export type Input = CreateGrantVersionRequest;
  export type Output = CreateGrantVersionResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLicense {
  export type Input = CreateLicenseRequest;
  export type Output = CreateLicenseResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | RedirectException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLicenseConfiguration {
  export type Input = CreateLicenseConfigurationRequest;
  export type Output = CreateLicenseConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace CreateLicenseConversionTaskForResource {
  export type Input = CreateLicenseConversionTaskForResourceRequest;
  export type Output = CreateLicenseConversionTaskForResourceResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLicenseManagerReportGenerator {
  export type Input = CreateLicenseManagerReportGeneratorRequest;
  export type Output = CreateLicenseManagerReportGeneratorResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLicenseVersion {
  export type Input = CreateLicenseVersionRequest;
  export type Output = CreateLicenseVersionResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | ConflictException
    | RateLimitExceededException
    | RedirectException
    | ResourceNotFoundException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateToken {
  export type Input = CreateTokenRequest;
  export type Output = CreateTokenResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | RateLimitExceededException
    | RedirectException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGrant {
  export type Input = DeleteGrantRequest;
  export type Output = DeleteGrantResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLicense {
  export type Input = DeleteLicenseRequest;
  export type Output = DeleteLicenseResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | ConflictException
    | InvalidParameterValueException
    | RateLimitExceededException
    | RedirectException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLicenseConfiguration {
  export type Input = DeleteLicenseConfigurationRequest;
  export type Output = DeleteLicenseConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace DeleteLicenseManagerReportGenerator {
  export type Input = DeleteLicenseManagerReportGeneratorRequest;
  export type Output = DeleteLicenseManagerReportGeneratorResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteToken {
  export type Input = DeleteTokenRequest;
  export type Output = DeleteTokenResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | RateLimitExceededException
    | RedirectException
    | ResourceNotFoundException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ExtendLicenseConsumption {
  export type Input = ExtendLicenseConsumptionRequest;
  export type Output = ExtendLicenseConsumptionResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceNotFoundException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAccessToken {
  export type Input = GetAccessTokenRequest;
  export type Output = GetAccessTokenResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | RateLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGrant {
  export type Input = GetGrantRequest;
  export type Output = GetGrantResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLicense {
  export type Input = GetLicenseRequest;
  export type Output = GetLicenseResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLicenseConfiguration {
  export type Input = GetLicenseConfigurationRequest;
  export type Output = GetLicenseConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace GetLicenseConversionTask {
  export type Input = GetLicenseConversionTaskRequest;
  export type Output = GetLicenseConversionTaskResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace GetLicenseManagerReportGenerator {
  export type Input = GetLicenseManagerReportGeneratorRequest;
  export type Output = GetLicenseManagerReportGeneratorResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLicenseUsage {
  export type Input = GetLicenseUsageRequest;
  export type Output = GetLicenseUsageResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServiceSettings {
  export type Input = GetServiceSettingsRequest;
  export type Output = GetServiceSettingsResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace ListAssociationsForLicenseConfiguration {
  export type Input = ListAssociationsForLicenseConfigurationRequest;
  export type Output = ListAssociationsForLicenseConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | FilterLimitExceededException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace ListDistributedGrants {
  export type Input = ListDistributedGrantsRequest;
  export type Output = ListDistributedGrantsResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFailuresForLicenseConfigurationOperations {
  export type Input = ListFailuresForLicenseConfigurationOperationsRequest;
  export type Output = ListFailuresForLicenseConfigurationOperationsResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace ListLicenseConfigurations {
  export type Input = ListLicenseConfigurationsRequest;
  export type Output = ListLicenseConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | FilterLimitExceededException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace ListLicenseConversionTasks {
  export type Input = ListLicenseConversionTasksRequest;
  export type Output = ListLicenseConversionTasksResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace ListLicenseManagerReportGenerators {
  export type Input = ListLicenseManagerReportGeneratorsRequest;
  export type Output = ListLicenseManagerReportGeneratorsResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLicenses {
  export type Input = ListLicensesRequest;
  export type Output = ListLicensesResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLicenseSpecificationsForResource {
  export type Input = ListLicenseSpecificationsForResourceRequest;
  export type Output = ListLicenseSpecificationsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace ListLicenseVersions {
  export type Input = ListLicenseVersionsRequest;
  export type Output = ListLicenseVersionsResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace ListReceivedGrants {
  export type Input = ListReceivedGrantsRequest;
  export type Output = ListReceivedGrantsResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListReceivedGrantsForOrganization {
  export type Input = ListReceivedGrantsForOrganizationRequest;
  export type Output = ListReceivedGrantsForOrganizationResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListReceivedLicenses {
  export type Input = ListReceivedLicensesRequest;
  export type Output = ListReceivedLicensesResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListReceivedLicensesForOrganization {
  export type Input = ListReceivedLicensesForOrganizationRequest;
  export type Output = ListReceivedLicensesForOrganizationResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceInventory {
  export type Input = ListResourceInventoryRequest;
  export type Output = ListResourceInventoryResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | FailedDependencyException
    | FilterLimitExceededException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace ListTokens {
  export type Input = ListTokensRequest;
  export type Output = ListTokensResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | RateLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListUsageForLicenseConfiguration {
  export type Input = ListUsageForLicenseConfigurationRequest;
  export type Output = ListUsageForLicenseConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | FilterLimitExceededException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace RejectGrant {
  export type Input = RejectGrantRequest;
  export type Output = RejectGrantResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace UpdateLicenseConfiguration {
  export type Input = UpdateLicenseConfigurationRequest;
  export type Output = UpdateLicenseConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | ConflictException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace UpdateLicenseManagerReportGenerator {
  export type Input = UpdateLicenseManagerReportGeneratorRequest;
  export type Output = UpdateLicenseManagerReportGeneratorResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServerInternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLicenseSpecificationsForResource {
  export type Input = UpdateLicenseSpecificationsForResourceRequest;
  export type Output = UpdateLicenseSpecificationsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | ConflictException
    | InvalidParameterValueException
    | InvalidResourceStateException
    | LicenseUsageException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}

export declare namespace UpdateServiceSettings {
  export type Input = UpdateServiceSettingsRequest;
  export type Output = UpdateServiceSettingsResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationException
    | InvalidParameterValueException
    | RateLimitExceededException
    | ServerInternalException
    | CommonAwsError;
}


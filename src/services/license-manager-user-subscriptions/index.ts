import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class LicenseManagerUserSubscriptions extends AWSServiceClient {
  associateUser(
    input: AssociateUserRequest,
  ): Effect.Effect<
    AssociateUserResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createLicenseServerEndpoint(
    input: CreateLicenseServerEndpointRequest,
  ): Effect.Effect<
    CreateLicenseServerEndpointResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteLicenseServerEndpoint(
    input: DeleteLicenseServerEndpointRequest,
  ): Effect.Effect<
    DeleteLicenseServerEndpointResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deregisterIdentityProvider(
    input: DeregisterIdentityProviderRequest,
  ): Effect.Effect<
    DeregisterIdentityProviderResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateUser(
    input: DisassociateUserRequest,
  ): Effect.Effect<
    DisassociateUserResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listIdentityProviders(
    input: ListIdentityProvidersRequest,
  ): Effect.Effect<
    ListIdentityProvidersResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInstances(
    input: ListInstancesRequest,
  ): Effect.Effect<
    ListInstancesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLicenseServerEndpoints(
    input: ListLicenseServerEndpointsRequest,
  ): Effect.Effect<
    ListLicenseServerEndpointsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProductSubscriptions(
    input: ListProductSubscriptionsRequest,
  ): Effect.Effect<
    ListProductSubscriptionsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listUserAssociations(
    input: ListUserAssociationsRequest,
  ): Effect.Effect<
    ListUserAssociationsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  registerIdentityProvider(
    input: RegisterIdentityProviderRequest,
  ): Effect.Effect<
    RegisterIdentityProviderResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startProductSubscription(
    input: StartProductSubscriptionRequest,
  ): Effect.Effect<
    StartProductSubscriptionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopProductSubscription(
    input: StopProductSubscriptionRequest,
  ): Effect.Effect<
    StopProductSubscriptionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  updateIdentityProviderSettings(
    input: UpdateIdentityProviderSettingsRequest,
  ): Effect.Effect<
    UpdateIdentityProviderSettingsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface ActiveDirectoryIdentityProvider {
  DirectoryId?: string;
  ActiveDirectorySettings?: ActiveDirectorySettings;
  ActiveDirectoryType?: string;
}
export interface ActiveDirectorySettings {
  DomainName?: string;
  DomainIpv4List?: Array<string>;
  DomainCredentialsProvider?: CredentialsProvider;
  DomainNetworkSettings?: DomainNetworkSettings;
}
export type ActiveDirectoryType = string;

export type Arn = string;

export interface AssociateUserRequest {
  Username: string;
  InstanceId: string;
  IdentityProvider: IdentityProvider;
  Domain?: string;
  Tags?: Record<string, string>;
}
export interface AssociateUserResponse {
  InstanceUserSummary: InstanceUserSummary;
}
export type BoxInteger = number;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateLicenseServerEndpointRequest {
  IdentityProviderArn: string;
  LicenseServerSettings: LicenseServerSettings;
  Tags?: Record<string, string>;
}
export interface CreateLicenseServerEndpointResponse {
  IdentityProviderArn?: string;
  LicenseServerEndpointArn?: string;
}
interface _CredentialsProvider {
  SecretsManagerCredentialsProvider?: SecretsManagerCredentialsProvider;
}

export type CredentialsProvider = _CredentialsProvider & {
  SecretsManagerCredentialsProvider: SecretsManagerCredentialsProvider;
};
export interface DeleteLicenseServerEndpointRequest {
  LicenseServerEndpointArn: string;
  ServerType: string;
}
export interface DeleteLicenseServerEndpointResponse {
  LicenseServerEndpoint?: LicenseServerEndpoint;
}
export interface DeregisterIdentityProviderRequest {
  IdentityProvider?: IdentityProvider;
  Product?: string;
  IdentityProviderArn?: string;
}
export interface DeregisterIdentityProviderResponse {
  IdentityProviderSummary: IdentityProviderSummary;
}
export type Directory = string;

export interface DisassociateUserRequest {
  Username?: string;
  InstanceId?: string;
  IdentityProvider?: IdentityProvider;
  InstanceUserArn?: string;
  Domain?: string;
}
export interface DisassociateUserResponse {
  InstanceUserSummary: InstanceUserSummary;
}
export interface DomainNetworkSettings {
  Subnets: Array<string>;
}
export interface Filter {
  Attribute?: string;
  Operation?: string;
  Value?: string;
}
export type FilterList = Array<Filter>;
interface _IdentityProvider {
  ActiveDirectoryIdentityProvider?: ActiveDirectoryIdentityProvider;
}

export type IdentityProvider = _IdentityProvider & {
  ActiveDirectoryIdentityProvider: ActiveDirectoryIdentityProvider;
};
export interface IdentityProviderSummary {
  IdentityProvider: IdentityProvider;
  Settings: Settings;
  Product: string;
  Status: string;
  IdentityProviderArn?: string;
  FailureMessage?: string;
}
export type IdentityProviderSummaryList = Array<IdentityProviderSummary>;
export interface InstanceSummary {
  InstanceId: string;
  Status: string;
  Products: Array<string>;
  LastStatusCheckDate?: string;
  StatusMessage?: string;
}
export type InstanceSummaryList = Array<InstanceSummary>;
export interface InstanceUserSummary {
  Username: string;
  InstanceId: string;
  IdentityProvider: IdentityProvider;
  Status: string;
  InstanceUserArn?: string;
  StatusMessage?: string;
  Domain?: string;
  AssociationDate?: string;
  DisassociationDate?: string;
}
export type InstanceUserSummaryList = Array<InstanceUserSummary>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type IpV4 = string;

export type IpV4List = Array<string>;
export interface LicenseServer {
  ProvisioningStatus?: string;
  HealthStatus?: string;
  Ipv4Address?: string;
}
export interface LicenseServerEndpoint {
  IdentityProviderArn?: string;
  ServerType?: string;
  ServerEndpoint?: ServerEndpoint;
  StatusMessage?: string;
  LicenseServerEndpointId?: string;
  LicenseServerEndpointArn?: string;
  LicenseServerEndpointProvisioningStatus?: string;
  LicenseServers?: Array<LicenseServer>;
  CreationTime?: Date | string;
}
export type LicenseServerEndpointId = string;

export type LicenseServerEndpointList = Array<LicenseServerEndpoint>;
export type LicenseServerEndpointProvisioningStatus = string;

export type LicenseServerHealthStatus = string;

export type LicenseServerList = Array<LicenseServer>;
export interface LicenseServerSettings {
  ServerType: string;
  ServerSettings: ServerSettings;
}
export interface ListIdentityProvidersRequest {
  MaxResults?: number;
  Filters?: Array<Filter>;
  NextToken?: string;
}
export interface ListIdentityProvidersResponse {
  IdentityProviderSummaries: Array<IdentityProviderSummary>;
  NextToken?: string;
}
export interface ListInstancesRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface ListInstancesResponse {
  InstanceSummaries?: Array<InstanceSummary>;
  NextToken?: string;
}
export interface ListLicenseServerEndpointsRequest {
  MaxResults?: number;
  Filters?: Array<Filter>;
  NextToken?: string;
}
export interface ListLicenseServerEndpointsResponse {
  LicenseServerEndpoints?: Array<LicenseServerEndpoint>;
  NextToken?: string;
}
export interface ListProductSubscriptionsRequest {
  Product?: string;
  IdentityProvider: IdentityProvider;
  MaxResults?: number;
  Filters?: Array<Filter>;
  NextToken?: string;
}
export interface ListProductSubscriptionsResponse {
  ProductUserSummaries?: Array<ProductUserSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface ListUserAssociationsRequest {
  InstanceId: string;
  IdentityProvider: IdentityProvider;
  MaxResults?: number;
  Filters?: Array<Filter>;
  NextToken?: string;
}
export interface ListUserAssociationsResponse {
  InstanceUserSummaries?: Array<InstanceUserSummary>;
  NextToken?: string;
}
export interface ProductUserSummary {
  Username: string;
  Product: string;
  IdentityProvider: IdentityProvider;
  Status: string;
  ProductUserArn?: string;
  StatusMessage?: string;
  Domain?: string;
  SubscriptionStartDate?: string;
  SubscriptionEndDate?: string;
}
export type ProductUserSummaryList = Array<ProductUserSummary>;
export interface RdsSalSettings {
  RdsSalCredentialsProvider: CredentialsProvider;
}
export interface RegisterIdentityProviderRequest {
  IdentityProvider: IdentityProvider;
  Product: string;
  Settings?: Settings;
  Tags?: Record<string, string>;
}
export interface RegisterIdentityProviderResponse {
  IdentityProviderSummary: IdentityProviderSummary;
}
export type ResourceArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface SecretsManagerCredentialsProvider {
  SecretId?: string;
}
export type SecurityGroup = string;

export interface ServerEndpoint {
  Endpoint?: string;
}
interface _ServerSettings {
  RdsSalSettings?: RdsSalSettings;
}

export type ServerSettings = _ServerSettings & {
  RdsSalSettings: RdsSalSettings;
};
export type ServerType = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface Settings {
  Subnets: Array<string>;
  SecurityGroupId: string;
}
export interface StartProductSubscriptionRequest {
  Username: string;
  IdentityProvider: IdentityProvider;
  Product: string;
  Domain?: string;
  Tags?: Record<string, string>;
}
export interface StartProductSubscriptionResponse {
  ProductUserSummary: ProductUserSummary;
}
export interface StopProductSubscriptionRequest {
  Username?: string;
  IdentityProvider?: IdentityProvider;
  Product?: string;
  ProductUserArn?: string;
  Domain?: string;
}
export interface StopProductSubscriptionResponse {
  ProductUserSummary: ProductUserSummary;
}
export type StringList = Array<string>;
export type Subnet = string;

export type Subnets = Array<string>;
export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateIdentityProviderSettingsRequest {
  IdentityProvider?: IdentityProvider;
  Product?: string;
  IdentityProviderArn?: string;
  UpdateSettings: UpdateSettings;
}
export interface UpdateIdentityProviderSettingsResponse {
  IdentityProviderSummary: IdentityProviderSummary;
}
export interface UpdateSettings {
  AddSubnets: Array<string>;
  RemoveSubnets: Array<string>;
  SecurityGroupId?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace AssociateUser {
  export type Input = AssociateUserRequest;
  export type Output = AssociateUserResponse;
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

export declare namespace CreateLicenseServerEndpoint {
  export type Input = CreateLicenseServerEndpointRequest;
  export type Output = CreateLicenseServerEndpointResponse;
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

export declare namespace DeleteLicenseServerEndpoint {
  export type Input = DeleteLicenseServerEndpointRequest;
  export type Output = DeleteLicenseServerEndpointResponse;
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

export declare namespace DeregisterIdentityProvider {
  export type Input = DeregisterIdentityProviderRequest;
  export type Output = DeregisterIdentityProviderResponse;
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

export declare namespace DisassociateUser {
  export type Input = DisassociateUserRequest;
  export type Output = DisassociateUserResponse;
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

export declare namespace ListIdentityProviders {
  export type Input = ListIdentityProvidersRequest;
  export type Output = ListIdentityProvidersResponse;
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

export declare namespace ListInstances {
  export type Input = ListInstancesRequest;
  export type Output = ListInstancesResponse;
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

export declare namespace ListLicenseServerEndpoints {
  export type Input = ListLicenseServerEndpointsRequest;
  export type Output = ListLicenseServerEndpointsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProductSubscriptions {
  export type Input = ListProductSubscriptionsRequest;
  export type Output = ListProductSubscriptionsResponse;
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

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListUserAssociations {
  export type Input = ListUserAssociationsRequest;
  export type Output = ListUserAssociationsResponse;
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

export declare namespace RegisterIdentityProvider {
  export type Input = RegisterIdentityProviderRequest;
  export type Output = RegisterIdentityProviderResponse;
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

export declare namespace StartProductSubscription {
  export type Input = StartProductSubscriptionRequest;
  export type Output = StartProductSubscriptionResponse;
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

export declare namespace StopProductSubscription {
  export type Input = StopProductSubscriptionRequest;
  export type Output = StopProductSubscriptionResponse;
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

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateIdentityProviderSettings {
  export type Input = UpdateIdentityProviderSettingsRequest;
  export type Output = UpdateIdentityProviderSettingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

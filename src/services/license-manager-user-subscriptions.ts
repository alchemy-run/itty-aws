import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class DeleteLicenseServerEndpointRequest extends S.Class<DeleteLicenseServerEndpointRequest>("DeleteLicenseServerEndpointRequest")({LicenseServerEndpointArn: S.String, ServerType: S.String}) {}
export const IpV4List = S.Array(S.String);
export const IpV6List = S.Array(S.String);
export class SecretsManagerCredentialsProvider extends S.Class<SecretsManagerCredentialsProvider>("SecretsManagerCredentialsProvider")({SecretId: S.optional(S.String)}) {}
export const CredentialsProvider = S.Union(SecretsManagerCredentialsProvider);
export const Subnets = S.Array(S.String);
export class DomainNetworkSettings extends S.Class<DomainNetworkSettings>("DomainNetworkSettings")({Subnets: Subnets}) {}
export class ActiveDirectorySettings extends S.Class<ActiveDirectorySettings>("ActiveDirectorySettings")({DomainName: S.optional(S.String), DomainIpv4List: S.optional(IpV4List), DomainIpv6List: S.optional(IpV6List), DomainCredentialsProvider: S.optional(CredentialsProvider), DomainNetworkSettings: S.optional(DomainNetworkSettings)}) {}
export class ActiveDirectoryIdentityProvider extends S.Class<ActiveDirectoryIdentityProvider>("ActiveDirectoryIdentityProvider")({DirectoryId: S.optional(S.String), ActiveDirectorySettings: S.optional(ActiveDirectorySettings), ActiveDirectoryType: S.optional(S.String), IsSharedActiveDirectory: S.optional(S.Boolean)}) {}
export const IdentityProvider = S.Union(ActiveDirectoryIdentityProvider);
export class DeregisterIdentityProviderRequest extends S.Class<DeregisterIdentityProviderRequest>("DeregisterIdentityProviderRequest")({IdentityProvider: S.optional(IdentityProvider), Product: S.optional(S.String), IdentityProviderArn: S.optional(S.String)}) {}
export class DisassociateUserRequest extends S.Class<DisassociateUserRequest>("DisassociateUserRequest")({Username: S.optional(S.String), InstanceId: S.optional(S.String), IdentityProvider: S.optional(IdentityProvider), InstanceUserArn: S.optional(S.String), Domain: S.optional(S.String)}) {}
export class Filter extends S.Class<Filter>("Filter")({Attribute: S.optional(S.String), Operation: S.optional(S.String), Value: S.optional(S.String)}) {}
export const FilterList = S.Array(Filter);
export class ListInstancesRequest extends S.Class<ListInstancesRequest>("ListInstancesRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Filters: S.optional(FilterList)}) {}
export class ListLicenseServerEndpointsRequest extends S.Class<ListLicenseServerEndpointsRequest>("ListLicenseServerEndpointsRequest")({MaxResults: S.optional(S.Number), Filters: S.optional(FilterList), NextToken: S.optional(S.String)}) {}
export class ListProductSubscriptionsRequest extends S.Class<ListProductSubscriptionsRequest>("ListProductSubscriptionsRequest")({Product: S.optional(S.String), IdentityProvider: IdentityProvider, MaxResults: S.optional(S.Number), Filters: S.optional(FilterList), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class ListUserAssociationsRequest extends S.Class<ListUserAssociationsRequest>("ListUserAssociationsRequest")({InstanceId: S.String, IdentityProvider: IdentityProvider, MaxResults: S.optional(S.Number), Filters: S.optional(FilterList), NextToken: S.optional(S.String)}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class StartProductSubscriptionRequest extends S.Class<StartProductSubscriptionRequest>("StartProductSubscriptionRequest")({Username: S.String, IdentityProvider: IdentityProvider, Product: S.String, Domain: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class StopProductSubscriptionRequest extends S.Class<StopProductSubscriptionRequest>("StopProductSubscriptionRequest")({Username: S.optional(S.String), IdentityProvider: S.optional(IdentityProvider), Product: S.optional(S.String), ProductUserArn: S.optional(S.String), Domain: S.optional(S.String)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class ServerEndpoint extends S.Class<ServerEndpoint>("ServerEndpoint")({Endpoint: S.optional(S.String)}) {}
export class LicenseServer extends S.Class<LicenseServer>("LicenseServer")({ProvisioningStatus: S.optional(S.String), HealthStatus: S.optional(S.String), Ipv4Address: S.optional(S.String), Ipv6Address: S.optional(S.String)}) {}
export const LicenseServerList = S.Array(LicenseServer);
export class LicenseServerEndpoint extends S.Class<LicenseServerEndpoint>("LicenseServerEndpoint")({IdentityProviderArn: S.optional(S.String), ServerType: S.optional(S.String), ServerEndpoint: S.optional(ServerEndpoint), StatusMessage: S.optional(S.String), LicenseServerEndpointId: S.optional(S.String), LicenseServerEndpointArn: S.optional(S.String), LicenseServerEndpointProvisioningStatus: S.optional(S.String), LicenseServers: S.optional(LicenseServerList), CreationTime: S.optional(S.Date)}) {}
export const LicenseServerEndpointList = S.Array(LicenseServerEndpoint);
export class InstanceUserSummary extends S.Class<InstanceUserSummary>("InstanceUserSummary")({Username: S.String, InstanceId: S.String, IdentityProvider: IdentityProvider, Status: S.String, InstanceUserArn: S.optional(S.String), StatusMessage: S.optional(S.String), Domain: S.optional(S.String), AssociationDate: S.optional(S.String), DisassociationDate: S.optional(S.String)}) {}
export const InstanceUserSummaryList = S.Array(InstanceUserSummary);
export class Settings extends S.Class<Settings>("Settings")({Subnets: Subnets, SecurityGroupId: S.String}) {}
export class UpdateSettings extends S.Class<UpdateSettings>("UpdateSettings")({AddSubnets: Subnets, RemoveSubnets: Subnets, SecurityGroupId: S.optional(S.String)}) {}
export class ListIdentityProvidersRequest extends S.Class<ListIdentityProvidersRequest>("ListIdentityProvidersRequest")({MaxResults: S.optional(S.Number), Filters: S.optional(FilterList), NextToken: S.optional(S.String)}) {}
export class ListLicenseServerEndpointsResponse extends S.Class<ListLicenseServerEndpointsResponse>("ListLicenseServerEndpointsResponse")({LicenseServerEndpoints: S.optional(LicenseServerEndpointList), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(Tags)}) {}
export class ListUserAssociationsResponse extends S.Class<ListUserAssociationsResponse>("ListUserAssociationsResponse")({InstanceUserSummaries: S.optional(InstanceUserSummaryList), NextToken: S.optional(S.String)}) {}
export class RegisterIdentityProviderRequest extends S.Class<RegisterIdentityProviderRequest>("RegisterIdentityProviderRequest")({IdentityProvider: IdentityProvider, Product: S.String, Settings: S.optional(Settings), Tags: S.optional(Tags)}) {}
export class ProductUserSummary extends S.Class<ProductUserSummary>("ProductUserSummary")({Username: S.String, Product: S.String, IdentityProvider: IdentityProvider, Status: S.String, ProductUserArn: S.optional(S.String), StatusMessage: S.optional(S.String), Domain: S.optional(S.String), SubscriptionStartDate: S.optional(S.String), SubscriptionEndDate: S.optional(S.String)}) {}
export class StartProductSubscriptionResponse extends S.Class<StartProductSubscriptionResponse>("StartProductSubscriptionResponse")({ProductUserSummary: ProductUserSummary}) {}
export class StopProductSubscriptionResponse extends S.Class<StopProductSubscriptionResponse>("StopProductSubscriptionResponse")({ProductUserSummary: ProductUserSummary}) {}
export class UpdateIdentityProviderSettingsRequest extends S.Class<UpdateIdentityProviderSettingsRequest>("UpdateIdentityProviderSettingsRequest")({IdentityProvider: S.optional(IdentityProvider), Product: S.optional(S.String), IdentityProviderArn: S.optional(S.String), UpdateSettings: UpdateSettings}) {}
export const StringList = S.Array(S.String);
export class IdentityProviderSummary extends S.Class<IdentityProviderSummary>("IdentityProviderSummary")({IdentityProvider: IdentityProvider, Settings: Settings, Product: S.String, Status: S.String, IdentityProviderArn: S.optional(S.String), FailureMessage: S.optional(S.String), OwnerAccountId: S.optional(S.String)}) {}
export const IdentityProviderSummaryList = S.Array(IdentityProviderSummary);
export class InstanceSummary extends S.Class<InstanceSummary>("InstanceSummary")({InstanceId: S.String, Status: S.String, Products: StringList, LastStatusCheckDate: S.optional(S.String), StatusMessage: S.optional(S.String), OwnerAccountId: S.optional(S.String), IdentityProvider: S.optional(IdentityProvider)}) {}
export const InstanceSummaryList = S.Array(InstanceSummary);
export const ProductUserSummaryList = S.Array(ProductUserSummary);
export class RdsSalSettings extends S.Class<RdsSalSettings>("RdsSalSettings")({RdsSalCredentialsProvider: CredentialsProvider}) {}
export class DeregisterIdentityProviderResponse extends S.Class<DeregisterIdentityProviderResponse>("DeregisterIdentityProviderResponse")({IdentityProviderSummary: IdentityProviderSummary}) {}
export class DisassociateUserResponse extends S.Class<DisassociateUserResponse>("DisassociateUserResponse")({InstanceUserSummary: InstanceUserSummary}) {}
export class ListIdentityProvidersResponse extends S.Class<ListIdentityProvidersResponse>("ListIdentityProvidersResponse")({IdentityProviderSummaries: IdentityProviderSummaryList, NextToken: S.optional(S.String)}) {}
export class ListInstancesResponse extends S.Class<ListInstancesResponse>("ListInstancesResponse")({InstanceSummaries: S.optional(InstanceSummaryList), NextToken: S.optional(S.String)}) {}
export class ListProductSubscriptionsResponse extends S.Class<ListProductSubscriptionsResponse>("ListProductSubscriptionsResponse")({ProductUserSummaries: S.optional(ProductUserSummaryList), NextToken: S.optional(S.String)}) {}
export class RegisterIdentityProviderResponse extends S.Class<RegisterIdentityProviderResponse>("RegisterIdentityProviderResponse")({IdentityProviderSummary: IdentityProviderSummary}) {}
export class UpdateIdentityProviderSettingsResponse extends S.Class<UpdateIdentityProviderSettingsResponse>("UpdateIdentityProviderSettingsResponse")({IdentityProviderSummary: IdentityProviderSummary}) {}
export const ServerSettings = S.Union(RdsSalSettings);
export class LicenseServerSettings extends S.Class<LicenseServerSettings>("LicenseServerSettings")({ServerType: S.String, ServerSettings: ServerSettings}) {}
export class CreateLicenseServerEndpointRequest extends S.Class<CreateLicenseServerEndpointRequest>("CreateLicenseServerEndpointRequest")({IdentityProviderArn: S.String, LicenseServerSettings: LicenseServerSettings, Tags: S.optional(Tags)}) {}
export class DeleteLicenseServerEndpointResponse extends S.Class<DeleteLicenseServerEndpointResponse>("DeleteLicenseServerEndpointResponse")({LicenseServerEndpoint: S.optional(LicenseServerEndpoint)}) {}
export class CreateLicenseServerEndpointResponse extends S.Class<CreateLicenseServerEndpointResponse>("CreateLicenseServerEndpointResponse")({IdentityProviderArn: S.optional(S.String), LicenseServerEndpointArn: S.optional(S.String)}) {}
export class AssociateUserRequest extends S.Class<AssociateUserRequest>("AssociateUserRequest")({Username: S.String, InstanceId: S.String, IdentityProvider: IdentityProvider, Domain: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class AssociateUserResponse extends S.Class<AssociateUserResponse>("AssociateUserResponse")({InstanceUserSummary: InstanceUserSummary}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};

//# Operations
/**
 * Adds tags to a resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "PUT", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from a resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deregisters the Active Directory identity provider from License Manager user-based subscriptions.
 */export const deregisterIdentityProvider = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/identity-provider/DeregisterIdentityProvider", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.DeregisterIdentityProvider" }, DeregisterIdentityProviderRequest, DeregisterIdentityProviderResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the user from an EC2 instance providing user-based subscriptions.
 */export const disassociateUser = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/user/DisassociateUser", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.DisassociateUser" }, DisassociateUserRequest, DisassociateUserResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Active Directory identity providers for user-based subscriptions.
 */export const listIdentityProviders = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/identity-provider/ListIdentityProviders", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.ListIdentityProviders" }, ListIdentityProvidersRequest, ListIdentityProvidersResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the EC2 instances providing user-based subscriptions.
 */export const listInstances = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/instance/ListInstances", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.ListInstances" }, ListInstancesRequest, ListInstancesResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the Remote Desktop Services (RDS) License Server endpoints
 */export const listLicenseServerEndpoints = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/license-server/ListLicenseServerEndpoints", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.ListLicenseServerEndpoints" }, ListLicenseServerEndpointsRequest, ListLicenseServerEndpointsResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the user-based subscription products available from an identity provider.
 */export const listProductSubscriptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/user/ListProductSubscriptions", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.ListProductSubscriptions" }, ListProductSubscriptionsRequest, ListProductSubscriptionsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the list of tags for the specified resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists user associations for an identity provider.
 */export const listUserAssociations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/user/ListUserAssociations", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.ListUserAssociations" }, ListUserAssociationsRequest, ListUserAssociationsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers an identity provider for user-based subscriptions.
 */export const registerIdentityProvider = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/identity-provider/RegisterIdentityProvider", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.RegisterIdentityProvider" }, RegisterIdentityProviderRequest, RegisterIdentityProviderResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a product subscription for a user with the specified identity provider.
 * 
 * 
 * Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as **Pending** billing status) in Amazon Web Services Billing. For more information, see Viewing your monthly charges in the *Amazon Web Services Billing User Guide*.
 */export const startProductSubscription = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/user/StartProductSubscription", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.StartProductSubscription" }, StartProductSubscriptionRequest, StartProductSubscriptionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops a product subscription for a user with the specified identity provider.
 */export const stopProductSubscription = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/user/StopProductSubscription", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.StopProductSubscription" }, StopProductSubscriptionRequest, StopProductSubscriptionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates additional product configuration settings for the registered identity provider.
 */export const updateIdentityProviderSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/identity-provider/UpdateIdentityProviderSettings", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.UpdateIdentityProviderSettings" }, UpdateIdentityProviderSettingsRequest, UpdateIdentityProviderSettingsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a `LicenseServerEndpoint` resource.
 */export const deleteLicenseServerEndpoint = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/license-server/DeleteLicenseServerEndpoint", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.DeleteLicenseServerEndpoint" }, DeleteLicenseServerEndpointRequest, DeleteLicenseServerEndpointResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a network endpoint for the Remote Desktop Services (RDS) license server.
 */export const createLicenseServerEndpoint = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/license-server/CreateLicenseServerEndpoint", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.CreateLicenseServerEndpoint" }, CreateLicenseServerEndpointRequest, CreateLicenseServerEndpointResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the user to an EC2 instance to utilize user-based subscriptions.
 * 
 * 
 * Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as **Pending** billing status) in Amazon Web Services Billing. For more information, see Viewing your monthly charges in the *Amazon Web Services Billing User Guide*.
 */export const associateUser = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/user/AssociateUser", method: "POST", sdkId: "License Manager User Subscriptions", sigV4ServiceName: "license-manager-user-subscriptions", name: "LicenseManagerUserSubscriptions.AssociateUser" }, AssociateUserRequest, AssociateUserResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

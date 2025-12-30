import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const DeviceTypeList = S.Array(S.String);
export const DeviceModelList = S.Array(S.String);
export const DeviceOperatingSystemList = S.Array(S.String);
export const DeviceUserAgentList = S.Array(S.String);
export const IpRangeList = S.Array(S.String);
export const ActionsList = S.Array(S.String);
export const UserIdList = S.Array(S.String);
export const ImpersonationRoleIdList = S.Array(S.String);
export const PermissionValues = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AssociateDelegateToResourceRequest extends S.Class<AssociateDelegateToResourceRequest>("AssociateDelegateToResourceRequest")({OrganizationId: S.String, ResourceId: S.String, EntityId: S.String}) {}
export class AssociateDelegateToResourceResponse extends S.Class<AssociateDelegateToResourceResponse>("AssociateDelegateToResourceResponse")({}) {}
export class AssociateMemberToGroupRequest extends S.Class<AssociateMemberToGroupRequest>("AssociateMemberToGroupRequest")({OrganizationId: S.String, GroupId: S.String, MemberId: S.String}) {}
export class AssociateMemberToGroupResponse extends S.Class<AssociateMemberToGroupResponse>("AssociateMemberToGroupResponse")({}) {}
export class AssumeImpersonationRoleRequest extends S.Class<AssumeImpersonationRoleRequest>("AssumeImpersonationRoleRequest")({OrganizationId: S.String, ImpersonationRoleId: S.String}) {}
export class CancelMailboxExportJobRequest extends S.Class<CancelMailboxExportJobRequest>("CancelMailboxExportJobRequest")({ClientToken: S.String, JobId: S.String, OrganizationId: S.String}) {}
export class CancelMailboxExportJobResponse extends S.Class<CancelMailboxExportJobResponse>("CancelMailboxExportJobResponse")({}) {}
export class CreateAliasRequest extends S.Class<CreateAliasRequest>("CreateAliasRequest")({OrganizationId: S.String, EntityId: S.String, Alias: S.String}) {}
export class CreateAliasResponse extends S.Class<CreateAliasResponse>("CreateAliasResponse")({}) {}
export class CreateGroupRequest extends S.Class<CreateGroupRequest>("CreateGroupRequest")({OrganizationId: S.String, Name: S.String, HiddenFromGlobalAddressList: S.optional(S.Boolean)}) {}
export class CreateIdentityCenterApplicationRequest extends S.Class<CreateIdentityCenterApplicationRequest>("CreateIdentityCenterApplicationRequest")({Name: S.String, InstanceArn: S.String, ClientToken: S.optional(S.String)}) {}
export class CreateMobileDeviceAccessRuleRequest extends S.Class<CreateMobileDeviceAccessRuleRequest>("CreateMobileDeviceAccessRuleRequest")({OrganizationId: S.String, ClientToken: S.optional(S.String), Name: S.String, Description: S.optional(S.String), Effect: S.String, DeviceTypes: S.optional(DeviceTypeList), NotDeviceTypes: S.optional(DeviceTypeList), DeviceModels: S.optional(DeviceModelList), NotDeviceModels: S.optional(DeviceModelList), DeviceOperatingSystems: S.optional(DeviceOperatingSystemList), NotDeviceOperatingSystems: S.optional(DeviceOperatingSystemList), DeviceUserAgents: S.optional(DeviceUserAgentList), NotDeviceUserAgents: S.optional(DeviceUserAgentList)}) {}
export class CreateResourceRequest extends S.Class<CreateResourceRequest>("CreateResourceRequest")({OrganizationId: S.String, Name: S.String, Type: S.String, Description: S.optional(S.String), HiddenFromGlobalAddressList: S.optional(S.Boolean)}) {}
export class CreateUserRequest extends S.Class<CreateUserRequest>("CreateUserRequest")({OrganizationId: S.String, Name: S.String, DisplayName: S.String, Password: S.optional(S.String), Role: S.optional(S.String), FirstName: S.optional(S.String), LastName: S.optional(S.String), HiddenFromGlobalAddressList: S.optional(S.Boolean), IdentityProviderUserId: S.optional(S.String)}) {}
export class DeleteAccessControlRuleRequest extends S.Class<DeleteAccessControlRuleRequest>("DeleteAccessControlRuleRequest")({OrganizationId: S.String, Name: S.String}) {}
export class DeleteAccessControlRuleResponse extends S.Class<DeleteAccessControlRuleResponse>("DeleteAccessControlRuleResponse")({}) {}
export class DeleteAliasRequest extends S.Class<DeleteAliasRequest>("DeleteAliasRequest")({OrganizationId: S.String, EntityId: S.String, Alias: S.String}) {}
export class DeleteAliasResponse extends S.Class<DeleteAliasResponse>("DeleteAliasResponse")({}) {}
export class DeleteAvailabilityConfigurationRequest extends S.Class<DeleteAvailabilityConfigurationRequest>("DeleteAvailabilityConfigurationRequest")({OrganizationId: S.String, DomainName: S.String}) {}
export class DeleteAvailabilityConfigurationResponse extends S.Class<DeleteAvailabilityConfigurationResponse>("DeleteAvailabilityConfigurationResponse")({}) {}
export class DeleteEmailMonitoringConfigurationRequest extends S.Class<DeleteEmailMonitoringConfigurationRequest>("DeleteEmailMonitoringConfigurationRequest")({OrganizationId: S.String}) {}
export class DeleteEmailMonitoringConfigurationResponse extends S.Class<DeleteEmailMonitoringConfigurationResponse>("DeleteEmailMonitoringConfigurationResponse")({}) {}
export class DeleteGroupRequest extends S.Class<DeleteGroupRequest>("DeleteGroupRequest")({OrganizationId: S.String, GroupId: S.String}) {}
export class DeleteGroupResponse extends S.Class<DeleteGroupResponse>("DeleteGroupResponse")({}) {}
export class DeleteIdentityCenterApplicationRequest extends S.Class<DeleteIdentityCenterApplicationRequest>("DeleteIdentityCenterApplicationRequest")({ApplicationArn: S.String}) {}
export class DeleteIdentityCenterApplicationResponse extends S.Class<DeleteIdentityCenterApplicationResponse>("DeleteIdentityCenterApplicationResponse")({}) {}
export class DeleteIdentityProviderConfigurationRequest extends S.Class<DeleteIdentityProviderConfigurationRequest>("DeleteIdentityProviderConfigurationRequest")({OrganizationId: S.String}) {}
export class DeleteIdentityProviderConfigurationResponse extends S.Class<DeleteIdentityProviderConfigurationResponse>("DeleteIdentityProviderConfigurationResponse")({}) {}
export class DeleteImpersonationRoleRequest extends S.Class<DeleteImpersonationRoleRequest>("DeleteImpersonationRoleRequest")({OrganizationId: S.String, ImpersonationRoleId: S.String}) {}
export class DeleteImpersonationRoleResponse extends S.Class<DeleteImpersonationRoleResponse>("DeleteImpersonationRoleResponse")({}) {}
export class DeleteMailboxPermissionsRequest extends S.Class<DeleteMailboxPermissionsRequest>("DeleteMailboxPermissionsRequest")({OrganizationId: S.String, EntityId: S.String, GranteeId: S.String}) {}
export class DeleteMailboxPermissionsResponse extends S.Class<DeleteMailboxPermissionsResponse>("DeleteMailboxPermissionsResponse")({}) {}
export class DeleteMobileDeviceAccessOverrideRequest extends S.Class<DeleteMobileDeviceAccessOverrideRequest>("DeleteMobileDeviceAccessOverrideRequest")({OrganizationId: S.String, UserId: S.String, DeviceId: S.String}) {}
export class DeleteMobileDeviceAccessOverrideResponse extends S.Class<DeleteMobileDeviceAccessOverrideResponse>("DeleteMobileDeviceAccessOverrideResponse")({}) {}
export class DeleteMobileDeviceAccessRuleRequest extends S.Class<DeleteMobileDeviceAccessRuleRequest>("DeleteMobileDeviceAccessRuleRequest")({OrganizationId: S.String, MobileDeviceAccessRuleId: S.String}) {}
export class DeleteMobileDeviceAccessRuleResponse extends S.Class<DeleteMobileDeviceAccessRuleResponse>("DeleteMobileDeviceAccessRuleResponse")({}) {}
export class DeleteOrganizationRequest extends S.Class<DeleteOrganizationRequest>("DeleteOrganizationRequest")({ClientToken: S.optional(S.String), OrganizationId: S.String, DeleteDirectory: S.Boolean, ForceDelete: S.optional(S.Boolean), DeleteIdentityCenterApplication: S.optional(S.Boolean)}) {}
export class DeletePersonalAccessTokenRequest extends S.Class<DeletePersonalAccessTokenRequest>("DeletePersonalAccessTokenRequest")({OrganizationId: S.String, PersonalAccessTokenId: S.String}) {}
export class DeletePersonalAccessTokenResponse extends S.Class<DeletePersonalAccessTokenResponse>("DeletePersonalAccessTokenResponse")({}) {}
export class DeleteResourceRequest extends S.Class<DeleteResourceRequest>("DeleteResourceRequest")({OrganizationId: S.String, ResourceId: S.String}) {}
export class DeleteResourceResponse extends S.Class<DeleteResourceResponse>("DeleteResourceResponse")({}) {}
export class DeleteRetentionPolicyRequest extends S.Class<DeleteRetentionPolicyRequest>("DeleteRetentionPolicyRequest")({OrganizationId: S.String, Id: S.String}) {}
export class DeleteRetentionPolicyResponse extends S.Class<DeleteRetentionPolicyResponse>("DeleteRetentionPolicyResponse")({}) {}
export class DeleteUserRequest extends S.Class<DeleteUserRequest>("DeleteUserRequest")({OrganizationId: S.String, UserId: S.String}) {}
export class DeleteUserResponse extends S.Class<DeleteUserResponse>("DeleteUserResponse")({}) {}
export class DeregisterFromWorkMailRequest extends S.Class<DeregisterFromWorkMailRequest>("DeregisterFromWorkMailRequest")({OrganizationId: S.String, EntityId: S.String}) {}
export class DeregisterFromWorkMailResponse extends S.Class<DeregisterFromWorkMailResponse>("DeregisterFromWorkMailResponse")({}) {}
export class DeregisterMailDomainRequest extends S.Class<DeregisterMailDomainRequest>("DeregisterMailDomainRequest")({OrganizationId: S.String, DomainName: S.String}) {}
export class DeregisterMailDomainResponse extends S.Class<DeregisterMailDomainResponse>("DeregisterMailDomainResponse")({}) {}
export class DescribeEmailMonitoringConfigurationRequest extends S.Class<DescribeEmailMonitoringConfigurationRequest>("DescribeEmailMonitoringConfigurationRequest")({OrganizationId: S.String}) {}
export class DescribeEntityRequest extends S.Class<DescribeEntityRequest>("DescribeEntityRequest")({OrganizationId: S.String, Email: S.String}) {}
export class DescribeGroupRequest extends S.Class<DescribeGroupRequest>("DescribeGroupRequest")({OrganizationId: S.String, GroupId: S.String}) {}
export class DescribeIdentityProviderConfigurationRequest extends S.Class<DescribeIdentityProviderConfigurationRequest>("DescribeIdentityProviderConfigurationRequest")({OrganizationId: S.String}) {}
export class DescribeInboundDmarcSettingsRequest extends S.Class<DescribeInboundDmarcSettingsRequest>("DescribeInboundDmarcSettingsRequest")({OrganizationId: S.String}) {}
export class DescribeMailboxExportJobRequest extends S.Class<DescribeMailboxExportJobRequest>("DescribeMailboxExportJobRequest")({JobId: S.String, OrganizationId: S.String}) {}
export class DescribeOrganizationRequest extends S.Class<DescribeOrganizationRequest>("DescribeOrganizationRequest")({OrganizationId: S.String}) {}
export class DescribeResourceRequest extends S.Class<DescribeResourceRequest>("DescribeResourceRequest")({OrganizationId: S.String, ResourceId: S.String}) {}
export class DescribeUserRequest extends S.Class<DescribeUserRequest>("DescribeUserRequest")({OrganizationId: S.String, UserId: S.String}) {}
export class DisassociateDelegateFromResourceRequest extends S.Class<DisassociateDelegateFromResourceRequest>("DisassociateDelegateFromResourceRequest")({OrganizationId: S.String, ResourceId: S.String, EntityId: S.String}) {}
export class DisassociateDelegateFromResourceResponse extends S.Class<DisassociateDelegateFromResourceResponse>("DisassociateDelegateFromResourceResponse")({}) {}
export class DisassociateMemberFromGroupRequest extends S.Class<DisassociateMemberFromGroupRequest>("DisassociateMemberFromGroupRequest")({OrganizationId: S.String, GroupId: S.String, MemberId: S.String}) {}
export class DisassociateMemberFromGroupResponse extends S.Class<DisassociateMemberFromGroupResponse>("DisassociateMemberFromGroupResponse")({}) {}
export class GetAccessControlEffectRequest extends S.Class<GetAccessControlEffectRequest>("GetAccessControlEffectRequest")({OrganizationId: S.String, IpAddress: S.String, Action: S.String, UserId: S.optional(S.String), ImpersonationRoleId: S.optional(S.String)}) {}
export class GetDefaultRetentionPolicyRequest extends S.Class<GetDefaultRetentionPolicyRequest>("GetDefaultRetentionPolicyRequest")({OrganizationId: S.String}) {}
export class GetImpersonationRoleRequest extends S.Class<GetImpersonationRoleRequest>("GetImpersonationRoleRequest")({OrganizationId: S.String, ImpersonationRoleId: S.String}) {}
export class GetImpersonationRoleEffectRequest extends S.Class<GetImpersonationRoleEffectRequest>("GetImpersonationRoleEffectRequest")({OrganizationId: S.String, ImpersonationRoleId: S.String, TargetUser: S.String}) {}
export class GetMailboxDetailsRequest extends S.Class<GetMailboxDetailsRequest>("GetMailboxDetailsRequest")({OrganizationId: S.String, UserId: S.String}) {}
export class GetMailDomainRequest extends S.Class<GetMailDomainRequest>("GetMailDomainRequest")({OrganizationId: S.String, DomainName: S.String}) {}
export class GetMobileDeviceAccessEffectRequest extends S.Class<GetMobileDeviceAccessEffectRequest>("GetMobileDeviceAccessEffectRequest")({OrganizationId: S.String, DeviceType: S.optional(S.String), DeviceModel: S.optional(S.String), DeviceOperatingSystem: S.optional(S.String), DeviceUserAgent: S.optional(S.String)}) {}
export class GetMobileDeviceAccessOverrideRequest extends S.Class<GetMobileDeviceAccessOverrideRequest>("GetMobileDeviceAccessOverrideRequest")({OrganizationId: S.String, UserId: S.String, DeviceId: S.String}) {}
export class GetPersonalAccessTokenMetadataRequest extends S.Class<GetPersonalAccessTokenMetadataRequest>("GetPersonalAccessTokenMetadataRequest")({OrganizationId: S.String, PersonalAccessTokenId: S.String}) {}
export class ListAccessControlRulesRequest extends S.Class<ListAccessControlRulesRequest>("ListAccessControlRulesRequest")({OrganizationId: S.String}) {}
export class ListAliasesRequest extends S.Class<ListAliasesRequest>("ListAliasesRequest")({OrganizationId: S.String, EntityId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListAvailabilityConfigurationsRequest extends S.Class<ListAvailabilityConfigurationsRequest>("ListAvailabilityConfigurationsRequest")({OrganizationId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListGroupMembersRequest extends S.Class<ListGroupMembersRequest>("ListGroupMembersRequest")({OrganizationId: S.String, GroupId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListImpersonationRolesRequest extends S.Class<ListImpersonationRolesRequest>("ListImpersonationRolesRequest")({OrganizationId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListMailboxExportJobsRequest extends S.Class<ListMailboxExportJobsRequest>("ListMailboxExportJobsRequest")({OrganizationId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListMailboxPermissionsRequest extends S.Class<ListMailboxPermissionsRequest>("ListMailboxPermissionsRequest")({OrganizationId: S.String, EntityId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListMailDomainsRequest extends S.Class<ListMailDomainsRequest>("ListMailDomainsRequest")({OrganizationId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListMobileDeviceAccessOverridesRequest extends S.Class<ListMobileDeviceAccessOverridesRequest>("ListMobileDeviceAccessOverridesRequest")({OrganizationId: S.String, UserId: S.optional(S.String), DeviceId: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListMobileDeviceAccessRulesRequest extends S.Class<ListMobileDeviceAccessRulesRequest>("ListMobileDeviceAccessRulesRequest")({OrganizationId: S.String}) {}
export class ListOrganizationsRequest extends S.Class<ListOrganizationsRequest>("ListOrganizationsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListPersonalAccessTokensRequest extends S.Class<ListPersonalAccessTokensRequest>("ListPersonalAccessTokensRequest")({OrganizationId: S.String, UserId: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListResourceDelegatesRequest extends S.Class<ListResourceDelegatesRequest>("ListResourceDelegatesRequest")({OrganizationId: S.String, ResourceId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String}) {}
export class PutAccessControlRuleRequest extends S.Class<PutAccessControlRuleRequest>("PutAccessControlRuleRequest")({Name: S.String, Effect: S.String, Description: S.String, IpRanges: S.optional(IpRangeList), NotIpRanges: S.optional(IpRangeList), Actions: S.optional(ActionsList), NotActions: S.optional(ActionsList), UserIds: S.optional(UserIdList), NotUserIds: S.optional(UserIdList), OrganizationId: S.String, ImpersonationRoleIds: S.optional(ImpersonationRoleIdList), NotImpersonationRoleIds: S.optional(ImpersonationRoleIdList)}) {}
export class PutAccessControlRuleResponse extends S.Class<PutAccessControlRuleResponse>("PutAccessControlRuleResponse")({}) {}
export class PutEmailMonitoringConfigurationRequest extends S.Class<PutEmailMonitoringConfigurationRequest>("PutEmailMonitoringConfigurationRequest")({OrganizationId: S.String, RoleArn: S.optional(S.String), LogGroupArn: S.String}) {}
export class PutEmailMonitoringConfigurationResponse extends S.Class<PutEmailMonitoringConfigurationResponse>("PutEmailMonitoringConfigurationResponse")({}) {}
export class PutInboundDmarcSettingsRequest extends S.Class<PutInboundDmarcSettingsRequest>("PutInboundDmarcSettingsRequest")({OrganizationId: S.String, Enforced: S.Boolean}) {}
export class PutInboundDmarcSettingsResponse extends S.Class<PutInboundDmarcSettingsResponse>("PutInboundDmarcSettingsResponse")({}) {}
export class PutMailboxPermissionsRequest extends S.Class<PutMailboxPermissionsRequest>("PutMailboxPermissionsRequest")({OrganizationId: S.String, EntityId: S.String, GranteeId: S.String, PermissionValues: PermissionValues}) {}
export class PutMailboxPermissionsResponse extends S.Class<PutMailboxPermissionsResponse>("PutMailboxPermissionsResponse")({}) {}
export class PutMobileDeviceAccessOverrideRequest extends S.Class<PutMobileDeviceAccessOverrideRequest>("PutMobileDeviceAccessOverrideRequest")({OrganizationId: S.String, UserId: S.String, DeviceId: S.String, Effect: S.String, Description: S.optional(S.String)}) {}
export class PutMobileDeviceAccessOverrideResponse extends S.Class<PutMobileDeviceAccessOverrideResponse>("PutMobileDeviceAccessOverrideResponse")({}) {}
export class RegisterMailDomainRequest extends S.Class<RegisterMailDomainRequest>("RegisterMailDomainRequest")({ClientToken: S.optional(S.String), OrganizationId: S.String, DomainName: S.String}) {}
export class RegisterMailDomainResponse extends S.Class<RegisterMailDomainResponse>("RegisterMailDomainResponse")({}) {}
export class RegisterToWorkMailRequest extends S.Class<RegisterToWorkMailRequest>("RegisterToWorkMailRequest")({OrganizationId: S.String, EntityId: S.String, Email: S.String}) {}
export class RegisterToWorkMailResponse extends S.Class<RegisterToWorkMailResponse>("RegisterToWorkMailResponse")({}) {}
export class ResetPasswordRequest extends S.Class<ResetPasswordRequest>("ResetPasswordRequest")({OrganizationId: S.String, UserId: S.String, Password: S.String}) {}
export class ResetPasswordResponse extends S.Class<ResetPasswordResponse>("ResetPasswordResponse")({}) {}
export class StartMailboxExportJobRequest extends S.Class<StartMailboxExportJobRequest>("StartMailboxExportJobRequest")({ClientToken: S.String, OrganizationId: S.String, EntityId: S.String, Description: S.optional(S.String), RoleArn: S.String, KmsKeyArn: S.String, S3BucketName: S.String, S3Prefix: S.String}) {}
export class EwsAvailabilityProvider extends S.Class<EwsAvailabilityProvider>("EwsAvailabilityProvider")({EwsEndpoint: S.String, EwsUsername: S.String, EwsPassword: S.String}) {}
export class LambdaAvailabilityProvider extends S.Class<LambdaAvailabilityProvider>("LambdaAvailabilityProvider")({LambdaArn: S.String}) {}
export class TestAvailabilityConfigurationRequest extends S.Class<TestAvailabilityConfigurationRequest>("TestAvailabilityConfigurationRequest")({OrganizationId: S.String, DomainName: S.optional(S.String), EwsProvider: S.optional(EwsAvailabilityProvider), LambdaProvider: S.optional(LambdaAvailabilityProvider)}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateAvailabilityConfigurationRequest extends S.Class<UpdateAvailabilityConfigurationRequest>("UpdateAvailabilityConfigurationRequest")({OrganizationId: S.String, DomainName: S.String, EwsProvider: S.optional(EwsAvailabilityProvider), LambdaProvider: S.optional(LambdaAvailabilityProvider)}) {}
export class UpdateAvailabilityConfigurationResponse extends S.Class<UpdateAvailabilityConfigurationResponse>("UpdateAvailabilityConfigurationResponse")({}) {}
export class UpdateDefaultMailDomainRequest extends S.Class<UpdateDefaultMailDomainRequest>("UpdateDefaultMailDomainRequest")({OrganizationId: S.String, DomainName: S.String}) {}
export class UpdateDefaultMailDomainResponse extends S.Class<UpdateDefaultMailDomainResponse>("UpdateDefaultMailDomainResponse")({}) {}
export class UpdateGroupRequest extends S.Class<UpdateGroupRequest>("UpdateGroupRequest")({OrganizationId: S.String, GroupId: S.String, HiddenFromGlobalAddressList: S.optional(S.Boolean)}) {}
export class UpdateGroupResponse extends S.Class<UpdateGroupResponse>("UpdateGroupResponse")({}) {}
export const TargetUsers = S.Array(S.String);
export class ImpersonationRule extends S.Class<ImpersonationRule>("ImpersonationRule")({ImpersonationRuleId: S.String, Name: S.optional(S.String), Description: S.optional(S.String), Effect: S.String, TargetUsers: S.optional(TargetUsers), NotTargetUsers: S.optional(TargetUsers)}) {}
export const ImpersonationRuleList = S.Array(ImpersonationRule);
export class UpdateImpersonationRoleRequest extends S.Class<UpdateImpersonationRoleRequest>("UpdateImpersonationRoleRequest")({OrganizationId: S.String, ImpersonationRoleId: S.String, Name: S.String, Type: S.String, Description: S.optional(S.String), Rules: ImpersonationRuleList}) {}
export class UpdateImpersonationRoleResponse extends S.Class<UpdateImpersonationRoleResponse>("UpdateImpersonationRoleResponse")({}) {}
export class UpdateMailboxQuotaRequest extends S.Class<UpdateMailboxQuotaRequest>("UpdateMailboxQuotaRequest")({OrganizationId: S.String, UserId: S.String, MailboxQuota: S.Number}) {}
export class UpdateMailboxQuotaResponse extends S.Class<UpdateMailboxQuotaResponse>("UpdateMailboxQuotaResponse")({}) {}
export class UpdateMobileDeviceAccessRuleRequest extends S.Class<UpdateMobileDeviceAccessRuleRequest>("UpdateMobileDeviceAccessRuleRequest")({OrganizationId: S.String, MobileDeviceAccessRuleId: S.String, Name: S.String, Description: S.optional(S.String), Effect: S.String, DeviceTypes: S.optional(DeviceTypeList), NotDeviceTypes: S.optional(DeviceTypeList), DeviceModels: S.optional(DeviceModelList), NotDeviceModels: S.optional(DeviceModelList), DeviceOperatingSystems: S.optional(DeviceOperatingSystemList), NotDeviceOperatingSystems: S.optional(DeviceOperatingSystemList), DeviceUserAgents: S.optional(DeviceUserAgentList), NotDeviceUserAgents: S.optional(DeviceUserAgentList)}) {}
export class UpdateMobileDeviceAccessRuleResponse extends S.Class<UpdateMobileDeviceAccessRuleResponse>("UpdateMobileDeviceAccessRuleResponse")({}) {}
export class UpdatePrimaryEmailAddressRequest extends S.Class<UpdatePrimaryEmailAddressRequest>("UpdatePrimaryEmailAddressRequest")({OrganizationId: S.String, EntityId: S.String, Email: S.String}) {}
export class UpdatePrimaryEmailAddressResponse extends S.Class<UpdatePrimaryEmailAddressResponse>("UpdatePrimaryEmailAddressResponse")({}) {}
export class UpdateUserRequest extends S.Class<UpdateUserRequest>("UpdateUserRequest")({OrganizationId: S.String, UserId: S.String, Role: S.optional(S.String), DisplayName: S.optional(S.String), FirstName: S.optional(S.String), LastName: S.optional(S.String), HiddenFromGlobalAddressList: S.optional(S.Boolean), Initials: S.optional(S.String), Telephone: S.optional(S.String), Street: S.optional(S.String), JobTitle: S.optional(S.String), City: S.optional(S.String), Company: S.optional(S.String), ZipCode: S.optional(S.String), Department: S.optional(S.String), Country: S.optional(S.String), Office: S.optional(S.String), IdentityProviderUserId: S.optional(S.String)}) {}
export class UpdateUserResponse extends S.Class<UpdateUserResponse>("UpdateUserResponse")({}) {}
export class Domain extends S.Class<Domain>("Domain")({DomainName: S.String, HostedZoneId: S.optional(S.String)}) {}
export const Domains = S.Array(Domain);
export const AccessControlRuleNameList = S.Array(S.String);
export const PersonalAccessTokenScopeList = S.Array(S.String);
export const Aliases = S.Array(S.String);
export class ListGroupsFilters extends S.Class<ListGroupsFilters>("ListGroupsFilters")({NamePrefix: S.optional(S.String), PrimaryEmailPrefix: S.optional(S.String), State: S.optional(S.String)}) {}
export class ListGroupsForEntityFilters extends S.Class<ListGroupsForEntityFilters>("ListGroupsForEntityFilters")({GroupNamePrefix: S.optional(S.String)}) {}
export class ListResourcesFilters extends S.Class<ListResourcesFilters>("ListResourcesFilters")({NamePrefix: S.optional(S.String), PrimaryEmailPrefix: S.optional(S.String), State: S.optional(S.String)}) {}
export class ListUsersFilters extends S.Class<ListUsersFilters>("ListUsersFilters")({UsernamePrefix: S.optional(S.String), DisplayNamePrefix: S.optional(S.String), PrimaryEmailPrefix: S.optional(S.String), State: S.optional(S.String), IdentityProviderUserIdPrefix: S.optional(S.String)}) {}
export class IdentityCenterConfiguration extends S.Class<IdentityCenterConfiguration>("IdentityCenterConfiguration")({InstanceArn: S.String, ApplicationArn: S.String}) {}
export class PersonalAccessTokenConfiguration extends S.Class<PersonalAccessTokenConfiguration>("PersonalAccessTokenConfiguration")({Status: S.String, LifetimeInDays: S.optional(S.Number)}) {}
export class FolderConfiguration extends S.Class<FolderConfiguration>("FolderConfiguration")({Name: S.String, Action: S.String, Period: S.optional(S.Number)}) {}
export const FolderConfigurations = S.Array(FolderConfiguration);
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class BookingOptions extends S.Class<BookingOptions>("BookingOptions")({AutoAcceptRequests: S.optional(S.Boolean), AutoDeclineRecurringRequests: S.optional(S.Boolean), AutoDeclineConflictingRequests: S.optional(S.Boolean)}) {}
export class AssumeImpersonationRoleResponse extends S.Class<AssumeImpersonationRoleResponse>("AssumeImpersonationRoleResponse")({Token: S.optional(S.String), ExpiresIn: S.optional(S.Number)}) {}
export class CreateAvailabilityConfigurationRequest extends S.Class<CreateAvailabilityConfigurationRequest>("CreateAvailabilityConfigurationRequest")({ClientToken: S.optional(S.String), OrganizationId: S.String, DomainName: S.String, EwsProvider: S.optional(EwsAvailabilityProvider), LambdaProvider: S.optional(LambdaAvailabilityProvider)}) {}
export class CreateAvailabilityConfigurationResponse extends S.Class<CreateAvailabilityConfigurationResponse>("CreateAvailabilityConfigurationResponse")({}) {}
export class CreateGroupResponse extends S.Class<CreateGroupResponse>("CreateGroupResponse")({GroupId: S.optional(S.String)}) {}
export class CreateIdentityCenterApplicationResponse extends S.Class<CreateIdentityCenterApplicationResponse>("CreateIdentityCenterApplicationResponse")({ApplicationArn: S.optional(S.String)}) {}
export class CreateImpersonationRoleRequest extends S.Class<CreateImpersonationRoleRequest>("CreateImpersonationRoleRequest")({ClientToken: S.optional(S.String), OrganizationId: S.String, Name: S.String, Type: S.String, Description: S.optional(S.String), Rules: ImpersonationRuleList}) {}
export class CreateMobileDeviceAccessRuleResponse extends S.Class<CreateMobileDeviceAccessRuleResponse>("CreateMobileDeviceAccessRuleResponse")({MobileDeviceAccessRuleId: S.optional(S.String)}) {}
export class CreateOrganizationRequest extends S.Class<CreateOrganizationRequest>("CreateOrganizationRequest")({DirectoryId: S.optional(S.String), Alias: S.String, ClientToken: S.optional(S.String), Domains: S.optional(Domains), KmsKeyArn: S.optional(S.String), EnableInteroperability: S.optional(S.Boolean)}) {}
export class CreateResourceResponse extends S.Class<CreateResourceResponse>("CreateResourceResponse")({ResourceId: S.optional(S.String)}) {}
export class CreateUserResponse extends S.Class<CreateUserResponse>("CreateUserResponse")({UserId: S.optional(S.String)}) {}
export class DeleteOrganizationResponse extends S.Class<DeleteOrganizationResponse>("DeleteOrganizationResponse")({OrganizationId: S.optional(S.String), State: S.optional(S.String)}) {}
export class DescribeEmailMonitoringConfigurationResponse extends S.Class<DescribeEmailMonitoringConfigurationResponse>("DescribeEmailMonitoringConfigurationResponse")({RoleArn: S.optional(S.String), LogGroupArn: S.optional(S.String)}) {}
export class DescribeEntityResponse extends S.Class<DescribeEntityResponse>("DescribeEntityResponse")({EntityId: S.optional(S.String), Name: S.optional(S.String), Type: S.optional(S.String)}) {}
export class DescribeGroupResponse extends S.Class<DescribeGroupResponse>("DescribeGroupResponse")({GroupId: S.optional(S.String), Name: S.optional(S.String), Email: S.optional(S.String), State: S.optional(S.String), EnabledDate: S.optional(S.Date), DisabledDate: S.optional(S.Date), HiddenFromGlobalAddressList: S.optional(S.Boolean)}) {}
export class DescribeIdentityProviderConfigurationResponse extends S.Class<DescribeIdentityProviderConfigurationResponse>("DescribeIdentityProviderConfigurationResponse")({AuthenticationMode: S.optional(S.String), IdentityCenterConfiguration: S.optional(IdentityCenterConfiguration), PersonalAccessTokenConfiguration: S.optional(PersonalAccessTokenConfiguration)}) {}
export class DescribeInboundDmarcSettingsResponse extends S.Class<DescribeInboundDmarcSettingsResponse>("DescribeInboundDmarcSettingsResponse")({Enforced: S.optional(S.Boolean)}) {}
export class DescribeMailboxExportJobResponse extends S.Class<DescribeMailboxExportJobResponse>("DescribeMailboxExportJobResponse")({EntityId: S.optional(S.String), Description: S.optional(S.String), RoleArn: S.optional(S.String), KmsKeyArn: S.optional(S.String), S3BucketName: S.optional(S.String), S3Prefix: S.optional(S.String), S3Path: S.optional(S.String), EstimatedProgress: S.optional(S.Number), State: S.optional(S.String), ErrorInfo: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date)}) {}
export class DescribeOrganizationResponse extends S.Class<DescribeOrganizationResponse>("DescribeOrganizationResponse")({OrganizationId: S.optional(S.String), Alias: S.optional(S.String), State: S.optional(S.String), DirectoryId: S.optional(S.String), DirectoryType: S.optional(S.String), DefaultMailDomain: S.optional(S.String), CompletedDate: S.optional(S.Date), ErrorMessage: S.optional(S.String), ARN: S.optional(S.String), MigrationAdmin: S.optional(S.String), InteroperabilityEnabled: S.optional(S.Boolean)}) {}
export class DescribeResourceResponse extends S.Class<DescribeResourceResponse>("DescribeResourceResponse")({ResourceId: S.optional(S.String), Email: S.optional(S.String), Name: S.optional(S.String), Type: S.optional(S.String), BookingOptions: S.optional(BookingOptions), State: S.optional(S.String), EnabledDate: S.optional(S.Date), DisabledDate: S.optional(S.Date), Description: S.optional(S.String), HiddenFromGlobalAddressList: S.optional(S.Boolean)}) {}
export class DescribeUserResponse extends S.Class<DescribeUserResponse>("DescribeUserResponse")({UserId: S.optional(S.String), Name: S.optional(S.String), Email: S.optional(S.String), DisplayName: S.optional(S.String), State: S.optional(S.String), UserRole: S.optional(S.String), EnabledDate: S.optional(S.Date), DisabledDate: S.optional(S.Date), MailboxProvisionedDate: S.optional(S.Date), MailboxDeprovisionedDate: S.optional(S.Date), FirstName: S.optional(S.String), LastName: S.optional(S.String), HiddenFromGlobalAddressList: S.optional(S.Boolean), Initials: S.optional(S.String), Telephone: S.optional(S.String), Street: S.optional(S.String), JobTitle: S.optional(S.String), City: S.optional(S.String), Company: S.optional(S.String), ZipCode: S.optional(S.String), Department: S.optional(S.String), Country: S.optional(S.String), Office: S.optional(S.String), IdentityProviderUserId: S.optional(S.String), IdentityProviderIdentityStoreId: S.optional(S.String)}) {}
export class GetAccessControlEffectResponse extends S.Class<GetAccessControlEffectResponse>("GetAccessControlEffectResponse")({Effect: S.optional(S.String), MatchedRules: S.optional(AccessControlRuleNameList)}) {}
export class GetDefaultRetentionPolicyResponse extends S.Class<GetDefaultRetentionPolicyResponse>("GetDefaultRetentionPolicyResponse")({Id: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), FolderConfigurations: S.optional(FolderConfigurations)}) {}
export class GetImpersonationRoleResponse extends S.Class<GetImpersonationRoleResponse>("GetImpersonationRoleResponse")({ImpersonationRoleId: S.optional(S.String), Name: S.optional(S.String), Type: S.optional(S.String), Description: S.optional(S.String), Rules: S.optional(ImpersonationRuleList), DateCreated: S.optional(S.Date), DateModified: S.optional(S.Date)}) {}
export class GetMailboxDetailsResponse extends S.Class<GetMailboxDetailsResponse>("GetMailboxDetailsResponse")({MailboxQuota: S.optional(S.Number), MailboxSize: S.optional(S.Number)}) {}
export class GetMobileDeviceAccessOverrideResponse extends S.Class<GetMobileDeviceAccessOverrideResponse>("GetMobileDeviceAccessOverrideResponse")({UserId: S.optional(S.String), DeviceId: S.optional(S.String), Effect: S.optional(S.String), Description: S.optional(S.String), DateCreated: S.optional(S.Date), DateModified: S.optional(S.Date)}) {}
export class GetPersonalAccessTokenMetadataResponse extends S.Class<GetPersonalAccessTokenMetadataResponse>("GetPersonalAccessTokenMetadataResponse")({PersonalAccessTokenId: S.optional(S.String), UserId: S.optional(S.String), Name: S.optional(S.String), DateCreated: S.optional(S.Date), DateLastUsed: S.optional(S.Date), ExpiresTime: S.optional(S.Date), Scopes: S.optional(PersonalAccessTokenScopeList)}) {}
export class ListAliasesResponse extends S.Class<ListAliasesResponse>("ListAliasesResponse")({Aliases: S.optional(Aliases), NextToken: S.optional(S.String)}) {}
export class ListGroupsRequest extends S.Class<ListGroupsRequest>("ListGroupsRequest")({OrganizationId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Filters: S.optional(ListGroupsFilters)}) {}
export class ListGroupsForEntityRequest extends S.Class<ListGroupsForEntityRequest>("ListGroupsForEntityRequest")({OrganizationId: S.String, EntityId: S.String, Filters: S.optional(ListGroupsForEntityFilters), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListResourcesRequest extends S.Class<ListResourcesRequest>("ListResourcesRequest")({OrganizationId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Filters: S.optional(ListResourcesFilters)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class ListUsersRequest extends S.Class<ListUsersRequest>("ListUsersRequest")({OrganizationId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Filters: S.optional(ListUsersFilters)}) {}
export class PutIdentityProviderConfigurationRequest extends S.Class<PutIdentityProviderConfigurationRequest>("PutIdentityProviderConfigurationRequest")({OrganizationId: S.String, AuthenticationMode: S.String, IdentityCenterConfiguration: IdentityCenterConfiguration, PersonalAccessTokenConfiguration: PersonalAccessTokenConfiguration}) {}
export class PutIdentityProviderConfigurationResponse extends S.Class<PutIdentityProviderConfigurationResponse>("PutIdentityProviderConfigurationResponse")({}) {}
export class PutRetentionPolicyRequest extends S.Class<PutRetentionPolicyRequest>("PutRetentionPolicyRequest")({OrganizationId: S.String, Id: S.optional(S.String), Name: S.String, Description: S.optional(S.String), FolderConfigurations: FolderConfigurations}) {}
export class PutRetentionPolicyResponse extends S.Class<PutRetentionPolicyResponse>("PutRetentionPolicyResponse")({}) {}
export class StartMailboxExportJobResponse extends S.Class<StartMailboxExportJobResponse>("StartMailboxExportJobResponse")({JobId: S.optional(S.String)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class TestAvailabilityConfigurationResponse extends S.Class<TestAvailabilityConfigurationResponse>("TestAvailabilityConfigurationResponse")({TestPassed: S.optional(S.Boolean), FailureReason: S.optional(S.String)}) {}
export class UpdateResourceRequest extends S.Class<UpdateResourceRequest>("UpdateResourceRequest")({OrganizationId: S.String, ResourceId: S.String, Name: S.optional(S.String), BookingOptions: S.optional(BookingOptions), Description: S.optional(S.String), Type: S.optional(S.String), HiddenFromGlobalAddressList: S.optional(S.Boolean)}) {}
export class UpdateResourceResponse extends S.Class<UpdateResourceResponse>("UpdateResourceResponse")({}) {}
export class ImpersonationMatchedRule extends S.Class<ImpersonationMatchedRule>("ImpersonationMatchedRule")({ImpersonationRuleId: S.optional(S.String), Name: S.optional(S.String)}) {}
export const ImpersonationMatchedRuleList = S.Array(ImpersonationMatchedRule);
export class DnsRecord extends S.Class<DnsRecord>("DnsRecord")({Type: S.optional(S.String), Hostname: S.optional(S.String), Value: S.optional(S.String)}) {}
export const DnsRecords = S.Array(DnsRecord);
export class MobileDeviceAccessMatchedRule extends S.Class<MobileDeviceAccessMatchedRule>("MobileDeviceAccessMatchedRule")({MobileDeviceAccessRuleId: S.optional(S.String), Name: S.optional(S.String)}) {}
export const MobileDeviceAccessMatchedRuleList = S.Array(MobileDeviceAccessMatchedRule);
export class AccessControlRule extends S.Class<AccessControlRule>("AccessControlRule")({Name: S.optional(S.String), Effect: S.optional(S.String), Description: S.optional(S.String), IpRanges: S.optional(IpRangeList), NotIpRanges: S.optional(IpRangeList), Actions: S.optional(ActionsList), NotActions: S.optional(ActionsList), UserIds: S.optional(UserIdList), NotUserIds: S.optional(UserIdList), DateCreated: S.optional(S.Date), DateModified: S.optional(S.Date), ImpersonationRoleIds: S.optional(ImpersonationRoleIdList), NotImpersonationRoleIds: S.optional(ImpersonationRoleIdList)}) {}
export const AccessControlRulesList = S.Array(AccessControlRule);
export class Member extends S.Class<Member>("Member")({Id: S.optional(S.String), Name: S.optional(S.String), Type: S.optional(S.String), State: S.optional(S.String), EnabledDate: S.optional(S.Date), DisabledDate: S.optional(S.Date)}) {}
export const Members = S.Array(Member);
export class ImpersonationRole extends S.Class<ImpersonationRole>("ImpersonationRole")({ImpersonationRoleId: S.optional(S.String), Name: S.optional(S.String), Type: S.optional(S.String), DateCreated: S.optional(S.Date), DateModified: S.optional(S.Date)}) {}
export const ImpersonationRoleList = S.Array(ImpersonationRole);
export class MailboxExportJob extends S.Class<MailboxExportJob>("MailboxExportJob")({JobId: S.optional(S.String), EntityId: S.optional(S.String), Description: S.optional(S.String), S3BucketName: S.optional(S.String), S3Path: S.optional(S.String), EstimatedProgress: S.optional(S.Number), State: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date)}) {}
export const Jobs = S.Array(MailboxExportJob);
export class Permission extends S.Class<Permission>("Permission")({GranteeId: S.String, GranteeType: S.String, PermissionValues: PermissionValues}) {}
export const Permissions = S.Array(Permission);
export class MailDomainSummary extends S.Class<MailDomainSummary>("MailDomainSummary")({DomainName: S.optional(S.String), DefaultDomain: S.optional(S.Boolean)}) {}
export const MailDomains = S.Array(MailDomainSummary);
export class MobileDeviceAccessOverride extends S.Class<MobileDeviceAccessOverride>("MobileDeviceAccessOverride")({UserId: S.optional(S.String), DeviceId: S.optional(S.String), Effect: S.optional(S.String), Description: S.optional(S.String), DateCreated: S.optional(S.Date), DateModified: S.optional(S.Date)}) {}
export const MobileDeviceAccessOverridesList = S.Array(MobileDeviceAccessOverride);
export class MobileDeviceAccessRule extends S.Class<MobileDeviceAccessRule>("MobileDeviceAccessRule")({MobileDeviceAccessRuleId: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), Effect: S.optional(S.String), DeviceTypes: S.optional(DeviceTypeList), NotDeviceTypes: S.optional(DeviceTypeList), DeviceModels: S.optional(DeviceModelList), NotDeviceModels: S.optional(DeviceModelList), DeviceOperatingSystems: S.optional(DeviceOperatingSystemList), NotDeviceOperatingSystems: S.optional(DeviceOperatingSystemList), DeviceUserAgents: S.optional(DeviceUserAgentList), NotDeviceUserAgents: S.optional(DeviceUserAgentList), DateCreated: S.optional(S.Date), DateModified: S.optional(S.Date)}) {}
export const MobileDeviceAccessRulesList = S.Array(MobileDeviceAccessRule);
export class OrganizationSummary extends S.Class<OrganizationSummary>("OrganizationSummary")({OrganizationId: S.optional(S.String), Alias: S.optional(S.String), DefaultMailDomain: S.optional(S.String), ErrorMessage: S.optional(S.String), State: S.optional(S.String)}) {}
export const OrganizationSummaries = S.Array(OrganizationSummary);
export class PersonalAccessTokenSummary extends S.Class<PersonalAccessTokenSummary>("PersonalAccessTokenSummary")({PersonalAccessTokenId: S.optional(S.String), UserId: S.optional(S.String), Name: S.optional(S.String), DateCreated: S.optional(S.Date), DateLastUsed: S.optional(S.Date), ExpiresTime: S.optional(S.Date), Scopes: S.optional(PersonalAccessTokenScopeList)}) {}
export const PersonalAccessTokenSummaryList = S.Array(PersonalAccessTokenSummary);
export class Delegate extends S.Class<Delegate>("Delegate")({Id: S.String, Type: S.String}) {}
export const ResourceDelegates = S.Array(Delegate);
export class CreateImpersonationRoleResponse extends S.Class<CreateImpersonationRoleResponse>("CreateImpersonationRoleResponse")({ImpersonationRoleId: S.optional(S.String)}) {}
export class CreateOrganizationResponse extends S.Class<CreateOrganizationResponse>("CreateOrganizationResponse")({OrganizationId: S.optional(S.String)}) {}
export class GetImpersonationRoleEffectResponse extends S.Class<GetImpersonationRoleEffectResponse>("GetImpersonationRoleEffectResponse")({Type: S.optional(S.String), Effect: S.optional(S.String), MatchedRules: S.optional(ImpersonationMatchedRuleList)}) {}
export class GetMailDomainResponse extends S.Class<GetMailDomainResponse>("GetMailDomainResponse")({Records: S.optional(DnsRecords), IsTestDomain: S.optional(S.Boolean), IsDefault: S.optional(S.Boolean), OwnershipVerificationStatus: S.optional(S.String), DkimVerificationStatus: S.optional(S.String)}) {}
export class GetMobileDeviceAccessEffectResponse extends S.Class<GetMobileDeviceAccessEffectResponse>("GetMobileDeviceAccessEffectResponse")({Effect: S.optional(S.String), MatchedRules: S.optional(MobileDeviceAccessMatchedRuleList)}) {}
export class ListAccessControlRulesResponse extends S.Class<ListAccessControlRulesResponse>("ListAccessControlRulesResponse")({Rules: S.optional(AccessControlRulesList)}) {}
export class ListGroupMembersResponse extends S.Class<ListGroupMembersResponse>("ListGroupMembersResponse")({Members: S.optional(Members), NextToken: S.optional(S.String)}) {}
export class ListImpersonationRolesResponse extends S.Class<ListImpersonationRolesResponse>("ListImpersonationRolesResponse")({Roles: S.optional(ImpersonationRoleList), NextToken: S.optional(S.String)}) {}
export class ListMailboxExportJobsResponse extends S.Class<ListMailboxExportJobsResponse>("ListMailboxExportJobsResponse")({Jobs: S.optional(Jobs), NextToken: S.optional(S.String)}) {}
export class ListMailboxPermissionsResponse extends S.Class<ListMailboxPermissionsResponse>("ListMailboxPermissionsResponse")({Permissions: S.optional(Permissions), NextToken: S.optional(S.String)}) {}
export class ListMailDomainsResponse extends S.Class<ListMailDomainsResponse>("ListMailDomainsResponse")({MailDomains: S.optional(MailDomains), NextToken: S.optional(S.String)}) {}
export class ListMobileDeviceAccessOverridesResponse extends S.Class<ListMobileDeviceAccessOverridesResponse>("ListMobileDeviceAccessOverridesResponse")({Overrides: S.optional(MobileDeviceAccessOverridesList), NextToken: S.optional(S.String)}) {}
export class ListMobileDeviceAccessRulesResponse extends S.Class<ListMobileDeviceAccessRulesResponse>("ListMobileDeviceAccessRulesResponse")({Rules: S.optional(MobileDeviceAccessRulesList)}) {}
export class ListOrganizationsResponse extends S.Class<ListOrganizationsResponse>("ListOrganizationsResponse")({OrganizationSummaries: S.optional(OrganizationSummaries), NextToken: S.optional(S.String)}) {}
export class ListPersonalAccessTokensResponse extends S.Class<ListPersonalAccessTokensResponse>("ListPersonalAccessTokensResponse")({NextToken: S.optional(S.String), PersonalAccessTokenSummaries: S.optional(PersonalAccessTokenSummaryList)}) {}
export class ListResourceDelegatesResponse extends S.Class<ListResourceDelegatesResponse>("ListResourceDelegatesResponse")({Delegates: S.optional(ResourceDelegates), NextToken: S.optional(S.String)}) {}
export class RedactedEwsAvailabilityProvider extends S.Class<RedactedEwsAvailabilityProvider>("RedactedEwsAvailabilityProvider")({EwsEndpoint: S.optional(S.String), EwsUsername: S.optional(S.String)}) {}
export class AvailabilityConfiguration extends S.Class<AvailabilityConfiguration>("AvailabilityConfiguration")({DomainName: S.optional(S.String), ProviderType: S.optional(S.String), EwsProvider: S.optional(RedactedEwsAvailabilityProvider), LambdaProvider: S.optional(LambdaAvailabilityProvider), DateCreated: S.optional(S.Date), DateModified: S.optional(S.Date)}) {}
export const AvailabilityConfigurationList = S.Array(AvailabilityConfiguration);
export class Group extends S.Class<Group>("Group")({Id: S.optional(S.String), Email: S.optional(S.String), Name: S.optional(S.String), State: S.optional(S.String), EnabledDate: S.optional(S.Date), DisabledDate: S.optional(S.Date)}) {}
export const Groups = S.Array(Group);
export class GroupIdentifier extends S.Class<GroupIdentifier>("GroupIdentifier")({GroupId: S.optional(S.String), GroupName: S.optional(S.String)}) {}
export const GroupIdentifiers = S.Array(GroupIdentifier);
export class Resource extends S.Class<Resource>("Resource")({Id: S.optional(S.String), Email: S.optional(S.String), Name: S.optional(S.String), Type: S.optional(S.String), State: S.optional(S.String), EnabledDate: S.optional(S.Date), DisabledDate: S.optional(S.Date), Description: S.optional(S.String)}) {}
export const Resources = S.Array(Resource);
export class User extends S.Class<User>("User")({Id: S.optional(S.String), Email: S.optional(S.String), Name: S.optional(S.String), DisplayName: S.optional(S.String), State: S.optional(S.String), UserRole: S.optional(S.String), EnabledDate: S.optional(S.Date), DisabledDate: S.optional(S.Date), IdentityProviderUserId: S.optional(S.String), IdentityProviderIdentityStoreId: S.optional(S.String)}) {}
export const Users = S.Array(User);
export class ListAvailabilityConfigurationsResponse extends S.Class<ListAvailabilityConfigurationsResponse>("ListAvailabilityConfigurationsResponse")({AvailabilityConfigurations: S.optional(AvailabilityConfigurationList), NextToken: S.optional(S.String)}) {}
export class ListGroupsResponse extends S.Class<ListGroupsResponse>("ListGroupsResponse")({Groups: S.optional(Groups), NextToken: S.optional(S.String)}) {}
export class ListGroupsForEntityResponse extends S.Class<ListGroupsForEntityResponse>("ListGroupsForEntityResponse")({Groups: S.optional(GroupIdentifiers), NextToken: S.optional(S.String)}) {}
export class ListResourcesResponse extends S.Class<ListResourcesResponse>("ListResourcesResponse")({Resources: S.optional(Resources), NextToken: S.optional(S.String)}) {}
export class ListUsersResponse extends S.Class<ListUsersResponse>("ListUsersResponse")({Users: S.optional(Users), NextToken: S.optional(S.String)}) {}

//# Errors
export class EntityNotFoundException extends S.TaggedError<EntityNotFoundException>()("EntityNotFoundException", {}) {};
export class OrganizationNotFoundException extends S.TaggedError<OrganizationNotFoundException>()("OrganizationNotFoundException", {}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class OrganizationStateException extends S.TaggedError<OrganizationStateException>()("OrganizationStateException", {}) {};
export class DirectoryServiceAuthenticationFailedException extends S.TaggedError<DirectoryServiceAuthenticationFailedException>()("DirectoryServiceAuthenticationFailedException", {}) {};
export class EntityStateException extends S.TaggedError<EntityStateException>()("EntityStateException", {}) {};
export class DirectoryUnavailableException extends S.TaggedError<DirectoryUnavailableException>()("DirectoryUnavailableException", {}) {};
export class UnsupportedOperationException extends S.TaggedError<UnsupportedOperationException>()("UnsupportedOperationException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class EmailAddressInUseException extends S.TaggedError<EmailAddressInUseException>()("EmailAddressInUseException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class MailDomainNotFoundException extends S.TaggedError<MailDomainNotFoundException>()("MailDomainNotFoundException", {}) {};
export class MailDomainStateException extends S.TaggedError<MailDomainStateException>()("MailDomainStateException", {}) {};
export class NameAvailabilityException extends S.TaggedError<NameAvailabilityException>()("NameAvailabilityException", {}) {};
export class ReservedNameException extends S.TaggedError<ReservedNameException>()("ReservedNameException", {}) {};
export class InvalidPasswordException extends S.TaggedError<InvalidPasswordException>()("InvalidPasswordException", {}) {};
export class InvalidCustomSesConfigurationException extends S.TaggedError<InvalidCustomSesConfigurationException>()("InvalidCustomSesConfigurationException", {Message: S.optional(S.String)}) {};
export class MailDomainInUseException extends S.TaggedError<MailDomainInUseException>()("MailDomainInUseException", {}) {};
export class EntityAlreadyRegisteredException extends S.TaggedError<EntityAlreadyRegisteredException>()("EntityAlreadyRegisteredException", {Message: S.optional(S.String)}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {Message: S.optional(S.String)}) {};
export class InvalidConfigurationException extends S.TaggedError<InvalidConfigurationException>()("InvalidConfigurationException", {Message: S.optional(S.String)}) {};
export class DirectoryInUseException extends S.TaggedError<DirectoryInUseException>()("DirectoryInUseException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes the email monitoring configuration for a specified organization.
 */export const deleteEmailMonitoringConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteEmailMonitoringConfiguration" }, DeleteEmailMonitoringConfigurationRequest, DeleteEmailMonitoringConfigurationResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the IAM Identity Center application from WorkMail. This action does not affect the authentication settings for any WorkMail organizations.
 */export const deleteIdentityCenterApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteIdentityCenterApplication" }, DeleteIdentityCenterApplicationRequest, DeleteIdentityCenterApplicationResponse, [InvalidParameterException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables the integration between IdC and WorkMail. Authentication will continue with the directory as it was before the IdC integration. You might have to reset your directory passwords and reconfigure your desktop and mobile email clients.
 */export const deleteIdentityProviderConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteIdentityProviderConfiguration" }, DeleteIdentityProviderConfigurationRequest, DeleteIdentityProviderConfigurationResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an impersonation role for the given WorkMail organization.
 */export const deleteImpersonationRole = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteImpersonationRole" }, DeleteImpersonationRoleRequest, DeleteImpersonationRoleResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes permissions granted to a member (user or group).
 */export const deleteMailboxPermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteMailboxPermissions" }, DeleteMailboxPermissionsRequest, DeleteMailboxPermissionsResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the mobile device access override for the given WorkMail organization, user, and device.
 * 
 * Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.
 */export const deleteMobileDeviceAccessOverride = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteMobileDeviceAccessOverride" }, DeleteMobileDeviceAccessOverrideRequest, DeleteMobileDeviceAccessOverrideResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a mobile device access rule for the specified WorkMail organization.
 * 
 * Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.
 */export const deleteMobileDeviceAccessRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteMobileDeviceAccessRule" }, DeleteMobileDeviceAccessRuleRequest, DeleteMobileDeviceAccessRuleResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the Personal Access Token from the provided WorkMail Organization.
 */export const deletePersonalAccessToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeletePersonalAccessToken" }, DeletePersonalAccessTokenRequest, DeletePersonalAccessTokenResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified retention policy from the specified organization.
 */export const deleteRetentionPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteRetentionPolicy" }, DeleteRetentionPolicyRequest, DeleteRetentionPolicyResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a user from WorkMail and all subsequent systems. Before you can delete a
 * user, the user state must be `DISABLED`. Use the DescribeUser
 * action to confirm the user state.
 * 
 * Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for
 * 30 days before they are permanently removed.
 */export const deleteUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteUser" }, DeleteUserRequest, DeleteUserResponse, [DirectoryServiceAuthenticationFailedException, DirectoryUnavailableException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Mark a user, group, or resource as no longer used in WorkMail. This action
 * disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days
 * before they are permanently removed. The functionality in the console is
 * *Disable*.
 */export const deregisterFromWorkMail = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeregisterFromWorkMail" }, DeregisterFromWorkMailRequest, DeregisterFromWorkMailResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a member from the resource's set of delegates.
 */export const disassociateDelegateFromResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DisassociateDelegateFromResource" }, DisassociateDelegateFromResourceRequest, DisassociateDelegateFromResourceResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a member from a group.
 */export const disassociateMemberFromGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DisassociateMemberFromGroup" }, DisassociateMemberFromGroupRequest, DisassociateMemberFromGroupResponse, [DirectoryServiceAuthenticationFailedException, DirectoryUnavailableException, EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables or disables a DMARC policy for a given organization.
 */export const putInboundDmarcSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.PutInboundDmarcSettings" }, PutInboundDmarcSettingsRequest, PutInboundDmarcSettingsResponse, [OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets permissions for a user, group, or resource. This replaces any pre-existing
 * permissions.
 */export const putMailboxPermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.PutMailboxPermissions" }, PutMailboxPermissionsRequest, PutMailboxPermissionsResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates a mobile device access override for the given WorkMail organization, user, and device.
 */export const putMobileDeviceAccessOverride = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.PutMobileDeviceAccessOverride" }, PutMobileDeviceAccessOverrideRequest, PutMobileDeviceAccessOverrideResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Untags the specified tags from the specified WorkMail organization
 * resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing `AvailabilityConfiguration` for the given WorkMail
 * organization and domain.
 */export const updateAvailabilityConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.UpdateAvailabilityConfiguration" }, UpdateAvailabilityConfigurationRequest, UpdateAvailabilityConfigurationResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates attributes in a group.
 */export const updateGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.UpdateGroup" }, UpdateGroupRequest, UpdateGroupResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an impersonation role for the given WorkMail organization.
 */export const updateImpersonationRole = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.UpdateImpersonationRole" }, UpdateImpersonationRoleRequest, UpdateImpersonationRoleResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, LimitExceededException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a user's current mailbox quota for a specified organization and
 * user.
 */export const updateMailboxQuota = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.UpdateMailboxQuota" }, UpdateMailboxQuotaRequest, UpdateMailboxQuotaResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a mobile device access rule for the specified WorkMail organization.
 */export const updateMobileDeviceAccessRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.UpdateMobileDeviceAccessRule" }, UpdateMobileDeviceAccessRuleRequest, UpdateMobileDeviceAccessRuleResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates data for the user. To have the latest information, it must be preceded by a
 * DescribeUser call. The dataset in the request should be the one
 * expected when performing another `DescribeUser` call.
 */export const updateUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.UpdateUser" }, UpdateUserRequest, UpdateUserResponse, [DirectoryServiceAuthenticationFailedException, DirectoryUnavailableException, EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a member (user or group) to the resource's set of delegates.
 */export const associateDelegateToResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.AssociateDelegateToResource" }, AssociateDelegateToResourceRequest, AssociateDelegateToResourceResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a member (user or group) to the group's set.
 */export const associateMemberToGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.AssociateMemberToGroup" }, AssociateMemberToGroupRequest, AssociateMemberToGroupResponse, [DirectoryServiceAuthenticationFailedException, DirectoryUnavailableException, EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assumes an impersonation role for the given WorkMail organization. This method returns an
 * authentication token you can use to make impersonated calls.
 */export const assumeImpersonationRole = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.AssumeImpersonationRole" }, AssumeImpersonationRoleRequest, AssumeImpersonationRoleResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels a mailbox export job.
 * 
 * If the mailbox export job is near completion, it might not be possible to cancel
 * it.
 */export const cancelMailboxExportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.CancelMailboxExportJob" }, CancelMailboxExportJobRequest, CancelMailboxExportJobResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds an alias to the set of a given member (user or group) of WorkMail.
 */export const createAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.CreateAlias" }, CreateAliasRequest, CreateAliasResponse, [EmailAddressInUseException, EntityNotFoundException, EntityStateException, InvalidParameterException, LimitExceededException, MailDomainNotFoundException, MailDomainStateException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates the WorkMail application in IAM Identity Center that can be used later in the WorkMail - IdC integration. For more information, see PutIdentityProviderConfiguration. This action does not affect the authentication settings for any WorkMail organizations.
 */export const createIdentityCenterApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.CreateIdentityCenterApplication" }, CreateIdentityCenterApplicationRequest, CreateIdentityCenterApplicationResponse, [InvalidParameterException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new mobile device access rule for the specified WorkMail organization.
 */export const createMobileDeviceAccessRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.CreateMobileDeviceAccessRule" }, CreateMobileDeviceAccessRuleRequest, CreateMobileDeviceAccessRuleResponse, [InvalidParameterException, LimitExceededException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new WorkMail resource.
 */export const createResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.CreateResource" }, CreateResourceRequest, CreateResourceResponse, [DirectoryServiceAuthenticationFailedException, DirectoryUnavailableException, InvalidParameterException, NameAvailabilityException, OrganizationNotFoundException, OrganizationStateException, ReservedNameException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a user who can be used in WorkMail by calling the RegisterToWorkMail operation.
 */export const createUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.CreateUser" }, CreateUserRequest, CreateUserResponse, [DirectoryServiceAuthenticationFailedException, DirectoryUnavailableException, InvalidParameterException, InvalidPasswordException, NameAvailabilityException, OrganizationNotFoundException, OrganizationStateException, ReservedNameException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an access control rule for the specified WorkMail organization.
 * 
 * Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.
 */export const deleteAccessControlRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteAccessControlRule" }, DeleteAccessControlRuleRequest, DeleteAccessControlRuleResponse, [OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove one or more specified aliases from a set of aliases for a given
 * user.
 */export const deleteAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteAlias" }, DeleteAliasRequest, DeleteAliasResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the `AvailabilityConfiguration` for the given WorkMail organization and domain.
 */export const deleteAvailabilityConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteAvailabilityConfiguration" }, DeleteAvailabilityConfigurationRequest, DeleteAvailabilityConfigurationResponse, [OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a group from WorkMail.
 */export const deleteGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteGroup" }, DeleteGroupRequest, DeleteGroupResponse, [DirectoryServiceAuthenticationFailedException, DirectoryUnavailableException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see Removing an organization in the *WorkMail Administrator Guide*.
 */export const deleteOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteOrganization" }, DeleteOrganizationRequest, DeleteOrganizationResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified resource.
 */export const deleteResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeleteResource" }, DeleteResourceRequest, DeleteResourceResponse, [EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first
 * remove any email address used by WorkMail entities before you remove the domain.
 */export const deregisterMailDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DeregisterMailDomain" }, DeregisterMailDomainRequest, DeregisterMailDomainResponse, [InvalidCustomSesConfigurationException, InvalidParameterException, MailDomainInUseException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the current email monitoring configuration for a specified organization.
 */export const describeEmailMonitoringConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DescribeEmailMonitoringConfiguration" }, DescribeEmailMonitoringConfigurationRequest, DescribeEmailMonitoringConfigurationResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns basic details about an entity in WorkMail.
 */export const describeEntity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DescribeEntity" }, DescribeEntityRequest, DescribeEntityResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the data available for the group.
 */export const describeGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DescribeGroup" }, DescribeGroupRequest, DescribeGroupResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns detailed information on the current IdC setup for the WorkMail organization.
 */export const describeIdentityProviderConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DescribeIdentityProviderConfiguration" }, DescribeIdentityProviderConfigurationRequest, DescribeIdentityProviderConfigurationResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the settings in a DMARC policy for a specified organization.
 */export const describeInboundDmarcSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DescribeInboundDmarcSettings" }, DescribeInboundDmarcSettingsRequest, DescribeInboundDmarcSettingsResponse, [OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the current status of a mailbox export job.
 */export const describeMailboxExportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DescribeMailboxExportJob" }, DescribeMailboxExportJobRequest, DescribeMailboxExportJobResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides more information regarding a given organization based on its
 * identifier.
 */export const describeOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DescribeOrganization" }, DescribeOrganizationRequest, DescribeOrganizationResponse, [InvalidParameterException, OrganizationNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the data available for the resource.
 */export const describeResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DescribeResource" }, DescribeResourceRequest, DescribeResourceResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides information regarding the user.
 */export const describeUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.DescribeUser" }, DescribeUserRequest, DescribeUserResponse, [DirectoryServiceAuthenticationFailedException, DirectoryUnavailableException, EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the effects of an organization's access control rules as they apply to a
 * specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.
 */export const getAccessControlEffect = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.GetAccessControlEffect" }, GetAccessControlEffectRequest, GetAccessControlEffectResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the default retention policy details for the specified organization.
 */export const getDefaultRetentionPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.GetDefaultRetentionPolicy" }, GetDefaultRetentionPolicyRequest, GetDefaultRetentionPolicyResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the impersonation role details for the given WorkMail organization.
 */export const getImpersonationRole = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.GetImpersonationRole" }, GetImpersonationRoleRequest, GetImpersonationRoleResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Requests a user's mailbox details for a specified organization and user.
 */export const getMailboxDetails = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.GetMailboxDetails" }, GetMailboxDetailsRequest, GetMailboxDetailsResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the mobile device access override for the given WorkMail organization, user, and device.
 */export const getMobileDeviceAccessOverride = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.GetMobileDeviceAccessOverride" }, GetMobileDeviceAccessOverrideRequest, GetMobileDeviceAccessOverrideResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Requests details of a specific Personal Access Token within the WorkMail organization.
 */export const getPersonalAccessTokenMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.GetPersonalAccessTokenMetadata" }, GetPersonalAccessTokenMetadataRequest, GetPersonalAccessTokenMetadataResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a paginated call to list the aliases associated with a given
 * entity.
 */export const listAliases = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListAliases" }, ListAliasesRequest, ListAliasesResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags applied to an WorkMail organization resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a new access control rule for the specified organization. The rule allows or
 * denies access to the organization for the specified IPv4 addresses, access protocol
 * actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces
 * the older rule.
 */export const putAccessControlRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.PutAccessControlRule" }, PutAccessControlRuleRequest, PutAccessControlRuleResponse, [EntityNotFoundException, InvalidParameterException, LimitExceededException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates the email monitoring configuration for a specified organization.
 */export const putEmailMonitoringConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.PutEmailMonitoringConfiguration" }, PutEmailMonitoringConfigurationRequest, PutEmailMonitoringConfigurationResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables integration between IAM Identity Center (IdC) and WorkMail to proxy authentication requests for mailbox users. You can connect your IdC directory or your external directory to WorkMail through
 * IdC and manage access to WorkMail mailboxes in a single place. For enhanced protection, you could enable Multifactor Authentication (MFA) and Personal Access Tokens.
 */export const putIdentityProviderConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.PutIdentityProviderConfiguration" }, PutIdentityProviderConfigurationRequest, PutIdentityProviderConfigurationResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Puts a retention policy to the specified organization.
 */export const putRetentionPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.PutRetentionPolicy" }, PutRetentionPolicyRequest, PutRetentionPolicyResponse, [InvalidParameterException, LimitExceededException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has
 * permanent permission to use the specified domain for sending your users' emails.
 */export const registerMailDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.RegisterMailDomain" }, RegisterMailDomainRequest, RegisterMailDomainResponse, [InvalidParameterException, LimitExceededException, MailDomainInUseException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers an existing and disabled user, group, or resource for WorkMail use by
 * associating a mailbox and calendaring capabilities. It performs no change if the user,
 * group, or resource is enabled and fails if the user, group, or resource is deleted. This
 * operation results in the accumulation of costs. For more information, see Pricing. The equivalent console
 * functionality for this operation is *Enable*.
 * 
 * Users can either be created by calling the CreateUser API operation
 * or they can be synchronized from your directory. For more information, see DeregisterFromWorkMail.
 */export const registerToWorkMail = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.RegisterToWorkMail" }, RegisterToWorkMailRequest, RegisterToWorkMailResponse, [DirectoryServiceAuthenticationFailedException, DirectoryUnavailableException, EmailAddressInUseException, EntityAlreadyRegisteredException, EntityNotFoundException, EntityStateException, InvalidParameterException, MailDomainNotFoundException, MailDomainStateException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows the administrator to reset the password for a user.
 */export const resetPassword = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ResetPassword" }, ResetPasswordRequest, ResetPasswordResponse, [DirectoryServiceAuthenticationFailedException, DirectoryUnavailableException, EntityNotFoundException, EntityStateException, InvalidParameterException, InvalidPasswordException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a mailbox export job to export MIME-format email messages and calendar items
 * from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3)
 * bucket. For more information, see Exporting mailbox content in
 * the *WorkMail Administrator Guide*.
 */export const startMailboxExportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.StartMailboxExportJob" }, StartMailboxExportJobRequest, StartMailboxExportJobResponse, [EntityNotFoundException, InvalidParameterException, LimitExceededException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access
 * policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a `SourceArn` or `SourceAccount` header.
 * 
 * The request must contain either one provider definition (`EwsProvider` or
 * `LambdaProvider`) or the `DomainName` parameter. If the
 * `DomainName` parameter is provided, the configuration stored under the
 * `DomainName` will be tested.
 */export const testAvailabilityConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.TestAvailabilityConfiguration" }, TestAvailabilityConfigurationRequest, TestAvailabilityConfigurationResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.
 */export const updateDefaultMailDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.UpdateDefaultMailDomain" }, UpdateDefaultMailDomainRequest, UpdateDefaultMailDomainResponse, [InvalidParameterException, MailDomainNotFoundException, MailDomainStateException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the primary email for a user, group, or resource. The current email is moved
 * into the list of aliases (or swapped between an existing alias and the current primary
 * email), and the email provided in the input is promoted as the primary.
 */export const updatePrimaryEmailAddress = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.UpdatePrimaryEmailAddress" }, UpdatePrimaryEmailAddressRequest, UpdatePrimaryEmailAddressResponse, [DirectoryServiceAuthenticationFailedException, DirectoryUnavailableException, EmailAddressInUseException, EntityNotFoundException, EntityStateException, InvalidParameterException, MailDomainNotFoundException, MailDomainStateException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an `AvailabilityConfiguration` for the given WorkMail organization and domain.
 */export const createAvailabilityConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.CreateAvailabilityConfiguration" }, CreateAvailabilityConfigurationRequest, CreateAvailabilityConfigurationResponse, [InvalidParameterException, LimitExceededException, NameAvailabilityException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a group that can be used in WorkMail by calling the RegisterToWorkMail operation.
 */export const createGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.CreateGroup" }, CreateGroupRequest, CreateGroupResponse, [DirectoryServiceAuthenticationFailedException, DirectoryUnavailableException, InvalidParameterException, NameAvailabilityException, OrganizationNotFoundException, OrganizationStateException, ReservedNameException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an impersonation role for the given WorkMail organization.
 * 
 * *Idempotency* ensures that an API request completes no more than one
 * time. With an idempotent request, if the original request completes successfully, any
 * subsequent retries also complete successfully without performing any further
 * actions.
 */export const createImpersonationRole = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.CreateImpersonationRole" }, CreateImpersonationRoleRequest, CreateImpersonationRoleResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, LimitExceededException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tests whether the given impersonation role can impersonate a target user.
 */export const getImpersonationRoleEffect = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.GetImpersonationRoleEffect" }, GetImpersonationRoleEffectRequest, GetImpersonationRoleEffectResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets details for a mail domain, including domain records required to configure your domain with recommended security.
 */export const getMailDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.GetMailDomain" }, GetMailDomainRequest, GetMailDomainResponse, [InvalidParameterException, MailDomainNotFoundException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access
 * rules for the WorkMail organization for a particular user's attributes.
 */export const getMobileDeviceAccessEffect = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.GetMobileDeviceAccessEffect" }, GetMobileDeviceAccessEffectRequest, GetMobileDeviceAccessEffectResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the access control rules for the specified organization.
 */export const listAccessControlRules = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListAccessControlRules" }, ListAccessControlRulesRequest, ListAccessControlRulesResponse, [OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an overview of the members of a group. Users and groups can be members of a
 * group.
 */export const listGroupMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListGroupMembers" }, ListGroupMembersRequest, ListGroupMembersResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the impersonation roles for the given WorkMail organization.
 */export const listImpersonationRoles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListImpersonationRoles" }, ListImpersonationRolesRequest, ListImpersonationRolesResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the mailbox export jobs started for the specified organization within the last
 * seven days.
 */export const listMailboxExportJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListMailboxExportJobs" }, ListMailboxExportJobsRequest, ListMailboxExportJobsResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the mailbox permissions associated with a user, group, or resource
 * mailbox.
 */export const listMailboxPermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListMailboxPermissions" }, ListMailboxPermissionsRequest, ListMailboxPermissionsResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the mail domains in a given WorkMail organization.
 */export const listMailDomains = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListMailDomains" }, ListMailDomainsRequest, ListMailDomainsResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.
 */export const listMobileDeviceAccessOverrides = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListMobileDeviceAccessOverrides" }, ListMobileDeviceAccessOverridesRequest, ListMobileDeviceAccessOverridesResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the mobile device access rules for the specified WorkMail organization.
 */export const listMobileDeviceAccessRules = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListMobileDeviceAccessRules" }, ListMobileDeviceAccessRulesRequest, ListMobileDeviceAccessRulesResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns summaries of the customer's organizations.
 */export const listOrganizations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListOrganizations" }, ListOrganizationsRequest, ListOrganizationsResponse, [InvalidParameterException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a summary of your Personal Access Tokens.
 */export const listPersonalAccessTokens = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListPersonalAccessTokens" }, ListPersonalAccessTokensRequest, ListPersonalAccessTokensResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the delegates associated with a resource. Users and groups can be resource
 * delegates and answer requests on behalf of the resource.
 */export const listResourceDelegates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListResourceDelegates" }, ListResourceDelegatesRequest, ListResourceDelegatesResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Applies the specified tags to the specified WorkMailorganization
 * resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.TagResource" }, TagResourceRequest, TagResourceResponse, [InvalidParameterException, OrganizationStateException, ResourceNotFoundException, TooManyTagsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates data for the resource. To have the latest information, it must be preceded by
 * a DescribeResource call. The dataset in the request should be the one
 * expected when performing another `DescribeResource` call.
 */export const updateResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.UpdateResource" }, UpdateResourceRequest, UpdateResourceResponse, [DirectoryUnavailableException, EmailAddressInUseException, EntityNotFoundException, EntityStateException, InvalidConfigurationException, InvalidParameterException, MailDomainNotFoundException, MailDomainStateException, NameAvailabilityException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see Adding an organization in the *WorkMail Administrator Guide*.
 * 
 * You can associate multiple email domains with an organization, then choose your
 * default email domain from the WorkMail console. You can also associate a domain that is managed
 * in an Amazon Route 53 public hosted zone. For more information, see Adding a
 * domain and Choosing the default domain
 * in the *WorkMail Administrator Guide*.
 * 
 * Optionally, you can use a customer managed key from AWS Key Management Service (AWS
 * KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail
 * creates a default, AWS managed key for you.
 */export const createOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.CreateOrganization" }, CreateOrganizationRequest, CreateOrganizationResponse, [DirectoryInUseException, DirectoryUnavailableException, InvalidParameterException, LimitExceededException, NameAvailabilityException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all the `AvailabilityConfiguration`'s for the given WorkMail organization.
 */export const listAvailabilityConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListAvailabilityConfigurations" }, ListAvailabilityConfigurationsRequest, ListAvailabilityConfigurationsResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns summaries of the organization's groups.
 */export const listGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListGroups" }, ListGroupsRequest, ListGroupsResponse, [EntityNotFoundException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns all the groups to which an entity belongs.
 */export const listGroupsForEntity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListGroupsForEntity" }, ListGroupsForEntityRequest, ListGroupsForEntityResponse, [EntityNotFoundException, EntityStateException, InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns summaries of the organization's resources.
 */export const listResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListResources" }, ListResourcesRequest, ListResourcesResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns summaries of the organization's users.
 */export const listUsers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-01", sdkId: "WorkMail", sigV4ServiceName: "workmail", name: "WorkMailService.ListUsers" }, ListUsersRequest, ListUsersResponse, [InvalidParameterException, OrganizationNotFoundException, OrganizationStateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

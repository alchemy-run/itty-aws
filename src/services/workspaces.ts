import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DescribeAccountRequest extends S.Class<DescribeAccountRequest>("DescribeAccountRequest")({}) {}
export const IpGroupIdList = S.Array(S.String);
export const ClientDeviceTypeList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export const ApplicationAssociatedResourceTypeList = S.Array(S.String);
export const WorkSpaceApplicationIdList = S.Array(S.String);
export const ComputeList = S.Array(S.String);
export const OperatingSystemNameList = S.Array(S.String);
export const BundleAssociatedResourceTypeList = S.Array(S.String);
export const ResourceIdList = S.Array(S.String);
export const ConnectionAliasIdList = S.Array(S.String);
export const ImageAssociatedResourceTypeList = S.Array(S.String);
export const WorkSpaceAssociatedResourceTypeList = S.Array(S.String);
export const BundleIdList = S.Array(S.String);
export const DirectoryIdList = S.Array(S.String);
export const WorkspaceDirectoryNameList = S.Array(S.String);
export const WorkspaceImageIdList = S.Array(S.String);
export const WorkspaceIdList = S.Array(S.String);
export const WorkspacesPoolIds = S.Array(S.String);
export const ApplicationList = S.Array(S.String);
export const LinkStatusFilterList = S.Array(S.String);
export const DeletableCertificateBasedAuthPropertiesList = S.Array(S.String);
export const DeletableSamlPropertiesList = S.Array(S.String);
export const SubnetIds = S.Array(S.String);
export const IpRevokedRuleList = S.Array(S.String);
export class AcceptAccountLinkInvitationRequest extends S.Class<AcceptAccountLinkInvitationRequest>("AcceptAccountLinkInvitationRequest")({LinkId: S.String, ClientToken: S.optional(S.String)}) {}
export class AssociateConnectionAliasRequest extends S.Class<AssociateConnectionAliasRequest>("AssociateConnectionAliasRequest")({AliasId: S.String, ResourceId: S.String}) {}
export class AssociateIpGroupsRequest extends S.Class<AssociateIpGroupsRequest>("AssociateIpGroupsRequest")({DirectoryId: S.String, GroupIds: IpGroupIdList}) {}
export class AssociateIpGroupsResult extends S.Class<AssociateIpGroupsResult>("AssociateIpGroupsResult")({}) {}
export class AssociateWorkspaceApplicationRequest extends S.Class<AssociateWorkspaceApplicationRequest>("AssociateWorkspaceApplicationRequest")({WorkspaceId: S.String, ApplicationId: S.String}) {}
export class CreateAccountLinkInvitationRequest extends S.Class<CreateAccountLinkInvitationRequest>("CreateAccountLinkInvitationRequest")({TargetAccountId: S.String, ClientToken: S.optional(S.String)}) {}
export class CreateConnectClientAddInRequest extends S.Class<CreateConnectClientAddInRequest>("CreateConnectClientAddInRequest")({ResourceId: S.String, Name: S.String, URL: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class CreateConnectionAliasRequest extends S.Class<CreateConnectionAliasRequest>("CreateConnectionAliasRequest")({ConnectionString: S.String, Tags: S.optional(TagList)}) {}
export class IpRuleItem extends S.Class<IpRuleItem>("IpRuleItem")({ipRule: S.optional(S.String), ruleDesc: S.optional(S.String)}) {}
export const IpRuleList = S.Array(IpRuleItem);
export class CreateIpGroupRequest extends S.Class<CreateIpGroupRequest>("CreateIpGroupRequest")({GroupName: S.String, GroupDesc: S.optional(S.String), UserRules: S.optional(IpRuleList), Tags: S.optional(TagList)}) {}
export class CreateTagsRequest extends S.Class<CreateTagsRequest>("CreateTagsRequest")({ResourceId: S.String, Tags: TagList}) {}
export class CreateTagsResult extends S.Class<CreateTagsResult>("CreateTagsResult")({}) {}
export class CreateUpdatedWorkspaceImageRequest extends S.Class<CreateUpdatedWorkspaceImageRequest>("CreateUpdatedWorkspaceImageRequest")({Name: S.String, Description: S.String, SourceImageId: S.String, Tags: S.optional(TagList)}) {}
export class CreateWorkspaceImageRequest extends S.Class<CreateWorkspaceImageRequest>("CreateWorkspaceImageRequest")({Name: S.String, Description: S.String, WorkspaceId: S.String, Tags: S.optional(TagList)}) {}
export class DeleteAccountLinkInvitationRequest extends S.Class<DeleteAccountLinkInvitationRequest>("DeleteAccountLinkInvitationRequest")({LinkId: S.String, ClientToken: S.optional(S.String)}) {}
export class DeleteClientBrandingRequest extends S.Class<DeleteClientBrandingRequest>("DeleteClientBrandingRequest")({ResourceId: S.String, Platforms: ClientDeviceTypeList}) {}
export class DeleteClientBrandingResult extends S.Class<DeleteClientBrandingResult>("DeleteClientBrandingResult")({}) {}
export class DeleteConnectClientAddInRequest extends S.Class<DeleteConnectClientAddInRequest>("DeleteConnectClientAddInRequest")({AddInId: S.String, ResourceId: S.String}) {}
export class DeleteConnectClientAddInResult extends S.Class<DeleteConnectClientAddInResult>("DeleteConnectClientAddInResult")({}) {}
export class DeleteConnectionAliasRequest extends S.Class<DeleteConnectionAliasRequest>("DeleteConnectionAliasRequest")({AliasId: S.String}) {}
export class DeleteConnectionAliasResult extends S.Class<DeleteConnectionAliasResult>("DeleteConnectionAliasResult")({}) {}
export class DeleteIpGroupRequest extends S.Class<DeleteIpGroupRequest>("DeleteIpGroupRequest")({GroupId: S.String}) {}
export class DeleteIpGroupResult extends S.Class<DeleteIpGroupResult>("DeleteIpGroupResult")({}) {}
export class DeleteTagsRequest extends S.Class<DeleteTagsRequest>("DeleteTagsRequest")({ResourceId: S.String, TagKeys: TagKeyList}) {}
export class DeleteTagsResult extends S.Class<DeleteTagsResult>("DeleteTagsResult")({}) {}
export class DeleteWorkspaceBundleRequest extends S.Class<DeleteWorkspaceBundleRequest>("DeleteWorkspaceBundleRequest")({BundleId: S.optional(S.String)}) {}
export class DeleteWorkspaceBundleResult extends S.Class<DeleteWorkspaceBundleResult>("DeleteWorkspaceBundleResult")({}) {}
export class DeleteWorkspaceImageRequest extends S.Class<DeleteWorkspaceImageRequest>("DeleteWorkspaceImageRequest")({ImageId: S.String}) {}
export class DeleteWorkspaceImageResult extends S.Class<DeleteWorkspaceImageResult>("DeleteWorkspaceImageResult")({}) {}
export class DeployWorkspaceApplicationsRequest extends S.Class<DeployWorkspaceApplicationsRequest>("DeployWorkspaceApplicationsRequest")({WorkspaceId: S.String, Force: S.optional(S.Boolean)}) {}
export class DeregisterWorkspaceDirectoryRequest extends S.Class<DeregisterWorkspaceDirectoryRequest>("DeregisterWorkspaceDirectoryRequest")({DirectoryId: S.String}) {}
export class DeregisterWorkspaceDirectoryResult extends S.Class<DeregisterWorkspaceDirectoryResult>("DeregisterWorkspaceDirectoryResult")({}) {}
export class DescribeAccountResult extends S.Class<DescribeAccountResult>("DescribeAccountResult")({DedicatedTenancySupport: S.optional(S.String), DedicatedTenancyManagementCidrRange: S.optional(S.String), DedicatedTenancyAccountType: S.optional(S.String), Message: S.optional(S.String)}) {}
export class DescribeAccountModificationsRequest extends S.Class<DescribeAccountModificationsRequest>("DescribeAccountModificationsRequest")({NextToken: S.optional(S.String)}) {}
export class DescribeApplicationAssociationsRequest extends S.Class<DescribeApplicationAssociationsRequest>("DescribeApplicationAssociationsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ApplicationId: S.String, AssociatedResourceTypes: ApplicationAssociatedResourceTypeList}) {}
export class DescribeApplicationsRequest extends S.Class<DescribeApplicationsRequest>("DescribeApplicationsRequest")({ApplicationIds: S.optional(WorkSpaceApplicationIdList), ComputeTypeNames: S.optional(ComputeList), LicenseType: S.optional(S.String), OperatingSystemNames: S.optional(OperatingSystemNameList), Owner: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeBundleAssociationsRequest extends S.Class<DescribeBundleAssociationsRequest>("DescribeBundleAssociationsRequest")({BundleId: S.String, AssociatedResourceTypes: BundleAssociatedResourceTypeList}) {}
export class DescribeClientBrandingRequest extends S.Class<DescribeClientBrandingRequest>("DescribeClientBrandingRequest")({ResourceId: S.String}) {}
export class DescribeClientPropertiesRequest extends S.Class<DescribeClientPropertiesRequest>("DescribeClientPropertiesRequest")({ResourceIds: ResourceIdList}) {}
export class DescribeConnectClientAddInsRequest extends S.Class<DescribeConnectClientAddInsRequest>("DescribeConnectClientAddInsRequest")({ResourceId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeConnectionAliasesRequest extends S.Class<DescribeConnectionAliasesRequest>("DescribeConnectionAliasesRequest")({AliasIds: S.optional(ConnectionAliasIdList), ResourceId: S.optional(S.String), Limit: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeConnectionAliasPermissionsRequest extends S.Class<DescribeConnectionAliasPermissionsRequest>("DescribeConnectionAliasPermissionsRequest")({AliasId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeCustomWorkspaceImageImportRequest extends S.Class<DescribeCustomWorkspaceImageImportRequest>("DescribeCustomWorkspaceImageImportRequest")({ImageId: S.String}) {}
export class DescribeImageAssociationsRequest extends S.Class<DescribeImageAssociationsRequest>("DescribeImageAssociationsRequest")({ImageId: S.String, AssociatedResourceTypes: ImageAssociatedResourceTypeList}) {}
export class DescribeIpGroupsRequest extends S.Class<DescribeIpGroupsRequest>("DescribeIpGroupsRequest")({GroupIds: S.optional(IpGroupIdList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeTagsRequest extends S.Class<DescribeTagsRequest>("DescribeTagsRequest")({ResourceId: S.String}) {}
export class DescribeWorkspaceAssociationsRequest extends S.Class<DescribeWorkspaceAssociationsRequest>("DescribeWorkspaceAssociationsRequest")({WorkspaceId: S.String, AssociatedResourceTypes: WorkSpaceAssociatedResourceTypeList}) {}
export class DescribeWorkspaceBundlesRequest extends S.Class<DescribeWorkspaceBundlesRequest>("DescribeWorkspaceBundlesRequest")({BundleIds: S.optional(BundleIdList), Owner: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class DescribeWorkspaceImagePermissionsRequest extends S.Class<DescribeWorkspaceImagePermissionsRequest>("DescribeWorkspaceImagePermissionsRequest")({ImageId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeWorkspaceImagesRequest extends S.Class<DescribeWorkspaceImagesRequest>("DescribeWorkspaceImagesRequest")({ImageIds: S.optional(WorkspaceImageIdList), ImageType: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeWorkspacesRequest extends S.Class<DescribeWorkspacesRequest>("DescribeWorkspacesRequest")({WorkspaceIds: S.optional(WorkspaceIdList), DirectoryId: S.optional(S.String), UserName: S.optional(S.String), BundleId: S.optional(S.String), Limit: S.optional(S.Number), NextToken: S.optional(S.String), WorkspaceName: S.optional(S.String)}) {}
export class DescribeWorkspacesConnectionStatusRequest extends S.Class<DescribeWorkspacesConnectionStatusRequest>("DescribeWorkspacesConnectionStatusRequest")({WorkspaceIds: S.optional(WorkspaceIdList), NextToken: S.optional(S.String)}) {}
export class DescribeWorkspaceSnapshotsRequest extends S.Class<DescribeWorkspaceSnapshotsRequest>("DescribeWorkspaceSnapshotsRequest")({WorkspaceId: S.String}) {}
export class DescribeWorkspacesPoolSessionsRequest extends S.Class<DescribeWorkspacesPoolSessionsRequest>("DescribeWorkspacesPoolSessionsRequest")({PoolId: S.String, UserId: S.optional(S.String), Limit: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DisassociateConnectionAliasRequest extends S.Class<DisassociateConnectionAliasRequest>("DisassociateConnectionAliasRequest")({AliasId: S.String}) {}
export class DisassociateConnectionAliasResult extends S.Class<DisassociateConnectionAliasResult>("DisassociateConnectionAliasResult")({}) {}
export class DisassociateIpGroupsRequest extends S.Class<DisassociateIpGroupsRequest>("DisassociateIpGroupsRequest")({DirectoryId: S.String, GroupIds: IpGroupIdList}) {}
export class DisassociateIpGroupsResult extends S.Class<DisassociateIpGroupsResult>("DisassociateIpGroupsResult")({}) {}
export class DisassociateWorkspaceApplicationRequest extends S.Class<DisassociateWorkspaceApplicationRequest>("DisassociateWorkspaceApplicationRequest")({WorkspaceId: S.String, ApplicationId: S.String}) {}
export class GetAccountLinkRequest extends S.Class<GetAccountLinkRequest>("GetAccountLinkRequest")({LinkId: S.optional(S.String), LinkedAccountId: S.optional(S.String)}) {}
export class ImportWorkspaceImageRequest extends S.Class<ImportWorkspaceImageRequest>("ImportWorkspaceImageRequest")({Ec2ImageId: S.String, IngestionProcess: S.String, ImageName: S.String, ImageDescription: S.String, Tags: S.optional(TagList), Applications: S.optional(ApplicationList)}) {}
export class ListAccountLinksRequest extends S.Class<ListAccountLinksRequest>("ListAccountLinksRequest")({LinkStatusFilter: S.optional(LinkStatusFilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListAvailableManagementCidrRangesRequest extends S.Class<ListAvailableManagementCidrRangesRequest>("ListAvailableManagementCidrRangesRequest")({ManagementCidrRangeConstraint: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class MigrateWorkspaceRequest extends S.Class<MigrateWorkspaceRequest>("MigrateWorkspaceRequest")({SourceWorkspaceId: S.String, BundleId: S.String}) {}
export class ModifyAccountRequest extends S.Class<ModifyAccountRequest>("ModifyAccountRequest")({DedicatedTenancySupport: S.optional(S.String), DedicatedTenancyManagementCidrRange: S.optional(S.String)}) {}
export class ModifyEndpointEncryptionModeRequest extends S.Class<ModifyEndpointEncryptionModeRequest>("ModifyEndpointEncryptionModeRequest")({DirectoryId: S.String, EndpointEncryptionMode: S.String}) {}
export class ModifyEndpointEncryptionModeResponse extends S.Class<ModifyEndpointEncryptionModeResponse>("ModifyEndpointEncryptionModeResponse")({}) {}
export class ModifyWorkspaceStateRequest extends S.Class<ModifyWorkspaceStateRequest>("ModifyWorkspaceStateRequest")({WorkspaceId: S.String, WorkspaceState: S.String}) {}
export class ModifyWorkspaceStateResult extends S.Class<ModifyWorkspaceStateResult>("ModifyWorkspaceStateResult")({}) {}
export class RejectAccountLinkInvitationRequest extends S.Class<RejectAccountLinkInvitationRequest>("RejectAccountLinkInvitationRequest")({LinkId: S.String, ClientToken: S.optional(S.String)}) {}
export class RestoreWorkspaceRequest extends S.Class<RestoreWorkspaceRequest>("RestoreWorkspaceRequest")({WorkspaceId: S.String}) {}
export class RestoreWorkspaceResult extends S.Class<RestoreWorkspaceResult>("RestoreWorkspaceResult")({}) {}
export class RevokeIpRulesRequest extends S.Class<RevokeIpRulesRequest>("RevokeIpRulesRequest")({GroupId: S.String, UserRules: IpRevokedRuleList}) {}
export class RevokeIpRulesResult extends S.Class<RevokeIpRulesResult>("RevokeIpRulesResult")({}) {}
export class StartWorkspacesPoolRequest extends S.Class<StartWorkspacesPoolRequest>("StartWorkspacesPoolRequest")({PoolId: S.String}) {}
export class StartWorkspacesPoolResult extends S.Class<StartWorkspacesPoolResult>("StartWorkspacesPoolResult")({}) {}
export class StopWorkspacesPoolRequest extends S.Class<StopWorkspacesPoolRequest>("StopWorkspacesPoolRequest")({PoolId: S.String}) {}
export class StopWorkspacesPoolResult extends S.Class<StopWorkspacesPoolResult>("StopWorkspacesPoolResult")({}) {}
export class TerminateWorkspacesPoolRequest extends S.Class<TerminateWorkspacesPoolRequest>("TerminateWorkspacesPoolRequest")({PoolId: S.String}) {}
export class TerminateWorkspacesPoolResult extends S.Class<TerminateWorkspacesPoolResult>("TerminateWorkspacesPoolResult")({}) {}
export class TerminateWorkspacesPoolSessionRequest extends S.Class<TerminateWorkspacesPoolSessionRequest>("TerminateWorkspacesPoolSessionRequest")({SessionId: S.String}) {}
export class TerminateWorkspacesPoolSessionResult extends S.Class<TerminateWorkspacesPoolSessionResult>("TerminateWorkspacesPoolSessionResult")({}) {}
export class UpdateConnectClientAddInRequest extends S.Class<UpdateConnectClientAddInRequest>("UpdateConnectClientAddInRequest")({AddInId: S.String, ResourceId: S.String, Name: S.optional(S.String), URL: S.optional(S.String)}) {}
export class UpdateConnectClientAddInResult extends S.Class<UpdateConnectClientAddInResult>("UpdateConnectClientAddInResult")({}) {}
export class UpdateRulesOfIpGroupRequest extends S.Class<UpdateRulesOfIpGroupRequest>("UpdateRulesOfIpGroupRequest")({GroupId: S.String, UserRules: IpRuleList}) {}
export class UpdateRulesOfIpGroupResult extends S.Class<UpdateRulesOfIpGroupResult>("UpdateRulesOfIpGroupResult")({}) {}
export class UpdateWorkspaceBundleRequest extends S.Class<UpdateWorkspaceBundleRequest>("UpdateWorkspaceBundleRequest")({BundleId: S.optional(S.String), ImageId: S.optional(S.String)}) {}
export class UpdateWorkspaceBundleResult extends S.Class<UpdateWorkspaceBundleResult>("UpdateWorkspaceBundleResult")({}) {}
export class UpdateWorkspaceImagePermissionRequest extends S.Class<UpdateWorkspaceImagePermissionRequest>("UpdateWorkspaceImagePermissionRequest")({ImageId: S.String, AllowCopyImage: S.Boolean, SharedAccountId: S.String}) {}
export class UpdateWorkspaceImagePermissionResult extends S.Class<UpdateWorkspaceImagePermissionResult>("UpdateWorkspaceImagePermissionResult")({}) {}
export class Capacity extends S.Class<Capacity>("Capacity")({DesiredUserSessions: S.Number}) {}
export class ApplicationSettingsRequest extends S.Class<ApplicationSettingsRequest>("ApplicationSettingsRequest")({Status: S.String, SettingsGroup: S.optional(S.String)}) {}
export class TimeoutSettings extends S.Class<TimeoutSettings>("TimeoutSettings")({DisconnectTimeoutInSeconds: S.optional(S.Number), IdleDisconnectTimeoutInSeconds: S.optional(S.Number), MaxUserDurationInSeconds: S.optional(S.Number)}) {}
export class UpdateWorkspacesPoolRequest extends S.Class<UpdateWorkspacesPoolRequest>("UpdateWorkspacesPoolRequest")({PoolId: S.String, Description: S.optional(S.String), BundleId: S.optional(S.String), DirectoryId: S.optional(S.String), Capacity: S.optional(Capacity), ApplicationSettings: S.optional(ApplicationSettingsRequest), TimeoutSettings: S.optional(TimeoutSettings), RunningMode: S.optional(S.String)}) {}
export const DescribeWorkspaceDirectoriesFilterValues = S.Array(S.String);
export const DescribeWorkspacesPoolsFilterValues = S.Array(S.String);
export const ProtocolList = S.Array(S.String);
export class StandbyWorkspace extends S.Class<StandbyWorkspace>("StandbyWorkspace")({PrimaryWorkspaceId: S.String, VolumeEncryptionKey: S.optional(S.String), DirectoryId: S.String, Tags: S.optional(TagList), DataReplication: S.optional(S.String)}) {}
export const StandbyWorkspacesList = S.Array(StandbyWorkspace);
export class ComputeType extends S.Class<ComputeType>("ComputeType")({Name: S.optional(S.String)}) {}
export class UserStorage extends S.Class<UserStorage>("UserStorage")({Capacity: S.String}) {}
export class RootStorage extends S.Class<RootStorage>("RootStorage")({Capacity: S.String}) {}
export class GlobalAcceleratorForWorkSpace extends S.Class<GlobalAcceleratorForWorkSpace>("GlobalAcceleratorForWorkSpace")({Mode: S.String, PreferredProtocol: S.optional(S.String)}) {}
export class WorkspaceProperties extends S.Class<WorkspaceProperties>("WorkspaceProperties")({RunningMode: S.optional(S.String), RunningModeAutoStopTimeoutInMinutes: S.optional(S.Number), RootVolumeSizeGib: S.optional(S.Number), UserVolumeSizeGib: S.optional(S.Number), ComputeTypeName: S.optional(S.String), Protocols: S.optional(ProtocolList), OperatingSystemName: S.optional(S.String), GlobalAccelerator: S.optional(GlobalAcceleratorForWorkSpace)}) {}
export class WorkspaceRequest extends S.Class<WorkspaceRequest>("WorkspaceRequest")({DirectoryId: S.String, UserName: S.String, BundleId: S.String, VolumeEncryptionKey: S.optional(S.String), UserVolumeEncryptionEnabled: S.optional(S.Boolean), RootVolumeEncryptionEnabled: S.optional(S.Boolean), WorkspaceProperties: S.optional(WorkspaceProperties), Tags: S.optional(TagList), WorkspaceName: S.optional(S.String), Ipv6Address: S.optional(S.String)}) {}
export const WorkspaceRequestList = S.Array(WorkspaceRequest);
export class ConnectionAliasPermission extends S.Class<ConnectionAliasPermission>("ConnectionAliasPermission")({SharedAccountId: S.String, AllowAssociation: S.Boolean}) {}
export const ConnectionAliasPermissions = S.Array(ConnectionAliasPermission);
export class AssociationStateReason extends S.Class<AssociationStateReason>("AssociationStateReason")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export class WorkspaceResourceAssociation extends S.Class<WorkspaceResourceAssociation>("WorkspaceResourceAssociation")({AssociatedResourceId: S.optional(S.String), AssociatedResourceType: S.optional(S.String), Created: S.optional(S.Date), LastUpdatedTime: S.optional(S.Date), State: S.optional(S.String), StateReason: S.optional(AssociationStateReason), WorkspaceId: S.optional(S.String)}) {}
export const WorkspaceResourceAssociationList = S.Array(WorkspaceResourceAssociation);
export class DescribeWorkspaceDirectoriesFilter extends S.Class<DescribeWorkspaceDirectoriesFilter>("DescribeWorkspaceDirectoriesFilter")({Name: S.String, Values: DescribeWorkspaceDirectoriesFilterValues}) {}
export const DescribeWorkspaceDirectoriesFilterList = S.Array(DescribeWorkspaceDirectoriesFilter);
export class DescribeWorkspacesPoolsFilter extends S.Class<DescribeWorkspacesPoolsFilter>("DescribeWorkspacesPoolsFilter")({Name: S.String, Values: DescribeWorkspacesPoolsFilterValues, Operator: S.String}) {}
export const DescribeWorkspacesPoolsFilters = S.Array(DescribeWorkspacesPoolsFilter);
export const LoginMessage = S.Record({key: S.String, value: S.String});
export class IosImportClientBrandingAttributes extends S.Class<IosImportClientBrandingAttributes>("IosImportClientBrandingAttributes")({Logo: S.optional(H.StreamBody()), Logo2x: S.optional(H.StreamBody()), Logo3x: S.optional(H.StreamBody()), SupportEmail: S.optional(S.String), SupportLink: S.optional(S.String), ForgotPasswordLink: S.optional(S.String), LoginMessage: S.optional(LoginMessage)}) {}
export const ImageSourceIdentifier = S.Union(S.String, S.String, S.String);
export class AccountLink extends S.Class<AccountLink>("AccountLink")({AccountLinkId: S.optional(S.String), AccountLinkStatus: S.optional(S.String), SourceAccountId: S.optional(S.String), TargetAccountId: S.optional(S.String)}) {}
export const AccountLinkList = S.Array(AccountLink);
export const DedicatedTenancyCidrRangeList = S.Array(S.String);
export class CertificateBasedAuthProperties extends S.Class<CertificateBasedAuthProperties>("CertificateBasedAuthProperties")({Status: S.optional(S.String), CertificateAuthorityArn: S.optional(S.String)}) {}
export class ClientProperties extends S.Class<ClientProperties>("ClientProperties")({ReconnectEnabled: S.optional(S.String), LogUploadEnabled: S.optional(S.String)}) {}
export class SamlProperties extends S.Class<SamlProperties>("SamlProperties")({Status: S.optional(S.String), UserAccessUrl: S.optional(S.String), RelayStateParameterName: S.optional(S.String)}) {}
export class SelfservicePermissions extends S.Class<SelfservicePermissions>("SelfservicePermissions")({RestartWorkspace: S.optional(S.String), IncreaseVolumeSize: S.optional(S.String), ChangeComputeType: S.optional(S.String), SwitchRunningMode: S.optional(S.String), RebuildWorkspace: S.optional(S.String)}) {}
export class WorkspaceCreationProperties extends S.Class<WorkspaceCreationProperties>("WorkspaceCreationProperties")({EnableInternetAccess: S.optional(S.Boolean), DefaultOu: S.optional(S.String), CustomSecurityGroupId: S.optional(S.String), UserEnabledAsLocalAdministrator: S.optional(S.Boolean), EnableMaintenanceMode: S.optional(S.Boolean), InstanceIamRoleArn: S.optional(S.String)}) {}
export class RebootRequest extends S.Class<RebootRequest>("RebootRequest")({WorkspaceId: S.String}) {}
export const RebootWorkspaceRequests = S.Array(RebootRequest);
export class RebuildRequest extends S.Class<RebuildRequest>("RebuildRequest")({WorkspaceId: S.String}) {}
export const RebuildWorkspaceRequests = S.Array(RebuildRequest);
export class MicrosoftEntraConfig extends S.Class<MicrosoftEntraConfig>("MicrosoftEntraConfig")({TenantId: S.optional(S.String), ApplicationConfigSecretArn: S.optional(S.String)}) {}
export class ActiveDirectoryConfig extends S.Class<ActiveDirectoryConfig>("ActiveDirectoryConfig")({DomainName: S.String, ServiceAccountSecretArn: S.String}) {}
export class StartRequest extends S.Class<StartRequest>("StartRequest")({WorkspaceId: S.optional(S.String)}) {}
export const StartWorkspaceRequests = S.Array(StartRequest);
export class StopRequest extends S.Class<StopRequest>("StopRequest")({WorkspaceId: S.optional(S.String)}) {}
export const StopWorkspaceRequests = S.Array(StopRequest);
export class TerminateRequest extends S.Class<TerminateRequest>("TerminateRequest")({WorkspaceId: S.String}) {}
export const TerminateWorkspaceRequests = S.Array(TerminateRequest);
export const InternetFallbackProtocolList = S.Array(S.String);
export class AssociateConnectionAliasResult extends S.Class<AssociateConnectionAliasResult>("AssociateConnectionAliasResult")({ConnectionIdentifier: S.optional(S.String)}) {}
export class AuthorizeIpRulesRequest extends S.Class<AuthorizeIpRulesRequest>("AuthorizeIpRulesRequest")({GroupId: S.String, UserRules: IpRuleList}) {}
export class AuthorizeIpRulesResult extends S.Class<AuthorizeIpRulesResult>("AuthorizeIpRulesResult")({}) {}
export class CopyWorkspaceImageRequest extends S.Class<CopyWorkspaceImageRequest>("CopyWorkspaceImageRequest")({Name: S.String, Description: S.optional(S.String), SourceImageId: S.String, SourceRegion: S.String, Tags: S.optional(TagList)}) {}
export class CreateAccountLinkInvitationResult extends S.Class<CreateAccountLinkInvitationResult>("CreateAccountLinkInvitationResult")({AccountLink: S.optional(AccountLink)}) {}
export class CreateConnectClientAddInResult extends S.Class<CreateConnectClientAddInResult>("CreateConnectClientAddInResult")({AddInId: S.optional(S.String)}) {}
export class CreateConnectionAliasResult extends S.Class<CreateConnectionAliasResult>("CreateConnectionAliasResult")({AliasId: S.optional(S.String)}) {}
export class CreateIpGroupResult extends S.Class<CreateIpGroupResult>("CreateIpGroupResult")({GroupId: S.optional(S.String)}) {}
export class CreateStandbyWorkspacesRequest extends S.Class<CreateStandbyWorkspacesRequest>("CreateStandbyWorkspacesRequest")({PrimaryRegion: S.String, StandbyWorkspaces: StandbyWorkspacesList}) {}
export class CreateUpdatedWorkspaceImageResult extends S.Class<CreateUpdatedWorkspaceImageResult>("CreateUpdatedWorkspaceImageResult")({ImageId: S.optional(S.String)}) {}
export class CreateWorkspaceBundleRequest extends S.Class<CreateWorkspaceBundleRequest>("CreateWorkspaceBundleRequest")({BundleName: S.String, BundleDescription: S.String, ImageId: S.String, ComputeType: ComputeType, UserStorage: UserStorage, RootStorage: S.optional(RootStorage), Tags: S.optional(TagList)}) {}
export class CreateWorkspacesRequest extends S.Class<CreateWorkspacesRequest>("CreateWorkspacesRequest")({Workspaces: WorkspaceRequestList}) {}
export class CreateWorkspacesPoolRequest extends S.Class<CreateWorkspacesPoolRequest>("CreateWorkspacesPoolRequest")({PoolName: S.String, Description: S.String, BundleId: S.String, DirectoryId: S.String, Capacity: Capacity, Tags: S.optional(TagList), ApplicationSettings: S.optional(ApplicationSettingsRequest), TimeoutSettings: S.optional(TimeoutSettings), RunningMode: S.optional(S.String)}) {}
export class DeleteAccountLinkInvitationResult extends S.Class<DeleteAccountLinkInvitationResult>("DeleteAccountLinkInvitationResult")({AccountLink: S.optional(AccountLink)}) {}
export class DescribeConnectionAliasPermissionsResult extends S.Class<DescribeConnectionAliasPermissionsResult>("DescribeConnectionAliasPermissionsResult")({AliasId: S.optional(S.String), ConnectionAliasPermissions: S.optional(ConnectionAliasPermissions), NextToken: S.optional(S.String)}) {}
export class DescribeTagsResult extends S.Class<DescribeTagsResult>("DescribeTagsResult")({TagList: S.optional(TagList)}) {}
export class DescribeWorkspaceAssociationsResult extends S.Class<DescribeWorkspaceAssociationsResult>("DescribeWorkspaceAssociationsResult")({Associations: S.optional(WorkspaceResourceAssociationList)}) {}
export class DescribeWorkspaceDirectoriesRequest extends S.Class<DescribeWorkspaceDirectoriesRequest>("DescribeWorkspaceDirectoriesRequest")({DirectoryIds: S.optional(DirectoryIdList), WorkspaceDirectoryNames: S.optional(WorkspaceDirectoryNameList), Limit: S.optional(S.Number), NextToken: S.optional(S.String), Filters: S.optional(DescribeWorkspaceDirectoriesFilterList)}) {}
export class DescribeWorkspacesPoolsRequest extends S.Class<DescribeWorkspacesPoolsRequest>("DescribeWorkspacesPoolsRequest")({PoolIds: S.optional(WorkspacesPoolIds), Filters: S.optional(DescribeWorkspacesPoolsFilters), Limit: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DisassociateWorkspaceApplicationResult extends S.Class<DisassociateWorkspaceApplicationResult>("DisassociateWorkspaceApplicationResult")({Association: S.optional(WorkspaceResourceAssociation)}) {}
export class GetAccountLinkResult extends S.Class<GetAccountLinkResult>("GetAccountLinkResult")({AccountLink: S.optional(AccountLink)}) {}
export class ImportCustomWorkspaceImageRequest extends S.Class<ImportCustomWorkspaceImageRequest>("ImportCustomWorkspaceImageRequest")({ImageName: S.String, ImageDescription: S.String, ComputeType: S.String, Protocol: S.String, ImageSource: ImageSourceIdentifier, InfrastructureConfigurationArn: S.String, Platform: S.String, OsVersion: S.String, Tags: S.optional(TagList)}) {}
export class ImportWorkspaceImageResult extends S.Class<ImportWorkspaceImageResult>("ImportWorkspaceImageResult")({ImageId: S.optional(S.String)}) {}
export class ListAccountLinksResult extends S.Class<ListAccountLinksResult>("ListAccountLinksResult")({AccountLinks: S.optional(AccountLinkList), NextToken: S.optional(S.String)}) {}
export class ListAvailableManagementCidrRangesResult extends S.Class<ListAvailableManagementCidrRangesResult>("ListAvailableManagementCidrRangesResult")({ManagementCidrRanges: S.optional(DedicatedTenancyCidrRangeList), NextToken: S.optional(S.String)}) {}
export class MigrateWorkspaceResult extends S.Class<MigrateWorkspaceResult>("MigrateWorkspaceResult")({SourceWorkspaceId: S.optional(S.String), TargetWorkspaceId: S.optional(S.String)}) {}
export class ModifyAccountResult extends S.Class<ModifyAccountResult>("ModifyAccountResult")({Message: S.optional(S.String)}) {}
export class ModifyCertificateBasedAuthPropertiesRequest extends S.Class<ModifyCertificateBasedAuthPropertiesRequest>("ModifyCertificateBasedAuthPropertiesRequest")({ResourceId: S.String, CertificateBasedAuthProperties: S.optional(CertificateBasedAuthProperties), PropertiesToDelete: S.optional(DeletableCertificateBasedAuthPropertiesList)}) {}
export class ModifyCertificateBasedAuthPropertiesResult extends S.Class<ModifyCertificateBasedAuthPropertiesResult>("ModifyCertificateBasedAuthPropertiesResult")({}) {}
export class ModifyClientPropertiesRequest extends S.Class<ModifyClientPropertiesRequest>("ModifyClientPropertiesRequest")({ResourceId: S.String, ClientProperties: ClientProperties}) {}
export class ModifyClientPropertiesResult extends S.Class<ModifyClientPropertiesResult>("ModifyClientPropertiesResult")({}) {}
export class ModifySamlPropertiesRequest extends S.Class<ModifySamlPropertiesRequest>("ModifySamlPropertiesRequest")({ResourceId: S.String, SamlProperties: S.optional(SamlProperties), PropertiesToDelete: S.optional(DeletableSamlPropertiesList)}) {}
export class ModifySamlPropertiesResult extends S.Class<ModifySamlPropertiesResult>("ModifySamlPropertiesResult")({}) {}
export class ModifySelfservicePermissionsRequest extends S.Class<ModifySelfservicePermissionsRequest>("ModifySelfservicePermissionsRequest")({ResourceId: S.String, SelfservicePermissions: SelfservicePermissions}) {}
export class ModifySelfservicePermissionsResult extends S.Class<ModifySelfservicePermissionsResult>("ModifySelfservicePermissionsResult")({}) {}
export class ModifyWorkspaceCreationPropertiesRequest extends S.Class<ModifyWorkspaceCreationPropertiesRequest>("ModifyWorkspaceCreationPropertiesRequest")({ResourceId: S.String, WorkspaceCreationProperties: WorkspaceCreationProperties}) {}
export class ModifyWorkspaceCreationPropertiesResult extends S.Class<ModifyWorkspaceCreationPropertiesResult>("ModifyWorkspaceCreationPropertiesResult")({}) {}
export class RebootWorkspacesRequest extends S.Class<RebootWorkspacesRequest>("RebootWorkspacesRequest")({RebootWorkspaceRequests: RebootWorkspaceRequests}) {}
export class RebuildWorkspacesRequest extends S.Class<RebuildWorkspacesRequest>("RebuildWorkspacesRequest")({RebuildWorkspaceRequests: RebuildWorkspaceRequests}) {}
export class RegisterWorkspaceDirectoryRequest extends S.Class<RegisterWorkspaceDirectoryRequest>("RegisterWorkspaceDirectoryRequest")({DirectoryId: S.optional(S.String), SubnetIds: S.optional(SubnetIds), EnableSelfService: S.optional(S.Boolean), Tenancy: S.optional(S.String), Tags: S.optional(TagList), WorkspaceDirectoryName: S.optional(S.String), WorkspaceDirectoryDescription: S.optional(S.String), UserIdentityType: S.optional(S.String), IdcInstanceArn: S.optional(S.String), MicrosoftEntraConfig: S.optional(MicrosoftEntraConfig), WorkspaceType: S.optional(S.String), ActiveDirectoryConfig: S.optional(ActiveDirectoryConfig)}) {}
export class RejectAccountLinkInvitationResult extends S.Class<RejectAccountLinkInvitationResult>("RejectAccountLinkInvitationResult")({AccountLink: S.optional(AccountLink)}) {}
export class StartWorkspacesRequest extends S.Class<StartWorkspacesRequest>("StartWorkspacesRequest")({StartWorkspaceRequests: StartWorkspaceRequests}) {}
export class StopWorkspacesRequest extends S.Class<StopWorkspacesRequest>("StopWorkspacesRequest")({StopWorkspaceRequests: StopWorkspaceRequests}) {}
export class TerminateWorkspacesRequest extends S.Class<TerminateWorkspacesRequest>("TerminateWorkspacesRequest")({TerminateWorkspaceRequests: TerminateWorkspaceRequests}) {}
export class UpdateConnectionAliasPermissionRequest extends S.Class<UpdateConnectionAliasPermissionRequest>("UpdateConnectionAliasPermissionRequest")({AliasId: S.String, ConnectionAliasPermission: ConnectionAliasPermission}) {}
export class UpdateConnectionAliasPermissionResult extends S.Class<UpdateConnectionAliasPermissionResult>("UpdateConnectionAliasPermissionResult")({}) {}
export class UserSetting extends S.Class<UserSetting>("UserSetting")({Action: S.String, Permission: S.String, MaximumLength: S.optional(S.Number)}) {}
export const UserSettings = S.Array(UserSetting);
export class StorageConnector extends S.Class<StorageConnector>("StorageConnector")({ConnectorType: S.String, Status: S.String}) {}
export const StorageConnectors = S.Array(StorageConnector);
export class GlobalAcceleratorForDirectory extends S.Class<GlobalAcceleratorForDirectory>("GlobalAcceleratorForDirectory")({Mode: S.String, PreferredProtocol: S.optional(S.String)}) {}
export class OperatingSystem extends S.Class<OperatingSystem>("OperatingSystem")({Type: S.optional(S.String)}) {}
export class WorkSpaceApplicationDeployment extends S.Class<WorkSpaceApplicationDeployment>("WorkSpaceApplicationDeployment")({Associations: S.optional(WorkspaceResourceAssociationList)}) {}
export class AccountModification extends S.Class<AccountModification>("AccountModification")({ModificationState: S.optional(S.String), DedicatedTenancySupport: S.optional(S.String), DedicatedTenancyManagementCidrRange: S.optional(S.String), StartTime: S.optional(S.Date), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const AccountModificationList = S.Array(AccountModification);
export class ApplicationResourceAssociation extends S.Class<ApplicationResourceAssociation>("ApplicationResourceAssociation")({ApplicationId: S.optional(S.String), AssociatedResourceId: S.optional(S.String), AssociatedResourceType: S.optional(S.String), Created: S.optional(S.Date), LastUpdatedTime: S.optional(S.Date), State: S.optional(S.String), StateReason: S.optional(AssociationStateReason)}) {}
export const ApplicationResourceAssociationList = S.Array(ApplicationResourceAssociation);
export class WorkSpaceApplication extends S.Class<WorkSpaceApplication>("WorkSpaceApplication")({ApplicationId: S.optional(S.String), Created: S.optional(S.Date), Description: S.optional(S.String), LicenseType: S.optional(S.String), Name: S.optional(S.String), Owner: S.optional(S.String), State: S.optional(S.String), SupportedComputeTypeNames: S.optional(ComputeList), SupportedOperatingSystemNames: S.optional(OperatingSystemNameList)}) {}
export const WorkSpaceApplicationList = S.Array(WorkSpaceApplication);
export class BundleResourceAssociation extends S.Class<BundleResourceAssociation>("BundleResourceAssociation")({AssociatedResourceId: S.optional(S.String), AssociatedResourceType: S.optional(S.String), BundleId: S.optional(S.String), Created: S.optional(S.Date), LastUpdatedTime: S.optional(S.Date), State: S.optional(S.String), StateReason: S.optional(AssociationStateReason)}) {}
export const BundleResourceAssociationList = S.Array(BundleResourceAssociation);
export class DefaultClientBrandingAttributes extends S.Class<DefaultClientBrandingAttributes>("DefaultClientBrandingAttributes")({LogoUrl: S.optional(S.String), SupportEmail: S.optional(S.String), SupportLink: S.optional(S.String), ForgotPasswordLink: S.optional(S.String), LoginMessage: S.optional(LoginMessage)}) {}
export class IosClientBrandingAttributes extends S.Class<IosClientBrandingAttributes>("IosClientBrandingAttributes")({LogoUrl: S.optional(S.String), Logo2xUrl: S.optional(S.String), Logo3xUrl: S.optional(S.String), SupportEmail: S.optional(S.String), SupportLink: S.optional(S.String), ForgotPasswordLink: S.optional(S.String), LoginMessage: S.optional(LoginMessage)}) {}
export class ClientPropertiesResult extends S.Class<ClientPropertiesResult>("ClientPropertiesResult")({ResourceId: S.optional(S.String), ClientProperties: S.optional(ClientProperties)}) {}
export const ClientPropertiesList = S.Array(ClientPropertiesResult);
export class ConnectClientAddIn extends S.Class<ConnectClientAddIn>("ConnectClientAddIn")({AddInId: S.optional(S.String), ResourceId: S.optional(S.String), Name: S.optional(S.String), URL: S.optional(S.String)}) {}
export const ConnectClientAddInList = S.Array(ConnectClientAddIn);
export class CustomWorkspaceImageImportErrorDetails extends S.Class<CustomWorkspaceImageImportErrorDetails>("CustomWorkspaceImageImportErrorDetails")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const CustomWorkspaceImageImportErrorDetailsList = S.Array(CustomWorkspaceImageImportErrorDetails);
export class ImageResourceAssociation extends S.Class<ImageResourceAssociation>("ImageResourceAssociation")({AssociatedResourceId: S.optional(S.String), AssociatedResourceType: S.optional(S.String), Created: S.optional(S.Date), LastUpdatedTime: S.optional(S.Date), ImageId: S.optional(S.String), State: S.optional(S.String), StateReason: S.optional(AssociationStateReason)}) {}
export const ImageResourceAssociationList = S.Array(ImageResourceAssociation);
export class WorkspacesIpGroup extends S.Class<WorkspacesIpGroup>("WorkspacesIpGroup")({groupId: S.optional(S.String), groupName: S.optional(S.String), groupDesc: S.optional(S.String), userRules: S.optional(IpRuleList)}) {}
export const WorkspacesIpGroupsList = S.Array(WorkspacesIpGroup);
export class WorkspaceBundle extends S.Class<WorkspaceBundle>("WorkspaceBundle")({BundleId: S.optional(S.String), Name: S.optional(S.String), Owner: S.optional(S.String), Description: S.optional(S.String), ImageId: S.optional(S.String), RootStorage: S.optional(RootStorage), UserStorage: S.optional(UserStorage), ComputeType: S.optional(ComputeType), LastUpdatedTime: S.optional(S.Date), CreationTime: S.optional(S.Date), State: S.optional(S.String), BundleType: S.optional(S.String)}) {}
export const BundleList = S.Array(WorkspaceBundle);
export class ImagePermission extends S.Class<ImagePermission>("ImagePermission")({SharedAccountId: S.optional(S.String)}) {}
export const ImagePermissions = S.Array(ImagePermission);
export class WorkspaceConnectionStatus extends S.Class<WorkspaceConnectionStatus>("WorkspaceConnectionStatus")({WorkspaceId: S.optional(S.String), ConnectionState: S.optional(S.String), ConnectionStateCheckTimestamp: S.optional(S.Date), LastKnownUserConnectionTimestamp: S.optional(S.Date)}) {}
export const WorkspaceConnectionStatusList = S.Array(WorkspaceConnectionStatus);
export class Snapshot extends S.Class<Snapshot>("Snapshot")({SnapshotTime: S.optional(S.Date)}) {}
export const SnapshotList = S.Array(Snapshot);
export class CapacityStatus extends S.Class<CapacityStatus>("CapacityStatus")({AvailableUserSessions: S.Number, DesiredUserSessions: S.Number, ActualUserSessions: S.Number, ActiveUserSessions: S.Number}) {}
export class WorkspacesPoolError extends S.Class<WorkspacesPoolError>("WorkspacesPoolError")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const WorkspacesPoolErrors = S.Array(WorkspacesPoolError);
export class ApplicationSettingsResponse extends S.Class<ApplicationSettingsResponse>("ApplicationSettingsResponse")({Status: S.String, SettingsGroup: S.optional(S.String), S3BucketName: S.optional(S.String)}) {}
export class WorkspacesPool extends S.Class<WorkspacesPool>("WorkspacesPool")({PoolId: S.String, PoolArn: S.String, CapacityStatus: CapacityStatus, PoolName: S.String, Description: S.optional(S.String), State: S.String, CreatedAt: S.Date, BundleId: S.String, DirectoryId: S.String, Errors: S.optional(WorkspacesPoolErrors), ApplicationSettings: S.optional(ApplicationSettingsResponse), TimeoutSettings: S.optional(TimeoutSettings), RunningMode: S.String}) {}
export const WorkspacesPools = S.Array(WorkspacesPool);
export class DefaultImportClientBrandingAttributes extends S.Class<DefaultImportClientBrandingAttributes>("DefaultImportClientBrandingAttributes")({Logo: S.optional(H.StreamBody()), SupportEmail: S.optional(S.String), SupportLink: S.optional(S.String), ForgotPasswordLink: S.optional(S.String), LoginMessage: S.optional(LoginMessage)}) {}
export class StreamingProperties extends S.Class<StreamingProperties>("StreamingProperties")({StreamingExperiencePreferredProtocol: S.optional(S.String), UserSettings: S.optional(UserSettings), StorageConnectors: S.optional(StorageConnectors), GlobalAccelerator: S.optional(GlobalAcceleratorForDirectory)}) {}
export class FailedWorkspaceChangeRequest extends S.Class<FailedWorkspaceChangeRequest>("FailedWorkspaceChangeRequest")({WorkspaceId: S.optional(S.String), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const FailedRebuildWorkspaceRequests = S.Array(FailedWorkspaceChangeRequest);
export const FailedStartWorkspaceRequests = S.Array(FailedWorkspaceChangeRequest);
export const FailedStopWorkspaceRequests = S.Array(FailedWorkspaceChangeRequest);
export const FailedTerminateWorkspaceRequests = S.Array(FailedWorkspaceChangeRequest);
export class AccessEndpoint extends S.Class<AccessEndpoint>("AccessEndpoint")({AccessEndpointType: S.optional(S.String), VpcEndpointId: S.optional(S.String)}) {}
export const AccessEndpointList = S.Array(AccessEndpoint);
export class AcceptAccountLinkInvitationResult extends S.Class<AcceptAccountLinkInvitationResult>("AcceptAccountLinkInvitationResult")({AccountLink: S.optional(AccountLink)}) {}
export class CopyWorkspaceImageResult extends S.Class<CopyWorkspaceImageResult>("CopyWorkspaceImageResult")({ImageId: S.optional(S.String)}) {}
export class CreateWorkspaceBundleResult extends S.Class<CreateWorkspaceBundleResult>("CreateWorkspaceBundleResult")({WorkspaceBundle: S.optional(WorkspaceBundle)}) {}
export class CreateWorkspaceImageResult extends S.Class<CreateWorkspaceImageResult>("CreateWorkspaceImageResult")({ImageId: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), OperatingSystem: S.optional(OperatingSystem), State: S.optional(S.String), RequiredTenancy: S.optional(S.String), Created: S.optional(S.Date), OwnerAccountId: S.optional(S.String)}) {}
export class CreateWorkspacesPoolResult extends S.Class<CreateWorkspacesPoolResult>("CreateWorkspacesPoolResult")({WorkspacesPool: S.optional(WorkspacesPool)}) {}
export class DeployWorkspaceApplicationsResult extends S.Class<DeployWorkspaceApplicationsResult>("DeployWorkspaceApplicationsResult")({Deployment: S.optional(WorkSpaceApplicationDeployment)}) {}
export class DescribeAccountModificationsResult extends S.Class<DescribeAccountModificationsResult>("DescribeAccountModificationsResult")({AccountModifications: S.optional(AccountModificationList), NextToken: S.optional(S.String)}) {}
export class DescribeApplicationAssociationsResult extends S.Class<DescribeApplicationAssociationsResult>("DescribeApplicationAssociationsResult")({Associations: S.optional(ApplicationResourceAssociationList), NextToken: S.optional(S.String)}) {}
export class DescribeApplicationsResult extends S.Class<DescribeApplicationsResult>("DescribeApplicationsResult")({Applications: S.optional(WorkSpaceApplicationList), NextToken: S.optional(S.String)}) {}
export class DescribeBundleAssociationsResult extends S.Class<DescribeBundleAssociationsResult>("DescribeBundleAssociationsResult")({Associations: S.optional(BundleResourceAssociationList)}) {}
export class DescribeClientBrandingResult extends S.Class<DescribeClientBrandingResult>("DescribeClientBrandingResult")({DeviceTypeWindows: S.optional(DefaultClientBrandingAttributes), DeviceTypeOsx: S.optional(DefaultClientBrandingAttributes), DeviceTypeAndroid: S.optional(DefaultClientBrandingAttributes), DeviceTypeIos: S.optional(IosClientBrandingAttributes), DeviceTypeLinux: S.optional(DefaultClientBrandingAttributes), DeviceTypeWeb: S.optional(DefaultClientBrandingAttributes)}) {}
export class DescribeClientPropertiesResult extends S.Class<DescribeClientPropertiesResult>("DescribeClientPropertiesResult")({ClientPropertiesList: S.optional(ClientPropertiesList)}) {}
export class DescribeConnectClientAddInsResult extends S.Class<DescribeConnectClientAddInsResult>("DescribeConnectClientAddInsResult")({AddIns: S.optional(ConnectClientAddInList), NextToken: S.optional(S.String)}) {}
export class DescribeCustomWorkspaceImageImportResult extends S.Class<DescribeCustomWorkspaceImageImportResult>("DescribeCustomWorkspaceImageImportResult")({ImageId: S.optional(S.String), InfrastructureConfigurationArn: S.optional(S.String), State: S.optional(S.String), Created: S.optional(S.Date), LastUpdatedTime: S.optional(S.Date), ImageSource: S.optional(ImageSourceIdentifier), ImageBuilderInstanceId: S.optional(S.String), ErrorDetails: S.optional(CustomWorkspaceImageImportErrorDetailsList)}) {}
export class DescribeImageAssociationsResult extends S.Class<DescribeImageAssociationsResult>("DescribeImageAssociationsResult")({Associations: S.optional(ImageResourceAssociationList)}) {}
export class DescribeIpGroupsResult extends S.Class<DescribeIpGroupsResult>("DescribeIpGroupsResult")({Result: S.optional(WorkspacesIpGroupsList), NextToken: S.optional(S.String)}) {}
export class DescribeWorkspaceBundlesResult extends S.Class<DescribeWorkspaceBundlesResult>("DescribeWorkspaceBundlesResult")({Bundles: S.optional(BundleList), NextToken: S.optional(S.String)}) {}
export class DescribeWorkspaceImagePermissionsResult extends S.Class<DescribeWorkspaceImagePermissionsResult>("DescribeWorkspaceImagePermissionsResult")({ImageId: S.optional(S.String), ImagePermissions: S.optional(ImagePermissions), NextToken: S.optional(S.String)}) {}
export class DescribeWorkspacesConnectionStatusResult extends S.Class<DescribeWorkspacesConnectionStatusResult>("DescribeWorkspacesConnectionStatusResult")({WorkspacesConnectionStatus: S.optional(WorkspaceConnectionStatusList), NextToken: S.optional(S.String)}) {}
export class DescribeWorkspaceSnapshotsResult extends S.Class<DescribeWorkspaceSnapshotsResult>("DescribeWorkspaceSnapshotsResult")({RebuildSnapshots: S.optional(SnapshotList), RestoreSnapshots: S.optional(SnapshotList)}) {}
export class DescribeWorkspacesPoolsResult extends S.Class<DescribeWorkspacesPoolsResult>("DescribeWorkspacesPoolsResult")({WorkspacesPools: S.optional(WorkspacesPools), NextToken: S.optional(S.String)}) {}
export class ImportClientBrandingRequest extends S.Class<ImportClientBrandingRequest>("ImportClientBrandingRequest")({ResourceId: S.String, DeviceTypeWindows: S.optional(DefaultImportClientBrandingAttributes), DeviceTypeOsx: S.optional(DefaultImportClientBrandingAttributes), DeviceTypeAndroid: S.optional(DefaultImportClientBrandingAttributes), DeviceTypeIos: S.optional(IosImportClientBrandingAttributes), DeviceTypeLinux: S.optional(DefaultImportClientBrandingAttributes), DeviceTypeWeb: S.optional(DefaultImportClientBrandingAttributes)}) {}
export class ImportCustomWorkspaceImageResult extends S.Class<ImportCustomWorkspaceImageResult>("ImportCustomWorkspaceImageResult")({ImageId: S.optional(S.String), State: S.optional(S.String)}) {}
export class ModifyStreamingPropertiesRequest extends S.Class<ModifyStreamingPropertiesRequest>("ModifyStreamingPropertiesRequest")({ResourceId: S.String, StreamingProperties: S.optional(StreamingProperties)}) {}
export class ModifyStreamingPropertiesResult extends S.Class<ModifyStreamingPropertiesResult>("ModifyStreamingPropertiesResult")({}) {}
export class ModifyWorkspacePropertiesRequest extends S.Class<ModifyWorkspacePropertiesRequest>("ModifyWorkspacePropertiesRequest")({WorkspaceId: S.String, WorkspaceProperties: S.optional(WorkspaceProperties), DataReplication: S.optional(S.String)}) {}
export class ModifyWorkspacePropertiesResult extends S.Class<ModifyWorkspacePropertiesResult>("ModifyWorkspacePropertiesResult")({}) {}
export class RebuildWorkspacesResult extends S.Class<RebuildWorkspacesResult>("RebuildWorkspacesResult")({FailedRequests: S.optional(FailedRebuildWorkspaceRequests)}) {}
export class RegisterWorkspaceDirectoryResult extends S.Class<RegisterWorkspaceDirectoryResult>("RegisterWorkspaceDirectoryResult")({DirectoryId: S.optional(S.String), State: S.optional(S.String)}) {}
export class StartWorkspacesResult extends S.Class<StartWorkspacesResult>("StartWorkspacesResult")({FailedRequests: S.optional(FailedStartWorkspaceRequests)}) {}
export class StopWorkspacesResult extends S.Class<StopWorkspacesResult>("StopWorkspacesResult")({FailedRequests: S.optional(FailedStopWorkspaceRequests)}) {}
export class TerminateWorkspacesResult extends S.Class<TerminateWorkspacesResult>("TerminateWorkspacesResult")({FailedRequests: S.optional(FailedTerminateWorkspaceRequests)}) {}
export class ConnectionAliasAssociation extends S.Class<ConnectionAliasAssociation>("ConnectionAliasAssociation")({AssociationStatus: S.optional(S.String), AssociatedAccountId: S.optional(S.String), ResourceId: S.optional(S.String), ConnectionIdentifier: S.optional(S.String)}) {}
export const ConnectionAliasAssociationList = S.Array(ConnectionAliasAssociation);
export const DnsIpAddresses = S.Array(S.String);
export const DnsIpv6Addresses = S.Array(S.String);
export class UpdateResult extends S.Class<UpdateResult>("UpdateResult")({UpdateAvailable: S.optional(S.Boolean), Description: S.optional(S.String)}) {}
export class ErrorDetails extends S.Class<ErrorDetails>("ErrorDetails")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const ErrorDetailsList = S.Array(ErrorDetails);
export class ModificationState extends S.Class<ModificationState>("ModificationState")({Resource: S.optional(S.String), State: S.optional(S.String)}) {}
export const ModificationStateList = S.Array(ModificationState);
export class RelatedWorkspaceProperties extends S.Class<RelatedWorkspaceProperties>("RelatedWorkspaceProperties")({WorkspaceId: S.optional(S.String), Region: S.optional(S.String), State: S.optional(S.String), Type: S.optional(S.String)}) {}
export const RelatedWorkspaces = S.Array(RelatedWorkspaceProperties);
export class DataReplicationSettings extends S.Class<DataReplicationSettings>("DataReplicationSettings")({DataReplication: S.optional(S.String), RecoverySnapshotTime: S.optional(S.Date)}) {}
export class StandbyWorkspacesProperties extends S.Class<StandbyWorkspacesProperties>("StandbyWorkspacesProperties")({StandbyWorkspaceId: S.optional(S.String), DataReplication: S.optional(S.String), RecoverySnapshotTime: S.optional(S.Date)}) {}
export const StandbyWorkspacesPropertiesList = S.Array(StandbyWorkspacesProperties);
export class NetworkAccessConfiguration extends S.Class<NetworkAccessConfiguration>("NetworkAccessConfiguration")({EniPrivateIpAddress: S.optional(S.String), EniId: S.optional(S.String)}) {}
export class AccessEndpointConfig extends S.Class<AccessEndpointConfig>("AccessEndpointConfig")({AccessEndpoints: AccessEndpointList, InternetFallbackProtocols: S.optional(InternetFallbackProtocolList)}) {}
export class FailedCreateStandbyWorkspacesRequest extends S.Class<FailedCreateStandbyWorkspacesRequest>("FailedCreateStandbyWorkspacesRequest")({StandbyWorkspaceRequest: S.optional(StandbyWorkspace), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const FailedCreateStandbyWorkspacesRequestList = S.Array(FailedCreateStandbyWorkspacesRequest);
export class PendingCreateStandbyWorkspacesRequest extends S.Class<PendingCreateStandbyWorkspacesRequest>("PendingCreateStandbyWorkspacesRequest")({UserName: S.optional(S.String), DirectoryId: S.optional(S.String), State: S.optional(S.String), WorkspaceId: S.optional(S.String)}) {}
export const PendingCreateStandbyWorkspacesRequestList = S.Array(PendingCreateStandbyWorkspacesRequest);
export class FailedCreateWorkspaceRequest extends S.Class<FailedCreateWorkspaceRequest>("FailedCreateWorkspaceRequest")({WorkspaceRequest: S.optional(WorkspaceRequest), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const FailedCreateWorkspaceRequests = S.Array(FailedCreateWorkspaceRequest);
export class ConnectionAlias extends S.Class<ConnectionAlias>("ConnectionAlias")({ConnectionString: S.optional(S.String), AliasId: S.optional(S.String), State: S.optional(S.String), OwnerAccountId: S.optional(S.String), Associations: S.optional(ConnectionAliasAssociationList)}) {}
export const ConnectionAliasList = S.Array(ConnectionAlias);
export class WorkspaceImage extends S.Class<WorkspaceImage>("WorkspaceImage")({ImageId: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), OperatingSystem: S.optional(OperatingSystem), State: S.optional(S.String), RequiredTenancy: S.optional(S.String), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String), Created: S.optional(S.Date), OwnerAccountId: S.optional(S.String), Updates: S.optional(UpdateResult), ErrorDetails: S.optional(ErrorDetailsList)}) {}
export const WorkspaceImageList = S.Array(WorkspaceImage);
export class Workspace extends S.Class<Workspace>("Workspace")({WorkspaceId: S.optional(S.String), DirectoryId: S.optional(S.String), UserName: S.optional(S.String), IpAddress: S.optional(S.String), Ipv6Address: S.optional(S.String), State: S.optional(S.String), BundleId: S.optional(S.String), SubnetId: S.optional(S.String), ErrorMessage: S.optional(S.String), ErrorCode: S.optional(S.String), ComputerName: S.optional(S.String), VolumeEncryptionKey: S.optional(S.String), UserVolumeEncryptionEnabled: S.optional(S.Boolean), RootVolumeEncryptionEnabled: S.optional(S.Boolean), WorkspaceName: S.optional(S.String), WorkspaceProperties: S.optional(WorkspaceProperties), ModificationStates: S.optional(ModificationStateList), RelatedWorkspaces: S.optional(RelatedWorkspaces), DataReplicationSettings: S.optional(DataReplicationSettings), StandbyWorkspacesProperties: S.optional(StandbyWorkspacesPropertiesList)}) {}
export const WorkspaceList = S.Array(Workspace);
export class WorkspacesPoolSession extends S.Class<WorkspacesPoolSession>("WorkspacesPoolSession")({AuthenticationType: S.optional(S.String), ConnectionState: S.optional(S.String), SessionId: S.String, InstanceId: S.optional(S.String), PoolId: S.String, ExpirationTime: S.optional(S.Date), NetworkAccessConfiguration: S.optional(NetworkAccessConfiguration), StartTime: S.optional(S.Date), UserId: S.String}) {}
export const WorkspacesPoolSessions = S.Array(WorkspacesPoolSession);
export class WorkspaceAccessProperties extends S.Class<WorkspaceAccessProperties>("WorkspaceAccessProperties")({DeviceTypeWindows: S.optional(S.String), DeviceTypeOsx: S.optional(S.String), DeviceTypeWeb: S.optional(S.String), DeviceTypeIos: S.optional(S.String), DeviceTypeAndroid: S.optional(S.String), DeviceTypeChromeOs: S.optional(S.String), DeviceTypeZeroClient: S.optional(S.String), DeviceTypeLinux: S.optional(S.String), DeviceTypeWorkSpacesThinClient: S.optional(S.String), AccessEndpointConfig: S.optional(AccessEndpointConfig)}) {}
export const FailedRebootWorkspaceRequests = S.Array(FailedWorkspaceChangeRequest);
export class AssociateWorkspaceApplicationResult extends S.Class<AssociateWorkspaceApplicationResult>("AssociateWorkspaceApplicationResult")({Association: S.optional(WorkspaceResourceAssociation)}) {}
export class CreateStandbyWorkspacesResult extends S.Class<CreateStandbyWorkspacesResult>("CreateStandbyWorkspacesResult")({FailedStandbyRequests: S.optional(FailedCreateStandbyWorkspacesRequestList), PendingStandbyRequests: S.optional(PendingCreateStandbyWorkspacesRequestList)}) {}
export class CreateWorkspacesResult extends S.Class<CreateWorkspacesResult>("CreateWorkspacesResult")({FailedRequests: S.optional(FailedCreateWorkspaceRequests), PendingRequests: S.optional(WorkspaceList)}) {}
export class DescribeConnectionAliasesResult extends S.Class<DescribeConnectionAliasesResult>("DescribeConnectionAliasesResult")({ConnectionAliases: S.optional(ConnectionAliasList), NextToken: S.optional(S.String)}) {}
export class DescribeWorkspaceImagesResult extends S.Class<DescribeWorkspaceImagesResult>("DescribeWorkspaceImagesResult")({Images: S.optional(WorkspaceImageList), NextToken: S.optional(S.String)}) {}
export class DescribeWorkspacesResult extends S.Class<DescribeWorkspacesResult>("DescribeWorkspacesResult")({Workspaces: S.optional(WorkspaceList), NextToken: S.optional(S.String)}) {}
export class DescribeWorkspacesPoolSessionsResult extends S.Class<DescribeWorkspacesPoolSessionsResult>("DescribeWorkspacesPoolSessionsResult")({Sessions: S.optional(WorkspacesPoolSessions), NextToken: S.optional(S.String)}) {}
export class ImportClientBrandingResult extends S.Class<ImportClientBrandingResult>("ImportClientBrandingResult")({DeviceTypeWindows: S.optional(DefaultClientBrandingAttributes), DeviceTypeOsx: S.optional(DefaultClientBrandingAttributes), DeviceTypeAndroid: S.optional(DefaultClientBrandingAttributes), DeviceTypeIos: S.optional(IosClientBrandingAttributes), DeviceTypeLinux: S.optional(DefaultClientBrandingAttributes), DeviceTypeWeb: S.optional(DefaultClientBrandingAttributes)}) {}
export class ModifyWorkspaceAccessPropertiesRequest extends S.Class<ModifyWorkspaceAccessPropertiesRequest>("ModifyWorkspaceAccessPropertiesRequest")({ResourceId: S.String, WorkspaceAccessProperties: WorkspaceAccessProperties}) {}
export class ModifyWorkspaceAccessPropertiesResult extends S.Class<ModifyWorkspaceAccessPropertiesResult>("ModifyWorkspaceAccessPropertiesResult")({}) {}
export class RebootWorkspacesResult extends S.Class<RebootWorkspacesResult>("RebootWorkspacesResult")({FailedRequests: S.optional(FailedRebootWorkspaceRequests)}) {}
export class UpdateWorkspacesPoolResult extends S.Class<UpdateWorkspacesPoolResult>("UpdateWorkspacesPoolResult")({WorkspacesPool: S.optional(WorkspacesPool)}) {}
export class DefaultWorkspaceCreationProperties extends S.Class<DefaultWorkspaceCreationProperties>("DefaultWorkspaceCreationProperties")({EnableInternetAccess: S.optional(S.Boolean), DefaultOu: S.optional(S.String), CustomSecurityGroupId: S.optional(S.String), UserEnabledAsLocalAdministrator: S.optional(S.Boolean), EnableMaintenanceMode: S.optional(S.Boolean), InstanceIamRoleArn: S.optional(S.String)}) {}
export class IDCConfig extends S.Class<IDCConfig>("IDCConfig")({InstanceArn: S.optional(S.String), ApplicationArn: S.optional(S.String)}) {}
export class WorkspaceDirectory extends S.Class<WorkspaceDirectory>("WorkspaceDirectory")({DirectoryId: S.optional(S.String), Alias: S.optional(S.String), DirectoryName: S.optional(S.String), RegistrationCode: S.optional(S.String), SubnetIds: S.optional(SubnetIds), DnsIpAddresses: S.optional(DnsIpAddresses), DnsIpv6Addresses: S.optional(DnsIpv6Addresses), CustomerUserName: S.optional(S.String), IamRoleId: S.optional(S.String), DirectoryType: S.optional(S.String), WorkspaceSecurityGroupId: S.optional(S.String), State: S.optional(S.String), WorkspaceCreationProperties: S.optional(DefaultWorkspaceCreationProperties), ipGroupIds: S.optional(IpGroupIdList), WorkspaceAccessProperties: S.optional(WorkspaceAccessProperties), Tenancy: S.optional(S.String), SelfservicePermissions: S.optional(SelfservicePermissions), SamlProperties: S.optional(SamlProperties), CertificateBasedAuthProperties: S.optional(CertificateBasedAuthProperties), EndpointEncryptionMode: S.optional(S.String), MicrosoftEntraConfig: S.optional(MicrosoftEntraConfig), WorkspaceDirectoryName: S.optional(S.String), WorkspaceDirectoryDescription: S.optional(S.String), UserIdentityType: S.optional(S.String), WorkspaceType: S.optional(S.String), IDCConfig: S.optional(IDCConfig), ActiveDirectoryConfig: S.optional(ActiveDirectoryConfig), StreamingProperties: S.optional(StreamingProperties), ErrorMessage: S.optional(S.String)}) {}
export const DirectoryList = S.Array(WorkspaceDirectory);
export class DescribeWorkspaceDirectoriesResult extends S.Class<DescribeWorkspaceDirectoriesResult>("DescribeWorkspaceDirectoriesResult")({Directories: S.optional(DirectoryList), NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InvalidParameterValuesException extends S.TaggedError<InvalidParameterValuesException>()("InvalidParameterValuesException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ResourceAssociatedException extends S.TaggedError<ResourceAssociatedException>()("ResourceAssociatedException", {}) {};
export class InvalidResourceStateException extends S.TaggedError<InvalidResourceStateException>()("InvalidResourceStateException", {}) {};
export class OperationNotSupportedException extends S.TaggedError<OperationNotSupportedException>()("OperationNotSupportedException", {}) {};
export class OperationInProgressException extends S.TaggedError<OperationInProgressException>()("OperationInProgressException", {}) {};
export class ResourceUnavailableException extends S.TaggedError<ResourceUnavailableException>()("ResourceUnavailableException", {}) {};
export class ResourceLimitExceededException extends S.TaggedError<ResourceLimitExceededException>()("ResourceLimitExceededException", {}) {};
export class ResourceAlreadyExistsException extends S.TaggedError<ResourceAlreadyExistsException>()("ResourceAlreadyExistsException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ResourceCreationFailedException extends S.TaggedError<ResourceCreationFailedException>()("ResourceCreationFailedException", {}) {};
export class IncompatibleApplicationsException extends S.TaggedError<IncompatibleApplicationsException>()("IncompatibleApplicationsException", {}) {};
export class ResourceInUseException extends S.TaggedError<ResourceInUseException>()("ResourceInUseException", {}) {};
export class ApplicationNotSupportedException extends S.TaggedError<ApplicationNotSupportedException>()("ApplicationNotSupportedException", {}) {};
export class ComputeNotCompatibleException extends S.TaggedError<ComputeNotCompatibleException>()("ComputeNotCompatibleException", {}) {};
export class OperatingSystemNotCompatibleException extends S.TaggedError<OperatingSystemNotCompatibleException>()("OperatingSystemNotCompatibleException", {}) {};
export class UnsupportedWorkspaceConfigurationException extends S.TaggedError<UnsupportedWorkspaceConfigurationException>()("UnsupportedWorkspaceConfigurationException", {message: S.optional(S.String)}) {};
export class UnsupportedNetworkConfigurationException extends S.TaggedError<UnsupportedNetworkConfigurationException>()("UnsupportedNetworkConfigurationException", {message: S.optional(S.String)}) {};
export class InvalidParameterCombinationException extends S.TaggedError<InvalidParameterCombinationException>()("InvalidParameterCombinationException", {message: S.optional(S.String)}) {};
export class WorkspacesDefaultRoleNotFoundException extends S.TaggedError<WorkspacesDefaultRoleNotFoundException>()("WorkspacesDefaultRoleNotFoundException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes a client-add-in for Amazon Connect that is configured within a
 * directory.
 */export const deleteConnectClientAddIn = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DeleteConnectClientAddIn" }, DeleteConnectClientAddInRequest, DeleteConnectClientAddInResult, [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified tags from the specified WorkSpaces resource.
 */export const deleteTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DeleteTags" }, DeleteTagsRequest, DeleteTagsResult, [InvalidParameterValuesException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see
 * 
 * Delete a Custom WorkSpaces Bundle or Image.
 */export const deleteWorkspaceBundle = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DeleteWorkspaceBundle" }, DeleteWorkspaceBundleRequest, DeleteWorkspaceBundleResult, [AccessDeniedException, InvalidParameterValuesException, ResourceAssociatedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified image from your account. To delete an image, you must first delete
 * any bundles that are associated with the image and unshare the image if it is shared with
 * other accounts.
 */export const deleteWorkspaceImage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DeleteWorkspaceImage" }, DeleteWorkspaceImageRequest, DeleteWorkspaceImageResult, [AccessDeniedException, InvalidResourceStateException, ResourceAssociatedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for
 * the specified account.
 */export const describeAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeAccount" }, DescribeAccountRequest, DescribeAccountResult, [AccessDeniedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a connection alias from a directory. Disassociating a connection alias
 * disables cross-Region redirection between two directories in different Regions. For more
 * information, see Cross-Region
 * Redirection for Amazon WorkSpaces.
 * 
 * 
 * 
 * 
 * Before performing this operation, call
 * DescribeConnectionAliases to make sure that the current state of the
 * connection alias is `CREATED`.
 */export const disassociateConnectionAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DisassociateConnectionAlias" }, DisassociateConnectionAliasRequest, DisassociateConnectionAliasResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the specified IP access control group from the specified directory.
 */export const disassociateIpGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DisassociateIpGroups" }, DisassociateIpGroupsRequest, DisassociateIpGroupsResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the endpoint encryption mode that allows you to configure the specified
 * directory between Standard TLS and FIPS 140-2 validated mode.
 */export const modifyEndpointEncryptionMode = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ModifyEndpointEncryptionMode" }, ModifyEndpointEncryptionModeRequest, ModifyEndpointEncryptionModeResponse, [AccessDeniedException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the state of the specified WorkSpace.
 * 
 * 
 * To maintain a WorkSpace without being interrupted, set the WorkSpace state to
 * `ADMIN_MAINTENANCE`. WorkSpaces in this state do not respond to requests to
 * reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not
 * stopped. Users cannot log into a WorkSpace in the `ADMIN_MAINTENANCE`
 * state.
 */export const modifyWorkspaceState = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ModifyWorkspaceState" }, ModifyWorkspaceStateRequest, ModifyWorkspaceStateResult, [InvalidParameterValuesException, InvalidResourceStateException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Restores the specified WorkSpace to its last known healthy state.
 * 
 * 
 * You cannot restore a WorkSpace unless its state is ` AVAILABLE`,
 * `ERROR`, `UNHEALTHY`, or `STOPPED`.
 * 
 * 
 * Restoring a WorkSpace is a potentially destructive action that can result in the loss of
 * data. For more information, see Restore a
 * WorkSpace.
 * 
 * 
 * This operation is asynchronous and returns before the WorkSpace is completely
 * restored.
 */export const restoreWorkspace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.RestoreWorkspace" }, RestoreWorkspaceRequest, RestoreWorkspaceResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more rules from the specified IP access control group.
 */export const revokeIpRules = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.RevokeIpRules" }, RevokeIpRulesRequest, RevokeIpRulesResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops the specified pool.
 * 
 * 
 * You cannot stop a WorkSpace pool unless it has a running mode of `AutoStop`
 * and a state of `AVAILABLE`, `IMPAIRED`, `UNHEALTHY`, or `ERROR`.
 */export const stopWorkspacesPool = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.StopWorkspacesPool" }, StopWorkspacesPoolRequest, StopWorkspacesPoolResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationInProgressException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Terminates the specified pool.
 */export const terminateWorkspacesPool = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.TerminateWorkspacesPool" }, TerminateWorkspacesPoolRequest, TerminateWorkspacesPoolResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationInProgressException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Terminates the pool session.
 */export const terminateWorkspacesPoolSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.TerminateWorkspacesPoolSession" }, TerminateWorkspacesPoolSessionRequest, TerminateWorkspacesPoolSessionResult, [AccessDeniedException, InvalidParameterValuesException, OperationInProgressException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Amazon Connect client add-in. Use this action to update the name and
 * endpoint URL of a Amazon Connect client add-in.
 */export const updateConnectClientAddIn = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.UpdateConnectClientAddIn" }, UpdateConnectClientAddInRequest, UpdateConnectClientAddInResult, [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Shares or unshares an image with one account in the same Amazon Web Services Region by
 * specifying whether that account has permission to copy the image. If the copy image
 * permission is granted, the image is shared with that account. If the copy image permission
 * is revoked, the image is unshared with the account.
 * 
 * 
 * After an image has been shared, the recipient account can copy the image to other
 * Regions as needed.
 * 
 * 
 * In the China (Ningxia) Region, you can copy images only within the same Region.
 * 
 * 
 * In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web ServicesSupport.
 * 
 * 
 * For more information about sharing images, see Share or Unshare a Custom
 * WorkSpaces Image.
 * 
 * 
 * 
 * 
 * 
 * - To delete an image that has been shared, you must unshare the image before you
 * delete it.
 * 
 * 
 * 
 * - Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts
 * isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images
 * across accounts in Amazon Web Services GovCloud (US), contact Amazon Web ServicesSupport.
 */export const updateWorkspaceImagePermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.UpdateWorkspaceImagePermission" }, UpdateWorkspaceImagePermissionRequest, UpdateWorkspaceImagePermissionResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException, ResourceUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the specified connection alias with the specified directory to enable
 * cross-Region redirection. For more information, see Cross-Region
 * Redirection for Amazon WorkSpaces.
 * 
 * 
 * 
 * 
 * Before performing this operation, call
 * DescribeConnectionAliases to make sure that the current state of the
 * connection alias is `CREATED`.
 */export const associateConnectionAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.AssociateConnectionAlias" }, AssociateConnectionAliasRequest, AssociateConnectionAliasResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationNotSupportedException, ResourceAssociatedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the specified IP access control group with the specified directory.
 */export const associateIpGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.AssociateIpGroups" }, AssociateIpGroupsRequest, AssociateIpGroupsResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationNotSupportedException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more rules to the specified IP access control group.
 * 
 * 
 * This action gives users permission to access their WorkSpaces from the CIDR address
 * ranges specified in the rules.
 */export const authorizeIpRules = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.AuthorizeIpRules" }, AuthorizeIpRulesRequest, AuthorizeIpRulesResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates the specified connection alias for use with cross-Region redirection. For more
 * information, see Cross-Region
 * Redirection for Amazon WorkSpaces.
 */export const createConnectionAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.CreateConnectionAlias" }, CreateConnectionAliasRequest, CreateConnectionAliasResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationNotSupportedException, ResourceAlreadyExistsException, ResourceLimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates the specified tags for the specified WorkSpaces resource.
 */export const createTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.CreateTags" }, CreateTagsRequest, CreateTagsResult, [InvalidParameterValuesException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new updated WorkSpace image based on the specified source image. The new
 * updated WorkSpace image has the latest drivers and other updates required by the
 * Amazon WorkSpaces components.
 * 
 * 
 * To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces
 * requirements, use
 * DescribeWorkspaceImages.
 * 
 * 
 * 
 * 
 * 
 * - Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images
 * can be programmatically updated at this time.
 * 
 * 
 * 
 * - Microsoft Windows updates and other application updates are not included in the
 * update process.
 * 
 * 
 * 
 * - The source WorkSpace image is not deleted. You can delete the source image
 * after you've verified your new updated image and created a new bundle.
 */export const createUpdatedWorkspaceImage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.CreateUpdatedWorkspaceImage" }, CreateUpdatedWorkspaceImageRequest, CreateUpdatedWorkspaceImageResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationNotSupportedException, ResourceAlreadyExistsException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes customized client branding. Client branding allows you to customize your
 * WorkSpace's client login portal. You can tailor your login portal company logo, the support
 * email address, support link, link to reset password, and a custom message for users trying
 * to sign in.
 * 
 * 
 * After you delete your customized client branding, your login portal reverts to the
 * default client branding.
 */export const deleteClientBranding = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DeleteClientBranding" }, DeleteClientBrandingRequest, DeleteClientBrandingResult, [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified connection alias. For more information, see
 * Cross-Region Redirection for Amazon WorkSpaces.
 * 
 * 
 * 
 * 
 * 
 * If you will no longer be using a fully qualified domain name
 * (FQDN) as the registration code for your WorkSpaces users, you must take certain
 * precautions to prevent potential security issues. For more information,
 * see Security Considerations if You Stop Using Cross-Region Redirection.
 * 
 * 
 * 
 * 
 * 
 * 
 * To delete a connection alias that has been shared, the shared account must first
 * disassociate the connection alias from any directories it has been associated with. Then
 * you must unshare the connection alias from the account it has been shared with. You can
 * delete a connection alias only after it is no longer shared with any accounts or
 * associated with any directories.
 */export const deleteConnectionAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DeleteConnectionAlias" }, DeleteConnectionAliasRequest, DeleteConnectionAliasResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationNotSupportedException, ResourceAssociatedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified IP access control group.
 * 
 * 
 * You cannot delete an IP access control group that is associated with a directory.
 */export const deleteIpGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DeleteIpGroup" }, DeleteIpGroupRequest, DeleteIpGroupResult, [AccessDeniedException, InvalidParameterValuesException, ResourceAssociatedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deregisters the specified directory. This operation is asynchronous and returns before
 * the WorkSpace directory is deregistered. If any WorkSpaces are registered to this
 * directory, you must remove them before you can deregister the directory.
 * 
 * 
 * 
 * 
 * Simple AD and AD Connector are made available to you free of charge to use with
 * WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector
 * directory for 30 consecutive days, this directory will be automatically deregistered for
 * use with Amazon WorkSpaces, and you will be charged for this directory as per the Directory Service pricing
 * terms.
 * 
 * 
 * To delete empty directories, see Delete the
 * Directory for Your WorkSpaces. If you delete your Simple AD or AD Connector
 * directory, you can always create a new one when you want to start using WorkSpaces
 * again.
 */export const deregisterWorkspaceDirectory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DeregisterWorkspaceDirectory" }, DeregisterWorkspaceDirectoryRequest, DeregisterWorkspaceDirectoryResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the permissions that the owner of a connection alias has granted to another
 * Amazon Web Services account for the specified connection alias. For more information, see
 * Cross-Region
 * Redirection for Amazon WorkSpaces.
 */export const describeConnectionAliasPermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeConnectionAliasPermissions" }, DescribeConnectionAliasPermissionsRequest, DescribeConnectionAliasPermissionsResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified tags for the specified WorkSpaces resource.
 */export const describeTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeTags" }, DescribeTagsRequest, DescribeTagsResult, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the associations betweens applications and the specified WorkSpace.
 */export const describeWorkspaceAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeWorkspaceAssociations" }, DescribeWorkspaceAssociationsRequest, DescribeWorkspaceAssociationsResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Imports the specified Windows 10 or 11 Bring Your Own License (BYOL)
 * image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is
 * in your Amazon Web Services account, and you must own the image. For more information about
 * creating BYOL images, see Bring Your Own Windows
 * Desktop Licenses.
 */export const importWorkspaceImage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ImportWorkspaceImage" }, ImportWorkspaceImageRequest, ImportWorkspaceImageResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceAlreadyExistsException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all account links.
 */export const listAccountLinks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ListAccountLinks" }, ListAccountLinksRequest, ListAccountLinksResult, [AccessDeniedException, InternalServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use
 * for the network management interface when you enable Bring Your Own License (BYOL).
 * 
 * 
 * This operation can be run only by Amazon Web Services accounts that are enabled for BYOL.
 * If your account isn't enabled for BYOL, you'll receive an
 * `AccessDeniedException` error.
 * 
 * 
 * The management network interface is connected to a secure Amazon WorkSpaces management
 * network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
 * clients, and to allow Amazon WorkSpaces to manage the WorkSpace.
 */export const listAvailableManagementCidrRanges = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ListAvailableManagementCidrRanges" }, ListAvailableManagementCidrRangesRequest, ListAvailableManagementCidrRangesResult, [AccessDeniedException, InvalidParameterValuesException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Migrates a WorkSpace from one operating system or bundle type to another, while
 * retaining the data on the user volume.
 * 
 * 
 * The migration process recreates the WorkSpace by using a new root volume from the target
 * bundle image and the user volume from the last available snapshot of the original
 * WorkSpace. During migration, the original `D:\Users\%USERNAME%` user profile
 * folder is renamed to `D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated`. A new
 * `D:\Users\%USERNAME%\` folder is generated by the new OS. Certain files in
 * the old user profile are moved to the new user profile.
 * 
 * 
 * For available migration scenarios, details about what happens during migration, and best
 * practices, see Migrate a
 * WorkSpace.
 */export const migrateWorkspace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.MigrateWorkspace" }, MigrateWorkspaceRequest, MigrateWorkspaceResult, [AccessDeniedException, InvalidParameterValuesException, OperationInProgressException, OperationNotSupportedException, ResourceNotFoundException, ResourceUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the configuration of Bring Your Own License (BYOL) for the specified
 * account.
 */export const modifyAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ModifyAccount" }, ModifyAccountRequest, ModifyAccountResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, ResourceNotFoundException, ResourceUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the properties of the certificate-based authentication you want
 * to use with your WorkSpaces.
 */export const modifyCertificateBasedAuthProperties = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ModifyCertificateBasedAuthProperties" }, ModifyCertificateBasedAuthPropertiesRequest, ModifyCertificateBasedAuthPropertiesResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the properties of the specified Amazon WorkSpaces clients.
 */export const modifyClientProperties = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ModifyClientProperties" }, ModifyClientPropertiesRequest, ModifyClientPropertiesResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies multiple properties related to SAML 2.0 authentication, including the enablement status,
 * user access URL, and relay state parameter name that are used for configuring federation with an
 * SAML 2.0 identity provider.
 */export const modifySamlProperties = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ModifySamlProperties" }, ModifySamlPropertiesRequest, ModifySamlPropertiesResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the self-service WorkSpace management capabilities for your users. For more
 * information, see Enable Self-Service WorkSpace Management Capabilities for Your Users.
 */export const modifySelfservicePermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ModifySelfservicePermissions" }, ModifySelfservicePermissionsRequest, ModifySelfservicePermissionsResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modify the default properties used to create WorkSpaces.
 */export const modifyWorkspaceCreationProperties = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ModifyWorkspaceCreationProperties" }, ModifyWorkspaceCreationPropertiesRequest, ModifyWorkspaceCreationPropertiesResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Rejects the account link invitation.
 */export const rejectAccountLinkInvitation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.RejectAccountLinkInvitation" }, RejectAccountLinkInvitationRequest, RejectAccountLinkInvitationResult, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the specified pool.
 * 
 * 
 * You cannot start a pool unless it has a running mode of
 * `AutoStop` and a state of `STOPPED`.
 */export const startWorkspacesPool = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.StartWorkspacesPool" }, StartWorkspacesPoolRequest, StartWorkspacesPoolResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationInProgressException, OperationNotSupportedException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Shares or unshares a connection alias with one account by specifying whether that
 * account has permission to associate the connection alias with a directory. If the
 * association permission is granted, the connection alias is shared with that account. If the
 * association permission is revoked, the connection alias is unshared with the account. For
 * more information, see Cross-Region
 * Redirection for Amazon WorkSpaces.
 * 
 * 
 * 
 * 
 * 
 * - Before performing this operation, call
 * DescribeConnectionAliases to make sure that the current state of the
 * connection alias is `CREATED`.
 * 
 * 
 * 
 * - To delete a connection alias that has been shared, the shared account must
 * first disassociate the connection alias from any directories it has been
 * associated with. Then you must unshare the connection alias from the account it
 * has been shared with. You can delete a connection alias only after it is no longer
 * shared with any accounts or associated with any directories.
 */export const updateConnectionAliasPermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.UpdateConnectionAliasPermission" }, UpdateConnectionAliasPermissionRequest, UpdateConnectionAliasPermissionResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationNotSupportedException, ResourceAssociatedException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Replaces the current rules of the specified IP access control group with the specified
 * rules.
 */export const updateRulesOfIpGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.UpdateRulesOfIpGroup" }, UpdateRulesOfIpGroupRequest, UpdateRulesOfIpGroupResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see
 * 
 * Update a Custom WorkSpaces Bundle.
 * 
 * 
 * 
 * 
 * Existing WorkSpaces aren't automatically updated when you update the bundle that they're
 * based on. To update existing WorkSpaces that are based on a bundle that you've updated, you
 * must either rebuild the WorkSpaces or delete and recreate them.
 */export const updateWorkspaceBundle = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.UpdateWorkspaceBundle" }, UpdateWorkspaceBundleRequest, UpdateWorkspaceBundleResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException, ResourceUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Accepts the account link invitation.
 * 
 * 
 * 
 * 
 * There's currently no unlinking capability after you accept the account linking invitation.
 */export const acceptAccountLinkInvitation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.AcceptAccountLinkInvitation" }, AcceptAccountLinkInvitationRequest, AcceptAccountLinkInvitationResult, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Copies the specified image from the specified Region to the current Region. For more
 * information about copying images, see Copy a Custom WorkSpaces
 * Image.
 * 
 * 
 * In the China (Ningxia) Region, you can copy images only within the same Region.
 * 
 * 
 * In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web ServicesSupport.
 * 
 * 
 * 
 * 
 * Before copying a shared image, be sure to verify that it has been shared from the
 * correct Amazon Web Services account. To determine if an image has been shared and to see
 * the ID of the Amazon Web Services account that owns an image, use the DescribeWorkSpaceImages and DescribeWorkspaceImagePermissions API operations.
 */export const copyWorkspaceImage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.CopyWorkspaceImage" }, CopyWorkspaceImageRequest, CopyWorkspaceImageResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceAlreadyExistsException, ResourceLimitExceededException, ResourceNotFoundException, ResourceUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates the account link invitation.
 */export const createAccountLinkInvitation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.CreateAccountLinkInvitation" }, CreateAccountLinkInvitationRequest, CreateAccountLinkInvitationResult, [AccessDeniedException, ConflictException, InternalServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a client-add-in for Amazon Connect within a directory. You can create only
 * one Amazon Connect client add-in within a directory.
 * 
 * 
 * This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.
 */export const createConnectClientAddIn = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.CreateConnectClientAddIn" }, CreateConnectClientAddInRequest, CreateConnectClientAddInResult, [AccessDeniedException, InvalidParameterValuesException, ResourceAlreadyExistsException, ResourceCreationFailedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an IP access control group.
 * 
 * 
 * An IP access control group provides you with the ability to control the IP addresses
 * from which users are allowed to access their WorkSpaces. To specify the CIDR address
 * ranges, add rules to your IP access control group and then associate the group with your
 * directory. You can add rules when you create the group or at any time using AuthorizeIpRules.
 * 
 * 
 * There is a default IP access control group associated with your directory. If you don't
 * associate an IP access control group with your directory, the default group is used. The
 * default group includes a default rule that allows users to access their WorkSpaces from
 * anywhere. You cannot modify the default IP access control group for your directory.
 */export const createIpGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.CreateIpGroup" }, CreateIpGroupRequest, CreateIpGroupResult, [AccessDeniedException, InvalidParameterValuesException, ResourceAlreadyExistsException, ResourceCreationFailedException, ResourceLimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see
 * 
 * Create a Custom WorkSpaces Image and Bundle.
 */export const createWorkspaceBundle = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.CreateWorkspaceBundle" }, CreateWorkspaceBundleRequest, CreateWorkspaceBundleResult, [AccessDeniedException, InvalidParameterValuesException, ResourceAlreadyExistsException, ResourceLimitExceededException, ResourceNotFoundException, ResourceUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new WorkSpace image from an existing WorkSpace.
 */export const createWorkspaceImage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.CreateWorkspaceImage" }, CreateWorkspaceImageRequest, CreateWorkspaceImageResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationNotSupportedException, ResourceAlreadyExistsException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a pool of WorkSpaces.
 */export const createWorkspacesPool = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.CreateWorkspacesPool" }, CreateWorkspacesPoolRequest, CreateWorkspacesPoolResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceAlreadyExistsException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the account link invitation.
 */export const deleteAccountLinkInvitation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DeleteAccountLinkInvitation" }, DeleteAccountLinkInvitationRequest, DeleteAccountLinkInvitationResult, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deploys associated applications to the specified WorkSpace
 */export const deployWorkspaceApplications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DeployWorkspaceApplications" }, DeployWorkspaceApplicationsRequest, DeployWorkspaceApplicationsResult, [AccessDeniedException, IncompatibleApplicationsException, InvalidParameterValuesException, OperationNotSupportedException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes modifications to the configuration of Bring Your Own
 * License (BYOL) for the specified account.
 */export const describeAccountModifications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeAccountModifications" }, DescribeAccountModificationsRequest, DescribeAccountModificationsResult, [AccessDeniedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the associations between the application and the specified associated resources.
 */export const describeApplicationAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeApplicationAssociations" }, DescribeApplicationAssociationsRequest, DescribeApplicationAssociationsResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified applications by filtering based on their compute types, license availability, operating systems, and owners.
 */export const describeApplications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeApplications" }, DescribeApplicationsRequest, DescribeApplicationsResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the associations between the applications and the specified bundle.
 */export const describeBundleAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeBundleAssociations" }, DescribeBundleAssociationsRequest, DescribeBundleAssociationsResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified client branding. Client branding allows you to customize the log
 * in page of various device types for your users. You can add your company logo, the support
 * email address, support link, link to reset password, and a custom message for users trying
 * to sign in.
 * 
 * 
 * 
 * 
 * Only device types that have branding information configured will be shown in the
 * response.
 */export const describeClientBranding = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeClientBranding" }, DescribeClientBrandingRequest, DescribeClientBrandingResult, [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more specified Amazon WorkSpaces clients.
 */export const describeClientProperties = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeClientProperties" }, DescribeClientPropertiesRequest, DescribeClientPropertiesResult, [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of Amazon Connect client add-ins that have been created.
 */export const describeConnectClientAddIns = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeConnectClientAddIns" }, DescribeConnectClientAddInsRequest, DescribeConnectClientAddInsResult, [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a WorkSpace BYOL image being imported via ImportCustomWorkspaceImage.
 */export const describeCustomWorkspaceImageImport = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeCustomWorkspaceImageImport" }, DescribeCustomWorkspaceImageImportRequest, DescribeCustomWorkspaceImageImportResult, [AccessDeniedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the associations between the applications and the specified image.
 */export const describeImageAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeImageAssociations" }, DescribeImageAssociationsRequest, DescribeImageAssociationsResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes one or more of your IP access control groups.
 */export const describeIpGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeIpGroups" }, DescribeIpGroupsRequest, DescribeIpGroupsResult, [AccessDeniedException, InvalidParameterValuesException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes the available WorkSpace bundles.
 * 
 * 
 * You can filter the results using either bundle ID or owner, but not both.
 */export const describeWorkspaceBundles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeWorkspaceBundles" }, DescribeWorkspaceBundlesRequest, DescribeWorkspaceBundlesResult, [InvalidParameterValuesException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.
 */export const describeWorkspaceImagePermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeWorkspaceImagePermissions" }, DescribeWorkspaceImagePermissionsRequest, DescribeWorkspaceImagePermissionsResult, [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the connection status of the specified WorkSpaces.
 */export const describeWorkspacesConnectionStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeWorkspacesConnectionStatus" }, DescribeWorkspacesConnectionStatusRequest, DescribeWorkspacesConnectionStatusResult, [InvalidParameterValuesException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the snapshots for the specified WorkSpace.
 */export const describeWorkspaceSnapshots = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeWorkspaceSnapshots" }, DescribeWorkspaceSnapshotsRequest, DescribeWorkspaceSnapshotsResult, [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified WorkSpaces Pools.
 */export const describeWorkspacesPools = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeWorkspacesPools" }, DescribeWorkspacesPoolsRequest, DescribeWorkspacesPoolsResult, [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the specified application from a WorkSpace.
 */export const disassociateWorkspaceApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DisassociateWorkspaceApplication" }, DisassociateWorkspaceApplicationRequest, DisassociateWorkspaceApplicationResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves account link information.
 */export const getAccountLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.GetAccountLink" }, GetAccountLinkRequest, GetAccountLinkResult, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Imports the specified Windows 10 or 11 Bring Your Own License (BYOL)
 * image into Amazon WorkSpaces using EC2 Image Builder. The image must be an already licensed image that is
 * in your Amazon Web Services account, and you must own the image. For more information about
 * creating BYOL images, see Bring Your Own Windows
 * Desktop Licenses.
 */export const importCustomWorkspaceImage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ImportCustomWorkspaceImage" }, ImportCustomWorkspaceImageRequest, ImportCustomWorkspaceImageResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceAlreadyExistsException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the specified streaming properties.
 */export const modifyStreamingProperties = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ModifyStreamingProperties" }, ModifyStreamingPropertiesRequest, ModifyStreamingPropertiesResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Rebuilds the specified WorkSpace.
 * 
 * 
 * You cannot rebuild a WorkSpace unless its state is `AVAILABLE`,
 * `ERROR`, `UNHEALTHY`, `STOPPED`, or
 * `REBOOTING`.
 * 
 * 
 * Rebuilding a WorkSpace is a potentially destructive action that can result in the loss
 * of data. For more information, see Rebuild a
 * WorkSpace.
 * 
 * 
 * This operation is asynchronous and returns before the WorkSpaces have been completely
 * rebuilt.
 */export const rebuildWorkspaces = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.RebuildWorkspaces" }, RebuildWorkspacesRequest, RebuildWorkspacesResult, [OperationNotSupportedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the specified WorkSpaces.
 * 
 * 
 * You cannot start a WorkSpace unless it has a running mode of `AutoStop` or
 * `Manual` and a state of `STOPPED`.
 */export const startWorkspaces = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.StartWorkspaces" }, StartWorkspacesRequest, StartWorkspacesResult, []), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops the specified WorkSpaces.
 * 
 * 
 * You cannot stop a WorkSpace unless it has a running mode of `AutoStop` or
 * `Manual` and a state of `AVAILABLE`, `IMPAIRED`,
 * `UNHEALTHY`, or `ERROR`.
 */export const stopWorkspaces = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.StopWorkspaces" }, StopWorkspacesRequest, StopWorkspacesResult, []), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Terminates the specified WorkSpaces.
 * 
 * 
 * 
 * 
 * Terminating a WorkSpace is a permanent action and cannot be undone. The user's data
 * is destroyed. If you need to archive any user data, contact Amazon Web ServicesSupport before
 * terminating the WorkSpace.
 * 
 * 
 * 
 * 
 * You can terminate a WorkSpace that is in any state except `SUSPENDED`.
 * 
 * 
 * This operation is asynchronous and returns before the WorkSpaces have been completely
 * terminated. After a WorkSpace is terminated, the `TERMINATED` state is returned
 * only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely
 * returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using
 * 
 * DescribeWorkSpaces. If the WorkSpace ID isn't returned, then the WorkSpace has
 * been successfully terminated.
 * 
 * 
 * 
 * 
 * Simple AD and AD Connector are made available to you free of charge to use with
 * WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector
 * directory for 30 consecutive days, this directory will be automatically deregistered for
 * use with Amazon WorkSpaces, and you will be charged for this directory as per the Directory Service pricing
 * terms.
 * 
 * 
 * To delete empty directories, see Delete the
 * Directory for Your WorkSpaces. If you delete your Simple AD or AD Connector
 * directory, you can always create a new one when you want to start using WorkSpaces
 * again.
 */export const terminateWorkspaces = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.TerminateWorkspaces" }, TerminateWorkspacesRequest, TerminateWorkspacesResult, []), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the specified application to the specified WorkSpace.
 */export const associateWorkspaceApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.AssociateWorkspaceApplication" }, AssociateWorkspaceApplicationRequest, AssociateWorkspaceApplicationResult, [AccessDeniedException, ApplicationNotSupportedException, ComputeNotCompatibleException, IncompatibleApplicationsException, InvalidParameterValuesException, OperatingSystemNotCompatibleException, OperationNotSupportedException, ResourceAlreadyExistsException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a standby WorkSpace in a secondary Region.
 */export const createStandbyWorkspaces = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.CreateStandbyWorkspaces" }, CreateStandbyWorkspacesRequest, CreateStandbyWorkspacesResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates one or more WorkSpaces.
 * 
 * 
 * This operation is asynchronous and returns before the WorkSpaces are created.
 * 
 * 
 * 
 * 
 * 
 * - The `MANUAL` running mode value is only supported by Amazon WorkSpaces
 * Core. Contact your account team to be allow-listed to use this value. For more
 * information, see Amazon WorkSpaces
 * Core.
 * 
 * 
 * 
 * - You don't need to specify the `PCOIP` protocol for Linux bundles
 * because `DCV` (formerly WSP) is the default protocol for those bundles.
 * 
 * 
 * 
 * - User-decoupled WorkSpaces are only supported by Amazon WorkSpaces
 * Core.
 * 
 * 
 * 
 * - Review your running mode to ensure you are using one that is optimal for your needs and budget.
 * For more information on switching running modes, see
 * 
 * Can I switch between hourly and monthly billing?
 */export const createWorkspaces = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.CreateWorkspaces" }, CreateWorkspacesRequest, CreateWorkspacesResult, [InvalidParameterValuesException, ResourceLimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes the connection aliases used for cross-Region
 * redirection. For more information, see Cross-Region
 * Redirection for Amazon WorkSpaces.
 */export const describeConnectionAliases = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeConnectionAliases" }, DescribeConnectionAliasesRequest, DescribeConnectionAliasesResult, [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more specified images, if the image identifiers
 * are provided. Otherwise, all images in the account are described.
 */export const describeWorkspaceImages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeWorkspaceImages" }, DescribeWorkspaceImagesRequest, DescribeWorkspaceImagesResult, [AccessDeniedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified WorkSpaces.
 * 
 * 
 * You can filter the results by using the bundle identifier, directory identifier, or
 * owner, but you can specify only one filter at a time.
 */export const describeWorkspaces = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeWorkspaces" }, DescribeWorkspacesRequest, DescribeWorkspacesResult, [InvalidParameterValuesException, ResourceUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes the streaming sessions for a specified pool.
 */export const describeWorkspacesPoolSessions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeWorkspacesPoolSessions" }, DescribeWorkspacesPoolSessionsRequest, DescribeWorkspacesPoolSessionsResult, [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Imports client branding. Client branding allows you to customize your WorkSpace's client
 * login portal. You can tailor your login portal company logo, the support email address,
 * support link, link to reset password, and a custom message for users trying to sign
 * in.
 * 
 * 
 * After you import client branding, the default branding experience for the specified
 * platform type is replaced with the imported experience
 * 
 * 
 * 
 * 
 * 
 * - You must specify at least one platform type when importing client
 * branding.
 * 
 * 
 * 
 * - You can import up to 6 MB of data with each request. If your request exceeds
 * this limit, you can import client branding for different platform types using
 * separate requests.
 * 
 * 
 * 
 * - In each platform type, the `SupportEmail` and
 * `SupportLink` parameters are mutually exclusive. You can specify
 * only one parameter for each platform type, but not both.
 * 
 * 
 * 
 * - Imported data can take up to a minute to appear in the WorkSpaces
 * client.
 */export const importClientBranding = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ImportClientBranding" }, ImportClientBrandingRequest, ImportClientBrandingResult, [AccessDeniedException, InvalidParameterValuesException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the specified WorkSpace properties. For important information about how to
 * modify the size of the root and user volumes, see Modify a WorkSpace.
 * 
 * 
 * 
 * 
 * 
 * The `MANUAL` running mode value is only supported by Amazon WorkSpaces
 * Core. Contact your account team to be allow-listed to use this value. For more
 * information, see Amazon WorkSpaces
 * Core.
 */export const modifyWorkspaceProperties = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ModifyWorkspaceProperties" }, ModifyWorkspacePropertiesRequest, ModifyWorkspacePropertiesResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationInProgressException, ResourceNotFoundException, ResourceUnavailableException, UnsupportedWorkspaceConfigurationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Reboots the specified WorkSpaces.
 * 
 * 
 * You cannot reboot a WorkSpace unless its state is `AVAILABLE`,
 * `UNHEALTHY`, or `REBOOTING`. Reboot a WorkSpace in the `REBOOTING`
 * state only if your WorkSpace has been stuck in the `REBOOTING` state for over 20 minutes.
 * 
 * 
 * This operation is asynchronous and returns before the WorkSpaces have rebooted.
 */export const rebootWorkspaces = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.RebootWorkspaces" }, RebootWorkspacesRequest, RebootWorkspacesResult, [OperationNotSupportedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified pool.
 */export const updateWorkspacesPool = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.UpdateWorkspacesPool" }, UpdateWorkspacesPoolRequest, UpdateWorkspacesPoolResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationInProgressException, OperationNotSupportedException, ResourceLimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the available directories that are registered with Amazon WorkSpaces.
 */export const describeWorkspaceDirectories = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.DescribeWorkspaceDirectories" }, DescribeWorkspaceDirectoriesRequest, DescribeWorkspaceDirectoriesResult, [InvalidParameterValuesException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Specifies which devices and operating systems users can use to access their WorkSpaces.
 * For more information, see
 * Control Device Access.
 */export const modifyWorkspaceAccessProperties = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.ModifyWorkspaceAccessProperties" }, ModifyWorkspaceAccessPropertiesRequest, ModifyWorkspaceAccessPropertiesResult, [AccessDeniedException, InvalidParameterCombinationException, InvalidParameterValuesException, OperationNotSupportedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers the specified directory. This operation is asynchronous and returns before the
 * WorkSpace directory is registered. If this is the first time you are registering a
 * directory, you will need to create the workspaces_DefaultRole role before you can register
 * a directory. For more information, see
 * Creating the workspaces_DefaultRole Role.
 */export const registerWorkspaceDirectory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-08", uri: "/", method: "POST", sdkId: "WorkSpaces", sigV4ServiceName: "workspaces", name: "WorkspacesService.RegisterWorkspaceDirectory" }, RegisterWorkspaceDirectoryRequest, RegisterWorkspaceDirectoryResult, [AccessDeniedException, InvalidParameterValuesException, InvalidResourceStateException, OperationNotSupportedException, ResourceAlreadyExistsException, ResourceLimitExceededException, ResourceNotFoundException, UnsupportedNetworkConfigurationException, WorkspacesDefaultRoleNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

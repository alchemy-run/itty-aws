import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetDirectoryLimitsRequest extends S.Class<GetDirectoryLimitsRequest>("GetDirectoryLimitsRequest")({}) {}
export const DnsIpAddrs = S.Array(S.String);
export const DnsIpv6Addrs = S.Array(S.String);
export const RemoteDomainNames = S.Array(S.String);
export const DirectoryIds = S.Array(S.String);
export const DomainControllerIds = S.Array(S.String);
export const TopicNames = S.Array(S.String);
export const SnapshotIds = S.Array(S.String);
export const TrustIds = S.Array(S.String);
export const CidrIps = S.Array(S.String);
export const CidrIpv6s = S.Array(S.String);
export const TagKeys = S.Array(S.String);
export class AcceptSharedDirectoryRequest extends S.Class<AcceptSharedDirectoryRequest>("AcceptSharedDirectoryRequest")({SharedDirectoryId: S.String}) {}
export class CancelSchemaExtensionRequest extends S.Class<CancelSchemaExtensionRequest>("CancelSchemaExtensionRequest")({DirectoryId: S.String, SchemaExtensionId: S.String}) {}
export class CancelSchemaExtensionResult extends S.Class<CancelSchemaExtensionResult>("CancelSchemaExtensionResult")({}) {}
export class CreateAliasRequest extends S.Class<CreateAliasRequest>("CreateAliasRequest")({DirectoryId: S.String, Alias: S.String}) {}
export class CreateConditionalForwarderRequest extends S.Class<CreateConditionalForwarderRequest>("CreateConditionalForwarderRequest")({DirectoryId: S.String, RemoteDomainName: S.String, DnsIpAddrs: S.optional(DnsIpAddrs), DnsIpv6Addrs: S.optional(DnsIpv6Addrs)}) {}
export class CreateConditionalForwarderResult extends S.Class<CreateConditionalForwarderResult>("CreateConditionalForwarderResult")({}) {}
export const SubnetIds = S.Array(S.String);
export class DirectoryVpcSettings extends S.Class<DirectoryVpcSettings>("DirectoryVpcSettings")({VpcId: S.String, SubnetIds: SubnetIds}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const Tags = S.Array(Tag);
export class CreateDirectoryRequest extends S.Class<CreateDirectoryRequest>("CreateDirectoryRequest")({Name: S.String, ShortName: S.optional(S.String), Password: S.String, Description: S.optional(S.String), Size: S.String, VpcSettings: S.optional(DirectoryVpcSettings), Tags: S.optional(Tags), NetworkType: S.optional(S.String)}) {}
export class CreateHybridADRequest extends S.Class<CreateHybridADRequest>("CreateHybridADRequest")({SecretArn: S.String, AssessmentId: S.String, Tags: S.optional(Tags)}) {}
export class CreateLogSubscriptionRequest extends S.Class<CreateLogSubscriptionRequest>("CreateLogSubscriptionRequest")({DirectoryId: S.String, LogGroupName: S.String}) {}
export class CreateLogSubscriptionResult extends S.Class<CreateLogSubscriptionResult>("CreateLogSubscriptionResult")({}) {}
export class CreateMicrosoftADRequest extends S.Class<CreateMicrosoftADRequest>("CreateMicrosoftADRequest")({Name: S.String, ShortName: S.optional(S.String), Password: S.String, Description: S.optional(S.String), VpcSettings: DirectoryVpcSettings, Edition: S.optional(S.String), Tags: S.optional(Tags), NetworkType: S.optional(S.String)}) {}
export class CreateSnapshotRequest extends S.Class<CreateSnapshotRequest>("CreateSnapshotRequest")({DirectoryId: S.String, Name: S.optional(S.String)}) {}
export class CreateTrustRequest extends S.Class<CreateTrustRequest>("CreateTrustRequest")({DirectoryId: S.String, RemoteDomainName: S.String, TrustPassword: S.String, TrustDirection: S.String, TrustType: S.optional(S.String), ConditionalForwarderIpAddrs: S.optional(DnsIpAddrs), ConditionalForwarderIpv6Addrs: S.optional(DnsIpv6Addrs), SelectiveAuth: S.optional(S.String)}) {}
export class DeleteADAssessmentRequest extends S.Class<DeleteADAssessmentRequest>("DeleteADAssessmentRequest")({AssessmentId: S.String}) {}
export class DeleteConditionalForwarderRequest extends S.Class<DeleteConditionalForwarderRequest>("DeleteConditionalForwarderRequest")({DirectoryId: S.String, RemoteDomainName: S.String}) {}
export class DeleteConditionalForwarderResult extends S.Class<DeleteConditionalForwarderResult>("DeleteConditionalForwarderResult")({}) {}
export class DeleteDirectoryRequest extends S.Class<DeleteDirectoryRequest>("DeleteDirectoryRequest")({DirectoryId: S.String}) {}
export class DeleteLogSubscriptionRequest extends S.Class<DeleteLogSubscriptionRequest>("DeleteLogSubscriptionRequest")({DirectoryId: S.String}) {}
export class DeleteLogSubscriptionResult extends S.Class<DeleteLogSubscriptionResult>("DeleteLogSubscriptionResult")({}) {}
export class DeleteSnapshotRequest extends S.Class<DeleteSnapshotRequest>("DeleteSnapshotRequest")({SnapshotId: S.String}) {}
export class DeleteTrustRequest extends S.Class<DeleteTrustRequest>("DeleteTrustRequest")({TrustId: S.String, DeleteAssociatedConditionalForwarder: S.optional(S.Boolean)}) {}
export class DeregisterCertificateRequest extends S.Class<DeregisterCertificateRequest>("DeregisterCertificateRequest")({DirectoryId: S.String, CertificateId: S.String}) {}
export class DeregisterCertificateResult extends S.Class<DeregisterCertificateResult>("DeregisterCertificateResult")({}) {}
export class DeregisterEventTopicRequest extends S.Class<DeregisterEventTopicRequest>("DeregisterEventTopicRequest")({DirectoryId: S.String, TopicName: S.String}) {}
export class DeregisterEventTopicResult extends S.Class<DeregisterEventTopicResult>("DeregisterEventTopicResult")({}) {}
export class DescribeADAssessmentRequest extends S.Class<DescribeADAssessmentRequest>("DescribeADAssessmentRequest")({AssessmentId: S.String}) {}
export class DescribeCAEnrollmentPolicyRequest extends S.Class<DescribeCAEnrollmentPolicyRequest>("DescribeCAEnrollmentPolicyRequest")({DirectoryId: S.String}) {}
export class DescribeCertificateRequest extends S.Class<DescribeCertificateRequest>("DescribeCertificateRequest")({DirectoryId: S.String, CertificateId: S.String}) {}
export class DescribeClientAuthenticationSettingsRequest extends S.Class<DescribeClientAuthenticationSettingsRequest>("DescribeClientAuthenticationSettingsRequest")({DirectoryId: S.String, Type: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class DescribeConditionalForwardersRequest extends S.Class<DescribeConditionalForwardersRequest>("DescribeConditionalForwardersRequest")({DirectoryId: S.String, RemoteDomainNames: S.optional(RemoteDomainNames)}) {}
export class DescribeDirectoriesRequest extends S.Class<DescribeDirectoriesRequest>("DescribeDirectoriesRequest")({DirectoryIds: S.optional(DirectoryIds), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class DescribeDirectoryDataAccessRequest extends S.Class<DescribeDirectoryDataAccessRequest>("DescribeDirectoryDataAccessRequest")({DirectoryId: S.String}) {}
export class DescribeDomainControllersRequest extends S.Class<DescribeDomainControllersRequest>("DescribeDomainControllersRequest")({DirectoryId: S.String, DomainControllerIds: S.optional(DomainControllerIds), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class DescribeEventTopicsRequest extends S.Class<DescribeEventTopicsRequest>("DescribeEventTopicsRequest")({DirectoryId: S.optional(S.String), TopicNames: S.optional(TopicNames)}) {}
export class DescribeHybridADUpdateRequest extends S.Class<DescribeHybridADUpdateRequest>("DescribeHybridADUpdateRequest")({DirectoryId: S.String, UpdateType: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class DescribeLDAPSSettingsRequest extends S.Class<DescribeLDAPSSettingsRequest>("DescribeLDAPSSettingsRequest")({DirectoryId: S.String, Type: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class DescribeRegionsRequest extends S.Class<DescribeRegionsRequest>("DescribeRegionsRequest")({DirectoryId: S.String, RegionName: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class DescribeSettingsRequest extends S.Class<DescribeSettingsRequest>("DescribeSettingsRequest")({DirectoryId: S.String, Status: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class DescribeSharedDirectoriesRequest extends S.Class<DescribeSharedDirectoriesRequest>("DescribeSharedDirectoriesRequest")({OwnerDirectoryId: S.String, SharedDirectoryIds: S.optional(DirectoryIds), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class DescribeSnapshotsRequest extends S.Class<DescribeSnapshotsRequest>("DescribeSnapshotsRequest")({DirectoryId: S.optional(S.String), SnapshotIds: S.optional(SnapshotIds), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class DescribeTrustsRequest extends S.Class<DescribeTrustsRequest>("DescribeTrustsRequest")({DirectoryId: S.optional(S.String), TrustIds: S.optional(TrustIds), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class DescribeUpdateDirectoryRequest extends S.Class<DescribeUpdateDirectoryRequest>("DescribeUpdateDirectoryRequest")({DirectoryId: S.String, UpdateType: S.String, RegionName: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class DisableCAEnrollmentPolicyRequest extends S.Class<DisableCAEnrollmentPolicyRequest>("DisableCAEnrollmentPolicyRequest")({DirectoryId: S.String}) {}
export class DisableCAEnrollmentPolicyResult extends S.Class<DisableCAEnrollmentPolicyResult>("DisableCAEnrollmentPolicyResult")({}) {}
export class DisableClientAuthenticationRequest extends S.Class<DisableClientAuthenticationRequest>("DisableClientAuthenticationRequest")({DirectoryId: S.String, Type: S.String}) {}
export class DisableClientAuthenticationResult extends S.Class<DisableClientAuthenticationResult>("DisableClientAuthenticationResult")({}) {}
export class DisableDirectoryDataAccessRequest extends S.Class<DisableDirectoryDataAccessRequest>("DisableDirectoryDataAccessRequest")({DirectoryId: S.String}) {}
export class DisableDirectoryDataAccessResult extends S.Class<DisableDirectoryDataAccessResult>("DisableDirectoryDataAccessResult")({}) {}
export class DisableLDAPSRequest extends S.Class<DisableLDAPSRequest>("DisableLDAPSRequest")({DirectoryId: S.String, Type: S.String}) {}
export class DisableLDAPSResult extends S.Class<DisableLDAPSResult>("DisableLDAPSResult")({}) {}
export class DisableRadiusRequest extends S.Class<DisableRadiusRequest>("DisableRadiusRequest")({DirectoryId: S.String}) {}
export class DisableRadiusResult extends S.Class<DisableRadiusResult>("DisableRadiusResult")({}) {}
export class DisableSsoRequest extends S.Class<DisableSsoRequest>("DisableSsoRequest")({DirectoryId: S.String, UserName: S.optional(S.String), Password: S.optional(S.String)}) {}
export class DisableSsoResult extends S.Class<DisableSsoResult>("DisableSsoResult")({}) {}
export class EnableCAEnrollmentPolicyRequest extends S.Class<EnableCAEnrollmentPolicyRequest>("EnableCAEnrollmentPolicyRequest")({DirectoryId: S.String, PcaConnectorArn: S.String}) {}
export class EnableCAEnrollmentPolicyResult extends S.Class<EnableCAEnrollmentPolicyResult>("EnableCAEnrollmentPolicyResult")({}) {}
export class EnableClientAuthenticationRequest extends S.Class<EnableClientAuthenticationRequest>("EnableClientAuthenticationRequest")({DirectoryId: S.String, Type: S.String}) {}
export class EnableClientAuthenticationResult extends S.Class<EnableClientAuthenticationResult>("EnableClientAuthenticationResult")({}) {}
export class EnableDirectoryDataAccessRequest extends S.Class<EnableDirectoryDataAccessRequest>("EnableDirectoryDataAccessRequest")({DirectoryId: S.String}) {}
export class EnableDirectoryDataAccessResult extends S.Class<EnableDirectoryDataAccessResult>("EnableDirectoryDataAccessResult")({}) {}
export class EnableLDAPSRequest extends S.Class<EnableLDAPSRequest>("EnableLDAPSRequest")({DirectoryId: S.String, Type: S.String}) {}
export class EnableLDAPSResult extends S.Class<EnableLDAPSResult>("EnableLDAPSResult")({}) {}
export class EnableSsoRequest extends S.Class<EnableSsoRequest>("EnableSsoRequest")({DirectoryId: S.String, UserName: S.optional(S.String), Password: S.optional(S.String)}) {}
export class EnableSsoResult extends S.Class<EnableSsoResult>("EnableSsoResult")({}) {}
export class GetSnapshotLimitsRequest extends S.Class<GetSnapshotLimitsRequest>("GetSnapshotLimitsRequest")({DirectoryId: S.String}) {}
export class ListADAssessmentsRequest extends S.Class<ListADAssessmentsRequest>("ListADAssessmentsRequest")({DirectoryId: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListCertificatesRequest extends S.Class<ListCertificatesRequest>("ListCertificatesRequest")({DirectoryId: S.String, NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListIpRoutesRequest extends S.Class<ListIpRoutesRequest>("ListIpRoutesRequest")({DirectoryId: S.String, NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListLogSubscriptionsRequest extends S.Class<ListLogSubscriptionsRequest>("ListLogSubscriptionsRequest")({DirectoryId: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListSchemaExtensionsRequest extends S.Class<ListSchemaExtensionsRequest>("ListSchemaExtensionsRequest")({DirectoryId: S.String, NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceId: S.String, NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class RegisterEventTopicRequest extends S.Class<RegisterEventTopicRequest>("RegisterEventTopicRequest")({DirectoryId: S.String, TopicName: S.String}) {}
export class RegisterEventTopicResult extends S.Class<RegisterEventTopicResult>("RegisterEventTopicResult")({}) {}
export class RejectSharedDirectoryRequest extends S.Class<RejectSharedDirectoryRequest>("RejectSharedDirectoryRequest")({SharedDirectoryId: S.String}) {}
export class RemoveIpRoutesRequest extends S.Class<RemoveIpRoutesRequest>("RemoveIpRoutesRequest")({DirectoryId: S.String, CidrIps: S.optional(CidrIps), CidrIpv6s: S.optional(CidrIpv6s)}) {}
export class RemoveIpRoutesResult extends S.Class<RemoveIpRoutesResult>("RemoveIpRoutesResult")({}) {}
export class RemoveRegionRequest extends S.Class<RemoveRegionRequest>("RemoveRegionRequest")({DirectoryId: S.String}) {}
export class RemoveRegionResult extends S.Class<RemoveRegionResult>("RemoveRegionResult")({}) {}
export class RemoveTagsFromResourceRequest extends S.Class<RemoveTagsFromResourceRequest>("RemoveTagsFromResourceRequest")({ResourceId: S.String, TagKeys: TagKeys}) {}
export class RemoveTagsFromResourceResult extends S.Class<RemoveTagsFromResourceResult>("RemoveTagsFromResourceResult")({}) {}
export class ResetUserPasswordRequest extends S.Class<ResetUserPasswordRequest>("ResetUserPasswordRequest")({DirectoryId: S.String, UserName: S.String, NewPassword: S.String}) {}
export class ResetUserPasswordResult extends S.Class<ResetUserPasswordResult>("ResetUserPasswordResult")({}) {}
export class RestoreFromSnapshotRequest extends S.Class<RestoreFromSnapshotRequest>("RestoreFromSnapshotRequest")({SnapshotId: S.String}) {}
export class RestoreFromSnapshotResult extends S.Class<RestoreFromSnapshotResult>("RestoreFromSnapshotResult")({}) {}
export class StartSchemaExtensionRequest extends S.Class<StartSchemaExtensionRequest>("StartSchemaExtensionRequest")({DirectoryId: S.String, CreateSnapshotBeforeSchemaExtension: S.Boolean, LdifContent: S.String, Description: S.String}) {}
export class UpdateConditionalForwarderRequest extends S.Class<UpdateConditionalForwarderRequest>("UpdateConditionalForwarderRequest")({DirectoryId: S.String, RemoteDomainName: S.String, DnsIpAddrs: S.optional(DnsIpAddrs), DnsIpv6Addrs: S.optional(DnsIpv6Addrs)}) {}
export class UpdateConditionalForwarderResult extends S.Class<UpdateConditionalForwarderResult>("UpdateConditionalForwarderResult")({}) {}
export class UpdateNumberOfDomainControllersRequest extends S.Class<UpdateNumberOfDomainControllersRequest>("UpdateNumberOfDomainControllersRequest")({DirectoryId: S.String, DesiredNumber: S.Number}) {}
export class UpdateNumberOfDomainControllersResult extends S.Class<UpdateNumberOfDomainControllersResult>("UpdateNumberOfDomainControllersResult")({}) {}
export const Servers = S.Array(S.String);
export class RadiusSettings extends S.Class<RadiusSettings>("RadiusSettings")({RadiusServers: S.optional(Servers), RadiusServersIpv6: S.optional(Servers), RadiusPort: S.optional(S.Number), RadiusTimeout: S.optional(S.Number), RadiusRetries: S.optional(S.Number), SharedSecret: S.optional(S.String), AuthenticationProtocol: S.optional(S.String), DisplayLabel: S.optional(S.String), UseSameUsername: S.optional(S.Boolean)}) {}
export class UpdateRadiusRequest extends S.Class<UpdateRadiusRequest>("UpdateRadiusRequest")({DirectoryId: S.String, RadiusSettings: RadiusSettings}) {}
export class UpdateRadiusResult extends S.Class<UpdateRadiusResult>("UpdateRadiusResult")({}) {}
export class UpdateTrustRequest extends S.Class<UpdateTrustRequest>("UpdateTrustRequest")({TrustId: S.String, SelectiveAuth: S.optional(S.String)}) {}
export class VerifyTrustRequest extends S.Class<VerifyTrustRequest>("VerifyTrustRequest")({TrustId: S.String}) {}
export const CustomerDnsIps = S.Array(S.String);
export const AssessmentInstanceIds = S.Array(S.String);
export const SecurityGroupIds = S.Array(S.String);
export class IpRoute extends S.Class<IpRoute>("IpRoute")({CidrIp: S.optional(S.String), CidrIpv6: S.optional(S.String), Description: S.optional(S.String)}) {}
export const IpRoutes = S.Array(IpRoute);
export class DirectoryConnectSettings extends S.Class<DirectoryConnectSettings>("DirectoryConnectSettings")({VpcId: S.String, SubnetIds: SubnetIds, CustomerDnsIps: S.optional(DnsIpAddrs), CustomerDnsIpsV6: S.optional(DnsIpv6Addrs), CustomerUserName: S.String}) {}
export class Attribute extends S.Class<Attribute>("Attribute")({Name: S.optional(S.String), Value: S.optional(S.String)}) {}
export const Attributes = S.Array(Attribute);
export class SharedDirectory extends S.Class<SharedDirectory>("SharedDirectory")({OwnerAccountId: S.optional(S.String), OwnerDirectoryId: S.optional(S.String), ShareMethod: S.optional(S.String), SharedAccountId: S.optional(S.String), SharedDirectoryId: S.optional(S.String), ShareStatus: S.optional(S.String), ShareNotes: S.optional(S.String), CreatedDateTime: S.optional(S.Date), LastUpdatedDateTime: S.optional(S.Date)}) {}
export const SharedDirectories = S.Array(SharedDirectory);
export class DirectoryLimits extends S.Class<DirectoryLimits>("DirectoryLimits")({CloudOnlyDirectoriesLimit: S.optional(S.Number), CloudOnlyDirectoriesCurrentCount: S.optional(S.Number), CloudOnlyDirectoriesLimitReached: S.optional(S.Boolean), CloudOnlyMicrosoftADLimit: S.optional(S.Number), CloudOnlyMicrosoftADCurrentCount: S.optional(S.Number), CloudOnlyMicrosoftADLimitReached: S.optional(S.Boolean), ConnectedDirectoriesLimit: S.optional(S.Number), ConnectedDirectoriesCurrentCount: S.optional(S.Number), ConnectedDirectoriesLimitReached: S.optional(S.Boolean)}) {}
export class ClientCertAuthSettings extends S.Class<ClientCertAuthSettings>("ClientCertAuthSettings")({OCSPUrl: S.optional(S.String)}) {}
export class ShareTarget extends S.Class<ShareTarget>("ShareTarget")({Id: S.String, Type: S.String}) {}
export class AssessmentConfiguration extends S.Class<AssessmentConfiguration>("AssessmentConfiguration")({CustomerDnsIps: CustomerDnsIps, DnsName: S.String, VpcSettings: DirectoryVpcSettings, InstanceIds: AssessmentInstanceIds, SecurityGroupIds: S.optional(SecurityGroupIds)}) {}
export class UnshareTarget extends S.Class<UnshareTarget>("UnshareTarget")({Id: S.String, Type: S.String}) {}
export class OSUpdateSettings extends S.Class<OSUpdateSettings>("OSUpdateSettings")({OSVersion: S.optional(S.String)}) {}
export class DirectorySizeUpdateSettings extends S.Class<DirectorySizeUpdateSettings>("DirectorySizeUpdateSettings")({DirectorySize: S.optional(S.String)}) {}
export class NetworkUpdateSettings extends S.Class<NetworkUpdateSettings>("NetworkUpdateSettings")({NetworkType: S.optional(S.String), CustomerDnsIpsV6: S.optional(DnsIpv6Addrs)}) {}
export class HybridAdministratorAccountUpdate extends S.Class<HybridAdministratorAccountUpdate>("HybridAdministratorAccountUpdate")({SecretArn: S.String}) {}
export class HybridCustomerInstancesSettings extends S.Class<HybridCustomerInstancesSettings>("HybridCustomerInstancesSettings")({CustomerDnsIps: CustomerDnsIps, InstanceIds: AssessmentInstanceIds}) {}
export class Setting extends S.Class<Setting>("Setting")({Name: S.String, Value: S.String}) {}
export const Settings = S.Array(Setting);
export class AddIpRoutesRequest extends S.Class<AddIpRoutesRequest>("AddIpRoutesRequest")({DirectoryId: S.String, IpRoutes: IpRoutes, UpdateSecurityGroupForDirectoryControllers: S.optional(S.Boolean)}) {}
export class AddIpRoutesResult extends S.Class<AddIpRoutesResult>("AddIpRoutesResult")({}) {}
export class AddRegionRequest extends S.Class<AddRegionRequest>("AddRegionRequest")({DirectoryId: S.String, RegionName: S.String, VPCSettings: DirectoryVpcSettings}) {}
export class AddRegionResult extends S.Class<AddRegionResult>("AddRegionResult")({}) {}
export class AddTagsToResourceRequest extends S.Class<AddTagsToResourceRequest>("AddTagsToResourceRequest")({ResourceId: S.String, Tags: Tags}) {}
export class AddTagsToResourceResult extends S.Class<AddTagsToResourceResult>("AddTagsToResourceResult")({}) {}
export class ConnectDirectoryRequest extends S.Class<ConnectDirectoryRequest>("ConnectDirectoryRequest")({Name: S.String, ShortName: S.optional(S.String), Password: S.String, Description: S.optional(S.String), Size: S.String, ConnectSettings: DirectoryConnectSettings, Tags: S.optional(Tags), NetworkType: S.optional(S.String)}) {}
export class CreateAliasResult extends S.Class<CreateAliasResult>("CreateAliasResult")({DirectoryId: S.optional(S.String), Alias: S.optional(S.String)}) {}
export class CreateComputerRequest extends S.Class<CreateComputerRequest>("CreateComputerRequest")({DirectoryId: S.String, ComputerName: S.String, Password: S.String, OrganizationalUnitDistinguishedName: S.optional(S.String), ComputerAttributes: S.optional(Attributes)}) {}
export class CreateDirectoryResult extends S.Class<CreateDirectoryResult>("CreateDirectoryResult")({DirectoryId: S.optional(S.String)}) {}
export class CreateHybridADResult extends S.Class<CreateHybridADResult>("CreateHybridADResult")({DirectoryId: S.optional(S.String)}) {}
export class CreateMicrosoftADResult extends S.Class<CreateMicrosoftADResult>("CreateMicrosoftADResult")({DirectoryId: S.optional(S.String)}) {}
export class CreateSnapshotResult extends S.Class<CreateSnapshotResult>("CreateSnapshotResult")({SnapshotId: S.optional(S.String)}) {}
export class CreateTrustResult extends S.Class<CreateTrustResult>("CreateTrustResult")({TrustId: S.optional(S.String)}) {}
export class DeleteADAssessmentResult extends S.Class<DeleteADAssessmentResult>("DeleteADAssessmentResult")({AssessmentId: S.optional(S.String)}) {}
export class DeleteDirectoryResult extends S.Class<DeleteDirectoryResult>("DeleteDirectoryResult")({DirectoryId: S.optional(S.String)}) {}
export class DeleteSnapshotResult extends S.Class<DeleteSnapshotResult>("DeleteSnapshotResult")({SnapshotId: S.optional(S.String)}) {}
export class DeleteTrustResult extends S.Class<DeleteTrustResult>("DeleteTrustResult")({TrustId: S.optional(S.String)}) {}
export class DescribeCAEnrollmentPolicyResult extends S.Class<DescribeCAEnrollmentPolicyResult>("DescribeCAEnrollmentPolicyResult")({DirectoryId: S.optional(S.String), PcaConnectorArn: S.optional(S.String), CaEnrollmentPolicyStatus: S.optional(S.String), LastUpdatedDateTime: S.optional(S.Date), CaEnrollmentPolicyStatusReason: S.optional(S.String)}) {}
export class DescribeDirectoryDataAccessResult extends S.Class<DescribeDirectoryDataAccessResult>("DescribeDirectoryDataAccessResult")({DataAccessStatus: S.optional(S.String)}) {}
export class DescribeSharedDirectoriesResult extends S.Class<DescribeSharedDirectoriesResult>("DescribeSharedDirectoriesResult")({SharedDirectories: S.optional(SharedDirectories), NextToken: S.optional(S.String)}) {}
export class EnableRadiusRequest extends S.Class<EnableRadiusRequest>("EnableRadiusRequest")({DirectoryId: S.String, RadiusSettings: RadiusSettings}) {}
export class EnableRadiusResult extends S.Class<EnableRadiusResult>("EnableRadiusResult")({}) {}
export class GetDirectoryLimitsResult extends S.Class<GetDirectoryLimitsResult>("GetDirectoryLimitsResult")({DirectoryLimits: S.optional(DirectoryLimits)}) {}
export class ListTagsForResourceResult extends S.Class<ListTagsForResourceResult>("ListTagsForResourceResult")({Tags: S.optional(Tags), NextToken: S.optional(S.String)}) {}
export class RegisterCertificateRequest extends S.Class<RegisterCertificateRequest>("RegisterCertificateRequest")({DirectoryId: S.String, CertificateData: S.String, Type: S.optional(S.String), ClientCertAuthSettings: S.optional(ClientCertAuthSettings)}) {}
export class RejectSharedDirectoryResult extends S.Class<RejectSharedDirectoryResult>("RejectSharedDirectoryResult")({SharedDirectoryId: S.optional(S.String)}) {}
export class ShareDirectoryRequest extends S.Class<ShareDirectoryRequest>("ShareDirectoryRequest")({DirectoryId: S.String, ShareNotes: S.optional(S.String), ShareTarget: ShareTarget, ShareMethod: S.String}) {}
export class StartADAssessmentRequest extends S.Class<StartADAssessmentRequest>("StartADAssessmentRequest")({AssessmentConfiguration: S.optional(AssessmentConfiguration), DirectoryId: S.optional(S.String)}) {}
export class StartSchemaExtensionResult extends S.Class<StartSchemaExtensionResult>("StartSchemaExtensionResult")({SchemaExtensionId: S.optional(S.String)}) {}
export class UnshareDirectoryRequest extends S.Class<UnshareDirectoryRequest>("UnshareDirectoryRequest")({DirectoryId: S.String, UnshareTarget: UnshareTarget}) {}
export class UpdateDirectorySetupRequest extends S.Class<UpdateDirectorySetupRequest>("UpdateDirectorySetupRequest")({DirectoryId: S.String, UpdateType: S.String, OSUpdateSettings: S.optional(OSUpdateSettings), DirectorySizeUpdateSettings: S.optional(DirectorySizeUpdateSettings), NetworkUpdateSettings: S.optional(NetworkUpdateSettings), CreateSnapshotBeforeUpdate: S.optional(S.Boolean)}) {}
export class UpdateDirectorySetupResult extends S.Class<UpdateDirectorySetupResult>("UpdateDirectorySetupResult")({}) {}
export class UpdateHybridADRequest extends S.Class<UpdateHybridADRequest>("UpdateHybridADRequest")({DirectoryId: S.String, HybridAdministratorAccountUpdate: S.optional(HybridAdministratorAccountUpdate), SelfManagedInstancesSettings: S.optional(HybridCustomerInstancesSettings)}) {}
export class UpdateSettingsRequest extends S.Class<UpdateSettingsRequest>("UpdateSettingsRequest")({DirectoryId: S.String, Settings: Settings}) {}
export class UpdateTrustResult extends S.Class<UpdateTrustResult>("UpdateTrustResult")({RequestId: S.optional(S.String), TrustId: S.optional(S.String)}) {}
export class VerifyTrustResult extends S.Class<VerifyTrustResult>("VerifyTrustResult")({TrustId: S.optional(S.String)}) {}
export class Assessment extends S.Class<Assessment>("Assessment")({AssessmentId: S.optional(S.String), DirectoryId: S.optional(S.String), DnsName: S.optional(S.String), StartTime: S.optional(S.Date), LastUpdateDateTime: S.optional(S.Date), Status: S.optional(S.String), StatusCode: S.optional(S.String), StatusReason: S.optional(S.String), CustomerDnsIps: S.optional(CustomerDnsIps), VpcId: S.optional(S.String), SubnetIds: S.optional(SubnetIds), SecurityGroupIds: S.optional(SecurityGroupIds), SelfManagedInstanceIds: S.optional(AssessmentInstanceIds), ReportType: S.optional(S.String), Version: S.optional(S.String)}) {}
export class Certificate extends S.Class<Certificate>("Certificate")({CertificateId: S.optional(S.String), State: S.optional(S.String), StateReason: S.optional(S.String), CommonName: S.optional(S.String), RegisteredDateTime: S.optional(S.Date), ExpiryDateTime: S.optional(S.Date), Type: S.optional(S.String), ClientCertAuthSettings: S.optional(ClientCertAuthSettings)}) {}
export class ClientAuthenticationSettingInfo extends S.Class<ClientAuthenticationSettingInfo>("ClientAuthenticationSettingInfo")({Type: S.optional(S.String), Status: S.optional(S.String), LastUpdatedDateTime: S.optional(S.Date)}) {}
export const ClientAuthenticationSettingsInfo = S.Array(ClientAuthenticationSettingInfo);
export class ConditionalForwarder extends S.Class<ConditionalForwarder>("ConditionalForwarder")({RemoteDomainName: S.optional(S.String), DnsIpAddrs: S.optional(DnsIpAddrs), DnsIpv6Addrs: S.optional(DnsIpv6Addrs), ReplicationScope: S.optional(S.String)}) {}
export const ConditionalForwarders = S.Array(ConditionalForwarder);
export class DomainController extends S.Class<DomainController>("DomainController")({DirectoryId: S.optional(S.String), DomainControllerId: S.optional(S.String), DnsIpAddr: S.optional(S.String), DnsIpv6Addr: S.optional(S.String), VpcId: S.optional(S.String), SubnetId: S.optional(S.String), AvailabilityZone: S.optional(S.String), Status: S.optional(S.String), StatusReason: S.optional(S.String), LaunchTime: S.optional(S.Date), StatusLastUpdatedDateTime: S.optional(S.Date)}) {}
export const DomainControllers = S.Array(DomainController);
export class EventTopic extends S.Class<EventTopic>("EventTopic")({DirectoryId: S.optional(S.String), TopicName: S.optional(S.String), TopicArn: S.optional(S.String), CreatedDateTime: S.optional(S.Date), Status: S.optional(S.String)}) {}
export const EventTopics = S.Array(EventTopic);
export class LDAPSSettingInfo extends S.Class<LDAPSSettingInfo>("LDAPSSettingInfo")({LDAPSStatus: S.optional(S.String), LDAPSStatusReason: S.optional(S.String), LastUpdatedDateTime: S.optional(S.Date)}) {}
export const LDAPSSettingsInfo = S.Array(LDAPSSettingInfo);
export class RegionDescription extends S.Class<RegionDescription>("RegionDescription")({DirectoryId: S.optional(S.String), RegionName: S.optional(S.String), RegionType: S.optional(S.String), Status: S.optional(S.String), VpcSettings: S.optional(DirectoryVpcSettings), DesiredNumberOfDomainControllers: S.optional(S.Number), LaunchTime: S.optional(S.Date), StatusLastUpdatedDateTime: S.optional(S.Date), LastUpdatedDateTime: S.optional(S.Date)}) {}
export const RegionsDescription = S.Array(RegionDescription);
export class Snapshot extends S.Class<Snapshot>("Snapshot")({DirectoryId: S.optional(S.String), SnapshotId: S.optional(S.String), Type: S.optional(S.String), Name: S.optional(S.String), Status: S.optional(S.String), StartTime: S.optional(S.Date)}) {}
export const Snapshots = S.Array(Snapshot);
export class Trust extends S.Class<Trust>("Trust")({DirectoryId: S.optional(S.String), TrustId: S.optional(S.String), RemoteDomainName: S.optional(S.String), TrustType: S.optional(S.String), TrustDirection: S.optional(S.String), TrustState: S.optional(S.String), CreatedDateTime: S.optional(S.Date), LastUpdatedDateTime: S.optional(S.Date), StateLastUpdatedDateTime: S.optional(S.Date), TrustStateReason: S.optional(S.String), SelectiveAuth: S.optional(S.String)}) {}
export const Trusts = S.Array(Trust);
export class SnapshotLimits extends S.Class<SnapshotLimits>("SnapshotLimits")({ManualSnapshotsLimit: S.optional(S.Number), ManualSnapshotsCurrentCount: S.optional(S.Number), ManualSnapshotsLimitReached: S.optional(S.Boolean)}) {}
export class AssessmentSummary extends S.Class<AssessmentSummary>("AssessmentSummary")({AssessmentId: S.optional(S.String), DirectoryId: S.optional(S.String), DnsName: S.optional(S.String), StartTime: S.optional(S.Date), LastUpdateDateTime: S.optional(S.Date), Status: S.optional(S.String), CustomerDnsIps: S.optional(CustomerDnsIps), ReportType: S.optional(S.String)}) {}
export const Assessments = S.Array(AssessmentSummary);
export class CertificateInfo extends S.Class<CertificateInfo>("CertificateInfo")({CertificateId: S.optional(S.String), CommonName: S.optional(S.String), State: S.optional(S.String), ExpiryDateTime: S.optional(S.Date), Type: S.optional(S.String)}) {}
export const CertificatesInfo = S.Array(CertificateInfo);
export class IpRouteInfo extends S.Class<IpRouteInfo>("IpRouteInfo")({DirectoryId: S.optional(S.String), CidrIp: S.optional(S.String), CidrIpv6: S.optional(S.String), IpRouteStatusMsg: S.optional(S.String), AddedDateTime: S.optional(S.Date), IpRouteStatusReason: S.optional(S.String), Description: S.optional(S.String)}) {}
export const IpRoutesInfo = S.Array(IpRouteInfo);
export class LogSubscription extends S.Class<LogSubscription>("LogSubscription")({DirectoryId: S.optional(S.String), LogGroupName: S.optional(S.String), SubscriptionCreatedDateTime: S.optional(S.Date)}) {}
export const LogSubscriptions = S.Array(LogSubscription);
export class SchemaExtensionInfo extends S.Class<SchemaExtensionInfo>("SchemaExtensionInfo")({DirectoryId: S.optional(S.String), SchemaExtensionId: S.optional(S.String), Description: S.optional(S.String), SchemaExtensionStatus: S.optional(S.String), SchemaExtensionStatusReason: S.optional(S.String), StartDateTime: S.optional(S.Date), EndDateTime: S.optional(S.Date)}) {}
export const SchemaExtensionsInfo = S.Array(SchemaExtensionInfo);
export const AvailabilityZones = S.Array(S.String);
export const IpAddrs = S.Array(S.String);
export const IpV6Addrs = S.Array(S.String);
export const AdditionalRegions = S.Array(S.String);
export class AcceptSharedDirectoryResult extends S.Class<AcceptSharedDirectoryResult>("AcceptSharedDirectoryResult")({SharedDirectory: S.optional(SharedDirectory)}) {}
export class ConnectDirectoryResult extends S.Class<ConnectDirectoryResult>("ConnectDirectoryResult")({DirectoryId: S.optional(S.String)}) {}
export class DescribeCertificateResult extends S.Class<DescribeCertificateResult>("DescribeCertificateResult")({Certificate: S.optional(Certificate)}) {}
export class DescribeClientAuthenticationSettingsResult extends S.Class<DescribeClientAuthenticationSettingsResult>("DescribeClientAuthenticationSettingsResult")({ClientAuthenticationSettingsInfo: S.optional(ClientAuthenticationSettingsInfo), NextToken: S.optional(S.String)}) {}
export class DescribeConditionalForwardersResult extends S.Class<DescribeConditionalForwardersResult>("DescribeConditionalForwardersResult")({ConditionalForwarders: S.optional(ConditionalForwarders)}) {}
export class DescribeDomainControllersResult extends S.Class<DescribeDomainControllersResult>("DescribeDomainControllersResult")({DomainControllers: S.optional(DomainControllers), NextToken: S.optional(S.String)}) {}
export class DescribeEventTopicsResult extends S.Class<DescribeEventTopicsResult>("DescribeEventTopicsResult")({EventTopics: S.optional(EventTopics)}) {}
export class DescribeLDAPSSettingsResult extends S.Class<DescribeLDAPSSettingsResult>("DescribeLDAPSSettingsResult")({LDAPSSettingsInfo: S.optional(LDAPSSettingsInfo), NextToken: S.optional(S.String)}) {}
export class DescribeRegionsResult extends S.Class<DescribeRegionsResult>("DescribeRegionsResult")({RegionsDescription: S.optional(RegionsDescription), NextToken: S.optional(S.String)}) {}
export class DescribeSnapshotsResult extends S.Class<DescribeSnapshotsResult>("DescribeSnapshotsResult")({Snapshots: S.optional(Snapshots), NextToken: S.optional(S.String)}) {}
export class DescribeTrustsResult extends S.Class<DescribeTrustsResult>("DescribeTrustsResult")({Trusts: S.optional(Trusts), NextToken: S.optional(S.String)}) {}
export class GetSnapshotLimitsResult extends S.Class<GetSnapshotLimitsResult>("GetSnapshotLimitsResult")({SnapshotLimits: S.optional(SnapshotLimits)}) {}
export class ListADAssessmentsResult extends S.Class<ListADAssessmentsResult>("ListADAssessmentsResult")({Assessments: S.optional(Assessments), NextToken: S.optional(S.String)}) {}
export class ListCertificatesResult extends S.Class<ListCertificatesResult>("ListCertificatesResult")({NextToken: S.optional(S.String), CertificatesInfo: S.optional(CertificatesInfo)}) {}
export class ListIpRoutesResult extends S.Class<ListIpRoutesResult>("ListIpRoutesResult")({IpRoutesInfo: S.optional(IpRoutesInfo), NextToken: S.optional(S.String)}) {}
export class ListLogSubscriptionsResult extends S.Class<ListLogSubscriptionsResult>("ListLogSubscriptionsResult")({LogSubscriptions: S.optional(LogSubscriptions), NextToken: S.optional(S.String)}) {}
export class ListSchemaExtensionsResult extends S.Class<ListSchemaExtensionsResult>("ListSchemaExtensionsResult")({SchemaExtensionsInfo: S.optional(SchemaExtensionsInfo), NextToken: S.optional(S.String)}) {}
export class RegisterCertificateResult extends S.Class<RegisterCertificateResult>("RegisterCertificateResult")({CertificateId: S.optional(S.String)}) {}
export class ShareDirectoryResult extends S.Class<ShareDirectoryResult>("ShareDirectoryResult")({SharedDirectoryId: S.optional(S.String)}) {}
export class StartADAssessmentResult extends S.Class<StartADAssessmentResult>("StartADAssessmentResult")({AssessmentId: S.optional(S.String)}) {}
export class UnshareDirectoryResult extends S.Class<UnshareDirectoryResult>("UnshareDirectoryResult")({SharedDirectoryId: S.optional(S.String)}) {}
export class UpdateHybridADResult extends S.Class<UpdateHybridADResult>("UpdateHybridADResult")({DirectoryId: S.optional(S.String), AssessmentId: S.optional(S.String)}) {}
export class UpdateSettingsResult extends S.Class<UpdateSettingsResult>("UpdateSettingsResult")({DirectoryId: S.optional(S.String)}) {}
export class AssessmentValidation extends S.Class<AssessmentValidation>("AssessmentValidation")({Category: S.optional(S.String), Name: S.optional(S.String), Status: S.optional(S.String), StatusCode: S.optional(S.String), StatusReason: S.optional(S.String), StartTime: S.optional(S.Date), LastUpdateDateTime: S.optional(S.Date)}) {}
export const AssessmentValidations = S.Array(AssessmentValidation);
export class DirectoryVpcSettingsDescription extends S.Class<DirectoryVpcSettingsDescription>("DirectoryVpcSettingsDescription")({VpcId: S.optional(S.String), SubnetIds: S.optional(SubnetIds), SecurityGroupId: S.optional(S.String), AvailabilityZones: S.optional(AvailabilityZones)}) {}
export class DirectoryConnectSettingsDescription extends S.Class<DirectoryConnectSettingsDescription>("DirectoryConnectSettingsDescription")({VpcId: S.optional(S.String), SubnetIds: S.optional(SubnetIds), CustomerUserName: S.optional(S.String), SecurityGroupId: S.optional(S.String), AvailabilityZones: S.optional(AvailabilityZones), ConnectIps: S.optional(IpAddrs), ConnectIpsV6: S.optional(IpV6Addrs)}) {}
export class OwnerDirectoryDescription extends S.Class<OwnerDirectoryDescription>("OwnerDirectoryDescription")({DirectoryId: S.optional(S.String), AccountId: S.optional(S.String), DnsIpAddrs: S.optional(DnsIpAddrs), DnsIpv6Addrs: S.optional(DnsIpv6Addrs), VpcSettings: S.optional(DirectoryVpcSettingsDescription), RadiusSettings: S.optional(RadiusSettings), RadiusStatus: S.optional(S.String), NetworkType: S.optional(S.String)}) {}
export class RegionsInfo extends S.Class<RegionsInfo>("RegionsInfo")({PrimaryRegion: S.optional(S.String), AdditionalRegions: S.optional(AdditionalRegions)}) {}
export class HybridSettingsDescription extends S.Class<HybridSettingsDescription>("HybridSettingsDescription")({SelfManagedDnsIpAddrs: S.optional(IpAddrs), SelfManagedInstanceIds: S.optional(AssessmentInstanceIds)}) {}
export const DirectoryConfigurationSettingRequestDetailedStatus = S.Record({key: S.String, value: S.String});
export class UpdateValue extends S.Class<UpdateValue>("UpdateValue")({OSUpdateSettings: S.optional(OSUpdateSettings)}) {}
export class Computer extends S.Class<Computer>("Computer")({ComputerId: S.optional(S.String), ComputerName: S.optional(S.String), ComputerAttributes: S.optional(Attributes)}) {}
export class AssessmentReport extends S.Class<AssessmentReport>("AssessmentReport")({DomainControllerIp: S.optional(S.String), Validations: S.optional(AssessmentValidations)}) {}
export const AssessmentReports = S.Array(AssessmentReport);
export class DirectoryDescription extends S.Class<DirectoryDescription>("DirectoryDescription")({DirectoryId: S.optional(S.String), Name: S.optional(S.String), ShortName: S.optional(S.String), Size: S.optional(S.String), Edition: S.optional(S.String), Alias: S.optional(S.String), AccessUrl: S.optional(S.String), Description: S.optional(S.String), DnsIpAddrs: S.optional(DnsIpAddrs), DnsIpv6Addrs: S.optional(DnsIpv6Addrs), Stage: S.optional(S.String), ShareStatus: S.optional(S.String), ShareMethod: S.optional(S.String), ShareNotes: S.optional(S.String), LaunchTime: S.optional(S.Date), StageLastUpdatedDateTime: S.optional(S.Date), Type: S.optional(S.String), VpcSettings: S.optional(DirectoryVpcSettingsDescription), ConnectSettings: S.optional(DirectoryConnectSettingsDescription), RadiusSettings: S.optional(RadiusSettings), RadiusStatus: S.optional(S.String), StageReason: S.optional(S.String), SsoEnabled: S.optional(S.Boolean), DesiredNumberOfDomainControllers: S.optional(S.Number), OwnerDirectoryDescription: S.optional(OwnerDirectoryDescription), RegionsInfo: S.optional(RegionsInfo), OsVersion: S.optional(S.String), HybridSettings: S.optional(HybridSettingsDescription), NetworkType: S.optional(S.String)}) {}
export const DirectoryDescriptions = S.Array(DirectoryDescription);
export class SettingEntry extends S.Class<SettingEntry>("SettingEntry")({Type: S.optional(S.String), Name: S.optional(S.String), AllowedValues: S.optional(S.String), AppliedValue: S.optional(S.String), RequestedValue: S.optional(S.String), RequestStatus: S.optional(S.String), RequestDetailedStatus: S.optional(DirectoryConfigurationSettingRequestDetailedStatus), RequestStatusMessage: S.optional(S.String), LastUpdatedDateTime: S.optional(S.Date), LastRequestedDateTime: S.optional(S.Date), DataType: S.optional(S.String)}) {}
export const SettingEntries = S.Array(SettingEntry);
export class UpdateInfoEntry extends S.Class<UpdateInfoEntry>("UpdateInfoEntry")({Region: S.optional(S.String), Status: S.optional(S.String), StatusReason: S.optional(S.String), InitiatedBy: S.optional(S.String), NewValue: S.optional(UpdateValue), PreviousValue: S.optional(UpdateValue), StartTime: S.optional(S.Date), LastUpdatedDateTime: S.optional(S.Date)}) {}
export const UpdateActivities = S.Array(UpdateInfoEntry);
export class HybridUpdateValue extends S.Class<HybridUpdateValue>("HybridUpdateValue")({InstanceIds: S.optional(AssessmentInstanceIds), DnsIps: S.optional(CustomerDnsIps)}) {}
export class CreateComputerResult extends S.Class<CreateComputerResult>("CreateComputerResult")({Computer: S.optional(Computer)}) {}
export class DescribeADAssessmentResult extends S.Class<DescribeADAssessmentResult>("DescribeADAssessmentResult")({Assessment: S.optional(Assessment), AssessmentReports: S.optional(AssessmentReports)}) {}
export class DescribeDirectoriesResult extends S.Class<DescribeDirectoriesResult>("DescribeDirectoriesResult")({DirectoryDescriptions: S.optional(DirectoryDescriptions), NextToken: S.optional(S.String)}) {}
export class DescribeSettingsResult extends S.Class<DescribeSettingsResult>("DescribeSettingsResult")({DirectoryId: S.optional(S.String), SettingEntries: S.optional(SettingEntries), NextToken: S.optional(S.String)}) {}
export class DescribeUpdateDirectoryResult extends S.Class<DescribeUpdateDirectoryResult>("DescribeUpdateDirectoryResult")({UpdateActivities: S.optional(UpdateActivities), NextToken: S.optional(S.String)}) {}
export class HybridUpdateInfoEntry extends S.Class<HybridUpdateInfoEntry>("HybridUpdateInfoEntry")({Status: S.optional(S.String), StatusReason: S.optional(S.String), InitiatedBy: S.optional(S.String), NewValue: S.optional(HybridUpdateValue), PreviousValue: S.optional(HybridUpdateValue), StartTime: S.optional(S.Date), LastUpdatedDateTime: S.optional(S.Date), AssessmentId: S.optional(S.String)}) {}
export const HybridUpdateInfoEntries = S.Array(HybridUpdateInfoEntry);
export class HybridUpdateActivities extends S.Class<HybridUpdateActivities>("HybridUpdateActivities")({SelfManagedInstances: S.optional(HybridUpdateInfoEntries), HybridAdministratorAccount: S.optional(HybridUpdateInfoEntries)}) {}
export class DescribeHybridADUpdateResult extends S.Class<DescribeHybridADUpdateResult>("DescribeHybridADUpdateResult")({UpdateActivities: S.optional(HybridUpdateActivities), NextToken: S.optional(S.String)}) {}

//# Errors
export class ClientException extends S.TaggedError<ClientException>()("ClientException", {}) {};
export class DirectoryUnavailableException extends S.TaggedError<DirectoryUnavailableException>()("DirectoryUnavailableException", {}) {};
export class EntityDoesNotExistException extends S.TaggedError<EntityDoesNotExistException>()("EntityDoesNotExistException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class DirectoryDoesNotExistException extends S.TaggedError<DirectoryDoesNotExistException>()("DirectoryDoesNotExistException", {}) {};
export class ServiceException extends S.TaggedError<ServiceException>()("ServiceException", {}) {};
export class DirectoryInDesiredStateException extends S.TaggedError<DirectoryInDesiredStateException>()("DirectoryInDesiredStateException", {}) {};
export class InvalidLDAPSStatusException extends S.TaggedError<InvalidLDAPSStatusException>()("InvalidLDAPSStatusException", {}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class AuthenticationFailedException extends S.TaggedError<AuthenticationFailedException>()("AuthenticationFailedException", {}) {};
export class UnsupportedOperationException extends S.TaggedError<UnsupportedOperationException>()("UnsupportedOperationException", {}) {};
export class EntityAlreadyExistsException extends S.TaggedError<EntityAlreadyExistsException>()("EntityAlreadyExistsException", {}) {};
export class InsufficientPermissionsException extends S.TaggedError<InsufficientPermissionsException>()("InsufficientPermissionsException", {}) {};
export class DirectoryLimitExceededException extends S.TaggedError<DirectoryLimitExceededException>()("DirectoryLimitExceededException", {}) {};
export class CertificateDoesNotExistException extends S.TaggedError<CertificateDoesNotExistException>()("CertificateDoesNotExistException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class InvalidClientAuthStatusException extends S.TaggedError<InvalidClientAuthStatusException>()("InvalidClientAuthStatusException", {}) {};
export class EnableAlreadyInProgressException extends S.TaggedError<EnableAlreadyInProgressException>()("EnableAlreadyInProgressException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class NoAvailableCertificateException extends S.TaggedError<NoAvailableCertificateException>()("NoAvailableCertificateException", {}) {};
export class InvalidNextTokenException extends S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {}) {};
export class InvalidPasswordException extends S.TaggedError<InvalidPasswordException>()("InvalidPasswordException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class SnapshotLimitExceededException extends S.TaggedError<SnapshotLimitExceededException>()("SnapshotLimitExceededException", {}) {};
export class DomainControllerLimitExceededException extends S.TaggedError<DomainControllerLimitExceededException>()("DomainControllerLimitExceededException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class DirectoryAlreadySharedException extends S.TaggedError<DirectoryAlreadySharedException>()("DirectoryAlreadySharedException", {}) {};
export class IpRouteLimitExceededException extends S.TaggedError<IpRouteLimitExceededException>()("IpRouteLimitExceededException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class DirectoryAlreadyInRegionException extends S.TaggedError<DirectoryAlreadyInRegionException>()("DirectoryAlreadyInRegionException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class TagLimitExceededException extends S.TaggedError<TagLimitExceededException>()("TagLimitExceededException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class ADAssessmentLimitExceededException extends S.TaggedError<ADAssessmentLimitExceededException>()("ADAssessmentLimitExceededException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class CertificateInUseException extends S.TaggedError<CertificateInUseException>()("CertificateInUseException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class DisableAlreadyInProgressException extends S.TaggedError<DisableAlreadyInProgressException>()("DisableAlreadyInProgressException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class UserDoesNotExistException extends S.TaggedError<UserDoesNotExistException>()("UserDoesNotExistException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class RegionLimitExceededException extends S.TaggedError<RegionLimitExceededException>()("RegionLimitExceededException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class CertificateAlreadyExistsException extends S.TaggedError<CertificateAlreadyExistsException>()("CertificateAlreadyExistsException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class InvalidTargetException extends S.TaggedError<InvalidTargetException>()("InvalidTargetException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class DirectoryNotSharedException extends S.TaggedError<DirectoryNotSharedException>()("DirectoryNotSharedException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class IncompatibleSettingsException extends S.TaggedError<IncompatibleSettingsException>()("IncompatibleSettingsException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class CertificateLimitExceededException extends S.TaggedError<CertificateLimitExceededException>()("CertificateLimitExceededException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class OrganizationsException extends S.TaggedError<OrganizationsException>()("OrganizationsException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class UnsupportedSettingsException extends S.TaggedError<UnsupportedSettingsException>()("UnsupportedSettingsException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class InvalidCertificateException extends S.TaggedError<InvalidCertificateException>()("InvalidCertificateException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};
export class ShareLimitExceededException extends S.TaggedError<ShareLimitExceededException>()("ShareLimitExceededException", {Message: S.optional(S.String), RequestId: S.optional(S.String)}) {};

//# Operations
/**
 * Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User
 * Service (RADIUS) server for an AD Connector or Microsoft AD directory.
 */export const disableRadius = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DisableRadius" }, DisableRadiusRequest, DisableRadiusResult, [ClientException, EntityDoesNotExistException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a directory with an Amazon SNS topic. This establishes the directory as a
 * publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when
 * the status of your directory changes. You get notified if your directory goes from an Active
 * status to an Impaired or Inoperable status. You also receive a notification when the directory
 * returns to an Active status.
 */export const registerEventTopic = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.RegisterEventTopic" }, RegisterEventTopicRequest, RegisterEventTopicResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes IP address blocks from a directory.
 */export const removeIpRoutes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.RemoveIpRoutes" }, RemoveIpRoutesRequest, RemoveIpRoutesResult, [ClientException, DirectoryUnavailableException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops all replication and removes the domain controllers from the specified Region. You
 * cannot remove the primary Region with this operation. Instead, use the
 * `DeleteDirectory` API.
 */export const removeRegion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.RemoveRegion" }, RemoveRegionRequest, RemoveRegionResult, [AccessDeniedException, ClientException, DirectoryDoesNotExistException, DirectoryUnavailableException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from a directory.
 */export const removeTagsFromResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.RemoveTagsFromResource" }, RemoveTagsFromResourceRequest, RemoveTagsFromResourceResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Restores a directory using an existing directory snapshot.
 * 
 * 
 * When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.
 * 
 * 
 * This action returns as soon as the restore operation is initiated. You can monitor the
 * progress of the restore operation by calling the DescribeDirectories operation with
 * the directory identifier. When the **DirectoryDescription.Stage** value changes to
 * `Active`, the restore operation is complete.
 */export const restoreFromSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.RestoreFromSnapshot" }, RestoreFromSnapshotRequest, RestoreFromSnapshotResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a conditional forwarder that has been set up for your Amazon Web Services
 * directory.
 */export const updateConditionalForwarder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.UpdateConditionalForwarder" }, UpdateConditionalForwarderRequest, UpdateConditionalForwarderResult, [ClientException, DirectoryUnavailableException, EntityDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the Remote Authentication Dial In User Service (RADIUS) server information for
 * an AD Connector or Microsoft AD directory.
 */export const updateRadius = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.UpdateRadius" }, UpdateRadiusRequest, UpdateRadiusResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema
 * extension has started replicating to all domain controllers, the task can no longer be
 * canceled. A schema extension can be canceled during any of the following states;
 * `Initializing`, `CreatingSnapshot`, and
 * `UpdatingSchema`.
 */export const cancelSchemaExtension = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.CancelSchemaExtension" }, CancelSchemaExtensionRequest, CancelSchemaExtensionResult, [ClientException, EntityDoesNotExistException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an alias for a directory and assigns the alias to the directory. The alias is used
 * to construct the access URL for the directory, such as
 * `http://.awsapps.com`.
 * 
 * 
 * 
 * 
 * After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.
 */export const createAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.CreateAlias" }, CreateAliasRequest, CreateAliasResult, [ClientException, EntityAlreadyExistsException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional
 * forwarders are required in order to set up a trust relationship with another domain. The
 * conditional forwarder points to the trusted domain.
 */export const createConditionalForwarder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.CreateConditionalForwarder" }, CreateConditionalForwarderRequest, CreateConditionalForwarderResult, [ClientException, DirectoryUnavailableException, EntityAlreadyExistsException, EntityDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a subscription to forward real-time Directory Service domain controller security
 * logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.
 */export const createLogSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.CreateLogSubscription" }, CreateLogSubscriptionRequest, CreateLogSubscriptionResult, [ClientException, EntityAlreadyExistsException, EntityDoesNotExistException, InsufficientPermissionsException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see Managed Microsoft AD in the *Directory Service Admin Guide*.
 * 
 * 
 * Before you call *CreateMicrosoftAD*, ensure that all of the required
 * permissions have been explicitly granted through a policy. For details about what permissions
 * are required to run the *CreateMicrosoftAD* operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.
 */export const createMicrosoftAD = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.CreateMicrosoftAD" }, CreateMicrosoftADRequest, CreateMicrosoftADResult, [ClientException, DirectoryLimitExceededException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Directory Service for Microsoft Active Directory allows you to configure trust relationships. For
 * example, you can establish a trust between your Managed Microsoft AD directory, and your existing
 * self-managed Microsoft Active Directory. This would allow you to provide users and groups
 * access to resources in either domain, with a single set of credentials.
 * 
 * 
 * This action initiates the creation of the Amazon Web Services side of a trust relationship between an
 * Managed Microsoft AD directory and an external domain. You can create either a forest trust or an
 * external trust.
 */export const createTrust = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.CreateTrust" }, CreateTrustRequest, CreateTrustResult, [ClientException, EntityAlreadyExistsException, EntityDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a directory assessment and all associated data. This operation permanently
 * removes the assessment results, validation reports, and configuration
 * information.
 * 
 * 
 * You cannot delete system-initiated assessments. You can delete customer-created
 * assessments even if they are in progress.
 */export const deleteADAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DeleteADAssessment" }, DeleteADAssessmentRequest, DeleteADAssessmentResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a conditional forwarder that has been set up for your Amazon Web Services
 * directory.
 */export const deleteConditionalForwarder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DeleteConditionalForwarder" }, DeleteConditionalForwarderRequest, DeleteConditionalForwarderResult, [ClientException, DirectoryUnavailableException, EntityDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an Directory Service directory.
 * 
 * 
 * Before you call `DeleteDirectory`, ensure that all of the required permissions
 * have been explicitly granted through a policy. For details about what permissions are required
 * to run the `DeleteDirectory` operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.
 */export const deleteDirectory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DeleteDirectory" }, DeleteDirectoryRequest, DeleteDirectoryResult, [ClientException, EntityDoesNotExistException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified log subscription.
 */export const deleteLogSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DeleteLogSubscription" }, DeleteLogSubscriptionRequest, DeleteLogSubscriptionResult, [ClientException, EntityDoesNotExistException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a directory snapshot.
 */export const deleteSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DeleteSnapshot" }, DeleteSnapshotRequest, DeleteSnapshotResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing trust relationship between your Managed Microsoft AD directory and an external
 * domain.
 */export const deleteTrust = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DeleteTrust" }, DeleteTrustRequest, DeleteTrustResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified directory as a publisher to the specified Amazon SNS topic.
 */export const deregisterEventTopic = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DeregisterEventTopic" }, DeregisterEventTopicRequest, DeregisterEventTopicResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves detailed information about the certificate authority (CA) enrollment policy for
 * the specified directory. This policy determines how client certificates are automatically enrolled and
 * managed through Amazon Web Services Private Certificate Authority.
 */export const describeCAEnrollmentPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeCAEnrollmentPolicy" }, DescribeCAEnrollmentPolicyRequest, DescribeCAEnrollmentPolicyResult, [ClientException, DirectoryDoesNotExistException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Obtains status of directory data access enablement through the Directory Service Data API for the
 * specified directory.
 */export const describeDirectoryDataAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeDirectoryDataAccess" }, DescribeDirectoryDataAccessRequest, DescribeDirectoryDataAccessResult, [AccessDeniedException, ClientException, DirectoryDoesNotExistException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables alternative client authentication methods for the specified directory.
 */export const disableClientAuthentication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DisableClientAuthentication" }, DisableClientAuthenticationRequest, DisableClientAuthenticationResult, [AccessDeniedException, ClientException, DirectoryDoesNotExistException, InvalidClientAuthStatusException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deactivates access to directory data via the Directory Service Data API for the specified directory. For
 * more information, see Directory Service Data API Reference.
 */export const disableDirectoryDataAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DisableDirectoryDataAccess" }, DisableDirectoryDataAccessRequest, DisableDirectoryDataAccessResult, [AccessDeniedException, ClientException, DirectoryDoesNotExistException, DirectoryInDesiredStateException, DirectoryUnavailableException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deactivates LDAP secure calls for the specified directory.
 */export const disableLDAPS = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DisableLDAPS" }, DisableLDAPSRequest, DisableLDAPSResult, [ClientException, DirectoryDoesNotExistException, DirectoryUnavailableException, InvalidLDAPSStatusException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables single-sign on for a directory.
 */export const disableSso = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DisableSso" }, DisableSsoRequest, DisableSsoResult, [AuthenticationFailedException, ClientException, EntityDoesNotExistException, InsufficientPermissionsException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables certificate authority (CA) enrollment policy for the specified directory. This allows
 * domain-joined clients to automatically request and receive certificates from the specified
 * Amazon Web Services Private Certificate Authority.
 * 
 * 
 * 
 * 
 * Before enabling CA enrollment, ensure that the PCA connector is properly configured and
 * accessible from the directory. The connector must be in an active state and have the
 * necessary permissions.
 */export const enableCAEnrollmentPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.EnableCAEnrollmentPolicy" }, EnableCAEnrollmentPolicyRequest, EnableCAEnrollmentPolicyResult, [AccessDeniedException, ClientException, DirectoryDoesNotExistException, DirectoryUnavailableException, EnableAlreadyInProgressException, EntityAlreadyExistsException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables alternative client authentication methods for the specified directory.
 */export const enableClientAuthentication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.EnableClientAuthentication" }, EnableClientAuthenticationRequest, EnableClientAuthenticationResult, [AccessDeniedException, ClientException, DirectoryDoesNotExistException, InvalidClientAuthStatusException, NoAvailableCertificateException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables access to directory data via the Directory Service Data API for the specified directory. For
 * more information, see Directory Service Data API Reference.
 */export const enableDirectoryDataAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.EnableDirectoryDataAccess" }, EnableDirectoryDataAccessRequest, EnableDirectoryDataAccessResult, [AccessDeniedException, ClientException, DirectoryDoesNotExistException, DirectoryInDesiredStateException, DirectoryUnavailableException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Activates the switch for the specific directory to always use LDAP secure calls.
 */export const enableLDAPS = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.EnableLDAPS" }, EnableLDAPSRequest, EnableLDAPSResult, [ClientException, DirectoryDoesNotExistException, DirectoryUnavailableException, InvalidLDAPSStatusException, InvalidParameterException, NoAvailableCertificateException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User
 * Service (RADIUS) server for an AD Connector or Microsoft AD directory.
 */export const enableRadius = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.EnableRadius" }, EnableRadiusRequest, EnableRadiusResult, [ClientException, EntityAlreadyExistsException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables single sign-on for a directory. Single sign-on allows users in your directory to
 * access certain Amazon Web Services services from a computer joined to the directory without having to enter
 * their credentials separately.
 */export const enableSso = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.EnableSso" }, EnableSsoRequest, EnableSsoResult, [AuthenticationFailedException, ClientException, EntityDoesNotExistException, InsufficientPermissionsException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Obtains directory limit information for the current Region.
 */export const getDirectoryLimits = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.GetDirectoryLimits" }, GetDirectoryLimitsRequest, GetDirectoryLimitsResult, [ClientException, EntityDoesNotExistException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all tags on a directory.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResult, [ClientException, EntityDoesNotExistException, InvalidNextTokenException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Applies a schema extension to a Microsoft AD directory.
 */export const startSchemaExtension = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.StartSchemaExtension" }, StartSchemaExtensionRequest, StartSchemaExtensionResult, [ClientException, DirectoryUnavailableException, EntityDoesNotExistException, InvalidParameterException, ServiceException, SnapshotLimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates directory configuration for the specified update type.
 */export const updateDirectorySetup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.UpdateDirectorySetup" }, UpdateDirectorySetupRequest, UpdateDirectorySetupResult, [AccessDeniedException, ClientException, DirectoryDoesNotExistException, DirectoryInDesiredStateException, DirectoryUnavailableException, InvalidParameterException, ServiceException, SnapshotLimitExceededException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or removes domain controllers to or from the directory. Based on the difference
 * between current value and new value (provided through this API call), domain controllers will
 * be added or removed. It may take up to 45 minutes for any new domain controllers to become
 * fully active once the requested number of domain controllers is updated. During this time, you
 * cannot make another update request.
 */export const updateNumberOfDomainControllers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.UpdateNumberOfDomainControllers" }, UpdateNumberOfDomainControllersRequest, UpdateNumberOfDomainControllersResult, [ClientException, DirectoryUnavailableException, DomainControllerLimitExceededException, EntityDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the trust that has been set up between your Managed Microsoft AD directory and an
 * self-managed Active Directory.
 */export const updateTrust = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.UpdateTrust" }, UpdateTrustRequest, UpdateTrustResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Directory Service for Microsoft Active Directory allows you to configure and verify trust
 * relationships.
 * 
 * 
 * This action verifies a trust relationship between your Managed Microsoft AD directory and an
 * external domain.
 */export const verifyTrust = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.VerifyTrust" }, VerifyTrustRequest, VerifyTrustResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Accepts a directory sharing request that was sent from the directory owner account.
 */export const acceptSharedDirectory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.AcceptSharedDirectory" }, AcceptSharedDirectoryRequest, AcceptSharedDirectoryResult, [ClientException, DirectoryAlreadySharedException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * If the DNS server for your self-managed domain uses a publicly addressable IP address,
 * you must add a CIDR address block to correctly route traffic to and from your Microsoft AD
 * on Amazon Web Services. *AddIpRoutes* adds this address block. You can
 * also use *AddIpRoutes* to facilitate routing traffic that uses public IP
 * ranges from your Microsoft AD on Amazon Web Services to a peer VPC.
 * 
 * 
 * Before you call *AddIpRoutes*, ensure that all of the required
 * permissions have been explicitly granted through a policy. For details about what
 * permissions are required to run the *AddIpRoutes* operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.
 */export const addIpRoutes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.AddIpRoutes" }, AddIpRoutesRequest, AddIpRoutesResult, [ClientException, DirectoryUnavailableException, EntityAlreadyExistsException, EntityDoesNotExistException, InvalidParameterException, IpRouteLimitExceededException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or overwrites one or more tags for the specified directory. Each directory can
 * have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be
 * unique to each resource.
 */export const addTagsToResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.AddTagsToResource" }, AddTagsToResourceRequest, AddTagsToResourceResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException, TagLimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an AD Connector to connect to a self-managed directory.
 * 
 * 
 * Before you call `ConnectDirectory`, ensure that all of the required permissions
 * have been explicitly granted through a policy. For details about what permissions are required
 * to run the `ConnectDirectory` operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.
 */export const connectDirectory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.ConnectDirectory" }, ConnectDirectoryRequest, ConnectDirectoryResult, [ClientException, DirectoryLimitExceededException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Simple AD directory. For more information, see Simple Active Directory in the *Directory Service Admin Guide*.
 * 
 * 
 * Before you call `CreateDirectory`, ensure that all of the required permissions
 * have been explicitly granted through a policy. For details about what permissions are required
 * to run the `CreateDirectory` operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.
 */export const createDirectory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.CreateDirectory" }, CreateDirectoryRequest, CreateDirectoryResult, [ClientException, DirectoryLimitExceededException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a hybrid directory that connects your self-managed Active Directory (AD)
 * infrastructure and Amazon Web Services.
 * 
 * 
 * You must have a successful directory assessment using StartADAssessment to validate your environment compatibility before you
 * use this operation.
 * 
 * 
 * Updates are applied asynchronously. Use DescribeDirectories to
 * monitor the progress of directory creation.
 */export const createHybridAD = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.CreateHybridAD" }, CreateHybridADRequest, CreateHybridADResult, [ADAssessmentLimitExceededException, ClientException, DirectoryLimitExceededException, EntityDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.
 * 
 * 
 * 
 * 
 * You cannot take snapshots of AD Connector directories.
 */export const createSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.CreateSnapshot" }, CreateSnapshotRequest, CreateSnapshotResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException, SnapshotLimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes from the system the certificate that was registered for secure LDAP or client
 * certificate authentication.
 */export const deregisterCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DeregisterCertificate" }, DeregisterCertificateRequest, DeregisterCertificateResult, [CertificateDoesNotExistException, CertificateInUseException, ClientException, DirectoryDoesNotExistException, DirectoryUnavailableException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Displays information about the certificate registered for secure LDAP or client
 * certificate authentication.
 */export const describeCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeCertificate" }, DescribeCertificateRequest, DescribeCertificateResult, [CertificateDoesNotExistException, ClientException, DirectoryDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the type of client authentication for the specified directory,
 * if the type is specified. If no type is specified, information about all client authentication
 * types that are supported for the specified directory is retrieved. Currently, only
 * `SmartCard` is supported.
 */export const describeClientAuthenticationSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeClientAuthenticationSettings" }, DescribeClientAuthenticationSettingsRequest, DescribeClientAuthenticationSettingsResult, [AccessDeniedException, ClientException, DirectoryDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Obtains information about the conditional forwarders for this account.
 * 
 * 
 * If no input parameters are provided for RemoteDomainNames, this request describes all
 * conditional forwarders for the specified directory ID.
 */export const describeConditionalForwarders = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeConditionalForwarders" }, DescribeConditionalForwardersRequest, DescribeConditionalForwardersResult, [ClientException, DirectoryUnavailableException, EntityDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides information about any domain controllers in your directory.
 */export const describeDomainControllers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeDomainControllers" }, DescribeDomainControllersRequest, DescribeDomainControllersResult, [ClientException, EntityDoesNotExistException, InvalidNextTokenException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Obtains information about which Amazon SNS topics receive status messages from the specified
 * directory.
 * 
 * 
 * If no input parameters are provided, such as DirectoryId or TopicName, this request
 * describes all of the associations in the account.
 */export const describeEventTopics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeEventTopics" }, DescribeEventTopicsRequest, DescribeEventTopicsResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the status of LDAP security for the specified directory.
 */export const describeLDAPSSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeLDAPSSettings" }, DescribeLDAPSSettingsRequest, DescribeLDAPSSettingsResult, [ClientException, DirectoryDoesNotExistException, InvalidNextTokenException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides information about the Regions that are configured for multi-Region
 * replication.
 */export const describeRegions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeRegions" }, DescribeRegionsRequest, DescribeRegionsResult, [AccessDeniedException, ClientException, DirectoryDoesNotExistException, InvalidNextTokenException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the shared directories in your account.
 */export const describeSharedDirectories = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeSharedDirectories" }, DescribeSharedDirectoriesRequest, DescribeSharedDirectoriesResult, [ClientException, EntityDoesNotExistException, InvalidNextTokenException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Obtains information about the directory snapshots that belong to this account.
 * 
 * 
 * This operation supports pagination with the use of the *NextToken* request and
 * response parameters. If more results are available, the *DescribeSnapshots.NextToken*
 * member contains a token that you pass in the next call to DescribeSnapshots to
 * retrieve the next set of items.
 * 
 * 
 * You can also specify a maximum number of return results with the *Limit*
 * parameter.
 */export const describeSnapshots = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeSnapshots" }, DescribeSnapshotsRequest, DescribeSnapshotsResult, [ClientException, EntityDoesNotExistException, InvalidNextTokenException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Obtains information about the trust relationships for this account.
 * 
 * 
 * If no input parameters are provided, such as DirectoryId or TrustIds, this request
 * describes all the trust relationships belonging to the account.
 */export const describeTrusts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeTrusts" }, DescribeTrustsRequest, DescribeTrustsResult, [ClientException, EntityDoesNotExistException, InvalidNextTokenException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables the certificate authority (CA) enrollment policy for the specified directory. This stops
 * automatic certificate enrollment and management for domain-joined clients, but does not affect
 * existing certificates.
 * 
 * 
 * 
 * 
 * Disabling the CA enrollment policy prevents new certificates from being automatically
 * enrolled, but existing certificates remain valid and functional until they expire.
 */export const disableCAEnrollmentPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DisableCAEnrollmentPolicy" }, DisableCAEnrollmentPolicyRequest, DisableCAEnrollmentPolicyResult, [AccessDeniedException, ClientException, DirectoryDoesNotExistException, DirectoryUnavailableException, DisableAlreadyInProgressException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Obtains the manual snapshot limits for a directory.
 */export const getSnapshotLimits = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.GetSnapshotLimits" }, GetSnapshotLimitsRequest, GetSnapshotLimitsResult, [ClientException, EntityDoesNotExistException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of directory assessments for the specified directory or all
 * assessments in your account. Use this operation to monitor assessment status and manage
 * multiple assessments.
 */export const listADAssessments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.ListADAssessments" }, ListADAssessmentsRequest, ListADAssessmentsResult, [ClientException, DirectoryDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * For the specified directory, lists all the certificates registered for a secure LDAP or
 * client certificate authentication.
 */export const listCertificates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.ListCertificates" }, ListCertificatesRequest, ListCertificatesResult, [ClientException, DirectoryDoesNotExistException, InvalidNextTokenException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the address blocks that you have added to a directory.
 */export const listIpRoutes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.ListIpRoutes" }, ListIpRoutesRequest, ListIpRoutesResult, [ClientException, EntityDoesNotExistException, InvalidNextTokenException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the active log subscriptions for the Amazon Web Services account.
 */export const listLogSubscriptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.ListLogSubscriptions" }, ListLogSubscriptionsRequest, ListLogSubscriptionsResult, [ClientException, EntityDoesNotExistException, InvalidNextTokenException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all schema extensions applied to a Microsoft AD Directory.
 */export const listSchemaExtensions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.ListSchemaExtensions" }, ListSchemaExtensionsRequest, ListSchemaExtensionsResult, [ClientException, EntityDoesNotExistException, InvalidNextTokenException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Rejects a directory sharing request that was sent from the directory owner account.
 */export const rejectSharedDirectory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.RejectSharedDirectory" }, RejectSharedDirectoryRequest, RejectSharedDirectoryResult, [ClientException, DirectoryAlreadySharedException, EntityDoesNotExistException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Resets the password for any user in your Managed Microsoft AD or Simple AD directory. Disabled
 * users will become enabled and can be authenticated following the API call.
 * 
 * 
 * You can reset the password for any user in your directory with the following
 * exceptions:
 * 
 * 
 * 
 * - For Simple AD, you cannot reset the password for any user that is a member of either
 * the **Domain Admins** or Enterprise
 * Admins group except for the administrator user.
 * 
 * 
 * 
 * - For Managed Microsoft AD, you can only reset the password for a user that is in an OU based
 * off of the NetBIOS name that you typed when you created your directory. For example, you
 * cannot reset the password for a user in the Amazon Web Services
 * Reserved OU. For more information about the OU structure for an Managed Microsoft AD
 * directory, see What Gets Created in the Directory Service Administration
 * Guide.
 */export const resetUserPassword = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.ResetUserPassword" }, ResetUserPasswordRequest, ResetUserPasswordResult, [ClientException, DirectoryUnavailableException, EntityDoesNotExistException, InvalidPasswordException, ServiceException, UnsupportedOperationException, UserDoesNotExistException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates a directory assessment to validate your self-managed AD environment for
 * hybrid domain join. The assessment checks compatibility and connectivity of the
 * self-managed AD environment.
 * 
 * 
 * A directory assessment is automatically created when you create a hybrid directory.
 * There are two types of assessments: `CUSTOMER` and `SYSTEM`. Your
 * Amazon Web Services account has a limit of 100 `CUSTOMER` directory assessments.
 * 
 * 
 * The assessment process typically takes 30 minutes or more to complete. The assessment
 * process is asynchronous and you can monitor it with
 * `DescribeADAssessment`.
 * 
 * 
 * The `InstanceIds` must have a one-to-one correspondence with
 * `CustomerDnsIps`, meaning that if the IP address for instance i-10243410
 * is 10.24.34.100 and the IP address for instance i-10243420 is 10.24.34.200, then the
 * input arrays must maintain the same order relationship, either [10.24.34.100,
 * 10.24.34.200] paired with [i-10243410, i-10243420] or [10.24.34.200, 10.24.34.100]
 * paired with [i-10243420, i-10243410].
 * 
 * 
 * Note: You must provide exactly one `DirectoryId` or
 * `AssessmentConfiguration`.
 */export const startADAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.StartADAssessment" }, StartADAssessmentRequest, StartADAssessmentResult, [ADAssessmentLimitExceededException, ClientException, DirectoryDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the configuration of an existing hybrid directory. You can recover hybrid
 * directory administrator account or modify self-managed instance settings.
 * 
 * 
 * Updates are applied asynchronously. Use DescribeHybridADUpdate to
 * monitor the progress of configuration changes.
 * 
 * 
 * The `InstanceIds` must have a one-to-one correspondence with
 * `CustomerDnsIps`, meaning that if the IP address for instance i-10243410
 * is 10.24.34.100 and the IP address for instance i-10243420 is 10.24.34.200, then the
 * input arrays must maintain the same order relationship, either [10.24.34.100,
 * 10.24.34.200] paired with [i-10243410, i-10243420] or [10.24.34.200, 10.24.34.100]
 * paired with [i-10243420, i-10243410].
 * 
 * 
 * 
 * 
 * You must provide at least one update to UpdateHybridADRequest$HybridAdministratorAccountUpdate or UpdateHybridADRequest$SelfManagedInstancesSettings.
 */export const updateHybridAD = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.UpdateHybridAD" }, UpdateHybridADRequest, UpdateHybridADResult, [ADAssessmentLimitExceededException, ClientException, DirectoryDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds two domain controllers in the specified Region for the specified directory.
 */export const addRegion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.AddRegion" }, AddRegionRequest, AddRegionResult, [AccessDeniedException, ClientException, DirectoryAlreadyInRegionException, DirectoryDoesNotExistException, DirectoryUnavailableException, EntityDoesNotExistException, InvalidParameterException, RegionLimitExceededException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Active Directory computer object in the specified directory.
 */export const createComputer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.CreateComputer" }, CreateComputerRequest, CreateComputerResult, [AuthenticationFailedException, ClientException, DirectoryUnavailableException, EntityAlreadyExistsException, EntityDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves detailed information about a directory assessment, including its current
 * status, validation results, and configuration details. Use this operation to monitor
 * assessment progress and review results.
 */export const describeADAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeADAssessment" }, DescribeADAssessmentRequest, DescribeADAssessmentResult, [ClientException, EntityDoesNotExistException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Obtains information about the directories that belong to this account.
 * 
 * 
 * You can retrieve information about specific directories by passing the directory
 * identifiers in the `DirectoryIds` parameter. Otherwise, all directories that belong
 * to the current account are returned.
 * 
 * 
 * This operation supports pagination with the use of the `NextToken` request and
 * response parameters. If more results are available, the
 * `DescribeDirectoriesResult.NextToken` member contains a token that you pass in
 * the next call to DescribeDirectories to retrieve the next set of
 * items.
 * 
 * 
 * You can also specify a maximum number of return results with the `Limit`
 * parameter.
 */export const describeDirectories = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeDirectories" }, DescribeDirectoriesRequest, DescribeDirectoriesResult, [ClientException, EntityDoesNotExistException, InvalidNextTokenException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the configurable settings for the specified directory.
 */export const describeSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeSettings" }, DescribeSettingsRequest, DescribeSettingsResult, [ClientException, DirectoryDoesNotExistException, InvalidNextTokenException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the updates of a directory for a particular update type.
 */export const describeUpdateDirectory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeUpdateDirectory" }, DescribeUpdateDirectoryRequest, DescribeUpdateDirectoryResult, [AccessDeniedException, ClientException, DirectoryDoesNotExistException, InvalidNextTokenException, InvalidParameterException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops the directory sharing between the directory owner and consumer accounts.
 */export const unshareDirectory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.UnshareDirectory" }, UnshareDirectoryRequest, UnshareDirectoryResult, [ClientException, DirectoryNotSharedException, EntityDoesNotExistException, InvalidTargetException, ServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about update activities for a hybrid directory. This operation
 * provides details about configuration changes, administrator account updates, and
 * self-managed instance settings (IDs and DNS IPs).
 */export const describeHybridADUpdate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.DescribeHybridADUpdate" }, DescribeHybridADUpdateRequest, DescribeHybridADUpdateResult, [ClientException, DirectoryDoesNotExistException, InvalidNextTokenException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the configurable settings for the specified directory.
 */export const updateSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.UpdateSettings" }, UpdateSettingsRequest, UpdateSettingsResult, [ClientException, DirectoryDoesNotExistException, DirectoryUnavailableException, IncompatibleSettingsException, InvalidParameterException, ServiceException, UnsupportedOperationException, UnsupportedSettingsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers a certificate for a secure LDAP or client certificate authentication.
 */export const registerCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.RegisterCertificate" }, RegisterCertificateRequest, RegisterCertificateResult, [CertificateAlreadyExistsException, CertificateLimitExceededException, ClientException, DirectoryDoesNotExistException, DirectoryUnavailableException, InvalidCertificateException, InvalidParameterException, ServiceException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Shares a specified directory (`DirectoryId`) in your Amazon Web Services account (directory
 * owner) with another Amazon Web Services account (directory consumer). With this operation you can use your
 * directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.
 * 
 * 
 * When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the
 * directory consumer account. This shared directory contains the metadata to provide access to
 * the directory within the directory owner account. The shared directory is visible in all VPCs
 * in the directory consumer account.
 * 
 * 
 * The `ShareMethod` parameter determines whether the specified directory can be
 * shared between Amazon Web Services accounts inside the same Amazon Web Services organization (`ORGANIZATIONS`).
 * It also determines whether you can share the directory with any other Amazon Web Services account either
 * inside or outside of the organization (`HANDSHAKE`).
 * 
 * 
 * The `ShareNotes` parameter is only used when `HANDSHAKE` is called,
 * which sends a directory sharing request to the directory consumer.
 */export const shareDirectory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-04-16", sdkId: "Directory Service", sigV4ServiceName: "ds", name: "DirectoryService_20150416.ShareDirectory" }, ShareDirectoryRequest, ShareDirectoryResult, [AccessDeniedException, ClientException, DirectoryAlreadySharedException, EntityDoesNotExistException, InvalidParameterException, InvalidTargetException, OrganizationsException, ServiceException, ShareLimitExceededException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

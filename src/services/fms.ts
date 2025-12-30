import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteNotificationChannelRequest extends S.Class<DeleteNotificationChannelRequest>("DeleteNotificationChannelRequest")({}) {}
export class DisassociateAdminAccountRequest extends S.Class<DisassociateAdminAccountRequest>("DisassociateAdminAccountRequest")({}) {}
export class GetAdminAccountRequest extends S.Class<GetAdminAccountRequest>("GetAdminAccountRequest")({}) {}
export class GetNotificationChannelRequest extends S.Class<GetNotificationChannelRequest>("GetNotificationChannelRequest")({}) {}
export const IdentifierList = S.Array(S.String);
export const AWSAccountIdList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AssociateAdminAccountRequest extends S.Class<AssociateAdminAccountRequest>("AssociateAdminAccountRequest")({AdminAccount: S.String}) {}
export class AssociateThirdPartyFirewallRequest extends S.Class<AssociateThirdPartyFirewallRequest>("AssociateThirdPartyFirewallRequest")({ThirdPartyFirewall: S.String}) {}
export class BatchAssociateResourceRequest extends S.Class<BatchAssociateResourceRequest>("BatchAssociateResourceRequest")({ResourceSetIdentifier: S.String, Items: IdentifierList}) {}
export class BatchDisassociateResourceRequest extends S.Class<BatchDisassociateResourceRequest>("BatchDisassociateResourceRequest")({ResourceSetIdentifier: S.String, Items: IdentifierList}) {}
export class DeleteAppsListRequest extends S.Class<DeleteAppsListRequest>("DeleteAppsListRequest")({ListId: S.String}) {}
export class DeletePolicyRequest extends S.Class<DeletePolicyRequest>("DeletePolicyRequest")({PolicyId: S.String, DeleteAllPolicyResources: S.optional(S.Boolean)}) {}
export class DeleteProtocolsListRequest extends S.Class<DeleteProtocolsListRequest>("DeleteProtocolsListRequest")({ListId: S.String}) {}
export class DeleteResourceSetRequest extends S.Class<DeleteResourceSetRequest>("DeleteResourceSetRequest")({Identifier: S.String}) {}
export class DisassociateThirdPartyFirewallRequest extends S.Class<DisassociateThirdPartyFirewallRequest>("DisassociateThirdPartyFirewallRequest")({ThirdPartyFirewall: S.String}) {}
export class GetAdminAccountResponse extends S.Class<GetAdminAccountResponse>("GetAdminAccountResponse")({AdminAccount: S.optional(S.String), RoleStatus: S.optional(S.String)}) {}
export class GetAdminScopeRequest extends S.Class<GetAdminScopeRequest>("GetAdminScopeRequest")({AdminAccount: S.String}) {}
export class GetAppsListRequest extends S.Class<GetAppsListRequest>("GetAppsListRequest")({ListId: S.String, DefaultList: S.optional(S.Boolean)}) {}
export class GetComplianceDetailRequest extends S.Class<GetComplianceDetailRequest>("GetComplianceDetailRequest")({PolicyId: S.String, MemberAccount: S.String}) {}
export class GetNotificationChannelResponse extends S.Class<GetNotificationChannelResponse>("GetNotificationChannelResponse")({SnsTopicArn: S.optional(S.String), SnsRoleName: S.optional(S.String)}) {}
export class GetPolicyRequest extends S.Class<GetPolicyRequest>("GetPolicyRequest")({PolicyId: S.String}) {}
export class GetProtectionStatusRequest extends S.Class<GetProtectionStatusRequest>("GetProtectionStatusRequest")({PolicyId: S.String, MemberAccountId: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class GetProtocolsListRequest extends S.Class<GetProtocolsListRequest>("GetProtocolsListRequest")({ListId: S.String, DefaultList: S.optional(S.Boolean)}) {}
export class GetResourceSetRequest extends S.Class<GetResourceSetRequest>("GetResourceSetRequest")({Identifier: S.String}) {}
export class GetThirdPartyFirewallAssociationStatusRequest extends S.Class<GetThirdPartyFirewallAssociationStatusRequest>("GetThirdPartyFirewallAssociationStatusRequest")({ThirdPartyFirewall: S.String}) {}
export class GetViolationDetailsRequest extends S.Class<GetViolationDetailsRequest>("GetViolationDetailsRequest")({PolicyId: S.String, MemberAccount: S.String, ResourceId: S.String, ResourceType: S.String}) {}
export class ListAdminAccountsForOrganizationRequest extends S.Class<ListAdminAccountsForOrganizationRequest>("ListAdminAccountsForOrganizationRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListAdminsManagingAccountRequest extends S.Class<ListAdminsManagingAccountRequest>("ListAdminsManagingAccountRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListAppsListsRequest extends S.Class<ListAppsListsRequest>("ListAppsListsRequest")({DefaultLists: S.optional(S.Boolean), NextToken: S.optional(S.String), MaxResults: S.Number}) {}
export class ListComplianceStatusRequest extends S.Class<ListComplianceStatusRequest>("ListComplianceStatusRequest")({PolicyId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListDiscoveredResourcesRequest extends S.Class<ListDiscoveredResourcesRequest>("ListDiscoveredResourcesRequest")({MemberAccountIds: AWSAccountIdList, ResourceType: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListMemberAccountsRequest extends S.Class<ListMemberAccountsRequest>("ListMemberAccountsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListPoliciesRequest extends S.Class<ListPoliciesRequest>("ListPoliciesRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListProtocolsListsRequest extends S.Class<ListProtocolsListsRequest>("ListProtocolsListsRequest")({DefaultLists: S.optional(S.Boolean), NextToken: S.optional(S.String), MaxResults: S.Number}) {}
export class ListResourceSetResourcesRequest extends S.Class<ListResourceSetResourcesRequest>("ListResourceSetResourcesRequest")({Identifier: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListResourceSetsRequest extends S.Class<ListResourceSetsRequest>("ListResourceSetsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class ListThirdPartyFirewallFirewallPoliciesRequest extends S.Class<ListThirdPartyFirewallFirewallPoliciesRequest>("ListThirdPartyFirewallFirewallPoliciesRequest")({ThirdPartyFirewall: S.String, NextToken: S.optional(S.String), MaxResults: S.Number}) {}
export class PutNotificationChannelRequest extends S.Class<PutNotificationChannelRequest>("PutNotificationChannelRequest")({SnsTopicArn: S.String, SnsRoleName: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, TagList: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const ResourceTypeList = S.Array(S.String);
export const ResourceSetIds = S.Array(S.String);
export const ProtocolsList = S.Array(S.String);
export const AccountIdList = S.Array(S.String);
export const MemberAccounts = S.Array(S.String);
export class ResourceSet extends S.Class<ResourceSet>("ResourceSet")({Id: S.optional(S.String), Name: S.String, Description: S.optional(S.String), UpdateToken: S.optional(S.String), ResourceTypeList: ResourceTypeList, LastUpdateTime: S.optional(S.Date), ResourceSetStatus: S.optional(S.String)}) {}
export const OrganizationalUnitIdList = S.Array(S.String);
export const AWSRegionList = S.Array(S.String);
export const SecurityServiceTypeList = S.Array(S.String);
export const CustomerPolicyScopeIdList = S.Array(S.String);
export class AssociateThirdPartyFirewallResponse extends S.Class<AssociateThirdPartyFirewallResponse>("AssociateThirdPartyFirewallResponse")({ThirdPartyFirewallStatus: S.optional(S.String)}) {}
export class FailedItem extends S.Class<FailedItem>("FailedItem")({URI: S.optional(S.String), Reason: S.optional(S.String)}) {}
export const FailedItemList = S.Array(FailedItem);
export class BatchDisassociateResourceResponse extends S.Class<BatchDisassociateResourceResponse>("BatchDisassociateResourceResponse")({ResourceSetIdentifier: S.String, FailedItems: FailedItemList}) {}
export class DisassociateThirdPartyFirewallResponse extends S.Class<DisassociateThirdPartyFirewallResponse>("DisassociateThirdPartyFirewallResponse")({ThirdPartyFirewallStatus: S.optional(S.String)}) {}
export class AccountScope extends S.Class<AccountScope>("AccountScope")({Accounts: S.optional(AccountIdList), AllAccountsEnabled: S.optional(S.Boolean), ExcludeSpecifiedAccounts: S.optional(S.Boolean)}) {}
export class OrganizationalUnitScope extends S.Class<OrganizationalUnitScope>("OrganizationalUnitScope")({OrganizationalUnits: S.optional(OrganizationalUnitIdList), AllOrganizationalUnitsEnabled: S.optional(S.Boolean), ExcludeSpecifiedOrganizationalUnits: S.optional(S.Boolean)}) {}
export class RegionScope extends S.Class<RegionScope>("RegionScope")({Regions: S.optional(AWSRegionList), AllRegionsEnabled: S.optional(S.Boolean)}) {}
export class PolicyTypeScope extends S.Class<PolicyTypeScope>("PolicyTypeScope")({PolicyTypes: S.optional(SecurityServiceTypeList), AllPolicyTypesEnabled: S.optional(S.Boolean)}) {}
export class AdminScope extends S.Class<AdminScope>("AdminScope")({AccountScope: S.optional(AccountScope), OrganizationalUnitScope: S.optional(OrganizationalUnitScope), RegionScope: S.optional(RegionScope), PolicyTypeScope: S.optional(PolicyTypeScope)}) {}
export class GetAdminScopeResponse extends S.Class<GetAdminScopeResponse>("GetAdminScopeResponse")({AdminScope: S.optional(AdminScope), Status: S.optional(S.String)}) {}
export class App extends S.Class<App>("App")({AppName: S.String, Protocol: S.String, Port: S.Number}) {}
export const AppsList = S.Array(App);
export const PreviousAppsList = S.Record({key: S.String, value: AppsList});
export class AppsListData extends S.Class<AppsListData>("AppsListData")({ListId: S.optional(S.String), ListName: S.String, ListUpdateToken: S.optional(S.String), CreateTime: S.optional(S.Date), LastUpdateTime: S.optional(S.Date), AppsList: AppsList, PreviousAppsList: S.optional(PreviousAppsList)}) {}
export class GetAppsListResponse extends S.Class<GetAppsListResponse>("GetAppsListResponse")({AppsList: S.optional(AppsListData), AppsListArn: S.optional(S.String)}) {}
export class NetworkFirewallPolicy extends S.Class<NetworkFirewallPolicy>("NetworkFirewallPolicy")({FirewallDeploymentModel: S.optional(S.String)}) {}
export class ThirdPartyFirewallPolicy extends S.Class<ThirdPartyFirewallPolicy>("ThirdPartyFirewallPolicy")({FirewallDeploymentModel: S.optional(S.String)}) {}
export class NetworkAclIcmpTypeCode extends S.Class<NetworkAclIcmpTypeCode>("NetworkAclIcmpTypeCode")({Code: S.optional(S.Number), Type: S.optional(S.Number)}) {}
export class NetworkAclPortRange extends S.Class<NetworkAclPortRange>("NetworkAclPortRange")({From: S.optional(S.Number), To: S.optional(S.Number)}) {}
export class NetworkAclEntry extends S.Class<NetworkAclEntry>("NetworkAclEntry")({IcmpTypeCode: S.optional(NetworkAclIcmpTypeCode), Protocol: S.String, PortRange: S.optional(NetworkAclPortRange), CidrBlock: S.optional(S.String), Ipv6CidrBlock: S.optional(S.String), RuleAction: S.String, Egress: S.Boolean}) {}
export const NetworkAclEntries = S.Array(NetworkAclEntry);
export class NetworkAclEntrySet extends S.Class<NetworkAclEntrySet>("NetworkAclEntrySet")({FirstEntries: S.optional(NetworkAclEntries), ForceRemediateForFirstEntries: S.Boolean, LastEntries: S.optional(NetworkAclEntries), ForceRemediateForLastEntries: S.Boolean}) {}
export class NetworkAclCommonPolicy extends S.Class<NetworkAclCommonPolicy>("NetworkAclCommonPolicy")({NetworkAclEntrySet: NetworkAclEntrySet}) {}
export class PolicyOption extends S.Class<PolicyOption>("PolicyOption")({NetworkFirewallPolicy: S.optional(NetworkFirewallPolicy), ThirdPartyFirewallPolicy: S.optional(ThirdPartyFirewallPolicy), NetworkAclCommonPolicy: S.optional(NetworkAclCommonPolicy)}) {}
export class SecurityServicePolicyData extends S.Class<SecurityServicePolicyData>("SecurityServicePolicyData")({Type: S.String, ManagedServiceData: S.optional(S.String), PolicyOption: S.optional(PolicyOption)}) {}
export class ResourceTag extends S.Class<ResourceTag>("ResourceTag")({Key: S.String, Value: S.optional(S.String)}) {}
export const ResourceTags = S.Array(ResourceTag);
export const CustomerPolicyScopeMap = S.Record({key: S.String, value: CustomerPolicyScopeIdList});
export class Policy extends S.Class<Policy>("Policy")({PolicyId: S.optional(S.String), PolicyName: S.String, PolicyUpdateToken: S.optional(S.String), SecurityServicePolicyData: SecurityServicePolicyData, ResourceType: S.String, ResourceTypeList: S.optional(ResourceTypeList), ResourceTags: S.optional(ResourceTags), ExcludeResourceTags: S.Boolean, RemediationEnabled: S.Boolean, DeleteUnusedFMManagedResources: S.optional(S.Boolean), IncludeMap: S.optional(CustomerPolicyScopeMap), ExcludeMap: S.optional(CustomerPolicyScopeMap), ResourceSetIds: S.optional(ResourceSetIds), PolicyDescription: S.optional(S.String), PolicyStatus: S.optional(S.String), ResourceTagLogicalOperator: S.optional(S.String)}) {}
export class GetPolicyResponse extends S.Class<GetPolicyResponse>("GetPolicyResponse")({Policy: S.optional(Policy), PolicyArn: S.optional(S.String)}) {}
export class GetProtectionStatusResponse extends S.Class<GetProtectionStatusResponse>("GetProtectionStatusResponse")({AdminAccountId: S.optional(S.String), ServiceType: S.optional(S.String), Data: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export const PreviousProtocolsList = S.Record({key: S.String, value: ProtocolsList});
export class ProtocolsListData extends S.Class<ProtocolsListData>("ProtocolsListData")({ListId: S.optional(S.String), ListName: S.String, ListUpdateToken: S.optional(S.String), CreateTime: S.optional(S.Date), LastUpdateTime: S.optional(S.Date), ProtocolsList: ProtocolsList, PreviousProtocolsList: S.optional(PreviousProtocolsList)}) {}
export class GetProtocolsListResponse extends S.Class<GetProtocolsListResponse>("GetProtocolsListResponse")({ProtocolsList: S.optional(ProtocolsListData), ProtocolsListArn: S.optional(S.String)}) {}
export class GetResourceSetResponse extends S.Class<GetResourceSetResponse>("GetResourceSetResponse")({ResourceSet: ResourceSet, ResourceSetArn: S.String}) {}
export class GetThirdPartyFirewallAssociationStatusResponse extends S.Class<GetThirdPartyFirewallAssociationStatusResponse>("GetThirdPartyFirewallAssociationStatusResponse")({ThirdPartyFirewallStatus: S.optional(S.String), MarketplaceOnboardingStatus: S.optional(S.String)}) {}
export class ListAdminsManagingAccountResponse extends S.Class<ListAdminsManagingAccountResponse>("ListAdminsManagingAccountResponse")({AdminAccounts: S.optional(AccountIdList), NextToken: S.optional(S.String)}) {}
export class ListMemberAccountsResponse extends S.Class<ListMemberAccountsResponse>("ListMemberAccountsResponse")({MemberAccounts: S.optional(MemberAccounts), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({TagList: S.optional(TagList)}) {}
export class PutResourceSetRequest extends S.Class<PutResourceSetRequest>("PutResourceSetRequest")({ResourceSet: ResourceSet, TagList: S.optional(TagList)}) {}
export class AdminAccountSummary extends S.Class<AdminAccountSummary>("AdminAccountSummary")({AdminAccount: S.optional(S.String), DefaultAdmin: S.optional(S.Boolean), Status: S.optional(S.String)}) {}
export const AdminAccountSummaryList = S.Array(AdminAccountSummary);
export class AppsListDataSummary extends S.Class<AppsListDataSummary>("AppsListDataSummary")({ListArn: S.optional(S.String), ListId: S.optional(S.String), ListName: S.optional(S.String), AppsList: S.optional(AppsList)}) {}
export const AppsListsData = S.Array(AppsListDataSummary);
export class DiscoveredResource extends S.Class<DiscoveredResource>("DiscoveredResource")({URI: S.optional(S.String), AccountId: S.optional(S.String), Type: S.optional(S.String), Name: S.optional(S.String)}) {}
export const DiscoveredResourceList = S.Array(DiscoveredResource);
export class PolicySummary extends S.Class<PolicySummary>("PolicySummary")({PolicyArn: S.optional(S.String), PolicyId: S.optional(S.String), PolicyName: S.optional(S.String), ResourceType: S.optional(S.String), SecurityServiceType: S.optional(S.String), RemediationEnabled: S.optional(S.Boolean), DeleteUnusedFMManagedResources: S.optional(S.Boolean), PolicyStatus: S.optional(S.String)}) {}
export const PolicySummaryList = S.Array(PolicySummary);
export class ProtocolsListDataSummary extends S.Class<ProtocolsListDataSummary>("ProtocolsListDataSummary")({ListArn: S.optional(S.String), ListId: S.optional(S.String), ListName: S.optional(S.String), ProtocolsList: S.optional(ProtocolsList)}) {}
export const ProtocolsListsData = S.Array(ProtocolsListDataSummary);
export class Resource extends S.Class<Resource>("Resource")({URI: S.String, AccountId: S.optional(S.String)}) {}
export const ResourceList = S.Array(Resource);
export class ResourceSetSummary extends S.Class<ResourceSetSummary>("ResourceSetSummary")({Id: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), LastUpdateTime: S.optional(S.Date), ResourceSetStatus: S.optional(S.String)}) {}
export const ResourceSetSummaryList = S.Array(ResourceSetSummary);
export class ThirdPartyFirewallFirewallPolicy extends S.Class<ThirdPartyFirewallFirewallPolicy>("ThirdPartyFirewallFirewallPolicy")({FirewallPolicyId: S.optional(S.String), FirewallPolicyName: S.optional(S.String)}) {}
export const ThirdPartyFirewallFirewallPolicies = S.Array(ThirdPartyFirewallFirewallPolicy);
export class BatchAssociateResourceResponse extends S.Class<BatchAssociateResourceResponse>("BatchAssociateResourceResponse")({ResourceSetIdentifier: S.String, FailedItems: FailedItemList}) {}
export class ListAdminAccountsForOrganizationResponse extends S.Class<ListAdminAccountsForOrganizationResponse>("ListAdminAccountsForOrganizationResponse")({AdminAccounts: S.optional(AdminAccountSummaryList), NextToken: S.optional(S.String)}) {}
export class ListAppsListsResponse extends S.Class<ListAppsListsResponse>("ListAppsListsResponse")({AppsLists: S.optional(AppsListsData), NextToken: S.optional(S.String)}) {}
export class ListDiscoveredResourcesResponse extends S.Class<ListDiscoveredResourcesResponse>("ListDiscoveredResourcesResponse")({Items: S.optional(DiscoveredResourceList), NextToken: S.optional(S.String)}) {}
export class ListPoliciesResponse extends S.Class<ListPoliciesResponse>("ListPoliciesResponse")({PolicyList: S.optional(PolicySummaryList), NextToken: S.optional(S.String)}) {}
export class ListProtocolsListsResponse extends S.Class<ListProtocolsListsResponse>("ListProtocolsListsResponse")({ProtocolsLists: S.optional(ProtocolsListsData), NextToken: S.optional(S.String)}) {}
export class ListResourceSetResourcesResponse extends S.Class<ListResourceSetResourcesResponse>("ListResourceSetResourcesResponse")({Items: ResourceList, NextToken: S.optional(S.String)}) {}
export class ListResourceSetsResponse extends S.Class<ListResourceSetsResponse>("ListResourceSetsResponse")({ResourceSets: S.optional(ResourceSetSummaryList), NextToken: S.optional(S.String)}) {}
export class ListThirdPartyFirewallFirewallPoliciesResponse extends S.Class<ListThirdPartyFirewallFirewallPoliciesResponse>("ListThirdPartyFirewallFirewallPoliciesResponse")({ThirdPartyFirewallFirewallPolicies: S.optional(ThirdPartyFirewallFirewallPolicies), NextToken: S.optional(S.String)}) {}
export class PutAdminAccountRequest extends S.Class<PutAdminAccountRequest>("PutAdminAccountRequest")({AdminAccount: S.String, AdminScope: S.optional(AdminScope)}) {}
export class PutAppsListRequest extends S.Class<PutAppsListRequest>("PutAppsListRequest")({AppsList: AppsListData, TagList: S.optional(TagList)}) {}
export class PutProtocolsListRequest extends S.Class<PutProtocolsListRequest>("PutProtocolsListRequest")({ProtocolsList: ProtocolsListData, TagList: S.optional(TagList)}) {}
export class PutResourceSetResponse extends S.Class<PutResourceSetResponse>("PutResourceSetResponse")({ResourceSet: ResourceSet, ResourceSetArn: S.String}) {}
export const IssueInfoMap = S.Record({key: S.String, value: S.String});
export class EvaluationResult extends S.Class<EvaluationResult>("EvaluationResult")({ComplianceStatus: S.optional(S.String), ViolatorCount: S.optional(S.Number), EvaluationLimitExceeded: S.optional(S.Boolean)}) {}
export const EvaluationResults = S.Array(EvaluationResult);
export const ResourceIdList = S.Array(S.String);
export class AwsEc2NetworkInterfaceViolation extends S.Class<AwsEc2NetworkInterfaceViolation>("AwsEc2NetworkInterfaceViolation")({ViolationTarget: S.optional(S.String), ViolatingSecurityGroups: S.optional(ResourceIdList)}) {}
export const AwsEc2NetworkInterfaceViolations = S.Array(AwsEc2NetworkInterfaceViolation);
export const DnsRuleGroupPriorities = S.Array(S.Number);
export const ResourceArnList = S.Array(S.String);
export class PolicyComplianceStatus extends S.Class<PolicyComplianceStatus>("PolicyComplianceStatus")({PolicyOwner: S.optional(S.String), PolicyId: S.optional(S.String), PolicyName: S.optional(S.String), MemberAccount: S.optional(S.String), EvaluationResults: S.optional(EvaluationResults), LastUpdated: S.optional(S.Date), IssueInfoMap: S.optional(IssueInfoMap)}) {}
export const PolicyComplianceStatusList = S.Array(PolicyComplianceStatus);
export const ComplianceViolatorMetadata = S.Record({key: S.String, value: S.String});
export class AwsEc2InstanceViolation extends S.Class<AwsEc2InstanceViolation>("AwsEc2InstanceViolation")({ViolationTarget: S.optional(S.String), AwsEc2NetworkInterfaceViolations: S.optional(AwsEc2NetworkInterfaceViolations)}) {}
export class NetworkFirewallMissingFirewallViolation extends S.Class<NetworkFirewallMissingFirewallViolation>("NetworkFirewallMissingFirewallViolation")({ViolationTarget: S.optional(S.String), VPC: S.optional(S.String), AvailabilityZone: S.optional(S.String), TargetViolationReason: S.optional(S.String)}) {}
export class NetworkFirewallMissingSubnetViolation extends S.Class<NetworkFirewallMissingSubnetViolation>("NetworkFirewallMissingSubnetViolation")({ViolationTarget: S.optional(S.String), VPC: S.optional(S.String), AvailabilityZone: S.optional(S.String), TargetViolationReason: S.optional(S.String)}) {}
export class NetworkFirewallMissingExpectedRTViolation extends S.Class<NetworkFirewallMissingExpectedRTViolation>("NetworkFirewallMissingExpectedRTViolation")({ViolationTarget: S.optional(S.String), VPC: S.optional(S.String), AvailabilityZone: S.optional(S.String), CurrentRouteTable: S.optional(S.String), ExpectedRouteTable: S.optional(S.String)}) {}
export class Route extends S.Class<Route>("Route")({DestinationType: S.optional(S.String), TargetType: S.optional(S.String), Destination: S.optional(S.String), Target: S.optional(S.String)}) {}
export const LengthBoundedStringList = S.Array(S.String);
export class ExpectedRoute extends S.Class<ExpectedRoute>("ExpectedRoute")({IpV4Cidr: S.optional(S.String), PrefixListId: S.optional(S.String), IpV6Cidr: S.optional(S.String), ContributingSubnets: S.optional(ResourceIdList), AllowedTargets: S.optional(LengthBoundedStringList), RouteTableId: S.optional(S.String)}) {}
export const ExpectedRoutes = S.Array(ExpectedRoute);
export const Routes = S.Array(Route);
export class NetworkFirewallInvalidRouteConfigurationViolation extends S.Class<NetworkFirewallInvalidRouteConfigurationViolation>("NetworkFirewallInvalidRouteConfigurationViolation")({AffectedSubnets: S.optional(ResourceIdList), RouteTableId: S.optional(S.String), IsRouteTableUsedInDifferentAZ: S.optional(S.Boolean), ViolatingRoute: S.optional(Route), CurrentFirewallSubnetRouteTable: S.optional(S.String), ExpectedFirewallEndpoint: S.optional(S.String), ActualFirewallEndpoint: S.optional(S.String), ExpectedFirewallSubnetId: S.optional(S.String), ActualFirewallSubnetId: S.optional(S.String), ExpectedFirewallSubnetRoutes: S.optional(ExpectedRoutes), ActualFirewallSubnetRoutes: S.optional(Routes), InternetGatewayId: S.optional(S.String), CurrentInternetGatewayRouteTable: S.optional(S.String), ExpectedInternetGatewayRoutes: S.optional(ExpectedRoutes), ActualInternetGatewayRoutes: S.optional(Routes), VpcId: S.optional(S.String)}) {}
export class NetworkFirewallBlackHoleRouteDetectedViolation extends S.Class<NetworkFirewallBlackHoleRouteDetectedViolation>("NetworkFirewallBlackHoleRouteDetectedViolation")({ViolationTarget: S.optional(S.String), RouteTableId: S.optional(S.String), VpcId: S.optional(S.String), ViolatingRoutes: S.optional(Routes)}) {}
export class NetworkFirewallUnexpectedFirewallRoutesViolation extends S.Class<NetworkFirewallUnexpectedFirewallRoutesViolation>("NetworkFirewallUnexpectedFirewallRoutesViolation")({FirewallSubnetId: S.optional(S.String), ViolatingRoutes: S.optional(Routes), RouteTableId: S.optional(S.String), FirewallEndpoint: S.optional(S.String), VpcId: S.optional(S.String)}) {}
export class NetworkFirewallUnexpectedGatewayRoutesViolation extends S.Class<NetworkFirewallUnexpectedGatewayRoutesViolation>("NetworkFirewallUnexpectedGatewayRoutesViolation")({GatewayId: S.optional(S.String), ViolatingRoutes: S.optional(Routes), RouteTableId: S.optional(S.String), VpcId: S.optional(S.String)}) {}
export class NetworkFirewallMissingExpectedRoutesViolation extends S.Class<NetworkFirewallMissingExpectedRoutesViolation>("NetworkFirewallMissingExpectedRoutesViolation")({ViolationTarget: S.optional(S.String), ExpectedRoutes: S.optional(ExpectedRoutes), VpcId: S.optional(S.String)}) {}
export class DnsRuleGroupPriorityConflictViolation extends S.Class<DnsRuleGroupPriorityConflictViolation>("DnsRuleGroupPriorityConflictViolation")({ViolationTarget: S.optional(S.String), ViolationTargetDescription: S.optional(S.String), ConflictingPriority: S.optional(S.Number), ConflictingPolicyId: S.optional(S.String), UnavailablePriorities: S.optional(DnsRuleGroupPriorities)}) {}
export class DnsDuplicateRuleGroupViolation extends S.Class<DnsDuplicateRuleGroupViolation>("DnsDuplicateRuleGroupViolation")({ViolationTarget: S.optional(S.String), ViolationTargetDescription: S.optional(S.String)}) {}
export class DnsRuleGroupLimitExceededViolation extends S.Class<DnsRuleGroupLimitExceededViolation>("DnsRuleGroupLimitExceededViolation")({ViolationTarget: S.optional(S.String), ViolationTargetDescription: S.optional(S.String), NumberOfRuleGroupsAlreadyAssociated: S.optional(S.Number)}) {}
export class FirewallSubnetIsOutOfScopeViolation extends S.Class<FirewallSubnetIsOutOfScopeViolation>("FirewallSubnetIsOutOfScopeViolation")({FirewallSubnetId: S.optional(S.String), VpcId: S.optional(S.String), SubnetAvailabilityZone: S.optional(S.String), SubnetAvailabilityZoneId: S.optional(S.String), VpcEndpointId: S.optional(S.String)}) {}
export class RouteHasOutOfScopeEndpointViolation extends S.Class<RouteHasOutOfScopeEndpointViolation>("RouteHasOutOfScopeEndpointViolation")({SubnetId: S.optional(S.String), VpcId: S.optional(S.String), RouteTableId: S.optional(S.String), ViolatingRoutes: S.optional(Routes), SubnetAvailabilityZone: S.optional(S.String), SubnetAvailabilityZoneId: S.optional(S.String), CurrentFirewallSubnetRouteTable: S.optional(S.String), FirewallSubnetId: S.optional(S.String), FirewallSubnetRoutes: S.optional(Routes), InternetGatewayId: S.optional(S.String), CurrentInternetGatewayRouteTable: S.optional(S.String), InternetGatewayRoutes: S.optional(Routes)}) {}
export class ThirdPartyFirewallMissingFirewallViolation extends S.Class<ThirdPartyFirewallMissingFirewallViolation>("ThirdPartyFirewallMissingFirewallViolation")({ViolationTarget: S.optional(S.String), VPC: S.optional(S.String), AvailabilityZone: S.optional(S.String), TargetViolationReason: S.optional(S.String)}) {}
export class ThirdPartyFirewallMissingSubnetViolation extends S.Class<ThirdPartyFirewallMissingSubnetViolation>("ThirdPartyFirewallMissingSubnetViolation")({ViolationTarget: S.optional(S.String), VPC: S.optional(S.String), AvailabilityZone: S.optional(S.String), TargetViolationReason: S.optional(S.String)}) {}
export class ThirdPartyFirewallMissingExpectedRouteTableViolation extends S.Class<ThirdPartyFirewallMissingExpectedRouteTableViolation>("ThirdPartyFirewallMissingExpectedRouteTableViolation")({ViolationTarget: S.optional(S.String), VPC: S.optional(S.String), AvailabilityZone: S.optional(S.String), CurrentRouteTable: S.optional(S.String), ExpectedRouteTable: S.optional(S.String)}) {}
export class FirewallSubnetMissingVPCEndpointViolation extends S.Class<FirewallSubnetMissingVPCEndpointViolation>("FirewallSubnetMissingVPCEndpointViolation")({FirewallSubnetId: S.optional(S.String), VpcId: S.optional(S.String), SubnetAvailabilityZone: S.optional(S.String), SubnetAvailabilityZoneId: S.optional(S.String)}) {}
export class WebACLHasIncompatibleConfigurationViolation extends S.Class<WebACLHasIncompatibleConfigurationViolation>("WebACLHasIncompatibleConfigurationViolation")({WebACLArn: S.optional(S.String), Description: S.optional(S.String)}) {}
export class WebACLHasOutOfScopeResourcesViolation extends S.Class<WebACLHasOutOfScopeResourcesViolation>("WebACLHasOutOfScopeResourcesViolation")({WebACLArn: S.optional(S.String), OutOfScopeResourceList: S.optional(ResourceArnList)}) {}
export const TargetViolationReasons = S.Array(S.String);
export const NetworkFirewallActionList = S.Array(S.String);
export class EntryDescription extends S.Class<EntryDescription>("EntryDescription")({EntryDetail: S.optional(NetworkAclEntry), EntryRuleNumber: S.optional(S.Number), EntryType: S.optional(S.String)}) {}
export const EntriesWithConflicts = S.Array(EntryDescription);
export const EntryViolationReasons = S.Array(S.String);
export class ListComplianceStatusResponse extends S.Class<ListComplianceStatusResponse>("ListComplianceStatusResponse")({PolicyComplianceStatusList: S.optional(PolicyComplianceStatusList), NextToken: S.optional(S.String)}) {}
export class PutAppsListResponse extends S.Class<PutAppsListResponse>("PutAppsListResponse")({AppsList: S.optional(AppsListData), AppsListArn: S.optional(S.String)}) {}
export class PutProtocolsListResponse extends S.Class<PutProtocolsListResponse>("PutProtocolsListResponse")({ProtocolsList: S.optional(ProtocolsListData), ProtocolsListArn: S.optional(S.String)}) {}
export class ComplianceViolator extends S.Class<ComplianceViolator>("ComplianceViolator")({ResourceId: S.optional(S.String), ViolationReason: S.optional(S.String), ResourceType: S.optional(S.String), Metadata: S.optional(ComplianceViolatorMetadata)}) {}
export const ComplianceViolators = S.Array(ComplianceViolator);
export class PartialMatch extends S.Class<PartialMatch>("PartialMatch")({Reference: S.optional(S.String), TargetViolationReasons: S.optional(TargetViolationReasons)}) {}
export const PartialMatches = S.Array(PartialMatch);
export class PolicyComplianceDetail extends S.Class<PolicyComplianceDetail>("PolicyComplianceDetail")({PolicyOwner: S.optional(S.String), PolicyId: S.optional(S.String), MemberAccount: S.optional(S.String), Violators: S.optional(ComplianceViolators), EvaluationLimitExceeded: S.optional(S.Boolean), ExpiredAt: S.optional(S.Date), IssueInfoMap: S.optional(IssueInfoMap)}) {}
export class NetworkFirewallInternetTrafficNotInspectedViolation extends S.Class<NetworkFirewallInternetTrafficNotInspectedViolation>("NetworkFirewallInternetTrafficNotInspectedViolation")({SubnetId: S.optional(S.String), SubnetAvailabilityZone: S.optional(S.String), RouteTableId: S.optional(S.String), ViolatingRoutes: S.optional(Routes), IsRouteTableUsedInDifferentAZ: S.optional(S.Boolean), CurrentFirewallSubnetRouteTable: S.optional(S.String), ExpectedFirewallEndpoint: S.optional(S.String), FirewallSubnetId: S.optional(S.String), ExpectedFirewallSubnetRoutes: S.optional(ExpectedRoutes), ActualFirewallSubnetRoutes: S.optional(Routes), InternetGatewayId: S.optional(S.String), CurrentInternetGatewayRouteTable: S.optional(S.String), ExpectedInternetGatewayRoutes: S.optional(ExpectedRoutes), ActualInternetGatewayRoutes: S.optional(Routes), VpcId: S.optional(S.String)}) {}
export class GetComplianceDetailResponse extends S.Class<GetComplianceDetailResponse>("GetComplianceDetailResponse")({PolicyComplianceDetail: S.optional(PolicyComplianceDetail)}) {}
export class SecurityGroupRuleDescription extends S.Class<SecurityGroupRuleDescription>("SecurityGroupRuleDescription")({IPV4Range: S.optional(S.String), IPV6Range: S.optional(S.String), PrefixListId: S.optional(S.String), Protocol: S.optional(S.String), FromPort: S.optional(S.Number), ToPort: S.optional(S.Number)}) {}
export class StatelessRuleGroup extends S.Class<StatelessRuleGroup>("StatelessRuleGroup")({RuleGroupName: S.optional(S.String), ResourceId: S.optional(S.String), Priority: S.optional(S.Number)}) {}
export const StatelessRuleGroupList = S.Array(StatelessRuleGroup);
export class StatefulEngineOptions extends S.Class<StatefulEngineOptions>("StatefulEngineOptions")({RuleOrder: S.optional(S.String), StreamExceptionPolicy: S.optional(S.String)}) {}
export class SecurityGroupRemediationAction extends S.Class<SecurityGroupRemediationAction>("SecurityGroupRemediationAction")({RemediationActionType: S.optional(S.String), Description: S.optional(S.String), RemediationResult: S.optional(SecurityGroupRuleDescription), IsDefaultAction: S.optional(S.Boolean)}) {}
export const SecurityGroupRemediationActions = S.Array(SecurityGroupRemediationAction);
export class EntryViolation extends S.Class<EntryViolation>("EntryViolation")({ExpectedEntry: S.optional(EntryDescription), ExpectedEvaluationOrder: S.optional(S.String), ActualEvaluationOrder: S.optional(S.String), EntryAtExpectedEvaluationOrder: S.optional(EntryDescription), EntriesWithConflicts: S.optional(EntriesWithConflicts), EntryViolationReasons: S.optional(EntryViolationReasons)}) {}
export const EntryViolations = S.Array(EntryViolation);
export class NetworkFirewallStatefulRuleGroupOverride extends S.Class<NetworkFirewallStatefulRuleGroupOverride>("NetworkFirewallStatefulRuleGroupOverride")({Action: S.optional(S.String)}) {}
export class AwsVPCSecurityGroupViolation extends S.Class<AwsVPCSecurityGroupViolation>("AwsVPCSecurityGroupViolation")({ViolationTarget: S.optional(S.String), ViolationTargetDescription: S.optional(S.String), PartialMatches: S.optional(PartialMatches), PossibleSecurityGroupRemediationActions: S.optional(SecurityGroupRemediationActions)}) {}
export class InvalidNetworkAclEntriesViolation extends S.Class<InvalidNetworkAclEntriesViolation>("InvalidNetworkAclEntriesViolation")({Vpc: S.optional(S.String), Subnet: S.optional(S.String), SubnetAvailabilityZone: S.optional(S.String), CurrentAssociatedNetworkAcl: S.optional(S.String), EntryViolations: S.optional(EntryViolations)}) {}
export const EntriesDescription = S.Array(EntryDescription);
export class StatefulRuleGroup extends S.Class<StatefulRuleGroup>("StatefulRuleGroup")({RuleGroupName: S.optional(S.String), ResourceId: S.optional(S.String), Priority: S.optional(S.Number), Override: S.optional(NetworkFirewallStatefulRuleGroupOverride)}) {}
export const StatefulRuleGroupList = S.Array(StatefulRuleGroup);
export class ActionTarget extends S.Class<ActionTarget>("ActionTarget")({ResourceId: S.optional(S.String), Description: S.optional(S.String)}) {}
export class EC2ReplaceRouteAction extends S.Class<EC2ReplaceRouteAction>("EC2ReplaceRouteAction")({Description: S.optional(S.String), DestinationCidrBlock: S.optional(S.String), DestinationPrefixListId: S.optional(S.String), DestinationIpv6CidrBlock: S.optional(S.String), GatewayId: S.optional(ActionTarget), RouteTableId: ActionTarget}) {}
export class EC2DeleteRouteAction extends S.Class<EC2DeleteRouteAction>("EC2DeleteRouteAction")({Description: S.optional(S.String), DestinationCidrBlock: S.optional(S.String), DestinationPrefixListId: S.optional(S.String), DestinationIpv6CidrBlock: S.optional(S.String), RouteTableId: ActionTarget}) {}
export class EC2CopyRouteTableAction extends S.Class<EC2CopyRouteTableAction>("EC2CopyRouteTableAction")({Description: S.optional(S.String), VpcId: ActionTarget, RouteTableId: ActionTarget}) {}
export class EC2ReplaceRouteTableAssociationAction extends S.Class<EC2ReplaceRouteTableAssociationAction>("EC2ReplaceRouteTableAssociationAction")({Description: S.optional(S.String), AssociationId: ActionTarget, RouteTableId: ActionTarget}) {}
export class EC2AssociateRouteTableAction extends S.Class<EC2AssociateRouteTableAction>("EC2AssociateRouteTableAction")({Description: S.optional(S.String), RouteTableId: ActionTarget, SubnetId: S.optional(ActionTarget), GatewayId: S.optional(ActionTarget)}) {}
export class EC2CreateRouteTableAction extends S.Class<EC2CreateRouteTableAction>("EC2CreateRouteTableAction")({Description: S.optional(S.String), VpcId: ActionTarget}) {}
export class FMSPolicyUpdateFirewallCreationConfigAction extends S.Class<FMSPolicyUpdateFirewallCreationConfigAction>("FMSPolicyUpdateFirewallCreationConfigAction")({Description: S.optional(S.String), FirewallCreationConfig: S.optional(S.String)}) {}
export class CreateNetworkAclAction extends S.Class<CreateNetworkAclAction>("CreateNetworkAclAction")({Description: S.optional(S.String), Vpc: S.optional(ActionTarget), FMSCanRemediate: S.optional(S.Boolean)}) {}
export class ReplaceNetworkAclAssociationAction extends S.Class<ReplaceNetworkAclAssociationAction>("ReplaceNetworkAclAssociationAction")({Description: S.optional(S.String), AssociationId: S.optional(ActionTarget), NetworkAclId: S.optional(ActionTarget), FMSCanRemediate: S.optional(S.Boolean)}) {}
export class CreateNetworkAclEntriesAction extends S.Class<CreateNetworkAclEntriesAction>("CreateNetworkAclEntriesAction")({Description: S.optional(S.String), NetworkAclId: S.optional(ActionTarget), NetworkAclEntriesToBeCreated: S.optional(EntriesDescription), FMSCanRemediate: S.optional(S.Boolean)}) {}
export class DeleteNetworkAclEntriesAction extends S.Class<DeleteNetworkAclEntriesAction>("DeleteNetworkAclEntriesAction")({Description: S.optional(S.String), NetworkAclId: S.optional(ActionTarget), NetworkAclEntriesToBeDeleted: S.optional(EntriesDescription), FMSCanRemediate: S.optional(S.Boolean)}) {}
export class NetworkFirewallPolicyDescription extends S.Class<NetworkFirewallPolicyDescription>("NetworkFirewallPolicyDescription")({StatelessRuleGroups: S.optional(StatelessRuleGroupList), StatelessDefaultActions: S.optional(NetworkFirewallActionList), StatelessFragmentDefaultActions: S.optional(NetworkFirewallActionList), StatelessCustomActions: S.optional(NetworkFirewallActionList), StatefulRuleGroups: S.optional(StatefulRuleGroupList), StatefulDefaultActions: S.optional(NetworkFirewallActionList), StatefulEngineOptions: S.optional(StatefulEngineOptions)}) {}
export class NetworkFirewallPolicyModifiedViolation extends S.Class<NetworkFirewallPolicyModifiedViolation>("NetworkFirewallPolicyModifiedViolation")({ViolationTarget: S.optional(S.String), CurrentPolicyDescription: S.optional(NetworkFirewallPolicyDescription), ExpectedPolicyDescription: S.optional(NetworkFirewallPolicyDescription)}) {}
export class EC2CreateRouteAction extends S.Class<EC2CreateRouteAction>("EC2CreateRouteAction")({Description: S.optional(S.String), DestinationCidrBlock: S.optional(S.String), DestinationPrefixListId: S.optional(S.String), DestinationIpv6CidrBlock: S.optional(S.String), VpcEndpointId: S.optional(ActionTarget), GatewayId: S.optional(ActionTarget), RouteTableId: ActionTarget}) {}
export class RemediationAction extends S.Class<RemediationAction>("RemediationAction")({Description: S.optional(S.String), EC2CreateRouteAction: S.optional(EC2CreateRouteAction), EC2ReplaceRouteAction: S.optional(EC2ReplaceRouteAction), EC2DeleteRouteAction: S.optional(EC2DeleteRouteAction), EC2CopyRouteTableAction: S.optional(EC2CopyRouteTableAction), EC2ReplaceRouteTableAssociationAction: S.optional(EC2ReplaceRouteTableAssociationAction), EC2AssociateRouteTableAction: S.optional(EC2AssociateRouteTableAction), EC2CreateRouteTableAction: S.optional(EC2CreateRouteTableAction), FMSPolicyUpdateFirewallCreationConfigAction: S.optional(FMSPolicyUpdateFirewallCreationConfigAction), CreateNetworkAclAction: S.optional(CreateNetworkAclAction), ReplaceNetworkAclAssociationAction: S.optional(ReplaceNetworkAclAssociationAction), CreateNetworkAclEntriesAction: S.optional(CreateNetworkAclEntriesAction), DeleteNetworkAclEntriesAction: S.optional(DeleteNetworkAclEntriesAction)}) {}
export class RemediationActionWithOrder extends S.Class<RemediationActionWithOrder>("RemediationActionWithOrder")({RemediationAction: S.optional(RemediationAction), Order: S.optional(S.Number)}) {}
export const OrderedRemediationActions = S.Array(RemediationActionWithOrder);
export class PutPolicyRequest extends S.Class<PutPolicyRequest>("PutPolicyRequest")({Policy: Policy, TagList: S.optional(TagList)}) {}
export class PossibleRemediationAction extends S.Class<PossibleRemediationAction>("PossibleRemediationAction")({Description: S.optional(S.String), OrderedRemediationActions: OrderedRemediationActions, IsDefaultAction: S.optional(S.Boolean)}) {}
export const PossibleRemediationActionList = S.Array(PossibleRemediationAction);
export class PossibleRemediationActions extends S.Class<PossibleRemediationActions>("PossibleRemediationActions")({Description: S.optional(S.String), Actions: S.optional(PossibleRemediationActionList)}) {}
export class PutPolicyResponse extends S.Class<PutPolicyResponse>("PutPolicyResponse")({Policy: S.optional(Policy), PolicyArn: S.optional(S.String)}) {}
export class ResourceViolation extends S.Class<ResourceViolation>("ResourceViolation")({AwsVPCSecurityGroupViolation: S.optional(AwsVPCSecurityGroupViolation), AwsEc2NetworkInterfaceViolation: S.optional(AwsEc2NetworkInterfaceViolation), AwsEc2InstanceViolation: S.optional(AwsEc2InstanceViolation), NetworkFirewallMissingFirewallViolation: S.optional(NetworkFirewallMissingFirewallViolation), NetworkFirewallMissingSubnetViolation: S.optional(NetworkFirewallMissingSubnetViolation), NetworkFirewallMissingExpectedRTViolation: S.optional(NetworkFirewallMissingExpectedRTViolation), NetworkFirewallPolicyModifiedViolation: S.optional(NetworkFirewallPolicyModifiedViolation), NetworkFirewallInternetTrafficNotInspectedViolation: S.optional(NetworkFirewallInternetTrafficNotInspectedViolation), NetworkFirewallInvalidRouteConfigurationViolation: S.optional(NetworkFirewallInvalidRouteConfigurationViolation), NetworkFirewallBlackHoleRouteDetectedViolation: S.optional(NetworkFirewallBlackHoleRouteDetectedViolation), NetworkFirewallUnexpectedFirewallRoutesViolation: S.optional(NetworkFirewallUnexpectedFirewallRoutesViolation), NetworkFirewallUnexpectedGatewayRoutesViolation: S.optional(NetworkFirewallUnexpectedGatewayRoutesViolation), NetworkFirewallMissingExpectedRoutesViolation: S.optional(NetworkFirewallMissingExpectedRoutesViolation), DnsRuleGroupPriorityConflictViolation: S.optional(DnsRuleGroupPriorityConflictViolation), DnsDuplicateRuleGroupViolation: S.optional(DnsDuplicateRuleGroupViolation), DnsRuleGroupLimitExceededViolation: S.optional(DnsRuleGroupLimitExceededViolation), FirewallSubnetIsOutOfScopeViolation: S.optional(FirewallSubnetIsOutOfScopeViolation), RouteHasOutOfScopeEndpointViolation: S.optional(RouteHasOutOfScopeEndpointViolation), ThirdPartyFirewallMissingFirewallViolation: S.optional(ThirdPartyFirewallMissingFirewallViolation), ThirdPartyFirewallMissingSubnetViolation: S.optional(ThirdPartyFirewallMissingSubnetViolation), ThirdPartyFirewallMissingExpectedRouteTableViolation: S.optional(ThirdPartyFirewallMissingExpectedRouteTableViolation), FirewallSubnetMissingVPCEndpointViolation: S.optional(FirewallSubnetMissingVPCEndpointViolation), InvalidNetworkAclEntriesViolation: S.optional(InvalidNetworkAclEntriesViolation), PossibleRemediationActions: S.optional(PossibleRemediationActions), WebACLHasIncompatibleConfigurationViolation: S.optional(WebACLHasIncompatibleConfigurationViolation), WebACLHasOutOfScopeResourcesViolation: S.optional(WebACLHasOutOfScopeResourcesViolation)}) {}
export const ResourceViolations = S.Array(ResourceViolation);
export class ViolationDetail extends S.Class<ViolationDetail>("ViolationDetail")({PolicyId: S.String, MemberAccount: S.String, ResourceId: S.String, ResourceType: S.String, ResourceViolations: ResourceViolations, ResourceTags: S.optional(TagList), ResourceDescription: S.optional(S.String)}) {}
export class GetViolationDetailsResponse extends S.Class<GetViolationDetailsResponse>("GetViolationDetailsResponse")({ViolationDetail: S.optional(ViolationDetail)}) {}

//# Errors
export class InternalErrorException extends S.TaggedError<InternalErrorException>()("InternalErrorException", {}) {};
export class InvalidOperationException extends S.TaggedError<InvalidOperationException>()("InvalidOperationException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class InvalidInputException extends S.TaggedError<InvalidInputException>()("InvalidInputException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class InvalidTypeException extends S.TaggedError<InvalidTypeException>()("InvalidTypeException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes an Firewall Manager association with the IAM role and the Amazon Simple
 * Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
 */export const deleteNotificationChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.DeleteNotificationChannel" }, DeleteNotificationChannelRequest, S.Struct({}), [InternalErrorException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Permanently deletes an Firewall Manager protocols list.
 */export const deleteProtocolsList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.DeleteProtocolsList" }, DeleteProtocolsListRequest, S.Struct({}), [InternalErrorException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified ResourceSet.
 */export const deleteResourceSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.DeleteResourceSet" }, DeleteResourceSetRequest, S.Struct({}), [InternalErrorException, InvalidInputException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a PutAdminAccount request. To set an account as a default administrator account, you must submit an AssociateAdminAccount request.
 * 
 * 
 * Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.
 */export const disassociateAdminAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.DisassociateAdminAccount" }, DisassociateAdminAccountRequest, S.Struct({}), [InternalErrorException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the Organizations account that is associated with Firewall Manager
 * as the Firewall Manager default administrator.
 */export const getAdminAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.GetAdminAccount" }, GetAdminAccountRequest, GetAdminAccountResponse, [InternalErrorException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Information
 * about the Amazon Simple Notification Service (SNS) topic that is used to
 * record Firewall Manager SNS logs.
 */export const getNotificationChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.GetNotificationChannel" }, GetNotificationChannelRequest, GetNotificationChannelResponse, [InternalErrorException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Designates the IAM role and Amazon Simple Notification Service (SNS) topic that
 * Firewall Manager uses to record SNS logs.
 * 
 * 
 * To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the `SnsRoleName` to publish SNS logs. If the `SnsRoleName` provided is a role other than the `AWSServiceRoleForFMS` service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal `fms.amazonaws.com` to assume this role. For information about configuring an SNS access policy, see
 * Service roles for Firewall Manager in the *Firewall Manager Developer Guide*.
 */export const putNotificationChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.PutNotificationChannel" }, PutNotificationChannelRequest, S.Struct({}), [InternalErrorException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more tags to an Amazon Web Services resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more tags from an Amazon Web Services resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.
 * 
 * 
 * For information about working with Firewall Manager administrator accounts, see Managing Firewall Manager administrators in the *Firewall Manager Developer Guide*.
 */export const associateAdminAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.AssociateAdminAccount" }, AssociateAdminAccountRequest, S.Struct({}), [InternalErrorException, InvalidInputException, InvalidOperationException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.
 */export const associateThirdPartyFirewall = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.AssociateThirdPartyFirewall" }, AssociateThirdPartyFirewallRequest, AssociateThirdPartyFirewallResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates resources from a Firewall Manager resource set.
 */export const batchDisassociateResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.BatchDisassociateResource" }, BatchDisassociateResourceRequest, BatchDisassociateResourceResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Permanently deletes an Firewall Manager applications list.
 */export const deleteAppsList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.DeleteAppsList" }, DeleteAppsListRequest, S.Struct({}), [InternalErrorException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Permanently deletes an Firewall Manager policy.
 */export const deletePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.DeletePolicy" }, DeletePolicyRequest, S.Struct({}), [InternalErrorException, InvalidInputException, InvalidOperationException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call `DisassociateThirdPartyFirewall`, the third-party firewall vendor deletes all of the firewalls that are associated with the account.
 */export const disassociateThirdPartyFirewall = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.DisassociateThirdPartyFirewall" }, DisassociateThirdPartyFirewallRequest, DisassociateThirdPartyFirewallResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the specified account's administrative scope. The administrative scope defines the resources that an Firewall Manager administrator can manage.
 */export const getAdminScope = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.GetAdminScope" }, GetAdminScopeRequest, GetAdminScopeResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the specified Firewall Manager applications list.
 */export const getAppsList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.GetAppsList" }, GetAppsListRequest, GetAppsListResponse, [InternalErrorException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * If you created a Shield Advanced policy, returns policy-level attack summary information
 * in the event of a potential DDoS attack. Other policy types are currently unsupported.
 */export const getProtectionStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.GetProtectionStatus" }, GetProtectionStatusRequest, GetProtectionStatusResponse, [InternalErrorException, InvalidInputException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the specified Firewall Manager protocols list.
 */export const getProtocolsList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.GetProtocolsList" }, GetProtocolsListRequest, GetProtocolsListResponse, [InternalErrorException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a specific resource set.
 */export const getResourceSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.GetResourceSet" }, GetResourceSetRequest, GetResourceSetResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.
 */export const getThirdPartyFirewallAssociationStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus" }, GetThirdPartyFirewallAssociationStatusRequest, GetThirdPartyFirewallAssociationStatusResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their AdminScope.
 */export const listAdminsManagingAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.ListAdminsManagingAccount" }, ListAdminsManagingAccountRequest, ListAdminsManagingAccountResponse, [InternalErrorException, InvalidInputException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a `MemberAccounts` object that lists the member accounts in the
 * administrator's Amazon Web Services organization.
 * 
 * 
 * Either an Firewall Manager administrator or the organization's management account can make this request.
 */export const listMemberAccounts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.ListMemberAccounts" }, ListMemberAccountsRequest, ListMemberAccountsResponse, [InternalErrorException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the list of tags for the specified Amazon Web Services resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associate resources to a Firewall Manager resource set.
 */export const batchAssociateResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.BatchAssociateResource" }, BatchAssociateResourceRequest, BatchAssociateResourceResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the specified Firewall Manager policy.
 */export const getPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.GetPolicy" }, GetPolicyRequest, GetPolicyResponse, [InternalErrorException, InvalidOperationException, InvalidTypeException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a `AdminAccounts` object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by AssociateAdminAccount.
 * 
 * 
 * This operation can be called only from the organization's management account.
 */export const listAdminAccountsForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.ListAdminAccountsForOrganization" }, ListAdminAccountsForOrganizationRequest, ListAdminAccountsForOrganizationResponse, [InternalErrorException, InvalidOperationException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array of `AppsListDataSummary` objects.
 */export const listAppsLists = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.ListAppsLists" }, ListAppsListsRequest, ListAppsListsResponse, [InternalErrorException, InvalidOperationException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array of resources in the organization's accounts that are available to be associated with a resource set.
 */export const listDiscoveredResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.ListDiscoveredResources" }, ListDiscoveredResourcesRequest, ListDiscoveredResourcesResponse, [InternalErrorException, InvalidInputException, InvalidOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array of `PolicySummary` objects.
 */export const listPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.ListPolicies" }, ListPoliciesRequest, ListPoliciesResponse, [InternalErrorException, InvalidOperationException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array of `ProtocolsListDataSummary` objects.
 */export const listProtocolsLists = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.ListProtocolsLists" }, ListProtocolsListsRequest, ListProtocolsListsResponse, [InternalErrorException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array of resources that are currently associated to a resource set.
 */export const listResourceSetResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.ListResourceSetResources" }, ListResourceSetResourcesRequest, ListResourceSetResourcesResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array of `ResourceSetSummary` objects.
 */export const listResourceSets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.ListResourceSets" }, ListResourceSetsRequest, ListResourceSetsResponse, [InternalErrorException, InvalidInputException, InvalidOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.
 */export const listThirdPartyFirewallFirewallPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies" }, ListThirdPartyFirewallFirewallPoliciesRequest, ListThirdPartyFirewallFirewallPoliciesResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by AssociateAdminAccount. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see
 * Managing the Amazon Web Services Accounts in Your Organization.
 */export const putAdminAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.PutAdminAccount" }, PutAdminAccountRequest, S.Struct({}), [InternalErrorException, InvalidInputException, InvalidOperationException, LimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates the resource set.
 * 
 * 
 * An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.
 */export const putResourceSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.PutResourceSet" }, PutResourceSetRequest, PutResourceSetResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, LimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array of `PolicyComplianceStatus` objects. Use
 * `PolicyComplianceStatus` to get a summary of which member accounts are protected
 * by the specified policy.
 */export const listComplianceStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.ListComplianceStatus" }, ListComplianceStatusRequest, ListComplianceStatusResponse, [InternalErrorException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Firewall Manager applications list.
 */export const putAppsList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.PutAppsList" }, PutAppsListRequest, PutAppsListResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Firewall Manager protocols list.
 */export const putProtocolsList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.PutProtocolsList" }, PutProtocolsListRequest, PutProtocolsListResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns detailed compliance information about the specified member account. Details
 * include resources that are in and out of compliance with the specified policy.
 * 
 * 
 * The reasons for resources being considered compliant depend on the Firewall Manager policy type.
 */export const getComplianceDetail = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.GetComplianceDetail" }, GetComplianceDetailRequest, GetComplianceDetailResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Firewall Manager policy.
 * 
 * 
 * A Firewall Manager policy is specific to the individual policy type. If you want to enforce multiple
 * policy types across accounts, you can create multiple policies. You can create more than one
 * policy for each type.
 * 
 * 
 * If you add a new account to an organization that you created with Organizations, Firewall Manager
 * automatically applies the policy to the resources in that account that are within scope of
 * the policy.
 * 
 * 
 * Firewall Manager provides the following types of policies:
 * 
 * 
 * 
 * - **WAF policy** - This policy applies WAF web ACL
 * protections to specified accounts and resources.
 * 
 * 
 * 
 * - **Shield Advanced policy** - This policy applies Shield Advanced
 * protection to specified accounts and resources.
 * 
 * 
 * 
 * - **Security Groups policy** - This type of policy gives you
 * control over security groups that are in use throughout your organization in
 * Organizations and lets you enforce a baseline set of rules across your organization.
 * 
 * 
 * 
 * - **Network ACL policy** - This type of policy gives you
 * control over the network ACLs that are in use throughout your organization in
 * Organizations and lets you enforce a baseline set of first and last network ACL rules across your organization.
 * 
 * 
 * 
 * - **Network Firewall policy** - This policy applies
 * Network Firewall protection to your organization's VPCs.
 * 
 * 
 * 
 * - **DNS Firewall policy** - This policy applies
 * Amazon Route 53 Resolver DNS Firewall protections to your organization's VPCs.
 * 
 * 
 * 
 * - **Third-party firewall policy** - This policy applies third-party firewall protections. Third-party firewalls are available by subscription through the Amazon Web Services Marketplace console at Amazon Web Services Marketplace.
 * 
 * 
 * 
 * - **Palo Alto Networks Cloud NGFW policy** - This policy applies Palo Alto Networks Cloud Next Generation Firewall (NGFW) protections and Palo Alto Networks Cloud NGFW rulestacks to your organization's VPCs.
 * 
 * 
 * 
 * - **Fortigate CNF policy** - This policy applies
 * Fortigate Cloud Native Firewall (CNF) protections. Fortigate CNF is a cloud-centered solution that blocks Zero-Day threats and secures cloud infrastructures with industry-leading advanced threat prevention, smart web application firewalls (WAF), and API protection.
 */export const putPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.PutPolicy" }, PutPolicyRequest, PutPolicyResponse, [InternalErrorException, InvalidInputException, InvalidOperationException, InvalidTypeException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
 */export const getViolationDetails = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-01", uri: "/", method: "POST", sdkId: "FMS", sigV4ServiceName: "fms", name: "AWSFMS_20180101.GetViolationDetails" }, GetViolationDetailsRequest, GetViolationDetailsResponse, [InternalErrorException, InvalidInputException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

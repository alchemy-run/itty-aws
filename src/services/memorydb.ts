import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ClusterNameList = S.Array(S.String);
export const UserNameListInput = S.Array(S.String);
export const SecurityGroupIdsList = S.Array(S.String);
export const SnapshotArnsList = S.Array(S.String);
export const SubnetIdentifierList = S.Array(S.String);
export const ServiceUpdateStatusList = S.Array(S.String);
export const ParameterNameList = S.Array(S.String);
export const KeyList = S.Array(S.String);
export class Tag extends S.Class<Tag>("Tag")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class CreateACLRequest extends S.Class<CreateACLRequest>("CreateACLRequest")({ACLName: S.String, UserNames: S.optional(UserNameListInput), Tags: S.optional(TagList)}) {}
export class CreateClusterRequest extends S.Class<CreateClusterRequest>("CreateClusterRequest")({ClusterName: S.String, NodeType: S.String, MultiRegionClusterName: S.optional(S.String), ParameterGroupName: S.optional(S.String), Description: S.optional(S.String), NumShards: S.optional(S.Number), NumReplicasPerShard: S.optional(S.Number), SubnetGroupName: S.optional(S.String), SecurityGroupIds: S.optional(SecurityGroupIdsList), MaintenanceWindow: S.optional(S.String), Port: S.optional(S.Number), SnsTopicArn: S.optional(S.String), TLSEnabled: S.optional(S.Boolean), KmsKeyId: S.optional(S.String), SnapshotArns: S.optional(SnapshotArnsList), SnapshotName: S.optional(S.String), SnapshotRetentionLimit: S.optional(S.Number), Tags: S.optional(TagList), SnapshotWindow: S.optional(S.String), ACLName: S.String, Engine: S.optional(S.String), EngineVersion: S.optional(S.String), AutoMinorVersionUpgrade: S.optional(S.Boolean), DataTiering: S.optional(S.Boolean), NetworkType: S.optional(S.String), IpDiscovery: S.optional(S.String)}) {}
export class CreateMultiRegionClusterRequest extends S.Class<CreateMultiRegionClusterRequest>("CreateMultiRegionClusterRequest")({MultiRegionClusterNameSuffix: S.String, Description: S.optional(S.String), Engine: S.optional(S.String), EngineVersion: S.optional(S.String), NodeType: S.String, MultiRegionParameterGroupName: S.optional(S.String), NumShards: S.optional(S.Number), TLSEnabled: S.optional(S.Boolean), Tags: S.optional(TagList)}) {}
export class CreateParameterGroupRequest extends S.Class<CreateParameterGroupRequest>("CreateParameterGroupRequest")({ParameterGroupName: S.String, Family: S.String, Description: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class CreateSnapshotRequest extends S.Class<CreateSnapshotRequest>("CreateSnapshotRequest")({ClusterName: S.String, SnapshotName: S.String, KmsKeyId: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class CreateSubnetGroupRequest extends S.Class<CreateSubnetGroupRequest>("CreateSubnetGroupRequest")({SubnetGroupName: S.String, Description: S.optional(S.String), SubnetIds: SubnetIdentifierList, Tags: S.optional(TagList)}) {}
export class DeleteACLRequest extends S.Class<DeleteACLRequest>("DeleteACLRequest")({ACLName: S.String}) {}
export class DeleteClusterRequest extends S.Class<DeleteClusterRequest>("DeleteClusterRequest")({ClusterName: S.String, MultiRegionClusterName: S.optional(S.String), FinalSnapshotName: S.optional(S.String)}) {}
export class DeleteMultiRegionClusterRequest extends S.Class<DeleteMultiRegionClusterRequest>("DeleteMultiRegionClusterRequest")({MultiRegionClusterName: S.String}) {}
export class DeleteParameterGroupRequest extends S.Class<DeleteParameterGroupRequest>("DeleteParameterGroupRequest")({ParameterGroupName: S.String}) {}
export class DeleteSnapshotRequest extends S.Class<DeleteSnapshotRequest>("DeleteSnapshotRequest")({SnapshotName: S.String}) {}
export class DeleteSubnetGroupRequest extends S.Class<DeleteSubnetGroupRequest>("DeleteSubnetGroupRequest")({SubnetGroupName: S.String}) {}
export class DeleteUserRequest extends S.Class<DeleteUserRequest>("DeleteUserRequest")({UserName: S.String}) {}
export class DescribeACLsRequest extends S.Class<DescribeACLsRequest>("DescribeACLsRequest")({ACLName: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeClustersRequest extends S.Class<DescribeClustersRequest>("DescribeClustersRequest")({ClusterName: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ShowShardDetails: S.optional(S.Boolean)}) {}
export class DescribeEngineVersionsRequest extends S.Class<DescribeEngineVersionsRequest>("DescribeEngineVersionsRequest")({Engine: S.optional(S.String), EngineVersion: S.optional(S.String), ParameterGroupFamily: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), DefaultOnly: S.optional(S.Boolean)}) {}
export class DescribeEventsRequest extends S.Class<DescribeEventsRequest>("DescribeEventsRequest")({SourceName: S.optional(S.String), SourceType: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Duration: S.optional(S.Number), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeMultiRegionClustersRequest extends S.Class<DescribeMultiRegionClustersRequest>("DescribeMultiRegionClustersRequest")({MultiRegionClusterName: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ShowClusterDetails: S.optional(S.Boolean)}) {}
export class DescribeMultiRegionParameterGroupsRequest extends S.Class<DescribeMultiRegionParameterGroupsRequest>("DescribeMultiRegionParameterGroupsRequest")({MultiRegionParameterGroupName: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeMultiRegionParametersRequest extends S.Class<DescribeMultiRegionParametersRequest>("DescribeMultiRegionParametersRequest")({MultiRegionParameterGroupName: S.String, Source: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeParameterGroupsRequest extends S.Class<DescribeParameterGroupsRequest>("DescribeParameterGroupsRequest")({ParameterGroupName: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeParametersRequest extends S.Class<DescribeParametersRequest>("DescribeParametersRequest")({ParameterGroupName: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeReservedNodesRequest extends S.Class<DescribeReservedNodesRequest>("DescribeReservedNodesRequest")({ReservationId: S.optional(S.String), ReservedNodesOfferingId: S.optional(S.String), NodeType: S.optional(S.String), Duration: S.optional(S.String), OfferingType: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeReservedNodesOfferingsRequest extends S.Class<DescribeReservedNodesOfferingsRequest>("DescribeReservedNodesOfferingsRequest")({ReservedNodesOfferingId: S.optional(S.String), NodeType: S.optional(S.String), Duration: S.optional(S.String), OfferingType: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeServiceUpdatesRequest extends S.Class<DescribeServiceUpdatesRequest>("DescribeServiceUpdatesRequest")({ServiceUpdateName: S.optional(S.String), ClusterNames: S.optional(ClusterNameList), Status: S.optional(ServiceUpdateStatusList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeSnapshotsRequest extends S.Class<DescribeSnapshotsRequest>("DescribeSnapshotsRequest")({ClusterName: S.optional(S.String), SnapshotName: S.optional(S.String), Source: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), ShowDetail: S.optional(S.Boolean)}) {}
export class DescribeSubnetGroupsRequest extends S.Class<DescribeSubnetGroupsRequest>("DescribeSubnetGroupsRequest")({SubnetGroupName: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class FailoverShardRequest extends S.Class<FailoverShardRequest>("FailoverShardRequest")({ClusterName: S.String, ShardName: S.String}) {}
export class ListAllowedMultiRegionClusterUpdatesRequest extends S.Class<ListAllowedMultiRegionClusterUpdatesRequest>("ListAllowedMultiRegionClusterUpdatesRequest")({MultiRegionClusterName: S.String}) {}
export class ListAllowedNodeTypeUpdatesRequest extends S.Class<ListAllowedNodeTypeUpdatesRequest>("ListAllowedNodeTypeUpdatesRequest")({ClusterName: S.String}) {}
export class ListTagsRequest extends S.Class<ListTagsRequest>("ListTagsRequest")({ResourceArn: S.String}) {}
export class PurchaseReservedNodesOfferingRequest extends S.Class<PurchaseReservedNodesOfferingRequest>("PurchaseReservedNodesOfferingRequest")({ReservedNodesOfferingId: S.String, ReservationId: S.optional(S.String), NodeCount: S.optional(S.Number), Tags: S.optional(TagList)}) {}
export class ResetParameterGroupRequest extends S.Class<ResetParameterGroupRequest>("ResetParameterGroupRequest")({ParameterGroupName: S.String, AllParameters: S.optional(S.Boolean), ParameterNames: S.optional(ParameterNameList)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: KeyList}) {}
export class UpdateACLRequest extends S.Class<UpdateACLRequest>("UpdateACLRequest")({ACLName: S.String, UserNamesToAdd: S.optional(UserNameListInput), UserNamesToRemove: S.optional(UserNameListInput)}) {}
export class ShardConfigurationRequest extends S.Class<ShardConfigurationRequest>("ShardConfigurationRequest")({ShardCount: S.optional(S.Number)}) {}
export class UpdateMultiRegionClusterRequest extends S.Class<UpdateMultiRegionClusterRequest>("UpdateMultiRegionClusterRequest")({MultiRegionClusterName: S.String, NodeType: S.optional(S.String), Description: S.optional(S.String), EngineVersion: S.optional(S.String), ShardConfiguration: S.optional(ShardConfigurationRequest), MultiRegionParameterGroupName: S.optional(S.String), UpdateStrategy: S.optional(S.String)}) {}
export class UpdateSubnetGroupRequest extends S.Class<UpdateSubnetGroupRequest>("UpdateSubnetGroupRequest")({SubnetGroupName: S.String, Description: S.optional(S.String), SubnetIds: S.optional(SubnetIdentifierList)}) {}
export const PasswordListInput = S.Array(S.String);
export class AuthenticationMode extends S.Class<AuthenticationMode>("AuthenticationMode")({Type: S.optional(S.String), Passwords: S.optional(PasswordListInput)}) {}
export class UpdateUserRequest extends S.Class<UpdateUserRequest>("UpdateUserRequest")({UserName: S.String, AuthenticationMode: S.optional(AuthenticationMode), AccessString: S.optional(S.String)}) {}
export const FilterValueList = S.Array(S.String);
export class ServiceUpdateRequest extends S.Class<ServiceUpdateRequest>("ServiceUpdateRequest")({ServiceUpdateNameToApply: S.optional(S.String)}) {}
export const UserNameList = S.Array(S.String);
export class ACLPendingChanges extends S.Class<ACLPendingChanges>("ACLPendingChanges")({UserNamesToRemove: S.optional(UserNameList), UserNamesToAdd: S.optional(UserNameList)}) {}
export const ACLClusterNameList = S.Array(S.String);
export class ACL extends S.Class<ACL>("ACL")({Name: S.optional(S.String), Status: S.optional(S.String), UserNames: S.optional(UserNameList), MinimumEngineVersion: S.optional(S.String), PendingChanges: S.optional(ACLPendingChanges), Clusters: S.optional(ACLClusterNameList), ARN: S.optional(S.String)}) {}
export const ACLList = S.Array(ACL);
export class SlotMigration extends S.Class<SlotMigration>("SlotMigration")({ProgressPercentage: S.optional(S.Number)}) {}
export class ReshardingStatus extends S.Class<ReshardingStatus>("ReshardingStatus")({SlotMigration: S.optional(SlotMigration)}) {}
export class ACLsUpdateStatus extends S.Class<ACLsUpdateStatus>("ACLsUpdateStatus")({ACLToApply: S.optional(S.String)}) {}
export class PendingModifiedServiceUpdate extends S.Class<PendingModifiedServiceUpdate>("PendingModifiedServiceUpdate")({ServiceUpdateName: S.optional(S.String), Status: S.optional(S.String)}) {}
export const PendingModifiedServiceUpdateList = S.Array(PendingModifiedServiceUpdate);
export class ClusterPendingUpdates extends S.Class<ClusterPendingUpdates>("ClusterPendingUpdates")({Resharding: S.optional(ReshardingStatus), ACLs: S.optional(ACLsUpdateStatus), ServiceUpdates: S.optional(PendingModifiedServiceUpdateList)}) {}
export class Endpoint extends S.Class<Endpoint>("Endpoint")({Address: S.optional(S.String), Port: S.optional(S.Number)}) {}
export class Node extends S.Class<Node>("Node")({Name: S.optional(S.String), Status: S.optional(S.String), AvailabilityZone: S.optional(S.String), CreateTime: S.optional(S.Date), Endpoint: S.optional(Endpoint)}) {}
export const NodeList = S.Array(Node);
export class Shard extends S.Class<Shard>("Shard")({Name: S.optional(S.String), Status: S.optional(S.String), Slots: S.optional(S.String), Nodes: S.optional(NodeList), NumberOfNodes: S.optional(S.Number)}) {}
export const ShardList = S.Array(Shard);
export class SecurityGroupMembership extends S.Class<SecurityGroupMembership>("SecurityGroupMembership")({SecurityGroupId: S.optional(S.String), Status: S.optional(S.String)}) {}
export const SecurityGroupMembershipList = S.Array(SecurityGroupMembership);
export class Cluster extends S.Class<Cluster>("Cluster")({Name: S.optional(S.String), Description: S.optional(S.String), Status: S.optional(S.String), PendingUpdates: S.optional(ClusterPendingUpdates), MultiRegionClusterName: S.optional(S.String), NumberOfShards: S.optional(S.Number), Shards: S.optional(ShardList), AvailabilityMode: S.optional(S.String), ClusterEndpoint: S.optional(Endpoint), NodeType: S.optional(S.String), Engine: S.optional(S.String), EngineVersion: S.optional(S.String), EnginePatchVersion: S.optional(S.String), ParameterGroupName: S.optional(S.String), ParameterGroupStatus: S.optional(S.String), SecurityGroups: S.optional(SecurityGroupMembershipList), SubnetGroupName: S.optional(S.String), TLSEnabled: S.optional(S.Boolean), KmsKeyId: S.optional(S.String), ARN: S.optional(S.String), SnsTopicArn: S.optional(S.String), SnsTopicStatus: S.optional(S.String), SnapshotRetentionLimit: S.optional(S.Number), MaintenanceWindow: S.optional(S.String), SnapshotWindow: S.optional(S.String), ACLName: S.optional(S.String), AutoMinorVersionUpgrade: S.optional(S.Boolean), DataTiering: S.optional(S.String), NetworkType: S.optional(S.String), IpDiscovery: S.optional(S.String)}) {}
export const ClusterList = S.Array(Cluster);
export class RegionalCluster extends S.Class<RegionalCluster>("RegionalCluster")({ClusterName: S.optional(S.String), Region: S.optional(S.String), Status: S.optional(S.String), ARN: S.optional(S.String)}) {}
export const RegionalClusterList = S.Array(RegionalCluster);
export class MultiRegionCluster extends S.Class<MultiRegionCluster>("MultiRegionCluster")({MultiRegionClusterName: S.optional(S.String), Description: S.optional(S.String), Status: S.optional(S.String), NodeType: S.optional(S.String), Engine: S.optional(S.String), EngineVersion: S.optional(S.String), NumberOfShards: S.optional(S.Number), Clusters: S.optional(RegionalClusterList), MultiRegionParameterGroupName: S.optional(S.String), TLSEnabled: S.optional(S.Boolean), ARN: S.optional(S.String)}) {}
export const MultiRegionClusterList = S.Array(MultiRegionCluster);
export class ParameterGroup extends S.Class<ParameterGroup>("ParameterGroup")({Name: S.optional(S.String), Family: S.optional(S.String), Description: S.optional(S.String), ARN: S.optional(S.String)}) {}
export const ParameterGroupList = S.Array(ParameterGroup);
export class ShardConfiguration extends S.Class<ShardConfiguration>("ShardConfiguration")({Slots: S.optional(S.String), ReplicaCount: S.optional(S.Number)}) {}
export class ShardDetail extends S.Class<ShardDetail>("ShardDetail")({Name: S.optional(S.String), Configuration: S.optional(ShardConfiguration), Size: S.optional(S.String), SnapshotCreationTime: S.optional(S.Date)}) {}
export const ShardDetails = S.Array(ShardDetail);
export class ClusterConfiguration extends S.Class<ClusterConfiguration>("ClusterConfiguration")({Name: S.optional(S.String), Description: S.optional(S.String), NodeType: S.optional(S.String), Engine: S.optional(S.String), EngineVersion: S.optional(S.String), MaintenanceWindow: S.optional(S.String), TopicArn: S.optional(S.String), Port: S.optional(S.Number), ParameterGroupName: S.optional(S.String), SubnetGroupName: S.optional(S.String), VpcId: S.optional(S.String), SnapshotRetentionLimit: S.optional(S.Number), SnapshotWindow: S.optional(S.String), NumShards: S.optional(S.Number), Shards: S.optional(ShardDetails), MultiRegionParameterGroupName: S.optional(S.String), MultiRegionClusterName: S.optional(S.String)}) {}
export class Snapshot extends S.Class<Snapshot>("Snapshot")({Name: S.optional(S.String), Status: S.optional(S.String), Source: S.optional(S.String), KmsKeyId: S.optional(S.String), ARN: S.optional(S.String), ClusterConfiguration: S.optional(ClusterConfiguration), DataTiering: S.optional(S.String)}) {}
export const SnapshotList = S.Array(Snapshot);
export class AvailabilityZone extends S.Class<AvailabilityZone>("AvailabilityZone")({Name: S.optional(S.String)}) {}
export const NetworkTypeList = S.Array(S.String);
export class Subnet extends S.Class<Subnet>("Subnet")({Identifier: S.optional(S.String), AvailabilityZone: S.optional(AvailabilityZone), SupportedNetworkTypes: S.optional(NetworkTypeList)}) {}
export const SubnetList = S.Array(Subnet);
export class SubnetGroup extends S.Class<SubnetGroup>("SubnetGroup")({Name: S.optional(S.String), Description: S.optional(S.String), VpcId: S.optional(S.String), Subnets: S.optional(SubnetList), ARN: S.optional(S.String), SupportedNetworkTypes: S.optional(NetworkTypeList)}) {}
export const SubnetGroupList = S.Array(SubnetGroup);
export class Filter extends S.Class<Filter>("Filter")({Name: S.String, Values: FilterValueList}) {}
export const FilterList = S.Array(Filter);
export const NodeTypeList = S.Array(S.String);
export class ReplicaConfigurationRequest extends S.Class<ReplicaConfigurationRequest>("ReplicaConfigurationRequest")({ReplicaCount: S.optional(S.Number)}) {}
export class ParameterNameValue extends S.Class<ParameterNameValue>("ParameterNameValue")({ParameterName: S.optional(S.String), ParameterValue: S.optional(S.String)}) {}
export const ParameterNameValueList = S.Array(ParameterNameValue);
export class BatchUpdateClusterRequest extends S.Class<BatchUpdateClusterRequest>("BatchUpdateClusterRequest")({ClusterNames: ClusterNameList, ServiceUpdate: S.optional(ServiceUpdateRequest)}) {}
export class CopySnapshotRequest extends S.Class<CopySnapshotRequest>("CopySnapshotRequest")({SourceSnapshotName: S.String, TargetSnapshotName: S.String, TargetBucket: S.optional(S.String), KmsKeyId: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class CreateUserRequest extends S.Class<CreateUserRequest>("CreateUserRequest")({UserName: S.String, AuthenticationMode: AuthenticationMode, AccessString: S.String, Tags: S.optional(TagList)}) {}
export class DeleteACLResponse extends S.Class<DeleteACLResponse>("DeleteACLResponse")({ACL: S.optional(ACL)}) {}
export class DeleteClusterResponse extends S.Class<DeleteClusterResponse>("DeleteClusterResponse")({Cluster: S.optional(Cluster)}) {}
export class DeleteMultiRegionClusterResponse extends S.Class<DeleteMultiRegionClusterResponse>("DeleteMultiRegionClusterResponse")({MultiRegionCluster: S.optional(MultiRegionCluster)}) {}
export class DeleteParameterGroupResponse extends S.Class<DeleteParameterGroupResponse>("DeleteParameterGroupResponse")({ParameterGroup: S.optional(ParameterGroup)}) {}
export class DeleteSnapshotResponse extends S.Class<DeleteSnapshotResponse>("DeleteSnapshotResponse")({Snapshot: S.optional(Snapshot)}) {}
export class DeleteSubnetGroupResponse extends S.Class<DeleteSubnetGroupResponse>("DeleteSubnetGroupResponse")({SubnetGroup: S.optional(SubnetGroup)}) {}
export class DescribeACLsResponse extends S.Class<DescribeACLsResponse>("DescribeACLsResponse")({ACLs: S.optional(ACLList), NextToken: S.optional(S.String)}) {}
export class DescribeClustersResponse extends S.Class<DescribeClustersResponse>("DescribeClustersResponse")({NextToken: S.optional(S.String), Clusters: S.optional(ClusterList)}) {}
export class DescribeMultiRegionClustersResponse extends S.Class<DescribeMultiRegionClustersResponse>("DescribeMultiRegionClustersResponse")({NextToken: S.optional(S.String), MultiRegionClusters: S.optional(MultiRegionClusterList)}) {}
export class DescribeParameterGroupsResponse extends S.Class<DescribeParameterGroupsResponse>("DescribeParameterGroupsResponse")({NextToken: S.optional(S.String), ParameterGroups: S.optional(ParameterGroupList)}) {}
export class DescribeSnapshotsResponse extends S.Class<DescribeSnapshotsResponse>("DescribeSnapshotsResponse")({NextToken: S.optional(S.String), Snapshots: S.optional(SnapshotList)}) {}
export class DescribeSubnetGroupsResponse extends S.Class<DescribeSubnetGroupsResponse>("DescribeSubnetGroupsResponse")({NextToken: S.optional(S.String), SubnetGroups: S.optional(SubnetGroupList)}) {}
export class DescribeUsersRequest extends S.Class<DescribeUsersRequest>("DescribeUsersRequest")({UserName: S.optional(S.String), Filters: S.optional(FilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class FailoverShardResponse extends S.Class<FailoverShardResponse>("FailoverShardResponse")({Cluster: S.optional(Cluster)}) {}
export class ListAllowedMultiRegionClusterUpdatesResponse extends S.Class<ListAllowedMultiRegionClusterUpdatesResponse>("ListAllowedMultiRegionClusterUpdatesResponse")({ScaleUpNodeTypes: S.optional(NodeTypeList), ScaleDownNodeTypes: S.optional(NodeTypeList)}) {}
export class ListAllowedNodeTypeUpdatesResponse extends S.Class<ListAllowedNodeTypeUpdatesResponse>("ListAllowedNodeTypeUpdatesResponse")({ScaleUpNodeTypes: S.optional(NodeTypeList), ScaleDownNodeTypes: S.optional(NodeTypeList)}) {}
export class ListTagsResponse extends S.Class<ListTagsResponse>("ListTagsResponse")({TagList: S.optional(TagList)}) {}
export class RecurringCharge extends S.Class<RecurringCharge>("RecurringCharge")({RecurringChargeAmount: S.optional(S.Number), RecurringChargeFrequency: S.optional(S.String)}) {}
export const RecurringChargeList = S.Array(RecurringCharge);
export class ReservedNode extends S.Class<ReservedNode>("ReservedNode")({ReservationId: S.optional(S.String), ReservedNodesOfferingId: S.optional(S.String), NodeType: S.optional(S.String), StartTime: S.optional(S.Date), Duration: S.optional(S.Number), FixedPrice: S.optional(S.Number), NodeCount: S.optional(S.Number), OfferingType: S.optional(S.String), State: S.optional(S.String), RecurringCharges: S.optional(RecurringChargeList), ARN: S.optional(S.String)}) {}
export class PurchaseReservedNodesOfferingResponse extends S.Class<PurchaseReservedNodesOfferingResponse>("PurchaseReservedNodesOfferingResponse")({ReservedNode: S.optional(ReservedNode)}) {}
export class ResetParameterGroupResponse extends S.Class<ResetParameterGroupResponse>("ResetParameterGroupResponse")({ParameterGroup: S.optional(ParameterGroup)}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({TagList: S.optional(TagList)}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({TagList: S.optional(TagList)}) {}
export class UpdateACLResponse extends S.Class<UpdateACLResponse>("UpdateACLResponse")({ACL: S.optional(ACL)}) {}
export class UpdateClusterRequest extends S.Class<UpdateClusterRequest>("UpdateClusterRequest")({ClusterName: S.String, Description: S.optional(S.String), SecurityGroupIds: S.optional(SecurityGroupIdsList), MaintenanceWindow: S.optional(S.String), SnsTopicArn: S.optional(S.String), SnsTopicStatus: S.optional(S.String), ParameterGroupName: S.optional(S.String), SnapshotWindow: S.optional(S.String), SnapshotRetentionLimit: S.optional(S.Number), NodeType: S.optional(S.String), Engine: S.optional(S.String), EngineVersion: S.optional(S.String), ReplicaConfiguration: S.optional(ReplicaConfigurationRequest), ShardConfiguration: S.optional(ShardConfigurationRequest), ACLName: S.optional(S.String), IpDiscovery: S.optional(S.String)}) {}
export class UpdateMultiRegionClusterResponse extends S.Class<UpdateMultiRegionClusterResponse>("UpdateMultiRegionClusterResponse")({MultiRegionCluster: S.optional(MultiRegionCluster)}) {}
export class UpdateParameterGroupRequest extends S.Class<UpdateParameterGroupRequest>("UpdateParameterGroupRequest")({ParameterGroupName: S.String, ParameterNameValues: ParameterNameValueList}) {}
export class UpdateSubnetGroupResponse extends S.Class<UpdateSubnetGroupResponse>("UpdateSubnetGroupResponse")({SubnetGroup: S.optional(SubnetGroup)}) {}
export const ACLNameList = S.Array(S.String);
export class Authentication extends S.Class<Authentication>("Authentication")({Type: S.optional(S.String), PasswordCount: S.optional(S.Number)}) {}
export class User extends S.Class<User>("User")({Name: S.optional(S.String), Status: S.optional(S.String), AccessString: S.optional(S.String), ACLNames: S.optional(ACLNameList), MinimumEngineVersion: S.optional(S.String), Authentication: S.optional(Authentication), ARN: S.optional(S.String)}) {}
export class UpdateUserResponse extends S.Class<UpdateUserResponse>("UpdateUserResponse")({User: S.optional(User)}) {}
export class EngineVersionInfo extends S.Class<EngineVersionInfo>("EngineVersionInfo")({Engine: S.optional(S.String), EngineVersion: S.optional(S.String), EnginePatchVersion: S.optional(S.String), ParameterGroupFamily: S.optional(S.String)}) {}
export const EngineVersionInfoList = S.Array(EngineVersionInfo);
export class Event extends S.Class<Event>("Event")({SourceName: S.optional(S.String), SourceType: S.optional(S.String), Message: S.optional(S.String), Date: S.optional(S.Date)}) {}
export const EventList = S.Array(Event);
export class MultiRegionParameterGroup extends S.Class<MultiRegionParameterGroup>("MultiRegionParameterGroup")({Name: S.optional(S.String), Family: S.optional(S.String), Description: S.optional(S.String), ARN: S.optional(S.String)}) {}
export const MultiRegionParameterGroupList = S.Array(MultiRegionParameterGroup);
export class MultiRegionParameter extends S.Class<MultiRegionParameter>("MultiRegionParameter")({Name: S.optional(S.String), Value: S.optional(S.String), Description: S.optional(S.String), Source: S.optional(S.String), DataType: S.optional(S.String), AllowedValues: S.optional(S.String), MinimumEngineVersion: S.optional(S.String)}) {}
export const MultiRegionParametersList = S.Array(MultiRegionParameter);
export class Parameter extends S.Class<Parameter>("Parameter")({Name: S.optional(S.String), Value: S.optional(S.String), Description: S.optional(S.String), DataType: S.optional(S.String), AllowedValues: S.optional(S.String), MinimumEngineVersion: S.optional(S.String)}) {}
export const ParametersList = S.Array(Parameter);
export class ReservedNodesOffering extends S.Class<ReservedNodesOffering>("ReservedNodesOffering")({ReservedNodesOfferingId: S.optional(S.String), NodeType: S.optional(S.String), Duration: S.optional(S.Number), FixedPrice: S.optional(S.Number), OfferingType: S.optional(S.String), RecurringCharges: S.optional(RecurringChargeList)}) {}
export const ReservedNodesOfferingList = S.Array(ReservedNodesOffering);
export class ServiceUpdate extends S.Class<ServiceUpdate>("ServiceUpdate")({ClusterName: S.optional(S.String), ServiceUpdateName: S.optional(S.String), ReleaseDate: S.optional(S.Date), Description: S.optional(S.String), Status: S.optional(S.String), Type: S.optional(S.String), Engine: S.optional(S.String), NodesUpdated: S.optional(S.String), AutoUpdateStartDate: S.optional(S.Date)}) {}
export const ServiceUpdateList = S.Array(ServiceUpdate);
export const UserList = S.Array(User);
export class CopySnapshotResponse extends S.Class<CopySnapshotResponse>("CopySnapshotResponse")({Snapshot: S.optional(Snapshot)}) {}
export class CreateParameterGroupResponse extends S.Class<CreateParameterGroupResponse>("CreateParameterGroupResponse")({ParameterGroup: S.optional(ParameterGroup)}) {}
export class CreateUserResponse extends S.Class<CreateUserResponse>("CreateUserResponse")({User: S.optional(User)}) {}
export class DescribeEngineVersionsResponse extends S.Class<DescribeEngineVersionsResponse>("DescribeEngineVersionsResponse")({NextToken: S.optional(S.String), EngineVersions: S.optional(EngineVersionInfoList)}) {}
export class DescribeEventsResponse extends S.Class<DescribeEventsResponse>("DescribeEventsResponse")({NextToken: S.optional(S.String), Events: S.optional(EventList)}) {}
export class DescribeMultiRegionParameterGroupsResponse extends S.Class<DescribeMultiRegionParameterGroupsResponse>("DescribeMultiRegionParameterGroupsResponse")({NextToken: S.optional(S.String), MultiRegionParameterGroups: S.optional(MultiRegionParameterGroupList)}) {}
export class DescribeMultiRegionParametersResponse extends S.Class<DescribeMultiRegionParametersResponse>("DescribeMultiRegionParametersResponse")({NextToken: S.optional(S.String), MultiRegionParameters: S.optional(MultiRegionParametersList)}) {}
export class DescribeParametersResponse extends S.Class<DescribeParametersResponse>("DescribeParametersResponse")({NextToken: S.optional(S.String), Parameters: S.optional(ParametersList)}) {}
export class DescribeReservedNodesOfferingsResponse extends S.Class<DescribeReservedNodesOfferingsResponse>("DescribeReservedNodesOfferingsResponse")({NextToken: S.optional(S.String), ReservedNodesOfferings: S.optional(ReservedNodesOfferingList)}) {}
export class DescribeServiceUpdatesResponse extends S.Class<DescribeServiceUpdatesResponse>("DescribeServiceUpdatesResponse")({NextToken: S.optional(S.String), ServiceUpdates: S.optional(ServiceUpdateList)}) {}
export class DescribeUsersResponse extends S.Class<DescribeUsersResponse>("DescribeUsersResponse")({Users: S.optional(UserList), NextToken: S.optional(S.String)}) {}
export class UpdateClusterResponse extends S.Class<UpdateClusterResponse>("UpdateClusterResponse")({Cluster: S.optional(Cluster)}) {}
export class UpdateParameterGroupResponse extends S.Class<UpdateParameterGroupResponse>("UpdateParameterGroupResponse")({ParameterGroup: S.optional(ParameterGroup)}) {}
export class UnprocessedCluster extends S.Class<UnprocessedCluster>("UnprocessedCluster")({ClusterName: S.optional(S.String), ErrorType: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const UnprocessedClusterList = S.Array(UnprocessedCluster);
export const ReservedNodeList = S.Array(ReservedNode);
export class BatchUpdateClusterResponse extends S.Class<BatchUpdateClusterResponse>("BatchUpdateClusterResponse")({ProcessedClusters: S.optional(ClusterList), UnprocessedClusters: S.optional(UnprocessedClusterList)}) {}
export class CreateACLResponse extends S.Class<CreateACLResponse>("CreateACLResponse")({ACL: S.optional(ACL)}) {}
export class CreateMultiRegionClusterResponse extends S.Class<CreateMultiRegionClusterResponse>("CreateMultiRegionClusterResponse")({MultiRegionCluster: S.optional(MultiRegionCluster)}) {}
export class DeleteUserResponse extends S.Class<DeleteUserResponse>("DeleteUserResponse")({User: S.optional(User)}) {}
export class DescribeReservedNodesResponse extends S.Class<DescribeReservedNodesResponse>("DescribeReservedNodesResponse")({NextToken: S.optional(S.String), ReservedNodes: S.optional(ReservedNodeList)}) {}
export class CreateSubnetGroupResponse extends S.Class<CreateSubnetGroupResponse>("CreateSubnetGroupResponse")({SubnetGroup: S.optional(SubnetGroup)}) {}
export class CreateClusterResponse extends S.Class<CreateClusterResponse>("CreateClusterResponse")({Cluster: S.optional(Cluster)}) {}
export class CreateSnapshotResponse extends S.Class<CreateSnapshotResponse>("CreateSnapshotResponse")({Snapshot: S.optional(Snapshot)}) {}

//# Errors
export class InvalidParameterCombinationException extends S.TaggedError<InvalidParameterCombinationException>()("InvalidParameterCombinationException", {}) {};
export class ACLNotFoundFault extends S.TaggedError<ACLNotFoundFault>()("ACLNotFoundFault", {}) {};
export class ClusterNotFoundFault extends S.TaggedError<ClusterNotFoundFault>()("ClusterNotFoundFault", {}) {};
export class InvalidParameterValueException extends S.TaggedError<InvalidParameterValueException>()("InvalidParameterValueException", {}) {};
export class ServiceLinkedRoleNotFoundFault extends S.TaggedError<ServiceLinkedRoleNotFoundFault>()("ServiceLinkedRoleNotFoundFault", {}) {};
export class MultiRegionClusterNotFoundFault extends S.TaggedError<MultiRegionClusterNotFoundFault>()("MultiRegionClusterNotFoundFault", {}) {};
export class InvalidARNFault extends S.TaggedError<InvalidARNFault>()("InvalidARNFault", {}) {};
export class InvalidClusterStateFault extends S.TaggedError<InvalidClusterStateFault>()("InvalidClusterStateFault", {}) {};
export class InvalidMultiRegionClusterStateFault extends S.TaggedError<InvalidMultiRegionClusterStateFault>()("InvalidMultiRegionClusterStateFault", {}) {};
export class MultiRegionParameterGroupNotFoundFault extends S.TaggedError<MultiRegionParameterGroupNotFoundFault>()("MultiRegionParameterGroupNotFoundFault", {}) {};
export class InvalidParameterGroupStateFault extends S.TaggedError<InvalidParameterGroupStateFault>()("InvalidParameterGroupStateFault", {}) {};
export class ParameterGroupNotFoundFault extends S.TaggedError<ParameterGroupNotFoundFault>()("ParameterGroupNotFoundFault", {}) {};
export class InvalidSnapshotStateFault extends S.TaggedError<InvalidSnapshotStateFault>()("InvalidSnapshotStateFault", {}) {};
export class SnapshotNotFoundFault extends S.TaggedError<SnapshotNotFoundFault>()("SnapshotNotFoundFault", {}) {};
export class SubnetGroupNotFoundFault extends S.TaggedError<SubnetGroupNotFoundFault>()("SubnetGroupNotFoundFault", {message: S.optional(S.String)}) {};
export class APICallRateForCustomerExceededFault extends S.TaggedError<APICallRateForCustomerExceededFault>()("APICallRateForCustomerExceededFault", {message: S.optional(S.String)}) {};
export class UserNotFoundFault extends S.TaggedError<UserNotFoundFault>()("UserNotFoundFault", {}) {};
export class ReservedNodeAlreadyExistsFault extends S.TaggedError<ReservedNodeAlreadyExistsFault>()("ReservedNodeAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class DefaultUserRequired extends S.TaggedError<DefaultUserRequired>()("DefaultUserRequired", {message: S.optional(S.String)}) {};
export class DuplicateUserNameFault extends S.TaggedError<DuplicateUserNameFault>()("DuplicateUserNameFault", {}) {};
export class InvalidACLStateFault extends S.TaggedError<InvalidACLStateFault>()("InvalidACLStateFault", {}) {};
export class InvalidSubnet extends S.TaggedError<InvalidSubnet>()("InvalidSubnet", {message: S.optional(S.String)}) {};
export class InvalidUserStateFault extends S.TaggedError<InvalidUserStateFault>()("InvalidUserStateFault", {message: S.optional(S.String)}) {};
export class SnapshotAlreadyExistsFault extends S.TaggedError<SnapshotAlreadyExistsFault>()("SnapshotAlreadyExistsFault", {}) {};
export class ClusterQuotaForCustomerExceededFault extends S.TaggedError<ClusterQuotaForCustomerExceededFault>()("ClusterQuotaForCustomerExceededFault", {}) {};
export class ParameterGroupAlreadyExistsFault extends S.TaggedError<ParameterGroupAlreadyExistsFault>()("ParameterGroupAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class TagQuotaPerResourceExceeded extends S.TaggedError<TagQuotaPerResourceExceeded>()("TagQuotaPerResourceExceeded", {}) {};
export class SubnetGroupInUseFault extends S.TaggedError<SubnetGroupInUseFault>()("SubnetGroupInUseFault", {message: S.optional(S.String)}) {};
export class ReservedNodesOfferingNotFoundFault extends S.TaggedError<ReservedNodesOfferingNotFoundFault>()("ReservedNodesOfferingNotFoundFault", {message: S.optional(S.String)}) {};
export class InvalidKMSKeyFault extends S.TaggedError<InvalidKMSKeyFault>()("InvalidKMSKeyFault", {message: S.optional(S.String)}) {};
export class ReservedNodeQuotaExceededFault extends S.TaggedError<ReservedNodeQuotaExceededFault>()("ReservedNodeQuotaExceededFault", {message: S.optional(S.String)}) {};
export class TagNotFoundFault extends S.TaggedError<TagNotFoundFault>()("TagNotFoundFault", {message: S.optional(S.String)}) {};
export class SubnetInUse extends S.TaggedError<SubnetInUse>()("SubnetInUse", {message: S.optional(S.String)}) {};
export class ServiceUpdateNotFoundFault extends S.TaggedError<ServiceUpdateNotFoundFault>()("ServiceUpdateNotFoundFault", {message: S.optional(S.String)}) {};
export class SnapshotQuotaExceededFault extends S.TaggedError<SnapshotQuotaExceededFault>()("SnapshotQuotaExceededFault", {message: S.optional(S.String)}) {};
export class ACLAlreadyExistsFault extends S.TaggedError<ACLAlreadyExistsFault>()("ACLAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class MultiRegionClusterAlreadyExistsFault extends S.TaggedError<MultiRegionClusterAlreadyExistsFault>()("MultiRegionClusterAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class ParameterGroupQuotaExceededFault extends S.TaggedError<ParameterGroupQuotaExceededFault>()("ParameterGroupQuotaExceededFault", {message: S.optional(S.String)}) {};
export class UserAlreadyExistsFault extends S.TaggedError<UserAlreadyExistsFault>()("UserAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class ReservedNodeNotFoundFault extends S.TaggedError<ReservedNodeNotFoundFault>()("ReservedNodeNotFoundFault", {message: S.optional(S.String)}) {};
export class ShardNotFoundFault extends S.TaggedError<ShardNotFoundFault>()("ShardNotFoundFault", {message: S.optional(S.String)}) {};
export class InvalidNodeStateFault extends S.TaggedError<InvalidNodeStateFault>()("InvalidNodeStateFault", {message: S.optional(S.String)}) {};
export class SubnetNotAllowedFault extends S.TaggedError<SubnetNotAllowedFault>()("SubnetNotAllowedFault", {message: S.optional(S.String)}) {};
export class ACLQuotaExceededFault extends S.TaggedError<ACLQuotaExceededFault>()("ACLQuotaExceededFault", {message: S.optional(S.String)}) {};
export class SubnetGroupAlreadyExistsFault extends S.TaggedError<SubnetGroupAlreadyExistsFault>()("SubnetGroupAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class UserQuotaExceededFault extends S.TaggedError<UserQuotaExceededFault>()("UserQuotaExceededFault", {message: S.optional(S.String)}) {};
export class TestFailoverNotAvailableFault extends S.TaggedError<TestFailoverNotAvailableFault>()("TestFailoverNotAvailableFault", {message: S.optional(S.String)}) {};
export class InvalidVPCNetworkStateFault extends S.TaggedError<InvalidVPCNetworkStateFault>()("InvalidVPCNetworkStateFault", {message: S.optional(S.String)}) {};
export class SubnetQuotaExceededFault extends S.TaggedError<SubnetQuotaExceededFault>()("SubnetQuotaExceededFault", {message: S.optional(S.String)}) {};
export class ClusterAlreadyExistsFault extends S.TaggedError<ClusterAlreadyExistsFault>()("ClusterAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class SubnetGroupQuotaExceededFault extends S.TaggedError<SubnetGroupQuotaExceededFault>()("SubnetGroupQuotaExceededFault", {message: S.optional(S.String)}) {};
export class NodeQuotaForClusterExceededFault extends S.TaggedError<NodeQuotaForClusterExceededFault>()("NodeQuotaForClusterExceededFault", {message: S.optional(S.String)}) {};
export class InsufficientClusterCapacityFault extends S.TaggedError<InsufficientClusterCapacityFault>()("InsufficientClusterCapacityFault", {message: S.optional(S.String)}) {};
export class NodeQuotaForCustomerExceededFault extends S.TaggedError<NodeQuotaForCustomerExceededFault>()("NodeQuotaForCustomerExceededFault", {message: S.optional(S.String)}) {};
export class InvalidCredentialsException extends S.TaggedError<InvalidCredentialsException>()("InvalidCredentialsException", {message: S.optional(S.String)}) {};
export class NoOperationFault extends S.TaggedError<NoOperationFault>()("NoOperationFault", {message: S.optional(S.String)}) {};
export class ShardsPerClusterQuotaExceededFault extends S.TaggedError<ShardsPerClusterQuotaExceededFault>()("ShardsPerClusterQuotaExceededFault", {}) {};

//# Operations
/**
 * Returns a list of ACLs.
 */export const describeACLs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeACLs" }, DescribeACLsRequest, DescribeACLsResponse, [ACLNotFoundFault, InvalidParameterCombinationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.
 */export const describeClusters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeClusters" }, DescribeClustersRequest, DescribeClustersResponse, [ClusterNotFoundFault, InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the allowed updates for a multi-Region cluster.
 */export const listAllowedMultiRegionClusterUpdates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.ListAllowedMultiRegionClusterUpdates" }, ListAllowedMultiRegionClusterUpdatesRequest, ListAllowedMultiRegionClusterUpdatesResponse, [InvalidParameterCombinationException, InvalidParameterValueException, MultiRegionClusterNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all available node types that you can scale to from your cluster's current node type.
 * 
 * When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.
 */export const listAllowedNodeTypeUpdates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.ListAllowedNodeTypeUpdates" }, ListAllowedNodeTypeUpdatesRequest, ListAllowedNodeTypeUpdatesResponse, [ClusterNotFoundFault, InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the configuration of an existing multi-Region cluster.
 */export const updateMultiRegionCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.UpdateMultiRegionCluster" }, UpdateMultiRegionClusterRequest, UpdateMultiRegionClusterResponse, [InvalidMultiRegionClusterStateFault, InvalidParameterCombinationException, InvalidParameterValueException, MultiRegionClusterNotFoundFault, MultiRegionParameterGroupNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing multi-Region cluster.
 */export const deleteMultiRegionCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DeleteMultiRegionCluster" }, DeleteMultiRegionClusterRequest, DeleteMultiRegionClusterResponse, [InvalidMultiRegionClusterStateFault, InvalidParameterValueException, MultiRegionClusterNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters.
 * You cannot delete the default parameter groups in your account.
 */export const deleteParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DeleteParameterGroup" }, DeleteParameterGroupRequest, DeleteParameterGroupResponse, [InvalidParameterCombinationException, InvalidParameterGroupStateFault, InvalidParameterValueException, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.
 */export const deleteSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DeleteSnapshot" }, DeleteSnapshotRequest, DeleteSnapshotResponse, [InvalidParameterCombinationException, InvalidParameterValueException, InvalidSnapshotStateFault, ServiceLinkedRoleNotFoundFault, SnapshotNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the available Redis OSS engine versions.
 */export const describeEngineVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeEngineVersions" }, DescribeEngineVersionsRequest, DescribeEngineVersionsResponse, [InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter.
 * 
 * By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
 */export const describeEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeEvents" }, DescribeEventsRequest, DescribeEventsResponse, [InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns details about one or more multi-Region clusters.
 */export const describeMultiRegionClusters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeMultiRegionClusters" }, DescribeMultiRegionClustersRequest, DescribeMultiRegionClustersResponse, [ClusterNotFoundFault, InvalidParameterCombinationException, InvalidParameterValueException, MultiRegionClusterNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of multi-region parameter groups.
 */export const describeMultiRegionParameterGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeMultiRegionParameterGroups" }, DescribeMultiRegionParameterGroupsRequest, DescribeMultiRegionParameterGroupsResponse, [InvalidParameterCombinationException, InvalidParameterValueException, MultiRegionParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the detailed parameter list for a particular multi-region parameter group.
 */export const describeMultiRegionParameters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeMultiRegionParameters" }, DescribeMultiRegionParametersRequest, DescribeMultiRegionParametersResponse, [InvalidParameterCombinationException, InvalidParameterValueException, MultiRegionParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.
 */export const describeParameterGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeParameterGroups" }, DescribeParameterGroupsRequest, DescribeParameterGroupsResponse, [InvalidParameterCombinationException, InvalidParameterValueException, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the detailed parameter list for a particular parameter group.
 */export const describeParameters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeParameters" }, DescribeParametersRequest, DescribeParametersResponse, [InvalidParameterCombinationException, InvalidParameterValueException, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns details of the service updates.
 */export const describeServiceUpdates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeServiceUpdates" }, DescribeServiceUpdatesRequest, DescribeServiceUpdatesResponse, [InvalidParameterCombinationException, InvalidParameterValueException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot,
 * or just the snapshots associated with a particular cluster.
 */export const describeSnapshots = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeSnapshots" }, DescribeSnapshotsRequest, DescribeSnapshotsResponse, [InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault, SnapshotNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.
 */export const describeSubnetGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeSubnetGroups" }, DescribeSubnetGroupsRequest, DescribeSubnetGroupsResponse, [ServiceLinkedRoleNotFoundFault, SubnetGroupNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see Tagging your MemoryDB resources.
 * 
 * When you add or remove tags from multi region clusters, you might not immediately see the latest effective tags in the ListTags API response due to it being eventually consistent specifically for multi region clusters. For more information, see Tagging your MemoryDB resources.
 */export const listTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.ListTags" }, ListTagsRequest, ListTagsResponse, [ACLNotFoundFault, ClusterNotFoundFault, InvalidARNFault, InvalidClusterStateFault, MultiRegionClusterNotFoundFault, MultiRegionParameterGroupNotFoundFault, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault, SnapshotNotFoundFault, SubnetGroupNotFoundFault, UserNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.
 */export const resetParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.ResetParameterGroup" }, ResetParameterGroupRequest, ResetParameterGroupResponse, [InvalidParameterCombinationException, InvalidParameterGroupStateFault, InvalidParameterValueException, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes the list of users that belong to the Access Control List.
 */export const updateACL = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.UpdateACL" }, UpdateACLRequest, UpdateACLResponse, [ACLNotFoundFault, DefaultUserRequired, DuplicateUserNameFault, InvalidACLStateFault, InvalidParameterCombinationException, InvalidParameterValueException, UserNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
 */export const updateParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.UpdateParameterGroup" }, UpdateParameterGroupRequest, UpdateParameterGroupResponse, [InvalidParameterCombinationException, InvalidParameterGroupStateFault, InvalidParameterValueException, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes user password(s) and/or access string.
 */export const updateUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.UpdateUser" }, UpdateUserRequest, UpdateUserResponse, [InvalidParameterCombinationException, InvalidParameterValueException, InvalidUserStateFault, UserNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see Authenticating users with Access Contol Lists (ACLs).
 */export const deleteACL = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DeleteACL" }, DeleteACLRequest, DeleteACLResponse, [ACLNotFoundFault, InvalidACLStateFault, InvalidParameterValueException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a cluster. It also deletes all associated nodes and node endpoints.
 * 
 * `CreateSnapshot` permission is required to create a final snapshot.
 * Without this permission, the API call will fail with an `Access Denied` exception.
 */export const deleteCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DeleteCluster" }, DeleteClusterRequest, DeleteClusterResponse, [ClusterNotFoundFault, InvalidClusterStateFault, InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault, SnapshotAlreadyExistsFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.
 */export const deleteSubnetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DeleteSubnetGroup" }, DeleteSubnetGroupRequest, DeleteSubnetGroupResponse, [ServiceLinkedRoleNotFoundFault, SubnetGroupInUseFault, SubnetGroupNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.
 */export const deleteUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DeleteUser" }, DeleteUserRequest, DeleteUserResponse, [InvalidParameterValueException, InvalidUserStateFault, UserNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists available reserved node offerings.
 */export const describeReservedNodesOfferings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeReservedNodesOfferings" }, DescribeReservedNodesOfferingsRequest, DescribeReservedNodesOfferingsResponse, [InvalidParameterCombinationException, InvalidParameterValueException, ReservedNodesOfferingNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of users.
 */export const describeUsers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeUsers" }, DescribeUsersRequest, DescribeUsersResponse, [InvalidParameterCombinationException, UserNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.
 */export const purchaseReservedNodesOffering = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.PurchaseReservedNodesOffering" }, PurchaseReservedNodesOfferingRequest, PurchaseReservedNodesOfferingResponse, [InvalidParameterCombinationException, InvalidParameterValueException, ReservedNodeAlreadyExistsFault, ReservedNodeQuotaExceededFault, ReservedNodesOfferingNotFoundFault, ServiceLinkedRoleNotFoundFault, TagQuotaPerResourceExceeded]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Use this operation to add tags to a resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. For more information, see Tagging your MemoryDB resources.
 * 
 * When you add tags to multi region clusters, you might not immediately see the latest effective tags in the ListTags API response due to it being eventually consistent specifically for multi region clusters. For more information, see Tagging your MemoryDB resources.
 * 
 * You can specify cost-allocation tags for your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value
 * (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories
 * (such as cost centers, application names, or owners) to organize your costs across multiple services.
 * 
 * For more information, see Using Cost Allocation Tags.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.TagResource" }, TagResourceRequest, TagResourceResponse, [ACLNotFoundFault, ClusterNotFoundFault, InvalidARNFault, InvalidClusterStateFault, InvalidParameterValueException, MultiRegionClusterNotFoundFault, MultiRegionParameterGroupNotFoundFault, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault, SnapshotNotFoundFault, SubnetGroupNotFoundFault, TagQuotaPerResourceExceeded, UserNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Use this operation to remove tags on a resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. For more information, see Tagging your MemoryDB resources.
 * 
 * When you remove tags from multi region clusters, you might not immediately see the latest effective tags in the ListTags API response due to it being eventually consistent specifically for multi region clusters. For more information, see Tagging your MemoryDB resources.
 * 
 * You can specify cost-allocation tags for your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value
 * (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories
 * (such as cost centers, application names, or owners) to organize your costs across multiple services.
 * 
 * For more information, see Using Cost Allocation Tags.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ACLNotFoundFault, ClusterNotFoundFault, InvalidARNFault, InvalidClusterStateFault, InvalidParameterValueException, MultiRegionClusterNotFoundFault, MultiRegionParameterGroupNotFoundFault, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault, SnapshotNotFoundFault, SubnetGroupNotFoundFault, TagNotFoundFault, UserNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see Applying the service updates.
 */export const batchUpdateCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.BatchUpdateCluster" }, BatchUpdateClusterRequest, BatchUpdateClusterResponse, [InvalidParameterValueException, ServiceUpdateNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Makes a copy of an existing snapshot.
 */export const copySnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.CopySnapshot" }, CopySnapshotRequest, CopySnapshotResponse, [InvalidParameterCombinationException, InvalidParameterValueException, InvalidSnapshotStateFault, ServiceLinkedRoleNotFoundFault, SnapshotAlreadyExistsFault, SnapshotNotFoundFault, SnapshotQuotaExceededFault, TagQuotaPerResourceExceeded]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new multi-Region cluster.
 */export const createMultiRegionCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.CreateMultiRegionCluster" }, CreateMultiRegionClusterRequest, CreateMultiRegionClusterResponse, [ClusterQuotaForCustomerExceededFault, InvalidParameterCombinationException, InvalidParameterValueException, MultiRegionClusterAlreadyExistsFault, MultiRegionParameterGroupNotFoundFault, TagQuotaPerResourceExceeded]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For
 * more information, see Configuring engine parameters using parameter groups.
 */export const createParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.CreateParameterGroup" }, CreateParameterGroupRequest, CreateParameterGroupResponse, [InvalidParameterCombinationException, InvalidParameterGroupStateFault, InvalidParameterValueException, ParameterGroupAlreadyExistsFault, ParameterGroupQuotaExceededFault, ServiceLinkedRoleNotFoundFault, TagQuotaPerResourceExceeded]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about reserved nodes for this account, or about a specified reserved node.
 */export const describeReservedNodes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.DescribeReservedNodes" }, DescribeReservedNodesRequest, DescribeReservedNodesResponse, [InvalidParameterCombinationException, InvalidParameterValueException, ReservedNodeNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Access Control List. For more information, see Authenticating users with Access Contol Lists (ACLs).
 */export const createACL = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.CreateACL" }, CreateACLRequest, CreateACLResponse, [ACLAlreadyExistsFault, ACLQuotaExceededFault, DefaultUserRequired, DuplicateUserNameFault, InvalidParameterValueException, TagQuotaPerResourceExceeded, UserNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a copy of an entire cluster at a specific moment in time.
 */export const createSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.CreateSnapshot" }, CreateSnapshotRequest, CreateSnapshotResponse, [ClusterNotFoundFault, InvalidClusterStateFault, InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault, SnapshotAlreadyExistsFault, SnapshotQuotaExceededFault, TagQuotaPerResourceExceeded]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a MemoryDB user. For more information, see Authenticating users with Access Contol Lists (ACLs).
 */export const createUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.CreateUser" }, CreateUserRequest, CreateUserResponse, [DuplicateUserNameFault, InvalidParameterCombinationException, InvalidParameterValueException, TagQuotaPerResourceExceeded, UserAlreadyExistsFault, UserQuotaExceededFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating
 * a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API.
 */export const failoverShard = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.FailoverShard" }, FailoverShardRequest, FailoverShardResponse, [APICallRateForCustomerExceededFault, ClusterNotFoundFault, InvalidClusterStateFault, InvalidKMSKeyFault, InvalidParameterCombinationException, InvalidParameterValueException, ShardNotFoundFault, TestFailoverNotAvailableFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a subnet group. For more information, see Updating a subnet group
 */export const updateSubnetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.UpdateSubnetGroup" }, UpdateSubnetGroupRequest, UpdateSubnetGroupResponse, [InvalidSubnet, ServiceLinkedRoleNotFoundFault, SubnetGroupNotFoundFault, SubnetInUse, SubnetNotAllowedFault, SubnetQuotaExceededFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment.
 * 
 * When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes.
 * For more information, see Subnets and subnet groups.
 */export const createSubnetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.CreateSubnetGroup" }, CreateSubnetGroupRequest, CreateSubnetGroupResponse, [InvalidSubnet, ServiceLinkedRoleNotFoundFault, SubnetGroupAlreadyExistsFault, SubnetGroupQuotaExceededFault, SubnetNotAllowedFault, SubnetQuotaExceededFault, TagQuotaPerResourceExceeded]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.
 */export const updateCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.UpdateCluster" }, UpdateClusterRequest, UpdateClusterResponse, [ACLNotFoundFault, ClusterNotFoundFault, ClusterQuotaForCustomerExceededFault, InvalidACLStateFault, InvalidClusterStateFault, InvalidKMSKeyFault, InvalidNodeStateFault, InvalidParameterCombinationException, InvalidParameterValueException, InvalidVPCNetworkStateFault, NodeQuotaForClusterExceededFault, NodeQuotaForCustomerExceededFault, NoOperationFault, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault, ShardsPerClusterQuotaExceededFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.
 */export const createCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", sdkId: "MemoryDB", sigV4ServiceName: "memorydb", name: "AmazonMemoryDB.CreateCluster" }, CreateClusterRequest, CreateClusterResponse, [ACLNotFoundFault, ClusterAlreadyExistsFault, ClusterQuotaForCustomerExceededFault, InsufficientClusterCapacityFault, InvalidACLStateFault, InvalidCredentialsException, InvalidMultiRegionClusterStateFault, InvalidParameterCombinationException, InvalidParameterValueException, InvalidVPCNetworkStateFault, MultiRegionClusterNotFoundFault, NodeQuotaForClusterExceededFault, NodeQuotaForCustomerExceededFault, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault, ShardsPerClusterQuotaExceededFault, SubnetGroupNotFoundFault, TagQuotaPerResourceExceeded]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

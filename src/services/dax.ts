import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const AvailabilityZoneList = S.Array(S.String);
export const SecurityGroupIdentifierList = S.Array(S.String);
export const SubnetIdentifierList = S.Array(S.String);
export const NodeIdentifierList = S.Array(S.String);
export const ClusterNameList = S.Array(S.String);
export const ParameterGroupNameList = S.Array(S.String);
export const SubnetGroupNameList = S.Array(S.String);
export const KeyList = S.Array(S.String);
export class CreateParameterGroupRequest extends S.Class<CreateParameterGroupRequest>("CreateParameterGroupRequest")({ParameterGroupName: S.String, Description: S.optional(S.String)}) {}
export class CreateSubnetGroupRequest extends S.Class<CreateSubnetGroupRequest>("CreateSubnetGroupRequest")({SubnetGroupName: S.String, Description: S.optional(S.String), SubnetIds: SubnetIdentifierList}) {}
export class DecreaseReplicationFactorRequest extends S.Class<DecreaseReplicationFactorRequest>("DecreaseReplicationFactorRequest")({ClusterName: S.String, NewReplicationFactor: S.Number, AvailabilityZones: S.optional(AvailabilityZoneList), NodeIdsToRemove: S.optional(NodeIdentifierList)}) {}
export class DeleteClusterRequest extends S.Class<DeleteClusterRequest>("DeleteClusterRequest")({ClusterName: S.String}) {}
export class DeleteParameterGroupRequest extends S.Class<DeleteParameterGroupRequest>("DeleteParameterGroupRequest")({ParameterGroupName: S.String}) {}
export class DeleteSubnetGroupRequest extends S.Class<DeleteSubnetGroupRequest>("DeleteSubnetGroupRequest")({SubnetGroupName: S.String}) {}
export class DescribeClustersRequest extends S.Class<DescribeClustersRequest>("DescribeClustersRequest")({ClusterNames: S.optional(ClusterNameList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeDefaultParametersRequest extends S.Class<DescribeDefaultParametersRequest>("DescribeDefaultParametersRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeEventsRequest extends S.Class<DescribeEventsRequest>("DescribeEventsRequest")({SourceName: S.optional(S.String), SourceType: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Duration: S.optional(S.Number), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeParameterGroupsRequest extends S.Class<DescribeParameterGroupsRequest>("DescribeParameterGroupsRequest")({ParameterGroupNames: S.optional(ParameterGroupNameList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeParametersRequest extends S.Class<DescribeParametersRequest>("DescribeParametersRequest")({ParameterGroupName: S.String, Source: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeSubnetGroupsRequest extends S.Class<DescribeSubnetGroupsRequest>("DescribeSubnetGroupsRequest")({SubnetGroupNames: S.optional(SubnetGroupNameList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class IncreaseReplicationFactorRequest extends S.Class<IncreaseReplicationFactorRequest>("IncreaseReplicationFactorRequest")({ClusterName: S.String, NewReplicationFactor: S.Number, AvailabilityZones: S.optional(AvailabilityZoneList)}) {}
export class ListTagsRequest extends S.Class<ListTagsRequest>("ListTagsRequest")({ResourceName: S.String, NextToken: S.optional(S.String)}) {}
export class RebootNodeRequest extends S.Class<RebootNodeRequest>("RebootNodeRequest")({ClusterName: S.String, NodeId: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceName: S.String, Tags: TagList}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceName: S.String, TagKeys: KeyList}) {}
export class UpdateClusterRequest extends S.Class<UpdateClusterRequest>("UpdateClusterRequest")({ClusterName: S.String, Description: S.optional(S.String), PreferredMaintenanceWindow: S.optional(S.String), NotificationTopicArn: S.optional(S.String), NotificationTopicStatus: S.optional(S.String), ParameterGroupName: S.optional(S.String), SecurityGroupIds: S.optional(SecurityGroupIdentifierList)}) {}
export class UpdateSubnetGroupRequest extends S.Class<UpdateSubnetGroupRequest>("UpdateSubnetGroupRequest")({SubnetGroupName: S.String, Description: S.optional(S.String), SubnetIds: S.optional(SubnetIdentifierList)}) {}
export class SSESpecification extends S.Class<SSESpecification>("SSESpecification")({Enabled: S.Boolean}) {}
export class Endpoint extends S.Class<Endpoint>("Endpoint")({Address: S.optional(S.String), Port: S.optional(S.Number), URL: S.optional(S.String)}) {}
export class Node extends S.Class<Node>("Node")({NodeId: S.optional(S.String), Endpoint: S.optional(Endpoint), NodeCreateTime: S.optional(S.Date), AvailabilityZone: S.optional(S.String), NodeStatus: S.optional(S.String), ParameterGroupStatus: S.optional(S.String)}) {}
export const NodeList = S.Array(Node);
export class NotificationConfiguration extends S.Class<NotificationConfiguration>("NotificationConfiguration")({TopicArn: S.optional(S.String), TopicStatus: S.optional(S.String)}) {}
export class SecurityGroupMembership extends S.Class<SecurityGroupMembership>("SecurityGroupMembership")({SecurityGroupIdentifier: S.optional(S.String), Status: S.optional(S.String)}) {}
export const SecurityGroupMembershipList = S.Array(SecurityGroupMembership);
export class ParameterGroupStatus extends S.Class<ParameterGroupStatus>("ParameterGroupStatus")({ParameterGroupName: S.optional(S.String), ParameterApplyStatus: S.optional(S.String), NodeIdsToReboot: S.optional(NodeIdentifierList)}) {}
export class SSEDescription extends S.Class<SSEDescription>("SSEDescription")({Status: S.optional(S.String)}) {}
export class Cluster extends S.Class<Cluster>("Cluster")({ClusterName: S.optional(S.String), Description: S.optional(S.String), ClusterArn: S.optional(S.String), TotalNodes: S.optional(S.Number), ActiveNodes: S.optional(S.Number), NodeType: S.optional(S.String), Status: S.optional(S.String), ClusterDiscoveryEndpoint: S.optional(Endpoint), NodeIdsToRemove: S.optional(NodeIdentifierList), Nodes: S.optional(NodeList), PreferredMaintenanceWindow: S.optional(S.String), NotificationConfiguration: S.optional(NotificationConfiguration), SubnetGroup: S.optional(S.String), SecurityGroups: S.optional(SecurityGroupMembershipList), IamRoleArn: S.optional(S.String), ParameterGroup: S.optional(ParameterGroupStatus), SSEDescription: S.optional(SSEDescription), ClusterEndpointEncryptionType: S.optional(S.String), NetworkType: S.optional(S.String)}) {}
export const ClusterList = S.Array(Cluster);
export class ParameterGroup extends S.Class<ParameterGroup>("ParameterGroup")({ParameterGroupName: S.optional(S.String), Description: S.optional(S.String)}) {}
export const ParameterGroupList = S.Array(ParameterGroup);
export const NetworkTypeList = S.Array(S.String);
export class Subnet extends S.Class<Subnet>("Subnet")({SubnetIdentifier: S.optional(S.String), SubnetAvailabilityZone: S.optional(S.String), SupportedNetworkTypes: S.optional(NetworkTypeList)}) {}
export const SubnetList = S.Array(Subnet);
export class SubnetGroup extends S.Class<SubnetGroup>("SubnetGroup")({SubnetGroupName: S.optional(S.String), Description: S.optional(S.String), VpcId: S.optional(S.String), Subnets: S.optional(SubnetList), SupportedNetworkTypes: S.optional(NetworkTypeList)}) {}
export const SubnetGroupList = S.Array(SubnetGroup);
export class ParameterNameValue extends S.Class<ParameterNameValue>("ParameterNameValue")({ParameterName: S.optional(S.String), ParameterValue: S.optional(S.String)}) {}
export const ParameterNameValueList = S.Array(ParameterNameValue);
export class CreateClusterRequest extends S.Class<CreateClusterRequest>("CreateClusterRequest")({ClusterName: S.String, NodeType: S.String, Description: S.optional(S.String), ReplicationFactor: S.Number, AvailabilityZones: S.optional(AvailabilityZoneList), SubnetGroupName: S.optional(S.String), SecurityGroupIds: S.optional(SecurityGroupIdentifierList), PreferredMaintenanceWindow: S.optional(S.String), NotificationTopicArn: S.optional(S.String), IamRoleArn: S.String, ParameterGroupName: S.optional(S.String), Tags: S.optional(TagList), SSESpecification: S.optional(SSESpecification), ClusterEndpointEncryptionType: S.optional(S.String), NetworkType: S.optional(S.String)}) {}
export class DeleteClusterResponse extends S.Class<DeleteClusterResponse>("DeleteClusterResponse")({Cluster: S.optional(Cluster)}) {}
export class DeleteParameterGroupResponse extends S.Class<DeleteParameterGroupResponse>("DeleteParameterGroupResponse")({DeletionMessage: S.optional(S.String)}) {}
export class DeleteSubnetGroupResponse extends S.Class<DeleteSubnetGroupResponse>("DeleteSubnetGroupResponse")({DeletionMessage: S.optional(S.String)}) {}
export class DescribeClustersResponse extends S.Class<DescribeClustersResponse>("DescribeClustersResponse")({NextToken: S.optional(S.String), Clusters: S.optional(ClusterList)}) {}
export class DescribeParameterGroupsResponse extends S.Class<DescribeParameterGroupsResponse>("DescribeParameterGroupsResponse")({NextToken: S.optional(S.String), ParameterGroups: S.optional(ParameterGroupList)}) {}
export class NodeTypeSpecificValue extends S.Class<NodeTypeSpecificValue>("NodeTypeSpecificValue")({NodeType: S.optional(S.String), Value: S.optional(S.String)}) {}
export const NodeTypeSpecificValueList = S.Array(NodeTypeSpecificValue);
export class Parameter extends S.Class<Parameter>("Parameter")({ParameterName: S.optional(S.String), ParameterType: S.optional(S.String), ParameterValue: S.optional(S.String), NodeTypeSpecificValues: S.optional(NodeTypeSpecificValueList), Description: S.optional(S.String), Source: S.optional(S.String), DataType: S.optional(S.String), AllowedValues: S.optional(S.String), IsModifiable: S.optional(S.String), ChangeType: S.optional(S.String)}) {}
export const ParameterList = S.Array(Parameter);
export class DescribeParametersResponse extends S.Class<DescribeParametersResponse>("DescribeParametersResponse")({NextToken: S.optional(S.String), Parameters: S.optional(ParameterList)}) {}
export class DescribeSubnetGroupsResponse extends S.Class<DescribeSubnetGroupsResponse>("DescribeSubnetGroupsResponse")({NextToken: S.optional(S.String), SubnetGroups: S.optional(SubnetGroupList)}) {}
export class IncreaseReplicationFactorResponse extends S.Class<IncreaseReplicationFactorResponse>("IncreaseReplicationFactorResponse")({Cluster: S.optional(Cluster)}) {}
export class ListTagsResponse extends S.Class<ListTagsResponse>("ListTagsResponse")({Tags: S.optional(TagList), NextToken: S.optional(S.String)}) {}
export class RebootNodeResponse extends S.Class<RebootNodeResponse>("RebootNodeResponse")({Cluster: S.optional(Cluster)}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({Tags: S.optional(TagList)}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({Tags: S.optional(TagList)}) {}
export class UpdateClusterResponse extends S.Class<UpdateClusterResponse>("UpdateClusterResponse")({Cluster: S.optional(Cluster)}) {}
export class UpdateParameterGroupRequest extends S.Class<UpdateParameterGroupRequest>("UpdateParameterGroupRequest")({ParameterGroupName: S.String, ParameterNameValues: ParameterNameValueList}) {}
export class UpdateSubnetGroupResponse extends S.Class<UpdateSubnetGroupResponse>("UpdateSubnetGroupResponse")({SubnetGroup: S.optional(SubnetGroup)}) {}
export class Event extends S.Class<Event>("Event")({SourceName: S.optional(S.String), SourceType: S.optional(S.String), Message: S.optional(S.String), Date: S.optional(S.Date)}) {}
export const EventList = S.Array(Event);
export class CreateClusterResponse extends S.Class<CreateClusterResponse>("CreateClusterResponse")({Cluster: S.optional(Cluster)}) {}
export class CreateParameterGroupResponse extends S.Class<CreateParameterGroupResponse>("CreateParameterGroupResponse")({ParameterGroup: S.optional(ParameterGroup)}) {}
export class DescribeEventsResponse extends S.Class<DescribeEventsResponse>("DescribeEventsResponse")({NextToken: S.optional(S.String), Events: S.optional(EventList)}) {}
export class UpdateParameterGroupResponse extends S.Class<UpdateParameterGroupResponse>("UpdateParameterGroupResponse")({ParameterGroup: S.optional(ParameterGroup)}) {}
export class CreateSubnetGroupResponse extends S.Class<CreateSubnetGroupResponse>("CreateSubnetGroupResponse")({SubnetGroup: S.optional(SubnetGroup)}) {}
export class DecreaseReplicationFactorResponse extends S.Class<DecreaseReplicationFactorResponse>("DecreaseReplicationFactorResponse")({Cluster: S.optional(Cluster)}) {}
export class DescribeDefaultParametersResponse extends S.Class<DescribeDefaultParametersResponse>("DescribeDefaultParametersResponse")({NextToken: S.optional(S.String), Parameters: S.optional(ParameterList)}) {}

//# Errors
export class ClusterNotFoundFault extends S.TaggedError<ClusterNotFoundFault>()("ClusterNotFoundFault", {}) {};
export class InvalidParameterCombinationException extends S.TaggedError<InvalidParameterCombinationException>()("InvalidParameterCombinationException", {}) {};
export class InvalidParameterValueException extends S.TaggedError<InvalidParameterValueException>()("InvalidParameterValueException", {}) {};
export class ParameterGroupNotFoundFault extends S.TaggedError<ParameterGroupNotFoundFault>()("ParameterGroupNotFoundFault", {}) {};
export class ServiceLinkedRoleNotFoundFault extends S.TaggedError<ServiceLinkedRoleNotFoundFault>()("ServiceLinkedRoleNotFoundFault", {}) {};
export class InvalidARNFault extends S.TaggedError<InvalidARNFault>()("InvalidARNFault", {}) {};
export class InvalidClusterStateFault extends S.TaggedError<InvalidClusterStateFault>()("InvalidClusterStateFault", {}) {};
export class InvalidParameterGroupStateFault extends S.TaggedError<InvalidParameterGroupStateFault>()("InvalidParameterGroupStateFault", {}) {};
export class SubnetGroupNotFoundFault extends S.TaggedError<SubnetGroupNotFoundFault>()("SubnetGroupNotFoundFault", {message: S.optional(S.String)}) {};
export class InsufficientClusterCapacityFault extends S.TaggedError<InsufficientClusterCapacityFault>()("InsufficientClusterCapacityFault", {message: S.optional(S.String)}) {};
export class TagQuotaPerResourceExceeded extends S.TaggedError<TagQuotaPerResourceExceeded>()("TagQuotaPerResourceExceeded", {message: S.optional(S.String)}) {};
export class TagNotFoundFault extends S.TaggedError<TagNotFoundFault>()("TagNotFoundFault", {message: S.optional(S.String)}) {};
export class InvalidSubnet extends S.TaggedError<InvalidSubnet>()("InvalidSubnet", {message: S.optional(S.String)}) {};
export class ClusterAlreadyExistsFault extends S.TaggedError<ClusterAlreadyExistsFault>()("ClusterAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class ParameterGroupAlreadyExistsFault extends S.TaggedError<ParameterGroupAlreadyExistsFault>()("ParameterGroupAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class NodeNotFoundFault extends S.TaggedError<NodeNotFoundFault>()("NodeNotFoundFault", {}) {};
export class SubnetGroupInUseFault extends S.TaggedError<SubnetGroupInUseFault>()("SubnetGroupInUseFault", {message: S.optional(S.String)}) {};
export class InvalidVPCNetworkStateFault extends S.TaggedError<InvalidVPCNetworkStateFault>()("InvalidVPCNetworkStateFault", {message: S.optional(S.String)}) {};
export class SubnetInUse extends S.TaggedError<SubnetInUse>()("SubnetInUse", {message: S.optional(S.String)}) {};
export class ClusterQuotaForCustomerExceededFault extends S.TaggedError<ClusterQuotaForCustomerExceededFault>()("ClusterQuotaForCustomerExceededFault", {message: S.optional(S.String)}) {};
export class NodeQuotaForClusterExceededFault extends S.TaggedError<NodeQuotaForClusterExceededFault>()("NodeQuotaForClusterExceededFault", {}) {};
export class ParameterGroupQuotaExceededFault extends S.TaggedError<ParameterGroupQuotaExceededFault>()("ParameterGroupQuotaExceededFault", {message: S.optional(S.String)}) {};
export class SubnetGroupAlreadyExistsFault extends S.TaggedError<SubnetGroupAlreadyExistsFault>()("SubnetGroupAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class NodeQuotaForCustomerExceededFault extends S.TaggedError<NodeQuotaForCustomerExceededFault>()("NodeQuotaForCustomerExceededFault", {}) {};
export class SubnetNotAllowedFault extends S.TaggedError<SubnetNotAllowedFault>()("SubnetNotAllowedFault", {message: S.optional(S.String)}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class SubnetGroupQuotaExceededFault extends S.TaggedError<SubnetGroupQuotaExceededFault>()("SubnetGroupQuotaExceededFault", {message: S.optional(S.String)}) {};
export class SubnetQuotaExceededFault extends S.TaggedError<SubnetQuotaExceededFault>()("SubnetQuotaExceededFault", {}) {};

//# Operations
/**
 * Returns the detailed parameter list for a particular parameter group.
 */export const describeParameters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.DescribeParameters" }, DescribeParametersRequest, DescribeParametersResponse, [InvalidParameterCombinationException, InvalidParameterValueException, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a previously provisioned DAX cluster.
 * *DeleteCluster* deletes all associated nodes, node endpoints and
 * the DAX cluster itself. When you receive a successful response from this
 * action, DAX immediately begins deleting the cluster; you cannot cancel or
 * revert this action.
 */export const deleteCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.DeleteCluster" }, DeleteClusterRequest, DeleteClusterResponse, [ClusterNotFoundFault, InvalidClusterStateFault, InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified parameter group. You cannot delete a parameter group if it is
 * associated with any DAX clusters.
 */export const deleteParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.DeleteParameterGroup" }, DeleteParameterGroupRequest, DeleteParameterGroupResponse, [InvalidParameterCombinationException, InvalidParameterGroupStateFault, InvalidParameterValueException, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about all provisioned DAX clusters if no cluster identifier is
 * specified, or about a specific DAX cluster if a cluster identifier is
 * supplied.
 * 
 * 
 * If the cluster is in the CREATING state, only cluster level information will be
 * displayed until all of the nodes are successfully provisioned.
 * 
 * 
 * If the cluster is in the DELETING state, only cluster level information will be
 * displayed.
 * 
 * 
 * If nodes are currently being added to the DAX cluster, node endpoint information
 * and creation time for the additional nodes will not be displayed until they are
 * completely provisioned. When the DAX cluster state is
 * *available*, the cluster is ready for use.
 * 
 * 
 * If nodes are currently being removed from the DAX cluster, no
 * endpoint information for the removed nodes is displayed.
 */export const describeClusters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.DescribeClusters" }, DescribeClustersRequest, DescribeClustersResponse, [ClusterNotFoundFault, InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns events related to DAX clusters and parameter groups. You can
 * obtain events specific to a particular DAX cluster or parameter group by
 * providing the name as a parameter.
 * 
 * 
 * By default, only the events occurring within the last 24 hours are returned;
 * however, you can retrieve up to 14 days' worth of events if necessary.
 */export const describeEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.DescribeEvents" }, DescribeEventsRequest, DescribeEventsResponse, [InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of parameter group descriptions. If a parameter group name is
 * specified, the list will contain only the descriptions for that group.
 */export const describeParameterGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.DescribeParameterGroups" }, DescribeParameterGroupsRequest, DescribeParameterGroupsResponse, [InvalidParameterCombinationException, InvalidParameterValueException, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of subnet group descriptions. If a subnet group name is specified,
 * the list will contain only the description of that group.
 */export const describeSubnetGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.DescribeSubnetGroups" }, DescribeSubnetGroupsRequest, DescribeSubnetGroupsResponse, [ServiceLinkedRoleNotFoundFault, SubnetGroupNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all of the tags for a DAX cluster. You can call
 * `ListTags` up to 10 times per second, per account.
 */export const listTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.ListTags" }, ListTagsRequest, ListTagsResponse, [ClusterNotFoundFault, InvalidARNFault, InvalidClusterStateFault, InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a set of tags with a DAX resource.
 * You can call `TagResource` up to
 * 5 times per second, per account.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.TagResource" }, TagResourceRequest, TagResourceResponse, [ClusterNotFoundFault, InvalidARNFault, InvalidClusterStateFault, InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault, TagQuotaPerResourceExceeded]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the association of tags from a DAX resource. You can call
 * `UntagResource` up to 5 times per second, per account.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ClusterNotFoundFault, InvalidARNFault, InvalidClusterStateFault, InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault, TagNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the settings for a DAX cluster. You can use this action to
 * change one or more cluster configuration parameters by specifying the parameters and the
 * new values.
 */export const updateCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.UpdateCluster" }, UpdateClusterRequest, UpdateClusterResponse, [ClusterNotFoundFault, InvalidClusterStateFault, InvalidParameterCombinationException, InvalidParameterGroupStateFault, InvalidParameterValueException, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the parameters of a parameter group. You can modify up to 20 parameters in
 * a single request by submitting a list parameter name and value pairs.
 */export const updateParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.UpdateParameterGroup" }, UpdateParameterGroupRequest, UpdateParameterGroupResponse, [InvalidParameterCombinationException, InvalidParameterGroupStateFault, InvalidParameterValueException, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more nodes from a DAX cluster.
 * 
 * 
 * 
 * 
 * You cannot use `DecreaseReplicationFactor` to remove the last node
 * in a DAX cluster. If you need to do this, use
 * `DeleteCluster` instead.
 */export const decreaseReplicationFactor = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.DecreaseReplicationFactor" }, DecreaseReplicationFactorRequest, DecreaseReplicationFactorResponse, [ClusterNotFoundFault, InvalidClusterStateFault, InvalidParameterCombinationException, InvalidParameterValueException, NodeNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a subnet group.
 * 
 * 
 * 
 * 
 * You cannot delete a subnet group if it is associated with any DAX
 * clusters.
 */export const deleteSubnetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.DeleteSubnetGroup" }, DeleteSubnetGroupRequest, DeleteSubnetGroupResponse, [ServiceLinkedRoleNotFoundFault, SubnetGroupInUseFault, SubnetGroupNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the default system parameter information for the DAX caching
 * software.
 */export const describeDefaultParameters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.DescribeDefaultParameters" }, DescribeDefaultParametersRequest, DescribeDefaultParametersResponse, [InvalidParameterCombinationException, InvalidParameterValueException, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Reboots a single node of a DAX cluster. The reboot action takes
 * place as soon as possible. During the reboot, the node status is set to
 * REBOOTING.
 * 
 * 
 * 
 * 
 * 
 * `RebootNode` restarts the DAX engine process and does not remove the
 * contents of the cache.
 */export const rebootNode = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.RebootNode" }, RebootNodeRequest, RebootNodeResponse, [ClusterNotFoundFault, InvalidClusterStateFault, InvalidParameterCombinationException, InvalidParameterValueException, NodeNotFoundFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new parameter group. A parameter group is a collection of parameters that
 * you apply to all of the nodes in a DAX cluster.
 */export const createParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.CreateParameterGroup" }, CreateParameterGroupRequest, CreateParameterGroupResponse, [InvalidParameterCombinationException, InvalidParameterGroupStateFault, InvalidParameterValueException, ParameterGroupAlreadyExistsFault, ParameterGroupQuotaExceededFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more nodes to a DAX cluster.
 */export const increaseReplicationFactor = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.IncreaseReplicationFactor" }, IncreaseReplicationFactorRequest, IncreaseReplicationFactorResponse, [ClusterNotFoundFault, InsufficientClusterCapacityFault, InvalidClusterStateFault, InvalidParameterCombinationException, InvalidParameterValueException, InvalidVPCNetworkStateFault, NodeQuotaForClusterExceededFault, NodeQuotaForCustomerExceededFault, ServiceLinkedRoleNotFoundFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
 */export const createCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.CreateCluster" }, CreateClusterRequest, CreateClusterResponse, [ClusterAlreadyExistsFault, ClusterQuotaForCustomerExceededFault, InsufficientClusterCapacityFault, InvalidClusterStateFault, InvalidParameterCombinationException, InvalidParameterGroupStateFault, InvalidParameterValueException, InvalidVPCNetworkStateFault, NodeQuotaForClusterExceededFault, NodeQuotaForCustomerExceededFault, ParameterGroupNotFoundFault, ServiceLinkedRoleNotFoundFault, ServiceQuotaExceededException, SubnetGroupNotFoundFault, TagQuotaPerResourceExceeded]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new subnet group.
 */export const createSubnetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.CreateSubnetGroup" }, CreateSubnetGroupRequest, CreateSubnetGroupResponse, [InvalidSubnet, ServiceLinkedRoleNotFoundFault, SubnetGroupAlreadyExistsFault, SubnetGroupQuotaExceededFault, SubnetNotAllowedFault, SubnetQuotaExceededFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies an existing subnet group.
 */export const updateSubnetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/", method: "POST", sdkId: "DAX", sigV4ServiceName: "dax", name: "AmazonDAXV3.UpdateSubnetGroup" }, UpdateSubnetGroupRequest, UpdateSubnetGroupResponse, [InvalidSubnet, ServiceLinkedRoleNotFoundFault, SubnetGroupNotFoundFault, SubnetInUse, SubnetNotAllowedFault, SubnetQuotaExceededFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

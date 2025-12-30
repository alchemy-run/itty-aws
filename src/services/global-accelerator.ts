import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class ListCrossAccountResourceAccountsRequest extends S.Class<ListCrossAccountResourceAccountsRequest>("ListCrossAccountResourceAccountsRequest")({}) {}
export const DestinationAddresses = S.Array(S.String);
export const DestinationPorts = S.Array(S.Number);
export const IpAddresses = S.Array(S.String);
export const Principals = S.Array(S.String);
export const AwsAccountIds = S.Array(S.String);
export const EndpointIds = S.Array(S.String);
export const TagKeys = S.Array(S.String);
export class AdvertiseByoipCidrRequest extends S.Class<AdvertiseByoipCidrRequest>("AdvertiseByoipCidrRequest")({Cidr: S.String}) {}
export class AllowCustomRoutingTrafficRequest extends S.Class<AllowCustomRoutingTrafficRequest>("AllowCustomRoutingTrafficRequest")({EndpointGroupArn: S.String, EndpointId: S.String, DestinationAddresses: S.optional(DestinationAddresses), DestinationPorts: S.optional(DestinationPorts), AllowAllTrafficToEndpoint: S.optional(S.Boolean)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const Tags = S.Array(Tag);
export class CreateCustomRoutingAcceleratorRequest extends S.Class<CreateCustomRoutingAcceleratorRequest>("CreateCustomRoutingAcceleratorRequest")({Name: S.String, IpAddressType: S.optional(S.String), IpAddresses: S.optional(IpAddresses), Enabled: S.optional(S.Boolean), IdempotencyToken: S.String, Tags: S.optional(Tags)}) {}
export class PortRange extends S.Class<PortRange>("PortRange")({FromPort: S.optional(S.Number), ToPort: S.optional(S.Number)}) {}
export const PortRanges = S.Array(PortRange);
export class CreateListenerRequest extends S.Class<CreateListenerRequest>("CreateListenerRequest")({AcceleratorArn: S.String, PortRanges: PortRanges, Protocol: S.String, ClientAffinity: S.optional(S.String), IdempotencyToken: S.String}) {}
export class DeleteAcceleratorRequest extends S.Class<DeleteAcceleratorRequest>("DeleteAcceleratorRequest")({AcceleratorArn: S.String}) {}
export class DeleteCrossAccountAttachmentRequest extends S.Class<DeleteCrossAccountAttachmentRequest>("DeleteCrossAccountAttachmentRequest")({AttachmentArn: S.String}) {}
export class DeleteCustomRoutingAcceleratorRequest extends S.Class<DeleteCustomRoutingAcceleratorRequest>("DeleteCustomRoutingAcceleratorRequest")({AcceleratorArn: S.String}) {}
export class DeleteCustomRoutingEndpointGroupRequest extends S.Class<DeleteCustomRoutingEndpointGroupRequest>("DeleteCustomRoutingEndpointGroupRequest")({EndpointGroupArn: S.String}) {}
export class DeleteCustomRoutingListenerRequest extends S.Class<DeleteCustomRoutingListenerRequest>("DeleteCustomRoutingListenerRequest")({ListenerArn: S.String}) {}
export class DeleteEndpointGroupRequest extends S.Class<DeleteEndpointGroupRequest>("DeleteEndpointGroupRequest")({EndpointGroupArn: S.String}) {}
export class DeleteListenerRequest extends S.Class<DeleteListenerRequest>("DeleteListenerRequest")({ListenerArn: S.String}) {}
export class DenyCustomRoutingTrafficRequest extends S.Class<DenyCustomRoutingTrafficRequest>("DenyCustomRoutingTrafficRequest")({EndpointGroupArn: S.String, EndpointId: S.String, DestinationAddresses: S.optional(DestinationAddresses), DestinationPorts: S.optional(DestinationPorts), DenyAllTrafficToEndpoint: S.optional(S.Boolean)}) {}
export class DeprovisionByoipCidrRequest extends S.Class<DeprovisionByoipCidrRequest>("DeprovisionByoipCidrRequest")({Cidr: S.String}) {}
export class DescribeAcceleratorRequest extends S.Class<DescribeAcceleratorRequest>("DescribeAcceleratorRequest")({AcceleratorArn: S.String}) {}
export class DescribeAcceleratorAttributesRequest extends S.Class<DescribeAcceleratorAttributesRequest>("DescribeAcceleratorAttributesRequest")({AcceleratorArn: S.String}) {}
export class DescribeCrossAccountAttachmentRequest extends S.Class<DescribeCrossAccountAttachmentRequest>("DescribeCrossAccountAttachmentRequest")({AttachmentArn: S.String}) {}
export class DescribeCustomRoutingAcceleratorRequest extends S.Class<DescribeCustomRoutingAcceleratorRequest>("DescribeCustomRoutingAcceleratorRequest")({AcceleratorArn: S.String}) {}
export class DescribeCustomRoutingAcceleratorAttributesRequest extends S.Class<DescribeCustomRoutingAcceleratorAttributesRequest>("DescribeCustomRoutingAcceleratorAttributesRequest")({AcceleratorArn: S.String}) {}
export class DescribeCustomRoutingEndpointGroupRequest extends S.Class<DescribeCustomRoutingEndpointGroupRequest>("DescribeCustomRoutingEndpointGroupRequest")({EndpointGroupArn: S.String}) {}
export class DescribeCustomRoutingListenerRequest extends S.Class<DescribeCustomRoutingListenerRequest>("DescribeCustomRoutingListenerRequest")({ListenerArn: S.String}) {}
export class DescribeEndpointGroupRequest extends S.Class<DescribeEndpointGroupRequest>("DescribeEndpointGroupRequest")({EndpointGroupArn: S.String}) {}
export class DescribeListenerRequest extends S.Class<DescribeListenerRequest>("DescribeListenerRequest")({ListenerArn: S.String}) {}
export class ListAcceleratorsRequest extends S.Class<ListAcceleratorsRequest>("ListAcceleratorsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListByoipCidrsRequest extends S.Class<ListByoipCidrsRequest>("ListByoipCidrsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListCrossAccountAttachmentsRequest extends S.Class<ListCrossAccountAttachmentsRequest>("ListCrossAccountAttachmentsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListCrossAccountResourceAccountsResponse extends S.Class<ListCrossAccountResourceAccountsResponse>("ListCrossAccountResourceAccountsResponse")({ResourceOwnerAwsAccountIds: S.optional(AwsAccountIds)}) {}
export class ListCrossAccountResourcesRequest extends S.Class<ListCrossAccountResourcesRequest>("ListCrossAccountResourcesRequest")({AcceleratorArn: S.optional(S.String), ResourceOwnerAwsAccountId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListCustomRoutingAcceleratorsRequest extends S.Class<ListCustomRoutingAcceleratorsRequest>("ListCustomRoutingAcceleratorsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListCustomRoutingEndpointGroupsRequest extends S.Class<ListCustomRoutingEndpointGroupsRequest>("ListCustomRoutingEndpointGroupsRequest")({ListenerArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListCustomRoutingListenersRequest extends S.Class<ListCustomRoutingListenersRequest>("ListCustomRoutingListenersRequest")({AcceleratorArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListCustomRoutingPortMappingsRequest extends S.Class<ListCustomRoutingPortMappingsRequest>("ListCustomRoutingPortMappingsRequest")({AcceleratorArn: S.String, EndpointGroupArn: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListCustomRoutingPortMappingsByDestinationRequest extends S.Class<ListCustomRoutingPortMappingsByDestinationRequest>("ListCustomRoutingPortMappingsByDestinationRequest")({EndpointId: S.String, DestinationAddress: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListEndpointGroupsRequest extends S.Class<ListEndpointGroupsRequest>("ListEndpointGroupsRequest")({ListenerArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListListenersRequest extends S.Class<ListListenersRequest>("ListListenersRequest")({AcceleratorArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class RemoveCustomRoutingEndpointsRequest extends S.Class<RemoveCustomRoutingEndpointsRequest>("RemoveCustomRoutingEndpointsRequest")({EndpointIds: EndpointIds, EndpointGroupArn: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateAcceleratorRequest extends S.Class<UpdateAcceleratorRequest>("UpdateAcceleratorRequest")({AcceleratorArn: S.String, Name: S.optional(S.String), IpAddressType: S.optional(S.String), IpAddresses: S.optional(IpAddresses), Enabled: S.optional(S.Boolean)}) {}
export class UpdateAcceleratorAttributesRequest extends S.Class<UpdateAcceleratorAttributesRequest>("UpdateAcceleratorAttributesRequest")({AcceleratorArn: S.String, FlowLogsEnabled: S.optional(S.Boolean), FlowLogsS3Bucket: S.optional(S.String), FlowLogsS3Prefix: S.optional(S.String)}) {}
export class Resource extends S.Class<Resource>("Resource")({EndpointId: S.optional(S.String), Cidr: S.optional(S.String), Region: S.optional(S.String)}) {}
export const Resources = S.Array(Resource);
export class UpdateCrossAccountAttachmentRequest extends S.Class<UpdateCrossAccountAttachmentRequest>("UpdateCrossAccountAttachmentRequest")({AttachmentArn: S.String, Name: S.optional(S.String), AddPrincipals: S.optional(Principals), RemovePrincipals: S.optional(Principals), AddResources: S.optional(Resources), RemoveResources: S.optional(Resources)}) {}
export class UpdateCustomRoutingAcceleratorRequest extends S.Class<UpdateCustomRoutingAcceleratorRequest>("UpdateCustomRoutingAcceleratorRequest")({AcceleratorArn: S.String, Name: S.optional(S.String), IpAddressType: S.optional(S.String), IpAddresses: S.optional(IpAddresses), Enabled: S.optional(S.Boolean)}) {}
export class UpdateCustomRoutingAcceleratorAttributesRequest extends S.Class<UpdateCustomRoutingAcceleratorAttributesRequest>("UpdateCustomRoutingAcceleratorAttributesRequest")({AcceleratorArn: S.String, FlowLogsEnabled: S.optional(S.Boolean), FlowLogsS3Bucket: S.optional(S.String), FlowLogsS3Prefix: S.optional(S.String)}) {}
export class UpdateCustomRoutingListenerRequest extends S.Class<UpdateCustomRoutingListenerRequest>("UpdateCustomRoutingListenerRequest")({ListenerArn: S.String, PortRanges: PortRanges}) {}
export class EndpointConfiguration extends S.Class<EndpointConfiguration>("EndpointConfiguration")({EndpointId: S.optional(S.String), Weight: S.optional(S.Number), ClientIPPreservationEnabled: S.optional(S.Boolean), AttachmentArn: S.optional(S.String)}) {}
export const EndpointConfigurations = S.Array(EndpointConfiguration);
export class PortOverride extends S.Class<PortOverride>("PortOverride")({ListenerPort: S.optional(S.Number), EndpointPort: S.optional(S.Number)}) {}
export const PortOverrides = S.Array(PortOverride);
export class UpdateEndpointGroupRequest extends S.Class<UpdateEndpointGroupRequest>("UpdateEndpointGroupRequest")({EndpointGroupArn: S.String, EndpointConfigurations: S.optional(EndpointConfigurations), TrafficDialPercentage: S.optional(S.Number), HealthCheckPort: S.optional(S.Number), HealthCheckProtocol: S.optional(S.String), HealthCheckPath: S.optional(S.String), HealthCheckIntervalSeconds: S.optional(S.Number), ThresholdCount: S.optional(S.Number), PortOverrides: S.optional(PortOverrides)}) {}
export class UpdateListenerRequest extends S.Class<UpdateListenerRequest>("UpdateListenerRequest")({ListenerArn: S.String, PortRanges: S.optional(PortRanges), Protocol: S.optional(S.String), ClientAffinity: S.optional(S.String)}) {}
export class WithdrawByoipCidrRequest extends S.Class<WithdrawByoipCidrRequest>("WithdrawByoipCidrRequest")({Cidr: S.String}) {}
export const CustomRoutingProtocols = S.Array(S.String);
export class CustomRoutingEndpointConfiguration extends S.Class<CustomRoutingEndpointConfiguration>("CustomRoutingEndpointConfiguration")({EndpointId: S.optional(S.String), AttachmentArn: S.optional(S.String)}) {}
export const CustomRoutingEndpointConfigurations = S.Array(CustomRoutingEndpointConfiguration);
export class CustomRoutingDestinationConfiguration extends S.Class<CustomRoutingDestinationConfiguration>("CustomRoutingDestinationConfiguration")({FromPort: S.Number, ToPort: S.Number, Protocols: CustomRoutingProtocols}) {}
export const CustomRoutingDestinationConfigurations = S.Array(CustomRoutingDestinationConfiguration);
export class IpSet extends S.Class<IpSet>("IpSet")({IpFamily: S.optional(S.String), IpAddresses: S.optional(IpAddresses), IpAddressFamily: S.optional(S.String)}) {}
export const IpSets = S.Array(IpSet);
export class AcceleratorEvent extends S.Class<AcceleratorEvent>("AcceleratorEvent")({Message: S.optional(S.String), Timestamp: S.optional(S.Date)}) {}
export const AcceleratorEvents = S.Array(AcceleratorEvent);
export class Accelerator extends S.Class<Accelerator>("Accelerator")({AcceleratorArn: S.optional(S.String), Name: S.optional(S.String), IpAddressType: S.optional(S.String), Enabled: S.optional(S.Boolean), IpSets: S.optional(IpSets), DnsName: S.optional(S.String), Status: S.optional(S.String), CreatedTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date), DualStackDnsName: S.optional(S.String), Events: S.optional(AcceleratorEvents)}) {}
export const Accelerators = S.Array(Accelerator);
export class ByoipCidrEvent extends S.Class<ByoipCidrEvent>("ByoipCidrEvent")({Message: S.optional(S.String), Timestamp: S.optional(S.Date)}) {}
export const ByoipCidrEvents = S.Array(ByoipCidrEvent);
export class ByoipCidr extends S.Class<ByoipCidr>("ByoipCidr")({Cidr: S.optional(S.String), State: S.optional(S.String), Events: S.optional(ByoipCidrEvents)}) {}
export const ByoipCidrs = S.Array(ByoipCidr);
export class Attachment extends S.Class<Attachment>("Attachment")({AttachmentArn: S.optional(S.String), Name: S.optional(S.String), Principals: S.optional(Principals), Resources: S.optional(Resources), LastModifiedTime: S.optional(S.Date), CreatedTime: S.optional(S.Date)}) {}
export const Attachments = S.Array(Attachment);
export class CustomRoutingAccelerator extends S.Class<CustomRoutingAccelerator>("CustomRoutingAccelerator")({AcceleratorArn: S.optional(S.String), Name: S.optional(S.String), IpAddressType: S.optional(S.String), Enabled: S.optional(S.Boolean), IpSets: S.optional(IpSets), DnsName: S.optional(S.String), Status: S.optional(S.String), CreatedTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date)}) {}
export const CustomRoutingAccelerators = S.Array(CustomRoutingAccelerator);
export const Protocols = S.Array(S.String);
export class CustomRoutingDestinationDescription extends S.Class<CustomRoutingDestinationDescription>("CustomRoutingDestinationDescription")({FromPort: S.optional(S.Number), ToPort: S.optional(S.Number), Protocols: S.optional(Protocols)}) {}
export const CustomRoutingDestinationDescriptions = S.Array(CustomRoutingDestinationDescription);
export class CustomRoutingEndpointDescription extends S.Class<CustomRoutingEndpointDescription>("CustomRoutingEndpointDescription")({EndpointId: S.optional(S.String)}) {}
export const CustomRoutingEndpointDescriptions = S.Array(CustomRoutingEndpointDescription);
export class CustomRoutingEndpointGroup extends S.Class<CustomRoutingEndpointGroup>("CustomRoutingEndpointGroup")({EndpointGroupArn: S.optional(S.String), EndpointGroupRegion: S.optional(S.String), DestinationDescriptions: S.optional(CustomRoutingDestinationDescriptions), EndpointDescriptions: S.optional(CustomRoutingEndpointDescriptions)}) {}
export const CustomRoutingEndpointGroups = S.Array(CustomRoutingEndpointGroup);
export class CustomRoutingListener extends S.Class<CustomRoutingListener>("CustomRoutingListener")({ListenerArn: S.optional(S.String), PortRanges: S.optional(PortRanges)}) {}
export const CustomRoutingListeners = S.Array(CustomRoutingListener);
export class EndpointDescription extends S.Class<EndpointDescription>("EndpointDescription")({EndpointId: S.optional(S.String), Weight: S.optional(S.Number), HealthState: S.optional(S.String), HealthReason: S.optional(S.String), ClientIPPreservationEnabled: S.optional(S.Boolean)}) {}
export const EndpointDescriptions = S.Array(EndpointDescription);
export class EndpointGroup extends S.Class<EndpointGroup>("EndpointGroup")({EndpointGroupArn: S.optional(S.String), EndpointGroupRegion: S.optional(S.String), EndpointDescriptions: S.optional(EndpointDescriptions), TrafficDialPercentage: S.optional(S.Number), HealthCheckPort: S.optional(S.Number), HealthCheckProtocol: S.optional(S.String), HealthCheckPath: S.optional(S.String), HealthCheckIntervalSeconds: S.optional(S.Number), ThresholdCount: S.optional(S.Number), PortOverrides: S.optional(PortOverrides)}) {}
export const EndpointGroups = S.Array(EndpointGroup);
export class Listener extends S.Class<Listener>("Listener")({ListenerArn: S.optional(S.String), PortRanges: S.optional(PortRanges), Protocol: S.optional(S.String), ClientAffinity: S.optional(S.String)}) {}
export const Listeners = S.Array(Listener);
export class CidrAuthorizationContext extends S.Class<CidrAuthorizationContext>("CidrAuthorizationContext")({Message: S.String, Signature: S.String}) {}
export class EndpointIdentifier extends S.Class<EndpointIdentifier>("EndpointIdentifier")({EndpointId: S.String, ClientIPPreservationEnabled: S.optional(S.Boolean)}) {}
export const EndpointIdentifiers = S.Array(EndpointIdentifier);
export class AddCustomRoutingEndpointsRequest extends S.Class<AddCustomRoutingEndpointsRequest>("AddCustomRoutingEndpointsRequest")({EndpointConfigurations: CustomRoutingEndpointConfigurations, EndpointGroupArn: S.String}) {}
export class AddEndpointsRequest extends S.Class<AddEndpointsRequest>("AddEndpointsRequest")({EndpointConfigurations: EndpointConfigurations, EndpointGroupArn: S.String}) {}
export class CreateAcceleratorRequest extends S.Class<CreateAcceleratorRequest>("CreateAcceleratorRequest")({Name: S.String, IpAddressType: S.optional(S.String), IpAddresses: S.optional(IpAddresses), Enabled: S.optional(S.Boolean), IdempotencyToken: S.String, Tags: S.optional(Tags)}) {}
export class CreateCrossAccountAttachmentRequest extends S.Class<CreateCrossAccountAttachmentRequest>("CreateCrossAccountAttachmentRequest")({Name: S.String, Principals: S.optional(Principals), Resources: S.optional(Resources), IdempotencyToken: S.String, Tags: S.optional(Tags)}) {}
export class CreateCustomRoutingEndpointGroupRequest extends S.Class<CreateCustomRoutingEndpointGroupRequest>("CreateCustomRoutingEndpointGroupRequest")({ListenerArn: S.String, EndpointGroupRegion: S.String, DestinationConfigurations: CustomRoutingDestinationConfigurations, IdempotencyToken: S.String}) {}
export class CreateCustomRoutingListenerRequest extends S.Class<CreateCustomRoutingListenerRequest>("CreateCustomRoutingListenerRequest")({AcceleratorArn: S.String, PortRanges: PortRanges, IdempotencyToken: S.String}) {}
export class CreateEndpointGroupRequest extends S.Class<CreateEndpointGroupRequest>("CreateEndpointGroupRequest")({ListenerArn: S.String, EndpointGroupRegion: S.String, EndpointConfigurations: S.optional(EndpointConfigurations), TrafficDialPercentage: S.optional(S.Number), HealthCheckPort: S.optional(S.Number), HealthCheckProtocol: S.optional(S.String), HealthCheckPath: S.optional(S.String), HealthCheckIntervalSeconds: S.optional(S.Number), ThresholdCount: S.optional(S.Number), IdempotencyToken: S.String, PortOverrides: S.optional(PortOverrides)}) {}
export class DeprovisionByoipCidrResponse extends S.Class<DeprovisionByoipCidrResponse>("DeprovisionByoipCidrResponse")({ByoipCidr: S.optional(ByoipCidr)}) {}
export class DescribeCustomRoutingAcceleratorResponse extends S.Class<DescribeCustomRoutingAcceleratorResponse>("DescribeCustomRoutingAcceleratorResponse")({Accelerator: S.optional(CustomRoutingAccelerator)}) {}
export class DescribeListenerResponse extends S.Class<DescribeListenerResponse>("DescribeListenerResponse")({Listener: S.optional(Listener)}) {}
export class ListAcceleratorsResponse extends S.Class<ListAcceleratorsResponse>("ListAcceleratorsResponse")({Accelerators: S.optional(Accelerators), NextToken: S.optional(S.String)}) {}
export class ListByoipCidrsResponse extends S.Class<ListByoipCidrsResponse>("ListByoipCidrsResponse")({ByoipCidrs: S.optional(ByoipCidrs), NextToken: S.optional(S.String)}) {}
export class ListCrossAccountAttachmentsResponse extends S.Class<ListCrossAccountAttachmentsResponse>("ListCrossAccountAttachmentsResponse")({CrossAccountAttachments: S.optional(Attachments), NextToken: S.optional(S.String)}) {}
export class ListCustomRoutingAcceleratorsResponse extends S.Class<ListCustomRoutingAcceleratorsResponse>("ListCustomRoutingAcceleratorsResponse")({Accelerators: S.optional(CustomRoutingAccelerators), NextToken: S.optional(S.String)}) {}
export class ListCustomRoutingEndpointGroupsResponse extends S.Class<ListCustomRoutingEndpointGroupsResponse>("ListCustomRoutingEndpointGroupsResponse")({EndpointGroups: S.optional(CustomRoutingEndpointGroups), NextToken: S.optional(S.String)}) {}
export class ListCustomRoutingListenersResponse extends S.Class<ListCustomRoutingListenersResponse>("ListCustomRoutingListenersResponse")({Listeners: S.optional(CustomRoutingListeners), NextToken: S.optional(S.String)}) {}
export class ListEndpointGroupsResponse extends S.Class<ListEndpointGroupsResponse>("ListEndpointGroupsResponse")({EndpointGroups: S.optional(EndpointGroups), NextToken: S.optional(S.String)}) {}
export class ListListenersResponse extends S.Class<ListListenersResponse>("ListListenersResponse")({Listeners: S.optional(Listeners), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(Tags)}) {}
export class ProvisionByoipCidrRequest extends S.Class<ProvisionByoipCidrRequest>("ProvisionByoipCidrRequest")({Cidr: S.String, CidrAuthorizationContext: CidrAuthorizationContext}) {}
export class RemoveEndpointsRequest extends S.Class<RemoveEndpointsRequest>("RemoveEndpointsRequest")({EndpointIdentifiers: EndpointIdentifiers, EndpointGroupArn: S.String}) {}
export class UpdateAcceleratorResponse extends S.Class<UpdateAcceleratorResponse>("UpdateAcceleratorResponse")({Accelerator: S.optional(Accelerator)}) {}
export class AcceleratorAttributes extends S.Class<AcceleratorAttributes>("AcceleratorAttributes")({FlowLogsEnabled: S.optional(S.Boolean), FlowLogsS3Bucket: S.optional(S.String), FlowLogsS3Prefix: S.optional(S.String)}) {}
export class UpdateAcceleratorAttributesResponse extends S.Class<UpdateAcceleratorAttributesResponse>("UpdateAcceleratorAttributesResponse")({AcceleratorAttributes: S.optional(AcceleratorAttributes)}) {}
export class UpdateCrossAccountAttachmentResponse extends S.Class<UpdateCrossAccountAttachmentResponse>("UpdateCrossAccountAttachmentResponse")({CrossAccountAttachment: S.optional(Attachment)}) {}
export class UpdateCustomRoutingAcceleratorResponse extends S.Class<UpdateCustomRoutingAcceleratorResponse>("UpdateCustomRoutingAcceleratorResponse")({Accelerator: S.optional(CustomRoutingAccelerator)}) {}
export class CustomRoutingAcceleratorAttributes extends S.Class<CustomRoutingAcceleratorAttributes>("CustomRoutingAcceleratorAttributes")({FlowLogsEnabled: S.optional(S.Boolean), FlowLogsS3Bucket: S.optional(S.String), FlowLogsS3Prefix: S.optional(S.String)}) {}
export class UpdateCustomRoutingAcceleratorAttributesResponse extends S.Class<UpdateCustomRoutingAcceleratorAttributesResponse>("UpdateCustomRoutingAcceleratorAttributesResponse")({AcceleratorAttributes: S.optional(CustomRoutingAcceleratorAttributes)}) {}
export class UpdateCustomRoutingListenerResponse extends S.Class<UpdateCustomRoutingListenerResponse>("UpdateCustomRoutingListenerResponse")({Listener: S.optional(CustomRoutingListener)}) {}
export class UpdateEndpointGroupResponse extends S.Class<UpdateEndpointGroupResponse>("UpdateEndpointGroupResponse")({EndpointGroup: S.optional(EndpointGroup)}) {}
export class UpdateListenerResponse extends S.Class<UpdateListenerResponse>("UpdateListenerResponse")({Listener: S.optional(Listener)}) {}
export class WithdrawByoipCidrResponse extends S.Class<WithdrawByoipCidrResponse>("WithdrawByoipCidrResponse")({ByoipCidr: S.optional(ByoipCidr)}) {}
export class SocketAddress extends S.Class<SocketAddress>("SocketAddress")({IpAddress: S.optional(S.String), Port: S.optional(S.Number)}) {}
export const SocketAddresses = S.Array(SocketAddress);
export class CrossAccountResource extends S.Class<CrossAccountResource>("CrossAccountResource")({EndpointId: S.optional(S.String), Cidr: S.optional(S.String), AttachmentArn: S.optional(S.String)}) {}
export const CrossAccountResources = S.Array(CrossAccountResource);
export class DestinationPortMapping extends S.Class<DestinationPortMapping>("DestinationPortMapping")({AcceleratorArn: S.optional(S.String), AcceleratorSocketAddresses: S.optional(SocketAddresses), EndpointGroupArn: S.optional(S.String), EndpointId: S.optional(S.String), EndpointGroupRegion: S.optional(S.String), DestinationSocketAddress: S.optional(SocketAddress), IpAddressType: S.optional(S.String), DestinationTrafficState: S.optional(S.String)}) {}
export const DestinationPortMappings = S.Array(DestinationPortMapping);
export class AddCustomRoutingEndpointsResponse extends S.Class<AddCustomRoutingEndpointsResponse>("AddCustomRoutingEndpointsResponse")({EndpointDescriptions: S.optional(CustomRoutingEndpointDescriptions), EndpointGroupArn: S.optional(S.String)}) {}
export class AddEndpointsResponse extends S.Class<AddEndpointsResponse>("AddEndpointsResponse")({EndpointDescriptions: S.optional(EndpointDescriptions), EndpointGroupArn: S.optional(S.String)}) {}
export class CreateAcceleratorResponse extends S.Class<CreateAcceleratorResponse>("CreateAcceleratorResponse")({Accelerator: S.optional(Accelerator)}) {}
export class CreateCrossAccountAttachmentResponse extends S.Class<CreateCrossAccountAttachmentResponse>("CreateCrossAccountAttachmentResponse")({CrossAccountAttachment: S.optional(Attachment)}) {}
export class CreateCustomRoutingEndpointGroupResponse extends S.Class<CreateCustomRoutingEndpointGroupResponse>("CreateCustomRoutingEndpointGroupResponse")({EndpointGroup: S.optional(CustomRoutingEndpointGroup)}) {}
export class CreateCustomRoutingListenerResponse extends S.Class<CreateCustomRoutingListenerResponse>("CreateCustomRoutingListenerResponse")({Listener: S.optional(CustomRoutingListener)}) {}
export class CreateEndpointGroupResponse extends S.Class<CreateEndpointGroupResponse>("CreateEndpointGroupResponse")({EndpointGroup: S.optional(EndpointGroup)}) {}
export class CreateListenerResponse extends S.Class<CreateListenerResponse>("CreateListenerResponse")({Listener: S.optional(Listener)}) {}
export class DescribeAcceleratorAttributesResponse extends S.Class<DescribeAcceleratorAttributesResponse>("DescribeAcceleratorAttributesResponse")({AcceleratorAttributes: S.optional(AcceleratorAttributes)}) {}
export class DescribeCrossAccountAttachmentResponse extends S.Class<DescribeCrossAccountAttachmentResponse>("DescribeCrossAccountAttachmentResponse")({CrossAccountAttachment: S.optional(Attachment)}) {}
export class DescribeCustomRoutingAcceleratorAttributesResponse extends S.Class<DescribeCustomRoutingAcceleratorAttributesResponse>("DescribeCustomRoutingAcceleratorAttributesResponse")({AcceleratorAttributes: S.optional(CustomRoutingAcceleratorAttributes)}) {}
export class DescribeCustomRoutingListenerResponse extends S.Class<DescribeCustomRoutingListenerResponse>("DescribeCustomRoutingListenerResponse")({Listener: S.optional(CustomRoutingListener)}) {}
export class ListCrossAccountResourcesResponse extends S.Class<ListCrossAccountResourcesResponse>("ListCrossAccountResourcesResponse")({CrossAccountResources: S.optional(CrossAccountResources), NextToken: S.optional(S.String)}) {}
export class ListCustomRoutingPortMappingsByDestinationResponse extends S.Class<ListCustomRoutingPortMappingsByDestinationResponse>("ListCustomRoutingPortMappingsByDestinationResponse")({DestinationPortMappings: S.optional(DestinationPortMappings), NextToken: S.optional(S.String)}) {}
export class ProvisionByoipCidrResponse extends S.Class<ProvisionByoipCidrResponse>("ProvisionByoipCidrResponse")({ByoipCidr: S.optional(ByoipCidr)}) {}
export class PortMapping extends S.Class<PortMapping>("PortMapping")({AcceleratorPort: S.optional(S.Number), EndpointGroupArn: S.optional(S.String), EndpointId: S.optional(S.String), DestinationSocketAddress: S.optional(SocketAddress), Protocols: S.optional(CustomRoutingProtocols), DestinationTrafficState: S.optional(S.String)}) {}
export const PortMappings = S.Array(PortMapping);
export class AdvertiseByoipCidrResponse extends S.Class<AdvertiseByoipCidrResponse>("AdvertiseByoipCidrResponse")({ByoipCidr: S.optional(ByoipCidr)}) {}
export class CreateCustomRoutingAcceleratorResponse extends S.Class<CreateCustomRoutingAcceleratorResponse>("CreateCustomRoutingAcceleratorResponse")({Accelerator: S.optional(CustomRoutingAccelerator)}) {}
export class DescribeAcceleratorResponse extends S.Class<DescribeAcceleratorResponse>("DescribeAcceleratorResponse")({Accelerator: S.optional(Accelerator)}) {}
export class DescribeCustomRoutingEndpointGroupResponse extends S.Class<DescribeCustomRoutingEndpointGroupResponse>("DescribeCustomRoutingEndpointGroupResponse")({EndpointGroup: S.optional(CustomRoutingEndpointGroup)}) {}
export class DescribeEndpointGroupResponse extends S.Class<DescribeEndpointGroupResponse>("DescribeEndpointGroupResponse")({EndpointGroup: S.optional(EndpointGroup)}) {}
export class ListCustomRoutingPortMappingsResponse extends S.Class<ListCustomRoutingPortMappingsResponse>("ListCustomRoutingPortMappingsResponse")({PortMappings: S.optional(PortMappings), NextToken: S.optional(S.String)}) {}

//# Errors
export class AcceleratorNotDisabledException extends S.TaggedError<AcceleratorNotDisabledException>()("AcceleratorNotDisabledException", {}) {};
export class EndpointGroupNotFoundException extends S.TaggedError<EndpointGroupNotFoundException>()("EndpointGroupNotFoundException", {}) {};
export class InternalServiceErrorException extends S.TaggedError<InternalServiceErrorException>()("InternalServiceErrorException", {}) {};
export class AssociatedEndpointGroupFoundException extends S.TaggedError<AssociatedEndpointGroupFoundException>()("AssociatedEndpointGroupFoundException", {}) {};
export class InvalidArgumentException extends S.TaggedError<InvalidArgumentException>()("InvalidArgumentException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class AcceleratorNotFoundException extends S.TaggedError<AcceleratorNotFoundException>()("AcceleratorNotFoundException", {}) {};
export class AssociatedListenerFoundException extends S.TaggedError<AssociatedListenerFoundException>()("AssociatedListenerFoundException", {}) {};
export class ListenerNotFoundException extends S.TaggedError<ListenerNotFoundException>()("ListenerNotFoundException", {}) {};
export class InvalidNextTokenException extends S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {}) {};
export class AttachmentNotFoundException extends S.TaggedError<AttachmentNotFoundException>()("AttachmentNotFoundException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {Message: S.optional(S.String)}) {};
export class TransactionInProgressException extends S.TaggedError<TransactionInProgressException>()("TransactionInProgressException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class InvalidPortRangeException extends S.TaggedError<InvalidPortRangeException>()("InvalidPortRangeException", {}) {};
export class ByoipCidrNotFoundException extends S.TaggedError<ByoipCidrNotFoundException>()("ByoipCidrNotFoundException", {}) {};
export class EndpointGroupAlreadyExistsException extends S.TaggedError<EndpointGroupAlreadyExistsException>()("EndpointGroupAlreadyExistsException", {}) {};
export class IncorrectCidrStateException extends S.TaggedError<IncorrectCidrStateException>()("IncorrectCidrStateException", {}) {};
export class EndpointNotFoundException extends S.TaggedError<EndpointNotFoundException>()("EndpointNotFoundException", {}) {};
export class EndpointAlreadyExistsException extends S.TaggedError<EndpointAlreadyExistsException>()("EndpointAlreadyExistsException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic
 * for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a
 * specified list of destination IP addresses and ports. Note that you cannot specify IP addresses
 * or ports outside of the range that you configured for the endpoint group.
 * 
 * 
 * After you make changes, you can verify that the updates are complete by checking the status of your
 * accelerator: the status changes from IN_PROGRESS to DEPLOYED.
 */export const denyCustomRoutingTraffic = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DenyCustomRoutingTraffic" }, DenyCustomRoutingTrafficRequest, S.Struct({}), [EndpointGroupNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the accounts that have cross-account resources.
 * 
 * 
 * For more information, see
 * Working with cross-account attachments and resources in Global Accelerator in the
 * Global Accelerator Developer Guide.
 */export const listCrossAccountResourceAccounts = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ListCrossAccountResourceAccounts" }, ListCrossAccountResourceAccountsRequest, ListCrossAccountResourceAccountsResponse, [AccessDeniedException, InternalServiceErrorException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Add tags to an accelerator resource.
 * 
 * 
 * For more information, see Tagging
 * in Global Accelerator in the *Global Accelerator Developer Guide*.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.TagResource" }, TagResourceRequest, TagResourceResponse, [AcceleratorNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value.
 * The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.
 * 
 * 
 * For more information, see Tagging
 * in Global Accelerator in the *Global Accelerator Developer Guide*.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AcceleratorNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic
 * for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a
 * specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports
 * outside of the range that you configured for the endpoint group.
 * 
 * 
 * After you make changes, you can verify that the updates are complete by checking the status of your
 * accelerator: the status changes from IN_PROGRESS to DEPLOYED.
 */export const allowCustomRoutingTraffic = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.AllowCustomRoutingTraffic" }, AllowCustomRoutingTrafficRequest, S.Struct({}), [EndpointGroupNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an endpoint group from a listener for a custom routing accelerator.
 */export const deleteCustomRoutingEndpointGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup" }, DeleteCustomRoutingEndpointGroupRequest, S.Struct({}), [EndpointGroupNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a listener for a custom routing accelerator.
 */export const deleteCustomRoutingListener = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DeleteCustomRoutingListener" }, DeleteCustomRoutingListenerRequest, S.Struct({}), [AssociatedEndpointGroupFoundException, InternalServiceErrorException, InvalidArgumentException, ListenerNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an endpoint group from a listener.
 */export const deleteEndpointGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DeleteEndpointGroup" }, DeleteEndpointGroupRequest, S.Struct({}), [EndpointGroupNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a listener from an accelerator.
 */export const deleteListener = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DeleteListener" }, DeleteListenerRequest, S.Struct({}), [AssociatedEndpointGroupFoundException, InternalServiceErrorException, InvalidArgumentException, ListenerNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe a custom routing accelerator.
 */export const describeCustomRoutingAccelerator = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator" }, DescribeCustomRoutingAcceleratorRequest, DescribeCustomRoutingAcceleratorResponse, [AcceleratorNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe a listener.
 */export const describeListener = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DescribeListener" }, DescribeListenerRequest, DescribeListenerResponse, [InternalServiceErrorException, InvalidArgumentException, ListenerNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the IP address ranges that were specified in calls to ProvisionByoipCidr, including
 * the current state and a history of state changes.
 */export const listByoipCidrs = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ListByoipCidrs" }, ListByoipCidrsRequest, ListByoipCidrsResponse, [AccessDeniedException, InternalServiceErrorException, InvalidArgumentException, InvalidNextTokenException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the cross-account attachments that have been created in Global Accelerator.
 */export const listCrossAccountAttachments = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ListCrossAccountAttachments" }, ListCrossAccountAttachmentsRequest, ListCrossAccountAttachmentsResponse, [AccessDeniedException, InternalServiceErrorException, InvalidArgumentException, InvalidNextTokenException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the custom routing accelerators for an Amazon Web Services account.
 */export const listCustomRoutingAccelerators = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ListCustomRoutingAccelerators" }, ListCustomRoutingAcceleratorsRequest, ListCustomRoutingAcceleratorsResponse, [InternalServiceErrorException, InvalidArgumentException, InvalidNextTokenException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the endpoint groups that are associated with a listener for a custom routing accelerator.
 */export const listCustomRoutingEndpointGroups = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups" }, ListCustomRoutingEndpointGroupsRequest, ListCustomRoutingEndpointGroupsResponse, [InternalServiceErrorException, InvalidArgumentException, InvalidNextTokenException, ListenerNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the listeners for a custom routing accelerator.
 */export const listCustomRoutingListeners = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ListCustomRoutingListeners" }, ListCustomRoutingListenersRequest, ListCustomRoutingListenersResponse, [AcceleratorNotFoundException, InternalServiceErrorException, InvalidArgumentException, InvalidNextTokenException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the endpoint groups that are associated with a listener.
 */export const listEndpointGroups = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ListEndpointGroups" }, ListEndpointGroupsRequest, ListEndpointGroupsResponse, [InternalServiceErrorException, InvalidArgumentException, InvalidNextTokenException, ListenerNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the listeners for an accelerator.
 */export const listListeners = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ListListeners" }, ListListenersRequest, ListListenersResponse, [AcceleratorNotFoundException, InternalServiceErrorException, InvalidArgumentException, InvalidNextTokenException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all tags for an accelerator.
 * 
 * 
 * For more information, see Tagging
 * in Global Accelerator in the *Global Accelerator Developer Guide*.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AcceleratorNotFoundException, AttachmentNotFoundException, EndpointGroupNotFoundException, InternalServiceErrorException, InvalidArgumentException, ListenerNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove endpoints from an endpoint group.
 * 
 * 
 * The `RemoveEndpoints` API operation is the recommended option for removing endpoints. The alternative is to remove
 * endpoints by updating an endpoint group by using the
 * UpdateEndpointGroup
 * API operation. There are two advantages to using `AddEndpoints` to remove endpoints instead:
 * 
 * 
 * 
 * - It's more convenient, because you only need to specify the endpoints that you want to remove. With the
 * `UpdateEndpointGroup` API operation, you must specify all of the endpoints in the
 * endpoint group except the ones that you want to remove from the group.
 * 
 * 
 * 
 * - It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the
 * `UpdateEndpointGroup` API operation, Global Accelerator must resolve all of the endpoints that
 * remain in the group.
 */export const removeEndpoints = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.RemoveEndpoints" }, RemoveEndpointsRequest, S.Struct({}), [AccessDeniedException, EndpointGroupNotFoundException, InternalServiceErrorException, InvalidArgumentException, TransactionInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update an accelerator to make changes, such as the following:
 * 
 * 
 * 
 * - Change the name of the accelerator.
 * 
 * 
 * 
 * - Disable the accelerator so that it no longer accepts or routes traffic, or so that you can delete it.
 * 
 * 
 * 
 * - Enable the accelerator, if it is disabled.
 * 
 * 
 * 
 * - Change the IP address type to dual-stack if it is IPv4, or change the IP address type to IPv4 if it's dual-stack.
 * 
 * 
 * 
 * 
 * 
 * Be aware that static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no
 * longer accepts or routes traffic. However, when you delete the accelerator, you lose the static IP addresses that are assigned to it, so you
 * can no longer route traffic by using them.
 * 
 * 
 * 
 * 
 * Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
 * US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify `--region us-west-2`
 * on Amazon Web Services CLI commands.
 */export const updateAccelerator = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.UpdateAccelerator" }, UpdateAcceleratorRequest, UpdateAcceleratorResponse, [AcceleratorNotFoundException, AccessDeniedException, ConflictException, InternalServiceErrorException, InvalidArgumentException, TransactionInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the attributes for an accelerator.
 */export const updateAcceleratorAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.UpdateAcceleratorAttributes" }, UpdateAcceleratorAttributesRequest, UpdateAcceleratorAttributesResponse, [AcceleratorNotFoundException, AccessDeniedException, InternalServiceErrorException, InvalidArgumentException, TransactionInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a custom routing accelerator.
 */export const updateCustomRoutingAccelerator = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator" }, UpdateCustomRoutingAcceleratorRequest, UpdateCustomRoutingAcceleratorResponse, [AcceleratorNotFoundException, ConflictException, InternalServiceErrorException, InvalidArgumentException, TransactionInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the attributes for a custom routing accelerator.
 */export const updateCustomRoutingAcceleratorAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes" }, UpdateCustomRoutingAcceleratorAttributesRequest, UpdateCustomRoutingAcceleratorAttributesResponse, [AcceleratorNotFoundException, AccessDeniedException, InternalServiceErrorException, InvalidArgumentException, TransactionInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update an endpoint group. A resource must be valid and active when you add it as an endpoint.
 */export const updateEndpointGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.UpdateEndpointGroup" }, UpdateEndpointGroupRequest, UpdateEndpointGroupResponse, [AccessDeniedException, EndpointGroupNotFoundException, InternalServiceErrorException, InvalidArgumentException, LimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a listener.
 */export const updateListener = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.UpdateListener" }, UpdateListenerRequest, UpdateListenerResponse, [InternalServiceErrorException, InvalidArgumentException, InvalidPortRangeException, LimitExceededException, ListenerNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Add endpoints to an endpoint group. The `AddEndpoints` API operation is the recommended option for adding endpoints. The
 * alternative options are to add endpoints when you create an endpoint group (with the
 * CreateEndpointGroup API)
 * or when you update an endpoint group (with the
 * UpdateEndpointGroup API).
 * 
 * 
 * There are two advantages to using `AddEndpoints` to add endpoints in Global Accelerator:
 * 
 * 
 * 
 * - It's faster, because Global Accelerator only has to resolve the new endpoints that
 * you're adding, rather than resolving new and existing endpoints.
 * 
 * 
 * 
 * - It's more convenient, because you don't need to specify the current
 * endpoints that are already in the endpoint group, in addition to the new endpoints that
 * you want to add.
 * 
 * 
 * 
 * 
 * 
 * For information about endpoint types and requirements for endpoints that you can add
 * to Global Accelerator, see
 * Endpoints for standard accelerators in the *Global Accelerator Developer Guide*.
 */export const addEndpoints = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.AddEndpoints" }, AddEndpointsRequest, AddEndpointsResponse, [AccessDeniedException, EndpointGroupNotFoundException, InternalServiceErrorException, InvalidArgumentException, LimitExceededException, TransactionInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic
 * to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers.
 * 
 * 
 * 
 * 
 * Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
 * US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify `--region us-west-2`
 * on Amazon Web Services CLI commands.
 */export const createAccelerator = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.CreateAccelerator" }, CreateAcceleratorRequest, CreateAcceleratorResponse, [AccessDeniedException, InternalServiceErrorException, InvalidArgumentException, LimitExceededException, TransactionInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a cross-account attachment in Global Accelerator. You create a cross-account attachment to
 * specify the *principals* who have permission to work with *resources*
 * in accelerators in their own account. You specify, in the same attachment, the resources that are shared.
 * 
 * 
 * A principal can be an Amazon Web Services account number or the Amazon Resource Name (ARN) for an
 * accelerator. For account numbers that are listed as principals, to work with a resource listed in the attachment,
 * you must sign in to an account specified as a principal. Then, you can work with resources that are listed,
 * with any of your accelerators. If an accelerator ARN is listed in the cross-account attachment as a principal,
 * anyone with permission to make updates to the accelerator can work with resources that are listed in the
 * attachment.
 * 
 * 
 * Specify each principal and resource separately. To specify two CIDR address pools, list
 * them individually under `Resources`, and so on. For a command line operation, for example,
 * you might use a statement like the following:
 * 
 * 
 * 
 * ` "Resources": [{"Cidr": "169.254.60.0/24"},{"Cidr": "169.254.59.0/24"}]`
 * 
 * 
 * 
 * For more information, see
 * Working with cross-account attachments and resources in Global Accelerator in the
 * Global Accelerator Developer Guide.
 */export const createCrossAccountAttachment = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.CreateCrossAccountAttachment" }, CreateCrossAccountAttachmentRequest, CreateCrossAccountAttachmentResponse, [AccessDeniedException, InternalServiceErrorException, InvalidArgumentException, LimitExceededException, TransactionInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a listener to process inbound connections from clients to a custom routing accelerator.
 * Connections arrive to assigned static IP addresses on the port range that you specify.
 */export const createCustomRoutingListener = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.CreateCustomRoutingListener" }, CreateCustomRoutingListenerRequest, CreateCustomRoutingListenerResponse, [AcceleratorNotFoundException, InternalServiceErrorException, InvalidArgumentException, InvalidPortRangeException, LimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services
 * Region. A resource must be valid and active when you add it as an endpoint.
 * 
 * 
 * For more information about endpoint types and requirements for endpoints that you can add
 * to Global Accelerator, see
 * Endpoints for standard accelerators in the *Global Accelerator Developer Guide*.
 */export const createEndpointGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.CreateEndpointGroup" }, CreateEndpointGroupRequest, CreateEndpointGroupResponse, [AcceleratorNotFoundException, AccessDeniedException, EndpointGroupAlreadyExistsException, InternalServiceErrorException, InvalidArgumentException, LimitExceededException, ListenerNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static
 * IP addresses on a port, port range, or list of port ranges that you specify.
 */export const createListener = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.CreateListener" }, CreateListenerRequest, CreateListenerResponse, [AcceleratorNotFoundException, InternalServiceErrorException, InvalidArgumentException, InvalidPortRangeException, LimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources
 * (listeners and endpoint groups). To disable the accelerator, update the accelerator to set `Enabled` to false.
 * 
 * 
 * 
 * 
 * When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses.
 * Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges.
 * 
 * 
 * 
 * The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and
 * it no longer accepts or routes traffic. However, when you *delete* an accelerator, you lose the
 * static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them.
 * As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You
 * can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information,
 * see Identity and access management in
 * the *Global Accelerator Developer Guide*.
 */export const deleteAccelerator = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DeleteAccelerator" }, DeleteAcceleratorRequest, S.Struct({}), [AcceleratorNotDisabledException, AcceleratorNotFoundException, AssociatedListenerFoundException, InternalServiceErrorException, InvalidArgumentException, TransactionInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a cross-account attachment. When you delete an attachment, Global Accelerator revokes the permission
 * to use the resources in the attachment from all principals in the list of principals. Global Accelerator
 * revokes the permission for specific resources.
 * 
 * 
 * For more information, see
 * Working with cross-account attachments and resources in Global Accelerator in the
 * Global Accelerator Developer Guide.
 */export const deleteCrossAccountAttachment = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DeleteCrossAccountAttachment" }, DeleteCrossAccountAttachmentRequest, S.Struct({}), [AccessDeniedException, AttachmentNotFoundException, InternalServiceErrorException, InvalidArgumentException, TransactionInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources
 * (listeners and endpoint groups). To disable the accelerator, update the accelerator to set `Enabled` to false.
 * 
 * 
 * 
 * 
 * When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses.
 * 
 * 
 * 
 * The IP
 * addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and
 * it no longer accepts or routes traffic. However, when you *delete* an accelerator, you lose the
 * static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them.
 * As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You
 * can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information,
 * see Identity and access management in
 * the *Global Accelerator Developer Guide*.
 */export const deleteCustomRoutingAccelerator = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator" }, DeleteCustomRoutingAcceleratorRequest, S.Struct({}), [AcceleratorNotDisabledException, AcceleratorNotFoundException, AssociatedListenerFoundException, InternalServiceErrorException, InvalidArgumentException, TransactionInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Releases the specified address range that you provisioned to use with your Amazon Web Services resources
 * through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.
 * 
 * 
 * Before you can release an address range, you must stop advertising it by using WithdrawByoipCidr and you must not have
 * any accelerators that are using static IP addresses allocated from its address range.
 * 
 * 
 * 
 * For more information, see Bring
 * your own IP addresses (BYOIP) in the *Global Accelerator Developer Guide*.
 */export const deprovisionByoipCidr = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DeprovisionByoipCidr" }, DeprovisionByoipCidrRequest, DeprovisionByoipCidrResponse, [AccessDeniedException, ByoipCidrNotFoundException, IncorrectCidrStateException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe the attributes of an accelerator.
 */export const describeAcceleratorAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DescribeAcceleratorAttributes" }, DescribeAcceleratorAttributesRequest, DescribeAcceleratorAttributesResponse, [AcceleratorNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets configuration information about a cross-account attachment.
 */export const describeCrossAccountAttachment = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DescribeCrossAccountAttachment" }, DescribeCrossAccountAttachmentRequest, DescribeCrossAccountAttachmentResponse, [AccessDeniedException, AttachmentNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe the attributes of a custom routing accelerator.
 */export const describeCustomRoutingAcceleratorAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes" }, DescribeCustomRoutingAcceleratorAttributesRequest, DescribeCustomRoutingAcceleratorAttributesResponse, [AcceleratorNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The description of a listener for a custom routing accelerator.
 */export const describeCustomRoutingListener = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DescribeCustomRoutingListener" }, DescribeCustomRoutingListenerRequest, DescribeCustomRoutingListenerResponse, [InternalServiceErrorException, InvalidArgumentException, ListenerNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the accelerators for an Amazon Web Services account.
 */export const listAccelerators = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ListAccelerators" }, ListAcceleratorsRequest, ListAcceleratorsResponse, [InternalServiceErrorException, InvalidArgumentException, InvalidNextTokenException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the cross-account resources available to work with.
 */export const listCrossAccountResources = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ListCrossAccountResources" }, ListCrossAccountResourcesRequest, ListCrossAccountResourcesResponse, [AcceleratorNotFoundException, AccessDeniedException, InternalServiceErrorException, InvalidArgumentException, InvalidNextTokenException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The
 * response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that
 * span multiple custom routing accelerators in your account, or for scenarios where you only want to
 * list the port mappings for a specific destination instance.
 */export const listCustomRoutingPortMappingsByDestination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination" }, ListCustomRoutingPortMappingsByDestinationRequest, ListCustomRoutingPortMappingsByDestinationResponse, [EndpointNotFoundException, InternalServiceErrorException, InvalidArgumentException, InvalidNextTokenException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP
 * addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned,
 * it is ready to be advertised using
 * AdvertiseByoipCidr.
 * 
 * 
 * For more information, see Bring your own
 * IP addresses (BYOIP) in the *Global Accelerator Developer Guide*.
 */export const provisionByoipCidr = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ProvisionByoipCidr" }, ProvisionByoipCidrRequest, ProvisionByoipCidrResponse, [AccessDeniedException, IncorrectCidrStateException, InternalServiceErrorException, InvalidArgumentException, LimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove endpoints from a custom routing accelerator.
 */export const removeCustomRoutingEndpoints = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints" }, RemoveCustomRoutingEndpointsRequest, S.Struct({}), [AccessDeniedException, ConflictException, EndpointGroupNotFoundException, EndpointNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a cross-account attachment to add or remove principals or resources. When you update
 * an attachment to remove a principal (account ID or accelerator) or a resource, Global Accelerator
 * revokes the permission for specific resources.
 * 
 * 
 * For more information, see
 * Working with cross-account attachments and resources in Global Accelerator in the
 * Global Accelerator Developer Guide.
 */export const updateCrossAccountAttachment = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.UpdateCrossAccountAttachment" }, UpdateCrossAccountAttachmentRequest, UpdateCrossAccountAttachmentResponse, [AccessDeniedException, AttachmentNotFoundException, InternalServiceErrorException, InvalidArgumentException, LimitExceededException, TransactionInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a listener for a custom routing accelerator.
 */export const updateCustomRoutingListener = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.UpdateCustomRoutingListener" }, UpdateCustomRoutingListenerRequest, UpdateCustomRoutingListenerResponse, [InternalServiceErrorException, InvalidArgumentException, InvalidPortRangeException, LimitExceededException, ListenerNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops advertising an address range that is provisioned as an address pool.
 * You can perform this operation at most once every 10 seconds, even if you specify different address
 * ranges each time.
 * 
 * 
 * It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of
 * propagation delays.
 * 
 * 
 * For more information, see Bring your own
 * IP addresses (BYOIP) in the *Global Accelerator Developer Guide*.
 */export const withdrawByoipCidr = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.WithdrawByoipCidr" }, WithdrawByoipCidrRequest, WithdrawByoipCidrResponse, [AccessDeniedException, ByoipCidrNotFoundException, IncorrectCidrStateException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.
 * 
 * 
 * The listener port range must be large enough to support the number of IP addresses that can be
 * specified in your subnet. The number of ports required is: subnet size times the number
 * of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener
 * port range of at least 255 ports.
 * 
 * 
 * Note: You must have enough remaining listener ports available to
 * map to the subnet ports, or the call will fail with a LimitExceededException.
 * 
 * 
 * By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all
 * destinations to receive traffic, or to specify individual port mappings that can receive
 * traffic, see the
 * AllowCustomRoutingTraffic operation.
 */export const addCustomRoutingEndpoints = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints" }, AddCustomRoutingEndpointsRequest, AddCustomRoutingEndpointsResponse, [AccessDeniedException, ConflictException, EndpointAlreadyExistsException, EndpointGroupNotFoundException, InternalServiceErrorException, InvalidArgumentException, LimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources
 * through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to
 * the specified addresses starts routing to Amazon Web Services because of propagation delays.
 * 
 * 
 * To stop advertising the BYOIP address range, use
 * WithdrawByoipCidr.
 * 
 * 
 * For more information, see Bring your own
 * IP addresses (BYOIP) in the *Global Accelerator Developer Guide*.
 */export const advertiseByoipCidr = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.AdvertiseByoipCidr" }, AdvertiseByoipCidrRequest, AdvertiseByoipCidrResponse, [AccessDeniedException, ByoipCidrNotFoundException, IncorrectCidrStateException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands
 * of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.
 * 
 * 
 * Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive
 * traffic. To enable all destinations to receive traffic, or to specify individual port
 * mappings that can receive traffic, see the
 * AllowCustomRoutingTraffic operation.
 * 
 * 
 * 
 * 
 * Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
 * US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify `--region us-west-2`
 * on Amazon Web Services CLI commands.
 */export const createCustomRoutingAccelerator = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator" }, CreateCustomRoutingAcceleratorRequest, CreateCustomRoutingAcceleratorResponse, [AccessDeniedException, InternalServiceErrorException, InvalidArgumentException, LimitExceededException, TransactionInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create an endpoint group for the specified listener for a custom routing accelerator.
 * An endpoint group is a collection of endpoints in one Amazon Web Services
 * Region.
 */export const createCustomRoutingEndpointGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup" }, CreateCustomRoutingEndpointGroupRequest, CreateCustomRoutingEndpointGroupResponse, [AcceleratorNotFoundException, AccessDeniedException, EndpointGroupAlreadyExistsException, InternalServiceErrorException, InvalidArgumentException, InvalidPortRangeException, LimitExceededException, ListenerNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe an accelerator.
 */export const describeAccelerator = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DescribeAccelerator" }, DescribeAcceleratorRequest, DescribeAcceleratorResponse, [AcceleratorNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe an endpoint group for a custom routing accelerator.
 */export const describeCustomRoutingEndpointGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup" }, DescribeCustomRoutingEndpointGroupRequest, DescribeCustomRoutingEndpointGroupResponse, [EndpointGroupNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe an endpoint group.
 */export const describeEndpointGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.DescribeEndpointGroup" }, DescribeEndpointGroupRequest, DescribeEndpointGroupResponse, [EndpointGroupNotFoundException, InternalServiceErrorException, InvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance
 * IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator.
 * For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port
 * mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers.
 * 
 * 
 * If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to
 * your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances
 * in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.
 * 
 * 
 * The mappings also include a flag for each destination denoting which destination IP addresses and
 * ports are allowed or denied traffic.
 */export const listCustomRoutingPortMappings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-08", uri: "/", method: "POST", sdkId: "Global Accelerator", sigV4ServiceName: "globalaccelerator", name: "GlobalAccelerator_V20180706.ListCustomRoutingPortMappings" }, ListCustomRoutingPortMappingsRequest, ListCustomRoutingPortMappingsResponse, [AcceleratorNotFoundException, EndpointGroupNotFoundException, InternalServiceErrorException, InvalidArgumentException, InvalidNextTokenException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

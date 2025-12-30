import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ConstrainedStringList = S.Array(S.String);
export const ExternalRegionCodeList = S.Array(S.String);
export const SubnetArnList = S.Array(S.String);
export const GlobalNetworkIdList = S.Array(S.String);
export const ConnectionIdList = S.Array(S.String);
export const ConnectPeerIdList = S.Array(S.String);
export const CustomerGatewayArnList = S.Array(S.String);
export const DeviceIdList = S.Array(S.String);
export const LinkIdList = S.Array(S.String);
export const RouteStateList = S.Array(S.String);
export const RouteTypeList = S.Array(S.String);
export const SiteIdList = S.Array(S.String);
export const TransitGatewayConnectPeerArnList = S.Array(S.String);
export const TransitGatewayArnList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AcceptAttachmentRequest extends S.Class<AcceptAttachmentRequest>("AcceptAttachmentRequest")({AttachmentId: S.String}) {}
export class AssociateConnectPeerRequest extends S.Class<AssociateConnectPeerRequest>("AssociateConnectPeerRequest")({GlobalNetworkId: S.String, ConnectPeerId: S.String, DeviceId: S.String, LinkId: S.optional(S.String)}) {}
export class AssociateCustomerGatewayRequest extends S.Class<AssociateCustomerGatewayRequest>("AssociateCustomerGatewayRequest")({CustomerGatewayArn: S.String, GlobalNetworkId: S.String, DeviceId: S.String, LinkId: S.optional(S.String)}) {}
export class AssociateLinkRequest extends S.Class<AssociateLinkRequest>("AssociateLinkRequest")({GlobalNetworkId: S.String, DeviceId: S.String, LinkId: S.String}) {}
export class AssociateTransitGatewayConnectPeerRequest extends S.Class<AssociateTransitGatewayConnectPeerRequest>("AssociateTransitGatewayConnectPeerRequest")({GlobalNetworkId: S.String, TransitGatewayConnectPeerArn: S.String, DeviceId: S.String, LinkId: S.optional(S.String)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class CreateConnectionRequest extends S.Class<CreateConnectionRequest>("CreateConnectionRequest")({GlobalNetworkId: S.String, DeviceId: S.String, ConnectedDeviceId: S.String, LinkId: S.optional(S.String), ConnectedLinkId: S.optional(S.String), Description: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class CreateCoreNetworkRequest extends S.Class<CreateCoreNetworkRequest>("CreateCoreNetworkRequest")({GlobalNetworkId: S.String, Description: S.optional(S.String), Tags: S.optional(TagList), PolicyDocument: S.optional(S.String), ClientToken: S.optional(S.String)}) {}
export class CreateCoreNetworkPrefixListAssociationRequest extends S.Class<CreateCoreNetworkPrefixListAssociationRequest>("CreateCoreNetworkPrefixListAssociationRequest")({CoreNetworkId: S.String, PrefixListArn: S.String, PrefixListAlias: S.String, ClientToken: S.optional(S.String)}) {}
export class CreateDirectConnectGatewayAttachmentRequest extends S.Class<CreateDirectConnectGatewayAttachmentRequest>("CreateDirectConnectGatewayAttachmentRequest")({CoreNetworkId: S.String, DirectConnectGatewayArn: S.String, RoutingPolicyLabel: S.optional(S.String), EdgeLocations: ExternalRegionCodeList, Tags: S.optional(TagList), ClientToken: S.optional(S.String)}) {}
export class CreateGlobalNetworkRequest extends S.Class<CreateGlobalNetworkRequest>("CreateGlobalNetworkRequest")({Description: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class Location extends S.Class<Location>("Location")({Address: S.optional(S.String), Latitude: S.optional(S.String), Longitude: S.optional(S.String)}) {}
export class CreateSiteRequest extends S.Class<CreateSiteRequest>("CreateSiteRequest")({GlobalNetworkId: S.String, Description: S.optional(S.String), Location: S.optional(Location), Tags: S.optional(TagList)}) {}
export class CreateSiteToSiteVpnAttachmentRequest extends S.Class<CreateSiteToSiteVpnAttachmentRequest>("CreateSiteToSiteVpnAttachmentRequest")({CoreNetworkId: S.String, VpnConnectionArn: S.String, RoutingPolicyLabel: S.optional(S.String), Tags: S.optional(TagList), ClientToken: S.optional(S.String)}) {}
export class CreateTransitGatewayPeeringRequest extends S.Class<CreateTransitGatewayPeeringRequest>("CreateTransitGatewayPeeringRequest")({CoreNetworkId: S.String, TransitGatewayArn: S.String, Tags: S.optional(TagList), ClientToken: S.optional(S.String)}) {}
export class CreateTransitGatewayRouteTableAttachmentRequest extends S.Class<CreateTransitGatewayRouteTableAttachmentRequest>("CreateTransitGatewayRouteTableAttachmentRequest")({PeeringId: S.String, TransitGatewayRouteTableArn: S.String, RoutingPolicyLabel: S.optional(S.String), Tags: S.optional(TagList), ClientToken: S.optional(S.String)}) {}
export class DeleteAttachmentRequest extends S.Class<DeleteAttachmentRequest>("DeleteAttachmentRequest")({AttachmentId: S.String}) {}
export class DeleteConnectionRequest extends S.Class<DeleteConnectionRequest>("DeleteConnectionRequest")({GlobalNetworkId: S.String, ConnectionId: S.String}) {}
export class DeleteConnectPeerRequest extends S.Class<DeleteConnectPeerRequest>("DeleteConnectPeerRequest")({ConnectPeerId: S.String}) {}
export class DeleteCoreNetworkRequest extends S.Class<DeleteCoreNetworkRequest>("DeleteCoreNetworkRequest")({CoreNetworkId: S.String}) {}
export class DeleteCoreNetworkPolicyVersionRequest extends S.Class<DeleteCoreNetworkPolicyVersionRequest>("DeleteCoreNetworkPolicyVersionRequest")({CoreNetworkId: S.String, PolicyVersionId: S.Number}) {}
export class DeleteCoreNetworkPrefixListAssociationRequest extends S.Class<DeleteCoreNetworkPrefixListAssociationRequest>("DeleteCoreNetworkPrefixListAssociationRequest")({CoreNetworkId: S.String, PrefixListArn: S.String}) {}
export class DeleteDeviceRequest extends S.Class<DeleteDeviceRequest>("DeleteDeviceRequest")({GlobalNetworkId: S.String, DeviceId: S.String}) {}
export class DeleteGlobalNetworkRequest extends S.Class<DeleteGlobalNetworkRequest>("DeleteGlobalNetworkRequest")({GlobalNetworkId: S.String}) {}
export class DeleteLinkRequest extends S.Class<DeleteLinkRequest>("DeleteLinkRequest")({GlobalNetworkId: S.String, LinkId: S.String}) {}
export class DeletePeeringRequest extends S.Class<DeletePeeringRequest>("DeletePeeringRequest")({PeeringId: S.String}) {}
export class DeleteResourcePolicyRequest extends S.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({ResourceArn: S.String}) {}
export class DeleteResourcePolicyResponse extends S.Class<DeleteResourcePolicyResponse>("DeleteResourcePolicyResponse")({}) {}
export class DeleteSiteRequest extends S.Class<DeleteSiteRequest>("DeleteSiteRequest")({GlobalNetworkId: S.String, SiteId: S.String}) {}
export class DeregisterTransitGatewayRequest extends S.Class<DeregisterTransitGatewayRequest>("DeregisterTransitGatewayRequest")({GlobalNetworkId: S.String, TransitGatewayArn: S.String}) {}
export class DescribeGlobalNetworksRequest extends S.Class<DescribeGlobalNetworksRequest>("DescribeGlobalNetworksRequest")({GlobalNetworkIds: S.optional(GlobalNetworkIdList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DisassociateConnectPeerRequest extends S.Class<DisassociateConnectPeerRequest>("DisassociateConnectPeerRequest")({GlobalNetworkId: S.String, ConnectPeerId: S.String}) {}
export class DisassociateCustomerGatewayRequest extends S.Class<DisassociateCustomerGatewayRequest>("DisassociateCustomerGatewayRequest")({GlobalNetworkId: S.String, CustomerGatewayArn: S.String}) {}
export class DisassociateLinkRequest extends S.Class<DisassociateLinkRequest>("DisassociateLinkRequest")({GlobalNetworkId: S.String, DeviceId: S.String, LinkId: S.String}) {}
export class DisassociateTransitGatewayConnectPeerRequest extends S.Class<DisassociateTransitGatewayConnectPeerRequest>("DisassociateTransitGatewayConnectPeerRequest")({GlobalNetworkId: S.String, TransitGatewayConnectPeerArn: S.String}) {}
export class ExecuteCoreNetworkChangeSetRequest extends S.Class<ExecuteCoreNetworkChangeSetRequest>("ExecuteCoreNetworkChangeSetRequest")({CoreNetworkId: S.String, PolicyVersionId: S.Number}) {}
export class ExecuteCoreNetworkChangeSetResponse extends S.Class<ExecuteCoreNetworkChangeSetResponse>("ExecuteCoreNetworkChangeSetResponse")({}) {}
export class GetConnectAttachmentRequest extends S.Class<GetConnectAttachmentRequest>("GetConnectAttachmentRequest")({AttachmentId: S.String}) {}
export class GetConnectionsRequest extends S.Class<GetConnectionsRequest>("GetConnectionsRequest")({GlobalNetworkId: S.String, ConnectionIds: S.optional(ConnectionIdList), DeviceId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetConnectPeerRequest extends S.Class<GetConnectPeerRequest>("GetConnectPeerRequest")({ConnectPeerId: S.String}) {}
export class GetConnectPeerAssociationsRequest extends S.Class<GetConnectPeerAssociationsRequest>("GetConnectPeerAssociationsRequest")({GlobalNetworkId: S.String, ConnectPeerIds: S.optional(ConnectPeerIdList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetCoreNetworkRequest extends S.Class<GetCoreNetworkRequest>("GetCoreNetworkRequest")({CoreNetworkId: S.String}) {}
export class GetCoreNetworkChangeEventsRequest extends S.Class<GetCoreNetworkChangeEventsRequest>("GetCoreNetworkChangeEventsRequest")({CoreNetworkId: S.String, PolicyVersionId: S.Number, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetCoreNetworkChangeSetRequest extends S.Class<GetCoreNetworkChangeSetRequest>("GetCoreNetworkChangeSetRequest")({CoreNetworkId: S.String, PolicyVersionId: S.Number, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetCoreNetworkPolicyRequest extends S.Class<GetCoreNetworkPolicyRequest>("GetCoreNetworkPolicyRequest")({CoreNetworkId: S.String, PolicyVersionId: S.optional(S.Number), Alias: S.optional(S.String)}) {}
export class GetCustomerGatewayAssociationsRequest extends S.Class<GetCustomerGatewayAssociationsRequest>("GetCustomerGatewayAssociationsRequest")({GlobalNetworkId: S.String, CustomerGatewayArns: S.optional(CustomerGatewayArnList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetDevicesRequest extends S.Class<GetDevicesRequest>("GetDevicesRequest")({GlobalNetworkId: S.String, DeviceIds: S.optional(DeviceIdList), SiteId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetDirectConnectGatewayAttachmentRequest extends S.Class<GetDirectConnectGatewayAttachmentRequest>("GetDirectConnectGatewayAttachmentRequest")({AttachmentId: S.String}) {}
export class GetLinkAssociationsRequest extends S.Class<GetLinkAssociationsRequest>("GetLinkAssociationsRequest")({GlobalNetworkId: S.String, DeviceId: S.optional(S.String), LinkId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetLinksRequest extends S.Class<GetLinksRequest>("GetLinksRequest")({GlobalNetworkId: S.String, LinkIds: S.optional(LinkIdList), SiteId: S.optional(S.String), Type: S.optional(S.String), Provider: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetNetworkResourceCountsRequest extends S.Class<GetNetworkResourceCountsRequest>("GetNetworkResourceCountsRequest")({GlobalNetworkId: S.String, ResourceType: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetNetworkResourceRelationshipsRequest extends S.Class<GetNetworkResourceRelationshipsRequest>("GetNetworkResourceRelationshipsRequest")({GlobalNetworkId: S.String, CoreNetworkId: S.optional(S.String), RegisteredGatewayArn: S.optional(S.String), AwsRegion: S.optional(S.String), AccountId: S.optional(S.String), ResourceType: S.optional(S.String), ResourceArn: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetNetworkResourcesRequest extends S.Class<GetNetworkResourcesRequest>("GetNetworkResourcesRequest")({GlobalNetworkId: S.String, CoreNetworkId: S.optional(S.String), RegisteredGatewayArn: S.optional(S.String), AwsRegion: S.optional(S.String), AccountId: S.optional(S.String), ResourceType: S.optional(S.String), ResourceArn: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetNetworkTelemetryRequest extends S.Class<GetNetworkTelemetryRequest>("GetNetworkTelemetryRequest")({GlobalNetworkId: S.String, CoreNetworkId: S.optional(S.String), RegisteredGatewayArn: S.optional(S.String), AwsRegion: S.optional(S.String), AccountId: S.optional(S.String), ResourceType: S.optional(S.String), ResourceArn: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetResourcePolicyRequest extends S.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({ResourceArn: S.String}) {}
export class GetRouteAnalysisRequest extends S.Class<GetRouteAnalysisRequest>("GetRouteAnalysisRequest")({GlobalNetworkId: S.String, RouteAnalysisId: S.String}) {}
export class GetSitesRequest extends S.Class<GetSitesRequest>("GetSitesRequest")({GlobalNetworkId: S.String, SiteIds: S.optional(SiteIdList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetSiteToSiteVpnAttachmentRequest extends S.Class<GetSiteToSiteVpnAttachmentRequest>("GetSiteToSiteVpnAttachmentRequest")({AttachmentId: S.String}) {}
export class GetTransitGatewayConnectPeerAssociationsRequest extends S.Class<GetTransitGatewayConnectPeerAssociationsRequest>("GetTransitGatewayConnectPeerAssociationsRequest")({GlobalNetworkId: S.String, TransitGatewayConnectPeerArns: S.optional(TransitGatewayConnectPeerArnList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetTransitGatewayPeeringRequest extends S.Class<GetTransitGatewayPeeringRequest>("GetTransitGatewayPeeringRequest")({PeeringId: S.String}) {}
export class GetTransitGatewayRegistrationsRequest extends S.Class<GetTransitGatewayRegistrationsRequest>("GetTransitGatewayRegistrationsRequest")({GlobalNetworkId: S.String, TransitGatewayArns: S.optional(TransitGatewayArnList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetTransitGatewayRouteTableAttachmentRequest extends S.Class<GetTransitGatewayRouteTableAttachmentRequest>("GetTransitGatewayRouteTableAttachmentRequest")({AttachmentId: S.String}) {}
export class GetVpcAttachmentRequest extends S.Class<GetVpcAttachmentRequest>("GetVpcAttachmentRequest")({AttachmentId: S.String}) {}
export class ListAttachmentRoutingPolicyAssociationsRequest extends S.Class<ListAttachmentRoutingPolicyAssociationsRequest>("ListAttachmentRoutingPolicyAssociationsRequest")({CoreNetworkId: S.String, AttachmentId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListAttachmentsRequest extends S.Class<ListAttachmentsRequest>("ListAttachmentsRequest")({CoreNetworkId: S.optional(S.String), AttachmentType: S.optional(S.String), EdgeLocation: S.optional(S.String), State: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListConnectPeersRequest extends S.Class<ListConnectPeersRequest>("ListConnectPeersRequest")({CoreNetworkId: S.optional(S.String), ConnectAttachmentId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListCoreNetworkPolicyVersionsRequest extends S.Class<ListCoreNetworkPolicyVersionsRequest>("ListCoreNetworkPolicyVersionsRequest")({CoreNetworkId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListCoreNetworkPrefixListAssociationsRequest extends S.Class<ListCoreNetworkPrefixListAssociationsRequest>("ListCoreNetworkPrefixListAssociationsRequest")({CoreNetworkId: S.String, PrefixListArn: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export const FilterValues = S.Array(S.String);
export const FilterMap = S.Record({key: S.String, value: FilterValues});
export class ListCoreNetworkRoutingInformationRequest extends S.Class<ListCoreNetworkRoutingInformationRequest>("ListCoreNetworkRoutingInformationRequest")({CoreNetworkId: S.String, SegmentName: S.String, EdgeLocation: S.String, NextHopFilters: S.optional(FilterMap), LocalPreferenceMatches: S.optional(ConstrainedStringList), ExactAsPathMatches: S.optional(ConstrainedStringList), MedMatches: S.optional(ConstrainedStringList), CommunityMatches: S.optional(ConstrainedStringList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListCoreNetworksRequest extends S.Class<ListCoreNetworksRequest>("ListCoreNetworksRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListOrganizationServiceAccessStatusRequest extends S.Class<ListOrganizationServiceAccessStatusRequest>("ListOrganizationServiceAccessStatusRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListPeeringsRequest extends S.Class<ListPeeringsRequest>("ListPeeringsRequest")({CoreNetworkId: S.optional(S.String), PeeringType: S.optional(S.String), EdgeLocation: S.optional(S.String), State: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class PutAttachmentRoutingPolicyLabelRequest extends S.Class<PutAttachmentRoutingPolicyLabelRequest>("PutAttachmentRoutingPolicyLabelRequest")({CoreNetworkId: S.String, AttachmentId: S.String, RoutingPolicyLabel: S.String, ClientToken: S.optional(S.String)}) {}
export class PutCoreNetworkPolicyRequest extends S.Class<PutCoreNetworkPolicyRequest>("PutCoreNetworkPolicyRequest")({CoreNetworkId: S.String, PolicyDocument: S.String, Description: S.optional(S.String), LatestVersionId: S.optional(S.Number), ClientToken: S.optional(S.String)}) {}
export class PutResourcePolicyRequest extends S.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({PolicyDocument: S.String, ResourceArn: S.String}) {}
export class PutResourcePolicyResponse extends S.Class<PutResourcePolicyResponse>("PutResourcePolicyResponse")({}) {}
export class RegisterTransitGatewayRequest extends S.Class<RegisterTransitGatewayRequest>("RegisterTransitGatewayRequest")({GlobalNetworkId: S.String, TransitGatewayArn: S.String}) {}
export class RejectAttachmentRequest extends S.Class<RejectAttachmentRequest>("RejectAttachmentRequest")({AttachmentId: S.String}) {}
export class RemoveAttachmentRoutingPolicyLabelRequest extends S.Class<RemoveAttachmentRoutingPolicyLabelRequest>("RemoveAttachmentRoutingPolicyLabelRequest")({CoreNetworkId: S.String, AttachmentId: S.String}) {}
export class RestoreCoreNetworkPolicyVersionRequest extends S.Class<RestoreCoreNetworkPolicyVersionRequest>("RestoreCoreNetworkPolicyVersionRequest")({CoreNetworkId: S.String, PolicyVersionId: S.Number}) {}
export class StartOrganizationServiceAccessUpdateRequest extends S.Class<StartOrganizationServiceAccessUpdateRequest>("StartOrganizationServiceAccessUpdateRequest")({Action: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateConnectionRequest extends S.Class<UpdateConnectionRequest>("UpdateConnectionRequest")({GlobalNetworkId: S.String, ConnectionId: S.String, LinkId: S.optional(S.String), ConnectedLinkId: S.optional(S.String), Description: S.optional(S.String)}) {}
export class UpdateCoreNetworkRequest extends S.Class<UpdateCoreNetworkRequest>("UpdateCoreNetworkRequest")({CoreNetworkId: S.String, Description: S.optional(S.String)}) {}
export class AWSLocation extends S.Class<AWSLocation>("AWSLocation")({Zone: S.optional(S.String), SubnetArn: S.optional(S.String)}) {}
export class UpdateDeviceRequest extends S.Class<UpdateDeviceRequest>("UpdateDeviceRequest")({GlobalNetworkId: S.String, DeviceId: S.String, AWSLocation: S.optional(AWSLocation), Description: S.optional(S.String), Type: S.optional(S.String), Vendor: S.optional(S.String), Model: S.optional(S.String), SerialNumber: S.optional(S.String), Location: S.optional(Location), SiteId: S.optional(S.String)}) {}
export class UpdateDirectConnectGatewayAttachmentRequest extends S.Class<UpdateDirectConnectGatewayAttachmentRequest>("UpdateDirectConnectGatewayAttachmentRequest")({AttachmentId: S.String, EdgeLocations: S.optional(ExternalRegionCodeList)}) {}
export class UpdateGlobalNetworkRequest extends S.Class<UpdateGlobalNetworkRequest>("UpdateGlobalNetworkRequest")({GlobalNetworkId: S.String, Description: S.optional(S.String)}) {}
export class Bandwidth extends S.Class<Bandwidth>("Bandwidth")({UploadSpeed: S.optional(S.Number), DownloadSpeed: S.optional(S.Number)}) {}
export class UpdateLinkRequest extends S.Class<UpdateLinkRequest>("UpdateLinkRequest")({GlobalNetworkId: S.String, LinkId: S.String, Description: S.optional(S.String), Type: S.optional(S.String), Bandwidth: S.optional(Bandwidth), Provider: S.optional(S.String)}) {}
export class UpdateSiteRequest extends S.Class<UpdateSiteRequest>("UpdateSiteRequest")({GlobalNetworkId: S.String, SiteId: S.String, Description: S.optional(S.String), Location: S.optional(Location)}) {}
export class VpcOptions extends S.Class<VpcOptions>("VpcOptions")({Ipv6Support: S.optional(S.Boolean), ApplianceModeSupport: S.optional(S.Boolean), DnsSupport: S.optional(S.Boolean), SecurityGroupReferencingSupport: S.optional(S.Boolean)}) {}
export class UpdateVpcAttachmentRequest extends S.Class<UpdateVpcAttachmentRequest>("UpdateVpcAttachmentRequest")({AttachmentId: S.String, AddSubnetArns: S.optional(SubnetArnList), RemoveSubnetArns: S.optional(SubnetArnList), Options: S.optional(VpcOptions)}) {}
export class ConnectAttachmentOptions extends S.Class<ConnectAttachmentOptions>("ConnectAttachmentOptions")({Protocol: S.optional(S.String)}) {}
export class BgpOptions extends S.Class<BgpOptions>("BgpOptions")({PeerAsn: S.optional(S.Number)}) {}
export class GlobalNetwork extends S.Class<GlobalNetwork>("GlobalNetwork")({GlobalNetworkId: S.optional(S.String), GlobalNetworkArn: S.optional(S.String), Description: S.optional(S.String), CreatedAt: S.optional(S.Date), State: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const GlobalNetworkList = S.Array(GlobalNetwork);
export class Connection extends S.Class<Connection>("Connection")({ConnectionId: S.optional(S.String), ConnectionArn: S.optional(S.String), GlobalNetworkId: S.optional(S.String), DeviceId: S.optional(S.String), ConnectedDeviceId: S.optional(S.String), LinkId: S.optional(S.String), ConnectedLinkId: S.optional(S.String), Description: S.optional(S.String), CreatedAt: S.optional(S.Date), State: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const ConnectionList = S.Array(Connection);
export class ConnectPeerAssociation extends S.Class<ConnectPeerAssociation>("ConnectPeerAssociation")({ConnectPeerId: S.optional(S.String), GlobalNetworkId: S.optional(S.String), DeviceId: S.optional(S.String), LinkId: S.optional(S.String), State: S.optional(S.String)}) {}
export const ConnectPeerAssociationList = S.Array(ConnectPeerAssociation);
export class CustomerGatewayAssociation extends S.Class<CustomerGatewayAssociation>("CustomerGatewayAssociation")({CustomerGatewayArn: S.optional(S.String), GlobalNetworkId: S.optional(S.String), DeviceId: S.optional(S.String), LinkId: S.optional(S.String), State: S.optional(S.String)}) {}
export const CustomerGatewayAssociationList = S.Array(CustomerGatewayAssociation);
export class Device extends S.Class<Device>("Device")({DeviceId: S.optional(S.String), DeviceArn: S.optional(S.String), GlobalNetworkId: S.optional(S.String), AWSLocation: S.optional(AWSLocation), Description: S.optional(S.String), Type: S.optional(S.String), Vendor: S.optional(S.String), Model: S.optional(S.String), SerialNumber: S.optional(S.String), Location: S.optional(Location), SiteId: S.optional(S.String), CreatedAt: S.optional(S.Date), State: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const DeviceList = S.Array(Device);
export class LinkAssociation extends S.Class<LinkAssociation>("LinkAssociation")({GlobalNetworkId: S.optional(S.String), DeviceId: S.optional(S.String), LinkId: S.optional(S.String), LinkAssociationState: S.optional(S.String)}) {}
export const LinkAssociationList = S.Array(LinkAssociation);
export class Link extends S.Class<Link>("Link")({LinkId: S.optional(S.String), LinkArn: S.optional(S.String), GlobalNetworkId: S.optional(S.String), SiteId: S.optional(S.String), Description: S.optional(S.String), Type: S.optional(S.String), Bandwidth: S.optional(Bandwidth), Provider: S.optional(S.String), CreatedAt: S.optional(S.Date), State: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const LinkList = S.Array(Link);
export class Site extends S.Class<Site>("Site")({SiteId: S.optional(S.String), SiteArn: S.optional(S.String), GlobalNetworkId: S.optional(S.String), Description: S.optional(S.String), Location: S.optional(Location), CreatedAt: S.optional(S.Date), State: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const SiteList = S.Array(Site);
export class TransitGatewayConnectPeerAssociation extends S.Class<TransitGatewayConnectPeerAssociation>("TransitGatewayConnectPeerAssociation")({TransitGatewayConnectPeerArn: S.optional(S.String), GlobalNetworkId: S.optional(S.String), DeviceId: S.optional(S.String), LinkId: S.optional(S.String), State: S.optional(S.String)}) {}
export const TransitGatewayConnectPeerAssociationList = S.Array(TransitGatewayConnectPeerAssociation);
export class TransitGatewayRegistrationStateReason extends S.Class<TransitGatewayRegistrationStateReason>("TransitGatewayRegistrationStateReason")({Code: S.optional(S.String), Message: S.optional(S.String)}) {}
export class TransitGatewayRegistration extends S.Class<TransitGatewayRegistration>("TransitGatewayRegistration")({GlobalNetworkId: S.optional(S.String), TransitGatewayArn: S.optional(S.String), State: S.optional(TransitGatewayRegistrationStateReason)}) {}
export const TransitGatewayRegistrationList = S.Array(TransitGatewayRegistration);
export class ProposedSegmentChange extends S.Class<ProposedSegmentChange>("ProposedSegmentChange")({Tags: S.optional(TagList), AttachmentPolicyRuleNumber: S.optional(S.Number), SegmentName: S.optional(S.String)}) {}
export class ProposedNetworkFunctionGroupChange extends S.Class<ProposedNetworkFunctionGroupChange>("ProposedNetworkFunctionGroupChange")({Tags: S.optional(TagList), AttachmentPolicyRuleNumber: S.optional(S.Number), NetworkFunctionGroupName: S.optional(S.String)}) {}
export class AttachmentError extends S.Class<AttachmentError>("AttachmentError")({Code: S.optional(S.String), Message: S.optional(S.String), ResourceArn: S.optional(S.String), RequestId: S.optional(S.String)}) {}
export const AttachmentErrorList = S.Array(AttachmentError);
export class Attachment extends S.Class<Attachment>("Attachment")({CoreNetworkId: S.optional(S.String), CoreNetworkArn: S.optional(S.String), AttachmentId: S.optional(S.String), OwnerAccountId: S.optional(S.String), AttachmentType: S.optional(S.String), State: S.optional(S.String), EdgeLocation: S.optional(S.String), EdgeLocations: S.optional(ExternalRegionCodeList), ResourceArn: S.optional(S.String), AttachmentPolicyRuleNumber: S.optional(S.Number), SegmentName: S.optional(S.String), NetworkFunctionGroupName: S.optional(S.String), Tags: S.optional(TagList), ProposedSegmentChange: S.optional(ProposedSegmentChange), ProposedNetworkFunctionGroupChange: S.optional(ProposedNetworkFunctionGroupChange), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), LastModificationErrors: S.optional(AttachmentErrorList)}) {}
export const AttachmentList = S.Array(Attachment);
export class PermissionsErrorContext extends S.Class<PermissionsErrorContext>("PermissionsErrorContext")({MissingPermission: S.optional(S.String)}) {}
export class PeeringError extends S.Class<PeeringError>("PeeringError")({Code: S.optional(S.String), Message: S.optional(S.String), ResourceArn: S.optional(S.String), RequestId: S.optional(S.String), MissingPermissionsContext: S.optional(PermissionsErrorContext)}) {}
export const PeeringErrorList = S.Array(PeeringError);
export class Peering extends S.Class<Peering>("Peering")({CoreNetworkId: S.optional(S.String), CoreNetworkArn: S.optional(S.String), PeeringId: S.optional(S.String), OwnerAccountId: S.optional(S.String), PeeringType: S.optional(S.String), State: S.optional(S.String), EdgeLocation: S.optional(S.String), ResourceArn: S.optional(S.String), Tags: S.optional(TagList), CreatedAt: S.optional(S.Date), LastModificationErrors: S.optional(PeeringErrorList)}) {}
export const PeeringList = S.Array(Peering);
export class RouteAnalysisEndpointOptionsSpecification extends S.Class<RouteAnalysisEndpointOptionsSpecification>("RouteAnalysisEndpointOptionsSpecification")({TransitGatewayAttachmentArn: S.optional(S.String), IpAddress: S.optional(S.String)}) {}
export const NetworkResourceMetadataMap = S.Record({key: S.String, value: S.String});
export class CreateConnectAttachmentRequest extends S.Class<CreateConnectAttachmentRequest>("CreateConnectAttachmentRequest")({CoreNetworkId: S.String, EdgeLocation: S.String, TransportAttachmentId: S.String, RoutingPolicyLabel: S.optional(S.String), Options: ConnectAttachmentOptions, Tags: S.optional(TagList), ClientToken: S.optional(S.String)}) {}
export class CreateConnectPeerRequest extends S.Class<CreateConnectPeerRequest>("CreateConnectPeerRequest")({ConnectAttachmentId: S.String, CoreNetworkAddress: S.optional(S.String), PeerAddress: S.String, BgpOptions: S.optional(BgpOptions), InsideCidrBlocks: S.optional(ConstrainedStringList), Tags: S.optional(TagList), ClientToken: S.optional(S.String), SubnetArn: S.optional(S.String)}) {}
export class CreateCoreNetworkPrefixListAssociationResponse extends S.Class<CreateCoreNetworkPrefixListAssociationResponse>("CreateCoreNetworkPrefixListAssociationResponse")({CoreNetworkId: S.optional(S.String), PrefixListArn: S.optional(S.String), PrefixListAlias: S.optional(S.String)}) {}
export class CreateDeviceRequest extends S.Class<CreateDeviceRequest>("CreateDeviceRequest")({GlobalNetworkId: S.String, AWSLocation: S.optional(AWSLocation), Description: S.optional(S.String), Type: S.optional(S.String), Vendor: S.optional(S.String), Model: S.optional(S.String), SerialNumber: S.optional(S.String), Location: S.optional(Location), SiteId: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class CreateLinkRequest extends S.Class<CreateLinkRequest>("CreateLinkRequest")({GlobalNetworkId: S.String, Description: S.optional(S.String), Type: S.optional(S.String), Bandwidth: Bandwidth, Provider: S.optional(S.String), SiteId: S.String, Tags: S.optional(TagList)}) {}
export class CreateVpcAttachmentRequest extends S.Class<CreateVpcAttachmentRequest>("CreateVpcAttachmentRequest")({CoreNetworkId: S.String, VpcArn: S.String, SubnetArns: SubnetArnList, Options: S.optional(VpcOptions), RoutingPolicyLabel: S.optional(S.String), Tags: S.optional(TagList), ClientToken: S.optional(S.String)}) {}
export class DeleteAttachmentResponse extends S.Class<DeleteAttachmentResponse>("DeleteAttachmentResponse")({Attachment: S.optional(Attachment)}) {}
export class DeleteConnectionResponse extends S.Class<DeleteConnectionResponse>("DeleteConnectionResponse")({Connection: S.optional(Connection)}) {}
export class CoreNetworkSegment extends S.Class<CoreNetworkSegment>("CoreNetworkSegment")({Name: S.optional(S.String), EdgeLocations: S.optional(ExternalRegionCodeList), SharedSegments: S.optional(ConstrainedStringList)}) {}
export const CoreNetworkSegmentList = S.Array(CoreNetworkSegment);
export class ServiceInsertionSegments extends S.Class<ServiceInsertionSegments>("ServiceInsertionSegments")({SendVia: S.optional(ConstrainedStringList), SendTo: S.optional(ConstrainedStringList)}) {}
export class CoreNetworkNetworkFunctionGroup extends S.Class<CoreNetworkNetworkFunctionGroup>("CoreNetworkNetworkFunctionGroup")({Name: S.optional(S.String), EdgeLocations: S.optional(ExternalRegionCodeList), Segments: S.optional(ServiceInsertionSegments)}) {}
export const CoreNetworkNetworkFunctionGroupList = S.Array(CoreNetworkNetworkFunctionGroup);
export class CoreNetworkEdge extends S.Class<CoreNetworkEdge>("CoreNetworkEdge")({EdgeLocation: S.optional(S.String), Asn: S.optional(S.Number), InsideCidrBlocks: S.optional(ConstrainedStringList)}) {}
export const CoreNetworkEdgeList = S.Array(CoreNetworkEdge);
export class CoreNetwork extends S.Class<CoreNetwork>("CoreNetwork")({GlobalNetworkId: S.optional(S.String), CoreNetworkId: S.optional(S.String), CoreNetworkArn: S.optional(S.String), Description: S.optional(S.String), CreatedAt: S.optional(S.Date), State: S.optional(S.String), Segments: S.optional(CoreNetworkSegmentList), NetworkFunctionGroups: S.optional(CoreNetworkNetworkFunctionGroupList), Edges: S.optional(CoreNetworkEdgeList), Tags: S.optional(TagList)}) {}
export class DeleteCoreNetworkResponse extends S.Class<DeleteCoreNetworkResponse>("DeleteCoreNetworkResponse")({CoreNetwork: S.optional(CoreNetwork)}) {}
export class DeleteCoreNetworkPrefixListAssociationResponse extends S.Class<DeleteCoreNetworkPrefixListAssociationResponse>("DeleteCoreNetworkPrefixListAssociationResponse")({CoreNetworkId: S.optional(S.String), PrefixListArn: S.optional(S.String)}) {}
export class DeleteGlobalNetworkResponse extends S.Class<DeleteGlobalNetworkResponse>("DeleteGlobalNetworkResponse")({GlobalNetwork: S.optional(GlobalNetwork)}) {}
export class DeleteSiteResponse extends S.Class<DeleteSiteResponse>("DeleteSiteResponse")({Site: S.optional(Site)}) {}
export class DescribeGlobalNetworksResponse extends S.Class<DescribeGlobalNetworksResponse>("DescribeGlobalNetworksResponse")({GlobalNetworks: S.optional(GlobalNetworkList), NextToken: S.optional(S.String)}) {}
export class DisassociateConnectPeerResponse extends S.Class<DisassociateConnectPeerResponse>("DisassociateConnectPeerResponse")({ConnectPeerAssociation: S.optional(ConnectPeerAssociation)}) {}
export class DisassociateCustomerGatewayResponse extends S.Class<DisassociateCustomerGatewayResponse>("DisassociateCustomerGatewayResponse")({CustomerGatewayAssociation: S.optional(CustomerGatewayAssociation)}) {}
export class DisassociateLinkResponse extends S.Class<DisassociateLinkResponse>("DisassociateLinkResponse")({LinkAssociation: S.optional(LinkAssociation)}) {}
export class DisassociateTransitGatewayConnectPeerResponse extends S.Class<DisassociateTransitGatewayConnectPeerResponse>("DisassociateTransitGatewayConnectPeerResponse")({TransitGatewayConnectPeerAssociation: S.optional(TransitGatewayConnectPeerAssociation)}) {}
export class GetConnectionsResponse extends S.Class<GetConnectionsResponse>("GetConnectionsResponse")({Connections: S.optional(ConnectionList), NextToken: S.optional(S.String)}) {}
export class ConnectPeerBgpConfiguration extends S.Class<ConnectPeerBgpConfiguration>("ConnectPeerBgpConfiguration")({CoreNetworkAsn: S.optional(S.Number), PeerAsn: S.optional(S.Number), CoreNetworkAddress: S.optional(S.String), PeerAddress: S.optional(S.String)}) {}
export const ConnectPeerBgpConfigurationList = S.Array(ConnectPeerBgpConfiguration);
export class ConnectPeerConfiguration extends S.Class<ConnectPeerConfiguration>("ConnectPeerConfiguration")({CoreNetworkAddress: S.optional(S.String), PeerAddress: S.optional(S.String), InsideCidrBlocks: S.optional(ConstrainedStringList), Protocol: S.optional(S.String), BgpConfigurations: S.optional(ConnectPeerBgpConfigurationList)}) {}
export class ConnectPeerError extends S.Class<ConnectPeerError>("ConnectPeerError")({Code: S.optional(S.String), Message: S.optional(S.String), ResourceArn: S.optional(S.String), RequestId: S.optional(S.String)}) {}
export const ConnectPeerErrorList = S.Array(ConnectPeerError);
export class ConnectPeer extends S.Class<ConnectPeer>("ConnectPeer")({CoreNetworkId: S.optional(S.String), ConnectAttachmentId: S.optional(S.String), ConnectPeerId: S.optional(S.String), EdgeLocation: S.optional(S.String), State: S.optional(S.String), CreatedAt: S.optional(S.Date), Configuration: S.optional(ConnectPeerConfiguration), Tags: S.optional(TagList), SubnetArn: S.optional(S.String), LastModificationErrors: S.optional(ConnectPeerErrorList)}) {}
export class GetConnectPeerResponse extends S.Class<GetConnectPeerResponse>("GetConnectPeerResponse")({ConnectPeer: S.optional(ConnectPeer)}) {}
export class GetConnectPeerAssociationsResponse extends S.Class<GetConnectPeerAssociationsResponse>("GetConnectPeerAssociationsResponse")({ConnectPeerAssociations: S.optional(ConnectPeerAssociationList), NextToken: S.optional(S.String)}) {}
export class GetCoreNetworkResponse extends S.Class<GetCoreNetworkResponse>("GetCoreNetworkResponse")({CoreNetwork: S.optional(CoreNetwork)}) {}
export class CoreNetworkPolicyError extends S.Class<CoreNetworkPolicyError>("CoreNetworkPolicyError")({ErrorCode: S.String, Message: S.String, Path: S.optional(S.String)}) {}
export const CoreNetworkPolicyErrorList = S.Array(CoreNetworkPolicyError);
export class CoreNetworkPolicy extends S.Class<CoreNetworkPolicy>("CoreNetworkPolicy")({CoreNetworkId: S.optional(S.String), PolicyVersionId: S.optional(S.Number), Alias: S.optional(S.String), Description: S.optional(S.String), CreatedAt: S.optional(S.Date), ChangeSetState: S.optional(S.String), PolicyErrors: S.optional(CoreNetworkPolicyErrorList), PolicyDocument: S.optional(S.String)}) {}
export class GetCoreNetworkPolicyResponse extends S.Class<GetCoreNetworkPolicyResponse>("GetCoreNetworkPolicyResponse")({CoreNetworkPolicy: S.optional(CoreNetworkPolicy)}) {}
export class GetCustomerGatewayAssociationsResponse extends S.Class<GetCustomerGatewayAssociationsResponse>("GetCustomerGatewayAssociationsResponse")({CustomerGatewayAssociations: S.optional(CustomerGatewayAssociationList), NextToken: S.optional(S.String)}) {}
export class GetDevicesResponse extends S.Class<GetDevicesResponse>("GetDevicesResponse")({Devices: S.optional(DeviceList), NextToken: S.optional(S.String)}) {}
export class DirectConnectGatewayAttachment extends S.Class<DirectConnectGatewayAttachment>("DirectConnectGatewayAttachment")({Attachment: S.optional(Attachment), DirectConnectGatewayArn: S.optional(S.String)}) {}
export class GetDirectConnectGatewayAttachmentResponse extends S.Class<GetDirectConnectGatewayAttachmentResponse>("GetDirectConnectGatewayAttachmentResponse")({DirectConnectGatewayAttachment: S.optional(DirectConnectGatewayAttachment)}) {}
export class GetLinkAssociationsResponse extends S.Class<GetLinkAssociationsResponse>("GetLinkAssociationsResponse")({LinkAssociations: S.optional(LinkAssociationList), NextToken: S.optional(S.String)}) {}
export class GetLinksResponse extends S.Class<GetLinksResponse>("GetLinksResponse")({Links: S.optional(LinkList), NextToken: S.optional(S.String)}) {}
export class GetResourcePolicyResponse extends S.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({PolicyDocument: S.optional(S.String)}) {}
export class GetSitesResponse extends S.Class<GetSitesResponse>("GetSitesResponse")({Sites: S.optional(SiteList), NextToken: S.optional(S.String)}) {}
export class SiteToSiteVpnAttachment extends S.Class<SiteToSiteVpnAttachment>("SiteToSiteVpnAttachment")({Attachment: S.optional(Attachment), VpnConnectionArn: S.optional(S.String)}) {}
export class GetSiteToSiteVpnAttachmentResponse extends S.Class<GetSiteToSiteVpnAttachmentResponse>("GetSiteToSiteVpnAttachmentResponse")({SiteToSiteVpnAttachment: S.optional(SiteToSiteVpnAttachment)}) {}
export class GetTransitGatewayConnectPeerAssociationsResponse extends S.Class<GetTransitGatewayConnectPeerAssociationsResponse>("GetTransitGatewayConnectPeerAssociationsResponse")({TransitGatewayConnectPeerAssociations: S.optional(TransitGatewayConnectPeerAssociationList), NextToken: S.optional(S.String)}) {}
export class TransitGatewayPeering extends S.Class<TransitGatewayPeering>("TransitGatewayPeering")({Peering: S.optional(Peering), TransitGatewayArn: S.optional(S.String), TransitGatewayPeeringAttachmentId: S.optional(S.String)}) {}
export class GetTransitGatewayPeeringResponse extends S.Class<GetTransitGatewayPeeringResponse>("GetTransitGatewayPeeringResponse")({TransitGatewayPeering: S.optional(TransitGatewayPeering)}) {}
export class GetTransitGatewayRegistrationsResponse extends S.Class<GetTransitGatewayRegistrationsResponse>("GetTransitGatewayRegistrationsResponse")({TransitGatewayRegistrations: S.optional(TransitGatewayRegistrationList), NextToken: S.optional(S.String)}) {}
export class TransitGatewayRouteTableAttachment extends S.Class<TransitGatewayRouteTableAttachment>("TransitGatewayRouteTableAttachment")({Attachment: S.optional(Attachment), PeeringId: S.optional(S.String), TransitGatewayRouteTableArn: S.optional(S.String)}) {}
export class GetTransitGatewayRouteTableAttachmentResponse extends S.Class<GetTransitGatewayRouteTableAttachmentResponse>("GetTransitGatewayRouteTableAttachmentResponse")({TransitGatewayRouteTableAttachment: S.optional(TransitGatewayRouteTableAttachment)}) {}
export class ListAttachmentsResponse extends S.Class<ListAttachmentsResponse>("ListAttachmentsResponse")({Attachments: S.optional(AttachmentList), NextToken: S.optional(S.String)}) {}
export class ListPeeringsResponse extends S.Class<ListPeeringsResponse>("ListPeeringsResponse")({Peerings: S.optional(PeeringList), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({TagList: S.optional(TagList)}) {}
export class PutAttachmentRoutingPolicyLabelResponse extends S.Class<PutAttachmentRoutingPolicyLabelResponse>("PutAttachmentRoutingPolicyLabelResponse")({CoreNetworkId: S.optional(S.String), AttachmentId: S.optional(S.String), RoutingPolicyLabel: S.optional(S.String)}) {}
export class PutCoreNetworkPolicyResponse extends S.Class<PutCoreNetworkPolicyResponse>("PutCoreNetworkPolicyResponse")({CoreNetworkPolicy: S.optional(CoreNetworkPolicy)}) {}
export class RegisterTransitGatewayResponse extends S.Class<RegisterTransitGatewayResponse>("RegisterTransitGatewayResponse")({TransitGatewayRegistration: S.optional(TransitGatewayRegistration)}) {}
export class RejectAttachmentResponse extends S.Class<RejectAttachmentResponse>("RejectAttachmentResponse")({Attachment: S.optional(Attachment)}) {}
export class RemoveAttachmentRoutingPolicyLabelResponse extends S.Class<RemoveAttachmentRoutingPolicyLabelResponse>("RemoveAttachmentRoutingPolicyLabelResponse")({CoreNetworkId: S.optional(S.String), AttachmentId: S.optional(S.String), RoutingPolicyLabel: S.optional(S.String)}) {}
export class RestoreCoreNetworkPolicyVersionResponse extends S.Class<RestoreCoreNetworkPolicyVersionResponse>("RestoreCoreNetworkPolicyVersionResponse")({CoreNetworkPolicy: S.optional(CoreNetworkPolicy)}) {}
export class AccountStatus extends S.Class<AccountStatus>("AccountStatus")({AccountId: S.optional(S.String), SLRDeploymentStatus: S.optional(S.String)}) {}
export const AccountStatusList = S.Array(AccountStatus);
export class OrganizationStatus extends S.Class<OrganizationStatus>("OrganizationStatus")({OrganizationId: S.optional(S.String), OrganizationAwsServiceAccessStatus: S.optional(S.String), SLRDeploymentStatus: S.optional(S.String), AccountStatusList: S.optional(AccountStatusList)}) {}
export class StartOrganizationServiceAccessUpdateResponse extends S.Class<StartOrganizationServiceAccessUpdateResponse>("StartOrganizationServiceAccessUpdateResponse")({OrganizationStatus: S.optional(OrganizationStatus)}) {}
export class StartRouteAnalysisRequest extends S.Class<StartRouteAnalysisRequest>("StartRouteAnalysisRequest")({GlobalNetworkId: S.String, Source: RouteAnalysisEndpointOptionsSpecification, Destination: RouteAnalysisEndpointOptionsSpecification, IncludeReturnPath: S.optional(S.Boolean), UseMiddleboxes: S.optional(S.Boolean)}) {}
export class UpdateConnectionResponse extends S.Class<UpdateConnectionResponse>("UpdateConnectionResponse")({Connection: S.optional(Connection)}) {}
export class UpdateCoreNetworkResponse extends S.Class<UpdateCoreNetworkResponse>("UpdateCoreNetworkResponse")({CoreNetwork: S.optional(CoreNetwork)}) {}
export class UpdateDeviceResponse extends S.Class<UpdateDeviceResponse>("UpdateDeviceResponse")({Device: S.optional(Device)}) {}
export class UpdateDirectConnectGatewayAttachmentResponse extends S.Class<UpdateDirectConnectGatewayAttachmentResponse>("UpdateDirectConnectGatewayAttachmentResponse")({DirectConnectGatewayAttachment: S.optional(DirectConnectGatewayAttachment)}) {}
export class UpdateGlobalNetworkResponse extends S.Class<UpdateGlobalNetworkResponse>("UpdateGlobalNetworkResponse")({GlobalNetwork: S.optional(GlobalNetwork)}) {}
export class UpdateLinkResponse extends S.Class<UpdateLinkResponse>("UpdateLinkResponse")({Link: S.optional(Link)}) {}
export class UpdateNetworkResourceMetadataRequest extends S.Class<UpdateNetworkResourceMetadataRequest>("UpdateNetworkResourceMetadataRequest")({GlobalNetworkId: S.String, ResourceArn: S.String, Metadata: NetworkResourceMetadataMap}) {}
export class UpdateSiteResponse extends S.Class<UpdateSiteResponse>("UpdateSiteResponse")({Site: S.optional(Site)}) {}
export class VpcAttachment extends S.Class<VpcAttachment>("VpcAttachment")({Attachment: S.optional(Attachment), SubnetArns: S.optional(SubnetArnList), Options: S.optional(VpcOptions)}) {}
export class UpdateVpcAttachmentResponse extends S.Class<UpdateVpcAttachmentResponse>("UpdateVpcAttachmentResponse")({VpcAttachment: S.optional(VpcAttachment)}) {}
export class CoreNetworkSegmentEdgeIdentifier extends S.Class<CoreNetworkSegmentEdgeIdentifier>("CoreNetworkSegmentEdgeIdentifier")({CoreNetworkId: S.optional(S.String), SegmentName: S.optional(S.String), EdgeLocation: S.optional(S.String)}) {}
export class CoreNetworkNetworkFunctionGroupIdentifier extends S.Class<CoreNetworkNetworkFunctionGroupIdentifier>("CoreNetworkNetworkFunctionGroupIdentifier")({CoreNetworkId: S.optional(S.String), NetworkFunctionGroupName: S.optional(S.String), EdgeLocation: S.optional(S.String)}) {}
export class ConnectAttachment extends S.Class<ConnectAttachment>("ConnectAttachment")({Attachment: S.optional(Attachment), TransportAttachmentId: S.optional(S.String), Options: S.optional(ConnectAttachmentOptions)}) {}
export class NetworkResourceCount extends S.Class<NetworkResourceCount>("NetworkResourceCount")({ResourceType: S.optional(S.String), Count: S.optional(S.Number)}) {}
export const NetworkResourceCountList = S.Array(NetworkResourceCount);
export class Relationship extends S.Class<Relationship>("Relationship")({From: S.optional(S.String), To: S.optional(S.String)}) {}
export const RelationshipList = S.Array(Relationship);
export class NetworkResource extends S.Class<NetworkResource>("NetworkResource")({RegisteredGatewayArn: S.optional(S.String), CoreNetworkId: S.optional(S.String), AwsRegion: S.optional(S.String), AccountId: S.optional(S.String), ResourceType: S.optional(S.String), ResourceId: S.optional(S.String), ResourceArn: S.optional(S.String), Definition: S.optional(S.String), DefinitionTimestamp: S.optional(S.Date), Tags: S.optional(TagList), Metadata: S.optional(NetworkResourceMetadataMap)}) {}
export const NetworkResourceList = S.Array(NetworkResource);
export class RouteTableIdentifier extends S.Class<RouteTableIdentifier>("RouteTableIdentifier")({TransitGatewayRouteTableArn: S.optional(S.String), CoreNetworkSegmentEdge: S.optional(CoreNetworkSegmentEdgeIdentifier), CoreNetworkNetworkFunctionGroup: S.optional(CoreNetworkNetworkFunctionGroupIdentifier)}) {}
export class AttachmentRoutingPolicyAssociationSummary extends S.Class<AttachmentRoutingPolicyAssociationSummary>("AttachmentRoutingPolicyAssociationSummary")({AttachmentId: S.optional(S.String), PendingRoutingPolicies: S.optional(ConstrainedStringList), AssociatedRoutingPolicies: S.optional(ConstrainedStringList), RoutingPolicyLabel: S.optional(S.String)}) {}
export const AttachmentRoutingPolicyAssociationsList = S.Array(AttachmentRoutingPolicyAssociationSummary);
export class ConnectPeerSummary extends S.Class<ConnectPeerSummary>("ConnectPeerSummary")({CoreNetworkId: S.optional(S.String), ConnectAttachmentId: S.optional(S.String), ConnectPeerId: S.optional(S.String), EdgeLocation: S.optional(S.String), ConnectPeerState: S.optional(S.String), CreatedAt: S.optional(S.Date), Tags: S.optional(TagList), SubnetArn: S.optional(S.String)}) {}
export const ConnectPeerSummaryList = S.Array(ConnectPeerSummary);
export class CoreNetworkPolicyVersion extends S.Class<CoreNetworkPolicyVersion>("CoreNetworkPolicyVersion")({CoreNetworkId: S.optional(S.String), PolicyVersionId: S.optional(S.Number), Alias: S.optional(S.String), Description: S.optional(S.String), CreatedAt: S.optional(S.Date), ChangeSetState: S.optional(S.String)}) {}
export const CoreNetworkPolicyVersionList = S.Array(CoreNetworkPolicyVersion);
export class PrefixListAssociation extends S.Class<PrefixListAssociation>("PrefixListAssociation")({CoreNetworkId: S.optional(S.String), PrefixListArn: S.optional(S.String), PrefixListAlias: S.optional(S.String)}) {}
export const PrefixListAssociationList = S.Array(PrefixListAssociation);
export class CoreNetworkSummary extends S.Class<CoreNetworkSummary>("CoreNetworkSummary")({CoreNetworkId: S.optional(S.String), CoreNetworkArn: S.optional(S.String), GlobalNetworkId: S.optional(S.String), OwnerAccountId: S.optional(S.String), State: S.optional(S.String), Description: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const CoreNetworkSummaryList = S.Array(CoreNetworkSummary);
export const ExceptionContextMap = S.Record({key: S.String, value: S.String});
export class AssociateConnectPeerResponse extends S.Class<AssociateConnectPeerResponse>("AssociateConnectPeerResponse")({ConnectPeerAssociation: S.optional(ConnectPeerAssociation)}) {}
export class AssociateCustomerGatewayResponse extends S.Class<AssociateCustomerGatewayResponse>("AssociateCustomerGatewayResponse")({CustomerGatewayAssociation: S.optional(CustomerGatewayAssociation)}) {}
export class AssociateLinkResponse extends S.Class<AssociateLinkResponse>("AssociateLinkResponse")({LinkAssociation: S.optional(LinkAssociation)}) {}
export class AssociateTransitGatewayConnectPeerResponse extends S.Class<AssociateTransitGatewayConnectPeerResponse>("AssociateTransitGatewayConnectPeerResponse")({TransitGatewayConnectPeerAssociation: S.optional(TransitGatewayConnectPeerAssociation)}) {}
export class CreateConnectAttachmentResponse extends S.Class<CreateConnectAttachmentResponse>("CreateConnectAttachmentResponse")({ConnectAttachment: S.optional(ConnectAttachment)}) {}
export class CreateConnectionResponse extends S.Class<CreateConnectionResponse>("CreateConnectionResponse")({Connection: S.optional(Connection)}) {}
export class CreateConnectPeerResponse extends S.Class<CreateConnectPeerResponse>("CreateConnectPeerResponse")({ConnectPeer: S.optional(ConnectPeer)}) {}
export class CreateDeviceResponse extends S.Class<CreateDeviceResponse>("CreateDeviceResponse")({Device: S.optional(Device)}) {}
export class CreateDirectConnectGatewayAttachmentResponse extends S.Class<CreateDirectConnectGatewayAttachmentResponse>("CreateDirectConnectGatewayAttachmentResponse")({DirectConnectGatewayAttachment: S.optional(DirectConnectGatewayAttachment)}) {}
export class CreateGlobalNetworkResponse extends S.Class<CreateGlobalNetworkResponse>("CreateGlobalNetworkResponse")({GlobalNetwork: S.optional(GlobalNetwork)}) {}
export class CreateLinkResponse extends S.Class<CreateLinkResponse>("CreateLinkResponse")({Link: S.optional(Link)}) {}
export class CreateSiteResponse extends S.Class<CreateSiteResponse>("CreateSiteResponse")({Site: S.optional(Site)}) {}
export class CreateSiteToSiteVpnAttachmentResponse extends S.Class<CreateSiteToSiteVpnAttachmentResponse>("CreateSiteToSiteVpnAttachmentResponse")({SiteToSiteVpnAttachment: S.optional(SiteToSiteVpnAttachment)}) {}
export class CreateTransitGatewayPeeringResponse extends S.Class<CreateTransitGatewayPeeringResponse>("CreateTransitGatewayPeeringResponse")({TransitGatewayPeering: S.optional(TransitGatewayPeering)}) {}
export class CreateTransitGatewayRouteTableAttachmentResponse extends S.Class<CreateTransitGatewayRouteTableAttachmentResponse>("CreateTransitGatewayRouteTableAttachmentResponse")({TransitGatewayRouteTableAttachment: S.optional(TransitGatewayRouteTableAttachment)}) {}
export class CreateVpcAttachmentResponse extends S.Class<CreateVpcAttachmentResponse>("CreateVpcAttachmentResponse")({VpcAttachment: S.optional(VpcAttachment)}) {}
export class DeleteDeviceResponse extends S.Class<DeleteDeviceResponse>("DeleteDeviceResponse")({Device: S.optional(Device)}) {}
export class DeleteLinkResponse extends S.Class<DeleteLinkResponse>("DeleteLinkResponse")({Link: S.optional(Link)}) {}
export class GetConnectAttachmentResponse extends S.Class<GetConnectAttachmentResponse>("GetConnectAttachmentResponse")({ConnectAttachment: S.optional(ConnectAttachment)}) {}
export class GetNetworkResourceCountsResponse extends S.Class<GetNetworkResourceCountsResponse>("GetNetworkResourceCountsResponse")({NetworkResourceCounts: S.optional(NetworkResourceCountList), NextToken: S.optional(S.String)}) {}
export class GetNetworkResourceRelationshipsResponse extends S.Class<GetNetworkResourceRelationshipsResponse>("GetNetworkResourceRelationshipsResponse")({Relationships: S.optional(RelationshipList), NextToken: S.optional(S.String)}) {}
export class GetNetworkResourcesResponse extends S.Class<GetNetworkResourcesResponse>("GetNetworkResourcesResponse")({NetworkResources: S.optional(NetworkResourceList), NextToken: S.optional(S.String)}) {}
export class GetNetworkRoutesRequest extends S.Class<GetNetworkRoutesRequest>("GetNetworkRoutesRequest")({GlobalNetworkId: S.String, RouteTableIdentifier: RouteTableIdentifier, ExactCidrMatches: S.optional(ConstrainedStringList), LongestPrefixMatches: S.optional(ConstrainedStringList), SubnetOfMatches: S.optional(ConstrainedStringList), SupernetOfMatches: S.optional(ConstrainedStringList), PrefixListIds: S.optional(ConstrainedStringList), States: S.optional(RouteStateList), Types: S.optional(RouteTypeList), DestinationFilters: S.optional(FilterMap)}) {}
export class GetVpcAttachmentResponse extends S.Class<GetVpcAttachmentResponse>("GetVpcAttachmentResponse")({VpcAttachment: S.optional(VpcAttachment)}) {}
export class ListAttachmentRoutingPolicyAssociationsResponse extends S.Class<ListAttachmentRoutingPolicyAssociationsResponse>("ListAttachmentRoutingPolicyAssociationsResponse")({AttachmentRoutingPolicyAssociations: S.optional(AttachmentRoutingPolicyAssociationsList), NextToken: S.optional(S.String)}) {}
export class ListConnectPeersResponse extends S.Class<ListConnectPeersResponse>("ListConnectPeersResponse")({ConnectPeers: S.optional(ConnectPeerSummaryList), NextToken: S.optional(S.String)}) {}
export class ListCoreNetworkPolicyVersionsResponse extends S.Class<ListCoreNetworkPolicyVersionsResponse>("ListCoreNetworkPolicyVersionsResponse")({CoreNetworkPolicyVersions: S.optional(CoreNetworkPolicyVersionList), NextToken: S.optional(S.String)}) {}
export class ListCoreNetworkPrefixListAssociationsResponse extends S.Class<ListCoreNetworkPrefixListAssociationsResponse>("ListCoreNetworkPrefixListAssociationsResponse")({PrefixListAssociations: S.optional(PrefixListAssociationList), NextToken: S.optional(S.String)}) {}
export class ListCoreNetworksResponse extends S.Class<ListCoreNetworksResponse>("ListCoreNetworksResponse")({CoreNetworks: S.optional(CoreNetworkSummaryList), NextToken: S.optional(S.String)}) {}
export class RouteAnalysisEndpointOptions extends S.Class<RouteAnalysisEndpointOptions>("RouteAnalysisEndpointOptions")({TransitGatewayAttachmentArn: S.optional(S.String), TransitGatewayArn: S.optional(S.String), IpAddress: S.optional(S.String)}) {}
export const ReasonContextMap = S.Record({key: S.String, value: S.String});
export class RouteAnalysisCompletion extends S.Class<RouteAnalysisCompletion>("RouteAnalysisCompletion")({ResultCode: S.optional(S.String), ReasonCode: S.optional(S.String), ReasonContext: S.optional(ReasonContextMap)}) {}
export class NetworkResourceSummary extends S.Class<NetworkResourceSummary>("NetworkResourceSummary")({RegisteredGatewayArn: S.optional(S.String), ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), Definition: S.optional(S.String), NameTag: S.optional(S.String), IsMiddlebox: S.optional(S.Boolean)}) {}
export class PathComponent extends S.Class<PathComponent>("PathComponent")({Sequence: S.optional(S.Number), Resource: S.optional(NetworkResourceSummary), DestinationCidrBlock: S.optional(S.String)}) {}
export const PathComponentList = S.Array(PathComponent);
export class RouteAnalysisPath extends S.Class<RouteAnalysisPath>("RouteAnalysisPath")({CompletionStatus: S.optional(RouteAnalysisCompletion), Path: S.optional(PathComponentList)}) {}
export class RouteAnalysis extends S.Class<RouteAnalysis>("RouteAnalysis")({GlobalNetworkId: S.optional(S.String), OwnerAccountId: S.optional(S.String), RouteAnalysisId: S.optional(S.String), StartTimestamp: S.optional(S.Date), Status: S.optional(S.String), Source: S.optional(RouteAnalysisEndpointOptions), Destination: S.optional(RouteAnalysisEndpointOptions), IncludeReturnPath: S.optional(S.Boolean), UseMiddleboxes: S.optional(S.Boolean), ForwardPath: S.optional(RouteAnalysisPath), ReturnPath: S.optional(RouteAnalysisPath)}) {}
export class StartRouteAnalysisResponse extends S.Class<StartRouteAnalysisResponse>("StartRouteAnalysisResponse")({RouteAnalysis: S.optional(RouteAnalysis)}) {}
export class UpdateNetworkResourceMetadataResponse extends S.Class<UpdateNetworkResourceMetadataResponse>("UpdateNetworkResourceMetadataResponse")({ResourceArn: S.optional(S.String), Metadata: S.optional(NetworkResourceMetadataMap)}) {}
export class ConnectionHealth extends S.Class<ConnectionHealth>("ConnectionHealth")({Type: S.optional(S.String), Status: S.optional(S.String), Timestamp: S.optional(S.Date)}) {}
export class RoutingInformationNextHop extends S.Class<RoutingInformationNextHop>("RoutingInformationNextHop")({IpAddress: S.optional(S.String), CoreNetworkAttachmentId: S.optional(S.String), ResourceId: S.optional(S.String), ResourceType: S.optional(S.String), SegmentName: S.optional(S.String), EdgeLocation: S.optional(S.String)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({Name: S.String, Message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class NetworkTelemetry extends S.Class<NetworkTelemetry>("NetworkTelemetry")({RegisteredGatewayArn: S.optional(S.String), CoreNetworkId: S.optional(S.String), AwsRegion: S.optional(S.String), AccountId: S.optional(S.String), ResourceType: S.optional(S.String), ResourceId: S.optional(S.String), ResourceArn: S.optional(S.String), Address: S.optional(S.String), Health: S.optional(ConnectionHealth)}) {}
export const NetworkTelemetryList = S.Array(NetworkTelemetry);
export class CoreNetworkRoutingInformation extends S.Class<CoreNetworkRoutingInformation>("CoreNetworkRoutingInformation")({Prefix: S.optional(S.String), NextHop: S.optional(RoutingInformationNextHop), LocalPreference: S.optional(S.String), Med: S.optional(S.String), AsPath: S.optional(ConstrainedStringList), Communities: S.optional(ConstrainedStringList)}) {}
export const CoreNetworkRoutingInformationList = S.Array(CoreNetworkRoutingInformation);
export class RoutingPolicyAssociationDetail extends S.Class<RoutingPolicyAssociationDetail>("RoutingPolicyAssociationDetail")({RoutingPolicyNames: S.optional(ConstrainedStringList), SharedSegments: S.optional(ConstrainedStringList)}) {}
export const RoutingPolicyAssociationDetailsList = S.Array(RoutingPolicyAssociationDetail);
export class AcceptAttachmentResponse extends S.Class<AcceptAttachmentResponse>("AcceptAttachmentResponse")({Attachment: S.optional(Attachment)}) {}
export class DeleteCoreNetworkPolicyVersionResponse extends S.Class<DeleteCoreNetworkPolicyVersionResponse>("DeleteCoreNetworkPolicyVersionResponse")({CoreNetworkPolicy: S.optional(CoreNetworkPolicy)}) {}
export class DeregisterTransitGatewayResponse extends S.Class<DeregisterTransitGatewayResponse>("DeregisterTransitGatewayResponse")({TransitGatewayRegistration: S.optional(TransitGatewayRegistration)}) {}
export const WhenSentToSegmentsList = S.Array(S.String);
export class GetNetworkTelemetryResponse extends S.Class<GetNetworkTelemetryResponse>("GetNetworkTelemetryResponse")({NetworkTelemetry: S.optional(NetworkTelemetryList), NextToken: S.optional(S.String)}) {}
export class ListCoreNetworkRoutingInformationResponse extends S.Class<ListCoreNetworkRoutingInformationResponse>("ListCoreNetworkRoutingInformationResponse")({CoreNetworkRoutingInformation: S.optional(CoreNetworkRoutingInformationList), NextToken: S.optional(S.String)}) {}
export class ListOrganizationServiceAccessStatusResponse extends S.Class<ListOrganizationServiceAccessStatusResponse>("ListOrganizationServiceAccessStatusResponse")({OrganizationStatus: S.optional(OrganizationStatus), NextToken: S.optional(S.String)}) {}
export class CoreNetworkChangeEventValues extends S.Class<CoreNetworkChangeEventValues>("CoreNetworkChangeEventValues")({EdgeLocation: S.optional(S.String), PeerEdgeLocation: S.optional(S.String), RoutingPolicyDirection: S.optional(S.String), SegmentName: S.optional(S.String), NetworkFunctionGroupName: S.optional(S.String), AttachmentId: S.optional(S.String), Cidr: S.optional(S.String), RoutingPolicyAssociationDetails: S.optional(RoutingPolicyAssociationDetailsList)}) {}
export class WhenSentTo extends S.Class<WhenSentTo>("WhenSentTo")({WhenSentToSegmentsList: S.optional(WhenSentToSegmentsList)}) {}
export class CoreNetworkChangeEvent extends S.Class<CoreNetworkChangeEvent>("CoreNetworkChangeEvent")({Type: S.optional(S.String), Action: S.optional(S.String), IdentifierPath: S.optional(S.String), EventTime: S.optional(S.Date), Status: S.optional(S.String), Values: S.optional(CoreNetworkChangeEventValues)}) {}
export const CoreNetworkChangeEventList = S.Array(CoreNetworkChangeEvent);
export const EdgeSet = S.Array(S.String);
export const EdgeSetList = S.Array(EdgeSet);
export class CreateCoreNetworkResponse extends S.Class<CreateCoreNetworkResponse>("CreateCoreNetworkResponse")({CoreNetwork: S.optional(CoreNetwork)}) {}
export class DeleteConnectPeerResponse extends S.Class<DeleteConnectPeerResponse>("DeleteConnectPeerResponse")({ConnectPeer: S.optional(ConnectPeer)}) {}
export class DeletePeeringResponse extends S.Class<DeletePeeringResponse>("DeletePeeringResponse")({Peering: S.optional(Peering)}) {}
export class GetCoreNetworkChangeEventsResponse extends S.Class<GetCoreNetworkChangeEventsResponse>("GetCoreNetworkChangeEventsResponse")({CoreNetworkChangeEvents: S.optional(CoreNetworkChangeEventList), NextToken: S.optional(S.String)}) {}
export class NetworkFunctionGroup extends S.Class<NetworkFunctionGroup>("NetworkFunctionGroup")({Name: S.optional(S.String)}) {}
export const NetworkFunctionGroupList = S.Array(NetworkFunctionGroup);
export class EdgeOverride extends S.Class<EdgeOverride>("EdgeOverride")({EdgeSets: S.optional(EdgeSetList), UseEdge: S.optional(S.String)}) {}
export const WithEdgeOverridesList = S.Array(EdgeOverride);
export class NetworkRouteDestination extends S.Class<NetworkRouteDestination>("NetworkRouteDestination")({CoreNetworkAttachmentId: S.optional(S.String), TransitGatewayAttachmentId: S.optional(S.String), SegmentName: S.optional(S.String), NetworkFunctionGroupName: S.optional(S.String), EdgeLocation: S.optional(S.String), ResourceType: S.optional(S.String), ResourceId: S.optional(S.String)}) {}
export const NetworkRouteDestinationList = S.Array(NetworkRouteDestination);
export class Via extends S.Class<Via>("Via")({NetworkFunctionGroups: S.optional(NetworkFunctionGroupList), WithEdgeOverrides: S.optional(WithEdgeOverridesList)}) {}
export class NetworkRoute extends S.Class<NetworkRoute>("NetworkRoute")({DestinationCidrBlock: S.optional(S.String), Destinations: S.optional(NetworkRouteDestinationList), PrefixListId: S.optional(S.String), State: S.optional(S.String), Type: S.optional(S.String)}) {}
export const NetworkRouteList = S.Array(NetworkRoute);
export class ServiceInsertionAction extends S.Class<ServiceInsertionAction>("ServiceInsertionAction")({Action: S.optional(S.String), Mode: S.optional(S.String), WhenSentTo: S.optional(WhenSentTo), Via: S.optional(Via)}) {}
export const ServiceInsertionActionList = S.Array(ServiceInsertionAction);
export class GetNetworkRoutesResponse extends S.Class<GetNetworkRoutesResponse>("GetNetworkRoutesResponse")({RouteTableArn: S.optional(S.String), CoreNetworkSegmentEdge: S.optional(CoreNetworkSegmentEdgeIdentifier), RouteTableType: S.optional(S.String), RouteTableTimestamp: S.optional(S.Date), NetworkRoutes: S.optional(NetworkRouteList)}) {}
export class GetRouteAnalysisResponse extends S.Class<GetRouteAnalysisResponse>("GetRouteAnalysisResponse")({RouteAnalysis: S.optional(RouteAnalysis)}) {}
export class CoreNetworkChangeValues extends S.Class<CoreNetworkChangeValues>("CoreNetworkChangeValues")({SegmentName: S.optional(S.String), NetworkFunctionGroupName: S.optional(S.String), EdgeLocations: S.optional(ExternalRegionCodeList), Asn: S.optional(S.Number), Cidr: S.optional(S.String), DestinationIdentifier: S.optional(S.String), InsideCidrBlocks: S.optional(ConstrainedStringList), SharedSegments: S.optional(ConstrainedStringList), ServiceInsertionActions: S.optional(ServiceInsertionActionList), VpnEcmpSupport: S.optional(S.Boolean), DnsSupport: S.optional(S.Boolean), SecurityGroupReferencingSupport: S.optional(S.Boolean), RoutingPolicyDirection: S.optional(S.String), RoutingPolicy: S.optional(S.String), PeerEdgeLocations: S.optional(ExternalRegionCodeList), AttachmentId: S.optional(S.String), RoutingPolicyAssociationDetails: S.optional(RoutingPolicyAssociationDetailsList)}) {}
export class CoreNetworkChange extends S.Class<CoreNetworkChange>("CoreNetworkChange")({Type: S.optional(S.String), Action: S.optional(S.String), Identifier: S.optional(S.String), PreviousValues: S.optional(CoreNetworkChangeValues), NewValues: S.optional(CoreNetworkChangeValues), IdentifierPath: S.optional(S.String)}) {}
export const CoreNetworkChangeList = S.Array(CoreNetworkChange);
export class GetCoreNetworkChangeSetResponse extends S.Class<GetCoreNetworkChangeSetResponse>("GetCoreNetworkChangeSetResponse")({CoreNetworkChanges: S.optional(CoreNetworkChangeList), NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class CoreNetworkPolicyException extends S.TaggedError<CoreNetworkPolicyException>()("CoreNetworkPolicyException", {Message: S.String, Errors: S.optional(CoreNetworkPolicyErrorList)}) {};

//# Operations
/**
 * Deletes the specified connection in your global network.
 */export const deleteConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/connections/{ConnectionId}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DeleteConnection" }, DeleteConnectionRequest, DeleteConnectionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a core network along with all core network policies. This can only be done if there are no attachments on a core network.
 */export const deleteCoreNetwork = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks/{CoreNetworkId}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DeleteCoreNetwork" }, DeleteCoreNetworkRequest, DeleteCoreNetworkResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an association between a core network and a prefix list.
 */export const deleteCoreNetworkPrefixListAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/prefix-list/{PrefixListArn}/core-network/{CoreNetworkId}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DeleteCoreNetworkPrefixListAssociation" }, DeleteCoreNetworkPrefixListAssociationRequest, DeleteCoreNetworkPrefixListAssociationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing global network. You must first delete all global network objects
 * (devices, links, and sites), deregister all transit gateways, and delete any core networks.
 */export const deleteGlobalNetwork = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DeleteGlobalNetwork" }, DeleteGlobalNetworkRequest, DeleteGlobalNetworkResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a resource policy for the specified resource. This revokes the access of the principals specified in the resource policy.
 */export const deleteResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/resource-policy/{ResourceArn}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, DeleteResourcePolicyResponse, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing site. The site cannot be associated with any device or link.
 */export const deleteSite = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/sites/{SiteId}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DeleteSite" }, DeleteSiteRequest, DeleteSiteResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes one or more global networks. By default, all global networks are
 * described. To describe the objects in your global network, you must use the appropriate
 * `Get*` action. For example, to list the transit gateways in your global
 * network, use GetTransitGatewayRegistrations.
 */export const describeGlobalNetworks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DescribeGlobalNetworks" }, DescribeGlobalNetworksRequest, DescribeGlobalNetworksResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a core network Connect peer from a device and a link.
 */export const disassociateConnectPeer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/connect-peer-associations/{ConnectPeerId}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DisassociateConnectPeer" }, DisassociateConnectPeerRequest, DisassociateConnectPeerResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a customer gateway from a device and a link.
 */export const disassociateCustomerGateway = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/customer-gateway-associations/{CustomerGatewayArn}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DisassociateCustomerGateway" }, DisassociateCustomerGatewayRequest, DisassociateCustomerGatewayResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates an existing device from a link. You must first disassociate any customer
 * gateways that are associated with the link.
 */export const disassociateLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/link-associations", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DisassociateLink" }, DisassociateLinkRequest, DisassociateLinkResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a transit gateway Connect peer from a device and link.
 */export const disassociateTransitGatewayConnectPeer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations/{TransitGatewayConnectPeerArn}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DisassociateTransitGatewayConnectPeer" }, DisassociateTransitGatewayConnectPeerRequest, DisassociateTransitGatewayConnectPeerResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Executes a change set on your core network. Deploys changes globally based on the policy submitted..
 */export const executeCoreNetworkChangeSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}/execute", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.ExecuteCoreNetworkChangeSet" }, ExecuteCoreNetworkChangeSetRequest, ExecuteCoreNetworkChangeSetResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about one or more of your connections in a global network.
 */export const getConnections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/connections", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetConnections" }, GetConnectionsRequest, GetConnectionsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a core network Connect peer.
 */export const getConnectPeer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/connect-peers/{ConnectPeerId}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetConnectPeer" }, GetConnectPeerRequest, GetConnectPeerResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a core network Connect peer associations.
 */export const getConnectPeerAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/connect-peer-associations", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetConnectPeerAssociations" }, GetConnectPeerAssociationsRequest, GetConnectPeerAssociationsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the LIVE policy for a core network.
 */export const getCoreNetwork = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks/{CoreNetworkId}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetCoreNetwork" }, GetCoreNetworkRequest, GetCoreNetworkResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns details about a core network policy. You can get details about your current live policy or any previous policy version.
 */export const getCoreNetworkPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks/{CoreNetworkId}/core-network-policy", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetCoreNetworkPolicy" }, GetCoreNetworkPolicyRequest, GetCoreNetworkPolicyResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the association information for customer gateways that are associated with
 * devices and links in your global network.
 */export const getCustomerGatewayAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/customer-gateway-associations", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetCustomerGatewayAssociations" }, GetCustomerGatewayAssociationsRequest, GetCustomerGatewayAssociationsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about one or more of your devices in a global network.
 */export const getDevices = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/devices", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetDevices" }, GetDevicesRequest, GetDevicesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a specific Amazon Web Services Direct Connect gateway attachment.
 */export const getDirectConnectGatewayAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/direct-connect-gateway-attachments/{AttachmentId}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetDirectConnectGatewayAttachment" }, GetDirectConnectGatewayAttachmentRequest, GetDirectConnectGatewayAttachmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the link associations for a device or a link. Either the device ID or the link ID
 * must be specified.
 */export const getLinkAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/link-associations", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetLinkAssociations" }, GetLinkAssociationsRequest, GetLinkAssociationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about one or more links in a specified global network.
 * 
 * 
 * If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.
 */export const getLinks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/links", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetLinks" }, GetLinksRequest, GetLinksResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a resource policy.
 */export const getResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/resource-policy/{ResourceArn}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about one or more of your sites in a global network.
 */export const getSites = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/sites", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetSites" }, GetSitesRequest, GetSitesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a site-to-site VPN attachment.
 */export const getSiteToSiteVpnAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/site-to-site-vpn-attachments/{AttachmentId}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetSiteToSiteVpnAttachment" }, GetSiteToSiteVpnAttachmentRequest, GetSiteToSiteVpnAttachmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about one or more of your transit gateway Connect peer associations in a global network.
 */export const getTransitGatewayConnectPeerAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetTransitGatewayConnectPeerAssociations" }, GetTransitGatewayConnectPeerAssociationsRequest, GetTransitGatewayConnectPeerAssociationsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a transit gateway peer.
 */export const getTransitGatewayPeering = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/transit-gateway-peerings/{PeeringId}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetTransitGatewayPeering" }, GetTransitGatewayPeeringRequest, GetTransitGatewayPeeringResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the transit gateway registrations in a specified
 * global network.
 */export const getTransitGatewayRegistrations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/transit-gateway-registrations", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetTransitGatewayRegistrations" }, GetTransitGatewayRegistrationsRequest, GetTransitGatewayRegistrationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a transit gateway route table attachment.
 */export const getTransitGatewayRouteTableAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/transit-gateway-route-table-attachments/{AttachmentId}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetTransitGatewayRouteTableAttachment" }, GetTransitGatewayRouteTableAttachmentRequest, GetTransitGatewayRouteTableAttachmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of core network attachments.
 */export const listAttachments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/attachments", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.ListAttachments" }, ListAttachmentsRequest, ListAttachmentsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the peerings for a core network.
 */export const listPeerings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/peerings", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.ListPeerings" }, ListPeeringsRequest, ListPeeringsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags for a specified resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Applies a routing policy label to an attachment for traffic routing decisions.
 */export const putAttachmentRoutingPolicyLabel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/routing-policy-label", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.PutAttachmentRoutingPolicyLabel" }, PutAttachmentRoutingPolicyLabelRequest, PutAttachmentRoutingPolicyLabelResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates a resource policy.
 */export const putResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/resource-policy/{ResourceArn}", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers a transit gateway in your global network. Not all Regions support transit
 * gateways for global networks. For a list of the supported Regions, see Region Availability in the Amazon Web Services Transit Gateways for Global
 * Networks User Guide. The transit gateway can be in any of the supported
 * Amazon Web Services Regions, but it must be owned by the same Amazon Web Services account that owns the global
 * network. You cannot register a transit gateway in more than one global network.
 */export const registerTransitGateway = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/transit-gateway-registrations", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.RegisterTransitGateway" }, RegisterTransitGatewayRequest, RegisterTransitGatewayResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Rejects a core network attachment request.
 */export const rejectAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/attachments/{AttachmentId}/reject", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.RejectAttachment" }, RejectAttachmentRequest, RejectAttachmentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a routing policy label from an attachment.
 */export const removeAttachmentRoutingPolicyLabel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/routing-policy-label/core-network/{CoreNetworkId}/attachment/{AttachmentId}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.RemoveAttachmentRoutingPolicyLabel" }, RemoveAttachmentRoutingPolicyLabelRequest, RemoveAttachmentRoutingPolicyLabelResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Restores a previous policy version as a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and restored policy.
 */export const restoreCoreNetworkPolicyVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}/restore", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.RestoreCoreNetworkPolicyVersion" }, RestoreCoreNetworkPolicyVersionRequest, RestoreCoreNetworkPolicyVersionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables the Network Manager service for an Amazon Web Services Organization. This can only be called by a management account within the organization.
 */export const startOrganizationServiceAccessUpdate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/organizations/service-access", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.StartOrganizationServiceAccessUpdate" }, StartOrganizationServiceAccessUpdateRequest, StartOrganizationServiceAccessUpdateResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from a specified resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the information for an existing connection. To remove information for any of the parameters,
 * specify an empty string.
 */export const updateConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/connections/{ConnectionId}", method: "PATCH", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.UpdateConnection" }, UpdateConnectionRequest, UpdateConnectionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the description of a core network.
 */export const updateCoreNetwork = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks/{CoreNetworkId}", method: "PATCH", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.UpdateCoreNetwork" }, UpdateCoreNetworkRequest, UpdateCoreNetworkResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the details for an existing device. To remove information for any of the
 * parameters, specify an empty string.
 */export const updateDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/devices/{DeviceId}", method: "PATCH", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.UpdateDevice" }, UpdateDeviceRequest, UpdateDeviceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the edge locations associated with an Amazon Web Services Direct Connect gateway attachment.
 */export const updateDirectConnectGatewayAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/direct-connect-gateway-attachments/{AttachmentId}", method: "PATCH", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.UpdateDirectConnectGatewayAttachment" }, UpdateDirectConnectGatewayAttachmentRequest, UpdateDirectConnectGatewayAttachmentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing global network. To remove information for any of the parameters,
 * specify an empty string.
 */export const updateGlobalNetwork = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}", method: "PATCH", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.UpdateGlobalNetwork" }, UpdateGlobalNetworkRequest, UpdateGlobalNetworkResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the details for an existing link. To remove information for any of the
 * parameters, specify an empty string.
 */export const updateLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/links/{LinkId}", method: "PATCH", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.UpdateLink" }, UpdateLinkRequest, UpdateLinkResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the information for an existing site. To remove information for any of the
 * parameters, specify an empty string.
 */export const updateSite = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/sites/{SiteId}", method: "PATCH", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.UpdateSite" }, UpdateSiteRequest, UpdateSiteResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a VPC attachment.
 */export const updateVpcAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/vpc-attachments/{AttachmentId}", method: "PATCH", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.UpdateVpcAttachment" }, UpdateVpcAttachmentRequest, UpdateVpcAttachmentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a core network Connect peer with a device and optionally, with a link.
 * 
 * 
 * If you specify a link, it must be associated with the specified device. You can only
 * associate core network Connect peers that have been created on a core network Connect
 * attachment on a core network.
 */export const associateConnectPeer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/connect-peer-associations", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.AssociateConnectPeer" }, AssociateConnectPeerRequest, AssociateConnectPeerResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a customer gateway with a device and optionally, with a link. If you
 * specify a link, it must be associated with the specified device.
 * 
 * 
 * You can only associate customer gateways that are connected to a VPN attachment on a
 * transit gateway or core network registered in your global network. When you register a
 * transit gateway or core network, customer gateways that are connected to the transit
 * gateway are automatically included in the global network. To list customer gateways
 * that are connected to a transit gateway, use the DescribeVpnConnections EC2 API and filter by
 * `transit-gateway-id`.
 * 
 * 
 * You cannot associate a customer gateway with more than one device and link.
 */export const associateCustomerGateway = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/customer-gateway-associations", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.AssociateCustomerGateway" }, AssociateCustomerGatewayRequest, AssociateCustomerGatewayResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.
 */export const associateLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/link-associations", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.AssociateLink" }, AssociateLinkRequest, AssociateLinkResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a transit gateway Connect peer with a device, and optionally, with a link. If you
 * specify a link, it must be associated with the specified device.
 * 
 * 
 * You can only associate transit gateway Connect peers that have been created on a
 * transit gateway that's registered in your global network.
 * 
 * 
 * You cannot associate a transit gateway Connect peer with more than one device and link.
 */export const associateTransitGatewayConnectPeer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.AssociateTransitGatewayConnectPeer" }, AssociateTransitGatewayConnectPeerRequest, AssociateTransitGatewayConnectPeerResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a core network Connect attachment from a specified core network attachment.
 * 
 * 
 * A core network Connect attachment is a GRE-based tunnel attachment that you can use to
 * establish a connection between a core network and an appliance. A core network Connect
 * attachment uses an existing VPC attachment as the underlying transport mechanism.
 */export const createConnectAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/connect-attachments", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateConnectAttachment" }, CreateConnectAttachmentRequest, CreateConnectAttachmentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a connection between two devices. The devices can be a physical or virtual appliance that connects to a third-party appliance in a VPC, or a physical appliance that connects to another physical appliance in an on-premises network.
 */export const createConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/connections", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateConnection" }, CreateConnectionRequest, CreateConnectionResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a core network Connect peer for a specified core network connect attachment between a core network and an appliance.
 * The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).
 */export const createConnectPeer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/connect-peers", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateConnectPeer" }, CreateConnectPeerRequest, CreateConnectPeerResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an association between a core network and a prefix list for routing control.
 */export const createCoreNetworkPrefixListAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/prefix-list", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateCoreNetworkPrefixListAssociation" }, CreateCoreNetworkPrefixListAssociationRequest, CreateCoreNetworkPrefixListAssociationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new device in a global network. If you specify both a site ID and a
 * location, the location of the site is used for visualization in the Network Manager console.
 */export const createDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/devices", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateDevice" }, CreateDeviceRequest, CreateDeviceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Amazon Web Services Direct Connect gateway attachment
 */export const createDirectConnectGatewayAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/direct-connect-gateway-attachments", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateDirectConnectGatewayAttachment" }, CreateDirectConnectGatewayAttachmentRequest, CreateDirectConnectGatewayAttachmentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new, empty global network.
 */export const createGlobalNetwork = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateGlobalNetwork" }, CreateGlobalNetworkRequest, CreateGlobalNetworkResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new link for a specified site.
 */export const createLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/links", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateLink" }, CreateLinkRequest, CreateLinkResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new site in a global network.
 */export const createSite = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/sites", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateSite" }, CreateSiteRequest, CreateSiteResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Amazon Web Services site-to-site VPN attachment on an edge location of a core network.
 */export const createSiteToSiteVpnAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/site-to-site-vpn-attachments", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateSiteToSiteVpnAttachment" }, CreateSiteToSiteVpnAttachmentRequest, CreateSiteToSiteVpnAttachmentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a transit gateway peering connection.
 */export const createTransitGatewayPeering = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/transit-gateway-peerings", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateTransitGatewayPeering" }, CreateTransitGatewayPeeringRequest, CreateTransitGatewayPeeringResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a transit gateway route table attachment.
 */export const createTransitGatewayRouteTableAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/transit-gateway-route-table-attachments", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateTransitGatewayRouteTableAttachment" }, CreateTransitGatewayRouteTableAttachmentRequest, CreateTransitGatewayRouteTableAttachmentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a VPC attachment on an edge location of a core network.
 */export const createVpcAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/vpc-attachments", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateVpcAttachment" }, CreateVpcAttachmentRequest, CreateVpcAttachmentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing device. You must first disassociate the device from any links and
 * customer gateways.
 */export const deleteDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/devices/{DeviceId}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DeleteDevice" }, DeleteDeviceRequest, DeleteDeviceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing link. You must first disassociate the link from any devices and
 * customer gateways.
 */export const deleteLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/links/{LinkId}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DeleteLink" }, DeleteLinkRequest, DeleteLinkResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a core network Connect attachment.
 */export const getConnectAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/connect-attachments/{AttachmentId}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetConnectAttachment" }, GetConnectAttachmentRequest, GetConnectAttachmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the count of network resources, by resource type, for the specified global network.
 */export const getNetworkResourceCounts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/network-resource-count", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetNetworkResourceCounts" }, GetNetworkResourceCountsRequest, GetNetworkResourceCountsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the network resource relationships for the specified global network.
 */export const getNetworkResourceRelationships = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/network-resource-relationships", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetNetworkResourceRelationships" }, GetNetworkResourceRelationshipsRequest, GetNetworkResourceRelationshipsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the network resources for the specified global network.
 * 
 * 
 * The results include information from the corresponding Describe call for the resource, minus any sensitive information such as pre-shared keys.
 */export const getNetworkResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/network-resources", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetNetworkResources" }, GetNetworkResourcesRequest, GetNetworkResourcesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a VPC attachment.
 */export const getVpcAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/vpc-attachments/{AttachmentId}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetVpcAttachment" }, GetVpcAttachmentRequest, GetVpcAttachmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the routing policy associations for attachments in a core network.
 */export const listAttachmentRoutingPolicyAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/routing-policy-label/core-network/{CoreNetworkId}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.ListAttachmentRoutingPolicyAssociations" }, ListAttachmentRoutingPolicyAssociationsRequest, ListAttachmentRoutingPolicyAssociationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of core network Connect peers.
 */export const listConnectPeers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/connect-peers", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.ListConnectPeers" }, ListConnectPeersRequest, ListConnectPeersResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of core network policy versions.
 */export const listCoreNetworkPolicyVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks/{CoreNetworkId}/core-network-policy-versions", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.ListCoreNetworkPolicyVersions" }, ListCoreNetworkPolicyVersionsRequest, ListCoreNetworkPolicyVersionsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the prefix list associations for a core network.
 */export const listCoreNetworkPrefixListAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/prefix-list/core-network/{CoreNetworkId}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.ListCoreNetworkPrefixListAssociations" }, ListCoreNetworkPrefixListAssociationsRequest, ListCoreNetworkPrefixListAssociationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of owned and shared core networks.
 */export const listCoreNetworks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.ListCoreNetworks" }, ListCoreNetworksRequest, ListCoreNetworksResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and the submitted policy.
 */export const putCoreNetworkPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks/{CoreNetworkId}/core-network-policy", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.PutCoreNetworkPolicy" }, PutCoreNetworkPolicyRequest, PutCoreNetworkPolicyResponse, [AccessDeniedException, ConflictException, CoreNetworkPolicyException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts analyzing the routing path between the specified source and destination. For more information,
 * see Route Analyzer.
 */export const startRouteAnalysis = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/route-analyses", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.StartRouteAnalysis" }, StartRouteAnalysisRequest, StartRouteAnalysisResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tags a specified resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/tags/{ResourceArn}", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the resource metadata for the specified global network.
 */export const updateNetworkResourceMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/network-resources/{ResourceArn}/metadata", method: "PATCH", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.UpdateNetworkResourceMetadata" }, UpdateNetworkResourceMetadataRequest, UpdateNetworkResourceMetadataResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Accepts a core network attachment request.
 * 
 * 
 * Once the attachment request is accepted by a core network owner, the attachment is
 * created and connected to a core network.
 */export const acceptAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/attachments/{AttachmentId}/accept", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.AcceptAttachment" }, AcceptAttachmentRequest, AcceptAttachmentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an attachment. Supports all attachment types.
 */export const deleteAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/attachments/{AttachmentId}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DeleteAttachment" }, DeleteAttachmentRequest, DeleteAttachmentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a policy version from a core network. You can't delete the current LIVE policy.
 */export const deleteCoreNetworkPolicyVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DeleteCoreNetworkPolicyVersion" }, DeleteCoreNetworkPolicyVersionRequest, DeleteCoreNetworkPolicyVersionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deregisters a transit gateway from your global network. This action does not delete
 * your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.
 */export const deregisterTransitGateway = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/transit-gateway-registrations/{TransitGatewayArn}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DeregisterTransitGateway" }, DeregisterTransitGatewayRequest, DeregisterTransitGatewayResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the network telemetry of the specified global network.
 */export const getNetworkTelemetry = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/network-telemetry", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetNetworkTelemetry" }, GetNetworkTelemetryRequest, GetNetworkTelemetryResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists routing information for a core network, including routes and their attributes.
 */export const listCoreNetworkRoutingInformation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks/{CoreNetworkId}/core-network-routing-information", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.ListCoreNetworkRoutingInformation" }, ListCoreNetworkRoutingInformationRequest, ListCoreNetworkRoutingInformationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the status of the Service Linked Role (SLR) deployment for the accounts in a given Amazon Web Services Organization.
 */export const listOrganizationServiceAccessStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/organizations/service-access", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.ListOrganizationServiceAccessStatus" }, ListOrganizationServiceAccessStatusRequest, ListOrganizationServiceAccessStatusResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a core network as part of your global network, and optionally, with a core network policy.
 */export const createCoreNetwork = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.CreateCoreNetwork" }, CreateCoreNetworkRequest, CreateCoreNetworkResponse, [AccessDeniedException, ConflictException, CoreNetworkPolicyException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Connect peer.
 */export const deleteConnectPeer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/connect-peers/{ConnectPeerId}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DeleteConnectPeer" }, DeleteConnectPeerRequest, DeleteConnectPeerResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing peering connection.
 */export const deletePeering = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/peerings/{PeeringId}", method: "DELETE", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.DeletePeering" }, DeletePeeringRequest, DeletePeeringResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a core network change event.
 */export const getCoreNetworkChangeEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks/{CoreNetworkId}/core-network-change-events/{PolicyVersionId}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetCoreNetworkChangeEvents" }, GetCoreNetworkChangeEventsRequest, GetCoreNetworkChangeEventsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the network routes of the specified global network.
 */export const getNetworkRoutes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/network-routes", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetNetworkRoutes" }, GetNetworkRoutesRequest, GetNetworkRoutesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified route analysis.
 */export const getRouteAnalysis = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/global-networks/{GlobalNetworkId}/route-analyses/{RouteAnalysisId}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetRouteAnalysis" }, GetRouteAnalysisRequest, GetRouteAnalysisResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a change set between the LIVE core network policy and a submitted policy.
 */export const getCoreNetworkChangeSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-05", uri: "/core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}", method: "GET", sdkId: "NetworkManager", sigV4ServiceName: "networkmanager", name: "NetworkManager.GetCoreNetworkChangeSet" }, GetCoreNetworkChangeSetRequest, GetCoreNetworkChangeSetResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

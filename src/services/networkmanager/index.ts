import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { NetworkManager as _NetworkManager } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "NetworkManager",
  version: "2019-07-05",
  protocol: "restJson1",
  sigV4ServiceName: "networkmanager",
  endpointPrefix: "networkmanager",
  operations: {
    AcceptAttachment: "POST /attachments/{AttachmentId}/accept",
    AssociateConnectPeer:
      "POST /global-networks/{GlobalNetworkId}/connect-peer-associations",
    AssociateCustomerGateway:
      "POST /global-networks/{GlobalNetworkId}/customer-gateway-associations",
    AssociateLink: "POST /global-networks/{GlobalNetworkId}/link-associations",
    AssociateTransitGatewayConnectPeer:
      "POST /global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations",
    CreateConnectAttachment: "POST /connect-attachments",
    CreateConnection: "POST /global-networks/{GlobalNetworkId}/connections",
    CreateConnectPeer: "POST /connect-peers",
    CreateCoreNetwork: "POST /core-networks",
    CreateDevice: "POST /global-networks/{GlobalNetworkId}/devices",
    CreateDirectConnectGatewayAttachment:
      "POST /direct-connect-gateway-attachments",
    CreateGlobalNetwork: "POST /global-networks",
    CreateLink: "POST /global-networks/{GlobalNetworkId}/links",
    CreateSite: "POST /global-networks/{GlobalNetworkId}/sites",
    CreateSiteToSiteVpnAttachment: "POST /site-to-site-vpn-attachments",
    CreateTransitGatewayPeering: "POST /transit-gateway-peerings",
    CreateTransitGatewayRouteTableAttachment:
      "POST /transit-gateway-route-table-attachments",
    CreateVpcAttachment: "POST /vpc-attachments",
    DeleteAttachment: "DELETE /attachments/{AttachmentId}",
    DeleteConnection:
      "DELETE /global-networks/{GlobalNetworkId}/connections/{ConnectionId}",
    DeleteConnectPeer: "DELETE /connect-peers/{ConnectPeerId}",
    DeleteCoreNetwork: "DELETE /core-networks/{CoreNetworkId}",
    DeleteCoreNetworkPolicyVersion:
      "DELETE /core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}",
    DeleteDevice:
      "DELETE /global-networks/{GlobalNetworkId}/devices/{DeviceId}",
    DeleteGlobalNetwork: "DELETE /global-networks/{GlobalNetworkId}",
    DeleteLink: "DELETE /global-networks/{GlobalNetworkId}/links/{LinkId}",
    DeletePeering: "DELETE /peerings/{PeeringId}",
    DeleteResourcePolicy: "DELETE /resource-policy/{ResourceArn}",
    DeleteSite: "DELETE /global-networks/{GlobalNetworkId}/sites/{SiteId}",
    DeregisterTransitGateway:
      "DELETE /global-networks/{GlobalNetworkId}/transit-gateway-registrations/{TransitGatewayArn}",
    DescribeGlobalNetworks: "GET /global-networks",
    DisassociateConnectPeer:
      "DELETE /global-networks/{GlobalNetworkId}/connect-peer-associations/{ConnectPeerId}",
    DisassociateCustomerGateway:
      "DELETE /global-networks/{GlobalNetworkId}/customer-gateway-associations/{CustomerGatewayArn}",
    DisassociateLink:
      "DELETE /global-networks/{GlobalNetworkId}/link-associations",
    DisassociateTransitGatewayConnectPeer:
      "DELETE /global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations/{TransitGatewayConnectPeerArn}",
    ExecuteCoreNetworkChangeSet:
      "POST /core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}/execute",
    GetConnectAttachment: "GET /connect-attachments/{AttachmentId}",
    GetConnections: "GET /global-networks/{GlobalNetworkId}/connections",
    GetConnectPeer: "GET /connect-peers/{ConnectPeerId}",
    GetConnectPeerAssociations:
      "GET /global-networks/{GlobalNetworkId}/connect-peer-associations",
    GetCoreNetwork: "GET /core-networks/{CoreNetworkId}",
    GetCoreNetworkChangeEvents:
      "GET /core-networks/{CoreNetworkId}/core-network-change-events/{PolicyVersionId}",
    GetCoreNetworkChangeSet:
      "GET /core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}",
    GetCoreNetworkPolicy:
      "GET /core-networks/{CoreNetworkId}/core-network-policy",
    GetCustomerGatewayAssociations:
      "GET /global-networks/{GlobalNetworkId}/customer-gateway-associations",
    GetDevices: "GET /global-networks/{GlobalNetworkId}/devices",
    GetDirectConnectGatewayAttachment:
      "GET /direct-connect-gateway-attachments/{AttachmentId}",
    GetLinkAssociations:
      "GET /global-networks/{GlobalNetworkId}/link-associations",
    GetLinks: "GET /global-networks/{GlobalNetworkId}/links",
    GetNetworkResourceCounts:
      "GET /global-networks/{GlobalNetworkId}/network-resource-count",
    GetNetworkResourceRelationships:
      "GET /global-networks/{GlobalNetworkId}/network-resource-relationships",
    GetNetworkResources:
      "GET /global-networks/{GlobalNetworkId}/network-resources",
    GetNetworkRoutes: "POST /global-networks/{GlobalNetworkId}/network-routes",
    GetNetworkTelemetry:
      "GET /global-networks/{GlobalNetworkId}/network-telemetry",
    GetResourcePolicy: "GET /resource-policy/{ResourceArn}",
    GetRouteAnalysis:
      "GET /global-networks/{GlobalNetworkId}/route-analyses/{RouteAnalysisId}",
    GetSites: "GET /global-networks/{GlobalNetworkId}/sites",
    GetSiteToSiteVpnAttachment:
      "GET /site-to-site-vpn-attachments/{AttachmentId}",
    GetTransitGatewayConnectPeerAssociations:
      "GET /global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations",
    GetTransitGatewayPeering: "GET /transit-gateway-peerings/{PeeringId}",
    GetTransitGatewayRegistrations:
      "GET /global-networks/{GlobalNetworkId}/transit-gateway-registrations",
    GetTransitGatewayRouteTableAttachment:
      "GET /transit-gateway-route-table-attachments/{AttachmentId}",
    GetVpcAttachment: "GET /vpc-attachments/{AttachmentId}",
    ListAttachments: "GET /attachments",
    ListConnectPeers: "GET /connect-peers",
    ListCoreNetworkPolicyVersions:
      "GET /core-networks/{CoreNetworkId}/core-network-policy-versions",
    ListCoreNetworks: "GET /core-networks",
    ListOrganizationServiceAccessStatus: "GET /organizations/service-access",
    ListPeerings: "GET /peerings",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    PutCoreNetworkPolicy:
      "POST /core-networks/{CoreNetworkId}/core-network-policy",
    PutResourcePolicy: "POST /resource-policy/{ResourceArn}",
    RegisterTransitGateway:
      "POST /global-networks/{GlobalNetworkId}/transit-gateway-registrations",
    RejectAttachment: "POST /attachments/{AttachmentId}/reject",
    RestoreCoreNetworkPolicyVersion:
      "POST /core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}/restore",
    StartOrganizationServiceAccessUpdate: "POST /organizations/service-access",
    StartRouteAnalysis:
      "POST /global-networks/{GlobalNetworkId}/route-analyses",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateConnection:
      "PATCH /global-networks/{GlobalNetworkId}/connections/{ConnectionId}",
    UpdateCoreNetwork: "PATCH /core-networks/{CoreNetworkId}",
    UpdateDevice: "PATCH /global-networks/{GlobalNetworkId}/devices/{DeviceId}",
    UpdateDirectConnectGatewayAttachment:
      "PATCH /direct-connect-gateway-attachments/{AttachmentId}",
    UpdateGlobalNetwork: "PATCH /global-networks/{GlobalNetworkId}",
    UpdateLink: "PATCH /global-networks/{GlobalNetworkId}/links/{LinkId}",
    UpdateNetworkResourceMetadata:
      "PATCH /global-networks/{GlobalNetworkId}/network-resources/{ResourceArn}/metadata",
    UpdateSite: "PATCH /global-networks/{GlobalNetworkId}/sites/{SiteId}",
    UpdateVpcAttachment: "PATCH /vpc-attachments/{AttachmentId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const NetworkManager = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _NetworkManager;

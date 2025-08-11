import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class DirectConnect extends AWSServiceClient {
  acceptDirectConnectGatewayAssociationProposal(
    input: AcceptDirectConnectGatewayAssociationProposalRequest,
  ): Effect.Effect<
    AcceptDirectConnectGatewayAssociationProposalResult,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  allocateConnectionOnInterconnect(
    input: AllocateConnectionOnInterconnectRequest,
  ): Effect.Effect<
    Connection,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  allocateHostedConnection(
    input: AllocateHostedConnectionRequest,
  ): Effect.Effect<
    Connection,
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError
  >;
  allocatePrivateVirtualInterface(
    input: AllocatePrivateVirtualInterfaceRequest,
  ): Effect.Effect<
    VirtualInterface,
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError
  >;
  allocatePublicVirtualInterface(
    input: AllocatePublicVirtualInterfaceRequest,
  ): Effect.Effect<
    VirtualInterface,
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError
  >;
  allocateTransitVirtualInterface(
    input: AllocateTransitVirtualInterfaceRequest,
  ): Effect.Effect<
    AllocateTransitVirtualInterfaceResult,
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError
  >;
  associateConnectionWithLag(
    input: AssociateConnectionWithLagRequest,
  ): Effect.Effect<
    Connection,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  associateHostedConnection(
    input: AssociateHostedConnectionRequest,
  ): Effect.Effect<
    Connection,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  associateMacSecKey(
    input: AssociateMacSecKeyRequest,
  ): Effect.Effect<
    AssociateMacSecKeyResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  associateVirtualInterface(
    input: AssociateVirtualInterfaceRequest,
  ): Effect.Effect<
    VirtualInterface,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  confirmConnection(
    input: ConfirmConnectionRequest,
  ): Effect.Effect<
    ConfirmConnectionResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  confirmCustomerAgreement(
    input: ConfirmCustomerAgreementRequest,
  ): Effect.Effect<
    ConfirmCustomerAgreementResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  confirmPrivateVirtualInterface(
    input: ConfirmPrivateVirtualInterfaceRequest,
  ): Effect.Effect<
    ConfirmPrivateVirtualInterfaceResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  confirmPublicVirtualInterface(
    input: ConfirmPublicVirtualInterfaceRequest,
  ): Effect.Effect<
    ConfirmPublicVirtualInterfaceResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  confirmTransitVirtualInterface(
    input: ConfirmTransitVirtualInterfaceRequest,
  ): Effect.Effect<
    ConfirmTransitVirtualInterfaceResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  createBGPPeer(
    input: CreateBGPPeerRequest,
  ): Effect.Effect<
    CreateBGPPeerResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  createConnection(
    input: CreateConnectionRequest,
  ): Effect.Effect<
    Connection,
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError
  >;
  createDirectConnectGateway(
    input: CreateDirectConnectGatewayRequest,
  ): Effect.Effect<
    CreateDirectConnectGatewayResult,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  createDirectConnectGatewayAssociation(
    input: CreateDirectConnectGatewayAssociationRequest,
  ): Effect.Effect<
    CreateDirectConnectGatewayAssociationResult,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  createDirectConnectGatewayAssociationProposal(
    input: CreateDirectConnectGatewayAssociationProposalRequest,
  ): Effect.Effect<
    CreateDirectConnectGatewayAssociationProposalResult,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  createInterconnect(
    input: CreateInterconnectRequest,
  ): Effect.Effect<
    Interconnect,
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError
  >;
  createLag(
    input: CreateLagRequest,
  ): Effect.Effect<
    Lag,
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError
  >;
  createPrivateVirtualInterface(
    input: CreatePrivateVirtualInterfaceRequest,
  ): Effect.Effect<
    VirtualInterface,
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError
  >;
  createPublicVirtualInterface(
    input: CreatePublicVirtualInterfaceRequest,
  ): Effect.Effect<
    VirtualInterface,
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError
  >;
  createTransitVirtualInterface(
    input: CreateTransitVirtualInterfaceRequest,
  ): Effect.Effect<
    CreateTransitVirtualInterfaceResult,
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError
  >;
  deleteBGPPeer(
    input: DeleteBGPPeerRequest,
  ): Effect.Effect<
    DeleteBGPPeerResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  deleteConnection(
    input: DeleteConnectionRequest,
  ): Effect.Effect<
    Connection,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  deleteDirectConnectGateway(
    input: DeleteDirectConnectGatewayRequest,
  ): Effect.Effect<
    DeleteDirectConnectGatewayResult,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  deleteDirectConnectGatewayAssociation(
    input: DeleteDirectConnectGatewayAssociationRequest,
  ): Effect.Effect<
    DeleteDirectConnectGatewayAssociationResult,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  deleteDirectConnectGatewayAssociationProposal(
    input: DeleteDirectConnectGatewayAssociationProposalRequest,
  ): Effect.Effect<
    DeleteDirectConnectGatewayAssociationProposalResult,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  deleteInterconnect(
    input: DeleteInterconnectRequest,
  ): Effect.Effect<
    DeleteInterconnectResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  deleteLag(
    input: DeleteLagRequest,
  ): Effect.Effect<
    Lag,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  deleteVirtualInterface(
    input: DeleteVirtualInterfaceRequest,
  ): Effect.Effect<
    DeleteVirtualInterfaceResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeConnectionLoa(
    input: DescribeConnectionLoaRequest,
  ): Effect.Effect<
    DescribeConnectionLoaResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeConnections(
    input: DescribeConnectionsRequest,
  ): Effect.Effect<
    Connections,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeConnectionsOnInterconnect(
    input: DescribeConnectionsOnInterconnectRequest,
  ): Effect.Effect<
    Connections,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeCustomerMetadata(input: {}): Effect.Effect<
    DescribeCustomerMetadataResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeDirectConnectGatewayAssociationProposals(
    input: DescribeDirectConnectGatewayAssociationProposalsRequest,
  ): Effect.Effect<
    DescribeDirectConnectGatewayAssociationProposalsResult,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeDirectConnectGatewayAssociations(
    input: DescribeDirectConnectGatewayAssociationsRequest,
  ): Effect.Effect<
    DescribeDirectConnectGatewayAssociationsResult,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeDirectConnectGatewayAttachments(
    input: DescribeDirectConnectGatewayAttachmentsRequest,
  ): Effect.Effect<
    DescribeDirectConnectGatewayAttachmentsResult,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeDirectConnectGateways(
    input: DescribeDirectConnectGatewaysRequest,
  ): Effect.Effect<
    DescribeDirectConnectGatewaysResult,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeHostedConnections(
    input: DescribeHostedConnectionsRequest,
  ): Effect.Effect<
    Connections,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeInterconnectLoa(
    input: DescribeInterconnectLoaRequest,
  ): Effect.Effect<
    DescribeInterconnectLoaResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeInterconnects(
    input: DescribeInterconnectsRequest,
  ): Effect.Effect<
    Interconnects,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeLags(
    input: DescribeLagsRequest,
  ): Effect.Effect<
    Lags,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeLoa(
    input: DescribeLoaRequest,
  ): Effect.Effect<
    Loa,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeLocations(input: {}): Effect.Effect<
    Locations,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeRouterConfiguration(
    input: DescribeRouterConfigurationRequest,
  ): Effect.Effect<
    DescribeRouterConfigurationResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeTags(
    input: DescribeTagsRequest,
  ): Effect.Effect<
    DescribeTagsResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeVirtualGateways(input: {}): Effect.Effect<
    VirtualGateways,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  describeVirtualInterfaces(
    input: DescribeVirtualInterfacesRequest,
  ): Effect.Effect<
    VirtualInterfaces,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  disassociateConnectionFromLag(
    input: DisassociateConnectionFromLagRequest,
  ): Effect.Effect<
    Connection,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  disassociateMacSecKey(
    input: DisassociateMacSecKeyRequest,
  ): Effect.Effect<
    DisassociateMacSecKeyResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  listVirtualInterfaceTestHistory(
    input: ListVirtualInterfaceTestHistoryRequest,
  ): Effect.Effect<
    ListVirtualInterfaceTestHistoryResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  startBgpFailoverTest(
    input: StartBgpFailoverTestRequest,
  ): Effect.Effect<
    StartBgpFailoverTestResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  stopBgpFailoverTest(
    input: StopBgpFailoverTestRequest,
  ): Effect.Effect<
    StopBgpFailoverTestResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  updateConnection(
    input: UpdateConnectionRequest,
  ): Effect.Effect<
    Connection,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  updateDirectConnectGateway(
    input: UpdateDirectConnectGatewayRequest,
  ): Effect.Effect<
    UpdateDirectConnectGatewayResponse,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  updateDirectConnectGatewayAssociation(
    input: UpdateDirectConnectGatewayAssociationRequest,
  ): Effect.Effect<
    UpdateDirectConnectGatewayAssociationResult,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  updateLag(
    input: UpdateLagRequest,
  ): Effect.Effect<
    Lag,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
  updateVirtualInterfaceAttributes(
    input: UpdateVirtualInterfaceAttributesRequest,
  ): Effect.Effect<
    VirtualInterface,
    DirectConnectClientException | DirectConnectServerException | CommonAwsError
  >;
}

export interface AcceptDirectConnectGatewayAssociationProposalRequest {
  directConnectGatewayId: string;
  proposalId: string;
  associatedGatewayOwnerAccount: string;
  overrideAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
}
export interface AcceptDirectConnectGatewayAssociationProposalResult {
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}
export type AddressFamily = "IPv4" | "IPv6";
export type AgreementList = Array<CustomerAgreement>;
export type AgreementName = string;

export interface AllocateConnectionOnInterconnectRequest {
  bandwidth: string;
  connectionName: string;
  ownerAccount: string;
  interconnectId: string;
  vlan: number;
}
export interface AllocateHostedConnectionRequest {
  connectionId: string;
  ownerAccount: string;
  bandwidth: string;
  connectionName: string;
  vlan: number;
  tags?: Array<Tag>;
}
export interface AllocatePrivateVirtualInterfaceRequest {
  connectionId: string;
  ownerAccount: string;
  newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;
}
export interface AllocatePublicVirtualInterfaceRequest {
  connectionId: string;
  ownerAccount: string;
  newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation;
}
export interface AllocateTransitVirtualInterfaceRequest {
  connectionId: string;
  ownerAccount: string;
  newTransitVirtualInterfaceAllocation: NewTransitVirtualInterfaceAllocation;
}
export interface AllocateTransitVirtualInterfaceResult {
  virtualInterface?: VirtualInterface;
}
export type AmazonAddress = string;

export type ASN = number;

export interface AssociateConnectionWithLagRequest {
  connectionId: string;
  lagId: string;
}
export interface AssociatedCoreNetwork {
  id?: string;
  ownerAccount?: string;
  attachmentId?: string;
}
export interface AssociatedGateway {
  id?: string;
  type?: GatewayType;
  ownerAccount?: string;
  region?: string;
}
export type AssociatedGatewayId = string;

export interface AssociateHostedConnectionRequest {
  connectionId: string;
  parentConnectionId: string;
}
export interface AssociateMacSecKeyRequest {
  connectionId: string;
  secretARN?: string;
  ckn?: string;
  cak?: string;
}
export interface AssociateMacSecKeyResponse {
  connectionId?: string;
  macSecKeys?: Array<MacSecKey>;
}
export interface AssociateVirtualInterfaceRequest {
  virtualInterfaceId: string;
  connectionId: string;
}
export type AvailableMacSecPortSpeeds = Array<string>;
export type AvailablePortSpeeds = Array<string>;
export type AwsDevice = string;

export type AwsDeviceV2 = string;

export type AwsLogicalDeviceId = string;

export type Bandwidth = string;

export type BGPAuthKey = string;

export interface BGPPeer {
  bgpPeerId?: string;
  asn?: number;
  authKey?: string;
  addressFamily?: AddressFamily;
  amazonAddress?: string;
  customerAddress?: string;
  bgpPeerState?: BGPPeerState;
  bgpStatus?: BGPStatus;
  awsDeviceV2?: string;
  awsLogicalDeviceId?: string;
}
export type BGPPeerId = string;

export type BGPPeerIdList = Array<string>;
export type BGPPeerList = Array<BGPPeer>;
export type BGPPeerState =
  | "Verifying"
  | "Pending"
  | "Available"
  | "Deleting"
  | "Deleted";
export type BGPStatus = "Up" | "Down" | "Unknown";
export type BooleanFlag = boolean;

export type Cak = string;

export type CIDR = string;

export type Ckn = string;

export interface ConfirmConnectionRequest {
  connectionId: string;
}
export interface ConfirmConnectionResponse {
  connectionState?: ConnectionState;
}
export interface ConfirmCustomerAgreementRequest {
  agreementName?: string;
}
export interface ConfirmCustomerAgreementResponse {
  status?: string;
}
export interface ConfirmPrivateVirtualInterfaceRequest {
  virtualInterfaceId: string;
  virtualGatewayId?: string;
  directConnectGatewayId?: string;
}
export interface ConfirmPrivateVirtualInterfaceResponse {
  virtualInterfaceState?: VirtualInterfaceState;
}
export interface ConfirmPublicVirtualInterfaceRequest {
  virtualInterfaceId: string;
}
export interface ConfirmPublicVirtualInterfaceResponse {
  virtualInterfaceState?: VirtualInterfaceState;
}
export interface ConfirmTransitVirtualInterfaceRequest {
  virtualInterfaceId: string;
  directConnectGatewayId: string;
}
export interface ConfirmTransitVirtualInterfaceResponse {
  virtualInterfaceState?: VirtualInterfaceState;
}
export interface Connection {
  ownerAccount?: string;
  connectionId?: string;
  connectionName?: string;
  connectionState?: ConnectionState;
  region?: string;
  location?: string;
  bandwidth?: string;
  vlan?: number;
  partnerName?: string;
  loaIssueTime?: Date | string;
  lagId?: string;
  awsDevice?: string;
  jumboFrameCapable?: boolean;
  awsDeviceV2?: string;
  awsLogicalDeviceId?: string;
  hasLogicalRedundancy?: HasLogicalRedundancy;
  tags?: Array<Tag>;
  providerName?: string;
  macSecCapable?: boolean;
  portEncryptionStatus?: string;
  encryptionMode?: string;
  macSecKeys?: Array<MacSecKey>;
  partnerInterconnectMacSecCapable?: boolean;
}
export type ConnectionId = string;

export type ConnectionList = Array<Connection>;
export type ConnectionName = string;

export interface Connections {
  connections?: Array<Connection>;
}
export type ConnectionState =
  | "ordering"
  | "requested"
  | "pending"
  | "available"
  | "down"
  | "deleting"
  | "deleted"
  | "rejected"
  | "unknown";
export type CoreNetworkAttachmentId = string;

export type CoreNetworkIdentifier = string;

export type Count = number;

export interface CreateBGPPeerRequest {
  virtualInterfaceId?: string;
  newBGPPeer?: NewBGPPeer;
}
export interface CreateBGPPeerResponse {
  virtualInterface?: VirtualInterface;
}
export interface CreateConnectionRequest {
  location: string;
  bandwidth: string;
  connectionName: string;
  lagId?: string;
  tags?: Array<Tag>;
  providerName?: string;
  requestMACSec?: boolean;
}
export interface CreateDirectConnectGatewayAssociationProposalRequest {
  directConnectGatewayId: string;
  directConnectGatewayOwnerAccount: string;
  gatewayId: string;
  addAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
  removeAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
}
export interface CreateDirectConnectGatewayAssociationProposalResult {
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
}
export interface CreateDirectConnectGatewayAssociationRequest {
  directConnectGatewayId: string;
  gatewayId?: string;
  addAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
  virtualGatewayId?: string;
}
export interface CreateDirectConnectGatewayAssociationResult {
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}
export interface CreateDirectConnectGatewayRequest {
  directConnectGatewayName: string;
  tags?: Array<Tag>;
  amazonSideAsn?: number;
}
export interface CreateDirectConnectGatewayResult {
  directConnectGateway?: DirectConnectGateway;
}
export interface CreateInterconnectRequest {
  interconnectName: string;
  bandwidth: string;
  location: string;
  lagId?: string;
  tags?: Array<Tag>;
  providerName?: string;
  requestMACSec?: boolean;
}
export interface CreateLagRequest {
  numberOfConnections: number;
  location: string;
  connectionsBandwidth: string;
  lagName: string;
  connectionId?: string;
  tags?: Array<Tag>;
  childConnectionTags?: Array<Tag>;
  providerName?: string;
  requestMACSec?: boolean;
}
export interface CreatePrivateVirtualInterfaceRequest {
  connectionId: string;
  newPrivateVirtualInterface: NewPrivateVirtualInterface;
}
export interface CreatePublicVirtualInterfaceRequest {
  connectionId: string;
  newPublicVirtualInterface: NewPublicVirtualInterface;
}
export interface CreateTransitVirtualInterfaceRequest {
  connectionId: string;
  newTransitVirtualInterface: NewTransitVirtualInterface;
}
export interface CreateTransitVirtualInterfaceResult {
  virtualInterface?: VirtualInterface;
}
export type CustomerAddress = string;

export interface CustomerAgreement {
  agreementName?: string;
  status?: string;
}
export interface DeleteBGPPeerRequest {
  virtualInterfaceId?: string;
  asn?: number;
  customerAddress?: string;
  bgpPeerId?: string;
}
export interface DeleteBGPPeerResponse {
  virtualInterface?: VirtualInterface;
}
export interface DeleteConnectionRequest {
  connectionId: string;
}
export interface DeleteDirectConnectGatewayAssociationProposalRequest {
  proposalId: string;
}
export interface DeleteDirectConnectGatewayAssociationProposalResult {
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
}
export interface DeleteDirectConnectGatewayAssociationRequest {
  associationId?: string;
  directConnectGatewayId?: string;
  virtualGatewayId?: string;
}
export interface DeleteDirectConnectGatewayAssociationResult {
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}
export interface DeleteDirectConnectGatewayRequest {
  directConnectGatewayId: string;
}
export interface DeleteDirectConnectGatewayResult {
  directConnectGateway?: DirectConnectGateway;
}
export interface DeleteInterconnectRequest {
  interconnectId: string;
}
export interface DeleteInterconnectResponse {
  interconnectState?: InterconnectState;
}
export interface DeleteLagRequest {
  lagId: string;
}
export interface DeleteVirtualInterfaceRequest {
  virtualInterfaceId: string;
}
export interface DeleteVirtualInterfaceResponse {
  virtualInterfaceState?: VirtualInterfaceState;
}
export interface DescribeConnectionLoaRequest {
  connectionId: string;
  providerName?: string;
  loaContentType?: LoaContentType;
}
export interface DescribeConnectionLoaResponse {
  loa?: Loa;
}
export interface DescribeConnectionsOnInterconnectRequest {
  interconnectId: string;
}
export interface DescribeConnectionsRequest {
  connectionId?: string;
}
export interface DescribeCustomerMetadataResponse {
  agreements?: Array<CustomerAgreement>;
  nniPartnerType?: NniPartnerType;
}
export interface DescribeDirectConnectGatewayAssociationProposalsRequest {
  directConnectGatewayId?: string;
  proposalId?: string;
  associatedGatewayId?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeDirectConnectGatewayAssociationProposalsResult {
  directConnectGatewayAssociationProposals?: Array<DirectConnectGatewayAssociationProposal>;
  nextToken?: string;
}
export interface DescribeDirectConnectGatewayAssociationsRequest {
  associationId?: string;
  associatedGatewayId?: string;
  directConnectGatewayId?: string;
  maxResults?: number;
  nextToken?: string;
  virtualGatewayId?: string;
}
export interface DescribeDirectConnectGatewayAssociationsResult {
  directConnectGatewayAssociations?: Array<DirectConnectGatewayAssociation>;
  nextToken?: string;
}
export interface DescribeDirectConnectGatewayAttachmentsRequest {
  directConnectGatewayId?: string;
  virtualInterfaceId?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeDirectConnectGatewayAttachmentsResult {
  directConnectGatewayAttachments?: Array<DirectConnectGatewayAttachment>;
  nextToken?: string;
}
export interface DescribeDirectConnectGatewaysRequest {
  directConnectGatewayId?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeDirectConnectGatewaysResult {
  directConnectGateways?: Array<DirectConnectGateway>;
  nextToken?: string;
}
export interface DescribeHostedConnectionsRequest {
  connectionId: string;
}
export interface DescribeInterconnectLoaRequest {
  interconnectId: string;
  providerName?: string;
  loaContentType?: LoaContentType;
}
export interface DescribeInterconnectLoaResponse {
  loa?: Loa;
}
export interface DescribeInterconnectsRequest {
  interconnectId?: string;
}
export interface DescribeLagsRequest {
  lagId?: string;
}
export interface DescribeLoaRequest {
  connectionId: string;
  providerName?: string;
  loaContentType?: LoaContentType;
}
export interface DescribeRouterConfigurationRequest {
  virtualInterfaceId: string;
  routerTypeIdentifier?: string;
}
export interface DescribeRouterConfigurationResponse {
  customerRouterConfig?: string;
  router?: RouterType;
  virtualInterfaceId?: string;
  virtualInterfaceName?: string;
}
export interface DescribeTagsRequest {
  resourceArns: Array<string>;
}
export interface DescribeTagsResponse {
  resourceTags?: Array<ResourceTag>;
}
export interface DescribeVirtualInterfacesRequest {
  connectionId?: string;
  virtualInterfaceId?: string;
}
export declare class DirectConnectClientException extends EffectData.TaggedError(
  "DirectConnectClientException",
)<{
  readonly message?: string;
}> {}
export interface DirectConnectGateway {
  directConnectGatewayId?: string;
  directConnectGatewayName?: string;
  amazonSideAsn?: number;
  ownerAccount?: string;
  directConnectGatewayState?: DirectConnectGatewayState;
  stateChangeError?: string;
  tags?: Array<Tag>;
}
export interface DirectConnectGatewayAssociation {
  directConnectGatewayId?: string;
  directConnectGatewayOwnerAccount?: string;
  associationState?: DirectConnectGatewayAssociationState;
  stateChangeError?: string;
  associatedGateway?: AssociatedGateway;
  associationId?: string;
  allowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
  associatedCoreNetwork?: AssociatedCoreNetwork;
  virtualGatewayId?: string;
  virtualGatewayRegion?: string;
  virtualGatewayOwnerAccount?: string;
}
export type DirectConnectGatewayAssociationId = string;

export type DirectConnectGatewayAssociationList =
  Array<DirectConnectGatewayAssociation>;
export interface DirectConnectGatewayAssociationProposal {
  proposalId?: string;
  directConnectGatewayId?: string;
  directConnectGatewayOwnerAccount?: string;
  proposalState?: DirectConnectGatewayAssociationProposalState;
  associatedGateway?: AssociatedGateway;
  existingAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
  requestedAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
}
export type DirectConnectGatewayAssociationProposalId = string;

export type DirectConnectGatewayAssociationProposalList =
  Array<DirectConnectGatewayAssociationProposal>;
export type DirectConnectGatewayAssociationProposalState =
  | "requested"
  | "accepted"
  | "deleted";
export type DirectConnectGatewayAssociationState =
  | "associating"
  | "associated"
  | "disassociating"
  | "disassociated"
  | "updating";
export interface DirectConnectGatewayAttachment {
  directConnectGatewayId?: string;
  virtualInterfaceId?: string;
  virtualInterfaceRegion?: string;
  virtualInterfaceOwnerAccount?: string;
  attachmentState?: DirectConnectGatewayAttachmentState;
  attachmentType?: DirectConnectGatewayAttachmentType;
  stateChangeError?: string;
}
export type DirectConnectGatewayAttachmentList =
  Array<DirectConnectGatewayAttachment>;
export type DirectConnectGatewayAttachmentState =
  | "attaching"
  | "attached"
  | "detaching"
  | "detached";
export type DirectConnectGatewayAttachmentType =
  | "TransitVirtualInterface"
  | "PrivateVirtualInterface";
export type DirectConnectGatewayId = string;

export type DirectConnectGatewayList = Array<DirectConnectGateway>;
export type DirectConnectGatewayName = string;

export type DirectConnectGatewayState =
  | "pending"
  | "available"
  | "deleting"
  | "deleted";
export declare class DirectConnectServerException extends EffectData.TaggedError(
  "DirectConnectServerException",
)<{
  readonly message?: string;
}> {}
export interface DisassociateConnectionFromLagRequest {
  connectionId: string;
  lagId: string;
}
export interface DisassociateMacSecKeyRequest {
  connectionId: string;
  secretARN: string;
}
export interface DisassociateMacSecKeyResponse {
  connectionId?: string;
  macSecKeys?: Array<MacSecKey>;
}
export declare class DuplicateTagKeysException extends EffectData.TaggedError(
  "DuplicateTagKeysException",
)<{
  readonly message?: string;
}> {}
export type EnableSiteLink = boolean;

export type EncryptionMode = string;

export type EndTime = Date | string;

export type ErrorMessage = string;

export type FailureTestHistoryStatus = string;

export type GatewayIdentifier = string;

export type GatewayIdToAssociate = string;

export type GatewayType = "VirtualPrivateGateway" | "TransitGateway";
export type HasLogicalRedundancy = "Unknown" | "Yes" | "No";
export interface Interconnect {
  interconnectId?: string;
  interconnectName?: string;
  interconnectState?: InterconnectState;
  region?: string;
  location?: string;
  bandwidth?: string;
  loaIssueTime?: Date | string;
  lagId?: string;
  awsDevice?: string;
  jumboFrameCapable?: boolean;
  awsDeviceV2?: string;
  awsLogicalDeviceId?: string;
  hasLogicalRedundancy?: HasLogicalRedundancy;
  tags?: Array<Tag>;
  providerName?: string;
  macSecCapable?: boolean;
  portEncryptionStatus?: string;
  encryptionMode?: string;
  macSecKeys?: Array<MacSecKey>;
}
export type InterconnectId = string;

export type InterconnectList = Array<Interconnect>;
export type InterconnectName = string;

export interface Interconnects {
  interconnects?: Array<Interconnect>;
}
export type InterconnectState =
  | "requested"
  | "pending"
  | "available"
  | "down"
  | "deleting"
  | "deleted"
  | "unknown";
export type JumboFrameCapable = boolean;

export interface Lag {
  connectionsBandwidth?: string;
  numberOfConnections?: number;
  lagId?: string;
  ownerAccount?: string;
  lagName?: string;
  lagState?: LagState;
  location?: string;
  region?: string;
  minimumLinks?: number;
  awsDevice?: string;
  awsDeviceV2?: string;
  awsLogicalDeviceId?: string;
  connections?: Array<Connection>;
  allowsHostedConnections?: boolean;
  jumboFrameCapable?: boolean;
  hasLogicalRedundancy?: HasLogicalRedundancy;
  tags?: Array<Tag>;
  providerName?: string;
  macSecCapable?: boolean;
  encryptionMode?: string;
  macSecKeys?: Array<MacSecKey>;
}
export type LagId = string;

export type LagList = Array<Lag>;
export type LagName = string;

export interface Lags {
  lags?: Array<Lag>;
}
export type LagState =
  | "requested"
  | "pending"
  | "available"
  | "down"
  | "deleting"
  | "deleted"
  | "unknown";
export interface ListVirtualInterfaceTestHistoryRequest {
  testId?: string;
  virtualInterfaceId?: string;
  bgpPeers?: Array<string>;
  status?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListVirtualInterfaceTestHistoryResponse {
  virtualInterfaceTestHistory?: Array<VirtualInterfaceTestHistory>;
  nextToken?: string;
}
export interface Loa {
  loaContent?: Uint8Array | string;
  loaContentType?: LoaContentType;
}
export type LoaContent = Uint8Array | string;

export type LoaContentType = "PDF";
export type LoaIssueTime = Date | string;

export interface Location {
  locationCode?: string;
  locationName?: string;
  region?: string;
  availablePortSpeeds?: Array<string>;
  availableProviders?: Array<string>;
  availableMacSecPortSpeeds?: Array<string>;
}
export type LocationCode = string;

export type LocationList = Array<Location>;
export type LocationName = string;

export interface Locations {
  locations?: Array<Location>;
}
export type LongAsn = number;

export type MacSecCapable = boolean;

export interface MacSecKey {
  secretARN?: string;
  ckn?: string;
  state?: string;
  startOn?: string;
}
export type MacSecKeyList = Array<MacSecKey>;
export type MaxResultSetSize = number;

export type MTU = number;

export interface NewBGPPeer {
  asn?: number;
  authKey?: string;
  addressFamily?: AddressFamily;
  amazonAddress?: string;
  customerAddress?: string;
}
export interface NewPrivateVirtualInterface {
  virtualInterfaceName: string;
  vlan: number;
  asn: number;
  mtu?: number;
  authKey?: string;
  amazonAddress?: string;
  customerAddress?: string;
  addressFamily?: AddressFamily;
  virtualGatewayId?: string;
  directConnectGatewayId?: string;
  tags?: Array<Tag>;
  enableSiteLink?: boolean;
}
export interface NewPrivateVirtualInterfaceAllocation {
  virtualInterfaceName: string;
  vlan: number;
  asn: number;
  mtu?: number;
  authKey?: string;
  amazonAddress?: string;
  addressFamily?: AddressFamily;
  customerAddress?: string;
  tags?: Array<Tag>;
}
export interface NewPublicVirtualInterface {
  virtualInterfaceName: string;
  vlan: number;
  asn: number;
  authKey?: string;
  amazonAddress?: string;
  customerAddress?: string;
  addressFamily?: AddressFamily;
  routeFilterPrefixes?: Array<RouteFilterPrefix>;
  tags?: Array<Tag>;
}
export interface NewPublicVirtualInterfaceAllocation {
  virtualInterfaceName: string;
  vlan: number;
  asn: number;
  authKey?: string;
  amazonAddress?: string;
  customerAddress?: string;
  addressFamily?: AddressFamily;
  routeFilterPrefixes?: Array<RouteFilterPrefix>;
  tags?: Array<Tag>;
}
export interface NewTransitVirtualInterface {
  virtualInterfaceName?: string;
  vlan?: number;
  asn?: number;
  mtu?: number;
  authKey?: string;
  amazonAddress?: string;
  customerAddress?: string;
  addressFamily?: AddressFamily;
  directConnectGatewayId?: string;
  tags?: Array<Tag>;
  enableSiteLink?: boolean;
}
export interface NewTransitVirtualInterfaceAllocation {
  virtualInterfaceName?: string;
  vlan?: number;
  asn?: number;
  mtu?: number;
  authKey?: string;
  amazonAddress?: string;
  customerAddress?: string;
  addressFamily?: AddressFamily;
  tags?: Array<Tag>;
}
export type NniPartnerType = "V1" | "V2" | "NonPartner";
export type OwnerAccount = string;

export type PaginationToken = string;

export type PartnerInterconnectMacSecCapable = boolean;

export type PartnerName = string;

export type Platform = string;

export type PortEncryptionStatus = string;

export type PortSpeed = string;

export type ProviderList = Array<string>;
export type ProviderName = string;

export type Region = string;

export type RequestMACSec = boolean;

export type ResourceArn = string;

export type ResourceArnList = Array<string>;
export interface ResourceTag {
  resourceArn?: string;
  tags?: Array<Tag>;
}
export type ResourceTagList = Array<ResourceTag>;
export interface RouteFilterPrefix {
  cidr?: string;
}
export type RouteFilterPrefixList = Array<RouteFilterPrefix>;
export type RouterConfig = string;

export interface RouterType {
  vendor?: string;
  platform?: string;
  software?: string;
  xsltTemplateName?: string;
  xsltTemplateNameForMacSec?: string;
  routerTypeIdentifier?: string;
}
export type RouterTypeIdentifier = string;

export type SecretARN = string;

export type SiteLinkEnabled = boolean;

export type Software = string;

export interface StartBgpFailoverTestRequest {
  virtualInterfaceId: string;
  bgpPeers?: Array<string>;
  testDurationInMinutes?: number;
}
export interface StartBgpFailoverTestResponse {
  virtualInterfaceTest?: VirtualInterfaceTestHistory;
}
export type StartOnDate = string;

export type StartTime = Date | string;

export type State = string;

export type StateChangeError = string;

export type Status = string;

export interface StopBgpFailoverTestRequest {
  virtualInterfaceId: string;
}
export interface StopBgpFailoverTestResponse {
  virtualInterfaceTest?: VirtualInterfaceTestHistory;
}
export interface Tag {
  key: string;
  value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TestDuration = number;

export type TestId = string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateConnectionRequest {
  connectionId: string;
  connectionName?: string;
  encryptionMode?: string;
}
export interface UpdateDirectConnectGatewayAssociationRequest {
  associationId?: string;
  addAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
  removeAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
}
export interface UpdateDirectConnectGatewayAssociationResult {
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}
export interface UpdateDirectConnectGatewayRequest {
  directConnectGatewayId: string;
  newDirectConnectGatewayName: string;
}
export interface UpdateDirectConnectGatewayResponse {
  directConnectGateway?: DirectConnectGateway;
}
export interface UpdateLagRequest {
  lagId: string;
  lagName?: string;
  minimumLinks?: number;
  encryptionMode?: string;
}
export interface UpdateVirtualInterfaceAttributesRequest {
  virtualInterfaceId: string;
  mtu?: number;
  enableSiteLink?: boolean;
  virtualInterfaceName?: string;
}
export type Vendor = string;

export interface VirtualGateway {
  virtualGatewayId?: string;
  virtualGatewayState?: string;
}
export type VirtualGatewayId = string;

export type VirtualGatewayList = Array<VirtualGateway>;
export type VirtualGatewayRegion = string;

export interface VirtualGateways {
  virtualGateways?: Array<VirtualGateway>;
}
export type VirtualGatewayState = string;

export interface VirtualInterface {
  ownerAccount?: string;
  virtualInterfaceId?: string;
  location?: string;
  connectionId?: string;
  virtualInterfaceType?: string;
  virtualInterfaceName?: string;
  vlan?: number;
  asn?: number;
  amazonSideAsn?: number;
  authKey?: string;
  amazonAddress?: string;
  customerAddress?: string;
  addressFamily?: AddressFamily;
  virtualInterfaceState?: VirtualInterfaceState;
  customerRouterConfig?: string;
  mtu?: number;
  jumboFrameCapable?: boolean;
  virtualGatewayId?: string;
  directConnectGatewayId?: string;
  routeFilterPrefixes?: Array<RouteFilterPrefix>;
  bgpPeers?: Array<BGPPeer>;
  region?: string;
  awsDeviceV2?: string;
  awsLogicalDeviceId?: string;
  tags?: Array<Tag>;
  siteLinkEnabled?: boolean;
}
export type VirtualInterfaceId = string;

export type VirtualInterfaceList = Array<VirtualInterface>;
export type VirtualInterfaceName = string;

export type VirtualInterfaceRegion = string;

export interface VirtualInterfaces {
  virtualInterfaces?: Array<VirtualInterface>;
}
export type VirtualInterfaceState =
  | "confirming"
  | "verifying"
  | "pending"
  | "available"
  | "down"
  | "testing"
  | "deleting"
  | "deleted"
  | "rejected"
  | "unknown";
export interface VirtualInterfaceTestHistory {
  testId?: string;
  virtualInterfaceId?: string;
  bgpPeers?: Array<string>;
  status?: string;
  ownerAccount?: string;
  testDurationInMinutes?: number;
  startTime?: Date | string;
  endTime?: Date | string;
}
export type VirtualInterfaceTestHistoryList =
  Array<VirtualInterfaceTestHistory>;
export type VirtualInterfaceType = string;

export type VLAN = number;

export type XsltTemplateName = string;

export type XsltTemplateNameForMacSec = string;

export declare namespace AcceptDirectConnectGatewayAssociationProposal {
  export type Input = AcceptDirectConnectGatewayAssociationProposalRequest;
  export type Output = AcceptDirectConnectGatewayAssociationProposalResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace AllocateConnectionOnInterconnect {
  export type Input = AllocateConnectionOnInterconnectRequest;
  export type Output = Connection;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace AllocateHostedConnection {
  export type Input = AllocateHostedConnectionRequest;
  export type Output = Connection;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace AllocatePrivateVirtualInterface {
  export type Input = AllocatePrivateVirtualInterfaceRequest;
  export type Output = VirtualInterface;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace AllocatePublicVirtualInterface {
  export type Input = AllocatePublicVirtualInterfaceRequest;
  export type Output = VirtualInterface;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace AllocateTransitVirtualInterface {
  export type Input = AllocateTransitVirtualInterfaceRequest;
  export type Output = AllocateTransitVirtualInterfaceResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace AssociateConnectionWithLag {
  export type Input = AssociateConnectionWithLagRequest;
  export type Output = Connection;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace AssociateHostedConnection {
  export type Input = AssociateHostedConnectionRequest;
  export type Output = Connection;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace AssociateMacSecKey {
  export type Input = AssociateMacSecKeyRequest;
  export type Output = AssociateMacSecKeyResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace AssociateVirtualInterface {
  export type Input = AssociateVirtualInterfaceRequest;
  export type Output = VirtualInterface;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace ConfirmConnection {
  export type Input = ConfirmConnectionRequest;
  export type Output = ConfirmConnectionResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace ConfirmCustomerAgreement {
  export type Input = ConfirmCustomerAgreementRequest;
  export type Output = ConfirmCustomerAgreementResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace ConfirmPrivateVirtualInterface {
  export type Input = ConfirmPrivateVirtualInterfaceRequest;
  export type Output = ConfirmPrivateVirtualInterfaceResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace ConfirmPublicVirtualInterface {
  export type Input = ConfirmPublicVirtualInterfaceRequest;
  export type Output = ConfirmPublicVirtualInterfaceResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace ConfirmTransitVirtualInterface {
  export type Input = ConfirmTransitVirtualInterfaceRequest;
  export type Output = ConfirmTransitVirtualInterfaceResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace CreateBGPPeer {
  export type Input = CreateBGPPeerRequest;
  export type Output = CreateBGPPeerResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace CreateConnection {
  export type Input = CreateConnectionRequest;
  export type Output = Connection;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateDirectConnectGateway {
  export type Input = CreateDirectConnectGatewayRequest;
  export type Output = CreateDirectConnectGatewayResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace CreateDirectConnectGatewayAssociation {
  export type Input = CreateDirectConnectGatewayAssociationRequest;
  export type Output = CreateDirectConnectGatewayAssociationResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace CreateDirectConnectGatewayAssociationProposal {
  export type Input = CreateDirectConnectGatewayAssociationProposalRequest;
  export type Output = CreateDirectConnectGatewayAssociationProposalResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace CreateInterconnect {
  export type Input = CreateInterconnectRequest;
  export type Output = Interconnect;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateLag {
  export type Input = CreateLagRequest;
  export type Output = Lag;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreatePrivateVirtualInterface {
  export type Input = CreatePrivateVirtualInterfaceRequest;
  export type Output = VirtualInterface;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreatePublicVirtualInterface {
  export type Input = CreatePublicVirtualInterfaceRequest;
  export type Output = VirtualInterface;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateTransitVirtualInterface {
  export type Input = CreateTransitVirtualInterfaceRequest;
  export type Output = CreateTransitVirtualInterfaceResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace DeleteBGPPeer {
  export type Input = DeleteBGPPeerRequest;
  export type Output = DeleteBGPPeerResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DeleteConnection {
  export type Input = DeleteConnectionRequest;
  export type Output = Connection;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DeleteDirectConnectGateway {
  export type Input = DeleteDirectConnectGatewayRequest;
  export type Output = DeleteDirectConnectGatewayResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DeleteDirectConnectGatewayAssociation {
  export type Input = DeleteDirectConnectGatewayAssociationRequest;
  export type Output = DeleteDirectConnectGatewayAssociationResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DeleteDirectConnectGatewayAssociationProposal {
  export type Input = DeleteDirectConnectGatewayAssociationProposalRequest;
  export type Output = DeleteDirectConnectGatewayAssociationProposalResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DeleteInterconnect {
  export type Input = DeleteInterconnectRequest;
  export type Output = DeleteInterconnectResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DeleteLag {
  export type Input = DeleteLagRequest;
  export type Output = Lag;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DeleteVirtualInterface {
  export type Input = DeleteVirtualInterfaceRequest;
  export type Output = DeleteVirtualInterfaceResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeConnectionLoa {
  export type Input = DescribeConnectionLoaRequest;
  export type Output = DescribeConnectionLoaResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeConnections {
  export type Input = DescribeConnectionsRequest;
  export type Output = Connections;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeConnectionsOnInterconnect {
  export type Input = DescribeConnectionsOnInterconnectRequest;
  export type Output = Connections;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeCustomerMetadata {
  export type Input = {};
  export type Output = DescribeCustomerMetadataResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeDirectConnectGatewayAssociationProposals {
  export type Input = DescribeDirectConnectGatewayAssociationProposalsRequest;
  export type Output = DescribeDirectConnectGatewayAssociationProposalsResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeDirectConnectGatewayAssociations {
  export type Input = DescribeDirectConnectGatewayAssociationsRequest;
  export type Output = DescribeDirectConnectGatewayAssociationsResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeDirectConnectGatewayAttachments {
  export type Input = DescribeDirectConnectGatewayAttachmentsRequest;
  export type Output = DescribeDirectConnectGatewayAttachmentsResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeDirectConnectGateways {
  export type Input = DescribeDirectConnectGatewaysRequest;
  export type Output = DescribeDirectConnectGatewaysResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeHostedConnections {
  export type Input = DescribeHostedConnectionsRequest;
  export type Output = Connections;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeInterconnectLoa {
  export type Input = DescribeInterconnectLoaRequest;
  export type Output = DescribeInterconnectLoaResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeInterconnects {
  export type Input = DescribeInterconnectsRequest;
  export type Output = Interconnects;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeLags {
  export type Input = DescribeLagsRequest;
  export type Output = Lags;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeLoa {
  export type Input = DescribeLoaRequest;
  export type Output = Loa;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeLocations {
  export type Input = {};
  export type Output = Locations;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeRouterConfiguration {
  export type Input = DescribeRouterConfigurationRequest;
  export type Output = DescribeRouterConfigurationResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeTags {
  export type Input = DescribeTagsRequest;
  export type Output = DescribeTagsResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeVirtualGateways {
  export type Input = {};
  export type Output = VirtualGateways;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DescribeVirtualInterfaces {
  export type Input = DescribeVirtualInterfacesRequest;
  export type Output = VirtualInterfaces;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DisassociateConnectionFromLag {
  export type Input = DisassociateConnectionFromLagRequest;
  export type Output = Connection;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace DisassociateMacSecKey {
  export type Input = DisassociateMacSecKeyRequest;
  export type Output = DisassociateMacSecKeyResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace ListVirtualInterfaceTestHistory {
  export type Input = ListVirtualInterfaceTestHistoryRequest;
  export type Output = ListVirtualInterfaceTestHistoryResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace StartBgpFailoverTest {
  export type Input = StartBgpFailoverTestRequest;
  export type Output = StartBgpFailoverTestResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace StopBgpFailoverTest {
  export type Input = StopBgpFailoverTestRequest;
  export type Output = StopBgpFailoverTestResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace UpdateConnection {
  export type Input = UpdateConnectionRequest;
  export type Output = Connection;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace UpdateDirectConnectGateway {
  export type Input = UpdateDirectConnectGatewayRequest;
  export type Output = UpdateDirectConnectGatewayResponse;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace UpdateDirectConnectGatewayAssociation {
  export type Input = UpdateDirectConnectGatewayAssociationRequest;
  export type Output = UpdateDirectConnectGatewayAssociationResult;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace UpdateLag {
  export type Input = UpdateLagRequest;
  export type Output = Lag;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

export declare namespace UpdateVirtualInterfaceAttributes {
  export type Input = UpdateVirtualInterfaceAttributesRequest;
  export type Output = VirtualInterface;
  export type Error =
    | DirectConnectClientException
    | DirectConnectServerException
    | CommonAwsError;
}

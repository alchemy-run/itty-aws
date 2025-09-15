import type { Effect, Data as EffectData } from "effect";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | ThrottlingException
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException;
import { AWSServiceClient } from "../../client.ts";

export declare class GlobalAccelerator extends AWSServiceClient {
  addCustomRoutingEndpoints(
    input: AddCustomRoutingEndpointsRequest,
  ): Effect.Effect<
    AddCustomRoutingEndpointsResponse,
    | AccessDeniedException
    | ConflictException
    | EndpointAlreadyExistsException
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | CommonAwsError
  >;
  addEndpoints(
    input: AddEndpointsRequest,
  ): Effect.Effect<
    AddEndpointsResponse,
    | AccessDeniedException
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | TransactionInProgressException
    | CommonAwsError
  >;
  advertiseByoipCidr(
    input: AdvertiseByoipCidrRequest,
  ): Effect.Effect<
    AdvertiseByoipCidrResponse,
    | AccessDeniedException
    | ByoipCidrNotFoundException
    | IncorrectCidrStateException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  allowCustomRoutingTraffic(
    input: AllowCustomRoutingTrafficRequest,
  ): Effect.Effect<
    {},
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  createAccelerator(
    input: CreateAcceleratorRequest,
  ): Effect.Effect<
    CreateAcceleratorResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | TransactionInProgressException
    | CommonAwsError
  >;
  createCrossAccountAttachment(
    input: CreateCrossAccountAttachmentRequest,
  ): Effect.Effect<
    CreateCrossAccountAttachmentResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | TransactionInProgressException
    | CommonAwsError
  >;
  createCustomRoutingAccelerator(
    input: CreateCustomRoutingAcceleratorRequest,
  ): Effect.Effect<
    CreateCustomRoutingAcceleratorResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | TransactionInProgressException
    | CommonAwsError
  >;
  createCustomRoutingEndpointGroup(
    input: CreateCustomRoutingEndpointGroupRequest,
  ): Effect.Effect<
    CreateCustomRoutingEndpointGroupResponse,
    | AcceleratorNotFoundException
    | AccessDeniedException
    | EndpointGroupAlreadyExistsException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidPortRangeException
    | LimitExceededException
    | ListenerNotFoundException
    | CommonAwsError
  >;
  createCustomRoutingListener(
    input: CreateCustomRoutingListenerRequest,
  ): Effect.Effect<
    CreateCustomRoutingListenerResponse,
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidPortRangeException
    | LimitExceededException
    | CommonAwsError
  >;
  createEndpointGroup(
    input: CreateEndpointGroupRequest,
  ): Effect.Effect<
    CreateEndpointGroupResponse,
    | AcceleratorNotFoundException
    | AccessDeniedException
    | EndpointGroupAlreadyExistsException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | ListenerNotFoundException
    | CommonAwsError
  >;
  createListener(
    input: CreateListenerRequest,
  ): Effect.Effect<
    CreateListenerResponse,
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidPortRangeException
    | LimitExceededException
    | CommonAwsError
  >;
  deleteAccelerator(
    input: DeleteAcceleratorRequest,
  ): Effect.Effect<
    {},
    | AcceleratorNotDisabledException
    | AcceleratorNotFoundException
    | AssociatedListenerFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError
  >;
  deleteCrossAccountAttachment(
    input: DeleteCrossAccountAttachmentRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AttachmentNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError
  >;
  deleteCustomRoutingAccelerator(
    input: DeleteCustomRoutingAcceleratorRequest,
  ): Effect.Effect<
    {},
    | AcceleratorNotDisabledException
    | AcceleratorNotFoundException
    | AssociatedListenerFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError
  >;
  deleteCustomRoutingEndpointGroup(
    input: DeleteCustomRoutingEndpointGroupRequest,
  ): Effect.Effect<
    {},
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  deleteCustomRoutingListener(
    input: DeleteCustomRoutingListenerRequest,
  ): Effect.Effect<
    {},
    | AssociatedEndpointGroupFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | ListenerNotFoundException
    | CommonAwsError
  >;
  deleteEndpointGroup(
    input: DeleteEndpointGroupRequest,
  ): Effect.Effect<
    {},
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  deleteListener(
    input: DeleteListenerRequest,
  ): Effect.Effect<
    {},
    | AssociatedEndpointGroupFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | ListenerNotFoundException
    | CommonAwsError
  >;
  denyCustomRoutingTraffic(
    input: DenyCustomRoutingTrafficRequest,
  ): Effect.Effect<
    {},
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  deprovisionByoipCidr(
    input: DeprovisionByoipCidrRequest,
  ): Effect.Effect<
    DeprovisionByoipCidrResponse,
    | AccessDeniedException
    | ByoipCidrNotFoundException
    | IncorrectCidrStateException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  describeAccelerator(
    input: DescribeAcceleratorRequest,
  ): Effect.Effect<
    DescribeAcceleratorResponse,
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  describeAcceleratorAttributes(
    input: DescribeAcceleratorAttributesRequest,
  ): Effect.Effect<
    DescribeAcceleratorAttributesResponse,
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  describeCrossAccountAttachment(
    input: DescribeCrossAccountAttachmentRequest,
  ): Effect.Effect<
    DescribeCrossAccountAttachmentResponse,
    | AccessDeniedException
    | AttachmentNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  describeCustomRoutingAccelerator(
    input: DescribeCustomRoutingAcceleratorRequest,
  ): Effect.Effect<
    DescribeCustomRoutingAcceleratorResponse,
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  describeCustomRoutingAcceleratorAttributes(
    input: DescribeCustomRoutingAcceleratorAttributesRequest,
  ): Effect.Effect<
    DescribeCustomRoutingAcceleratorAttributesResponse,
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  describeCustomRoutingEndpointGroup(
    input: DescribeCustomRoutingEndpointGroupRequest,
  ): Effect.Effect<
    DescribeCustomRoutingEndpointGroupResponse,
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  describeCustomRoutingListener(
    input: DescribeCustomRoutingListenerRequest,
  ): Effect.Effect<
    DescribeCustomRoutingListenerResponse,
    | InternalServiceErrorException
    | InvalidArgumentException
    | ListenerNotFoundException
    | CommonAwsError
  >;
  describeEndpointGroup(
    input: DescribeEndpointGroupRequest,
  ): Effect.Effect<
    DescribeEndpointGroupResponse,
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  describeListener(
    input: DescribeListenerRequest,
  ): Effect.Effect<
    DescribeListenerResponse,
    | InternalServiceErrorException
    | InvalidArgumentException
    | ListenerNotFoundException
    | CommonAwsError
  >;
  listAccelerators(
    input: ListAcceleratorsRequest,
  ): Effect.Effect<
    ListAcceleratorsResponse,
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError
  >;
  listByoipCidrs(
    input: ListByoipCidrsRequest,
  ): Effect.Effect<
    ListByoipCidrsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError
  >;
  listCrossAccountAttachments(
    input: ListCrossAccountAttachmentsRequest,
  ): Effect.Effect<
    ListCrossAccountAttachmentsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError
  >;
  listCrossAccountResourceAccounts(
    input: ListCrossAccountResourceAccountsRequest,
  ): Effect.Effect<
    ListCrossAccountResourceAccountsResponse,
    AccessDeniedException | InternalServiceErrorException | CommonAwsError
  >;
  listCrossAccountResources(
    input: ListCrossAccountResourcesRequest,
  ): Effect.Effect<
    ListCrossAccountResourcesResponse,
    | AcceleratorNotFoundException
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError
  >;
  listCustomRoutingAccelerators(
    input: ListCustomRoutingAcceleratorsRequest,
  ): Effect.Effect<
    ListCustomRoutingAcceleratorsResponse,
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError
  >;
  listCustomRoutingEndpointGroups(
    input: ListCustomRoutingEndpointGroupsRequest,
  ): Effect.Effect<
    ListCustomRoutingEndpointGroupsResponse,
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | ListenerNotFoundException
    | CommonAwsError
  >;
  listCustomRoutingListeners(
    input: ListCustomRoutingListenersRequest,
  ): Effect.Effect<
    ListCustomRoutingListenersResponse,
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError
  >;
  listCustomRoutingPortMappings(
    input: ListCustomRoutingPortMappingsRequest,
  ): Effect.Effect<
    ListCustomRoutingPortMappingsResponse,
    | AcceleratorNotFoundException
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError
  >;
  listCustomRoutingPortMappingsByDestination(
    input: ListCustomRoutingPortMappingsByDestinationRequest,
  ): Effect.Effect<
    ListCustomRoutingPortMappingsByDestinationResponse,
    | EndpointNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError
  >;
  listEndpointGroups(
    input: ListEndpointGroupsRequest,
  ): Effect.Effect<
    ListEndpointGroupsResponse,
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | ListenerNotFoundException
    | CommonAwsError
  >;
  listListeners(
    input: ListListenersRequest,
  ): Effect.Effect<
    ListListenersResponse,
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AcceleratorNotFoundException
    | AttachmentNotFoundException
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | ListenerNotFoundException
    | CommonAwsError
  >;
  provisionByoipCidr(
    input: ProvisionByoipCidrRequest,
  ): Effect.Effect<
    ProvisionByoipCidrResponse,
    | AccessDeniedException
    | IncorrectCidrStateException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | CommonAwsError
  >;
  removeCustomRoutingEndpoints(
    input: RemoveCustomRoutingEndpointsRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | EndpointGroupNotFoundException
    | EndpointNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  removeEndpoints(
    input: RemoveEndpointsRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
  updateAccelerator(
    input: UpdateAcceleratorRequest,
  ): Effect.Effect<
    UpdateAcceleratorResponse,
    | AcceleratorNotFoundException
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError
  >;
  updateAcceleratorAttributes(
    input: UpdateAcceleratorAttributesRequest,
  ): Effect.Effect<
    UpdateAcceleratorAttributesResponse,
    | AcceleratorNotFoundException
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError
  >;
  updateCrossAccountAttachment(
    input: UpdateCrossAccountAttachmentRequest,
  ): Effect.Effect<
    UpdateCrossAccountAttachmentResponse,
    | AccessDeniedException
    | AttachmentNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | TransactionInProgressException
    | CommonAwsError
  >;
  updateCustomRoutingAccelerator(
    input: UpdateCustomRoutingAcceleratorRequest,
  ): Effect.Effect<
    UpdateCustomRoutingAcceleratorResponse,
    | AcceleratorNotFoundException
    | ConflictException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError
  >;
  updateCustomRoutingAcceleratorAttributes(
    input: UpdateCustomRoutingAcceleratorAttributesRequest,
  ): Effect.Effect<
    UpdateCustomRoutingAcceleratorAttributesResponse,
    | AcceleratorNotFoundException
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError
  >;
  updateCustomRoutingListener(
    input: UpdateCustomRoutingListenerRequest,
  ): Effect.Effect<
    UpdateCustomRoutingListenerResponse,
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidPortRangeException
    | LimitExceededException
    | ListenerNotFoundException
    | CommonAwsError
  >;
  updateEndpointGroup(
    input: UpdateEndpointGroupRequest,
  ): Effect.Effect<
    UpdateEndpointGroupResponse,
    | AccessDeniedException
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | CommonAwsError
  >;
  updateListener(
    input: UpdateListenerRequest,
  ): Effect.Effect<
    UpdateListenerResponse,
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidPortRangeException
    | LimitExceededException
    | ListenerNotFoundException
    | CommonAwsError
  >;
  withdrawByoipCidr(
    input: WithdrawByoipCidrRequest,
  ): Effect.Effect<
    WithdrawByoipCidrResponse,
    | AccessDeniedException
    | ByoipCidrNotFoundException
    | IncorrectCidrStateException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError
  >;
}

export interface Accelerator {
  AcceleratorArn?: string;
  Name?: string;
  IpAddressType?: IpAddressType;
  Enabled?: boolean;
  IpSets?: Array<IpSet>;
  DnsName?: string;
  Status?: AcceleratorStatus;
  CreatedTime?: Date | string;
  LastModifiedTime?: Date | string;
  DualStackDnsName?: string;
  Events?: Array<AcceleratorEvent>;
}
export interface AcceleratorAttributes {
  FlowLogsEnabled?: boolean;
  FlowLogsS3Bucket?: string;
  FlowLogsS3Prefix?: string;
}
export interface AcceleratorEvent {
  Message?: string;
  Timestamp?: Date | string;
}
export type AcceleratorEvents = Array<AcceleratorEvent>;
export declare class AcceleratorNotDisabledException extends EffectData.TaggedError(
  "AcceleratorNotDisabledException",
)<{
  readonly Message?: string;
}> {}
export declare class AcceleratorNotFoundException extends EffectData.TaggedError(
  "AcceleratorNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Accelerators = Array<Accelerator>;
export type AcceleratorStatus = "DEPLOYED" | "IN_PROGRESS";
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface AddCustomRoutingEndpointsRequest {
  EndpointConfigurations: Array<CustomRoutingEndpointConfiguration>;
  EndpointGroupArn: string;
}
export interface AddCustomRoutingEndpointsResponse {
  EndpointDescriptions?: Array<CustomRoutingEndpointDescription>;
  EndpointGroupArn?: string;
}
export interface AddEndpointsRequest {
  EndpointConfigurations: Array<EndpointConfiguration>;
  EndpointGroupArn: string;
}
export interface AddEndpointsResponse {
  EndpointDescriptions?: Array<EndpointDescription>;
  EndpointGroupArn?: string;
}
export interface AdvertiseByoipCidrRequest {
  Cidr: string;
}
export interface AdvertiseByoipCidrResponse {
  ByoipCidr?: ByoipCidr;
}
export interface AllowCustomRoutingTrafficRequest {
  EndpointGroupArn: string;
  EndpointId: string;
  DestinationAddresses?: Array<string>;
  DestinationPorts?: Array<number>;
  AllowAllTrafficToEndpoint?: boolean;
}
export declare class AssociatedEndpointGroupFoundException extends EffectData.TaggedError(
  "AssociatedEndpointGroupFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class AssociatedListenerFoundException extends EffectData.TaggedError(
  "AssociatedListenerFoundException",
)<{
  readonly Message?: string;
}> {}
export interface Attachment {
  AttachmentArn?: string;
  Name?: string;
  Principals?: Array<string>;
  Resources?: Array<Resource>;
  LastModifiedTime?: Date | string;
  CreatedTime?: Date | string;
}
export type AttachmentName = string;

export declare class AttachmentNotFoundException extends EffectData.TaggedError(
  "AttachmentNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Attachments = Array<Attachment>;
export type AwsAccountId = string;

export type AwsAccountIds = Array<string>;
export interface ByoipCidr {
  Cidr?: string;
  State?: ByoipCidrState;
  Events?: Array<ByoipCidrEvent>;
}
export interface ByoipCidrEvent {
  Message?: string;
  Timestamp?: Date | string;
}
export type ByoipCidrEvents = Array<ByoipCidrEvent>;
export declare class ByoipCidrNotFoundException extends EffectData.TaggedError(
  "ByoipCidrNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ByoipCidrs = Array<ByoipCidr>;
export type ByoipCidrState =
  | "PENDING_PROVISIONING"
  | "READY"
  | "PENDING_ADVERTISING"
  | "ADVERTISING"
  | "PENDING_WITHDRAWING"
  | "PENDING_DEPROVISIONING"
  | "DEPROVISIONED"
  | "FAILED_PROVISION"
  | "FAILED_ADVERTISING"
  | "FAILED_WITHDRAW"
  | "FAILED_DEPROVISION";
export interface CidrAuthorizationContext {
  Message: string;
  Signature: string;
}
export type ClientAffinity = "NONE" | "SOURCE_IP";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateAcceleratorRequest {
  Name: string;
  IpAddressType?: IpAddressType;
  IpAddresses?: Array<string>;
  Enabled?: boolean;
  IdempotencyToken: string;
  Tags?: Array<Tag>;
}
export interface CreateAcceleratorResponse {
  Accelerator?: Accelerator;
}
export interface CreateCrossAccountAttachmentRequest {
  Name: string;
  Principals?: Array<string>;
  Resources?: Array<Resource>;
  IdempotencyToken: string;
  Tags?: Array<Tag>;
}
export interface CreateCrossAccountAttachmentResponse {
  CrossAccountAttachment?: Attachment;
}
export interface CreateCustomRoutingAcceleratorRequest {
  Name: string;
  IpAddressType?: IpAddressType;
  IpAddresses?: Array<string>;
  Enabled?: boolean;
  IdempotencyToken: string;
  Tags?: Array<Tag>;
}
export interface CreateCustomRoutingAcceleratorResponse {
  Accelerator?: CustomRoutingAccelerator;
}
export interface CreateCustomRoutingEndpointGroupRequest {
  ListenerArn: string;
  EndpointGroupRegion: string;
  DestinationConfigurations: Array<CustomRoutingDestinationConfiguration>;
  IdempotencyToken: string;
}
export interface CreateCustomRoutingEndpointGroupResponse {
  EndpointGroup?: CustomRoutingEndpointGroup;
}
export interface CreateCustomRoutingListenerRequest {
  AcceleratorArn: string;
  PortRanges: Array<PortRange>;
  IdempotencyToken: string;
}
export interface CreateCustomRoutingListenerResponse {
  Listener?: CustomRoutingListener;
}
export interface CreateEndpointGroupRequest {
  ListenerArn: string;
  EndpointGroupRegion: string;
  EndpointConfigurations?: Array<EndpointConfiguration>;
  TrafficDialPercentage?: number;
  HealthCheckPort?: number;
  HealthCheckProtocol?: HealthCheckProtocol;
  HealthCheckPath?: string;
  HealthCheckIntervalSeconds?: number;
  ThresholdCount?: number;
  IdempotencyToken: string;
  PortOverrides?: Array<PortOverride>;
}
export interface CreateEndpointGroupResponse {
  EndpointGroup?: EndpointGroup;
}
export interface CreateListenerRequest {
  AcceleratorArn: string;
  PortRanges: Array<PortRange>;
  Protocol: Protocol;
  ClientAffinity?: ClientAffinity;
  IdempotencyToken: string;
}
export interface CreateListenerResponse {
  Listener?: Listener;
}
export interface CrossAccountResource {
  EndpointId?: string;
  Cidr?: string;
  AttachmentArn?: string;
}
export type CrossAccountResources = Array<CrossAccountResource>;
export interface CustomRoutingAccelerator {
  AcceleratorArn?: string;
  Name?: string;
  IpAddressType?: IpAddressType;
  Enabled?: boolean;
  IpSets?: Array<IpSet>;
  DnsName?: string;
  Status?: CustomRoutingAcceleratorStatus;
  CreatedTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export interface CustomRoutingAcceleratorAttributes {
  FlowLogsEnabled?: boolean;
  FlowLogsS3Bucket?: string;
  FlowLogsS3Prefix?: string;
}
export type CustomRoutingAccelerators = Array<CustomRoutingAccelerator>;
export type CustomRoutingAcceleratorStatus = "DEPLOYED" | "IN_PROGRESS";
export interface CustomRoutingDestinationConfiguration {
  FromPort: number;
  ToPort: number;
  Protocols: Array<CustomRoutingProtocol>;
}
export type CustomRoutingDestinationConfigurations =
  Array<CustomRoutingDestinationConfiguration>;
export interface CustomRoutingDestinationDescription {
  FromPort?: number;
  ToPort?: number;
  Protocols?: Array<Protocol>;
}
export type CustomRoutingDestinationDescriptions =
  Array<CustomRoutingDestinationDescription>;
export type CustomRoutingDestinationTrafficState = "ALLOW" | "DENY";
export interface CustomRoutingEndpointConfiguration {
  EndpointId?: string;
  AttachmentArn?: string;
}
export type CustomRoutingEndpointConfigurations =
  Array<CustomRoutingEndpointConfiguration>;
export interface CustomRoutingEndpointDescription {
  EndpointId?: string;
}
export type CustomRoutingEndpointDescriptions =
  Array<CustomRoutingEndpointDescription>;
export interface CustomRoutingEndpointGroup {
  EndpointGroupArn?: string;
  EndpointGroupRegion?: string;
  DestinationDescriptions?: Array<CustomRoutingDestinationDescription>;
  EndpointDescriptions?: Array<CustomRoutingEndpointDescription>;
}
export type CustomRoutingEndpointGroups = Array<CustomRoutingEndpointGroup>;
export interface CustomRoutingListener {
  ListenerArn?: string;
  PortRanges?: Array<PortRange>;
}
export type CustomRoutingListeners = Array<CustomRoutingListener>;
export type CustomRoutingProtocol = "TCP" | "UDP";
export type CustomRoutingProtocols = Array<CustomRoutingProtocol>;
export interface DeleteAcceleratorRequest {
  AcceleratorArn: string;
}
export interface DeleteCrossAccountAttachmentRequest {
  AttachmentArn: string;
}
export interface DeleteCustomRoutingAcceleratorRequest {
  AcceleratorArn: string;
}
export interface DeleteCustomRoutingEndpointGroupRequest {
  EndpointGroupArn: string;
}
export interface DeleteCustomRoutingListenerRequest {
  ListenerArn: string;
}
export interface DeleteEndpointGroupRequest {
  EndpointGroupArn: string;
}
export interface DeleteListenerRequest {
  ListenerArn: string;
}
export interface DenyCustomRoutingTrafficRequest {
  EndpointGroupArn: string;
  EndpointId: string;
  DestinationAddresses?: Array<string>;
  DestinationPorts?: Array<number>;
  DenyAllTrafficToEndpoint?: boolean;
}
export interface DeprovisionByoipCidrRequest {
  Cidr: string;
}
export interface DeprovisionByoipCidrResponse {
  ByoipCidr?: ByoipCidr;
}
export interface DescribeAcceleratorAttributesRequest {
  AcceleratorArn: string;
}
export interface DescribeAcceleratorAttributesResponse {
  AcceleratorAttributes?: AcceleratorAttributes;
}
export interface DescribeAcceleratorRequest {
  AcceleratorArn: string;
}
export interface DescribeAcceleratorResponse {
  Accelerator?: Accelerator;
}
export interface DescribeCrossAccountAttachmentRequest {
  AttachmentArn: string;
}
export interface DescribeCrossAccountAttachmentResponse {
  CrossAccountAttachment?: Attachment;
}
export interface DescribeCustomRoutingAcceleratorAttributesRequest {
  AcceleratorArn: string;
}
export interface DescribeCustomRoutingAcceleratorAttributesResponse {
  AcceleratorAttributes?: CustomRoutingAcceleratorAttributes;
}
export interface DescribeCustomRoutingAcceleratorRequest {
  AcceleratorArn: string;
}
export interface DescribeCustomRoutingAcceleratorResponse {
  Accelerator?: CustomRoutingAccelerator;
}
export interface DescribeCustomRoutingEndpointGroupRequest {
  EndpointGroupArn: string;
}
export interface DescribeCustomRoutingEndpointGroupResponse {
  EndpointGroup?: CustomRoutingEndpointGroup;
}
export interface DescribeCustomRoutingListenerRequest {
  ListenerArn: string;
}
export interface DescribeCustomRoutingListenerResponse {
  Listener?: CustomRoutingListener;
}
export interface DescribeEndpointGroupRequest {
  EndpointGroupArn: string;
}
export interface DescribeEndpointGroupResponse {
  EndpointGroup?: EndpointGroup;
}
export interface DescribeListenerRequest {
  ListenerArn: string;
}
export interface DescribeListenerResponse {
  Listener?: Listener;
}
export type DestinationAddresses = Array<string>;
export interface DestinationPortMapping {
  AcceleratorArn?: string;
  AcceleratorSocketAddresses?: Array<SocketAddress>;
  EndpointGroupArn?: string;
  EndpointId?: string;
  EndpointGroupRegion?: string;
  DestinationSocketAddress?: SocketAddress;
  IpAddressType?: IpAddressType;
  DestinationTrafficState?: CustomRoutingDestinationTrafficState;
}
export type DestinationPortMappings = Array<DestinationPortMapping>;
export type DestinationPorts = Array<number>;
export declare class EndpointAlreadyExistsException extends EffectData.TaggedError(
  "EndpointAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export interface EndpointConfiguration {
  EndpointId?: string;
  Weight?: number;
  ClientIPPreservationEnabled?: boolean;
  AttachmentArn?: string;
}
export type EndpointConfigurations = Array<EndpointConfiguration>;
export interface EndpointDescription {
  EndpointId?: string;
  Weight?: number;
  HealthState?: HealthState;
  HealthReason?: string;
  ClientIPPreservationEnabled?: boolean;
}
export type EndpointDescriptions = Array<EndpointDescription>;
export interface EndpointGroup {
  EndpointGroupArn?: string;
  EndpointGroupRegion?: string;
  EndpointDescriptions?: Array<EndpointDescription>;
  TrafficDialPercentage?: number;
  HealthCheckPort?: number;
  HealthCheckProtocol?: HealthCheckProtocol;
  HealthCheckPath?: string;
  HealthCheckIntervalSeconds?: number;
  ThresholdCount?: number;
  PortOverrides?: Array<PortOverride>;
}
export declare class EndpointGroupAlreadyExistsException extends EffectData.TaggedError(
  "EndpointGroupAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export declare class EndpointGroupNotFoundException extends EffectData.TaggedError(
  "EndpointGroupNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type EndpointGroups = Array<EndpointGroup>;
export interface EndpointIdentifier {
  EndpointId: string;
  ClientIPPreservationEnabled?: boolean;
}
export type EndpointIdentifiers = Array<EndpointIdentifier>;
export type EndpointIds = Array<string>;
export declare class EndpointNotFoundException extends EffectData.TaggedError(
  "EndpointNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type EndpointWeight = number;

export type ErrorMessage = string;

export type GenericBoolean = boolean;

export type GenericString = string;

export type HealthCheckIntervalSeconds = number;

export type HealthCheckPath = string;

export type HealthCheckPort = number;

export type HealthCheckProtocol = "TCP" | "HTTP" | "HTTPS";
export type HealthState = "INITIAL" | "HEALTHY" | "UNHEALTHY";
export type IdempotencyToken = string;

export declare class IncorrectCidrStateException extends EffectData.TaggedError(
  "IncorrectCidrStateException",
)<{
  readonly Message?: string;
}> {}
export declare class InternalServiceErrorException extends EffectData.TaggedError(
  "InternalServiceErrorException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidArgumentException extends EffectData.TaggedError(
  "InvalidArgumentException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidPortRangeException extends EffectData.TaggedError(
  "InvalidPortRangeException",
)<{
  readonly Message?: string;
}> {}
export type IpAddress = string;

export type IpAddresses = Array<string>;
export type IpAddressFamily = "IPv4" | "IPv6";
export type IpAddressType = "IPV4" | "DUAL_STACK";
export interface IpSet {
  IpFamily?: string;
  IpAddresses?: Array<string>;
  IpAddressFamily?: IpAddressFamily;
}
export type IpSets = Array<IpSet>;
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListAcceleratorsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAcceleratorsResponse {
  Accelerators?: Array<Accelerator>;
  NextToken?: string;
}
export interface ListByoipCidrsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListByoipCidrsResponse {
  ByoipCidrs?: Array<ByoipCidr>;
  NextToken?: string;
}
export interface ListCrossAccountAttachmentsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCrossAccountAttachmentsResponse {
  CrossAccountAttachments?: Array<Attachment>;
  NextToken?: string;
}
export interface ListCrossAccountResourceAccountsRequest {}
export interface ListCrossAccountResourceAccountsResponse {
  ResourceOwnerAwsAccountIds?: Array<string>;
}
export interface ListCrossAccountResourcesRequest {
  AcceleratorArn?: string;
  ResourceOwnerAwsAccountId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCrossAccountResourcesResponse {
  CrossAccountResources?: Array<CrossAccountResource>;
  NextToken?: string;
}
export interface ListCustomRoutingAcceleratorsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCustomRoutingAcceleratorsResponse {
  Accelerators?: Array<CustomRoutingAccelerator>;
  NextToken?: string;
}
export interface ListCustomRoutingEndpointGroupsRequest {
  ListenerArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCustomRoutingEndpointGroupsResponse {
  EndpointGroups?: Array<CustomRoutingEndpointGroup>;
  NextToken?: string;
}
export interface ListCustomRoutingListenersRequest {
  AcceleratorArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCustomRoutingListenersResponse {
  Listeners?: Array<CustomRoutingListener>;
  NextToken?: string;
}
export interface ListCustomRoutingPortMappingsByDestinationRequest {
  EndpointId: string;
  DestinationAddress: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCustomRoutingPortMappingsByDestinationResponse {
  DestinationPortMappings?: Array<DestinationPortMapping>;
  NextToken?: string;
}
export interface ListCustomRoutingPortMappingsRequest {
  AcceleratorArn: string;
  EndpointGroupArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCustomRoutingPortMappingsResponse {
  PortMappings?: Array<PortMapping>;
  NextToken?: string;
}
export interface ListEndpointGroupsRequest {
  ListenerArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListEndpointGroupsResponse {
  EndpointGroups?: Array<EndpointGroup>;
  NextToken?: string;
}
export interface Listener {
  ListenerArn?: string;
  PortRanges?: Array<PortRange>;
  Protocol?: Protocol;
  ClientAffinity?: ClientAffinity;
}
export declare class ListenerNotFoundException extends EffectData.TaggedError(
  "ListenerNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Listeners = Array<Listener>;
export interface ListListenersRequest {
  AcceleratorArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListListenersResponse {
  Listeners?: Array<Listener>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type MaxResults = number;

export interface PortMapping {
  AcceleratorPort?: number;
  EndpointGroupArn?: string;
  EndpointId?: string;
  DestinationSocketAddress?: SocketAddress;
  Protocols?: Array<CustomRoutingProtocol>;
  DestinationTrafficState?: CustomRoutingDestinationTrafficState;
}
export type PortMappings = Array<PortMapping>;
export type PortMappingsMaxResults = number;

export type PortNumber = number;

export interface PortOverride {
  ListenerPort?: number;
  EndpointPort?: number;
}
export type PortOverrides = Array<PortOverride>;
export interface PortRange {
  FromPort?: number;
  ToPort?: number;
}
export type PortRanges = Array<PortRange>;
export type Principal = string;

export type Principals = Array<string>;
export type Protocol = "TCP" | "UDP";
export type Protocols = Array<Protocol>;
export interface ProvisionByoipCidrRequest {
  Cidr: string;
  CidrAuthorizationContext: CidrAuthorizationContext;
}
export interface ProvisionByoipCidrResponse {
  ByoipCidr?: ByoipCidr;
}
export interface RemoveCustomRoutingEndpointsRequest {
  EndpointIds: Array<string>;
  EndpointGroupArn: string;
}
export interface RemoveEndpointsRequest {
  EndpointIdentifiers: Array<EndpointIdentifier>;
  EndpointGroupArn: string;
}
export interface Resource {
  EndpointId?: string;
  Cidr?: string;
  Region?: string;
}
export type ResourceArn = string;

export type Resources = Array<Resource>;
export interface SocketAddress {
  IpAddress?: string;
  Port?: number;
}
export type SocketAddresses = Array<SocketAddress>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type Tags = Array<Tag>;
export type TagValue = string;

export type ThresholdCount = number;

export type Timestamp = Date | string;

export type TrafficDialPercentage = number;

export declare class TransactionInProgressException extends EffectData.TaggedError(
  "TransactionInProgressException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAcceleratorAttributesRequest {
  AcceleratorArn: string;
  FlowLogsEnabled?: boolean;
  FlowLogsS3Bucket?: string;
  FlowLogsS3Prefix?: string;
}
export interface UpdateAcceleratorAttributesResponse {
  AcceleratorAttributes?: AcceleratorAttributes;
}
export interface UpdateAcceleratorRequest {
  AcceleratorArn: string;
  Name?: string;
  IpAddressType?: IpAddressType;
  IpAddresses?: Array<string>;
  Enabled?: boolean;
}
export interface UpdateAcceleratorResponse {
  Accelerator?: Accelerator;
}
export interface UpdateCrossAccountAttachmentRequest {
  AttachmentArn: string;
  Name?: string;
  AddPrincipals?: Array<string>;
  RemovePrincipals?: Array<string>;
  AddResources?: Array<Resource>;
  RemoveResources?: Array<Resource>;
}
export interface UpdateCrossAccountAttachmentResponse {
  CrossAccountAttachment?: Attachment;
}
export interface UpdateCustomRoutingAcceleratorAttributesRequest {
  AcceleratorArn: string;
  FlowLogsEnabled?: boolean;
  FlowLogsS3Bucket?: string;
  FlowLogsS3Prefix?: string;
}
export interface UpdateCustomRoutingAcceleratorAttributesResponse {
  AcceleratorAttributes?: CustomRoutingAcceleratorAttributes;
}
export interface UpdateCustomRoutingAcceleratorRequest {
  AcceleratorArn: string;
  Name?: string;
  IpAddressType?: IpAddressType;
  IpAddresses?: Array<string>;
  Enabled?: boolean;
}
export interface UpdateCustomRoutingAcceleratorResponse {
  Accelerator?: CustomRoutingAccelerator;
}
export interface UpdateCustomRoutingListenerRequest {
  ListenerArn: string;
  PortRanges: Array<PortRange>;
}
export interface UpdateCustomRoutingListenerResponse {
  Listener?: CustomRoutingListener;
}
export interface UpdateEndpointGroupRequest {
  EndpointGroupArn: string;
  EndpointConfigurations?: Array<EndpointConfiguration>;
  TrafficDialPercentage?: number;
  HealthCheckPort?: number;
  HealthCheckProtocol?: HealthCheckProtocol;
  HealthCheckPath?: string;
  HealthCheckIntervalSeconds?: number;
  ThresholdCount?: number;
  PortOverrides?: Array<PortOverride>;
}
export interface UpdateEndpointGroupResponse {
  EndpointGroup?: EndpointGroup;
}
export interface UpdateListenerRequest {
  ListenerArn: string;
  PortRanges?: Array<PortRange>;
  Protocol?: Protocol;
  ClientAffinity?: ClientAffinity;
}
export interface UpdateListenerResponse {
  Listener?: Listener;
}
export interface WithdrawByoipCidrRequest {
  Cidr: string;
}
export interface WithdrawByoipCidrResponse {
  ByoipCidr?: ByoipCidr;
}
export declare namespace AddCustomRoutingEndpoints {
  export type Input = AddCustomRoutingEndpointsRequest;
  export type Output = AddCustomRoutingEndpointsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | EndpointAlreadyExistsException
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace AddEndpoints {
  export type Input = AddEndpointsRequest;
  export type Output = AddEndpointsResponse;
  export type Error =
    | AccessDeniedException
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace AdvertiseByoipCidr {
  export type Input = AdvertiseByoipCidrRequest;
  export type Output = AdvertiseByoipCidrResponse;
  export type Error =
    | AccessDeniedException
    | ByoipCidrNotFoundException
    | IncorrectCidrStateException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace AllowCustomRoutingTraffic {
  export type Input = AllowCustomRoutingTrafficRequest;
  export type Output = {};
  export type Error =
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace CreateAccelerator {
  export type Input = CreateAcceleratorRequest;
  export type Output = CreateAcceleratorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace CreateCrossAccountAttachment {
  export type Input = CreateCrossAccountAttachmentRequest;
  export type Output = CreateCrossAccountAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace CreateCustomRoutingAccelerator {
  export type Input = CreateCustomRoutingAcceleratorRequest;
  export type Output = CreateCustomRoutingAcceleratorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace CreateCustomRoutingEndpointGroup {
  export type Input = CreateCustomRoutingEndpointGroupRequest;
  export type Output = CreateCustomRoutingEndpointGroupResponse;
  export type Error =
    | AcceleratorNotFoundException
    | AccessDeniedException
    | EndpointGroupAlreadyExistsException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidPortRangeException
    | LimitExceededException
    | ListenerNotFoundException
    | CommonAwsError;
}

export declare namespace CreateCustomRoutingListener {
  export type Input = CreateCustomRoutingListenerRequest;
  export type Output = CreateCustomRoutingListenerResponse;
  export type Error =
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidPortRangeException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateEndpointGroup {
  export type Input = CreateEndpointGroupRequest;
  export type Output = CreateEndpointGroupResponse;
  export type Error =
    | AcceleratorNotFoundException
    | AccessDeniedException
    | EndpointGroupAlreadyExistsException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | ListenerNotFoundException
    | CommonAwsError;
}

export declare namespace CreateListener {
  export type Input = CreateListenerRequest;
  export type Output = CreateListenerResponse;
  export type Error =
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidPortRangeException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteAccelerator {
  export type Input = DeleteAcceleratorRequest;
  export type Output = {};
  export type Error =
    | AcceleratorNotDisabledException
    | AcceleratorNotFoundException
    | AssociatedListenerFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace DeleteCrossAccountAttachment {
  export type Input = DeleteCrossAccountAttachmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AttachmentNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace DeleteCustomRoutingAccelerator {
  export type Input = DeleteCustomRoutingAcceleratorRequest;
  export type Output = {};
  export type Error =
    | AcceleratorNotDisabledException
    | AcceleratorNotFoundException
    | AssociatedListenerFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace DeleteCustomRoutingEndpointGroup {
  export type Input = DeleteCustomRoutingEndpointGroupRequest;
  export type Output = {};
  export type Error =
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace DeleteCustomRoutingListener {
  export type Input = DeleteCustomRoutingListenerRequest;
  export type Output = {};
  export type Error =
    | AssociatedEndpointGroupFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | ListenerNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteEndpointGroup {
  export type Input = DeleteEndpointGroupRequest;
  export type Output = {};
  export type Error =
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace DeleteListener {
  export type Input = DeleteListenerRequest;
  export type Output = {};
  export type Error =
    | AssociatedEndpointGroupFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | ListenerNotFoundException
    | CommonAwsError;
}

export declare namespace DenyCustomRoutingTraffic {
  export type Input = DenyCustomRoutingTrafficRequest;
  export type Output = {};
  export type Error =
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace DeprovisionByoipCidr {
  export type Input = DeprovisionByoipCidrRequest;
  export type Output = DeprovisionByoipCidrResponse;
  export type Error =
    | AccessDeniedException
    | ByoipCidrNotFoundException
    | IncorrectCidrStateException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace DescribeAccelerator {
  export type Input = DescribeAcceleratorRequest;
  export type Output = DescribeAcceleratorResponse;
  export type Error =
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace DescribeAcceleratorAttributes {
  export type Input = DescribeAcceleratorAttributesRequest;
  export type Output = DescribeAcceleratorAttributesResponse;
  export type Error =
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace DescribeCrossAccountAttachment {
  export type Input = DescribeCrossAccountAttachmentRequest;
  export type Output = DescribeCrossAccountAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | AttachmentNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace DescribeCustomRoutingAccelerator {
  export type Input = DescribeCustomRoutingAcceleratorRequest;
  export type Output = DescribeCustomRoutingAcceleratorResponse;
  export type Error =
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace DescribeCustomRoutingAcceleratorAttributes {
  export type Input = DescribeCustomRoutingAcceleratorAttributesRequest;
  export type Output = DescribeCustomRoutingAcceleratorAttributesResponse;
  export type Error =
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace DescribeCustomRoutingEndpointGroup {
  export type Input = DescribeCustomRoutingEndpointGroupRequest;
  export type Output = DescribeCustomRoutingEndpointGroupResponse;
  export type Error =
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace DescribeCustomRoutingListener {
  export type Input = DescribeCustomRoutingListenerRequest;
  export type Output = DescribeCustomRoutingListenerResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidArgumentException
    | ListenerNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeEndpointGroup {
  export type Input = DescribeEndpointGroupRequest;
  export type Output = DescribeEndpointGroupResponse;
  export type Error =
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace DescribeListener {
  export type Input = DescribeListenerRequest;
  export type Output = DescribeListenerResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidArgumentException
    | ListenerNotFoundException
    | CommonAwsError;
}

export declare namespace ListAccelerators {
  export type Input = ListAcceleratorsRequest;
  export type Output = ListAcceleratorsResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListByoipCidrs {
  export type Input = ListByoipCidrsRequest;
  export type Output = ListByoipCidrsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListCrossAccountAttachments {
  export type Input = ListCrossAccountAttachmentsRequest;
  export type Output = ListCrossAccountAttachmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListCrossAccountResourceAccounts {
  export type Input = ListCrossAccountResourceAccountsRequest;
  export type Output = ListCrossAccountResourceAccountsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | CommonAwsError;
}

export declare namespace ListCrossAccountResources {
  export type Input = ListCrossAccountResourcesRequest;
  export type Output = ListCrossAccountResourcesResponse;
  export type Error =
    | AcceleratorNotFoundException
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListCustomRoutingAccelerators {
  export type Input = ListCustomRoutingAcceleratorsRequest;
  export type Output = ListCustomRoutingAcceleratorsResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListCustomRoutingEndpointGroups {
  export type Input = ListCustomRoutingEndpointGroupsRequest;
  export type Output = ListCustomRoutingEndpointGroupsResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | ListenerNotFoundException
    | CommonAwsError;
}

export declare namespace ListCustomRoutingListeners {
  export type Input = ListCustomRoutingListenersRequest;
  export type Output = ListCustomRoutingListenersResponse;
  export type Error =
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListCustomRoutingPortMappings {
  export type Input = ListCustomRoutingPortMappingsRequest;
  export type Output = ListCustomRoutingPortMappingsResponse;
  export type Error =
    | AcceleratorNotFoundException
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListCustomRoutingPortMappingsByDestination {
  export type Input = ListCustomRoutingPortMappingsByDestinationRequest;
  export type Output = ListCustomRoutingPortMappingsByDestinationResponse;
  export type Error =
    | EndpointNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListEndpointGroups {
  export type Input = ListEndpointGroupsRequest;
  export type Output = ListEndpointGroupsResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | ListenerNotFoundException
    | CommonAwsError;
}

export declare namespace ListListeners {
  export type Input = ListListenersRequest;
  export type Output = ListListenersResponse;
  export type Error =
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AcceleratorNotFoundException
    | AttachmentNotFoundException
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | ListenerNotFoundException
    | CommonAwsError;
}

export declare namespace ProvisionByoipCidr {
  export type Input = ProvisionByoipCidrRequest;
  export type Output = ProvisionByoipCidrResponse;
  export type Error =
    | AccessDeniedException
    | IncorrectCidrStateException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace RemoveCustomRoutingEndpoints {
  export type Input = RemoveCustomRoutingEndpointsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | EndpointGroupNotFoundException
    | EndpointNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace RemoveEndpoints {
  export type Input = RemoveEndpointsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AcceleratorNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace UpdateAccelerator {
  export type Input = UpdateAcceleratorRequest;
  export type Output = UpdateAcceleratorResponse;
  export type Error =
    | AcceleratorNotFoundException
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace UpdateAcceleratorAttributes {
  export type Input = UpdateAcceleratorAttributesRequest;
  export type Output = UpdateAcceleratorAttributesResponse;
  export type Error =
    | AcceleratorNotFoundException
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace UpdateCrossAccountAttachment {
  export type Input = UpdateCrossAccountAttachmentRequest;
  export type Output = UpdateCrossAccountAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | AttachmentNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace UpdateCustomRoutingAccelerator {
  export type Input = UpdateCustomRoutingAcceleratorRequest;
  export type Output = UpdateCustomRoutingAcceleratorResponse;
  export type Error =
    | AcceleratorNotFoundException
    | ConflictException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace UpdateCustomRoutingAcceleratorAttributes {
  export type Input = UpdateCustomRoutingAcceleratorAttributesRequest;
  export type Output = UpdateCustomRoutingAcceleratorAttributesResponse;
  export type Error =
    | AcceleratorNotFoundException
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidArgumentException
    | TransactionInProgressException
    | CommonAwsError;
}

export declare namespace UpdateCustomRoutingListener {
  export type Input = UpdateCustomRoutingListenerRequest;
  export type Output = UpdateCustomRoutingListenerResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidPortRangeException
    | LimitExceededException
    | ListenerNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateEndpointGroup {
  export type Input = UpdateEndpointGroupRequest;
  export type Output = UpdateEndpointGroupResponse;
  export type Error =
    | AccessDeniedException
    | EndpointGroupNotFoundException
    | InternalServiceErrorException
    | InvalidArgumentException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace UpdateListener {
  export type Input = UpdateListenerRequest;
  export type Output = UpdateListenerResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidArgumentException
    | InvalidPortRangeException
    | LimitExceededException
    | ListenerNotFoundException
    | CommonAwsError;
}

export declare namespace WithdrawByoipCidr {
  export type Input = WithdrawByoipCidrRequest;
  export type Output = WithdrawByoipCidrResponse;
  export type Error =
    | AccessDeniedException
    | ByoipCidrNotFoundException
    | IncorrectCidrStateException
    | InternalServiceErrorException
    | InvalidArgumentException
    | CommonAwsError;
}

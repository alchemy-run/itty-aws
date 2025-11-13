import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class VPCLattice extends AWSServiceClient {
  batchUpdateRule(
    input: BatchUpdateRuleRequest,
  ): Effect.Effect<
    BatchUpdateRuleResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteAuthPolicy(
    input: DeleteAuthPolicyRequest,
  ): Effect.Effect<
    DeleteAuthPolicyResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAuthPolicy(
    input: GetAuthPolicyRequest,
  ): Effect.Effect<
    GetAuthPolicyResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listServiceNetworkVpcEndpointAssociations(
    input: ListServiceNetworkVpcEndpointAssociationsRequest,
  ): Effect.Effect<
    ListServiceNetworkVpcEndpointAssociationsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  putAuthPolicy(
    input: PutAuthPolicyRequest,
  ): Effect.Effect<
    PutAuthPolicyResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createAccessLogSubscription(
    input: CreateAccessLogSubscriptionRequest,
  ): Effect.Effect<
    CreateAccessLogSubscriptionResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createListener(
    input: CreateListenerRequest,
  ): Effect.Effect<
    CreateListenerResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createResourceConfiguration(
    input: CreateResourceConfigurationRequest,
  ): Effect.Effect<
    CreateResourceConfigurationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createResourceGateway(
    input: CreateResourceGatewayRequest,
  ): Effect.Effect<
    CreateResourceGatewayResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createRule(
    input: CreateRuleRequest,
  ): Effect.Effect<
    CreateRuleResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createService(
    input: CreateServiceRequest,
  ): Effect.Effect<
    CreateServiceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createServiceNetwork(
    input: CreateServiceNetworkRequest,
  ): Effect.Effect<
    CreateServiceNetworkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createServiceNetworkResourceAssociation(
    input: CreateServiceNetworkResourceAssociationRequest,
  ): Effect.Effect<
    CreateServiceNetworkResourceAssociationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createServiceNetworkServiceAssociation(
    input: CreateServiceNetworkServiceAssociationRequest,
  ): Effect.Effect<
    CreateServiceNetworkServiceAssociationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createServiceNetworkVpcAssociation(
    input: CreateServiceNetworkVpcAssociationRequest,
  ): Effect.Effect<
    CreateServiceNetworkVpcAssociationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createTargetGroup(
    input: CreateTargetGroupRequest,
  ): Effect.Effect<
    CreateTargetGroupResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteAccessLogSubscription(
    input: DeleteAccessLogSubscriptionRequest,
  ): Effect.Effect<
    DeleteAccessLogSubscriptionResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteListener(
    input: DeleteListenerRequest,
  ): Effect.Effect<
    DeleteListenerResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteResourceConfiguration(
    input: DeleteResourceConfigurationRequest,
  ): Effect.Effect<
    DeleteResourceConfigurationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteResourceEndpointAssociation(
    input: DeleteResourceEndpointAssociationRequest,
  ): Effect.Effect<
    DeleteResourceEndpointAssociationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteResourceGateway(
    input: DeleteResourceGatewayRequest,
  ): Effect.Effect<
    DeleteResourceGatewayResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteRule(
    input: DeleteRuleRequest,
  ): Effect.Effect<
    DeleteRuleResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteService(
    input: DeleteServiceRequest,
  ): Effect.Effect<
    DeleteServiceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteServiceNetwork(
    input: DeleteServiceNetworkRequest,
  ): Effect.Effect<
    DeleteServiceNetworkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteServiceNetworkResourceAssociation(
    input: DeleteServiceNetworkResourceAssociationRequest,
  ): Effect.Effect<
    DeleteServiceNetworkResourceAssociationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteServiceNetworkServiceAssociation(
    input: DeleteServiceNetworkServiceAssociationRequest,
  ): Effect.Effect<
    DeleteServiceNetworkServiceAssociationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteServiceNetworkVpcAssociation(
    input: DeleteServiceNetworkVpcAssociationRequest,
  ): Effect.Effect<
    DeleteServiceNetworkVpcAssociationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteTargetGroup(
    input: DeleteTargetGroupRequest,
  ): Effect.Effect<
    DeleteTargetGroupResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deregisterTargets(
    input: DeregisterTargetsRequest,
  ): Effect.Effect<
    DeregisterTargetsResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAccessLogSubscription(
    input: GetAccessLogSubscriptionRequest,
  ): Effect.Effect<
    GetAccessLogSubscriptionResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getListener(
    input: GetListenerRequest,
  ): Effect.Effect<
    GetListenerResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getResourceConfiguration(
    input: GetResourceConfigurationRequest,
  ): Effect.Effect<
    GetResourceConfigurationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getResourceGateway(
    input: GetResourceGatewayRequest,
  ): Effect.Effect<
    GetResourceGatewayResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getRule(
    input: GetRuleRequest,
  ): Effect.Effect<
    GetRuleResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getService(
    input: GetServiceRequest,
  ): Effect.Effect<
    GetServiceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getServiceNetwork(
    input: GetServiceNetworkRequest,
  ): Effect.Effect<
    GetServiceNetworkResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getServiceNetworkResourceAssociation(
    input: GetServiceNetworkResourceAssociationRequest,
  ): Effect.Effect<
    GetServiceNetworkResourceAssociationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getServiceNetworkServiceAssociation(
    input: GetServiceNetworkServiceAssociationRequest,
  ): Effect.Effect<
    GetServiceNetworkServiceAssociationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getServiceNetworkVpcAssociation(
    input: GetServiceNetworkVpcAssociationRequest,
  ): Effect.Effect<
    GetServiceNetworkVpcAssociationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getTargetGroup(
    input: GetTargetGroupRequest,
  ): Effect.Effect<
    GetTargetGroupResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAccessLogSubscriptions(
    input: ListAccessLogSubscriptionsRequest,
  ): Effect.Effect<
    ListAccessLogSubscriptionsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listListeners(
    input: ListListenersRequest,
  ): Effect.Effect<
    ListListenersResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listResourceConfigurations(
    input: ListResourceConfigurationsRequest,
  ): Effect.Effect<
    ListResourceConfigurationsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listResourceEndpointAssociations(
    input: ListResourceEndpointAssociationsRequest,
  ): Effect.Effect<
    ListResourceEndpointAssociationsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listResourceGateways(
    input: ListResourceGatewaysRequest,
  ): Effect.Effect<
    ListResourceGatewaysResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listRules(
    input: ListRulesRequest,
  ): Effect.Effect<
    ListRulesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listServiceNetworkResourceAssociations(
    input: ListServiceNetworkResourceAssociationsRequest,
  ): Effect.Effect<
    ListServiceNetworkResourceAssociationsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listServiceNetworkServiceAssociations(
    input: ListServiceNetworkServiceAssociationsRequest,
  ): Effect.Effect<
    ListServiceNetworkServiceAssociationsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listServiceNetworkVpcAssociations(
    input: ListServiceNetworkVpcAssociationsRequest,
  ): Effect.Effect<
    ListServiceNetworkVpcAssociationsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listServiceNetworks(
    input: ListServiceNetworksRequest,
  ): Effect.Effect<
    ListServiceNetworksResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listServices(
    input: ListServicesRequest,
  ): Effect.Effect<
    ListServicesResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTargetGroups(
    input: ListTargetGroupsRequest,
  ): Effect.Effect<
    ListTargetGroupsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTargets(
    input: ListTargetsRequest,
  ): Effect.Effect<
    ListTargetsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  registerTargets(
    input: RegisterTargetsRequest,
  ): Effect.Effect<
    RegisterTargetsResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateAccessLogSubscription(
    input: UpdateAccessLogSubscriptionRequest,
  ): Effect.Effect<
    UpdateAccessLogSubscriptionResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateListener(
    input: UpdateListenerRequest,
  ): Effect.Effect<
    UpdateListenerResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateResourceConfiguration(
    input: UpdateResourceConfigurationRequest,
  ): Effect.Effect<
    UpdateResourceConfigurationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateResourceGateway(
    input: UpdateResourceGatewayRequest,
  ): Effect.Effect<
    UpdateResourceGatewayResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateRule(
    input: UpdateRuleRequest,
  ): Effect.Effect<
    UpdateRuleResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateService(
    input: UpdateServiceRequest,
  ): Effect.Effect<
    UpdateServiceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateServiceNetwork(
    input: UpdateServiceNetworkRequest,
  ): Effect.Effect<
    UpdateServiceNetworkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateServiceNetworkVpcAssociation(
    input: UpdateServiceNetworkVpcAssociationRequest,
  ): Effect.Effect<
    UpdateServiceNetworkVpcAssociationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateTargetGroup(
    input: UpdateTargetGroupRequest,
  ): Effect.Effect<
    UpdateTargetGroupResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export declare class VpcLattice extends VPCLattice {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccessLogDestinationArn = string;

export type AccessLogSubscriptionArn = string;

export type AccessLogSubscriptionId = string;

export type AccessLogSubscriptionIdentifier = string;

export type AccessLogSubscriptionList = Array<AccessLogSubscriptionSummary>;
export interface AccessLogSubscriptionSummary {
  id: string;
  arn: string;
  resourceId: string;
  resourceArn: string;
  destinationArn: string;
  serviceNetworkLogType?: string;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export type AccountId = string;

export type Arn = string;

export interface ArnResource {
  arn?: string;
}
export type AuthPolicyState = string;

export type AuthPolicyString = string;

export type AuthType = string;

export interface BatchUpdateRuleRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  rules: Array<RuleUpdate>;
}
export interface BatchUpdateRuleResponse {
  successful?: Array<RuleUpdateSuccess>;
  unsuccessful?: Array<RuleUpdateFailure>;
}
export type VpcLatticeBoolean = boolean;

export type CertificateArn = string;

export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CreateAccessLogSubscriptionRequest {
  clientToken?: string;
  resourceIdentifier: string;
  destinationArn: string;
  serviceNetworkLogType?: string;
  tags?: Record<string, string>;
}
export interface CreateAccessLogSubscriptionResponse {
  id: string;
  arn: string;
  resourceId: string;
  resourceArn: string;
  serviceNetworkLogType?: string;
  destinationArn: string;
}
export interface CreateListenerRequest {
  serviceIdentifier: string;
  name: string;
  protocol: string;
  port?: number;
  defaultAction: RuleAction;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateListenerResponse {
  arn?: string;
  id?: string;
  name?: string;
  protocol?: string;
  port?: number;
  serviceArn?: string;
  serviceId?: string;
  defaultAction?: RuleAction;
}
export interface CreateResourceConfigurationRequest {
  name: string;
  type: string;
  portRanges?: Array<string>;
  protocol?: string;
  resourceGatewayIdentifier?: string;
  resourceConfigurationGroupIdentifier?: string;
  resourceConfigurationDefinition?: ResourceConfigurationDefinition;
  allowAssociationToShareableServiceNetwork?: boolean;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateResourceConfigurationResponse {
  id?: string;
  name?: string;
  arn?: string;
  resourceGatewayId?: string;
  resourceConfigurationGroupId?: string;
  type?: string;
  portRanges?: Array<string>;
  protocol?: string;
  status?: string;
  resourceConfigurationDefinition?: ResourceConfigurationDefinition;
  allowAssociationToShareableServiceNetwork?: boolean;
  createdAt?: Date | string;
  failureReason?: string;
}
export interface CreateResourceGatewayRequest {
  clientToken?: string;
  name: string;
  vpcIdentifier?: string;
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  ipAddressType?: string;
  ipv4AddressesPerEni?: number;
  tags?: Record<string, string>;
}
export interface CreateResourceGatewayResponse {
  name?: string;
  id?: string;
  arn?: string;
  status?: string;
  vpcIdentifier?: string;
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  ipAddressType?: string;
  ipv4AddressesPerEni?: number;
}
export interface CreateRuleRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  name: string;
  match: RuleMatch;
  priority: number;
  action: RuleAction;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateRuleResponse {
  arn?: string;
  id?: string;
  name?: string;
  match?: RuleMatch;
  priority?: number;
  action?: RuleAction;
}
export interface CreateServiceNetworkRequest {
  clientToken?: string;
  name: string;
  authType?: string;
  tags?: Record<string, string>;
  sharingConfig?: SharingConfig;
}
export interface CreateServiceNetworkResourceAssociationRequest {
  clientToken?: string;
  resourceConfigurationIdentifier: string;
  serviceNetworkIdentifier: string;
  tags?: Record<string, string>;
}
export interface CreateServiceNetworkResourceAssociationResponse {
  id?: string;
  arn?: string;
  status?: string;
  createdBy?: string;
}
export interface CreateServiceNetworkResponse {
  id?: string;
  name?: string;
  arn?: string;
  sharingConfig?: SharingConfig;
  authType?: string;
}
export interface CreateServiceNetworkServiceAssociationRequest {
  clientToken?: string;
  serviceIdentifier: string;
  serviceNetworkIdentifier: string;
  tags?: Record<string, string>;
}
export interface CreateServiceNetworkServiceAssociationResponse {
  id?: string;
  status?: string;
  arn?: string;
  createdBy?: string;
  customDomainName?: string;
  dnsEntry?: DnsEntry;
}
export interface CreateServiceNetworkVpcAssociationRequest {
  clientToken?: string;
  serviceNetworkIdentifier: string;
  vpcIdentifier: string;
  securityGroupIds?: Array<string>;
  tags?: Record<string, string>;
}
export interface CreateServiceNetworkVpcAssociationResponse {
  id?: string;
  status?: string;
  arn?: string;
  createdBy?: string;
  securityGroupIds?: Array<string>;
}
export interface CreateServiceRequest {
  clientToken?: string;
  name: string;
  tags?: Record<string, string>;
  customDomainName?: string;
  certificateArn?: string;
  authType?: string;
}
export interface CreateServiceResponse {
  id?: string;
  arn?: string;
  name?: string;
  customDomainName?: string;
  certificateArn?: string;
  status?: string;
  authType?: string;
  dnsEntry?: DnsEntry;
}
export interface CreateTargetGroupRequest {
  name: string;
  type: string;
  config?: TargetGroupConfig;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateTargetGroupResponse {
  id?: string;
  arn?: string;
  name?: string;
  type?: string;
  config?: TargetGroupConfig;
  status?: string;
}
export interface DeleteAccessLogSubscriptionRequest {
  accessLogSubscriptionIdentifier: string;
}
export interface DeleteAccessLogSubscriptionResponse {
}
export interface DeleteAuthPolicyRequest {
  resourceIdentifier: string;
}
export interface DeleteAuthPolicyResponse {
}
export interface DeleteListenerRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
}
export interface DeleteListenerResponse {
}
export interface DeleteResourceConfigurationRequest {
  resourceConfigurationIdentifier: string;
}
export interface DeleteResourceConfigurationResponse {
}
export interface DeleteResourceEndpointAssociationRequest {
  resourceEndpointAssociationIdentifier: string;
}
export interface DeleteResourceEndpointAssociationResponse {
  id?: string;
  arn?: string;
  resourceConfigurationId?: string;
  resourceConfigurationArn?: string;
  vpcEndpointId?: string;
}
export interface DeleteResourceGatewayRequest {
  resourceGatewayIdentifier: string;
}
export interface DeleteResourceGatewayResponse {
  id?: string;
  arn?: string;
  name?: string;
  status?: string;
}
export interface DeleteResourcePolicyRequest {
  resourceArn: string;
}
export interface DeleteResourcePolicyResponse {
}
export interface DeleteRuleRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  ruleIdentifier: string;
}
export interface DeleteRuleResponse {
}
export interface DeleteServiceNetworkRequest {
  serviceNetworkIdentifier: string;
}
export interface DeleteServiceNetworkResourceAssociationRequest {
  serviceNetworkResourceAssociationIdentifier: string;
}
export interface DeleteServiceNetworkResourceAssociationResponse {
  id?: string;
  arn?: string;
  status?: string;
}
export interface DeleteServiceNetworkResponse {
}
export interface DeleteServiceNetworkServiceAssociationRequest {
  serviceNetworkServiceAssociationIdentifier: string;
}
export interface DeleteServiceNetworkServiceAssociationResponse {
  id?: string;
  status?: string;
  arn?: string;
}
export interface DeleteServiceNetworkVpcAssociationRequest {
  serviceNetworkVpcAssociationIdentifier: string;
}
export interface DeleteServiceNetworkVpcAssociationResponse {
  id?: string;
  status?: string;
  arn?: string;
}
export interface DeleteServiceRequest {
  serviceIdentifier: string;
}
export interface DeleteServiceResponse {
  id?: string;
  arn?: string;
  name?: string;
  status?: string;
}
export interface DeleteTargetGroupRequest {
  targetGroupIdentifier: string;
}
export interface DeleteTargetGroupResponse {
  id?: string;
  arn?: string;
  status?: string;
}
export interface DeregisterTargetsRequest {
  targetGroupIdentifier: string;
  targets: Array<Target>;
}
export interface DeregisterTargetsResponse {
  successful?: Array<Target>;
  unsuccessful?: Array<TargetFailure>;
}
export interface DnsEntry {
  domainName?: string;
  hostedZoneId?: string;
}
export interface DnsResource {
  domainName?: string;
  ipAddressType?: string;
}
export type DomainName = string;

export type FailureCode = string;

export type FailureMessage = string;

export interface FixedResponseAction {
  statusCode: number;
}
export interface ForwardAction {
  targetGroups: Array<WeightedTargetGroup>;
}
export interface GetAccessLogSubscriptionRequest {
  accessLogSubscriptionIdentifier: string;
}
export interface GetAccessLogSubscriptionResponse {
  id: string;
  arn: string;
  resourceId: string;
  resourceArn: string;
  destinationArn: string;
  serviceNetworkLogType?: string;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export interface GetAuthPolicyRequest {
  resourceIdentifier: string;
}
export interface GetAuthPolicyResponse {
  policy?: string;
  state?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export interface GetListenerRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
}
export interface GetListenerResponse {
  arn?: string;
  id?: string;
  name?: string;
  protocol?: string;
  port?: number;
  serviceArn?: string;
  serviceId?: string;
  defaultAction?: RuleAction;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export interface GetResourceConfigurationRequest {
  resourceConfigurationIdentifier: string;
}
export interface GetResourceConfigurationResponse {
  id?: string;
  name?: string;
  arn?: string;
  resourceGatewayId?: string;
  resourceConfigurationGroupId?: string;
  type?: string;
  allowAssociationToShareableServiceNetwork?: boolean;
  portRanges?: Array<string>;
  protocol?: string;
  customDomainName?: string;
  status?: string;
  resourceConfigurationDefinition?: ResourceConfigurationDefinition;
  createdAt?: Date | string;
  amazonManaged?: boolean;
  failureReason?: string;
  lastUpdatedAt?: Date | string;
}
export interface GetResourceGatewayRequest {
  resourceGatewayIdentifier: string;
}
export interface GetResourceGatewayResponse {
  name?: string;
  id?: string;
  arn?: string;
  status?: string;
  vpcId?: string;
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  ipAddressType?: string;
  ipv4AddressesPerEni?: number;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export interface GetResourcePolicyRequest {
  resourceArn: string;
}
export interface GetResourcePolicyResponse {
  policy?: string;
}
export interface GetRuleRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  ruleIdentifier: string;
}
export interface GetRuleResponse {
  arn?: string;
  id?: string;
  name?: string;
  isDefault?: boolean;
  match?: RuleMatch;
  priority?: number;
  action?: RuleAction;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export interface GetServiceNetworkRequest {
  serviceNetworkIdentifier: string;
}
export interface GetServiceNetworkResourceAssociationRequest {
  serviceNetworkResourceAssociationIdentifier: string;
}
export interface GetServiceNetworkResourceAssociationResponse {
  id?: string;
  arn?: string;
  status?: string;
  createdBy?: string;
  createdAt?: Date | string;
  resourceConfigurationId?: string;
  resourceConfigurationArn?: string;
  resourceConfigurationName?: string;
  serviceNetworkId?: string;
  serviceNetworkArn?: string;
  serviceNetworkName?: string;
  failureReason?: string;
  failureCode?: string;
  lastUpdatedAt?: Date | string;
  privateDnsEntry?: DnsEntry;
  dnsEntry?: DnsEntry;
  isManagedAssociation?: boolean;
}
export interface GetServiceNetworkResponse {
  id?: string;
  name?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  arn?: string;
  authType?: string;
  sharingConfig?: SharingConfig;
  numberOfAssociatedVPCs?: number;
  numberOfAssociatedServices?: number;
}
export interface GetServiceNetworkServiceAssociationRequest {
  serviceNetworkServiceAssociationIdentifier: string;
}
export interface GetServiceNetworkServiceAssociationResponse {
  id?: string;
  status?: string;
  arn?: string;
  createdBy?: string;
  createdAt?: Date | string;
  serviceId?: string;
  serviceName?: string;
  serviceArn?: string;
  serviceNetworkId?: string;
  serviceNetworkName?: string;
  serviceNetworkArn?: string;
  dnsEntry?: DnsEntry;
  customDomainName?: string;
  failureMessage?: string;
  failureCode?: string;
}
export interface GetServiceNetworkVpcAssociationRequest {
  serviceNetworkVpcAssociationIdentifier: string;
}
export interface GetServiceNetworkVpcAssociationResponse {
  id?: string;
  status?: string;
  arn?: string;
  createdBy?: string;
  createdAt?: Date | string;
  serviceNetworkId?: string;
  serviceNetworkName?: string;
  serviceNetworkArn?: string;
  vpcId?: string;
  securityGroupIds?: Array<string>;
  failureMessage?: string;
  failureCode?: string;
  lastUpdatedAt?: Date | string;
}
export interface GetServiceRequest {
  serviceIdentifier: string;
}
export interface GetServiceResponse {
  id?: string;
  name?: string;
  arn?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  dnsEntry?: DnsEntry;
  customDomainName?: string;
  certificateArn?: string;
  status?: string;
  authType?: string;
  failureCode?: string;
  failureMessage?: string;
}
export interface GetTargetGroupRequest {
  targetGroupIdentifier: string;
}
export interface GetTargetGroupResponse {
  id?: string;
  arn?: string;
  name?: string;
  type?: string;
  config?: TargetGroupConfig;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  status?: string;
  serviceArns?: Array<string>;
  failureMessage?: string;
  failureCode?: string;
}
export interface HeaderMatch {
  name: string;
  match: HeaderMatchType;
  caseSensitive?: boolean;
}
export type HeaderMatchContains = string;

export type HeaderMatchExact = string;

export type HeaderMatchList = Array<HeaderMatch>;
export type HeaderMatchName = string;

export type HeaderMatchPrefix = string;

interface _HeaderMatchType {
  exact?: string;
  prefix?: string;
  contains?: string;
}

export type HeaderMatchType = (_HeaderMatchType & { exact: string }) | (_HeaderMatchType & { prefix: string }) | (_HeaderMatchType & { contains: string });
export interface HealthCheckConfig {
  enabled?: boolean;
  protocol?: string;
  protocolVersion?: string;
  port?: number;
  path?: string;
  healthCheckIntervalSeconds?: number;
  healthCheckTimeoutSeconds?: number;
  healthyThresholdCount?: number;
  unhealthyThresholdCount?: number;
  matcher?: Matcher;
}
export type HealthCheckIntervalSeconds = number;

export type HealthCheckPath = string;

export type HealthCheckPort = number;

export type HealthCheckProtocolVersion = string;

export type HealthCheckTimeoutSeconds = number;

export type HealthyThresholdCount = number;

export type HttpCodeMatcher = string;

export interface HttpMatch {
  method?: string;
  pathMatch?: PathMatch;
  headerMatches?: Array<HeaderMatch>;
}
export type HttpMethod = string;

export type HttpStatusCode = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type IpAddress = string;

export type IpAddressType = string;

export interface IpResource {
  ipAddress?: string;
}
export type Ipv4AddressesPerEni = number;

export type LambdaEventStructureVersion = string;

export interface ListAccessLogSubscriptionsRequest {
  resourceIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAccessLogSubscriptionsResponse {
  items: Array<AccessLogSubscriptionSummary>;
  nextToken?: string;
}
export type ListenerArn = string;

export type ListenerId = string;

export type ListenerIdentifier = string;

export type ListenerName = string;

export type ListenerProtocol = string;

export interface ListenerSummary {
  arn?: string;
  id?: string;
  name?: string;
  protocol?: string;
  port?: number;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export type ListenerSummaryList = Array<ListenerSummary>;
export interface ListListenersRequest {
  serviceIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListListenersResponse {
  items: Array<ListenerSummary>;
  nextToken?: string;
}
export interface ListResourceConfigurationsRequest {
  resourceGatewayIdentifier?: string;
  resourceConfigurationGroupIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListResourceConfigurationsResponse {
  items?: Array<ResourceConfigurationSummary>;
  nextToken?: string;
}
export interface ListResourceEndpointAssociationsRequest {
  resourceConfigurationIdentifier: string;
  resourceEndpointAssociationIdentifier?: string;
  vpcEndpointId?: string;
  vpcEndpointOwner?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListResourceEndpointAssociationsResponse {
  items: Array<ResourceEndpointAssociationSummary>;
  nextToken?: string;
}
export interface ListResourceGatewaysRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListResourceGatewaysResponse {
  items?: Array<ResourceGatewaySummary>;
  nextToken?: string;
}
export interface ListRulesRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListRulesResponse {
  items: Array<RuleSummary>;
  nextToken?: string;
}
export interface ListServiceNetworkResourceAssociationsRequest {
  serviceNetworkIdentifier?: string;
  resourceConfigurationIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
  includeChildren?: boolean;
}
export interface ListServiceNetworkResourceAssociationsResponse {
  items: Array<ServiceNetworkResourceAssociationSummary>;
  nextToken?: string;
}
export interface ListServiceNetworkServiceAssociationsRequest {
  serviceNetworkIdentifier?: string;
  serviceIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListServiceNetworkServiceAssociationsResponse {
  items: Array<ServiceNetworkServiceAssociationSummary>;
  nextToken?: string;
}
export interface ListServiceNetworksRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListServiceNetworksResponse {
  items: Array<ServiceNetworkSummary>;
  nextToken?: string;
}
export interface ListServiceNetworkVpcAssociationsRequest {
  serviceNetworkIdentifier?: string;
  vpcIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListServiceNetworkVpcAssociationsResponse {
  items: Array<ServiceNetworkVpcAssociationSummary>;
  nextToken?: string;
}
export interface ListServiceNetworkVpcEndpointAssociationsRequest {
  serviceNetworkIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListServiceNetworkVpcEndpointAssociationsResponse {
  items: Array<ServiceNetworkEndpointAssociation>;
  nextToken?: string;
}
export interface ListServicesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListServicesResponse {
  items?: Array<ServiceSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListTargetGroupsRequest {
  maxResults?: number;
  nextToken?: string;
  vpcIdentifier?: string;
  targetGroupType?: string;
}
export interface ListTargetGroupsResponse {
  items?: Array<TargetGroupSummary>;
  nextToken?: string;
}
export interface ListTargetsRequest {
  targetGroupIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  targets?: Array<Target>;
}
export interface ListTargetsResponse {
  items: Array<TargetSummary>;
  nextToken?: string;
}
interface _Matcher {
  httpCode?: string;
}

export type Matcher = (_Matcher & { httpCode: string });
export type MaxResults = number;

export type NextToken = string;

export interface PathMatch {
  match: PathMatchType;
  caseSensitive?: boolean;
}
export type PathMatchExact = string;

export type PathMatchPrefix = string;

interface _PathMatchType {
  exact?: string;
  prefix?: string;
}

export type PathMatchType = (_PathMatchType & { exact: string }) | (_PathMatchType & { prefix: string });
export type PolicyString = string;

export type Port = number;

export type PortRange = string;

export type PortRangeList = Array<string>;
export type ProtocolType = string;

export interface PutAuthPolicyRequest {
  resourceIdentifier: string;
  policy: string;
}
export interface PutAuthPolicyResponse {
  policy?: string;
  state?: string;
}
export interface PutResourcePolicyRequest {
  resourceArn: string;
  policy: string;
}
export interface PutResourcePolicyResponse {
}
export interface RegisterTargetsRequest {
  targetGroupIdentifier: string;
  targets: Array<Target>;
}
export interface RegisterTargetsResponse {
  successful?: Array<Target>;
  unsuccessful?: Array<TargetFailure>;
}
export type ResourceArn = string;

export type ResourceConfigurationArn = string;

interface _ResourceConfigurationDefinition {
  dnsResource?: DnsResource;
  ipResource?: IpResource;
  arnResource?: ArnResource;
}

export type ResourceConfigurationDefinition = (_ResourceConfigurationDefinition & { dnsResource: DnsResource }) | (_ResourceConfigurationDefinition & { ipResource: IpResource }) | (_ResourceConfigurationDefinition & { arnResource: ArnResource });
export type ResourceConfigurationId = string;

export type ResourceConfigurationIdentifier = string;

export type ResourceConfigurationIpAddressType = string;

export type ResourceConfigurationName = string;

export type ResourceConfigurationStatus = string;

export interface ResourceConfigurationSummary {
  id?: string;
  name?: string;
  arn?: string;
  resourceGatewayId?: string;
  resourceConfigurationGroupId?: string;
  type?: string;
  status?: string;
  amazonManaged?: boolean;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export type ResourceConfigurationSummaryList = Array<ResourceConfigurationSummary>;
export type ResourceConfigurationType = string;

export type ResourceEndpointAssociationArn = string;

export type ResourceEndpointAssociationId = string;

export type ResourceEndpointAssociationIdentifier = string;

export type ResourceEndpointAssociationList = Array<ResourceEndpointAssociationSummary>;
export interface ResourceEndpointAssociationSummary {
  id?: string;
  arn?: string;
  resourceConfigurationId?: string;
  resourceConfigurationArn?: string;
  resourceConfigurationName?: string;
  vpcEndpointId?: string;
  vpcEndpointOwner?: string;
  createdBy?: string;
  createdAt?: Date | string;
}
export type ResourceGatewayArn = string;

export type ResourceGatewayId = string;

export type ResourceGatewayIdentifier = string;

export type ResourceGatewayIpAddressType = string;

export type ResourceGatewayList = Array<ResourceGatewaySummary>;
export type ResourceGatewayName = string;

export type ResourceGatewayStatus = string;

export interface ResourceGatewaySummary {
  name?: string;
  id?: string;
  arn?: string;
  status?: string;
  vpcIdentifier?: string;
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  ipAddressType?: string;
  ipv4AddressesPerEni?: number;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export type ResourceId = string;

export type ResourceIdentifier = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
interface _RuleAction {
  forward?: ForwardAction;
  fixedResponse?: FixedResponseAction;
}

export type RuleAction = (_RuleAction & { forward: ForwardAction }) | (_RuleAction & { fixedResponse: FixedResponseAction });
export type RuleArn = string;

export type RuleId = string;

export type RuleIdentifier = string;

interface _RuleMatch {
  httpMatch?: HttpMatch;
}

export type RuleMatch = (_RuleMatch & { httpMatch: HttpMatch });
export type RuleName = string;

export type RulePriority = number;

export interface RuleSummary {
  arn?: string;
  id?: string;
  name?: string;
  isDefault?: boolean;
  priority?: number;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export type RuleSummaryList = Array<RuleSummary>;
export interface RuleUpdate {
  ruleIdentifier: string;
  match?: RuleMatch;
  priority?: number;
  action?: RuleAction;
}
export interface RuleUpdateFailure {
  ruleIdentifier?: string;
  failureCode?: string;
  failureMessage?: string;
}
export type RuleUpdateFailureList = Array<RuleUpdateFailure>;
export type RuleUpdateList = Array<RuleUpdate>;
export interface RuleUpdateSuccess {
  arn?: string;
  id?: string;
  name?: string;
  isDefault?: boolean;
  match?: RuleMatch;
  priority?: number;
  action?: RuleAction;
}
export type RuleUpdateSuccessList = Array<RuleUpdateSuccess>;
export type SecurityGroupId = string;

export type SecurityGroupList = Array<string>;
export type ServiceArn = string;

export type ServiceArnList = Array<string>;
export type ServiceCustomDomainName = string;

export type ServiceId = string;

export type ServiceIdentifier = string;

export type ServiceList = Array<ServiceSummary>;
export type ServiceLoadBalancerAssociationIdentifier = string;

export type ServiceName = string;

export type ServiceNetworkArn = string;

export type ServiceNetworkArnWithoutRegex = string;

export interface ServiceNetworkEndpointAssociation {
  vpcEndpointId?: string;
  vpcId?: string;
  vpcEndpointOwnerId?: string;
  id?: string;
  state?: string;
  serviceNetworkArn?: string;
  createdAt?: Date | string;
}
export type ServiceNetworkId = string;

export type ServiceNetworkIdentifier = string;

export type ServiceNetworkIdentifierWithoutRegex = string;

export type ServiceNetworkList = Array<ServiceNetworkSummary>;
export type ServiceNetworkLogType = string;

export type ServiceNetworkName = string;

export type ServiceNetworkNameWithoutRegex = string;

export type ServiceNetworkResourceAssociationArn = string;

export type ServiceNetworkResourceAssociationId = string;

export type ServiceNetworkResourceAssociationIdentifier = string;

export type ServiceNetworkResourceAssociationList = Array<ServiceNetworkResourceAssociationSummary>;
export type ServiceNetworkResourceAssociationStatus = string;

export interface ServiceNetworkResourceAssociationSummary {
  id?: string;
  arn?: string;
  status?: string;
  createdBy?: string;
  createdAt?: Date | string;
  resourceConfigurationId?: string;
  resourceConfigurationArn?: string;
  resourceConfigurationName?: string;
  serviceNetworkId?: string;
  serviceNetworkArn?: string;
  serviceNetworkName?: string;
  dnsEntry?: DnsEntry;
  privateDnsEntry?: DnsEntry;
  isManagedAssociation?: boolean;
  failureCode?: string;
}
export type ServiceNetworkServiceAssociationArn = string;

export type ServiceNetworkServiceAssociationIdentifier = string;

export type ServiceNetworkServiceAssociationList = Array<ServiceNetworkServiceAssociationSummary>;
export type ServiceNetworkServiceAssociationStatus = string;

export interface ServiceNetworkServiceAssociationSummary {
  id?: string;
  status?: string;
  arn?: string;
  createdBy?: string;
  createdAt?: Date | string;
  serviceId?: string;
  serviceName?: string;
  serviceArn?: string;
  serviceNetworkId?: string;
  serviceNetworkName?: string;
  serviceNetworkArn?: string;
  dnsEntry?: DnsEntry;
  customDomainName?: string;
}
export interface ServiceNetworkSummary {
  id?: string;
  name?: string;
  arn?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  numberOfAssociatedVPCs?: number;
  numberOfAssociatedServices?: number;
  numberOfAssociatedResourceConfigurations?: number;
}
export type ServiceNetworkVpcAssociationArn = string;

export type ServiceNetworkVpcAssociationId = string;

export type ServiceNetworkVpcAssociationIdentifier = string;

export type ServiceNetworkVpcAssociationList = Array<ServiceNetworkVpcAssociationSummary>;
export type ServiceNetworkVpcAssociationStatus = string;

export interface ServiceNetworkVpcAssociationSummary {
  id?: string;
  arn?: string;
  status?: string;
  createdBy?: string;
  createdAt?: Date | string;
  serviceNetworkId?: string;
  serviceNetworkName?: string;
  serviceNetworkArn?: string;
  vpcId?: string;
  lastUpdatedAt?: Date | string;
}
export type ServiceNetworkVpcEndpointAssociationList = Array<ServiceNetworkEndpointAssociation>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export type ServiceStatus = string;

export interface ServiceSummary {
  id?: string;
  name?: string;
  arn?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  dnsEntry?: DnsEntry;
  customDomainName?: string;
  status?: string;
}
export interface SharingConfig {
  enabled?: boolean;
}
export type SubnetId = string;

export type SubnetList = Array<string>;
export type TagKey = string;

export type TagKeys = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface Target {
  id: string;
  port?: number;
}
export interface TargetFailure {
  id?: string;
  port?: number;
  failureCode?: string;
  failureMessage?: string;
}
export type TargetFailureList = Array<TargetFailure>;
export type TargetGroupArn = string;

export interface TargetGroupConfig {
  port?: number;
  protocol?: string;
  protocolVersion?: string;
  ipAddressType?: string;
  vpcIdentifier?: string;
  healthCheck?: HealthCheckConfig;
  lambdaEventStructureVersion?: string;
}
export type TargetGroupId = string;

export type TargetGroupIdentifier = string;

export type TargetGroupList = Array<TargetGroupSummary>;
export type TargetGroupName = string;

export type TargetGroupProtocol = string;

export type TargetGroupProtocolVersion = string;

export type TargetGroupStatus = string;

export interface TargetGroupSummary {
  id?: string;
  arn?: string;
  name?: string;
  type?: string;
  createdAt?: Date | string;
  port?: number;
  protocol?: string;
  ipAddressType?: string;
  vpcIdentifier?: string;
  lastUpdatedAt?: Date | string;
  status?: string;
  serviceArns?: Array<string>;
  lambdaEventStructureVersion?: string;
}
export type TargetGroupType = string;

export type TargetGroupWeight = number;

export type TargetList = Array<Target>;
export type TargetStatus = string;

export interface TargetSummary {
  id?: string;
  port?: number;
  status?: string;
  reasonCode?: string;
}
export type TargetSummaryList = Array<TargetSummary>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export type Timestamp = Date | string;

export type UnhealthyThresholdCount = number;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateAccessLogSubscriptionRequest {
  accessLogSubscriptionIdentifier: string;
  destinationArn: string;
}
export interface UpdateAccessLogSubscriptionResponse {
  id: string;
  arn: string;
  resourceId: string;
  resourceArn: string;
  destinationArn: string;
}
export interface UpdateListenerRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  defaultAction: RuleAction;
}
export interface UpdateListenerResponse {
  arn?: string;
  id?: string;
  name?: string;
  protocol?: string;
  port?: number;
  serviceArn?: string;
  serviceId?: string;
  defaultAction?: RuleAction;
}
export interface UpdateResourceConfigurationRequest {
  resourceConfigurationIdentifier: string;
  resourceConfigurationDefinition?: ResourceConfigurationDefinition;
  allowAssociationToShareableServiceNetwork?: boolean;
  portRanges?: Array<string>;
}
export interface UpdateResourceConfigurationResponse {
  id?: string;
  name?: string;
  arn?: string;
  resourceGatewayId?: string;
  resourceConfigurationGroupId?: string;
  type?: string;
  portRanges?: Array<string>;
  allowAssociationToShareableServiceNetwork?: boolean;
  protocol?: string;
  status?: string;
  resourceConfigurationDefinition?: ResourceConfigurationDefinition;
}
export interface UpdateResourceGatewayRequest {
  resourceGatewayIdentifier: string;
  securityGroupIds?: Array<string>;
}
export interface UpdateResourceGatewayResponse {
  name?: string;
  id?: string;
  arn?: string;
  status?: string;
  vpcId?: string;
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  ipAddressType?: string;
}
export interface UpdateRuleRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  ruleIdentifier: string;
  match?: RuleMatch;
  priority?: number;
  action?: RuleAction;
}
export interface UpdateRuleResponse {
  arn?: string;
  id?: string;
  name?: string;
  isDefault?: boolean;
  match?: RuleMatch;
  priority?: number;
  action?: RuleAction;
}
export interface UpdateServiceNetworkRequest {
  serviceNetworkIdentifier: string;
  authType: string;
}
export interface UpdateServiceNetworkResponse {
  id?: string;
  name?: string;
  arn?: string;
  authType?: string;
}
export interface UpdateServiceNetworkVpcAssociationRequest {
  serviceNetworkVpcAssociationIdentifier: string;
  securityGroupIds: Array<string>;
}
export interface UpdateServiceNetworkVpcAssociationResponse {
  id?: string;
  arn?: string;
  status?: string;
  createdBy?: string;
  securityGroupIds?: Array<string>;
}
export interface UpdateServiceRequest {
  serviceIdentifier: string;
  certificateArn?: string;
  authType?: string;
}
export interface UpdateServiceResponse {
  id?: string;
  arn?: string;
  name?: string;
  customDomainName?: string;
  certificateArn?: string;
  authType?: string;
}
export interface UpdateTargetGroupRequest {
  targetGroupIdentifier: string;
  healthCheck: HealthCheckConfig;
}
export interface UpdateTargetGroupResponse {
  id?: string;
  arn?: string;
  name?: string;
  type?: string;
  config?: TargetGroupConfig;
  status?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type VpcEndpointId = string;

export type VpcEndpointOwner = string;

export type VpcId = string;

export interface WeightedTargetGroup {
  targetGroupIdentifier: string;
  weight?: number;
}
export type WeightedTargetGroupList = Array<WeightedTargetGroup>;
export type WildcardArn = string;

export declare namespace BatchUpdateRule {
  export type Input = BatchUpdateRuleRequest;
  export type Output = BatchUpdateRuleResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAuthPolicy {
  export type Input = DeleteAuthPolicyRequest;
  export type Output = DeleteAuthPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAuthPolicy {
  export type Input = GetAuthPolicyRequest;
  export type Output = GetAuthPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServiceNetworkVpcEndpointAssociations {
  export type Input = ListServiceNetworkVpcEndpointAssociationsRequest;
  export type Output = ListServiceNetworkVpcEndpointAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutAuthPolicy {
  export type Input = PutAuthPolicyRequest;
  export type Output = PutAuthPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAccessLogSubscription {
  export type Input = CreateAccessLogSubscriptionRequest;
  export type Output = CreateAccessLogSubscriptionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateListener {
  export type Input = CreateListenerRequest;
  export type Output = CreateListenerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateResourceConfiguration {
  export type Input = CreateResourceConfigurationRequest;
  export type Output = CreateResourceConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateResourceGateway {
  export type Input = CreateResourceGatewayRequest;
  export type Output = CreateResourceGatewayResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRule {
  export type Input = CreateRuleRequest;
  export type Output = CreateRuleResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateService {
  export type Input = CreateServiceRequest;
  export type Output = CreateServiceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateServiceNetwork {
  export type Input = CreateServiceNetworkRequest;
  export type Output = CreateServiceNetworkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateServiceNetworkResourceAssociation {
  export type Input = CreateServiceNetworkResourceAssociationRequest;
  export type Output = CreateServiceNetworkResourceAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateServiceNetworkServiceAssociation {
  export type Input = CreateServiceNetworkServiceAssociationRequest;
  export type Output = CreateServiceNetworkServiceAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateServiceNetworkVpcAssociation {
  export type Input = CreateServiceNetworkVpcAssociationRequest;
  export type Output = CreateServiceNetworkVpcAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTargetGroup {
  export type Input = CreateTargetGroupRequest;
  export type Output = CreateTargetGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAccessLogSubscription {
  export type Input = DeleteAccessLogSubscriptionRequest;
  export type Output = DeleteAccessLogSubscriptionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteListener {
  export type Input = DeleteListenerRequest;
  export type Output = DeleteListenerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourceConfiguration {
  export type Input = DeleteResourceConfigurationRequest;
  export type Output = DeleteResourceConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourceEndpointAssociation {
  export type Input = DeleteResourceEndpointAssociationRequest;
  export type Output = DeleteResourceEndpointAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourceGateway {
  export type Input = DeleteResourceGatewayRequest;
  export type Output = DeleteResourceGatewayResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRule {
  export type Input = DeleteRuleRequest;
  export type Output = DeleteRuleResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteService {
  export type Input = DeleteServiceRequest;
  export type Output = DeleteServiceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteServiceNetwork {
  export type Input = DeleteServiceNetworkRequest;
  export type Output = DeleteServiceNetworkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteServiceNetworkResourceAssociation {
  export type Input = DeleteServiceNetworkResourceAssociationRequest;
  export type Output = DeleteServiceNetworkResourceAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteServiceNetworkServiceAssociation {
  export type Input = DeleteServiceNetworkServiceAssociationRequest;
  export type Output = DeleteServiceNetworkServiceAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteServiceNetworkVpcAssociation {
  export type Input = DeleteServiceNetworkVpcAssociationRequest;
  export type Output = DeleteServiceNetworkVpcAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTargetGroup {
  export type Input = DeleteTargetGroupRequest;
  export type Output = DeleteTargetGroupResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterTargets {
  export type Input = DeregisterTargetsRequest;
  export type Output = DeregisterTargetsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAccessLogSubscription {
  export type Input = GetAccessLogSubscriptionRequest;
  export type Output = GetAccessLogSubscriptionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetListener {
  export type Input = GetListenerRequest;
  export type Output = GetListenerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourceConfiguration {
  export type Input = GetResourceConfigurationRequest;
  export type Output = GetResourceConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourceGateway {
  export type Input = GetResourceGatewayRequest;
  export type Output = GetResourceGatewayResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRule {
  export type Input = GetRuleRequest;
  export type Output = GetRuleResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetService {
  export type Input = GetServiceRequest;
  export type Output = GetServiceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServiceNetwork {
  export type Input = GetServiceNetworkRequest;
  export type Output = GetServiceNetworkResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServiceNetworkResourceAssociation {
  export type Input = GetServiceNetworkResourceAssociationRequest;
  export type Output = GetServiceNetworkResourceAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServiceNetworkServiceAssociation {
  export type Input = GetServiceNetworkServiceAssociationRequest;
  export type Output = GetServiceNetworkServiceAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServiceNetworkVpcAssociation {
  export type Input = GetServiceNetworkVpcAssociationRequest;
  export type Output = GetServiceNetworkVpcAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTargetGroup {
  export type Input = GetTargetGroupRequest;
  export type Output = GetTargetGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAccessLogSubscriptions {
  export type Input = ListAccessLogSubscriptionsRequest;
  export type Output = ListAccessLogSubscriptionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListListeners {
  export type Input = ListListenersRequest;
  export type Output = ListListenersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceConfigurations {
  export type Input = ListResourceConfigurationsRequest;
  export type Output = ListResourceConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceEndpointAssociations {
  export type Input = ListResourceEndpointAssociationsRequest;
  export type Output = ListResourceEndpointAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceGateways {
  export type Input = ListResourceGatewaysRequest;
  export type Output = ListResourceGatewaysResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRules {
  export type Input = ListRulesRequest;
  export type Output = ListRulesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServiceNetworkResourceAssociations {
  export type Input = ListServiceNetworkResourceAssociationsRequest;
  export type Output = ListServiceNetworkResourceAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServiceNetworkServiceAssociations {
  export type Input = ListServiceNetworkServiceAssociationsRequest;
  export type Output = ListServiceNetworkServiceAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServiceNetworkVpcAssociations {
  export type Input = ListServiceNetworkVpcAssociationsRequest;
  export type Output = ListServiceNetworkVpcAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServiceNetworks {
  export type Input = ListServiceNetworksRequest;
  export type Output = ListServiceNetworksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServices {
  export type Input = ListServicesRequest;
  export type Output = ListServicesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTargetGroups {
  export type Input = ListTargetGroupsRequest;
  export type Output = ListTargetGroupsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTargets {
  export type Input = ListTargetsRequest;
  export type Output = ListTargetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterTargets {
  export type Input = RegisterTargetsRequest;
  export type Output = RegisterTargetsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAccessLogSubscription {
  export type Input = UpdateAccessLogSubscriptionRequest;
  export type Output = UpdateAccessLogSubscriptionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateListener {
  export type Input = UpdateListenerRequest;
  export type Output = UpdateListenerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResourceConfiguration {
  export type Input = UpdateResourceConfigurationRequest;
  export type Output = UpdateResourceConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResourceGateway {
  export type Input = UpdateResourceGatewayRequest;
  export type Output = UpdateResourceGatewayResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRule {
  export type Input = UpdateRuleRequest;
  export type Output = UpdateRuleResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateService {
  export type Input = UpdateServiceRequest;
  export type Output = UpdateServiceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateServiceNetwork {
  export type Input = UpdateServiceNetworkRequest;
  export type Output = UpdateServiceNetworkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateServiceNetworkVpcAssociation {
  export type Input = UpdateServiceNetworkVpcAssociationRequest;
  export type Output = UpdateServiceNetworkVpcAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTargetGroup {
  export type Input = UpdateTargetGroupRequest;
  export type Output = UpdateTargetGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type VPCLatticeErrors = AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError;


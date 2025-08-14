import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class VPCLattice extends AWSServiceClient {
  batchUpdateRule(
    input: BatchUpdateRuleRequest,
  ): Effect.Effect<
    BatchUpdateRuleResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAuthPolicy(
    input: DeleteAuthPolicyRequest,
  ): Effect.Effect<
    DeleteAuthPolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAuthPolicy(
    input: GetAuthPolicyRequest,
  ): Effect.Effect<
    GetAuthPolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listServiceNetworkVpcEndpointAssociations(
    input: ListServiceNetworkVpcEndpointAssociationsRequest,
  ): Effect.Effect<
    ListServiceNetworkVpcEndpointAssociationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putAuthPolicy(
    input: PutAuthPolicyRequest,
  ): Effect.Effect<
    PutAuthPolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
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
  tags?: Partial<Record<string, string>>;
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
  tags?: Partial<Record<string, string>>;
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
  tags?: Partial<Record<string, string>>;
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
  vpcIdentifier: string;
  subnetIds: Array<string>;
  securityGroupIds?: Array<string>;
  ipAddressType?: string;
  tags?: Partial<Record<string, string>>;
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
}
export interface CreateRuleRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  name: string;
  match: RuleMatch;
  priority: number;
  action: RuleAction;
  clientToken?: string;
  tags?: Partial<Record<string, string>>;
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
  tags?: Partial<Record<string, string>>;
  sharingConfig?: SharingConfig;
}
export interface CreateServiceNetworkResourceAssociationRequest {
  clientToken?: string;
  resourceConfigurationIdentifier: string;
  serviceNetworkIdentifier: string;
  tags?: Partial<Record<string, string>>;
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
  tags?: Partial<Record<string, string>>;
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
  tags?: Partial<Record<string, string>>;
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
  tags?: Partial<Record<string, string>>;
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
  tags?: Partial<Record<string, string>>;
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
export interface DeleteAccessLogSubscriptionResponse {}
export interface DeleteAuthPolicyRequest {
  resourceIdentifier: string;
}
export interface DeleteAuthPolicyResponse {}
export interface DeleteListenerRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
}
export interface DeleteListenerResponse {}
export interface DeleteResourceConfigurationRequest {
  resourceConfigurationIdentifier: string;
}
export interface DeleteResourceConfigurationResponse {}
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
export interface DeleteResourcePolicyResponse {}
export interface DeleteRuleRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  ruleIdentifier: string;
}
export interface DeleteRuleResponse {}
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
export interface DeleteServiceNetworkResponse {}
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

export type HeaderMatchType =
  | (_HeaderMatchType & { exact: string })
  | (_HeaderMatchType & { prefix: string })
  | (_HeaderMatchType & { contains: string });
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
  tags?: Partial<Record<string, string>>;
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

export type Matcher = _Matcher & { httpCode: string };
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

export type PathMatchType =
  | (_PathMatchType & { exact: string })
  | (_PathMatchType & { prefix: string });
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
export interface PutResourcePolicyResponse {}
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

export type ResourceConfigurationDefinition =
  | (_ResourceConfigurationDefinition & { dnsResource: DnsResource })
  | (_ResourceConfigurationDefinition & { ipResource: IpResource })
  | (_ResourceConfigurationDefinition & { arnResource: ArnResource });
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
export type ResourceConfigurationSummaryList =
  Array<ResourceConfigurationSummary>;
export type ResourceConfigurationType = string;

export type ResourceEndpointAssociationArn = string;

export type ResourceEndpointAssociationId = string;

export type ResourceEndpointAssociationIdentifier = string;

export type ResourceEndpointAssociationList =
  Array<ResourceEndpointAssociationSummary>;
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

export type RuleAction =
  | (_RuleAction & { forward: ForwardAction })
  | (_RuleAction & { fixedResponse: FixedResponseAction });
export type RuleArn = string;

export type RuleId = string;

export type RuleIdentifier = string;

interface _RuleMatch {
  httpMatch?: HttpMatch;
}

export type RuleMatch = _RuleMatch & { httpMatch: HttpMatch };
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

export type ServiceNetworkResourceAssociationList =
  Array<ServiceNetworkResourceAssociationSummary>;
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

export type ServiceNetworkServiceAssociationList =
  Array<ServiceNetworkServiceAssociationSummary>;
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

export type ServiceNetworkVpcAssociationList =
  Array<ServiceNetworkVpcAssociationSummary>;
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
export type ServiceNetworkVpcEndpointAssociationList =
  Array<ServiceNetworkEndpointAssociation>;
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
export type TagMap = Partial<Record<string, string>>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Partial<Record<string, string>>;
}
export interface TagResourceResponse {}
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
export interface UntagResourceResponse {}
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

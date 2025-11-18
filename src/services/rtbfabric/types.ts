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
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class RTBFabric extends AWSServiceClient {
  listRequesterGateways(
    input: ListRequesterGatewaysRequest,
  ): Effect.Effect<
    ListRequesterGatewaysResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listResponderGateways(
    input: ListResponderGatewaysRequest,
  ): Effect.Effect<
    ListResponderGatewaysResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
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
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  acceptLink(
    input: AcceptLinkRequest,
  ): Effect.Effect<
    AcceptLinkResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createInboundExternalLink(
    input: CreateInboundExternalLinkRequest,
  ): Effect.Effect<
    CreateInboundExternalLinkResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createLink(
    input: CreateLinkRequest,
  ): Effect.Effect<
    CreateLinkResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createOutboundExternalLink(
    input: CreateOutboundExternalLinkRequest,
  ): Effect.Effect<
    CreateOutboundExternalLinkResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRequesterGateway(
    input: CreateRequesterGatewayRequest,
  ): Effect.Effect<
    CreateRequesterGatewayResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createResponderGateway(
    input: CreateResponderGatewayRequest,
  ): Effect.Effect<
    CreateResponderGatewayResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteInboundExternalLink(
    input: DeleteInboundExternalLinkRequest,
  ): Effect.Effect<
    DeleteInboundExternalLinkResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteLink(
    input: DeleteLinkRequest,
  ): Effect.Effect<
    DeleteLinkResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteOutboundExternalLink(
    input: DeleteOutboundExternalLinkRequest,
  ): Effect.Effect<
    DeleteOutboundExternalLinkResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRequesterGateway(
    input: DeleteRequesterGatewayRequest,
  ): Effect.Effect<
    DeleteRequesterGatewayResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteResponderGateway(
    input: DeleteResponderGatewayRequest,
  ): Effect.Effect<
    DeleteResponderGatewayResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getInboundExternalLink(
    input: GetInboundExternalLinkRequest,
  ): Effect.Effect<
    GetInboundExternalLinkResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLink(
    input: GetLinkRequest,
  ): Effect.Effect<
    GetLinkResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getOutboundExternalLink(
    input: GetOutboundExternalLinkRequest,
  ): Effect.Effect<
    GetOutboundExternalLinkResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRequesterGateway(
    input: GetRequesterGatewayRequest,
  ): Effect.Effect<
    GetRequesterGatewayResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getResponderGateway(
    input: GetResponderGatewayRequest,
  ): Effect.Effect<
    GetResponderGatewayResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLinks(
    input: ListLinksRequest,
  ): Effect.Effect<
    ListLinksResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  rejectLink(
    input: RejectLinkRequest,
  ): Effect.Effect<
    RejectLinkResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateLink(
    input: UpdateLinkRequest,
  ): Effect.Effect<
    UpdateLinkResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateLinkModuleFlow(
    input: UpdateLinkModuleFlowRequest,
  ): Effect.Effect<
    UpdateLinkModuleFlowResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateRequesterGateway(
    input: UpdateRequesterGatewayRequest,
  ): Effect.Effect<
    UpdateRequesterGatewayResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateResponderGateway(
    input: UpdateResponderGatewayRequest,
  ): Effect.Effect<
    UpdateResponderGatewayResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Rtbfabric extends RTBFabric {}

export interface AcceptLinkRequest {
  gatewayId: string;
  linkId: string;
  attributes?: LinkAttributes;
  logSettings: LinkLogSettings;
}
export interface AcceptLinkResponse {
  gatewayId: string;
  peerGatewayId: string;
  status: LinkStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  direction?: LinkDirection;
  flowModules?: Array<ModuleConfiguration>;
  pendingFlowModules?: Array<ModuleConfiguration>;
  attributes?: LinkAttributes;
  linkId: string;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
interface _Action {
  noBid?: NoBidAction;
  headerTag?: HeaderTagAction;
}

export type Action =
  | (_Action & { noBid: NoBidAction })
  | (_Action & { headerTag: HeaderTagAction });
export type AutoScalingGroupName = string;

export type AutoScalingGroupNameList = Array<string>;
export interface AutoScalingGroupsConfiguration {
  autoScalingGroupNames: Array<string>;
  roleArn: string;
}
export type Base64EncodedCertificateChain = string;

export type CertificateAuthorityCertificates = Array<string>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export interface CreateInboundExternalLinkRequest {
  clientToken: string;
  gatewayId: string;
  attributes?: LinkAttributes;
  tags?: Record<string, string>;
}
export interface CreateInboundExternalLinkResponse {
  gatewayId: string;
  linkId: string;
  status: LinkStatus;
  domainName: string;
}
export interface CreateLinkRequest {
  gatewayId: string;
  peerGatewayId: string;
  attributes?: LinkAttributes;
  httpResponderAllowed?: boolean;
  tags?: Record<string, string>;
  logSettings: LinkLogSettings;
}
export interface CreateLinkResponse {
  gatewayId: string;
  peerGatewayId: string;
  status: LinkStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  direction?: LinkDirection;
  flowModules?: Array<ModuleConfiguration>;
  pendingFlowModules?: Array<ModuleConfiguration>;
  attributes?: LinkAttributes;
  linkId: string;
  customerProvidedId?: string;
}
export interface CreateOutboundExternalLinkRequest {
  clientToken: string;
  gatewayId: string;
  publicEndpoint: string;
  tags?: Record<string, string>;
}
export interface CreateOutboundExternalLinkResponse {
  gatewayId: string;
  linkId: string;
  status: LinkStatus;
}
export interface CreateRequesterGatewayRequest {
  vpcId: string;
  subnetIds: Array<string>;
  securityGroupIds: Array<string>;
  clientToken: string;
  description?: string;
  tags?: Record<string, string>;
}
export interface CreateRequesterGatewayResponse {
  gatewayId: string;
  domainName: string;
  status: RequesterGatewayStatus;
}
export interface CreateResponderGatewayRequest {
  vpcId: string;
  subnetIds: Array<string>;
  securityGroupIds: Array<string>;
  domainName?: string;
  port: number;
  protocol: Protocol;
  trustStoreConfiguration?: TrustStoreConfiguration;
  managedEndpointConfiguration?: ManagedEndpointConfiguration;
  clientToken: string;
  description?: string;
  tags?: Record<string, string>;
}
export interface CreateResponderGatewayResponse {
  gatewayId: string;
  status: ResponderGatewayStatus;
}
export type CustomerProvidedId = string;

export interface DeleteInboundExternalLinkRequest {
  gatewayId: string;
  linkId: string;
}
export interface DeleteInboundExternalLinkResponse {
  linkId: string;
  status: LinkStatus;
}
export interface DeleteLinkRequest {
  gatewayId: string;
  linkId: string;
}
export interface DeleteLinkResponse {
  linkId: string;
  status: LinkStatus;
}
export interface DeleteOutboundExternalLinkRequest {
  gatewayId: string;
  linkId: string;
}
export interface DeleteOutboundExternalLinkResponse {
  linkId: string;
  status: LinkStatus;
}
export interface DeleteRequesterGatewayRequest {
  gatewayId: string;
}
export interface DeleteRequesterGatewayResponse {
  gatewayId: string;
  status: RequesterGatewayStatus;
}
export interface DeleteResponderGatewayRequest {
  gatewayId: string;
}
export interface DeleteResponderGatewayResponse {
  gatewayId: string;
  status: ResponderGatewayStatus;
}
export type DomainName = string;

export interface EksEndpointsConfiguration {
  endpointsResourceName: string;
  endpointsResourceNamespace: string;
  clusterApiServerEndpointUri: string;
  clusterApiServerCaCertificateChain: string;
  clusterName: string;
  roleArn: string;
}
export interface Filter {
  criteria: Array<FilterCriterion>;
}
export type FilterConfiguration = Array<Filter>;
export type FilterCriteria = Array<FilterCriterion>;
export interface FilterCriterion {
  path: string;
  values: Array<string>;
}
export type FilterType = "INCLUDE" | "EXCLUDE";
export type FlowModuleName = string;

export type FlowModuleNameList = Array<string>;
export type GatewayId = string;

export type GatewayIdList = Array<string>;
export interface GetInboundExternalLinkRequest {
  gatewayId: string;
  linkId: string;
}
export interface GetInboundExternalLinkResponse {
  gatewayId: string;
  linkId: string;
  status: LinkStatus;
  domainName: string;
  flowModules?: Array<ModuleConfiguration>;
  pendingFlowModules?: Array<ModuleConfiguration>;
  attributes?: LinkAttributes;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  tags?: Record<string, string>;
}
export interface GetLinkRequest {
  gatewayId: string;
  linkId: string;
}
export interface GetLinkResponse {
  gatewayId: string;
  peerGatewayId: string;
  status: LinkStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  direction?: LinkDirection;
  flowModules?: Array<ModuleConfiguration>;
  pendingFlowModules?: Array<ModuleConfiguration>;
  attributes?: LinkAttributes;
  linkId: string;
  tags?: Record<string, string>;
  logSettings?: LinkLogSettings;
}
export interface GetOutboundExternalLinkRequest {
  gatewayId: string;
  linkId: string;
}
export interface GetOutboundExternalLinkResponse {
  gatewayId: string;
  linkId: string;
  status: LinkStatus;
  publicEndpoint: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  tags?: Record<string, string>;
}
export interface GetRequesterGatewayRequest {
  gatewayId: string;
}
export interface GetRequesterGatewayResponse {
  status: RequesterGatewayStatus;
  domainName: string;
  description?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  vpcId: string;
  subnetIds: Array<string>;
  securityGroupIds: Array<string>;
  gatewayId: string;
  tags?: Record<string, string>;
  activeLinksCount?: number;
  totalLinksCount?: number;
}
export interface GetResponderGatewayRequest {
  gatewayId: string;
}
export interface GetResponderGatewayResponse {
  vpcId: string;
  subnetIds: Array<string>;
  securityGroupIds: Array<string>;
  status: ResponderGatewayStatus;
  description?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  domainName?: string;
  port: number;
  protocol: Protocol;
  trustStoreConfiguration?: TrustStoreConfiguration;
  managedEndpointConfiguration?: ManagedEndpointConfiguration;
  gatewayId: string;
  tags?: Record<string, string>;
  activeLinksCount?: number;
  totalLinksCount?: number;
  inboundLinksCount?: number;
}
export interface HeaderTagAction {
  name: string;
  value: string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type KubernetesClusterName = string;

export type KubernetesEndpointsResourceName = string;

export type KubernetesNamespace = string;

export interface LinkApplicationLogConfiguration {
  sampling: LinkApplicationLogSampling;
}
export interface LinkApplicationLogSampling {
  errorLog: number;
  filterLog: number;
}
export interface LinkAttributes {
  responderErrorMasking?: Array<ResponderErrorMaskingForHttpCode>;
  customerProvidedId?: string;
}
export type LinkDirection = "RESPONSE" | "REQUEST";
export type LinkId = string;

export type LinkList = Array<ListLinksResponseStructure>;
export interface LinkLogSettings {
  applicationLogs: LinkApplicationLogConfiguration;
}
export type LinkStatus =
  | "PENDING_CREATION"
  | "PENDING_REQUEST"
  | "REQUESTED"
  | "ACCEPTED"
  | "ACTIVE"
  | "REJECTED"
  | "FAILED"
  | "PENDING_DELETION"
  | "DELETED"
  | "PENDING_UPDATE"
  | "PENDING_ISOLATION"
  | "ISOLATED"
  | "PENDING_RESTORATION";
export interface ListLinksRequest {
  gatewayId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListLinksResponse {
  links?: Array<ListLinksResponseStructure>;
  nextToken?: string;
}
export interface ListLinksResponseStructure {
  gatewayId: string;
  peerGatewayId: string;
  status: LinkStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  direction?: LinkDirection;
  flowModules?: Array<ModuleConfiguration>;
  pendingFlowModules?: Array<ModuleConfiguration>;
  attributes?: LinkAttributes;
  linkId: string;
  tags?: Record<string, string>;
}
export interface ListRequesterGatewaysRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListRequesterGatewaysResponse {
  gatewayIds?: Array<string>;
  nextToken?: string;
}
export interface ListResponderGatewaysRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListResponderGatewaysResponse {
  gatewayIds?: Array<string>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
interface _ManagedEndpointConfiguration {
  autoScalingGroups?: AutoScalingGroupsConfiguration;
  eksEndpoints?: EksEndpointsConfiguration;
}

export type ManagedEndpointConfiguration =
  | (_ManagedEndpointConfiguration & {
      autoScalingGroups: AutoScalingGroupsConfiguration;
    })
  | (_ManagedEndpointConfiguration & {
      eksEndpoints: EksEndpointsConfiguration;
    });
export interface ModuleConfiguration {
  version?: string;
  name: string;
  dependsOn?: Array<string>;
  moduleParameters?: ModuleParameters;
}
export type ModuleConfigurationList = Array<ModuleConfiguration>;
interface _ModuleParameters {
  noBid?: NoBidModuleParameters;
  openRtbAttribute?: OpenRtbAttributeModuleParameters;
  rateLimiter?: RateLimiterModuleParameters;
}

export type ModuleParameters =
  | (_ModuleParameters & { noBid: NoBidModuleParameters })
  | (_ModuleParameters & { openRtbAttribute: OpenRtbAttributeModuleParameters })
  | (_ModuleParameters & { rateLimiter: RateLimiterModuleParameters });
export interface NoBidAction {
  noBidReasonCode?: number;
}
export interface NoBidModuleParameters {
  reason?: string;
  reasonCode?: number;
  passThroughPercentage?: number;
}
export interface OpenRtbAttributeModuleParameters {
  filterType: FilterType;
  filterConfiguration: Array<Filter>;
  action: Action;
  holdbackPercentage: number;
}
export type Protocol = "HTTP" | "HTTPS";
export interface RateLimiterModuleParameters {
  tps?: number;
}
export interface RejectLinkRequest {
  gatewayId: string;
  linkId: string;
}
export interface RejectLinkResponse {
  gatewayId: string;
  peerGatewayId: string;
  status: LinkStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  direction?: LinkDirection;
  flowModules?: Array<ModuleConfiguration>;
  pendingFlowModules?: Array<ModuleConfiguration>;
  attributes?: LinkAttributes;
  linkId: string;
}
export type RequesterGatewayStatus =
  | "PENDING_CREATION"
  | "ACTIVE"
  | "PENDING_DELETION"
  | "DELETED"
  | "ERROR"
  | "PENDING_UPDATE"
  | "ISOLATED"
  | "PENDING_ISOLATION"
  | "PENDING_RESTORATION";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type ResponderErrorMasking = Array<ResponderErrorMaskingForHttpCode>;
export type ResponderErrorMaskingAction = "NO_BID" | "PASSTHROUGH";
export interface ResponderErrorMaskingForHttpCode {
  httpCode: string;
  action: ResponderErrorMaskingAction;
  loggingTypes: Array<ResponderErrorMaskingLoggingType>;
  responseLoggingPercentage?: number;
}
export type ResponderErrorMaskingLoggingType = "NONE" | "METRIC" | "RESPONSE";
export type ResponderErrorMaskingLoggingTypes =
  Array<ResponderErrorMaskingLoggingType>;
export type ResponderGatewayStatus =
  | "PENDING_CREATION"
  | "ACTIVE"
  | "PENDING_DELETION"
  | "DELETED"
  | "ERROR"
  | "PENDING_UPDATE"
  | "ISOLATED"
  | "PENDING_ISOLATION"
  | "PENDING_RESTORATION";
export type RtbTaggableResourceArn = string;

export type SecurityGroupId = string;

export type SecurityGroupIdList = Array<string>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type SubnetId = string;

export type SubnetIdList = Array<string>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagsMap = Record<string, string>;
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface TrustStoreConfiguration {
  certificateAuthorityCertificates: Array<string>;
}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateLinkModuleFlowRequest {
  clientToken: string;
  gatewayId: string;
  linkId: string;
  modules: Array<ModuleConfiguration>;
}
export interface UpdateLinkModuleFlowResponse {
  gatewayId: string;
  linkId: string;
  status: LinkStatus;
}
export interface UpdateLinkRequest {
  gatewayId: string;
  linkId: string;
  logSettings?: LinkLogSettings;
}
export interface UpdateLinkResponse {
  linkId: string;
  status: LinkStatus;
}
export interface UpdateRequesterGatewayRequest {
  clientToken: string;
  gatewayId: string;
  description?: string;
}
export interface UpdateRequesterGatewayResponse {
  gatewayId: string;
  status: RequesterGatewayStatus;
}
export interface UpdateResponderGatewayRequest {
  domainName?: string;
  port: number;
  protocol: Protocol;
  trustStoreConfiguration?: TrustStoreConfiguration;
  managedEndpointConfiguration?: ManagedEndpointConfiguration;
  clientToken: string;
  gatewayId: string;
  description?: string;
}
export interface UpdateResponderGatewayResponse {
  gatewayId: string;
  status: ResponderGatewayStatus;
}
export type URI = string;

export type URL = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export type ValueList = Array<string>;
export type Version = string;

export type VpcId = string;

export declare namespace ListRequesterGateways {
  export type Input = ListRequesterGatewaysRequest;
  export type Output = ListRequesterGatewaysResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResponderGateways {
  export type Input = ListResponderGatewaysRequest;
  export type Output = ListResponderGatewaysResponse;
  export type Error =
    | InternalServerException
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
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AcceptLink {
  export type Input = AcceptLinkRequest;
  export type Output = AcceptLinkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateInboundExternalLink {
  export type Input = CreateInboundExternalLinkRequest;
  export type Output = CreateInboundExternalLinkResponse;
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

export declare namespace CreateLink {
  export type Input = CreateLinkRequest;
  export type Output = CreateLinkResponse;
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

export declare namespace CreateOutboundExternalLink {
  export type Input = CreateOutboundExternalLinkRequest;
  export type Output = CreateOutboundExternalLinkResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRequesterGateway {
  export type Input = CreateRequesterGatewayRequest;
  export type Output = CreateRequesterGatewayResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateResponderGateway {
  export type Input = CreateResponderGatewayRequest;
  export type Output = CreateResponderGatewayResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInboundExternalLink {
  export type Input = DeleteInboundExternalLinkRequest;
  export type Output = DeleteInboundExternalLinkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLink {
  export type Input = DeleteLinkRequest;
  export type Output = DeleteLinkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteOutboundExternalLink {
  export type Input = DeleteOutboundExternalLinkRequest;
  export type Output = DeleteOutboundExternalLinkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRequesterGateway {
  export type Input = DeleteRequesterGatewayRequest;
  export type Output = DeleteRequesterGatewayResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResponderGateway {
  export type Input = DeleteResponderGatewayRequest;
  export type Output = DeleteResponderGatewayResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInboundExternalLink {
  export type Input = GetInboundExternalLinkRequest;
  export type Output = GetInboundExternalLinkResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLink {
  export type Input = GetLinkRequest;
  export type Output = GetLinkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOutboundExternalLink {
  export type Input = GetOutboundExternalLinkRequest;
  export type Output = GetOutboundExternalLinkResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRequesterGateway {
  export type Input = GetRequesterGatewayRequest;
  export type Output = GetRequesterGatewayResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResponderGateway {
  export type Input = GetResponderGatewayRequest;
  export type Output = GetResponderGatewayResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLinks {
  export type Input = ListLinksRequest;
  export type Output = ListLinksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RejectLink {
  export type Input = RejectLinkRequest;
  export type Output = RejectLinkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLink {
  export type Input = UpdateLinkRequest;
  export type Output = UpdateLinkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLinkModuleFlow {
  export type Input = UpdateLinkModuleFlowRequest;
  export type Output = UpdateLinkModuleFlowResponse;
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

export declare namespace UpdateRequesterGateway {
  export type Input = UpdateRequesterGatewayRequest;
  export type Output = UpdateRequesterGatewayResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResponderGateway {
  export type Input = UpdateResponderGatewayRequest;
  export type Output = UpdateResponderGatewayResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type RTBFabricErrors =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;

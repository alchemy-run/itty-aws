import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class PrivateNetworks extends AWSServiceClient {
  acknowledgeOrderReceipt(
    input: AcknowledgeOrderReceiptRequest,
  ): Effect.Effect<
    AcknowledgeOrderReceiptResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  activateDeviceIdentifier(
    input: ActivateDeviceIdentifierRequest,
  ): Effect.Effect<
    ActivateDeviceIdentifierResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  activateNetworkSite(
    input: ActivateNetworkSiteRequest,
  ): Effect.Effect<
    ActivateNetworkSiteResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  configureAccessPoint(
    input: ConfigureAccessPointRequest,
  ): Effect.Effect<
    ConfigureAccessPointResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createNetwork(
    input: CreateNetworkRequest,
  ): Effect.Effect<
    CreateNetworkResponse,
    InternalServerException | LimitExceededException | ValidationException | CommonAwsError
  >;
  createNetworkSite(
    input: CreateNetworkSiteRequest,
  ): Effect.Effect<
    CreateNetworkSiteResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deactivateDeviceIdentifier(
    input: DeactivateDeviceIdentifierRequest,
  ): Effect.Effect<
    DeactivateDeviceIdentifierResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteNetwork(
    input: DeleteNetworkRequest,
  ): Effect.Effect<
    DeleteNetworkResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteNetworkSite(
    input: DeleteNetworkSiteRequest,
  ): Effect.Effect<
    DeleteNetworkSiteResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getDeviceIdentifier(
    input: GetDeviceIdentifierRequest,
  ): Effect.Effect<
    GetDeviceIdentifierResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getNetwork(
    input: GetNetworkRequest,
  ): Effect.Effect<
    GetNetworkResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getNetworkResource(
    input: GetNetworkResourceRequest,
  ): Effect.Effect<
    GetNetworkResourceResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getNetworkSite(
    input: GetNetworkSiteRequest,
  ): Effect.Effect<
    GetNetworkSiteResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getOrder(
    input: GetOrderRequest,
  ): Effect.Effect<
    GetOrderResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listDeviceIdentifiers(
    input: ListDeviceIdentifiersRequest,
  ): Effect.Effect<
    ListDeviceIdentifiersResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listNetworkResources(
    input: ListNetworkResourcesRequest,
  ): Effect.Effect<
    ListNetworkResourcesResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listNetworks(
    input: ListNetworksRequest,
  ): Effect.Effect<
    ListNetworksResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listNetworkSites(
    input: ListNetworkSitesRequest,
  ): Effect.Effect<
    ListNetworkSitesResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listOrders(
    input: ListOrdersRequest,
  ): Effect.Effect<
    ListOrdersResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  ping(
    input: {},
  ): Effect.Effect<
    PingResponse,
    InternalServerException | CommonAwsError
  >;
  startNetworkResourceUpdate(
    input: StartNetworkResourceUpdateRequest,
  ): Effect.Effect<
    StartNetworkResourceUpdateResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
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
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateNetworkSite(
    input: UpdateNetworkSiteRequest,
  ): Effect.Effect<
    UpdateNetworkSiteResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateNetworkSitePlan(
    input: UpdateNetworkSitePlanRequest,
  ): Effect.Effect<
    UpdateNetworkSiteResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export declare class Privatenetworks extends PrivateNetworks {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AcknowledgeOrderReceiptRequest {
  orderArn: string;
}
export interface AcknowledgeOrderReceiptResponse {
  order: Order;
}
export type AcknowledgmentStatus = string;

export interface ActivateDeviceIdentifierRequest {
  deviceIdentifierArn: string;
  clientToken?: string;
}
export interface ActivateDeviceIdentifierResponse {
  deviceIdentifier: DeviceIdentifier;
  tags?: Record<string, string>;
}
export interface ActivateNetworkSiteRequest {
  networkSiteArn: string;
  shippingAddress: Address;
  clientToken?: string;
  commitmentConfiguration?: CommitmentConfiguration;
}
export interface ActivateNetworkSiteResponse {
  networkSite?: NetworkSite;
}
export interface Address {
  city: string;
  company?: string;
  country: string;
  name: string;
  phoneNumber?: string;
  postalCode: string;
  stateOrProvince: string;
  street1: string;
  street2?: string;
  street3?: string;
  emailAddress?: string;
}
export type AddressContent = string;

export type Arn = string;

export type ClientToken = string;

export interface CommitmentConfiguration {
  commitmentLength: string;
  automaticRenewal: boolean;
}
export interface CommitmentInformation {
  commitmentConfiguration: CommitmentConfiguration;
  startAt?: Date | string;
  expiresOn?: Date | string;
}
export type CommitmentLength = string;

export interface ConfigureAccessPointRequest {
  accessPointArn: string;
  position?: Position;
  cpiUsername?: string;
  cpiUserId?: string;
  cpiUserPassword?: string;
  cpiSecretKey?: string;
}
export interface ConfigureAccessPointResponse {
  accessPoint: NetworkResource;
}
export interface CreateNetworkRequest {
  networkName: string;
  description?: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateNetworkResponse {
  network: Network;
  tags?: Record<string, string>;
}
export interface CreateNetworkSiteRequest {
  networkSiteName: string;
  description?: string;
  networkArn: string;
  pendingPlan?: SitePlan;
  clientToken?: string;
  availabilityZone?: string;
  availabilityZoneId?: string;
  tags?: Record<string, string>;
}
export interface CreateNetworkSiteResponse {
  networkSite?: NetworkSite;
  tags?: Record<string, string>;
}
export interface DeactivateDeviceIdentifierRequest {
  deviceIdentifierArn: string;
  clientToken?: string;
}
export interface DeactivateDeviceIdentifierResponse {
  deviceIdentifier: DeviceIdentifier;
}
export interface DeleteNetworkRequest {
  networkArn: string;
  clientToken?: string;
}
export interface DeleteNetworkResponse {
  network: Network;
}
export interface DeleteNetworkSiteRequest {
  networkSiteArn: string;
  clientToken?: string;
}
export interface DeleteNetworkSiteResponse {
  networkSite?: NetworkSite;
}
export type Description = string;

export interface DeviceIdentifier {
  deviceIdentifierArn?: string;
  trafficGroupArn?: string;
  networkArn?: string;
  imsi?: string;
  iccid?: string;
  vendor?: string;
  status?: string;
  orderArn?: string;
  createdAt?: Date | string;
}
export type DeviceIdentifierFilterKeys = string;

export type DeviceIdentifierFilters = Record<string, Array<string>>;
export type DeviceIdentifierFilterValues = Array<string>;
export type DeviceIdentifierList = Array<DeviceIdentifier>;
export type DeviceIdentifierStatus = string;

export type ElevationReference = string;

export type ElevationUnit = string;

export interface GetDeviceIdentifierRequest {
  deviceIdentifierArn: string;
}
export interface GetDeviceIdentifierResponse {
  deviceIdentifier?: DeviceIdentifier;
  tags?: Record<string, string>;
}
export interface GetNetworkRequest {
  networkArn: string;
}
export interface GetNetworkResourceRequest {
  networkResourceArn: string;
}
export interface GetNetworkResourceResponse {
  networkResource: NetworkResource;
  tags?: Record<string, string>;
}
export interface GetNetworkResponse {
  network: Network;
  tags?: Record<string, string>;
}
export interface GetNetworkSiteRequest {
  networkSiteArn: string;
}
export interface GetNetworkSiteResponse {
  networkSite?: NetworkSite;
  tags?: Record<string, string>;
}
export interface GetOrderRequest {
  orderArn: string;
}
export interface GetOrderResponse {
  order: Order;
  tags?: Record<string, string>;
}
export type HealthStatus = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message: string;
}> {}
export interface ListDeviceIdentifiersRequest {
  filters?: Record<string, Array<string>>;
  networkArn: string;
  startToken?: string;
  maxResults?: number;
}
export interface ListDeviceIdentifiersResponse {
  deviceIdentifiers?: Array<DeviceIdentifier>;
  nextToken?: string;
}
export interface ListNetworkResourcesRequest {
  filters?: Record<string, Array<string>>;
  networkArn: string;
  startToken?: string;
  maxResults?: number;
}
export interface ListNetworkResourcesResponse {
  networkResources?: Array<NetworkResource>;
  nextToken?: string;
}
export interface ListNetworkSitesRequest {
  filters?: Record<string, Array<string>>;
  networkArn: string;
  startToken?: string;
  maxResults?: number;
}
export interface ListNetworkSitesResponse {
  networkSites?: Array<NetworkSite>;
  nextToken?: string;
}
export interface ListNetworksRequest {
  filters?: Record<string, Array<string>>;
  startToken?: string;
  maxResults?: number;
}
export interface ListNetworksResponse {
  networks?: Array<Network>;
  nextToken?: string;
}
export interface ListOrdersRequest {
  networkArn: string;
  startToken?: string;
  maxResults?: number;
  filters?: Record<string, Array<string>>;
}
export interface ListOrdersResponse {
  orders?: Array<Order>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type Name = string;

export interface NameValuePair {
  name: string;
  value?: string;
}
export type NameValuePairs = Array<NameValuePair>;
export interface Network {
  networkArn: string;
  networkName: string;
  description?: string;
  status: string;
  statusReason?: string;
  createdAt?: Date | string;
}
export type NetworkFilterKeys = string;

export type NetworkFilters = Record<string, Array<string>>;
export type NetworkFilterValues = Array<string>;
export type NetworkList = Array<Network>;
export interface NetworkResource {
  networkResourceArn?: string;
  description?: string;
  type?: string;
  status?: string;
  statusReason?: string;
  vendor?: string;
  model?: string;
  serialNumber?: string;
  health?: string;
  networkArn?: string;
  networkSiteArn?: string;
  orderArn?: string;
  attributes?: Array<NameValuePair>;
  position?: Position;
  createdAt?: Date | string;
  returnInformation?: ReturnInformation;
  commitmentInformation?: CommitmentInformation;
}
export interface NetworkResourceDefinition {
  type: string;
  options?: Array<NameValuePair>;
  count: number;
}
export type NetworkResourceDefinitions = Array<NetworkResourceDefinition>;
export type NetworkResourceDefinitionType = string;

export type NetworkResourceFilterKeys = string;

export type NetworkResourceFilters = Record<string, Array<string>>;
export type NetworkResourceFilterValues = Array<string>;
export type NetworkResourceList = Array<NetworkResource>;
export type NetworkResourceStatus = string;

export type NetworkResourceType = string;

export interface NetworkSite {
  networkSiteArn: string;
  networkSiteName: string;
  description?: string;
  status: string;
  statusReason?: string;
  networkArn: string;
  pendingPlan?: SitePlan;
  currentPlan?: SitePlan;
  createdAt?: Date | string;
  availabilityZone?: string;
  availabilityZoneId?: string;
}
export type NetworkSiteFilterKeys = string;

export type NetworkSiteFilters = Record<string, Array<string>>;
export type NetworkSiteFilterValues = Array<string>;
export type NetworkSiteList = Array<NetworkSite>;
export type NetworkSiteStatus = string;

export type NetworkStatus = string;

export type Options = Array<NameValuePair>;
export interface Order {
  orderArn?: string;
  shippingAddress?: Address;
  networkArn?: string;
  networkSiteArn?: string;
  trackingInformation?: Array<TrackingInformation>;
  acknowledgmentStatus?: string;
  createdAt?: Date | string;
  orderedResources?: Array<OrderedResourceDefinition>;
}
export interface OrderedResourceDefinition {
  type: string;
  count: number;
  commitmentConfiguration?: CommitmentConfiguration;
}
export type OrderedResourceDefinitions = Array<OrderedResourceDefinition>;
export type OrderFilterKeys = string;

export type OrderFilters = Record<string, Array<string>>;
export type OrderFilterValues = Array<string>;
export type OrderList = Array<Order>;
export type PaginationToken = string;

export interface PingResponse {
  status?: string;
}
export interface Position {
  latitude?: number;
  longitude?: number;
  elevation?: number;
  elevationUnit?: string;
  elevationReference?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface ReturnInformation {
  shippingAddress?: Address;
  returnReason?: string;
  replacementOrderArn?: string;
  shippingLabel?: string;
}
export type SensitiveString = string;

export interface SitePlan {
  resourceDefinitions?: Array<NetworkResourceDefinition>;
  options?: Array<NameValuePair>;
}
export interface StartNetworkResourceUpdateRequest {
  networkResourceArn: string;
  updateType: string;
  shippingAddress?: Address;
  returnReason?: string;
  commitmentConfiguration?: CommitmentConfiguration;
}
export interface StartNetworkResourceUpdateResponse {
  networkResource?: NetworkResource;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Timestamp = Date | string;

export interface TrackingInformation {
  trackingNumber?: string;
}
export type TrackingInformationList = Array<TrackingInformation>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateNetworkSitePlanRequest {
  networkSiteArn: string;
  pendingPlan: SitePlan;
  clientToken?: string;
}
export interface UpdateNetworkSiteRequest {
  networkSiteArn: string;
  clientToken?: string;
  description?: string;
}
export interface UpdateNetworkSiteResponse {
  networkSite?: NetworkSite;
  tags?: Record<string, string>;
}
export type UpdateType = string;

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

export declare namespace AcknowledgeOrderReceipt {
  export type Input = AcknowledgeOrderReceiptRequest;
  export type Output = AcknowledgeOrderReceiptResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ActivateDeviceIdentifier {
  export type Input = ActivateDeviceIdentifierRequest;
  export type Output = ActivateDeviceIdentifierResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ActivateNetworkSite {
  export type Input = ActivateNetworkSiteRequest;
  export type Output = ActivateNetworkSiteResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ConfigureAccessPoint {
  export type Input = ConfigureAccessPointRequest;
  export type Output = ConfigureAccessPointResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateNetwork {
  export type Input = CreateNetworkRequest;
  export type Output = CreateNetworkResponse;
  export type Error =
    | InternalServerException
    | LimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateNetworkSite {
  export type Input = CreateNetworkSiteRequest;
  export type Output = CreateNetworkSiteResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeactivateDeviceIdentifier {
  export type Input = DeactivateDeviceIdentifierRequest;
  export type Output = DeactivateDeviceIdentifierResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteNetwork {
  export type Input = DeleteNetworkRequest;
  export type Output = DeleteNetworkResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteNetworkSite {
  export type Input = DeleteNetworkSiteRequest;
  export type Output = DeleteNetworkSiteResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDeviceIdentifier {
  export type Input = GetDeviceIdentifierRequest;
  export type Output = GetDeviceIdentifierResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNetwork {
  export type Input = GetNetworkRequest;
  export type Output = GetNetworkResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNetworkResource {
  export type Input = GetNetworkResourceRequest;
  export type Output = GetNetworkResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNetworkSite {
  export type Input = GetNetworkSiteRequest;
  export type Output = GetNetworkSiteResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOrder {
  export type Input = GetOrderRequest;
  export type Output = GetOrderResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDeviceIdentifiers {
  export type Input = ListDeviceIdentifiersRequest;
  export type Output = ListDeviceIdentifiersResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNetworkResources {
  export type Input = ListNetworkResourcesRequest;
  export type Output = ListNetworkResourcesResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNetworks {
  export type Input = ListNetworksRequest;
  export type Output = ListNetworksResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNetworkSites {
  export type Input = ListNetworkSitesRequest;
  export type Output = ListNetworkSitesResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOrders {
  export type Input = ListOrdersRequest;
  export type Output = ListOrdersResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
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

export declare namespace Ping {
  export type Input = {};
  export type Output = PingResponse;
  export type Error =
    | InternalServerException
    | CommonAwsError;
}

export declare namespace StartNetworkResourceUpdate {
  export type Input = StartNetworkResourceUpdateRequest;
  export type Output = StartNetworkResourceUpdateResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
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

export declare namespace UpdateNetworkSite {
  export type Input = UpdateNetworkSiteRequest;
  export type Output = UpdateNetworkSiteResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateNetworkSitePlan {
  export type Input = UpdateNetworkSitePlanRequest;
  export type Output = UpdateNetworkSiteResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}


import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type {
  AccessDeniedException,
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
  | AccessDeniedException
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
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class LicenseManagerLinuxSubscriptions extends AWSServiceClient {
  deregisterSubscriptionProvider(
    input: DeregisterSubscriptionProviderRequest,
  ): Effect.Effect<
    DeregisterSubscriptionProviderResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRegisteredSubscriptionProvider(
    input: GetRegisteredSubscriptionProviderRequest,
  ): Effect.Effect<
    GetRegisteredSubscriptionProviderResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getServiceSettings(
    input: GetServiceSettingsRequest,
  ): Effect.Effect<
    GetServiceSettingsResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLinuxSubscriptionInstances(
    input: ListLinuxSubscriptionInstancesRequest,
  ): Effect.Effect<
    ListLinuxSubscriptionInstancesResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLinuxSubscriptions(
    input: ListLinuxSubscriptionsRequest,
  ): Effect.Effect<
    ListLinuxSubscriptionsResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRegisteredSubscriptionProviders(
    input: ListRegisteredSubscriptionProvidersRequest,
  ): Effect.Effect<
    ListRegisteredSubscriptionProvidersResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  registerSubscriptionProvider(
    input: RegisterSubscriptionProviderRequest,
  ): Effect.Effect<
    RegisterSubscriptionProviderResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  updateServiceSettings(
    input: UpdateServiceSettingsRequest,
  ): Effect.Effect<
    UpdateServiceSettingsResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type BoxInteger = number;

export type BoxLong = number;

export interface DeregisterSubscriptionProviderRequest {
  SubscriptionProviderArn: string;
}
export interface DeregisterSubscriptionProviderResponse {}
export interface Filter {
  Name?: string;
  Values?: Array<string>;
  Operator?: string;
}
export type FilterList = Array<Filter>;
export interface GetRegisteredSubscriptionProviderRequest {
  SubscriptionProviderArn: string;
}
export interface GetRegisteredSubscriptionProviderResponse {
  SubscriptionProviderArn?: string;
  SubscriptionProviderSource?: string;
  SecretArn?: string;
  SubscriptionProviderStatus?: string;
  SubscriptionProviderStatusMessage?: string;
  LastSuccessfulDataRetrievalTime?: string;
}
export interface GetServiceSettingsRequest {}
export interface GetServiceSettingsResponse {
  LinuxSubscriptionsDiscovery?: string;
  LinuxSubscriptionsDiscoverySettings?: LinuxSubscriptionsDiscoverySettings;
  Status?: string;
  StatusMessage?: Record<string, string>;
  HomeRegions?: Array<string>;
}
export interface Instance {
  AmiId?: string;
  InstanceID?: string;
  InstanceType?: string;
  AccountID?: string;
  Status?: string;
  Region?: string;
  UsageOperation?: string;
  ProductCode?: Array<string>;
  LastUpdatedTime?: string;
  SubscriptionName?: string;
  OsVersion?: string;
  SubscriptionProviderCreateTime?: string;
  SubscriptionProviderUpdateTime?: string;
  DualSubscription?: string;
  RegisteredWithSubscriptionProvider?: string;
}
export type InstanceList = Array<Instance>;
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type LinuxSubscriptionsDiscovery = string;

export interface LinuxSubscriptionsDiscoverySettings {
  SourceRegions: Array<string>;
  OrganizationIntegration: string;
}
export interface ListLinuxSubscriptionInstancesRequest {
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListLinuxSubscriptionInstancesResponse {
  Instances?: Array<Instance>;
  NextToken?: string;
}
export interface ListLinuxSubscriptionsRequest {
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListLinuxSubscriptionsResponse {
  Subscriptions?: Array<Subscription>;
  NextToken?: string;
}
export interface ListRegisteredSubscriptionProvidersRequest {
  SubscriptionProviderSources?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRegisteredSubscriptionProvidersResponse {
  RegisteredSubscriptionProviders?: Array<RegisteredSubscriptionProvider>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type Operator = string;

export type OrganizationIntegration = string;

export type ProductCodeList = Array<string>;
export interface RegisteredSubscriptionProvider {
  SubscriptionProviderArn?: string;
  SubscriptionProviderSource?: string;
  SecretArn?: string;
  SubscriptionProviderStatus?: string;
  SubscriptionProviderStatusMessage?: string;
  LastSuccessfulDataRetrievalTime?: string;
}
export type RegisteredSubscriptionProviderList =
  Array<RegisteredSubscriptionProvider>;
export interface RegisterSubscriptionProviderRequest {
  SubscriptionProviderSource: string;
  SecretArn: string;
  Tags?: Record<string, string>;
}
export interface RegisterSubscriptionProviderResponse {
  SubscriptionProviderSource?: string;
  SubscriptionProviderArn?: string;
  SubscriptionProviderStatus?: string;
}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type SecretArn = string;

export type Status = string;

export type StringList = Array<string>;
export type StringMap = Record<string, string>;
export interface Subscription {
  Name?: string;
  Type?: string;
  InstanceCount?: number;
}
export type SubscriptionList = Array<Subscription>;
export type SubscriptionProviderArn = string;

export type SubscriptionProviderSource = string;

export type SubscriptionProviderSourceList = Array<string>;
export type SubscriptionProviderStatus = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateServiceSettingsRequest {
  LinuxSubscriptionsDiscovery: string;
  LinuxSubscriptionsDiscoverySettings: LinuxSubscriptionsDiscoverySettings;
  AllowUpdate?: boolean;
}
export interface UpdateServiceSettingsResponse {
  LinuxSubscriptionsDiscovery?: string;
  LinuxSubscriptionsDiscoverySettings?: LinuxSubscriptionsDiscoverySettings;
  Status?: string;
  StatusMessage?: Record<string, string>;
  HomeRegions?: Array<string>;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace DeregisterSubscriptionProvider {
  export type Input = DeregisterSubscriptionProviderRequest;
  export type Output = DeregisterSubscriptionProviderResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRegisteredSubscriptionProvider {
  export type Input = GetRegisteredSubscriptionProviderRequest;
  export type Output = GetRegisteredSubscriptionProviderResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServiceSettings {
  export type Input = GetServiceSettingsRequest;
  export type Output = GetServiceSettingsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLinuxSubscriptionInstances {
  export type Input = ListLinuxSubscriptionInstancesRequest;
  export type Output = ListLinuxSubscriptionInstancesResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLinuxSubscriptions {
  export type Input = ListLinuxSubscriptionsRequest;
  export type Output = ListLinuxSubscriptionsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRegisteredSubscriptionProviders {
  export type Input = ListRegisteredSubscriptionProvidersRequest;
  export type Output = ListRegisteredSubscriptionProvidersResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterSubscriptionProvider {
  export type Input = RegisterSubscriptionProviderRequest;
  export type Output = RegisterSubscriptionProviderResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateServiceSettings {
  export type Input = UpdateServiceSettingsRequest;
  export type Output = UpdateServiceSettingsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type LicenseManagerLinuxSubscriptionsErrors =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;

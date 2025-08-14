import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class MigrationHubRefactorSpaces extends AWSServiceClient {
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createEnvironment(
    input: CreateEnvironmentRequest,
  ): Effect.Effect<
    CreateEnvironmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRoute(
    input: CreateRouteRequest,
  ): Effect.Effect<
    CreateRouteResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createService(
    input: CreateServiceRequest,
  ): Effect.Effect<
    CreateServiceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    DeleteApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEnvironment(
    input: DeleteEnvironmentRequest,
  ): Effect.Effect<
    DeleteEnvironmentResponse,
    | AccessDeniedException
    | ConflictException
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
  deleteRoute(
    input: DeleteRouteRequest,
  ): Effect.Effect<
    DeleteRouteResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteService(
    input: DeleteServiceRequest,
  ): Effect.Effect<
    DeleteServiceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getApplication(
    input: GetApplicationRequest,
  ): Effect.Effect<
    GetApplicationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEnvironment(
    input: GetEnvironmentRequest,
  ): Effect.Effect<
    GetEnvironmentResponse,
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
  getRoute(
    input: GetRouteRequest,
  ): Effect.Effect<
    GetRouteResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getService(
    input: GetServiceRequest,
  ): Effect.Effect<
    GetServiceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    ListApplicationsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEnvironments(
    input: ListEnvironmentsRequest,
  ): Effect.Effect<
    ListEnvironmentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEnvironmentVpcs(
    input: ListEnvironmentVpcsRequest,
  ): Effect.Effect<
    ListEnvironmentVpcsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRoutes(
    input: ListRoutesRequest,
  ): Effect.Effect<
    ListRoutesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listServices(
    input: ListServicesRequest,
  ): Effect.Effect<
    ListServicesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
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
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidResourcePolicyException
    | ResourceNotFoundException
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
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateRoute(
    input: UpdateRouteRequest,
  ): Effect.Effect<
    UpdateRouteResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export type AccountId = string;

export type AdditionalDetails = Partial<Record<string, string>>;
export type AdditionalDetailsKey = string;

export type AdditionalDetailsValue = string;

export type ApiGatewayEndpointType = string;

export type ApiGatewayId = string;

export interface ApiGatewayProxyConfig {
  ProxyUrl?: string;
  ApiGatewayId?: string;
  VpcLinkId?: string;
  NlbArn?: string;
  NlbName?: string;
  EndpointType?: string;
  StageName?: string;
}
export interface ApiGatewayProxyInput {
  EndpointType?: string;
  StageName?: string;
}
export interface ApiGatewayProxySummary {
  ProxyUrl?: string;
  ApiGatewayId?: string;
  VpcLinkId?: string;
  NlbArn?: string;
  NlbName?: string;
  EndpointType?: string;
  StageName?: string;
}
export type ApplicationId = string;

export type ApplicationName = string;

export type ApplicationState = string;

export type ApplicationSummaries = Array<ApplicationSummary>;
export interface ApplicationSummary {
  Name?: string;
  Arn?: string;
  OwnerAccountId?: string;
  CreatedByAccountId?: string;
  ApplicationId?: string;
  EnvironmentId?: string;
  VpcId?: string;
  ProxyType?: string;
  ApiGatewayProxy?: ApiGatewayProxySummary;
  State?: string;
  Tags?: Partial<Record<string, string>>;
  Error?: ErrorResponse;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
}
export type MigrationHubRefactorSpacesBoolean = boolean;

export type CidrBlock = string;

export type CidrBlocks = Array<string>;
export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export interface CreateApplicationRequest {
  Name: string;
  EnvironmentIdentifier: string;
  VpcId: string;
  ProxyType: string;
  ApiGatewayProxy?: ApiGatewayProxyInput;
  Tags?: Partial<Record<string, string>>;
  ClientToken?: string;
}
export interface CreateApplicationResponse {
  Name?: string;
  Arn?: string;
  OwnerAccountId?: string;
  CreatedByAccountId?: string;
  ApplicationId?: string;
  EnvironmentId?: string;
  VpcId?: string;
  ProxyType?: string;
  ApiGatewayProxy?: ApiGatewayProxyInput;
  State?: string;
  Tags?: Partial<Record<string, string>>;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
}
export interface CreateEnvironmentRequest {
  Name: string;
  Description?: string;
  NetworkFabricType: string;
  Tags?: Partial<Record<string, string>>;
  ClientToken?: string;
}
export interface CreateEnvironmentResponse {
  Name?: string;
  Arn?: string;
  Description?: string;
  EnvironmentId?: string;
  NetworkFabricType?: string;
  OwnerAccountId?: string;
  State?: string;
  Tags?: Partial<Record<string, string>>;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
}
export interface CreateRouteRequest {
  EnvironmentIdentifier: string;
  ApplicationIdentifier: string;
  ServiceIdentifier: string;
  RouteType: string;
  DefaultRoute?: DefaultRouteInput;
  UriPathRoute?: UriPathRouteInput;
  Tags?: Partial<Record<string, string>>;
  ClientToken?: string;
}
export interface CreateRouteResponse {
  RouteId?: string;
  Arn?: string;
  OwnerAccountId?: string;
  CreatedByAccountId?: string;
  RouteType?: string;
  ServiceId?: string;
  ApplicationId?: string;
  UriPathRoute?: UriPathRouteInput;
  State?: string;
  Tags?: Partial<Record<string, string>>;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
}
export interface CreateServiceRequest {
  Name: string;
  Description?: string;
  EnvironmentIdentifier: string;
  ApplicationIdentifier: string;
  VpcId?: string;
  EndpointType: string;
  UrlEndpoint?: UrlEndpointInput;
  LambdaEndpoint?: LambdaEndpointInput;
  Tags?: Partial<Record<string, string>>;
  ClientToken?: string;
}
export interface CreateServiceResponse {
  ServiceId?: string;
  Name?: string;
  Arn?: string;
  OwnerAccountId?: string;
  CreatedByAccountId?: string;
  Description?: string;
  EnvironmentId?: string;
  ApplicationId?: string;
  VpcId?: string;
  EndpointType?: string;
  UrlEndpoint?: UrlEndpointInput;
  LambdaEndpoint?: LambdaEndpointInput;
  State?: string;
  Tags?: Partial<Record<string, string>>;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
}
export interface DefaultRouteInput {
  ActivationState?: string;
}
export interface DeleteApplicationRequest {
  EnvironmentIdentifier: string;
  ApplicationIdentifier: string;
}
export interface DeleteApplicationResponse {
  Name?: string;
  Arn?: string;
  ApplicationId?: string;
  EnvironmentId?: string;
  State?: string;
  LastUpdatedTime?: Date | string;
}
export interface DeleteEnvironmentRequest {
  EnvironmentIdentifier: string;
}
export interface DeleteEnvironmentResponse {
  Name?: string;
  Arn?: string;
  EnvironmentId?: string;
  State?: string;
  LastUpdatedTime?: Date | string;
}
export interface DeleteResourcePolicyRequest {
  Identifier: string;
}
export interface DeleteResourcePolicyResponse {}
export interface DeleteRouteRequest {
  EnvironmentIdentifier: string;
  ApplicationIdentifier: string;
  RouteIdentifier: string;
}
export interface DeleteRouteResponse {
  RouteId?: string;
  Arn?: string;
  ServiceId?: string;
  ApplicationId?: string;
  State?: string;
  LastUpdatedTime?: Date | string;
}
export interface DeleteServiceRequest {
  EnvironmentIdentifier: string;
  ApplicationIdentifier: string;
  ServiceIdentifier: string;
}
export interface DeleteServiceResponse {
  ServiceId?: string;
  Name?: string;
  Arn?: string;
  EnvironmentId?: string;
  ApplicationId?: string;
  State?: string;
  LastUpdatedTime?: Date | string;
}
export type Description = string;

export type Ec2TagValue = string;

export type EnvironmentId = string;

export type EnvironmentName = string;

export type EnvironmentState = string;

export type EnvironmentSummaries = Array<EnvironmentSummary>;
export interface EnvironmentSummary {
  Name?: string;
  Arn?: string;
  Description?: string;
  EnvironmentId?: string;
  NetworkFabricType?: string;
  OwnerAccountId?: string;
  TransitGatewayId?: string;
  State?: string;
  Tags?: Partial<Record<string, string>>;
  Error?: ErrorResponse;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
}
export interface EnvironmentVpc {
  EnvironmentId?: string;
  VpcId?: string;
  AccountId?: string;
  CidrBlocks?: Array<string>;
  VpcName?: string;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
}
export type EnvironmentVpcs = Array<EnvironmentVpc>;
export type ErrorCode = string;

export type ErrorMessage = string;

export type ErrorResourceType = string;

export interface ErrorResponse {
  Code?: string;
  Message?: string;
  AccountId?: string;
  ResourceIdentifier?: string;
  ResourceType?: string;
  AdditionalDetails?: Partial<Record<string, string>>;
}
export interface GetApplicationRequest {
  EnvironmentIdentifier: string;
  ApplicationIdentifier: string;
}
export interface GetApplicationResponse {
  Name?: string;
  Arn?: string;
  OwnerAccountId?: string;
  CreatedByAccountId?: string;
  ApplicationId?: string;
  EnvironmentId?: string;
  VpcId?: string;
  ProxyType?: string;
  ApiGatewayProxy?: ApiGatewayProxyConfig;
  State?: string;
  Tags?: Partial<Record<string, string>>;
  Error?: ErrorResponse;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
}
export interface GetEnvironmentRequest {
  EnvironmentIdentifier: string;
}
export interface GetEnvironmentResponse {
  Name?: string;
  Arn?: string;
  Description?: string;
  EnvironmentId?: string;
  NetworkFabricType?: string;
  OwnerAccountId?: string;
  TransitGatewayId?: string;
  State?: string;
  Tags?: Partial<Record<string, string>>;
  Error?: ErrorResponse;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
}
export interface GetResourcePolicyRequest {
  Identifier: string;
}
export interface GetResourcePolicyResponse {
  Policy?: string;
}
export interface GetRouteRequest {
  EnvironmentIdentifier: string;
  ApplicationIdentifier: string;
  RouteIdentifier: string;
}
export interface GetRouteResponse {
  RouteId?: string;
  Arn?: string;
  OwnerAccountId?: string;
  CreatedByAccountId?: string;
  RouteType?: string;
  ServiceId?: string;
  ApplicationId?: string;
  EnvironmentId?: string;
  SourcePath?: string;
  Methods?: Array<string>;
  IncludeChildPaths?: boolean;
  PathResourceToId?: Partial<Record<string, string>>;
  State?: string;
  Tags?: Partial<Record<string, string>>;
  Error?: ErrorResponse;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
  AppendSourcePath?: boolean;
}
export interface GetServiceRequest {
  EnvironmentIdentifier: string;
  ApplicationIdentifier: string;
  ServiceIdentifier: string;
}
export interface GetServiceResponse {
  ServiceId?: string;
  Name?: string;
  Arn?: string;
  OwnerAccountId?: string;
  CreatedByAccountId?: string;
  Description?: string;
  EnvironmentId?: string;
  ApplicationId?: string;
  VpcId?: string;
  EndpointType?: string;
  UrlEndpoint?: UrlEndpointConfig;
  LambdaEndpoint?: LambdaEndpointConfig;
  State?: string;
  Tags?: Partial<Record<string, string>>;
  Error?: ErrorResponse;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
}
export type HttpMethod = string;

export type HttpMethods = Array<string>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export declare class InvalidResourcePolicyException extends EffectData.TaggedError(
  "InvalidResourcePolicyException",
)<{
  readonly Message: string;
}> {}
export type LambdaArn = string;

export interface LambdaEndpointConfig {
  Arn?: string;
}
export interface LambdaEndpointInput {
  Arn: string;
}
export interface LambdaEndpointSummary {
  Arn?: string;
}
export interface ListApplicationsRequest {
  EnvironmentIdentifier: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListApplicationsResponse {
  ApplicationSummaryList?: Array<ApplicationSummary>;
  NextToken?: string;
}
export interface ListEnvironmentsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEnvironmentsResponse {
  EnvironmentSummaryList?: Array<EnvironmentSummary>;
  NextToken?: string;
}
export interface ListEnvironmentVpcsRequest {
  EnvironmentIdentifier: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEnvironmentVpcsResponse {
  EnvironmentVpcList?: Array<EnvironmentVpc>;
  NextToken?: string;
}
export interface ListRoutesRequest {
  EnvironmentIdentifier: string;
  ApplicationIdentifier: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRoutesResponse {
  RouteSummaryList?: Array<RouteSummary>;
  NextToken?: string;
}
export interface ListServicesRequest {
  EnvironmentIdentifier: string;
  ApplicationIdentifier: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListServicesResponse {
  ServiceSummaryList?: Array<ServiceSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Partial<Record<string, string>>;
}
export type MaxResults = number;

export type NetworkFabricType = string;

export type NextToken = string;

export type NlbArn = string;

export type NlbName = string;

export type PathResourceToId = Partial<Record<string, string>>;
export type PathResourceToIdKey = string;

export type PathResourceToIdValue = string;

export type PolicyString = string;

export type ProxyType = string;

export interface PutResourcePolicyRequest {
  ResourceArn: string;
  Policy: string;
}
export interface PutResourcePolicyResponse {}
export type ResourceArn = string;

export type ResourceIdentifier = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export type ResourcePolicyIdentifier = string;

export type RetryAfterSeconds = number;

export type RouteActivationState = string;

export type RouteId = string;

export type RouteState = string;

export type RouteSummaries = Array<RouteSummary>;
export interface RouteSummary {
  RouteId?: string;
  Arn?: string;
  OwnerAccountId?: string;
  CreatedByAccountId?: string;
  RouteType?: string;
  ServiceId?: string;
  ApplicationId?: string;
  EnvironmentId?: string;
  SourcePath?: string;
  Methods?: Array<string>;
  IncludeChildPaths?: boolean;
  PathResourceToId?: Partial<Record<string, string>>;
  State?: string;
  Tags?: Partial<Record<string, string>>;
  Error?: ErrorResponse;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
  AppendSourcePath?: boolean;
}
export type RouteType = string;

export type ServiceEndpointType = string;

export type ServiceId = string;

export type ServiceName = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
  readonly QuotaCode?: string;
  readonly ServiceCode: string;
}> {}
export type ServiceState = string;

export type ServiceSummaries = Array<ServiceSummary>;
export interface ServiceSummary {
  ServiceId?: string;
  Name?: string;
  Arn?: string;
  OwnerAccountId?: string;
  CreatedByAccountId?: string;
  Description?: string;
  EnvironmentId?: string;
  ApplicationId?: string;
  VpcId?: string;
  EndpointType?: string;
  UrlEndpoint?: UrlEndpointSummary;
  LambdaEndpoint?: LambdaEndpointSummary;
  State?: string;
  Tags?: Partial<Record<string, string>>;
  Error?: ErrorResponse;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
}
export type StageName = string;

export type MigrationHubRefactorSpacesString = string;

export type TagKeys = Array<string>;
export type TagMap = Partial<Record<string, string>>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Partial<Record<string, string>>;
}
export interface TagResourceResponse {}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly QuotaCode?: string;
  readonly ServiceCode?: string;
  readonly RetryAfterSeconds?: number;
}> {}
export type Timestamp = Date | string;

export type TransitGatewayId = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateRouteRequest {
  EnvironmentIdentifier: string;
  ApplicationIdentifier: string;
  RouteIdentifier: string;
  ActivationState: string;
}
export interface UpdateRouteResponse {
  RouteId?: string;
  Arn?: string;
  ServiceId?: string;
  ApplicationId?: string;
  State?: string;
  LastUpdatedTime?: Date | string;
}
export type Uri = string;

export type UriPath = string;

export interface UriPathRouteInput {
  SourcePath: string;
  ActivationState: string;
  Methods?: Array<string>;
  IncludeChildPaths?: boolean;
  AppendSourcePath?: boolean;
}
export interface UrlEndpointConfig {
  Url?: string;
  HealthUrl?: string;
}
export interface UrlEndpointInput {
  Url: string;
  HealthUrl?: string;
}
export interface UrlEndpointSummary {
  Url?: string;
  HealthUrl?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
}> {}
export type VpcId = string;

export type VpcLinkId = string;

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResponse;
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

export declare namespace CreateEnvironment {
  export type Input = CreateEnvironmentRequest;
  export type Output = CreateEnvironmentResponse;
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

export declare namespace CreateRoute {
  export type Input = CreateRouteRequest;
  export type Output = CreateRouteResponse;
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

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = DeleteApplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEnvironment {
  export type Input = DeleteEnvironmentRequest;
  export type Output = DeleteEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
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

export declare namespace DeleteRoute {
  export type Input = DeleteRouteRequest;
  export type Output = DeleteRouteResponse;
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

export declare namespace GetApplication {
  export type Input = GetApplicationRequest;
  export type Output = GetApplicationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnvironment {
  export type Input = GetEnvironmentRequest;
  export type Output = GetEnvironmentResponse;
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

export declare namespace GetRoute {
  export type Input = GetRouteRequest;
  export type Output = GetRouteResponse;
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

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = ListApplicationsResponse;
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

export declare namespace ListEnvironments {
  export type Input = ListEnvironmentsRequest;
  export type Output = ListEnvironmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironmentVpcs {
  export type Input = ListEnvironmentVpcsRequest;
  export type Output = ListEnvironmentVpcsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRoutes {
  export type Input = ListRoutesRequest;
  export type Output = ListRoutesResponse;
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

export declare namespace ListServices {
  export type Input = ListServicesRequest;
  export type Output = ListServicesResponse;
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

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidResourcePolicyException
    | ResourceNotFoundException
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
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRoute {
  export type Input = UpdateRouteRequest;
  export type Output = UpdateRouteResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

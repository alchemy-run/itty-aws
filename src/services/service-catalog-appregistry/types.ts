import type { Effect, Data as EffectData } from "effect";
import type { AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = AccessDeniedException | ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class ServiceCatalogAppRegistry extends AWSServiceClient {
  associateAttributeGroup(
    input: AssociateAttributeGroupRequest,
  ): Effect.Effect<
    AssociateAttributeGroupResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  associateResource(
    input: AssociateResourceRequest,
  ): Effect.Effect<
    AssociateResourceResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResponse,
    ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createAttributeGroup(
    input: CreateAttributeGroupRequest,
  ): Effect.Effect<
    CreateAttributeGroupResponse,
    ConflictException | InternalServerException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    DeleteApplicationResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteAttributeGroup(
    input: DeleteAttributeGroupRequest,
  ): Effect.Effect<
    DeleteAttributeGroupResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  disassociateAttributeGroup(
    input: DisassociateAttributeGroupRequest,
  ): Effect.Effect<
    DisassociateAttributeGroupResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  disassociateResource(
    input: DisassociateResourceRequest,
  ): Effect.Effect<
    DisassociateResourceResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getApplication(
    input: GetApplicationRequest,
  ): Effect.Effect<
    GetApplicationResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getAssociatedResource(
    input: GetAssociatedResourceRequest,
  ): Effect.Effect<
    GetAssociatedResourceResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getAttributeGroup(
    input: GetAttributeGroupRequest,
  ): Effect.Effect<
    GetAttributeGroupResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getConfiguration(
    input: {},
  ): Effect.Effect<
    GetConfigurationResponse,
    InternalServerException | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    ListApplicationsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listAssociatedAttributeGroups(
    input: ListAssociatedAttributeGroupsRequest,
  ): Effect.Effect<
    ListAssociatedAttributeGroupsResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listAssociatedResources(
    input: ListAssociatedResourcesRequest,
  ): Effect.Effect<
    ListAssociatedResourcesResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listAttributeGroups(
    input: ListAttributeGroupsRequest,
  ): Effect.Effect<
    ListAttributeGroupsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listAttributeGroupsForApplication(
    input: ListAttributeGroupsForApplicationRequest,
  ): Effect.Effect<
    ListAttributeGroupsForApplicationResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  putConfiguration(
    input: PutConfigurationRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ValidationException | CommonAwsError
  >;
  syncResource(
    input: SyncResourceRequest,
  ): Effect.Effect<
    SyncResourceResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    UpdateApplicationResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateAttributeGroup(
    input: UpdateAttributeGroupRequest,
  ): Effect.Effect<
    UpdateAttributeGroupResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export declare class ServiceCatalogAppregistry extends ServiceCatalogAppRegistry {}

export interface Application {
  id?: string;
  arn?: string;
  name?: string;
  description?: string;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  tags?: Record<string, string>;
  applicationTag?: Record<string, string>;
}
export type ApplicationArn = string;

export type ApplicationId = string;

export type ApplicationSpecifier = string;

export type ApplicationSummaries = Array<ApplicationSummary>;
export interface ApplicationSummary {
  id?: string;
  arn?: string;
  name?: string;
  description?: string;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
}
export type ApplicationTagDefinition = Record<string, string>;
export interface ApplicationTagResult {
  applicationTagStatus?: ApplicationTagStatus;
  errorMessage?: string;
  resources?: Array<ResourcesListItem>;
  nextToken?: string;
}
export type ApplicationTagStatus = "IN_PROGRESS" | "SUCCESS" | "FAILURE";
export interface AppRegistryConfiguration {
  tagQueryConfiguration?: TagQueryConfiguration;
}
export type Arn = string;

export interface AssociateAttributeGroupRequest {
  application: string;
  attributeGroup: string;
}
export interface AssociateAttributeGroupResponse {
  applicationArn?: string;
  attributeGroupArn?: string;
}
export interface AssociateResourceRequest {
  application: string;
  resourceType: ResourceType;
  resource: string;
  options?: Array<AssociationOption>;
}
export interface AssociateResourceResponse {
  applicationArn?: string;
  resourceArn?: string;
  options?: Array<AssociationOption>;
}
export type AssociationCount = number;

export type AssociationOption = "APPLY_APPLICATION_TAG" | "SKIP_APPLICATION_TAG";
export interface AttributeGroup {
  id?: string;
  arn?: string;
  name?: string;
  description?: string;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  tags?: Record<string, string>;
}
export type AttributeGroupArn = string;

export interface AttributeGroupDetails {
  id?: string;
  arn?: string;
  name?: string;
  createdBy?: string;
}
export type AttributeGroupDetailsList = Array<AttributeGroupDetails>;
export type AttributeGroupId = string;

export type AttributeGroupIds = Array<string>;
export type AttributeGroupSpecifier = string;

export type AttributeGroupSummaries = Array<AttributeGroupSummary>;
export interface AttributeGroupSummary {
  id?: string;
  arn?: string;
  name?: string;
  description?: string;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  createdBy?: string;
}
export type Attributes = string;

export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateApplicationRequest {
  name: string;
  description?: string;
  tags?: Record<string, string>;
  clientToken: string;
}
export interface CreateApplicationResponse {
  application?: Application;
}
export interface CreateAttributeGroupRequest {
  name: string;
  description?: string;
  attributes: string;
  tags?: Record<string, string>;
  clientToken: string;
}
export interface CreateAttributeGroupResponse {
  attributeGroup?: AttributeGroup;
}
export type CreatedBy = string;

export interface DeleteApplicationRequest {
  application: string;
}
export interface DeleteApplicationResponse {
  application?: ApplicationSummary;
}
export interface DeleteAttributeGroupRequest {
  attributeGroup: string;
}
export interface DeleteAttributeGroupResponse {
  attributeGroup?: AttributeGroupSummary;
}
export type Description = string;

export interface DisassociateAttributeGroupRequest {
  application: string;
  attributeGroup: string;
}
export interface DisassociateAttributeGroupResponse {
  applicationArn?: string;
  attributeGroupArn?: string;
}
export interface DisassociateResourceRequest {
  application: string;
  resourceType: ResourceType;
  resource: string;
}
export interface DisassociateResourceResponse {
  applicationArn?: string;
  resourceArn?: string;
}
export interface GetApplicationRequest {
  application: string;
}
export interface GetApplicationResponse {
  id?: string;
  arn?: string;
  name?: string;
  description?: string;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  associatedResourceCount?: number;
  tags?: Record<string, string>;
  integrations?: Integrations;
  applicationTag?: Record<string, string>;
}
export type GetAssociatedResourceFilter = Array<ResourceItemStatus>;
export interface GetAssociatedResourceRequest {
  application: string;
  resourceType: ResourceType;
  resource: string;
  nextToken?: string;
  resourceTagStatus?: Array<ResourceItemStatus>;
  maxResults?: number;
}
export interface GetAssociatedResourceResponse {
  resource?: Resource;
  options?: Array<AssociationOption>;
  applicationTagResult?: ApplicationTagResult;
}
export interface GetAttributeGroupRequest {
  attributeGroup: string;
}
export interface GetAttributeGroupResponse {
  id?: string;
  arn?: string;
  name?: string;
  description?: string;
  attributes?: string;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  tags?: Record<string, string>;
  createdBy?: string;
}
export interface GetConfigurationResponse {
  configuration?: AppRegistryConfiguration;
}
export interface Integrations {
  resourceGroup?: ResourceGroup;
  applicationTagResourceGroup?: ResourceGroup;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface ListApplicationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListApplicationsResponse {
  applications?: Array<ApplicationSummary>;
  nextToken?: string;
}
export interface ListAssociatedAttributeGroupsRequest {
  application: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssociatedAttributeGroupsResponse {
  attributeGroups?: Array<string>;
  nextToken?: string;
}
export interface ListAssociatedResourcesRequest {
  application: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssociatedResourcesResponse {
  resources?: Array<ResourceInfo>;
  nextToken?: string;
}
export interface ListAttributeGroupsForApplicationRequest {
  application: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAttributeGroupsForApplicationResponse {
  attributeGroupsDetails?: Array<AttributeGroupDetails>;
  nextToken?: string;
}
export interface ListAttributeGroupsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListAttributeGroupsResponse {
  attributeGroups?: Array<AttributeGroupSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MaxResults = number;

export type Name = string;

export type NextToken = string;

export type Options = Array<AssociationOption>;
export interface PutConfigurationRequest {
  configuration: AppRegistryConfiguration;
}
export interface Resource {
  name?: string;
  arn?: string;
  associationTime?: Date | string;
  integrations?: ResourceIntegrations;
}
export interface ResourceDetails {
  tagValue?: string;
}
export interface ResourceGroup {
  state?: ResourceGroupState;
  arn?: string;
  errorMessage?: string;
}
export type ResourceGroupState = "CREATING" | "CREATE_COMPLETE" | "CREATE_FAILED" | "UPDATING" | "UPDATE_COMPLETE" | "UPDATE_FAILED";
export interface ResourceInfo {
  name?: string;
  arn?: string;
  resourceType?: ResourceType;
  resourceDetails?: ResourceDetails;
  options?: Array<AssociationOption>;
}
export interface ResourceIntegrations {
  resourceGroup?: ResourceGroup;
}
export type ResourceItemStatus = "SUCCESS" | "FAILED" | "IN_PROGRESS" | "SKIPPED";
export type ResourceItemType = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type Resources = Array<ResourceInfo>;
export type ResourcesList = Array<ResourcesListItem>;
export interface ResourcesListItem {
  resourceArn?: string;
  errorMessage?: string;
  status?: string;
  resourceType?: string;
}
export type ResourcesListItemErrorMessage = string;

export type ResourceSpecifier = string;

export type ResourceType = "CFN_STACK" | "RESOURCE_TAG_VALUE";
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export type ServiceCatalogAppregistryString = string;

export type SyncAction = "START_SYNC" | "NO_ACTION";
export interface SyncResourceRequest {
  resourceType: ResourceType;
  resource: string;
}
export interface SyncResourceResponse {
  applicationArn?: string;
  resourceArn?: string;
  actionTaken?: SyncAction;
}
export type TagKey = string;

export type TagKeyConfig = string;

export type TagKeys = Array<string>;
export interface TagQueryConfiguration {
  tagKey?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type Tags = Record<string, string>;
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
}> {}
export type Timestamp = Date | string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateApplicationRequest {
  application: string;
  name?: string;
  description?: string;
}
export interface UpdateApplicationResponse {
  application?: Application;
}
export interface UpdateAttributeGroupRequest {
  attributeGroup: string;
  name?: string;
  description?: string;
  attributes?: string;
}
export interface UpdateAttributeGroupResponse {
  attributeGroup?: AttributeGroup;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace AssociateAttributeGroup {
  export type Input = AssociateAttributeGroupRequest;
  export type Output = AssociateAttributeGroupResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateResource {
  export type Input = AssociateResourceRequest;
  export type Output = AssociateResourceResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAttributeGroup {
  export type Input = CreateAttributeGroupRequest;
  export type Output = CreateAttributeGroupResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = DeleteApplicationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAttributeGroup {
  export type Input = DeleteAttributeGroupRequest;
  export type Output = DeleteAttributeGroupResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateAttributeGroup {
  export type Input = DisassociateAttributeGroupRequest;
  export type Output = DisassociateAttributeGroupResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateResource {
  export type Input = DisassociateResourceRequest;
  export type Output = DisassociateResourceResponse;
  export type Error =
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
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAssociatedResource {
  export type Input = GetAssociatedResourceRequest;
  export type Output = GetAssociatedResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAttributeGroup {
  export type Input = GetAttributeGroupRequest;
  export type Output = GetAttributeGroupResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfiguration {
  export type Input = {};
  export type Output = GetConfigurationResponse;
  export type Error =
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = ListApplicationsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssociatedAttributeGroups {
  export type Input = ListAssociatedAttributeGroupsRequest;
  export type Output = ListAssociatedAttributeGroupsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssociatedResources {
  export type Input = ListAssociatedResourcesRequest;
  export type Output = ListAssociatedResourcesResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAttributeGroups {
  export type Input = ListAttributeGroupsRequest;
  export type Output = ListAttributeGroupsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAttributeGroupsForApplication {
  export type Input = ListAttributeGroupsForApplicationRequest;
  export type Output = ListAttributeGroupsForApplicationResponse;
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
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutConfiguration {
  export type Input = PutConfigurationRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SyncResource {
  export type Input = SyncResourceRequest;
  export type Output = SyncResourceResponse;
  export type Error =
    | ConflictException
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

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = UpdateApplicationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAttributeGroup {
  export type Input = UpdateAttributeGroupRequest;
  export type Output = UpdateAttributeGroupResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export type ServiceCatalogAppRegistryErrors = ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError;


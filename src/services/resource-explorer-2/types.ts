import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
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

export declare class ResourceExplorer2 extends AWSServiceClient {
  batchGetView(
    input: BatchGetViewInput,
  ): Effect.Effect<
    BatchGetViewOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  createResourceExplorerSetup(
    input: CreateResourceExplorerSetupInput,
  ): Effect.Effect<
    CreateResourceExplorerSetupOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteResourceExplorerSetup(
    input: DeleteResourceExplorerSetupInput,
  ): Effect.Effect<
    DeleteResourceExplorerSetupOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateDefaultView(input: {}): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAccountLevelServiceConfiguration(input: {}): Effect.Effect<
    GetAccountLevelServiceConfigurationOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getDefaultView(input: {}): Effect.Effect<
    GetDefaultViewOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getIndex(input: {}): Effect.Effect<
    GetIndexOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getManagedView(
    input: GetManagedViewInput,
  ): Effect.Effect<
    GetManagedViewOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getResourceExplorerSetup(
    input: GetResourceExplorerSetupInput,
  ): Effect.Effect<
    GetResourceExplorerSetupOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getServiceIndex(input: {}): Effect.Effect<
    GetServiceIndexOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getServiceView(
    input: GetServiceViewInput,
  ): Effect.Effect<
    GetServiceViewOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listIndexesForMembers(
    input: ListIndexesForMembersInput,
  ): Effect.Effect<
    ListIndexesForMembersOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listManagedViews(
    input: ListManagedViewsInput,
  ): Effect.Effect<
    ListManagedViewsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listResources(
    input: ListResourcesInput,
  ): Effect.Effect<
    ListResourcesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listServiceIndexes(
    input: ListServiceIndexesInput,
  ): Effect.Effect<
    ListServiceIndexesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listServiceViews(
    input: ListServiceViewsInput,
  ): Effect.Effect<
    ListServiceViewsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listStreamingAccessForServices(
    input: ListStreamingAccessForServicesInput,
  ): Effect.Effect<
    ListStreamingAccessForServicesOutput,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listSupportedResourceTypes(
    input: ListSupportedResourceTypesInput,
  ): Effect.Effect<
    ListSupportedResourceTypesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  search(
    input: SearchInput,
  ): Effect.Effect<
    SearchOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  associateDefaultView(
    input: AssociateDefaultViewInput,
  ): Effect.Effect<
    AssociateDefaultViewOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createIndex(
    input: CreateIndexInput,
  ): Effect.Effect<
    CreateIndexOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createView(
    input: CreateViewInput,
  ): Effect.Effect<
    CreateViewOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  deleteIndex(
    input: DeleteIndexInput,
  ): Effect.Effect<
    DeleteIndexOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteView(
    input: DeleteViewInput,
  ): Effect.Effect<
    DeleteViewOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getView(
    input: GetViewInput,
  ): Effect.Effect<
    GetViewOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listIndexes(
    input: ListIndexesInput,
  ): Effect.Effect<
    ListIndexesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listViews(
    input: ListViewsInput,
  ): Effect.Effect<
    ListViewsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateIndexType(
    input: UpdateIndexTypeInput,
  ): Effect.Effect<
    UpdateIndexTypeOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateView(
    input: UpdateViewInput,
  ): Effect.Effect<
    UpdateViewOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccountId = string;

export type AccountIdList = Array<string>;
export interface AssociateDefaultViewInput {
  ViewArn: string;
}
export interface AssociateDefaultViewOutput {
  ViewArn?: string;
}
export type AWSServiceAccessStatus = string;

export interface BatchGetViewError {
  ViewArn: string;
  ErrorMessage: string;
}
export type BatchGetViewErrors = Array<BatchGetViewError>;
export interface BatchGetViewInput {
  ViewArns?: Array<string>;
}
export interface BatchGetViewOutput {
  Views?: Array<View>;
  Errors?: Array<BatchGetViewError>;
}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
}> {}
export interface CreateIndexInput {
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateIndexOutput {
  Arn?: string;
  State?: string;
  CreatedAt?: Date | string;
}
export interface CreateResourceExplorerSetupInput {
  RegionList: Array<string>;
  AggregatorRegions?: Array<string>;
  ViewName: string;
}
export interface CreateResourceExplorerSetupOutput {
  TaskId: string;
}
export interface CreateViewInput {
  ClientToken?: string;
  ViewName: string;
  IncludedProperties?: Array<IncludedProperty>;
  Scope?: string;
  Filters?: SearchFilter;
  Tags?: Record<string, string>;
}
export interface CreateViewOutput {
  View?: View;
}
export interface DeleteIndexInput {
  Arn: string;
}
export interface DeleteIndexOutput {
  Arn?: string;
  State?: string;
  LastUpdatedAt?: Date | string;
}
export interface DeleteResourceExplorerSetupInput {
  RegionList?: Array<string>;
  DeleteInAllRegions?: boolean;
}
export interface DeleteResourceExplorerSetupOutput {
  TaskId: string;
}
export interface DeleteViewInput {
  ViewArn: string;
}
export interface DeleteViewOutput {
  ViewArn?: string;
}
export interface ErrorDetails {
  Code?: string;
  Message?: string;
}
export interface GetAccountLevelServiceConfigurationOutput {
  OrgConfiguration?: OrgConfiguration;
}
export interface GetDefaultViewOutput {
  ViewArn?: string;
}
export interface GetIndexOutput {
  Arn?: string;
  Type?: string;
  State?: string;
  ReplicatingFrom?: Array<string>;
  ReplicatingTo?: Array<string>;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Tags?: Record<string, string>;
}
export interface GetManagedViewInput {
  ManagedViewArn: string;
}
export interface GetManagedViewOutput {
  ManagedView?: ManagedView;
}
export interface GetResourceExplorerSetupInput {
  TaskId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetResourceExplorerSetupOutput {
  Regions?: Array<RegionStatus>;
  NextToken?: string;
}
export interface GetServiceIndexOutput {
  Arn?: string;
  Type?: string;
}
export interface GetServiceViewInput {
  ServiceViewArn: string;
}
export interface GetServiceViewOutput {
  View: ServiceView;
}
export interface GetViewInput {
  ViewArn: string;
}
export interface GetViewOutput {
  View?: View;
  Tags?: Record<string, string>;
}
export interface IncludedProperty {
  Name: string;
}
export type IncludedPropertyList = Array<IncludedProperty>;
export interface Index {
  Region?: string;
  Arn?: string;
  Type?: string;
}
export type IndexList = Array<Index>;
export type IndexState = string;

export interface IndexStatus {
  Status?: string;
  Index?: Index;
  ErrorDetails?: ErrorDetails;
}
export type IndexType = string;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface ListIndexesForMembersInput {
  AccountIdList: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListIndexesForMembersOutput {
  Indexes?: Array<MemberIndex>;
  NextToken?: string;
}
export interface ListIndexesInput {
  Type?: string;
  Regions?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListIndexesOutput {
  Indexes?: Array<Index>;
  NextToken?: string;
}
export interface ListManagedViewsInput {
  MaxResults?: number;
  NextToken?: string;
  ServicePrincipal?: string;
}
export interface ListManagedViewsOutput {
  NextToken?: string;
  ManagedViews?: Array<string>;
}
export interface ListResourcesInput {
  Filters?: SearchFilter;
  MaxResults?: number;
  ViewArn?: string;
  NextToken?: string;
}
export interface ListResourcesOutput {
  Resources?: Array<Resource>;
  NextToken?: string;
  ViewArn?: string;
}
export interface ListServiceIndexesInput {
  Regions?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListServiceIndexesOutput {
  Indexes?: Array<Index>;
  NextToken?: string;
}
export interface ListServiceViewsInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListServiceViewsOutput {
  NextToken?: string;
  ServiceViews?: Array<string>;
}
export interface ListStreamingAccessForServicesInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListStreamingAccessForServicesOutput {
  StreamingAccessForServices: Array<StreamingAccessDetails>;
  NextToken?: string;
}
export interface ListSupportedResourceTypesInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSupportedResourceTypesOutput {
  ResourceTypes?: Array<SupportedResourceType>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  Tags?: Record<string, string>;
}
export interface ListViewsInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListViewsOutput {
  Views?: Array<string>;
  NextToken?: string;
}
export interface ManagedView {
  ManagedViewArn?: string;
  ManagedViewName?: string;
  TrustedService?: string;
  LastUpdatedAt?: Date | string;
  Owner?: string;
  Scope?: string;
  IncludedProperties?: Array<IncludedProperty>;
  Filters?: SearchFilter;
  ResourcePolicy?: string;
  Version?: string;
}
export type ManagedViewArnList = Array<string>;
export interface MemberIndex {
  AccountId?: string;
  Region?: string;
  Arn?: string;
  Type?: string;
}
export type MemberIndexList = Array<MemberIndex>;
export type OperationStatus = string;

export interface OrgConfiguration {
  AWSServiceAccessStatus: string;
  ServiceLinkedRole?: string;
}
export type QueryString = string;

export type RegionList = Array<string>;
export interface RegionStatus {
  Region?: string;
  Index?: IndexStatus;
  View?: ViewStatus;
}
export type RegionStatusList = Array<RegionStatus>;
export interface Resource {
  Arn?: string;
  OwningAccountId?: string;
  Region?: string;
  ResourceType?: string;
  Service?: string;
  LastReportedAt?: Date | string;
  Properties?: Array<ResourceProperty>;
}
export interface ResourceCount {
  TotalResources?: number;
  Complete?: boolean;
}
export type ResourceList = Array<Resource>;
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ResourceProperty {
  Name?: string;
  LastReportedAt?: Date | string;
  Data?: unknown;
}
export type ResourcePropertyList = Array<ResourceProperty>;
export type ResourceTypeList = Array<SupportedResourceType>;
export interface SearchFilter {
  FilterString: string;
}
export interface SearchInput {
  QueryString: string;
  MaxResults?: number;
  ViewArn?: string;
  NextToken?: string;
}
export interface SearchOutput {
  Resources?: Array<Resource>;
  NextToken?: string;
  ViewArn?: string;
  Count?: ResourceCount;
}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly Name: string;
  readonly Value: string;
}> {}
export interface ServiceView {
  ServiceViewArn: string;
  Filters?: SearchFilter;
  IncludedProperties?: Array<IncludedProperty>;
  StreamingAccessForService?: string;
  ScopeType?: string;
}
export type ServiceViewArnList = Array<string>;
export interface StreamingAccessDetails {
  ServicePrincipal: string;
  CreatedAt: Date | string;
}
export type StreamingAccessDetailsList = Array<StreamingAccessDetails>;
export type StringList = Array<string>;
export interface SupportedResourceType {
  Service?: string;
  ResourceType?: string;
}
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  resourceArn: string;
  Tags?: Record<string, string>;
}
export interface TagResourceOutput {}
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export declare class UnauthorizedException extends Data.TaggedError(
  "UnauthorizedException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateIndexTypeInput {
  Arn: string;
  Type: string;
}
export interface UpdateIndexTypeOutput {
  Arn?: string;
  Type?: string;
  State?: string;
  LastUpdatedAt?: Date | string;
}
export interface UpdateViewInput {
  ViewArn: string;
  IncludedProperties?: Array<IncludedProperty>;
  Filters?: SearchFilter;
}
export interface UpdateViewOutput {
  View?: View;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly FieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  ValidationIssue: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export interface View {
  ViewArn?: string;
  Owner?: string;
  LastUpdatedAt?: Date | string;
  Scope?: string;
  IncludedProperties?: Array<IncludedProperty>;
  Filters?: SearchFilter;
}
export type ViewArnList = Array<string>;
export type ViewList = Array<View>;
export type ViewName = string;

export interface ViewStatus {
  Status?: string;
  View?: View;
  ErrorDetails?: ErrorDetails;
}
export declare namespace BatchGetView {
  export type Input = BatchGetViewInput;
  export type Output = BatchGetViewOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateResourceExplorerSetup {
  export type Input = CreateResourceExplorerSetupInput;
  export type Output = CreateResourceExplorerSetupOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourceExplorerSetup {
  export type Input = DeleteResourceExplorerSetupInput;
  export type Output = DeleteResourceExplorerSetupOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateDefaultView {
  export type Input = {};
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAccountLevelServiceConfiguration {
  export type Input = {};
  export type Output = GetAccountLevelServiceConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetDefaultView {
  export type Input = {};
  export type Output = GetDefaultViewOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIndex {
  export type Input = {};
  export type Output = GetIndexOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetManagedView {
  export type Input = GetManagedViewInput;
  export type Output = GetManagedViewOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourceExplorerSetup {
  export type Input = GetResourceExplorerSetupInput;
  export type Output = GetResourceExplorerSetupOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServiceIndex {
  export type Input = {};
  export type Output = GetServiceIndexOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServiceView {
  export type Input = GetServiceViewInput;
  export type Output = GetServiceViewOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIndexesForMembers {
  export type Input = ListIndexesForMembersInput;
  export type Output = ListIndexesForMembersOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListManagedViews {
  export type Input = ListManagedViewsInput;
  export type Output = ListManagedViewsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResources {
  export type Input = ListResourcesInput;
  export type Output = ListResourcesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServiceIndexes {
  export type Input = ListServiceIndexesInput;
  export type Output = ListServiceIndexesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServiceViews {
  export type Input = ListServiceViewsInput;
  export type Output = ListServiceViewsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStreamingAccessForServices {
  export type Input = ListStreamingAccessForServicesInput;
  export type Output = ListStreamingAccessForServicesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSupportedResourceTypes {
  export type Input = ListSupportedResourceTypesInput;
  export type Output = ListSupportedResourceTypesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Search {
  export type Input = SearchInput;
  export type Output = SearchOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateDefaultView {
  export type Input = AssociateDefaultViewInput;
  export type Output = AssociateDefaultViewOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIndex {
  export type Input = CreateIndexInput;
  export type Output = CreateIndexOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateView {
  export type Input = CreateViewInput;
  export type Output = CreateViewOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIndex {
  export type Input = DeleteIndexInput;
  export type Output = DeleteIndexOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteView {
  export type Input = DeleteViewInput;
  export type Output = DeleteViewOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetView {
  export type Input = GetViewInput;
  export type Output = GetViewOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIndexes {
  export type Input = ListIndexesInput;
  export type Output = ListIndexesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListViews {
  export type Input = ListViewsInput;
  export type Output = ListViewsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateIndexType {
  export type Input = UpdateIndexTypeInput;
  export type Output = UpdateIndexTypeOutput;
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

export declare namespace UpdateView {
  export type Input = UpdateViewInput;
  export type Output = UpdateViewOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export type ResourceExplorer2Errors =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonAwsError;

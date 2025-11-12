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
  | AccessDeniedException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class OSIS extends AWSServiceClient {
  createPipeline(
    input: CreatePipelineRequest,
  ): Effect.Effect<
    CreatePipelineResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createPipelineEndpoint(
    input: CreatePipelineEndpointRequest,
  ): Effect.Effect<
    CreatePipelineEndpointResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deletePipeline(
    input: DeletePipelineRequest,
  ): Effect.Effect<
    DeletePipelineResponse,
    | AccessDeniedException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deletePipelineEndpoint(
    input: DeletePipelineEndpointRequest,
  ): Effect.Effect<
    DeletePipelineEndpointResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ValidationException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getPipeline(
    input: GetPipelineRequest,
  ): Effect.Effect<
    GetPipelineResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getPipelineBlueprint(
    input: GetPipelineBlueprintRequest,
  ): Effect.Effect<
    GetPipelineBlueprintResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getPipelineChangeProgress(
    input: GetPipelineChangeProgressRequest,
  ): Effect.Effect<
    GetPipelineChangeProgressResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listPipelineBlueprints(
    input: ListPipelineBlueprintsRequest,
  ): Effect.Effect<
    ListPipelineBlueprintsResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | InvalidPaginationTokenException
    | ValidationException
    | CommonAwsError
  >;
  listPipelineEndpointConnections(
    input: ListPipelineEndpointConnectionsRequest,
  ): Effect.Effect<
    ListPipelineEndpointConnectionsResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ValidationException
    | CommonAwsError
  >;
  listPipelineEndpoints(
    input: ListPipelineEndpointsRequest,
  ): Effect.Effect<
    ListPipelineEndpointsResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ValidationException
    | CommonAwsError
  >;
  listPipelines(
    input: ListPipelinesRequest,
  ): Effect.Effect<
    ListPipelinesResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | InvalidPaginationTokenException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  revokePipelineEndpointConnections(
    input: RevokePipelineEndpointConnectionsRequest,
  ): Effect.Effect<
    RevokePipelineEndpointConnectionsResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ValidationException
    | CommonAwsError
  >;
  startPipeline(
    input: StartPipelineRequest,
  ): Effect.Effect<
    StartPipelineResponse,
    | AccessDeniedException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  stopPipeline(
    input: StopPipelineRequest,
  ): Effect.Effect<
    StopPipelineResponse,
    | AccessDeniedException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updatePipeline(
    input: UpdatePipelineRequest,
  ): Effect.Effect<
    UpdatePipelineResponse,
    | AccessDeniedException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  validatePipeline(
    input: ValidatePipelineRequest,
  ): Effect.Effect<
    ValidatePipelineResponse,
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Osis extends OSIS {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AwsAccountId = string;

export type BlueprintFormat = string;

export type OsisBoolean = boolean;

export interface BufferOptions {
  PersistentBufferEnabled: boolean;
}
export interface ChangeProgressStage {
  Name?: string;
  Status?: ChangeProgressStageStatuses;
  Description?: string;
  LastUpdatedAt?: Date | string;
}
export type ChangeProgressStageList = Array<ChangeProgressStage>;
export type ChangeProgressStageStatuses =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED";
export interface ChangeProgressStatus {
  StartTime?: Date | string;
  Status?: ChangeProgressStatuses;
  TotalNumberOfStages?: number;
  ChangeProgressStages?: Array<ChangeProgressStage>;
}
export type ChangeProgressStatuses =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED";
export type ChangeProgressStatusList = Array<ChangeProgressStatus>;
export type CidrBlock = string;

export interface CloudWatchLogDestination {
  LogGroup: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreatePipelineEndpointRequest {
  PipelineArn: string;
  VpcOptions: PipelineEndpointVpcOptions;
}
export interface CreatePipelineEndpointResponse {
  PipelineArn?: string;
  EndpointId?: string;
  Status?: PipelineEndpointStatus;
  VpcId?: string;
}
export interface CreatePipelineRequest {
  PipelineName: string;
  MinUnits: number;
  MaxUnits: number;
  PipelineConfigurationBody: string;
  LogPublishingOptions?: LogPublishingOptions;
  VpcOptions?: VpcOptions;
  BufferOptions?: BufferOptions;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  Tags?: Array<Tag>;
  PipelineRoleArn?: string;
}
export interface CreatePipelineResponse {
  Pipeline?: Pipeline;
}
export interface DeletePipelineEndpointRequest {
  EndpointId: string;
}
export interface DeletePipelineEndpointResponse {}
export interface DeletePipelineRequest {
  PipelineName: string;
}
export interface DeletePipelineResponse {}
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
export interface DeleteResourcePolicyResponse {}
export declare class DisabledOperationException extends EffectData.TaggedError(
  "DisabledOperationException",
)<{
  readonly message?: string;
}> {}
export interface EncryptionAtRestOptions {
  KmsKeyArn: string;
}
export type ErrorMessage = string;

export interface GetPipelineBlueprintRequest {
  BlueprintName: string;
  Format?: string;
}
export interface GetPipelineBlueprintResponse {
  Blueprint?: PipelineBlueprint;
  Format?: string;
}
export interface GetPipelineChangeProgressRequest {
  PipelineName: string;
}
export interface GetPipelineChangeProgressResponse {
  ChangeProgressStatuses?: Array<ChangeProgressStatus>;
}
export interface GetPipelineRequest {
  PipelineName: string;
}
export interface GetPipelineResponse {
  Pipeline?: Pipeline;
}
export interface GetResourcePolicyRequest {
  ResourceArn: string;
}
export interface GetResourcePolicyResponse {
  ResourceArn?: string;
  Policy?: string;
}
export type IngestEndpointUrlsList = Array<string>;
export type Integer = number;

export declare class InternalException extends EffectData.TaggedError(
  "InternalException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPaginationTokenException extends EffectData.TaggedError(
  "InvalidPaginationTokenException",
)<{
  readonly message?: string;
}> {}
export type KmsKeyArn = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListPipelineBlueprintsRequest {}
export interface ListPipelineBlueprintsResponse {
  Blueprints?: Array<PipelineBlueprintSummary>;
}
export interface ListPipelineEndpointConnectionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPipelineEndpointConnectionsResponse {
  NextToken?: string;
  PipelineEndpointConnections?: Array<PipelineEndpointConnection>;
}
export interface ListPipelineEndpointsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPipelineEndpointsResponse {
  NextToken?: string;
  PipelineEndpoints?: Array<PipelineEndpoint>;
}
export interface ListPipelinesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPipelinesResponse {
  NextToken?: string;
  Pipelines?: Array<PipelineSummary>;
}
export interface ListTagsForResourceRequest {
  Arn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type LogGroup = string;

export interface LogPublishingOptions {
  IsLoggingEnabled?: boolean;
  CloudWatchLogDestination?: CloudWatchLogDestination;
}
export type MaxResults = number;

export type NextToken = string;

export interface Pipeline {
  PipelineName?: string;
  PipelineArn?: string;
  MinUnits?: number;
  MaxUnits?: number;
  Status?: PipelineStatus;
  StatusReason?: PipelineStatusReason;
  PipelineConfigurationBody?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  IngestEndpointUrls?: Array<string>;
  LogPublishingOptions?: LogPublishingOptions;
  VpcEndpoints?: Array<VpcEndpoint>;
  BufferOptions?: BufferOptions;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  VpcEndpointService?: string;
  ServiceVpcEndpoints?: Array<ServiceVpcEndpoint>;
  Destinations?: Array<PipelineDestination>;
  Tags?: Array<Tag>;
  PipelineRoleArn?: string;
}
export type PipelineArn = string;

export interface PipelineBlueprint {
  BlueprintName?: string;
  PipelineConfigurationBody?: string;
  DisplayName?: string;
  DisplayDescription?: string;
  Service?: string;
  UseCase?: string;
}
export type PipelineBlueprintsSummaryList = Array<PipelineBlueprintSummary>;
export interface PipelineBlueprintSummary {
  BlueprintName?: string;
  DisplayName?: string;
  DisplayDescription?: string;
  Service?: string;
  UseCase?: string;
}
export type PipelineConfigurationBody = string;

export interface PipelineDestination {
  ServiceName?: string;
  Endpoint?: string;
}
export type PipelineDestinationList = Array<PipelineDestination>;
export interface PipelineEndpoint {
  PipelineArn?: string;
  EndpointId?: string;
  Status?: PipelineEndpointStatus;
  VpcId?: string;
  VpcOptions?: PipelineEndpointVpcOptions;
  IngestEndpointUrl?: string;
}
export interface PipelineEndpointConnection {
  PipelineArn?: string;
  EndpointId?: string;
  Status?: PipelineEndpointStatus;
  VpcEndpointOwner?: string;
}
export type PipelineEndpointConnectionsSummaryList =
  Array<PipelineEndpointConnection>;
export type PipelineEndpointId = string;

export type PipelineEndpointIdsList = Array<string>;
export type PipelineEndpointsSummaryList = Array<PipelineEndpoint>;
export type PipelineEndpointStatus =
  | "CREATING"
  | "ACTIVE"
  | "CREATE_FAILED"
  | "DELETING"
  | "REVOKING"
  | "REVOKED";
export interface PipelineEndpointVpcOptions {
  SubnetIds?: Array<string>;
  SecurityGroupIds?: Array<string>;
}
export type PipelineName = string;

export type PipelineRoleArn = string;

export type PipelineStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "STARTING"
  | "START_FAILED"
  | "STOPPING"
  | "STOPPED";
export interface PipelineStatusReason {
  Description?: string;
}
export interface PipelineSummary {
  Status?: PipelineStatus;
  StatusReason?: PipelineStatusReason;
  PipelineName?: string;
  PipelineArn?: string;
  MinUnits?: number;
  MaxUnits?: number;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Destinations?: Array<PipelineDestination>;
  Tags?: Array<Tag>;
}
export type PipelineSummaryList = Array<PipelineSummary>;
export type PipelineUnits = number;

export interface PutResourcePolicyRequest {
  ResourceArn: string;
  Policy: string;
}
export interface PutResourcePolicyResponse {
  ResourceArn?: string;
  Policy?: string;
}
export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResourcePolicy = string;

export interface RevokePipelineEndpointConnectionsRequest {
  PipelineArn: string;
  EndpointIds: Array<string>;
}
export interface RevokePipelineEndpointConnectionsResponse {
  PipelineArn?: string;
}
export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export interface ServiceVpcEndpoint {
  ServiceName?: VpcEndpointServiceName;
  VpcEndpointId?: string;
}
export type ServiceVpcEndpointsList = Array<ServiceVpcEndpoint>;
export interface StartPipelineRequest {
  PipelineName: string;
}
export interface StartPipelineResponse {
  Pipeline?: Pipeline;
}
export interface StopPipelineRequest {
  PipelineName: string;
}
export interface StopPipelineResponse {
  Pipeline?: Pipeline;
}
export type OsisString = string;

export type StringList = Array<string>;
export type SubnetId = string;

export type SubnetIds = Array<string>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagList = Array<Tag>;
export interface TagResourceRequest {
  Arn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type Timestamp = Date | string;

export interface UntagResourceRequest {
  Arn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdatePipelineRequest {
  PipelineName: string;
  MinUnits?: number;
  MaxUnits?: number;
  PipelineConfigurationBody?: string;
  LogPublishingOptions?: LogPublishingOptions;
  BufferOptions?: BufferOptions;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  PipelineRoleArn?: string;
}
export interface UpdatePipelineResponse {
  Pipeline?: Pipeline;
}
export interface ValidatePipelineRequest {
  PipelineConfigurationBody: string;
}
export interface ValidatePipelineResponse {
  isValid?: boolean;
  Errors?: Array<ValidationMessage>;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export interface ValidationMessage {
  Message?: string;
}
export type ValidationMessageList = Array<ValidationMessage>;
export interface VpcAttachmentOptions {
  AttachToVpc: boolean;
  CidrBlock?: string;
}
export interface VpcEndpoint {
  VpcEndpointId?: string;
  VpcId?: string;
  VpcOptions?: VpcOptions;
}
export type VpcEndpointManagement = "CUSTOMER" | "SERVICE";
export type VpcEndpointServiceName = "OPENSEARCH_SERVERLESS";
export type VpcEndpointsList = Array<VpcEndpoint>;
export interface VpcOptions {
  SubnetIds: Array<string>;
  SecurityGroupIds?: Array<string>;
  VpcAttachmentOptions?: VpcAttachmentOptions;
  VpcEndpointManagement?: VpcEndpointManagement;
}
export declare namespace CreatePipeline {
  export type Input = CreatePipelineRequest;
  export type Output = CreatePipelineResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePipelineEndpoint {
  export type Input = CreatePipelineEndpointRequest;
  export type Output = CreatePipelineEndpointResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePipeline {
  export type Input = DeletePipelineRequest;
  export type Output = DeletePipelineResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePipelineEndpoint {
  export type Input = DeletePipelineEndpointRequest;
  export type Output = DeletePipelineEndpointResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPipeline {
  export type Input = GetPipelineRequest;
  export type Output = GetPipelineResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPipelineBlueprint {
  export type Input = GetPipelineBlueprintRequest;
  export type Output = GetPipelineBlueprintResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPipelineChangeProgress {
  export type Input = GetPipelineChangeProgressRequest;
  export type Output = GetPipelineChangeProgressResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPipelineBlueprints {
  export type Input = ListPipelineBlueprintsRequest;
  export type Output = ListPipelineBlueprintsResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | InvalidPaginationTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPipelineEndpointConnections {
  export type Input = ListPipelineEndpointConnectionsRequest;
  export type Output = ListPipelineEndpointConnectionsResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPipelineEndpoints {
  export type Input = ListPipelineEndpointsRequest;
  export type Output = ListPipelineEndpointsResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPipelines {
  export type Input = ListPipelinesRequest;
  export type Output = ListPipelinesResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | InvalidPaginationTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RevokePipelineEndpointConnections {
  export type Input = RevokePipelineEndpointConnectionsRequest;
  export type Output = RevokePipelineEndpointConnectionsResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartPipeline {
  export type Input = StartPipelineRequest;
  export type Output = StartPipelineResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopPipeline {
  export type Input = StopPipelineRequest;
  export type Output = StopPipelineResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePipeline {
  export type Input = UpdatePipelineRequest;
  export type Output = UpdatePipelineResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ValidatePipeline {
  export type Input = ValidatePipelineRequest;
  export type Output = ValidatePipelineResponse;
  export type Error =
    | AccessDeniedException
    | DisabledOperationException
    | InternalException
    | ValidationException
    | CommonAwsError;
}

export type OSISErrors =
  | AccessDeniedException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | InvalidPaginationTokenException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ValidationException
  | CommonAwsError;

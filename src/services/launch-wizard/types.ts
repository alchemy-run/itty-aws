import type { Effect, Data as EffectData } from "effect";
import type { AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = AccessDeniedException | ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | ThrottlingException | UnrecognizedClientException | UnknownOperationException | ValidationError | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class LaunchWizard extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createDeployment(
    input: CreateDeploymentInput,
  ): Effect.Effect<
    CreateDeploymentOutput,
    InternalServerException | ResourceLimitException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteDeployment(
    input: DeleteDeploymentInput,
  ): Effect.Effect<
    DeleteDeploymentOutput,
    InternalServerException | ResourceLimitException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getDeployment(
    input: GetDeploymentInput,
  ): Effect.Effect<
    GetDeploymentOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getWorkload(
    input: GetWorkloadInput,
  ): Effect.Effect<
    GetWorkloadOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getWorkloadDeploymentPattern(
    input: GetWorkloadDeploymentPatternInput,
  ): Effect.Effect<
    GetWorkloadDeploymentPatternOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listDeploymentEvents(
    input: ListDeploymentEventsInput,
  ): Effect.Effect<
    ListDeploymentEventsOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listDeployments(
    input: ListDeploymentsInput,
  ): Effect.Effect<
    ListDeploymentsOutput,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listWorkloadDeploymentPatterns(
    input: ListWorkloadDeploymentPatternsInput,
  ): Effect.Effect<
    ListWorkloadDeploymentPatternsOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listWorkloads(
    input: ListWorkloadsInput,
  ): Effect.Effect<
    ListWorkloadsOutput,
    InternalServerException | ValidationException | CommonAwsError
  >;
}

export type AllowedValues = Array<string>;
export interface CreateDeploymentInput {
  workloadName: string;
  deploymentPatternName: string;
  name: string;
  specifications: Record<string, string>;
  dryRun?: boolean;
  tags?: Record<string, string>;
}
export interface CreateDeploymentOutput {
  deploymentId?: string;
}
export interface DeleteDeploymentInput {
  deploymentId: string;
}
export interface DeleteDeploymentOutput {
  status?: DeploymentStatus;
  statusReason?: string;
}
export interface DeploymentConditionalField {
  name?: string;
  value?: string;
  comparator?: string;
}
export interface DeploymentData {
  name?: string;
  id?: string;
  workloadName?: string;
  patternName?: string;
  status?: DeploymentStatus;
  createdAt?: Date | string;
  specifications?: Record<string, string>;
  resourceGroup?: string;
  deletedAt?: Date | string;
  tags?: Record<string, string>;
  deploymentArn?: string;
}
export interface DeploymentDataSummary {
  name?: string;
  id?: string;
  workloadName?: string;
  patternName?: string;
  status?: DeploymentStatus;
  createdAt?: Date | string;
}
export type DeploymentDataSummaryList = Array<DeploymentDataSummary>;
export interface DeploymentEventDataSummary {
  name?: string;
  description?: string;
  status?: EventStatus;
  statusReason?: string;
  timestamp?: Date | string;
}
export type DeploymentEventDataSummaryList = Array<DeploymentEventDataSummary>;
export interface DeploymentFilter {
  name?: DeploymentFilterKey;
  values?: Array<string>;
}
export type DeploymentFilterKey = "WORKLOAD_NAME" | "DEPLOYMENT_STATUS";
export type DeploymentFilterList = Array<DeploymentFilter>;
export type DeploymentFilterValues = Array<string>;
export type DeploymentId = string;

export type DeploymentName = string;

export type DeploymentPatternName = string;

export type DeploymentSpecifications = Record<string, string>;
export type DeploymentSpecificationsData = Array<DeploymentSpecificationsField>;
export interface DeploymentSpecificationsField {
  name?: string;
  description?: string;
  allowedValues?: Array<string>;
  required?: string;
  conditionals?: Array<DeploymentConditionalField>;
}
export type DeploymentStatus = "COMPLETED" | "CREATING" | "DELETE_IN_PROGRESS" | "DELETE_INITIATING" | "DELETE_FAILED" | "DELETED" | "FAILED" | "IN_PROGRESS" | "VALIDATING";
export type EventId = string;

export type EventStatus = "CANCELED" | "CANCELING" | "COMPLETED" | "CREATED" | "FAILED" | "IN_PROGRESS" | "PENDING" | "TIMED_OUT";
export interface GetDeploymentInput {
  deploymentId: string;
}
export interface GetDeploymentOutput {
  deployment?: DeploymentData;
}
export interface GetWorkloadDeploymentPatternInput {
  workloadName: string;
  deploymentPatternName: string;
}
export interface GetWorkloadDeploymentPatternOutput {
  workloadDeploymentPattern?: WorkloadDeploymentPatternData;
}
export interface GetWorkloadInput {
  workloadName: string;
}
export interface GetWorkloadOutput {
  workload?: WorkloadData;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type KeyString = string;

export interface ListDeploymentEventsInput {
  deploymentId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDeploymentEventsOutput {
  deploymentEvents?: Array<DeploymentEventDataSummary>;
  nextToken?: string;
}
export interface ListDeploymentsInput {
  filters?: Array<DeploymentFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDeploymentsOutput {
  deployments?: Array<DeploymentDataSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: Record<string, string>;
}
export interface ListWorkloadDeploymentPatternsInput {
  workloadName: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListWorkloadDeploymentPatternsOutput {
  workloadDeploymentPatterns?: Array<WorkloadDeploymentPatternDataSummary>;
  nextToken?: string;
}
export interface ListWorkloadsInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListWorkloadsOutput {
  workloads?: Array<WorkloadDataSummary>;
  nextToken?: string;
}
export type MaxDeploymentEventResults = number;

export type MaxDeploymentResults = number;

export type MaxWorkloadDeploymentPatternResults = number;

export type MaxWorkloadResults = number;

export type NextToken = string;

export declare class ResourceLimitException extends EffectData.TaggedError(
  "ResourceLimitException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type SettingsSetName = string;

export type SpecificationsConditionalData = Array<DeploymentConditionalField>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceOutput {
}
export type Tags = Record<string, string>;
export type TagValue = string;

export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type ValueString = string;

export interface WorkloadData {
  workloadName?: string;
  displayName?: string;
  description?: string;
  documentationUrl?: string;
  iconUrl?: string;
  status?: WorkloadStatus;
  statusMessage?: string;
}
export interface WorkloadDataSummary {
  workloadName?: string;
  displayName?: string;
}
export type WorkloadDataSummaryList = Array<WorkloadDataSummary>;
export interface WorkloadDeploymentPatternData {
  workloadName?: string;
  deploymentPatternName?: string;
  workloadVersionName?: string;
  displayName?: string;
  description?: string;
  status?: WorkloadDeploymentPatternStatus;
  statusMessage?: string;
  specifications?: Array<DeploymentSpecificationsField>;
}
export interface WorkloadDeploymentPatternDataSummary {
  workloadName?: string;
  deploymentPatternName?: string;
  workloadVersionName?: string;
  displayName?: string;
  description?: string;
  status?: WorkloadDeploymentPatternStatus;
  statusMessage?: string;
}
export type WorkloadDeploymentPatternDataSummaryList = Array<WorkloadDeploymentPatternDataSummary>;
export type WorkloadDeploymentPatternStatus = "ACTIVE" | "INACTIVE" | "DISABLED" | "DELETED";
export type WorkloadName = string;

export type WorkloadStatus = "ACTIVE" | "INACTIVE" | "DISABLED" | "DELETED";
export type WorkloadVersionName = string;

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDeployment {
  export type Input = CreateDeploymentInput;
  export type Output = CreateDeploymentOutput;
  export type Error =
    | InternalServerException
    | ResourceLimitException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDeployment {
  export type Input = DeleteDeploymentInput;
  export type Output = DeleteDeploymentOutput;
  export type Error =
    | InternalServerException
    | ResourceLimitException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDeployment {
  export type Input = GetDeploymentInput;
  export type Output = GetDeploymentOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWorkload {
  export type Input = GetWorkloadInput;
  export type Output = GetWorkloadOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWorkloadDeploymentPattern {
  export type Input = GetWorkloadDeploymentPatternInput;
  export type Output = GetWorkloadDeploymentPatternOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDeploymentEvents {
  export type Input = ListDeploymentEventsInput;
  export type Output = ListDeploymentEventsOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDeployments {
  export type Input = ListDeploymentsInput;
  export type Output = ListDeploymentsOutput;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWorkloadDeploymentPatterns {
  export type Input = ListWorkloadDeploymentPatternsInput;
  export type Output = ListWorkloadDeploymentPatternsOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWorkloads {
  export type Input = ListWorkloadsInput;
  export type Output = ListWorkloadsOutput;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export type LaunchWizardErrors = InternalServerException | ResourceLimitException | ResourceNotFoundException | ValidationException | CommonAwsError;


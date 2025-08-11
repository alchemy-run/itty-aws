import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class CodeCatalyst extends AWSServiceClient {
  getUserDetails(
    input: GetUserDetailsRequest,
  ): Effect.Effect<GetUserDetailsResponse, CommonAwsError>;
  verifySession(input: {}): Effect.Effect<
    VerifySessionResponse,
    CommonAwsError
  >;
}

export declare class Codecatalyst extends CodeCatalyst {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccessTokenId = string;

export type AccessTokenName = string;

export type AccessTokenSecret = string;

export type AccessTokenSummaries = Array<AccessTokenSummary>;
export interface AccessTokenSummary {
  id: string;
  name: string;
  expiresTime?: Date | string;
}
export type ClientToken = string;

export type ComparisonOperator = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export interface CreateAccessTokenRequest {
  name: string;
  expiresTime?: Date | string;
}
export interface CreateAccessTokenResponse {
  secret: string;
  name: string;
  expiresTime: Date | string;
  accessTokenId: string;
}
export interface CreateDevEnvironmentRequest {
  spaceName: string;
  projectName: string;
  repositories?: Array<RepositoryInput>;
  clientToken?: string;
  alias?: string;
  ides?: Array<IdeConfiguration>;
  instanceType: string;
  inactivityTimeoutMinutes?: number;
  persistentStorage: PersistentStorageConfiguration;
  vpcConnectionName?: string;
}
export interface CreateDevEnvironmentResponse {
  spaceName: string;
  projectName: string;
  id: string;
  vpcConnectionName?: string;
}
export interface CreateProjectRequest {
  spaceName: string;
  displayName: string;
  description?: string;
}
export interface CreateProjectResponse {
  spaceName?: string;
  name: string;
  displayName?: string;
  description?: string;
}
export interface CreateSourceRepositoryBranchRequest {
  spaceName: string;
  projectName: string;
  sourceRepositoryName: string;
  name: string;
  headCommitId?: string;
}
export interface CreateSourceRepositoryBranchResponse {
  ref?: string;
  name?: string;
  lastUpdatedTime?: Date | string;
  headCommitId?: string;
}
export interface CreateSourceRepositoryRequest {
  spaceName: string;
  projectName: string;
  name: string;
  description?: string;
}
export interface CreateSourceRepositoryResponse {
  spaceName: string;
  projectName: string;
  name: string;
  description?: string;
}
export interface DeleteAccessTokenRequest {
  id: string;
}
export interface DeleteAccessTokenResponse {}
export interface DeleteDevEnvironmentRequest {
  spaceName: string;
  projectName: string;
  id: string;
}
export interface DeleteDevEnvironmentResponse {
  spaceName: string;
  projectName: string;
  id: string;
}
export interface DeleteProjectRequest {
  spaceName: string;
  name: string;
}
export interface DeleteProjectResponse {
  spaceName: string;
  name: string;
  displayName?: string;
}
export interface DeleteSourceRepositoryRequest {
  spaceName: string;
  projectName: string;
  name: string;
}
export interface DeleteSourceRepositoryResponse {
  spaceName: string;
  projectName: string;
  name: string;
}
export interface DeleteSpaceRequest {
  name: string;
}
export interface DeleteSpaceResponse {
  name: string;
  displayName?: string;
}
export interface DevEnvironmentAccessDetails {
  streamUrl: string;
  tokenValue: string;
}
export type DevEnvironmentRepositorySummaries =
  Array<DevEnvironmentRepositorySummary>;
export interface DevEnvironmentRepositorySummary {
  repositoryName: string;
  branchName?: string;
}
export interface DevEnvironmentSessionConfiguration {
  sessionType: string;
  executeCommandSessionConfiguration?: ExecuteCommandSessionConfiguration;
}
export type DevEnvironmentSessionsSummaryList =
  Array<DevEnvironmentSessionSummary>;
export interface DevEnvironmentSessionSummary {
  spaceName: string;
  projectName: string;
  devEnvironmentId: string;
  startedTime: Date | string;
  id: string;
}
export type DevEnvironmentSessionType = string;

export type DevEnvironmentStatus = string;

export interface DevEnvironmentSummary {
  spaceName?: string;
  projectName?: string;
  id: string;
  lastUpdatedTime: Date | string;
  creatorId: string;
  status: string;
  statusReason?: string;
  repositories: Array<DevEnvironmentRepositorySummary>;
  alias?: string;
  ides?: Array<Ide>;
  instanceType: string;
  inactivityTimeoutMinutes: number;
  persistentStorage: PersistentStorage;
  vpcConnectionName?: string;
}
export type DevEnvironmentSummaryList = Array<DevEnvironmentSummary>;
export interface EmailAddress {
  email?: string;
  verified?: boolean;
}
export type EventLogEntries = Array<EventLogEntry>;
export interface EventLogEntry {
  id: string;
  eventName: string;
  eventType: string;
  eventCategory: string;
  eventSource: string;
  eventTime: Date | string;
  operationType: string;
  userIdentity: UserIdentity;
  projectInformation?: ProjectInformation;
  requestId?: string;
  requestPayload?: EventPayload;
  responsePayload?: EventPayload;
  errorCode?: string;
  sourceIpAddress?: string;
  userAgent?: string;
}
export interface EventPayload {
  contentType?: string;
  data?: string;
}
export interface ExecuteCommandSessionConfiguration {
  command: string;
  arguments?: Array<string>;
}
export type ExecuteCommandSessionConfigurationArguments = Array<string>;
export interface Filter {
  key: string;
  values: Array<string>;
  comparisonOperator?: string;
}
export type FilterKey = string;

export type Filters = Array<Filter>;
export interface GetDevEnvironmentRequest {
  spaceName: string;
  projectName: string;
  id: string;
}
export interface GetDevEnvironmentResponse {
  spaceName: string;
  projectName: string;
  id: string;
  lastUpdatedTime: Date | string;
  creatorId: string;
  status: string;
  statusReason?: string;
  repositories: Array<DevEnvironmentRepositorySummary>;
  alias?: string;
  ides?: Array<Ide>;
  instanceType: string;
  inactivityTimeoutMinutes: number;
  persistentStorage: PersistentStorage;
  vpcConnectionName?: string;
}
export interface GetProjectRequest {
  spaceName: string;
  name: string;
}
export interface GetProjectResponse {
  spaceName?: string;
  name: string;
  displayName?: string;
  description?: string;
}
export interface GetSourceRepositoryCloneUrlsRequest {
  spaceName: string;
  projectName: string;
  sourceRepositoryName: string;
}
export interface GetSourceRepositoryCloneUrlsResponse {
  https: string;
}
export interface GetSourceRepositoryRequest {
  spaceName: string;
  projectName: string;
  name: string;
}
export interface GetSourceRepositoryResponse {
  spaceName: string;
  projectName: string;
  name: string;
  description?: string;
  lastUpdatedTime: Date | string;
  createdTime: Date | string;
}
export interface GetSpaceRequest {
  name: string;
}
export interface GetSpaceResponse {
  name: string;
  regionName: string;
  displayName?: string;
  description?: string;
}
export interface GetSubscriptionRequest {
  spaceName: string;
}
export interface GetSubscriptionResponse {
  subscriptionType?: string;
  awsAccountName?: string;
  pendingSubscriptionType?: string;
  pendingSubscriptionStartTime?: Date | string;
}
export interface GetUserDetailsRequest {
  id?: string;
  userName?: string;
}
export interface GetUserDetailsResponse {
  userId?: string;
  userName?: string;
  displayName?: string;
  primaryEmail?: EmailAddress;
  version?: string;
}
export interface GetWorkflowRequest {
  spaceName: string;
  id: string;
  projectName: string;
}
export interface GetWorkflowResponse {
  spaceName: string;
  projectName: string;
  id: string;
  name: string;
  sourceRepositoryName?: string;
  sourceBranchName?: string;
  definition: WorkflowDefinition;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
  runMode: string;
  status: string;
}
export interface GetWorkflowRunRequest {
  spaceName: string;
  id: string;
  projectName: string;
}
export interface GetWorkflowRunResponse {
  spaceName: string;
  projectName: string;
  id: string;
  workflowId: string;
  status: string;
  statusReasons?: Array<WorkflowRunStatusReason>;
  startTime: Date | string;
  endTime?: Date | string;
  lastUpdatedTime: Date | string;
}
export interface Ide {
  runtime?: string;
  name?: string;
}
export interface IdeConfiguration {
  runtime?: string;
  name?: string;
}
export type IdeConfigurationList = Array<IdeConfiguration>;
export type Ides = Array<Ide>;
export type InactivityTimeoutMinutes = number;

export type InstanceType = string;

export interface ListAccessTokensRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListAccessTokensResponse {
  items: Array<AccessTokenSummary>;
  nextToken?: string;
}
export interface ListDevEnvironmentSessionsRequest {
  spaceName: string;
  projectName: string;
  devEnvironmentId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDevEnvironmentSessionsResponse {
  items: Array<DevEnvironmentSessionSummary>;
  nextToken?: string;
}
export interface ListDevEnvironmentsRequest {
  spaceName: string;
  projectName?: string;
  filters?: Array<Filter>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDevEnvironmentsResponse {
  items: Array<DevEnvironmentSummary>;
  nextToken?: string;
}
export interface ListEventLogsRequest {
  spaceName: string;
  startTime: Date | string;
  endTime: Date | string;
  eventName?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListEventLogsResponse {
  nextToken?: string;
  items: Array<EventLogEntry>;
}
export interface ListProjectsRequest {
  spaceName: string;
  nextToken?: string;
  maxResults?: number;
  filters?: Array<ProjectListFilter>;
}
export interface ListProjectsResponse {
  nextToken?: string;
  items?: Array<ProjectSummary>;
}
export interface ListSourceRepositoriesItem {
  id: string;
  name: string;
  description?: string;
  lastUpdatedTime: Date | string;
  createdTime: Date | string;
}
export type ListSourceRepositoriesItems = Array<ListSourceRepositoriesItem>;
export interface ListSourceRepositoriesRequest {
  spaceName: string;
  projectName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSourceRepositoriesResponse {
  items?: Array<ListSourceRepositoriesItem>;
  nextToken?: string;
}
export interface ListSourceRepositoryBranchesItem {
  ref?: string;
  name?: string;
  lastUpdatedTime?: Date | string;
  headCommitId?: string;
}
export type ListSourceRepositoryBranchesItems =
  Array<ListSourceRepositoryBranchesItem>;
export interface ListSourceRepositoryBranchesRequest {
  spaceName: string;
  projectName: string;
  sourceRepositoryName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSourceRepositoryBranchesResponse {
  nextToken?: string;
  items: Array<ListSourceRepositoryBranchesItem>;
}
export interface ListSpacesRequest {
  nextToken?: string;
}
export interface ListSpacesResponse {
  nextToken?: string;
  items?: Array<SpaceSummary>;
}
export interface ListWorkflowRunsRequest {
  spaceName: string;
  workflowId?: string;
  projectName: string;
  nextToken?: string;
  maxResults?: number;
  sortBy?: Array<WorkflowRunSortCriteria>;
}
export interface ListWorkflowRunsResponse {
  nextToken?: string;
  items?: Array<WorkflowRunSummary>;
}
export interface ListWorkflowsRequest {
  spaceName: string;
  projectName: string;
  nextToken?: string;
  maxResults?: number;
  sortBy?: Array<WorkflowSortCriteria>;
}
export interface ListWorkflowsResponse {
  nextToken?: string;
  items?: Array<WorkflowSummary>;
}
export type NameString = string;

export type OperationType = string;

export interface PersistentStorage {
  sizeInGiB: number;
}
export interface PersistentStorageConfiguration {
  sizeInGiB: number;
}
export type ProjectDescription = string;

export type ProjectDisplayName = string;

export interface ProjectInformation {
  name?: string;
  projectId?: string;
}
export interface ProjectListFilter {
  key: string;
  values: Array<string>;
  comparisonOperator?: string;
}
export type ProjectListFilters = Array<ProjectListFilter>;
export type ProjectSummaries = Array<ProjectSummary>;
export interface ProjectSummary {
  name: string;
  displayName?: string;
  description?: string;
}
export type RegionString = string;

export type RepositoriesInput = Array<RepositoryInput>;
export interface RepositoryInput {
  repositoryName: string;
  branchName?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type SensitiveString = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type SourceRepositoryBranchRefString = string;

export type SourceRepositoryBranchString = string;

export type SourceRepositoryDescriptionString = string;

export type SourceRepositoryIdString = string;

export type SourceRepositoryNameString = string;

export type SpaceDescription = string;

export type SpaceSummaries = Array<SpaceSummary>;
export interface SpaceSummary {
  name: string;
  regionName: string;
  displayName?: string;
  description?: string;
}
export interface StartDevEnvironmentRequest {
  spaceName: string;
  projectName: string;
  id: string;
  ides?: Array<IdeConfiguration>;
  instanceType?: string;
  inactivityTimeoutMinutes?: number;
}
export interface StartDevEnvironmentResponse {
  spaceName: string;
  projectName: string;
  id: string;
  status: string;
}
export interface StartDevEnvironmentSessionRequest {
  spaceName: string;
  projectName: string;
  id: string;
  sessionConfiguration: DevEnvironmentSessionConfiguration;
}
export interface StartDevEnvironmentSessionResponse {
  accessDetails: DevEnvironmentAccessDetails;
  sessionId?: string;
  spaceName: string;
  projectName: string;
  id: string;
}
export interface StartWorkflowRunRequest {
  spaceName: string;
  projectName: string;
  workflowId: string;
  clientToken?: string;
}
export interface StartWorkflowRunResponse {
  spaceName: string;
  projectName: string;
  id: string;
  workflowId: string;
}
export type StatusReason = string;

export interface StopDevEnvironmentRequest {
  spaceName: string;
  projectName: string;
  id: string;
}
export interface StopDevEnvironmentResponse {
  spaceName: string;
  projectName: string;
  id: string;
  status: string;
}
export interface StopDevEnvironmentSessionRequest {
  spaceName: string;
  projectName: string;
  id: string;
  sessionId: string;
}
export interface StopDevEnvironmentSessionResponse {
  spaceName: string;
  projectName: string;
  id: string;
  sessionId: string;
}
export type StringList = Array<string>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export type Timestamp = Date | string;

export interface UpdateDevEnvironmentRequest {
  spaceName: string;
  projectName: string;
  id: string;
  alias?: string;
  ides?: Array<IdeConfiguration>;
  instanceType?: string;
  inactivityTimeoutMinutes?: number;
  clientToken?: string;
}
export interface UpdateDevEnvironmentResponse {
  id: string;
  spaceName: string;
  projectName: string;
  alias?: string;
  ides?: Array<IdeConfiguration>;
  instanceType?: string;
  inactivityTimeoutMinutes?: number;
  clientToken?: string;
}
export interface UpdateProjectRequest {
  spaceName: string;
  name: string;
  description?: string;
}
export interface UpdateProjectResponse {
  spaceName?: string;
  name?: string;
  displayName?: string;
  description?: string;
}
export interface UpdateSpaceRequest {
  name: string;
  description?: string;
}
export interface UpdateSpaceResponse {
  name?: string;
  displayName?: string;
  description?: string;
}
export interface UserIdentity {
  userType: string;
  principalId: string;
  userName?: string;
  awsAccountId?: string;
}
export type UserType = string;

export type Uuid = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export interface VerifySessionResponse {
  identity?: string;
}
export interface WorkflowDefinition {
  path: string;
}
export interface WorkflowDefinitionSummary {
  path: string;
}
export type WorkflowRunMode = string;

export interface WorkflowRunSortCriteria {}
export type WorkflowRunSortCriteriaList = Array<WorkflowRunSortCriteria>;
export type WorkflowRunStatus = string;

export interface WorkflowRunStatusReason {}
export type WorkflowRunStatusReasons = Array<WorkflowRunStatusReason>;
export type WorkflowRunSummaries = Array<WorkflowRunSummary>;
export interface WorkflowRunSummary {
  id: string;
  workflowId: string;
  workflowName: string;
  status: string;
  statusReasons?: Array<WorkflowRunStatusReason>;
  startTime: Date | string;
  endTime?: Date | string;
  lastUpdatedTime: Date | string;
}
export interface WorkflowSortCriteria {}
export type WorkflowSortCriteriaList = Array<WorkflowSortCriteria>;
export type WorkflowStatus = string;

export type WorkflowSummaries = Array<WorkflowSummary>;
export interface WorkflowSummary {
  id: string;
  name: string;
  sourceRepositoryName: string;
  sourceBranchName: string;
  definition: WorkflowDefinitionSummary;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
  runMode: string;
  status: string;
}
export declare namespace GetUserDetails {
  export type Input = GetUserDetailsRequest;
  export type Output = GetUserDetailsResponse;
  export type Error = CommonAwsError;
}

export declare namespace VerifySession {
  export type Input = {};
  export type Output = VerifySessionResponse;
  export type Error = CommonAwsError;
}

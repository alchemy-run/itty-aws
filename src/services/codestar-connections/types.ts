import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | ValidationException | AccessDeniedException | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class CodeStarconnections extends AWSServiceClient {
  createConnection(
    input: CreateConnectionInput,
  ): Effect.Effect<
    CreateConnectionOutput,
    LimitExceededException | ResourceNotFoundException | ResourceUnavailableException | CommonAwsError
  >;
  createHost(
    input: CreateHostInput,
  ): Effect.Effect<
    CreateHostOutput,
    LimitExceededException | CommonAwsError
  >;
  createRepositoryLink(
    input: CreateRepositoryLinkInput,
  ): Effect.Effect<
    CreateRepositoryLinkOutput,
    AccessDeniedException | ConcurrentModificationException | InternalServerException | InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  createSyncConfiguration(
    input: CreateSyncConfigurationInput,
  ): Effect.Effect<
    CreateSyncConfigurationOutput,
    AccessDeniedException | ConcurrentModificationException | InternalServerException | InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  deleteConnection(
    input: DeleteConnectionInput,
  ): Effect.Effect<
    DeleteConnectionOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  deleteHost(
    input: DeleteHostInput,
  ): Effect.Effect<
    DeleteHostOutput,
    ResourceNotFoundException | ResourceUnavailableException | CommonAwsError
  >;
  deleteRepositoryLink(
    input: DeleteRepositoryLinkInput,
  ): Effect.Effect<
    DeleteRepositoryLinkOutput,
    AccessDeniedException | ConcurrentModificationException | InternalServerException | InvalidInputException | ResourceNotFoundException | SyncConfigurationStillExistsException | ThrottlingException | UnsupportedProviderTypeException | CommonAwsError
  >;
  deleteSyncConfiguration(
    input: DeleteSyncConfigurationInput,
  ): Effect.Effect<
    DeleteSyncConfigurationOutput,
    AccessDeniedException | ConcurrentModificationException | InternalServerException | InvalidInputException | LimitExceededException | ThrottlingException | CommonAwsError
  >;
  getConnection(
    input: GetConnectionInput,
  ): Effect.Effect<
    GetConnectionOutput,
    ResourceNotFoundException | ResourceUnavailableException | CommonAwsError
  >;
  getHost(
    input: GetHostInput,
  ): Effect.Effect<
    GetHostOutput,
    ResourceNotFoundException | ResourceUnavailableException | CommonAwsError
  >;
  getRepositoryLink(
    input: GetRepositoryLinkInput,
  ): Effect.Effect<
    GetRepositoryLinkOutput,
    AccessDeniedException | ConcurrentModificationException | InternalServerException | InvalidInputException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getRepositorySyncStatus(
    input: GetRepositorySyncStatusInput,
  ): Effect.Effect<
    GetRepositorySyncStatusOutput,
    AccessDeniedException | InternalServerException | InvalidInputException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getResourceSyncStatus(
    input: GetResourceSyncStatusInput,
  ): Effect.Effect<
    GetResourceSyncStatusOutput,
    AccessDeniedException | InternalServerException | InvalidInputException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getSyncBlockerSummary(
    input: GetSyncBlockerSummaryInput,
  ): Effect.Effect<
    GetSyncBlockerSummaryOutput,
    AccessDeniedException | InternalServerException | InvalidInputException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getSyncConfiguration(
    input: GetSyncConfigurationInput,
  ): Effect.Effect<
    GetSyncConfigurationOutput,
    AccessDeniedException | InternalServerException | InvalidInputException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listConnections(
    input: ListConnectionsInput,
  ): Effect.Effect<
    ListConnectionsOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  listHosts(
    input: ListHostsInput,
  ): Effect.Effect<
    ListHostsOutput,
    CommonAwsError
  >;
  listRepositoryLinks(
    input: ListRepositoryLinksInput,
  ): Effect.Effect<
    ListRepositoryLinksOutput,
    AccessDeniedException | ConcurrentModificationException | InternalServerException | InvalidInputException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listRepositorySyncDefinitions(
    input: ListRepositorySyncDefinitionsInput,
  ): Effect.Effect<
    ListRepositorySyncDefinitionsOutput,
    AccessDeniedException | InternalServerException | InvalidInputException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listSyncConfigurations(
    input: ListSyncConfigurationsInput,
  ): Effect.Effect<
    ListSyncConfigurationsOutput,
    AccessDeniedException | InternalServerException | InvalidInputException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  updateHost(
    input: UpdateHostInput,
  ): Effect.Effect<
    UpdateHostOutput,
    ConflictException | ResourceNotFoundException | ResourceUnavailableException | UnsupportedOperationException | CommonAwsError
  >;
  updateRepositoryLink(
    input: UpdateRepositoryLinkInput,
  ): Effect.Effect<
    UpdateRepositoryLinkOutput,
    AccessDeniedException | ConditionalCheckFailedException | InternalServerException | InvalidInputException | ResourceNotFoundException | ThrottlingException | UpdateOutOfSyncException | CommonAwsError
  >;
  updateSyncBlocker(
    input: UpdateSyncBlockerInput,
  ): Effect.Effect<
    UpdateSyncBlockerOutput,
    AccessDeniedException | InternalServerException | InvalidInputException | ResourceNotFoundException | RetryLatestCommitFailedException | SyncBlockerDoesNotExistException | ThrottlingException | CommonAwsError
  >;
  updateSyncConfiguration(
    input: UpdateSyncConfigurationInput,
  ): Effect.Effect<
    UpdateSyncConfigurationOutput,
    AccessDeniedException | ConcurrentModificationException | InternalServerException | InvalidInputException | ResourceNotFoundException | ThrottlingException | UpdateOutOfSyncException | CommonAwsError
  >;
}

export declare class CodestarConnections extends CodeStarconnections {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccountId = string;

export type AmazonResourceName = string;

export type BlockerStatus = "ACTIVE" | "RESOLVED";
export type BlockerType = "AUTOMATED";
export type BranchName = string;

export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export declare class ConditionalCheckFailedException extends EffectData.TaggedError(
  "ConditionalCheckFailedException",
)<{
  readonly Message?: string;
}> {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface Connection {
  ConnectionName?: string;
  ConnectionArn?: string;
  ProviderType?: ProviderType;
  OwnerAccountId?: string;
  ConnectionStatus?: ConnectionStatus;
  HostArn?: string;
}
export type ConnectionArn = string;

export type ConnectionList = Array<Connection>;
export type ConnectionName = string;

export type ConnectionStatus = "PENDING" | "AVAILABLE" | "ERROR";
export interface CreateConnectionInput {
  ProviderType?: ProviderType;
  ConnectionName: string;
  Tags?: Array<Tag>;
  HostArn?: string;
}
export interface CreateConnectionOutput {
  ConnectionArn: string;
  Tags?: Array<Tag>;
}
export type CreatedReason = string;

export interface CreateHostInput {
  Name: string;
  ProviderType: ProviderType;
  ProviderEndpoint: string;
  VpcConfiguration?: VpcConfiguration;
  Tags?: Array<Tag>;
}
export interface CreateHostOutput {
  HostArn?: string;
  Tags?: Array<Tag>;
}
export interface CreateRepositoryLinkInput {
  ConnectionArn: string;
  OwnerId: string;
  RepositoryName: string;
  EncryptionKeyArn?: string;
  Tags?: Array<Tag>;
}
export interface CreateRepositoryLinkOutput {
  RepositoryLinkInfo: RepositoryLinkInfo;
}
export interface CreateSyncConfigurationInput {
  Branch: string;
  ConfigFile: string;
  RepositoryLinkId: string;
  ResourceName: string;
  RoleArn: string;
  SyncType: SyncConfigurationType;
  PublishDeploymentStatus?: PublishDeploymentStatus;
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn;
}
export interface CreateSyncConfigurationOutput {
  SyncConfiguration: SyncConfiguration;
}
export interface DeleteConnectionInput {
  ConnectionArn: string;
}
export interface DeleteConnectionOutput {
}
export interface DeleteHostInput {
  HostArn: string;
}
export interface DeleteHostOutput {
}
export interface DeleteRepositoryLinkInput {
  RepositoryLinkId: string;
}
export interface DeleteRepositoryLinkOutput {
}
export interface DeleteSyncConfigurationInput {
  SyncType: SyncConfigurationType;
  ResourceName: string;
}
export interface DeleteSyncConfigurationOutput {
}
export type DeploymentFilePath = string;

export type Directory = string;

export type ErrorMessage = string;

export type Event = string;

export type ExternalId = string;

export interface GetConnectionInput {
  ConnectionArn: string;
}
export interface GetConnectionOutput {
  Connection?: Connection;
}
export interface GetHostInput {
  HostArn: string;
}
export interface GetHostOutput {
  Name?: string;
  Status?: string;
  ProviderType?: ProviderType;
  ProviderEndpoint?: string;
  VpcConfiguration?: VpcConfiguration;
}
export interface GetRepositoryLinkInput {
  RepositoryLinkId: string;
}
export interface GetRepositoryLinkOutput {
  RepositoryLinkInfo: RepositoryLinkInfo;
}
export interface GetRepositorySyncStatusInput {
  Branch: string;
  RepositoryLinkId: string;
  SyncType: SyncConfigurationType;
}
export interface GetRepositorySyncStatusOutput {
  LatestSync: RepositorySyncAttempt;
}
export interface GetResourceSyncStatusInput {
  ResourceName: string;
  SyncType: SyncConfigurationType;
}
export interface GetResourceSyncStatusOutput {
  DesiredState?: Revision;
  LatestSuccessfulSync?: ResourceSyncAttempt;
  LatestSync: ResourceSyncAttempt;
}
export interface GetSyncBlockerSummaryInput {
  SyncType: SyncConfigurationType;
  ResourceName: string;
}
export interface GetSyncBlockerSummaryOutput {
  SyncBlockerSummary: SyncBlockerSummary;
}
export interface GetSyncConfigurationInput {
  SyncType: SyncConfigurationType;
  ResourceName: string;
}
export interface GetSyncConfigurationOutput {
  SyncConfiguration: SyncConfiguration;
}
export interface Host {
  Name?: string;
  HostArn?: string;
  ProviderType?: ProviderType;
  ProviderEndpoint?: string;
  VpcConfiguration?: VpcConfiguration;
  Status?: string;
  StatusMessage?: string;
}
export type HostArn = string;

export type HostList = Array<Host>;
export type HostName = string;

export type HostStatus = string;

export type HostStatusMessage = string;

export type IamRoleArn = string;

export type Id = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly Message?: string;
}> {}
export type KmsKeyArn = string;

export type LatestSyncBlockerList = Array<SyncBlocker>;
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListConnectionsInput {
  ProviderTypeFilter?: ProviderType;
  HostArnFilter?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListConnectionsOutput {
  Connections?: Array<Connection>;
  NextToken?: string;
}
export interface ListHostsInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListHostsOutput {
  Hosts?: Array<Host>;
  NextToken?: string;
}
export interface ListRepositoryLinksInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRepositoryLinksOutput {
  RepositoryLinks: Array<RepositoryLinkInfo>;
  NextToken?: string;
}
export interface ListRepositorySyncDefinitionsInput {
  RepositoryLinkId: string;
  SyncType: SyncConfigurationType;
}
export interface ListRepositorySyncDefinitionsOutput {
  RepositorySyncDefinitions: Array<RepositorySyncDefinition>;
  NextToken?: string;
}
export interface ListSyncConfigurationsInput {
  MaxResults?: number;
  NextToken?: string;
  RepositoryLinkId: string;
  SyncType: SyncConfigurationType;
}
export interface ListSyncConfigurationsOutput {
  SyncConfigurations: Array<SyncConfiguration>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  ResourceArn: string;
}
export interface ListTagsForResourceOutput {
  Tags?: Array<Tag>;
}
export type MaxResults = number;

export type NextToken = string;

export type OwnerId = string;

export type Parent = string;

export type ProviderType = "Bitbucket" | "GitHub" | "GitHubEnterpriseServer" | "GitLab" | "GitLabSelfManaged";
export type PublishDeploymentStatus = "ENABLED" | "DISABLED";
export type RepositoryLinkArn = string;

export type RepositoryLinkId = string;

export interface RepositoryLinkInfo {
  ConnectionArn: string;
  EncryptionKeyArn?: string;
  OwnerId: string;
  ProviderType: ProviderType;
  RepositoryLinkArn: string;
  RepositoryLinkId: string;
  RepositoryName: string;
}
export type RepositoryLinkList = Array<RepositoryLinkInfo>;
export type RepositoryName = string;

export interface RepositorySyncAttempt {
  StartedAt: Date | string;
  Status: RepositorySyncStatus;
  Events: Array<RepositorySyncEvent>;
}
export interface RepositorySyncDefinition {
  Branch: string;
  Directory: string;
  Parent: string;
  Target: string;
}
export type RepositorySyncDefinitionList = Array<RepositorySyncDefinition>;
export interface RepositorySyncEvent {
  Event: string;
  ExternalId?: string;
  Time: Date | string;
  Type: string;
}
export type RepositorySyncEventList = Array<RepositorySyncEvent>;
export type RepositorySyncStatus = "FAILED" | "INITIATED" | "IN_PROGRESS" | "SUCCEEDED" | "QUEUED";
export type ResolvedReason = string;

export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ResourceSyncAttempt {
  Events: Array<ResourceSyncEvent>;
  InitialRevision: Revision;
  StartedAt: Date | string;
  Status: ResourceSyncStatus;
  TargetRevision: Revision;
  Target: string;
}
export interface ResourceSyncEvent {
  Event: string;
  ExternalId?: string;
  Time: Date | string;
  Type: string;
}
export type ResourceSyncEventList = Array<ResourceSyncEvent>;
export type ResourceSyncStatus = "FAILED" | "INITIATED" | "IN_PROGRESS" | "SUCCEEDED";
export declare class ResourceUnavailableException extends EffectData.TaggedError(
  "ResourceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export declare class RetryLatestCommitFailedException extends EffectData.TaggedError(
  "RetryLatestCommitFailedException",
)<{
  readonly Message?: string;
}> {}
export interface Revision {
  Branch: string;
  Directory: string;
  OwnerId: string;
  RepositoryName: string;
  ProviderType: ProviderType;
  Sha: string;
}
export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export type SHA = string;

export type SharpNextToken = string;

export type SubnetId = string;

export type SubnetIds = Array<string>;
export interface SyncBlocker {
  Id: string;
  Type: BlockerType;
  Status: BlockerStatus;
  CreatedReason: string;
  CreatedAt: Date | string;
  Contexts?: Array<SyncBlockerContext>;
  ResolvedReason?: string;
  ResolvedAt?: Date | string;
}
export interface SyncBlockerContext {
  Key: string;
  Value: string;
}
export type SyncBlockerContextKey = string;

export type SyncBlockerContextList = Array<SyncBlockerContext>;
export type SyncBlockerContextValue = string;

export declare class SyncBlockerDoesNotExistException extends EffectData.TaggedError(
  "SyncBlockerDoesNotExistException",
)<{
  readonly Message?: string;
}> {}
export interface SyncBlockerSummary {
  ResourceName: string;
  ParentResourceName?: string;
  LatestBlockers?: Array<SyncBlocker>;
}
export interface SyncConfiguration {
  Branch: string;
  ConfigFile?: string;
  OwnerId: string;
  ProviderType: ProviderType;
  RepositoryLinkId: string;
  RepositoryName: string;
  ResourceName: string;
  RoleArn: string;
  SyncType: SyncConfigurationType;
  PublishDeploymentStatus?: PublishDeploymentStatus;
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn;
}
export type SyncConfigurationList = Array<SyncConfiguration>;
export declare class SyncConfigurationStillExistsException extends EffectData.TaggedError(
  "SyncConfigurationStillExistsException",
)<{
  readonly Message?: string;
}> {}
export type SyncConfigurationType = "CFN_STACK_SYNC";
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceInput {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceOutput {
}
export type TagValue = string;

export type Target = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type Timestamp = Date | string;

export type TlsCertificate = string;

export type TriggerResourceUpdateOn = "ANY_CHANGE" | "FILE_CHANGE";
export type Type = string;

export declare class UnsupportedOperationException extends EffectData.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly Message?: string;
}> {}
export declare class UnsupportedProviderTypeException extends EffectData.TaggedError(
  "UnsupportedProviderTypeException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceOutput {
}
export interface UpdateHostInput {
  HostArn: string;
  ProviderEndpoint?: string;
  VpcConfiguration?: VpcConfiguration;
}
export interface UpdateHostOutput {
}
export declare class UpdateOutOfSyncException extends EffectData.TaggedError(
  "UpdateOutOfSyncException",
)<{
  readonly Message?: string;
}> {}
export interface UpdateRepositoryLinkInput {
  ConnectionArn?: string;
  EncryptionKeyArn?: string;
  RepositoryLinkId: string;
}
export interface UpdateRepositoryLinkOutput {
  RepositoryLinkInfo: RepositoryLinkInfo;
}
export interface UpdateSyncBlockerInput {
  Id: string;
  SyncType: SyncConfigurationType;
  ResourceName: string;
  ResolvedReason: string;
}
export interface UpdateSyncBlockerOutput {
  ResourceName: string;
  ParentResourceName?: string;
  SyncBlocker: SyncBlocker;
}
export interface UpdateSyncConfigurationInput {
  Branch?: string;
  ConfigFile?: string;
  RepositoryLinkId?: string;
  ResourceName: string;
  RoleArn?: string;
  SyncType: SyncConfigurationType;
  PublishDeploymentStatus?: PublishDeploymentStatus;
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn;
}
export interface UpdateSyncConfigurationOutput {
  SyncConfiguration: SyncConfiguration;
}
export type Url = string;

export interface VpcConfiguration {
  VpcId: string;
  SubnetIds: Array<string>;
  SecurityGroupIds: Array<string>;
  TlsCertificate?: string;
}
export type VpcId = string;

export declare namespace CreateConnection {
  export type Input = CreateConnectionInput;
  export type Output = CreateConnectionOutput;
  export type Error =
    | LimitExceededException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateHost {
  export type Input = CreateHostInput;
  export type Output = CreateHostOutput;
  export type Error =
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateRepositoryLink {
  export type Input = CreateRepositoryLinkInput;
  export type Output = CreateRepositoryLinkOutput;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | InternalServerException
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSyncConfiguration {
  export type Input = CreateSyncConfigurationInput;
  export type Output = CreateSyncConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | InternalServerException
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteConnection {
  export type Input = DeleteConnectionInput;
  export type Output = DeleteConnectionOutput;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteHost {
  export type Input = DeleteHostInput;
  export type Output = DeleteHostOutput;
  export type Error =
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteRepositoryLink {
  export type Input = DeleteRepositoryLinkInput;
  export type Output = DeleteRepositoryLinkOutput;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | SyncConfigurationStillExistsException
    | ThrottlingException
    | UnsupportedProviderTypeException
    | CommonAwsError;
}

export declare namespace DeleteSyncConfiguration {
  export type Input = DeleteSyncConfigurationInput;
  export type Output = DeleteSyncConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | InternalServerException
    | InvalidInputException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetConnection {
  export type Input = GetConnectionInput;
  export type Output = GetConnectionOutput;
  export type Error =
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError;
}

export declare namespace GetHost {
  export type Input = GetHostInput;
  export type Output = GetHostOutput;
  export type Error =
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError;
}

export declare namespace GetRepositoryLink {
  export type Input = GetRepositoryLinkInput;
  export type Output = GetRepositoryLinkOutput;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetRepositorySyncStatus {
  export type Input = GetRepositorySyncStatusInput;
  export type Output = GetRepositorySyncStatusOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetResourceSyncStatus {
  export type Input = GetResourceSyncStatusInput;
  export type Output = GetResourceSyncStatusOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetSyncBlockerSummary {
  export type Input = GetSyncBlockerSummaryInput;
  export type Output = GetSyncBlockerSummaryOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetSyncConfiguration {
  export type Input = GetSyncConfigurationInput;
  export type Output = GetSyncConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListConnections {
  export type Input = ListConnectionsInput;
  export type Output = ListConnectionsOutput;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListHosts {
  export type Input = ListHostsInput;
  export type Output = ListHostsOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListRepositoryLinks {
  export type Input = ListRepositoryLinksInput;
  export type Output = ListRepositoryLinksOutput;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRepositorySyncDefinitions {
  export type Input = ListRepositorySyncDefinitionsInput;
  export type Output = ListRepositorySyncDefinitionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSyncConfigurations {
  export type Input = ListSyncConfigurationsInput;
  export type Output = ListSyncConfigurationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateHost {
  export type Input = UpdateHostInput;
  export type Output = UpdateHostOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace UpdateRepositoryLink {
  export type Input = UpdateRepositoryLinkInput;
  export type Output = UpdateRepositoryLinkOutput;
  export type Error =
    | AccessDeniedException
    | ConditionalCheckFailedException
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | ThrottlingException
    | UpdateOutOfSyncException
    | CommonAwsError;
}

export declare namespace UpdateSyncBlocker {
  export type Input = UpdateSyncBlockerInput;
  export type Output = UpdateSyncBlockerOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | RetryLatestCommitFailedException
    | SyncBlockerDoesNotExistException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateSyncConfiguration {
  export type Input = UpdateSyncConfigurationInput;
  export type Output = UpdateSyncConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | ThrottlingException
    | UpdateOutOfSyncException
    | CommonAwsError;
}

export type CodeStarconnectionsErrors = AccessDeniedException | ConcurrentModificationException | ConditionalCheckFailedException | ConflictException | InternalServerException | InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceNotFoundException | ResourceUnavailableException | RetryLatestCommitFailedException | SyncBlockerDoesNotExistException | SyncConfigurationStillExistsException | ThrottlingException | UnsupportedOperationException | UnsupportedProviderTypeException | UpdateOutOfSyncException | CommonAwsError;


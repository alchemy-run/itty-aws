import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class MigrationHub extends AWSServiceClient {
  associateCreatedArtifact(
    input: AssociateCreatedArtifactRequest,
  ): Effect.Effect<
    AssociateCreatedArtifactResult,
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError
  >;
  associateDiscoveredResource(
    input: AssociateDiscoveredResourceRequest,
  ): Effect.Effect<
    AssociateDiscoveredResourceResult,
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | PolicyErrorException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError
  >;
  associateSourceResource(
    input: AssociateSourceResourceRequest,
  ): Effect.Effect<
    AssociateSourceResourceResult,
    | AccessDeniedException
    | DryRunOperation
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError
  >;
  createProgressUpdateStream(
    input: CreateProgressUpdateStreamRequest,
  ): Effect.Effect<
    CreateProgressUpdateStreamResult,
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError
  >;
  deleteProgressUpdateStream(
    input: DeleteProgressUpdateStreamRequest,
  ): Effect.Effect<
    DeleteProgressUpdateStreamResult,
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError
  >;
  describeApplicationState(
    input: DescribeApplicationStateRequest,
  ): Effect.Effect<
    DescribeApplicationStateResult,
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | PolicyErrorException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeMigrationTask(
    input: DescribeMigrationTaskRequest,
  ): Effect.Effect<
    DescribeMigrationTaskResult,
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateCreatedArtifact(
    input: DisassociateCreatedArtifactRequest,
  ): Effect.Effect<
    DisassociateCreatedArtifactResult,
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError
  >;
  disassociateDiscoveredResource(
    input: DisassociateDiscoveredResourceRequest,
  ): Effect.Effect<
    DisassociateDiscoveredResourceResult,
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError
  >;
  disassociateSourceResource(
    input: DisassociateSourceResourceRequest,
  ): Effect.Effect<
    DisassociateSourceResourceResult,
    | AccessDeniedException
    | DryRunOperation
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError
  >;
  importMigrationTask(
    input: ImportMigrationTaskRequest,
  ): Effect.Effect<
    ImportMigrationTaskResult,
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError
  >;
  listApplicationStates(
    input: ListApplicationStatesRequest,
  ): Effect.Effect<
    ListApplicationStatesResult,
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listCreatedArtifacts(
    input: ListCreatedArtifactsRequest,
  ): Effect.Effect<
    ListCreatedArtifactsResult,
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listDiscoveredResources(
    input: ListDiscoveredResourcesRequest,
  ): Effect.Effect<
    ListDiscoveredResourcesResult,
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listMigrationTasks(
    input: ListMigrationTasksRequest,
  ): Effect.Effect<
    ListMigrationTasksResult,
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | PolicyErrorException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listMigrationTaskUpdates(
    input: ListMigrationTaskUpdatesRequest,
  ): Effect.Effect<
    ListMigrationTaskUpdatesResult,
    | AccessDeniedException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listProgressUpdateStreams(
    input: ListProgressUpdateStreamsRequest,
  ): Effect.Effect<
    ListProgressUpdateStreamsResult,
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listSourceResources(
    input: ListSourceResourcesRequest,
  ): Effect.Effect<
    ListSourceResourcesResult,
    | AccessDeniedException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  notifyApplicationState(
    input: NotifyApplicationStateRequest,
  ): Effect.Effect<
    NotifyApplicationStateResult,
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | PolicyErrorException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError
  >;
  notifyMigrationTaskState(
    input: NotifyMigrationTaskStateRequest,
  ): Effect.Effect<
    NotifyMigrationTaskStateResult,
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError
  >;
  putResourceAttributes(
    input: PutResourceAttributesRequest,
  ): Effect.Effect<
    PutResourceAttributesResult,
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type ApplicationId = string;

export type ApplicationIds = Array<string>;
export interface ApplicationState {
  ApplicationId?: string;
  ApplicationStatus?: ApplicationStatus;
  LastUpdatedTime?: Date | string;
}
export type ApplicationStateList = Array<ApplicationState>;
export type ApplicationStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
export interface AssociateCreatedArtifactRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
  CreatedArtifact: CreatedArtifact;
  DryRun?: boolean;
}
export interface AssociateCreatedArtifactResult {}
export interface AssociateDiscoveredResourceRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
  DiscoveredResource: DiscoveredResource;
  DryRun?: boolean;
}
export interface AssociateDiscoveredResourceResult {}
export interface AssociateSourceResourceRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
  SourceResource: SourceResource;
  DryRun?: boolean;
}
export interface AssociateSourceResourceResult {}
export type ConfigurationId = string;

export interface CreatedArtifact {
  Name: string;
  Description?: string;
}
export type CreatedArtifactDescription = string;

export type CreatedArtifactList = Array<CreatedArtifact>;
export type CreatedArtifactName = string;

export interface CreateProgressUpdateStreamRequest {
  ProgressUpdateStreamName: string;
  DryRun?: boolean;
}
export interface CreateProgressUpdateStreamResult {}
export interface DeleteProgressUpdateStreamRequest {
  ProgressUpdateStreamName: string;
  DryRun?: boolean;
}
export interface DeleteProgressUpdateStreamResult {}
export interface DescribeApplicationStateRequest {
  ApplicationId: string;
}
export interface DescribeApplicationStateResult {
  ApplicationStatus?: ApplicationStatus;
  LastUpdatedTime?: Date | string;
}
export interface DescribeMigrationTaskRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
}
export interface DescribeMigrationTaskResult {
  MigrationTask?: MigrationTask;
}
export interface DisassociateCreatedArtifactRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
  CreatedArtifactName: string;
  DryRun?: boolean;
}
export interface DisassociateCreatedArtifactResult {}
export interface DisassociateDiscoveredResourceRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
  ConfigurationId: string;
  DryRun?: boolean;
}
export interface DisassociateDiscoveredResourceResult {}
export interface DisassociateSourceResourceRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
  SourceResourceName: string;
  DryRun?: boolean;
}
export interface DisassociateSourceResourceResult {}
export interface DiscoveredResource {
  ConfigurationId: string;
  Description?: string;
}
export type DiscoveredResourceDescription = string;

export type DiscoveredResourceList = Array<DiscoveredResource>;
export type DryRun = boolean;

export declare class DryRunOperation extends EffectData.TaggedError(
  "DryRunOperation",
)<{
  readonly Message?: string;
}> {}
export type ErrorMessage = string;

export declare class HomeRegionNotSetException extends EffectData.TaggedError(
  "HomeRegionNotSetException",
)<{
  readonly Message?: string;
}> {}
export interface ImportMigrationTaskRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
  DryRun?: boolean;
}
export interface ImportMigrationTaskResult {}
export declare class InternalServerError extends EffectData.TaggedError(
  "InternalServerError",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly Message?: string;
}> {}
export type LatestResourceAttributeList = Array<ResourceAttribute>;
export interface ListApplicationStatesRequest {
  ApplicationIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListApplicationStatesResult {
  ApplicationStateList?: Array<ApplicationState>;
  NextToken?: string;
}
export interface ListCreatedArtifactsRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCreatedArtifactsResult {
  NextToken?: string;
  CreatedArtifactList?: Array<CreatedArtifact>;
}
export interface ListDiscoveredResourcesRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDiscoveredResourcesResult {
  NextToken?: string;
  DiscoveredResourceList?: Array<DiscoveredResource>;
}
export interface ListMigrationTasksRequest {
  NextToken?: string;
  MaxResults?: number;
  ResourceName?: string;
}
export interface ListMigrationTasksResult {
  NextToken?: string;
  MigrationTaskSummaryList?: Array<MigrationTaskSummary>;
}
export interface ListMigrationTaskUpdatesRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMigrationTaskUpdatesResult {
  NextToken?: string;
  MigrationTaskUpdateList?: Array<MigrationTaskUpdate>;
}
export interface ListProgressUpdateStreamsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProgressUpdateStreamsResult {
  ProgressUpdateStreamSummaryList?: Array<ProgressUpdateStreamSummary>;
  NextToken?: string;
}
export interface ListSourceResourcesRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSourceResourcesResult {
  NextToken?: string;
  SourceResourceList?: Array<SourceResource>;
}
export type MaxResults = number;

export type MaxResultsCreatedArtifacts = number;

export type MaxResultsResources = number;

export type MaxResultsSourceResources = number;

export interface MigrationTask {
  ProgressUpdateStream?: string;
  MigrationTaskName?: string;
  Task?: Task;
  UpdateDateTime?: Date | string;
  ResourceAttributeList?: Array<ResourceAttribute>;
}
export type MigrationTaskName = string;

export interface MigrationTaskSummary {
  ProgressUpdateStream?: string;
  MigrationTaskName?: string;
  Status?: Status;
  ProgressPercent?: number;
  StatusDetail?: string;
  UpdateDateTime?: Date | string;
}
export type MigrationTaskSummaryList = Array<MigrationTaskSummary>;
export interface MigrationTaskUpdate {
  UpdateDateTime?: Date | string;
  UpdateType?: UpdateType;
  MigrationTaskState?: Task;
}
export type MigrationTaskUpdateList = Array<MigrationTaskUpdate>;
export type NextUpdateSeconds = number;

export interface NotifyApplicationStateRequest {
  ApplicationId: string;
  Status: ApplicationStatus;
  UpdateDateTime?: Date | string;
  DryRun?: boolean;
}
export interface NotifyApplicationStateResult {}
export interface NotifyMigrationTaskStateRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
  Task: Task;
  UpdateDateTime: Date | string;
  NextUpdateSeconds: number;
  DryRun?: boolean;
}
export interface NotifyMigrationTaskStateResult {}
export declare class PolicyErrorException extends EffectData.TaggedError(
  "PolicyErrorException",
)<{
  readonly Message?: string;
}> {}
export type ProgressPercent = number;

export type ProgressUpdateStream = string;

export interface ProgressUpdateStreamSummary {
  ProgressUpdateStreamName?: string;
}
export type ProgressUpdateStreamSummaryList =
  Array<ProgressUpdateStreamSummary>;
export interface PutResourceAttributesRequest {
  ProgressUpdateStream: string;
  MigrationTaskName: string;
  ResourceAttributeList: Array<ResourceAttribute>;
  DryRun?: boolean;
}
export interface PutResourceAttributesResult {}
export interface ResourceAttribute {
  Type: ResourceAttributeType;
  Value: string;
}
export type ResourceAttributeList = Array<ResourceAttribute>;
export type ResourceAttributeType =
  | "IPV4_ADDRESS"
  | "IPV6_ADDRESS"
  | "MAC_ADDRESS"
  | "FQDN"
  | "VM_MANAGER_ID"
  | "VM_MANAGED_OBJECT_REFERENCE"
  | "VM_NAME"
  | "VM_PATH"
  | "BIOS_ID"
  | "MOTHERBOARD_SERIAL_NUMBER";
export type ResourceAttributeValue = string;

export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type RetryAfterSeconds = number;

export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export interface SourceResource {
  Name: string;
  Description?: string;
  StatusDetail?: string;
}
export type SourceResourceDescription = string;

export type SourceResourceList = Array<SourceResource>;
export type SourceResourceName = string;

export type Status = "NOT_STARTED" | "IN_PROGRESS" | "FAILED" | "COMPLETED";
export type StatusDetail = string;

export interface Task {
  Status: Status;
  StatusDetail?: string;
  ProgressPercent?: number;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly RetryAfterSeconds?: number;
}> {}
export type Token = string;

export declare class UnauthorizedOperation extends EffectData.TaggedError(
  "UnauthorizedOperation",
)<{
  readonly Message?: string;
}> {}
export type UpdateDateTime = Date | string;

export type UpdateType = "MIGRATION_TASK_STATE_UPDATED";
export declare namespace AssociateCreatedArtifact {
  export type Input = AssociateCreatedArtifactRequest;
  export type Output = AssociateCreatedArtifactResult;
  export type Error =
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace AssociateDiscoveredResource {
  export type Input = AssociateDiscoveredResourceRequest;
  export type Output = AssociateDiscoveredResourceResult;
  export type Error =
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | PolicyErrorException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace AssociateSourceResource {
  export type Input = AssociateSourceResourceRequest;
  export type Output = AssociateSourceResourceResult;
  export type Error =
    | AccessDeniedException
    | DryRunOperation
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace CreateProgressUpdateStream {
  export type Input = CreateProgressUpdateStreamRequest;
  export type Output = CreateProgressUpdateStreamResult;
  export type Error =
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace DeleteProgressUpdateStream {
  export type Input = DeleteProgressUpdateStreamRequest;
  export type Output = DeleteProgressUpdateStreamResult;
  export type Error =
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace DescribeApplicationState {
  export type Input = DescribeApplicationStateRequest;
  export type Output = DescribeApplicationStateResult;
  export type Error =
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | PolicyErrorException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeMigrationTask {
  export type Input = DescribeMigrationTaskRequest;
  export type Output = DescribeMigrationTaskResult;
  export type Error =
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateCreatedArtifact {
  export type Input = DisassociateCreatedArtifactRequest;
  export type Output = DisassociateCreatedArtifactResult;
  export type Error =
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace DisassociateDiscoveredResource {
  export type Input = DisassociateDiscoveredResourceRequest;
  export type Output = DisassociateDiscoveredResourceResult;
  export type Error =
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace DisassociateSourceResource {
  export type Input = DisassociateSourceResourceRequest;
  export type Output = DisassociateSourceResourceResult;
  export type Error =
    | AccessDeniedException
    | DryRunOperation
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace ImportMigrationTask {
  export type Input = ImportMigrationTaskRequest;
  export type Output = ImportMigrationTaskResult;
  export type Error =
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace ListApplicationStates {
  export type Input = ListApplicationStatesRequest;
  export type Output = ListApplicationStatesResult;
  export type Error =
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListCreatedArtifacts {
  export type Input = ListCreatedArtifactsRequest;
  export type Output = ListCreatedArtifactsResult;
  export type Error =
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDiscoveredResources {
  export type Input = ListDiscoveredResourcesRequest;
  export type Output = ListDiscoveredResourcesResult;
  export type Error =
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListMigrationTasks {
  export type Input = ListMigrationTasksRequest;
  export type Output = ListMigrationTasksResult;
  export type Error =
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | PolicyErrorException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListMigrationTaskUpdates {
  export type Input = ListMigrationTaskUpdatesRequest;
  export type Output = ListMigrationTaskUpdatesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListProgressUpdateStreams {
  export type Input = ListProgressUpdateStreamsRequest;
  export type Output = ListProgressUpdateStreamsResult;
  export type Error =
    | AccessDeniedException
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSourceResources {
  export type Input = ListSourceResourcesRequest;
  export type Output = ListSourceResourcesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace NotifyApplicationState {
  export type Input = NotifyApplicationStateRequest;
  export type Output = NotifyApplicationStateResult;
  export type Error =
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | PolicyErrorException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace NotifyMigrationTaskState {
  export type Input = NotifyMigrationTaskStateRequest;
  export type Output = NotifyMigrationTaskStateResult;
  export type Error =
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace PutResourceAttributes {
  export type Input = PutResourceAttributesRequest;
  export type Output = PutResourceAttributesResult;
  export type Error =
    | AccessDeniedException
    | DryRunOperation
    | HomeRegionNotSetException
    | InternalServerError
    | InvalidInputException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedOperation
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "Migration Hub",
  version: "2017-05-31",
  protocol: "awsJson1_1",
  endpointPrefix: "mgh",
  targetPrefix: "AWSMigrationHub",
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;

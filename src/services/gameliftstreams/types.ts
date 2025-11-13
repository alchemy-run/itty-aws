import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class GameLiftStreams extends AWSServiceClient {
  addStreamGroupLocations(
    input: AddStreamGroupLocationsInput,
  ): Effect.Effect<
    AddStreamGroupLocationsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateApplications(
    input: AssociateApplicationsInput,
  ): Effect.Effect<
    AssociateApplicationsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createStreamSessionConnection(
    input: CreateStreamSessionConnectionInput,
  ): Effect.Effect<
    CreateStreamSessionConnectionOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateApplications(
    input: DisassociateApplicationsInput,
  ): Effect.Effect<
    DisassociateApplicationsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  exportStreamSessionFiles(
    input: ExportStreamSessionFilesInput,
  ): Effect.Effect<
    ExportStreamSessionFilesOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getStreamSession(
    input: GetStreamSessionInput,
  ): Effect.Effect<
    GetStreamSessionOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listStreamSessions(
    input: ListStreamSessionsInput,
  ): Effect.Effect<
    ListStreamSessionsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listStreamSessionsByAccount(
    input: ListStreamSessionsByAccountInput,
  ): Effect.Effect<
    ListStreamSessionsByAccountOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  removeStreamGroupLocations(
    input: RemoveStreamGroupLocationsInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startStreamSession(
    input: StartStreamSessionInput,
  ): Effect.Effect<
    StartStreamSessionOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  terminateStreamSession(
    input: TerminateStreamSessionInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationInput,
  ): Effect.Effect<
    CreateApplicationOutput,
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createStreamGroup(
    input: CreateStreamGroupInput,
  ): Effect.Effect<
    CreateStreamGroupOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteStreamGroup(
    input: DeleteStreamGroupInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getApplication(
    input: GetApplicationInput,
  ): Effect.Effect<
    GetApplicationOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getStreamGroup(
    input: GetStreamGroupInput,
  ): Effect.Effect<
    GetStreamGroupOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsInput,
  ): Effect.Effect<
    ListApplicationsOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listStreamGroups(
    input: ListStreamGroupsInput,
  ): Effect.Effect<
    ListStreamGroupsOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationInput,
  ): Effect.Effect<
    UpdateApplicationOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateStreamGroup(
    input: UpdateStreamGroupInput,
  ): Effect.Effect<
    UpdateStreamGroupOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export declare class Gameliftstreams extends GameLiftStreams {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export interface AddStreamGroupLocationsInput {
  Identifier: string;
  LocationConfigurations: Array<LocationConfiguration>;
}
export interface AddStreamGroupLocationsOutput {
  Identifier: string;
  Locations: Array<LocationState>;
}
export type AlwaysOnCapacity = number;

export type ApplicationLogOutputUri = string;

export type ApplicationSourceUri = string;

export type ApplicationStatus = "INITIALIZED" | "PROCESSING" | "READY" | "DELETING" | "ERROR";
export type ApplicationStatusReason = "internalError" | "accessDenied";
export interface ApplicationSummary {
  Arn: string;
  Id?: string;
  Description?: string;
  Status?: ApplicationStatus;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  RuntimeEnvironment?: RuntimeEnvironment;
}
export type ApplicationSummaryList = Array<ApplicationSummary>;
export type Arn = string;

export type ArnList = Array<string>;
export interface AssociateApplicationsInput {
  Identifier: string;
  ApplicationIdentifiers: Array<string>;
}
export interface AssociateApplicationsOutput {
  Arn?: string;
  ApplicationArns?: Array<string>;
}
export type CapacityValue = number;

export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
}> {}
export type ConnectionTimeoutSeconds = number;

export interface CreateApplicationInput {
  Description: string;
  RuntimeEnvironment: RuntimeEnvironment;
  ExecutablePath: string;
  ApplicationSourceUri: string;
  ApplicationLogPaths?: Array<string>;
  ApplicationLogOutputUri?: string;
  Tags?: Record<string, string>;
  ClientToken?: string;
}
export interface CreateApplicationOutput {
  Arn: string;
  Description?: string;
  RuntimeEnvironment?: RuntimeEnvironment;
  ExecutablePath?: string;
  ApplicationLogPaths?: Array<string>;
  ApplicationLogOutputUri?: string;
  ApplicationSourceUri?: string;
  Id?: string;
  Status?: ApplicationStatus;
  StatusReason?: ApplicationStatusReason;
  ReplicationStatuses?: Array<ReplicationStatus>;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  AssociatedStreamGroups?: Array<string>;
}
export interface CreateStreamGroupInput {
  Description: string;
  StreamClass: StreamClass;
  DefaultApplicationIdentifier?: string;
  LocationConfigurations?: Array<LocationConfiguration>;
  Tags?: Record<string, string>;
  ClientToken?: string;
}
export interface CreateStreamGroupOutput {
  Arn: string;
  Description?: string;
  DefaultApplication?: DefaultApplication;
  LocationStates?: Array<LocationState>;
  StreamClass?: StreamClass;
  Id?: string;
  Status?: StreamGroupStatus;
  StatusReason?: StreamGroupStatusReason;
  LastUpdatedAt?: Date | string;
  CreatedAt?: Date | string;
  ExpiresAt?: Date | string;
  AssociatedApplications?: Array<string>;
}
export interface CreateStreamSessionConnectionInput {
  ClientToken?: string;
  Identifier: string;
  StreamSessionIdentifier: string;
  SignalRequest: string;
}
export interface CreateStreamSessionConnectionOutput {
  SignalResponse?: string;
}
export interface DefaultApplication {
  Id?: string;
  Arn?: string;
}
export interface DeleteApplicationInput {
  Identifier: string;
}
export interface DeleteStreamGroupInput {
  Identifier: string;
}
export type Description = string;

export interface DisassociateApplicationsInput {
  Identifier: string;
  ApplicationIdentifiers: Array<string>;
}
export interface DisassociateApplicationsOutput {
  Arn?: string;
  ApplicationArns?: Array<string>;
}
export type EnvironmentVariables = Record<string, string>;
export type ExecutablePath = string;

export interface ExportFilesMetadata {
  Status?: ExportFilesStatus;
  StatusReason?: string;
  OutputUri?: string;
}
export type ExportFilesReason = string;

export type ExportFilesStatus = "SUCCEEDED" | "FAILED" | "PENDING";
export interface ExportStreamSessionFilesInput {
  Identifier: string;
  StreamSessionIdentifier: string;
  OutputUri: string;
}
export interface ExportStreamSessionFilesOutput {
}
export type FileLocationUri = string;

export type FilePath = string;

export type FilePaths = Array<string>;
export type GameLaunchArgList = Array<string>;
export interface GetApplicationInput {
  Identifier: string;
}
export interface GetApplicationOutput {
  Arn: string;
  Description?: string;
  RuntimeEnvironment?: RuntimeEnvironment;
  ExecutablePath?: string;
  ApplicationLogPaths?: Array<string>;
  ApplicationLogOutputUri?: string;
  ApplicationSourceUri?: string;
  Id?: string;
  Status?: ApplicationStatus;
  StatusReason?: ApplicationStatusReason;
  ReplicationStatuses?: Array<ReplicationStatus>;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  AssociatedStreamGroups?: Array<string>;
}
export interface GetStreamGroupInput {
  Identifier: string;
}
export interface GetStreamGroupOutput {
  Arn: string;
  Description?: string;
  DefaultApplication?: DefaultApplication;
  LocationStates?: Array<LocationState>;
  StreamClass?: StreamClass;
  Id?: string;
  Status?: StreamGroupStatus;
  StatusReason?: StreamGroupStatusReason;
  LastUpdatedAt?: Date | string;
  CreatedAt?: Date | string;
  ExpiresAt?: Date | string;
  AssociatedApplications?: Array<string>;
}
export interface GetStreamSessionInput {
  Identifier: string;
  StreamSessionIdentifier: string;
}
export interface GetStreamSessionOutput {
  Arn?: string;
  Description?: string;
  StreamGroupId?: string;
  UserId?: string;
  Status?: StreamSessionStatus;
  StatusReason?: StreamSessionStatusReason;
  Protocol?: Protocol;
  Location?: string;
  SignalRequest?: string;
  SignalResponse?: string;
  ConnectionTimeoutSeconds?: number;
  SessionLengthSeconds?: number;
  AdditionalLaunchArgs?: Array<string>;
  AdditionalEnvironmentVariables?: Record<string, string>;
  LogFileLocationUri?: string;
  WebSdkProtocolUrl?: string;
  LastUpdatedAt?: Date | string;
  CreatedAt?: Date | string;
  ApplicationArn?: string;
  ExportFilesMetadata?: ExportFilesMetadata;
}
export type Id = string;

export type Identifier = string;

export type Identifiers = Array<string>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export interface ListApplicationsInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListApplicationsOutput {
  Items?: Array<ApplicationSummary>;
  NextToken?: string;
}
export interface ListStreamGroupsInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListStreamGroupsOutput {
  Items?: Array<StreamGroupSummary>;
  NextToken?: string;
}
export interface ListStreamSessionsByAccountInput {
  Status?: StreamSessionStatus;
  ExportFilesStatus?: ExportFilesStatus;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListStreamSessionsByAccountOutput {
  Items?: Array<StreamSessionSummary>;
  NextToken?: string;
}
export interface ListStreamSessionsInput {
  Status?: StreamSessionStatus;
  ExportFilesStatus?: ExportFilesStatus;
  NextToken?: string;
  MaxResults?: number;
  Identifier: string;
}
export interface ListStreamSessionsOutput {
  Items?: Array<StreamSessionSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface LocationConfiguration {
  LocationName: string;
  AlwaysOnCapacity?: number;
  OnDemandCapacity?: number;
}
export type LocationConfigurations = Array<LocationConfiguration>;
export type LocationList = Array<string>;
export type LocationName = string;

export type LocationsList = Array<string>;
export interface LocationState {
  LocationName?: string;
  Status?: StreamGroupLocationStatus;
  AlwaysOnCapacity?: number;
  OnDemandCapacity?: number;
  RequestedCapacity?: number;
  AllocatedCapacity?: number;
  IdleCapacity?: number;
}
export type LocationStates = Array<LocationState>;
export type MaxResults = number;

export type NextToken = string;

export type OnDemandCapacity = number;

export type OutputUri = string;

export type Protocol = "WebRTC";
export interface RemoveStreamGroupLocationsInput {
  Identifier: string;
  Locations: Array<string>;
}
export interface ReplicationStatus {
  Location?: string;
  Status?: ReplicationStatusType;
}
export type ReplicationStatuses = Array<ReplicationStatus>;
export type ReplicationStatusType = "REPLICATING" | "COMPLETED";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
}> {}
export interface RuntimeEnvironment {
  Type: RuntimeEnvironmentType;
  Version: string;
}
export type RuntimeEnvironmentType = "PROTON" | "WINDOWS" | "UBUNTU";
export type RuntimeEnvironmentVersion = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
}> {}
export type SessionLengthSeconds = number;

export type SignalRequest = string;

export type SignalResponse = string;

export interface StartStreamSessionInput {
  ClientToken?: string;
  Description?: string;
  Identifier: string;
  Protocol: Protocol;
  SignalRequest: string;
  ApplicationIdentifier: string;
  UserId?: string;
  Locations?: Array<string>;
  ConnectionTimeoutSeconds?: number;
  SessionLengthSeconds?: number;
  AdditionalLaunchArgs?: Array<string>;
  AdditionalEnvironmentVariables?: Record<string, string>;
}
export interface StartStreamSessionOutput {
  Arn?: string;
  Description?: string;
  StreamGroupId?: string;
  UserId?: string;
  Status?: StreamSessionStatus;
  StatusReason?: StreamSessionStatusReason;
  Protocol?: Protocol;
  Location?: string;
  SignalRequest?: string;
  SignalResponse?: string;
  ConnectionTimeoutSeconds?: number;
  SessionLengthSeconds?: number;
  AdditionalLaunchArgs?: Array<string>;
  AdditionalEnvironmentVariables?: Record<string, string>;
  LogFileLocationUri?: string;
  WebSdkProtocolUrl?: string;
  LastUpdatedAt?: Date | string;
  CreatedAt?: Date | string;
  ApplicationArn?: string;
  ExportFilesMetadata?: ExportFilesMetadata;
}
export type StreamClass = "gen4n_high" | "gen4n_ultra" | "gen4n_win2022" | "gen5n_high" | "gen5n_ultra" | "gen5n_win2022";
export type StreamGroupLocationStatus = "ACTIVATING" | "ACTIVE" | "ERROR" | "REMOVING";
export type StreamGroupStatus = "ACTIVATING" | "UPDATING_LOCATIONS" | "ACTIVE" | "ACTIVE_WITH_ERRORS" | "ERROR" | "DELETING" | "EXPIRED";
export type StreamGroupStatusReason = "internalError" | "noAvailableInstances";
export interface StreamGroupSummary {
  Arn: string;
  Id?: string;
  Description?: string;
  DefaultApplication?: DefaultApplication;
  StreamClass?: StreamClass;
  Status?: StreamGroupStatus;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  ExpiresAt?: Date | string;
}
export type StreamGroupSummaryList = Array<StreamGroupSummary>;
export type StreamSessionStatus = "ACTIVATING" | "ACTIVE" | "CONNECTED" | "PENDING_CLIENT_RECONNECTION" | "RECONNECTING" | "TERMINATING" | "TERMINATED" | "ERROR";
export type StreamSessionStatusReason = "internalError" | "invalidSignalRequest" | "placementTimeout" | "applicationLogS3DestinationError" | "applicationExit" | "connectionTimeout" | "reconnectionTimeout" | "maxSessionLengthTimeout" | "idleTimeout" | "apiTerminated";
export interface StreamSessionSummary {
  Arn?: string;
  UserId?: string;
  Status?: StreamSessionStatus;
  Protocol?: Protocol;
  LastUpdatedAt?: Date | string;
  CreatedAt?: Date | string;
  ApplicationArn?: string;
  ExportFilesMetadata?: ExportFilesMetadata;
  Location?: string;
}
export type StreamSessionSummaryList = Array<StreamSessionSummary>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type Tags = Record<string, string>;
export type TagValue = string;

export interface TerminateStreamSessionInput {
  Identifier: string;
  StreamSessionIdentifier: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateApplicationInput {
  Identifier: string;
  Description?: string;
  ApplicationLogPaths?: Array<string>;
  ApplicationLogOutputUri?: string;
}
export interface UpdateApplicationOutput {
  Arn: string;
  Description?: string;
  RuntimeEnvironment?: RuntimeEnvironment;
  ExecutablePath?: string;
  ApplicationLogPaths?: Array<string>;
  ApplicationLogOutputUri?: string;
  ApplicationSourceUri?: string;
  Id?: string;
  Status?: ApplicationStatus;
  StatusReason?: ApplicationStatusReason;
  ReplicationStatuses?: Array<ReplicationStatus>;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  AssociatedStreamGroups?: Array<string>;
}
export interface UpdateStreamGroupInput {
  Identifier: string;
  LocationConfigurations?: Array<LocationConfiguration>;
  Description?: string;
  DefaultApplicationIdentifier?: string;
}
export interface UpdateStreamGroupOutput {
  Arn: string;
  Description?: string;
  DefaultApplication?: DefaultApplication;
  LocationStates?: Array<LocationState>;
  StreamClass?: StreamClass;
  Id?: string;
  Status?: StreamGroupStatus;
  StatusReason?: StreamGroupStatusReason;
  LastUpdatedAt?: Date | string;
  CreatedAt?: Date | string;
  ExpiresAt?: Date | string;
  AssociatedApplications?: Array<string>;
}
export type UserId = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
}> {}
export type WebSdkProtocolUrl = string;

export declare namespace AddStreamGroupLocations {
  export type Input = AddStreamGroupLocationsInput;
  export type Output = AddStreamGroupLocationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateApplications {
  export type Input = AssociateApplicationsInput;
  export type Output = AssociateApplicationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateStreamSessionConnection {
  export type Input = CreateStreamSessionConnectionInput;
  export type Output = CreateStreamSessionConnectionOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateApplications {
  export type Input = DisassociateApplicationsInput;
  export type Output = DisassociateApplicationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ExportStreamSessionFiles {
  export type Input = ExportStreamSessionFilesInput;
  export type Output = ExportStreamSessionFilesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStreamSession {
  export type Input = GetStreamSessionInput;
  export type Output = GetStreamSessionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStreamSessions {
  export type Input = ListStreamSessionsInput;
  export type Output = ListStreamSessionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStreamSessionsByAccount {
  export type Input = ListStreamSessionsByAccountInput;
  export type Output = ListStreamSessionsByAccountOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemoveStreamGroupLocations {
  export type Input = RemoveStreamGroupLocationsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartStreamSession {
  export type Input = StartStreamSessionInput;
  export type Output = StartStreamSessionOutput;
  export type Error =
    | AccessDeniedException
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
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TerminateStreamSession {
  export type Input = TerminateStreamSessionInput;
  export type Output = {};
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
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationInput;
  export type Output = CreateApplicationOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateStreamGroup {
  export type Input = CreateStreamGroupInput;
  export type Output = CreateStreamGroupOutput;
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
  export type Input = DeleteApplicationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteStreamGroup {
  export type Input = DeleteStreamGroupInput;
  export type Output = {};
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
  export type Input = GetApplicationInput;
  export type Output = GetApplicationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStreamGroup {
  export type Input = GetStreamGroupInput;
  export type Output = GetStreamGroupOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsInput;
  export type Output = ListApplicationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStreamGroups {
  export type Input = ListStreamGroupsInput;
  export type Output = ListStreamGroupsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationInput;
  export type Output = UpdateApplicationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateStreamGroup {
  export type Input = UpdateStreamGroupInput;
  export type Output = UpdateStreamGroupOutput;
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

export type GameLiftStreamsErrors = AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError;


import type { Effect, Data as EffectData } from "effect";
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
  ThrottlingException,
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
  | ThrottlingException
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class SsmSap extends AWSServiceClient {
  deleteResourcePermission(
    input: DeleteResourcePermissionInput,
  ): Effect.Effect<
    DeleteResourcePermissionOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deregisterApplication(
    input: DeregisterApplicationInput,
  ): Effect.Effect<
    DeregisterApplicationOutput,
    | InternalServerException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getApplication(
    input: GetApplicationInput,
  ): Effect.Effect<
    GetApplicationOutput,
    InternalServerException | ValidationException | CommonAwsError
  >;
  getComponent(
    input: GetComponentInput,
  ): Effect.Effect<
    GetComponentOutput,
    | InternalServerException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getDatabase(
    input: GetDatabaseInput,
  ): Effect.Effect<
    GetDatabaseOutput,
    InternalServerException | ValidationException | CommonAwsError
  >;
  getOperation(
    input: GetOperationInput,
  ): Effect.Effect<
    GetOperationOutput,
    InternalServerException | ValidationException | CommonAwsError
  >;
  getResourcePermission(
    input: GetResourcePermissionInput,
  ): Effect.Effect<
    GetResourcePermissionOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsInput,
  ): Effect.Effect<
    ListApplicationsOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listComponents(
    input: ListComponentsInput,
  ): Effect.Effect<
    ListComponentsOutput,
    | InternalServerException
    | ResourceNotFoundException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listDatabases(
    input: ListDatabasesInput,
  ): Effect.Effect<
    ListDatabasesOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listOperationEvents(
    input: ListOperationEventsInput,
  ): Effect.Effect<
    ListOperationEventsOutput,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listOperations(
    input: ListOperationsInput,
  ): Effect.Effect<
    ListOperationsOutput,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putResourcePermission(
    input: PutResourcePermissionInput,
  ): Effect.Effect<
    PutResourcePermissionOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  registerApplication(
    input: RegisterApplicationInput,
  ): Effect.Effect<
    RegisterApplicationOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startApplication(
    input: StartApplicationInput,
  ): Effect.Effect<
    StartApplicationOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startApplicationRefresh(
    input: StartApplicationRefreshInput,
  ): Effect.Effect<
    StartApplicationRefreshOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  stopApplication(
    input: StopApplicationInput,
  ): Effect.Effect<
    StopApplicationOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateApplicationSettings(
    input: UpdateApplicationSettingsInput,
  ): Effect.Effect<
    UpdateApplicationSettingsOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
}

export type AllocationType =
  | "VPC_SUBNET"
  | "ELASTIC_IP"
  | "OVERLAY"
  | "UNKNOWN";
export interface Application {
  Id?: string;
  Type?: ApplicationType;
  Arn?: string;
  AppRegistryArn?: string;
  Status?: ApplicationStatus;
  DiscoveryStatus?: ApplicationDiscoveryStatus;
  Components?: Array<string>;
  LastUpdated?: Date | string;
  StatusMessage?: string;
  AssociatedApplicationArns?: Array<string>;
}
export type ApplicationArnList = Array<string>;
export interface ApplicationCredential {
  DatabaseName: string;
  CredentialType: CredentialType;
  SecretId: string;
}
export type ApplicationCredentialList = Array<ApplicationCredential>;
export type ApplicationDiscoveryStatus =
  | "SUCCESS"
  | "REGISTRATION_FAILED"
  | "REFRESH_FAILED"
  | "REGISTERING"
  | "DELETING";
export type ApplicationId = string;

export type ApplicationStatus =
  | "ACTIVATED"
  | "STARTING"
  | "STOPPED"
  | "STOPPING"
  | "FAILED"
  | "REGISTERING"
  | "DELETING"
  | "UNKNOWN";
export interface ApplicationSummary {
  Id?: string;
  DiscoveryStatus?: ApplicationDiscoveryStatus;
  Type?: ApplicationType;
  Arn?: string;
  Tags?: Record<string, string>;
}
export type ApplicationSummaryList = Array<ApplicationSummary>;
export type ApplicationType = "HANA" | "SAP_ABAP";
export type AppRegistryArn = string;

export type Arn = string;

export interface AssociatedHost {
  Hostname?: string;
  Ec2InstanceId?: string;
  IpAddresses?: Array<IpAddressMember>;
  OsVersion?: string;
}
export interface BackintConfig {
  BackintMode: BackintMode;
  EnsureNoBackupInProcess: boolean;
}
export type BackintMode = "AWSBackup";
export type ClusterStatus =
  | "ONLINE"
  | "STANDBY"
  | "MAINTENANCE"
  | "OFFLINE"
  | "NONE";
export interface Component {
  ComponentId?: string;
  Sid?: string;
  SystemNumber?: string;
  ParentComponent?: string;
  ChildComponents?: Array<string>;
  ApplicationId?: string;
  ComponentType?: ComponentType;
  Status?: ComponentStatus;
  SapHostname?: string;
  SapFeature?: string;
  SapKernelVersion?: string;
  HdbVersion?: string;
  Resilience?: Resilience;
  AssociatedHost?: AssociatedHost;
  Databases?: Array<string>;
  Hosts?: Array<Host>;
  PrimaryHost?: string;
  DatabaseConnection?: DatabaseConnection;
  LastUpdated?: Date | string;
  Arn?: string;
}
export type ComponentArnList = Array<string>;
export type ComponentId = string;

export type ComponentIdList = Array<string>;
export interface ComponentInfo {
  ComponentType: ComponentType;
  Sid: string;
  Ec2InstanceId: string;
}
export type ComponentInfoList = Array<ComponentInfo>;
export type ComponentStatus =
  | "ACTIVATED"
  | "STARTING"
  | "STOPPED"
  | "STOPPING"
  | "RUNNING"
  | "RUNNING_WITH_ERROR"
  | "UNDEFINED";
export interface ComponentSummary {
  ApplicationId?: string;
  ComponentId?: string;
  ComponentType?: ComponentType;
  Tags?: Record<string, string>;
  Arn?: string;
}
export type ComponentSummaryList = Array<ComponentSummary>;
export type ComponentType =
  | "HANA"
  | "HANA_NODE"
  | "ABAP"
  | "ASCS"
  | "DIALOG"
  | "WEBDISP"
  | "WD"
  | "ERS";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type ConnectedEntityType = "DBMS";
export type CredentialType = "ADMIN";
export interface Database {
  ApplicationId?: string;
  ComponentId?: string;
  Credentials?: Array<ApplicationCredential>;
  DatabaseId?: string;
  DatabaseName?: string;
  DatabaseType?: DatabaseType;
  Arn?: string;
  Status?: DatabaseStatus;
  PrimaryHost?: string;
  SQLPort?: number;
  LastUpdated?: Date | string;
  ConnectedComponentArns?: Array<string>;
}
export interface DatabaseConnection {
  DatabaseConnectionMethod?: DatabaseConnectionMethod;
  DatabaseArn?: string;
  ConnectionIp?: string;
}
export type DatabaseConnectionMethod = "DIRECT" | "OVERLAY";
export type DatabaseId = string;

export type DatabaseIdList = Array<string>;
export type DatabaseName = string;

export type DatabaseStatus =
  | "RUNNING"
  | "STARTING"
  | "STOPPED"
  | "WARNING"
  | "UNKNOWN"
  | "ERROR";
export interface DatabaseSummary {
  ApplicationId?: string;
  ComponentId?: string;
  DatabaseId?: string;
  DatabaseType?: DatabaseType;
  Arn?: string;
  Tags?: Record<string, string>;
}
export type DatabaseSummaryList = Array<DatabaseSummary>;
export type DatabaseType = "SYSTEM" | "TENANT";
export interface DeleteResourcePermissionInput {
  ActionType?: PermissionActionType;
  SourceResourceArn?: string;
  ResourceArn: string;
}
export interface DeleteResourcePermissionOutput {
  Policy?: string;
}
export interface DeregisterApplicationInput {
  ApplicationId: string;
}
export interface DeregisterApplicationOutput {}
export interface Filter {
  Name: string;
  Value: string;
  Operator: FilterOperator;
}
export type FilterList = Array<Filter>;
export type FilterName = string;

export type FilterOperator =
  | "Equals"
  | "GreaterThanOrEquals"
  | "LessThanOrEquals";
export type FilterValue = string;

export interface GetApplicationInput {
  ApplicationId?: string;
  ApplicationArn?: string;
  AppRegistryArn?: string;
}
export interface GetApplicationOutput {
  Application?: Application;
  Tags?: Record<string, string>;
}
export interface GetComponentInput {
  ApplicationId: string;
  ComponentId: string;
}
export interface GetComponentOutput {
  Component?: Component;
  Tags?: Record<string, string>;
}
export interface GetDatabaseInput {
  ApplicationId?: string;
  ComponentId?: string;
  DatabaseId?: string;
  DatabaseArn?: string;
}
export interface GetDatabaseOutput {
  Database?: Database;
  Tags?: Record<string, string>;
}
export interface GetOperationInput {
  OperationId: string;
}
export interface GetOperationOutput {
  Operation?: Operation;
}
export interface GetResourcePermissionInput {
  ActionType?: PermissionActionType;
  ResourceArn: string;
}
export interface GetResourcePermissionOutput {
  Policy?: string;
}
export interface Host {
  HostName?: string;
  HostIp?: string;
  EC2InstanceId?: string;
  InstanceId?: string;
  HostRole?: HostRole;
  OsVersion?: string;
}
export type HostList = Array<Host>;
export type HostRole = "LEADER" | "WORKER" | "STANDBY" | "UNKNOWN";
export type InstanceId = string;

export type InstanceList = Array<string>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type IpAddressList = Array<IpAddressMember>;
export interface IpAddressMember {
  IpAddress?: string;
  Primary?: boolean;
  AllocationType?: AllocationType;
}
export interface ListApplicationsInput {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface ListApplicationsOutput {
  Applications?: Array<ApplicationSummary>;
  NextToken?: string;
}
export interface ListComponentsInput {
  ApplicationId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListComponentsOutput {
  Components?: Array<ComponentSummary>;
  NextToken?: string;
}
export interface ListDatabasesInput {
  ApplicationId?: string;
  ComponentId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDatabasesOutput {
  Databases?: Array<DatabaseSummary>;
  NextToken?: string;
}
export interface ListOperationEventsInput {
  OperationId: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface ListOperationEventsOutput {
  OperationEvents?: Array<OperationEvent>;
  NextToken?: string;
}
export interface ListOperationsInput {
  ApplicationId: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface ListOperationsOutput {
  Operations?: Array<Operation>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MaxResults = number;

export type NextToken = string;

export interface Operation {
  Id?: string;
  Type?: string;
  Status?: OperationStatus;
  StatusMessage?: string;
  Properties?: Record<string, string>;
  ResourceType?: string;
  ResourceId?: string;
  ResourceArn?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export interface OperationEvent {
  Description?: string;
  Resource?: Resource;
  Status?: OperationEventStatus;
  StatusMessage?: string;
  Timestamp?: Date | string;
}
export type OperationEventList = Array<OperationEvent>;
export type OperationEventResourceType = string;

export type OperationEventStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED";
export type OperationId = string;

export type OperationIdList = Array<string>;
export type OperationList = Array<Operation>;
export type OperationMode =
  | "PRIMARY"
  | "LOGREPLAY"
  | "DELTA_DATASHIPPING"
  | "LOGREPLAY_READACCESS"
  | "NONE";
export type OperationProperties = Record<string, string>;
export type OperationStatus = "INPROGRESS" | "SUCCESS" | "ERROR";
export type OperationType = string;

export type PermissionActionType = "RESTORE";
export interface PutResourcePermissionInput {
  ActionType: PermissionActionType;
  SourceResourceArn: string;
  ResourceArn: string;
}
export interface PutResourcePermissionOutput {
  Policy?: string;
}
export interface RegisterApplicationInput {
  ApplicationId: string;
  ApplicationType: ApplicationType;
  Instances: Array<string>;
  SapInstanceNumber?: string;
  Sid?: string;
  Tags?: Record<string, string>;
  Credentials?: Array<ApplicationCredential>;
  DatabaseArn?: string;
  ComponentsInfo?: Array<ComponentInfo>;
}
export interface RegisterApplicationOutput {
  Application?: Application;
  OperationId?: string;
}
export type ReplicationMode = "PRIMARY" | "NONE" | "SYNC" | "SYNCMEM" | "ASYNC";
export interface Resilience {
  HsrTier?: string;
  HsrReplicationMode?: ReplicationMode;
  HsrOperationMode?: OperationMode;
  ClusterStatus?: ClusterStatus;
  EnqueueReplication?: boolean;
}
export interface Resource {
  ResourceArn?: string;
  ResourceType?: string;
}
export type ResourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourceType = string;

export type SAPInstanceNumber = string;

export type SecretId = string;

export type SID = string;

export type SsmSapArn = string;

export interface StartApplicationInput {
  ApplicationId: string;
}
export interface StartApplicationOutput {
  OperationId?: string;
}
export interface StartApplicationRefreshInput {
  ApplicationId: string;
}
export interface StartApplicationRefreshOutput {
  OperationId?: string;
}
export interface StopApplicationInput {
  ApplicationId: string;
  StopConnectedEntity?: ConnectedEntityType;
  IncludeEc2InstanceShutdown?: boolean;
}
export interface StopApplicationOutput {
  OperationId?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateApplicationSettingsInput {
  ApplicationId: string;
  CredentialsToAddOrUpdate?: Array<ApplicationCredential>;
  CredentialsToRemove?: Array<ApplicationCredential>;
  Backint?: BackintConfig;
  DatabaseArn?: string;
}
export interface UpdateApplicationSettingsOutput {
  Message?: string;
  OperationIds?: Array<string>;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace DeleteResourcePermission {
  export type Input = DeleteResourcePermissionInput;
  export type Output = DeleteResourcePermissionOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterApplication {
  export type Input = DeregisterApplicationInput;
  export type Output = DeregisterApplicationOutput;
  export type Error =
    | InternalServerException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetApplication {
  export type Input = GetApplicationInput;
  export type Output = GetApplicationOutput;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetComponent {
  export type Input = GetComponentInput;
  export type Output = GetComponentOutput;
  export type Error =
    | InternalServerException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDatabase {
  export type Input = GetDatabaseInput;
  export type Output = GetDatabaseOutput;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOperation {
  export type Input = GetOperationInput;
  export type Output = GetOperationOutput;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcePermission {
  export type Input = GetResourcePermissionInput;
  export type Output = GetResourcePermissionOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsInput;
  export type Output = ListApplicationsOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListComponents {
  export type Input = ListComponentsInput;
  export type Output = ListComponentsOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDatabases {
  export type Input = ListDatabasesInput;
  export type Output = ListDatabasesOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOperationEvents {
  export type Input = ListOperationEventsInput;
  export type Output = ListOperationEventsOutput;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOperations {
  export type Input = ListOperationsInput;
  export type Output = ListOperationsOutput;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutResourcePermission {
  export type Input = PutResourcePermissionInput;
  export type Output = PutResourcePermissionOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterApplication {
  export type Input = RegisterApplicationInput;
  export type Output = RegisterApplicationOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartApplication {
  export type Input = StartApplicationInput;
  export type Output = StartApplicationOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartApplicationRefresh {
  export type Input = StartApplicationRefreshInput;
  export type Output = StartApplicationRefreshOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopApplication {
  export type Input = StopApplicationInput;
  export type Output = StopApplicationOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateApplicationSettings {
  export type Input = UpdateApplicationSettingsInput;
  export type Output = UpdateApplicationSettingsOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

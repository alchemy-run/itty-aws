import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";
import { RestJson1Protocol } from "../../protocols/restjson1.js";

export class mq extends AWSServiceClient {
  constructor(cfg: any) {
    super("mq", new RestJson1Protocol(), cfg);
  }

  createBroker(
    input: CreateBrokerRequest,
  ): Effect.Effect<
    CreateBrokerResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | UnauthorizedException | CommonAwsError
  > {
    return this.call("CreateBroker", input);
  }
  createConfiguration(
    input: CreateConfigurationRequest,
  ): Effect.Effect<
    CreateConfigurationResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | CommonAwsError
  > {
    return this.call("CreateConfiguration", input);
  }
  createTags(
    input: CreateTagsRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("CreateTags", input);
  }
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    CreateUserResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("CreateUser", input);
  }
  deleteBroker(
    input: DeleteBrokerRequest,
  ): Effect.Effect<
    DeleteBrokerResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("DeleteBroker", input);
  }
  deleteConfiguration(
    input: DeleteConfigurationRequest,
  ): Effect.Effect<
    DeleteConfigurationResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("DeleteConfiguration", input);
  }
  deleteTags(
    input: DeleteTagsRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("DeleteTags", input);
  }
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    DeleteUserResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("DeleteUser", input);
  }
  describeBroker(
    input: DescribeBrokerRequest,
  ): Effect.Effect<
    DescribeBrokerResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("DescribeBroker", input);
  }
  describeBrokerEngineTypes(
    input: DescribeBrokerEngineTypesRequest,
  ): Effect.Effect<
    DescribeBrokerEngineTypesResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | CommonAwsError
  > {
    return this.call("DescribeBrokerEngineTypes", input);
  }
  describeBrokerInstanceOptions(
    input: DescribeBrokerInstanceOptionsRequest,
  ): Effect.Effect<
    DescribeBrokerInstanceOptionsResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | CommonAwsError
  > {
    return this.call("DescribeBrokerInstanceOptions", input);
  }
  describeConfiguration(
    input: DescribeConfigurationRequest,
  ): Effect.Effect<
    DescribeConfigurationResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("DescribeConfiguration", input);
  }
  describeConfigurationRevision(
    input: DescribeConfigurationRevisionRequest,
  ): Effect.Effect<
    DescribeConfigurationRevisionResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("DescribeConfigurationRevision", input);
  }
  describeUser(
    input: DescribeUserRequest,
  ): Effect.Effect<
    DescribeUserResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("DescribeUser", input);
  }
  listBrokers(
    input: ListBrokersRequest,
  ): Effect.Effect<
    ListBrokersResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | CommonAwsError
  > {
    return this.call("ListBrokers", input);
  }
  listConfigurationRevisions(
    input: ListConfigurationRevisionsRequest,
  ): Effect.Effect<
    ListConfigurationRevisionsResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("ListConfigurationRevisions", input);
  }
  listConfigurations(
    input: ListConfigurationsRequest,
  ): Effect.Effect<
    ListConfigurationsResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | CommonAwsError
  > {
    return this.call("ListConfigurations", input);
  }
  listTags(
    input: ListTagsRequest,
  ): Effect.Effect<
    ListTagsResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("ListTags", input);
  }
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    ListUsersResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("ListUsers", input);
  }
  promote(
    input: PromoteRequest,
  ): Effect.Effect<
    PromoteResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("Promote", input);
  }
  rebootBroker(
    input: RebootBrokerRequest,
  ): Effect.Effect<
    RebootBrokerResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("RebootBroker", input);
  }
  updateBroker(
    input: UpdateBrokerRequest,
  ): Effect.Effect<
    UpdateBrokerResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("UpdateBroker", input);
  }
  updateConfiguration(
    input: UpdateConfigurationRequest,
  ): Effect.Effect<
    UpdateConfigurationResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("UpdateConfiguration", input);
  }
  updateUser(
    input: UpdateUserRequest,
  ): Effect.Effect<
    UpdateUserResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  > {
    return this.call("UpdateUser", input);
  }
}

export class Mq extends mq {}

export default mq;

export type __boolean = boolean;

export type __integer = number;

export type __integerMin5Max100 = number;

export type __listOf__string = Array<string>;
export type __listOfActionRequired = Array<ActionRequired>;
export type __listOfAvailabilityZone = Array<AvailabilityZone>;
export type __listOfBrokerEngineType = Array<BrokerEngineType>;
export type __listOfBrokerInstance = Array<BrokerInstance>;
export type __listOfBrokerInstanceOption = Array<BrokerInstanceOption>;
export type __listOfBrokerSummary = Array<BrokerSummary>;
export type __listOfConfiguration = Array<Configuration>;
export type __listOfConfigurationId = Array<ConfigurationId>;
export type __listOfConfigurationRevision = Array<ConfigurationRevision>;
export type __listOfDeploymentMode = Array<DeploymentMode>;
export type __listOfEngineVersion = Array<EngineVersion>;
export type __listOfSanitizationWarning = Array<SanitizationWarning>;
export type __listOfUser = Array<User>;
export type __listOfUserSummary = Array<UserSummary>;
export type __mapOf__string = Record<string, string>;
export type __string = string;

export type __timestampIso8601 = Date | string;

export interface ActionRequired {
  ActionRequiredCode?: string;
  ActionRequiredInfo?: string;
}
export type AuthenticationStrategy = "SIMPLE" | "LDAP";
export interface AvailabilityZone {
  Name?: string;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly ErrorAttribute?: string;
  readonly Message?: string;
}> {}
export interface BrokerEngineType {
  EngineType?: EngineType;
  EngineVersions?: Array<EngineVersion>;
}
export interface BrokerInstance {
  ConsoleURL?: string;
  Endpoints?: Array<string>;
  IpAddress?: string;
}
export interface BrokerInstanceOption {
  AvailabilityZones?: Array<AvailabilityZone>;
  EngineType?: EngineType;
  HostInstanceType?: string;
  StorageType?: BrokerStorageType;
  SupportedDeploymentModes?: Array<DeploymentMode>;
  SupportedEngineVersions?: Array<string>;
}
export type BrokerState = "CREATION_IN_PROGRESS" | "CREATION_FAILED" | "DELETION_IN_PROGRESS" | "RUNNING" | "REBOOT_IN_PROGRESS" | "CRITICAL_ACTION_REQUIRED" | "REPLICA";
export type BrokerStorageType = "EBS" | "EFS";
export interface BrokerSummary {
  BrokerArn?: string;
  BrokerId?: string;
  BrokerName?: string;
  BrokerState?: BrokerState;
  Created?: Date | string;
  DeploymentMode: DeploymentMode;
  EngineType: EngineType;
  HostInstanceType?: string;
}
export type ChangeType = "CREATE" | "UPDATE" | "DELETE";
export interface Configuration {
  Arn: string;
  AuthenticationStrategy: AuthenticationStrategy;
  Created: Date | string;
  Description: string;
  EngineType: EngineType;
  EngineVersion: string;
  Id: string;
  LatestRevision: ConfigurationRevision;
  Name: string;
  Tags?: Record<string, string>;
}
export interface ConfigurationId {
  Id: string;
  Revision?: number;
}
export interface ConfigurationRevision {
  Created: Date | string;
  Description?: string;
  Revision: number;
}
export interface Configurations {
  Current?: ConfigurationId;
  History?: Array<ConfigurationId>;
  Pending?: ConfigurationId;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly ErrorAttribute?: string;
  readonly Message?: string;
}> {}
export interface CreateBrokerRequest {
  AuthenticationStrategy?: AuthenticationStrategy;
  AutoMinorVersionUpgrade?: boolean;
  BrokerName: string;
  Configuration?: ConfigurationId;
  CreatorRequestId?: string;
  DeploymentMode: DeploymentMode;
  EncryptionOptions?: EncryptionOptions;
  EngineType: EngineType;
  EngineVersion?: string;
  HostInstanceType: string;
  LdapServerMetadata?: LdapServerMetadataInput;
  Logs?: Logs;
  MaintenanceWindowStartTime?: WeeklyStartTime;
  PubliclyAccessible: boolean;
  SecurityGroups?: Array<string>;
  StorageType?: BrokerStorageType;
  SubnetIds?: Array<string>;
  Tags?: Record<string, string>;
  Users: Array<User>;
  DataReplicationMode?: DataReplicationMode;
  DataReplicationPrimaryBrokerArn?: string;
}
export interface CreateBrokerResponse {
  BrokerArn?: string;
  BrokerId?: string;
}
export interface CreateConfigurationRequest {
  AuthenticationStrategy?: AuthenticationStrategy;
  EngineType: EngineType;
  EngineVersion?: string;
  Name: string;
  Tags?: Record<string, string>;
}
export interface CreateConfigurationResponse {
  Arn?: string;
  AuthenticationStrategy?: AuthenticationStrategy;
  Created?: Date | string;
  Id?: string;
  LatestRevision?: ConfigurationRevision;
  Name?: string;
}
export interface CreateTagsRequest {
  ResourceArn: string;
  Tags?: Record<string, string>;
}
export interface CreateUserRequest {
  BrokerId: string;
  ConsoleAccess?: boolean;
  Groups?: Array<string>;
  Password: string;
  Username: string;
  ReplicationUser?: boolean;
}
export interface CreateUserResponse {
}
export interface DataReplicationCounterpart {
  BrokerId: string;
  Region: string;
}
export interface DataReplicationMetadataOutput {
  DataReplicationCounterpart?: DataReplicationCounterpart;
  DataReplicationRole: string;
}
export type DataReplicationMode = "NONE" | "CRDR";
export type DayOfWeek = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
export interface DeleteBrokerRequest {
  BrokerId: string;
}
export interface DeleteBrokerResponse {
  BrokerId?: string;
}
export interface DeleteConfigurationRequest {
  ConfigurationId: string;
}
export interface DeleteConfigurationResponse {
  ConfigurationId?: string;
}
export interface DeleteTagsRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface DeleteUserRequest {
  BrokerId: string;
  Username: string;
}
export interface DeleteUserResponse {
}
export type DeploymentMode = "SINGLE_INSTANCE" | "ACTIVE_STANDBY_MULTI_AZ" | "CLUSTER_MULTI_AZ";
export interface DescribeBrokerEngineTypesRequest {
  EngineType?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeBrokerEngineTypesResponse {
  BrokerEngineTypes?: Array<BrokerEngineType>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeBrokerInstanceOptionsRequest {
  EngineType?: string;
  HostInstanceType?: string;
  MaxResults?: number;
  NextToken?: string;
  StorageType?: string;
}
export interface DescribeBrokerInstanceOptionsResponse {
  BrokerInstanceOptions?: Array<BrokerInstanceOption>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeBrokerRequest {
  BrokerId: string;
}
export interface DescribeBrokerResponse {
  ActionsRequired?: Array<ActionRequired>;
  AuthenticationStrategy?: AuthenticationStrategy;
  AutoMinorVersionUpgrade?: boolean;
  BrokerArn?: string;
  BrokerId?: string;
  BrokerInstances?: Array<BrokerInstance>;
  BrokerName?: string;
  BrokerState?: BrokerState;
  Configurations?: Configurations;
  Created?: Date | string;
  DeploymentMode?: DeploymentMode;
  EncryptionOptions?: EncryptionOptions;
  EngineType?: EngineType;
  EngineVersion?: string;
  HostInstanceType?: string;
  LdapServerMetadata?: LdapServerMetadataOutput;
  Logs?: LogsSummary;
  MaintenanceWindowStartTime?: WeeklyStartTime;
  PendingAuthenticationStrategy?: AuthenticationStrategy;
  PendingEngineVersion?: string;
  PendingHostInstanceType?: string;
  PendingLdapServerMetadata?: LdapServerMetadataOutput;
  PendingSecurityGroups?: Array<string>;
  PubliclyAccessible?: boolean;
  SecurityGroups?: Array<string>;
  StorageType?: BrokerStorageType;
  SubnetIds?: Array<string>;
  Tags?: Record<string, string>;
  Users?: Array<UserSummary>;
  DataReplicationMetadata?: DataReplicationMetadataOutput;
  DataReplicationMode?: DataReplicationMode;
  PendingDataReplicationMetadata?: DataReplicationMetadataOutput;
  PendingDataReplicationMode?: DataReplicationMode;
}
export interface DescribeConfigurationRequest {
  ConfigurationId: string;
}
export interface DescribeConfigurationResponse {
  Arn?: string;
  AuthenticationStrategy?: AuthenticationStrategy;
  Created?: Date | string;
  Description?: string;
  EngineType?: EngineType;
  EngineVersion?: string;
  Id?: string;
  LatestRevision?: ConfigurationRevision;
  Name?: string;
  Tags?: Record<string, string>;
}
export interface DescribeConfigurationRevisionRequest {
  ConfigurationId: string;
  ConfigurationRevision: string;
}
export interface DescribeConfigurationRevisionResponse {
  ConfigurationId?: string;
  Created?: Date | string;
  Data?: string;
  Description?: string;
}
export interface DescribeUserRequest {
  BrokerId: string;
  Username: string;
}
export interface DescribeUserResponse {
  BrokerId?: string;
  ConsoleAccess?: boolean;
  Groups?: Array<string>;
  Pending?: UserPendingChanges;
  Username?: string;
  ReplicationUser?: boolean;
}
export interface EncryptionOptions {
  KmsKeyId?: string;
  UseAwsOwnedKey: boolean;
}
export type EngineType = "ACTIVEMQ" | "RABBITMQ";
export interface EngineVersion {
  Name?: string;
}
export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly ErrorAttribute?: string;
  readonly Message?: string;
}> {}
export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly ErrorAttribute?: string;
  readonly Message?: string;
}> {}
export interface LdapServerMetadataInput {
  Hosts: Array<string>;
  RoleBase: string;
  RoleName?: string;
  RoleSearchMatching: string;
  RoleSearchSubtree?: boolean;
  ServiceAccountPassword: string;
  ServiceAccountUsername: string;
  UserBase: string;
  UserRoleName?: string;
  UserSearchMatching: string;
  UserSearchSubtree?: boolean;
}
export interface LdapServerMetadataOutput {
  Hosts: Array<string>;
  RoleBase: string;
  RoleName?: string;
  RoleSearchMatching: string;
  RoleSearchSubtree?: boolean;
  ServiceAccountUsername: string;
  UserBase: string;
  UserRoleName?: string;
  UserSearchMatching: string;
  UserSearchSubtree?: boolean;
}
export interface ListBrokersRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListBrokersResponse {
  BrokerSummaries?: Array<BrokerSummary>;
  NextToken?: string;
}
export interface ListConfigurationRevisionsRequest {
  ConfigurationId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListConfigurationRevisionsResponse {
  ConfigurationId?: string;
  MaxResults?: number;
  NextToken?: string;
  Revisions?: Array<ConfigurationRevision>;
}
export interface ListConfigurationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListConfigurationsResponse {
  Configurations?: Array<Configuration>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTagsRequest {
  ResourceArn: string;
}
export interface ListTagsResponse {
  Tags?: Record<string, string>;
}
export interface ListUsersRequest {
  BrokerId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListUsersResponse {
  BrokerId?: string;
  MaxResults?: number;
  NextToken?: string;
  Users?: Array<UserSummary>;
}
export interface Logs {
  Audit?: boolean;
  General?: boolean;
}
export interface LogsSummary {
  Audit?: boolean;
  AuditLogGroup?: string;
  General: boolean;
  GeneralLogGroup: string;
  Pending?: PendingLogs;
}
export type MaxResults = number;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly ErrorAttribute?: string;
  readonly Message?: string;
}> {}
export interface PendingLogs {
  Audit?: boolean;
  General?: boolean;
}
export type PromoteMode = "SWITCHOVER" | "FAILOVER";
export interface PromoteRequest {
  BrokerId: string;
  Mode: PromoteMode;
}
export interface PromoteResponse {
  BrokerId?: string;
}
export interface RebootBrokerRequest {
  BrokerId: string;
}
export interface RebootBrokerResponse {
}
export interface SanitizationWarning {
  AttributeName?: string;
  ElementName?: string;
  Reason: SanitizationWarningReason;
}
export type SanitizationWarningReason = "DISALLOWED_ELEMENT_REMOVED" | "DISALLOWED_ATTRIBUTE_REMOVED" | "INVALID_ATTRIBUTE_VALUE_REMOVED";
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly ErrorAttribute?: string;
  readonly Message?: string;
}> {}
export interface UpdateBrokerRequest {
  AuthenticationStrategy?: AuthenticationStrategy;
  AutoMinorVersionUpgrade?: boolean;
  BrokerId: string;
  Configuration?: ConfigurationId;
  EngineVersion?: string;
  HostInstanceType?: string;
  LdapServerMetadata?: LdapServerMetadataInput;
  Logs?: Logs;
  MaintenanceWindowStartTime?: WeeklyStartTime;
  SecurityGroups?: Array<string>;
  DataReplicationMode?: DataReplicationMode;
}
export interface UpdateBrokerResponse {
  AuthenticationStrategy?: AuthenticationStrategy;
  AutoMinorVersionUpgrade?: boolean;
  BrokerId?: string;
  Configuration?: ConfigurationId;
  EngineVersion?: string;
  HostInstanceType?: string;
  LdapServerMetadata?: LdapServerMetadataOutput;
  Logs?: Logs;
  MaintenanceWindowStartTime?: WeeklyStartTime;
  SecurityGroups?: Array<string>;
  DataReplicationMetadata?: DataReplicationMetadataOutput;
  DataReplicationMode?: DataReplicationMode;
  PendingDataReplicationMetadata?: DataReplicationMetadataOutput;
  PendingDataReplicationMode?: DataReplicationMode;
}
export interface UpdateConfigurationRequest {
  ConfigurationId: string;
  Data: string;
  Description?: string;
}
export interface UpdateConfigurationResponse {
  Arn?: string;
  Created?: Date | string;
  Id?: string;
  LatestRevision?: ConfigurationRevision;
  Name?: string;
  Warnings?: Array<SanitizationWarning>;
}
export interface UpdateUserRequest {
  BrokerId: string;
  ConsoleAccess?: boolean;
  Groups?: Array<string>;
  Password?: string;
  Username: string;
  ReplicationUser?: boolean;
}
export interface UpdateUserResponse {
}
export interface User {
  ConsoleAccess?: boolean;
  Groups?: Array<string>;
  Password: string;
  Username: string;
  ReplicationUser?: boolean;
}
export interface UserPendingChanges {
  ConsoleAccess?: boolean;
  Groups?: Array<string>;
  PendingChange: ChangeType;
}
export interface UserSummary {
  PendingChange?: ChangeType;
  Username: string;
}
export interface WeeklyStartTime {
  DayOfWeek: DayOfWeek;
  TimeOfDay: string;
  TimeZone?: string;
}
export declare namespace CreateBroker {
  export type Input = CreateBrokerRequest;
  export type Output = CreateBrokerResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateConfiguration {
  export type Input = CreateConfigurationRequest;
  export type Output = CreateConfigurationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace CreateTags {
  export type Input = CreateTagsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserRequest;
  export type Output = CreateUserResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteBroker {
  export type Input = DeleteBrokerRequest;
  export type Output = DeleteBrokerResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteConfiguration {
  export type Input = DeleteConfigurationRequest;
  export type Output = DeleteConfigurationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteTags {
  export type Input = DeleteTagsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserRequest;
  export type Output = DeleteUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DescribeBroker {
  export type Input = DescribeBrokerRequest;
  export type Output = DescribeBrokerResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DescribeBrokerEngineTypes {
  export type Input = DescribeBrokerEngineTypesRequest;
  export type Output = DescribeBrokerEngineTypesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DescribeBrokerInstanceOptions {
  export type Input = DescribeBrokerInstanceOptionsRequest;
  export type Output = DescribeBrokerInstanceOptionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DescribeConfiguration {
  export type Input = DescribeConfigurationRequest;
  export type Output = DescribeConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DescribeConfigurationRevision {
  export type Input = DescribeConfigurationRevisionRequest;
  export type Output = DescribeConfigurationRevisionResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DescribeUser {
  export type Input = DescribeUserRequest;
  export type Output = DescribeUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListBrokers {
  export type Input = ListBrokersRequest;
  export type Output = ListBrokersResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListConfigurationRevisions {
  export type Input = ListConfigurationRevisionsRequest;
  export type Output = ListConfigurationRevisionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListConfigurations {
  export type Input = ListConfigurationsRequest;
  export type Output = ListConfigurationsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListTags {
  export type Input = ListTagsRequest;
  export type Output = ListTagsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListUsers {
  export type Input = ListUsersRequest;
  export type Output = ListUsersResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace Promote {
  export type Input = PromoteRequest;
  export type Output = PromoteResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace RebootBroker {
  export type Input = RebootBrokerRequest;
  export type Output = RebootBrokerResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateBroker {
  export type Input = UpdateBrokerRequest;
  export type Output = UpdateBrokerResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateConfiguration {
  export type Input = UpdateConfigurationRequest;
  export type Output = UpdateConfigurationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateUser {
  export type Input = UpdateUserRequest;
  export type Output = UpdateUserResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}


import type { Effect, Data as EffectData } from "effect";
import type { AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = AccessDeniedException | ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | ThrottlingException | UnrecognizedClientException | UnknownOperationException | ValidationError | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class OpsWorksCM extends AWSServiceClient {
  associateNode(
    input: AssociateNodeRequest,
  ): Effect.Effect<
    AssociateNodeResponse,
    InvalidStateException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createBackup(
    input: CreateBackupRequest,
  ): Effect.Effect<
    CreateBackupResponse,
    InvalidStateException | LimitExceededException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createServer(
    input: CreateServerRequest,
  ): Effect.Effect<
    CreateServerResponse,
    LimitExceededException | ResourceAlreadyExistsException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteBackup(
    input: DeleteBackupRequest,
  ): Effect.Effect<
    DeleteBackupResponse,
    InvalidStateException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteServer(
    input: DeleteServerRequest,
  ): Effect.Effect<
    DeleteServerResponse,
    InvalidStateException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeAccountAttributes(
    input: DescribeAccountAttributesRequest,
  ): Effect.Effect<
    DescribeAccountAttributesResponse,
    CommonAwsError
  >;
  describeBackups(
    input: DescribeBackupsRequest,
  ): Effect.Effect<
    DescribeBackupsResponse,
    InvalidNextTokenException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeEvents(
    input: DescribeEventsRequest,
  ): Effect.Effect<
    DescribeEventsResponse,
    InvalidNextTokenException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeNodeAssociationStatus(
    input: DescribeNodeAssociationStatusRequest,
  ): Effect.Effect<
    DescribeNodeAssociationStatusResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeServers(
    input: DescribeServersRequest,
  ): Effect.Effect<
    DescribeServersResponse,
    InvalidNextTokenException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  disassociateNode(
    input: DisassociateNodeRequest,
  ): Effect.Effect<
    DisassociateNodeResponse,
    InvalidStateException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  exportServerEngineAttribute(
    input: ExportServerEngineAttributeRequest,
  ): Effect.Effect<
    ExportServerEngineAttributeResponse,
    InvalidStateException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  restoreServer(
    input: RestoreServerRequest,
  ): Effect.Effect<
    RestoreServerResponse,
    InvalidStateException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  startMaintenance(
    input: StartMaintenanceRequest,
  ): Effect.Effect<
    StartMaintenanceResponse,
    InvalidStateException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InvalidStateException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InvalidStateException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateServer(
    input: UpdateServerRequest,
  ): Effect.Effect<
    UpdateServerResponse,
    InvalidStateException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateServerEngineAttributes(
    input: UpdateServerEngineAttributesRequest,
  ): Effect.Effect<
    UpdateServerEngineAttributesResponse,
    InvalidStateException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export declare class Opsworkscm extends OpsWorksCM {}

export interface AccountAttribute {
  Name?: string;
  Maximum?: number;
  Used?: number;
}
export type AccountAttributes = Array<AccountAttribute>;
export interface AssociateNodeRequest {
  ServerName: string;
  NodeName: string;
  EngineAttributes: Array<EngineAttribute>;
}
export interface AssociateNodeResponse {
  NodeAssociationStatusToken?: string;
}
export type AttributeName = string;

export type AttributeValue = string;

export type AWSOpsWorksCMResourceArn = string;

export interface Backup {
  BackupArn?: string;
  BackupId?: string;
  BackupType?: BackupType;
  CreatedAt?: Date | string;
  Description?: string;
  Engine?: string;
  EngineModel?: string;
  EngineVersion?: string;
  InstanceProfileArn?: string;
  InstanceType?: string;
  KeyPair?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  S3DataSize?: number;
  S3DataUrl?: string;
  S3LogUrl?: string;
  SecurityGroupIds?: Array<string>;
  ServerName?: string;
  ServiceRoleArn?: string;
  Status?: BackupStatus;
  StatusDescription?: string;
  SubnetIds?: Array<string>;
  ToolsVersion?: string;
  UserArn?: string;
}
export type BackupId = string;

export type BackupRetentionCountDefinition = number;

export type Backups = Array<Backup>;
export type BackupStatus = "IN_PROGRESS" | "OK" | "FAILED" | "DELETING";
export type BackupType = "AUTOMATED" | "MANUAL";
export type OpsworkscmBoolean = boolean;

export interface CreateBackupRequest {
  ServerName: string;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface CreateBackupResponse {
  Backup?: Backup;
}
export interface CreateServerRequest {
  AssociatePublicIpAddress?: boolean;
  CustomDomain?: string;
  CustomCertificate?: string;
  CustomPrivateKey?: string;
  DisableAutomatedBackup?: boolean;
  Engine: string;
  EngineModel?: string;
  EngineVersion?: string;
  EngineAttributes?: Array<EngineAttribute>;
  BackupRetentionCount?: number;
  ServerName: string;
  InstanceProfileArn: string;
  InstanceType: string;
  KeyPair?: string;
  PreferredMaintenanceWindow?: string;
  PreferredBackupWindow?: string;
  SecurityGroupIds?: Array<string>;
  ServiceRoleArn: string;
  SubnetIds?: Array<string>;
  Tags?: Array<Tag>;
  BackupId?: string;
}
export interface CreateServerResponse {
  Server?: Server;
}
export type CustomCertificate = string;

export type CustomDomain = string;

export type CustomPrivateKey = string;

export interface DeleteBackupRequest {
  BackupId: string;
}
export interface DeleteBackupResponse {
}
export interface DeleteServerRequest {
  ServerName: string;
}
export interface DeleteServerResponse {
}
export interface DescribeAccountAttributesRequest {
}
export interface DescribeAccountAttributesResponse {
  Attributes?: Array<AccountAttribute>;
}
export interface DescribeBackupsRequest {
  BackupId?: string;
  ServerName?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeBackupsResponse {
  Backups?: Array<Backup>;
  NextToken?: string;
}
export interface DescribeEventsRequest {
  ServerName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeEventsResponse {
  ServerEvents?: Array<ServerEvent>;
  NextToken?: string;
}
export interface DescribeNodeAssociationStatusRequest {
  NodeAssociationStatusToken: string;
  ServerName: string;
}
export interface DescribeNodeAssociationStatusResponse {
  NodeAssociationStatus?: NodeAssociationStatus;
  EngineAttributes?: Array<EngineAttribute>;
}
export interface DescribeServersRequest {
  ServerName?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeServersResponse {
  Servers?: Array<Server>;
  NextToken?: string;
}
export interface DisassociateNodeRequest {
  ServerName: string;
  NodeName: string;
  EngineAttributes?: Array<EngineAttribute>;
}
export interface DisassociateNodeResponse {
  NodeAssociationStatusToken?: string;
}
export interface EngineAttribute {
  Name?: string;
  Value?: string;
}
export type EngineAttributeName = string;

export type EngineAttributes = Array<EngineAttribute>;
export type EngineAttributeValue = string;

export interface ExportServerEngineAttributeRequest {
  ExportAttributeName: string;
  ServerName: string;
  InputAttributes?: Array<EngineAttribute>;
}
export interface ExportServerEngineAttributeResponse {
  EngineAttribute?: EngineAttribute;
  ServerName?: string;
}
export type InstanceProfileArn = string;

export type Integer = number;

export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidStateException extends EffectData.TaggedError(
  "InvalidStateException",
)<{
  readonly Message?: string;
}> {}
export type KeyPair = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export type MaintenanceStatus = "SUCCESS" | "FAILED";
export type MaxResults = number;

export type NextToken = string;

export type NodeAssociationStatus = "SUCCESS" | "FAILED" | "IN_PROGRESS";
export type NodeAssociationStatusToken = string;

export type NodeName = string;

export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface RestoreServerRequest {
  BackupId: string;
  ServerName: string;
  InstanceType?: string;
  KeyPair?: string;
}
export interface RestoreServerResponse {
  Server?: Server;
}
export interface Server {
  AssociatePublicIpAddress?: boolean;
  BackupRetentionCount?: number;
  ServerName?: string;
  CreatedAt?: Date | string;
  CloudFormationStackArn?: string;
  CustomDomain?: string;
  DisableAutomatedBackup?: boolean;
  Endpoint?: string;
  Engine?: string;
  EngineModel?: string;
  EngineAttributes?: Array<EngineAttribute>;
  EngineVersion?: string;
  InstanceProfileArn?: string;
  InstanceType?: string;
  KeyPair?: string;
  MaintenanceStatus?: MaintenanceStatus;
  PreferredMaintenanceWindow?: string;
  PreferredBackupWindow?: string;
  SecurityGroupIds?: Array<string>;
  ServiceRoleArn?: string;
  Status?: ServerStatus;
  StatusReason?: string;
  SubnetIds?: Array<string>;
  ServerArn?: string;
}
export interface ServerEvent {
  CreatedAt?: Date | string;
  ServerName?: string;
  Message?: string;
  LogUrl?: string;
}
export type ServerEvents = Array<ServerEvent>;
export type ServerName = string;

export type Servers = Array<Server>;
export type ServerStatus = "BACKING_UP" | "CONNECTION_LOST" | "CREATING" | "DELETING" | "MODIFYING" | "FAILED" | "HEALTHY" | "RUNNING" | "RESTORING" | "SETUP" | "UNDER_MAINTENANCE" | "UNHEALTHY" | "TERMINATED";
export type ServiceRoleArn = string;

export interface StartMaintenanceRequest {
  ServerName: string;
  EngineAttributes?: Array<EngineAttribute>;
}
export interface StartMaintenanceResponse {
  Server?: Server;
}
export type OpsworkscmString = string;

export type Strings = Array<string>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export type Timestamp = Date | string;

export type TimeWindowDefinition = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateServerEngineAttributesRequest {
  ServerName: string;
  AttributeName: string;
  AttributeValue?: string;
}
export interface UpdateServerEngineAttributesResponse {
  Server?: Server;
}
export interface UpdateServerRequest {
  DisableAutomatedBackup?: boolean;
  BackupRetentionCount?: number;
  ServerName: string;
  PreferredMaintenanceWindow?: string;
  PreferredBackupWindow?: string;
}
export interface UpdateServerResponse {
  Server?: Server;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace AssociateNode {
  export type Input = AssociateNodeRequest;
  export type Output = AssociateNodeResponse;
  export type Error =
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateBackup {
  export type Input = CreateBackupRequest;
  export type Output = CreateBackupResponse;
  export type Error =
    | InvalidStateException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateServer {
  export type Input = CreateServerRequest;
  export type Output = CreateServerResponse;
  export type Error =
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteBackup {
  export type Input = DeleteBackupRequest;
  export type Output = DeleteBackupResponse;
  export type Error =
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteServer {
  export type Input = DeleteServerRequest;
  export type Output = DeleteServerResponse;
  export type Error =
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAccountAttributes {
  export type Input = DescribeAccountAttributesRequest;
  export type Output = DescribeAccountAttributesResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeBackups {
  export type Input = DescribeBackupsRequest;
  export type Output = DescribeBackupsResponse;
  export type Error =
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeEvents {
  export type Input = DescribeEventsRequest;
  export type Output = DescribeEventsResponse;
  export type Error =
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeNodeAssociationStatus {
  export type Input = DescribeNodeAssociationStatusRequest;
  export type Output = DescribeNodeAssociationStatusResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeServers {
  export type Input = DescribeServersRequest;
  export type Output = DescribeServersResponse;
  export type Error =
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateNode {
  export type Input = DisassociateNodeRequest;
  export type Output = DisassociateNodeResponse;
  export type Error =
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ExportServerEngineAttribute {
  export type Input = ExportServerEngineAttributeRequest;
  export type Output = ExportServerEngineAttributeResponse;
  export type Error =
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RestoreServer {
  export type Input = RestoreServerRequest;
  export type Output = RestoreServerResponse;
  export type Error =
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartMaintenance {
  export type Input = StartMaintenanceRequest;
  export type Output = StartMaintenanceResponse;
  export type Error =
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateServer {
  export type Input = UpdateServerRequest;
  export type Output = UpdateServerResponse;
  export type Error =
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateServerEngineAttributes {
  export type Input = UpdateServerEngineAttributesRequest;
  export type Output = UpdateServerEngineAttributesResponse;
  export type Error =
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}


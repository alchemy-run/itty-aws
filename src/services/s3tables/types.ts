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
  ValidationException,
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
  | ValidationException
  | AccessDeniedException;
import { AWSServiceClient } from "../../client.ts";

export declare class S3Tables extends AWSServiceClient {
  createNamespace(
    input: CreateNamespaceRequest,
  ): Effect.Effect<
    CreateNamespaceResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createTable(
    input: CreateTableRequest,
  ): Effect.Effect<
    CreateTableResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createTableBucket(
    input: CreateTableBucketRequest,
  ): Effect.Effect<
    CreateTableBucketResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteNamespace(
    input: DeleteNamespaceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteTable(
    input: DeleteTableRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteTableBucket(
    input: DeleteTableBucketRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteTableBucketEncryption(
    input: DeleteTableBucketEncryptionRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteTableBucketPolicy(
    input: DeleteTableBucketPolicyRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteTablePolicy(
    input: DeleteTablePolicyRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getNamespace(
    input: GetNamespaceRequest,
  ): Effect.Effect<
    GetNamespaceResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTable(
    input: GetTableRequest,
  ): Effect.Effect<
    GetTableResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTableBucket(
    input: GetTableBucketRequest,
  ): Effect.Effect<
    GetTableBucketResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTableBucketEncryption(
    input: GetTableBucketEncryptionRequest,
  ): Effect.Effect<
    GetTableBucketEncryptionResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTableBucketMaintenanceConfiguration(
    input: GetTableBucketMaintenanceConfigurationRequest,
  ): Effect.Effect<
    GetTableBucketMaintenanceConfigurationResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTableBucketPolicy(
    input: GetTableBucketPolicyRequest,
  ): Effect.Effect<
    GetTableBucketPolicyResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTableEncryption(
    input: GetTableEncryptionRequest,
  ): Effect.Effect<
    GetTableEncryptionResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTableMaintenanceConfiguration(
    input: GetTableMaintenanceConfigurationRequest,
  ): Effect.Effect<
    GetTableMaintenanceConfigurationResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTableMaintenanceJobStatus(
    input: GetTableMaintenanceJobStatusRequest,
  ): Effect.Effect<
    GetTableMaintenanceJobStatusResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTableMetadataLocation(
    input: GetTableMetadataLocationRequest,
  ): Effect.Effect<
    GetTableMetadataLocationResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTablePolicy(
    input: GetTablePolicyRequest,
  ): Effect.Effect<
    GetTablePolicyResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listNamespaces(
    input: ListNamespacesRequest,
  ): Effect.Effect<
    ListNamespacesResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTableBuckets(
    input: ListTableBucketsRequest,
  ): Effect.Effect<
    ListTableBucketsResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTables(
    input: ListTablesRequest,
  ): Effect.Effect<
    ListTablesResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putTableBucketEncryption(
    input: PutTableBucketEncryptionRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putTableBucketMaintenanceConfiguration(
    input: PutTableBucketMaintenanceConfigurationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putTableBucketPolicy(
    input: PutTableBucketPolicyRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putTableMaintenanceConfiguration(
    input: PutTableMaintenanceConfigurationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putTablePolicy(
    input: PutTablePolicyRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  renameTable(
    input: RenameTableRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateTableMetadataLocation(
    input: UpdateTableMetadataLocationRequest,
  ): Effect.Effect<
    UpdateTableMetadataLocationResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export declare class S3tables extends S3Tables {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AccountId = string;

export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateNamespaceRequest {
  tableBucketARN: string;
  namespace: Array<string>;
}
export interface CreateNamespaceResponse {
  tableBucketARN: string;
  namespace: Array<string>;
}
export interface CreateTableBucketRequest {
  name: string;
  encryptionConfiguration?: EncryptionConfiguration;
}
export interface CreateTableBucketResponse {
  arn: string;
}
export interface CreateTableRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
  format: OpenTableFormat;
  metadata?: TableMetadata;
  encryptionConfiguration?: EncryptionConfiguration;
}
export interface CreateTableResponse {
  tableARN: string;
  versionToken: string;
}
export interface DeleteNamespaceRequest {
  tableBucketARN: string;
  namespace: string;
}
export interface DeleteTableBucketEncryptionRequest {
  tableBucketARN: string;
}
export interface DeleteTableBucketPolicyRequest {
  tableBucketARN: string;
}
export interface DeleteTableBucketRequest {
  tableBucketARN: string;
}
export interface DeleteTablePolicyRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
}
export interface DeleteTableRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
  versionToken?: string;
}
export interface EncryptionConfiguration {
  sseAlgorithm: SSEAlgorithm;
  kmsKeyArn?: string;
}
export type ErrorMessage = string;

export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly message?: string;
}> {}
export interface GetNamespaceRequest {
  tableBucketARN: string;
  namespace: string;
}
export interface GetNamespaceResponse {
  namespace: Array<string>;
  createdAt: Date | string;
  createdBy: string;
  ownerAccountId: string;
  namespaceId?: string;
  tableBucketId?: string;
}
export interface GetTableBucketEncryptionRequest {
  tableBucketARN: string;
}
export interface GetTableBucketEncryptionResponse {
  encryptionConfiguration: EncryptionConfiguration;
}
export interface GetTableBucketMaintenanceConfigurationRequest {
  tableBucketARN: string;
}
export interface GetTableBucketMaintenanceConfigurationResponse {
  tableBucketARN: string;
  configuration: { [key in TableBucketMaintenanceType]?: string };
}
export interface GetTableBucketPolicyRequest {
  tableBucketARN: string;
}
export interface GetTableBucketPolicyResponse {
  resourcePolicy: string;
}
export interface GetTableBucketRequest {
  tableBucketARN: string;
}
export interface GetTableBucketResponse {
  arn: string;
  name: string;
  ownerAccountId: string;
  createdAt: Date | string;
  tableBucketId?: string;
  type?: TableBucketType;
}
export interface GetTableEncryptionRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
}
export interface GetTableEncryptionResponse {
  encryptionConfiguration: EncryptionConfiguration;
}
export interface GetTableMaintenanceConfigurationRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
}
export interface GetTableMaintenanceConfigurationResponse {
  tableARN: string;
  configuration: { [key in TableMaintenanceType]?: string };
}
export interface GetTableMaintenanceJobStatusRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
}
export interface GetTableMaintenanceJobStatusResponse {
  tableARN: string;
  status: { [key in TableMaintenanceJobType]?: string };
}
export interface GetTableMetadataLocationRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
}
export interface GetTableMetadataLocationResponse {
  versionToken: string;
  metadataLocation?: string;
  warehouseLocation: string;
}
export interface GetTablePolicyRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
}
export interface GetTablePolicyResponse {
  resourcePolicy: string;
}
export interface GetTableRequest {
  tableBucketARN?: string;
  namespace?: string;
  name?: string;
  tableArn?: string;
}
export interface GetTableResponse {
  name: string;
  type: TableType;
  tableARN: string;
  namespace: Array<string>;
  namespaceId?: string;
  versionToken: string;
  metadataLocation?: string;
  warehouseLocation: string;
  createdAt: Date | string;
  createdBy: string;
  managedByService?: string;
  modifiedAt: Date | string;
  modifiedBy: string;
  ownerAccountId: string;
  format: OpenTableFormat;
  tableBucketId?: string;
}
export interface IcebergCompactionSettings {
  targetFileSizeMB?: number;
  strategy?: IcebergCompactionStrategy;
}
export type IcebergCompactionStrategy = "auto" | "binpack" | "sort" | "z-order";
export interface IcebergMetadata {
  schema: IcebergSchema;
}
export interface IcebergSchema {
  fields: Array<SchemaField>;
}
export interface IcebergSnapshotManagementSettings {
  minSnapshotsToKeep?: number;
  maxSnapshotAgeHours?: number;
}
export interface IcebergUnreferencedFileRemovalSettings {
  unreferencedDays?: number;
  nonCurrentDays?: number;
}
export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly message?: string;
}> {}
export type JobStatus = "Not_Yet_Run" | "Successful" | "Failed" | "Disabled";
export type ListNamespacesLimit = number;

export interface ListNamespacesRequest {
  tableBucketARN: string;
  prefix?: string;
  continuationToken?: string;
  maxNamespaces?: number;
}
export interface ListNamespacesResponse {
  namespaces: Array<NamespaceSummary>;
  continuationToken?: string;
}
export type ListTableBucketsLimit = number;

export interface ListTableBucketsRequest {
  prefix?: string;
  continuationToken?: string;
  maxBuckets?: number;
  type?: TableBucketType;
}
export interface ListTableBucketsResponse {
  tableBuckets: Array<TableBucketSummary>;
  continuationToken?: string;
}
export type ListTablesLimit = number;

export interface ListTablesRequest {
  tableBucketARN: string;
  namespace?: string;
  prefix?: string;
  continuationToken?: string;
  maxTables?: number;
}
export interface ListTablesResponse {
  tables: Array<TableSummary>;
  continuationToken?: string;
}
export type MaintenanceStatus = "enabled" | "disabled";
export type MetadataLocation = string;

export type NamespaceId = string;

export type NamespaceList = Array<string>;
export type NamespaceName = string;

export interface NamespaceSummary {
  namespace: Array<string>;
  createdAt: Date | string;
  createdBy: string;
  ownerAccountId: string;
  namespaceId?: string;
  tableBucketId?: string;
}
export type NamespaceSummaryList = Array<NamespaceSummary>;
export type NextToken = string;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export type OpenTableFormat = "ICEBERG";
export type PositiveInteger = number;

export interface PutTableBucketEncryptionRequest {
  tableBucketARN: string;
  encryptionConfiguration: EncryptionConfiguration;
}
export interface PutTableBucketMaintenanceConfigurationRequest {
  tableBucketARN: string;
  type: TableBucketMaintenanceType;
  value: TableBucketMaintenanceConfigurationValue;
}
export interface PutTableBucketPolicyRequest {
  tableBucketARN: string;
  resourcePolicy: string;
}
export interface PutTableMaintenanceConfigurationRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
  type: TableMaintenanceType;
  value: TableMaintenanceConfigurationValue;
}
export interface PutTablePolicyRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
  resourcePolicy: string;
}
export interface RenameTableRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
  newNamespaceName?: string;
  newName?: string;
  versionToken?: string;
}
export type ResourcePolicy = string;

export interface SchemaField {
  name: string;
  type: string;
  required?: boolean;
}
export type SchemaFieldList = Array<SchemaField>;
export type SSEAlgorithm = "AES256" | "aws:kms";
export type TableARN = string;

export type TableBucketARN = string;

export type TableBucketId = string;

export type TableBucketMaintenanceConfiguration = Record<
  TableBucketMaintenanceType,
  TableBucketMaintenanceConfigurationValue
>;
export interface TableBucketMaintenanceConfigurationValue {
  status?: MaintenanceStatus;
  settings?: TableBucketMaintenanceSettings;
}
interface _TableBucketMaintenanceSettings {
  icebergUnreferencedFileRemoval?: IcebergUnreferencedFileRemovalSettings;
}

export type TableBucketMaintenanceSettings = _TableBucketMaintenanceSettings & {
  icebergUnreferencedFileRemoval: IcebergUnreferencedFileRemovalSettings;
};
export type TableBucketMaintenanceType = "icebergUnreferencedFileRemoval";
export type TableBucketName = string;

export interface TableBucketSummary {
  arn: string;
  name: string;
  ownerAccountId: string;
  createdAt: Date | string;
  tableBucketId?: string;
  type?: TableBucketType;
}
export type TableBucketSummaryList = Array<TableBucketSummary>;
export type TableBucketType = "customer" | "aws";
export type TableMaintenanceConfiguration = Record<
  TableMaintenanceType,
  TableMaintenanceConfigurationValue
>;
export interface TableMaintenanceConfigurationValue {
  status?: MaintenanceStatus;
  settings?: TableMaintenanceSettings;
}
export type TableMaintenanceJobStatus = Record<
  TableMaintenanceJobType,
  TableMaintenanceJobStatusValue
>;
export interface TableMaintenanceJobStatusValue {
  status: JobStatus;
  lastRunTimestamp?: Date | string;
  failureMessage?: string;
}
export type TableMaintenanceJobType =
  | "icebergCompaction"
  | "icebergSnapshotManagement"
  | "icebergUnreferencedFileRemoval";
interface _TableMaintenanceSettings {
  icebergCompaction?: IcebergCompactionSettings;
  icebergSnapshotManagement?: IcebergSnapshotManagementSettings;
}

export type TableMaintenanceSettings =
  | (_TableMaintenanceSettings & {
      icebergCompaction: IcebergCompactionSettings;
    })
  | (_TableMaintenanceSettings & {
      icebergSnapshotManagement: IcebergSnapshotManagementSettings;
    });
export type TableMaintenanceType =
  | "icebergCompaction"
  | "icebergSnapshotManagement";
interface _TableMetadata {
  iceberg?: IcebergMetadata;
}

export type TableMetadata = _TableMetadata & { iceberg: IcebergMetadata };
export type TableName = string;

export interface TableSummary {
  namespace: Array<string>;
  name: string;
  type: TableType;
  tableARN: string;
  createdAt: Date | string;
  modifiedAt: Date | string;
  namespaceId?: string;
  tableBucketId?: string;
}
export type TableSummaryList = Array<TableSummary>;
export type TableType = "customer" | "aws";
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message?: string;
}> {}
export interface UpdateTableMetadataLocationRequest {
  tableBucketARN: string;
  namespace: string;
  name: string;
  versionToken: string;
  metadataLocation: string;
}
export interface UpdateTableMetadataLocationResponse {
  name: string;
  tableARN: string;
  namespace: Array<string>;
  versionToken: string;
  metadataLocation: string;
}
export type VersionToken = string;

export type WarehouseLocation = string;

export declare namespace CreateNamespace {
  export type Input = CreateNamespaceRequest;
  export type Output = CreateNamespaceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateTable {
  export type Input = CreateTableRequest;
  export type Output = CreateTableResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateTableBucket {
  export type Input = CreateTableBucketRequest;
  export type Output = CreateTableBucketResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteNamespace {
  export type Input = DeleteNamespaceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteTable {
  export type Input = DeleteTableRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteTableBucket {
  export type Input = DeleteTableBucketRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteTableBucketEncryption {
  export type Input = DeleteTableBucketEncryptionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteTableBucketPolicy {
  export type Input = DeleteTableBucketPolicyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteTablePolicy {
  export type Input = DeleteTablePolicyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetNamespace {
  export type Input = GetNamespaceRequest;
  export type Output = GetNamespaceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTable {
  export type Input = GetTableRequest;
  export type Output = GetTableResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTableBucket {
  export type Input = GetTableBucketRequest;
  export type Output = GetTableBucketResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTableBucketEncryption {
  export type Input = GetTableBucketEncryptionRequest;
  export type Output = GetTableBucketEncryptionResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTableBucketMaintenanceConfiguration {
  export type Input = GetTableBucketMaintenanceConfigurationRequest;
  export type Output = GetTableBucketMaintenanceConfigurationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTableBucketPolicy {
  export type Input = GetTableBucketPolicyRequest;
  export type Output = GetTableBucketPolicyResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTableEncryption {
  export type Input = GetTableEncryptionRequest;
  export type Output = GetTableEncryptionResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTableMaintenanceConfiguration {
  export type Input = GetTableMaintenanceConfigurationRequest;
  export type Output = GetTableMaintenanceConfigurationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTableMaintenanceJobStatus {
  export type Input = GetTableMaintenanceJobStatusRequest;
  export type Output = GetTableMaintenanceJobStatusResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTableMetadataLocation {
  export type Input = GetTableMetadataLocationRequest;
  export type Output = GetTableMetadataLocationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTablePolicy {
  export type Input = GetTablePolicyRequest;
  export type Output = GetTablePolicyResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListNamespaces {
  export type Input = ListNamespacesRequest;
  export type Output = ListNamespacesResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTableBuckets {
  export type Input = ListTableBucketsRequest;
  export type Output = ListTableBucketsResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTables {
  export type Input = ListTablesRequest;
  export type Output = ListTablesResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutTableBucketEncryption {
  export type Input = PutTableBucketEncryptionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutTableBucketMaintenanceConfiguration {
  export type Input = PutTableBucketMaintenanceConfigurationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutTableBucketPolicy {
  export type Input = PutTableBucketPolicyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutTableMaintenanceConfiguration {
  export type Input = PutTableMaintenanceConfigurationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutTablePolicy {
  export type Input = PutTablePolicyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace RenameTable {
  export type Input = RenameTableRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateTableMetadataLocation {
  export type Input = UpdateTableMetadataLocationRequest;
  export type Output = UpdateTableMetadataLocationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export type S3TablesErrors =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | CommonAwsError;

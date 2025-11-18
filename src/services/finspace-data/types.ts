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
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class finspacedata extends AWSServiceClient {
  associateUserToPermissionGroup(
    input: AssociateUserToPermissionGroupRequest,
  ): Effect.Effect<
    AssociateUserToPermissionGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createChangeset(
    input: CreateChangesetRequest,
  ): Effect.Effect<
    CreateChangesetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataset(
    input: CreateDatasetRequest,
  ): Effect.Effect<
    CreateDatasetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataView(
    input: CreateDataViewRequest,
  ): Effect.Effect<
    CreateDataViewResponse,
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createPermissionGroup(
    input: CreatePermissionGroupRequest,
  ): Effect.Effect<
    CreatePermissionGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    CreateUserResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataset(
    input: DeleteDatasetRequest,
  ): Effect.Effect<
    DeleteDatasetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePermissionGroup(
    input: DeletePermissionGroupRequest,
  ): Effect.Effect<
    DeletePermissionGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disableUser(
    input: DisableUserRequest,
  ): Effect.Effect<
    DisableUserResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateUserFromPermissionGroup(
    input: DisassociateUserFromPermissionGroupRequest,
  ): Effect.Effect<
    DisassociateUserFromPermissionGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  enableUser(
    input: EnableUserRequest,
  ): Effect.Effect<
    EnableUserResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getChangeset(
    input: GetChangesetRequest,
  ): Effect.Effect<
    GetChangesetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataset(
    input: GetDatasetRequest,
  ): Effect.Effect<
    GetDatasetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataView(
    input: GetDataViewRequest,
  ): Effect.Effect<
    GetDataViewResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getExternalDataViewAccessDetails(
    input: GetExternalDataViewAccessDetailsRequest,
  ): Effect.Effect<
    GetExternalDataViewAccessDetailsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPermissionGroup(
    input: GetPermissionGroupRequest,
  ): Effect.Effect<
    GetPermissionGroupResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getProgrammaticAccessCredentials(
    input: GetProgrammaticAccessCredentialsRequest,
  ): Effect.Effect<
    GetProgrammaticAccessCredentialsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getUser(
    input: GetUserRequest,
  ): Effect.Effect<
    GetUserResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getWorkingLocation(
    input: GetWorkingLocationRequest,
  ): Effect.Effect<
    GetWorkingLocationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listChangesets(
    input: ListChangesetsRequest,
  ): Effect.Effect<
    ListChangesetsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDatasets(
    input: ListDatasetsRequest,
  ): Effect.Effect<
    ListDatasetsResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataViews(
    input: ListDataViewsRequest,
  ): Effect.Effect<
    ListDataViewsResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPermissionGroups(
    input: ListPermissionGroupsRequest,
  ): Effect.Effect<
    ListPermissionGroupsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPermissionGroupsByUser(
    input: ListPermissionGroupsByUserRequest,
  ): Effect.Effect<
    ListPermissionGroupsByUserResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    ListUsersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listUsersByPermissionGroup(
    input: ListUsersByPermissionGroupRequest,
  ): Effect.Effect<
    ListUsersByPermissionGroupResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  resetUserPassword(
    input: ResetUserPasswordRequest,
  ): Effect.Effect<
    ResetUserPasswordResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateChangeset(
    input: UpdateChangesetRequest,
  ): Effect.Effect<
    UpdateChangesetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDataset(
    input: UpdateDatasetRequest,
  ): Effect.Effect<
    UpdateDatasetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePermissionGroup(
    input: UpdatePermissionGroupRequest,
  ): Effect.Effect<
    UpdatePermissionGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateUser(
    input: UpdateUserRequest,
  ): Effect.Effect<
    UpdateUserResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class FinspaceData extends finspacedata {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AccessKeyId = string;

export type AliasString = string;

export type ApiAccess = "ENABLED" | "DISABLED";
export type ApplicationPermission =
  | "CreateDataset"
  | "ManageClusters"
  | "ManageUsersAndGroups"
  | "ManageAttributeSets"
  | "ViewAuditData"
  | "AccessNotebooks"
  | "GetTemporaryCredentials";
export type ApplicationPermissionList = Array<ApplicationPermission>;
export interface AssociateUserToPermissionGroupRequest {
  permissionGroupId: string;
  userId: string;
  clientToken?: string;
}
export interface AssociateUserToPermissionGroupResponse {
  statusCode?: number;
}
export interface AwsCredentials {
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
  expiration?: number;
}
export type FinspaceDataBoolean = boolean;

export type ChangesetArn = string;

export interface ChangesetErrorInfo {
  errorMessage?: string;
  errorCategory?: ErrorCategory;
}
export type ChangesetId = string;

export type ChangesetList = Array<ChangesetSummary>;
export interface ChangesetSummary {
  changesetId?: string;
  changesetArn?: string;
  datasetId?: string;
  changeType?: ChangeType;
  sourceParams?: Record<string, string>;
  formatParams?: Record<string, string>;
  createTime?: number;
  status?: IngestionStatus;
  errorInfo?: ChangesetErrorInfo;
  activeUntilTimestamp?: number;
  activeFromTimestamp?: number;
  updatesChangesetId?: string;
  updatedByChangesetId?: string;
}
export type ChangeType = "REPLACE" | "APPEND" | "MODIFY";
export type ClientToken = string;

export type ColumnDataType =
  | "STRING"
  | "CHAR"
  | "INTEGER"
  | "TINYINT"
  | "SMALLINT"
  | "BIGINT"
  | "FLOAT"
  | "DOUBLE"
  | "DATE"
  | "DATETIME"
  | "BOOLEAN"
  | "BINARY";
export interface ColumnDefinition {
  dataType?: ColumnDataType;
  columnName?: string;
  columnDescription?: string;
}
export type ColumnDescription = string;

export type ColumnList = Array<ColumnDefinition>;
export type ColumnName = string;

export type ColumnNameList = Array<string>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly reason?: string;
}> {}
export interface CreateChangesetRequest {
  clientToken?: string;
  datasetId: string;
  changeType: ChangeType;
  sourceParams: Record<string, string>;
  formatParams: Record<string, string>;
}
export interface CreateChangesetResponse {
  datasetId?: string;
  changesetId?: string;
}
export interface CreateDatasetRequest {
  clientToken?: string;
  datasetTitle: string;
  kind: DatasetKind;
  datasetDescription?: string;
  ownerInfo?: DatasetOwnerInfo;
  permissionGroupParams: PermissionGroupParams;
  alias?: string;
  schemaDefinition?: SchemaUnion;
}
export interface CreateDatasetResponse {
  datasetId?: string;
}
export interface CreateDataViewRequest {
  clientToken?: string;
  datasetId: string;
  autoUpdate?: boolean;
  sortColumns?: Array<string>;
  partitionColumns?: Array<string>;
  asOfTimestamp?: number;
  destinationTypeParams: DataViewDestinationTypeParams;
}
export interface CreateDataViewResponse {
  datasetId?: string;
  dataViewId?: string;
}
export interface CreatePermissionGroupRequest {
  name: string;
  description?: string;
  applicationPermissions: Array<ApplicationPermission>;
  clientToken?: string;
}
export interface CreatePermissionGroupResponse {
  permissionGroupId?: string;
}
export interface CreateUserRequest {
  emailAddress: string;
  type: UserType;
  firstName?: string;
  lastName?: string;
  apiAccess?: ApiAccess;
  apiAccessPrincipalArn?: string;
  clientToken?: string;
}
export interface CreateUserResponse {
  userId?: string;
}
export interface Credentials {
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
}
export interface Dataset {
  datasetId?: string;
  datasetArn?: string;
  datasetTitle?: string;
  kind?: DatasetKind;
  datasetDescription?: string;
  ownerInfo?: DatasetOwnerInfo;
  createTime?: number;
  lastModifiedTime?: number;
  schemaDefinition?: SchemaUnion;
  alias?: string;
}
export type DatasetArn = string;

export type DatasetDescription = string;

export type DatasetId = string;

export type DatasetKind = "TABULAR" | "NON_TABULAR";
export type DatasetList = Array<Dataset>;
export interface DatasetOwnerInfo {
  name?: string;
  phoneNumber?: string;
  email?: string;
}
export type DatasetStatus = "PENDING" | "FAILED" | "SUCCESS" | "RUNNING";
export type DatasetTitle = string;

export type DataViewArn = string;

export type DataViewDestinationType = string;

export interface DataViewDestinationTypeParams {
  destinationType: string;
  s3DestinationExportFileFormat?: ExportFileFormat;
  s3DestinationExportFileFormatOptions?: Record<string, string>;
}
export interface DataViewErrorInfo {
  errorMessage?: string;
  errorCategory?: ErrorCategory;
}
export type DataViewId = string;

export type DataViewList = Array<DataViewSummary>;
export type DataViewStatus =
  | "RUNNING"
  | "STARTING"
  | "FAILED"
  | "CANCELLED"
  | "TIMEOUT"
  | "SUCCESS"
  | "PENDING"
  | "FAILED_CLEANUP_FAILED";
export interface DataViewSummary {
  dataViewId?: string;
  dataViewArn?: string;
  datasetId?: string;
  asOfTimestamp?: number;
  partitionColumns?: Array<string>;
  sortColumns?: Array<string>;
  status?: DataViewStatus;
  errorInfo?: DataViewErrorInfo;
  destinationTypeProperties?: DataViewDestinationTypeParams;
  autoUpdate?: boolean;
  createTime?: number;
  lastModifiedTime?: number;
}
export interface DeleteDatasetRequest {
  clientToken?: string;
  datasetId: string;
}
export interface DeleteDatasetResponse {
  datasetId?: string;
}
export interface DeletePermissionGroupRequest {
  permissionGroupId: string;
  clientToken?: string;
}
export interface DeletePermissionGroupResponse {
  permissionGroupId?: string;
}
export interface DisableUserRequest {
  userId: string;
  clientToken?: string;
}
export interface DisableUserResponse {
  userId?: string;
}
export interface DisassociateUserFromPermissionGroupRequest {
  permissionGroupId: string;
  userId: string;
  clientToken?: string;
}
export interface DisassociateUserFromPermissionGroupResponse {
  statusCode?: number;
}
export type Email = string;

export interface EnableUserRequest {
  userId: string;
  clientToken?: string;
}
export interface EnableUserResponse {
  userId?: string;
}
export type ErrorCategory =
  | "VALIDATION"
  | "SERVICE_QUOTA_EXCEEDED"
  | "ACCESS_DENIED"
  | "RESOURCE_NOT_FOUND"
  | "THROTTLING"
  | "INTERNAL_SERVICE_EXCEPTION"
  | "CANCELLED"
  | "USER_RECOVERABLE";
export type ErrorMessage = string;

export type ErrorMessage2 = string;

export type ExportFileFormat = "PARQUET" | "DELIMITED_TEXT";
export type FirstName = string;

export type FormatParams = Record<string, string>;
export interface GetChangesetRequest {
  datasetId: string;
  changesetId: string;
}
export interface GetChangesetResponse {
  changesetId?: string;
  changesetArn?: string;
  datasetId?: string;
  changeType?: ChangeType;
  sourceParams?: Record<string, string>;
  formatParams?: Record<string, string>;
  createTime?: number;
  status?: IngestionStatus;
  errorInfo?: ChangesetErrorInfo;
  activeUntilTimestamp?: number;
  activeFromTimestamp?: number;
  updatesChangesetId?: string;
  updatedByChangesetId?: string;
}
export interface GetDatasetRequest {
  datasetId: string;
}
export interface GetDatasetResponse {
  datasetId?: string;
  datasetArn?: string;
  datasetTitle?: string;
  kind?: DatasetKind;
  datasetDescription?: string;
  createTime?: number;
  lastModifiedTime?: number;
  schemaDefinition?: SchemaUnion;
  alias?: string;
  status?: DatasetStatus;
}
export interface GetDataViewRequest {
  dataViewId: string;
  datasetId: string;
}
export interface GetDataViewResponse {
  autoUpdate?: boolean;
  partitionColumns?: Array<string>;
  datasetId?: string;
  asOfTimestamp?: number;
  errorInfo?: DataViewErrorInfo;
  lastModifiedTime?: number;
  createTime?: number;
  sortColumns?: Array<string>;
  dataViewId?: string;
  dataViewArn?: string;
  destinationTypeParams?: DataViewDestinationTypeParams;
  status?: DataViewStatus;
}
export interface GetExternalDataViewAccessDetailsRequest {
  dataViewId: string;
  datasetId: string;
}
export interface GetExternalDataViewAccessDetailsResponse {
  credentials?: AwsCredentials;
  s3Location?: S3Location;
}
export interface GetPermissionGroupRequest {
  permissionGroupId: string;
}
export interface GetPermissionGroupResponse {
  permissionGroup?: PermissionGroup;
}
export interface GetProgrammaticAccessCredentialsRequest {
  durationInMinutes?: number;
  environmentId: string;
}
export interface GetProgrammaticAccessCredentialsResponse {
  credentials?: Credentials;
  durationInMinutes?: number;
}
export interface GetUserRequest {
  userId: string;
}
export interface GetUserResponse {
  userId?: string;
  status?: UserStatus;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  type?: UserType;
  apiAccess?: ApiAccess;
  apiAccessPrincipalArn?: string;
  createTime?: number;
  lastEnabledTime?: number;
  lastDisabledTime?: number;
  lastModifiedTime?: number;
  lastLoginTime?: number;
}
export interface GetWorkingLocationRequest {
  locationType?: locationType;
}
export interface GetWorkingLocationResponse {
  s3Uri?: string;
  s3Path?: string;
  s3Bucket?: string;
}
export type IdType = string;

export type IngestionStatus =
  | "PENDING"
  | "FAILED"
  | "SUCCESS"
  | "RUNNING"
  | "STOP_REQUESTED";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type LastName = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListChangesetsRequest {
  datasetId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListChangesetsResponse {
  changesets?: Array<ChangesetSummary>;
  nextToken?: string;
}
export interface ListDatasetsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListDatasetsResponse {
  datasets?: Array<Dataset>;
  nextToken?: string;
}
export interface ListDataViewsRequest {
  datasetId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataViewsResponse {
  nextToken?: string;
  dataViews?: Array<DataViewSummary>;
}
export interface ListPermissionGroupsByUserRequest {
  userId: string;
  nextToken?: string;
  maxResults: number;
}
export interface ListPermissionGroupsByUserResponse {
  permissionGroups?: Array<PermissionGroupByUser>;
  nextToken?: string;
}
export interface ListPermissionGroupsRequest {
  nextToken?: string;
  maxResults: number;
}
export interface ListPermissionGroupsResponse {
  permissionGroups?: Array<PermissionGroup>;
  nextToken?: string;
}
export interface ListUsersByPermissionGroupRequest {
  permissionGroupId: string;
  nextToken?: string;
  maxResults: number;
}
export interface ListUsersByPermissionGroupResponse {
  users?: Array<UserByPermissionGroup>;
  nextToken?: string;
}
export interface ListUsersRequest {
  nextToken?: string;
  maxResults: number;
}
export interface ListUsersResponse {
  users?: Array<User>;
  nextToken?: string;
}
export type locationType = "INGESTION" | "SAGEMAKER";
export type OwnerName = string;

export type PaginationToken = string;

export type PartitionColumnList = Array<string>;
export type Password = string;

export interface PermissionGroup {
  permissionGroupId?: string;
  name?: string;
  description?: string;
  applicationPermissions?: Array<ApplicationPermission>;
  createTime?: number;
  lastModifiedTime?: number;
  membershipStatus?: PermissionGroupMembershipStatus;
}
export interface PermissionGroupByUser {
  permissionGroupId?: string;
  name?: string;
  membershipStatus?: PermissionGroupMembershipStatus;
}
export type PermissionGroupByUserList = Array<PermissionGroupByUser>;
export type PermissionGroupDescription = string;

export type PermissionGroupId = string;

export type PermissionGroupList = Array<PermissionGroup>;
export type PermissionGroupMembershipStatus =
  | "ADDITION_IN_PROGRESS"
  | "ADDITION_SUCCESS"
  | "REMOVAL_IN_PROGRESS";
export type PermissionGroupName = string;

export interface PermissionGroupParams {
  permissionGroupId?: string;
  datasetPermissions?: Array<ResourcePermission>;
}
export type PhoneNumber = string;

export interface ResetUserPasswordRequest {
  userId: string;
  clientToken?: string;
}
export interface ResetUserPasswordResponse {
  userId?: string;
  temporaryPassword?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly reason?: string;
}> {}
export interface ResourcePermission {
  permission?: string;
}
export type ResourcePermissionsList = Array<ResourcePermission>;
export type ResultLimit = number;

export type RoleArn = string;

export type S3BucketName = string;

export type S3DestinationFormatOptions = Record<string, string>;
export type S3Key = string;

export interface S3Location {
  bucket: string;
  key: string;
}
export interface SchemaDefinition {
  columns?: Array<ColumnDefinition>;
  primaryKeyColumns?: Array<string>;
}
export interface SchemaUnion {
  tabularSchemaConfig?: SchemaDefinition;
}
export type SecretAccessKey = string;

export type SessionDuration = number;

export type SessionToken = string;

export type SortColumnList = Array<string>;
export type SourceParams = Record<string, string>;
export type StatusCode = number;

export type StringMapKey = string;

export type StringMapValue = string;

export type stringValueLength1to1024 = string;

export type StringValueLength1to250 = string;

export type StringValueLength1to255 = string;

export type StringValueLength1to2552 = string;

export type stringValueLength1to63 = string;

export type stringValueMaxLength1000 = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{}> {}
export type TimestampEpoch = number;

export interface UpdateChangesetRequest {
  clientToken?: string;
  datasetId: string;
  changesetId: string;
  sourceParams: Record<string, string>;
  formatParams: Record<string, string>;
}
export interface UpdateChangesetResponse {
  changesetId?: string;
  datasetId?: string;
}
export interface UpdateDatasetRequest {
  clientToken?: string;
  datasetId: string;
  datasetTitle: string;
  kind: DatasetKind;
  datasetDescription?: string;
  alias?: string;
  schemaDefinition?: SchemaUnion;
}
export interface UpdateDatasetResponse {
  datasetId?: string;
}
export interface UpdatePermissionGroupRequest {
  permissionGroupId: string;
  name?: string;
  description?: string;
  applicationPermissions?: Array<ApplicationPermission>;
  clientToken?: string;
}
export interface UpdatePermissionGroupResponse {
  permissionGroupId?: string;
}
export interface UpdateUserRequest {
  userId: string;
  type?: UserType;
  firstName?: string;
  lastName?: string;
  apiAccess?: ApiAccess;
  apiAccessPrincipalArn?: string;
  clientToken?: string;
}
export interface UpdateUserResponse {
  userId?: string;
}
export interface User {
  userId?: string;
  status?: UserStatus;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  type?: UserType;
  apiAccess?: ApiAccess;
  apiAccessPrincipalArn?: string;
  createTime?: number;
  lastEnabledTime?: number;
  lastDisabledTime?: number;
  lastModifiedTime?: number;
  lastLoginTime?: number;
}
export interface UserByPermissionGroup {
  userId?: string;
  status?: UserStatus;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  type?: UserType;
  apiAccess?: ApiAccess;
  apiAccessPrincipalArn?: string;
  membershipStatus?: PermissionGroupMembershipStatus;
}
export type UserByPermissionGroupList = Array<UserByPermissionGroup>;
export type UserId = string;

export type UserList = Array<User>;
export type UserStatus = "CREATING" | "ENABLED" | "DISABLED";
export type UserType = "SUPER_USER" | "APP_USER";
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly reason?: string;
}> {}
export declare namespace AssociateUserToPermissionGroup {
  export type Input = AssociateUserToPermissionGroupRequest;
  export type Output = AssociateUserToPermissionGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateChangeset {
  export type Input = CreateChangesetRequest;
  export type Output = CreateChangesetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataset {
  export type Input = CreateDatasetRequest;
  export type Output = CreateDatasetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataView {
  export type Input = CreateDataViewRequest;
  export type Output = CreateDataViewResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePermissionGroup {
  export type Input = CreatePermissionGroupRequest;
  export type Output = CreatePermissionGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserRequest;
  export type Output = CreateUserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataset {
  export type Input = DeleteDatasetRequest;
  export type Output = DeleteDatasetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePermissionGroup {
  export type Input = DeletePermissionGroupRequest;
  export type Output = DeletePermissionGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisableUser {
  export type Input = DisableUserRequest;
  export type Output = DisableUserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateUserFromPermissionGroup {
  export type Input = DisassociateUserFromPermissionGroupRequest;
  export type Output = DisassociateUserFromPermissionGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EnableUser {
  export type Input = EnableUserRequest;
  export type Output = EnableUserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetChangeset {
  export type Input = GetChangesetRequest;
  export type Output = GetChangesetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataset {
  export type Input = GetDatasetRequest;
  export type Output = GetDatasetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataView {
  export type Input = GetDataViewRequest;
  export type Output = GetDataViewResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExternalDataViewAccessDetails {
  export type Input = GetExternalDataViewAccessDetailsRequest;
  export type Output = GetExternalDataViewAccessDetailsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPermissionGroup {
  export type Input = GetPermissionGroupRequest;
  export type Output = GetPermissionGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProgrammaticAccessCredentials {
  export type Input = GetProgrammaticAccessCredentialsRequest;
  export type Output = GetProgrammaticAccessCredentialsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetUser {
  export type Input = GetUserRequest;
  export type Output = GetUserResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWorkingLocation {
  export type Input = GetWorkingLocationRequest;
  export type Output = GetWorkingLocationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListChangesets {
  export type Input = ListChangesetsRequest;
  export type Output = ListChangesetsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDatasets {
  export type Input = ListDatasetsRequest;
  export type Output = ListDatasetsResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataViews {
  export type Input = ListDataViewsRequest;
  export type Output = ListDataViewsResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPermissionGroups {
  export type Input = ListPermissionGroupsRequest;
  export type Output = ListPermissionGroupsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPermissionGroupsByUser {
  export type Input = ListPermissionGroupsByUserRequest;
  export type Output = ListPermissionGroupsByUserResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListUsers {
  export type Input = ListUsersRequest;
  export type Output = ListUsersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListUsersByPermissionGroup {
  export type Input = ListUsersByPermissionGroupRequest;
  export type Output = ListUsersByPermissionGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetUserPassword {
  export type Input = ResetUserPasswordRequest;
  export type Output = ResetUserPasswordResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateChangeset {
  export type Input = UpdateChangesetRequest;
  export type Output = UpdateChangesetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDataset {
  export type Input = UpdateDatasetRequest;
  export type Output = UpdateDatasetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePermissionGroup {
  export type Input = UpdatePermissionGroupRequest;
  export type Output = UpdatePermissionGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateUser {
  export type Input = UpdateUserRequest;
  export type Output = UpdateUserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type finspacedataErrors =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;

import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const SortColumnList = S.Array(S.String);
export const PartitionColumnList = S.Array(S.String);
export const ApplicationPermissionList = S.Array(S.String);
export class AssociateUserToPermissionGroupRequest extends S.Class<AssociateUserToPermissionGroupRequest>("AssociateUserToPermissionGroupRequest")({permissionGroupId: S.String, userId: S.String, clientToken: S.optional(S.String)}) {}
export class CreatePermissionGroupRequest extends S.Class<CreatePermissionGroupRequest>("CreatePermissionGroupRequest")({name: S.String, description: S.optional(S.String), applicationPermissions: ApplicationPermissionList, clientToken: S.optional(S.String)}) {}
export class CreateUserRequest extends S.Class<CreateUserRequest>("CreateUserRequest")({emailAddress: S.String, type: S.String, firstName: S.optional(S.String), lastName: S.optional(S.String), apiAccess: S.optional(S.String), apiAccessPrincipalArn: S.optional(S.String), clientToken: S.optional(S.String)}) {}
export class DeleteDatasetRequest extends S.Class<DeleteDatasetRequest>("DeleteDatasetRequest")({clientToken: S.optional(S.String), datasetId: S.String}) {}
export class DeletePermissionGroupRequest extends S.Class<DeletePermissionGroupRequest>("DeletePermissionGroupRequest")({permissionGroupId: S.String, clientToken: S.optional(S.String)}) {}
export class DisableUserRequest extends S.Class<DisableUserRequest>("DisableUserRequest")({userId: S.String, clientToken: S.optional(S.String)}) {}
export class DisassociateUserFromPermissionGroupRequest extends S.Class<DisassociateUserFromPermissionGroupRequest>("DisassociateUserFromPermissionGroupRequest")({permissionGroupId: S.String, userId: S.String, clientToken: S.optional(S.String)}) {}
export class EnableUserRequest extends S.Class<EnableUserRequest>("EnableUserRequest")({userId: S.String, clientToken: S.optional(S.String)}) {}
export class GetChangesetRequest extends S.Class<GetChangesetRequest>("GetChangesetRequest")({datasetId: S.String, changesetId: S.String}) {}
export class GetDatasetRequest extends S.Class<GetDatasetRequest>("GetDatasetRequest")({datasetId: S.String}) {}
export class GetDataViewRequest extends S.Class<GetDataViewRequest>("GetDataViewRequest")({dataViewId: S.String, datasetId: S.String}) {}
export class GetExternalDataViewAccessDetailsRequest extends S.Class<GetExternalDataViewAccessDetailsRequest>("GetExternalDataViewAccessDetailsRequest")({dataViewId: S.String, datasetId: S.String}) {}
export class GetPermissionGroupRequest extends S.Class<GetPermissionGroupRequest>("GetPermissionGroupRequest")({permissionGroupId: S.String}) {}
export class GetProgrammaticAccessCredentialsRequest extends S.Class<GetProgrammaticAccessCredentialsRequest>("GetProgrammaticAccessCredentialsRequest")({durationInMinutes: S.optional(S.Number), environmentId: S.String}) {}
export class GetUserRequest extends S.Class<GetUserRequest>("GetUserRequest")({userId: S.String}) {}
export class GetWorkingLocationRequest extends S.Class<GetWorkingLocationRequest>("GetWorkingLocationRequest")({locationType: S.optional(S.String)}) {}
export class ListChangesetsRequest extends S.Class<ListChangesetsRequest>("ListChangesetsRequest")({datasetId: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListDatasetsRequest extends S.Class<ListDatasetsRequest>("ListDatasetsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListDataViewsRequest extends S.Class<ListDataViewsRequest>("ListDataViewsRequest")({datasetId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListPermissionGroupsRequest extends S.Class<ListPermissionGroupsRequest>("ListPermissionGroupsRequest")({nextToken: S.optional(S.String), maxResults: S.Number}) {}
export class ListPermissionGroupsByUserRequest extends S.Class<ListPermissionGroupsByUserRequest>("ListPermissionGroupsByUserRequest")({userId: S.String, nextToken: S.optional(S.String), maxResults: S.Number}) {}
export class ListUsersRequest extends S.Class<ListUsersRequest>("ListUsersRequest")({nextToken: S.optional(S.String), maxResults: S.Number}) {}
export class ListUsersByPermissionGroupRequest extends S.Class<ListUsersByPermissionGroupRequest>("ListUsersByPermissionGroupRequest")({permissionGroupId: S.String, nextToken: S.optional(S.String), maxResults: S.Number}) {}
export class ResetUserPasswordRequest extends S.Class<ResetUserPasswordRequest>("ResetUserPasswordRequest")({userId: S.String, clientToken: S.optional(S.String)}) {}
export const SourceParams = S.Record({key: S.String, value: S.String});
export const FormatParams = S.Record({key: S.String, value: S.String});
export class UpdateChangesetRequest extends S.Class<UpdateChangesetRequest>("UpdateChangesetRequest")({clientToken: S.optional(S.String), datasetId: S.String, changesetId: S.String, sourceParams: SourceParams, formatParams: FormatParams}) {}
export class ColumnDefinition extends S.Class<ColumnDefinition>("ColumnDefinition")({dataType: S.optional(S.String), columnName: S.optional(S.String), columnDescription: S.optional(S.String)}) {}
export const ColumnList = S.Array(ColumnDefinition);
export const ColumnNameList = S.Array(S.String);
export class SchemaDefinition extends S.Class<SchemaDefinition>("SchemaDefinition")({columns: S.optional(ColumnList), primaryKeyColumns: S.optional(ColumnNameList)}) {}
export class SchemaUnion extends S.Class<SchemaUnion>("SchemaUnion")({tabularSchemaConfig: S.optional(SchemaDefinition)}) {}
export class UpdateDatasetRequest extends S.Class<UpdateDatasetRequest>("UpdateDatasetRequest")({clientToken: S.optional(S.String), datasetId: S.String, datasetTitle: S.String, kind: S.String, datasetDescription: S.optional(S.String), alias: S.optional(S.String), schemaDefinition: S.optional(SchemaUnion)}) {}
export class UpdatePermissionGroupRequest extends S.Class<UpdatePermissionGroupRequest>("UpdatePermissionGroupRequest")({permissionGroupId: S.String, name: S.optional(S.String), description: S.optional(S.String), applicationPermissions: S.optional(ApplicationPermissionList), clientToken: S.optional(S.String)}) {}
export class UpdateUserRequest extends S.Class<UpdateUserRequest>("UpdateUserRequest")({userId: S.String, type: S.optional(S.String), firstName: S.optional(S.String), lastName: S.optional(S.String), apiAccess: S.optional(S.String), apiAccessPrincipalArn: S.optional(S.String), clientToken: S.optional(S.String)}) {}
export class DatasetOwnerInfo extends S.Class<DatasetOwnerInfo>("DatasetOwnerInfo")({name: S.optional(S.String), phoneNumber: S.optional(S.String), email: S.optional(S.String)}) {}
export class PermissionGroup extends S.Class<PermissionGroup>("PermissionGroup")({permissionGroupId: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), applicationPermissions: S.optional(ApplicationPermissionList), createTime: S.optional(S.Number), lastModifiedTime: S.optional(S.Number), membershipStatus: S.optional(S.String)}) {}
export const PermissionGroupList = S.Array(PermissionGroup);
export class AssociateUserToPermissionGroupResponse extends S.Class<AssociateUserToPermissionGroupResponse>("AssociateUserToPermissionGroupResponse")({statusCode: S.optional(S.Number)}) {}
export class CreateChangesetRequest extends S.Class<CreateChangesetRequest>("CreateChangesetRequest")({clientToken: S.optional(S.String), datasetId: S.String, changeType: S.String, sourceParams: SourceParams, formatParams: FormatParams}) {}
export class CreatePermissionGroupResponse extends S.Class<CreatePermissionGroupResponse>("CreatePermissionGroupResponse")({permissionGroupId: S.optional(S.String)}) {}
export class CreateUserResponse extends S.Class<CreateUserResponse>("CreateUserResponse")({userId: S.optional(S.String)}) {}
export class DeleteDatasetResponse extends S.Class<DeleteDatasetResponse>("DeleteDatasetResponse")({datasetId: S.optional(S.String)}) {}
export class DeletePermissionGroupResponse extends S.Class<DeletePermissionGroupResponse>("DeletePermissionGroupResponse")({permissionGroupId: S.optional(S.String)}) {}
export class DisableUserResponse extends S.Class<DisableUserResponse>("DisableUserResponse")({userId: S.optional(S.String)}) {}
export class DisassociateUserFromPermissionGroupResponse extends S.Class<DisassociateUserFromPermissionGroupResponse>("DisassociateUserFromPermissionGroupResponse")({statusCode: S.optional(S.Number)}) {}
export class EnableUserResponse extends S.Class<EnableUserResponse>("EnableUserResponse")({userId: S.optional(S.String)}) {}
export class GetDatasetResponse extends S.Class<GetDatasetResponse>("GetDatasetResponse")({datasetId: S.optional(S.String), datasetArn: S.optional(S.String), datasetTitle: S.optional(S.String), kind: S.optional(S.String), datasetDescription: S.optional(S.String), createTime: S.optional(S.Number), lastModifiedTime: S.optional(S.Number), schemaDefinition: S.optional(SchemaUnion), alias: S.optional(S.String), status: S.optional(S.String)}) {}
export class GetUserResponse extends S.Class<GetUserResponse>("GetUserResponse")({userId: S.optional(S.String), status: S.optional(S.String), firstName: S.optional(S.String), lastName: S.optional(S.String), emailAddress: S.optional(S.String), type: S.optional(S.String), apiAccess: S.optional(S.String), apiAccessPrincipalArn: S.optional(S.String), createTime: S.optional(S.Number), lastEnabledTime: S.optional(S.Number), lastDisabledTime: S.optional(S.Number), lastModifiedTime: S.optional(S.Number), lastLoginTime: S.optional(S.Number)}) {}
export class GetWorkingLocationResponse extends S.Class<GetWorkingLocationResponse>("GetWorkingLocationResponse")({s3Uri: S.optional(S.String), s3Path: S.optional(S.String), s3Bucket: S.optional(S.String)}) {}
export class ListPermissionGroupsResponse extends S.Class<ListPermissionGroupsResponse>("ListPermissionGroupsResponse")({permissionGroups: S.optional(PermissionGroupList), nextToken: S.optional(S.String)}) {}
export class ResetUserPasswordResponse extends S.Class<ResetUserPasswordResponse>("ResetUserPasswordResponse")({userId: S.optional(S.String), temporaryPassword: S.optional(S.String)}) {}
export class UpdateChangesetResponse extends S.Class<UpdateChangesetResponse>("UpdateChangesetResponse")({changesetId: S.optional(S.String), datasetId: S.optional(S.String)}) {}
export class UpdateDatasetResponse extends S.Class<UpdateDatasetResponse>("UpdateDatasetResponse")({datasetId: S.optional(S.String)}) {}
export class UpdatePermissionGroupResponse extends S.Class<UpdatePermissionGroupResponse>("UpdatePermissionGroupResponse")({permissionGroupId: S.optional(S.String)}) {}
export class UpdateUserResponse extends S.Class<UpdateUserResponse>("UpdateUserResponse")({userId: S.optional(S.String)}) {}
export class ResourcePermission extends S.Class<ResourcePermission>("ResourcePermission")({permission: S.optional(S.String)}) {}
export const ResourcePermissionsList = S.Array(ResourcePermission);
export const S3DestinationFormatOptions = S.Record({key: S.String, value: S.String});
export class PermissionGroupParams extends S.Class<PermissionGroupParams>("PermissionGroupParams")({permissionGroupId: S.optional(S.String), datasetPermissions: S.optional(ResourcePermissionsList)}) {}
export class DataViewDestinationTypeParams extends S.Class<DataViewDestinationTypeParams>("DataViewDestinationTypeParams")({destinationType: S.String, s3DestinationExportFileFormat: S.optional(S.String), s3DestinationExportFileFormatOptions: S.optional(S3DestinationFormatOptions)}) {}
export class ChangesetErrorInfo extends S.Class<ChangesetErrorInfo>("ChangesetErrorInfo")({errorMessage: S.optional(S.String), errorCategory: S.optional(S.String)}) {}
export class DataViewErrorInfo extends S.Class<DataViewErrorInfo>("DataViewErrorInfo")({errorMessage: S.optional(S.String), errorCategory: S.optional(S.String)}) {}
export class AwsCredentials extends S.Class<AwsCredentials>("AwsCredentials")({accessKeyId: S.optional(S.String), secretAccessKey: S.optional(S.String), sessionToken: S.optional(S.String), expiration: S.optional(S.Number)}) {}
export class S3Location extends S.Class<S3Location>("S3Location")({bucket: S.String, key: S.String}) {}
export class Credentials extends S.Class<Credentials>("Credentials")({accessKeyId: S.optional(S.String), secretAccessKey: S.optional(S.String), sessionToken: S.optional(S.String)}) {}
export class ChangesetSummary extends S.Class<ChangesetSummary>("ChangesetSummary")({changesetId: S.optional(S.String), changesetArn: S.optional(S.String), datasetId: S.optional(S.String), changeType: S.optional(S.String), sourceParams: S.optional(SourceParams), formatParams: S.optional(FormatParams), createTime: S.optional(S.Number), status: S.optional(S.String), errorInfo: S.optional(ChangesetErrorInfo), activeUntilTimestamp: S.optional(S.Number), activeFromTimestamp: S.optional(S.Number), updatesChangesetId: S.optional(S.String), updatedByChangesetId: S.optional(S.String)}) {}
export const ChangesetList = S.Array(ChangesetSummary);
export class Dataset extends S.Class<Dataset>("Dataset")({datasetId: S.optional(S.String), datasetArn: S.optional(S.String), datasetTitle: S.optional(S.String), kind: S.optional(S.String), datasetDescription: S.optional(S.String), ownerInfo: S.optional(DatasetOwnerInfo), createTime: S.optional(S.Number), lastModifiedTime: S.optional(S.Number), schemaDefinition: S.optional(SchemaUnion), alias: S.optional(S.String)}) {}
export const DatasetList = S.Array(Dataset);
export class DataViewSummary extends S.Class<DataViewSummary>("DataViewSummary")({dataViewId: S.optional(S.String), dataViewArn: S.optional(S.String), datasetId: S.optional(S.String), asOfTimestamp: S.optional(S.Number), partitionColumns: S.optional(PartitionColumnList), sortColumns: S.optional(SortColumnList), status: S.optional(S.String), errorInfo: S.optional(DataViewErrorInfo), destinationTypeProperties: S.optional(DataViewDestinationTypeParams), autoUpdate: S.optional(S.Boolean), createTime: S.optional(S.Number), lastModifiedTime: S.optional(S.Number)}) {}
export const DataViewList = S.Array(DataViewSummary);
export class PermissionGroupByUser extends S.Class<PermissionGroupByUser>("PermissionGroupByUser")({permissionGroupId: S.optional(S.String), name: S.optional(S.String), membershipStatus: S.optional(S.String)}) {}
export const PermissionGroupByUserList = S.Array(PermissionGroupByUser);
export class User extends S.Class<User>("User")({userId: S.optional(S.String), status: S.optional(S.String), firstName: S.optional(S.String), lastName: S.optional(S.String), emailAddress: S.optional(S.String), type: S.optional(S.String), apiAccess: S.optional(S.String), apiAccessPrincipalArn: S.optional(S.String), createTime: S.optional(S.Number), lastEnabledTime: S.optional(S.Number), lastDisabledTime: S.optional(S.Number), lastModifiedTime: S.optional(S.Number), lastLoginTime: S.optional(S.Number)}) {}
export const UserList = S.Array(User);
export class UserByPermissionGroup extends S.Class<UserByPermissionGroup>("UserByPermissionGroup")({userId: S.optional(S.String), status: S.optional(S.String), firstName: S.optional(S.String), lastName: S.optional(S.String), emailAddress: S.optional(S.String), type: S.optional(S.String), apiAccess: S.optional(S.String), apiAccessPrincipalArn: S.optional(S.String), membershipStatus: S.optional(S.String)}) {}
export const UserByPermissionGroupList = S.Array(UserByPermissionGroup);
export class CreateChangesetResponse extends S.Class<CreateChangesetResponse>("CreateChangesetResponse")({datasetId: S.optional(S.String), changesetId: S.optional(S.String)}) {}
export class CreateDataViewRequest extends S.Class<CreateDataViewRequest>("CreateDataViewRequest")({clientToken: S.optional(S.String), datasetId: S.String, autoUpdate: S.optional(S.Boolean), sortColumns: S.optional(SortColumnList), partitionColumns: S.optional(PartitionColumnList), asOfTimestamp: S.optional(S.Number), destinationTypeParams: DataViewDestinationTypeParams}) {}
export class GetChangesetResponse extends S.Class<GetChangesetResponse>("GetChangesetResponse")({changesetId: S.optional(S.String), changesetArn: S.optional(S.String), datasetId: S.optional(S.String), changeType: S.optional(S.String), sourceParams: S.optional(SourceParams), formatParams: S.optional(FormatParams), createTime: S.optional(S.Number), status: S.optional(S.String), errorInfo: S.optional(ChangesetErrorInfo), activeUntilTimestamp: S.optional(S.Number), activeFromTimestamp: S.optional(S.Number), updatesChangesetId: S.optional(S.String), updatedByChangesetId: S.optional(S.String)}) {}
export class GetDataViewResponse extends S.Class<GetDataViewResponse>("GetDataViewResponse")({autoUpdate: S.optional(S.Boolean), partitionColumns: S.optional(PartitionColumnList), datasetId: S.optional(S.String), asOfTimestamp: S.optional(S.Number), errorInfo: S.optional(DataViewErrorInfo), lastModifiedTime: S.optional(S.Number), createTime: S.optional(S.Number), sortColumns: S.optional(SortColumnList), dataViewId: S.optional(S.String), dataViewArn: S.optional(S.String), destinationTypeParams: S.optional(DataViewDestinationTypeParams), status: S.optional(S.String)}) {}
export class GetExternalDataViewAccessDetailsResponse extends S.Class<GetExternalDataViewAccessDetailsResponse>("GetExternalDataViewAccessDetailsResponse")({credentials: S.optional(AwsCredentials), s3Location: S.optional(S3Location)}) {}
export class GetPermissionGroupResponse extends S.Class<GetPermissionGroupResponse>("GetPermissionGroupResponse")({permissionGroup: S.optional(PermissionGroup)}) {}
export class GetProgrammaticAccessCredentialsResponse extends S.Class<GetProgrammaticAccessCredentialsResponse>("GetProgrammaticAccessCredentialsResponse")({credentials: S.optional(Credentials), durationInMinutes: S.optional(S.Number)}) {}
export class ListChangesetsResponse extends S.Class<ListChangesetsResponse>("ListChangesetsResponse")({changesets: S.optional(ChangesetList), nextToken: S.optional(S.String)}) {}
export class ListDatasetsResponse extends S.Class<ListDatasetsResponse>("ListDatasetsResponse")({datasets: S.optional(DatasetList), nextToken: S.optional(S.String)}) {}
export class ListDataViewsResponse extends S.Class<ListDataViewsResponse>("ListDataViewsResponse")({nextToken: S.optional(S.String), dataViews: S.optional(DataViewList)}) {}
export class ListPermissionGroupsByUserResponse extends S.Class<ListPermissionGroupsByUserResponse>("ListPermissionGroupsByUserResponse")({permissionGroups: S.optional(PermissionGroupByUserList), nextToken: S.optional(S.String)}) {}
export class ListUsersResponse extends S.Class<ListUsersResponse>("ListUsersResponse")({users: S.optional(UserList), nextToken: S.optional(S.String)}) {}
export class ListUsersByPermissionGroupResponse extends S.Class<ListUsersByPermissionGroupResponse>("ListUsersByPermissionGroupResponse")({users: S.optional(UserByPermissionGroupList), nextToken: S.optional(S.String)}) {}
export class CreateDatasetRequest extends S.Class<CreateDatasetRequest>("CreateDatasetRequest")({clientToken: S.optional(S.String), datasetTitle: S.String, kind: S.String, datasetDescription: S.optional(S.String), ownerInfo: S.optional(DatasetOwnerInfo), permissionGroupParams: PermissionGroupParams, alias: S.optional(S.String), schemaDefinition: S.optional(SchemaUnion)}) {}
export class CreateDataViewResponse extends S.Class<CreateDataViewResponse>("CreateDataViewResponse")({datasetId: S.optional(S.String), dataViewId: S.optional(S.String)}) {}
export class CreateDatasetResponse extends S.Class<CreateDatasetResponse>("CreateDatasetResponse")({datasetId: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * Removes a user from a permission group.
 */export const disassociateUserFromPermissionGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/permission-group/{permissionGroupId}/users/{userId}", method: "DELETE", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.DisassociateUserFromPermissionGroup" }, DisassociateUserFromPermissionGroupRequest, DisassociateUserFromPermissionGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows the specified user to access the FinSpace web application and API.
 */export const enableUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/user/{userId}/enable", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.EnableUser" }, EnableUserRequest, EnableUserResponse, [AccessDeniedException, ConflictException, InternalServerException, LimitExceededException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a Dataset.
 */export const getDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/datasetsv2/{datasetId}", method: "GET", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.GetDataset" }, GetDatasetRequest, GetDatasetResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details for a specific user.
 */export const getUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/user/{userId}", method: "GET", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.GetUser" }, GetUserRequest, GetUserResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A temporary Amazon S3 location, where you can copy your files from a source location to stage or use
 * as a scratch space in FinSpace notebook.
 */export const getWorkingLocation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/workingLocationV1", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.GetWorkingLocation" }, GetWorkingLocationRequest, GetWorkingLocationResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all available permission groups in FinSpace.
 */export const listPermissionGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/permission-group", method: "GET", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.ListPermissionGroups" }, ListPermissionGroupsRequest, ListPermissionGroupsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Resets the password for a specified user ID and generates a temporary one. Only a superuser can reset password for other users. Resetting the password immediately invalidates the previous password associated with the user.
 */export const resetUserPassword = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/user/{userId}/password", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.ResetUserPassword" }, ResetUserPasswordRequest, ResetUserPasswordResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a FinSpace Changeset.
 */export const updateChangeset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/datasets/{datasetId}/changesetsv2/{changesetId}", method: "PUT", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.UpdateChangeset" }, UpdateChangesetRequest, UpdateChangesetResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a FinSpace Dataset.
 */export const updateDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/datasetsv2/{datasetId}", method: "PUT", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.UpdateDataset" }, UpdateDatasetRequest, UpdateDatasetResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the details of a permission group. You cannot modify a `permissionGroupID`.
 */export const updatePermissionGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/permission-group/{permissionGroupId}", method: "PUT", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.UpdatePermissionGroup" }, UpdatePermissionGroupRequest, UpdatePermissionGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the details of the specified user. You cannot update the `userId` for a user.
 */export const updateUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/user/{userId}", method: "PUT", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.UpdateUser" }, UpdateUserRequest, UpdateUserResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a user to a permission group to grant permissions for actions a user can perform in FinSpace.
 */export const associateUserToPermissionGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/permission-group/{permissionGroupId}/users/{userId}", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.AssociateUserToPermissionGroup" }, AssociateUserToPermissionGroupRequest, AssociateUserToPermissionGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new Changeset in a FinSpace Dataset.
 */export const createChangeset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/datasets/{datasetId}/changesetsv2", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.CreateChangeset" }, CreateChangesetRequest, CreateChangesetResponse, [AccessDeniedException, ConflictException, InternalServerException, LimitExceededException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a group of permissions for various actions that a user can perform in FinSpace.
 */export const createPermissionGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/permission-group", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.CreatePermissionGroup" }, CreatePermissionGroupRequest, CreatePermissionGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, LimitExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new user in FinSpace.
 */export const createUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/user", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.CreateUser" }, CreateUserRequest, CreateUserResponse, [AccessDeniedException, ConflictException, InternalServerException, LimitExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a FinSpace Dataset.
 */export const deleteDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/datasetsv2/{datasetId}", method: "DELETE", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.DeleteDataset" }, DeleteDatasetRequest, DeleteDatasetResponse, [AccessDeniedException, ConflictException, InternalServerException, LimitExceededException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a permission group. This action is irreversible.
 */export const deletePermissionGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/permission-group/{permissionGroupId}", method: "DELETE", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.DeletePermissionGroup" }, DeletePermissionGroupRequest, DeletePermissionGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, LimitExceededException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Denies access to the FinSpace web application and API for the specified user.
 */export const disableUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/user/{userId}/disable", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.DisableUser" }, DisableUserRequest, DisableUserResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get information about a Changeset.
 */export const getChangeset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/datasets/{datasetId}/changesetsv2/{changesetId}", method: "GET", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.GetChangeset" }, GetChangesetRequest, GetChangesetResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a Dataview.
 */export const getDataView = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/datasets/{datasetId}/dataviewsv2/{dataViewId}", method: "GET", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.GetDataView" }, GetDataViewRequest, GetDataViewResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the credentials to access the external Dataview from an S3 location. To call this API:
 * 
 * - You must retrieve the programmatic credentials.
 * 
 * - You must be a member of a FinSpace user group, where the dataset that you want to access has `Read Dataset Data` permissions.
 */export const getExternalDataViewAccessDetails = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/datasets/{datasetId}/dataviewsv2/{dataViewId}/external-access-details", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.GetExternalDataViewAccessDetails" }, GetExternalDataViewAccessDetailsRequest, GetExternalDataViewAccessDetailsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details of a specific permission group.
 */export const getPermissionGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/permission-group/{permissionGroupId}", method: "GET", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.GetPermissionGroup" }, GetPermissionGroupRequest, GetPermissionGroupResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Request programmatic credentials to use with FinSpace SDK. For more information, see Step 2. Access credentials programmatically using IAM access key id and secret access key.
 */export const getProgrammaticAccessCredentials = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/credentials/programmatic", method: "GET", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.GetProgrammaticAccessCredentials" }, GetProgrammaticAccessCredentialsRequest, GetProgrammaticAccessCredentialsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the FinSpace Changesets for a Dataset.
 */export const listChangesets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/datasets/{datasetId}/changesetsv2", method: "GET", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.ListChangesets" }, ListChangesetsRequest, ListChangesetsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all of the active Datasets that a user has access to.
 */export const listDatasets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/datasetsv2", method: "GET", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.ListDatasets" }, ListDatasetsRequest, ListDatasetsResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all available Dataviews for a Dataset.
 */export const listDataViews = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/datasets/{datasetId}/dataviewsv2", method: "GET", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.ListDataViews" }, ListDataViewsRequest, ListDataViewsResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the permission groups that are associated with a specific user.
 */export const listPermissionGroupsByUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/user/{userId}/permission-groups", method: "GET", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.ListPermissionGroupsByUser" }, ListPermissionGroupsByUserRequest, ListPermissionGroupsByUserResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all available users in FinSpace.
 */export const listUsers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/user", method: "GET", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.ListUsers" }, ListUsersRequest, ListUsersResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists details of all the users in a specific permission group.
 */export const listUsersByPermissionGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/permission-group/{permissionGroupId}/users", method: "GET", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.ListUsersByPermissionGroup" }, ListUsersByPermissionGroupRequest, ListUsersByPermissionGroupResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Dataview for a Dataset.
 */export const createDataView = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/datasets/{datasetId}/dataviewsv2", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.CreateDataView" }, CreateDataViewRequest, CreateDataViewResponse, [ConflictException, InternalServerException, LimitExceededException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new FinSpace Dataset.
 */export const createDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-13", uri: "/datasetsv2", sdkId: "finspace data", sigV4ServiceName: "finspace-api", name: "AWSHabaneroPublicAPI.CreateDataset" }, CreateDatasetRequest, CreateDatasetResponse, [AccessDeniedException, ConflictException, InternalServerException, LimitExceededException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

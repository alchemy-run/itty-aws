import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const LdapDisplayNameList = S.Array(S.String);
export class AddGroupMemberRequest extends S.Class<AddGroupMemberRequest>("AddGroupMemberRequest")({DirectoryId: S.String, GroupName: S.String, MemberName: S.String, MemberRealm: S.optional(S.String), ClientToken: S.optional(S.String)}) {}
export class AddGroupMemberResult extends S.Class<AddGroupMemberResult>("AddGroupMemberResult")({}) {}
export const StringSetAttributeValue = S.Array(S.String);
export const AttributeValue = S.Union(S.String, S.Number, S.Boolean, StringSetAttributeValue);
export const Attributes = S.Record({key: S.String, value: AttributeValue});
export class CreateUserRequest extends S.Class<CreateUserRequest>("CreateUserRequest")({DirectoryId: S.String, SAMAccountName: S.String, EmailAddress: S.optional(S.String), GivenName: S.optional(S.String), Surname: S.optional(S.String), OtherAttributes: S.optional(Attributes), ClientToken: S.optional(S.String)}) {}
export class DeleteGroupRequest extends S.Class<DeleteGroupRequest>("DeleteGroupRequest")({DirectoryId: S.String, SAMAccountName: S.String, ClientToken: S.optional(S.String)}) {}
export class DeleteGroupResult extends S.Class<DeleteGroupResult>("DeleteGroupResult")({}) {}
export class DeleteUserRequest extends S.Class<DeleteUserRequest>("DeleteUserRequest")({DirectoryId: S.String, SAMAccountName: S.String, ClientToken: S.optional(S.String)}) {}
export class DeleteUserResult extends S.Class<DeleteUserResult>("DeleteUserResult")({}) {}
export class DescribeGroupRequest extends S.Class<DescribeGroupRequest>("DescribeGroupRequest")({DirectoryId: S.String, Realm: S.optional(S.String), SAMAccountName: S.String, OtherAttributes: S.optional(LdapDisplayNameList)}) {}
export class DescribeUserRequest extends S.Class<DescribeUserRequest>("DescribeUserRequest")({DirectoryId: S.String, SAMAccountName: S.String, OtherAttributes: S.optional(LdapDisplayNameList), Realm: S.optional(S.String)}) {}
export class DisableUserRequest extends S.Class<DisableUserRequest>("DisableUserRequest")({DirectoryId: S.String, SAMAccountName: S.String, ClientToken: S.optional(S.String)}) {}
export class DisableUserResult extends S.Class<DisableUserResult>("DisableUserResult")({}) {}
export class ListGroupMembersRequest extends S.Class<ListGroupMembersRequest>("ListGroupMembersRequest")({DirectoryId: S.String, Realm: S.optional(S.String), MemberRealm: S.optional(S.String), SAMAccountName: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListGroupsRequest extends S.Class<ListGroupsRequest>("ListGroupsRequest")({DirectoryId: S.String, Realm: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListGroupsForMemberRequest extends S.Class<ListGroupsForMemberRequest>("ListGroupsForMemberRequest")({DirectoryId: S.String, Realm: S.optional(S.String), MemberRealm: S.optional(S.String), SAMAccountName: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListUsersRequest extends S.Class<ListUsersRequest>("ListUsersRequest")({DirectoryId: S.String, Realm: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class RemoveGroupMemberRequest extends S.Class<RemoveGroupMemberRequest>("RemoveGroupMemberRequest")({DirectoryId: S.String, GroupName: S.String, MemberName: S.String, MemberRealm: S.optional(S.String), ClientToken: S.optional(S.String)}) {}
export class RemoveGroupMemberResult extends S.Class<RemoveGroupMemberResult>("RemoveGroupMemberResult")({}) {}
export class SearchGroupsRequest extends S.Class<SearchGroupsRequest>("SearchGroupsRequest")({DirectoryId: S.String, SearchString: S.String, SearchAttributes: LdapDisplayNameList, Realm: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class SearchUsersRequest extends S.Class<SearchUsersRequest>("SearchUsersRequest")({DirectoryId: S.String, Realm: S.optional(S.String), SearchString: S.String, SearchAttributes: LdapDisplayNameList, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class UpdateGroupRequest extends S.Class<UpdateGroupRequest>("UpdateGroupRequest")({DirectoryId: S.String, SAMAccountName: S.String, GroupType: S.optional(S.String), GroupScope: S.optional(S.String), OtherAttributes: S.optional(Attributes), UpdateType: S.optional(S.String), ClientToken: S.optional(S.String)}) {}
export class UpdateGroupResult extends S.Class<UpdateGroupResult>("UpdateGroupResult")({}) {}
export class UpdateUserRequest extends S.Class<UpdateUserRequest>("UpdateUserRequest")({DirectoryId: S.String, SAMAccountName: S.String, EmailAddress: S.optional(S.String), GivenName: S.optional(S.String), Surname: S.optional(S.String), OtherAttributes: S.optional(Attributes), UpdateType: S.optional(S.String), ClientToken: S.optional(S.String)}) {}
export class UpdateUserResult extends S.Class<UpdateUserResult>("UpdateUserResult")({}) {}
export class CreateUserResult extends S.Class<CreateUserResult>("CreateUserResult")({DirectoryId: S.optional(S.String), SID: S.optional(S.String), SAMAccountName: S.optional(S.String)}) {}
export class DescribeGroupResult extends S.Class<DescribeGroupResult>("DescribeGroupResult")({DirectoryId: S.optional(S.String), Realm: S.optional(S.String), SID: S.optional(S.String), SAMAccountName: S.optional(S.String), DistinguishedName: S.optional(S.String), GroupType: S.optional(S.String), GroupScope: S.optional(S.String), OtherAttributes: S.optional(Attributes)}) {}
export class DescribeUserResult extends S.Class<DescribeUserResult>("DescribeUserResult")({DirectoryId: S.optional(S.String), Realm: S.optional(S.String), SID: S.optional(S.String), SAMAccountName: S.optional(S.String), DistinguishedName: S.optional(S.String), UserPrincipalName: S.optional(S.String), EmailAddress: S.optional(S.String), GivenName: S.optional(S.String), Surname: S.optional(S.String), Enabled: S.optional(S.Boolean), OtherAttributes: S.optional(Attributes)}) {}
export class GroupSummary extends S.Class<GroupSummary>("GroupSummary")({SID: S.String, SAMAccountName: S.String, GroupType: S.String, GroupScope: S.String}) {}
export const GroupSummaryList = S.Array(GroupSummary);
export class ListGroupsForMemberResult extends S.Class<ListGroupsForMemberResult>("ListGroupsForMemberResult")({DirectoryId: S.optional(S.String), Realm: S.optional(S.String), MemberRealm: S.optional(S.String), Groups: S.optional(GroupSummaryList), NextToken: S.optional(S.String)}) {}
export class Member extends S.Class<Member>("Member")({SID: S.String, SAMAccountName: S.String, MemberType: S.String}) {}
export const MemberList = S.Array(Member);
export class UserSummary extends S.Class<UserSummary>("UserSummary")({SID: S.String, SAMAccountName: S.String, GivenName: S.optional(S.String), Surname: S.optional(S.String), Enabled: S.Boolean}) {}
export const UserSummaryList = S.Array(UserSummary);
export class Group extends S.Class<Group>("Group")({SID: S.optional(S.String), SAMAccountName: S.String, DistinguishedName: S.optional(S.String), GroupType: S.optional(S.String), GroupScope: S.optional(S.String), OtherAttributes: S.optional(Attributes)}) {}
export const GroupList = S.Array(Group);
export class User extends S.Class<User>("User")({SID: S.optional(S.String), SAMAccountName: S.String, DistinguishedName: S.optional(S.String), UserPrincipalName: S.optional(S.String), EmailAddress: S.optional(S.String), GivenName: S.optional(S.String), Surname: S.optional(S.String), Enabled: S.optional(S.Boolean), OtherAttributes: S.optional(Attributes)}) {}
export const UserList = S.Array(User);
export class CreateGroupRequest extends S.Class<CreateGroupRequest>("CreateGroupRequest")({DirectoryId: S.String, SAMAccountName: S.String, GroupType: S.optional(S.String), GroupScope: S.optional(S.String), OtherAttributes: S.optional(Attributes), ClientToken: S.optional(S.String)}) {}
export class ListGroupMembersResult extends S.Class<ListGroupMembersResult>("ListGroupMembersResult")({DirectoryId: S.optional(S.String), Realm: S.optional(S.String), MemberRealm: S.optional(S.String), Members: S.optional(MemberList), NextToken: S.optional(S.String)}) {}
export class ListGroupsResult extends S.Class<ListGroupsResult>("ListGroupsResult")({DirectoryId: S.optional(S.String), Realm: S.optional(S.String), Groups: S.optional(GroupSummaryList), NextToken: S.optional(S.String)}) {}
export class ListUsersResult extends S.Class<ListUsersResult>("ListUsersResult")({DirectoryId: S.optional(S.String), Realm: S.optional(S.String), Users: S.optional(UserSummaryList), NextToken: S.optional(S.String)}) {}
export class SearchGroupsResult extends S.Class<SearchGroupsResult>("SearchGroupsResult")({DirectoryId: S.optional(S.String), Realm: S.optional(S.String), Groups: S.optional(GroupList), NextToken: S.optional(S.String)}) {}
export class SearchUsersResult extends S.Class<SearchUsersResult>("SearchUsersResult")({DirectoryId: S.optional(S.String), Realm: S.optional(S.String), Users: S.optional(UserList), NextToken: S.optional(S.String)}) {}
export class CreateGroupResult extends S.Class<CreateGroupResult>("CreateGroupResult")({DirectoryId: S.optional(S.String), SAMAccountName: S.optional(S.String), SID: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class DirectoryUnavailableException extends S.TaggedError<DirectoryUnavailableException>()("DirectoryUnavailableException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * Adds an existing user, group, or computer as a group member.
 */export const addGroupMember = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/GroupMemberships/AddGroupMember", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.AddGroupMember" }, AddGroupMemberRequest, AddGroupMemberResult, [AccessDeniedException, ConflictException, DirectoryUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new user.
 */export const createUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/Users/CreateUser", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.CreateUser" }, CreateUserRequest, CreateUserResult, [AccessDeniedException, ConflictException, DirectoryUnavailableException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a group.
 */export const deleteGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/Groups/DeleteGroup", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.DeleteGroup" }, DeleteGroupRequest, DeleteGroupResult, [AccessDeniedException, ConflictException, DirectoryUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a user.
 */export const deleteUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/Users/DeleteUser", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.DeleteUser" }, DeleteUserRequest, DeleteUserResult, [AccessDeniedException, ConflictException, DirectoryUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a specific group.
 */export const describeGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/Groups/DescribeGroup", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.DescribeGroup" }, DescribeGroupRequest, DescribeGroupResult, [AccessDeniedException, DirectoryUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a specific user.
 */export const describeUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/Users/DescribeUser", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.DescribeUser" }, DescribeUserRequest, DescribeUserResult, [AccessDeniedException, DirectoryUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deactivates an active user account. For information about how to enable an inactive user
 * account, see ResetUserPassword
 * in the *Directory Service API Reference*.
 */export const disableUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/Users/DisableUser", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.DisableUser" }, DisableUserRequest, DisableUserResult, [AccessDeniedException, ConflictException, DirectoryUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns group information for the specified member.
 * 
 * This operation supports pagination with the use of the `NextToken` request and
 * response parameters. If more results are available, the
 * `ListGroupsForMember.NextToken` member contains a token that you pass in the next
 * call to `ListGroupsForMember`. This retrieves the next set of items.
 * 
 * You can also specify a maximum number of return results with the `MaxResults`
 * parameter.
 */export const listGroupsForMember = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/GroupMemberships/ListGroupsForMember", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.ListGroupsForMember" }, ListGroupsForMemberRequest, ListGroupsForMemberResult, [AccessDeniedException, DirectoryUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a member from a group.
 */export const removeGroupMember = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/GroupMemberships/RemoveGroupMember", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.RemoveGroupMember" }, RemoveGroupMemberRequest, RemoveGroupMemberResult, [AccessDeniedException, ConflictException, DirectoryUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates group information.
 */export const updateGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/Groups/UpdateGroup", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.UpdateGroup" }, UpdateGroupRequest, UpdateGroupResult, [AccessDeniedException, ConflictException, DirectoryUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates user information.
 */export const updateUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/Users/UpdateUser", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.UpdateUser" }, UpdateUserRequest, UpdateUserResult, [AccessDeniedException, ConflictException, DirectoryUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns member information for the specified group.
 * 
 * This operation supports pagination with the use of the `NextToken` request and
 * response parameters. If more results are available, the
 * `ListGroupMembers.NextToken` member contains a token that you pass in the next
 * call to `ListGroupMembers`. This retrieves the next set of items.
 * 
 * You can also specify a maximum number of return results with the `MaxResults`
 * parameter.
 */export const listGroupMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/GroupMemberships/ListGroupMembers", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.ListGroupMembers" }, ListGroupMembersRequest, ListGroupMembersResult, [AccessDeniedException, DirectoryUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns group information for the specified directory.
 * 
 * This operation supports pagination with the use of the `NextToken` request and
 * response parameters. If more results are available, the `ListGroups.NextToken`
 * member contains a token that you pass in the next call to `ListGroups`. This
 * retrieves the next set of items.
 * 
 * You can also specify a maximum number of return results with the `MaxResults`
 * parameter.
 */export const listGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/Groups/ListGroups", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.ListGroups" }, ListGroupsRequest, ListGroupsResult, [AccessDeniedException, DirectoryUnavailableException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns user information for the specified directory.
 * 
 * This operation supports pagination with the use of the `NextToken` request and
 * response parameters. If more results are available, the `ListUsers.NextToken`
 * member contains a token that you pass in the next call to `ListUsers`. This
 * retrieves the next set of items.
 * 
 * You can also specify a maximum number of return results with the `MaxResults`
 * parameter.
 */export const listUsers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/Users/ListUsers", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.ListUsers" }, ListUsersRequest, ListUsersResult, [AccessDeniedException, DirectoryUnavailableException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Searches the specified directory for a group. You can find groups that match the
 * `SearchString` parameter with the value of their attributes included in the
 * `SearchString` parameter.
 * 
 * This operation supports pagination with the use of the `NextToken` request and
 * response parameters. If more results are available, the `SearchGroups.NextToken`
 * member contains a token that you pass in the next call to `SearchGroups`. This
 * retrieves the next set of items.
 * 
 * You can also specify a maximum number of return results with the `MaxResults`
 * parameter.
 */export const searchGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/Groups/SearchGroups", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.SearchGroups" }, SearchGroupsRequest, SearchGroupsResult, [AccessDeniedException, DirectoryUnavailableException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Searches the specified directory for a user. You can find users that match the
 * `SearchString` parameter with the value of their attributes included in the
 * `SearchString` parameter.
 * 
 * This operation supports pagination with the use of the `NextToken` request and
 * response parameters. If more results are available, the `SearchUsers.NextToken`
 * member contains a token that you pass in the next call to `SearchUsers`. This
 * retrieves the next set of items.
 * 
 * You can also specify a maximum number of return results with the `MaxResults`
 * parameter.
 */export const searchUsers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/Users/SearchUsers", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.SearchUsers" }, SearchUsersRequest, SearchUsersResult, [AccessDeniedException, DirectoryUnavailableException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new group.
 */export const createGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-31", uri: "/Groups/CreateGroup", sdkId: "Directory Service Data", sigV4ServiceName: "ds-data", name: "DirectoryServiceData.CreateGroup" }, CreateGroupRequest, CreateGroupResult, [AccessDeniedException, ConflictException, DirectoryUnavailableException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

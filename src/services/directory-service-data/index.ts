import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class DirectoryServiceData extends AWSServiceClient {
  addGroupMember(
    input: AddGroupMemberRequest,
  ): Effect.Effect<
    AddGroupMemberResult,
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createGroup(
    input: CreateGroupRequest,
  ): Effect.Effect<
    CreateGroupResult,
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    CreateUserResult,
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteGroup(
    input: DeleteGroupRequest,
  ): Effect.Effect<
    DeleteGroupResult,
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    DeleteUserResult,
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeGroup(
    input: DescribeGroupRequest,
  ): Effect.Effect<
    DescribeGroupResult,
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeUser(
    input: DescribeUserRequest,
  ): Effect.Effect<
    DescribeUserResult,
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disableUser(
    input: DisableUserRequest,
  ): Effect.Effect<
    DisableUserResult,
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listGroupMembers(
    input: ListGroupMembersRequest,
  ): Effect.Effect<
    ListGroupMembersResult,
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listGroups(
    input: ListGroupsRequest,
  ): Effect.Effect<
    ListGroupsResult,
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listGroupsForMember(
    input: ListGroupsForMemberRequest,
  ): Effect.Effect<
    ListGroupsForMemberResult,
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    ListUsersResult,
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  removeGroupMember(
    input: RemoveGroupMemberRequest,
  ): Effect.Effect<
    RemoveGroupMemberResult,
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchGroups(
    input: SearchGroupsRequest,
  ): Effect.Effect<
    SearchGroupsResult,
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchUsers(
    input: SearchUsersRequest,
  ): Effect.Effect<
    SearchUsersResult,
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateGroup(
    input: UpdateGroupRequest,
  ): Effect.Effect<
    UpdateGroupResult,
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateUser(
    input: UpdateUserRequest,
  ): Effect.Effect<
    UpdateUserResult,
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
  readonly Reason?: AccessDeniedReason;
}> {}
export type AccessDeniedReason =
  | "IAM_AUTH"
  | "DIRECTORY_AUTH"
  | "DATA_DISABLED";
export interface AddGroupMemberRequest {
  DirectoryId: string;
  GroupName: string;
  MemberName: string;
  MemberRealm?: string;
  ClientToken?: string;
}
export interface AddGroupMemberResult {}
export type Attributes = Record<string, AttributeValue>;
interface _AttributeValue {
  S?: string;
  N?: number;
  BOOL?: boolean;
  SS?: Array<string>;
}

export type AttributeValue =
  | (_AttributeValue & { S: string })
  | (_AttributeValue & { N: number })
  | (_AttributeValue & { BOOL: boolean })
  | (_AttributeValue & { SS: Array<string> });
export type BooleanAttributeValue = boolean;

export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateGroupRequest {
  DirectoryId: string;
  SAMAccountName: string;
  GroupType?: GroupType;
  GroupScope?: GroupScope;
  OtherAttributes?: Record<string, AttributeValue>;
  ClientToken?: string;
}
export interface CreateGroupResult {
  DirectoryId?: string;
  SAMAccountName?: string;
  SID?: string;
}
export interface CreateUserRequest {
  DirectoryId: string;
  SAMAccountName: string;
  EmailAddress?: string;
  GivenName?: string;
  Surname?: string;
  OtherAttributes?: Record<string, AttributeValue>;
  ClientToken?: string;
}
export interface CreateUserResult {
  DirectoryId?: string;
  SID?: string;
  SAMAccountName?: string;
}
export interface DeleteGroupRequest {
  DirectoryId: string;
  SAMAccountName: string;
  ClientToken?: string;
}
export interface DeleteGroupResult {}
export interface DeleteUserRequest {
  DirectoryId: string;
  SAMAccountName: string;
  ClientToken?: string;
}
export interface DeleteUserResult {}
export interface DescribeGroupRequest {
  DirectoryId: string;
  Realm?: string;
  SAMAccountName: string;
  OtherAttributes?: Array<string>;
}
export interface DescribeGroupResult {
  DirectoryId?: string;
  Realm?: string;
  SID?: string;
  SAMAccountName?: string;
  DistinguishedName?: string;
  GroupType?: GroupType;
  GroupScope?: GroupScope;
  OtherAttributes?: Record<string, AttributeValue>;
}
export interface DescribeUserRequest {
  DirectoryId: string;
  SAMAccountName: string;
  OtherAttributes?: Array<string>;
  Realm?: string;
}
export interface DescribeUserResult {
  DirectoryId?: string;
  Realm?: string;
  SID?: string;
  SAMAccountName?: string;
  DistinguishedName?: string;
  UserPrincipalName?: string;
  EmailAddress?: string;
  GivenName?: string;
  Surname?: string;
  Enabled?: boolean;
  OtherAttributes?: Record<string, AttributeValue>;
}
export type DirectoryId = string;

export declare class DirectoryUnavailableException extends EffectData.TaggedError(
  "DirectoryUnavailableException",
)<{
  readonly Message?: string;
  readonly Reason?: DirectoryUnavailableReason;
}> {}
export type DirectoryUnavailableReason =
  | "INVALID_DIRECTORY_STATE"
  | "DIRECTORY_TIMEOUT"
  | "DIRECTORY_RESOURCES_EXCEEDED"
  | "NO_DISK_SPACE"
  | "TRUST_AUTH_FAILURE";
export interface DisableUserRequest {
  DirectoryId: string;
  SAMAccountName: string;
  ClientToken?: string;
}
export interface DisableUserResult {}
export type DistinguishedName = string;

export type EmailAddress = string;

export type ExceptionMessage = string;

export type GivenName = string;

export interface Group {
  SID?: string;
  SAMAccountName: string;
  DistinguishedName?: string;
  GroupType?: GroupType;
  GroupScope?: GroupScope;
  OtherAttributes?: Record<string, AttributeValue>;
}
export type GroupList = Array<Group>;
export type GroupName = string;

export type GroupScope =
  | "DOMAIN_LOCAL"
  | "GLOBAL"
  | "UNIVERSAL"
  | "BUILTIN_LOCAL";
export interface GroupSummary {
  SID: string;
  SAMAccountName: string;
  GroupType: GroupType;
  GroupScope: GroupScope;
}
export type GroupSummaryList = Array<GroupSummary>;
export type GroupType = "DISTRIBUTION" | "SECURITY";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type LdapDisplayName = string;

export type LdapDisplayNameList = Array<string>;
export interface ListGroupMembersRequest {
  DirectoryId: string;
  Realm?: string;
  MemberRealm?: string;
  SAMAccountName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListGroupMembersResult {
  DirectoryId?: string;
  Realm?: string;
  MemberRealm?: string;
  Members?: Array<Member>;
  NextToken?: string;
}
export interface ListGroupsForMemberRequest {
  DirectoryId: string;
  Realm?: string;
  MemberRealm?: string;
  SAMAccountName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListGroupsForMemberResult {
  DirectoryId?: string;
  Realm?: string;
  MemberRealm?: string;
  Groups?: Array<GroupSummary>;
  NextToken?: string;
}
export interface ListGroupsRequest {
  DirectoryId: string;
  Realm?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListGroupsResult {
  DirectoryId?: string;
  Realm?: string;
  Groups?: Array<GroupSummary>;
  NextToken?: string;
}
export interface ListUsersRequest {
  DirectoryId: string;
  Realm?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListUsersResult {
  DirectoryId?: string;
  Realm?: string;
  Users?: Array<UserSummary>;
  NextToken?: string;
}
export type MaxResults = number;

export interface Member {
  SID: string;
  SAMAccountName: string;
  MemberType: MemberType;
}
export type MemberList = Array<Member>;
export type MemberName = string;

export type MemberType = "USER" | "GROUP" | "COMPUTER";
export type NextToken = string;

export type NumberAttributeValue = number;

export type Realm = string;

export interface RemoveGroupMemberRequest {
  DirectoryId: string;
  GroupName: string;
  MemberName: string;
  MemberRealm?: string;
  ClientToken?: string;
}
export interface RemoveGroupMemberResult {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface SearchGroupsRequest {
  DirectoryId: string;
  SearchString: string;
  SearchAttributes: Array<string>;
  Realm?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface SearchGroupsResult {
  DirectoryId?: string;
  Realm?: string;
  Groups?: Array<Group>;
  NextToken?: string;
}
export type SearchString = string;

export interface SearchUsersRequest {
  DirectoryId: string;
  Realm?: string;
  SearchString: string;
  SearchAttributes: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface SearchUsersResult {
  DirectoryId?: string;
  Realm?: string;
  Users?: Array<User>;
  NextToken?: string;
}
export type SID = string;

export type StringAttributeValue = string;

export type StringSetAttributeValue = Array<string>;
export type Surname = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly RetryAfterSeconds?: number;
}> {}
export interface UpdateGroupRequest {
  DirectoryId: string;
  SAMAccountName: string;
  GroupType?: GroupType;
  GroupScope?: GroupScope;
  OtherAttributes?: Record<string, AttributeValue>;
  UpdateType?: UpdateType;
  ClientToken?: string;
}
export interface UpdateGroupResult {}
export type UpdateType = "ADD" | "REPLACE" | "REMOVE";
export interface UpdateUserRequest {
  DirectoryId: string;
  SAMAccountName: string;
  EmailAddress?: string;
  GivenName?: string;
  Surname?: string;
  OtherAttributes?: Record<string, AttributeValue>;
  UpdateType?: UpdateType;
  ClientToken?: string;
}
export interface UpdateUserResult {}
export interface User {
  SID?: string;
  SAMAccountName: string;
  DistinguishedName?: string;
  UserPrincipalName?: string;
  EmailAddress?: string;
  GivenName?: string;
  Surname?: string;
  Enabled?: boolean;
  OtherAttributes?: Record<string, AttributeValue>;
}
export type UserList = Array<User>;
export type UserName = string;

export type UserPrincipalName = string;

export interface UserSummary {
  SID: string;
  SAMAccountName: string;
  GivenName?: string;
  Surname?: string;
  Enabled: boolean;
}
export type UserSummaryList = Array<UserSummary>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
  readonly Reason?: ValidationExceptionReason;
}> {}
export type ValidationExceptionReason =
  | "INVALID_REALM"
  | "INVALID_DIRECTORY_TYPE"
  | "INVALID_SECONDARY_REGION"
  | "INVALID_NEXT_TOKEN"
  | "INVALID_ATTRIBUTE_VALUE"
  | "INVALID_ATTRIBUTE_NAME"
  | "INVALID_ATTRIBUTE_FOR_USER"
  | "INVALID_ATTRIBUTE_FOR_GROUP"
  | "INVALID_ATTRIBUTE_FOR_SEARCH"
  | "INVALID_ATTRIBUTE_FOR_MODIFY"
  | "DUPLICATE_ATTRIBUTE"
  | "MISSING_ATTRIBUTE"
  | "ATTRIBUTE_EXISTS"
  | "LDAP_SIZE_LIMIT_EXCEEDED"
  | "LDAP_UNSUPPORTED_OPERATION";
export declare namespace AddGroupMember {
  export type Input = AddGroupMemberRequest;
  export type Output = AddGroupMemberResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGroup {
  export type Input = CreateGroupRequest;
  export type Output = CreateGroupResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserRequest;
  export type Output = CreateUserResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGroup {
  export type Input = DeleteGroupRequest;
  export type Output = DeleteGroupResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserRequest;
  export type Output = DeleteUserResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeGroup {
  export type Input = DescribeGroupRequest;
  export type Output = DescribeGroupResult;
  export type Error =
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeUser {
  export type Input = DescribeUserRequest;
  export type Output = DescribeUserResult;
  export type Error =
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisableUser {
  export type Input = DisableUserRequest;
  export type Output = DisableUserResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGroupMembers {
  export type Input = ListGroupMembersRequest;
  export type Output = ListGroupMembersResult;
  export type Error =
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGroups {
  export type Input = ListGroupsRequest;
  export type Output = ListGroupsResult;
  export type Error =
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGroupsForMember {
  export type Input = ListGroupsForMemberRequest;
  export type Output = ListGroupsForMemberResult;
  export type Error =
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListUsers {
  export type Input = ListUsersRequest;
  export type Output = ListUsersResult;
  export type Error =
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemoveGroupMember {
  export type Input = RemoveGroupMemberRequest;
  export type Output = RemoveGroupMemberResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchGroups {
  export type Input = SearchGroupsRequest;
  export type Output = SearchGroupsResult;
  export type Error =
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchUsers {
  export type Input = SearchUsersRequest;
  export type Output = SearchUsersResult;
  export type Error =
    | AccessDeniedException
    | DirectoryUnavailableException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateGroup {
  export type Input = UpdateGroupRequest;
  export type Output = UpdateGroupResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateUser {
  export type Input = UpdateUserRequest;
  export type Output = UpdateUserResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DirectoryUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetRoleCredentialsRequest extends S.Class<GetRoleCredentialsRequest>("GetRoleCredentialsRequest")({roleName: S.String, accountId: S.String, accessToken: H.Header("x-amz-sso_bearer_token")}) {}
export class ListAccountRolesRequest extends S.Class<ListAccountRolesRequest>("ListAccountRolesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), accessToken: H.Header("x-amz-sso_bearer_token"), accountId: S.String}) {}
export class ListAccountsRequest extends S.Class<ListAccountsRequest>("ListAccountsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), accessToken: H.Header("x-amz-sso_bearer_token")}) {}
export class LogoutRequest extends S.Class<LogoutRequest>("LogoutRequest")({accessToken: H.Header("x-amz-sso_bearer_token")}) {}
export class RoleCredentials extends S.Class<RoleCredentials>("RoleCredentials")({accessKeyId: S.optional(S.String), secretAccessKey: S.optional(S.String), sessionToken: S.optional(S.String), expiration: S.optional(S.Number)}) {}
export class RoleInfo extends S.Class<RoleInfo>("RoleInfo")({roleName: S.optional(S.String), accountId: S.optional(S.String)}) {}
export const RoleListType = S.Array(RoleInfo);
export class AccountInfo extends S.Class<AccountInfo>("AccountInfo")({accountId: S.optional(S.String), accountName: S.optional(S.String), emailAddress: S.optional(S.String)}) {}
export const AccountListType = S.Array(AccountInfo);
export class GetRoleCredentialsResponse extends S.Class<GetRoleCredentialsResponse>("GetRoleCredentialsResponse")({roleCredentials: S.optional(RoleCredentials)}) {}
export class ListAccountRolesResponse extends S.Class<ListAccountRolesResponse>("ListAccountRolesResponse")({nextToken: S.optional(S.String), roleList: S.optional(RoleListType)}) {}
export class ListAccountsResponse extends S.Class<ListAccountsResponse>("ListAccountsResponse")({nextToken: S.optional(S.String), accountList: S.optional(AccountListType)}) {}

//# Errors
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {message: S.optional(S.String)}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};

//# Operations
/**
 * Lists all AWS accounts assigned to the user. These AWS accounts are assigned by the
 * administrator of the account. For more information, see Assign User Access in the *IAM Identity Center User Guide*. This operation
 * returns a paginated response.
 */export const listAccounts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/assignment/accounts", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.ListAccounts" }, ListAccountsRequest, ListAccountsResponse, [InvalidRequestException, ResourceNotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the locally stored SSO tokens from the client-side cache and sends an API call to
 * the IAM Identity Center service to invalidate the corresponding server-side IAM Identity Center sign in
 * session.
 * 
 * If a user uses IAM Identity Center to access the AWS CLI, the user’s IAM Identity Center sign in session is
 * used to obtain an IAM session, as specified in the corresponding IAM Identity Center permission set.
 * More specifically, IAM Identity Center assumes an IAM role in the target account on behalf of the user,
 * and the corresponding temporary AWS credentials are returned to the client.
 * 
 * After user logout, any existing IAM role sessions that were created by using IAM Identity Center
 * permission sets continue based on the duration configured in the permission set.
 * For more information, see User
 * authentications in the IAM Identity Center User
 * Guide.
 */export const logout = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/logout", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.Logout" }, LogoutRequest, S.Struct({}), [InvalidRequestException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the STS short-term credentials for a given role name that is assigned to the
 * user.
 */export const getRoleCredentials = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/federation/credentials", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.GetRoleCredentials" }, GetRoleCredentialsRequest, GetRoleCredentialsResponse, [InvalidRequestException, ResourceNotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all roles that are assigned to the user for a given AWS account.
 */export const listAccountRoles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/assignment/roles", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.ListAccountRoles" }, ListAccountRolesRequest, ListAccountRolesResponse, [InvalidRequestException, ResourceNotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

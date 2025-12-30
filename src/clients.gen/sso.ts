import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetRoleCredentialsRequest extends S.Class<GetRoleCredentialsRequest>("GetRoleCredentialsRequest")({roleName: S.String, accountId: S.String, accessToken: H.Header("x-amz-sso_bearer_token")}) {}
export class ListAccountRolesRequest extends S.Class<ListAccountRolesRequest>("ListAccountRolesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), accessToken: H.Header("x-amz-sso_bearer_token"), accountId: S.String}) {}
export class ListAccountsRequest extends S.Class<ListAccountsRequest>("ListAccountsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), accessToken: H.Header("x-amz-sso_bearer_token")}) {}
export class LogoutRequest extends S.Class<LogoutRequest>("LogoutRequest")({accessToken: H.Header("x-amz-sso_bearer_token")}) {}
export class InvalidRequestException extends S.Class<InvalidRequestException>("InvalidRequestException")({message: S.optional(S.String)}) {}
export class RoleCredentials extends S.Class<RoleCredentials>("RoleCredentials")({accessKeyId: S.optional(S.String), secretAccessKey: S.optional(S.String), sessionToken: S.optional(S.String), expiration: S.optional(S.Number)}) {}
export class RoleInfo extends S.Class<RoleInfo>("RoleInfo")({roleName: S.optional(S.String), accountId: S.optional(S.String)}) {}
export const RoleListType = S.Array(RoleInfo);
export class AccountInfo extends S.Class<AccountInfo>("AccountInfo")({accountId: S.optional(S.String), accountName: S.optional(S.String), emailAddress: S.optional(S.String)}) {}
export const AccountListType = S.Array(AccountInfo);
export class GetRoleCredentialsResponse extends S.Class<GetRoleCredentialsResponse>("GetRoleCredentialsResponse")({roleCredentials: S.optional(RoleCredentials)}) {}
export class ListAccountRolesResponse extends S.Class<ListAccountRolesResponse>("ListAccountRolesResponse")({nextToken: S.optional(S.String), roleList: S.optional(RoleListType)}) {}
export class ListAccountsResponse extends S.Class<ListAccountsResponse>("ListAccountsResponse")({nextToken: S.optional(S.String), accountList: S.optional(AccountListType)}) {}
export class TooManyRequestsException extends S.Class<TooManyRequestsException>("TooManyRequestsException")({message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String)}) {}
export class UnauthorizedException extends S.Class<UnauthorizedException>("UnauthorizedException")({message: S.optional(S.String)}) {}

//# Errors
export class InvalidRequestExceptionError extends S.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class TooManyRequestsExceptionError extends S.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException.fields) {};
export class UnauthorizedExceptionError extends S.TaggedError<UnauthorizedExceptionError>()("UnauthorizedException", UnauthorizedException.fields) {};

//# Operations
export const listAccounts = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/assignment/accounts", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.ListAccounts" }, ListAccountsRequest, ListAccountsResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, TooManyRequestsExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const logout = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/logout", method: "POST", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.Logout" }, LogoutRequest, S.Struct({}), [InvalidRequestExceptionError, TooManyRequestsExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getRoleCredentials = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/federation/credentials", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.GetRoleCredentials" }, GetRoleCredentialsRequest, GetRoleCredentialsResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, TooManyRequestsExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAccountRoles = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/assignment/roles", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.ListAccountRoles" }, ListAccountRolesRequest, ListAccountRolesResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, TooManyRequestsExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

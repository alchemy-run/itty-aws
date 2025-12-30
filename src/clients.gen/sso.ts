import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class GetRoleCredentialsRequest extends Schema.Class<GetRoleCredentialsRequest>("GetRoleCredentialsRequest")({roleName: Schema.String, accountId: Schema.String, accessToken: Header("x-amz-sso_bearer_token")}) {}
export class ListAccountRolesRequest extends Schema.Class<ListAccountRolesRequest>("ListAccountRolesRequest")({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), accessToken: Header("x-amz-sso_bearer_token"), accountId: Schema.String}) {}
export class ListAccountsRequest extends Schema.Class<ListAccountsRequest>("ListAccountsRequest")({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), accessToken: Header("x-amz-sso_bearer_token")}) {}
export class LogoutRequest extends Schema.Class<LogoutRequest>("LogoutRequest")({accessToken: Header("x-amz-sso_bearer_token")}) {}
export class InvalidRequestException extends Schema.Class<InvalidRequestException>("InvalidRequestException")({message: Schema.optional(Schema.String)}) {}
export class RoleCredentials extends Schema.Class<RoleCredentials>("RoleCredentials")({accessKeyId: Schema.optional(Schema.String), secretAccessKey: Schema.optional(Schema.String), sessionToken: Schema.optional(Schema.String), expiration: Schema.optional(Schema.Number)}) {}
export class RoleInfo extends Schema.Class<RoleInfo>("RoleInfo")({roleName: Schema.optional(Schema.String), accountId: Schema.optional(Schema.String)}) {}
export const RoleListType = Schema.Array(RoleInfo);
export class AccountInfo extends Schema.Class<AccountInfo>("AccountInfo")({accountId: Schema.optional(Schema.String), accountName: Schema.optional(Schema.String), emailAddress: Schema.optional(Schema.String)}) {}
export const AccountListType = Schema.Array(AccountInfo);
export class GetRoleCredentialsResponse extends Schema.Class<GetRoleCredentialsResponse>("GetRoleCredentialsResponse")({roleCredentials: Schema.optional(RoleCredentials)}) {}
export class ListAccountRolesResponse extends Schema.Class<ListAccountRolesResponse>("ListAccountRolesResponse")({nextToken: Schema.optional(Schema.String), roleList: Schema.optional(RoleListType)}) {}
export class ListAccountsResponse extends Schema.Class<ListAccountsResponse>("ListAccountsResponse")({nextToken: Schema.optional(Schema.String), accountList: Schema.optional(AccountListType)}) {}
export class TooManyRequestsException extends Schema.Class<TooManyRequestsException>("TooManyRequestsException")({message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class UnauthorizedException extends Schema.Class<UnauthorizedException>("UnauthorizedException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class TooManyRequestsExceptionError extends Schema.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException.fields) {};
export class UnauthorizedExceptionError extends Schema.TaggedError<UnauthorizedExceptionError>()("UnauthorizedException", UnauthorizedException.fields) {};

//# Operations
export const listAccounts = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-10", uri: "/assignment/accounts", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.ListAccounts" }, ListAccountsRequest, ListAccountsResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, TooManyRequestsExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const logout = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-10", uri: "/logout", method: "POST", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.Logout" }, LogoutRequest, Schema.Struct({}), [InvalidRequestExceptionError, TooManyRequestsExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getRoleCredentials = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-10", uri: "/federation/credentials", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.GetRoleCredentials" }, GetRoleCredentialsRequest, GetRoleCredentialsResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, TooManyRequestsExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAccountRoles = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-10", uri: "/assignment/roles", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.ListAccountRoles" }, ListAccountRolesRequest, ListAccountRolesResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, TooManyRequestsExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

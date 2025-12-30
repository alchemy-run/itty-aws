import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const GetRoleCredentialsRequest = Schema.Struct({roleName: Schema.String, accountId: Schema.String, accessToken: Header("x-amz-sso_bearer_token")});
export const ListAccountRolesRequest = Schema.Struct({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), accessToken: Header("x-amz-sso_bearer_token"), accountId: Schema.String});
export const ListAccountsRequest = Schema.Struct({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), accessToken: Header("x-amz-sso_bearer_token")});
export const LogoutRequest = Schema.Struct({accessToken: Header("x-amz-sso_bearer_token")});
export const InvalidRequestException = Schema.Struct({message: Schema.optional(Schema.String)});
export const RoleCredentials = Schema.Struct({accessKeyId: Schema.optional(Schema.String), secretAccessKey: Schema.optional(Schema.String), sessionToken: Schema.optional(Schema.String), expiration: Schema.optional(Schema.Number)});
export const RoleInfo = Schema.Struct({roleName: Schema.optional(Schema.String), accountId: Schema.optional(Schema.String)});
export const RoleListType = Schema.Array(RoleInfo);
export const AccountInfo = Schema.Struct({accountId: Schema.optional(Schema.String), accountName: Schema.optional(Schema.String), emailAddress: Schema.optional(Schema.String)});
export const AccountListType = Schema.Array(AccountInfo);
export const GetRoleCredentialsResponse = Schema.Struct({roleCredentials: Schema.optional(RoleCredentials)});
export const ListAccountRolesResponse = Schema.Struct({nextToken: Schema.optional(Schema.String), roleList: Schema.optional(RoleListType)});
export const ListAccountsResponse = Schema.Struct({nextToken: Schema.optional(Schema.String), accountList: Schema.optional(AccountListType)});
export const TooManyRequestsException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const UnauthorizedException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class TooManyRequestsExceptionError extends Schema.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException) {};
export class UnauthorizedExceptionError extends Schema.TaggedError<UnauthorizedExceptionError>()("UnauthorizedException", UnauthorizedException) {};

//# Operations
export const listAccounts = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-10", uri: "/assignment/accounts", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.ListAccounts" }, ListAccountsRequest, ListAccountsResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, TooManyRequestsExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const logout = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-10", uri: "/logout", method: "POST", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.Logout" }, LogoutRequest, Schema.Struct({}), [InvalidRequestExceptionError, TooManyRequestsExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getRoleCredentials = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-10", uri: "/federation/credentials", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.GetRoleCredentials" }, GetRoleCredentialsRequest, GetRoleCredentialsResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, TooManyRequestsExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAccountRoles = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-10", uri: "/assignment/roles", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "SWBPortalService.ListAccountRoles" }, ListAccountRolesRequest, ListAccountRolesResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, TooManyRequestsExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

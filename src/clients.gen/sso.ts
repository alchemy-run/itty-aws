import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const GetRoleCredentialsRequest = Schema.Struct({roleName: Schema.String, accountId: Schema.String, accessToken: Header("x-amz-sso_bearer_token")})
const ListAccountRolesRequest = Schema.Struct({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), accessToken: Header("x-amz-sso_bearer_token"), accountId: Schema.String})
const ListAccountsRequest = Schema.Struct({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), accessToken: Header("x-amz-sso_bearer_token")})
const LogoutRequest = Schema.Struct({accessToken: Header("x-amz-sso_bearer_token")})
const InvalidRequestException = Schema.Struct({message: Schema.optional(Schema.String)})
const RoleCredentials = Schema.Struct({accessKeyId: Schema.optional(Schema.String), secretAccessKey: Schema.optional(Schema.String), sessionToken: Schema.optional(Schema.String), expiration: Schema.optional(Schema.Number)})
const RoleInfo = Schema.Struct({roleName: Schema.optional(Schema.String), accountId: Schema.optional(Schema.String)})
const RoleListType = Schema.Array(RoleInfo)
const AccountInfo = Schema.Struct({accountId: Schema.optional(Schema.String), accountName: Schema.optional(Schema.String), emailAddress: Schema.optional(Schema.String)})
const AccountListType = Schema.Array(AccountInfo)
const GetRoleCredentialsResponse = Schema.Struct({roleCredentials: Schema.optional(RoleCredentials)})
const ListAccountRolesResponse = Schema.Struct({nextToken: Schema.optional(Schema.String), roleList: Schema.optional(RoleListType)})
const ListAccountsResponse = Schema.Struct({nextToken: Schema.optional(Schema.String), accountList: Schema.optional(AccountListType)})
export const ListAccounts = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/assignment/accounts", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "ListAccounts" }, ListAccountsRequest, ListAccountsResponse, Schema.Union(ErrorAnnotation("InvalidRequestException", InvalidRequestException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException), ErrorAnnotation("UnauthorizedException", UnauthorizedException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TooManyRequestsException = Schema.Struct({message: Schema.optional(Schema.String)})
export const Logout = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/logout", method: "POST", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "Logout" }, LogoutRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("InvalidRequestException", InvalidRequestException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException), ErrorAnnotation("UnauthorizedException", UnauthorizedException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const GetRoleCredentials = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/federation/credentials", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "GetRoleCredentials" }, GetRoleCredentialsRequest, GetRoleCredentialsResponse, Schema.Union(ErrorAnnotation("InvalidRequestException", InvalidRequestException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException), ErrorAnnotation("UnauthorizedException", UnauthorizedException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const UnauthorizedException = Schema.Struct({message: Schema.optional(Schema.String)})
export const ListAccountRoles = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/assignment/roles", method: "GET", sdkId: "SSO", sigV4ServiceName: "awsssoportal", name: "ListAccountRoles" }, ListAccountRolesRequest, ListAccountRolesResponse, Schema.Union(ErrorAnnotation("InvalidRequestException", InvalidRequestException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException), ErrorAnnotation("UnauthorizedException", UnauthorizedException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

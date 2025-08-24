import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class SSO extends AWSServiceClient {
  getRoleCredentials(
    input: GetRoleCredentialsRequest,
  ): Effect.Effect<
    GetRoleCredentialsResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  listAccountRoles(
    input: ListAccountRolesRequest,
  ): Effect.Effect<
    ListAccountRolesResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  listAccounts(
    input: ListAccountsRequest,
  ): Effect.Effect<
    ListAccountsResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  logout(
    input: LogoutRequest,
  ): Effect.Effect<
    {},
    | InvalidRequestException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
}

export declare class Sso extends SSO {}

export type AccessKeyType = string;

export type AccessTokenType = string;

export type AccountIdType = string;

export interface AccountInfo {
  accountId?: string;
  accountName?: string;
  emailAddress?: string;
}
export type AccountListType = Array<AccountInfo>;
export type AccountNameType = string;

export type EmailAddressType = string;

export type ErrorDescription = string;

export type ExpirationTimestampType = number;

export interface GetRoleCredentialsRequest {
  roleName: string;
  accountId: string;
  accessToken: string;
}
export interface GetRoleCredentialsResponse {
  roleCredentials?: RoleCredentials;
}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export interface ListAccountRolesRequest {
  nextToken?: string;
  maxResults?: number;
  accessToken: string;
  accountId: string;
}
export interface ListAccountRolesResponse {
  nextToken?: string;
  roleList?: Array<RoleInfo>;
}
export interface ListAccountsRequest {
  nextToken?: string;
  maxResults?: number;
  accessToken: string;
}
export interface ListAccountsResponse {
  nextToken?: string;
  accountList?: Array<AccountInfo>;
}
export interface LogoutRequest {
  accessToken: string;
}
export type MaxResultType = number;

export type NextTokenType = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface RoleCredentials {
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
  expiration?: number;
}
export interface RoleInfo {
  roleName?: string;
  accountId?: string;
}
export type RoleListType = Array<RoleInfo>;
export type RoleNameType = string;

export type SecretAccessKeyType = string;

export type SessionTokenType = string;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message?: string;
}> {}
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export declare namespace GetRoleCredentials {
  export type Input = GetRoleCredentialsRequest;
  export type Output = GetRoleCredentialsResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListAccountRoles {
  export type Input = ListAccountRolesRequest;
  export type Output = ListAccountRolesResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListAccounts {
  export type Input = ListAccountsRequest;
  export type Output = ListAccountsResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace Logout {
  export type Input = LogoutRequest;
  export type Output = {};
  export type Error =
    | InvalidRequestException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "SSO",
  version: "2019-06-10",
  protocol: "restJson1",
  endpointPrefix: "portal.sso",
  operations: {
    GetRoleCredentials: "GET /federation/credentials",
    ListAccountRoles: "GET /assignment/roles",
    ListAccounts: "GET /assignment/accounts",
    Logout: "POST /logout",
  },
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;

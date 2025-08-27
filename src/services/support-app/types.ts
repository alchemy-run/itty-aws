import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class SupportApp extends AWSServiceClient {
  createSlackChannelConfiguration(
    input: CreateSlackChannelConfigurationRequest,
  ): Effect.Effect<
    CreateSlackChannelConfigurationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteAccountAlias(
    input: DeleteAccountAliasRequest,
  ): Effect.Effect<
    DeleteAccountAliasResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteSlackChannelConfiguration(
    input: DeleteSlackChannelConfigurationRequest,
  ): Effect.Effect<
    DeleteSlackChannelConfigurationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteSlackWorkspaceConfiguration(
    input: DeleteSlackWorkspaceConfigurationRequest,
  ): Effect.Effect<
    DeleteSlackWorkspaceConfigurationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getAccountAlias(
    input: GetAccountAliasRequest,
  ): Effect.Effect<
    GetAccountAliasResult,
    InternalServerException | CommonAwsError
  >;
  listSlackChannelConfigurations(
    input: ListSlackChannelConfigurationsRequest,
  ): Effect.Effect<
    ListSlackChannelConfigurationsResult,
    AccessDeniedException | InternalServerException | CommonAwsError
  >;
  listSlackWorkspaceConfigurations(
    input: ListSlackWorkspaceConfigurationsRequest,
  ): Effect.Effect<
    ListSlackWorkspaceConfigurationsResult,
    AccessDeniedException | InternalServerException | CommonAwsError
  >;
  putAccountAlias(
    input: PutAccountAliasRequest,
  ): Effect.Effect<
    PutAccountAliasResult,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  registerSlackWorkspaceForOrganization(
    input: RegisterSlackWorkspaceForOrganizationRequest,
  ): Effect.Effect<
    RegisterSlackWorkspaceForOrganizationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateSlackChannelConfiguration(
    input: UpdateSlackChannelConfigurationRequest,
  ): Effect.Effect<
    UpdateSlackChannelConfigurationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AccountType = string;

export type awsAccountAlias = string;

export type booleanValue = boolean;

export type channelId = string;

export type channelName = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateSlackChannelConfigurationRequest {
  teamId: string;
  channelId: string;
  channelName?: string;
  notifyOnCreateOrReopenCase?: boolean;
  notifyOnAddCorrespondenceToCase?: boolean;
  notifyOnResolveCase?: boolean;
  notifyOnCaseSeverity: string;
  channelRoleArn: string;
}
export interface CreateSlackChannelConfigurationResult {}
export interface DeleteAccountAliasRequest {}
export interface DeleteAccountAliasResult {}
export interface DeleteSlackChannelConfigurationRequest {
  teamId: string;
  channelId: string;
}
export interface DeleteSlackChannelConfigurationResult {}
export interface DeleteSlackWorkspaceConfigurationRequest {
  teamId: string;
}
export interface DeleteSlackWorkspaceConfigurationResult {}
export type errorMessage = string;

export interface GetAccountAliasRequest {}
export interface GetAccountAliasResult {
  accountAlias?: string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface ListSlackChannelConfigurationsRequest {
  nextToken?: string;
}
export interface ListSlackChannelConfigurationsResult {
  nextToken?: string;
  slackChannelConfigurations: Array<SlackChannelConfiguration>;
}
export interface ListSlackWorkspaceConfigurationsRequest {
  nextToken?: string;
}
export interface ListSlackWorkspaceConfigurationsResult {
  nextToken?: string;
  slackWorkspaceConfigurations?: Array<SlackWorkspaceConfiguration>;
}
export type NotificationSeverityLevel = string;

export type paginationToken = string;

export interface PutAccountAliasRequest {
  accountAlias: string;
}
export interface PutAccountAliasResult {}
export interface RegisterSlackWorkspaceForOrganizationRequest {
  teamId: string;
}
export interface RegisterSlackWorkspaceForOrganizationResult {
  teamId?: string;
  teamName?: string;
  accountType?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type roleArn = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface SlackChannelConfiguration {
  teamId: string;
  channelId: string;
  channelName?: string;
  notifyOnCreateOrReopenCase?: boolean;
  notifyOnAddCorrespondenceToCase?: boolean;
  notifyOnResolveCase?: boolean;
  notifyOnCaseSeverity?: string;
  channelRoleArn?: string;
}
export type slackChannelConfigurationList = Array<SlackChannelConfiguration>;
export interface SlackWorkspaceConfiguration {
  teamId: string;
  teamName?: string;
  allowOrganizationMemberAccount?: boolean;
}
export type SlackWorkspaceConfigurationList =
  Array<SlackWorkspaceConfiguration>;
export type teamId = string;

export type teamName = string;

export interface UpdateSlackChannelConfigurationRequest {
  teamId: string;
  channelId: string;
  channelName?: string;
  notifyOnCreateOrReopenCase?: boolean;
  notifyOnAddCorrespondenceToCase?: boolean;
  notifyOnResolveCase?: boolean;
  notifyOnCaseSeverity?: string;
  channelRoleArn?: string;
}
export interface UpdateSlackChannelConfigurationResult {
  teamId?: string;
  channelId?: string;
  channelName?: string;
  notifyOnCreateOrReopenCase?: boolean;
  notifyOnAddCorrespondenceToCase?: boolean;
  notifyOnResolveCase?: boolean;
  notifyOnCaseSeverity?: string;
  channelRoleArn?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace CreateSlackChannelConfiguration {
  export type Input = CreateSlackChannelConfigurationRequest;
  export type Output = CreateSlackChannelConfigurationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAccountAlias {
  export type Input = DeleteAccountAliasRequest;
  export type Output = DeleteAccountAliasResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteSlackChannelConfiguration {
  export type Input = DeleteSlackChannelConfigurationRequest;
  export type Output = DeleteSlackChannelConfigurationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSlackWorkspaceConfiguration {
  export type Input = DeleteSlackWorkspaceConfigurationRequest;
  export type Output = DeleteSlackWorkspaceConfigurationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAccountAlias {
  export type Input = GetAccountAliasRequest;
  export type Output = GetAccountAliasResult;
  export type Error = InternalServerException | CommonAwsError;
}

export declare namespace ListSlackChannelConfigurations {
  export type Input = ListSlackChannelConfigurationsRequest;
  export type Output = ListSlackChannelConfigurationsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListSlackWorkspaceConfigurations {
  export type Input = ListSlackWorkspaceConfigurationsRequest;
  export type Output = ListSlackWorkspaceConfigurationsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace PutAccountAlias {
  export type Input = PutAccountAliasRequest;
  export type Output = PutAccountAliasResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterSlackWorkspaceForOrganization {
  export type Input = RegisterSlackWorkspaceForOrganizationRequest;
  export type Output = RegisterSlackWorkspaceForOrganizationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSlackChannelConfiguration {
  export type Input = UpdateSlackChannelConfigurationRequest;
  export type Output = UpdateSlackChannelConfigurationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

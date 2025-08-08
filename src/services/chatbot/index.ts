import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export class chatbot extends AWSServiceClient {
  associateToConfiguration(
    input: AssociateToConfigurationRequest,
  ): Effect.Effect<
    AssociateToConfigurationResult,
    | InternalServiceError
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError
  > {
    return this.call("AssociateToConfiguration", input);
  }
  createChimeWebhookConfiguration(
    input: CreateChimeWebhookConfigurationRequest,
  ): Effect.Effect<
    CreateChimeWebhookConfigurationResult,
    | ConflictException
    | CreateChimeWebhookConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | CommonAwsError
  > {
    return this.call("CreateChimeWebhookConfiguration", input);
  }
  createMicrosoftTeamsChannelConfiguration(
    input: CreateTeamsChannelConfigurationRequest,
  ): Effect.Effect<
    CreateTeamsChannelConfigurationResult,
    | ConflictException
    | CreateTeamsChannelConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | CommonAwsError
  > {
    return this.call("CreateMicrosoftTeamsChannelConfiguration", input);
  }
  createSlackChannelConfiguration(
    input: CreateSlackChannelConfigurationRequest,
  ): Effect.Effect<
    CreateSlackChannelConfigurationResult,
    | ConflictException
    | CreateSlackChannelConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | CommonAwsError
  > {
    return this.call("CreateSlackChannelConfiguration", input);
  }
  deleteChimeWebhookConfiguration(
    input: DeleteChimeWebhookConfigurationRequest,
  ): Effect.Effect<
    DeleteChimeWebhookConfigurationResult,
    | DeleteChimeWebhookConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  > {
    return this.call("DeleteChimeWebhookConfiguration", input);
  }
  deleteMicrosoftTeamsChannelConfiguration(
    input: DeleteTeamsChannelConfigurationRequest,
  ): Effect.Effect<
    DeleteTeamsChannelConfigurationResult,
    | DeleteTeamsChannelConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  > {
    return this.call("DeleteMicrosoftTeamsChannelConfiguration", input);
  }
  deleteMicrosoftTeamsConfiguredTeam(
    input: DeleteTeamsConfiguredTeamRequest,
  ): Effect.Effect<
    DeleteTeamsConfiguredTeamResult,
    | DeleteTeamsConfiguredTeamException
    | InvalidParameterException
    | CommonAwsError
  > {
    return this.call("DeleteMicrosoftTeamsConfiguredTeam", input);
  }
  deleteMicrosoftTeamsUserIdentity(
    input: DeleteMicrosoftTeamsUserIdentityRequest,
  ): Effect.Effect<
    DeleteMicrosoftTeamsUserIdentityResult,
    | DeleteMicrosoftTeamsUserIdentityException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError
  > {
    return this.call("DeleteMicrosoftTeamsUserIdentity", input);
  }
  deleteSlackChannelConfiguration(
    input: DeleteSlackChannelConfigurationRequest,
  ): Effect.Effect<
    DeleteSlackChannelConfigurationResult,
    | DeleteSlackChannelConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  > {
    return this.call("DeleteSlackChannelConfiguration", input);
  }
  deleteSlackUserIdentity(
    input: DeleteSlackUserIdentityRequest,
  ): Effect.Effect<
    DeleteSlackUserIdentityResult,
    | DeleteSlackUserIdentityException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError
  > {
    return this.call("DeleteSlackUserIdentity", input);
  }
  deleteSlackWorkspaceAuthorization(
    input: DeleteSlackWorkspaceAuthorizationRequest,
  ): Effect.Effect<
    DeleteSlackWorkspaceAuthorizationResult,
    | DeleteSlackWorkspaceAuthorizationFault
    | InvalidParameterException
    | CommonAwsError
  > {
    return this.call("DeleteSlackWorkspaceAuthorization", input);
  }
  describeChimeWebhookConfigurations(
    input: DescribeChimeWebhookConfigurationsRequest,
  ): Effect.Effect<
    DescribeChimeWebhookConfigurationsResult,
    | DescribeChimeWebhookConfigurationsException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError
  > {
    return this.call("DescribeChimeWebhookConfigurations", input);
  }
  describeSlackChannelConfigurations(
    input: DescribeSlackChannelConfigurationsRequest,
  ): Effect.Effect<
    DescribeSlackChannelConfigurationsResult,
    | DescribeSlackChannelConfigurationsException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError
  > {
    return this.call("DescribeSlackChannelConfigurations", input);
  }
  describeSlackUserIdentities(
    input: DescribeSlackUserIdentitiesRequest,
  ): Effect.Effect<
    DescribeSlackUserIdentitiesResult,
    | DescribeSlackUserIdentitiesException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError
  > {
    return this.call("DescribeSlackUserIdentities", input);
  }
  describeSlackWorkspaces(
    input: DescribeSlackWorkspacesRequest,
  ): Effect.Effect<
    DescribeSlackWorkspacesResult,
    | DescribeSlackWorkspacesException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError
  > {
    return this.call("DescribeSlackWorkspaces", input);
  }
  disassociateFromConfiguration(
    input: DisassociateFromConfigurationRequest,
  ): Effect.Effect<
    DisassociateFromConfigurationResult,
    | InternalServiceError
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError
  > {
    return this.call("DisassociateFromConfiguration", input);
  }
  getAccountPreferences(
    input: GetAccountPreferencesRequest,
  ): Effect.Effect<
    GetAccountPreferencesResult,
    GetAccountPreferencesException | InvalidRequestException | CommonAwsError
  > {
    return this.call("GetAccountPreferences", input);
  }
  getMicrosoftTeamsChannelConfiguration(
    input: GetTeamsChannelConfigurationRequest,
  ): Effect.Effect<
    GetTeamsChannelConfigurationResult,
    | GetTeamsChannelConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError
  > {
    return this.call("GetMicrosoftTeamsChannelConfiguration", input);
  }
  listAssociations(
    input: ListAssociationsRequest,
  ): Effect.Effect<ListAssociationsResult, CommonAwsError> {
    return this.call("ListAssociations", input);
  }
  listMicrosoftTeamsChannelConfigurations(
    input: ListTeamsChannelConfigurationsRequest,
  ): Effect.Effect<
    ListTeamsChannelConfigurationsResult,
    | InvalidParameterException
    | InvalidRequestException
    | ListTeamsChannelConfigurationsException
    | CommonAwsError
  > {
    return this.call("ListMicrosoftTeamsChannelConfigurations", input);
  }
  listMicrosoftTeamsConfiguredTeams(
    input: ListMicrosoftTeamsConfiguredTeamsRequest,
  ): Effect.Effect<
    ListMicrosoftTeamsConfiguredTeamsResult,
    | InvalidParameterException
    | InvalidRequestException
    | ListMicrosoftTeamsConfiguredTeamsException
    | CommonAwsError
  > {
    return this.call("ListMicrosoftTeamsConfiguredTeams", input);
  }
  listMicrosoftTeamsUserIdentities(
    input: ListMicrosoftTeamsUserIdentitiesRequest,
  ): Effect.Effect<
    ListMicrosoftTeamsUserIdentitiesResult,
    | InvalidParameterException
    | InvalidRequestException
    | ListMicrosoftTeamsUserIdentitiesException
    | CommonAwsError
  > {
    return this.call("ListMicrosoftTeamsUserIdentities", input);
  }
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServiceError
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  > {
    return this.call("ListTagsForResource", input);
  }
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServiceError
    | ResourceNotFoundException
    | ServiceUnavailableException
    | TooManyTagsException
    | CommonAwsError
  > {
    return this.call("TagResource", input);
  }
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServiceError
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  > {
    return this.call("UntagResource", input);
  }
  updateAccountPreferences(
    input: UpdateAccountPreferencesRequest,
  ): Effect.Effect<
    UpdateAccountPreferencesResult,
    | InvalidParameterException
    | InvalidRequestException
    | UpdateAccountPreferencesException
    | CommonAwsError
  > {
    return this.call("UpdateAccountPreferences", input);
  }
  updateChimeWebhookConfiguration(
    input: UpdateChimeWebhookConfigurationRequest,
  ): Effect.Effect<
    UpdateChimeWebhookConfigurationResult,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | UpdateChimeWebhookConfigurationException
    | CommonAwsError
  > {
    return this.call("UpdateChimeWebhookConfiguration", input);
  }
  updateMicrosoftTeamsChannelConfiguration(
    input: UpdateTeamsChannelConfigurationRequest,
  ): Effect.Effect<
    UpdateTeamsChannelConfigurationResult,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | UpdateTeamsChannelConfigurationException
    | CommonAwsError
  > {
    return this.call("UpdateMicrosoftTeamsChannelConfiguration", input);
  }
  updateSlackChannelConfiguration(
    input: UpdateSlackChannelConfigurationRequest,
  ): Effect.Effect<
    UpdateSlackChannelConfigurationResult,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | UpdateSlackChannelConfigurationException
    | CommonAwsError
  > {
    return this.call("UpdateSlackChannelConfiguration", input);
  }
}

export class Chatbot extends chatbot {}

export default chatbot;

export interface AccountPreferences {
  UserAuthorizationRequired?: boolean;
  TrainingDataCollectionEnabled?: boolean;
}
export type AmazonResourceName = string;

export type Arn = string;

export interface AssociateToConfigurationRequest {
  Resource: string;
  ChatConfiguration: string;
}
export interface AssociateToConfigurationResult {}
export type AssociationList = Array<AssociationListing>;
export interface AssociationListing {
  Resource: string;
}
export type AwsUserIdentity = string;

export type BooleanAccountPreference = boolean;

export type ChatConfigurationArn = string;

export interface ChimeWebhookConfiguration {
  WebhookDescription: string;
  ChatConfigurationArn: string;
  IamRoleArn: string;
  SnsTopicArns: Array<string>;
  ConfigurationName?: string;
  LoggingLevel?: string;
  Tags?: Array<Tag>;
  State?: string;
  StateReason?: string;
}
export type ChimeWebhookConfigurationList = Array<ChimeWebhookConfiguration>;
export type ChimeWebhookDescription = string;

export type ChimeWebhookUrl = string;

export type ClientToken = string;

export type ConfigurationName = string;

export interface ConfiguredTeam {
  TenantId: string;
  TeamId: string;
  TeamName?: string;
  State?: string;
  StateReason?: string;
}
export type ConfiguredTeamsList = Array<ConfiguredTeam>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export declare class CreateChimeWebhookConfigurationException extends EffectData.TaggedError(
  "CreateChimeWebhookConfigurationException",
)<{
  readonly Message?: string;
}> {}
export interface CreateChimeWebhookConfigurationRequest {
  WebhookDescription: string;
  WebhookUrl: string;
  SnsTopicArns: Array<string>;
  IamRoleArn: string;
  ConfigurationName: string;
  LoggingLevel?: string;
  Tags?: Array<Tag>;
}
export interface CreateChimeWebhookConfigurationResult {
  WebhookConfiguration?: ChimeWebhookConfiguration;
}
export interface CreateCustomActionRequest {
  Definition: CustomActionDefinition;
  AliasName?: string;
  Attachments?: Array<CustomActionAttachment>;
  Tags?: Array<Tag>;
  ClientToken?: string;
  ActionName: string;
}
export interface CreateCustomActionResult {
  CustomActionArn: string;
}
export declare class CreateSlackChannelConfigurationException extends EffectData.TaggedError(
  "CreateSlackChannelConfigurationException",
)<{
  readonly Message?: string;
}> {}
export interface CreateSlackChannelConfigurationRequest {
  SlackTeamId: string;
  SlackChannelId: string;
  SlackChannelName?: string;
  SnsTopicArns?: Array<string>;
  IamRoleArn: string;
  ConfigurationName: string;
  LoggingLevel?: string;
  GuardrailPolicyArns?: Array<string>;
  UserAuthorizationRequired?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateSlackChannelConfigurationResult {
  ChannelConfiguration?: SlackChannelConfiguration;
}
export declare class CreateTeamsChannelConfigurationException extends EffectData.TaggedError(
  "CreateTeamsChannelConfigurationException",
)<{
  readonly Message?: string;
}> {}
export interface CreateTeamsChannelConfigurationRequest {
  ChannelId: string;
  ChannelName?: string;
  TeamId: string;
  TeamName?: string;
  TenantId: string;
  SnsTopicArns?: Array<string>;
  IamRoleArn: string;
  ConfigurationName: string;
  LoggingLevel?: string;
  GuardrailPolicyArns?: Array<string>;
  UserAuthorizationRequired?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateTeamsChannelConfigurationResult {
  ChannelConfiguration?: TeamsChannelConfiguration;
}
export interface CustomAction {
  CustomActionArn: string;
  Definition: CustomActionDefinition;
  AliasName?: string;
  Attachments?: Array<CustomActionAttachment>;
  ActionName?: string;
}
export type CustomActionAliasName = string;

export type CustomActionArn = string;

export type CustomActionArnList = Array<string>;
export interface CustomActionAttachment {
  NotificationType?: string;
  ButtonText?: string;
  Criteria?: Array<CustomActionAttachmentCriteria>;
  Variables?: Record<string, string>;
}
export interface CustomActionAttachmentCriteria {
  Operator: CustomActionAttachmentCriteriaOperator;
  VariableName: string;
  Value?: string;
}
export type CustomActionAttachmentCriteriaList =
  Array<CustomActionAttachmentCriteria>;
export type CustomActionAttachmentCriteriaOperator = "HAS_VALUE" | "EQUALS";
export type CustomActionAttachmentList = Array<CustomActionAttachment>;
export type CustomActionAttachmentNotificationType = string;

export type CustomActionAttachmentVariables = Record<string, string>;
export type CustomActionButtonText = string;

export interface CustomActionDefinition {
  CommandText: string;
}
export type CustomActionName = string;

export type CustomerCwLogLevel = string;

export declare class DeleteChimeWebhookConfigurationException extends EffectData.TaggedError(
  "DeleteChimeWebhookConfigurationException",
)<{
  readonly Message?: string;
}> {}
export interface DeleteChimeWebhookConfigurationRequest {
  ChatConfigurationArn: string;
}
export interface DeleteChimeWebhookConfigurationResult {}
export interface DeleteCustomActionRequest {
  CustomActionArn: string;
}
export interface DeleteCustomActionResult {}
export declare class DeleteMicrosoftTeamsUserIdentityException extends EffectData.TaggedError(
  "DeleteMicrosoftTeamsUserIdentityException",
)<{
  readonly Message?: string;
}> {}
export interface DeleteMicrosoftTeamsUserIdentityRequest {
  ChatConfigurationArn: string;
  UserId: string;
}
export interface DeleteMicrosoftTeamsUserIdentityResult {}
export declare class DeleteSlackChannelConfigurationException extends EffectData.TaggedError(
  "DeleteSlackChannelConfigurationException",
)<{
  readonly Message?: string;
}> {}
export interface DeleteSlackChannelConfigurationRequest {
  ChatConfigurationArn: string;
}
export interface DeleteSlackChannelConfigurationResult {}
export declare class DeleteSlackUserIdentityException extends EffectData.TaggedError(
  "DeleteSlackUserIdentityException",
)<{
  readonly Message?: string;
}> {}
export interface DeleteSlackUserIdentityRequest {
  ChatConfigurationArn: string;
  SlackTeamId: string;
  SlackUserId: string;
}
export interface DeleteSlackUserIdentityResult {}
export declare class DeleteSlackWorkspaceAuthorizationFault extends EffectData.TaggedError(
  "DeleteSlackWorkspaceAuthorizationFault",
)<{
  readonly Message?: string;
}> {}
export interface DeleteSlackWorkspaceAuthorizationRequest {
  SlackTeamId: string;
}
export interface DeleteSlackWorkspaceAuthorizationResult {}
export declare class DeleteTeamsChannelConfigurationException extends EffectData.TaggedError(
  "DeleteTeamsChannelConfigurationException",
)<{
  readonly Message?: string;
}> {}
export interface DeleteTeamsChannelConfigurationRequest {
  ChatConfigurationArn: string;
}
export interface DeleteTeamsChannelConfigurationResult {}
export declare class DeleteTeamsConfiguredTeamException extends EffectData.TaggedError(
  "DeleteTeamsConfiguredTeamException",
)<{
  readonly Message?: string;
}> {}
export interface DeleteTeamsConfiguredTeamRequest {
  TeamId: string;
}
export interface DeleteTeamsConfiguredTeamResult {}
export declare class DescribeChimeWebhookConfigurationsException extends EffectData.TaggedError(
  "DescribeChimeWebhookConfigurationsException",
)<{
  readonly Message?: string;
}> {}
export interface DescribeChimeWebhookConfigurationsRequest {
  MaxResults?: number;
  NextToken?: string;
  ChatConfigurationArn?: string;
}
export interface DescribeChimeWebhookConfigurationsResult {
  NextToken?: string;
  WebhookConfigurations?: Array<ChimeWebhookConfiguration>;
}
export declare class DescribeSlackChannelConfigurationsException extends EffectData.TaggedError(
  "DescribeSlackChannelConfigurationsException",
)<{
  readonly Message?: string;
}> {}
export interface DescribeSlackChannelConfigurationsRequest {
  MaxResults?: number;
  NextToken?: string;
  ChatConfigurationArn?: string;
}
export interface DescribeSlackChannelConfigurationsResult {
  NextToken?: string;
  SlackChannelConfigurations?: Array<SlackChannelConfiguration>;
}
export declare class DescribeSlackUserIdentitiesException extends EffectData.TaggedError(
  "DescribeSlackUserIdentitiesException",
)<{
  readonly Message?: string;
}> {}
export interface DescribeSlackUserIdentitiesRequest {
  ChatConfigurationArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeSlackUserIdentitiesResult {
  SlackUserIdentities?: Array<SlackUserIdentity>;
  NextToken?: string;
}
export declare class DescribeSlackWorkspacesException extends EffectData.TaggedError(
  "DescribeSlackWorkspacesException",
)<{
  readonly Message?: string;
}> {}
export interface DescribeSlackWorkspacesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeSlackWorkspacesResult {
  SlackWorkspaces?: Array<SlackWorkspace>;
  NextToken?: string;
}
export interface DisassociateFromConfigurationRequest {
  Resource: string;
  ChatConfiguration: string;
}
export interface DisassociateFromConfigurationResult {}
export type ErrorMessage = string;

export declare class GetAccountPreferencesException extends EffectData.TaggedError(
  "GetAccountPreferencesException",
)<{
  readonly Message?: string;
}> {}
export interface GetAccountPreferencesRequest {}
export interface GetAccountPreferencesResult {
  AccountPreferences?: AccountPreferences;
}
export interface GetCustomActionRequest {
  CustomActionArn: string;
}
export interface GetCustomActionResult {
  CustomAction?: CustomAction;
}
export declare class GetTeamsChannelConfigurationException extends EffectData.TaggedError(
  "GetTeamsChannelConfigurationException",
)<{
  readonly Message?: string;
}> {}
export interface GetTeamsChannelConfigurationRequest {
  ChatConfigurationArn: string;
}
export interface GetTeamsChannelConfigurationResult {
  ChannelConfiguration?: TeamsChannelConfiguration;
}
export type GuardrailPolicyArn = string;

export type GuardrailPolicyArnList = Array<string>;
export declare class InternalServiceError extends EffectData.TaggedError(
  "InternalServiceError",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListAssociationsRequest {
  ChatConfiguration: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAssociationsResult {
  Associations: Array<AssociationListing>;
  NextToken?: string;
}
export interface ListCustomActionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCustomActionsResult {
  CustomActions: Array<string>;
  NextToken?: string;
}
export declare class ListMicrosoftTeamsConfiguredTeamsException extends EffectData.TaggedError(
  "ListMicrosoftTeamsConfiguredTeamsException",
)<{
  readonly Message?: string;
}> {}
export interface ListMicrosoftTeamsConfiguredTeamsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListMicrosoftTeamsConfiguredTeamsResult {
  ConfiguredTeams?: Array<ConfiguredTeam>;
  NextToken?: string;
}
export declare class ListMicrosoftTeamsUserIdentitiesException extends EffectData.TaggedError(
  "ListMicrosoftTeamsUserIdentitiesException",
)<{
  readonly Message?: string;
}> {}
export interface ListMicrosoftTeamsUserIdentitiesRequest {
  ChatConfigurationArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMicrosoftTeamsUserIdentitiesResult {
  TeamsUserIdentities?: Array<TeamsUserIdentity>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export declare class ListTeamsChannelConfigurationsException extends EffectData.TaggedError(
  "ListTeamsChannelConfigurationsException",
)<{
  readonly Message?: string;
}> {}
export interface ListTeamsChannelConfigurationsRequest {
  MaxResults?: number;
  NextToken?: string;
  TeamId?: string;
}
export interface ListTeamsChannelConfigurationsResult {
  NextToken?: string;
  TeamChannelConfigurations?: Array<TeamsChannelConfiguration>;
}
export type MaxResults = number;

export type PaginationToken = string;

export type ResourceIdentifier = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourceState = string;

export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export interface SlackChannelConfiguration {
  SlackTeamName: string;
  SlackTeamId: string;
  SlackChannelId: string;
  SlackChannelName: string;
  ChatConfigurationArn: string;
  IamRoleArn: string;
  SnsTopicArns: Array<string>;
  ConfigurationName?: string;
  LoggingLevel?: string;
  GuardrailPolicyArns?: Array<string>;
  UserAuthorizationRequired?: boolean;
  Tags?: Array<Tag>;
  State?: string;
  StateReason?: string;
}
export type SlackChannelConfigurationList = Array<SlackChannelConfiguration>;
export type SlackChannelDisplayName = string;

export type SlackChannelId = string;

export type SlackTeamId = string;

export type SlackTeamName = string;

export type SlackUserId = string;

export type SlackUserIdentitiesList = Array<SlackUserIdentity>;
export interface SlackUserIdentity {
  IamRoleArn: string;
  ChatConfigurationArn: string;
  SlackTeamId: string;
  SlackUserId: string;
  AwsUserIdentity?: string;
}
export interface SlackWorkspace {
  SlackTeamId: string;
  SlackTeamName: string;
  State?: string;
  StateReason?: string;
}
export type SlackWorkspacesList = Array<SlackWorkspace>;
export type SnsTopicArnList = Array<string>;
export type ChatbotString = string;

export interface Tag {
  TagKey: string;
  TagValue: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type Tags = Array<Tag>;
export type TagValue = string;

export type TeamChannelConfigurationsList = Array<TeamsChannelConfiguration>;
export type TeamName = string;

export interface TeamsChannelConfiguration {
  ChannelId: string;
  ChannelName?: string;
  TeamId: string;
  TeamName?: string;
  TenantId: string;
  ChatConfigurationArn: string;
  IamRoleArn: string;
  SnsTopicArns: Array<string>;
  ConfigurationName?: string;
  LoggingLevel?: string;
  GuardrailPolicyArns?: Array<string>;
  UserAuthorizationRequired?: boolean;
  Tags?: Array<Tag>;
  State?: string;
  StateReason?: string;
}
export type TeamsChannelId = string;

export type TeamsChannelName = string;

export type TeamsUserIdentitiesList = Array<TeamsUserIdentity>;
export interface TeamsUserIdentity {
  IamRoleArn: string;
  ChatConfigurationArn: string;
  TeamId: string;
  UserId?: string;
  AwsUserIdentity?: string;
  TeamsChannelId?: string;
  TeamsTenantId?: string;
}
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export declare class UpdateAccountPreferencesException extends EffectData.TaggedError(
  "UpdateAccountPreferencesException",
)<{
  readonly Message?: string;
}> {}
export interface UpdateAccountPreferencesRequest {
  UserAuthorizationRequired?: boolean;
  TrainingDataCollectionEnabled?: boolean;
}
export interface UpdateAccountPreferencesResult {
  AccountPreferences?: AccountPreferences;
}
export declare class UpdateChimeWebhookConfigurationException extends EffectData.TaggedError(
  "UpdateChimeWebhookConfigurationException",
)<{
  readonly Message?: string;
}> {}
export interface UpdateChimeWebhookConfigurationRequest {
  ChatConfigurationArn: string;
  WebhookDescription?: string;
  WebhookUrl?: string;
  SnsTopicArns?: Array<string>;
  IamRoleArn?: string;
  LoggingLevel?: string;
}
export interface UpdateChimeWebhookConfigurationResult {
  WebhookConfiguration?: ChimeWebhookConfiguration;
}
export interface UpdateCustomActionRequest {
  CustomActionArn: string;
  Definition: CustomActionDefinition;
  AliasName?: string;
  Attachments?: Array<CustomActionAttachment>;
}
export interface UpdateCustomActionResult {
  CustomActionArn: string;
}
export declare class UpdateSlackChannelConfigurationException extends EffectData.TaggedError(
  "UpdateSlackChannelConfigurationException",
)<{
  readonly Message?: string;
}> {}
export interface UpdateSlackChannelConfigurationRequest {
  ChatConfigurationArn: string;
  SlackChannelId: string;
  SlackChannelName?: string;
  SnsTopicArns?: Array<string>;
  IamRoleArn?: string;
  LoggingLevel?: string;
  GuardrailPolicyArns?: Array<string>;
  UserAuthorizationRequired?: boolean;
}
export interface UpdateSlackChannelConfigurationResult {
  ChannelConfiguration?: SlackChannelConfiguration;
}
export declare class UpdateTeamsChannelConfigurationException extends EffectData.TaggedError(
  "UpdateTeamsChannelConfigurationException",
)<{
  readonly Message?: string;
}> {}
export interface UpdateTeamsChannelConfigurationRequest {
  ChatConfigurationArn: string;
  ChannelId: string;
  ChannelName?: string;
  SnsTopicArns?: Array<string>;
  IamRoleArn?: string;
  LoggingLevel?: string;
  GuardrailPolicyArns?: Array<string>;
  UserAuthorizationRequired?: boolean;
}
export interface UpdateTeamsChannelConfigurationResult {
  ChannelConfiguration?: TeamsChannelConfiguration;
}
export type UUID = string;

export declare namespace AssociateToConfiguration {
  export type Input = AssociateToConfigurationRequest;
  export type Output = AssociateToConfigurationResult;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateChimeWebhookConfiguration {
  export type Input = CreateChimeWebhookConfigurationRequest;
  export type Output = CreateChimeWebhookConfigurationResult;
  export type Error =
    | ConflictException
    | CreateChimeWebhookConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateMicrosoftTeamsChannelConfiguration {
  export type Input = CreateTeamsChannelConfigurationRequest;
  export type Output = CreateTeamsChannelConfigurationResult;
  export type Error =
    | ConflictException
    | CreateTeamsChannelConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateSlackChannelConfiguration {
  export type Input = CreateSlackChannelConfigurationRequest;
  export type Output = CreateSlackChannelConfigurationResult;
  export type Error =
    | ConflictException
    | CreateSlackChannelConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteChimeWebhookConfiguration {
  export type Input = DeleteChimeWebhookConfigurationRequest;
  export type Output = DeleteChimeWebhookConfigurationResult;
  export type Error =
    | DeleteChimeWebhookConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteMicrosoftTeamsChannelConfiguration {
  export type Input = DeleteTeamsChannelConfigurationRequest;
  export type Output = DeleteTeamsChannelConfigurationResult;
  export type Error =
    | DeleteTeamsChannelConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteMicrosoftTeamsConfiguredTeam {
  export type Input = DeleteTeamsConfiguredTeamRequest;
  export type Output = DeleteTeamsConfiguredTeamResult;
  export type Error =
    | DeleteTeamsConfiguredTeamException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace DeleteMicrosoftTeamsUserIdentity {
  export type Input = DeleteMicrosoftTeamsUserIdentityRequest;
  export type Output = DeleteMicrosoftTeamsUserIdentityResult;
  export type Error =
    | DeleteMicrosoftTeamsUserIdentityException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteSlackChannelConfiguration {
  export type Input = DeleteSlackChannelConfigurationRequest;
  export type Output = DeleteSlackChannelConfigurationResult;
  export type Error =
    | DeleteSlackChannelConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteSlackUserIdentity {
  export type Input = DeleteSlackUserIdentityRequest;
  export type Output = DeleteSlackUserIdentityResult;
  export type Error =
    | DeleteSlackUserIdentityException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteSlackWorkspaceAuthorization {
  export type Input = DeleteSlackWorkspaceAuthorizationRequest;
  export type Output = DeleteSlackWorkspaceAuthorizationResult;
  export type Error =
    | DeleteSlackWorkspaceAuthorizationFault
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace DescribeChimeWebhookConfigurations {
  export type Input = DescribeChimeWebhookConfigurationsRequest;
  export type Output = DescribeChimeWebhookConfigurationsResult;
  export type Error =
    | DescribeChimeWebhookConfigurationsException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeSlackChannelConfigurations {
  export type Input = DescribeSlackChannelConfigurationsRequest;
  export type Output = DescribeSlackChannelConfigurationsResult;
  export type Error =
    | DescribeSlackChannelConfigurationsException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeSlackUserIdentities {
  export type Input = DescribeSlackUserIdentitiesRequest;
  export type Output = DescribeSlackUserIdentitiesResult;
  export type Error =
    | DescribeSlackUserIdentitiesException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeSlackWorkspaces {
  export type Input = DescribeSlackWorkspacesRequest;
  export type Output = DescribeSlackWorkspacesResult;
  export type Error =
    | DescribeSlackWorkspacesException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DisassociateFromConfiguration {
  export type Input = DisassociateFromConfigurationRequest;
  export type Output = DisassociateFromConfigurationResult;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetAccountPreferences {
  export type Input = GetAccountPreferencesRequest;
  export type Output = GetAccountPreferencesResult;
  export type Error =
    | GetAccountPreferencesException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetMicrosoftTeamsChannelConfiguration {
  export type Input = GetTeamsChannelConfigurationRequest;
  export type Output = GetTeamsChannelConfigurationResult;
  export type Error =
    | GetTeamsChannelConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListAssociations {
  export type Input = ListAssociationsRequest;
  export type Output = ListAssociationsResult;
  export type Error = CommonAwsError;
}

export declare namespace ListMicrosoftTeamsChannelConfigurations {
  export type Input = ListTeamsChannelConfigurationsRequest;
  export type Output = ListTeamsChannelConfigurationsResult;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ListTeamsChannelConfigurationsException
    | CommonAwsError;
}

export declare namespace ListMicrosoftTeamsConfiguredTeams {
  export type Input = ListMicrosoftTeamsConfiguredTeamsRequest;
  export type Output = ListMicrosoftTeamsConfiguredTeamsResult;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ListMicrosoftTeamsConfiguredTeamsException
    | CommonAwsError;
}

export declare namespace ListMicrosoftTeamsUserIdentities {
  export type Input = ListMicrosoftTeamsUserIdentitiesRequest;
  export type Output = ListMicrosoftTeamsUserIdentitiesResult;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ListMicrosoftTeamsUserIdentitiesException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServiceError
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServiceError
    | ResourceNotFoundException
    | ServiceUnavailableException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServiceError
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateAccountPreferences {
  export type Input = UpdateAccountPreferencesRequest;
  export type Output = UpdateAccountPreferencesResult;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | UpdateAccountPreferencesException
    | CommonAwsError;
}

export declare namespace UpdateChimeWebhookConfiguration {
  export type Input = UpdateChimeWebhookConfigurationRequest;
  export type Output = UpdateChimeWebhookConfigurationResult;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | UpdateChimeWebhookConfigurationException
    | CommonAwsError;
}

export declare namespace UpdateMicrosoftTeamsChannelConfiguration {
  export type Input = UpdateTeamsChannelConfigurationRequest;
  export type Output = UpdateTeamsChannelConfigurationResult;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | UpdateTeamsChannelConfigurationException
    | CommonAwsError;
}

export declare namespace UpdateSlackChannelConfiguration {
  export type Input = UpdateSlackChannelConfigurationRequest;
  export type Output = UpdateSlackChannelConfigurationResult;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | UpdateSlackChannelConfigurationException
    | CommonAwsError;
}

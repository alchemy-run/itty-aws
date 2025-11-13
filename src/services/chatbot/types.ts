import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class chatbot extends AWSServiceClient {
  associateToConfiguration(
    input: AssociateToConfigurationRequest,
  ): Effect.Effect<
    AssociateToConfigurationResult,
    | InternalServiceError
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError
  >;
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
  >;
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
  >;
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
  >;
  deleteChimeWebhookConfiguration(
    input: DeleteChimeWebhookConfigurationRequest,
  ): Effect.Effect<
    DeleteChimeWebhookConfigurationResult,
    | DeleteChimeWebhookConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteMicrosoftTeamsChannelConfiguration(
    input: DeleteTeamsChannelConfigurationRequest,
  ): Effect.Effect<
    DeleteTeamsChannelConfigurationResult,
    | DeleteTeamsChannelConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteMicrosoftTeamsConfiguredTeam(
    input: DeleteTeamsConfiguredTeamRequest,
  ): Effect.Effect<
    DeleteTeamsConfiguredTeamResult,
    | DeleteTeamsConfiguredTeamException
    | InvalidParameterException
    | CommonAwsError
  >;
  deleteMicrosoftTeamsUserIdentity(
    input: DeleteMicrosoftTeamsUserIdentityRequest,
  ): Effect.Effect<
    DeleteMicrosoftTeamsUserIdentityResult,
    | DeleteMicrosoftTeamsUserIdentityException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteSlackChannelConfiguration(
    input: DeleteSlackChannelConfigurationRequest,
  ): Effect.Effect<
    DeleteSlackChannelConfigurationResult,
    | DeleteSlackChannelConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteSlackUserIdentity(
    input: DeleteSlackUserIdentityRequest,
  ): Effect.Effect<
    DeleteSlackUserIdentityResult,
    | DeleteSlackUserIdentityException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteSlackWorkspaceAuthorization(
    input: DeleteSlackWorkspaceAuthorizationRequest,
  ): Effect.Effect<
    DeleteSlackWorkspaceAuthorizationResult,
    | DeleteSlackWorkspaceAuthorizationFault
    | InvalidParameterException
    | CommonAwsError
  >;
  describeChimeWebhookConfigurations(
    input: DescribeChimeWebhookConfigurationsRequest,
  ): Effect.Effect<
    DescribeChimeWebhookConfigurationsResult,
    | DescribeChimeWebhookConfigurationsException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError
  >;
  describeSlackChannelConfigurations(
    input: DescribeSlackChannelConfigurationsRequest,
  ): Effect.Effect<
    DescribeSlackChannelConfigurationsResult,
    | DescribeSlackChannelConfigurationsException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError
  >;
  describeSlackUserIdentities(
    input: DescribeSlackUserIdentitiesRequest,
  ): Effect.Effect<
    DescribeSlackUserIdentitiesResult,
    | DescribeSlackUserIdentitiesException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError
  >;
  describeSlackWorkspaces(
    input: DescribeSlackWorkspacesRequest,
  ): Effect.Effect<
    DescribeSlackWorkspacesResult,
    | DescribeSlackWorkspacesException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError
  >;
  disassociateFromConfiguration(
    input: DisassociateFromConfigurationRequest,
  ): Effect.Effect<
    DisassociateFromConfigurationResult,
    | InternalServiceError
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError
  >;
  getAccountPreferences(
    input: GetAccountPreferencesRequest,
  ): Effect.Effect<
    GetAccountPreferencesResult,
    GetAccountPreferencesException | InvalidRequestException | CommonAwsError
  >;
  getMicrosoftTeamsChannelConfiguration(
    input: GetTeamsChannelConfigurationRequest,
  ): Effect.Effect<
    GetTeamsChannelConfigurationResult,
    | GetTeamsChannelConfigurationException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError
  >;
  listAssociations(
    input: ListAssociationsRequest,
  ): Effect.Effect<ListAssociationsResult, CommonAwsError>;
  listMicrosoftTeamsChannelConfigurations(
    input: ListTeamsChannelConfigurationsRequest,
  ): Effect.Effect<
    ListTeamsChannelConfigurationsResult,
    | InvalidParameterException
    | InvalidRequestException
    | ListTeamsChannelConfigurationsException
    | CommonAwsError
  >;
  listMicrosoftTeamsConfiguredTeams(
    input: ListMicrosoftTeamsConfiguredTeamsRequest,
  ): Effect.Effect<
    ListMicrosoftTeamsConfiguredTeamsResult,
    | InvalidParameterException
    | InvalidRequestException
    | ListMicrosoftTeamsConfiguredTeamsException
    | CommonAwsError
  >;
  listMicrosoftTeamsUserIdentities(
    input: ListMicrosoftTeamsUserIdentitiesRequest,
  ): Effect.Effect<
    ListMicrosoftTeamsUserIdentitiesResult,
    | InvalidParameterException
    | InvalidRequestException
    | ListMicrosoftTeamsUserIdentitiesException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServiceError
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServiceError
    | ResourceNotFoundException
    | ServiceUnavailableException
    | TooManyTagsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServiceError
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateAccountPreferences(
    input: UpdateAccountPreferencesRequest,
  ): Effect.Effect<
    UpdateAccountPreferencesResult,
    | InvalidParameterException
    | InvalidRequestException
    | UpdateAccountPreferencesException
    | CommonAwsError
  >;
  updateChimeWebhookConfiguration(
    input: UpdateChimeWebhookConfigurationRequest,
  ): Effect.Effect<
    UpdateChimeWebhookConfigurationResult,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | UpdateChimeWebhookConfigurationException
    | CommonAwsError
  >;
  updateMicrosoftTeamsChannelConfiguration(
    input: UpdateTeamsChannelConfigurationRequest,
  ): Effect.Effect<
    UpdateTeamsChannelConfigurationResult,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | UpdateTeamsChannelConfigurationException
    | CommonAwsError
  >;
  updateSlackChannelConfiguration(
    input: UpdateSlackChannelConfigurationRequest,
  ): Effect.Effect<
    UpdateSlackChannelConfigurationResult,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | UpdateSlackChannelConfigurationException
    | CommonAwsError
  >;
  createCustomAction(
    input: CreateCustomActionRequest,
  ): Effect.Effect<
    CreateCustomActionResult,
    | ConflictException
    | InternalServiceError
    | InvalidRequestException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteCustomAction(
    input: DeleteCustomActionRequest,
  ): Effect.Effect<
    DeleteCustomActionResult,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  getCustomAction(
    input: GetCustomActionRequest,
  ): Effect.Effect<
    GetCustomActionResult,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  listCustomActions(
    input: ListCustomActionsRequest,
  ): Effect.Effect<
    ListCustomActionsResult,
    | InternalServiceError
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateCustomAction(
    input: UpdateCustomActionRequest,
  ): Effect.Effect<
    UpdateCustomActionResult,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
}

export declare class Chatbot extends chatbot {}

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
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export declare class CreateChimeWebhookConfigurationException extends Data.TaggedError(
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
export declare class CreateSlackChannelConfigurationException extends Data.TaggedError(
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
export declare class CreateTeamsChannelConfigurationException extends Data.TaggedError(
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

export declare class DeleteChimeWebhookConfigurationException extends Data.TaggedError(
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
export declare class DeleteMicrosoftTeamsUserIdentityException extends Data.TaggedError(
  "DeleteMicrosoftTeamsUserIdentityException",
)<{
  readonly Message?: string;
}> {}
export interface DeleteMicrosoftTeamsUserIdentityRequest {
  ChatConfigurationArn: string;
  UserId: string;
}
export interface DeleteMicrosoftTeamsUserIdentityResult {}
export declare class DeleteSlackChannelConfigurationException extends Data.TaggedError(
  "DeleteSlackChannelConfigurationException",
)<{
  readonly Message?: string;
}> {}
export interface DeleteSlackChannelConfigurationRequest {
  ChatConfigurationArn: string;
}
export interface DeleteSlackChannelConfigurationResult {}
export declare class DeleteSlackUserIdentityException extends Data.TaggedError(
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
export declare class DeleteSlackWorkspaceAuthorizationFault extends Data.TaggedError(
  "DeleteSlackWorkspaceAuthorizationFault",
)<{
  readonly Message?: string;
}> {}
export interface DeleteSlackWorkspaceAuthorizationRequest {
  SlackTeamId: string;
}
export interface DeleteSlackWorkspaceAuthorizationResult {}
export declare class DeleteTeamsChannelConfigurationException extends Data.TaggedError(
  "DeleteTeamsChannelConfigurationException",
)<{
  readonly Message?: string;
}> {}
export interface DeleteTeamsChannelConfigurationRequest {
  ChatConfigurationArn: string;
}
export interface DeleteTeamsChannelConfigurationResult {}
export declare class DeleteTeamsConfiguredTeamException extends Data.TaggedError(
  "DeleteTeamsConfiguredTeamException",
)<{
  readonly Message?: string;
}> {}
export interface DeleteTeamsConfiguredTeamRequest {
  TeamId: string;
}
export interface DeleteTeamsConfiguredTeamResult {}
export declare class DescribeChimeWebhookConfigurationsException extends Data.TaggedError(
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
export declare class DescribeSlackChannelConfigurationsException extends Data.TaggedError(
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
export declare class DescribeSlackUserIdentitiesException extends Data.TaggedError(
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
export declare class DescribeSlackWorkspacesException extends Data.TaggedError(
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

export declare class GetAccountPreferencesException extends Data.TaggedError(
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
export declare class GetTeamsChannelConfigurationException extends Data.TaggedError(
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
export declare class InternalServiceError extends Data.TaggedError(
  "InternalServiceError",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export declare class LimitExceededException extends Data.TaggedError(
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
export declare class ListMicrosoftTeamsConfiguredTeamsException extends Data.TaggedError(
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
export declare class ListMicrosoftTeamsUserIdentitiesException extends Data.TaggedError(
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
export declare class ListTeamsChannelConfigurationsException extends Data.TaggedError(
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

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourceState = string;

export declare class ServiceUnavailableException extends Data.TaggedError(
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
export declare class TooManyTagsException extends Data.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export declare class UnauthorizedException extends Data.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export declare class UpdateAccountPreferencesException extends Data.TaggedError(
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
export declare class UpdateChimeWebhookConfigurationException extends Data.TaggedError(
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
export declare class UpdateSlackChannelConfigurationException extends Data.TaggedError(
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
export declare class UpdateTeamsChannelConfigurationException extends Data.TaggedError(
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

export declare namespace CreateCustomAction {
  export type Input = CreateCustomActionRequest;
  export type Output = CreateCustomActionResult;
  export type Error =
    | ConflictException
    | InternalServiceError
    | InvalidRequestException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteCustomAction {
  export type Input = DeleteCustomActionRequest;
  export type Output = DeleteCustomActionResult;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetCustomAction {
  export type Input = GetCustomActionRequest;
  export type Output = GetCustomActionResult;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListCustomActions {
  export type Input = ListCustomActionsRequest;
  export type Output = ListCustomActionsResult;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateCustomAction {
  export type Input = UpdateCustomActionRequest;
  export type Output = UpdateCustomActionResult;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export type chatbotErrors =
  | ConflictException
  | CreateChimeWebhookConfigurationException
  | CreateSlackChannelConfigurationException
  | CreateTeamsChannelConfigurationException
  | DeleteChimeWebhookConfigurationException
  | DeleteMicrosoftTeamsUserIdentityException
  | DeleteSlackChannelConfigurationException
  | DeleteSlackUserIdentityException
  | DeleteSlackWorkspaceAuthorizationFault
  | DeleteTeamsChannelConfigurationException
  | DeleteTeamsConfiguredTeamException
  | DescribeChimeWebhookConfigurationsException
  | DescribeSlackChannelConfigurationsException
  | DescribeSlackUserIdentitiesException
  | DescribeSlackWorkspacesException
  | GetAccountPreferencesException
  | GetTeamsChannelConfigurationException
  | InternalServiceError
  | InvalidParameterException
  | InvalidRequestException
  | LimitExceededException
  | ListMicrosoftTeamsConfiguredTeamsException
  | ListMicrosoftTeamsUserIdentitiesException
  | ListTeamsChannelConfigurationsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | TooManyTagsException
  | UnauthorizedException
  | UpdateAccountPreferencesException
  | UpdateChimeWebhookConfigurationException
  | UpdateSlackChannelConfigurationException
  | UpdateTeamsChannelConfigurationException
  | CommonAwsError;

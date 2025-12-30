import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetAccountPreferencesRequest extends S.Class<GetAccountPreferencesRequest>("GetAccountPreferencesRequest")({}) {}
export const SnsTopicArnList = S.Array(S.String);
export const GuardrailPolicyArnList = S.Array(S.String);
export class Tag extends S.Class<Tag>("Tag")({TagKey: S.String, TagValue: S.String}) {}
export const TagList = S.Array(Tag);
export const TagKeyList = S.Array(S.String);
export class AssociateToConfigurationRequest extends S.Class<AssociateToConfigurationRequest>("AssociateToConfigurationRequest")({Resource: S.String, ChatConfiguration: S.String}) {}
export class AssociateToConfigurationResult extends S.Class<AssociateToConfigurationResult>("AssociateToConfigurationResult")({}) {}
export const Tags = S.Array(Tag);
export class CreateTeamsChannelConfigurationRequest extends S.Class<CreateTeamsChannelConfigurationRequest>("CreateTeamsChannelConfigurationRequest")({ChannelId: S.String, ChannelName: S.optional(S.String), TeamId: S.String, TeamName: S.optional(S.String), TenantId: S.String, SnsTopicArns: S.optional(SnsTopicArnList), IamRoleArn: S.String, ConfigurationName: S.String, LoggingLevel: S.optional(S.String), GuardrailPolicyArns: S.optional(GuardrailPolicyArnList), UserAuthorizationRequired: S.optional(S.Boolean), Tags: S.optional(Tags)}) {}
export class CreateSlackChannelConfigurationRequest extends S.Class<CreateSlackChannelConfigurationRequest>("CreateSlackChannelConfigurationRequest")({SlackTeamId: S.String, SlackChannelId: S.String, SlackChannelName: S.optional(S.String), SnsTopicArns: S.optional(SnsTopicArnList), IamRoleArn: S.String, ConfigurationName: S.String, LoggingLevel: S.optional(S.String), GuardrailPolicyArns: S.optional(GuardrailPolicyArnList), UserAuthorizationRequired: S.optional(S.Boolean), Tags: S.optional(Tags)}) {}
export class DeleteChimeWebhookConfigurationRequest extends S.Class<DeleteChimeWebhookConfigurationRequest>("DeleteChimeWebhookConfigurationRequest")({ChatConfigurationArn: S.String}) {}
export class DeleteChimeWebhookConfigurationResult extends S.Class<DeleteChimeWebhookConfigurationResult>("DeleteChimeWebhookConfigurationResult")({}) {}
export class DeleteTeamsChannelConfigurationRequest extends S.Class<DeleteTeamsChannelConfigurationRequest>("DeleteTeamsChannelConfigurationRequest")({ChatConfigurationArn: S.String}) {}
export class DeleteTeamsChannelConfigurationResult extends S.Class<DeleteTeamsChannelConfigurationResult>("DeleteTeamsChannelConfigurationResult")({}) {}
export class DeleteTeamsConfiguredTeamRequest extends S.Class<DeleteTeamsConfiguredTeamRequest>("DeleteTeamsConfiguredTeamRequest")({TeamId: S.String}) {}
export class DeleteTeamsConfiguredTeamResult extends S.Class<DeleteTeamsConfiguredTeamResult>("DeleteTeamsConfiguredTeamResult")({}) {}
export class DeleteMicrosoftTeamsUserIdentityRequest extends S.Class<DeleteMicrosoftTeamsUserIdentityRequest>("DeleteMicrosoftTeamsUserIdentityRequest")({ChatConfigurationArn: S.String, UserId: S.String}) {}
export class DeleteMicrosoftTeamsUserIdentityResult extends S.Class<DeleteMicrosoftTeamsUserIdentityResult>("DeleteMicrosoftTeamsUserIdentityResult")({}) {}
export class DeleteSlackChannelConfigurationRequest extends S.Class<DeleteSlackChannelConfigurationRequest>("DeleteSlackChannelConfigurationRequest")({ChatConfigurationArn: S.String}) {}
export class DeleteSlackChannelConfigurationResult extends S.Class<DeleteSlackChannelConfigurationResult>("DeleteSlackChannelConfigurationResult")({}) {}
export class DeleteSlackUserIdentityRequest extends S.Class<DeleteSlackUserIdentityRequest>("DeleteSlackUserIdentityRequest")({ChatConfigurationArn: S.String, SlackTeamId: S.String, SlackUserId: S.String}) {}
export class DeleteSlackUserIdentityResult extends S.Class<DeleteSlackUserIdentityResult>("DeleteSlackUserIdentityResult")({}) {}
export class DeleteSlackWorkspaceAuthorizationRequest extends S.Class<DeleteSlackWorkspaceAuthorizationRequest>("DeleteSlackWorkspaceAuthorizationRequest")({SlackTeamId: S.String}) {}
export class DeleteSlackWorkspaceAuthorizationResult extends S.Class<DeleteSlackWorkspaceAuthorizationResult>("DeleteSlackWorkspaceAuthorizationResult")({}) {}
export class DescribeChimeWebhookConfigurationsRequest extends S.Class<DescribeChimeWebhookConfigurationsRequest>("DescribeChimeWebhookConfigurationsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ChatConfigurationArn: S.optional(S.String)}) {}
export class DescribeSlackChannelConfigurationsRequest extends S.Class<DescribeSlackChannelConfigurationsRequest>("DescribeSlackChannelConfigurationsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ChatConfigurationArn: S.optional(S.String)}) {}
export class DescribeSlackUserIdentitiesRequest extends S.Class<DescribeSlackUserIdentitiesRequest>("DescribeSlackUserIdentitiesRequest")({ChatConfigurationArn: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeSlackWorkspacesRequest extends S.Class<DescribeSlackWorkspacesRequest>("DescribeSlackWorkspacesRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DisassociateFromConfigurationRequest extends S.Class<DisassociateFromConfigurationRequest>("DisassociateFromConfigurationRequest")({Resource: S.String, ChatConfiguration: S.String}) {}
export class DisassociateFromConfigurationResult extends S.Class<DisassociateFromConfigurationResult>("DisassociateFromConfigurationResult")({}) {}
export class GetTeamsChannelConfigurationRequest extends S.Class<GetTeamsChannelConfigurationRequest>("GetTeamsChannelConfigurationRequest")({ChatConfigurationArn: S.String}) {}
export class ListAssociationsRequest extends S.Class<ListAssociationsRequest>("ListAssociationsRequest")({ChatConfiguration: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTeamsChannelConfigurationsRequest extends S.Class<ListTeamsChannelConfigurationsRequest>("ListTeamsChannelConfigurationsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), TeamId: S.optional(S.String)}) {}
export class ListMicrosoftTeamsConfiguredTeamsRequest extends S.Class<ListMicrosoftTeamsConfiguredTeamsRequest>("ListMicrosoftTeamsConfiguredTeamsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListMicrosoftTeamsUserIdentitiesRequest extends S.Class<ListMicrosoftTeamsUserIdentitiesRequest>("ListMicrosoftTeamsUserIdentitiesRequest")({ChatConfigurationArn: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateAccountPreferencesRequest extends S.Class<UpdateAccountPreferencesRequest>("UpdateAccountPreferencesRequest")({UserAuthorizationRequired: S.optional(S.Boolean), TrainingDataCollectionEnabled: S.optional(S.Boolean)}) {}
export class UpdateChimeWebhookConfigurationRequest extends S.Class<UpdateChimeWebhookConfigurationRequest>("UpdateChimeWebhookConfigurationRequest")({ChatConfigurationArn: S.String, WebhookDescription: S.optional(S.String), WebhookUrl: S.optional(S.String), SnsTopicArns: S.optional(SnsTopicArnList), IamRoleArn: S.optional(S.String), LoggingLevel: S.optional(S.String)}) {}
export class UpdateTeamsChannelConfigurationRequest extends S.Class<UpdateTeamsChannelConfigurationRequest>("UpdateTeamsChannelConfigurationRequest")({ChatConfigurationArn: S.String, ChannelId: S.String, ChannelName: S.optional(S.String), SnsTopicArns: S.optional(SnsTopicArnList), IamRoleArn: S.optional(S.String), LoggingLevel: S.optional(S.String), GuardrailPolicyArns: S.optional(GuardrailPolicyArnList), UserAuthorizationRequired: S.optional(S.Boolean)}) {}
export class UpdateSlackChannelConfigurationRequest extends S.Class<UpdateSlackChannelConfigurationRequest>("UpdateSlackChannelConfigurationRequest")({ChatConfigurationArn: S.String, SlackChannelId: S.String, SlackChannelName: S.optional(S.String), SnsTopicArns: S.optional(SnsTopicArnList), IamRoleArn: S.optional(S.String), LoggingLevel: S.optional(S.String), GuardrailPolicyArns: S.optional(GuardrailPolicyArnList), UserAuthorizationRequired: S.optional(S.Boolean)}) {}
export class SlackChannelConfiguration extends S.Class<SlackChannelConfiguration>("SlackChannelConfiguration")({SlackTeamName: S.String, SlackTeamId: S.String, SlackChannelId: S.String, SlackChannelName: S.String, ChatConfigurationArn: S.String, IamRoleArn: S.String, SnsTopicArns: SnsTopicArnList, ConfigurationName: S.optional(S.String), LoggingLevel: S.optional(S.String), GuardrailPolicyArns: S.optional(GuardrailPolicyArnList), UserAuthorizationRequired: S.optional(S.Boolean), Tags: S.optional(Tags), State: S.optional(S.String), StateReason: S.optional(S.String)}) {}
export const SlackChannelConfigurationList = S.Array(SlackChannelConfiguration);
export class AccountPreferences extends S.Class<AccountPreferences>("AccountPreferences")({UserAuthorizationRequired: S.optional(S.Boolean), TrainingDataCollectionEnabled: S.optional(S.Boolean)}) {}
export class TeamsChannelConfiguration extends S.Class<TeamsChannelConfiguration>("TeamsChannelConfiguration")({ChannelId: S.String, ChannelName: S.optional(S.String), TeamId: S.String, TeamName: S.optional(S.String), TenantId: S.String, ChatConfigurationArn: S.String, IamRoleArn: S.String, SnsTopicArns: SnsTopicArnList, ConfigurationName: S.optional(S.String), LoggingLevel: S.optional(S.String), GuardrailPolicyArns: S.optional(GuardrailPolicyArnList), UserAuthorizationRequired: S.optional(S.Boolean), Tags: S.optional(Tags), State: S.optional(S.String), StateReason: S.optional(S.String)}) {}
export const TeamChannelConfigurationsList = S.Array(TeamsChannelConfiguration);
export class CreateChimeWebhookConfigurationRequest extends S.Class<CreateChimeWebhookConfigurationRequest>("CreateChimeWebhookConfigurationRequest")({WebhookDescription: S.String, WebhookUrl: S.String, SnsTopicArns: SnsTopicArnList, IamRoleArn: S.String, ConfigurationName: S.String, LoggingLevel: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class DescribeSlackChannelConfigurationsResult extends S.Class<DescribeSlackChannelConfigurationsResult>("DescribeSlackChannelConfigurationsResult")({NextToken: S.optional(S.String), SlackChannelConfigurations: S.optional(SlackChannelConfigurationList)}) {}
export class GetAccountPreferencesResult extends S.Class<GetAccountPreferencesResult>("GetAccountPreferencesResult")({AccountPreferences: S.optional(AccountPreferences)}) {}
export class GetTeamsChannelConfigurationResult extends S.Class<GetTeamsChannelConfigurationResult>("GetTeamsChannelConfigurationResult")({ChannelConfiguration: S.optional(TeamsChannelConfiguration)}) {}
export class ListTeamsChannelConfigurationsResult extends S.Class<ListTeamsChannelConfigurationsResult>("ListTeamsChannelConfigurationsResult")({NextToken: S.optional(S.String), TeamChannelConfigurations: S.optional(TeamChannelConfigurationsList)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class UpdateAccountPreferencesResult extends S.Class<UpdateAccountPreferencesResult>("UpdateAccountPreferencesResult")({AccountPreferences: S.optional(AccountPreferences)}) {}
export class ChimeWebhookConfiguration extends S.Class<ChimeWebhookConfiguration>("ChimeWebhookConfiguration")({WebhookDescription: S.String, ChatConfigurationArn: S.String, IamRoleArn: S.String, SnsTopicArns: SnsTopicArnList, ConfigurationName: S.optional(S.String), LoggingLevel: S.optional(S.String), Tags: S.optional(Tags), State: S.optional(S.String), StateReason: S.optional(S.String)}) {}
export class UpdateChimeWebhookConfigurationResult extends S.Class<UpdateChimeWebhookConfigurationResult>("UpdateChimeWebhookConfigurationResult")({WebhookConfiguration: S.optional(ChimeWebhookConfiguration)}) {}
export class UpdateTeamsChannelConfigurationResult extends S.Class<UpdateTeamsChannelConfigurationResult>("UpdateTeamsChannelConfigurationResult")({ChannelConfiguration: S.optional(TeamsChannelConfiguration)}) {}
export class UpdateSlackChannelConfigurationResult extends S.Class<UpdateSlackChannelConfigurationResult>("UpdateSlackChannelConfigurationResult")({ChannelConfiguration: S.optional(SlackChannelConfiguration)}) {}
export const ChimeWebhookConfigurationList = S.Array(ChimeWebhookConfiguration);
export class SlackUserIdentity extends S.Class<SlackUserIdentity>("SlackUserIdentity")({IamRoleArn: S.String, ChatConfigurationArn: S.String, SlackTeamId: S.String, SlackUserId: S.String, AwsUserIdentity: S.optional(S.String)}) {}
export const SlackUserIdentitiesList = S.Array(SlackUserIdentity);
export class SlackWorkspace extends S.Class<SlackWorkspace>("SlackWorkspace")({SlackTeamId: S.String, SlackTeamName: S.String, State: S.optional(S.String), StateReason: S.optional(S.String)}) {}
export const SlackWorkspacesList = S.Array(SlackWorkspace);
export class AssociationListing extends S.Class<AssociationListing>("AssociationListing")({Resource: S.String}) {}
export const AssociationList = S.Array(AssociationListing);
export class ConfiguredTeam extends S.Class<ConfiguredTeam>("ConfiguredTeam")({TenantId: S.String, TeamId: S.String, TeamName: S.optional(S.String), State: S.optional(S.String), StateReason: S.optional(S.String)}) {}
export const ConfiguredTeamsList = S.Array(ConfiguredTeam);
export class TeamsUserIdentity extends S.Class<TeamsUserIdentity>("TeamsUserIdentity")({IamRoleArn: S.String, ChatConfigurationArn: S.String, TeamId: S.String, UserId: S.optional(S.String), AwsUserIdentity: S.optional(S.String), TeamsChannelId: S.optional(S.String), TeamsTenantId: S.optional(S.String)}) {}
export const TeamsUserIdentitiesList = S.Array(TeamsUserIdentity);
export class CreateChimeWebhookConfigurationResult extends S.Class<CreateChimeWebhookConfigurationResult>("CreateChimeWebhookConfigurationResult")({WebhookConfiguration: S.optional(ChimeWebhookConfiguration)}) {}
export class CreateTeamsChannelConfigurationResult extends S.Class<CreateTeamsChannelConfigurationResult>("CreateTeamsChannelConfigurationResult")({ChannelConfiguration: S.optional(TeamsChannelConfiguration)}) {}
export class CreateSlackChannelConfigurationResult extends S.Class<CreateSlackChannelConfigurationResult>("CreateSlackChannelConfigurationResult")({ChannelConfiguration: S.optional(SlackChannelConfiguration)}) {}
export class DescribeChimeWebhookConfigurationsResult extends S.Class<DescribeChimeWebhookConfigurationsResult>("DescribeChimeWebhookConfigurationsResult")({NextToken: S.optional(S.String), WebhookConfigurations: S.optional(ChimeWebhookConfigurationList)}) {}
export class DescribeSlackUserIdentitiesResult extends S.Class<DescribeSlackUserIdentitiesResult>("DescribeSlackUserIdentitiesResult")({SlackUserIdentities: S.optional(SlackUserIdentitiesList), NextToken: S.optional(S.String)}) {}
export class DescribeSlackWorkspacesResult extends S.Class<DescribeSlackWorkspacesResult>("DescribeSlackWorkspacesResult")({SlackWorkspaces: S.optional(SlackWorkspacesList), NextToken: S.optional(S.String)}) {}
export class ListAssociationsResult extends S.Class<ListAssociationsResult>("ListAssociationsResult")({Associations: AssociationList, NextToken: S.optional(S.String)}) {}
export class ListMicrosoftTeamsConfiguredTeamsResult extends S.Class<ListMicrosoftTeamsConfiguredTeamsResult>("ListMicrosoftTeamsConfiguredTeamsResult")({ConfiguredTeams: S.optional(ConfiguredTeamsList), NextToken: S.optional(S.String)}) {}
export class ListMicrosoftTeamsUserIdentitiesResult extends S.Class<ListMicrosoftTeamsUserIdentitiesResult>("ListMicrosoftTeamsUserIdentitiesResult")({TeamsUserIdentities: S.optional(TeamsUserIdentitiesList), NextToken: S.optional(S.String)}) {}

//# Errors
export class InternalServiceError extends S.TaggedError<InternalServiceError>()("InternalServiceError", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class DeleteChimeWebhookConfigurationException extends S.TaggedError<DeleteChimeWebhookConfigurationException>()("DeleteChimeWebhookConfigurationException", {Message: S.optional(S.String)}) {};
export class DeleteTeamsChannelConfigurationException extends S.TaggedError<DeleteTeamsChannelConfigurationException>()("DeleteTeamsChannelConfigurationException", {Message: S.optional(S.String)}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class DeleteTeamsConfiguredTeamException extends S.TaggedError<DeleteTeamsConfiguredTeamException>()("DeleteTeamsConfiguredTeamException", {Message: S.optional(S.String)}) {};
export class DeleteMicrosoftTeamsUserIdentityException extends S.TaggedError<DeleteMicrosoftTeamsUserIdentityException>()("DeleteMicrosoftTeamsUserIdentityException", {Message: S.optional(S.String)}) {};
export class DeleteSlackChannelConfigurationException extends S.TaggedError<DeleteSlackChannelConfigurationException>()("DeleteSlackChannelConfigurationException", {Message: S.optional(S.String)}) {};
export class DeleteSlackUserIdentityException extends S.TaggedError<DeleteSlackUserIdentityException>()("DeleteSlackUserIdentityException", {Message: S.optional(S.String)}) {};
export class DeleteSlackWorkspaceAuthorizationFault extends S.TaggedError<DeleteSlackWorkspaceAuthorizationFault>()("DeleteSlackWorkspaceAuthorizationFault", {Message: S.optional(S.String)}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class DescribeSlackChannelConfigurationsException extends S.TaggedError<DescribeSlackChannelConfigurationsException>()("DescribeSlackChannelConfigurationsException", {Message: S.optional(S.String)}) {};
export class GetAccountPreferencesException extends S.TaggedError<GetAccountPreferencesException>()("GetAccountPreferencesException", {Message: S.optional(S.String)}) {};
export class GetTeamsChannelConfigurationException extends S.TaggedError<GetTeamsChannelConfigurationException>()("GetTeamsChannelConfigurationException", {Message: S.optional(S.String)}) {};
export class ListTeamsChannelConfigurationsException extends S.TaggedError<ListTeamsChannelConfigurationsException>()("ListTeamsChannelConfigurationsException", {Message: S.optional(S.String)}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {message: S.optional(S.String)}) {};
export class UpdateAccountPreferencesException extends S.TaggedError<UpdateAccountPreferencesException>()("UpdateAccountPreferencesException", {Message: S.optional(S.String)}) {};
export class UpdateChimeWebhookConfigurationException extends S.TaggedError<UpdateChimeWebhookConfigurationException>()("UpdateChimeWebhookConfigurationException", {Message: S.optional(S.String)}) {};
export class UpdateTeamsChannelConfigurationException extends S.TaggedError<UpdateTeamsChannelConfigurationException>()("UpdateTeamsChannelConfigurationException", {Message: S.optional(S.String)}) {};
export class UpdateSlackChannelConfigurationException extends S.TaggedError<UpdateSlackChannelConfigurationException>()("UpdateSlackChannelConfigurationException", {Message: S.optional(S.String)}) {};
export class CreateTeamsChannelConfigurationException extends S.TaggedError<CreateTeamsChannelConfigurationException>()("CreateTeamsChannelConfigurationException", {Message: S.optional(S.String)}) {};
export class CreateSlackChannelConfigurationException extends S.TaggedError<CreateSlackChannelConfigurationException>()("CreateSlackChannelConfigurationException", {Message: S.optional(S.String)}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class DescribeChimeWebhookConfigurationsException extends S.TaggedError<DescribeChimeWebhookConfigurationsException>()("DescribeChimeWebhookConfigurationsException", {Message: S.optional(S.String)}) {};
export class DescribeSlackUserIdentitiesException extends S.TaggedError<DescribeSlackUserIdentitiesException>()("DescribeSlackUserIdentitiesException", {Message: S.optional(S.String)}) {};
export class DescribeSlackWorkspacesException extends S.TaggedError<DescribeSlackWorkspacesException>()("DescribeSlackWorkspacesException", {Message: S.optional(S.String)}) {};
export class ListMicrosoftTeamsConfiguredTeamsException extends S.TaggedError<ListMicrosoftTeamsConfiguredTeamsException>()("ListMicrosoftTeamsConfiguredTeamsException", {Message: S.optional(S.String)}) {};
export class ListMicrosoftTeamsUserIdentitiesException extends S.TaggedError<ListMicrosoftTeamsUserIdentitiesException>()("ListMicrosoftTeamsUserIdentitiesException", {Message: S.optional(S.String)}) {};
export class CreateChimeWebhookConfigurationException extends S.TaggedError<CreateChimeWebhookConfigurationException>()("CreateChimeWebhookConfigurationException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes a Microsoft Teams channel configuration for AWS Chatbot
 */export const deleteMicrosoftTeamsChannelConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/delete-ms-teams-channel-configuration", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.DeleteMicrosoftTeamsChannelConfiguration" }, DeleteTeamsChannelConfigurationRequest, DeleteTeamsChannelConfigurationResult, [DeleteTeamsChannelConfigurationException, InvalidParameterException, InvalidRequestException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the Microsoft Teams team authorization allowing for channels to be configured in that Microsoft Teams team. Note that the Microsoft Teams team must have no channels configured to remove it.
 */export const deleteMicrosoftTeamsConfiguredTeam = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/delete-ms-teams-configured-teams", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.DeleteMicrosoftTeamsConfiguredTeam" }, DeleteTeamsConfiguredTeamRequest, DeleteTeamsConfiguredTeamResult, [DeleteTeamsConfiguredTeamException, InvalidParameterException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Identifes a user level permission for a channel configuration.
 */export const deleteMicrosoftTeamsUserIdentity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/delete-ms-teams-user-identity", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.DeleteMicrosoftTeamsUserIdentity" }, DeleteMicrosoftTeamsUserIdentityRequest, DeleteMicrosoftTeamsUserIdentityResult, [DeleteMicrosoftTeamsUserIdentityException, InvalidParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Slack channel configuration for AWS Chatbot
 */export const deleteSlackChannelConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/delete-slack-channel-configuration", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.DeleteSlackChannelConfiguration" }, DeleteSlackChannelConfigurationRequest, DeleteSlackChannelConfigurationResult, [DeleteSlackChannelConfigurationException, InvalidParameterException, InvalidRequestException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a user level permission for a Slack channel configuration.
 */export const deleteSlackUserIdentity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/delete-slack-user-identity", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.DeleteSlackUserIdentity" }, DeleteSlackUserIdentityRequest, DeleteSlackUserIdentityResult, [DeleteSlackUserIdentityException, InvalidParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the Slack workspace authorization that allows channels to be configured in that workspace. This requires all configured channels in the workspace to be deleted.
 */export const deleteSlackWorkspaceAuthorization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/delete-slack-workspace-authorization", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.DeleteSlackWorkspaceAuthorization" }, DeleteSlackWorkspaceAuthorizationRequest, DeleteSlackWorkspaceAuthorizationResult, [DeleteSlackWorkspaceAuthorizationFault, InvalidParameterException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Unlink a resource, for example a custom action, from a channel configuration.
 */export const disassociateFromConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/disassociate-from-configuration", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.DisassociateFromConfiguration" }, DisassociateFromConfigurationRequest, DisassociateFromConfigurationResult, [InternalServiceError, InvalidRequestException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/list-tags-for-resource", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServiceError, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/untag-resource", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServiceError, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Links a resource (for example, a custom action) to a channel configuration.
 */export const associateToConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/associate-to-configuration", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.AssociateToConfiguration" }, AssociateToConfigurationRequest, AssociateToConfigurationResult, [InternalServiceError, InvalidRequestException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Amazon Chime webhook configuration for AWS Chatbot.
 */export const deleteChimeWebhookConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/delete-chime-webhook-configuration", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.DeleteChimeWebhookConfiguration" }, DeleteChimeWebhookConfigurationRequest, DeleteChimeWebhookConfigurationResult, [DeleteChimeWebhookConfigurationException, InvalidParameterException, InvalidRequestException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists Slack channel configurations optionally filtered by ChatConfigurationArn
 */export const describeSlackChannelConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/describe-slack-channel-configurations", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.DescribeSlackChannelConfigurations" }, DescribeSlackChannelConfigurationsRequest, DescribeSlackChannelConfigurationsResult, [DescribeSlackChannelConfigurationsException, InvalidParameterException, InvalidRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns AWS Chatbot account preferences.
 */export const getAccountPreferences = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/get-account-preferences", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.GetAccountPreferences" }, GetAccountPreferencesRequest, GetAccountPreferencesResult, [GetAccountPreferencesException, InvalidRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a Microsoft Teams channel configuration in an AWS account.
 */export const getMicrosoftTeamsChannelConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/get-ms-teams-channel-configuration", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.GetMicrosoftTeamsChannelConfiguration" }, GetTeamsChannelConfigurationRequest, GetTeamsChannelConfigurationResult, [GetTeamsChannelConfigurationException, InvalidParameterException, InvalidRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists resources associated with a channel configuration.
 */export const listAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/list-associations", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.ListAssociations" }, ListAssociationsRequest, ListAssociationsResult, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all AWS Chatbot Microsoft Teams channel configurations in an AWS account.
 */export const listMicrosoftTeamsChannelConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/list-ms-teams-channel-configurations", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.ListMicrosoftTeamsChannelConfigurations" }, ListTeamsChannelConfigurationsRequest, ListTeamsChannelConfigurationsResult, [InvalidParameterException, InvalidRequestException, ListTeamsChannelConfigurationsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/tag-resource", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServiceError, ResourceNotFoundException, ServiceUnavailableException, TooManyTagsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates AWS Chatbot account preferences.
 */export const updateAccountPreferences = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/update-account-preferences", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.UpdateAccountPreferences" }, UpdateAccountPreferencesRequest, UpdateAccountPreferencesResult, [InvalidParameterException, InvalidRequestException, UpdateAccountPreferencesException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Amazon Chime webhook configuration.
 */export const updateChimeWebhookConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/update-chime-webhook-configuration", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.UpdateChimeWebhookConfiguration" }, UpdateChimeWebhookConfigurationRequest, UpdateChimeWebhookConfigurationResult, [InvalidParameterException, InvalidRequestException, ResourceNotFoundException, UpdateChimeWebhookConfigurationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an Microsoft Teams channel configuration.
 */export const updateMicrosoftTeamsChannelConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/update-ms-teams-channel-configuration", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.UpdateMicrosoftTeamsChannelConfiguration" }, UpdateTeamsChannelConfigurationRequest, UpdateTeamsChannelConfigurationResult, [InvalidParameterException, InvalidRequestException, ResourceNotFoundException, UpdateTeamsChannelConfigurationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Slack channel configuration.
 */export const updateSlackChannelConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/update-slack-channel-configuration", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.UpdateSlackChannelConfiguration" }, UpdateSlackChannelConfigurationRequest, UpdateSlackChannelConfigurationResult, [InvalidParameterException, InvalidRequestException, ResourceNotFoundException, UpdateSlackChannelConfigurationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an AWS Chatbot confugration for Slack.
 */export const createSlackChannelConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/create-slack-channel-configuration", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.CreateSlackChannelConfiguration" }, CreateSlackChannelConfigurationRequest, CreateSlackChannelConfigurationResult, [ConflictException, CreateSlackChannelConfigurationException, InvalidParameterException, InvalidRequestException, LimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists Amazon Chime webhook configurations optionally filtered by ChatConfigurationArn
 */export const describeChimeWebhookConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/describe-chime-webhook-configurations", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.DescribeChimeWebhookConfigurations" }, DescribeChimeWebhookConfigurationsRequest, DescribeChimeWebhookConfigurationsResult, [DescribeChimeWebhookConfigurationsException, InvalidParameterException, InvalidRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all Slack user identities with a mapped role.
 */export const describeSlackUserIdentities = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/describe-slack-user-identities", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.DescribeSlackUserIdentities" }, DescribeSlackUserIdentitiesRequest, DescribeSlackUserIdentitiesResult, [DescribeSlackUserIdentitiesException, InvalidParameterException, InvalidRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all authorized Slack workspaces connected to the AWS Account onboarded with AWS Chatbot.
 */export const describeSlackWorkspaces = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/describe-slack-workspaces", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.DescribeSlackWorkspaces" }, DescribeSlackWorkspacesRequest, DescribeSlackWorkspacesResult, [DescribeSlackWorkspacesException, InvalidParameterException, InvalidRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all authorized Microsoft Teams for an AWS Account
 */export const listMicrosoftTeamsConfiguredTeams = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/list-ms-teams-configured-teams", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.ListMicrosoftTeamsConfiguredTeams" }, ListMicrosoftTeamsConfiguredTeamsRequest, ListMicrosoftTeamsConfiguredTeamsResult, [InvalidParameterException, InvalidRequestException, ListMicrosoftTeamsConfiguredTeamsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A list all Microsoft Teams user identities with a mapped role.
 */export const listMicrosoftTeamsUserIdentities = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/list-ms-teams-user-identities", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.ListMicrosoftTeamsUserIdentities" }, ListMicrosoftTeamsUserIdentitiesRequest, ListMicrosoftTeamsUserIdentitiesResult, [InvalidParameterException, InvalidRequestException, ListMicrosoftTeamsUserIdentitiesException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an AWS Chatbot configuration for Amazon Chime.
 */export const createChimeWebhookConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/create-chime-webhook-configuration", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.CreateChimeWebhookConfiguration" }, CreateChimeWebhookConfigurationRequest, CreateChimeWebhookConfigurationResult, [ConflictException, CreateChimeWebhookConfigurationException, InvalidParameterException, InvalidRequestException, LimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an AWS Chatbot configuration for Microsoft Teams.
 */export const createMicrosoftTeamsChannelConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-11", uri: "/create-ms-teams-channel-configuration", sdkId: "chatbot", sigV4ServiceName: "chatbot", name: "WheatleyOrchestration_20171011.CreateMicrosoftTeamsChannelConfiguration" }, CreateTeamsChannelConfigurationRequest, CreateTeamsChannelConfigurationResult, [ConflictException, CreateTeamsChannelConfigurationException, InvalidParameterException, InvalidRequestException, LimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteAccountAliasRequest extends S.Class<DeleteAccountAliasRequest>("DeleteAccountAliasRequest")({}) {}
export class DeleteAccountAliasResult extends S.Class<DeleteAccountAliasResult>("DeleteAccountAliasResult")({}) {}
export class GetAccountAliasRequest extends S.Class<GetAccountAliasRequest>("GetAccountAliasRequest")({}) {}
export class CreateSlackChannelConfigurationRequest extends S.Class<CreateSlackChannelConfigurationRequest>("CreateSlackChannelConfigurationRequest")({teamId: S.String, channelId: S.String, channelName: S.optional(S.String), notifyOnCreateOrReopenCase: S.optional(S.Boolean), notifyOnAddCorrespondenceToCase: S.optional(S.Boolean), notifyOnResolveCase: S.optional(S.Boolean), notifyOnCaseSeverity: S.String, channelRoleArn: S.String}) {}
export class CreateSlackChannelConfigurationResult extends S.Class<CreateSlackChannelConfigurationResult>("CreateSlackChannelConfigurationResult")({}) {}
export class DeleteSlackChannelConfigurationRequest extends S.Class<DeleteSlackChannelConfigurationRequest>("DeleteSlackChannelConfigurationRequest")({teamId: S.String, channelId: S.String}) {}
export class DeleteSlackChannelConfigurationResult extends S.Class<DeleteSlackChannelConfigurationResult>("DeleteSlackChannelConfigurationResult")({}) {}
export class DeleteSlackWorkspaceConfigurationRequest extends S.Class<DeleteSlackWorkspaceConfigurationRequest>("DeleteSlackWorkspaceConfigurationRequest")({teamId: S.String}) {}
export class DeleteSlackWorkspaceConfigurationResult extends S.Class<DeleteSlackWorkspaceConfigurationResult>("DeleteSlackWorkspaceConfigurationResult")({}) {}
export class GetAccountAliasResult extends S.Class<GetAccountAliasResult>("GetAccountAliasResult")({accountAlias: S.optional(S.String)}) {}
export class ListSlackChannelConfigurationsRequest extends S.Class<ListSlackChannelConfigurationsRequest>("ListSlackChannelConfigurationsRequest")({nextToken: S.optional(S.String)}) {}
export class ListSlackWorkspaceConfigurationsRequest extends S.Class<ListSlackWorkspaceConfigurationsRequest>("ListSlackWorkspaceConfigurationsRequest")({nextToken: S.optional(S.String)}) {}
export class PutAccountAliasRequest extends S.Class<PutAccountAliasRequest>("PutAccountAliasRequest")({accountAlias: S.String}) {}
export class PutAccountAliasResult extends S.Class<PutAccountAliasResult>("PutAccountAliasResult")({}) {}
export class RegisterSlackWorkspaceForOrganizationRequest extends S.Class<RegisterSlackWorkspaceForOrganizationRequest>("RegisterSlackWorkspaceForOrganizationRequest")({teamId: S.String}) {}
export class UpdateSlackChannelConfigurationRequest extends S.Class<UpdateSlackChannelConfigurationRequest>("UpdateSlackChannelConfigurationRequest")({teamId: S.String, channelId: S.String, channelName: S.optional(S.String), notifyOnCreateOrReopenCase: S.optional(S.Boolean), notifyOnAddCorrespondenceToCase: S.optional(S.Boolean), notifyOnResolveCase: S.optional(S.Boolean), notifyOnCaseSeverity: S.optional(S.String), channelRoleArn: S.optional(S.String)}) {}
export class RegisterSlackWorkspaceForOrganizationResult extends S.Class<RegisterSlackWorkspaceForOrganizationResult>("RegisterSlackWorkspaceForOrganizationResult")({teamId: S.optional(S.String), teamName: S.optional(S.String), accountType: S.optional(S.String)}) {}
export class UpdateSlackChannelConfigurationResult extends S.Class<UpdateSlackChannelConfigurationResult>("UpdateSlackChannelConfigurationResult")({teamId: S.optional(S.String), channelId: S.optional(S.String), channelName: S.optional(S.String), notifyOnCreateOrReopenCase: S.optional(S.Boolean), notifyOnAddCorrespondenceToCase: S.optional(S.Boolean), notifyOnResolveCase: S.optional(S.Boolean), notifyOnCaseSeverity: S.optional(S.String), channelRoleArn: S.optional(S.String)}) {}
export class SlackChannelConfiguration extends S.Class<SlackChannelConfiguration>("SlackChannelConfiguration")({teamId: S.String, channelId: S.String, channelName: S.optional(S.String), notifyOnCreateOrReopenCase: S.optional(S.Boolean), notifyOnAddCorrespondenceToCase: S.optional(S.Boolean), notifyOnResolveCase: S.optional(S.Boolean), notifyOnCaseSeverity: S.optional(S.String), channelRoleArn: S.optional(S.String)}) {}
export const slackChannelConfigurationList = S.Array(SlackChannelConfiguration);
export class SlackWorkspaceConfiguration extends S.Class<SlackWorkspaceConfiguration>("SlackWorkspaceConfiguration")({teamId: S.String, teamName: S.optional(S.String), allowOrganizationMemberAccount: S.optional(S.Boolean)}) {}
export const SlackWorkspaceConfigurationList = S.Array(SlackWorkspaceConfiguration);
export class ListSlackChannelConfigurationsResult extends S.Class<ListSlackChannelConfigurationsResult>("ListSlackChannelConfigurationsResult")({nextToken: S.optional(S.String), slackChannelConfigurations: slackChannelConfigurationList}) {}
export class ListSlackWorkspaceConfigurationsResult extends S.Class<ListSlackWorkspaceConfigurationsResult>("ListSlackWorkspaceConfigurationsResult")({nextToken: S.optional(S.String), slackWorkspaceConfigurations: S.optional(SlackWorkspaceConfigurationList)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of
 * the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
 */export const getAccountAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-20", uri: "/control/get-account-alias", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.GetAccountAlias" }, GetAccountAliasRequest, GetAccountAliasResult, [InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the
 * Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the
 * Amazon Web Services Support App.
 */export const putAccountAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-20", uri: "/control/put-account-alias", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.PutAccountAlias" }, PutAccountAliasRequest, PutAccountAliasResult, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an alias for an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the
 * Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
 */export const deleteAccountAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-20", uri: "/control/delete-account-alias", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.DeleteAccountAlias" }, DeleteAccountAliasRequest, DeleteAccountAliasResult, [AccessDeniedException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't
 * delete your Slack channel.
 */export const deleteSlackChannelConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-20", uri: "/control/delete-slack-channel-configuration", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.DeleteSlackChannelConfiguration" }, DeleteSlackChannelConfigurationRequest, DeleteSlackChannelConfigurationResult, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't
 * delete your Slack workspace.
 */export const deleteSlackWorkspaceConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-20", uri: "/control/delete-slack-workspace-configuration", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.DeleteSlackWorkspaceConfiguration" }, DeleteSlackWorkspaceConfigurationRequest, DeleteSlackWorkspaceConfigurationResult, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be
 * part of an organization in Organizations.
 * 
 * 
 * If you're the *management account* and you want to register Slack
 * workspaces for your organization, you must complete the following tasks:
 * 
 * 
 * 
 * - Sign in to the Amazon Web Services Support Center and
 * authorize the Slack workspaces where you want your organization to have access to. See
 * Authorize a Slack workspace in the Amazon Web Services Support User
 * Guide.
 * 
 * 
 * 
 * - Call the `RegisterSlackWorkspaceForOrganization` API to authorize each
 * Slack workspace for the organization.
 * 
 * 
 * 
 * 
 * After the management account authorizes the Slack workspace, member accounts can call this
 * API to authorize the same Slack workspace for their individual accounts. Member accounts don't
 * need to authorize the Slack workspace manually through the Amazon Web Services Support Center.
 * 
 * 
 * To use the Amazon Web Services Support App, each account must then complete the following tasks:
 * 
 * 
 * 
 * - Create an Identity and Access Management (IAM) role with the required permission. For more information,
 * see Managing access to the Amazon Web Services Support App.
 * 
 * 
 * 
 * - Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For
 * more information, see Configuring a Slack channel.
 */export const registerSlackWorkspaceForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-20", uri: "/control/register-slack-workspace-for-organization", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.RegisterSlackWorkspaceForOrganization" }, RegisterSlackWorkspaceForOrganizationRequest, RegisterSlackWorkspaceForOrganizationResult, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the configuration for a Slack channel, such as case update notifications.
 */export const updateSlackChannelConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-20", uri: "/control/update-slack-channel-configuration", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.UpdateSlackChannelConfiguration" }, UpdateSlackChannelConfigurationRequest, UpdateSlackChannelConfigurationResult, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Slack channel configuration for your Amazon Web Services account.
 * 
 * 
 * 
 * 
 * 
 * - You can add up to 5 Slack workspaces for your account.
 * 
 * 
 * 
 * - You can add up to 20 Slack channels for your account.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can
 * add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that
 * you need to manage support cases for your organization. This can reduce the notifications
 * about case updates that you receive in the Slack channel.
 * 
 * 
 * 
 * 
 * We recommend that you choose a private Slack channel so that only members in that
 * channel have read and write access to your support cases. Anyone in your Slack channel can
 * create, update, or resolve support cases for your account. Users require an invitation to
 * join private channels.
 */export const createSlackChannelConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-20", uri: "/control/create-slack-channel-configuration", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.CreateSlackChannelConfiguration" }, CreateSlackChannelConfigurationRequest, CreateSlackChannelConfigurationResult, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Slack channel configurations for an Amazon Web Services account.
 */export const listSlackChannelConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-20", uri: "/control/list-slack-channel-configurations", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.ListSlackChannelConfigurations" }, ListSlackChannelConfigurationsRequest, ListSlackChannelConfigurationsResult, [AccessDeniedException, InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Slack workspace configurations for an Amazon Web Services account.
 */export const listSlackWorkspaceConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-20", uri: "/control/list-slack-workspace-configurations", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.ListSlackWorkspaceConfigurations" }, ListSlackWorkspaceConfigurationsRequest, ListSlackWorkspaceConfigurationsResult, [AccessDeniedException, InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

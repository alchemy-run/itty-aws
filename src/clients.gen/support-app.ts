import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const DeleteAccountAliasRequest = Schema.Struct({});
export const DeleteAccountAliasResult = Schema.Struct({});
export const GetAccountAliasRequest = Schema.Struct({});
export const CreateSlackChannelConfigurationRequest = Schema.Struct({teamId: Schema.String, channelId: Schema.String, channelName: Schema.optional(Schema.String), notifyOnCreateOrReopenCase: Schema.optional(Schema.Boolean), notifyOnAddCorrespondenceToCase: Schema.optional(Schema.Boolean), notifyOnResolveCase: Schema.optional(Schema.Boolean), notifyOnCaseSeverity: Schema.String, channelRoleArn: Schema.String});
export const CreateSlackChannelConfigurationResult = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const DeleteSlackChannelConfigurationRequest = Schema.Struct({teamId: Schema.String, channelId: Schema.String});
export const DeleteSlackChannelConfigurationResult = Schema.Struct({});
export const DeleteSlackWorkspaceConfigurationRequest = Schema.Struct({teamId: Schema.String});
export const DeleteSlackWorkspaceConfigurationResult = Schema.Struct({});
export const GetAccountAliasResult = Schema.Struct({accountAlias: Schema.optional(Schema.String)});
export const ListSlackChannelConfigurationsRequest = Schema.Struct({nextToken: Schema.optional(Schema.String)});
export const ListSlackWorkspaceConfigurationsRequest = Schema.Struct({nextToken: Schema.optional(Schema.String)});
export const PutAccountAliasRequest = Schema.Struct({accountAlias: Schema.String});
export const PutAccountAliasResult = Schema.Struct({});
export const RegisterSlackWorkspaceForOrganizationRequest = Schema.Struct({teamId: Schema.String});
export const UpdateSlackChannelConfigurationRequest = Schema.Struct({teamId: Schema.String, channelId: Schema.String, channelName: Schema.optional(Schema.String), notifyOnCreateOrReopenCase: Schema.optional(Schema.Boolean), notifyOnAddCorrespondenceToCase: Schema.optional(Schema.Boolean), notifyOnResolveCase: Schema.optional(Schema.Boolean), notifyOnCaseSeverity: Schema.optional(Schema.String), channelRoleArn: Schema.optional(Schema.String)});
export const ConflictException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({message: Schema.optional(Schema.String)});
export const RegisterSlackWorkspaceForOrganizationResult = Schema.Struct({teamId: Schema.optional(Schema.String), teamName: Schema.optional(Schema.String), accountType: Schema.optional(Schema.String)});
export const UpdateSlackChannelConfigurationResult = Schema.Struct({teamId: Schema.optional(Schema.String), channelId: Schema.optional(Schema.String), channelName: Schema.optional(Schema.String), notifyOnCreateOrReopenCase: Schema.optional(Schema.Boolean), notifyOnAddCorrespondenceToCase: Schema.optional(Schema.Boolean), notifyOnResolveCase: Schema.optional(Schema.Boolean), notifyOnCaseSeverity: Schema.optional(Schema.String), channelRoleArn: Schema.optional(Schema.String)});
export const SlackChannelConfiguration = Schema.Struct({teamId: Schema.String, channelId: Schema.String, channelName: Schema.optional(Schema.String), notifyOnCreateOrReopenCase: Schema.optional(Schema.Boolean), notifyOnAddCorrespondenceToCase: Schema.optional(Schema.Boolean), notifyOnResolveCase: Schema.optional(Schema.Boolean), notifyOnCaseSeverity: Schema.optional(Schema.String), channelRoleArn: Schema.optional(Schema.String)});
export const slackChannelConfigurationList = Schema.Array(SlackChannelConfiguration);
export const SlackWorkspaceConfiguration = Schema.Struct({teamId: Schema.String, teamName: Schema.optional(Schema.String), allowOrganizationMemberAccount: Schema.optional(Schema.Boolean)});
export const SlackWorkspaceConfigurationList = Schema.Array(SlackWorkspaceConfiguration);
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ListSlackChannelConfigurationsResult = Schema.Struct({nextToken: Schema.optional(Schema.String), slackChannelConfigurations: slackChannelConfigurationList});
export const ListSlackWorkspaceConfigurationsResult = Schema.Struct({nextToken: Schema.optional(Schema.String), slackWorkspaceConfigurations: Schema.optional(SlackWorkspaceConfigurationList)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};

//# Operations
export const getAccountAlias = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-20", uri: "/control/get-account-alias", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.GetAccountAlias" }, GetAccountAliasRequest, GetAccountAliasResult, [InternalServerExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putAccountAlias = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-20", uri: "/control/put-account-alias", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.PutAccountAlias" }, PutAccountAliasRequest, PutAccountAliasResult, [AccessDeniedExceptionError, InternalServerExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteAccountAlias = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-20", uri: "/control/delete-account-alias", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.DeleteAccountAlias" }, DeleteAccountAliasRequest, DeleteAccountAliasResult, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteSlackChannelConfiguration = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-20", uri: "/control/delete-slack-channel-configuration", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.DeleteSlackChannelConfiguration" }, DeleteSlackChannelConfigurationRequest, DeleteSlackChannelConfigurationResult, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteSlackWorkspaceConfiguration = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-20", uri: "/control/delete-slack-workspace-configuration", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.DeleteSlackWorkspaceConfiguration" }, DeleteSlackWorkspaceConfigurationRequest, DeleteSlackWorkspaceConfigurationResult, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const registerSlackWorkspaceForOrganization = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-20", uri: "/control/register-slack-workspace-for-organization", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.RegisterSlackWorkspaceForOrganization" }, RegisterSlackWorkspaceForOrganizationRequest, RegisterSlackWorkspaceForOrganizationResult, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateSlackChannelConfiguration = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-20", uri: "/control/update-slack-channel-configuration", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.UpdateSlackChannelConfiguration" }, UpdateSlackChannelConfigurationRequest, UpdateSlackChannelConfigurationResult, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createSlackChannelConfiguration = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-20", uri: "/control/create-slack-channel-configuration", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.CreateSlackChannelConfiguration" }, CreateSlackChannelConfigurationRequest, CreateSlackChannelConfigurationResult, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSlackChannelConfigurations = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-20", uri: "/control/list-slack-channel-configurations", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.ListSlackChannelConfigurations" }, ListSlackChannelConfigurationsRequest, ListSlackChannelConfigurationsResult, [AccessDeniedExceptionError, InternalServerExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSlackWorkspaceConfigurations = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-20", uri: "/control/list-slack-workspace-configurations", method: "POST", sdkId: "Support App", sigV4ServiceName: "supportapp", name: "SupportApp.ListSlackWorkspaceConfigurations" }, ListSlackWorkspaceConfigurationsRequest, ListSlackWorkspaceConfigurationsResult, [AccessDeniedExceptionError, InternalServerExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

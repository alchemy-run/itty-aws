import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export class DeleteConfigurationManagerInput extends S.Class<DeleteConfigurationManagerInput>("DeleteConfigurationManagerInput")({ManagerArn: S.String}) {}
export class GetConfigurationInput extends S.Class<GetConfigurationInput>("GetConfigurationInput")({ConfigurationId: S.String}) {}
export class GetConfigurationManagerInput extends S.Class<GetConfigurationManagerInput>("GetConfigurationManagerInput")({ManagerArn: S.String}) {}
export const FilterValues = S.Array(S.String);
export class Filter extends S.Class<Filter>("Filter")({Key: S.String, Values: FilterValues}) {}
export const FiltersList = S.Array(Filter);
export class ListConfigurationsInput extends S.Class<ListConfigurationsInput>("ListConfigurationsInput")({StartingToken: S.optional(S.String), MaxItems: S.optional(S.Number), Filters: S.optional(FiltersList), ManagerArn: S.optional(S.String), ConfigurationDefinitionId: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export const TagsMap = S.Record({key: S.String, value: S.String});
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({ResourceArn: S.String, Tags: TagsMap}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({ResourceArn: S.String, TagKeys: TagKeys}) {}
export class UpdateConfigurationManagerInput extends S.Class<UpdateConfigurationManagerInput>("UpdateConfigurationManagerInput")({ManagerArn: S.String, Name: S.optional(S.String), Description: S.optional(S.String)}) {}
export class UpdateServiceSettingsInput extends S.Class<UpdateServiceSettingsInput>("UpdateServiceSettingsInput")({ExplorerEnablingRoleArn: S.optional(S.String)}) {}
export const ConfigurationParametersMap = S.Record({key: S.String, value: S.String});
export class ConfigurationDefinitionInput extends S.Class<ConfigurationDefinitionInput>("ConfigurationDefinitionInput")({Type: S.String, Parameters: ConfigurationParametersMap, TypeVersion: S.optional(S.String), LocalDeploymentExecutionRoleName: S.optional(S.String), LocalDeploymentAdministrationRoleArn: S.optional(S.String)}) {}
export const ConfigurationDefinitionsInputList = S.Array(ConfigurationDefinitionInput);
export class ServiceSettings extends S.Class<ServiceSettings>("ServiceSettings")({ExplorerEnablingRoleArn: S.optional(S.String)}) {}
export class QuickSetupTypeOutput extends S.Class<QuickSetupTypeOutput>("QuickSetupTypeOutput")({Type: S.optional(S.String), LatestVersion: S.optional(S.String)}) {}
export const QuickSetupTypeList = S.Array(QuickSetupTypeOutput);
export class CreateConfigurationManagerInput extends S.Class<CreateConfigurationManagerInput>("CreateConfigurationManagerInput")({Name: S.optional(S.String), Description: S.optional(S.String), ConfigurationDefinitions: ConfigurationDefinitionsInputList, Tags: S.optional(TagsMap)}) {}
export class GetServiceSettingsOutput extends S.Class<GetServiceSettingsOutput>("GetServiceSettingsOutput")({ServiceSettings: S.optional(ServiceSettings)}) {}
export class ListConfigurationManagersInput extends S.Class<ListConfigurationManagersInput>("ListConfigurationManagersInput")({StartingToken: S.optional(S.String), MaxItems: S.optional(S.Number), Filters: S.optional(FiltersList)}) {}
export class ListQuickSetupTypesOutput extends S.Class<ListQuickSetupTypesOutput>("ListQuickSetupTypesOutput")({QuickSetupTypeList: S.optional(QuickSetupTypeList)}) {}
export class UpdateConfigurationDefinitionInput extends S.Class<UpdateConfigurationDefinitionInput>("UpdateConfigurationDefinitionInput")({ManagerArn: S.String, Id: S.String, TypeVersion: S.optional(S.String), Parameters: S.optional(ConfigurationParametersMap), LocalDeploymentExecutionRoleName: S.optional(S.String), LocalDeploymentAdministrationRoleArn: S.optional(S.String)}) {}
export class ConfigurationDefinition extends S.Class<ConfigurationDefinition>("ConfigurationDefinition")({Type: S.String, Parameters: ConfigurationParametersMap, TypeVersion: S.optional(S.String), LocalDeploymentExecutionRoleName: S.optional(S.String), LocalDeploymentAdministrationRoleArn: S.optional(S.String), Id: S.optional(S.String)}) {}
export const ConfigurationDefinitionsList = S.Array(ConfigurationDefinition);
export const StatusDetails = S.Record({key: S.String, value: S.String});
export class StatusSummary extends S.Class<StatusSummary>("StatusSummary")({StatusType: S.String, Status: S.optional(S.String), StatusMessage: S.optional(S.String), LastUpdatedAt: S.Date, StatusDetails: S.optional(StatusDetails)}) {}
export const StatusSummariesList = S.Array(StatusSummary);
export class ConfigurationSummary extends S.Class<ConfigurationSummary>("ConfigurationSummary")({Id: S.optional(S.String), ManagerArn: S.optional(S.String), ConfigurationDefinitionId: S.optional(S.String), Type: S.optional(S.String), TypeVersion: S.optional(S.String), Region: S.optional(S.String), Account: S.optional(S.String), CreatedAt: S.optional(S.Date), FirstClassParameters: S.optional(ConfigurationParametersMap), StatusSummaries: S.optional(StatusSummariesList)}) {}
export const ConfigurationsList = S.Array(ConfigurationSummary);
export class TagEntry extends S.Class<TagEntry>("TagEntry")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const Tags = S.Array(TagEntry);
export class CreateConfigurationManagerOutput extends S.Class<CreateConfigurationManagerOutput>("CreateConfigurationManagerOutput")({ManagerArn: S.String}) {}
export class GetConfigurationManagerOutput extends S.Class<GetConfigurationManagerOutput>("GetConfigurationManagerOutput")({ManagerArn: S.String, Description: S.optional(S.String), Name: S.optional(S.String), CreatedAt: S.optional(S.Date), LastModifiedAt: S.optional(S.Date), StatusSummaries: S.optional(StatusSummariesList), ConfigurationDefinitions: S.optional(ConfigurationDefinitionsList), Tags: S.optional(TagsMap)}) {}
export class ListConfigurationsOutput extends S.Class<ListConfigurationsOutput>("ListConfigurationsOutput")({ConfigurationsList: S.optional(ConfigurationsList), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(Tags)}) {}
export class GetConfigurationOutput extends S.Class<GetConfigurationOutput>("GetConfigurationOutput")({Id: S.optional(S.String), ManagerArn: S.optional(S.String), ConfigurationDefinitionId: S.optional(S.String), Type: S.optional(S.String), TypeVersion: S.optional(S.String), Account: S.optional(S.String), Region: S.optional(S.String), CreatedAt: S.optional(S.Date), LastModifiedAt: S.optional(S.Date), StatusSummaries: S.optional(StatusSummariesList), Parameters: S.optional(ConfigurationParametersMap)}) {}
export class ConfigurationDefinitionSummary extends S.Class<ConfigurationDefinitionSummary>("ConfigurationDefinitionSummary")({Id: S.optional(S.String), Type: S.optional(S.String), TypeVersion: S.optional(S.String), FirstClassParameters: S.optional(ConfigurationParametersMap)}) {}
export const ConfigurationDefinitionSummariesList = S.Array(ConfigurationDefinitionSummary);
export class ConfigurationManagerSummary extends S.Class<ConfigurationManagerSummary>("ConfigurationManagerSummary")({ManagerArn: S.String, Description: S.optional(S.String), Name: S.optional(S.String), StatusSummaries: S.optional(StatusSummariesList), ConfigurationDefinitionSummaries: S.optional(ConfigurationDefinitionSummariesList)}) {}
export const ConfigurationManagerList = S.Array(ConfigurationManagerSummary);
export class ListConfigurationManagersOutput extends S.Class<ListConfigurationManagersOutput>("ListConfigurationManagersOutput")({ConfigurationManagersList: S.optional(ConfigurationManagerList), NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * Returns settings configured for Quick Setup in the requesting Amazon Web Services account and Amazon Web Services Region.
 */export const getServiceSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/serviceSettings", method: "GET", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.GetServiceSettings" }, S.Struct({}), GetServiceSettingsOutput, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the available Quick Setup types.
 */export const listQuickSetupTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/listQuickSetupTypes", method: "GET", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.ListQuickSetupTypes" }, S.Struct({}), ListQuickSetupTypesOutput, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns key-value pairs of metadata to Amazon Web Services resources.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "PUT", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.TagResource" }, TagResourceInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from the specified resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.UntagResource" }, UntagResourceInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Quick Setup configuration definition.
 */export const updateConfigurationDefinition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/configurationDefinition/{ManagerArn}/{Id}", method: "PUT", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.UpdateConfigurationDefinition" }, UpdateConfigurationDefinitionInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Quick Setup configuration manager.
 */export const updateConfigurationManager = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/configurationManager/{ManagerArn}", method: "PUT", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.UpdateConfigurationManager" }, UpdateConfigurationManagerInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates settings configured for Quick Setup.
 */export const updateServiceSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/serviceSettings", method: "PUT", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.UpdateServiceSettings" }, UpdateServiceSettingsInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Quick Setup configuration manager resource. This object is a collection
 * of desired state configurations for multiple configuration definitions and
 * summaries describing the deployments of those definitions.
 */export const createConfigurationManager = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/configurationManager", method: "POST", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.CreateConfigurationManager" }, CreateConfigurationManagerInput, CreateConfigurationManagerOutput, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a configuration manager.
 */export const deleteConfigurationManager = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/configurationManager/{ManagerArn}", method: "DELETE", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.DeleteConfigurationManager" }, DeleteConfigurationManagerInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a configuration manager.
 */export const getConfigurationManager = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/configurationManager/{ManagerArn}", method: "GET", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.GetConfigurationManager" }, GetConfigurationManagerInput, GetConfigurationManagerOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns configurations deployed by Quick Setup in the requesting Amazon Web Services account and Amazon Web Services Region.
 */export const listConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/listConfigurations", method: "POST", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.ListConfigurations" }, ListConfigurationsInput, ListConfigurationsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns tags assigned to the resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns details about the specified configuration.
 */export const getConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/getConfiguration/{ConfigurationId}", method: "GET", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.GetConfiguration" }, GetConfigurationInput, GetConfigurationOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns Quick Setup configuration managers.
 */export const listConfigurationManagers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/listConfigurationManagers", method: "POST", sdkId: "SSM QuickSetup", sigV4ServiceName: "ssm-quicksetup", name: "QuickSetup.ListConfigurationManagers" }, ListConfigurationManagersInput, ListConfigurationManagersOutput, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

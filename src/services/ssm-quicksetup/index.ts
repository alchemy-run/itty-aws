import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class SSMQuickSetup extends AWSServiceClient {
  createConfigurationManager(
    input: CreateConfigurationManagerInput,
  ): Effect.Effect<
    CreateConfigurationManagerOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteConfigurationManager(
    input: DeleteConfigurationManagerInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getConfiguration(
    input: GetConfigurationInput,
  ): Effect.Effect<
    GetConfigurationOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getConfigurationManager(
    input: GetConfigurationManagerInput,
  ): Effect.Effect<
    GetConfigurationManagerOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getServiceSettings(input: {}): Effect.Effect<
    GetServiceSettingsOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError
  >;
  listConfigurationManagers(
    input: ListConfigurationManagersInput,
  ): Effect.Effect<
    ListConfigurationManagersOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listConfigurations(
    input: ListConfigurationsInput,
  ): Effect.Effect<
    ListConfigurationsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listQuickSetupTypes(input: {}): Effect.Effect<
    ListQuickSetupTypesOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateConfigurationDefinition(
    input: UpdateConfigurationDefinitionInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateConfigurationManager(
    input: UpdateConfigurationManagerInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateServiceSettings(
    input: UpdateServiceSettingsInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class SsmQuicksetup extends SSMQuickSetup {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface ConfigurationDefinition {
  Type: string;
  Parameters: Record<string, string>;
  TypeVersion?: string;
  LocalDeploymentExecutionRoleName?: string;
  LocalDeploymentAdministrationRoleArn?: string;
  Id?: string;
}
export interface ConfigurationDefinitionInput {
  Type: string;
  Parameters: Record<string, string>;
  TypeVersion?: string;
  LocalDeploymentExecutionRoleName?: string;
  LocalDeploymentAdministrationRoleArn?: string;
}
export type ConfigurationDefinitionsInputList =
  Array<ConfigurationDefinitionInput>;
export type ConfigurationDefinitionsList = Array<ConfigurationDefinition>;
export type ConfigurationDefinitionSummariesList =
  Array<ConfigurationDefinitionSummary>;
export interface ConfigurationDefinitionSummary {
  Id?: string;
  Type?: string;
  TypeVersion?: string;
  FirstClassParameters?: Record<string, string>;
}
export type ConfigurationManagerList = Array<ConfigurationManagerSummary>;
export interface ConfigurationManagerSummary {
  ManagerArn: string;
  Description?: string;
  Name?: string;
  StatusSummaries?: Array<StatusSummary>;
  ConfigurationDefinitionSummaries?: Array<ConfigurationDefinitionSummary>;
}
export type ConfigurationParametersMap = Record<string, string>;
export type ConfigurationsList = Array<ConfigurationSummary>;
export interface ConfigurationSummary {
  Id?: string;
  ManagerArn?: string;
  ConfigurationDefinitionId?: string;
  Type?: string;
  TypeVersion?: string;
  Region?: string;
  Account?: string;
  CreatedAt?: Date | string;
  FirstClassParameters?: Record<string, string>;
  StatusSummaries?: Array<StatusSummary>;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateConfigurationManagerInput {
  Name?: string;
  Description?: string;
  ConfigurationDefinitions: Array<ConfigurationDefinitionInput>;
  Tags?: Record<string, string>;
}
export interface CreateConfigurationManagerOutput {
  ManagerArn: string;
}
export interface DeleteConfigurationManagerInput {
  ManagerArn: string;
}
export interface Filter {
  Key: string;
  Values: Array<string>;
}
export type FiltersList = Array<Filter>;
export type FilterValues = Array<string>;
export interface GetConfigurationInput {
  ConfigurationId: string;
}
export interface GetConfigurationManagerInput {
  ManagerArn: string;
}
export interface GetConfigurationManagerOutput {
  ManagerArn: string;
  Description?: string;
  Name?: string;
  CreatedAt?: Date | string;
  LastModifiedAt?: Date | string;
  StatusSummaries?: Array<StatusSummary>;
  ConfigurationDefinitions?: Array<ConfigurationDefinition>;
  Tags?: Record<string, string>;
}
export interface GetConfigurationOutput {
  Id?: string;
  ManagerArn?: string;
  ConfigurationDefinitionId?: string;
  Type?: string;
  TypeVersion?: string;
  Account?: string;
  Region?: string;
  CreatedAt?: Date | string;
  LastModifiedAt?: Date | string;
  StatusSummaries?: Array<StatusSummary>;
  Parameters?: Record<string, string>;
}
export interface GetServiceSettingsOutput {
  ServiceSettings?: ServiceSettings;
}
export type IAMRoleArn = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface ListConfigurationManagersInput {
  StartingToken?: string;
  MaxItems?: number;
  Filters?: Array<Filter>;
}
export interface ListConfigurationManagersOutput {
  ConfigurationManagersList?: Array<ConfigurationManagerSummary>;
  NextToken?: string;
}
export interface ListConfigurationsInput {
  StartingToken?: string;
  MaxItems?: number;
  Filters?: Array<Filter>;
  ManagerArn?: string;
  ConfigurationDefinitionId?: string;
}
export interface ListConfigurationsOutput {
  ConfigurationsList?: Array<ConfigurationSummary>;
  NextToken?: string;
}
export interface ListQuickSetupTypesOutput {
  QuickSetupTypeList?: Array<QuickSetupTypeOutput>;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<TagEntry>;
}
export type QuickSetupTypeList = Array<QuickSetupTypeOutput>;
export interface QuickSetupTypeOutput {
  Type?: string;
  LatestVersion?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ServiceSettings {
  ExplorerEnablingRoleArn?: string;
}
export type Status =
  | "INITIALIZING"
  | "DEPLOYING"
  | "SUCCEEDED"
  | "DELETING"
  | "STOPPING"
  | "FAILED"
  | "STOPPED"
  | "DELETE_FAILED"
  | "STOP_FAILED"
  | "NONE";
export type StatusDetails = Record<string, string>;
export type StatusSummariesList = Array<StatusSummary>;
export interface StatusSummary {
  StatusType: StatusType;
  Status?: Status;
  StatusMessage?: string;
  LastUpdatedAt: Date | string;
  StatusDetails?: Record<string, string>;
}
export type StatusType = "DEPLOYMENT" | "ASYNC_EXECUTIONS";
export interface TagEntry {
  Key?: string;
  Value?: string;
}
export type TagKeys = Array<string>;
export interface TagResourceInput {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export type Tags = Array<TagEntry>;
export type TagsMap = Record<string, string>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateConfigurationDefinitionInput {
  ManagerArn: string;
  Id: string;
  TypeVersion?: string;
  Parameters?: Record<string, string>;
  LocalDeploymentExecutionRoleName?: string;
  LocalDeploymentAdministrationRoleArn?: string;
}
export interface UpdateConfigurationManagerInput {
  ManagerArn: string;
  Name?: string;
  Description?: string;
}
export interface UpdateServiceSettingsInput {
  ExplorerEnablingRoleArn?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace CreateConfigurationManager {
  export type Input = CreateConfigurationManagerInput;
  export type Output = CreateConfigurationManagerOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConfigurationManager {
  export type Input = DeleteConfigurationManagerInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfiguration {
  export type Input = GetConfigurationInput;
  export type Output = GetConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfigurationManager {
  export type Input = GetConfigurationManagerInput;
  export type Output = GetConfigurationManagerOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServiceSettings {
  export type Input = {};
  export type Output = GetServiceSettingsOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListConfigurationManagers {
  export type Input = ListConfigurationManagersInput;
  export type Output = ListConfigurationManagersOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConfigurations {
  export type Input = ListConfigurationsInput;
  export type Output = ListConfigurationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListQuickSetupTypes {
  export type Input = {};
  export type Output = ListQuickSetupTypesOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConfigurationDefinition {
  export type Input = UpdateConfigurationDefinitionInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConfigurationManager {
  export type Input = UpdateConfigurationManagerInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateServiceSettings {
  export type Input = UpdateServiceSettingsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

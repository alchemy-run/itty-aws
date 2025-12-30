import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export const TagMap = S.Record({key: S.String, value: S.String});
export class CreateDeploymentStrategyRequest extends S.Class<CreateDeploymentStrategyRequest>("CreateDeploymentStrategyRequest")({Name: S.String, Description: S.optional(S.String), DeploymentDurationInMinutes: S.Number, FinalBakeTimeInMinutes: S.optional(S.Number), GrowthFactor: S.Number, GrowthType: S.optional(S.String), ReplicateTo: S.optional(S.String), Tags: S.optional(TagMap)}) {}
export class CreateHostedConfigurationVersionRequest extends S.Class<CreateHostedConfigurationVersionRequest>("CreateHostedConfigurationVersionRequest")({ApplicationId: S.String, ConfigurationProfileId: S.String, Description: S.optional(H.Header("Description")), Content: H.Body("undefined", H.StreamBody()), ContentType: H.Header("Content-Type"), LatestVersionNumber: S.optional(H.Header("Latest-Version-Number", S.Number)), VersionLabel: S.optional(H.Header("VersionLabel"))}) {}
export class DeleteApplicationRequest extends S.Class<DeleteApplicationRequest>("DeleteApplicationRequest")({ApplicationId: S.String}) {}
export class DeleteConfigurationProfileRequest extends S.Class<DeleteConfigurationProfileRequest>("DeleteConfigurationProfileRequest")({ApplicationId: S.String, ConfigurationProfileId: S.String, DeletionProtectionCheck: S.optional(H.Header("x-amzn-deletion-protection-check"))}) {}
export class DeleteDeploymentStrategyRequest extends S.Class<DeleteDeploymentStrategyRequest>("DeleteDeploymentStrategyRequest")({DeploymentStrategyId: S.String}) {}
export class DeleteEnvironmentRequest extends S.Class<DeleteEnvironmentRequest>("DeleteEnvironmentRequest")({EnvironmentId: S.String, ApplicationId: S.String, DeletionProtectionCheck: S.optional(H.Header("x-amzn-deletion-protection-check"))}) {}
export class DeleteExtensionRequest extends S.Class<DeleteExtensionRequest>("DeleteExtensionRequest")({ExtensionIdentifier: S.String, VersionNumber: S.optional(S.Number)}) {}
export class DeleteExtensionAssociationRequest extends S.Class<DeleteExtensionAssociationRequest>("DeleteExtensionAssociationRequest")({ExtensionAssociationId: S.String}) {}
export class DeleteHostedConfigurationVersionRequest extends S.Class<DeleteHostedConfigurationVersionRequest>("DeleteHostedConfigurationVersionRequest")({ApplicationId: S.String, ConfigurationProfileId: S.String, VersionNumber: S.Number}) {}
export class GetApplicationRequest extends S.Class<GetApplicationRequest>("GetApplicationRequest")({ApplicationId: S.String}) {}
export class GetConfigurationRequest extends S.Class<GetConfigurationRequest>("GetConfigurationRequest")({Application: S.String, Environment: S.String, Configuration: S.String, ClientId: S.String, ClientConfigurationVersion: S.optional(S.String)}) {}
export class GetConfigurationProfileRequest extends S.Class<GetConfigurationProfileRequest>("GetConfigurationProfileRequest")({ApplicationId: S.String, ConfigurationProfileId: S.String}) {}
export class GetDeploymentRequest extends S.Class<GetDeploymentRequest>("GetDeploymentRequest")({ApplicationId: S.String, EnvironmentId: S.String, DeploymentNumber: S.Number}) {}
export class GetDeploymentStrategyRequest extends S.Class<GetDeploymentStrategyRequest>("GetDeploymentStrategyRequest")({DeploymentStrategyId: S.String}) {}
export class GetEnvironmentRequest extends S.Class<GetEnvironmentRequest>("GetEnvironmentRequest")({ApplicationId: S.String, EnvironmentId: S.String}) {}
export class GetExtensionRequest extends S.Class<GetExtensionRequest>("GetExtensionRequest")({ExtensionIdentifier: S.String, VersionNumber: S.optional(S.Number)}) {}
export class GetExtensionAssociationRequest extends S.Class<GetExtensionAssociationRequest>("GetExtensionAssociationRequest")({ExtensionAssociationId: S.String}) {}
export class GetHostedConfigurationVersionRequest extends S.Class<GetHostedConfigurationVersionRequest>("GetHostedConfigurationVersionRequest")({ApplicationId: S.String, ConfigurationProfileId: S.String, VersionNumber: S.Number}) {}
export class ListApplicationsRequest extends S.Class<ListApplicationsRequest>("ListApplicationsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListConfigurationProfilesRequest extends S.Class<ListConfigurationProfilesRequest>("ListConfigurationProfilesRequest")({ApplicationId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Type: S.optional(S.String)}) {}
export class ListDeploymentsRequest extends S.Class<ListDeploymentsRequest>("ListDeploymentsRequest")({ApplicationId: S.String, EnvironmentId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListDeploymentStrategiesRequest extends S.Class<ListDeploymentStrategiesRequest>("ListDeploymentStrategiesRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListEnvironmentsRequest extends S.Class<ListEnvironmentsRequest>("ListEnvironmentsRequest")({ApplicationId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListExtensionAssociationsRequest extends S.Class<ListExtensionAssociationsRequest>("ListExtensionAssociationsRequest")({ResourceIdentifier: S.optional(S.String), ExtensionIdentifier: S.optional(S.String), ExtensionVersionNumber: S.optional(S.Number), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListExtensionsRequest extends S.Class<ListExtensionsRequest>("ListExtensionsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Name: S.optional(S.String)}) {}
export class ListHostedConfigurationVersionsRequest extends S.Class<ListHostedConfigurationVersionsRequest>("ListHostedConfigurationVersionsRequest")({ApplicationId: S.String, ConfigurationProfileId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), VersionLabel: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class StopDeploymentRequest extends S.Class<StopDeploymentRequest>("StopDeploymentRequest")({ApplicationId: S.String, EnvironmentId: S.String, DeploymentNumber: S.Number, AllowRevert: S.optional(H.Header("Allow-Revert", S.Boolean))}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagMap}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class DeletionProtectionSettings extends S.Class<DeletionProtectionSettings>("DeletionProtectionSettings")({Enabled: S.optional(S.Boolean), ProtectionPeriodInMinutes: S.optional(S.Number)}) {}
export class UpdateAccountSettingsRequest extends S.Class<UpdateAccountSettingsRequest>("UpdateAccountSettingsRequest")({DeletionProtection: S.optional(DeletionProtectionSettings)}) {}
export class UpdateApplicationRequest extends S.Class<UpdateApplicationRequest>("UpdateApplicationRequest")({ApplicationId: S.String, Name: S.optional(S.String), Description: S.optional(S.String)}) {}
export class Validator extends S.Class<Validator>("Validator")({Type: S.String, Content: S.String}) {}
export const ValidatorList = S.Array(Validator);
export class UpdateConfigurationProfileRequest extends S.Class<UpdateConfigurationProfileRequest>("UpdateConfigurationProfileRequest")({ApplicationId: S.String, ConfigurationProfileId: S.String, Name: S.optional(S.String), Description: S.optional(S.String), RetrievalRoleArn: S.optional(S.String), Validators: S.optional(ValidatorList), KmsKeyIdentifier: S.optional(S.String)}) {}
export class UpdateDeploymentStrategyRequest extends S.Class<UpdateDeploymentStrategyRequest>("UpdateDeploymentStrategyRequest")({DeploymentStrategyId: S.String, Description: S.optional(S.String), DeploymentDurationInMinutes: S.optional(S.Number), FinalBakeTimeInMinutes: S.optional(S.Number), GrowthFactor: S.optional(S.Number), GrowthType: S.optional(S.String)}) {}
export class Monitor extends S.Class<Monitor>("Monitor")({AlarmArn: S.String, AlarmRoleArn: S.optional(S.String)}) {}
export const MonitorList = S.Array(Monitor);
export class UpdateEnvironmentRequest extends S.Class<UpdateEnvironmentRequest>("UpdateEnvironmentRequest")({ApplicationId: S.String, EnvironmentId: S.String, Name: S.optional(S.String), Description: S.optional(S.String), Monitors: S.optional(MonitorList)}) {}
export class Action extends S.Class<Action>("Action")({Name: S.optional(S.String), Description: S.optional(S.String), Uri: S.optional(S.String), RoleArn: S.optional(S.String)}) {}
export const ActionList = S.Array(Action);
export const ActionsMap = S.Record({key: S.String, value: ActionList});
export class Parameter extends S.Class<Parameter>("Parameter")({Description: S.optional(S.String), Required: S.optional(S.Boolean), Dynamic: S.optional(S.Boolean)}) {}
export const ParameterMap = S.Record({key: S.String, value: Parameter});
export class UpdateExtensionRequest extends S.Class<UpdateExtensionRequest>("UpdateExtensionRequest")({ExtensionIdentifier: S.String, Description: S.optional(S.String), Actions: S.optional(ActionsMap), Parameters: S.optional(ParameterMap), VersionNumber: S.optional(S.Number)}) {}
export const ParameterValueMap = S.Record({key: S.String, value: S.String});
export class UpdateExtensionAssociationRequest extends S.Class<UpdateExtensionAssociationRequest>("UpdateExtensionAssociationRequest")({ExtensionAssociationId: S.String, Parameters: S.optional(ParameterValueMap)}) {}
export class ValidateConfigurationRequest extends S.Class<ValidateConfigurationRequest>("ValidateConfigurationRequest")({ApplicationId: S.String, ConfigurationProfileId: S.String, ConfigurationVersion: S.String}) {}
export class Application extends S.Class<Application>("Application")({Id: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String)}) {}
export const ApplicationList = S.Array(Application);
export class DeploymentStrategy extends S.Class<DeploymentStrategy>("DeploymentStrategy")({Id: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), DeploymentDurationInMinutes: S.optional(S.Number), GrowthType: S.optional(S.String), GrowthFactor: S.optional(S.Number), FinalBakeTimeInMinutes: S.optional(S.Number), ReplicateTo: S.optional(S.String)}) {}
export const DeploymentStrategyList = S.Array(DeploymentStrategy);
export class Environment extends S.Class<Environment>("Environment")({ApplicationId: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), State: S.optional(S.String), Monitors: S.optional(MonitorList)}) {}
export const EnvironmentList = S.Array(Environment);
export const DynamicParameterMap = S.Record({key: S.String, value: S.String});
export class CreateApplicationRequest extends S.Class<CreateApplicationRequest>("CreateApplicationRequest")({Name: S.String, Description: S.optional(S.String), Tags: S.optional(TagMap)}) {}
export class CreateConfigurationProfileRequest extends S.Class<CreateConfigurationProfileRequest>("CreateConfigurationProfileRequest")({ApplicationId: S.String, Name: S.String, Description: S.optional(S.String), LocationUri: S.String, RetrievalRoleArn: S.optional(S.String), Validators: S.optional(ValidatorList), Tags: S.optional(TagMap), Type: S.optional(S.String), KmsKeyIdentifier: S.optional(S.String)}) {}
export class CreateEnvironmentRequest extends S.Class<CreateEnvironmentRequest>("CreateEnvironmentRequest")({ApplicationId: S.String, Name: S.String, Description: S.optional(S.String), Monitors: S.optional(MonitorList), Tags: S.optional(TagMap)}) {}
export class CreateExtensionAssociationRequest extends S.Class<CreateExtensionAssociationRequest>("CreateExtensionAssociationRequest")({ExtensionIdentifier: S.String, ExtensionVersionNumber: S.optional(S.Number), ResourceIdentifier: S.String, Parameters: S.optional(ParameterValueMap), Tags: S.optional(TagMap)}) {}
export class HostedConfigurationVersion extends S.Class<HostedConfigurationVersion>("HostedConfigurationVersion")({ApplicationId: S.optional(H.Header("Application-Id")), ConfigurationProfileId: S.optional(H.Header("Configuration-Profile-Id")), VersionNumber: S.optional(H.Header("Version-Number", S.Number)), Description: S.optional(H.Header("Description")), Content: S.optional(H.Body("undefined", H.StreamBody())), ContentType: S.optional(H.Header("Content-Type")), VersionLabel: S.optional(H.Header("VersionLabel")), KmsKeyArn: S.optional(H.Header("KmsKeyArn"))}) {}
export class AccountSettings extends S.Class<AccountSettings>("AccountSettings")({DeletionProtection: S.optional(DeletionProtectionSettings)}) {}
export class Configuration extends S.Class<Configuration>("Configuration")({Content: S.optional(H.Body("undefined", H.StreamBody())), ConfigurationVersion: S.optional(H.Header("Configuration-Version")), ContentType: S.optional(H.Header("Content-Type"))}) {}
export class ConfigurationProfile extends S.Class<ConfigurationProfile>("ConfigurationProfile")({ApplicationId: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), LocationUri: S.optional(S.String), RetrievalRoleArn: S.optional(S.String), Validators: S.optional(ValidatorList), Type: S.optional(S.String), KmsKeyArn: S.optional(S.String), KmsKeyIdentifier: S.optional(S.String)}) {}
export class Extension extends S.Class<Extension>("Extension")({Id: S.optional(S.String), Name: S.optional(S.String), VersionNumber: S.optional(S.Number), Arn: S.optional(S.String), Description: S.optional(S.String), Actions: S.optional(ActionsMap), Parameters: S.optional(ParameterMap)}) {}
export class ExtensionAssociation extends S.Class<ExtensionAssociation>("ExtensionAssociation")({Id: S.optional(S.String), ExtensionArn: S.optional(S.String), ResourceArn: S.optional(S.String), Arn: S.optional(S.String), Parameters: S.optional(ParameterValueMap), ExtensionVersionNumber: S.optional(S.Number)}) {}
export class Applications extends S.Class<Applications>("Applications")({Items: S.optional(ApplicationList), NextToken: S.optional(S.String)}) {}
export class DeploymentStrategies extends S.Class<DeploymentStrategies>("DeploymentStrategies")({Items: S.optional(DeploymentStrategyList), NextToken: S.optional(S.String)}) {}
export class Environments extends S.Class<Environments>("Environments")({Items: S.optional(EnvironmentList), NextToken: S.optional(S.String)}) {}
export class ResourceTags extends S.Class<ResourceTags>("ResourceTags")({Tags: S.optional(TagMap)}) {}
export class StartDeploymentRequest extends S.Class<StartDeploymentRequest>("StartDeploymentRequest")({ApplicationId: S.String, EnvironmentId: S.String, DeploymentStrategyId: S.String, ConfigurationProfileId: S.String, ConfigurationVersion: S.String, Description: S.optional(S.String), Tags: S.optional(TagMap), KmsKeyIdentifier: S.optional(S.String), DynamicExtensionParameters: S.optional(DynamicParameterMap)}) {}
export const ValidatorTypeList = S.Array(S.String);
export class AppliedExtension extends S.Class<AppliedExtension>("AppliedExtension")({ExtensionId: S.optional(S.String), ExtensionAssociationId: S.optional(S.String), VersionNumber: S.optional(S.Number), Parameters: S.optional(ParameterValueMap)}) {}
export const AppliedExtensions = S.Array(AppliedExtension);
export class ConfigurationProfileSummary extends S.Class<ConfigurationProfileSummary>("ConfigurationProfileSummary")({ApplicationId: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), LocationUri: S.optional(S.String), ValidatorTypes: S.optional(ValidatorTypeList), Type: S.optional(S.String)}) {}
export const ConfigurationProfileSummaryList = S.Array(ConfigurationProfileSummary);
export class DeploymentSummary extends S.Class<DeploymentSummary>("DeploymentSummary")({DeploymentNumber: S.optional(S.Number), ConfigurationName: S.optional(S.String), ConfigurationVersion: S.optional(S.String), DeploymentDurationInMinutes: S.optional(S.Number), GrowthType: S.optional(S.String), GrowthFactor: S.optional(S.Number), FinalBakeTimeInMinutes: S.optional(S.Number), State: S.optional(S.String), PercentageComplete: S.optional(S.Number), StartedAt: S.optional(S.Date), CompletedAt: S.optional(S.Date), VersionLabel: S.optional(S.String)}) {}
export const DeploymentList = S.Array(DeploymentSummary);
export class ExtensionAssociationSummary extends S.Class<ExtensionAssociationSummary>("ExtensionAssociationSummary")({Id: S.optional(S.String), ExtensionArn: S.optional(S.String), ResourceArn: S.optional(S.String)}) {}
export const ExtensionAssociationSummaries = S.Array(ExtensionAssociationSummary);
export class ExtensionSummary extends S.Class<ExtensionSummary>("ExtensionSummary")({Id: S.optional(S.String), Name: S.optional(S.String), VersionNumber: S.optional(S.Number), Arn: S.optional(S.String), Description: S.optional(S.String)}) {}
export const ExtensionSummaries = S.Array(ExtensionSummary);
export class HostedConfigurationVersionSummary extends S.Class<HostedConfigurationVersionSummary>("HostedConfigurationVersionSummary")({ApplicationId: S.optional(S.String), ConfigurationProfileId: S.optional(S.String), VersionNumber: S.optional(S.Number), Description: S.optional(S.String), ContentType: S.optional(S.String), VersionLabel: S.optional(S.String), KmsKeyArn: S.optional(S.String)}) {}
export const HostedConfigurationVersionSummaryList = S.Array(HostedConfigurationVersionSummary);
export class CreateExtensionRequest extends S.Class<CreateExtensionRequest>("CreateExtensionRequest")({Name: S.String, Description: S.optional(S.String), Actions: ActionsMap, Parameters: S.optional(ParameterMap), Tags: S.optional(TagMap), LatestVersionNumber: S.optional(H.Header("Latest-Version-Number", S.Number))}) {}
export class ConfigurationProfiles extends S.Class<ConfigurationProfiles>("ConfigurationProfiles")({Items: S.optional(ConfigurationProfileSummaryList), NextToken: S.optional(S.String)}) {}
export class Deployments extends S.Class<Deployments>("Deployments")({Items: S.optional(DeploymentList), NextToken: S.optional(S.String)}) {}
export class ExtensionAssociations extends S.Class<ExtensionAssociations>("ExtensionAssociations")({Items: S.optional(ExtensionAssociationSummaries), NextToken: S.optional(S.String)}) {}
export class Extensions extends S.Class<Extensions>("Extensions")({Items: S.optional(ExtensionSummaries), NextToken: S.optional(S.String)}) {}
export class HostedConfigurationVersions extends S.Class<HostedConfigurationVersions>("HostedConfigurationVersions")({Items: S.optional(HostedConfigurationVersionSummaryList), NextToken: S.optional(S.String)}) {}
export class InvalidConfigurationDetail extends S.Class<InvalidConfigurationDetail>("InvalidConfigurationDetail")({Constraint: S.optional(S.String), Location: S.optional(S.String), Reason: S.optional(S.String), Type: S.optional(S.String), Value: S.optional(S.String)}) {}
export const InvalidConfigurationDetailList = S.Array(InvalidConfigurationDetail);
export class ActionInvocation extends S.Class<ActionInvocation>("ActionInvocation")({ExtensionIdentifier: S.optional(S.String), ActionName: S.optional(S.String), Uri: S.optional(S.String), RoleArn: S.optional(S.String), ErrorMessage: S.optional(S.String), ErrorCode: S.optional(S.String), InvocationId: S.optional(S.String)}) {}
export const ActionInvocations = S.Array(ActionInvocation);
export const BadRequestDetails = S.Union(InvalidConfigurationDetailList);
export class DeploymentEvent extends S.Class<DeploymentEvent>("DeploymentEvent")({EventType: S.optional(S.String), TriggeredBy: S.optional(S.String), Description: S.optional(S.String), ActionInvocations: S.optional(ActionInvocations), OccurredAt: S.optional(S.Date)}) {}
export const DeploymentEvents = S.Array(DeploymentEvent);
export class Deployment extends S.Class<Deployment>("Deployment")({ApplicationId: S.optional(S.String), EnvironmentId: S.optional(S.String), DeploymentStrategyId: S.optional(S.String), ConfigurationProfileId: S.optional(S.String), DeploymentNumber: S.optional(S.Number), ConfigurationName: S.optional(S.String), ConfigurationLocationUri: S.optional(S.String), ConfigurationVersion: S.optional(S.String), Description: S.optional(S.String), DeploymentDurationInMinutes: S.optional(S.Number), GrowthType: S.optional(S.String), GrowthFactor: S.optional(S.Number), FinalBakeTimeInMinutes: S.optional(S.Number), State: S.optional(S.String), EventLog: S.optional(DeploymentEvents), PercentageComplete: S.optional(S.Number), StartedAt: S.optional(S.Date), CompletedAt: S.optional(S.Date), AppliedExtensions: S.optional(AppliedExtensions), KmsKeyArn: S.optional(S.String), KmsKeyIdentifier: S.optional(S.String), VersionLabel: S.optional(S.String)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class PayloadTooLargeException extends S.TaggedError<PayloadTooLargeException>()("PayloadTooLargeException", {Message: S.optional(S.String), Measure: S.optional(S.String), Limit: S.optional(S.Number), Size: S.optional(S.Number)}) {};

//# Operations
/**
 * Deletes an AppConfig extension. You must delete all associations to an
 * extension before you delete the extension.
 */export const deleteExtension = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/extensions/{ExtensionIdentifier}", method: "DELETE", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.DeleteExtension" }, DeleteExtensionRequest, S.Struct({}), [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an extension association. This action doesn't delete extensions defined in the
 * association.
 */export const deleteExtensionAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/extensionassociations/{ExtensionAssociationId}", method: "DELETE", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.DeleteExtensionAssociation" }, DeleteExtensionAssociationRequest, S.Struct({}), [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a version of a configuration from the AppConfig hosted configuration
 * store.
 */export const deleteHostedConfigurationVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}", method: "DELETE", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.DeleteHostedConfigurationVersion" }, DeleteHostedConfigurationVersionRequest, S.Struct({}), [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a deployment strategy. A deployment strategy defines
 * important criteria for rolling out your configuration to the designated targets. A
 * deployment strategy includes the overall duration required, a percentage of targets to
 * receive the deployment during each interval, an algorithm that defines how percentage
 * grows, and bake time.
 */export const getDeploymentStrategy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/deploymentstrategies/{DeploymentStrategyId}", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.GetDeploymentStrategy" }, GetDeploymentStrategyRequest, DeploymentStrategy, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a specific configuration version.
 */export const getHostedConfigurationVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.GetHostedConfigurationVersion" }, GetHostedConfigurationVersionRequest, HostedConfigurationVersion, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops a deployment. This API action works only on deployments that have a status of
 * `DEPLOYING`, unless an `AllowRevert` parameter is supplied. If the
 * `AllowRevert` parameter is supplied, the status of an in-progress deployment
 * will be `ROLLED_BACK`. The status of a completed deployment will be
 * `REVERTED`. AppConfig only allows a revert within 72 hours of
 * deployment completion.
 */export const stopDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}", method: "DELETE", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.StopDeployment" }, StopDeploymentRequest, Deployment, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns metadata to an AppConfig resource. Tags help organize and categorize
 * your AppConfig resources. Each tag consists of a key and an optional value, both
 * of which you define. You can specify a maximum of 50 tags for a resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/tags/{ResourceArn}", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.TagResource" }, TagResourceRequest, S.Struct({}), [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a tag key and value from an AppConfig resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.UntagResource" }, UntagResourceRequest, S.Struct({}), [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the value of the `DeletionProtection` parameter.
 */export const updateAccountSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/settings", method: "PATCH", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.UpdateAccountSettings" }, UpdateAccountSettingsRequest, AccountSettings, [BadRequestException, InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an application.
 */export const updateApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}", method: "PATCH", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.UpdateApplication" }, UpdateApplicationRequest, Application, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a configuration profile.
 */export const updateConfigurationProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}", method: "PATCH", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.UpdateConfigurationProfile" }, UpdateConfigurationProfileRequest, ConfigurationProfile, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a deployment strategy.
 */export const updateDeploymentStrategy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/deploymentstrategies/{DeploymentStrategyId}", method: "PATCH", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.UpdateDeploymentStrategy" }, UpdateDeploymentStrategyRequest, DeploymentStrategy, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an environment.
 */export const updateEnvironment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/environments/{EnvironmentId}", method: "PATCH", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.UpdateEnvironment" }, UpdateEnvironmentRequest, Environment, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an AppConfig extension. For more information about extensions, see
 * Extending
 * workflows in the *AppConfig User Guide*.
 */export const updateExtension = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/extensions/{ExtensionIdentifier}", method: "PATCH", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.UpdateExtension" }, UpdateExtensionRequest, Extension, [BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an association. For more information about extensions and associations, see
 * Extending
 * workflows in the *AppConfig User Guide*.
 */export const updateExtensionAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/extensionassociations/{ExtensionAssociationId}", method: "PATCH", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.UpdateExtensionAssociation" }, UpdateExtensionAssociationRequest, ExtensionAssociation, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Uses the validators in a configuration profile to validate a configuration.
 */export const validateConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/validators", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.ValidateConfiguration" }, ValidateConfigurationRequest, S.Struct({}), [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a configuration profile, which is information that enables AppConfig
 * to access the configuration source. Valid configuration sources include the
 * following:
 * 
 * 
 * 
 * - Configuration data in YAML, JSON, and other formats stored in the AppConfig hosted configuration store
 * 
 * 
 * 
 * - Configuration data stored as objects in an Amazon Simple Storage Service (Amazon S3)
 * bucket
 * 
 * 
 * 
 * - Pipelines stored in CodePipeline
 * 
 * 
 * 
 * - Secrets stored in Secrets Manager
 * 
 * 
 * 
 * - Standard and secure string parameters stored in Amazon Web Services Systems Manager Parameter Store
 * 
 * 
 * 
 * - Configuration data in SSM documents stored in the Systems Manager document store
 * 
 * 
 * 
 * 
 * 
 * A configuration profile includes the following information:
 * 
 * 
 * 
 * - The URI location of the configuration data.
 * 
 * 
 * 
 * - The Identity and Access Management (IAM) role that provides access to the configuration data.
 * 
 * 
 * 
 * - A validator for the configuration data. Available validators include either a JSON
 * Schema or an Amazon Web Services Lambda function.
 * 
 * 
 * 
 * 
 * 
 * For more information, see Create a
 * Configuration and a Configuration Profile in the AppConfig
 * User Guide.
 */export const createConfigurationProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/configurationprofiles", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.CreateConfigurationProfile" }, CreateConfigurationProfileRequest, ConfigurationProfile, [BadRequestException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a deployment strategy that defines important criteria for rolling out your
 * configuration to the designated targets. A deployment strategy includes the overall
 * duration required, a percentage of targets to receive the deployment during each interval,
 * an algorithm that defines how percentage grows, and bake time.
 */export const createDeploymentStrategy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/deploymentstrategies", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.CreateDeploymentStrategy" }, CreateDeploymentStrategyRequest, DeploymentStrategy, [BadRequestException, InternalServerException, ServiceQuotaExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an environment. For each application, you define one or more environments. An
 * environment is a deployment group of AppConfig targets, such as applications in a
 * `Beta` or `Production` environment. You can also define
 * environments for application subcomponents such as the `Web`,
 * `Mobile` and `Back-end` components for your application. You can
 * configure Amazon CloudWatch alarms for each environment. The system monitors alarms during a
 * configuration deployment. If an alarm is triggered, the system rolls back the
 * configuration.
 */export const createEnvironment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/environments", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.CreateEnvironment" }, CreateEnvironmentRequest, Environment, [BadRequestException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * When you create an extension or configure an Amazon Web Services authored extension, you
 * associate the extension with an AppConfig application, environment, or
 * configuration profile. For example, you can choose to run the AppConfig
 * deployment events to Amazon SNS
 * Amazon Web Services authored extension and receive notifications on an Amazon SNS
 * topic anytime a configuration deployment is started for a specific application. Defining
 * which extension to associate with an AppConfig resource is called an
 * *extension association*. An extension association is a specified
 * relationship between an extension and an AppConfig resource, such as an
 * application or a configuration profile. For more information about extensions and
 * associations, see Extending
 * workflows in the *AppConfig User Guide*.
 */export const createExtensionAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/extensionassociations", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.CreateExtensionAssociation" }, CreateExtensionAssociationRequest, ExtensionAssociation, [BadRequestException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a configuration profile.
 * 
 * 
 * To prevent users from unintentionally deleting actively-used configuration profiles,
 * enable deletion
 * protection.
 */export const deleteConfigurationProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}", method: "DELETE", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.DeleteConfigurationProfile" }, DeleteConfigurationProfileRequest, S.Struct({}), [BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a deployment strategy.
 */export const deleteDeploymentStrategy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/deployementstrategies/{DeploymentStrategyId}", method: "DELETE", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.DeleteDeploymentStrategy" }, DeleteDeploymentStrategyRequest, S.Struct({}), [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an environment.
 * 
 * 
 * To prevent users from unintentionally deleting actively-used environments, enable deletion
 * protection.
 */export const deleteEnvironment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/environments/{EnvironmentId}", method: "DELETE", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.DeleteEnvironment" }, DeleteEnvironmentRequest, S.Struct({}), [BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the status of the `DeletionProtection`
 * parameter.
 */export const getAccountSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/settings", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.GetAccountSettings" }, S.Struct({}), AccountSettings, [BadRequestException, InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an application.
 */export const getApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.GetApplication" }, GetApplicationRequest, Application, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * (Deprecated) Retrieves the latest deployed configuration.
 * 
 * 
 * 
 * 
 * Note the following important information.
 * 
 * 
 * 
 * - This API action is deprecated. Calls to receive configuration data should use
 * the StartConfigurationSession and GetLatestConfiguration APIs instead.
 * 
 * 
 * 
 * - GetConfiguration is a priced call. For more information, see
 * Pricing.
 */export const getConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{Application}/environments/{Environment}/configurations/{Configuration}", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.GetConfiguration" }, GetConfigurationRequest, Configuration, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a configuration profile.
 */export const getConfigurationProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.GetConfigurationProfile" }, GetConfigurationProfileRequest, ConfigurationProfile, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an environment. An environment is a deployment group of
 * AppConfig applications, such as applications in a `Production`
 * environment or in an `EU_Region` environment. Each configuration deployment
 * targets an environment. You can enable one or more Amazon CloudWatch alarms for an environment. If
 * an alarm is triggered during a deployment, AppConfig roles back the
 * configuration.
 */export const getEnvironment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/environments/{EnvironmentId}", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.GetEnvironment" }, GetEnvironmentRequest, Environment, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about an AppConfig extension.
 */export const getExtension = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/extensions/{ExtensionIdentifier}", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.GetExtension" }, GetExtensionRequest, Extension, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about an AppConfig extension association. For more
 * information about extensions and associations, see Extending
 * workflows in the *AppConfig User Guide*.
 */export const getExtensionAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/extensionassociations/{ExtensionAssociationId}", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.GetExtensionAssociation" }, GetExtensionAssociationRequest, ExtensionAssociation, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all applications in your Amazon Web Services account.
 */export const listApplications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.ListApplications" }, ListApplicationsRequest, Applications, [BadRequestException, InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists deployment strategies.
 */export const listDeploymentStrategies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/deploymentstrategies", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.ListDeploymentStrategies" }, ListDeploymentStrategiesRequest, DeploymentStrategies, [BadRequestException, InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the environments for an application.
 */export const listEnvironments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/environments", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.ListEnvironments" }, ListEnvironmentsRequest, Environments, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the list of key-value tags assigned to the resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.ListTagsForResource" }, ListTagsForResourceRequest, ResourceTags, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a deployment.
 */export const startDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.StartDeployment" }, StartDeploymentRequest, Deployment, [BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an application. In AppConfig, an application is simply an
 * organizational construct like a folder. This organizational construct has a relationship
 * with some unit of executable code. For example, you could create an application called
 * MyMobileApp to organize and manage configuration data for a mobile application installed by
 * your users.
 */export const createApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.CreateApplication" }, CreateApplicationRequest, Application, [BadRequestException, InternalServerException, ServiceQuotaExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an AppConfig extension. An extension augments your ability to inject
 * logic or behavior at different points during the AppConfig workflow of creating
 * or deploying a configuration.
 * 
 * 
 * You can create your own extensions or use the Amazon Web Services authored extensions provided by
 * AppConfig. For an AppConfig extension that uses Lambda, you must create a Lambda function to perform any computation and processing
 * defined in the extension. If you plan to create custom versions of the Amazon Web Services
 * authored notification extensions, you only need to specify an Amazon Resource Name (ARN) in
 * the `Uri` field for the new extension version.
 * 
 * 
 * 
 * - For a custom EventBridge notification extension, enter the ARN of the EventBridge
 * default events in the `Uri` field.
 * 
 * 
 * 
 * - For a custom Amazon SNS notification extension, enter the ARN of an Amazon SNS
 * topic in the `Uri` field.
 * 
 * 
 * 
 * - For a custom Amazon SQS notification extension, enter the ARN of an Amazon SQS
 * message queue in the `Uri` field.
 * 
 * 
 * 
 * 
 * 
 * For more information about extensions, see Extending
 * workflows in the *AppConfig User Guide*.
 */export const createExtension = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/extensions", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.CreateExtension" }, CreateExtensionRequest, Extension, [BadRequestException, ConflictException, InternalServerException, ServiceQuotaExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new configuration in the AppConfig hosted configuration store. If
 * you're creating a feature flag, we recommend you familiarize yourself with the JSON schema
 * for feature flag data. For more information, see Type reference for AWS.AppConfig.FeatureFlags in the
 * *AppConfig User Guide*.
 */export const createHostedConfigurationVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.CreateHostedConfigurationVersion" }, CreateHostedConfigurationVersionRequest, HostedConfigurationVersion, [BadRequestException, ConflictException, InternalServerException, PayloadTooLargeException, ResourceNotFoundException, ServiceQuotaExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the configuration profiles for an application.
 */export const listConfigurationProfiles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/configurationprofiles", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.ListConfigurationProfiles" }, ListConfigurationProfilesRequest, ConfigurationProfiles, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the deployments for an environment in descending deployment number order.
 */export const listDeployments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.ListDeployments" }, ListDeploymentsRequest, Deployments, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all AppConfig extension associations in the account. For more
 * information about extensions and associations, see Extending
 * workflows in the *AppConfig User Guide*.
 */export const listExtensionAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/extensionassociations", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.ListExtensionAssociations" }, ListExtensionAssociationsRequest, ExtensionAssociations, [BadRequestException, InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all custom and Amazon Web Services authored AppConfig extensions in the
 * account. For more information about extensions, see Extending
 * workflows in the *AppConfig User Guide*.
 */export const listExtensions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/extensions", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.ListExtensions" }, ListExtensionsRequest, Extensions, [BadRequestException, InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists configurations stored in the AppConfig hosted configuration store by
 * version.
 */export const listHostedConfigurationVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.ListHostedConfigurationVersions" }, ListHostedConfigurationVersionsRequest, HostedConfigurationVersions, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an application.
 */export const deleteApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}", method: "DELETE", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.DeleteApplication" }, DeleteApplicationRequest, S.Struct({}), [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a configuration deployment.
 */export const getDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-09", uri: "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}", method: "GET", sdkId: "AppConfig", sigV4ServiceName: "appconfig", name: "AmazonAppConfig.GetDeployment" }, GetDeploymentRequest, Deployment, [BadRequestException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

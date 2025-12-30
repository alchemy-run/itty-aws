import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DisassociateServiceRoleFromAccountRequest extends S.Class<DisassociateServiceRoleFromAccountRequest>("DisassociateServiceRoleFromAccountRequest")({}) {}
export class GetServiceRoleForAccountRequest extends S.Class<GetServiceRoleForAccountRequest>("GetServiceRoleForAccountRequest")({}) {}
export const TagKeyList = S.Array(S.String);
export class AssociateServiceRoleToAccountRequest extends S.Class<AssociateServiceRoleToAccountRequest>("AssociateServiceRoleToAccountRequest")({roleArn: S.String}) {}
export class CancelDeploymentRequest extends S.Class<CancelDeploymentRequest>("CancelDeploymentRequest")({deploymentId: S.String}) {}
export class DeleteComponentRequest extends S.Class<DeleteComponentRequest>("DeleteComponentRequest")({arn: S.String}) {}
export class DeleteCoreDeviceRequest extends S.Class<DeleteCoreDeviceRequest>("DeleteCoreDeviceRequest")({coreDeviceThingName: S.String}) {}
export class DeleteDeploymentRequest extends S.Class<DeleteDeploymentRequest>("DeleteDeploymentRequest")({deploymentId: S.String}) {}
export class DescribeComponentRequest extends S.Class<DescribeComponentRequest>("DescribeComponentRequest")({arn: S.String}) {}
export class DisassociateServiceRoleFromAccountResponse extends S.Class<DisassociateServiceRoleFromAccountResponse>("DisassociateServiceRoleFromAccountResponse")({disassociatedAt: S.optional(S.String)}) {}
export class GetComponentRequest extends S.Class<GetComponentRequest>("GetComponentRequest")({recipeOutputFormat: S.optional(S.String), arn: S.String}) {}
export class GetComponentVersionArtifactRequest extends S.Class<GetComponentVersionArtifactRequest>("GetComponentVersionArtifactRequest")({arn: S.String, artifactName: S.String, s3EndpointType: S.optional(S.String), iotEndpointType: S.optional(H.Header("x-amz-iot-endpoint-type"))}) {}
export class GetConnectivityInfoRequest extends S.Class<GetConnectivityInfoRequest>("GetConnectivityInfoRequest")({thingName: S.String}) {}
export class GetCoreDeviceRequest extends S.Class<GetCoreDeviceRequest>("GetCoreDeviceRequest")({coreDeviceThingName: S.String}) {}
export class GetDeploymentRequest extends S.Class<GetDeploymentRequest>("GetDeploymentRequest")({deploymentId: S.String}) {}
export class GetServiceRoleForAccountResponse extends S.Class<GetServiceRoleForAccountResponse>("GetServiceRoleForAccountResponse")({associatedAt: S.optional(S.String), roleArn: S.optional(S.String)}) {}
export class ListClientDevicesAssociatedWithCoreDeviceRequest extends S.Class<ListClientDevicesAssociatedWithCoreDeviceRequest>("ListClientDevicesAssociatedWithCoreDeviceRequest")({coreDeviceThingName: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListComponentsRequest extends S.Class<ListComponentsRequest>("ListComponentsRequest")({scope: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListComponentVersionsRequest extends S.Class<ListComponentVersionsRequest>("ListComponentVersionsRequest")({arn: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListCoreDevicesRequest extends S.Class<ListCoreDevicesRequest>("ListCoreDevicesRequest")({thingGroupArn: S.optional(S.String), status: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String), runtime: S.optional(S.String)}) {}
export class ListDeploymentsRequest extends S.Class<ListDeploymentsRequest>("ListDeploymentsRequest")({targetArn: S.optional(S.String), historyFilter: S.optional(S.String), parentTargetArn: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListEffectiveDeploymentsRequest extends S.Class<ListEffectiveDeploymentsRequest>("ListEffectiveDeploymentsRequest")({coreDeviceThingName: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListInstalledComponentsRequest extends S.Class<ListInstalledComponentsRequest>("ListInstalledComponentsRequest")({coreDeviceThingName: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String), topologyFilter: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const PlatformAttributesMap = S.Record({key: S.String, value: S.String});
export class ComponentPlatform extends S.Class<ComponentPlatform>("ComponentPlatform")({name: S.optional(S.String), attributes: S.optional(PlatformAttributesMap)}) {}
export const ComponentPlatformList = S.Array(ComponentPlatform);
export class AssociateClientDeviceWithCoreDeviceEntry extends S.Class<AssociateClientDeviceWithCoreDeviceEntry>("AssociateClientDeviceWithCoreDeviceEntry")({thingName: S.String}) {}
export const AssociateClientDeviceWithCoreDeviceEntryList = S.Array(AssociateClientDeviceWithCoreDeviceEntry);
export class DisassociateClientDeviceFromCoreDeviceEntry extends S.Class<DisassociateClientDeviceFromCoreDeviceEntry>("DisassociateClientDeviceFromCoreDeviceEntry")({thingName: S.String}) {}
export const DisassociateClientDeviceFromCoreDeviceEntryList = S.Array(DisassociateClientDeviceFromCoreDeviceEntry);
export class ConnectivityInfo extends S.Class<ConnectivityInfo>("ConnectivityInfo")({id: S.optional(S.String), hostAddress: S.optional(S.String), portNumber: S.optional(S.Number), metadata: S.optional(S.String)}) {}
export const connectivityInfoList = S.Array(ConnectivityInfo);
export const LambdaExecArgsList = S.Array(S.String);
export class AssociateServiceRoleToAccountResponse extends S.Class<AssociateServiceRoleToAccountResponse>("AssociateServiceRoleToAccountResponse")({associatedAt: S.optional(S.String)}) {}
export class BatchAssociateClientDeviceWithCoreDeviceRequest extends S.Class<BatchAssociateClientDeviceWithCoreDeviceRequest>("BatchAssociateClientDeviceWithCoreDeviceRequest")({entries: S.optional(AssociateClientDeviceWithCoreDeviceEntryList), coreDeviceThingName: S.String}) {}
export class BatchDisassociateClientDeviceFromCoreDeviceRequest extends S.Class<BatchDisassociateClientDeviceFromCoreDeviceRequest>("BatchDisassociateClientDeviceFromCoreDeviceRequest")({entries: S.optional(DisassociateClientDeviceFromCoreDeviceEntryList), coreDeviceThingName: S.String}) {}
export class CancelDeploymentResponse extends S.Class<CancelDeploymentResponse>("CancelDeploymentResponse")({message: S.optional(S.String)}) {}
export class GetComponentResponse extends S.Class<GetComponentResponse>("GetComponentResponse")({recipeOutputFormat: S.String, recipe: H.StreamBody(), tags: S.optional(TagMap)}) {}
export class GetComponentVersionArtifactResponse extends S.Class<GetComponentVersionArtifactResponse>("GetComponentVersionArtifactResponse")({preSignedUrl: S.String}) {}
export class GetConnectivityInfoResponse extends S.Class<GetConnectivityInfoResponse>("GetConnectivityInfoResponse")({connectivityInfo: S.optional(connectivityInfoList), message: S.optional(S.String)}) {}
export class GetCoreDeviceResponse extends S.Class<GetCoreDeviceResponse>("GetCoreDeviceResponse")({coreDeviceThingName: S.optional(S.String), coreVersion: S.optional(S.String), platform: S.optional(S.String), architecture: S.optional(S.String), runtime: S.optional(S.String), status: S.optional(S.String), lastStatusUpdateTimestamp: S.optional(S.Date), tags: S.optional(TagMap)}) {}
export const ComponentConfigurationPathList = S.Array(S.String);
export class ComponentConfigurationUpdate extends S.Class<ComponentConfigurationUpdate>("ComponentConfigurationUpdate")({merge: S.optional(S.String), reset: S.optional(ComponentConfigurationPathList)}) {}
export class SystemResourceLimits extends S.Class<SystemResourceLimits>("SystemResourceLimits")({memory: S.optional(S.Number), cpus: S.optional(S.Number)}) {}
export class ComponentRunWith extends S.Class<ComponentRunWith>("ComponentRunWith")({posixUser: S.optional(S.String), systemResourceLimits: S.optional(SystemResourceLimits), windowsUser: S.optional(S.String)}) {}
export class ComponentDeploymentSpecification extends S.Class<ComponentDeploymentSpecification>("ComponentDeploymentSpecification")({componentVersion: S.String, configurationUpdate: S.optional(ComponentConfigurationUpdate), runWith: S.optional(ComponentRunWith)}) {}
export const ComponentDeploymentSpecifications = S.Record({key: S.String, value: ComponentDeploymentSpecification});
export class DeploymentComponentUpdatePolicy extends S.Class<DeploymentComponentUpdatePolicy>("DeploymentComponentUpdatePolicy")({timeoutInSeconds: S.optional(S.Number), action: S.optional(S.String)}) {}
export class DeploymentConfigurationValidationPolicy extends S.Class<DeploymentConfigurationValidationPolicy>("DeploymentConfigurationValidationPolicy")({timeoutInSeconds: S.optional(S.Number)}) {}
export class DeploymentPolicies extends S.Class<DeploymentPolicies>("DeploymentPolicies")({failureHandlingPolicy: S.optional(S.String), componentUpdatePolicy: S.optional(DeploymentComponentUpdatePolicy), configurationValidationPolicy: S.optional(DeploymentConfigurationValidationPolicy)}) {}
export class IoTJobRateIncreaseCriteria extends S.Class<IoTJobRateIncreaseCriteria>("IoTJobRateIncreaseCriteria")({numberOfNotifiedThings: S.optional(S.Number), numberOfSucceededThings: S.optional(S.Number)}) {}
export class IoTJobExponentialRolloutRate extends S.Class<IoTJobExponentialRolloutRate>("IoTJobExponentialRolloutRate")({baseRatePerMinute: S.Number, incrementFactor: S.Number, rateIncreaseCriteria: IoTJobRateIncreaseCriteria}) {}
export class IoTJobExecutionsRolloutConfig extends S.Class<IoTJobExecutionsRolloutConfig>("IoTJobExecutionsRolloutConfig")({exponentialRate: S.optional(IoTJobExponentialRolloutRate), maximumPerMinute: S.optional(S.Number)}) {}
export class IoTJobAbortCriteria extends S.Class<IoTJobAbortCriteria>("IoTJobAbortCriteria")({failureType: S.String, action: S.String, thresholdPercentage: S.Number, minNumberOfExecutedThings: S.Number}) {}
export const IoTJobAbortCriteriaList = S.Array(IoTJobAbortCriteria);
export class IoTJobAbortConfig extends S.Class<IoTJobAbortConfig>("IoTJobAbortConfig")({criteriaList: IoTJobAbortCriteriaList}) {}
export class IoTJobTimeoutConfig extends S.Class<IoTJobTimeoutConfig>("IoTJobTimeoutConfig")({inProgressTimeoutInMinutes: S.optional(S.Number)}) {}
export class DeploymentIoTJobConfiguration extends S.Class<DeploymentIoTJobConfiguration>("DeploymentIoTJobConfiguration")({jobExecutionsRolloutConfig: S.optional(IoTJobExecutionsRolloutConfig), abortConfig: S.optional(IoTJobAbortConfig), timeoutConfig: S.optional(IoTJobTimeoutConfig)}) {}
export class GetDeploymentResponse extends S.Class<GetDeploymentResponse>("GetDeploymentResponse")({targetArn: S.optional(S.String), revisionId: S.optional(S.String), deploymentId: S.optional(S.String), deploymentName: S.optional(S.String), deploymentStatus: S.optional(S.String), iotJobId: S.optional(S.String), iotJobArn: S.optional(S.String), components: S.optional(ComponentDeploymentSpecifications), deploymentPolicies: S.optional(DeploymentPolicies), iotJobConfiguration: S.optional(DeploymentIoTJobConfiguration), creationTimestamp: S.optional(S.Date), isLatestForTarget: S.optional(S.Boolean), parentTargetArn: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class UpdateConnectivityInfoRequest extends S.Class<UpdateConnectivityInfoRequest>("UpdateConnectivityInfoRequest")({thingName: S.String, connectivityInfo: connectivityInfoList}) {}
export const InstalledComponentLifecycleStatusCodeList = S.Array(S.String);
export const ComponentVersionRequirementMap = S.Record({key: S.String, value: S.String});
export class AssociatedClientDevice extends S.Class<AssociatedClientDevice>("AssociatedClientDevice")({thingName: S.optional(S.String), associationTimestamp: S.optional(S.Date)}) {}
export const AssociatedClientDeviceList = S.Array(AssociatedClientDevice);
export class ComponentVersionListItem extends S.Class<ComponentVersionListItem>("ComponentVersionListItem")({componentName: S.optional(S.String), componentVersion: S.optional(S.String), arn: S.optional(S.String)}) {}
export const ComponentVersionList = S.Array(ComponentVersionListItem);
export class CoreDevice extends S.Class<CoreDevice>("CoreDevice")({coreDeviceThingName: S.optional(S.String), status: S.optional(S.String), lastStatusUpdateTimestamp: S.optional(S.Date), platform: S.optional(S.String), architecture: S.optional(S.String), runtime: S.optional(S.String)}) {}
export const CoreDevicesList = S.Array(CoreDevice);
export class Deployment extends S.Class<Deployment>("Deployment")({targetArn: S.optional(S.String), revisionId: S.optional(S.String), deploymentId: S.optional(S.String), deploymentName: S.optional(S.String), creationTimestamp: S.optional(S.Date), deploymentStatus: S.optional(S.String), isLatestForTarget: S.optional(S.Boolean), parentTargetArn: S.optional(S.String)}) {}
export const DeploymentList = S.Array(Deployment);
export class InstalledComponent extends S.Class<InstalledComponent>("InstalledComponent")({componentName: S.optional(S.String), componentVersion: S.optional(S.String), lifecycleState: S.optional(S.String), lifecycleStateDetails: S.optional(S.String), isRoot: S.optional(S.Boolean), lastStatusChangeTimestamp: S.optional(S.Date), lastReportedTimestamp: S.optional(S.Date), lastInstallationSource: S.optional(S.String), lifecycleStatusCodes: S.optional(InstalledComponentLifecycleStatusCodeList)}) {}
export const InstalledComponentList = S.Array(InstalledComponent);
export class ComponentCandidate extends S.Class<ComponentCandidate>("ComponentCandidate")({componentName: S.optional(S.String), componentVersion: S.optional(S.String), versionRequirements: S.optional(ComponentVersionRequirementMap)}) {}
export const ComponentCandidateList = S.Array(ComponentCandidate);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class ComponentDependencyRequirement extends S.Class<ComponentDependencyRequirement>("ComponentDependencyRequirement")({versionRequirement: S.optional(S.String), dependencyType: S.optional(S.String)}) {}
export class LambdaEventSource extends S.Class<LambdaEventSource>("LambdaEventSource")({topic: S.String, type: S.String}) {}
export const LambdaEventSourceList = S.Array(LambdaEventSource);
export const LambdaEnvironmentVariables = S.Record({key: S.String, value: S.String});
export const EffectiveDeploymentErrorStack = S.Array(S.String);
export const EffectiveDeploymentErrorTypeList = S.Array(S.String);
export class ListClientDevicesAssociatedWithCoreDeviceResponse extends S.Class<ListClientDevicesAssociatedWithCoreDeviceResponse>("ListClientDevicesAssociatedWithCoreDeviceResponse")({associatedClientDevices: S.optional(AssociatedClientDeviceList), nextToken: S.optional(S.String)}) {}
export class ListComponentVersionsResponse extends S.Class<ListComponentVersionsResponse>("ListComponentVersionsResponse")({componentVersions: S.optional(ComponentVersionList), nextToken: S.optional(S.String)}) {}
export class ListCoreDevicesResponse extends S.Class<ListCoreDevicesResponse>("ListCoreDevicesResponse")({coreDevices: S.optional(CoreDevicesList), nextToken: S.optional(S.String)}) {}
export class ListDeploymentsResponse extends S.Class<ListDeploymentsResponse>("ListDeploymentsResponse")({deployments: S.optional(DeploymentList), nextToken: S.optional(S.String)}) {}
export class ListInstalledComponentsResponse extends S.Class<ListInstalledComponentsResponse>("ListInstalledComponentsResponse")({installedComponents: S.optional(InstalledComponentList), nextToken: S.optional(S.String)}) {}
export class ResolveComponentCandidatesRequest extends S.Class<ResolveComponentCandidatesRequest>("ResolveComponentCandidatesRequest")({platform: S.optional(ComponentPlatform), componentCandidates: S.optional(ComponentCandidateList)}) {}
export class UpdateConnectivityInfoResponse extends S.Class<UpdateConnectivityInfoResponse>("UpdateConnectivityInfoResponse")({version: S.optional(S.String), message: S.optional(S.String)}) {}
export const ComponentDependencyMap = S.Record({key: S.String, value: ComponentDependencyRequirement});
export const StringMap = S.Record({key: S.String, value: S.String});
export class ComponentLatestVersion extends S.Class<ComponentLatestVersion>("ComponentLatestVersion")({arn: S.optional(S.String), componentVersion: S.optional(S.String), creationTimestamp: S.optional(S.Date), description: S.optional(S.String), publisher: S.optional(S.String), platforms: S.optional(ComponentPlatformList)}) {}
export class EffectiveDeploymentStatusDetails extends S.Class<EffectiveDeploymentStatusDetails>("EffectiveDeploymentStatusDetails")({errorStack: S.optional(EffectiveDeploymentErrorStack), errorTypes: S.optional(EffectiveDeploymentErrorTypeList)}) {}
export class AssociateClientDeviceWithCoreDeviceErrorEntry extends S.Class<AssociateClientDeviceWithCoreDeviceErrorEntry>("AssociateClientDeviceWithCoreDeviceErrorEntry")({thingName: S.optional(S.String), code: S.optional(S.String), message: S.optional(S.String)}) {}
export const AssociateClientDeviceWithCoreDeviceErrorList = S.Array(AssociateClientDeviceWithCoreDeviceErrorEntry);
export class DisassociateClientDeviceFromCoreDeviceErrorEntry extends S.Class<DisassociateClientDeviceFromCoreDeviceErrorEntry>("DisassociateClientDeviceFromCoreDeviceErrorEntry")({thingName: S.optional(S.String), code: S.optional(S.String), message: S.optional(S.String)}) {}
export const DisassociateClientDeviceFromCoreDeviceErrorList = S.Array(DisassociateClientDeviceFromCoreDeviceErrorEntry);
export class CloudComponentStatus extends S.Class<CloudComponentStatus>("CloudComponentStatus")({componentState: S.optional(S.String), message: S.optional(S.String), errors: S.optional(StringMap), vendorGuidance: S.optional(S.String), vendorGuidanceMessage: S.optional(S.String)}) {}
export class Component extends S.Class<Component>("Component")({arn: S.optional(S.String), componentName: S.optional(S.String), latestVersion: S.optional(ComponentLatestVersion)}) {}
export const ComponentList = S.Array(Component);
export class EffectiveDeployment extends S.Class<EffectiveDeployment>("EffectiveDeployment")({deploymentId: S.String, deploymentName: S.String, iotJobId: S.optional(S.String), iotJobArn: S.optional(S.String), description: S.optional(S.String), targetArn: S.String, coreDeviceExecutionStatus: S.String, reason: S.optional(S.String), creationTimestamp: S.Date, modifiedTimestamp: S.Date, statusDetails: S.optional(EffectiveDeploymentStatusDetails)}) {}
export const EffectiveDeploymentsList = S.Array(EffectiveDeployment);
export class BatchAssociateClientDeviceWithCoreDeviceResponse extends S.Class<BatchAssociateClientDeviceWithCoreDeviceResponse>("BatchAssociateClientDeviceWithCoreDeviceResponse")({errorEntries: S.optional(AssociateClientDeviceWithCoreDeviceErrorList)}) {}
export class BatchDisassociateClientDeviceFromCoreDeviceResponse extends S.Class<BatchDisassociateClientDeviceFromCoreDeviceResponse>("BatchDisassociateClientDeviceFromCoreDeviceResponse")({errorEntries: S.optional(DisassociateClientDeviceFromCoreDeviceErrorList)}) {}
export class LambdaVolumeMount extends S.Class<LambdaVolumeMount>("LambdaVolumeMount")({sourcePath: S.String, destinationPath: S.String, permission: S.optional(S.String), addGroupOwner: S.optional(S.Boolean)}) {}
export const LambdaVolumeList = S.Array(LambdaVolumeMount);
export class LambdaDeviceMount extends S.Class<LambdaDeviceMount>("LambdaDeviceMount")({path: S.String, permission: S.optional(S.String), addGroupOwner: S.optional(S.Boolean)}) {}
export const LambdaDeviceList = S.Array(LambdaDeviceMount);
export class DescribeComponentResponse extends S.Class<DescribeComponentResponse>("DescribeComponentResponse")({arn: S.optional(S.String), componentName: S.optional(S.String), componentVersion: S.optional(S.String), creationTimestamp: S.optional(S.Date), publisher: S.optional(S.String), description: S.optional(S.String), status: S.optional(CloudComponentStatus), platforms: S.optional(ComponentPlatformList), tags: S.optional(TagMap)}) {}
export class ListComponentsResponse extends S.Class<ListComponentsResponse>("ListComponentsResponse")({components: S.optional(ComponentList), nextToken: S.optional(S.String)}) {}
export class ListEffectiveDeploymentsResponse extends S.Class<ListEffectiveDeploymentsResponse>("ListEffectiveDeploymentsResponse")({effectiveDeployments: S.optional(EffectiveDeploymentsList), nextToken: S.optional(S.String)}) {}
export class LambdaContainerParams extends S.Class<LambdaContainerParams>("LambdaContainerParams")({memorySizeInKB: S.optional(S.Number), mountROSysfs: S.optional(S.Boolean), volumes: S.optional(LambdaVolumeList), devices: S.optional(LambdaDeviceList)}) {}
export class ResolvedComponentVersion extends S.Class<ResolvedComponentVersion>("ResolvedComponentVersion")({arn: S.optional(S.String), componentName: S.optional(S.String), componentVersion: S.optional(S.String), recipe: S.optional(H.StreamBody()), vendorGuidance: S.optional(S.String), message: S.optional(S.String)}) {}
export const ResolvedComponentVersionsList = S.Array(ResolvedComponentVersion);
export class LambdaLinuxProcessParams extends S.Class<LambdaLinuxProcessParams>("LambdaLinuxProcessParams")({isolationMode: S.optional(S.String), containerParams: S.optional(LambdaContainerParams)}) {}
export class CreateDeploymentRequest extends S.Class<CreateDeploymentRequest>("CreateDeploymentRequest")({targetArn: S.String, deploymentName: S.optional(S.String), components: S.optional(ComponentDeploymentSpecifications), iotJobConfiguration: S.optional(DeploymentIoTJobConfiguration), deploymentPolicies: S.optional(DeploymentPolicies), parentTargetArn: S.optional(S.String), tags: S.optional(TagMap), clientToken: S.optional(S.String)}) {}
export class ResolveComponentCandidatesResponse extends S.Class<ResolveComponentCandidatesResponse>("ResolveComponentCandidatesResponse")({resolvedComponentVersions: S.optional(ResolvedComponentVersionsList)}) {}
export class LambdaExecutionParameters extends S.Class<LambdaExecutionParameters>("LambdaExecutionParameters")({eventSources: S.optional(LambdaEventSourceList), maxQueueSize: S.optional(S.Number), maxInstancesCount: S.optional(S.Number), maxIdleTimeInSeconds: S.optional(S.Number), timeoutInSeconds: S.optional(S.Number), statusTimeoutInSeconds: S.optional(S.Number), pinned: S.optional(S.Boolean), inputPayloadEncodingType: S.optional(S.String), execArgs: S.optional(LambdaExecArgsList), environmentVariables: S.optional(LambdaEnvironmentVariables), linuxProcessParams: S.optional(LambdaLinuxProcessParams)}) {}
export class LambdaFunctionRecipeSource extends S.Class<LambdaFunctionRecipeSource>("LambdaFunctionRecipeSource")({lambdaArn: S.String, componentName: S.optional(S.String), componentVersion: S.optional(S.String), componentPlatforms: S.optional(ComponentPlatformList), componentDependencies: S.optional(ComponentDependencyMap), componentLambdaParameters: S.optional(LambdaExecutionParameters)}) {}
export class CreateComponentVersionRequest extends S.Class<CreateComponentVersionRequest>("CreateComponentVersionRequest")({inlineRecipe: S.optional(H.StreamBody()), lambdaFunction: S.optional(LambdaFunctionRecipeSource), tags: S.optional(TagMap), clientToken: S.optional(S.String)}) {}
export class CreateDeploymentResponse extends S.Class<CreateDeploymentResponse>("CreateDeploymentResponse")({deploymentId: S.optional(S.String), iotJobId: S.optional(S.String), iotJobArn: S.optional(S.String)}) {}
export class CreateComponentVersionResponse extends S.Class<CreateComponentVersionResponse>("CreateComponentVersionResponse")({arn: S.optional(S.String), componentName: S.String, componentVersion: S.String, creationTimestamp: S.Date, status: CloudComponentStatus}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class RequestAlreadyInProgressException extends S.TaggedError<RequestAlreadyInProgressException>()("RequestAlreadyInProgressException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String, resourceId: S.optional(S.String), resourceType: S.optional(S.String), quotaCode: S.String, serviceCode: S.String}) {};

//# Operations
/**
 * Disassociates the Greengrass service role from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
 * Without a service role, IoT Greengrass can't verify the identity of client devices or manage core device
 * connectivity information. For more information, see Greengrass service role in
 * the *IoT Greengrass Version 2 Developer Guide*.
 */export const disassociateServiceRoleFromAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/servicerole", method: "DELETE", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.DisassociateServiceRoleFromAccount" }, DisassociateServiceRoleFromAccountRequest, DisassociateServiceRoleFromAccountResponse, [InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the service role associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
 * IoT Greengrass uses this role to verify the identity of client devices and manage core device
 * connectivity information. For more information, see Greengrass service role in
 * the *IoT Greengrass Version 2 Developer Guide*.
 */export const getServiceRoleForAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/servicerole", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.GetServiceRoleForAccount" }, GetServiceRoleForAccountRequest, GetServiceRoleForAccountResponse, [InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass
 * uses this role to verify the identity of client devices and manage core device connectivity
 * information. The role must include the AWSGreengrassResourceAccessRolePolicy managed policy or a custom policy that
 * defines equivalent permissions for the IoT Greengrass features that you use. For more information, see
 * Greengrass service role in the *IoT Greengrass Version 2 Developer Guide*.
 */export const associateServiceRoleToAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/servicerole", method: "PUT", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.AssociateServiceRoleToAccount" }, AssociateServiceRoleToAccountRequest, AssociateServiceRoleToAccountResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a version of a component from IoT Greengrass.
 * 
 * This operation deletes the component's recipe and artifacts. As a result, deployments
 * that refer to this component version will fail. If you have deployments that use this
 * component version, you can remove the component from the deployment or update the deployment
 * to use a valid version.
 */export const deleteComponent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/components/{arn}", method: "DELETE", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.DeleteComponent" }, DeleteComponentRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Greengrass core device, which is an IoT thing. This operation removes the core
 * device from the list of core devices. This operation doesn't delete the IoT thing. For more
 * information about how to delete the IoT thing, see DeleteThing in the
 * *IoT API Reference*.
 */export const deleteCoreDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/coreDevices/{coreDeviceThingName}", method: "DELETE", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.DeleteCoreDevice" }, DeleteCoreDeviceRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a deployment. To delete an active deployment, you must first cancel it. For more
 * information, see CancelDeployment.
 * 
 * Deleting a deployment doesn't affect core devices that run that deployment, because core
 * devices store the deployment's configuration on the device. Additionally, core devices can
 * roll back to a previous deployment that has been deleted.
 */export const deleteDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/deployments/{deploymentId}", method: "DELETE", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.DeleteDeployment" }, DeleteDeploymentRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the recipe for a version of a component.
 */export const getComponent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/components/{arn}", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.GetComponent" }, GetComponentRequest, GetComponentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices
 * call this operation to identify the URL that they can use to download an artifact to
 * install.
 */export const getComponentVersionArtifact = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/components/{arn}/artifacts/{artifactName+}", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.GetComponentVersionArtifact" }, GetComponentVersionArtifactRequest, GetComponentVersionArtifactResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves connectivity information for a Greengrass core device.
 * 
 * Connectivity information includes endpoints and ports where client devices
 * can connect to an MQTT broker on the core device. When a client device
 * calls the IoT Greengrass discovery API,
 * IoT Greengrass returns connectivity information for all of the core devices where the client device can
 * connect. For more information, see Connect client devices to
 * core devices in the *IoT Greengrass Version 2 Developer Guide*.
 */export const getConnectivityInfo = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/things/{thingName}/connectivityInfo", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.GetConnectivityInfo" }, GetConnectivityInfoRequest, GetConnectivityInfoResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves metadata for a Greengrass core device.
 * 
 * IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the
 * IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud,
 * then the reported status of that device might not reflect its current status. The status
 * timestamp indicates when the device status was last updated.
 * 
 * Core devices send status updates at the following times:
 * 
 * - When the IoT Greengrass Core software starts
 * 
 * - When the core device receives a deployment from the Amazon Web Services Cloud
 * 
 * - When the status of any component on the core device becomes
 * `BROKEN`
 * 
 * - At a regular interval that you can configure, which defaults to 24 hours
 * 
 * - For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and
 * cloud deployment
 */export const getCoreDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/coreDevices/{coreDeviceThingName}", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.GetCoreDevice" }, GetCoreDeviceRequest, GetCoreDeviceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a deployment. Deployments define the components that run on Greengrass core devices.
 */export const getDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/deployments/{deploymentId}", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.GetDeployment" }, GetDeploymentRequest, GetDeploymentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the list of tags for an IoT Greengrass resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/tags/{resourceArn}", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds tags to an IoT Greengrass resource. If a tag already exists for the resource, this operation
 * updates the tag's value.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/tags/{resourceArn}", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels a deployment. This operation cancels the deployment for devices that haven't yet
 * received it. If a device already received the deployment, this operation doesn't change
 * anything for that device.
 */export const cancelDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/deployments/{deploymentId}/cancel", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.CancelDeployment" }, CancelDeploymentRequest, CancelDeploymentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of client devices that are associated with a core
 * device.
 */export const listClientDevicesAssociatedWithCoreDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/coreDevices/{coreDeviceThingName}/associatedClientDevices", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.ListClientDevicesAssociatedWithCoreDevice" }, ListClientDevicesAssociatedWithCoreDeviceRequest, ListClientDevicesAssociatedWithCoreDeviceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of all versions for a component. Greater versions are listed
 * first.
 */export const listComponentVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/components/{arn}/versions", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.ListComponentVersions" }, ListComponentVersionsRequest, ListComponentVersionsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of Greengrass core devices.
 * 
 * IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the
 * IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud,
 * then the reported status of that device might not reflect its current status. The status
 * timestamp indicates when the device status was last updated.
 * 
 * Core devices send status updates at the following times:
 * 
 * - When the IoT Greengrass Core software starts
 * 
 * - When the core device receives a deployment from the Amazon Web Services Cloud
 * 
 * - For Greengrass nucleus 2.12.2 and earlier, the core device sends status updates when the
 * status of any component on the core device becomes `ERRORED` or
 * `BROKEN`.
 * 
 * - For Greengrass nucleus 2.12.3 and later, the core device sends status updates when the
 * status of any component on the core device becomes `ERRORED`,
 * `BROKEN`, `RUNNING`, or `FINISHED`.
 * 
 * - At a regular interval that you can configure, which defaults to 24 hours
 * 
 * - For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and
 * cloud deployment
 */export const listCoreDevices = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/coreDevices", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.ListCoreDevices" }, ListCoreDevicesRequest, ListCoreDevicesResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of deployments.
 */export const listDeployments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/deployments", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.ListDeployments" }, ListDeploymentsRequest, ListDeploymentsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of the components that a Greengrass core device runs. By default,
 * this list doesn't include components that are deployed as dependencies of other components. To
 * include dependencies in the response, set the `topologyFilter` parameter to
 * `ALL`.
 * 
 * IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the
 * IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud,
 * then the reported status of that device might not reflect its current status. The status
 * timestamp indicates when the device status was last updated.
 * 
 * Core devices send status updates at the following times:
 * 
 * - When the IoT Greengrass Core software starts
 * 
 * - When the core device receives a deployment from the Amazon Web Services Cloud
 * 
 * - When the status of any component on the core device becomes
 * `BROKEN`
 * 
 * - At a regular interval that you can configure, which defaults to 24 hours
 * 
 * - For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and
 * cloud deployment
 */export const listInstalledComponents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/coreDevices/{coreDeviceThingName}/installedComponents", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.ListInstalledComponents" }, ListInstalledComponentsRequest, ListInstalledComponentsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag from an IoT Greengrass resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates connectivity information for a Greengrass core device.
 * 
 * Connectivity information includes endpoints and ports where client devices
 * can connect to an MQTT broker on the core device. When a client device
 * calls the IoT Greengrass discovery API,
 * IoT Greengrass returns connectivity information for all of the core devices where the client device can
 * connect. For more information, see Connect client devices to
 * core devices in the *IoT Greengrass Version 2 Developer Guide*.
 */export const updateConnectivityInfo = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/things/{thingName}/connectivityInfo", method: "PUT", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.UpdateConnectivityInfo" }, UpdateConnectivityInfoRequest, UpdateConnectivityInfoResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a list of client devices with a core device. Use this API operation to specify
 * which client devices can discover a core device through cloud discovery. With cloud discovery,
 * client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information
 * and certificates. For more information, see Configure cloud
 * discovery in the *IoT Greengrass V2 Developer Guide*.
 * 
 * Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core
 * device over MQTT. You can connect client devices to a core device to sync MQTT messages and
 * data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information,
 * see Interact with
 * local IoT devices in the *IoT Greengrass V2 Developer Guide*.
 */export const batchAssociateClientDeviceWithCoreDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/coreDevices/{coreDeviceThingName}/associateClientDevices", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.BatchAssociateClientDeviceWithCoreDevice" }, BatchAssociateClientDeviceWithCoreDeviceRequest, BatchAssociateClientDeviceWithCoreDeviceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a list of client devices from a core device. After you disassociate a client
 * device from a core device, the client device won't be able to use cloud discovery to retrieve
 * the core device's connectivity information and certificates.
 */export const batchDisassociateClientDeviceFromCoreDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/coreDevices/{coreDeviceThingName}/disassociateClientDevices", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.BatchDisassociateClientDeviceFromCoreDevice" }, BatchDisassociateClientDeviceFromCoreDeviceRequest, BatchDisassociateClientDeviceFromCoreDeviceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves metadata for a version of a component.
 */export const describeComponent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/components/{arn}/metadata", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.DescribeComponent" }, DescribeComponentRequest, DescribeComponentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of component summaries. This list includes components that you
 * have permission to view.
 */export const listComponents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/components", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.ListComponents" }, ListComponentsRequest, ListComponentsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.
 */export const listEffectiveDeployments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/coreDevices/{coreDeviceThingName}/effectiveDeployments", method: "GET", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.ListEffectiveDeployments" }, ListEffectiveDeploymentsRequest, ListEffectiveDeploymentsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of components that meet the component, version, and platform requirements
 * of a deployment. Greengrass core devices call this operation when they receive a deployment to
 * identify the components to install.
 * 
 * This operation identifies components that meet all dependency requirements for a
 * deployment. If the requirements conflict, then this operation returns an error and the
 * deployment fails. For example, this occurs if component `A` requires version
 * `>2.0.0` and component `B` requires version `<2.0.0`
 * of a component dependency.
 * 
 * When you specify the component candidates to resolve, IoT Greengrass compares each component's
 * digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests
 * don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.
 * 
 * To use this operation, you must use the data plane API endpoint and authenticate with an
 * IoT device certificate. For more information, see IoT Greengrass endpoints and quotas.
 */export const resolveComponentCandidates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/resolveComponentCandidates", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.ResolveComponentCandidates" }, ResolveComponentCandidatesRequest, ResolveComponentCandidatesResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a continuous deployment for a target, which is a Greengrass core device or group of core
 * devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass
 * deploys that group's deployment to the new device.
 * 
 * You can define one deployment for each target. When you create a new deployment for a
 * target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the
 * new deployment to the target devices.
 * 
 * Every deployment has a revision number that indicates how many deployment revisions you
 * define for a target. Use this operation to create a new revision of an existing
 * deployment.
 * 
 * For more information, see the Create deployments in the
 * *IoT Greengrass V2 Developer Guide*.
 */export const createDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/deployments", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.CreateDeployment" }, CreateDeploymentRequest, CreateDeploymentResponse, [AccessDeniedException, ConflictException, InternalServerException, RequestAlreadyInProgressException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a component. Components are software that run on Greengrass core devices. After you
 * develop and test a component on your core device, you can use this operation to upload your
 * component to IoT Greengrass. Then, you can deploy the component to other core devices.
 * 
 * You can use this operation to do the following:
 * 
 * - **Create components from recipes**
 * 
 * Create a component from a recipe, which is a file that defines the component's
 * metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For
 * more information, see IoT Greengrass component recipe
 * reference in the *IoT Greengrass V2 Developer Guide*.
 * 
 * To create a component from a recipe, specify `inlineRecipe` when you call
 * this operation.
 * 
 * - **Create components from Lambda functions**
 * 
 * Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe
 * and artifacts from the Lambda function's deployment package. You can use this operation to
 * migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.
 * 
 * This function accepts Lambda functions in all supported versions of Python, Node.js,
 * and Java runtimes. IoT Greengrass doesn't apply any additional restrictions on deprecated Lambda
 * runtime versions.
 * 
 * To create a component from a Lambda function, specify `lambdaFunction` when
 * you call this operation.
 * 
 * IoT Greengrass currently supports Lambda functions on only Linux core devices.
 */export const createComponentVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-30", uri: "/greengrass/v2/createComponentVersion", sdkId: "GreengrassV2", sigV4ServiceName: "greengrass", name: "GreengrassV2.CreateComponentVersion" }, CreateComponentVersionRequest, CreateComponentVersionResponse, [AccessDeniedException, ConflictException, InternalServerException, RequestAlreadyInProgressException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

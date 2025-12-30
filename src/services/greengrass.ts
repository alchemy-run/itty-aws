import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DisassociateServiceRoleFromAccountRequest extends S.Class<DisassociateServiceRoleFromAccountRequest>("DisassociateServiceRoleFromAccountRequest")({}) {}
export class GetServiceRoleForAccountRequest extends S.Class<GetServiceRoleForAccountRequest>("GetServiceRoleForAccountRequest")({}) {}
export const UpdateTargets = S.Array(S.String);
export const __listOf__string = S.Array(S.String);
export class AssociateRoleToGroupRequest extends S.Class<AssociateRoleToGroupRequest>("AssociateRoleToGroupRequest")({GroupId: S.String, RoleArn: S.String}) {}
export class AssociateServiceRoleToAccountRequest extends S.Class<AssociateServiceRoleToAccountRequest>("AssociateServiceRoleToAccountRequest")({RoleArn: S.String}) {}
export class CreateDeploymentRequest extends S.Class<CreateDeploymentRequest>("CreateDeploymentRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), DeploymentId: S.optional(S.String), DeploymentType: S.String, GroupId: S.String, GroupVersionId: S.optional(S.String)}) {}
export class CreateGroupCertificateAuthorityRequest extends S.Class<CreateGroupCertificateAuthorityRequest>("CreateGroupCertificateAuthorityRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), GroupId: S.String}) {}
export class CreateGroupVersionRequest extends S.Class<CreateGroupVersionRequest>("CreateGroupVersionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), ConnectorDefinitionVersionArn: S.optional(S.String), CoreDefinitionVersionArn: S.optional(S.String), DeviceDefinitionVersionArn: S.optional(S.String), FunctionDefinitionVersionArn: S.optional(S.String), GroupId: S.String, LoggerDefinitionVersionArn: S.optional(S.String), ResourceDefinitionVersionArn: S.optional(S.String), SubscriptionDefinitionVersionArn: S.optional(S.String)}) {}
export class CreateSoftwareUpdateJobRequest extends S.Class<CreateSoftwareUpdateJobRequest>("CreateSoftwareUpdateJobRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), S3UrlSignerRole: S.String, SoftwareToUpdate: S.String, UpdateAgentLogLevel: S.optional(S.String), UpdateTargets: UpdateTargets, UpdateTargetsArchitecture: S.String, UpdateTargetsOperatingSystem: S.String}) {}
export class DeleteConnectorDefinitionRequest extends S.Class<DeleteConnectorDefinitionRequest>("DeleteConnectorDefinitionRequest")({ConnectorDefinitionId: S.String}) {}
export class DeleteConnectorDefinitionResponse extends S.Class<DeleteConnectorDefinitionResponse>("DeleteConnectorDefinitionResponse")({}) {}
export class DeleteCoreDefinitionRequest extends S.Class<DeleteCoreDefinitionRequest>("DeleteCoreDefinitionRequest")({CoreDefinitionId: S.String}) {}
export class DeleteCoreDefinitionResponse extends S.Class<DeleteCoreDefinitionResponse>("DeleteCoreDefinitionResponse")({}) {}
export class DeleteDeviceDefinitionRequest extends S.Class<DeleteDeviceDefinitionRequest>("DeleteDeviceDefinitionRequest")({DeviceDefinitionId: S.String}) {}
export class DeleteDeviceDefinitionResponse extends S.Class<DeleteDeviceDefinitionResponse>("DeleteDeviceDefinitionResponse")({}) {}
export class DeleteFunctionDefinitionRequest extends S.Class<DeleteFunctionDefinitionRequest>("DeleteFunctionDefinitionRequest")({FunctionDefinitionId: S.String}) {}
export class DeleteFunctionDefinitionResponse extends S.Class<DeleteFunctionDefinitionResponse>("DeleteFunctionDefinitionResponse")({}) {}
export class DeleteGroupRequest extends S.Class<DeleteGroupRequest>("DeleteGroupRequest")({GroupId: S.String}) {}
export class DeleteGroupResponse extends S.Class<DeleteGroupResponse>("DeleteGroupResponse")({}) {}
export class DeleteLoggerDefinitionRequest extends S.Class<DeleteLoggerDefinitionRequest>("DeleteLoggerDefinitionRequest")({LoggerDefinitionId: S.String}) {}
export class DeleteLoggerDefinitionResponse extends S.Class<DeleteLoggerDefinitionResponse>("DeleteLoggerDefinitionResponse")({}) {}
export class DeleteResourceDefinitionRequest extends S.Class<DeleteResourceDefinitionRequest>("DeleteResourceDefinitionRequest")({ResourceDefinitionId: S.String}) {}
export class DeleteResourceDefinitionResponse extends S.Class<DeleteResourceDefinitionResponse>("DeleteResourceDefinitionResponse")({}) {}
export class DeleteSubscriptionDefinitionRequest extends S.Class<DeleteSubscriptionDefinitionRequest>("DeleteSubscriptionDefinitionRequest")({SubscriptionDefinitionId: S.String}) {}
export class DeleteSubscriptionDefinitionResponse extends S.Class<DeleteSubscriptionDefinitionResponse>("DeleteSubscriptionDefinitionResponse")({}) {}
export class DisassociateRoleFromGroupRequest extends S.Class<DisassociateRoleFromGroupRequest>("DisassociateRoleFromGroupRequest")({GroupId: S.String}) {}
export class DisassociateServiceRoleFromAccountResponse extends S.Class<DisassociateServiceRoleFromAccountResponse>("DisassociateServiceRoleFromAccountResponse")({DisassociatedAt: S.optional(S.String)}) {}
export class GetAssociatedRoleRequest extends S.Class<GetAssociatedRoleRequest>("GetAssociatedRoleRequest")({GroupId: S.String}) {}
export class GetBulkDeploymentStatusRequest extends S.Class<GetBulkDeploymentStatusRequest>("GetBulkDeploymentStatusRequest")({BulkDeploymentId: S.String}) {}
export class GetConnectivityInfoRequest extends S.Class<GetConnectivityInfoRequest>("GetConnectivityInfoRequest")({ThingName: S.String}) {}
export class GetConnectorDefinitionRequest extends S.Class<GetConnectorDefinitionRequest>("GetConnectorDefinitionRequest")({ConnectorDefinitionId: S.String}) {}
export class GetConnectorDefinitionVersionRequest extends S.Class<GetConnectorDefinitionVersionRequest>("GetConnectorDefinitionVersionRequest")({ConnectorDefinitionId: S.String, ConnectorDefinitionVersionId: S.String, NextToken: S.optional(S.String)}) {}
export class GetCoreDefinitionRequest extends S.Class<GetCoreDefinitionRequest>("GetCoreDefinitionRequest")({CoreDefinitionId: S.String}) {}
export class GetCoreDefinitionVersionRequest extends S.Class<GetCoreDefinitionVersionRequest>("GetCoreDefinitionVersionRequest")({CoreDefinitionId: S.String, CoreDefinitionVersionId: S.String}) {}
export class GetDeploymentStatusRequest extends S.Class<GetDeploymentStatusRequest>("GetDeploymentStatusRequest")({DeploymentId: S.String, GroupId: S.String}) {}
export class GetDeviceDefinitionRequest extends S.Class<GetDeviceDefinitionRequest>("GetDeviceDefinitionRequest")({DeviceDefinitionId: S.String}) {}
export class GetDeviceDefinitionVersionRequest extends S.Class<GetDeviceDefinitionVersionRequest>("GetDeviceDefinitionVersionRequest")({DeviceDefinitionId: S.String, DeviceDefinitionVersionId: S.String, NextToken: S.optional(S.String)}) {}
export class GetFunctionDefinitionRequest extends S.Class<GetFunctionDefinitionRequest>("GetFunctionDefinitionRequest")({FunctionDefinitionId: S.String}) {}
export class GetFunctionDefinitionVersionRequest extends S.Class<GetFunctionDefinitionVersionRequest>("GetFunctionDefinitionVersionRequest")({FunctionDefinitionId: S.String, FunctionDefinitionVersionId: S.String, NextToken: S.optional(S.String)}) {}
export class GetGroupRequest extends S.Class<GetGroupRequest>("GetGroupRequest")({GroupId: S.String}) {}
export class GetGroupCertificateAuthorityRequest extends S.Class<GetGroupCertificateAuthorityRequest>("GetGroupCertificateAuthorityRequest")({CertificateAuthorityId: S.String, GroupId: S.String}) {}
export class GetGroupCertificateConfigurationRequest extends S.Class<GetGroupCertificateConfigurationRequest>("GetGroupCertificateConfigurationRequest")({GroupId: S.String}) {}
export class GetGroupVersionRequest extends S.Class<GetGroupVersionRequest>("GetGroupVersionRequest")({GroupId: S.String, GroupVersionId: S.String}) {}
export class GetLoggerDefinitionRequest extends S.Class<GetLoggerDefinitionRequest>("GetLoggerDefinitionRequest")({LoggerDefinitionId: S.String}) {}
export class GetLoggerDefinitionVersionRequest extends S.Class<GetLoggerDefinitionVersionRequest>("GetLoggerDefinitionVersionRequest")({LoggerDefinitionId: S.String, LoggerDefinitionVersionId: S.String, NextToken: S.optional(S.String)}) {}
export class GetResourceDefinitionRequest extends S.Class<GetResourceDefinitionRequest>("GetResourceDefinitionRequest")({ResourceDefinitionId: S.String}) {}
export class GetResourceDefinitionVersionRequest extends S.Class<GetResourceDefinitionVersionRequest>("GetResourceDefinitionVersionRequest")({ResourceDefinitionId: S.String, ResourceDefinitionVersionId: S.String}) {}
export class GetServiceRoleForAccountResponse extends S.Class<GetServiceRoleForAccountResponse>("GetServiceRoleForAccountResponse")({AssociatedAt: S.optional(S.String), RoleArn: S.optional(S.String)}) {}
export class GetSubscriptionDefinitionRequest extends S.Class<GetSubscriptionDefinitionRequest>("GetSubscriptionDefinitionRequest")({SubscriptionDefinitionId: S.String}) {}
export class GetSubscriptionDefinitionVersionRequest extends S.Class<GetSubscriptionDefinitionVersionRequest>("GetSubscriptionDefinitionVersionRequest")({NextToken: S.optional(S.String), SubscriptionDefinitionId: S.String, SubscriptionDefinitionVersionId: S.String}) {}
export class GetThingRuntimeConfigurationRequest extends S.Class<GetThingRuntimeConfigurationRequest>("GetThingRuntimeConfigurationRequest")({ThingName: S.String}) {}
export class ListBulkDeploymentDetailedReportsRequest extends S.Class<ListBulkDeploymentDetailedReportsRequest>("ListBulkDeploymentDetailedReportsRequest")({BulkDeploymentId: S.String, MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListBulkDeploymentsRequest extends S.Class<ListBulkDeploymentsRequest>("ListBulkDeploymentsRequest")({MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListConnectorDefinitionsRequest extends S.Class<ListConnectorDefinitionsRequest>("ListConnectorDefinitionsRequest")({MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListConnectorDefinitionVersionsRequest extends S.Class<ListConnectorDefinitionVersionsRequest>("ListConnectorDefinitionVersionsRequest")({ConnectorDefinitionId: S.String, MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListCoreDefinitionsRequest extends S.Class<ListCoreDefinitionsRequest>("ListCoreDefinitionsRequest")({MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListCoreDefinitionVersionsRequest extends S.Class<ListCoreDefinitionVersionsRequest>("ListCoreDefinitionVersionsRequest")({CoreDefinitionId: S.String, MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListDeploymentsRequest extends S.Class<ListDeploymentsRequest>("ListDeploymentsRequest")({GroupId: S.String, MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListDeviceDefinitionsRequest extends S.Class<ListDeviceDefinitionsRequest>("ListDeviceDefinitionsRequest")({MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListDeviceDefinitionVersionsRequest extends S.Class<ListDeviceDefinitionVersionsRequest>("ListDeviceDefinitionVersionsRequest")({DeviceDefinitionId: S.String, MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListFunctionDefinitionsRequest extends S.Class<ListFunctionDefinitionsRequest>("ListFunctionDefinitionsRequest")({MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListFunctionDefinitionVersionsRequest extends S.Class<ListFunctionDefinitionVersionsRequest>("ListFunctionDefinitionVersionsRequest")({FunctionDefinitionId: S.String, MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListGroupCertificateAuthoritiesRequest extends S.Class<ListGroupCertificateAuthoritiesRequest>("ListGroupCertificateAuthoritiesRequest")({GroupId: S.String}) {}
export class ListGroupsRequest extends S.Class<ListGroupsRequest>("ListGroupsRequest")({MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListGroupVersionsRequest extends S.Class<ListGroupVersionsRequest>("ListGroupVersionsRequest")({GroupId: S.String, MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListLoggerDefinitionsRequest extends S.Class<ListLoggerDefinitionsRequest>("ListLoggerDefinitionsRequest")({MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListLoggerDefinitionVersionsRequest extends S.Class<ListLoggerDefinitionVersionsRequest>("ListLoggerDefinitionVersionsRequest")({LoggerDefinitionId: S.String, MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListResourceDefinitionsRequest extends S.Class<ListResourceDefinitionsRequest>("ListResourceDefinitionsRequest")({MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListResourceDefinitionVersionsRequest extends S.Class<ListResourceDefinitionVersionsRequest>("ListResourceDefinitionVersionsRequest")({MaxResults: S.optional(S.String), NextToken: S.optional(S.String), ResourceDefinitionId: S.String}) {}
export class ListSubscriptionDefinitionsRequest extends S.Class<ListSubscriptionDefinitionsRequest>("ListSubscriptionDefinitionsRequest")({MaxResults: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListSubscriptionDefinitionVersionsRequest extends S.Class<ListSubscriptionDefinitionVersionsRequest>("ListSubscriptionDefinitionVersionsRequest")({MaxResults: S.optional(S.String), NextToken: S.optional(S.String), SubscriptionDefinitionId: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class ResetDeploymentsRequest extends S.Class<ResetDeploymentsRequest>("ResetDeploymentsRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), Force: S.optional(S.Boolean), GroupId: S.String}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class StartBulkDeploymentRequest extends S.Class<StartBulkDeploymentRequest>("StartBulkDeploymentRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), ExecutionRoleArn: S.String, InputFileUri: S.String, tags: S.optional(Tags)}) {}
export class StopBulkDeploymentRequest extends S.Class<StopBulkDeploymentRequest>("StopBulkDeploymentRequest")({BulkDeploymentId: S.String}) {}
export class StopBulkDeploymentResponse extends S.Class<StopBulkDeploymentResponse>("StopBulkDeploymentResponse")({}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, tags: S.optional(Tags)}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: __listOf__string}) {}
export class UpdateConnectorDefinitionRequest extends S.Class<UpdateConnectorDefinitionRequest>("UpdateConnectorDefinitionRequest")({ConnectorDefinitionId: S.String, Name: S.optional(S.String)}) {}
export class UpdateConnectorDefinitionResponse extends S.Class<UpdateConnectorDefinitionResponse>("UpdateConnectorDefinitionResponse")({}) {}
export class UpdateCoreDefinitionRequest extends S.Class<UpdateCoreDefinitionRequest>("UpdateCoreDefinitionRequest")({CoreDefinitionId: S.String, Name: S.optional(S.String)}) {}
export class UpdateCoreDefinitionResponse extends S.Class<UpdateCoreDefinitionResponse>("UpdateCoreDefinitionResponse")({}) {}
export class UpdateDeviceDefinitionRequest extends S.Class<UpdateDeviceDefinitionRequest>("UpdateDeviceDefinitionRequest")({DeviceDefinitionId: S.String, Name: S.optional(S.String)}) {}
export class UpdateDeviceDefinitionResponse extends S.Class<UpdateDeviceDefinitionResponse>("UpdateDeviceDefinitionResponse")({}) {}
export class UpdateFunctionDefinitionRequest extends S.Class<UpdateFunctionDefinitionRequest>("UpdateFunctionDefinitionRequest")({FunctionDefinitionId: S.String, Name: S.optional(S.String)}) {}
export class UpdateFunctionDefinitionResponse extends S.Class<UpdateFunctionDefinitionResponse>("UpdateFunctionDefinitionResponse")({}) {}
export class UpdateGroupRequest extends S.Class<UpdateGroupRequest>("UpdateGroupRequest")({GroupId: S.String, Name: S.optional(S.String)}) {}
export class UpdateGroupResponse extends S.Class<UpdateGroupResponse>("UpdateGroupResponse")({}) {}
export class UpdateGroupCertificateConfigurationRequest extends S.Class<UpdateGroupCertificateConfigurationRequest>("UpdateGroupCertificateConfigurationRequest")({CertificateExpiryInMilliseconds: S.optional(S.String), GroupId: S.String}) {}
export class UpdateLoggerDefinitionRequest extends S.Class<UpdateLoggerDefinitionRequest>("UpdateLoggerDefinitionRequest")({LoggerDefinitionId: S.String, Name: S.optional(S.String)}) {}
export class UpdateLoggerDefinitionResponse extends S.Class<UpdateLoggerDefinitionResponse>("UpdateLoggerDefinitionResponse")({}) {}
export class UpdateResourceDefinitionRequest extends S.Class<UpdateResourceDefinitionRequest>("UpdateResourceDefinitionRequest")({Name: S.optional(S.String), ResourceDefinitionId: S.String}) {}
export class UpdateResourceDefinitionResponse extends S.Class<UpdateResourceDefinitionResponse>("UpdateResourceDefinitionResponse")({}) {}
export class UpdateSubscriptionDefinitionRequest extends S.Class<UpdateSubscriptionDefinitionRequest>("UpdateSubscriptionDefinitionRequest")({Name: S.optional(S.String), SubscriptionDefinitionId: S.String}) {}
export class UpdateSubscriptionDefinitionResponse extends S.Class<UpdateSubscriptionDefinitionResponse>("UpdateSubscriptionDefinitionResponse")({}) {}
export const __mapOf__string = S.Record({key: S.String, value: S.String});
export class Connector extends S.Class<Connector>("Connector")({ConnectorArn: S.String, Id: S.String, Parameters: S.optional(__mapOf__string)}) {}
export const __listOfConnector = S.Array(Connector);
export class ConnectorDefinitionVersion extends S.Class<ConnectorDefinitionVersion>("ConnectorDefinitionVersion")({Connectors: S.optional(__listOfConnector)}) {}
export class Core extends S.Class<Core>("Core")({CertificateArn: S.String, Id: S.String, SyncShadow: S.optional(S.Boolean), ThingArn: S.String}) {}
export const __listOfCore = S.Array(Core);
export class CoreDefinitionVersion extends S.Class<CoreDefinitionVersion>("CoreDefinitionVersion")({Cores: S.optional(__listOfCore)}) {}
export class Device extends S.Class<Device>("Device")({CertificateArn: S.String, Id: S.String, SyncShadow: S.optional(S.Boolean), ThingArn: S.String}) {}
export const __listOfDevice = S.Array(Device);
export class DeviceDefinitionVersion extends S.Class<DeviceDefinitionVersion>("DeviceDefinitionVersion")({Devices: S.optional(__listOfDevice)}) {}
export class FunctionRunAsConfig extends S.Class<FunctionRunAsConfig>("FunctionRunAsConfig")({Gid: S.optional(S.Number), Uid: S.optional(S.Number)}) {}
export class FunctionDefaultExecutionConfig extends S.Class<FunctionDefaultExecutionConfig>("FunctionDefaultExecutionConfig")({IsolationMode: S.optional(S.String), RunAs: S.optional(FunctionRunAsConfig)}) {}
export class FunctionDefaultConfig extends S.Class<FunctionDefaultConfig>("FunctionDefaultConfig")({Execution: S.optional(FunctionDefaultExecutionConfig)}) {}
export class FunctionExecutionConfig extends S.Class<FunctionExecutionConfig>("FunctionExecutionConfig")({IsolationMode: S.optional(S.String), RunAs: S.optional(FunctionRunAsConfig)}) {}
export class ResourceAccessPolicy extends S.Class<ResourceAccessPolicy>("ResourceAccessPolicy")({Permission: S.optional(S.String), ResourceId: S.String}) {}
export const __listOfResourceAccessPolicy = S.Array(ResourceAccessPolicy);
export class FunctionConfigurationEnvironment extends S.Class<FunctionConfigurationEnvironment>("FunctionConfigurationEnvironment")({AccessSysfs: S.optional(S.Boolean), Execution: S.optional(FunctionExecutionConfig), ResourceAccessPolicies: S.optional(__listOfResourceAccessPolicy), Variables: S.optional(__mapOf__string)}) {}
export class FunctionConfiguration extends S.Class<FunctionConfiguration>("FunctionConfiguration")({EncodingType: S.optional(S.String), Environment: S.optional(FunctionConfigurationEnvironment), ExecArgs: S.optional(S.String), Executable: S.optional(S.String), MemorySize: S.optional(S.Number), Pinned: S.optional(S.Boolean), Timeout: S.optional(S.Number), FunctionRuntimeOverride: S.optional(S.String)}) {}
export class Function extends S.Class<Function>("Function")({FunctionArn: S.optional(S.String), FunctionConfiguration: S.optional(FunctionConfiguration), Id: S.String}) {}
export const __listOfFunction = S.Array(Function);
export class FunctionDefinitionVersion extends S.Class<FunctionDefinitionVersion>("FunctionDefinitionVersion")({DefaultConfig: S.optional(FunctionDefaultConfig), Functions: S.optional(__listOfFunction)}) {}
export class GroupVersion extends S.Class<GroupVersion>("GroupVersion")({ConnectorDefinitionVersionArn: S.optional(S.String), CoreDefinitionVersionArn: S.optional(S.String), DeviceDefinitionVersionArn: S.optional(S.String), FunctionDefinitionVersionArn: S.optional(S.String), LoggerDefinitionVersionArn: S.optional(S.String), ResourceDefinitionVersionArn: S.optional(S.String), SubscriptionDefinitionVersionArn: S.optional(S.String)}) {}
export class Logger extends S.Class<Logger>("Logger")({Component: S.String, Id: S.String, Level: S.String, Space: S.optional(S.Number), Type: S.String}) {}
export const __listOfLogger = S.Array(Logger);
export class LoggerDefinitionVersion extends S.Class<LoggerDefinitionVersion>("LoggerDefinitionVersion")({Loggers: S.optional(__listOfLogger)}) {}
export class GroupOwnerSetting extends S.Class<GroupOwnerSetting>("GroupOwnerSetting")({AutoAddGroupOwner: S.optional(S.Boolean), GroupOwner: S.optional(S.String)}) {}
export class LocalDeviceResourceData extends S.Class<LocalDeviceResourceData>("LocalDeviceResourceData")({GroupOwnerSetting: S.optional(GroupOwnerSetting), SourcePath: S.optional(S.String)}) {}
export class LocalVolumeResourceData extends S.Class<LocalVolumeResourceData>("LocalVolumeResourceData")({DestinationPath: S.optional(S.String), GroupOwnerSetting: S.optional(GroupOwnerSetting), SourcePath: S.optional(S.String)}) {}
export class ResourceDownloadOwnerSetting extends S.Class<ResourceDownloadOwnerSetting>("ResourceDownloadOwnerSetting")({GroupOwner: S.String, GroupPermission: S.String}) {}
export class S3MachineLearningModelResourceData extends S.Class<S3MachineLearningModelResourceData>("S3MachineLearningModelResourceData")({DestinationPath: S.optional(S.String), OwnerSetting: S.optional(ResourceDownloadOwnerSetting), S3Uri: S.optional(S.String)}) {}
export class SageMakerMachineLearningModelResourceData extends S.Class<SageMakerMachineLearningModelResourceData>("SageMakerMachineLearningModelResourceData")({DestinationPath: S.optional(S.String), OwnerSetting: S.optional(ResourceDownloadOwnerSetting), SageMakerJobArn: S.optional(S.String)}) {}
export class SecretsManagerSecretResourceData extends S.Class<SecretsManagerSecretResourceData>("SecretsManagerSecretResourceData")({ARN: S.optional(S.String), AdditionalStagingLabelsToDownload: S.optional(__listOf__string)}) {}
export class ResourceDataContainer extends S.Class<ResourceDataContainer>("ResourceDataContainer")({LocalDeviceResourceData: S.optional(LocalDeviceResourceData), LocalVolumeResourceData: S.optional(LocalVolumeResourceData), S3MachineLearningModelResourceData: S.optional(S3MachineLearningModelResourceData), SageMakerMachineLearningModelResourceData: S.optional(SageMakerMachineLearningModelResourceData), SecretsManagerSecretResourceData: S.optional(SecretsManagerSecretResourceData)}) {}
export class Resource extends S.Class<Resource>("Resource")({Id: S.String, Name: S.String, ResourceDataContainer: ResourceDataContainer}) {}
export const __listOfResource = S.Array(Resource);
export class ResourceDefinitionVersion extends S.Class<ResourceDefinitionVersion>("ResourceDefinitionVersion")({Resources: S.optional(__listOfResource)}) {}
export class Subscription extends S.Class<Subscription>("Subscription")({Id: S.String, Source: S.String, Subject: S.String, Target: S.String}) {}
export const __listOfSubscription = S.Array(Subscription);
export class SubscriptionDefinitionVersion extends S.Class<SubscriptionDefinitionVersion>("SubscriptionDefinitionVersion")({Subscriptions: S.optional(__listOfSubscription)}) {}
export class ConnectivityInfo extends S.Class<ConnectivityInfo>("ConnectivityInfo")({HostAddress: S.optional(S.String), Id: S.optional(S.String), Metadata: S.optional(S.String), PortNumber: S.optional(S.Number)}) {}
export const __listOfConnectivityInfo = S.Array(ConnectivityInfo);
export class TelemetryConfigurationUpdate extends S.Class<TelemetryConfigurationUpdate>("TelemetryConfigurationUpdate")({Telemetry: S.String}) {}
export class AssociateRoleToGroupResponse extends S.Class<AssociateRoleToGroupResponse>("AssociateRoleToGroupResponse")({AssociatedAt: S.optional(S.String)}) {}
export class AssociateServiceRoleToAccountResponse extends S.Class<AssociateServiceRoleToAccountResponse>("AssociateServiceRoleToAccountResponse")({AssociatedAt: S.optional(S.String)}) {}
export class CreateConnectorDefinitionRequest extends S.Class<CreateConnectorDefinitionRequest>("CreateConnectorDefinitionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), InitialVersion: S.optional(ConnectorDefinitionVersion), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class CreateCoreDefinitionRequest extends S.Class<CreateCoreDefinitionRequest>("CreateCoreDefinitionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), InitialVersion: S.optional(CoreDefinitionVersion), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class CreateCoreDefinitionVersionRequest extends S.Class<CreateCoreDefinitionVersionRequest>("CreateCoreDefinitionVersionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), CoreDefinitionId: S.String, Cores: S.optional(__listOfCore)}) {}
export class CreateDeploymentResponse extends S.Class<CreateDeploymentResponse>("CreateDeploymentResponse")({DeploymentArn: S.optional(S.String), DeploymentId: S.optional(S.String)}) {}
export class CreateDeviceDefinitionRequest extends S.Class<CreateDeviceDefinitionRequest>("CreateDeviceDefinitionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), InitialVersion: S.optional(DeviceDefinitionVersion), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class CreateDeviceDefinitionVersionRequest extends S.Class<CreateDeviceDefinitionVersionRequest>("CreateDeviceDefinitionVersionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), DeviceDefinitionId: S.String, Devices: S.optional(__listOfDevice)}) {}
export class CreateFunctionDefinitionRequest extends S.Class<CreateFunctionDefinitionRequest>("CreateFunctionDefinitionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), InitialVersion: S.optional(FunctionDefinitionVersion), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class CreateGroupRequest extends S.Class<CreateGroupRequest>("CreateGroupRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), InitialVersion: S.optional(GroupVersion), Name: S.String, tags: S.optional(Tags)}) {}
export class CreateGroupCertificateAuthorityResponse extends S.Class<CreateGroupCertificateAuthorityResponse>("CreateGroupCertificateAuthorityResponse")({GroupCertificateAuthorityArn: S.optional(S.String)}) {}
export class CreateGroupVersionResponse extends S.Class<CreateGroupVersionResponse>("CreateGroupVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), Version: S.optional(S.String)}) {}
export class CreateLoggerDefinitionRequest extends S.Class<CreateLoggerDefinitionRequest>("CreateLoggerDefinitionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), InitialVersion: S.optional(LoggerDefinitionVersion), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class CreateLoggerDefinitionVersionRequest extends S.Class<CreateLoggerDefinitionVersionRequest>("CreateLoggerDefinitionVersionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), LoggerDefinitionId: S.String, Loggers: S.optional(__listOfLogger)}) {}
export class CreateResourceDefinitionRequest extends S.Class<CreateResourceDefinitionRequest>("CreateResourceDefinitionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), InitialVersion: S.optional(ResourceDefinitionVersion), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class CreateSoftwareUpdateJobResponse extends S.Class<CreateSoftwareUpdateJobResponse>("CreateSoftwareUpdateJobResponse")({IotJobArn: S.optional(S.String), IotJobId: S.optional(S.String), PlatformSoftwareVersion: S.optional(S.String)}) {}
export class CreateSubscriptionDefinitionRequest extends S.Class<CreateSubscriptionDefinitionRequest>("CreateSubscriptionDefinitionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), InitialVersion: S.optional(SubscriptionDefinitionVersion), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class CreateSubscriptionDefinitionVersionRequest extends S.Class<CreateSubscriptionDefinitionVersionRequest>("CreateSubscriptionDefinitionVersionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), SubscriptionDefinitionId: S.String, Subscriptions: S.optional(__listOfSubscription)}) {}
export class DisassociateRoleFromGroupResponse extends S.Class<DisassociateRoleFromGroupResponse>("DisassociateRoleFromGroupResponse")({DisassociatedAt: S.optional(S.String)}) {}
export class GetAssociatedRoleResponse extends S.Class<GetAssociatedRoleResponse>("GetAssociatedRoleResponse")({AssociatedAt: S.optional(S.String), RoleArn: S.optional(S.String)}) {}
export class GetConnectivityInfoResponse extends S.Class<GetConnectivityInfoResponse>("GetConnectivityInfoResponse")({ConnectivityInfo: S.optional(__listOfConnectivityInfo), Message: S.optional(S.String)}) {}
export class GetConnectorDefinitionResponse extends S.Class<GetConnectorDefinitionResponse>("GetConnectorDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class GetConnectorDefinitionVersionResponse extends S.Class<GetConnectorDefinitionVersionResponse>("GetConnectorDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Definition: S.optional(ConnectorDefinitionVersion), Id: S.optional(S.String), NextToken: S.optional(S.String), Version: S.optional(S.String)}) {}
export class GetCoreDefinitionResponse extends S.Class<GetCoreDefinitionResponse>("GetCoreDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class GetCoreDefinitionVersionResponse extends S.Class<GetCoreDefinitionVersionResponse>("GetCoreDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Definition: S.optional(CoreDefinitionVersion), Id: S.optional(S.String), NextToken: S.optional(S.String), Version: S.optional(S.String)}) {}
export class ErrorDetail extends S.Class<ErrorDetail>("ErrorDetail")({DetailedErrorCode: S.optional(S.String), DetailedErrorMessage: S.optional(S.String)}) {}
export const ErrorDetails = S.Array(ErrorDetail);
export class GetDeploymentStatusResponse extends S.Class<GetDeploymentStatusResponse>("GetDeploymentStatusResponse")({DeploymentStatus: S.optional(S.String), DeploymentType: S.optional(S.String), ErrorDetails: S.optional(ErrorDetails), ErrorMessage: S.optional(S.String), UpdatedAt: S.optional(S.String)}) {}
export class GetDeviceDefinitionResponse extends S.Class<GetDeviceDefinitionResponse>("GetDeviceDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class GetDeviceDefinitionVersionResponse extends S.Class<GetDeviceDefinitionVersionResponse>("GetDeviceDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Definition: S.optional(DeviceDefinitionVersion), Id: S.optional(S.String), NextToken: S.optional(S.String), Version: S.optional(S.String)}) {}
export class GetFunctionDefinitionResponse extends S.Class<GetFunctionDefinitionResponse>("GetFunctionDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class GetFunctionDefinitionVersionResponse extends S.Class<GetFunctionDefinitionVersionResponse>("GetFunctionDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Definition: S.optional(FunctionDefinitionVersion), Id: S.optional(S.String), NextToken: S.optional(S.String), Version: S.optional(S.String)}) {}
export class GetGroupResponse extends S.Class<GetGroupResponse>("GetGroupResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class GetGroupCertificateAuthorityResponse extends S.Class<GetGroupCertificateAuthorityResponse>("GetGroupCertificateAuthorityResponse")({GroupCertificateAuthorityArn: S.optional(S.String), GroupCertificateAuthorityId: S.optional(S.String), PemEncodedCertificate: S.optional(S.String)}) {}
export class GetGroupCertificateConfigurationResponse extends S.Class<GetGroupCertificateConfigurationResponse>("GetGroupCertificateConfigurationResponse")({CertificateAuthorityExpiryInMilliseconds: S.optional(S.String), CertificateExpiryInMilliseconds: S.optional(S.String), GroupId: S.optional(S.String)}) {}
export class GetGroupVersionResponse extends S.Class<GetGroupVersionResponse>("GetGroupVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Definition: S.optional(GroupVersion), Id: S.optional(S.String), Version: S.optional(S.String)}) {}
export class GetLoggerDefinitionResponse extends S.Class<GetLoggerDefinitionResponse>("GetLoggerDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class GetLoggerDefinitionVersionResponse extends S.Class<GetLoggerDefinitionVersionResponse>("GetLoggerDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Definition: S.optional(LoggerDefinitionVersion), Id: S.optional(S.String), Version: S.optional(S.String)}) {}
export class GetResourceDefinitionResponse extends S.Class<GetResourceDefinitionResponse>("GetResourceDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class GetResourceDefinitionVersionResponse extends S.Class<GetResourceDefinitionVersionResponse>("GetResourceDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Definition: S.optional(ResourceDefinitionVersion), Id: S.optional(S.String), Version: S.optional(S.String)}) {}
export class GetSubscriptionDefinitionResponse extends S.Class<GetSubscriptionDefinitionResponse>("GetSubscriptionDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String), tags: S.optional(Tags)}) {}
export class GetSubscriptionDefinitionVersionResponse extends S.Class<GetSubscriptionDefinitionVersionResponse>("GetSubscriptionDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Definition: S.optional(SubscriptionDefinitionVersion), Id: S.optional(S.String), NextToken: S.optional(S.String), Version: S.optional(S.String)}) {}
export class DefinitionInformation extends S.Class<DefinitionInformation>("DefinitionInformation")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String), Tags: S.optional(Tags)}) {}
export const __listOfDefinitionInformation = S.Array(DefinitionInformation);
export class ListCoreDefinitionsResponse extends S.Class<ListCoreDefinitionsResponse>("ListCoreDefinitionsResponse")({Definitions: S.optional(__listOfDefinitionInformation), NextToken: S.optional(S.String)}) {}
export class VersionInformation extends S.Class<VersionInformation>("VersionInformation")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), Version: S.optional(S.String)}) {}
export const __listOfVersionInformation = S.Array(VersionInformation);
export class ListCoreDefinitionVersionsResponse extends S.Class<ListCoreDefinitionVersionsResponse>("ListCoreDefinitionVersionsResponse")({NextToken: S.optional(S.String), Versions: S.optional(__listOfVersionInformation)}) {}
export class ListDeviceDefinitionsResponse extends S.Class<ListDeviceDefinitionsResponse>("ListDeviceDefinitionsResponse")({Definitions: S.optional(__listOfDefinitionInformation), NextToken: S.optional(S.String)}) {}
export class ListDeviceDefinitionVersionsResponse extends S.Class<ListDeviceDefinitionVersionsResponse>("ListDeviceDefinitionVersionsResponse")({NextToken: S.optional(S.String), Versions: S.optional(__listOfVersionInformation)}) {}
export class ListFunctionDefinitionsResponse extends S.Class<ListFunctionDefinitionsResponse>("ListFunctionDefinitionsResponse")({Definitions: S.optional(__listOfDefinitionInformation), NextToken: S.optional(S.String)}) {}
export class ListFunctionDefinitionVersionsResponse extends S.Class<ListFunctionDefinitionVersionsResponse>("ListFunctionDefinitionVersionsResponse")({NextToken: S.optional(S.String), Versions: S.optional(__listOfVersionInformation)}) {}
export class ListGroupVersionsResponse extends S.Class<ListGroupVersionsResponse>("ListGroupVersionsResponse")({NextToken: S.optional(S.String), Versions: S.optional(__listOfVersionInformation)}) {}
export class ListLoggerDefinitionsResponse extends S.Class<ListLoggerDefinitionsResponse>("ListLoggerDefinitionsResponse")({Definitions: S.optional(__listOfDefinitionInformation), NextToken: S.optional(S.String)}) {}
export class ListLoggerDefinitionVersionsResponse extends S.Class<ListLoggerDefinitionVersionsResponse>("ListLoggerDefinitionVersionsResponse")({NextToken: S.optional(S.String), Versions: S.optional(__listOfVersionInformation)}) {}
export class ListResourceDefinitionsResponse extends S.Class<ListResourceDefinitionsResponse>("ListResourceDefinitionsResponse")({Definitions: S.optional(__listOfDefinitionInformation), NextToken: S.optional(S.String)}) {}
export class ListResourceDefinitionVersionsResponse extends S.Class<ListResourceDefinitionVersionsResponse>("ListResourceDefinitionVersionsResponse")({NextToken: S.optional(S.String), Versions: S.optional(__listOfVersionInformation)}) {}
export class ListSubscriptionDefinitionsResponse extends S.Class<ListSubscriptionDefinitionsResponse>("ListSubscriptionDefinitionsResponse")({Definitions: S.optional(__listOfDefinitionInformation), NextToken: S.optional(S.String)}) {}
export class ListSubscriptionDefinitionVersionsResponse extends S.Class<ListSubscriptionDefinitionVersionsResponse>("ListSubscriptionDefinitionVersionsResponse")({NextToken: S.optional(S.String), Versions: S.optional(__listOfVersionInformation)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(Tags)}) {}
export class ResetDeploymentsResponse extends S.Class<ResetDeploymentsResponse>("ResetDeploymentsResponse")({DeploymentArn: S.optional(S.String), DeploymentId: S.optional(S.String)}) {}
export class StartBulkDeploymentResponse extends S.Class<StartBulkDeploymentResponse>("StartBulkDeploymentResponse")({BulkDeploymentArn: S.optional(S.String), BulkDeploymentId: S.optional(S.String)}) {}
export class UpdateConnectivityInfoRequest extends S.Class<UpdateConnectivityInfoRequest>("UpdateConnectivityInfoRequest")({ConnectivityInfo: S.optional(__listOfConnectivityInfo), ThingName: S.String}) {}
export class UpdateGroupCertificateConfigurationResponse extends S.Class<UpdateGroupCertificateConfigurationResponse>("UpdateGroupCertificateConfigurationResponse")({CertificateAuthorityExpiryInMilliseconds: S.optional(S.String), CertificateExpiryInMilliseconds: S.optional(S.String), GroupId: S.optional(S.String)}) {}
export class UpdateThingRuntimeConfigurationRequest extends S.Class<UpdateThingRuntimeConfigurationRequest>("UpdateThingRuntimeConfigurationRequest")({TelemetryConfiguration: S.optional(TelemetryConfigurationUpdate), ThingName: S.String}) {}
export class UpdateThingRuntimeConfigurationResponse extends S.Class<UpdateThingRuntimeConfigurationResponse>("UpdateThingRuntimeConfigurationResponse")({}) {}
export class BulkDeploymentMetrics extends S.Class<BulkDeploymentMetrics>("BulkDeploymentMetrics")({InvalidInputRecords: S.optional(S.Number), RecordsProcessed: S.optional(S.Number), RetryAttempts: S.optional(S.Number)}) {}
export class BulkDeploymentResult extends S.Class<BulkDeploymentResult>("BulkDeploymentResult")({CreatedAt: S.optional(S.String), DeploymentArn: S.optional(S.String), DeploymentId: S.optional(S.String), DeploymentStatus: S.optional(S.String), DeploymentType: S.optional(S.String), ErrorDetails: S.optional(ErrorDetails), ErrorMessage: S.optional(S.String), GroupArn: S.optional(S.String)}) {}
export const BulkDeploymentResults = S.Array(BulkDeploymentResult);
export class BulkDeployment extends S.Class<BulkDeployment>("BulkDeployment")({BulkDeploymentArn: S.optional(S.String), BulkDeploymentId: S.optional(S.String), CreatedAt: S.optional(S.String)}) {}
export const BulkDeployments = S.Array(BulkDeployment);
export class Deployment extends S.Class<Deployment>("Deployment")({CreatedAt: S.optional(S.String), DeploymentArn: S.optional(S.String), DeploymentId: S.optional(S.String), DeploymentType: S.optional(S.String), GroupArn: S.optional(S.String)}) {}
export const Deployments = S.Array(Deployment);
export class GroupCertificateAuthorityProperties extends S.Class<GroupCertificateAuthorityProperties>("GroupCertificateAuthorityProperties")({GroupCertificateAuthorityArn: S.optional(S.String), GroupCertificateAuthorityId: S.optional(S.String)}) {}
export const __listOfGroupCertificateAuthorityProperties = S.Array(GroupCertificateAuthorityProperties);
export class GroupInformation extends S.Class<GroupInformation>("GroupInformation")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String)}) {}
export const __listOfGroupInformation = S.Array(GroupInformation);
export class CreateConnectorDefinitionResponse extends S.Class<CreateConnectorDefinitionResponse>("CreateConnectorDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String)}) {}
export class CreateConnectorDefinitionVersionRequest extends S.Class<CreateConnectorDefinitionVersionRequest>("CreateConnectorDefinitionVersionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), ConnectorDefinitionId: S.String, Connectors: S.optional(__listOfConnector)}) {}
export class CreateCoreDefinitionResponse extends S.Class<CreateCoreDefinitionResponse>("CreateCoreDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String)}) {}
export class CreateCoreDefinitionVersionResponse extends S.Class<CreateCoreDefinitionVersionResponse>("CreateCoreDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), Version: S.optional(S.String)}) {}
export class CreateDeviceDefinitionResponse extends S.Class<CreateDeviceDefinitionResponse>("CreateDeviceDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String)}) {}
export class CreateDeviceDefinitionVersionResponse extends S.Class<CreateDeviceDefinitionVersionResponse>("CreateDeviceDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), Version: S.optional(S.String)}) {}
export class CreateFunctionDefinitionResponse extends S.Class<CreateFunctionDefinitionResponse>("CreateFunctionDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String)}) {}
export class CreateGroupResponse extends S.Class<CreateGroupResponse>("CreateGroupResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String)}) {}
export class CreateLoggerDefinitionResponse extends S.Class<CreateLoggerDefinitionResponse>("CreateLoggerDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String)}) {}
export class CreateLoggerDefinitionVersionResponse extends S.Class<CreateLoggerDefinitionVersionResponse>("CreateLoggerDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), Version: S.optional(S.String)}) {}
export class CreateResourceDefinitionResponse extends S.Class<CreateResourceDefinitionResponse>("CreateResourceDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String)}) {}
export class CreateSubscriptionDefinitionResponse extends S.Class<CreateSubscriptionDefinitionResponse>("CreateSubscriptionDefinitionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.String), LatestVersion: S.optional(S.String), LatestVersionArn: S.optional(S.String), Name: S.optional(S.String)}) {}
export class CreateSubscriptionDefinitionVersionResponse extends S.Class<CreateSubscriptionDefinitionVersionResponse>("CreateSubscriptionDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), Version: S.optional(S.String)}) {}
export class GetBulkDeploymentStatusResponse extends S.Class<GetBulkDeploymentStatusResponse>("GetBulkDeploymentStatusResponse")({BulkDeploymentMetrics: S.optional(BulkDeploymentMetrics), BulkDeploymentStatus: S.optional(S.String), CreatedAt: S.optional(S.String), ErrorDetails: S.optional(ErrorDetails), ErrorMessage: S.optional(S.String), tags: S.optional(Tags)}) {}
export class ListBulkDeploymentDetailedReportsResponse extends S.Class<ListBulkDeploymentDetailedReportsResponse>("ListBulkDeploymentDetailedReportsResponse")({Deployments: S.optional(BulkDeploymentResults), NextToken: S.optional(S.String)}) {}
export class ListBulkDeploymentsResponse extends S.Class<ListBulkDeploymentsResponse>("ListBulkDeploymentsResponse")({BulkDeployments: S.optional(BulkDeployments), NextToken: S.optional(S.String)}) {}
export class ListConnectorDefinitionsResponse extends S.Class<ListConnectorDefinitionsResponse>("ListConnectorDefinitionsResponse")({Definitions: S.optional(__listOfDefinitionInformation), NextToken: S.optional(S.String)}) {}
export class ListConnectorDefinitionVersionsResponse extends S.Class<ListConnectorDefinitionVersionsResponse>("ListConnectorDefinitionVersionsResponse")({NextToken: S.optional(S.String), Versions: S.optional(__listOfVersionInformation)}) {}
export class ListDeploymentsResponse extends S.Class<ListDeploymentsResponse>("ListDeploymentsResponse")({Deployments: S.optional(Deployments), NextToken: S.optional(S.String)}) {}
export class ListGroupCertificateAuthoritiesResponse extends S.Class<ListGroupCertificateAuthoritiesResponse>("ListGroupCertificateAuthoritiesResponse")({GroupCertificateAuthorities: S.optional(__listOfGroupCertificateAuthorityProperties)}) {}
export class ListGroupsResponse extends S.Class<ListGroupsResponse>("ListGroupsResponse")({Groups: S.optional(__listOfGroupInformation), NextToken: S.optional(S.String)}) {}
export class UpdateConnectivityInfoResponse extends S.Class<UpdateConnectivityInfoResponse>("UpdateConnectivityInfoResponse")({Message: S.optional(S.String), Version: S.optional(S.String)}) {}
export class TelemetryConfiguration extends S.Class<TelemetryConfiguration>("TelemetryConfiguration")({ConfigurationSyncStatus: S.optional(S.String), Telemetry: S.String}) {}
export class RuntimeConfiguration extends S.Class<RuntimeConfiguration>("RuntimeConfiguration")({TelemetryConfiguration: S.optional(TelemetryConfiguration)}) {}
export class CreateConnectorDefinitionVersionResponse extends S.Class<CreateConnectorDefinitionVersionResponse>("CreateConnectorDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), Version: S.optional(S.String)}) {}
export class GetThingRuntimeConfigurationResponse extends S.Class<GetThingRuntimeConfigurationResponse>("GetThingRuntimeConfigurationResponse")({RuntimeConfiguration: S.optional(RuntimeConfiguration)}) {}
export class CreateFunctionDefinitionVersionRequest extends S.Class<CreateFunctionDefinitionVersionRequest>("CreateFunctionDefinitionVersionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), DefaultConfig: S.optional(FunctionDefaultConfig), FunctionDefinitionId: S.String, Functions: S.optional(__listOfFunction)}) {}
export class CreateResourceDefinitionVersionRequest extends S.Class<CreateResourceDefinitionVersionRequest>("CreateResourceDefinitionVersionRequest")({AmznClientToken: S.optional(H.Header("X-Amzn-Client-Token")), ResourceDefinitionId: S.String, Resources: S.optional(__listOfResource)}) {}
export class CreateFunctionDefinitionVersionResponse extends S.Class<CreateFunctionDefinitionVersionResponse>("CreateFunctionDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), Version: S.optional(S.String)}) {}
export class CreateResourceDefinitionVersionResponse extends S.Class<CreateResourceDefinitionVersionResponse>("CreateResourceDefinitionVersionResponse")({Arn: S.optional(S.String), CreationTimestamp: S.optional(S.String), Id: S.optional(S.String), Version: S.optional(S.String)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class InternalServerErrorException extends S.TaggedError<InternalServerErrorException>()("InternalServerErrorException", {}) {};

//# Operations
/**
 * Deletes a core definition.
 */export const deleteCoreDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/cores/{CoreDefinitionId}", method: "DELETE", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.DeleteCoreDefinition" }, DeleteCoreDefinitionRequest, DeleteCoreDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a device definition.
 */export const deleteDeviceDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/devices/{DeviceDefinitionId}", method: "DELETE", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.DeleteDeviceDefinition" }, DeleteDeviceDefinitionRequest, DeleteDeviceDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Lambda function definition.
 */export const deleteFunctionDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/functions/{FunctionDefinitionId}", method: "DELETE", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.DeleteFunctionDefinition" }, DeleteFunctionDefinitionRequest, DeleteFunctionDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a group.
 */export const deleteGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}", method: "DELETE", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.DeleteGroup" }, DeleteGroupRequest, DeleteGroupResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a logger definition.
 */export const deleteLoggerDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/loggers/{LoggerDefinitionId}", method: "DELETE", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.DeleteLoggerDefinition" }, DeleteLoggerDefinitionRequest, DeleteLoggerDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a resource definition.
 */export const deleteResourceDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/resources/{ResourceDefinitionId}", method: "DELETE", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.DeleteResourceDefinition" }, DeleteResourceDefinitionRequest, DeleteResourceDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a subscription definition.
 */export const deleteSubscriptionDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}", method: "DELETE", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.DeleteSubscriptionDefinition" }, DeleteSubscriptionDefinitionRequest, DeleteSubscriptionDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the service role that is attached to your account.
 */export const getServiceRoleForAccount = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/servicerole", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetServiceRoleForAccount" }, GetServiceRoleForAccountRequest, GetServiceRoleForAccountResponse, [InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
 */export const stopBulkDeployment = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/bulk/deployments/{BulkDeploymentId}/$stop", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.StopBulkDeployment" }, StopBulkDeploymentRequest, StopBulkDeploymentResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.TagResource" }, TagResourceRequest, S.Struct({}), [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove resource tags from a Greengrass Resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.UntagResource" }, UntagResourceRequest, S.Struct({}), [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a connector definition.
 */export const updateConnectorDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/connectors/{ConnectorDefinitionId}", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.UpdateConnectorDefinition" }, UpdateConnectorDefinitionRequest, UpdateConnectorDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a core definition.
 */export const updateCoreDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/cores/{CoreDefinitionId}", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.UpdateCoreDefinition" }, UpdateCoreDefinitionRequest, UpdateCoreDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a device definition.
 */export const updateDeviceDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/devices/{DeviceDefinitionId}", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.UpdateDeviceDefinition" }, UpdateDeviceDefinitionRequest, UpdateDeviceDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Lambda function definition.
 */export const updateFunctionDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/functions/{FunctionDefinitionId}", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.UpdateFunctionDefinition" }, UpdateFunctionDefinitionRequest, UpdateFunctionDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a group.
 */export const updateGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.UpdateGroup" }, UpdateGroupRequest, UpdateGroupResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a logger definition.
 */export const updateLoggerDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/loggers/{LoggerDefinitionId}", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.UpdateLoggerDefinition" }, UpdateLoggerDefinitionRequest, UpdateLoggerDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a resource definition.
 */export const updateResourceDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/resources/{ResourceDefinitionId}", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.UpdateResourceDefinition" }, UpdateResourceDefinitionRequest, UpdateResourceDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a subscription definition.
 */export const updateSubscriptionDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.UpdateSubscriptionDefinition" }, UpdateSubscriptionDefinitionRequest, UpdateSubscriptionDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
 */export const associateRoleToGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/role", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.AssociateRoleToGroup" }, AssociateRoleToGroupRequest, AssociateRoleToGroupResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
 */export const associateServiceRoleToAccount = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/servicerole", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.AssociateServiceRoleToAccount" }, AssociateServiceRoleToAccountRequest, AssociateServiceRoleToAccountResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
 */export const createDeployment = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/deployments", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateDeployment" }, CreateDeploymentRequest, CreateDeploymentResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
 */export const createGroupCertificateAuthority = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/certificateauthorities", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateGroupCertificateAuthority" }, CreateGroupCertificateAuthorityRequest, CreateGroupCertificateAuthorityResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a version of a group which has already been defined.
 */export const createGroupVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/versions", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateGroupVersion" }, CreateGroupVersionRequest, CreateGroupVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
 */export const createSoftwareUpdateJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/updates", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateSoftwareUpdateJob" }, CreateSoftwareUpdateJobRequest, CreateSoftwareUpdateJobResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the role from a group.
 */export const disassociateRoleFromGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/role", method: "DELETE", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.DisassociateRoleFromGroup" }, DisassociateRoleFromGroupRequest, DisassociateRoleFromGroupResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the service role from your account. Without a service role, deployments will not work.
 */export const disassociateServiceRoleFromAccount = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/servicerole", method: "DELETE", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.DisassociateServiceRoleFromAccount" }, DisassociateServiceRoleFromAccountRequest, DisassociateServiceRoleFromAccountResponse, [InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the role associated with a particular group.
 */export const getAssociatedRole = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/role", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetAssociatedRole" }, GetAssociatedRoleRequest, GetAssociatedRoleResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the connectivity information for a core.
 */export const getConnectivityInfo = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/things/{ThingName}/connectivityInfo", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetConnectivityInfo" }, GetConnectivityInfoRequest, GetConnectivityInfoResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a connector definition.
 */export const getConnectorDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/connectors/{ConnectorDefinitionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetConnectorDefinition" }, GetConnectorDefinitionRequest, GetConnectorDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
 */export const getConnectorDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetConnectorDefinitionVersion" }, GetConnectorDefinitionVersionRequest, GetConnectorDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a core definition version.
 */export const getCoreDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/cores/{CoreDefinitionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetCoreDefinition" }, GetCoreDefinitionRequest, GetCoreDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a core definition version.
 */export const getCoreDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetCoreDefinitionVersion" }, GetCoreDefinitionVersionRequest, GetCoreDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the status of a deployment.
 */export const getDeploymentStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/deployments/{DeploymentId}/status", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetDeploymentStatus" }, GetDeploymentStatusRequest, GetDeploymentStatusResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a device definition.
 */export const getDeviceDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/devices/{DeviceDefinitionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetDeviceDefinition" }, GetDeviceDefinitionRequest, GetDeviceDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a device definition version.
 */export const getDeviceDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetDeviceDefinitionVersion" }, GetDeviceDefinitionVersionRequest, GetDeviceDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a Lambda function definition, including its creation time and latest version.
 */export const getFunctionDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/functions/{FunctionDefinitionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetFunctionDefinition" }, GetFunctionDefinitionRequest, GetFunctionDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
 */export const getFunctionDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetFunctionDefinitionVersion" }, GetFunctionDefinitionVersionRequest, GetFunctionDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a group.
 */export const getGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetGroup" }, GetGroupRequest, GetGroupResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retreives the CA associated with a group. Returns the public key of the CA.
 */export const getGroupCertificateAuthority = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetGroupCertificateAuthority" }, GetGroupCertificateAuthorityRequest, GetGroupCertificateAuthorityResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current configuration for the CA used by the group.
 */export const getGroupCertificateConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetGroupCertificateConfiguration" }, GetGroupCertificateConfigurationRequest, GetGroupCertificateConfigurationResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a group version.
 */export const getGroupVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/versions/{GroupVersionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetGroupVersion" }, GetGroupVersionRequest, GetGroupVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a logger definition.
 */export const getLoggerDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/loggers/{LoggerDefinitionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetLoggerDefinition" }, GetLoggerDefinitionRequest, GetLoggerDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a logger definition version.
 */export const getLoggerDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetLoggerDefinitionVersion" }, GetLoggerDefinitionVersionRequest, GetLoggerDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a resource definition, including its creation time and latest version.
 */export const getResourceDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/resources/{ResourceDefinitionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetResourceDefinition" }, GetResourceDefinitionRequest, GetResourceDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a resource definition version, including which resources are included in the version.
 */export const getResourceDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetResourceDefinitionVersion" }, GetResourceDefinitionVersionRequest, GetResourceDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a subscription definition.
 */export const getSubscriptionDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetSubscriptionDefinition" }, GetSubscriptionDefinitionRequest, GetSubscriptionDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a subscription definition version.
 */export const getSubscriptionDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetSubscriptionDefinitionVersion" }, GetSubscriptionDefinitionVersionRequest, GetSubscriptionDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of core definitions.
 */export const listCoreDefinitions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/cores", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListCoreDefinitions" }, ListCoreDefinitionsRequest, ListCoreDefinitionsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the versions of a core definition.
 */export const listCoreDefinitionVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/cores/{CoreDefinitionId}/versions", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListCoreDefinitionVersions" }, ListCoreDefinitionVersionsRequest, ListCoreDefinitionVersionsResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of device definitions.
 */export const listDeviceDefinitions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/devices", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListDeviceDefinitions" }, ListDeviceDefinitionsRequest, ListDeviceDefinitionsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the versions of a device definition.
 */export const listDeviceDefinitionVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/devices/{DeviceDefinitionId}/versions", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListDeviceDefinitionVersions" }, ListDeviceDefinitionVersionsRequest, ListDeviceDefinitionVersionsResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of Lambda function definitions.
 */export const listFunctionDefinitions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/functions", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListFunctionDefinitions" }, ListFunctionDefinitionsRequest, ListFunctionDefinitionsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the versions of a Lambda function definition.
 */export const listFunctionDefinitionVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/functions/{FunctionDefinitionId}/versions", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListFunctionDefinitionVersions" }, ListFunctionDefinitionVersionsRequest, ListFunctionDefinitionVersionsResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the versions of a group.
 */export const listGroupVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/versions", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListGroupVersions" }, ListGroupVersionsRequest, ListGroupVersionsResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of logger definitions.
 */export const listLoggerDefinitions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/loggers", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListLoggerDefinitions" }, ListLoggerDefinitionsRequest, ListLoggerDefinitionsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the versions of a logger definition.
 */export const listLoggerDefinitionVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/loggers/{LoggerDefinitionId}/versions", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListLoggerDefinitionVersions" }, ListLoggerDefinitionVersionsRequest, ListLoggerDefinitionVersionsResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of resource definitions.
 */export const listResourceDefinitions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/resources", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListResourceDefinitions" }, ListResourceDefinitionsRequest, ListResourceDefinitionsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the versions of a resource definition.
 */export const listResourceDefinitionVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/resources/{ResourceDefinitionId}/versions", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListResourceDefinitionVersions" }, ListResourceDefinitionVersionsRequest, ListResourceDefinitionVersionsResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of subscription definitions.
 */export const listSubscriptionDefinitions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/subscriptions", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListSubscriptionDefinitions" }, ListSubscriptionDefinitionsRequest, ListSubscriptionDefinitionsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the versions of a subscription definition.
 */export const listSubscriptionDefinitionVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListSubscriptionDefinitionVersions" }, ListSubscriptionDefinitionVersionsRequest, ListSubscriptionDefinitionVersionsResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of resource tags for a resource arn.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Resets a group's deployments.
 */export const resetDeployments = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/deployments/$reset", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ResetDeployments" }, ResetDeploymentsRequest, ResetDeploymentsResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
 */export const startBulkDeployment = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/bulk/deployments", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.StartBulkDeployment" }, StartBulkDeploymentRequest, StartBulkDeploymentResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the Certificate expiry time for a group.
 */export const updateGroupCertificateConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.UpdateGroupCertificateConfiguration" }, UpdateGroupCertificateConfigurationRequest, UpdateGroupCertificateConfigurationResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the runtime configuration of a thing.
 */export const updateThingRuntimeConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/things/{ThingName}/runtimeconfig", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.UpdateThingRuntimeConfiguration" }, UpdateThingRuntimeConfigurationRequest, UpdateThingRuntimeConfigurationResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
 */export const createConnectorDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/connectors", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateConnectorDefinition" }, CreateConnectorDefinitionRequest, CreateConnectorDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
 */export const createCoreDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/cores", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateCoreDefinition" }, CreateCoreDefinitionRequest, CreateCoreDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
 */export const createCoreDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/cores/{CoreDefinitionId}/versions", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateCoreDefinitionVersion" }, CreateCoreDefinitionVersionRequest, CreateCoreDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
 */export const createDeviceDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/devices", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateDeviceDefinition" }, CreateDeviceDefinitionRequest, CreateDeviceDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a version of a device definition that has already been defined.
 */export const createDeviceDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/devices/{DeviceDefinitionId}/versions", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateDeviceDefinitionVersion" }, CreateDeviceDefinitionVersionRequest, CreateDeviceDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
 */export const createFunctionDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/functions", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateFunctionDefinition" }, CreateFunctionDefinitionRequest, CreateFunctionDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
 */export const createGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateGroup" }, CreateGroupRequest, CreateGroupResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
 */export const createLoggerDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/loggers", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateLoggerDefinition" }, CreateLoggerDefinitionRequest, CreateLoggerDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a version of a logger definition that has already been defined.
 */export const createLoggerDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/loggers/{LoggerDefinitionId}/versions", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateLoggerDefinitionVersion" }, CreateLoggerDefinitionVersionRequest, CreateLoggerDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
 */export const createResourceDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/resources", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateResourceDefinition" }, CreateResourceDefinitionRequest, CreateResourceDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
 */export const createSubscriptionDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/subscriptions", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateSubscriptionDefinition" }, CreateSubscriptionDefinitionRequest, CreateSubscriptionDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a version of a subscription definition which has already been defined.
 */export const createSubscriptionDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateSubscriptionDefinitionVersion" }, CreateSubscriptionDefinitionVersionRequest, CreateSubscriptionDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a connector definition.
 */export const deleteConnectorDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/connectors/{ConnectorDefinitionId}", method: "DELETE", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.DeleteConnectorDefinition" }, DeleteConnectorDefinitionRequest, DeleteConnectorDefinitionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the status of a bulk deployment.
 */export const getBulkDeploymentStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/bulk/deployments/{BulkDeploymentId}/status", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetBulkDeploymentStatus" }, GetBulkDeploymentStatusRequest, GetBulkDeploymentStatusResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
 */export const listBulkDeploymentDetailedReports = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListBulkDeploymentDetailedReports" }, ListBulkDeploymentDetailedReportsRequest, ListBulkDeploymentDetailedReportsResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of bulk deployments.
 */export const listBulkDeployments = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/bulk/deployments", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListBulkDeployments" }, ListBulkDeploymentsRequest, ListBulkDeploymentsResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of connector definitions.
 */export const listConnectorDefinitions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/connectors", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListConnectorDefinitions" }, ListConnectorDefinitionsRequest, ListConnectorDefinitionsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
 */export const listConnectorDefinitionVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListConnectorDefinitionVersions" }, ListConnectorDefinitionVersionsRequest, ListConnectorDefinitionVersionsResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a history of deployments for the group.
 */export const listDeployments = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/deployments", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListDeployments" }, ListDeploymentsRequest, ListDeploymentsResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current CAs for a group.
 */export const listGroupCertificateAuthorities = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups/{GroupId}/certificateauthorities", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListGroupCertificateAuthorities" }, ListGroupCertificateAuthoritiesRequest, ListGroupCertificateAuthoritiesResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of groups.
 */export const listGroups = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/groups", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.ListGroups" }, ListGroupsRequest, ListGroupsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
 */export const updateConnectivityInfo = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/things/{ThingName}/connectivityInfo", method: "PUT", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.UpdateConnectivityInfo" }, UpdateConnectivityInfoRequest, UpdateConnectivityInfoResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a version of a connector definition which has already been defined.
 */export const createConnectorDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateConnectorDefinitionVersion" }, CreateConnectorDefinitionVersionRequest, CreateConnectorDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the runtime configuration of a thing.
 */export const getThingRuntimeConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/things/{ThingName}/runtimeconfig", method: "GET", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.GetThingRuntimeConfiguration" }, GetThingRuntimeConfigurationRequest, GetThingRuntimeConfigurationResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a version of a Lambda function definition that has already been defined.
 */export const createFunctionDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/functions/{FunctionDefinitionId}/versions", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateFunctionDefinitionVersion" }, CreateFunctionDefinitionVersionRequest, CreateFunctionDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a version of a resource definition that has already been defined.
 */export const createResourceDefinitionVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-06-07", uri: "/greengrass/definition/resources/{ResourceDefinitionId}/versions", method: "POST", sdkId: "Greengrass", sigV4ServiceName: "greengrass", name: "Greengrass.CreateResourceDefinitionVersion" }, CreateResourceDefinitionVersionRequest, CreateResourceDefinitionVersionResponse, [BadRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

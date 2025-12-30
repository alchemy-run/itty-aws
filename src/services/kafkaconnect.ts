import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export const Tags = S.Record({key: S.String, value: S.String});
export class CreateWorkerConfigurationRequest extends S.Class<CreateWorkerConfigurationRequest>("CreateWorkerConfigurationRequest")({description: S.optional(S.String), name: S.String, propertiesFileContent: S.String, tags: S.optional(Tags)}) {}
export class DeleteConnectorRequest extends S.Class<DeleteConnectorRequest>("DeleteConnectorRequest")({connectorArn: S.String, currentVersion: S.optional(S.String)}) {}
export class DeleteCustomPluginRequest extends S.Class<DeleteCustomPluginRequest>("DeleteCustomPluginRequest")({customPluginArn: S.String}) {}
export class DeleteWorkerConfigurationRequest extends S.Class<DeleteWorkerConfigurationRequest>("DeleteWorkerConfigurationRequest")({workerConfigurationArn: S.String}) {}
export class DescribeConnectorRequest extends S.Class<DescribeConnectorRequest>("DescribeConnectorRequest")({connectorArn: S.String}) {}
export class DescribeConnectorOperationRequest extends S.Class<DescribeConnectorOperationRequest>("DescribeConnectorOperationRequest")({connectorOperationArn: S.String}) {}
export class DescribeCustomPluginRequest extends S.Class<DescribeCustomPluginRequest>("DescribeCustomPluginRequest")({customPluginArn: S.String}) {}
export class DescribeWorkerConfigurationRequest extends S.Class<DescribeWorkerConfigurationRequest>("DescribeWorkerConfigurationRequest")({workerConfigurationArn: S.String}) {}
export class ListConnectorOperationsRequest extends S.Class<ListConnectorOperationsRequest>("ListConnectorOperationsRequest")({connectorArn: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListConnectorsRequest extends S.Class<ListConnectorsRequest>("ListConnectorsRequest")({connectorNamePrefix: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListCustomPluginsRequest extends S.Class<ListCustomPluginsRequest>("ListCustomPluginsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), namePrefix: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class ListWorkerConfigurationsRequest extends S.Class<ListWorkerConfigurationsRequest>("ListWorkerConfigurationsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), namePrefix: S.optional(S.String)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const ConnectorConfiguration = S.Record({key: S.String, value: S.String});
export class KafkaClusterClientAuthentication extends S.Class<KafkaClusterClientAuthentication>("KafkaClusterClientAuthentication")({authenticationType: S.String}) {}
export class KafkaClusterEncryptionInTransit extends S.Class<KafkaClusterEncryptionInTransit>("KafkaClusterEncryptionInTransit")({encryptionType: S.String}) {}
export class WorkerConfiguration extends S.Class<WorkerConfiguration>("WorkerConfiguration")({revision: S.Number, workerConfigurationArn: S.String}) {}
export const ConnectorConfigurationUpdate = S.Record({key: S.String, value: S.String});
export class DeleteConnectorResponse extends S.Class<DeleteConnectorResponse>("DeleteConnectorResponse")({connectorArn: S.optional(S.String), connectorState: S.optional(S.String)}) {}
export class DeleteCustomPluginResponse extends S.Class<DeleteCustomPluginResponse>("DeleteCustomPluginResponse")({customPluginArn: S.optional(S.String), customPluginState: S.optional(S.String)}) {}
export class DeleteWorkerConfigurationResponse extends S.Class<DeleteWorkerConfigurationResponse>("DeleteWorkerConfigurationResponse")({workerConfigurationArn: S.optional(S.String), workerConfigurationState: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(Tags)}) {}
export class ProvisionedCapacity extends S.Class<ProvisionedCapacity>("ProvisionedCapacity")({mcuCount: S.Number, workerCount: S.Number}) {}
export class CustomPlugin extends S.Class<CustomPlugin>("CustomPlugin")({customPluginArn: S.String, revision: S.Number}) {}
export class S3Location extends S.Class<S3Location>("S3Location")({bucketArn: S.String, fileKey: S.String, objectVersion: S.optional(S.String)}) {}
export class ProvisionedCapacityUpdate extends S.Class<ProvisionedCapacityUpdate>("ProvisionedCapacityUpdate")({mcuCount: S.Number, workerCount: S.Number}) {}
export const __listOf__string = S.Array(S.String);
export class Plugin extends S.Class<Plugin>("Plugin")({customPlugin: CustomPlugin}) {}
export const __listOfPlugin = S.Array(Plugin);
export class CustomPluginLocation extends S.Class<CustomPluginLocation>("CustomPluginLocation")({s3Location: S3Location}) {}
export class WorkerConfigurationRevisionSummary extends S.Class<WorkerConfigurationRevisionSummary>("WorkerConfigurationRevisionSummary")({creationTime: S.optional(S.Date), description: S.optional(S.String), revision: S.optional(S.Number)}) {}
export class KafkaClusterClientAuthenticationDescription extends S.Class<KafkaClusterClientAuthenticationDescription>("KafkaClusterClientAuthenticationDescription")({authenticationType: S.optional(S.String)}) {}
export class KafkaClusterEncryptionInTransitDescription extends S.Class<KafkaClusterEncryptionInTransitDescription>("KafkaClusterEncryptionInTransitDescription")({encryptionType: S.optional(S.String)}) {}
export class WorkerConfigurationDescription extends S.Class<WorkerConfigurationDescription>("WorkerConfigurationDescription")({revision: S.optional(S.Number), workerConfigurationArn: S.optional(S.String)}) {}
export class StateDescription extends S.Class<StateDescription>("StateDescription")({code: S.optional(S.String), message: S.optional(S.String)}) {}
export class ConnectorOperationStep extends S.Class<ConnectorOperationStep>("ConnectorOperationStep")({stepType: S.optional(S.String), stepState: S.optional(S.String)}) {}
export const __listOfConnectorOperationStep = S.Array(ConnectorOperationStep);
export class ScaleInPolicyDescription extends S.Class<ScaleInPolicyDescription>("ScaleInPolicyDescription")({cpuUtilizationPercentage: S.optional(S.Number)}) {}
export class ScaleOutPolicyDescription extends S.Class<ScaleOutPolicyDescription>("ScaleOutPolicyDescription")({cpuUtilizationPercentage: S.optional(S.Number)}) {}
export class AutoScalingDescription extends S.Class<AutoScalingDescription>("AutoScalingDescription")({maxWorkerCount: S.optional(S.Number), mcuCount: S.optional(S.Number), minWorkerCount: S.optional(S.Number), scaleInPolicy: S.optional(ScaleInPolicyDescription), scaleOutPolicy: S.optional(ScaleOutPolicyDescription)}) {}
export class ProvisionedCapacityDescription extends S.Class<ProvisionedCapacityDescription>("ProvisionedCapacityDescription")({mcuCount: S.optional(S.Number), workerCount: S.optional(S.Number)}) {}
export class CapacityDescription extends S.Class<CapacityDescription>("CapacityDescription")({autoScaling: S.optional(AutoScalingDescription), provisionedCapacity: S.optional(ProvisionedCapacityDescription)}) {}
export class WorkerSetting extends S.Class<WorkerSetting>("WorkerSetting")({capacity: S.optional(CapacityDescription)}) {}
export class WorkerConfigurationRevisionDescription extends S.Class<WorkerConfigurationRevisionDescription>("WorkerConfigurationRevisionDescription")({creationTime: S.optional(S.Date), description: S.optional(S.String), propertiesFileContent: S.optional(S.String), revision: S.optional(S.Number)}) {}
export class ConnectorOperationSummary extends S.Class<ConnectorOperationSummary>("ConnectorOperationSummary")({connectorOperationArn: S.optional(S.String), connectorOperationType: S.optional(S.String), connectorOperationState: S.optional(S.String), creationTime: S.optional(S.Date), endTime: S.optional(S.Date)}) {}
export const __listOfConnectorOperationSummary = S.Array(ConnectorOperationSummary);
export class VpcDescription extends S.Class<VpcDescription>("VpcDescription")({securityGroups: S.optional(__listOf__string), subnets: S.optional(__listOf__string)}) {}
export class ApacheKafkaClusterDescription extends S.Class<ApacheKafkaClusterDescription>("ApacheKafkaClusterDescription")({bootstrapServers: S.optional(S.String), vpc: S.optional(VpcDescription)}) {}
export class KafkaClusterDescription extends S.Class<KafkaClusterDescription>("KafkaClusterDescription")({apacheKafkaCluster: S.optional(ApacheKafkaClusterDescription)}) {}
export class CloudWatchLogsLogDeliveryDescription extends S.Class<CloudWatchLogsLogDeliveryDescription>("CloudWatchLogsLogDeliveryDescription")({enabled: S.optional(S.Boolean), logGroup: S.optional(S.String)}) {}
export class FirehoseLogDeliveryDescription extends S.Class<FirehoseLogDeliveryDescription>("FirehoseLogDeliveryDescription")({deliveryStream: S.optional(S.String), enabled: S.optional(S.Boolean)}) {}
export class S3LogDeliveryDescription extends S.Class<S3LogDeliveryDescription>("S3LogDeliveryDescription")({bucket: S.optional(S.String), enabled: S.optional(S.Boolean), prefix: S.optional(S.String)}) {}
export class WorkerLogDeliveryDescription extends S.Class<WorkerLogDeliveryDescription>("WorkerLogDeliveryDescription")({cloudWatchLogs: S.optional(CloudWatchLogsLogDeliveryDescription), firehose: S.optional(FirehoseLogDeliveryDescription), s3: S.optional(S3LogDeliveryDescription)}) {}
export class LogDeliveryDescription extends S.Class<LogDeliveryDescription>("LogDeliveryDescription")({workerLogDelivery: S.optional(WorkerLogDeliveryDescription)}) {}
export class CustomPluginDescription extends S.Class<CustomPluginDescription>("CustomPluginDescription")({customPluginArn: S.optional(S.String), revision: S.optional(S.Number)}) {}
export class PluginDescription extends S.Class<PluginDescription>("PluginDescription")({customPlugin: S.optional(CustomPluginDescription)}) {}
export const __listOfPluginDescription = S.Array(PluginDescription);
export class ConnectorSummary extends S.Class<ConnectorSummary>("ConnectorSummary")({capacity: S.optional(CapacityDescription), connectorArn: S.optional(S.String), connectorDescription: S.optional(S.String), connectorName: S.optional(S.String), connectorState: S.optional(S.String), creationTime: S.optional(S.Date), currentVersion: S.optional(S.String), kafkaCluster: S.optional(KafkaClusterDescription), kafkaClusterClientAuthentication: S.optional(KafkaClusterClientAuthenticationDescription), kafkaClusterEncryptionInTransit: S.optional(KafkaClusterEncryptionInTransitDescription), kafkaConnectVersion: S.optional(S.String), logDelivery: S.optional(LogDeliveryDescription), networkType: S.optional(S.String), plugins: S.optional(__listOfPluginDescription), serviceExecutionRoleArn: S.optional(S.String), workerConfiguration: S.optional(WorkerConfigurationDescription)}) {}
export const __listOfConnectorSummary = S.Array(ConnectorSummary);
export class CustomPluginFileDescription extends S.Class<CustomPluginFileDescription>("CustomPluginFileDescription")({fileMd5: S.optional(S.String), fileSize: S.optional(S.Number)}) {}
export class S3LocationDescription extends S.Class<S3LocationDescription>("S3LocationDescription")({bucketArn: S.optional(S.String), fileKey: S.optional(S.String), objectVersion: S.optional(S.String)}) {}
export class CustomPluginLocationDescription extends S.Class<CustomPluginLocationDescription>("CustomPluginLocationDescription")({s3Location: S.optional(S3LocationDescription)}) {}
export class CustomPluginRevisionSummary extends S.Class<CustomPluginRevisionSummary>("CustomPluginRevisionSummary")({contentType: S.optional(S.String), creationTime: S.optional(S.Date), description: S.optional(S.String), fileDescription: S.optional(CustomPluginFileDescription), location: S.optional(CustomPluginLocationDescription), revision: S.optional(S.Number)}) {}
export class CustomPluginSummary extends S.Class<CustomPluginSummary>("CustomPluginSummary")({creationTime: S.optional(S.Date), customPluginArn: S.optional(S.String), customPluginState: S.optional(S.String), description: S.optional(S.String), latestRevision: S.optional(CustomPluginRevisionSummary), name: S.optional(S.String)}) {}
export const __listOfCustomPluginSummary = S.Array(CustomPluginSummary);
export class WorkerConfigurationSummary extends S.Class<WorkerConfigurationSummary>("WorkerConfigurationSummary")({creationTime: S.optional(S.Date), description: S.optional(S.String), latestRevision: S.optional(WorkerConfigurationRevisionSummary), name: S.optional(S.String), workerConfigurationArn: S.optional(S.String), workerConfigurationState: S.optional(S.String)}) {}
export const __listOfWorkerConfigurationSummary = S.Array(WorkerConfigurationSummary);
export class ScaleInPolicy extends S.Class<ScaleInPolicy>("ScaleInPolicy")({cpuUtilizationPercentage: S.Number}) {}
export class ScaleOutPolicy extends S.Class<ScaleOutPolicy>("ScaleOutPolicy")({cpuUtilizationPercentage: S.Number}) {}
export class Vpc extends S.Class<Vpc>("Vpc")({securityGroups: S.optional(__listOf__string), subnets: __listOf__string}) {}
export class CloudWatchLogsLogDelivery extends S.Class<CloudWatchLogsLogDelivery>("CloudWatchLogsLogDelivery")({enabled: S.Boolean, logGroup: S.optional(S.String)}) {}
export class FirehoseLogDelivery extends S.Class<FirehoseLogDelivery>("FirehoseLogDelivery")({deliveryStream: S.optional(S.String), enabled: S.Boolean}) {}
export class S3LogDelivery extends S.Class<S3LogDelivery>("S3LogDelivery")({bucket: S.optional(S.String), enabled: S.Boolean, prefix: S.optional(S.String)}) {}
export class ScaleInPolicyUpdate extends S.Class<ScaleInPolicyUpdate>("ScaleInPolicyUpdate")({cpuUtilizationPercentage: S.Number}) {}
export class ScaleOutPolicyUpdate extends S.Class<ScaleOutPolicyUpdate>("ScaleOutPolicyUpdate")({cpuUtilizationPercentage: S.Number}) {}
export class CreateCustomPluginRequest extends S.Class<CreateCustomPluginRequest>("CreateCustomPluginRequest")({contentType: S.String, description: S.optional(S.String), location: CustomPluginLocation, name: S.String, tags: S.optional(Tags)}) {}
export class CreateWorkerConfigurationResponse extends S.Class<CreateWorkerConfigurationResponse>("CreateWorkerConfigurationResponse")({creationTime: S.optional(S.Date), latestRevision: S.optional(WorkerConfigurationRevisionSummary), name: S.optional(S.String), workerConfigurationArn: S.optional(S.String), workerConfigurationState: S.optional(S.String)}) {}
export class DescribeConnectorOperationResponse extends S.Class<DescribeConnectorOperationResponse>("DescribeConnectorOperationResponse")({connectorArn: S.optional(S.String), connectorOperationArn: S.optional(S.String), connectorOperationState: S.optional(S.String), connectorOperationType: S.optional(S.String), operationSteps: S.optional(__listOfConnectorOperationStep), originWorkerSetting: S.optional(WorkerSetting), originConnectorConfiguration: S.optional(ConnectorConfiguration), targetWorkerSetting: S.optional(WorkerSetting), targetConnectorConfiguration: S.optional(ConnectorConfiguration), errorInfo: S.optional(StateDescription), creationTime: S.optional(S.Date), endTime: S.optional(S.Date)}) {}
export class DescribeWorkerConfigurationResponse extends S.Class<DescribeWorkerConfigurationResponse>("DescribeWorkerConfigurationResponse")({creationTime: S.optional(S.Date), description: S.optional(S.String), latestRevision: S.optional(WorkerConfigurationRevisionDescription), name: S.optional(S.String), workerConfigurationArn: S.optional(S.String), workerConfigurationState: S.optional(S.String)}) {}
export class ListConnectorOperationsResponse extends S.Class<ListConnectorOperationsResponse>("ListConnectorOperationsResponse")({connectorOperations: S.optional(__listOfConnectorOperationSummary), nextToken: S.optional(S.String)}) {}
export class ListConnectorsResponse extends S.Class<ListConnectorsResponse>("ListConnectorsResponse")({connectors: S.optional(__listOfConnectorSummary), nextToken: S.optional(S.String)}) {}
export class ListCustomPluginsResponse extends S.Class<ListCustomPluginsResponse>("ListCustomPluginsResponse")({customPlugins: S.optional(__listOfCustomPluginSummary), nextToken: S.optional(S.String)}) {}
export class ListWorkerConfigurationsResponse extends S.Class<ListWorkerConfigurationsResponse>("ListWorkerConfigurationsResponse")({nextToken: S.optional(S.String), workerConfigurations: S.optional(__listOfWorkerConfigurationSummary)}) {}
export class AutoScaling extends S.Class<AutoScaling>("AutoScaling")({maxWorkerCount: S.Number, mcuCount: S.Number, minWorkerCount: S.Number, scaleInPolicy: S.optional(ScaleInPolicy), scaleOutPolicy: S.optional(ScaleOutPolicy)}) {}
export class ApacheKafkaCluster extends S.Class<ApacheKafkaCluster>("ApacheKafkaCluster")({bootstrapServers: S.String, vpc: Vpc}) {}
export class WorkerLogDelivery extends S.Class<WorkerLogDelivery>("WorkerLogDelivery")({cloudWatchLogs: S.optional(CloudWatchLogsLogDelivery), firehose: S.optional(FirehoseLogDelivery), s3: S.optional(S3LogDelivery)}) {}
export class AutoScalingUpdate extends S.Class<AutoScalingUpdate>("AutoScalingUpdate")({maxWorkerCount: S.Number, mcuCount: S.Number, minWorkerCount: S.Number, scaleInPolicy: ScaleInPolicyUpdate, scaleOutPolicy: ScaleOutPolicyUpdate}) {}
export class Capacity extends S.Class<Capacity>("Capacity")({autoScaling: S.optional(AutoScaling), provisionedCapacity: S.optional(ProvisionedCapacity)}) {}
export class KafkaCluster extends S.Class<KafkaCluster>("KafkaCluster")({apacheKafkaCluster: ApacheKafkaCluster}) {}
export class LogDelivery extends S.Class<LogDelivery>("LogDelivery")({workerLogDelivery: WorkerLogDelivery}) {}
export class CapacityUpdate extends S.Class<CapacityUpdate>("CapacityUpdate")({autoScaling: S.optional(AutoScalingUpdate), provisionedCapacity: S.optional(ProvisionedCapacityUpdate)}) {}
export class CreateConnectorRequest extends S.Class<CreateConnectorRequest>("CreateConnectorRequest")({capacity: Capacity, connectorConfiguration: ConnectorConfiguration, connectorDescription: S.optional(S.String), connectorName: S.String, kafkaCluster: KafkaCluster, kafkaClusterClientAuthentication: KafkaClusterClientAuthentication, kafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransit, kafkaConnectVersion: S.String, logDelivery: S.optional(LogDelivery), networkType: S.optional(S.String), plugins: __listOfPlugin, serviceExecutionRoleArn: S.String, workerConfiguration: S.optional(WorkerConfiguration), tags: S.optional(Tags)}) {}
export class CreateCustomPluginResponse extends S.Class<CreateCustomPluginResponse>("CreateCustomPluginResponse")({customPluginArn: S.optional(S.String), customPluginState: S.optional(S.String), name: S.optional(S.String), revision: S.optional(S.Number)}) {}
export class UpdateConnectorRequest extends S.Class<UpdateConnectorRequest>("UpdateConnectorRequest")({capacity: S.optional(CapacityUpdate), connectorConfiguration: S.optional(ConnectorConfigurationUpdate), connectorArn: S.String, currentVersion: S.String}) {}
export class CreateConnectorResponse extends S.Class<CreateConnectorResponse>("CreateConnectorResponse")({connectorArn: S.optional(S.String), connectorName: S.optional(S.String), connectorState: S.optional(S.String)}) {}
export class DescribeConnectorResponse extends S.Class<DescribeConnectorResponse>("DescribeConnectorResponse")({capacity: S.optional(CapacityDescription), connectorArn: S.optional(S.String), connectorConfiguration: S.optional(ConnectorConfiguration), connectorDescription: S.optional(S.String), connectorName: S.optional(S.String), connectorState: S.optional(S.String), creationTime: S.optional(S.Date), currentVersion: S.optional(S.String), kafkaCluster: S.optional(KafkaClusterDescription), kafkaClusterClientAuthentication: S.optional(KafkaClusterClientAuthenticationDescription), kafkaClusterEncryptionInTransit: S.optional(KafkaClusterEncryptionInTransitDescription), kafkaConnectVersion: S.optional(S.String), logDelivery: S.optional(LogDeliveryDescription), networkType: S.optional(S.String), plugins: S.optional(__listOfPluginDescription), serviceExecutionRoleArn: S.optional(S.String), workerConfiguration: S.optional(WorkerConfigurationDescription), stateDescription: S.optional(StateDescription)}) {}
export class DescribeCustomPluginResponse extends S.Class<DescribeCustomPluginResponse>("DescribeCustomPluginResponse")({creationTime: S.optional(S.Date), customPluginArn: S.optional(S.String), customPluginState: S.optional(S.String), description: S.optional(S.String), latestRevision: S.optional(CustomPluginRevisionSummary), name: S.optional(S.String), stateDescription: S.optional(StateDescription)}) {}
export class UpdateConnectorResponse extends S.Class<UpdateConnectorResponse>("UpdateConnectorResponse")({connectorArn: S.optional(S.String), connectorState: S.optional(S.String), connectorOperationArn: S.optional(S.String)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class InternalServerErrorException extends S.TaggedError<InternalServerErrorException>()("InternalServerErrorException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};

//# Operations
/**
 * Creates a worker configuration using the specified properties.
 */export const createWorkerConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/worker-configurations", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.CreateWorkerConfiguration" }, CreateWorkerConfigurationRequest, CreateWorkerConfigurationResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified connector.
 */export const deleteConnector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/connectors/{connectorArn}", method: "DELETE", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.DeleteConnector" }, DeleteConnectorRequest, DeleteConnectorResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a custom plugin.
 */export const deleteCustomPlugin = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/custom-plugins/{customPluginArn}", method: "DELETE", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.DeleteCustomPlugin" }, DeleteCustomPluginRequest, DeleteCustomPluginResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified worker configuration.
 */export const deleteWorkerConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/worker-configurations/{workerConfigurationArn}", method: "DELETE", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.DeleteWorkerConfiguration" }, DeleteWorkerConfigurationRequest, DeleteWorkerConfigurationResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the specified connector's operations.
 */export const describeConnectorOperation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/connectorOperations/{connectorOperationArn}", method: "GET", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.DescribeConnectorOperation" }, DescribeConnectorOperationRequest, DescribeConnectorOperationResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a worker configuration.
 */export const describeWorkerConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/worker-configurations/{workerConfigurationArn}", method: "GET", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.DescribeWorkerConfiguration" }, DescribeWorkerConfigurationRequest, DescribeWorkerConfigurationResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists information about a connector's operation(s).
 */export const listConnectorOperations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/connectors/{connectorArn}/operations", method: "GET", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.ListConnectorOperations" }, ListConnectorOperationsRequest, ListConnectorOperationsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
 */export const listConnectors = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/connectors", method: "GET", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.ListConnectors" }, ListConnectorsRequest, ListConnectorsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all of the custom plugins in this account and Region.
 */export const listCustomPlugins = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/custom-plugins", method: "GET", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.ListCustomPlugins" }, ListCustomPluginsRequest, ListCustomPluginsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the tags attached to the specified resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/tags/{resourceArn}", method: "GET", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all of the worker configurations in this account and Region.
 */export const listWorkerConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/worker-configurations", method: "GET", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.ListWorkerConfigurations" }, ListWorkerConfigurationsRequest, ListWorkerConfigurationsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attaches tags to the specified resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/tags/{resourceArn}", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.TagResource" }, TagResourceRequest, TagResourceResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from the specified resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/tags/{resourceArn}", method: "DELETE", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a custom plugin using the specified properties.
 */export const createCustomPlugin = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/custom-plugins", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.CreateCustomPlugin" }, CreateCustomPluginRequest, CreateCustomPluginResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a connector using the specified properties.
 */export const createConnector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/connectors", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.CreateConnector" }, CreateConnectorRequest, CreateConnectorResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns summary information about the connector.
 */export const describeConnector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/connectors/{connectorArn}", method: "GET", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.DescribeConnector" }, DescribeConnectorRequest, DescribeConnectorResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A summary description of the custom plugin.
 */export const describeCustomPlugin = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/custom-plugins/{customPluginArn}", method: "GET", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.DescribeCustomPlugin" }, DescribeCustomPluginRequest, DescribeCustomPluginResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified connector. For request body, specify only one parameter: either `capacity` or `connectorConfiguration`.
 */export const updateConnector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-14", uri: "/v1/connectors/{connectorArn}", method: "PUT", sdkId: "KafkaConnect", sigV4ServiceName: "kafkaconnect", name: "KafkaConnect.UpdateConnector" }, UpdateConnectorRequest, UpdateConnectorResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

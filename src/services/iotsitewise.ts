import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DescribeDefaultEncryptionConfigurationRequest extends S.Class<DescribeDefaultEncryptionConfigurationRequest>("DescribeDefaultEncryptionConfigurationRequest")({}) {}
export class DescribeLoggingOptionsRequest extends S.Class<DescribeLoggingOptionsRequest>("DescribeLoggingOptionsRequest")({}) {}
export class DescribeStorageConfigurationRequest extends S.Class<DescribeStorageConfigurationRequest>("DescribeStorageConfigurationRequest")({}) {}
export const IDs = S.Array(S.String);
export const AggregateTypes = S.Array(S.String);
export const Qualities = S.Array(S.String);
export const ListAssetModelsTypeFilter = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AssociateAssetsRequest extends S.Class<AssociateAssetsRequest>("AssociateAssetsRequest")({assetId: S.String, hierarchyId: S.String, childAssetId: S.String, clientToken: S.optional(S.String)}) {}
export class AssociateTimeSeriesToAssetPropertyRequest extends S.Class<AssociateTimeSeriesToAssetPropertyRequest>("AssociateTimeSeriesToAssetPropertyRequest")({alias: S.String, assetId: S.String, propertyId: S.String, clientToken: S.optional(S.String)}) {}
export class BatchAssociateProjectAssetsRequest extends S.Class<BatchAssociateProjectAssetsRequest>("BatchAssociateProjectAssetsRequest")({projectId: S.String, assetIds: IDs, clientToken: S.optional(S.String)}) {}
export class BatchDisassociateProjectAssetsRequest extends S.Class<BatchDisassociateProjectAssetsRequest>("BatchDisassociateProjectAssetsRequest")({projectId: S.String, assetIds: IDs, clientToken: S.optional(S.String)}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class CreateAssetRequest extends S.Class<CreateAssetRequest>("CreateAssetRequest")({assetName: S.String, assetModelId: S.String, assetId: S.optional(S.String), assetExternalId: S.optional(S.String), clientToken: S.optional(S.String), tags: S.optional(TagMap), assetDescription: S.optional(S.String)}) {}
export class Attribute extends S.Class<Attribute>("Attribute")({defaultValue: S.optional(S.String)}) {}
export class ForwardingConfig extends S.Class<ForwardingConfig>("ForwardingConfig")({state: S.String}) {}
export class MeasurementProcessingConfig extends S.Class<MeasurementProcessingConfig>("MeasurementProcessingConfig")({forwardingConfig: ForwardingConfig}) {}
export class Measurement extends S.Class<Measurement>("Measurement")({processingConfig: S.optional(MeasurementProcessingConfig)}) {}
export class AssetModelPropertyPathSegment extends S.Class<AssetModelPropertyPathSegment>("AssetModelPropertyPathSegment")({id: S.optional(S.String), name: S.optional(S.String)}) {}
export const AssetModelPropertyPath = S.Array(AssetModelPropertyPathSegment);
export class VariableValue extends S.Class<VariableValue>("VariableValue")({propertyId: S.optional(S.String), hierarchyId: S.optional(S.String), propertyPath: S.optional(AssetModelPropertyPath)}) {}
export class ExpressionVariable extends S.Class<ExpressionVariable>("ExpressionVariable")({name: S.String, value: VariableValue}) {}
export const ExpressionVariables = S.Array(ExpressionVariable);
export class TransformProcessingConfig extends S.Class<TransformProcessingConfig>("TransformProcessingConfig")({computeLocation: S.String, forwardingConfig: S.optional(ForwardingConfig)}) {}
export class Transform extends S.Class<Transform>("Transform")({expression: S.String, variables: ExpressionVariables, processingConfig: S.optional(TransformProcessingConfig)}) {}
export class TumblingWindow extends S.Class<TumblingWindow>("TumblingWindow")({interval: S.String, offset: S.optional(S.String)}) {}
export class MetricWindow extends S.Class<MetricWindow>("MetricWindow")({tumbling: S.optional(TumblingWindow)}) {}
export class MetricProcessingConfig extends S.Class<MetricProcessingConfig>("MetricProcessingConfig")({computeLocation: S.String}) {}
export class Metric extends S.Class<Metric>("Metric")({expression: S.optional(S.String), variables: S.optional(ExpressionVariables), window: MetricWindow, processingConfig: S.optional(MetricProcessingConfig)}) {}
export class PropertyType extends S.Class<PropertyType>("PropertyType")({attribute: S.optional(Attribute), measurement: S.optional(Measurement), transform: S.optional(Transform), metric: S.optional(Metric)}) {}
export class AssetModelPropertyDefinition extends S.Class<AssetModelPropertyDefinition>("AssetModelPropertyDefinition")({id: S.optional(S.String), externalId: S.optional(S.String), name: S.String, dataType: S.String, dataTypeSpec: S.optional(S.String), unit: S.optional(S.String), type: PropertyType}) {}
export const AssetModelPropertyDefinitions = S.Array(AssetModelPropertyDefinition);
export class CreateAssetModelCompositeModelRequest extends S.Class<CreateAssetModelCompositeModelRequest>("CreateAssetModelCompositeModelRequest")({assetModelId: S.String, assetModelCompositeModelExternalId: S.optional(S.String), parentAssetModelCompositeModelId: S.optional(S.String), assetModelCompositeModelId: S.optional(S.String), assetModelCompositeModelDescription: S.optional(S.String), assetModelCompositeModelName: S.String, assetModelCompositeModelType: S.String, clientToken: S.optional(S.String), composedAssetModelId: S.optional(S.String), assetModelCompositeModelProperties: S.optional(AssetModelPropertyDefinitions), ifMatch: S.optional(H.Header("If-Match")), ifNoneMatch: S.optional(H.Header("If-None-Match")), matchForVersionType: S.optional(H.Header("Match-For-Version-Type"))}) {}
export class CreateDashboardRequest extends S.Class<CreateDashboardRequest>("CreateDashboardRequest")({projectId: S.String, dashboardName: S.String, dashboardDescription: S.optional(S.String), dashboardDefinition: S.String, clientToken: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class CreateProjectRequest extends S.Class<CreateProjectRequest>("CreateProjectRequest")({portalId: S.String, projectName: S.String, projectDescription: S.optional(S.String), clientToken: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class DeleteAccessPolicyRequest extends S.Class<DeleteAccessPolicyRequest>("DeleteAccessPolicyRequest")({accessPolicyId: S.String, clientToken: S.optional(S.String)}) {}
export class DeleteAccessPolicyResponse extends S.Class<DeleteAccessPolicyResponse>("DeleteAccessPolicyResponse")({}) {}
export class DeleteAssetRequest extends S.Class<DeleteAssetRequest>("DeleteAssetRequest")({assetId: S.String, clientToken: S.optional(S.String)}) {}
export class DeleteAssetModelRequest extends S.Class<DeleteAssetModelRequest>("DeleteAssetModelRequest")({assetModelId: S.String, clientToken: S.optional(S.String), ifMatch: S.optional(H.Header("If-Match")), ifNoneMatch: S.optional(H.Header("If-None-Match")), matchForVersionType: S.optional(H.Header("Match-For-Version-Type"))}) {}
export class DeleteAssetModelCompositeModelRequest extends S.Class<DeleteAssetModelCompositeModelRequest>("DeleteAssetModelCompositeModelRequest")({assetModelId: S.String, assetModelCompositeModelId: S.String, clientToken: S.optional(S.String), ifMatch: S.optional(H.Header("If-Match")), ifNoneMatch: S.optional(H.Header("If-None-Match")), matchForVersionType: S.optional(H.Header("Match-For-Version-Type"))}) {}
export class DeleteAssetModelInterfaceRelationshipRequest extends S.Class<DeleteAssetModelInterfaceRelationshipRequest>("DeleteAssetModelInterfaceRelationshipRequest")({assetModelId: S.String, interfaceAssetModelId: S.String, clientToken: S.optional(S.String)}) {}
export class DeleteComputationModelRequest extends S.Class<DeleteComputationModelRequest>("DeleteComputationModelRequest")({computationModelId: S.String, clientToken: S.optional(S.String)}) {}
export class DeleteDashboardRequest extends S.Class<DeleteDashboardRequest>("DeleteDashboardRequest")({dashboardId: S.String, clientToken: S.optional(S.String)}) {}
export class DeleteDashboardResponse extends S.Class<DeleteDashboardResponse>("DeleteDashboardResponse")({}) {}
export class DeleteDatasetRequest extends S.Class<DeleteDatasetRequest>("DeleteDatasetRequest")({datasetId: S.String, clientToken: S.optional(S.String)}) {}
export class DeleteGatewayRequest extends S.Class<DeleteGatewayRequest>("DeleteGatewayRequest")({gatewayId: S.String}) {}
export class DeletePortalRequest extends S.Class<DeletePortalRequest>("DeletePortalRequest")({portalId: S.String, clientToken: S.optional(S.String)}) {}
export class DeleteProjectRequest extends S.Class<DeleteProjectRequest>("DeleteProjectRequest")({projectId: S.String, clientToken: S.optional(S.String)}) {}
export class DeleteProjectResponse extends S.Class<DeleteProjectResponse>("DeleteProjectResponse")({}) {}
export class DeleteTimeSeriesRequest extends S.Class<DeleteTimeSeriesRequest>("DeleteTimeSeriesRequest")({alias: S.optional(S.String), assetId: S.optional(S.String), propertyId: S.optional(S.String), clientToken: S.optional(S.String)}) {}
export class DescribeAccessPolicyRequest extends S.Class<DescribeAccessPolicyRequest>("DescribeAccessPolicyRequest")({accessPolicyId: S.String}) {}
export class DescribeActionRequest extends S.Class<DescribeActionRequest>("DescribeActionRequest")({actionId: S.String}) {}
export class DescribeAssetRequest extends S.Class<DescribeAssetRequest>("DescribeAssetRequest")({assetId: S.String, excludeProperties: S.optional(S.Boolean)}) {}
export class DescribeAssetCompositeModelRequest extends S.Class<DescribeAssetCompositeModelRequest>("DescribeAssetCompositeModelRequest")({assetId: S.String, assetCompositeModelId: S.String}) {}
export class DescribeAssetModelRequest extends S.Class<DescribeAssetModelRequest>("DescribeAssetModelRequest")({assetModelId: S.String, excludeProperties: S.optional(S.Boolean), assetModelVersion: S.optional(S.String)}) {}
export class DescribeAssetModelCompositeModelRequest extends S.Class<DescribeAssetModelCompositeModelRequest>("DescribeAssetModelCompositeModelRequest")({assetModelId: S.String, assetModelCompositeModelId: S.String, assetModelVersion: S.optional(S.String)}) {}
export class DescribeAssetModelInterfaceRelationshipRequest extends S.Class<DescribeAssetModelInterfaceRelationshipRequest>("DescribeAssetModelInterfaceRelationshipRequest")({assetModelId: S.String, interfaceAssetModelId: S.String}) {}
export class DescribeAssetPropertyRequest extends S.Class<DescribeAssetPropertyRequest>("DescribeAssetPropertyRequest")({assetId: S.String, propertyId: S.String}) {}
export class DescribeBulkImportJobRequest extends S.Class<DescribeBulkImportJobRequest>("DescribeBulkImportJobRequest")({jobId: S.String}) {}
export class DescribeComputationModelRequest extends S.Class<DescribeComputationModelRequest>("DescribeComputationModelRequest")({computationModelId: S.String, computationModelVersion: S.optional(S.String)}) {}
export class DescribeComputationModelExecutionSummaryRequest extends S.Class<DescribeComputationModelExecutionSummaryRequest>("DescribeComputationModelExecutionSummaryRequest")({computationModelId: S.String, resolveToResourceType: S.optional(S.String), resolveToResourceId: S.optional(S.String)}) {}
export class DescribeDashboardRequest extends S.Class<DescribeDashboardRequest>("DescribeDashboardRequest")({dashboardId: S.String}) {}
export class DescribeDatasetRequest extends S.Class<DescribeDatasetRequest>("DescribeDatasetRequest")({datasetId: S.String}) {}
export class DescribeExecutionRequest extends S.Class<DescribeExecutionRequest>("DescribeExecutionRequest")({executionId: S.String}) {}
export class DescribeGatewayRequest extends S.Class<DescribeGatewayRequest>("DescribeGatewayRequest")({gatewayId: S.String}) {}
export class DescribeGatewayCapabilityConfigurationRequest extends S.Class<DescribeGatewayCapabilityConfigurationRequest>("DescribeGatewayCapabilityConfigurationRequest")({gatewayId: S.String, capabilityNamespace: S.String}) {}
export class DescribePortalRequest extends S.Class<DescribePortalRequest>("DescribePortalRequest")({portalId: S.String}) {}
export class DescribeProjectRequest extends S.Class<DescribeProjectRequest>("DescribeProjectRequest")({projectId: S.String}) {}
export class DescribeTimeSeriesRequest extends S.Class<DescribeTimeSeriesRequest>("DescribeTimeSeriesRequest")({alias: S.optional(S.String), assetId: S.optional(S.String), propertyId: S.optional(S.String)}) {}
export class DisassociateAssetsRequest extends S.Class<DisassociateAssetsRequest>("DisassociateAssetsRequest")({assetId: S.String, hierarchyId: S.String, childAssetId: S.String, clientToken: S.optional(S.String)}) {}
export class DisassociateTimeSeriesFromAssetPropertyRequest extends S.Class<DisassociateTimeSeriesFromAssetPropertyRequest>("DisassociateTimeSeriesFromAssetPropertyRequest")({alias: S.String, assetId: S.String, propertyId: S.String, clientToken: S.optional(S.String)}) {}
export class ExecuteQueryRequest extends S.Class<ExecuteQueryRequest>("ExecuteQueryRequest")({queryStatement: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), clientToken: S.optional(S.String)}) {}
export class GetAssetPropertyAggregatesRequest extends S.Class<GetAssetPropertyAggregatesRequest>("GetAssetPropertyAggregatesRequest")({assetId: S.optional(S.String), propertyId: S.optional(S.String), propertyAlias: S.optional(S.String), aggregateTypes: AggregateTypes, resolution: S.String, qualities: S.optional(Qualities), startDate: S.Date, endDate: S.Date, timeOrdering: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetAssetPropertyValueRequest extends S.Class<GetAssetPropertyValueRequest>("GetAssetPropertyValueRequest")({assetId: S.optional(S.String), propertyId: S.optional(S.String), propertyAlias: S.optional(S.String)}) {}
export class GetAssetPropertyValueHistoryRequest extends S.Class<GetAssetPropertyValueHistoryRequest>("GetAssetPropertyValueHistoryRequest")({assetId: S.optional(S.String), propertyId: S.optional(S.String), propertyAlias: S.optional(S.String), startDate: S.optional(S.Date), endDate: S.optional(S.Date), qualities: S.optional(Qualities), timeOrdering: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetInterpolatedAssetPropertyValuesRequest extends S.Class<GetInterpolatedAssetPropertyValuesRequest>("GetInterpolatedAssetPropertyValuesRequest")({assetId: S.optional(S.String), propertyId: S.optional(S.String), propertyAlias: S.optional(S.String), startTimeInSeconds: S.Number, startTimeOffsetInNanos: S.optional(S.Number), endTimeInSeconds: S.Number, endTimeOffsetInNanos: S.optional(S.Number), quality: S.String, intervalInSeconds: S.Number, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), type: S.String, intervalWindowInSeconds: S.optional(S.Number)}) {}
export class InvokeAssistantRequest extends S.Class<InvokeAssistantRequest>("InvokeAssistantRequest")({conversationId: S.optional(S.String), message: S.String, enableTrace: S.optional(S.Boolean)}) {}
export class ListAccessPoliciesRequest extends S.Class<ListAccessPoliciesRequest>("ListAccessPoliciesRequest")({identityType: S.optional(S.String), identityId: S.optional(S.String), resourceType: S.optional(S.String), resourceId: S.optional(S.String), iamArn: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListActionsRequest extends S.Class<ListActionsRequest>("ListActionsRequest")({targetResourceType: S.String, targetResourceId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), resolveToResourceType: S.optional(S.String), resolveToResourceId: S.optional(S.String)}) {}
export class ListAssetModelCompositeModelsRequest extends S.Class<ListAssetModelCompositeModelsRequest>("ListAssetModelCompositeModelsRequest")({assetModelId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), assetModelVersion: S.optional(S.String)}) {}
export class ListAssetModelPropertiesRequest extends S.Class<ListAssetModelPropertiesRequest>("ListAssetModelPropertiesRequest")({assetModelId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), filter: S.optional(S.String), assetModelVersion: S.optional(S.String)}) {}
export class ListAssetModelsRequest extends S.Class<ListAssetModelsRequest>("ListAssetModelsRequest")({assetModelTypes: S.optional(ListAssetModelsTypeFilter), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), assetModelVersion: S.optional(S.String)}) {}
export class ListAssetPropertiesRequest extends S.Class<ListAssetPropertiesRequest>("ListAssetPropertiesRequest")({assetId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), filter: S.optional(S.String)}) {}
export class ListAssetRelationshipsRequest extends S.Class<ListAssetRelationshipsRequest>("ListAssetRelationshipsRequest")({assetId: S.String, traversalType: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAssetsRequest extends S.Class<ListAssetsRequest>("ListAssetsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), assetModelId: S.optional(S.String), filter: S.optional(S.String)}) {}
export class ListAssociatedAssetsRequest extends S.Class<ListAssociatedAssetsRequest>("ListAssociatedAssetsRequest")({assetId: S.String, hierarchyId: S.optional(S.String), traversalDirection: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListBulkImportJobsRequest extends S.Class<ListBulkImportJobsRequest>("ListBulkImportJobsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), filter: S.optional(S.String)}) {}
export class ListCompositionRelationshipsRequest extends S.Class<ListCompositionRelationshipsRequest>("ListCompositionRelationshipsRequest")({assetModelId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListComputationModelResolveToResourcesRequest extends S.Class<ListComputationModelResolveToResourcesRequest>("ListComputationModelResolveToResourcesRequest")({computationModelId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListComputationModelsRequest extends S.Class<ListComputationModelsRequest>("ListComputationModelsRequest")({computationModelType: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListDashboardsRequest extends S.Class<ListDashboardsRequest>("ListDashboardsRequest")({projectId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListDatasetsRequest extends S.Class<ListDatasetsRequest>("ListDatasetsRequest")({sourceType: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListExecutionsRequest extends S.Class<ListExecutionsRequest>("ListExecutionsRequest")({targetResourceType: S.String, targetResourceId: S.String, resolveToResourceType: S.optional(S.String), resolveToResourceId: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), actionType: S.optional(S.String)}) {}
export class ListGatewaysRequest extends S.Class<ListGatewaysRequest>("ListGatewaysRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListInterfaceRelationshipsRequest extends S.Class<ListInterfaceRelationshipsRequest>("ListInterfaceRelationshipsRequest")({interfaceAssetModelId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListPortalsRequest extends S.Class<ListPortalsRequest>("ListPortalsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListProjectAssetsRequest extends S.Class<ListProjectAssetsRequest>("ListProjectAssetsRequest")({projectId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListProjectsRequest extends S.Class<ListProjectsRequest>("ListProjectsRequest")({portalId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class ListTimeSeriesRequest extends S.Class<ListTimeSeriesRequest>("ListTimeSeriesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), assetId: S.optional(S.String), aliasPrefix: S.optional(S.String), timeSeriesType: S.optional(S.String)}) {}
export class PutDefaultEncryptionConfigurationRequest extends S.Class<PutDefaultEncryptionConfigurationRequest>("PutDefaultEncryptionConfigurationRequest")({encryptionType: S.String, kmsKeyId: S.optional(S.String)}) {}
export class LoggingOptions extends S.Class<LoggingOptions>("LoggingOptions")({level: S.String}) {}
export class PutLoggingOptionsRequest extends S.Class<PutLoggingOptionsRequest>("PutLoggingOptionsRequest")({loggingOptions: LoggingOptions}) {}
export class PutLoggingOptionsResponse extends S.Class<PutLoggingOptionsResponse>("PutLoggingOptionsResponse")({}) {}
export class CustomerManagedS3Storage extends S.Class<CustomerManagedS3Storage>("CustomerManagedS3Storage")({s3ResourceArn: S.String, roleArn: S.String}) {}
export class MultiLayerStorage extends S.Class<MultiLayerStorage>("MultiLayerStorage")({customerManagedS3Storage: CustomerManagedS3Storage}) {}
export class RetentionPeriod extends S.Class<RetentionPeriod>("RetentionPeriod")({numberOfDays: S.optional(S.Number), unlimited: S.optional(S.Boolean)}) {}
export class WarmTierRetentionPeriod extends S.Class<WarmTierRetentionPeriod>("WarmTierRetentionPeriod")({numberOfDays: S.optional(S.Number), unlimited: S.optional(S.Boolean)}) {}
export class PutStorageConfigurationRequest extends S.Class<PutStorageConfigurationRequest>("PutStorageConfigurationRequest")({storageType: S.String, multiLayerStorage: S.optional(MultiLayerStorage), disassociatedDataStorage: S.optional(S.String), retentionPeriod: S.optional(RetentionPeriod), warmTier: S.optional(S.String), warmTierRetentionPeriod: S.optional(WarmTierRetentionPeriod), disallowIngestNullNaN: S.optional(S.Boolean)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UserIdentity extends S.Class<UserIdentity>("UserIdentity")({id: S.String}) {}
export class GroupIdentity extends S.Class<GroupIdentity>("GroupIdentity")({id: S.String}) {}
export class IAMUserIdentity extends S.Class<IAMUserIdentity>("IAMUserIdentity")({arn: S.String}) {}
export class IAMRoleIdentity extends S.Class<IAMRoleIdentity>("IAMRoleIdentity")({arn: S.String}) {}
export class Identity extends S.Class<Identity>("Identity")({user: S.optional(UserIdentity), group: S.optional(GroupIdentity), iamUser: S.optional(IAMUserIdentity), iamRole: S.optional(IAMRoleIdentity)}) {}
export class PortalResource extends S.Class<PortalResource>("PortalResource")({id: S.String}) {}
export class ProjectResource extends S.Class<ProjectResource>("ProjectResource")({id: S.String}) {}
export class Resource extends S.Class<Resource>("Resource")({portal: S.optional(PortalResource), project: S.optional(ProjectResource)}) {}
export class UpdateAccessPolicyRequest extends S.Class<UpdateAccessPolicyRequest>("UpdateAccessPolicyRequest")({accessPolicyId: S.String, accessPolicyIdentity: Identity, accessPolicyResource: Resource, accessPolicyPermission: S.String, clientToken: S.optional(S.String)}) {}
export class UpdateAccessPolicyResponse extends S.Class<UpdateAccessPolicyResponse>("UpdateAccessPolicyResponse")({}) {}
export class UpdateAssetRequest extends S.Class<UpdateAssetRequest>("UpdateAssetRequest")({assetId: S.String, assetExternalId: S.optional(S.String), assetName: S.String, clientToken: S.optional(S.String), assetDescription: S.optional(S.String)}) {}
export class AssetModelProperty extends S.Class<AssetModelProperty>("AssetModelProperty")({id: S.optional(S.String), externalId: S.optional(S.String), name: S.String, dataType: S.String, dataTypeSpec: S.optional(S.String), unit: S.optional(S.String), type: PropertyType, path: S.optional(AssetModelPropertyPath)}) {}
export const AssetModelProperties = S.Array(AssetModelProperty);
export class UpdateAssetModelCompositeModelRequest extends S.Class<UpdateAssetModelCompositeModelRequest>("UpdateAssetModelCompositeModelRequest")({assetModelId: S.String, assetModelCompositeModelId: S.String, assetModelCompositeModelExternalId: S.optional(S.String), assetModelCompositeModelDescription: S.optional(S.String), assetModelCompositeModelName: S.String, clientToken: S.optional(S.String), assetModelCompositeModelProperties: S.optional(AssetModelProperties), ifMatch: S.optional(H.Header("If-Match")), ifNoneMatch: S.optional(H.Header("If-None-Match")), matchForVersionType: S.optional(H.Header("Match-For-Version-Type"))}) {}
export class UpdateAssetPropertyRequest extends S.Class<UpdateAssetPropertyRequest>("UpdateAssetPropertyRequest")({assetId: S.String, propertyId: S.String, propertyAlias: S.optional(S.String), propertyNotificationState: S.optional(S.String), clientToken: S.optional(S.String), propertyUnit: S.optional(S.String)}) {}
export class ComputationModelAnomalyDetectionConfiguration extends S.Class<ComputationModelAnomalyDetectionConfiguration>("ComputationModelAnomalyDetectionConfiguration")({inputProperties: S.String, resultProperty: S.String}) {}
export class ComputationModelConfiguration extends S.Class<ComputationModelConfiguration>("ComputationModelConfiguration")({anomalyDetection: S.optional(ComputationModelAnomalyDetectionConfiguration)}) {}
export class AssetModelPropertyBindingValue extends S.Class<AssetModelPropertyBindingValue>("AssetModelPropertyBindingValue")({assetModelId: S.String, propertyId: S.String}) {}
export class AssetPropertyBindingValue extends S.Class<AssetPropertyBindingValue>("AssetPropertyBindingValue")({assetId: S.String, propertyId: S.String}) {}
export class ComputationModelDataBindingValue extends S.Class<ComputationModelDataBindingValue>("ComputationModelDataBindingValue")({assetModelProperty: S.optional(AssetModelPropertyBindingValue), assetProperty: S.optional(AssetPropertyBindingValue), list: S.optional(S.suspend(() => BindingValueList))}) {}
export const ComputationModelDataBinding = S.Record({key: S.String, value: S.suspend((): S.Schema<ComputationModelDataBindingValue, any> => ComputationModelDataBindingValue)});
export class UpdateComputationModelRequest extends S.Class<UpdateComputationModelRequest>("UpdateComputationModelRequest")({computationModelId: S.String, computationModelName: S.String, computationModelDescription: S.optional(S.String), computationModelConfiguration: ComputationModelConfiguration, computationModelDataBinding: ComputationModelDataBinding, clientToken: S.optional(S.String)}) {}
export class UpdateDashboardRequest extends S.Class<UpdateDashboardRequest>("UpdateDashboardRequest")({dashboardId: S.String, dashboardName: S.String, dashboardDescription: S.optional(S.String), dashboardDefinition: S.String, clientToken: S.optional(S.String)}) {}
export class UpdateDashboardResponse extends S.Class<UpdateDashboardResponse>("UpdateDashboardResponse")({}) {}
export class KendraSourceDetail extends S.Class<KendraSourceDetail>("KendraSourceDetail")({knowledgeBaseArn: S.String, roleArn: S.String}) {}
export class SourceDetail extends S.Class<SourceDetail>("SourceDetail")({kendra: S.optional(KendraSourceDetail)}) {}
export class DatasetSource extends S.Class<DatasetSource>("DatasetSource")({sourceType: S.String, sourceFormat: S.String, sourceDetail: S.optional(SourceDetail)}) {}
export class UpdateDatasetRequest extends S.Class<UpdateDatasetRequest>("UpdateDatasetRequest")({datasetId: S.String, datasetName: S.String, datasetDescription: S.optional(S.String), datasetSource: DatasetSource, clientToken: S.optional(S.String)}) {}
export class UpdateGatewayRequest extends S.Class<UpdateGatewayRequest>("UpdateGatewayRequest")({gatewayId: S.String, gatewayName: S.String}) {}
export class UpdateGatewayCapabilityConfigurationRequest extends S.Class<UpdateGatewayCapabilityConfigurationRequest>("UpdateGatewayCapabilityConfigurationRequest")({gatewayId: S.String, capabilityNamespace: S.String, capabilityConfiguration: S.String}) {}
export class UpdateProjectRequest extends S.Class<UpdateProjectRequest>("UpdateProjectRequest")({projectId: S.String, projectName: S.String, projectDescription: S.optional(S.String), clientToken: S.optional(S.String)}) {}
export class UpdateProjectResponse extends S.Class<UpdateProjectResponse>("UpdateProjectResponse")({}) {}
export class AssetErrorDetails extends S.Class<AssetErrorDetails>("AssetErrorDetails")({assetId: S.String, code: S.String, message: S.String}) {}
export const BatchDisassociateProjectAssetsErrors = S.Array(AssetErrorDetails);
export class BatchGetAssetPropertyAggregatesEntry extends S.Class<BatchGetAssetPropertyAggregatesEntry>("BatchGetAssetPropertyAggregatesEntry")({entryId: S.String, assetId: S.optional(S.String), propertyId: S.optional(S.String), propertyAlias: S.optional(S.String), aggregateTypes: AggregateTypes, resolution: S.String, startDate: S.Date, endDate: S.Date, qualities: S.optional(Qualities), timeOrdering: S.optional(S.String)}) {}
export const BatchGetAssetPropertyAggregatesEntries = S.Array(BatchGetAssetPropertyAggregatesEntry);
export class BatchGetAssetPropertyValueEntry extends S.Class<BatchGetAssetPropertyValueEntry>("BatchGetAssetPropertyValueEntry")({entryId: S.String, assetId: S.optional(S.String), propertyId: S.optional(S.String), propertyAlias: S.optional(S.String)}) {}
export const BatchGetAssetPropertyValueEntries = S.Array(BatchGetAssetPropertyValueEntry);
export class BatchGetAssetPropertyValueHistoryEntry extends S.Class<BatchGetAssetPropertyValueHistoryEntry>("BatchGetAssetPropertyValueHistoryEntry")({entryId: S.String, assetId: S.optional(S.String), propertyId: S.optional(S.String), propertyAlias: S.optional(S.String), startDate: S.optional(S.Date), endDate: S.optional(S.Date), qualities: S.optional(Qualities), timeOrdering: S.optional(S.String)}) {}
export const BatchGetAssetPropertyValueHistoryEntries = S.Array(BatchGetAssetPropertyValueHistoryEntry);
export class AssetModelHierarchyDefinition extends S.Class<AssetModelHierarchyDefinition>("AssetModelHierarchyDefinition")({id: S.optional(S.String), externalId: S.optional(S.String), name: S.String, childAssetModelId: S.String}) {}
export const AssetModelHierarchyDefinitions = S.Array(AssetModelHierarchyDefinition);
export class AssetModelCompositeModelDefinition extends S.Class<AssetModelCompositeModelDefinition>("AssetModelCompositeModelDefinition")({id: S.optional(S.String), externalId: S.optional(S.String), name: S.String, description: S.optional(S.String), type: S.String, properties: S.optional(AssetModelPropertyDefinitions)}) {}
export const AssetModelCompositeModelDefinitions = S.Array(AssetModelCompositeModelDefinition);
export class File extends S.Class<File>("File")({bucket: S.String, key: S.String, versionId: S.optional(S.String)}) {}
export const Files = S.Array(File);
export class ErrorReportLocation extends S.Class<ErrorReportLocation>("ErrorReportLocation")({bucket: S.String, prefix: S.String}) {}
export class ImageFile extends S.Class<ImageFile>("ImageFile")({data: H.StreamBody(), type: S.String}) {}
export class Alarms extends S.Class<Alarms>("Alarms")({alarmRoleArn: S.String, notificationLambdaArn: S.optional(S.String)}) {}
export class TargetResource extends S.Class<TargetResource>("TargetResource")({assetId: S.optional(S.String), computationModelId: S.optional(S.String)}) {}
export class ActionPayload extends S.Class<ActionPayload>("ActionPayload")({stringValue: S.String}) {}
export class ResolveTo extends S.Class<ResolveTo>("ResolveTo")({assetId: S.String}) {}
export class PropertyValueNullValue extends S.Class<PropertyValueNullValue>("PropertyValueNullValue")({valueType: S.String}) {}
export class Variant extends S.Class<Variant>("Variant")({stringValue: S.optional(S.String), integerValue: S.optional(S.Number), doubleValue: S.optional(S.Number), booleanValue: S.optional(S.Boolean), nullValue: S.optional(PropertyValueNullValue)}) {}
export class TimeInNanos extends S.Class<TimeInNanos>("TimeInNanos")({timeInSeconds: S.Number, offsetInNanos: S.optional(S.Number)}) {}
export class AssetPropertyValue extends S.Class<AssetPropertyValue>("AssetPropertyValue")({value: Variant, timestamp: TimeInNanos, quality: S.optional(S.String)}) {}
export const AssetPropertyValueHistory = S.Array(AssetPropertyValue);
export const AssetIDs = S.Array(S.String);
export class AssetModelHierarchy extends S.Class<AssetModelHierarchy>("AssetModelHierarchy")({id: S.optional(S.String), externalId: S.optional(S.String), name: S.String, childAssetModelId: S.String}) {}
export const AssetModelHierarchies = S.Array(AssetModelHierarchy);
export class AssetModelCompositeModel extends S.Class<AssetModelCompositeModel>("AssetModelCompositeModel")({name: S.String, description: S.optional(S.String), type: S.String, properties: S.optional(AssetModelProperties), id: S.optional(S.String), externalId: S.optional(S.String)}) {}
export const AssetModelCompositeModels = S.Array(AssetModelCompositeModel);
export class Image extends S.Class<Image>("Image")({id: S.optional(S.String), file: S.optional(ImageFile)}) {}
export class Parquet extends S.Class<Parquet>("Parquet")({}) {}
export type BindingValueList = ComputationModelDataBindingValue[];
export const BindingValueList = S.Array(S.suspend((): S.Schema<ComputationModelDataBindingValue, any> => ComputationModelDataBindingValue)) as any as S.Schema<BindingValueList>;
export const PortalTools = S.Array(S.String);
export class BatchDisassociateProjectAssetsResponse extends S.Class<BatchDisassociateProjectAssetsResponse>("BatchDisassociateProjectAssetsResponse")({errors: S.optional(BatchDisassociateProjectAssetsErrors)}) {}
export class BatchGetAssetPropertyAggregatesRequest extends S.Class<BatchGetAssetPropertyAggregatesRequest>("BatchGetAssetPropertyAggregatesRequest")({entries: BatchGetAssetPropertyAggregatesEntries, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class BatchGetAssetPropertyValueRequest extends S.Class<BatchGetAssetPropertyValueRequest>("BatchGetAssetPropertyValueRequest")({entries: BatchGetAssetPropertyValueEntries, nextToken: S.optional(S.String)}) {}
export class BatchGetAssetPropertyValueHistoryRequest extends S.Class<BatchGetAssetPropertyValueHistoryRequest>("BatchGetAssetPropertyValueHistoryRequest")({entries: BatchGetAssetPropertyValueHistoryEntries, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class CreateDashboardResponse extends S.Class<CreateDashboardResponse>("CreateDashboardResponse")({dashboardId: S.String, dashboardArn: S.String}) {}
export class CreateProjectResponse extends S.Class<CreateProjectResponse>("CreateProjectResponse")({projectId: S.String, projectArn: S.String}) {}
export class DetailedError extends S.Class<DetailedError>("DetailedError")({code: S.String, message: S.String}) {}
export const DetailedErrors = S.Array(DetailedError);
export class ErrorDetails extends S.Class<ErrorDetails>("ErrorDetails")({code: S.String, message: S.String, details: S.optional(DetailedErrors)}) {}
export class AssetStatus extends S.Class<AssetStatus>("AssetStatus")({state: S.String, error: S.optional(ErrorDetails)}) {}
export class DeleteAssetResponse extends S.Class<DeleteAssetResponse>("DeleteAssetResponse")({assetStatus: AssetStatus}) {}
export class AssetModelStatus extends S.Class<AssetModelStatus>("AssetModelStatus")({state: S.String, error: S.optional(ErrorDetails)}) {}
export class DeleteAssetModelResponse extends S.Class<DeleteAssetModelResponse>("DeleteAssetModelResponse")({assetModelStatus: AssetModelStatus}) {}
export class DeleteAssetModelCompositeModelResponse extends S.Class<DeleteAssetModelCompositeModelResponse>("DeleteAssetModelCompositeModelResponse")({assetModelStatus: AssetModelStatus}) {}
export class DeleteAssetModelInterfaceRelationshipResponse extends S.Class<DeleteAssetModelInterfaceRelationshipResponse>("DeleteAssetModelInterfaceRelationshipResponse")({assetModelId: S.String, interfaceAssetModelId: S.String, assetModelArn: S.String, assetModelStatus: AssetModelStatus}) {}
export class DescribeAccessPolicyResponse extends S.Class<DescribeAccessPolicyResponse>("DescribeAccessPolicyResponse")({accessPolicyId: S.String, accessPolicyArn: S.String, accessPolicyIdentity: Identity, accessPolicyResource: Resource, accessPolicyPermission: S.String, accessPolicyCreationDate: S.Date, accessPolicyLastUpdateDate: S.Date}) {}
export class DescribeActionResponse extends S.Class<DescribeActionResponse>("DescribeActionResponse")({actionId: S.String, targetResource: TargetResource, actionDefinitionId: S.String, actionPayload: ActionPayload, executionTime: S.Date, resolveTo: S.optional(ResolveTo)}) {}
export const ColumnNames = S.Array(S.String);
export class Csv extends S.Class<Csv>("Csv")({columnNames: ColumnNames}) {}
export class FileFormat extends S.Class<FileFormat>("FileFormat")({csv: S.optional(Csv), parquet: S.optional(Parquet)}) {}
export class JobConfiguration extends S.Class<JobConfiguration>("JobConfiguration")({fileFormat: FileFormat}) {}
export class DescribeBulkImportJobResponse extends S.Class<DescribeBulkImportJobResponse>("DescribeBulkImportJobResponse")({jobId: S.String, jobName: S.String, jobStatus: S.String, jobRoleArn: S.String, files: Files, errorReportLocation: ErrorReportLocation, jobConfiguration: JobConfiguration, jobCreationDate: S.Date, jobLastUpdateDate: S.Date, adaptiveIngestion: S.optional(S.Boolean), deleteFilesAfterImport: S.optional(S.Boolean)}) {}
export class ComputationModelStatus extends S.Class<ComputationModelStatus>("ComputationModelStatus")({state: S.String, error: S.optional(ErrorDetails)}) {}
export class ActionDefinition extends S.Class<ActionDefinition>("ActionDefinition")({actionDefinitionId: S.String, actionName: S.String, actionType: S.String}) {}
export const ActionDefinitions = S.Array(ActionDefinition);
export class DescribeComputationModelResponse extends S.Class<DescribeComputationModelResponse>("DescribeComputationModelResponse")({computationModelId: S.String, computationModelArn: S.String, computationModelName: S.String, computationModelDescription: S.optional(S.String), computationModelConfiguration: ComputationModelConfiguration, computationModelDataBinding: ComputationModelDataBinding, computationModelCreationDate: S.Date, computationModelLastUpdateDate: S.Date, computationModelStatus: ComputationModelStatus, computationModelVersion: S.String, actionDefinitions: ActionDefinitions}) {}
export class DescribeDashboardResponse extends S.Class<DescribeDashboardResponse>("DescribeDashboardResponse")({dashboardId: S.String, dashboardArn: S.String, dashboardName: S.String, projectId: S.String, dashboardDescription: S.optional(S.String), dashboardDefinition: S.String, dashboardCreationDate: S.Date, dashboardLastUpdateDate: S.Date}) {}
export class DatasetStatus extends S.Class<DatasetStatus>("DatasetStatus")({state: S.String, error: S.optional(ErrorDetails)}) {}
export class DescribeDatasetResponse extends S.Class<DescribeDatasetResponse>("DescribeDatasetResponse")({datasetId: S.String, datasetArn: S.String, datasetName: S.String, datasetDescription: S.String, datasetSource: DatasetSource, datasetStatus: DatasetStatus, datasetCreationDate: S.Date, datasetLastUpdateDate: S.Date, datasetVersion: S.optional(S.String)}) {}
export class DescribeGatewayCapabilityConfigurationResponse extends S.Class<DescribeGatewayCapabilityConfigurationResponse>("DescribeGatewayCapabilityConfigurationResponse")({gatewayId: S.String, capabilityNamespace: S.String, capabilityConfiguration: S.String, capabilitySyncStatus: S.String}) {}
export class DescribeLoggingOptionsResponse extends S.Class<DescribeLoggingOptionsResponse>("DescribeLoggingOptionsResponse")({loggingOptions: LoggingOptions}) {}
export class DescribeProjectResponse extends S.Class<DescribeProjectResponse>("DescribeProjectResponse")({projectId: S.String, projectArn: S.String, projectName: S.String, portalId: S.String, projectDescription: S.optional(S.String), projectCreationDate: S.Date, projectLastUpdateDate: S.Date}) {}
export class DescribeTimeSeriesResponse extends S.Class<DescribeTimeSeriesResponse>("DescribeTimeSeriesResponse")({assetId: S.optional(S.String), propertyId: S.optional(S.String), alias: S.optional(S.String), timeSeriesId: S.String, dataType: S.String, dataTypeSpec: S.optional(S.String), timeSeriesCreationDate: S.Date, timeSeriesLastUpdateDate: S.Date, timeSeriesArn: S.String}) {}
export class ExecuteActionRequest extends S.Class<ExecuteActionRequest>("ExecuteActionRequest")({targetResource: TargetResource, actionDefinitionId: S.String, actionPayload: ActionPayload, clientToken: S.optional(S.String), resolveTo: S.optional(ResolveTo)}) {}
export class GetAssetPropertyValueResponse extends S.Class<GetAssetPropertyValueResponse>("GetAssetPropertyValueResponse")({propertyValue: S.optional(AssetPropertyValue)}) {}
export class GetAssetPropertyValueHistoryResponse extends S.Class<GetAssetPropertyValueHistoryResponse>("GetAssetPropertyValueHistoryResponse")({assetPropertyValueHistory: AssetPropertyValueHistory, nextToken: S.optional(S.String)}) {}
export class AssetModelCompositeModelPathSegment extends S.Class<AssetModelCompositeModelPathSegment>("AssetModelCompositeModelPathSegment")({id: S.optional(S.String), name: S.optional(S.String)}) {}
export const AssetModelCompositeModelPath = S.Array(AssetModelCompositeModelPathSegment);
export class AssetModelCompositeModelSummary extends S.Class<AssetModelCompositeModelSummary>("AssetModelCompositeModelSummary")({id: S.String, externalId: S.optional(S.String), name: S.String, type: S.String, description: S.optional(S.String), path: S.optional(AssetModelCompositeModelPath)}) {}
export const AssetModelCompositeModelSummaries = S.Array(AssetModelCompositeModelSummary);
export class ListAssetModelCompositeModelsResponse extends S.Class<ListAssetModelCompositeModelsResponse>("ListAssetModelCompositeModelsResponse")({assetModelCompositeModelSummaries: AssetModelCompositeModelSummaries, nextToken: S.optional(S.String)}) {}
export class ListProjectAssetsResponse extends S.Class<ListProjectAssetsResponse>("ListProjectAssetsResponse")({assetIds: AssetIDs, nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class ConfigurationErrorDetails extends S.Class<ConfigurationErrorDetails>("ConfigurationErrorDetails")({code: S.String, message: S.String}) {}
export class ConfigurationStatus extends S.Class<ConfigurationStatus>("ConfigurationStatus")({state: S.String, error: S.optional(ConfigurationErrorDetails)}) {}
export class PutDefaultEncryptionConfigurationResponse extends S.Class<PutDefaultEncryptionConfigurationResponse>("PutDefaultEncryptionConfigurationResponse")({encryptionType: S.String, kmsKeyArn: S.optional(S.String), configurationStatus: ConfigurationStatus}) {}
export class PutStorageConfigurationResponse extends S.Class<PutStorageConfigurationResponse>("PutStorageConfigurationResponse")({storageType: S.String, multiLayerStorage: S.optional(MultiLayerStorage), disassociatedDataStorage: S.optional(S.String), retentionPeriod: S.optional(RetentionPeriod), configurationStatus: ConfigurationStatus, warmTier: S.optional(S.String), warmTierRetentionPeriod: S.optional(WarmTierRetentionPeriod), disallowIngestNullNaN: S.optional(S.Boolean)}) {}
export class UpdateAssetResponse extends S.Class<UpdateAssetResponse>("UpdateAssetResponse")({assetStatus: AssetStatus}) {}
export class UpdateAssetModelCompositeModelResponse extends S.Class<UpdateAssetModelCompositeModelResponse>("UpdateAssetModelCompositeModelResponse")({assetModelCompositeModelPath: AssetModelCompositeModelPath, assetModelStatus: AssetModelStatus}) {}
export class UpdateComputationModelResponse extends S.Class<UpdateComputationModelResponse>("UpdateComputationModelResponse")({computationModelStatus: ComputationModelStatus}) {}
export class UpdateDatasetResponse extends S.Class<UpdateDatasetResponse>("UpdateDatasetResponse")({datasetId: S.optional(S.String), datasetArn: S.optional(S.String), datasetStatus: S.optional(DatasetStatus)}) {}
export class UpdateGatewayCapabilityConfigurationResponse extends S.Class<UpdateGatewayCapabilityConfigurationResponse>("UpdateGatewayCapabilityConfigurationResponse")({capabilityNamespace: S.String, capabilitySyncStatus: S.String}) {}
export class PortalTypeEntry extends S.Class<PortalTypeEntry>("PortalTypeEntry")({portalTools: S.optional(PortalTools)}) {}
export const PortalTypeConfiguration = S.Record({key: S.String, value: PortalTypeEntry});
export class UpdatePortalRequest extends S.Class<UpdatePortalRequest>("UpdatePortalRequest")({portalId: S.String, portalName: S.String, portalDescription: S.optional(S.String), portalContactEmail: S.String, portalLogoImage: S.optional(Image), roleArn: S.String, clientToken: S.optional(S.String), notificationSenderEmail: S.optional(S.String), alarms: S.optional(Alarms), portalType: S.optional(S.String), portalTypeConfiguration: S.optional(PortalTypeConfiguration)}) {}
export class Greengrass extends S.Class<Greengrass>("Greengrass")({groupArn: S.String}) {}
export class GreengrassV2 extends S.Class<GreengrassV2>("GreengrassV2")({coreDeviceThingName: S.String, coreDeviceOperatingSystem: S.optional(S.String)}) {}
export class SiemensIE extends S.Class<SiemensIE>("SiemensIE")({iotCoreThingName: S.String}) {}
export class AssetBindingValueFilter extends S.Class<AssetBindingValueFilter>("AssetBindingValueFilter")({assetId: S.String}) {}
export class AssetModelBindingValueFilter extends S.Class<AssetModelBindingValueFilter>("AssetModelBindingValueFilter")({assetModelId: S.String}) {}
export class AssetPropertyBindingValueFilter extends S.Class<AssetPropertyBindingValueFilter>("AssetPropertyBindingValueFilter")({assetId: S.String, propertyId: S.String}) {}
export class AssetModelPropertyBindingValueFilter extends S.Class<AssetModelPropertyBindingValueFilter>("AssetModelPropertyBindingValueFilter")({assetModelId: S.String, propertyId: S.String}) {}
export class PropertyMapping extends S.Class<PropertyMapping>("PropertyMapping")({assetModelPropertyId: S.String, interfaceAssetModelPropertyId: S.String}) {}
export const PropertyMappings = S.Array(PropertyMapping);
export const BatchAssociateProjectAssetsErrors = S.Array(AssetErrorDetails);
export class GatewayPlatform extends S.Class<GatewayPlatform>("GatewayPlatform")({greengrass: S.optional(Greengrass), greengrassV2: S.optional(GreengrassV2), siemensIE: S.optional(SiemensIE)}) {}
export class AssetHierarchy extends S.Class<AssetHierarchy>("AssetHierarchy")({id: S.optional(S.String), externalId: S.optional(S.String), name: S.String}) {}
export const AssetHierarchies = S.Array(AssetHierarchy);
export class PropertyNotification extends S.Class<PropertyNotification>("PropertyNotification")({topic: S.String, state: S.String}) {}
export class AssetPropertyPathSegment extends S.Class<AssetPropertyPathSegment>("AssetPropertyPathSegment")({id: S.optional(S.String), name: S.optional(S.String)}) {}
export const AssetPropertyPath = S.Array(AssetPropertyPathSegment);
export class AssetProperty extends S.Class<AssetProperty>("AssetProperty")({id: S.String, externalId: S.optional(S.String), name: S.String, alias: S.optional(S.String), notification: S.optional(PropertyNotification), dataType: S.String, dataTypeSpec: S.optional(S.String), unit: S.optional(S.String), path: S.optional(AssetPropertyPath)}) {}
export const AssetProperties = S.Array(AssetProperty);
export class AssetCompositeModel extends S.Class<AssetCompositeModel>("AssetCompositeModel")({name: S.String, description: S.optional(S.String), type: S.String, properties: AssetProperties, id: S.optional(S.String), externalId: S.optional(S.String)}) {}
export const AssetCompositeModels = S.Array(AssetCompositeModel);
export class AssetCompositeModelPathSegment extends S.Class<AssetCompositeModelPathSegment>("AssetCompositeModelPathSegment")({id: S.optional(S.String), name: S.optional(S.String)}) {}
export const AssetCompositeModelPath = S.Array(AssetCompositeModelPathSegment);
export class AssetCompositeModelSummary extends S.Class<AssetCompositeModelSummary>("AssetCompositeModelSummary")({id: S.String, externalId: S.optional(S.String), name: S.String, type: S.String, description: S.String, path: AssetCompositeModelPath}) {}
export const AssetCompositeModelSummaries = S.Array(AssetCompositeModelSummary);
export class InterfaceRelationship extends S.Class<InterfaceRelationship>("InterfaceRelationship")({id: S.String}) {}
export const InterfaceDetails = S.Array(InterfaceRelationship);
export class HierarchyMapping extends S.Class<HierarchyMapping>("HierarchyMapping")({assetModelHierarchyId: S.String, interfaceAssetModelHierarchyId: S.String}) {}
export const HierarchyMappings = S.Array(HierarchyMapping);
export class Property extends S.Class<Property>("Property")({id: S.String, externalId: S.optional(S.String), name: S.String, alias: S.optional(S.String), notification: S.optional(PropertyNotification), dataType: S.String, unit: S.optional(S.String), type: S.optional(PropertyType), path: S.optional(AssetPropertyPath)}) {}
export class CompositeModelProperty extends S.Class<CompositeModelProperty>("CompositeModelProperty")({name: S.String, type: S.String, assetProperty: Property, id: S.optional(S.String), externalId: S.optional(S.String)}) {}
export const ComputationModelExecutionSummary = S.Record({key: S.String, value: S.String});
export class ExecutionStatus extends S.Class<ExecutionStatus>("ExecutionStatus")({state: S.String}) {}
export const ExecutionResult = S.Record({key: S.String, value: S.String});
export const ExecutionDetails = S.Record({key: S.String, value: S.String});
export class GatewayCapabilitySummary extends S.Class<GatewayCapabilitySummary>("GatewayCapabilitySummary")({capabilityNamespace: S.String, capabilitySyncStatus: S.String}) {}
export const GatewayCapabilitySummaries = S.Array(GatewayCapabilitySummary);
export class ImageLocation extends S.Class<ImageLocation>("ImageLocation")({id: S.String, url: S.String}) {}
export class InterpolatedAssetPropertyValue extends S.Class<InterpolatedAssetPropertyValue>("InterpolatedAssetPropertyValue")({timestamp: TimeInNanos, value: Variant}) {}
export const InterpolatedAssetPropertyValues = S.Array(InterpolatedAssetPropertyValue);
export class AccessPolicySummary extends S.Class<AccessPolicySummary>("AccessPolicySummary")({id: S.String, identity: Identity, resource: Resource, permission: S.String, creationDate: S.optional(S.Date), lastUpdateDate: S.optional(S.Date)}) {}
export const AccessPolicySummaries = S.Array(AccessPolicySummary);
export class ActionSummary extends S.Class<ActionSummary>("ActionSummary")({actionId: S.optional(S.String), actionDefinitionId: S.optional(S.String), targetResource: S.optional(TargetResource), resolveTo: S.optional(ResolveTo)}) {}
export const ActionSummaries = S.Array(ActionSummary);
export class AssetModelSummary extends S.Class<AssetModelSummary>("AssetModelSummary")({id: S.String, externalId: S.optional(S.String), arn: S.String, name: S.String, assetModelType: S.optional(S.String), description: S.String, creationDate: S.Date, lastUpdateDate: S.Date, status: AssetModelStatus, version: S.optional(S.String)}) {}
export const AssetModelSummaries = S.Array(AssetModelSummary);
export class AssetPropertySummary extends S.Class<AssetPropertySummary>("AssetPropertySummary")({id: S.String, externalId: S.optional(S.String), alias: S.optional(S.String), unit: S.optional(S.String), notification: S.optional(PropertyNotification), assetCompositeModelId: S.optional(S.String), path: S.optional(AssetPropertyPath)}) {}
export const AssetPropertySummaries = S.Array(AssetPropertySummary);
export class AssetSummary extends S.Class<AssetSummary>("AssetSummary")({id: S.String, externalId: S.optional(S.String), arn: S.String, name: S.String, assetModelId: S.String, creationDate: S.Date, lastUpdateDate: S.Date, status: AssetStatus, hierarchies: AssetHierarchies, description: S.optional(S.String)}) {}
export const AssetSummaries = S.Array(AssetSummary);
export class AssociatedAssetsSummary extends S.Class<AssociatedAssetsSummary>("AssociatedAssetsSummary")({id: S.String, externalId: S.optional(S.String), arn: S.String, name: S.String, assetModelId: S.String, creationDate: S.Date, lastUpdateDate: S.Date, status: AssetStatus, hierarchies: AssetHierarchies, description: S.optional(S.String)}) {}
export const AssociatedAssetsSummaries = S.Array(AssociatedAssetsSummary);
export class JobSummary extends S.Class<JobSummary>("JobSummary")({id: S.String, name: S.String, status: S.String}) {}
export const JobSummaries = S.Array(JobSummary);
export class CompositionRelationshipSummary extends S.Class<CompositionRelationshipSummary>("CompositionRelationshipSummary")({assetModelId: S.String, assetModelCompositeModelId: S.String, assetModelCompositeModelType: S.String}) {}
export const CompositionRelationshipSummaries = S.Array(CompositionRelationshipSummary);
export class DataBindingValueFilter extends S.Class<DataBindingValueFilter>("DataBindingValueFilter")({asset: S.optional(AssetBindingValueFilter), assetModel: S.optional(AssetModelBindingValueFilter), assetProperty: S.optional(AssetPropertyBindingValueFilter), assetModelProperty: S.optional(AssetModelPropertyBindingValueFilter)}) {}
export class ComputationModelResolveToResourceSummary extends S.Class<ComputationModelResolveToResourceSummary>("ComputationModelResolveToResourceSummary")({resolveTo: S.optional(ResolveTo)}) {}
export const ComputationModelResolveToResourceSummaries = S.Array(ComputationModelResolveToResourceSummary);
export class ComputationModelSummary extends S.Class<ComputationModelSummary>("ComputationModelSummary")({id: S.String, arn: S.String, name: S.String, description: S.optional(S.String), type: S.String, creationDate: S.Date, lastUpdateDate: S.Date, status: ComputationModelStatus, version: S.String}) {}
export const ComputationModelSummaries = S.Array(ComputationModelSummary);
export class DashboardSummary extends S.Class<DashboardSummary>("DashboardSummary")({id: S.String, name: S.String, description: S.optional(S.String), creationDate: S.optional(S.Date), lastUpdateDate: S.optional(S.Date)}) {}
export const DashboardSummaries = S.Array(DashboardSummary);
export class DatasetSummary extends S.Class<DatasetSummary>("DatasetSummary")({id: S.String, arn: S.String, name: S.String, description: S.String, creationDate: S.Date, lastUpdateDate: S.Date, status: DatasetStatus}) {}
export const DatasetSummaries = S.Array(DatasetSummary);
export class ExecutionSummary extends S.Class<ExecutionSummary>("ExecutionSummary")({executionId: S.String, actionType: S.optional(S.String), targetResource: TargetResource, targetResourceVersion: S.String, resolveTo: S.optional(ResolveTo), executionStartTime: S.Date, executionEndTime: S.optional(S.Date), executionStatus: ExecutionStatus, executionEntityVersion: S.optional(S.String)}) {}
export const ExecutionSummaries = S.Array(ExecutionSummary);
export class GatewaySummary extends S.Class<GatewaySummary>("GatewaySummary")({gatewayId: S.String, gatewayName: S.String, gatewayPlatform: S.optional(GatewayPlatform), gatewayVersion: S.optional(S.String), gatewayCapabilitySummaries: S.optional(GatewayCapabilitySummaries), creationDate: S.Date, lastUpdateDate: S.Date}) {}
export const GatewaySummaries = S.Array(GatewaySummary);
export class InterfaceRelationshipSummary extends S.Class<InterfaceRelationshipSummary>("InterfaceRelationshipSummary")({id: S.String}) {}
export const InterfaceRelationshipSummaries = S.Array(InterfaceRelationshipSummary);
export class MonitorErrorDetails extends S.Class<MonitorErrorDetails>("MonitorErrorDetails")({code: S.optional(S.String), message: S.optional(S.String)}) {}
export class PortalStatus extends S.Class<PortalStatus>("PortalStatus")({state: S.String, error: S.optional(MonitorErrorDetails)}) {}
export class PortalSummary extends S.Class<PortalSummary>("PortalSummary")({id: S.String, name: S.String, description: S.optional(S.String), startUrl: S.String, creationDate: S.optional(S.Date), lastUpdateDate: S.optional(S.Date), roleArn: S.optional(S.String), status: PortalStatus, portalType: S.optional(S.String)}) {}
export const PortalSummaries = S.Array(PortalSummary);
export class ProjectSummary extends S.Class<ProjectSummary>("ProjectSummary")({id: S.String, name: S.String, description: S.optional(S.String), creationDate: S.optional(S.Date), lastUpdateDate: S.optional(S.Date)}) {}
export const ProjectSummaries = S.Array(ProjectSummary);
export class TimeSeriesSummary extends S.Class<TimeSeriesSummary>("TimeSeriesSummary")({assetId: S.optional(S.String), propertyId: S.optional(S.String), alias: S.optional(S.String), timeSeriesId: S.String, dataType: S.String, dataTypeSpec: S.optional(S.String), timeSeriesCreationDate: S.Date, timeSeriesLastUpdateDate: S.Date, timeSeriesArn: S.String}) {}
export const TimeSeriesSummaries = S.Array(TimeSeriesSummary);
export class PropertyMappingConfiguration extends S.Class<PropertyMappingConfiguration>("PropertyMappingConfiguration")({matchByPropertyName: S.optional(S.Boolean), createMissingProperty: S.optional(S.Boolean), overrides: S.optional(PropertyMappings)}) {}
export class BatchAssociateProjectAssetsResponse extends S.Class<BatchAssociateProjectAssetsResponse>("BatchAssociateProjectAssetsResponse")({errors: S.optional(BatchAssociateProjectAssetsErrors)}) {}
export class CreateAccessPolicyRequest extends S.Class<CreateAccessPolicyRequest>("CreateAccessPolicyRequest")({accessPolicyIdentity: Identity, accessPolicyResource: Resource, accessPolicyPermission: S.String, clientToken: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class CreateAssetModelCompositeModelResponse extends S.Class<CreateAssetModelCompositeModelResponse>("CreateAssetModelCompositeModelResponse")({assetModelCompositeModelId: S.String, assetModelCompositeModelPath: AssetModelCompositeModelPath, assetModelStatus: AssetModelStatus}) {}
export class CreateGatewayRequest extends S.Class<CreateGatewayRequest>("CreateGatewayRequest")({gatewayName: S.String, gatewayPlatform: GatewayPlatform, gatewayVersion: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class CreatePortalRequest extends S.Class<CreatePortalRequest>("CreatePortalRequest")({portalName: S.String, portalDescription: S.optional(S.String), portalContactEmail: S.String, clientToken: S.optional(S.String), portalLogoImageFile: S.optional(ImageFile), roleArn: S.String, tags: S.optional(TagMap), portalAuthMode: S.optional(S.String), notificationSenderEmail: S.optional(S.String), alarms: S.optional(Alarms), portalType: S.optional(S.String), portalTypeConfiguration: S.optional(PortalTypeConfiguration)}) {}
export class DeleteComputationModelResponse extends S.Class<DeleteComputationModelResponse>("DeleteComputationModelResponse")({computationModelStatus: ComputationModelStatus}) {}
export class DeleteDatasetResponse extends S.Class<DeleteDatasetResponse>("DeleteDatasetResponse")({datasetStatus: DatasetStatus}) {}
export class DescribeAssetCompositeModelResponse extends S.Class<DescribeAssetCompositeModelResponse>("DescribeAssetCompositeModelResponse")({assetId: S.String, assetCompositeModelId: S.String, assetCompositeModelExternalId: S.optional(S.String), assetCompositeModelPath: AssetCompositeModelPath, assetCompositeModelName: S.String, assetCompositeModelDescription: S.String, assetCompositeModelType: S.String, assetCompositeModelProperties: AssetProperties, assetCompositeModelSummaries: AssetCompositeModelSummaries, actionDefinitions: S.optional(ActionDefinitions)}) {}
export class DescribeAssetModelResponse extends S.Class<DescribeAssetModelResponse>("DescribeAssetModelResponse")({assetModelId: S.String, assetModelExternalId: S.optional(S.String), assetModelArn: S.String, assetModelName: S.String, assetModelType: S.optional(S.String), assetModelDescription: S.String, assetModelProperties: AssetModelProperties, assetModelHierarchies: AssetModelHierarchies, assetModelCompositeModels: S.optional(AssetModelCompositeModels), assetModelCompositeModelSummaries: S.optional(AssetModelCompositeModelSummaries), assetModelCreationDate: S.Date, assetModelLastUpdateDate: S.Date, assetModelStatus: AssetModelStatus, assetModelVersion: S.optional(S.String), interfaceDetails: S.optional(InterfaceDetails), eTag: S.optional(H.Header("ETag"))}) {}
export class DescribeAssetModelInterfaceRelationshipResponse extends S.Class<DescribeAssetModelInterfaceRelationshipResponse>("DescribeAssetModelInterfaceRelationshipResponse")({assetModelId: S.String, interfaceAssetModelId: S.String, propertyMappings: PropertyMappings, hierarchyMappings: HierarchyMappings}) {}
export class DescribeAssetPropertyResponse extends S.Class<DescribeAssetPropertyResponse>("DescribeAssetPropertyResponse")({assetId: S.String, assetExternalId: S.optional(S.String), assetName: S.String, assetModelId: S.String, assetProperty: S.optional(Property), compositeModel: S.optional(CompositeModelProperty)}) {}
export class DescribeComputationModelExecutionSummaryResponse extends S.Class<DescribeComputationModelExecutionSummaryResponse>("DescribeComputationModelExecutionSummaryResponse")({computationModelId: S.String, resolveTo: S.optional(ResolveTo), computationModelExecutionSummary: ComputationModelExecutionSummary}) {}
export class DescribeDefaultEncryptionConfigurationResponse extends S.Class<DescribeDefaultEncryptionConfigurationResponse>("DescribeDefaultEncryptionConfigurationResponse")({encryptionType: S.String, kmsKeyArn: S.optional(S.String), configurationStatus: ConfigurationStatus}) {}
export class DescribeExecutionResponse extends S.Class<DescribeExecutionResponse>("DescribeExecutionResponse")({executionId: S.String, actionType: S.optional(S.String), targetResource: TargetResource, targetResourceVersion: S.String, resolveTo: S.optional(ResolveTo), executionStartTime: S.Date, executionEndTime: S.optional(S.Date), executionStatus: ExecutionStatus, executionResult: S.optional(ExecutionResult), executionDetails: S.optional(ExecutionDetails), executionEntityVersion: S.optional(S.String)}) {}
export class DescribeGatewayResponse extends S.Class<DescribeGatewayResponse>("DescribeGatewayResponse")({gatewayId: S.String, gatewayName: S.String, gatewayArn: S.String, gatewayPlatform: S.optional(GatewayPlatform), gatewayVersion: S.optional(S.String), gatewayCapabilitySummaries: GatewayCapabilitySummaries, creationDate: S.Date, lastUpdateDate: S.Date}) {}
export class DescribePortalResponse extends S.Class<DescribePortalResponse>("DescribePortalResponse")({portalId: S.String, portalArn: S.String, portalName: S.String, portalDescription: S.optional(S.String), portalClientId: S.String, portalStartUrl: S.String, portalContactEmail: S.String, portalStatus: PortalStatus, portalCreationDate: S.Date, portalLastUpdateDate: S.Date, portalLogoImageLocation: S.optional(ImageLocation), roleArn: S.optional(S.String), portalAuthMode: S.optional(S.String), notificationSenderEmail: S.optional(S.String), alarms: S.optional(Alarms), portalType: S.optional(S.String), portalTypeConfiguration: S.optional(PortalTypeConfiguration)}) {}
export class DescribeStorageConfigurationResponse extends S.Class<DescribeStorageConfigurationResponse>("DescribeStorageConfigurationResponse")({storageType: S.String, multiLayerStorage: S.optional(MultiLayerStorage), disassociatedDataStorage: S.optional(S.String), retentionPeriod: S.optional(RetentionPeriod), configurationStatus: ConfigurationStatus, lastUpdateDate: S.optional(S.Date), warmTier: S.optional(S.String), warmTierRetentionPeriod: S.optional(WarmTierRetentionPeriod), disallowIngestNullNaN: S.optional(S.Boolean)}) {}
export class ExecuteActionResponse extends S.Class<ExecuteActionResponse>("ExecuteActionResponse")({actionId: S.String}) {}
export class GetInterpolatedAssetPropertyValuesResponse extends S.Class<GetInterpolatedAssetPropertyValuesResponse>("GetInterpolatedAssetPropertyValuesResponse")({interpolatedAssetPropertyValues: InterpolatedAssetPropertyValues, nextToken: S.optional(S.String)}) {}
export class ListAccessPoliciesResponse extends S.Class<ListAccessPoliciesResponse>("ListAccessPoliciesResponse")({accessPolicySummaries: AccessPolicySummaries, nextToken: S.optional(S.String)}) {}
export class ListActionsResponse extends S.Class<ListActionsResponse>("ListActionsResponse")({actionSummaries: ActionSummaries, nextToken: S.String}) {}
export class ListAssetModelsResponse extends S.Class<ListAssetModelsResponse>("ListAssetModelsResponse")({assetModelSummaries: AssetModelSummaries, nextToken: S.optional(S.String)}) {}
export class ListAssetPropertiesResponse extends S.Class<ListAssetPropertiesResponse>("ListAssetPropertiesResponse")({assetPropertySummaries: AssetPropertySummaries, nextToken: S.optional(S.String)}) {}
export class ListAssetsResponse extends S.Class<ListAssetsResponse>("ListAssetsResponse")({assetSummaries: AssetSummaries, nextToken: S.optional(S.String)}) {}
export class ListAssociatedAssetsResponse extends S.Class<ListAssociatedAssetsResponse>("ListAssociatedAssetsResponse")({assetSummaries: AssociatedAssetsSummaries, nextToken: S.optional(S.String)}) {}
export class ListBulkImportJobsResponse extends S.Class<ListBulkImportJobsResponse>("ListBulkImportJobsResponse")({jobSummaries: JobSummaries, nextToken: S.optional(S.String)}) {}
export class ListCompositionRelationshipsResponse extends S.Class<ListCompositionRelationshipsResponse>("ListCompositionRelationshipsResponse")({compositionRelationshipSummaries: CompositionRelationshipSummaries, nextToken: S.optional(S.String)}) {}
export class ListComputationModelDataBindingUsagesRequest extends S.Class<ListComputationModelDataBindingUsagesRequest>("ListComputationModelDataBindingUsagesRequest")({dataBindingValueFilter: DataBindingValueFilter, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListComputationModelResolveToResourcesResponse extends S.Class<ListComputationModelResolveToResourcesResponse>("ListComputationModelResolveToResourcesResponse")({computationModelResolveToResourceSummaries: ComputationModelResolveToResourceSummaries, nextToken: S.optional(S.String)}) {}
export class ListComputationModelsResponse extends S.Class<ListComputationModelsResponse>("ListComputationModelsResponse")({computationModelSummaries: ComputationModelSummaries, nextToken: S.optional(S.String)}) {}
export class ListDashboardsResponse extends S.Class<ListDashboardsResponse>("ListDashboardsResponse")({dashboardSummaries: DashboardSummaries, nextToken: S.optional(S.String)}) {}
export class ListDatasetsResponse extends S.Class<ListDatasetsResponse>("ListDatasetsResponse")({datasetSummaries: DatasetSummaries, nextToken: S.optional(S.String)}) {}
export class ListExecutionsResponse extends S.Class<ListExecutionsResponse>("ListExecutionsResponse")({executionSummaries: ExecutionSummaries, nextToken: S.optional(S.String)}) {}
export class ListGatewaysResponse extends S.Class<ListGatewaysResponse>("ListGatewaysResponse")({gatewaySummaries: GatewaySummaries, nextToken: S.optional(S.String)}) {}
export class ListInterfaceRelationshipsResponse extends S.Class<ListInterfaceRelationshipsResponse>("ListInterfaceRelationshipsResponse")({interfaceRelationshipSummaries: InterfaceRelationshipSummaries, nextToken: S.optional(S.String)}) {}
export class ListPortalsResponse extends S.Class<ListPortalsResponse>("ListPortalsResponse")({portalSummaries: S.optional(PortalSummaries), nextToken: S.optional(S.String)}) {}
export class ListProjectsResponse extends S.Class<ListProjectsResponse>("ListProjectsResponse")({projectSummaries: ProjectSummaries, nextToken: S.optional(S.String)}) {}
export class ListTimeSeriesResponse extends S.Class<ListTimeSeriesResponse>("ListTimeSeriesResponse")({TimeSeriesSummaries: TimeSeriesSummaries, nextToken: S.optional(S.String)}) {}
export class PutAssetModelInterfaceRelationshipRequest extends S.Class<PutAssetModelInterfaceRelationshipRequest>("PutAssetModelInterfaceRelationshipRequest")({assetModelId: S.String, interfaceAssetModelId: S.String, propertyMappingConfiguration: PropertyMappingConfiguration, clientToken: S.optional(S.String)}) {}
export class UpdateAssetModelRequest extends S.Class<UpdateAssetModelRequest>("UpdateAssetModelRequest")({assetModelId: S.String, assetModelExternalId: S.optional(S.String), assetModelName: S.String, assetModelDescription: S.optional(S.String), assetModelProperties: S.optional(AssetModelProperties), assetModelHierarchies: S.optional(AssetModelHierarchies), assetModelCompositeModels: S.optional(AssetModelCompositeModels), clientToken: S.optional(S.String), ifMatch: S.optional(H.Header("If-Match")), ifNoneMatch: S.optional(H.Header("If-None-Match")), matchForVersionType: S.optional(H.Header("Match-For-Version-Type"))}) {}
export class UpdatePortalResponse extends S.Class<UpdatePortalResponse>("UpdatePortalResponse")({portalStatus: PortalStatus}) {}
export class CompositionRelationshipItem extends S.Class<CompositionRelationshipItem>("CompositionRelationshipItem")({id: S.optional(S.String)}) {}
export const CompositionRelationship = S.Array(CompositionRelationshipItem);
export class ColumnType extends S.Class<ColumnType>("ColumnType")({scalarType: S.optional(S.String)}) {}
export class Datum extends S.Class<Datum>("Datum")({scalarValue: S.optional(S.String), arrayValue: S.optional(S.suspend(() => DatumList)), rowValue: S.optional(S.suspend((): S.Schema<Row, any> => Row)), nullValue: S.optional(S.Boolean)}) {}
export type DatumList = Datum[];
export const DatumList = S.Array(S.suspend((): S.Schema<Datum, any> => Datum)) as any as S.Schema<DatumList>;
export class Aggregates extends S.Class<Aggregates>("Aggregates")({average: S.optional(S.Number), count: S.optional(S.Number), maximum: S.optional(S.Number), minimum: S.optional(S.Number), sum: S.optional(S.Number), standardDeviation: S.optional(S.Number)}) {}
export class Trace extends S.Class<Trace>("Trace")({text: S.optional(S.String)}) {}
export class InterfaceSummary extends S.Class<InterfaceSummary>("InterfaceSummary")({interfaceAssetModelId: S.String, interfaceAssetModelPropertyId: S.String}) {}
export const InterfaceSummaries = S.Array(InterfaceSummary);
export class AssetHierarchyInfo extends S.Class<AssetHierarchyInfo>("AssetHierarchyInfo")({parentAssetId: S.optional(S.String), childAssetId: S.optional(S.String)}) {}
export class BatchGetAssetPropertyAggregatesErrorEntry extends S.Class<BatchGetAssetPropertyAggregatesErrorEntry>("BatchGetAssetPropertyAggregatesErrorEntry")({errorCode: S.String, errorMessage: S.String, entryId: S.String}) {}
export const BatchGetAssetPropertyAggregatesErrorEntries = S.Array(BatchGetAssetPropertyAggregatesErrorEntry);
export class AggregatedValue extends S.Class<AggregatedValue>("AggregatedValue")({timestamp: S.Date, quality: S.optional(S.String), value: Aggregates}) {}
export const AggregatedValues = S.Array(AggregatedValue);
export class BatchGetAssetPropertyAggregatesSuccessEntry extends S.Class<BatchGetAssetPropertyAggregatesSuccessEntry>("BatchGetAssetPropertyAggregatesSuccessEntry")({entryId: S.String, aggregatedValues: AggregatedValues}) {}
export const BatchGetAssetPropertyAggregatesSuccessEntries = S.Array(BatchGetAssetPropertyAggregatesSuccessEntry);
export class BatchGetAssetPropertyValueErrorEntry extends S.Class<BatchGetAssetPropertyValueErrorEntry>("BatchGetAssetPropertyValueErrorEntry")({errorCode: S.String, errorMessage: S.String, entryId: S.String}) {}
export const BatchGetAssetPropertyValueErrorEntries = S.Array(BatchGetAssetPropertyValueErrorEntry);
export class BatchGetAssetPropertyValueSuccessEntry extends S.Class<BatchGetAssetPropertyValueSuccessEntry>("BatchGetAssetPropertyValueSuccessEntry")({entryId: S.String, assetPropertyValue: S.optional(AssetPropertyValue)}) {}
export const BatchGetAssetPropertyValueSuccessEntries = S.Array(BatchGetAssetPropertyValueSuccessEntry);
export class BatchGetAssetPropertyValueHistoryErrorEntry extends S.Class<BatchGetAssetPropertyValueHistoryErrorEntry>("BatchGetAssetPropertyValueHistoryErrorEntry")({errorCode: S.String, errorMessage: S.String, entryId: S.String}) {}
export const BatchGetAssetPropertyValueHistoryErrorEntries = S.Array(BatchGetAssetPropertyValueHistoryErrorEntry);
export class BatchGetAssetPropertyValueHistorySuccessEntry extends S.Class<BatchGetAssetPropertyValueHistorySuccessEntry>("BatchGetAssetPropertyValueHistorySuccessEntry")({entryId: S.String, assetPropertyValueHistory: AssetPropertyValueHistory}) {}
export const BatchGetAssetPropertyValueHistorySuccessEntries = S.Array(BatchGetAssetPropertyValueHistorySuccessEntry);
export class CompositionDetails extends S.Class<CompositionDetails>("CompositionDetails")({compositionRelationship: S.optional(CompositionRelationship)}) {}
export class ColumnInfo extends S.Class<ColumnInfo>("ColumnInfo")({name: S.optional(S.String), type: S.optional(ColumnType)}) {}
export const ColumnsList = S.Array(ColumnInfo);
export class Row extends S.Class<Row>("Row")({data: S.suspend(() => DatumList)}) {}
export const Rows = S.Array(S.suspend((): S.Schema<Row, any> => Row));
export class AssetModelPropertySummary extends S.Class<AssetModelPropertySummary>("AssetModelPropertySummary")({id: S.optional(S.String), externalId: S.optional(S.String), name: S.String, dataType: S.String, dataTypeSpec: S.optional(S.String), unit: S.optional(S.String), type: PropertyType, assetModelCompositeModelId: S.optional(S.String), path: S.optional(AssetModelPropertyPath), interfaceSummaries: S.optional(InterfaceSummaries)}) {}
export const AssetModelPropertySummaries = S.Array(AssetModelPropertySummary);
export class AssetRelationshipSummary extends S.Class<AssetRelationshipSummary>("AssetRelationshipSummary")({hierarchyInfo: S.optional(AssetHierarchyInfo), relationshipType: S.String}) {}
export const AssetRelationshipSummaries = S.Array(AssetRelationshipSummary);
export class CreateAccessPolicyResponse extends S.Class<CreateAccessPolicyResponse>("CreateAccessPolicyResponse")({accessPolicyId: S.String, accessPolicyArn: S.String}) {}
export class CreateBulkImportJobRequest extends S.Class<CreateBulkImportJobRequest>("CreateBulkImportJobRequest")({jobName: S.String, jobRoleArn: S.String, files: Files, errorReportLocation: ErrorReportLocation, jobConfiguration: JobConfiguration, adaptiveIngestion: S.optional(S.Boolean), deleteFilesAfterImport: S.optional(S.Boolean)}) {}
export class CreateComputationModelRequest extends S.Class<CreateComputationModelRequest>("CreateComputationModelRequest")({computationModelName: S.String, computationModelDescription: S.optional(S.String), computationModelConfiguration: ComputationModelConfiguration, computationModelDataBinding: ComputationModelDataBinding, clientToken: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class CreateDatasetRequest extends S.Class<CreateDatasetRequest>("CreateDatasetRequest")({datasetId: S.optional(S.String), datasetName: S.String, datasetDescription: S.optional(S.String), datasetSource: DatasetSource, clientToken: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class CreateGatewayResponse extends S.Class<CreateGatewayResponse>("CreateGatewayResponse")({gatewayId: S.String, gatewayArn: S.String}) {}
export class CreatePortalResponse extends S.Class<CreatePortalResponse>("CreatePortalResponse")({portalId: S.String, portalArn: S.String, portalStartUrl: S.String, portalStatus: PortalStatus, ssoApplicationId: S.String}) {}
export class DeletePortalResponse extends S.Class<DeletePortalResponse>("DeletePortalResponse")({portalStatus: PortalStatus}) {}
export class DescribeAssetResponse extends S.Class<DescribeAssetResponse>("DescribeAssetResponse")({assetId: S.String, assetExternalId: S.optional(S.String), assetArn: S.String, assetName: S.String, assetModelId: S.String, assetProperties: AssetProperties, assetHierarchies: AssetHierarchies, assetCompositeModels: S.optional(AssetCompositeModels), assetCreationDate: S.Date, assetLastUpdateDate: S.Date, assetStatus: AssetStatus, assetDescription: S.optional(S.String), assetCompositeModelSummaries: S.optional(AssetCompositeModelSummaries)}) {}
export class DescribeAssetModelCompositeModelResponse extends S.Class<DescribeAssetModelCompositeModelResponse>("DescribeAssetModelCompositeModelResponse")({assetModelId: S.String, assetModelCompositeModelId: S.String, assetModelCompositeModelExternalId: S.optional(S.String), assetModelCompositeModelPath: AssetModelCompositeModelPath, assetModelCompositeModelName: S.String, assetModelCompositeModelDescription: S.String, assetModelCompositeModelType: S.String, assetModelCompositeModelProperties: AssetModelProperties, compositionDetails: S.optional(CompositionDetails), assetModelCompositeModelSummaries: AssetModelCompositeModelSummaries, actionDefinitions: S.optional(ActionDefinitions)}) {}
export class ExecuteQueryResponse extends S.Class<ExecuteQueryResponse>("ExecuteQueryResponse")({columns: S.optional(ColumnsList), rows: S.optional(Rows), nextToken: S.optional(S.String)}) {}
export class GetAssetPropertyAggregatesResponse extends S.Class<GetAssetPropertyAggregatesResponse>("GetAssetPropertyAggregatesResponse")({aggregatedValues: AggregatedValues, nextToken: S.optional(S.String)}) {}
export class ListAssetModelPropertiesResponse extends S.Class<ListAssetModelPropertiesResponse>("ListAssetModelPropertiesResponse")({assetModelPropertySummaries: AssetModelPropertySummaries, nextToken: S.optional(S.String)}) {}
export class ListAssetRelationshipsResponse extends S.Class<ListAssetRelationshipsResponse>("ListAssetRelationshipsResponse")({assetRelationshipSummaries: AssetRelationshipSummaries, nextToken: S.optional(S.String)}) {}
export class PutAssetModelInterfaceRelationshipResponse extends S.Class<PutAssetModelInterfaceRelationshipResponse>("PutAssetModelInterfaceRelationshipResponse")({assetModelId: S.String, interfaceAssetModelId: S.String, assetModelArn: S.String, assetModelStatus: AssetModelStatus}) {}
export class UpdateAssetModelResponse extends S.Class<UpdateAssetModelResponse>("UpdateAssetModelResponse")({assetModelStatus: AssetModelStatus}) {}
export class BatchGetAssetPropertyAggregatesErrorInfo extends S.Class<BatchGetAssetPropertyAggregatesErrorInfo>("BatchGetAssetPropertyAggregatesErrorInfo")({errorCode: S.String, errorTimestamp: S.Date}) {}
export class BatchGetAssetPropertyValueErrorInfo extends S.Class<BatchGetAssetPropertyValueErrorInfo>("BatchGetAssetPropertyValueErrorInfo")({errorCode: S.String, errorTimestamp: S.Date}) {}
export class BatchGetAssetPropertyValueHistoryErrorInfo extends S.Class<BatchGetAssetPropertyValueHistoryErrorInfo>("BatchGetAssetPropertyValueHistoryErrorInfo")({errorCode: S.String, errorTimestamp: S.Date}) {}
export const AssetPropertyValues = S.Array(AssetPropertyValue);
export const ComputationModelIdList = S.Array(S.String);
export class Content extends S.Class<Content>("Content")({text: S.optional(S.String)}) {}
export class BatchGetAssetPropertyAggregatesSkippedEntry extends S.Class<BatchGetAssetPropertyAggregatesSkippedEntry>("BatchGetAssetPropertyAggregatesSkippedEntry")({entryId: S.String, completionStatus: S.String, errorInfo: S.optional(BatchGetAssetPropertyAggregatesErrorInfo)}) {}
export const BatchGetAssetPropertyAggregatesSkippedEntries = S.Array(BatchGetAssetPropertyAggregatesSkippedEntry);
export class BatchGetAssetPropertyValueSkippedEntry extends S.Class<BatchGetAssetPropertyValueSkippedEntry>("BatchGetAssetPropertyValueSkippedEntry")({entryId: S.String, completionStatus: S.String, errorInfo: S.optional(BatchGetAssetPropertyValueErrorInfo)}) {}
export const BatchGetAssetPropertyValueSkippedEntries = S.Array(BatchGetAssetPropertyValueSkippedEntry);
export class BatchGetAssetPropertyValueHistorySkippedEntry extends S.Class<BatchGetAssetPropertyValueHistorySkippedEntry>("BatchGetAssetPropertyValueHistorySkippedEntry")({entryId: S.String, completionStatus: S.String, errorInfo: S.optional(BatchGetAssetPropertyValueHistoryErrorInfo)}) {}
export const BatchGetAssetPropertyValueHistorySkippedEntries = S.Array(BatchGetAssetPropertyValueHistorySkippedEntry);
export class PutAssetPropertyValueEntry extends S.Class<PutAssetPropertyValueEntry>("PutAssetPropertyValueEntry")({entryId: S.String, assetId: S.optional(S.String), propertyId: S.optional(S.String), propertyAlias: S.optional(S.String), propertyValues: AssetPropertyValues}) {}
export const PutAssetPropertyValueEntries = S.Array(PutAssetPropertyValueEntry);
export class BatchGetAssetPropertyAggregatesResponse extends S.Class<BatchGetAssetPropertyAggregatesResponse>("BatchGetAssetPropertyAggregatesResponse")({errorEntries: BatchGetAssetPropertyAggregatesErrorEntries, successEntries: BatchGetAssetPropertyAggregatesSuccessEntries, skippedEntries: BatchGetAssetPropertyAggregatesSkippedEntries, nextToken: S.optional(S.String)}) {}
export class BatchGetAssetPropertyValueResponse extends S.Class<BatchGetAssetPropertyValueResponse>("BatchGetAssetPropertyValueResponse")({errorEntries: BatchGetAssetPropertyValueErrorEntries, successEntries: BatchGetAssetPropertyValueSuccessEntries, skippedEntries: BatchGetAssetPropertyValueSkippedEntries, nextToken: S.optional(S.String)}) {}
export class BatchGetAssetPropertyValueHistoryResponse extends S.Class<BatchGetAssetPropertyValueHistoryResponse>("BatchGetAssetPropertyValueHistoryResponse")({errorEntries: BatchGetAssetPropertyValueHistoryErrorEntries, successEntries: BatchGetAssetPropertyValueHistorySuccessEntries, skippedEntries: BatchGetAssetPropertyValueHistorySkippedEntries, nextToken: S.optional(S.String)}) {}
export class BatchPutAssetPropertyValueRequest extends S.Class<BatchPutAssetPropertyValueRequest>("BatchPutAssetPropertyValueRequest")({enablePartialEntryProcessing: S.optional(S.Boolean), entries: PutAssetPropertyValueEntries}) {}
export class CreateAssetResponse extends S.Class<CreateAssetResponse>("CreateAssetResponse")({assetId: S.String, assetArn: S.String, assetStatus: AssetStatus}) {}
export class CreateBulkImportJobResponse extends S.Class<CreateBulkImportJobResponse>("CreateBulkImportJobResponse")({jobId: S.String, jobName: S.String, jobStatus: S.String}) {}
export class CreateComputationModelResponse extends S.Class<CreateComputationModelResponse>("CreateComputationModelResponse")({computationModelId: S.String, computationModelArn: S.String, computationModelStatus: ComputationModelStatus}) {}
export class CreateDatasetResponse extends S.Class<CreateDatasetResponse>("CreateDatasetResponse")({datasetId: S.String, datasetArn: S.String, datasetStatus: DatasetStatus}) {}
export class DataBindingValue extends S.Class<DataBindingValue>("DataBindingValue")({assetModelProperty: S.optional(AssetModelPropertyBindingValue), assetProperty: S.optional(AssetPropertyBindingValue)}) {}
export class CreateAssetModelRequest extends S.Class<CreateAssetModelRequest>("CreateAssetModelRequest")({assetModelName: S.String, assetModelType: S.optional(S.String), assetModelId: S.optional(S.String), assetModelExternalId: S.optional(S.String), assetModelDescription: S.optional(S.String), assetModelProperties: S.optional(AssetModelPropertyDefinitions), assetModelHierarchies: S.optional(AssetModelHierarchyDefinitions), assetModelCompositeModels: S.optional(AssetModelCompositeModelDefinitions), clientToken: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class Location extends S.Class<Location>("Location")({uri: S.optional(S.String)}) {}
export class MatchedDataBinding extends S.Class<MatchedDataBinding>("MatchedDataBinding")({value: DataBindingValue}) {}
export class Source extends S.Class<Source>("Source")({arn: S.optional(S.String), location: S.optional(Location)}) {}
export class ComputationModelDataBindingUsageSummary extends S.Class<ComputationModelDataBindingUsageSummary>("ComputationModelDataBindingUsageSummary")({computationModelIds: ComputationModelIdList, matchedDataBinding: MatchedDataBinding}) {}
export const ComputationModelDataBindingUsageSummaries = S.Array(ComputationModelDataBindingUsageSummary);
export const Timestamps = S.Array(TimeInNanos);
export class CreateAssetModelResponse extends S.Class<CreateAssetModelResponse>("CreateAssetModelResponse")({assetModelId: S.String, assetModelArn: S.String, assetModelStatus: AssetModelStatus}) {}
export class DataSetReference extends S.Class<DataSetReference>("DataSetReference")({datasetArn: S.optional(S.String), source: S.optional(Source)}) {}
export class ListComputationModelDataBindingUsagesResponse extends S.Class<ListComputationModelDataBindingUsagesResponse>("ListComputationModelDataBindingUsagesResponse")({dataBindingUsageSummaries: ComputationModelDataBindingUsageSummaries, nextToken: S.optional(S.String)}) {}
export class BatchPutAssetPropertyError extends S.Class<BatchPutAssetPropertyError>("BatchPutAssetPropertyError")({errorCode: S.String, errorMessage: S.String, timestamps: Timestamps}) {}
export const BatchPutAssetPropertyErrors = S.Array(BatchPutAssetPropertyError);
export class Reference extends S.Class<Reference>("Reference")({dataset: S.optional(DataSetReference)}) {}
export class BatchPutAssetPropertyErrorEntry extends S.Class<BatchPutAssetPropertyErrorEntry>("BatchPutAssetPropertyErrorEntry")({entryId: S.String, errors: BatchPutAssetPropertyErrors}) {}
export const BatchPutAssetPropertyErrorEntries = S.Array(BatchPutAssetPropertyErrorEntry);
export class Citation extends S.Class<Citation>("Citation")({reference: S.optional(Reference), content: S.optional(Content)}) {}
export const Citations = S.Array(Citation);
export class BatchPutAssetPropertyValueResponse extends S.Class<BatchPutAssetPropertyValueResponse>("BatchPutAssetPropertyValueResponse")({errorEntries: BatchPutAssetPropertyErrorEntries}) {}
export class InvocationOutput extends S.Class<InvocationOutput>("InvocationOutput")({message: S.optional(S.String), citations: S.optional(Citations)}) {}
export const ResponseStream = S.Union(Trace, InvocationOutput, S.suspend(() => AccessDeniedException), S.suspend(() => ConflictingOperationException), S.suspend(() => InternalFailureException), S.suspend(() => InvalidRequestException), S.suspend(() => LimitExceededException), S.suspend(() => ResourceNotFoundException), S.suspend(() => ThrottlingException));
export class InvokeAssistantResponse extends S.Class<InvokeAssistantResponse>("InvokeAssistantResponse")({body: H.Body("undefined", ResponseStream), conversationId: H.Header("x-amz-iotsitewise-assistant-conversation-id")}) {}

//# Errors
export class ConflictingOperationException extends S.TaggedError<ConflictingOperationException>()("ConflictingOperationException", {}) {};
export class InternalFailureException extends S.TaggedError<InternalFailureException>()("InternalFailureException", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class PreconditionFailedException extends S.TaggedError<PreconditionFailedException>()("PreconditionFailedException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};
export class ResourceAlreadyExistsException extends S.TaggedError<ResourceAlreadyExistsException>()("ResourceAlreadyExistsException", {}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {message: S.optional(S.String), resourceName: S.optional(S.String)}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {message: S.optional(S.String)}) {};
export class QueryTimeoutException extends S.TaggedError<QueryTimeoutException>()("QueryTimeoutException", {message: S.optional(S.String)}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes a project from IoT SiteWise Monitor.
 */export const deleteProject = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/projects/{projectId}", method: "DELETE", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DeleteProject" }, DeleteProjectRequest, DeleteProjectResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a time series (data stream). If you delete a time series that's associated with an
 * asset property, the asset property still exists, but the time series will no longer be
 * associated with this asset property.
 * 
 * 
 * To identify a time series, do one of the following:
 * 
 * 
 * 
 * - If the time series isn't associated with an asset property,
 * specify the `alias` of the time series.
 * 
 * 
 * 
 * - If the time series is associated with an asset property,
 * specify one of the following:
 * 
 * 
 * 
 * - The `alias` of the time series.
 * 
 * 
 * 
 * - The `assetId` and `propertyId` that identifies the asset property.
 */export const deleteTimeSeries = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/timeseries/delete", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DeleteTimeSeries" }, DeleteTimeSeriesRequest, S.Struct({}), [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a child asset from the given parent asset through a hierarchy defined in the
 * parent asset's model.
 */export const disassociateAssets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assets/{assetId}/disassociate", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DisassociateAssets" }, DisassociateAssetsRequest, S.Struct({}), [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a time series (data stream) from an asset property.
 */export const disassociateTimeSeriesFromAssetProperty = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/timeseries/disassociate", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DisassociateTimeSeriesFromAssetProperty" }, DisassociateTimeSeriesFromAssetPropertyRequest, S.Struct({}), [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets logging options for IoT SiteWise.
 */export const putLoggingOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/logging", method: "PUT", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.PutLoggingOptions" }, PutLoggingOptionsRequest, PutLoggingOptionsResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor
 * portal or project resource.
 */export const updateAccessPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/access-policies/{accessPolicyId}", method: "PUT", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.UpdateAccessPolicy" }, UpdateAccessPolicyRequest, UpdateAccessPolicyResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an asset property's alias and notification state.
 * 
 * 
 * 
 * 
 * This operation overwrites the property's existing alias and notification state. To keep
 * your existing property's alias or notification state, you must include the existing values
 * in the UpdateAssetProperty request. For more information, see DescribeAssetProperty.
 */export const updateAssetProperty = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assets/{assetId}/properties/{propertyId}", method: "PUT", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.UpdateAssetProperty" }, UpdateAssetPropertyRequest, S.Struct({}), [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an IoT SiteWise Monitor dashboard.
 */export const updateDashboard = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/dashboards/{dashboardId}", method: "PUT", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.UpdateDashboard" }, UpdateDashboardRequest, UpdateDashboardResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a gateway's name.
 */export const updateGateway = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/20200301/gateways/{gatewayId}", method: "PUT", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.UpdateGateway" }, UpdateGatewayRequest, S.Struct({}), [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an IoT SiteWise Monitor project.
 */export const updateProject = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/projects/{projectId}", method: "PUT", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.UpdateProject" }, UpdateProjectRequest, UpdateProjectResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a time series (data stream) with an asset property.
 */export const associateTimeSeriesToAssetProperty = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/timeseries/associate", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.AssociateTimeSeriesToAssetProperty" }, AssociateTimeSeriesToAssetPropertyRequest, S.Struct({}), [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.
 */export const batchDisassociateProjectAssets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/projects/{projectId}/assets/disassociate", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.BatchDisassociateProjectAssets" }, BatchDisassociateProjectAssetsRequest, BatchDisassociateProjectAssetsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a dashboard in an IoT SiteWise Monitor project.
 */export const createDashboard = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/dashboards", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.CreateDashboard" }, CreateDashboardRequest, CreateDashboardResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a project in the specified portal.
 * 
 * 
 * 
 * 
 * Make sure that the project name and description don't contain confidential
 * information.
 */export const createProject = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/projects", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.CreateProject" }, CreateProjectRequest, CreateProjectResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an access policy that grants the specified identity access to the specified
 * IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor
 * resource.
 */export const deleteAccessPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/access-policies/{accessPolicyId}", method: "DELETE", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DeleteAccessPolicy" }, DeleteAccessPolicyRequest, DeleteAccessPolicyResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an asset. This action can't be undone. For more information, see Deleting assets and
 * models in the *IoT SiteWise User Guide*.
 * 
 * 
 * 
 * 
 * You can't delete an asset that's associated to another asset. For more information, see
 * DisassociateAssets.
 */export const deleteAsset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assets/{assetId}", method: "DELETE", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DeleteAsset" }, DeleteAssetRequest, DeleteAssetResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a composite model. This action can't be undone. You must delete all assets created
 * from a composite model before you can delete the model. Also, you can't delete a composite
 * model if a parent asset model exists that contains a property formula expression that depends
 * on the asset model that you want to delete. For more information, see Deleting assets and
 * models in the *IoT SiteWise User Guide*.
 */export const deleteAssetModelCompositeModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}", method: "DELETE", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DeleteAssetModelCompositeModel" }, DeleteAssetModelCompositeModelRequest, DeleteAssetModelCompositeModelResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, PreconditionFailedException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an interface relationship between an asset model and an interface asset
 * model.
 */export const deleteAssetModelInterfaceRelationship = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models/{assetModelId}/interface/{interfaceAssetModelId}/asset-model-interface-relationship", method: "DELETE", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DeleteAssetModelInterfaceRelationship" }, DeleteAssetModelInterfaceRelationshipRequest, DeleteAssetModelInterfaceRelationshipResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a dashboard from IoT SiteWise Monitor.
 */export const deleteDashboard = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/dashboards/{dashboardId}", method: "DELETE", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DeleteDashboard" }, DeleteDashboardRequest, DeleteDashboardResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain
 * in your gateway's file system.
 */export const deleteGateway = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/20200301/gateways/{gatewayId}", method: "DELETE", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DeleteGateway" }, DeleteGatewayRequest, S.Struct({}), [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or
 * project.
 */export const describeAccessPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/access-policies/{accessPolicyId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeAccessPolicy" }, DescribeAccessPolicyRequest, DescribeAccessPolicyResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an action.
 */export const describeAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/actions/{actionId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeAction" }, DescribeActionRequest, DescribeActionResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a bulk import job request. For more information, see Describe
 * a bulk import job (CLI) in the *Amazon Simple Storage Service User Guide*.
 */export const describeBulkImportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/jobs/{jobId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeBulkImportJob" }, DescribeBulkImportJobRequest, DescribeBulkImportJobResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a computation model.
 */export const describeComputationModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/computation-models/{computationModelId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeComputationModel" }, DescribeComputationModelRequest, DescribeComputationModelResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a dashboard.
 */export const describeDashboard = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/dashboards/{dashboardId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeDashboard" }, DescribeDashboardRequest, DescribeDashboardResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a dataset.
 */export const describeDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/datasets/{datasetId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeDataset" }, DescribeDatasetRequest, DescribeDatasetResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Each gateway capability defines data sources for a gateway. This is the namespace of the gateway capability.
 * 
 * 
 * . The namespace follows the format `service:capability:version`, where:
 * 
 * 
 * 
 * - `service` - The service providing the capability, or `iotsitewise`.
 * 
 * 
 * 
 * - `capability` - The specific capability type. Options include: `opcuacollector` for the OPC UA data source collector, or `publisher` for data publisher capability.
 * 
 * 
 * 
 * - `version` - The version number of the capability. Option include `2` for Classic streams, V2 gateways, and `3` for MQTT-enabled, V3 gateways.
 * 
 * 
 * 
 * 
 * 
 * After updating a capability configuration, the sync status becomes `OUT_OF_SYNC` until the gateway processes the configuration.Use `DescribeGatewayCapabilityConfiguration` to check the sync status and verify the configuration was applied.
 * 
 * 
 * A gateway can have multiple capability configurations with different namespaces.
 */export const describeGatewayCapabilityConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/20200301/gateways/{gatewayId}/capability/{capabilityNamespace}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeGatewayCapabilityConfiguration" }, DescribeGatewayCapabilityConfigurationRequest, DescribeGatewayCapabilityConfigurationResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current IoT SiteWise logging options.
 */export const describeLoggingOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/logging", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeLoggingOptions" }, DescribeLoggingOptionsRequest, DescribeLoggingOptionsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a project.
 */export const describeProject = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/projects/{projectId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeProject" }, DescribeProjectRequest, DescribeProjectResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a time series (data stream).
 * 
 * 
 * To identify a time series, do one of the following:
 * 
 * 
 * 
 * - If the time series isn't associated with an asset property,
 * specify the `alias` of the time series.
 * 
 * 
 * 
 * - If the time series is associated with an asset property,
 * specify one of the following:
 * 
 * 
 * 
 * - The `alias` of the time series.
 * 
 * 
 * 
 * - The `assetId` and `propertyId` that identifies the asset property.
 */export const describeTimeSeries = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/timeseries/describe", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeTimeSeries" }, DescribeTimeSeriesRequest, DescribeTimeSeriesResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the history of an asset property's values. For more information, see Querying
 * historical values in the *IoT SiteWise User Guide*.
 * 
 * 
 * To identify an asset property, you must specify one of the following:
 * 
 * 
 * 
 * - The `assetId` and `propertyId` of an asset property.
 * 
 * 
 * 
 * - A `propertyAlias`, which is a data stream alias (for example,
 * `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see UpdateAssetProperty.
 */export const getAssetPropertyValueHistory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/properties/history", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.GetAssetPropertyValueHistory" }, GetAssetPropertyValueHistoryRequest, GetAssetPropertyValueHistoryResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of composite models associated with the asset model
 */export const listAssetModelCompositeModels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models/{assetModelId}/composite-models", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListAssetModelCompositeModels" }, ListAssetModelCompositeModelsRequest, ListAssetModelCompositeModelsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.
 */export const listProjectAssets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/projects/{projectId}/assets", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListProjectAssets" }, ListProjectAssetsRequest, ListProjectAssetsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the list of tags for an IoT SiteWise resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/tags", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the default encryption configuration for the Amazon Web Services account. For more information, see
 * Key management in
 * the *IoT SiteWise User Guide*.
 */export const putDefaultEncryptionConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/configuration/account/encryption", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.PutDefaultEncryptionConfiguration" }, PutDefaultEncryptionConfigurationRequest, PutDefaultEncryptionConfigurationResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Configures storage settings for IoT SiteWise.
 */export const putStorageConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/configuration/account/storage", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.PutStorageConfiguration" }, PutStorageConfigurationRequest, PutStorageConfigurationResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag from an IoT SiteWise resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/tags", method: "DELETE", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an asset's name. For more information, see Updating assets and models in the
 * *IoT SiteWise User Guide*.
 */export const updateAsset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assets/{assetId}", method: "PUT", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.UpdateAsset" }, UpdateAssetRequest, UpdateAssetResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a composite model and all of the assets that were created from the model. Each
 * asset created from the model inherits the updated asset model's property and hierarchy
 * definitions. For more information, see Updating assets and models in the
 * *IoT SiteWise User Guide*.
 * 
 * 
 * 
 * 
 * If you remove a property from a composite asset model, IoT SiteWise deletes all previous data
 * for that property. You can’t change the type or data type of an existing property.
 * 
 * 
 * To replace an existing composite asset model property with a new one with the same
 * `name`, do the following:
 * 
 * 
 * 
 * - Submit an `UpdateAssetModelCompositeModel` request with the entire
 * existing property removed.
 * 
 * 
 * 
 * - Submit a second `UpdateAssetModelCompositeModel` request that includes
 * the new property. The new asset property will have the same `name` as the
 * previous one and IoT SiteWise will generate a new unique `id`.
 */export const updateAssetModelCompositeModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}", method: "PUT", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.UpdateAssetModelCompositeModel" }, UpdateAssetModelCompositeModelRequest, UpdateAssetModelCompositeModelResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, PreconditionFailedException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the computation model.
 */export const updateComputationModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/computation-models/{computationModelId}", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.UpdateComputationModel" }, UpdateComputationModelRequest, UpdateComputationModelResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a dataset.
 */export const updateDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/datasets/{datasetId}", method: "PUT", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.UpdateDataset" }, UpdateDatasetRequest, UpdateDatasetResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway.
 * 
 * 
 * Important workflow notes:
 * 
 * 
 * Each gateway capability defines data sources for a gateway. This is the namespace of the gateway capability.
 * 
 * 
 * . The namespace follows the format `service:capability:version`, where:
 * 
 * 
 * 
 * - `service` - The service providing the capability, or `iotsitewise`.
 * 
 * 
 * 
 * - `capability` - The specific capability type. Options include: `opcuacollector` for the OPC UA data source collector, or `publisher` for data publisher capability.
 * 
 * 
 * 
 * - `version` - The version number of the capability. Option include `2` for Classic streams, V2 gateways, and `3` for MQTT-enabled, V3 gateways.
 * 
 * 
 * 
 * 
 * 
 * After updating a capability configuration, the sync status becomes `OUT_OF_SYNC` until the gateway processes the configuration.Use `DescribeGatewayCapabilityConfiguration` to check the sync status and verify the configuration was applied.
 * 
 * 
 * A gateway can have multiple capability configurations with different namespaces.
 */export const updateGatewayCapabilityConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/20200301/gateways/{gatewayId}/capability", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.UpdateGatewayCapabilityConfiguration" }, UpdateGatewayCapabilityConfigurationRequest, UpdateGatewayCapabilityConfigurationResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a child asset with the given parent asset through a hierarchy defined in the
 * parent asset's model. For more information, see Associating assets in the
 * *IoT SiteWise User Guide*.
 */export const associateAssets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assets/{assetId}/associate", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.AssociateAssets" }, AssociateAssetsRequest, S.Struct({}), [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a group (batch) of assets with an IoT SiteWise Monitor project.
 */export const batchAssociateProjectAssets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/projects/{projectId}/assets/associate", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.BatchAssociateProjectAssets" }, BatchAssociateProjectAssetsRequest, BatchAssociateProjectAssetsResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a custom composite model from specified property and hierarchy definitions. There
 * are two types of custom composite models, `inline` and
 * `component-model-based`.
 * 
 * 
 * Use component-model-based custom composite models to define standard, reusable components.
 * A component-model-based custom composite model consists of a name, a description, and the ID
 * of the component model it references. A component-model-based custom composite model has no
 * properties of its own; its referenced component model provides its associated properties to
 * any created assets. For more information, see Custom composite models (Components)
 * in the *IoT SiteWise User Guide*.
 * 
 * 
 * Use inline custom composite models to organize the properties of an asset model. The
 * properties of inline custom composite models are local to the asset model where they are
 * included and can't be used to create multiple assets.
 * 
 * 
 * To create a component-model-based model, specify the `composedAssetModelId` of
 * an existing asset model with `assetModelType` of
 * `COMPONENT_MODEL`.
 * 
 * 
 * To create an inline model, specify the `assetModelCompositeModelProperties` and
 * don't include an `composedAssetModelId`.
 */export const createAssetModelCompositeModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models/{assetModelId}/composite-models", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.CreateAssetModelCompositeModel" }, CreateAssetModelCompositeModelRequest, CreateAssetModelCompositeModelResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, PreconditionFailedException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an asset model. This action can't be undone. You must delete all assets created
 * from an asset model before you can delete the model. Also, you can't delete an asset model if
 * a parent asset model exists that contains a property formula expression that depends on the
 * asset model that you want to delete. For more information, see Deleting assets and models in the
 * *IoT SiteWise User Guide*.
 */export const deleteAssetModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models/{assetModelId}", method: "DELETE", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DeleteAssetModel" }, DeleteAssetModelRequest, DeleteAssetModelResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, PreconditionFailedException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a computation model. This action can't be undone.
 */export const deleteComputationModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/computation-models/{computationModelId}", method: "DELETE", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DeleteComputationModel" }, DeleteComputationModelRequest, DeleteComputationModelResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a dataset. This cannot be undone.
 */export const deleteDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/datasets/{datasetId}", method: "DELETE", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DeleteDataset" }, DeleteDatasetRequest, DeleteDatasetResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an asset composite model (also known as an asset component).
 * An `AssetCompositeModel` is an instance of an
 * `AssetModelCompositeModel`. If you want to see information about the model this is
 * based on, call DescribeAssetModelCompositeModel.
 */export const describeAssetCompositeModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assets/{assetId}/composite-models/{assetCompositeModelId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeAssetCompositeModel" }, DescribeAssetCompositeModelRequest, DescribeAssetCompositeModelResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an asset model. This includes details about the asset model's
 * properties, hierarchies, composite models, and any interface relationships if the asset model
 * implements interfaces.
 */export const describeAssetModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models/{assetModelId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeAssetModel" }, DescribeAssetModelRequest, DescribeAssetModelResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an interface relationship between an asset model and an
 * interface asset model.
 */export const describeAssetModelInterfaceRelationship = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models/{assetModelId}/interface/{interfaceAssetModelId}/asset-model-interface-relationship", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeAssetModelInterfaceRelationship" }, DescribeAssetModelInterfaceRelationshipRequest, DescribeAssetModelInterfaceRelationshipResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an asset property.
 * 
 * 
 * 
 * 
 * When you call this operation for an attribute property, this response includes the
 * default attribute value that you define in the asset model. If you update the default value
 * in the model, this operation's response includes the new default value.
 * 
 * 
 * 
 * 
 * This operation doesn't return the value of the asset property. To get the value of an
 * asset property, use GetAssetPropertyValue.
 */export const describeAssetProperty = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assets/{assetId}/properties/{propertyId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeAssetProperty" }, DescribeAssetPropertyRequest, DescribeAssetPropertyResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the execution summary of a computation model.
 */export const describeComputationModelExecutionSummary = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/computation-models/{computationModelId}/execution-summary", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeComputationModelExecutionSummary" }, DescribeComputationModelExecutionSummaryRequest, DescribeComputationModelExecutionSummaryResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the default encryption configuration for the Amazon Web Services account in
 * the default or specified Region. For more information, see Key management in the
 * *IoT SiteWise User Guide*.
 */export const describeDefaultEncryptionConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/configuration/account/encryption", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeDefaultEncryptionConfiguration" }, DescribeDefaultEncryptionConfigurationRequest, DescribeDefaultEncryptionConfigurationResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the execution.
 */export const describeExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/executions/{executionId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeExecution" }, DescribeExecutionRequest, DescribeExecutionResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a gateway.
 */export const describeGateway = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/20200301/gateways/{gatewayId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeGateway" }, DescribeGatewayRequest, DescribeGatewayResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a portal.
 */export const describePortal = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/portals/{portalId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribePortal" }, DescribePortalRequest, DescribePortalResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the storage configuration for IoT SiteWise.
 */export const describeStorageConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/configuration/account/storage", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeStorageConfiguration" }, DescribeStorageConfigurationRequest, DescribeStorageConfigurationResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Executes an action on a target resource.
 */export const executeAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/actions", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ExecuteAction" }, ExecuteActionRequest, ExecuteActionResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets an asset property's current value. For more information, see Querying
 * current values in the *IoT SiteWise User Guide*.
 * 
 * 
 * To identify an asset property, you must specify one of the following:
 * 
 * 
 * 
 * - The `assetId` and `propertyId` of an asset property.
 * 
 * 
 * 
 * - A `propertyAlias`, which is a data stream alias (for example,
 * `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see UpdateAssetProperty.
 */export const getAssetPropertyValue = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/properties/latest", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.GetAssetPropertyValue" }, GetAssetPropertyValueRequest, GetAssetPropertyValueResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get interpolated values for an asset property for a specified time interval, during a
 * period of time. If your time series is missing data points during the specified time interval,
 * you can use interpolation to estimate the missing data.
 * 
 * 
 * For example, you can use this operation to return the interpolated temperature values for
 * a wind turbine every 24 hours over a duration of 7 days.
 * 
 * 
 * To identify an asset property, you must specify one of the following:
 * 
 * 
 * 
 * - The `assetId` and `propertyId` of an asset property.
 * 
 * 
 * 
 * - A `propertyAlias`, which is a data stream alias (for example,
 * `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see UpdateAssetProperty.
 */export const getInterpolatedAssetPropertyValues = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/properties/interpolated", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.GetInterpolatedAssetPropertyValues" }, GetInterpolatedAssetPropertyValuesRequest, GetInterpolatedAssetPropertyValuesResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center
 * group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).
 */export const listAccessPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/access-policies", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListAccessPolicies" }, ListAccessPoliciesRequest, ListAccessPoliciesResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of actions for a specific target resource.
 */export const listActions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/actions", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListActions" }, ListActionsRequest, ListActionsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of summaries of all asset models.
 */export const listAssetModels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListAssetModels" }, ListAssetModelsRequest, ListAssetModelsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of properties associated with an asset.
 * If you update properties associated with the model before you finish listing all the properties,
 * you need to start all over again.
 */export const listAssetProperties = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assets/{assetId}/properties", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListAssetProperties" }, ListAssetPropertiesRequest, ListAssetPropertiesResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of asset summaries.
 * 
 * 
 * You can use this operation to do the following:
 * 
 * 
 * 
 * - List assets based on a specific asset model.
 * 
 * 
 * 
 * - List top-level assets.
 * 
 * 
 * 
 * 
 * 
 * You can't use this operation to list all assets. To retrieve summaries for all of your
 * assets, use ListAssetModels to get all of your asset model IDs. Then, use ListAssets to get all
 * assets for each asset model.
 */export const listAssets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assets", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListAssets" }, ListAssetsRequest, ListAssetsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of associated assets.
 * 
 * 
 * You can use this operation to do the following:
 * 
 * 
 * 
 * - `CHILD` - List all child assets associated to the asset.
 * 
 * 
 * 
 * - `PARENT` - List the asset's parent asset.
 */export const listAssociatedAssets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assets/{assetId}/hierarchies", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListAssociatedAssets" }, ListAssociatedAssetsRequest, ListAssociatedAssetsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of bulk import job requests. For more information, see List bulk
 * import jobs (CLI) in the *IoT SiteWise User Guide*.
 */export const listBulkImportJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/jobs", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListBulkImportJobs" }, ListBulkImportJobsRequest, ListBulkImportJobsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of composition relationships for an asset model of type
 * `COMPONENT_MODEL`.
 */export const listCompositionRelationships = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models/{assetModelId}/composition-relationships", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListCompositionRelationships" }, ListCompositionRelationshipsRequest, ListCompositionRelationshipsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all distinct resources that are resolved from the executed actions of the
 * computation model.
 */export const listComputationModelResolveToResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/computation-models/{computationModelId}/resolve-to-resources", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListComputationModelResolveToResources" }, ListComputationModelResolveToResourcesRequest, ListComputationModelResolveToResourcesResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of summaries of all computation models.
 */export const listComputationModels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/computation-models", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListComputationModels" }, ListComputationModelsRequest, ListComputationModelsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.
 */export const listDashboards = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/dashboards", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListDashboards" }, ListDashboardsRequest, ListDashboardsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of datasets for a specific target resource.
 */export const listDatasets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/datasets", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListDatasets" }, ListDatasetsRequest, ListDatasetsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of summaries of all executions.
 */export const listExecutions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/executions", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListExecutions" }, ListExecutionsRequest, ListExecutionsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of gateways.
 */export const listGateways = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/20200301/gateways", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListGateways" }, ListGatewaysRequest, ListGatewaysResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of asset models that have a specific interface asset model
 * applied to them.
 */export const listInterfaceRelationships = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/interface/{interfaceAssetModelId}/asset-models", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListInterfaceRelationships" }, ListInterfaceRelationshipsRequest, ListInterfaceRelationshipsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of IoT SiteWise Monitor portals.
 */export const listPortals = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/portals", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListPortals" }, ListPortalsRequest, ListPortalsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.
 */export const listProjects = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/projects", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListProjects" }, ListProjectsRequest, ListProjectsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of time series (data streams).
 */export const listTimeSeries = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/timeseries", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListTimeSeries" }, ListTimeSeriesRequest, ListTimeSeriesResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation
 * updates the tag's value.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/tags", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.TagResource" }, TagResourceRequest, TagResourceResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException, TooManyTagsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an IoT SiteWise Monitor portal.
 */export const updatePortal = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/portals/{portalId}", method: "PUT", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.UpdatePortal" }, UpdatePortalRequest, UpdatePortalResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or
 * IAM user) access to the specified IoT SiteWise Monitor portal or project resource.
 * 
 * 
 * 
 * 
 * Support for access policies that use an SSO Group as the identity is not supported at this time.
 */export const createAccessPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/access-policies", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.CreateAccessPolicy" }, CreateAccessPolicyRequest, CreateAccessPolicyResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a gateway, which is a virtual or edge device that delivers industrial data streams
 * from local servers to IoT SiteWise. For more information, see Ingesting data using a gateway in the
 * *IoT SiteWise User Guide*.
 */export const createGateway = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/20200301/gateways", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.CreateGateway" }, CreateGatewayRequest, CreateGatewayResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM
 * to authenticate portal users and manage user permissions.
 * 
 * 
 * 
 * 
 * Before you can sign in to a new portal, you must add at least one identity to that
 * portal. For more information, see Adding or removing portal
 * administrators in the *IoT SiteWise User Guide*.
 */export const createPortal = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/portals", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.CreatePortal" }, CreatePortalRequest, CreatePortalResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a portal from IoT SiteWise Monitor.
 */export const deletePortal = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/portals/{portalId}", method: "DELETE", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DeletePortal" }, DeletePortalRequest, DeletePortalResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an asset.
 */export const describeAsset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assets/{assetId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeAsset" }, DescribeAssetRequest, DescribeAssetResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an asset model composite model (also known as an asset model
 * component). For more information, see Custom composite models
 * (Components) in the *IoT SiteWise User Guide*.
 */export const describeAssetModelCompositeModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.DescribeAssetModelCompositeModel" }, DescribeAssetModelCompositeModelRequest, DescribeAssetModelCompositeModelResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets aggregated values for an asset property. For more information, see Querying
 * aggregates in the *IoT SiteWise User Guide*.
 * 
 * 
 * To identify an asset property, you must specify one of the following:
 * 
 * 
 * 
 * - The `assetId` and `propertyId` of an asset property.
 * 
 * 
 * 
 * - A `propertyAlias`, which is a data stream alias (for example,
 * `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see UpdateAssetProperty.
 */export const getAssetPropertyAggregates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/properties/aggregates", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.GetAssetPropertyAggregates" }, GetAssetPropertyAggregatesRequest, GetAssetPropertyAggregatesResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of properties associated with an asset model.
 * If you update properties associated with the model before you finish listing all the properties,
 * you need to start all over again.
 */export const listAssetModelProperties = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models/{assetModelId}/properties", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListAssetModelProperties" }, ListAssetModelPropertiesRequest, ListAssetModelPropertiesResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of asset relationships for an asset. You can use this operation
 * to identify an asset's root asset and all associated assets between that asset and its
 * root.
 */export const listAssetRelationships = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assets/{assetId}/assetRelationships", method: "GET", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListAssetRelationships" }, ListAssetRelationshipsRequest, ListAssetRelationshipsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates an interface relationship between an asset model and an interface asset
 * model. This operation applies an interface to an asset model.
 */export const putAssetModelInterfaceRelationship = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models/{assetModelId}/interface/{interfaceAssetModelId}/asset-model-interface-relationship", method: "PUT", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.PutAssetModelInterfaceRelationship" }, PutAssetModelInterfaceRelationshipRequest, PutAssetModelInterfaceRelationshipResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an asset model and all of the assets that were created from the model. Each asset
 * created from the model inherits the updated asset model's property and hierarchy definitions.
 * For more information, see Updating assets and models in the
 * *IoT SiteWise User Guide*.
 * 
 * 
 * 
 * 
 * If you remove a property from an asset model, IoT SiteWise deletes all previous data for that
 * property. You can’t change the type or data type of an existing property.
 * 
 * 
 * To replace an existing asset model property with a new one with the same
 * `name`, do the following:
 * 
 * 
 * 
 * - Submit an `UpdateAssetModel` request with the entire existing property
 * removed.
 * 
 * 
 * 
 * - Submit a second `UpdateAssetModel` request that includes the new
 * property. The new asset property will have the same `name` as the previous
 * one and IoT SiteWise will generate a new unique `id`.
 */export const updateAssetModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models/{assetModelId}", method: "PUT", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.UpdateAssetModel" }, UpdateAssetModelRequest, UpdateAssetModelResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, PreconditionFailedException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets aggregated values (for example, average, minimum, and maximum) for one or more asset
 * properties. For more information, see Querying aggregates in the
 * *IoT SiteWise User Guide*.
 */export const batchGetAssetPropertyAggregates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/properties/batch/aggregates", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.BatchGetAssetPropertyAggregates" }, BatchGetAssetPropertyAggregatesRequest, BatchGetAssetPropertyAggregatesResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the current value for one or more asset properties. For more information, see Querying
 * current values in the *IoT SiteWise User Guide*.
 */export const batchGetAssetPropertyValue = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/properties/batch/latest", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.BatchGetAssetPropertyValue" }, BatchGetAssetPropertyValueRequest, BatchGetAssetPropertyValueResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the historical values for one or more asset properties. For more information, see
 * Querying historical values in the *IoT SiteWise User Guide*.
 */export const batchGetAssetPropertyValueHistory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/properties/batch/history", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.BatchGetAssetPropertyValueHistory" }, BatchGetAssetPropertyValueHistoryRequest, BatchGetAssetPropertyValueHistoryResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an asset from an existing asset model. For more information, see Creating assets in the
 * *IoT SiteWise User Guide*.
 */export const createAsset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assets", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.CreateAsset" }, CreateAssetRequest, CreateAssetResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see Create a
 * bulk import job (CLI) in the *Amazon Simple Storage Service User Guide*.
 * 
 * 
 * 
 * 
 * Before you create a bulk import job, you must enable IoT SiteWise warm tier or IoT SiteWise cold tier.
 * For more information about how to configure storage settings, see PutStorageConfiguration.
 * 
 * 
 * Bulk import is designed to store historical data to IoT SiteWise.
 * 
 * 
 * 
 * - Newly ingested data in the hot tier triggers notifications and computations.
 * 
 * 
 * 
 * - After data moves from the hot tier to the warm or cold tier based on retention
 * settings, it does not trigger computations or notifications.
 * 
 * 
 * 
 * - Data older than 7 days does not trigger computations or notifications.
 */export const createBulkImportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/jobs", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.CreateBulkImportJob" }, CreateBulkImportJobRequest, CreateBulkImportJobResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a computation model with a configuration and data binding.
 */export const createComputationModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/computation-models", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.CreateComputationModel" }, CreateComputationModelRequest, CreateComputationModelResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a dataset to connect an external datasource.
 */export const createDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/datasets", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.CreateDataset" }, CreateDatasetRequest, CreateDatasetResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Run SQL queries to retrieve metadata and time-series data from asset models, assets,
 * measurements, metrics, transforms, and aggregates.
 */export const executeQuery = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/queries/execution", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ExecuteQuery" }, ExecuteQueryRequest, ExecuteQueryResponse, [AccessDeniedException, InternalFailureException, InvalidRequestException, QueryTimeoutException, ServiceUnavailableException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an asset model from specified property and hierarchy definitions. You create
 * assets from asset models. With asset models, you can easily create assets of the same type
 * that have standardized definitions. Each asset created from a model inherits the asset model's
 * property and hierarchy definitions. For more information, see Defining asset models in the
 * *IoT SiteWise User Guide*.
 * 
 * 
 * You can create three types of asset models, `ASSET_MODEL`,
 * `COMPONENT_MODEL`, or an `INTERFACE`.
 * 
 * 
 * 
 * - **ASSET_MODEL** – (default) An asset model that
 * you can use to create assets. Can't be included as a component in another asset
 * model.
 * 
 * 
 * 
 * - **COMPONENT_MODEL** – A reusable component that
 * you can include in the composite models of other asset models. You can't create
 * assets directly from this type of asset model.
 * 
 * 
 * 
 * - **INTERFACE** – An interface is a type of model
 * that defines a standard structure that can be applied to different asset models.
 */export const createAssetModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/asset-models", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.CreateAssetModel" }, CreateAssetModelRequest, CreateAssetModelResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all data binding usages for computation models. This allows to identify where
 * specific data bindings are being utilized across the computation models. This track
 * dependencies between data sources and computation models.
 */export const listComputationModelDataBindingUsages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/computation-models/data-binding-usages", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.ListComputationModelDataBindingUsages" }, ListComputationModelDataBindingUsagesRequest, ListComputationModelDataBindingUsagesResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value
 * (TQV) data point. For more information, see Ingesting data using the API in the
 * *IoT SiteWise User Guide*.
 * 
 * 
 * To identify an asset property, you must specify one of the following:
 * 
 * 
 * 
 * - The `assetId` and `propertyId` of an asset property.
 * 
 * 
 * 
 * - A `propertyAlias`, which is a data stream alias (for example,
 * `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see UpdateAssetProperty.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more
 * than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps
 * outside of the inclusive range of [-7 days, +10 minutes] and returns a
 * `TimestampOutOfRangeException` error.
 * 
 * 
 * For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer
 * TQV has a different quality. For example, if you store a TQV `{T1, GOOD, V1}`,
 * then storing `{T1, GOOD, V2}` replaces the existing TQV.
 * 
 * 
 * 
 * 
 * IoT SiteWise authorizes access to each `BatchPutAssetPropertyValue` entry individually.
 * For more information, see BatchPutAssetPropertyValue authorization in the
 * *IoT SiteWise User Guide*.
 */export const batchPutAssetPropertyValue = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/properties", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.BatchPutAssetPropertyValue" }, BatchPutAssetPropertyValueRequest, BatchPutAssetPropertyValueResponse, [ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Invokes SiteWise Assistant to start or continue a conversation.
 */export const invokeAssistant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/assistant/invocation", method: "POST", sdkId: "IoTSiteWise", sigV4ServiceName: "iotsitewise", name: "AWSIoTSiteWise.InvokeAssistant" }, InvokeAssistantRequest, InvokeAssistantResponse, [AccessDeniedException, ConflictingOperationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

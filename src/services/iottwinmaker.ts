import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetPricingPlanRequest extends S.Class<GetPricingPlanRequest>("GetPricingPlanRequest")({}) {}
export const ExtendsFrom = S.Array(S.String);
export const SceneCapabilities = S.Array(S.String);
export const SelectedPropertyList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export const PricingBundles = S.Array(S.String);
export class CancelMetadataTransferJobRequest extends S.Class<CancelMetadataTransferJobRequest>("CancelMetadataTransferJobRequest")({metadataTransferJobId: S.String}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class CreateSyncJobRequest extends S.Class<CreateSyncJobRequest>("CreateSyncJobRequest")({workspaceId: S.String, syncSource: S.String, syncRole: S.String, tags: S.optional(TagMap)}) {}
export class CreateWorkspaceRequest extends S.Class<CreateWorkspaceRequest>("CreateWorkspaceRequest")({workspaceId: S.String, description: S.optional(S.String), s3Location: S.optional(S.String), role: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class DeleteComponentTypeRequest extends S.Class<DeleteComponentTypeRequest>("DeleteComponentTypeRequest")({workspaceId: S.String, componentTypeId: S.String}) {}
export class DeleteEntityRequest extends S.Class<DeleteEntityRequest>("DeleteEntityRequest")({workspaceId: S.String, entityId: S.String, isRecursive: S.optional(S.Boolean)}) {}
export class DeleteSceneRequest extends S.Class<DeleteSceneRequest>("DeleteSceneRequest")({workspaceId: S.String, sceneId: S.String}) {}
export class DeleteSceneResponse extends S.Class<DeleteSceneResponse>("DeleteSceneResponse")({}) {}
export class DeleteSyncJobRequest extends S.Class<DeleteSyncJobRequest>("DeleteSyncJobRequest")({workspaceId: S.String, syncSource: S.String}) {}
export class DeleteWorkspaceRequest extends S.Class<DeleteWorkspaceRequest>("DeleteWorkspaceRequest")({workspaceId: S.String}) {}
export class ExecuteQueryRequest extends S.Class<ExecuteQueryRequest>("ExecuteQueryRequest")({workspaceId: S.String, queryStatement: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class GetComponentTypeRequest extends S.Class<GetComponentTypeRequest>("GetComponentTypeRequest")({workspaceId: S.String, componentTypeId: S.String}) {}
export class GetEntityRequest extends S.Class<GetEntityRequest>("GetEntityRequest")({workspaceId: S.String, entityId: S.String}) {}
export class GetMetadataTransferJobRequest extends S.Class<GetMetadataTransferJobRequest>("GetMetadataTransferJobRequest")({metadataTransferJobId: S.String}) {}
export class GetSceneRequest extends S.Class<GetSceneRequest>("GetSceneRequest")({workspaceId: S.String, sceneId: S.String}) {}
export class GetSyncJobRequest extends S.Class<GetSyncJobRequest>("GetSyncJobRequest")({syncSource: S.String, workspaceId: S.optional(S.String)}) {}
export class GetWorkspaceRequest extends S.Class<GetWorkspaceRequest>("GetWorkspaceRequest")({workspaceId: S.String}) {}
export class ListComponentsRequest extends S.Class<ListComponentsRequest>("ListComponentsRequest")({workspaceId: S.String, entityId: S.String, componentPath: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListPropertiesRequest extends S.Class<ListPropertiesRequest>("ListPropertiesRequest")({workspaceId: S.String, componentName: S.optional(S.String), componentPath: S.optional(S.String), entityId: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListScenesRequest extends S.Class<ListScenesRequest>("ListScenesRequest")({workspaceId: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListSyncJobsRequest extends S.Class<ListSyncJobsRequest>("ListSyncJobsRequest")({workspaceId: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceARN: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListWorkspacesRequest extends S.Class<ListWorkspacesRequest>("ListWorkspacesRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceARN: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceARN: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class Relationship extends S.Class<Relationship>("Relationship")({targetComponentTypeId: S.optional(S.String), relationshipType: S.optional(S.String)}) {}
export class DataType extends S.Class<DataType>("DataType")({type: S.String, nestedType: S.optional(S.suspend((): S.Schema<DataType, any> => DataType)), allowedValues: S.optional(S.suspend(() => DataValueList)), unitOfMeasure: S.optional(S.String), relationship: S.optional(Relationship)}) {}
export class RelationshipValue extends S.Class<RelationshipValue>("RelationshipValue")({targetEntityId: S.optional(S.String), targetComponentName: S.optional(S.String)}) {}
export class DataValue extends S.Class<DataValue>("DataValue")({booleanValue: S.optional(S.Boolean), doubleValue: S.optional(S.Number), integerValue: S.optional(S.Number), longValue: S.optional(S.Number), stringValue: S.optional(S.String), listValue: S.optional(S.suspend(() => DataValueList)), mapValue: S.optional(S.suspend(() => DataValueMap)), relationshipValue: S.optional(RelationshipValue), expression: S.optional(S.String)}) {}
export const Configuration = S.Record({key: S.String, value: S.String});
export class PropertyDefinitionRequest extends S.Class<PropertyDefinitionRequest>("PropertyDefinitionRequest")({dataType: S.optional(DataType), isRequiredInEntity: S.optional(S.Boolean), isExternalId: S.optional(S.Boolean), isStoredExternally: S.optional(S.Boolean), isTimeSeries: S.optional(S.Boolean), defaultValue: S.optional(DataValue), configuration: S.optional(Configuration), displayName: S.optional(S.String)}) {}
export const PropertyDefinitionsRequest = S.Record({key: S.String, value: PropertyDefinitionRequest});
export const RequiredProperties = S.Array(S.String);
export class LambdaFunction extends S.Class<LambdaFunction>("LambdaFunction")({arn: S.String}) {}
export class DataConnector extends S.Class<DataConnector>("DataConnector")({lambda: S.optional(LambdaFunction), isNative: S.optional(S.Boolean)}) {}
export class FunctionRequest extends S.Class<FunctionRequest>("FunctionRequest")({requiredProperties: S.optional(RequiredProperties), scope: S.optional(S.String), implementedBy: S.optional(DataConnector)}) {}
export const FunctionsRequest = S.Record({key: S.String, value: FunctionRequest});
export const PropertyNames = S.Array(S.String);
export class PropertyGroupRequest extends S.Class<PropertyGroupRequest>("PropertyGroupRequest")({groupType: S.optional(S.String), propertyNames: S.optional(PropertyNames)}) {}
export const PropertyGroupsRequest = S.Record({key: S.String, value: PropertyGroupRequest});
export class CompositeComponentTypeRequest extends S.Class<CompositeComponentTypeRequest>("CompositeComponentTypeRequest")({componentTypeId: S.optional(S.String)}) {}
export const CompositeComponentTypesRequest = S.Record({key: S.String, value: CompositeComponentTypeRequest});
export class UpdateComponentTypeRequest extends S.Class<UpdateComponentTypeRequest>("UpdateComponentTypeRequest")({workspaceId: S.String, isSingleton: S.optional(S.Boolean), componentTypeId: S.String, description: S.optional(S.String), propertyDefinitions: S.optional(PropertyDefinitionsRequest), extendsFrom: S.optional(ExtendsFrom), functions: S.optional(FunctionsRequest), propertyGroups: S.optional(PropertyGroupsRequest), componentTypeName: S.optional(S.String), compositeComponentTypes: S.optional(CompositeComponentTypesRequest)}) {}
export class UpdatePricingPlanRequest extends S.Class<UpdatePricingPlanRequest>("UpdatePricingPlanRequest")({pricingMode: S.String, bundleNames: S.optional(PricingBundles)}) {}
export const SceneMetadataMap = S.Record({key: S.String, value: S.String});
export class UpdateSceneRequest extends S.Class<UpdateSceneRequest>("UpdateSceneRequest")({workspaceId: S.String, sceneId: S.String, contentLocation: S.optional(S.String), description: S.optional(S.String), capabilities: S.optional(SceneCapabilities), sceneMetadata: S.optional(SceneMetadataMap)}) {}
export class UpdateWorkspaceRequest extends S.Class<UpdateWorkspaceRequest>("UpdateWorkspaceRequest")({workspaceId: S.String, description: S.optional(S.String), role: S.optional(S.String), s3Location: S.optional(S.String)}) {}
export class InterpolationParameters extends S.Class<InterpolationParameters>("InterpolationParameters")({interpolationType: S.optional(S.String), intervalInSeconds: S.optional(S.Number)}) {}
export const LinkedServices = S.Array(S.String);
export const ListComponentTypesFilter = S.Union(S.String, S.String, S.Boolean);
export const ListComponentTypesFilters = S.Array(ListComponentTypesFilter);
export const ListEntitiesFilter = S.Union(S.String, S.String, S.String);
export const ListEntitiesFilters = S.Array(ListEntitiesFilter);
export const ListMetadataTransferJobsFilter = S.Union(S.String, S.String);
export const ListMetadataTransferJobsFilters = S.Array(ListMetadataTransferJobsFilter);
export const SyncResourceFilter = S.Union(S.String, S.String, S.String, S.String);
export const SyncResourceFilters = S.Array(SyncResourceFilter);
export class ParentEntityUpdateRequest extends S.Class<ParentEntityUpdateRequest>("ParentEntityUpdateRequest")({updateType: S.String, parentEntityId: S.optional(S.String)}) {}
export type DataValueList = DataValue[];
export const DataValueList = S.Array(S.suspend((): S.Schema<DataValue, any> => DataValue)) as any as S.Schema<DataValueList>;
export class CreateSceneRequest extends S.Class<CreateSceneRequest>("CreateSceneRequest")({workspaceId: S.String, sceneId: S.String, contentLocation: S.String, description: S.optional(S.String), capabilities: S.optional(SceneCapabilities), tags: S.optional(TagMap), sceneMetadata: S.optional(SceneMetadataMap)}) {}
export class CreateSyncJobResponse extends S.Class<CreateSyncJobResponse>("CreateSyncJobResponse")({arn: S.String, creationDateTime: S.Date, state: S.String}) {}
export class CreateWorkspaceResponse extends S.Class<CreateWorkspaceResponse>("CreateWorkspaceResponse")({arn: S.String, creationDateTime: S.Date}) {}
export class DeleteComponentTypeResponse extends S.Class<DeleteComponentTypeResponse>("DeleteComponentTypeResponse")({state: S.String}) {}
export class DeleteEntityResponse extends S.Class<DeleteEntityResponse>("DeleteEntityResponse")({state: S.String}) {}
export class DeleteSyncJobResponse extends S.Class<DeleteSyncJobResponse>("DeleteSyncJobResponse")({state: S.String}) {}
export class DeleteWorkspaceResponse extends S.Class<DeleteWorkspaceResponse>("DeleteWorkspaceResponse")({message: S.optional(S.String)}) {}
export class S3SourceConfiguration extends S.Class<S3SourceConfiguration>("S3SourceConfiguration")({location: S.String}) {}
export class FilterByAssetModel extends S.Class<FilterByAssetModel>("FilterByAssetModel")({assetModelId: S.optional(S.String), assetModelExternalId: S.optional(S.String), includeOffspring: S.optional(S.Boolean), includeAssets: S.optional(S.Boolean)}) {}
export class FilterByAsset extends S.Class<FilterByAsset>("FilterByAsset")({assetId: S.optional(S.String), assetExternalId: S.optional(S.String), includeOffspring: S.optional(S.Boolean), includeAssetModel: S.optional(S.Boolean)}) {}
export const IotSiteWiseSourceConfigurationFilter = S.Union(FilterByAssetModel, FilterByAsset);
export const IotSiteWiseSourceConfigurationFilters = S.Array(IotSiteWiseSourceConfigurationFilter);
export class IotSiteWiseSourceConfiguration extends S.Class<IotSiteWiseSourceConfiguration>("IotSiteWiseSourceConfiguration")({filters: S.optional(IotSiteWiseSourceConfigurationFilters)}) {}
export class FilterByComponentType extends S.Class<FilterByComponentType>("FilterByComponentType")({componentTypeId: S.String}) {}
export class FilterByEntity extends S.Class<FilterByEntity>("FilterByEntity")({entityId: S.String}) {}
export const IotTwinMakerSourceConfigurationFilter = S.Union(FilterByComponentType, FilterByEntity);
export const IotTwinMakerSourceConfigurationFilters = S.Array(IotTwinMakerSourceConfigurationFilter);
export class IotTwinMakerSourceConfiguration extends S.Class<IotTwinMakerSourceConfiguration>("IotTwinMakerSourceConfiguration")({workspace: S.String, filters: S.optional(IotTwinMakerSourceConfigurationFilters)}) {}
export class SourceConfiguration extends S.Class<SourceConfiguration>("SourceConfiguration")({type: S.String, s3Configuration: S.optional(S3SourceConfiguration), iotSiteWiseConfiguration: S.optional(IotSiteWiseSourceConfiguration), iotTwinMakerConfiguration: S.optional(IotTwinMakerSourceConfiguration)}) {}
export const SourceConfigurations = S.Array(SourceConfiguration);
export class S3DestinationConfiguration extends S.Class<S3DestinationConfiguration>("S3DestinationConfiguration")({location: S.String}) {}
export class IotTwinMakerDestinationConfiguration extends S.Class<IotTwinMakerDestinationConfiguration>("IotTwinMakerDestinationConfiguration")({workspace: S.String}) {}
export class DestinationConfiguration extends S.Class<DestinationConfiguration>("DestinationConfiguration")({type: S.String, s3Configuration: S.optional(S3DestinationConfiguration), iotTwinMakerConfiguration: S.optional(IotTwinMakerDestinationConfiguration)}) {}
export class ErrorDetails extends S.Class<ErrorDetails>("ErrorDetails")({code: S.optional(S.String), message: S.optional(S.String)}) {}
export class MetadataTransferJobStatus extends S.Class<MetadataTransferJobStatus>("MetadataTransferJobStatus")({state: S.optional(S.String), error: S.optional(ErrorDetails), queuedPosition: S.optional(S.Number)}) {}
export class MetadataTransferJobProgress extends S.Class<MetadataTransferJobProgress>("MetadataTransferJobProgress")({totalCount: S.optional(S.Number), succeededCount: S.optional(S.Number), skippedCount: S.optional(S.Number), failedCount: S.optional(S.Number)}) {}
export class GetMetadataTransferJobResponse extends S.Class<GetMetadataTransferJobResponse>("GetMetadataTransferJobResponse")({metadataTransferJobId: S.String, arn: S.String, description: S.optional(S.String), sources: SourceConfigurations, destination: DestinationConfiguration, metadataTransferJobRole: S.String, reportUrl: S.optional(S.String), creationDateTime: S.Date, updateDateTime: S.Date, status: MetadataTransferJobStatus, progress: S.optional(MetadataTransferJobProgress)}) {}
export class GetWorkspaceResponse extends S.Class<GetWorkspaceResponse>("GetWorkspaceResponse")({workspaceId: S.String, arn: S.String, description: S.optional(S.String), linkedServices: S.optional(LinkedServices), s3Location: S.optional(S.String), role: S.optional(S.String), creationDateTime: S.Date, updateDateTime: S.Date}) {}
export class ListComponentTypesRequest extends S.Class<ListComponentTypesRequest>("ListComponentTypesRequest")({workspaceId: S.String, filters: S.optional(ListComponentTypesFilters), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListEntitiesRequest extends S.Class<ListEntitiesRequest>("ListEntitiesRequest")({workspaceId: S.String, filters: S.optional(ListEntitiesFilters), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListMetadataTransferJobsRequest extends S.Class<ListMetadataTransferJobsRequest>("ListMetadataTransferJobsRequest")({sourceType: S.String, destinationType: S.String, filters: S.optional(ListMetadataTransferJobsFilters), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListSyncResourcesRequest extends S.Class<ListSyncResourcesRequest>("ListSyncResourcesRequest")({workspaceId: S.String, syncSource: S.String, filters: S.optional(SyncResourceFilters), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap), nextToken: S.optional(S.String)}) {}
export class UpdateComponentTypeResponse extends S.Class<UpdateComponentTypeResponse>("UpdateComponentTypeResponse")({workspaceId: S.String, arn: S.String, componentTypeId: S.String, state: S.String}) {}
export class BundleInformation extends S.Class<BundleInformation>("BundleInformation")({bundleNames: PricingBundles, pricingTier: S.optional(S.String)}) {}
export class PricingPlan extends S.Class<PricingPlan>("PricingPlan")({billableEntityCount: S.optional(S.Number), bundleInformation: S.optional(BundleInformation), effectiveDateTime: S.Date, pricingMode: S.String, updateDateTime: S.Date, updateReason: S.String}) {}
export class UpdatePricingPlanResponse extends S.Class<UpdatePricingPlanResponse>("UpdatePricingPlanResponse")({currentPricingPlan: PricingPlan, pendingPricingPlan: S.optional(PricingPlan)}) {}
export class UpdateSceneResponse extends S.Class<UpdateSceneResponse>("UpdateSceneResponse")({updateDateTime: S.Date}) {}
export class UpdateWorkspaceResponse extends S.Class<UpdateWorkspaceResponse>("UpdateWorkspaceResponse")({updateDateTime: S.Date}) {}
export class PropertyValue extends S.Class<PropertyValue>("PropertyValue")({timestamp: S.optional(S.Date), value: DataValue, time: S.optional(S.String)}) {}
export const PropertyValues = S.Array(PropertyValue);
export class PropertyRequest extends S.Class<PropertyRequest>("PropertyRequest")({definition: S.optional(PropertyDefinitionRequest), value: S.optional(DataValue), updateType: S.optional(S.String)}) {}
export const PropertyRequests = S.Record({key: S.String, value: PropertyRequest});
export class ComponentPropertyGroupRequest extends S.Class<ComponentPropertyGroupRequest>("ComponentPropertyGroupRequest")({groupType: S.optional(S.String), propertyNames: S.optional(PropertyNames), updateType: S.optional(S.String)}) {}
export const ComponentPropertyGroupRequests = S.Record({key: S.String, value: ComponentPropertyGroupRequest});
export class CompositeComponentRequest extends S.Class<CompositeComponentRequest>("CompositeComponentRequest")({description: S.optional(S.String), properties: S.optional(PropertyRequests), propertyGroups: S.optional(ComponentPropertyGroupRequests)}) {}
export const RowData = S.Array(S.Any);
export class OrderBy extends S.Class<OrderBy>("OrderBy")({order: S.optional(S.String), propertyName: S.String}) {}
export const OrderByList = S.Array(OrderBy);
export class ComponentUpdateRequest extends S.Class<ComponentUpdateRequest>("ComponentUpdateRequest")({updateType: S.optional(S.String), description: S.optional(S.String), componentTypeId: S.optional(S.String), propertyUpdates: S.optional(PropertyRequests), propertyGroupUpdates: S.optional(ComponentPropertyGroupRequests)}) {}
export class CompositeComponentUpdateRequest extends S.Class<CompositeComponentUpdateRequest>("CompositeComponentUpdateRequest")({updateType: S.optional(S.String), description: S.optional(S.String), propertyUpdates: S.optional(PropertyRequests), propertyGroupUpdates: S.optional(ComponentPropertyGroupRequests)}) {}
export const CompositeComponentsMapRequest = S.Record({key: S.String, value: CompositeComponentRequest});
export class ColumnDescription extends S.Class<ColumnDescription>("ColumnDescription")({name: S.optional(S.String), type: S.optional(S.String)}) {}
export const ColumnDescriptions = S.Array(ColumnDescription);
export class Row extends S.Class<Row>("Row")({rowData: S.optional(RowData)}) {}
export const Rows = S.Array(Row);
export class Status extends S.Class<Status>("Status")({state: S.optional(S.String), error: S.optional(ErrorDetails)}) {}
export class PropertyFilter extends S.Class<PropertyFilter>("PropertyFilter")({propertyName: S.optional(S.String), operator: S.optional(S.String), value: S.optional(DataValue)}) {}
export const PropertyFilters = S.Array(PropertyFilter);
export class TabularConditions extends S.Class<TabularConditions>("TabularConditions")({orderBy: S.optional(OrderByList), propertyFilters: S.optional(PropertyFilters)}) {}
export const GeneratedSceneMetadataMap = S.Record({key: S.String, value: S.String});
export class SceneError extends S.Class<SceneError>("SceneError")({code: S.optional(S.String), message: S.optional(S.String)}) {}
export class SyncJobStatus extends S.Class<SyncJobStatus>("SyncJobStatus")({state: S.optional(S.String), error: S.optional(ErrorDetails)}) {}
export class PropertyDefinitionResponse extends S.Class<PropertyDefinitionResponse>("PropertyDefinitionResponse")({dataType: DataType, isTimeSeries: S.Boolean, isRequiredInEntity: S.Boolean, isExternalId: S.Boolean, isStoredExternally: S.Boolean, isImported: S.Boolean, isFinal: S.Boolean, isInherited: S.Boolean, defaultValue: S.optional(DataValue), configuration: S.optional(Configuration), displayName: S.optional(S.String)}) {}
export class PropertySummary extends S.Class<PropertySummary>("PropertySummary")({definition: S.optional(PropertyDefinitionResponse), propertyName: S.String, value: S.optional(DataValue), areAllPropertyValuesReturned: S.optional(S.Boolean)}) {}
export const PropertySummaries = S.Array(PropertySummary);
export class SceneSummary extends S.Class<SceneSummary>("SceneSummary")({sceneId: S.String, contentLocation: S.String, arn: S.String, creationDateTime: S.Date, updateDateTime: S.Date, description: S.optional(S.String)}) {}
export const SceneSummaries = S.Array(SceneSummary);
export class SyncJobSummary extends S.Class<SyncJobSummary>("SyncJobSummary")({arn: S.optional(S.String), workspaceId: S.optional(S.String), syncSource: S.optional(S.String), status: S.optional(SyncJobStatus), creationDateTime: S.optional(S.Date), updateDateTime: S.optional(S.Date)}) {}
export const SyncJobSummaries = S.Array(SyncJobSummary);
export class WorkspaceSummary extends S.Class<WorkspaceSummary>("WorkspaceSummary")({workspaceId: S.String, arn: S.String, description: S.optional(S.String), linkedServices: S.optional(LinkedServices), creationDateTime: S.Date, updateDateTime: S.Date}) {}
export const WorkspaceSummaries = S.Array(WorkspaceSummary);
export const ComponentUpdatesMapRequest = S.Record({key: S.String, value: ComponentUpdateRequest});
export const CompositeComponentUpdatesMapRequest = S.Record({key: S.String, value: CompositeComponentUpdateRequest});
export const ExternalIdProperty = S.Record({key: S.String, value: S.String});
export type DataValueMap = { [key: string]: DataValue };
export const DataValueMap = S.Record({key: S.String, value: S.suspend((): S.Schema<DataValue, any> => DataValue)}) as any as S.Schema<DataValueMap>;
export class CreateSceneResponse extends S.Class<CreateSceneResponse>("CreateSceneResponse")({arn: S.String, creationDateTime: S.Date}) {}
export class ExecuteQueryResponse extends S.Class<ExecuteQueryResponse>("ExecuteQueryResponse")({columnDescriptions: S.optional(ColumnDescriptions), rows: S.optional(Rows), nextToken: S.optional(S.String)}) {}
export class GetPricingPlanResponse extends S.Class<GetPricingPlanResponse>("GetPricingPlanResponse")({currentPricingPlan: PricingPlan, pendingPricingPlan: S.optional(PricingPlan)}) {}
export class GetPropertyValueRequest extends S.Class<GetPropertyValueRequest>("GetPropertyValueRequest")({componentName: S.optional(S.String), componentPath: S.optional(S.String), componentTypeId: S.optional(S.String), entityId: S.optional(S.String), selectedProperties: SelectedPropertyList, workspaceId: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String), propertyGroupName: S.optional(S.String), tabularConditions: S.optional(TabularConditions)}) {}
export class GetSceneResponse extends S.Class<GetSceneResponse>("GetSceneResponse")({workspaceId: S.String, sceneId: S.String, contentLocation: S.String, arn: S.String, creationDateTime: S.Date, updateDateTime: S.Date, description: S.optional(S.String), capabilities: S.optional(SceneCapabilities), sceneMetadata: S.optional(SceneMetadataMap), generatedSceneMetadata: S.optional(GeneratedSceneMetadataMap), error: S.optional(SceneError)}) {}
export class GetSyncJobResponse extends S.Class<GetSyncJobResponse>("GetSyncJobResponse")({arn: S.String, workspaceId: S.String, syncSource: S.String, syncRole: S.String, status: SyncJobStatus, creationDateTime: S.Date, updateDateTime: S.Date}) {}
export class ListPropertiesResponse extends S.Class<ListPropertiesResponse>("ListPropertiesResponse")({propertySummaries: PropertySummaries, nextToken: S.optional(S.String)}) {}
export class ListScenesResponse extends S.Class<ListScenesResponse>("ListScenesResponse")({sceneSummaries: S.optional(SceneSummaries), nextToken: S.optional(S.String)}) {}
export class ListSyncJobsResponse extends S.Class<ListSyncJobsResponse>("ListSyncJobsResponse")({syncJobSummaries: S.optional(SyncJobSummaries), nextToken: S.optional(S.String)}) {}
export class ListWorkspacesResponse extends S.Class<ListWorkspacesResponse>("ListWorkspacesResponse")({workspaceSummaries: S.optional(WorkspaceSummaries), nextToken: S.optional(S.String)}) {}
export class UpdateEntityRequest extends S.Class<UpdateEntityRequest>("UpdateEntityRequest")({workspaceId: S.String, entityId: S.String, entityName: S.optional(S.String), description: S.optional(S.String), componentUpdates: S.optional(ComponentUpdatesMapRequest), compositeComponentUpdates: S.optional(CompositeComponentUpdatesMapRequest), parentEntityUpdate: S.optional(ParentEntityUpdateRequest)}) {}
export class EntityPropertyReference extends S.Class<EntityPropertyReference>("EntityPropertyReference")({componentName: S.optional(S.String), componentPath: S.optional(S.String), externalIdProperty: S.optional(ExternalIdProperty), entityId: S.optional(S.String), propertyName: S.String}) {}
export class FunctionResponse extends S.Class<FunctionResponse>("FunctionResponse")({requiredProperties: S.optional(RequiredProperties), scope: S.optional(S.String), implementedBy: S.optional(DataConnector), isInherited: S.optional(S.Boolean)}) {}
export class PropertyGroupResponse extends S.Class<PropertyGroupResponse>("PropertyGroupResponse")({groupType: S.String, propertyNames: PropertyNames, isInherited: S.Boolean}) {}
export class CompositeComponentTypeResponse extends S.Class<CompositeComponentTypeResponse>("CompositeComponentTypeResponse")({componentTypeId: S.optional(S.String), isInherited: S.optional(S.Boolean)}) {}
export class PropertyValueEntry extends S.Class<PropertyValueEntry>("PropertyValueEntry")({entityPropertyReference: EntityPropertyReference, propertyValues: S.optional(PropertyValues)}) {}
export const Entries = S.Array(PropertyValueEntry);
export const PropertyDefinitionsResponse = S.Record({key: S.String, value: PropertyDefinitionResponse});
export const FunctionsResponse = S.Record({key: S.String, value: FunctionResponse});
export const PropertyGroupsResponse = S.Record({key: S.String, value: PropertyGroupResponse});
export const CompositeComponentTypesResponse = S.Record({key: S.String, value: CompositeComponentTypeResponse});
export class ComponentTypeSummary extends S.Class<ComponentTypeSummary>("ComponentTypeSummary")({arn: S.String, componentTypeId: S.String, creationDateTime: S.Date, updateDateTime: S.Date, description: S.optional(S.String), status: S.optional(Status), componentTypeName: S.optional(S.String)}) {}
export const ComponentTypeSummaries = S.Array(ComponentTypeSummary);
export class EntitySummary extends S.Class<EntitySummary>("EntitySummary")({entityId: S.String, entityName: S.String, arn: S.String, parentEntityId: S.optional(S.String), status: Status, description: S.optional(S.String), hasChildEntities: S.optional(S.Boolean), creationDateTime: S.Date, updateDateTime: S.Date}) {}
export const EntitySummaries = S.Array(EntitySummary);
export class MetadataTransferJobSummary extends S.Class<MetadataTransferJobSummary>("MetadataTransferJobSummary")({metadataTransferJobId: S.String, arn: S.String, creationDateTime: S.Date, updateDateTime: S.Date, status: MetadataTransferJobStatus, progress: S.optional(MetadataTransferJobProgress)}) {}
export const MetadataTransferJobSummaries = S.Array(MetadataTransferJobSummary);
export class ComponentPropertyGroupResponse extends S.Class<ComponentPropertyGroupResponse>("ComponentPropertyGroupResponse")({groupType: S.String, propertyNames: PropertyNames, isInherited: S.Boolean}) {}
export const ComponentPropertyGroupResponses = S.Record({key: S.String, value: ComponentPropertyGroupResponse});
export class ComponentSummary extends S.Class<ComponentSummary>("ComponentSummary")({componentName: S.String, componentTypeId: S.String, definedIn: S.optional(S.String), description: S.optional(S.String), propertyGroups: S.optional(ComponentPropertyGroupResponses), status: Status, syncSource: S.optional(S.String), componentPath: S.optional(S.String)}) {}
export const CompositeComponentResponse = S.Record({key: S.String, value: ComponentSummary});
export class BatchPutPropertyValuesRequest extends S.Class<BatchPutPropertyValuesRequest>("BatchPutPropertyValuesRequest")({workspaceId: S.String, entries: Entries}) {}
export class CancelMetadataTransferJobResponse extends S.Class<CancelMetadataTransferJobResponse>("CancelMetadataTransferJobResponse")({metadataTransferJobId: S.String, arn: S.String, updateDateTime: S.Date, status: MetadataTransferJobStatus, progress: S.optional(MetadataTransferJobProgress)}) {}
export class GetComponentTypeResponse extends S.Class<GetComponentTypeResponse>("GetComponentTypeResponse")({workspaceId: S.String, isSingleton: S.optional(S.Boolean), componentTypeId: S.String, description: S.optional(S.String), propertyDefinitions: S.optional(PropertyDefinitionsResponse), extendsFrom: S.optional(ExtendsFrom), functions: S.optional(FunctionsResponse), creationDateTime: S.Date, updateDateTime: S.Date, arn: S.String, isAbstract: S.optional(S.Boolean), isSchemaInitialized: S.optional(S.Boolean), status: S.optional(Status), propertyGroups: S.optional(PropertyGroupsResponse), syncSource: S.optional(S.String), componentTypeName: S.optional(S.String), compositeComponentTypes: S.optional(CompositeComponentTypesResponse)}) {}
export class GetPropertyValueHistoryRequest extends S.Class<GetPropertyValueHistoryRequest>("GetPropertyValueHistoryRequest")({workspaceId: S.String, entityId: S.optional(S.String), componentName: S.optional(S.String), componentPath: S.optional(S.String), componentTypeId: S.optional(S.String), selectedProperties: SelectedPropertyList, propertyFilters: S.optional(PropertyFilters), startDateTime: S.optional(S.Date), endDateTime: S.optional(S.Date), interpolation: S.optional(InterpolationParameters), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), orderByTime: S.optional(S.String), startTime: S.optional(S.String), endTime: S.optional(S.String)}) {}
export class ListComponentTypesResponse extends S.Class<ListComponentTypesResponse>("ListComponentTypesResponse")({workspaceId: S.String, componentTypeSummaries: ComponentTypeSummaries, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListEntitiesResponse extends S.Class<ListEntitiesResponse>("ListEntitiesResponse")({entitySummaries: S.optional(EntitySummaries), nextToken: S.optional(S.String)}) {}
export class ListMetadataTransferJobsResponse extends S.Class<ListMetadataTransferJobsResponse>("ListMetadataTransferJobsResponse")({metadataTransferJobSummaries: MetadataTransferJobSummaries, nextToken: S.optional(S.String)}) {}
export class UpdateEntityResponse extends S.Class<UpdateEntityResponse>("UpdateEntityResponse")({updateDateTime: S.Date, state: S.String}) {}
export class ComponentRequest extends S.Class<ComponentRequest>("ComponentRequest")({description: S.optional(S.String), componentTypeId: S.optional(S.String), properties: S.optional(PropertyRequests), propertyGroups: S.optional(ComponentPropertyGroupRequests)}) {}
export class SyncResourceStatus extends S.Class<SyncResourceStatus>("SyncResourceStatus")({state: S.optional(S.String), error: S.optional(ErrorDetails)}) {}
export class PropertyResponse extends S.Class<PropertyResponse>("PropertyResponse")({definition: S.optional(PropertyDefinitionResponse), value: S.optional(DataValue), areAllPropertyValuesReturned: S.optional(S.Boolean)}) {}
export const ComponentsMapRequest = S.Record({key: S.String, value: ComponentRequest});
export const PropertyTableValue = S.Record({key: S.String, value: S.suspend((): S.Schema<DataValue, any> => DataValue)});
export const TabularPropertyValue = S.Array(PropertyTableValue);
export const TabularPropertyValues = S.Array(TabularPropertyValue);
export const ComponentSummaries = S.Array(ComponentSummary);
export class SyncResourceSummary extends S.Class<SyncResourceSummary>("SyncResourceSummary")({resourceType: S.optional(S.String), externalId: S.optional(S.String), resourceId: S.optional(S.String), status: S.optional(SyncResourceStatus), updateDateTime: S.optional(S.Date)}) {}
export const SyncResourceSummaries = S.Array(SyncResourceSummary);
export const PropertyResponses = S.Record({key: S.String, value: PropertyResponse});
export class CreateComponentTypeRequest extends S.Class<CreateComponentTypeRequest>("CreateComponentTypeRequest")({workspaceId: S.String, isSingleton: S.optional(S.Boolean), componentTypeId: S.String, description: S.optional(S.String), propertyDefinitions: S.optional(PropertyDefinitionsRequest), extendsFrom: S.optional(ExtendsFrom), functions: S.optional(FunctionsRequest), tags: S.optional(TagMap), propertyGroups: S.optional(PropertyGroupsRequest), componentTypeName: S.optional(S.String), compositeComponentTypes: S.optional(CompositeComponentTypesRequest)}) {}
export class CreateEntityRequest extends S.Class<CreateEntityRequest>("CreateEntityRequest")({workspaceId: S.String, entityId: S.optional(S.String), entityName: S.String, description: S.optional(S.String), components: S.optional(ComponentsMapRequest), compositeComponents: S.optional(CompositeComponentsMapRequest), parentEntityId: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class CreateMetadataTransferJobRequest extends S.Class<CreateMetadataTransferJobRequest>("CreateMetadataTransferJobRequest")({metadataTransferJobId: S.optional(S.String), description: S.optional(S.String), sources: SourceConfigurations, destination: DestinationConfiguration}) {}
export class ListComponentsResponse extends S.Class<ListComponentsResponse>("ListComponentsResponse")({componentSummaries: ComponentSummaries, nextToken: S.optional(S.String)}) {}
export class ListSyncResourcesResponse extends S.Class<ListSyncResourcesResponse>("ListSyncResourcesResponse")({syncResources: S.optional(SyncResourceSummaries), nextToken: S.optional(S.String)}) {}
export class ComponentResponse extends S.Class<ComponentResponse>("ComponentResponse")({componentName: S.optional(S.String), description: S.optional(S.String), componentTypeId: S.optional(S.String), status: S.optional(Status), definedIn: S.optional(S.String), properties: S.optional(PropertyResponses), propertyGroups: S.optional(ComponentPropertyGroupResponses), syncSource: S.optional(S.String), areAllPropertiesReturned: S.optional(S.Boolean), compositeComponents: S.optional(CompositeComponentResponse), areAllCompositeComponentsReturned: S.optional(S.Boolean)}) {}
export class PropertyLatestValue extends S.Class<PropertyLatestValue>("PropertyLatestValue")({propertyReference: EntityPropertyReference, propertyValue: S.optional(DataValue)}) {}
export const Values = S.Array(PropertyValue);
export const ComponentsMap = S.Record({key: S.String, value: ComponentResponse});
export const PropertyLatestValueMap = S.Record({key: S.String, value: PropertyLatestValue});
export class PropertyValueHistory extends S.Class<PropertyValueHistory>("PropertyValueHistory")({entityPropertyReference: EntityPropertyReference, values: S.optional(Values)}) {}
export const PropertyValueList = S.Array(PropertyValueHistory);
export class CreateComponentTypeResponse extends S.Class<CreateComponentTypeResponse>("CreateComponentTypeResponse")({arn: S.String, creationDateTime: S.Date, state: S.String}) {}
export class CreateEntityResponse extends S.Class<CreateEntityResponse>("CreateEntityResponse")({entityId: S.String, arn: S.String, creationDateTime: S.Date, state: S.String}) {}
export class CreateMetadataTransferJobResponse extends S.Class<CreateMetadataTransferJobResponse>("CreateMetadataTransferJobResponse")({metadataTransferJobId: S.String, arn: S.String, creationDateTime: S.Date, status: MetadataTransferJobStatus}) {}
export class GetEntityResponse extends S.Class<GetEntityResponse>("GetEntityResponse")({entityId: S.String, entityName: S.String, arn: S.String, status: Status, workspaceId: S.String, description: S.optional(S.String), components: S.optional(ComponentsMap), parentEntityId: S.String, hasChildEntities: S.Boolean, creationDateTime: S.Date, updateDateTime: S.Date, syncSource: S.optional(S.String), areAllComponentsReturned: S.optional(S.Boolean)}) {}
export class GetPropertyValueResponse extends S.Class<GetPropertyValueResponse>("GetPropertyValueResponse")({propertyValues: S.optional(PropertyLatestValueMap), nextToken: S.optional(S.String), tabularPropertyValues: S.optional(TabularPropertyValues)}) {}
export class GetPropertyValueHistoryResponse extends S.Class<GetPropertyValueHistoryResponse>("GetPropertyValueHistoryResponse")({propertyValues: PropertyValueList, nextToken: S.optional(S.String)}) {}
export class BatchPutPropertyError extends S.Class<BatchPutPropertyError>("BatchPutPropertyError")({errorCode: S.String, errorMessage: S.String, entry: PropertyValueEntry}) {}
export const Errors = S.Array(BatchPutPropertyError);
export class BatchPutPropertyErrorEntry extends S.Class<BatchPutPropertyErrorEntry>("BatchPutPropertyErrorEntry")({errors: Errors}) {}
export const ErrorEntries = S.Array(BatchPutPropertyErrorEntry);
export class BatchPutPropertyValuesResponse extends S.Class<BatchPutPropertyValuesResponse>("BatchPutPropertyValuesResponse")({errorEntries: ErrorEntries}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {message: S.optional(S.String)}) {};
export class QueryTimeoutException extends S.TaggedError<QueryTimeoutException>()("QueryTimeoutException", {message: S.optional(S.String)}) {};
export class ConnectorFailureException extends S.TaggedError<ConnectorFailureException>()("ConnectorFailureException", {}) {};
export class ConnectorTimeoutException extends S.TaggedError<ConnectorTimeoutException>()("ConnectorTimeoutException", {}) {};

//# Operations
/**
 * Removes tags from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/tags", method: "DELETE", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete the SyncJob.
 */export const deleteSyncJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/sync-jobs/{syncSource}", method: "DELETE", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.DeleteSyncJob" }, DeleteSyncJobRequest, DeleteSyncJobResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a workspace.
 */export const deleteWorkspace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}", method: "DELETE", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.DeleteWorkspace" }, DeleteWorkspaceRequest, DeleteWorkspaceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a nmetadata transfer job.
 */export const getMetadataTransferJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/metadata-transfer-jobs/{metadataTransferJobId}", method: "GET", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.GetMetadataTransferJob" }, GetMetadataTransferJobRequest, GetMetadataTransferJobResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a workspace.
 */export const getWorkspace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}", method: "GET", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.GetWorkspace" }, GetWorkspaceRequest, GetWorkspaceResponse, [InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all tags associated with a resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/tags-list", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates information in a component type.
 */export const updateComponentType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/component-types/{componentTypeId}", method: "PUT", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.UpdateComponentType" }, UpdateComponentTypeRequest, UpdateComponentTypeResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the pricing plan.
 */export const updatePricingPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/pricingplan", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.UpdatePricingPlan" }, UpdatePricingPlanRequest, UpdatePricingPlanResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a scene.
 */export const updateScene = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/scenes/{sceneId}", method: "PUT", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.UpdateScene" }, UpdateSceneRequest, UpdateSceneResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a workspace.
 */export const updateWorkspace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}", method: "PUT", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.UpdateWorkspace" }, UpdateWorkspaceRequest, UpdateWorkspaceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a scene.
 */export const createScene = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/scenes", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.CreateScene" }, CreateSceneRequest, CreateSceneResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This action creates a SyncJob.
 */export const createSyncJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/sync-jobs/{syncSource}", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.CreateSyncJob" }, CreateSyncJobRequest, CreateSyncJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a workplace.
 */export const createWorkspace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.CreateWorkspace" }, CreateWorkspaceRequest, CreateWorkspaceResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a component type.
 */export const deleteComponentType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/component-types/{componentTypeId}", method: "DELETE", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.DeleteComponentType" }, DeleteComponentTypeRequest, DeleteComponentTypeResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an entity.
 */export const deleteEntity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/entities/{entityId}", method: "DELETE", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.DeleteEntity" }, DeleteEntityRequest, DeleteEntityResponse, [InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a scene.
 */export const deleteScene = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/scenes/{sceneId}", method: "DELETE", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.DeleteScene" }, DeleteSceneRequest, DeleteSceneResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the pricing plan.
 */export const getPricingPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/pricingplan", method: "GET", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.GetPricingPlan" }, GetPricingPlanRequest, GetPricingPlanResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a scene.
 */export const getScene = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/scenes/{sceneId}", method: "GET", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.GetScene" }, GetSceneRequest, GetSceneResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the SyncJob.
 */export const getSyncJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/sync-jobs/{syncSource}", method: "GET", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.GetSyncJob" }, GetSyncJobRequest, GetSyncJobResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This API lists the properties of a component.
 */export const listProperties = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/properties-list", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.ListProperties" }, ListPropertiesRequest, ListPropertiesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all scenes in a workspace.
 */export const listScenes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/scenes-list", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.ListScenes" }, ListScenesRequest, ListScenesResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all SyncJobs.
 */export const listSyncJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/sync-jobs-list", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.ListSyncJobs" }, ListSyncJobsRequest, ListSyncJobsResponse, [AccessDeniedException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about workspaces in the current account.
 */export const listWorkspaces = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces-list", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.ListWorkspaces" }, ListWorkspacesRequest, ListWorkspacesResponse, [InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds tags to a resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/tags", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, ResourceNotFoundException, TooManyTagsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels the metadata transfer job.
 */export const cancelMetadataTransferJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/metadata-transfer-jobs/{metadataTransferJobId}/cancel", method: "PUT", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.CancelMetadataTransferJob" }, CancelMetadataTransferJobRequest, CancelMetadataTransferJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Run queries to access information from your knowledge graph of entities within
 * individual workspaces.
 * 
 * 
 * 
 * 
 * The ExecuteQuery action only works with Amazon Web Services Java SDK2.
 * ExecuteQuery will not work with any Amazon Web Services Java SDK version < 2.x.
 */export const executeQuery = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/queries/execution", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.ExecuteQuery" }, ExecuteQueryRequest, ExecuteQueryResponse, [AccessDeniedException, InternalServerException, QueryTimeoutException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a component type.
 */export const getComponentType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/component-types/{componentTypeId}", method: "GET", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.GetComponentType" }, GetComponentTypeRequest, GetComponentTypeResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all component types in a workspace.
 */export const listComponentTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/component-types-list", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.ListComponentTypes" }, ListComponentTypesRequest, ListComponentTypesResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all entities in a workspace.
 */export const listEntities = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/entities-list", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.ListEntities" }, ListEntitiesRequest, ListEntitiesResponse, [InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the metadata transfer jobs.
 */export const listMetadataTransferJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/metadata-transfer-jobs-list", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.ListMetadataTransferJobs" }, ListMetadataTransferJobsRequest, ListMetadataTransferJobsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an entity.
 */export const updateEntity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/entities/{entityId}", method: "PUT", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.UpdateEntity" }, UpdateEntityRequest, UpdateEntityResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This API lists the components of an entity.
 */export const listComponents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/entities/{entityId}/components-list", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.ListComponents" }, ListComponentsRequest, ListComponentsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the sync resources.
 */export const listSyncResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/sync-jobs/{syncSource}/resources-list", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.ListSyncResources" }, ListSyncResourcesRequest, ListSyncResourcesResponse, [AccessDeniedException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a component type.
 */export const createComponentType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/component-types/{componentTypeId}", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.CreateComponentType" }, CreateComponentTypeRequest, CreateComponentTypeResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an entity.
 */export const createEntity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/entities", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.CreateEntity" }, CreateEntityRequest, CreateEntityResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new metadata transfer job.
 */export const createMetadataTransferJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/metadata-transfer-jobs", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.CreateMetadataTransferJob" }, CreateMetadataTransferJobRequest, CreateMetadataTransferJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an entity.
 */export const getEntity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/entities/{entityId}", method: "GET", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.GetEntity" }, GetEntityRequest, GetEntityResponse, [InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets values for multiple time series properties.
 */export const batchPutPropertyValues = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/entity-properties", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.BatchPutPropertyValues" }, BatchPutPropertyValuesRequest, BatchPutPropertyValuesResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the property values for a component, component type, entity, or workspace.
 * 
 * 
 * You must specify a value for either `componentName`,
 * `componentTypeId`, `entityId`, or `workspaceId`.
 */export const getPropertyValue = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/entity-properties/value", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.GetPropertyValue" }, GetPropertyValueRequest, GetPropertyValueResponse, [AccessDeniedException, ConnectorFailureException, ConnectorTimeoutException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the history of a time series property value for a component,
 * component type, entity, or workspace.
 * 
 * 
 * You must specify a value for `workspaceId`. For entity-specific queries,
 * specify values for `componentName` and `entityId`. For cross-entity
 * quries, specify a value for `componentTypeId`.
 */export const getPropertyValueHistory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-29", uri: "/workspaces/{workspaceId}/entity-properties/history", sdkId: "IoTTwinMaker", sigV4ServiceName: "iottwinmaker", name: "AWSIoTTwinMaker.GetPropertyValueHistory" }, GetPropertyValueHistoryRequest, GetPropertyValueHistoryResponse, [AccessDeniedException, ConnectorFailureException, ConnectorTimeoutException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

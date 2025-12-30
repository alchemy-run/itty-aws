import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DescribeLoggingOptionsRequest extends S.Class<DescribeLoggingOptionsRequest>("DescribeLoggingOptionsRequest")({}) {}
export const MessagePayloads = S.Array(H.StreamBody());
export const TagKeyList = S.Array(S.String);
export class CancelPipelineReprocessingRequest extends S.Class<CancelPipelineReprocessingRequest>("CancelPipelineReprocessingRequest")({pipelineName: S.String, reprocessingId: S.String}) {}
export class CancelPipelineReprocessingResponse extends S.Class<CancelPipelineReprocessingResponse>("CancelPipelineReprocessingResponse")({}) {}
export class CreateDatasetContentRequest extends S.Class<CreateDatasetContentRequest>("CreateDatasetContentRequest")({datasetName: S.String, versionId: S.optional(S.String)}) {}
export class DeleteChannelRequest extends S.Class<DeleteChannelRequest>("DeleteChannelRequest")({channelName: S.String}) {}
export class DeleteDatasetRequest extends S.Class<DeleteDatasetRequest>("DeleteDatasetRequest")({datasetName: S.String}) {}
export class DeleteDatasetContentRequest extends S.Class<DeleteDatasetContentRequest>("DeleteDatasetContentRequest")({datasetName: S.String, versionId: S.optional(S.String)}) {}
export class DeleteDatastoreRequest extends S.Class<DeleteDatastoreRequest>("DeleteDatastoreRequest")({datastoreName: S.String}) {}
export class DeletePipelineRequest extends S.Class<DeletePipelineRequest>("DeletePipelineRequest")({pipelineName: S.String}) {}
export class DescribeChannelRequest extends S.Class<DescribeChannelRequest>("DescribeChannelRequest")({channelName: S.String, includeStatistics: S.optional(S.Boolean)}) {}
export class DescribeDatasetRequest extends S.Class<DescribeDatasetRequest>("DescribeDatasetRequest")({datasetName: S.String}) {}
export class DescribeDatastoreRequest extends S.Class<DescribeDatastoreRequest>("DescribeDatastoreRequest")({datastoreName: S.String, includeStatistics: S.optional(S.Boolean)}) {}
export class DescribePipelineRequest extends S.Class<DescribePipelineRequest>("DescribePipelineRequest")({pipelineName: S.String}) {}
export class GetDatasetContentRequest extends S.Class<GetDatasetContentRequest>("GetDatasetContentRequest")({datasetName: S.String, versionId: S.optional(S.String)}) {}
export class ListChannelsRequest extends S.Class<ListChannelsRequest>("ListChannelsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListDatasetContentsRequest extends S.Class<ListDatasetContentsRequest>("ListDatasetContentsRequest")({datasetName: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), scheduledOnOrAfter: S.optional(S.Date), scheduledBefore: S.optional(S.Date)}) {}
export class ListDatasetsRequest extends S.Class<ListDatasetsRequest>("ListDatasetsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListDatastoresRequest extends S.Class<ListDatastoresRequest>("ListDatastoresRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListPipelinesRequest extends S.Class<ListPipelinesRequest>("ListPipelinesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class LoggingOptions extends S.Class<LoggingOptions>("LoggingOptions")({roleArn: S.String, level: S.String, enabled: S.Boolean}) {}
export class PutLoggingOptionsRequest extends S.Class<PutLoggingOptionsRequest>("PutLoggingOptionsRequest")({loggingOptions: LoggingOptions}) {}
export class ChannelActivity extends S.Class<ChannelActivity>("ChannelActivity")({name: S.String, channelName: S.String, next: S.optional(S.String)}) {}
export class LambdaActivity extends S.Class<LambdaActivity>("LambdaActivity")({name: S.String, lambdaName: S.String, batchSize: S.Number, next: S.optional(S.String)}) {}
export class DatastoreActivity extends S.Class<DatastoreActivity>("DatastoreActivity")({name: S.String, datastoreName: S.String}) {}
export const AttributeNameMapping = S.Record({key: S.String, value: S.String});
export class AddAttributesActivity extends S.Class<AddAttributesActivity>("AddAttributesActivity")({name: S.String, attributes: AttributeNameMapping, next: S.optional(S.String)}) {}
export const AttributeNames = S.Array(S.String);
export class RemoveAttributesActivity extends S.Class<RemoveAttributesActivity>("RemoveAttributesActivity")({name: S.String, attributes: AttributeNames, next: S.optional(S.String)}) {}
export class SelectAttributesActivity extends S.Class<SelectAttributesActivity>("SelectAttributesActivity")({name: S.String, attributes: AttributeNames, next: S.optional(S.String)}) {}
export class FilterActivity extends S.Class<FilterActivity>("FilterActivity")({name: S.String, filter: S.String, next: S.optional(S.String)}) {}
export class MathActivity extends S.Class<MathActivity>("MathActivity")({name: S.String, attribute: S.String, math: S.String, next: S.optional(S.String)}) {}
export class DeviceRegistryEnrichActivity extends S.Class<DeviceRegistryEnrichActivity>("DeviceRegistryEnrichActivity")({name: S.String, attribute: S.String, thingName: S.String, roleArn: S.String, next: S.optional(S.String)}) {}
export class DeviceShadowEnrichActivity extends S.Class<DeviceShadowEnrichActivity>("DeviceShadowEnrichActivity")({name: S.String, attribute: S.String, thingName: S.String, roleArn: S.String, next: S.optional(S.String)}) {}
export class PipelineActivity extends S.Class<PipelineActivity>("PipelineActivity")({channel: S.optional(ChannelActivity), lambda: S.optional(LambdaActivity), datastore: S.optional(DatastoreActivity), addAttributes: S.optional(AddAttributesActivity), removeAttributes: S.optional(RemoveAttributesActivity), selectAttributes: S.optional(SelectAttributesActivity), filter: S.optional(FilterActivity), math: S.optional(MathActivity), deviceRegistryEnrich: S.optional(DeviceRegistryEnrichActivity), deviceShadowEnrich: S.optional(DeviceShadowEnrichActivity)}) {}
export class RunPipelineActivityRequest extends S.Class<RunPipelineActivityRequest>("RunPipelineActivityRequest")({pipelineActivity: PipelineActivity, payloads: MessagePayloads}) {}
export class SampleChannelDataRequest extends S.Class<SampleChannelDataRequest>("SampleChannelDataRequest")({channelName: S.String, maxMessages: S.optional(S.Number), startTime: S.optional(S.Date), endTime: S.optional(S.Date)}) {}
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class ServiceManagedChannelS3Storage extends S.Class<ServiceManagedChannelS3Storage>("ServiceManagedChannelS3Storage")({}) {}
export class CustomerManagedChannelS3Storage extends S.Class<CustomerManagedChannelS3Storage>("CustomerManagedChannelS3Storage")({bucket: S.String, keyPrefix: S.optional(S.String), roleArn: S.String}) {}
export class ChannelStorage extends S.Class<ChannelStorage>("ChannelStorage")({serviceManagedS3: S.optional(ServiceManagedChannelS3Storage), customerManagedS3: S.optional(CustomerManagedChannelS3Storage)}) {}
export class RetentionPeriod extends S.Class<RetentionPeriod>("RetentionPeriod")({unlimited: S.optional(S.Boolean), numberOfDays: S.optional(S.Number)}) {}
export class UpdateChannelRequest extends S.Class<UpdateChannelRequest>("UpdateChannelRequest")({channelName: S.String, channelStorage: S.optional(ChannelStorage), retentionPeriod: S.optional(RetentionPeriod)}) {}
export class DeltaTime extends S.Class<DeltaTime>("DeltaTime")({offsetSeconds: S.Number, timeExpression: S.String}) {}
export class QueryFilter extends S.Class<QueryFilter>("QueryFilter")({deltaTime: S.optional(DeltaTime)}) {}
export const QueryFilters = S.Array(QueryFilter);
export class SqlQueryDatasetAction extends S.Class<SqlQueryDatasetAction>("SqlQueryDatasetAction")({sqlQuery: S.String, filters: S.optional(QueryFilters)}) {}
export class ResourceConfiguration extends S.Class<ResourceConfiguration>("ResourceConfiguration")({computeType: S.String, volumeSizeInGB: S.Number}) {}
export class DatasetContentVersionValue extends S.Class<DatasetContentVersionValue>("DatasetContentVersionValue")({datasetName: S.String}) {}
export class OutputFileUriValue extends S.Class<OutputFileUriValue>("OutputFileUriValue")({fileName: S.String}) {}
export class Variable extends S.Class<Variable>("Variable")({name: S.String, stringValue: S.optional(S.String), doubleValue: S.optional(S.Number), datasetContentVersionValue: S.optional(DatasetContentVersionValue), outputFileUriValue: S.optional(OutputFileUriValue)}) {}
export const Variables = S.Array(Variable);
export class ContainerDatasetAction extends S.Class<ContainerDatasetAction>("ContainerDatasetAction")({image: S.String, executionRoleArn: S.String, resourceConfiguration: ResourceConfiguration, variables: S.optional(Variables)}) {}
export class DatasetAction extends S.Class<DatasetAction>("DatasetAction")({actionName: S.optional(S.String), queryAction: S.optional(SqlQueryDatasetAction), containerAction: S.optional(ContainerDatasetAction)}) {}
export const DatasetActions = S.Array(DatasetAction);
export class Schedule extends S.Class<Schedule>("Schedule")({expression: S.optional(S.String)}) {}
export class TriggeringDataset extends S.Class<TriggeringDataset>("TriggeringDataset")({name: S.String}) {}
export class DatasetTrigger extends S.Class<DatasetTrigger>("DatasetTrigger")({schedule: S.optional(Schedule), dataset: S.optional(TriggeringDataset)}) {}
export const DatasetTriggers = S.Array(DatasetTrigger);
export class IotEventsDestinationConfiguration extends S.Class<IotEventsDestinationConfiguration>("IotEventsDestinationConfiguration")({inputName: S.String, roleArn: S.String}) {}
export class GlueConfiguration extends S.Class<GlueConfiguration>("GlueConfiguration")({tableName: S.String, databaseName: S.String}) {}
export class S3DestinationConfiguration extends S.Class<S3DestinationConfiguration>("S3DestinationConfiguration")({bucket: S.String, key: S.String, glueConfiguration: S.optional(GlueConfiguration), roleArn: S.String}) {}
export class DatasetContentDeliveryDestination extends S.Class<DatasetContentDeliveryDestination>("DatasetContentDeliveryDestination")({iotEventsDestinationConfiguration: S.optional(IotEventsDestinationConfiguration), s3DestinationConfiguration: S.optional(S3DestinationConfiguration)}) {}
export class DatasetContentDeliveryRule extends S.Class<DatasetContentDeliveryRule>("DatasetContentDeliveryRule")({entryName: S.optional(S.String), destination: DatasetContentDeliveryDestination}) {}
export const DatasetContentDeliveryRules = S.Array(DatasetContentDeliveryRule);
export class VersioningConfiguration extends S.Class<VersioningConfiguration>("VersioningConfiguration")({unlimited: S.optional(S.Boolean), maxVersions: S.optional(S.Number)}) {}
export class DeltaTimeSessionWindowConfiguration extends S.Class<DeltaTimeSessionWindowConfiguration>("DeltaTimeSessionWindowConfiguration")({timeoutInMinutes: S.Number}) {}
export class LateDataRuleConfiguration extends S.Class<LateDataRuleConfiguration>("LateDataRuleConfiguration")({deltaTimeSessionWindowConfiguration: S.optional(DeltaTimeSessionWindowConfiguration)}) {}
export class LateDataRule extends S.Class<LateDataRule>("LateDataRule")({ruleName: S.optional(S.String), ruleConfiguration: LateDataRuleConfiguration}) {}
export const LateDataRules = S.Array(LateDataRule);
export class UpdateDatasetRequest extends S.Class<UpdateDatasetRequest>("UpdateDatasetRequest")({datasetName: S.String, actions: DatasetActions, triggers: S.optional(DatasetTriggers), contentDeliveryRules: S.optional(DatasetContentDeliveryRules), retentionPeriod: S.optional(RetentionPeriod), versioningConfiguration: S.optional(VersioningConfiguration), lateDataRules: S.optional(LateDataRules)}) {}
export class ServiceManagedDatastoreS3Storage extends S.Class<ServiceManagedDatastoreS3Storage>("ServiceManagedDatastoreS3Storage")({}) {}
export class CustomerManagedDatastoreS3Storage extends S.Class<CustomerManagedDatastoreS3Storage>("CustomerManagedDatastoreS3Storage")({bucket: S.String, keyPrefix: S.optional(S.String), roleArn: S.String}) {}
export class IotSiteWiseCustomerManagedDatastoreS3Storage extends S.Class<IotSiteWiseCustomerManagedDatastoreS3Storage>("IotSiteWiseCustomerManagedDatastoreS3Storage")({bucket: S.String, keyPrefix: S.optional(S.String)}) {}
export class DatastoreIotSiteWiseMultiLayerStorage extends S.Class<DatastoreIotSiteWiseMultiLayerStorage>("DatastoreIotSiteWiseMultiLayerStorage")({customerManagedS3Storage: IotSiteWiseCustomerManagedDatastoreS3Storage}) {}
export const DatastoreStorage = S.Union(ServiceManagedDatastoreS3Storage, CustomerManagedDatastoreS3Storage, DatastoreIotSiteWiseMultiLayerStorage);
export class JsonConfiguration extends S.Class<JsonConfiguration>("JsonConfiguration")({}) {}
export class Column extends S.Class<Column>("Column")({name: S.String, type: S.String}) {}
export const Columns = S.Array(Column);
export class SchemaDefinition extends S.Class<SchemaDefinition>("SchemaDefinition")({columns: S.optional(Columns)}) {}
export class ParquetConfiguration extends S.Class<ParquetConfiguration>("ParquetConfiguration")({schemaDefinition: S.optional(SchemaDefinition)}) {}
export class FileFormatConfiguration extends S.Class<FileFormatConfiguration>("FileFormatConfiguration")({jsonConfiguration: S.optional(JsonConfiguration), parquetConfiguration: S.optional(ParquetConfiguration)}) {}
export class UpdateDatastoreRequest extends S.Class<UpdateDatastoreRequest>("UpdateDatastoreRequest")({datastoreName: S.String, retentionPeriod: S.optional(RetentionPeriod), datastoreStorage: S.optional(DatastoreStorage), fileFormatConfiguration: S.optional(FileFormatConfiguration)}) {}
export const PipelineActivities = S.Array(PipelineActivity);
export class UpdatePipelineRequest extends S.Class<UpdatePipelineRequest>("UpdatePipelineRequest")({pipelineName: S.String, pipelineActivities: PipelineActivities}) {}
export const S3PathChannelMessages = S.Array(S.String);
export class Message extends S.Class<Message>("Message")({messageId: S.String, payload: H.StreamBody()}) {}
export const Messages = S.Array(Message);
export class ChannelMessages extends S.Class<ChannelMessages>("ChannelMessages")({s3Paths: S.optional(S3PathChannelMessages)}) {}
export class BatchPutMessageRequest extends S.Class<BatchPutMessageRequest>("BatchPutMessageRequest")({channelName: S.String, messages: Messages}) {}
export class CreateDatasetContentResponse extends S.Class<CreateDatasetContentResponse>("CreateDatasetContentResponse")({versionId: S.optional(S.String)}) {}
export class DescribeLoggingOptionsResponse extends S.Class<DescribeLoggingOptionsResponse>("DescribeLoggingOptionsResponse")({loggingOptions: S.optional(LoggingOptions)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList)}) {}
export class RunPipelineActivityResponse extends S.Class<RunPipelineActivityResponse>("RunPipelineActivityResponse")({payloads: S.optional(MessagePayloads), logResult: S.optional(S.String)}) {}
export class SampleChannelDataResponse extends S.Class<SampleChannelDataResponse>("SampleChannelDataResponse")({payloads: S.optional(MessagePayloads)}) {}
export class StartPipelineReprocessingRequest extends S.Class<StartPipelineReprocessingRequest>("StartPipelineReprocessingRequest")({pipelineName: S.String, startTime: S.optional(S.Date), endTime: S.optional(S.Date), channelMessages: S.optional(ChannelMessages)}) {}
export class Channel extends S.Class<Channel>("Channel")({name: S.optional(S.String), storage: S.optional(ChannelStorage), arn: S.optional(S.String), status: S.optional(S.String), retentionPeriod: S.optional(RetentionPeriod), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), lastMessageArrivalTime: S.optional(S.Date)}) {}
export class Dataset extends S.Class<Dataset>("Dataset")({name: S.optional(S.String), arn: S.optional(S.String), actions: S.optional(DatasetActions), triggers: S.optional(DatasetTriggers), contentDeliveryRules: S.optional(DatasetContentDeliveryRules), status: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), retentionPeriod: S.optional(RetentionPeriod), versioningConfiguration: S.optional(VersioningConfiguration), lateDataRules: S.optional(LateDataRules)}) {}
export class Partition extends S.Class<Partition>("Partition")({attributeName: S.String}) {}
export class TimestampPartition extends S.Class<TimestampPartition>("TimestampPartition")({attributeName: S.String, timestampFormat: S.optional(S.String)}) {}
export class DatastorePartition extends S.Class<DatastorePartition>("DatastorePartition")({attributePartition: S.optional(Partition), timestampPartition: S.optional(TimestampPartition)}) {}
export const Partitions = S.Array(DatastorePartition);
export class DatastorePartitions extends S.Class<DatastorePartitions>("DatastorePartitions")({partitions: S.optional(Partitions)}) {}
export class Datastore extends S.Class<Datastore>("Datastore")({name: S.optional(S.String), storage: S.optional(DatastoreStorage), arn: S.optional(S.String), status: S.optional(S.String), retentionPeriod: S.optional(RetentionPeriod), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), lastMessageArrivalTime: S.optional(S.Date), fileFormatConfiguration: S.optional(FileFormatConfiguration), datastorePartitions: S.optional(DatastorePartitions)}) {}
export class EstimatedResourceSize extends S.Class<EstimatedResourceSize>("EstimatedResourceSize")({estimatedSizeInBytes: S.optional(S.Number), estimatedOn: S.optional(S.Date)}) {}
export class DatastoreStatistics extends S.Class<DatastoreStatistics>("DatastoreStatistics")({size: S.optional(EstimatedResourceSize)}) {}
export class DatasetEntry extends S.Class<DatasetEntry>("DatasetEntry")({entryName: S.optional(S.String), dataURI: S.optional(S.String)}) {}
export const DatasetEntries = S.Array(DatasetEntry);
export class DatasetContentStatus extends S.Class<DatasetContentStatus>("DatasetContentStatus")({state: S.optional(S.String), reason: S.optional(S.String)}) {}
export class DatasetContentSummary extends S.Class<DatasetContentSummary>("DatasetContentSummary")({version: S.optional(S.String), status: S.optional(DatasetContentStatus), creationTime: S.optional(S.Date), scheduleTime: S.optional(S.Date), completionTime: S.optional(S.Date)}) {}
export const DatasetContentSummaries = S.Array(DatasetContentSummary);
export class ReprocessingSummary extends S.Class<ReprocessingSummary>("ReprocessingSummary")({id: S.optional(S.String), status: S.optional(S.String), creationTime: S.optional(S.Date)}) {}
export const ReprocessingSummaries = S.Array(ReprocessingSummary);
export class PipelineSummary extends S.Class<PipelineSummary>("PipelineSummary")({pipelineName: S.optional(S.String), reprocessingSummaries: S.optional(ReprocessingSummaries), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date)}) {}
export const PipelineSummaries = S.Array(PipelineSummary);
export class ServiceManagedChannelS3StorageSummary extends S.Class<ServiceManagedChannelS3StorageSummary>("ServiceManagedChannelS3StorageSummary")({}) {}
export class ServiceManagedDatastoreS3StorageSummary extends S.Class<ServiceManagedDatastoreS3StorageSummary>("ServiceManagedDatastoreS3StorageSummary")({}) {}
export class CreateChannelRequest extends S.Class<CreateChannelRequest>("CreateChannelRequest")({channelName: S.String, channelStorage: S.optional(ChannelStorage), retentionPeriod: S.optional(RetentionPeriod), tags: S.optional(TagList)}) {}
export class DescribeDatasetResponse extends S.Class<DescribeDatasetResponse>("DescribeDatasetResponse")({dataset: S.optional(Dataset)}) {}
export class DescribeDatastoreResponse extends S.Class<DescribeDatastoreResponse>("DescribeDatastoreResponse")({datastore: S.optional(Datastore), statistics: S.optional(DatastoreStatistics)}) {}
export class GetDatasetContentResponse extends S.Class<GetDatasetContentResponse>("GetDatasetContentResponse")({entries: S.optional(DatasetEntries), timestamp: S.optional(S.Date), status: S.optional(DatasetContentStatus)}) {}
export class ListDatasetContentsResponse extends S.Class<ListDatasetContentsResponse>("ListDatasetContentsResponse")({datasetContentSummaries: S.optional(DatasetContentSummaries), nextToken: S.optional(S.String)}) {}
export class ListPipelinesResponse extends S.Class<ListPipelinesResponse>("ListPipelinesResponse")({pipelineSummaries: S.optional(PipelineSummaries), nextToken: S.optional(S.String)}) {}
export class StartPipelineReprocessingResponse extends S.Class<StartPipelineReprocessingResponse>("StartPipelineReprocessingResponse")({reprocessingId: S.optional(S.String)}) {}
export class DatasetActionSummary extends S.Class<DatasetActionSummary>("DatasetActionSummary")({actionName: S.optional(S.String), actionType: S.optional(S.String)}) {}
export const DatasetActionSummaries = S.Array(DatasetActionSummary);
export class BatchPutMessageErrorEntry extends S.Class<BatchPutMessageErrorEntry>("BatchPutMessageErrorEntry")({messageId: S.optional(S.String), errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const BatchPutMessageErrorEntries = S.Array(BatchPutMessageErrorEntry);
export class ChannelStatistics extends S.Class<ChannelStatistics>("ChannelStatistics")({size: S.optional(EstimatedResourceSize)}) {}
export class Pipeline extends S.Class<Pipeline>("Pipeline")({name: S.optional(S.String), arn: S.optional(S.String), activities: S.optional(PipelineActivities), reprocessingSummaries: S.optional(ReprocessingSummaries), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date)}) {}
export class DatasetSummary extends S.Class<DatasetSummary>("DatasetSummary")({datasetName: S.optional(S.String), status: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), triggers: S.optional(DatasetTriggers), actions: S.optional(DatasetActionSummaries)}) {}
export const DatasetSummaries = S.Array(DatasetSummary);
export class CustomerManagedChannelS3StorageSummary extends S.Class<CustomerManagedChannelS3StorageSummary>("CustomerManagedChannelS3StorageSummary")({bucket: S.optional(S.String), keyPrefix: S.optional(S.String), roleArn: S.optional(S.String)}) {}
export class CustomerManagedDatastoreS3StorageSummary extends S.Class<CustomerManagedDatastoreS3StorageSummary>("CustomerManagedDatastoreS3StorageSummary")({bucket: S.optional(S.String), keyPrefix: S.optional(S.String), roleArn: S.optional(S.String)}) {}
export class BatchPutMessageResponse extends S.Class<BatchPutMessageResponse>("BatchPutMessageResponse")({batchPutMessageErrorEntries: S.optional(BatchPutMessageErrorEntries)}) {}
export class CreateChannelResponse extends S.Class<CreateChannelResponse>("CreateChannelResponse")({channelName: S.optional(S.String), channelArn: S.optional(S.String), retentionPeriod: S.optional(RetentionPeriod)}) {}
export class CreatePipelineRequest extends S.Class<CreatePipelineRequest>("CreatePipelineRequest")({pipelineName: S.String, pipelineActivities: PipelineActivities, tags: S.optional(TagList)}) {}
export class DescribeChannelResponse extends S.Class<DescribeChannelResponse>("DescribeChannelResponse")({channel: S.optional(Channel), statistics: S.optional(ChannelStatistics)}) {}
export class DescribePipelineResponse extends S.Class<DescribePipelineResponse>("DescribePipelineResponse")({pipeline: S.optional(Pipeline)}) {}
export class ListDatasetsResponse extends S.Class<ListDatasetsResponse>("ListDatasetsResponse")({datasetSummaries: S.optional(DatasetSummaries), nextToken: S.optional(S.String)}) {}
export class ChannelStorageSummary extends S.Class<ChannelStorageSummary>("ChannelStorageSummary")({serviceManagedS3: S.optional(ServiceManagedChannelS3StorageSummary), customerManagedS3: S.optional(CustomerManagedChannelS3StorageSummary)}) {}
export class IotSiteWiseCustomerManagedDatastoreS3StorageSummary extends S.Class<IotSiteWiseCustomerManagedDatastoreS3StorageSummary>("IotSiteWiseCustomerManagedDatastoreS3StorageSummary")({bucket: S.optional(S.String), keyPrefix: S.optional(S.String)}) {}
export class ChannelSummary extends S.Class<ChannelSummary>("ChannelSummary")({channelName: S.optional(S.String), channelStorage: S.optional(ChannelStorageSummary), status: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), lastMessageArrivalTime: S.optional(S.Date)}) {}
export const ChannelSummaries = S.Array(ChannelSummary);
export class DatastoreIotSiteWiseMultiLayerStorageSummary extends S.Class<DatastoreIotSiteWiseMultiLayerStorageSummary>("DatastoreIotSiteWiseMultiLayerStorageSummary")({customerManagedS3Storage: S.optional(IotSiteWiseCustomerManagedDatastoreS3StorageSummary)}) {}
export class CreateDatasetRequest extends S.Class<CreateDatasetRequest>("CreateDatasetRequest")({datasetName: S.String, actions: DatasetActions, triggers: S.optional(DatasetTriggers), contentDeliveryRules: S.optional(DatasetContentDeliveryRules), retentionPeriod: S.optional(RetentionPeriod), versioningConfiguration: S.optional(VersioningConfiguration), tags: S.optional(TagList), lateDataRules: S.optional(LateDataRules)}) {}
export class CreateDatastoreRequest extends S.Class<CreateDatastoreRequest>("CreateDatastoreRequest")({datastoreName: S.String, datastoreStorage: S.optional(DatastoreStorage), retentionPeriod: S.optional(RetentionPeriod), tags: S.optional(TagList), fileFormatConfiguration: S.optional(FileFormatConfiguration), datastorePartitions: S.optional(DatastorePartitions)}) {}
export class CreatePipelineResponse extends S.Class<CreatePipelineResponse>("CreatePipelineResponse")({pipelineName: S.optional(S.String), pipelineArn: S.optional(S.String)}) {}
export class ListChannelsResponse extends S.Class<ListChannelsResponse>("ListChannelsResponse")({channelSummaries: S.optional(ChannelSummaries), nextToken: S.optional(S.String)}) {}
export class DatastoreStorageSummary extends S.Class<DatastoreStorageSummary>("DatastoreStorageSummary")({serviceManagedS3: S.optional(ServiceManagedDatastoreS3StorageSummary), customerManagedS3: S.optional(CustomerManagedDatastoreS3StorageSummary), iotSiteWiseMultiLayerStorage: S.optional(DatastoreIotSiteWiseMultiLayerStorageSummary)}) {}
export class DatastoreSummary extends S.Class<DatastoreSummary>("DatastoreSummary")({datastoreName: S.optional(S.String), datastoreStorage: S.optional(DatastoreStorageSummary), status: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), lastMessageArrivalTime: S.optional(S.Date), fileFormatType: S.optional(S.String), datastorePartitions: S.optional(DatastorePartitions)}) {}
export const DatastoreSummaries = S.Array(DatastoreSummary);
export class CreateDatasetResponse extends S.Class<CreateDatasetResponse>("CreateDatasetResponse")({datasetName: S.optional(S.String), datasetArn: S.optional(S.String), retentionPeriod: S.optional(RetentionPeriod)}) {}
export class CreateDatastoreResponse extends S.Class<CreateDatastoreResponse>("CreateDatastoreResponse")({datastoreName: S.optional(S.String), datastoreArn: S.optional(S.String), retentionPeriod: S.optional(RetentionPeriod)}) {}
export class ListDatastoresResponse extends S.Class<ListDatastoresResponse>("ListDatastoresResponse")({datastoreSummaries: S.optional(DatastoreSummaries), nextToken: S.optional(S.String)}) {}

//# Errors
export class InternalFailureException extends S.TaggedError<InternalFailureException>()("InternalFailureException", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class ResourceAlreadyExistsException extends S.TaggedError<ResourceAlreadyExistsException>()("ResourceAlreadyExistsException", {}) {};

//# Operations
/**
 * Deletes the specified pipeline.
 */export const deletePipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/pipelines/{pipelineName}", method: "DELETE", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.DeletePipeline" }, DeletePipelineRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets or updates the IoT Analytics logging options.
 * 
 * 
 * If you update the value of any `loggingOptions` field, it takes up to one
 * minute for the change to take effect. Also, if you change the policy attached to the role you
 * specified in the `roleArn` field (for example, to correct an invalid policy), it
 * takes up to five minutes for that change to take effect.
 */export const putLoggingOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/logging", method: "PUT", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.PutLoggingOptions" }, PutLoggingOptionsRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the given tags (metadata) from the resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/tags", method: "DELETE", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to update the settings of a channel.
 */export const updateChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/channels/{channelName}", method: "PUT", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.UpdateChannel" }, UpdateChannelRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the settings of a dataset.
 */export const updateDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datasets/{datasetName}", method: "PUT", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.UpdateDataset" }, UpdateDatasetRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to update the settings of a data store.
 */export const updateDatastore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datastores/{datastoreName}", method: "PUT", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.UpdateDatastore" }, UpdateDatastoreRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the settings of a pipeline. You must specify both a `channel` and a
 * `datastore` activity and, optionally, as many as 23 additional activities in the
 * `pipelineActivities` array.
 */export const updatePipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/pipelines/{pipelineName}", method: "PUT", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.UpdatePipeline" }, UpdatePipelineRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels the reprocessing of data through the pipeline.
 */export const cancelPipelineReprocessing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/pipelines/{pipelineName}/reprocessing/{reprocessingId}", method: "DELETE", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.CancelPipelineReprocessing" }, CancelPipelineReprocessingRequest, CancelPipelineReprocessingResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates the content of a dataset by applying a `queryAction` (a SQL query) or a
 * `containerAction` (executing a containerized application).
 */export const createDatasetContent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datasets/{datasetName}/content", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.CreateDatasetContent" }, CreateDatasetContentRequest, CreateDatasetContentResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified channel.
 */export const deleteChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/channels/{channelName}", method: "DELETE", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.DeleteChannel" }, DeleteChannelRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified dataset.
 * 
 * 
 * You do not have to delete the content of the dataset before you perform this
 * operation.
 */export const deleteDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datasets/{datasetName}", method: "DELETE", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.DeleteDataset" }, DeleteDatasetRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the content of the specified dataset.
 */export const deleteDatasetContent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datasets/{datasetName}/content", method: "DELETE", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.DeleteDatasetContent" }, DeleteDatasetContentRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified data store.
 */export const deleteDatastore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datastores/{datastoreName}", method: "DELETE", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.DeleteDatastore" }, DeleteDatastoreRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current settings of the IoT Analytics logging options.
 */export const describeLoggingOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/logging", method: "GET", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.DescribeLoggingOptions" }, DescribeLoggingOptionsRequest, DescribeLoggingOptionsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags (metadata) that you have assigned to the resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/tags", method: "GET", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Simulates the results of running a pipeline activity on a message payload.
 */export const runPipelineActivity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/pipelineactivities/run", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.RunPipelineActivity" }, RunPipelineActivityRequest, RunPipelineActivityResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a sample of messages from the specified channel ingested during the specified
 * timeframe. Up to 10 messages can be retrieved.
 */export const sampleChannelData = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/channels/{channelName}/sample", method: "GET", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.SampleChannelData" }, SampleChannelDataRequest, SampleChannelDataResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to
 * manage a resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/tags", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a dataset.
 */export const describeDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datasets/{datasetName}", method: "GET", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.DescribeDataset" }, DescribeDatasetRequest, DescribeDatasetResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a data store.
 */export const describeDatastore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datastores/{datastoreName}", method: "GET", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.DescribeDatastore" }, DescribeDatastoreRequest, DescribeDatastoreResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the contents of a dataset as presigned URIs.
 */export const getDatasetContent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datasets/{datasetName}/content", method: "GET", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.GetDatasetContent" }, GetDatasetContentRequest, GetDatasetContentResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists information about dataset contents that have been created.
 */export const listDatasetContents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datasets/{datasetName}/contents", method: "GET", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.ListDatasetContents" }, ListDatasetContentsRequest, ListDatasetContentsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of pipelines.
 */export const listPipelines = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/pipelines", method: "GET", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.ListPipelines" }, ListPipelinesRequest, ListPipelinesResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends messages to a channel.
 */export const batchPutMessage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/messages/batch", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.BatchPutMessage" }, BatchPutMessageRequest, BatchPutMessageResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to create a channel. A channel collects data from an MQTT topic and archives the raw,
 * unprocessed messages before publishing the data to a pipeline.
 */export const createChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/channels", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.CreateChannel" }, CreateChannelRequest, CreateChannelResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a channel.
 */export const describeChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/channels/{channelName}", method: "GET", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.DescribeChannel" }, DescribeChannelRequest, DescribeChannelResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a pipeline.
 */export const describePipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/pipelines/{pipelineName}", method: "GET", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.DescribePipeline" }, DescribePipelineRequest, DescribePipelineResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about datasets.
 */export const listDatasets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datasets", method: "GET", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.ListDatasets" }, ListDatasetsRequest, ListDatasetsResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the reprocessing of raw message data through the pipeline.
 */export const startPipelineReprocessing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/pipelines/{pipelineName}/reprocessing", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.StartPipelineReprocessing" }, StartPipelineReprocessingRequest, StartPipelineReprocessingResponse, [InternalFailureException, InvalidRequestException, ResourceAlreadyExistsException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a pipeline. A pipeline consumes messages from a channel and allows you to process
 * the messages before storing them in a data store. You must specify both a `channel`
 * and a `datastore` activity and, optionally, as many as 23 additional activities in
 * the `pipelineActivities` array.
 */export const createPipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/pipelines", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.CreatePipeline" }, CreatePipelineRequest, CreatePipelineResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of channels.
 */export const listChannels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/channels", method: "GET", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.ListChannels" }, ListChannelsRequest, ListChannelsResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to create a dataset. A dataset stores data retrieved from a data store by applying a
 * `queryAction` (a SQL query) or a `containerAction` (executing a
 * containerized application). This operation creates the skeleton of a dataset. The dataset can
 * be populated manually by calling `CreateDatasetContent` or automatically according
 * to a trigger you specify.
 */export const createDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datasets", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.CreateDataset" }, CreateDatasetRequest, CreateDatasetResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a data store, which is a repository for messages.
 */export const createDatastore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datastores", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.CreateDatastore" }, CreateDatastoreRequest, CreateDatastoreResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of data stores.
 */export const listDatastores = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/datastores", method: "GET", sdkId: "IoTAnalytics", sigV4ServiceName: "iotanalytics", name: "AWSIoTAnalytics.ListDatastores" }, ListDatastoresRequest, ListDatastoresResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const FaultCodes = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class CreateLabelRequest extends S.Class<CreateLabelRequest>("CreateLabelRequest")({LabelGroupName: S.String, StartTime: S.Date, EndTime: S.Date, Rating: S.String, FaultCode: S.optional(S.String), Notes: S.optional(S.String), Equipment: S.optional(S.String), ClientToken: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class CreateLabelGroupRequest extends S.Class<CreateLabelGroupRequest>("CreateLabelGroupRequest")({LabelGroupName: S.String, FaultCodes: S.optional(FaultCodes), ClientToken: S.String, Tags: S.optional(TagList)}) {}
export class CreateRetrainingSchedulerRequest extends S.Class<CreateRetrainingSchedulerRequest>("CreateRetrainingSchedulerRequest")({ModelName: S.String, RetrainingStartDate: S.optional(S.Date), RetrainingFrequency: S.String, LookbackWindow: S.String, PromoteMode: S.optional(S.String), ClientToken: S.String}) {}
export class DeleteDatasetRequest extends S.Class<DeleteDatasetRequest>("DeleteDatasetRequest")({DatasetName: S.String}) {}
export class DeleteInferenceSchedulerRequest extends S.Class<DeleteInferenceSchedulerRequest>("DeleteInferenceSchedulerRequest")({InferenceSchedulerName: S.String}) {}
export class DeleteLabelRequest extends S.Class<DeleteLabelRequest>("DeleteLabelRequest")({LabelGroupName: S.String, LabelId: S.String}) {}
export class DeleteLabelGroupRequest extends S.Class<DeleteLabelGroupRequest>("DeleteLabelGroupRequest")({LabelGroupName: S.String}) {}
export class DeleteModelRequest extends S.Class<DeleteModelRequest>("DeleteModelRequest")({ModelName: S.String}) {}
export class DeleteResourcePolicyRequest extends S.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({ResourceArn: S.String}) {}
export class DeleteRetrainingSchedulerRequest extends S.Class<DeleteRetrainingSchedulerRequest>("DeleteRetrainingSchedulerRequest")({ModelName: S.String}) {}
export class DescribeDataIngestionJobRequest extends S.Class<DescribeDataIngestionJobRequest>("DescribeDataIngestionJobRequest")({JobId: S.String}) {}
export class DescribeDatasetRequest extends S.Class<DescribeDatasetRequest>("DescribeDatasetRequest")({DatasetName: S.String}) {}
export class DescribeInferenceSchedulerRequest extends S.Class<DescribeInferenceSchedulerRequest>("DescribeInferenceSchedulerRequest")({InferenceSchedulerName: S.String}) {}
export class DescribeLabelRequest extends S.Class<DescribeLabelRequest>("DescribeLabelRequest")({LabelGroupName: S.String, LabelId: S.String}) {}
export class DescribeLabelGroupRequest extends S.Class<DescribeLabelGroupRequest>("DescribeLabelGroupRequest")({LabelGroupName: S.String}) {}
export class DescribeModelRequest extends S.Class<DescribeModelRequest>("DescribeModelRequest")({ModelName: S.String}) {}
export class DescribeModelVersionRequest extends S.Class<DescribeModelVersionRequest>("DescribeModelVersionRequest")({ModelName: S.String, ModelVersion: S.Number}) {}
export class DescribeResourcePolicyRequest extends S.Class<DescribeResourcePolicyRequest>("DescribeResourcePolicyRequest")({ResourceArn: S.String}) {}
export class DescribeRetrainingSchedulerRequest extends S.Class<DescribeRetrainingSchedulerRequest>("DescribeRetrainingSchedulerRequest")({ModelName: S.String}) {}
export class ImportDatasetRequest extends S.Class<ImportDatasetRequest>("ImportDatasetRequest")({SourceDatasetArn: S.String, DatasetName: S.optional(S.String), ClientToken: S.String, ServerSideKmsKeyId: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class LabelsS3InputConfiguration extends S.Class<LabelsS3InputConfiguration>("LabelsS3InputConfiguration")({Bucket: S.String, Prefix: S.optional(S.String)}) {}
export class LabelsInputConfiguration extends S.Class<LabelsInputConfiguration>("LabelsInputConfiguration")({S3InputConfiguration: S.optional(LabelsS3InputConfiguration), LabelGroupName: S.optional(S.String)}) {}
export class ImportModelVersionRequest extends S.Class<ImportModelVersionRequest>("ImportModelVersionRequest")({SourceModelVersionArn: S.String, ModelName: S.optional(S.String), DatasetName: S.String, LabelsInputConfiguration: S.optional(LabelsInputConfiguration), ClientToken: S.String, RoleArn: S.optional(S.String), ServerSideKmsKeyId: S.optional(S.String), Tags: S.optional(TagList), InferenceDataImportStrategy: S.optional(S.String)}) {}
export class ListDataIngestionJobsRequest extends S.Class<ListDataIngestionJobsRequest>("ListDataIngestionJobsRequest")({DatasetName: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Status: S.optional(S.String)}) {}
export class ListDatasetsRequest extends S.Class<ListDatasetsRequest>("ListDatasetsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), DatasetNameBeginsWith: S.optional(S.String)}) {}
export class ListInferenceEventsRequest extends S.Class<ListInferenceEventsRequest>("ListInferenceEventsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), InferenceSchedulerName: S.String, IntervalStartTime: S.Date, IntervalEndTime: S.Date}) {}
export class ListInferenceExecutionsRequest extends S.Class<ListInferenceExecutionsRequest>("ListInferenceExecutionsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), InferenceSchedulerName: S.String, DataStartTimeAfter: S.optional(S.Date), DataEndTimeBefore: S.optional(S.Date), Status: S.optional(S.String)}) {}
export class ListInferenceSchedulersRequest extends S.Class<ListInferenceSchedulersRequest>("ListInferenceSchedulersRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), InferenceSchedulerNameBeginsWith: S.optional(S.String), ModelName: S.optional(S.String), Status: S.optional(S.String)}) {}
export class ListLabelGroupsRequest extends S.Class<ListLabelGroupsRequest>("ListLabelGroupsRequest")({LabelGroupNameBeginsWith: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListLabelsRequest extends S.Class<ListLabelsRequest>("ListLabelsRequest")({LabelGroupName: S.String, IntervalStartTime: S.optional(S.Date), IntervalEndTime: S.optional(S.Date), FaultCode: S.optional(S.String), Equipment: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListModelsRequest extends S.Class<ListModelsRequest>("ListModelsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Status: S.optional(S.String), ModelNameBeginsWith: S.optional(S.String), DatasetNameBeginsWith: S.optional(S.String)}) {}
export class ListModelVersionsRequest extends S.Class<ListModelVersionsRequest>("ListModelVersionsRequest")({ModelName: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Status: S.optional(S.String), SourceType: S.optional(S.String), CreatedAtEndTime: S.optional(S.Date), CreatedAtStartTime: S.optional(S.Date), MaxModelVersion: S.optional(S.Number), MinModelVersion: S.optional(S.Number)}) {}
export class ListRetrainingSchedulersRequest extends S.Class<ListRetrainingSchedulersRequest>("ListRetrainingSchedulersRequest")({ModelNameBeginsWith: S.optional(S.String), Status: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListSensorStatisticsRequest extends S.Class<ListSensorStatisticsRequest>("ListSensorStatisticsRequest")({DatasetName: S.String, IngestionJobId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class PutResourcePolicyRequest extends S.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({ResourceArn: S.String, ResourcePolicy: S.String, PolicyRevisionId: S.optional(S.String), ClientToken: S.String}) {}
export class StartInferenceSchedulerRequest extends S.Class<StartInferenceSchedulerRequest>("StartInferenceSchedulerRequest")({InferenceSchedulerName: S.String}) {}
export class StartRetrainingSchedulerRequest extends S.Class<StartRetrainingSchedulerRequest>("StartRetrainingSchedulerRequest")({ModelName: S.String}) {}
export class StopInferenceSchedulerRequest extends S.Class<StopInferenceSchedulerRequest>("StopInferenceSchedulerRequest")({InferenceSchedulerName: S.String}) {}
export class StopRetrainingSchedulerRequest extends S.Class<StopRetrainingSchedulerRequest>("StopRetrainingSchedulerRequest")({ModelName: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateActiveModelVersionRequest extends S.Class<UpdateActiveModelVersionRequest>("UpdateActiveModelVersionRequest")({ModelName: S.String, ModelVersion: S.Number}) {}
export class InferenceS3InputConfiguration extends S.Class<InferenceS3InputConfiguration>("InferenceS3InputConfiguration")({Bucket: S.String, Prefix: S.optional(S.String)}) {}
export class InferenceInputNameConfiguration extends S.Class<InferenceInputNameConfiguration>("InferenceInputNameConfiguration")({TimestampFormat: S.optional(S.String), ComponentTimestampDelimiter: S.optional(S.String)}) {}
export class InferenceInputConfiguration extends S.Class<InferenceInputConfiguration>("InferenceInputConfiguration")({S3InputConfiguration: S.optional(InferenceS3InputConfiguration), InputTimeZoneOffset: S.optional(S.String), InferenceInputNameConfiguration: S.optional(InferenceInputNameConfiguration)}) {}
export class InferenceS3OutputConfiguration extends S.Class<InferenceS3OutputConfiguration>("InferenceS3OutputConfiguration")({Bucket: S.String, Prefix: S.optional(S.String)}) {}
export class InferenceOutputConfiguration extends S.Class<InferenceOutputConfiguration>("InferenceOutputConfiguration")({S3OutputConfiguration: InferenceS3OutputConfiguration, KmsKeyId: S.optional(S.String)}) {}
export class UpdateInferenceSchedulerRequest extends S.Class<UpdateInferenceSchedulerRequest>("UpdateInferenceSchedulerRequest")({InferenceSchedulerName: S.String, DataDelayOffsetInMinutes: S.optional(S.Number), DataUploadFrequency: S.optional(S.String), DataInputConfiguration: S.optional(InferenceInputConfiguration), DataOutputConfiguration: S.optional(InferenceOutputConfiguration), RoleArn: S.optional(S.String)}) {}
export class UpdateLabelGroupRequest extends S.Class<UpdateLabelGroupRequest>("UpdateLabelGroupRequest")({LabelGroupName: S.String, FaultCodes: S.optional(FaultCodes)}) {}
export class ModelDiagnosticsS3OutputConfiguration extends S.Class<ModelDiagnosticsS3OutputConfiguration>("ModelDiagnosticsS3OutputConfiguration")({Bucket: S.String, Prefix: S.optional(S.String)}) {}
export class ModelDiagnosticsOutputConfiguration extends S.Class<ModelDiagnosticsOutputConfiguration>("ModelDiagnosticsOutputConfiguration")({S3OutputConfiguration: ModelDiagnosticsS3OutputConfiguration, KmsKeyId: S.optional(S.String)}) {}
export class UpdateModelRequest extends S.Class<UpdateModelRequest>("UpdateModelRequest")({ModelName: S.String, LabelsInputConfiguration: S.optional(LabelsInputConfiguration), RoleArn: S.optional(S.String), ModelDiagnosticsOutputConfiguration: S.optional(ModelDiagnosticsOutputConfiguration)}) {}
export class UpdateRetrainingSchedulerRequest extends S.Class<UpdateRetrainingSchedulerRequest>("UpdateRetrainingSchedulerRequest")({ModelName: S.String, RetrainingStartDate: S.optional(S.Date), RetrainingFrequency: S.optional(S.String), LookbackWindow: S.optional(S.String), PromoteMode: S.optional(S.String)}) {}
export class DatasetSchema extends S.Class<DatasetSchema>("DatasetSchema")({InlineDataSchema: S.optional(S.String)}) {}
export class DataPreProcessingConfiguration extends S.Class<DataPreProcessingConfiguration>("DataPreProcessingConfiguration")({TargetSamplingRate: S.optional(S.String)}) {}
export class CreateDatasetRequest extends S.Class<CreateDatasetRequest>("CreateDatasetRequest")({DatasetName: S.String, DatasetSchema: S.optional(DatasetSchema), ServerSideKmsKeyId: S.optional(S.String), ClientToken: S.String, Tags: S.optional(TagList)}) {}
export class CreateLabelResponse extends S.Class<CreateLabelResponse>("CreateLabelResponse")({LabelId: S.optional(S.String)}) {}
export class CreateLabelGroupResponse extends S.Class<CreateLabelGroupResponse>("CreateLabelGroupResponse")({LabelGroupName: S.optional(S.String), LabelGroupArn: S.optional(S.String)}) {}
export class CreateRetrainingSchedulerResponse extends S.Class<CreateRetrainingSchedulerResponse>("CreateRetrainingSchedulerResponse")({ModelName: S.optional(S.String), ModelArn: S.optional(S.String), Status: S.optional(S.String)}) {}
export class IngestionS3InputConfiguration extends S.Class<IngestionS3InputConfiguration>("IngestionS3InputConfiguration")({Bucket: S.String, Prefix: S.optional(S.String), KeyPattern: S.optional(S.String)}) {}
export class IngestionInputConfiguration extends S.Class<IngestionInputConfiguration>("IngestionInputConfiguration")({S3InputConfiguration: IngestionS3InputConfiguration}) {}
export class MissingCompleteSensorData extends S.Class<MissingCompleteSensorData>("MissingCompleteSensorData")({AffectedSensorCount: S.Number}) {}
export class SensorsWithShortDateRange extends S.Class<SensorsWithShortDateRange>("SensorsWithShortDateRange")({AffectedSensorCount: S.Number}) {}
export class InsufficientSensorData extends S.Class<InsufficientSensorData>("InsufficientSensorData")({MissingCompleteSensorData: MissingCompleteSensorData, SensorsWithShortDateRange: SensorsWithShortDateRange}) {}
export class MissingSensorData extends S.Class<MissingSensorData>("MissingSensorData")({AffectedSensorCount: S.Number, TotalNumberOfMissingValues: S.Number}) {}
export class InvalidSensorData extends S.Class<InvalidSensorData>("InvalidSensorData")({AffectedSensorCount: S.Number, TotalNumberOfInvalidValues: S.Number}) {}
export class UnsupportedTimestamps extends S.Class<UnsupportedTimestamps>("UnsupportedTimestamps")({TotalNumberOfUnsupportedTimestamps: S.Number}) {}
export class DuplicateTimestamps extends S.Class<DuplicateTimestamps>("DuplicateTimestamps")({TotalNumberOfDuplicateTimestamps: S.Number}) {}
export class DataQualitySummary extends S.Class<DataQualitySummary>("DataQualitySummary")({InsufficientSensorData: InsufficientSensorData, MissingSensorData: MissingSensorData, InvalidSensorData: InvalidSensorData, UnsupportedTimestamps: UnsupportedTimestamps, DuplicateTimestamps: DuplicateTimestamps}) {}
export class S3Object extends S.Class<S3Object>("S3Object")({Bucket: S.String, Key: S.String}) {}
export const ListOfDiscardedFiles = S.Array(S3Object);
export class IngestedFilesSummary extends S.Class<IngestedFilesSummary>("IngestedFilesSummary")({TotalNumberOfFiles: S.Number, IngestedNumberOfFiles: S.Number, DiscardedFiles: S.optional(ListOfDiscardedFiles)}) {}
export class DescribeDatasetResponse extends S.Class<DescribeDatasetResponse>("DescribeDatasetResponse")({DatasetName: S.optional(S.String), DatasetArn: S.optional(S.String), CreatedAt: S.optional(S.Date), LastUpdatedAt: S.optional(S.Date), Status: S.optional(S.String), Schema: S.optional(S.String), ServerSideKmsKeyId: S.optional(S.String), IngestionInputConfiguration: S.optional(IngestionInputConfiguration), DataQualitySummary: S.optional(DataQualitySummary), IngestedFilesSummary: S.optional(IngestedFilesSummary), RoleArn: S.optional(S.String), DataStartTime: S.optional(S.Date), DataEndTime: S.optional(S.Date), SourceDatasetArn: S.optional(S.String)}) {}
export class DescribeInferenceSchedulerResponse extends S.Class<DescribeInferenceSchedulerResponse>("DescribeInferenceSchedulerResponse")({ModelArn: S.optional(S.String), ModelName: S.optional(S.String), InferenceSchedulerName: S.optional(S.String), InferenceSchedulerArn: S.optional(S.String), Status: S.optional(S.String), DataDelayOffsetInMinutes: S.optional(S.Number), DataUploadFrequency: S.optional(S.String), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), DataInputConfiguration: S.optional(InferenceInputConfiguration), DataOutputConfiguration: S.optional(InferenceOutputConfiguration), RoleArn: S.optional(S.String), ServerSideKmsKeyId: S.optional(S.String), LatestInferenceResult: S.optional(S.String)}) {}
export class DescribeLabelResponse extends S.Class<DescribeLabelResponse>("DescribeLabelResponse")({LabelGroupName: S.optional(S.String), LabelGroupArn: S.optional(S.String), LabelId: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Rating: S.optional(S.String), FaultCode: S.optional(S.String), Notes: S.optional(S.String), Equipment: S.optional(S.String), CreatedAt: S.optional(S.Date)}) {}
export class DescribeLabelGroupResponse extends S.Class<DescribeLabelGroupResponse>("DescribeLabelGroupResponse")({LabelGroupName: S.optional(S.String), LabelGroupArn: S.optional(S.String), FaultCodes: S.optional(FaultCodes), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date)}) {}
export class DescribeModelResponse extends S.Class<DescribeModelResponse>("DescribeModelResponse")({ModelName: S.optional(S.String), ModelArn: S.optional(S.String), DatasetName: S.optional(S.String), DatasetArn: S.optional(S.String), Schema: S.optional(S.String), LabelsInputConfiguration: S.optional(LabelsInputConfiguration), TrainingDataStartTime: S.optional(S.Date), TrainingDataEndTime: S.optional(S.Date), EvaluationDataStartTime: S.optional(S.Date), EvaluationDataEndTime: S.optional(S.Date), RoleArn: S.optional(S.String), DataPreProcessingConfiguration: S.optional(DataPreProcessingConfiguration), Status: S.optional(S.String), TrainingExecutionStartTime: S.optional(S.Date), TrainingExecutionEndTime: S.optional(S.Date), FailedReason: S.optional(S.String), ModelMetrics: S.optional(S.String), LastUpdatedTime: S.optional(S.Date), CreatedAt: S.optional(S.Date), ServerSideKmsKeyId: S.optional(S.String), OffCondition: S.optional(S.String), SourceModelVersionArn: S.optional(S.String), ImportJobStartTime: S.optional(S.Date), ImportJobEndTime: S.optional(S.Date), ActiveModelVersion: S.optional(S.Number), ActiveModelVersionArn: S.optional(S.String), ModelVersionActivatedAt: S.optional(S.Date), PreviousActiveModelVersion: S.optional(S.Number), PreviousActiveModelVersionArn: S.optional(S.String), PreviousModelVersionActivatedAt: S.optional(S.Date), PriorModelMetrics: S.optional(S.String), LatestScheduledRetrainingFailedReason: S.optional(S.String), LatestScheduledRetrainingStatus: S.optional(S.String), LatestScheduledRetrainingModelVersion: S.optional(S.Number), LatestScheduledRetrainingStartTime: S.optional(S.Date), LatestScheduledRetrainingAvailableDataInDays: S.optional(S.Number), NextScheduledRetrainingStartDate: S.optional(S.Date), AccumulatedInferenceDataStartTime: S.optional(S.Date), AccumulatedInferenceDataEndTime: S.optional(S.Date), RetrainingSchedulerStatus: S.optional(S.String), ModelDiagnosticsOutputConfiguration: S.optional(ModelDiagnosticsOutputConfiguration), ModelQuality: S.optional(S.String)}) {}
export class DescribeResourcePolicyResponse extends S.Class<DescribeResourcePolicyResponse>("DescribeResourcePolicyResponse")({PolicyRevisionId: S.optional(S.String), ResourcePolicy: S.optional(S.String), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date)}) {}
export class DescribeRetrainingSchedulerResponse extends S.Class<DescribeRetrainingSchedulerResponse>("DescribeRetrainingSchedulerResponse")({ModelName: S.optional(S.String), ModelArn: S.optional(S.String), RetrainingStartDate: S.optional(S.Date), RetrainingFrequency: S.optional(S.String), LookbackWindow: S.optional(S.String), Status: S.optional(S.String), PromoteMode: S.optional(S.String), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date)}) {}
export class ImportDatasetResponse extends S.Class<ImportDatasetResponse>("ImportDatasetResponse")({DatasetName: S.optional(S.String), DatasetArn: S.optional(S.String), Status: S.optional(S.String), JobId: S.optional(S.String)}) {}
export class ImportModelVersionResponse extends S.Class<ImportModelVersionResponse>("ImportModelVersionResponse")({ModelName: S.optional(S.String), ModelArn: S.optional(S.String), ModelVersionArn: S.optional(S.String), ModelVersion: S.optional(S.Number), Status: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class PutResourcePolicyResponse extends S.Class<PutResourcePolicyResponse>("PutResourcePolicyResponse")({ResourceArn: S.optional(S.String), PolicyRevisionId: S.optional(S.String)}) {}
export class StartInferenceSchedulerResponse extends S.Class<StartInferenceSchedulerResponse>("StartInferenceSchedulerResponse")({ModelArn: S.optional(S.String), ModelName: S.optional(S.String), InferenceSchedulerName: S.optional(S.String), InferenceSchedulerArn: S.optional(S.String), Status: S.optional(S.String)}) {}
export class StartRetrainingSchedulerResponse extends S.Class<StartRetrainingSchedulerResponse>("StartRetrainingSchedulerResponse")({ModelName: S.optional(S.String), ModelArn: S.optional(S.String), Status: S.optional(S.String)}) {}
export class StopInferenceSchedulerResponse extends S.Class<StopInferenceSchedulerResponse>("StopInferenceSchedulerResponse")({ModelArn: S.optional(S.String), ModelName: S.optional(S.String), InferenceSchedulerName: S.optional(S.String), InferenceSchedulerArn: S.optional(S.String), Status: S.optional(S.String)}) {}
export class StopRetrainingSchedulerResponse extends S.Class<StopRetrainingSchedulerResponse>("StopRetrainingSchedulerResponse")({ModelName: S.optional(S.String), ModelArn: S.optional(S.String), Status: S.optional(S.String)}) {}
export class UpdateActiveModelVersionResponse extends S.Class<UpdateActiveModelVersionResponse>("UpdateActiveModelVersionResponse")({ModelName: S.optional(S.String), ModelArn: S.optional(S.String), CurrentActiveVersion: S.optional(S.Number), PreviousActiveVersion: S.optional(S.Number), CurrentActiveVersionArn: S.optional(S.String), PreviousActiveVersionArn: S.optional(S.String)}) {}
export class DataIngestionJobSummary extends S.Class<DataIngestionJobSummary>("DataIngestionJobSummary")({JobId: S.optional(S.String), DatasetName: S.optional(S.String), DatasetArn: S.optional(S.String), IngestionInputConfiguration: S.optional(IngestionInputConfiguration), Status: S.optional(S.String)}) {}
export const DataIngestionJobSummaries = S.Array(DataIngestionJobSummary);
export class DatasetSummary extends S.Class<DatasetSummary>("DatasetSummary")({DatasetName: S.optional(S.String), DatasetArn: S.optional(S.String), Status: S.optional(S.String), CreatedAt: S.optional(S.Date)}) {}
export const DatasetSummaries = S.Array(DatasetSummary);
export class InferenceEventSummary extends S.Class<InferenceEventSummary>("InferenceEventSummary")({InferenceSchedulerArn: S.optional(S.String), InferenceSchedulerName: S.optional(S.String), EventStartTime: S.optional(S.Date), EventEndTime: S.optional(S.Date), Diagnostics: S.optional(S.String), EventDurationInSeconds: S.optional(S.Number)}) {}
export const InferenceEventSummaries = S.Array(InferenceEventSummary);
export class InferenceExecutionSummary extends S.Class<InferenceExecutionSummary>("InferenceExecutionSummary")({ModelName: S.optional(S.String), ModelArn: S.optional(S.String), InferenceSchedulerName: S.optional(S.String), InferenceSchedulerArn: S.optional(S.String), ScheduledStartTime: S.optional(S.Date), DataStartTime: S.optional(S.Date), DataEndTime: S.optional(S.Date), DataInputConfiguration: S.optional(InferenceInputConfiguration), DataOutputConfiguration: S.optional(InferenceOutputConfiguration), CustomerResultObject: S.optional(S3Object), Status: S.optional(S.String), FailedReason: S.optional(S.String), ModelVersion: S.optional(S.Number), ModelVersionArn: S.optional(S.String)}) {}
export const InferenceExecutionSummaries = S.Array(InferenceExecutionSummary);
export class InferenceSchedulerSummary extends S.Class<InferenceSchedulerSummary>("InferenceSchedulerSummary")({ModelName: S.optional(S.String), ModelArn: S.optional(S.String), InferenceSchedulerName: S.optional(S.String), InferenceSchedulerArn: S.optional(S.String), Status: S.optional(S.String), DataDelayOffsetInMinutes: S.optional(S.Number), DataUploadFrequency: S.optional(S.String), LatestInferenceResult: S.optional(S.String)}) {}
export const InferenceSchedulerSummaries = S.Array(InferenceSchedulerSummary);
export class LabelGroupSummary extends S.Class<LabelGroupSummary>("LabelGroupSummary")({LabelGroupName: S.optional(S.String), LabelGroupArn: S.optional(S.String), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date)}) {}
export const LabelGroupSummaries = S.Array(LabelGroupSummary);
export class LabelSummary extends S.Class<LabelSummary>("LabelSummary")({LabelGroupName: S.optional(S.String), LabelId: S.optional(S.String), LabelGroupArn: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Rating: S.optional(S.String), FaultCode: S.optional(S.String), Equipment: S.optional(S.String), CreatedAt: S.optional(S.Date)}) {}
export const LabelSummaries = S.Array(LabelSummary);
export class ModelSummary extends S.Class<ModelSummary>("ModelSummary")({ModelName: S.optional(S.String), ModelArn: S.optional(S.String), DatasetName: S.optional(S.String), DatasetArn: S.optional(S.String), Status: S.optional(S.String), CreatedAt: S.optional(S.Date), ActiveModelVersion: S.optional(S.Number), ActiveModelVersionArn: S.optional(S.String), LatestScheduledRetrainingStatus: S.optional(S.String), LatestScheduledRetrainingModelVersion: S.optional(S.Number), LatestScheduledRetrainingStartTime: S.optional(S.Date), NextScheduledRetrainingStartDate: S.optional(S.Date), RetrainingSchedulerStatus: S.optional(S.String), ModelDiagnosticsOutputConfiguration: S.optional(ModelDiagnosticsOutputConfiguration), ModelQuality: S.optional(S.String)}) {}
export const ModelSummaries = S.Array(ModelSummary);
export class ModelVersionSummary extends S.Class<ModelVersionSummary>("ModelVersionSummary")({ModelName: S.optional(S.String), ModelArn: S.optional(S.String), ModelVersion: S.optional(S.Number), ModelVersionArn: S.optional(S.String), CreatedAt: S.optional(S.Date), Status: S.optional(S.String), SourceType: S.optional(S.String), ModelQuality: S.optional(S.String)}) {}
export const ModelVersionSummaries = S.Array(ModelVersionSummary);
export class RetrainingSchedulerSummary extends S.Class<RetrainingSchedulerSummary>("RetrainingSchedulerSummary")({ModelName: S.optional(S.String), ModelArn: S.optional(S.String), Status: S.optional(S.String), RetrainingStartDate: S.optional(S.Date), RetrainingFrequency: S.optional(S.String), LookbackWindow: S.optional(S.String)}) {}
export const RetrainingSchedulerSummaries = S.Array(RetrainingSchedulerSummary);
export class CreateDatasetResponse extends S.Class<CreateDatasetResponse>("CreateDatasetResponse")({DatasetName: S.optional(S.String), DatasetArn: S.optional(S.String), Status: S.optional(S.String)}) {}
export class CreateInferenceSchedulerRequest extends S.Class<CreateInferenceSchedulerRequest>("CreateInferenceSchedulerRequest")({ModelName: S.String, InferenceSchedulerName: S.String, DataDelayOffsetInMinutes: S.optional(S.Number), DataUploadFrequency: S.String, DataInputConfiguration: InferenceInputConfiguration, DataOutputConfiguration: InferenceOutputConfiguration, RoleArn: S.String, ServerSideKmsKeyId: S.optional(S.String), ClientToken: S.String, Tags: S.optional(TagList)}) {}
export class CreateModelRequest extends S.Class<CreateModelRequest>("CreateModelRequest")({ModelName: S.String, DatasetName: S.String, DatasetSchema: S.optional(DatasetSchema), LabelsInputConfiguration: S.optional(LabelsInputConfiguration), ClientToken: S.String, TrainingDataStartTime: S.optional(S.Date), TrainingDataEndTime: S.optional(S.Date), EvaluationDataStartTime: S.optional(S.Date), EvaluationDataEndTime: S.optional(S.Date), RoleArn: S.optional(S.String), DataPreProcessingConfiguration: S.optional(DataPreProcessingConfiguration), ServerSideKmsKeyId: S.optional(S.String), Tags: S.optional(TagList), OffCondition: S.optional(S.String), ModelDiagnosticsOutputConfiguration: S.optional(ModelDiagnosticsOutputConfiguration)}) {}
export class DescribeModelVersionResponse extends S.Class<DescribeModelVersionResponse>("DescribeModelVersionResponse")({ModelName: S.optional(S.String), ModelArn: S.optional(S.String), ModelVersion: S.optional(S.Number), ModelVersionArn: S.optional(S.String), Status: S.optional(S.String), SourceType: S.optional(S.String), DatasetName: S.optional(S.String), DatasetArn: S.optional(S.String), Schema: S.optional(S.String), LabelsInputConfiguration: S.optional(LabelsInputConfiguration), TrainingDataStartTime: S.optional(S.Date), TrainingDataEndTime: S.optional(S.Date), EvaluationDataStartTime: S.optional(S.Date), EvaluationDataEndTime: S.optional(S.Date), RoleArn: S.optional(S.String), DataPreProcessingConfiguration: S.optional(DataPreProcessingConfiguration), TrainingExecutionStartTime: S.optional(S.Date), TrainingExecutionEndTime: S.optional(S.Date), FailedReason: S.optional(S.String), ModelMetrics: S.optional(S.String), LastUpdatedTime: S.optional(S.Date), CreatedAt: S.optional(S.Date), ServerSideKmsKeyId: S.optional(S.String), OffCondition: S.optional(S.String), SourceModelVersionArn: S.optional(S.String), ImportJobStartTime: S.optional(S.Date), ImportJobEndTime: S.optional(S.Date), ImportedDataSizeInBytes: S.optional(S.Number), PriorModelMetrics: S.optional(S.String), RetrainingAvailableDataInDays: S.optional(S.Number), AutoPromotionResult: S.optional(S.String), AutoPromotionResultReason: S.optional(S.String), ModelDiagnosticsOutputConfiguration: S.optional(ModelDiagnosticsOutputConfiguration), ModelDiagnosticsResultsObject: S.optional(S3Object), ModelQuality: S.optional(S.String)}) {}
export class ListDataIngestionJobsResponse extends S.Class<ListDataIngestionJobsResponse>("ListDataIngestionJobsResponse")({NextToken: S.optional(S.String), DataIngestionJobSummaries: S.optional(DataIngestionJobSummaries)}) {}
export class ListDatasetsResponse extends S.Class<ListDatasetsResponse>("ListDatasetsResponse")({NextToken: S.optional(S.String), DatasetSummaries: S.optional(DatasetSummaries)}) {}
export class ListInferenceEventsResponse extends S.Class<ListInferenceEventsResponse>("ListInferenceEventsResponse")({NextToken: S.optional(S.String), InferenceEventSummaries: S.optional(InferenceEventSummaries)}) {}
export class ListInferenceExecutionsResponse extends S.Class<ListInferenceExecutionsResponse>("ListInferenceExecutionsResponse")({NextToken: S.optional(S.String), InferenceExecutionSummaries: S.optional(InferenceExecutionSummaries)}) {}
export class ListInferenceSchedulersResponse extends S.Class<ListInferenceSchedulersResponse>("ListInferenceSchedulersResponse")({NextToken: S.optional(S.String), InferenceSchedulerSummaries: S.optional(InferenceSchedulerSummaries)}) {}
export class ListLabelGroupsResponse extends S.Class<ListLabelGroupsResponse>("ListLabelGroupsResponse")({NextToken: S.optional(S.String), LabelGroupSummaries: S.optional(LabelGroupSummaries)}) {}
export class ListLabelsResponse extends S.Class<ListLabelsResponse>("ListLabelsResponse")({NextToken: S.optional(S.String), LabelSummaries: S.optional(LabelSummaries)}) {}
export class ListModelsResponse extends S.Class<ListModelsResponse>("ListModelsResponse")({NextToken: S.optional(S.String), ModelSummaries: S.optional(ModelSummaries)}) {}
export class ListModelVersionsResponse extends S.Class<ListModelVersionsResponse>("ListModelVersionsResponse")({NextToken: S.optional(S.String), ModelVersionSummaries: S.optional(ModelVersionSummaries)}) {}
export class ListRetrainingSchedulersResponse extends S.Class<ListRetrainingSchedulersResponse>("ListRetrainingSchedulersResponse")({RetrainingSchedulerSummaries: S.optional(RetrainingSchedulerSummaries), NextToken: S.optional(S.String)}) {}
export class StartDataIngestionJobRequest extends S.Class<StartDataIngestionJobRequest>("StartDataIngestionJobRequest")({DatasetName: S.String, IngestionInputConfiguration: IngestionInputConfiguration, RoleArn: S.String, ClientToken: S.String}) {}
export class CountPercent extends S.Class<CountPercent>("CountPercent")({Count: S.Number, Percentage: S.Number}) {}
export class CategoricalValues extends S.Class<CategoricalValues>("CategoricalValues")({Status: S.String, NumberOfCategory: S.optional(S.Number)}) {}
export class MultipleOperatingModes extends S.Class<MultipleOperatingModes>("MultipleOperatingModes")({Status: S.String}) {}
export class LargeTimestampGaps extends S.Class<LargeTimestampGaps>("LargeTimestampGaps")({Status: S.String, NumberOfLargeTimestampGaps: S.optional(S.Number), MaxTimestampGapInDays: S.optional(S.Number)}) {}
export class MonotonicValues extends S.Class<MonotonicValues>("MonotonicValues")({Status: S.String, Monotonicity: S.optional(S.String)}) {}
export class SensorStatisticsSummary extends S.Class<SensorStatisticsSummary>("SensorStatisticsSummary")({ComponentName: S.optional(S.String), SensorName: S.optional(S.String), DataExists: S.optional(S.Boolean), MissingValues: S.optional(CountPercent), InvalidValues: S.optional(CountPercent), InvalidDateEntries: S.optional(CountPercent), DuplicateTimestamps: S.optional(CountPercent), CategoricalValues: S.optional(CategoricalValues), MultipleOperatingModes: S.optional(MultipleOperatingModes), LargeTimestampGaps: S.optional(LargeTimestampGaps), MonotonicValues: S.optional(MonotonicValues), DataStartTime: S.optional(S.Date), DataEndTime: S.optional(S.Date)}) {}
export const SensorStatisticsSummaries = S.Array(SensorStatisticsSummary);
export class CreateInferenceSchedulerResponse extends S.Class<CreateInferenceSchedulerResponse>("CreateInferenceSchedulerResponse")({InferenceSchedulerArn: S.optional(S.String), InferenceSchedulerName: S.optional(S.String), Status: S.optional(S.String), ModelQuality: S.optional(S.String)}) {}
export class CreateModelResponse extends S.Class<CreateModelResponse>("CreateModelResponse")({ModelArn: S.optional(S.String), Status: S.optional(S.String)}) {}
export class ListSensorStatisticsResponse extends S.Class<ListSensorStatisticsResponse>("ListSensorStatisticsResponse")({SensorStatisticsSummaries: S.optional(SensorStatisticsSummaries), NextToken: S.optional(S.String)}) {}
export class StartDataIngestionJobResponse extends S.Class<StartDataIngestionJobResponse>("StartDataIngestionJobResponse")({JobId: S.optional(S.String), Status: S.optional(S.String)}) {}
export class DescribeDataIngestionJobResponse extends S.Class<DescribeDataIngestionJobResponse>("DescribeDataIngestionJobResponse")({JobId: S.optional(S.String), DatasetArn: S.optional(S.String), IngestionInputConfiguration: S.optional(IngestionInputConfiguration), RoleArn: S.optional(S.String), CreatedAt: S.optional(S.Date), Status: S.optional(S.String), FailedReason: S.optional(S.String), DataQualitySummary: S.optional(DataQualitySummary), IngestedFilesSummary: S.optional(IngestedFilesSummary), StatusDetail: S.optional(S.String), IngestedDataSize: S.optional(S.Number), DataStartTime: S.optional(S.Date), DataEndTime: S.optional(S.Date), SourceDatasetArn: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Deletes a retraining scheduler from a model. The retraining scheduler must be in the
 * `STOPPED` status.
 */export const deleteRetrainingScheduler = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DeleteRetrainingScheduler" }, DeleteRetrainingSchedulerRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a specific tag from a given resource. The tag is specified by its key.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an inference scheduler.
 */export const updateInferenceScheduler = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler" }, UpdateInferenceSchedulerRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the label group.
 */export const updateLabelGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.UpdateLabelGroup" }, UpdateLabelGroupRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a model in the account.
 */export const updateModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.UpdateModel" }, UpdateModelRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a retraining scheduler.
 */export const updateRetrainingScheduler = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.UpdateRetrainingScheduler" }, UpdateRetrainingSchedulerRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a label for an event.
 */export const createLabel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.CreateLabel" }, CreateLabelRequest, CreateLabelResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a group of labels.
 */export const createLabelGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.CreateLabelGroup" }, CreateLabelGroupRequest, CreateLabelGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a retraining scheduler on the specified model.
 */export const createRetrainingScheduler = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.CreateRetrainingScheduler" }, CreateRetrainingSchedulerRequest, CreateRetrainingSchedulerResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a dataset and associated artifacts. The operation will check to see if any
 * inference scheduler or data ingestion job is currently using the dataset, and if there
 * isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted.
 * This does not affect any models that used this dataset for training and evaluation, but
 * does prevent it from being used in the future.
 */export const deleteDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DeleteDataset" }, DeleteDatasetRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an inference scheduler that has been set up. Prior inference results will not be
 * deleted.
 */export const deleteInferenceScheduler = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler" }, DeleteInferenceSchedulerRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a label.
 */export const deleteLabel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DeleteLabel" }, DeleteLabelRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a group of labels.
 */export const deleteLabelGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DeleteLabelGroup" }, DeleteLabelGroupRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a machine learning model currently available for Amazon Lookout for Equipment. This will prevent it
 * from being used with an inference scheduler, even one that is already set up.
 */export const deleteModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DeleteModel" }, DeleteModelRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the resource policy attached to the resource.
 */export const deleteResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides a JSON description of the data in each time series dataset, including names,
 * column names, and data types.
 */export const describeDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DescribeDataset" }, DescribeDatasetRequest, DescribeDatasetResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Specifies information about the inference scheduler being used, including name, model,
 * status, and associated metadata
 */export const describeInferenceScheduler = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler" }, DescribeInferenceSchedulerRequest, DescribeInferenceSchedulerResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the name of the label.
 */export const describeLabel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DescribeLabel" }, DescribeLabelRequest, DescribeLabelResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the label group.
 */export const describeLabelGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DescribeLabelGroup" }, DescribeLabelGroupRequest, DescribeLabelGroupResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides a JSON containing the overall information about a specific machine learning
 * model, including model name and ARN, dataset, training and evaluation information, status,
 * and so on.
 */export const describeModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DescribeModel" }, DescribeModelRequest, DescribeModelResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides the details of a resource policy attached to a resource.
 */export const describeResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DescribeResourcePolicy" }, DescribeResourcePolicyRequest, DescribeResourcePolicyResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides a description of the retraining scheduler, including information such as the
 * model name and retraining parameters.
 */export const describeRetrainingScheduler = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DescribeRetrainingScheduler" }, DescribeRetrainingSchedulerRequest, DescribeRetrainingSchedulerResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Imports a dataset.
 */export const importDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ImportDataset" }, ImportDatasetRequest, ImportDatasetResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Imports a model that has been trained successfully.
 */export const importModelVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ImportModelVersion" }, ImportModelVersionRequest, ImportModelVersionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the tags for a specified resource, including key and value.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a resource control policy for a given resource.
 */export const putResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts an inference scheduler.
 */export const startInferenceScheduler = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.StartInferenceScheduler" }, StartInferenceSchedulerRequest, StartInferenceSchedulerResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a retraining scheduler.
 */export const startRetrainingScheduler = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.StartRetrainingScheduler" }, StartRetrainingSchedulerRequest, StartRetrainingSchedulerResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops an inference scheduler.
 */export const stopInferenceScheduler = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.StopInferenceScheduler" }, StopInferenceSchedulerRequest, StopInferenceSchedulerResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops a retraining scheduler.
 */export const stopRetrainingScheduler = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.StopRetrainingScheduler" }, StopRetrainingSchedulerRequest, StopRetrainingSchedulerResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a given tag to a resource in your account. A tag is a key-value pair which
 * can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your
 * resources as well as helping you to search and filter by tag. Multiple tags can be added to
 * a resource, either when you create it, or later. Up to 50 tags can be associated with each
 * resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the active model version for a given machine learning model.
 */export const updateActiveModelVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.UpdateActiveModelVersion" }, UpdateActiveModelVersionRequest, UpdateActiveModelVersionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a container for a collection of data being ingested for analysis. The dataset
 * contains the metadata describing where the data is and what the data actually looks like.
 * For example, it contains the location of the data source, the data schema, and other
 * information. A dataset also contains any tags associated with the ingested data.
 */export const createDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.CreateDataset" }, CreateDatasetRequest, CreateDatasetResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a specific machine learning model version.
 */export const describeModelVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DescribeModelVersion" }, DescribeModelVersionRequest, DescribeModelVersionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location
 * of the input data, status, and so on.
 */export const listDataIngestionJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ListDataIngestionJobs" }, ListDataIngestionJobsRequest, ListDataIngestionJobsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all datasets currently available in your account, filtering on the dataset name.
 */export const listDatasets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ListDatasets" }, ListDatasetsRequest, ListDatasetsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all inference events that have been found for the specified inference scheduler.
 */export const listInferenceEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ListInferenceEvents" }, ListInferenceEventsRequest, ListInferenceEventsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all inference executions that have been performed by the specified inference
 * scheduler.
 */export const listInferenceExecutions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ListInferenceExecutions" }, ListInferenceExecutionsRequest, ListInferenceExecutionsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of all inference schedulers currently available for your account.
 */export const listInferenceSchedulers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ListInferenceSchedulers" }, ListInferenceSchedulersRequest, ListInferenceSchedulersResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the label groups.
 */export const listLabelGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ListLabelGroups" }, ListLabelGroupsRequest, ListLabelGroupsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides a list of labels.
 */export const listLabels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ListLabels" }, ListLabelsRequest, ListLabelsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Generates a list of all models in the account, including model name and ARN, dataset,
 * and status.
 */export const listModels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ListModels" }, ListModelsRequest, ListModelsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Generates a list of all model versions for a given model, including the model version,
 * model version ARN, and status. To list a subset of versions, use the
 * `MaxModelVersion` and `MinModelVersion` fields.
 */export const listModelVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ListModelVersions" }, ListModelVersionsRequest, ListModelVersionsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all retraining schedulers in your account, filtering by model name prefix and
 * status.
 */export const listRetrainingSchedulers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ListRetrainingSchedulers" }, ListRetrainingSchedulersRequest, ListRetrainingSchedulersResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a scheduled inference. Scheduling an inference is setting up a continuous
 * real-time inference plan to analyze new measurement data. When setting up the schedule, you
 * provide an S3 bucket location for the input data, assign it a delimiter between separate
 * entries in the data, set an offset delay if desired, and set the frequency of inferencing.
 * You must also provide an S3 bucket location for the output data.
 */export const createInferenceScheduler = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.CreateInferenceScheduler" }, CreateInferenceSchedulerRequest, CreateInferenceSchedulerResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a machine learning model for data inference.
 * 
 * 
 * A machine-learning (ML) model is a mathematical model that finds patterns in your data.
 * In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal
 * behavior that could be potential equipment failure (or maintenance events). The models are
 * made by analyzing normal data and abnormalities in machine behavior that have already
 * occurred.
 * 
 * 
 * Your model is trained using a portion of the data from your dataset and uses that data
 * to learn patterns of normal behavior and abnormal patterns that lead to equipment failure.
 * Another portion of the data is used to evaluate the model's accuracy.
 */export const createModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.CreateModel" }, CreateModelRequest, CreateModelResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists statistics about the data collected for each of the sensors that have been
 * successfully ingested in the particular dataset. Can also be used to retreive Sensor
 * Statistics for a previous ingestion job.
 */export const listSensorStatistics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.ListSensorStatistics" }, ListSensorStatisticsRequest, ListSensorStatisticsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a data ingestion job. Amazon Lookout for Equipment returns the job status.
 */export const startDataIngestionJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.StartDataIngestionJob" }, StartDataIngestionJobRequest, StartDataIngestionJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides information on a specific data ingestion job such as creation time, dataset
 * ARN, and status.
 */export const describeDataIngestionJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-12-15", uri: "/", method: "POST", sdkId: "LookoutEquipment", sigV4ServiceName: "lookoutequipment", name: "AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob" }, DescribeDataIngestionJobRequest, DescribeDataIngestionJobResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

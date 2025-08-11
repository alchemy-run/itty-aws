import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class MachineLearning extends AWSServiceClient {
  addTags(
    input: AddTagsInput,
  ): Effect.Effect<
    AddTagsOutput,
    | InternalServerException
    | InvalidInputException
    | InvalidTagException
    | ResourceNotFoundException
    | TagLimitExceededException
    | CommonAwsError
  >;
  createBatchPrediction(
    input: CreateBatchPredictionInput,
  ): Effect.Effect<
    CreateBatchPredictionOutput,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidInputException
    | CommonAwsError
  >;
  createDataSourceFromRDS(
    input: CreateDataSourceFromRDSInput,
  ): Effect.Effect<
    CreateDataSourceFromRDSOutput,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidInputException
    | CommonAwsError
  >;
  createDataSourceFromRedshift(
    input: CreateDataSourceFromRedshiftInput,
  ): Effect.Effect<
    CreateDataSourceFromRedshiftOutput,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidInputException
    | CommonAwsError
  >;
  createDataSourceFromS3(
    input: CreateDataSourceFromS3Input,
  ): Effect.Effect<
    CreateDataSourceFromS3Output,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidInputException
    | CommonAwsError
  >;
  createEvaluation(
    input: CreateEvaluationInput,
  ): Effect.Effect<
    CreateEvaluationOutput,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidInputException
    | CommonAwsError
  >;
  createMLModel(
    input: CreateMLModelInput,
  ): Effect.Effect<
    CreateMLModelOutput,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidInputException
    | CommonAwsError
  >;
  createRealtimeEndpoint(
    input: CreateRealtimeEndpointInput,
  ): Effect.Effect<
    CreateRealtimeEndpointOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteBatchPrediction(
    input: DeleteBatchPredictionInput,
  ): Effect.Effect<
    DeleteBatchPredictionOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteDataSource(
    input: DeleteDataSourceInput,
  ): Effect.Effect<
    DeleteDataSourceOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteEvaluation(
    input: DeleteEvaluationInput,
  ): Effect.Effect<
    DeleteEvaluationOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteMLModel(
    input: DeleteMLModelInput,
  ): Effect.Effect<
    DeleteMLModelOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteRealtimeEndpoint(
    input: DeleteRealtimeEndpointInput,
  ): Effect.Effect<
    DeleteRealtimeEndpointOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteTags(
    input: DeleteTagsInput,
  ): Effect.Effect<
    DeleteTagsOutput,
    | InternalServerException
    | InvalidInputException
    | InvalidTagException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeBatchPredictions(
    input: DescribeBatchPredictionsInput,
  ): Effect.Effect<
    DescribeBatchPredictionsOutput,
    InternalServerException | InvalidInputException | CommonAwsError
  >;
  describeDataSources(
    input: DescribeDataSourcesInput,
  ): Effect.Effect<
    DescribeDataSourcesOutput,
    InternalServerException | InvalidInputException | CommonAwsError
  >;
  describeEvaluations(
    input: DescribeEvaluationsInput,
  ): Effect.Effect<
    DescribeEvaluationsOutput,
    InternalServerException | InvalidInputException | CommonAwsError
  >;
  describeMLModels(
    input: DescribeMLModelsInput,
  ): Effect.Effect<
    DescribeMLModelsOutput,
    InternalServerException | InvalidInputException | CommonAwsError
  >;
  describeTags(
    input: DescribeTagsInput,
  ): Effect.Effect<
    DescribeTagsOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getBatchPrediction(
    input: GetBatchPredictionInput,
  ): Effect.Effect<
    GetBatchPredictionOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getDataSource(
    input: GetDataSourceInput,
  ): Effect.Effect<
    GetDataSourceOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getEvaluation(
    input: GetEvaluationInput,
  ): Effect.Effect<
    GetEvaluationOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getMLModel(
    input: GetMLModelInput,
  ): Effect.Effect<
    GetMLModelOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  predict(
    input: PredictInput,
  ): Effect.Effect<
    PredictOutput,
    | InternalServerException
    | InvalidInputException
    | LimitExceededException
    | PredictorNotMountedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateBatchPrediction(
    input: UpdateBatchPredictionInput,
  ): Effect.Effect<
    UpdateBatchPredictionOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateDataSource(
    input: UpdateDataSourceInput,
  ): Effect.Effect<
    UpdateDataSourceOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateEvaluation(
    input: UpdateEvaluationInput,
  ): Effect.Effect<
    UpdateEvaluationOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateMLModel(
    input: UpdateMLModelInput,
  ): Effect.Effect<
    UpdateMLModelOutput,
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export interface AddTagsInput {
  Tags: Array<Tag>;
  ResourceId: string;
  ResourceType: TaggableResourceType;
}
export interface AddTagsOutput {
  ResourceId?: string;
  ResourceType?: TaggableResourceType;
}
export type Algorithm = "SGD";
export type AwsUserArn = string;

export interface BatchPrediction {
  BatchPredictionId?: string;
  MLModelId?: string;
  BatchPredictionDataSourceId?: string;
  InputDataLocationS3?: string;
  CreatedByIamUser?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Name?: string;
  Status?: EntityStatus;
  OutputUri?: string;
  Message?: string;
  ComputeTime?: number;
  FinishedAt?: Date | string;
  StartedAt?: Date | string;
  TotalRecordCount?: number;
  InvalidRecordCount?: number;
}
export type BatchPredictionFilterVariable =
  | "CREATED_AT"
  | "LAST_UPDATED_AT"
  | "STATUS"
  | "NAME"
  | "IAM_USER"
  | "ML_MODEL_ID"
  | "DATASOURCE_ID"
  | "DATA_URI";
export type BatchPredictions = Array<BatchPrediction>;
export type ComparatorValue = string;

export type ComputeStatistics = boolean;

export interface CreateBatchPredictionInput {
  BatchPredictionId: string;
  BatchPredictionName?: string;
  MLModelId: string;
  BatchPredictionDataSourceId: string;
  OutputUri: string;
}
export interface CreateBatchPredictionOutput {
  BatchPredictionId?: string;
}
export interface CreateDataSourceFromRDSInput {
  DataSourceId: string;
  DataSourceName?: string;
  RDSData: RDSDataSpec;
  RoleARN: string;
  ComputeStatistics?: boolean;
}
export interface CreateDataSourceFromRDSOutput {
  DataSourceId?: string;
}
export interface CreateDataSourceFromRedshiftInput {
  DataSourceId: string;
  DataSourceName?: string;
  DataSpec: RedshiftDataSpec;
  RoleARN: string;
  ComputeStatistics?: boolean;
}
export interface CreateDataSourceFromRedshiftOutput {
  DataSourceId?: string;
}
export interface CreateDataSourceFromS3Input {
  DataSourceId: string;
  DataSourceName?: string;
  DataSpec: S3DataSpec;
  ComputeStatistics?: boolean;
}
export interface CreateDataSourceFromS3Output {
  DataSourceId?: string;
}
export interface CreateEvaluationInput {
  EvaluationId: string;
  EvaluationName?: string;
  MLModelId: string;
  EvaluationDataSourceId: string;
}
export interface CreateEvaluationOutput {
  EvaluationId?: string;
}
export interface CreateMLModelInput {
  MLModelId: string;
  MLModelName?: string;
  MLModelType: MLModelType;
  Parameters?: Record<string, string>;
  TrainingDataSourceId: string;
  Recipe?: string;
  RecipeUri?: string;
}
export interface CreateMLModelOutput {
  MLModelId?: string;
}
export interface CreateRealtimeEndpointInput {
  MLModelId: string;
}
export interface CreateRealtimeEndpointOutput {
  MLModelId?: string;
  RealtimeEndpointInfo?: RealtimeEndpointInfo;
}
export type DataRearrangement = string;

export type DataSchema = string;

export interface DataSource {
  DataSourceId?: string;
  DataLocationS3?: string;
  DataRearrangement?: string;
  CreatedByIamUser?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  DataSizeInBytes?: number;
  NumberOfFiles?: number;
  Name?: string;
  Status?: EntityStatus;
  Message?: string;
  RedshiftMetadata?: RedshiftMetadata;
  RDSMetadata?: RDSMetadata;
  RoleARN?: string;
  ComputeStatistics?: boolean;
  ComputeTime?: number;
  FinishedAt?: Date | string;
  StartedAt?: Date | string;
}
export type DataSourceFilterVariable =
  | "CREATED_AT"
  | "LAST_UPDATED_AT"
  | "STATUS"
  | "NAME"
  | "DATA_URI"
  | "IAM_USER";
export type DataSources = Array<DataSource>;
export interface DeleteBatchPredictionInput {
  BatchPredictionId: string;
}
export interface DeleteBatchPredictionOutput {
  BatchPredictionId?: string;
}
export interface DeleteDataSourceInput {
  DataSourceId: string;
}
export interface DeleteDataSourceOutput {
  DataSourceId?: string;
}
export interface DeleteEvaluationInput {
  EvaluationId: string;
}
export interface DeleteEvaluationOutput {
  EvaluationId?: string;
}
export interface DeleteMLModelInput {
  MLModelId: string;
}
export interface DeleteMLModelOutput {
  MLModelId?: string;
}
export interface DeleteRealtimeEndpointInput {
  MLModelId: string;
}
export interface DeleteRealtimeEndpointOutput {
  MLModelId?: string;
  RealtimeEndpointInfo?: RealtimeEndpointInfo;
}
export interface DeleteTagsInput {
  TagKeys: Array<string>;
  ResourceId: string;
  ResourceType: TaggableResourceType;
}
export interface DeleteTagsOutput {
  ResourceId?: string;
  ResourceType?: TaggableResourceType;
}
export interface DescribeBatchPredictionsInput {
  FilterVariable?: BatchPredictionFilterVariable;
  EQ?: string;
  GT?: string;
  LT?: string;
  GE?: string;
  LE?: string;
  NE?: string;
  Prefix?: string;
  SortOrder?: SortOrder;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeBatchPredictionsOutput {
  Results?: Array<BatchPrediction>;
  NextToken?: string;
}
export interface DescribeDataSourcesInput {
  FilterVariable?: DataSourceFilterVariable;
  EQ?: string;
  GT?: string;
  LT?: string;
  GE?: string;
  LE?: string;
  NE?: string;
  Prefix?: string;
  SortOrder?: SortOrder;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeDataSourcesOutput {
  Results?: Array<DataSource>;
  NextToken?: string;
}
export interface DescribeEvaluationsInput {
  FilterVariable?: EvaluationFilterVariable;
  EQ?: string;
  GT?: string;
  LT?: string;
  GE?: string;
  LE?: string;
  NE?: string;
  Prefix?: string;
  SortOrder?: SortOrder;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeEvaluationsOutput {
  Results?: Array<Evaluation>;
  NextToken?: string;
}
export interface DescribeMLModelsInput {
  FilterVariable?: MLModelFilterVariable;
  EQ?: string;
  GT?: string;
  LT?: string;
  GE?: string;
  LE?: string;
  NE?: string;
  Prefix?: string;
  SortOrder?: SortOrder;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeMLModelsOutput {
  Results?: Array<MLModel>;
  NextToken?: string;
}
export interface DescribeTagsInput {
  ResourceId: string;
  ResourceType: TaggableResourceType;
}
export interface DescribeTagsOutput {
  ResourceId?: string;
  ResourceType?: TaggableResourceType;
  Tags?: Array<Tag>;
}
export type DetailsAttributes = "PREDICTIVE_MODEL_TYPE" | "ALGORITHM";
export type DetailsMap = Record<DetailsAttributes, string>;
export type DetailsValue = string;

export type EDPPipelineId = string;

export type EDPResourceRole = string;

export type EDPSecurityGroupId = string;

export type EDPSecurityGroupIds = Array<string>;
export type EDPServiceRole = string;

export type EDPSubnetId = string;

export type EntityId = string;

export type EntityName = string;

export type EntityStatus =
  | "PENDING"
  | "INPROGRESS"
  | "FAILED"
  | "COMPLETED"
  | "DELETED";
export type EpochTime = Date | string;

export type ErrorCode = number;

export type ErrorMessage = string;

export interface Evaluation {
  EvaluationId?: string;
  MLModelId?: string;
  EvaluationDataSourceId?: string;
  InputDataLocationS3?: string;
  CreatedByIamUser?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Name?: string;
  Status?: EntityStatus;
  PerformanceMetrics?: PerformanceMetrics;
  Message?: string;
  ComputeTime?: number;
  FinishedAt?: Date | string;
  StartedAt?: Date | string;
}
export type EvaluationFilterVariable =
  | "CREATED_AT"
  | "LAST_UPDATED_AT"
  | "STATUS"
  | "NAME"
  | "IAM_USER"
  | "ML_MODEL_ID"
  | "DATASOURCE_ID"
  | "DATA_URI";
export type Evaluations = Array<Evaluation>;
export type floatLabel = number;

export interface GetBatchPredictionInput {
  BatchPredictionId: string;
}
export interface GetBatchPredictionOutput {
  BatchPredictionId?: string;
  MLModelId?: string;
  BatchPredictionDataSourceId?: string;
  InputDataLocationS3?: string;
  CreatedByIamUser?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Name?: string;
  Status?: EntityStatus;
  OutputUri?: string;
  LogUri?: string;
  Message?: string;
  ComputeTime?: number;
  FinishedAt?: Date | string;
  StartedAt?: Date | string;
  TotalRecordCount?: number;
  InvalidRecordCount?: number;
}
export interface GetDataSourceInput {
  DataSourceId: string;
  Verbose?: boolean;
}
export interface GetDataSourceOutput {
  DataSourceId?: string;
  DataLocationS3?: string;
  DataRearrangement?: string;
  CreatedByIamUser?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  DataSizeInBytes?: number;
  NumberOfFiles?: number;
  Name?: string;
  Status?: EntityStatus;
  LogUri?: string;
  Message?: string;
  RedshiftMetadata?: RedshiftMetadata;
  RDSMetadata?: RDSMetadata;
  RoleARN?: string;
  ComputeStatistics?: boolean;
  ComputeTime?: number;
  FinishedAt?: Date | string;
  StartedAt?: Date | string;
  DataSourceSchema?: string;
}
export interface GetEvaluationInput {
  EvaluationId: string;
}
export interface GetEvaluationOutput {
  EvaluationId?: string;
  MLModelId?: string;
  EvaluationDataSourceId?: string;
  InputDataLocationS3?: string;
  CreatedByIamUser?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Name?: string;
  Status?: EntityStatus;
  PerformanceMetrics?: PerformanceMetrics;
  LogUri?: string;
  Message?: string;
  ComputeTime?: number;
  FinishedAt?: Date | string;
  StartedAt?: Date | string;
}
export interface GetMLModelInput {
  MLModelId: string;
  Verbose?: boolean;
}
export interface GetMLModelOutput {
  MLModelId?: string;
  TrainingDataSourceId?: string;
  CreatedByIamUser?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Name?: string;
  Status?: EntityStatus;
  SizeInBytes?: number;
  EndpointInfo?: RealtimeEndpointInfo;
  TrainingParameters?: Record<string, string>;
  InputDataLocationS3?: string;
  MLModelType?: MLModelType;
  ScoreThreshold?: number;
  ScoreThresholdLastUpdatedAt?: Date | string;
  LogUri?: string;
  Message?: string;
  ComputeTime?: number;
  FinishedAt?: Date | string;
  StartedAt?: Date | string;
  Recipe?: string;
  Schema?: string;
}
export declare class IdempotentParameterMismatchException extends EffectData.TaggedError(
  "IdempotentParameterMismatchException",
)<{
  readonly message?: string;
  readonly code?: number;
}> {}
export type IntegerType = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
  readonly code?: number;
}> {}
export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly message?: string;
  readonly code?: number;
}> {}
export declare class InvalidTagException extends EffectData.TaggedError(
  "InvalidTagException",
)<{
  readonly message?: string;
}> {}
export type Label = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
  readonly code?: number;
}> {}
export type LongType = number;

export type Message = string;

export interface MLModel {
  MLModelId?: string;
  TrainingDataSourceId?: string;
  CreatedByIamUser?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Name?: string;
  Status?: EntityStatus;
  SizeInBytes?: number;
  EndpointInfo?: RealtimeEndpointInfo;
  TrainingParameters?: Record<string, string>;
  InputDataLocationS3?: string;
  Algorithm?: Algorithm;
  MLModelType?: MLModelType;
  ScoreThreshold?: number;
  ScoreThresholdLastUpdatedAt?: Date | string;
  Message?: string;
  ComputeTime?: number;
  FinishedAt?: Date | string;
  StartedAt?: Date | string;
}
export type MLModelFilterVariable =
  | "CREATED_AT"
  | "LAST_UPDATED_AT"
  | "STATUS"
  | "NAME"
  | "IAM_USER"
  | "TRAINING_DATASOURCE_ID"
  | "REAL_TIME_ENDPOINT_STATUS"
  | "ML_MODEL_TYPE"
  | "ALGORITHM"
  | "TRAINING_DATA_URI";
export type MLModelName = string;

export type MLModels = Array<MLModel>;
export type MLModelType = "REGRESSION" | "BINARY" | "MULTICLASS";
export type PageLimit = number;

export interface PerformanceMetrics {
  Properties?: Record<string, string>;
}
export type PerformanceMetricsProperties = Record<string, string>;
export type PerformanceMetricsPropertyKey = string;

export type PerformanceMetricsPropertyValue = string;

export interface PredictInput {
  MLModelId: string;
  Record: Record<string, string>;
  PredictEndpoint: string;
}
export interface Prediction {
  predictedLabel?: string;
  predictedValue?: number;
  predictedScores?: Record<string, number>;
  details?: Record<DetailsAttributes, string>;
}
export declare class PredictorNotMountedException extends EffectData.TaggedError(
  "PredictorNotMountedException",
)<{
  readonly message?: string;
}> {}
export interface PredictOutput {
  Prediction?: Prediction;
}
export type PresignedS3Url = string;

export interface RDSDatabase {
  InstanceIdentifier: string;
  DatabaseName: string;
}
export interface RDSDatabaseCredentials {
  Username: string;
  Password: string;
}
export type RDSDatabaseName = string;

export type RDSDatabasePassword = string;

export type RDSDatabaseUsername = string;

export interface RDSDataSpec {
  DatabaseInformation: RDSDatabase;
  SelectSqlQuery: string;
  DatabaseCredentials: RDSDatabaseCredentials;
  S3StagingLocation: string;
  DataRearrangement?: string;
  DataSchema?: string;
  DataSchemaUri?: string;
  ResourceRole: string;
  ServiceRole: string;
  SubnetId: string;
  SecurityGroupIds: Array<string>;
}
export type RDSInstanceIdentifier = string;

export interface RDSMetadata {
  Database?: RDSDatabase;
  DatabaseUserName?: string;
  SelectSqlQuery?: string;
  ResourceRole?: string;
  ServiceRole?: string;
  DataPipelineId?: string;
}
export type RDSSelectSqlQuery = string;

export interface RealtimeEndpointInfo {
  PeakRequestsPerSecond?: number;
  CreatedAt?: Date | string;
  EndpointUrl?: string;
  EndpointStatus?: RealtimeEndpointStatus;
}
export type RealtimeEndpointStatus = "NONE" | "READY" | "UPDATING" | "FAILED";
export type Recipe = string;

export type MachineLearningRecord = Record<string, string>;
export type RedshiftClusterIdentifier = string;

export interface RedshiftDatabase {
  DatabaseName: string;
  ClusterIdentifier: string;
}
export interface RedshiftDatabaseCredentials {
  Username: string;
  Password: string;
}
export type RedshiftDatabaseName = string;

export type RedshiftDatabasePassword = string;

export type RedshiftDatabaseUsername = string;

export interface RedshiftDataSpec {
  DatabaseInformation: RedshiftDatabase;
  SelectSqlQuery: string;
  DatabaseCredentials: RedshiftDatabaseCredentials;
  S3StagingLocation: string;
  DataRearrangement?: string;
  DataSchema?: string;
  DataSchemaUri?: string;
}
export interface RedshiftMetadata {
  RedshiftDatabase?: RedshiftDatabase;
  DatabaseUserName?: string;
  SelectSqlQuery?: string;
}
export type RedshiftSelectSqlQuery = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly code?: number;
}> {}
export type RoleARN = string;

export interface S3DataSpec {
  DataLocationS3: string;
  DataRearrangement?: string;
  DataSchema?: string;
  DataSchemaLocationS3?: string;
}
export type S3Url = string;

export type ScoreThreshold = number;

export type ScoreValue = number;

export type ScoreValuePerLabelMap = Record<string, number>;
export type SortOrder = "ASC" | "DSC";
export type StringType = string;

export interface Tag {
  Key?: string;
  Value?: string;
}
export type TaggableResourceType =
  | "BATCH_PREDICTION"
  | "DATASOURCE"
  | "EVALUATION"
  | "ML_MODEL";
export type TagKey = string;

export type TagKeyList = Array<string>;
export declare class TagLimitExceededException extends EffectData.TaggedError(
  "TagLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type TagList = Array<Tag>;
export type TagValue = string;

export type TrainingParameters = Record<string, string>;
export interface UpdateBatchPredictionInput {
  BatchPredictionId: string;
  BatchPredictionName: string;
}
export interface UpdateBatchPredictionOutput {
  BatchPredictionId?: string;
}
export interface UpdateDataSourceInput {
  DataSourceId: string;
  DataSourceName: string;
}
export interface UpdateDataSourceOutput {
  DataSourceId?: string;
}
export interface UpdateEvaluationInput {
  EvaluationId: string;
  EvaluationName: string;
}
export interface UpdateEvaluationOutput {
  EvaluationId?: string;
}
export interface UpdateMLModelInput {
  MLModelId: string;
  MLModelName?: string;
  ScoreThreshold?: number;
}
export interface UpdateMLModelOutput {
  MLModelId?: string;
}
export type VariableName = string;

export type VariableValue = string;

export type Verbose = boolean;

export type VipURL = string;

export declare namespace AddTags {
  export type Input = AddTagsInput;
  export type Output = AddTagsOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | InvalidTagException
    | ResourceNotFoundException
    | TagLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateBatchPrediction {
  export type Input = CreateBatchPredictionInput;
  export type Output = CreateBatchPredictionOutput;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace CreateDataSourceFromRDS {
  export type Input = CreateDataSourceFromRDSInput;
  export type Output = CreateDataSourceFromRDSOutput;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace CreateDataSourceFromRedshift {
  export type Input = CreateDataSourceFromRedshiftInput;
  export type Output = CreateDataSourceFromRedshiftOutput;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace CreateDataSourceFromS3 {
  export type Input = CreateDataSourceFromS3Input;
  export type Output = CreateDataSourceFromS3Output;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace CreateEvaluation {
  export type Input = CreateEvaluationInput;
  export type Output = CreateEvaluationOutput;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace CreateMLModel {
  export type Input = CreateMLModelInput;
  export type Output = CreateMLModelOutput;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace CreateRealtimeEndpoint {
  export type Input = CreateRealtimeEndpointInput;
  export type Output = CreateRealtimeEndpointOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteBatchPrediction {
  export type Input = DeleteBatchPredictionInput;
  export type Output = DeleteBatchPredictionOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteDataSource {
  export type Input = DeleteDataSourceInput;
  export type Output = DeleteDataSourceOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteEvaluation {
  export type Input = DeleteEvaluationInput;
  export type Output = DeleteEvaluationOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteMLModel {
  export type Input = DeleteMLModelInput;
  export type Output = DeleteMLModelOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteRealtimeEndpoint {
  export type Input = DeleteRealtimeEndpointInput;
  export type Output = DeleteRealtimeEndpointOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteTags {
  export type Input = DeleteTagsInput;
  export type Output = DeleteTagsOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | InvalidTagException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeBatchPredictions {
  export type Input = DescribeBatchPredictionsInput;
  export type Output = DescribeBatchPredictionsOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DescribeDataSources {
  export type Input = DescribeDataSourcesInput;
  export type Output = DescribeDataSourcesOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DescribeEvaluations {
  export type Input = DescribeEvaluationsInput;
  export type Output = DescribeEvaluationsOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DescribeMLModels {
  export type Input = DescribeMLModelsInput;
  export type Output = DescribeMLModelsOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DescribeTags {
  export type Input = DescribeTagsInput;
  export type Output = DescribeTagsOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetBatchPrediction {
  export type Input = GetBatchPredictionInput;
  export type Output = GetBatchPredictionOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetDataSource {
  export type Input = GetDataSourceInput;
  export type Output = GetDataSourceOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetEvaluation {
  export type Input = GetEvaluationInput;
  export type Output = GetEvaluationOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetMLModel {
  export type Input = GetMLModelInput;
  export type Output = GetMLModelOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace Predict {
  export type Input = PredictInput;
  export type Output = PredictOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | LimitExceededException
    | PredictorNotMountedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateBatchPrediction {
  export type Input = UpdateBatchPredictionInput;
  export type Output = UpdateBatchPredictionOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateDataSource {
  export type Input = UpdateDataSourceInput;
  export type Output = UpdateDataSourceOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateEvaluation {
  export type Input = UpdateEvaluationInput;
  export type Output = UpdateEvaluationOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateMLModel {
  export type Input = UpdateMLModelInput;
  export type Output = UpdateMLModelOutput;
  export type Error =
    | InternalServerException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

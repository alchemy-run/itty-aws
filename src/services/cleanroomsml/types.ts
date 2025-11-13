import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class CleanRoomsML extends AWSServiceClient {
  listCollaborationConfiguredModelAlgorithmAssociations(
    input: ListCollaborationConfiguredModelAlgorithmAssociationsRequest,
  ): Effect.Effect<
    ListCollaborationConfiguredModelAlgorithmAssociationsResponse,
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCollaborationMLInputChannels(
    input: ListCollaborationMLInputChannelsRequest,
  ): Effect.Effect<
    ListCollaborationMLInputChannelsResponse,
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCollaborationTrainedModelExportJobs(
    input: ListCollaborationTrainedModelExportJobsRequest,
  ): Effect.Effect<
    ListCollaborationTrainedModelExportJobsResponse,
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCollaborationTrainedModelInferenceJobs(
    input: ListCollaborationTrainedModelInferenceJobsRequest,
  ): Effect.Effect<
    ListCollaborationTrainedModelInferenceJobsResponse,
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCollaborationTrainedModels(
    input: ListCollaborationTrainedModelsRequest,
  ): Effect.Effect<
    ListCollaborationTrainedModelsResponse,
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  cancelTrainedModel(
    input: CancelTrainedModelRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelTrainedModelInferenceJob(
    input: CancelTrainedModelInferenceJobRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAudienceModel(
    input: CreateAudienceModelRequest,
  ): Effect.Effect<
    CreateAudienceModelResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createConfiguredAudienceModel(
    input: CreateConfiguredAudienceModelRequest,
  ): Effect.Effect<
    CreateConfiguredAudienceModelResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createConfiguredModelAlgorithm(
    input: CreateConfiguredModelAlgorithmRequest,
  ): Effect.Effect<
    CreateConfiguredModelAlgorithmResponse,
    | AccessDeniedException
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createConfiguredModelAlgorithmAssociation(
    input: CreateConfiguredModelAlgorithmAssociationRequest,
  ): Effect.Effect<
    CreateConfiguredModelAlgorithmAssociationResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createMLInputChannel(
    input: CreateMLInputChannelRequest,
  ): Effect.Effect<
    CreateMLInputChannelResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createTrainedModel(
    input: CreateTrainedModelRequest,
  ): Effect.Effect<
    CreateTrainedModelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createTrainingDataset(
    input: CreateTrainingDatasetRequest,
  ): Effect.Effect<
    CreateTrainingDatasetResponse,
    | AccessDeniedException
    | ConflictException
    | ValidationException
    | CommonAwsError
  >;
  deleteAudienceGenerationJob(
    input: DeleteAudienceGenerationJobRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteAudienceModel(
    input: DeleteAudienceModelRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteConfiguredAudienceModel(
    input: DeleteConfiguredAudienceModelRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteConfiguredAudienceModelPolicy(
    input: DeleteConfiguredAudienceModelPolicyRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteConfiguredModelAlgorithm(
    input: DeleteConfiguredModelAlgorithmRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteConfiguredModelAlgorithmAssociation(
    input: DeleteConfiguredModelAlgorithmAssociationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteMLConfiguration(
    input: DeleteMLConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteMLInputChannelData(
    input: DeleteMLInputChannelDataRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteTrainedModelOutput(
    input: DeleteTrainedModelOutputRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteTrainingDataset(
    input: DeleteTrainingDatasetRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getAudienceGenerationJob(
    input: GetAudienceGenerationJobRequest,
  ): Effect.Effect<
    GetAudienceGenerationJobResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getAudienceModel(
    input: GetAudienceModelRequest,
  ): Effect.Effect<
    GetAudienceModelResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getCollaborationConfiguredModelAlgorithmAssociation(
    input: GetCollaborationConfiguredModelAlgorithmAssociationRequest,
  ): Effect.Effect<
    GetCollaborationConfiguredModelAlgorithmAssociationResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCollaborationMLInputChannel(
    input: GetCollaborationMLInputChannelRequest,
  ): Effect.Effect<
    GetCollaborationMLInputChannelResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCollaborationTrainedModel(
    input: GetCollaborationTrainedModelRequest,
  ): Effect.Effect<
    GetCollaborationTrainedModelResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getConfiguredAudienceModel(
    input: GetConfiguredAudienceModelRequest,
  ): Effect.Effect<
    GetConfiguredAudienceModelResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getConfiguredAudienceModelPolicy(
    input: GetConfiguredAudienceModelPolicyRequest,
  ): Effect.Effect<
    GetConfiguredAudienceModelPolicyResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getConfiguredModelAlgorithm(
    input: GetConfiguredModelAlgorithmRequest,
  ): Effect.Effect<
    GetConfiguredModelAlgorithmResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getConfiguredModelAlgorithmAssociation(
    input: GetConfiguredModelAlgorithmAssociationRequest,
  ): Effect.Effect<
    GetConfiguredModelAlgorithmAssociationResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMLConfiguration(
    input: GetMLConfigurationRequest,
  ): Effect.Effect<
    GetMLConfigurationResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMLInputChannel(
    input: GetMLInputChannelRequest,
  ): Effect.Effect<
    GetMLInputChannelResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTrainedModel(
    input: GetTrainedModelRequest,
  ): Effect.Effect<
    GetTrainedModelResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTrainedModelInferenceJob(
    input: GetTrainedModelInferenceJobRequest,
  ): Effect.Effect<
    GetTrainedModelInferenceJobResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTrainingDataset(
    input: GetTrainingDatasetRequest,
  ): Effect.Effect<
    GetTrainingDatasetResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listAudienceExportJobs(
    input: ListAudienceExportJobsRequest,
  ): Effect.Effect<
    ListAudienceExportJobsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listAudienceGenerationJobs(
    input: ListAudienceGenerationJobsRequest,
  ): Effect.Effect<
    ListAudienceGenerationJobsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listAudienceModels(
    input: ListAudienceModelsRequest,
  ): Effect.Effect<
    ListAudienceModelsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listConfiguredAudienceModels(
    input: ListConfiguredAudienceModelsRequest,
  ): Effect.Effect<
    ListConfiguredAudienceModelsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listConfiguredModelAlgorithmAssociations(
    input: ListConfiguredModelAlgorithmAssociationsRequest,
  ): Effect.Effect<
    ListConfiguredModelAlgorithmAssociationsResponse,
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listConfiguredModelAlgorithms(
    input: ListConfiguredModelAlgorithmsRequest,
  ): Effect.Effect<
    ListConfiguredModelAlgorithmsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listMLInputChannels(
    input: ListMLInputChannelsRequest,
  ): Effect.Effect<
    ListMLInputChannelsResponse,
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTrainedModelInferenceJobs(
    input: ListTrainedModelInferenceJobsRequest,
  ): Effect.Effect<
    ListTrainedModelInferenceJobsResponse,
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTrainedModelVersions(
    input: ListTrainedModelVersionsRequest,
  ): Effect.Effect<
    ListTrainedModelVersionsResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTrainedModels(
    input: ListTrainedModelsRequest,
  ): Effect.Effect<
    ListTrainedModelsResponse,
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTrainingDatasets(
    input: ListTrainingDatasetsRequest,
  ): Effect.Effect<
    ListTrainingDatasetsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  putConfiguredAudienceModelPolicy(
    input: PutConfiguredAudienceModelPolicyRequest,
  ): Effect.Effect<
    PutConfiguredAudienceModelPolicyResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putMLConfiguration(
    input: PutMLConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startAudienceExportJob(
    input: StartAudienceExportJobRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  startAudienceGenerationJob(
    input: StartAudienceGenerationJobRequest,
  ): Effect.Effect<
    StartAudienceGenerationJobResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startTrainedModelExportJob(
    input: StartTrainedModelExportJobRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startTrainedModelInferenceJob(
    input: StartTrainedModelInferenceJobRequest,
  ): Effect.Effect<
    StartTrainedModelInferenceJobResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateConfiguredAudienceModel(
    input: UpdateConfiguredAudienceModelRequest,
  ): Effect.Effect<
    UpdateConfiguredAudienceModelResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Cleanroomsml extends CleanRoomsML {}

export interface AccessBudget {
  resourceArn: string;
  details: Array<AccessBudgetDetails>;
  aggregateRemainingBudget: number;
}
export interface AccessBudgetDetails {
  startTime: Date | string;
  endTime?: Date | string;
  remainingBudget: number;
  budget: number;
  budgetType: AccessBudgetType;
  autoRefresh?: AutoRefreshMode;
}
export type AccessBudgetDetailsList = Array<AccessBudgetDetails>;
export type AccessBudgets = Array<AccessBudget>;
export type AccessBudgetType =
  | "CALENDAR_DAY"
  | "CALENDAR_MONTH"
  | "CALENDAR_WEEK"
  | "LIFETIME";
export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccountId = string;

export type AccountIdList = Array<string>;
export type AlgorithmImage = string;

export type AnalysisTemplateArn = string;

export interface AudienceDestination {
  s3Destination: S3ConfigMap;
}
export type AudienceExportJobArn = string;

export type AudienceExportJobList = Array<AudienceExportJobSummary>;
export type AudienceExportJobStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE";
export interface AudienceExportJobSummary {
  createTime: Date | string;
  updateTime: Date | string;
  name: string;
  audienceGenerationJobArn: string;
  audienceSize: AudienceSize;
  description?: string;
  status: AudienceExportJobStatus;
  statusDetails?: StatusDetails;
  outputLocation?: string;
}
export type AudienceGenerationJobArn = string;

export interface AudienceGenerationJobDataSource {
  dataSource?: S3ConfigMap;
  roleArn: string;
  sqlParameters?: ProtectedQuerySQLParameters;
  sqlComputeConfiguration?: ComputeConfiguration;
}
export type AudienceGenerationJobList = Array<AudienceGenerationJobSummary>;
export type AudienceGenerationJobStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETE_PENDING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED";
export interface AudienceGenerationJobSummary {
  createTime: Date | string;
  updateTime: Date | string;
  audienceGenerationJobArn: string;
  name: string;
  description?: string;
  status: AudienceGenerationJobStatus;
  configuredAudienceModelArn: string;
  collaborationId?: string;
  startedBy?: string;
}
export type AudienceModelArn = string;

export type AudienceModelList = Array<AudienceModelSummary>;
export type AudienceModelStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETE_PENDING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED";
export interface AudienceModelSummary {
  createTime: Date | string;
  updateTime: Date | string;
  audienceModelArn: string;
  name: string;
  trainingDatasetArn: string;
  status: AudienceModelStatus;
  description?: string;
}
export interface AudienceQualityMetrics {
  relevanceMetrics: Array<RelevanceMetric>;
  recallMetric?: number;
}
export interface AudienceSize {
  type: AudienceSizeType;
  value: number;
}
export type AudienceSizeBins = Array<number>;
export interface AudienceSizeConfig {
  audienceSizeType: AudienceSizeType;
  audienceSizeBins: Array<number>;
}
export type AudienceSizeType = "ABSOLUTE" | "PERCENTAGE";
export type AudienceSizeValue = number;

export type AutoRefreshMode = "ENABLED" | "DISABLED";
export type Budget = number;

export type BudgetedResourceArn = string;

export interface CancelTrainedModelInferenceJobRequest {
  membershipIdentifier: string;
  trainedModelInferenceJobArn: string;
}
export interface CancelTrainedModelRequest {
  membershipIdentifier: string;
  trainedModelArn: string;
  versionIdentifier?: string;
}
export type CollaborationConfiguredModelAlgorithmAssociationList =
  Array<CollaborationConfiguredModelAlgorithmAssociationSummary>;
export interface CollaborationConfiguredModelAlgorithmAssociationSummary {
  createTime: Date | string;
  updateTime: Date | string;
  configuredModelAlgorithmAssociationArn: string;
  name: string;
  description?: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  configuredModelAlgorithmArn: string;
  creatorAccountId: string;
}
export type CollaborationMLInputChannelsList =
  Array<CollaborationMLInputChannelSummary>;
export interface CollaborationMLInputChannelSummary {
  createTime: Date | string;
  updateTime: Date | string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  name: string;
  configuredModelAlgorithmAssociations: Array<string>;
  mlInputChannelArn: string;
  status: MLInputChannelStatus;
  creatorAccountId: string;
  description?: string;
}
export type CollaborationTrainedModelExportJobList =
  Array<CollaborationTrainedModelExportJobSummary>;
export interface CollaborationTrainedModelExportJobSummary {
  createTime: Date | string;
  updateTime: Date | string;
  name: string;
  outputConfiguration: TrainedModelExportOutputConfiguration;
  status: TrainedModelExportJobStatus;
  statusDetails?: StatusDetails;
  description?: string;
  creatorAccountId: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
}
export type CollaborationTrainedModelInferenceJobList =
  Array<CollaborationTrainedModelInferenceJobSummary>;
export interface CollaborationTrainedModelInferenceJobSummary {
  trainedModelInferenceJobArn: string;
  configuredModelAlgorithmAssociationArn?: string;
  membershipIdentifier: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
  collaborationIdentifier: string;
  status: TrainedModelInferenceJobStatus;
  outputConfiguration: InferenceOutputConfiguration;
  name: string;
  description?: string;
  metricsStatus?: MetricsStatus;
  metricsStatusDetails?: string;
  logsStatus?: LogsStatus;
  logsStatusDetails?: string;
  createTime: Date | string;
  updateTime: Date | string;
  creatorAccountId: string;
}
export type CollaborationTrainedModelList =
  Array<CollaborationTrainedModelSummary>;
export interface CollaborationTrainedModelSummary {
  createTime: Date | string;
  updateTime: Date | string;
  trainedModelArn: string;
  name: string;
  versionIdentifier?: string;
  incrementalTrainingDataChannels?: Array<IncrementalTrainingDataChannelOutput>;
  description?: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  status: TrainedModelStatus;
  configuredModelAlgorithmAssociationArn: string;
  creatorAccountId: string;
}
export type ColumnName = string;

export interface ColumnSchema {
  columnName: string;
  columnTypes: Array<ColumnType>;
}
export type ColumnType =
  | "USER_ID"
  | "ITEM_ID"
  | "TIMESTAMP"
  | "CATEGORICAL_FEATURE"
  | "NUMERICAL_FEATURE";
export type ColumnTypeList = Array<ColumnType>;
interface _ComputeConfiguration {
  worker?: WorkerComputeConfiguration;
}

export type ComputeConfiguration = _ComputeConfiguration & {
  worker: WorkerComputeConfiguration;
};
export type ConfiguredAudienceModelArn = string;

export type ConfiguredAudienceModelList = Array<ConfiguredAudienceModelSummary>;
export interface ConfiguredAudienceModelOutputConfig {
  destination: AudienceDestination;
  roleArn: string;
}
export type ConfiguredAudienceModelStatus = "ACTIVE";
export interface ConfiguredAudienceModelSummary {
  createTime: Date | string;
  updateTime: Date | string;
  name: string;
  audienceModelArn: string;
  outputConfig: ConfiguredAudienceModelOutputConfig;
  description?: string;
  configuredAudienceModelArn: string;
  status: ConfiguredAudienceModelStatus;
}
export type ConfiguredModelAlgorithmArn = string;

export type ConfiguredModelAlgorithmAssociationArn = string;

export type ConfiguredModelAlgorithmAssociationArnList = Array<string>;
export type ConfiguredModelAlgorithmAssociationList =
  Array<ConfiguredModelAlgorithmAssociationSummary>;
export interface ConfiguredModelAlgorithmAssociationSummary {
  createTime: Date | string;
  updateTime: Date | string;
  configuredModelAlgorithmAssociationArn: string;
  configuredModelAlgorithmArn: string;
  name: string;
  description?: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
}
export type ConfiguredModelAlgorithmList =
  Array<ConfiguredModelAlgorithmSummary>;
export interface ConfiguredModelAlgorithmSummary {
  createTime: Date | string;
  updateTime: Date | string;
  configuredModelAlgorithmArn: string;
  name: string;
  description?: string;
}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export type ContainerArgument = string;

export type ContainerArguments = Array<string>;
export interface ContainerConfig {
  imageUri: string;
  entrypoint?: Array<string>;
  arguments?: Array<string>;
  metricDefinitions?: Array<MetricDefinition>;
}
export type ContainerEntrypoint = Array<string>;
export type ContainerEntrypointString = string;

export interface CreateAudienceModelRequest {
  trainingDataStartTime?: Date | string;
  trainingDataEndTime?: Date | string;
  name: string;
  trainingDatasetArn: string;
  kmsKeyArn?: string;
  tags?: Record<string, string>;
  description?: string;
}
export interface CreateAudienceModelResponse {
  audienceModelArn: string;
}
export interface CreateConfiguredAudienceModelRequest {
  name: string;
  audienceModelArn: string;
  outputConfig: ConfiguredAudienceModelOutputConfig;
  description?: string;
  sharedAudienceMetrics: Array<SharedAudienceMetrics>;
  minMatchingSeedSize?: number;
  audienceSizeConfig?: AudienceSizeConfig;
  tags?: Record<string, string>;
  childResourceTagOnCreatePolicy?: TagOnCreatePolicy;
}
export interface CreateConfiguredAudienceModelResponse {
  configuredAudienceModelArn: string;
}
export interface CreateConfiguredModelAlgorithmAssociationRequest {
  membershipIdentifier: string;
  configuredModelAlgorithmArn: string;
  name: string;
  description?: string;
  privacyConfiguration?: PrivacyConfiguration;
  tags?: Record<string, string>;
}
export interface CreateConfiguredModelAlgorithmAssociationResponse {
  configuredModelAlgorithmAssociationArn: string;
}
export interface CreateConfiguredModelAlgorithmRequest {
  name: string;
  description?: string;
  roleArn: string;
  trainingContainerConfig?: ContainerConfig;
  inferenceContainerConfig?: InferenceContainerConfig;
  tags?: Record<string, string>;
  kmsKeyArn?: string;
}
export interface CreateConfiguredModelAlgorithmResponse {
  configuredModelAlgorithmArn: string;
}
export interface CreateMLInputChannelRequest {
  membershipIdentifier: string;
  configuredModelAlgorithmAssociations: Array<string>;
  inputChannel: InputChannel;
  name: string;
  retentionInDays: number;
  description?: string;
  kmsKeyArn?: string;
  tags?: Record<string, string>;
}
export interface CreateMLInputChannelResponse {
  mlInputChannelArn: string;
}
export interface CreateTrainedModelRequest {
  membershipIdentifier: string;
  name: string;
  configuredModelAlgorithmAssociationArn: string;
  hyperparameters?: Record<string, string>;
  environment?: Record<string, string>;
  resourceConfig: ResourceConfig;
  stoppingCondition?: StoppingCondition;
  incrementalTrainingDataChannels?: Array<IncrementalTrainingDataChannel>;
  dataChannels: Array<ModelTrainingDataChannel>;
  trainingInputMode?: TrainingInputMode;
  description?: string;
  kmsKeyArn?: string;
  tags?: Record<string, string>;
}
export interface CreateTrainedModelResponse {
  trainedModelArn: string;
  versionIdentifier?: string;
}
export interface CreateTrainingDatasetRequest {
  name: string;
  roleArn: string;
  trainingData: Array<Dataset>;
  tags?: Record<string, string>;
  description?: string;
}
export interface CreateTrainingDatasetResponse {
  trainingDatasetArn: string;
}
export type CustomDataIdentifier = string;

export type CustomDataIdentifierList = Array<string>;
export interface CustomEntityConfig {
  customDataIdentifiers: Array<string>;
}
export interface Dataset {
  type: DatasetType;
  inputConfig: DatasetInputConfig;
}
export interface DatasetInputConfig {
  schema: Array<ColumnSchema>;
  dataSource: DataSource;
}
export type DatasetList = Array<Dataset>;
export type DatasetSchemaList = Array<ColumnSchema>;
export type DatasetType = "INTERACTIONS";
export interface DataSource {
  glueDataSource: GlueDataSource;
}
export interface DeleteAudienceGenerationJobRequest {
  audienceGenerationJobArn: string;
}
export interface DeleteAudienceModelRequest {
  audienceModelArn: string;
}
export interface DeleteConfiguredAudienceModelPolicyRequest {
  configuredAudienceModelArn: string;
}
export interface DeleteConfiguredAudienceModelRequest {
  configuredAudienceModelArn: string;
}
export interface DeleteConfiguredModelAlgorithmAssociationRequest {
  configuredModelAlgorithmAssociationArn: string;
  membershipIdentifier: string;
}
export interface DeleteConfiguredModelAlgorithmRequest {
  configuredModelAlgorithmArn: string;
}
export interface DeleteMLConfigurationRequest {
  membershipIdentifier: string;
}
export interface DeleteMLInputChannelDataRequest {
  mlInputChannelArn: string;
  membershipIdentifier: string;
}
export interface DeleteTrainedModelOutputRequest {
  trainedModelArn: string;
  membershipIdentifier: string;
  versionIdentifier?: string;
}
export interface DeleteTrainingDatasetRequest {
  trainingDatasetArn: string;
}
export interface Destination {
  s3Destination: S3ConfigMap;
}
export type EntityType =
  | "ALL_PERSONALLY_IDENTIFIABLE_INFORMATION"
  | "NUMBERS"
  | "CUSTOM";
export type EntityTypeList = Array<EntityType>;
export type Environment = Record<string, string>;
export interface GetAudienceGenerationJobRequest {
  audienceGenerationJobArn: string;
}
export interface GetAudienceGenerationJobResponse {
  createTime: Date | string;
  updateTime: Date | string;
  audienceGenerationJobArn: string;
  name: string;
  description?: string;
  status: AudienceGenerationJobStatus;
  statusDetails?: StatusDetails;
  configuredAudienceModelArn: string;
  seedAudience?: AudienceGenerationJobDataSource;
  includeSeedInOutput?: boolean;
  collaborationId?: string;
  metrics?: AudienceQualityMetrics;
  startedBy?: string;
  tags?: Record<string, string>;
  protectedQueryIdentifier?: string;
}
export interface GetAudienceModelRequest {
  audienceModelArn: string;
}
export interface GetAudienceModelResponse {
  createTime: Date | string;
  updateTime: Date | string;
  trainingDataStartTime?: Date | string;
  trainingDataEndTime?: Date | string;
  audienceModelArn: string;
  name: string;
  trainingDatasetArn: string;
  status: AudienceModelStatus;
  statusDetails?: StatusDetails;
  kmsKeyArn?: string;
  tags?: Record<string, string>;
  description?: string;
}
export interface GetCollaborationConfiguredModelAlgorithmAssociationRequest {
  configuredModelAlgorithmAssociationArn: string;
  collaborationIdentifier: string;
}
export interface GetCollaborationConfiguredModelAlgorithmAssociationResponse {
  createTime: Date | string;
  updateTime: Date | string;
  configuredModelAlgorithmAssociationArn: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  configuredModelAlgorithmArn: string;
  name: string;
  description?: string;
  creatorAccountId: string;
  privacyConfiguration?: PrivacyConfiguration;
}
export interface GetCollaborationMLInputChannelRequest {
  mlInputChannelArn: string;
  collaborationIdentifier: string;
}
export interface GetCollaborationMLInputChannelResponse {
  membershipIdentifier: string;
  collaborationIdentifier: string;
  mlInputChannelArn: string;
  name: string;
  configuredModelAlgorithmAssociations: Array<string>;
  status: MLInputChannelStatus;
  statusDetails?: StatusDetails;
  retentionInDays: number;
  numberOfRecords?: number;
  privacyBudgets?: PrivacyBudgets;
  description?: string;
  createTime: Date | string;
  updateTime: Date | string;
  creatorAccountId: string;
}
export interface GetCollaborationTrainedModelRequest {
  trainedModelArn: string;
  collaborationIdentifier: string;
  versionIdentifier?: string;
}
export interface GetCollaborationTrainedModelResponse {
  membershipIdentifier: string;
  collaborationIdentifier: string;
  trainedModelArn: string;
  versionIdentifier?: string;
  incrementalTrainingDataChannels?: Array<IncrementalTrainingDataChannelOutput>;
  name: string;
  description?: string;
  status: TrainedModelStatus;
  statusDetails?: StatusDetails;
  configuredModelAlgorithmAssociationArn: string;
  resourceConfig?: ResourceConfig;
  trainingInputMode?: TrainingInputMode;
  stoppingCondition?: StoppingCondition;
  metricsStatus?: MetricsStatus;
  metricsStatusDetails?: string;
  logsStatus?: LogsStatus;
  logsStatusDetails?: string;
  trainingContainerImageDigest?: string;
  createTime: Date | string;
  updateTime: Date | string;
  creatorAccountId: string;
}
export interface GetConfiguredAudienceModelPolicyRequest {
  configuredAudienceModelArn: string;
}
export interface GetConfiguredAudienceModelPolicyResponse {
  configuredAudienceModelArn: string;
  configuredAudienceModelPolicy: string;
  policyHash: string;
}
export interface GetConfiguredAudienceModelRequest {
  configuredAudienceModelArn: string;
}
export interface GetConfiguredAudienceModelResponse {
  createTime: Date | string;
  updateTime: Date | string;
  configuredAudienceModelArn: string;
  name: string;
  audienceModelArn: string;
  outputConfig: ConfiguredAudienceModelOutputConfig;
  description?: string;
  status: ConfiguredAudienceModelStatus;
  sharedAudienceMetrics: Array<SharedAudienceMetrics>;
  minMatchingSeedSize?: number;
  audienceSizeConfig?: AudienceSizeConfig;
  tags?: Record<string, string>;
  childResourceTagOnCreatePolicy?: TagOnCreatePolicy;
}
export interface GetConfiguredModelAlgorithmAssociationRequest {
  configuredModelAlgorithmAssociationArn: string;
  membershipIdentifier: string;
}
export interface GetConfiguredModelAlgorithmAssociationResponse {
  createTime: Date | string;
  updateTime: Date | string;
  configuredModelAlgorithmAssociationArn: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  configuredModelAlgorithmArn: string;
  name: string;
  privacyConfiguration?: PrivacyConfiguration;
  description?: string;
  tags?: Record<string, string>;
}
export interface GetConfiguredModelAlgorithmRequest {
  configuredModelAlgorithmArn: string;
}
export interface GetConfiguredModelAlgorithmResponse {
  createTime: Date | string;
  updateTime: Date | string;
  configuredModelAlgorithmArn: string;
  name: string;
  trainingContainerConfig?: ContainerConfig;
  inferenceContainerConfig?: InferenceContainerConfig;
  roleArn: string;
  description?: string;
  tags?: Record<string, string>;
  kmsKeyArn?: string;
}
export interface GetMLConfigurationRequest {
  membershipIdentifier: string;
}
export interface GetMLConfigurationResponse {
  membershipIdentifier: string;
  defaultOutputLocation: MLOutputConfiguration;
  createTime: Date | string;
  updateTime: Date | string;
}
export interface GetMLInputChannelRequest {
  mlInputChannelArn: string;
  membershipIdentifier: string;
}
export interface GetMLInputChannelResponse {
  membershipIdentifier: string;
  collaborationIdentifier: string;
  mlInputChannelArn: string;
  name: string;
  configuredModelAlgorithmAssociations: Array<string>;
  status: MLInputChannelStatus;
  statusDetails?: StatusDetails;
  retentionInDays: number;
  numberOfRecords?: number;
  privacyBudgets?: PrivacyBudgets;
  description?: string;
  createTime: Date | string;
  updateTime: Date | string;
  inputChannel: InputChannel;
  protectedQueryIdentifier?: string;
  numberOfFiles?: number;
  sizeInGb?: number;
  kmsKeyArn?: string;
  tags?: Record<string, string>;
}
export interface GetTrainedModelInferenceJobRequest {
  membershipIdentifier: string;
  trainedModelInferenceJobArn: string;
}
export interface GetTrainedModelInferenceJobResponse {
  createTime: Date | string;
  updateTime: Date | string;
  trainedModelInferenceJobArn: string;
  configuredModelAlgorithmAssociationArn?: string;
  name: string;
  status: TrainedModelInferenceJobStatus;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
  resourceConfig: InferenceResourceConfig;
  outputConfiguration: InferenceOutputConfiguration;
  membershipIdentifier: string;
  dataSource: ModelInferenceDataSource;
  containerExecutionParameters?: InferenceContainerExecutionParameters;
  statusDetails?: StatusDetails;
  description?: string;
  inferenceContainerImageDigest?: string;
  environment?: Record<string, string>;
  kmsKeyArn?: string;
  metricsStatus?: MetricsStatus;
  metricsStatusDetails?: string;
  logsStatus?: LogsStatus;
  logsStatusDetails?: string;
  tags?: Record<string, string>;
}
export interface GetTrainedModelRequest {
  trainedModelArn: string;
  membershipIdentifier: string;
  versionIdentifier?: string;
}
export interface GetTrainedModelResponse {
  membershipIdentifier: string;
  collaborationIdentifier: string;
  trainedModelArn: string;
  versionIdentifier?: string;
  incrementalTrainingDataChannels?: Array<IncrementalTrainingDataChannelOutput>;
  name: string;
  description?: string;
  status: TrainedModelStatus;
  statusDetails?: StatusDetails;
  configuredModelAlgorithmAssociationArn: string;
  resourceConfig?: ResourceConfig;
  trainingInputMode?: TrainingInputMode;
  stoppingCondition?: StoppingCondition;
  metricsStatus?: MetricsStatus;
  metricsStatusDetails?: string;
  logsStatus?: LogsStatus;
  logsStatusDetails?: string;
  trainingContainerImageDigest?: string;
  createTime: Date | string;
  updateTime: Date | string;
  hyperparameters?: Record<string, string>;
  environment?: Record<string, string>;
  kmsKeyArn?: string;
  tags?: Record<string, string>;
  dataChannels: Array<ModelTrainingDataChannel>;
}
export interface GetTrainingDatasetRequest {
  trainingDatasetArn: string;
}
export interface GetTrainingDatasetResponse {
  createTime: Date | string;
  updateTime: Date | string;
  trainingDatasetArn: string;
  name: string;
  trainingData: Array<Dataset>;
  status: TrainingDatasetStatus;
  roleArn: string;
  tags?: Record<string, string>;
  description?: string;
}
export type GlueDatabaseName = string;

export interface GlueDataSource {
  tableName: string;
  databaseName: string;
  catalogId?: string;
}
export type GlueTableName = string;

export type Hash = string;

export type HyperParameters = Record<string, string>;
export type IamRoleArn = string;

export interface IncrementalTrainingDataChannel {
  trainedModelArn: string;
  versionIdentifier?: string;
  channelName: string;
}
export interface IncrementalTrainingDataChannelOutput {
  channelName: string;
  versionIdentifier?: string;
  modelName: string;
}
export type IncrementalTrainingDataChannels =
  Array<IncrementalTrainingDataChannel>;
export type IncrementalTrainingDataChannelsOutput =
  Array<IncrementalTrainingDataChannelOutput>;
export interface InferenceContainerConfig {
  imageUri: string;
}
export interface InferenceContainerExecutionParameters {
  maxPayloadInMB?: number;
}
export type InferenceEnvironmentMap = Record<string, string>;
export type InferenceInstanceType =
  | "ml.r7i.48xlarge"
  | "ml.r6i.16xlarge"
  | "ml.m6i.xlarge"
  | "ml.m5.4xlarge"
  | "ml.p2.xlarge"
  | "ml.m4.16xlarge"
  | "ml.r7i.16xlarge"
  | "ml.m7i.xlarge"
  | "ml.m6i.12xlarge"
  | "ml.r7i.8xlarge"
  | "ml.r7i.large"
  | "ml.m7i.12xlarge"
  | "ml.m6i.24xlarge"
  | "ml.m7i.24xlarge"
  | "ml.r6i.8xlarge"
  | "ml.r6i.large"
  | "ml.g5.2xlarge"
  | "ml.m5.large"
  | "ml.m7i.48xlarge"
  | "ml.m6i.16xlarge"
  | "ml.p2.16xlarge"
  | "ml.g5.4xlarge"
  | "ml.m7i.16xlarge"
  | "ml.c4.2xlarge"
  | "ml.c5.2xlarge"
  | "ml.c6i.32xlarge"
  | "ml.c4.4xlarge"
  | "ml.g5.8xlarge"
  | "ml.c6i.xlarge"
  | "ml.c5.4xlarge"
  | "ml.g4dn.xlarge"
  | "ml.c7i.xlarge"
  | "ml.c6i.12xlarge"
  | "ml.g4dn.12xlarge"
  | "ml.c7i.12xlarge"
  | "ml.c6i.24xlarge"
  | "ml.g4dn.2xlarge"
  | "ml.c7i.24xlarge"
  | "ml.c7i.2xlarge"
  | "ml.c4.8xlarge"
  | "ml.c6i.2xlarge"
  | "ml.g4dn.4xlarge"
  | "ml.c7i.48xlarge"
  | "ml.c7i.4xlarge"
  | "ml.c6i.16xlarge"
  | "ml.c5.9xlarge"
  | "ml.g4dn.16xlarge"
  | "ml.c7i.16xlarge"
  | "ml.c6i.4xlarge"
  | "ml.c5.xlarge"
  | "ml.c4.xlarge"
  | "ml.g4dn.8xlarge"
  | "ml.c7i.8xlarge"
  | "ml.c7i.large"
  | "ml.g5.xlarge"
  | "ml.c6i.8xlarge"
  | "ml.c6i.large"
  | "ml.g5.12xlarge"
  | "ml.g5.24xlarge"
  | "ml.m7i.2xlarge"
  | "ml.c5.18xlarge"
  | "ml.g5.48xlarge"
  | "ml.m6i.2xlarge"
  | "ml.g5.16xlarge"
  | "ml.m7i.4xlarge"
  | "ml.r6i.32xlarge"
  | "ml.m6i.4xlarge"
  | "ml.m5.xlarge"
  | "ml.m4.10xlarge"
  | "ml.r6i.xlarge"
  | "ml.m5.12xlarge"
  | "ml.m4.xlarge"
  | "ml.r7i.2xlarge"
  | "ml.r7i.xlarge"
  | "ml.r6i.12xlarge"
  | "ml.m5.24xlarge"
  | "ml.r7i.12xlarge"
  | "ml.m7i.8xlarge"
  | "ml.m7i.large"
  | "ml.r6i.24xlarge"
  | "ml.r6i.2xlarge"
  | "ml.m4.2xlarge"
  | "ml.r7i.24xlarge"
  | "ml.r7i.4xlarge"
  | "ml.m6i.8xlarge"
  | "ml.m6i.large"
  | "ml.m5.2xlarge"
  | "ml.p2.8xlarge"
  | "ml.r6i.4xlarge"
  | "ml.m6i.32xlarge"
  | "ml.m4.4xlarge"
  | "ml.p3.16xlarge"
  | "ml.p3.2xlarge"
  | "ml.p3.8xlarge";
export interface InferenceOutputConfiguration {
  accept?: string;
  members: Array<InferenceReceiverMember>;
}
export interface InferenceReceiverMember {
  accountId: string;
}
export type InferenceReceiverMembers = Array<InferenceReceiverMember>;
export interface InferenceResourceConfig {
  instanceType: InferenceInstanceType;
  instanceCount?: number;
}
export interface InputChannel {
  dataSource: InputChannelDataSource;
  roleArn: string;
}
interface _InputChannelDataSource {
  protectedQueryInputParameters?: ProtectedQueryInputParameters;
}

export type InputChannelDataSource = _InputChannelDataSource & {
  protectedQueryInputParameters: ProtectedQueryInputParameters;
};
export type InstanceType =
  | "ml.m4.xlarge"
  | "ml.m4.2xlarge"
  | "ml.m4.4xlarge"
  | "ml.m4.10xlarge"
  | "ml.m4.16xlarge"
  | "ml.g4dn.xlarge"
  | "ml.g4dn.2xlarge"
  | "ml.g4dn.4xlarge"
  | "ml.g4dn.8xlarge"
  | "ml.g4dn.12xlarge"
  | "ml.g4dn.16xlarge"
  | "ml.m5.large"
  | "ml.m5.xlarge"
  | "ml.m5.2xlarge"
  | "ml.m5.4xlarge"
  | "ml.m5.12xlarge"
  | "ml.m5.24xlarge"
  | "ml.c4.xlarge"
  | "ml.c4.2xlarge"
  | "ml.c4.4xlarge"
  | "ml.c4.8xlarge"
  | "ml.p2.xlarge"
  | "ml.p2.8xlarge"
  | "ml.p2.16xlarge"
  | "ml.p4d.24xlarge"
  | "ml.p4de.24xlarge"
  | "ml.p5.48xlarge"
  | "ml.c5.xlarge"
  | "ml.c5.2xlarge"
  | "ml.c5.4xlarge"
  | "ml.c5.9xlarge"
  | "ml.c5.18xlarge"
  | "ml.c5n.xlarge"
  | "ml.c5n.2xlarge"
  | "ml.c5n.4xlarge"
  | "ml.c5n.9xlarge"
  | "ml.c5n.18xlarge"
  | "ml.g5.xlarge"
  | "ml.g5.2xlarge"
  | "ml.g5.4xlarge"
  | "ml.g5.8xlarge"
  | "ml.g5.16xlarge"
  | "ml.g5.12xlarge"
  | "ml.g5.24xlarge"
  | "ml.g5.48xlarge"
  | "ml.trn1.2xlarge"
  | "ml.trn1.32xlarge"
  | "ml.trn1n.32xlarge"
  | "ml.m6i.large"
  | "ml.m6i.xlarge"
  | "ml.m6i.2xlarge"
  | "ml.m6i.4xlarge"
  | "ml.m6i.8xlarge"
  | "ml.m6i.12xlarge"
  | "ml.m6i.16xlarge"
  | "ml.m6i.24xlarge"
  | "ml.m6i.32xlarge"
  | "ml.c6i.xlarge"
  | "ml.c6i.2xlarge"
  | "ml.c6i.8xlarge"
  | "ml.c6i.4xlarge"
  | "ml.c6i.12xlarge"
  | "ml.c6i.16xlarge"
  | "ml.c6i.24xlarge"
  | "ml.c6i.32xlarge"
  | "ml.r5d.large"
  | "ml.r5d.xlarge"
  | "ml.r5d.2xlarge"
  | "ml.r5d.4xlarge"
  | "ml.r5d.8xlarge"
  | "ml.r5d.12xlarge"
  | "ml.r5d.16xlarge"
  | "ml.r5d.24xlarge"
  | "ml.t3.medium"
  | "ml.t3.large"
  | "ml.t3.xlarge"
  | "ml.t3.2xlarge"
  | "ml.r5.large"
  | "ml.r5.xlarge"
  | "ml.r5.2xlarge"
  | "ml.r5.4xlarge"
  | "ml.r5.8xlarge"
  | "ml.r5.12xlarge"
  | "ml.r5.16xlarge"
  | "ml.r5.24xlarge"
  | "ml.c7i.large"
  | "ml.c7i.xlarge"
  | "ml.c7i.2xlarge"
  | "ml.c7i.4xlarge"
  | "ml.c7i.8xlarge"
  | "ml.c7i.12xlarge"
  | "ml.c7i.16xlarge"
  | "ml.c7i.24xlarge"
  | "ml.c7i.48xlarge"
  | "ml.m7i.large"
  | "ml.m7i.xlarge"
  | "ml.m7i.2xlarge"
  | "ml.m7i.4xlarge"
  | "ml.m7i.8xlarge"
  | "ml.m7i.12xlarge"
  | "ml.m7i.16xlarge"
  | "ml.m7i.24xlarge"
  | "ml.m7i.48xlarge"
  | "ml.r7i.large"
  | "ml.r7i.xlarge"
  | "ml.r7i.2xlarge"
  | "ml.r7i.4xlarge"
  | "ml.r7i.8xlarge"
  | "ml.r7i.12xlarge"
  | "ml.r7i.16xlarge"
  | "ml.r7i.24xlarge"
  | "ml.r7i.48xlarge"
  | "ml.g6.xlarge"
  | "ml.g6.2xlarge"
  | "ml.g6.4xlarge"
  | "ml.g6.8xlarge"
  | "ml.g6.12xlarge"
  | "ml.g6.16xlarge"
  | "ml.g6.24xlarge"
  | "ml.g6.48xlarge"
  | "ml.g6e.xlarge"
  | "ml.g6e.2xlarge"
  | "ml.g6e.4xlarge"
  | "ml.g6e.8xlarge"
  | "ml.g6e.12xlarge"
  | "ml.g6e.16xlarge"
  | "ml.g6e.24xlarge"
  | "ml.g6e.48xlarge"
  | "ml.p5en.48xlarge"
  | "ml.p3.2xlarge"
  | "ml.p3.8xlarge"
  | "ml.p3.16xlarge"
  | "ml.p3dn.24xlarge";
export declare class InternalServiceException extends Data.TaggedError(
  "InternalServiceException",
)<{
  readonly message: string;
}> {}
export type KmsKeyArn = string;

export interface ListAudienceExportJobsRequest {
  nextToken?: string;
  maxResults?: number;
  audienceGenerationJobArn?: string;
}
export interface ListAudienceExportJobsResponse {
  nextToken?: string;
  audienceExportJobs: Array<AudienceExportJobSummary>;
}
export interface ListAudienceGenerationJobsRequest {
  nextToken?: string;
  maxResults?: number;
  configuredAudienceModelArn?: string;
  collaborationId?: string;
}
export interface ListAudienceGenerationJobsResponse {
  nextToken?: string;
  audienceGenerationJobs: Array<AudienceGenerationJobSummary>;
}
export interface ListAudienceModelsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListAudienceModelsResponse {
  nextToken?: string;
  audienceModels: Array<AudienceModelSummary>;
}
export interface ListCollaborationConfiguredModelAlgorithmAssociationsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
}
export interface ListCollaborationConfiguredModelAlgorithmAssociationsResponse {
  nextToken?: string;
  collaborationConfiguredModelAlgorithmAssociations: Array<CollaborationConfiguredModelAlgorithmAssociationSummary>;
}
export interface ListCollaborationMLInputChannelsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
}
export interface ListCollaborationMLInputChannelsResponse {
  nextToken?: string;
  collaborationMLInputChannelsList: Array<CollaborationMLInputChannelSummary>;
}
export interface ListCollaborationTrainedModelExportJobsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
}
export interface ListCollaborationTrainedModelExportJobsResponse {
  nextToken?: string;
  collaborationTrainedModelExportJobs: Array<CollaborationTrainedModelExportJobSummary>;
}
export interface ListCollaborationTrainedModelInferenceJobsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
  trainedModelArn?: string;
  trainedModelVersionIdentifier?: string;
}
export interface ListCollaborationTrainedModelInferenceJobsResponse {
  nextToken?: string;
  collaborationTrainedModelInferenceJobs: Array<CollaborationTrainedModelInferenceJobSummary>;
}
export interface ListCollaborationTrainedModelsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
}
export interface ListCollaborationTrainedModelsResponse {
  nextToken?: string;
  collaborationTrainedModels: Array<CollaborationTrainedModelSummary>;
}
export interface ListConfiguredAudienceModelsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListConfiguredAudienceModelsResponse {
  nextToken?: string;
  configuredAudienceModels: Array<ConfiguredAudienceModelSummary>;
}
export interface ListConfiguredModelAlgorithmAssociationsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
}
export interface ListConfiguredModelAlgorithmAssociationsResponse {
  nextToken?: string;
  configuredModelAlgorithmAssociations: Array<ConfiguredModelAlgorithmAssociationSummary>;
}
export interface ListConfiguredModelAlgorithmsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListConfiguredModelAlgorithmsResponse {
  nextToken?: string;
  configuredModelAlgorithms: Array<ConfiguredModelAlgorithmSummary>;
}
export interface ListMLInputChannelsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
}
export interface ListMLInputChannelsResponse {
  nextToken?: string;
  mlInputChannelsList: Array<MLInputChannelSummary>;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: Record<string, string>;
}
export interface ListTrainedModelInferenceJobsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
  trainedModelArn?: string;
  trainedModelVersionIdentifier?: string;
}
export interface ListTrainedModelInferenceJobsResponse {
  nextToken?: string;
  trainedModelInferenceJobs: Array<TrainedModelInferenceJobSummary>;
}
export interface ListTrainedModelsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
}
export interface ListTrainedModelsResponse {
  nextToken?: string;
  trainedModels: Array<TrainedModelSummary>;
}
export interface ListTrainedModelVersionsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
  trainedModelArn: string;
  status?: TrainedModelStatus;
}
export interface ListTrainedModelVersionsResponse {
  nextToken?: string;
  trainedModels: Array<TrainedModelSummary>;
}
export interface ListTrainingDatasetsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListTrainingDatasetsResponse {
  nextToken?: string;
  trainingDatasets: Array<TrainingDatasetSummary>;
}
export interface LogRedactionConfiguration {
  entitiesToRedact: Array<EntityType>;
  customEntityConfig?: CustomEntityConfig;
}
export interface LogsConfigurationPolicy {
  allowedAccountIds: Array<string>;
  filterPattern?: string;
  logType?: LogType;
  logRedactionConfiguration?: LogRedactionConfiguration;
}
export type LogsConfigurationPolicyList = Array<LogsConfigurationPolicy>;
export type LogsStatus = "PUBLISH_SUCCEEDED" | "PUBLISH_FAILED";
export type LogType = "ALL" | "ERROR_SUMMARY";
export type MaxResults = number;

export interface MetricDefinition {
  name: string;
  regex: string;
}
export type MetricDefinitionList = Array<MetricDefinition>;
export type MetricName = string;

export type MetricRegex = string;

export interface MetricsConfigurationPolicy {
  noiseLevel: NoiseLevelType;
}
export type MetricsList = Array<SharedAudienceMetrics>;
export type MetricsStatus = "PUBLISH_SUCCEEDED" | "PUBLISH_FAILED";
export type MinMatchingSeedSize = number;

export type MLInputChannelArn = string;

export type MLInputChannelsList = Array<MLInputChannelSummary>;
export type MLInputChannelStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETE_PENDING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | "INACTIVE";
export interface MLInputChannelSummary {
  createTime: Date | string;
  updateTime: Date | string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  name: string;
  configuredModelAlgorithmAssociations: Array<string>;
  protectedQueryIdentifier?: string;
  mlInputChannelArn: string;
  status: MLInputChannelStatus;
  description?: string;
}
export interface MLOutputConfiguration {
  destination?: Destination;
  roleArn: string;
}
export interface ModelInferenceDataSource {
  mlInputChannelArn: string;
}
export interface ModelTrainingDataChannel {
  mlInputChannelArn: string;
  channelName: string;
  s3DataDistributionType?: S3DataDistributionType;
}
export type ModelTrainingDataChannelName = string;

export type ModelTrainingDataChannels = Array<ModelTrainingDataChannel>;
export type NameString = string;

export type NextToken = string;

export type NoiseLevelType = "HIGH" | "MEDIUM" | "LOW" | "NONE";
export type ParameterKey = string;

export type ParameterMap = Record<string, string>;
export type ParameterValue = string;

export type PolicyExistenceCondition =
  | "POLICY_MUST_EXIST"
  | "POLICY_MUST_NOT_EXIST";
interface _PrivacyBudgets {
  accessBudgets?: Array<AccessBudget>;
}

export type PrivacyBudgets = _PrivacyBudgets & {
  accessBudgets: Array<AccessBudget>;
};
export interface PrivacyConfiguration {
  policies: PrivacyConfigurationPolicies;
}
export interface PrivacyConfigurationPolicies {
  trainedModels?: TrainedModelsConfigurationPolicy;
  trainedModelExports?: TrainedModelExportsConfigurationPolicy;
  trainedModelInferenceJobs?: TrainedModelInferenceJobsConfigurationPolicy;
}
export interface ProtectedQueryInputParameters {
  sqlParameters: ProtectedQuerySQLParameters;
  computeConfiguration?: ComputeConfiguration;
  resultFormat?: ResultFormat;
}
export interface ProtectedQuerySQLParameters {
  queryString?: string;
  analysisTemplateArn?: string;
  parameters?: Record<string, string>;
}
export interface PutConfiguredAudienceModelPolicyRequest {
  configuredAudienceModelArn: string;
  configuredAudienceModelPolicy: string;
  previousPolicyHash?: string;
  policyExistenceCondition?: PolicyExistenceCondition;
}
export interface PutConfiguredAudienceModelPolicyResponse {
  configuredAudienceModelPolicy: string;
  policyHash: string;
}
export interface PutMLConfigurationRequest {
  membershipIdentifier: string;
  defaultOutputLocation: MLOutputConfiguration;
}
export interface RelevanceMetric {
  audienceSize: AudienceSize;
  score?: number;
}
export type RelevanceMetrics = Array<RelevanceMetric>;
export interface ResourceConfig {
  instanceCount?: number;
  instanceType: InstanceType;
  volumeSizeInGB: number;
}
export type ResourceDescription = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type ResourcePolicy = string;

export type ResultFormat = "CSV" | "PARQUET";
export interface S3ConfigMap {
  s3Uri: string;
}
export type S3DataDistributionType = "FullyReplicated" | "ShardedByS3Key";
export type S3Path = string;

export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly quotaName?: string;
  readonly quotaValue?: number;
}> {}
export type SharedAudienceMetrics = "ALL" | "NONE";
export interface StartAudienceExportJobRequest {
  name: string;
  audienceGenerationJobArn: string;
  audienceSize: AudienceSize;
  description?: string;
}
export interface StartAudienceGenerationJobRequest {
  name: string;
  configuredAudienceModelArn: string;
  seedAudience: AudienceGenerationJobDataSource;
  includeSeedInOutput?: boolean;
  collaborationId?: string;
  description?: string;
  tags?: Record<string, string>;
}
export interface StartAudienceGenerationJobResponse {
  audienceGenerationJobArn: string;
}
export interface StartTrainedModelExportJobRequest {
  name: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
  membershipIdentifier: string;
  outputConfiguration: TrainedModelExportOutputConfiguration;
  description?: string;
}
export interface StartTrainedModelInferenceJobRequest {
  membershipIdentifier: string;
  name: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
  configuredModelAlgorithmAssociationArn?: string;
  resourceConfig: InferenceResourceConfig;
  outputConfiguration: InferenceOutputConfiguration;
  dataSource: ModelInferenceDataSource;
  description?: string;
  containerExecutionParameters?: InferenceContainerExecutionParameters;
  environment?: Record<string, string>;
  kmsKeyArn?: string;
  tags?: Record<string, string>;
}
export interface StartTrainedModelInferenceJobResponse {
  trainedModelInferenceJobArn: string;
}
export interface StatusDetails {
  statusCode?: string;
  message?: string;
}
export interface StoppingCondition {
  maxRuntimeInSeconds?: number;
}
export type TaggableArn = string;

export type TagKey = string;

export type TagKeys = Array<string>;
export type TagMap = Record<string, string>;
export type TagOnCreatePolicy = "FROM_PARENT_RESOURCE" | "NONE";
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export type TrainedModelArn = string;

export interface TrainedModelArtifactMaxSize {
  unit: TrainedModelArtifactMaxSizeUnitType;
  value: number;
}
export type TrainedModelArtifactMaxSizeUnitType = "GB";
export type TrainedModelArtifactMaxSizeValue = number;

export type TrainedModelExportFileType = "MODEL" | "OUTPUT";
export type TrainedModelExportFileTypeList = Array<TrainedModelExportFileType>;
export type TrainedModelExportJobArn = string;

export type TrainedModelExportJobStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE";
export interface TrainedModelExportOutputConfiguration {
  members: Array<TrainedModelExportReceiverMember>;
}
export interface TrainedModelExportReceiverMember {
  accountId: string;
}
export type TrainedModelExportReceiverMembers =
  Array<TrainedModelExportReceiverMember>;
export interface TrainedModelExportsConfigurationPolicy {
  maxSize: TrainedModelExportsMaxSize;
  filesToExport: Array<TrainedModelExportFileType>;
}
export interface TrainedModelExportsMaxSize {
  unit: TrainedModelExportsMaxSizeUnitType;
  value: number;
}
export type TrainedModelExportsMaxSizeUnitType = "GB";
export type TrainedModelExportsMaxSizeValue = number;

export type TrainedModelInferenceJobArn = string;

export type TrainedModelInferenceJobList =
  Array<TrainedModelInferenceJobSummary>;
export interface TrainedModelInferenceJobsConfigurationPolicy {
  containerLogs?: Array<LogsConfigurationPolicy>;
  maxOutputSize?: TrainedModelInferenceMaxOutputSize;
}
export type TrainedModelInferenceJobStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "CANCEL_PENDING"
  | "CANCEL_IN_PROGRESS"
  | "CANCEL_FAILED"
  | "INACTIVE";
export interface TrainedModelInferenceJobSummary {
  trainedModelInferenceJobArn: string;
  configuredModelAlgorithmAssociationArn?: string;
  membershipIdentifier: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
  collaborationIdentifier: string;
  status: TrainedModelInferenceJobStatus;
  outputConfiguration: InferenceOutputConfiguration;
  name: string;
  description?: string;
  metricsStatus?: MetricsStatus;
  metricsStatusDetails?: string;
  logsStatus?: LogsStatus;
  logsStatusDetails?: string;
  createTime: Date | string;
  updateTime: Date | string;
}
export interface TrainedModelInferenceMaxOutputSize {
  unit: TrainedModelInferenceMaxOutputSizeUnitType;
  value: number;
}
export type TrainedModelInferenceMaxOutputSizeUnitType = "GB";
export type TrainedModelInferenceMaxOutputSizeValue = number;

export type TrainedModelList = Array<TrainedModelSummary>;
export interface TrainedModelsConfigurationPolicy {
  containerLogs?: Array<LogsConfigurationPolicy>;
  containerMetrics?: MetricsConfigurationPolicy;
  maxArtifactSize?: TrainedModelArtifactMaxSize;
}
export type TrainedModelStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETE_PENDING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | "INACTIVE"
  | "CANCEL_PENDING"
  | "CANCEL_IN_PROGRESS"
  | "CANCEL_FAILED";
export interface TrainedModelSummary {
  createTime: Date | string;
  updateTime: Date | string;
  trainedModelArn: string;
  versionIdentifier?: string;
  incrementalTrainingDataChannels?: Array<IncrementalTrainingDataChannelOutput>;
  name: string;
  description?: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  status: TrainedModelStatus;
  configuredModelAlgorithmAssociationArn: string;
}
export type TrainingDatasetArn = string;

export type TrainingDatasetList = Array<TrainingDatasetSummary>;
export type TrainingDatasetStatus = "ACTIVE";
export interface TrainingDatasetSummary {
  createTime: Date | string;
  updateTime: Date | string;
  trainingDatasetArn: string;
  name: string;
  status: TrainingDatasetStatus;
  description?: string;
}
export type TrainingInputMode = "File" | "FastFile" | "Pipe";
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateConfiguredAudienceModelRequest {
  configuredAudienceModelArn: string;
  outputConfig?: ConfiguredAudienceModelOutputConfig;
  audienceModelArn?: string;
  sharedAudienceMetrics?: Array<SharedAudienceMetrics>;
  minMatchingSeedSize?: number;
  audienceSizeConfig?: AudienceSizeConfig;
  description?: string;
}
export interface UpdateConfiguredAudienceModelResponse {
  configuredAudienceModelArn: string;
}
export type UUID = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export interface WorkerComputeConfiguration {
  type?: WorkerComputeType;
  number?: number;
}
export type WorkerComputeType = "CR.1X" | "CR.4X";
export declare namespace ListCollaborationConfiguredModelAlgorithmAssociations {
  export type Input =
    ListCollaborationConfiguredModelAlgorithmAssociationsRequest;
  export type Output =
    ListCollaborationConfiguredModelAlgorithmAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCollaborationMLInputChannels {
  export type Input = ListCollaborationMLInputChannelsRequest;
  export type Output = ListCollaborationMLInputChannelsResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCollaborationTrainedModelExportJobs {
  export type Input = ListCollaborationTrainedModelExportJobsRequest;
  export type Output = ListCollaborationTrainedModelExportJobsResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCollaborationTrainedModelInferenceJobs {
  export type Input = ListCollaborationTrainedModelInferenceJobsRequest;
  export type Output = ListCollaborationTrainedModelInferenceJobsResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCollaborationTrainedModels {
  export type Input = ListCollaborationTrainedModelsRequest;
  export type Output = ListCollaborationTrainedModelsResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelTrainedModel {
  export type Input = CancelTrainedModelRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelTrainedModelInferenceJob {
  export type Input = CancelTrainedModelInferenceJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAudienceModel {
  export type Input = CreateAudienceModelRequest;
  export type Output = CreateAudienceModelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateConfiguredAudienceModel {
  export type Input = CreateConfiguredAudienceModelRequest;
  export type Output = CreateConfiguredAudienceModelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateConfiguredModelAlgorithm {
  export type Input = CreateConfiguredModelAlgorithmRequest;
  export type Output = CreateConfiguredModelAlgorithmResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateConfiguredModelAlgorithmAssociation {
  export type Input = CreateConfiguredModelAlgorithmAssociationRequest;
  export type Output = CreateConfiguredModelAlgorithmAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateMLInputChannel {
  export type Input = CreateMLInputChannelRequest;
  export type Output = CreateMLInputChannelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTrainedModel {
  export type Input = CreateTrainedModelRequest;
  export type Output = CreateTrainedModelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTrainingDataset {
  export type Input = CreateTrainingDatasetRequest;
  export type Output = CreateTrainingDatasetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAudienceGenerationJob {
  export type Input = DeleteAudienceGenerationJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAudienceModel {
  export type Input = DeleteAudienceModelRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConfiguredAudienceModel {
  export type Input = DeleteConfiguredAudienceModelRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConfiguredAudienceModelPolicy {
  export type Input = DeleteConfiguredAudienceModelPolicyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConfiguredModelAlgorithm {
  export type Input = DeleteConfiguredModelAlgorithmRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConfiguredModelAlgorithmAssociation {
  export type Input = DeleteConfiguredModelAlgorithmAssociationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMLConfiguration {
  export type Input = DeleteMLConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMLInputChannelData {
  export type Input = DeleteMLInputChannelDataRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTrainedModelOutput {
  export type Input = DeleteTrainedModelOutputRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTrainingDataset {
  export type Input = DeleteTrainingDatasetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAudienceGenerationJob {
  export type Input = GetAudienceGenerationJobRequest;
  export type Output = GetAudienceGenerationJobResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAudienceModel {
  export type Input = GetAudienceModelRequest;
  export type Output = GetAudienceModelResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCollaborationConfiguredModelAlgorithmAssociation {
  export type Input =
    GetCollaborationConfiguredModelAlgorithmAssociationRequest;
  export type Output =
    GetCollaborationConfiguredModelAlgorithmAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCollaborationMLInputChannel {
  export type Input = GetCollaborationMLInputChannelRequest;
  export type Output = GetCollaborationMLInputChannelResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCollaborationTrainedModel {
  export type Input = GetCollaborationTrainedModelRequest;
  export type Output = GetCollaborationTrainedModelResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfiguredAudienceModel {
  export type Input = GetConfiguredAudienceModelRequest;
  export type Output = GetConfiguredAudienceModelResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfiguredAudienceModelPolicy {
  export type Input = GetConfiguredAudienceModelPolicyRequest;
  export type Output = GetConfiguredAudienceModelPolicyResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfiguredModelAlgorithm {
  export type Input = GetConfiguredModelAlgorithmRequest;
  export type Output = GetConfiguredModelAlgorithmResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfiguredModelAlgorithmAssociation {
  export type Input = GetConfiguredModelAlgorithmAssociationRequest;
  export type Output = GetConfiguredModelAlgorithmAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMLConfiguration {
  export type Input = GetMLConfigurationRequest;
  export type Output = GetMLConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMLInputChannel {
  export type Input = GetMLInputChannelRequest;
  export type Output = GetMLInputChannelResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTrainedModel {
  export type Input = GetTrainedModelRequest;
  export type Output = GetTrainedModelResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTrainedModelInferenceJob {
  export type Input = GetTrainedModelInferenceJobRequest;
  export type Output = GetTrainedModelInferenceJobResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTrainingDataset {
  export type Input = GetTrainingDatasetRequest;
  export type Output = GetTrainingDatasetResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAudienceExportJobs {
  export type Input = ListAudienceExportJobsRequest;
  export type Output = ListAudienceExportJobsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAudienceGenerationJobs {
  export type Input = ListAudienceGenerationJobsRequest;
  export type Output = ListAudienceGenerationJobsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAudienceModels {
  export type Input = ListAudienceModelsRequest;
  export type Output = ListAudienceModelsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConfiguredAudienceModels {
  export type Input = ListConfiguredAudienceModelsRequest;
  export type Output = ListConfiguredAudienceModelsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConfiguredModelAlgorithmAssociations {
  export type Input = ListConfiguredModelAlgorithmAssociationsRequest;
  export type Output = ListConfiguredModelAlgorithmAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConfiguredModelAlgorithms {
  export type Input = ListConfiguredModelAlgorithmsRequest;
  export type Output = ListConfiguredModelAlgorithmsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMLInputChannels {
  export type Input = ListMLInputChannelsRequest;
  export type Output = ListMLInputChannelsResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTrainedModelInferenceJobs {
  export type Input = ListTrainedModelInferenceJobsRequest;
  export type Output = ListTrainedModelInferenceJobsResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTrainedModelVersions {
  export type Input = ListTrainedModelVersionsRequest;
  export type Output = ListTrainedModelVersionsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTrainedModels {
  export type Input = ListTrainedModelsRequest;
  export type Output = ListTrainedModelsResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTrainingDatasets {
  export type Input = ListTrainingDatasetsRequest;
  export type Output = ListTrainingDatasetsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutConfiguredAudienceModelPolicy {
  export type Input = PutConfiguredAudienceModelPolicyRequest;
  export type Output = PutConfiguredAudienceModelPolicyResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutMLConfiguration {
  export type Input = PutMLConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartAudienceExportJob {
  export type Input = StartAudienceExportJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartAudienceGenerationJob {
  export type Input = StartAudienceGenerationJobRequest;
  export type Output = StartAudienceGenerationJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartTrainedModelExportJob {
  export type Input = StartTrainedModelExportJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartTrainedModelInferenceJob {
  export type Input = StartTrainedModelInferenceJobRequest;
  export type Output = StartTrainedModelInferenceJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConfiguredAudienceModel {
  export type Input = UpdateConfiguredAudienceModelRequest;
  export type Output = UpdateConfiguredAudienceModelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export type CleanRoomsMLErrors =
  | AccessDeniedException
  | ConflictException
  | InternalServiceException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;

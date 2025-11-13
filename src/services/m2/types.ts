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

export declare class m2 extends AWSServiceClient {
  getSignedBluinsightsUrl(input: {}): Effect.Effect<
    GetSignedBluinsightsUrlResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError
  >;
  listEngineVersions(
    input: ListEngineVersionsRequest,
  ): Effect.Effect<
    ListEngineVersionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelBatchJobExecution(
    input: CancelBatchJobExecutionRequest,
  ): Effect.Effect<
    CancelBatchJobExecutionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataSetExportTask(
    input: CreateDataSetExportTaskRequest,
  ): Effect.Effect<
    CreateDataSetExportTaskResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataSetImportTask(
    input: CreateDataSetImportTaskRequest,
  ): Effect.Effect<
    CreateDataSetImportTaskResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDeployment(
    input: CreateDeploymentRequest,
  ): Effect.Effect<
    CreateDeploymentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createEnvironment(
    input: CreateEnvironmentRequest,
  ): Effect.Effect<
    CreateEnvironmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    DeleteApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteApplicationFromEnvironment(
    input: DeleteApplicationFromEnvironmentRequest,
  ): Effect.Effect<
    DeleteApplicationFromEnvironmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEnvironment(
    input: DeleteEnvironmentRequest,
  ): Effect.Effect<
    DeleteEnvironmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getApplication(
    input: GetApplicationRequest,
  ): Effect.Effect<
    GetApplicationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getApplicationVersion(
    input: GetApplicationVersionRequest,
  ): Effect.Effect<
    GetApplicationVersionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getBatchJobExecution(
    input: GetBatchJobExecutionRequest,
  ): Effect.Effect<
    GetBatchJobExecutionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataSetDetails(
    input: GetDataSetDetailsRequest,
  ): Effect.Effect<
    GetDataSetDetailsResponse,
    | AccessDeniedException
    | ConflictException
    | ExecutionTimeoutException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataSetExportTask(
    input: GetDataSetExportTaskRequest,
  ): Effect.Effect<
    GetDataSetExportTaskResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataSetImportTask(
    input: GetDataSetImportTaskRequest,
  ): Effect.Effect<
    GetDataSetImportTaskResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDeployment(
    input: GetDeploymentRequest,
  ): Effect.Effect<
    GetDeploymentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEnvironment(
    input: GetEnvironmentRequest,
  ): Effect.Effect<
    GetEnvironmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listApplicationVersions(
    input: ListApplicationVersionsRequest,
  ): Effect.Effect<
    ListApplicationVersionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    ListApplicationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBatchJobDefinitions(
    input: ListBatchJobDefinitionsRequest,
  ): Effect.Effect<
    ListBatchJobDefinitionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBatchJobExecutions(
    input: ListBatchJobExecutionsRequest,
  ): Effect.Effect<
    ListBatchJobExecutionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBatchJobRestartPoints(
    input: ListBatchJobRestartPointsRequest,
  ): Effect.Effect<
    ListBatchJobRestartPointsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataSetExportHistory(
    input: ListDataSetExportHistoryRequest,
  ): Effect.Effect<
    ListDataSetExportHistoryResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataSetImportHistory(
    input: ListDataSetImportHistoryRequest,
  ): Effect.Effect<
    ListDataSetImportHistoryResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataSets(
    input: ListDataSetsRequest,
  ): Effect.Effect<
    ListDataSetsResponse,
    | AccessDeniedException
    | ConflictException
    | ExecutionTimeoutException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDeployments(
    input: ListDeploymentsRequest,
  ): Effect.Effect<
    ListDeploymentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEnvironments(
    input: ListEnvironmentsRequest,
  ): Effect.Effect<
    ListEnvironmentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startApplication(
    input: StartApplicationRequest,
  ): Effect.Effect<
    StartApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startBatchJob(
    input: StartBatchJobRequest,
  ): Effect.Effect<
    StartBatchJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopApplication(
    input: StopApplicationRequest,
  ): Effect.Effect<
    StopApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    UpdateApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEnvironment(
    input: UpdateEnvironmentRequest,
  ): Effect.Effect<
    UpdateEnvironmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class M2 extends m2 {}

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface AlternateKey {
  name?: string;
  offset: number;
  length: number;
  allowDuplicates?: boolean;
}
export type AlternateKeyList = Array<AlternateKey>;
export type ApplicationDeploymentLifecycle = string;

export type ApplicationLifecycle = string;

export interface ApplicationSummary {
  name: string;
  description?: string;
  applicationId: string;
  applicationArn: string;
  applicationVersion: number;
  status: string;
  engineType: string;
  creationTime: Date | string;
  environmentId?: string;
  lastStartTime?: Date | string;
  versionStatus?: string;
  deploymentStatus?: string;
  roleArn?: string;
}
export type ApplicationSummaryList = Array<ApplicationSummary>;
export type ApplicationVersionLifecycle = string;

export interface ApplicationVersionSummary {
  applicationVersion: number;
  status: string;
  statusReason?: string;
  creationTime: Date | string;
}
export type ApplicationVersionSummaryList = Array<ApplicationVersionSummary>;
export type Arn = string;

export type ArnList = Array<string>;
export type AuthSecretsManagerArn = string;

interface _BatchJobDefinition {
  fileBatchJobDefinition?: FileBatchJobDefinition;
  scriptBatchJobDefinition?: ScriptBatchJobDefinition;
}

export type BatchJobDefinition =
  | (_BatchJobDefinition & { fileBatchJobDefinition: FileBatchJobDefinition })
  | (_BatchJobDefinition & {
      scriptBatchJobDefinition: ScriptBatchJobDefinition;
    });
export type BatchJobDefinitions = Array<BatchJobDefinition>;
export type BatchJobExecutionStatus = string;

export interface BatchJobExecutionSummary {
  executionId: string;
  applicationId: string;
  jobId?: string;
  jobName?: string;
  jobType?: string;
  status: string;
  startTime: Date | string;
  endTime?: Date | string;
  returnCode?: string;
  batchJobIdentifier?: BatchJobIdentifier;
}
export type BatchJobExecutionSummaryList = Array<BatchJobExecutionSummary>;
interface _BatchJobIdentifier {
  fileBatchJobIdentifier?: FileBatchJobIdentifier;
  scriptBatchJobIdentifier?: ScriptBatchJobIdentifier;
  s3BatchJobIdentifier?: S3BatchJobIdentifier;
  restartBatchJobIdentifier?: RestartBatchJobIdentifier;
}

export type BatchJobIdentifier =
  | (_BatchJobIdentifier & { fileBatchJobIdentifier: FileBatchJobIdentifier })
  | (_BatchJobIdentifier & {
      scriptBatchJobIdentifier: ScriptBatchJobIdentifier;
    })
  | (_BatchJobIdentifier & { s3BatchJobIdentifier: S3BatchJobIdentifier })
  | (_BatchJobIdentifier & {
      restartBatchJobIdentifier: RestartBatchJobIdentifier;
    });
export type BatchJobParametersMap = Record<string, string>;
export type BatchJobStepList = Array<JobStep>;
export type BatchJobType = string;

export type BatchParamKey = string;

export type BatchParamValue = string;

export type M2Boolean = boolean;

export interface CancelBatchJobExecutionRequest {
  applicationId: string;
  executionId: string;
  authSecretsManagerArn?: string;
}
export interface CancelBatchJobExecutionResponse {}
export type CapacityValue = number;

export type ClientToken = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export interface CreateApplicationRequest {
  name: string;
  description?: string;
  engineType: string;
  definition: Definition;
  tags?: Record<string, string>;
  clientToken?: string;
  kmsKeyId?: string;
  roleArn?: string;
}
export interface CreateApplicationResponse {
  applicationArn: string;
  applicationId: string;
  applicationVersion: number;
}
export interface CreateDataSetExportTaskRequest {
  applicationId: string;
  exportConfig: DataSetExportConfig;
  clientToken?: string;
  kmsKeyId?: string;
}
export interface CreateDataSetExportTaskResponse {
  taskId: string;
}
export interface CreateDataSetImportTaskRequest {
  applicationId: string;
  importConfig: DataSetImportConfig;
  clientToken?: string;
}
export interface CreateDataSetImportTaskResponse {
  taskId: string;
}
export interface CreateDeploymentRequest {
  environmentId: string;
  applicationId: string;
  applicationVersion: number;
  clientToken?: string;
}
export interface CreateDeploymentResponse {
  deploymentId: string;
}
export interface CreateEnvironmentRequest {
  name: string;
  instanceType: string;
  description?: string;
  engineType: string;
  engineVersion?: string;
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  storageConfigurations?: Array<StorageConfiguration>;
  publiclyAccessible?: boolean;
  highAvailabilityConfig?: HighAvailabilityConfig;
  tags?: Record<string, string>;
  preferredMaintenanceWindow?: string;
  networkType?: string;
  clientToken?: string;
  kmsKeyId?: string;
}
export interface CreateEnvironmentResponse {
  environmentId: string;
}
export interface DataSet {
  storageType?: string;
  datasetName: string;
  datasetOrg: DatasetOrgAttributes;
  relativePath?: string;
  recordLength: RecordLength;
}
interface _DatasetDetailOrgAttributes {
  vsam?: VsamDetailAttributes;
  gdg?: GdgDetailAttributes;
  po?: PoDetailAttributes;
  ps?: PsDetailAttributes;
}

export type DatasetDetailOrgAttributes =
  | (_DatasetDetailOrgAttributes & { vsam: VsamDetailAttributes })
  | (_DatasetDetailOrgAttributes & { gdg: GdgDetailAttributes })
  | (_DatasetDetailOrgAttributes & { po: PoDetailAttributes })
  | (_DatasetDetailOrgAttributes & { ps: PsDetailAttributes });
interface _DataSetExportConfig {
  s3Location?: string;
  dataSets?: Array<DataSetExportItem>;
}

export type DataSetExportConfig =
  | (_DataSetExportConfig & { s3Location: string })
  | (_DataSetExportConfig & { dataSets: Array<DataSetExportItem> });
export interface DataSetExportItem {
  datasetName: string;
  externalLocation: ExternalLocation;
}
export type DataSetExportList = Array<DataSetExportItem>;
export interface DataSetExportSummary {
  total: number;
  succeeded: number;
  failed: number;
  pending: number;
  inProgress: number;
}
export interface DataSetExportTask {
  taskId: string;
  status: string;
  summary: DataSetExportSummary;
  statusReason?: string;
}
export type DataSetExportTaskList = Array<DataSetExportTask>;
interface _DataSetImportConfig {
  s3Location?: string;
  dataSets?: Array<DataSetImportItem>;
}

export type DataSetImportConfig =
  | (_DataSetImportConfig & { s3Location: string })
  | (_DataSetImportConfig & { dataSets: Array<DataSetImportItem> });
export interface DataSetImportItem {
  dataSet: DataSet;
  externalLocation: ExternalLocation;
}
export type DataSetImportList = Array<DataSetImportItem>;
export interface DataSetImportSummary {
  total: number;
  succeeded: number;
  failed: number;
  pending: number;
  inProgress: number;
}
export interface DataSetImportTask {
  taskId: string;
  status: string;
  summary: DataSetImportSummary;
  statusReason?: string;
}
export type DataSetImportTaskList = Array<DataSetImportTask>;
interface _DatasetOrgAttributes {
  vsam?: VsamAttributes;
  gdg?: GdgAttributes;
  po?: PoAttributes;
  ps?: PsAttributes;
}

export type DatasetOrgAttributes =
  | (_DatasetOrgAttributes & { vsam: VsamAttributes })
  | (_DatasetOrgAttributes & { gdg: GdgAttributes })
  | (_DatasetOrgAttributes & { po: PoAttributes })
  | (_DatasetOrgAttributes & { ps: PsAttributes });
export type DataSetsSummaryList = Array<DataSetSummary>;
export interface DataSetSummary {
  dataSetName: string;
  dataSetOrg?: string;
  format?: string;
  creationTime?: Date | string;
  lastUpdatedTime?: Date | string;
  lastReferencedTime?: Date | string;
}
export type DataSetTaskLifecycle = string;

interface _Definition {
  s3Location?: string;
  content?: string;
}

export type Definition =
  | (_Definition & { s3Location: string })
  | (_Definition & { content: string });
export interface DeleteApplicationFromEnvironmentRequest {
  applicationId: string;
  environmentId: string;
}
export interface DeleteApplicationFromEnvironmentResponse {}
export interface DeleteApplicationRequest {
  applicationId: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteEnvironmentRequest {
  environmentId: string;
}
export interface DeleteEnvironmentResponse {}
export interface DeployedVersionSummary {
  applicationVersion: number;
  status: string;
  statusReason?: string;
}
export type DeploymentLifecycle = string;

export type DeploymentList = Array<DeploymentSummary>;
export interface DeploymentSummary {
  deploymentId: string;
  applicationId: string;
  environmentId: string;
  applicationVersion: number;
  status: string;
  creationTime: Date | string;
  statusReason?: string;
}
export interface EfsStorageConfiguration {
  fileSystemId: string;
  mountPoint: string;
}
export type EngineType = string;

export type EngineVersion = string;

export interface EngineVersionsSummary {
  engineType: string;
  engineVersion: string;
}
export type EngineVersionsSummaryList = Array<EngineVersionsSummary>;
export type EntityDescription = string;

export type EntityName = string;

export type EntityNameList = Array<string>;
export type EnvironmentLifecycle = string;

export interface EnvironmentSummary {
  name: string;
  environmentArn: string;
  environmentId: string;
  instanceType: string;
  status: string;
  engineType: string;
  engineVersion: string;
  creationTime: Date | string;
  networkType?: string;
}
export type EnvironmentSummaryList = Array<EnvironmentSummary>;
export declare class ExecutionTimeoutException extends Data.TaggedError(
  "ExecutionTimeoutException",
)<{
  readonly message: string;
}> {}
interface _ExternalLocation {
  s3Location?: string;
}

export type ExternalLocation = _ExternalLocation & { s3Location: string };
export interface FileBatchJobDefinition {
  fileName: string;
  folderPath?: string;
}
export interface FileBatchJobIdentifier {
  fileName: string;
  folderPath?: string;
}
export interface FsxStorageConfiguration {
  fileSystemId: string;
  mountPoint: string;
}
export interface GdgAttributes {
  limit?: number;
  rollDisposition?: string;
}
export interface GdgDetailAttributes {
  limit?: number;
  rollDisposition?: string;
}
export interface GetApplicationRequest {
  applicationId: string;
}
export interface GetApplicationResponse {
  name: string;
  description?: string;
  applicationId: string;
  applicationArn: string;
  status: string;
  latestVersion: ApplicationVersionSummary;
  deployedVersion?: DeployedVersionSummary;
  engineType: string;
  logGroups?: Array<LogGroupSummary>;
  creationTime: Date | string;
  lastStartTime?: Date | string;
  tags?: Record<string, string>;
  environmentId?: string;
  targetGroupArns?: Array<string>;
  listenerArns?: Array<string>;
  listenerPorts?: Array<number>;
  loadBalancerDnsName?: string;
  statusReason?: string;
  kmsKeyId?: string;
  roleArn?: string;
}
export interface GetApplicationVersionRequest {
  applicationId: string;
  applicationVersion: number;
}
export interface GetApplicationVersionResponse {
  name: string;
  applicationVersion: number;
  description?: string;
  definitionContent: string;
  status: string;
  creationTime: Date | string;
  statusReason?: string;
}
export interface GetBatchJobExecutionRequest {
  applicationId: string;
  executionId: string;
}
export interface GetBatchJobExecutionResponse {
  executionId: string;
  applicationId: string;
  jobId?: string;
  jobName?: string;
  jobUser?: string;
  jobType?: string;
  status: string;
  startTime: Date | string;
  endTime?: Date | string;
  statusReason?: string;
  returnCode?: string;
  batchJobIdentifier?: BatchJobIdentifier;
  jobStepRestartMarker?: JobStepRestartMarker;
}
export interface GetDataSetDetailsRequest {
  applicationId: string;
  dataSetName: string;
}
export interface GetDataSetDetailsResponse {
  dataSetName: string;
  dataSetOrg?: DatasetDetailOrgAttributes;
  recordLength?: number;
  location?: string;
  blocksize?: number;
  creationTime?: Date | string;
  lastUpdatedTime?: Date | string;
  lastReferencedTime?: Date | string;
  fileSize?: number;
}
export interface GetDataSetExportTaskRequest {
  applicationId: string;
  taskId: string;
}
export interface GetDataSetExportTaskResponse {
  taskId: string;
  status: string;
  summary?: DataSetExportSummary;
  statusReason?: string;
  kmsKeyArn?: string;
}
export interface GetDataSetImportTaskRequest {
  applicationId: string;
  taskId: string;
}
export interface GetDataSetImportTaskResponse {
  taskId: string;
  status: string;
  summary?: DataSetImportSummary;
}
export interface GetDeploymentRequest {
  deploymentId: string;
  applicationId: string;
}
export interface GetDeploymentResponse {
  deploymentId: string;
  applicationId: string;
  environmentId: string;
  applicationVersion: number;
  status: string;
  creationTime: Date | string;
  statusReason?: string;
}
export interface GetEnvironmentRequest {
  environmentId: string;
}
export interface GetEnvironmentResponse {
  name: string;
  description?: string;
  environmentArn: string;
  environmentId: string;
  instanceType: string;
  status: string;
  engineType: string;
  engineVersion: string;
  vpcId: string;
  subnetIds: Array<string>;
  securityGroupIds: Array<string>;
  creationTime: Date | string;
  storageConfigurations?: Array<StorageConfiguration>;
  tags?: Record<string, string>;
  highAvailabilityConfig?: HighAvailabilityConfig;
  publiclyAccessible?: boolean;
  actualCapacity?: number;
  loadBalancerArn?: string;
  statusReason?: string;
  preferredMaintenanceWindow?: string;
  pendingMaintenance?: PendingMaintenance;
  kmsKeyId?: string;
  networkType?: string;
}
export interface GetSignedBluinsightsUrlResponse {
  signedBiUrl: string;
}
export interface HighAvailabilityConfig {
  desiredCapacity: number;
}
export type Identifier = string;

export type IdentifierList = Array<string>;
export type Integer = number;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
interface _JobIdentifier {
  fileName?: string;
  scriptName?: string;
}

export type JobIdentifier =
  | (_JobIdentifier & { fileName: string })
  | (_JobIdentifier & { scriptName: string });
export interface JobStep {
  stepNumber?: number;
  stepName?: string;
  procStepNumber?: number;
  procStepName?: string;
  stepCondCode?: string;
  stepRestartable?: boolean;
  stepCheckpoint?: number;
  stepCheckpointStatus?: string;
  stepCheckpointTime?: Date | string;
}
export interface JobStepRestartMarker {
  fromStep: string;
  fromProcStep?: string;
  toStep?: string;
  toProcStep?: string;
  stepCheckpoint?: number;
  skip?: boolean;
}
export type KMSKeyId = string;

export interface ListApplicationsRequest {
  nextToken?: string;
  maxResults?: number;
  names?: Array<string>;
  environmentId?: string;
}
export interface ListApplicationsResponse {
  applications: Array<ApplicationSummary>;
  nextToken?: string;
}
export interface ListApplicationVersionsRequest {
  nextToken?: string;
  maxResults?: number;
  applicationId: string;
}
export interface ListApplicationVersionsResponse {
  applicationVersions: Array<ApplicationVersionSummary>;
  nextToken?: string;
}
export interface ListBatchJobDefinitionsRequest {
  nextToken?: string;
  maxResults?: number;
  applicationId: string;
  prefix?: string;
}
export interface ListBatchJobDefinitionsResponse {
  batchJobDefinitions: Array<BatchJobDefinition>;
  nextToken?: string;
}
export interface ListBatchJobExecutionsRequest {
  nextToken?: string;
  maxResults?: number;
  applicationId: string;
  executionIds?: Array<string>;
  jobName?: string;
  status?: string;
  startedAfter?: Date | string;
  startedBefore?: Date | string;
}
export interface ListBatchJobExecutionsResponse {
  batchJobExecutions: Array<BatchJobExecutionSummary>;
  nextToken?: string;
}
export interface ListBatchJobRestartPointsRequest {
  applicationId: string;
  executionId: string;
  authSecretsManagerArn?: string;
}
export interface ListBatchJobRestartPointsResponse {
  batchJobSteps?: Array<JobStep>;
}
export interface ListDataSetExportHistoryRequest {
  nextToken?: string;
  maxResults?: number;
  applicationId: string;
}
export interface ListDataSetExportHistoryResponse {
  dataSetExportTasks: Array<DataSetExportTask>;
  nextToken?: string;
}
export interface ListDataSetImportHistoryRequest {
  nextToken?: string;
  maxResults?: number;
  applicationId: string;
}
export interface ListDataSetImportHistoryResponse {
  dataSetImportTasks: Array<DataSetImportTask>;
  nextToken?: string;
}
export interface ListDataSetsRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
  prefix?: string;
  nameFilter?: string;
}
export interface ListDataSetsResponse {
  dataSets: Array<DataSetSummary>;
  nextToken?: string;
}
export interface ListDeploymentsRequest {
  nextToken?: string;
  maxResults?: number;
  applicationId: string;
}
export interface ListDeploymentsResponse {
  deployments: Array<DeploymentSummary>;
  nextToken?: string;
}
export interface ListEngineVersionsRequest {
  engineType?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListEngineVersionsResponse {
  engineVersions: Array<EngineVersionsSummary>;
  nextToken?: string;
}
export interface ListEnvironmentsRequest {
  nextToken?: string;
  maxResults?: number;
  names?: Array<string>;
  engineType?: string;
}
export interface ListEnvironmentsResponse {
  environments: Array<EnvironmentSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: Record<string, string>;
}
export type LogGroupIdentifier = string;

export type LogGroupSummaries = Array<LogGroupSummary>;
export interface LogGroupSummary {
  logType: string;
  logGroupName: string;
}
export interface MaintenanceSchedule {
  startTime?: Date | string;
  endTime?: Date | string;
}
export type MaxResults = number;

export type NetworkType = string;

export type NextToken = string;

export interface PendingMaintenance {
  schedule?: MaintenanceSchedule;
  engineVersion?: string;
}
export interface PoAttributes {
  format: string;
  encoding?: string;
  memberFileExtensions: Array<string>;
}
export interface PoDetailAttributes {
  format: string;
  encoding: string;
}
export type PortList = Array<number>;
export interface PrimaryKey {
  name?: string;
  offset: number;
  length: number;
}
export interface PsAttributes {
  format: string;
  encoding?: string;
}
export interface PsDetailAttributes {
  format: string;
  encoding: string;
}
export interface RecordLength {
  min: number;
  max: number;
}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export interface RestartBatchJobIdentifier {
  executionId: string;
  jobStepRestartMarker: JobStepRestartMarker;
}
export interface S3BatchJobIdentifier {
  bucket: string;
  keyPrefix?: string;
  identifier: JobIdentifier;
}
export interface ScriptBatchJobDefinition {
  scriptName: string;
}
export interface ScriptBatchJobIdentifier {
  scriptName: string;
}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export declare class ServiceUnavailableException extends Data.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message: string;
}> {}
export interface StartApplicationRequest {
  applicationId: string;
}
export interface StartApplicationResponse {}
export interface StartBatchJobRequest {
  applicationId: string;
  batchJobIdentifier: BatchJobIdentifier;
  jobParams?: Record<string, string>;
  authSecretsManagerArn?: string;
}
export interface StartBatchJobResponse {
  executionId: string;
}
export interface StopApplicationRequest {
  applicationId: string;
  forceStop?: boolean;
}
export interface StopApplicationResponse {}
interface _StorageConfiguration {
  efs?: EfsStorageConfiguration;
  fsx?: FsxStorageConfiguration;
}

export type StorageConfiguration =
  | (_StorageConfiguration & { efs: EfsStorageConfiguration })
  | (_StorageConfiguration & { fsx: FsxStorageConfiguration });
export type StorageConfigurationList = Array<StorageConfiguration>;
export type String100 = string;

export type String20 = string;

export type String200 = string;

export type String2000 = string;

export type String20List = Array<string>;
export type String50 = string;

export type String50List = Array<string>;
export type StringFree65000 = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
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
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export type Timestamp = Date | string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateApplicationRequest {
  applicationId: string;
  description?: string;
  currentApplicationVersion: number;
  definition?: Definition;
}
export interface UpdateApplicationResponse {
  applicationVersion: number;
}
export interface UpdateEnvironmentRequest {
  environmentId: string;
  desiredCapacity?: number;
  instanceType?: string;
  engineVersion?: string;
  preferredMaintenanceWindow?: string;
  applyDuringMaintenanceWindow?: boolean;
  forceUpdate?: boolean;
}
export interface UpdateEnvironmentResponse {
  environmentId: string;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason?: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type Version = number;

export interface VsamAttributes {
  format: string;
  encoding?: string;
  compressed?: boolean;
  primaryKey?: PrimaryKey;
  alternateKeys?: Array<AlternateKey>;
}
export interface VsamDetailAttributes {
  encoding?: string;
  recordFormat?: string;
  compressed?: boolean;
  cacheAtStartup?: boolean;
  primaryKey?: PrimaryKey;
  alternateKeys?: Array<AlternateKey>;
}
export declare namespace GetSignedBluinsightsUrl {
  export type Input = {};
  export type Output = GetSignedBluinsightsUrlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListEngineVersions {
  export type Input = ListEngineVersionsRequest;
  export type Output = ListEngineVersionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelBatchJobExecution {
  export type Input = CancelBatchJobExecutionRequest;
  export type Output = CancelBatchJobExecutionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataSetExportTask {
  export type Input = CreateDataSetExportTaskRequest;
  export type Output = CreateDataSetExportTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataSetImportTask {
  export type Input = CreateDataSetImportTaskRequest;
  export type Output = CreateDataSetImportTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDeployment {
  export type Input = CreateDeploymentRequest;
  export type Output = CreateDeploymentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateEnvironment {
  export type Input = CreateEnvironmentRequest;
  export type Output = CreateEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = DeleteApplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteApplicationFromEnvironment {
  export type Input = DeleteApplicationFromEnvironmentRequest;
  export type Output = DeleteApplicationFromEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEnvironment {
  export type Input = DeleteEnvironmentRequest;
  export type Output = DeleteEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetApplication {
  export type Input = GetApplicationRequest;
  export type Output = GetApplicationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetApplicationVersion {
  export type Input = GetApplicationVersionRequest;
  export type Output = GetApplicationVersionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBatchJobExecution {
  export type Input = GetBatchJobExecutionRequest;
  export type Output = GetBatchJobExecutionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataSetDetails {
  export type Input = GetDataSetDetailsRequest;
  export type Output = GetDataSetDetailsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ExecutionTimeoutException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataSetExportTask {
  export type Input = GetDataSetExportTaskRequest;
  export type Output = GetDataSetExportTaskResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataSetImportTask {
  export type Input = GetDataSetImportTaskRequest;
  export type Output = GetDataSetImportTaskResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDeployment {
  export type Input = GetDeploymentRequest;
  export type Output = GetDeploymentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnvironment {
  export type Input = GetEnvironmentRequest;
  export type Output = GetEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplicationVersions {
  export type Input = ListApplicationVersionsRequest;
  export type Output = ListApplicationVersionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = ListApplicationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBatchJobDefinitions {
  export type Input = ListBatchJobDefinitionsRequest;
  export type Output = ListBatchJobDefinitionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBatchJobExecutions {
  export type Input = ListBatchJobExecutionsRequest;
  export type Output = ListBatchJobExecutionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBatchJobRestartPoints {
  export type Input = ListBatchJobRestartPointsRequest;
  export type Output = ListBatchJobRestartPointsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSetExportHistory {
  export type Input = ListDataSetExportHistoryRequest;
  export type Output = ListDataSetExportHistoryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSetImportHistory {
  export type Input = ListDataSetImportHistoryRequest;
  export type Output = ListDataSetImportHistoryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSets {
  export type Input = ListDataSetsRequest;
  export type Output = ListDataSetsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ExecutionTimeoutException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDeployments {
  export type Input = ListDeploymentsRequest;
  export type Output = ListDeploymentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironments {
  export type Input = ListEnvironmentsRequest;
  export type Output = ListEnvironmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartApplication {
  export type Input = StartApplicationRequest;
  export type Output = StartApplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartBatchJob {
  export type Input = StartBatchJobRequest;
  export type Output = StartBatchJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopApplication {
  export type Input = StopApplicationRequest;
  export type Output = StopApplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = UpdateApplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEnvironment {
  export type Input = UpdateEnvironmentRequest;
  export type Output = UpdateEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type m2Errors =
  | AccessDeniedException
  | ConflictException
  | ExecutionTimeoutException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;

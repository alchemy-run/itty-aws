import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ApplicationDiscoveryService extends AWSServiceClient {
  associateConfigurationItemsToApplication(
    input: AssociateConfigurationItemsToApplicationRequest,
  ): Effect.Effect<
    AssociateConfigurationItemsToApplicationResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  batchDeleteAgents(
    input: BatchDeleteAgentsRequest,
  ): Effect.Effect<
    BatchDeleteAgentsResponse,
    | AuthorizationErrorException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  batchDeleteImportData(
    input: BatchDeleteImportDataRequest,
  ): Effect.Effect<
    BatchDeleteImportDataResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  createTags(
    input: CreateTagsRequest,
  ): Effect.Effect<
    CreateTagsResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  deleteApplications(
    input: DeleteApplicationsRequest,
  ): Effect.Effect<
    DeleteApplicationsResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  deleteTags(
    input: DeleteTagsRequest,
  ): Effect.Effect<
    DeleteTagsResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  describeAgents(
    input: DescribeAgentsRequest,
  ): Effect.Effect<
    DescribeAgentsResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  describeBatchDeleteConfigurationTask(
    input: DescribeBatchDeleteConfigurationTaskRequest,
  ): Effect.Effect<
    DescribeBatchDeleteConfigurationTaskResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  describeConfigurations(
    input: DescribeConfigurationsRequest,
  ): Effect.Effect<
    DescribeConfigurationsResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  describeContinuousExports(
    input: DescribeContinuousExportsRequest,
  ): Effect.Effect<
    DescribeContinuousExportsResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  describeExportConfigurations(
    input: DescribeExportConfigurationsRequest,
  ): Effect.Effect<
    DescribeExportConfigurationsResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  describeExportTasks(
    input: DescribeExportTasksRequest,
  ): Effect.Effect<
    DescribeExportTasksResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  describeImportTasks(
    input: DescribeImportTasksRequest,
  ): Effect.Effect<
    DescribeImportTasksResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  describeTags(
    input: DescribeTagsRequest,
  ): Effect.Effect<
    DescribeTagsResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  disassociateConfigurationItemsFromApplication(
    input: DisassociateConfigurationItemsFromApplicationRequest,
  ): Effect.Effect<
    DisassociateConfigurationItemsFromApplicationResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  exportConfigurations(input: {}): Effect.Effect<
    ExportConfigurationsResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | OperationNotPermittedException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  getDiscoverySummary(
    input: GetDiscoverySummaryRequest,
  ): Effect.Effect<
    GetDiscoverySummaryResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  listConfigurations(
    input: ListConfigurationsRequest,
  ): Effect.Effect<
    ListConfigurationsResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  listServerNeighbors(
    input: ListServerNeighborsRequest,
  ): Effect.Effect<
    ListServerNeighborsResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  startBatchDeleteConfigurationTask(
    input: StartBatchDeleteConfigurationTaskRequest,
  ): Effect.Effect<
    StartBatchDeleteConfigurationTaskResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | LimitExceededException
    | OperationNotPermittedException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  startContinuousExport(
    input: StartContinuousExportRequest,
  ): Effect.Effect<
    StartContinuousExportResponse,
    | AuthorizationErrorException
    | ConflictErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | OperationNotPermittedException
    | ResourceInUseException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  startDataCollectionByAgentIds(
    input: StartDataCollectionByAgentIdsRequest,
  ): Effect.Effect<
    StartDataCollectionByAgentIdsResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  startExportTask(
    input: StartExportTaskRequest,
  ): Effect.Effect<
    StartExportTaskResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | OperationNotPermittedException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  startImportTask(
    input: StartImportTaskRequest,
  ): Effect.Effect<
    StartImportTaskResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ResourceInUseException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  stopContinuousExport(
    input: StopContinuousExportRequest,
  ): Effect.Effect<
    StopContinuousExportResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  stopDataCollectionByAgentIds(
    input: StopDataCollectionByAgentIdsRequest,
  ): Effect.Effect<
    StopDataCollectionByAgentIdsResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    UpdateApplicationResponse,
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError
  >;
}

export interface AgentConfigurationStatus {
  agentId?: string;
  operationSucceeded?: boolean;
  description?: string;
}
export type AgentConfigurationStatusList = Array<AgentConfigurationStatus>;
export type AgentId = string;

export type AgentIds = Array<string>;
export interface AgentInfo {
  agentId?: string;
  hostName?: string;
  agentNetworkInfoList?: Array<AgentNetworkInfo>;
  connectorId?: string;
  version?: string;
  health?: AgentStatus;
  lastHealthPingTime?: string;
  collectionStatus?: string;
  agentType?: string;
  registeredTime?: string;
}
export interface AgentNetworkInfo {
  ipAddress?: string;
  macAddress?: string;
}
export type AgentNetworkInfoList = Array<AgentNetworkInfo>;
export type AgentsInfo = Array<AgentInfo>;
export type AgentStatus =
  | "HEALTHY"
  | "UNHEALTHY"
  | "RUNNING"
  | "UNKNOWN"
  | "BLACKLISTED"
  | "SHUTDOWN";
export type ApplicationDescription = string;

export type ApplicationId = string;

export type ApplicationIdsList = Array<string>;
export type ApplicationName = string;

export type ApplicationWave = string;

export interface AssociateConfigurationItemsToApplicationRequest {
  applicationConfigurationId: string;
  configurationIds: Array<string>;
}
export interface AssociateConfigurationItemsToApplicationResponse {}
export declare class AuthorizationErrorException extends EffectData.TaggedError(
  "AuthorizationErrorException",
)<{
  readonly message?: string;
}> {}
export interface BatchDeleteAgentError {
  agentId: string;
  errorMessage: string;
  errorCode: DeleteAgentErrorCode;
}
export type BatchDeleteAgentErrors = Array<BatchDeleteAgentError>;
export interface BatchDeleteAgentsRequest {
  deleteAgents: Array<DeleteAgent>;
}
export interface BatchDeleteAgentsResponse {
  errors?: Array<BatchDeleteAgentError>;
}
export interface BatchDeleteConfigurationTask {
  taskId?: string;
  status?: BatchDeleteConfigurationTaskStatus;
  startTime?: Date | string;
  endTime?: Date | string;
  configurationType?: DeletionConfigurationItemType;
  requestedConfigurations?: Array<string>;
  deletedConfigurations?: Array<string>;
  failedConfigurations?: Array<FailedConfiguration>;
  deletionWarnings?: Array<DeletionWarning>;
}
export type BatchDeleteConfigurationTaskStatus =
  | "INITIALIZING"
  | "VALIDATING"
  | "DELETING"
  | "COMPLETED"
  | "FAILED";
export interface BatchDeleteImportDataError {
  importTaskId?: string;
  errorCode?: BatchDeleteImportDataErrorCode;
  errorDescription?: string;
}
export type BatchDeleteImportDataErrorCode =
  | "NOT_FOUND"
  | "INTERNAL_SERVER_ERROR"
  | "OVER_LIMIT";
export type BatchDeleteImportDataErrorDescription = string;

export type BatchDeleteImportDataErrorList = Array<BatchDeleteImportDataError>;
export interface BatchDeleteImportDataRequest {
  importTaskIds: Array<string>;
  deleteHistory?: boolean;
}
export interface BatchDeleteImportDataResponse {
  errors?: Array<BatchDeleteImportDataError>;
}
export type ApplicationDiscoveryServiceBoolean = boolean;

export type BoxedInteger = number;

export type ClientRequestToken = string;

export type Condition = string;

export type Configuration = Partial<Record<string, string>>;
export type ConfigurationId = string;

export type ConfigurationIdList = Array<string>;
export type ConfigurationItemType =
  | "SERVER"
  | "PROCESS"
  | "CONNECTIONS"
  | "APPLICATION";
export type Configurations = Array<Partial<Record<string, string>>>;
export type ConfigurationsDownloadUrl = string;

export type ConfigurationsExportId = string;

export interface ConfigurationTag {
  configurationType?: ConfigurationItemType;
  configurationId?: string;
  key?: string;
  value?: string;
  timeOfCreation?: Date | string;
}
export type ConfigurationTagSet = Array<ConfigurationTag>;
export declare class ConflictErrorException extends EffectData.TaggedError(
  "ConflictErrorException",
)<{
  readonly message?: string;
}> {}
export interface ContinuousExportDescription {
  exportId?: string;
  status?: ContinuousExportStatus;
  statusDetail?: string;
  s3Bucket?: string;
  startTime?: Date | string;
  stopTime?: Date | string;
  dataSource?: DataSource;
  schemaStorageConfig?: Partial<Record<string, string>>;
}
export type ContinuousExportDescriptions = Array<ContinuousExportDescription>;
export type ContinuousExportIds = Array<string>;
export type ContinuousExportStatus =
  | "START_IN_PROGRESS"
  | "START_FAILED"
  | "ACTIVE"
  | "ERROR"
  | "STOP_IN_PROGRESS"
  | "STOP_FAILED"
  | "INACTIVE";
export interface CreateApplicationRequest {
  name: string;
  description?: string;
  wave?: string;
}
export interface CreateApplicationResponse {
  configurationId?: string;
}
export interface CreateTagsRequest {
  configurationIds: Array<string>;
  tags: Array<Tag>;
}
export interface CreateTagsResponse {}
export interface CustomerAgentInfo {
  activeAgents: number;
  healthyAgents: number;
  blackListedAgents: number;
  shutdownAgents: number;
  unhealthyAgents: number;
  totalAgents: number;
  unknownAgents: number;
}
export interface CustomerAgentlessCollectorInfo {
  activeAgentlessCollectors: number;
  healthyAgentlessCollectors: number;
  denyListedAgentlessCollectors: number;
  shutdownAgentlessCollectors: number;
  unhealthyAgentlessCollectors: number;
  totalAgentlessCollectors: number;
  unknownAgentlessCollectors: number;
}
export interface CustomerConnectorInfo {
  activeConnectors: number;
  healthyConnectors: number;
  blackListedConnectors: number;
  shutdownConnectors: number;
  unhealthyConnectors: number;
  totalConnectors: number;
  unknownConnectors: number;
}
export interface CustomerMeCollectorInfo {
  activeMeCollectors: number;
  healthyMeCollectors: number;
  denyListedMeCollectors: number;
  shutdownMeCollectors: number;
  unhealthyMeCollectors: number;
  totalMeCollectors: number;
  unknownMeCollectors: number;
}
export type DatabaseName = string;

export type DataSource = "AGENT";
export interface DeleteAgent {
  agentId: string;
  force?: boolean;
}
export type DeleteAgentErrorCode =
  | "NOT_FOUND"
  | "INTERNAL_SERVER_ERROR"
  | "AGENT_IN_USE";
export type DeleteAgents = Array<DeleteAgent>;
export interface DeleteApplicationsRequest {
  configurationIds: Array<string>;
}
export interface DeleteApplicationsResponse {}
export interface DeleteTagsRequest {
  configurationIds: Array<string>;
  tags?: Array<Tag>;
}
export interface DeleteTagsResponse {}
export type DeletionConfigurationItemType = "SERVER";
export interface DeletionWarning {
  configurationId?: string;
  warningCode?: number;
  warningText?: string;
}
export type DeletionWarningsList = Array<DeletionWarning>;
export interface DescribeAgentsRequest {
  agentIds?: Array<string>;
  filters?: Array<Filter>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeAgentsResponse {
  agentsInfo?: Array<AgentInfo>;
  nextToken?: string;
}
export interface DescribeBatchDeleteConfigurationTaskRequest {
  taskId: string;
}
export interface DescribeBatchDeleteConfigurationTaskResponse {
  task?: BatchDeleteConfigurationTask;
}
export type DescribeConfigurationsAttribute = Partial<Record<string, string>>;
export type DescribeConfigurationsAttributes = Array<
  Partial<Record<string, string>>
>;
export interface DescribeConfigurationsRequest {
  configurationIds: Array<string>;
}
export interface DescribeConfigurationsResponse {
  configurations?: Array<Partial<Record<string, string>>>;
}
export type DescribeContinuousExportsMaxResults = number;

export interface DescribeContinuousExportsRequest {
  exportIds?: Array<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeContinuousExportsResponse {
  descriptions?: Array<ContinuousExportDescription>;
  nextToken?: string;
}
export interface DescribeExportConfigurationsRequest {
  exportIds?: Array<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeExportConfigurationsResponse {
  exportsInfo?: Array<ExportInfo>;
  nextToken?: string;
}
export interface DescribeExportTasksRequest {
  exportIds?: Array<string>;
  filters?: Array<ExportFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeExportTasksResponse {
  exportsInfo?: Array<ExportInfo>;
  nextToken?: string;
}
export type DescribeImportTasksFilterList = Array<ImportTaskFilter>;
export type DescribeImportTasksMaxResults = number;

export interface DescribeImportTasksRequest {
  filters?: Array<ImportTaskFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeImportTasksResponse {
  nextToken?: string;
  tasks?: Array<ImportTask>;
}
export interface DescribeTagsRequest {
  filters?: Array<TagFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeTagsResponse {
  tags?: Array<ConfigurationTag>;
  nextToken?: string;
}
export interface DisassociateConfigurationItemsFromApplicationRequest {
  applicationConfigurationId: string;
  configurationIds: Array<string>;
}
export interface DisassociateConfigurationItemsFromApplicationResponse {}
export type EC2InstanceType = string;

export interface Ec2RecommendationsExportPreferences {
  enabled?: boolean;
  cpuPerformanceMetricBasis?: UsageMetricBasis;
  ramPerformanceMetricBasis?: UsageMetricBasis;
  tenancy?: Tenancy;
  excludedInstanceTypes?: Array<string>;
  preferredRegion?: string;
  reservedInstanceOptions?: ReservedInstanceOptions;
}
export type ErrorMessage = string;

export type ErrorStatusCode = number;

export type ExcludedInstanceTypes = Array<string>;
export interface ExportConfigurationsResponse {
  exportId?: string;
}
export type ExportDataFormat = "CSV";
export type ExportDataFormats = Array<ExportDataFormat>;
export type ExportEnabled = boolean;

export interface ExportFilter {
  name: string;
  values: Array<string>;
  condition: string;
}
export type ExportFilters = Array<ExportFilter>;
export type ExportIds = Array<string>;
export interface ExportInfo {
  exportId: string;
  exportStatus: ExportStatus;
  statusMessage: string;
  configurationsDownloadUrl?: string;
  exportRequestTime: Date | string;
  isTruncated?: boolean;
  requestedStartTime?: Date | string;
  requestedEndTime?: Date | string;
}
interface _ExportPreferences {
  ec2RecommendationsPreferences?: Ec2RecommendationsExportPreferences;
}

export type ExportPreferences = _ExportPreferences & {
  ec2RecommendationsPreferences: Ec2RecommendationsExportPreferences;
};
export type ExportRequestTime = Date | string;

export type ExportsInfo = Array<ExportInfo>;
export type ExportStatus = "FAILED" | "SUCCEEDED" | "IN_PROGRESS";
export type ExportStatusMessage = string;

export interface FailedConfiguration {
  configurationId?: string;
  errorStatusCode?: number;
  errorMessage?: string;
}
export type FailedConfigurationList = Array<FailedConfiguration>;
export type FileClassification =
  | "MODELIZEIT_EXPORT"
  | "RVTOOLS_EXPORT"
  | "VMWARE_NSX_EXPORT"
  | "IMPORT_TEMPLATE";
export interface Filter {
  name: string;
  values: Array<string>;
  condition: string;
}
export type FilterName = string;

export type Filters = Array<Filter>;
export type FilterValue = string;

export type FilterValues = Array<string>;
export interface GetDiscoverySummaryRequest {}
export interface GetDiscoverySummaryResponse {
  servers?: number;
  applications?: number;
  serversMappedToApplications?: number;
  serversMappedtoTags?: number;
  agentSummary?: CustomerAgentInfo;
  connectorSummary?: CustomerConnectorInfo;
  meCollectorSummary?: CustomerMeCollectorInfo;
  agentlessCollectorSummary?: CustomerAgentlessCollectorInfo;
}
export declare class HomeRegionNotSetException extends EffectData.TaggedError(
  "HomeRegionNotSetException",
)<{
  readonly message?: string;
}> {}
export type ImportStatus =
  | "IMPORT_IN_PROGRESS"
  | "IMPORT_COMPLETE"
  | "IMPORT_COMPLETE_WITH_ERRORS"
  | "IMPORT_FAILED"
  | "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED"
  | "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED"
  | "IMPORT_FAILED_UNSUPPORTED_FILE_TYPE"
  | "DELETE_IN_PROGRESS"
  | "DELETE_COMPLETE"
  | "DELETE_FAILED"
  | "DELETE_FAILED_LIMIT_EXCEEDED"
  | "INTERNAL_ERROR";
export interface ImportTask {
  importTaskId?: string;
  clientRequestToken?: string;
  name?: string;
  importUrl?: string;
  status?: ImportStatus;
  importRequestTime?: Date | string;
  importCompletionTime?: Date | string;
  importDeletedTime?: Date | string;
  fileClassification?: FileClassification;
  serverImportSuccess?: number;
  serverImportFailure?: number;
  applicationImportSuccess?: number;
  applicationImportFailure?: number;
  errorsAndFailedEntriesZip?: string;
}
export interface ImportTaskFilter {
  name?: ImportTaskFilterName;
  values?: Array<string>;
}
export type ImportTaskFilterName =
  | "IMPORT_TASK_ID"
  | "STATUS"
  | "NAME"
  | "FILE_CLASSIFICATION";
export type ImportTaskFilterValue = string;

export type ImportTaskFilterValueList = Array<string>;
export type ImportTaskIdentifier = string;

export type ImportTaskList = Array<ImportTask>;
export type ImportTaskName = string;

export type ImportURL = string;

export type Integer = number;

export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterValueException extends EffectData.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly message?: string;
}> {}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListConfigurationsRequest {
  configurationType: ConfigurationItemType;
  filters?: Array<Filter>;
  maxResults?: number;
  nextToken?: string;
  orderBy?: Array<OrderByElement>;
}
export interface ListConfigurationsResponse {
  configurations?: Array<Partial<Record<string, string>>>;
  nextToken?: string;
}
export interface ListServerNeighborsRequest {
  configurationId: string;
  portInformationNeeded?: boolean;
  neighborConfigurationIds?: Array<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListServerNeighborsResponse {
  neighbors: Array<NeighborConnectionDetail>;
  nextToken?: string;
  knownDependencyCount?: number;
}
export type Long = number;

export type Message = string;

export interface NeighborConnectionDetail {
  sourceServerId: string;
  destinationServerId: string;
  destinationPort?: number;
  transportProtocol?: string;
  connectionsCount: number;
}
export type NeighborDetailsList = Array<NeighborConnectionDetail>;
export type NextToken = string;

export type OfferingClass = "STANDARD" | "CONVERTIBLE";
export declare class OperationNotPermittedException extends EffectData.TaggedError(
  "OperationNotPermittedException",
)<{
  readonly message?: string;
}> {}
export interface OrderByElement {
  fieldName: string;
  sortOrder?: orderString;
}
export type OrderByElementFieldName = string;

export type OrderByList = Array<OrderByElement>;
export type orderString = "ASC" | "DESC";
export type PurchasingOption = "ALL_UPFRONT" | "PARTIAL_UPFRONT" | "NO_UPFRONT";
export interface ReservedInstanceOptions {
  purchasingOption: PurchasingOption;
  offeringClass: OfferingClass;
  termLength: TermLength;
}
export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type S3Bucket = string;

export type S3PresignedUrl = string;

export type SchemaStorageConfig = Partial<Record<string, string>>;
export declare class ServerInternalErrorException extends EffectData.TaggedError(
  "ServerInternalErrorException",
)<{
  readonly message?: string;
}> {}
export interface StartBatchDeleteConfigurationTaskRequest {
  configurationType: DeletionConfigurationItemType;
  configurationIds: Array<string>;
}
export interface StartBatchDeleteConfigurationTaskResponse {
  taskId?: string;
}
export interface StartContinuousExportRequest {}
export interface StartContinuousExportResponse {
  exportId?: string;
  s3Bucket?: string;
  startTime?: Date | string;
  dataSource?: DataSource;
  schemaStorageConfig?: Partial<Record<string, string>>;
}
export interface StartDataCollectionByAgentIdsRequest {
  agentIds: Array<string>;
}
export interface StartDataCollectionByAgentIdsResponse {
  agentsConfigurationStatus?: Array<AgentConfigurationStatus>;
}
export interface StartExportTaskRequest {
  exportDataFormat?: Array<ExportDataFormat>;
  filters?: Array<ExportFilter>;
  startTime?: Date | string;
  endTime?: Date | string;
  preferences?: ExportPreferences;
}
export interface StartExportTaskResponse {
  exportId?: string;
}
export interface StartImportTaskRequest {
  clientRequestToken?: string;
  name: string;
  importUrl: string;
}
export interface StartImportTaskResponse {
  task?: ImportTask;
}
export interface StopContinuousExportRequest {
  exportId: string;
}
export interface StopContinuousExportResponse {
  startTime?: Date | string;
  stopTime?: Date | string;
}
export interface StopDataCollectionByAgentIdsRequest {
  agentIds: Array<string>;
}
export interface StopDataCollectionByAgentIdsResponse {
  agentsConfigurationStatus?: Array<AgentConfigurationStatus>;
}
export type ApplicationDiscoveryServiceString = string;

export type StringMax255 = string;

export interface Tag {
  key: string;
  value: string;
}
export interface TagFilter {
  name: string;
  values: Array<string>;
}
export type TagFilters = Array<TagFilter>;
export type TagKey = string;

export type TagSet = Array<Tag>;
export type TagValue = string;

export type Tenancy = "DEDICATED" | "SHARED";
export type TermLength = "ONE_YEAR" | "THREE_YEAR";
export type TimeStamp = Date | string;

export type ToDeleteIdentifierList = Array<string>;
export interface UpdateApplicationRequest {
  configurationId: string;
  name?: string;
  description?: string;
  wave?: string;
}
export interface UpdateApplicationResponse {}
export interface UsageMetricBasis {
  name?: string;
  percentageAdjust?: number;
}
export type UsageMetricBasisName = string;

export type UsageMetricPercentageAdjust = number;

export type UserPreferredRegion = string;

export type UUID = string;

export type WarningCode = number;

export type WarningText = string;

export declare namespace AssociateConfigurationItemsToApplication {
  export type Input = AssociateConfigurationItemsToApplicationRequest;
  export type Output = AssociateConfigurationItemsToApplicationResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace BatchDeleteAgents {
  export type Input = BatchDeleteAgentsRequest;
  export type Output = BatchDeleteAgentsResponse;
  export type Error =
    | AuthorizationErrorException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace BatchDeleteImportData {
  export type Input = BatchDeleteImportDataRequest;
  export type Output = BatchDeleteImportDataResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace CreateTags {
  export type Input = CreateTagsRequest;
  export type Output = CreateTagsResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace DeleteApplications {
  export type Input = DeleteApplicationsRequest;
  export type Output = DeleteApplicationsResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace DeleteTags {
  export type Input = DeleteTagsRequest;
  export type Output = DeleteTagsResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace DescribeAgents {
  export type Input = DescribeAgentsRequest;
  export type Output = DescribeAgentsResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace DescribeBatchDeleteConfigurationTask {
  export type Input = DescribeBatchDeleteConfigurationTaskRequest;
  export type Output = DescribeBatchDeleteConfigurationTaskResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace DescribeConfigurations {
  export type Input = DescribeConfigurationsRequest;
  export type Output = DescribeConfigurationsResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace DescribeContinuousExports {
  export type Input = DescribeContinuousExportsRequest;
  export type Output = DescribeContinuousExportsResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace DescribeExportConfigurations {
  export type Input = DescribeExportConfigurationsRequest;
  export type Output = DescribeExportConfigurationsResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace DescribeExportTasks {
  export type Input = DescribeExportTasksRequest;
  export type Output = DescribeExportTasksResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace DescribeImportTasks {
  export type Input = DescribeImportTasksRequest;
  export type Output = DescribeImportTasksResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace DescribeTags {
  export type Input = DescribeTagsRequest;
  export type Output = DescribeTagsResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace DisassociateConfigurationItemsFromApplication {
  export type Input = DisassociateConfigurationItemsFromApplicationRequest;
  export type Output = DisassociateConfigurationItemsFromApplicationResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace ExportConfigurations {
  export type Input = {};
  export type Output = ExportConfigurationsResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | OperationNotPermittedException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace GetDiscoverySummary {
  export type Input = GetDiscoverySummaryRequest;
  export type Output = GetDiscoverySummaryResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace ListConfigurations {
  export type Input = ListConfigurationsRequest;
  export type Output = ListConfigurationsResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace ListServerNeighbors {
  export type Input = ListServerNeighborsRequest;
  export type Output = ListServerNeighborsResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace StartBatchDeleteConfigurationTask {
  export type Input = StartBatchDeleteConfigurationTaskRequest;
  export type Output = StartBatchDeleteConfigurationTaskResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | LimitExceededException
    | OperationNotPermittedException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace StartContinuousExport {
  export type Input = StartContinuousExportRequest;
  export type Output = StartContinuousExportResponse;
  export type Error =
    | AuthorizationErrorException
    | ConflictErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | OperationNotPermittedException
    | ResourceInUseException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace StartDataCollectionByAgentIds {
  export type Input = StartDataCollectionByAgentIdsRequest;
  export type Output = StartDataCollectionByAgentIdsResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace StartExportTask {
  export type Input = StartExportTaskRequest;
  export type Output = StartExportTaskResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | OperationNotPermittedException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace StartImportTask {
  export type Input = StartImportTaskRequest;
  export type Output = StartImportTaskResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ResourceInUseException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace StopContinuousExport {
  export type Input = StopContinuousExportRequest;
  export type Output = StopContinuousExportResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace StopDataCollectionByAgentIds {
  export type Input = StopDataCollectionByAgentIdsRequest;
  export type Output = StopDataCollectionByAgentIdsResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = UpdateApplicationResponse;
  export type Error =
    | AuthorizationErrorException
    | HomeRegionNotSetException
    | InvalidParameterException
    | InvalidParameterValueException
    | ServerInternalErrorException
    | CommonAwsError;
}

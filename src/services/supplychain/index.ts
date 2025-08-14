import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class SupplyChain extends AWSServiceClient {
  getDataIntegrationEvent(
    input: GetDataIntegrationEventRequest,
  ): Effect.Effect<
    GetDataIntegrationEventResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataIntegrationFlowExecution(
    input: GetDataIntegrationFlowExecutionRequest,
  ): Effect.Effect<
    GetDataIntegrationFlowExecutionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataIntegrationEvents(
    input: ListDataIntegrationEventsRequest,
  ): Effect.Effect<
    ListDataIntegrationEventsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataIntegrationFlowExecutions(
    input: ListDataIntegrationFlowExecutionsRequest,
  ): Effect.Effect<
    ListDataIntegrationFlowExecutionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
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
  sendDataIntegrationEvent(
    input: SendDataIntegrationEventRequest,
  ): Effect.Effect<
    SendDataIntegrationEventResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
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
  createBillOfMaterialsImportJob(
    input: CreateBillOfMaterialsImportJobRequest,
  ): Effect.Effect<
    CreateBillOfMaterialsImportJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataIntegrationFlow(
    input: CreateDataIntegrationFlowRequest,
  ): Effect.Effect<
    CreateDataIntegrationFlowResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataLakeDataset(
    input: CreateDataLakeDatasetRequest,
  ): Effect.Effect<
    CreateDataLakeDatasetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataLakeNamespace(
    input: CreateDataLakeNamespaceRequest,
  ): Effect.Effect<
    CreateDataLakeNamespaceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createInstance(
    input: CreateInstanceRequest,
  ): Effect.Effect<
    CreateInstanceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataIntegrationFlow(
    input: DeleteDataIntegrationFlowRequest,
  ): Effect.Effect<
    DeleteDataIntegrationFlowResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDataLakeDataset(
    input: DeleteDataLakeDatasetRequest,
  ): Effect.Effect<
    DeleteDataLakeDatasetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataLakeNamespace(
    input: DeleteDataLakeNamespaceRequest,
  ): Effect.Effect<
    DeleteDataLakeNamespaceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteInstance(
    input: DeleteInstanceRequest,
  ): Effect.Effect<
    DeleteInstanceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getBillOfMaterialsImportJob(
    input: GetBillOfMaterialsImportJobRequest,
  ): Effect.Effect<
    GetBillOfMaterialsImportJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataIntegrationFlow(
    input: GetDataIntegrationFlowRequest,
  ): Effect.Effect<
    GetDataIntegrationFlowResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataLakeDataset(
    input: GetDataLakeDatasetRequest,
  ): Effect.Effect<
    GetDataLakeDatasetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataLakeNamespace(
    input: GetDataLakeNamespaceRequest,
  ): Effect.Effect<
    GetDataLakeNamespaceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getInstance(
    input: GetInstanceRequest,
  ): Effect.Effect<
    GetInstanceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataIntegrationFlows(
    input: ListDataIntegrationFlowsRequest,
  ): Effect.Effect<
    ListDataIntegrationFlowsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataLakeDatasets(
    input: ListDataLakeDatasetsRequest,
  ): Effect.Effect<
    ListDataLakeDatasetsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataLakeNamespaces(
    input: ListDataLakeNamespacesRequest,
  ): Effect.Effect<
    ListDataLakeNamespacesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInstances(
    input: ListInstancesRequest,
  ): Effect.Effect<
    ListInstancesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDataIntegrationFlow(
    input: UpdateDataIntegrationFlowRequest,
  ): Effect.Effect<
    UpdateDataIntegrationFlowResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDataLakeDataset(
    input: UpdateDataLakeDatasetRequest,
  ): Effect.Effect<
    UpdateDataLakeDatasetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDataLakeNamespace(
    input: UpdateDataLakeNamespaceRequest,
  ): Effect.Effect<
    UpdateDataLakeNamespaceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateInstance(
    input: UpdateInstanceRequest,
  ): Effect.Effect<
    UpdateInstanceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Supplychain extends SupplyChain {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AscResourceArn = string;

export type AwsAccountId = string;

export interface BillOfMaterialsImportJob {
  instanceId: string;
  jobId: string;
  status: ConfigurationJobStatus;
  s3uri: string;
  message?: string;
}
export type ClientToken = string;

export type ConfigurationJobStatus =
  | "NEW"
  | "FAILED"
  | "IN_PROGRESS"
  | "QUEUED"
  | "SUCCESS";
export type ConfigurationS3Uri = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateBillOfMaterialsImportJobRequest {
  instanceId: string;
  s3uri: string;
  clientToken?: string;
}
export interface CreateBillOfMaterialsImportJobResponse {
  jobId: string;
}
export interface CreateDataIntegrationFlowRequest {
  instanceId: string;
  name: string;
  sources: Array<DataIntegrationFlowSource>;
  transformation: DataIntegrationFlowTransformation;
  target: DataIntegrationFlowTarget;
  tags?: Record<string, string>;
}
export interface CreateDataIntegrationFlowResponse {
  instanceId: string;
  name: string;
}
export interface CreateDataLakeDatasetRequest {
  instanceId: string;
  namespace: string;
  name: string;
  schema?: DataLakeDatasetSchema;
  description?: string;
  partitionSpec?: DataLakeDatasetPartitionSpec;
  tags?: Record<string, string>;
}
export interface CreateDataLakeDatasetResponse {
  dataset: DataLakeDataset;
}
export interface CreateDataLakeNamespaceRequest {
  instanceId: string;
  name: string;
  description?: string;
  tags?: Record<string, string>;
}
export interface CreateDataLakeNamespaceResponse {
  namespace: DataLakeNamespace;
}
export interface CreateInstanceRequest {
  instanceName?: string;
  instanceDescription?: string;
  kmsKeyArn?: string;
  webAppDnsDomain?: string;
  tags?: Record<string, string>;
  clientToken?: string;
}
export interface CreateInstanceResponse {
  instance: Instance;
}
export type DataIntegrationDatasetArn = string;

export interface DataIntegrationEvent {
  instanceId: string;
  eventId: string;
  eventType: DataIntegrationEventType;
  eventGroupId: string;
  eventTimestamp: Date | string;
  datasetTargetDetails?: DataIntegrationEventDatasetTargetDetails;
}
export type DataIntegrationEventData = string;

export interface DataIntegrationEventDatasetLoadExecutionDetails {
  status: DataIntegrationEventDatasetLoadStatus;
  message?: string;
}
export type DataIntegrationEventDatasetLoadStatus =
  | "SUCCEEDED"
  | "IN_PROGRESS"
  | "FAILED";
export type DataIntegrationEventDatasetOperationType =
  | "APPEND"
  | "UPSERT"
  | "DELETE";
export interface DataIntegrationEventDatasetTargetConfiguration {
  datasetIdentifier: string;
  operationType: DataIntegrationEventDatasetOperationType;
}
export interface DataIntegrationEventDatasetTargetDetails {
  datasetIdentifier: string;
  operationType: DataIntegrationEventDatasetOperationType;
  datasetLoadExecution: DataIntegrationEventDatasetLoadExecutionDetails;
}
export type DataIntegrationEventGroupId = string;

export type DataIntegrationEventList = Array<DataIntegrationEvent>;
export type DataIntegrationEventMaxResults = number;

export type DataIntegrationEventNextToken = string;

export type DataIntegrationEventType =
  | "FORECAST"
  | "INVENTORY_LEVEL"
  | "INBOUND_ORDER"
  | "INBOUND_ORDER_LINE"
  | "INBOUND_ORDER_LINE_SCHEDULE"
  | "OUTBOUND_ORDER_LINE"
  | "OUTBOUND_SHIPMENT"
  | "PROCESS_HEADER"
  | "PROCESS_OPERATION"
  | "PROCESS_PRODUCT"
  | "RESERVATION"
  | "SHIPMENT"
  | "SHIPMENT_STOP"
  | "SHIPMENT_STOP_ORDER"
  | "SUPPLY_PLAN"
  | "DATASET";
export interface DataIntegrationFlow {
  instanceId: string;
  name: string;
  sources: Array<DataIntegrationFlowSource>;
  transformation: DataIntegrationFlowTransformation;
  target: DataIntegrationFlowTarget;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
}
export interface DataIntegrationFlowDatasetOptions {
  loadType?: DataIntegrationFlowLoadType;
  dedupeRecords?: boolean;
  dedupeStrategy?: DataIntegrationFlowDedupeStrategy;
}
export interface DataIntegrationFlowDatasetSource {
  datasetIdentifier: string;
}
export interface DataIntegrationFlowDatasetSourceConfiguration {
  datasetIdentifier: string;
  options?: DataIntegrationFlowDatasetOptions;
}
export interface DataIntegrationFlowDatasetTargetConfiguration {
  datasetIdentifier: string;
  options?: DataIntegrationFlowDatasetOptions;
}
export interface DataIntegrationFlowDedupeStrategy {
  type: DataIntegrationFlowDedupeStrategyType;
  fieldPriority?: DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration;
}
export type DataIntegrationFlowDedupeStrategyType = "FIELD_PRIORITY";
export interface DataIntegrationFlowExecution {
  instanceId: string;
  flowName: string;
  executionId: string;
  status?: DataIntegrationFlowExecutionStatus;
  sourceInfo?: DataIntegrationFlowExecutionSourceInfo;
  message?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  outputMetadata?: DataIntegrationFlowExecutionOutputMetadata;
}
export type DataIntegrationFlowExecutionDiagnosticReportsRootS3URI = string;

export type DataIntegrationFlowExecutionList =
  Array<DataIntegrationFlowExecution>;
export type DataIntegrationFlowExecutionMaxResults = number;

export type DataIntegrationFlowExecutionNextToken = string;

export interface DataIntegrationFlowExecutionOutputMetadata {
  diagnosticReportsRootS3URI?: string;
}
export interface DataIntegrationFlowExecutionSourceInfo {
  sourceType: DataIntegrationFlowSourceType;
  s3Source?: DataIntegrationFlowS3Source;
  datasetSource?: DataIntegrationFlowDatasetSource;
}
export type DataIntegrationFlowExecutionStatus =
  | "SUCCEEDED"
  | "IN_PROGRESS"
  | "FAILED";
export interface DataIntegrationFlowFieldPriorityDedupeField {
  name: string;
  sortOrder: DataIntegrationFlowFieldPriorityDedupeSortOrder;
}
export type DataIntegrationFlowFieldPriorityDedupeFieldList =
  Array<DataIntegrationFlowFieldPriorityDedupeField>;
export type DataIntegrationFlowFieldPriorityDedupeFieldName = string;

export type DataIntegrationFlowFieldPriorityDedupeSortOrder = "ASC" | "DESC";
export interface DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration {
  fields: Array<DataIntegrationFlowFieldPriorityDedupeField>;
}
export type DataIntegrationFlowFileType = "CSV" | "PARQUET" | "JSON";
export type DataIntegrationFlowList = Array<DataIntegrationFlow>;
export type DataIntegrationFlowLoadType = "INCREMENTAL" | "REPLACE";
export type DataIntegrationFlowMaxResults = number;

export type DataIntegrationFlowName = string;

export type DataIntegrationFlowNextToken = string;

export interface DataIntegrationFlowS3Options {
  fileType?: DataIntegrationFlowFileType;
}
export type DataIntegrationFlowS3Prefix = string;

export interface DataIntegrationFlowS3Source {
  bucketName: string;
  key: string;
}
export interface DataIntegrationFlowS3SourceConfiguration {
  bucketName: string;
  prefix: string;
  options?: DataIntegrationFlowS3Options;
}
export interface DataIntegrationFlowS3TargetConfiguration {
  bucketName: string;
  prefix: string;
  options?: DataIntegrationFlowS3Options;
}
export interface DataIntegrationFlowSource {
  sourceType: DataIntegrationFlowSourceType;
  sourceName: string;
  s3Source?: DataIntegrationFlowS3SourceConfiguration;
  datasetSource?: DataIntegrationFlowDatasetSourceConfiguration;
}
export type DataIntegrationFlowSourceList = Array<DataIntegrationFlowSource>;
export type DataIntegrationFlowSourceName = string;

export type DataIntegrationFlowSourceType = "S3" | "DATASET";
export type DataIntegrationFlowSQLQuery = string;

export interface DataIntegrationFlowSQLTransformationConfiguration {
  query: string;
}
export interface DataIntegrationFlowTarget {
  targetType: DataIntegrationFlowTargetType;
  s3Target?: DataIntegrationFlowS3TargetConfiguration;
  datasetTarget?: DataIntegrationFlowDatasetTargetConfiguration;
}
export type DataIntegrationFlowTargetType = "S3" | "DATASET";
export interface DataIntegrationFlowTransformation {
  transformationType: DataIntegrationFlowTransformationType;
  sqlTransformation?: DataIntegrationFlowSQLTransformationConfiguration;
}
export type DataIntegrationFlowTransformationType = "SQL" | "NONE";
export type DataIntegrationS3ObjectKey = string;

export interface DataLakeDataset {
  instanceId: string;
  namespace: string;
  name: string;
  arn: string;
  schema: DataLakeDatasetSchema;
  description?: string;
  partitionSpec?: DataLakeDatasetPartitionSpec;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
}
export type DataLakeDatasetDescription = string;

export type DataLakeDatasetList = Array<DataLakeDataset>;
export type DataLakeDatasetMaxResults = number;

export type DataLakeDatasetName = string;

export type DataLakeDatasetNextToken = string;

export interface DataLakeDatasetPartitionField {
  name: string;
  transform: DataLakeDatasetPartitionFieldTransform;
}
export type DataLakeDatasetPartitionFieldList =
  Array<DataLakeDatasetPartitionField>;
export interface DataLakeDatasetPartitionFieldTransform {
  type: DataLakeDatasetPartitionTransformType;
}
export interface DataLakeDatasetPartitionSpec {
  fields: Array<DataLakeDatasetPartitionField>;
}
export type DataLakeDatasetPartitionTransformType =
  | "YEAR"
  | "MONTH"
  | "DAY"
  | "HOUR"
  | "IDENTITY";
export interface DataLakeDatasetPrimaryKeyField {
  name: string;
}
export type DataLakeDatasetPrimaryKeyFieldList =
  Array<DataLakeDatasetPrimaryKeyField>;
export interface DataLakeDatasetSchema {
  name: string;
  fields: Array<DataLakeDatasetSchemaField>;
  primaryKeys?: Array<DataLakeDatasetPrimaryKeyField>;
}
export interface DataLakeDatasetSchemaField {
  name: string;
  type: DataLakeDatasetSchemaFieldType;
  isRequired: boolean;
}
export type DataLakeDatasetSchemaFieldList = Array<DataLakeDatasetSchemaField>;
export type DataLakeDatasetSchemaFieldName = string;

export type DataLakeDatasetSchemaFieldType =
  | "INT"
  | "DOUBLE"
  | "STRING"
  | "TIMESTAMP"
  | "LONG";
export type DataLakeDatasetSchemaName = string;

export interface DataLakeNamespace {
  instanceId: string;
  name: string;
  arn: string;
  description?: string;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
}
export type DataLakeNamespaceDescription = string;

export type DataLakeNamespaceList = Array<DataLakeNamespace>;
export type DataLakeNamespaceMaxResults = number;

export type DataLakeNamespaceName = string;

export type DataLakeNamespaceNextToken = string;

export type DatasetIdentifier = string;

export interface DeleteDataIntegrationFlowRequest {
  instanceId: string;
  name: string;
}
export interface DeleteDataIntegrationFlowResponse {
  instanceId: string;
  name: string;
}
export interface DeleteDataLakeDatasetRequest {
  instanceId: string;
  namespace: string;
  name: string;
}
export interface DeleteDataLakeDatasetResponse {
  instanceId: string;
  namespace: string;
  name: string;
}
export interface DeleteDataLakeNamespaceRequest {
  instanceId: string;
  name: string;
}
export interface DeleteDataLakeNamespaceResponse {
  instanceId: string;
  name: string;
}
export interface DeleteInstanceRequest {
  instanceId: string;
}
export interface DeleteInstanceResponse {
  instance: Instance;
}
export interface GetBillOfMaterialsImportJobRequest {
  instanceId: string;
  jobId: string;
}
export interface GetBillOfMaterialsImportJobResponse {
  job: BillOfMaterialsImportJob;
}
export interface GetDataIntegrationEventRequest {
  instanceId: string;
  eventId: string;
}
export interface GetDataIntegrationEventResponse {
  event: DataIntegrationEvent;
}
export interface GetDataIntegrationFlowExecutionRequest {
  instanceId: string;
  flowName: string;
  executionId: string;
}
export interface GetDataIntegrationFlowExecutionResponse {
  flowExecution: DataIntegrationFlowExecution;
}
export interface GetDataIntegrationFlowRequest {
  instanceId: string;
  name: string;
}
export interface GetDataIntegrationFlowResponse {
  flow: DataIntegrationFlow;
}
export interface GetDataLakeDatasetRequest {
  instanceId: string;
  namespace: string;
  name: string;
}
export interface GetDataLakeDatasetResponse {
  dataset: DataLakeDataset;
}
export interface GetDataLakeNamespaceRequest {
  instanceId: string;
  name: string;
}
export interface GetDataLakeNamespaceResponse {
  namespace: DataLakeNamespace;
}
export interface GetInstanceRequest {
  instanceId: string;
}
export interface GetInstanceResponse {
  instance: Instance;
}
export interface Instance {
  instanceId: string;
  awsAccountId: string;
  state: InstanceState;
  errorMessage?: string;
  webAppDnsDomain?: string;
  createdTime?: Date | string;
  lastModifiedTime?: Date | string;
  instanceName?: string;
  instanceDescription?: string;
  kmsKeyArn?: string;
  versionNumber?: number;
}
export type InstanceDescription = string;

export type InstanceList = Array<Instance>;
export type InstanceMaxResults = number;

export type InstanceName = string;

export type InstanceNameList = Array<string>;
export type InstanceNextToken = string;

export type InstanceState =
  | "INITIALIZING"
  | "ACTIVE"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | "DELETING"
  | "DELETED";
export type InstanceStateList = Array<InstanceState>;
export type InstanceWebAppDnsDomain = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type KmsKeyArn = string;

export interface ListDataIntegrationEventsRequest {
  instanceId: string;
  eventType?: DataIntegrationEventType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataIntegrationEventsResponse {
  events: Array<DataIntegrationEvent>;
  nextToken?: string;
}
export interface ListDataIntegrationFlowExecutionsRequest {
  instanceId: string;
  flowName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataIntegrationFlowExecutionsResponse {
  flowExecutions: Array<DataIntegrationFlowExecution>;
  nextToken?: string;
}
export interface ListDataIntegrationFlowsRequest {
  instanceId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataIntegrationFlowsResponse {
  flows: Array<DataIntegrationFlow>;
  nextToken?: string;
}
export interface ListDataLakeDatasetsRequest {
  instanceId: string;
  namespace: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataLakeDatasetsResponse {
  datasets: Array<DataLakeDataset>;
  nextToken?: string;
}
export interface ListDataLakeNamespacesRequest {
  instanceId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataLakeNamespacesResponse {
  namespaces: Array<DataLakeNamespace>;
  nextToken?: string;
}
export interface ListInstancesRequest {
  nextToken?: string;
  maxResults?: number;
  instanceNameFilter?: Array<string>;
  instanceStateFilter?: Array<InstanceState>;
}
export interface ListInstancesResponse {
  instances: Array<Instance>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: Record<string, string>;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type S3BucketName = string;

export interface SendDataIntegrationEventRequest {
  instanceId: string;
  eventType: DataIntegrationEventType;
  data: string;
  eventGroupId: string;
  eventTimestamp?: Date | string;
  clientToken?: string;
  datasetTarget?: DataIntegrationEventDatasetTargetConfiguration;
}
export interface SendDataIntegrationEventResponse {
  eventId: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateDataIntegrationFlowRequest {
  instanceId: string;
  name: string;
  sources?: Array<DataIntegrationFlowSource>;
  transformation?: DataIntegrationFlowTransformation;
  target?: DataIntegrationFlowTarget;
}
export interface UpdateDataIntegrationFlowResponse {
  flow: DataIntegrationFlow;
}
export interface UpdateDataLakeDatasetRequest {
  instanceId: string;
  namespace: string;
  name: string;
  description?: string;
}
export interface UpdateDataLakeDatasetResponse {
  dataset: DataLakeDataset;
}
export interface UpdateDataLakeNamespaceRequest {
  instanceId: string;
  name: string;
  description?: string;
}
export interface UpdateDataLakeNamespaceResponse {
  namespace: DataLakeNamespace;
}
export interface UpdateInstanceRequest {
  instanceId: string;
  instanceName?: string;
  instanceDescription?: string;
}
export interface UpdateInstanceResponse {
  instance: Instance;
}
export type UUID = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace GetDataIntegrationEvent {
  export type Input = GetDataIntegrationEventRequest;
  export type Output = GetDataIntegrationEventResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataIntegrationFlowExecution {
  export type Input = GetDataIntegrationFlowExecutionRequest;
  export type Output = GetDataIntegrationFlowExecutionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataIntegrationEvents {
  export type Input = ListDataIntegrationEventsRequest;
  export type Output = ListDataIntegrationEventsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataIntegrationFlowExecutions {
  export type Input = ListDataIntegrationFlowExecutionsRequest;
  export type Output = ListDataIntegrationFlowExecutionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
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

export declare namespace SendDataIntegrationEvent {
  export type Input = SendDataIntegrationEventRequest;
  export type Output = SendDataIntegrationEventResponse;
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

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
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

export declare namespace CreateBillOfMaterialsImportJob {
  export type Input = CreateBillOfMaterialsImportJobRequest;
  export type Output = CreateBillOfMaterialsImportJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataIntegrationFlow {
  export type Input = CreateDataIntegrationFlowRequest;
  export type Output = CreateDataIntegrationFlowResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataLakeDataset {
  export type Input = CreateDataLakeDatasetRequest;
  export type Output = CreateDataLakeDatasetResponse;
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

export declare namespace CreateDataLakeNamespace {
  export type Input = CreateDataLakeNamespaceRequest;
  export type Output = CreateDataLakeNamespaceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateInstance {
  export type Input = CreateInstanceRequest;
  export type Output = CreateInstanceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataIntegrationFlow {
  export type Input = DeleteDataIntegrationFlowRequest;
  export type Output = DeleteDataIntegrationFlowResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDataLakeDataset {
  export type Input = DeleteDataLakeDatasetRequest;
  export type Output = DeleteDataLakeDatasetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataLakeNamespace {
  export type Input = DeleteDataLakeNamespaceRequest;
  export type Output = DeleteDataLakeNamespaceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInstance {
  export type Input = DeleteInstanceRequest;
  export type Output = DeleteInstanceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBillOfMaterialsImportJob {
  export type Input = GetBillOfMaterialsImportJobRequest;
  export type Output = GetBillOfMaterialsImportJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataIntegrationFlow {
  export type Input = GetDataIntegrationFlowRequest;
  export type Output = GetDataIntegrationFlowResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataLakeDataset {
  export type Input = GetDataLakeDatasetRequest;
  export type Output = GetDataLakeDatasetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataLakeNamespace {
  export type Input = GetDataLakeNamespaceRequest;
  export type Output = GetDataLakeNamespaceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInstance {
  export type Input = GetInstanceRequest;
  export type Output = GetInstanceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataIntegrationFlows {
  export type Input = ListDataIntegrationFlowsRequest;
  export type Output = ListDataIntegrationFlowsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataLakeDatasets {
  export type Input = ListDataLakeDatasetsRequest;
  export type Output = ListDataLakeDatasetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataLakeNamespaces {
  export type Input = ListDataLakeNamespacesRequest;
  export type Output = ListDataLakeNamespacesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInstances {
  export type Input = ListInstancesRequest;
  export type Output = ListInstancesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDataIntegrationFlow {
  export type Input = UpdateDataIntegrationFlowRequest;
  export type Output = UpdateDataIntegrationFlowResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDataLakeDataset {
  export type Input = UpdateDataLakeDatasetRequest;
  export type Output = UpdateDataLakeDatasetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDataLakeNamespace {
  export type Input = UpdateDataLakeNamespaceRequest;
  export type Output = UpdateDataLakeNamespaceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateInstance {
  export type Input = UpdateInstanceRequest;
  export type Output = UpdateInstanceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

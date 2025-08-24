import type { Effect, Stream, Data as EffectData } from "effect";
import type { ResponseError } from "@effect/platform/HttpClientError";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class NeptuneGraph extends AWSServiceClient {
  cancelQuery(
    input: CancelQueryInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  executeQuery(
    input: ExecuteQueryInput,
  ): Effect.Effect<
    ExecuteQueryOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | UnprocessableException
    | ValidationException
    | CommonAwsError
  >;
  getGraphSummary(
    input: GetGraphSummaryInput,
  ): Effect.Effect<
    GetGraphSummaryOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQuery(
    input: GetQueryInput,
  ): Effect.Effect<
    GetQueryOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listQueries(
    input: ListQueriesInput,
  ): Effect.Effect<
    ListQueriesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelExportTask(
    input: CancelExportTaskInput,
  ): Effect.Effect<
    CancelExportTaskOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelImportTask(
    input: CancelImportTaskInput,
  ): Effect.Effect<
    CancelImportTaskOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createGraph(
    input: CreateGraphInput,
  ): Effect.Effect<
    CreateGraphOutput,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createGraphSnapshot(
    input: CreateGraphSnapshotInput,
  ): Effect.Effect<
    CreateGraphSnapshotOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createGraphUsingImportTask(
    input: CreateGraphUsingImportTaskInput,
  ): Effect.Effect<
    CreateGraphUsingImportTaskOutput,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createPrivateGraphEndpoint(
    input: CreatePrivateGraphEndpointInput,
  ): Effect.Effect<
    CreatePrivateGraphEndpointOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteGraph(
    input: DeleteGraphInput,
  ): Effect.Effect<
    DeleteGraphOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteGraphSnapshot(
    input: DeleteGraphSnapshotInput,
  ): Effect.Effect<
    DeleteGraphSnapshotOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePrivateGraphEndpoint(
    input: DeletePrivateGraphEndpointInput,
  ): Effect.Effect<
    DeletePrivateGraphEndpointOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getExportTask(
    input: GetExportTaskInput,
  ): Effect.Effect<
    GetExportTaskOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getGraph(
    input: GetGraphInput,
  ): Effect.Effect<
    GetGraphOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getGraphSnapshot(
    input: GetGraphSnapshotInput,
  ): Effect.Effect<
    GetGraphSnapshotOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getImportTask(
    input: GetImportTaskInput,
  ): Effect.Effect<
    GetImportTaskOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPrivateGraphEndpoint(
    input: GetPrivateGraphEndpointInput,
  ): Effect.Effect<
    GetPrivateGraphEndpointOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listExportTasks(
    input: ListExportTasksInput,
  ): Effect.Effect<
    ListExportTasksOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listGraphSnapshots(
    input: ListGraphSnapshotsInput,
  ): Effect.Effect<
    ListGraphSnapshotsOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listGraphs(
    input: ListGraphsInput,
  ): Effect.Effect<
    ListGraphsOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listImportTasks(
    input: ListImportTasksInput,
  ): Effect.Effect<
    ListImportTasksOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPrivateGraphEndpoints(
    input: ListPrivateGraphEndpointsInput,
  ): Effect.Effect<
    ListPrivateGraphEndpointsOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  resetGraph(
    input: ResetGraphInput,
  ): Effect.Effect<
    ResetGraphOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  restoreGraphFromSnapshot(
    input: RestoreGraphFromSnapshotInput,
  ): Effect.Effect<
    RestoreGraphFromSnapshotOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startExportTask(
    input: StartExportTaskInput,
  ): Effect.Effect<
    StartExportTaskOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startImportTask(
    input: StartImportTaskInput,
  ): Effect.Effect<
    StartImportTaskOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateGraph(
    input: UpdateGraphInput,
  ): Effect.Effect<
    UpdateGraphOutput,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type Arn = string;

export type BlankNodeHandling = "convertToIri";
export interface CancelExportTaskInput {
  taskIdentifier: string;
}
export interface CancelExportTaskOutput {
  graphId: string;
  roleArn: string;
  taskId: string;
  status: ExportTaskStatus;
  format: ExportFormat;
  destination: string;
  kmsKeyIdentifier: string;
  parquetType?: ParquetType;
  statusReason?: string;
}
export interface CancelImportTaskInput {
  taskIdentifier: string;
}
export interface CancelImportTaskOutput {
  graphId?: string;
  taskId: string;
  source: string;
  format?: Format;
  parquetType?: ParquetType;
  roleArn: string;
  status: ImportTaskStatus;
}
export interface CancelQueryInput {
  graphIdentifier: string;
  queryId: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly reason?: ConflictExceptionReason;
}> {}
export type ConflictExceptionReason = "CONCURRENT_MODIFICATION";
export interface CreateGraphInput {
  graphName: string;
  tags?: Record<string, string>;
  publicConnectivity?: boolean;
  kmsKeyIdentifier?: string;
  vectorSearchConfiguration?: VectorSearchConfiguration;
  replicaCount?: number;
  deletionProtection?: boolean;
  provisionedMemory: number;
}
export interface CreateGraphOutput {
  id: string;
  name: string;
  arn: string;
  status?: GraphStatus;
  statusReason?: string;
  createTime?: Date | string;
  provisionedMemory?: number;
  endpoint?: string;
  publicConnectivity?: boolean;
  vectorSearchConfiguration?: VectorSearchConfiguration;
  replicaCount?: number;
  kmsKeyIdentifier?: string;
  sourceSnapshotId?: string;
  deletionProtection?: boolean;
  buildNumber?: string;
}
export interface CreateGraphSnapshotInput {
  graphIdentifier: string;
  snapshotName: string;
  tags?: Record<string, string>;
}
export interface CreateGraphSnapshotOutput {
  id: string;
  name: string;
  arn: string;
  sourceGraphId?: string;
  snapshotCreateTime?: Date | string;
  status?: SnapshotStatus;
  kmsKeyIdentifier?: string;
}
export interface CreateGraphUsingImportTaskInput {
  graphName: string;
  tags?: Record<string, string>;
  publicConnectivity?: boolean;
  kmsKeyIdentifier?: string;
  vectorSearchConfiguration?: VectorSearchConfiguration;
  replicaCount?: number;
  deletionProtection?: boolean;
  importOptions?: ImportOptions;
  maxProvisionedMemory?: number;
  minProvisionedMemory?: number;
  failOnError?: boolean;
  source: string;
  format?: Format;
  parquetType?: ParquetType;
  blankNodeHandling?: BlankNodeHandling;
  roleArn: string;
}
export interface CreateGraphUsingImportTaskOutput {
  graphId?: string;
  taskId: string;
  source: string;
  format?: Format;
  parquetType?: ParquetType;
  roleArn: string;
  status: ImportTaskStatus;
  importOptions?: ImportOptions;
}
export interface CreatePrivateGraphEndpointInput {
  graphIdentifier: string;
  vpcId?: string;
  subnetIds?: Array<string>;
  vpcSecurityGroupIds?: Array<string>;
}
export interface CreatePrivateGraphEndpointOutput {
  vpcId: string;
  subnetIds: Array<string>;
  status: PrivateGraphEndpointStatus;
  vpcEndpointId?: string;
}
export interface DeleteGraphInput {
  graphIdentifier: string;
  skipSnapshot: boolean;
}
export interface DeleteGraphOutput {
  id: string;
  name: string;
  arn: string;
  status?: GraphStatus;
  statusReason?: string;
  createTime?: Date | string;
  provisionedMemory?: number;
  endpoint?: string;
  publicConnectivity?: boolean;
  vectorSearchConfiguration?: VectorSearchConfiguration;
  replicaCount?: number;
  kmsKeyIdentifier?: string;
  sourceSnapshotId?: string;
  deletionProtection?: boolean;
  buildNumber?: string;
}
export interface DeleteGraphSnapshotInput {
  snapshotIdentifier: string;
}
export interface DeleteGraphSnapshotOutput {
  id: string;
  name: string;
  arn: string;
  sourceGraphId?: string;
  snapshotCreateTime?: Date | string;
  status?: SnapshotStatus;
  kmsKeyIdentifier?: string;
}
export interface DeletePrivateGraphEndpointInput {
  graphIdentifier: string;
  vpcId: string;
}
export interface DeletePrivateGraphEndpointOutput {
  vpcId: string;
  subnetIds: Array<string>;
  status: PrivateGraphEndpointStatus;
  vpcEndpointId?: string;
}
export type DocumentValuedMap = Record<string, unknown>;
export type EdgeLabels = Array<string>;
export type EdgeProperties = Array<string>;
export interface EdgeStructure {
  count?: number;
  edgeProperties?: Array<string>;
}
export type EdgeStructures = Array<EdgeStructure>;
export interface ExecuteQueryInput {
  graphIdentifier: string;
  queryString: string;
  language: QueryLanguage;
  parameters?: Record<string, unknown>;
  planCache?: PlanCacheType;
  explainMode?: ExplainMode;
  queryTimeoutMilliseconds?: number;
}
export interface ExecuteQueryOutput {
  payload: Stream.Stream<Uint8Array, ResponseError>;
}
export type ExplainMode = "STATIC" | "DETAILS";
export interface ExportFilter {
  vertexFilter?: Record<string, ExportFilterElement>;
  edgeFilter?: Record<string, ExportFilterElement>;
}
export interface ExportFilterElement {
  properties?: Record<string, ExportFilterPropertyAttributes>;
}
export type ExportFilterLabel = string;

export type ExportFilterOutputDataType = string;

export type ExportFilterOutputPropertyName = string;

export type ExportFilterPerLabelMap = Record<string, ExportFilterElement>;
export interface ExportFilterPropertyAttributes {
  outputType?: string;
  sourcePropertyName?: string;
  multiValueHandling?: MultiValueHandlingType;
}
export type ExportFilterPropertyMap = Record<
  string,
  ExportFilterPropertyAttributes
>;
export type ExportFilterSourcePropertyName = string;

export type ExportFormat = "PARQUET" | "CSV";
export interface ExportTaskDetails {
  startTime: Date | string;
  timeElapsedSeconds: number;
  progressPercentage: number;
  numVerticesWritten?: number;
  numEdgesWritten?: number;
}
export type ExportTaskId = string;

export type ExportTaskStatus =
  | "INITIALIZING"
  | "EXPORTING"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELLING"
  | "CANCELLED"
  | "DELETED";
export interface ExportTaskSummary {
  graphId: string;
  roleArn: string;
  taskId: string;
  status: ExportTaskStatus;
  format: ExportFormat;
  destination: string;
  kmsKeyIdentifier: string;
  parquetType?: ParquetType;
  statusReason?: string;
}
export type ExportTaskSummaryList = Array<ExportTaskSummary>;
export type Format = "CSV" | "OPEN_CYPHER" | "PARQUET" | "NTRIPLES";
export interface GetExportTaskInput {
  taskIdentifier: string;
}
export interface GetExportTaskOutput {
  graphId: string;
  roleArn: string;
  taskId: string;
  status: ExportTaskStatus;
  format: ExportFormat;
  destination: string;
  kmsKeyIdentifier: string;
  parquetType?: ParquetType;
  statusReason?: string;
  exportTaskDetails?: ExportTaskDetails;
  exportFilter?: ExportFilter;
}
export interface GetGraphInput {
  graphIdentifier: string;
}
export interface GetGraphOutput {
  id: string;
  name: string;
  arn: string;
  status?: GraphStatus;
  statusReason?: string;
  createTime?: Date | string;
  provisionedMemory?: number;
  endpoint?: string;
  publicConnectivity?: boolean;
  vectorSearchConfiguration?: VectorSearchConfiguration;
  replicaCount?: number;
  kmsKeyIdentifier?: string;
  sourceSnapshotId?: string;
  deletionProtection?: boolean;
  buildNumber?: string;
}
export interface GetGraphSnapshotInput {
  snapshotIdentifier: string;
}
export interface GetGraphSnapshotOutput {
  id: string;
  name: string;
  arn: string;
  sourceGraphId?: string;
  snapshotCreateTime?: Date | string;
  status?: SnapshotStatus;
  kmsKeyIdentifier?: string;
}
export interface GetGraphSummaryInput {
  graphIdentifier: string;
  mode?: GraphSummaryMode;
}
export interface GetGraphSummaryOutput {
  version?: string;
  lastStatisticsComputationTime?: Date | string;
  graphSummary?: GraphDataSummary;
}
export interface GetImportTaskInput {
  taskIdentifier: string;
}
export interface GetImportTaskOutput {
  graphId?: string;
  taskId: string;
  source: string;
  format?: Format;
  parquetType?: ParquetType;
  roleArn: string;
  status: ImportTaskStatus;
  importOptions?: ImportOptions;
  importTaskDetails?: ImportTaskDetails;
  attemptNumber?: number;
  statusReason?: string;
}
export interface GetPrivateGraphEndpointInput {
  graphIdentifier: string;
  vpcId: string;
}
export interface GetPrivateGraphEndpointOutput {
  vpcId: string;
  subnetIds: Array<string>;
  status: PrivateGraphEndpointStatus;
  vpcEndpointId?: string;
}
export interface GetQueryInput {
  graphIdentifier: string;
  queryId: string;
}
export interface GetQueryOutput {
  id?: string;
  queryString?: string;
  waited?: number;
  elapsed?: number;
  state?: QueryState;
}
export interface GraphDataSummary {
  numNodes?: number;
  numEdges?: number;
  numNodeLabels?: number;
  numEdgeLabels?: number;
  nodeLabels?: Array<string>;
  edgeLabels?: Array<string>;
  numNodeProperties?: number;
  numEdgeProperties?: number;
  nodeProperties?: Array<Record<string, number>>;
  edgeProperties?: Array<Record<string, number>>;
  totalNodePropertyValues?: number;
  totalEdgePropertyValues?: number;
  nodeStructures?: Array<NodeStructure>;
  edgeStructures?: Array<EdgeStructure>;
}
export type GraphId = string;

export type GraphIdentifier = string;

export type GraphName = string;

export interface GraphSnapshotSummary {
  id: string;
  name: string;
  arn: string;
  sourceGraphId?: string;
  snapshotCreateTime?: Date | string;
  status?: SnapshotStatus;
  kmsKeyIdentifier?: string;
}
export type GraphSnapshotSummaryList = Array<GraphSnapshotSummary>;
export type GraphStatus =
  | "CREATING"
  | "AVAILABLE"
  | "DELETING"
  | "RESETTING"
  | "UPDATING"
  | "SNAPSHOTTING"
  | "FAILED"
  | "IMPORTING";
export interface GraphSummary {
  id: string;
  name: string;
  arn: string;
  status?: GraphStatus;
  provisionedMemory?: number;
  publicConnectivity?: boolean;
  endpoint?: string;
  replicaCount?: number;
  kmsKeyIdentifier?: string;
  deletionProtection?: boolean;
}
export type GraphSummaryList = Array<GraphSummary>;
export type GraphSummaryMode = "BASIC" | "DETAILED";
interface _ImportOptions {
  neptune?: NeptuneImportOptions;
}

export type ImportOptions = _ImportOptions & { neptune: NeptuneImportOptions };
export interface ImportTaskDetails {
  status: string;
  startTime: Date | string;
  timeElapsedSeconds: number;
  progressPercentage: number;
  errorCount: number;
  errorDetails?: string;
  statementCount: number;
  dictionaryEntryCount: number;
}
export type ImportTaskStatus =
  | "INITIALIZING"
  | "EXPORTING"
  | "ANALYZING_DATA"
  | "IMPORTING"
  | "REPROVISIONING"
  | "ROLLING_BACK"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELLING"
  | "CANCELLED"
  | "DELETED";
export interface ImportTaskSummary {
  graphId?: string;
  taskId: string;
  source: string;
  format?: Format;
  parquetType?: ParquetType;
  roleArn: string;
  status: ImportTaskStatus;
}
export type ImportTaskSummaryList = Array<ImportTaskSummary>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type KmsKeyArn = string;

export interface ListExportTasksInput {
  graphIdentifier?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListExportTasksOutput {
  tasks: Array<ExportTaskSummary>;
  nextToken?: string;
}
export interface ListGraphsInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListGraphSnapshotsInput {
  graphIdentifier?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListGraphSnapshotsOutput {
  graphSnapshots: Array<GraphSnapshotSummary>;
  nextToken?: string;
}
export interface ListGraphsOutput {
  graphs: Array<GraphSummary>;
  nextToken?: string;
}
export interface ListImportTasksInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListImportTasksOutput {
  tasks: Array<ImportTaskSummary>;
  nextToken?: string;
}
export interface ListPrivateGraphEndpointsInput {
  graphIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPrivateGraphEndpointsOutput {
  privateGraphEndpoints: Array<PrivateGraphEndpointSummary>;
  nextToken?: string;
}
export interface ListQueriesInput {
  graphIdentifier: string;
  maxResults: number;
  state?: QueryStateInput;
}
export interface ListQueriesOutput {
  queries: Array<QuerySummary>;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: Record<string, string>;
}
export type LongValuedMap = Record<string, number>;
export type LongValuedMapList = Array<Record<string, number>>;
export type MaxResults = number;

export type MultiValueHandlingType = "TO_LIST" | "PICK_FIRST";
export interface NeptuneImportOptions {
  s3ExportPath: string;
  s3ExportKmsKeyId: string;
  preserveDefaultVertexLabels?: boolean;
  preserveEdgeIds?: boolean;
}
export type NodeLabels = Array<string>;
export type NodeProperties = Array<string>;
export interface NodeStructure {
  count?: number;
  nodeProperties?: Array<string>;
  distinctOutgoingEdgeLabels?: Array<string>;
}
export type NodeStructures = Array<NodeStructure>;
export type OutgoingEdgeLabels = Array<string>;
export type PaginationToken = string;

export type ParquetType = "COLUMNAR";
export type PlanCacheType = "ENABLED" | "DISABLED" | "AUTO";
export type PrivateGraphEndpointStatus =
  | "CREATING"
  | "AVAILABLE"
  | "DELETING"
  | "FAILED";
export interface PrivateGraphEndpointSummary {
  vpcId: string;
  subnetIds: Array<string>;
  status: PrivateGraphEndpointStatus;
  vpcEndpointId?: string;
}
export type PrivateGraphEndpointSummaryList =
  Array<PrivateGraphEndpointSummary>;
export type ProvisionedMemory = number;

export type QueryLanguage = "OPEN_CYPHER";
export type QueryResponseBlob = Uint8Array | string;

export type QueryState = "RUNNING" | "WAITING" | "CANCELLING";
export type QueryStateInput = "ALL" | "RUNNING" | "WAITING" | "CANCELLING";
export interface QuerySummary {
  id?: string;
  queryString?: string;
  waited?: number;
  elapsed?: number;
  state?: QueryState;
}
export type QuerySummaryList = Array<QuerySummary>;
export type ReplicaCount = number;

export interface ResetGraphInput {
  graphIdentifier: string;
  skipSnapshot: boolean;
}
export interface ResetGraphOutput {
  id: string;
  name: string;
  arn: string;
  status?: GraphStatus;
  statusReason?: string;
  createTime?: Date | string;
  provisionedMemory?: number;
  endpoint?: string;
  publicConnectivity?: boolean;
  vectorSearchConfiguration?: VectorSearchConfiguration;
  replicaCount?: number;
  kmsKeyIdentifier?: string;
  sourceSnapshotId?: string;
  deletionProtection?: boolean;
  buildNumber?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export interface RestoreGraphFromSnapshotInput {
  snapshotIdentifier: string;
  graphName: string;
  provisionedMemory?: number;
  deletionProtection?: boolean;
  tags?: Record<string, string>;
  replicaCount?: number;
  publicConnectivity?: boolean;
}
export interface RestoreGraphFromSnapshotOutput {
  id: string;
  name: string;
  arn: string;
  status?: GraphStatus;
  statusReason?: string;
  createTime?: Date | string;
  provisionedMemory?: number;
  endpoint?: string;
  publicConnectivity?: boolean;
  vectorSearchConfiguration?: VectorSearchConfiguration;
  replicaCount?: number;
  kmsKeyIdentifier?: string;
  sourceSnapshotId?: string;
  deletionProtection?: boolean;
  buildNumber?: string;
}
export type RoleArn = string;

export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export type SnapshotId = string;

export type SnapshotIdentifier = string;

export type SnapshotName = string;

export type SnapshotStatus = "CREATING" | "AVAILABLE" | "DELETING" | "FAILED";
export interface StartExportTaskInput {
  graphIdentifier: string;
  roleArn: string;
  format: ExportFormat;
  destination: string;
  kmsKeyIdentifier: string;
  parquetType?: ParquetType;
  exportFilter?: ExportFilter;
  tags?: Record<string, string>;
}
export interface StartExportTaskOutput {
  graphId: string;
  roleArn: string;
  taskId: string;
  status: ExportTaskStatus;
  format: ExportFormat;
  destination: string;
  kmsKeyIdentifier: string;
  parquetType?: ParquetType;
  statusReason?: string;
  exportFilter?: ExportFilter;
}
export interface StartImportTaskInput {
  importOptions?: ImportOptions;
  failOnError?: boolean;
  source: string;
  format?: Format;
  parquetType?: ParquetType;
  blankNodeHandling?: BlankNodeHandling;
  graphIdentifier: string;
  roleArn: string;
}
export interface StartImportTaskOutput {
  graphId?: string;
  taskId: string;
  source: string;
  format?: Format;
  parquetType?: ParquetType;
  roleArn: string;
  status: ImportTaskStatus;
  importOptions?: ImportOptions;
}
export type SubnetId = string;

export type SubnetIds = Array<string>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export type TaskId = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export declare class UnprocessableException extends EffectData.TaggedError(
  "UnprocessableException",
)<{
  readonly message: string;
  readonly reason: UnprocessableExceptionReason;
}> {}
export type UnprocessableExceptionReason =
  | "QUERY_TIMEOUT"
  | "INTERNAL_LIMIT_EXCEEDED"
  | "MEMORY_LIMIT_EXCEEDED"
  | "STORAGE_LIMIT_EXCEEDED"
  | "PARTITION_FULL";
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateGraphInput {
  graphIdentifier: string;
  publicConnectivity?: boolean;
  provisionedMemory?: number;
  deletionProtection?: boolean;
}
export interface UpdateGraphOutput {
  id: string;
  name: string;
  arn: string;
  status?: GraphStatus;
  statusReason?: string;
  createTime?: Date | string;
  provisionedMemory?: number;
  endpoint?: string;
  publicConnectivity?: boolean;
  vectorSearchConfiguration?: VectorSearchConfiguration;
  replicaCount?: number;
  kmsKeyIdentifier?: string;
  sourceSnapshotId?: string;
  deletionProtection?: boolean;
  buildNumber?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason?: ValidationExceptionReason;
}> {}
export type ValidationExceptionReason =
  | "CONSTRAINT_VIOLATION"
  | "ILLEGAL_ARGUMENT"
  | "MALFORMED_QUERY"
  | "QUERY_CANCELLED"
  | "QUERY_TOO_LARGE"
  | "UNSUPPORTED_OPERATION"
  | "BAD_REQUEST";
export interface VectorSearchConfiguration {
  dimension: number;
}
export type VectorSearchDimension = number;

export type VpcEndpointId = string;

export type VpcId = string;

export declare namespace CancelQuery {
  export type Input = CancelQueryInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ExecuteQuery {
  export type Input = ExecuteQueryInput;
  export type Output = ExecuteQueryOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | UnprocessableException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGraphSummary {
  export type Input = GetGraphSummaryInput;
  export type Output = GetGraphSummaryOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQuery {
  export type Input = GetQueryInput;
  export type Output = GetQueryOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListQueries {
  export type Input = ListQueriesInput;
  export type Output = ListQueriesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelExportTask {
  export type Input = CancelExportTaskInput;
  export type Output = CancelExportTaskOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelImportTask {
  export type Input = CancelImportTaskInput;
  export type Output = CancelImportTaskOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGraph {
  export type Input = CreateGraphInput;
  export type Output = CreateGraphOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGraphSnapshot {
  export type Input = CreateGraphSnapshotInput;
  export type Output = CreateGraphSnapshotOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGraphUsingImportTask {
  export type Input = CreateGraphUsingImportTaskInput;
  export type Output = CreateGraphUsingImportTaskOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePrivateGraphEndpoint {
  export type Input = CreatePrivateGraphEndpointInput;
  export type Output = CreatePrivateGraphEndpointOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGraph {
  export type Input = DeleteGraphInput;
  export type Output = DeleteGraphOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGraphSnapshot {
  export type Input = DeleteGraphSnapshotInput;
  export type Output = DeleteGraphSnapshotOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePrivateGraphEndpoint {
  export type Input = DeletePrivateGraphEndpointInput;
  export type Output = DeletePrivateGraphEndpointOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExportTask {
  export type Input = GetExportTaskInput;
  export type Output = GetExportTaskOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGraph {
  export type Input = GetGraphInput;
  export type Output = GetGraphOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGraphSnapshot {
  export type Input = GetGraphSnapshotInput;
  export type Output = GetGraphSnapshotOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetImportTask {
  export type Input = GetImportTaskInput;
  export type Output = GetImportTaskOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPrivateGraphEndpoint {
  export type Input = GetPrivateGraphEndpointInput;
  export type Output = GetPrivateGraphEndpointOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExportTasks {
  export type Input = ListExportTasksInput;
  export type Output = ListExportTasksOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGraphSnapshots {
  export type Input = ListGraphSnapshotsInput;
  export type Output = ListGraphSnapshotsOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGraphs {
  export type Input = ListGraphsInput;
  export type Output = ListGraphsOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListImportTasks {
  export type Input = ListImportTasksInput;
  export type Output = ListImportTasksOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPrivateGraphEndpoints {
  export type Input = ListPrivateGraphEndpointsInput;
  export type Output = ListPrivateGraphEndpointsOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetGraph {
  export type Input = ResetGraphInput;
  export type Output = ResetGraphOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RestoreGraphFromSnapshot {
  export type Input = RestoreGraphFromSnapshotInput;
  export type Output = RestoreGraphFromSnapshotOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartExportTask {
  export type Input = StartExportTaskInput;
  export type Output = StartExportTaskOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartImportTask {
  export type Input = StartImportTaskInput;
  export type Output = StartImportTaskOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateGraph {
  export type Input = UpdateGraphInput;
  export type Output = UpdateGraphOutput;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "Neptune Graph",
  version: "2023-11-29",
  protocol: "restJson1",
  operations: {
    CancelQuery: "DELETE /queries/{queryId}",
    ExecuteQuery: {
      http: "POST /queries",
      traits: {
        payload: "httpPayload",
      },
    },
    GetGraphSummary: "GET /summary",
    GetQuery: "GET /queries/{queryId}",
    ListQueries: "GET /queries",
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CancelExportTask: "DELETE /exporttasks/{taskIdentifier}",
    CancelImportTask: "DELETE /importtasks/{taskIdentifier}",
    CreateGraph: "POST /graphs",
    CreateGraphSnapshot: "POST /snapshots",
    CreateGraphUsingImportTask: "POST /importtasks",
    CreatePrivateGraphEndpoint: "POST /graphs/{graphIdentifier}/endpoints/",
    DeleteGraph: "DELETE /graphs/{graphIdentifier}",
    DeleteGraphSnapshot: "DELETE /snapshots/{snapshotIdentifier}",
    DeletePrivateGraphEndpoint:
      "DELETE /graphs/{graphIdentifier}/endpoints/{vpcId}",
    GetExportTask: "GET /exporttasks/{taskIdentifier}",
    GetGraph: "GET /graphs/{graphIdentifier}",
    GetGraphSnapshot: "GET /snapshots/{snapshotIdentifier}",
    GetImportTask: "GET /importtasks/{taskIdentifier}",
    GetPrivateGraphEndpoint: "GET /graphs/{graphIdentifier}/endpoints/{vpcId}",
    ListExportTasks: "GET /exporttasks",
    ListGraphSnapshots: "GET /snapshots",
    ListGraphs: "GET /graphs",
    ListImportTasks: "GET /importtasks",
    ListPrivateGraphEndpoints: "GET /graphs/{graphIdentifier}/endpoints/",
    ResetGraph: "PUT /graphs/{graphIdentifier}",
    RestoreGraphFromSnapshot: "POST /snapshots/{snapshotIdentifier}/restore",
    StartExportTask: "POST /exporttasks",
    StartImportTask: "POST /graphs/{graphIdentifier}/importtasks",
    UpdateGraph: "PATCH /graphs/{graphIdentifier}",
  },
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;

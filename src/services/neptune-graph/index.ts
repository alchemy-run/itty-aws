import type { Effect, Stream, Data as EffectData } from "effect";
import type { ResponseError } from "@effect/platform/HttpClientError";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";
import { RestJson1Protocol } from "../../protocols/restjson1.js";

export class NeptuneGraph extends AWSServiceClient {
  constructor(cfg: any) {
    super("neptune-graph", new RestJson1Protocol(), cfg);
  }

  cancelQuery(
    input: CancelQueryInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("CancelQuery", input);
  }
  executeQuery(
    input: ExecuteQueryInput,
  ): Effect.Effect<
    ExecuteQueryOutput,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | UnprocessableException | ValidationException | CommonAwsError
  > {
    return this.call("ExecuteQuery", input);
  }
  getGraphSummary(
    input: GetGraphSummaryInput,
  ): Effect.Effect<
    GetGraphSummaryOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("GetGraphSummary", input);
  }
  getQuery(
    input: GetQueryInput,
  ): Effect.Effect<
    GetQueryOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("GetQuery", input);
  }
  listQueries(
    input: ListQueriesInput,
  ): Effect.Effect<
    ListQueriesOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("ListQueries", input);
  }
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("ListTagsForResource", input);
  }
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("TagResource", input);
  }
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("UntagResource", input);
  }
}

export default NeptuneGraph;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type Arn = string;

export type BlankNodeHandling = "CONVERT_TO_IRI";
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
export type ExportFilterPropertyMap = Record<string, ExportFilterPropertyAttributes>;
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

export type ExportTaskStatus = "INITIALIZING" | "EXPORTING" | "SUCCEEDED" | "FAILED" | "CANCELLING" | "CANCELLED" | "DELETED";
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
export type GraphStatus = "CREATING" | "AVAILABLE" | "DELETING" | "RESETTING" | "UPDATING" | "SNAPSHOTTING" | "FAILED" | "IMPORTING";
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

export type ImportOptions = (_ImportOptions & { neptune: NeptuneImportOptions });
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
export type ImportTaskStatus = "INITIALIZING" | "EXPORTING" | "ANALYZING_DATA" | "IMPORTING" | "REPROVISIONING" | "ROLLING_BACK" | "SUCCEEDED" | "FAILED" | "CANCELLING" | "CANCELLED" | "DELETED";
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
export type PrivateGraphEndpointStatus = "CREATING" | "AVAILABLE" | "DELETING" | "FAILED";
export interface PrivateGraphEndpointSummary {
  vpcId: string;
  subnetIds: Array<string>;
  status: PrivateGraphEndpointStatus;
  vpcEndpointId?: string;
}
export type PrivateGraphEndpointSummaryList = Array<PrivateGraphEndpointSummary>;
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
export interface TagResourceOutput {
}
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
export type UnprocessableExceptionReason = "QUERY_TIMEOUT" | "INTERNAL_LIMIT_EXCEEDED" | "MEMORY_LIMIT_EXCEEDED" | "STORAGE_LIMIT_EXCEEDED" | "PARTITION_FULL";
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {
}
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
export type ValidationExceptionReason = "CONSTRAINT_VIOLATION" | "ILLEGAL_ARGUMENT" | "MALFORMED_QUERY" | "QUERY_CANCELLED" | "QUERY_TOO_LARGE" | "UNSUPPORTED_OPERATION" | "BAD_REQUEST";
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


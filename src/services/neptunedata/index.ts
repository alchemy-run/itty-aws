import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class neptunedata extends AWSServiceClient {
  cancelGremlinQuery(
    input: CancelGremlinQueryInput,
  ): Effect.Effect<
    CancelGremlinQueryOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  cancelLoaderJob(
    input: CancelLoaderJobInput,
  ): Effect.Effect<
    CancelLoaderJobOutput,
    | BadRequestException
    | BulkLoadIdNotFoundException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InternalFailureException
    | InvalidArgumentException
    | InvalidParameterException
    | LoadUrlAccessDeniedException
    | MissingParameterException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  cancelMLDataProcessingJob(
    input: CancelMLDataProcessingJobInput,
  ): Effect.Effect<
    CancelMLDataProcessingJobOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  cancelMLModelTrainingJob(
    input: CancelMLModelTrainingJobInput,
  ): Effect.Effect<
    CancelMLModelTrainingJobOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  cancelMLModelTransformJob(
    input: CancelMLModelTransformJobInput,
  ): Effect.Effect<
    CancelMLModelTransformJobOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  cancelOpenCypherQuery(
    input: CancelOpenCypherQueryInput,
  ): Effect.Effect<
    CancelOpenCypherQueryOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidNumericDataException
    | InvalidParameterException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  createMLEndpoint(
    input: CreateMLEndpointInput,
  ): Effect.Effect<
    CreateMLEndpointOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteMLEndpoint(
    input: DeleteMLEndpointInput,
  ): Effect.Effect<
    DeleteMLEndpointOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deletePropertygraphStatistics(input: {}): Effect.Effect<
    DeletePropertygraphStatisticsOutput,
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteSparqlStatistics(input: {}): Effect.Effect<
    DeleteSparqlStatisticsOutput,
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  executeFastReset(
    input: ExecuteFastResetInput,
  ): Effect.Effect<
    ExecuteFastResetOutput,
    | AccessDeniedException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MethodNotAllowedException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | ServerShutdownException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  executeGremlinExplainQuery(
    input: ExecuteGremlinExplainQueryInput,
  ): Effect.Effect<
    ExecuteGremlinExplainQueryOutput,
    | BadRequestException
    | CancelledByUserException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MalformedQueryException
    | MemoryLimitExceededException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | QueryLimitExceededException
    | QueryLimitException
    | QueryTooLargeException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  executeGremlinProfileQuery(
    input: ExecuteGremlinProfileQueryInput,
  ): Effect.Effect<
    ExecuteGremlinProfileQueryOutput,
    | BadRequestException
    | CancelledByUserException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MalformedQueryException
    | MemoryLimitExceededException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | QueryLimitExceededException
    | QueryLimitException
    | QueryTooLargeException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  executeGremlinQuery(
    input: ExecuteGremlinQueryInput,
  ): Effect.Effect<
    ExecuteGremlinQueryOutput,
    | BadRequestException
    | CancelledByUserException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MalformedQueryException
    | MemoryLimitExceededException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | QueryLimitExceededException
    | QueryLimitException
    | QueryTooLargeException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  executeOpenCypherExplainQuery(
    input: ExecuteOpenCypherExplainQueryInput,
  ): Effect.Effect<
    ExecuteOpenCypherExplainQueryOutput,
    | BadRequestException
    | CancelledByUserException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidNumericDataException
    | InvalidParameterException
    | MalformedQueryException
    | MemoryLimitExceededException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | QueryLimitExceededException
    | QueryLimitException
    | QueryTooLargeException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  executeOpenCypherQuery(
    input: ExecuteOpenCypherQueryInput,
  ): Effect.Effect<
    ExecuteOpenCypherQueryOutput,
    | BadRequestException
    | CancelledByUserException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidNumericDataException
    | InvalidParameterException
    | MalformedQueryException
    | MemoryLimitExceededException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | QueryLimitExceededException
    | QueryLimitException
    | QueryTooLargeException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getEngineStatus(input: {}): Effect.Effect<
    GetEngineStatusOutput,
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InternalFailureException
    | InvalidArgumentException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getGremlinQueryStatus(
    input: GetGremlinQueryStatusInput,
  ): Effect.Effect<
    GetGremlinQueryStatusOutput,
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getLoaderJobStatus(
    input: GetLoaderJobStatusInput,
  ): Effect.Effect<
    GetLoaderJobStatusOutput,
    | BadRequestException
    | BulkLoadIdNotFoundException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InternalFailureException
    | InvalidArgumentException
    | InvalidParameterException
    | LoadUrlAccessDeniedException
    | MissingParameterException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getMLDataProcessingJob(
    input: GetMLDataProcessingJobInput,
  ): Effect.Effect<
    GetMLDataProcessingJobOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getMLEndpoint(
    input: GetMLEndpointInput,
  ): Effect.Effect<
    GetMLEndpointOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getMLModelTrainingJob(
    input: GetMLModelTrainingJobInput,
  ): Effect.Effect<
    GetMLModelTrainingJobOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getMLModelTransformJob(
    input: GetMLModelTransformJobInput,
  ): Effect.Effect<
    GetMLModelTransformJobOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getOpenCypherQueryStatus(
    input: GetOpenCypherQueryStatusInput,
  ): Effect.Effect<
    GetOpenCypherQueryStatusOutput,
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidNumericDataException
    | InvalidParameterException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getPropertygraphStatistics(input: {}): Effect.Effect<
    GetPropertygraphStatisticsOutput,
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getPropertygraphStream(
    input: GetPropertygraphStreamInput,
  ): Effect.Effect<
    GetPropertygraphStreamOutput,
    | ClientTimeoutException
    | ConstraintViolationException
    | ExpiredStreamException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MemoryLimitExceededException
    | PreconditionsFailedException
    | StreamRecordsNotFoundException
    | ThrottlingException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getPropertygraphSummary(
    input: GetPropertygraphSummaryInput,
  ): Effect.Effect<
    GetPropertygraphSummaryOutput,
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getRDFGraphSummary(
    input: GetRDFGraphSummaryInput,
  ): Effect.Effect<
    GetRDFGraphSummaryOutput,
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getSparqlStatistics(input: {}): Effect.Effect<
    GetSparqlStatisticsOutput,
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getSparqlStream(
    input: GetSparqlStreamInput,
  ): Effect.Effect<
    GetSparqlStreamOutput,
    | ClientTimeoutException
    | ConstraintViolationException
    | ExpiredStreamException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MemoryLimitExceededException
    | PreconditionsFailedException
    | StreamRecordsNotFoundException
    | ThrottlingException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listGremlinQueries(
    input: ListGremlinQueriesInput,
  ): Effect.Effect<
    ListGremlinQueriesOutput,
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listLoaderJobs(
    input: ListLoaderJobsInput,
  ): Effect.Effect<
    ListLoaderJobsOutput,
    | BadRequestException
    | BulkLoadIdNotFoundException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InternalFailureException
    | InvalidArgumentException
    | InvalidParameterException
    | LoadUrlAccessDeniedException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listMLDataProcessingJobs(
    input: ListMLDataProcessingJobsInput,
  ): Effect.Effect<
    ListMLDataProcessingJobsOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listMLEndpoints(
    input: ListMLEndpointsInput,
  ): Effect.Effect<
    ListMLEndpointsOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listMLModelTrainingJobs(
    input: ListMLModelTrainingJobsInput,
  ): Effect.Effect<
    ListMLModelTrainingJobsOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listMLModelTransformJobs(
    input: ListMLModelTransformJobsInput,
  ): Effect.Effect<
    ListMLModelTransformJobsOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listOpenCypherQueries(
    input: ListOpenCypherQueriesInput,
  ): Effect.Effect<
    ListOpenCypherQueriesOutput,
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidNumericDataException
    | InvalidParameterException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  managePropertygraphStatistics(
    input: ManagePropertygraphStatisticsInput,
  ): Effect.Effect<
    ManagePropertygraphStatisticsOutput,
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  manageSparqlStatistics(
    input: ManageSparqlStatisticsInput,
  ): Effect.Effect<
    ManageSparqlStatisticsOutput,
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  startLoaderJob(
    input: StartLoaderJobInput,
  ): Effect.Effect<
    StartLoaderJobOutput,
    | BadRequestException
    | BulkLoadIdNotFoundException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InternalFailureException
    | InvalidArgumentException
    | InvalidParameterException
    | LoadUrlAccessDeniedException
    | MissingParameterException
    | PreconditionsFailedException
    | S3Exception
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  startMLDataProcessingJob(
    input: StartMLDataProcessingJobInput,
  ): Effect.Effect<
    StartMLDataProcessingJobOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  startMLModelTrainingJob(
    input: StartMLModelTrainingJobInput,
  ): Effect.Effect<
    StartMLModelTrainingJobOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  startMLModelTransformJob(
    input: StartMLModelTransformJobInput,
  ): Effect.Effect<
    StartMLModelTransformJobOutput,
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
}

export declare class Neptunedata extends neptunedata {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export type Action = "initiateDatabaseReset" | "performDatabaseReset";
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class BulkLoadIdNotFoundException extends EffectData.TaggedError(
  "BulkLoadIdNotFoundException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export interface CancelGremlinQueryInput {
  queryId: string;
}
export interface CancelGremlinQueryOutput {
  status?: string;
}
export declare class CancelledByUserException extends EffectData.TaggedError(
  "CancelledByUserException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export interface CancelLoaderJobInput {
  loadId: string;
}
export interface CancelLoaderJobOutput {
  status?: string;
}
export interface CancelMLDataProcessingJobInput {
  id: string;
  neptuneIamRoleArn?: string;
  clean?: boolean;
}
export interface CancelMLDataProcessingJobOutput {
  status?: string;
}
export interface CancelMLModelTrainingJobInput {
  id: string;
  neptuneIamRoleArn?: string;
  clean?: boolean;
}
export interface CancelMLModelTrainingJobOutput {
  status?: string;
}
export interface CancelMLModelTransformJobInput {
  id: string;
  neptuneIamRoleArn?: string;
  clean?: boolean;
}
export interface CancelMLModelTransformJobOutput {
  status?: string;
}
export interface CancelOpenCypherQueryInput {
  queryId: string;
  silent?: boolean;
}
export interface CancelOpenCypherQueryOutput {
  status?: string;
  payload?: boolean;
}
export type Classes = Array<string>;
export declare class ClientTimeoutException extends EffectData.TaggedError(
  "ClientTimeoutException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class ConstraintViolationException extends EffectData.TaggedError(
  "ConstraintViolationException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export interface CreateMLEndpointInput {
  id?: string;
  mlModelTrainingJobId?: string;
  mlModelTransformJobId?: string;
  update?: boolean;
  neptuneIamRoleArn?: string;
  modelName?: string;
  instanceType?: string;
  instanceCount?: number;
  volumeEncryptionKMSKey?: string;
}
export interface CreateMLEndpointOutput {
  id?: string;
  arn?: string;
  creationTimeInMillis?: number;
}
export interface CustomModelTrainingParameters {
  sourceS3DirectoryPath: string;
  trainingEntryPointScript?: string;
  transformEntryPointScript?: string;
}
export interface CustomModelTransformParameters {
  sourceS3DirectoryPath: string;
  transformEntryPointScript?: string;
}
export interface DeleteMLEndpointInput {
  id: string;
  neptuneIamRoleArn?: string;
  clean?: boolean;
}
export interface DeleteMLEndpointOutput {
  status?: string;
}
export interface DeletePropertygraphStatisticsOutput {
  statusCode?: number;
  status?: string;
  payload?: DeleteStatisticsValueMap;
}
export interface DeleteSparqlStatisticsOutput {
  statusCode?: number;
  status?: string;
  payload?: DeleteStatisticsValueMap;
}
export interface DeleteStatisticsValueMap {
  active?: boolean;
  statisticsId?: string;
}
export type DocumentValuedMap = Record<string, unknown>;
export type EdgeLabels = Array<string>;
export type EdgeProperties = Array<string>;
export interface EdgeStructure {
  count?: number;
  edgeProperties?: Array<string>;
}
export type EdgeStructures = Array<EdgeStructure>;
export type Encoding = "gzip";
export interface ExecuteFastResetInput {
  action: Action;
  token?: string;
}
export interface ExecuteFastResetOutput {
  status: string;
  payload?: FastResetToken;
}
export interface ExecuteGremlinExplainQueryInput {
  gremlinQuery: string;
}
export interface ExecuteGremlinExplainQueryOutput {
  output?: Uint8Array | string;
}
export interface ExecuteGremlinProfileQueryInput {
  gremlinQuery: string;
  results?: boolean;
  chop?: number;
  serializer?: string;
  indexOps?: boolean;
}
export interface ExecuteGremlinProfileQueryOutput {
  output?: Uint8Array | string;
}
export interface ExecuteGremlinQueryInput {
  gremlinQuery: string;
  serializer?: string;
}
export interface ExecuteGremlinQueryOutput {
  requestId?: string;
  status?: GremlinQueryStatusAttributes;
  result?: unknown;
  meta?: unknown;
}
export interface ExecuteOpenCypherExplainQueryInput {
  openCypherQuery: string;
  parameters?: string;
  explainMode: OpenCypherExplainMode;
}
export interface ExecuteOpenCypherExplainQueryOutput {
  results: Uint8Array | string;
}
export interface ExecuteOpenCypherQueryInput {
  openCypherQuery: string;
  parameters?: string;
}
export interface ExecuteOpenCypherQueryOutput {
  results: unknown;
}
export declare class ExpiredStreamException extends EffectData.TaggedError(
  "ExpiredStreamException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class FailureByQueryException extends EffectData.TaggedError(
  "FailureByQueryException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export interface FastResetToken {
  token?: string;
}
export type Format =
  | "csv"
  | "opencypher"
  | "ntriples"
  | "nquads"
  | "rdfxml"
  | "turtle";
export interface GetEngineStatusOutput {
  status?: string;
  startTime?: string;
  dbEngineVersion?: string;
  role?: string;
  dfeQueryEngine?: string;
  gremlin?: QueryLanguageVersion;
  sparql?: QueryLanguageVersion;
  opencypher?: QueryLanguageVersion;
  labMode?: Record<string, string>;
  rollingBackTrxCount?: number;
  rollingBackTrxEarliestStartTime?: string;
  features?: Record<string, unknown>;
  settings?: Record<string, string>;
}
export interface GetGremlinQueryStatusInput {
  queryId: string;
}
export interface GetGremlinQueryStatusOutput {
  queryId?: string;
  queryString?: string;
  queryEvalStats?: QueryEvalStats;
}
export interface GetLoaderJobStatusInput {
  loadId: string;
  details?: boolean;
  errors?: boolean;
  page?: number;
  errorsPerPage?: number;
}
export interface GetLoaderJobStatusOutput {
  status: string;
  payload: unknown;
}
export interface GetMLDataProcessingJobInput {
  id: string;
  neptuneIamRoleArn?: string;
}
export interface GetMLDataProcessingJobOutput {
  status?: string;
  id?: string;
  processingJob?: MlResourceDefinition;
}
export interface GetMLEndpointInput {
  id: string;
  neptuneIamRoleArn?: string;
}
export interface GetMLEndpointOutput {
  status?: string;
  id?: string;
  endpoint?: MlResourceDefinition;
  endpointConfig?: MlConfigDefinition;
}
export interface GetMLModelTrainingJobInput {
  id: string;
  neptuneIamRoleArn?: string;
}
export interface GetMLModelTrainingJobOutput {
  status?: string;
  id?: string;
  processingJob?: MlResourceDefinition;
  hpoJob?: MlResourceDefinition;
  modelTransformJob?: MlResourceDefinition;
  mlModels?: Array<MlConfigDefinition>;
}
export interface GetMLModelTransformJobInput {
  id: string;
  neptuneIamRoleArn?: string;
}
export interface GetMLModelTransformJobOutput {
  status?: string;
  id?: string;
  baseProcessingJob?: MlResourceDefinition;
  remoteModelTransformJob?: MlResourceDefinition;
  models?: Array<MlConfigDefinition>;
}
export interface GetOpenCypherQueryStatusInput {
  queryId: string;
}
export interface GetOpenCypherQueryStatusOutput {
  queryId?: string;
  queryString?: string;
  queryEvalStats?: QueryEvalStats;
}
export interface GetPropertygraphStatisticsOutput {
  status: string;
  payload: Statistics;
}
export interface GetPropertygraphStreamInput {
  limit?: number;
  iteratorType?: IteratorType;
  commitNum?: number;
  opNum?: number;
  encoding?: Encoding;
}
export interface GetPropertygraphStreamOutput {
  lastEventId: Record<string, string>;
  lastTrxTimestampInMillis: number;
  format: string;
  records: Array<PropertygraphRecord>;
  totalRecords: number;
}
export interface GetPropertygraphSummaryInput {
  mode?: GraphSummaryType;
}
export interface GetPropertygraphSummaryOutput {
  statusCode?: number;
  payload?: PropertygraphSummaryValueMap;
}
export interface GetRDFGraphSummaryInput {
  mode?: GraphSummaryType;
}
export interface GetRDFGraphSummaryOutput {
  statusCode?: number;
  payload?: RDFGraphSummaryValueMap;
}
export interface GetSparqlStatisticsOutput {
  status: string;
  payload: Statistics;
}
export interface GetSparqlStreamInput {
  limit?: number;
  iteratorType?: IteratorType;
  commitNum?: number;
  opNum?: number;
  encoding?: Encoding;
}
export interface GetSparqlStreamOutput {
  lastEventId: Record<string, string>;
  lastTrxTimestampInMillis: number;
  format: string;
  records: Array<SparqlRecord>;
  totalRecords: number;
}
export type GraphSummaryType = "basic" | "detailed";
export type GremlinQueries = Array<GremlinQueryStatus>;
export interface GremlinQueryStatus {
  queryId?: string;
  queryString?: string;
  queryEvalStats?: QueryEvalStats;
}
export interface GremlinQueryStatusAttributes {
  message?: string;
  code?: number;
  attributes?: unknown;
}
export declare class IllegalArgumentException extends EffectData.TaggedError(
  "IllegalArgumentException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class InternalFailureException extends EffectData.TaggedError(
  "InternalFailureException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class InvalidArgumentException extends EffectData.TaggedError(
  "InvalidArgumentException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class InvalidNumericDataException extends EffectData.TaggedError(
  "InvalidNumericDataException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export type IteratorType =
  | "AT_SEQUENCE_NUMBER"
  | "AFTER_SEQUENCE_NUMBER"
  | "TRIM_HORIZON"
  | "LATEST";
export interface ListGremlinQueriesInput {
  includeWaiting?: boolean;
}
export interface ListGremlinQueriesOutput {
  acceptedQueryCount?: number;
  runningQueryCount?: number;
  queries?: Array<GremlinQueryStatus>;
}
export interface ListLoaderJobsInput {
  limit?: number;
  includeQueuedLoads?: boolean;
}
export interface ListLoaderJobsOutput {
  status: string;
  payload: LoaderIdResult;
}
export interface ListMLDataProcessingJobsInput {
  maxItems?: number;
  neptuneIamRoleArn?: string;
}
export interface ListMLDataProcessingJobsOutput {
  ids?: Array<string>;
}
export interface ListMLEndpointsInput {
  maxItems?: number;
  neptuneIamRoleArn?: string;
}
export interface ListMLEndpointsOutput {
  ids?: Array<string>;
}
export interface ListMLModelTrainingJobsInput {
  maxItems?: number;
  neptuneIamRoleArn?: string;
}
export interface ListMLModelTrainingJobsOutput {
  ids?: Array<string>;
}
export interface ListMLModelTransformJobsInput {
  maxItems?: number;
  neptuneIamRoleArn?: string;
}
export interface ListMLModelTransformJobsOutput {
  ids?: Array<string>;
}
export interface ListOpenCypherQueriesInput {
  includeWaiting?: boolean;
}
export interface ListOpenCypherQueriesOutput {
  acceptedQueryCount?: number;
  runningQueryCount?: number;
  queries?: Array<GremlinQueryStatus>;
}
export interface LoaderIdResult {
  loadIds?: Array<string>;
}
export declare class LoadUrlAccessDeniedException extends EffectData.TaggedError(
  "LoadUrlAccessDeniedException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export type LongValuedMap = Record<string, number>;
export type LongValuedMapList = Array<Record<string, number>>;
export declare class MalformedQueryException extends EffectData.TaggedError(
  "MalformedQueryException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export interface ManagePropertygraphStatisticsInput {
  mode?: StatisticsAutoGenerationMode;
}
export interface ManagePropertygraphStatisticsOutput {
  status: string;
  payload?: RefreshStatisticsIdMap;
}
export interface ManageSparqlStatisticsInput {
  mode?: StatisticsAutoGenerationMode;
}
export interface ManageSparqlStatisticsOutput {
  status: string;
  payload?: RefreshStatisticsIdMap;
}
export declare class MemoryLimitExceededException extends EffectData.TaggedError(
  "MemoryLimitExceededException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class MethodNotAllowedException extends EffectData.TaggedError(
  "MethodNotAllowedException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class MissingParameterException extends EffectData.TaggedError(
  "MissingParameterException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export interface MlConfigDefinition {
  name?: string;
  arn?: string;
}
export type MlModels = Array<MlConfigDefinition>;
export interface MlResourceDefinition {
  name?: string;
  arn?: string;
  status?: string;
  outputLocation?: string;
  failureReason?: string;
  cloudwatchLogUrl?: string;
}
export declare class MLResourceNotFoundException extends EffectData.TaggedError(
  "MLResourceNotFoundException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export type Mode = "RESUME" | "NEW" | "AUTO";
export type Models = Array<MlConfigDefinition>;
export type NodeLabels = Array<string>;
export type NodeProperties = Array<string>;
export interface NodeStructure {
  count?: number;
  nodeProperties?: Array<string>;
  distinctOutgoingEdgeLabels?: Array<string>;
}
export type NodeStructures = Array<NodeStructure>;
export type OpenCypherExplainMode = "static" | "dynamic" | "details";
export type OpenCypherQueries = Array<GremlinQueryStatus>;
export type OutgoingEdgeLabels = Array<string>;
export type Parallelism = "LOW" | "MEDIUM" | "HIGH" | "OVERSUBSCRIBE";
export declare class ParsingException extends EffectData.TaggedError(
  "ParsingException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export type PositiveInteger = number;

export declare class PreconditionsFailedException extends EffectData.TaggedError(
  "PreconditionsFailedException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export type Predicates = Array<string>;
export interface PropertygraphData {
  id: string;
  type: string;
  key: string;
  value: unknown;
  from?: string;
  to?: string;
}
export interface PropertygraphRecord {
  commitTimestampInMillis: number;
  eventId: Record<string, string>;
  data: PropertygraphData;
  op: string;
  isLastOp?: boolean;
}
export type PropertygraphRecordsList = Array<PropertygraphRecord>;
export interface PropertygraphSummary {
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
export interface PropertygraphSummaryValueMap {
  version?: string;
  lastStatisticsComputationTime?: Date | string;
  graphSummary?: PropertygraphSummary;
}
export interface QueryEvalStats {
  waited?: number;
  elapsed?: number;
  cancelled?: boolean;
  subqueries?: unknown;
}
export interface QueryLanguageVersion {
  version: string;
}
export declare class QueryLimitExceededException extends EffectData.TaggedError(
  "QueryLimitExceededException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class QueryLimitException extends EffectData.TaggedError(
  "QueryLimitException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class QueryTooLargeException extends EffectData.TaggedError(
  "QueryTooLargeException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export interface RDFGraphSummary {
  numDistinctSubjects?: number;
  numDistinctPredicates?: number;
  numQuads?: number;
  numClasses?: number;
  classes?: Array<string>;
  predicates?: Array<Record<string, number>>;
  subjectStructures?: Array<SubjectStructure>;
}
export interface RDFGraphSummaryValueMap {
  version?: string;
  lastStatisticsComputationTime?: Date | string;
  graphSummary?: RDFGraphSummary;
}
export declare class ReadOnlyViolationException extends EffectData.TaggedError(
  "ReadOnlyViolationException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export interface RefreshStatisticsIdMap {
  statisticsId?: string;
}
export type ReportAsText = Uint8Array | string;

export type S3BucketRegion =
  | "us-east-1"
  | "us-east-2"
  | "us-west-1"
  | "us-west-2"
  | "ca-central-1"
  | "sa-east-1"
  | "eu-north-1"
  | "eu-west-1"
  | "eu-west-2"
  | "eu-west-3"
  | "eu-central-1"
  | "me-south-1"
  | "af-south-1"
  | "ap-east-1"
  | "ap-northeast-1"
  | "ap-northeast-2"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ap-south-1"
  | "cn-north-1"
  | "cn-northwest-1"
  | "us-gov-west-1"
  | "us-gov-east-1"
  | "ca-west-1"
  | "eu-south-2"
  | "il-central-1"
  | "me-central-1"
  | "ap-northeast-3"
  | "ap-southeast-3"
  | "ap-southeast-4"
  | "ap-southeast-5"
  | "ap-southeast-7"
  | "mx-central-1"
  | "ap-east-2"
  | "ap-south-2"
  | "eu-central-2";
export declare class S3Exception extends EffectData.TaggedError("S3Exception")<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class ServerShutdownException extends EffectData.TaggedError(
  "ServerShutdownException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export interface SparqlData {
  stmt: string;
}
export interface SparqlRecord {
  commitTimestampInMillis: number;
  eventId: Record<string, string>;
  data: SparqlData;
  op: string;
  isLastOp?: boolean;
}
export type SparqlRecordsList = Array<SparqlRecord>;
export interface StartLoaderJobInput {
  source: string;
  format: Format;
  s3BucketRegion: S3BucketRegion;
  iamRoleArn: string;
  mode?: Mode;
  failOnError?: boolean;
  parallelism?: Parallelism;
  parserConfiguration?: Record<string, string>;
  updateSingleCardinalityProperties?: boolean;
  queueRequest?: boolean;
  dependencies?: Array<string>;
  userProvidedEdgeIds?: boolean;
}
export interface StartLoaderJobOutput {
  status: string;
  payload: Record<string, string>;
}
export interface StartMLDataProcessingJobInput {
  id?: string;
  previousDataProcessingJobId?: string;
  inputDataS3Location: string;
  processedDataS3Location: string;
  sagemakerIamRoleArn?: string;
  neptuneIamRoleArn?: string;
  processingInstanceType?: string;
  processingInstanceVolumeSizeInGB?: number;
  processingTimeOutInSeconds?: number;
  modelType?: string;
  configFileName?: string;
  subnets?: Array<string>;
  securityGroupIds?: Array<string>;
  volumeEncryptionKMSKey?: string;
  s3OutputEncryptionKMSKey?: string;
}
export interface StartMLDataProcessingJobOutput {
  id?: string;
  arn?: string;
  creationTimeInMillis?: number;
}
export interface StartMLModelTrainingJobInput {
  id?: string;
  previousModelTrainingJobId?: string;
  dataProcessingJobId: string;
  trainModelS3Location: string;
  sagemakerIamRoleArn?: string;
  neptuneIamRoleArn?: string;
  baseProcessingInstanceType?: string;
  trainingInstanceType?: string;
  trainingInstanceVolumeSizeInGB?: number;
  trainingTimeOutInSeconds?: number;
  maxHPONumberOfTrainingJobs?: number;
  maxHPOParallelTrainingJobs?: number;
  subnets?: Array<string>;
  securityGroupIds?: Array<string>;
  volumeEncryptionKMSKey?: string;
  s3OutputEncryptionKMSKey?: string;
  enableManagedSpotTraining?: boolean;
  customModelTrainingParameters?: CustomModelTrainingParameters;
}
export interface StartMLModelTrainingJobOutput {
  id?: string;
  arn?: string;
  creationTimeInMillis?: number;
}
export interface StartMLModelTransformJobInput {
  id?: string;
  dataProcessingJobId?: string;
  mlModelTrainingJobId?: string;
  trainingJobName?: string;
  modelTransformOutputS3Location: string;
  sagemakerIamRoleArn?: string;
  neptuneIamRoleArn?: string;
  customModelTransformParameters?: CustomModelTransformParameters;
  baseProcessingInstanceType?: string;
  baseProcessingInstanceVolumeSizeInGB?: number;
  subnets?: Array<string>;
  securityGroupIds?: Array<string>;
  volumeEncryptionKMSKey?: string;
  s3OutputEncryptionKMSKey?: string;
}
export interface StartMLModelTransformJobOutput {
  id?: string;
  arn?: string;
  creationTimeInMillis?: number;
}
export interface Statistics {
  autoCompute?: boolean;
  active?: boolean;
  statisticsId?: string;
  date?: Date | string;
  note?: string;
  signatureInfo?: StatisticsSummary;
}
export type StatisticsAutoGenerationMode =
  | "disableAutoCompute"
  | "enableAutoCompute"
  | "refresh";
export declare class StatisticsNotAvailableException extends EffectData.TaggedError(
  "StatisticsNotAvailableException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export interface StatisticsSummary {
  signatureCount?: number;
  instanceCount?: number;
  predicateCount?: number;
}
export declare class StreamRecordsNotFoundException extends EffectData.TaggedError(
  "StreamRecordsNotFoundException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export type StringList = Array<string>;
export type StringValuedMap = Record<string, string>;
export interface SubjectStructure {
  count?: number;
  predicates?: Array<string>;
}
export type SubjectStructures = Array<SubjectStructure>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class TimeLimitExceededException extends EffectData.TaggedError(
  "TimeLimitExceededException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare class UnsupportedOperationException extends EffectData.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly detailedMessage: string;
  readonly requestId: string;
  readonly code: string;
}> {}
export declare namespace CancelGremlinQuery {
  export type Input = CancelGremlinQueryInput;
  export type Output = CancelGremlinQueryOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CancelLoaderJob {
  export type Input = CancelLoaderJobInput;
  export type Output = CancelLoaderJobOutput;
  export type Error =
    | BadRequestException
    | BulkLoadIdNotFoundException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InternalFailureException
    | InvalidArgumentException
    | InvalidParameterException
    | LoadUrlAccessDeniedException
    | MissingParameterException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CancelMLDataProcessingJob {
  export type Input = CancelMLDataProcessingJobInput;
  export type Output = CancelMLDataProcessingJobOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CancelMLModelTrainingJob {
  export type Input = CancelMLModelTrainingJobInput;
  export type Output = CancelMLModelTrainingJobOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CancelMLModelTransformJob {
  export type Input = CancelMLModelTransformJobInput;
  export type Output = CancelMLModelTransformJobOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CancelOpenCypherQuery {
  export type Input = CancelOpenCypherQueryInput;
  export type Output = CancelOpenCypherQueryOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidNumericDataException
    | InvalidParameterException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateMLEndpoint {
  export type Input = CreateMLEndpointInput;
  export type Output = CreateMLEndpointOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteMLEndpoint {
  export type Input = DeleteMLEndpointInput;
  export type Output = DeleteMLEndpointOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeletePropertygraphStatistics {
  export type Input = {};
  export type Output = DeletePropertygraphStatisticsOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteSparqlStatistics {
  export type Input = {};
  export type Output = DeleteSparqlStatisticsOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ExecuteFastReset {
  export type Input = ExecuteFastResetInput;
  export type Output = ExecuteFastResetOutput;
  export type Error =
    | AccessDeniedException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MethodNotAllowedException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | ServerShutdownException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ExecuteGremlinExplainQuery {
  export type Input = ExecuteGremlinExplainQueryInput;
  export type Output = ExecuteGremlinExplainQueryOutput;
  export type Error =
    | BadRequestException
    | CancelledByUserException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MalformedQueryException
    | MemoryLimitExceededException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | QueryLimitExceededException
    | QueryLimitException
    | QueryTooLargeException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ExecuteGremlinProfileQuery {
  export type Input = ExecuteGremlinProfileQueryInput;
  export type Output = ExecuteGremlinProfileQueryOutput;
  export type Error =
    | BadRequestException
    | CancelledByUserException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MalformedQueryException
    | MemoryLimitExceededException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | QueryLimitExceededException
    | QueryLimitException
    | QueryTooLargeException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ExecuteGremlinQuery {
  export type Input = ExecuteGremlinQueryInput;
  export type Output = ExecuteGremlinQueryOutput;
  export type Error =
    | BadRequestException
    | CancelledByUserException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MalformedQueryException
    | MemoryLimitExceededException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | QueryLimitExceededException
    | QueryLimitException
    | QueryTooLargeException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ExecuteOpenCypherExplainQuery {
  export type Input = ExecuteOpenCypherExplainQueryInput;
  export type Output = ExecuteOpenCypherExplainQueryOutput;
  export type Error =
    | BadRequestException
    | CancelledByUserException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidNumericDataException
    | InvalidParameterException
    | MalformedQueryException
    | MemoryLimitExceededException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | QueryLimitExceededException
    | QueryLimitException
    | QueryTooLargeException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ExecuteOpenCypherQuery {
  export type Input = ExecuteOpenCypherQueryInput;
  export type Output = ExecuteOpenCypherQueryOutput;
  export type Error =
    | BadRequestException
    | CancelledByUserException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidNumericDataException
    | InvalidParameterException
    | MalformedQueryException
    | MemoryLimitExceededException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | QueryLimitExceededException
    | QueryLimitException
    | QueryTooLargeException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetEngineStatus {
  export type Input = {};
  export type Output = GetEngineStatusOutput;
  export type Error =
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InternalFailureException
    | InvalidArgumentException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetGremlinQueryStatus {
  export type Input = GetGremlinQueryStatusInput;
  export type Output = GetGremlinQueryStatusOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetLoaderJobStatus {
  export type Input = GetLoaderJobStatusInput;
  export type Output = GetLoaderJobStatusOutput;
  export type Error =
    | BadRequestException
    | BulkLoadIdNotFoundException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InternalFailureException
    | InvalidArgumentException
    | InvalidParameterException
    | LoadUrlAccessDeniedException
    | MissingParameterException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetMLDataProcessingJob {
  export type Input = GetMLDataProcessingJobInput;
  export type Output = GetMLDataProcessingJobOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetMLEndpoint {
  export type Input = GetMLEndpointInput;
  export type Output = GetMLEndpointOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetMLModelTrainingJob {
  export type Input = GetMLModelTrainingJobInput;
  export type Output = GetMLModelTrainingJobOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetMLModelTransformJob {
  export type Input = GetMLModelTransformJobInput;
  export type Output = GetMLModelTransformJobOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetOpenCypherQueryStatus {
  export type Input = GetOpenCypherQueryStatusInput;
  export type Output = GetOpenCypherQueryStatusOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidNumericDataException
    | InvalidParameterException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetPropertygraphStatistics {
  export type Input = {};
  export type Output = GetPropertygraphStatisticsOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetPropertygraphStream {
  export type Input = GetPropertygraphStreamInput;
  export type Output = GetPropertygraphStreamOutput;
  export type Error =
    | ClientTimeoutException
    | ConstraintViolationException
    | ExpiredStreamException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MemoryLimitExceededException
    | PreconditionsFailedException
    | StreamRecordsNotFoundException
    | ThrottlingException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetPropertygraphSummary {
  export type Input = GetPropertygraphSummaryInput;
  export type Output = GetPropertygraphSummaryOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetRDFGraphSummary {
  export type Input = GetRDFGraphSummaryInput;
  export type Output = GetRDFGraphSummaryOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetSparqlStatistics {
  export type Input = {};
  export type Output = GetSparqlStatisticsOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetSparqlStream {
  export type Input = GetSparqlStreamInput;
  export type Output = GetSparqlStreamOutput;
  export type Error =
    | ClientTimeoutException
    | ConstraintViolationException
    | ExpiredStreamException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MemoryLimitExceededException
    | PreconditionsFailedException
    | StreamRecordsNotFoundException
    | ThrottlingException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListGremlinQueries {
  export type Input = ListGremlinQueriesInput;
  export type Output = ListGremlinQueriesOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListLoaderJobs {
  export type Input = ListLoaderJobsInput;
  export type Output = ListLoaderJobsOutput;
  export type Error =
    | BadRequestException
    | BulkLoadIdNotFoundException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InternalFailureException
    | InvalidArgumentException
    | InvalidParameterException
    | LoadUrlAccessDeniedException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListMLDataProcessingJobs {
  export type Input = ListMLDataProcessingJobsInput;
  export type Output = ListMLDataProcessingJobsOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListMLEndpoints {
  export type Input = ListMLEndpointsInput;
  export type Output = ListMLEndpointsOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListMLModelTrainingJobs {
  export type Input = ListMLModelTrainingJobsInput;
  export type Output = ListMLModelTrainingJobsOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListMLModelTransformJobs {
  export type Input = ListMLModelTransformJobsInput;
  export type Output = ListMLModelTransformJobsOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListOpenCypherQueries {
  export type Input = ListOpenCypherQueriesInput;
  export type Output = ListOpenCypherQueriesOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FailureByQueryException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidNumericDataException
    | InvalidParameterException
    | MissingParameterException
    | ParsingException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | TimeLimitExceededException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ManagePropertygraphStatistics {
  export type Input = ManagePropertygraphStatisticsInput;
  export type Output = ManagePropertygraphStatisticsOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ManageSparqlStatistics {
  export type Input = ManageSparqlStatisticsInput;
  export type Output = ManageSparqlStatisticsOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | PreconditionsFailedException
    | ReadOnlyViolationException
    | StatisticsNotAvailableException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartLoaderJob {
  export type Input = StartLoaderJobInput;
  export type Output = StartLoaderJobOutput;
  export type Error =
    | BadRequestException
    | BulkLoadIdNotFoundException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InternalFailureException
    | InvalidArgumentException
    | InvalidParameterException
    | LoadUrlAccessDeniedException
    | MissingParameterException
    | PreconditionsFailedException
    | S3Exception
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartMLDataProcessingJob {
  export type Input = StartMLDataProcessingJobInput;
  export type Output = StartMLDataProcessingJobOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartMLModelTrainingJob {
  export type Input = StartMLModelTrainingJobInput;
  export type Output = StartMLModelTrainingJobOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartMLModelTransformJob {
  export type Input = StartMLModelTransformJobInput;
  export type Output = StartMLModelTransformJobOutput;
  export type Error =
    | BadRequestException
    | ClientTimeoutException
    | ConstraintViolationException
    | IllegalArgumentException
    | InvalidArgumentException
    | InvalidParameterException
    | MissingParameterException
    | MLResourceNotFoundException
    | PreconditionsFailedException
    | TooManyRequestsException
    | UnsupportedOperationException
    | CommonAwsError;
}

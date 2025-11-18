import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class DataPipeline extends AWSServiceClient {
  activatePipeline(
    input: ActivatePipelineInput,
  ): Effect.Effect<
    ActivatePipelineOutput,
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError
  >;
  addTags(
    input: AddTagsInput,
  ): Effect.Effect<
    AddTagsOutput,
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError
  >;
  createPipeline(
    input: CreatePipelineInput,
  ): Effect.Effect<
    CreatePipelineOutput,
    InternalServiceError | InvalidRequestException | CommonAwsError
  >;
  deactivatePipeline(
    input: DeactivatePipelineInput,
  ): Effect.Effect<
    DeactivatePipelineOutput,
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError
  >;
  deletePipeline(
    input: DeletePipelineInput,
  ): Effect.Effect<
    {},
    | InternalServiceError
    | InvalidRequestException
    | PipelineNotFoundException
    | CommonAwsError
  >;
  describeObjects(
    input: DescribeObjectsInput,
  ): Effect.Effect<
    DescribeObjectsOutput,
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError
  >;
  describePipelines(
    input: DescribePipelinesInput,
  ): Effect.Effect<
    DescribePipelinesOutput,
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError
  >;
  evaluateExpression(
    input: EvaluateExpressionInput,
  ): Effect.Effect<
    EvaluateExpressionOutput,
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | TaskNotFoundException
    | CommonAwsError
  >;
  getPipelineDefinition(
    input: GetPipelineDefinitionInput,
  ): Effect.Effect<
    GetPipelineDefinitionOutput,
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError
  >;
  listPipelines(
    input: ListPipelinesInput,
  ): Effect.Effect<
    ListPipelinesOutput,
    InternalServiceError | InvalidRequestException | CommonAwsError
  >;
  pollForTask(
    input: PollForTaskInput,
  ): Effect.Effect<
    PollForTaskOutput,
    | InternalServiceError
    | InvalidRequestException
    | TaskNotFoundException
    | CommonAwsError
  >;
  putPipelineDefinition(
    input: PutPipelineDefinitionInput,
  ): Effect.Effect<
    PutPipelineDefinitionOutput,
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError
  >;
  queryObjects(
    input: QueryObjectsInput,
  ): Effect.Effect<
    QueryObjectsOutput,
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError
  >;
  removeTags(
    input: RemoveTagsInput,
  ): Effect.Effect<
    RemoveTagsOutput,
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError
  >;
  reportTaskProgress(
    input: ReportTaskProgressInput,
  ): Effect.Effect<
    ReportTaskProgressOutput,
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | TaskNotFoundException
    | CommonAwsError
  >;
  reportTaskRunnerHeartbeat(
    input: ReportTaskRunnerHeartbeatInput,
  ): Effect.Effect<
    ReportTaskRunnerHeartbeatOutput,
    InternalServiceError | InvalidRequestException | CommonAwsError
  >;
  setStatus(
    input: SetStatusInput,
  ): Effect.Effect<
    {},
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError
  >;
  setTaskStatus(
    input: SetTaskStatusInput,
  ): Effect.Effect<
    SetTaskStatusOutput,
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | TaskNotFoundException
    | CommonAwsError
  >;
  validatePipelineDefinition(
    input: ValidatePipelineDefinitionInput,
  ): Effect.Effect<
    ValidatePipelineDefinitionOutput,
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError
  >;
}

export interface ActivatePipelineInput {
  pipelineId: string;
  parameterValues?: Array<ParameterValue>;
  startTimestamp?: Date | string;
}
export interface ActivatePipelineOutput {}
export interface AddTagsInput {
  pipelineId: string;
  tags: Array<Tag>;
}
export interface AddTagsOutput {}
export type attributeNameString = string;

export type attributeValueString = string;

export type DataPipelineboolean = boolean;

export type cancelActive = boolean;

export interface CreatePipelineInput {
  name: string;
  uniqueId: string;
  description?: string;
  tags?: Array<Tag>;
}
export interface CreatePipelineOutput {
  pipelineId: string;
}
export interface DeactivatePipelineInput {
  pipelineId: string;
  cancelActive?: boolean;
}
export interface DeactivatePipelineOutput {}
export interface DeletePipelineInput {
  pipelineId: string;
}
export interface DescribeObjectsInput {
  pipelineId: string;
  objectIds: Array<string>;
  evaluateExpressions?: boolean;
  marker?: string;
}
export interface DescribeObjectsOutput {
  pipelineObjects: Array<PipelineObject>;
  marker?: string;
  hasMoreResults?: boolean;
}
export interface DescribePipelinesInput {
  pipelineIds: Array<string>;
}
export interface DescribePipelinesOutput {
  pipelineDescriptionList: Array<PipelineDescription>;
}
export type errorMessage = string;

export interface EvaluateExpressionInput {
  pipelineId: string;
  objectId: string;
  expression: string;
}
export interface EvaluateExpressionOutput {
  evaluatedExpression: string;
}
export interface Field {
  key: string;
  stringValue?: string;
  refValue?: string;
}
export type fieldList = Array<Field>;
export type fieldNameString = string;

export type fieldStringValue = string;

export interface GetPipelineDefinitionInput {
  pipelineId: string;
  version?: string;
}
export interface GetPipelineDefinitionOutput {
  pipelineObjects?: Array<PipelineObject>;
  parameterObjects?: Array<ParameterObject>;
  parameterValues?: Array<ParameterValue>;
}
export type id = string;

export type idList = Array<string>;
export interface InstanceIdentity {
  document?: string;
  signature?: string;
}
export type int = number;

export declare class InternalServiceError extends EffectData.TaggedError(
  "InternalServiceError",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export interface ListPipelinesInput {
  marker?: string;
}
export interface ListPipelinesOutput {
  pipelineIdList: Array<PipelineIdName>;
  marker?: string;
  hasMoreResults?: boolean;
}
export type longString = string;

export interface Operator {
  type?: OperatorType;
  values?: Array<string>;
}
export type OperatorType = "EQ" | "REF_EQ" | "LE" | "GE" | "BETWEEN";
export interface ParameterAttribute {
  key: string;
  stringValue: string;
}
export type ParameterAttributeList = Array<ParameterAttribute>;
export interface ParameterObject {
  id: string;
  attributes: Array<ParameterAttribute>;
}
export type ParameterObjectList = Array<ParameterObject>;
export interface ParameterValue {
  id: string;
  stringValue: string;
}
export type ParameterValueList = Array<ParameterValue>;
export declare class PipelineDeletedException extends EffectData.TaggedError(
  "PipelineDeletedException",
)<{
  readonly message?: string;
}> {}
export interface PipelineDescription {
  pipelineId: string;
  name: string;
  fields: Array<Field>;
  description?: string;
  tags?: Array<Tag>;
}
export type PipelineDescriptionList = Array<PipelineDescription>;
export interface PipelineIdName {
  id?: string;
  name?: string;
}
export type pipelineList = Array<PipelineIdName>;
export declare class PipelineNotFoundException extends EffectData.TaggedError(
  "PipelineNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface PipelineObject {
  id: string;
  name: string;
  fields: Array<Field>;
}
export type PipelineObjectList = Array<PipelineObject>;
export type PipelineObjectMap = Record<string, PipelineObject>;
export interface PollForTaskInput {
  workerGroup: string;
  hostname?: string;
  instanceIdentity?: InstanceIdentity;
}
export interface PollForTaskOutput {
  taskObject?: TaskObject;
}
export interface PutPipelineDefinitionInput {
  pipelineId: string;
  pipelineObjects: Array<PipelineObject>;
  parameterObjects?: Array<ParameterObject>;
  parameterValues?: Array<ParameterValue>;
}
export interface PutPipelineDefinitionOutput {
  validationErrors?: Array<_ValidationError>;
  validationWarnings?: Array<ValidationWarning>;
  errored: boolean;
}
export interface Query {
  selectors?: Array<Selector>;
}
export interface QueryObjectsInput {
  pipelineId: string;
  query?: Query;
  sphere: string;
  marker?: string;
  limit?: number;
}
export interface QueryObjectsOutput {
  ids?: Array<string>;
  marker?: string;
  hasMoreResults?: boolean;
}
export interface RemoveTagsInput {
  pipelineId: string;
  tagKeys: Array<string>;
}
export interface RemoveTagsOutput {}
export interface ReportTaskProgressInput {
  taskId: string;
  fields?: Array<Field>;
}
export interface ReportTaskProgressOutput {
  canceled: boolean;
}
export interface ReportTaskRunnerHeartbeatInput {
  taskrunnerId: string;
  workerGroup?: string;
  hostname?: string;
}
export interface ReportTaskRunnerHeartbeatOutput {
  terminate: boolean;
}
export interface Selector {
  fieldName?: string;
  operator?: Operator;
}
export type SelectorList = Array<Selector>;
export interface SetStatusInput {
  pipelineId: string;
  objectIds: Array<string>;
  status: string;
}
export interface SetTaskStatusInput {
  taskId: string;
  taskStatus: TaskStatus;
  errorId?: string;
  errorMessage?: string;
  errorStackTrace?: string;
}
export interface SetTaskStatusOutput {}
export type DataPipelinestring = string;

export type stringList = Array<string>;
export interface Tag {
  key: string;
  value: string;
}
export type tagKey = string;

export type tagList = Array<Tag>;
export type tagValue = string;

export type taskId = string;

export declare class TaskNotFoundException extends EffectData.TaggedError(
  "TaskNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface TaskObject {
  taskId?: string;
  pipelineId?: string;
  attemptId?: string;
  objects?: Record<string, PipelineObject>;
}
export type TaskStatus = "FINISHED" | "FAILED" | "FALSE";
export type timestamp = Date | string;

export interface ValidatePipelineDefinitionInput {
  pipelineId: string;
  pipelineObjects: Array<PipelineObject>;
  parameterObjects?: Array<ParameterObject>;
  parameterValues?: Array<ParameterValue>;
}
export interface ValidatePipelineDefinitionOutput {
  validationErrors?: Array<_ValidationError>;
  validationWarnings?: Array<ValidationWarning>;
  errored: boolean;
}
export interface _ValidationError {
  id?: string;
  errors?: Array<string>;
}
export type ValidationErrors = Array<_ValidationError>;
export type validationMessage = string;

export type validationMessages = Array<string>;
export interface ValidationWarning {
  id?: string;
  warnings?: Array<string>;
}
export type ValidationWarnings = Array<ValidationWarning>;
export declare namespace ActivatePipeline {
  export type Input = ActivatePipelineInput;
  export type Output = ActivatePipelineOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError;
}

export declare namespace AddTags {
  export type Input = AddTagsInput;
  export type Output = AddTagsOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError;
}

export declare namespace CreatePipeline {
  export type Input = CreatePipelineInput;
  export type Output = CreatePipelineOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeactivatePipeline {
  export type Input = DeactivatePipelineInput;
  export type Output = DeactivatePipelineOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError;
}

export declare namespace DeletePipeline {
  export type Input = DeletePipelineInput;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeObjects {
  export type Input = DescribeObjectsInput;
  export type Output = DescribeObjectsOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError;
}

export declare namespace DescribePipelines {
  export type Input = DescribePipelinesInput;
  export type Output = DescribePipelinesOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError;
}

export declare namespace EvaluateExpression {
  export type Input = EvaluateExpressionInput;
  export type Output = EvaluateExpressionOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | TaskNotFoundException
    | CommonAwsError;
}

export declare namespace GetPipelineDefinition {
  export type Input = GetPipelineDefinitionInput;
  export type Output = GetPipelineDefinitionOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError;
}

export declare namespace ListPipelines {
  export type Input = ListPipelinesInput;
  export type Output = ListPipelinesOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace PollForTask {
  export type Input = PollForTaskInput;
  export type Output = PollForTaskOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | TaskNotFoundException
    | CommonAwsError;
}

export declare namespace PutPipelineDefinition {
  export type Input = PutPipelineDefinitionInput;
  export type Output = PutPipelineDefinitionOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError;
}

export declare namespace QueryObjects {
  export type Input = QueryObjectsInput;
  export type Output = QueryObjectsOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError;
}

export declare namespace RemoveTags {
  export type Input = RemoveTagsInput;
  export type Output = RemoveTagsOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError;
}

export declare namespace ReportTaskProgress {
  export type Input = ReportTaskProgressInput;
  export type Output = ReportTaskProgressOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | TaskNotFoundException
    | CommonAwsError;
}

export declare namespace ReportTaskRunnerHeartbeat {
  export type Input = ReportTaskRunnerHeartbeatInput;
  export type Output = ReportTaskRunnerHeartbeatOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace SetStatus {
  export type Input = SetStatusInput;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError;
}

export declare namespace SetTaskStatus {
  export type Input = SetTaskStatusInput;
  export type Output = SetTaskStatusOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | TaskNotFoundException
    | CommonAwsError;
}

export declare namespace ValidatePipelineDefinition {
  export type Input = ValidatePipelineDefinitionInput;
  export type Output = ValidatePipelineDefinitionOutput;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | PipelineDeletedException
    | PipelineNotFoundException
    | CommonAwsError;
}

export type DataPipelineErrors =
  | InternalServiceError
  | InvalidRequestException
  | PipelineDeletedException
  | PipelineNotFoundException
  | TaskNotFoundException
  | CommonAwsError;

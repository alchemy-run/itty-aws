import * as Schema from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const idList = Schema.Array(Schema.String);
export const stringList = Schema.Array(Schema.String);
export class Tag extends Schema.Class<Tag>("Tag")({key: Schema.String, value: Schema.String}) {}
export const tagList = Schema.Array(Tag);
export class CreatePipelineInput extends Schema.Class<CreatePipelineInput>("CreatePipelineInput")({name: Schema.String, uniqueId: Schema.String, description: Schema.optional(Schema.String), tags: Schema.optional(tagList)}) {}
export class DeactivatePipelineInput extends Schema.Class<DeactivatePipelineInput>("DeactivatePipelineInput")({pipelineId: Schema.String, cancelActive: Schema.optional(Schema.Boolean)}) {}
export class DeactivatePipelineOutput extends Schema.Class<DeactivatePipelineOutput>("DeactivatePipelineOutput")({}) {}
export class DeletePipelineInput extends Schema.Class<DeletePipelineInput>("DeletePipelineInput")({pipelineId: Schema.String}) {}
export class DescribeObjectsInput extends Schema.Class<DescribeObjectsInput>("DescribeObjectsInput")({pipelineId: Schema.String, objectIds: idList, evaluateExpressions: Schema.optional(Schema.Boolean), marker: Schema.optional(Schema.String)}) {}
export class DescribePipelinesInput extends Schema.Class<DescribePipelinesInput>("DescribePipelinesInput")({pipelineIds: idList}) {}
export class EvaluateExpressionInput extends Schema.Class<EvaluateExpressionInput>("EvaluateExpressionInput")({pipelineId: Schema.String, objectId: Schema.String, expression: Schema.String}) {}
export class GetPipelineDefinitionInput extends Schema.Class<GetPipelineDefinitionInput>("GetPipelineDefinitionInput")({pipelineId: Schema.String, version: Schema.optional(Schema.String)}) {}
export class ListPipelinesInput extends Schema.Class<ListPipelinesInput>("ListPipelinesInput")({marker: Schema.optional(Schema.String)}) {}
export class RemoveTagsInput extends Schema.Class<RemoveTagsInput>("RemoveTagsInput")({pipelineId: Schema.String, tagKeys: stringList}) {}
export class RemoveTagsOutput extends Schema.Class<RemoveTagsOutput>("RemoveTagsOutput")({}) {}
export class ReportTaskRunnerHeartbeatInput extends Schema.Class<ReportTaskRunnerHeartbeatInput>("ReportTaskRunnerHeartbeatInput")({taskrunnerId: Schema.String, workerGroup: Schema.optional(Schema.String), hostname: Schema.optional(Schema.String)}) {}
export class SetStatusInput extends Schema.Class<SetStatusInput>("SetStatusInput")({pipelineId: Schema.String, objectIds: idList, status: Schema.String}) {}
export class SetTaskStatusInput extends Schema.Class<SetTaskStatusInput>("SetTaskStatusInput")({taskId: Schema.String, taskStatus: Schema.String, errorId: Schema.optional(Schema.String), errorMessage: Schema.optional(Schema.String), errorStackTrace: Schema.optional(Schema.String)}) {}
export class SetTaskStatusOutput extends Schema.Class<SetTaskStatusOutput>("SetTaskStatusOutput")({}) {}
export class Field extends Schema.Class<Field>("Field")({key: Schema.String, stringValue: Schema.optional(Schema.String), refValue: Schema.optional(Schema.String)}) {}
export const fieldList = Schema.Array(Field);
export class PipelineObject extends Schema.Class<PipelineObject>("PipelineObject")({id: Schema.String, name: Schema.String, fields: fieldList}) {}
export const PipelineObjectList = Schema.Array(PipelineObject);
export class ParameterAttribute extends Schema.Class<ParameterAttribute>("ParameterAttribute")({key: Schema.String, stringValue: Schema.String}) {}
export const ParameterAttributeList = Schema.Array(ParameterAttribute);
export class ParameterObject extends Schema.Class<ParameterObject>("ParameterObject")({id: Schema.String, attributes: ParameterAttributeList}) {}
export const ParameterObjectList = Schema.Array(ParameterObject);
export class ParameterValue extends Schema.Class<ParameterValue>("ParameterValue")({id: Schema.String, stringValue: Schema.String}) {}
export const ParameterValueList = Schema.Array(ParameterValue);
export class ValidatePipelineDefinitionInput extends Schema.Class<ValidatePipelineDefinitionInput>("ValidatePipelineDefinitionInput")({pipelineId: Schema.String, pipelineObjects: PipelineObjectList, parameterObjects: Schema.optional(ParameterObjectList), parameterValues: Schema.optional(ParameterValueList)}) {}
export class InstanceIdentity extends Schema.Class<InstanceIdentity>("InstanceIdentity")({document: Schema.optional(Schema.String), signature: Schema.optional(Schema.String)}) {}
export class ActivatePipelineInput extends Schema.Class<ActivatePipelineInput>("ActivatePipelineInput")({pipelineId: Schema.String, parameterValues: Schema.optional(ParameterValueList), startTimestamp: Schema.optional(Schema.Date)}) {}
export class ActivatePipelineOutput extends Schema.Class<ActivatePipelineOutput>("ActivatePipelineOutput")({}) {}
export class AddTagsInput extends Schema.Class<AddTagsInput>("AddTagsInput")({pipelineId: Schema.String, tags: tagList}) {}
export class AddTagsOutput extends Schema.Class<AddTagsOutput>("AddTagsOutput")({}) {}
export class CreatePipelineOutput extends Schema.Class<CreatePipelineOutput>("CreatePipelineOutput")({pipelineId: Schema.String}) {}
export class InternalServiceError extends Schema.Class<InternalServiceError>("InternalServiceError")({message: Schema.optional(Schema.String)}) {}
export class InvalidRequestException extends Schema.Class<InvalidRequestException>("InvalidRequestException")({message: Schema.optional(Schema.String)}) {}
export class DescribeObjectsOutput extends Schema.Class<DescribeObjectsOutput>("DescribeObjectsOutput")({pipelineObjects: PipelineObjectList, marker: Schema.optional(Schema.String), hasMoreResults: Schema.optional(Schema.Boolean)}) {}
export class EvaluateExpressionOutput extends Schema.Class<EvaluateExpressionOutput>("EvaluateExpressionOutput")({evaluatedExpression: Schema.String}) {}
export class GetPipelineDefinitionOutput extends Schema.Class<GetPipelineDefinitionOutput>("GetPipelineDefinitionOutput")({pipelineObjects: Schema.optional(PipelineObjectList), parameterObjects: Schema.optional(ParameterObjectList), parameterValues: Schema.optional(ParameterValueList)}) {}
export class PollForTaskInput extends Schema.Class<PollForTaskInput>("PollForTaskInput")({workerGroup: Schema.String, hostname: Schema.optional(Schema.String), instanceIdentity: Schema.optional(InstanceIdentity)}) {}
export class PipelineDeletedException extends Schema.Class<PipelineDeletedException>("PipelineDeletedException")({message: Schema.optional(Schema.String)}) {}
export class ReportTaskProgressInput extends Schema.Class<ReportTaskProgressInput>("ReportTaskProgressInput")({taskId: Schema.String, fields: Schema.optional(fieldList)}) {}
export class ReportTaskRunnerHeartbeatOutput extends Schema.Class<ReportTaskRunnerHeartbeatOutput>("ReportTaskRunnerHeartbeatOutput")({terminate: Schema.Boolean}) {}
export class PipelineNotFoundException extends Schema.Class<PipelineNotFoundException>("PipelineNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class TaskNotFoundException extends Schema.Class<TaskNotFoundException>("TaskNotFoundException")({message: Schema.optional(Schema.String)}) {}
export const validationMessages = Schema.Array(Schema.String);
export class PipelineDescription extends Schema.Class<PipelineDescription>("PipelineDescription")({pipelineId: Schema.String, name: Schema.String, fields: fieldList, description: Schema.optional(Schema.String), tags: Schema.optional(tagList)}) {}
export const PipelineDescriptionList = Schema.Array(PipelineDescription);
export class PipelineIdName extends Schema.Class<PipelineIdName>("PipelineIdName")({id: Schema.optional(Schema.String), name: Schema.optional(Schema.String)}) {}
export const pipelineList = Schema.Array(PipelineIdName);
export class ValidationError extends Schema.Class<ValidationError>("ValidationError")({id: Schema.optional(Schema.String), errors: Schema.optional(validationMessages)}) {}
export const ValidationErrors = Schema.Array(ValidationError);
export class ValidationWarning extends Schema.Class<ValidationWarning>("ValidationWarning")({id: Schema.optional(Schema.String), warnings: Schema.optional(validationMessages)}) {}
export const ValidationWarnings = Schema.Array(ValidationWarning);
export class Operator extends Schema.Class<Operator>("Operator")({type: Schema.optional(Schema.String), values: Schema.optional(stringList)}) {}
export class DescribePipelinesOutput extends Schema.Class<DescribePipelinesOutput>("DescribePipelinesOutput")({pipelineDescriptionList: PipelineDescriptionList}) {}
export class ListPipelinesOutput extends Schema.Class<ListPipelinesOutput>("ListPipelinesOutput")({pipelineIdList: pipelineList, marker: Schema.optional(Schema.String), hasMoreResults: Schema.optional(Schema.Boolean)}) {}
export class PutPipelineDefinitionInput extends Schema.Class<PutPipelineDefinitionInput>("PutPipelineDefinitionInput")({pipelineId: Schema.String, pipelineObjects: PipelineObjectList, parameterObjects: Schema.optional(ParameterObjectList), parameterValues: Schema.optional(ParameterValueList)}) {}
export class ReportTaskProgressOutput extends Schema.Class<ReportTaskProgressOutput>("ReportTaskProgressOutput")({canceled: Schema.Boolean}) {}
export class ValidatePipelineDefinitionOutput extends Schema.Class<ValidatePipelineDefinitionOutput>("ValidatePipelineDefinitionOutput")({validationErrors: Schema.optional(ValidationErrors), validationWarnings: Schema.optional(ValidationWarnings), errored: Schema.Boolean}) {}
export class Selector extends Schema.Class<Selector>("Selector")({fieldName: Schema.optional(Schema.String), operator: Schema.optional(Operator)}) {}
export const SelectorList = Schema.Array(Selector);
export class Query extends Schema.Class<Query>("Query")({selectors: Schema.optional(SelectorList)}) {}
export class PutPipelineDefinitionOutput extends Schema.Class<PutPipelineDefinitionOutput>("PutPipelineDefinitionOutput")({validationErrors: Schema.optional(ValidationErrors), validationWarnings: Schema.optional(ValidationWarnings), errored: Schema.Boolean}) {}
export class QueryObjectsInput extends Schema.Class<QueryObjectsInput>("QueryObjectsInput")({pipelineId: Schema.String, query: Schema.optional(Query), sphere: Schema.String, marker: Schema.optional(Schema.String), limit: Schema.optional(Schema.Number)}) {}
export const PipelineObjectMap = Schema.Record({key: Schema.String, value: PipelineObject});
export class TaskObject extends Schema.Class<TaskObject>("TaskObject")({taskId: Schema.optional(Schema.String), pipelineId: Schema.optional(Schema.String), attemptId: Schema.optional(Schema.String), objects: Schema.optional(PipelineObjectMap)}) {}
export class PollForTaskOutput extends Schema.Class<PollForTaskOutput>("PollForTaskOutput")({taskObject: Schema.optional(TaskObject)}) {}
export class QueryObjectsOutput extends Schema.Class<QueryObjectsOutput>("QueryObjectsOutput")({ids: Schema.optional(idList), marker: Schema.optional(Schema.String), hasMoreResults: Schema.optional(Schema.Boolean)}) {}

//# Errors
export class InternalServiceErrorError extends Schema.TaggedError<InternalServiceErrorError>()("InternalServiceError", InternalServiceError.fields) {};
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException.fields) {};
export class PipelineDeletedExceptionError extends Schema.TaggedError<PipelineDeletedExceptionError>()("PipelineDeletedException", PipelineDeletedException.fields) {};
export class PipelineNotFoundExceptionError extends Schema.TaggedError<PipelineNotFoundExceptionError>()("PipelineNotFoundException", PipelineNotFoundException.fields) {};
export class TaskNotFoundExceptionError extends Schema.TaggedError<TaskNotFoundExceptionError>()("TaskNotFoundException", TaskNotFoundException.fields) {};

//# Operations
export const activatePipeline = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.ActivatePipeline" }, ActivatePipelineInput, ActivatePipelineOutput, [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const addTags = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.AddTags" }, AddTagsInput, AddTagsOutput, [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createPipeline = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.CreatePipeline" }, CreatePipelineInput, CreatePipelineOutput, [InternalServiceErrorError, InvalidRequestExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deactivatePipeline = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.DeactivatePipeline" }, DeactivatePipelineInput, DeactivatePipelineOutput, [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deletePipeline = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.DeletePipeline" }, DeletePipelineInput, Schema.Struct({}), [InternalServiceErrorError, InvalidRequestExceptionError, PipelineNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeObjects = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.DescribeObjects" }, DescribeObjectsInput, DescribeObjectsOutput, [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const evaluateExpression = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.EvaluateExpression" }, EvaluateExpressionInput, EvaluateExpressionOutput, [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError, TaskNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getPipelineDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.GetPipelineDefinition" }, GetPipelineDefinitionInput, GetPipelineDefinitionOutput, [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const removeTags = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.RemoveTags" }, RemoveTagsInput, RemoveTagsOutput, [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const reportTaskRunnerHeartbeat = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.ReportTaskRunnerHeartbeat" }, ReportTaskRunnerHeartbeatInput, ReportTaskRunnerHeartbeatOutput, [InternalServiceErrorError, InvalidRequestExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const setStatus = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.SetStatus" }, SetStatusInput, Schema.Struct({}), [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const setTaskStatus = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.SetTaskStatus" }, SetTaskStatusInput, SetTaskStatusOutput, [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError, TaskNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describePipelines = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.DescribePipelines" }, DescribePipelinesInput, DescribePipelinesOutput, [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listPipelines = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.ListPipelines" }, ListPipelinesInput, ListPipelinesOutput, [InternalServiceErrorError, InvalidRequestExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const reportTaskProgress = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.ReportTaskProgress" }, ReportTaskProgressInput, ReportTaskProgressOutput, [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError, TaskNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const validatePipelineDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.ValidatePipelineDefinition" }, ValidatePipelineDefinitionInput, ValidatePipelineDefinitionOutput, [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putPipelineDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.PutPipelineDefinition" }, PutPipelineDefinitionInput, PutPipelineDefinitionOutput, [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const pollForTask = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.PollForTask" }, PollForTaskInput, PollForTaskOutput, [InternalServiceErrorError, InvalidRequestExceptionError, TaskNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const queryObjects = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.QueryObjects" }, QueryObjectsInput, QueryObjectsOutput, [InternalServiceErrorError, InvalidRequestExceptionError, PipelineDeletedExceptionError, PipelineNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const idList = S.Array(S.String);
export const stringList = S.Array(S.String);
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const tagList = S.Array(Tag);
export class CreatePipelineInput extends S.Class<CreatePipelineInput>("CreatePipelineInput")({name: S.String, uniqueId: S.String, description: S.optional(S.String), tags: S.optional(tagList)}) {}
export class DeactivatePipelineInput extends S.Class<DeactivatePipelineInput>("DeactivatePipelineInput")({pipelineId: S.String, cancelActive: S.optional(S.Boolean)}) {}
export class DeactivatePipelineOutput extends S.Class<DeactivatePipelineOutput>("DeactivatePipelineOutput")({}) {}
export class DeletePipelineInput extends S.Class<DeletePipelineInput>("DeletePipelineInput")({pipelineId: S.String}) {}
export class DescribeObjectsInput extends S.Class<DescribeObjectsInput>("DescribeObjectsInput")({pipelineId: S.String, objectIds: idList, evaluateExpressions: S.optional(S.Boolean), marker: S.optional(S.String)}) {}
export class DescribePipelinesInput extends S.Class<DescribePipelinesInput>("DescribePipelinesInput")({pipelineIds: idList}) {}
export class EvaluateExpressionInput extends S.Class<EvaluateExpressionInput>("EvaluateExpressionInput")({pipelineId: S.String, objectId: S.String, expression: S.String}) {}
export class GetPipelineDefinitionInput extends S.Class<GetPipelineDefinitionInput>("GetPipelineDefinitionInput")({pipelineId: S.String, version: S.optional(S.String)}) {}
export class ListPipelinesInput extends S.Class<ListPipelinesInput>("ListPipelinesInput")({marker: S.optional(S.String)}) {}
export class RemoveTagsInput extends S.Class<RemoveTagsInput>("RemoveTagsInput")({pipelineId: S.String, tagKeys: stringList}) {}
export class RemoveTagsOutput extends S.Class<RemoveTagsOutput>("RemoveTagsOutput")({}) {}
export class ReportTaskRunnerHeartbeatInput extends S.Class<ReportTaskRunnerHeartbeatInput>("ReportTaskRunnerHeartbeatInput")({taskrunnerId: S.String, workerGroup: S.optional(S.String), hostname: S.optional(S.String)}) {}
export class SetStatusInput extends S.Class<SetStatusInput>("SetStatusInput")({pipelineId: S.String, objectIds: idList, status: S.String}) {}
export class SetTaskStatusInput extends S.Class<SetTaskStatusInput>("SetTaskStatusInput")({taskId: S.String, taskStatus: S.String, errorId: S.optional(S.String), errorMessage: S.optional(S.String), errorStackTrace: S.optional(S.String)}) {}
export class SetTaskStatusOutput extends S.Class<SetTaskStatusOutput>("SetTaskStatusOutput")({}) {}
export class Field extends S.Class<Field>("Field")({key: S.String, stringValue: S.optional(S.String), refValue: S.optional(S.String)}) {}
export const fieldList = S.Array(Field);
export class PipelineObject extends S.Class<PipelineObject>("PipelineObject")({id: S.String, name: S.String, fields: fieldList}) {}
export const PipelineObjectList = S.Array(PipelineObject);
export class ParameterAttribute extends S.Class<ParameterAttribute>("ParameterAttribute")({key: S.String, stringValue: S.String}) {}
export const ParameterAttributeList = S.Array(ParameterAttribute);
export class ParameterObject extends S.Class<ParameterObject>("ParameterObject")({id: S.String, attributes: ParameterAttributeList}) {}
export const ParameterObjectList = S.Array(ParameterObject);
export class ParameterValue extends S.Class<ParameterValue>("ParameterValue")({id: S.String, stringValue: S.String}) {}
export const ParameterValueList = S.Array(ParameterValue);
export class ValidatePipelineDefinitionInput extends S.Class<ValidatePipelineDefinitionInput>("ValidatePipelineDefinitionInput")({pipelineId: S.String, pipelineObjects: PipelineObjectList, parameterObjects: S.optional(ParameterObjectList), parameterValues: S.optional(ParameterValueList)}) {}
export class InstanceIdentity extends S.Class<InstanceIdentity>("InstanceIdentity")({document: S.optional(S.String), signature: S.optional(S.String)}) {}
export class ActivatePipelineInput extends S.Class<ActivatePipelineInput>("ActivatePipelineInput")({pipelineId: S.String, parameterValues: S.optional(ParameterValueList), startTimestamp: S.optional(S.Date)}) {}
export class ActivatePipelineOutput extends S.Class<ActivatePipelineOutput>("ActivatePipelineOutput")({}) {}
export class AddTagsInput extends S.Class<AddTagsInput>("AddTagsInput")({pipelineId: S.String, tags: tagList}) {}
export class AddTagsOutput extends S.Class<AddTagsOutput>("AddTagsOutput")({}) {}
export class CreatePipelineOutput extends S.Class<CreatePipelineOutput>("CreatePipelineOutput")({pipelineId: S.String}) {}
export class DescribeObjectsOutput extends S.Class<DescribeObjectsOutput>("DescribeObjectsOutput")({pipelineObjects: PipelineObjectList, marker: S.optional(S.String), hasMoreResults: S.optional(S.Boolean)}) {}
export class EvaluateExpressionOutput extends S.Class<EvaluateExpressionOutput>("EvaluateExpressionOutput")({evaluatedExpression: S.String}) {}
export class GetPipelineDefinitionOutput extends S.Class<GetPipelineDefinitionOutput>("GetPipelineDefinitionOutput")({pipelineObjects: S.optional(PipelineObjectList), parameterObjects: S.optional(ParameterObjectList), parameterValues: S.optional(ParameterValueList)}) {}
export class PollForTaskInput extends S.Class<PollForTaskInput>("PollForTaskInput")({workerGroup: S.String, hostname: S.optional(S.String), instanceIdentity: S.optional(InstanceIdentity)}) {}
export class ReportTaskProgressInput extends S.Class<ReportTaskProgressInput>("ReportTaskProgressInput")({taskId: S.String, fields: S.optional(fieldList)}) {}
export class ReportTaskRunnerHeartbeatOutput extends S.Class<ReportTaskRunnerHeartbeatOutput>("ReportTaskRunnerHeartbeatOutput")({terminate: S.Boolean}) {}
export const validationMessages = S.Array(S.String);
export class PipelineDescription extends S.Class<PipelineDescription>("PipelineDescription")({pipelineId: S.String, name: S.String, fields: fieldList, description: S.optional(S.String), tags: S.optional(tagList)}) {}
export const PipelineDescriptionList = S.Array(PipelineDescription);
export class PipelineIdName extends S.Class<PipelineIdName>("PipelineIdName")({id: S.optional(S.String), name: S.optional(S.String)}) {}
export const pipelineList = S.Array(PipelineIdName);
export class ValidationError extends S.Class<ValidationError>("ValidationError")({id: S.optional(S.String), errors: S.optional(validationMessages)}) {}
export const ValidationErrors = S.Array(ValidationError);
export class ValidationWarning extends S.Class<ValidationWarning>("ValidationWarning")({id: S.optional(S.String), warnings: S.optional(validationMessages)}) {}
export const ValidationWarnings = S.Array(ValidationWarning);
export class Operator extends S.Class<Operator>("Operator")({type: S.optional(S.String), values: S.optional(stringList)}) {}
export class DescribePipelinesOutput extends S.Class<DescribePipelinesOutput>("DescribePipelinesOutput")({pipelineDescriptionList: PipelineDescriptionList}) {}
export class ListPipelinesOutput extends S.Class<ListPipelinesOutput>("ListPipelinesOutput")({pipelineIdList: pipelineList, marker: S.optional(S.String), hasMoreResults: S.optional(S.Boolean)}) {}
export class PutPipelineDefinitionInput extends S.Class<PutPipelineDefinitionInput>("PutPipelineDefinitionInput")({pipelineId: S.String, pipelineObjects: PipelineObjectList, parameterObjects: S.optional(ParameterObjectList), parameterValues: S.optional(ParameterValueList)}) {}
export class ReportTaskProgressOutput extends S.Class<ReportTaskProgressOutput>("ReportTaskProgressOutput")({canceled: S.Boolean}) {}
export class ValidatePipelineDefinitionOutput extends S.Class<ValidatePipelineDefinitionOutput>("ValidatePipelineDefinitionOutput")({validationErrors: S.optional(ValidationErrors), validationWarnings: S.optional(ValidationWarnings), errored: S.Boolean}) {}
export class Selector extends S.Class<Selector>("Selector")({fieldName: S.optional(S.String), operator: S.optional(Operator)}) {}
export const SelectorList = S.Array(Selector);
export class Query extends S.Class<Query>("Query")({selectors: S.optional(SelectorList)}) {}
export class PutPipelineDefinitionOutput extends S.Class<PutPipelineDefinitionOutput>("PutPipelineDefinitionOutput")({validationErrors: S.optional(ValidationErrors), validationWarnings: S.optional(ValidationWarnings), errored: S.Boolean}) {}
export class QueryObjectsInput extends S.Class<QueryObjectsInput>("QueryObjectsInput")({pipelineId: S.String, query: S.optional(Query), sphere: S.String, marker: S.optional(S.String), limit: S.optional(S.Number)}) {}
export const PipelineObjectMap = S.Record({key: S.String, value: PipelineObject});
export class TaskObject extends S.Class<TaskObject>("TaskObject")({taskId: S.optional(S.String), pipelineId: S.optional(S.String), attemptId: S.optional(S.String), objects: S.optional(PipelineObjectMap)}) {}
export class PollForTaskOutput extends S.Class<PollForTaskOutput>("PollForTaskOutput")({taskObject: S.optional(TaskObject)}) {}
export class QueryObjectsOutput extends S.Class<QueryObjectsOutput>("QueryObjectsOutput")({ids: S.optional(idList), marker: S.optional(S.String), hasMoreResults: S.optional(S.Boolean)}) {}

//# Errors
export class InternalServiceError extends S.TaggedError<InternalServiceError>()("InternalServiceError", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class PipelineDeletedException extends S.TaggedError<PipelineDeletedException>()("PipelineDeletedException", {}) {};
export class PipelineNotFoundException extends S.TaggedError<PipelineNotFoundException>()("PipelineNotFoundException", {}) {};
export class TaskNotFoundException extends S.TaggedError<TaskNotFoundException>()("TaskNotFoundException", {}) {};

//# Operations
export const activatePipeline = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.ActivatePipeline" }, ActivatePipelineInput, ActivatePipelineOutput, [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const addTags = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.AddTags" }, AddTagsInput, AddTagsOutput, [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createPipeline = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.CreatePipeline" }, CreatePipelineInput, CreatePipelineOutput, [InternalServiceError, InvalidRequestException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deactivatePipeline = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.DeactivatePipeline" }, DeactivatePipelineInput, DeactivatePipelineOutput, [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deletePipeline = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.DeletePipeline" }, DeletePipelineInput, S.Struct({}), [InternalServiceError, InvalidRequestException, PipelineNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeObjects = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.DescribeObjects" }, DescribeObjectsInput, DescribeObjectsOutput, [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const evaluateExpression = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.EvaluateExpression" }, EvaluateExpressionInput, EvaluateExpressionOutput, [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException, TaskNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getPipelineDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.GetPipelineDefinition" }, GetPipelineDefinitionInput, GetPipelineDefinitionOutput, [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const removeTags = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.RemoveTags" }, RemoveTagsInput, RemoveTagsOutput, [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const reportTaskRunnerHeartbeat = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.ReportTaskRunnerHeartbeat" }, ReportTaskRunnerHeartbeatInput, ReportTaskRunnerHeartbeatOutput, [InternalServiceError, InvalidRequestException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const setStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.SetStatus" }, SetStatusInput, S.Struct({}), [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const setTaskStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.SetTaskStatus" }, SetTaskStatusInput, SetTaskStatusOutput, [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException, TaskNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describePipelines = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.DescribePipelines" }, DescribePipelinesInput, DescribePipelinesOutput, [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listPipelines = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.ListPipelines" }, ListPipelinesInput, ListPipelinesOutput, [InternalServiceError, InvalidRequestException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const reportTaskProgress = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.ReportTaskProgress" }, ReportTaskProgressInput, ReportTaskProgressOutput, [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException, TaskNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const validatePipelineDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.ValidatePipelineDefinition" }, ValidatePipelineDefinitionInput, ValidatePipelineDefinitionOutput, [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putPipelineDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.PutPipelineDefinition" }, PutPipelineDefinitionInput, PutPipelineDefinitionOutput, [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const pollForTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.PollForTask" }, PollForTaskInput, PollForTaskOutput, [InternalServiceError, InvalidRequestException, TaskNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const queryObjects = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-10-29", uri: "/", method: "POST", sdkId: "Data Pipeline", sigV4ServiceName: "datapipeline", name: "DataPipeline.QueryObjects" }, QueryObjectsInput, QueryObjectsOutput, [InternalServiceError, InvalidRequestException, PipelineDeletedException, PipelineNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

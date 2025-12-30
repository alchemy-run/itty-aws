import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class CancelQueryInput extends Schema.Class<CancelQueryInput>("CancelQueryInput")({graphIdentifier: Header("graphIdentifier"), queryId: Schema.String}) {}
export class GetGraphSummaryInput extends Schema.Class<GetGraphSummaryInput>("GetGraphSummaryInput")({graphIdentifier: Header("graphIdentifier"), mode: Schema.optional(Schema.String)}) {}
export class GetQueryInput extends Schema.Class<GetQueryInput>("GetQueryInput")({graphIdentifier: Header("graphIdentifier"), queryId: Schema.String}) {}
export class ListQueriesInput extends Schema.Class<ListQueriesInput>("ListQueriesInput")({graphIdentifier: Header("graphIdentifier"), maxResults: Schema.Number, state: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceInput extends Schema.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: Schema.String}) {}
export class UntagResourceInput extends Schema.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: Schema.String, tagKeys: TagKeyList}) {}
export class UntagResourceOutput extends Schema.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export const DocumentValuedMap = Schema.Record({key: Schema.String, value: Schema.Any});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class ExecuteQueryInput extends Schema.Class<ExecuteQueryInput>("ExecuteQueryInput")({graphIdentifier: Header("graphIdentifier"), queryString: Schema.String, language: Schema.String, parameters: Schema.optional(DocumentValuedMap), planCache: Schema.optional(Schema.String), explainMode: Schema.optional(Schema.String), queryTimeoutMilliseconds: Schema.optional(Schema.Number)}) {}
export class GetQueryOutput extends Schema.Class<GetQueryOutput>("GetQueryOutput")({id: Schema.optional(Schema.String), queryString: Schema.optional(Schema.String), waited: Schema.optional(Schema.Number), elapsed: Schema.optional(Schema.Number), state: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceOutput extends Schema.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({tags: Schema.optional(TagMap)}) {}
export class TagResourceInput extends Schema.Class<TagResourceInput>("TagResourceInput")({resourceArn: Schema.String, tags: TagMap}) {}
export class TagResourceOutput extends Schema.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String}) {}
export const NodeLabels = Schema.Array(Schema.String);
export const EdgeLabels = Schema.Array(Schema.String);
export class QuerySummary extends Schema.Class<QuerySummary>("QuerySummary")({id: Schema.optional(Schema.String), queryString: Schema.optional(Schema.String), waited: Schema.optional(Schema.Number), elapsed: Schema.optional(Schema.Number), state: Schema.optional(Schema.String)}) {}
export const QuerySummaryList = Schema.Array(QuerySummary);
export const NodeProperties = Schema.Array(Schema.String);
export const OutgoingEdgeLabels = Schema.Array(Schema.String);
export const EdgeProperties = Schema.Array(Schema.String);
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String}) {}
export class ExecuteQueryOutput extends Schema.Class<ExecuteQueryOutput>("ExecuteQueryOutput")({payload: Body("undefined", StreamBody())}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String}) {}
export class ListQueriesOutput extends Schema.Class<ListQueriesOutput>("ListQueriesOutput")({queries: QuerySummaryList}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String, reason: Schema.optional(Schema.String)}) {}
export const LongValuedMap = Schema.Record({key: Schema.String, value: Schema.Number});
export const LongValuedMapList = Schema.Array(LongValuedMap);
export class NodeStructure extends Schema.Class<NodeStructure>("NodeStructure")({count: Schema.optional(Schema.Number), nodeProperties: Schema.optional(NodeProperties), distinctOutgoingEdgeLabels: Schema.optional(OutgoingEdgeLabels)}) {}
export const NodeStructures = Schema.Array(NodeStructure);
export class EdgeStructure extends Schema.Class<EdgeStructure>("EdgeStructure")({count: Schema.optional(Schema.Number), edgeProperties: Schema.optional(EdgeProperties)}) {}
export const EdgeStructures = Schema.Array(EdgeStructure);
export class GraphDataSummary extends Schema.Class<GraphDataSummary>("GraphDataSummary")({numNodes: Schema.optional(Schema.Number), numEdges: Schema.optional(Schema.Number), numNodeLabels: Schema.optional(Schema.Number), numEdgeLabels: Schema.optional(Schema.Number), nodeLabels: Schema.optional(NodeLabels), edgeLabels: Schema.optional(EdgeLabels), numNodeProperties: Schema.optional(Schema.Number), numEdgeProperties: Schema.optional(Schema.Number), nodeProperties: Schema.optional(LongValuedMapList), edgeProperties: Schema.optional(LongValuedMapList), totalNodePropertyValues: Schema.optional(Schema.Number), totalEdgePropertyValues: Schema.optional(Schema.Number), nodeStructures: Schema.optional(NodeStructures), edgeStructures: Schema.optional(EdgeStructures)}) {}
export class ConflictException extends Schema.Class<ConflictException>("ConflictException")({message: Schema.String, reason: Schema.optional(Schema.String)}) {}
export class GetGraphSummaryOutput extends Schema.Class<GetGraphSummaryOutput>("GetGraphSummaryOutput")({version: Schema.optional(Schema.String), lastStatisticsComputationTime: Schema.optional(Schema.Date), graphSummary: Schema.optional(GraphDataSummary)}) {}
export class UnprocessableException extends Schema.Class<UnprocessableException>("UnprocessableException")({message: Schema.String, reason: Schema.String}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class UnprocessableExceptionError extends Schema.TaggedError<UnprocessableExceptionError>()("UnprocessableException", UnprocessableException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.TagResource" }, TagResourceInput, TagResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.UntagResource" }, UntagResourceInput, UntagResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const cancelQuery = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/queries/{queryId}", method: "DELETE", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.CancelQuery" }, CancelQueryInput, Schema.Struct({}), [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getQuery = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/queries/{queryId}", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.GetQuery" }, GetQueryInput, GetQueryOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listQueries = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/queries", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.ListQueries" }, ListQueriesInput, ListQueriesOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getGraphSummary = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/summary", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.GetGraphSummary" }, GetGraphSummaryInput, GetGraphSummaryOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const executeQuery = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/queries", method: "POST", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.ExecuteQuery" }, ExecuteQueryInput, ExecuteQueryOutput, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ThrottlingExceptionError, UnprocessableExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

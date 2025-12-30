import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class CancelQueryInput extends S.Class<CancelQueryInput>("CancelQueryInput")({graphIdentifier: H.Header("graphIdentifier"), queryId: S.String}) {}
export class GetGraphSummaryInput extends S.Class<GetGraphSummaryInput>("GetGraphSummaryInput")({graphIdentifier: H.Header("graphIdentifier"), mode: S.optional(S.String)}) {}
export class GetQueryInput extends S.Class<GetQueryInput>("GetQueryInput")({graphIdentifier: H.Header("graphIdentifier"), queryId: S.String}) {}
export class ListQueriesInput extends S.Class<ListQueriesInput>("ListQueriesInput")({graphIdentifier: H.Header("graphIdentifier"), maxResults: S.Number, state: S.optional(S.String)}) {}
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: S.String}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export const DocumentValuedMap = S.Record({key: S.String, value: S.Any});
export const TagMap = S.Record({key: S.String, value: S.String});
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class ExecuteQueryInput extends S.Class<ExecuteQueryInput>("ExecuteQueryInput")({graphIdentifier: H.Header("graphIdentifier"), queryString: S.String, language: S.String, parameters: S.optional(DocumentValuedMap), planCache: S.optional(S.String), explainMode: S.optional(S.String), queryTimeoutMilliseconds: S.optional(S.Number)}) {}
export class GetQueryOutput extends S.Class<GetQueryOutput>("GetQueryOutput")({id: S.optional(S.String), queryString: S.optional(S.String), waited: S.optional(S.Number), elapsed: S.optional(S.Number), state: S.optional(S.String)}) {}
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({tags: S.optional(TagMap)}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String}) {}
export const NodeLabels = S.Array(S.String);
export const EdgeLabels = S.Array(S.String);
export class QuerySummary extends S.Class<QuerySummary>("QuerySummary")({id: S.optional(S.String), queryString: S.optional(S.String), waited: S.optional(S.Number), elapsed: S.optional(S.Number), state: S.optional(S.String)}) {}
export const QuerySummaryList = S.Array(QuerySummary);
export const NodeProperties = S.Array(S.String);
export const OutgoingEdgeLabels = S.Array(S.String);
export const EdgeProperties = S.Array(S.String);
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String}) {}
export class ExecuteQueryOutput extends S.Class<ExecuteQueryOutput>("ExecuteQueryOutput")({payload: H.Body("undefined", H.StreamBody())}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String}) {}
export class ListQueriesOutput extends S.Class<ListQueriesOutput>("ListQueriesOutput")({queries: QuerySummaryList}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String, reason: S.optional(S.String)}) {}
export const LongValuedMap = S.Record({key: S.String, value: S.Number});
export const LongValuedMapList = S.Array(LongValuedMap);
export class NodeStructure extends S.Class<NodeStructure>("NodeStructure")({count: S.optional(S.Number), nodeProperties: S.optional(NodeProperties), distinctOutgoingEdgeLabels: S.optional(OutgoingEdgeLabels)}) {}
export const NodeStructures = S.Array(NodeStructure);
export class EdgeStructure extends S.Class<EdgeStructure>("EdgeStructure")({count: S.optional(S.Number), edgeProperties: S.optional(EdgeProperties)}) {}
export const EdgeStructures = S.Array(EdgeStructure);
export class GraphDataSummary extends S.Class<GraphDataSummary>("GraphDataSummary")({numNodes: S.optional(S.Number), numEdges: S.optional(S.Number), numNodeLabels: S.optional(S.Number), numEdgeLabels: S.optional(S.Number), nodeLabels: S.optional(NodeLabels), edgeLabels: S.optional(EdgeLabels), numNodeProperties: S.optional(S.Number), numEdgeProperties: S.optional(S.Number), nodeProperties: S.optional(LongValuedMapList), edgeProperties: S.optional(LongValuedMapList), totalNodePropertyValues: S.optional(S.Number), totalEdgePropertyValues: S.optional(S.Number), nodeStructures: S.optional(NodeStructures), edgeStructures: S.optional(EdgeStructures)}) {}
export class ConflictException extends S.Class<ConflictException>("ConflictException")({message: S.String, reason: S.optional(S.String)}) {}
export class GetGraphSummaryOutput extends S.Class<GetGraphSummaryOutput>("GetGraphSummaryOutput")({version: S.optional(S.String), lastStatisticsComputationTime: S.optional(S.Date), graphSummary: S.optional(GraphDataSummary)}) {}
export class UnprocessableException extends S.Class<UnprocessableException>("UnprocessableException")({message: S.String, reason: S.String}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class UnprocessableExceptionError extends S.TaggedError<UnprocessableExceptionError>()("UnprocessableException", UnprocessableException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-29", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.TagResource" }, TagResourceInput, TagResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-29", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.UntagResource" }, UntagResourceInput, UntagResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const cancelQuery = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-29", uri: "/queries/{queryId}", method: "DELETE", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.CancelQuery" }, CancelQueryInput, S.Struct({}), [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getQuery = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-29", uri: "/queries/{queryId}", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.GetQuery" }, GetQueryInput, GetQueryOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listQueries = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-29", uri: "/queries", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.ListQueries" }, ListQueriesInput, ListQueriesOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-29", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getGraphSummary = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-29", uri: "/summary", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.GetGraphSummary" }, GetGraphSummaryInput, GetGraphSummaryOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const executeQuery = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-29", uri: "/queries", method: "POST", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.ExecuteQuery" }, ExecuteQueryInput, ExecuteQueryOutput, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ThrottlingExceptionError, UnprocessableExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const CancelQueryInput = Schema.Struct({graphIdentifier: Header("graphIdentifier"), queryId: Schema.String});
export const GetGraphSummaryInput = Schema.Struct({graphIdentifier: Header("graphIdentifier"), mode: Schema.optional(Schema.String)});
export const GetQueryInput = Schema.Struct({graphIdentifier: Header("graphIdentifier"), queryId: Schema.String});
export const ListQueriesInput = Schema.Struct({graphIdentifier: Header("graphIdentifier"), maxResults: Schema.Number, state: Schema.optional(Schema.String)});
export const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceOutput = Schema.Struct({});
export const DocumentValuedMap = Schema.Record({key: Schema.String, value: Schema.JsonValue});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const ExecuteQueryInput = Schema.Struct({graphIdentifier: Header("graphIdentifier"), queryString: Schema.String, language: Schema.String, parameters: Schema.optional(DocumentValuedMap), planCache: Schema.optional(Schema.String), explainMode: Schema.optional(Schema.String), queryTimeoutMilliseconds: Schema.optional(Schema.Number)});
export const GetQueryOutput = Schema.Struct({id: Schema.optional(Schema.String), queryString: Schema.optional(Schema.String), waited: Schema.optional(Schema.Number), elapsed: Schema.optional(Schema.Number), state: Schema.optional(Schema.String)});
export const ListTagsForResourceOutput = Schema.Struct({tags: Schema.optional(TagMap)});
export const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const TagResourceOutput = Schema.Struct({});
export const InternalServerException = Schema.Struct({message: Schema.String});
export const NodeLabels = Schema.Array(Schema.String);
export const EdgeLabels = Schema.Array(Schema.String);
export const QuerySummary = Schema.Struct({id: Schema.optional(Schema.String), queryString: Schema.optional(Schema.String), waited: Schema.optional(Schema.Number), elapsed: Schema.optional(Schema.Number), state: Schema.optional(Schema.String)});
export const QuerySummaryList = Schema.Array(QuerySummary);
export const NodeProperties = Schema.Array(Schema.String);
export const OutgoingEdgeLabels = Schema.Array(Schema.String);
export const EdgeProperties = Schema.Array(Schema.String);
export const ResourceNotFoundException = Schema.Struct({message: Schema.String});
export const ExecuteQueryOutput = Schema.Struct({payload: Body("undefined", StreamBody())});
export const ThrottlingException = Schema.Struct({message: Schema.String});
export const ListQueriesOutput = Schema.Struct({queries: QuerySummaryList});
export const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.optional(Schema.String)});
export const LongValuedMap = Schema.Record({key: Schema.String, value: Schema.Number});
export const LongValuedMapList = Schema.Array(LongValuedMap);
export const NodeStructure = Schema.Struct({count: Schema.optional(Schema.Number), nodeProperties: Schema.optional(NodeProperties), distinctOutgoingEdgeLabels: Schema.optional(OutgoingEdgeLabels)});
export const NodeStructures = Schema.Array(NodeStructure);
export const EdgeStructure = Schema.Struct({count: Schema.optional(Schema.Number), edgeProperties: Schema.optional(EdgeProperties)});
export const EdgeStructures = Schema.Array(EdgeStructure);
export const GraphDataSummary = Schema.Struct({numNodes: Schema.optional(Schema.Number), numEdges: Schema.optional(Schema.Number), numNodeLabels: Schema.optional(Schema.Number), numEdgeLabels: Schema.optional(Schema.Number), nodeLabels: Schema.optional(NodeLabels), edgeLabels: Schema.optional(EdgeLabels), numNodeProperties: Schema.optional(Schema.Number), numEdgeProperties: Schema.optional(Schema.Number), nodeProperties: Schema.optional(LongValuedMapList), edgeProperties: Schema.optional(LongValuedMapList), totalNodePropertyValues: Schema.optional(Schema.Number), totalEdgePropertyValues: Schema.optional(Schema.Number), nodeStructures: Schema.optional(NodeStructures), edgeStructures: Schema.optional(EdgeStructures)});
export const ConflictException = Schema.Struct({message: Schema.String, reason: Schema.optional(Schema.String)});
export const GetGraphSummaryOutput = Schema.Struct({version: Schema.optional(Schema.String), lastStatisticsComputationTime: Schema.optional(Schema.Date), graphSummary: Schema.optional(GraphDataSummary)});
export const UnprocessableException = Schema.Struct({message: Schema.String, reason: Schema.String});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class UnprocessableExceptionError extends Schema.TaggedError<UnprocessableExceptionError>()("UnprocessableException", UnprocessableException) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.TagResource" }, TagResourceInput, TagResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.UntagResource" }, UntagResourceInput, UntagResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const cancelQuery = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/queries/{queryId}", method: "DELETE", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.CancelQuery" }, CancelQueryInput, Schema.Struct({}), [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getQuery = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/queries/{queryId}", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.GetQuery" }, GetQueryInput, GetQueryOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listQueries = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/queries", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.ListQueries" }, ListQueriesInput, ListQueriesOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getGraphSummary = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/summary", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.GetGraphSummary" }, GetGraphSummaryInput, GetGraphSummaryOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const executeQuery = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-29", uri: "/queries", method: "POST", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "AmazonNeptuneGraph.ExecuteQuery" }, ExecuteQueryInput, ExecuteQueryOutput, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ThrottlingExceptionError, UnprocessableExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

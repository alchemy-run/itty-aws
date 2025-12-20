import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const CancelQueryInput = Schema.Struct({graphIdentifier: Header("graphIdentifier"), queryId: Schema.String})
const GetGraphSummaryInput = Schema.Struct({graphIdentifier: Header("graphIdentifier"), mode: Schema.optional(Schema.String)})
const GetQueryInput = Schema.Struct({graphIdentifier: Header("graphIdentifier"), queryId: Schema.String})
const ListQueriesInput = Schema.Struct({graphIdentifier: Header("graphIdentifier"), maxResults: Schema.Number, state: Schema.optional(Schema.String)})
const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String})
const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const UntagResourceOutput = Schema.Struct({})
const DocumentValuedMap = Schema.Record({key: Schema.String, value: Schema.JsonValue})
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const AccessDeniedException = Schema.Struct({message: Schema.String})
const ExecuteQueryInput = Schema.Struct({graphIdentifier: Header("graphIdentifier"), queryString: Schema.String, language: Schema.String, parameters: Schema.optional(DocumentValuedMap), planCache: Schema.optional(Schema.String), explainMode: Schema.optional(Schema.String), queryTimeoutMilliseconds: Schema.optional(Schema.Number)})
const GetQueryOutput = Schema.Struct({id: Schema.optional(Schema.String), queryString: Schema.optional(Schema.String), waited: Schema.optional(Schema.Number), elapsed: Schema.optional(Schema.Number), state: Schema.optional(Schema.String)})
const ListTagsForResourceOutput = Schema.Struct({tags: Schema.optional(TagMap)})
const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagMap})
const TagResourceOutput = Schema.Struct({})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "TagResource" }, TagResourceInput, TagResourceOutput, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const InternalServerException = Schema.Struct({message: Schema.String})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "UntagResource" }, UntagResourceInput, UntagResourceOutput, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const NodeLabels = Schema.Array(Schema.String)
const EdgeLabels = Schema.Array(Schema.String)
const QuerySummary = Schema.Struct({id: Schema.optional(Schema.String), queryString: Schema.optional(Schema.String), waited: Schema.optional(Schema.Number), elapsed: Schema.optional(Schema.Number), state: Schema.optional(Schema.String)})
const QuerySummaryList = Schema.Array(QuerySummary)
const NodeProperties = Schema.Array(Schema.String)
const OutgoingEdgeLabels = Schema.Array(Schema.String)
const EdgeProperties = Schema.Array(Schema.String)
const ResourceNotFoundException = Schema.Struct({message: Schema.String})
export const CancelQuery = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/queries/{queryId}", method: "DELETE", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "CancelQuery" }, CancelQueryInput, Schema.Struct({}), Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ExecuteQueryOutput = Schema.Struct({payload: Body("undefined", StreamBody())})
const ThrottlingException = Schema.Struct({message: Schema.String})
export const GetQuery = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/queries/{queryId}", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "GetQuery" }, GetQueryInput, GetQueryOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ListQueriesOutput = Schema.Struct({queries: QuerySummaryList})
export const ListQueries = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/queries", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "ListQueries" }, ListQueriesInput, ListQueriesOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const LongValuedMap = Schema.Record({key: Schema.String, value: Schema.Number})
const LongValuedMapList = Schema.Array(LongValuedMap)
const NodeStructure = Schema.Struct({count: Schema.optional(Schema.Number), nodeProperties: Schema.optional(NodeProperties), distinctOutgoingEdgeLabels: Schema.optional(OutgoingEdgeLabels)})
const NodeStructures = Schema.Array(NodeStructure)
const EdgeStructure = Schema.Struct({count: Schema.optional(Schema.Number), edgeProperties: Schema.optional(EdgeProperties)})
const EdgeStructures = Schema.Array(EdgeStructure)
const GraphDataSummary = Schema.Struct({numNodes: Schema.optional(Schema.Number), numEdges: Schema.optional(Schema.Number), numNodeLabels: Schema.optional(Schema.Number), numEdgeLabels: Schema.optional(Schema.Number), nodeLabels: Schema.optional(NodeLabels), edgeLabels: Schema.optional(EdgeLabels), numNodeProperties: Schema.optional(Schema.Number), numEdgeProperties: Schema.optional(Schema.Number), nodeProperties: Schema.optional(LongValuedMapList), edgeProperties: Schema.optional(LongValuedMapList), totalNodePropertyValues: Schema.optional(Schema.Number), totalEdgePropertyValues: Schema.optional(Schema.Number), nodeStructures: Schema.optional(NodeStructures), edgeStructures: Schema.optional(EdgeStructures)})
const ConflictException = Schema.Struct({message: Schema.String, reason: Schema.optional(Schema.String)})
const GetGraphSummaryOutput = Schema.Struct({version: Schema.optional(Schema.String), lastStatisticsComputationTime: Schema.optional(Schema.Date), graphSummary: Schema.optional(GraphDataSummary)})
export const GetGraphSummary = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/summary", method: "GET", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "GetGraphSummary" }, GetGraphSummaryInput, GetGraphSummaryOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const UnprocessableException = Schema.Struct({message: Schema.String, reason: Schema.String})
export const ExecuteQuery = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/queries", method: "POST", sdkId: "Neptune Graph", sigV4ServiceName: "neptune-graph", name: "ExecuteQuery" }, ExecuteQueryInput, ExecuteQueryOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("UnprocessableException", UnprocessableException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

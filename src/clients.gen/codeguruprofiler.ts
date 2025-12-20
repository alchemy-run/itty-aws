import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeys = Schema.Array(Schema.String)
const GetFindingsReportAccountSummaryRequest = Schema.Struct({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), dailyReportsOnly: Schema.optional(Schema.Boolean)})
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys})
const UntagResourceResponse = Schema.Struct({})
const TagsMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagsMap)})
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagsMap})
const TagResourceResponse = Schema.Struct({})
const InternalServerException = Schema.Struct({message: Schema.String})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const FindingsReportSummary = Schema.Struct({id: Schema.optional(Schema.String), profilingGroupName: Schema.optional(Schema.String), profileStartTime: Schema.optional(Schema.Date), profileEndTime: Schema.optional(Schema.Date), totalNumberOfFindings: Schema.optional(Schema.Number)})
const FindingsReportSummaries = Schema.Array(FindingsReportSummary)
const GetFindingsReportAccountSummaryResponse = Schema.Struct({reportSummaries: FindingsReportSummaries, nextToken: Schema.optional(Schema.String)})
const ResourceNotFoundException = Schema.Struct({message: Schema.String})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationException = Schema.Struct({message: Schema.String})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({message: Schema.String})
export const GetFindingsReportAccountSummary = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/internal/findingsReports", method: "GET", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "GetFindingsReportAccountSummary" }, GetFindingsReportAccountSummaryRequest, GetFindingsReportAccountSummaryResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

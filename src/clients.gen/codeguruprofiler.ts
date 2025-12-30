import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export class GetFindingsReportAccountSummaryRequest extends Schema.Class<GetFindingsReportAccountSummaryRequest>("GetFindingsReportAccountSummaryRequest")({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), dailyReportsOnly: Schema.optional(Schema.Boolean)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagsMap)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: TagsMap}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String}) {}
export class FindingsReportSummary extends Schema.Class<FindingsReportSummary>("FindingsReportSummary")({id: Schema.optional(Schema.String), profilingGroupName: Schema.optional(Schema.String), profileStartTime: Schema.optional(Schema.Date), profileEndTime: Schema.optional(Schema.Date), totalNumberOfFindings: Schema.optional(Schema.Number)}) {}
export const FindingsReportSummaries = Schema.Array(FindingsReportSummary);
export class GetFindingsReportAccountSummaryResponse extends Schema.Class<GetFindingsReportAccountSummaryResponse>("GetFindingsReportAccountSummaryResponse")({reportSummaries: FindingsReportSummaries, nextToken: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String}) {}

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-07-18", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "CodeGuruProfiler.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-07-18", uri: "/tags/{resourceArn}", method: "GET", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "CodeGuruProfiler.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-07-18", uri: "/tags/{resourceArn}", method: "POST", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "CodeGuruProfiler.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getFindingsReportAccountSummary = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-07-18", uri: "/internal/findingsReports", method: "GET", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "CodeGuruProfiler.GetFindingsReportAccountSummary" }, GetFindingsReportAccountSummaryRequest, GetFindingsReportAccountSummaryResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export const GetFindingsReportAccountSummaryRequest = Schema.Struct({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), dailyReportsOnly: Schema.optional(Schema.Boolean)});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys});
export const UntagResourceResponse = Schema.Struct({});
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagsMap)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagsMap});
export const TagResourceResponse = Schema.Struct({});
export const InternalServerException = Schema.Struct({message: Schema.String});
export const FindingsReportSummary = Schema.Struct({id: Schema.optional(Schema.String), profilingGroupName: Schema.optional(Schema.String), profileStartTime: Schema.optional(Schema.Date), profileEndTime: Schema.optional(Schema.Date), totalNumberOfFindings: Schema.optional(Schema.Number)});
export const FindingsReportSummaries = Schema.Array(FindingsReportSummary);
export const GetFindingsReportAccountSummaryResponse = Schema.Struct({reportSummaries: FindingsReportSummaries, nextToken: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String});
export const ValidationException = Schema.Struct({message: Schema.String});
export const ThrottlingException = Schema.Struct({message: Schema.String});

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-07-18", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "CodeGuruProfiler.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-07-18", uri: "/tags/{resourceArn}", method: "GET", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "CodeGuruProfiler.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-07-18", uri: "/tags/{resourceArn}", method: "POST", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "CodeGuruProfiler.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getFindingsReportAccountSummary = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-07-18", uri: "/internal/findingsReports", method: "GET", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "CodeGuruProfiler.GetFindingsReportAccountSummary" }, GetFindingsReportAccountSummaryRequest, GetFindingsReportAccountSummaryResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

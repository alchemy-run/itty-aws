import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export class GetFindingsReportAccountSummaryRequest extends S.Class<GetFindingsReportAccountSummaryRequest>("GetFindingsReportAccountSummaryRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), dailyReportsOnly: S.optional(S.Boolean)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagsMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagsMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagsMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String}) {}
export class FindingsReportSummary extends S.Class<FindingsReportSummary>("FindingsReportSummary")({id: S.optional(S.String), profilingGroupName: S.optional(S.String), profileStartTime: S.optional(S.Date), profileEndTime: S.optional(S.Date), totalNumberOfFindings: S.optional(S.Number)}) {}
export const FindingsReportSummaries = S.Array(FindingsReportSummary);
export class GetFindingsReportAccountSummaryResponse extends S.Class<GetFindingsReportAccountSummaryResponse>("GetFindingsReportAccountSummaryResponse")({reportSummaries: FindingsReportSummaries, nextToken: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String}) {}

//# Errors
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-18", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "CodeGuruProfiler.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-18", uri: "/tags/{resourceArn}", method: "GET", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "CodeGuruProfiler.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-18", uri: "/tags/{resourceArn}", method: "POST", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "CodeGuruProfiler.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getFindingsReportAccountSummary = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-07-18", uri: "/internal/findingsReports", method: "GET", sdkId: "CodeGuruProfiler", sigV4ServiceName: "codeguru-profiler", name: "CodeGuruProfiler.GetFindingsReportAccountSummary" }, GetFindingsReportAccountSummaryRequest, GetFindingsReportAccountSummaryResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

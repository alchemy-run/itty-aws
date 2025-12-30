import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({ResourceArn: S.String}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({ResourceArn: S.String, TagKeys: TagKeys}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({Tags: S.optional(TagMap)}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({ResourceArn: S.String, Tags: TagMap}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class InternalServerErrorException extends S.TaggedError<InternalServerErrorException>()("InternalServerErrorException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};

//# Operations
/**
 * Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor.
 * 
 * 
 * A minimum of one tag is required for this call. It returns an error if you use the `TagResource` request with 0 tags.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-03", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.TagResource" }, TagResourceInput, TagResourceOutput, [AccessDeniedException, BadRequestException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-03", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.UntagResource" }, UntagResourceInput, UntagResourceOutput, [AccessDeniedException, BadRequestException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-03", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [AccessDeniedException, BadRequestException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

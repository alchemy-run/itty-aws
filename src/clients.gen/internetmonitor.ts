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
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.optional(S.String)}) {}
export class BadRequestException extends S.Class<BadRequestException>("BadRequestException")({message: S.optional(S.String)}) {}
export class InternalServerErrorException extends S.Class<InternalServerErrorException>("InternalServerErrorException")({message: S.optional(S.String)}) {}
export class NotFoundException extends S.Class<NotFoundException>("NotFoundException")({message: S.optional(S.String)}) {}
export class TooManyRequestsException extends S.Class<TooManyRequestsException>("TooManyRequestsException")({message: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class BadRequestExceptionError extends S.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException.fields) {};
export class InternalServerErrorExceptionError extends S.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException.fields) {};
export class NotFoundExceptionError extends S.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException.fields) {};
export class TooManyRequestsExceptionError extends S.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-03", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.TagResource" }, TagResourceInput, TagResourceOutput, [AccessDeniedExceptionError, BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-03", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.UntagResource" }, UntagResourceInput, UntagResourceOutput, [AccessDeniedExceptionError, BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-03", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [AccessDeniedExceptionError, BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

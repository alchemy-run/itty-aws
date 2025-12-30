import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export class ListTagsForResourceInput extends Schema.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({ResourceArn: Schema.String}) {}
export class UntagResourceInput extends Schema.Class<UntagResourceInput>("UntagResourceInput")({ResourceArn: Schema.String, TagKeys: TagKeys}) {}
export class UntagResourceOutput extends Schema.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class ListTagsForResourceOutput extends Schema.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({Tags: Schema.optional(TagMap)}) {}
export class TagResourceInput extends Schema.Class<TagResourceInput>("TagResourceInput")({ResourceArn: Schema.String, Tags: TagMap}) {}
export class TagResourceOutput extends Schema.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.optional(Schema.String)}) {}
export class BadRequestException extends Schema.Class<BadRequestException>("BadRequestException")({message: Schema.optional(Schema.String)}) {}
export class InternalServerErrorException extends Schema.Class<InternalServerErrorException>("InternalServerErrorException")({message: Schema.optional(Schema.String)}) {}
export class NotFoundException extends Schema.Class<NotFoundException>("NotFoundException")({message: Schema.optional(Schema.String)}) {}
export class TooManyRequestsException extends Schema.Class<TooManyRequestsException>("TooManyRequestsException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class BadRequestExceptionError extends Schema.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException.fields) {};
export class InternalServerErrorExceptionError extends Schema.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException.fields) {};
export class NotFoundExceptionError extends Schema.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException.fields) {};
export class TooManyRequestsExceptionError extends Schema.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-03", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.TagResource" }, TagResourceInput, TagResourceOutput, [AccessDeniedExceptionError, BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-03", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.UntagResource" }, UntagResourceInput, UntagResourceOutput, [AccessDeniedExceptionError, BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-03", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [AccessDeniedExceptionError, BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

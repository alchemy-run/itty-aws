import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export const ListTagsForResourceInput = Schema.Struct({ResourceArn: Schema.String});
export const UntagResourceInput = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeys});
export const UntagResourceOutput = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceOutput = Schema.Struct({Tags: Schema.optional(TagMap)});
export const TagResourceInput = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap});
export const TagResourceOutput = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const BadRequestException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InternalServerErrorException = Schema.Struct({message: Schema.optional(Schema.String)});
export const NotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const TooManyRequestsException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class BadRequestExceptionError extends Schema.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException) {};
export class InternalServerErrorExceptionError extends Schema.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException) {};
export class NotFoundExceptionError extends Schema.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException) {};
export class TooManyRequestsExceptionError extends Schema.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-03", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.TagResource" }, TagResourceInput, TagResourceOutput, [AccessDeniedExceptionError, BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-03", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.UntagResource" }, UntagResourceInput, UntagResourceOutput, [AccessDeniedExceptionError, BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-03", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [AccessDeniedExceptionError, BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

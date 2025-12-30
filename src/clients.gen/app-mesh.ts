import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class ListTagsForResourceInput extends Schema.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: Schema.String, nextToken: Schema.optional(Schema.String), limit: Schema.optional(Schema.Number)}) {}
export class UntagResourceInput extends Schema.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: Schema.String, tagKeys: TagKeyList}) {}
export class UntagResourceOutput extends Schema.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export class TagRef extends Schema.Class<TagRef>("TagRef")({key: Schema.String, value: Schema.String}) {}
export const TagList = Schema.Array(TagRef);
export class ListTagsForResourceOutput extends Schema.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({tags: TagList, nextToken: Schema.optional(Schema.String)}) {}
export class TagResourceInput extends Schema.Class<TagResourceInput>("TagResourceInput")({resourceArn: Schema.String, tags: TagList}) {}
export class TagResourceOutput extends Schema.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class BadRequestException extends Schema.Class<BadRequestException>("BadRequestException")({message: Schema.optional(Schema.String)}) {}
export class ForbiddenException extends Schema.Class<ForbiddenException>("ForbiddenException")({message: Schema.optional(Schema.String)}) {}
export class InternalServerErrorException extends Schema.Class<InternalServerErrorException>("InternalServerErrorException")({message: Schema.optional(Schema.String)}) {}
export class NotFoundException extends Schema.Class<NotFoundException>("NotFoundException")({message: Schema.optional(Schema.String)}) {}
export class ServiceUnavailableException extends Schema.Class<ServiceUnavailableException>("ServiceUnavailableException")({message: Schema.optional(Schema.String)}) {}
export class TooManyRequestsException extends Schema.Class<TooManyRequestsException>("TooManyRequestsException")({message: Schema.optional(Schema.String)}) {}
export class TooManyTagsException extends Schema.Class<TooManyTagsException>("TooManyTagsException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class BadRequestExceptionError extends Schema.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException.fields) {};
export class ForbiddenExceptionError extends Schema.TaggedError<ForbiddenExceptionError>()("ForbiddenException", ForbiddenException.fields) {};
export class InternalServerErrorExceptionError extends Schema.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException.fields) {};
export class NotFoundExceptionError extends Schema.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException.fields) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};
export class TooManyRequestsExceptionError extends Schema.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException.fields) {};
export class TooManyTagsExceptionError extends Schema.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-01-25", uri: "/v20190125/untag", method: "PUT", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "AppMesh.UntagResource" }, UntagResourceInput, UntagResourceOutput, [BadRequestExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, ServiceUnavailableExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-01-25", uri: "/v20190125/tags", method: "GET", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "AppMesh.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [BadRequestExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, ServiceUnavailableExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-01-25", uri: "/v20190125/tag", method: "PUT", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "AppMesh.TagResource" }, TagResourceInput, TagResourceOutput, [BadRequestExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, ServiceUnavailableExceptionError, TooManyRequestsExceptionError, TooManyTagsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

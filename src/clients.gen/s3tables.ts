import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(Tags)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: Tags}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class BadRequestException extends Schema.Class<BadRequestException>("BadRequestException")({message: Schema.optional(Schema.String)}) {}
export class ConflictException extends Schema.Class<ConflictException>("ConflictException")({message: Schema.optional(Schema.String)}) {}
export class ForbiddenException extends Schema.Class<ForbiddenException>("ForbiddenException")({message: Schema.optional(Schema.String)}) {}
export class InternalServerErrorException extends Schema.Class<InternalServerErrorException>("InternalServerErrorException")({message: Schema.optional(Schema.String)}) {}
export class NotFoundException extends Schema.Class<NotFoundException>("NotFoundException")({message: Schema.optional(Schema.String)}) {}
export class TooManyRequestsException extends Schema.Class<TooManyRequestsException>("TooManyRequestsException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class BadRequestExceptionError extends Schema.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException.fields) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class ForbiddenExceptionError extends Schema.TaggedError<ForbiddenExceptionError>()("ForbiddenException", ForbiddenException.fields) {};
export class InternalServerErrorExceptionError extends Schema.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException.fields) {};
export class NotFoundExceptionError extends Schema.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException.fields) {};
export class TooManyRequestsExceptionError extends Schema.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tag/{resourceArn}", method: "DELETE", sdkId: "S3Tables", sigV4ServiceName: "s3tables", name: "S3TableBuckets.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tag/{resourceArn}", method: "GET", sdkId: "S3Tables", sigV4ServiceName: "s3tables", name: "S3TableBuckets.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tag/{resourceArn}", method: "POST", sdkId: "S3Tables", sigV4ServiceName: "s3tables", name: "S3TableBuckets.TagResource" }, TagResourceRequest, TagResourceResponse, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

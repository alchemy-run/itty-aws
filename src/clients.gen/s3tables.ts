import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(Tags)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class BadRequestException extends S.Class<BadRequestException>("BadRequestException")({message: S.optional(S.String)}) {}
export class ConflictException extends S.Class<ConflictException>("ConflictException")({message: S.optional(S.String)}) {}
export class ForbiddenException extends S.Class<ForbiddenException>("ForbiddenException")({message: S.optional(S.String)}) {}
export class InternalServerErrorException extends S.Class<InternalServerErrorException>("InternalServerErrorException")({message: S.optional(S.String)}) {}
export class NotFoundException extends S.Class<NotFoundException>("NotFoundException")({message: S.optional(S.String)}) {}
export class TooManyRequestsException extends S.Class<TooManyRequestsException>("TooManyRequestsException")({message: S.optional(S.String)}) {}

//# Errors
export class BadRequestExceptionError extends S.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class ForbiddenExceptionError extends S.TaggedError<ForbiddenExceptionError>()("ForbiddenException", ForbiddenException.fields) {};
export class InternalServerErrorExceptionError extends S.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException.fields) {};
export class NotFoundExceptionError extends S.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException.fields) {};
export class TooManyRequestsExceptionError extends S.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tag/{resourceArn}", method: "DELETE", sdkId: "S3Tables", sigV4ServiceName: "s3tables", name: "S3TableBuckets.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tag/{resourceArn}", method: "GET", sdkId: "S3Tables", sigV4ServiceName: "s3tables", name: "S3TableBuckets.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tag/{resourceArn}", method: "POST", sdkId: "S3Tables", sigV4ServiceName: "s3tables", name: "S3TableBuckets.TagResource" }, TagResourceRequest, TagResourceResponse, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

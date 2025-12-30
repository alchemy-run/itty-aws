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

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class InternalServerErrorException extends S.TaggedError<InternalServerErrorException>()("InternalServerErrorException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tag/{resourceArn}", method: "DELETE", sdkId: "S3Tables", sigV4ServiceName: "s3tables", name: "S3TableBuckets.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tag/{resourceArn}", method: "GET", sdkId: "S3Tables", sigV4ServiceName: "s3tables", name: "S3TableBuckets.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tag/{resourceArn}", method: "POST", sdkId: "S3Tables", sigV4ServiceName: "s3tables", name: "S3TableBuckets.TagResource" }, TagResourceRequest, TagResourceResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

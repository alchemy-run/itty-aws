import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: S.String}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export const TagsMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({tags: TagsMap}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({resourceArn: S.String, tags: TagsMap}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class ConflictException extends S.Class<ConflictException>("ConflictException")({message: S.String}) {}
export class NotFoundException extends S.Class<NotFoundException>("NotFoundException")({message: S.String}) {}
export class ServiceUnavailableException extends S.Class<ServiceUnavailableException>("ServiceUnavailableException")({message: S.String}) {}

//# Errors
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class NotFoundExceptionError extends S.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException.fields) {};
export class ServiceUnavailableExceptionError extends S.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-07-15", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "S3Vectors", sigV4ServiceName: "s3vectors", name: "S3Vectors.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ConflictExceptionError, NotFoundExceptionError, ServiceUnavailableExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-07-15", uri: "/tags/{resourceArn}", method: "GET", sdkId: "S3Vectors", sigV4ServiceName: "s3vectors", name: "S3Vectors.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [NotFoundExceptionError, ServiceUnavailableExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-07-15", uri: "/tags/{resourceArn}", method: "POST", sdkId: "S3Vectors", sigV4ServiceName: "s3vectors", name: "S3Vectors.TagResource" }, TagResourceInput, TagResourceOutput, [ConflictExceptionError, NotFoundExceptionError, ServiceUnavailableExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

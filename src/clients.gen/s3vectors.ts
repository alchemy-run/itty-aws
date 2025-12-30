import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class ListTagsForResourceInput extends Schema.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: Schema.String}) {}
export class UntagResourceInput extends Schema.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: Schema.String, tagKeys: TagKeyList}) {}
export class UntagResourceOutput extends Schema.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export class ListTagsForResourceOutput extends Schema.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({tags: TagsMap}) {}
export class TagResourceInput extends Schema.Class<TagResourceInput>("TagResourceInput")({resourceArn: Schema.String, tags: TagsMap}) {}
export class TagResourceOutput extends Schema.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class ConflictException extends Schema.Class<ConflictException>("ConflictException")({message: Schema.String}) {}
export class NotFoundException extends Schema.Class<NotFoundException>("NotFoundException")({message: Schema.String}) {}
export class ServiceUnavailableException extends Schema.Class<ServiceUnavailableException>("ServiceUnavailableException")({message: Schema.String}) {}

//# Errors
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class NotFoundExceptionError extends Schema.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException.fields) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-07-15", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "S3Vectors", sigV4ServiceName: "s3vectors", name: "S3Vectors.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ConflictExceptionError, NotFoundExceptionError, ServiceUnavailableExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-07-15", uri: "/tags/{resourceArn}", method: "GET", sdkId: "S3Vectors", sigV4ServiceName: "s3vectors", name: "S3Vectors.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [NotFoundExceptionError, ServiceUnavailableExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-07-15", uri: "/tags/{resourceArn}", method: "POST", sdkId: "S3Vectors", sigV4ServiceName: "s3vectors", name: "S3Vectors.TagResource" }, TagResourceInput, TagResourceOutput, [ConflictExceptionError, NotFoundExceptionError, ServiceUnavailableExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

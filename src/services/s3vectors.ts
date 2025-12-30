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

//# Errors
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};

//# Operations
/**
 * Removes the specified user-defined tags from an Amazon S3 Vectors resource. You can pass one or more tag keys.
 * 
 * 
 * For a list of S3 resources that support tagging, see Managing tags for Amazon S3 resources.
 * 
 * 
 * ### Permissions
 * 
 * For vector buckets and vector indexes, you must have the `s3vectors:UntagResource` permission to use this operation.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-07-15", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "S3Vectors", sigV4ServiceName: "s3vectors", name: "S3Vectors.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ConflictException, NotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all of the tags applied to a specified Amazon S3 Vectors resource. Each tag is a label consisting of a key and value pair. Tags can help you organize, track costs for, and control access to resources.
 * 
 * 
 * For a list of S3 resources that support tagging, see Managing tags for Amazon S3 resources.
 * 
 * 
 * ### Permissions
 * 
 * For vector buckets and vector indexes, you must have the `s3vectors:ListTagsForResource` permission to use this operation.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-07-15", uri: "/tags/{resourceArn}", method: "GET", sdkId: "S3Vectors", sigV4ServiceName: "s3vectors", name: "S3Vectors.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [NotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Applies one or more user-defined tags to an Amazon S3 Vectors resource or updates existing tags. Each tag is a label consisting of a key and value pair. Tags can help you organize, track costs for, and control access to your resources. You can add up to 50 tags for each resource.
 * 
 * 
 * For a list of S3 resources that support tagging, see Managing tags for Amazon S3 resources.
 * 
 * 
 * ### Permissions
 * 
 * For vector buckets and vector indexes, you must have the `s3vectors:TagResource` permission to use this operation.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-07-15", uri: "/tags/{resourceArn}", method: "POST", sdkId: "S3Vectors", sigV4ServiceName: "s3vectors", name: "S3Vectors.TagResource" }, TagResourceInput, TagResourceOutput, [ConflictException, NotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

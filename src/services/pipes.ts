import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);

//# Errors
export class InternalException extends S.TaggedError<InternalException>()("InternalException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * Removes one or more tags from the specified pipes.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Pipes", sigV4ServiceName: "pipes", name: "Pipes.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalException, NotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Displays the tags associated with a pipe.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Pipes", sigV4ServiceName: "pipes", name: "Pipes.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalException, NotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you
 * organize and categorize your resources. You can also use them to scope user permissions by
 * granting a user permission to access or change only resources with certain tag
 * values.
 * 
 * 
 * Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly
 * as strings of characters.
 * 
 * 
 * You can use the `TagResource` action with a pipe that already has tags. If
 * you specify a new tag key, this tag is appended to the list of tags associated with the
 * pipe. If you specify a tag key that is already associated with the pipe, the new tag value
 * that you specify replaces the previous value for that tag.
 * 
 * 
 * You can associate as many as 50 tags with a pipe.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Pipes", sigV4ServiceName: "pipes", name: "Pipes.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalException, NotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

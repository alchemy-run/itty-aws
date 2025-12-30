import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class TestSegmentPatternRequest extends S.Class<TestSegmentPatternRequest>("TestSegmentPatternRequest")({pattern: S.String, payload: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class TestSegmentPatternResponse extends S.Class<TestSegmentPatternResponse>("TestSegmentPatternResponse")({match: S.Boolean}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);

//# Errors
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {message: S.optional(S.String)}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {message: S.optional(S.String), serviceCode: S.optional(S.String), quotaCode: S.optional(S.String)}) {};

//# Operations
/**
 * Removes one or more tags from the specified resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-02-01", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "Evidently.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ConflictException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Displays the tags associated with an Evidently resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-02-01", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "Evidently.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ConflictException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns one or more tags (key-value pairs) to the specified CloudWatch Evidently resource. Projects,
 * features, launches, and experiments can be tagged.
 * 
 * 
 * Tags can help you organize and categorize your resources. You can also use them to scope user
 * permissions by granting a user
 * permission to access or change only resources with certain tag values.
 * 
 * 
 * Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.
 * 
 * 
 * You can use the `TagResource` action with a resource that already has tags.
 * If you specify a new tag key for the resource,
 * this tag is appended to the list of tags associated
 * with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces
 * the previous value for that tag.
 * 
 * 
 * You can associate as many as 50 tags with a resource.
 * 
 * 
 * For more information, see Tagging Amazon Web Services resources.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-02-01", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "Evidently.TagResource" }, TagResourceRequest, TagResourceResponse, [ConflictException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Use this operation to test a rules pattern that you plan to use to create an audience segment.
 * For more information about segments, see CreateSegment.
 */export const testSegmentPattern = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-02-01", uri: "/test-segment-pattern", method: "POST", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "Evidently.TestSegmentPattern" }, TestSegmentPatternRequest, TestSegmentPatternResponse, [AccessDeniedException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

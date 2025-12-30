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
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-02-01", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "Evidently.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ConflictException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-02-01", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "Evidently.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ConflictException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-02-01", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "Evidently.TagResource" }, TagResourceRequest, TagResourceResponse, [ConflictException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const testSegmentPattern = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-02-01", uri: "/test-segment-pattern", method: "POST", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "Evidently.TestSegmentPattern" }, TestSegmentPatternRequest, TestSegmentPatternResponse, [AccessDeniedException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

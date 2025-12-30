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
export class ConflictException extends S.Class<ConflictException>("ConflictException")({message: S.optional(S.String), resourceId: S.optional(S.String), resourceType: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String), resourceId: S.optional(S.String), resourceType: S.optional(S.String)}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.optional(S.String)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.optional(S.String), reason: S.optional(S.String), fieldList: S.optional(ValidationExceptionFieldList)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.optional(S.String), serviceCode: S.optional(S.String), quotaCode: S.optional(S.String)}) {}

//# Errors
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-02-01", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "Evidently.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ConflictExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-02-01", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "Evidently.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ConflictExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-02-01", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "Evidently.TagResource" }, TagResourceRequest, TagResourceResponse, [ConflictExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const testSegmentPattern = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-02-01", uri: "/test-segment-pattern", method: "POST", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "Evidently.TestSegmentPattern" }, TestSegmentPatternRequest, TestSegmentPatternResponse, [AccessDeniedExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

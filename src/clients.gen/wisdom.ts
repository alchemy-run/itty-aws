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
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String), resourceName: S.optional(S.String)}) {}
export class TooManyTagsException extends S.Class<TooManyTagsException>("TooManyTagsException")({message: S.optional(S.String), resourceName: S.optional(S.String)}) {}

//# Errors
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class TooManyTagsExceptionError extends S.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-10-19", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Wisdom", sigV4ServiceName: "wisdom", name: "WisdomService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-10-19", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Wisdom", sigV4ServiceName: "wisdom", name: "WisdomService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-10-19", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Wisdom", sigV4ServiceName: "wisdom", name: "WisdomService.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError, TooManyTagsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

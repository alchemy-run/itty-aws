import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagMap}) {}

//# Errors
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-12-25", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MediaPackageV2", sigV4ServiceName: "mediapackagev2", name: "mediapackagev2.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-12-25", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MediaPackageV2", sigV4ServiceName: "mediapackagev2", name: "mediapackagev2.TagResource" }, TagResourceRequest, S.Struct({}), [ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-12-25", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "MediaPackageV2", sigV4ServiceName: "mediapackagev2", name: "mediapackagev2.UntagResource" }, UntagResourceRequest, S.Struct({}), [ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

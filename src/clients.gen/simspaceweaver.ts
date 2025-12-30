import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({ResourceArn: S.String}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({Tags: S.optional(TagMap)}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({ResourceArn: S.String, Tags: TagMap}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}

//# Errors
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {Message: S.optional(S.String)}) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-10-28", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "SimSpaceWeaver", sigV4ServiceName: "simspaceweaver", name: "SimSpaceWeaver.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-10-28", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "SimSpaceWeaver", sigV4ServiceName: "simspaceweaver", name: "SimSpaceWeaver.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-10-28", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "SimSpaceWeaver", sigV4ServiceName: "simspaceweaver", name: "SimSpaceWeaver.TagResource" }, TagResourceInput, TagResourceOutput, [ResourceNotFoundException, TooManyTagsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

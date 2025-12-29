import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(Tags)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: Tags});
export const TagResourceResponse = Schema.Struct({});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String), resourceName: Schema.optional(Schema.String)});
export const TooManyTagsException = Schema.Struct({message: Schema.optional(Schema.String), resourceName: Schema.optional(Schema.String)});
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-10-19", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Wisdom", sigV4ServiceName: "wisdom", name: "WisdomService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-10-19", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Wisdom", sigV4ServiceName: "wisdom", name: "WisdomService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-10-19", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Wisdom", sigV4ServiceName: "wisdom", name: "WisdomService.TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("TooManyTagsException", TooManyTagsException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const UntagResourceResponse = Schema.Struct({})
const Tags = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(Tags)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "QConnect", sigV4ServiceName: "wisdom", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: Tags})
const TagResourceResponse = Schema.Struct({})
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String), resourceName: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "QConnect", sigV4ServiceName: "wisdom", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TooManyTagsException = Schema.Struct({message: Schema.optional(Schema.String), resourceName: Schema.optional(Schema.String)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "QConnect", sigV4ServiceName: "wisdom", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("TooManyTagsException", TooManyTagsException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

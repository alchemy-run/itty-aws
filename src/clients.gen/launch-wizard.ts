import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String})
const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const UntagResourceOutput = Schema.Struct({})
const Tags = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceOutput = Schema.Struct({tags: Schema.optional(Tags)})
const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: Tags})
const TagResourceOutput = Schema.Struct({})
const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Launch Wizard", sigV4ServiceName: "launchwizard", name: "UntagResource" }, UntagResourceInput, UntagResourceOutput, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "Launch Wizard", sigV4ServiceName: "launchwizard", name: "ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationException = Schema.Struct({message: Schema.optional(Schema.String)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "Launch Wizard", sigV4ServiceName: "launchwizard", name: "TagResource" }, TagResourceInput, TagResourceOutput, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

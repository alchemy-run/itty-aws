import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeys = Schema.Array(Schema.String)
const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String})
const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys})
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceOutput = Schema.Struct({tags: Schema.optional(TagMap)})
const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagMap})
const InternalServerException = Schema.Struct({message: Schema.String})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Snow Device Management", sigV4ServiceName: "snow-device-management", name: "UntagResource" }, UntagResourceInput, Schema.Struct({}), Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.String})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "Snow Device Management", sigV4ServiceName: "snow-device-management", name: "ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationException = Schema.Struct({message: Schema.String})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "Snow Device Management", sigV4ServiceName: "snow-device-management", name: "TagResource" }, TagResourceInput, Schema.Struct({}), Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

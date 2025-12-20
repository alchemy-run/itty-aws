import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListTagsForResourceInput = Schema.Struct({ResourceArn: Schema.String})
const UntagResourceInput = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList})
const UntagResourceOutput = Schema.Struct({})
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceOutput = Schema.Struct({Tags: Schema.optional(TagMap)})
const TagResourceInput = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap})
const TagResourceOutput = Schema.Struct({})
const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "SimSpaceWeaver", sigV4ServiceName: "simspaceweaver", name: "UntagResource" }, UntagResourceInput, UntagResourceOutput, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "GET", sdkId: "SimSpaceWeaver", sigV4ServiceName: "simspaceweaver", name: "ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TooManyTagsException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "POST", sdkId: "SimSpaceWeaver", sigV4ServiceName: "simspaceweaver", name: "TagResource" }, TagResourceInput, TagResourceOutput, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("TooManyTagsException", TooManyTagsException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListTagsForResourceInput = Schema.Struct({ResourceArn: Schema.String})
const UntagResourceInput = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList})
const UntagResourceOutput = Schema.Struct({})
const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String})
const TagList = Schema.Array(Tag)
const ListTagsForResourceOutput = Schema.Struct({Tags: Schema.optional(TagList)})
const TagResourceInput = Schema.Struct({ResourceArn: Schema.String, Tags: TagList})
const TagResourceOutput = Schema.Struct({})
const ConflictException = Schema.Struct({Message: Schema.String})
const InternalServerException = Schema.Struct({Message: Schema.String})
const ResourceNotFoundException = Schema.Struct({Message: Schema.String})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "POST", sdkId: "Scheduler", sigV4ServiceName: "scheduler", name: "TagResource" }, TagResourceInput, TagResourceOutput, Schema.Union(ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({Message: Schema.String})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "Scheduler", sigV4ServiceName: "scheduler", name: "UntagResource" }, UntagResourceInput, UntagResourceOutput, Schema.Union(ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationException = Schema.Struct({Message: Schema.String})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "GET", sdkId: "Scheduler", sigV4ServiceName: "scheduler", name: "ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

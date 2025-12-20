import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String})
const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const UntagResourceOutput = Schema.Struct({})
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceOutput = Schema.Struct({tags: Schema.optional(TagMap)})
const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagMap})
const TagResourceOutput = Schema.Struct({})
const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)})
const ConflictException = Schema.Struct({message: Schema.optional(Schema.String)})
const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)})
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "NetworkMonitor", sigV4ServiceName: "networkmonitor", name: "UntagResource" }, UntagResourceInput, UntagResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "NetworkMonitor", sigV4ServiceName: "networkmonitor", name: "ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationException = Schema.Struct({message: Schema.optional(Schema.String)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "NetworkMonitor", sigV4ServiceName: "networkmonitor", name: "TagResource" }, TagResourceInput, TagResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

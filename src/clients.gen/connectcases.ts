import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListTagsForResourceRequest = Schema.Struct({arn: Schema.String})
const UntagResourceRequest = Schema.Struct({arn: Schema.String, tagKeys: TagKeyList})
const Tags = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(Tags)})
const TagResourceRequest = Schema.Struct({arn: Schema.String, tags: Tags})
const AccessDeniedException = Schema.Struct({message: Schema.String})
const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{arn}", method: "POST", sdkId: "ConnectCases", sigV4ServiceName: "cases", name: "TagResource" }, TagResourceRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({message: Schema.String})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{arn}", method: "DELETE", sdkId: "ConnectCases", sigV4ServiceName: "cases", name: "UntagResource" }, UntagResourceRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationException = Schema.Struct({message: Schema.String})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{arn}", method: "GET", sdkId: "ConnectCases", sigV4ServiceName: "cases", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

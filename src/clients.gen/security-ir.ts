import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeys = Schema.Array(Schema.String)
const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String})
const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys})
const UntagResourceOutput = Schema.Struct({})
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceOutput = Schema.Struct({tags: TagMap})
const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagMap})
const TagResourceOutput = Schema.Struct({})
const AccessDeniedException = Schema.Struct({message: Schema.String})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/v1/tags/{resourceArn}", method: "DELETE", sdkId: "Security IR", sigV4ServiceName: "security-ir", name: "UntagResource" }, UntagResourceInput, UntagResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.String})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/v1/tags/{resourceArn}", method: "GET", sdkId: "Security IR", sigV4ServiceName: "security-ir", name: "ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String})
const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField)
const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/v1/tags/{resourceArn}", method: "POST", sdkId: "Security IR", sigV4ServiceName: "security-ir", name: "TagResource" }, TagResourceInput, TagResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeys = Schema.Array(Schema.String)
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys})
const UntagResourceResponse = Schema.Struct({})
const TagsMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagsMap)})
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagsMap})
const TagResourceResponse = Schema.Struct({})
const InternalServiceException = Schema.Struct({message: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Braket", sigV4ServiceName: "braket", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("InternalServiceException", InternalServiceException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "Braket", sigV4ServiceName: "braket", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("InternalServiceException", InternalServiceException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ProgramValidationFailuresList = Schema.Array(Schema.String)
const ProgramSetValidationFailure = Schema.Struct({programIndex: Schema.Number, inputsIndex: Schema.optional(Schema.Number), errors: Schema.optional(ProgramValidationFailuresList)})
const ProgramSetValidationFailuresList = Schema.Array(ProgramSetValidationFailure)
const ValidationException = Schema.Struct({message: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), programSetValidationFailures: Schema.optional(ProgramSetValidationFailuresList)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "Braket", sigV4ServiceName: "braket", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("InternalServiceException", InternalServiceException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

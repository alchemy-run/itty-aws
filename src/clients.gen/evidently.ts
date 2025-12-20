import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const TestSegmentPatternRequest = Schema.Struct({pattern: Schema.String, payload: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const UntagResourceResponse = Schema.Struct({})
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagMap)})
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagMap})
const TagResourceResponse = Schema.Struct({})
const TestSegmentPatternResponse = Schema.Struct({match: Schema.Boolean})
const ConflictException = Schema.Struct({message: Schema.optional(Schema.String), resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String), resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)})
const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String})
const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField)
const ValidationException = Schema.Struct({message: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String), serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String)})
export const TestSegmentPattern = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/test-segment-pattern", method: "POST", sdkId: "Evidently", sigV4ServiceName: "evidently", name: "TestSegmentPattern" }, TestSegmentPatternRequest, TestSegmentPatternResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const GetDefaultScraperConfigurationRequest = Schema.Struct({})
const TagKeys = Schema.Array(Schema.String)
const GetDefaultScraperConfigurationResponse = Schema.Struct({configuration: StreamBody()})
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys})
const UntagResourceResponse = Schema.Struct({})
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const AccessDeniedException = Schema.Struct({message: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagMap)})
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagMap})
const TagResourceResponse = Schema.Struct({})
const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "amp", sigV4ServiceName: "aps", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
export const GetDefaultScraperConfiguration = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/scraperconfiguration", method: "GET", sdkId: "amp", sigV4ServiceName: "aps", name: "GetDefaultScraperConfiguration" }, GetDefaultScraperConfigurationRequest, GetDefaultScraperConfigurationResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ThrottlingException", ThrottlingException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "amp", sigV4ServiceName: "aps", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String})
const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField)
const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "amp", sigV4ServiceName: "aps", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

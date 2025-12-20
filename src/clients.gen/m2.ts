import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const GetSignedBluinsightsUrlResponse = Schema.Struct({signedBiUrl: Schema.String})
const ListEngineVersionsRequest = Schema.Struct({engineType: Schema.optional(Schema.String), nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number)})
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const UntagResourceResponse = Schema.Struct({})
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const AccessDeniedException = Schema.Struct({message: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({tags: TagMap})
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagMap})
const TagResourceResponse = Schema.Struct({})
const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
const EngineVersionsSummary = Schema.Struct({engineType: Schema.String, engineVersion: Schema.String})
const EngineVersionsSummaryList = Schema.Array(EngineVersionsSummary)
const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
export const GetSignedBluinsightsUrl = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/signed-bi-url", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "GetSignedBluinsightsUrl" }, Schema.Struct({}), GetSignedBluinsightsUrlResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ThrottlingException", ThrottlingException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ListEngineVersionsResponse = Schema.Struct({engineVersions: EngineVersionsSummaryList, nextToken: Schema.optional(Schema.String)})
export const ListEngineVersions = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/engine-versions", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "ListEngineVersions" }, ListEngineVersionsRequest, ListEngineVersionsResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ServiceQuotaExceededException = Schema.Struct({message: Schema.String, resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String), serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "m2", sigV4ServiceName: "m2", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceQuotaExceededException", ServiceQuotaExceededException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String})
const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField)
const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "m2", sigV4ServiceName: "m2", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

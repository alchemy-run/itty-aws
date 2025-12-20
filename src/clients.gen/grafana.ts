import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeys = Schema.Array(Schema.String)
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const ListVersionsRequest = Schema.Struct({maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String), workspaceId: Schema.optional(Schema.String)})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys})
const UntagResourceResponse = Schema.Struct({})
const GrafanaVersionList = Schema.Array(Schema.String)
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagMap)})
const ListVersionsResponse = Schema.Struct({nextToken: Schema.optional(Schema.String), grafanaVersions: Schema.optional(GrafanaVersionList)})
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagMap})
const TagResourceResponse = Schema.Struct({})
const AccessDeniedException = Schema.Struct({message: Schema.String})
const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "grafana", sigV4ServiceName: "grafana", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String})
export const ListVersions = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/versions", method: "GET", sdkId: "grafana", sigV4ServiceName: "grafana", name: "ListVersions" }, ListVersionsRequest, ListVersionsResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "grafana", sigV4ServiceName: "grafana", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String})
const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField)
const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "grafana", sigV4ServiceName: "grafana", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

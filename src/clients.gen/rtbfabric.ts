import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListRequesterGatewaysRequest = Schema.Struct({maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)})
const ListResponderGatewaysRequest = Schema.Struct({maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)})
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const UntagResourceResponse = Schema.Struct({})
const GatewayIdList = Schema.Array(Schema.String)
const TagsMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListRequesterGatewaysResponse = Schema.Struct({gatewayIds: Schema.optional(GatewayIdList), nextToken: Schema.optional(Schema.String)})
const ListResponderGatewaysResponse = Schema.Struct({gatewayIds: Schema.optional(GatewayIdList), nextToken: Schema.optional(Schema.String)})
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagsMap)})
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagsMap})
const TagResourceResponse = Schema.Struct({})
const AccessDeniedException = Schema.Struct({message: Schema.String})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const InternalServerException = Schema.Struct({message: Schema.String})
export const ListRequesterGateways = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/requester-gateways", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "ListRequesterGateways" }, ListRequesterGatewaysRequest, ListRequesterGatewaysResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationException = Schema.Struct({message: Schema.String})
export const ListResponderGateways = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/responder-gateways", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "ListResponderGateways" }, ListResponderGatewaysRequest, ListResponderGatewaysResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.String})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({message: Schema.String})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

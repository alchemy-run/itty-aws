import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListRequesterGatewaysRequest extends S.Class<ListRequesterGatewaysRequest>("ListRequesterGatewaysRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListResponderGatewaysRequest extends S.Class<ListResponderGatewaysRequest>("ListResponderGatewaysRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const GatewayIdList = S.Array(S.String);
export const TagsMap = S.Record({key: S.String, value: S.String});
export class ListRequesterGatewaysResponse extends S.Class<ListRequesterGatewaysResponse>("ListRequesterGatewaysResponse")({gatewayIds: S.optional(GatewayIdList), nextToken: S.optional(S.String)}) {}
export class ListResponderGatewaysResponse extends S.Class<ListResponderGatewaysResponse>("ListResponderGatewaysResponse")({gatewayIds: S.optional(GatewayIdList), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagsMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagsMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * Removes a tag or tags from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-15", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists requester gateways.
 */export const listRequesterGateways = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-15", uri: "/requester-gateways", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.ListRequesterGateways" }, ListRequesterGatewaysRequest, ListRequesterGatewaysResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists reponder gateways.
 */export const listResponderGateways = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-15", uri: "/responder-gateways", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.ListResponderGateways" }, ListResponderGatewaysRequest, ListResponderGatewaysResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists tags for a resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-15", uri: "/tags/{resourceArn}", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns one or more tags (key-value pairs) to the specified resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-15", uri: "/tags/{resourceArn}", method: "POST", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

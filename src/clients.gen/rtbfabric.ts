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
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String}) {}

//# Errors
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-15", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listRequesterGateways = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-15", uri: "/requester-gateways", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.ListRequesterGateways" }, ListRequesterGatewaysRequest, ListRequesterGatewaysResponse, [InternalServerExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listResponderGateways = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-15", uri: "/responder-gateways", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.ListResponderGateways" }, ListResponderGatewaysRequest, ListResponderGatewaysResponse, [InternalServerExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-15", uri: "/tags/{resourceArn}", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-15", uri: "/tags/{resourceArn}", method: "POST", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

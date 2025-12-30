import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class ListRequesterGatewaysRequest extends Schema.Class<ListRequesterGatewaysRequest>("ListRequesterGatewaysRequest")({maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)}) {}
export class ListResponderGatewaysRequest extends Schema.Class<ListResponderGatewaysRequest>("ListResponderGatewaysRequest")({maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const GatewayIdList = Schema.Array(Schema.String);
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export class ListRequesterGatewaysResponse extends Schema.Class<ListRequesterGatewaysResponse>("ListRequesterGatewaysResponse")({gatewayIds: Schema.optional(GatewayIdList), nextToken: Schema.optional(Schema.String)}) {}
export class ListResponderGatewaysResponse extends Schema.Class<ListResponderGatewaysResponse>("ListResponderGatewaysResponse")({gatewayIds: Schema.optional(GatewayIdList), nextToken: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagsMap)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: TagsMap}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String}) {}

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-05-15", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listRequesterGateways = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-05-15", uri: "/requester-gateways", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.ListRequesterGateways" }, ListRequesterGatewaysRequest, ListRequesterGatewaysResponse, [InternalServerExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listResponderGateways = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-05-15", uri: "/responder-gateways", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.ListResponderGateways" }, ListResponderGatewaysRequest, ListResponderGatewaysResponse, [InternalServerExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-05-15", uri: "/tags/{resourceArn}", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-05-15", uri: "/tags/{resourceArn}", method: "POST", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

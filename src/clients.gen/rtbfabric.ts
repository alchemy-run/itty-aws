import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const ListRequesterGatewaysRequest = Schema.Struct({maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)});
export const ListResponderGatewaysRequest = Schema.Struct({maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const GatewayIdList = Schema.Array(Schema.String);
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListRequesterGatewaysResponse = Schema.Struct({gatewayIds: Schema.optional(GatewayIdList), nextToken: Schema.optional(Schema.String)});
export const ListResponderGatewaysResponse = Schema.Struct({gatewayIds: Schema.optional(GatewayIdList), nextToken: Schema.optional(Schema.String)});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagsMap)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagsMap});
export const TagResourceResponse = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const InternalServerException = Schema.Struct({message: Schema.String});
export const ValidationException = Schema.Struct({message: Schema.String});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String});
export const ThrottlingException = Schema.Struct({message: Schema.String});

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-05-15", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listRequesterGateways = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-05-15", uri: "/requester-gateways", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.ListRequesterGateways" }, ListRequesterGatewaysRequest, ListRequesterGatewaysResponse, [InternalServerExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listResponderGateways = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-05-15", uri: "/responder-gateways", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.ListResponderGateways" }, ListResponderGatewaysRequest, ListResponderGatewaysResponse, [InternalServerExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-05-15", uri: "/tags/{resourceArn}", method: "GET", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-05-15", uri: "/tags/{resourceArn}", method: "POST", sdkId: "RTBFabric", sigV4ServiceName: "rtbfabric", name: "RTBFabric.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

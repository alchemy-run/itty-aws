import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const __listOfString = Schema.Array(Schema.String);
export class ListEntitlementsRequest extends Schema.Class<ListEntitlementsRequest>("ListEntitlementsRequest")({MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)}) {}
export class ListTagsForGlobalResourceRequest extends Schema.Class<ListTagsForGlobalResourceRequest>("ListTagsForGlobalResourceRequest")({ResourceArn: Schema.String}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: Schema.String}) {}
export const __mapOfString = Schema.Record({key: Schema.String, value: Schema.String});
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: Schema.String, Tags: __mapOfString}) {}
export class UntagGlobalResourceRequest extends Schema.Class<UntagGlobalResourceRequest>("UntagGlobalResourceRequest")({ResourceArn: Schema.String, TagKeys: __listOfString}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: Schema.String, TagKeys: __listOfString}) {}
export class ListTagsForGlobalResourceResponse extends Schema.Class<ListTagsForGlobalResourceResponse>("ListTagsForGlobalResourceResponse")({Tags: Schema.optional(__mapOfString)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: Schema.optional(__mapOfString)}) {}
export class TagGlobalResourceRequest extends Schema.Class<TagGlobalResourceRequest>("TagGlobalResourceRequest")({ResourceArn: Schema.String, Tags: __mapOfString}) {}
export class BadRequestException extends Schema.Class<BadRequestException>("BadRequestException")({Message: Schema.String}) {}
export class InternalServerErrorException extends Schema.Class<InternalServerErrorException>("InternalServerErrorException")({Message: Schema.String}) {}
export class NotFoundException extends Schema.Class<NotFoundException>("NotFoundException")({Message: Schema.String}) {}
export class ListedEntitlement extends Schema.Class<ListedEntitlement>("ListedEntitlement")({DataTransferSubscriberFeePercent: Schema.optional(Schema.Number), EntitlementArn: Schema.String, EntitlementName: Schema.String}) {}
export const __listOfListedEntitlement = Schema.Array(ListedEntitlement);
export class ListEntitlementsResponse extends Schema.Class<ListEntitlementsResponse>("ListEntitlementsResponse")({Entitlements: Schema.optional(__listOfListedEntitlement), NextToken: Schema.optional(Schema.String)}) {}
export class ServiceUnavailableException extends Schema.Class<ServiceUnavailableException>("ServiceUnavailableException")({Message: Schema.String}) {}
export class TooManyRequestsException extends Schema.Class<TooManyRequestsException>("TooManyRequestsException")({Message: Schema.String}) {}

//# Errors
export class BadRequestExceptionError extends Schema.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException.fields) {};
export class InternalServerErrorExceptionError extends Schema.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException.fields) {};
export class NotFoundExceptionError extends Schema.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException.fields) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};
export class TooManyRequestsExceptionError extends Schema.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException.fields) {};

//# Operations
export const listTagsForGlobalResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-14", uri: "/tags/global/{ResourceArn}", method: "GET", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.ListTagsForGlobalResource" }, ListTagsForGlobalResourceRequest, ListTagsForGlobalResourceResponse, [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-14", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagGlobalResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-14", uri: "/tags/global/{ResourceArn}", method: "POST", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.TagGlobalResource" }, TagGlobalResourceRequest, Schema.Struct({}), [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-14", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.TagResource" }, TagResourceRequest, Schema.Struct({}), [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagGlobalResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-14", uri: "/tags/global/{ResourceArn}", method: "DELETE", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.UntagGlobalResource" }, UntagGlobalResourceRequest, Schema.Struct({}), [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-14", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.UntagResource" }, UntagResourceRequest, Schema.Struct({}), [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listEntitlements = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-14", uri: "/v1/entitlements", method: "GET", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.ListEntitlements" }, ListEntitlementsRequest, ListEntitlementsResponse, [BadRequestExceptionError, InternalServerErrorExceptionError, ServiceUnavailableExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

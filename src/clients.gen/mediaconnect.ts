import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const __listOfString = S.Array(S.String);
export class ListEntitlementsRequest extends S.Class<ListEntitlementsRequest>("ListEntitlementsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForGlobalResourceRequest extends S.Class<ListTagsForGlobalResourceRequest>("ListTagsForGlobalResourceRequest")({ResourceArn: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export const __mapOfString = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: __mapOfString}) {}
export class UntagGlobalResourceRequest extends S.Class<UntagGlobalResourceRequest>("UntagGlobalResourceRequest")({ResourceArn: S.String, TagKeys: __listOfString}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: __listOfString}) {}
export class ListTagsForGlobalResourceResponse extends S.Class<ListTagsForGlobalResourceResponse>("ListTagsForGlobalResourceResponse")({Tags: S.optional(__mapOfString)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(__mapOfString)}) {}
export class TagGlobalResourceRequest extends S.Class<TagGlobalResourceRequest>("TagGlobalResourceRequest")({ResourceArn: S.String, Tags: __mapOfString}) {}
export class BadRequestException extends S.Class<BadRequestException>("BadRequestException")({Message: S.String}) {}
export class InternalServerErrorException extends S.Class<InternalServerErrorException>("InternalServerErrorException")({Message: S.String}) {}
export class NotFoundException extends S.Class<NotFoundException>("NotFoundException")({Message: S.String}) {}
export class ListedEntitlement extends S.Class<ListedEntitlement>("ListedEntitlement")({DataTransferSubscriberFeePercent: S.optional(S.Number), EntitlementArn: S.String, EntitlementName: S.String}) {}
export const __listOfListedEntitlement = S.Array(ListedEntitlement);
export class ListEntitlementsResponse extends S.Class<ListEntitlementsResponse>("ListEntitlementsResponse")({Entitlements: S.optional(__listOfListedEntitlement), NextToken: S.optional(S.String)}) {}
export class ServiceUnavailableException extends S.Class<ServiceUnavailableException>("ServiceUnavailableException")({Message: S.String}) {}
export class TooManyRequestsException extends S.Class<TooManyRequestsException>("TooManyRequestsException")({Message: S.String}) {}

//# Errors
export class BadRequestExceptionError extends S.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException.fields) {};
export class InternalServerErrorExceptionError extends S.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException.fields) {};
export class NotFoundExceptionError extends S.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException.fields) {};
export class ServiceUnavailableExceptionError extends S.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};
export class TooManyRequestsExceptionError extends S.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException.fields) {};

//# Operations
export const listTagsForGlobalResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/tags/global/{ResourceArn}", method: "GET", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.ListTagsForGlobalResource" }, ListTagsForGlobalResourceRequest, ListTagsForGlobalResourceResponse, [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagGlobalResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/tags/global/{ResourceArn}", method: "POST", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.TagGlobalResource" }, TagGlobalResourceRequest, S.Struct({}), [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.TagResource" }, TagResourceRequest, S.Struct({}), [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagGlobalResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/tags/global/{ResourceArn}", method: "DELETE", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.UntagGlobalResource" }, UntagGlobalResourceRequest, S.Struct({}), [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.UntagResource" }, UntagResourceRequest, S.Struct({}), [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listEntitlements = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/entitlements", method: "GET", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.ListEntitlements" }, ListEntitlementsRequest, ListEntitlementsResponse, [BadRequestExceptionError, InternalServerErrorExceptionError, ServiceUnavailableExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const __listOfString = Schema.Array(Schema.String);
export const ListEntitlementsRequest = Schema.Struct({MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)});
export const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: __listOfString});
export const __mapOfString = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(__mapOfString)});
export const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: __mapOfString});
export const BadRequestException = Schema.Struct({Message: Schema.String});
export const ListedEntitlement = Schema.Struct({DataTransferSubscriberFeePercent: Schema.optional(Schema.Number), EntitlementArn: Schema.String, EntitlementName: Schema.String});
export const __listOfListedEntitlement = Schema.Array(ListedEntitlement);
export const ListEntitlementsResponse = Schema.Struct({Entitlements: Schema.optional(__listOfListedEntitlement), NextToken: Schema.optional(Schema.String)});
export const InternalServerErrorException = Schema.Struct({Message: Schema.String});
export const NotFoundException = Schema.Struct({Message: Schema.String});
export const ServiceUnavailableException = Schema.Struct({Message: Schema.String});
export const TooManyRequestsException = Schema.Struct({Message: Schema.String});

//# Errors
export class BadRequestExceptionError extends Schema.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException) {};
export class InternalServerErrorExceptionError extends Schema.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException) {};
export class NotFoundExceptionError extends Schema.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException) {};
export class TooManyRequestsExceptionError extends Schema.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-14", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.UntagResource" }, UntagResourceRequest, Schema.Struct({}), [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-14", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-14", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.TagResource" }, TagResourceRequest, Schema.Struct({}), [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listEntitlements = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-14", uri: "/v1/entitlements", method: "GET", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "MediaConnect.ListEntitlements" }, ListEntitlementsRequest, ListEntitlementsResponse, [BadRequestExceptionError, InternalServerErrorExceptionError, ServiceUnavailableExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

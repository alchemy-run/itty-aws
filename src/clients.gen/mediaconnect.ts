import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const __listOfString = Schema.Array(Schema.String)
const ListEntitlementsRequest = Schema.Struct({MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)})
const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: __listOfString})
const __mapOfString = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(__mapOfString)})
const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: __mapOfString})
const BadRequestException = Schema.Struct({Message: Schema.String})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "UntagResource" }, UntagResourceRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("InternalServerErrorException", InternalServerErrorException), ErrorAnnotation("NotFoundException", NotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ListedEntitlement = Schema.Struct({DataTransferSubscriberFeePercent: Schema.optional(Schema.Number), EntitlementArn: Schema.String, EntitlementName: Schema.String})
const __listOfListedEntitlement = Schema.Array(ListedEntitlement)
const ListEntitlementsResponse = Schema.Struct({Entitlements: Schema.optional(__listOfListedEntitlement), NextToken: Schema.optional(Schema.String)})
const InternalServerErrorException = Schema.Struct({Message: Schema.String})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("InternalServerErrorException", InternalServerErrorException), ErrorAnnotation("NotFoundException", NotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const NotFoundException = Schema.Struct({Message: Schema.String})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "TagResource" }, TagResourceRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("InternalServerErrorException", InternalServerErrorException), ErrorAnnotation("NotFoundException", NotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ServiceUnavailableException = Schema.Struct({Message: Schema.String})
const TooManyRequestsException = Schema.Struct({Message: Schema.String})
export const ListEntitlements = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/v1/entitlements", method: "GET", sdkId: "MediaConnect", sigV4ServiceName: "mediaconnect", name: "ListEntitlements" }, ListEntitlementsRequest, ListEntitlementsResponse, Schema.Union(ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("InternalServerErrorException", InternalServerErrorException), ErrorAnnotation("ServiceUnavailableException", ServiceUnavailableException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

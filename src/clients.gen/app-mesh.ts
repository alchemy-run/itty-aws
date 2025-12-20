import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String, nextToken: Schema.optional(Schema.String), limit: Schema.optional(Schema.Number)})
const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const UntagResourceOutput = Schema.Struct({})
const TagRef = Schema.Struct({key: Schema.String, value: Schema.String})
const TagList = Schema.Array(TagRef)
const ListTagsForResourceOutput = Schema.Struct({tags: TagList, nextToken: Schema.optional(Schema.String)})
const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagList})
const TagResourceOutput = Schema.Struct({})
const BadRequestException = Schema.Struct({message: Schema.optional(Schema.String)})
const ForbiddenException = Schema.Struct({message: Schema.optional(Schema.String)})
const InternalServerErrorException = Schema.Struct({message: Schema.optional(Schema.String)})
const NotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/v20190125/untag", method: "PUT", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "UntagResource" }, UntagResourceInput, UntagResourceOutput, Schema.Union(ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("ForbiddenException", ForbiddenException), ErrorAnnotation("InternalServerErrorException", InternalServerErrorException), ErrorAnnotation("NotFoundException", NotFoundException), ErrorAnnotation("ServiceUnavailableException", ServiceUnavailableException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ServiceUnavailableException = Schema.Struct({message: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/v20190125/tags", method: "GET", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("ForbiddenException", ForbiddenException), ErrorAnnotation("InternalServerErrorException", InternalServerErrorException), ErrorAnnotation("NotFoundException", NotFoundException), ErrorAnnotation("ServiceUnavailableException", ServiceUnavailableException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TooManyRequestsException = Schema.Struct({message: Schema.optional(Schema.String)})
const TooManyTagsException = Schema.Struct({message: Schema.optional(Schema.String)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/v20190125/tag", method: "PUT", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "TagResource" }, TagResourceInput, TagResourceOutput, Schema.Union(ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("ForbiddenException", ForbiddenException), ErrorAnnotation("InternalServerErrorException", InternalServerErrorException), ErrorAnnotation("NotFoundException", NotFoundException), ErrorAnnotation("ServiceUnavailableException", ServiceUnavailableException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException), ErrorAnnotation("TooManyTagsException", TooManyTagsException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const UntagResourceResponse = Schema.Struct({})
const Tags = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(Tags)})
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: Tags})
const TagResourceResponse = Schema.Struct({})
const BadRequestException = Schema.Struct({message: Schema.optional(Schema.String)})
const ConflictException = Schema.Struct({message: Schema.optional(Schema.String)})
const ForbiddenException = Schema.Struct({message: Schema.optional(Schema.String)})
const InternalServerErrorException = Schema.Struct({message: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tag/{resourceArn}", method: "DELETE", sdkId: "S3Tables", sigV4ServiceName: "s3tables", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("ForbiddenException", ForbiddenException), ErrorAnnotation("InternalServerErrorException", InternalServerErrorException), ErrorAnnotation("NotFoundException", NotFoundException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const NotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tag/{resourceArn}", method: "GET", sdkId: "S3Tables", sigV4ServiceName: "s3tables", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("ForbiddenException", ForbiddenException), ErrorAnnotation("InternalServerErrorException", InternalServerErrorException), ErrorAnnotation("NotFoundException", NotFoundException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TooManyRequestsException = Schema.Struct({message: Schema.optional(Schema.String)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tag/{resourceArn}", method: "POST", sdkId: "S3Tables", sigV4ServiceName: "s3tables", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("ForbiddenException", ForbiddenException), ErrorAnnotation("InternalServerErrorException", InternalServerErrorException), ErrorAnnotation("NotFoundException", NotFoundException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

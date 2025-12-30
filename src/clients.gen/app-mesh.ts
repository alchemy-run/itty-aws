import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String, nextToken: Schema.optional(Schema.String), limit: Schema.optional(Schema.Number)});
export const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceOutput = Schema.Struct({});
export const TagRef = Schema.Struct({key: Schema.String, value: Schema.String});
export const TagList = Schema.Array(TagRef);
export const ListTagsForResourceOutput = Schema.Struct({tags: TagList, nextToken: Schema.optional(Schema.String)});
export const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagList});
export const TagResourceOutput = Schema.Struct({});
export const BadRequestException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ForbiddenException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InternalServerErrorException = Schema.Struct({message: Schema.optional(Schema.String)});
export const NotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ServiceUnavailableException = Schema.Struct({message: Schema.optional(Schema.String)});
export const TooManyRequestsException = Schema.Struct({message: Schema.optional(Schema.String)});
export const TooManyTagsException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class BadRequestExceptionError extends Schema.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException) {};
export class ForbiddenExceptionError extends Schema.TaggedError<ForbiddenExceptionError>()("ForbiddenException", ForbiddenException) {};
export class InternalServerErrorExceptionError extends Schema.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException) {};
export class NotFoundExceptionError extends Schema.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException) {};
export class TooManyRequestsExceptionError extends Schema.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException) {};
export class TooManyTagsExceptionError extends Schema.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-01-25", uri: "/v20190125/untag", method: "PUT", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "AppMesh.UntagResource" }, UntagResourceInput, UntagResourceOutput, [BadRequestExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, ServiceUnavailableExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-01-25", uri: "/v20190125/tags", method: "GET", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "AppMesh.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [BadRequestExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, ServiceUnavailableExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-01-25", uri: "/v20190125/tag", method: "PUT", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "AppMesh.TagResource" }, TagResourceInput, TagResourceOutput, [BadRequestExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, ServiceUnavailableExceptionError, TooManyRequestsExceptionError, TooManyTagsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

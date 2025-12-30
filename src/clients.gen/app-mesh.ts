import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: S.String, nextToken: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export class TagRef extends S.Class<TagRef>("TagRef")({key: S.String, value: S.String}) {}
export const TagList = S.Array(TagRef);
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({tags: TagList, nextToken: S.optional(S.String)}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({resourceArn: S.String, tags: TagList}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class BadRequestException extends S.Class<BadRequestException>("BadRequestException")({message: S.optional(S.String)}) {}
export class ForbiddenException extends S.Class<ForbiddenException>("ForbiddenException")({message: S.optional(S.String)}) {}
export class InternalServerErrorException extends S.Class<InternalServerErrorException>("InternalServerErrorException")({message: S.optional(S.String)}) {}
export class NotFoundException extends S.Class<NotFoundException>("NotFoundException")({message: S.optional(S.String)}) {}
export class ServiceUnavailableException extends S.Class<ServiceUnavailableException>("ServiceUnavailableException")({message: S.optional(S.String)}) {}
export class TooManyRequestsException extends S.Class<TooManyRequestsException>("TooManyRequestsException")({message: S.optional(S.String)}) {}
export class TooManyTagsException extends S.Class<TooManyTagsException>("TooManyTagsException")({message: S.optional(S.String)}) {}

//# Errors
export class BadRequestExceptionError extends S.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException.fields) {};
export class ForbiddenExceptionError extends S.TaggedError<ForbiddenExceptionError>()("ForbiddenException", ForbiddenException.fields) {};
export class InternalServerErrorExceptionError extends S.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException.fields) {};
export class NotFoundExceptionError extends S.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException.fields) {};
export class ServiceUnavailableExceptionError extends S.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};
export class TooManyRequestsExceptionError extends S.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException.fields) {};
export class TooManyTagsExceptionError extends S.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-01-25", uri: "/v20190125/untag", method: "PUT", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "AppMesh.UntagResource" }, UntagResourceInput, UntagResourceOutput, [BadRequestExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, ServiceUnavailableExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-01-25", uri: "/v20190125/tags", method: "GET", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "AppMesh.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [BadRequestExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, ServiceUnavailableExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-01-25", uri: "/v20190125/tag", method: "PUT", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "AppMesh.TagResource" }, TagResourceInput, TagResourceOutput, [BadRequestExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError, ServiceUnavailableExceptionError, TooManyRequestsExceptionError, TooManyTagsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

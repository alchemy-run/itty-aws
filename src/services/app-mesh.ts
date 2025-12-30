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

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class InternalServerErrorException extends S.TaggedError<InternalServerErrorException>()("InternalServerErrorException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes specified tags from a resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-01-25", uri: "/v20190125/untag", method: "PUT", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "AppMesh.UntagResource" }, UntagResourceInput, UntagResourceOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the tags for an App Mesh resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-01-25", uri: "/v20190125/tags", method: "GET", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "AppMesh.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the specified tags to a resource with the specified `resourceArn`.
 * If existing tags on a resource aren't specified in the request parameters, they aren't
 * changed. When a resource is deleted, the tags associated with that resource are also
 * deleted.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-01-25", uri: "/v20190125/tag", method: "PUT", sdkId: "App Mesh", sigV4ServiceName: "appmesh", name: "AppMesh.TagResource" }, TagResourceInput, TagResourceOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, TooManyTagsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

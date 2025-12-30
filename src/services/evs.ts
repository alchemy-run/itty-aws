import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const RequestTagMap = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: RequestTagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export const ResponseTagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(ResponseTagMap)}) {}

//# Errors
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String}) {};
export class TagPolicyException extends S.TaggedError<TagPolicyException>()("TagPolicyException", {}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {message: S.String}) {};

//# Operations
/**
 * Lists the tags for an Amazon EVS resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-27", uri: "/", method: "POST", sdkId: "evs", sigV4ServiceName: "evs", name: "AmazonElasticVMwareService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes specified tags from an Amazon EVS resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-27", uri: "/", method: "POST", sdkId: "evs", sigV4ServiceName: "evs", name: "AmazonElasticVMwareService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundException, TagPolicyException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the specified tags to an Amazon EVS resource with the specified `resourceArn`. If existing tags on a resource are not specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted. Tags that you create for Amazon EVS resources don't propagate to any other resources associated with the environment. For example, if you tag an environment with this operation, that tag doesn't automatically propagate to the VLAN subnets and hosts associated with the environment.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-27", uri: "/", method: "POST", sdkId: "evs", sigV4ServiceName: "evs", name: "AmazonElasticVMwareService.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundException, ServiceQuotaExceededException, TagPolicyException, TooManyTagsException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

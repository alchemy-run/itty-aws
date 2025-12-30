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
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String, resourceId: S.String, resourceType: S.String}) {}
export const ResponseTagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(ResponseTagMap)}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: S.String}) {}
export class TagPolicyException extends S.Class<TagPolicyException>("TagPolicyException")({message: S.String}) {}
export class TooManyTagsException extends S.Class<TooManyTagsException>("TooManyTagsException")({message: S.String}) {}

//# Errors
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};
export class TagPolicyExceptionError extends S.TaggedError<TagPolicyExceptionError>()("TagPolicyException", TagPolicyException.fields) {};
export class TooManyTagsExceptionError extends S.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-27", uri: "/", method: "POST", sdkId: "evs", sigV4ServiceName: "evs", name: "AmazonElasticVMwareService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-27", uri: "/", method: "POST", sdkId: "evs", sigV4ServiceName: "evs", name: "AmazonElasticVMwareService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError, TagPolicyExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-27", uri: "/", method: "POST", sdkId: "evs", sigV4ServiceName: "evs", name: "AmazonElasticVMwareService.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, TagPolicyExceptionError, TooManyTagsExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

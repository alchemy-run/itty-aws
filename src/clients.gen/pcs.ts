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
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String, serviceCode: S.String, resourceId: S.optional(S.String), resourceType: S.optional(S.String), quotaCode: S.optional(S.String)}) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-02-10", uri: "/", method: "POST", sdkId: "PCS", sigV4ServiceName: "pcs", name: "AWSParallelComputingService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-02-10", uri: "/", method: "POST", sdkId: "PCS", sigV4ServiceName: "pcs", name: "AWSParallelComputingService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-02-10", uri: "/", method: "POST", sdkId: "PCS", sigV4ServiceName: "pcs", name: "AWSParallelComputingService.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundException, ServiceQuotaExceededException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

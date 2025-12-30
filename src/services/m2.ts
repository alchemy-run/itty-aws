import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class GetSignedBluinsightsUrlResponse extends S.Class<GetSignedBluinsightsUrlResponse>("GetSignedBluinsightsUrlResponse")({signedBiUrl: S.String}) {}
export class ListEngineVersionsRequest extends S.Class<ListEngineVersionsRequest>("ListEngineVersionsRequest")({engineType: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: TagMap}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class EngineVersionsSummary extends S.Class<EngineVersionsSummary>("EngineVersionsSummary")({engineType: S.String, engineVersion: S.String}) {}
export const EngineVersionsSummaryList = S.Array(EngineVersionsSummary);
export class ListEngineVersionsResponse extends S.Class<ListEngineVersionsResponse>("ListEngineVersionsResponse")({engineVersions: EngineVersionsSummaryList, nextToken: S.optional(S.String)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String, resourceId: S.optional(S.String), resourceType: S.optional(S.String), serviceCode: S.optional(S.String), quotaCode: S.optional(S.String)}) {};

//# Operations
/**
 * Gets a single sign-on URL that can be used to connect to AWS Blu Insights.
 */export const getSignedBluinsightsUrl = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-28", uri: "/signed-bi-url", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.GetSignedBluinsightsUrl" }, S.Struct({}), GetSignedBluinsightsUrlResponse, [AccessDeniedException, InternalServerException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the available engine versions.
 */export const listEngineVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-28", uri: "/engine-versions", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.ListEngineVersions" }, ListEngineVersionsRequest, ListEngineVersionsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags for the specified resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-28", uri: "/tags/{resourceArn}", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more tags to the specified resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-28", uri: "/tags/{resourceArn}", method: "POST", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more tags from the specified resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-28", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

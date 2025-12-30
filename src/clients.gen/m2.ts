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
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: TagMap}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String, retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class EngineVersionsSummary extends S.Class<EngineVersionsSummary>("EngineVersionsSummary")({engineType: S.String, engineVersion: S.String}) {}
export const EngineVersionsSummaryList = S.Array(EngineVersionsSummary);
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String), retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class ListEngineVersionsResponse extends S.Class<ListEngineVersionsResponse>("ListEngineVersionsResponse")({engineVersions: EngineVersionsSummaryList, nextToken: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String, resourceId: S.optional(S.String), resourceType: S.optional(S.String)}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: S.String, resourceId: S.optional(S.String), resourceType: S.optional(S.String), serviceCode: S.optional(S.String), quotaCode: S.optional(S.String)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String, reason: S.optional(S.String), fieldList: S.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const getSignedBluinsightsUrl = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-28", uri: "/signed-bi-url", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.GetSignedBluinsightsUrl" }, S.Struct({}), GetSignedBluinsightsUrlResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listEngineVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-28", uri: "/engine-versions", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.ListEngineVersions" }, ListEngineVersionsRequest, ListEngineVersionsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-28", uri: "/tags/{resourceArn}", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-28", uri: "/tags/{resourceArn}", method: "POST", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-28", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

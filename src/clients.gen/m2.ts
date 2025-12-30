import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class GetSignedBluinsightsUrlResponse extends Schema.Class<GetSignedBluinsightsUrlResponse>("GetSignedBluinsightsUrlResponse")({signedBiUrl: Schema.String}) {}
export class ListEngineVersionsRequest extends Schema.Class<ListEngineVersionsRequest>("ListEngineVersionsRequest")({engineType: Schema.optional(Schema.String), nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: TagMap}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: TagMap}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class EngineVersionsSummary extends Schema.Class<EngineVersionsSummary>("EngineVersionsSummary")({engineType: Schema.String, engineVersion: Schema.String}) {}
export const EngineVersionsSummaryList = Schema.Array(EngineVersionsSummary);
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class ListEngineVersionsResponse extends Schema.Class<ListEngineVersionsResponse>("ListEngineVersionsResponse")({engineVersions: EngineVersionsSummaryList, nextToken: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String, resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String)}) {}
export class ServiceQuotaExceededException extends Schema.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: Schema.String, resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String), serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String)}) {}
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String, reason: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const getSignedBluinsightsUrl = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-28", uri: "/signed-bi-url", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.GetSignedBluinsightsUrl" }, Schema.Struct({}), GetSignedBluinsightsUrlResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listEngineVersions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-28", uri: "/engine-versions", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.ListEngineVersions" }, ListEngineVersionsRequest, ListEngineVersionsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-28", uri: "/tags/{resourceArn}", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-28", uri: "/tags/{resourceArn}", method: "POST", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-28", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

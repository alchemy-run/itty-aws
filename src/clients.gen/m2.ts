import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const GetSignedBluinsightsUrlResponse = Schema.Struct({signedBiUrl: Schema.String});
export const ListEngineVersionsRequest = Schema.Struct({engineType: Schema.optional(Schema.String), nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number)});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: TagMap});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const TagResourceResponse = Schema.Struct({});
export const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const EngineVersionsSummary = Schema.Struct({engineType: Schema.String, engineVersion: Schema.String});
export const EngineVersionsSummaryList = Schema.Array(EngineVersionsSummary);
export const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ListEngineVersionsResponse = Schema.Struct({engineVersions: EngineVersionsSummaryList, nextToken: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String)});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.String, resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String), serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String)});
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};

//# Operations
export const getSignedBluinsightsUrl = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-28", uri: "/signed-bi-url", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.GetSignedBluinsightsUrl" }, Schema.Struct({}), GetSignedBluinsightsUrlResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listEngineVersions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-28", uri: "/engine-versions", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.ListEngineVersions" }, ListEngineVersionsRequest, ListEngineVersionsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-28", uri: "/tags/{resourceArn}", method: "GET", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-28", uri: "/tags/{resourceArn}", method: "POST", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-28", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "m2", sigV4ServiceName: "m2", name: "AwsSupernovaControlPlaneService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

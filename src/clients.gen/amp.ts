import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class GetDefaultScraperConfigurationRequest extends Schema.Class<GetDefaultScraperConfigurationRequest>("GetDefaultScraperConfigurationRequest")({}) {}
export const TagKeys = Schema.Array(Schema.String);
export class GetDefaultScraperConfigurationResponse extends Schema.Class<GetDefaultScraperConfigurationResponse>("GetDefaultScraperConfigurationResponse")({configuration: StreamBody()}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagMap)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: TagMap}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String}) {}
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-08-01", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "amp", sigV4ServiceName: "aps", name: "AmazonPrometheusService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getDefaultScraperConfiguration = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-08-01", uri: "/scraperconfiguration", method: "GET", sdkId: "amp", sigV4ServiceName: "aps", name: "AmazonPrometheusService.GetDefaultScraperConfiguration" }, GetDefaultScraperConfigurationRequest, GetDefaultScraperConfigurationResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-08-01", uri: "/tags/{resourceArn}", method: "GET", sdkId: "amp", sigV4ServiceName: "aps", name: "AmazonPrometheusService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-08-01", uri: "/tags/{resourceArn}", method: "POST", sdkId: "amp", sigV4ServiceName: "aps", name: "AmazonPrometheusService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

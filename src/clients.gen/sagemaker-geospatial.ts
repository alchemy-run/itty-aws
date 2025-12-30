import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: Schema.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: Schema.optional(Tags)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: Schema.String, Tags: Tags}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({Message: Schema.String}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({Message: Schema.String, ResourceId: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.String, ResourceId: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.String, ResourceId: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.String, ResourceId: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-05-27", uri: "/tags/{ResourceArn}", method: "PUT", sdkId: "SageMaker Geospatial", sigV4ServiceName: "sagemaker-geospatial", name: "SageMakerGeospatial.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-05-27", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "SageMaker Geospatial", sigV4ServiceName: "sagemaker-geospatial", name: "SageMakerGeospatial.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-05-27", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "SageMaker Geospatial", sigV4ServiceName: "sagemaker-geospatial", name: "SageMakerGeospatial.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

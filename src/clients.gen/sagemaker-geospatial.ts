import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(Tags)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({Message: S.String}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({Message: S.String, ResourceId: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: S.String, ResourceId: S.optional(S.String)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({Message: S.String, ResourceId: S.optional(S.String)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({Message: S.String, ResourceId: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-27", uri: "/tags/{ResourceArn}", method: "PUT", sdkId: "SageMaker Geospatial", sigV4ServiceName: "sagemaker-geospatial", name: "SageMakerGeospatial.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-27", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "SageMaker Geospatial", sigV4ServiceName: "sagemaker-geospatial", name: "SageMakerGeospatial.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-27", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "SageMaker Geospatial", sigV4ServiceName: "sagemaker-geospatial", name: "SageMakerGeospatial.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

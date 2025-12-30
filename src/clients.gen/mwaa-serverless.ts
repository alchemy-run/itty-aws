import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(Tags)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({Message: S.String}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({Message: S.String, RetryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class OperationTimeoutException extends S.Class<OperationTimeoutException>("OperationTimeoutException")({Message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: S.String, ResourceId: S.String, ResourceType: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({Message: S.String, ServiceCode: S.String, QuotaCode: S.String, RetryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({Name: S.String, Message: S.String}) {}
export const ValidationExceptionFields = S.Array(ValidationExceptionField);
export class ValidationException extends S.Class<ValidationException>("ValidationException")({Message: S.String, Reason: S.String, FieldList: S.optional(ValidationExceptionFields)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class OperationTimeoutExceptionError extends S.TaggedError<OperationTimeoutExceptionError>()("OperationTimeoutException", OperationTimeoutException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-07-26", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "MWAA Serverless", sigV4ServiceName: "airflow-serverless", name: "AmazonMWAAServerless.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, OperationTimeoutExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-07-26", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MWAA Serverless", sigV4ServiceName: "airflow-serverless", name: "AmazonMWAAServerless.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, OperationTimeoutExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-07-26", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MWAA Serverless", sigV4ServiceName: "airflow-serverless", name: "AmazonMWAAServerless.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, OperationTimeoutExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

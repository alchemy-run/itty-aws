import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class DeleteS3AccessPolicyRequest extends Schema.Class<DeleteS3AccessPolicyRequest>("DeleteS3AccessPolicyRequest")({s3AccessPointArn: Schema.String}) {}
export class DeleteS3AccessPolicyResponse extends Schema.Class<DeleteS3AccessPolicyResponse>("DeleteS3AccessPolicyResponse")({}) {}
export class GetS3AccessPolicyRequest extends Schema.Class<GetS3AccessPolicyRequest>("GetS3AccessPolicyRequest")({s3AccessPointArn: Schema.String}) {}
export class PutS3AccessPolicyRequest extends Schema.Class<PutS3AccessPolicyRequest>("PutS3AccessPolicyRequest")({s3AccessPointArn: Schema.String, s3AccessPolicy: Schema.String}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class GetS3AccessPolicyResponse extends Schema.Class<GetS3AccessPolicyResponse>("GetS3AccessPolicyResponse")({s3AccessPointArn: Schema.optional(Schema.String), storeId: Schema.optional(Schema.String), storeType: Schema.optional(Schema.String), updateTime: Schema.optional(Schema.Date), s3AccessPolicy: Schema.String}) {}
export class PutS3AccessPolicyResponse extends Schema.Class<PutS3AccessPolicyResponse>("PutS3AccessPolicyResponse")({s3AccessPointArn: Schema.optional(Schema.String), storeId: Schema.optional(Schema.String), storeType: Schema.optional(Schema.String)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String}) {}
export class NotSupportedOperationException extends Schema.Class<NotSupportedOperationException>("NotSupportedOperationException")({message: Schema.String}) {}
export class RequestTimeoutException extends Schema.Class<RequestTimeoutException>("RequestTimeoutException")({message: Schema.String}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String}) {}
export class ServiceQuotaExceededException extends Schema.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: Schema.String}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class NotSupportedOperationExceptionError extends Schema.TaggedError<NotSupportedOperationExceptionError>()("NotSupportedOperationException", NotSupportedOperationException.fields) {};
export class RequestTimeoutExceptionError extends Schema.TaggedError<RequestTimeoutExceptionError>()("RequestTimeoutException", RequestTimeoutException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const getS3AccessPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-28", uri: "/s3accesspolicy/{s3AccessPointArn}", method: "GET", sdkId: "Omics", sigV4ServiceName: "omics", name: "Omics.GetS3AccessPolicy" }, GetS3AccessPolicyRequest, GetS3AccessPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, NotSupportedOperationExceptionError, RequestTimeoutExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putS3AccessPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-28", uri: "/s3accesspolicy/{s3AccessPointArn}", method: "PUT", sdkId: "Omics", sigV4ServiceName: "omics", name: "Omics.PutS3AccessPolicy" }, PutS3AccessPolicyRequest, PutS3AccessPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, NotSupportedOperationExceptionError, RequestTimeoutExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteS3AccessPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-28", uri: "/s3accesspolicy/{s3AccessPointArn}", method: "DELETE", sdkId: "Omics", sigV4ServiceName: "omics", name: "Omics.DeleteS3AccessPolicy" }, DeleteS3AccessPolicyRequest, DeleteS3AccessPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, NotSupportedOperationExceptionError, RequestTimeoutExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

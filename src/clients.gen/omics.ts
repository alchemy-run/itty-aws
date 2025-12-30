import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteS3AccessPolicyRequest extends S.Class<DeleteS3AccessPolicyRequest>("DeleteS3AccessPolicyRequest")({s3AccessPointArn: S.String}) {}
export class DeleteS3AccessPolicyResponse extends S.Class<DeleteS3AccessPolicyResponse>("DeleteS3AccessPolicyResponse")({}) {}
export class GetS3AccessPolicyRequest extends S.Class<GetS3AccessPolicyRequest>("GetS3AccessPolicyRequest")({s3AccessPointArn: S.String}) {}
export class PutS3AccessPolicyRequest extends S.Class<PutS3AccessPolicyRequest>("PutS3AccessPolicyRequest")({s3AccessPointArn: S.String, s3AccessPolicy: S.String}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class GetS3AccessPolicyResponse extends S.Class<GetS3AccessPolicyResponse>("GetS3AccessPolicyResponse")({s3AccessPointArn: S.optional(S.String), storeId: S.optional(S.String), storeType: S.optional(S.String), updateTime: S.optional(S.Date), s3AccessPolicy: S.String}) {}
export class PutS3AccessPolicyResponse extends S.Class<PutS3AccessPolicyResponse>("PutS3AccessPolicyResponse")({s3AccessPointArn: S.optional(S.String), storeId: S.optional(S.String), storeType: S.optional(S.String)}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String}) {}
export class NotSupportedOperationException extends S.Class<NotSupportedOperationException>("NotSupportedOperationException")({message: S.String}) {}
export class RequestTimeoutException extends S.Class<RequestTimeoutException>("RequestTimeoutException")({message: S.String}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class NotSupportedOperationExceptionError extends S.TaggedError<NotSupportedOperationExceptionError>()("NotSupportedOperationException", NotSupportedOperationException.fields) {};
export class RequestTimeoutExceptionError extends S.TaggedError<RequestTimeoutExceptionError>()("RequestTimeoutException", RequestTimeoutException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const getS3AccessPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/s3accesspolicy/{s3AccessPointArn}", method: "GET", sdkId: "Omics", sigV4ServiceName: "omics", name: "Omics.GetS3AccessPolicy" }, GetS3AccessPolicyRequest, GetS3AccessPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, NotSupportedOperationExceptionError, RequestTimeoutExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putS3AccessPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/s3accesspolicy/{s3AccessPointArn}", method: "PUT", sdkId: "Omics", sigV4ServiceName: "omics", name: "Omics.PutS3AccessPolicy" }, PutS3AccessPolicyRequest, PutS3AccessPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, NotSupportedOperationExceptionError, RequestTimeoutExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteS3AccessPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/s3accesspolicy/{s3AccessPointArn}", method: "DELETE", sdkId: "Omics", sigV4ServiceName: "omics", name: "Omics.DeleteS3AccessPolicy" }, DeleteS3AccessPolicyRequest, DeleteS3AccessPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, NotSupportedOperationExceptionError, RequestTimeoutExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

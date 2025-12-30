import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const DeleteS3AccessPolicyRequest = Schema.Struct({s3AccessPointArn: Schema.String});
export const DeleteS3AccessPolicyResponse = Schema.Struct({});
export const GetS3AccessPolicyRequest = Schema.Struct({s3AccessPointArn: Schema.String});
export const PutS3AccessPolicyRequest = Schema.Struct({s3AccessPointArn: Schema.String, s3AccessPolicy: Schema.String});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const GetS3AccessPolicyResponse = Schema.Struct({s3AccessPointArn: Schema.optional(Schema.String), storeId: Schema.optional(Schema.String), storeType: Schema.optional(Schema.String), updateTime: Schema.optional(Schema.Date), s3AccessPolicy: Schema.String});
export const PutS3AccessPolicyResponse = Schema.Struct({s3AccessPointArn: Schema.optional(Schema.String), storeId: Schema.optional(Schema.String), storeType: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({message: Schema.String});
export const NotSupportedOperationException = Schema.Struct({message: Schema.String});
export const RequestTimeoutException = Schema.Struct({message: Schema.String});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.String});
export const ThrottlingException = Schema.Struct({message: Schema.String});
export const ValidationException = Schema.Struct({message: Schema.String});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class NotSupportedOperationExceptionError extends Schema.TaggedError<NotSupportedOperationExceptionError>()("NotSupportedOperationException", NotSupportedOperationException) {};
export class RequestTimeoutExceptionError extends Schema.TaggedError<RequestTimeoutExceptionError>()("RequestTimeoutException", RequestTimeoutException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const getS3AccessPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-28", uri: "/s3accesspolicy/{s3AccessPointArn}", method: "GET", sdkId: "Omics", sigV4ServiceName: "omics", name: "Omics.GetS3AccessPolicy" }, GetS3AccessPolicyRequest, GetS3AccessPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, NotSupportedOperationExceptionError, RequestTimeoutExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putS3AccessPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-28", uri: "/s3accesspolicy/{s3AccessPointArn}", method: "PUT", sdkId: "Omics", sigV4ServiceName: "omics", name: "Omics.PutS3AccessPolicy" }, PutS3AccessPolicyRequest, PutS3AccessPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, NotSupportedOperationExceptionError, RequestTimeoutExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteS3AccessPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-28", uri: "/s3accesspolicy/{s3AccessPointArn}", method: "DELETE", sdkId: "Omics", sigV4ServiceName: "omics", name: "Omics.DeleteS3AccessPolicy" }, DeleteS3AccessPolicyRequest, DeleteS3AccessPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, NotSupportedOperationExceptionError, RequestTimeoutExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

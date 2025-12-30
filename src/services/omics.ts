import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteS3AccessPolicyRequest extends S.Class<DeleteS3AccessPolicyRequest>("DeleteS3AccessPolicyRequest")({s3AccessPointArn: S.String}) {}
export class DeleteS3AccessPolicyResponse extends S.Class<DeleteS3AccessPolicyResponse>("DeleteS3AccessPolicyResponse")({}) {}
export class GetS3AccessPolicyRequest extends S.Class<GetS3AccessPolicyRequest>("GetS3AccessPolicyRequest")({s3AccessPointArn: S.String}) {}
export class PutS3AccessPolicyRequest extends S.Class<PutS3AccessPolicyRequest>("PutS3AccessPolicyRequest")({s3AccessPointArn: S.String, s3AccessPolicy: S.String}) {}
export class GetS3AccessPolicyResponse extends S.Class<GetS3AccessPolicyResponse>("GetS3AccessPolicyResponse")({s3AccessPointArn: S.optional(S.String), storeId: S.optional(S.String), storeType: S.optional(S.String), updateTime: S.optional(S.Date), s3AccessPolicy: S.String}) {}
export class PutS3AccessPolicyResponse extends S.Class<PutS3AccessPolicyResponse>("PutS3AccessPolicyResponse")({s3AccessPointArn: S.optional(S.String), storeId: S.optional(S.String), storeType: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {message: S.String}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class NotSupportedOperationException extends S.TaggedError<NotSupportedOperationException>()("NotSupportedOperationException", {}) {};
export class RequestTimeoutException extends S.TaggedError<RequestTimeoutException>()("RequestTimeoutException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * Retrieves details about an access policy on a given store.
 */export const getS3AccessPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/s3accesspolicy/{s3AccessPointArn}", method: "GET", sdkId: "Omics", sigV4ServiceName: "omics", name: "Omics.GetS3AccessPolicy" }, GetS3AccessPolicyRequest, GetS3AccessPolicyResponse, [AccessDeniedException, InternalServerException, NotSupportedOperationException, RequestTimeoutException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds an access policy to the specified store.
 */export const putS3AccessPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/s3accesspolicy/{s3AccessPointArn}", method: "PUT", sdkId: "Omics", sigV4ServiceName: "omics", name: "Omics.PutS3AccessPolicy" }, PutS3AccessPolicyRequest, PutS3AccessPolicyResponse, [AccessDeniedException, InternalServerException, NotSupportedOperationException, RequestTimeoutException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an access policy for the specified store.
 */export const deleteS3AccessPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/s3accesspolicy/{s3AccessPointArn}", method: "DELETE", sdkId: "Omics", sigV4ServiceName: "omics", name: "Omics.DeleteS3AccessPolicy" }, DeleteS3AccessPolicyRequest, DeleteS3AccessPolicyResponse, [AccessDeniedException, InternalServerException, NotSupportedOperationException, RequestTimeoutException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

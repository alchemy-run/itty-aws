import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DisableControlInput extends S.Class<DisableControlInput>("DisableControlInput")({controlIdentifier: S.optional(S.String), targetIdentifier: S.optional(S.String), enabledControlIdentifier: S.optional(S.String)}) {}
export class DisableControlOutput extends S.Class<DisableControlOutput>("DisableControlOutput")({operationIdentifier: S.String}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class ConflictException extends S.Class<ConflictException>("ConflictException")({message: S.String}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String), retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const disableControl = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/disable-control", method: "POST", sdkId: "ControlTower", sigV4ServiceName: "controltower", name: "AWSControlTowerApis.DisableControl" }, DisableControlInput, DisableControlOutput, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

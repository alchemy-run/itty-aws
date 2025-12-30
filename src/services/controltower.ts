import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DisableControlInput extends S.Class<DisableControlInput>("DisableControlInput")({controlIdentifier: S.optional(S.String), targetIdentifier: S.optional(S.String), enabledControlIdentifier: S.optional(S.String)}) {}
export class DisableControlOutput extends S.Class<DisableControlOutput>("DisableControlOutput")({operationIdentifier: S.String}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {message: S.String}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {message: S.String}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {message: S.String}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {message: S.String}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {message: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String), retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {message: S.String}) {};

//# Operations
/**
 * This API call turns off a control. It starts an asynchronous operation that deletes Amazon Web Services resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify. For usage examples, see the *Controls Reference Guide* .
 */export const disableControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/disable-control", sdkId: "ControlTower", sigV4ServiceName: "controltower", name: "AWSControlTowerApis.DisableControl" }, DisableControlInput, DisableControlOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

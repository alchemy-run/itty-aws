import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class ScanSbomRequest extends S.Class<ScanSbomRequest>("ScanSbomRequest")({sbom: S.Any, outputFormat: S.optional(S.String)}) {}
export class ScanSbomResponse extends S.Class<ScanSbomResponse>("ScanSbomResponse")({sbom: S.optional(S.Any)}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String, reason: S.String, retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String, retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFields = S.Array(ValidationExceptionField);
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String, reason: S.String, fields: S.optional(ValidationExceptionFields)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const scanSbom = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-08-08", uri: "/scan/sbom", method: "POST", sdkId: "Inspector Scan", sigV4ServiceName: "inspector-scan", name: "InspectorScan.ScanSbom" }, ScanSbomRequest, ScanSbomResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

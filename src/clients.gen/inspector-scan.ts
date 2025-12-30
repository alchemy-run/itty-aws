import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class ScanSbomRequest extends Schema.Class<ScanSbomRequest>("ScanSbomRequest")({sbom: Schema.JsonValue, outputFormat: Schema.optional(Schema.String)}) {}
export class ScanSbomResponse extends Schema.Class<ScanSbomResponse>("ScanSbomResponse")({sbom: Schema.optional(Schema.JsonValue)}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String, reason: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFields = Schema.Array(ValidationExceptionField);
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String, reason: Schema.String, fields: Schema.optional(ValidationExceptionFields)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const scanSbom = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-08-08", uri: "/scan/sbom", method: "POST", sdkId: "Inspector Scan", sigV4ServiceName: "inspector-scan", name: "InspectorScan.ScanSbom" }, ScanSbomRequest, ScanSbomResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

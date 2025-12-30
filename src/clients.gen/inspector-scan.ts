import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const ScanSbomRequest = Schema.Struct({sbom: Schema.JsonValue, outputFormat: Schema.optional(Schema.String)});
export const ScanSbomResponse = Schema.Struct({sbom: Schema.optional(Schema.JsonValue)});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const InternalServerException = Schema.Struct({message: Schema.String, reason: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ThrottlingException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const ValidationExceptionFields = Schema.Array(ValidationExceptionField);
export const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.String, fields: Schema.optional(ValidationExceptionFields)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const scanSbom = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-08-08", uri: "/scan/sbom", method: "POST", sdkId: "Inspector Scan", sigV4ServiceName: "inspector-scan", name: "InspectorScan.ScanSbom" }, ScanSbomRequest, ScanSbomResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

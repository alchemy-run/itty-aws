import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const ValidationExceptionFields = Schema.Array(ValidationExceptionField);
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.String, fields: Schema.optional(ValidationExceptionFields)});
export const ThrottlingException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const InternalServerException = Schema.Struct({message: Schema.String, reason: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const ScanSbomResponse = Schema.Struct({sbom: Schema.optional(Schema.JsonValue)});
export const ScanSbomRequest = Schema.Struct({sbom: Schema.JsonValue, outputFormat: Schema.optional(Schema.String)});
export const ScanSbom = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/scan/sbom", method: "POST", sdkId: "Inspector Scan", sigV4ServiceName: "inspector-scan", name: "InspectorScan.ScanSbom" }, ScanSbomRequest, ScanSbomResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

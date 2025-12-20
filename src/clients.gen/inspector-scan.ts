import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const ScanSbomRequest = Schema.Struct({sbom: Schema.JsonValue, outputFormat: Schema.optional(Schema.String)})
const ScanSbomResponse = Schema.Struct({sbom: Schema.optional(Schema.JsonValue)})
const AccessDeniedException = Schema.Struct({message: Schema.String})
const InternalServerException = Schema.Struct({message: Schema.String, reason: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
const ThrottlingException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String})
const ValidationExceptionFields = Schema.Array(ValidationExceptionField)
const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.String, fields: Schema.optional(ValidationExceptionFields)})
export const ScanSbom = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/scan/sbom", method: "POST", sdkId: "Inspector Scan", sigV4ServiceName: "inspector-scan", name: "ScanSbom" }, ScanSbomRequest, ScanSbomResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

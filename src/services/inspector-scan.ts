import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class ScanSbomRequest extends S.Class<ScanSbomRequest>("ScanSbomRequest")({sbom: S.Any, outputFormat: S.optional(S.String)}) {}
export class ScanSbomResponse extends S.Class<ScanSbomResponse>("ScanSbomResponse")({sbom: S.optional(S.Any)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFields = S.Array(ValidationExceptionField);

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {message: S.String}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {message: S.String, reason: S.String, retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {message: S.String, retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {message: S.String, reason: S.String, fields: S.optional(ValidationExceptionFields)}) {};

//# Operations
/**
 * Scans a provided CycloneDX 1.5 SBOM and reports on any vulnerabilities discovered in that SBOM. You can generate compatible SBOMs for your resources using the Amazon Inspector SBOM generator.
 * 
 * The output of this action reports NVD and CVSS scores when NVD and CVSS scores are available. Because the output reports both scores, you might notice a discrepency between them. However, you can triage the severity of either score depending on the vendor of your choosing.
 */export const scanSbom = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-08-08", uri: "/scan/sbom", sdkId: "Inspector Scan", sigV4ServiceName: "inspector-scan", name: "InspectorScan.ScanSbom" }, ScanSbomRequest, ScanSbomResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

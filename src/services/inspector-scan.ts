import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class InspectorScan extends AWSServiceClient {
  scanSbom(
    input: ScanSbomRequest,
  ): Effect.Effect<
    ScanSbomResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly reason: InternalServerExceptionReason;
  readonly retryAfterSeconds?: number;
}> {}
export type InternalServerExceptionReason = "FAILED_TO_GENERATE_SBOM" | "OTHER";
export type OutputFormat = "CYCLONE_DX_1_5" | "INSPECTOR";
export type Sbom = unknown;

export interface ScanSbomRequest {
  sbom: unknown;
  outputFormat?: OutputFormat;
}
export interface ScanSbomResponse {
  sbom?: unknown;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: ValidationExceptionReason;
  readonly fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFields = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "UNSUPPORTED_SBOM_TYPE"
  | "OTHER";
export declare namespace ScanSbom {
  export type Input = ScanSbomRequest;
  export type Output = ScanSbomResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

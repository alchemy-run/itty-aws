import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class SSMGuiConnect extends AWSServiceClient {
  deleteConnectionRecordingPreferences(
    input: DeleteConnectionRecordingPreferencesRequest,
  ): Effect.Effect<
    DeleteConnectionRecordingPreferencesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getConnectionRecordingPreferences(input: {}): Effect.Effect<
    GetConnectionRecordingPreferencesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateConnectionRecordingPreferences(
    input: UpdateConnectionRecordingPreferencesRequest,
  ): Effect.Effect<
    UpdateConnectionRecordingPreferencesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class SsmGuiconnect extends SSMGuiConnect {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccountId = string;

export type BucketName = string;

export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export type ConnectionArn = string;

export interface ConnectionRecordingPreferences {
  RecordingDestinations: RecordingDestinations;
  KMSKeyArn: string;
}
export type ConnectionToken = string;

export interface DeleteConnectionRecordingPreferencesRequest {
  ClientToken?: string;
}
export interface DeleteConnectionRecordingPreferencesResponse {
  ClientToken?: string;
}
export type ErrorMessage = string;

export interface GetConnectionRecordingPreferencesResponse {
  ClientToken?: string;
  ConnectionRecordingPreferences?: ConnectionRecordingPreferences;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface RecordingDestinations {
  S3Buckets: Array<S3Bucket>;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export interface S3Bucket {
  BucketOwner: string;
  BucketName: string;
}
export type S3Buckets = Array<S3Bucket>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface UpdateConnectionRecordingPreferencesRequest {
  ConnectionRecordingPreferences: ConnectionRecordingPreferences;
  ClientToken?: string;
}
export interface UpdateConnectionRecordingPreferencesResponse {
  ClientToken?: string;
  ConnectionRecordingPreferences?: ConnectionRecordingPreferences;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export declare namespace DeleteConnectionRecordingPreferences {
  export type Input = DeleteConnectionRecordingPreferencesRequest;
  export type Output = DeleteConnectionRecordingPreferencesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConnectionRecordingPreferences {
  export type Input = {};
  export type Output = GetConnectionRecordingPreferencesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConnectionRecordingPreferences {
  export type Input = UpdateConnectionRecordingPreferencesRequest;
  export type Output = UpdateConnectionRecordingPreferencesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "SSM GuiConnect",
  version: "2021-05-01",
  protocol: "restJson1",
  operations: {
    DeleteConnectionRecordingPreferences:
      "POST /DeleteConnectionRecordingPreferences",
    GetConnectionRecordingPreferences:
      "POST /GetConnectionRecordingPreferences",
    UpdateConnectionRecordingPreferences:
      "POST /UpdateConnectionRecordingPreferences",
  },
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;

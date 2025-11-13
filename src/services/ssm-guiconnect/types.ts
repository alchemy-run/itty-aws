import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException
  | ValidationException;
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

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccountId = string;

export type BucketName = string;

export type ClientToken = string;

export declare class ConflictException extends Data.TaggedError(
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
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface RecordingDestinations {
  S3Buckets: Array<S3Bucket>;
}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export interface S3Bucket {
  BucketOwner: string;
  BucketName: string;
}
export type S3Buckets = Array<S3Bucket>;
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export declare class ThrottlingException extends Data.TaggedError(
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
export declare class ValidationException extends Data.TaggedError(
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

export type SSMGuiConnectErrors =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;

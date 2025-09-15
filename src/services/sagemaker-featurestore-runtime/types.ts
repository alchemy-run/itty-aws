import type { Effect, Data as EffectData } from "effect";
import type {
  AccessDeniedException,
  ExpiredTokenException,
  IncompleteSignature,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationException,
} from "../../error.ts";
type CommonAwsError =
  | AccessDeniedException
  | ExpiredTokenException
  | IncompleteSignature
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ThrottlingException
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationException
  | InternalFailure
  | ServiceUnavailable
  | ValidationError;
import { AWSServiceClient } from "../../client.ts";

export declare class SageMakerFeatureStoreRuntime extends AWSServiceClient {
  batchGetRecord(
    input: BatchGetRecordRequest,
  ): Effect.Effect<
    BatchGetRecordResponse,
    | AccessForbidden
    | InternalFailure
    | ServiceUnavailable
    | ValidationError
    | CommonAwsError
  >;
  deleteRecord(
    input: DeleteRecordRequest,
  ): Effect.Effect<
    {},
    | AccessForbidden
    | InternalFailure
    | ServiceUnavailable
    | ValidationError
    | CommonAwsError
  >;
  getRecord(
    input: GetRecordRequest,
  ): Effect.Effect<
    GetRecordResponse,
    | AccessForbidden
    | InternalFailure
    | ResourceNotFound
    | ServiceUnavailable
    | ValidationError
    | CommonAwsError
  >;
  putRecord(
    input: PutRecordRequest,
  ): Effect.Effect<
    {},
    | AccessForbidden
    | InternalFailure
    | ServiceUnavailable
    | ValidationError
    | CommonAwsError
  >;
}

export declare class SagemakerFeaturestoreRuntime extends SageMakerFeatureStoreRuntime {}

export declare class AccessForbidden extends EffectData.TaggedError(
  "AccessForbidden",
)<{
  readonly Message?: string;
}> {}
export interface BatchGetRecordError {
  FeatureGroupName: string;
  RecordIdentifierValueAsString: string;
  ErrorCode: string;
  ErrorMessage: string;
}
export type BatchGetRecordErrors = Array<BatchGetRecordError>;
export interface BatchGetRecordIdentifier {
  FeatureGroupName: string;
  RecordIdentifiersValueAsString: Array<string>;
  FeatureNames?: Array<string>;
}
export type BatchGetRecordIdentifiers = Array<BatchGetRecordIdentifier>;
export interface BatchGetRecordRequest {
  Identifiers: Array<BatchGetRecordIdentifier>;
  ExpirationTimeResponse?: ExpirationTimeResponse;
}
export interface BatchGetRecordResponse {
  Records: Array<BatchGetRecordResultDetail>;
  Errors: Array<BatchGetRecordError>;
  UnprocessedIdentifiers: Array<BatchGetRecordIdentifier>;
}
export interface BatchGetRecordResultDetail {
  FeatureGroupName: string;
  RecordIdentifierValueAsString: string;
  Record: Array<FeatureValue>;
  ExpiresAt?: string;
}
export type BatchGetRecordResultDetails = Array<BatchGetRecordResultDetail>;
export interface DeleteRecordRequest {
  FeatureGroupName: string;
  RecordIdentifierValueAsString: string;
  EventTime: string;
  TargetStores?: Array<TargetStore>;
  DeletionMode?: DeletionMode;
}
export type DeletionMode = "SoftDelete" | "HardDelete";
export type ExpirationTimeResponse = "Enabled" | "Disabled";
export type ExpiresAt = string;

export type FeatureGroupNameOrArn = string;

export type FeatureName = string;

export type FeatureNames = Array<string>;
export interface FeatureValue {
  FeatureName: string;
  ValueAsString?: string;
  ValueAsStringList?: Array<string>;
}
export interface GetRecordRequest {
  FeatureGroupName: string;
  RecordIdentifierValueAsString: string;
  FeatureNames?: Array<string>;
  ExpirationTimeResponse?: ExpirationTimeResponse;
}
export interface GetRecordResponse {
  Record?: Array<FeatureValue>;
  ExpiresAt?: string;
}
export declare class InternalFailure extends EffectData.TaggedError(
  "InternalFailure",
)<{
  readonly Message?: string;
}> {}
export type Message = string;

export interface PutRecordRequest {
  FeatureGroupName: string;
  Record: Array<FeatureValue>;
  TargetStores?: Array<TargetStore>;
  TtlDuration?: TtlDuration;
}
export type SagemakerFeaturestoreRuntimeRecord = Array<FeatureValue>;
export type RecordIdentifiers = Array<string>;
export declare class ResourceNotFound extends EffectData.TaggedError(
  "ResourceNotFound",
)<{
  readonly Message?: string;
}> {}
export declare class ServiceUnavailable extends EffectData.TaggedError(
  "ServiceUnavailable",
)<{
  readonly Message?: string;
}> {}
export type TargetStore = "OnlineStore" | "OfflineStore";
export type TargetStores = Array<TargetStore>;
export interface TtlDuration {
  Unit: TtlDurationUnit;
  Value: number;
}
export type TtlDurationUnit =
  | "Seconds"
  | "Minutes"
  | "Hours"
  | "Days"
  | "Weeks";
export type TtlDurationValue = number;

export type UnprocessedIdentifiers = Array<BatchGetRecordIdentifier>;
export declare class ValidationError extends EffectData.TaggedError(
  "ValidationError",
)<{
  readonly Message?: string;
}> {}
export type ValueAsString = string;

export type ValueAsStringList = Array<string>;
export declare namespace BatchGetRecord {
  export type Input = BatchGetRecordRequest;
  export type Output = BatchGetRecordResponse;
  export type Error =
    | AccessForbidden
    | InternalFailure
    | ServiceUnavailable
    | ValidationError
    | CommonAwsError;
}

export declare namespace DeleteRecord {
  export type Input = DeleteRecordRequest;
  export type Output = {};
  export type Error =
    | AccessForbidden
    | InternalFailure
    | ServiceUnavailable
    | ValidationError
    | CommonAwsError;
}

export declare namespace GetRecord {
  export type Input = GetRecordRequest;
  export type Output = GetRecordResponse;
  export type Error =
    | AccessForbidden
    | InternalFailure
    | ResourceNotFound
    | ServiceUnavailable
    | ValidationError
    | CommonAwsError;
}

export declare namespace PutRecord {
  export type Input = PutRecordRequest;
  export type Output = {};
  export type Error =
    | AccessForbidden
    | InternalFailure
    | ServiceUnavailable
    | ValidationError
    | CommonAwsError;
}

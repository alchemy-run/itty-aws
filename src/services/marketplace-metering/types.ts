import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type {
  AccessDeniedException,
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
  ValidationException,
} from "../../error.ts";
type CommonAwsError =
  | AccessDeniedException
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
  | ValidationException
  | ExpiredTokenException
  | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class MarketplaceMetering extends AWSServiceClient {
  batchMeterUsage(
    input: BatchMeterUsageRequest,
  ): Effect.Effect<
    BatchMeterUsageResult,
    | DisabledApiException
    | InternalServiceErrorException
    | InvalidCustomerIdentifierException
    | InvalidProductCodeException
    | InvalidTagException
    | InvalidUsageAllocationsException
    | InvalidUsageDimensionException
    | ThrottlingException
    | TimestampOutOfBoundsException
    | CommonAwsError
  >;
  meterUsage(
    input: MeterUsageRequest,
  ): Effect.Effect<
    MeterUsageResult,
    | CustomerNotEntitledException
    | DuplicateRequestException
    | IdempotencyConflictException
    | InternalServiceErrorException
    | InvalidEndpointRegionException
    | InvalidProductCodeException
    | InvalidTagException
    | InvalidUsageAllocationsException
    | InvalidUsageDimensionException
    | ThrottlingException
    | TimestampOutOfBoundsException
    | CommonAwsError
  >;
  registerUsage(
    input: RegisterUsageRequest,
  ): Effect.Effect<
    RegisterUsageResult,
    | CustomerNotEntitledException
    | DisabledApiException
    | InternalServiceErrorException
    | InvalidProductCodeException
    | InvalidPublicKeyVersionException
    | InvalidRegionException
    | PlatformNotSupportedException
    | ThrottlingException
    | CommonAwsError
  >;
  resolveCustomer(
    input: ResolveCustomerRequest,
  ): Effect.Effect<
    ResolveCustomerResult,
    | DisabledApiException
    | ExpiredTokenException
    | InternalServiceErrorException
    | InvalidTokenException
    | ThrottlingException
    | CommonAwsError
  >;
}

export type AllocatedUsageQuantity = number;

export interface BatchMeterUsageRequest {
  UsageRecords: Array<UsageRecord>;
  ProductCode: string;
}
export interface BatchMeterUsageResult {
  Results?: Array<UsageRecordResult>;
  UnprocessedRecords?: Array<UsageRecord>;
}
export type MarketplaceMeteringBoolean = boolean;

export type ClientToken = string;

export type CustomerAWSAccountId = string;

export type CustomerIdentifier = string;

export declare class CustomerNotEntitledException extends Data.TaggedError(
  "CustomerNotEntitledException",
)<{
  readonly message?: string;
}> {}
export declare class DisabledApiException extends Data.TaggedError(
  "DisabledApiException",
)<{
  readonly message?: string;
}> {}
export declare class DuplicateRequestException extends Data.TaggedError(
  "DuplicateRequestException",
)<{
  readonly message?: string;
}> {}
export type errorMessage = string;

export declare class ExpiredTokenException extends Data.TaggedError(
  "ExpiredTokenException",
)<{
  readonly message?: string;
}> {}
export declare class IdempotencyConflictException extends Data.TaggedError(
  "IdempotencyConflictException",
)<{
  readonly message?: string;
}> {}
export declare class InternalServiceErrorException extends Data.TaggedError(
  "InternalServiceErrorException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidCustomerIdentifierException extends Data.TaggedError(
  "InvalidCustomerIdentifierException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidEndpointRegionException extends Data.TaggedError(
  "InvalidEndpointRegionException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidProductCodeException extends Data.TaggedError(
  "InvalidProductCodeException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPublicKeyVersionException extends Data.TaggedError(
  "InvalidPublicKeyVersionException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRegionException extends Data.TaggedError(
  "InvalidRegionException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTagException extends Data.TaggedError(
  "InvalidTagException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTokenException extends Data.TaggedError(
  "InvalidTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidUsageAllocationsException extends Data.TaggedError(
  "InvalidUsageAllocationsException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidUsageDimensionException extends Data.TaggedError(
  "InvalidUsageDimensionException",
)<{
  readonly message?: string;
}> {}
export interface MeterUsageRequest {
  ProductCode: string;
  Timestamp: Date | string;
  UsageDimension: string;
  UsageQuantity?: number;
  DryRun?: boolean;
  UsageAllocations?: Array<UsageAllocation>;
  ClientToken?: string;
}
export interface MeterUsageResult {
  MeteringRecordId?: string;
}
export type Nonce = string;

export type NonEmptyString = string;

export declare class PlatformNotSupportedException extends Data.TaggedError(
  "PlatformNotSupportedException",
)<{
  readonly message?: string;
}> {}
export type ProductCode = string;

export interface RegisterUsageRequest {
  ProductCode: string;
  PublicKeyVersion: number;
  Nonce?: string;
}
export interface RegisterUsageResult {
  PublicKeyRotationTimestamp?: Date | string;
  Signature?: string;
}
export interface ResolveCustomerRequest {
  RegistrationToken: string;
}
export interface ResolveCustomerResult {
  CustomerIdentifier?: string;
  ProductCode?: string;
  CustomerAWSAccountId?: string;
}
export type MarketplaceMeteringString = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagList = Array<Tag>;
export type TagValue = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Timestamp = Date | string;

export declare class TimestampOutOfBoundsException extends Data.TaggedError(
  "TimestampOutOfBoundsException",
)<{
  readonly message?: string;
}> {}
export interface UsageAllocation {
  AllocatedUsageQuantity: number;
  Tags?: Array<Tag>;
}
export type UsageAllocations = Array<UsageAllocation>;
export type UsageDimension = string;

export type UsageQuantity = number;

export interface UsageRecord {
  Timestamp: Date | string;
  CustomerIdentifier?: string;
  Dimension: string;
  Quantity?: number;
  UsageAllocations?: Array<UsageAllocation>;
  CustomerAWSAccountId?: string;
}
export type UsageRecordList = Array<UsageRecord>;
export interface UsageRecordResult {
  UsageRecord?: UsageRecord;
  MeteringRecordId?: string;
  Status?: UsageRecordResultStatus;
}
export type UsageRecordResultList = Array<UsageRecordResult>;
export type UsageRecordResultStatus =
  | "Success"
  | "CustomerNotSubscribed"
  | "DuplicateRecord";
export type VersionInteger = number;

export declare namespace BatchMeterUsage {
  export type Input = BatchMeterUsageRequest;
  export type Output = BatchMeterUsageResult;
  export type Error =
    | DisabledApiException
    | InternalServiceErrorException
    | InvalidCustomerIdentifierException
    | InvalidProductCodeException
    | InvalidTagException
    | InvalidUsageAllocationsException
    | InvalidUsageDimensionException
    | ThrottlingException
    | TimestampOutOfBoundsException
    | CommonAwsError;
}

export declare namespace MeterUsage {
  export type Input = MeterUsageRequest;
  export type Output = MeterUsageResult;
  export type Error =
    | CustomerNotEntitledException
    | DuplicateRequestException
    | IdempotencyConflictException
    | InternalServiceErrorException
    | InvalidEndpointRegionException
    | InvalidProductCodeException
    | InvalidTagException
    | InvalidUsageAllocationsException
    | InvalidUsageDimensionException
    | ThrottlingException
    | TimestampOutOfBoundsException
    | CommonAwsError;
}

export declare namespace RegisterUsage {
  export type Input = RegisterUsageRequest;
  export type Output = RegisterUsageResult;
  export type Error =
    | CustomerNotEntitledException
    | DisabledApiException
    | InternalServiceErrorException
    | InvalidProductCodeException
    | InvalidPublicKeyVersionException
    | InvalidRegionException
    | PlatformNotSupportedException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ResolveCustomer {
  export type Input = ResolveCustomerRequest;
  export type Output = ResolveCustomerResult;
  export type Error =
    | DisabledApiException
    | ExpiredTokenException
    | InternalServiceErrorException
    | InvalidTokenException
    | ThrottlingException
    | CommonAwsError;
}

export type MarketplaceMeteringErrors =
  | CustomerNotEntitledException
  | DisabledApiException
  | DuplicateRequestException
  | ExpiredTokenException
  | IdempotencyConflictException
  | InternalServiceErrorException
  | InvalidCustomerIdentifierException
  | InvalidEndpointRegionException
  | InvalidProductCodeException
  | InvalidPublicKeyVersionException
  | InvalidRegionException
  | InvalidTagException
  | InvalidTokenException
  | InvalidUsageAllocationsException
  | InvalidUsageDimensionException
  | PlatformNotSupportedException
  | ThrottlingException
  | TimestampOutOfBoundsException
  | CommonAwsError;

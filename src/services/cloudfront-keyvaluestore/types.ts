import type { Effect, Data as EffectData } from "effect";
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
  ThrottlingException,
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
  | ThrottlingException
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException;
import { AWSServiceClient } from "../../client.ts";

export declare class CloudFrontKeyValueStore extends AWSServiceClient {
  deleteKey(
    input: DeleteKeyRequest,
  ): Effect.Effect<
    DeleteKeyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  describeKeyValueStore(
    input: DescribeKeyValueStoreRequest,
  ): Effect.Effect<
    DescribeKeyValueStoreResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getKey(
    input: GetKeyRequest,
  ): Effect.Effect<
    GetKeyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listKeys(
    input: ListKeysRequest,
  ): Effect.Effect<
    ListKeysResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putKey(
    input: PutKeyRequest,
  ): Effect.Effect<
    PutKeyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  updateKeys(
    input: UpdateKeysRequest,
  ): Effect.Effect<
    UpdateKeysResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class CloudfrontKeyvaluestore extends CloudFrontKeyValueStore {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface DeleteKeyRequest {
  KvsARN: string;
  Key: string;
  IfMatch: string;
}
export interface DeleteKeyRequestListItem {
  Key: string;
}
export type DeleteKeyRequestsList = Array<DeleteKeyRequestListItem>;
export interface DeleteKeyResponse {
  ItemCount: number;
  TotalSizeInBytes: number;
  ETag: string;
}
export interface DescribeKeyValueStoreRequest {
  KvsARN: string;
}
export interface DescribeKeyValueStoreResponse {
  ItemCount: number;
  TotalSizeInBytes: number;
  KvsARN: string;
  Created: Date | string;
  ETag: string;
  LastModified?: Date | string;
  Status?: string;
  FailureReason?: string;
}
export type Etag = string;

export interface GetKeyRequest {
  KvsARN: string;
  Key: string;
}
export interface GetKeyResponse {
  Key: string;
  Value: string;
  ItemCount: number;
  TotalSizeInBytes: number;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type Key = string;

export type KvsARN = string;

export interface ListKeysRequest {
  KvsARN: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListKeysResponse {
  NextToken?: string;
  Items?: Array<ListKeysResponseListItem>;
}
export type ListKeysResponseList = Array<ListKeysResponseListItem>;
export interface ListKeysResponseListItem {
  Key: string;
  Value: string;
}
export interface PutKeyRequest {
  Key: string;
  Value: string;
  KvsARN: string;
  IfMatch: string;
}
export interface PutKeyRequestListItem {
  Key: string;
  Value: string;
}
export type PutKeyRequestsList = Array<PutKeyRequestListItem>;
export interface PutKeyResponse {
  ItemCount: number;
  TotalSizeInBytes: number;
  ETag: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export interface UpdateKeysRequest {
  KvsARN: string;
  IfMatch: string;
  Puts?: Array<PutKeyRequestListItem>;
  Deletes?: Array<DeleteKeyRequestListItem>;
}
export interface UpdateKeysResponse {
  ItemCount: number;
  TotalSizeInBytes: number;
  ETag: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type Value = string;

export declare namespace DeleteKey {
  export type Input = DeleteKeyRequest;
  export type Output = DeleteKeyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeKeyValueStore {
  export type Input = DescribeKeyValueStoreRequest;
  export type Output = DescribeKeyValueStoreResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetKey {
  export type Input = GetKeyRequest;
  export type Output = GetKeyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListKeys {
  export type Input = ListKeysRequest;
  export type Output = ListKeysResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutKey {
  export type Input = PutKeyRequest;
  export type Output = PutKeyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateKeys {
  export type Input = UpdateKeysRequest;
  export type Output = UpdateKeysResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

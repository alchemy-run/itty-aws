import type { Effect, Stream, Data as EffectData } from "effect";
import type { ResponseError } from "@effect/platform/HttpClientError";
import type { Buffer } from "node:buffer";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class MediaStoreData extends AWSServiceClient {
  deleteObject(
    input: DeleteObjectRequest,
  ): Effect.Effect<
    DeleteObjectResponse,
    | ContainerNotFoundException
    | InternalServerError
    | ObjectNotFoundException
    | CommonAwsError
  >;
  describeObject(
    input: DescribeObjectRequest,
  ): Effect.Effect<
    DescribeObjectResponse,
    | ContainerNotFoundException
    | InternalServerError
    | ObjectNotFoundException
    | CommonAwsError
  >;
  getObject(
    input: GetObjectRequest,
  ): Effect.Effect<
    GetObjectResponse,
    | ContainerNotFoundException
    | InternalServerError
    | ObjectNotFoundException
    | RequestedRangeNotSatisfiableException
    | CommonAwsError
  >;
  listItems(
    input: ListItemsRequest,
  ): Effect.Effect<
    ListItemsResponse,
    ContainerNotFoundException | InternalServerError | CommonAwsError
  >;
  putObject(
    input: PutObjectRequest,
  ): Effect.Effect<
    PutObjectResponse,
    ContainerNotFoundException | InternalServerError | CommonAwsError
  >;
}

export declare class MediastoreData extends MediaStoreData {}

export declare class ContainerNotFoundException extends EffectData.TaggedError(
  "ContainerNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ContentRangePattern = string;

export type ContentType = string;

export interface DeleteObjectRequest {
  Path: string;
}
export interface DeleteObjectResponse {}
export interface DescribeObjectRequest {
  Path: string;
}
export interface DescribeObjectResponse {
  ETag?: string;
  ContentType?: string;
  ContentLength?: number;
  CacheControl?: string;
  LastModified?: Date | string;
}
export type ErrorMessage = string;

export type ETag = string;

export interface GetObjectRequest {
  Path: string;
  Range?: string;
}
export interface GetObjectResponse {
  Body?: Stream.Stream<Uint8Array, ResponseError>;
  CacheControl?: string;
  ContentRange?: string;
  ContentLength?: number;
  ContentType?: string;
  ETag?: string;
  LastModified?: Date | string;
  StatusCode: number;
}
export declare class InternalServerError extends EffectData.TaggedError(
  "InternalServerError",
)<{
  readonly Message?: string;
}> {}
export interface Item {
  Name?: string;
  Type?: ItemType;
  ETag?: string;
  LastModified?: Date | string;
  ContentType?: string;
  ContentLength?: number;
}
export type ItemList = Array<Item>;
export type ItemName = string;

export type ItemType = "OBJECT" | "FOLDER";
export interface ListItemsRequest {
  Path?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListItemsResponse {
  Items?: Array<Item>;
  NextToken?: string;
}
export type ListLimit = number;

export type ListPathNaming = string;

export type NonNegativeLong = number;

export declare class ObjectNotFoundException extends EffectData.TaggedError(
  "ObjectNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type PaginationToken = string;

export type PathNaming = string;

export type PayloadBlob = Uint8Array | string;

export interface PutObjectRequest {
  Body: Uint8Array | string | Buffer | Stream.Stream<Uint8Array>;
  Path: string;
  ContentType?: string;
  CacheControl?: string;
  StorageClass?: StorageClass;
  UploadAvailability?: UploadAvailability;
}
export interface PutObjectResponse {
  ContentSHA256?: string;
  ETag?: string;
  StorageClass?: StorageClass;
}
export type RangePattern = string;

export declare class RequestedRangeNotSatisfiableException extends EffectData.TaggedError(
  "RequestedRangeNotSatisfiableException",
)<{
  readonly Message?: string;
}> {}
export type SHA256Hash = string;

export type statusCode = number;

export type StorageClass = "TEMPORAL";
export type StringPrimitive = string;

export type TimeStamp = Date | string;

export type UploadAvailability = "STANDARD" | "STREAMING";
export declare namespace DeleteObject {
  export type Input = DeleteObjectRequest;
  export type Output = DeleteObjectResponse;
  export type Error =
    | ContainerNotFoundException
    | InternalServerError
    | ObjectNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeObject {
  export type Input = DescribeObjectRequest;
  export type Output = DescribeObjectResponse;
  export type Error =
    | ContainerNotFoundException
    | InternalServerError
    | ObjectNotFoundException
    | CommonAwsError;
}

export declare namespace GetObject {
  export type Input = GetObjectRequest;
  export type Output = GetObjectResponse;
  export type Error =
    | ContainerNotFoundException
    | InternalServerError
    | ObjectNotFoundException
    | RequestedRangeNotSatisfiableException
    | CommonAwsError;
}

export declare namespace ListItems {
  export type Input = ListItemsRequest;
  export type Output = ListItemsResponse;
  export type Error =
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace PutObject {
  export type Input = PutObjectRequest;
  export type Output = PutObjectResponse;
  export type Error =
    | ContainerNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export type MediaStoreDataErrors =
  | ContainerNotFoundException
  | InternalServerError
  | ObjectNotFoundException
  | RequestedRangeNotSatisfiableException
  | CommonAwsError;

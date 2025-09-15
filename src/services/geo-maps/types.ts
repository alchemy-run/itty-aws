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

export declare class GeoMaps extends AWSServiceClient {
  getGlyphs(
    input: GetGlyphsRequest,
  ): Effect.Effect<GetGlyphsResponse, CommonAwsError>;
  getSprites(
    input: GetSpritesRequest,
  ): Effect.Effect<GetSpritesResponse, CommonAwsError>;
  getStaticMap(
    input: GetStaticMapRequest,
  ): Effect.Effect<
    GetStaticMapResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getStyleDescriptor(
    input: GetStyleDescriptorRequest,
  ): Effect.Effect<GetStyleDescriptorResponse, CommonAwsError>;
  getTile(
    input: GetTileRequest,
  ): Effect.Effect<
    GetTileResponse,
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
  readonly Message: string;
}> {}
export type ApiKey = string;

export type ColorScheme = string;

export type CompactOverlay = string;

export type CountryCode = string;

export type DistanceMeters = number;

export type GeoJsonOverlay = string;

export interface GetGlyphsRequest {
  FontStack: string;
  FontUnicodeRange: string;
}
export interface GetGlyphsResponse {
  Blob?: Uint8Array | string;
  ContentType?: string;
  CacheControl?: string;
  ETag?: string;
}
export interface GetSpritesRequest {
  FileName: string;
  Style: string;
  ColorScheme: string;
  Variant: string;
}
export interface GetSpritesResponse {
  Blob?: Uint8Array | string;
  ContentType?: string;
  CacheControl?: string;
  ETag?: string;
}
export interface GetStaticMapRequest {
  BoundingBox?: string;
  BoundedPositions?: string;
  Center?: string;
  ColorScheme?: string;
  CompactOverlay?: string;
  CropLabels?: boolean;
  GeoJsonOverlay?: string;
  Height: number;
  Key?: string;
  LabelSize?: string;
  Language?: string;
  Padding?: number;
  PoliticalView?: string;
  PointsOfInterests?: string;
  Radius?: number;
  FileName: string;
  ScaleBarUnit?: string;
  Style?: string;
  Width: number;
  Zoom?: number;
}
export interface GetStaticMapResponse {
  Blob?: Uint8Array | string;
  ContentType?: string;
  CacheControl?: string;
  ETag?: string;
  PricingBucket: string;
}
export interface GetStyleDescriptorRequest {
  Style: string;
  ColorScheme?: string;
  PoliticalView?: string;
  Key?: string;
}
export interface GetStyleDescriptorResponse {
  Blob?: Uint8Array | string;
  ContentType?: string;
  CacheControl?: string;
  ETag?: string;
}
export interface GetTileRequest {
  Tileset: string;
  Z: string;
  X: string;
  Y: string;
  Key?: string;
}
export interface GetTileResponse {
  Blob?: Uint8Array | string;
  ContentType?: string;
  CacheControl?: string;
  ETag?: string;
  PricingBucket: string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export type LabelSize = string;

export type LanguageTag = string;

export type MapFeatureMode = string;

export type MapStyle = string;

export type PositionListString = string;

export type PositionString = string;

export type ScaleBarUnit = string;

export type StaticMapStyle = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export type Tileset = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason: string;
  readonly FieldList: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type Variant = string;

export declare namespace GetGlyphs {
  export type Input = GetGlyphsRequest;
  export type Output = GetGlyphsResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetSprites {
  export type Input = GetSpritesRequest;
  export type Output = GetSpritesResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetStaticMap {
  export type Input = GetStaticMapRequest;
  export type Output = GetStaticMapResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStyleDescriptor {
  export type Input = GetStyleDescriptorRequest;
  export type Output = GetStyleDescriptorResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetTile {
  export type Input = GetTileRequest;
  export type Output = GetTileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

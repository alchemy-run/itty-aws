import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class KinesisVideoArchivedMedia extends AWSServiceClient {
  getClip(
    input: GetClipInput,
  ): Effect.Effect<
    GetClipOutput,
    | ClientLimitExceededException
    | InvalidArgumentException
    | InvalidCodecPrivateDataException
    | InvalidMediaFrameException
    | MissingCodecPrivateDataException
    | NoDataRetentionException
    | NotAuthorizedException
    | ResourceNotFoundException
    | UnsupportedStreamMediaTypeException
    | CommonAwsError
  >;
  getDASHStreamingSessionURL(
    input: GetDASHStreamingSessionURLInput,
  ): Effect.Effect<
    GetDASHStreamingSessionURLOutput,
    | ClientLimitExceededException
    | InvalidArgumentException
    | InvalidCodecPrivateDataException
    | MissingCodecPrivateDataException
    | NoDataRetentionException
    | NotAuthorizedException
    | ResourceNotFoundException
    | UnsupportedStreamMediaTypeException
    | CommonAwsError
  >;
  getHLSStreamingSessionURL(
    input: GetHLSStreamingSessionURLInput,
  ): Effect.Effect<
    GetHLSStreamingSessionURLOutput,
    | ClientLimitExceededException
    | InvalidArgumentException
    | InvalidCodecPrivateDataException
    | MissingCodecPrivateDataException
    | NoDataRetentionException
    | NotAuthorizedException
    | ResourceNotFoundException
    | UnsupportedStreamMediaTypeException
    | CommonAwsError
  >;
  getImages(
    input: GetImagesInput,
  ): Effect.Effect<
    GetImagesOutput,
    | ClientLimitExceededException
    | InvalidArgumentException
    | NoDataRetentionException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getMediaForFragmentList(
    input: GetMediaForFragmentListInput,
  ): Effect.Effect<
    GetMediaForFragmentListOutput,
    | ClientLimitExceededException
    | InvalidArgumentException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listFragments(
    input: ListFragmentsInput,
  ): Effect.Effect<
    ListFragmentsOutput,
    | ClientLimitExceededException
    | InvalidArgumentException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export declare class ClientLimitExceededException extends Data.TaggedError(
  "ClientLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ClipFragmentSelector {
  FragmentSelectorType: ClipFragmentSelectorType;
  TimestampRange: ClipTimestampRange;
}
export type ClipFragmentSelectorType =
  | "PRODUCER_TIMESTAMP"
  | "SERVER_TIMESTAMP";
export interface ClipTimestampRange {
  StartTimestamp: Date | string;
  EndTimestamp: Date | string;
}
export type ContainerFormat = "FRAGMENTED_MP4" | "MPEG_TS";
export type ContentType = string;

export type DASHDisplayFragmentNumber = "ALWAYS" | "NEVER";
export type DASHDisplayFragmentTimestamp = "ALWAYS" | "NEVER";
export interface DASHFragmentSelector {
  FragmentSelectorType?: DASHFragmentSelectorType;
  TimestampRange?: DASHTimestampRange;
}
export type DASHFragmentSelectorType =
  | "PRODUCER_TIMESTAMP"
  | "SERVER_TIMESTAMP";
export type DASHMaxResults = number;

export type DASHPlaybackMode = "LIVE" | "LIVE_REPLAY" | "ON_DEMAND";
export type DASHStreamingSessionURL = string;

export interface DASHTimestampRange {
  StartTimestamp?: Date | string;
  EndTimestamp?: Date | string;
}
export type ErrorMessage = string;

export type Expires = number;

export type Format = "JPEG" | "PNG";
export type FormatConfig = Record<FormatConfigKey, string>;
export type FormatConfigKey = "JPEGQuality";
export type FormatConfigValue = string;

export interface Fragment {
  FragmentNumber?: string;
  FragmentSizeInBytes?: number;
  ProducerTimestamp?: Date | string;
  ServerTimestamp?: Date | string;
  FragmentLengthInMilliseconds?: number;
}
export type FragmentList = Array<Fragment>;
export type FragmentNumberList = Array<string>;
export type FragmentNumberString = string;

export interface FragmentSelector {
  FragmentSelectorType: FragmentSelectorType;
  TimestampRange: TimestampRange;
}
export type FragmentSelectorType = "PRODUCER_TIMESTAMP" | "SERVER_TIMESTAMP";
export interface GetClipInput {
  StreamName?: string;
  StreamARN?: string;
  ClipFragmentSelector: ClipFragmentSelector;
}
export interface GetClipOutput {
  ContentType?: string;
  Payload?: Uint8Array | string;
}
export interface GetDASHStreamingSessionURLInput {
  StreamName?: string;
  StreamARN?: string;
  PlaybackMode?: DASHPlaybackMode;
  DisplayFragmentTimestamp?: DASHDisplayFragmentTimestamp;
  DisplayFragmentNumber?: DASHDisplayFragmentNumber;
  DASHFragmentSelector?: DASHFragmentSelector;
  Expires?: number;
  MaxManifestFragmentResults?: number;
}
export interface GetDASHStreamingSessionURLOutput {
  DASHStreamingSessionURL?: string;
}
export interface GetHLSStreamingSessionURLInput {
  StreamName?: string;
  StreamARN?: string;
  PlaybackMode?: HLSPlaybackMode;
  HLSFragmentSelector?: HLSFragmentSelector;
  ContainerFormat?: ContainerFormat;
  DiscontinuityMode?: HLSDiscontinuityMode;
  DisplayFragmentTimestamp?: HLSDisplayFragmentTimestamp;
  Expires?: number;
  MaxMediaPlaylistFragmentResults?: number;
}
export interface GetHLSStreamingSessionURLOutput {
  HLSStreamingSessionURL?: string;
}
export interface GetImagesInput {
  StreamName?: string;
  StreamARN?: string;
  ImageSelectorType: ImageSelectorType;
  StartTimestamp: Date | string;
  EndTimestamp: Date | string;
  SamplingInterval?: number;
  Format: Format;
  FormatConfig?: { [key in FormatConfigKey]?: string };
  WidthPixels?: number;
  HeightPixels?: number;
  MaxResults?: number;
  NextToken?: string;
}
export type GetImagesMaxResults = number;

export interface GetImagesOutput {
  Images?: Array<Image>;
  NextToken?: string;
}
export interface GetMediaForFragmentListInput {
  StreamName?: string;
  StreamARN?: string;
  Fragments: Array<string>;
}
export interface GetMediaForFragmentListOutput {
  ContentType?: string;
  Payload?: Uint8Array | string;
}
export type HeightPixels = number;

export type HLSDiscontinuityMode = "ALWAYS" | "NEVER" | "ON_DISCONTINUITY";
export type HLSDisplayFragmentTimestamp = "ALWAYS" | "NEVER";
export interface HLSFragmentSelector {
  FragmentSelectorType?: HLSFragmentSelectorType;
  TimestampRange?: HLSTimestampRange;
}
export type HLSFragmentSelectorType = "PRODUCER_TIMESTAMP" | "SERVER_TIMESTAMP";
export type HLSMaxResults = number;

export type HLSPlaybackMode = "LIVE" | "LIVE_REPLAY" | "ON_DEMAND";
export type HLSStreamingSessionURL = string;

export interface HLSTimestampRange {
  StartTimestamp?: Date | string;
  EndTimestamp?: Date | string;
}
export interface Image {
  TimeStamp?: Date | string;
  Error?: ImageError;
  ImageContent?: string;
}
export type ImageContent = string;

export type ImageError = "NO_MEDIA" | "MEDIA_ERROR";
export type Images = Array<Image>;
export type ImageSelectorType = "PRODUCER_TIMESTAMP" | "SERVER_TIMESTAMP";
export declare class InvalidArgumentException extends Data.TaggedError(
  "InvalidArgumentException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidCodecPrivateDataException extends Data.TaggedError(
  "InvalidCodecPrivateDataException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidMediaFrameException extends Data.TaggedError(
  "InvalidMediaFrameException",
)<{
  readonly Message?: string;
}> {}
export interface ListFragmentsInput {
  StreamName?: string;
  StreamARN?: string;
  MaxResults?: number;
  NextToken?: string;
  FragmentSelector?: FragmentSelector;
}
export type ListFragmentsMaxResults = number;

export interface ListFragmentsOutput {
  Fragments?: Array<Fragment>;
  NextToken?: string;
}
export type Long = number;

export declare class MissingCodecPrivateDataException extends Data.TaggedError(
  "MissingCodecPrivateDataException",
)<{
  readonly Message?: string;
}> {}
export type NextToken = string;

export declare class NoDataRetentionException extends Data.TaggedError(
  "NoDataRetentionException",
)<{
  readonly Message?: string;
}> {}
export declare class NotAuthorizedException extends Data.TaggedError(
  "NotAuthorizedException",
)<{
  readonly Message?: string;
}> {}
export type Payload = Uint8Array | string;

export type ResourceARN = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type SamplingInterval = number;

export type StreamName = string;

export type Timestamp = Date | string;

export interface TimestampRange {
  StartTimestamp: Date | string;
  EndTimestamp: Date | string;
}
export declare class UnsupportedStreamMediaTypeException extends Data.TaggedError(
  "UnsupportedStreamMediaTypeException",
)<{
  readonly Message?: string;
}> {}
export type WidthPixels = number;

export declare namespace GetClip {
  export type Input = GetClipInput;
  export type Output = GetClipOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | InvalidCodecPrivateDataException
    | InvalidMediaFrameException
    | MissingCodecPrivateDataException
    | NoDataRetentionException
    | NotAuthorizedException
    | ResourceNotFoundException
    | UnsupportedStreamMediaTypeException
    | CommonAwsError;
}

export declare namespace GetDASHStreamingSessionURL {
  export type Input = GetDASHStreamingSessionURLInput;
  export type Output = GetDASHStreamingSessionURLOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | InvalidCodecPrivateDataException
    | MissingCodecPrivateDataException
    | NoDataRetentionException
    | NotAuthorizedException
    | ResourceNotFoundException
    | UnsupportedStreamMediaTypeException
    | CommonAwsError;
}

export declare namespace GetHLSStreamingSessionURL {
  export type Input = GetHLSStreamingSessionURLInput;
  export type Output = GetHLSStreamingSessionURLOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | InvalidCodecPrivateDataException
    | MissingCodecPrivateDataException
    | NoDataRetentionException
    | NotAuthorizedException
    | ResourceNotFoundException
    | UnsupportedStreamMediaTypeException
    | CommonAwsError;
}

export declare namespace GetImages {
  export type Input = GetImagesInput;
  export type Output = GetImagesOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | NoDataRetentionException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetMediaForFragmentList {
  export type Input = GetMediaForFragmentListInput;
  export type Output = GetMediaForFragmentListOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListFragments {
  export type Input = ListFragmentsInput;
  export type Output = ListFragmentsOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export type KinesisVideoArchivedMediaErrors =
  | ClientLimitExceededException
  | InvalidArgumentException
  | InvalidCodecPrivateDataException
  | InvalidMediaFrameException
  | MissingCodecPrivateDataException
  | NoDataRetentionException
  | NotAuthorizedException
  | ResourceNotFoundException
  | UnsupportedStreamMediaTypeException
  | CommonAwsError;

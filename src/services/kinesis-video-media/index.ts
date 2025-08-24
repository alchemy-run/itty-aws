import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class KinesisVideoMedia extends AWSServiceClient {
  getMedia(
    input: GetMediaInput,
  ): Effect.Effect<
    GetMediaOutput,
    | ClientLimitExceededException
    | ConnectionLimitExceededException
    | InvalidArgumentException
    | InvalidEndpointException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export declare class ClientLimitExceededException extends EffectData.TaggedError(
  "ClientLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class ConnectionLimitExceededException extends EffectData.TaggedError(
  "ConnectionLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type ContentType = string;

export type ContinuationToken = string;

export type ErrorMessage = string;

export type FragmentNumberString = string;

export interface GetMediaInput {
  StreamName?: string;
  StreamARN?: string;
  StartSelector: StartSelector;
}
export interface GetMediaOutput {
  ContentType?: string;
  Payload?: Uint8Array | string;
}
export declare class InvalidArgumentException extends EffectData.TaggedError(
  "InvalidArgumentException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidEndpointException extends EffectData.TaggedError(
  "InvalidEndpointException",
)<{
  readonly Message?: string;
}> {}
export declare class NotAuthorizedException extends EffectData.TaggedError(
  "NotAuthorizedException",
)<{
  readonly Message?: string;
}> {}
export type Payload = Uint8Array | string;

export type ResourceARN = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface StartSelector {
  StartSelectorType: StartSelectorType;
  AfterFragmentNumber?: string;
  StartTimestamp?: Date | string;
  ContinuationToken?: string;
}
export type StartSelectorType =
  | "FRAGMENT_NUMBER"
  | "SERVER_TIMESTAMP"
  | "PRODUCER_TIMESTAMP"
  | "NOW"
  | "EARLIEST"
  | "CONTINUATION_TOKEN";
export type StreamName = string;

export type Timestamp = Date | string;

export declare namespace GetMedia {
  export type Input = GetMediaInput;
  export type Output = GetMediaOutput;
  export type Error =
    | ClientLimitExceededException
    | ConnectionLimitExceededException
    | InvalidArgumentException
    | InvalidEndpointException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "Kinesis Video Media",
  version: "2017-09-30",
  protocol: "restJson1",
  endpointPrefix: "kinesisvideo",
  operations: {
    GetMedia: {
      http: "POST /getMedia",
      traits: {
        ContentType: "Content-Type",
        Payload: "httpPayload",
      },
    },
  },
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;

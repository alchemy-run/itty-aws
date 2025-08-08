import type { Effect, Stream, Data as EffectData } from "effect";
import type { ResponseError } from "@effect/platform/HttpClientError";
import type { Buffer } from "node:buffer";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export class IoTDataPlane extends AWSServiceClient {
  deleteThingShadow(
    input: DeleteThingShadowRequest,
  ): Effect.Effect<
    DeleteThingShadowResponse,
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnsupportedDocumentEncodingException
    | CommonAwsError
  > {
    return this.call("DeleteThingShadow", input);
  }
  getRetainedMessage(
    input: GetRetainedMessageRequest,
  ): Effect.Effect<
    GetRetainedMessageResponse,
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  > {
    return this.call("GetRetainedMessage", input);
  }
  getThingShadow(
    input: GetThingShadowRequest,
  ): Effect.Effect<
    GetThingShadowResponse,
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnsupportedDocumentEncodingException
    | CommonAwsError
  > {
    return this.call("GetThingShadow", input);
  }
  listNamedShadowsForThing(
    input: ListNamedShadowsForThingRequest,
  ): Effect.Effect<
    ListNamedShadowsForThingResponse,
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  > {
    return this.call("ListNamedShadowsForThing", input);
  }
  listRetainedMessages(
    input: ListRetainedMessagesRequest,
  ): Effect.Effect<
    ListRetainedMessagesResponse,
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  > {
    return this.call("ListRetainedMessages", input);
  }
  publish(
    input: PublishRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  > {
    return this.call("Publish", input);
  }
  updateThingShadow(
    input: UpdateThingShadowRequest,
  ): Effect.Effect<
    UpdateThingShadowResponse,
    | ConflictException
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | RequestEntityTooLargeException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnsupportedDocumentEncodingException
    | CommonAwsError
  > {
    return this.call("UpdateThingShadow", input);
  }
}

export class IotDataPlane extends IoTDataPlane {}

export default IoTDataPlane;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ContentType = string;

export type CorrelationData = string;

export interface DeleteThingShadowRequest {
  thingName: string;
  shadowName?: string;
}
export interface DeleteThingShadowResponse {
  payload: Stream.Stream<Uint8Array, ResponseError>;
}
export type errorMessage = string;

export interface GetRetainedMessageRequest {
  topic: string;
}
export interface GetRetainedMessageResponse {
  topic?: string;
  payload?: Stream.Stream<Uint8Array, ResponseError>;
  qos?: number;
  lastModifiedTime?: number;
  userProperties?: Uint8Array | string;
}
export interface GetThingShadowRequest {
  thingName: string;
  shadowName?: string;
}
export interface GetThingShadowResponse {
  payload?: Stream.Stream<Uint8Array, ResponseError>;
}
export declare class InternalFailureException extends EffectData.TaggedError(
  "InternalFailureException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export type JsonDocument = Uint8Array | string;

export interface ListNamedShadowsForThingRequest {
  thingName: string;
  nextToken?: string;
  pageSize?: number;
}
export interface ListNamedShadowsForThingResponse {
  results?: Array<string>;
  nextToken?: string;
  timestamp?: number;
}
export interface ListRetainedMessagesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListRetainedMessagesResponse {
  retainedTopics?: Array<RetainedMessageSummary>;
  nextToken?: string;
}
export type MaxResults = number;

export type MessageExpiry = number;

export declare class MethodNotAllowedException extends EffectData.TaggedError(
  "MethodNotAllowedException",
)<{
  readonly message?: string;
}> {}
export type NamedShadowList = Array<string>;
export type NextToken = string;

export type PageSize = number;

export type Payload = Uint8Array | string;

export type PayloadFormatIndicator = "UNSPECIFIED_BYTES" | "UTF8_DATA";
export type PayloadSize = number;

export interface PublishRequest {
  topic: string;
  qos?: number;
  retain?: boolean;
  payload?: Uint8Array | string | Buffer | Stream.Stream<Uint8Array>;
  userProperties?: string;
  payloadFormatIndicator?: PayloadFormatIndicator;
  contentType?: string;
  responseTopic?: string;
  correlationData?: string;
  messageExpiry?: number;
}
export type Qos = number;

export declare class RequestEntityTooLargeException extends EffectData.TaggedError(
  "RequestEntityTooLargeException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResponseTopic = string;

export type Retain = boolean;

export type RetainedMessageList = Array<RetainedMessageSummary>;
export interface RetainedMessageSummary {
  topic?: string;
  payloadSize?: number;
  qos?: number;
  lastModifiedTime?: number;
}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export type ShadowName = string;

export type SynthesizedJsonUserProperties = string;

export type ThingName = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Timestamp = number;

export type Topic = string;

export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedDocumentEncodingException extends EffectData.TaggedError(
  "UnsupportedDocumentEncodingException",
)<{
  readonly message?: string;
}> {}
export interface UpdateThingShadowRequest {
  thingName: string;
  shadowName?: string;
  payload: Uint8Array | string | Buffer | Stream.Stream<Uint8Array>;
}
export interface UpdateThingShadowResponse {
  payload?: Stream.Stream<Uint8Array, ResponseError>;
}
export type UserPropertiesBlob = Uint8Array | string;

export declare namespace DeleteThingShadow {
  export type Input = DeleteThingShadowRequest;
  export type Output = DeleteThingShadowResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnsupportedDocumentEncodingException
    | CommonAwsError;
}

export declare namespace GetRetainedMessage {
  export type Input = GetRetainedMessageRequest;
  export type Output = GetRetainedMessageResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetThingShadow {
  export type Input = GetThingShadowRequest;
  export type Output = GetThingShadowResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnsupportedDocumentEncodingException
    | CommonAwsError;
}

export declare namespace ListNamedShadowsForThing {
  export type Input = ListNamedShadowsForThingRequest;
  export type Output = ListNamedShadowsForThingResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListRetainedMessages {
  export type Input = ListRetainedMessagesRequest;
  export type Output = ListRetainedMessagesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace Publish {
  export type Input = PublishRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateThingShadow {
  export type Input = UpdateThingShadowRequest;
  export type Output = UpdateThingShadowResponse;
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidRequestException
    | MethodNotAllowedException
    | RequestEntityTooLargeException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | UnsupportedDocumentEncodingException
    | CommonAwsError;
}

import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class PinpointSMSVoice extends AWSServiceClient {
  createConfigurationSet(
    input: CreateConfigurationSetRequest,
  ): Effect.Effect<
    CreateConfigurationSetResponse,
    | AlreadyExistsException
    | BadRequestException
    | InternalServiceErrorException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createConfigurationSetEventDestination(
    input: CreateConfigurationSetEventDestinationRequest,
  ): Effect.Effect<
    CreateConfigurationSetEventDestinationResponse,
    | AlreadyExistsException
    | BadRequestException
    | InternalServiceErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteConfigurationSet(
    input: DeleteConfigurationSetRequest,
  ): Effect.Effect<
    DeleteConfigurationSetResponse,
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteConfigurationSetEventDestination(
    input: DeleteConfigurationSetEventDestinationRequest,
  ): Effect.Effect<
    DeleteConfigurationSetEventDestinationResponse,
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getConfigurationSetEventDestinations(
    input: GetConfigurationSetEventDestinationsRequest,
  ): Effect.Effect<
    GetConfigurationSetEventDestinationsResponse,
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listConfigurationSets(
    input: ListConfigurationSetsRequest,
  ): Effect.Effect<
    ListConfigurationSetsResponse,
    | BadRequestException
    | InternalServiceErrorException
    | TooManyRequestsException
    | CommonAwsError
  >;
  sendVoiceMessage(
    input: SendVoiceMessageRequest,
  ): Effect.Effect<
    SendVoiceMessageResponse,
    | BadRequestException
    | InternalServiceErrorException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateConfigurationSetEventDestination(
    input: UpdateConfigurationSetEventDestinationRequest,
  ): Effect.Effect<
    UpdateConfigurationSetEventDestinationResponse,
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export declare class PinpointSmsVoice extends PinpointSMSVoice {}

export type __string = string;

export declare class AlreadyExistsException extends EffectData.TaggedError(
  "AlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
}> {}
export type PinpointSmsVoiceBoolean = boolean;

export interface CallInstructionsMessageType {
  Text?: string;
}
export interface CloudWatchLogsDestination {
  IamRoleArn?: string;
  LogGroupArn?: string;
}
export type ConfigurationSets = Array<string>;
export interface CreateConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestination?: EventDestinationDefinition;
  EventDestinationName?: string;
}
export interface CreateConfigurationSetEventDestinationResponse {}
export interface CreateConfigurationSetRequest {
  ConfigurationSetName?: string;
}
export interface CreateConfigurationSetResponse {}
export interface DeleteConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
}
export interface DeleteConfigurationSetEventDestinationResponse {}
export interface DeleteConfigurationSetRequest {
  ConfigurationSetName: string;
}
export interface DeleteConfigurationSetResponse {}
export interface EventDestination {
  CloudWatchLogsDestination?: CloudWatchLogsDestination;
  Enabled?: boolean;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  MatchingEventTypes?: Array<EventType>;
  Name?: string;
  SnsDestination?: SnsDestination;
}
export interface EventDestinationDefinition {
  CloudWatchLogsDestination?: CloudWatchLogsDestination;
  Enabled?: boolean;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  MatchingEventTypes?: Array<EventType>;
  SnsDestination?: SnsDestination;
}
export type EventDestinations = Array<EventDestination>;
export type EventType =
  | "INITIATED_CALL"
  | "RINGING"
  | "ANSWERED"
  | "COMPLETED_CALL"
  | "BUSY"
  | "FAILED"
  | "NO_ANSWER";
export type EventTypes = Array<EventType>;
export interface GetConfigurationSetEventDestinationsRequest {
  ConfigurationSetName: string;
}
export interface GetConfigurationSetEventDestinationsResponse {
  EventDestinations?: Array<EventDestination>;
}
export declare class InternalServiceErrorException extends EffectData.TaggedError(
  "InternalServiceErrorException",
)<{
  readonly Message?: string;
}> {}
export interface KinesisFirehoseDestination {
  DeliveryStreamArn?: string;
  IamRoleArn?: string;
}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListConfigurationSetsRequest {
  NextToken?: string;
  PageSize?: string;
}
export interface ListConfigurationSetsResponse {
  ConfigurationSets?: Array<string>;
  NextToken?: string;
}
export type NextTokenString = string;

export type NonEmptyString = string;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface PlainTextMessageType {
  LanguageCode?: string;
  Text?: string;
  VoiceId?: string;
}
export interface SendVoiceMessageRequest {
  CallerId?: string;
  ConfigurationSetName?: string;
  Content?: VoiceMessageContent;
  DestinationPhoneNumber?: string;
  OriginationPhoneNumber?: string;
}
export interface SendVoiceMessageResponse {
  MessageId?: string;
}
export interface SnsDestination {
  TopicArn?: string;
}
export interface SSMLMessageType {
  LanguageCode?: string;
  Text?: string;
  VoiceId?: string;
}
export type PinpointSmsVoiceString = string;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export interface UpdateConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestination?: EventDestinationDefinition;
  EventDestinationName: string;
}
export interface UpdateConfigurationSetEventDestinationResponse {}
export interface VoiceMessageContent {
  CallInstructionsMessage?: CallInstructionsMessageType;
  PlainTextMessage?: PlainTextMessageType;
  SSMLMessage?: SSMLMessageType;
}
export type WordCharactersWithDelimiters = string;

export declare namespace CreateConfigurationSet {
  export type Input = CreateConfigurationSetRequest;
  export type Output = CreateConfigurationSetResponse;
  export type Error =
    | AlreadyExistsException
    | BadRequestException
    | InternalServiceErrorException
    | LimitExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateConfigurationSetEventDestination {
  export type Input = CreateConfigurationSetEventDestinationRequest;
  export type Output = CreateConfigurationSetEventDestinationResponse;
  export type Error =
    | AlreadyExistsException
    | BadRequestException
    | InternalServiceErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteConfigurationSet {
  export type Input = DeleteConfigurationSetRequest;
  export type Output = DeleteConfigurationSetResponse;
  export type Error =
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteConfigurationSetEventDestination {
  export type Input = DeleteConfigurationSetEventDestinationRequest;
  export type Output = DeleteConfigurationSetEventDestinationResponse;
  export type Error =
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetConfigurationSetEventDestinations {
  export type Input = GetConfigurationSetEventDestinationsRequest;
  export type Output = GetConfigurationSetEventDestinationsResponse;
  export type Error =
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListConfigurationSets {
  export type Input = ListConfigurationSetsRequest;
  export type Output = ListConfigurationSetsResponse;
  export type Error =
    | BadRequestException
    | InternalServiceErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SendVoiceMessage {
  export type Input = SendVoiceMessageRequest;
  export type Output = SendVoiceMessageResponse;
  export type Error =
    | BadRequestException
    | InternalServiceErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateConfigurationSetEventDestination {
  export type Input = UpdateConfigurationSetEventDestinationRequest;
  export type Output = UpdateConfigurationSetEventDestinationResponse;
  export type Error =
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "Pinpoint SMS Voice",
  version: "2018-09-05",
  protocol: "restJson1",
  endpointPrefix: "sms-voice.pinpoint",
  operations: {
    CreateConfigurationSet: "POST /v1/sms-voice/configuration-sets",
    CreateConfigurationSetEventDestination:
      "POST /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations",
    DeleteConfigurationSet:
      "DELETE /v1/sms-voice/configuration-sets/{ConfigurationSetName}",
    DeleteConfigurationSetEventDestination:
      "DELETE /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
    GetConfigurationSetEventDestinations:
      "GET /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations",
    ListConfigurationSets: "GET /v1/sms-voice/configuration-sets",
    SendVoiceMessage: "POST /v1/sms-voice/voice/message",
    UpdateConfigurationSetEventDestination:
      "PUT /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
  },
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;

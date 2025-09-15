import type { Effect, Data as EffectData } from "effect";
import type {
  AccessDeniedException,
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
  | AccessDeniedException
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
  | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class AppConfigData extends AWSServiceClient {
  getLatestConfiguration(
    input: GetLatestConfigurationRequest,
  ): Effect.Effect<
    GetLatestConfigurationResponse,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  startConfigurationSession(
    input: StartConfigurationSessionRequest,
  ): Effect.Effect<
    StartConfigurationSessionResponse,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
}

export declare class Appconfigdata extends AppConfigData {}

interface _BadRequestDetails {
  InvalidParameters?: Record<string, InvalidParameterDetail>;
}

export type BadRequestDetails = _BadRequestDetails & {
  InvalidParameters: Record<string, InvalidParameterDetail>;
};
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
  readonly Reason?: string;
  readonly Details?: BadRequestDetails;
}> {}
export type BadRequestReason = string;

export interface GetLatestConfigurationRequest {
  ConfigurationToken: string;
}
export interface GetLatestConfigurationResponse {
  NextPollConfigurationToken?: string;
  NextPollIntervalInSeconds?: number;
  ContentType?: string;
  Configuration?: Uint8Array | string;
  VersionLabel?: string;
}
export type Id = string;

export type Identifier = string;

export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface InvalidParameterDetail {
  Problem?: string;
}
export type InvalidParameterMap = Record<string, InvalidParameterDetail>;
export type InvalidParameterProblem = string;

export type OptionalPollSeconds = number;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
  readonly ReferencedBy?: Record<string, string>;
}> {}
export type ResourceType = string;

export type SensitiveBlob = Uint8Array | string;

export interface StartConfigurationSessionRequest {
  ApplicationIdentifier: string;
  EnvironmentIdentifier: string;
  ConfigurationProfileIdentifier: string;
  RequiredMinimumPollIntervalInSeconds?: number;
}
export interface StartConfigurationSessionResponse {
  InitialConfigurationToken?: string;
}
export type AppconfigdataString = string;

export type StringMap = Record<string, string>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type Token = string;

export declare namespace GetLatestConfiguration {
  export type Input = GetLatestConfigurationRequest;
  export type Output = GetLatestConfigurationResponse;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartConfigurationSession {
  export type Input = StartConfigurationSessionRequest;
  export type Output = StartConfigurationSessionResponse;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

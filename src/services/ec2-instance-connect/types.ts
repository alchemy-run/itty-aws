import type { Effect, Data as EffectData } from "effect";
import type { AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException } from "../../error.ts";
type CommonAwsError = AccessDeniedException | ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | ValidationException | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class EC2InstanceConnect extends AWSServiceClient {
  sendSerialConsoleSSHPublicKey(
    input: SendSerialConsoleSSHPublicKeyRequest,
  ): Effect.Effect<
    SendSerialConsoleSSHPublicKeyResponse,
    AuthException | EC2InstanceNotFoundException | EC2InstanceStateInvalidException | EC2InstanceTypeInvalidException | EC2InstanceUnavailableException | InvalidArgsException | SerialConsoleAccessDisabledException | SerialConsoleSessionLimitExceededException | SerialConsoleSessionUnavailableException | SerialConsoleSessionUnsupportedException | ServiceException | ThrottlingException | CommonAwsError
  >;
  sendSSHPublicKey(
    input: SendSSHPublicKeyRequest,
  ): Effect.Effect<
    SendSSHPublicKeyResponse,
    AuthException | EC2InstanceNotFoundException | EC2InstanceStateInvalidException | EC2InstanceUnavailableException | InvalidArgsException | ServiceException | ThrottlingException | CommonAwsError
  >;
}

export declare class Ec2InstanceConnect extends EC2InstanceConnect {}

export declare class AuthException extends EffectData.TaggedError(
  "AuthException",
)<{
  readonly Message?: string;
}> {}
export type AvailabilityZone = string;

export declare class EC2InstanceNotFoundException extends EffectData.TaggedError(
  "EC2InstanceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class EC2InstanceStateInvalidException extends EffectData.TaggedError(
  "EC2InstanceStateInvalidException",
)<{
  readonly Message?: string;
}> {}
export declare class EC2InstanceTypeInvalidException extends EffectData.TaggedError(
  "EC2InstanceTypeInvalidException",
)<{
  readonly Message?: string;
}> {}
export declare class EC2InstanceUnavailableException extends EffectData.TaggedError(
  "EC2InstanceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export type InstanceId = string;

export type InstanceOSUser = string;

export declare class InvalidArgsException extends EffectData.TaggedError(
  "InvalidArgsException",
)<{
  readonly Message?: string;
}> {}
export type RequestId = string;

export interface SendSerialConsoleSSHPublicKeyRequest {
  InstanceId: string;
  SerialPort?: number;
  SSHPublicKey: string;
}
export interface SendSerialConsoleSSHPublicKeyResponse {
  RequestId?: string;
  Success?: boolean;
}
export interface SendSSHPublicKeyRequest {
  InstanceId: string;
  InstanceOSUser: string;
  SSHPublicKey: string;
  AvailabilityZone?: string;
}
export interface SendSSHPublicKeyResponse {
  RequestId?: string;
  Success?: boolean;
}
export declare class SerialConsoleAccessDisabledException extends EffectData.TaggedError(
  "SerialConsoleAccessDisabledException",
)<{
  readonly Message?: string;
}> {}
export declare class SerialConsoleSessionLimitExceededException extends EffectData.TaggedError(
  "SerialConsoleSessionLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class SerialConsoleSessionUnavailableException extends EffectData.TaggedError(
  "SerialConsoleSessionUnavailableException",
)<{
  readonly Message?: string;
}> {}
export declare class SerialConsoleSessionUnsupportedException extends EffectData.TaggedError(
  "SerialConsoleSessionUnsupportedException",
)<{
  readonly Message?: string;
}> {}
export type SerialPort = number;

export declare class ServiceException extends EffectData.TaggedError(
  "ServiceException",
)<{
  readonly Message?: string;
}> {}
export type SSHPublicKey = string;

export type Ec2InstanceConnectString = string;

export type Success = boolean;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export declare namespace SendSerialConsoleSSHPublicKey {
  export type Input = SendSerialConsoleSSHPublicKeyRequest;
  export type Output = SendSerialConsoleSSHPublicKeyResponse;
  export type Error =
    | AuthException
    | EC2InstanceNotFoundException
    | EC2InstanceStateInvalidException
    | EC2InstanceTypeInvalidException
    | EC2InstanceUnavailableException
    | InvalidArgsException
    | SerialConsoleAccessDisabledException
    | SerialConsoleSessionLimitExceededException
    | SerialConsoleSessionUnavailableException
    | SerialConsoleSessionUnsupportedException
    | ServiceException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SendSSHPublicKey {
  export type Input = SendSSHPublicKeyRequest;
  export type Output = SendSSHPublicKeyResponse;
  export type Error =
    | AuthException
    | EC2InstanceNotFoundException
    | EC2InstanceStateInvalidException
    | EC2InstanceUnavailableException
    | InvalidArgsException
    | ServiceException
    | ThrottlingException
    | CommonAwsError;
}

export type EC2InstanceConnectErrors = AuthException | EC2InstanceNotFoundException | EC2InstanceStateInvalidException | EC2InstanceTypeInvalidException | EC2InstanceUnavailableException | InvalidArgsException | SerialConsoleAccessDisabledException | SerialConsoleSessionLimitExceededException | SerialConsoleSessionUnavailableException | SerialConsoleSessionUnsupportedException | ServiceException | ThrottlingException | CommonAwsError;


import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";
import { RestJson1Protocol } from "../../protocols/restjson1.js";

export class KinesisVideoSignaling extends AWSServiceClient {
  constructor(cfg: any) {
    super("kinesis-video-signaling", new RestJson1Protocol(), cfg);
  }

  getIceServerConfig(
    input: GetIceServerConfigRequest,
  ): Effect.Effect<
    GetIceServerConfigResponse,
    ClientLimitExceededException | InvalidArgumentException | InvalidClientException | NotAuthorizedException | ResourceNotFoundException | SessionExpiredException | CommonAwsError
  > {
    return this.call("GetIceServerConfig", input);
  }
  sendAlexaOfferToMaster(
    input: SendAlexaOfferToMasterRequest,
  ): Effect.Effect<
    SendAlexaOfferToMasterResponse,
    ClientLimitExceededException | InvalidArgumentException | NotAuthorizedException | ResourceNotFoundException | CommonAwsError
  > {
    return this.call("SendAlexaOfferToMaster", input);
  }
}

export default KinesisVideoSignaling;

export type Answer = string;

export type ClientId = string;

export declare class ClientLimitExceededException extends EffectData.TaggedError(
  "ClientLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type ErrorMessage = string;

export interface GetIceServerConfigRequest {
  ChannelARN: string;
  ClientId?: string;
  Service?: Service;
  Username?: string;
}
export interface GetIceServerConfigResponse {
  IceServerList?: Array<IceServer>;
}
export interface IceServer {
  Uris?: Array<string>;
  Username?: string;
  Password?: string;
  Ttl?: number;
}
export type IceServerList = Array<IceServer>;
export declare class InvalidArgumentException extends EffectData.TaggedError(
  "InvalidArgumentException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidClientException extends EffectData.TaggedError(
  "InvalidClientException",
)<{
  readonly message?: string;
}> {}
export type MessagePayload = string;

export declare class NotAuthorizedException extends EffectData.TaggedError(
  "NotAuthorizedException",
)<{
  readonly Message?: string;
}> {}
export type Password = string;

export type ResourceARN = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface SendAlexaOfferToMasterRequest {
  ChannelARN: string;
  SenderClientId: string;
  MessagePayload: string;
}
export interface SendAlexaOfferToMasterResponse {
  Answer?: string;
}
export type Service = "TURN";
export declare class SessionExpiredException extends EffectData.TaggedError(
  "SessionExpiredException",
)<{
  readonly message?: string;
}> {}
export type Ttl = number;

export type Uri = string;

export type Uris = Array<string>;
export type Username = string;

export declare namespace GetIceServerConfig {
  export type Input = GetIceServerConfigRequest;
  export type Output = GetIceServerConfigResponse;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | InvalidClientException
    | NotAuthorizedException
    | ResourceNotFoundException
    | SessionExpiredException
    | CommonAwsError;
}

export declare namespace SendAlexaOfferToMaster {
  export type Input = SendAlexaOfferToMasterRequest;
  export type Output = SendAlexaOfferToMasterResponse;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}


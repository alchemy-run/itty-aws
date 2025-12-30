import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetIceServerConfigRequest extends S.Class<GetIceServerConfigRequest>("GetIceServerConfigRequest")({ChannelARN: S.String, ClientId: S.optional(S.String), Service: S.optional(S.String), Username: S.optional(S.String)}) {}
export class SendAlexaOfferToMasterRequest extends S.Class<SendAlexaOfferToMasterRequest>("SendAlexaOfferToMasterRequest")({ChannelARN: S.String, SenderClientId: S.String, MessagePayload: S.String}) {}
export class SendAlexaOfferToMasterResponse extends S.Class<SendAlexaOfferToMasterResponse>("SendAlexaOfferToMasterResponse")({Answer: S.optional(S.String)}) {}
export const Uris = S.Array(S.String);
export class IceServer extends S.Class<IceServer>("IceServer")({Uris: S.optional(Uris), Username: S.optional(S.String), Password: S.optional(S.String), Ttl: S.optional(S.Number)}) {}
export const IceServerList = S.Array(IceServer);
export class GetIceServerConfigResponse extends S.Class<GetIceServerConfigResponse>("GetIceServerConfigResponse")({IceServerList: S.optional(IceServerList)}) {}
export class ClientLimitExceededException extends S.Class<ClientLimitExceededException>("ClientLimitExceededException")({Message: S.optional(S.String)}) {}
export class InvalidArgumentException extends S.Class<InvalidArgumentException>("InvalidArgumentException")({Message: S.optional(S.String)}) {}
export class NotAuthorizedException extends S.Class<NotAuthorizedException>("NotAuthorizedException")({Message: S.optional(S.String)}) {}
export class InvalidClientException extends S.Class<InvalidClientException>("InvalidClientException")({message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: S.optional(S.String)}) {}
export class SessionExpiredException extends S.Class<SessionExpiredException>("SessionExpiredException")({message: S.optional(S.String)}) {}

//# Errors
export class ClientLimitExceededExceptionError extends S.TaggedError<ClientLimitExceededExceptionError>()("ClientLimitExceededException", ClientLimitExceededException.fields) {};
export class InvalidArgumentExceptionError extends S.TaggedError<InvalidArgumentExceptionError>()("InvalidArgumentException", InvalidArgumentException.fields) {};
export class NotAuthorizedExceptionError extends S.TaggedError<NotAuthorizedExceptionError>()("NotAuthorizedException", NotAuthorizedException.fields) {};
export class InvalidClientExceptionError extends S.TaggedError<InvalidClientExceptionError>()("InvalidClientException", InvalidClientException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class SessionExpiredExceptionError extends S.TaggedError<SessionExpiredExceptionError>()("SessionExpiredException", SessionExpiredException.fields) {};

//# Operations
export const sendAlexaOfferToMaster = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-04", uri: "/v1/send-alexa-offer-to-master", method: "POST", sdkId: "Kinesis Video Signaling", sigV4ServiceName: "kinesisvideo", name: "AWSAcuitySignalingService.SendAlexaOfferToMaster" }, SendAlexaOfferToMasterRequest, SendAlexaOfferToMasterResponse, [ClientLimitExceededExceptionError, InvalidArgumentExceptionError, NotAuthorizedExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getIceServerConfig = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-04", uri: "/v1/get-ice-server-config", method: "POST", sdkId: "Kinesis Video Signaling", sigV4ServiceName: "kinesisvideo", name: "AWSAcuitySignalingService.GetIceServerConfig" }, GetIceServerConfigRequest, GetIceServerConfigResponse, [ClientLimitExceededExceptionError, InvalidArgumentExceptionError, InvalidClientExceptionError, NotAuthorizedExceptionError, ResourceNotFoundExceptionError, SessionExpiredExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

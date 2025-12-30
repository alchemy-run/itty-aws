import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class GetIceServerConfigRequest extends Schema.Class<GetIceServerConfigRequest>("GetIceServerConfigRequest")({ChannelARN: Schema.String, ClientId: Schema.optional(Schema.String), Service: Schema.optional(Schema.String), Username: Schema.optional(Schema.String)}) {}
export class SendAlexaOfferToMasterRequest extends Schema.Class<SendAlexaOfferToMasterRequest>("SendAlexaOfferToMasterRequest")({ChannelARN: Schema.String, SenderClientId: Schema.String, MessagePayload: Schema.String}) {}
export class SendAlexaOfferToMasterResponse extends Schema.Class<SendAlexaOfferToMasterResponse>("SendAlexaOfferToMasterResponse")({Answer: Schema.optional(Schema.String)}) {}
export const Uris = Schema.Array(Schema.String);
export class IceServer extends Schema.Class<IceServer>("IceServer")({Uris: Schema.optional(Uris), Username: Schema.optional(Schema.String), Password: Schema.optional(Schema.String), Ttl: Schema.optional(Schema.Number)}) {}
export const IceServerList = Schema.Array(IceServer);
export class GetIceServerConfigResponse extends Schema.Class<GetIceServerConfigResponse>("GetIceServerConfigResponse")({IceServerList: Schema.optional(IceServerList)}) {}
export class ClientLimitExceededException extends Schema.Class<ClientLimitExceededException>("ClientLimitExceededException")({Message: Schema.optional(Schema.String)}) {}
export class InvalidArgumentException extends Schema.Class<InvalidArgumentException>("InvalidArgumentException")({Message: Schema.optional(Schema.String)}) {}
export class NotAuthorizedException extends Schema.Class<NotAuthorizedException>("NotAuthorizedException")({Message: Schema.optional(Schema.String)}) {}
export class InvalidClientException extends Schema.Class<InvalidClientException>("InvalidClientException")({message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class SessionExpiredException extends Schema.Class<SessionExpiredException>("SessionExpiredException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class ClientLimitExceededExceptionError extends Schema.TaggedError<ClientLimitExceededExceptionError>()("ClientLimitExceededException", ClientLimitExceededException.fields) {};
export class InvalidArgumentExceptionError extends Schema.TaggedError<InvalidArgumentExceptionError>()("InvalidArgumentException", InvalidArgumentException.fields) {};
export class NotAuthorizedExceptionError extends Schema.TaggedError<NotAuthorizedExceptionError>()("NotAuthorizedException", NotAuthorizedException.fields) {};
export class InvalidClientExceptionError extends Schema.TaggedError<InvalidClientExceptionError>()("InvalidClientException", InvalidClientException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class SessionExpiredExceptionError extends Schema.TaggedError<SessionExpiredExceptionError>()("SessionExpiredException", SessionExpiredException.fields) {};

//# Operations
export const sendAlexaOfferToMaster = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-12-04", uri: "/v1/send-alexa-offer-to-master", method: "POST", sdkId: "Kinesis Video Signaling", sigV4ServiceName: "kinesisvideo", name: "AWSAcuitySignalingService.SendAlexaOfferToMaster" }, SendAlexaOfferToMasterRequest, SendAlexaOfferToMasterResponse, [ClientLimitExceededExceptionError, InvalidArgumentExceptionError, NotAuthorizedExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getIceServerConfig = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-12-04", uri: "/v1/get-ice-server-config", method: "POST", sdkId: "Kinesis Video Signaling", sigV4ServiceName: "kinesisvideo", name: "AWSAcuitySignalingService.GetIceServerConfig" }, GetIceServerConfigRequest, GetIceServerConfigResponse, [ClientLimitExceededExceptionError, InvalidArgumentExceptionError, InvalidClientExceptionError, NotAuthorizedExceptionError, ResourceNotFoundExceptionError, SessionExpiredExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

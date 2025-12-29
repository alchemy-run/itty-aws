import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const GetIceServerConfigRequest = Schema.Struct({ChannelARN: Schema.String, ClientId: Schema.optional(Schema.String), Service: Schema.optional(Schema.String), Username: Schema.optional(Schema.String)});
export const SendAlexaOfferToMasterRequest = Schema.Struct({ChannelARN: Schema.String, SenderClientId: Schema.String, MessagePayload: Schema.String});
export const SendAlexaOfferToMasterResponse = Schema.Struct({Answer: Schema.optional(Schema.String)});
export const Uris = Schema.Array(Schema.String);
export const IceServer = Schema.Struct({Uris: Schema.optional(Uris), Username: Schema.optional(Schema.String), Password: Schema.optional(Schema.String), Ttl: Schema.optional(Schema.Number)});
export const IceServerList = Schema.Array(IceServer);
export const GetIceServerConfigResponse = Schema.Struct({IceServerList: Schema.optional(IceServerList)});
export const ClientLimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InvalidArgumentException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const NotAuthorizedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InvalidClientException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const SessionExpiredException = Schema.Struct({message: Schema.optional(Schema.String)});
export const SendAlexaOfferToMaster = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-12-04", uri: "/v1/send-alexa-offer-to-master", method: "POST", sdkId: "Kinesis Video Signaling", sigV4ServiceName: "kinesisvideo", name: "AWSAcuitySignalingService.SendAlexaOfferToMaster" }, SendAlexaOfferToMasterRequest, SendAlexaOfferToMasterResponse, Schema.Union(ErrorAnnotation("ClientLimitExceededException", ClientLimitExceededException), ErrorAnnotation("InvalidArgumentException", InvalidArgumentException), ErrorAnnotation("NotAuthorizedException", NotAuthorizedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const GetIceServerConfig = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-12-04", uri: "/v1/get-ice-server-config", method: "POST", sdkId: "Kinesis Video Signaling", sigV4ServiceName: "kinesisvideo", name: "AWSAcuitySignalingService.GetIceServerConfig" }, GetIceServerConfigRequest, GetIceServerConfigResponse, Schema.Union(ErrorAnnotation("ClientLimitExceededException", ClientLimitExceededException), ErrorAnnotation("InvalidArgumentException", InvalidArgumentException), ErrorAnnotation("InvalidClientException", InvalidClientException), ErrorAnnotation("NotAuthorizedException", NotAuthorizedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("SessionExpiredException", SessionExpiredException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const GetIceServerConfigRequest = Schema.Struct({ChannelARN: Schema.String, ClientId: Schema.optional(Schema.String), Service: Schema.optional(Schema.String), Username: Schema.optional(Schema.String)})
const SendAlexaOfferToMasterRequest = Schema.Struct({ChannelARN: Schema.String, SenderClientId: Schema.String, MessagePayload: Schema.String})
const SendAlexaOfferToMasterResponse = Schema.Struct({Answer: Schema.optional(Schema.String)})
const Uris = Schema.Array(Schema.String)
const IceServer = Schema.Struct({Uris: Schema.optional(Uris), Username: Schema.optional(Schema.String), Password: Schema.optional(Schema.String), Ttl: Schema.optional(Schema.Number)})
const IceServerList = Schema.Array(IceServer)
const GetIceServerConfigResponse = Schema.Struct({IceServerList: Schema.optional(IceServerList)})
const ClientLimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)})
const InvalidArgumentException = Schema.Struct({Message: Schema.optional(Schema.String)})
const NotAuthorizedException = Schema.Struct({Message: Schema.optional(Schema.String)})
const InvalidClientException = Schema.Struct({message: Schema.optional(Schema.String)})
const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const SendAlexaOfferToMaster = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/v1/send-alexa-offer-to-master", method: "POST", sdkId: "Kinesis Video Signaling", sigV4ServiceName: "kinesisvideo", name: "SendAlexaOfferToMaster" }, SendAlexaOfferToMasterRequest, SendAlexaOfferToMasterResponse, Schema.Union(ErrorAnnotation("ClientLimitExceededException", ClientLimitExceededException), ErrorAnnotation("InvalidArgumentException", InvalidArgumentException), ErrorAnnotation("NotAuthorizedException", NotAuthorizedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const SessionExpiredException = Schema.Struct({message: Schema.optional(Schema.String)})
export const GetIceServerConfig = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/v1/get-ice-server-config", method: "POST", sdkId: "Kinesis Video Signaling", sigV4ServiceName: "kinesisvideo", name: "GetIceServerConfig" }, GetIceServerConfigRequest, GetIceServerConfigResponse, Schema.Union(ErrorAnnotation("ClientLimitExceededException", ClientLimitExceededException), ErrorAnnotation("InvalidArgumentException", InvalidArgumentException), ErrorAnnotation("InvalidClientException", InvalidClientException), ErrorAnnotation("NotAuthorizedException", NotAuthorizedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("SessionExpiredException", SessionExpiredException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

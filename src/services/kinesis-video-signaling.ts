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

//# Errors
export class ClientLimitExceededException extends S.TaggedError<ClientLimitExceededException>()("ClientLimitExceededException", {}) {};
export class InvalidArgumentException extends S.TaggedError<InvalidArgumentException>()("InvalidArgumentException", {}) {};
export class NotAuthorizedException extends S.TaggedError<NotAuthorizedException>()("NotAuthorizedException", {Message: S.optional(S.String)}) {};
export class InvalidClientException extends S.TaggedError<InvalidClientException>()("InvalidClientException", {message: S.optional(S.String)}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class SessionExpiredException extends S.TaggedError<SessionExpiredException>()("SessionExpiredException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * This API allows you to connect WebRTC-enabled devices with Alexa display devices. When
 * invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer.
 * The offer is delivered as soon as the master is connected to the specified signaling
 * channel. This API returns the SDP answer from the connected master. If the master is not
 * connected to the signaling channel, redelivery requests are made until the message
 * expires.
 */export const sendAlexaOfferToMaster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-04", uri: "/v1/send-alexa-offer-to-master", sdkId: "Kinesis Video Signaling", sigV4ServiceName: "kinesisvideo", name: "AWSAcuitySignalingService.SendAlexaOfferToMaster" }, SendAlexaOfferToMasterRequest, SendAlexaOfferToMasterResponse, [ClientLimitExceededException, InvalidArgumentException, NotAuthorizedException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the Interactive Connectivity Establishment (ICE) server configuration
 * information, including URIs, username, and password which can be used to configure the
 * WebRTC connection. The ICE component uses this configuration information to setup the
 * WebRTC connection, including authenticating with the Traversal Using Relays around NAT
 * (TURN) relay server.
 * 
 * 
 * TURN is a protocol that is used to improve the connectivity of peer-to-peer
 * applications. By providing a cloud-based relay service, TURN ensures that a connection
 * can be established even when one or more peers are incapable of a direct peer-to-peer
 * connection. For more information, see A REST API For
 * Access To TURN Services.
 * 
 * 
 * You can invoke this API to establish a fallback mechanism in case either of the peers
 * is unable to establish a direct peer-to-peer connection over a signaling channel. You
 * must specify either a signaling channel ARN or the client ID in order to invoke this
 * API.
 */export const getIceServerConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-04", uri: "/v1/get-ice-server-config", sdkId: "Kinesis Video Signaling", sigV4ServiceName: "kinesisvideo", name: "AWSAcuitySignalingService.GetIceServerConfig" }, GetIceServerConfigRequest, GetIceServerConfigResponse, [ClientLimitExceededException, InvalidArgumentException, InvalidClientException, NotAuthorizedException, ResourceNotFoundException, SessionExpiredException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

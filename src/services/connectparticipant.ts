import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const AttachmentIdList = S.Array(S.String);
export const ConnectionTypeList = S.Array(S.String);
export class CancelParticipantAuthenticationRequest extends S.Class<CancelParticipantAuthenticationRequest>("CancelParticipantAuthenticationRequest")({SessionId: S.String, ConnectionToken: H.Header("X-Amz-Bearer")}) {}
export class CancelParticipantAuthenticationResponse extends S.Class<CancelParticipantAuthenticationResponse>("CancelParticipantAuthenticationResponse")({}) {}
export class CompleteAttachmentUploadRequest extends S.Class<CompleteAttachmentUploadRequest>("CompleteAttachmentUploadRequest")({AttachmentIds: AttachmentIdList, ClientToken: S.String, ConnectionToken: H.Header("X-Amz-Bearer")}) {}
export class CompleteAttachmentUploadResponse extends S.Class<CompleteAttachmentUploadResponse>("CompleteAttachmentUploadResponse")({}) {}
export class CreateParticipantConnectionRequest extends S.Class<CreateParticipantConnectionRequest>("CreateParticipantConnectionRequest")({Type: S.optional(ConnectionTypeList), ParticipantToken: H.Header("X-Amz-Bearer"), ConnectParticipant: S.optional(S.Boolean)}) {}
export class DescribeViewRequest extends S.Class<DescribeViewRequest>("DescribeViewRequest")({ViewToken: S.String, ConnectionToken: H.Header("X-Amz-Bearer")}) {}
export class DisconnectParticipantRequest extends S.Class<DisconnectParticipantRequest>("DisconnectParticipantRequest")({ClientToken: S.optional(S.String), ConnectionToken: H.Header("X-Amz-Bearer")}) {}
export class DisconnectParticipantResponse extends S.Class<DisconnectParticipantResponse>("DisconnectParticipantResponse")({}) {}
export class GetAttachmentRequest extends S.Class<GetAttachmentRequest>("GetAttachmentRequest")({AttachmentId: S.String, ConnectionToken: H.Header("X-Amz-Bearer"), UrlExpiryInSeconds: S.optional(S.Number)}) {}
export class GetAuthenticationUrlRequest extends S.Class<GetAuthenticationUrlRequest>("GetAuthenticationUrlRequest")({SessionId: S.String, RedirectUri: S.String, ConnectionToken: H.Header("X-Amz-Bearer")}) {}
export class SendEventRequest extends S.Class<SendEventRequest>("SendEventRequest")({ContentType: S.String, Content: S.optional(S.String), ClientToken: S.optional(S.String), ConnectionToken: H.Header("X-Amz-Bearer")}) {}
export class SendMessageRequest extends S.Class<SendMessageRequest>("SendMessageRequest")({ContentType: S.String, Content: S.String, ClientToken: S.optional(S.String), ConnectionToken: H.Header("X-Amz-Bearer")}) {}
export class StartAttachmentUploadRequest extends S.Class<StartAttachmentUploadRequest>("StartAttachmentUploadRequest")({ContentType: S.String, AttachmentSizeInBytes: S.Number, AttachmentName: S.String, ClientToken: S.String, ConnectionToken: H.Header("X-Amz-Bearer")}) {}
export class StartPosition extends S.Class<StartPosition>("StartPosition")({Id: S.optional(S.String), AbsoluteTime: S.optional(S.String), MostRecent: S.optional(S.Number)}) {}
export class GetAttachmentResponse extends S.Class<GetAttachmentResponse>("GetAttachmentResponse")({Url: S.optional(S.String), UrlExpiry: S.optional(S.String), AttachmentSizeInBytes: S.Number}) {}
export class GetAuthenticationUrlResponse extends S.Class<GetAuthenticationUrlResponse>("GetAuthenticationUrlResponse")({AuthenticationUrl: S.optional(S.String)}) {}
export class GetTranscriptRequest extends S.Class<GetTranscriptRequest>("GetTranscriptRequest")({ContactId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ScanDirection: S.optional(S.String), SortOrder: S.optional(S.String), StartPosition: S.optional(StartPosition), ConnectionToken: H.Header("X-Amz-Bearer")}) {}
export class SendEventResponse extends S.Class<SendEventResponse>("SendEventResponse")({Id: S.optional(S.String), AbsoluteTime: S.optional(S.String)}) {}
export class Websocket extends S.Class<Websocket>("Websocket")({Url: S.optional(S.String), ConnectionExpiry: S.optional(S.String)}) {}
export class ConnectionCredentials extends S.Class<ConnectionCredentials>("ConnectionCredentials")({ConnectionToken: S.optional(S.String), Expiry: S.optional(S.String)}) {}
export class MessageProcessingMetadata extends S.Class<MessageProcessingMetadata>("MessageProcessingMetadata")({MessageProcessingStatus: S.optional(S.String)}) {}
export const ViewActions = S.Array(S.String);
export class SendMessageResponse extends S.Class<SendMessageResponse>("SendMessageResponse")({Id: S.optional(S.String), AbsoluteTime: S.optional(S.String), MessageMetadata: S.optional(MessageProcessingMetadata)}) {}
export class Attendee extends S.Class<Attendee>("Attendee")({AttendeeId: S.optional(S.String), JoinToken: S.optional(S.String)}) {}
export class ViewContent extends S.Class<ViewContent>("ViewContent")({InputSchema: S.optional(S.String), Template: S.optional(S.String), Actions: S.optional(ViewActions)}) {}
export const UploadMetadataSignedHeaders = S.Record({key: S.String, value: S.String});
export class View extends S.Class<View>("View")({Id: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String), Version: S.optional(S.Number), Content: S.optional(ViewContent)}) {}
export class UploadMetadata extends S.Class<UploadMetadata>("UploadMetadata")({Url: S.optional(S.String), UrlExpiry: S.optional(S.String), HeadersToInclude: S.optional(UploadMetadataSignedHeaders)}) {}
export class WebRTCMediaPlacement extends S.Class<WebRTCMediaPlacement>("WebRTCMediaPlacement")({AudioHostUrl: S.optional(S.String), AudioFallbackUrl: S.optional(S.String), SignalingUrl: S.optional(S.String), EventIngestionUrl: S.optional(S.String)}) {}
export class DescribeViewResponse extends S.Class<DescribeViewResponse>("DescribeViewResponse")({View: S.optional(View)}) {}
export class StartAttachmentUploadResponse extends S.Class<StartAttachmentUploadResponse>("StartAttachmentUploadResponse")({AttachmentId: S.optional(S.String), UploadMetadata: S.optional(UploadMetadata)}) {}
export class AttachmentItem extends S.Class<AttachmentItem>("AttachmentItem")({ContentType: S.optional(S.String), AttachmentId: S.optional(S.String), AttachmentName: S.optional(S.String), Status: S.optional(S.String)}) {}
export const Attachments = S.Array(AttachmentItem);
export class AudioFeatures extends S.Class<AudioFeatures>("AudioFeatures")({EchoReduction: S.optional(S.String)}) {}
export class MeetingFeaturesConfiguration extends S.Class<MeetingFeaturesConfiguration>("MeetingFeaturesConfiguration")({Audio: S.optional(AudioFeatures)}) {}
export class Receipt extends S.Class<Receipt>("Receipt")({DeliveredTimestamp: S.optional(S.String), ReadTimestamp: S.optional(S.String), RecipientParticipantId: S.optional(S.String)}) {}
export const Receipts = S.Array(Receipt);
export class WebRTCMeeting extends S.Class<WebRTCMeeting>("WebRTCMeeting")({MediaPlacement: S.optional(WebRTCMediaPlacement), MeetingFeatures: S.optional(MeetingFeaturesConfiguration), MeetingId: S.optional(S.String)}) {}
export class MessageMetadata extends S.Class<MessageMetadata>("MessageMetadata")({MessageId: S.optional(S.String), Receipts: S.optional(Receipts), MessageProcessingStatus: S.optional(S.String)}) {}
export class WebRTCConnection extends S.Class<WebRTCConnection>("WebRTCConnection")({Attendee: S.optional(Attendee), Meeting: S.optional(WebRTCMeeting)}) {}
export class Item extends S.Class<Item>("Item")({AbsoluteTime: S.optional(S.String), Content: S.optional(S.String), ContentType: S.optional(S.String), Id: S.optional(S.String), Type: S.optional(S.String), ParticipantId: S.optional(S.String), DisplayName: S.optional(S.String), ParticipantRole: S.optional(S.String), Attachments: S.optional(Attachments), MessageMetadata: S.optional(MessageMetadata), RelatedContactId: S.optional(S.String), ContactId: S.optional(S.String)}) {}
export const Transcript = S.Array(Item);
export class CreateParticipantConnectionResponse extends S.Class<CreateParticipantConnectionResponse>("CreateParticipantConnectionResponse")({Websocket: S.optional(Websocket), ConnectionCredentials: S.optional(ConnectionCredentials), WebRTCConnection: S.optional(WebRTCConnection)}) {}
export class GetTranscriptResponse extends S.Class<GetTranscriptResponse>("GetTranscriptResponse")({InitialContactId: S.optional(S.String), Transcript: S.optional(Transcript), NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {Message: S.String}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {Message: S.String}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {Message: S.optional(S.String), ResourceId: S.optional(S.String), ResourceType: S.optional(S.String)}) {};

//# Operations
/**
 * Provides a pre-signed URL for download of a completed attachment. This is an
 * asynchronous API for use with active contacts.
 * 
 * 
 * For security recommendations, see Amazon Connect Chat security best practices.
 * 
 * 
 * 
 * 
 * 
 * - The participant role `CUSTOM_BOT` is not permitted to access
 * attachments customers may upload. An `AccessDeniedException` can
 * indicate that the participant may be a CUSTOM_BOT, and it doesn't have
 * access to attachments.
 * 
 * 
 * 
 * - `ConnectionToken` is used for invoking this API instead of
 * `ParticipantToken`.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * The Amazon Connect Participant Service APIs do not use Signature Version 4
 * authentication.
 */export const getAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-07", uri: "/participant/attachment", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.GetAttachment" }, GetAttachmentRequest, GetAttachmentResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the AuthenticationUrl for the current authentication session for the
 * AuthenticateCustomer flow block.
 * 
 * 
 * For security recommendations, see Amazon Connect Chat security best practices.
 * 
 * 
 * 
 * 
 * 
 * - This API can only be called within one minute of receiving the
 * authenticationInitiated event.
 * 
 * 
 * 
 * - The current supported channel is chat. This API is not supported for Apple
 * Messages for Business, WhatsApp, or SMS chats.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * `ConnectionToken` is used for invoking this API instead of
 * `ParticipantToken`.
 * 
 * 
 * 
 * 
 * The Amazon Connect Participant Service APIs do not use Signature Version 4
 * authentication.
 */export const getAuthenticationUrl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-07", uri: "/participant/authentication-url", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.GetAuthenticationUrl" }, GetAuthenticationUrlRequest, GetAuthenticationUrlResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `application/vnd.amazonaws.connect.event.connection.acknowledged`
 * ContentType is no longer maintained since December 31, 2024. This event has been
 * migrated to the CreateParticipantConnection API using the
 * `ConnectParticipant` field.
 * 
 * 
 * 
 * 
 * Sends an event. Message receipts are not supported when there are more than two active
 * participants in the chat. Using the SendEvent API for message receipts when a supervisor
 * is barged-in will result in a conflict exception.
 * 
 * 
 * For security recommendations, see Amazon Connect Chat security best practices.
 * 
 * 
 * 
 * 
 * 
 * `ConnectionToken` is used for invoking this API instead of
 * `ParticipantToken`.
 * 
 * 
 * 
 * 
 * The Amazon Connect Participant Service APIs do not use Signature Version 4
 * authentication.
 */export const sendEvent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-07", uri: "/participant/event", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.SendEvent" }, SendEventRequest, SendEventResponse, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels the authentication session. The opted out branch of the Authenticate Customer
 * flow block will be taken.
 * 
 * 
 * 
 * 
 * The current supported channel is chat. This API is not supported for Apple
 * Messages for Business, WhatsApp, or SMS chats.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * `ConnectionToken` is used for invoking this API instead of
 * `ParticipantToken`.
 * 
 * 
 * 
 * 
 * The Amazon Connect Participant Service APIs do not use Signature Version 4
 * authentication.
 */export const cancelParticipantAuthentication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-07", uri: "/participant/cancel-authentication", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.CancelParticipantAuthentication" }, CancelParticipantAuthenticationRequest, CancelParticipantAuthenticationResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows you to confirm that the attachment has been uploaded using the pre-signed URL
 * provided in StartAttachmentUpload API. A conflict exception is thrown when an attachment
 * with that identifier is already being uploaded.
 * 
 * 
 * For security recommendations, see Amazon Connect Chat security best practices.
 * 
 * 
 * 
 * 
 * 
 * `ConnectionToken` is used for invoking this API instead of
 * `ParticipantToken`.
 * 
 * 
 * 
 * 
 * The Amazon Connect Participant Service APIs do not use Signature Version 4
 * authentication.
 */export const completeAttachmentUpload = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-07", uri: "/participant/complete-attachment-upload", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.CompleteAttachmentUpload" }, CompleteAttachmentUploadRequest, CompleteAttachmentUploadResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disconnects a participant.
 * 
 * 
 * For security recommendations, see Amazon Connect Chat security best practices.
 * 
 * 
 * 
 * 
 * 
 * `ConnectionToken` is used for invoking this API instead of
 * `ParticipantToken`.
 * 
 * 
 * 
 * 
 * The Amazon Connect Participant Service APIs do not use Signature Version 4
 * authentication.
 */export const disconnectParticipant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-07", uri: "/participant/disconnect", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.DisconnectParticipant" }, DisconnectParticipantRequest, DisconnectParticipantResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends a message.
 * 
 * 
 * For security recommendations, see Amazon Connect Chat security best practices.
 * 
 * 
 * 
 * 
 * 
 * `ConnectionToken` is used for invoking this API instead of
 * `ParticipantToken`.
 * 
 * 
 * 
 * 
 * The Amazon Connect Participant Service APIs do not use Signature Version 4
 * authentication.
 */export const sendMessage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-07", uri: "/participant/message", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.SendMessage" }, SendMessageRequest, SendMessageResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides a pre-signed Amazon S3 URL in response for uploading the file directly to
 * S3.
 * 
 * 
 * For security recommendations, see Amazon Connect Chat security best practices.
 * 
 * 
 * 
 * 
 * 
 * `ConnectionToken` is used for invoking this API instead of
 * `ParticipantToken`.
 * 
 * 
 * 
 * 
 * The Amazon Connect Participant Service APIs do not use Signature Version 4
 * authentication.
 */export const startAttachmentUpload = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-07", uri: "/participant/start-attachment-upload", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.StartAttachmentUpload" }, StartAttachmentUploadRequest, StartAttachmentUploadResponse, [AccessDeniedException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the view for the specified view token.
 * 
 * 
 * For security recommendations, see Amazon Connect Chat security best practices.
 */export const describeView = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-07", uri: "/participant/views/{ViewToken}", method: "GET", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.DescribeView" }, DescribeViewRequest, DescribeViewResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates the participant's connection.
 * 
 * 
 * For security recommendations, see Amazon Connect Chat security best practices.
 * 
 * 
 * For WebRTC security recommendations, see Amazon Connect WebRTC security best practices.
 * 
 * 
 * 
 * 
 * 
 * `ParticipantToken` is used for invoking this API instead of
 * `ConnectionToken`.
 * 
 * 
 * 
 * 
 * The participant token is valid for the lifetime of the participant – until they are
 * part of a contact. For WebRTC participants, if they leave or are disconnected for 60
 * seconds, a new participant needs to be created using the CreateParticipant API.
 * 
 * 
 * 
 * **For `WEBSOCKET` Type**:
 * 
 * 
 * The response URL for has a connect expiry timeout of 100s. Clients must manually
 * connect to the returned websocket URL and subscribe to the desired topic.
 * 
 * 
 * For chat, you need to publish the following on the established websocket
 * connection:
 * 
 * 
 * 
 * `{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}`
 * 
 * 
 * 
 * Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter,
 * clients need to call this API again to obtain a new websocket URL and perform the same
 * steps as before.
 * 
 * 
 * The expiry time for the connection token is different than the
 * `ChatDurationInMinutes`. Expiry time for the connection token is 1
 * day.
 * 
 * 
 * 
 * **For `WEBRTC_CONNECTION` Type**:
 * 
 * 
 * The response includes connection data required for the client application to join the
 * call using the Amazon Chime SDK client libraries. The WebRTCConnection response contains
 * Meeting and Attendee information needed to establish the media connection.
 * 
 * 
 * The attendee join token in WebRTCConnection response is valid for the lifetime of the
 * participant in the call. If a participant leaves or is disconnected for 60 seconds,
 * their participant credentials will no longer be valid, and a new participant will need
 * to be created to rejoin the call.
 * 
 * 
 * 
 * **Message streaming support**: This API can also be used
 * together with the StartContactStreaming API to create a participant connection for chat
 * contacts that are not using a websocket. For more information about message streaming,
 * Enable real-time chat
 * message streaming in the Amazon Connect Administrator
 * Guide.
 * 
 * 
 * 
 * **Multi-user web, in-app, video calling support**:
 * 
 * 
 * For WebRTC calls, this API is used in conjunction with the CreateParticipant API to
 * enable multi-party calling. The StartWebRTCContact API creates the initial contact and
 * routes it to an agent, while CreateParticipant adds additional participants to the
 * ongoing call. For more information about multi-party WebRTC calls, see Enable multi-user web, in-app, and video calling in the Amazon Connect
 * Administrator Guide.
 * 
 * 
 * 
 * **Feature specifications**: For information about feature
 * specifications, such as the allowed number of open websocket connections per participant
 * or maximum number of WebRTC participants, see Feature specifications in the Amazon Connect Administrator
 * Guide.
 * 
 * 
 * 
 * 
 * The Amazon Connect Participant Service APIs do not use Signature Version 4
 * authentication.
 */export const createParticipantConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-07", uri: "/participant/connection", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.CreateParticipantConnection" }, CreateParticipantConnectionRequest, CreateParticipantConnectionResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a transcript of the session, including details about any attachments. For
 * information about accessing past chat contact transcripts for a persistent chat, see
 * Enable persistent chat.
 * 
 * 
 * For security recommendations, see Amazon Connect Chat security best practices.
 * 
 * 
 * If you have a process that consumes events in the transcript of an chat that has
 * ended, note that chat transcripts contain the following event content types if the event
 * has occurred during the chat session:
 * 
 * 
 * 
 * - `application/vnd.amazonaws.connect.event.participant.invited`
 * 
 * 
 * 
 * 
 * - `application/vnd.amazonaws.connect.event.participant.joined`
 * 
 * 
 * 
 * 
 * - `application/vnd.amazonaws.connect.event.participant.left`
 * 
 * 
 * 
 * 
 * - `application/vnd.amazonaws.connect.event.chat.ended`
 * 
 * 
 * 
 * 
 * - `application/vnd.amazonaws.connect.event.transfer.succeeded`
 * 
 * 
 * 
 * 
 * - `application/vnd.amazonaws.connect.event.transfer.failed`
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * `ConnectionToken` is used for invoking this API instead of
 * `ParticipantToken`.
 * 
 * 
 * 
 * 
 * The Amazon Connect Participant Service APIs do not use Signature Version 4
 * authentication.
 */export const getTranscript = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-07", uri: "/participant/transcript", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.GetTranscript" }, GetTranscriptRequest, GetTranscriptResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

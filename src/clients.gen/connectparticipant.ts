import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const AttachmentIdList = Schema.Array(Schema.String);
export const ConnectionTypeList = Schema.Array(Schema.String);
export const CancelParticipantAuthenticationRequest = Schema.Struct({SessionId: Schema.String, ConnectionToken: Header("X-Amz-Bearer")});
export const CancelParticipantAuthenticationResponse = Schema.Struct({});
export const CompleteAttachmentUploadRequest = Schema.Struct({AttachmentIds: AttachmentIdList, ClientToken: Schema.String, ConnectionToken: Header("X-Amz-Bearer")});
export const CompleteAttachmentUploadResponse = Schema.Struct({});
export const CreateParticipantConnectionRequest = Schema.Struct({Type: Schema.optional(ConnectionTypeList), ParticipantToken: Header("X-Amz-Bearer"), ConnectParticipant: Schema.optional(Schema.Boolean)});
export const DescribeViewRequest = Schema.Struct({ViewToken: Schema.String, ConnectionToken: Header("X-Amz-Bearer")});
export const DisconnectParticipantRequest = Schema.Struct({ClientToken: Schema.optional(Schema.String), ConnectionToken: Header("X-Amz-Bearer")});
export const DisconnectParticipantResponse = Schema.Struct({});
export const GetAttachmentRequest = Schema.Struct({AttachmentId: Schema.String, ConnectionToken: Header("X-Amz-Bearer"), UrlExpiryInSeconds: Schema.optional(Schema.Number)});
export const GetAuthenticationUrlRequest = Schema.Struct({SessionId: Schema.String, RedirectUri: Schema.String, ConnectionToken: Header("X-Amz-Bearer")});
export const SendEventRequest = Schema.Struct({ContentType: Schema.String, Content: Schema.optional(Schema.String), ClientToken: Schema.optional(Schema.String), ConnectionToken: Header("X-Amz-Bearer")});
export const SendMessageRequest = Schema.Struct({ContentType: Schema.String, Content: Schema.String, ClientToken: Schema.optional(Schema.String), ConnectionToken: Header("X-Amz-Bearer")});
export const StartAttachmentUploadRequest = Schema.Struct({ContentType: Schema.String, AttachmentSizeInBytes: Schema.Number, AttachmentName: Schema.String, ClientToken: Schema.String, ConnectionToken: Header("X-Amz-Bearer")});
export const StartPosition = Schema.Struct({Id: Schema.optional(Schema.String), AbsoluteTime: Schema.optional(Schema.String), MostRecent: Schema.optional(Schema.Number)});
export const AccessDeniedException = Schema.Struct({Message: Schema.String});
export const ConflictException = Schema.Struct({Message: Schema.String});
export const InternalServerException = Schema.Struct({Message: Schema.String});
export const GetAttachmentResponse = Schema.Struct({Url: Schema.optional(Schema.String), UrlExpiry: Schema.optional(Schema.String), AttachmentSizeInBytes: Schema.Number});
export const GetAuthenticationUrlResponse = Schema.Struct({AuthenticationUrl: Schema.optional(Schema.String)});
export const GetTranscriptRequest = Schema.Struct({ContactId: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String), ScanDirection: Schema.optional(Schema.String), SortOrder: Schema.optional(Schema.String), StartPosition: Schema.optional(StartPosition), ConnectionToken: Header("X-Amz-Bearer")});
export const SendEventResponse = Schema.Struct({Id: Schema.optional(Schema.String), AbsoluteTime: Schema.optional(Schema.String)});
export const SendMessageResponse = Schema.Struct({Id: Schema.optional(Schema.String), AbsoluteTime: Schema.optional(Schema.String)});
export const Websocket = Schema.Struct({Url: Schema.optional(Schema.String), ConnectionExpiry: Schema.optional(Schema.String)});
export const ConnectionCredentials = Schema.Struct({ConnectionToken: Schema.optional(Schema.String), Expiry: Schema.optional(Schema.String)});
export const ViewActions = Schema.Array(Schema.String);
export const ThrottlingException = Schema.Struct({Message: Schema.String});
export const ServiceQuotaExceededException = Schema.Struct({Message: Schema.String});
export const ValidationException = Schema.Struct({Message: Schema.String});
export const Attendee = Schema.Struct({AttendeeId: Schema.optional(Schema.String), JoinToken: Schema.optional(Schema.String)});
export const ViewContent = Schema.Struct({InputSchema: Schema.optional(Schema.String), Template: Schema.optional(Schema.String), Actions: Schema.optional(ViewActions)});
export const UploadMetadataSignedHeaders = Schema.Record({key: Schema.String, value: Schema.String});
export const View = Schema.Struct({Id: Schema.optional(Schema.String), Arn: Schema.optional(Schema.String), Name: Schema.optional(Schema.String), Version: Schema.optional(Schema.Number), Content: Schema.optional(ViewContent)});
export const UploadMetadata = Schema.Struct({Url: Schema.optional(Schema.String), UrlExpiry: Schema.optional(Schema.String), HeadersToInclude: Schema.optional(UploadMetadataSignedHeaders)});
export const WebRTCMediaPlacement = Schema.Struct({AudioHostUrl: Schema.optional(Schema.String), AudioFallbackUrl: Schema.optional(Schema.String), SignalingUrl: Schema.optional(Schema.String), EventIngestionUrl: Schema.optional(Schema.String)});
export const DescribeViewResponse = Schema.Struct({View: Schema.optional(View)});
export const StartAttachmentUploadResponse = Schema.Struct({AttachmentId: Schema.optional(Schema.String), UploadMetadata: Schema.optional(UploadMetadata)});
export const AttachmentItem = Schema.Struct({ContentType: Schema.optional(Schema.String), AttachmentId: Schema.optional(Schema.String), AttachmentName: Schema.optional(Schema.String), Status: Schema.optional(Schema.String)});
export const Attachments = Schema.Array(AttachmentItem);
export const AudioFeatures = Schema.Struct({EchoReduction: Schema.optional(Schema.String)});
export const MeetingFeaturesConfiguration = Schema.Struct({Audio: Schema.optional(AudioFeatures)});
export const Receipt = Schema.Struct({DeliveredTimestamp: Schema.optional(Schema.String), ReadTimestamp: Schema.optional(Schema.String), RecipientParticipantId: Schema.optional(Schema.String)});
export const Receipts = Schema.Array(Receipt);
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String), ResourceId: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String)});
export const WebRTCMeeting = Schema.Struct({MediaPlacement: Schema.optional(WebRTCMediaPlacement), MeetingFeatures: Schema.optional(MeetingFeaturesConfiguration), MeetingId: Schema.optional(Schema.String)});
export const MessageMetadata = Schema.Struct({MessageId: Schema.optional(Schema.String), Receipts: Schema.optional(Receipts)});
export const WebRTCConnection = Schema.Struct({Attendee: Schema.optional(Attendee), Meeting: Schema.optional(WebRTCMeeting)});
export const Item = Schema.Struct({AbsoluteTime: Schema.optional(Schema.String), Content: Schema.optional(Schema.String), ContentType: Schema.optional(Schema.String), Id: Schema.optional(Schema.String), Type: Schema.optional(Schema.String), ParticipantId: Schema.optional(Schema.String), DisplayName: Schema.optional(Schema.String), ParticipantRole: Schema.optional(Schema.String), Attachments: Schema.optional(Attachments), MessageMetadata: Schema.optional(MessageMetadata), RelatedContactId: Schema.optional(Schema.String), ContactId: Schema.optional(Schema.String)});
export const Transcript = Schema.Array(Item);
export const CreateParticipantConnectionResponse = Schema.Struct({Websocket: Schema.optional(Websocket), ConnectionCredentials: Schema.optional(ConnectionCredentials), WebRTCConnection: Schema.optional(WebRTCConnection)});
export const GetTranscriptResponse = Schema.Struct({InitialContactId: Schema.optional(Schema.String), Transcript: Schema.optional(Transcript), NextToken: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};

//# Operations
export const getAttachment = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-09-07", uri: "/participant/attachment", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.GetAttachment" }, GetAttachmentRequest, GetAttachmentResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getAuthenticationUrl = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-09-07", uri: "/participant/authentication-url", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.GetAuthenticationUrl" }, GetAuthenticationUrlRequest, GetAuthenticationUrlResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const sendEvent = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-09-07", uri: "/participant/event", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.SendEvent" }, SendEventRequest, SendEventResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const sendMessage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-09-07", uri: "/participant/message", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.SendMessage" }, SendMessageRequest, SendMessageResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const cancelParticipantAuthentication = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-09-07", uri: "/participant/cancel-authentication", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.CancelParticipantAuthentication" }, CancelParticipantAuthenticationRequest, CancelParticipantAuthenticationResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const completeAttachmentUpload = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-09-07", uri: "/participant/complete-attachment-upload", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.CompleteAttachmentUpload" }, CompleteAttachmentUploadRequest, CompleteAttachmentUploadResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const disconnectParticipant = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-09-07", uri: "/participant/disconnect", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.DisconnectParticipant" }, DisconnectParticipantRequest, DisconnectParticipantResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const startAttachmentUpload = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-09-07", uri: "/participant/start-attachment-upload", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.StartAttachmentUpload" }, StartAttachmentUploadRequest, StartAttachmentUploadResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const describeView = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-09-07", uri: "/participant/views/{ViewToken}", method: "GET", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.DescribeView" }, DescribeViewRequest, DescribeViewResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createParticipantConnection = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-09-07", uri: "/participant/connection", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.CreateParticipantConnection" }, CreateParticipantConnectionRequest, CreateParticipantConnectionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getTranscript = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-09-07", uri: "/participant/transcript", method: "POST", sdkId: "ConnectParticipant", sigV4ServiceName: "execute-api", name: "AmazonConnectParticipantServiceLambda.GetTranscript" }, GetTranscriptRequest, GetTranscriptResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

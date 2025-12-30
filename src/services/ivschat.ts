import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ChatTokenCapabilities = S.Array(S.String);
export const LoggingConfigurationIdentifierList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class DeleteLoggingConfigurationRequest extends S.Class<DeleteLoggingConfigurationRequest>("DeleteLoggingConfigurationRequest")({identifier: S.String}) {}
export class DeleteMessageRequest extends S.Class<DeleteMessageRequest>("DeleteMessageRequest")({roomIdentifier: S.String, id: S.String, reason: S.optional(S.String)}) {}
export class DeleteRoomRequest extends S.Class<DeleteRoomRequest>("DeleteRoomRequest")({identifier: S.String}) {}
export class DisconnectUserRequest extends S.Class<DisconnectUserRequest>("DisconnectUserRequest")({roomIdentifier: S.String, userId: S.String, reason: S.optional(S.String)}) {}
export class DisconnectUserResponse extends S.Class<DisconnectUserResponse>("DisconnectUserResponse")({}) {}
export class GetLoggingConfigurationRequest extends S.Class<GetLoggingConfigurationRequest>("GetLoggingConfigurationRequest")({identifier: S.String}) {}
export class GetRoomRequest extends S.Class<GetRoomRequest>("GetRoomRequest")({identifier: S.String}) {}
export class ListLoggingConfigurationsRequest extends S.Class<ListLoggingConfigurationsRequest>("ListLoggingConfigurationsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListRoomsRequest extends S.Class<ListRoomsRequest>("ListRoomsRequest")({name: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), messageReviewHandlerUri: S.optional(S.String), loggingConfigurationIdentifier: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class S3DestinationConfiguration extends S.Class<S3DestinationConfiguration>("S3DestinationConfiguration")({bucketName: S.String}) {}
export class CloudWatchLogsDestinationConfiguration extends S.Class<CloudWatchLogsDestinationConfiguration>("CloudWatchLogsDestinationConfiguration")({logGroupName: S.String}) {}
export class FirehoseDestinationConfiguration extends S.Class<FirehoseDestinationConfiguration>("FirehoseDestinationConfiguration")({deliveryStreamName: S.String}) {}
export const DestinationConfiguration = S.Union(S3DestinationConfiguration, CloudWatchLogsDestinationConfiguration, FirehoseDestinationConfiguration);
export class UpdateLoggingConfigurationRequest extends S.Class<UpdateLoggingConfigurationRequest>("UpdateLoggingConfigurationRequest")({identifier: S.String, name: S.optional(S.String), destinationConfiguration: S.optional(DestinationConfiguration)}) {}
export class MessageReviewHandler extends S.Class<MessageReviewHandler>("MessageReviewHandler")({uri: S.optional(S.String), fallbackResult: S.optional(S.String)}) {}
export class UpdateRoomRequest extends S.Class<UpdateRoomRequest>("UpdateRoomRequest")({identifier: S.String, name: S.optional(S.String), maximumMessageRatePerSecond: S.optional(S.Number), maximumMessageLength: S.optional(S.Number), messageReviewHandler: S.optional(MessageReviewHandler), loggingConfigurationIdentifiers: S.optional(LoggingConfigurationIdentifierList)}) {}
export const ChatTokenAttributes = S.Record({key: S.String, value: S.String});
export const EventAttributes = S.Record({key: S.String, value: S.String});
export class CreateChatTokenRequest extends S.Class<CreateChatTokenRequest>("CreateChatTokenRequest")({roomIdentifier: S.String, userId: S.String, capabilities: S.optional(ChatTokenCapabilities), sessionDurationInMinutes: S.optional(S.Number), attributes: S.optional(ChatTokenAttributes)}) {}
export class CreateRoomRequest extends S.Class<CreateRoomRequest>("CreateRoomRequest")({name: S.optional(S.String), maximumMessageRatePerSecond: S.optional(S.Number), maximumMessageLength: S.optional(S.Number), messageReviewHandler: S.optional(MessageReviewHandler), tags: S.optional(Tags), loggingConfigurationIdentifiers: S.optional(LoggingConfigurationIdentifierList)}) {}
export class DeleteMessageResponse extends S.Class<DeleteMessageResponse>("DeleteMessageResponse")({id: S.optional(S.String)}) {}
export class GetLoggingConfigurationResponse extends S.Class<GetLoggingConfigurationResponse>("GetLoggingConfigurationResponse")({arn: S.optional(S.String), id: S.optional(S.String), createTime: S.optional(S.Date), updateTime: S.optional(S.Date), name: S.optional(S.String), destinationConfiguration: S.optional(DestinationConfiguration), state: S.optional(S.String), tags: S.optional(Tags)}) {}
export class GetRoomResponse extends S.Class<GetRoomResponse>("GetRoomResponse")({arn: S.optional(S.String), id: S.optional(S.String), name: S.optional(S.String), createTime: S.optional(S.Date), updateTime: S.optional(S.Date), maximumMessageRatePerSecond: S.optional(S.Number), maximumMessageLength: S.optional(S.Number), messageReviewHandler: S.optional(MessageReviewHandler), tags: S.optional(Tags), loggingConfigurationIdentifiers: S.optional(LoggingConfigurationIdentifierList)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Tags}) {}
export class SendEventRequest extends S.Class<SendEventRequest>("SendEventRequest")({roomIdentifier: S.String, eventName: S.String, attributes: S.optional(EventAttributes)}) {}
export class UpdateLoggingConfigurationResponse extends S.Class<UpdateLoggingConfigurationResponse>("UpdateLoggingConfigurationResponse")({arn: S.optional(S.String), id: S.optional(S.String), createTime: S.optional(S.Date), updateTime: S.optional(S.Date), name: S.optional(S.String), destinationConfiguration: S.optional(DestinationConfiguration), state: S.optional(S.String), tags: S.optional(Tags)}) {}
export class UpdateRoomResponse extends S.Class<UpdateRoomResponse>("UpdateRoomResponse")({arn: S.optional(S.String), id: S.optional(S.String), name: S.optional(S.String), createTime: S.optional(S.Date), updateTime: S.optional(S.Date), maximumMessageRatePerSecond: S.optional(S.Number), maximumMessageLength: S.optional(S.Number), messageReviewHandler: S.optional(MessageReviewHandler), tags: S.optional(Tags), loggingConfigurationIdentifiers: S.optional(LoggingConfigurationIdentifierList)}) {}
export class LoggingConfigurationSummary extends S.Class<LoggingConfigurationSummary>("LoggingConfigurationSummary")({arn: S.optional(S.String), id: S.optional(S.String), createTime: S.optional(S.Date), updateTime: S.optional(S.Date), name: S.optional(S.String), destinationConfiguration: S.optional(DestinationConfiguration), state: S.optional(S.String), tags: S.optional(Tags)}) {}
export const LoggingConfigurationList = S.Array(LoggingConfigurationSummary);
export class RoomSummary extends S.Class<RoomSummary>("RoomSummary")({arn: S.optional(S.String), id: S.optional(S.String), name: S.optional(S.String), messageReviewHandler: S.optional(MessageReviewHandler), createTime: S.optional(S.Date), updateTime: S.optional(S.Date), tags: S.optional(Tags), loggingConfigurationIdentifiers: S.optional(LoggingConfigurationIdentifierList)}) {}
export const RoomList = S.Array(RoomSummary);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class CreateChatTokenResponse extends S.Class<CreateChatTokenResponse>("CreateChatTokenResponse")({token: S.optional(S.String), tokenExpirationTime: S.optional(S.Date), sessionExpirationTime: S.optional(S.Date)}) {}
export class CreateLoggingConfigurationRequest extends S.Class<CreateLoggingConfigurationRequest>("CreateLoggingConfigurationRequest")({name: S.optional(S.String), destinationConfiguration: DestinationConfiguration, tags: S.optional(Tags)}) {}
export class CreateRoomResponse extends S.Class<CreateRoomResponse>("CreateRoomResponse")({arn: S.optional(S.String), id: S.optional(S.String), name: S.optional(S.String), createTime: S.optional(S.Date), updateTime: S.optional(S.Date), maximumMessageRatePerSecond: S.optional(S.Number), maximumMessageLength: S.optional(S.Number), messageReviewHandler: S.optional(MessageReviewHandler), tags: S.optional(Tags), loggingConfigurationIdentifiers: S.optional(LoggingConfigurationIdentifierList)}) {}
export class ListLoggingConfigurationsResponse extends S.Class<ListLoggingConfigurationsResponse>("ListLoggingConfigurationsResponse")({loggingConfigurations: LoggingConfigurationList, nextToken: S.optional(S.String)}) {}
export class ListRoomsResponse extends S.Class<ListRoomsResponse>("ListRoomsResponse")({rooms: RoomList, nextToken: S.optional(S.String)}) {}
export class SendEventResponse extends S.Class<SendEventResponse>("SendEventResponse")({id: S.optional(S.String)}) {}
export class CreateLoggingConfigurationResponse extends S.Class<CreateLoggingConfigurationResponse>("CreateLoggingConfigurationResponse")({arn: S.optional(S.String), id: S.optional(S.String), createTime: S.optional(S.Date), updateTime: S.optional(S.Date), name: S.optional(S.String), destinationConfiguration: S.optional(DestinationConfiguration), state: S.optional(S.String), tags: S.optional(Tags)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class PendingVerification extends S.TaggedError<PendingVerification>()("PendingVerification", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Deletes the specified room.
 */export const deleteRoom = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DeleteRoom", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.DeleteRoom" }, DeleteRoomRequest, S.Struct({}), [AccessDeniedException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disconnects all connections using a specified user ID from a room. This replicates the
 * 
 * DisconnectUser WebSocket operation in the Amazon IVS Chat Messaging API.
 */export const disconnectUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DisconnectUser", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.DisconnectUser" }, DisconnectUserRequest, DisconnectUserResponse, [AccessDeniedException, PendingVerification, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the specified logging configuration.
 */export const getLoggingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetLoggingConfiguration", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.GetLoggingConfiguration" }, GetLoggingConfigurationRequest, GetLoggingConfigurationResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the specified room.
 */export const getRoom = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/GetRoom", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.GetRoom" }, GetRoomRequest, GetRoomResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about AWS tags for the specified ARN.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/tags/{resourceArn}", method: "GET", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or updates tags for the AWS resource with the specified ARN.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/tags/{resourceArn}", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a specified logging configuration.
 */export const updateLoggingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/UpdateLoggingConfiguration", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.UpdateLoggingConfiguration" }, UpdateLoggingConfigurationRequest, UpdateLoggingConfigurationResponse, [AccessDeniedException, ConflictException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a room’s configuration.
 */export const updateRoom = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/UpdateRoom", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.UpdateRoom" }, UpdateRoomRequest, UpdateRoomResponse, [AccessDeniedException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an encrypted token that is used by a chat participant to establish an individual
 * WebSocket chat connection to a room. When the token is used to connect to chat, the
 * connection is valid for the session duration specified in the request. The token becomes
 * invalid at the token-expiration timestamp included in the response.
 * 
 * 
 * Use the `capabilities` field to permit an end user to send messages or
 * moderate a room.
 * 
 * 
 * The `attributes` field securely attaches structured data to the chat session; the data is
 * included within each message sent by the end user and received by other participants in the
 * room. Common use cases for attributes include passing end-user profile data like an icon,
 * display name, colors, badges, and other display features.
 * 
 * 
 * Encryption keys are owned by Amazon IVS Chat and never used directly by your
 * application.
 */export const createChatToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/CreateChatToken", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.CreateChatToken" }, CreateChatTokenRequest, CreateChatTokenResponse, [AccessDeniedException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified logging configuration.
 */export const deleteLoggingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DeleteLoggingConfiguration", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.DeleteLoggingConfiguration" }, DeleteLoggingConfigurationRequest, S.Struct({}), [AccessDeniedException, ConflictException, PendingVerification, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends an event to a specific room which directs clients to delete a specific message;
 * that is, unrender it from view and delete it from the client’s chat history. This event’s
 * `EventName` is `aws:DELETE_MESSAGE`. This replicates the
 * DeleteMessage WebSocket operation in the Amazon IVS Chat Messaging API.
 */export const deleteMessage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/DeleteMessage", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.DeleteMessage" }, DeleteMessageRequest, DeleteMessageResponse, [AccessDeniedException, PendingVerification, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about all your logging configurations in the AWS region where
 * the API request is processed.
 */export const listLoggingConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListLoggingConfigurations", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.ListLoggingConfigurations" }, ListLoggingConfigurationsRequest, ListLoggingConfigurationsResponse, [AccessDeniedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about all your rooms in the AWS region where the API request is
 * processed. Results are sorted in descending order of `updateTime`.
 */export const listRooms = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/ListRooms", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.ListRooms" }, ListRoomsRequest, ListRoomsResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends an event to a room. Use this within your application’s business logic to send
 * events to clients of a room; e.g., to notify clients to change the way the chat UI is
 * rendered.
 */export const sendEvent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/SendEvent", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.SendEvent" }, SendEventRequest, SendEventResponse, [AccessDeniedException, PendingVerification, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from the resource with the specified ARN.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a logging configuration that allows clients to store and record sent
 * messages.
 */export const createLoggingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/CreateLoggingConfiguration", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.CreateLoggingConfiguration" }, CreateLoggingConfigurationRequest, CreateLoggingConfigurationResponse, [AccessDeniedException, ConflictException, PendingVerification, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a room that allows clients to connect and pass messages.
 */export const createRoom = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-14", uri: "/CreateRoom", method: "POST", sdkId: "ivschat", sigV4ServiceName: "ivschat", name: "AmazonInteractiveVideoServiceChat.CreateRoom" }, CreateRoomRequest, CreateRoomResponse, [AccessDeniedException, ConflictException, PendingVerification, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

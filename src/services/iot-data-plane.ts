import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteConnectionRequest extends S.Class<DeleteConnectionRequest>("DeleteConnectionRequest")({clientId: S.String, cleanSession: S.optional(S.Boolean), preventWillMessage: S.optional(S.Boolean)}) {}
export class DeleteThingShadowRequest extends S.Class<DeleteThingShadowRequest>("DeleteThingShadowRequest")({thingName: S.String, shadowName: S.optional(S.String)}) {}
export class GetRetainedMessageRequest extends S.Class<GetRetainedMessageRequest>("GetRetainedMessageRequest")({topic: S.String}) {}
export class GetThingShadowRequest extends S.Class<GetThingShadowRequest>("GetThingShadowRequest")({thingName: S.String, shadowName: S.optional(S.String)}) {}
export class ListNamedShadowsForThingRequest extends S.Class<ListNamedShadowsForThingRequest>("ListNamedShadowsForThingRequest")({thingName: S.String, nextToken: S.optional(S.String), pageSize: S.optional(S.Number)}) {}
export class ListRetainedMessagesRequest extends S.Class<ListRetainedMessagesRequest>("ListRetainedMessagesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class PublishRequest extends S.Class<PublishRequest>("PublishRequest")({topic: S.String, qos: S.optional(S.Number), retain: S.optional(S.Boolean), payload: S.optional(H.Body("undefined", H.StreamBody())), userProperties: S.optional(H.Header("x-amz-mqtt5-user-properties")), payloadFormatIndicator: S.optional(H.Header("x-amz-mqtt5-payload-format-indicator")), contentType: S.optional(S.String), responseTopic: S.optional(S.String), correlationData: S.optional(H.Header("x-amz-mqtt5-correlation-data")), messageExpiry: S.optional(S.Number)}) {}
export class UpdateThingShadowRequest extends S.Class<UpdateThingShadowRequest>("UpdateThingShadowRequest")({thingName: S.String, shadowName: S.optional(S.String), payload: H.Body("undefined", H.StreamBody())}) {}
export const NamedShadowList = S.Array(S.String);
export class DeleteThingShadowResponse extends S.Class<DeleteThingShadowResponse>("DeleteThingShadowResponse")({payload: H.Body("undefined", H.StreamBody())}) {}
export class GetRetainedMessageResponse extends S.Class<GetRetainedMessageResponse>("GetRetainedMessageResponse")({topic: S.optional(S.String), payload: S.optional(H.StreamBody()), qos: S.optional(S.Number), lastModifiedTime: S.optional(S.Number), userProperties: S.optional(H.StreamBody())}) {}
export class GetThingShadowResponse extends S.Class<GetThingShadowResponse>("GetThingShadowResponse")({payload: S.optional(H.Body("undefined", H.StreamBody()))}) {}
export class ListNamedShadowsForThingResponse extends S.Class<ListNamedShadowsForThingResponse>("ListNamedShadowsForThingResponse")({results: S.optional(NamedShadowList), nextToken: S.optional(S.String), timestamp: S.optional(S.Number)}) {}
export class UpdateThingShadowResponse extends S.Class<UpdateThingShadowResponse>("UpdateThingShadowResponse")({payload: S.optional(H.Body("undefined", H.StreamBody()))}) {}
export class RetainedMessageSummary extends S.Class<RetainedMessageSummary>("RetainedMessageSummary")({topic: S.optional(S.String), payloadSize: S.optional(S.Number), qos: S.optional(S.Number), lastModifiedTime: S.optional(S.Number)}) {}
export const RetainedMessageList = S.Array(RetainedMessageSummary);
export class ListRetainedMessagesResponse extends S.Class<ListRetainedMessagesResponse>("ListRetainedMessagesResponse")({retainedTopics: S.optional(RetainedMessageList), nextToken: S.optional(S.String)}) {}

//# Errors
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {message: S.optional(S.String)}) {};
export class InternalFailureException extends S.TaggedError<InternalFailureException>()("InternalFailureException", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class MethodNotAllowedException extends S.TaggedError<MethodNotAllowedException>()("MethodNotAllowedException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};
export class UnsupportedDocumentEncodingException extends S.TaggedError<UnsupportedDocumentEncodingException>()("UnsupportedDocumentEncodingException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {message: S.optional(S.String)}) {};
export class RequestEntityTooLargeException extends S.TaggedError<RequestEntityTooLargeException>()("RequestEntityTooLargeException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Disconnects a connected MQTT client from Amazon Web Services IoT Core. When you disconnect a client, Amazon Web Services IoT Core closes the client's network connection and optionally cleans the session state.
 */export const deleteConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/connections/{clientId}", method: "DELETE", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.DeleteConnection" }, DeleteConnectionRequest, S.Struct({}), [ForbiddenException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the details of a single retained message for the specified topic.
 * 
 * This action returns the message payload of the retained message, which can
 * incur messaging costs. To list only the topic names of the retained messages, call
 * ListRetainedMessages.
 * 
 * Requires permission to access the GetRetainedMessage action.
 * 
 * For more information about messaging costs, see Amazon Web Services IoT Core
 * pricing - Messaging.
 */export const getRetainedMessage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/retainedMessage/{topic}", method: "GET", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.GetRetainedMessage" }, GetRetainedMessageRequest, GetRetainedMessageResponse, [InternalFailureException, InvalidRequestException, MethodNotAllowedException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the shadow for the specified thing.
 * 
 * Requires permission to access the GetThingShadow action.
 * 
 * For more information, see GetThingShadow in the
 * IoT Developer Guide.
 */export const getThingShadow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}/shadow", method: "GET", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.GetThingShadow" }, GetThingShadowRequest, GetThingShadowResponse, [InternalFailureException, InvalidRequestException, MethodNotAllowedException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException, UnsupportedDocumentEncodingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the shadows for the specified thing.
 * 
 * Requires permission to access the ListNamedShadowsForThing action.
 */export const listNamedShadowsForThing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/api/things/shadow/ListNamedShadowsForThing/{thingName}", method: "GET", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.ListNamedShadowsForThing" }, ListNamedShadowsForThingRequest, ListNamedShadowsForThingResponse, [InternalFailureException, InvalidRequestException, MethodNotAllowedException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists summary information about the retained messages stored for the account.
 * 
 * This action returns only the topic names of the retained messages. It doesn't
 * return any message payloads. Although this action doesn't return a message payload,
 * it can still incur messaging costs.
 * 
 * To get the message payload of a retained message, call
 * GetRetainedMessage
 * with the topic name of the retained message.
 * 
 * Requires permission to access the ListRetainedMessages action.
 * 
 * For more information about messaging costs, see Amazon Web Services IoT Core
 * pricing - Messaging.
 */export const listRetainedMessages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/retainedMessage", method: "GET", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.ListRetainedMessages" }, ListRetainedMessagesRequest, ListRetainedMessagesResponse, [InternalFailureException, InvalidRequestException, MethodNotAllowedException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Publishes an MQTT message.
 * 
 * Requires permission to access the Publish action.
 * 
 * For more information about MQTT messages, see
 * MQTT Protocol in the
 * IoT Developer Guide.
 * 
 * For more information about messaging costs, see Amazon Web Services IoT Core
 * pricing - Messaging.
 */export const publish = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/topics/{topic}", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.Publish" }, PublishRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, MethodNotAllowedException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the shadow for the specified thing.
 * 
 * Requires permission to access the DeleteThingShadow action.
 * 
 * For more information, see DeleteThingShadow in the IoT Developer Guide.
 */export const deleteThingShadow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}/shadow", method: "DELETE", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.DeleteThingShadow" }, DeleteThingShadowRequest, DeleteThingShadowResponse, [InternalFailureException, InvalidRequestException, MethodNotAllowedException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException, UnsupportedDocumentEncodingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the shadow for the specified thing.
 * 
 * Requires permission to access the UpdateThingShadow action.
 * 
 * For more information, see UpdateThingShadow in the
 * IoT Developer Guide.
 */export const updateThingShadow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}/shadow", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.UpdateThingShadow" }, UpdateThingShadowRequest, UpdateThingShadowResponse, [ConflictException, InternalFailureException, InvalidRequestException, MethodNotAllowedException, RequestEntityTooLargeException, ServiceUnavailableException, ThrottlingException, UnauthorizedException, UnsupportedDocumentEncodingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

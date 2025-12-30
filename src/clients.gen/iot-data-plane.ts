import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const DeleteConnectionRequest = Schema.Struct({clientId: Schema.String, cleanSession: Schema.optional(Schema.Boolean), preventWillMessage: Schema.optional(Schema.Boolean)});
export const DeleteThingShadowRequest = Schema.Struct({thingName: Schema.String, shadowName: Schema.optional(Schema.String)});
export const GetRetainedMessageRequest = Schema.Struct({topic: Schema.String});
export const GetThingShadowRequest = Schema.Struct({thingName: Schema.String, shadowName: Schema.optional(Schema.String)});
export const ListNamedShadowsForThingRequest = Schema.Struct({thingName: Schema.String, nextToken: Schema.optional(Schema.String), pageSize: Schema.optional(Schema.Number)});
export const ListRetainedMessagesRequest = Schema.Struct({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number)});
export const PublishRequest = Schema.Struct({topic: Schema.String, qos: Schema.optional(Schema.Number), retain: Schema.optional(Schema.Boolean), payload: Schema.optional(Body("undefined", StreamBody())), userProperties: Schema.optional(Header("x-amz-mqtt5-user-properties")), payloadFormatIndicator: Schema.optional(Header("x-amz-mqtt5-payload-format-indicator")), contentType: Schema.optional(Schema.String), responseTopic: Schema.optional(Schema.String), correlationData: Schema.optional(Header("x-amz-mqtt5-correlation-data")), messageExpiry: Schema.optional(Schema.Number)});
export const UpdateThingShadowRequest = Schema.Struct({thingName: Schema.String, shadowName: Schema.optional(Schema.String), payload: Body("undefined", StreamBody())});
export const NamedShadowList = Schema.Array(Schema.String);
export const ForbiddenException = Schema.Struct({message: Schema.optional(Schema.String)});
export const DeleteThingShadowResponse = Schema.Struct({payload: Body("undefined", StreamBody())});
export const GetRetainedMessageResponse = Schema.Struct({topic: Schema.optional(Schema.String), payload: Schema.optional(StreamBody()), qos: Schema.optional(Schema.Number), lastModifiedTime: Schema.optional(Schema.Number), userProperties: Schema.optional(StreamBody())});
export const GetThingShadowResponse = Schema.Struct({payload: Schema.optional(Body("undefined", StreamBody()))});
export const ListNamedShadowsForThingResponse = Schema.Struct({results: Schema.optional(NamedShadowList), nextToken: Schema.optional(Schema.String), timestamp: Schema.optional(Schema.Number)});
export const InternalFailureException = Schema.Struct({message: Schema.optional(Schema.String)});
export const UpdateThingShadowResponse = Schema.Struct({payload: Schema.optional(Body("undefined", StreamBody()))});
export const RetainedMessageSummary = Schema.Struct({topic: Schema.optional(Schema.String), payloadSize: Schema.optional(Schema.Number), qos: Schema.optional(Schema.Number), lastModifiedTime: Schema.optional(Schema.Number)});
export const RetainedMessageList = Schema.Array(RetainedMessageSummary);
export const InvalidRequestException = Schema.Struct({message: Schema.optional(Schema.String)});
export const MethodNotAllowedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ServiceUnavailableException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ListRetainedMessagesResponse = Schema.Struct({retainedTopics: Schema.optional(RetainedMessageList), nextToken: Schema.optional(Schema.String)});
export const UnauthorizedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ConflictException = Schema.Struct({message: Schema.optional(Schema.String)});
export const UnsupportedDocumentEncodingException = Schema.Struct({message: Schema.optional(Schema.String)});
export const RequestEntityTooLargeException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class ForbiddenExceptionError extends Schema.TaggedError<ForbiddenExceptionError>()("ForbiddenException", ForbiddenException) {};
export class InternalFailureExceptionError extends Schema.TaggedError<InternalFailureExceptionError>()("InternalFailureException", InternalFailureException) {};
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException) {};
export class MethodNotAllowedExceptionError extends Schema.TaggedError<MethodNotAllowedExceptionError>()("MethodNotAllowedException", MethodNotAllowedException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class UnauthorizedExceptionError extends Schema.TaggedError<UnauthorizedExceptionError>()("UnauthorizedException", UnauthorizedException) {};
export class UnsupportedDocumentEncodingExceptionError extends Schema.TaggedError<UnsupportedDocumentEncodingExceptionError>()("UnsupportedDocumentEncodingException", UnsupportedDocumentEncodingException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class RequestEntityTooLargeExceptionError extends Schema.TaggedError<RequestEntityTooLargeExceptionError>()("RequestEntityTooLargeException", RequestEntityTooLargeException) {};

//# Operations
export const deleteConnection = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-05-28", uri: "/connections/{clientId}", method: "DELETE", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.DeleteConnection" }, DeleteConnectionRequest, Schema.Struct({}), [ForbiddenExceptionError, InternalFailureExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getRetainedMessage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-05-28", uri: "/retainedMessage/{topic}", method: "GET", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.GetRetainedMessage" }, GetRetainedMessageRequest, GetRetainedMessageResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, MethodNotAllowedExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getThingShadow = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-05-28", uri: "/things/{thingName}/shadow", method: "GET", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.GetThingShadow" }, GetThingShadowRequest, GetThingShadowResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, MethodNotAllowedExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError, UnsupportedDocumentEncodingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listNamedShadowsForThing = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-05-28", uri: "/api/things/shadow/ListNamedShadowsForThing/{thingName}", method: "GET", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.ListNamedShadowsForThing" }, ListNamedShadowsForThingRequest, ListNamedShadowsForThingResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, MethodNotAllowedExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listRetainedMessages = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-05-28", uri: "/retainedMessage", method: "GET", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.ListRetainedMessages" }, ListRetainedMessagesRequest, ListRetainedMessagesResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, MethodNotAllowedExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const publish = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-05-28", uri: "/topics/{topic}", method: "POST", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.Publish" }, PublishRequest, Schema.Struct({}), [InternalFailureExceptionError, InvalidRequestExceptionError, MethodNotAllowedExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteThingShadow = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-05-28", uri: "/things/{thingName}/shadow", method: "DELETE", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.DeleteThingShadow" }, DeleteThingShadowRequest, DeleteThingShadowResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, MethodNotAllowedExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError, UnsupportedDocumentEncodingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateThingShadow = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-05-28", uri: "/things/{thingName}/shadow", method: "POST", sdkId: "IoT Data Plane", sigV4ServiceName: "iotdata", name: "IotMoonrakerService.UpdateThingShadow" }, UpdateThingShadowRequest, UpdateThingShadowResponse, [ConflictExceptionError, InternalFailureExceptionError, InvalidRequestExceptionError, MethodNotAllowedExceptionError, RequestEntityTooLargeExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError, UnsupportedDocumentEncodingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

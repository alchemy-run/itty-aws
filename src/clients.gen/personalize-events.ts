import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ActionImpression = S.Array(S.String);
export const Impression = S.Array(S.String);
export class ActionInteraction extends S.Class<ActionInteraction>("ActionInteraction")({actionId: S.String, userId: S.optional(S.String), sessionId: S.String, timestamp: S.Date, eventType: S.String, eventId: S.optional(S.String), recommendationId: S.optional(S.String), impression: S.optional(ActionImpression), properties: S.optional(S.String)}) {}
export const ActionInteractionsList = S.Array(ActionInteraction);
export class Action extends S.Class<Action>("Action")({actionId: S.String, properties: S.optional(S.String)}) {}
export const ActionList = S.Array(Action);
export class Item extends S.Class<Item>("Item")({itemId: S.String, properties: S.optional(S.String)}) {}
export const ItemList = S.Array(Item);
export class User extends S.Class<User>("User")({userId: S.String, properties: S.optional(S.String)}) {}
export const UserList = S.Array(User);
export class PutActionInteractionsRequest extends S.Class<PutActionInteractionsRequest>("PutActionInteractionsRequest")({trackingId: S.String, actionInteractions: ActionInteractionsList}) {}
export class PutActionsRequest extends S.Class<PutActionsRequest>("PutActionsRequest")({datasetArn: S.String, actions: ActionList}) {}
export class PutItemsRequest extends S.Class<PutItemsRequest>("PutItemsRequest")({datasetArn: S.String, items: ItemList}) {}
export class PutUsersRequest extends S.Class<PutUsersRequest>("PutUsersRequest")({datasetArn: S.String, users: UserList}) {}
export class MetricAttribution extends S.Class<MetricAttribution>("MetricAttribution")({eventAttributionSource: S.String}) {}
export class Event extends S.Class<Event>("Event")({eventId: S.optional(S.String), eventType: S.String, eventValue: S.optional(S.Number), itemId: S.optional(S.String), properties: S.optional(S.String), sentAt: S.Date, recommendationId: S.optional(S.String), impression: S.optional(Impression), metricAttribution: S.optional(MetricAttribution)}) {}
export const EventList = S.Array(Event);
export class InvalidInputException extends S.Class<InvalidInputException>("InvalidInputException")({message: S.optional(S.String)}) {}
export class ResourceInUseException extends S.Class<ResourceInUseException>("ResourceInUseException")({message: S.optional(S.String)}) {}
export class PutEventsRequest extends S.Class<PutEventsRequest>("PutEventsRequest")({trackingId: S.String, userId: S.optional(S.String), sessionId: S.String, eventList: EventList}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String)}) {}

//# Errors
export class InvalidInputExceptionError extends S.TaggedError<InvalidInputExceptionError>()("InvalidInputException", InvalidInputException.fields) {};
export class ResourceInUseExceptionError extends S.TaggedError<ResourceInUseExceptionError>()("ResourceInUseException", ResourceInUseException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const putUsers = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-03-22", uri: "/users", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutUsers" }, PutUsersRequest, S.Struct({}), [InvalidInputExceptionError, ResourceInUseExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putActionInteractions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-03-22", uri: "/action-interactions", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutActionInteractions" }, PutActionInteractionsRequest, S.Struct({}), [InvalidInputExceptionError, ResourceInUseExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putActions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-03-22", uri: "/actions", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutActions" }, PutActionsRequest, S.Struct({}), [InvalidInputExceptionError, ResourceInUseExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putEvents = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-03-22", uri: "/events", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutEvents" }, PutEventsRequest, S.Struct({}), [InvalidInputExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putItems = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-03-22", uri: "/items", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutItems" }, PutItemsRequest, S.Struct({}), [InvalidInputExceptionError, ResourceInUseExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

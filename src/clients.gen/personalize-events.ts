import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const ActionImpression = Schema.Array(Schema.String);
export const Impression = Schema.Array(Schema.String);
export class ActionInteraction extends Schema.Class<ActionInteraction>("ActionInteraction")({actionId: Schema.String, userId: Schema.optional(Schema.String), sessionId: Schema.String, timestamp: Schema.Date, eventType: Schema.String, eventId: Schema.optional(Schema.String), recommendationId: Schema.optional(Schema.String), impression: Schema.optional(ActionImpression), properties: Schema.optional(Schema.String)}) {}
export const ActionInteractionsList = Schema.Array(ActionInteraction);
export class Action extends Schema.Class<Action>("Action")({actionId: Schema.String, properties: Schema.optional(Schema.String)}) {}
export const ActionList = Schema.Array(Action);
export class Item extends Schema.Class<Item>("Item")({itemId: Schema.String, properties: Schema.optional(Schema.String)}) {}
export const ItemList = Schema.Array(Item);
export class User extends Schema.Class<User>("User")({userId: Schema.String, properties: Schema.optional(Schema.String)}) {}
export const UserList = Schema.Array(User);
export class PutActionInteractionsRequest extends Schema.Class<PutActionInteractionsRequest>("PutActionInteractionsRequest")({trackingId: Schema.String, actionInteractions: ActionInteractionsList}) {}
export class PutActionsRequest extends Schema.Class<PutActionsRequest>("PutActionsRequest")({datasetArn: Schema.String, actions: ActionList}) {}
export class PutItemsRequest extends Schema.Class<PutItemsRequest>("PutItemsRequest")({datasetArn: Schema.String, items: ItemList}) {}
export class PutUsersRequest extends Schema.Class<PutUsersRequest>("PutUsersRequest")({datasetArn: Schema.String, users: UserList}) {}
export class MetricAttribution extends Schema.Class<MetricAttribution>("MetricAttribution")({eventAttributionSource: Schema.String}) {}
export class Event extends Schema.Class<Event>("Event")({eventId: Schema.optional(Schema.String), eventType: Schema.String, eventValue: Schema.optional(Schema.Number), itemId: Schema.optional(Schema.String), properties: Schema.optional(Schema.String), sentAt: Schema.Date, recommendationId: Schema.optional(Schema.String), impression: Schema.optional(Impression), metricAttribution: Schema.optional(MetricAttribution)}) {}
export const EventList = Schema.Array(Event);
export class InvalidInputException extends Schema.Class<InvalidInputException>("InvalidInputException")({message: Schema.optional(Schema.String)}) {}
export class ResourceInUseException extends Schema.Class<ResourceInUseException>("ResourceInUseException")({message: Schema.optional(Schema.String)}) {}
export class PutEventsRequest extends Schema.Class<PutEventsRequest>("PutEventsRequest")({trackingId: Schema.String, userId: Schema.optional(Schema.String), sessionId: Schema.String, eventList: EventList}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class InvalidInputExceptionError extends Schema.TaggedError<InvalidInputExceptionError>()("InvalidInputException", InvalidInputException.fields) {};
export class ResourceInUseExceptionError extends Schema.TaggedError<ResourceInUseExceptionError>()("ResourceInUseException", ResourceInUseException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const putUsers = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-03-22", uri: "/users", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutUsers" }, PutUsersRequest, Schema.Struct({}), [InvalidInputExceptionError, ResourceInUseExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putActionInteractions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-03-22", uri: "/action-interactions", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutActionInteractions" }, PutActionInteractionsRequest, Schema.Struct({}), [InvalidInputExceptionError, ResourceInUseExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putActions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-03-22", uri: "/actions", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutActions" }, PutActionsRequest, Schema.Struct({}), [InvalidInputExceptionError, ResourceInUseExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putEvents = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-03-22", uri: "/events", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutEvents" }, PutEventsRequest, Schema.Struct({}), [InvalidInputExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putItems = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-03-22", uri: "/items", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutItems" }, PutItemsRequest, Schema.Struct({}), [InvalidInputExceptionError, ResourceInUseExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

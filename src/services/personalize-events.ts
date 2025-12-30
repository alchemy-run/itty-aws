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
export class PutEventsRequest extends S.Class<PutEventsRequest>("PutEventsRequest")({trackingId: S.String, userId: S.optional(S.String), sessionId: S.String, eventList: EventList}) {}

//# Errors
export class InvalidInputException extends S.TaggedError<InvalidInputException>()("InvalidInputException", {}) {};
export class ResourceInUseException extends S.TaggedError<ResourceInUseException>()("ResourceInUseException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};

//# Operations
/**
 * Adds one or more users to a Users dataset. For more information see
 * Importing users individually.
 */export const putUsers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-03-22", uri: "/users", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutUsers" }, PutUsersRequest, S.Struct({}), [InvalidInputException, ResourceInUseException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Records action interaction event data. An *action interaction* event is an interaction between a user and an *action*.
 * For example, a user taking an action, such a enrolling in a membership program or downloading your app.
 * 
 * For more information about recording action interactions, see Recording action interaction events.
 * For more information about actions in an Actions dataset, see Actions dataset.
 */export const putActionInteractions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-03-22", uri: "/action-interactions", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutActionInteractions" }, PutActionInteractionsRequest, S.Struct({}), [InvalidInputException, ResourceInUseException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more actions to an Actions dataset. For more information see
 * Importing actions individually.
 */export const putActions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-03-22", uri: "/actions", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutActions" }, PutActionsRequest, S.Struct({}), [InvalidInputException, ResourceInUseException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Records item interaction event data. For more information see
 * Recording item interaction events.
 */export const putEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-03-22", uri: "/events", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutEvents" }, PutEventsRequest, S.Struct({}), [InvalidInputException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more items to an Items dataset. For more information see
 * Importing items individually.
 */export const putItems = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-03-22", uri: "/items", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "AmazonPersonalizeEvents.PutItems" }, PutItemsRequest, S.Struct({}), [InvalidInputException, ResourceInUseException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

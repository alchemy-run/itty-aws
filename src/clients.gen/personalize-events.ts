import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const ActionImpression = Schema.Array(Schema.String)
const Impression = Schema.Array(Schema.String)
const ActionInteraction = Schema.Struct({actionId: Schema.String, userId: Schema.optional(Schema.String), sessionId: Schema.String, timestamp: Schema.Date, eventType: Schema.String, eventId: Schema.optional(Schema.String), recommendationId: Schema.optional(Schema.String), impression: Schema.optional(ActionImpression), properties: Schema.optional(Schema.String)})
const ActionInteractionsList = Schema.Array(ActionInteraction)
const Action = Schema.Struct({actionId: Schema.String, properties: Schema.optional(Schema.String)})
const ActionList = Schema.Array(Action)
const Item = Schema.Struct({itemId: Schema.String, properties: Schema.optional(Schema.String)})
const ItemList = Schema.Array(Item)
const User = Schema.Struct({userId: Schema.String, properties: Schema.optional(Schema.String)})
const UserList = Schema.Array(User)
const PutActionInteractionsRequest = Schema.Struct({trackingId: Schema.String, actionInteractions: ActionInteractionsList})
const PutActionsRequest = Schema.Struct({datasetArn: Schema.String, actions: ActionList})
const PutItemsRequest = Schema.Struct({datasetArn: Schema.String, items: ItemList})
const PutUsersRequest = Schema.Struct({datasetArn: Schema.String, users: UserList})
export const PutUsers = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/users", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "PutUsers" }, PutUsersRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("InvalidInputException", InvalidInputException), ErrorAnnotation("ResourceInUseException", ResourceInUseException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const MetricAttribution = Schema.Struct({eventAttributionSource: Schema.String})
const Event = Schema.Struct({eventId: Schema.optional(Schema.String), eventType: Schema.String, eventValue: Schema.optional(Schema.Number), itemId: Schema.optional(Schema.String), properties: Schema.optional(Schema.String), sentAt: Schema.Date, recommendationId: Schema.optional(Schema.String), impression: Schema.optional(Impression), metricAttribution: Schema.optional(MetricAttribution)})
const EventList = Schema.Array(Event)
const InvalidInputException = Schema.Struct({message: Schema.optional(Schema.String)})
export const PutActionInteractions = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/action-interactions", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "PutActionInteractions" }, PutActionInteractionsRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("InvalidInputException", InvalidInputException), ErrorAnnotation("ResourceInUseException", ResourceInUseException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceInUseException = Schema.Struct({message: Schema.optional(Schema.String)})
export const PutActions = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/actions", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "PutActions" }, PutActionsRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("InvalidInputException", InvalidInputException), ErrorAnnotation("ResourceInUseException", ResourceInUseException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const PutEventsRequest = Schema.Struct({trackingId: Schema.String, userId: Schema.optional(Schema.String), sessionId: Schema.String, eventList: EventList})
export const PutEvents = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/events", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "PutEvents" }, PutEventsRequest, Schema.Struct({}), ErrorAnnotation("InvalidInputException", InvalidInputException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const PutItems = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/items", method: "POST", sdkId: "Personalize Events", sigV4ServiceName: "personalize", name: "PutItems" }, PutItemsRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("InvalidInputException", InvalidInputException), ErrorAnnotation("ResourceInUseException", ResourceInUseException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

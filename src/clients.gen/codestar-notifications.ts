import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const EventTypeIds = Schema.Array(Schema.String)
const TagKeys = Schema.Array(Schema.String)
const DeleteNotificationRuleRequest = Schema.Struct({Arn: Schema.String})
const DeleteTargetRequest = Schema.Struct({TargetAddress: Schema.String, ForceUnsubscribeAll: Schema.optional(Schema.Boolean)})
const DeleteTargetResult = Schema.Struct({})
const DescribeNotificationRuleRequest = Schema.Struct({Arn: Schema.String})
const ListTagsForResourceRequest = Schema.Struct({Arn: Schema.String})
const SubscribeRequest = Schema.Struct({Arn: Schema.String, Target: Target, ClientRequestToken: Schema.optional(Schema.String)})
const TagResourceRequest = Schema.Struct({Arn: Schema.String, Tags: Tags})
const UnsubscribeRequest = Schema.Struct({Arn: Schema.String, TargetAddress: Schema.String})
const UntagResourceRequest = Schema.Struct({Arn: Schema.String, TagKeys: TagKeys})
const UntagResourceResult = Schema.Struct({})
const UpdateNotificationRuleRequest = Schema.Struct({Arn: Schema.String, Name: Schema.optional(Schema.String), Status: Schema.optional(Schema.String), EventTypeIds: Schema.optional(EventTypeIds), Targets: Schema.optional(Targets), DetailType: Schema.optional(Schema.String)})
const UpdateNotificationRuleResult = Schema.Struct({})
const Target = Schema.Struct({TargetType: Schema.optional(Schema.String), TargetAddress: Schema.optional(Schema.String)})
const Targets = Schema.Array(Target)
const Tags = Schema.Record({key: Schema.String, value: Schema.String})
const ListEventTypesFilter = Schema.Struct({Name: Schema.String, Value: Schema.String})
const ListEventTypesFilters = Schema.Array(ListEventTypesFilter)
const ListNotificationRulesFilter = Schema.Struct({Name: Schema.String, Value: Schema.String})
const ListNotificationRulesFilters = Schema.Array(ListNotificationRulesFilter)
const ListTargetsFilter = Schema.Struct({Name: Schema.String, Value: Schema.String})
const ListTargetsFilters = Schema.Array(ListTargetsFilter)
const CreateNotificationRuleRequest = Schema.Struct({Name: Schema.String, EventTypeIds: EventTypeIds, Resource: Schema.String, Targets: Targets, DetailType: Schema.String, ClientRequestToken: Schema.optional(Schema.String), Tags: Schema.optional(Tags), Status: Schema.optional(Schema.String)})
const DeleteNotificationRuleResult = Schema.Struct({Arn: Schema.optional(Schema.String)})
const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const DeleteTarget = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/deleteTarget", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "DeleteTarget" }, DeleteTargetRequest, DeleteTargetResult, ErrorAnnotation("ValidationException", ValidationException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ListEventTypesRequest = Schema.Struct({Filters: Schema.optional(ListEventTypesFilters), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)})
const ListNotificationRulesRequest = Schema.Struct({Filters: Schema.optional(ListNotificationRulesFilters), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)})
const ListTagsForResourceResult = Schema.Struct({Tags: Schema.optional(Tags)})
const ListTargetsRequest = Schema.Struct({Filters: Schema.optional(ListTargetsFilters), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)})
const SubscribeResult = Schema.Struct({Arn: Schema.optional(Schema.String)})
export const Subscribe = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/subscribe", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "Subscribe" }, SubscribeRequest, SubscribeResult, Schema.Union(ErrorAnnotation("ConfigurationException", ConfigurationException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TagResourceResult = Schema.Struct({Tags: Schema.optional(Tags)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tagResource", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "TagResource" }, TagResourceRequest, TagResourceResult, Schema.Union(ErrorAnnotation("ConcurrentModificationException", ConcurrentModificationException), ErrorAnnotation("LimitExceededException", LimitExceededException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const UnsubscribeResult = Schema.Struct({Arn: Schema.String})
export const Unsubscribe = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/unsubscribe", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "Unsubscribe" }, UnsubscribeRequest, UnsubscribeResult, ErrorAnnotation("ValidationException", ValidationException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ConcurrentModificationException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/untagResource/{Arn}", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "UntagResource" }, UntagResourceRequest, UntagResourceResult, Schema.Union(ErrorAnnotation("ConcurrentModificationException", ConcurrentModificationException), ErrorAnnotation("LimitExceededException", LimitExceededException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ConfigurationException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const UpdateNotificationRule = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/updateNotificationRule", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "UpdateNotificationRule" }, UpdateNotificationRuleRequest, UpdateNotificationRuleResult, Schema.Union(ErrorAnnotation("ConfigurationException", ConfigurationException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const EventTypeSummary = Schema.Struct({EventTypeId: Schema.optional(Schema.String), ServiceName: Schema.optional(Schema.String), EventTypeName: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String)})
const EventTypeBatch = Schema.Array(EventTypeSummary)
const TargetSummary = Schema.Struct({TargetAddress: Schema.optional(Schema.String), TargetType: Schema.optional(Schema.String), TargetStatus: Schema.optional(Schema.String)})
const TargetsBatch = Schema.Array(TargetSummary)
const CreateNotificationRuleResult = Schema.Struct({Arn: Schema.optional(Schema.String)})
const LimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const DeleteNotificationRule = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/deleteNotificationRule", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "DeleteNotificationRule" }, DeleteNotificationRuleRequest, DeleteNotificationRuleResult, Schema.Union(ErrorAnnotation("ConcurrentModificationException", ConcurrentModificationException), ErrorAnnotation("LimitExceededException", LimitExceededException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const DescribeNotificationRuleResult = Schema.Struct({Arn: Schema.String, Name: Schema.optional(Schema.String), EventTypes: Schema.optional(EventTypeBatch), Resource: Schema.optional(Schema.String), Targets: Schema.optional(TargetsBatch), DetailType: Schema.optional(Schema.String), CreatedBy: Schema.optional(Schema.String), Status: Schema.optional(Schema.String), CreatedTimestamp: Schema.optional(Schema.Date), LastModifiedTimestamp: Schema.optional(Schema.Date), Tags: Schema.optional(Tags)})
export const DescribeNotificationRule = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/describeNotificationRule", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "DescribeNotificationRule" }, DescribeNotificationRuleRequest, DescribeNotificationRuleResult, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ListEventTypesResult = Schema.Struct({EventTypes: Schema.optional(EventTypeBatch), NextToken: Schema.optional(Schema.String)})
const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/listTagsForResource", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResult, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ListTargetsResult = Schema.Struct({Targets: Schema.optional(TargetsBatch), NextToken: Schema.optional(Schema.String)})
export const ListTargets = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/listTargets", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "ListTargets" }, ListTargetsRequest, ListTargetsResult, Schema.Union(ErrorAnnotation("InvalidNextTokenException", InvalidNextTokenException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const NotificationRuleSummary = Schema.Struct({Id: Schema.optional(Schema.String), Arn: Schema.optional(Schema.String)})
const NotificationRuleBatch = Schema.Array(NotificationRuleSummary)
const AccessDeniedException = Schema.Struct({Message: Schema.optional(Schema.String)})
const InvalidNextTokenException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const ListEventTypes = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/listEventTypes", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "ListEventTypes" }, ListEventTypesRequest, ListEventTypesResult, Schema.Union(ErrorAnnotation("InvalidNextTokenException", InvalidNextTokenException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ListNotificationRulesResult = Schema.Struct({NextToken: Schema.optional(Schema.String), NotificationRules: Schema.optional(NotificationRuleBatch)})
export const ListNotificationRules = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/listNotificationRules", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "ListNotificationRules" }, ListNotificationRulesRequest, ListNotificationRulesResult, Schema.Union(ErrorAnnotation("InvalidNextTokenException", InvalidNextTokenException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceAlreadyExistsException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const CreateNotificationRule = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/createNotificationRule", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CreateNotificationRule" }, CreateNotificationRuleRequest, CreateNotificationRuleResult, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ConcurrentModificationException", ConcurrentModificationException), ErrorAnnotation("ConfigurationException", ConfigurationException), ErrorAnnotation("LimitExceededException", LimitExceededException), ErrorAnnotation("ResourceAlreadyExistsException", ResourceAlreadyExistsException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

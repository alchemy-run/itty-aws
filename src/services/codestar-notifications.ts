import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const EventTypeIds = S.Array(S.String);
export const TagKeys = S.Array(S.String);
export class DeleteNotificationRuleRequest extends S.Class<DeleteNotificationRuleRequest>("DeleteNotificationRuleRequest")({Arn: S.String}) {}
export class DeleteTargetRequest extends S.Class<DeleteTargetRequest>("DeleteTargetRequest")({TargetAddress: S.String, ForceUnsubscribeAll: S.optional(S.Boolean)}) {}
export class DeleteTargetResult extends S.Class<DeleteTargetResult>("DeleteTargetResult")({}) {}
export class DescribeNotificationRuleRequest extends S.Class<DescribeNotificationRuleRequest>("DescribeNotificationRuleRequest")({Arn: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({Arn: S.String}) {}
export class Target extends S.Class<Target>("Target")({TargetType: S.optional(S.String), TargetAddress: S.optional(S.String)}) {}
export class SubscribeRequest extends S.Class<SubscribeRequest>("SubscribeRequest")({Arn: S.String, Target: Target, ClientRequestToken: S.optional(S.String)}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({Arn: S.String, Tags: Tags}) {}
export class UnsubscribeRequest extends S.Class<UnsubscribeRequest>("UnsubscribeRequest")({Arn: S.String, TargetAddress: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({Arn: S.String, TagKeys: TagKeys}) {}
export class UntagResourceResult extends S.Class<UntagResourceResult>("UntagResourceResult")({}) {}
export const Targets = S.Array(Target);
export class UpdateNotificationRuleRequest extends S.Class<UpdateNotificationRuleRequest>("UpdateNotificationRuleRequest")({Arn: S.String, Name: S.optional(S.String), Status: S.optional(S.String), EventTypeIds: S.optional(EventTypeIds), Targets: S.optional(Targets), DetailType: S.optional(S.String)}) {}
export class UpdateNotificationRuleResult extends S.Class<UpdateNotificationRuleResult>("UpdateNotificationRuleResult")({}) {}
export class ListEventTypesFilter extends S.Class<ListEventTypesFilter>("ListEventTypesFilter")({Name: S.String, Value: S.String}) {}
export const ListEventTypesFilters = S.Array(ListEventTypesFilter);
export class ListNotificationRulesFilter extends S.Class<ListNotificationRulesFilter>("ListNotificationRulesFilter")({Name: S.String, Value: S.String}) {}
export const ListNotificationRulesFilters = S.Array(ListNotificationRulesFilter);
export class ListTargetsFilter extends S.Class<ListTargetsFilter>("ListTargetsFilter")({Name: S.String, Value: S.String}) {}
export const ListTargetsFilters = S.Array(ListTargetsFilter);
export class CreateNotificationRuleRequest extends S.Class<CreateNotificationRuleRequest>("CreateNotificationRuleRequest")({Name: S.String, EventTypeIds: EventTypeIds, Resource: S.String, Targets: Targets, DetailType: S.String, ClientRequestToken: S.optional(S.String), Tags: S.optional(Tags), Status: S.optional(S.String)}) {}
export class DeleteNotificationRuleResult extends S.Class<DeleteNotificationRuleResult>("DeleteNotificationRuleResult")({Arn: S.optional(S.String)}) {}
export class ListEventTypesRequest extends S.Class<ListEventTypesRequest>("ListEventTypesRequest")({Filters: S.optional(ListEventTypesFilters), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListNotificationRulesRequest extends S.Class<ListNotificationRulesRequest>("ListNotificationRulesRequest")({Filters: S.optional(ListNotificationRulesFilters), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceResult extends S.Class<ListTagsForResourceResult>("ListTagsForResourceResult")({Tags: S.optional(Tags)}) {}
export class ListTargetsRequest extends S.Class<ListTargetsRequest>("ListTargetsRequest")({Filters: S.optional(ListTargetsFilters), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class SubscribeResult extends S.Class<SubscribeResult>("SubscribeResult")({Arn: S.optional(S.String)}) {}
export class TagResourceResult extends S.Class<TagResourceResult>("TagResourceResult")({Tags: S.optional(Tags)}) {}
export class UnsubscribeResult extends S.Class<UnsubscribeResult>("UnsubscribeResult")({Arn: S.String}) {}
export class EventTypeSummary extends S.Class<EventTypeSummary>("EventTypeSummary")({EventTypeId: S.optional(S.String), ServiceName: S.optional(S.String), EventTypeName: S.optional(S.String), ResourceType: S.optional(S.String)}) {}
export const EventTypeBatch = S.Array(EventTypeSummary);
export class TargetSummary extends S.Class<TargetSummary>("TargetSummary")({TargetAddress: S.optional(S.String), TargetType: S.optional(S.String), TargetStatus: S.optional(S.String)}) {}
export const TargetsBatch = S.Array(TargetSummary);
export class CreateNotificationRuleResult extends S.Class<CreateNotificationRuleResult>("CreateNotificationRuleResult")({Arn: S.optional(S.String)}) {}
export class DescribeNotificationRuleResult extends S.Class<DescribeNotificationRuleResult>("DescribeNotificationRuleResult")({Arn: S.String, Name: S.optional(S.String), EventTypes: S.optional(EventTypeBatch), Resource: S.optional(S.String), Targets: S.optional(TargetsBatch), DetailType: S.optional(S.String), CreatedBy: S.optional(S.String), Status: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), LastModifiedTimestamp: S.optional(S.Date), Tags: S.optional(Tags)}) {}
export class ListEventTypesResult extends S.Class<ListEventTypesResult>("ListEventTypesResult")({EventTypes: S.optional(EventTypeBatch), NextToken: S.optional(S.String)}) {}
export class ListTargetsResult extends S.Class<ListTargetsResult>("ListTargetsResult")({Targets: S.optional(TargetsBatch), NextToken: S.optional(S.String)}) {}
export class NotificationRuleSummary extends S.Class<NotificationRuleSummary>("NotificationRuleSummary")({Id: S.optional(S.String), Arn: S.optional(S.String)}) {}
export const NotificationRuleBatch = S.Array(NotificationRuleSummary);
export class ListNotificationRulesResult extends S.Class<ListNotificationRulesResult>("ListNotificationRulesResult")({NextToken: S.optional(S.String), NotificationRules: S.optional(NotificationRuleBatch)}) {}

//# Errors
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {Message: S.optional(S.String)}) {};
export class ConfigurationException extends S.TaggedError<ConfigurationException>()("ConfigurationException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class InvalidNextTokenException extends S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {Message: S.optional(S.String)}) {};
export class ResourceAlreadyExistsException extends S.TaggedError<ResourceAlreadyExistsException>()("ResourceAlreadyExistsException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes a specified target for notifications.
 */export const deleteTarget = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/deleteTarget", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.DeleteTarget" }, DeleteTargetRequest, DeleteTargetResult, [ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an association between a notification rule and an Amazon Q Developer in chat applications topic or Amazon Q Developer in chat applications client so that the
 * associated target can receive notifications when the events described in the rule are
 * triggered.
 */export const subscribe = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/subscribe", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.Subscribe" }, SubscribeRequest, SubscribeResult, [ConfigurationException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a set of provided tags with a notification rule.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/tagResource", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.TagResource" }, TagResourceRequest, TagResourceResult, [ConcurrentModificationException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes an association between a notification rule and an Amazon Q Developer in chat applications topic so that
 * subscribers to that topic stop receiving notifications when the events described in the
 * rule are triggered.
 */export const unsubscribe = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/unsubscribe", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.Unsubscribe" }, UnsubscribeRequest, UnsubscribeResult, [ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the association between one or more provided tags and a notification
 * rule.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/untagResource/{Arn}", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.UntagResource" }, UntagResourceRequest, UntagResourceResult, [ConcurrentModificationException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a notification rule for a resource. You can change the events that trigger the
 * notification rule, the status of the rule, and the targets that receive the
 * notifications.
 * 
 * 
 * 
 * 
 * To add or remove tags for a notification rule, you must use TagResource and UntagResource.
 */export const updateNotificationRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/updateNotificationRule", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.UpdateNotificationRule" }, UpdateNotificationRuleRequest, UpdateNotificationRuleResult, [ConfigurationException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a notification rule for a resource.
 */export const deleteNotificationRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/deleteNotificationRule", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.DeleteNotificationRule" }, DeleteNotificationRuleRequest, DeleteNotificationRuleResult, [ConcurrentModificationException, LimitExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a specified notification rule.
 */export const describeNotificationRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/describeNotificationRule", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.DescribeNotificationRule" }, DescribeNotificationRuleRequest, DescribeNotificationRuleResult, [ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the tags associated with a notification rule.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/listTagsForResource", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResult, [ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the notification rule targets for an Amazon Web Services account.
 */export const listTargets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/listTargets", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.ListTargets" }, ListTargetsRequest, ListTargetsResult, [InvalidNextTokenException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the event types available for configuring notifications.
 */export const listEventTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/listEventTypes", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.ListEventTypes" }, ListEventTypesRequest, ListEventTypesResult, [InvalidNextTokenException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the notification rules for an Amazon Web Services account.
 */export const listNotificationRules = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/listNotificationRules", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.ListNotificationRules" }, ListNotificationRulesRequest, ListNotificationRulesResult, [InvalidNextTokenException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a notification rule for a resource. The rule specifies the events you want
 * notifications about and the targets (such as Amazon Q Developer in chat applications topics or Amazon Q Developer in chat applications clients configured for Slack) where you want to receive
 * them.
 */export const createNotificationRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/createNotificationRule", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.CreateNotificationRule" }, CreateNotificationRuleRequest, CreateNotificationRuleResult, [AccessDeniedException, ConcurrentModificationException, ConfigurationException, LimitExceededException, ResourceAlreadyExistsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

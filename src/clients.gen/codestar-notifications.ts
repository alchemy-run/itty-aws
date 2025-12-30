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
export class ValidationException extends S.Class<ValidationException>("ValidationException")({Message: S.optional(S.String)}) {}
export class ListEventTypesRequest extends S.Class<ListEventTypesRequest>("ListEventTypesRequest")({Filters: S.optional(ListEventTypesFilters), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListNotificationRulesRequest extends S.Class<ListNotificationRulesRequest>("ListNotificationRulesRequest")({Filters: S.optional(ListNotificationRulesFilters), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceResult extends S.Class<ListTagsForResourceResult>("ListTagsForResourceResult")({Tags: S.optional(Tags)}) {}
export class ListTargetsRequest extends S.Class<ListTargetsRequest>("ListTargetsRequest")({Filters: S.optional(ListTargetsFilters), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class SubscribeResult extends S.Class<SubscribeResult>("SubscribeResult")({Arn: S.optional(S.String)}) {}
export class TagResourceResult extends S.Class<TagResourceResult>("TagResourceResult")({Tags: S.optional(Tags)}) {}
export class UnsubscribeResult extends S.Class<UnsubscribeResult>("UnsubscribeResult")({Arn: S.String}) {}
export class ConcurrentModificationException extends S.Class<ConcurrentModificationException>("ConcurrentModificationException")({Message: S.optional(S.String)}) {}
export class ConfigurationException extends S.Class<ConfigurationException>("ConfigurationException")({Message: S.optional(S.String)}) {}
export class EventTypeSummary extends S.Class<EventTypeSummary>("EventTypeSummary")({EventTypeId: S.optional(S.String), ServiceName: S.optional(S.String), EventTypeName: S.optional(S.String), ResourceType: S.optional(S.String)}) {}
export const EventTypeBatch = S.Array(EventTypeSummary);
export class TargetSummary extends S.Class<TargetSummary>("TargetSummary")({TargetAddress: S.optional(S.String), TargetType: S.optional(S.String), TargetStatus: S.optional(S.String)}) {}
export const TargetsBatch = S.Array(TargetSummary);
export class CreateNotificationRuleResult extends S.Class<CreateNotificationRuleResult>("CreateNotificationRuleResult")({Arn: S.optional(S.String)}) {}
export class LimitExceededException extends S.Class<LimitExceededException>("LimitExceededException")({Message: S.optional(S.String)}) {}
export class DescribeNotificationRuleResult extends S.Class<DescribeNotificationRuleResult>("DescribeNotificationRuleResult")({Arn: S.String, Name: S.optional(S.String), EventTypes: S.optional(EventTypeBatch), Resource: S.optional(S.String), Targets: S.optional(TargetsBatch), DetailType: S.optional(S.String), CreatedBy: S.optional(S.String), Status: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), LastModifiedTimestamp: S.optional(S.Date), Tags: S.optional(Tags)}) {}
export class ListEventTypesResult extends S.Class<ListEventTypesResult>("ListEventTypesResult")({EventTypes: S.optional(EventTypeBatch), NextToken: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: S.optional(S.String)}) {}
export class ListTargetsResult extends S.Class<ListTargetsResult>("ListTargetsResult")({Targets: S.optional(TargetsBatch), NextToken: S.optional(S.String)}) {}
export class NotificationRuleSummary extends S.Class<NotificationRuleSummary>("NotificationRuleSummary")({Id: S.optional(S.String), Arn: S.optional(S.String)}) {}
export const NotificationRuleBatch = S.Array(NotificationRuleSummary);
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({Message: S.optional(S.String)}) {}
export class InvalidNextTokenException extends S.Class<InvalidNextTokenException>("InvalidNextTokenException")({Message: S.optional(S.String)}) {}
export class ListNotificationRulesResult extends S.Class<ListNotificationRulesResult>("ListNotificationRulesResult")({NextToken: S.optional(S.String), NotificationRules: S.optional(NotificationRuleBatch)}) {}
export class ResourceAlreadyExistsException extends S.Class<ResourceAlreadyExistsException>("ResourceAlreadyExistsException")({Message: S.optional(S.String)}) {}

//# Errors
export class ConcurrentModificationExceptionError extends S.TaggedError<ConcurrentModificationExceptionError>()("ConcurrentModificationException", ConcurrentModificationException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ConfigurationExceptionError extends S.TaggedError<ConfigurationExceptionError>()("ConfigurationException", ConfigurationException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class LimitExceededExceptionError extends S.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException.fields) {};
export class InvalidNextTokenExceptionError extends S.TaggedError<InvalidNextTokenExceptionError>()("InvalidNextTokenException", InvalidNextTokenException.fields) {};
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ResourceAlreadyExistsExceptionError extends S.TaggedError<ResourceAlreadyExistsExceptionError>()("ResourceAlreadyExistsException", ResourceAlreadyExistsException.fields) {};

//# Operations
export const deleteTarget = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/deleteTarget", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.DeleteTarget" }, DeleteTargetRequest, DeleteTargetResult, [ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const subscribe = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/subscribe", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.Subscribe" }, SubscribeRequest, SubscribeResult, [ConfigurationExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/tagResource", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.TagResource" }, TagResourceRequest, TagResourceResult, [ConcurrentModificationExceptionError, LimitExceededExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const unsubscribe = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/unsubscribe", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.Unsubscribe" }, UnsubscribeRequest, UnsubscribeResult, [ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/untagResource/{Arn}", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.UntagResource" }, UntagResourceRequest, UntagResourceResult, [ConcurrentModificationExceptionError, LimitExceededExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateNotificationRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/updateNotificationRule", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.UpdateNotificationRule" }, UpdateNotificationRuleRequest, UpdateNotificationRuleResult, [ConfigurationExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteNotificationRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/deleteNotificationRule", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.DeleteNotificationRule" }, DeleteNotificationRuleRequest, DeleteNotificationRuleResult, [ConcurrentModificationExceptionError, LimitExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const describeNotificationRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/describeNotificationRule", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.DescribeNotificationRule" }, DescribeNotificationRuleRequest, DescribeNotificationRuleResult, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/listTagsForResource", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResult, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTargets = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/listTargets", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.ListTargets" }, ListTargetsRequest, ListTargetsResult, [InvalidNextTokenExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listEventTypes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/listEventTypes", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.ListEventTypes" }, ListEventTypesRequest, ListEventTypesResult, [InvalidNextTokenExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listNotificationRules = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/listNotificationRules", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.ListNotificationRules" }, ListNotificationRulesRequest, ListNotificationRulesResult, [InvalidNextTokenExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createNotificationRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-10-15", uri: "/createNotificationRule", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.CreateNotificationRule" }, CreateNotificationRuleRequest, CreateNotificationRuleResult, [AccessDeniedExceptionError, ConcurrentModificationExceptionError, ConfigurationExceptionError, LimitExceededExceptionError, ResourceAlreadyExistsExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

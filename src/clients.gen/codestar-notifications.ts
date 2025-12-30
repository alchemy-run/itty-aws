import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const EventTypeIds = Schema.Array(Schema.String);
export const TagKeys = Schema.Array(Schema.String);
export class DeleteNotificationRuleRequest extends Schema.Class<DeleteNotificationRuleRequest>("DeleteNotificationRuleRequest")({Arn: Schema.String}) {}
export class DeleteTargetRequest extends Schema.Class<DeleteTargetRequest>("DeleteTargetRequest")({TargetAddress: Schema.String, ForceUnsubscribeAll: Schema.optional(Schema.Boolean)}) {}
export class DeleteTargetResult extends Schema.Class<DeleteTargetResult>("DeleteTargetResult")({}) {}
export class DescribeNotificationRuleRequest extends Schema.Class<DescribeNotificationRuleRequest>("DescribeNotificationRuleRequest")({Arn: Schema.String}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({Arn: Schema.String}) {}
export class Target extends Schema.Class<Target>("Target")({TargetType: Schema.optional(Schema.String), TargetAddress: Schema.optional(Schema.String)}) {}
export class SubscribeRequest extends Schema.Class<SubscribeRequest>("SubscribeRequest")({Arn: Schema.String, Target: Target, ClientRequestToken: Schema.optional(Schema.String)}) {}
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({Arn: Schema.String, Tags: Tags}) {}
export class UnsubscribeRequest extends Schema.Class<UnsubscribeRequest>("UnsubscribeRequest")({Arn: Schema.String, TargetAddress: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({Arn: Schema.String, TagKeys: TagKeys}) {}
export class UntagResourceResult extends Schema.Class<UntagResourceResult>("UntagResourceResult")({}) {}
export const Targets = Schema.Array(Target);
export class UpdateNotificationRuleRequest extends Schema.Class<UpdateNotificationRuleRequest>("UpdateNotificationRuleRequest")({Arn: Schema.String, Name: Schema.optional(Schema.String), Status: Schema.optional(Schema.String), EventTypeIds: Schema.optional(EventTypeIds), Targets: Schema.optional(Targets), DetailType: Schema.optional(Schema.String)}) {}
export class UpdateNotificationRuleResult extends Schema.Class<UpdateNotificationRuleResult>("UpdateNotificationRuleResult")({}) {}
export class ListEventTypesFilter extends Schema.Class<ListEventTypesFilter>("ListEventTypesFilter")({Name: Schema.String, Value: Schema.String}) {}
export const ListEventTypesFilters = Schema.Array(ListEventTypesFilter);
export class ListNotificationRulesFilter extends Schema.Class<ListNotificationRulesFilter>("ListNotificationRulesFilter")({Name: Schema.String, Value: Schema.String}) {}
export const ListNotificationRulesFilters = Schema.Array(ListNotificationRulesFilter);
export class ListTargetsFilter extends Schema.Class<ListTargetsFilter>("ListTargetsFilter")({Name: Schema.String, Value: Schema.String}) {}
export const ListTargetsFilters = Schema.Array(ListTargetsFilter);
export class CreateNotificationRuleRequest extends Schema.Class<CreateNotificationRuleRequest>("CreateNotificationRuleRequest")({Name: Schema.String, EventTypeIds: EventTypeIds, Resource: Schema.String, Targets: Targets, DetailType: Schema.String, ClientRequestToken: Schema.optional(Schema.String), Tags: Schema.optional(Tags), Status: Schema.optional(Schema.String)}) {}
export class DeleteNotificationRuleResult extends Schema.Class<DeleteNotificationRuleResult>("DeleteNotificationRuleResult")({Arn: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.optional(Schema.String)}) {}
export class ListEventTypesRequest extends Schema.Class<ListEventTypesRequest>("ListEventTypesRequest")({Filters: Schema.optional(ListEventTypesFilters), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class ListNotificationRulesRequest extends Schema.Class<ListNotificationRulesRequest>("ListNotificationRulesRequest")({Filters: Schema.optional(ListNotificationRulesFilters), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class ListTagsForResourceResult extends Schema.Class<ListTagsForResourceResult>("ListTagsForResourceResult")({Tags: Schema.optional(Tags)}) {}
export class ListTargetsRequest extends Schema.Class<ListTargetsRequest>("ListTargetsRequest")({Filters: Schema.optional(ListTargetsFilters), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class SubscribeResult extends Schema.Class<SubscribeResult>("SubscribeResult")({Arn: Schema.optional(Schema.String)}) {}
export class TagResourceResult extends Schema.Class<TagResourceResult>("TagResourceResult")({Tags: Schema.optional(Tags)}) {}
export class UnsubscribeResult extends Schema.Class<UnsubscribeResult>("UnsubscribeResult")({Arn: Schema.String}) {}
export class ConcurrentModificationException extends Schema.Class<ConcurrentModificationException>("ConcurrentModificationException")({Message: Schema.optional(Schema.String)}) {}
export class ConfigurationException extends Schema.Class<ConfigurationException>("ConfigurationException")({Message: Schema.optional(Schema.String)}) {}
export class EventTypeSummary extends Schema.Class<EventTypeSummary>("EventTypeSummary")({EventTypeId: Schema.optional(Schema.String), ServiceName: Schema.optional(Schema.String), EventTypeName: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String)}) {}
export const EventTypeBatch = Schema.Array(EventTypeSummary);
export class TargetSummary extends Schema.Class<TargetSummary>("TargetSummary")({TargetAddress: Schema.optional(Schema.String), TargetType: Schema.optional(Schema.String), TargetStatus: Schema.optional(Schema.String)}) {}
export const TargetsBatch = Schema.Array(TargetSummary);
export class CreateNotificationRuleResult extends Schema.Class<CreateNotificationRuleResult>("CreateNotificationRuleResult")({Arn: Schema.optional(Schema.String)}) {}
export class LimitExceededException extends Schema.Class<LimitExceededException>("LimitExceededException")({Message: Schema.optional(Schema.String)}) {}
export class DescribeNotificationRuleResult extends Schema.Class<DescribeNotificationRuleResult>("DescribeNotificationRuleResult")({Arn: Schema.String, Name: Schema.optional(Schema.String), EventTypes: Schema.optional(EventTypeBatch), Resource: Schema.optional(Schema.String), Targets: Schema.optional(TargetsBatch), DetailType: Schema.optional(Schema.String), CreatedBy: Schema.optional(Schema.String), Status: Schema.optional(Schema.String), CreatedTimestamp: Schema.optional(Schema.Date), LastModifiedTimestamp: Schema.optional(Schema.Date), Tags: Schema.optional(Tags)}) {}
export class ListEventTypesResult extends Schema.Class<ListEventTypesResult>("ListEventTypesResult")({EventTypes: Schema.optional(EventTypeBatch), NextToken: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class ListTargetsResult extends Schema.Class<ListTargetsResult>("ListTargetsResult")({Targets: Schema.optional(TargetsBatch), NextToken: Schema.optional(Schema.String)}) {}
export class NotificationRuleSummary extends Schema.Class<NotificationRuleSummary>("NotificationRuleSummary")({Id: Schema.optional(Schema.String), Arn: Schema.optional(Schema.String)}) {}
export const NotificationRuleBatch = Schema.Array(NotificationRuleSummary);
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({Message: Schema.optional(Schema.String)}) {}
export class InvalidNextTokenException extends Schema.Class<InvalidNextTokenException>("InvalidNextTokenException")({Message: Schema.optional(Schema.String)}) {}
export class ListNotificationRulesResult extends Schema.Class<ListNotificationRulesResult>("ListNotificationRulesResult")({NextToken: Schema.optional(Schema.String), NotificationRules: Schema.optional(NotificationRuleBatch)}) {}
export class ResourceAlreadyExistsException extends Schema.Class<ResourceAlreadyExistsException>("ResourceAlreadyExistsException")({Message: Schema.optional(Schema.String)}) {}

//# Errors
export class ConcurrentModificationExceptionError extends Schema.TaggedError<ConcurrentModificationExceptionError>()("ConcurrentModificationException", ConcurrentModificationException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ConfigurationExceptionError extends Schema.TaggedError<ConfigurationExceptionError>()("ConfigurationException", ConfigurationException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class LimitExceededExceptionError extends Schema.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException.fields) {};
export class InvalidNextTokenExceptionError extends Schema.TaggedError<InvalidNextTokenExceptionError>()("InvalidNextTokenException", InvalidNextTokenException.fields) {};
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ResourceAlreadyExistsExceptionError extends Schema.TaggedError<ResourceAlreadyExistsExceptionError>()("ResourceAlreadyExistsException", ResourceAlreadyExistsException.fields) {};

//# Operations
export const deleteTarget = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-10-15", uri: "/deleteTarget", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.DeleteTarget" }, DeleteTargetRequest, DeleteTargetResult, [ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const subscribe = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-10-15", uri: "/subscribe", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.Subscribe" }, SubscribeRequest, SubscribeResult, [ConfigurationExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-10-15", uri: "/tagResource", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.TagResource" }, TagResourceRequest, TagResourceResult, [ConcurrentModificationExceptionError, LimitExceededExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const unsubscribe = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-10-15", uri: "/unsubscribe", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.Unsubscribe" }, UnsubscribeRequest, UnsubscribeResult, [ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-10-15", uri: "/untagResource/{Arn}", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.UntagResource" }, UntagResourceRequest, UntagResourceResult, [ConcurrentModificationExceptionError, LimitExceededExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateNotificationRule = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-10-15", uri: "/updateNotificationRule", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.UpdateNotificationRule" }, UpdateNotificationRuleRequest, UpdateNotificationRuleResult, [ConfigurationExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteNotificationRule = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-10-15", uri: "/deleteNotificationRule", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.DeleteNotificationRule" }, DeleteNotificationRuleRequest, DeleteNotificationRuleResult, [ConcurrentModificationExceptionError, LimitExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const describeNotificationRule = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-10-15", uri: "/describeNotificationRule", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.DescribeNotificationRule" }, DescribeNotificationRuleRequest, DescribeNotificationRuleResult, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-10-15", uri: "/listTagsForResource", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResult, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTargets = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-10-15", uri: "/listTargets", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.ListTargets" }, ListTargetsRequest, ListTargetsResult, [InvalidNextTokenExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listEventTypes = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-10-15", uri: "/listEventTypes", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.ListEventTypes" }, ListEventTypesRequest, ListEventTypesResult, [InvalidNextTokenExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listNotificationRules = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-10-15", uri: "/listNotificationRules", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.ListNotificationRules" }, ListNotificationRulesRequest, ListNotificationRulesResult, [InvalidNextTokenExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createNotificationRule = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-10-15", uri: "/createNotificationRule", method: "POST", sdkId: "codestar notifications", sigV4ServiceName: "codestar-notifications", name: "CodeStarNotifications_20191015.CreateNotificationRule" }, CreateNotificationRuleRequest, CreateNotificationRuleResult, [AccessDeniedExceptionError, ConcurrentModificationExceptionError, ConfigurationExceptionError, LimitExceededExceptionError, ResourceAlreadyExistsExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

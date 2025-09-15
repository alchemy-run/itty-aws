import type { Effect, Data as EffectData } from "effect";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | ThrottlingException
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException;
import { AWSServiceClient } from "../../client.ts";

export declare class codestarnotifications extends AWSServiceClient {
  createNotificationRule(
    input: CreateNotificationRuleRequest,
  ): Effect.Effect<
    CreateNotificationRuleResult,
    | AccessDeniedException
    | ConcurrentModificationException
    | ConfigurationException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ValidationException
    | CommonAwsError
  >;
  deleteNotificationRule(
    input: DeleteNotificationRuleRequest,
  ): Effect.Effect<
    DeleteNotificationRuleResult,
    | ConcurrentModificationException
    | LimitExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteTarget(
    input: DeleteTargetRequest,
  ): Effect.Effect<DeleteTargetResult, ValidationException | CommonAwsError>;
  describeNotificationRule(
    input: DescribeNotificationRuleRequest,
  ): Effect.Effect<
    DescribeNotificationRuleResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listEventTypes(
    input: ListEventTypesRequest,
  ): Effect.Effect<
    ListEventTypesResult,
    InvalidNextTokenException | ValidationException | CommonAwsError
  >;
  listNotificationRules(
    input: ListNotificationRulesRequest,
  ): Effect.Effect<
    ListNotificationRulesResult,
    InvalidNextTokenException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listTargets(
    input: ListTargetsRequest,
  ): Effect.Effect<
    ListTargetsResult,
    InvalidNextTokenException | ValidationException | CommonAwsError
  >;
  subscribe(
    input: SubscribeRequest,
  ): Effect.Effect<
    SubscribeResult,
    | ConfigurationException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResult,
    | ConcurrentModificationException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  unsubscribe(
    input: UnsubscribeRequest,
  ): Effect.Effect<UnsubscribeResult, ValidationException | CommonAwsError>;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResult,
    | ConcurrentModificationException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateNotificationRule(
    input: UpdateNotificationRuleRequest,
  ): Effect.Effect<
    UpdateNotificationRuleResult,
    | ConfigurationException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class CodestarNotifications extends codestarnotifications {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type ClientRequestToken = string;

export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export declare class ConfigurationException extends EffectData.TaggedError(
  "ConfigurationException",
)<{
  readonly Message?: string;
}> {}
export type CreatedTimestamp = Date | string;

export interface CreateNotificationRuleRequest {
  Name: string;
  EventTypeIds: Array<string>;
  Resource: string;
  Targets: Array<Target>;
  DetailType: DetailType;
  ClientRequestToken?: string;
  Tags?: Record<string, string>;
  Status?: NotificationRuleStatus;
}
export interface CreateNotificationRuleResult {
  Arn?: string;
}
export interface DeleteNotificationRuleRequest {
  Arn: string;
}
export interface DeleteNotificationRuleResult {
  Arn?: string;
}
export interface DeleteTargetRequest {
  TargetAddress: string;
  ForceUnsubscribeAll?: boolean;
}
export interface DeleteTargetResult {}
export interface DescribeNotificationRuleRequest {
  Arn: string;
}
export interface DescribeNotificationRuleResult {
  Arn: string;
  Name?: string;
  EventTypes?: Array<EventTypeSummary>;
  Resource?: string;
  Targets?: Array<TargetSummary>;
  DetailType?: DetailType;
  CreatedBy?: string;
  Status?: NotificationRuleStatus;
  CreatedTimestamp?: Date | string;
  LastModifiedTimestamp?: Date | string;
  Tags?: Record<string, string>;
}
export type DetailType = "BASIC" | "FULL";
export type EventTypeBatch = Array<EventTypeSummary>;
export type EventTypeId = string;

export type EventTypeIds = Array<string>;
export type EventTypeName = string;

export interface EventTypeSummary {
  EventTypeId?: string;
  ServiceName?: string;
  EventTypeName?: string;
  ResourceType?: string;
}
export type ForceUnsubscribeAll = boolean;

export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export type LastModifiedTimestamp = Date | string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListEventTypesFilter {
  Name: ListEventTypesFilterName;
  Value: string;
}
export type ListEventTypesFilterName = "RESOURCE_TYPE" | "SERVICE_NAME";
export type ListEventTypesFilters = Array<ListEventTypesFilter>;
export type ListEventTypesFilterValue = string;

export interface ListEventTypesRequest {
  Filters?: Array<ListEventTypesFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEventTypesResult {
  EventTypes?: Array<EventTypeSummary>;
  NextToken?: string;
}
export interface ListNotificationRulesFilter {
  Name: ListNotificationRulesFilterName;
  Value: string;
}
export type ListNotificationRulesFilterName =
  | "EVENT_TYPE_ID"
  | "CREATED_BY"
  | "RESOURCE"
  | "TARGET_ADDRESS";
export type ListNotificationRulesFilters = Array<ListNotificationRulesFilter>;
export type ListNotificationRulesFilterValue = string;

export interface ListNotificationRulesRequest {
  Filters?: Array<ListNotificationRulesFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListNotificationRulesResult {
  NextToken?: string;
  NotificationRules?: Array<NotificationRuleSummary>;
}
export interface ListTagsForResourceRequest {
  Arn: string;
}
export interface ListTagsForResourceResult {
  Tags?: Record<string, string>;
}
export interface ListTargetsFilter {
  Name: ListTargetsFilterName;
  Value: string;
}
export type ListTargetsFilterName =
  | "TARGET_TYPE"
  | "TARGET_ADDRESS"
  | "TARGET_STATUS";
export type ListTargetsFilters = Array<ListTargetsFilter>;
export type ListTargetsFilterValue = string;

export interface ListTargetsRequest {
  Filters?: Array<ListTargetsFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTargetsResult {
  Targets?: Array<TargetSummary>;
  NextToken?: string;
}
export type MaxResults = number;

export type Message = string;

export type NextToken = string;

export type NotificationRuleArn = string;

export type NotificationRuleBatch = Array<NotificationRuleSummary>;
export type NotificationRuleCreatedBy = string;

export type NotificationRuleId = string;

export type NotificationRuleName = string;

export type NotificationRuleResource = string;

export type NotificationRuleStatus = "ENABLED" | "DISABLED";
export interface NotificationRuleSummary {
  Id?: string;
  Arn?: string;
}
export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourceType = string;

export type ServiceName = string;

export interface SubscribeRequest {
  Arn: string;
  Target: Target;
  ClientRequestToken?: string;
}
export interface SubscribeResult {
  Arn?: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  Arn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResult {
  Tags?: Record<string, string>;
}
export type Tags = Record<string, string>;
export type TagValue = string;

export interface Target {
  TargetType?: string;
  TargetAddress?: string;
}
export type TargetAddress = string;

export type Targets = Array<Target>;
export type TargetsBatch = Array<TargetSummary>;
export type TargetStatus =
  | "PENDING"
  | "ACTIVE"
  | "UNREACHABLE"
  | "INACTIVE"
  | "DEACTIVATED";
export interface TargetSummary {
  TargetAddress?: string;
  TargetType?: string;
  TargetStatus?: TargetStatus;
}
export type TargetType = string;

export interface UnsubscribeRequest {
  Arn: string;
  TargetAddress: string;
}
export interface UnsubscribeResult {
  Arn: string;
}
export interface UntagResourceRequest {
  Arn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResult {}
export interface UpdateNotificationRuleRequest {
  Arn: string;
  Name?: string;
  Status?: NotificationRuleStatus;
  EventTypeIds?: Array<string>;
  Targets?: Array<Target>;
  DetailType?: DetailType;
}
export interface UpdateNotificationRuleResult {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace CreateNotificationRule {
  export type Input = CreateNotificationRuleRequest;
  export type Output = CreateNotificationRuleResult;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | ConfigurationException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteNotificationRule {
  export type Input = DeleteNotificationRuleRequest;
  export type Output = DeleteNotificationRuleResult;
  export type Error =
    | ConcurrentModificationException
    | LimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTarget {
  export type Input = DeleteTargetRequest;
  export type Output = DeleteTargetResult;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace DescribeNotificationRule {
  export type Input = DescribeNotificationRuleRequest;
  export type Output = DescribeNotificationRuleResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEventTypes {
  export type Input = ListEventTypesRequest;
  export type Output = ListEventTypesResult;
  export type Error =
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNotificationRules {
  export type Input = ListNotificationRulesRequest;
  export type Output = ListNotificationRulesResult;
  export type Error =
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTargets {
  export type Input = ListTargetsRequest;
  export type Output = ListTargetsResult;
  export type Error =
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Subscribe {
  export type Input = SubscribeRequest;
  export type Output = SubscribeResult;
  export type Error =
    | ConfigurationException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResult;
  export type Error =
    | ConcurrentModificationException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Unsubscribe {
  export type Input = UnsubscribeRequest;
  export type Output = UnsubscribeResult;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResult;
  export type Error =
    | ConcurrentModificationException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateNotificationRule {
  export type Input = UpdateNotificationRuleRequest;
  export type Output = UpdateNotificationRuleResult;
  export type Error =
    | ConfigurationException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ResourceTagKeyList = S.Array(S.String);
export class Notification extends S.Class<Notification>("Notification")({NotificationType: S.String, ComparisonOperator: S.String, Threshold: S.Number, ThresholdType: S.optional(S.String), NotificationState: S.optional(S.String)}) {}
export class Subscriber extends S.Class<Subscriber>("Subscriber")({SubscriptionType: S.String, Address: S.String}) {}
export class CreateSubscriberRequest extends S.Class<CreateSubscriberRequest>("CreateSubscriberRequest")({AccountId: S.String, BudgetName: S.String, Notification: Notification, Subscriber: Subscriber}) {}
export class CreateSubscriberResponse extends S.Class<CreateSubscriberResponse>("CreateSubscriberResponse")({}) {}
export class DeleteBudgetRequest extends S.Class<DeleteBudgetRequest>("DeleteBudgetRequest")({AccountId: S.String, BudgetName: S.String}) {}
export class DeleteBudgetResponse extends S.Class<DeleteBudgetResponse>("DeleteBudgetResponse")({}) {}
export class DeleteBudgetActionRequest extends S.Class<DeleteBudgetActionRequest>("DeleteBudgetActionRequest")({AccountId: S.String, BudgetName: S.String, ActionId: S.String}) {}
export class DeleteNotificationRequest extends S.Class<DeleteNotificationRequest>("DeleteNotificationRequest")({AccountId: S.String, BudgetName: S.String, Notification: Notification}) {}
export class DeleteNotificationResponse extends S.Class<DeleteNotificationResponse>("DeleteNotificationResponse")({}) {}
export class DeleteSubscriberRequest extends S.Class<DeleteSubscriberRequest>("DeleteSubscriberRequest")({AccountId: S.String, BudgetName: S.String, Notification: Notification, Subscriber: Subscriber}) {}
export class DeleteSubscriberResponse extends S.Class<DeleteSubscriberResponse>("DeleteSubscriberResponse")({}) {}
export class DescribeBudgetRequest extends S.Class<DescribeBudgetRequest>("DescribeBudgetRequest")({AccountId: S.String, BudgetName: S.String, ShowFilterExpression: S.optional(S.Boolean)}) {}
export class DescribeBudgetActionRequest extends S.Class<DescribeBudgetActionRequest>("DescribeBudgetActionRequest")({AccountId: S.String, BudgetName: S.String, ActionId: S.String}) {}
export class DescribeBudgetActionsForAccountRequest extends S.Class<DescribeBudgetActionsForAccountRequest>("DescribeBudgetActionsForAccountRequest")({AccountId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeBudgetActionsForBudgetRequest extends S.Class<DescribeBudgetActionsForBudgetRequest>("DescribeBudgetActionsForBudgetRequest")({AccountId: S.String, BudgetName: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeBudgetNotificationsForAccountRequest extends S.Class<DescribeBudgetNotificationsForAccountRequest>("DescribeBudgetNotificationsForAccountRequest")({AccountId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class TimePeriod extends S.Class<TimePeriod>("TimePeriod")({Start: S.optional(S.Date), End: S.optional(S.Date)}) {}
export class DescribeBudgetPerformanceHistoryRequest extends S.Class<DescribeBudgetPerformanceHistoryRequest>("DescribeBudgetPerformanceHistoryRequest")({AccountId: S.String, BudgetName: S.String, TimePeriod: S.optional(TimePeriod), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeBudgetsRequest extends S.Class<DescribeBudgetsRequest>("DescribeBudgetsRequest")({AccountId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ShowFilterExpression: S.optional(S.Boolean)}) {}
export class DescribeNotificationsForBudgetRequest extends S.Class<DescribeNotificationsForBudgetRequest>("DescribeNotificationsForBudgetRequest")({AccountId: S.String, BudgetName: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeSubscribersForNotificationRequest extends S.Class<DescribeSubscribersForNotificationRequest>("DescribeSubscribersForNotificationRequest")({AccountId: S.String, BudgetName: S.String, Notification: Notification, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ExecuteBudgetActionRequest extends S.Class<ExecuteBudgetActionRequest>("ExecuteBudgetActionRequest")({AccountId: S.String, BudgetName: S.String, ActionId: S.String, ExecutionType: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String}) {}
export class ResourceTag extends S.Class<ResourceTag>("ResourceTag")({Key: S.String, Value: S.String}) {}
export const ResourceTagList = S.Array(ResourceTag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, ResourceTags: ResourceTagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, ResourceTagKeys: ResourceTagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class Spend extends S.Class<Spend>("Spend")({Amount: S.String, Unit: S.String}) {}
export const PlannedBudgetLimits = S.Record({key: S.String, value: Spend});
export const DimensionValues = S.Array(S.String);
export const CostFilters = S.Record({key: S.String, value: DimensionValues});
export class CostTypes extends S.Class<CostTypes>("CostTypes")({IncludeTax: S.optional(S.Boolean), IncludeSubscription: S.optional(S.Boolean), UseBlended: S.optional(S.Boolean), IncludeRefund: S.optional(S.Boolean), IncludeCredit: S.optional(S.Boolean), IncludeUpfront: S.optional(S.Boolean), IncludeRecurring: S.optional(S.Boolean), IncludeOtherSubscription: S.optional(S.Boolean), IncludeSupport: S.optional(S.Boolean), IncludeDiscount: S.optional(S.Boolean), UseAmortized: S.optional(S.Boolean)}) {}
export class CalculatedSpend extends S.Class<CalculatedSpend>("CalculatedSpend")({ActualSpend: Spend, ForecastedSpend: S.optional(Spend)}) {}
export class HistoricalOptions extends S.Class<HistoricalOptions>("HistoricalOptions")({BudgetAdjustmentPeriod: S.Number, LookBackAvailablePeriods: S.optional(S.Number)}) {}
export class AutoAdjustData extends S.Class<AutoAdjustData>("AutoAdjustData")({AutoAdjustType: S.String, HistoricalOptions: S.optional(HistoricalOptions), LastAutoAdjustTime: S.optional(S.Date)}) {}
export const Values = S.Array(S.String);
export const MatchOptions = S.Array(S.String);
export class ExpressionDimensionValues extends S.Class<ExpressionDimensionValues>("ExpressionDimensionValues")({Key: S.String, Values: Values, MatchOptions: S.optional(MatchOptions)}) {}
export class TagValues extends S.Class<TagValues>("TagValues")({Key: S.optional(S.String), Values: S.optional(Values), MatchOptions: S.optional(MatchOptions)}) {}
export class CostCategoryValues extends S.Class<CostCategoryValues>("CostCategoryValues")({Key: S.optional(S.String), Values: S.optional(Values), MatchOptions: S.optional(MatchOptions)}) {}
export class Expression extends S.Class<Expression>("Expression")({Or: S.optional(S.suspend(() => Expressions)), And: S.optional(S.suspend(() => Expressions)), Not: S.optional(S.suspend((): S.Schema<Expression, any> => Expression)), Dimensions: S.optional(ExpressionDimensionValues), Tags: S.optional(TagValues), CostCategories: S.optional(CostCategoryValues)}) {}
export const Metrics = S.Array(S.String);
export class HealthStatus extends S.Class<HealthStatus>("HealthStatus")({Status: S.optional(S.String), StatusReason: S.optional(S.String), LastUpdatedTime: S.optional(S.Date)}) {}
export class Budget extends S.Class<Budget>("Budget")({BudgetName: S.String, BudgetLimit: S.optional(Spend), PlannedBudgetLimits: S.optional(PlannedBudgetLimits), CostFilters: S.optional(CostFilters), CostTypes: S.optional(CostTypes), TimeUnit: S.String, TimePeriod: S.optional(TimePeriod), CalculatedSpend: S.optional(CalculatedSpend), BudgetType: S.String, LastUpdatedTime: S.optional(S.Date), AutoAdjustData: S.optional(AutoAdjustData), FilterExpression: S.optional(Expression), Metrics: S.optional(Metrics), BillingViewArn: S.optional(S.String), HealthStatus: S.optional(HealthStatus)}) {}
export class UpdateBudgetRequest extends S.Class<UpdateBudgetRequest>("UpdateBudgetRequest")({AccountId: S.String, NewBudget: Budget}) {}
export class UpdateBudgetResponse extends S.Class<UpdateBudgetResponse>("UpdateBudgetResponse")({}) {}
export class ActionThreshold extends S.Class<ActionThreshold>("ActionThreshold")({ActionThresholdValue: S.Number, ActionThresholdType: S.String}) {}
export const Roles = S.Array(S.String);
export const Groups = S.Array(S.String);
export const Users = S.Array(S.String);
export class IamActionDefinition extends S.Class<IamActionDefinition>("IamActionDefinition")({PolicyArn: S.String, Roles: S.optional(Roles), Groups: S.optional(Groups), Users: S.optional(Users)}) {}
export const TargetIds = S.Array(S.String);
export class ScpActionDefinition extends S.Class<ScpActionDefinition>("ScpActionDefinition")({PolicyId: S.String, TargetIds: TargetIds}) {}
export const InstanceIds = S.Array(S.String);
export class SsmActionDefinition extends S.Class<SsmActionDefinition>("SsmActionDefinition")({ActionSubType: S.String, Region: S.String, InstanceIds: InstanceIds}) {}
export class Definition extends S.Class<Definition>("Definition")({IamActionDefinition: S.optional(IamActionDefinition), ScpActionDefinition: S.optional(ScpActionDefinition), SsmActionDefinition: S.optional(SsmActionDefinition)}) {}
export const Subscribers = S.Array(Subscriber);
export class UpdateBudgetActionRequest extends S.Class<UpdateBudgetActionRequest>("UpdateBudgetActionRequest")({AccountId: S.String, BudgetName: S.String, ActionId: S.String, NotificationType: S.optional(S.String), ActionThreshold: S.optional(ActionThreshold), Definition: S.optional(Definition), ExecutionRoleArn: S.optional(S.String), ApprovalModel: S.optional(S.String), Subscribers: S.optional(Subscribers)}) {}
export class UpdateNotificationRequest extends S.Class<UpdateNotificationRequest>("UpdateNotificationRequest")({AccountId: S.String, BudgetName: S.String, OldNotification: Notification, NewNotification: Notification}) {}
export class UpdateNotificationResponse extends S.Class<UpdateNotificationResponse>("UpdateNotificationResponse")({}) {}
export class UpdateSubscriberRequest extends S.Class<UpdateSubscriberRequest>("UpdateSubscriberRequest")({AccountId: S.String, BudgetName: S.String, Notification: Notification, OldSubscriber: Subscriber, NewSubscriber: Subscriber}) {}
export class UpdateSubscriberResponse extends S.Class<UpdateSubscriberResponse>("UpdateSubscriberResponse")({}) {}
export class NotificationWithSubscribers extends S.Class<NotificationWithSubscribers>("NotificationWithSubscribers")({Notification: Notification, Subscribers: Subscribers}) {}
export const NotificationWithSubscribersList = S.Array(NotificationWithSubscribers);
export class Action extends S.Class<Action>("Action")({ActionId: S.String, BudgetName: S.String, NotificationType: S.String, ActionType: S.String, ActionThreshold: ActionThreshold, Definition: Definition, ExecutionRoleArn: S.String, ApprovalModel: S.String, Status: S.String, Subscribers: Subscribers}) {}
export const Actions = S.Array(Action);
export const Budgets = S.Array(Budget);
export const Notifications = S.Array(Notification);
export type Expressions = Expression[];
export const Expressions = S.Array(S.suspend((): S.Schema<Expression, any> => Expression)) as any as S.Schema<Expressions>;
export class CreateNotificationRequest extends S.Class<CreateNotificationRequest>("CreateNotificationRequest")({AccountId: S.String, BudgetName: S.String, Notification: Notification, Subscribers: Subscribers}) {}
export class CreateNotificationResponse extends S.Class<CreateNotificationResponse>("CreateNotificationResponse")({}) {}
export class DescribeBudgetResponse extends S.Class<DescribeBudgetResponse>("DescribeBudgetResponse")({Budget: S.optional(Budget)}) {}
export class DescribeBudgetActionResponse extends S.Class<DescribeBudgetActionResponse>("DescribeBudgetActionResponse")({AccountId: S.String, BudgetName: S.String, Action: Action}) {}
export class DescribeBudgetActionHistoriesRequest extends S.Class<DescribeBudgetActionHistoriesRequest>("DescribeBudgetActionHistoriesRequest")({AccountId: S.String, BudgetName: S.String, ActionId: S.String, TimePeriod: S.optional(TimePeriod), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeBudgetActionsForAccountResponse extends S.Class<DescribeBudgetActionsForAccountResponse>("DescribeBudgetActionsForAccountResponse")({Actions: Actions, NextToken: S.optional(S.String)}) {}
export class DescribeBudgetActionsForBudgetResponse extends S.Class<DescribeBudgetActionsForBudgetResponse>("DescribeBudgetActionsForBudgetResponse")({Actions: Actions, NextToken: S.optional(S.String)}) {}
export class DescribeBudgetsResponse extends S.Class<DescribeBudgetsResponse>("DescribeBudgetsResponse")({Budgets: S.optional(Budgets), NextToken: S.optional(S.String)}) {}
export class DescribeNotificationsForBudgetResponse extends S.Class<DescribeNotificationsForBudgetResponse>("DescribeNotificationsForBudgetResponse")({Notifications: S.optional(Notifications), NextToken: S.optional(S.String)}) {}
export class DescribeSubscribersForNotificationResponse extends S.Class<DescribeSubscribersForNotificationResponse>("DescribeSubscribersForNotificationResponse")({Subscribers: S.optional(Subscribers), NextToken: S.optional(S.String)}) {}
export class ExecuteBudgetActionResponse extends S.Class<ExecuteBudgetActionResponse>("ExecuteBudgetActionResponse")({AccountId: S.String, BudgetName: S.String, ActionId: S.String, ExecutionType: S.String}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({ResourceTags: S.optional(ResourceTagList)}) {}
export class UpdateBudgetActionResponse extends S.Class<UpdateBudgetActionResponse>("UpdateBudgetActionResponse")({AccountId: S.String, BudgetName: S.String, OldAction: Action, NewAction: Action}) {}
export class BudgetNotificationsForAccount extends S.Class<BudgetNotificationsForAccount>("BudgetNotificationsForAccount")({Notifications: S.optional(Notifications), BudgetName: S.optional(S.String)}) {}
export const BudgetNotificationsForAccountList = S.Array(BudgetNotificationsForAccount);
export class CreateBudgetActionRequest extends S.Class<CreateBudgetActionRequest>("CreateBudgetActionRequest")({AccountId: S.String, BudgetName: S.String, NotificationType: S.String, ActionType: S.String, ActionThreshold: ActionThreshold, Definition: Definition, ExecutionRoleArn: S.String, ApprovalModel: S.String, Subscribers: Subscribers, ResourceTags: S.optional(ResourceTagList)}) {}
export class DeleteBudgetActionResponse extends S.Class<DeleteBudgetActionResponse>("DeleteBudgetActionResponse")({AccountId: S.String, BudgetName: S.String, Action: Action}) {}
export class DescribeBudgetNotificationsForAccountResponse extends S.Class<DescribeBudgetNotificationsForAccountResponse>("DescribeBudgetNotificationsForAccountResponse")({BudgetNotificationsForAccount: S.optional(BudgetNotificationsForAccountList), NextToken: S.optional(S.String)}) {}
export class BudgetedAndActualAmounts extends S.Class<BudgetedAndActualAmounts>("BudgetedAndActualAmounts")({BudgetedAmount: S.optional(Spend), ActualAmount: S.optional(Spend), TimePeriod: S.optional(TimePeriod)}) {}
export const BudgetedAndActualAmountsList = S.Array(BudgetedAndActualAmounts);
export class BudgetPerformanceHistory extends S.Class<BudgetPerformanceHistory>("BudgetPerformanceHistory")({BudgetName: S.optional(S.String), BudgetType: S.optional(S.String), CostFilters: S.optional(CostFilters), CostTypes: S.optional(CostTypes), TimeUnit: S.optional(S.String), BillingViewArn: S.optional(S.String), BudgetedAndActualAmountsList: S.optional(BudgetedAndActualAmountsList)}) {}
export class CreateBudgetRequest extends S.Class<CreateBudgetRequest>("CreateBudgetRequest")({AccountId: S.String, Budget: Budget, NotificationsWithSubscribers: S.optional(NotificationWithSubscribersList), ResourceTags: S.optional(ResourceTagList)}) {}
export class CreateBudgetResponse extends S.Class<CreateBudgetResponse>("CreateBudgetResponse")({}) {}
export class CreateBudgetActionResponse extends S.Class<CreateBudgetActionResponse>("CreateBudgetActionResponse")({AccountId: S.String, BudgetName: S.String, ActionId: S.String}) {}
export class DescribeBudgetPerformanceHistoryResponse extends S.Class<DescribeBudgetPerformanceHistoryResponse>("DescribeBudgetPerformanceHistoryResponse")({BudgetPerformanceHistory: S.optional(BudgetPerformanceHistory), NextToken: S.optional(S.String)}) {}
export class ActionHistoryDetails extends S.Class<ActionHistoryDetails>("ActionHistoryDetails")({Message: S.String, Action: Action}) {}
export class ActionHistory extends S.Class<ActionHistory>("ActionHistory")({Timestamp: S.Date, Status: S.String, EventType: S.String, ActionHistoryDetails: ActionHistoryDetails}) {}
export const ActionHistories = S.Array(ActionHistory);
export class DescribeBudgetActionHistoriesResponse extends S.Class<DescribeBudgetActionHistoriesResponse>("DescribeBudgetActionHistoriesResponse")({ActionHistories: ActionHistories, NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalErrorException extends S.TaggedError<InternalErrorException>()("InternalErrorException", {}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class DuplicateRecordException extends S.TaggedError<DuplicateRecordException>()("DuplicateRecordException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class CreationLimitExceededException extends S.TaggedError<CreationLimitExceededException>()("CreationLimitExceededException", {}) {};
export class InvalidNextTokenException extends S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {}) {};
export class ExpiredNextTokenException extends S.TaggedError<ExpiredNextTokenException>()("ExpiredNextTokenException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {Message: S.optional(S.String)}) {};
export class BillingViewHealthStatusException extends S.TaggedError<BillingViewHealthStatusException>()("BillingViewHealthStatusException", {Message: S.optional(S.String)}) {};
export class ResourceLockedException extends S.TaggedError<ResourceLockedException>()("ResourceLockedException", {}) {};

//# Operations
/**
 * Updates a subscriber.
 */export const updateSubscriber = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.UpdateSubscriber" }, UpdateSubscriberRequest, UpdateSubscriberResponse, [AccessDeniedException, DuplicateRecordException, InternalErrorException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
 */export const createSubscriber = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.CreateSubscriber" }, CreateSubscriberRequest, CreateSubscriberResponse, [AccessDeniedException, CreationLimitExceededException, DuplicateRecordException, InternalErrorException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a budget. You can delete your budget at any time.
 * 
 * 
 * 
 * 
 * Deleting a budget also deletes the notifications and subscribers that are associated with that budget.
 */export const deleteBudget = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DeleteBudget" }, DeleteBudgetRequest, DeleteBudgetResponse, [AccessDeniedException, InternalErrorException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a notification.
 * 
 * 
 * 
 * 
 * Deleting a notification also deletes the subscribers that are associated with the notification.
 */export const deleteNotification = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DeleteNotification" }, DeleteNotificationRequest, DeleteNotificationResponse, [AccessDeniedException, InternalErrorException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a subscriber.
 * 
 * 
 * 
 * 
 * Deleting the last subscriber to a notification also deletes the notification.
 */export const deleteSubscriber = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DeleteSubscriber" }, DeleteSubscriberRequest, DeleteSubscriberResponse, [AccessDeniedException, InternalErrorException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a budget.
 * 
 * 
 * 
 * 
 * The Request Syntax section shows the `BudgetLimit` syntax. For
 * `PlannedBudgetLimits`, see the Examples section.
 */export const describeBudget = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DescribeBudget" }, DescribeBudgetRequest, DescribeBudgetResponse, [AccessDeniedException, InternalErrorException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a budget action detail.
 */export const describeBudgetAction = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DescribeBudgetAction" }, DescribeBudgetActionRequest, DescribeBudgetActionResponse, [AccessDeniedException, InternalErrorException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes all of the budget actions for a budget.
 */export const describeBudgetActionsForBudget = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DescribeBudgetActionsForBudget" }, DescribeBudgetActionsForBudgetRequest, DescribeBudgetActionsForBudgetResponse, [AccessDeniedException, InternalErrorException, InvalidNextTokenException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the notifications that are associated with a budget.
 */export const describeNotificationsForBudget = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DescribeNotificationsForBudget" }, DescribeNotificationsForBudgetRequest, DescribeNotificationsForBudgetResponse, [AccessDeniedException, ExpiredNextTokenException, InternalErrorException, InvalidNextTokenException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the subscribers that are associated with a notification.
 */export const describeSubscribersForNotification = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DescribeSubscribersForNotification" }, DescribeSubscribersForNotificationRequest, DescribeSubscribersForNotificationResponse, [AccessDeniedException, ExpiredNextTokenException, InternalErrorException, InvalidNextTokenException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists tags associated with a budget or budget action resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalErrorException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates tags for a budget or budget action resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalErrorException, InvalidParameterException, NotFoundException, ServiceQuotaExceededException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes tags associated with a budget or budget action resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalErrorException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a budget. You can change every part of a budget except for the `budgetName` and the `calculatedSpend`. When you modify a budget, the `calculatedSpend` drops to zero until Amazon Web Services has new usage data to use for forecasting.
 * 
 * 
 * 
 * 
 * Only one of `BudgetLimit` or `PlannedBudgetLimits` can be present in
 * the syntax at one time. Use the syntax that matches your case. The Request Syntax
 * section shows the `BudgetLimit` syntax. For `PlannedBudgetLimits`,
 * see the Examples section.
 * 
 * 
 * Similarly, only one set of filter and metric selections can be present in the syntax
 * at one time. Either `FilterExpression` and `Metrics` or
 * `CostFilters` and `CostTypes`, not both or a different
 * combination. We recommend using `FilterExpression` and `Metrics`
 * as they provide more flexible and powerful filtering capabilities. The Request Syntax
 * section shows the `FilterExpression`/`Metrics` syntax.
 */export const updateBudget = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.UpdateBudget" }, UpdateBudgetRequest, UpdateBudgetResponse, [AccessDeniedException, BillingViewHealthStatusException, InternalErrorException, InvalidParameterException, NotFoundException, ServiceQuotaExceededException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a budget action.
 */export const updateBudgetAction = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.UpdateBudgetAction" }, UpdateBudgetActionRequest, UpdateBudgetActionResponse, [AccessDeniedException, InternalErrorException, InvalidParameterException, NotFoundException, ResourceLockedException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a notification.
 */export const updateNotification = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.UpdateNotification" }, UpdateNotificationRequest, UpdateNotificationResponse, [AccessDeniedException, DuplicateRecordException, InternalErrorException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a notification. You must create the budget before you create the associated notification.
 */export const createNotification = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.CreateNotification" }, CreateNotificationRequest, CreateNotificationResponse, [AccessDeniedException, CreationLimitExceededException, DuplicateRecordException, InternalErrorException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a budget action.
 */export const deleteBudgetAction = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DeleteBudgetAction" }, DeleteBudgetActionRequest, DeleteBudgetActionResponse, [AccessDeniedException, InternalErrorException, InvalidParameterException, NotFoundException, ResourceLockedException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes all of the budget actions for an account.
 */export const describeBudgetActionsForAccount = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DescribeBudgetActionsForAccount" }, DescribeBudgetActionsForAccountRequest, DescribeBudgetActionsForAccountResponse, [AccessDeniedException, InternalErrorException, InvalidNextTokenException, InvalidParameterException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the budget names and notifications that are associated with an account.
 */export const describeBudgetNotificationsForAccount = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount" }, DescribeBudgetNotificationsForAccountRequest, DescribeBudgetNotificationsForAccountResponse, [AccessDeniedException, ExpiredNextTokenException, InternalErrorException, InvalidNextTokenException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the budgets that are associated with an account.
 * 
 * 
 * 
 * 
 * The Request Syntax section shows the `BudgetLimit` syntax. For
 * `PlannedBudgetLimits`, see the Examples section.
 */export const describeBudgets = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DescribeBudgets" }, DescribeBudgetsRequest, DescribeBudgetsResponse, [AccessDeniedException, ExpiredNextTokenException, InternalErrorException, InvalidNextTokenException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Executes a budget action.
 */export const executeBudgetAction = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.ExecuteBudgetAction" }, ExecuteBudgetActionRequest, ExecuteBudgetActionResponse, [AccessDeniedException, InternalErrorException, InvalidParameterException, NotFoundException, ResourceLockedException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a budget and, if included, notifications and subscribers.
 * 
 * 
 * 
 * 
 * Only one of `BudgetLimit` or `PlannedBudgetLimits` can be present in
 * the syntax at one time. Use the syntax that matches your use case. The Request Syntax
 * section shows the `BudgetLimit` syntax. For `PlannedBudgetLimits`,
 * see the Examples section.
 * 
 * 
 * Similarly, only one set of filter and metric selections can be present in the syntax
 * at one time. Either `FilterExpression` and `Metrics` or
 * `CostFilters` and `CostTypes`, not both or a different
 * combination. We recommend using `FilterExpression` and `Metrics`
 * as they provide more flexible and powerful filtering capabilities. The Request Syntax
 * section shows the `FilterExpression`/`Metrics` syntax.
 */export const createBudget = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.CreateBudget" }, CreateBudgetRequest, CreateBudgetResponse, [AccessDeniedException, BillingViewHealthStatusException, CreationLimitExceededException, DuplicateRecordException, InternalErrorException, InvalidParameterException, NotFoundException, ServiceQuotaExceededException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a budget action.
 */export const createBudgetAction = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.CreateBudgetAction" }, CreateBudgetActionRequest, CreateBudgetActionResponse, [AccessDeniedException, CreationLimitExceededException, DuplicateRecordException, InternalErrorException, InvalidParameterException, NotFoundException, ServiceQuotaExceededException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the history for `DAILY`, `MONTHLY`, and `QUARTERLY` budgets. Budget history isn't available for `ANNUAL` budgets.
 */export const describeBudgetPerformanceHistory = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory" }, DescribeBudgetPerformanceHistoryRequest, DescribeBudgetPerformanceHistoryResponse, [AccessDeniedException, BillingViewHealthStatusException, ExpiredNextTokenException, InternalErrorException, InvalidNextTokenException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a budget action history detail.
 */export const describeBudgetActionHistories = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-10-20", uri: "/", method: "POST", sdkId: "Budgets", sigV4ServiceName: "budgets", name: "AWSBudgetServiceGateway.DescribeBudgetActionHistories" }, DescribeBudgetActionHistoriesRequest, DescribeBudgetActionHistoriesResponse, [AccessDeniedException, InternalErrorException, InvalidNextTokenException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

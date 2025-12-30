import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetAccountPlanStateRequest extends S.Class<GetAccountPlanStateRequest>("GetAccountPlanStateRequest")({}) {}
export const FilterActivityStatuses = S.Array(S.String);
export class GetAccountActivityRequest extends S.Class<GetAccountActivityRequest>("GetAccountActivityRequest")({activityId: S.String, languageCode: S.optional(S.String)}) {}
export class ListAccountActivitiesRequest extends S.Class<ListAccountActivitiesRequest>("ListAccountActivitiesRequest")({filterActivityStatuses: S.optional(FilterActivityStatuses), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), languageCode: S.optional(S.String)}) {}
export class UpgradeAccountPlanRequest extends S.Class<UpgradeAccountPlanRequest>("UpgradeAccountPlanRequest")({accountPlanType: S.String}) {}
export type Expressions = Expression[];
export const Expressions = S.Array(S.suspend((): S.Schema<Expression, any> => Expression)) as any as S.Schema<Expressions>;
export class MonetaryAmount extends S.Class<MonetaryAmount>("MonetaryAmount")({amount: S.Number, unit: S.String}) {}
export const Values = S.Array(S.String);
export const MatchOptions = S.Array(S.String);
export class GetAccountPlanStateResponse extends S.Class<GetAccountPlanStateResponse>("GetAccountPlanStateResponse")({accountId: S.String, accountPlanType: S.String, accountPlanStatus: S.String, accountPlanRemainingCredits: S.optional(MonetaryAmount), accountPlanExpirationDate: S.optional(S.Date)}) {}
export class UpgradeAccountPlanResponse extends S.Class<UpgradeAccountPlanResponse>("UpgradeAccountPlanResponse")({accountId: S.String, accountPlanType: S.String, accountPlanStatus: S.String}) {}
export class DimensionValues extends S.Class<DimensionValues>("DimensionValues")({Key: S.String, Values: Values, MatchOptions: MatchOptions}) {}
export const ActivityReward = S.Union(MonetaryAmount);
export class Expression extends S.Class<Expression>("Expression")({Or: S.optional(S.suspend(() => Expressions)), And: S.optional(S.suspend(() => Expressions)), Not: S.optional(S.suspend((): S.Schema<Expression, any> => Expression)), Dimensions: S.optional(DimensionValues)}) {}
export class ActivitySummary extends S.Class<ActivitySummary>("ActivitySummary")({activityId: S.String, title: S.String, reward: ActivityReward, status: S.String}) {}
export const Activities = S.Array(ActivitySummary);
export class GetAccountActivityResponse extends S.Class<GetAccountActivityResponse>("GetAccountActivityResponse")({activityId: S.String, title: S.String, description: S.String, status: S.String, instructionsUrl: S.String, reward: ActivityReward, estimatedTimeToCompleteInMinutes: S.optional(S.Number), expiresAt: S.optional(S.Date), startedAt: S.optional(S.Date), completedAt: S.optional(S.Date)}) {}
export class GetFreeTierUsageRequest extends S.Class<GetFreeTierUsageRequest>("GetFreeTierUsageRequest")({filter: S.optional(Expression), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListAccountActivitiesResponse extends S.Class<ListAccountActivitiesResponse>("ListAccountActivitiesResponse")({activities: Activities, nextToken: S.optional(S.String)}) {}
export class FreeTierUsage extends S.Class<FreeTierUsage>("FreeTierUsage")({service: S.optional(S.String), operation: S.optional(S.String), usageType: S.optional(S.String), region: S.optional(S.String), actualUsageAmount: S.optional(S.Number), forecastedUsageAmount: S.optional(S.Number), limit: S.optional(S.Number), unit: S.optional(S.String), description: S.optional(S.String), freeTierType: S.optional(S.String)}) {}
export const FreeTierUsages = S.Array(FreeTierUsage);
export class GetFreeTierUsageResponse extends S.Class<GetFreeTierUsageResponse>("GetFreeTierUsageResponse")({freeTierUsages: FreeTierUsages, nextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * The account plan type for the Amazon Web Services account.
 */export const upgradeAccountPlan = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.UpgradeAccountPlan" }, UpgradeAccountPlanRequest, UpgradeAccountPlanResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a specific activity record that is available to the customer.
 */export const getAccountActivity = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.GetAccountActivity" }, GetAccountActivityRequest, GetAccountActivityResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This returns all of the information related to the state of the account plan related to Free Tier.
 */export const getAccountPlanState = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.GetAccountPlanState" }, GetAccountPlanStateRequest, GetAccountPlanStateResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of activities that are available. This operation supports pagination and filtering by status.
 */export const listAccountActivities = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.ListAccountActivities" }, ListAccountActivitiesRequest, ListAccountActivitiesResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all Free Tier usage objects that match your filters.
 */export const getFreeTierUsage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.GetFreeTierUsage" }, GetFreeTierUsageRequest, GetFreeTierUsageResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

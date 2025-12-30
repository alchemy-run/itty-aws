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
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class GetFreeTierUsageRequest extends S.Class<GetFreeTierUsageRequest>("GetFreeTierUsageRequest")({filter: S.optional(Expression), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListAccountActivitiesResponse extends S.Class<ListAccountActivitiesResponse>("ListAccountActivitiesResponse")({activities: Activities, nextToken: S.optional(S.String)}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String}) {}
export class FreeTierUsage extends S.Class<FreeTierUsage>("FreeTierUsage")({service: S.optional(S.String), operation: S.optional(S.String), usageType: S.optional(S.String), region: S.optional(S.String), actualUsageAmount: S.optional(S.Number), forecastedUsageAmount: S.optional(S.Number), limit: S.optional(S.Number), unit: S.optional(S.String), description: S.optional(S.String), freeTierType: S.optional(S.String)}) {}
export const FreeTierUsages = S.Array(FreeTierUsage);
export class GetFreeTierUsageResponse extends S.Class<GetFreeTierUsageResponse>("GetFreeTierUsageResponse")({freeTierUsages: FreeTierUsages, nextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const upgradeAccountPlan = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.UpgradeAccountPlan" }, UpgradeAccountPlanRequest, UpgradeAccountPlanResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getAccountActivity = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.GetAccountActivity" }, GetAccountActivityRequest, GetAccountActivityResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getAccountPlanState = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.GetAccountPlanState" }, GetAccountPlanStateRequest, GetAccountPlanStateResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listAccountActivities = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.ListAccountActivities" }, ListAccountActivitiesRequest, ListAccountActivitiesResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getFreeTierUsage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.GetFreeTierUsage" }, GetFreeTierUsageRequest, GetFreeTierUsageResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

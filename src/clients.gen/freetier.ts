import * as Schema from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class GetAccountPlanStateRequest extends Schema.Class<GetAccountPlanStateRequest>("GetAccountPlanStateRequest")({}) {}
export const FilterActivityStatuses = Schema.Array(Schema.String);
export class GetAccountActivityRequest extends Schema.Class<GetAccountActivityRequest>("GetAccountActivityRequest")({activityId: Schema.String, languageCode: Schema.optional(Schema.String)}) {}
export class ListAccountActivitiesRequest extends Schema.Class<ListAccountActivitiesRequest>("ListAccountActivitiesRequest")({filterActivityStatuses: Schema.optional(FilterActivityStatuses), nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), languageCode: Schema.optional(Schema.String)}) {}
export class UpgradeAccountPlanRequest extends Schema.Class<UpgradeAccountPlanRequest>("UpgradeAccountPlanRequest")({accountPlanType: Schema.String}) {}
export const Expressions = Schema.Array(Schema.suspend((): Schema.Schema<Expression> => Expression));
export class MonetaryAmount extends Schema.Class<MonetaryAmount>("MonetaryAmount")({amount: Schema.Number, unit: Schema.String}) {}
export const Values = Schema.Array(Schema.String);
export const MatchOptions = Schema.Array(Schema.String);
export class GetAccountPlanStateResponse extends Schema.Class<GetAccountPlanStateResponse>("GetAccountPlanStateResponse")({accountId: Schema.String, accountPlanType: Schema.String, accountPlanStatus: Schema.String, accountPlanRemainingCredits: Schema.optional(MonetaryAmount), accountPlanExpirationDate: Schema.optional(Schema.Date)}) {}
export class UpgradeAccountPlanResponse extends Schema.Class<UpgradeAccountPlanResponse>("UpgradeAccountPlanResponse")({accountId: Schema.String, accountPlanType: Schema.String, accountPlanStatus: Schema.String}) {}
export class DimensionValues extends Schema.Class<DimensionValues>("DimensionValues")({Key: Schema.String, Values: Values, MatchOptions: MatchOptions}) {}
export const ActivityReward = Schema.Union(MonetaryAmount);
export class Expression extends Schema.Class<Expression>("Expression")({Or: Schema.optional(Schema.suspend(() => Expressions)), And: Schema.optional(Schema.suspend(() => Expressions)), Not: Schema.optional(Schema.suspend((): Schema.Schema<Expression> => Expression)), Dimensions: Schema.optional(DimensionValues)}) {}
export class ActivitySummary extends Schema.Class<ActivitySummary>("ActivitySummary")({activityId: Schema.String, title: Schema.String, reward: ActivityReward, status: Schema.String}) {}
export const Activities = Schema.Array(ActivitySummary);
export class GetAccountActivityResponse extends Schema.Class<GetAccountActivityResponse>("GetAccountActivityResponse")({activityId: Schema.String, title: Schema.String, description: Schema.String, status: Schema.String, instructionsUrl: Schema.String, reward: ActivityReward, estimatedTimeToCompleteInMinutes: Schema.optional(Schema.Number), expiresAt: Schema.optional(Schema.Date), startedAt: Schema.optional(Schema.Date), completedAt: Schema.optional(Schema.Date)}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class GetFreeTierUsageRequest extends Schema.Class<GetFreeTierUsageRequest>("GetFreeTierUsageRequest")({filter: Schema.optional(Expression), maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)}) {}
export class ListAccountActivitiesResponse extends Schema.Class<ListAccountActivitiesResponse>("ListAccountActivitiesResponse")({activities: Activities, nextToken: Schema.optional(Schema.String)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String}) {}
export class FreeTierUsage extends Schema.Class<FreeTierUsage>("FreeTierUsage")({service: Schema.optional(Schema.String), operation: Schema.optional(Schema.String), usageType: Schema.optional(Schema.String), region: Schema.optional(Schema.String), actualUsageAmount: Schema.optional(Schema.Number), forecastedUsageAmount: Schema.optional(Schema.Number), limit: Schema.optional(Schema.Number), unit: Schema.optional(Schema.String), description: Schema.optional(Schema.String), freeTierType: Schema.optional(Schema.String)}) {}
export const FreeTierUsages = Schema.Array(FreeTierUsage);
export class GetFreeTierUsageResponse extends Schema.Class<GetFreeTierUsageResponse>("GetFreeTierUsageResponse")({freeTierUsages: FreeTierUsages, nextToken: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const upgradeAccountPlan = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.UpgradeAccountPlan" }, UpgradeAccountPlanRequest, UpgradeAccountPlanResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getAccountActivity = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.GetAccountActivity" }, GetAccountActivityRequest, GetAccountActivityResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getAccountPlanState = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.GetAccountPlanState" }, GetAccountPlanStateRequest, GetAccountPlanStateResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listAccountActivities = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.ListAccountActivities" }, ListAccountActivitiesRequest, ListAccountActivitiesResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getFreeTierUsage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-09-07", uri: "/", method: "POST", sdkId: "FreeTier", sigV4ServiceName: "freetier", name: "AWSFreeTierService.GetFreeTierUsage" }, GetFreeTierUsageRequest, GetFreeTierUsageResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

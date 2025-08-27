import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class FreeTier extends AWSServiceClient {
  getAccountActivity(
    input: GetAccountActivityRequest,
  ): Effect.Effect<
    GetAccountActivityResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAccountPlanState(
    input: GetAccountPlanStateRequest,
  ): Effect.Effect<
    GetAccountPlanStateResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getFreeTierUsage(
    input: GetFreeTierUsageRequest,
  ): Effect.Effect<
    GetFreeTierUsageResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAccountActivities(
    input: ListAccountActivitiesRequest,
  ): Effect.Effect<
    ListAccountActivitiesResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  upgradeAccountPlan(
    input: UpgradeAccountPlanRequest,
  ): Effect.Effect<
    UpgradeAccountPlanResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Freetier extends FreeTier {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccountId = string;

export type AccountPlanStatus = "NOT_STARTED" | "ACTIVE" | "EXPIRED";
export type AccountPlanType = "FREE" | "PAID";
export type Activities = Array<ActivitySummary>;
export type ActivityId = string;

interface _ActivityReward {
  credit?: MonetaryAmount;
}

export type ActivityReward = _ActivityReward & { credit: MonetaryAmount };
export type ActivityStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "EXPIRING";
export interface ActivitySummary {
  activityId: string;
  title: string;
  reward: ActivityReward;
  status: ActivityStatus;
}
export type CurrencyCode = "USD";
export type Dimension =
  | "SERVICE"
  | "OPERATION"
  | "USAGE_TYPE"
  | "REGION"
  | "FREE_TIER_TYPE"
  | "DESCRIPTION"
  | "USAGE_PERCENTAGE";
export interface DimensionValues {
  Key: Dimension;
  Values: Array<string>;
  MatchOptions: Array<MatchOption>;
}
export interface Expression {
  Or?: Array<Expression>;
  And?: Array<Expression>;
  Not?: Expression;
  Dimensions?: DimensionValues;
}
export type Expressions = Array<Expression>;
export type FilterActivityStatuses = Array<ActivityStatus>;
export interface FreeTierUsage {
  service?: string;
  operation?: string;
  usageType?: string;
  region?: string;
  actualUsageAmount?: number;
  forecastedUsageAmount?: number;
  limit?: number;
  unit?: string;
  description?: string;
  freeTierType?: string;
}
export type FreeTierUsages = Array<FreeTierUsage>;
export type GenericDouble = number;

export type GenericString = string;

export interface GetAccountActivityRequest {
  activityId: string;
  languageCode?: LanguageCode;
}
export interface GetAccountActivityResponse {
  activityId: string;
  title: string;
  description: string;
  status: ActivityStatus;
  instructionsUrl: string;
  reward: ActivityReward;
  estimatedTimeToCompleteInMinutes?: number;
  expiresAt?: Date | string;
  startedAt?: Date | string;
  completedAt?: Date | string;
}
export interface GetAccountPlanStateRequest {}
export interface GetAccountPlanStateResponse {
  accountId: string;
  accountPlanType: AccountPlanType;
  accountPlanStatus: AccountPlanStatus;
  accountPlanRemainingCredits?: MonetaryAmount;
  accountPlanExpirationDate?: Date | string;
}
export interface GetFreeTierUsageRequest {
  filter?: Expression;
  maxResults?: number;
  nextToken?: string;
}
export interface GetFreeTierUsageResponse {
  freeTierUsages: Array<FreeTierUsage>;
  nextToken?: string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type LanguageCode =
  | "en-US"
  | "en-GB"
  | "id-ID"
  | "de-DE"
  | "es-ES"
  | "fr-FR"
  | "ja-JP"
  | "it-IT"
  | "pt-PT"
  | "ko-KR"
  | "zh-CN"
  | "zh-TW"
  | "tr-TR";
export interface ListAccountActivitiesRequest {
  filterActivityStatuses?: Array<ActivityStatus>;
  nextToken?: string;
  maxResults?: number;
  languageCode?: LanguageCode;
}
export interface ListAccountActivitiesResponse {
  activities: Array<ActivitySummary>;
  nextToken?: string;
}
export type MatchOption =
  | "EQUALS"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | "GREATER_THAN_OR_EQUAL";
export type MatchOptions = Array<MatchOption>;
export type MaxResults = number;

export interface MonetaryAmount {
  amount: number;
  unit: CurrencyCode;
}
export type NextPageToken = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface UpgradeAccountPlanRequest {
  accountPlanType: AccountPlanType;
}
export interface UpgradeAccountPlanResponse {
  accountId: string;
  accountPlanType: AccountPlanType;
  accountPlanStatus: AccountPlanStatus;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export type Value = string;

export type Values = Array<string>;
export declare namespace GetAccountActivity {
  export type Input = GetAccountActivityRequest;
  export type Output = GetAccountActivityResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAccountPlanState {
  export type Input = GetAccountPlanStateRequest;
  export type Output = GetAccountPlanStateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFreeTierUsage {
  export type Input = GetFreeTierUsageRequest;
  export type Output = GetFreeTierUsageResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAccountActivities {
  export type Input = ListAccountActivitiesRequest;
  export type Output = ListAccountActivitiesResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpgradeAccountPlan {
  export type Input = UpgradeAccountPlanRequest;
  export type Output = UpgradeAccountPlanResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

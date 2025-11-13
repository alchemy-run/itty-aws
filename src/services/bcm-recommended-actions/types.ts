import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class BCMRecommendedActions extends AWSServiceClient {
  listRecommendedActions(
    input: ListRecommendedActionsRequest,
  ): Effect.Effect<
    ListRecommendedActionsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export declare class BcmRecommendedActions extends BCMRecommendedActions {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccountId = string;

export interface ActionFilter {
  key: FilterName;
  matchOption: MatchOption;
  values: Array<string>;
}
export type ActionFilterList = Array<ActionFilter>;
export type ActionType = "ADD_ALTERNATE_BILLING_CONTACT" | "CREATE_ANOMALY_MONITOR" | "CREATE_BUDGET" | "ENABLE_COST_OPTIMIZATION_HUB" | "MIGRATE_TO_GRANULAR_PERMISSIONS" | "PAYMENTS_DUE" | "PAYMENTS_PAST_DUE" | "REVIEW_ANOMALIES" | "REVIEW_BUDGET_ALERTS" | "REVIEW_BUDGETS_EXCEEDED" | "REVIEW_EXPIRING_RI" | "REVIEW_EXPIRING_SP" | "REVIEW_FREETIER_USAGE_ALERTS" | "REVIEW_SAVINGS_OPPORTUNITY_RECOMMENDATIONS" | "UPDATE_EXPIRED_PAYMENT_METHOD" | "UPDATE_INVALID_PAYMENT_METHOD" | "UPDATE_TAX_EXEMPTION_CERTIFICATE" | "UPDATE_TAX_REGISTRATION_NUMBER";
export type Context = Record<string, string>;
export type Feature = "ACCOUNT" | "BUDGETS" | "COST_ANOMALY_DETECTION" | "COST_OPTIMIZATION_HUB" | "FREE_TIER" | "IAM" | "PAYMENTS" | "RESERVATIONS" | "SAVINGS_PLANS" | "TAX_SETTINGS";
export type FilterName = "FEATURE" | "SEVERITY" | "TYPE";
export type FilterValue = string;

export type FilterValues = Array<string>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface ListRecommendedActionsRequest {
  filter?: RequestFilter;
  maxResults?: number;
  nextToken?: string;
}
export interface ListRecommendedActionsResponse {
  recommendedActions: Array<RecommendedAction>;
  nextToken?: string;
}
export type MatchOption = "EQUALS" | "NOT_EQUALS";
export type MaxResults = number;

export type NextStep = string;

export type NextSteps = Array<string>;
export type NextToken = string;

export interface RecommendedAction {
  id?: string;
  type?: ActionType;
  accountId?: string;
  severity?: Severity;
  feature?: Feature;
  context?: Record<string, string>;
  nextSteps?: Array<string>;
  lastUpdatedTimeStamp?: string;
}
export type RecommendedActions = Array<RecommendedAction>;
export interface RequestFilter {
  actions?: Array<ActionFilter>;
}
export type Severity = "INFO" | "WARNING" | "CRITICAL";
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: ValidationExceptionReason;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = "unknownOperation" | "cannotParse" | "fieldValidationFailed" | "other";
export declare namespace ListRecommendedActions {
  export type Input = ListRecommendedActionsRequest;
  export type Output = ListRecommendedActionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type BCMRecommendedActionsErrors = AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError;


import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class PersonalizeRuntime extends AWSServiceClient {
  getActionRecommendations(
    input: GetActionRecommendationsRequest,
  ): Effect.Effect<
    GetActionRecommendationsResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  getPersonalizedRanking(
    input: GetPersonalizedRankingRequest,
  ): Effect.Effect<
    GetPersonalizedRankingResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  getRecommendations(
    input: GetRecommendationsRequest,
  ): Effect.Effect<
    GetRecommendationsResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
}

export type ActionID = string;

export type ActionList = Array<PredictedAction>;
export type Arn = string;

export type AttributeName = string;

export type AttributeValue = string;

export type ColumnName = string;

export type ColumnNamesList = Array<string>;
export type ColumnValue = string;

export type Context = Record<string, string>;
export type DatasetType = string;

export type ErrorMessage = string;

export type FilterAttributeName = string;

export type FilterAttributeValue = string;

export type FilterValues = Record<string, string>;
export interface GetActionRecommendationsRequest {
  campaignArn?: string;
  userId?: string;
  numResults?: number;
  filterArn?: string;
  filterValues?: Record<string, string>;
}
export interface GetActionRecommendationsResponse {
  actionList?: Array<PredictedAction>;
  recommendationId?: string;
}
export interface GetPersonalizedRankingRequest {
  campaignArn: string;
  inputList: Array<string>;
  userId: string;
  context?: Record<string, string>;
  filterArn?: string;
  filterValues?: Record<string, string>;
  metadataColumns?: Record<string, Array<string>>;
}
export interface GetPersonalizedRankingResponse {
  personalizedRanking?: Array<PredictedItem>;
  recommendationId?: string;
}
export interface GetRecommendationsRequest {
  campaignArn?: string;
  itemId?: string;
  userId?: string;
  numResults?: number;
  context?: Record<string, string>;
  filterArn?: string;
  filterValues?: Record<string, string>;
  recommenderArn?: string;
  promotions?: Array<Promotion>;
  metadataColumns?: Record<string, Array<string>>;
}
export interface GetRecommendationsResponse {
  itemList?: Array<PredictedItem>;
  recommendationId?: string;
}
export type InputList = Array<string>;
export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly message?: string;
}> {}
export type ItemID = string;

export type ItemList = Array<PredictedItem>;
export type Metadata = Record<string, string>;
export type MetadataColumns = Record<string, Array<string>>;
export type Name = string;

export type NumResults = number;

export type PercentPromotedItems = number;

export interface PredictedAction {
  actionId?: string;
  score?: number;
}
export interface PredictedItem {
  itemId?: string;
  score?: number;
  promotionName?: string;
  metadata?: Record<string, string>;
  reason?: Array<string>;
}
export interface Promotion {
  name?: string;
  percentPromotedItems?: number;
  filterArn?: string;
  filterValues?: Record<string, string>;
}
export type PromotionList = Array<Promotion>;
export type Reason = string;

export type ReasonList = Array<string>;
export type RecommendationID = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type Score = number;

export type UserID = string;

export declare namespace GetActionRecommendations {
  export type Input = GetActionRecommendationsRequest;
  export type Output = GetActionRecommendationsResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetPersonalizedRanking {
  export type Input = GetPersonalizedRankingRequest;
  export type Output = GetPersonalizedRankingResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetRecommendations {
  export type Input = GetRecommendationsRequest;
  export type Output = GetRecommendationsResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export type PersonalizeRuntimeErrors =
  | InvalidInputException
  | ResourceNotFoundException
  | CommonAwsError;

import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const InputList = S.Array(S.String);
export const ColumnNamesList = S.Array(S.String);
export const FilterValues = S.Record({key: S.String, value: S.String});
export const Context = S.Record({key: S.String, value: S.String});
export const MetadataColumns = S.Record({key: S.String, value: ColumnNamesList});
export class Promotion extends S.Class<Promotion>("Promotion")({name: S.optional(S.String), percentPromotedItems: S.optional(S.Number), filterArn: S.optional(S.String), filterValues: S.optional(FilterValues)}) {}
export const PromotionList = S.Array(Promotion);
export class GetActionRecommendationsRequest extends S.Class<GetActionRecommendationsRequest>("GetActionRecommendationsRequest")({campaignArn: S.optional(S.String), userId: S.optional(S.String), numResults: S.optional(S.Number), filterArn: S.optional(S.String), filterValues: S.optional(FilterValues)}) {}
export class GetPersonalizedRankingRequest extends S.Class<GetPersonalizedRankingRequest>("GetPersonalizedRankingRequest")({campaignArn: S.String, inputList: InputList, userId: S.String, context: S.optional(Context), filterArn: S.optional(S.String), filterValues: S.optional(FilterValues), metadataColumns: S.optional(MetadataColumns)}) {}
export class GetRecommendationsRequest extends S.Class<GetRecommendationsRequest>("GetRecommendationsRequest")({campaignArn: S.optional(S.String), itemId: S.optional(S.String), userId: S.optional(S.String), numResults: S.optional(S.Number), context: S.optional(Context), filterArn: S.optional(S.String), filterValues: S.optional(FilterValues), recommenderArn: S.optional(S.String), promotions: S.optional(PromotionList), metadataColumns: S.optional(MetadataColumns)}) {}
export const Metadata = S.Record({key: S.String, value: S.String});
export const ReasonList = S.Array(S.String);
export class PredictedItem extends S.Class<PredictedItem>("PredictedItem")({itemId: S.optional(S.String), score: S.optional(S.Number), promotionName: S.optional(S.String), metadata: S.optional(Metadata), reason: S.optional(ReasonList)}) {}
export const ItemList = S.Array(PredictedItem);
export class GetRecommendationsResponse extends S.Class<GetRecommendationsResponse>("GetRecommendationsResponse")({itemList: S.optional(ItemList), recommendationId: S.optional(S.String)}) {}
export class PredictedAction extends S.Class<PredictedAction>("PredictedAction")({actionId: S.optional(S.String), score: S.optional(S.Number)}) {}
export const ActionList = S.Array(PredictedAction);
export class GetActionRecommendationsResponse extends S.Class<GetActionRecommendationsResponse>("GetActionRecommendationsResponse")({actionList: S.optional(ActionList), recommendationId: S.optional(S.String)}) {}
export class GetPersonalizedRankingResponse extends S.Class<GetPersonalizedRankingResponse>("GetPersonalizedRankingResponse")({personalizedRanking: S.optional(ItemList), recommendationId: S.optional(S.String)}) {}

//# Errors
export class InvalidInputException extends S.TaggedError<InvalidInputException>()("InvalidInputException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};

//# Operations
/**
 * Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to
 * create the solution backing the campaign as follows:
 * 
 * 
 * 
 * - USER_PERSONALIZATION - `userId` required, `itemId` not used
 * 
 * 
 * 
 * - RELATED_ITEMS - `itemId` required, `userId` not used
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Campaigns that are backed by a solution created using a recipe of type
 * PERSONALIZED_RANKING use the API.
 * 
 * 
 * 
 * 
 * 
 * For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender.
 * For information on use case requirements see Choosing recommender use cases.
 */export const getRecommendations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-22", uri: "/recommendations", sdkId: "Personalize Runtime", sigV4ServiceName: "personalize", name: "AmazonPersonalizeRuntime.GetRecommendations" }, GetRecommendationsRequest, GetRecommendationsResponse, [InvalidInputException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of recommended actions in sorted in descending order by prediction score.
 * Use the `GetActionRecommendations` API if you have a custom
 * campaign that deploys a solution version trained with a PERSONALIZED_ACTIONS recipe.
 * 
 * 
 * 
 * For more information about PERSONALIZED_ACTIONS recipes, see PERSONALIZED_ACTIONS recipes.
 * For more information about getting action recommendations, see Getting action recommendations.
 */export const getActionRecommendations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-22", uri: "/action-recommendations", sdkId: "Personalize Runtime", sigV4ServiceName: "personalize", name: "AmazonPersonalizeRuntime.GetActionRecommendations" }, GetActionRecommendationsRequest, GetActionRecommendationsResponse, [InvalidInputException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Re-ranks a list of recommended items for the given user. The first item in the list is
 * deemed the most likely item to be of interest to the user.
 * 
 * 
 * 
 * 
 * The solution backing the campaign must have been created using a recipe of type
 * PERSONALIZED_RANKING.
 */export const getPersonalizedRanking = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-22", uri: "/personalize-ranking", sdkId: "Personalize Runtime", sigV4ServiceName: "personalize", name: "AmazonPersonalizeRuntime.GetPersonalizedRanking" }, GetPersonalizedRankingRequest, GetPersonalizedRankingResponse, [InvalidInputException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

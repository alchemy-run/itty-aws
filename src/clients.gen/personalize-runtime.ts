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
export const getRecommendations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-22", uri: "/recommendations", method: "POST", sdkId: "Personalize Runtime", sigV4ServiceName: "personalize", name: "AmazonPersonalizeRuntime.GetRecommendations" }, GetRecommendationsRequest, GetRecommendationsResponse, [InvalidInputException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getActionRecommendations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-22", uri: "/action-recommendations", method: "POST", sdkId: "Personalize Runtime", sigV4ServiceName: "personalize", name: "AmazonPersonalizeRuntime.GetActionRecommendations" }, GetActionRecommendationsRequest, GetActionRecommendationsResponse, [InvalidInputException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getPersonalizedRanking = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-22", uri: "/personalize-ranking", method: "POST", sdkId: "Personalize Runtime", sigV4ServiceName: "personalize", name: "AmazonPersonalizeRuntime.GetPersonalizedRanking" }, GetPersonalizedRankingRequest, GetPersonalizedRankingResponse, [InvalidInputException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

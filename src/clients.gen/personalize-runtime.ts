import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const InputList = Schema.Array(Schema.String);
export const ColumnNamesList = Schema.Array(Schema.String);
export const FilterValues = Schema.Record({key: Schema.String, value: Schema.String});
export const Context = Schema.Record({key: Schema.String, value: Schema.String});
export const MetadataColumns = Schema.Record({key: Schema.String, value: ColumnNamesList});
export const Promotion = Schema.Struct({name: Schema.optional(Schema.String), percentPromotedItems: Schema.optional(Schema.Number), filterArn: Schema.optional(Schema.String), filterValues: Schema.optional(FilterValues)});
export const PromotionList = Schema.Array(Promotion);
export const GetActionRecommendationsRequest = Schema.Struct({campaignArn: Schema.optional(Schema.String), userId: Schema.optional(Schema.String), numResults: Schema.optional(Schema.Number), filterArn: Schema.optional(Schema.String), filterValues: Schema.optional(FilterValues)});
export const GetPersonalizedRankingRequest = Schema.Struct({campaignArn: Schema.String, inputList: InputList, userId: Schema.String, context: Schema.optional(Context), filterArn: Schema.optional(Schema.String), filterValues: Schema.optional(FilterValues), metadataColumns: Schema.optional(MetadataColumns)});
export const GetRecommendationsRequest = Schema.Struct({campaignArn: Schema.optional(Schema.String), itemId: Schema.optional(Schema.String), userId: Schema.optional(Schema.String), numResults: Schema.optional(Schema.Number), context: Schema.optional(Context), filterArn: Schema.optional(Schema.String), filterValues: Schema.optional(FilterValues), recommenderArn: Schema.optional(Schema.String), promotions: Schema.optional(PromotionList), metadataColumns: Schema.optional(MetadataColumns)});
export const Metadata = Schema.Record({key: Schema.String, value: Schema.String});
export const ReasonList = Schema.Array(Schema.String);
export const PredictedItem = Schema.Struct({itemId: Schema.optional(Schema.String), score: Schema.optional(Schema.Number), promotionName: Schema.optional(Schema.String), metadata: Schema.optional(Metadata), reason: Schema.optional(ReasonList)});
export const ItemList = Schema.Array(PredictedItem);
export const GetRecommendationsResponse = Schema.Struct({itemList: Schema.optional(ItemList), recommendationId: Schema.optional(Schema.String)});
export const PredictedAction = Schema.Struct({actionId: Schema.optional(Schema.String), score: Schema.optional(Schema.Number)});
export const ActionList = Schema.Array(PredictedAction);
export const GetActionRecommendationsResponse = Schema.Struct({actionList: Schema.optional(ActionList), recommendationId: Schema.optional(Schema.String)});
export const InvalidInputException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const GetPersonalizedRankingResponse = Schema.Struct({personalizedRanking: Schema.optional(ItemList), recommendationId: Schema.optional(Schema.String)});

//# Errors
export class InvalidInputExceptionError extends Schema.TaggedError<InvalidInputExceptionError>()("InvalidInputException", InvalidInputException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};

//# Operations
export const getRecommendations = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-22", uri: "/recommendations", method: "POST", sdkId: "Personalize Runtime", sigV4ServiceName: "personalize", name: "AmazonPersonalizeRuntime.GetRecommendations" }, GetRecommendationsRequest, GetRecommendationsResponse, [InvalidInputExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getActionRecommendations = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-22", uri: "/action-recommendations", method: "POST", sdkId: "Personalize Runtime", sigV4ServiceName: "personalize", name: "AmazonPersonalizeRuntime.GetActionRecommendations" }, GetActionRecommendationsRequest, GetActionRecommendationsResponse, [InvalidInputExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getPersonalizedRanking = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-22", uri: "/personalize-ranking", method: "POST", sdkId: "Personalize Runtime", sigV4ServiceName: "personalize", name: "AmazonPersonalizeRuntime.GetPersonalizedRanking" }, GetPersonalizedRankingRequest, GetPersonalizedRankingResponse, [InvalidInputExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const InputList = Schema.Array(Schema.String)
const ColumnNamesList = Schema.Array(Schema.String)
const FilterValues = Schema.Record({key: Schema.String, value: Schema.String})
const Context = Schema.Record({key: Schema.String, value: Schema.String})
const MetadataColumns = Schema.Record({key: Schema.String, value: ColumnNamesList})
const Promotion = Schema.Struct({name: Schema.optional(Schema.String), percentPromotedItems: Schema.optional(Schema.Number), filterArn: Schema.optional(Schema.String), filterValues: Schema.optional(FilterValues)})
const PromotionList = Schema.Array(Promotion)
const GetActionRecommendationsRequest = Schema.Struct({campaignArn: Schema.optional(Schema.String), userId: Schema.optional(Schema.String), numResults: Schema.optional(Schema.Number), filterArn: Schema.optional(Schema.String), filterValues: Schema.optional(FilterValues)})
const GetPersonalizedRankingRequest = Schema.Struct({campaignArn: Schema.String, inputList: InputList, userId: Schema.String, context: Schema.optional(Context), filterArn: Schema.optional(Schema.String), filterValues: Schema.optional(FilterValues), metadataColumns: Schema.optional(MetadataColumns)})
const GetRecommendationsRequest = Schema.Struct({campaignArn: Schema.optional(Schema.String), itemId: Schema.optional(Schema.String), userId: Schema.optional(Schema.String), numResults: Schema.optional(Schema.Number), context: Schema.optional(Context), filterArn: Schema.optional(Schema.String), filterValues: Schema.optional(FilterValues), recommenderArn: Schema.optional(Schema.String), promotions: Schema.optional(PromotionList), metadataColumns: Schema.optional(MetadataColumns)})
const GetRecommendationsResponse = Schema.Struct({itemList: Schema.optional(ItemList), recommendationId: Schema.optional(Schema.String)})
const ReasonList = Schema.Array(Schema.String)
const PredictedAction = Schema.Struct({actionId: Schema.optional(Schema.String), score: Schema.optional(Schema.Number)})
const ActionList = Schema.Array(PredictedAction)
const GetActionRecommendationsResponse = Schema.Struct({actionList: Schema.optional(ActionList), recommendationId: Schema.optional(Schema.String)})
const InvalidInputException = Schema.Struct({message: Schema.optional(Schema.String)})
export const GetRecommendations = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/recommendations", method: "POST", sdkId: "Personalize Runtime", sigV4ServiceName: "personalize", name: "GetRecommendations" }, GetRecommendationsRequest, GetRecommendationsResponse, Schema.Union(ErrorAnnotation("InvalidInputException", InvalidInputException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const Metadata = Schema.Record({key: Schema.String, value: Schema.String})
const PredictedItem = Schema.Struct({itemId: Schema.optional(Schema.String), score: Schema.optional(Schema.Number), promotionName: Schema.optional(Schema.String), metadata: Schema.optional(Metadata), reason: Schema.optional(ReasonList)})
const ItemList = Schema.Array(PredictedItem)
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const GetActionRecommendations = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/action-recommendations", method: "POST", sdkId: "Personalize Runtime", sigV4ServiceName: "personalize", name: "GetActionRecommendations" }, GetActionRecommendationsRequest, GetActionRecommendationsResponse, Schema.Union(ErrorAnnotation("InvalidInputException", InvalidInputException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const GetPersonalizedRankingResponse = Schema.Struct({personalizedRanking: Schema.optional(ItemList), recommendationId: Schema.optional(Schema.String)})
export const GetPersonalizedRanking = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/personalize-ranking", method: "POST", sdkId: "Personalize Runtime", sigV4ServiceName: "personalize", name: "GetPersonalizedRanking" }, GetPersonalizedRankingRequest, GetPersonalizedRankingResponse, Schema.Union(ErrorAnnotation("InvalidInputException", InvalidInputException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

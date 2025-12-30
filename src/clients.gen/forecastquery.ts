import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const Filters = S.Record({key: S.String, value: S.String});
export class QueryWhatIfForecastRequest extends S.Class<QueryWhatIfForecastRequest>("QueryWhatIfForecastRequest")({WhatIfForecastArn: S.String, StartDate: S.optional(S.String), EndDate: S.optional(S.String), Filters: Filters, NextToken: S.optional(S.String)}) {}
export class QueryForecastRequest extends S.Class<QueryForecastRequest>("QueryForecastRequest")({ForecastArn: S.String, StartDate: S.optional(S.String), EndDate: S.optional(S.String), Filters: Filters, NextToken: S.optional(S.String)}) {}
export class DataPoint extends S.Class<DataPoint>("DataPoint")({Timestamp: S.optional(S.String), Value: S.optional(S.Number)}) {}
export const TimeSeries = S.Array(DataPoint);
export const Predictions = S.Record({key: S.String, value: TimeSeries});
export class Forecast extends S.Class<Forecast>("Forecast")({Predictions: S.optional(Predictions)}) {}
export class QueryForecastResponse extends S.Class<QueryForecastResponse>("QueryForecastResponse")({Forecast: S.optional(Forecast)}) {}
export class QueryWhatIfForecastResponse extends S.Class<QueryWhatIfForecastResponse>("QueryWhatIfForecastResponse")({Forecast: S.optional(Forecast)}) {}

//# Errors
export class InvalidInputException extends S.TaggedError<InvalidInputException>()("InvalidInputException", {Message: S.optional(S.String)}) {};
export class InvalidNextTokenException extends S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {Message: S.optional(S.String)}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class ResourceInUseException extends S.TaggedError<ResourceInUseException>()("ResourceInUseException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};

//# Operations
export const queryWhatIfForecast = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-06-26", uri: "/", method: "POST", sdkId: "forecastquery", sigV4ServiceName: "forecast", name: "AmazonForecastRuntime.QueryWhatIfForecast" }, QueryWhatIfForecastRequest, QueryWhatIfForecastResponse, [InvalidInputException, InvalidNextTokenException, LimitExceededException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const queryForecast = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-06-26", uri: "/", method: "POST", sdkId: "forecastquery", sigV4ServiceName: "forecast", name: "AmazonForecastRuntime.QueryForecast" }, QueryForecastRequest, QueryForecastResponse, [InvalidInputException, InvalidNextTokenException, LimitExceededException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

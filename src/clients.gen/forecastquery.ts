import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const ResourceInUseException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const LimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InvalidNextTokenException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InvalidInputException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const Predictions = Schema.Record({key: Schema.String, value: TimeSeries});
export const TimeSeries = Schema.Array(DataPoint);
export const DataPoint = Schema.Struct({Timestamp: Schema.optional(Schema.String), Value: Schema.optional(Schema.Number)});
export const Forecast = Schema.Struct({Predictions: Schema.optional(Predictions)});
export const QueryForecastResponse = Schema.Struct({Forecast: Schema.optional(Forecast)});
export const QueryWhatIfForecastResponse = Schema.Struct({Forecast: Schema.optional(Forecast)});
export const Filters = Schema.Record({key: Schema.String, value: Schema.String});
export const QueryWhatIfForecastRequest = Schema.Struct({WhatIfForecastArn: Schema.String, StartDate: Schema.optional(Schema.String), EndDate: Schema.optional(Schema.String), Filters: Filters, NextToken: Schema.optional(Schema.String)});
export const QueryForecastRequest = Schema.Struct({ForecastArn: Schema.String, StartDate: Schema.optional(Schema.String), EndDate: Schema.optional(Schema.String), Filters: Filters, NextToken: Schema.optional(Schema.String)});
export const QueryWhatIfForecast = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/", method: "POST", sdkId: "forecastquery", sigV4ServiceName: "forecast", name: "AmazonForecastRuntime.QueryWhatIfForecast" }, QueryWhatIfForecastRequest, QueryWhatIfForecastResponse, Schema.Union(ErrorAnnotation("InvalidInputException", InvalidInputException), ErrorAnnotation("InvalidNextTokenException", InvalidNextTokenException), ErrorAnnotation("LimitExceededException", LimitExceededException), ErrorAnnotation("ResourceInUseException", ResourceInUseException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const QueryForecast = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/", method: "POST", sdkId: "forecastquery", sigV4ServiceName: "forecast", name: "AmazonForecastRuntime.QueryForecast" }, QueryForecastRequest, QueryForecastResponse, Schema.Union(ErrorAnnotation("InvalidInputException", InvalidInputException), ErrorAnnotation("InvalidNextTokenException", InvalidNextTokenException), ErrorAnnotation("LimitExceededException", LimitExceededException), ErrorAnnotation("ResourceInUseException", ResourceInUseException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

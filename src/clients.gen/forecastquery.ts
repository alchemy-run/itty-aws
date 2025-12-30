import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const Filters = Schema.Record({key: Schema.String, value: Schema.String});
export const QueryWhatIfForecastRequest = Schema.Struct({WhatIfForecastArn: Schema.String, StartDate: Schema.optional(Schema.String), EndDate: Schema.optional(Schema.String), Filters: Filters, NextToken: Schema.optional(Schema.String)});
export const QueryForecastRequest = Schema.Struct({ForecastArn: Schema.String, StartDate: Schema.optional(Schema.String), EndDate: Schema.optional(Schema.String), Filters: Filters, NextToken: Schema.optional(Schema.String)});
export const DataPoint = Schema.Struct({Timestamp: Schema.optional(Schema.String), Value: Schema.optional(Schema.Number)});
export const TimeSeries = Schema.Array(DataPoint);
export const Predictions = Schema.Record({key: Schema.String, value: TimeSeries});
export const Forecast = Schema.Struct({Predictions: Schema.optional(Predictions)});
export const QueryForecastResponse = Schema.Struct({Forecast: Schema.optional(Forecast)});
export const InvalidInputException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InvalidNextTokenException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const QueryWhatIfForecastResponse = Schema.Struct({Forecast: Schema.optional(Forecast)});
export const LimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ResourceInUseException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class InvalidInputExceptionError extends Schema.TaggedError<InvalidInputExceptionError>()("InvalidInputException", InvalidInputException) {};
export class InvalidNextTokenExceptionError extends Schema.TaggedError<InvalidNextTokenExceptionError>()("InvalidNextTokenException", InvalidNextTokenException) {};
export class LimitExceededExceptionError extends Schema.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException) {};
export class ResourceInUseExceptionError extends Schema.TaggedError<ResourceInUseExceptionError>()("ResourceInUseException", ResourceInUseException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};

//# Operations
export const queryWhatIfForecast = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-06-26", uri: "/", method: "POST", sdkId: "forecastquery", sigV4ServiceName: "forecast", name: "AmazonForecastRuntime.QueryWhatIfForecast" }, QueryWhatIfForecastRequest, QueryWhatIfForecastResponse, [InvalidInputExceptionError, InvalidNextTokenExceptionError, LimitExceededExceptionError, ResourceInUseExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const queryForecast = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-06-26", uri: "/", method: "POST", sdkId: "forecastquery", sigV4ServiceName: "forecast", name: "AmazonForecastRuntime.QueryForecast" }, QueryForecastRequest, QueryForecastResponse, [InvalidInputExceptionError, InvalidNextTokenExceptionError, LimitExceededExceptionError, ResourceInUseExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

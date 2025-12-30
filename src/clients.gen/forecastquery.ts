import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const Filters = Schema.Record({key: Schema.String, value: Schema.String});
export class QueryWhatIfForecastRequest extends Schema.Class<QueryWhatIfForecastRequest>("QueryWhatIfForecastRequest")({WhatIfForecastArn: Schema.String, StartDate: Schema.optional(Schema.String), EndDate: Schema.optional(Schema.String), Filters: Filters, NextToken: Schema.optional(Schema.String)}) {}
export class QueryForecastRequest extends Schema.Class<QueryForecastRequest>("QueryForecastRequest")({ForecastArn: Schema.String, StartDate: Schema.optional(Schema.String), EndDate: Schema.optional(Schema.String), Filters: Filters, NextToken: Schema.optional(Schema.String)}) {}
export class DataPoint extends Schema.Class<DataPoint>("DataPoint")({Timestamp: Schema.optional(Schema.String), Value: Schema.optional(Schema.Number)}) {}
export const TimeSeries = Schema.Array(DataPoint);
export const Predictions = Schema.Record({key: Schema.String, value: TimeSeries});
export class Forecast extends Schema.Class<Forecast>("Forecast")({Predictions: Schema.optional(Predictions)}) {}
export class QueryForecastResponse extends Schema.Class<QueryForecastResponse>("QueryForecastResponse")({Forecast: Schema.optional(Forecast)}) {}
export class InvalidInputException extends Schema.Class<InvalidInputException>("InvalidInputException")({Message: Schema.optional(Schema.String)}) {}
export class InvalidNextTokenException extends Schema.Class<InvalidNextTokenException>("InvalidNextTokenException")({Message: Schema.optional(Schema.String)}) {}
export class QueryWhatIfForecastResponse extends Schema.Class<QueryWhatIfForecastResponse>("QueryWhatIfForecastResponse")({Forecast: Schema.optional(Forecast)}) {}
export class LimitExceededException extends Schema.Class<LimitExceededException>("LimitExceededException")({Message: Schema.optional(Schema.String)}) {}
export class ResourceInUseException extends Schema.Class<ResourceInUseException>("ResourceInUseException")({Message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.optional(Schema.String)}) {}

//# Errors
export class InvalidInputExceptionError extends Schema.TaggedError<InvalidInputExceptionError>()("InvalidInputException", InvalidInputException.fields) {};
export class InvalidNextTokenExceptionError extends Schema.TaggedError<InvalidNextTokenExceptionError>()("InvalidNextTokenException", InvalidNextTokenException.fields) {};
export class LimitExceededExceptionError extends Schema.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException.fields) {};
export class ResourceInUseExceptionError extends Schema.TaggedError<ResourceInUseExceptionError>()("ResourceInUseException", ResourceInUseException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const queryWhatIfForecast = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-06-26", uri: "/", method: "POST", sdkId: "forecastquery", sigV4ServiceName: "forecast", name: "AmazonForecastRuntime.QueryWhatIfForecast" }, QueryWhatIfForecastRequest, QueryWhatIfForecastResponse, [InvalidInputExceptionError, InvalidNextTokenExceptionError, LimitExceededExceptionError, ResourceInUseExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const queryForecast = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-06-26", uri: "/", method: "POST", sdkId: "forecastquery", sigV4ServiceName: "forecast", name: "AmazonForecastRuntime.QueryForecast" }, QueryForecastRequest, QueryForecastResponse, [InvalidInputExceptionError, InvalidNextTokenExceptionError, LimitExceededExceptionError, ResourceInUseExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

import type { Effect } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class SageMakerMetrics extends AWSServiceClient {
  batchGetMetrics(
    input: BatchGetMetricsRequest,
  ): Effect.Effect<BatchGetMetricsResponse, CommonAwsError>;
  batchPutMetrics(
    input: BatchPutMetricsRequest,
  ): Effect.Effect<BatchPutMetricsResponse, CommonAwsError>;
}

export declare class SagemakerMetrics extends SageMakerMetrics {}

export interface BatchGetMetricsRequest {
  MetricQueries: Array<MetricQuery>;
}
export interface BatchGetMetricsResponse {
  MetricQueryResults?: Array<MetricQueryResult>;
}
export interface BatchPutMetricsError {
  Code?: PutMetricsErrorCode;
  MetricIndex?: number;
}
export type BatchPutMetricsErrorList = Array<BatchPutMetricsError>;
export interface BatchPutMetricsRequest {
  TrialComponentName: string;
  MetricData: Array<RawMetricData>;
}
export interface BatchPutMetricsResponse {
  Errors?: Array<BatchPutMetricsError>;
}
export type Double = number;

export type ExperimentEntityName = string;

export type Integer = number;

export type Long = number;

export type Message = string;

export type MetricName = string;

export interface MetricQuery {
  MetricName: string;
  ResourceArn: string;
  MetricStat: MetricStatistic;
  Period: Period;
  XAxisType: XAxisType;
  Start?: number;
  End?: number;
}
export type MetricQueryList = Array<MetricQuery>;
export interface MetricQueryResult {
  Status: MetricQueryResultStatus;
  Message?: string;
  XAxisValues: Array<number>;
  MetricValues: Array<number>;
}
export type MetricQueryResultList = Array<MetricQueryResult>;
export type MetricQueryResultStatus =
  | "Complete"
  | "Truncated"
  | "InternalError"
  | "ValidationError";
export type MetricStatistic =
  | "Min"
  | "Max"
  | "Avg"
  | "Count"
  | "StdDev"
  | "Last";
export type MetricValues = Array<number>;
export type Period = "OneMinute" | "FiveMinute" | "OneHour" | "IterationNumber";
export type PutMetricsErrorCode =
  | "METRIC_LIMIT_EXCEEDED"
  | "INTERNAL_ERROR"
  | "VALIDATION_ERROR"
  | "CONFLICT_ERROR";
export interface RawMetricData {
  MetricName: string;
  Timestamp: Date | string;
  Step?: number;
  Value: number;
}
export type RawMetricDataList = Array<RawMetricData>;
export type SageMakerResourceArn = string;

export type Step = number;

export type Timestamp = Date | string;

export type XAxisType = "IterationNumber" | "Timestamp";
export type XAxisValues = Array<number>;
export declare namespace BatchGetMetrics {
  export type Input = BatchGetMetricsRequest;
  export type Output = BatchGetMetricsResponse;
  export type Error = CommonAwsError;
}

export declare namespace BatchPutMetrics {
  export type Input = BatchPutMetricsRequest;
  export type Output = BatchPutMetricsResponse;
  export type Error = CommonAwsError;
}

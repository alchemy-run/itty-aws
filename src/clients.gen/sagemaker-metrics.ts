import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const MetricQuery = Schema.Struct({MetricName: Schema.String, ResourceArn: Schema.String, MetricStat: Schema.String, Period: Schema.String, XAxisType: Schema.String, Start: Schema.optional(Schema.Number), End: Schema.optional(Schema.Number)});
export const MetricQueryList = Schema.Array(MetricQuery);
export const RawMetricData = Schema.Struct({MetricName: Schema.String, Timestamp: Schema.Date, Step: Schema.optional(Schema.Number), Value: Schema.Number});
export const RawMetricDataList = Schema.Array(RawMetricData);
export const BatchGetMetricsRequest = Schema.Struct({MetricQueries: MetricQueryList});
export const BatchPutMetricsRequest = Schema.Struct({TrialComponentName: Schema.String, MetricData: RawMetricDataList});
export const XAxisValues = Schema.Array(Schema.Number);
export const MetricValues = Schema.Array(Schema.Number);
export const MetricQueryResult = Schema.Struct({Status: Schema.String, Message: Schema.optional(Schema.String), XAxisValues: XAxisValues, MetricValues: MetricValues});
export const MetricQueryResultList = Schema.Array(MetricQueryResult);
export const BatchPutMetricsError = Schema.Struct({Code: Schema.optional(Schema.String), MetricIndex: Schema.optional(Schema.Number)});
export const BatchPutMetricsErrorList = Schema.Array(BatchPutMetricsError);
export const BatchGetMetricsResponse = Schema.Struct({MetricQueryResults: Schema.optional(MetricQueryResultList)});
export const BatchPutMetricsResponse = Schema.Struct({Errors: Schema.optional(BatchPutMetricsErrorList)});
export const BatchGetMetrics = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-09-30", uri: "/BatchGetMetrics", method: "POST", sdkId: "SageMaker Metrics", sigV4ServiceName: "sagemaker", name: "SageMakerMetricsService.BatchGetMetrics" }, BatchGetMetricsRequest, BatchGetMetricsResponse, Schema.Void), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const BatchPutMetrics = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-09-30", uri: "/BatchPutMetrics", method: "PUT", sdkId: "SageMaker Metrics", sigV4ServiceName: "sagemaker", name: "SageMakerMetricsService.BatchPutMetrics" }, BatchPutMetricsRequest, BatchPutMetricsResponse, Schema.Void), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class MetricQuery extends Schema.Class<MetricQuery>("MetricQuery")({MetricName: Schema.String, ResourceArn: Schema.String, MetricStat: Schema.String, Period: Schema.String, XAxisType: Schema.String, Start: Schema.optional(Schema.Number), End: Schema.optional(Schema.Number)}) {}
export const MetricQueryList = Schema.Array(MetricQuery);
export class RawMetricData extends Schema.Class<RawMetricData>("RawMetricData")({MetricName: Schema.String, Timestamp: Schema.Date, Step: Schema.optional(Schema.Number), Value: Schema.Number}) {}
export const RawMetricDataList = Schema.Array(RawMetricData);
export class BatchGetMetricsRequest extends Schema.Class<BatchGetMetricsRequest>("BatchGetMetricsRequest")({MetricQueries: MetricQueryList}) {}
export class BatchPutMetricsRequest extends Schema.Class<BatchPutMetricsRequest>("BatchPutMetricsRequest")({TrialComponentName: Schema.String, MetricData: RawMetricDataList}) {}
export const XAxisValues = Schema.Array(Schema.Number);
export const MetricValues = Schema.Array(Schema.Number);
export class MetricQueryResult extends Schema.Class<MetricQueryResult>("MetricQueryResult")({Status: Schema.String, Message: Schema.optional(Schema.String), XAxisValues: XAxisValues, MetricValues: MetricValues}) {}
export const MetricQueryResultList = Schema.Array(MetricQueryResult);
export class BatchPutMetricsError extends Schema.Class<BatchPutMetricsError>("BatchPutMetricsError")({Code: Schema.optional(Schema.String), MetricIndex: Schema.optional(Schema.Number)}) {}
export const BatchPutMetricsErrorList = Schema.Array(BatchPutMetricsError);
export class BatchGetMetricsResponse extends Schema.Class<BatchGetMetricsResponse>("BatchGetMetricsResponse")({MetricQueryResults: Schema.optional(MetricQueryResultList)}) {}
export class BatchPutMetricsResponse extends Schema.Class<BatchPutMetricsResponse>("BatchPutMetricsResponse")({Errors: Schema.optional(BatchPutMetricsErrorList)}) {}

//# Errors


//# Operations
export const batchGetMetrics = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-09-30", uri: "/BatchGetMetrics", method: "POST", sdkId: "SageMaker Metrics", sigV4ServiceName: "sagemaker", name: "SageMakerMetricsService.BatchGetMetrics" }, BatchGetMetricsRequest, BatchGetMetricsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchPutMetrics = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-09-30", uri: "/BatchPutMetrics", method: "PUT", sdkId: "SageMaker Metrics", sigV4ServiceName: "sagemaker", name: "SageMakerMetricsService.BatchPutMetrics" }, BatchPutMetricsRequest, BatchPutMetricsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

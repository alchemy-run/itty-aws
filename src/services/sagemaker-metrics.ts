import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class MetricQuery extends S.Class<MetricQuery>("MetricQuery")({MetricName: S.String, ResourceArn: S.String, MetricStat: S.String, Period: S.String, XAxisType: S.String, Start: S.optional(S.Number), End: S.optional(S.Number)}) {}
export const MetricQueryList = S.Array(MetricQuery);
export class RawMetricData extends S.Class<RawMetricData>("RawMetricData")({MetricName: S.String, Timestamp: S.Date, Step: S.optional(S.Number), Value: S.Number}) {}
export const RawMetricDataList = S.Array(RawMetricData);
export class BatchGetMetricsRequest extends S.Class<BatchGetMetricsRequest>("BatchGetMetricsRequest")({MetricQueries: MetricQueryList}) {}
export class BatchPutMetricsRequest extends S.Class<BatchPutMetricsRequest>("BatchPutMetricsRequest")({TrialComponentName: S.String, MetricData: RawMetricDataList}) {}
export const XAxisValues = S.Array(S.Number);
export const MetricValues = S.Array(S.Number);
export class MetricQueryResult extends S.Class<MetricQueryResult>("MetricQueryResult")({Status: S.String, Message: S.optional(S.String), XAxisValues: XAxisValues, MetricValues: MetricValues}) {}
export const MetricQueryResultList = S.Array(MetricQueryResult);
export class BatchPutMetricsError extends S.Class<BatchPutMetricsError>("BatchPutMetricsError")({Code: S.optional(S.String), MetricIndex: S.optional(S.Number)}) {}
export const BatchPutMetricsErrorList = S.Array(BatchPutMetricsError);
export class BatchGetMetricsResponse extends S.Class<BatchGetMetricsResponse>("BatchGetMetricsResponse")({MetricQueryResults: S.optional(MetricQueryResultList)}) {}
export class BatchPutMetricsResponse extends S.Class<BatchPutMetricsResponse>("BatchPutMetricsResponse")({Errors: S.optional(BatchPutMetricsErrorList)}) {}

//# Errors


//# Operations
export const batchGetMetrics = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-30", uri: "/BatchGetMetrics", method: "POST", sdkId: "SageMaker Metrics", sigV4ServiceName: "sagemaker", name: "SageMakerMetricsService.BatchGetMetrics" }, BatchGetMetricsRequest, BatchGetMetricsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchPutMetrics = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-30", uri: "/BatchPutMetrics", method: "PUT", sdkId: "SageMaker Metrics", sigV4ServiceName: "sagemaker", name: "SageMakerMetricsService.BatchPutMetrics" }, BatchPutMetricsRequest, BatchPutMetricsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

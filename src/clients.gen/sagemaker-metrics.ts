import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const MetricQuery = Schema.Struct({MetricName: Schema.String, ResourceArn: Schema.String, MetricStat: Schema.String, Period: Schema.String, XAxisType: Schema.String, Start: Schema.optional(Schema.Number), End: Schema.optional(Schema.Number)})
const MetricQueryList = Schema.Array(MetricQuery)
const RawMetricData = Schema.Struct({MetricName: Schema.String, Timestamp: Schema.Date, Step: Schema.optional(Schema.Number), Value: Schema.Number})
const RawMetricDataList = Schema.Array(RawMetricData)
const BatchGetMetricsRequest = Schema.Struct({MetricQueries: MetricQueryList})
const BatchPutMetricsRequest = Schema.Struct({TrialComponentName: Schema.String, MetricData: RawMetricDataList})
const XAxisValues = Schema.Array(Schema.Number)
const MetricValues = Schema.Array(Schema.Number)
const MetricQueryResult = Schema.Struct({Status: Schema.String, Message: Schema.optional(Schema.String), XAxisValues: XAxisValues, MetricValues: MetricValues})
const MetricQueryResultList = Schema.Array(MetricQueryResult)
const BatchPutMetricsError = Schema.Struct({Code: Schema.optional(Schema.String), MetricIndex: Schema.optional(Schema.Number)})
const BatchPutMetricsErrorList = Schema.Array(BatchPutMetricsError)
const BatchGetMetricsResponse = Schema.Struct({MetricQueryResults: Schema.optional(MetricQueryResultList)})
export const BatchGetMetrics = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/BatchGetMetrics", method: "POST", sdkId: "SageMaker Metrics", sigV4ServiceName: "sagemaker", name: "BatchGetMetrics" }, BatchGetMetricsRequest, BatchGetMetricsResponse, Schema.Void), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const BatchPutMetricsResponse = Schema.Struct({Errors: Schema.optional(BatchPutMetricsErrorList)})
export const BatchPutMetrics = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/BatchPutMetrics", method: "PUT", sdkId: "SageMaker Metrics", sigV4ServiceName: "sagemaker", name: "BatchPutMetrics" }, BatchPutMetricsRequest, BatchPutMetricsResponse, Schema.Void), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

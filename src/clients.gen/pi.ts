import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const AdditionalMetricsList = S.Array(S.String);
export const RequestedDimensionList = S.Array(S.String);
export const DimensionsMetricList = S.Array(S.String);
export const AuthorizedActionsList = S.Array(S.String);
export const MetricTypeList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class DeletePerformanceAnalysisReportRequest extends S.Class<DeletePerformanceAnalysisReportRequest>("DeletePerformanceAnalysisReportRequest")({ServiceType: S.String, Identifier: S.String, AnalysisReportId: S.String}) {}
export class DeletePerformanceAnalysisReportResponse extends S.Class<DeletePerformanceAnalysisReportResponse>("DeletePerformanceAnalysisReportResponse")({}) {}
export class GetDimensionKeyDetailsRequest extends S.Class<GetDimensionKeyDetailsRequest>("GetDimensionKeyDetailsRequest")({ServiceType: S.String, Identifier: S.String, Group: S.String, GroupIdentifier: S.String, RequestedDimensions: S.optional(RequestedDimensionList)}) {}
export class GetPerformanceAnalysisReportRequest extends S.Class<GetPerformanceAnalysisReportRequest>("GetPerformanceAnalysisReportRequest")({ServiceType: S.String, Identifier: S.String, AnalysisReportId: S.String, TextFormat: S.optional(S.String), AcceptLanguage: S.optional(S.String)}) {}
export class GetResourceMetadataRequest extends S.Class<GetResourceMetadataRequest>("GetResourceMetadataRequest")({ServiceType: S.String, Identifier: S.String}) {}
export class ListAvailableResourceDimensionsRequest extends S.Class<ListAvailableResourceDimensionsRequest>("ListAvailableResourceDimensionsRequest")({ServiceType: S.String, Identifier: S.String, Metrics: DimensionsMetricList, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), AuthorizedActions: S.optional(AuthorizedActionsList)}) {}
export class ListAvailableResourceMetricsRequest extends S.Class<ListAvailableResourceMetricsRequest>("ListAvailableResourceMetricsRequest")({ServiceType: S.String, Identifier: S.String, MetricTypes: MetricTypeList, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListPerformanceAnalysisReportsRequest extends S.Class<ListPerformanceAnalysisReportsRequest>("ListPerformanceAnalysisReportsRequest")({ServiceType: S.String, Identifier: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), ListTags: S.optional(S.Boolean)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ServiceType: S.String, ResourceARN: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ServiceType: S.String, ResourceARN: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ServiceType: S.String, ResourceARN: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const SanitizedStringList = S.Array(S.String);
export class DimensionGroup extends S.Class<DimensionGroup>("DimensionGroup")({Group: S.String, Dimensions: S.optional(SanitizedStringList), Limit: S.optional(S.Number)}) {}
export const MetricQueryFilterMap = S.Record({key: S.String, value: S.String});
export class MetricQuery extends S.Class<MetricQuery>("MetricQuery")({Metric: S.String, GroupBy: S.optional(DimensionGroup), Filter: S.optional(MetricQueryFilterMap)}) {}
export const MetricQueryList = S.Array(MetricQuery);
export class CreatePerformanceAnalysisReportRequest extends S.Class<CreatePerformanceAnalysisReportRequest>("CreatePerformanceAnalysisReportRequest")({ServiceType: S.String, Identifier: S.String, StartTime: S.Date, EndTime: S.Date, Tags: S.optional(TagList)}) {}
export class InternalServiceError extends S.Class<InternalServiceError>("InternalServiceError")({Message: S.optional(S.String)}) {}
export class DescribeDimensionKeysRequest extends S.Class<DescribeDimensionKeysRequest>("DescribeDimensionKeysRequest")({ServiceType: S.String, Identifier: S.String, StartTime: S.Date, EndTime: S.Date, Metric: S.String, PeriodInSeconds: S.optional(S.Number), GroupBy: DimensionGroup, AdditionalMetrics: S.optional(AdditionalMetricsList), PartitionBy: S.optional(DimensionGroup), Filter: S.optional(MetricQueryFilterMap), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetResourceMetricsRequest extends S.Class<GetResourceMetricsRequest>("GetResourceMetricsRequest")({ServiceType: S.String, Identifier: S.String, MetricQueries: MetricQueryList, StartTime: S.Date, EndTime: S.Date, PeriodInSeconds: S.optional(S.Number), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), PeriodAlignment: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class InvalidArgumentException extends S.Class<InvalidArgumentException>("InvalidArgumentException")({Message: S.optional(S.String)}) {}
export class NotAuthorizedException extends S.Class<NotAuthorizedException>("NotAuthorizedException")({Message: S.optional(S.String)}) {}
export class DimensionKeyDetail extends S.Class<DimensionKeyDetail>("DimensionKeyDetail")({Value: S.optional(S.String), Dimension: S.optional(S.String), Status: S.optional(S.String)}) {}
export const DimensionKeyDetailList = S.Array(DimensionKeyDetail);
export class ResponseResourceMetric extends S.Class<ResponseResourceMetric>("ResponseResourceMetric")({Metric: S.optional(S.String), Description: S.optional(S.String), Unit: S.optional(S.String)}) {}
export const ResponseResourceMetricList = S.Array(ResponseResourceMetric);
export class AnalysisReportSummary extends S.Class<AnalysisReportSummary>("AnalysisReportSummary")({AnalysisReportId: S.optional(S.String), CreateTime: S.optional(S.Date), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Status: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const AnalysisReportSummaryList = S.Array(AnalysisReportSummary);
export class CreatePerformanceAnalysisReportResponse extends S.Class<CreatePerformanceAnalysisReportResponse>("CreatePerformanceAnalysisReportResponse")({AnalysisReportId: S.optional(S.String)}) {}
export class GetDimensionKeyDetailsResponse extends S.Class<GetDimensionKeyDetailsResponse>("GetDimensionKeyDetailsResponse")({Dimensions: S.optional(DimensionKeyDetailList)}) {}
export class ListAvailableResourceMetricsResponse extends S.Class<ListAvailableResourceMetricsResponse>("ListAvailableResourceMetricsResponse")({Metrics: S.optional(ResponseResourceMetricList), NextToken: S.optional(S.String)}) {}
export class ListPerformanceAnalysisReportsResponse extends S.Class<ListPerformanceAnalysisReportsResponse>("ListPerformanceAnalysisReportsResponse")({AnalysisReports: S.optional(AnalysisReportSummaryList), NextToken: S.optional(S.String)}) {}
export const MetricValuesList = S.Array(S.Number);
export class FeatureMetadata extends S.Class<FeatureMetadata>("FeatureMetadata")({Status: S.optional(S.String)}) {}
export const FeatureMetadataMap = S.Record({key: S.String, value: FeatureMetadata});
export class Recommendation extends S.Class<Recommendation>("Recommendation")({RecommendationId: S.optional(S.String), RecommendationDescription: S.optional(S.String)}) {}
export const RecommendationList = S.Array(Recommendation);
export class DimensionDetail extends S.Class<DimensionDetail>("DimensionDetail")({Identifier: S.optional(S.String)}) {}
export const DimensionDetailList = S.Array(DimensionDetail);
export class GetResourceMetadataResponse extends S.Class<GetResourceMetadataResponse>("GetResourceMetadataResponse")({Identifier: S.optional(S.String), Features: S.optional(FeatureMetadataMap)}) {}
export const DimensionMap = S.Record({key: S.String, value: S.String});
export const AdditionalMetricsMap = S.Record({key: S.String, value: S.Number});
export class ResponseResourceMetricKey extends S.Class<ResponseResourceMetricKey>("ResponseResourceMetricKey")({Metric: S.String, Dimensions: S.optional(DimensionMap)}) {}
export class DataPoint extends S.Class<DataPoint>("DataPoint")({Timestamp: S.Date, Value: S.Number}) {}
export const DataPointsList = S.Array(DataPoint);
export class DimensionGroupDetail extends S.Class<DimensionGroupDetail>("DimensionGroupDetail")({Group: S.optional(S.String), Dimensions: S.optional(DimensionDetailList)}) {}
export const DimensionGroupDetailList = S.Array(DimensionGroupDetail);
export class ResponsePartitionKey extends S.Class<ResponsePartitionKey>("ResponsePartitionKey")({Dimensions: DimensionMap}) {}
export const ResponsePartitionKeyList = S.Array(ResponsePartitionKey);
export class DimensionKeyDescription extends S.Class<DimensionKeyDescription>("DimensionKeyDescription")({Dimensions: S.optional(DimensionMap), Total: S.optional(S.Number), AdditionalMetrics: S.optional(AdditionalMetricsMap), Partitions: S.optional(MetricValuesList)}) {}
export const DimensionKeyDescriptionList = S.Array(DimensionKeyDescription);
export class MetricKeyDataPoints extends S.Class<MetricKeyDataPoints>("MetricKeyDataPoints")({Key: S.optional(ResponseResourceMetricKey), DataPoints: S.optional(DataPointsList)}) {}
export const MetricKeyDataPointsList = S.Array(MetricKeyDataPoints);
export class MetricDimensionGroups extends S.Class<MetricDimensionGroups>("MetricDimensionGroups")({Metric: S.optional(S.String), Groups: S.optional(DimensionGroupDetailList)}) {}
export const MetricDimensionsList = S.Array(MetricDimensionGroups);
export class DescribeDimensionKeysResponse extends S.Class<DescribeDimensionKeysResponse>("DescribeDimensionKeysResponse")({AlignedStartTime: S.optional(S.Date), AlignedEndTime: S.optional(S.Date), PartitionKeys: S.optional(ResponsePartitionKeyList), Keys: S.optional(DimensionKeyDescriptionList), NextToken: S.optional(S.String)}) {}
export const DescriptiveMap = S.Record({key: S.String, value: S.String});
export class GetResourceMetricsResponse extends S.Class<GetResourceMetricsResponse>("GetResourceMetricsResponse")({AlignedStartTime: S.optional(S.Date), AlignedEndTime: S.optional(S.Date), Identifier: S.optional(S.String), MetricList: S.optional(MetricKeyDataPointsList), NextToken: S.optional(S.String)}) {}
export class ListAvailableResourceDimensionsResponse extends S.Class<ListAvailableResourceDimensionsResponse>("ListAvailableResourceDimensionsResponse")({MetricDimensions: S.optional(MetricDimensionsList), NextToken: S.optional(S.String)}) {}
export class PerformanceInsightsMetric extends S.Class<PerformanceInsightsMetric>("PerformanceInsightsMetric")({Metric: S.optional(S.String), DisplayName: S.optional(S.String), Dimensions: S.optional(DescriptiveMap), Filter: S.optional(DescriptiveMap), Value: S.optional(S.Number)}) {}
export class Data extends S.Class<Data>("Data")({PerformanceInsightsMetric: S.optional(PerformanceInsightsMetric)}) {}
export const DataList = S.Array(Data);
export class Insight extends S.Class<Insight>("Insight")({InsightId: S.String, InsightType: S.optional(S.String), Context: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Severity: S.optional(S.String), SupportingInsights: S.optional(S.suspend(() => InsightList)), Description: S.optional(S.String), Recommendations: S.optional(RecommendationList), InsightData: S.optional(DataList), BaselineData: S.optional(DataList)}) {}
export type InsightList = Insight[];
export const InsightList = S.Array(S.suspend((): S.Schema<Insight> => Insight)) as any as S.Schema<InsightList>;
export class AnalysisReport extends S.Class<AnalysisReport>("AnalysisReport")({AnalysisReportId: S.String, Identifier: S.optional(S.String), ServiceType: S.optional(S.String), CreateTime: S.optional(S.Date), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Status: S.optional(S.String), Insights: S.optional(InsightList)}) {}
export class GetPerformanceAnalysisReportResponse extends S.Class<GetPerformanceAnalysisReportResponse>("GetPerformanceAnalysisReportResponse")({AnalysisReport: S.optional(AnalysisReport)}) {}

//# Errors
export class InternalServiceErrorError extends S.TaggedError<InternalServiceErrorError>()("InternalServiceError", InternalServiceError.fields) {};
export class InvalidArgumentExceptionError extends S.TaggedError<InvalidArgumentExceptionError>()("InvalidArgumentException", InvalidArgumentException.fields) {};
export class NotAuthorizedExceptionError extends S.TaggedError<NotAuthorizedExceptionError>()("NotAuthorizedException", NotAuthorizedException.fields) {};

//# Operations
export const deletePerformanceAnalysisReport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-02-27", uri: "/", method: "POST", sdkId: "PI", sigV4ServiceName: "pi", name: "PerformanceInsightsv20180227.DeletePerformanceAnalysisReport" }, DeletePerformanceAnalysisReportRequest, DeletePerformanceAnalysisReportResponse, [InternalServiceErrorError, InvalidArgumentExceptionError, NotAuthorizedExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-02-27", uri: "/", method: "POST", sdkId: "PI", sigV4ServiceName: "pi", name: "PerformanceInsightsv20180227.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServiceErrorError, InvalidArgumentExceptionError, NotAuthorizedExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-02-27", uri: "/", method: "POST", sdkId: "PI", sigV4ServiceName: "pi", name: "PerformanceInsightsv20180227.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServiceErrorError, InvalidArgumentExceptionError, NotAuthorizedExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-02-27", uri: "/", method: "POST", sdkId: "PI", sigV4ServiceName: "pi", name: "PerformanceInsightsv20180227.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServiceErrorError, InvalidArgumentExceptionError, NotAuthorizedExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createPerformanceAnalysisReport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-02-27", uri: "/", method: "POST", sdkId: "PI", sigV4ServiceName: "pi", name: "PerformanceInsightsv20180227.CreatePerformanceAnalysisReport" }, CreatePerformanceAnalysisReportRequest, CreatePerformanceAnalysisReportResponse, [InternalServiceErrorError, InvalidArgumentExceptionError, NotAuthorizedExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getDimensionKeyDetails = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-02-27", uri: "/", method: "POST", sdkId: "PI", sigV4ServiceName: "pi", name: "PerformanceInsightsv20180227.GetDimensionKeyDetails" }, GetDimensionKeyDetailsRequest, GetDimensionKeyDetailsResponse, [InternalServiceErrorError, InvalidArgumentExceptionError, NotAuthorizedExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listAvailableResourceMetrics = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-02-27", uri: "/", method: "POST", sdkId: "PI", sigV4ServiceName: "pi", name: "PerformanceInsightsv20180227.ListAvailableResourceMetrics" }, ListAvailableResourceMetricsRequest, ListAvailableResourceMetricsResponse, [InternalServiceErrorError, InvalidArgumentExceptionError, NotAuthorizedExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listPerformanceAnalysisReports = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-02-27", uri: "/", method: "POST", sdkId: "PI", sigV4ServiceName: "pi", name: "PerformanceInsightsv20180227.ListPerformanceAnalysisReports" }, ListPerformanceAnalysisReportsRequest, ListPerformanceAnalysisReportsResponse, [InternalServiceErrorError, InvalidArgumentExceptionError, NotAuthorizedExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getResourceMetadata = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-02-27", uri: "/", method: "POST", sdkId: "PI", sigV4ServiceName: "pi", name: "PerformanceInsightsv20180227.GetResourceMetadata" }, GetResourceMetadataRequest, GetResourceMetadataResponse, [InternalServiceErrorError, InvalidArgumentExceptionError, NotAuthorizedExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeDimensionKeys = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-02-27", uri: "/", method: "POST", sdkId: "PI", sigV4ServiceName: "pi", name: "PerformanceInsightsv20180227.DescribeDimensionKeys" }, DescribeDimensionKeysRequest, DescribeDimensionKeysResponse, [InternalServiceErrorError, InvalidArgumentExceptionError, NotAuthorizedExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getResourceMetrics = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-02-27", uri: "/", method: "POST", sdkId: "PI", sigV4ServiceName: "pi", name: "PerformanceInsightsv20180227.GetResourceMetrics" }, GetResourceMetricsRequest, GetResourceMetricsResponse, [InternalServiceErrorError, InvalidArgumentExceptionError, NotAuthorizedExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listAvailableResourceDimensions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-02-27", uri: "/", method: "POST", sdkId: "PI", sigV4ServiceName: "pi", name: "PerformanceInsightsv20180227.ListAvailableResourceDimensions" }, ListAvailableResourceDimensionsRequest, ListAvailableResourceDimensionsResponse, [InternalServiceErrorError, InvalidArgumentExceptionError, NotAuthorizedExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getPerformanceAnalysisReport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-02-27", uri: "/", method: "POST", sdkId: "PI", sigV4ServiceName: "pi", name: "PerformanceInsightsv20180227.GetPerformanceAnalysisReport" }, GetPerformanceAnalysisReportRequest, GetPerformanceAnalysisReportResponse, [InternalServiceErrorError, InvalidArgumentExceptionError, NotAuthorizedExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

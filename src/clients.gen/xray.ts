import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetEncryptionConfigRequest extends S.Class<GetEncryptionConfigRequest>("GetEncryptionConfigRequest")({}) {}
export class GetTraceSegmentDestinationRequest extends S.Class<GetTraceSegmentDestinationRequest>("GetTraceSegmentDestinationRequest")({}) {}
export const TraceIdList = S.Array(S.String);
export const InsightStateList = S.Array(S.String);
export const TraceSegmentDocumentList = S.Array(S.String);
export const TraceIdListForRetrieval = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class BatchGetTracesRequest extends S.Class<BatchGetTracesRequest>("BatchGetTracesRequest")({TraceIds: TraceIdList, NextToken: S.optional(S.String)}) {}
export class CancelTraceRetrievalRequest extends S.Class<CancelTraceRetrievalRequest>("CancelTraceRetrievalRequest")({RetrievalToken: S.String}) {}
export class CancelTraceRetrievalResult extends S.Class<CancelTraceRetrievalResult>("CancelTraceRetrievalResult")({}) {}
export class DeleteGroupRequest extends S.Class<DeleteGroupRequest>("DeleteGroupRequest")({GroupName: S.optional(S.String), GroupARN: S.optional(S.String)}) {}
export class DeleteGroupResult extends S.Class<DeleteGroupResult>("DeleteGroupResult")({}) {}
export class DeleteResourcePolicyRequest extends S.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({PolicyName: S.String, PolicyRevisionId: S.optional(S.String)}) {}
export class DeleteResourcePolicyResult extends S.Class<DeleteResourcePolicyResult>("DeleteResourcePolicyResult")({}) {}
export class DeleteSamplingRuleRequest extends S.Class<DeleteSamplingRuleRequest>("DeleteSamplingRuleRequest")({RuleName: S.optional(S.String), RuleARN: S.optional(S.String)}) {}
export class GetGroupRequest extends S.Class<GetGroupRequest>("GetGroupRequest")({GroupName: S.optional(S.String), GroupARN: S.optional(S.String)}) {}
export class GetGroupsRequest extends S.Class<GetGroupsRequest>("GetGroupsRequest")({NextToken: S.optional(S.String)}) {}
export class GetIndexingRulesRequest extends S.Class<GetIndexingRulesRequest>("GetIndexingRulesRequest")({NextToken: S.optional(S.String)}) {}
export class GetInsightRequest extends S.Class<GetInsightRequest>("GetInsightRequest")({InsightId: S.String}) {}
export class GetInsightEventsRequest extends S.Class<GetInsightEventsRequest>("GetInsightEventsRequest")({InsightId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetInsightImpactGraphRequest extends S.Class<GetInsightImpactGraphRequest>("GetInsightImpactGraphRequest")({InsightId: S.String, StartTime: S.Date, EndTime: S.Date, NextToken: S.optional(S.String)}) {}
export class GetInsightSummariesRequest extends S.Class<GetInsightSummariesRequest>("GetInsightSummariesRequest")({States: S.optional(InsightStateList), GroupARN: S.optional(S.String), GroupName: S.optional(S.String), StartTime: S.Date, EndTime: S.Date, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetRetrievedTracesGraphRequest extends S.Class<GetRetrievedTracesGraphRequest>("GetRetrievedTracesGraphRequest")({RetrievalToken: S.String, NextToken: S.optional(S.String)}) {}
export class GetSamplingRulesRequest extends S.Class<GetSamplingRulesRequest>("GetSamplingRulesRequest")({NextToken: S.optional(S.String)}) {}
export class GetSamplingStatisticSummariesRequest extends S.Class<GetSamplingStatisticSummariesRequest>("GetSamplingStatisticSummariesRequest")({NextToken: S.optional(S.String)}) {}
export class GetServiceGraphRequest extends S.Class<GetServiceGraphRequest>("GetServiceGraphRequest")({StartTime: S.Date, EndTime: S.Date, GroupName: S.optional(S.String), GroupARN: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class GetTimeSeriesServiceStatisticsRequest extends S.Class<GetTimeSeriesServiceStatisticsRequest>("GetTimeSeriesServiceStatisticsRequest")({StartTime: S.Date, EndTime: S.Date, GroupName: S.optional(S.String), GroupARN: S.optional(S.String), EntitySelectorExpression: S.optional(S.String), Period: S.optional(S.Number), ForecastStatistics: S.optional(S.Boolean), NextToken: S.optional(S.String)}) {}
export class GetTraceGraphRequest extends S.Class<GetTraceGraphRequest>("GetTraceGraphRequest")({TraceIds: TraceIdList, NextToken: S.optional(S.String)}) {}
export class GetTraceSegmentDestinationResult extends S.Class<GetTraceSegmentDestinationResult>("GetTraceSegmentDestinationResult")({Destination: S.optional(S.String), Status: S.optional(S.String)}) {}
export class ListResourcePoliciesRequest extends S.Class<ListResourcePoliciesRequest>("ListResourcePoliciesRequest")({NextToken: S.optional(S.String)}) {}
export class ListRetrievedTracesRequest extends S.Class<ListRetrievedTracesRequest>("ListRetrievedTracesRequest")({RetrievalToken: S.String, TraceFormat: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String, NextToken: S.optional(S.String)}) {}
export class PutEncryptionConfigRequest extends S.Class<PutEncryptionConfigRequest>("PutEncryptionConfigRequest")({KeyId: S.optional(S.String), Type: S.String}) {}
export class PutResourcePolicyRequest extends S.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({PolicyName: S.String, PolicyDocument: S.String, PolicyRevisionId: S.optional(S.String), BypassPolicyLockoutCheck: S.optional(S.Boolean)}) {}
export class PutTraceSegmentsRequest extends S.Class<PutTraceSegmentsRequest>("PutTraceSegmentsRequest")({TraceSegmentDocuments: TraceSegmentDocumentList}) {}
export class StartTraceRetrievalRequest extends S.Class<StartTraceRetrievalRequest>("StartTraceRetrievalRequest")({TraceIds: TraceIdListForRetrieval, StartTime: S.Date, EndTime: S.Date}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class InsightsConfiguration extends S.Class<InsightsConfiguration>("InsightsConfiguration")({InsightsEnabled: S.optional(S.Boolean), NotificationsEnabled: S.optional(S.Boolean)}) {}
export class UpdateGroupRequest extends S.Class<UpdateGroupRequest>("UpdateGroupRequest")({GroupName: S.optional(S.String), GroupARN: S.optional(S.String), FilterExpression: S.optional(S.String), InsightsConfiguration: S.optional(InsightsConfiguration)}) {}
export class UpdateTraceSegmentDestinationRequest extends S.Class<UpdateTraceSegmentDestinationRequest>("UpdateTraceSegmentDestinationRequest")({Destination: S.optional(S.String)}) {}
export const UnprocessedTraceIdList = S.Array(S.String);
export class EncryptionConfig extends S.Class<EncryptionConfig>("EncryptionConfig")({KeyId: S.optional(S.String), Status: S.optional(S.String), Type: S.optional(S.String)}) {}
export const AttributeMap = S.Record({key: S.String, value: S.String});
export class SamplingRateBoost extends S.Class<SamplingRateBoost>("SamplingRateBoost")({MaxRate: S.Number, CooldownWindowMinutes: S.Number}) {}
export class SamplingRule extends S.Class<SamplingRule>("SamplingRule")({RuleName: S.optional(S.String), RuleARN: S.optional(S.String), ResourceARN: S.String, Priority: S.Number, FixedRate: S.Number, ReservoirSize: S.Number, ServiceName: S.String, ServiceType: S.String, Host: S.String, HTTPMethod: S.String, URLPath: S.String, Version: S.Number, Attributes: S.optional(AttributeMap), SamplingRateBoost: S.optional(SamplingRateBoost)}) {}
export class SamplingRuleRecord extends S.Class<SamplingRuleRecord>("SamplingRuleRecord")({SamplingRule: S.optional(SamplingRule), CreatedAt: S.optional(S.Date), ModifiedAt: S.optional(S.Date)}) {}
export const SamplingRuleRecordList = S.Array(SamplingRuleRecord);
export class SamplingStatisticsDocument extends S.Class<SamplingStatisticsDocument>("SamplingStatisticsDocument")({RuleName: S.String, ClientID: S.String, Timestamp: S.Date, RequestCount: S.Number, SampledCount: S.Number, BorrowCount: S.optional(S.Number)}) {}
export const SamplingStatisticsDocumentList = S.Array(SamplingStatisticsDocument);
export class SamplingBoostStatisticsDocument extends S.Class<SamplingBoostStatisticsDocument>("SamplingBoostStatisticsDocument")({RuleName: S.String, ServiceName: S.String, Timestamp: S.Date, AnomalyCount: S.Number, TotalCount: S.Number, SampledAnomalyCount: S.Number}) {}
export const SamplingBoostStatisticsDocumentList = S.Array(SamplingBoostStatisticsDocument);
export class SamplingStrategy extends S.Class<SamplingStrategy>("SamplingStrategy")({Name: S.optional(S.String), Value: S.optional(S.Number)}) {}
export class SamplingRuleUpdate extends S.Class<SamplingRuleUpdate>("SamplingRuleUpdate")({RuleName: S.optional(S.String), RuleARN: S.optional(S.String), ResourceARN: S.optional(S.String), Priority: S.optional(S.Number), FixedRate: S.optional(S.Number), ReservoirSize: S.optional(S.Number), Host: S.optional(S.String), ServiceName: S.optional(S.String), ServiceType: S.optional(S.String), HTTPMethod: S.optional(S.String), URLPath: S.optional(S.String), Attributes: S.optional(AttributeMap), SamplingRateBoost: S.optional(SamplingRateBoost)}) {}
export class InvalidRequestException extends S.Class<InvalidRequestException>("InvalidRequestException")({Message: S.optional(S.String)}) {}
export class CreateGroupRequest extends S.Class<CreateGroupRequest>("CreateGroupRequest")({GroupName: S.String, FilterExpression: S.optional(S.String), InsightsConfiguration: S.optional(InsightsConfiguration), Tags: S.optional(TagList)}) {}
export class ThrottledException extends S.Class<ThrottledException>("ThrottledException")({Message: S.optional(S.String)}) {}
export class InvalidPolicyRevisionIdException extends S.Class<InvalidPolicyRevisionIdException>("InvalidPolicyRevisionIdException")({Message: S.optional(S.String)}) {}
export class GetEncryptionConfigResult extends S.Class<GetEncryptionConfigResult>("GetEncryptionConfigResult")({EncryptionConfig: S.optional(EncryptionConfig)}) {}
export class GetSamplingRulesResult extends S.Class<GetSamplingRulesResult>("GetSamplingRulesResult")({SamplingRuleRecords: S.optional(SamplingRuleRecordList), NextToken: S.optional(S.String)}) {}
export class GetSamplingTargetsRequest extends S.Class<GetSamplingTargetsRequest>("GetSamplingTargetsRequest")({SamplingStatisticsDocuments: SamplingStatisticsDocumentList, SamplingBoostStatisticsDocuments: S.optional(SamplingBoostStatisticsDocumentList)}) {}
export const ServiceNames = S.Array(S.String);
export class ErrorStatistics extends S.Class<ErrorStatistics>("ErrorStatistics")({ThrottleCount: S.optional(S.Number), OtherCount: S.optional(S.Number), TotalCount: S.optional(S.Number)}) {}
export class FaultStatistics extends S.Class<FaultStatistics>("FaultStatistics")({OtherCount: S.optional(S.Number), TotalCount: S.optional(S.Number)}) {}
export class EdgeStatistics extends S.Class<EdgeStatistics>("EdgeStatistics")({OkCount: S.optional(S.Number), ErrorStatistics: S.optional(ErrorStatistics), FaultStatistics: S.optional(FaultStatistics), TotalCount: S.optional(S.Number), TotalResponseTime: S.optional(S.Number)}) {}
export class HistogramEntry extends S.Class<HistogramEntry>("HistogramEntry")({Value: S.optional(S.Number), Count: S.optional(S.Number)}) {}
export const Histogram = S.Array(HistogramEntry);
export const AliasNames = S.Array(S.String);
export class Alias extends S.Class<Alias>("Alias")({Name: S.optional(S.String), Names: S.optional(AliasNames), Type: S.optional(S.String)}) {}
export const AliasList = S.Array(Alias);
export class Edge extends S.Class<Edge>("Edge")({ReferenceId: S.optional(S.Number), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), SummaryStatistics: S.optional(EdgeStatistics), ResponseTimeHistogram: S.optional(Histogram), Aliases: S.optional(AliasList), EdgeType: S.optional(S.String), ReceivedEventAgeHistogram: S.optional(Histogram)}) {}
export const EdgeList = S.Array(Edge);
export class ServiceStatistics extends S.Class<ServiceStatistics>("ServiceStatistics")({OkCount: S.optional(S.Number), ErrorStatistics: S.optional(ErrorStatistics), FaultStatistics: S.optional(FaultStatistics), TotalCount: S.optional(S.Number), TotalResponseTime: S.optional(S.Number)}) {}
export class Service extends S.Class<Service>("Service")({ReferenceId: S.optional(S.Number), Name: S.optional(S.String), Names: S.optional(ServiceNames), Root: S.optional(S.Boolean), AccountId: S.optional(S.String), Type: S.optional(S.String), State: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Edges: S.optional(EdgeList), SummaryStatistics: S.optional(ServiceStatistics), DurationHistogram: S.optional(Histogram), ResponseTimeHistogram: S.optional(Histogram)}) {}
export const ServiceList = S.Array(Service);
export class GetTraceGraphResult extends S.Class<GetTraceGraphResult>("GetTraceGraphResult")({Services: S.optional(ServiceList), NextToken: S.optional(S.String)}) {}
export class GetTraceSummariesRequest extends S.Class<GetTraceSummariesRequest>("GetTraceSummariesRequest")({StartTime: S.Date, EndTime: S.Date, TimeRangeType: S.optional(S.String), Sampling: S.optional(S.Boolean), SamplingStrategy: S.optional(SamplingStrategy), FilterExpression: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList), NextToken: S.optional(S.String)}) {}
export class PutEncryptionConfigResult extends S.Class<PutEncryptionConfigResult>("PutEncryptionConfigResult")({EncryptionConfig: S.optional(EncryptionConfig)}) {}
export class ResourcePolicy extends S.Class<ResourcePolicy>("ResourcePolicy")({PolicyName: S.optional(S.String), PolicyDocument: S.optional(S.String), PolicyRevisionId: S.optional(S.String), LastUpdatedTime: S.optional(S.Date)}) {}
export class PutResourcePolicyResult extends S.Class<PutResourcePolicyResult>("PutResourcePolicyResult")({ResourcePolicy: S.optional(ResourcePolicy)}) {}
export class StartTraceRetrievalResult extends S.Class<StartTraceRetrievalResult>("StartTraceRetrievalResult")({RetrievalToken: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: S.optional(S.String), ResourceName: S.optional(S.String)}) {}
export class Group extends S.Class<Group>("Group")({GroupName: S.optional(S.String), GroupARN: S.optional(S.String), FilterExpression: S.optional(S.String), InsightsConfiguration: S.optional(InsightsConfiguration)}) {}
export class UpdateGroupResult extends S.Class<UpdateGroupResult>("UpdateGroupResult")({Group: S.optional(Group)}) {}
export class UpdateSamplingRuleRequest extends S.Class<UpdateSamplingRuleRequest>("UpdateSamplingRuleRequest")({SamplingRuleUpdate: SamplingRuleUpdate}) {}
export class UpdateTraceSegmentDestinationResult extends S.Class<UpdateTraceSegmentDestinationResult>("UpdateTraceSegmentDestinationResult")({Destination: S.optional(S.String), Status: S.optional(S.String)}) {}
export const InsightCategoryList = S.Array(S.String);
export class BackendConnectionErrors extends S.Class<BackendConnectionErrors>("BackendConnectionErrors")({TimeoutCount: S.optional(S.Number), ConnectionRefusedCount: S.optional(S.Number), HTTPCode4XXCount: S.optional(S.Number), HTTPCode5XXCount: S.optional(S.Number), UnknownHostCount: S.optional(S.Number), OtherCount: S.optional(S.Number)}) {}
export class ProbabilisticRuleValueUpdate extends S.Class<ProbabilisticRuleValueUpdate>("ProbabilisticRuleValueUpdate")({DesiredSamplingPercentage: S.Number}) {}
export class GroupSummary extends S.Class<GroupSummary>("GroupSummary")({GroupName: S.optional(S.String), GroupARN: S.optional(S.String), FilterExpression: S.optional(S.String), InsightsConfiguration: S.optional(InsightsConfiguration)}) {}
export const GroupSummaryList = S.Array(GroupSummary);
export class RequestImpactStatistics extends S.Class<RequestImpactStatistics>("RequestImpactStatistics")({FaultCount: S.optional(S.Number), OkCount: S.optional(S.Number), TotalCount: S.optional(S.Number)}) {}
export class ServiceId extends S.Class<ServiceId>("ServiceId")({Name: S.optional(S.String), Names: S.optional(ServiceNames), AccountId: S.optional(S.String), Type: S.optional(S.String)}) {}
export class AnomalousService extends S.Class<AnomalousService>("AnomalousService")({ServiceId: S.optional(ServiceId)}) {}
export const AnomalousServiceList = S.Array(AnomalousService);
export class InsightEvent extends S.Class<InsightEvent>("InsightEvent")({Summary: S.optional(S.String), EventTime: S.optional(S.Date), ClientRequestImpactStatistics: S.optional(RequestImpactStatistics), RootCauseServiceRequestImpactStatistics: S.optional(RequestImpactStatistics), TopAnomalousServices: S.optional(AnomalousServiceList)}) {}
export const InsightEventList = S.Array(InsightEvent);
export class InsightSummary extends S.Class<InsightSummary>("InsightSummary")({InsightId: S.optional(S.String), GroupARN: S.optional(S.String), GroupName: S.optional(S.String), RootCauseServiceId: S.optional(ServiceId), Categories: S.optional(InsightCategoryList), State: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Summary: S.optional(S.String), ClientRequestImpactStatistics: S.optional(RequestImpactStatistics), RootCauseServiceRequestImpactStatistics: S.optional(RequestImpactStatistics), TopAnomalousServices: S.optional(AnomalousServiceList), LastUpdateTime: S.optional(S.Date)}) {}
export const InsightSummaryList = S.Array(InsightSummary);
export class SamplingStatisticSummary extends S.Class<SamplingStatisticSummary>("SamplingStatisticSummary")({RuleName: S.optional(S.String), Timestamp: S.optional(S.Date), RequestCount: S.optional(S.Number), BorrowCount: S.optional(S.Number), SampledCount: S.optional(S.Number)}) {}
export const SamplingStatisticSummaryList = S.Array(SamplingStatisticSummary);
export const ResourcePolicyList = S.Array(ResourcePolicy);
export class TelemetryRecord extends S.Class<TelemetryRecord>("TelemetryRecord")({Timestamp: S.Date, SegmentsReceivedCount: S.optional(S.Number), SegmentsSentCount: S.optional(S.Number), SegmentsSpilloverCount: S.optional(S.Number), SegmentsRejectedCount: S.optional(S.Number), BackendConnectionErrors: S.optional(BackendConnectionErrors)}) {}
export const TelemetryRecordList = S.Array(TelemetryRecord);
export class UnprocessedTraceSegment extends S.Class<UnprocessedTraceSegment>("UnprocessedTraceSegment")({Id: S.optional(S.String), ErrorCode: S.optional(S.String), Message: S.optional(S.String)}) {}
export const UnprocessedTraceSegmentList = S.Array(UnprocessedTraceSegment);
export const IndexingRuleValueUpdate = S.Union(ProbabilisticRuleValueUpdate);
export class CreateGroupResult extends S.Class<CreateGroupResult>("CreateGroupResult")({Group: S.optional(Group)}) {}
export class CreateSamplingRuleRequest extends S.Class<CreateSamplingRuleRequest>("CreateSamplingRuleRequest")({SamplingRule: SamplingRule, Tags: S.optional(TagList)}) {}
export class DeleteSamplingRuleResult extends S.Class<DeleteSamplingRuleResult>("DeleteSamplingRuleResult")({SamplingRuleRecord: S.optional(SamplingRuleRecord)}) {}
export class GetGroupResult extends S.Class<GetGroupResult>("GetGroupResult")({Group: S.optional(Group)}) {}
export class GetGroupsResult extends S.Class<GetGroupsResult>("GetGroupsResult")({Groups: S.optional(GroupSummaryList), NextToken: S.optional(S.String)}) {}
export class GetInsightEventsResult extends S.Class<GetInsightEventsResult>("GetInsightEventsResult")({InsightEvents: S.optional(InsightEventList), NextToken: S.optional(S.String)}) {}
export class GetInsightSummariesResult extends S.Class<GetInsightSummariesResult>("GetInsightSummariesResult")({InsightSummaries: S.optional(InsightSummaryList), NextToken: S.optional(S.String)}) {}
export class GetSamplingStatisticSummariesResult extends S.Class<GetSamplingStatisticSummariesResult>("GetSamplingStatisticSummariesResult")({SamplingStatisticSummaries: S.optional(SamplingStatisticSummaryList), NextToken: S.optional(S.String)}) {}
export class ListResourcePoliciesResult extends S.Class<ListResourcePoliciesResult>("ListResourcePoliciesResult")({ResourcePolicies: S.optional(ResourcePolicyList), NextToken: S.optional(S.String)}) {}
export class LockoutPreventionException extends S.Class<LockoutPreventionException>("LockoutPreventionException")({Message: S.optional(S.String)}) {}
export class PutTelemetryRecordsRequest extends S.Class<PutTelemetryRecordsRequest>("PutTelemetryRecordsRequest")({TelemetryRecords: TelemetryRecordList, EC2InstanceId: S.optional(S.String), Hostname: S.optional(S.String), ResourceARN: S.optional(S.String)}) {}
export class PutTelemetryRecordsResult extends S.Class<PutTelemetryRecordsResult>("PutTelemetryRecordsResult")({}) {}
export class PutTraceSegmentsResult extends S.Class<PutTraceSegmentsResult>("PutTraceSegmentsResult")({UnprocessedTraceSegments: S.optional(UnprocessedTraceSegmentList)}) {}
export class TooManyTagsException extends S.Class<TooManyTagsException>("TooManyTagsException")({Message: S.optional(S.String), ResourceName: S.optional(S.String)}) {}
export class UpdateIndexingRuleRequest extends S.Class<UpdateIndexingRuleRequest>("UpdateIndexingRuleRequest")({Name: S.String, Rule: IndexingRuleValueUpdate}) {}
export class UpdateSamplingRuleResult extends S.Class<UpdateSamplingRuleResult>("UpdateSamplingRuleResult")({SamplingRuleRecord: S.optional(SamplingRuleRecord)}) {}
export class Segment extends S.Class<Segment>("Segment")({Id: S.optional(S.String), Document: S.optional(S.String)}) {}
export const SegmentList = S.Array(Segment);
export class InsightImpactGraphEdge extends S.Class<InsightImpactGraphEdge>("InsightImpactGraphEdge")({ReferenceId: S.optional(S.Number)}) {}
export const InsightImpactGraphEdgeList = S.Array(InsightImpactGraphEdge);
export class GraphLink extends S.Class<GraphLink>("GraphLink")({ReferenceType: S.optional(S.String), SourceTraceId: S.optional(S.String), DestinationTraceIds: S.optional(TraceIdList)}) {}
export const LinksList = S.Array(GraphLink);
export class ForecastStatistics extends S.Class<ForecastStatistics>("ForecastStatistics")({FaultCountHigh: S.optional(S.Number), FaultCountLow: S.optional(S.Number)}) {}
export const ServiceIds = S.Array(ServiceId);
export class Span extends S.Class<Span>("Span")({Id: S.optional(S.String), Document: S.optional(S.String)}) {}
export const SpanList = S.Array(Span);
export class Trace extends S.Class<Trace>("Trace")({Id: S.optional(S.String), Duration: S.optional(S.Number), LimitExceeded: S.optional(S.Boolean), Segments: S.optional(SegmentList)}) {}
export const TraceList = S.Array(Trace);
export class Insight extends S.Class<Insight>("Insight")({InsightId: S.optional(S.String), GroupARN: S.optional(S.String), GroupName: S.optional(S.String), RootCauseServiceId: S.optional(ServiceId), Categories: S.optional(InsightCategoryList), State: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Summary: S.optional(S.String), ClientRequestImpactStatistics: S.optional(RequestImpactStatistics), RootCauseServiceRequestImpactStatistics: S.optional(RequestImpactStatistics), TopAnomalousServices: S.optional(AnomalousServiceList)}) {}
export class InsightImpactGraphService extends S.Class<InsightImpactGraphService>("InsightImpactGraphService")({ReferenceId: S.optional(S.Number), Type: S.optional(S.String), Name: S.optional(S.String), Names: S.optional(ServiceNames), AccountId: S.optional(S.String), Edges: S.optional(InsightImpactGraphEdgeList)}) {}
export const InsightImpactGraphServiceList = S.Array(InsightImpactGraphService);
export class RetrievedService extends S.Class<RetrievedService>("RetrievedService")({Service: S.optional(Service), Links: S.optional(LinksList)}) {}
export const RetrievedServicesList = S.Array(RetrievedService);
export class UnprocessedStatistics extends S.Class<UnprocessedStatistics>("UnprocessedStatistics")({RuleName: S.optional(S.String), ErrorCode: S.optional(S.String), Message: S.optional(S.String)}) {}
export const UnprocessedStatisticsList = S.Array(UnprocessedStatistics);
export class TimeSeriesServiceStatistics extends S.Class<TimeSeriesServiceStatistics>("TimeSeriesServiceStatistics")({Timestamp: S.optional(S.Date), EdgeSummaryStatistics: S.optional(EdgeStatistics), ServiceSummaryStatistics: S.optional(ServiceStatistics), ServiceForecastStatistics: S.optional(ForecastStatistics), ResponseTimeHistogram: S.optional(Histogram)}) {}
export const TimeSeriesServiceStatisticsList = S.Array(TimeSeriesServiceStatistics);
export class RetrievedTrace extends S.Class<RetrievedTrace>("RetrievedTrace")({Id: S.optional(S.String), Duration: S.optional(S.Number), Spans: S.optional(SpanList)}) {}
export const TraceSpanList = S.Array(RetrievedTrace);
export class ProbabilisticRuleValue extends S.Class<ProbabilisticRuleValue>("ProbabilisticRuleValue")({DesiredSamplingPercentage: S.Number, ActualSamplingPercentage: S.optional(S.Number)}) {}
export class BatchGetTracesResult extends S.Class<BatchGetTracesResult>("BatchGetTracesResult")({Traces: S.optional(TraceList), UnprocessedTraceIds: S.optional(UnprocessedTraceIdList), NextToken: S.optional(S.String)}) {}
export class CreateSamplingRuleResult extends S.Class<CreateSamplingRuleResult>("CreateSamplingRuleResult")({SamplingRuleRecord: S.optional(SamplingRuleRecord)}) {}
export class GetInsightResult extends S.Class<GetInsightResult>("GetInsightResult")({Insight: S.optional(Insight)}) {}
export class GetInsightImpactGraphResult extends S.Class<GetInsightImpactGraphResult>("GetInsightImpactGraphResult")({InsightId: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), ServiceGraphStartTime: S.optional(S.Date), ServiceGraphEndTime: S.optional(S.Date), Services: S.optional(InsightImpactGraphServiceList), NextToken: S.optional(S.String)}) {}
export class GetRetrievedTracesGraphResult extends S.Class<GetRetrievedTracesGraphResult>("GetRetrievedTracesGraphResult")({RetrievalStatus: S.optional(S.String), Services: S.optional(RetrievedServicesList), NextToken: S.optional(S.String)}) {}
export class GetTimeSeriesServiceStatisticsResult extends S.Class<GetTimeSeriesServiceStatisticsResult>("GetTimeSeriesServiceStatisticsResult")({TimeSeriesServiceStatistics: S.optional(TimeSeriesServiceStatisticsList), ContainsOldGroupVersions: S.optional(S.Boolean), NextToken: S.optional(S.String)}) {}
export class ListRetrievedTracesResult extends S.Class<ListRetrievedTracesResult>("ListRetrievedTracesResult")({RetrievalStatus: S.optional(S.String), TraceFormat: S.optional(S.String), Traces: S.optional(TraceSpanList), NextToken: S.optional(S.String)}) {}
export class MalformedPolicyDocumentException extends S.Class<MalformedPolicyDocumentException>("MalformedPolicyDocumentException")({Message: S.optional(S.String)}) {}
export const IndexingRuleValue = S.Union(ProbabilisticRuleValue);
export class IndexingRule extends S.Class<IndexingRule>("IndexingRule")({Name: S.optional(S.String), ModifiedAt: S.optional(S.Date), Rule: S.optional(IndexingRuleValue)}) {}
export class UpdateIndexingRuleResult extends S.Class<UpdateIndexingRuleResult>("UpdateIndexingRuleResult")({IndexingRule: S.optional(IndexingRule)}) {}
export class SamplingBoost extends S.Class<SamplingBoost>("SamplingBoost")({BoostRate: S.Number, BoostRateTTL: S.Date}) {}
export class Http extends S.Class<Http>("Http")({HttpURL: S.optional(S.String), HttpStatus: S.optional(S.Number), HttpMethod: S.optional(S.String), UserAgent: S.optional(S.String), ClientIp: S.optional(S.String)}) {}
export class TraceUser extends S.Class<TraceUser>("TraceUser")({UserName: S.optional(S.String), ServiceIds: S.optional(ServiceIds)}) {}
export const TraceUsers = S.Array(TraceUser);
export class ResourceARNDetail extends S.Class<ResourceARNDetail>("ResourceARNDetail")({ARN: S.optional(S.String)}) {}
export const TraceResourceARNs = S.Array(ResourceARNDetail);
export class InstanceIdDetail extends S.Class<InstanceIdDetail>("InstanceIdDetail")({Id: S.optional(S.String)}) {}
export const TraceInstanceIds = S.Array(InstanceIdDetail);
export class AvailabilityZoneDetail extends S.Class<AvailabilityZoneDetail>("AvailabilityZoneDetail")({Name: S.optional(S.String)}) {}
export const TraceAvailabilityZones = S.Array(AvailabilityZoneDetail);
export const IndexingRuleList = S.Array(IndexingRule);
export class SamplingTargetDocument extends S.Class<SamplingTargetDocument>("SamplingTargetDocument")({RuleName: S.optional(S.String), FixedRate: S.optional(S.Number), ReservoirQuota: S.optional(S.Number), ReservoirQuotaTTL: S.optional(S.Date), Interval: S.optional(S.Number), SamplingBoost: S.optional(SamplingBoost)}) {}
export const SamplingTargetDocumentList = S.Array(SamplingTargetDocument);
export class RuleLimitExceededException extends S.Class<RuleLimitExceededException>("RuleLimitExceededException")({Message: S.optional(S.String)}) {}
export class GetIndexingRulesResult extends S.Class<GetIndexingRulesResult>("GetIndexingRulesResult")({IndexingRules: S.optional(IndexingRuleList), NextToken: S.optional(S.String)}) {}
export class GetSamplingTargetsResult extends S.Class<GetSamplingTargetsResult>("GetSamplingTargetsResult")({SamplingTargetDocuments: S.optional(SamplingTargetDocumentList), LastRuleModification: S.optional(S.Date), UnprocessedStatistics: S.optional(UnprocessedStatisticsList), UnprocessedBoostStatistics: S.optional(UnprocessedStatisticsList)}) {}
export class GetServiceGraphResult extends S.Class<GetServiceGraphResult>("GetServiceGraphResult")({StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Services: S.optional(ServiceList), ContainsOldGroupVersions: S.optional(S.Boolean), NextToken: S.optional(S.String)}) {}
export class PolicyCountLimitExceededException extends S.Class<PolicyCountLimitExceededException>("PolicyCountLimitExceededException")({Message: S.optional(S.String)}) {}
export const AnnotationValue = S.Union(S.Number, S.Boolean, S.String);
export class RootCauseException extends S.Class<RootCauseException>("RootCauseException")({Name: S.optional(S.String), Message: S.optional(S.String)}) {}
export const RootCauseExceptions = S.Array(RootCauseException);
export class ErrorRootCauseEntity extends S.Class<ErrorRootCauseEntity>("ErrorRootCauseEntity")({Name: S.optional(S.String), Exceptions: S.optional(RootCauseExceptions), Remote: S.optional(S.Boolean)}) {}
export const ErrorRootCauseEntityPath = S.Array(ErrorRootCauseEntity);
export class ResponseTimeRootCauseEntity extends S.Class<ResponseTimeRootCauseEntity>("ResponseTimeRootCauseEntity")({Name: S.optional(S.String), Coverage: S.optional(S.Number), Remote: S.optional(S.Boolean)}) {}
export const ResponseTimeRootCauseEntityPath = S.Array(ResponseTimeRootCauseEntity);
export class ValueWithServiceIds extends S.Class<ValueWithServiceIds>("ValueWithServiceIds")({AnnotationValue: S.optional(AnnotationValue), ServiceIds: S.optional(ServiceIds)}) {}
export const ValuesWithServiceIds = S.Array(ValueWithServiceIds);
export class ErrorRootCauseService extends S.Class<ErrorRootCauseService>("ErrorRootCauseService")({Name: S.optional(S.String), Names: S.optional(ServiceNames), Type: S.optional(S.String), AccountId: S.optional(S.String), EntityPath: S.optional(ErrorRootCauseEntityPath), Inferred: S.optional(S.Boolean)}) {}
export const ErrorRootCauseServices = S.Array(ErrorRootCauseService);
export class ResponseTimeRootCauseService extends S.Class<ResponseTimeRootCauseService>("ResponseTimeRootCauseService")({Name: S.optional(S.String), Names: S.optional(ServiceNames), Type: S.optional(S.String), AccountId: S.optional(S.String), EntityPath: S.optional(ResponseTimeRootCauseEntityPath), Inferred: S.optional(S.Boolean)}) {}
export const ResponseTimeRootCauseServices = S.Array(ResponseTimeRootCauseService);
export class PolicySizeLimitExceededException extends S.Class<PolicySizeLimitExceededException>("PolicySizeLimitExceededException")({Message: S.optional(S.String)}) {}
export const Annotations = S.Record({key: S.String, value: ValuesWithServiceIds});
export class ErrorRootCause extends S.Class<ErrorRootCause>("ErrorRootCause")({Services: S.optional(ErrorRootCauseServices), ClientImpacting: S.optional(S.Boolean)}) {}
export const ErrorRootCauses = S.Array(ErrorRootCause);
export class ResponseTimeRootCause extends S.Class<ResponseTimeRootCause>("ResponseTimeRootCause")({Services: S.optional(ResponseTimeRootCauseServices), ClientImpacting: S.optional(S.Boolean)}) {}
export const ResponseTimeRootCauses = S.Array(ResponseTimeRootCause);
export class FaultRootCauseEntity extends S.Class<FaultRootCauseEntity>("FaultRootCauseEntity")({Name: S.optional(S.String), Exceptions: S.optional(RootCauseExceptions), Remote: S.optional(S.Boolean)}) {}
export const FaultRootCauseEntityPath = S.Array(FaultRootCauseEntity);
export class FaultRootCauseService extends S.Class<FaultRootCauseService>("FaultRootCauseService")({Name: S.optional(S.String), Names: S.optional(ServiceNames), Type: S.optional(S.String), AccountId: S.optional(S.String), EntityPath: S.optional(FaultRootCauseEntityPath), Inferred: S.optional(S.Boolean)}) {}
export const FaultRootCauseServices = S.Array(FaultRootCauseService);
export class FaultRootCause extends S.Class<FaultRootCause>("FaultRootCause")({Services: S.optional(FaultRootCauseServices), ClientImpacting: S.optional(S.Boolean)}) {}
export const FaultRootCauses = S.Array(FaultRootCause);
export class TraceSummary extends S.Class<TraceSummary>("TraceSummary")({Id: S.optional(S.String), StartTime: S.optional(S.Date), Duration: S.optional(S.Number), ResponseTime: S.optional(S.Number), HasFault: S.optional(S.Boolean), HasError: S.optional(S.Boolean), HasThrottle: S.optional(S.Boolean), IsPartial: S.optional(S.Boolean), Http: S.optional(Http), Annotations: S.optional(Annotations), Users: S.optional(TraceUsers), ServiceIds: S.optional(ServiceIds), ResourceARNs: S.optional(TraceResourceARNs), InstanceIds: S.optional(TraceInstanceIds), AvailabilityZones: S.optional(TraceAvailabilityZones), EntryPoint: S.optional(ServiceId), FaultRootCauses: S.optional(FaultRootCauses), ErrorRootCauses: S.optional(ErrorRootCauses), ResponseTimeRootCauses: S.optional(ResponseTimeRootCauses), Revision: S.optional(S.Number), MatchedEventTime: S.optional(S.Date)}) {}
export const TraceSummaryList = S.Array(TraceSummary);
export class GetTraceSummariesResult extends S.Class<GetTraceSummariesResult>("GetTraceSummariesResult")({TraceSummaries: S.optional(TraceSummaryList), ApproximateTime: S.optional(S.Date), TracesProcessedCount: S.optional(S.Number), NextToken: S.optional(S.String)}) {}

//# Errors
export class InvalidRequestExceptionError extends S.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException.fields) {};
export class ThrottledExceptionError extends S.TaggedError<ThrottledExceptionError>()("ThrottledException", ThrottledException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class InvalidPolicyRevisionIdExceptionError extends S.TaggedError<InvalidPolicyRevisionIdExceptionError>()("InvalidPolicyRevisionIdException", InvalidPolicyRevisionIdException.fields) {};
export class LockoutPreventionExceptionError extends S.TaggedError<LockoutPreventionExceptionError>()("LockoutPreventionException", LockoutPreventionException.fields) {};
export class TooManyTagsExceptionError extends S.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException.fields) {};
export class MalformedPolicyDocumentExceptionError extends S.TaggedError<MalformedPolicyDocumentExceptionError>()("MalformedPolicyDocumentException", MalformedPolicyDocumentException.fields) {};
export class RuleLimitExceededExceptionError extends S.TaggedError<RuleLimitExceededExceptionError>()("RuleLimitExceededException", RuleLimitExceededException.fields) {};
export class PolicyCountLimitExceededExceptionError extends S.TaggedError<PolicyCountLimitExceededExceptionError>()("PolicyCountLimitExceededException", PolicyCountLimitExceededException.fields) {};
export class PolicySizeLimitExceededExceptionError extends S.TaggedError<PolicySizeLimitExceededExceptionError>()("PolicySizeLimitExceededException", PolicySizeLimitExceededException.fields) {};

//# Operations
export const getTraceSegmentDestination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/GetTraceSegmentDestination", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetTraceSegmentDestination" }, GetTraceSegmentDestinationRequest, GetTraceSegmentDestinationResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/UntagResource", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const cancelTraceRetrieval = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/CancelTraceRetrieval", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.CancelTraceRetrieval" }, CancelTraceRetrievalRequest, CancelTraceRetrievalResult, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/DeleteGroup", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.DeleteGroup" }, DeleteGroupRequest, DeleteGroupResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteResourcePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/DeleteResourcePolicy", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, DeleteResourcePolicyResult, [InvalidPolicyRevisionIdExceptionError, InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getEncryptionConfig = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/EncryptionConfig", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetEncryptionConfig" }, GetEncryptionConfigRequest, GetEncryptionConfigResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getSamplingRules = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/GetSamplingRules", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetSamplingRules" }, GetSamplingRulesRequest, GetSamplingRulesResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getTraceGraph = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/TraceGraph", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetTraceGraph" }, GetTraceGraphRequest, GetTraceGraphResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/ListTagsForResource", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putEncryptionConfig = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/PutEncryptionConfig", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.PutEncryptionConfig" }, PutEncryptionConfigRequest, PutEncryptionConfigResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const startTraceRetrieval = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/StartTraceRetrieval", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.StartTraceRetrieval" }, StartTraceRetrievalRequest, StartTraceRetrievalResult, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/UpdateGroup", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.UpdateGroup" }, UpdateGroupRequest, UpdateGroupResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateTraceSegmentDestination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/UpdateTraceSegmentDestination", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.UpdateTraceSegmentDestination" }, UpdateTraceSegmentDestinationRequest, UpdateTraceSegmentDestinationResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/CreateGroup", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.CreateGroup" }, CreateGroupRequest, CreateGroupResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteSamplingRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/DeleteSamplingRule", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.DeleteSamplingRule" }, DeleteSamplingRuleRequest, DeleteSamplingRuleResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/GetGroup", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetGroup" }, GetGroupRequest, GetGroupResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getGroups = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/Groups", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetGroups" }, GetGroupsRequest, GetGroupsResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getInsightEvents = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/InsightEvents", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetInsightEvents" }, GetInsightEventsRequest, GetInsightEventsResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getInsightSummaries = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/InsightSummaries", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetInsightSummaries" }, GetInsightSummariesRequest, GetInsightSummariesResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getSamplingStatisticSummaries = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/SamplingStatisticSummaries", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetSamplingStatisticSummaries" }, GetSamplingStatisticSummariesRequest, GetSamplingStatisticSummariesResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listResourcePolicies = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/ListResourcePolicies", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.ListResourcePolicies" }, ListResourcePoliciesRequest, ListResourcePoliciesResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putTelemetryRecords = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/TelemetryRecords", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.PutTelemetryRecords" }, PutTelemetryRecordsRequest, PutTelemetryRecordsResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putTraceSegments = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/TraceSegments", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.PutTraceSegments" }, PutTraceSegmentsRequest, PutTraceSegmentsResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/TagResource", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.TagResource" }, TagResourceRequest, TagResourceResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottledExceptionError, TooManyTagsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateSamplingRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/UpdateSamplingRule", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.UpdateSamplingRule" }, UpdateSamplingRuleRequest, UpdateSamplingRuleResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchGetTraces = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/Traces", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.BatchGetTraces" }, BatchGetTracesRequest, BatchGetTracesResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getInsight = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/Insight", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetInsight" }, GetInsightRequest, GetInsightResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getInsightImpactGraph = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/InsightImpactGraph", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetInsightImpactGraph" }, GetInsightImpactGraphRequest, GetInsightImpactGraphResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getRetrievedTracesGraph = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/GetRetrievedTracesGraph", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetRetrievedTracesGraph" }, GetRetrievedTracesGraphRequest, GetRetrievedTracesGraphResult, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getTimeSeriesServiceStatistics = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/TimeSeriesServiceStatistics", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetTimeSeriesServiceStatistics" }, GetTimeSeriesServiceStatisticsRequest, GetTimeSeriesServiceStatisticsResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listRetrievedTraces = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/ListRetrievedTraces", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.ListRetrievedTraces" }, ListRetrievedTracesRequest, ListRetrievedTracesResult, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateIndexingRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/UpdateIndexingRule", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.UpdateIndexingRule" }, UpdateIndexingRuleRequest, UpdateIndexingRuleResult, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createSamplingRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/CreateSamplingRule", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.CreateSamplingRule" }, CreateSamplingRuleRequest, CreateSamplingRuleResult, [InvalidRequestExceptionError, RuleLimitExceededExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getIndexingRules = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/GetIndexingRules", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetIndexingRules" }, GetIndexingRulesRequest, GetIndexingRulesResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getSamplingTargets = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/SamplingTargets", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetSamplingTargets" }, GetSamplingTargetsRequest, GetSamplingTargetsResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getServiceGraph = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/ServiceGraph", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetServiceGraph" }, GetServiceGraphRequest, GetServiceGraphResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putResourcePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/PutResourcePolicy", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResult, [InvalidPolicyRevisionIdExceptionError, LockoutPreventionExceptionError, MalformedPolicyDocumentExceptionError, PolicyCountLimitExceededExceptionError, PolicySizeLimitExceededExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getTraceSummaries = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-12", uri: "/TraceSummaries", method: "POST", sdkId: "XRay", sigV4ServiceName: "xray", name: "AWSXRay.GetTraceSummaries" }, GetTraceSummariesRequest, GetTraceSummariesResult, [InvalidRequestExceptionError, ThrottledExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class DevOpsGuru extends AWSServiceClient {
  addNotificationChannel(
    input: AddNotificationChannelRequest,
  ): Effect.Effect<
    AddNotificationChannelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteInsight(
    input: DeleteInsightRequest,
  ): Effect.Effect<
    DeleteInsightResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAccountHealth(
    input: DescribeAccountHealthRequest,
  ): Effect.Effect<
    DescribeAccountHealthResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAccountOverview(
    input: DescribeAccountOverviewRequest,
  ): Effect.Effect<
    DescribeAccountOverviewResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAnomaly(
    input: DescribeAnomalyRequest,
  ): Effect.Effect<
    DescribeAnomalyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeEventSourcesConfig(
    input: DescribeEventSourcesConfigRequest,
  ): Effect.Effect<
    DescribeEventSourcesConfigResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeFeedback(
    input: DescribeFeedbackRequest,
  ): Effect.Effect<
    DescribeFeedbackResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeInsight(
    input: DescribeInsightRequest,
  ): Effect.Effect<
    DescribeInsightResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeOrganizationHealth(
    input: DescribeOrganizationHealthRequest,
  ): Effect.Effect<
    DescribeOrganizationHealthResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeOrganizationOverview(
    input: DescribeOrganizationOverviewRequest,
  ): Effect.Effect<
    DescribeOrganizationOverviewResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeOrganizationResourceCollectionHealth(
    input: DescribeOrganizationResourceCollectionHealthRequest,
  ): Effect.Effect<
    DescribeOrganizationResourceCollectionHealthResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeResourceCollectionHealth(
    input: DescribeResourceCollectionHealthRequest,
  ): Effect.Effect<
    DescribeResourceCollectionHealthResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeServiceIntegration(
    input: DescribeServiceIntegrationRequest,
  ): Effect.Effect<
    DescribeServiceIntegrationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCostEstimation(
    input: GetCostEstimationRequest,
  ): Effect.Effect<
    GetCostEstimationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getResourceCollection(
    input: GetResourceCollectionRequest,
  ): Effect.Effect<
    GetResourceCollectionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAnomaliesForInsight(
    input: ListAnomaliesForInsightRequest,
  ): Effect.Effect<
    ListAnomaliesForInsightResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAnomalousLogGroups(
    input: ListAnomalousLogGroupsRequest,
  ): Effect.Effect<
    ListAnomalousLogGroupsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEvents(
    input: ListEventsRequest,
  ): Effect.Effect<
    ListEventsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInsights(
    input: ListInsightsRequest,
  ): Effect.Effect<
    ListInsightsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMonitoredResources(
    input: ListMonitoredResourcesRequest,
  ): Effect.Effect<
    ListMonitoredResourcesResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listNotificationChannels(
    input: ListNotificationChannelsRequest,
  ): Effect.Effect<
    ListNotificationChannelsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listOrganizationInsights(
    input: ListOrganizationInsightsRequest,
  ): Effect.Effect<
    ListOrganizationInsightsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRecommendations(
    input: ListRecommendationsRequest,
  ): Effect.Effect<
    ListRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putFeedback(
    input: PutFeedbackRequest,
  ): Effect.Effect<
    PutFeedbackResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  removeNotificationChannel(
    input: RemoveNotificationChannelRequest,
  ): Effect.Effect<
    RemoveNotificationChannelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchInsights(
    input: SearchInsightsRequest,
  ): Effect.Effect<
    SearchInsightsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchOrganizationInsights(
    input: SearchOrganizationInsightsRequest,
  ): Effect.Effect<
    SearchOrganizationInsightsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startCostEstimation(
    input: StartCostEstimationRequest,
  ): Effect.Effect<
    StartCostEstimationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEventSourcesConfig(
    input: UpdateEventSourcesConfigRequest,
  ): Effect.Effect<
    UpdateEventSourcesConfigResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateResourceCollection(
    input: UpdateResourceCollectionRequest,
  ): Effect.Effect<
    UpdateResourceCollectionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateServiceIntegration(
    input: UpdateServiceIntegrationRequest,
  ): Effect.Effect<
    UpdateServiceIntegrationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class DevopsGuru extends DevOpsGuru {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export interface AccountHealth {
  AccountId?: string;
  Insight?: AccountInsightHealth;
}
export type AccountHealths = Array<AccountHealth>;
export type AccountIdList = Array<string>;
export interface AccountInsightHealth {
  OpenProactiveInsights?: number;
  OpenReactiveInsights?: number;
}
export interface AddNotificationChannelRequest {
  Config: NotificationChannelConfig;
}
export interface AddNotificationChannelResponse {
  Id: string;
}
export interface AmazonCodeGuruProfilerIntegration {
  Status?: EventSourceOptInStatus;
}
export type AnalyzedResourceCount = number;

export interface AnomalousLogGroup {
  LogGroupName?: string;
  ImpactStartTime?: Date | string;
  ImpactEndTime?: Date | string;
  NumberOfLogLinesScanned?: number;
  LogAnomalyShowcases?: Array<LogAnomalyShowcase>;
}
export type AnomalousLogGroups = Array<AnomalousLogGroup>;
export type AnomalyDescription = string;

export type AnomalyId = string;

export type AnomalyLimit = number;

export type AnomalyName = string;

export interface AnomalyReportedTimeRange {
  OpenTime: Date | string;
  CloseTime?: Date | string;
}
export interface AnomalyResource {
  Name?: string;
  Type?: string;
}
export type AnomalyResources = Array<AnomalyResource>;
export type AnomalySeverity = "LOW" | "MEDIUM" | "HIGH";
export type AnomalySource = string;

export interface AnomalySourceDetails {
  CloudWatchMetrics?: Array<CloudWatchMetricsDetail>;
  PerformanceInsightsMetrics?: Array<PerformanceInsightsMetricsDetail>;
}
export interface AnomalySourceMetadata {
  Source?: string;
  SourceResourceName?: string;
  SourceResourceType?: string;
}
export type AnomalyStatus = "ONGOING" | "CLOSED";
export interface AnomalyTimeRange {
  StartTime: Date | string;
  EndTime?: Date | string;
}
export type AnomalyType = "CAUSAL" | "CONTEXTUAL";
export type AppBoundaryKey = string;

export type AssociatedResourceArns = Array<string>;
export type AwsAccountId = string;

export type Channels = Array<NotificationChannel>;
export type ClientToken = string;

export interface CloudFormationCollection {
  StackNames?: Array<string>;
}
export interface CloudFormationCollectionFilter {
  StackNames?: Array<string>;
}
export interface CloudFormationCostEstimationResourceCollectionFilter {
  StackNames?: Array<string>;
}
export interface CloudFormationHealth {
  StackName?: string;
  Insight?: InsightHealth;
  AnalyzedResourceCount?: number;
}
export type CloudFormationHealths = Array<CloudFormationHealth>;
export type CloudWatchMetricDataStatusCode =
  | "Complete"
  | "InternalError"
  | "PartialData";
export interface CloudWatchMetricsDataSummary {
  TimestampMetricValuePairList?: Array<TimestampMetricValuePair>;
  StatusCode?: CloudWatchMetricDataStatusCode;
}
export interface CloudWatchMetricsDetail {
  MetricName?: string;
  Namespace?: string;
  Dimensions?: Array<CloudWatchMetricsDimension>;
  Stat?: CloudWatchMetricsStat;
  Unit?: string;
  Period?: number;
  MetricDataSummary?: CloudWatchMetricsDataSummary;
}
export type CloudWatchMetricsDetails = Array<CloudWatchMetricsDetail>;
export interface CloudWatchMetricsDimension {
  Name?: string;
  Value?: string;
}
export type CloudWatchMetricsDimensionName = string;

export type CloudWatchMetricsDimensions = Array<CloudWatchMetricsDimension>;
export type CloudWatchMetricsDimensionValue = string;

export type CloudWatchMetricsMetricName = string;

export type CloudWatchMetricsNamespace = string;

export type CloudWatchMetricsPeriod = number;

export type CloudWatchMetricsStat =
  | "Sum"
  | "Average"
  | "SampleCount"
  | "Minimum"
  | "Maximum"
  | "p99"
  | "p90"
  | "p50";
export type CloudWatchMetricsUnit = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export type Cost = number;

export interface CostEstimationResourceCollectionFilter {
  CloudFormation?: CloudFormationCostEstimationResourceCollectionFilter;
  Tags?: Array<TagCostEstimationResourceCollectionFilter>;
}
export type CostEstimationServiceResourceCount = number;

export type CostEstimationServiceResourceState = "ACTIVE" | "INACTIVE";
export type CostEstimationStackNames = Array<string>;
export type CostEstimationStatus = "ONGOING" | "COMPLETED";
export type CostEstimationTagValues = Array<string>;
export interface CostEstimationTimeRange {
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export interface DeleteInsightRequest {
  Id: string;
}
export interface DeleteInsightResponse {}
export interface DescribeAccountHealthRequest {}
export interface DescribeAccountHealthResponse {
  OpenReactiveInsights: number;
  OpenProactiveInsights: number;
  MetricsAnalyzed: number;
  ResourceHours: number;
  AnalyzedResourceCount?: number;
}
export interface DescribeAccountOverviewRequest {
  FromTime: Date | string;
  ToTime?: Date | string;
}
export interface DescribeAccountOverviewResponse {
  ReactiveInsights: number;
  ProactiveInsights: number;
  MeanTimeToRecoverInMilliseconds: number;
}
export interface DescribeAnomalyRequest {
  Id: string;
  AccountId?: string;
}
export interface DescribeAnomalyResponse {
  ProactiveAnomaly?: ProactiveAnomaly;
  ReactiveAnomaly?: ReactiveAnomaly;
}
export interface DescribeEventSourcesConfigRequest {}
export interface DescribeEventSourcesConfigResponse {
  EventSources?: EventSourcesConfig;
}
export interface DescribeFeedbackRequest {
  InsightId?: string;
}
export interface DescribeFeedbackResponse {
  InsightFeedback?: InsightFeedback;
}
export interface DescribeInsightRequest {
  Id: string;
  AccountId?: string;
}
export interface DescribeInsightResponse {
  ProactiveInsight?: ProactiveInsight;
  ReactiveInsight?: ReactiveInsight;
}
export interface DescribeOrganizationHealthRequest {
  AccountIds?: Array<string>;
  OrganizationalUnitIds?: Array<string>;
}
export interface DescribeOrganizationHealthResponse {
  OpenReactiveInsights: number;
  OpenProactiveInsights: number;
  MetricsAnalyzed: number;
  ResourceHours: number;
}
export interface DescribeOrganizationOverviewRequest {
  FromTime: Date | string;
  ToTime?: Date | string;
  AccountIds?: Array<string>;
  OrganizationalUnitIds?: Array<string>;
}
export interface DescribeOrganizationOverviewResponse {
  ReactiveInsights: number;
  ProactiveInsights: number;
}
export interface DescribeOrganizationResourceCollectionHealthRequest {
  OrganizationResourceCollectionType: OrganizationResourceCollectionType;
  AccountIds?: Array<string>;
  OrganizationalUnitIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeOrganizationResourceCollectionHealthResponse {
  CloudFormation?: Array<CloudFormationHealth>;
  Service?: Array<ServiceHealth>;
  Account?: Array<AccountHealth>;
  NextToken?: string;
  Tags?: Array<TagHealth>;
}
export interface DescribeResourceCollectionHealthRequest {
  ResourceCollectionType: ResourceCollectionType;
  NextToken?: string;
}
export interface DescribeResourceCollectionHealthResponse {
  CloudFormation?: Array<CloudFormationHealth>;
  Service?: Array<ServiceHealth>;
  NextToken?: string;
  Tags?: Array<TagHealth>;
}
export interface DescribeServiceIntegrationRequest {}
export interface DescribeServiceIntegrationResponse {
  ServiceIntegration?: ServiceIntegrationConfig;
}
export interface EndTimeRange {
  FromTime?: Date | string;
  ToTime?: Date | string;
}
export type ErrorMessageString = string;

export type ErrorNameString = string;

export type ErrorQuotaCodeString = string;

export type ErrorServiceCodeString = string;

export interface Event {
  ResourceCollection?: ResourceCollection;
  Id?: string;
  Time?: Date | string;
  EventSource?: string;
  Name?: string;
  DataSource?: EventDataSource;
  EventClass?: EventClass;
  Resources?: Array<EventResource>;
}
export type EventClass =
  | "INFRASTRUCTURE"
  | "DEPLOYMENT"
  | "SECURITY_CHANGE"
  | "CONFIG_CHANGE"
  | "SCHEMA_CHANGE";
export type EventDataSource = "AWS_CLOUD_TRAIL" | "AWS_CODE_DEPLOY";
export type EventId = string;

export type EventName = string;

export interface EventResource {
  Type?: string;
  Name?: string;
  Arn?: string;
}
export type EventResourceArn = string;

export type EventResourceName = string;

export type EventResources = Array<EventResource>;
export type EventResourceType = string;

export type Events = Array<Event>;
export type EventSource = string;

export type EventSourceOptInStatus = "ENABLED" | "DISABLED";
export interface EventSourcesConfig {
  AmazonCodeGuruProfiler?: AmazonCodeGuruProfilerIntegration;
}
export interface EventTimeRange {
  FromTime: Date | string;
  ToTime: Date | string;
}
export type Explanation = string;

export interface GetCostEstimationRequest {
  NextToken?: string;
}
export interface GetCostEstimationResponse {
  ResourceCollection?: CostEstimationResourceCollectionFilter;
  Status?: CostEstimationStatus;
  Costs?: Array<ServiceResourceCost>;
  TimeRange?: CostEstimationTimeRange;
  TotalCost?: number;
  NextToken?: string;
}
export interface GetResourceCollectionRequest {
  ResourceCollectionType: ResourceCollectionType;
  NextToken?: string;
}
export interface GetResourceCollectionResponse {
  ResourceCollection?: ResourceCollectionFilter;
  NextToken?: string;
}
export type InsightDescription = string;

export interface InsightFeedback {
  Id?: string;
  Feedback?: InsightFeedbackOption;
}
export type InsightFeedbackOption =
  | "VALID_COLLECTION"
  | "RECOMMENDATION_USEFUL"
  | "ALERT_TOO_SENSITIVE"
  | "DATA_NOISY_ANOMALY"
  | "DATA_INCORRECT";
export interface InsightHealth {
  OpenProactiveInsights?: number;
  OpenReactiveInsights?: number;
  MeanTimeToRecoverInMilliseconds?: number;
}
export type InsightId = string;

export type InsightName = string;

export type InsightSeverities = Array<InsightSeverity>;
export type InsightSeverity = "LOW" | "MEDIUM" | "HIGH";
export type InsightStatus = "ONGOING" | "CLOSED";
export type InsightStatuses = Array<InsightStatus>;
export interface InsightTimeRange {
  StartTime: Date | string;
  EndTime?: Date | string;
}
export type InsightType = "REACTIVE" | "PROACTIVE";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
  readonly RetryAfterSeconds?: number;
}> {}
export type KMSKeyId = string;

export interface KMSServerSideEncryptionIntegration {
  KMSKeyId?: string;
  OptInStatus?: OptInStatus;
  Type?: ServerSideEncryptionType;
}
export interface KMSServerSideEncryptionIntegrationConfig {
  KMSKeyId?: string;
  OptInStatus?: OptInStatus;
  Type?: ServerSideEncryptionType;
}
export interface ListAnomaliesForInsightFilters {
  ServiceCollection?: ServiceCollection;
}
export type ListAnomaliesForInsightMaxResults = number;

export interface ListAnomaliesForInsightRequest {
  InsightId: string;
  StartTimeRange?: StartTimeRange;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
  Filters?: ListAnomaliesForInsightFilters;
}
export interface ListAnomaliesForInsightResponse {
  ProactiveAnomalies?: Array<ProactiveAnomalySummary>;
  ReactiveAnomalies?: Array<ReactiveAnomalySummary>;
  NextToken?: string;
}
export type ListAnomalousLogGroupsMaxResults = number;

export interface ListAnomalousLogGroupsRequest {
  InsightId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAnomalousLogGroupsResponse {
  InsightId: string;
  AnomalousLogGroups: Array<AnomalousLogGroup>;
  NextToken?: string;
}
export interface ListEventsFilters {
  InsightId?: string;
  EventTimeRange?: EventTimeRange;
  EventClass?: EventClass;
  EventSource?: string;
  DataSource?: EventDataSource;
  ResourceCollection?: ResourceCollection;
}
export type ListEventsMaxResults = number;

export interface ListEventsRequest {
  Filters: ListEventsFilters;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export interface ListEventsResponse {
  Events: Array<Event>;
  NextToken?: string;
}
export type ListInsightsAccountIdList = Array<string>;
export interface ListInsightsAnyStatusFilter {
  Type: InsightType;
  StartTimeRange: StartTimeRange;
}
export interface ListInsightsClosedStatusFilter {
  Type: InsightType;
  EndTimeRange: EndTimeRange;
}
export type ListInsightsMaxResults = number;

export interface ListInsightsOngoingStatusFilter {
  Type: InsightType;
}
export type ListInsightsOrganizationalUnitIdList = Array<string>;
export interface ListInsightsRequest {
  StatusFilter: ListInsightsStatusFilter;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListInsightsResponse {
  ProactiveInsights?: Array<ProactiveInsightSummary>;
  ReactiveInsights?: Array<ReactiveInsightSummary>;
  NextToken?: string;
}
export interface ListInsightsStatusFilter {
  Ongoing?: ListInsightsOngoingStatusFilter;
  Closed?: ListInsightsClosedStatusFilter;
  Any?: ListInsightsAnyStatusFilter;
}
export interface ListMonitoredResourcesFilters {
  ResourcePermission: ResourcePermission;
  ResourceTypeFilters: Array<ResourceTypeFilter>;
}
export type ListMonitoredResourcesMaxResults = number;

export interface ListMonitoredResourcesRequest {
  Filters?: ListMonitoredResourcesFilters;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListMonitoredResourcesResponse {
  MonitoredResourceIdentifiers: Array<MonitoredResourceIdentifier>;
  NextToken?: string;
}
export interface ListNotificationChannelsRequest {
  NextToken?: string;
}
export interface ListNotificationChannelsResponse {
  Channels?: Array<NotificationChannel>;
  NextToken?: string;
}
export interface ListOrganizationInsightsRequest {
  StatusFilter: ListInsightsStatusFilter;
  MaxResults?: number;
  AccountIds?: Array<string>;
  OrganizationalUnitIds?: Array<string>;
  NextToken?: string;
}
export interface ListOrganizationInsightsResponse {
  ProactiveInsights?: Array<ProactiveOrganizationInsightSummary>;
  ReactiveInsights?: Array<ReactiveOrganizationInsightSummary>;
  NextToken?: string;
}
export interface ListRecommendationsRequest {
  InsightId: string;
  NextToken?: string;
  Locale?: Locale;
  AccountId?: string;
}
export interface ListRecommendationsResponse {
  Recommendations?: Array<Recommendation>;
  NextToken?: string;
}
export type Locale =
  | "DE_DE"
  | "EN_US"
  | "EN_GB"
  | "ES_ES"
  | "FR_FR"
  | "IT_IT"
  | "JA_JP"
  | "KO_KR"
  | "PT_BR"
  | "ZH_CN"
  | "ZH_TW";
export interface LogAnomalyClass {
  LogStreamName?: string;
  LogAnomalyType?: LogAnomalyType;
  LogAnomalyToken?: string;
  LogEventId?: string;
  Explanation?: string;
  NumberOfLogLinesOccurrences?: number;
  LogEventTimestamp?: Date | string;
}
export type LogAnomalyClasses = Array<LogAnomalyClass>;
export interface LogAnomalyShowcase {
  LogAnomalyClasses?: Array<LogAnomalyClass>;
}
export type LogAnomalyShowcases = Array<LogAnomalyShowcase>;
export type LogAnomalyToken = string;

export type LogAnomalyType =
  | "KEYWORD"
  | "KEYWORD_TOKEN"
  | "FORMAT"
  | "HTTP_CODE"
  | "BLOCK_FORMAT"
  | "NUMERICAL_POINT"
  | "NUMERICAL_NAN"
  | "NEW_FIELD_NAME";
export type LogEventId = string;

export type LogGroupName = string;

export interface LogsAnomalyDetectionIntegration {
  OptInStatus?: OptInStatus;
}
export interface LogsAnomalyDetectionIntegrationConfig {
  OptInStatus?: OptInStatus;
}
export type LogStreamName = string;

export type MeanTimeToRecoverInMilliseconds = number;

export type MetricValue = number;

export interface MonitoredResourceIdentifier {
  MonitoredResourceName?: string;
  Type?: string;
  ResourcePermission?: ResourcePermission;
  LastUpdated?: Date | string;
  ResourceCollection?: ResourceCollection;
}
export type MonitoredResourceIdentifiers = Array<MonitoredResourceIdentifier>;
export type MonitoredResourceName = string;

export interface NotificationChannel {
  Id?: string;
  Config?: NotificationChannelConfig;
}
export interface NotificationChannelConfig {
  Sns: SnsChannelConfig;
  Filters?: NotificationFilterConfig;
}
export type NotificationChannelId = string;

export interface NotificationFilterConfig {
  Severities?: Array<InsightSeverity>;
  MessageTypes?: Array<NotificationMessageType>;
}
export type NotificationMessageType =
  | "NEW_INSIGHT"
  | "CLOSED_INSIGHT"
  | "NEW_ASSOCIATION"
  | "SEVERITY_UPGRADED"
  | "NEW_RECOMMENDATION";
export type NotificationMessageTypes = Array<NotificationMessageType>;
export type NumberOfLogLinesOccurrences = number;

export type NumberOfLogLinesScanned = number;

export type NumMetricsAnalyzed = number;

export type NumOpenProactiveInsights = number;

export type NumOpenReactiveInsights = number;

export type NumProactiveInsights = number;

export type NumReactiveInsights = number;

export interface OpsCenterIntegration {
  OptInStatus?: OptInStatus;
}
export interface OpsCenterIntegrationConfig {
  OptInStatus?: OptInStatus;
}
export type OptInStatus = "ENABLED" | "DISABLED";
export type OrganizationalUnitId = string;

export type OrganizationalUnitIdList = Array<string>;
export type OrganizationResourceCollectionMaxResults = number;

export type OrganizationResourceCollectionType =
  | "AWS_CLOUD_FORMATION"
  | "AWS_SERVICE"
  | "AWS_ACCOUNT"
  | "AWS_TAGS";
export type PerformanceInsightsMetricDimension = string;

export interface PerformanceInsightsMetricDimensionGroup {
  Group?: string;
  Dimensions?: Array<string>;
  Limit?: number;
}
export type PerformanceInsightsMetricDimensions = Array<string>;
export type PerformanceInsightsMetricDisplayName = string;

export type PerformanceInsightsMetricFilterKey = string;

export type PerformanceInsightsMetricFilterMap = Record<string, string>;
export type PerformanceInsightsMetricFilterValue = string;

export type PerformanceInsightsMetricGroup = string;

export type PerformanceInsightsMetricLimitInteger = number;

export type PerformanceInsightsMetricName = string;

export interface PerformanceInsightsMetricQuery {
  Metric?: string;
  GroupBy?: PerformanceInsightsMetricDimensionGroup;
  Filter?: Record<string, string>;
}
export interface PerformanceInsightsMetricsDetail {
  MetricDisplayName?: string;
  Unit?: string;
  MetricQuery?: PerformanceInsightsMetricQuery;
  ReferenceData?: Array<PerformanceInsightsReferenceData>;
  StatsAtAnomaly?: Array<PerformanceInsightsStat>;
  StatsAtBaseline?: Array<PerformanceInsightsStat>;
}
export type PerformanceInsightsMetricsDetails =
  Array<PerformanceInsightsMetricsDetail>;
export type PerformanceInsightsMetricUnit = string;

export interface PerformanceInsightsReferenceComparisonValues {
  ReferenceScalar?: PerformanceInsightsReferenceScalar;
  ReferenceMetric?: PerformanceInsightsReferenceMetric;
}
export interface PerformanceInsightsReferenceData {
  Name?: string;
  ComparisonValues?: PerformanceInsightsReferenceComparisonValues;
}
export type PerformanceInsightsReferenceDataList =
  Array<PerformanceInsightsReferenceData>;
export interface PerformanceInsightsReferenceMetric {
  MetricQuery?: PerformanceInsightsMetricQuery;
}
export type PerformanceInsightsReferenceName = string;

export interface PerformanceInsightsReferenceScalar {
  Value?: number;
}
export interface PerformanceInsightsStat {
  Type?: string;
  Value?: number;
}
export type PerformanceInsightsStats = Array<PerformanceInsightsStat>;
export type PerformanceInsightsStatType = string;

export type PerformanceInsightsValueDouble = number;

export interface PredictionTimeRange {
  StartTime: Date | string;
  EndTime?: Date | string;
}
export type ProactiveAnomalies = Array<ProactiveAnomalySummary>;
export interface ProactiveAnomaly {
  Id?: string;
  Severity?: AnomalySeverity;
  Status?: AnomalyStatus;
  UpdateTime?: Date | string;
  AnomalyTimeRange?: AnomalyTimeRange;
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange;
  PredictionTimeRange?: PredictionTimeRange;
  SourceDetails?: AnomalySourceDetails;
  AssociatedInsightId?: string;
  ResourceCollection?: ResourceCollection;
  Limit?: number;
  SourceMetadata?: AnomalySourceMetadata;
  AnomalyResources?: Array<AnomalyResource>;
  Description?: string;
}
export interface ProactiveAnomalySummary {
  Id?: string;
  Severity?: AnomalySeverity;
  Status?: AnomalyStatus;
  UpdateTime?: Date | string;
  AnomalyTimeRange?: AnomalyTimeRange;
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange;
  PredictionTimeRange?: PredictionTimeRange;
  SourceDetails?: AnomalySourceDetails;
  AssociatedInsightId?: string;
  ResourceCollection?: ResourceCollection;
  Limit?: number;
  SourceMetadata?: AnomalySourceMetadata;
  AnomalyResources?: Array<AnomalyResource>;
  Description?: string;
}
export interface ProactiveInsight {
  Id?: string;
  Name?: string;
  Severity?: InsightSeverity;
  Status?: InsightStatus;
  InsightTimeRange?: InsightTimeRange;
  PredictionTimeRange?: PredictionTimeRange;
  ResourceCollection?: ResourceCollection;
  SsmOpsItemId?: string;
  Description?: string;
}
export type ProactiveInsights = Array<ProactiveInsightSummary>;
export interface ProactiveInsightSummary {
  Id?: string;
  Name?: string;
  Severity?: InsightSeverity;
  Status?: InsightStatus;
  InsightTimeRange?: InsightTimeRange;
  PredictionTimeRange?: PredictionTimeRange;
  ResourceCollection?: ResourceCollection;
  ServiceCollection?: ServiceCollection;
  AssociatedResourceArns?: Array<string>;
}
export type ProactiveOrganizationInsights =
  Array<ProactiveOrganizationInsightSummary>;
export interface ProactiveOrganizationInsightSummary {
  Id?: string;
  AccountId?: string;
  OrganizationalUnitId?: string;
  Name?: string;
  Severity?: InsightSeverity;
  Status?: InsightStatus;
  InsightTimeRange?: InsightTimeRange;
  PredictionTimeRange?: PredictionTimeRange;
  ResourceCollection?: ResourceCollection;
  ServiceCollection?: ServiceCollection;
}
export interface PutFeedbackRequest {
  InsightFeedback?: InsightFeedback;
}
export interface PutFeedbackResponse {}
export type ReactiveAnomalies = Array<ReactiveAnomalySummary>;
export interface ReactiveAnomaly {
  Id?: string;
  Severity?: AnomalySeverity;
  Status?: AnomalyStatus;
  AnomalyTimeRange?: AnomalyTimeRange;
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange;
  SourceDetails?: AnomalySourceDetails;
  AssociatedInsightId?: string;
  ResourceCollection?: ResourceCollection;
  Type?: AnomalyType;
  Name?: string;
  Description?: string;
  CausalAnomalyId?: string;
  AnomalyResources?: Array<AnomalyResource>;
}
export interface ReactiveAnomalySummary {
  Id?: string;
  Severity?: AnomalySeverity;
  Status?: AnomalyStatus;
  AnomalyTimeRange?: AnomalyTimeRange;
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange;
  SourceDetails?: AnomalySourceDetails;
  AssociatedInsightId?: string;
  ResourceCollection?: ResourceCollection;
  Type?: AnomalyType;
  Name?: string;
  Description?: string;
  CausalAnomalyId?: string;
  AnomalyResources?: Array<AnomalyResource>;
}
export interface ReactiveInsight {
  Id?: string;
  Name?: string;
  Severity?: InsightSeverity;
  Status?: InsightStatus;
  InsightTimeRange?: InsightTimeRange;
  ResourceCollection?: ResourceCollection;
  SsmOpsItemId?: string;
  Description?: string;
}
export type ReactiveInsights = Array<ReactiveInsightSummary>;
export interface ReactiveInsightSummary {
  Id?: string;
  Name?: string;
  Severity?: InsightSeverity;
  Status?: InsightStatus;
  InsightTimeRange?: InsightTimeRange;
  ResourceCollection?: ResourceCollection;
  ServiceCollection?: ServiceCollection;
  AssociatedResourceArns?: Array<string>;
}
export type ReactiveOrganizationInsights =
  Array<ReactiveOrganizationInsightSummary>;
export interface ReactiveOrganizationInsightSummary {
  Id?: string;
  AccountId?: string;
  OrganizationalUnitId?: string;
  Name?: string;
  Severity?: InsightSeverity;
  Status?: InsightStatus;
  InsightTimeRange?: InsightTimeRange;
  ResourceCollection?: ResourceCollection;
  ServiceCollection?: ServiceCollection;
}
export interface Recommendation {
  Description?: string;
  Link?: string;
  Name?: string;
  Reason?: string;
  RelatedEvents?: Array<RecommendationRelatedEvent>;
  RelatedAnomalies?: Array<RecommendationRelatedAnomaly>;
  Category?: string;
}
export type RecommendationCategory = string;

export type RecommendationDescription = string;

export type RecommendationLink = string;

export type RecommendationName = string;

export type RecommendationReason = string;

export type RecommendationRelatedAnomalies =
  Array<RecommendationRelatedAnomaly>;
export interface RecommendationRelatedAnomaly {
  Resources?: Array<RecommendationRelatedAnomalyResource>;
  SourceDetails?: Array<RecommendationRelatedAnomalySourceDetail>;
  AnomalyId?: string;
}
export interface RecommendationRelatedAnomalyResource {
  Name?: string;
  Type?: string;
}
export type RecommendationRelatedAnomalyResourceName = string;

export type RecommendationRelatedAnomalyResources =
  Array<RecommendationRelatedAnomalyResource>;
export type RecommendationRelatedAnomalyResourceType = string;

export interface RecommendationRelatedAnomalySourceDetail {
  CloudWatchMetrics?: Array<RecommendationRelatedCloudWatchMetricsSourceDetail>;
}
export interface RecommendationRelatedCloudWatchMetricsSourceDetail {
  MetricName?: string;
  Namespace?: string;
}
export type RecommendationRelatedCloudWatchMetricsSourceDetails =
  Array<RecommendationRelatedCloudWatchMetricsSourceDetail>;
export type RecommendationRelatedCloudWatchMetricsSourceMetricName = string;

export type RecommendationRelatedCloudWatchMetricsSourceNamespace = string;

export interface RecommendationRelatedEvent {
  Name?: string;
  Resources?: Array<RecommendationRelatedEventResource>;
}
export type RecommendationRelatedEventName = string;

export interface RecommendationRelatedEventResource {
  Name?: string;
  Type?: string;
}
export type RecommendationRelatedEventResourceName = string;

export type RecommendationRelatedEventResources =
  Array<RecommendationRelatedEventResource>;
export type RecommendationRelatedEventResourceType = string;

export type RecommendationRelatedEvents = Array<RecommendationRelatedEvent>;
export type Recommendations = Array<Recommendation>;
export type RelatedAnomalySourceDetails =
  Array<RecommendationRelatedAnomalySourceDetail>;
export interface RemoveNotificationChannelRequest {
  Id: string;
}
export interface RemoveNotificationChannelResponse {}
export type ResourceArn = string;

export interface ResourceCollection {
  CloudFormation?: CloudFormationCollection;
  Tags?: Array<TagCollection>;
}
export interface ResourceCollectionFilter {
  CloudFormation?: CloudFormationCollectionFilter;
  Tags?: Array<TagCollectionFilter>;
}
export type ResourceCollectionType =
  | "AWS_CLOUD_FORMATION"
  | "AWS_SERVICE"
  | "AWS_TAGS";
export type ResourceHours = number;

export type ResourceIdString = string;

export type ResourceIdType = string;

export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export type ResourcePermission = "FULL_PERMISSION" | "MISSING_PERMISSION";
export type ResourceType = string;

export type ResourceTypeFilter =
  | "LOG_GROUPS"
  | "CLOUDFRONT_DISTRIBUTION"
  | "DYNAMODB_TABLE"
  | "EC2_NAT_GATEWAY"
  | "ECS_CLUSTER"
  | "ECS_SERVICE"
  | "EKS_CLUSTER"
  | "ELASTIC_BEANSTALK_ENVIRONMENT"
  | "ELASTIC_LOAD_BALANCER_LOAD_BALANCER"
  | "ELASTIC_LOAD_BALANCING_V2_LOAD_BALANCER"
  | "ELASTIC_LOAD_BALANCING_V2_TARGET_GROUP"
  | "ELASTICACHE_CACHE_CLUSTER"
  | "ELASTICSEARCH_DOMAIN"
  | "KINESIS_STREAM"
  | "LAMBDA_FUNCTION"
  | "OPEN_SEARCH_SERVICE_DOMAIN"
  | "RDS_DB_INSTANCE"
  | "RDS_DB_CLUSTER"
  | "REDSHIFT_CLUSTER"
  | "ROUTE53_HOSTED_ZONE"
  | "ROUTE53_HEALTH_CHECK"
  | "S3_BUCKET"
  | "SAGEMAKER_ENDPOINT"
  | "SNS_TOPIC"
  | "SQS_QUEUE"
  | "STEP_FUNCTIONS_ACTIVITY"
  | "STEP_FUNCTIONS_STATE_MACHINE";
export type ResourceTypeFilters = Array<ResourceTypeFilter>;
export type RetryAfterSeconds = number;

export type SearchInsightsAccountIdList = Array<string>;
export interface SearchInsightsFilters {
  Severities?: Array<InsightSeverity>;
  Statuses?: Array<InsightStatus>;
  ResourceCollection?: ResourceCollection;
  ServiceCollection?: ServiceCollection;
}
export type SearchInsightsMaxResults = number;

export interface SearchInsightsRequest {
  StartTimeRange: StartTimeRange;
  Filters?: SearchInsightsFilters;
  MaxResults?: number;
  NextToken?: string;
  Type: InsightType;
}
export interface SearchInsightsResponse {
  ProactiveInsights?: Array<ProactiveInsightSummary>;
  ReactiveInsights?: Array<ReactiveInsightSummary>;
  NextToken?: string;
}
export interface SearchOrganizationInsightsFilters {
  Severities?: Array<InsightSeverity>;
  Statuses?: Array<InsightStatus>;
  ResourceCollection?: ResourceCollection;
  ServiceCollection?: ServiceCollection;
}
export type SearchOrganizationInsightsMaxResults = number;

export interface SearchOrganizationInsightsRequest {
  AccountIds: Array<string>;
  StartTimeRange: StartTimeRange;
  Filters?: SearchOrganizationInsightsFilters;
  MaxResults?: number;
  NextToken?: string;
  Type: InsightType;
}
export interface SearchOrganizationInsightsResponse {
  ProactiveInsights?: Array<ProactiveInsightSummary>;
  ReactiveInsights?: Array<ReactiveInsightSummary>;
  NextToken?: string;
}
export type ServerSideEncryptionType =
  | "CUSTOMER_MANAGED_KEY"
  | "AWS_OWNED_KMS_KEY";
export interface ServiceCollection {
  ServiceNames?: Array<ServiceName>;
}
export interface ServiceHealth {
  ServiceName?: ServiceName;
  Insight?: ServiceInsightHealth;
  AnalyzedResourceCount?: number;
}
export type ServiceHealths = Array<ServiceHealth>;
export interface ServiceInsightHealth {
  OpenProactiveInsights?: number;
  OpenReactiveInsights?: number;
}
export interface ServiceIntegrationConfig {
  OpsCenter?: OpsCenterIntegration;
  LogsAnomalyDetection?: LogsAnomalyDetectionIntegration;
  KMSServerSideEncryption?: KMSServerSideEncryptionIntegration;
}
export type ServiceName =
  | "API_GATEWAY"
  | "APPLICATION_ELB"
  | "AUTO_SCALING_GROUP"
  | "CLOUD_FRONT"
  | "DYNAMO_DB"
  | "EC2"
  | "ECS"
  | "EKS"
  | "ELASTIC_BEANSTALK"
  | "ELASTI_CACHE"
  | "ELB"
  | "ES"
  | "KINESIS"
  | "LAMBDA"
  | "NAT_GATEWAY"
  | "NETWORK_ELB"
  | "RDS"
  | "REDSHIFT"
  | "ROUTE_53"
  | "S3"
  | "SAGE_MAKER"
  | "SNS"
  | "SQS"
  | "STEP_FUNCTIONS"
  | "SWF";
export type ServiceNames = Array<ServiceName>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ServiceResourceCost {
  Type?: string;
  State?: CostEstimationServiceResourceState;
  Count?: number;
  UnitCost?: number;
  Cost?: number;
}
export type ServiceResourceCosts = Array<ServiceResourceCost>;
export interface SnsChannelConfig {
  TopicArn?: string;
}
export type SsmOpsItemId = string;

export type StackName = string;

export type StackNames = Array<string>;
export interface StartCostEstimationRequest {
  ResourceCollection: CostEstimationResourceCollectionFilter;
  ClientToken?: string;
}
export interface StartCostEstimationResponse {}
export interface StartTimeRange {
  FromTime?: Date | string;
  ToTime?: Date | string;
}
export interface TagCollection {
  AppBoundaryKey: string;
  TagValues: Array<string>;
}
export interface TagCollectionFilter {
  AppBoundaryKey: string;
  TagValues: Array<string>;
}
export type TagCollectionFilters = Array<TagCollectionFilter>;
export type TagCollections = Array<TagCollection>;
export interface TagCostEstimationResourceCollectionFilter {
  AppBoundaryKey: string;
  TagValues: Array<string>;
}
export type TagCostEstimationResourceCollectionFilters =
  Array<TagCostEstimationResourceCollectionFilter>;
export interface TagHealth {
  AppBoundaryKey?: string;
  TagValue?: string;
  Insight?: InsightHealth;
  AnalyzedResourceCount?: number;
}
export type TagHealths = Array<TagHealth>;
export type TagValue = string;

export type TagValues = Array<string>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly QuotaCode?: string;
  readonly ServiceCode?: string;
  readonly RetryAfterSeconds?: number;
}> {}
export type Timestamp = Date | string;

export interface TimestampMetricValuePair {
  Timestamp?: Date | string;
  MetricValue?: number;
}
export type TimestampMetricValuePairList = Array<TimestampMetricValuePair>;
export type TopicArn = string;

export interface UpdateCloudFormationCollectionFilter {
  StackNames?: Array<string>;
}
export interface UpdateEventSourcesConfigRequest {
  EventSources?: EventSourcesConfig;
}
export interface UpdateEventSourcesConfigResponse {}
export type UpdateResourceCollectionAction = "ADD" | "REMOVE";
export interface UpdateResourceCollectionFilter {
  CloudFormation?: UpdateCloudFormationCollectionFilter;
  Tags?: Array<UpdateTagCollectionFilter>;
}
export interface UpdateResourceCollectionRequest {
  Action: UpdateResourceCollectionAction;
  ResourceCollection: UpdateResourceCollectionFilter;
}
export interface UpdateResourceCollectionResponse {}
export interface UpdateServiceIntegrationConfig {
  OpsCenter?: OpsCenterIntegrationConfig;
  LogsAnomalyDetection?: LogsAnomalyDetectionIntegrationConfig;
  KMSServerSideEncryption?: KMSServerSideEncryptionIntegrationConfig;
}
export interface UpdateServiceIntegrationRequest {
  ServiceIntegration: UpdateServiceIntegrationConfig;
}
export interface UpdateServiceIntegrationResponse {}
export type UpdateStackNames = Array<string>;
export interface UpdateTagCollectionFilter {
  AppBoundaryKey: string;
  TagValues: Array<string>;
}
export type UpdateTagCollectionFilters = Array<UpdateTagCollectionFilter>;
export type UpdateTagValues = Array<string>;
export type UuidNextToken = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason?: ValidationExceptionReason;
  readonly Fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFields = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER"
  | "INVALID_PARAMETER_COMBINATION"
  | "PARAMETER_INCONSISTENT_WITH_SERVICE_STATE";
export declare namespace AddNotificationChannel {
  export type Input = AddNotificationChannelRequest;
  export type Output = AddNotificationChannelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInsight {
  export type Input = DeleteInsightRequest;
  export type Output = DeleteInsightResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAccountHealth {
  export type Input = DescribeAccountHealthRequest;
  export type Output = DescribeAccountHealthResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAccountOverview {
  export type Input = DescribeAccountOverviewRequest;
  export type Output = DescribeAccountOverviewResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAnomaly {
  export type Input = DescribeAnomalyRequest;
  export type Output = DescribeAnomalyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeEventSourcesConfig {
  export type Input = DescribeEventSourcesConfigRequest;
  export type Output = DescribeEventSourcesConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeFeedback {
  export type Input = DescribeFeedbackRequest;
  export type Output = DescribeFeedbackResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeInsight {
  export type Input = DescribeInsightRequest;
  export type Output = DescribeInsightResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationHealth {
  export type Input = DescribeOrganizationHealthRequest;
  export type Output = DescribeOrganizationHealthResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationOverview {
  export type Input = DescribeOrganizationOverviewRequest;
  export type Output = DescribeOrganizationOverviewResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationResourceCollectionHealth {
  export type Input = DescribeOrganizationResourceCollectionHealthRequest;
  export type Output = DescribeOrganizationResourceCollectionHealthResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeResourceCollectionHealth {
  export type Input = DescribeResourceCollectionHealthRequest;
  export type Output = DescribeResourceCollectionHealthResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeServiceIntegration {
  export type Input = DescribeServiceIntegrationRequest;
  export type Output = DescribeServiceIntegrationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCostEstimation {
  export type Input = GetCostEstimationRequest;
  export type Output = GetCostEstimationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourceCollection {
  export type Input = GetResourceCollectionRequest;
  export type Output = GetResourceCollectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAnomaliesForInsight {
  export type Input = ListAnomaliesForInsightRequest;
  export type Output = ListAnomaliesForInsightResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAnomalousLogGroups {
  export type Input = ListAnomalousLogGroupsRequest;
  export type Output = ListAnomalousLogGroupsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEvents {
  export type Input = ListEventsRequest;
  export type Output = ListEventsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInsights {
  export type Input = ListInsightsRequest;
  export type Output = ListInsightsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMonitoredResources {
  export type Input = ListMonitoredResourcesRequest;
  export type Output = ListMonitoredResourcesResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNotificationChannels {
  export type Input = ListNotificationChannelsRequest;
  export type Output = ListNotificationChannelsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOrganizationInsights {
  export type Input = ListOrganizationInsightsRequest;
  export type Output = ListOrganizationInsightsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRecommendations {
  export type Input = ListRecommendationsRequest;
  export type Output = ListRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutFeedback {
  export type Input = PutFeedbackRequest;
  export type Output = PutFeedbackResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemoveNotificationChannel {
  export type Input = RemoveNotificationChannelRequest;
  export type Output = RemoveNotificationChannelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchInsights {
  export type Input = SearchInsightsRequest;
  export type Output = SearchInsightsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchOrganizationInsights {
  export type Input = SearchOrganizationInsightsRequest;
  export type Output = SearchOrganizationInsightsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartCostEstimation {
  export type Input = StartCostEstimationRequest;
  export type Output = StartCostEstimationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEventSourcesConfig {
  export type Input = UpdateEventSourcesConfigRequest;
  export type Output = UpdateEventSourcesConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResourceCollection {
  export type Input = UpdateResourceCollectionRequest;
  export type Output = UpdateResourceCollectionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateServiceIntegration {
  export type Input = UpdateServiceIntegrationRequest;
  export type Output = UpdateServiceIntegrationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

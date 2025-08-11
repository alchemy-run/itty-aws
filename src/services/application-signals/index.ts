import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ApplicationSignals extends AWSServiceClient {
  batchGetServiceLevelObjectiveBudgetReport(
    input: BatchGetServiceLevelObjectiveBudgetReportInput,
  ): Effect.Effect<
    BatchGetServiceLevelObjectiveBudgetReportOutput,
    ThrottlingException | ValidationException | CommonAwsError
  >;
  batchUpdateExclusionWindows(
    input: BatchUpdateExclusionWindowsInput,
  ): Effect.Effect<
    BatchUpdateExclusionWindowsOutput,
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getService(
    input: GetServiceInput,
  ): Effect.Effect<
    GetServiceOutput,
    ThrottlingException | ValidationException | CommonAwsError
  >;
  listServiceDependencies(
    input: ListServiceDependenciesInput,
  ): Effect.Effect<
    ListServiceDependenciesOutput,
    ThrottlingException | ValidationException | CommonAwsError
  >;
  listServiceDependents(
    input: ListServiceDependentsInput,
  ): Effect.Effect<
    ListServiceDependentsOutput,
    ThrottlingException | ValidationException | CommonAwsError
  >;
  listServiceLevelObjectiveExclusionWindows(
    input: ListServiceLevelObjectiveExclusionWindowsInput,
  ): Effect.Effect<
    ListServiceLevelObjectiveExclusionWindowsOutput,
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listServiceOperations(
    input: ListServiceOperationsInput,
  ): Effect.Effect<
    ListServiceOperationsOutput,
    ThrottlingException | ValidationException | CommonAwsError
  >;
  listServices(
    input: ListServicesInput,
  ): Effect.Effect<
    ListServicesOutput,
    ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  startDiscovery(
    input: StartDiscoveryInput,
  ): Effect.Effect<
    StartDiscoveryOutput,
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccountId = string;

export type AmazonResourceName = string;

export type Attainment = number;

export type AttainmentGoal = number;

export type AttributeMap = Record<string, string>;
export type AttributeMaps = Array<Record<string, string>>;
export type Attributes = Record<string, string>;
export type AwsAccountId = string;

export interface BatchGetServiceLevelObjectiveBudgetReportInput {
  Timestamp: Date | string;
  SloIds: Array<string>;
}
export interface BatchGetServiceLevelObjectiveBudgetReportOutput {
  Timestamp: Date | string;
  Reports: Array<ServiceLevelObjectiveBudgetReport>;
  Errors: Array<ServiceLevelObjectiveBudgetReportError>;
}
export interface BatchUpdateExclusionWindowsError {
  SloId: string;
  ErrorCode: string;
  ErrorMessage: string;
}
export type BatchUpdateExclusionWindowsErrors =
  Array<BatchUpdateExclusionWindowsError>;
export interface BatchUpdateExclusionWindowsInput {
  SloIds: Array<string>;
  AddExclusionWindows?: Array<ExclusionWindow>;
  RemoveExclusionWindows?: Array<ExclusionWindow>;
}
export interface BatchUpdateExclusionWindowsOutput {
  SloIds: Array<string>;
  Errors: Array<BatchUpdateExclusionWindowsError>;
}
export type BudgetRequestsRemaining = number;

export type BudgetSecondsRemaining = number;

export interface BurnRateConfiguration {
  LookBackWindowMinutes: number;
}
export type BurnRateConfigurations = Array<BurnRateConfiguration>;
export type BurnRateLookBackWindowMinutes = number;

export interface CalendarInterval {
  StartTime: Date | string;
  DurationUnit: DurationUnit;
  Duration: number;
}
export type CalendarIntervalDuration = number;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
}> {}
export interface CreateServiceLevelObjectiveInput {
  Name: string;
  Description?: string;
  SliConfig?: ServiceLevelIndicatorConfig;
  RequestBasedSliConfig?: RequestBasedServiceLevelIndicatorConfig;
  Goal?: Goal;
  Tags?: Array<Tag>;
  BurnRateConfigurations?: Array<BurnRateConfiguration>;
}
export interface CreateServiceLevelObjectiveOutput {
  Slo: ServiceLevelObjective;
}
export interface DeleteServiceLevelObjectiveInput {
  Id: string;
}
export interface DeleteServiceLevelObjectiveOutput {}
export interface DependencyConfig {
  DependencyKeyAttributes: Record<string, string>;
  DependencyOperationName: string;
}
export interface Dimension {
  Name: string;
  Value: string;
}
export type DimensionName = string;

export type Dimensions = Array<Dimension>;
export type DimensionValue = string;

export type DurationUnit = "MINUTE" | "HOUR" | "DAY" | "MONTH";
export type EvaluationType = "PERIOD_BASED" | "REQUEST_BASED";
export type ExclusionDuration = number;

export type ExclusionReason = string;

export interface ExclusionWindow {
  Window: Window;
  StartTime?: Date | string;
  RecurrenceRule?: RecurrenceRule;
  Reason?: string;
}
export type ExclusionWindowErrorCode = string;

export type ExclusionWindowErrorMessage = string;

export type ExclusionWindows = Array<ExclusionWindow>;
export type Expression = string;

export type FaultDescription = string;

export interface GetServiceInput {
  StartTime: Date | string;
  EndTime: Date | string;
  KeyAttributes: Record<string, string>;
}
export interface GetServiceLevelObjectiveInput {
  Id: string;
}
export interface GetServiceLevelObjectiveOutput {
  Slo: ServiceLevelObjective;
}
export interface GetServiceOutput {
  Service: Service;
  StartTime: Date | string;
  EndTime: Date | string;
  LogGroupReferences?: Array<Record<string, string>>;
}
export interface Goal {
  Interval?: Interval;
  AttainmentGoal?: number;
  WarningThreshold?: number;
}
interface _Interval {
  RollingInterval?: RollingInterval;
  CalendarInterval?: CalendarInterval;
}

export type Interval =
  | (_Interval & { RollingInterval: RollingInterval })
  | (_Interval & { CalendarInterval: CalendarInterval });
export type KeyAttributeName = string;

export type KeyAttributeValue = string;

export interface ListServiceDependenciesInput {
  StartTime: Date | string;
  EndTime: Date | string;
  KeyAttributes: Record<string, string>;
  MaxResults?: number;
  NextToken?: string;
}
export type ListServiceDependenciesMaxResults = number;

export interface ListServiceDependenciesOutput {
  StartTime: Date | string;
  EndTime: Date | string;
  ServiceDependencies: Array<ServiceDependency>;
  NextToken?: string;
}
export interface ListServiceDependentsInput {
  StartTime: Date | string;
  EndTime: Date | string;
  KeyAttributes: Record<string, string>;
  MaxResults?: number;
  NextToken?: string;
}
export type ListServiceDependentsMaxResults = number;

export interface ListServiceDependentsOutput {
  StartTime: Date | string;
  EndTime: Date | string;
  ServiceDependents: Array<ServiceDependent>;
  NextToken?: string;
}
export interface ListServiceLevelObjectiveExclusionWindowsInput {
  Id: string;
  MaxResults?: number;
  NextToken?: string;
}
export type ListServiceLevelObjectiveExclusionWindowsMaxResults = number;

export interface ListServiceLevelObjectiveExclusionWindowsOutput {
  ExclusionWindows: Array<ExclusionWindow>;
  NextToken?: string;
}
export interface ListServiceLevelObjectivesInput {
  KeyAttributes?: Record<string, string>;
  OperationName?: string;
  DependencyConfig?: DependencyConfig;
  MaxResults?: number;
  NextToken?: string;
  MetricSourceTypes?: Array<MetricSourceType>;
  IncludeLinkedAccounts?: boolean;
  SloOwnerAwsAccountId?: string;
}
export type ListServiceLevelObjectivesMaxResults = number;

export interface ListServiceLevelObjectivesOutput {
  SloSummaries?: Array<ServiceLevelObjectiveSummary>;
  NextToken?: string;
}
export type ListServiceOperationMaxResults = number;

export interface ListServiceOperationsInput {
  StartTime: Date | string;
  EndTime: Date | string;
  KeyAttributes: Record<string, string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListServiceOperationsOutput {
  StartTime: Date | string;
  EndTime: Date | string;
  ServiceOperations: Array<ServiceOperation>;
  NextToken?: string;
}
export interface ListServicesInput {
  StartTime: Date | string;
  EndTime: Date | string;
  MaxResults?: number;
  NextToken?: string;
  IncludeLinkedAccounts?: boolean;
  AwsAccountId?: string;
}
export type ListServicesMaxResults = number;

export interface ListServicesOutput {
  StartTime: Date | string;
  EndTime: Date | string;
  ServiceSummaries: Array<ServiceSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type LogGroupReferences = Array<Record<string, string>>;
export interface Metric {
  Namespace?: string;
  MetricName?: string;
  Dimensions?: Array<Dimension>;
}
export type MetricDataQueries = Array<MetricDataQuery>;
export interface MetricDataQuery {
  Id: string;
  MetricStat?: MetricStat;
  Expression?: string;
  Label?: string;
  ReturnData?: boolean;
  Period?: number;
  AccountId?: string;
}
export type MetricExpression = string;

export type MetricId = string;

export type MetricLabel = string;

export type MetricName = string;

export interface MetricReference {
  Namespace: string;
  MetricType: string;
  Dimensions?: Array<Dimension>;
  MetricName: string;
  AccountId?: string;
}
export type MetricReferences = Array<MetricReference>;
export type MetricSourceType =
  | "SERVICE_OPERATION"
  | "CLOUDWATCH_METRIC"
  | "SERVICE_DEPENDENCY";
export type MetricSourceTypes = Array<MetricSourceType>;
export interface MetricStat {
  Metric: Metric;
  Period: number;
  Stat: string;
  Unit?: StandardUnit;
}
export type MetricType = string;

interface _MonitoredRequestCountMetricDataQueries {
  GoodCountMetric?: Array<MetricDataQuery>;
  BadCountMetric?: Array<MetricDataQuery>;
}

export type MonitoredRequestCountMetricDataQueries =
  | (_MonitoredRequestCountMetricDataQueries & {
      GoodCountMetric: Array<MetricDataQuery>;
    })
  | (_MonitoredRequestCountMetricDataQueries & {
      BadCountMetric: Array<MetricDataQuery>;
    });
export type Namespace = string;

export type NextToken = string;

export type OperationName = string;

export type Period = number;

export interface RecurrenceRule {
  Expression: string;
}
export interface RequestBasedServiceLevelIndicator {
  RequestBasedSliMetric: RequestBasedServiceLevelIndicatorMetric;
  MetricThreshold?: number;
  ComparisonOperator?: ServiceLevelIndicatorComparisonOperator;
}
export interface RequestBasedServiceLevelIndicatorConfig {
  RequestBasedSliMetricConfig: RequestBasedServiceLevelIndicatorMetricConfig;
  MetricThreshold?: number;
  ComparisonOperator?: ServiceLevelIndicatorComparisonOperator;
}
export interface RequestBasedServiceLevelIndicatorMetric {
  KeyAttributes?: Record<string, string>;
  OperationName?: string;
  MetricType?: ServiceLevelIndicatorMetricType;
  TotalRequestCountMetric: Array<MetricDataQuery>;
  MonitoredRequestCountMetric: MonitoredRequestCountMetricDataQueries;
  DependencyConfig?: DependencyConfig;
}
export interface RequestBasedServiceLevelIndicatorMetricConfig {
  KeyAttributes?: Record<string, string>;
  OperationName?: string;
  MetricType?: ServiceLevelIndicatorMetricType;
  TotalRequestCountMetric?: Array<MetricDataQuery>;
  MonitoredRequestCountMetric?: MonitoredRequestCountMetricDataQueries;
  DependencyConfig?: DependencyConfig;
}
export type ResourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly ResourceType: string;
  readonly ResourceId: string;
  readonly Message: string;
}> {}
export type ResourceType = string;

export type ReturnData = boolean;

export interface RollingInterval {
  DurationUnit: DurationUnit;
  Duration: number;
}
export type RollingIntervalDuration = number;

export interface Service {
  KeyAttributes: Record<string, string>;
  AttributeMaps?: Array<Record<string, string>>;
  MetricReferences: Array<MetricReference>;
  LogGroupReferences?: Array<Record<string, string>>;
}
export type ServiceDependencies = Array<ServiceDependency>;
export interface ServiceDependency {
  OperationName: string;
  DependencyKeyAttributes: Record<string, string>;
  DependencyOperationName: string;
  MetricReferences: Array<MetricReference>;
}
export interface ServiceDependent {
  OperationName?: string;
  DependentKeyAttributes: Record<string, string>;
  DependentOperationName?: string;
  MetricReferences: Array<MetricReference>;
}
export type ServiceDependents = Array<ServiceDependent>;
export type ServiceErrorMessage = string;

export interface ServiceLevelIndicator {
  SliMetric: ServiceLevelIndicatorMetric;
  MetricThreshold: number;
  ComparisonOperator: ServiceLevelIndicatorComparisonOperator;
}
export type ServiceLevelIndicatorComparisonOperator =
  | "GREATER_THAN_OR_EQUAL_TO"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "LESS_THAN_OR_EQUAL_TO";
export interface ServiceLevelIndicatorConfig {
  SliMetricConfig: ServiceLevelIndicatorMetricConfig;
  MetricThreshold: number;
  ComparisonOperator: ServiceLevelIndicatorComparisonOperator;
}
export interface ServiceLevelIndicatorMetric {
  KeyAttributes?: Record<string, string>;
  OperationName?: string;
  MetricType?: ServiceLevelIndicatorMetricType;
  MetricDataQueries: Array<MetricDataQuery>;
  DependencyConfig?: DependencyConfig;
}
export interface ServiceLevelIndicatorMetricConfig {
  KeyAttributes?: Record<string, string>;
  OperationName?: string;
  MetricType?: ServiceLevelIndicatorMetricType;
  Statistic?: string;
  PeriodSeconds?: number;
  MetricDataQueries?: Array<MetricDataQuery>;
  DependencyConfig?: DependencyConfig;
}
export type ServiceLevelIndicatorMetricThreshold = number;

export type ServiceLevelIndicatorMetricType = "LATENCY" | "AVAILABILITY";
export type ServiceLevelIndicatorStatistic = string;

export interface ServiceLevelObjective {
  Arn: string;
  Name: string;
  Description?: string;
  CreatedTime: Date | string;
  LastUpdatedTime: Date | string;
  Sli?: ServiceLevelIndicator;
  RequestBasedSli?: RequestBasedServiceLevelIndicator;
  EvaluationType?: EvaluationType;
  Goal: Goal;
  BurnRateConfigurations?: Array<BurnRateConfiguration>;
  MetricSourceType?: MetricSourceType;
}
export type ServiceLevelObjectiveArn = string;

export interface ServiceLevelObjectiveBudgetReport {
  Arn: string;
  Name: string;
  EvaluationType?: EvaluationType;
  BudgetStatus: ServiceLevelObjectiveBudgetStatus;
  Attainment?: number;
  TotalBudgetSeconds?: number;
  BudgetSecondsRemaining?: number;
  TotalBudgetRequests?: number;
  BudgetRequestsRemaining?: number;
  Sli?: ServiceLevelIndicator;
  RequestBasedSli?: RequestBasedServiceLevelIndicator;
  Goal?: Goal;
}
export interface ServiceLevelObjectiveBudgetReportError {
  Name: string;
  Arn: string;
  ErrorCode: string;
  ErrorMessage: string;
}
export type ServiceLevelObjectiveBudgetReportErrorCode = string;

export type ServiceLevelObjectiveBudgetReportErrorMessage = string;

export type ServiceLevelObjectiveBudgetReportErrors =
  Array<ServiceLevelObjectiveBudgetReportError>;
export type ServiceLevelObjectiveBudgetReports =
  Array<ServiceLevelObjectiveBudgetReport>;
export type ServiceLevelObjectiveBudgetStatus =
  | "OK"
  | "WARNING"
  | "BREACHED"
  | "INSUFFICIENT_DATA";
export type ServiceLevelObjectiveDescription = string;

export type ServiceLevelObjectiveId = string;

export type ServiceLevelObjectiveIds = Array<string>;
export type ServiceLevelObjectiveName = string;

export type ServiceLevelObjectiveSummaries =
  Array<ServiceLevelObjectiveSummary>;
export interface ServiceLevelObjectiveSummary {
  Arn: string;
  Name: string;
  KeyAttributes?: Record<string, string>;
  OperationName?: string;
  DependencyConfig?: DependencyConfig;
  CreatedTime?: Date | string;
  EvaluationType?: EvaluationType;
  MetricSourceType?: MetricSourceType;
}
export interface ServiceOperation {
  Name: string;
  MetricReferences: Array<MetricReference>;
}
export type ServiceOperations = Array<ServiceOperation>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
}> {}
export type ServiceSummaries = Array<ServiceSummary>;
export interface ServiceSummary {
  KeyAttributes: Record<string, string>;
  AttributeMaps?: Array<Record<string, string>>;
  MetricReferences: Array<MetricReference>;
}
export type SLIPeriodSeconds = number;

export type StandardUnit =
  | "MICROSECONDS"
  | "MILLISECONDS"
  | "SECONDS"
  | "BYTES"
  | "KILOBYTES"
  | "MEGABYTES"
  | "GIGABYTES"
  | "TERABYTES"
  | "BITS"
  | "KILOBITS"
  | "MEGABITS"
  | "GIGABITS"
  | "TERABITS"
  | "PERCENT"
  | "COUNT"
  | "BYTES_SECOND"
  | "KILOBYTES_SECOND"
  | "MEGABYTES_SECOND"
  | "GIGABYTES_SECOND"
  | "TERABYTES_SECOND"
  | "BITS_SECOND"
  | "KILOBITS_SECOND"
  | "MEGABITS_SECOND"
  | "GIGABITS_SECOND"
  | "TERABITS_SECOND"
  | "COUNT_SECOND"
  | "NONE";
export interface StartDiscoveryInput {}
export interface StartDiscoveryOutput {}
export type Stat = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export type TotalBudgetRequests = number;

export type TotalBudgetSeconds = number;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateServiceLevelObjectiveInput {
  Id: string;
  Description?: string;
  SliConfig?: ServiceLevelIndicatorConfig;
  RequestBasedSliConfig?: RequestBasedServiceLevelIndicatorConfig;
  Goal?: Goal;
  BurnRateConfigurations?: Array<BurnRateConfiguration>;
}
export interface UpdateServiceLevelObjectiveOutput {
  Slo: ServiceLevelObjective;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type ValidationExceptionMessage = string;

export type WarningThreshold = number;

export interface Window {
  DurationUnit: DurationUnit;
  Duration: number;
}
export declare namespace BatchGetServiceLevelObjectiveBudgetReport {
  export type Input = BatchGetServiceLevelObjectiveBudgetReportInput;
  export type Output = BatchGetServiceLevelObjectiveBudgetReportOutput;
  export type Error =
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchUpdateExclusionWindows {
  export type Input = BatchUpdateExclusionWindowsInput;
  export type Output = BatchUpdateExclusionWindowsOutput;
  export type Error =
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetService {
  export type Input = GetServiceInput;
  export type Output = GetServiceOutput;
  export type Error =
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServiceDependencies {
  export type Input = ListServiceDependenciesInput;
  export type Output = ListServiceDependenciesOutput;
  export type Error =
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServiceDependents {
  export type Input = ListServiceDependentsInput;
  export type Output = ListServiceDependentsOutput;
  export type Error =
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServiceLevelObjectiveExclusionWindows {
  export type Input = ListServiceLevelObjectiveExclusionWindowsInput;
  export type Output = ListServiceLevelObjectiveExclusionWindowsOutput;
  export type Error =
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServiceOperations {
  export type Input = ListServiceOperationsInput;
  export type Output = ListServiceOperationsOutput;
  export type Error =
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServices {
  export type Input = ListServicesInput;
  export type Output = ListServicesOutput;
  export type Error =
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartDiscovery {
  export type Input = StartDiscoveryInput;
  export type Output = StartDiscoveryOutput;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

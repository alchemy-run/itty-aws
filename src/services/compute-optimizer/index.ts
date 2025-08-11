import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ComputeOptimizer extends AWSServiceClient {
  deleteRecommendationPreferences(
    input: DeleteRecommendationPreferencesRequest,
  ): Effect.Effect<
    DeleteRecommendationPreferencesResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeRecommendationExportJobs(
    input: DescribeRecommendationExportJobsRequest,
  ): Effect.Effect<
    DescribeRecommendationExportJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  exportAutoScalingGroupRecommendations(
    input: ExportAutoScalingGroupRecommendationsRequest,
  ): Effect.Effect<
    ExportAutoScalingGroupRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  exportEBSVolumeRecommendations(
    input: ExportEBSVolumeRecommendationsRequest,
  ): Effect.Effect<
    ExportEBSVolumeRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  exportEC2InstanceRecommendations(
    input: ExportEC2InstanceRecommendationsRequest,
  ): Effect.Effect<
    ExportEC2InstanceRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  exportECSServiceRecommendations(
    input: ExportECSServiceRecommendationsRequest,
  ): Effect.Effect<
    ExportECSServiceRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  exportIdleRecommendations(
    input: ExportIdleRecommendationsRequest,
  ): Effect.Effect<
    ExportIdleRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  exportLambdaFunctionRecommendations(
    input: ExportLambdaFunctionRecommendationsRequest,
  ): Effect.Effect<
    ExportLambdaFunctionRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  exportLicenseRecommendations(
    input: ExportLicenseRecommendationsRequest,
  ): Effect.Effect<
    ExportLicenseRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  exportRDSDatabaseRecommendations(
    input: ExportRDSDatabaseRecommendationsRequest,
  ): Effect.Effect<
    ExportRDSDatabaseRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getAutoScalingGroupRecommendations(
    input: GetAutoScalingGroupRecommendationsRequest,
  ): Effect.Effect<
    GetAutoScalingGroupRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getEBSVolumeRecommendations(
    input: GetEBSVolumeRecommendationsRequest,
  ): Effect.Effect<
    GetEBSVolumeRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getEC2InstanceRecommendations(
    input: GetEC2InstanceRecommendationsRequest,
  ): Effect.Effect<
    GetEC2InstanceRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getEC2RecommendationProjectedMetrics(
    input: GetEC2RecommendationProjectedMetricsRequest,
  ): Effect.Effect<
    GetEC2RecommendationProjectedMetricsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getECSServiceRecommendationProjectedMetrics(
    input: GetECSServiceRecommendationProjectedMetricsRequest,
  ): Effect.Effect<
    GetECSServiceRecommendationProjectedMetricsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getECSServiceRecommendations(
    input: GetECSServiceRecommendationsRequest,
  ): Effect.Effect<
    GetECSServiceRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getEffectiveRecommendationPreferences(
    input: GetEffectiveRecommendationPreferencesRequest,
  ): Effect.Effect<
    GetEffectiveRecommendationPreferencesResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getEnrollmentStatus(
    input: GetEnrollmentStatusRequest,
  ): Effect.Effect<
    GetEnrollmentStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getEnrollmentStatusesForOrganization(
    input: GetEnrollmentStatusesForOrganizationRequest,
  ): Effect.Effect<
    GetEnrollmentStatusesForOrganizationResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getIdleRecommendations(
    input: GetIdleRecommendationsRequest,
  ): Effect.Effect<
    GetIdleRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getLambdaFunctionRecommendations(
    input: GetLambdaFunctionRecommendationsRequest,
  ): Effect.Effect<
    GetLambdaFunctionRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getLicenseRecommendations(
    input: GetLicenseRecommendationsRequest,
  ): Effect.Effect<
    GetLicenseRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getRDSDatabaseRecommendationProjectedMetrics(
    input: GetRDSDatabaseRecommendationProjectedMetricsRequest,
  ): Effect.Effect<
    GetRDSDatabaseRecommendationProjectedMetricsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getRDSDatabaseRecommendations(
    input: GetRDSDatabaseRecommendationsRequest,
  ): Effect.Effect<
    GetRDSDatabaseRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getRecommendationPreferences(
    input: GetRecommendationPreferencesRequest,
  ): Effect.Effect<
    GetRecommendationPreferencesResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getRecommendationSummaries(
    input: GetRecommendationSummariesRequest,
  ): Effect.Effect<
    GetRecommendationSummariesResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  putRecommendationPreferences(
    input: PutRecommendationPreferencesRequest,
  ): Effect.Effect<
    PutRecommendationPreferencesResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateEnrollmentStatus(
    input: UpdateEnrollmentStatusRequest,
  ): Effect.Effect<
    UpdateEnrollmentStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AccountEnrollmentStatus {
  accountId?: string;
  status?: Status;
  statusReason?: string;
  lastUpdatedTimestamp?: Date | string;
}
export type AccountEnrollmentStatuses = Array<AccountEnrollmentStatus>;
export type AccountId = string;

export type AccountIds = Array<string>;
export type AllocatedStorage = number;

export type AllocationStrategy = "PRIORITIZED" | "LOWEST_PRICE";
export type AsgType = "SINGLE_INSTANCE_TYPE" | "MIXED_INSTANCE_TYPE";
export type AutoScalingConfiguration =
  | "TARGET_TRACKING_SCALING_CPU"
  | "TARGET_TRACKING_SCALING_MEMORY";
export type AutoScalingGroupArn = string;

export type AutoScalingGroupArns = Array<string>;
export interface AutoScalingGroupConfiguration {
  desiredCapacity?: number;
  minSize?: number;
  maxSize?: number;
  instanceType?: string;
  allocationStrategy?: AllocationStrategy;
  estimatedInstanceHourReductionPercentage?: number;
  type?: AsgType;
  mixedInstanceTypes?: Array<string>;
}
export interface AutoScalingGroupEstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export type AutoScalingGroupName = string;

export interface AutoScalingGroupRecommendation {
  accountId?: string;
  autoScalingGroupArn?: string;
  autoScalingGroupName?: string;
  finding?: Finding;
  utilizationMetrics?: Array<UtilizationMetric>;
  lookBackPeriodInDays?: number;
  currentConfiguration?: AutoScalingGroupConfiguration;
  currentInstanceGpuInfo?: GpuInfo;
  recommendationOptions?: Array<AutoScalingGroupRecommendationOption>;
  lastRefreshTimestamp?: Date | string;
  currentPerformanceRisk?: CurrentPerformanceRisk;
  effectiveRecommendationPreferences?: EffectiveRecommendationPreferences;
  inferredWorkloadTypes?: Array<InferredWorkloadType>;
}
export interface AutoScalingGroupRecommendationOption {
  configuration?: AutoScalingGroupConfiguration;
  instanceGpuInfo?: GpuInfo;
  projectedUtilizationMetrics?: Array<UtilizationMetric>;
  performanceRisk?: number;
  rank?: number;
  savingsOpportunity?: SavingsOpportunity;
  savingsOpportunityAfterDiscounts?: AutoScalingGroupSavingsOpportunityAfterDiscounts;
  migrationEffort?: MigrationEffort;
}
export type AutoScalingGroupRecommendationOptions =
  Array<AutoScalingGroupRecommendationOption>;
export type AutoScalingGroupRecommendations =
  Array<AutoScalingGroupRecommendation>;
export interface AutoScalingGroupSavingsOpportunityAfterDiscounts {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: AutoScalingGroupEstimatedMonthlySavings;
}
export type Code = string;

export interface ContainerConfiguration {
  containerName?: string;
  memorySizeConfiguration?: MemorySizeConfiguration;
  cpu?: number;
}
export type ContainerConfigurations = Array<ContainerConfiguration>;
export type ContainerName = string;

export interface ContainerRecommendation {
  containerName?: string;
  memorySizeConfiguration?: MemorySizeConfiguration;
  cpu?: number;
}
export type ContainerRecommendations = Array<ContainerRecommendation>;
export type CpuSize = number;

export type CpuVendorArchitecture = "AWS_ARM64" | "CURRENT";
export type CpuVendorArchitectures = Array<CpuVendorArchitecture>;
export type CreationTimestamp = Date | string;

export type Currency = "USD" | "CNY";
export type CurrentDBInstanceClass = string;

export type CurrentInstanceType = string;

export type CurrentPerformanceRisk = "VERY_LOW" | "LOW" | "MEDIUM" | "HIGH";
export interface CurrentPerformanceRiskRatings {
  high?: number;
  medium?: number;
  low?: number;
  veryLow?: number;
}
export type CustomizableMetricHeadroom =
  | "PERCENT_30"
  | "PERCENT_20"
  | "PERCENT_10"
  | "PERCENT_0";
export type CustomizableMetricName = "CPU_UTILIZATION" | "MEMORY_UTILIZATION";
export interface CustomizableMetricParameters {
  threshold?: CustomizableMetricThreshold;
  headroom?: CustomizableMetricHeadroom;
}
export type CustomizableMetricThreshold = "P90" | "P95" | "P99_5";
export type DBClusterIdentifier = string;

export type DBInstanceClass = string;

export interface DBStorageConfiguration {
  storageType?: string;
  allocatedStorage?: number;
  iops?: number;
  maxAllocatedStorage?: number;
  storageThroughput?: number;
}
export interface DeleteRecommendationPreferencesRequest {
  resourceType: ResourceType;
  scope?: Scope;
  recommendationPreferenceNames: Array<RecommendationPreferenceName>;
}
export interface DeleteRecommendationPreferencesResponse {}
export interface DescribeRecommendationExportJobsRequest {
  jobIds?: Array<string>;
  filters?: Array<JobFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeRecommendationExportJobsResponse {
  recommendationExportJobs?: Array<RecommendationExportJob>;
  nextToken?: string;
}
export type DesiredCapacity = number;

export type DestinationBucket = string;

export type DestinationKey = string;

export type DestinationKeyPrefix = string;

export type Dimension = "SAVINGS_VALUE" | "SAVINGS_VALUE_AFTER_DISCOUNT";
export interface EBSEffectiveRecommendationPreferences {
  savingsEstimationMode?: EBSSavingsEstimationMode;
}
export interface EBSEstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export interface EBSFilter {
  name?: EBSFilterName;
  values?: Array<string>;
}
export type EBSFilterName = "FINDING";
export type EBSFilters = Array<EBSFilter>;
export type EBSFinding = "OPTIMIZED" | "NOT_OPTIMIZED";
export type EBSMetricName =
  | "VOLUME_READ_OPS_PER_SECOND"
  | "VOLUME_WRITE_OPS_PER_SECOND"
  | "VOLUME_READ_BYTES_PER_SECOND"
  | "VOLUME_WRITE_BYTES_PER_SECOND";
export interface EBSSavingsEstimationMode {
  source?: EBSSavingsEstimationModeSource;
}
export type EBSSavingsEstimationModeSource =
  | "PUBLIC_PRICING"
  | "COST_EXPLORER_RIGHTSIZING"
  | "COST_OPTIMIZATION_HUB";
export interface EBSSavingsOpportunityAfterDiscounts {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: EBSEstimatedMonthlySavings;
}
export interface EBSUtilizationMetric {
  name?: EBSMetricName;
  statistic?: MetricStatistic;
  value?: number;
}
export type EBSUtilizationMetrics = Array<EBSUtilizationMetric>;
export interface ECSEffectiveRecommendationPreferences {
  savingsEstimationMode?: ECSSavingsEstimationMode;
}
export interface ECSEstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export interface ECSSavingsEstimationMode {
  source?: ECSSavingsEstimationModeSource;
}
export type ECSSavingsEstimationModeSource =
  | "PUBLIC_PRICING"
  | "COST_EXPLORER_RIGHTSIZING"
  | "COST_OPTIMIZATION_HUB";
export interface ECSSavingsOpportunityAfterDiscounts {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: ECSEstimatedMonthlySavings;
}
export type ECSServiceLaunchType = "EC2" | "FARGATE";
export type ECSServiceMetricName = "CPU" | "MEMORY";
export type ECSServiceMetricStatistic = "MAXIMUM" | "AVERAGE";
export interface ECSServiceProjectedMetric {
  name?: ECSServiceMetricName;
  timestamps?: Array<Date | string>;
  upperBoundValues?: Array<number>;
  lowerBoundValues?: Array<number>;
}
export type ECSServiceProjectedMetrics = Array<ECSServiceProjectedMetric>;
export interface ECSServiceProjectedUtilizationMetric {
  name?: ECSServiceMetricName;
  statistic?: ECSServiceMetricStatistic;
  lowerBoundValue?: number;
  upperBoundValue?: number;
}
export type ECSServiceProjectedUtilizationMetrics =
  Array<ECSServiceProjectedUtilizationMetric>;
export interface ECSServiceRecommendation {
  serviceArn?: string;
  accountId?: string;
  currentServiceConfiguration?: ServiceConfiguration;
  utilizationMetrics?: Array<ECSServiceUtilizationMetric>;
  lookbackPeriodInDays?: number;
  launchType?: ECSServiceLaunchType;
  lastRefreshTimestamp?: Date | string;
  finding?: ECSServiceRecommendationFinding;
  findingReasonCodes?: Array<ECSServiceRecommendationFindingReasonCode>;
  serviceRecommendationOptions?: Array<ECSServiceRecommendationOption>;
  currentPerformanceRisk?: CurrentPerformanceRisk;
  effectiveRecommendationPreferences?: ECSEffectiveRecommendationPreferences;
  tags?: Array<Tag>;
}
export interface ECSServiceRecommendationFilter {
  name?: ECSServiceRecommendationFilterName;
  values?: Array<string>;
}
export type ECSServiceRecommendationFilterName =
  | "FINDING"
  | "FINDING_REASON_CODE";
export type ECSServiceRecommendationFilters =
  Array<ECSServiceRecommendationFilter>;
export type ECSServiceRecommendationFinding =
  | "OPTIMIZED"
  | "UNDER_PROVISIONED"
  | "OVER_PROVISIONED";
export type ECSServiceRecommendationFindingReasonCode =
  | "MEMORY_OVER_PROVISIONED"
  | "MEMORY_UNDER_PROVISIONED"
  | "CPU_OVER_PROVISIONED"
  | "CPU_UNDER_PROVISIONED";
export type ECSServiceRecommendationFindingReasonCodes =
  Array<ECSServiceRecommendationFindingReasonCode>;
export interface ECSServiceRecommendationOption {
  memory?: number;
  cpu?: number;
  savingsOpportunity?: SavingsOpportunity;
  savingsOpportunityAfterDiscounts?: ECSSavingsOpportunityAfterDiscounts;
  projectedUtilizationMetrics?: Array<ECSServiceProjectedUtilizationMetric>;
  containerRecommendations?: Array<ContainerRecommendation>;
}
export type ECSServiceRecommendationOptions =
  Array<ECSServiceRecommendationOption>;
export type ECSServiceRecommendations = Array<ECSServiceRecommendation>;
export interface ECSServiceRecommendedOptionProjectedMetric {
  recommendedCpuUnits?: number;
  recommendedMemorySize?: number;
  projectedMetrics?: Array<ECSServiceProjectedMetric>;
}
export type ECSServiceRecommendedOptionProjectedMetrics =
  Array<ECSServiceRecommendedOptionProjectedMetric>;
export interface ECSServiceUtilizationMetric {
  name?: ECSServiceMetricName;
  statistic?: ECSServiceMetricStatistic;
  value?: number;
}
export type ECSServiceUtilizationMetrics = Array<ECSServiceUtilizationMetric>;
export interface EffectivePreferredResource {
  name?: PreferredResourceName;
  includeList?: Array<string>;
  effectiveIncludeList?: Array<string>;
  excludeList?: Array<string>;
}
export type EffectivePreferredResources = Array<EffectivePreferredResource>;
export interface EffectiveRecommendationPreferences {
  cpuVendorArchitectures?: Array<CpuVendorArchitecture>;
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics;
  inferredWorkloadTypes?: InferredWorkloadTypesPreference;
  externalMetricsPreference?: ExternalMetricsPreference;
  lookBackPeriod?: LookBackPeriodPreference;
  utilizationPreferences?: Array<UtilizationPreference>;
  preferredResources?: Array<EffectivePreferredResource>;
  savingsEstimationMode?: InstanceSavingsEstimationMode;
}
export type Engine = string;

export type EngineVersion = string;

export type EnhancedInfrastructureMetrics = "ACTIVE" | "INACTIVE";
export interface EnrollmentFilter {
  name?: EnrollmentFilterName;
  values?: Array<string>;
}
export type EnrollmentFilterName = "STATUS";
export type EnrollmentFilters = Array<EnrollmentFilter>;
export type ErrorMessage = string;

export interface EstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export type ExportableAutoScalingGroupField =
  | "ACCOUNT_ID"
  | "AUTO_SCALING_GROUP_ARN"
  | "AUTO_SCALING_GROUP_NAME"
  | "FINDING"
  | "UTILIZATION_METRICS_CPU_MAXIMUM"
  | "UTILIZATION_METRICS_MEMORY_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_READ_OPS_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_WRITE_OPS_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_READ_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_WRITE_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_DISK_READ_OPS_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_DISK_WRITE_OPS_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_DISK_READ_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_DISK_WRITE_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_NETWORK_IN_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_NETWORK_OUT_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_NETWORK_PACKETS_IN_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_NETWORK_PACKETS_OUT_PER_SECOND_MAXIMUM"
  | "LOOKBACK_PERIOD_IN_DAYS"
  | "CURRENT_CONFIGURATION_INSTANCE_TYPE"
  | "CURRENT_CONFIGURATION_DESIRED_CAPACITY"
  | "CURRENT_CONFIGURATION_MIN_SIZE"
  | "CURRENT_CONFIGURATION_MAX_SIZE"
  | "CURRENT_CONFIGURATION_ALLOCATION_STRATEGY"
  | "CURRENT_CONFIGURATION_MIXED_INSTANCE_TYPES"
  | "CURRENT_CONFIGURATION_TYPE"
  | "CURRENT_ON_DEMAND_PRICE"
  | "CURRENT_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE"
  | "CURRENT_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE"
  | "CURRENT_VCPUS"
  | "CURRENT_MEMORY"
  | "CURRENT_STORAGE"
  | "CURRENT_NETWORK"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_INSTANCE_TYPE"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_DESIRED_CAPACITY"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_MIN_SIZE"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_MAX_SIZE"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_ESTIMATED_INSTANCE_HOUR_REDUCTION_PERCENTAGE"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_ALLOCATION_STRATEGY"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_MIXED_INSTANCE_TYPES"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_TYPE"
  | "RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM"
  | "RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM"
  | "RECOMMENDATION_OPTIONS_PERFORMANCE_RISK"
  | "RECOMMENDATION_OPTIONS_ON_DEMAND_PRICE"
  | "RECOMMENDATION_OPTIONS_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE"
  | "RECOMMENDATION_OPTIONS_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE"
  | "RECOMMENDATION_OPTIONS_VCPUS"
  | "RECOMMENDATION_OPTIONS_MEMORY"
  | "RECOMMENDATION_OPTIONS_STORAGE"
  | "RECOMMENDATION_OPTIONS_NETWORK"
  | "LAST_REFRESH_TIMESTAMP"
  | "CURRENT_PERFORMANCE_RISK"
  | "RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_CPU_VENDOR_ARCHITECTURES"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_ENHANCED_INFRASTRUCTURE_METRICS"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_INFERRED_WORKLOAD_TYPES"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_PREFERRED_RESOURCES"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_LOOKBACK_PERIOD"
  | "INFERRED_WORKLOAD_TYPES"
  | "RECOMMENDATION_OPTIONS_MIGRATION_EFFORT"
  | "CURRENT_INSTANCE_GPU_INFO"
  | "RECOMMENDATION_OPTIONS_INSTANCE_GPU_INFO"
  | "UTILIZATION_METRICS_GPU_PERCENTAGE_MAXIMUM"
  | "UTILIZATION_METRICS_GPU_MEMORY_PERCENTAGE_MAXIMUM"
  | "RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_GPU_MAXIMUM"
  | "RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_GPU_MEMORY_MAXIMUM"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_SAVINGS_ESTIMATION_MODE"
  | "RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS";
export type ExportableAutoScalingGroupFields =
  Array<ExportableAutoScalingGroupField>;
export type ExportableECSServiceField =
  | "ACCOUNT_ID"
  | "SERVICE_ARN"
  | "LOOKBACK_PERIOD_IN_DAYS"
  | "LAST_REFRESH_TIMESTAMP"
  | "LAUNCH_TYPE"
  | "CURRENT_PERFORMANCE_RISK"
  | "CURRENT_SERVICE_CONFIGURATION_MEMORY"
  | "CURRENT_SERVICE_CONFIGURATION_CPU"
  | "CURRENT_SERVICE_CONFIGURATION_TASK_DEFINITION_ARN"
  | "CURRENT_SERVICE_CONFIGURATION_AUTO_SCALING_CONFIGURATION"
  | "CURRENT_SERVICE_CONTAINER_CONFIGURATIONS"
  | "UTILIZATION_METRICS_CPU_MAXIMUM"
  | "UTILIZATION_METRICS_MEMORY_MAXIMUM"
  | "FINDING"
  | "FINDING_REASON_CODES"
  | "RECOMMENDATION_OPTIONS_MEMORY"
  | "RECOMMENDATION_OPTIONS_CPU"
  | "RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE"
  | "RECOMMENDATION_OPTIONS_CONTAINER_RECOMMENDATIONS"
  | "RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM"
  | "RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM"
  | "TAGS"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_SAVINGS_ESTIMATION_MODE"
  | "RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS";
export type ExportableECSServiceFields = Array<ExportableECSServiceField>;
export type ExportableIdleField =
  | "ACCOUNT_ID"
  | "RESOURCE_ARN"
  | "RESOURCE_ID"
  | "RESOURCE_TYPE"
  | "LAST_REFRESH_TIMESTAMP"
  | "LOOKBACK_PERIOD_IN_DAYS"
  | "SAVINGS_OPPORTUNITY"
  | "SAVINGS_OPPORTUNITY_AFTER_DISCOUNT"
  | "UTILIZATION_METRICS_CPU_MAXIMUM"
  | "UTILIZATION_METRICS_MEMORY_MAXIMUM"
  | "UTILIZATION_METRICS_NETWORK_OUT_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_NETWORK_IN_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_DATABASE_CONNECTIONS_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_VOLUME_READ_IOPS_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_VOLUME_WRITE_IOPS_MAXIMUM"
  | "UTILIZATION_METRICS_VOLUME_READ_OPS_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_VOLUME_WRITE_OPS_PER_SECOND_MAXIMUM"
  | "FINDING"
  | "FINDING_DESCRIPTION"
  | "TAGS";
export type ExportableIdleFields = Array<ExportableIdleField>;
export type ExportableInstanceField =
  | "ACCOUNT_ID"
  | "INSTANCE_ARN"
  | "INSTANCE_NAME"
  | "FINDING"
  | "Finding_Reason_Codes"
  | "LOOKBACK_PERIOD_IN_DAYS"
  | "CURRENT_INSTANCE_TYPE"
  | "UTILIZATION_METRICS_CPU_MAXIMUM"
  | "UTILIZATION_METRICS_MEMORY_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_READ_OPS_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_WRITE_OPS_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_READ_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_WRITE_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_DISK_READ_OPS_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_DISK_WRITE_OPS_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_DISK_READ_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_DISK_WRITE_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_NETWORK_IN_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_NETWORK_OUT_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_NETWORK_PACKETS_IN_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_NETWORK_PACKETS_OUT_PER_SECOND_MAXIMUM"
  | "CURRENT_ON_DEMAND_PRICE"
  | "CURRENT_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE"
  | "CURRENT_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE"
  | "CURRENT_VCPUS"
  | "CURRENT_MEMORY"
  | "CURRENT_STORAGE"
  | "CURRENT_NETWORK"
  | "RECOMMENDATION_OPTIONS_INSTANCE_TYPE"
  | "RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM"
  | "RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM"
  | "RECOMMENDATION_OPTIONS_PLATFORM_DIFFERENCES"
  | "RECOMMENDATION_OPTIONS_PERFORMANCE_RISK"
  | "RECOMMENDATION_OPTIONS_VCPUS"
  | "RECOMMENDATION_OPTIONS_MEMORY"
  | "RECOMMENDATION_OPTIONS_STORAGE"
  | "RECOMMENDATION_OPTIONS_NETWORK"
  | "RECOMMENDATION_OPTIONS_ON_DEMAND_PRICE"
  | "RECOMMENDATION_OPTIONS_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE"
  | "RECOMMENDATION_OPTIONS_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE"
  | "RECOMMENDATIONS_SOURCES_RECOMMENDATION_SOURCE_ARN"
  | "RECOMMENDATIONS_SOURCES_RECOMMENDATION_SOURCE_TYPE"
  | "LAST_REFRESH_TIMESTAMP"
  | "CURRENT_PERFORMANCE_RISK"
  | "RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_CPU_VENDOR_ARCHITECTURES"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_ENHANCED_INFRASTRUCTURE_METRICS"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_INFERRED_WORKLOAD_TYPES"
  | "INFERRED_WORKLOAD_TYPES"
  | "RECOMMENDATION_OPTIONS_MIGRATION_EFFORT"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_EXTERNAL_METRICS_SOURCE"
  | "TAGS"
  | "INSTANCE_STATE"
  | "EXTERNAL_METRIC_STATUS_CODE"
  | "EXTERNAL_METRIC_STATUS_REASON"
  | "CURRENT_INSTANCE_GPU_INFO"
  | "RECOMMENDATION_OPTIONS_INSTANCE_GPU_INFO"
  | "UTILIZATION_METRICS_GPU_PERCENTAGE_MAXIMUM"
  | "UTILIZATION_METRICS_GPU_MEMORY_PERCENTAGE_MAXIMUM"
  | "RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_GPU_PERCENTAGE_MAXIMUM"
  | "RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_GPU_MEMORY_PERCENTAGE_MAXIMUM"
  | "IDLE"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_PREFERRED_RESOURCES"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_LOOKBACK_PERIOD"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_UTILIZATION_PREFERENCES"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_SAVINGS_ESTIMATION_MODE"
  | "RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS";
export type ExportableInstanceFields = Array<ExportableInstanceField>;
export type ExportableLambdaFunctionField =
  | "ACCOUNT_ID"
  | "FUNCTION_ARN"
  | "FUNCTION_VERSION"
  | "FINDING"
  | "FINDING_REASON_CODES"
  | "NUMBER_OF_INVOCATIONS"
  | "UTILIZATION_METRICS_DURATION_MAXIMUM"
  | "UTILIZATION_METRICS_DURATION_AVERAGE"
  | "UTILIZATION_METRICS_MEMORY_MAXIMUM"
  | "UTILIZATION_METRICS_MEMORY_AVERAGE"
  | "LOOKBACK_PERIOD_IN_DAYS"
  | "CURRENT_CONFIGURATION_MEMORY_SIZE"
  | "CURRENT_CONFIGURATION_TIMEOUT"
  | "CURRENT_COST_TOTAL"
  | "CURRENT_COST_AVERAGE"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_MEMORY_SIZE"
  | "RECOMMENDATION_OPTIONS_COST_LOW"
  | "RECOMMENDATION_OPTIONS_COST_HIGH"
  | "RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_LOWER_BOUND"
  | "RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_UPPER_BOUND"
  | "RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_EXPECTED"
  | "LAST_REFRESH_TIMESTAMP"
  | "CURRENT_PERFORMANCE_RISK"
  | "RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE"
  | "TAGS"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_SAVINGS_ESTIMATION_MODE"
  | "RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS";
export type ExportableLambdaFunctionFields =
  Array<ExportableLambdaFunctionField>;
export type ExportableLicenseField =
  | "ACCOUNT_ID"
  | "RESOURCE_ARN"
  | "LOOKBACK_PERIOD_IN_DAYS"
  | "LAST_REFRESH_TIMESTAMP"
  | "LICENSE_FINDING"
  | "LICENSE_FINDING_REASON_CODES"
  | "CURRENT_LICENSE_CONFIGURATION_NUMBER_OF_CORES"
  | "CURRENT_LICENSE_CONFIGURATION_INSTANCE_TYPE"
  | "CURRENT_LICENSE_CONFIGURATION_OPERATING_SYSTEM"
  | "CURRENT_LICENSE_CONFIGURATION_LICENSE_NAME"
  | "CURRENT_LICENSE_CONFIGURATION_LICENSE_EDITION"
  | "CURRENT_LICENSE_CONFIGURATION_LICENSE_MODEL"
  | "CURRENT_LICENSE_CONFIGURATION_LICENSE_VERSION"
  | "CURRENT_LICENSE_CONFIGURATION_METRICS_SOURCE"
  | "RECOMMENDATION_OPTIONS_OPERATING_SYSTEM"
  | "RECOMMENDATION_OPTIONS_LICENSE_EDITION"
  | "RECOMMENDATION_OPTIONS_LICENSE_MODEL"
  | "RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE"
  | "TAGS";
export type ExportableLicenseFields = Array<ExportableLicenseField>;
export type ExportableRDSDBField =
  | "RESOURCE_ARN"
  | "ACCOUNT_ID"
  | "ENGINE"
  | "ENGINE_VERSION"
  | "IDLE"
  | "MULTI_AZ_DB_INSTANCE"
  | "CLUSTER_WRITER"
  | "CURRENT_DB_INSTANCE_CLASS"
  | "CURRENT_STORAGE_CONFIGURATION_STORAGE_TYPE"
  | "CURRENT_STORAGE_CONFIGURATION_ALLOCATED_STORAGE"
  | "CURRENT_STORAGE_CONFIGURATION_MAX_ALLOCATED_STORAGE"
  | "CURRENT_STORAGE_CONFIGURATION_IOPS"
  | "CURRENT_STORAGE_CONFIGURATION_STORAGE_THROUGHPUT"
  | "CURRENT_STORAGE_ESTIMATED_MONTHLY_VOLUME_IOPS_COST_VARIATION"
  | "CURRENT_INSTANCE_ON_DEMAND_HOURLY_PRICE"
  | "CURRENT_STORAGE_ON_DEMAND_MONTHLY_PRICE"
  | "LOOKBACK_PERIOD_IN_DAYS"
  | "CURRENT_STORAGE_ESTIMATED_CLUSTER_INSTANCE_ON_DEMAND_MONTHLY_COST"
  | "CURRENT_STORAGE_ESTIMATED_CLUSTER_STORAGE_ON_DEMAND_MONTHLY_COST"
  | "CURRENT_STORAGE_ESTIMATED_CLUSTER_STORAGE_IO_ON_DEMAND_MONTHLY_COST"
  | "CURRENT_INSTANCE_PERFORMANCE_RISK"
  | "UTILIZATION_METRICS_CPU_MAXIMUM"
  | "UTILIZATION_METRICS_MEMORY_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_VOLUME_STORAGE_SPACE_UTILIZATION_MAXIMUM"
  | "UTILIZATION_METRICS_NETWORK_RECEIVE_THROUGHPUT_MAXIMUM"
  | "UTILIZATION_METRICS_NETWORK_TRANSMIT_THROUGHPUT_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_VOLUME_READ_IOPS_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_VOLUME_WRITE_IOPS_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_VOLUME_READ_THROUGHPUT_MAXIMUM"
  | "UTILIZATION_METRICS_EBS_VOLUME_WRITE_THROUGHPUT_MAXIMUM"
  | "UTILIZATION_METRICS_DATABASE_CONNECTIONS_MAXIMUM"
  | "UTILIZATION_METRICS_STORAGE_NETWORK_RECEIVE_THROUGHPUT_MAXIMUM"
  | "UTILIZATION_METRICS_STORAGE_NETWORK_TRANSMIT_THROUGHPUT_MAXIMUM"
  | "UTILIZATION_METRICS_AURORA_MEMORY_HEALTH_STATE_MAXIMUM"
  | "UTILIZATION_METRICS_AURORA_MEMORY_NUM_DECLINED_SQL_TOTAL_MAXIMUM"
  | "UTILIZATION_METRICS_AURORA_MEMORY_NUM_KILL_CONN_TOTAL_MAXIMUM"
  | "UTILIZATION_METRICS_AURORA_MEMORY_NUM_KILL_QUERY_TOTAL_MAXIMUM"
  | "UTILIZATION_METRICS_READ_IOPS_EPHEMERAL_STORAGE_MAXIMUM"
  | "UTILIZATION_METRICS_WRITE_IOPS_EPHEMERAL_STORAGE_MAXIMUM"
  | "UTILIZATION_METRICS_VOLUME_BYTES_USED_AVERAGE"
  | "UTILIZATION_METRICS_VOLUME_READ_IOPS_AVERAGE"
  | "UTILIZATION_METRICS_VOLUME_WRITE_IOPS_AVERAGE"
  | "INSTANCE_FINDING"
  | "INSTANCE_FINDING_REASON_CODES"
  | "STORAGE_FINDING"
  | "STORAGE_FINDING_REASON_CODES"
  | "INSTANCE_RECOMMENDATION_OPTIONS_DB_INSTANCE_CLASS"
  | "INSTANCE_RECOMMENDATION_OPTIONS_RANK"
  | "INSTANCE_RECOMMENDATION_OPTIONS_PERFORMANCE_RISK"
  | "INSTANCE_RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM"
  | "STORAGE_RECOMMENDATION_OPTIONS_STORAGE_TYPE"
  | "STORAGE_RECOMMENDATION_OPTIONS_ALLOCATED_STORAGE"
  | "STORAGE_RECOMMENDATION_OPTIONS_MAX_ALLOCATED_STORAGE"
  | "STORAGE_RECOMMENDATION_OPTIONS_IOPS"
  | "STORAGE_RECOMMENDATION_OPTIONS_STORAGE_THROUGHPUT"
  | "STORAGE_RECOMMENDATION_OPTIONS_RANK"
  | "STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_VOLUME_IOPS_COST_VARIATION"
  | "INSTANCE_RECOMMENDATION_OPTIONS_INSTANCE_ON_DEMAND_HOURLY_PRICE"
  | "INSTANCE_RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE"
  | "INSTANCE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY"
  | "INSTANCE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE"
  | "INSTANCE_RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE"
  | "INSTANCE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS"
  | "INSTANCE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS"
  | "STORAGE_RECOMMENDATION_OPTIONS_ON_DEMAND_MONTHLY_PRICE"
  | "STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_CLUSTER_INSTANCE_ON_DEMAND_MONTHLY_COST"
  | "STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_CLUSTER_STORAGE_ON_DEMAND_MONTHLY_COST"
  | "STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_CLUSTER_STORAGE_IO_ON_DEMAND_MONTHLY_COST"
  | "STORAGE_RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE"
  | "STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY"
  | "STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE"
  | "STORAGE_RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE"
  | "STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS"
  | "STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_CPU_VENDOR_ARCHITECTURES"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_ENHANCED_INFRASTRUCTURE_METRICS"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_LOOKBACK_PERIOD"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_SAVINGS_ESTIMATION_MODE"
  | "LAST_REFRESH_TIMESTAMP"
  | "TAGS"
  | "DB_CLUSTER_IDENTIFIER"
  | "PROMOTION_TIER";
export type ExportableRDSDBFields = Array<ExportableRDSDBField>;
export type ExportableVolumeField =
  | "ACCOUNT_ID"
  | "VOLUME_ARN"
  | "FINDING"
  | "UTILIZATION_METRICS_VOLUME_READ_OPS_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_VOLUME_WRITE_OPS_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_VOLUME_READ_BYTES_PER_SECOND_MAXIMUM"
  | "UTILIZATION_METRICS_VOLUME_WRITE_BYTES_PER_SECOND_MAXIMUM"
  | "LOOKBACK_PERIOD_IN_DAYS"
  | "CURRENT_CONFIGURATION_VOLUME_TYPE"
  | "CURRENT_CONFIGURATION_VOLUME_BASELINE_IOPS"
  | "CURRENT_CONFIGURATION_VOLUME_BASELINE_THROUGHPUT"
  | "CURRENT_CONFIGURATION_VOLUME_BURST_IOPS"
  | "CURRENT_CONFIGURATION_VOLUME_BURST_THROUGHPUT"
  | "CURRENT_CONFIGURATION_VOLUME_SIZE"
  | "CURRENT_MONTHLY_PRICE"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_TYPE"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BASELINE_IOPS"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BASELINE_THROUGHPUT"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BURST_IOPS"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BURST_THROUGHPUT"
  | "RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_SIZE"
  | "RECOMMENDATION_OPTIONS_MONTHLY_PRICE"
  | "RECOMMENDATION_OPTIONS_PERFORMANCE_RISK"
  | "LAST_REFRESH_TIMESTAMP"
  | "CURRENT_PERFORMANCE_RISK"
  | "RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE"
  | "TAGS"
  | "ROOT_VOLUME"
  | "CURRENT_CONFIGURATION_ROOT_VOLUME"
  | "EFFECTIVE_RECOMMENDATION_PREFERENCES_SAVINGS_ESTIMATION_MODE"
  | "RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS"
  | "RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS";
export type ExportableVolumeFields = Array<ExportableVolumeField>;
export interface ExportAutoScalingGroupRecommendationsRequest {
  accountIds?: Array<string>;
  filters?: Array<Filter>;
  fieldsToExport?: Array<ExportableAutoScalingGroupField>;
  s3DestinationConfig: S3DestinationConfig;
  fileFormat?: FileFormat;
  includeMemberAccounts?: boolean;
  recommendationPreferences?: RecommendationPreferences;
}
export interface ExportAutoScalingGroupRecommendationsResponse {
  jobId?: string;
  s3Destination?: S3Destination;
}
export interface ExportDestination {
  s3?: S3Destination;
}
export interface ExportEBSVolumeRecommendationsRequest {
  accountIds?: Array<string>;
  filters?: Array<EBSFilter>;
  fieldsToExport?: Array<ExportableVolumeField>;
  s3DestinationConfig: S3DestinationConfig;
  fileFormat?: FileFormat;
  includeMemberAccounts?: boolean;
}
export interface ExportEBSVolumeRecommendationsResponse {
  jobId?: string;
  s3Destination?: S3Destination;
}
export interface ExportEC2InstanceRecommendationsRequest {
  accountIds?: Array<string>;
  filters?: Array<Filter>;
  fieldsToExport?: Array<ExportableInstanceField>;
  s3DestinationConfig: S3DestinationConfig;
  fileFormat?: FileFormat;
  includeMemberAccounts?: boolean;
  recommendationPreferences?: RecommendationPreferences;
}
export interface ExportEC2InstanceRecommendationsResponse {
  jobId?: string;
  s3Destination?: S3Destination;
}
export interface ExportECSServiceRecommendationsRequest {
  accountIds?: Array<string>;
  filters?: Array<ECSServiceRecommendationFilter>;
  fieldsToExport?: Array<ExportableECSServiceField>;
  s3DestinationConfig: S3DestinationConfig;
  fileFormat?: FileFormat;
  includeMemberAccounts?: boolean;
}
export interface ExportECSServiceRecommendationsResponse {
  jobId?: string;
  s3Destination?: S3Destination;
}
export interface ExportIdleRecommendationsRequest {
  accountIds?: Array<string>;
  filters?: Array<IdleRecommendationFilter>;
  fieldsToExport?: Array<ExportableIdleField>;
  s3DestinationConfig: S3DestinationConfig;
  fileFormat?: FileFormat;
  includeMemberAccounts?: boolean;
}
export interface ExportIdleRecommendationsResponse {
  jobId?: string;
  s3Destination?: S3Destination;
}
export interface ExportLambdaFunctionRecommendationsRequest {
  accountIds?: Array<string>;
  filters?: Array<LambdaFunctionRecommendationFilter>;
  fieldsToExport?: Array<ExportableLambdaFunctionField>;
  s3DestinationConfig: S3DestinationConfig;
  fileFormat?: FileFormat;
  includeMemberAccounts?: boolean;
}
export interface ExportLambdaFunctionRecommendationsResponse {
  jobId?: string;
  s3Destination?: S3Destination;
}
export interface ExportLicenseRecommendationsRequest {
  accountIds?: Array<string>;
  filters?: Array<LicenseRecommendationFilter>;
  fieldsToExport?: Array<ExportableLicenseField>;
  s3DestinationConfig: S3DestinationConfig;
  fileFormat?: FileFormat;
  includeMemberAccounts?: boolean;
}
export interface ExportLicenseRecommendationsResponse {
  jobId?: string;
  s3Destination?: S3Destination;
}
export interface ExportRDSDatabaseRecommendationsRequest {
  accountIds?: Array<string>;
  filters?: Array<RDSDBRecommendationFilter>;
  fieldsToExport?: Array<ExportableRDSDBField>;
  s3DestinationConfig: S3DestinationConfig;
  fileFormat?: FileFormat;
  includeMemberAccounts?: boolean;
  recommendationPreferences?: RecommendationPreferences;
}
export interface ExportRDSDatabaseRecommendationsResponse {
  jobId?: string;
  s3Destination?: S3Destination;
}
export interface ExternalMetricsPreference {
  source?: ExternalMetricsSource;
}
export type ExternalMetricsSource =
  | "DATADOG"
  | "DYNATRACE"
  | "NEWRELIC"
  | "INSTANA";
export interface ExternalMetricStatus {
  statusCode?: ExternalMetricStatusCode;
  statusReason?: string;
}
export type ExternalMetricStatusCode =
  | "NO_EXTERNAL_METRIC_SET"
  | "INTEGRATION_SUCCESS"
  | "DATADOG_INTEGRATION_ERROR"
  | "DYNATRACE_INTEGRATION_ERROR"
  | "NEWRELIC_INTEGRATION_ERROR"
  | "INSTANA_INTEGRATION_ERROR"
  | "INSUFFICIENT_DATADOG_METRICS"
  | "INSUFFICIENT_DYNATRACE_METRICS"
  | "INSUFFICIENT_NEWRELIC_METRICS"
  | "INSUFFICIENT_INSTANA_METRICS";
export type ExternalMetricStatusReason = string;

export type FailureReason = string;

export type FileFormat = "CSV";
export interface Filter {
  name?: FilterName;
  values?: Array<string>;
}
export type FilterName =
  | "FINDING"
  | "FINDING_REASON_CODES"
  | "RECOMMENDATION_SOURCE_TYPE"
  | "INFERRED_WORKLOAD_TYPES";
export type Filters = Array<Filter>;
export type FilterValue = string;

export type FilterValues = Array<string>;
export type Finding =
  | "UNDER_PROVISIONED"
  | "OVER_PROVISIONED"
  | "OPTIMIZED"
  | "NOT_OPTIMIZED";
export type FindingReasonCode =
  | "MEMORY_OVER_PROVISIONED"
  | "MEMORY_UNDER_PROVISIONED";
export type FunctionArn = string;

export type FunctionArns = Array<string>;
export type FunctionVersion = string;

export interface GetAutoScalingGroupRecommendationsRequest {
  accountIds?: Array<string>;
  autoScalingGroupArns?: Array<string>;
  nextToken?: string;
  maxResults?: number;
  filters?: Array<Filter>;
  recommendationPreferences?: RecommendationPreferences;
}
export interface GetAutoScalingGroupRecommendationsResponse {
  nextToken?: string;
  autoScalingGroupRecommendations?: Array<AutoScalingGroupRecommendation>;
  errors?: Array<GetRecommendationError>;
}
export interface GetEBSVolumeRecommendationsRequest {
  volumeArns?: Array<string>;
  nextToken?: string;
  maxResults?: number;
  filters?: Array<EBSFilter>;
  accountIds?: Array<string>;
}
export interface GetEBSVolumeRecommendationsResponse {
  nextToken?: string;
  volumeRecommendations?: Array<VolumeRecommendation>;
  errors?: Array<GetRecommendationError>;
}
export interface GetEC2InstanceRecommendationsRequest {
  instanceArns?: Array<string>;
  nextToken?: string;
  maxResults?: number;
  filters?: Array<Filter>;
  accountIds?: Array<string>;
  recommendationPreferences?: RecommendationPreferences;
}
export interface GetEC2InstanceRecommendationsResponse {
  nextToken?: string;
  instanceRecommendations?: Array<InstanceRecommendation>;
  errors?: Array<GetRecommendationError>;
}
export interface GetEC2RecommendationProjectedMetricsRequest {
  instanceArn: string;
  stat: MetricStatistic;
  period: number;
  startTime: Date | string;
  endTime: Date | string;
  recommendationPreferences?: RecommendationPreferences;
}
export interface GetEC2RecommendationProjectedMetricsResponse {
  recommendedOptionProjectedMetrics?: Array<RecommendedOptionProjectedMetric>;
}
export interface GetECSServiceRecommendationProjectedMetricsRequest {
  serviceArn: string;
  stat: MetricStatistic;
  period: number;
  startTime: Date | string;
  endTime: Date | string;
}
export interface GetECSServiceRecommendationProjectedMetricsResponse {
  recommendedOptionProjectedMetrics?: Array<ECSServiceRecommendedOptionProjectedMetric>;
}
export interface GetECSServiceRecommendationsRequest {
  serviceArns?: Array<string>;
  nextToken?: string;
  maxResults?: number;
  filters?: Array<ECSServiceRecommendationFilter>;
  accountIds?: Array<string>;
}
export interface GetECSServiceRecommendationsResponse {
  nextToken?: string;
  ecsServiceRecommendations?: Array<ECSServiceRecommendation>;
  errors?: Array<GetRecommendationError>;
}
export interface GetEffectiveRecommendationPreferencesRequest {
  resourceArn: string;
}
export interface GetEffectiveRecommendationPreferencesResponse {
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics;
  externalMetricsPreference?: ExternalMetricsPreference;
  lookBackPeriod?: LookBackPeriodPreference;
  utilizationPreferences?: Array<UtilizationPreference>;
  preferredResources?: Array<EffectivePreferredResource>;
}
export interface GetEnrollmentStatusesForOrganizationRequest {
  filters?: Array<EnrollmentFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface GetEnrollmentStatusesForOrganizationResponse {
  accountEnrollmentStatuses?: Array<AccountEnrollmentStatus>;
  nextToken?: string;
}
export interface GetEnrollmentStatusRequest {}
export interface GetEnrollmentStatusResponse {
  status?: Status;
  statusReason?: string;
  memberAccountsEnrolled?: boolean;
  lastUpdatedTimestamp?: Date | string;
  numberOfMemberAccountsOptedIn?: number;
}
export interface GetIdleRecommendationsRequest {
  resourceArns?: Array<string>;
  nextToken?: string;
  maxResults?: number;
  filters?: Array<IdleRecommendationFilter>;
  accountIds?: Array<string>;
  orderBy?: OrderBy;
}
export interface GetIdleRecommendationsResponse {
  nextToken?: string;
  idleRecommendations?: Array<IdleRecommendation>;
  errors?: Array<IdleRecommendationError>;
}
export interface GetLambdaFunctionRecommendationsRequest {
  functionArns?: Array<string>;
  accountIds?: Array<string>;
  filters?: Array<LambdaFunctionRecommendationFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface GetLambdaFunctionRecommendationsResponse {
  nextToken?: string;
  lambdaFunctionRecommendations?: Array<LambdaFunctionRecommendation>;
}
export interface GetLicenseRecommendationsRequest {
  resourceArns?: Array<string>;
  nextToken?: string;
  maxResults?: number;
  filters?: Array<LicenseRecommendationFilter>;
  accountIds?: Array<string>;
}
export interface GetLicenseRecommendationsResponse {
  nextToken?: string;
  licenseRecommendations?: Array<LicenseRecommendation>;
  errors?: Array<GetRecommendationError>;
}
export interface GetRDSDatabaseRecommendationProjectedMetricsRequest {
  resourceArn: string;
  stat: MetricStatistic;
  period: number;
  startTime: Date | string;
  endTime: Date | string;
  recommendationPreferences?: RecommendationPreferences;
}
export interface GetRDSDatabaseRecommendationProjectedMetricsResponse {
  recommendedOptionProjectedMetrics?: Array<RDSDatabaseRecommendedOptionProjectedMetric>;
}
export interface GetRDSDatabaseRecommendationsRequest {
  resourceArns?: Array<string>;
  nextToken?: string;
  maxResults?: number;
  filters?: Array<RDSDBRecommendationFilter>;
  accountIds?: Array<string>;
  recommendationPreferences?: RecommendationPreferences;
}
export interface GetRDSDatabaseRecommendationsResponse {
  nextToken?: string;
  rdsDBRecommendations?: Array<RDSDBRecommendation>;
  errors?: Array<GetRecommendationError>;
}
export interface GetRecommendationError {
  identifier?: string;
  code?: string;
  message?: string;
}
export type GetRecommendationErrors = Array<GetRecommendationError>;
export interface GetRecommendationPreferencesRequest {
  resourceType: ResourceType;
  scope?: Scope;
  nextToken?: string;
  maxResults?: number;
}
export interface GetRecommendationPreferencesResponse {
  nextToken?: string;
  recommendationPreferencesDetails?: Array<RecommendationPreferencesDetail>;
}
export interface GetRecommendationSummariesRequest {
  accountIds?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface GetRecommendationSummariesResponse {
  nextToken?: string;
  recommendationSummaries?: Array<RecommendationSummary>;
}
export interface Gpu {
  gpuCount?: number;
  gpuMemorySizeInMiB?: number;
}
export type GpuCount = number;

export interface GpuInfo {
  gpus?: Array<Gpu>;
}
export type GpuMemorySizeInMiB = number;

export type Gpus = Array<Gpu>;
export type High = number;

export type Identifier = string;

export type Idle = "TRUE" | "FALSE";
export interface IdleEstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export type IdleFinding = "IDLE" | "UNATTACHED";
export type IdleFindingDescription = string;

export type IdleMaxResults = number;

export type IdleMetricName =
  | "CPU"
  | "MEMORY"
  | "NETWORK_OUT_BYTES_PER_SECOND"
  | "NETWORK_IN_BYTES_PER_SECOND"
  | "DATABASE_CONNECTIONS"
  | "EBS_VOLUME_READ_IOPS"
  | "EBS_VOLUME_WRITE_IOPS"
  | "VOLUME_READ_OPS_PER_SECOND"
  | "VOLUME_WRITE_OPS_PER_SECOND";
export interface IdleRecommendation {
  resourceArn?: string;
  resourceId?: string;
  resourceType?: IdleRecommendationResourceType;
  accountId?: string;
  finding?: IdleFinding;
  findingDescription?: string;
  savingsOpportunity?: IdleSavingsOpportunity;
  savingsOpportunityAfterDiscounts?: IdleSavingsOpportunityAfterDiscounts;
  utilizationMetrics?: Array<IdleUtilizationMetric>;
  lookBackPeriodInDays?: number;
  lastRefreshTimestamp?: Date | string;
  tags?: Array<Tag>;
}
export interface IdleRecommendationError {
  identifier?: string;
  code?: string;
  message?: string;
  resourceType?: IdleRecommendationResourceType;
}
export type IdleRecommendationErrors = Array<IdleRecommendationError>;
export interface IdleRecommendationFilter {
  name?: IdleRecommendationFilterName;
  values?: Array<string>;
}
export type IdleRecommendationFilterName = "FINDING" | "RESOURCE_TYPE";
export type IdleRecommendationFilters = Array<IdleRecommendationFilter>;
export type IdleRecommendationResourceType =
  | "EC2_INSTANCE"
  | "AUTO_SCALING_GROUP"
  | "EBS_VOLUME"
  | "ECS_SERVICE"
  | "RDS_DB_INSTANCE";
export type IdleRecommendations = Array<IdleRecommendation>;
export interface IdleSavingsOpportunity {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: IdleEstimatedMonthlySavings;
}
export interface IdleSavingsOpportunityAfterDiscounts {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: IdleEstimatedMonthlySavings;
}
export type IdleSummaries = Array<IdleSummary>;
export interface IdleSummary {
  name?: IdleFinding;
  value?: number;
}
export interface IdleUtilizationMetric {
  name?: IdleMetricName;
  statistic?: MetricStatistic;
  value?: number;
}
export type IdleUtilizationMetrics = Array<IdleUtilizationMetric>;
export type IncludeMemberAccounts = boolean;

export interface InferredWorkloadSaving {
  inferredWorkloadTypes?: Array<InferredWorkloadType>;
  estimatedMonthlySavings?: EstimatedMonthlySavings;
}
export type InferredWorkloadSavings = Array<InferredWorkloadSaving>;
export type InferredWorkloadType =
  | "AMAZON_EMR"
  | "APACHE_CASSANDRA"
  | "APACHE_HADOOP"
  | "MEMCACHED"
  | "NGINX"
  | "POSTGRE_SQL"
  | "REDIS"
  | "KAFKA"
  | "SQLSERVER";
export type InferredWorkloadTypes = Array<InferredWorkloadType>;
export type InferredWorkloadTypesPreference = "ACTIVE" | "INACTIVE";
export type InstanceArn = string;

export type InstanceArns = Array<string>;
export interface InstanceEstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export type InstanceIdle = "TRUE" | "FALSE";
export type InstanceName = string;

export interface InstanceRecommendation {
  instanceArn?: string;
  accountId?: string;
  instanceName?: string;
  currentInstanceType?: string;
  finding?: Finding;
  findingReasonCodes?: Array<InstanceRecommendationFindingReasonCode>;
  utilizationMetrics?: Array<UtilizationMetric>;
  lookBackPeriodInDays?: number;
  recommendationOptions?: Array<InstanceRecommendationOption>;
  recommendationSources?: Array<RecommendationSource>;
  lastRefreshTimestamp?: Date | string;
  currentPerformanceRisk?: CurrentPerformanceRisk;
  effectiveRecommendationPreferences?: EffectiveRecommendationPreferences;
  inferredWorkloadTypes?: Array<InferredWorkloadType>;
  instanceState?: InstanceState;
  tags?: Array<Tag>;
  externalMetricStatus?: ExternalMetricStatus;
  currentInstanceGpuInfo?: GpuInfo;
  idle?: InstanceIdle;
}
export type InstanceRecommendationFindingReasonCode =
  | "CPU_OVER_PROVISIONED"
  | "CPU_UNDER_PROVISIONED"
  | "MEMORY_OVER_PROVISIONED"
  | "MEMORY_UNDER_PROVISIONED"
  | "EBS_THROUGHPUT_OVER_PROVISIONED"
  | "EBS_THROUGHPUT_UNDER_PROVISIONED"
  | "EBS_IOPS_OVER_PROVISIONED"
  | "EBS_IOPS_UNDER_PROVISIONED"
  | "NETWORK_BANDWIDTH_OVER_PROVISIONED"
  | "NETWORK_BANDWIDTH_UNDER_PROVISIONED"
  | "NETWORK_PPS_OVER_PROVISIONED"
  | "NETWORK_PPS_UNDER_PROVISIONED"
  | "DISK_IOPS_OVER_PROVISIONED"
  | "DISK_IOPS_UNDER_PROVISIONED"
  | "DISK_THROUGHPUT_OVER_PROVISIONED"
  | "DISK_THROUGHPUT_UNDER_PROVISIONED"
  | "GPU_UNDER_PROVISIONED"
  | "GPU_OVER_PROVISIONED"
  | "GPU_MEMORY_UNDER_PROVISIONED"
  | "GPU_MEMORY_OVER_PROVISIONED";
export type InstanceRecommendationFindingReasonCodes =
  Array<InstanceRecommendationFindingReasonCode>;
export interface InstanceRecommendationOption {
  instanceType?: string;
  instanceGpuInfo?: GpuInfo;
  projectedUtilizationMetrics?: Array<UtilizationMetric>;
  platformDifferences?: Array<PlatformDifference>;
  performanceRisk?: number;
  rank?: number;
  savingsOpportunity?: SavingsOpportunity;
  savingsOpportunityAfterDiscounts?: InstanceSavingsOpportunityAfterDiscounts;
  migrationEffort?: MigrationEffort;
}
export type InstanceRecommendations = Array<InstanceRecommendation>;
export interface InstanceSavingsEstimationMode {
  source?: InstanceSavingsEstimationModeSource;
}
export type InstanceSavingsEstimationModeSource =
  | "PUBLIC_PRICING"
  | "COST_EXPLORER_RIGHTSIZING"
  | "COST_OPTIMIZATION_HUB";
export interface InstanceSavingsOpportunityAfterDiscounts {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: InstanceEstimatedMonthlySavings;
}
export type InstanceState =
  | "PENDING"
  | "RUNNING"
  | "SHUTTING_DOWN"
  | "TERMINATED"
  | "STOPPING"
  | "STOPPED";
export type InstanceType = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterValueException extends EffectData.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly message?: string;
}> {}
export interface JobFilter {
  name?: JobFilterName;
  values?: Array<string>;
}
export type JobFilterName = "RESOURCE_TYPE" | "JOB_STATUS";
export type JobFilters = Array<JobFilter>;
export type JobId = string;

export type JobIds = Array<string>;
export type JobStatus = "QUEUED" | "IN_PROGRESS" | "COMPLETE" | "FAILED";
export interface LambdaEffectiveRecommendationPreferences {
  savingsEstimationMode?: LambdaSavingsEstimationMode;
}
export interface LambdaEstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export type LambdaFunctionMemoryMetricName = "DURATION";
export type LambdaFunctionMemoryMetricStatistic =
  | "LOWER_BOUND"
  | "UPPER_BOUND"
  | "EXPECTED";
export interface LambdaFunctionMemoryProjectedMetric {
  name?: LambdaFunctionMemoryMetricName;
  statistic?: LambdaFunctionMemoryMetricStatistic;
  value?: number;
}
export type LambdaFunctionMemoryProjectedMetrics =
  Array<LambdaFunctionMemoryProjectedMetric>;
export interface LambdaFunctionMemoryRecommendationOption {
  rank?: number;
  memorySize?: number;
  projectedUtilizationMetrics?: Array<LambdaFunctionMemoryProjectedMetric>;
  savingsOpportunity?: SavingsOpportunity;
  savingsOpportunityAfterDiscounts?: LambdaSavingsOpportunityAfterDiscounts;
}
export type LambdaFunctionMemoryRecommendationOptions =
  Array<LambdaFunctionMemoryRecommendationOption>;
export type LambdaFunctionMetricName = "DURATION" | "MEMORY";
export type LambdaFunctionMetricStatistic = "MAXIMUM" | "AVERAGE";
export interface LambdaFunctionRecommendation {
  functionArn?: string;
  functionVersion?: string;
  accountId?: string;
  currentMemorySize?: number;
  numberOfInvocations?: number;
  utilizationMetrics?: Array<LambdaFunctionUtilizationMetric>;
  lookbackPeriodInDays?: number;
  lastRefreshTimestamp?: Date | string;
  finding?: LambdaFunctionRecommendationFinding;
  findingReasonCodes?: Array<LambdaFunctionRecommendationFindingReasonCode>;
  memorySizeRecommendationOptions?: Array<LambdaFunctionMemoryRecommendationOption>;
  currentPerformanceRisk?: CurrentPerformanceRisk;
  effectiveRecommendationPreferences?: LambdaEffectiveRecommendationPreferences;
  tags?: Array<Tag>;
}
export interface LambdaFunctionRecommendationFilter {
  name?: LambdaFunctionRecommendationFilterName;
  values?: Array<string>;
}
export type LambdaFunctionRecommendationFilterName =
  | "FINDING"
  | "FINDING_REASON_CODE";
export type LambdaFunctionRecommendationFilters =
  Array<LambdaFunctionRecommendationFilter>;
export type LambdaFunctionRecommendationFinding =
  | "OPTIMIZED"
  | "NOT_OPTIMIZED"
  | "UNAVAILABLE";
export type LambdaFunctionRecommendationFindingReasonCode =
  | "MEMORY_OVER_PROVISIONED"
  | "MEMORY_UNDER_PROVISIONED"
  | "INSUFFICIENT_DATA"
  | "INCONCLUSIVE";
export type LambdaFunctionRecommendationFindingReasonCodes =
  Array<LambdaFunctionRecommendationFindingReasonCode>;
export type LambdaFunctionRecommendations = Array<LambdaFunctionRecommendation>;
export interface LambdaFunctionUtilizationMetric {
  name?: LambdaFunctionMetricName;
  statistic?: LambdaFunctionMetricStatistic;
  value?: number;
}
export type LambdaFunctionUtilizationMetrics =
  Array<LambdaFunctionUtilizationMetric>;
export interface LambdaSavingsEstimationMode {
  source?: LambdaSavingsEstimationModeSource;
}
export type LambdaSavingsEstimationModeSource =
  | "PUBLIC_PRICING"
  | "COST_EXPLORER_RIGHTSIZING"
  | "COST_OPTIMIZATION_HUB";
export interface LambdaSavingsOpportunityAfterDiscounts {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: LambdaEstimatedMonthlySavings;
}
export type LastRefreshTimestamp = Date | string;

export type LastUpdatedTimestamp = Date | string;

export interface LicenseConfiguration {
  numberOfCores?: number;
  instanceType?: string;
  operatingSystem?: string;
  licenseEdition?: LicenseEdition;
  licenseName?: LicenseName;
  licenseModel?: LicenseModel;
  licenseVersion?: string;
  metricsSource?: Array<MetricSource>;
}
export type LicenseEdition =
  | "ENTERPRISE"
  | "STANDARD"
  | "FREE"
  | "NO_LICENSE_EDITION_FOUND";
export type LicenseFinding =
  | "INSUFFICIENT_METRICS"
  | "OPTIMIZED"
  | "NOT_OPTIMIZED";
export type LicenseFindingReasonCode =
  | "CW_APP_INSIGHTS_DISABLED"
  | "CW_APP_INSIGHTS_ERROR"
  | "LICENSE_OVER_PROVISIONED"
  | "OPTIMIZED";
export type LicenseFindingReasonCodes = Array<LicenseFindingReasonCode>;
export type LicenseModel = "LICENSE_INCLUDED" | "BRING_YOUR_OWN_LICENSE";
export type LicenseName = "SQLSERVER";
export interface LicenseRecommendation {
  resourceArn?: string;
  accountId?: string;
  currentLicenseConfiguration?: LicenseConfiguration;
  lookbackPeriodInDays?: number;
  lastRefreshTimestamp?: Date | string;
  finding?: LicenseFinding;
  findingReasonCodes?: Array<LicenseFindingReasonCode>;
  licenseRecommendationOptions?: Array<LicenseRecommendationOption>;
  tags?: Array<Tag>;
}
export interface LicenseRecommendationFilter {
  name?: LicenseRecommendationFilterName;
  values?: Array<string>;
}
export type LicenseRecommendationFilterName =
  | "LICENSE_FINDING"
  | "LICENSE_FINDING_REASON_CODE"
  | "LICENSE_NAME";
export type LicenseRecommendationFilters = Array<LicenseRecommendationFilter>;
export interface LicenseRecommendationOption {
  rank?: number;
  operatingSystem?: string;
  licenseEdition?: LicenseEdition;
  licenseModel?: LicenseModel;
  savingsOpportunity?: SavingsOpportunity;
}
export type LicenseRecommendationOptions = Array<LicenseRecommendationOption>;
export type LicenseRecommendations = Array<LicenseRecommendation>;
export type LicenseVersion = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export type LookBackPeriodInDays = number;

export type LookBackPeriodPreference = "DAYS_14" | "DAYS_32" | "DAYS_93";
export type Low = number;

export type LowerBoundValue = number;

export type MaxResults = number;

export type MaxSize = number;

export type Medium = number;

export type MemberAccountsEnrolled = boolean;

export type MemorySize = number;

export interface MemorySizeConfiguration {
  memory?: number;
  memoryReservation?: number;
}
export type Message = string;

export type MetadataKey = string;

export type MetricName =
  | "CPU"
  | "MEMORY"
  | "EBS_READ_OPS_PER_SECOND"
  | "EBS_WRITE_OPS_PER_SECOND"
  | "EBS_READ_BYTES_PER_SECOND"
  | "EBS_WRITE_BYTES_PER_SECOND"
  | "DISK_READ_OPS_PER_SECOND"
  | "DISK_WRITE_OPS_PER_SECOND"
  | "DISK_READ_BYTES_PER_SECOND"
  | "DISK_WRITE_BYTES_PER_SECOND"
  | "NETWORK_IN_BYTES_PER_SECOND"
  | "NETWORK_OUT_BYTES_PER_SECOND"
  | "NETWORK_PACKETS_IN_PER_SECOND"
  | "NETWORK_PACKETS_OUT_PER_SECOND"
  | "GPU_PERCENTAGE"
  | "GPU_MEMORY_PERCENTAGE";
export type MetricProviderArn = string;

export interface MetricSource {
  provider?: MetricSourceProvider;
  providerArn?: string;
}
export type MetricSourceProvider = "CloudWatchAppInsights";
export type MetricsSource = Array<MetricSource>;
export type MetricStatistic = "MAXIMUM" | "AVERAGE";
export type MetricValue = number;

export type MetricValues = Array<number>;
export type MigrationEffort = "VERY_LOW" | "LOW" | "MEDIUM" | "HIGH";
export type MinSize = number;

export declare class MissingAuthenticationToken extends EffectData.TaggedError(
  "MissingAuthenticationToken",
)<{
  readonly message?: string;
}> {}
export type MixedInstanceType = string;

export type MixedInstanceTypes = Array<string>;
export type NextToken = string;

export type NullableCpu = number;

export type NullableEstimatedInstanceHourReductionPercentage = number;

export type NullableInstanceType = string;

export type NullableIOPS = number;

export type NullableMaxAllocatedStorage = number;

export type NullableMemory = number;

export type NullableMemoryReservation = number;

export type NullableStorageThroughput = number;

export type NumberOfCores = number;

export type NumberOfInvocations = number;

export type NumberOfMemberAccountsOptedIn = number;

export type OperatingSystem = string;

export declare class OptInRequiredException extends EffectData.TaggedError(
  "OptInRequiredException",
)<{
  readonly message?: string;
}> {}
export type Order = "ASC" | "DESC";
export interface OrderBy {
  dimension?: Dimension;
  order?: Order;
}
export type PerformanceRisk = number;

export type Period = number;

export type PlatformDifference =
  | "HYPERVISOR"
  | "NETWORK_INTERFACE"
  | "STORAGE_INTERFACE"
  | "INSTANCE_STORE_AVAILABILITY"
  | "VIRTUALIZATION_TYPE"
  | "ARCHITECTURE";
export type PlatformDifferences = Array<PlatformDifference>;
export interface PreferredResource {
  name?: PreferredResourceName;
  includeList?: Array<string>;
  excludeList?: Array<string>;
}
export type PreferredResourceName = "EC2_INSTANCE_TYPES";
export type PreferredResources = Array<PreferredResource>;
export type PreferredResourceValue = string;

export type PreferredResourceValues = Array<string>;
export interface ProjectedMetric {
  name?: MetricName;
  timestamps?: Array<Date | string>;
  values?: Array<number>;
}
export type ProjectedMetrics = Array<ProjectedMetric>;
export type ProjectedUtilizationMetrics = Array<UtilizationMetric>;
export type PromotionTier = number;

export interface PutRecommendationPreferencesRequest {
  resourceType: ResourceType;
  scope?: Scope;
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics;
  inferredWorkloadTypes?: InferredWorkloadTypesPreference;
  externalMetricsPreference?: ExternalMetricsPreference;
  lookBackPeriod?: LookBackPeriodPreference;
  utilizationPreferences?: Array<UtilizationPreference>;
  preferredResources?: Array<PreferredResource>;
  savingsEstimationMode?: SavingsEstimationMode;
}
export interface PutRecommendationPreferencesResponse {}
export type Rank = number;

export type RDSCurrentInstancePerformanceRisk =
  | "VERY_LOW"
  | "LOW"
  | "MEDIUM"
  | "HIGH";
export interface RDSDatabaseProjectedMetric {
  name?: RDSDBMetricName;
  timestamps?: Array<Date | string>;
  values?: Array<number>;
}
export type RDSDatabaseProjectedMetrics = Array<RDSDatabaseProjectedMetric>;
export interface RDSDatabaseRecommendedOptionProjectedMetric {
  recommendedDBInstanceClass?: string;
  rank?: number;
  projectedMetrics?: Array<RDSDatabaseProjectedMetric>;
}
export type RDSDatabaseRecommendedOptionProjectedMetrics =
  Array<RDSDatabaseRecommendedOptionProjectedMetric>;
export interface RDSDBInstanceRecommendationOption {
  dbInstanceClass?: string;
  projectedUtilizationMetrics?: Array<RDSDBUtilizationMetric>;
  performanceRisk?: number;
  rank?: number;
  savingsOpportunity?: SavingsOpportunity;
  savingsOpportunityAfterDiscounts?: RDSInstanceSavingsOpportunityAfterDiscounts;
}
export type RDSDBInstanceRecommendationOptions =
  Array<RDSDBInstanceRecommendationOption>;
export type RDSDBMetricName =
  | "CPU"
  | "MEMORY"
  | "EBS_VOLUME_STORAGE_SPACE_UTILIZATION"
  | "NETWORK_RECEIVE_THROUGHPUT"
  | "NETWORK_TRANSMIT_THROUGHPUT"
  | "EBS_VOLUME_READ_IOPS"
  | "EBS_VOLUME_WRITE_IOPS"
  | "EBS_VOLUME_READ_THROUGHPUT"
  | "EBS_VOLUME_WRITE_THROUGHPUT"
  | "DATABASE_CONNECTIONS"
  | "STORAGE_NETWORK_RECEIVE_THROUGHPUT"
  | "STORAGE_NETWORK_TRANSMIT_THROUGHPUT"
  | "AURORA_MEMORY_HEALTH_STATE"
  | "AURORA_MEMORY_NUM_DECLINED_SQL"
  | "AURORA_MEMORY_NUM_KILL_CONN_TOTAL"
  | "AURORA_MEMORY_NUM_KILL_QUERY_TOTAL"
  | "READ_IOPS_EPHEMERAL_STORAGE"
  | "WRITE_IOPS_EPHEMERAL_STORAGE"
  | "VOLUME_READ_IOPS"
  | "VOLUME_BYTES_USED"
  | "VOLUME_WRITE_IOPS";
export type RDSDBMetricStatistic = "MAXIMUM" | "MINIMUM" | "AVERAGE";
export type RDSDBProjectedUtilizationMetrics = Array<RDSDBUtilizationMetric>;
export interface RDSDBRecommendation {
  resourceArn?: string;
  accountId?: string;
  engine?: string;
  engineVersion?: string;
  promotionTier?: number;
  currentDBInstanceClass?: string;
  currentStorageConfiguration?: DBStorageConfiguration;
  dbClusterIdentifier?: string;
  idle?: Idle;
  instanceFinding?: RDSInstanceFinding;
  storageFinding?: RDSStorageFinding;
  instanceFindingReasonCodes?: Array<RDSInstanceFindingReasonCode>;
  currentInstancePerformanceRisk?: RDSCurrentInstancePerformanceRisk;
  currentStorageEstimatedMonthlyVolumeIOPsCostVariation?: RDSEstimatedMonthlyVolumeIOPsCostVariation;
  storageFindingReasonCodes?: Array<RDSStorageFindingReasonCode>;
  instanceRecommendationOptions?: Array<RDSDBInstanceRecommendationOption>;
  storageRecommendationOptions?: Array<RDSDBStorageRecommendationOption>;
  utilizationMetrics?: Array<RDSDBUtilizationMetric>;
  effectiveRecommendationPreferences?: RDSEffectiveRecommendationPreferences;
  lookbackPeriodInDays?: number;
  lastRefreshTimestamp?: Date | string;
  tags?: Array<Tag>;
}
export interface RDSDBRecommendationFilter {
  name?: RDSDBRecommendationFilterName;
  values?: Array<string>;
}
export type RDSDBRecommendationFilterName =
  | "INSTANCE_FINDING"
  | "INSTANCE_FINDING_REASON_CODE"
  | "STORAGE_FINDING"
  | "STORAGE_FINDING_REASON_CODE"
  | "IDLE";
export type RDSDBRecommendationFilters = Array<RDSDBRecommendationFilter>;
export type RDSDBRecommendations = Array<RDSDBRecommendation>;
export interface RDSDBStorageRecommendationOption {
  storageConfiguration?: DBStorageConfiguration;
  rank?: number;
  savingsOpportunity?: SavingsOpportunity;
  savingsOpportunityAfterDiscounts?: RDSStorageSavingsOpportunityAfterDiscounts;
  estimatedMonthlyVolumeIOPsCostVariation?: RDSEstimatedMonthlyVolumeIOPsCostVariation;
}
export type RDSDBStorageRecommendationOptions =
  Array<RDSDBStorageRecommendationOption>;
export interface RDSDBUtilizationMetric {
  name?: RDSDBMetricName;
  statistic?: RDSDBMetricStatistic;
  value?: number;
}
export type RDSDBUtilizationMetrics = Array<RDSDBUtilizationMetric>;
export interface RDSEffectiveRecommendationPreferences {
  cpuVendorArchitectures?: Array<CpuVendorArchitecture>;
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics;
  lookBackPeriod?: LookBackPeriodPreference;
  savingsEstimationMode?: RDSSavingsEstimationMode;
}
export type RDSEstimatedMonthlyVolumeIOPsCostVariation =
  | "NONE"
  | "LOW"
  | "MEDIUM"
  | "HIGH";
export interface RDSInstanceEstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export type RDSInstanceFinding =
  | "OPTIMIZED"
  | "UNDER_PROVISIONED"
  | "OVER_PROVISIONED";
export type RDSInstanceFindingReasonCode =
  | "CPU_OVER_PROVISIONED"
  | "NETWORK_BANDWIDTH_OVER_PROVISIONED"
  | "EBS_IOPS_OVER_PROVISIONED"
  | "EBS_IOPS_UNDER_PROVISIONED"
  | "EBS_THROUGHPUT_OVER_PROVISIONED"
  | "CPU_UNDER_PROVISIONED"
  | "NETWORK_BANDWIDTH_UNDER_PROVISIONED"
  | "EBS_THROUGHPUT_UNDER_PROVISIONED"
  | "NEW_GENERATION_DB_INSTANCE_CLASS_AVAILABLE"
  | "NEW_ENGINE_VERSION_AVAILABLE"
  | "DB_CLUSTER_WRITER_UNDER_PROVISIONED"
  | "MEMORY_UNDER_PROVISIONED"
  | "INSTANCE_STORAGE_READ_IOPS_UNDER_PROVISIONED"
  | "INSTANCE_STORAGE_WRITE_IOPS_UNDER_PROVISIONED";
export type RDSInstanceFindingReasonCodes = Array<RDSInstanceFindingReasonCode>;
export interface RDSInstanceSavingsOpportunityAfterDiscounts {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: RDSInstanceEstimatedMonthlySavings;
}
export interface RDSSavingsEstimationMode {
  source?: RDSSavingsEstimationModeSource;
}
export type RDSSavingsEstimationModeSource =
  | "PUBLIC_PRICING"
  | "COST_EXPLORER_RIGHTSIZING"
  | "COST_OPTIMIZATION_HUB";
export interface RDSStorageEstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export type RDSStorageFinding =
  | "OPTIMIZED"
  | "UNDER_PROVISIONED"
  | "OVER_PROVISIONED"
  | "NOT_OPTIMIZED";
export type RDSStorageFindingReasonCode =
  | "EBS_VOLUME_ALLOCATED_STORAGE_UNDER_PROVISIONED"
  | "EBS_VOLUME_THROUGHPUT_UNDER_PROVISIONED"
  | "EBS_VOLUME_IOPS_OVER_PROVISIONED"
  | "EBS_VOLUME_THROUGHPUT_OVER_PROVISIONED"
  | "NEW_GENERATION_STORAGE_TYPE_AVAILABLE"
  | "DB_CLUSTER_STORAGE_OPTION_AVAILABLE"
  | "DB_CLUSTER_STORAGE_SAVINGS_AVAILABLE";
export type RDSStorageFindingReasonCodes = Array<RDSStorageFindingReasonCode>;
export interface RDSStorageSavingsOpportunityAfterDiscounts {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: RDSStorageEstimatedMonthlySavings;
}
export type ReasonCodeSummaries = Array<ReasonCodeSummary>;
export interface ReasonCodeSummary {
  name?: FindingReasonCode;
  value?: number;
}
export interface RecommendationExportJob {
  jobId?: string;
  destination?: ExportDestination;
  resourceType?: ResourceType;
  status?: JobStatus;
  creationTimestamp?: Date | string;
  lastUpdatedTimestamp?: Date | string;
  failureReason?: string;
}
export type RecommendationExportJobs = Array<RecommendationExportJob>;
export type RecommendationOptions = Array<InstanceRecommendationOption>;
export type RecommendationPreferenceName =
  | "ENHANCED_INFRASTRUCTURE_METRICS"
  | "INFERRED_WORKLOAD_TYPES"
  | "EXTERNAL_METRICS_PREFERENCE"
  | "LOOKBACK_PERIOD_PREFERENCE"
  | "PREFERRED_RESOURCES"
  | "UTILIZATION_PREFERENCES";
export type RecommendationPreferenceNames = Array<RecommendationPreferenceName>;
export interface RecommendationPreferences {
  cpuVendorArchitectures?: Array<CpuVendorArchitecture>;
}
export interface RecommendationPreferencesDetail {
  scope?: Scope;
  resourceType?: ResourceType;
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics;
  inferredWorkloadTypes?: InferredWorkloadTypesPreference;
  externalMetricsPreference?: ExternalMetricsPreference;
  lookBackPeriod?: LookBackPeriodPreference;
  utilizationPreferences?: Array<UtilizationPreference>;
  preferredResources?: Array<EffectivePreferredResource>;
  savingsEstimationMode?: SavingsEstimationMode;
}
export type RecommendationPreferencesDetails =
  Array<RecommendationPreferencesDetail>;
export interface RecommendationSource {
  recommendationSourceArn?: string;
  recommendationSourceType?: RecommendationSourceType;
}
export type RecommendationSourceArn = string;

export type RecommendationSources = Array<RecommendationSource>;
export type RecommendationSourceType =
  | "EC2_INSTANCE"
  | "AUTO_SCALING_GROUP"
  | "EBS_VOLUME"
  | "LAMBDA_FUNCTION"
  | "ECS_SERVICE"
  | "LICENSE"
  | "RDS_DB_INSTANCE"
  | "RDS_DB_INSTANCE_STORAGE"
  | "AURORA_DB_CLUSTER_STORAGE";
export type RecommendationSummaries = Array<RecommendationSummary>;
export interface RecommendationSummary {
  summaries?: Array<Summary>;
  idleSummaries?: Array<IdleSummary>;
  recommendationResourceType?: RecommendationSourceType;
  accountId?: string;
  savingsOpportunity?: SavingsOpportunity;
  idleSavingsOpportunity?: SavingsOpportunity;
  aggregatedSavingsOpportunity?: SavingsOpportunity;
  currentPerformanceRiskRatings?: CurrentPerformanceRiskRatings;
  inferredWorkloadSavings?: Array<InferredWorkloadSaving>;
}
export type RecommendedDBInstanceClass = string;

export type RecommendedInstanceType = string;

export interface RecommendedOptionProjectedMetric {
  recommendedInstanceType?: string;
  rank?: number;
  projectedMetrics?: Array<ProjectedMetric>;
}
export type RecommendedOptionProjectedMetrics =
  Array<RecommendedOptionProjectedMetric>;
export type ResourceArn = string;

export type ResourceArns = Array<string>;
export type ResourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResourceType =
  | "EC2_INSTANCE"
  | "AUTO_SCALING_GROUP"
  | "EBS_VOLUME"
  | "LAMBDA_FUNCTION"
  | "NOT_APPLICABLE"
  | "ECS_SERVICE"
  | "LICENSE"
  | "RDS_DB_INSTANCE"
  | "AURORA_DB_CLUSTER_STORAGE"
  | "IDLE";
export type RootVolume = boolean;

export interface S3Destination {
  bucket?: string;
  key?: string;
  metadataKey?: string;
}
export interface S3DestinationConfig {
  bucket?: string;
  keyPrefix?: string;
}
export type SavingsEstimationMode = "AFTER_DISCOUNTS" | "BEFORE_DISCOUNTS";
export interface SavingsOpportunity {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: EstimatedMonthlySavings;
}
export type SavingsOpportunityPercentage = number;

export interface Scope {
  name?: ScopeName;
  value?: string;
}
export type ScopeName = "ORGANIZATION" | "ACCOUNT_ID" | "RESOURCE_ARN";
export type ScopeValue = string;

export type ServiceArn = string;

export type ServiceArns = Array<string>;
export interface ServiceConfiguration {
  memory?: number;
  cpu?: number;
  containerConfigurations?: Array<ContainerConfiguration>;
  autoScalingConfiguration?: AutoScalingConfiguration;
  taskDefinitionArn?: string;
}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export type Status = "ACTIVE" | "INACTIVE" | "PENDING" | "FAILED";
export type StatusReason = string;

export type StorageType = string;

export type Summaries = Array<Summary>;
export interface Summary {
  name?: Finding;
  value?: number;
  reasonCodeSummaries?: Array<ReasonCodeSummary>;
}
export type SummaryValue = number;

export interface Tag {
  key?: string;
  value?: string;
}
export type TagKey = string;

export type Tags = Array<Tag>;
export type TagValue = string;

export type TaskDefinitionArn = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export type Timestamp = Date | string;

export type Timestamps = Array<Date | string>;
export interface UpdateEnrollmentStatusRequest {
  status: Status;
  includeMemberAccounts?: boolean;
}
export interface UpdateEnrollmentStatusResponse {
  status?: Status;
  statusReason?: string;
}
export type UpperBoundValue = number;

export interface UtilizationMetric {
  name?: MetricName;
  statistic?: MetricStatistic;
  value?: number;
}
export type UtilizationMetrics = Array<UtilizationMetric>;
export interface UtilizationPreference {
  metricName?: CustomizableMetricName;
  metricParameters?: CustomizableMetricParameters;
}
export type UtilizationPreferences = Array<UtilizationPreference>;
export type Value = number;

export type VeryLow = number;

export type VolumeArn = string;

export type VolumeArns = Array<string>;
export type VolumeBaselineIOPS = number;

export type VolumeBaselineThroughput = number;

export type VolumeBurstIOPS = number;

export type VolumeBurstThroughput = number;

export interface VolumeConfiguration {
  volumeType?: string;
  volumeSize?: number;
  volumeBaselineIOPS?: number;
  volumeBurstIOPS?: number;
  volumeBaselineThroughput?: number;
  volumeBurstThroughput?: number;
  rootVolume?: boolean;
}
export interface VolumeRecommendation {
  volumeArn?: string;
  accountId?: string;
  currentConfiguration?: VolumeConfiguration;
  finding?: EBSFinding;
  utilizationMetrics?: Array<EBSUtilizationMetric>;
  lookBackPeriodInDays?: number;
  volumeRecommendationOptions?: Array<VolumeRecommendationOption>;
  lastRefreshTimestamp?: Date | string;
  currentPerformanceRisk?: CurrentPerformanceRisk;
  effectiveRecommendationPreferences?: EBSEffectiveRecommendationPreferences;
  tags?: Array<Tag>;
}
export interface VolumeRecommendationOption {
  configuration?: VolumeConfiguration;
  performanceRisk?: number;
  rank?: number;
  savingsOpportunity?: SavingsOpportunity;
  savingsOpportunityAfterDiscounts?: EBSSavingsOpportunityAfterDiscounts;
}
export type VolumeRecommendationOptions = Array<VolumeRecommendationOption>;
export type VolumeRecommendations = Array<VolumeRecommendation>;
export type VolumeSize = number;

export type VolumeType = string;

export declare namespace DeleteRecommendationPreferences {
  export type Input = DeleteRecommendationPreferencesRequest;
  export type Output = DeleteRecommendationPreferencesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeRecommendationExportJobs {
  export type Input = DescribeRecommendationExportJobsRequest;
  export type Output = DescribeRecommendationExportJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ExportAutoScalingGroupRecommendations {
  export type Input = ExportAutoScalingGroupRecommendationsRequest;
  export type Output = ExportAutoScalingGroupRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ExportEBSVolumeRecommendations {
  export type Input = ExportEBSVolumeRecommendationsRequest;
  export type Output = ExportEBSVolumeRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ExportEC2InstanceRecommendations {
  export type Input = ExportEC2InstanceRecommendationsRequest;
  export type Output = ExportEC2InstanceRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ExportECSServiceRecommendations {
  export type Input = ExportECSServiceRecommendationsRequest;
  export type Output = ExportECSServiceRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ExportIdleRecommendations {
  export type Input = ExportIdleRecommendationsRequest;
  export type Output = ExportIdleRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ExportLambdaFunctionRecommendations {
  export type Input = ExportLambdaFunctionRecommendationsRequest;
  export type Output = ExportLambdaFunctionRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ExportLicenseRecommendations {
  export type Input = ExportLicenseRecommendationsRequest;
  export type Output = ExportLicenseRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ExportRDSDatabaseRecommendations {
  export type Input = ExportRDSDatabaseRecommendationsRequest;
  export type Output = ExportRDSDatabaseRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetAutoScalingGroupRecommendations {
  export type Input = GetAutoScalingGroupRecommendationsRequest;
  export type Output = GetAutoScalingGroupRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetEBSVolumeRecommendations {
  export type Input = GetEBSVolumeRecommendationsRequest;
  export type Output = GetEBSVolumeRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetEC2InstanceRecommendations {
  export type Input = GetEC2InstanceRecommendationsRequest;
  export type Output = GetEC2InstanceRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetEC2RecommendationProjectedMetrics {
  export type Input = GetEC2RecommendationProjectedMetricsRequest;
  export type Output = GetEC2RecommendationProjectedMetricsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetECSServiceRecommendationProjectedMetrics {
  export type Input = GetECSServiceRecommendationProjectedMetricsRequest;
  export type Output = GetECSServiceRecommendationProjectedMetricsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetECSServiceRecommendations {
  export type Input = GetECSServiceRecommendationsRequest;
  export type Output = GetECSServiceRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetEffectiveRecommendationPreferences {
  export type Input = GetEffectiveRecommendationPreferencesRequest;
  export type Output = GetEffectiveRecommendationPreferencesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetEnrollmentStatus {
  export type Input = GetEnrollmentStatusRequest;
  export type Output = GetEnrollmentStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetEnrollmentStatusesForOrganization {
  export type Input = GetEnrollmentStatusesForOrganizationRequest;
  export type Output = GetEnrollmentStatusesForOrganizationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetIdleRecommendations {
  export type Input = GetIdleRecommendationsRequest;
  export type Output = GetIdleRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetLambdaFunctionRecommendations {
  export type Input = GetLambdaFunctionRecommendationsRequest;
  export type Output = GetLambdaFunctionRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetLicenseRecommendations {
  export type Input = GetLicenseRecommendationsRequest;
  export type Output = GetLicenseRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetRDSDatabaseRecommendationProjectedMetrics {
  export type Input = GetRDSDatabaseRecommendationProjectedMetricsRequest;
  export type Output = GetRDSDatabaseRecommendationProjectedMetricsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetRDSDatabaseRecommendations {
  export type Input = GetRDSDatabaseRecommendationsRequest;
  export type Output = GetRDSDatabaseRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetRecommendationPreferences {
  export type Input = GetRecommendationPreferencesRequest;
  export type Output = GetRecommendationPreferencesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetRecommendationSummaries {
  export type Input = GetRecommendationSummariesRequest;
  export type Output = GetRecommendationSummariesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutRecommendationPreferences {
  export type Input = PutRecommendationPreferencesRequest;
  export type Output = PutRecommendationPreferencesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | OptInRequiredException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateEnrollmentStatus {
  export type Input = UpdateEnrollmentStatusRequest;
  export type Output = UpdateEnrollmentStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterValueException
    | MissingAuthenticationToken
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

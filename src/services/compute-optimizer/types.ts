import type { Effect, Data as EffectData } from "effect";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException;
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

export type AllocationStrategy = "Prioritized" | "LowestPrice";
export type AsgType = "SingleInstanceType" | "MixedInstanceTypes";
export type AutoScalingConfiguration =
  | "TargetTrackingScalingCpu"
  | "TargetTrackingScalingMemory";
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

export type CurrentPerformanceRisk = "VeryLow" | "Low" | "Medium" | "High";
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
export type CustomizableMetricName = "CpuUtilization" | "MemoryUtilization";
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

export type Dimension = "SavingsValue" | "SavingsValueAfterDiscount";
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
export type EBSFilterName = "Finding";
export type EBSFilters = Array<EBSFilter>;
export type EBSFinding = "Optimized" | "NotOptimized";
export type EBSMetricName =
  | "VolumeReadOpsPerSecond"
  | "VolumeWriteOpsPerSecond"
  | "VolumeReadBytesPerSecond"
  | "VolumeWriteBytesPerSecond";
export interface EBSSavingsEstimationMode {
  source?: EBSSavingsEstimationModeSource;
}
export type EBSSavingsEstimationModeSource =
  | "PublicPricing"
  | "CostExplorerRightsizing"
  | "CostOptimizationHub";
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
  | "PublicPricing"
  | "CostExplorerRightsizing"
  | "CostOptimizationHub";
export interface ECSSavingsOpportunityAfterDiscounts {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: ECSEstimatedMonthlySavings;
}
export type ECSServiceLaunchType = "EC2" | "Fargate";
export type ECSServiceMetricName = "Cpu" | "Memory";
export type ECSServiceMetricStatistic = "Maximum" | "Average";
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
  | "Finding"
  | "FindingReasonCode";
export type ECSServiceRecommendationFilters =
  Array<ECSServiceRecommendationFilter>;
export type ECSServiceRecommendationFinding =
  | "Optimized"
  | "Underprovisioned"
  | "Overprovisioned";
export type ECSServiceRecommendationFindingReasonCode =
  | "MemoryOverprovisioned"
  | "MemoryUnderprovisioned"
  | "CPUOverprovisioned"
  | "CPUUnderprovisioned";
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

export type EnhancedInfrastructureMetrics = "Active" | "Inactive";
export interface EnrollmentFilter {
  name?: EnrollmentFilterName;
  values?: Array<string>;
}
export type EnrollmentFilterName = "Status";
export type EnrollmentFilters = Array<EnrollmentFilter>;
export type ErrorMessage = string;

export interface EstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export type ExportableAutoScalingGroupField =
  | "AccountId"
  | "AutoScalingGroupArn"
  | "AutoScalingGroupName"
  | "Finding"
  | "UtilizationMetricsCpuMaximum"
  | "UtilizationMetricsMemoryMaximum"
  | "UtilizationMetricsEbsReadOpsPerSecondMaximum"
  | "UtilizationMetricsEbsWriteOpsPerSecondMaximum"
  | "UtilizationMetricsEbsReadBytesPerSecondMaximum"
  | "UtilizationMetricsEbsWriteBytesPerSecondMaximum"
  | "UtilizationMetricsDiskReadOpsPerSecondMaximum"
  | "UtilizationMetricsDiskWriteOpsPerSecondMaximum"
  | "UtilizationMetricsDiskReadBytesPerSecondMaximum"
  | "UtilizationMetricsDiskWriteBytesPerSecondMaximum"
  | "UtilizationMetricsNetworkInBytesPerSecondMaximum"
  | "UtilizationMetricsNetworkOutBytesPerSecondMaximum"
  | "UtilizationMetricsNetworkPacketsInPerSecondMaximum"
  | "UtilizationMetricsNetworkPacketsOutPerSecondMaximum"
  | "LookbackPeriodInDays"
  | "CurrentConfigurationInstanceType"
  | "CurrentConfigurationDesiredCapacity"
  | "CurrentConfigurationMinSize"
  | "CurrentConfigurationMaxSize"
  | "CurrentConfigurationAllocationStrategy"
  | "CurrentConfigurationMixedInstanceTypes"
  | "CurrentConfigurationType"
  | "CurrentOnDemandPrice"
  | "CurrentStandardOneYearNoUpfrontReservedPrice"
  | "CurrentStandardThreeYearNoUpfrontReservedPrice"
  | "CurrentVCpus"
  | "CurrentMemory"
  | "CurrentStorage"
  | "CurrentNetwork"
  | "RecommendationOptionsConfigurationInstanceType"
  | "RecommendationOptionsConfigurationDesiredCapacity"
  | "RecommendationOptionsConfigurationMinSize"
  | "RecommendationOptionsConfigurationMaxSize"
  | "RecommendationOptionsConfigurationEstimatedInstanceHourReductionPercentage"
  | "RecommendationOptionsConfigurationAllocationStrategy"
  | "RecommendationOptionsConfigurationMixedInstanceTypes"
  | "RecommendationOptionsConfigurationType"
  | "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum"
  | "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum"
  | "RecommendationOptionsPerformanceRisk"
  | "RecommendationOptionsOnDemandPrice"
  | "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice"
  | "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice"
  | "RecommendationOptionsVcpus"
  | "RecommendationOptionsMemory"
  | "RecommendationOptionsStorage"
  | "RecommendationOptionsNetwork"
  | "LastRefreshTimestamp"
  | "CurrentPerformanceRisk"
  | "RecommendationOptionsSavingsOpportunityPercentage"
  | "RecommendationOptionsEstimatedMonthlySavingsCurrency"
  | "RecommendationOptionsEstimatedMonthlySavingsValue"
  | "EffectiveRecommendationPreferencesCpuVendorArchitectures"
  | "EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics"
  | "EffectiveRecommendationPreferencesInferredWorkloadTypes"
  | "EffectiveRecommendationPreferencesPreferredResources"
  | "EffectiveRecommendationPreferencesLookBackPeriod"
  | "InferredWorkloadTypes"
  | "RecommendationOptionsMigrationEffort"
  | "CurrentInstanceGpuInfo"
  | "RecommendationOptionsInstanceGpuInfo"
  | "UtilizationMetricsGpuPercentageMaximum"
  | "UtilizationMetricsGpuMemoryPercentageMaximum"
  | "RecommendationOptionsProjectedUtilizationMetricsGpuPercentageMaximum"
  | "RecommendationOptionsProjectedUtilizationMetricsGpuMemoryPercentageMaximum"
  | "EffectiveRecommendationPreferencesSavingsEstimationMode"
  | "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage"
  | "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts"
  | "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts";
export type ExportableAutoScalingGroupFields =
  Array<ExportableAutoScalingGroupField>;
export type ExportableECSServiceField =
  | "AccountId"
  | "ServiceArn"
  | "LookbackPeriodInDays"
  | "LastRefreshTimestamp"
  | "LaunchType"
  | "CurrentPerformanceRisk"
  | "CurrentServiceConfigurationMemory"
  | "CurrentServiceConfigurationCpu"
  | "CurrentServiceConfigurationTaskDefinitionArn"
  | "CurrentServiceConfigurationAutoScalingConfiguration"
  | "CurrentServiceContainerConfigurations"
  | "UtilizationMetricsCpuMaximum"
  | "UtilizationMetricsMemoryMaximum"
  | "Finding"
  | "FindingReasonCodes"
  | "RecommendationOptionsMemory"
  | "RecommendationOptionsCpu"
  | "RecommendationOptionsSavingsOpportunityPercentage"
  | "RecommendationOptionsEstimatedMonthlySavingsCurrency"
  | "RecommendationOptionsEstimatedMonthlySavingsValue"
  | "RecommendationOptionsContainerRecommendations"
  | "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum"
  | "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum"
  | "Tags"
  | "EffectiveRecommendationPreferencesSavingsEstimationMode"
  | "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage"
  | "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts"
  | "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts";
export type ExportableECSServiceFields = Array<ExportableECSServiceField>;
export type ExportableIdleField =
  | "AccountId"
  | "ResourceArn"
  | "ResourceId"
  | "ResourceType"
  | "LastRefreshTimestamp"
  | "LookbackPeriodInDays"
  | "SavingsOpportunity"
  | "SavingsOpportunityAfterDiscount"
  | "UtilizationMetricsCpuMaximum"
  | "UtilizationMetricsMemoryMaximum"
  | "UtilizationMetricsNetworkOutBytesPerSecondMaximum"
  | "UtilizationMetricsNetworkInBytesPerSecondMaximum"
  | "UtilizationMetricsDatabaseConnectionsMaximum"
  | "UtilizationMetricsEBSVolumeReadIOPSMaximum"
  | "UtilizationMetricsEBSVolumeWriteIOPSMaximum"
  | "UtilizationMetricsVolumeReadOpsPerSecondMaximum"
  | "UtilizationMetricsVolumeWriteOpsPerSecondMaximum"
  | "Finding"
  | "FindingDescription"
  | "Tags";
export type ExportableIdleFields = Array<ExportableIdleField>;
export type ExportableInstanceField =
  | "AccountId"
  | "InstanceArn"
  | "InstanceName"
  | "Finding"
  | "FindingReasonCodes"
  | "LookbackPeriodInDays"
  | "CurrentInstanceType"
  | "UtilizationMetricsCpuMaximum"
  | "UtilizationMetricsMemoryMaximum"
  | "UtilizationMetricsEbsReadOpsPerSecondMaximum"
  | "UtilizationMetricsEbsWriteOpsPerSecondMaximum"
  | "UtilizationMetricsEbsReadBytesPerSecondMaximum"
  | "UtilizationMetricsEbsWriteBytesPerSecondMaximum"
  | "UtilizationMetricsDiskReadOpsPerSecondMaximum"
  | "UtilizationMetricsDiskWriteOpsPerSecondMaximum"
  | "UtilizationMetricsDiskReadBytesPerSecondMaximum"
  | "UtilizationMetricsDiskWriteBytesPerSecondMaximum"
  | "UtilizationMetricsNetworkInBytesPerSecondMaximum"
  | "UtilizationMetricsNetworkOutBytesPerSecondMaximum"
  | "UtilizationMetricsNetworkPacketsInPerSecondMaximum"
  | "UtilizationMetricsNetworkPacketsOutPerSecondMaximum"
  | "CurrentOnDemandPrice"
  | "CurrentStandardOneYearNoUpfrontReservedPrice"
  | "CurrentStandardThreeYearNoUpfrontReservedPrice"
  | "CurrentVCpus"
  | "CurrentMemory"
  | "CurrentStorage"
  | "CurrentNetwork"
  | "RecommendationOptionsInstanceType"
  | "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum"
  | "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum"
  | "RecommendationOptionsPlatformDifferences"
  | "RecommendationOptionsPerformanceRisk"
  | "RecommendationOptionsVcpus"
  | "RecommendationOptionsMemory"
  | "RecommendationOptionsStorage"
  | "RecommendationOptionsNetwork"
  | "RecommendationOptionsOnDemandPrice"
  | "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice"
  | "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice"
  | "RecommendationsSourcesRecommendationSourceArn"
  | "RecommendationsSourcesRecommendationSourceType"
  | "LastRefreshTimestamp"
  | "CurrentPerformanceRisk"
  | "RecommendationOptionsSavingsOpportunityPercentage"
  | "RecommendationOptionsEstimatedMonthlySavingsCurrency"
  | "RecommendationOptionsEstimatedMonthlySavingsValue"
  | "EffectiveRecommendationPreferencesCpuVendorArchitectures"
  | "EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics"
  | "EffectiveRecommendationPreferencesInferredWorkloadTypes"
  | "InferredWorkloadTypes"
  | "RecommendationOptionsMigrationEffort"
  | "EffectiveRecommendationPreferencesExternalMetricsSource"
  | "Tags"
  | "InstanceState"
  | "ExternalMetricStatusCode"
  | "ExternalMetricStatusReason"
  | "CurrentInstanceGpuInfo"
  | "RecommendationOptionsInstanceGpuInfo"
  | "UtilizationMetricsGpuPercentageMaximum"
  | "UtilizationMetricsGpuMemoryPercentageMaximum"
  | "RecommendationOptionsProjectedUtilizationMetricsGpuPercentageMaximum"
  | "RecommendationOptionsProjectedUtilizationMetricsGpuMemoryPercentageMaximum"
  | "Idle"
  | "EffectiveRecommendationPreferencesPreferredResources"
  | "EffectiveRecommendationPreferencesLookBackPeriod"
  | "EffectiveRecommendationPreferencesUtilizationPreferences"
  | "EffectiveRecommendationPreferencesSavingsEstimationMode"
  | "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage"
  | "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts"
  | "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts";
export type ExportableInstanceFields = Array<ExportableInstanceField>;
export type ExportableLambdaFunctionField =
  | "AccountId"
  | "FunctionArn"
  | "FunctionVersion"
  | "Finding"
  | "FindingReasonCodes"
  | "NumberOfInvocations"
  | "UtilizationMetricsDurationMaximum"
  | "UtilizationMetricsDurationAverage"
  | "UtilizationMetricsMemoryMaximum"
  | "UtilizationMetricsMemoryAverage"
  | "LookbackPeriodInDays"
  | "CurrentConfigurationMemorySize"
  | "CurrentConfigurationTimeout"
  | "CurrentCostTotal"
  | "CurrentCostAverage"
  | "RecommendationOptionsConfigurationMemorySize"
  | "RecommendationOptionsCostLow"
  | "RecommendationOptionsCostHigh"
  | "RecommendationOptionsProjectedUtilizationMetricsDurationLowerBound"
  | "RecommendationOptionsProjectedUtilizationMetricsDurationUpperBound"
  | "RecommendationOptionsProjectedUtilizationMetricsDurationExpected"
  | "LastRefreshTimestamp"
  | "CurrentPerformanceRisk"
  | "RecommendationOptionsSavingsOpportunityPercentage"
  | "RecommendationOptionsEstimatedMonthlySavingsCurrency"
  | "RecommendationOptionsEstimatedMonthlySavingsValue"
  | "Tags"
  | "EffectiveRecommendationPreferencesSavingsEstimationMode"
  | "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage"
  | "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts"
  | "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts";
export type ExportableLambdaFunctionFields =
  Array<ExportableLambdaFunctionField>;
export type ExportableLicenseField =
  | "AccountId"
  | "ResourceArn"
  | "LookbackPeriodInDays"
  | "LastRefreshTimestamp"
  | "Finding"
  | "FindingReasonCodes"
  | "CurrentLicenseConfigurationNumberOfCores"
  | "CurrentLicenseConfigurationInstanceType"
  | "CurrentLicenseConfigurationOperatingSystem"
  | "CurrentLicenseConfigurationLicenseName"
  | "CurrentLicenseConfigurationLicenseEdition"
  | "CurrentLicenseConfigurationLicenseModel"
  | "CurrentLicenseConfigurationLicenseVersion"
  | "CurrentLicenseConfigurationMetricsSource"
  | "RecommendationOptionsOperatingSystem"
  | "RecommendationOptionsLicenseEdition"
  | "RecommendationOptionsLicenseModel"
  | "RecommendationOptionsSavingsOpportunityPercentage"
  | "RecommendationOptionsEstimatedMonthlySavingsCurrency"
  | "RecommendationOptionsEstimatedMonthlySavingsValue"
  | "Tags";
export type ExportableLicenseFields = Array<ExportableLicenseField>;
export type ExportableRDSDBField =
  | "ResourceArn"
  | "AccountId"
  | "Engine"
  | "EngineVersion"
  | "Idle"
  | "MultiAZDBInstance"
  | "ClusterWriter"
  | "CurrentDBInstanceClass"
  | "CurrentStorageConfigurationStorageType"
  | "CurrentStorageConfigurationAllocatedStorage"
  | "CurrentStorageConfigurationMaxAllocatedStorage"
  | "CurrentStorageConfigurationIOPS"
  | "CurrentStorageConfigurationStorageThroughput"
  | "CurrentStorageEstimatedMonthlyVolumeIOPsCostVariation"
  | "CurrentInstanceOnDemandHourlyPrice"
  | "CurrentStorageOnDemandMonthlyPrice"
  | "LookbackPeriodInDays"
  | "CurrentStorageEstimatedClusterInstanceOnDemandMonthlyCost"
  | "CurrentStorageEstimatedClusterStorageOnDemandMonthlyCost"
  | "CurrentStorageEstimatedClusterStorageIOOnDemandMonthlyCost"
  | "CurrentInstancePerformanceRisk"
  | "UtilizationMetricsCpuMaximum"
  | "UtilizationMetricsMemoryMaximum"
  | "UtilizationMetricsEBSVolumeStorageSpaceUtilizationMaximum"
  | "UtilizationMetricsNetworkReceiveThroughputMaximum"
  | "UtilizationMetricsNetworkTransmitThroughputMaximum"
  | "UtilizationMetricsEBSVolumeReadIOPSMaximum"
  | "UtilizationMetricsEBSVolumeWriteIOPSMaximum"
  | "UtilizationMetricsEBSVolumeReadThroughputMaximum"
  | "UtilizationMetricsEBSVolumeWriteThroughputMaximum"
  | "UtilizationMetricsDatabaseConnectionsMaximum"
  | "UtilizationMetricsStorageNetworkReceiveThroughputMaximum"
  | "UtilizationMetricsStorageNetworkTransmitThroughputMaximum"
  | "UtilizationMetricsAuroraMemoryHealthStateMaximum"
  | "UtilizationMetricsAuroraMemoryNumDeclinedSqlTotalMaximum"
  | "UtilizationMetricsAuroraMemoryNumKillConnTotalMaximum"
  | "UtilizationMetricsAuroraMemoryNumKillQueryTotalMaximum"
  | "UtilizationMetricsReadIOPSEphemeralStorageMaximum"
  | "UtilizationMetricsWriteIOPSEphemeralStorageMaximum"
  | "UtilizationMetricsVolumeBytesUsedAverage"
  | "UtilizationMetricsVolumeReadIOPsAverage"
  | "UtilizationMetricsVolumeWriteIOPsAverage"
  | "InstanceFinding"
  | "InstanceFindingReasonCodes"
  | "StorageFinding"
  | "StorageFindingReasonCodes"
  | "InstanceRecommendationOptionsDBInstanceClass"
  | "InstanceRecommendationOptionsRank"
  | "InstanceRecommendationOptionsPerformanceRisk"
  | "InstanceRecommendationOptionsProjectedUtilizationMetricsCpuMaximum"
  | "StorageRecommendationOptionsStorageType"
  | "StorageRecommendationOptionsAllocatedStorage"
  | "StorageRecommendationOptionsMaxAllocatedStorage"
  | "StorageRecommendationOptionsIOPS"
  | "StorageRecommendationOptionsStorageThroughput"
  | "StorageRecommendationOptionsRank"
  | "StorageRecommendationOptionsEstimatedMonthlyVolumeIOPsCostVariation"
  | "InstanceRecommendationOptionsInstanceOnDemandHourlyPrice"
  | "InstanceRecommendationOptionsSavingsOpportunityPercentage"
  | "InstanceRecommendationOptionsEstimatedMonthlySavingsCurrency"
  | "InstanceRecommendationOptionsEstimatedMonthlySavingsValue"
  | "InstanceRecommendationOptionsSavingsOpportunityAfterDiscountsPercentage"
  | "InstanceRecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts"
  | "InstanceRecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts"
  | "StorageRecommendationOptionsOnDemandMonthlyPrice"
  | "StorageRecommendationOptionsEstimatedClusterInstanceOnDemandMonthlyCost"
  | "StorageRecommendationOptionsEstimatedClusterStorageOnDemandMonthlyCost"
  | "StorageRecommendationOptionsEstimatedClusterStorageIOOnDemandMonthlyCost"
  | "StorageRecommendationOptionsSavingsOpportunityPercentage"
  | "StorageRecommendationOptionsEstimatedMonthlySavingsCurrency"
  | "StorageRecommendationOptionsEstimatedMonthlySavingsValue"
  | "StorageRecommendationOptionsSavingsOpportunityAfterDiscountsPercentage"
  | "StorageRecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts"
  | "StorageRecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts"
  | "EffectiveRecommendationPreferencesCpuVendorArchitectures"
  | "EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics"
  | "EffectiveRecommendationPreferencesLookBackPeriod"
  | "EffectiveRecommendationPreferencesSavingsEstimationMode"
  | "LastRefreshTimestamp"
  | "Tags"
  | "DBClusterIdentifier"
  | "PromotionTier";
export type ExportableRDSDBFields = Array<ExportableRDSDBField>;
export type ExportableVolumeField =
  | "AccountId"
  | "VolumeArn"
  | "Finding"
  | "UtilizationMetricsVolumeReadOpsPerSecondMaximum"
  | "UtilizationMetricsVolumeWriteOpsPerSecondMaximum"
  | "UtilizationMetricsVolumeReadBytesPerSecondMaximum"
  | "UtilizationMetricsVolumeWriteBytesPerSecondMaximum"
  | "LookbackPeriodInDays"
  | "CurrentConfigurationVolumeType"
  | "CurrentConfigurationVolumeBaselineIOPS"
  | "CurrentConfigurationVolumeBaselineThroughput"
  | "CurrentConfigurationVolumeBurstIOPS"
  | "CurrentConfigurationVolumeBurstThroughput"
  | "CurrentConfigurationVolumeSize"
  | "CurrentMonthlyPrice"
  | "RecommendationOptionsConfigurationVolumeType"
  | "RecommendationOptionsConfigurationVolumeBaselineIOPS"
  | "RecommendationOptionsConfigurationVolumeBaselineThroughput"
  | "RecommendationOptionsConfigurationVolumeBurstIOPS"
  | "RecommendationOptionsConfigurationVolumeBurstThroughput"
  | "RecommendationOptionsConfigurationVolumeSize"
  | "RecommendationOptionsMonthlyPrice"
  | "RecommendationOptionsPerformanceRisk"
  | "LastRefreshTimestamp"
  | "CurrentPerformanceRisk"
  | "RecommendationOptionsSavingsOpportunityPercentage"
  | "RecommendationOptionsEstimatedMonthlySavingsCurrency"
  | "RecommendationOptionsEstimatedMonthlySavingsValue"
  | "Tags"
  | "RootVolume"
  | "CurrentConfigurationRootVolume"
  | "EffectiveRecommendationPreferencesSavingsEstimationMode"
  | "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage"
  | "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts"
  | "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts";
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
  | "Datadog"
  | "Dynatrace"
  | "NewRelic"
  | "Instana";
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

export type FileFormat = "Csv";
export interface Filter {
  name?: FilterName;
  values?: Array<string>;
}
export type FilterName =
  | "Finding"
  | "FindingReasonCodes"
  | "RecommendationSourceType"
  | "InferredWorkloadTypes";
export type Filters = Array<Filter>;
export type FilterValue = string;

export type FilterValues = Array<string>;
export type Finding =
  | "Underprovisioned"
  | "Overprovisioned"
  | "Optimized"
  | "NotOptimized";
export type FindingReasonCode =
  | "MemoryOverprovisioned"
  | "MemoryUnderprovisioned";
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

export type Idle = "True" | "False";
export interface IdleEstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export type IdleFinding = "Idle" | "Unattached";
export type IdleFindingDescription = string;

export type IdleMaxResults = number;

export type IdleMetricName =
  | "CPU"
  | "Memory"
  | "NetworkOutBytesPerSecond"
  | "NetworkInBytesPerSecond"
  | "DatabaseConnections"
  | "EBSVolumeReadIOPS"
  | "EBSVolumeWriteIOPS"
  | "VolumeReadOpsPerSecond"
  | "VolumeWriteOpsPerSecond";
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
export type IdleRecommendationFilterName = "Finding" | "ResourceType";
export type IdleRecommendationFilters = Array<IdleRecommendationFilter>;
export type IdleRecommendationResourceType =
  | "EC2Instance"
  | "AutoScalingGroup"
  | "EBSVolume"
  | "ECSService"
  | "RDSDBInstance";
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
  | "AmazonEmr"
  | "ApacheCassandra"
  | "ApacheHadoop"
  | "Memcached"
  | "Nginx"
  | "PostgreSql"
  | "Redis"
  | "Kafka"
  | "SQLServer";
export type InferredWorkloadTypes = Array<InferredWorkloadType>;
export type InferredWorkloadTypesPreference = "Active" | "Inactive";
export type InstanceArn = string;

export type InstanceArns = Array<string>;
export interface InstanceEstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export type InstanceIdle = "True" | "False";
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
  | "CPUOverprovisioned"
  | "CPUUnderprovisioned"
  | "MemoryOverprovisioned"
  | "MemoryUnderprovisioned"
  | "EBSThroughputOverprovisioned"
  | "EBSThroughputUnderprovisioned"
  | "EBSIOPSOverprovisioned"
  | "EBSIOPSUnderprovisioned"
  | "NetworkBandwidthOverprovisioned"
  | "NetworkBandwidthUnderprovisioned"
  | "NetworkPPSOverprovisioned"
  | "NetworkPPSUnderprovisioned"
  | "DiskIOPSOverprovisioned"
  | "DiskIOPSUnderprovisioned"
  | "DiskThroughputOverprovisioned"
  | "DiskThroughputUnderprovisioned"
  | "GPUUnderprovisioned"
  | "GPUOverprovisioned"
  | "GPUMemoryUnderprovisioned"
  | "GPUMemoryOverprovisioned";
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
  | "PublicPricing"
  | "CostExplorerRightsizing"
  | "CostOptimizationHub";
export interface InstanceSavingsOpportunityAfterDiscounts {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: InstanceEstimatedMonthlySavings;
}
export type InstanceState =
  | "pending"
  | "running"
  | "shutting-down"
  | "terminated"
  | "stopping"
  | "stopped";
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
export type JobFilterName = "ResourceType" | "JobStatus";
export type JobFilters = Array<JobFilter>;
export type JobId = string;

export type JobIds = Array<string>;
export type JobStatus = "Queued" | "InProgress" | "Complete" | "Failed";
export interface LambdaEffectiveRecommendationPreferences {
  savingsEstimationMode?: LambdaSavingsEstimationMode;
}
export interface LambdaEstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export type LambdaFunctionMemoryMetricName = "Duration";
export type LambdaFunctionMemoryMetricStatistic =
  | "LowerBound"
  | "UpperBound"
  | "Expected";
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
export type LambdaFunctionMetricName = "Duration" | "Memory";
export type LambdaFunctionMetricStatistic = "Maximum" | "Average";
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
  | "Finding"
  | "FindingReasonCode";
export type LambdaFunctionRecommendationFilters =
  Array<LambdaFunctionRecommendationFilter>;
export type LambdaFunctionRecommendationFinding =
  | "Optimized"
  | "NotOptimized"
  | "Unavailable";
export type LambdaFunctionRecommendationFindingReasonCode =
  | "MemoryOverprovisioned"
  | "MemoryUnderprovisioned"
  | "InsufficientData"
  | "Inconclusive";
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
  | "PublicPricing"
  | "CostExplorerRightsizing"
  | "CostOptimizationHub";
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
  | "Enterprise"
  | "Standard"
  | "Free"
  | "NoLicenseEditionFound";
export type LicenseFinding =
  | "InsufficientMetrics"
  | "Optimized"
  | "NotOptimized";
export type LicenseFindingReasonCode =
  | "InvalidCloudWatchApplicationInsightsSetup"
  | "CloudWatchApplicationInsightsError"
  | "LicenseOverprovisioned"
  | "Optimized";
export type LicenseFindingReasonCodes = Array<LicenseFindingReasonCode>;
export type LicenseModel = "LicenseIncluded" | "BringYourOwnLicense";
export type LicenseName = "SQLServer";
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
  | "Finding"
  | "FindingReasonCode"
  | "LicenseName";
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
  | "Cpu"
  | "Memory"
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
export type MetricSourceProvider = "CloudWatchApplicationInsights";
export type MetricsSource = Array<MetricSource>;
export type MetricStatistic = "Maximum" | "Average";
export type MetricValue = number;

export type MetricValues = Array<number>;
export type MigrationEffort = "VeryLow" | "Low" | "Medium" | "High";
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
export type Order = "Asc" | "Desc";
export interface OrderBy {
  dimension?: Dimension;
  order?: Order;
}
export type PerformanceRisk = number;

export type Period = number;

export type PlatformDifference =
  | "Hypervisor"
  | "NetworkInterface"
  | "StorageInterface"
  | "InstanceStoreAvailability"
  | "VirtualizationType"
  | "Architecture";
export type PlatformDifferences = Array<PlatformDifference>;
export interface PreferredResource {
  name?: PreferredResourceName;
  includeList?: Array<string>;
  excludeList?: Array<string>;
}
export type PreferredResourceName = "Ec2InstanceTypes";
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
  | "VeryLow"
  | "Low"
  | "Medium"
  | "High";
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
  | "Memory"
  | "EBSVolumeStorageSpaceUtilization"
  | "NetworkReceiveThroughput"
  | "NetworkTransmitThroughput"
  | "EBSVolumeReadIOPS"
  | "EBSVolumeWriteIOPS"
  | "EBSVolumeReadThroughput"
  | "EBSVolumeWriteThroughput"
  | "DatabaseConnections"
  | "StorageNetworkReceiveThroughput"
  | "StorageNetworkTransmitThroughput"
  | "AuroraMemoryHealthState"
  | "AuroraMemoryNumDeclinedSql"
  | "AuroraMemoryNumKillConnTotal"
  | "AuroraMemoryNumKillQueryTotal"
  | "ReadIOPSEphemeralStorage"
  | "WriteIOPSEphemeralStorage"
  | "VolumeReadIOPs"
  | "VolumeBytesUsed"
  | "VolumeWriteIOPs";
export type RDSDBMetricStatistic = "Maximum" | "Minimum" | "Average";
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
  | "InstanceFinding"
  | "InstanceFindingReasonCode"
  | "StorageFinding"
  | "StorageFindingReasonCode"
  | "Idle";
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
  | "None"
  | "Low"
  | "Medium"
  | "High";
export interface RDSInstanceEstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export type RDSInstanceFinding =
  | "Optimized"
  | "Underprovisioned"
  | "Overprovisioned";
export type RDSInstanceFindingReasonCode =
  | "CPUOverprovisioned"
  | "NetworkBandwidthOverprovisioned"
  | "EBSIOPSOverprovisioned"
  | "EBSIOPSUnderprovisioned"
  | "EBSThroughputOverprovisioned"
  | "CPUUnderprovisioned"
  | "NetworkBandwidthUnderprovisioned"
  | "EBSThroughputUnderprovisioned"
  | "NewGenerationDBInstanceClassAvailable"
  | "NewEngineVersionAvailable"
  | "DBClusterWriterUnderprovisioned"
  | "MemoryUnderprovisioned"
  | "InstanceStorageReadIOPSUnderprovisioned"
  | "InstanceStorageWriteIOPSUnderprovisioned";
export type RDSInstanceFindingReasonCodes = Array<RDSInstanceFindingReasonCode>;
export interface RDSInstanceSavingsOpportunityAfterDiscounts {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: RDSInstanceEstimatedMonthlySavings;
}
export interface RDSSavingsEstimationMode {
  source?: RDSSavingsEstimationModeSource;
}
export type RDSSavingsEstimationModeSource =
  | "PublicPricing"
  | "CostExplorerRightsizing"
  | "CostOptimizationHub";
export interface RDSStorageEstimatedMonthlySavings {
  currency?: Currency;
  value?: number;
}
export type RDSStorageFinding =
  | "Optimized"
  | "Underprovisioned"
  | "Overprovisioned"
  | "NotOptimized";
export type RDSStorageFindingReasonCode =
  | "EBSVolumeAllocatedStorageUnderprovisioned"
  | "EBSVolumeThroughputUnderprovisioned"
  | "EBSVolumeIOPSOverprovisioned"
  | "EBSVolumeThroughputOverprovisioned"
  | "NewGenerationStorageTypeAvailable"
  | "DBClusterStorageOptionAvailable"
  | "DBClusterStorageSavingsAvailable";
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
  | "EnhancedInfrastructureMetrics"
  | "InferredWorkloadTypes"
  | "ExternalMetricsPreference"
  | "LookBackPeriodPreference"
  | "PreferredResources"
  | "UtilizationPreferences";
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
  | "Ec2Instance"
  | "AutoScalingGroup"
  | "EbsVolume"
  | "LambdaFunction"
  | "EcsService"
  | "License"
  | "RdsDBInstance"
  | "RdsDBInstanceStorage"
  | "AuroraDBClusterStorage";
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
  | "Ec2Instance"
  | "AutoScalingGroup"
  | "EbsVolume"
  | "LambdaFunction"
  | "NotApplicable"
  | "EcsService"
  | "License"
  | "RdsDBInstance"
  | "AuroraDBClusterStorage"
  | "Idle";
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
export type SavingsEstimationMode = "AfterDiscounts" | "BeforeDiscounts";
export interface SavingsOpportunity {
  savingsOpportunityPercentage?: number;
  estimatedMonthlySavings?: EstimatedMonthlySavings;
}
export type SavingsOpportunityPercentage = number;

export interface Scope {
  name?: ScopeName;
  value?: string;
}
export type ScopeName = "Organization" | "AccountId" | "ResourceArn";
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
export type Status = "Active" | "Inactive" | "Pending" | "Failed";
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

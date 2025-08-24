import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class CostOptimizationHub extends AWSServiceClient {
  getPreferences(
    input: GetPreferencesRequest,
  ): Effect.Effect<
    GetPreferencesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRecommendation(
    input: GetRecommendationRequest,
  ): Effect.Effect<
    GetRecommendationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEnrollmentStatuses(
    input: ListEnrollmentStatusesRequest,
  ): Effect.Effect<
    ListEnrollmentStatusesResponse,
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
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRecommendationSummaries(
    input: ListRecommendationSummariesRequest,
  ): Effect.Effect<
    ListRecommendationSummariesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEnrollmentStatus(
    input: UpdateEnrollmentStatusRequest,
  ): Effect.Effect<
    UpdateEnrollmentStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePreferences(
    input: UpdatePreferencesRequest,
  ): Effect.Effect<
    UpdatePreferencesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface AccountEnrollmentStatus {
  accountId?: string;
  status?: EnrollmentStatus;
  lastUpdatedTimestamp?: Date | string;
  createdTimestamp?: Date | string;
}
export type AccountEnrollmentStatuses = Array<AccountEnrollmentStatus>;
export type AccountId = string;

export type AccountIdList = Array<string>;
export type ActionType =
  | "Rightsize"
  | "Stop"
  | "Upgrade"
  | "PurchaseSavingsPlans"
  | "PurchaseReservedInstances"
  | "MigrateToGraviton"
  | "Delete"
  | "ScaleIn";
export type ActionTypeList = Array<ActionType>;
export type AllocationStrategy = "Prioritized" | "LowestPrice";
export interface AuroraDbClusterStorage {
  configuration?: AuroraDbClusterStorageConfiguration;
  costCalculation?: ResourceCostCalculation;
}
export interface AuroraDbClusterStorageConfiguration {
  storageType?: string;
}
export interface BlockStoragePerformanceConfiguration {
  iops?: number;
  throughput?: number;
}
export interface ComputeConfiguration {
  vCpu?: number;
  memorySizeInMB?: number;
  architecture?: string;
  platform?: string;
}
export interface ComputeSavingsPlans {
  configuration?: ComputeSavingsPlansConfiguration;
  costCalculation?: SavingsPlansCostCalculation;
}
export interface ComputeSavingsPlansConfiguration {
  accountScope?: string;
  term?: string;
  paymentOption?: string;
  hourlyCommitment?: string;
}
export type Datetime = Date | string;

export interface DbInstanceConfiguration {
  dbInstanceClass?: string;
}
export interface DynamoDbReservedCapacity {
  configuration?: DynamoDbReservedCapacityConfiguration;
  costCalculation?: ReservedInstancesCostCalculation;
}
export interface DynamoDbReservedCapacityConfiguration {
  accountScope?: string;
  service?: string;
  term?: string;
  paymentOption?: string;
  reservedInstancesRegion?: string;
  upfrontCost?: string;
  monthlyRecurringCost?: string;
  numberOfCapacityUnitsToPurchase?: string;
  capacityUnits?: string;
}
export interface EbsVolume {
  configuration?: EbsVolumeConfiguration;
  costCalculation?: ResourceCostCalculation;
}
export interface EbsVolumeConfiguration {
  storage?: StorageConfiguration;
  performance?: BlockStoragePerformanceConfiguration;
  attachmentState?: string;
}
export interface Ec2AutoScalingGroup {
  configuration?: Ec2AutoScalingGroupConfiguration;
  costCalculation?: ResourceCostCalculation;
}
export interface Ec2AutoScalingGroupConfiguration {
  instance?: InstanceConfiguration;
  mixedInstances?: Array<MixedInstanceConfiguration>;
  type?: Ec2AutoScalingGroupType;
  allocationStrategy?: AllocationStrategy;
}
export type Ec2AutoScalingGroupType =
  | "SingleInstanceType"
  | "MixedInstanceTypes";
export interface Ec2Instance {
  configuration?: Ec2InstanceConfiguration;
  costCalculation?: ResourceCostCalculation;
}
export interface Ec2InstanceConfiguration {
  instance?: InstanceConfiguration;
}
export interface Ec2InstanceSavingsPlans {
  configuration?: Ec2InstanceSavingsPlansConfiguration;
  costCalculation?: SavingsPlansCostCalculation;
}
export interface Ec2InstanceSavingsPlansConfiguration {
  accountScope?: string;
  term?: string;
  paymentOption?: string;
  hourlyCommitment?: string;
  instanceFamily?: string;
  savingsPlansRegion?: string;
}
export interface Ec2ReservedInstances {
  configuration?: Ec2ReservedInstancesConfiguration;
  costCalculation?: ReservedInstancesCostCalculation;
}
export interface Ec2ReservedInstancesConfiguration {
  accountScope?: string;
  service?: string;
  term?: string;
  paymentOption?: string;
  reservedInstancesRegion?: string;
  upfrontCost?: string;
  monthlyRecurringCost?: string;
  normalizedUnitsToPurchase?: string;
  numberOfInstancesToPurchase?: string;
  offeringClass?: string;
  instanceFamily?: string;
  instanceType?: string;
  currentGeneration?: string;
  platform?: string;
  tenancy?: string;
  sizeFlexEligible?: boolean;
}
export interface EcsService {
  configuration?: EcsServiceConfiguration;
  costCalculation?: ResourceCostCalculation;
}
export interface EcsServiceConfiguration {
  compute?: ComputeConfiguration;
}
export interface ElastiCacheReservedInstances {
  configuration?: ElastiCacheReservedInstancesConfiguration;
  costCalculation?: ReservedInstancesCostCalculation;
}
export interface ElastiCacheReservedInstancesConfiguration {
  accountScope?: string;
  service?: string;
  term?: string;
  paymentOption?: string;
  reservedInstancesRegion?: string;
  upfrontCost?: string;
  monthlyRecurringCost?: string;
  normalizedUnitsToPurchase?: string;
  numberOfInstancesToPurchase?: string;
  instanceFamily?: string;
  instanceType?: string;
  currentGeneration?: string;
  sizeFlexEligible?: boolean;
}
export type EnrollmentStatus = "Active" | "Inactive";
export interface EstimatedDiscounts {
  savingsPlansDiscount?: number;
  reservedInstancesDiscount?: number;
  otherDiscount?: number;
}
export interface Filter {
  restartNeeded?: boolean;
  rollbackPossible?: boolean;
  implementationEfforts?: Array<ImplementationEffort>;
  accountIds?: Array<string>;
  regions?: Array<string>;
  resourceTypes?: Array<ResourceType>;
  actionTypes?: Array<ActionType>;
  tags?: Array<Tag>;
  resourceIds?: Array<string>;
  resourceArns?: Array<string>;
  recommendationIds?: Array<string>;
}
export interface GetPreferencesRequest {}
export interface GetPreferencesResponse {
  savingsEstimationMode?: SavingsEstimationMode;
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
  preferredCommitment?: PreferredCommitment;
}
export interface GetRecommendationRequest {
  recommendationId: string;
}
export interface GetRecommendationResponse {
  recommendationId?: string;
  resourceId?: string;
  resourceArn?: string;
  accountId?: string;
  currencyCode?: string;
  recommendationLookbackPeriodInDays?: number;
  costCalculationLookbackPeriodInDays?: number;
  estimatedSavingsPercentage?: number;
  estimatedSavingsOverCostCalculationLookbackPeriod?: number;
  currentResourceType?: ResourceType;
  recommendedResourceType?: ResourceType;
  region?: string;
  source?: Source;
  lastRefreshTimestamp?: Date | string;
  estimatedMonthlySavings?: number;
  estimatedMonthlyCost?: number;
  implementationEffort?: ImplementationEffort;
  restartNeeded?: boolean;
  actionType?: ActionType;
  rollbackPossible?: boolean;
  currentResourceDetails?: ResourceDetails;
  recommendedResourceDetails?: ResourceDetails;
  tags?: Array<Tag>;
}
export type ImplementationEffort =
  | "VeryLow"
  | "Low"
  | "Medium"
  | "High"
  | "VeryHigh";
export type ImplementationEffortList = Array<ImplementationEffort>;
export interface InstanceConfiguration {
  type?: string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface LambdaFunction {
  configuration?: LambdaFunctionConfiguration;
  costCalculation?: ResourceCostCalculation;
}
export interface LambdaFunctionConfiguration {
  compute?: ComputeConfiguration;
}
export interface ListEnrollmentStatusesRequest {
  includeOrganizationInfo?: boolean;
  accountId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListEnrollmentStatusesResponse {
  items?: Array<AccountEnrollmentStatus>;
  includeMemberAccounts?: boolean;
  nextToken?: string;
}
export interface ListRecommendationsRequest {
  filter?: Filter;
  orderBy?: OrderBy;
  includeAllRecommendations?: boolean;
  maxResults?: number;
  nextToken?: string;
}
export interface ListRecommendationsResponse {
  items?: Array<Recommendation>;
  nextToken?: string;
}
export interface ListRecommendationSummariesRequest {
  filter?: Filter;
  groupBy: string;
  maxResults?: number;
  metrics?: Array<SummaryMetrics>;
  nextToken?: string;
}
export interface ListRecommendationSummariesResponse {
  estimatedTotalDedupedSavings?: number;
  items?: Array<RecommendationSummary>;
  groupBy?: string;
  currencyCode?: string;
  metrics?: SummaryMetricsResult;
  nextToken?: string;
}
export type MaxResults = number;

export type MemberAccountDiscountVisibility = "All" | "None";
export interface MemoryDbReservedInstances {
  configuration?: MemoryDbReservedInstancesConfiguration;
  costCalculation?: ReservedInstancesCostCalculation;
}
export interface MemoryDbReservedInstancesConfiguration {
  accountScope?: string;
  service?: string;
  term?: string;
  paymentOption?: string;
  reservedInstancesRegion?: string;
  upfrontCost?: string;
  monthlyRecurringCost?: string;
  normalizedUnitsToPurchase?: string;
  numberOfInstancesToPurchase?: string;
  instanceType?: string;
  instanceFamily?: string;
  sizeFlexEligible?: boolean;
  currentGeneration?: string;
}
export interface MixedInstanceConfiguration {
  type?: string;
}
export type MixedInstanceConfigurationList = Array<MixedInstanceConfiguration>;
export interface OpenSearchReservedInstances {
  configuration?: OpenSearchReservedInstancesConfiguration;
  costCalculation?: ReservedInstancesCostCalculation;
}
export interface OpenSearchReservedInstancesConfiguration {
  accountScope?: string;
  service?: string;
  term?: string;
  paymentOption?: string;
  reservedInstancesRegion?: string;
  upfrontCost?: string;
  monthlyRecurringCost?: string;
  normalizedUnitsToPurchase?: string;
  numberOfInstancesToPurchase?: string;
  instanceType?: string;
  currentGeneration?: string;
  sizeFlexEligible?: boolean;
}
export type Order = "Asc" | "Desc";
export interface OrderBy {
  dimension?: string;
  order?: Order;
}
export type PaymentOption = "AllUpfront" | "PartialUpfront" | "NoUpfront";
export interface PreferredCommitment {
  term?: Term;
  paymentOption?: PaymentOption;
}
export interface RdsDbInstance {
  configuration?: RdsDbInstanceConfiguration;
  costCalculation?: ResourceCostCalculation;
}
export interface RdsDbInstanceConfiguration {
  instance?: DbInstanceConfiguration;
}
export interface RdsDbInstanceStorage {
  configuration?: RdsDbInstanceStorageConfiguration;
  costCalculation?: ResourceCostCalculation;
}
export interface RdsDbInstanceStorageConfiguration {
  storageType?: string;
  allocatedStorageInGb?: number;
  iops?: number;
  storageThroughput?: number;
}
export interface RdsReservedInstances {
  configuration?: RdsReservedInstancesConfiguration;
  costCalculation?: ReservedInstancesCostCalculation;
}
export interface RdsReservedInstancesConfiguration {
  accountScope?: string;
  service?: string;
  term?: string;
  paymentOption?: string;
  reservedInstancesRegion?: string;
  upfrontCost?: string;
  monthlyRecurringCost?: string;
  normalizedUnitsToPurchase?: string;
  numberOfInstancesToPurchase?: string;
  instanceFamily?: string;
  instanceType?: string;
  sizeFlexEligible?: boolean;
  currentGeneration?: string;
  licenseModel?: string;
  databaseEdition?: string;
  databaseEngine?: string;
  deploymentOption?: string;
}
export interface Recommendation {
  recommendationId?: string;
  accountId?: string;
  region?: string;
  resourceId?: string;
  resourceArn?: string;
  currentResourceType?: string;
  recommendedResourceType?: string;
  estimatedMonthlySavings?: number;
  estimatedSavingsPercentage?: number;
  estimatedMonthlyCost?: number;
  currencyCode?: string;
  implementationEffort?: string;
  restartNeeded?: boolean;
  actionType?: string;
  rollbackPossible?: boolean;
  currentResourceSummary?: string;
  recommendedResourceSummary?: string;
  lastRefreshTimestamp?: Date | string;
  recommendationLookbackPeriodInDays?: number;
  source?: Source;
  tags?: Array<Tag>;
}
export type RecommendationIdList = Array<string>;
export type RecommendationList = Array<Recommendation>;
export type RecommendationSummariesList = Array<RecommendationSummary>;
export interface RecommendationSummary {
  group?: string;
  estimatedMonthlySavings?: number;
  recommendationCount?: number;
}
export interface RedshiftReservedInstances {
  configuration?: RedshiftReservedInstancesConfiguration;
  costCalculation?: ReservedInstancesCostCalculation;
}
export interface RedshiftReservedInstancesConfiguration {
  accountScope?: string;
  service?: string;
  term?: string;
  paymentOption?: string;
  reservedInstancesRegion?: string;
  upfrontCost?: string;
  monthlyRecurringCost?: string;
  normalizedUnitsToPurchase?: string;
  numberOfInstancesToPurchase?: string;
  instanceFamily?: string;
  instanceType?: string;
  sizeFlexEligible?: boolean;
  currentGeneration?: string;
}
export type RegionList = Array<string>;
export interface ReservedInstancesCostCalculation {
  pricing?: ReservedInstancesPricing;
}
export interface ReservedInstancesPricing {
  estimatedOnDemandCost?: number;
  monthlyReservationEligibleCost?: number;
  savingsPercentage?: number;
  estimatedMonthlyAmortizedReservationCost?: number;
}
export type ResourceArnList = Array<string>;
export interface ResourceCostCalculation {
  usages?: Array<Usage>;
  pricing?: ResourcePricing;
}
interface _ResourceDetails {
  lambdaFunction?: LambdaFunction;
  ecsService?: EcsService;
  ec2Instance?: Ec2Instance;
  ebsVolume?: EbsVolume;
  ec2AutoScalingGroup?: Ec2AutoScalingGroup;
  ec2ReservedInstances?: Ec2ReservedInstances;
  rdsReservedInstances?: RdsReservedInstances;
  elastiCacheReservedInstances?: ElastiCacheReservedInstances;
  openSearchReservedInstances?: OpenSearchReservedInstances;
  redshiftReservedInstances?: RedshiftReservedInstances;
  ec2InstanceSavingsPlans?: Ec2InstanceSavingsPlans;
  computeSavingsPlans?: ComputeSavingsPlans;
  sageMakerSavingsPlans?: SageMakerSavingsPlans;
  rdsDbInstance?: RdsDbInstance;
  rdsDbInstanceStorage?: RdsDbInstanceStorage;
  auroraDbClusterStorage?: AuroraDbClusterStorage;
  dynamoDbReservedCapacity?: DynamoDbReservedCapacity;
  memoryDbReservedInstances?: MemoryDbReservedInstances;
}

export type ResourceDetails =
  | (_ResourceDetails & { lambdaFunction: LambdaFunction })
  | (_ResourceDetails & { ecsService: EcsService })
  | (_ResourceDetails & { ec2Instance: Ec2Instance })
  | (_ResourceDetails & { ebsVolume: EbsVolume })
  | (_ResourceDetails & { ec2AutoScalingGroup: Ec2AutoScalingGroup })
  | (_ResourceDetails & { ec2ReservedInstances: Ec2ReservedInstances })
  | (_ResourceDetails & { rdsReservedInstances: RdsReservedInstances })
  | (_ResourceDetails & {
      elastiCacheReservedInstances: ElastiCacheReservedInstances;
    })
  | (_ResourceDetails & {
      openSearchReservedInstances: OpenSearchReservedInstances;
    })
  | (_ResourceDetails & {
      redshiftReservedInstances: RedshiftReservedInstances;
    })
  | (_ResourceDetails & { ec2InstanceSavingsPlans: Ec2InstanceSavingsPlans })
  | (_ResourceDetails & { computeSavingsPlans: ComputeSavingsPlans })
  | (_ResourceDetails & { sageMakerSavingsPlans: SageMakerSavingsPlans })
  | (_ResourceDetails & { rdsDbInstance: RdsDbInstance })
  | (_ResourceDetails & { rdsDbInstanceStorage: RdsDbInstanceStorage })
  | (_ResourceDetails & { auroraDbClusterStorage: AuroraDbClusterStorage })
  | (_ResourceDetails & { dynamoDbReservedCapacity: DynamoDbReservedCapacity })
  | (_ResourceDetails & {
      memoryDbReservedInstances: MemoryDbReservedInstances;
    });
export type ResourceIdList = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
}> {}
export interface ResourcePricing {
  estimatedCostBeforeDiscounts?: number;
  estimatedNetUnusedAmortizedCommitments?: number;
  estimatedDiscounts?: EstimatedDiscounts;
  estimatedCostAfterDiscounts?: number;
}
export type ResourceType =
  | "Ec2Instance"
  | "LambdaFunction"
  | "EbsVolume"
  | "EcsService"
  | "Ec2AutoScalingGroup"
  | "Ec2InstanceSavingsPlans"
  | "ComputeSavingsPlans"
  | "SageMakerSavingsPlans"
  | "Ec2ReservedInstances"
  | "RdsReservedInstances"
  | "OpenSearchReservedInstances"
  | "RedshiftReservedInstances"
  | "ElastiCacheReservedInstances"
  | "RdsDbInstanceStorage"
  | "RdsDbInstance"
  | "AuroraDbClusterStorage"
  | "DynamoDbReservedCapacity"
  | "MemoryDbReservedInstances";
export type ResourceTypeList = Array<ResourceType>;
export interface SageMakerSavingsPlans {
  configuration?: SageMakerSavingsPlansConfiguration;
  costCalculation?: SavingsPlansCostCalculation;
}
export interface SageMakerSavingsPlansConfiguration {
  accountScope?: string;
  term?: string;
  paymentOption?: string;
  hourlyCommitment?: string;
}
export type SavingsEstimationMode = "BeforeDiscounts" | "AfterDiscounts";
export interface SavingsPlansCostCalculation {
  pricing?: SavingsPlansPricing;
}
export interface SavingsPlansPricing {
  monthlySavingsPlansEligibleCost?: number;
  estimatedMonthlyCommitment?: number;
  savingsPercentage?: number;
  estimatedOnDemandCost?: number;
}
export type Source = "ComputeOptimizer" | "CostExplorer";
export interface StorageConfiguration {
  type?: string;
  sizeInGb?: number;
}
export type SummaryMetrics = "SavingsPercentage";
export type SummaryMetricsList = Array<SummaryMetrics>;
export interface SummaryMetricsResult {
  savingsPercentage?: string;
}
export interface Tag {
  key?: string;
  value?: string;
}
export type TagList = Array<Tag>;
export type Term = "OneYear" | "ThreeYears";
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface UpdateEnrollmentStatusRequest {
  status: EnrollmentStatus;
  includeMemberAccounts?: boolean;
}
export interface UpdateEnrollmentStatusResponse {
  status?: string;
}
export interface UpdatePreferencesRequest {
  savingsEstimationMode?: SavingsEstimationMode;
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
  preferredCommitment?: PreferredCommitment;
}
export interface UpdatePreferencesResponse {
  savingsEstimationMode?: SavingsEstimationMode;
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
  preferredCommitment?: PreferredCommitment;
}
export interface Usage {
  usageType?: string;
  usageAmount?: number;
  operation?: string;
  productCode?: string;
  unit?: string;
}
export type UsageList = Array<Usage>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason?: ValidationExceptionReason;
  readonly fields?: Array<ValidationExceptionDetail>;
}> {}
export interface ValidationExceptionDetail {
  fieldName: string;
  message: string;
}
export type ValidationExceptionDetails = Array<ValidationExceptionDetail>;
export type ValidationExceptionReason = "FieldValidationFailed" | "Other";
export declare namespace GetPreferences {
  export type Input = GetPreferencesRequest;
  export type Output = GetPreferencesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRecommendation {
  export type Input = GetRecommendationRequest;
  export type Output = GetRecommendationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnrollmentStatuses {
  export type Input = ListEnrollmentStatusesRequest;
  export type Output = ListEnrollmentStatusesResponse;
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
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRecommendationSummaries {
  export type Input = ListRecommendationSummariesRequest;
  export type Output = ListRecommendationSummariesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEnrollmentStatus {
  export type Input = UpdateEnrollmentStatusRequest;
  export type Output = UpdateEnrollmentStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePreferences {
  export type Input = UpdatePreferencesRequest;
  export type Output = UpdatePreferencesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "Cost Optimization Hub",
  version: "2022-07-26",
  protocol: "awsJson1_0",
  endpointPrefix: "cost-optimization-hub",
  targetPrefix: "CostOptimizationHubService",
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;

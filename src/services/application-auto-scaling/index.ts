import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";
import { AwsJson11Protocol } from "../../protocols/awsjson1_1.js";

export class ApplicationAutoScaling extends AWSServiceClient {
  constructor(cfg: any) {
    super("application-auto-scaling", new AwsJson11Protocol(), cfg);
  }

  deleteScalingPolicy(
    input: DeleteScalingPolicyRequest,
  ): Effect.Effect<
    DeleteScalingPolicyResponse,
    ConcurrentUpdateException | InternalServiceException | ObjectNotFoundException | ValidationException | CommonAwsError
  > {
    return this.call("DeleteScalingPolicy", input);
  }
  deleteScheduledAction(
    input: DeleteScheduledActionRequest,
  ): Effect.Effect<
    DeleteScheduledActionResponse,
    ConcurrentUpdateException | InternalServiceException | ObjectNotFoundException | ValidationException | CommonAwsError
  > {
    return this.call("DeleteScheduledAction", input);
  }
  deregisterScalableTarget(
    input: DeregisterScalableTargetRequest,
  ): Effect.Effect<
    DeregisterScalableTargetResponse,
    ConcurrentUpdateException | InternalServiceException | ObjectNotFoundException | ValidationException | CommonAwsError
  > {
    return this.call("DeregisterScalableTarget", input);
  }
  describeScalableTargets(
    input: DescribeScalableTargetsRequest,
  ): Effect.Effect<
    DescribeScalableTargetsResponse,
    ConcurrentUpdateException | InternalServiceException | InvalidNextTokenException | ValidationException | CommonAwsError
  > {
    return this.call("DescribeScalableTargets", input);
  }
  describeScalingActivities(
    input: DescribeScalingActivitiesRequest,
  ): Effect.Effect<
    DescribeScalingActivitiesResponse,
    ConcurrentUpdateException | InternalServiceException | InvalidNextTokenException | ValidationException | CommonAwsError
  > {
    return this.call("DescribeScalingActivities", input);
  }
  describeScalingPolicies(
    input: DescribeScalingPoliciesRequest,
  ): Effect.Effect<
    DescribeScalingPoliciesResponse,
    ConcurrentUpdateException | FailedResourceAccessException | InternalServiceException | InvalidNextTokenException | ValidationException | CommonAwsError
  > {
    return this.call("DescribeScalingPolicies", input);
  }
  describeScheduledActions(
    input: DescribeScheduledActionsRequest,
  ): Effect.Effect<
    DescribeScheduledActionsResponse,
    ConcurrentUpdateException | InternalServiceException | InvalidNextTokenException | ValidationException | CommonAwsError
  > {
    return this.call("DescribeScheduledActions", input);
  }
  getPredictiveScalingForecast(
    input: GetPredictiveScalingForecastRequest,
  ): Effect.Effect<
    GetPredictiveScalingForecastResponse,
    InternalServiceException | ValidationException | CommonAwsError
  > {
    return this.call("GetPredictiveScalingForecast", input);
  }
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | CommonAwsError
  > {
    return this.call("ListTagsForResource", input);
  }
  putScalingPolicy(
    input: PutScalingPolicyRequest,
  ): Effect.Effect<
    PutScalingPolicyResponse,
    ConcurrentUpdateException | FailedResourceAccessException | InternalServiceException | LimitExceededException | ObjectNotFoundException | ValidationException | CommonAwsError
  > {
    return this.call("PutScalingPolicy", input);
  }
  putScheduledAction(
    input: PutScheduledActionRequest,
  ): Effect.Effect<
    PutScheduledActionResponse,
    ConcurrentUpdateException | InternalServiceException | LimitExceededException | ObjectNotFoundException | ValidationException | CommonAwsError
  > {
    return this.call("PutScheduledAction", input);
  }
  registerScalableTarget(
    input: RegisterScalableTargetRequest,
  ): Effect.Effect<
    RegisterScalableTargetResponse,
    ConcurrentUpdateException | InternalServiceException | LimitExceededException | ValidationException | CommonAwsError
  > {
    return this.call("RegisterScalableTarget", input);
  }
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    ResourceNotFoundException | TooManyTagsException | ValidationException | CommonAwsError
  > {
    return this.call("TagResource", input);
  }
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  > {
    return this.call("UntagResource", input);
  }
}

export default ApplicationAutoScaling;

export type AdjustmentType = "ChangeInCapacity" | "PercentChangeInCapacity" | "ExactCapacity";
export interface Alarm {
  AlarmName: string;
  AlarmARN: string;
}
export type Alarms = Array<Alarm>;
export type AmazonResourceName = string;

export interface CapacityForecast {
  Timestamps: Array<Date | string>;
  Values: Array<number>;
}
export declare class ConcurrentUpdateException extends EffectData.TaggedError(
  "ConcurrentUpdateException",
)<{
  readonly Message?: string;
}> {}
export type Cooldown = number;

export interface CustomizedMetricSpecification {
  MetricName?: string;
  Namespace?: string;
  Dimensions?: Array<MetricDimension>;
  Statistic?: MetricStatistic;
  Unit?: string;
  Metrics?: Array<TargetTrackingMetricDataQuery>;
}
export interface DeleteScalingPolicyRequest {
  PolicyName: string;
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
}
export interface DeleteScalingPolicyResponse {
}
export interface DeleteScheduledActionRequest {
  ServiceNamespace: ServiceNamespace;
  ScheduledActionName: string;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
}
export interface DeleteScheduledActionResponse {
}
export interface DeregisterScalableTargetRequest {
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
}
export interface DeregisterScalableTargetResponse {
}
export interface DescribeScalableTargetsRequest {
  ServiceNamespace: ServiceNamespace;
  ResourceIds?: Array<string>;
  ScalableDimension?: ScalableDimension;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeScalableTargetsResponse {
  ScalableTargets?: Array<ScalableTarget>;
  NextToken?: string;
}
export interface DescribeScalingActivitiesRequest {
  ServiceNamespace: ServiceNamespace;
  ResourceId?: string;
  ScalableDimension?: ScalableDimension;
  MaxResults?: number;
  NextToken?: string;
  IncludeNotScaledActivities?: boolean;
}
export interface DescribeScalingActivitiesResponse {
  ScalingActivities?: Array<ScalingActivity>;
  NextToken?: string;
}
export interface DescribeScalingPoliciesRequest {
  PolicyNames?: Array<string>;
  ServiceNamespace: ServiceNamespace;
  ResourceId?: string;
  ScalableDimension?: ScalableDimension;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeScalingPoliciesResponse {
  ScalingPolicies?: Array<ScalingPolicy>;
  NextToken?: string;
}
export interface DescribeScheduledActionsRequest {
  ScheduledActionNames?: Array<string>;
  ServiceNamespace: ServiceNamespace;
  ResourceId?: string;
  ScalableDimension?: ScalableDimension;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeScheduledActionsResponse {
  ScheduledActions?: Array<ScheduledAction>;
  NextToken?: string;
}
export type DisableScaleIn = boolean;

export type ErrorMessage = string;

export type ExceptionMessage = string;

export type Expression = string;

export declare class FailedResourceAccessException extends EffectData.TaggedError(
  "FailedResourceAccessException",
)<{
  readonly Message?: string;
}> {}
export interface GetPredictiveScalingForecastRequest {
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  PolicyName: string;
  StartTime: Date | string;
  EndTime: Date | string;
}
export interface GetPredictiveScalingForecastResponse {
  LoadForecast?: Array<LoadForecast>;
  CapacityForecast?: CapacityForecast;
  UpdateTime?: Date | string;
}
export type Id = string;

export type IncludeNotScaledActivities = boolean;

export declare class InternalServiceException extends EffectData.TaggedError(
  "InternalServiceException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface LoadForecast {
  Timestamps: Array<Date | string>;
  Values: Array<number>;
  MetricSpecification: PredictiveScalingMetricSpecification;
}
export type LoadForecasts = Array<LoadForecast>;
export type MaxResults = number;

export type MetricAggregationType = "Average" | "Minimum" | "Maximum";
export interface MetricDimension {
  Name: string;
  Value: string;
}
export type MetricDimensionName = string;

export type MetricDimensions = Array<MetricDimension>;
export type MetricDimensionValue = string;

export type MetricName = string;

export type MetricNamespace = string;

export type MetricScale = number;

export type MetricStatistic = "Average" | "Minimum" | "Maximum" | "SampleCount" | "Sum";
export type MetricType = "DynamoDBReadCapacityUtilization" | "DynamoDBWriteCapacityUtilization" | "ALBRequestCountPerTarget" | "RDSReaderAverageCPUUtilization" | "RDSReaderAverageDatabaseConnections" | "EC2SpotFleetRequestAverageCPUUtilization" | "EC2SpotFleetRequestAverageNetworkIn" | "EC2SpotFleetRequestAverageNetworkOut" | "SageMakerVariantInvocationsPerInstance" | "ECSServiceAverageCPUUtilization" | "ECSServiceAverageMemoryUtilization" | "AppStreamAverageCapacityUtilization" | "ComprehendInferenceUtilization" | "LambdaProvisionedConcurrencyUtilization" | "CassandraReadCapacityUtilization" | "CassandraWriteCapacityUtilization" | "KafkaBrokerStorageUtilization" | "ElastiCacheEngineCPUUtilization" | "ElastiCacheDatabaseMemoryUsagePercentage" | "ElastiCachePrimaryEngineCPUUtilization" | "ElastiCacheReplicaEngineCPUUtilization" | "ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage" | "NeptuneReaderAverageCPUUtilization" | "SageMakerVariantProvisionedConcurrencyUtilization" | "ElastiCacheDatabaseCapacityUsageCountedForEvictPercentage" | "SageMakerInferenceComponentInvocationsPerCopy" | "WorkSpacesAverageUserSessionsCapacityUtilization" | "SageMakerInferenceComponentConcurrentRequestsPerCopyHighResolution" | "SageMakerVariantConcurrentRequestsPerModelHighResolution";
export type MetricUnit = string;

export type MinAdjustmentMagnitude = number;

export interface NotScaledReason {
  Code: string;
  MaxCapacity?: number;
  MinCapacity?: number;
  CurrentCapacity?: number;
}
export type NotScaledReasons = Array<NotScaledReason>;
export declare class ObjectNotFoundException extends EffectData.TaggedError(
  "ObjectNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type PolicyName = string;

export type PolicyType = "StepScaling" | "TargetTrackingScaling" | "PredictiveScaling";
export interface PredefinedMetricSpecification {
  PredefinedMetricType: MetricType;
  ResourceLabel?: string;
}
export interface PredictiveScalingCustomizedMetricSpecification {
  MetricDataQueries: Array<PredictiveScalingMetricDataQuery>;
}
export type PredictiveScalingForecastTimestamps = Array<Date | string>;
export type PredictiveScalingForecastValues = Array<number>;
export type PredictiveScalingMaxCapacityBreachBehavior = "HonorMaxCapacity" | "IncreaseMaxCapacity";
export type PredictiveScalingMaxCapacityBuffer = number;

export interface PredictiveScalingMetric {
  Dimensions?: Array<PredictiveScalingMetricDimension>;
  MetricName?: string;
  Namespace?: string;
}
export type PredictiveScalingMetricDataQueries = Array<PredictiveScalingMetricDataQuery>;
export interface PredictiveScalingMetricDataQuery {
  Id: string;
  Expression?: string;
  MetricStat?: PredictiveScalingMetricStat;
  Label?: string;
  ReturnData?: boolean;
}
export interface PredictiveScalingMetricDimension {
  Name: string;
  Value: string;
}
export type PredictiveScalingMetricDimensionName = string;

export type PredictiveScalingMetricDimensions = Array<PredictiveScalingMetricDimension>;
export type PredictiveScalingMetricDimensionValue = string;

export type PredictiveScalingMetricName = string;

export type PredictiveScalingMetricNamespace = string;

export interface PredictiveScalingMetricSpecification {
  TargetValue: number;
  PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPairSpecification;
  PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetricSpecification;
  PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetricSpecification;
  CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedMetricSpecification;
  CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedMetricSpecification;
  CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedMetricSpecification;
}
export type PredictiveScalingMetricSpecifications = Array<PredictiveScalingMetricSpecification>;
export interface PredictiveScalingMetricStat {
  Metric: PredictiveScalingMetric;
  Stat: string;
  Unit?: string;
}
export type PredictiveScalingMetricType = string;

export type PredictiveScalingMetricUnit = string;

export type PredictiveScalingMode = "ForecastOnly" | "ForecastAndScale";
export interface PredictiveScalingPolicyConfiguration {
  MetricSpecifications: Array<PredictiveScalingMetricSpecification>;
  Mode?: PredictiveScalingMode;
  SchedulingBufferTime?: number;
  MaxCapacityBreachBehavior?: PredictiveScalingMaxCapacityBreachBehavior;
  MaxCapacityBuffer?: number;
}
export interface PredictiveScalingPredefinedLoadMetricSpecification {
  PredefinedMetricType: string;
  ResourceLabel?: string;
}
export interface PredictiveScalingPredefinedMetricPairSpecification {
  PredefinedMetricType: string;
  ResourceLabel?: string;
}
export interface PredictiveScalingPredefinedScalingMetricSpecification {
  PredefinedMetricType: string;
  ResourceLabel?: string;
}
export type PredictiveScalingSchedulingBufferTime = number;

export interface PutScalingPolicyRequest {
  PolicyName: string;
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  PolicyType?: PolicyType;
  StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
  TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
  PredictiveScalingPolicyConfiguration?: PredictiveScalingPolicyConfiguration;
}
export interface PutScalingPolicyResponse {
  PolicyARN: string;
  Alarms?: Array<Alarm>;
}
export interface PutScheduledActionRequest {
  ServiceNamespace: ServiceNamespace;
  Schedule?: string;
  Timezone?: string;
  ScheduledActionName: string;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  StartTime?: Date | string;
  EndTime?: Date | string;
  ScalableTargetAction?: ScalableTargetAction;
}
export interface PutScheduledActionResponse {
}
export interface RegisterScalableTargetRequest {
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  MinCapacity?: number;
  MaxCapacity?: number;
  RoleARN?: string;
  SuspendedState?: SuspendedState;
  Tags?: Record<string, string>;
}
export interface RegisterScalableTargetResponse {
  ScalableTargetARN?: string;
}
export type ResourceCapacity = number;

export type ResourceId = string;

export type ResourceIdMaxLen1600 = string;

export type ResourceIdsMaxLen1600 = Array<string>;
export type ResourceLabel = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceName?: string;
}> {}
export type ReturnData = boolean;

export type ScalableDimension = "ECSServiceDesiredCount" | "EC2SpotFleetRequestTargetCapacity" | "EMRInstanceGroupInstanceCount" | "AppstreamFleetDesiredCapacity" | "DynamoDBTableReadCapacityUnits" | "DynamoDBTableWriteCapacityUnits" | "DynamoDBIndexReadCapacityUnits" | "DynamoDBIndexWriteCapacityUnits" | "RDSClusterReadReplicaCount" | "SageMakerVariantDesiredInstanceCount" | "CustomResourceScalableDimension" | "ComprehendDocClassifierEndpointInferenceUnits" | "ComprehendEntityRecognizerEndpointInferenceUnits" | "LambdaFunctionProvisionedConcurrency" | "CassandraTableReadCapacityUnits" | "CassandraTableWriteCapacityUnits" | "KafkaBrokerStorageVolumeSize" | "ElastiCacheCacheClusterNodes" | "ElastiCacheReplicationGroupNodeGroups" | "ElastiCacheReplicationGroupReplicas" | "NeptuneClusterReadReplicaCount" | "SageMakerVariantDesiredProvisionedConcurrency" | "SageMakerInferenceComponentDesiredCopyCount" | "WorkSpacesWorkSpacesPoolDesiredUserSessions";
export interface ScalableTarget {
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  MinCapacity: number;
  MaxCapacity: number;
  PredictedCapacity?: number;
  RoleARN: string;
  CreationTime: Date | string;
  SuspendedState?: SuspendedState;
  ScalableTargetARN?: string;
}
export interface ScalableTargetAction {
  MinCapacity?: number;
  MaxCapacity?: number;
}
export type ScalableTargets = Array<ScalableTarget>;
export type ScalingActivities = Array<ScalingActivity>;
export interface ScalingActivity {
  ActivityId: string;
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  Description: string;
  Cause: string;
  StartTime: Date | string;
  EndTime?: Date | string;
  StatusCode: ScalingActivityStatusCode;
  StatusMessage?: string;
  Details?: string;
  NotScaledReasons?: Array<NotScaledReason>;
}
export type ScalingActivityStatusCode = "Pending" | "InProgress" | "Successful" | "Overridden" | "Unfulfilled" | "Failed";
export type ScalingAdjustment = number;

export type ScalingPolicies = Array<ScalingPolicy>;
export interface ScalingPolicy {
  PolicyARN: string;
  PolicyName: string;
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  PolicyType: PolicyType;
  StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
  TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
  PredictiveScalingPolicyConfiguration?: PredictiveScalingPolicyConfiguration;
  Alarms?: Array<Alarm>;
  CreationTime: Date | string;
}
export type ScalingSuspended = boolean;

export interface ScheduledAction {
  ScheduledActionName: string;
  ScheduledActionARN: string;
  ServiceNamespace: ServiceNamespace;
  Schedule: string;
  Timezone?: string;
  ResourceId: string;
  ScalableDimension?: ScalableDimension;
  StartTime?: Date | string;
  EndTime?: Date | string;
  ScalableTargetAction?: ScalableTargetAction;
  CreationTime: Date | string;
}
export type ScheduledActionName = string;

export type ScheduledActions = Array<ScheduledAction>;
export type ServiceNamespace = "ECS" | "EMR" | "EC2" | "APPSTREAM" | "DYNAMODB" | "RDS" | "SAGEMAKER" | "CUSTOM_RESOURCE" | "COMPREHEND" | "LAMBDA" | "CASSANDRA" | "KAFKA" | "ELASTICACHE" | "NEPTUNE" | "WORKSPACES";
export interface StepAdjustment {
  MetricIntervalLowerBound?: number;
  MetricIntervalUpperBound?: number;
  ScalingAdjustment: number;
}
export type StepAdjustments = Array<StepAdjustment>;
export interface StepScalingPolicyConfiguration {
  AdjustmentType?: AdjustmentType;
  StepAdjustments?: Array<StepAdjustment>;
  MinAdjustmentMagnitude?: number;
  Cooldown?: number;
  MetricAggregationType?: MetricAggregationType;
}
export interface SuspendedState {
  DynamicScalingInSuspended?: boolean;
  DynamicScalingOutSuspended?: boolean;
  ScheduledScalingSuspended?: boolean;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface TargetTrackingMetric {
  Dimensions?: Array<TargetTrackingMetricDimension>;
  MetricName?: string;
  Namespace?: string;
}
export type TargetTrackingMetricDataQueries = Array<TargetTrackingMetricDataQuery>;
export interface TargetTrackingMetricDataQuery {
  Expression?: string;
  Id: string;
  Label?: string;
  MetricStat?: TargetTrackingMetricStat;
  ReturnData?: boolean;
}
export interface TargetTrackingMetricDimension {
  Name: string;
  Value: string;
}
export type TargetTrackingMetricDimensionName = string;

export type TargetTrackingMetricDimensions = Array<TargetTrackingMetricDimension>;
export type TargetTrackingMetricDimensionValue = string;

export type TargetTrackingMetricName = string;

export type TargetTrackingMetricNamespace = string;

export interface TargetTrackingMetricStat {
  Metric: TargetTrackingMetric;
  Stat: string;
  Unit?: string;
}
export type TargetTrackingMetricUnit = string;

export interface TargetTrackingScalingPolicyConfiguration {
  TargetValue: number;
  PredefinedMetricSpecification?: PredefinedMetricSpecification;
  CustomizedMetricSpecification?: CustomizedMetricSpecification;
  ScaleOutCooldown?: number;
  ScaleInCooldown?: number;
  DisableScaleIn?: boolean;
}
export type TimestampType = Date | string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
  readonly ResourceName?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type XmlString = string;

export declare namespace DeleteScalingPolicy {
  export type Input = DeleteScalingPolicyRequest;
  export type Output = DeleteScalingPolicyResponse;
  export type Error =
    | ConcurrentUpdateException
    | InternalServiceException
    | ObjectNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteScheduledAction {
  export type Input = DeleteScheduledActionRequest;
  export type Output = DeleteScheduledActionResponse;
  export type Error =
    | ConcurrentUpdateException
    | InternalServiceException
    | ObjectNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterScalableTarget {
  export type Input = DeregisterScalableTargetRequest;
  export type Output = DeregisterScalableTargetResponse;
  export type Error =
    | ConcurrentUpdateException
    | InternalServiceException
    | ObjectNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeScalableTargets {
  export type Input = DescribeScalableTargetsRequest;
  export type Output = DescribeScalableTargetsResponse;
  export type Error =
    | ConcurrentUpdateException
    | InternalServiceException
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeScalingActivities {
  export type Input = DescribeScalingActivitiesRequest;
  export type Output = DescribeScalingActivitiesResponse;
  export type Error =
    | ConcurrentUpdateException
    | InternalServiceException
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeScalingPolicies {
  export type Input = DescribeScalingPoliciesRequest;
  export type Output = DescribeScalingPoliciesResponse;
  export type Error =
    | ConcurrentUpdateException
    | FailedResourceAccessException
    | InternalServiceException
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeScheduledActions {
  export type Input = DescribeScheduledActionsRequest;
  export type Output = DescribeScheduledActionsResponse;
  export type Error =
    | ConcurrentUpdateException
    | InternalServiceException
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPredictiveScalingForecast {
  export type Input = GetPredictiveScalingForecastRequest;
  export type Output = GetPredictiveScalingForecastResponse;
  export type Error =
    | InternalServiceException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutScalingPolicy {
  export type Input = PutScalingPolicyRequest;
  export type Output = PutScalingPolicyResponse;
  export type Error =
    | ConcurrentUpdateException
    | FailedResourceAccessException
    | InternalServiceException
    | LimitExceededException
    | ObjectNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutScheduledAction {
  export type Input = PutScheduledActionRequest;
  export type Output = PutScheduledActionResponse;
  export type Error =
    | ConcurrentUpdateException
    | InternalServiceException
    | LimitExceededException
    | ObjectNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterScalableTarget {
  export type Input = RegisterScalableTargetRequest;
  export type Output = RegisterScalableTargetResponse;
  export type Error =
    | ConcurrentUpdateException
    | InternalServiceException
    | LimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}


import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class AutoScalingPlans extends AWSServiceClient {
  createScalingPlan(
    input: CreateScalingPlanRequest,
  ): Effect.Effect<
    CreateScalingPlanResponse,
    | ConcurrentUpdateException
    | InternalServiceException
    | LimitExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteScalingPlan(
    input: DeleteScalingPlanRequest,
  ): Effect.Effect<
    DeleteScalingPlanResponse,
    | ConcurrentUpdateException
    | InternalServiceException
    | ObjectNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeScalingPlanResources(
    input: DescribeScalingPlanResourcesRequest,
  ): Effect.Effect<
    DescribeScalingPlanResourcesResponse,
    | ConcurrentUpdateException
    | InternalServiceException
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError
  >;
  describeScalingPlans(
    input: DescribeScalingPlansRequest,
  ): Effect.Effect<
    DescribeScalingPlansResponse,
    | ConcurrentUpdateException
    | InternalServiceException
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError
  >;
  getScalingPlanResourceForecastData(
    input: GetScalingPlanResourceForecastDataRequest,
  ): Effect.Effect<
    GetScalingPlanResourceForecastDataResponse,
    InternalServiceException | ValidationException | CommonAwsError
  >;
  updateScalingPlan(
    input: UpdateScalingPlanRequest,
  ): Effect.Effect<
    UpdateScalingPlanResponse,
    | ConcurrentUpdateException
    | InternalServiceException
    | ObjectNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export interface ApplicationSource {
  CloudFormationStackARN?: string;
  TagFilters?: Array<TagFilter>;
}
export type ApplicationSources = Array<ApplicationSource>;
export declare class ConcurrentUpdateException extends EffectData.TaggedError(
  "ConcurrentUpdateException",
)<{
  readonly Message?: string;
}> {}
export type Cooldown = number;

export interface CreateScalingPlanRequest {
  ScalingPlanName: string;
  ApplicationSource: ApplicationSource;
  ScalingInstructions: Array<ScalingInstruction>;
}
export interface CreateScalingPlanResponse {
  ScalingPlanVersion: number;
}
export interface CustomizedLoadMetricSpecification {
  MetricName: string;
  Namespace: string;
  Dimensions?: Array<MetricDimension>;
  Statistic: MetricStatistic;
  Unit?: string;
}
export interface CustomizedScalingMetricSpecification {
  MetricName: string;
  Namespace: string;
  Dimensions?: Array<MetricDimension>;
  Statistic: MetricStatistic;
  Unit?: string;
}
export interface Datapoint {
  Timestamp?: Date | string;
  Value?: number;
}
export type Datapoints = Array<Datapoint>;
export interface DeleteScalingPlanRequest {
  ScalingPlanName: string;
  ScalingPlanVersion: number;
}
export interface DeleteScalingPlanResponse {}
export interface DescribeScalingPlanResourcesRequest {
  ScalingPlanName: string;
  ScalingPlanVersion: number;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeScalingPlanResourcesResponse {
  ScalingPlanResources?: Array<ScalingPlanResource>;
  NextToken?: string;
}
export interface DescribeScalingPlansRequest {
  ScalingPlanNames?: Array<string>;
  ScalingPlanVersion?: number;
  ApplicationSources?: Array<ApplicationSource>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeScalingPlansResponse {
  ScalingPlans?: Array<ScalingPlan>;
  NextToken?: string;
}
export type DisableDynamicScaling = boolean;

export type DisableScaleIn = boolean;

export type ErrorMessage = string;

export type ForecastDataType =
  | "CapacityForecast"
  | "LoadForecast"
  | "ScheduledActionMinCapacity"
  | "ScheduledActionMaxCapacity";
export interface GetScalingPlanResourceForecastDataRequest {
  ScalingPlanName: string;
  ScalingPlanVersion: number;
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  ForecastDataType: ForecastDataType;
  StartTime: Date | string;
  EndTime: Date | string;
}
export interface GetScalingPlanResourceForecastDataResponse {
  Datapoints: Array<Datapoint>;
}
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
export type LoadMetricType =
  | "ASGTotalCPUUtilization"
  | "ASGTotalNetworkIn"
  | "ASGTotalNetworkOut"
  | "ALBTargetGroupRequestCount";
export type MaxResults = number;

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

export type MetricStatistic =
  | "Average"
  | "Minimum"
  | "Maximum"
  | "SampleCount"
  | "Sum";
export type MetricUnit = string;

export type NextToken = string;

export declare class ObjectNotFoundException extends EffectData.TaggedError(
  "ObjectNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type PolicyName = string;

export type PolicyType = "TargetTrackingScaling";
export interface PredefinedLoadMetricSpecification {
  PredefinedLoadMetricType: LoadMetricType;
  ResourceLabel?: string;
}
export interface PredefinedScalingMetricSpecification {
  PredefinedScalingMetricType: ScalingMetricType;
  ResourceLabel?: string;
}
export type PredictiveScalingMaxCapacityBehavior =
  | "SetForecastCapacityToMaxCapacity"
  | "SetMaxCapacityToForecastCapacity"
  | "SetMaxCapacityAboveForecastCapacity";
export type PredictiveScalingMode = "ForecastAndScale" | "ForecastOnly";
export type ResourceCapacity = number;

export type ResourceIdMaxLen1600 = string;

export type ResourceLabel = string;

export type ScalableDimension =
  | "autoscaling:autoScalingGroup:DesiredCapacity"
  | "ecs:service:DesiredCount"
  | "ec2:spot-fleet-request:TargetCapacity"
  | "rds:cluster:ReadReplicaCount"
  | "dynamodb:table:ReadCapacityUnits"
  | "dynamodb:table:WriteCapacityUnits"
  | "dynamodb:index:ReadCapacityUnits"
  | "dynamodb:index:WriteCapacityUnits";
export interface ScalingInstruction {
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  MinCapacity: number;
  MaxCapacity: number;
  TargetTrackingConfigurations: Array<TargetTrackingConfiguration>;
  PredefinedLoadMetricSpecification?: PredefinedLoadMetricSpecification;
  CustomizedLoadMetricSpecification?: CustomizedLoadMetricSpecification;
  ScheduledActionBufferTime?: number;
  PredictiveScalingMaxCapacityBehavior?: PredictiveScalingMaxCapacityBehavior;
  PredictiveScalingMaxCapacityBuffer?: number;
  PredictiveScalingMode?: PredictiveScalingMode;
  ScalingPolicyUpdateBehavior?: ScalingPolicyUpdateBehavior;
  DisableDynamicScaling?: boolean;
}
export type ScalingInstructions = Array<ScalingInstruction>;
export type ScalingMetricType =
  | "ASGAverageCPUUtilization"
  | "ASGAverageNetworkIn"
  | "ASGAverageNetworkOut"
  | "DynamoDBReadCapacityUtilization"
  | "DynamoDBWriteCapacityUtilization"
  | "ECSServiceAverageCPUUtilization"
  | "ECSServiceAverageMemoryUtilization"
  | "ALBRequestCountPerTarget"
  | "RDSReaderAverageCPUUtilization"
  | "RDSReaderAverageDatabaseConnections"
  | "EC2SpotFleetRequestAverageCPUUtilization"
  | "EC2SpotFleetRequestAverageNetworkIn"
  | "EC2SpotFleetRequestAverageNetworkOut";
export interface ScalingPlan {
  ScalingPlanName: string;
  ScalingPlanVersion: number;
  ApplicationSource: ApplicationSource;
  ScalingInstructions: Array<ScalingInstruction>;
  StatusCode: ScalingPlanStatusCode;
  StatusMessage?: string;
  StatusStartTime?: Date | string;
  CreationTime?: Date | string;
}
export type ScalingPlanName = string;

export type ScalingPlanNames = Array<string>;
export interface ScalingPlanResource {
  ScalingPlanName: string;
  ScalingPlanVersion: number;
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  ScalingPolicies?: Array<ScalingPolicy>;
  ScalingStatusCode: ScalingStatusCode;
  ScalingStatusMessage?: string;
}
export type ScalingPlanResources = Array<ScalingPlanResource>;
export type ScalingPlans = Array<ScalingPlan>;
export type ScalingPlanStatusCode =
  | "Active"
  | "ActiveWithProblems"
  | "CreationInProgress"
  | "CreationFailed"
  | "DeletionInProgress"
  | "DeletionFailed"
  | "UpdateInProgress"
  | "UpdateFailed";
export type ScalingPlanVersion = number;

export type ScalingPolicies = Array<ScalingPolicy>;
export interface ScalingPolicy {
  PolicyName: string;
  PolicyType: PolicyType;
  TargetTrackingConfiguration?: TargetTrackingConfiguration;
}
export type ScalingPolicyUpdateBehavior =
  | "KeepExternalPolicies"
  | "ReplaceExternalPolicies";
export type ScalingStatusCode = "Inactive" | "PartiallyActive" | "Active";
export type ScheduledActionBufferTime = number;

export type ServiceNamespace =
  | "autoscaling"
  | "ecs"
  | "ec2"
  | "rds"
  | "dynamodb";
export interface TagFilter {
  Key?: string;
  Values?: Array<string>;
}
export type TagFilters = Array<TagFilter>;
export type TagValues = Array<string>;
export interface TargetTrackingConfiguration {
  PredefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification;
  CustomizedScalingMetricSpecification?: CustomizedScalingMetricSpecification;
  TargetValue: number;
  DisableScaleIn?: boolean;
  ScaleOutCooldown?: number;
  ScaleInCooldown?: number;
  EstimatedInstanceWarmup?: number;
}
export type TargetTrackingConfigurations = Array<TargetTrackingConfiguration>;
export type TimestampType = Date | string;

export interface UpdateScalingPlanRequest {
  ScalingPlanName: string;
  ScalingPlanVersion: number;
  ApplicationSource?: ApplicationSource;
  ScalingInstructions?: Array<ScalingInstruction>;
}
export interface UpdateScalingPlanResponse {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type XmlString = string;

export type XmlStringMaxLen128 = string;

export type XmlStringMaxLen256 = string;

export declare namespace CreateScalingPlan {
  export type Input = CreateScalingPlanRequest;
  export type Output = CreateScalingPlanResponse;
  export type Error =
    | ConcurrentUpdateException
    | InternalServiceException
    | LimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteScalingPlan {
  export type Input = DeleteScalingPlanRequest;
  export type Output = DeleteScalingPlanResponse;
  export type Error =
    | ConcurrentUpdateException
    | InternalServiceException
    | ObjectNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeScalingPlanResources {
  export type Input = DescribeScalingPlanResourcesRequest;
  export type Output = DescribeScalingPlanResourcesResponse;
  export type Error =
    | ConcurrentUpdateException
    | InternalServiceException
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeScalingPlans {
  export type Input = DescribeScalingPlansRequest;
  export type Output = DescribeScalingPlansResponse;
  export type Error =
    | ConcurrentUpdateException
    | InternalServiceException
    | InvalidNextTokenException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetScalingPlanResourceForecastData {
  export type Input = GetScalingPlanResourceForecastDataRequest;
  export type Output = GetScalingPlanResourceForecastDataResponse;
  export type Error =
    | InternalServiceException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateScalingPlan {
  export type Input = UpdateScalingPlanRequest;
  export type Output = UpdateScalingPlanResponse;
  export type Error =
    | ConcurrentUpdateException
    | InternalServiceException
    | ObjectNotFoundException
    | ValidationException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "Auto Scaling Plans",
  version: "2018-01-06",
  protocol: "awsJson1_1",
  endpointPrefix: "autoscaling-plans",
  targetPrefix: "AnyScaleScalingPlannerFrontendService",
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;

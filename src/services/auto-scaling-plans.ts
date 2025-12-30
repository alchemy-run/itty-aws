import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ScalingPlanNames = S.Array(S.String);
export const TagValues = S.Array(S.String);
export class TagFilter extends S.Class<TagFilter>("TagFilter")({Key: S.optional(S.String), Values: S.optional(TagValues)}) {}
export const TagFilters = S.Array(TagFilter);
export class ApplicationSource extends S.Class<ApplicationSource>("ApplicationSource")({CloudFormationStackARN: S.optional(S.String), TagFilters: S.optional(TagFilters)}) {}
export const ApplicationSources = S.Array(ApplicationSource);
export class DeleteScalingPlanRequest extends S.Class<DeleteScalingPlanRequest>("DeleteScalingPlanRequest")({ScalingPlanName: S.String, ScalingPlanVersion: S.Number}) {}
export class DeleteScalingPlanResponse extends S.Class<DeleteScalingPlanResponse>("DeleteScalingPlanResponse")({}) {}
export class DescribeScalingPlanResourcesRequest extends S.Class<DescribeScalingPlanResourcesRequest>("DescribeScalingPlanResourcesRequest")({ScalingPlanName: S.String, ScalingPlanVersion: S.Number, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeScalingPlansRequest extends S.Class<DescribeScalingPlansRequest>("DescribeScalingPlansRequest")({ScalingPlanNames: S.optional(ScalingPlanNames), ScalingPlanVersion: S.optional(S.Number), ApplicationSources: S.optional(ApplicationSources), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetScalingPlanResourceForecastDataRequest extends S.Class<GetScalingPlanResourceForecastDataRequest>("GetScalingPlanResourceForecastDataRequest")({ScalingPlanName: S.String, ScalingPlanVersion: S.Number, ServiceNamespace: S.String, ResourceId: S.String, ScalableDimension: S.String, ForecastDataType: S.String, StartTime: S.Date, EndTime: S.Date}) {}
export class PredefinedScalingMetricSpecification extends S.Class<PredefinedScalingMetricSpecification>("PredefinedScalingMetricSpecification")({PredefinedScalingMetricType: S.String, ResourceLabel: S.optional(S.String)}) {}
export class MetricDimension extends S.Class<MetricDimension>("MetricDimension")({Name: S.String, Value: S.String}) {}
export const MetricDimensions = S.Array(MetricDimension);
export class CustomizedScalingMetricSpecification extends S.Class<CustomizedScalingMetricSpecification>("CustomizedScalingMetricSpecification")({MetricName: S.String, Namespace: S.String, Dimensions: S.optional(MetricDimensions), Statistic: S.String, Unit: S.optional(S.String)}) {}
export class TargetTrackingConfiguration extends S.Class<TargetTrackingConfiguration>("TargetTrackingConfiguration")({PredefinedScalingMetricSpecification: S.optional(PredefinedScalingMetricSpecification), CustomizedScalingMetricSpecification: S.optional(CustomizedScalingMetricSpecification), TargetValue: S.Number, DisableScaleIn: S.optional(S.Boolean), ScaleOutCooldown: S.optional(S.Number), ScaleInCooldown: S.optional(S.Number), EstimatedInstanceWarmup: S.optional(S.Number)}) {}
export const TargetTrackingConfigurations = S.Array(TargetTrackingConfiguration);
export class PredefinedLoadMetricSpecification extends S.Class<PredefinedLoadMetricSpecification>("PredefinedLoadMetricSpecification")({PredefinedLoadMetricType: S.String, ResourceLabel: S.optional(S.String)}) {}
export class CustomizedLoadMetricSpecification extends S.Class<CustomizedLoadMetricSpecification>("CustomizedLoadMetricSpecification")({MetricName: S.String, Namespace: S.String, Dimensions: S.optional(MetricDimensions), Statistic: S.String, Unit: S.optional(S.String)}) {}
export class ScalingInstruction extends S.Class<ScalingInstruction>("ScalingInstruction")({ServiceNamespace: S.String, ResourceId: S.String, ScalableDimension: S.String, MinCapacity: S.Number, MaxCapacity: S.Number, TargetTrackingConfigurations: TargetTrackingConfigurations, PredefinedLoadMetricSpecification: S.optional(PredefinedLoadMetricSpecification), CustomizedLoadMetricSpecification: S.optional(CustomizedLoadMetricSpecification), ScheduledActionBufferTime: S.optional(S.Number), PredictiveScalingMaxCapacityBehavior: S.optional(S.String), PredictiveScalingMaxCapacityBuffer: S.optional(S.Number), PredictiveScalingMode: S.optional(S.String), ScalingPolicyUpdateBehavior: S.optional(S.String), DisableDynamicScaling: S.optional(S.Boolean)}) {}
export const ScalingInstructions = S.Array(ScalingInstruction);
export class UpdateScalingPlanRequest extends S.Class<UpdateScalingPlanRequest>("UpdateScalingPlanRequest")({ScalingPlanName: S.String, ScalingPlanVersion: S.Number, ApplicationSource: S.optional(ApplicationSource), ScalingInstructions: S.optional(ScalingInstructions)}) {}
export class UpdateScalingPlanResponse extends S.Class<UpdateScalingPlanResponse>("UpdateScalingPlanResponse")({}) {}
export class ScalingPlan extends S.Class<ScalingPlan>("ScalingPlan")({ScalingPlanName: S.String, ScalingPlanVersion: S.Number, ApplicationSource: ApplicationSource, ScalingInstructions: ScalingInstructions, StatusCode: S.String, StatusMessage: S.optional(S.String), StatusStartTime: S.optional(S.Date), CreationTime: S.optional(S.Date)}) {}
export const ScalingPlans = S.Array(ScalingPlan);
export class Datapoint extends S.Class<Datapoint>("Datapoint")({Timestamp: S.optional(S.Date), Value: S.optional(S.Number)}) {}
export const Datapoints = S.Array(Datapoint);
export class DescribeScalingPlansResponse extends S.Class<DescribeScalingPlansResponse>("DescribeScalingPlansResponse")({ScalingPlans: S.optional(ScalingPlans), NextToken: S.optional(S.String)}) {}
export class GetScalingPlanResourceForecastDataResponse extends S.Class<GetScalingPlanResourceForecastDataResponse>("GetScalingPlanResourceForecastDataResponse")({Datapoints: Datapoints}) {}
export class ScalingPolicy extends S.Class<ScalingPolicy>("ScalingPolicy")({PolicyName: S.String, PolicyType: S.String, TargetTrackingConfiguration: S.optional(TargetTrackingConfiguration)}) {}
export const ScalingPolicies = S.Array(ScalingPolicy);
export class ScalingPlanResource extends S.Class<ScalingPlanResource>("ScalingPlanResource")({ScalingPlanName: S.String, ScalingPlanVersion: S.Number, ServiceNamespace: S.String, ResourceId: S.String, ScalableDimension: S.String, ScalingPolicies: S.optional(ScalingPolicies), ScalingStatusCode: S.String, ScalingStatusMessage: S.optional(S.String)}) {}
export const ScalingPlanResources = S.Array(ScalingPlanResource);
export class CreateScalingPlanRequest extends S.Class<CreateScalingPlanRequest>("CreateScalingPlanRequest")({ScalingPlanName: S.String, ApplicationSource: ApplicationSource, ScalingInstructions: ScalingInstructions}) {}
export class DescribeScalingPlanResourcesResponse extends S.Class<DescribeScalingPlanResourcesResponse>("DescribeScalingPlanResourcesResponse")({ScalingPlanResources: S.optional(ScalingPlanResources), NextToken: S.optional(S.String)}) {}
export class CreateScalingPlanResponse extends S.Class<CreateScalingPlanResponse>("CreateScalingPlanResponse")({ScalingPlanVersion: S.Number}) {}

//# Errors
export class ConcurrentUpdateException extends S.TaggedError<ConcurrentUpdateException>()("ConcurrentUpdateException", {}) {};
export class InternalServiceException extends S.TaggedError<InternalServiceException>()("InternalServiceException", {}) {};
export class ObjectNotFoundException extends S.TaggedError<ObjectNotFoundException>()("ObjectNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class InvalidNextTokenException extends S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes the specified scaling plan.
 * 
 * 
 * Deleting a scaling plan deletes the underlying ScalingInstruction for
 * all of the scalable resources that are covered by the plan.
 * 
 * 
 * If the plan has launched resources or has scaling activities in progress, you must
 * delete those resources separately.
 */export const deleteScalingPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.DeleteScalingPlan" }, DeleteScalingPlanRequest, DeleteScalingPlanResponse, [ConcurrentUpdateException, InternalServiceException, ObjectNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the forecast data for a scalable resource.
 * 
 * 
 * Capacity forecasts are represented as predicted values, or data points, that are
 * calculated using historical data points from a specified CloudWatch load metric. Data points are
 * available for up to 56 days.
 */export const getScalingPlanResourceForecastData = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData" }, GetScalingPlanResourceForecastDataRequest, GetScalingPlanResourceForecastDataResponse, [InternalServiceException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified scaling plan.
 * 
 * 
 * You cannot update a scaling plan if it is in the process of being created, updated, or
 * deleted.
 */export const updateScalingPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.UpdateScalingPlan" }, UpdateScalingPlanRequest, UpdateScalingPlanResponse, [ConcurrentUpdateException, InternalServiceException, ObjectNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the scalable resources in the specified scaling plan.
 */export const describeScalingPlanResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources" }, DescribeScalingPlanResourcesRequest, DescribeScalingPlanResourcesResponse, [ConcurrentUpdateException, InternalServiceException, InvalidNextTokenException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes one or more of your scaling plans.
 */export const describeScalingPlans = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.DescribeScalingPlans" }, DescribeScalingPlansRequest, DescribeScalingPlansResponse, [ConcurrentUpdateException, InternalServiceException, InvalidNextTokenException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a scaling plan.
 */export const createScalingPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.CreateScalingPlan" }, CreateScalingPlanRequest, CreateScalingPlanResponse, [ConcurrentUpdateException, InternalServiceException, LimitExceededException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

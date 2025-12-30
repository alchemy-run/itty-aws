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
export class ConcurrentUpdateException extends S.Class<ConcurrentUpdateException>("ConcurrentUpdateException")({Message: S.optional(S.String)}) {}
export class InternalServiceException extends S.Class<InternalServiceException>("InternalServiceException")({Message: S.optional(S.String)}) {}
export class ScalingPlan extends S.Class<ScalingPlan>("ScalingPlan")({ScalingPlanName: S.String, ScalingPlanVersion: S.Number, ApplicationSource: ApplicationSource, ScalingInstructions: ScalingInstructions, StatusCode: S.String, StatusMessage: S.optional(S.String), StatusStartTime: S.optional(S.Date), CreationTime: S.optional(S.Date)}) {}
export const ScalingPlans = S.Array(ScalingPlan);
export class Datapoint extends S.Class<Datapoint>("Datapoint")({Timestamp: S.optional(S.Date), Value: S.optional(S.Number)}) {}
export const Datapoints = S.Array(Datapoint);
export class ObjectNotFoundException extends S.Class<ObjectNotFoundException>("ObjectNotFoundException")({Message: S.optional(S.String)}) {}
export class DescribeScalingPlansResponse extends S.Class<DescribeScalingPlansResponse>("DescribeScalingPlansResponse")({ScalingPlans: S.optional(ScalingPlans), NextToken: S.optional(S.String)}) {}
export class GetScalingPlanResourceForecastDataResponse extends S.Class<GetScalingPlanResourceForecastDataResponse>("GetScalingPlanResourceForecastDataResponse")({Datapoints: Datapoints}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({Message: S.optional(S.String)}) {}
export class ScalingPolicy extends S.Class<ScalingPolicy>("ScalingPolicy")({PolicyName: S.String, PolicyType: S.String, TargetTrackingConfiguration: S.optional(TargetTrackingConfiguration)}) {}
export const ScalingPolicies = S.Array(ScalingPolicy);
export class ScalingPlanResource extends S.Class<ScalingPlanResource>("ScalingPlanResource")({ScalingPlanName: S.String, ScalingPlanVersion: S.Number, ServiceNamespace: S.String, ResourceId: S.String, ScalableDimension: S.String, ScalingPolicies: S.optional(ScalingPolicies), ScalingStatusCode: S.String, ScalingStatusMessage: S.optional(S.String)}) {}
export const ScalingPlanResources = S.Array(ScalingPlanResource);
export class CreateScalingPlanRequest extends S.Class<CreateScalingPlanRequest>("CreateScalingPlanRequest")({ScalingPlanName: S.String, ApplicationSource: ApplicationSource, ScalingInstructions: ScalingInstructions}) {}
export class DescribeScalingPlanResourcesResponse extends S.Class<DescribeScalingPlanResourcesResponse>("DescribeScalingPlanResourcesResponse")({ScalingPlanResources: S.optional(ScalingPlanResources), NextToken: S.optional(S.String)}) {}
export class InvalidNextTokenException extends S.Class<InvalidNextTokenException>("InvalidNextTokenException")({Message: S.optional(S.String)}) {}
export class CreateScalingPlanResponse extends S.Class<CreateScalingPlanResponse>("CreateScalingPlanResponse")({ScalingPlanVersion: S.Number}) {}
export class LimitExceededException extends S.Class<LimitExceededException>("LimitExceededException")({Message: S.optional(S.String)}) {}

//# Errors
export class ConcurrentUpdateExceptionError extends S.TaggedError<ConcurrentUpdateExceptionError>()("ConcurrentUpdateException", ConcurrentUpdateException.fields) {};
export class InternalServiceExceptionError extends S.TaggedError<InternalServiceExceptionError>()("InternalServiceException", InternalServiceException.fields) {};
export class ObjectNotFoundExceptionError extends S.TaggedError<ObjectNotFoundExceptionError>()("ObjectNotFoundException", ObjectNotFoundException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class InvalidNextTokenExceptionError extends S.TaggedError<InvalidNextTokenExceptionError>()("InvalidNextTokenException", InvalidNextTokenException.fields) {};
export class LimitExceededExceptionError extends S.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException.fields) {};

//# Operations
export const deleteScalingPlan = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.DeleteScalingPlan" }, DeleteScalingPlanRequest, DeleteScalingPlanResponse, [ConcurrentUpdateExceptionError, InternalServiceExceptionError, ObjectNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getScalingPlanResourceForecastData = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData" }, GetScalingPlanResourceForecastDataRequest, GetScalingPlanResourceForecastDataResponse, [InternalServiceExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateScalingPlan = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.UpdateScalingPlan" }, UpdateScalingPlanRequest, UpdateScalingPlanResponse, [ConcurrentUpdateExceptionError, InternalServiceExceptionError, ObjectNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeScalingPlanResources = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources" }, DescribeScalingPlanResourcesRequest, DescribeScalingPlanResourcesResponse, [ConcurrentUpdateExceptionError, InternalServiceExceptionError, InvalidNextTokenExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeScalingPlans = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.DescribeScalingPlans" }, DescribeScalingPlansRequest, DescribeScalingPlansResponse, [ConcurrentUpdateExceptionError, InternalServiceExceptionError, InvalidNextTokenExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createScalingPlan = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.CreateScalingPlan" }, CreateScalingPlanRequest, CreateScalingPlanResponse, [ConcurrentUpdateExceptionError, InternalServiceExceptionError, LimitExceededExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

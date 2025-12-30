import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const ScalingPlanNames = Schema.Array(Schema.String);
export const TagValues = Schema.Array(Schema.String);
export const TagFilter = Schema.Struct({Key: Schema.optional(Schema.String), Values: Schema.optional(TagValues)});
export const TagFilters = Schema.Array(TagFilter);
export const ApplicationSource = Schema.Struct({CloudFormationStackARN: Schema.optional(Schema.String), TagFilters: Schema.optional(TagFilters)});
export const ApplicationSources = Schema.Array(ApplicationSource);
export const DeleteScalingPlanRequest = Schema.Struct({ScalingPlanName: Schema.String, ScalingPlanVersion: Schema.Number});
export const DeleteScalingPlanResponse = Schema.Struct({});
export const DescribeScalingPlanResourcesRequest = Schema.Struct({ScalingPlanName: Schema.String, ScalingPlanVersion: Schema.Number, MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)});
export const DescribeScalingPlansRequest = Schema.Struct({ScalingPlanNames: Schema.optional(ScalingPlanNames), ScalingPlanVersion: Schema.optional(Schema.Number), ApplicationSources: Schema.optional(ApplicationSources), MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)});
export const GetScalingPlanResourceForecastDataRequest = Schema.Struct({ScalingPlanName: Schema.String, ScalingPlanVersion: Schema.Number, ServiceNamespace: Schema.String, ResourceId: Schema.String, ScalableDimension: Schema.String, ForecastDataType: Schema.String, StartTime: Schema.Date, EndTime: Schema.Date});
export const PredefinedScalingMetricSpecification = Schema.Struct({PredefinedScalingMetricType: Schema.String, ResourceLabel: Schema.optional(Schema.String)});
export const MetricDimension = Schema.Struct({Name: Schema.String, Value: Schema.String});
export const MetricDimensions = Schema.Array(MetricDimension);
export const CustomizedScalingMetricSpecification = Schema.Struct({MetricName: Schema.String, Namespace: Schema.String, Dimensions: Schema.optional(MetricDimensions), Statistic: Schema.String, Unit: Schema.optional(Schema.String)});
export const TargetTrackingConfiguration = Schema.Struct({PredefinedScalingMetricSpecification: Schema.optional(PredefinedScalingMetricSpecification), CustomizedScalingMetricSpecification: Schema.optional(CustomizedScalingMetricSpecification), TargetValue: Schema.Number, DisableScaleIn: Schema.optional(Schema.Boolean), ScaleOutCooldown: Schema.optional(Schema.Number), ScaleInCooldown: Schema.optional(Schema.Number), EstimatedInstanceWarmup: Schema.optional(Schema.Number)});
export const TargetTrackingConfigurations = Schema.Array(TargetTrackingConfiguration);
export const PredefinedLoadMetricSpecification = Schema.Struct({PredefinedLoadMetricType: Schema.String, ResourceLabel: Schema.optional(Schema.String)});
export const CustomizedLoadMetricSpecification = Schema.Struct({MetricName: Schema.String, Namespace: Schema.String, Dimensions: Schema.optional(MetricDimensions), Statistic: Schema.String, Unit: Schema.optional(Schema.String)});
export const ScalingInstruction = Schema.Struct({ServiceNamespace: Schema.String, ResourceId: Schema.String, ScalableDimension: Schema.String, MinCapacity: Schema.Number, MaxCapacity: Schema.Number, TargetTrackingConfigurations: TargetTrackingConfigurations, PredefinedLoadMetricSpecification: Schema.optional(PredefinedLoadMetricSpecification), CustomizedLoadMetricSpecification: Schema.optional(CustomizedLoadMetricSpecification), ScheduledActionBufferTime: Schema.optional(Schema.Number), PredictiveScalingMaxCapacityBehavior: Schema.optional(Schema.String), PredictiveScalingMaxCapacityBuffer: Schema.optional(Schema.Number), PredictiveScalingMode: Schema.optional(Schema.String), ScalingPolicyUpdateBehavior: Schema.optional(Schema.String), DisableDynamicScaling: Schema.optional(Schema.Boolean)});
export const ScalingInstructions = Schema.Array(ScalingInstruction);
export const UpdateScalingPlanRequest = Schema.Struct({ScalingPlanName: Schema.String, ScalingPlanVersion: Schema.Number, ApplicationSource: Schema.optional(ApplicationSource), ScalingInstructions: Schema.optional(ScalingInstructions)});
export const UpdateScalingPlanResponse = Schema.Struct({});
export const ConcurrentUpdateException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InternalServiceException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ScalingPlan = Schema.Struct({ScalingPlanName: Schema.String, ScalingPlanVersion: Schema.Number, ApplicationSource: ApplicationSource, ScalingInstructions: ScalingInstructions, StatusCode: Schema.String, StatusMessage: Schema.optional(Schema.String), StatusStartTime: Schema.optional(Schema.Date), CreationTime: Schema.optional(Schema.Date)});
export const ScalingPlans = Schema.Array(ScalingPlan);
export const Datapoint = Schema.Struct({Timestamp: Schema.optional(Schema.Date), Value: Schema.optional(Schema.Number)});
export const Datapoints = Schema.Array(Datapoint);
export const ObjectNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const DescribeScalingPlansResponse = Schema.Struct({ScalingPlans: Schema.optional(ScalingPlans), NextToken: Schema.optional(Schema.String)});
export const GetScalingPlanResourceForecastDataResponse = Schema.Struct({Datapoints: Datapoints});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ScalingPolicy = Schema.Struct({PolicyName: Schema.String, PolicyType: Schema.String, TargetTrackingConfiguration: Schema.optional(TargetTrackingConfiguration)});
export const ScalingPolicies = Schema.Array(ScalingPolicy);
export const ScalingPlanResource = Schema.Struct({ScalingPlanName: Schema.String, ScalingPlanVersion: Schema.Number, ServiceNamespace: Schema.String, ResourceId: Schema.String, ScalableDimension: Schema.String, ScalingPolicies: Schema.optional(ScalingPolicies), ScalingStatusCode: Schema.String, ScalingStatusMessage: Schema.optional(Schema.String)});
export const ScalingPlanResources = Schema.Array(ScalingPlanResource);
export const CreateScalingPlanRequest = Schema.Struct({ScalingPlanName: Schema.String, ApplicationSource: ApplicationSource, ScalingInstructions: ScalingInstructions});
export const DescribeScalingPlanResourcesResponse = Schema.Struct({ScalingPlanResources: Schema.optional(ScalingPlanResources), NextToken: Schema.optional(Schema.String)});
export const InvalidNextTokenException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const CreateScalingPlanResponse = Schema.Struct({ScalingPlanVersion: Schema.Number});
export const LimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class ConcurrentUpdateExceptionError extends Schema.TaggedError<ConcurrentUpdateExceptionError>()("ConcurrentUpdateException", ConcurrentUpdateException) {};
export class InternalServiceExceptionError extends Schema.TaggedError<InternalServiceExceptionError>()("InternalServiceException", InternalServiceException) {};
export class ObjectNotFoundExceptionError extends Schema.TaggedError<ObjectNotFoundExceptionError>()("ObjectNotFoundException", ObjectNotFoundException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class InvalidNextTokenExceptionError extends Schema.TaggedError<InvalidNextTokenExceptionError>()("InvalidNextTokenException", InvalidNextTokenException) {};
export class LimitExceededExceptionError extends Schema.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException) {};

//# Operations
export const deleteScalingPlan = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.DeleteScalingPlan" }, DeleteScalingPlanRequest, DeleteScalingPlanResponse, [ConcurrentUpdateExceptionError, InternalServiceExceptionError, ObjectNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getScalingPlanResourceForecastData = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData" }, GetScalingPlanResourceForecastDataRequest, GetScalingPlanResourceForecastDataResponse, [InternalServiceExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateScalingPlan = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.UpdateScalingPlan" }, UpdateScalingPlanRequest, UpdateScalingPlanResponse, [ConcurrentUpdateExceptionError, InternalServiceExceptionError, ObjectNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeScalingPlanResources = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources" }, DescribeScalingPlanResourcesRequest, DescribeScalingPlanResourcesResponse, [ConcurrentUpdateExceptionError, InternalServiceExceptionError, InvalidNextTokenExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeScalingPlans = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.DescribeScalingPlans" }, DescribeScalingPlansRequest, DescribeScalingPlansResponse, [ConcurrentUpdateExceptionError, InternalServiceExceptionError, InvalidNextTokenExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createScalingPlan = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-06", uri: "/", method: "POST", sdkId: "Auto Scaling Plans", sigV4ServiceName: "autoscaling-plans", name: "AnyScaleScalingPlannerFrontendService.CreateScalingPlan" }, CreateScalingPlanRequest, CreateScalingPlanResponse, [ConcurrentUpdateExceptionError, InternalServiceExceptionError, LimitExceededExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

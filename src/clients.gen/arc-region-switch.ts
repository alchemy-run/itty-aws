import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class ApprovePlanExecutionStepRequest extends S.Class<ApprovePlanExecutionStepRequest>("ApprovePlanExecutionStepRequest")({planArn: S.String, executionId: S.String, stepName: S.String, approval: S.String, comment: S.optional(S.String)}) {}
export class ApprovePlanExecutionStepResponse extends S.Class<ApprovePlanExecutionStepResponse>("ApprovePlanExecutionStepResponse")({}) {}
export class CancelPlanExecutionRequest extends S.Class<CancelPlanExecutionRequest>("CancelPlanExecutionRequest")({planArn: S.String, executionId: S.String, comment: S.optional(S.String)}) {}
export class CancelPlanExecutionResponse extends S.Class<CancelPlanExecutionResponse>("CancelPlanExecutionResponse")({}) {}
export class GetPlanEvaluationStatusRequest extends S.Class<GetPlanEvaluationStatusRequest>("GetPlanEvaluationStatusRequest")({planArn: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class GetPlanExecutionRequest extends S.Class<GetPlanExecutionRequest>("GetPlanExecutionRequest")({planArn: S.String, executionId: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class GetPlanInRegionRequest extends S.Class<GetPlanInRegionRequest>("GetPlanInRegionRequest")({arn: S.String}) {}
export class ListPlanExecutionEventsRequest extends S.Class<ListPlanExecutionEventsRequest>("ListPlanExecutionEventsRequest")({planArn: S.String, executionId: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String), name: S.optional(S.String)}) {}
export class ListPlanExecutionsRequest extends S.Class<ListPlanExecutionsRequest>("ListPlanExecutionsRequest")({planArn: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String), state: S.optional(S.String)}) {}
export class ListPlansInRegionRequest extends S.Class<ListPlansInRegionRequest>("ListPlansInRegionRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListRoute53HealthChecksRequest extends S.Class<ListRoute53HealthChecksRequest>("ListRoute53HealthChecksRequest")({arn: S.String, hostedZoneId: S.optional(S.String), recordName: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListRoute53HealthChecksInRegionRequest extends S.Class<ListRoute53HealthChecksInRegionRequest>("ListRoute53HealthChecksInRegionRequest")({arn: S.String, hostedZoneId: S.optional(S.String), recordName: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class StartPlanExecutionRequest extends S.Class<StartPlanExecutionRequest>("StartPlanExecutionRequest")({planArn: S.String, targetRegion: S.String, action: S.String, mode: S.optional(S.String), comment: S.optional(S.String), latestVersion: S.optional(S.String)}) {}
export class UpdatePlanExecutionRequest extends S.Class<UpdatePlanExecutionRequest>("UpdatePlanExecutionRequest")({planArn: S.String, executionId: S.String, action: S.String, comment: S.optional(S.String)}) {}
export class UpdatePlanExecutionResponse extends S.Class<UpdatePlanExecutionResponse>("UpdatePlanExecutionResponse")({}) {}
export class UpdatePlanExecutionStepRequest extends S.Class<UpdatePlanExecutionStepRequest>("UpdatePlanExecutionStepRequest")({planArn: S.String, executionId: S.String, comment: S.String, stepName: S.String, actionToTake: S.String}) {}
export class UpdatePlanExecutionStepResponse extends S.Class<UpdatePlanExecutionStepResponse>("UpdatePlanExecutionStepResponse")({}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String}) {}
export type Steps = Step[];
export const Steps = S.Array(S.suspend((): S.Schema<Step, any> => Step)) as any as S.Schema<Steps>;
export class Workflow extends S.Class<Workflow>("Workflow")({steps: S.optional(Steps), workflowTargetAction: S.String, workflowTargetRegion: S.optional(S.String), workflowDescription: S.optional(S.String)}) {}
export const WorkflowList = S.Array(Workflow);
export class AssociatedAlarm extends S.Class<AssociatedAlarm>("AssociatedAlarm")({crossAccountRole: S.optional(S.String), externalId: S.optional(S.String), resourceIdentifier: S.String, alarmType: S.String}) {}
export const AssociatedAlarmMap = S.Record({key: S.String, value: AssociatedAlarm});
export class TriggerCondition extends S.Class<TriggerCondition>("TriggerCondition")({associatedAlarmName: S.String, condition: S.String}) {}
export const TriggerConditionList = S.Array(TriggerCondition);
export class Trigger extends S.Class<Trigger>("Trigger")({description: S.optional(S.String), targetRegion: S.String, action: S.String, conditions: TriggerConditionList, minDelayMinutesBetweenExecutions: S.Number}) {}
export const TriggerList = S.Array(Trigger);
export class S3ReportOutputConfiguration extends S.Class<S3ReportOutputConfiguration>("S3ReportOutputConfiguration")({bucketPath: S.optional(S.String), bucketOwner: S.optional(S.String)}) {}
export const ReportOutputConfiguration = S.Union(S3ReportOutputConfiguration);
export const ReportOutputList = S.Array(ReportOutputConfiguration);
export class ReportConfiguration extends S.Class<ReportConfiguration>("ReportConfiguration")({reportOutput: S.optional(ReportOutputList)}) {}
export const RegionList = S.Array(S.String);
export class Plan extends S.Class<Plan>("Plan")({arn: S.String, description: S.optional(S.String), workflows: WorkflowList, executionRole: S.String, recoveryTimeObjectiveMinutes: S.optional(S.Number), associatedAlarms: S.optional(AssociatedAlarmMap), triggers: S.optional(TriggerList), reportConfiguration: S.optional(ReportConfiguration), name: S.String, regions: RegionList, recoveryApproach: S.String, primaryRegion: S.optional(S.String), owner: S.String, version: S.optional(S.String), updatedAt: S.optional(S.Date)}) {}
export class GetPlanInRegionResponse extends S.Class<GetPlanInRegionResponse>("GetPlanInRegionResponse")({plan: S.optional(Plan)}) {}
export class Route53HealthCheck extends S.Class<Route53HealthCheck>("Route53HealthCheck")({hostedZoneId: S.String, recordName: S.String, healthCheckId: S.optional(S.String), status: S.optional(S.String), region: S.String}) {}
export const Route53HealthCheckList = S.Array(Route53HealthCheck);
export class ListRoute53HealthChecksInRegionResponse extends S.Class<ListRoute53HealthChecksInRegionResponse>("ListRoute53HealthChecksInRegionResponse")({healthChecks: S.optional(Route53HealthCheckList), nextToken: S.optional(S.String)}) {}
export class StartPlanExecutionResponse extends S.Class<StartPlanExecutionResponse>("StartPlanExecutionResponse")({executionId: S.optional(S.String), plan: S.optional(S.String), planVersion: S.optional(S.String), activateRegion: S.optional(S.String), deactivateRegion: S.optional(S.String)}) {}
export class IllegalStateException extends S.Class<IllegalStateException>("IllegalStateException")({message: S.String}) {}
export const Resources = S.Array(S.String);
export class StepState extends S.Class<StepState>("StepState")({name: S.optional(S.String), status: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), stepMode: S.optional(S.String)}) {}
export const StepStates = S.Array(StepState);
export class ExecutionEvent extends S.Class<ExecutionEvent>("ExecutionEvent")({timestamp: S.optional(S.Date), type: S.optional(S.String), stepName: S.optional(S.String), executionBlockType: S.optional(S.String), resources: S.optional(Resources), error: S.optional(S.String), description: S.optional(S.String), eventId: S.String, previousEventId: S.optional(S.String)}) {}
export const ExecutionEventList = S.Array(ExecutionEvent);
export class AbbreviatedExecution extends S.Class<AbbreviatedExecution>("AbbreviatedExecution")({planArn: S.String, executionId: S.String, version: S.optional(S.String), updatedAt: S.optional(S.Date), comment: S.optional(S.String), startTime: S.Date, endTime: S.optional(S.Date), mode: S.String, executionState: S.String, executionAction: S.String, executionRegion: S.String, actualRecoveryTime: S.optional(S.String)}) {}
export const AbbreviatedExecutionsList = S.Array(AbbreviatedExecution);
export class AbbreviatedPlan extends S.Class<AbbreviatedPlan>("AbbreviatedPlan")({arn: S.String, owner: S.String, name: S.String, regions: RegionList, recoveryApproach: S.String, primaryRegion: S.optional(S.String), version: S.optional(S.String), updatedAt: S.optional(S.Date), description: S.optional(S.String), executionRole: S.optional(S.String), activePlanExecution: S.optional(S.String), recoveryTimeObjectiveMinutes: S.optional(S.Number)}) {}
export const PlanList = S.Array(AbbreviatedPlan);
export class ListPlanExecutionEventsResponse extends S.Class<ListPlanExecutionEventsResponse>("ListPlanExecutionEventsResponse")({items: S.optional(ExecutionEventList), nextToken: S.optional(S.String)}) {}
export class ListPlanExecutionsResponse extends S.Class<ListPlanExecutionsResponse>("ListPlanExecutionsResponse")({items: S.optional(AbbreviatedExecutionsList), nextToken: S.optional(S.String)}) {}
export class ListPlansInRegionResponse extends S.Class<ListPlansInRegionResponse>("ListPlansInRegionResponse")({plans: S.optional(PlanList), nextToken: S.optional(S.String)}) {}
export class ListRoute53HealthChecksResponse extends S.Class<ListRoute53HealthChecksResponse>("ListRoute53HealthChecksResponse")({healthChecks: S.optional(Route53HealthCheckList), nextToken: S.optional(S.String)}) {}
export class IllegalArgumentException extends S.Class<IllegalArgumentException>("IllegalArgumentException")({message: S.String}) {}
export class MinimalWorkflow extends S.Class<MinimalWorkflow>("MinimalWorkflow")({action: S.optional(S.String), name: S.optional(S.String)}) {}
export class ResourceWarning extends S.Class<ResourceWarning>("ResourceWarning")({workflow: S.optional(MinimalWorkflow), version: S.String, stepName: S.optional(S.String), resourceArn: S.optional(S.String), warningStatus: S.String, warningUpdatedTime: S.Date, warningMessage: S.String}) {}
export const PlanWarnings = S.Array(ResourceWarning);
export class S3ReportOutput extends S.Class<S3ReportOutput>("S3ReportOutput")({s3ObjectKey: S.optional(S.String)}) {}
export class FailedReportOutput extends S.Class<FailedReportOutput>("FailedReportOutput")({errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export class GetPlanEvaluationStatusResponse extends S.Class<GetPlanEvaluationStatusResponse>("GetPlanEvaluationStatusResponse")({planArn: S.String, lastEvaluationTime: S.optional(S.Date), lastEvaluatedVersion: S.optional(S.String), region: S.optional(S.String), evaluationState: S.optional(S.String), warnings: S.optional(PlanWarnings), nextToken: S.optional(S.String)}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String}) {}
export const ReportOutput = S.Union(S3ReportOutput, FailedReportOutput);
export const AuroraClusterArns = S.Array(S.String);
export const DocumentDbClusterArns = S.Array(S.String);
export class GeneratedReport extends S.Class<GeneratedReport>("GeneratedReport")({reportGenerationTime: S.optional(S.Date), reportOutput: S.optional(ReportOutput)}) {}
export const GeneratedReportDetails = S.Array(GeneratedReport);
export class ExecutionApprovalConfiguration extends S.Class<ExecutionApprovalConfiguration>("ExecutionApprovalConfiguration")({timeoutMinutes: S.optional(S.Number), approvalRole: S.String}) {}
export class ParallelExecutionBlockConfiguration extends S.Class<ParallelExecutionBlockConfiguration>("ParallelExecutionBlockConfiguration")({steps: S.suspend(() => Steps)}) {}
export class RegionSwitchPlanConfiguration extends S.Class<RegionSwitchPlanConfiguration>("RegionSwitchPlanConfiguration")({crossAccountRole: S.optional(S.String), externalId: S.optional(S.String), arn: S.String}) {}
export class Lambdas extends S.Class<Lambdas>("Lambdas")({crossAccountRole: S.optional(S.String), externalId: S.optional(S.String), arn: S.optional(S.String)}) {}
export const LambdaList = S.Array(Lambdas);
export class LambdaUngraceful extends S.Class<LambdaUngraceful>("LambdaUngraceful")({behavior: S.optional(S.String)}) {}
export class Asg extends S.Class<Asg>("Asg")({crossAccountRole: S.optional(S.String), externalId: S.optional(S.String), arn: S.optional(S.String)}) {}
export const AsgList = S.Array(Asg);
export class Ec2Ungraceful extends S.Class<Ec2Ungraceful>("Ec2Ungraceful")({minimumSuccessPercentage: S.Number}) {}
export class GlobalAuroraUngraceful extends S.Class<GlobalAuroraUngraceful>("GlobalAuroraUngraceful")({ungraceful: S.optional(S.String)}) {}
export class Service extends S.Class<Service>("Service")({crossAccountRole: S.optional(S.String), externalId: S.optional(S.String), clusterArn: S.optional(S.String), serviceArn: S.optional(S.String)}) {}
export const ServiceList = S.Array(Service);
export class EcsUngraceful extends S.Class<EcsUngraceful>("EcsUngraceful")({minimumSuccessPercentage: S.Number}) {}
export class KubernetesResourceType extends S.Class<KubernetesResourceType>("KubernetesResourceType")({apiVersion: S.String, kind: S.String}) {}
export class EksCluster extends S.Class<EksCluster>("EksCluster")({crossAccountRole: S.optional(S.String), externalId: S.optional(S.String), clusterArn: S.String}) {}
export const EksClusters = S.Array(EksCluster);
export class EksResourceScalingUngraceful extends S.Class<EksResourceScalingUngraceful>("EksResourceScalingUngraceful")({minimumSuccessPercentage: S.Number}) {}
export class Route53ResourceRecordSet extends S.Class<Route53ResourceRecordSet>("Route53ResourceRecordSet")({recordSetIdentifier: S.optional(S.String), region: S.optional(S.String)}) {}
export const Route53ResourceRecordSetList = S.Array(Route53ResourceRecordSet);
export class DocumentDbUngraceful extends S.Class<DocumentDbUngraceful>("DocumentDbUngraceful")({ungraceful: S.optional(S.String)}) {}
export class CustomActionLambdaConfiguration extends S.Class<CustomActionLambdaConfiguration>("CustomActionLambdaConfiguration")({timeoutMinutes: S.optional(S.Number), lambdas: LambdaList, retryIntervalMinutes: S.Number, regionToRun: S.String, ungraceful: S.optional(LambdaUngraceful)}) {}
export class Ec2AsgCapacityIncreaseConfiguration extends S.Class<Ec2AsgCapacityIncreaseConfiguration>("Ec2AsgCapacityIncreaseConfiguration")({timeoutMinutes: S.optional(S.Number), asgs: AsgList, ungraceful: S.optional(Ec2Ungraceful), targetPercent: S.optional(S.Number), capacityMonitoringApproach: S.optional(S.String)}) {}
export class GlobalAuroraConfiguration extends S.Class<GlobalAuroraConfiguration>("GlobalAuroraConfiguration")({timeoutMinutes: S.optional(S.Number), crossAccountRole: S.optional(S.String), externalId: S.optional(S.String), behavior: S.String, ungraceful: S.optional(GlobalAuroraUngraceful), globalClusterIdentifier: S.String, databaseClusterArns: AuroraClusterArns}) {}
export class EcsCapacityIncreaseConfiguration extends S.Class<EcsCapacityIncreaseConfiguration>("EcsCapacityIncreaseConfiguration")({timeoutMinutes: S.optional(S.Number), services: ServiceList, ungraceful: S.optional(EcsUngraceful), targetPercent: S.optional(S.Number), capacityMonitoringApproach: S.optional(S.String)}) {}
export class Route53HealthCheckConfiguration extends S.Class<Route53HealthCheckConfiguration>("Route53HealthCheckConfiguration")({timeoutMinutes: S.optional(S.Number), crossAccountRole: S.optional(S.String), externalId: S.optional(S.String), hostedZoneId: S.String, recordName: S.String, recordSets: S.optional(Route53ResourceRecordSetList)}) {}
export class DocumentDbConfiguration extends S.Class<DocumentDbConfiguration>("DocumentDbConfiguration")({timeoutMinutes: S.optional(S.Number), crossAccountRole: S.optional(S.String), externalId: S.optional(S.String), behavior: S.String, ungraceful: S.optional(DocumentDbUngraceful), globalClusterIdentifier: S.String, databaseClusterArns: DocumentDbClusterArns}) {}
export class ArcRoutingControlState extends S.Class<ArcRoutingControlState>("ArcRoutingControlState")({routingControlArn: S.String, state: S.String}) {}
export const ArcRoutingControlStates = S.Array(ArcRoutingControlState);
export const RegionAndRoutingControls = S.Record({key: S.String, value: ArcRoutingControlStates});
export class KubernetesScalingResource extends S.Class<KubernetesScalingResource>("KubernetesScalingResource")({namespace: S.String, name: S.String, hpaName: S.optional(S.String)}) {}
export class ArcRoutingControlConfiguration extends S.Class<ArcRoutingControlConfiguration>("ArcRoutingControlConfiguration")({timeoutMinutes: S.optional(S.Number), crossAccountRole: S.optional(S.String), externalId: S.optional(S.String), regionAndRoutingControls: RegionAndRoutingControls}) {}
export const RegionalScalingResource = S.Record({key: S.String, value: KubernetesScalingResource});
export const KubernetesScalingApplication = S.Record({key: S.String, value: RegionalScalingResource});
export const KubernetesScalingApps = S.Array(KubernetesScalingApplication);
export class EksResourceScalingConfiguration extends S.Class<EksResourceScalingConfiguration>("EksResourceScalingConfiguration")({timeoutMinutes: S.optional(S.Number), kubernetesResourceType: KubernetesResourceType, scalingResources: S.optional(KubernetesScalingApps), eksClusters: S.optional(EksClusters), ungraceful: S.optional(EksResourceScalingUngraceful), targetPercent: S.optional(S.Number), capacityMonitoringApproach: S.optional(S.String)}) {}
export type ExecutionBlockConfiguration = CustomActionLambdaConfiguration | Ec2AsgCapacityIncreaseConfiguration | ExecutionApprovalConfiguration | ArcRoutingControlConfiguration | GlobalAuroraConfiguration | ParallelExecutionBlockConfiguration | RegionSwitchPlanConfiguration | EcsCapacityIncreaseConfiguration | EksResourceScalingConfiguration | Route53HealthCheckConfiguration | DocumentDbConfiguration;
export const ExecutionBlockConfiguration = S.Union(CustomActionLambdaConfiguration, Ec2AsgCapacityIncreaseConfiguration, ExecutionApprovalConfiguration, ArcRoutingControlConfiguration, GlobalAuroraConfiguration, S.suspend((): S.Schema<ParallelExecutionBlockConfiguration, any> => ParallelExecutionBlockConfiguration), RegionSwitchPlanConfiguration, EcsCapacityIncreaseConfiguration, EksResourceScalingConfiguration, Route53HealthCheckConfiguration, DocumentDbConfiguration) as any as S.Schema<ExecutionBlockConfiguration>;
export class Step extends S.Class<Step>("Step")({name: S.String, description: S.optional(S.String), executionBlockConfiguration: S.suspend(() => ExecutionBlockConfiguration), executionBlockType: S.String}) {}
export class GetPlanExecutionResponse extends S.Class<GetPlanExecutionResponse>("GetPlanExecutionResponse")({planArn: S.String, executionId: S.String, version: S.optional(S.String), updatedAt: S.optional(S.Date), comment: S.optional(S.String), startTime: S.Date, endTime: S.optional(S.Date), mode: S.String, executionState: S.String, executionAction: S.String, executionRegion: S.String, stepStates: S.optional(StepStates), plan: S.optional(Plan), actualRecoveryTime: S.optional(S.String), generatedReportDetails: S.optional(GeneratedReportDetails), nextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class IllegalArgumentExceptionError extends S.TaggedError<IllegalArgumentExceptionError>()("IllegalArgumentException", IllegalArgumentException.fields) {};
export class IllegalStateExceptionError extends S.TaggedError<IllegalStateExceptionError>()("IllegalStateException", IllegalStateException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};

//# Operations
export const updatePlanExecutionStep = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/", method: "POST", sdkId: "ARC Region switch", sigV4ServiceName: "arc-region-switch", name: "ArcRegionSwitch.UpdatePlanExecutionStep" }, UpdatePlanExecutionStepRequest, UpdatePlanExecutionStepResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const approvePlanExecutionStep = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/", method: "POST", sdkId: "ARC Region switch", sigV4ServiceName: "arc-region-switch", name: "ArcRegionSwitch.ApprovePlanExecutionStep" }, ApprovePlanExecutionStepRequest, ApprovePlanExecutionStepResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const cancelPlanExecution = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/", method: "POST", sdkId: "ARC Region switch", sigV4ServiceName: "arc-region-switch", name: "ArcRegionSwitch.CancelPlanExecution" }, CancelPlanExecutionRequest, CancelPlanExecutionResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getPlanInRegion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/", method: "POST", sdkId: "ARC Region switch", sigV4ServiceName: "arc-region-switch", name: "ArcRegionSwitch.GetPlanInRegion" }, GetPlanInRegionRequest, GetPlanInRegionResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startPlanExecution = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/", method: "POST", sdkId: "ARC Region switch", sigV4ServiceName: "arc-region-switch", name: "ArcRegionSwitch.StartPlanExecution" }, StartPlanExecutionRequest, StartPlanExecutionResponse, [AccessDeniedExceptionError, IllegalArgumentExceptionError, IllegalStateExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updatePlanExecution = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/", method: "POST", sdkId: "ARC Region switch", sigV4ServiceName: "arc-region-switch", name: "ArcRegionSwitch.UpdatePlanExecution" }, UpdatePlanExecutionRequest, UpdatePlanExecutionResponse, [AccessDeniedExceptionError, IllegalStateExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listPlanExecutionEvents = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/", method: "POST", sdkId: "ARC Region switch", sigV4ServiceName: "arc-region-switch", name: "ArcRegionSwitch.ListPlanExecutionEvents" }, ListPlanExecutionEventsRequest, ListPlanExecutionEventsResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listPlanExecutions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/", method: "POST", sdkId: "ARC Region switch", sigV4ServiceName: "arc-region-switch", name: "ArcRegionSwitch.ListPlanExecutions" }, ListPlanExecutionsRequest, ListPlanExecutionsResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listPlansInRegion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/", method: "POST", sdkId: "ARC Region switch", sigV4ServiceName: "arc-region-switch", name: "ArcRegionSwitch.ListPlansInRegion" }, ListPlansInRegionRequest, ListPlansInRegionResponse, [AccessDeniedExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listRoute53HealthChecksInRegion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/", method: "POST", sdkId: "ARC Region switch", sigV4ServiceName: "arc-region-switch", name: "ArcRegionSwitch.ListRoute53HealthChecksInRegion" }, ListRoute53HealthChecksInRegionRequest, ListRoute53HealthChecksInRegionResponse, [AccessDeniedExceptionError, IllegalArgumentExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getPlanEvaluationStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/", method: "POST", sdkId: "ARC Region switch", sigV4ServiceName: "arc-region-switch", name: "ArcRegionSwitch.GetPlanEvaluationStatus" }, GetPlanEvaluationStatusRequest, GetPlanEvaluationStatusResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listRoute53HealthChecks = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/", method: "POST", sdkId: "ARC Region switch", sigV4ServiceName: "arc-region-switch", name: "ArcRegionSwitch.ListRoute53HealthChecks" }, ListRoute53HealthChecksRequest, ListRoute53HealthChecksResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getPlanExecution = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/", method: "POST", sdkId: "ARC Region switch", sigV4ServiceName: "arc-region-switch", name: "ArcRegionSwitch.GetPlanExecution" }, GetPlanExecutionRequest, GetPlanExecutionResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

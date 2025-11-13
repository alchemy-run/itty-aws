import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | ThrottlingException | UnrecognizedClientException | UnknownOperationException | ValidationError | ValidationException | AccessDeniedException;
import { AWSServiceClient } from "../../client.ts";

export declare class ARCRegionswitch extends AWSServiceClient {
  approvePlanExecutionStep(
    input: ApprovePlanExecutionStepRequest,
  ): Effect.Effect<
    ApprovePlanExecutionStepResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  cancelPlanExecution(
    input: CancelPlanExecutionRequest,
  ): Effect.Effect<
    CancelPlanExecutionResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  getPlanEvaluationStatus(
    input: GetPlanEvaluationStatusRequest,
  ): Effect.Effect<
    GetPlanEvaluationStatusResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  getPlanExecution(
    input: GetPlanExecutionRequest,
  ): Effect.Effect<
    GetPlanExecutionResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  getPlanInRegion(
    input: GetPlanInRegionRequest,
  ): Effect.Effect<
    GetPlanInRegionResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  listPlanExecutionEvents(
    input: ListPlanExecutionEventsRequest,
  ): Effect.Effect<
    ListPlanExecutionEventsResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  listPlanExecutions(
    input: ListPlanExecutionsRequest,
  ): Effect.Effect<
    ListPlanExecutionsResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  listPlansInRegion(
    input: ListPlansInRegionRequest,
  ): Effect.Effect<
    ListPlansInRegionResponse,
    AccessDeniedException | CommonAwsError
  >;
  listRoute53HealthChecks(
    input: ListRoute53HealthChecksRequest,
  ): Effect.Effect<
    ListRoute53HealthChecksResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  startPlanExecution(
    input: StartPlanExecutionRequest,
  ): Effect.Effect<
    StartPlanExecutionResponse,
    AccessDeniedException | IllegalArgumentException | IllegalStateException | ResourceNotFoundException | CommonAwsError
  >;
  updatePlanExecution(
    input: UpdatePlanExecutionRequest,
  ): Effect.Effect<
    UpdatePlanExecutionResponse,
    AccessDeniedException | IllegalStateException | ResourceNotFoundException | CommonAwsError
  >;
  updatePlanExecutionStep(
    input: UpdatePlanExecutionStepRequest,
  ): Effect.Effect<
    UpdatePlanExecutionStepResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  createPlan(
    input: CreatePlanRequest,
  ): Effect.Effect<
    CreatePlanResponse,
    CommonAwsError
  >;
  deletePlan(
    input: DeletePlanRequest,
  ): Effect.Effect<
    DeletePlanResponse,
    IllegalStateException | ResourceNotFoundException | CommonAwsError
  >;
  getPlan(
    input: GetPlanRequest,
  ): Effect.Effect<
    GetPlanResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  listPlans(
    input: ListPlansRequest,
  ): Effect.Effect<
    ListPlansResponse,
    CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  updatePlan(
    input: UpdatePlanRequest,
  ): Effect.Effect<
    UpdatePlanResponse,
    ResourceNotFoundException | CommonAwsError
  >;
}

export interface AbbreviatedExecution {
  planArn: string;
  executionId: string;
  version?: string;
  updatedAt?: Date | string;
  comment?: string;
  startTime: Date | string;
  endTime?: Date | string;
  mode: ExecutionMode;
  executionState: ExecutionState;
  executionAction: ExecutionAction;
  executionRegion: string;
  actualRecoveryTime?: string;
}
export type AbbreviatedExecutionsList = Array<AbbreviatedExecution>;
export interface AbbreviatedPlan {
  arn: string;
  owner: string;
  name: string;
  regions: Array<string>;
  recoveryApproach: RecoveryApproach;
  primaryRegion?: string;
  version?: string;
  updatedAt?: Date | string;
  description?: string;
  executionRole?: string;
  activePlanExecution?: string;
  recoveryTimeObjectiveMinutes?: number;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccountId = string;

export type AlarmCondition = "red" | "green";
export type AlarmType = "applicationHealth" | "trigger";
export type Approval = "approve" | "decline";
export interface ApprovePlanExecutionStepRequest {
  planArn: string;
  executionId: string;
  stepName: string;
  approval: Approval;
  comment?: string;
}
export interface ApprovePlanExecutionStepResponse {
}
export interface ArcRoutingControlConfiguration {
  timeoutMinutes?: number;
  crossAccountRole?: string;
  externalId?: string;
  regionAndRoutingControls: Record<string, Array<ArcRoutingControlState>>;
}
export interface ArcRoutingControlState {
  routingControlArn: string;
  state: RoutingControlStateChange;
}
export type ArcRoutingControlStates = Array<ArcRoutingControlState>;
export interface Asg {
  crossAccountRole?: string;
  externalId?: string;
  arn?: string;
}
export type AsgArn = string;

export type AsgList = Array<Asg>;
export interface AssociatedAlarm {
  crossAccountRole?: string;
  externalId?: string;
  resourceIdentifier: string;
  alarmType: AlarmType;
}
export type AssociatedAlarmMap = Record<string, AssociatedAlarm>;
export type AuroraClusterArn = string;

export type AuroraClusterArns = Array<string>;
export interface CancelPlanExecutionRequest {
  planArn: string;
  executionId: string;
  comment?: string;
}
export interface CancelPlanExecutionResponse {
}
export interface CreatePlanRequest {
  description?: string;
  workflows: Array<Workflow>;
  executionRole: string;
  recoveryTimeObjectiveMinutes?: number;
  associatedAlarms?: Record<string, AssociatedAlarm>;
  triggers?: Array<Trigger>;
  name: string;
  regions: Array<string>;
  recoveryApproach: RecoveryApproach;
  primaryRegion?: string;
  tags?: Record<string, string>;
}
export interface CreatePlanResponse {
  plan?: Plan;
}
export interface CustomActionLambdaConfiguration {
  timeoutMinutes?: number;
  lambdas: Array<Lambdas>;
  retryIntervalMinutes: number;
  regionToRun: RegionToRunIn;
  ungraceful?: LambdaUngraceful;
}
export interface DeletePlanRequest {
  arn: string;
}
export interface DeletePlanResponse {
}
export type Duration = string;

export interface Ec2AsgCapacityIncreaseConfiguration {
  timeoutMinutes?: number;
  asgs: Array<Asg>;
  ungraceful?: Ec2Ungraceful;
  targetPercent?: number;
  capacityMonitoringApproach?: Ec2AsgCapacityMonitoringApproach;
}
export type Ec2AsgCapacityMonitoringApproach = "sampledMaxInLast24Hours" | "autoscalingMaxInLast24Hours";
export interface Ec2Ungraceful {
  minimumSuccessPercentage: number;
}
export interface EcsCapacityIncreaseConfiguration {
  timeoutMinutes?: number;
  services: Array<Service>;
  ungraceful?: EcsUngraceful;
  targetPercent?: number;
  capacityMonitoringApproach?: EcsCapacityMonitoringApproach;
}
export type EcsCapacityMonitoringApproach = "sampledMaxInLast24Hours" | "containerInsightsMaxInLast24Hours";
export type EcsClusterArn = string;

export type EcsServiceArn = string;

export interface EcsUngraceful {
  minimumSuccessPercentage: number;
}
export type EksCapacityMonitoringApproach = "sampledMaxInLast24Hours";
export interface EksCluster {
  crossAccountRole?: string;
  externalId?: string;
  clusterArn: string;
}
export type EksClusterArn = string;

export type EksClusters = Array<EksCluster>;
export interface EksResourceScalingConfiguration {
  timeoutMinutes?: number;
  kubernetesResourceType: KubernetesResourceType;
  scalingResources?: Array<Record<string, Record<string, KubernetesScalingResource>>>;
  eksClusters?: Array<EksCluster>;
  ungraceful?: EksResourceScalingUngraceful;
  targetPercent?: number;
  capacityMonitoringApproach?: EksCapacityMonitoringApproach;
}
export interface EksResourceScalingUngraceful {
  minimumSuccessPercentage: number;
}
export type EvaluationStatus = "passed" | "actionRequired" | "pendingEvaluation" | "unknown";
export type ExecutionAction = "activate" | "deactivate";
export interface ExecutionApprovalConfiguration {
  timeoutMinutes?: number;
  approvalRole: string;
}
interface _ExecutionBlockConfiguration {
  customActionLambdaConfig?: CustomActionLambdaConfiguration;
  ec2AsgCapacityIncreaseConfig?: Ec2AsgCapacityIncreaseConfiguration;
  executionApprovalConfig?: ExecutionApprovalConfiguration;
  arcRoutingControlConfig?: ArcRoutingControlConfiguration;
  globalAuroraConfig?: GlobalAuroraConfiguration;
  parallelConfig?: ParallelExecutionBlockConfiguration;
  regionSwitchPlanConfig?: RegionSwitchPlanConfiguration;
  ecsCapacityIncreaseConfig?: EcsCapacityIncreaseConfiguration;
  eksResourceScalingConfig?: EksResourceScalingConfiguration;
  route53HealthCheckConfig?: Route53HealthCheckConfiguration;
}

export type ExecutionBlockConfiguration = (_ExecutionBlockConfiguration & { customActionLambdaConfig: CustomActionLambdaConfiguration }) | (_ExecutionBlockConfiguration & { ec2AsgCapacityIncreaseConfig: Ec2AsgCapacityIncreaseConfiguration }) | (_ExecutionBlockConfiguration & { executionApprovalConfig: ExecutionApprovalConfiguration }) | (_ExecutionBlockConfiguration & { arcRoutingControlConfig: ArcRoutingControlConfiguration }) | (_ExecutionBlockConfiguration & { globalAuroraConfig: GlobalAuroraConfiguration }) | (_ExecutionBlockConfiguration & { parallelConfig: ParallelExecutionBlockConfiguration }) | (_ExecutionBlockConfiguration & { regionSwitchPlanConfig: RegionSwitchPlanConfiguration }) | (_ExecutionBlockConfiguration & { ecsCapacityIncreaseConfig: EcsCapacityIncreaseConfiguration }) | (_ExecutionBlockConfiguration & { eksResourceScalingConfig: EksResourceScalingConfiguration }) | (_ExecutionBlockConfiguration & { route53HealthCheckConfig: Route53HealthCheckConfiguration });
export type ExecutionBlockType = "CustomActionLambda" | "ManualApproval" | "AuroraGlobalDatabase" | "EC2AutoScaling" | "ARCRoutingControl" | "ARCRegionSwitchPlan" | "Parallel" | "ECSServiceScaling" | "EKSResourceScaling" | "Route53HealthCheck";
export type ExecutionComment = string;

export interface ExecutionEvent {
  timestamp?: Date | string;
  type?: ExecutionEventType;
  stepName?: string;
  executionBlockType?: ExecutionBlockType;
  resources?: Array<string>;
  error?: string;
  description?: string;
  eventId: string;
  previousEventId?: string;
}
export type ExecutionEventList = Array<ExecutionEvent>;
export type ExecutionEventType = "unknown" | "executionPending" | "executionStarted" | "executionSucceeded" | "executionFailed" | "executionPausing" | "executionPaused" | "executionCanceling" | "executionCanceled" | "executionPendingApproval" | "executionBehaviorChangedToUngraceful" | "executionBehaviorChangedToGraceful" | "executionPendingChildPlanManualApproval" | "executionSuccessMonitoringApplicationHealth" | "stepStarted" | "stepUpdate" | "stepSucceeded" | "stepFailed" | "stepSkipped" | "stepPausedByError" | "stepPausedByOperator" | "stepCanceled" | "stepPendingApproval" | "stepExecutionBehaviorChangedToUngraceful" | "stepPendingApplicationHealthMonitor";
export type ExecutionId = string;

export type ExecutionMode = "graceful" | "ungraceful";
export type ExecutionState = "inProgress" | "pausedByFailedStep" | "pausedByOperator" | "completed" | "completedWithExceptions" | "canceled" | "planExecutionTimedOut" | "pendingManualApproval" | "failed" | "pending" | "completedMonitoringApplicationHealth";
export interface GetPlanEvaluationStatusRequest {
  planArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface GetPlanEvaluationStatusResponse {
  planArn: string;
  lastEvaluationTime?: Date | string;
  lastEvaluatedVersion?: string;
  region?: string;
  evaluationState?: EvaluationStatus;
  warnings?: Array<ResourceWarning>;
  nextToken?: string;
}
export interface GetPlanExecutionRequest {
  planArn: string;
  executionId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface GetPlanExecutionResponse {
  planArn: string;
  executionId: string;
  version?: string;
  updatedAt?: Date | string;
  comment?: string;
  startTime: Date | string;
  endTime?: Date | string;
  mode: ExecutionMode;
  executionState: ExecutionState;
  executionAction: ExecutionAction;
  executionRegion: string;
  stepStates?: Array<StepState>;
  plan?: Plan;
  actualRecoveryTime?: string;
  nextToken?: string;
}
export type GetPlanExecutionStepStatesMaxResults = number;

export interface GetPlanInRegionRequest {
  arn: string;
}
export interface GetPlanInRegionResponse {
  plan?: Plan;
}
export interface GetPlanRequest {
  arn: string;
}
export interface GetPlanResponse {
  plan?: Plan;
}
export interface GlobalAuroraConfiguration {
  timeoutMinutes?: number;
  crossAccountRole?: string;
  externalId?: string;
  behavior: GlobalAuroraDefaultBehavior;
  ungraceful?: GlobalAuroraUngraceful;
  globalClusterIdentifier: string;
  databaseClusterArns: Array<string>;
}
export type GlobalAuroraDefaultBehavior = "switchoverOnly" | "failover";
export interface GlobalAuroraUngraceful {
  ungraceful?: GlobalAuroraUngracefulBehavior;
}
export type GlobalAuroraUngracefulBehavior = "failover";
export type GlobalClusterIdentifier = string;

export type IamRoleArn = string;

export declare class IllegalArgumentException extends EffectData.TaggedError(
  "IllegalArgumentException",
)<{
  readonly message: string;
}> {}
export declare class IllegalStateException extends EffectData.TaggedError(
  "IllegalStateException",
)<{
  readonly message: string;
}> {}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type KubernetesNamespace = string;

export interface KubernetesResourceType {
  apiVersion: string;
  kind: string;
}
export type KubernetesScalingApplication = Record<string, Record<string, KubernetesScalingResource>>;
export type KubernetesScalingApps = Array<Record<string, Record<string, KubernetesScalingResource>>>;
export interface KubernetesScalingResource {
  namespace: string;
  name: string;
  hpaName?: string;
}
export type LambdaArn = string;

export type LambdaList = Array<Lambdas>;
export interface Lambdas {
  crossAccountRole?: string;
  externalId?: string;
  arn?: string;
}
export interface LambdaUngraceful {
  behavior?: LambdaUngracefulBehavior;
}
export type LambdaUngracefulBehavior = "skip";
export type ListExecutionEventsMaxResults = number;

export type ListExecutionsMaxResults = number;

export interface ListPlanExecutionEventsRequest {
  planArn: string;
  executionId: string;
  maxResults?: number;
  nextToken?: string;
  name?: string;
}
export interface ListPlanExecutionEventsResponse {
  items?: Array<ExecutionEvent>;
  nextToken?: string;
}
export interface ListPlanExecutionsRequest {
  planArn: string;
  maxResults?: number;
  nextToken?: string;
  state?: ExecutionState;
}
export interface ListPlanExecutionsResponse {
  items?: Array<AbbreviatedExecution>;
  nextToken?: string;
}
export interface ListPlansInRegionRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListPlansInRegionResponse {
  plans?: Array<AbbreviatedPlan>;
  nextToken?: string;
}
export interface ListPlansRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListPlansResponse {
  plans?: Array<AbbreviatedPlan>;
  nextToken?: string;
}
export interface ListRoute53HealthChecksRequest {
  arn: string;
  hostedZoneId?: string;
  recordName?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListRoute53HealthChecksResponse {
  healthChecks?: Array<Route53HealthCheck>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  arn: string;
}
export interface ListTagsForResourceResponse {
  resourceTags?: Record<string, string>;
}
export type MaxResults = number;

export interface MinimalWorkflow {
  action?: ExecutionAction;
  name?: string;
}
export type NextToken = string;

export interface ParallelExecutionBlockConfiguration {
  steps: Array<Step>;
}
export interface Plan {
  arn: string;
  description?: string;
  workflows: Array<Workflow>;
  executionRole: string;
  recoveryTimeObjectiveMinutes?: number;
  associatedAlarms?: Record<string, AssociatedAlarm>;
  triggers?: Array<Trigger>;
  name: string;
  regions: Array<string>;
  recoveryApproach: RecoveryApproach;
  primaryRegion?: string;
  owner: string;
  version?: string;
  updatedAt?: Date | string;
}
export type PlanArn = string;

export type PlanList = Array<AbbreviatedPlan>;
export type PlanName = string;

export type PlanWarnings = Array<ResourceWarning>;
export type RecoveryApproach = "activeActive" | "activePassive";
export type Region = string;

export type RegionalScalingResource = Record<string, KubernetesScalingResource>;
export type RegionAndRoutingControls = Record<string, Array<ArcRoutingControlState>>;
export type RegionList = Array<string>;
export interface RegionSwitchPlanConfiguration {
  crossAccountRole?: string;
  externalId?: string;
  arn: string;
}
export type RegionToRunIn = "activatingRegion" | "deactivatingRegion";
export type ResourceArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type Resources = Array<string>;
export interface ResourceWarning {
  workflow?: MinimalWorkflow;
  version: string;
  stepName?: string;
  resourceArn?: string;
  warningStatus: ResourceWarningStatus;
  warningUpdatedTime: Date | string;
  warningMessage: string;
}
export type ResourceWarningStatus = "active" | "resolved";
export type RoleArn = string;

export interface Route53HealthCheck {
  hostedZoneId: string;
  recordName: string;
  healthCheckId?: string;
  region: string;
}
export interface Route53HealthCheckConfiguration {
  timeoutMinutes?: number;
  crossAccountRole?: string;
  externalId?: string;
  hostedZoneId: string;
  recordName: string;
  recordSets?: Array<Route53ResourceRecordSet>;
}
export type Route53HealthCheckId = string;

export type Route53HealthCheckList = Array<Route53HealthCheck>;
export type Route53HostedZoneId = string;

export type Route53RecordName = string;

export interface Route53ResourceRecordSet {
  recordSetIdentifier?: string;
  region?: string;
}
export type Route53ResourceRecordSetIdentifier = string;

export type Route53ResourceRecordSetList = Array<Route53ResourceRecordSet>;
export type RoutingControlArn = string;

export type RoutingControlStateChange = "On" | "Off";
export interface Service {
  crossAccountRole?: string;
  externalId?: string;
  clusterArn?: string;
  serviceArn?: string;
}
export type ServiceList = Array<Service>;
export interface StartPlanExecutionRequest {
  planArn: string;
  targetRegion: string;
  action: ExecutionAction;
  mode?: ExecutionMode;
  comment?: string;
  latestVersion?: string;
}
export interface StartPlanExecutionResponse {
  executionId?: string;
  plan?: string;
  planVersion?: string;
  activateRegion?: string;
  deactivateRegion?: string;
}
export interface Step {
  name: string;
  description?: string;
  executionBlockConfiguration: ExecutionBlockConfiguration;
  executionBlockType: ExecutionBlockType;
}
export type StepName = string;

export type Steps = Array<Step>;
export interface StepState {
  name?: string;
  status?: StepStatus;
  startTime?: Date | string;
  endTime?: Date | string;
  stepMode?: ExecutionMode;
}
export type StepStates = Array<StepState>;
export type StepStatus = "notStarted" | "running" | "failed" | "completed" | "canceled" | "skipped" | "pendingApproval";
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  arn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type Tags = Record<string, string>;
export type TagValue = string;

export interface Trigger {
  description?: string;
  targetRegion: string;
  action: WorkflowTargetAction;
  conditions: Array<TriggerCondition>;
  minDelayMinutesBetweenExecutions: number;
}
export interface TriggerCondition {
  associatedAlarmName: string;
  condition: AlarmCondition;
}
export type TriggerConditionList = Array<TriggerCondition>;
export type TriggerList = Array<Trigger>;
export interface UntagResourceRequest {
  arn: string;
  resourceTagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export type UpdatePlanExecutionAction = "switchToGraceful" | "switchToUngraceful" | "pause" | "resume";
export interface UpdatePlanExecutionRequest {
  planArn: string;
  executionId: string;
  action: UpdatePlanExecutionAction;
  comment?: string;
}
export interface UpdatePlanExecutionResponse {
}
export type UpdatePlanExecutionStepAction = "switchToUngraceful" | "skip";
export interface UpdatePlanExecutionStepRequest {
  planArn: string;
  executionId: string;
  comment: string;
  stepName: string;
  actionToTake: UpdatePlanExecutionStepAction;
}
export interface UpdatePlanExecutionStepResponse {
}
export interface UpdatePlanRequest {
  arn: string;
  description?: string;
  workflows: Array<Workflow>;
  executionRole: string;
  recoveryTimeObjectiveMinutes?: number;
  associatedAlarms?: Record<string, AssociatedAlarm>;
  triggers?: Array<Trigger>;
}
export interface UpdatePlanResponse {
  plan?: Plan;
}
export interface Workflow {
  steps?: Array<Step>;
  workflowTargetAction: WorkflowTargetAction;
  workflowTargetRegion?: string;
  workflowDescription?: string;
}
export type WorkflowList = Array<Workflow>;
export type WorkflowTargetAction = "activate" | "deactivate";
export declare namespace ApprovePlanExecutionStep {
  export type Input = ApprovePlanExecutionStepRequest;
  export type Output = ApprovePlanExecutionStepResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CancelPlanExecution {
  export type Input = CancelPlanExecutionRequest;
  export type Output = CancelPlanExecutionResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetPlanEvaluationStatus {
  export type Input = GetPlanEvaluationStatusRequest;
  export type Output = GetPlanEvaluationStatusResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetPlanExecution {
  export type Input = GetPlanExecutionRequest;
  export type Output = GetPlanExecutionResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetPlanInRegion {
  export type Input = GetPlanInRegionRequest;
  export type Output = GetPlanInRegionResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListPlanExecutionEvents {
  export type Input = ListPlanExecutionEventsRequest;
  export type Output = ListPlanExecutionEventsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListPlanExecutions {
  export type Input = ListPlanExecutionsRequest;
  export type Output = ListPlanExecutionsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListPlansInRegion {
  export type Input = ListPlansInRegionRequest;
  export type Output = ListPlansInRegionResponse;
  export type Error =
    | AccessDeniedException
    | CommonAwsError;
}

export declare namespace ListRoute53HealthChecks {
  export type Input = ListRoute53HealthChecksRequest;
  export type Output = ListRoute53HealthChecksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartPlanExecution {
  export type Input = StartPlanExecutionRequest;
  export type Output = StartPlanExecutionResponse;
  export type Error =
    | AccessDeniedException
    | IllegalArgumentException
    | IllegalStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdatePlanExecution {
  export type Input = UpdatePlanExecutionRequest;
  export type Output = UpdatePlanExecutionResponse;
  export type Error =
    | AccessDeniedException
    | IllegalStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdatePlanExecutionStep {
  export type Input = UpdatePlanExecutionStepRequest;
  export type Output = UpdatePlanExecutionStepResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreatePlan {
  export type Input = CreatePlanRequest;
  export type Output = CreatePlanResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeletePlan {
  export type Input = DeletePlanRequest;
  export type Output = DeletePlanResponse;
  export type Error =
    | IllegalStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetPlan {
  export type Input = GetPlanRequest;
  export type Output = GetPlanResponse;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListPlans {
  export type Input = ListPlansRequest;
  export type Output = ListPlansResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdatePlan {
  export type Input = UpdatePlanRequest;
  export type Output = UpdatePlanResponse;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export type ARCRegionswitchErrors = AccessDeniedException | IllegalArgumentException | IllegalStateException | InternalServerException | ResourceNotFoundException | CommonAwsError;


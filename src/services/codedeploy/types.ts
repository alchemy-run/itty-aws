import type { Effect, Data as EffectData } from "effect";
import type {
  AccessDeniedException,
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
  ValidationException,
} from "../../error.ts";
type CommonAwsError =
  | AccessDeniedException
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
  | ValidationException
  | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class CodeDeploy extends AWSServiceClient {
  addTagsToOnPremisesInstances(
    input: AddTagsToOnPremisesInstancesInput,
  ): Effect.Effect<
    {},
    | InstanceLimitExceededException
    | InstanceNameRequiredException
    | InstanceNotRegisteredException
    | InvalidInstanceNameException
    | InvalidTagException
    | TagLimitExceededException
    | TagRequiredException
    | CommonAwsError
  >;
  batchGetApplicationRevisions(
    input: BatchGetApplicationRevisionsInput,
  ): Effect.Effect<
    BatchGetApplicationRevisionsOutput,
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | BatchLimitExceededException
    | InvalidApplicationNameException
    | InvalidRevisionException
    | RevisionRequiredException
    | CommonAwsError
  >;
  batchGetApplications(
    input: BatchGetApplicationsInput,
  ): Effect.Effect<
    BatchGetApplicationsOutput,
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | BatchLimitExceededException
    | InvalidApplicationNameException
    | CommonAwsError
  >;
  batchGetDeploymentGroups(
    input: BatchGetDeploymentGroupsInput,
  ): Effect.Effect<
    BatchGetDeploymentGroupsOutput,
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | BatchLimitExceededException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupNameRequiredException
    | InvalidApplicationNameException
    | InvalidDeploymentGroupNameException
    | CommonAwsError
  >;
  batchGetDeploymentInstances(
    input: BatchGetDeploymentInstancesInput,
  ): Effect.Effect<
    BatchGetDeploymentInstancesOutput,
    | BatchLimitExceededException
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | InstanceIdRequiredException
    | InvalidComputePlatformException
    | InvalidDeploymentIdException
    | InvalidInstanceNameException
    | CommonAwsError
  >;
  batchGetDeployments(
    input: BatchGetDeploymentsInput,
  ): Effect.Effect<
    BatchGetDeploymentsOutput,
    | BatchLimitExceededException
    | DeploymentIdRequiredException
    | InvalidDeploymentIdException
    | CommonAwsError
  >;
  batchGetDeploymentTargets(
    input: BatchGetDeploymentTargetsInput,
  ): Effect.Effect<
    BatchGetDeploymentTargetsOutput,
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | DeploymentNotStartedException
    | DeploymentTargetDoesNotExistException
    | DeploymentTargetIdRequiredException
    | DeploymentTargetListSizeExceededException
    | InstanceDoesNotExistException
    | InvalidDeploymentIdException
    | InvalidDeploymentTargetIdException
    | CommonAwsError
  >;
  batchGetOnPremisesInstances(
    input: BatchGetOnPremisesInstancesInput,
  ): Effect.Effect<
    BatchGetOnPremisesInstancesOutput,
    | BatchLimitExceededException
    | InstanceNameRequiredException
    | InvalidInstanceNameException
    | CommonAwsError
  >;
  continueDeployment(
    input: ContinueDeploymentInput,
  ): Effect.Effect<
    {},
    | DeploymentAlreadyCompletedException
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | DeploymentIsNotInReadyStateException
    | InvalidDeploymentIdException
    | InvalidDeploymentStatusException
    | InvalidDeploymentWaitTypeException
    | UnsupportedActionForDeploymentTypeException
    | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationInput,
  ): Effect.Effect<
    CreateApplicationOutput,
    | ApplicationAlreadyExistsException
    | ApplicationLimitExceededException
    | ApplicationNameRequiredException
    | InvalidApplicationNameException
    | InvalidComputePlatformException
    | InvalidTagsToAddException
    | CommonAwsError
  >;
  createDeployment(
    input: CreateDeploymentInput,
  ): Effect.Effect<
    CreateDeploymentOutput,
    | AlarmsLimitExceededException
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupDoesNotExistException
    | DeploymentGroupNameRequiredException
    | DeploymentLimitExceededException
    | DescriptionTooLongException
    | InvalidAlarmConfigException
    | InvalidApplicationNameException
    | InvalidAutoRollbackConfigException
    | InvalidAutoScalingGroupException
    | InvalidDeploymentConfigNameException
    | InvalidDeploymentGroupNameException
    | InvalidFileExistsBehaviorException
    | InvalidGitHubAccountTokenException
    | InvalidIgnoreApplicationStopFailuresValueException
    | InvalidLoadBalancerInfoException
    | InvalidRevisionException
    | InvalidRoleException
    | InvalidTargetInstancesException
    | InvalidTrafficRoutingConfigurationException
    | InvalidUpdateOutdatedInstancesOnlyValueException
    | RevisionDoesNotExistException
    | RevisionRequiredException
    | ThrottlingException
    | CommonAwsError
  >;
  createDeploymentConfig(
    input: CreateDeploymentConfigInput,
  ): Effect.Effect<
    CreateDeploymentConfigOutput,
    | DeploymentConfigAlreadyExistsException
    | DeploymentConfigLimitExceededException
    | DeploymentConfigNameRequiredException
    | InvalidComputePlatformException
    | InvalidDeploymentConfigNameException
    | InvalidMinimumHealthyHostValueException
    | InvalidTrafficRoutingConfigurationException
    | InvalidZonalDeploymentConfigurationException
    | CommonAwsError
  >;
  createDeploymentGroup(
    input: CreateDeploymentGroupInput,
  ): Effect.Effect<
    CreateDeploymentGroupOutput,
    | AlarmsLimitExceededException
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupAlreadyExistsException
    | DeploymentGroupLimitExceededException
    | DeploymentGroupNameRequiredException
    | ECSServiceMappingLimitExceededException
    | InvalidAlarmConfigException
    | InvalidApplicationNameException
    | InvalidAutoRollbackConfigException
    | InvalidAutoScalingGroupException
    | InvalidBlueGreenDeploymentConfigurationException
    | InvalidDeploymentConfigNameException
    | InvalidDeploymentGroupNameException
    | InvalidDeploymentStyleException
    | InvalidEC2TagCombinationException
    | InvalidEC2TagException
    | InvalidECSServiceException
    | InvalidInputException
    | InvalidLoadBalancerInfoException
    | InvalidOnPremisesTagCombinationException
    | InvalidRoleException
    | InvalidTagException
    | InvalidTagsToAddException
    | InvalidTargetGroupPairException
    | InvalidTrafficRoutingConfigurationException
    | InvalidTriggerConfigException
    | LifecycleHookLimitExceededException
    | RoleRequiredException
    | TagSetListLimitExceededException
    | ThrottlingException
    | TriggerTargetsLimitExceededException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationInput,
  ): Effect.Effect<
    {},
    | ApplicationNameRequiredException
    | InvalidApplicationNameException
    | InvalidRoleException
    | CommonAwsError
  >;
  deleteDeploymentConfig(
    input: DeleteDeploymentConfigInput,
  ): Effect.Effect<
    {},
    | DeploymentConfigInUseException
    | DeploymentConfigNameRequiredException
    | InvalidDeploymentConfigNameException
    | InvalidOperationException
    | CommonAwsError
  >;
  deleteDeploymentGroup(
    input: DeleteDeploymentGroupInput,
  ): Effect.Effect<
    DeleteDeploymentGroupOutput,
    | ApplicationNameRequiredException
    | DeploymentGroupNameRequiredException
    | InvalidApplicationNameException
    | InvalidDeploymentGroupNameException
    | InvalidRoleException
    | CommonAwsError
  >;
  deleteGitHubAccountToken(
    input: DeleteGitHubAccountTokenInput,
  ): Effect.Effect<
    DeleteGitHubAccountTokenOutput,
    | GitHubAccountTokenDoesNotExistException
    | GitHubAccountTokenNameRequiredException
    | InvalidGitHubAccountTokenNameException
    | OperationNotSupportedException
    | ResourceValidationException
    | CommonAwsError
  >;
  deleteResourcesByExternalId(
    input: DeleteResourcesByExternalIdInput,
  ): Effect.Effect<DeleteResourcesByExternalIdOutput, CommonAwsError>;
  deregisterOnPremisesInstance(
    input: DeregisterOnPremisesInstanceInput,
  ): Effect.Effect<
    {},
    | InstanceNameRequiredException
    | InvalidInstanceNameException
    | CommonAwsError
  >;
  getApplication(
    input: GetApplicationInput,
  ): Effect.Effect<
    GetApplicationOutput,
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | InvalidApplicationNameException
    | CommonAwsError
  >;
  getApplicationRevision(
    input: GetApplicationRevisionInput,
  ): Effect.Effect<
    GetApplicationRevisionOutput,
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | InvalidApplicationNameException
    | InvalidRevisionException
    | RevisionDoesNotExistException
    | RevisionRequiredException
    | CommonAwsError
  >;
  getDeployment(
    input: GetDeploymentInput,
  ): Effect.Effect<
    GetDeploymentOutput,
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | InvalidDeploymentIdException
    | CommonAwsError
  >;
  getDeploymentConfig(
    input: GetDeploymentConfigInput,
  ): Effect.Effect<
    GetDeploymentConfigOutput,
    | DeploymentConfigDoesNotExistException
    | DeploymentConfigNameRequiredException
    | InvalidComputePlatformException
    | InvalidDeploymentConfigNameException
    | CommonAwsError
  >;
  getDeploymentGroup(
    input: GetDeploymentGroupInput,
  ): Effect.Effect<
    GetDeploymentGroupOutput,
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupDoesNotExistException
    | DeploymentGroupNameRequiredException
    | InvalidApplicationNameException
    | InvalidDeploymentGroupNameException
    | CommonAwsError
  >;
  getDeploymentInstance(
    input: GetDeploymentInstanceInput,
  ): Effect.Effect<
    GetDeploymentInstanceOutput,
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | InstanceDoesNotExistException
    | InstanceIdRequiredException
    | InvalidComputePlatformException
    | InvalidDeploymentIdException
    | InvalidInstanceNameException
    | CommonAwsError
  >;
  getDeploymentTarget(
    input: GetDeploymentTargetInput,
  ): Effect.Effect<
    GetDeploymentTargetOutput,
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | DeploymentNotStartedException
    | DeploymentTargetDoesNotExistException
    | DeploymentTargetIdRequiredException
    | InvalidDeploymentIdException
    | InvalidDeploymentTargetIdException
    | InvalidInstanceNameException
    | CommonAwsError
  >;
  getOnPremisesInstance(
    input: GetOnPremisesInstanceInput,
  ): Effect.Effect<
    GetOnPremisesInstanceOutput,
    | InstanceNameRequiredException
    | InstanceNotRegisteredException
    | InvalidInstanceNameException
    | CommonAwsError
  >;
  listApplicationRevisions(
    input: ListApplicationRevisionsInput,
  ): Effect.Effect<
    ListApplicationRevisionsOutput,
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | BucketNameFilterRequiredException
    | InvalidApplicationNameException
    | InvalidBucketNameFilterException
    | InvalidDeployedStateFilterException
    | InvalidKeyPrefixFilterException
    | InvalidNextTokenException
    | InvalidSortByException
    | InvalidSortOrderException
    | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsInput,
  ): Effect.Effect<
    ListApplicationsOutput,
    InvalidNextTokenException | CommonAwsError
  >;
  listDeploymentConfigs(
    input: ListDeploymentConfigsInput,
  ): Effect.Effect<
    ListDeploymentConfigsOutput,
    InvalidNextTokenException | CommonAwsError
  >;
  listDeploymentGroups(
    input: ListDeploymentGroupsInput,
  ): Effect.Effect<
    ListDeploymentGroupsOutput,
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | InvalidApplicationNameException
    | InvalidNextTokenException
    | CommonAwsError
  >;
  listDeploymentInstances(
    input: ListDeploymentInstancesInput,
  ): Effect.Effect<
    ListDeploymentInstancesOutput,
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | DeploymentNotStartedException
    | InvalidComputePlatformException
    | InvalidDeploymentIdException
    | InvalidDeploymentInstanceTypeException
    | InvalidInstanceStatusException
    | InvalidInstanceTypeException
    | InvalidNextTokenException
    | InvalidTargetFilterNameException
    | CommonAwsError
  >;
  listDeployments(
    input: ListDeploymentsInput,
  ): Effect.Effect<
    ListDeploymentsOutput,
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | DeploymentGroupDoesNotExistException
    | DeploymentGroupNameRequiredException
    | InvalidApplicationNameException
    | InvalidDeploymentGroupNameException
    | InvalidDeploymentStatusException
    | InvalidExternalIdException
    | InvalidInputException
    | InvalidNextTokenException
    | InvalidTimeRangeException
    | CommonAwsError
  >;
  listDeploymentTargets(
    input: ListDeploymentTargetsInput,
  ): Effect.Effect<
    ListDeploymentTargetsOutput,
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | DeploymentNotStartedException
    | InvalidDeploymentIdException
    | InvalidDeploymentInstanceTypeException
    | InvalidInstanceStatusException
    | InvalidInstanceTypeException
    | InvalidNextTokenException
    | InvalidTargetFilterNameException
    | CommonAwsError
  >;
  listGitHubAccountTokenNames(
    input: ListGitHubAccountTokenNamesInput,
  ): Effect.Effect<
    ListGitHubAccountTokenNamesOutput,
    | InvalidNextTokenException
    | OperationNotSupportedException
    | ResourceValidationException
    | CommonAwsError
  >;
  listOnPremisesInstances(
    input: ListOnPremisesInstancesInput,
  ): Effect.Effect<
    ListOnPremisesInstancesOutput,
    | InvalidNextTokenException
    | InvalidRegistrationStatusException
    | InvalidTagFilterException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | ArnNotSupportedException
    | InvalidArnException
    | ResourceArnRequiredException
    | CommonAwsError
  >;
  putLifecycleEventHookExecutionStatus(
    input: PutLifecycleEventHookExecutionStatusInput,
  ): Effect.Effect<
    PutLifecycleEventHookExecutionStatusOutput,
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | InvalidDeploymentIdException
    | InvalidLifecycleEventHookExecutionIdException
    | InvalidLifecycleEventHookExecutionStatusException
    | LifecycleEventAlreadyCompletedException
    | UnsupportedActionForDeploymentTypeException
    | CommonAwsError
  >;
  registerApplicationRevision(
    input: RegisterApplicationRevisionInput,
  ): Effect.Effect<
    {},
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | DescriptionTooLongException
    | InvalidApplicationNameException
    | InvalidRevisionException
    | RevisionRequiredException
    | CommonAwsError
  >;
  registerOnPremisesInstance(
    input: RegisterOnPremisesInstanceInput,
  ): Effect.Effect<
    {},
    | IamArnRequiredException
    | IamSessionArnAlreadyRegisteredException
    | IamUserArnAlreadyRegisteredException
    | IamUserArnRequiredException
    | InstanceNameAlreadyRegisteredException
    | InstanceNameRequiredException
    | InvalidIamSessionArnException
    | InvalidIamUserArnException
    | InvalidInstanceNameException
    | MultipleIamArnsProvidedException
    | CommonAwsError
  >;
  removeTagsFromOnPremisesInstances(
    input: RemoveTagsFromOnPremisesInstancesInput,
  ): Effect.Effect<
    {},
    | InstanceLimitExceededException
    | InstanceNameRequiredException
    | InstanceNotRegisteredException
    | InvalidInstanceNameException
    | InvalidTagException
    | TagLimitExceededException
    | TagRequiredException
    | CommonAwsError
  >;
  skipWaitTimeForInstanceTermination(
    input: SkipWaitTimeForInstanceTerminationInput,
  ): Effect.Effect<
    {},
    | DeploymentAlreadyCompletedException
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | DeploymentNotStartedException
    | InvalidDeploymentIdException
    | UnsupportedActionForDeploymentTypeException
    | CommonAwsError
  >;
  stopDeployment(
    input: StopDeploymentInput,
  ): Effect.Effect<
    StopDeploymentOutput,
    | DeploymentAlreadyCompletedException
    | DeploymentDoesNotExistException
    | DeploymentGroupDoesNotExistException
    | DeploymentIdRequiredException
    | InvalidDeploymentIdException
    | UnsupportedActionForDeploymentTypeException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | ApplicationDoesNotExistException
    | ArnNotSupportedException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupDoesNotExistException
    | InvalidArnException
    | InvalidTagsToAddException
    | ResourceArnRequiredException
    | TagRequiredException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | ApplicationDoesNotExistException
    | ArnNotSupportedException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupDoesNotExistException
    | InvalidArnException
    | InvalidTagsToAddException
    | ResourceArnRequiredException
    | TagRequiredException
    | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationInput,
  ): Effect.Effect<
    {},
    | ApplicationAlreadyExistsException
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | InvalidApplicationNameException
    | CommonAwsError
  >;
  updateDeploymentGroup(
    input: UpdateDeploymentGroupInput,
  ): Effect.Effect<
    UpdateDeploymentGroupOutput,
    | AlarmsLimitExceededException
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupAlreadyExistsException
    | DeploymentGroupDoesNotExistException
    | DeploymentGroupNameRequiredException
    | ECSServiceMappingLimitExceededException
    | InvalidAlarmConfigException
    | InvalidApplicationNameException
    | InvalidAutoRollbackConfigException
    | InvalidAutoScalingGroupException
    | InvalidBlueGreenDeploymentConfigurationException
    | InvalidDeploymentConfigNameException
    | InvalidDeploymentGroupNameException
    | InvalidDeploymentStyleException
    | InvalidEC2TagCombinationException
    | InvalidEC2TagException
    | InvalidECSServiceException
    | InvalidInputException
    | InvalidLoadBalancerInfoException
    | InvalidOnPremisesTagCombinationException
    | InvalidRoleException
    | InvalidTagException
    | InvalidTargetGroupPairException
    | InvalidTrafficRoutingConfigurationException
    | InvalidTriggerConfigException
    | LifecycleHookLimitExceededException
    | TagSetListLimitExceededException
    | ThrottlingException
    | TriggerTargetsLimitExceededException
    | CommonAwsError
  >;
}

export declare class Codedeploy extends CodeDeploy {}

export type AdditionalDeploymentStatusInfo = string;

export interface AddTagsToOnPremisesInstancesInput {
  tags: Array<Tag>;
  instanceNames: Array<string>;
}
export interface Alarm {
  name?: string;
}
export interface AlarmConfiguration {
  enabled?: boolean;
  ignorePollAlarmFailure?: boolean;
  alarms?: Array<Alarm>;
}
export type AlarmList = Array<Alarm>;
export type AlarmName = string;

export declare class AlarmsLimitExceededException extends EffectData.TaggedError(
  "AlarmsLimitExceededException",
)<{
  readonly message?: string;
}> {}
export declare class ApplicationAlreadyExistsException extends EffectData.TaggedError(
  "ApplicationAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export declare class ApplicationDoesNotExistException extends EffectData.TaggedError(
  "ApplicationDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export type ApplicationId = string;

export interface ApplicationInfo {
  applicationId?: string;
  applicationName?: string;
  createTime?: Date | string;
  linkedToGitHub?: boolean;
  gitHubAccountName?: string;
  computePlatform?: ComputePlatform;
}
export declare class ApplicationLimitExceededException extends EffectData.TaggedError(
  "ApplicationLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type ApplicationName = string;

export declare class ApplicationNameRequiredException extends EffectData.TaggedError(
  "ApplicationNameRequiredException",
)<{
  readonly message?: string;
}> {}
export type ApplicationRevisionSortBy =
  | "registerTime"
  | "firstUsedTime"
  | "lastUsedTime";
export type ApplicationsInfoList = Array<ApplicationInfo>;
export type ApplicationsList = Array<string>;
export interface AppSpecContent {
  content?: string;
  sha256?: string;
}
export type Arn = string;

export declare class ArnNotSupportedException extends EffectData.TaggedError(
  "ArnNotSupportedException",
)<{
  readonly message?: string;
}> {}
export interface AutoRollbackConfiguration {
  enabled?: boolean;
  events?: Array<AutoRollbackEvent>;
}
export type AutoRollbackEvent =
  | "DEPLOYMENT_FAILURE"
  | "DEPLOYMENT_STOP_ON_ALARM"
  | "DEPLOYMENT_STOP_ON_REQUEST";
export type AutoRollbackEventsList = Array<AutoRollbackEvent>;
export interface AutoScalingGroup {
  name?: string;
  hook?: string;
  terminationHook?: string;
}
export type AutoScalingGroupHook = string;

export type AutoScalingGroupList = Array<AutoScalingGroup>;
export type AutoScalingGroupName = string;

export type AutoScalingGroupNameList = Array<string>;
export interface BatchGetApplicationRevisionsInput {
  applicationName: string;
  revisions: Array<RevisionLocation>;
}
export interface BatchGetApplicationRevisionsOutput {
  applicationName?: string;
  errorMessage?: string;
  revisions?: Array<RevisionInfo>;
}
export interface BatchGetApplicationsInput {
  applicationNames: Array<string>;
}
export interface BatchGetApplicationsOutput {
  applicationsInfo?: Array<ApplicationInfo>;
}
export interface BatchGetDeploymentGroupsInput {
  applicationName: string;
  deploymentGroupNames: Array<string>;
}
export interface BatchGetDeploymentGroupsOutput {
  deploymentGroupsInfo?: Array<DeploymentGroupInfo>;
  errorMessage?: string;
}
export interface BatchGetDeploymentInstancesInput {
  deploymentId: string;
  instanceIds: Array<string>;
}
export interface BatchGetDeploymentInstancesOutput {
  instancesSummary?: Array<InstanceSummary>;
  errorMessage?: string;
}
export interface BatchGetDeploymentsInput {
  deploymentIds: Array<string>;
}
export interface BatchGetDeploymentsOutput {
  deploymentsInfo?: Array<DeploymentInfo>;
}
export interface BatchGetDeploymentTargetsInput {
  deploymentId: string;
  targetIds: Array<string>;
}
export interface BatchGetDeploymentTargetsOutput {
  deploymentTargets?: Array<DeploymentTarget>;
}
export interface BatchGetOnPremisesInstancesInput {
  instanceNames: Array<string>;
}
export interface BatchGetOnPremisesInstancesOutput {
  instanceInfos?: Array<InstanceInfo>;
}
export declare class BatchLimitExceededException extends EffectData.TaggedError(
  "BatchLimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface BlueGreenDeploymentConfiguration {
  terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;
  deploymentReadyOption?: DeploymentReadyOption;
  greenFleetProvisioningOption?: GreenFleetProvisioningOption;
}
export interface BlueInstanceTerminationOption {
  action?: InstanceAction;
  terminationWaitTimeInMinutes?: number;
}
export type CodedeployBoolean = boolean;

export declare class BucketNameFilterRequiredException extends EffectData.TaggedError(
  "BucketNameFilterRequiredException",
)<{
  readonly message?: string;
}> {}
export type BundleType = "tar" | "tgz" | "zip" | "YAML" | "JSON";
export type CloudFormationResourceType = string;

export interface CloudFormationTarget {
  deploymentId?: string;
  targetId?: string;
  lastUpdatedAt?: Date | string;
  lifecycleEvents?: Array<LifecycleEvent>;
  status?: TargetStatus;
  resourceType?: string;
  targetVersionWeight?: number;
}
export type CommitId = string;

export type ComputePlatform = "Server" | "Lambda" | "ECS";
export interface ContinueDeploymentInput {
  deploymentId?: string;
  deploymentWaitType?: DeploymentWaitType;
}
export interface CreateApplicationInput {
  applicationName: string;
  computePlatform?: ComputePlatform;
  tags?: Array<Tag>;
}
export interface CreateApplicationOutput {
  applicationId?: string;
}
export interface CreateDeploymentConfigInput {
  deploymentConfigName: string;
  minimumHealthyHosts?: MinimumHealthyHosts;
  trafficRoutingConfig?: TrafficRoutingConfig;
  computePlatform?: ComputePlatform;
  zonalConfig?: ZonalConfig;
}
export interface CreateDeploymentConfigOutput {
  deploymentConfigId?: string;
}
export interface CreateDeploymentGroupInput {
  applicationName: string;
  deploymentGroupName: string;
  deploymentConfigName?: string;
  ec2TagFilters?: Array<EC2TagFilter>;
  onPremisesInstanceTagFilters?: Array<TagFilter>;
  autoScalingGroups?: Array<string>;
  serviceRoleArn: string;
  triggerConfigurations?: Array<TriggerConfig>;
  alarmConfiguration?: AlarmConfiguration;
  autoRollbackConfiguration?: AutoRollbackConfiguration;
  outdatedInstancesStrategy?: OutdatedInstancesStrategy;
  deploymentStyle?: DeploymentStyle;
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
  loadBalancerInfo?: LoadBalancerInfo;
  ec2TagSet?: EC2TagSet;
  ecsServices?: Array<ECSService>;
  onPremisesTagSet?: OnPremisesTagSet;
  tags?: Array<Tag>;
  terminationHookEnabled?: boolean;
}
export interface CreateDeploymentGroupOutput {
  deploymentGroupId?: string;
}
export interface CreateDeploymentInput {
  applicationName: string;
  deploymentGroupName?: string;
  revision?: RevisionLocation;
  deploymentConfigName?: string;
  description?: string;
  ignoreApplicationStopFailures?: boolean;
  targetInstances?: TargetInstances;
  autoRollbackConfiguration?: AutoRollbackConfiguration;
  updateOutdatedInstancesOnly?: boolean;
  fileExistsBehavior?: FileExistsBehavior;
  overrideAlarmConfiguration?: AlarmConfiguration;
}
export interface CreateDeploymentOutput {
  deploymentId?: string;
}
export interface DeleteApplicationInput {
  applicationName: string;
}
export interface DeleteDeploymentConfigInput {
  deploymentConfigName: string;
}
export interface DeleteDeploymentGroupInput {
  applicationName: string;
  deploymentGroupName: string;
}
export interface DeleteDeploymentGroupOutput {
  hooksNotCleanedUp?: Array<AutoScalingGroup>;
}
export interface DeleteGitHubAccountTokenInput {
  tokenName?: string;
}
export interface DeleteGitHubAccountTokenOutput {
  tokenName?: string;
}
export interface DeleteResourcesByExternalIdInput {
  externalId?: string;
}
export interface DeleteResourcesByExternalIdOutput {}
export declare class DeploymentAlreadyCompletedException extends EffectData.TaggedError(
  "DeploymentAlreadyCompletedException",
)<{
  readonly message?: string;
}> {}
export declare class DeploymentConfigAlreadyExistsException extends EffectData.TaggedError(
  "DeploymentConfigAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export declare class DeploymentConfigDoesNotExistException extends EffectData.TaggedError(
  "DeploymentConfigDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export type DeploymentConfigId = string;

export interface DeploymentConfigInfo {
  deploymentConfigId?: string;
  deploymentConfigName?: string;
  minimumHealthyHosts?: MinimumHealthyHosts;
  createTime?: Date | string;
  computePlatform?: ComputePlatform;
  trafficRoutingConfig?: TrafficRoutingConfig;
  zonalConfig?: ZonalConfig;
}
export declare class DeploymentConfigInUseException extends EffectData.TaggedError(
  "DeploymentConfigInUseException",
)<{
  readonly message?: string;
}> {}
export declare class DeploymentConfigLimitExceededException extends EffectData.TaggedError(
  "DeploymentConfigLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type DeploymentConfigName = string;

export declare class DeploymentConfigNameRequiredException extends EffectData.TaggedError(
  "DeploymentConfigNameRequiredException",
)<{
  readonly message?: string;
}> {}
export type DeploymentConfigsList = Array<string>;
export type DeploymentCreator =
  | "user"
  | "autoscaling"
  | "codeDeployRollback"
  | "CodeDeploy"
  | "CodeDeployAutoUpdate"
  | "CloudFormation"
  | "CloudFormationRollback"
  | "autoscalingTermination";
export declare class DeploymentDoesNotExistException extends EffectData.TaggedError(
  "DeploymentDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export declare class DeploymentGroupAlreadyExistsException extends EffectData.TaggedError(
  "DeploymentGroupAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export declare class DeploymentGroupDoesNotExistException extends EffectData.TaggedError(
  "DeploymentGroupDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export type DeploymentGroupId = string;

export interface DeploymentGroupInfo {
  applicationName?: string;
  deploymentGroupId?: string;
  deploymentGroupName?: string;
  deploymentConfigName?: string;
  ec2TagFilters?: Array<EC2TagFilter>;
  onPremisesInstanceTagFilters?: Array<TagFilter>;
  autoScalingGroups?: Array<AutoScalingGroup>;
  serviceRoleArn?: string;
  targetRevision?: RevisionLocation;
  triggerConfigurations?: Array<TriggerConfig>;
  alarmConfiguration?: AlarmConfiguration;
  autoRollbackConfiguration?: AutoRollbackConfiguration;
  deploymentStyle?: DeploymentStyle;
  outdatedInstancesStrategy?: OutdatedInstancesStrategy;
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
  loadBalancerInfo?: LoadBalancerInfo;
  lastSuccessfulDeployment?: LastDeploymentInfo;
  lastAttemptedDeployment?: LastDeploymentInfo;
  ec2TagSet?: EC2TagSet;
  onPremisesTagSet?: OnPremisesTagSet;
  computePlatform?: ComputePlatform;
  ecsServices?: Array<ECSService>;
  terminationHookEnabled?: boolean;
}
export type DeploymentGroupInfoList = Array<DeploymentGroupInfo>;
export declare class DeploymentGroupLimitExceededException extends EffectData.TaggedError(
  "DeploymentGroupLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type DeploymentGroupName = string;

export declare class DeploymentGroupNameRequiredException extends EffectData.TaggedError(
  "DeploymentGroupNameRequiredException",
)<{
  readonly message?: string;
}> {}
export type DeploymentGroupsList = Array<string>;
export type DeploymentId = string;

export declare class DeploymentIdRequiredException extends EffectData.TaggedError(
  "DeploymentIdRequiredException",
)<{
  readonly message?: string;
}> {}
export interface DeploymentInfo {
  applicationName?: string;
  deploymentGroupName?: string;
  deploymentConfigName?: string;
  deploymentId?: string;
  previousRevision?: RevisionLocation;
  revision?: RevisionLocation;
  status?: DeploymentStatus;
  errorInformation?: ErrorInformation;
  createTime?: Date | string;
  startTime?: Date | string;
  completeTime?: Date | string;
  deploymentOverview?: DeploymentOverview;
  description?: string;
  creator?: DeploymentCreator;
  ignoreApplicationStopFailures?: boolean;
  autoRollbackConfiguration?: AutoRollbackConfiguration;
  updateOutdatedInstancesOnly?: boolean;
  rollbackInfo?: RollbackInfo;
  deploymentStyle?: DeploymentStyle;
  targetInstances?: TargetInstances;
  instanceTerminationWaitTimeStarted?: boolean;
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
  loadBalancerInfo?: LoadBalancerInfo;
  additionalDeploymentStatusInfo?: string;
  fileExistsBehavior?: FileExistsBehavior;
  deploymentStatusMessages?: Array<string>;
  computePlatform?: ComputePlatform;
  externalId?: string;
  relatedDeployments?: RelatedDeployments;
  overrideAlarmConfiguration?: AlarmConfiguration;
}
export declare class DeploymentIsNotInReadyStateException extends EffectData.TaggedError(
  "DeploymentIsNotInReadyStateException",
)<{
  readonly message?: string;
}> {}
export declare class DeploymentLimitExceededException extends EffectData.TaggedError(
  "DeploymentLimitExceededException",
)<{
  readonly message?: string;
}> {}
export declare class DeploymentNotStartedException extends EffectData.TaggedError(
  "DeploymentNotStartedException",
)<{
  readonly message?: string;
}> {}
export type DeploymentOption =
  | "WITH_TRAFFIC_CONTROL"
  | "WITHOUT_TRAFFIC_CONTROL";
export interface DeploymentOverview {
  Pending?: number;
  InProgress?: number;
  Succeeded?: number;
  Failed?: number;
  Skipped?: number;
  Ready?: number;
}
export type DeploymentReadyAction = "CONTINUE_DEPLOYMENT" | "STOP_DEPLOYMENT";
export interface DeploymentReadyOption {
  actionOnTimeout?: DeploymentReadyAction;
  waitTimeInMinutes?: number;
}
export type DeploymentsInfoList = Array<DeploymentInfo>;
export type DeploymentsList = Array<string>;
export type DeploymentStatus =
  | "Created"
  | "Queued"
  | "InProgress"
  | "Baking"
  | "Succeeded"
  | "Failed"
  | "Stopped"
  | "Ready";
export type DeploymentStatusList = Array<DeploymentStatus>;
export type DeploymentStatusMessageList = Array<string>;
export interface DeploymentStyle {
  deploymentType?: DeploymentType;
  deploymentOption?: DeploymentOption;
}
export interface DeploymentTarget {
  deploymentTargetType?: DeploymentTargetType;
  instanceTarget?: InstanceTarget;
  lambdaTarget?: LambdaTarget;
  ecsTarget?: ECSTarget;
  cloudFormationTarget?: CloudFormationTarget;
}
export declare class DeploymentTargetDoesNotExistException extends EffectData.TaggedError(
  "DeploymentTargetDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export declare class DeploymentTargetIdRequiredException extends EffectData.TaggedError(
  "DeploymentTargetIdRequiredException",
)<{
  readonly message?: string;
}> {}
export type DeploymentTargetList = Array<DeploymentTarget>;
export declare class DeploymentTargetListSizeExceededException extends EffectData.TaggedError(
  "DeploymentTargetListSizeExceededException",
)<{
  readonly message?: string;
}> {}
export type DeploymentTargetType =
  | "InstanceTarget"
  | "LambdaTarget"
  | "ECSTarget"
  | "CloudFormationTarget";
export type DeploymentType = "IN_PLACE" | "BLUE_GREEN";
export type DeploymentWaitType = "READY_WAIT" | "TERMINATION_WAIT";
export interface DeregisterOnPremisesInstanceInput {
  instanceName: string;
}
export type Description = string;

export declare class DescriptionTooLongException extends EffectData.TaggedError(
  "DescriptionTooLongException",
)<{
  readonly message?: string;
}> {}
export interface Diagnostics {
  errorCode?: LifecycleErrorCode;
  scriptName?: string;
  message?: string;
  logTail?: string;
}
export type Duration = number;

export interface EC2TagFilter {
  Key?: string;
  Value?: string;
  Type?: EC2TagFilterType;
}
export type EC2TagFilterList = Array<EC2TagFilter>;
export type EC2TagFilterType = "KEY_ONLY" | "VALUE_ONLY" | "KEY_AND_VALUE";
export interface EC2TagSet {
  ec2TagSetList?: Array<Array<EC2TagFilter>>;
}
export type EC2TagSetList = Array<Array<EC2TagFilter>>;
export type ECSClusterName = string;

export interface ECSService {
  serviceName?: string;
  clusterName?: string;
}
export type ECSServiceList = Array<ECSService>;
export declare class ECSServiceMappingLimitExceededException extends EffectData.TaggedError(
  "ECSServiceMappingLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type ECSServiceName = string;

export interface ECSTarget {
  deploymentId?: string;
  targetId?: string;
  targetArn?: string;
  lastUpdatedAt?: Date | string;
  lifecycleEvents?: Array<LifecycleEvent>;
  status?: TargetStatus;
  taskSetsInfo?: Array<ECSTaskSet>;
}
export interface ECSTaskSet {
  identifer?: string;
  desiredCount?: number;
  pendingCount?: number;
  runningCount?: number;
  status?: string;
  trafficWeight?: number;
  targetGroup?: TargetGroupInfo;
  taskSetLabel?: TargetLabel;
}
export type ECSTaskSetCount = number;

export type ECSTaskSetIdentifier = string;

export type ECSTaskSetList = Array<ECSTaskSet>;
export type ECSTaskSetStatus = string;

export interface ELBInfo {
  name?: string;
}
export type ELBInfoList = Array<ELBInfo>;
export type ELBName = string;

export type ErrorCode =
  | "AGENT_ISSUE"
  | "ALARM_ACTIVE"
  | "APPLICATION_MISSING"
  | "AUTOSCALING_VALIDATION_ERROR"
  | "AUTO_SCALING_CONFIGURATION"
  | "AUTO_SCALING_IAM_ROLE_PERMISSIONS"
  | "CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND"
  | "CUSTOMER_APPLICATION_UNHEALTHY"
  | "DEPLOYMENT_GROUP_MISSING"
  | "ECS_UPDATE_ERROR"
  | "ELASTIC_LOAD_BALANCING_INVALID"
  | "ELB_INVALID_INSTANCE"
  | "HEALTH_CONSTRAINTS"
  | "HEALTH_CONSTRAINTS_INVALID"
  | "HOOK_EXECUTION_FAILURE"
  | "IAM_ROLE_MISSING"
  | "IAM_ROLE_PERMISSIONS"
  | "INTERNAL_ERROR"
  | "INVALID_ECS_SERVICE"
  | "INVALID_LAMBDA_CONFIGURATION"
  | "INVALID_LAMBDA_FUNCTION"
  | "INVALID_REVISION"
  | "MANUAL_STOP"
  | "MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION"
  | "MISSING_ELB_INFORMATION"
  | "MISSING_GITHUB_TOKEN"
  | "NO_EC2_SUBSCRIPTION"
  | "NO_INSTANCES"
  | "OVER_MAX_INSTANCES"
  | "RESOURCE_LIMIT_EXCEEDED"
  | "REVISION_MISSING"
  | "THROTTLED"
  | "TIMEOUT"
  | "CLOUDFORMATION_STACK_FAILURE";
export interface ErrorInformation {
  code?: ErrorCode;
  message?: string;
}
export type ErrorMessage = string;

export type ETag = string;

export type ExternalId = string;

export type FileExistsBehavior = "DISALLOW" | "OVERWRITE" | "RETAIN";
export type FilterValue = string;

export type FilterValueList = Array<string>;
export interface GenericRevisionInfo {
  description?: string;
  deploymentGroups?: Array<string>;
  firstUsedTime?: Date | string;
  lastUsedTime?: Date | string;
  registerTime?: Date | string;
}
export interface GetApplicationInput {
  applicationName: string;
}
export interface GetApplicationOutput {
  application?: ApplicationInfo;
}
export interface GetApplicationRevisionInput {
  applicationName: string;
  revision: RevisionLocation;
}
export interface GetApplicationRevisionOutput {
  applicationName?: string;
  revision?: RevisionLocation;
  revisionInfo?: GenericRevisionInfo;
}
export interface GetDeploymentConfigInput {
  deploymentConfigName: string;
}
export interface GetDeploymentConfigOutput {
  deploymentConfigInfo?: DeploymentConfigInfo;
}
export interface GetDeploymentGroupInput {
  applicationName: string;
  deploymentGroupName: string;
}
export interface GetDeploymentGroupOutput {
  deploymentGroupInfo?: DeploymentGroupInfo;
}
export interface GetDeploymentInput {
  deploymentId: string;
}
export interface GetDeploymentInstanceInput {
  deploymentId: string;
  instanceId: string;
}
export interface GetDeploymentInstanceOutput {
  instanceSummary?: InstanceSummary;
}
export interface GetDeploymentOutput {
  deploymentInfo?: DeploymentInfo;
}
export interface GetDeploymentTargetInput {
  deploymentId: string;
  targetId: string;
}
export interface GetDeploymentTargetOutput {
  deploymentTarget?: DeploymentTarget;
}
export interface GetOnPremisesInstanceInput {
  instanceName: string;
}
export interface GetOnPremisesInstanceOutput {
  instanceInfo?: InstanceInfo;
}
export declare class GitHubAccountTokenDoesNotExistException extends EffectData.TaggedError(
  "GitHubAccountTokenDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export type GitHubAccountTokenName = string;

export type GitHubAccountTokenNameList = Array<string>;
export declare class GitHubAccountTokenNameRequiredException extends EffectData.TaggedError(
  "GitHubAccountTokenNameRequiredException",
)<{
  readonly message?: string;
}> {}
export interface GitHubLocation {
  repository?: string;
  commitId?: string;
}
export type GreenFleetProvisioningAction =
  | "DISCOVER_EXISTING"
  | "COPY_AUTO_SCALING_GROUP";
export interface GreenFleetProvisioningOption {
  action?: GreenFleetProvisioningAction;
}
export declare class IamArnRequiredException extends EffectData.TaggedError(
  "IamArnRequiredException",
)<{
  readonly message?: string;
}> {}
export type IamSessionArn = string;

export declare class IamSessionArnAlreadyRegisteredException extends EffectData.TaggedError(
  "IamSessionArnAlreadyRegisteredException",
)<{
  readonly message?: string;
}> {}
export type IamUserArn = string;

export declare class IamUserArnAlreadyRegisteredException extends EffectData.TaggedError(
  "IamUserArnAlreadyRegisteredException",
)<{
  readonly message?: string;
}> {}
export declare class IamUserArnRequiredException extends EffectData.TaggedError(
  "IamUserArnRequiredException",
)<{
  readonly message?: string;
}> {}
export type InstanceAction = "TERMINATE" | "KEEP_ALIVE";
export type InstanceArn = string;

export type InstanceCount = number;

export declare class InstanceDoesNotExistException extends EffectData.TaggedError(
  "InstanceDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export type InstanceId = string;

export declare class InstanceIdRequiredException extends EffectData.TaggedError(
  "InstanceIdRequiredException",
)<{
  readonly message?: string;
}> {}
export interface InstanceInfo {
  instanceName?: string;
  iamSessionArn?: string;
  iamUserArn?: string;
  instanceArn?: string;
  registerTime?: Date | string;
  deregisterTime?: Date | string;
  tags?: Array<Tag>;
}
export type InstanceInfoList = Array<InstanceInfo>;
export declare class InstanceLimitExceededException extends EffectData.TaggedError(
  "InstanceLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type InstanceName = string;

export declare class InstanceNameAlreadyRegisteredException extends EffectData.TaggedError(
  "InstanceNameAlreadyRegisteredException",
)<{
  readonly message?: string;
}> {}
export type InstanceNameList = Array<string>;
export declare class InstanceNameRequiredException extends EffectData.TaggedError(
  "InstanceNameRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class InstanceNotRegisteredException extends EffectData.TaggedError(
  "InstanceNotRegisteredException",
)<{
  readonly message?: string;
}> {}
export type InstancesList = Array<string>;
export type InstanceStatus =
  | "Pending"
  | "InProgress"
  | "Succeeded"
  | "Failed"
  | "Skipped"
  | "Unknown"
  | "Ready";
export type InstanceStatusList = Array<InstanceStatus>;
export interface InstanceSummary {
  deploymentId?: string;
  instanceId?: string;
  status?: InstanceStatus;
  lastUpdatedAt?: Date | string;
  lifecycleEvents?: Array<LifecycleEvent>;
  instanceType?: InstanceType;
}
export type InstanceSummaryList = Array<InstanceSummary>;
export interface InstanceTarget {
  deploymentId?: string;
  targetId?: string;
  targetArn?: string;
  status?: TargetStatus;
  lastUpdatedAt?: Date | string;
  lifecycleEvents?: Array<LifecycleEvent>;
  instanceLabel?: TargetLabel;
}
export type InstanceType = "Blue" | "Green";
export type InstanceTypeList = Array<InstanceType>;
export declare class InvalidAlarmConfigException extends EffectData.TaggedError(
  "InvalidAlarmConfigException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidApplicationNameException extends EffectData.TaggedError(
  "InvalidApplicationNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidArnException extends EffectData.TaggedError(
  "InvalidArnException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidAutoRollbackConfigException extends EffectData.TaggedError(
  "InvalidAutoRollbackConfigException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidAutoScalingGroupException extends EffectData.TaggedError(
  "InvalidAutoScalingGroupException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidBlueGreenDeploymentConfigurationException extends EffectData.TaggedError(
  "InvalidBlueGreenDeploymentConfigurationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidBucketNameFilterException extends EffectData.TaggedError(
  "InvalidBucketNameFilterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidComputePlatformException extends EffectData.TaggedError(
  "InvalidComputePlatformException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDeployedStateFilterException extends EffectData.TaggedError(
  "InvalidDeployedStateFilterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDeploymentConfigNameException extends EffectData.TaggedError(
  "InvalidDeploymentConfigNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDeploymentGroupNameException extends EffectData.TaggedError(
  "InvalidDeploymentGroupNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDeploymentIdException extends EffectData.TaggedError(
  "InvalidDeploymentIdException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDeploymentInstanceTypeException extends EffectData.TaggedError(
  "InvalidDeploymentInstanceTypeException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDeploymentStatusException extends EffectData.TaggedError(
  "InvalidDeploymentStatusException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDeploymentStyleException extends EffectData.TaggedError(
  "InvalidDeploymentStyleException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDeploymentTargetIdException extends EffectData.TaggedError(
  "InvalidDeploymentTargetIdException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDeploymentWaitTypeException extends EffectData.TaggedError(
  "InvalidDeploymentWaitTypeException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidEC2TagCombinationException extends EffectData.TaggedError(
  "InvalidEC2TagCombinationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidEC2TagException extends EffectData.TaggedError(
  "InvalidEC2TagException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidECSServiceException extends EffectData.TaggedError(
  "InvalidECSServiceException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidExternalIdException extends EffectData.TaggedError(
  "InvalidExternalIdException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidFileExistsBehaviorException extends EffectData.TaggedError(
  "InvalidFileExistsBehaviorException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidGitHubAccountTokenException extends EffectData.TaggedError(
  "InvalidGitHubAccountTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidGitHubAccountTokenNameException extends EffectData.TaggedError(
  "InvalidGitHubAccountTokenNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidIamSessionArnException extends EffectData.TaggedError(
  "InvalidIamSessionArnException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidIamUserArnException extends EffectData.TaggedError(
  "InvalidIamUserArnException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidIgnoreApplicationStopFailuresValueException extends EffectData.TaggedError(
  "InvalidIgnoreApplicationStopFailuresValueException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidInstanceNameException extends EffectData.TaggedError(
  "InvalidInstanceNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidInstanceStatusException extends EffectData.TaggedError(
  "InvalidInstanceStatusException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidInstanceTypeException extends EffectData.TaggedError(
  "InvalidInstanceTypeException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidKeyPrefixFilterException extends EffectData.TaggedError(
  "InvalidKeyPrefixFilterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidLifecycleEventHookExecutionIdException extends EffectData.TaggedError(
  "InvalidLifecycleEventHookExecutionIdException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidLifecycleEventHookExecutionStatusException extends EffectData.TaggedError(
  "InvalidLifecycleEventHookExecutionStatusException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidLoadBalancerInfoException extends EffectData.TaggedError(
  "InvalidLoadBalancerInfoException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidMinimumHealthyHostValueException extends EffectData.TaggedError(
  "InvalidMinimumHealthyHostValueException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidOnPremisesTagCombinationException extends EffectData.TaggedError(
  "InvalidOnPremisesTagCombinationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidOperationException extends EffectData.TaggedError(
  "InvalidOperationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRegistrationStatusException extends EffectData.TaggedError(
  "InvalidRegistrationStatusException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRevisionException extends EffectData.TaggedError(
  "InvalidRevisionException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRoleException extends EffectData.TaggedError(
  "InvalidRoleException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSortByException extends EffectData.TaggedError(
  "InvalidSortByException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSortOrderException extends EffectData.TaggedError(
  "InvalidSortOrderException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTagException extends EffectData.TaggedError(
  "InvalidTagException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTagFilterException extends EffectData.TaggedError(
  "InvalidTagFilterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTagsToAddException extends EffectData.TaggedError(
  "InvalidTagsToAddException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTargetFilterNameException extends EffectData.TaggedError(
  "InvalidTargetFilterNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTargetGroupPairException extends EffectData.TaggedError(
  "InvalidTargetGroupPairException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTargetInstancesException extends EffectData.TaggedError(
  "InvalidTargetInstancesException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTimeRangeException extends EffectData.TaggedError(
  "InvalidTimeRangeException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTrafficRoutingConfigurationException extends EffectData.TaggedError(
  "InvalidTrafficRoutingConfigurationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTriggerConfigException extends EffectData.TaggedError(
  "InvalidTriggerConfigException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidUpdateOutdatedInstancesOnlyValueException extends EffectData.TaggedError(
  "InvalidUpdateOutdatedInstancesOnlyValueException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidZonalDeploymentConfigurationException extends EffectData.TaggedError(
  "InvalidZonalDeploymentConfigurationException",
)<{
  readonly message?: string;
}> {}
export type Key = string;

export type LambdaFunctionAlias = string;

export interface LambdaFunctionInfo {
  functionName?: string;
  functionAlias?: string;
  currentVersion?: string;
  targetVersion?: string;
  targetVersionWeight?: number;
}
export type LambdaFunctionName = string;

export interface LambdaTarget {
  deploymentId?: string;
  targetId?: string;
  targetArn?: string;
  status?: TargetStatus;
  lastUpdatedAt?: Date | string;
  lifecycleEvents?: Array<LifecycleEvent>;
  lambdaFunctionInfo?: LambdaFunctionInfo;
}
export interface LastDeploymentInfo {
  deploymentId?: string;
  status?: DeploymentStatus;
  endTime?: Date | string;
  createTime?: Date | string;
}
export type LifecycleErrorCode =
  | "Success"
  | "ScriptMissing"
  | "ScriptNotExecutable"
  | "ScriptTimedOut"
  | "ScriptFailed"
  | "UnknownError";
export interface LifecycleEvent {
  lifecycleEventName?: string;
  diagnostics?: Diagnostics;
  startTime?: Date | string;
  endTime?: Date | string;
  status?: LifecycleEventStatus;
}
export declare class LifecycleEventAlreadyCompletedException extends EffectData.TaggedError(
  "LifecycleEventAlreadyCompletedException",
)<{
  readonly message?: string;
}> {}
export type LifecycleEventHookExecutionId = string;

export type LifecycleEventList = Array<LifecycleEvent>;
export type LifecycleEventName = string;

export type LifecycleEventStatus =
  | "Pending"
  | "InProgress"
  | "Succeeded"
  | "Failed"
  | "Skipped"
  | "Unknown";
export declare class LifecycleHookLimitExceededException extends EffectData.TaggedError(
  "LifecycleHookLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type LifecycleMessage = string;

export interface ListApplicationRevisionsInput {
  applicationName: string;
  sortBy?: ApplicationRevisionSortBy;
  sortOrder?: SortOrder;
  s3Bucket?: string;
  s3KeyPrefix?: string;
  deployed?: ListStateFilterAction;
  nextToken?: string;
}
export interface ListApplicationRevisionsOutput {
  revisions?: Array<RevisionLocation>;
  nextToken?: string;
}
export interface ListApplicationsInput {
  nextToken?: string;
}
export interface ListApplicationsOutput {
  applications?: Array<string>;
  nextToken?: string;
}
export interface ListDeploymentConfigsInput {
  nextToken?: string;
}
export interface ListDeploymentConfigsOutput {
  deploymentConfigsList?: Array<string>;
  nextToken?: string;
}
export interface ListDeploymentGroupsInput {
  applicationName: string;
  nextToken?: string;
}
export interface ListDeploymentGroupsOutput {
  applicationName?: string;
  deploymentGroups?: Array<string>;
  nextToken?: string;
}
export interface ListDeploymentInstancesInput {
  deploymentId: string;
  nextToken?: string;
  instanceStatusFilter?: Array<InstanceStatus>;
  instanceTypeFilter?: Array<InstanceType>;
}
export interface ListDeploymentInstancesOutput {
  instancesList?: Array<string>;
  nextToken?: string;
}
export interface ListDeploymentsInput {
  applicationName?: string;
  deploymentGroupName?: string;
  externalId?: string;
  includeOnlyStatuses?: Array<DeploymentStatus>;
  createTimeRange?: TimeRange;
  nextToken?: string;
}
export interface ListDeploymentsOutput {
  deployments?: Array<string>;
  nextToken?: string;
}
export interface ListDeploymentTargetsInput {
  deploymentId: string;
  nextToken?: string;
  targetFilters?: { [key in TargetFilterName]?: string };
}
export interface ListDeploymentTargetsOutput {
  targetIds?: Array<string>;
  nextToken?: string;
}
export type ListenerArn = string;

export type ListenerArnList = Array<string>;
export interface ListGitHubAccountTokenNamesInput {
  nextToken?: string;
}
export interface ListGitHubAccountTokenNamesOutput {
  tokenNameList?: Array<string>;
  nextToken?: string;
}
export interface ListOnPremisesInstancesInput {
  registrationStatus?: RegistrationStatus;
  tagFilters?: Array<TagFilter>;
  nextToken?: string;
}
export interface ListOnPremisesInstancesOutput {
  instanceNames?: Array<string>;
  nextToken?: string;
}
export type ListStateFilterAction = "include" | "exclude" | "ignore";
export interface ListTagsForResourceInput {
  ResourceArn: string;
  NextToken?: string;
}
export interface ListTagsForResourceOutput {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export interface LoadBalancerInfo {
  elbInfoList?: Array<ELBInfo>;
  targetGroupInfoList?: Array<TargetGroupInfo>;
  targetGroupPairInfoList?: Array<TargetGroupPairInfo>;
}
export type LogTail = string;

export type Message = string;

export interface MinimumHealthyHosts {
  type?: MinimumHealthyHostsType;
  value?: number;
}
export interface MinimumHealthyHostsPerZone {
  type?: MinimumHealthyHostsPerZoneType;
  value?: number;
}
export type MinimumHealthyHostsPerZoneType = "HOST_COUNT" | "FLEET_PERCENT";
export type MinimumHealthyHostsPerZoneValue = number;

export type MinimumHealthyHostsType = "HOST_COUNT" | "FLEET_PERCENT";
export type MinimumHealthyHostsValue = number;

export declare class MultipleIamArnsProvidedException extends EffectData.TaggedError(
  "MultipleIamArnsProvidedException",
)<{
  readonly message?: string;
}> {}
export type NextToken = string;

export type NullableBoolean = boolean;

export interface OnPremisesTagSet {
  onPremisesTagSetList?: Array<Array<TagFilter>>;
}
export type OnPremisesTagSetList = Array<Array<TagFilter>>;
export declare class OperationNotSupportedException extends EffectData.TaggedError(
  "OperationNotSupportedException",
)<{
  readonly message?: string;
}> {}
export type OutdatedInstancesStrategy = "UPDATE" | "IGNORE";
export type Percentage = number;

export interface PutLifecycleEventHookExecutionStatusInput {
  deploymentId?: string;
  lifecycleEventHookExecutionId?: string;
  status?: LifecycleEventStatus;
}
export interface PutLifecycleEventHookExecutionStatusOutput {
  lifecycleEventHookExecutionId?: string;
}
export interface RawString {
  content?: string;
  sha256?: string;
}
export type RawStringContent = string;

export type RawStringSha256 = string;

export interface RegisterApplicationRevisionInput {
  applicationName: string;
  description?: string;
  revision: RevisionLocation;
}
export interface RegisterOnPremisesInstanceInput {
  instanceName: string;
  iamSessionArn?: string;
  iamUserArn?: string;
}
export type RegistrationStatus = "Registered" | "Deregistered";
export interface RelatedDeployments {
  autoUpdateOutdatedInstancesRootDeploymentId?: string;
  autoUpdateOutdatedInstancesDeploymentIds?: Array<string>;
}
export interface RemoveTagsFromOnPremisesInstancesInput {
  tags: Array<Tag>;
  instanceNames: Array<string>;
}
export type Repository = string;

export declare class ResourceArnRequiredException extends EffectData.TaggedError(
  "ResourceArnRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceValidationException extends EffectData.TaggedError(
  "ResourceValidationException",
)<{
  readonly message?: string;
}> {}
export declare class RevisionDoesNotExistException extends EffectData.TaggedError(
  "RevisionDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export interface RevisionInfo {
  revisionLocation?: RevisionLocation;
  genericRevisionInfo?: GenericRevisionInfo;
}
export type RevisionInfoList = Array<RevisionInfo>;
export interface RevisionLocation {
  revisionType?: RevisionLocationType;
  s3Location?: S3Location;
  gitHubLocation?: GitHubLocation;
  string?: RawString;
  appSpecContent?: AppSpecContent;
}
export type RevisionLocationList = Array<RevisionLocation>;
export type RevisionLocationType =
  | "S3"
  | "GitHub"
  | "String"
  | "AppSpecContent";
export declare class RevisionRequiredException extends EffectData.TaggedError(
  "RevisionRequiredException",
)<{
  readonly message?: string;
}> {}
export type Role = string;

export declare class RoleRequiredException extends EffectData.TaggedError(
  "RoleRequiredException",
)<{
  readonly message?: string;
}> {}
export interface RollbackInfo {
  rollbackDeploymentId?: string;
  rollbackTriggeringDeploymentId?: string;
  rollbackMessage?: string;
}
export type S3Bucket = string;

export type S3Key = string;

export interface S3Location {
  bucket?: string;
  key?: string;
  bundleType?: BundleType;
  version?: string;
  eTag?: string;
}
export type ScriptName = string;

export interface SkipWaitTimeForInstanceTerminationInput {
  deploymentId?: string;
}
export type SortOrder = "ascending" | "descending";
export interface StopDeploymentInput {
  deploymentId: string;
  autoRollbackEnabled?: boolean;
}
export interface StopDeploymentOutput {
  status?: StopStatus;
  statusMessage?: string;
}
export type StopStatus = "Pending" | "Succeeded";
export interface Tag {
  Key?: string;
  Value?: string;
}
export interface TagFilter {
  Key?: string;
  Value?: string;
  Type?: TagFilterType;
}
export type TagFilterList = Array<TagFilter>;
export type TagFilterType = "KEY_ONLY" | "VALUE_ONLY" | "KEY_AND_VALUE";
export type TagKeyList = Array<string>;
export declare class TagLimitExceededException extends EffectData.TaggedError(
  "TagLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type TagList = Array<Tag>;
export declare class TagRequiredException extends EffectData.TaggedError(
  "TagRequiredException",
)<{
  readonly message?: string;
}> {}
export interface TagResourceInput {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceOutput {}
export declare class TagSetListLimitExceededException extends EffectData.TaggedError(
  "TagSetListLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type TargetArn = string;

export type TargetFilterName = "TargetStatus" | "ServerInstanceLabel";
export type TargetFilters = Record<TargetFilterName, Array<string>>;
export interface TargetGroupInfo {
  name?: string;
}
export type TargetGroupInfoList = Array<TargetGroupInfo>;
export type TargetGroupName = string;

export interface TargetGroupPairInfo {
  targetGroups?: Array<TargetGroupInfo>;
  prodTrafficRoute?: TrafficRoute;
  testTrafficRoute?: TrafficRoute;
}
export type TargetGroupPairInfoList = Array<TargetGroupPairInfo>;
export type TargetId = string;

export type TargetIdList = Array<string>;
export interface TargetInstances {
  tagFilters?: Array<EC2TagFilter>;
  autoScalingGroups?: Array<string>;
  ec2TagSet?: EC2TagSet;
}
export type TargetLabel = "Blue" | "Green";
export type TargetStatus =
  | "Pending"
  | "InProgress"
  | "Succeeded"
  | "Failed"
  | "Skipped"
  | "Unknown"
  | "Ready";
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Time = Date | string;

export interface TimeBasedCanary {
  canaryPercentage?: number;
  canaryInterval?: number;
}
export interface TimeBasedLinear {
  linearPercentage?: number;
  linearInterval?: number;
}
export interface TimeRange {
  start?: Date | string;
  end?: Date | string;
}
export type Timestamp = Date | string;

export interface TrafficRoute {
  listenerArns?: Array<string>;
}
export interface TrafficRoutingConfig {
  type?: TrafficRoutingType;
  timeBasedCanary?: TimeBasedCanary;
  timeBasedLinear?: TimeBasedLinear;
}
export type TrafficRoutingType =
  | "TimeBasedCanary"
  | "TimeBasedLinear"
  | "AllAtOnce";
export type TrafficWeight = number;

export interface TriggerConfig {
  triggerName?: string;
  triggerTargetArn?: string;
  triggerEvents?: Array<TriggerEventType>;
}
export type TriggerConfigList = Array<TriggerConfig>;
export type TriggerEventType =
  | "DeploymentStart"
  | "DeploymentSuccess"
  | "DeploymentFailure"
  | "DeploymentStop"
  | "DeploymentRollback"
  | "DeploymentReady"
  | "InstanceStart"
  | "InstanceSuccess"
  | "InstanceFailure"
  | "InstanceReady";
export type TriggerEventTypeList = Array<TriggerEventType>;
export type TriggerName = string;

export type TriggerTargetArn = string;

export declare class TriggerTargetsLimitExceededException extends EffectData.TaggedError(
  "TriggerTargetsLimitExceededException",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedActionForDeploymentTypeException extends EffectData.TaggedError(
  "UnsupportedActionForDeploymentTypeException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateApplicationInput {
  applicationName?: string;
  newApplicationName?: string;
}
export interface UpdateDeploymentGroupInput {
  applicationName: string;
  currentDeploymentGroupName: string;
  newDeploymentGroupName?: string;
  deploymentConfigName?: string;
  ec2TagFilters?: Array<EC2TagFilter>;
  onPremisesInstanceTagFilters?: Array<TagFilter>;
  autoScalingGroups?: Array<string>;
  serviceRoleArn?: string;
  triggerConfigurations?: Array<TriggerConfig>;
  alarmConfiguration?: AlarmConfiguration;
  autoRollbackConfiguration?: AutoRollbackConfiguration;
  outdatedInstancesStrategy?: OutdatedInstancesStrategy;
  deploymentStyle?: DeploymentStyle;
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
  loadBalancerInfo?: LoadBalancerInfo;
  ec2TagSet?: EC2TagSet;
  ecsServices?: Array<ECSService>;
  onPremisesTagSet?: OnPremisesTagSet;
  terminationHookEnabled?: boolean;
}
export interface UpdateDeploymentGroupOutput {
  hooksNotCleanedUp?: Array<AutoScalingGroup>;
}
export type Value = string;

export type Version = string;

export type VersionId = string;

export type WaitTimeInMins = number;

export type WaitTimeInSeconds = number;

export interface ZonalConfig {
  firstZoneMonitorDurationInSeconds?: number;
  monitorDurationInSeconds?: number;
  minimumHealthyHostsPerZone?: MinimumHealthyHostsPerZone;
}
export declare namespace AddTagsToOnPremisesInstances {
  export type Input = AddTagsToOnPremisesInstancesInput;
  export type Output = {};
  export type Error =
    | InstanceLimitExceededException
    | InstanceNameRequiredException
    | InstanceNotRegisteredException
    | InvalidInstanceNameException
    | InvalidTagException
    | TagLimitExceededException
    | TagRequiredException
    | CommonAwsError;
}

export declare namespace BatchGetApplicationRevisions {
  export type Input = BatchGetApplicationRevisionsInput;
  export type Output = BatchGetApplicationRevisionsOutput;
  export type Error =
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | BatchLimitExceededException
    | InvalidApplicationNameException
    | InvalidRevisionException
    | RevisionRequiredException
    | CommonAwsError;
}

export declare namespace BatchGetApplications {
  export type Input = BatchGetApplicationsInput;
  export type Output = BatchGetApplicationsOutput;
  export type Error =
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | BatchLimitExceededException
    | InvalidApplicationNameException
    | CommonAwsError;
}

export declare namespace BatchGetDeploymentGroups {
  export type Input = BatchGetDeploymentGroupsInput;
  export type Output = BatchGetDeploymentGroupsOutput;
  export type Error =
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | BatchLimitExceededException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupNameRequiredException
    | InvalidApplicationNameException
    | InvalidDeploymentGroupNameException
    | CommonAwsError;
}

export declare namespace BatchGetDeploymentInstances {
  export type Input = BatchGetDeploymentInstancesInput;
  export type Output = BatchGetDeploymentInstancesOutput;
  export type Error =
    | BatchLimitExceededException
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | InstanceIdRequiredException
    | InvalidComputePlatformException
    | InvalidDeploymentIdException
    | InvalidInstanceNameException
    | CommonAwsError;
}

export declare namespace BatchGetDeployments {
  export type Input = BatchGetDeploymentsInput;
  export type Output = BatchGetDeploymentsOutput;
  export type Error =
    | BatchLimitExceededException
    | DeploymentIdRequiredException
    | InvalidDeploymentIdException
    | CommonAwsError;
}

export declare namespace BatchGetDeploymentTargets {
  export type Input = BatchGetDeploymentTargetsInput;
  export type Output = BatchGetDeploymentTargetsOutput;
  export type Error =
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | DeploymentNotStartedException
    | DeploymentTargetDoesNotExistException
    | DeploymentTargetIdRequiredException
    | DeploymentTargetListSizeExceededException
    | InstanceDoesNotExistException
    | InvalidDeploymentIdException
    | InvalidDeploymentTargetIdException
    | CommonAwsError;
}

export declare namespace BatchGetOnPremisesInstances {
  export type Input = BatchGetOnPremisesInstancesInput;
  export type Output = BatchGetOnPremisesInstancesOutput;
  export type Error =
    | BatchLimitExceededException
    | InstanceNameRequiredException
    | InvalidInstanceNameException
    | CommonAwsError;
}

export declare namespace ContinueDeployment {
  export type Input = ContinueDeploymentInput;
  export type Output = {};
  export type Error =
    | DeploymentAlreadyCompletedException
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | DeploymentIsNotInReadyStateException
    | InvalidDeploymentIdException
    | InvalidDeploymentStatusException
    | InvalidDeploymentWaitTypeException
    | UnsupportedActionForDeploymentTypeException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationInput;
  export type Output = CreateApplicationOutput;
  export type Error =
    | ApplicationAlreadyExistsException
    | ApplicationLimitExceededException
    | ApplicationNameRequiredException
    | InvalidApplicationNameException
    | InvalidComputePlatformException
    | InvalidTagsToAddException
    | CommonAwsError;
}

export declare namespace CreateDeployment {
  export type Input = CreateDeploymentInput;
  export type Output = CreateDeploymentOutput;
  export type Error =
    | AlarmsLimitExceededException
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupDoesNotExistException
    | DeploymentGroupNameRequiredException
    | DeploymentLimitExceededException
    | DescriptionTooLongException
    | InvalidAlarmConfigException
    | InvalidApplicationNameException
    | InvalidAutoRollbackConfigException
    | InvalidAutoScalingGroupException
    | InvalidDeploymentConfigNameException
    | InvalidDeploymentGroupNameException
    | InvalidFileExistsBehaviorException
    | InvalidGitHubAccountTokenException
    | InvalidIgnoreApplicationStopFailuresValueException
    | InvalidLoadBalancerInfoException
    | InvalidRevisionException
    | InvalidRoleException
    | InvalidTargetInstancesException
    | InvalidTrafficRoutingConfigurationException
    | InvalidUpdateOutdatedInstancesOnlyValueException
    | RevisionDoesNotExistException
    | RevisionRequiredException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDeploymentConfig {
  export type Input = CreateDeploymentConfigInput;
  export type Output = CreateDeploymentConfigOutput;
  export type Error =
    | DeploymentConfigAlreadyExistsException
    | DeploymentConfigLimitExceededException
    | DeploymentConfigNameRequiredException
    | InvalidComputePlatformException
    | InvalidDeploymentConfigNameException
    | InvalidMinimumHealthyHostValueException
    | InvalidTrafficRoutingConfigurationException
    | InvalidZonalDeploymentConfigurationException
    | CommonAwsError;
}

export declare namespace CreateDeploymentGroup {
  export type Input = CreateDeploymentGroupInput;
  export type Output = CreateDeploymentGroupOutput;
  export type Error =
    | AlarmsLimitExceededException
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupAlreadyExistsException
    | DeploymentGroupLimitExceededException
    | DeploymentGroupNameRequiredException
    | ECSServiceMappingLimitExceededException
    | InvalidAlarmConfigException
    | InvalidApplicationNameException
    | InvalidAutoRollbackConfigException
    | InvalidAutoScalingGroupException
    | InvalidBlueGreenDeploymentConfigurationException
    | InvalidDeploymentConfigNameException
    | InvalidDeploymentGroupNameException
    | InvalidDeploymentStyleException
    | InvalidEC2TagCombinationException
    | InvalidEC2TagException
    | InvalidECSServiceException
    | InvalidInputException
    | InvalidLoadBalancerInfoException
    | InvalidOnPremisesTagCombinationException
    | InvalidRoleException
    | InvalidTagException
    | InvalidTagsToAddException
    | InvalidTargetGroupPairException
    | InvalidTrafficRoutingConfigurationException
    | InvalidTriggerConfigException
    | LifecycleHookLimitExceededException
    | RoleRequiredException
    | TagSetListLimitExceededException
    | ThrottlingException
    | TriggerTargetsLimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationInput;
  export type Output = {};
  export type Error =
    | ApplicationNameRequiredException
    | InvalidApplicationNameException
    | InvalidRoleException
    | CommonAwsError;
}

export declare namespace DeleteDeploymentConfig {
  export type Input = DeleteDeploymentConfigInput;
  export type Output = {};
  export type Error =
    | DeploymentConfigInUseException
    | DeploymentConfigNameRequiredException
    | InvalidDeploymentConfigNameException
    | InvalidOperationException
    | CommonAwsError;
}

export declare namespace DeleteDeploymentGroup {
  export type Input = DeleteDeploymentGroupInput;
  export type Output = DeleteDeploymentGroupOutput;
  export type Error =
    | ApplicationNameRequiredException
    | DeploymentGroupNameRequiredException
    | InvalidApplicationNameException
    | InvalidDeploymentGroupNameException
    | InvalidRoleException
    | CommonAwsError;
}

export declare namespace DeleteGitHubAccountToken {
  export type Input = DeleteGitHubAccountTokenInput;
  export type Output = DeleteGitHubAccountTokenOutput;
  export type Error =
    | GitHubAccountTokenDoesNotExistException
    | GitHubAccountTokenNameRequiredException
    | InvalidGitHubAccountTokenNameException
    | OperationNotSupportedException
    | ResourceValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourcesByExternalId {
  export type Input = DeleteResourcesByExternalIdInput;
  export type Output = DeleteResourcesByExternalIdOutput;
  export type Error = CommonAwsError;
}

export declare namespace DeregisterOnPremisesInstance {
  export type Input = DeregisterOnPremisesInstanceInput;
  export type Output = {};
  export type Error =
    | InstanceNameRequiredException
    | InvalidInstanceNameException
    | CommonAwsError;
}

export declare namespace GetApplication {
  export type Input = GetApplicationInput;
  export type Output = GetApplicationOutput;
  export type Error =
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | InvalidApplicationNameException
    | CommonAwsError;
}

export declare namespace GetApplicationRevision {
  export type Input = GetApplicationRevisionInput;
  export type Output = GetApplicationRevisionOutput;
  export type Error =
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | InvalidApplicationNameException
    | InvalidRevisionException
    | RevisionDoesNotExistException
    | RevisionRequiredException
    | CommonAwsError;
}

export declare namespace GetDeployment {
  export type Input = GetDeploymentInput;
  export type Output = GetDeploymentOutput;
  export type Error =
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | InvalidDeploymentIdException
    | CommonAwsError;
}

export declare namespace GetDeploymentConfig {
  export type Input = GetDeploymentConfigInput;
  export type Output = GetDeploymentConfigOutput;
  export type Error =
    | DeploymentConfigDoesNotExistException
    | DeploymentConfigNameRequiredException
    | InvalidComputePlatformException
    | InvalidDeploymentConfigNameException
    | CommonAwsError;
}

export declare namespace GetDeploymentGroup {
  export type Input = GetDeploymentGroupInput;
  export type Output = GetDeploymentGroupOutput;
  export type Error =
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupDoesNotExistException
    | DeploymentGroupNameRequiredException
    | InvalidApplicationNameException
    | InvalidDeploymentGroupNameException
    | CommonAwsError;
}

export declare namespace GetDeploymentInstance {
  export type Input = GetDeploymentInstanceInput;
  export type Output = GetDeploymentInstanceOutput;
  export type Error =
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | InstanceDoesNotExistException
    | InstanceIdRequiredException
    | InvalidComputePlatformException
    | InvalidDeploymentIdException
    | InvalidInstanceNameException
    | CommonAwsError;
}

export declare namespace GetDeploymentTarget {
  export type Input = GetDeploymentTargetInput;
  export type Output = GetDeploymentTargetOutput;
  export type Error =
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | DeploymentNotStartedException
    | DeploymentTargetDoesNotExistException
    | DeploymentTargetIdRequiredException
    | InvalidDeploymentIdException
    | InvalidDeploymentTargetIdException
    | InvalidInstanceNameException
    | CommonAwsError;
}

export declare namespace GetOnPremisesInstance {
  export type Input = GetOnPremisesInstanceInput;
  export type Output = GetOnPremisesInstanceOutput;
  export type Error =
    | InstanceNameRequiredException
    | InstanceNotRegisteredException
    | InvalidInstanceNameException
    | CommonAwsError;
}

export declare namespace ListApplicationRevisions {
  export type Input = ListApplicationRevisionsInput;
  export type Output = ListApplicationRevisionsOutput;
  export type Error =
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | BucketNameFilterRequiredException
    | InvalidApplicationNameException
    | InvalidBucketNameFilterException
    | InvalidDeployedStateFilterException
    | InvalidKeyPrefixFilterException
    | InvalidNextTokenException
    | InvalidSortByException
    | InvalidSortOrderException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsInput;
  export type Output = ListApplicationsOutput;
  export type Error = InvalidNextTokenException | CommonAwsError;
}

export declare namespace ListDeploymentConfigs {
  export type Input = ListDeploymentConfigsInput;
  export type Output = ListDeploymentConfigsOutput;
  export type Error = InvalidNextTokenException | CommonAwsError;
}

export declare namespace ListDeploymentGroups {
  export type Input = ListDeploymentGroupsInput;
  export type Output = ListDeploymentGroupsOutput;
  export type Error =
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | InvalidApplicationNameException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListDeploymentInstances {
  export type Input = ListDeploymentInstancesInput;
  export type Output = ListDeploymentInstancesOutput;
  export type Error =
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | DeploymentNotStartedException
    | InvalidComputePlatformException
    | InvalidDeploymentIdException
    | InvalidDeploymentInstanceTypeException
    | InvalidInstanceStatusException
    | InvalidInstanceTypeException
    | InvalidNextTokenException
    | InvalidTargetFilterNameException
    | CommonAwsError;
}

export declare namespace ListDeployments {
  export type Input = ListDeploymentsInput;
  export type Output = ListDeploymentsOutput;
  export type Error =
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | DeploymentGroupDoesNotExistException
    | DeploymentGroupNameRequiredException
    | InvalidApplicationNameException
    | InvalidDeploymentGroupNameException
    | InvalidDeploymentStatusException
    | InvalidExternalIdException
    | InvalidInputException
    | InvalidNextTokenException
    | InvalidTimeRangeException
    | CommonAwsError;
}

export declare namespace ListDeploymentTargets {
  export type Input = ListDeploymentTargetsInput;
  export type Output = ListDeploymentTargetsOutput;
  export type Error =
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | DeploymentNotStartedException
    | InvalidDeploymentIdException
    | InvalidDeploymentInstanceTypeException
    | InvalidInstanceStatusException
    | InvalidInstanceTypeException
    | InvalidNextTokenException
    | InvalidTargetFilterNameException
    | CommonAwsError;
}

export declare namespace ListGitHubAccountTokenNames {
  export type Input = ListGitHubAccountTokenNamesInput;
  export type Output = ListGitHubAccountTokenNamesOutput;
  export type Error =
    | InvalidNextTokenException
    | OperationNotSupportedException
    | ResourceValidationException
    | CommonAwsError;
}

export declare namespace ListOnPremisesInstances {
  export type Input = ListOnPremisesInstancesInput;
  export type Output = ListOnPremisesInstancesOutput;
  export type Error =
    | InvalidNextTokenException
    | InvalidRegistrationStatusException
    | InvalidTagFilterException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | ArnNotSupportedException
    | InvalidArnException
    | ResourceArnRequiredException
    | CommonAwsError;
}

export declare namespace PutLifecycleEventHookExecutionStatus {
  export type Input = PutLifecycleEventHookExecutionStatusInput;
  export type Output = PutLifecycleEventHookExecutionStatusOutput;
  export type Error =
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | InvalidDeploymentIdException
    | InvalidLifecycleEventHookExecutionIdException
    | InvalidLifecycleEventHookExecutionStatusException
    | LifecycleEventAlreadyCompletedException
    | UnsupportedActionForDeploymentTypeException
    | CommonAwsError;
}

export declare namespace RegisterApplicationRevision {
  export type Input = RegisterApplicationRevisionInput;
  export type Output = {};
  export type Error =
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | DescriptionTooLongException
    | InvalidApplicationNameException
    | InvalidRevisionException
    | RevisionRequiredException
    | CommonAwsError;
}

export declare namespace RegisterOnPremisesInstance {
  export type Input = RegisterOnPremisesInstanceInput;
  export type Output = {};
  export type Error =
    | IamArnRequiredException
    | IamSessionArnAlreadyRegisteredException
    | IamUserArnAlreadyRegisteredException
    | IamUserArnRequiredException
    | InstanceNameAlreadyRegisteredException
    | InstanceNameRequiredException
    | InvalidIamSessionArnException
    | InvalidIamUserArnException
    | InvalidInstanceNameException
    | MultipleIamArnsProvidedException
    | CommonAwsError;
}

export declare namespace RemoveTagsFromOnPremisesInstances {
  export type Input = RemoveTagsFromOnPremisesInstancesInput;
  export type Output = {};
  export type Error =
    | InstanceLimitExceededException
    | InstanceNameRequiredException
    | InstanceNotRegisteredException
    | InvalidInstanceNameException
    | InvalidTagException
    | TagLimitExceededException
    | TagRequiredException
    | CommonAwsError;
}

export declare namespace SkipWaitTimeForInstanceTermination {
  export type Input = SkipWaitTimeForInstanceTerminationInput;
  export type Output = {};
  export type Error =
    | DeploymentAlreadyCompletedException
    | DeploymentDoesNotExistException
    | DeploymentIdRequiredException
    | DeploymentNotStartedException
    | InvalidDeploymentIdException
    | UnsupportedActionForDeploymentTypeException
    | CommonAwsError;
}

export declare namespace StopDeployment {
  export type Input = StopDeploymentInput;
  export type Output = StopDeploymentOutput;
  export type Error =
    | DeploymentAlreadyCompletedException
    | DeploymentDoesNotExistException
    | DeploymentGroupDoesNotExistException
    | DeploymentIdRequiredException
    | InvalidDeploymentIdException
    | UnsupportedActionForDeploymentTypeException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | ApplicationDoesNotExistException
    | ArnNotSupportedException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupDoesNotExistException
    | InvalidArnException
    | InvalidTagsToAddException
    | ResourceArnRequiredException
    | TagRequiredException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | ApplicationDoesNotExistException
    | ArnNotSupportedException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupDoesNotExistException
    | InvalidArnException
    | InvalidTagsToAddException
    | ResourceArnRequiredException
    | TagRequiredException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationInput;
  export type Output = {};
  export type Error =
    | ApplicationAlreadyExistsException
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | InvalidApplicationNameException
    | CommonAwsError;
}

export declare namespace UpdateDeploymentGroup {
  export type Input = UpdateDeploymentGroupInput;
  export type Output = UpdateDeploymentGroupOutput;
  export type Error =
    | AlarmsLimitExceededException
    | ApplicationDoesNotExistException
    | ApplicationNameRequiredException
    | DeploymentConfigDoesNotExistException
    | DeploymentGroupAlreadyExistsException
    | DeploymentGroupDoesNotExistException
    | DeploymentGroupNameRequiredException
    | ECSServiceMappingLimitExceededException
    | InvalidAlarmConfigException
    | InvalidApplicationNameException
    | InvalidAutoRollbackConfigException
    | InvalidAutoScalingGroupException
    | InvalidBlueGreenDeploymentConfigurationException
    | InvalidDeploymentConfigNameException
    | InvalidDeploymentGroupNameException
    | InvalidDeploymentStyleException
    | InvalidEC2TagCombinationException
    | InvalidEC2TagException
    | InvalidECSServiceException
    | InvalidInputException
    | InvalidLoadBalancerInfoException
    | InvalidOnPremisesTagCombinationException
    | InvalidRoleException
    | InvalidTagException
    | InvalidTargetGroupPairException
    | InvalidTrafficRoutingConfigurationException
    | InvalidTriggerConfigException
    | LifecycleHookLimitExceededException
    | TagSetListLimitExceededException
    | ThrottlingException
    | TriggerTargetsLimitExceededException
    | CommonAwsError;
}

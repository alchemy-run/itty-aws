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

export declare class drs extends AWSServiceClient {
  createExtendedSourceServer(
    input: CreateExtendedSourceServerRequest,
  ): Effect.Effect<
    CreateExtendedSourceServerResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  deleteLaunchAction(
    input: DeleteLaunchActionRequest,
  ): Effect.Effect<
    DeleteLaunchActionResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  initializeService(
    input: InitializeServiceRequest,
  ): Effect.Effect<
    InitializeServiceResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listExtensibleSourceServers(
    input: ListExtensibleSourceServersRequest,
  ): Effect.Effect<
    ListExtensibleSourceServersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  listLaunchActions(
    input: ListLaunchActionsRequest,
  ): Effect.Effect<
    ListLaunchActionsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  listStagingAccounts(
    input: ListStagingAccountsRequest,
  ): Effect.Effect<
    ListStagingAccountsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putLaunchAction(
    input: PutLaunchActionRequest,
  ): Effect.Effect<
    PutLaunchActionResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateSourceNetworkStack(
    input: AssociateSourceNetworkStackRequest,
  ): Effect.Effect<
    AssociateSourceNetworkStackResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  createLaunchConfigurationTemplate(
    input: CreateLaunchConfigurationTemplateRequest,
  ): Effect.Effect<
    CreateLaunchConfigurationTemplateResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  createReplicationConfigurationTemplate(
    input: CreateReplicationConfigurationTemplateRequest,
  ): Effect.Effect<
    ReplicationConfigurationTemplate,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  createSourceNetwork(
    input: CreateSourceNetworkRequest,
  ): Effect.Effect<
    CreateSourceNetworkResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  deleteJob(
    input: DeleteJobRequest,
  ): Effect.Effect<
    DeleteJobResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  deleteLaunchConfigurationTemplate(
    input: DeleteLaunchConfigurationTemplateRequest,
  ): Effect.Effect<
    DeleteLaunchConfigurationTemplateResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  deleteRecoveryInstance(
    input: DeleteRecoveryInstanceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  deleteReplicationConfigurationTemplate(
    input: DeleteReplicationConfigurationTemplateRequest,
  ): Effect.Effect<
    DeleteReplicationConfigurationTemplateResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  deleteSourceNetwork(
    input: DeleteSourceNetworkRequest,
  ): Effect.Effect<
    DeleteSourceNetworkResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  deleteSourceServer(
    input: DeleteSourceServerRequest,
  ): Effect.Effect<
    DeleteSourceServerResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  describeJobLogItems(
    input: DescribeJobLogItemsRequest,
  ): Effect.Effect<
    DescribeJobLogItemsResponse,
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  describeJobs(
    input: DescribeJobsRequest,
  ): Effect.Effect<
    DescribeJobsResponse,
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  describeLaunchConfigurationTemplates(
    input: DescribeLaunchConfigurationTemplatesRequest,
  ): Effect.Effect<
    DescribeLaunchConfigurationTemplatesResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  describeRecoveryInstances(
    input: DescribeRecoveryInstancesRequest,
  ): Effect.Effect<
    DescribeRecoveryInstancesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  describeRecoverySnapshots(
    input: DescribeRecoverySnapshotsRequest,
  ): Effect.Effect<
    DescribeRecoverySnapshotsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  describeReplicationConfigurationTemplates(
    input: DescribeReplicationConfigurationTemplatesRequest,
  ): Effect.Effect<
    DescribeReplicationConfigurationTemplatesResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  describeSourceNetworks(
    input: DescribeSourceNetworksRequest,
  ): Effect.Effect<
    DescribeSourceNetworksResponse,
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  describeSourceServers(
    input: DescribeSourceServersRequest,
  ): Effect.Effect<
    DescribeSourceServersResponse,
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  disconnectRecoveryInstance(
    input: DisconnectRecoveryInstanceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  disconnectSourceServer(
    input: DisconnectSourceServerRequest,
  ): Effect.Effect<
    SourceServer,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  exportSourceNetworkCfnTemplate(
    input: ExportSourceNetworkCfnTemplateRequest,
  ): Effect.Effect<
    ExportSourceNetworkCfnTemplateResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  getFailbackReplicationConfiguration(
    input: GetFailbackReplicationConfigurationRequest,
  ): Effect.Effect<
    GetFailbackReplicationConfigurationResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  getLaunchConfiguration(
    input: GetLaunchConfigurationRequest,
  ): Effect.Effect<
    LaunchConfiguration,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  getReplicationConfiguration(
    input: GetReplicationConfigurationRequest,
  ): Effect.Effect<
    ReplicationConfiguration,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  retryDataReplication(
    input: RetryDataReplicationRequest,
  ): Effect.Effect<
    SourceServer,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  reverseReplication(
    input: ReverseReplicationRequest,
  ): Effect.Effect<
    ReverseReplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  startFailbackLaunch(
    input: StartFailbackLaunchRequest,
  ): Effect.Effect<
    StartFailbackLaunchResponse,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  startRecovery(
    input: StartRecoveryRequest,
  ): Effect.Effect<
    StartRecoveryResponse,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  startReplication(
    input: StartReplicationRequest,
  ): Effect.Effect<
    StartReplicationResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  startSourceNetworkRecovery(
    input: StartSourceNetworkRecoveryRequest,
  ): Effect.Effect<
    StartSourceNetworkRecoveryResponse,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  startSourceNetworkReplication(
    input: StartSourceNetworkReplicationRequest,
  ): Effect.Effect<
    StartSourceNetworkReplicationResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  stopFailback(
    input: StopFailbackRequest,
  ): Effect.Effect<
    {},
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  stopReplication(
    input: StopReplicationRequest,
  ): Effect.Effect<
    StopReplicationResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  stopSourceNetworkReplication(
    input: StopSourceNetworkReplicationRequest,
  ): Effect.Effect<
    StopSourceNetworkReplicationResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  terminateRecoveryInstances(
    input: TerminateRecoveryInstancesRequest,
  ): Effect.Effect<
    TerminateRecoveryInstancesResponse,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  updateFailbackReplicationConfiguration(
    input: UpdateFailbackReplicationConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError
  >;
  updateLaunchConfiguration(
    input: UpdateLaunchConfigurationRequest,
  ): Effect.Effect<
    LaunchConfiguration,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  updateLaunchConfigurationTemplate(
    input: UpdateLaunchConfigurationTemplateRequest,
  ): Effect.Effect<
    UpdateLaunchConfigurationTemplateResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  updateReplicationConfiguration(
    input: UpdateReplicationConfigurationRequest,
  ): Effect.Effect<
    ReplicationConfiguration,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
  updateReplicationConfigurationTemplate(
    input: UpdateReplicationConfigurationTemplateRequest,
  ): Effect.Effect<
    ReplicationConfigurationTemplate,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Drs extends drs {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export interface Account {
  accountID?: string;
}
export type AccountID = string;

export type AccountIDs = Array<string>;
export type Accounts = Array<Account>;
export type AgentVersion = string;

export type ARN = string;

export interface AssociateSourceNetworkStackRequest {
  sourceNetworkID: string;
  cfnStackName: string;
}
export interface AssociateSourceNetworkStackResponse {
  job?: Job;
}
export type AwsAvailabilityZone = string;

export type AwsRegion = string;

export type BoundedString = string;

export type CfnStackName = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly code?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export type ConversionMap = Record<string, string>;
export interface ConversionProperties {
  volumeToConversionMap?: Record<string, Record<string, string>>;
  rootVolumeName?: string;
  forceUefi?: boolean;
  dataTimestamp?: string;
  volumeToVolumeSize?: Record<string, number>;
  volumeToProductCodes?: Record<string, Array<ProductCode>>;
}
export interface CPU {
  cores?: number;
  modelName?: string;
}
export type Cpus = Array<CPU>;
export interface CreateExtendedSourceServerRequest {
  sourceServerArn: string;
  tags?: Record<string, string>;
}
export interface CreateExtendedSourceServerResponse {
  sourceServer?: SourceServer;
}
export interface CreateLaunchConfigurationTemplateRequest {
  tags?: Record<string, string>;
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  exportBucketArn?: string;
  postLaunchEnabled?: boolean;
  launchIntoSourceInstance?: boolean;
}
export interface CreateLaunchConfigurationTemplateResponse {
  launchConfigurationTemplate?: LaunchConfigurationTemplate;
}
export interface CreateReplicationConfigurationTemplateRequest {
  stagingAreaSubnetId: string;
  associateDefaultSecurityGroup: boolean;
  replicationServersSecurityGroupsIDs: Array<string>;
  replicationServerInstanceType: string;
  useDedicatedReplicationServer: boolean;
  defaultLargeStagingDiskType: string;
  ebsEncryption: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling: number;
  dataPlaneRouting: string;
  createPublicIP: boolean;
  stagingAreaTags: Record<string, string>;
  pitPolicy: Array<PITPolicyRule>;
  tags?: Record<string, string>;
  autoReplicateNewDisks?: boolean;
}
export interface CreateSourceNetworkRequest {
  vpcID: string;
  originAccountID: string;
  originRegion: string;
  tags?: Record<string, string>;
}
export interface CreateSourceNetworkResponse {
  sourceNetworkID?: string;
}
export interface DataReplicationError {
  error?: string;
  rawError?: string;
}
export type DataReplicationErrorString = string;

export interface DataReplicationInfo {
  lagDuration?: string;
  etaDateTime?: string;
  replicatedDisks?: Array<DataReplicationInfoReplicatedDisk>;
  dataReplicationState?: string;
  dataReplicationInitiation?: DataReplicationInitiation;
  dataReplicationError?: DataReplicationError;
  stagingAvailabilityZone?: string;
  stagingOutpostArn?: string;
}
export interface DataReplicationInfoReplicatedDisk {
  deviceName?: string;
  totalStorageBytes?: number;
  replicatedStorageBytes?: number;
  rescannedStorageBytes?: number;
  backloggedStorageBytes?: number;
  volumeStatus?: string;
}
export type DataReplicationInfoReplicatedDisks =
  Array<DataReplicationInfoReplicatedDisk>;
export interface DataReplicationInitiation {
  startDateTime?: string;
  nextAttemptDateTime?: string;
  steps?: Array<DataReplicationInitiationStep>;
}
export interface DataReplicationInitiationStep {
  name?: string;
  status?: string;
}
export type DataReplicationInitiationStepName = string;

export type DataReplicationInitiationSteps =
  Array<DataReplicationInitiationStep>;
export type DataReplicationInitiationStepStatus = string;

export type DataReplicationState = string;

export interface DeleteJobRequest {
  jobID: string;
}
export interface DeleteJobResponse {}
export interface DeleteLaunchActionRequest {
  resourceId: string;
  actionId: string;
}
export interface DeleteLaunchActionResponse {}
export interface DeleteLaunchConfigurationTemplateRequest {
  launchConfigurationTemplateID: string;
}
export interface DeleteLaunchConfigurationTemplateResponse {}
export interface DeleteRecoveryInstanceRequest {
  recoveryInstanceID: string;
}
export interface DeleteReplicationConfigurationTemplateRequest {
  replicationConfigurationTemplateID: string;
}
export interface DeleteReplicationConfigurationTemplateResponse {}
export interface DeleteSourceNetworkRequest {
  sourceNetworkID: string;
}
export interface DeleteSourceNetworkResponse {}
export interface DeleteSourceServerRequest {
  sourceServerID: string;
}
export interface DeleteSourceServerResponse {}
export interface DescribeJobLogItemsRequest {
  jobID: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeJobLogItemsResponse {
  items?: Array<JobLog>;
  nextToken?: string;
}
export interface DescribeJobsRequest {
  filters?: DescribeJobsRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeJobsRequestFilters {
  jobIDs?: Array<string>;
  fromDate?: string;
  toDate?: string;
}
export type DescribeJobsRequestFiltersJobIDs = Array<string>;
export interface DescribeJobsResponse {
  items?: Array<Job>;
  nextToken?: string;
}
export interface DescribeLaunchConfigurationTemplatesRequest {
  launchConfigurationTemplateIDs?: Array<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeLaunchConfigurationTemplatesResponse {
  items?: Array<LaunchConfigurationTemplate>;
  nextToken?: string;
}
export type DescribeRecoveryInstancesItems = Array<RecoveryInstance>;
export interface DescribeRecoveryInstancesRequest {
  filters?: DescribeRecoveryInstancesRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeRecoveryInstancesRequestFilters {
  recoveryInstanceIDs?: Array<string>;
  sourceServerIDs?: Array<string>;
}
export interface DescribeRecoveryInstancesResponse {
  nextToken?: string;
  items?: Array<RecoveryInstance>;
}
export interface DescribeRecoverySnapshotsRequest {
  sourceServerID: string;
  filters?: DescribeRecoverySnapshotsRequestFilters;
  order?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeRecoverySnapshotsRequestFilters {
  fromDateTime?: string;
  toDateTime?: string;
}
export interface DescribeRecoverySnapshotsResponse {
  items?: Array<RecoverySnapshot>;
  nextToken?: string;
}
export interface DescribeReplicationConfigurationTemplatesRequest {
  replicationConfigurationTemplateIDs?: Array<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeReplicationConfigurationTemplatesResponse {
  items?: Array<ReplicationConfigurationTemplate>;
  nextToken?: string;
}
export interface DescribeSourceNetworksRequest {
  filters?: DescribeSourceNetworksRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeSourceNetworksRequestFilters {
  sourceNetworkIDs?: Array<string>;
  originAccountID?: string;
  originRegion?: string;
}
export type DescribeSourceNetworksRequestFiltersIDs = Array<string>;
export interface DescribeSourceNetworksResponse {
  items?: Array<SourceNetwork>;
  nextToken?: string;
}
export interface DescribeSourceServersRequest {
  filters?: DescribeSourceServersRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeSourceServersRequestFilters {
  sourceServerIDs?: Array<string>;
  hardwareId?: string;
  stagingAccountIDs?: Array<string>;
}
export type DescribeSourceServersRequestFiltersIDs = Array<string>;
export interface DescribeSourceServersResponse {
  items?: Array<SourceServer>;
  nextToken?: string;
}
export interface DisconnectRecoveryInstanceRequest {
  recoveryInstanceID: string;
}
export interface DisconnectSourceServerRequest {
  sourceServerID: string;
}
export interface Disk {
  deviceName?: string;
  bytes?: number;
}
export type Disks = Array<Disk>;
export type EbsSnapshot = string;

export type EbsSnapshotsList = Array<string>;
export type EbsVolumeID = string;

export type EC2InstanceID = string;

export type EC2InstanceState = string;

export type EC2InstanceType = string;

interface _EventResourceData {
  sourceNetworkData?: SourceNetworkData;
}

export type EventResourceData = _EventResourceData & {
  sourceNetworkData: SourceNetworkData;
};
export interface ExportSourceNetworkCfnTemplateRequest {
  sourceNetworkID: string;
}
export interface ExportSourceNetworkCfnTemplateResponse {
  s3DestinationUrl?: string;
}
export type ExtensionStatus = string;

export type FailbackLaunchType = string;

export type FailbackReplicationError = string;

export type FailbackState = string;

export type FailureReason = string;

export interface GetFailbackReplicationConfigurationRequest {
  recoveryInstanceID: string;
}
export interface GetFailbackReplicationConfigurationResponse {
  recoveryInstanceID: string;
  name?: string;
  bandwidthThrottling?: number;
  usePrivateIP?: boolean;
}
export interface GetLaunchConfigurationRequest {
  sourceServerID: string;
}
export interface GetReplicationConfigurationRequest {
  sourceServerID: string;
}
export interface IdentificationHints {
  fqdn?: string;
  hostname?: string;
  vmWareUuid?: string;
  awsInstanceID?: string;
}
export interface InitializeServiceRequest {}
export interface InitializeServiceResponse {}
export type InitiatedBy = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type IPsList = Array<string>;
export type ISO8601DatetimeString = string;

export type ISO8601DurationString = string;

export interface Job {
  jobID: string;
  arn?: string;
  type?: string;
  initiatedBy?: string;
  creationDateTime?: string;
  endDateTime?: string;
  status?: string;
  participatingServers?: Array<ParticipatingServer>;
  tags?: Record<string, string>;
  participatingResources?: Array<ParticipatingResource>;
}
export type JobID = string;

export interface JobLog {
  logDateTime?: string;
  event?: string;
  eventData?: JobLogEventData;
}
export type JobLogEvent = string;

export interface JobLogEventData {
  sourceServerID?: string;
  conversionServerID?: string;
  targetInstanceID?: string;
  rawError?: string;
  conversionProperties?: ConversionProperties;
  eventResourceData?: EventResourceData;
}
export type JobLogs = Array<JobLog>;
export type JobsList = Array<Job>;
export type JobStatus = string;

export type JobType = string;

export type LargeBoundedString = string;

export type LastLaunchResult = string;

export type LastLaunchType = string;

export interface LaunchAction {
  actionId?: string;
  actionCode?: string;
  type?: string;
  name?: string;
  active?: boolean;
  order?: number;
  actionVersion?: string;
  optional?: boolean;
  parameters?: Record<string, LaunchActionParameter>;
  description?: string;
  category?: string;
}
export type LaunchActionCategory = string;

export type LaunchActionDescription = string;

export type LaunchActionId = string;

export type LaunchActionIds = Array<string>;
export type LaunchActionName = string;

export type LaunchActionOrder = number;

export interface LaunchActionParameter {
  value?: string;
  type?: string;
}
export type LaunchActionParameterName = string;

export type LaunchActionParameters = Record<string, LaunchActionParameter>;
export type LaunchActionParameterType = string;

export type LaunchActionParameterValue = string;

export type LaunchActionResourceId = string;

export interface LaunchActionRun {
  action?: LaunchAction;
  runId?: string;
  status?: string;
  failureReason?: string;
}
export type LaunchActionRunId = string;

export type LaunchActionRuns = Array<LaunchActionRun>;
export type LaunchActionRunStatus = string;

export type LaunchActions = Array<LaunchAction>;
export interface LaunchActionsRequestFilters {
  actionIds?: Array<string>;
}
export interface LaunchActionsStatus {
  ssmAgentDiscoveryDatetime?: string;
  runs?: Array<LaunchActionRun>;
}
export type LaunchActionType = string;

export type LaunchActionVersion = string;

export interface LaunchConfiguration {
  sourceServerID?: string;
  name?: string;
  ec2LaunchTemplateID?: string;
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  postLaunchEnabled?: boolean;
  launchIntoInstanceProperties?: LaunchIntoInstanceProperties;
}
export interface LaunchConfigurationTemplate {
  launchConfigurationTemplateID?: string;
  arn?: string;
  tags?: Record<string, string>;
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  exportBucketArn?: string;
  postLaunchEnabled?: boolean;
  launchIntoSourceInstance?: boolean;
}
export type LaunchConfigurationTemplateID = string;

export type LaunchConfigurationTemplateIDs = Array<string>;
export type LaunchConfigurationTemplates = Array<LaunchConfigurationTemplate>;
export type LaunchDisposition = string;

export interface LaunchIntoInstanceProperties {
  launchIntoEC2InstanceID?: string;
}
export type LaunchStatus = string;

export interface Licensing {
  osByol?: boolean;
}
export interface LifeCycle {
  addedToServiceDateTime?: string;
  firstByteDateTime?: string;
  elapsedReplicationDuration?: string;
  lastSeenByServiceDateTime?: string;
  lastLaunch?: LifeCycleLastLaunch;
}
export interface LifeCycleLastLaunch {
  initiated?: LifeCycleLastLaunchInitiated;
  status?: string;
}
export interface LifeCycleLastLaunchInitiated {
  apiCallDateTime?: string;
  jobID?: string;
  type?: string;
}
export interface ListExtensibleSourceServersRequest {
  stagingAccountID: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListExtensibleSourceServersResponse {
  items?: Array<StagingSourceServer>;
  nextToken?: string;
}
export interface ListLaunchActionsRequest {
  resourceId: string;
  filters?: LaunchActionsRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export interface ListLaunchActionsResponse {
  items?: Array<LaunchAction>;
  nextToken?: string;
}
export interface ListStagingAccountsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListStagingAccountsResponse {
  accounts?: Array<Account>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MaxResultsReplicatingSourceServers = number;

export type MaxResultsType = number;

export interface NetworkInterface {
  macAddress?: string;
  ips?: Array<string>;
  isPrimary?: boolean;
}
export type NetworkInterfaces = Array<NetworkInterface>;
export type OriginEnvironment = string;

export interface OS {
  fullString?: string;
}
export type OutpostARN = string;

export type PaginationToken = string;

export interface ParticipatingResource {
  participatingResourceID?: ParticipatingResourceID;
  launchStatus?: string;
}
interface _ParticipatingResourceID {
  sourceNetworkID?: string;
}

export type ParticipatingResourceID = _ParticipatingResourceID & {
  sourceNetworkID: string;
};
export type ParticipatingResources = Array<ParticipatingResource>;
export interface ParticipatingServer {
  sourceServerID?: string;
  recoveryInstanceID?: string;
  launchStatus?: string;
  launchActionsStatus?: LaunchActionsStatus;
}
export type ParticipatingServers = Array<ParticipatingServer>;
export type PITPolicy = Array<PITPolicyRule>;
export interface PITPolicyRule {
  ruleID?: number;
  units: string;
  interval: number;
  retentionDuration: number;
  enabled?: boolean;
}
export type PITPolicyRuleUnits = string;

export type PositiveInteger = number;

export interface ProductCode {
  productCodeId?: string;
  productCodeMode?: string;
}
export type ProductCodeId = string;

export type ProductCodeMode = string;

export type ProductCodes = Array<ProductCode>;
export interface PutLaunchActionRequest {
  resourceId: string;
  actionCode: string;
  order: number;
  actionId: string;
  optional: boolean;
  active: boolean;
  name: string;
  actionVersion: string;
  category: string;
  parameters?: Record<string, LaunchActionParameter>;
  description: string;
}
export interface PutLaunchActionResponse {
  resourceId?: string;
  actionId?: string;
  actionCode?: string;
  type?: string;
  name?: string;
  active?: boolean;
  order?: number;
  actionVersion?: string;
  optional?: boolean;
  parameters?: Record<string, LaunchActionParameter>;
  description?: string;
  category?: string;
}
export interface RecoveryInstance {
  ec2InstanceID?: string;
  ec2InstanceState?: string;
  jobID?: string;
  recoveryInstanceID?: string;
  sourceServerID?: string;
  arn?: string;
  tags?: Record<string, string>;
  failback?: RecoveryInstanceFailback;
  dataReplicationInfo?: RecoveryInstanceDataReplicationInfo;
  recoveryInstanceProperties?: RecoveryInstanceProperties;
  pointInTimeSnapshotDateTime?: string;
  isDrill?: boolean;
  originEnvironment?: string;
  originAvailabilityZone?: string;
  agentVersion?: string;
  sourceOutpostArn?: string;
}
export interface RecoveryInstanceDataReplicationError {
  error?: string;
  rawError?: string;
}
export interface RecoveryInstanceDataReplicationInfo {
  lagDuration?: string;
  etaDateTime?: string;
  replicatedDisks?: Array<RecoveryInstanceDataReplicationInfoReplicatedDisk>;
  dataReplicationState?: string;
  dataReplicationInitiation?: RecoveryInstanceDataReplicationInitiation;
  dataReplicationError?: RecoveryInstanceDataReplicationError;
  stagingAvailabilityZone?: string;
  stagingOutpostArn?: string;
}
export interface RecoveryInstanceDataReplicationInfoReplicatedDisk {
  deviceName?: string;
  totalStorageBytes?: number;
  replicatedStorageBytes?: number;
  rescannedStorageBytes?: number;
  backloggedStorageBytes?: number;
}
export type RecoveryInstanceDataReplicationInfoReplicatedDisks =
  Array<RecoveryInstanceDataReplicationInfoReplicatedDisk>;
export interface RecoveryInstanceDataReplicationInitiation {
  startDateTime?: string;
  steps?: Array<RecoveryInstanceDataReplicationInitiationStep>;
}
export interface RecoveryInstanceDataReplicationInitiationStep {
  name?: string;
  status?: string;
}
export type RecoveryInstanceDataReplicationInitiationStepName = string;

export type RecoveryInstanceDataReplicationInitiationSteps =
  Array<RecoveryInstanceDataReplicationInitiationStep>;
export type RecoveryInstanceDataReplicationInitiationStepStatus = string;

export type RecoveryInstanceDataReplicationState = string;

export interface RecoveryInstanceDisk {
  internalDeviceName?: string;
  bytes?: number;
  ebsVolumeID?: string;
}
export type RecoveryInstanceDisks = Array<RecoveryInstanceDisk>;
export interface RecoveryInstanceFailback {
  failbackClientID?: string;
  failbackJobID?: string;
  failbackInitiationTime?: string;
  state?: string;
  agentLastSeenByServiceDateTime?: string;
  failbackClientLastSeenByServiceDateTime?: string;
  failbackToOriginalServer?: boolean;
  firstByteDateTime?: string;
  elapsedReplicationDuration?: string;
  failbackLaunchType?: string;
}
export type RecoveryInstanceID = string;

export type RecoveryInstanceIDs = Array<string>;
export interface RecoveryInstanceProperties {
  lastUpdatedDateTime?: string;
  identificationHints?: IdentificationHints;
  networkInterfaces?: Array<NetworkInterface>;
  disks?: Array<RecoveryInstanceDisk>;
  cpus?: Array<CPU>;
  ramBytes?: number;
  os?: OS;
}
export type RecoveryInstancesForTerminationRequest = Array<string>;
export interface RecoveryLifeCycle {
  apiCallDateTime?: Date | string;
  jobID?: string;
  lastRecoveryResult?: string;
}
export type RecoveryResult = string;

export interface RecoverySnapshot {
  snapshotID: string;
  sourceServerID: string;
  expectedTimestamp: string;
  timestamp?: string;
  ebsSnapshots?: Array<string>;
}
export type RecoverySnapshotID = string;

export type RecoverySnapshotsList = Array<RecoverySnapshot>;
export type RecoverySnapshotsOrder = string;

export interface ReplicationConfiguration {
  sourceServerID?: string;
  name?: string;
  stagingAreaSubnetId?: string;
  associateDefaultSecurityGroup?: boolean;
  replicationServersSecurityGroupsIDs?: Array<string>;
  replicationServerInstanceType?: string;
  useDedicatedReplicationServer?: boolean;
  defaultLargeStagingDiskType?: string;
  replicatedDisks?: Array<ReplicationConfigurationReplicatedDisk>;
  ebsEncryption?: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling?: number;
  dataPlaneRouting?: string;
  createPublicIP?: boolean;
  stagingAreaTags?: Record<string, string>;
  pitPolicy?: Array<PITPolicyRule>;
  autoReplicateNewDisks?: boolean;
}
export type ReplicationConfigurationDataPlaneRouting = string;

export type ReplicationConfigurationDefaultLargeStagingDiskType = string;

export type ReplicationConfigurationEbsEncryption = string;

export interface ReplicationConfigurationReplicatedDisk {
  deviceName?: string;
  isBootDisk?: boolean;
  stagingDiskType?: string;
  iops?: number;
  throughput?: number;
  optimizedStagingDiskType?: string;
}
export type ReplicationConfigurationReplicatedDisks =
  Array<ReplicationConfigurationReplicatedDisk>;
export type ReplicationConfigurationReplicatedDiskStagingDiskType = string;

export interface ReplicationConfigurationTemplate {
  replicationConfigurationTemplateID: string;
  arn?: string;
  stagingAreaSubnetId?: string;
  associateDefaultSecurityGroup?: boolean;
  replicationServersSecurityGroupsIDs?: Array<string>;
  replicationServerInstanceType?: string;
  useDedicatedReplicationServer?: boolean;
  defaultLargeStagingDiskType?: string;
  ebsEncryption?: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling?: number;
  dataPlaneRouting?: string;
  createPublicIP?: boolean;
  stagingAreaTags?: Record<string, string>;
  tags?: Record<string, string>;
  pitPolicy?: Array<PITPolicyRule>;
  autoReplicateNewDisks?: boolean;
}
export type ReplicationConfigurationTemplateID = string;

export type ReplicationConfigurationTemplateIDs = Array<string>;
export type ReplicationConfigurationTemplates =
  Array<ReplicationConfigurationTemplate>;
export type ReplicationDirection = string;

export type ReplicationServersSecurityGroupsIDs = Array<string>;
export type ReplicationStatus = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly code?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export interface RetryDataReplicationRequest {
  sourceServerID: string;
}
export interface ReverseReplicationRequest {
  recoveryInstanceID: string;
}
export interface ReverseReplicationResponse {
  reversedDirectionSourceServerArn?: string;
}
export type SecurityGroupID = string;

export type SensitiveBoundedString = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
  readonly code?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export type SmallBoundedString = string;

export interface SourceCloudProperties {
  originAccountID?: string;
  originRegion?: string;
  originAvailabilityZone?: string;
  sourceOutpostArn?: string;
}
export interface SourceNetwork {
  sourceNetworkID?: string;
  sourceVpcID?: string;
  arn?: string;
  tags?: Record<string, string>;
  replicationStatus?: string;
  replicationStatusDetails?: string;
  cfnStackName?: string;
  sourceRegion?: string;
  sourceAccountID?: string;
  lastRecovery?: RecoveryLifeCycle;
  launchedVpcID?: string;
}
export interface SourceNetworkData {
  sourceNetworkID?: string;
  sourceVpc?: string;
  targetVpc?: string;
  stackName?: string;
}
export type SourceNetworkID = string;

export type SourceNetworksList = Array<SourceNetwork>;
export interface SourceProperties {
  lastUpdatedDateTime?: string;
  recommendedInstanceType?: string;
  identificationHints?: IdentificationHints;
  networkInterfaces?: Array<NetworkInterface>;
  disks?: Array<Disk>;
  cpus?: Array<CPU>;
  ramBytes?: number;
  os?: OS;
  supportsNitroInstances?: boolean;
}
export interface SourceServer {
  sourceServerID?: string;
  arn?: string;
  tags?: Record<string, string>;
  recoveryInstanceId?: string;
  lastLaunchResult?: string;
  dataReplicationInfo?: DataReplicationInfo;
  lifeCycle?: LifeCycle;
  sourceProperties?: SourceProperties;
  stagingArea?: StagingArea;
  sourceCloudProperties?: SourceCloudProperties;
  replicationDirection?: string;
  reversedDirectionSourceServerArn?: string;
  sourceNetworkID?: string;
  agentVersion?: string;
}
export type SourceServerARN = string;

export type SourceServerID = string;

export type SourceServerIDs = Array<string>;
export type SourceServersList = Array<SourceServer>;
export type SsmDocumentName = string;

export interface StagingArea {
  status?: string;
  stagingAccountID?: string;
  stagingSourceServerArn?: string;
  errorMessage?: string;
}
export interface StagingSourceServer {
  hostname?: string;
  arn?: string;
  tags?: Record<string, string>;
}
export type StagingSourceServersList = Array<StagingSourceServer>;
export interface StartFailbackLaunchRequest {
  recoveryInstanceIDs: Array<string>;
  tags?: Record<string, string>;
}
export interface StartFailbackLaunchResponse {
  job?: Job;
}
export type StartFailbackRequestRecoveryInstanceIDs = Array<string>;
export interface StartRecoveryRequest {
  sourceServers: Array<StartRecoveryRequestSourceServer>;
  isDrill?: boolean;
  tags?: Record<string, string>;
}
export interface StartRecoveryRequestSourceServer {
  sourceServerID: string;
  recoverySnapshotID?: string;
}
export type StartRecoveryRequestSourceServers =
  Array<StartRecoveryRequestSourceServer>;
export interface StartRecoveryResponse {
  job?: Job;
}
export interface StartReplicationRequest {
  sourceServerID: string;
}
export interface StartReplicationResponse {
  sourceServer?: SourceServer;
}
export interface StartSourceNetworkRecoveryRequest {
  sourceNetworks: Array<StartSourceNetworkRecoveryRequestNetworkEntry>;
  deployAsNew?: boolean;
  tags?: Record<string, string>;
}
export type StartSourceNetworkRecoveryRequestNetworkEntries =
  Array<StartSourceNetworkRecoveryRequestNetworkEntry>;
export interface StartSourceNetworkRecoveryRequestNetworkEntry {
  sourceNetworkID: string;
  cfnStackName?: string;
}
export interface StartSourceNetworkRecoveryResponse {
  job?: Job;
}
export interface StartSourceNetworkReplicationRequest {
  sourceNetworkID: string;
}
export interface StartSourceNetworkReplicationResponse {
  sourceNetwork?: SourceNetwork;
}
export interface StopFailbackRequest {
  recoveryInstanceID: string;
}
export interface StopReplicationRequest {
  sourceServerID: string;
}
export interface StopReplicationResponse {
  sourceServer?: SourceServer;
}
export interface StopSourceNetworkReplicationRequest {
  sourceNetworkID: string;
}
export interface StopSourceNetworkReplicationResponse {
  sourceNetwork?: SourceNetwork;
}
export type StrictlyPositiveInteger = number;

export type SubnetID = string;

export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export type TagsMap = Record<string, string>;
export type TagValue = string;

export type TargetInstanceTypeRightSizingMethod = string;

export interface TerminateRecoveryInstancesRequest {
  recoveryInstanceIDs: Array<string>;
}
export interface TerminateRecoveryInstancesResponse {
  job?: Job;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: string;
}> {}
export declare class UninitializedAccountException extends EffectData.TaggedError(
  "UninitializedAccountException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UpdateFailbackReplicationConfigurationRequest {
  recoveryInstanceID: string;
  name?: string;
  bandwidthThrottling?: number;
  usePrivateIP?: boolean;
}
export interface UpdateLaunchConfigurationRequest {
  sourceServerID: string;
  name?: string;
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  postLaunchEnabled?: boolean;
  launchIntoInstanceProperties?: LaunchIntoInstanceProperties;
}
export interface UpdateLaunchConfigurationTemplateRequest {
  launchConfigurationTemplateID: string;
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  exportBucketArn?: string;
  postLaunchEnabled?: boolean;
  launchIntoSourceInstance?: boolean;
}
export interface UpdateLaunchConfigurationTemplateResponse {
  launchConfigurationTemplate?: LaunchConfigurationTemplate;
}
export interface UpdateReplicationConfigurationRequest {
  sourceServerID: string;
  name?: string;
  stagingAreaSubnetId?: string;
  associateDefaultSecurityGroup?: boolean;
  replicationServersSecurityGroupsIDs?: Array<string>;
  replicationServerInstanceType?: string;
  useDedicatedReplicationServer?: boolean;
  defaultLargeStagingDiskType?: string;
  replicatedDisks?: Array<ReplicationConfigurationReplicatedDisk>;
  ebsEncryption?: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling?: number;
  dataPlaneRouting?: string;
  createPublicIP?: boolean;
  stagingAreaTags?: Record<string, string>;
  pitPolicy?: Array<PITPolicyRule>;
  autoReplicateNewDisks?: boolean;
}
export interface UpdateReplicationConfigurationTemplateRequest {
  replicationConfigurationTemplateID: string;
  arn?: string;
  stagingAreaSubnetId?: string;
  associateDefaultSecurityGroup?: boolean;
  replicationServersSecurityGroupsIDs?: Array<string>;
  replicationServerInstanceType?: string;
  useDedicatedReplicationServer?: boolean;
  defaultLargeStagingDiskType?: string;
  ebsEncryption?: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling?: number;
  dataPlaneRouting?: string;
  createPublicIP?: boolean;
  stagingAreaTags?: Record<string, string>;
  pitPolicy?: Array<PITPolicyRule>;
  autoReplicateNewDisks?: boolean;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly code?: string;
  readonly reason?: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name?: string;
  message?: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type VolumeStatus = string;

export type VolumeToConversionMap = Record<string, Record<string, string>>;
export type VolumeToProductCodes = Record<string, Array<ProductCode>>;
export type VolumeToSizeMap = Record<string, number>;
export type VpcID = string;

export declare namespace CreateExtendedSourceServer {
  export type Input = CreateExtendedSourceServerRequest;
  export type Output = CreateExtendedSourceServerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLaunchAction {
  export type Input = DeleteLaunchActionRequest;
  export type Output = DeleteLaunchActionResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace InitializeService {
  export type Input = InitializeServiceRequest;
  export type Output = InitializeServiceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExtensibleSourceServers {
  export type Input = ListExtensibleSourceServersRequest;
  export type Output = ListExtensibleSourceServersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLaunchActions {
  export type Input = ListLaunchActionsRequest;
  export type Output = ListLaunchActionsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace ListStagingAccounts {
  export type Input = ListStagingAccountsRequest;
  export type Output = ListStagingAccountsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutLaunchAction {
  export type Input = PutLaunchActionRequest;
  export type Output = PutLaunchActionResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateSourceNetworkStack {
  export type Input = AssociateSourceNetworkStackRequest;
  export type Output = AssociateSourceNetworkStackResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLaunchConfigurationTemplate {
  export type Input = CreateLaunchConfigurationTemplateRequest;
  export type Output = CreateLaunchConfigurationTemplateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateReplicationConfigurationTemplate {
  export type Input = CreateReplicationConfigurationTemplateRequest;
  export type Output = ReplicationConfigurationTemplate;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSourceNetwork {
  export type Input = CreateSourceNetworkRequest;
  export type Output = CreateSourceNetworkResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteJob {
  export type Input = DeleteJobRequest;
  export type Output = DeleteJobResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DeleteLaunchConfigurationTemplate {
  export type Input = DeleteLaunchConfigurationTemplateRequest;
  export type Output = DeleteLaunchConfigurationTemplateResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DeleteRecoveryInstance {
  export type Input = DeleteRecoveryInstanceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DeleteReplicationConfigurationTemplate {
  export type Input = DeleteReplicationConfigurationTemplateRequest;
  export type Output = DeleteReplicationConfigurationTemplateResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DeleteSourceNetwork {
  export type Input = DeleteSourceNetworkRequest;
  export type Output = DeleteSourceNetworkResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DeleteSourceServer {
  export type Input = DeleteSourceServerRequest;
  export type Output = DeleteSourceServerResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DescribeJobLogItems {
  export type Input = DescribeJobLogItemsRequest;
  export type Output = DescribeJobLogItemsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeJobs {
  export type Input = DescribeJobsRequest;
  export type Output = DescribeJobsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeLaunchConfigurationTemplates {
  export type Input = DescribeLaunchConfigurationTemplatesRequest;
  export type Output = DescribeLaunchConfigurationTemplatesResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRecoveryInstances {
  export type Input = DescribeRecoveryInstancesRequest;
  export type Output = DescribeRecoveryInstancesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DescribeRecoverySnapshots {
  export type Input = DescribeRecoverySnapshotsRequest;
  export type Output = DescribeRecoverySnapshotsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeReplicationConfigurationTemplates {
  export type Input = DescribeReplicationConfigurationTemplatesRequest;
  export type Output = DescribeReplicationConfigurationTemplatesResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSourceNetworks {
  export type Input = DescribeSourceNetworksRequest;
  export type Output = DescribeSourceNetworksResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSourceServers {
  export type Input = DescribeSourceServersRequest;
  export type Output = DescribeSourceServersResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisconnectRecoveryInstance {
  export type Input = DisconnectRecoveryInstanceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DisconnectSourceServer {
  export type Input = DisconnectSourceServerRequest;
  export type Output = SourceServer;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace ExportSourceNetworkCfnTemplate {
  export type Input = ExportSourceNetworkCfnTemplateRequest;
  export type Output = ExportSourceNetworkCfnTemplateResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFailbackReplicationConfiguration {
  export type Input = GetFailbackReplicationConfigurationRequest;
  export type Output = GetFailbackReplicationConfigurationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace GetLaunchConfiguration {
  export type Input = GetLaunchConfigurationRequest;
  export type Output = LaunchConfiguration;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace GetReplicationConfiguration {
  export type Input = GetReplicationConfigurationRequest;
  export type Output = ReplicationConfiguration;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace RetryDataReplication {
  export type Input = RetryDataReplicationRequest;
  export type Output = SourceServer;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ReverseReplication {
  export type Input = ReverseReplicationRequest;
  export type Output = ReverseReplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartFailbackLaunch {
  export type Input = StartFailbackLaunchRequest;
  export type Output = StartFailbackLaunchResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartRecovery {
  export type Input = StartRecoveryRequest;
  export type Output = StartRecoveryResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace StartReplication {
  export type Input = StartReplicationRequest;
  export type Output = StartReplicationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace StartSourceNetworkRecovery {
  export type Input = StartSourceNetworkRecoveryRequest;
  export type Output = StartSourceNetworkRecoveryResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartSourceNetworkReplication {
  export type Input = StartSourceNetworkReplicationRequest;
  export type Output = StartSourceNetworkReplicationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace StopFailback {
  export type Input = StopFailbackRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace StopReplication {
  export type Input = StopReplicationRequest;
  export type Output = StopReplicationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace StopSourceNetworkReplication {
  export type Input = StopSourceNetworkReplicationRequest;
  export type Output = StopSourceNetworkReplicationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TerminateRecoveryInstances {
  export type Input = TerminateRecoveryInstancesRequest;
  export type Output = TerminateRecoveryInstancesResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace UpdateFailbackReplicationConfiguration {
  export type Input = UpdateFailbackReplicationConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace UpdateLaunchConfiguration {
  export type Input = UpdateLaunchConfigurationRequest;
  export type Output = LaunchConfiguration;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLaunchConfigurationTemplate {
  export type Input = UpdateLaunchConfigurationTemplateRequest;
  export type Output = UpdateLaunchConfigurationTemplateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateReplicationConfiguration {
  export type Input = UpdateReplicationConfigurationRequest;
  export type Output = ReplicationConfiguration;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateReplicationConfigurationTemplate {
  export type Input = UpdateReplicationConfigurationTemplateRequest;
  export type Output = ReplicationConfigurationTemplate;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

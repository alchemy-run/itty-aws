import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
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
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class NetworkFlowMonitor extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createMonitor(
    input: CreateMonitorInput,
  ): Effect.Effect<
    CreateMonitorOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createScope(
    input: CreateScopeInput,
  ): Effect.Effect<
    CreateScopeOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteMonitor(
    input: DeleteMonitorInput,
  ): Effect.Effect<
    DeleteMonitorOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteScope(
    input: DeleteScopeInput,
  ): Effect.Effect<
    DeleteScopeOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMonitor(
    input: GetMonitorInput,
  ): Effect.Effect<
    GetMonitorOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQueryResultsMonitorTopContributors(
    input: GetQueryResultsMonitorTopContributorsInput,
  ): Effect.Effect<
    GetQueryResultsMonitorTopContributorsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQueryResultsWorkloadInsightsTopContributors(
    input: GetQueryResultsWorkloadInsightsTopContributorsInput,
  ): Effect.Effect<
    GetQueryResultsWorkloadInsightsTopContributorsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQueryResultsWorkloadInsightsTopContributorsData(
    input: GetQueryResultsWorkloadInsightsTopContributorsDataInput,
  ): Effect.Effect<
    GetQueryResultsWorkloadInsightsTopContributorsDataOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQueryStatusMonitorTopContributors(
    input: GetQueryStatusMonitorTopContributorsInput,
  ): Effect.Effect<
    GetQueryStatusMonitorTopContributorsOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQueryStatusWorkloadInsightsTopContributors(
    input: GetQueryStatusWorkloadInsightsTopContributorsInput,
  ): Effect.Effect<
    GetQueryStatusWorkloadInsightsTopContributorsOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQueryStatusWorkloadInsightsTopContributorsData(
    input: GetQueryStatusWorkloadInsightsTopContributorsDataInput,
  ): Effect.Effect<
    GetQueryStatusWorkloadInsightsTopContributorsDataOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getScope(
    input: GetScopeInput,
  ): Effect.Effect<
    GetScopeOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMonitors(
    input: ListMonitorsInput,
  ): Effect.Effect<
    ListMonitorsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listScopes(
    input: ListScopesInput,
  ): Effect.Effect<
    ListScopesOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startQueryMonitorTopContributors(
    input: StartQueryMonitorTopContributorsInput,
  ): Effect.Effect<
    StartQueryMonitorTopContributorsOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startQueryWorkloadInsightsTopContributors(
    input: StartQueryWorkloadInsightsTopContributorsInput,
  ): Effect.Effect<
    StartQueryWorkloadInsightsTopContributorsOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startQueryWorkloadInsightsTopContributorsData(
    input: StartQueryWorkloadInsightsTopContributorsDataInput,
  ): Effect.Effect<
    StartQueryWorkloadInsightsTopContributorsDataOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopQueryMonitorTopContributors(
    input: StopQueryMonitorTopContributorsInput,
  ): Effect.Effect<
    StopQueryMonitorTopContributorsOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopQueryWorkloadInsightsTopContributors(
    input: StopQueryWorkloadInsightsTopContributorsInput,
  ): Effect.Effect<
    StopQueryWorkloadInsightsTopContributorsOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopQueryWorkloadInsightsTopContributorsData(
    input: StopQueryWorkloadInsightsTopContributorsDataInput,
  ): Effect.Effect<
    StopQueryWorkloadInsightsTopContributorsDataOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateMonitor(
    input: UpdateMonitorInput,
  ): Effect.Effect<
    UpdateMonitorOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateScope(
    input: UpdateScopeInput,
  ): Effect.Effect<
    UpdateScopeOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Networkflowmonitor extends NetworkFlowMonitor {}

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AccountId = string;

export type Arn = string;

export type AvailabilityZone = string;

export type AwsRegion = string;

export type Component = string;

export type ComponentType = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateMonitorInput {
  monitorName: string;
  localResources: Array<MonitorLocalResource>;
  remoteResources?: Array<MonitorRemoteResource>;
  scopeArn: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateMonitorOutput {
  monitorArn: string;
  monitorName: string;
  monitorStatus: MonitorStatus;
  localResources: Array<MonitorLocalResource>;
  remoteResources: Array<MonitorRemoteResource>;
  createdAt: Date | string;
  modifiedAt: Date | string;
  tags?: Record<string, string>;
}
export interface CreateScopeInput {
  targets: Array<TargetResource>;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateScopeOutput {
  scopeId: string;
  status: ScopeStatus;
  scopeArn: string;
  tags?: Record<string, string>;
}
export interface DeleteMonitorInput {
  monitorName: string;
}
export interface DeleteMonitorOutput {}
export interface DeleteScopeInput {
  scopeId: string;
}
export interface DeleteScopeOutput {}
export type DestinationCategory =
  | "INTRA_AZ"
  | "INTER_AZ"
  | "INTER_VPC"
  | "UNCLASSIFIED"
  | "AMAZON_S3"
  | "AMAZON_DYNAMODB"
  | "INTER_REGION";
export interface GetMonitorInput {
  monitorName: string;
}
export interface GetMonitorOutput {
  monitorArn: string;
  monitorName: string;
  monitorStatus: MonitorStatus;
  localResources: Array<MonitorLocalResource>;
  remoteResources: Array<MonitorRemoteResource>;
  createdAt: Date | string;
  modifiedAt: Date | string;
  tags?: Record<string, string>;
}
export interface GetQueryResultsMonitorTopContributorsInput {
  monitorName: string;
  queryId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetQueryResultsMonitorTopContributorsOutput {
  unit?: MetricUnit;
  topContributors?: Array<MonitorTopContributorsRow>;
  nextToken?: string;
}
export interface GetQueryResultsWorkloadInsightsTopContributorsDataInput {
  scopeId: string;
  queryId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetQueryResultsWorkloadInsightsTopContributorsDataOutput {
  unit: MetricUnit;
  datapoints: Array<WorkloadInsightsTopContributorsDataPoint>;
  nextToken?: string;
}
export interface GetQueryResultsWorkloadInsightsTopContributorsInput {
  scopeId: string;
  queryId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetQueryResultsWorkloadInsightsTopContributorsOutput {
  topContributors?: Array<WorkloadInsightsTopContributorsRow>;
  nextToken?: string;
}
export interface GetQueryStatusMonitorTopContributorsInput {
  monitorName: string;
  queryId: string;
}
export interface GetQueryStatusMonitorTopContributorsOutput {
  status: QueryStatus;
}
export interface GetQueryStatusWorkloadInsightsTopContributorsDataInput {
  scopeId: string;
  queryId: string;
}
export interface GetQueryStatusWorkloadInsightsTopContributorsDataOutput {
  status: QueryStatus;
}
export interface GetQueryStatusWorkloadInsightsTopContributorsInput {
  scopeId: string;
  queryId: string;
}
export interface GetQueryStatusWorkloadInsightsTopContributorsOutput {
  status: QueryStatus;
}
export interface GetScopeInput {
  scopeId: string;
}
export interface GetScopeOutput {
  scopeId: string;
  status: ScopeStatus;
  scopeArn: string;
  targets: Array<TargetResource>;
  tags?: Record<string, string>;
}
export type InstanceArn = string;

export type InstanceId = string;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type Iso8601Timestamp = Date | string;

export interface KubernetesMetadata {
  localServiceName?: string;
  localPodName?: string;
  localPodNamespace?: string;
  remoteServiceName?: string;
  remotePodName?: string;
  remotePodNamespace?: string;
}
export type Limit = number;

export interface ListMonitorsInput {
  nextToken?: string;
  maxResults?: number;
  monitorStatus?: MonitorStatus;
}
export interface ListMonitorsOutput {
  monitors: Array<MonitorSummary>;
  nextToken?: string;
}
export interface ListScopesInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListScopesOutput {
  scopes: Array<ScopeSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: Record<string, string>;
}
export type MaxResults = number;

export type MetricUnit =
  | "Seconds"
  | "Microseconds"
  | "Milliseconds"
  | "Bytes"
  | "Kilobytes"
  | "Megabytes"
  | "Gigabytes"
  | "Terabytes"
  | "Bits"
  | "Kilobits"
  | "Megabits"
  | "Gigabits"
  | "Terabits"
  | "Percent"
  | "Count"
  | "Bytes/Second"
  | "Kilobytes/Second"
  | "Megabytes/Second"
  | "Gigabytes/Second"
  | "Terabytes/Second"
  | "Bits/Second"
  | "Kilobits/Second"
  | "Megabits/Second"
  | "Gigabits/Second"
  | "Terabits/Second"
  | "Count/Second"
  | "None";
export type MonitorArn = string;

export type MonitorList = Array<MonitorSummary>;
export interface MonitorLocalResource {
  type: MonitorLocalResourceType;
  identifier: string;
}
export type MonitorLocalResources = Array<MonitorLocalResource>;
export type MonitorLocalResourceType =
  | "AWS::EC2::VPC"
  | "AWS::AvailabilityZone"
  | "AWS::EC2::Subnet"
  | "AWS::Region";
export type MonitorMetric =
  | "ROUND_TRIP_TIME"
  | "TIMEOUTS"
  | "RETRANSMISSIONS"
  | "DATA_TRANSFERRED";
export interface MonitorRemoteResource {
  type: MonitorRemoteResourceType;
  identifier: string;
}
export type MonitorRemoteResources = Array<MonitorRemoteResource>;
export type MonitorRemoteResourceType =
  | "AWS::EC2::VPC"
  | "AWS::AvailabilityZone"
  | "AWS::EC2::Subnet"
  | "AWS::AWSService"
  | "AWS::Region";
export type MonitorStatus =
  | "PENDING"
  | "ACTIVE"
  | "INACTIVE"
  | "ERROR"
  | "DELETING";
export interface MonitorSummary {
  monitorArn: string;
  monitorName: string;
  monitorStatus: MonitorStatus;
}
export interface MonitorTopContributorsRow {
  localIp?: string;
  snatIp?: string;
  localInstanceId?: string;
  localVpcId?: string;
  localRegion?: string;
  localAz?: string;
  localSubnetId?: string;
  targetPort?: number;
  destinationCategory?: DestinationCategory;
  remoteVpcId?: string;
  remoteRegion?: string;
  remoteAz?: string;
  remoteSubnetId?: string;
  remoteInstanceId?: string;
  remoteIp?: string;
  dnatIp?: string;
  value?: number;
  traversedConstructs?: Array<TraversedComponent>;
  kubernetesMetadata?: KubernetesMetadata;
  localInstanceArn?: string;
  localSubnetArn?: string;
  localVpcArn?: string;
  remoteInstanceArn?: string;
  remoteSubnetArn?: string;
  remoteVpcArn?: string;
}
export type MonitorTopContributorsRowList = Array<MonitorTopContributorsRow>;
export type QueryStatus =
  | "QUEUED"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELED";
export type ResourceName = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ScopeId = string;

export type ScopeStatus =
  | "SUCCEEDED"
  | "IN_PROGRESS"
  | "FAILED"
  | "DEACTIVATING"
  | "DEACTIVATED";
export interface ScopeSummary {
  scopeId: string;
  status: ScopeStatus;
  scopeArn: string;
}
export type ScopeSummaryList = Array<ScopeSummary>;
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface StartQueryMonitorTopContributorsInput {
  monitorName: string;
  startTime: Date | string;
  endTime: Date | string;
  metricName: MonitorMetric;
  destinationCategory: DestinationCategory;
  limit?: number;
}
export interface StartQueryMonitorTopContributorsOutput {
  queryId: string;
}
export interface StartQueryWorkloadInsightsTopContributorsDataInput {
  scopeId: string;
  startTime: Date | string;
  endTime: Date | string;
  metricName: WorkloadInsightsMetric;
  destinationCategory: DestinationCategory;
}
export interface StartQueryWorkloadInsightsTopContributorsDataOutput {
  queryId: string;
}
export interface StartQueryWorkloadInsightsTopContributorsInput {
  scopeId: string;
  startTime: Date | string;
  endTime: Date | string;
  metricName: WorkloadInsightsMetric;
  destinationCategory: DestinationCategory;
  limit?: number;
}
export interface StartQueryWorkloadInsightsTopContributorsOutput {
  queryId: string;
}
export interface StopQueryMonitorTopContributorsInput {
  monitorName: string;
  queryId: string;
}
export interface StopQueryMonitorTopContributorsOutput {}
export interface StopQueryWorkloadInsightsTopContributorsDataInput {
  scopeId: string;
  queryId: string;
}
export interface StopQueryWorkloadInsightsTopContributorsDataOutput {}
export interface StopQueryWorkloadInsightsTopContributorsInput {
  scopeId: string;
  queryId: string;
}
export interface StopQueryWorkloadInsightsTopContributorsOutput {}
export type SubnetArn = string;

export type SubnetId = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceOutput {}
export type TagValue = string;

interface _TargetId {
  accountId?: string;
}

export type TargetId = _TargetId & { accountId: string };
export interface TargetIdentifier {
  targetId: TargetId;
  targetType: TargetType;
}
export interface TargetResource {
  targetIdentifier: TargetIdentifier;
  region: string;
}
export type TargetResourceList = Array<TargetResource>;
export type TargetType = "ACCOUNT";
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface TraversedComponent {
  componentId?: string;
  componentType?: string;
  componentArn?: string;
  serviceName?: string;
}
export type TraversedConstructsList = Array<TraversedComponent>;
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateMonitorInput {
  monitorName: string;
  localResourcesToAdd?: Array<MonitorLocalResource>;
  localResourcesToRemove?: Array<MonitorLocalResource>;
  remoteResourcesToAdd?: Array<MonitorRemoteResource>;
  remoteResourcesToRemove?: Array<MonitorRemoteResource>;
  clientToken?: string;
}
export interface UpdateMonitorOutput {
  monitorArn: string;
  monitorName: string;
  monitorStatus: MonitorStatus;
  localResources: Array<MonitorLocalResource>;
  remoteResources: Array<MonitorRemoteResource>;
  createdAt: Date | string;
  modifiedAt: Date | string;
  tags?: Record<string, string>;
}
export interface UpdateScopeInput {
  scopeId: string;
  resourcesToAdd?: Array<TargetResource>;
  resourcesToDelete?: Array<TargetResource>;
}
export interface UpdateScopeOutput {
  scopeId: string;
  status: ScopeStatus;
  scopeArn: string;
  tags?: Record<string, string>;
}
export type UuidString = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type VpcArn = string;

export type VpcId = string;

export type WorkloadInsightsMetric =
  | "TIMEOUTS"
  | "RETRANSMISSIONS"
  | "DATA_TRANSFERRED";
export interface WorkloadInsightsTopContributorsDataPoint {
  timestamps: Array<Date | string>;
  values: Array<number>;
  label: string;
}
export type WorkloadInsightsTopContributorsDataPoints =
  Array<WorkloadInsightsTopContributorsDataPoint>;
export interface WorkloadInsightsTopContributorsRow {
  accountId?: string;
  localSubnetId?: string;
  localAz?: string;
  localVpcId?: string;
  localRegion?: string;
  remoteIdentifier?: string;
  value?: number;
  localSubnetArn?: string;
  localVpcArn?: string;
}
export type WorkloadInsightsTopContributorsRowList =
  Array<WorkloadInsightsTopContributorsRow>;
export type WorkloadInsightsTopContributorsTimestampsList = Array<
  Date | string
>;
export type WorkloadInsightsTopContributorsValuesList = Array<number>;
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateMonitor {
  export type Input = CreateMonitorInput;
  export type Output = CreateMonitorOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateScope {
  export type Input = CreateScopeInput;
  export type Output = CreateScopeOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMonitor {
  export type Input = DeleteMonitorInput;
  export type Output = DeleteMonitorOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteScope {
  export type Input = DeleteScopeInput;
  export type Output = DeleteScopeOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMonitor {
  export type Input = GetMonitorInput;
  export type Output = GetMonitorOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQueryResultsMonitorTopContributors {
  export type Input = GetQueryResultsMonitorTopContributorsInput;
  export type Output = GetQueryResultsMonitorTopContributorsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQueryResultsWorkloadInsightsTopContributors {
  export type Input = GetQueryResultsWorkloadInsightsTopContributorsInput;
  export type Output = GetQueryResultsWorkloadInsightsTopContributorsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQueryResultsWorkloadInsightsTopContributorsData {
  export type Input = GetQueryResultsWorkloadInsightsTopContributorsDataInput;
  export type Output = GetQueryResultsWorkloadInsightsTopContributorsDataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQueryStatusMonitorTopContributors {
  export type Input = GetQueryStatusMonitorTopContributorsInput;
  export type Output = GetQueryStatusMonitorTopContributorsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQueryStatusWorkloadInsightsTopContributors {
  export type Input = GetQueryStatusWorkloadInsightsTopContributorsInput;
  export type Output = GetQueryStatusWorkloadInsightsTopContributorsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQueryStatusWorkloadInsightsTopContributorsData {
  export type Input = GetQueryStatusWorkloadInsightsTopContributorsDataInput;
  export type Output = GetQueryStatusWorkloadInsightsTopContributorsDataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetScope {
  export type Input = GetScopeInput;
  export type Output = GetScopeOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMonitors {
  export type Input = ListMonitorsInput;
  export type Output = ListMonitorsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListScopes {
  export type Input = ListScopesInput;
  export type Output = ListScopesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartQueryMonitorTopContributors {
  export type Input = StartQueryMonitorTopContributorsInput;
  export type Output = StartQueryMonitorTopContributorsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartQueryWorkloadInsightsTopContributors {
  export type Input = StartQueryWorkloadInsightsTopContributorsInput;
  export type Output = StartQueryWorkloadInsightsTopContributorsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartQueryWorkloadInsightsTopContributorsData {
  export type Input = StartQueryWorkloadInsightsTopContributorsDataInput;
  export type Output = StartQueryWorkloadInsightsTopContributorsDataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopQueryMonitorTopContributors {
  export type Input = StopQueryMonitorTopContributorsInput;
  export type Output = StopQueryMonitorTopContributorsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopQueryWorkloadInsightsTopContributors {
  export type Input = StopQueryWorkloadInsightsTopContributorsInput;
  export type Output = StopQueryWorkloadInsightsTopContributorsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopQueryWorkloadInsightsTopContributorsData {
  export type Input = StopQueryWorkloadInsightsTopContributorsDataInput;
  export type Output = StopQueryWorkloadInsightsTopContributorsDataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMonitor {
  export type Input = UpdateMonitorInput;
  export type Output = UpdateMonitorOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateScope {
  export type Input = UpdateScopeInput;
  export type Output = UpdateScopeOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type NetworkFlowMonitorErrors =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;

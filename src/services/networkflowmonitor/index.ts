import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
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
}

export declare class Networkflowmonitor extends NetworkFlowMonitor {}

export declare class AccessDeniedException extends EffectData.TaggedError(
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

export declare class ConflictException extends EffectData.TaggedError(
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
  | "AMAZON_DYNAMODB";
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

export declare class InternalServerException extends EffectData.TaggedError(
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
  | "SECONDS"
  | "MICROSECONDS"
  | "MILLISECONDS"
  | "BYTES"
  | "KILOBYTES"
  | "MEGABYTES"
  | "GIGABYTES"
  | "TERABYTES"
  | "BITS"
  | "KILOBITS"
  | "MEGABITS"
  | "GIGABITS"
  | "TERABITS"
  | "PERCENT"
  | "COUNT"
  | "BYTES_PER_SECOND"
  | "KILOBYTES_PER_SECOND"
  | "MEGABYTES_PER_SECOND"
  | "GIGABYTES_PER_SECOND"
  | "TERABYTES_PER_SECOND"
  | "BITS_PER_SECOND"
  | "KILOBITS_PER_SECOND"
  | "MEGABITS_PER_SECOND"
  | "GIGABITS_PER_SECOND"
  | "TERABITS_PER_SECOND"
  | "COUNT_PER_SECOND"
  | "NONE";
export type MonitorArn = string;

export type MonitorList = Array<MonitorSummary>;
export interface MonitorLocalResource {
  type: MonitorLocalResourceType;
  identifier: string;
}
export type MonitorLocalResources = Array<MonitorLocalResource>;
export type MonitorLocalResourceType = "AWS_VPC" | "AWS_AZ" | "AWS_SUBNET";
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
  | "AWS_VPC"
  | "AWS_AZ"
  | "AWS_SUBNET"
  | "AWS_SERVICE";
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

export declare class ResourceNotFoundException extends EffectData.TaggedError(
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
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
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
export declare class ThrottlingException extends EffectData.TaggedError(
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

export declare class ValidationException extends EffectData.TaggedError(
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

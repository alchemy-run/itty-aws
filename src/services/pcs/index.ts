import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class PCS extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ServiceQuotaExceededException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<{}, ResourceNotFoundException | CommonAwsError>;
}

export declare class Pcs extends PCS {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface Accounting {
  mode: AccountingMode;
  defaultPurgeTimeInDays?: number;
}
export type AccountingMode = "STANDARD" | "NONE";
export interface AccountingRequest {
  mode: AccountingMode;
  defaultPurgeTimeInDays?: number;
}
export type AmiId = string;

export type Arn = string;

export type BootstrapId = string;

export interface Cluster {
  name: string;
  id: string;
  arn: string;
  status: ClusterStatus;
  createdAt: Date | string;
  modifiedAt: Date | string;
  scheduler: Scheduler;
  size: Size;
  slurmConfiguration?: ClusterSlurmConfiguration;
  networking: Networking;
  endpoints?: Array<Endpoint>;
  errorInfo?: Array<ErrorInfo>;
}
export type ClusterIdentifier = string;

export type ClusterList = Array<ClusterSummary>;
export type ClusterName = string;

export interface ClusterSlurmConfiguration {
  scaleDownIdleTimeInSeconds?: number;
  slurmCustomSettings?: Array<SlurmCustomSetting>;
  authKey?: SlurmAuthKey;
  accounting?: Accounting;
}
export interface ClusterSlurmConfigurationRequest {
  scaleDownIdleTimeInSeconds?: number;
  slurmCustomSettings?: Array<SlurmCustomSetting>;
  accounting?: AccountingRequest;
}
export type ClusterStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | "UPDATE_FAILED"
  | "SUSPENDING"
  | "SUSPENDED";
export interface ClusterSummary {
  name: string;
  id: string;
  arn: string;
  createdAt: Date | string;
  modifiedAt: Date | string;
  status: ClusterStatus;
}
export interface ComputeNodeGroup {
  name: string;
  id: string;
  arn: string;
  clusterId: string;
  createdAt: Date | string;
  modifiedAt: Date | string;
  status: ComputeNodeGroupStatus;
  amiId?: string;
  subnetIds: Array<string>;
  purchaseOption?: PurchaseOption;
  customLaunchTemplate: CustomLaunchTemplate;
  iamInstanceProfileArn: string;
  scalingConfiguration: ScalingConfiguration;
  instanceConfigs: Array<InstanceConfig>;
  spotOptions?: SpotOptions;
  slurmConfiguration?: ComputeNodeGroupSlurmConfiguration;
  errorInfo?: Array<ErrorInfo>;
}
export interface ComputeNodeGroupConfiguration {
  computeNodeGroupId?: string;
}
export type ComputeNodeGroupConfigurationList =
  Array<ComputeNodeGroupConfiguration>;
export type ComputeNodeGroupIdentifier = string;

export type ComputeNodeGroupList = Array<ComputeNodeGroupSummary>;
export type ComputeNodeGroupName = string;

export interface ComputeNodeGroupSlurmConfiguration {
  slurmCustomSettings?: Array<SlurmCustomSetting>;
}
export interface ComputeNodeGroupSlurmConfigurationRequest {
  slurmCustomSettings?: Array<SlurmCustomSetting>;
}
export type ComputeNodeGroupStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | "UPDATE_FAILED"
  | "DELETED"
  | "SUSPENDING"
  | "SUSPENDED";
export interface ComputeNodeGroupSummary {
  name: string;
  id: string;
  arn: string;
  clusterId: string;
  createdAt: Date | string;
  modifiedAt: Date | string;
  status: ComputeNodeGroupStatus;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CreateClusterRequest {
  clusterName: string;
  scheduler: SchedulerRequest;
  size: Size;
  networking: NetworkingRequest;
  slurmConfiguration?: ClusterSlurmConfigurationRequest;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateClusterResponse {
  cluster?: Cluster;
}
export interface CreateComputeNodeGroupRequest {
  clusterIdentifier: string;
  computeNodeGroupName: string;
  amiId?: string;
  subnetIds: Array<string>;
  purchaseOption?: PurchaseOption;
  customLaunchTemplate: CustomLaunchTemplate;
  iamInstanceProfileArn: string;
  scalingConfiguration: ScalingConfigurationRequest;
  instanceConfigs: Array<InstanceConfig>;
  spotOptions?: SpotOptions;
  slurmConfiguration?: ComputeNodeGroupSlurmConfigurationRequest;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateComputeNodeGroupResponse {
  computeNodeGroup?: ComputeNodeGroup;
}
export interface CreateQueueRequest {
  clusterIdentifier: string;
  queueName: string;
  computeNodeGroupConfigurations?: Array<ComputeNodeGroupConfiguration>;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateQueueResponse {
  queue?: Queue;
}
export interface CustomLaunchTemplate {
  id: string;
  version: string;
}
export interface DeleteClusterRequest {
  clusterIdentifier: string;
  clientToken?: string;
}
export interface DeleteClusterResponse {}
export interface DeleteComputeNodeGroupRequest {
  clusterIdentifier: string;
  computeNodeGroupIdentifier: string;
  clientToken?: string;
}
export interface DeleteComputeNodeGroupResponse {}
export interface DeleteQueueRequest {
  clusterIdentifier: string;
  queueIdentifier: string;
  clientToken?: string;
}
export interface DeleteQueueResponse {}
export interface Endpoint {
  type: EndpointType;
  privateIpAddress: string;
  publicIpAddress?: string;
  ipv6Address?: string;
  port: string;
}
export type Endpoints = Array<Endpoint>;
export type EndpointType = "SLURMCTLD" | "SLURMDBD";
export interface ErrorInfo {
  code?: string;
  message?: string;
}
export type ErrorInfoList = Array<ErrorInfo>;
export interface GetClusterRequest {
  clusterIdentifier: string;
}
export interface GetClusterResponse {
  cluster?: Cluster;
}
export interface GetComputeNodeGroupRequest {
  clusterIdentifier: string;
  computeNodeGroupIdentifier: string;
}
export interface GetComputeNodeGroupResponse {
  computeNodeGroup?: ComputeNodeGroup;
}
export interface GetQueueRequest {
  clusterIdentifier: string;
  queueIdentifier: string;
}
export interface GetQueueResponse {
  queue?: Queue;
}
export interface InstanceConfig {
  instanceType?: string;
}
export type InstanceList = Array<InstanceConfig>;
export type InstanceProfileArn = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface ListClustersRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListClustersResponse {
  clusters: Array<ClusterSummary>;
  nextToken?: string;
}
export interface ListComputeNodeGroupsRequest {
  clusterIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListComputeNodeGroupsResponse {
  computeNodeGroups: Array<ComputeNodeGroupSummary>;
  nextToken?: string;
}
export interface ListQueuesRequest {
  clusterIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListQueuesResponse {
  queues: Array<QueueSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MaxResults = number;

export interface Networking {
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  networkType?: NetworkType;
}
export interface NetworkingRequest {
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  networkType?: NetworkType;
}
export type NetworkType = "IPV4" | "IPV6";
export type PurchaseOption = "ONDEMAND" | "SPOT";
export interface Queue {
  name: string;
  id: string;
  arn: string;
  clusterId: string;
  createdAt: Date | string;
  modifiedAt: Date | string;
  status: QueueStatus;
  computeNodeGroupConfigurations: Array<ComputeNodeGroupConfiguration>;
  errorInfo?: Array<ErrorInfo>;
}
export type QueueIdentifier = string;

export type QueueList = Array<QueueSummary>;
export type QueueName = string;

export type QueueStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | "UPDATE_FAILED"
  | "SUSPENDING"
  | "SUSPENDED";
export interface QueueSummary {
  name: string;
  id: string;
  arn: string;
  clusterId: string;
  createdAt: Date | string;
  modifiedAt: Date | string;
  status: QueueStatus;
}
export interface RegisterComputeNodeGroupInstanceRequest {
  clusterIdentifier: string;
  bootstrapId: string;
}
export interface RegisterComputeNodeGroupInstanceResponse {
  nodeID: string;
  sharedSecret: string;
  endpoints: Array<Endpoint>;
}
export type RequestTagMap = Record<string, string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ResponseTagMap = Record<string, string>;
export type SBClientToken = string;

export interface ScalingConfiguration {
  minInstanceCount: number;
  maxInstanceCount: number;
}
export interface ScalingConfigurationRequest {
  minInstanceCount: number;
  maxInstanceCount: number;
}
export interface Scheduler {
  type: SchedulerType;
  version: string;
}
export interface SchedulerRequest {
  type: SchedulerType;
  version: string;
}
export type SchedulerType = "SLURM";
export type SecurityGroupId = string;

export type SecurityGroupIdList = Array<string>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly serviceCode: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly quotaCode?: string;
}> {}
export type SharedSecret = string;

export type Size = "SMALL" | "MEDIUM" | "LARGE";
export interface SlurmAuthKey {
  secretArn: string;
  secretVersion: string;
}
export interface SlurmCustomSetting {
  parameterName: string;
  parameterValue: string;
}
export type SlurmCustomSettings = Array<SlurmCustomSetting>;
export type SpotAllocationStrategy =
  | "LOWEST_PRICE"
  | "CAPACITY_OPTIMIZED"
  | "PRICE_CAPACITY_OPTIMIZED";
export interface SpotOptions {
  allocationStrategy?: SpotAllocationStrategy;
}
export type StringList = Array<string>;
export type SubnetId = string;

export type SubnetIdList = Array<string>;
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UpdateComputeNodeGroupRequest {
  clusterIdentifier: string;
  computeNodeGroupIdentifier: string;
  amiId?: string;
  subnetIds?: Array<string>;
  customLaunchTemplate?: CustomLaunchTemplate;
  purchaseOption?: PurchaseOption;
  spotOptions?: SpotOptions;
  scalingConfiguration?: ScalingConfigurationRequest;
  iamInstanceProfileArn?: string;
  slurmConfiguration?: UpdateComputeNodeGroupSlurmConfigurationRequest;
  clientToken?: string;
}
export interface UpdateComputeNodeGroupResponse {
  computeNodeGroup?: ComputeNodeGroup;
}
export interface UpdateComputeNodeGroupSlurmConfigurationRequest {
  slurmCustomSettings?: Array<SlurmCustomSetting>;
}
export interface UpdateQueueRequest {
  clusterIdentifier: string;
  queueIdentifier: string;
  computeNodeGroupConfigurations?: Array<ComputeNodeGroupConfiguration>;
  clientToken?: string;
}
export interface UpdateQueueResponse {
  queue?: Queue;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: ValidationExceptionReason;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER";
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error = ResourceNotFoundException | CommonAwsError;
}

import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class TimestreamInfluxDB extends AWSServiceClient {
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

export declare class TimestreamInfluxdb extends TimestreamInfluxDB {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AllocatedStorage = number;

export type Arn = string;

export type Bucket = string;

export type ClusterDeploymentType = "MULTI_NODE_READ_REPLICAS";
export type ClusterStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "AVAILABLE"
  | "FAILED"
  | "DELETED";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CreateDbClusterInput {
  name: string;
  username?: string;
  password: string;
  organization?: string;
  bucket?: string;
  port?: number;
  dbParameterGroupIdentifier?: string;
  dbInstanceType: DbInstanceType;
  dbStorageType?: DbStorageType;
  allocatedStorage: number;
  networkType?: NetworkType;
  publiclyAccessible?: boolean;
  vpcSubnetIds: Array<string>;
  vpcSecurityGroupIds: Array<string>;
  deploymentType: ClusterDeploymentType;
  failoverMode?: FailoverMode;
  logDeliveryConfiguration?: LogDeliveryConfiguration;
  tags?: Record<string, string>;
}
export interface CreateDbClusterOutput {
  dbClusterId?: string;
  dbClusterStatus?: ClusterStatus;
}
export interface CreateDbInstanceInput {
  name: string;
  username?: string;
  password: string;
  organization?: string;
  bucket?: string;
  dbInstanceType: DbInstanceType;
  vpcSubnetIds: Array<string>;
  vpcSecurityGroupIds: Array<string>;
  publiclyAccessible?: boolean;
  dbStorageType?: DbStorageType;
  allocatedStorage: number;
  dbParameterGroupIdentifier?: string;
  deploymentType?: DeploymentType;
  logDeliveryConfiguration?: LogDeliveryConfiguration;
  tags?: Record<string, string>;
  port?: number;
  networkType?: NetworkType;
}
export interface CreateDbInstanceOutput {
  id: string;
  name: string;
  arn: string;
  status?: Status;
  endpoint?: string;
  port?: number;
  networkType?: NetworkType;
  dbInstanceType?: DbInstanceType;
  dbStorageType?: DbStorageType;
  allocatedStorage?: number;
  deploymentType?: DeploymentType;
  vpcSubnetIds: Array<string>;
  publiclyAccessible?: boolean;
  vpcSecurityGroupIds?: Array<string>;
  dbParameterGroupIdentifier?: string;
  availabilityZone?: string;
  secondaryAvailabilityZone?: string;
  logDeliveryConfiguration?: LogDeliveryConfiguration;
  influxAuthParametersSecretArn?: string;
  dbClusterId?: string;
  instanceMode?: InstanceMode;
}
export interface CreateDbParameterGroupInput {
  name: string;
  description?: string;
  parameters?: Parameters;
  tags?: Record<string, string>;
}
export interface CreateDbParameterGroupOutput {
  id: string;
  name: string;
  arn: string;
  description?: string;
  parameters?: Parameters;
}
export type DbClusterId = string;

export type DbClusterName = string;

export interface DbClusterSummary {
  id: string;
  name: string;
  arn: string;
  status?: ClusterStatus;
  endpoint?: string;
  readerEndpoint?: string;
  port?: number;
  deploymentType?: ClusterDeploymentType;
  dbInstanceType?: DbInstanceType;
  networkType?: NetworkType;
  dbStorageType?: DbStorageType;
  allocatedStorage?: number;
}
export type DbClusterSummaryList = Array<DbClusterSummary>;
export interface DbInstanceForClusterSummary {
  id: string;
  name: string;
  arn: string;
  status?: Status;
  endpoint?: string;
  port?: number;
  networkType?: NetworkType;
  dbInstanceType?: DbInstanceType;
  dbStorageType?: DbStorageType;
  allocatedStorage?: number;
  deploymentType?: DeploymentType;
  instanceMode?: InstanceMode;
}
export type DbInstanceForClusterSummaryList =
  Array<DbInstanceForClusterSummary>;
export type DbInstanceId = string;

export type DbInstanceIdentifier = string;

export type DbInstanceName = string;

export interface DbInstanceSummary {
  id: string;
  name: string;
  arn: string;
  status?: Status;
  endpoint?: string;
  port?: number;
  networkType?: NetworkType;
  dbInstanceType?: DbInstanceType;
  dbStorageType?: DbStorageType;
  allocatedStorage?: number;
  deploymentType?: DeploymentType;
}
export type DbInstanceSummaryList = Array<DbInstanceSummary>;
export type DbInstanceType =
  | "DB_INFLUX_MEDIUM"
  | "DB_INFLUX_LARGE"
  | "DB_INFLUX_XLARGE"
  | "DB_INFLUX_2XLARGE"
  | "DB_INFLUX_4XLARGE"
  | "DB_INFLUX_8XLARGE"
  | "DB_INFLUX_12XLARGE"
  | "DB_INFLUX_16XLARGE"
  | "DB_INFLUX_24XLARGE";
export type DbParameterGroupId = string;

export type DbParameterGroupIdentifier = string;

export type DbParameterGroupName = string;

export interface DbParameterGroupSummary {
  id: string;
  name: string;
  arn: string;
  description?: string;
}
export type DbParameterGroupSummaryList = Array<DbParameterGroupSummary>;
export type DbStorageType =
  | "INFLUX_IO_INCLUDED_T1"
  | "INFLUX_IO_INCLUDED_T2"
  | "INFLUX_IO_INCLUDED_T3";
export interface DeleteDbClusterInput {
  dbClusterId: string;
}
export interface DeleteDbClusterOutput {
  dbClusterStatus?: ClusterStatus;
}
export interface DeleteDbInstanceInput {
  identifier: string;
}
export interface DeleteDbInstanceOutput {
  id: string;
  name: string;
  arn: string;
  status?: Status;
  endpoint?: string;
  port?: number;
  networkType?: NetworkType;
  dbInstanceType?: DbInstanceType;
  dbStorageType?: DbStorageType;
  allocatedStorage?: number;
  deploymentType?: DeploymentType;
  vpcSubnetIds: Array<string>;
  publiclyAccessible?: boolean;
  vpcSecurityGroupIds?: Array<string>;
  dbParameterGroupIdentifier?: string;
  availabilityZone?: string;
  secondaryAvailabilityZone?: string;
  logDeliveryConfiguration?: LogDeliveryConfiguration;
  influxAuthParametersSecretArn?: string;
  dbClusterId?: string;
  instanceMode?: InstanceMode;
}
export type DeploymentType = "SINGLE_AZ" | "WITH_MULTIAZ_STANDBY";
export interface Duration {
  durationType: DurationType;
  value: number;
}
export type DurationType = "HOURS" | "MINUTES" | "SECONDS" | "MILLISECONDS";
export type FailoverMode = "AUTOMATIC" | "NO_FAILOVER";
export interface GetDbClusterInput {
  dbClusterId: string;
}
export interface GetDbClusterOutput {
  id: string;
  name: string;
  arn: string;
  status?: ClusterStatus;
  endpoint?: string;
  readerEndpoint?: string;
  port?: number;
  deploymentType?: ClusterDeploymentType;
  dbInstanceType?: DbInstanceType;
  networkType?: NetworkType;
  dbStorageType?: DbStorageType;
  allocatedStorage?: number;
  publiclyAccessible?: boolean;
  dbParameterGroupIdentifier?: string;
  logDeliveryConfiguration?: LogDeliveryConfiguration;
  influxAuthParametersSecretArn?: string;
  vpcSubnetIds?: Array<string>;
  vpcSecurityGroupIds?: Array<string>;
  failoverMode?: FailoverMode;
}
export interface GetDbInstanceInput {
  identifier: string;
}
export interface GetDbInstanceOutput {
  id: string;
  name: string;
  arn: string;
  status?: Status;
  endpoint?: string;
  port?: number;
  networkType?: NetworkType;
  dbInstanceType?: DbInstanceType;
  dbStorageType?: DbStorageType;
  allocatedStorage?: number;
  deploymentType?: DeploymentType;
  vpcSubnetIds: Array<string>;
  publiclyAccessible?: boolean;
  vpcSecurityGroupIds?: Array<string>;
  dbParameterGroupIdentifier?: string;
  availabilityZone?: string;
  secondaryAvailabilityZone?: string;
  logDeliveryConfiguration?: LogDeliveryConfiguration;
  influxAuthParametersSecretArn?: string;
  dbClusterId?: string;
  instanceMode?: InstanceMode;
}
export interface GetDbParameterGroupInput {
  identifier: string;
}
export interface GetDbParameterGroupOutput {
  id: string;
  name: string;
  arn: string;
  description?: string;
  parameters?: Parameters;
}
export interface InfluxDBv2Parameters {
  fluxLogEnabled?: boolean;
  logLevel?: LogLevel;
  noTasks?: boolean;
  queryConcurrency?: number;
  queryQueueSize?: number;
  tracingType?: TracingType;
  metricsDisabled?: boolean;
  httpIdleTimeout?: Duration;
  httpReadHeaderTimeout?: Duration;
  httpReadTimeout?: Duration;
  httpWriteTimeout?: Duration;
  influxqlMaxSelectBuckets?: number;
  influxqlMaxSelectPoint?: number;
  influxqlMaxSelectSeries?: number;
  pprofDisabled?: boolean;
  queryInitialMemoryBytes?: number;
  queryMaxMemoryBytes?: number;
  queryMemoryBytes?: number;
  sessionLength?: number;
  sessionRenewDisabled?: boolean;
  storageCacheMaxMemorySize?: number;
  storageCacheSnapshotMemorySize?: number;
  storageCacheSnapshotWriteColdDuration?: Duration;
  storageCompactFullWriteColdDuration?: Duration;
  storageCompactThroughputBurst?: number;
  storageMaxConcurrentCompactions?: number;
  storageMaxIndexLogFileSize?: number;
  storageNoValidateFieldSize?: boolean;
  storageRetentionCheckInterval?: Duration;
  storageSeriesFileMaxConcurrentSnapshotCompactions?: number;
  storageSeriesIdSetCacheSize?: number;
  storageWalMaxConcurrentWrites?: number;
  storageWalMaxWriteDelay?: Duration;
  uiDisabled?: boolean;
}
export type InstanceMode = "PRIMARY" | "STANDBY" | "REPLICA";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface ListDbClustersInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListDbClustersOutput {
  items: Array<DbClusterSummary>;
  nextToken?: string;
}
export interface ListDbInstancesForClusterInput {
  dbClusterId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDbInstancesForClusterOutput {
  items: Array<DbInstanceForClusterSummary>;
  nextToken?: string;
}
export interface ListDbInstancesInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListDbInstancesOutput {
  items: Array<DbInstanceSummary>;
  nextToken?: string;
}
export interface ListDbParameterGroupsInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListDbParameterGroupsOutput {
  items: Array<DbParameterGroupSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Partial<Record<string, string>>;
}
export interface LogDeliveryConfiguration {
  s3Configuration: S3Configuration;
}
export type LogLevel = "DEBUG" | "INFO" | "ERROR";
export type MaxResults = number;

export type NetworkType = "IPV4" | "DUAL";
export type NextToken = string;

export type Organization = string;

interface _Parameters {
  InfluxDBv2?: InfluxDBv2Parameters;
}

export type Parameters = _Parameters & { InfluxDBv2: InfluxDBv2Parameters };
export type Password = string;

export type Port = number;

export type RequestTagMap = Record<string, string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ResponseTagMap = Partial<Record<string, string>>;
export interface S3Configuration {
  bucketName: string;
  enabled: boolean;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type Status =
  | "CREATING"
  | "AVAILABLE"
  | "DELETING"
  | "MODIFYING"
  | "UPDATING"
  | "DELETED"
  | "FAILED"
  | "UPDATING_DEPLOYMENT_TYPE"
  | "UPDATING_INSTANCE_TYPE";
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
export type TracingType = "LOG" | "JAEGER";
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UpdateDbClusterInput {
  dbClusterId: string;
  logDeliveryConfiguration?: LogDeliveryConfiguration;
  dbParameterGroupIdentifier?: string;
  port?: number;
  dbInstanceType?: DbInstanceType;
  failoverMode?: FailoverMode;
}
export interface UpdateDbClusterOutput {
  dbClusterStatus?: ClusterStatus;
}
export interface UpdateDbInstanceInput {
  identifier: string;
  logDeliveryConfiguration?: LogDeliveryConfiguration;
  dbParameterGroupIdentifier?: string;
  port?: number;
  dbInstanceType?: DbInstanceType;
  deploymentType?: DeploymentType;
  dbStorageType?: DbStorageType;
  allocatedStorage?: number;
}
export interface UpdateDbInstanceOutput {
  id: string;
  name: string;
  arn: string;
  status?: Status;
  endpoint?: string;
  port?: number;
  networkType?: NetworkType;
  dbInstanceType?: DbInstanceType;
  dbStorageType?: DbStorageType;
  allocatedStorage?: number;
  deploymentType?: DeploymentType;
  vpcSubnetIds: Array<string>;
  publiclyAccessible?: boolean;
  vpcSecurityGroupIds?: Array<string>;
  dbParameterGroupIdentifier?: string;
  availabilityZone?: string;
  secondaryAvailabilityZone?: string;
  logDeliveryConfiguration?: LogDeliveryConfiguration;
  influxAuthParametersSecretArn?: string;
  dbClusterId?: string;
  instanceMode?: InstanceMode;
}
export type Username = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: ValidationExceptionReason;
}> {}
export type ValidationExceptionReason = "FIELD_VALIDATION_FAILED" | "OTHER";
export type VpcSecurityGroupId = string;

export type VpcSecurityGroupIdList = Array<string>;
export type VpcSubnetId = string;

export type VpcSubnetIdList = Array<string>;
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

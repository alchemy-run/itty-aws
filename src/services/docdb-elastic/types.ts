import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class DocDBElastic extends AWSServiceClient {
  applyPendingMaintenanceAction(
    input: ApplyPendingMaintenanceActionInput,
  ): Effect.Effect<
    ApplyPendingMaintenanceActionOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  copyClusterSnapshot(
    input: CopyClusterSnapshotInput,
  ): Effect.Effect<
    CopyClusterSnapshotOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createCluster(
    input: CreateClusterInput,
  ): Effect.Effect<
    CreateClusterOutput,
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createClusterSnapshot(
    input: CreateClusterSnapshotInput,
  ): Effect.Effect<
    CreateClusterSnapshotOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCluster(
    input: DeleteClusterInput,
  ): Effect.Effect<
    DeleteClusterOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteClusterSnapshot(
    input: DeleteClusterSnapshotInput,
  ): Effect.Effect<
    DeleteClusterSnapshotOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCluster(
    input: GetClusterInput,
  ): Effect.Effect<
    GetClusterOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getClusterSnapshot(
    input: GetClusterSnapshotInput,
  ): Effect.Effect<
    GetClusterSnapshotOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getPendingMaintenanceAction(
    input: GetPendingMaintenanceActionInput,
  ): Effect.Effect<
    GetPendingMaintenanceActionOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listClusters(
    input: ListClustersInput,
  ): Effect.Effect<
    ListClustersOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listClusterSnapshots(
    input: ListClusterSnapshotsInput,
  ): Effect.Effect<
    ListClusterSnapshotsOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPendingMaintenanceActions(
    input: ListPendingMaintenanceActionsInput,
  ): Effect.Effect<
    ListPendingMaintenanceActionsOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  restoreClusterFromSnapshot(
    input: RestoreClusterFromSnapshotInput,
  ): Effect.Effect<
    RestoreClusterFromSnapshotOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startCluster(
    input: StartClusterInput,
  ): Effect.Effect<
    StartClusterOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  stopCluster(
    input: StopClusterInput,
  ): Effect.Effect<
    StopClusterOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateCluster(
    input: UpdateClusterInput,
  ): Effect.Effect<
    UpdateClusterOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export declare class DocdbElastic extends DocDBElastic {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface ApplyPendingMaintenanceActionInput {
  resourceArn: string;
  applyAction: string;
  optInType: string;
  applyOn?: string;
}
export interface ApplyPendingMaintenanceActionOutput {
  resourcePendingMaintenanceAction: ResourcePendingMaintenanceAction;
}
export type Arn = string;

export type Auth = string;

export interface Cluster {
  clusterName: string;
  clusterArn: string;
  status: string;
  clusterEndpoint: string;
  createTime: string;
  adminUserName: string;
  authType: string;
  shardCapacity: number;
  shardCount: number;
  vpcSecurityGroupIds: Array<string>;
  subnetIds: Array<string>;
  preferredMaintenanceWindow: string;
  kmsKeyId: string;
  shards?: Array<Shard>;
  backupRetentionPeriod?: number;
  preferredBackupWindow?: string;
  shardInstanceCount?: number;
}
export interface ClusterInList {
  clusterName: string;
  clusterArn: string;
  status: string;
}
export type ClusterList = Array<ClusterInList>;
export interface ClusterSnapshot {
  subnetIds: Array<string>;
  snapshotName: string;
  snapshotArn: string;
  snapshotCreationTime: string;
  clusterArn: string;
  clusterCreationTime: string;
  status: string;
  vpcSecurityGroupIds: Array<string>;
  adminUserName: string;
  kmsKeyId: string;
  snapshotType?: string;
}
export interface ClusterSnapshotInList {
  snapshotName: string;
  snapshotArn: string;
  clusterArn: string;
  status: string;
  snapshotCreationTime: string;
}
export type ClusterSnapshotList = Array<ClusterSnapshotInList>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CopyClusterSnapshotInput {
  snapshotArn: string;
  targetSnapshotName: string;
  kmsKeyId?: string;
  copyTags?: boolean;
  tags?: Record<string, string>;
}
export interface CopyClusterSnapshotOutput {
  snapshot: ClusterSnapshot;
}
export interface CreateClusterInput {
  clusterName: string;
  authType: string;
  adminUserName: string;
  adminUserPassword: string;
  shardCapacity: number;
  shardCount: number;
  vpcSecurityGroupIds?: Array<string>;
  subnetIds?: Array<string>;
  kmsKeyId?: string;
  clientToken?: string;
  preferredMaintenanceWindow?: string;
  tags?: Record<string, string>;
  backupRetentionPeriod?: number;
  preferredBackupWindow?: string;
  shardInstanceCount?: number;
}
export interface CreateClusterOutput {
  cluster: Cluster;
}
export interface CreateClusterSnapshotInput {
  clusterArn: string;
  snapshotName: string;
  tags?: Record<string, string>;
}
export interface CreateClusterSnapshotOutput {
  snapshot: ClusterSnapshot;
}
export interface DeleteClusterInput {
  clusterArn: string;
}
export interface DeleteClusterOutput {
  cluster: Cluster;
}
export interface DeleteClusterSnapshotInput {
  snapshotArn: string;
}
export interface DeleteClusterSnapshotOutput {
  snapshot: ClusterSnapshot;
}
export interface GetClusterInput {
  clusterArn: string;
}
export interface GetClusterOutput {
  cluster: Cluster;
}
export interface GetClusterSnapshotInput {
  snapshotArn: string;
}
export interface GetClusterSnapshotOutput {
  snapshot: ClusterSnapshot;
}
export interface GetPendingMaintenanceActionInput {
  resourceArn: string;
}
export interface GetPendingMaintenanceActionOutput {
  resourcePendingMaintenanceAction: ResourcePendingMaintenanceAction;
}
export type InputString = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface ListClustersInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListClusterSnapshotsInput {
  clusterArn?: string;
  nextToken?: string;
  maxResults?: number;
  snapshotType?: string;
}
export interface ListClusterSnapshotsOutput {
  snapshots?: Array<ClusterSnapshotInList>;
  nextToken?: string;
}
export interface ListClustersOutput {
  clusters?: Array<ClusterInList>;
  nextToken?: string;
}
export interface ListPendingMaintenanceActionsInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListPendingMaintenanceActionsOutput {
  resourcePendingMaintenanceActions: Array<ResourcePendingMaintenanceAction>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type OptInType = string;

export type PaginationToken = string;

export type Password = string;

export interface PendingMaintenanceActionDetails {
  action: string;
  autoAppliedAfterDate?: string;
  forcedApplyDate?: string;
  optInStatus?: string;
  currentApplyDate?: string;
  description?: string;
}
export type PendingMaintenanceActionDetailsList = Array<PendingMaintenanceActionDetails>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface ResourcePendingMaintenanceAction {
  resourceArn?: string;
  pendingMaintenanceActionDetails?: Array<PendingMaintenanceActionDetails>;
}
export type ResourcePendingMaintenanceActionList = Array<ResourcePendingMaintenanceAction>;
export interface RestoreClusterFromSnapshotInput {
  clusterName: string;
  snapshotArn: string;
  vpcSecurityGroupIds?: Array<string>;
  subnetIds?: Array<string>;
  kmsKeyId?: string;
  tags?: Record<string, string>;
  shardCapacity?: number;
  shardInstanceCount?: number;
}
export interface RestoreClusterFromSnapshotOutput {
  cluster: Cluster;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export interface Shard {
  shardId: string;
  createTime: string;
  status: string;
}
export type ShardList = Array<Shard>;
export type SnapshotType = string;

export interface StartClusterInput {
  clusterArn: string;
}
export interface StartClusterOutput {
  cluster: Cluster;
}
export type Status = string;

export interface StopClusterInput {
  clusterArn: string;
}
export interface StopClusterOutput {
  cluster: Cluster;
}
export type StringList = Array<string>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
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
export interface UntagResourceResponse {
}
export interface UpdateClusterInput {
  clusterArn: string;
  authType?: string;
  shardCapacity?: number;
  shardCount?: number;
  vpcSecurityGroupIds?: Array<string>;
  subnetIds?: Array<string>;
  adminUserPassword?: string;
  clientToken?: string;
  preferredMaintenanceWindow?: string;
  backupRetentionPeriod?: number;
  preferredBackupWindow?: string;
  shardInstanceCount?: number;
}
export interface UpdateClusterOutput {
  cluster: Cluster;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export declare namespace ApplyPendingMaintenanceAction {
  export type Input = ApplyPendingMaintenanceActionInput;
  export type Output = ApplyPendingMaintenanceActionOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CopyClusterSnapshot {
  export type Input = CopyClusterSnapshotInput;
  export type Output = CopyClusterSnapshotOutput;
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

export declare namespace CreateCluster {
  export type Input = CreateClusterInput;
  export type Output = CreateClusterOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateClusterSnapshot {
  export type Input = CreateClusterSnapshotInput;
  export type Output = CreateClusterSnapshotOutput;
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

export declare namespace DeleteCluster {
  export type Input = DeleteClusterInput;
  export type Output = DeleteClusterOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteClusterSnapshot {
  export type Input = DeleteClusterSnapshotInput;
  export type Output = DeleteClusterSnapshotOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCluster {
  export type Input = GetClusterInput;
  export type Output = GetClusterOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetClusterSnapshot {
  export type Input = GetClusterSnapshotInput;
  export type Output = GetClusterSnapshotOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPendingMaintenanceAction {
  export type Input = GetPendingMaintenanceActionInput;
  export type Output = GetPendingMaintenanceActionOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListClusters {
  export type Input = ListClustersInput;
  export type Output = ListClustersOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListClusterSnapshots {
  export type Input = ListClusterSnapshotsInput;
  export type Output = ListClusterSnapshotsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPendingMaintenanceActions {
  export type Input = ListPendingMaintenanceActionsInput;
  export type Output = ListPendingMaintenanceActionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RestoreClusterFromSnapshot {
  export type Input = RestoreClusterFromSnapshotInput;
  export type Output = RestoreClusterFromSnapshotOutput;
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

export declare namespace StartCluster {
  export type Input = StartClusterInput;
  export type Output = StartClusterOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopCluster {
  export type Input = StopClusterInput;
  export type Output = StopClusterOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCluster {
  export type Input = UpdateClusterInput;
  export type Output = UpdateClusterOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type DocDBElasticErrors = AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError;


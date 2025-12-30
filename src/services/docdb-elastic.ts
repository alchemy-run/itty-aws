import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const StringList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class ApplyPendingMaintenanceActionInput extends S.Class<ApplyPendingMaintenanceActionInput>("ApplyPendingMaintenanceActionInput")({resourceArn: S.String, applyAction: S.String, optInType: S.String, applyOn: S.optional(S.String)}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class CreateClusterInput extends S.Class<CreateClusterInput>("CreateClusterInput")({clusterName: S.String, authType: S.String, adminUserName: S.String, adminUserPassword: S.String, shardCapacity: S.Number, shardCount: S.Number, vpcSecurityGroupIds: S.optional(StringList), subnetIds: S.optional(StringList), kmsKeyId: S.optional(S.String), clientToken: S.optional(S.String), preferredMaintenanceWindow: S.optional(S.String), tags: S.optional(TagMap), backupRetentionPeriod: S.optional(S.Number), preferredBackupWindow: S.optional(S.String), shardInstanceCount: S.optional(S.Number)}) {}
export class CreateClusterSnapshotInput extends S.Class<CreateClusterSnapshotInput>("CreateClusterSnapshotInput")({clusterArn: S.String, snapshotName: S.String, tags: S.optional(TagMap)}) {}
export class DeleteClusterInput extends S.Class<DeleteClusterInput>("DeleteClusterInput")({clusterArn: S.String}) {}
export class DeleteClusterSnapshotInput extends S.Class<DeleteClusterSnapshotInput>("DeleteClusterSnapshotInput")({snapshotArn: S.String}) {}
export class GetClusterInput extends S.Class<GetClusterInput>("GetClusterInput")({clusterArn: S.String}) {}
export class GetClusterSnapshotInput extends S.Class<GetClusterSnapshotInput>("GetClusterSnapshotInput")({snapshotArn: S.String}) {}
export class GetPendingMaintenanceActionInput extends S.Class<GetPendingMaintenanceActionInput>("GetPendingMaintenanceActionInput")({resourceArn: S.String}) {}
export class ListClustersInput extends S.Class<ListClustersInput>("ListClustersInput")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListClusterSnapshotsInput extends S.Class<ListClusterSnapshotsInput>("ListClusterSnapshotsInput")({clusterArn: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), snapshotType: S.optional(S.String)}) {}
export class ListPendingMaintenanceActionsInput extends S.Class<ListPendingMaintenanceActionsInput>("ListPendingMaintenanceActionsInput")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class RestoreClusterFromSnapshotInput extends S.Class<RestoreClusterFromSnapshotInput>("RestoreClusterFromSnapshotInput")({clusterName: S.String, snapshotArn: S.String, vpcSecurityGroupIds: S.optional(StringList), subnetIds: S.optional(StringList), kmsKeyId: S.optional(S.String), tags: S.optional(TagMap), shardCapacity: S.optional(S.Number), shardInstanceCount: S.optional(S.Number)}) {}
export class StartClusterInput extends S.Class<StartClusterInput>("StartClusterInput")({clusterArn: S.String}) {}
export class StopClusterInput extends S.Class<StopClusterInput>("StopClusterInput")({clusterArn: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateClusterInput extends S.Class<UpdateClusterInput>("UpdateClusterInput")({clusterArn: S.String, authType: S.optional(S.String), shardCapacity: S.optional(S.Number), shardCount: S.optional(S.Number), vpcSecurityGroupIds: S.optional(StringList), subnetIds: S.optional(StringList), adminUserPassword: S.optional(S.String), clientToken: S.optional(S.String), preferredMaintenanceWindow: S.optional(S.String), backupRetentionPeriod: S.optional(S.Number), preferredBackupWindow: S.optional(S.String), shardInstanceCount: S.optional(S.Number)}) {}
export class PendingMaintenanceActionDetails extends S.Class<PendingMaintenanceActionDetails>("PendingMaintenanceActionDetails")({action: S.String, autoAppliedAfterDate: S.optional(S.String), forcedApplyDate: S.optional(S.String), optInStatus: S.optional(S.String), currentApplyDate: S.optional(S.String), description: S.optional(S.String)}) {}
export const PendingMaintenanceActionDetailsList = S.Array(PendingMaintenanceActionDetails);
export class ResourcePendingMaintenanceAction extends S.Class<ResourcePendingMaintenanceAction>("ResourcePendingMaintenanceAction")({resourceArn: S.optional(S.String), pendingMaintenanceActionDetails: S.optional(PendingMaintenanceActionDetailsList)}) {}
export const ResourcePendingMaintenanceActionList = S.Array(ResourcePendingMaintenanceAction);
export class CopyClusterSnapshotInput extends S.Class<CopyClusterSnapshotInput>("CopyClusterSnapshotInput")({snapshotArn: S.String, targetSnapshotName: S.String, kmsKeyId: S.optional(S.String), copyTags: S.optional(S.Boolean), tags: S.optional(TagMap)}) {}
export class Shard extends S.Class<Shard>("Shard")({shardId: S.String, createTime: S.String, status: S.String}) {}
export const ShardList = S.Array(Shard);
export class Cluster extends S.Class<Cluster>("Cluster")({clusterName: S.String, clusterArn: S.String, status: S.String, clusterEndpoint: S.String, createTime: S.String, adminUserName: S.String, authType: S.String, shardCapacity: S.Number, shardCount: S.Number, vpcSecurityGroupIds: StringList, subnetIds: StringList, preferredMaintenanceWindow: S.String, kmsKeyId: S.String, shards: S.optional(ShardList), backupRetentionPeriod: S.optional(S.Number), preferredBackupWindow: S.optional(S.String), shardInstanceCount: S.optional(S.Number)}) {}
export class DeleteClusterOutput extends S.Class<DeleteClusterOutput>("DeleteClusterOutput")({cluster: Cluster}) {}
export class ClusterSnapshot extends S.Class<ClusterSnapshot>("ClusterSnapshot")({subnetIds: StringList, snapshotName: S.String, snapshotArn: S.String, snapshotCreationTime: S.String, clusterArn: S.String, clusterCreationTime: S.String, status: S.String, vpcSecurityGroupIds: StringList, adminUserName: S.String, kmsKeyId: S.String, snapshotType: S.optional(S.String)}) {}
export class DeleteClusterSnapshotOutput extends S.Class<DeleteClusterSnapshotOutput>("DeleteClusterSnapshotOutput")({snapshot: ClusterSnapshot}) {}
export class GetClusterOutput extends S.Class<GetClusterOutput>("GetClusterOutput")({cluster: Cluster}) {}
export class GetClusterSnapshotOutput extends S.Class<GetClusterSnapshotOutput>("GetClusterSnapshotOutput")({snapshot: ClusterSnapshot}) {}
export class GetPendingMaintenanceActionOutput extends S.Class<GetPendingMaintenanceActionOutput>("GetPendingMaintenanceActionOutput")({resourcePendingMaintenanceAction: ResourcePendingMaintenanceAction}) {}
export class ListPendingMaintenanceActionsOutput extends S.Class<ListPendingMaintenanceActionsOutput>("ListPendingMaintenanceActionsOutput")({resourcePendingMaintenanceActions: ResourcePendingMaintenanceActionList, nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class RestoreClusterFromSnapshotOutput extends S.Class<RestoreClusterFromSnapshotOutput>("RestoreClusterFromSnapshotOutput")({cluster: Cluster}) {}
export class StartClusterOutput extends S.Class<StartClusterOutput>("StartClusterOutput")({cluster: Cluster}) {}
export class StopClusterOutput extends S.Class<StopClusterOutput>("StopClusterOutput")({cluster: Cluster}) {}
export class UpdateClusterOutput extends S.Class<UpdateClusterOutput>("UpdateClusterOutput")({cluster: Cluster}) {}
export class ClusterInList extends S.Class<ClusterInList>("ClusterInList")({clusterName: S.String, clusterArn: S.String, status: S.String}) {}
export const ClusterList = S.Array(ClusterInList);
export class ClusterSnapshotInList extends S.Class<ClusterSnapshotInList>("ClusterSnapshotInList")({snapshotName: S.String, snapshotArn: S.String, clusterArn: S.String, status: S.String, snapshotCreationTime: S.String}) {}
export const ClusterSnapshotList = S.Array(ClusterSnapshotInList);
export class CopyClusterSnapshotOutput extends S.Class<CopyClusterSnapshotOutput>("CopyClusterSnapshotOutput")({snapshot: ClusterSnapshot}) {}
export class CreateClusterSnapshotOutput extends S.Class<CreateClusterSnapshotOutput>("CreateClusterSnapshotOutput")({snapshot: ClusterSnapshot}) {}
export class ListClustersOutput extends S.Class<ListClustersOutput>("ListClustersOutput")({clusters: S.optional(ClusterList), nextToken: S.optional(S.String)}) {}
export class ListClusterSnapshotsOutput extends S.Class<ListClusterSnapshotsOutput>("ListClusterSnapshotsOutput")({snapshots: S.optional(ClusterSnapshotList), nextToken: S.optional(S.String)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class ApplyPendingMaintenanceActionOutput extends S.Class<ApplyPendingMaintenanceActionOutput>("ApplyPendingMaintenanceActionOutput")({resourcePendingMaintenanceAction: ResourcePendingMaintenanceAction}) {}
export class CreateClusterOutput extends S.Class<CreateClusterOutput>("CreateClusterOutput")({cluster: Cluster}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Retrieves all maintenance actions that are pending.
 */export const getPendingMaintenanceAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/pending-action/{resourceArn}", method: "GET", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.GetPendingMaintenanceAction" }, GetPendingMaintenanceActionInput, GetPendingMaintenanceActionOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of all maintenance actions that are pending.
 */export const listPendingMaintenanceActions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/pending-actions", method: "GET", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.ListPendingMaintenanceActions" }, ListPendingMaintenanceActionsInput, ListPendingMaintenanceActionsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all tags on a elastic cluster resource
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/tags/{resourceArn}", method: "GET", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Restarts the stopped elastic cluster that is specified by `clusterARN`.
 */export const startCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/cluster/{clusterArn}/start", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.StartCluster" }, StartClusterInput, StartClusterOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops the running elastic cluster that is specified by `clusterArn`.
 * The elastic cluster must be in the *available* state.
 */export const stopCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/cluster/{clusterArn}/stop", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.StopCluster" }, StopClusterInput, StopClusterOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds metadata tags to an elastic cluster resource
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/tags/{resourceArn}", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes metadata tags from an elastic cluster resource
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies an elastic cluster. This includes updating admin-username/password,
 * upgrading the API version, and setting up a backup window and maintenance window
 */export const updateCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/cluster/{clusterArn}", method: "PUT", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.UpdateCluster" }, UpdateClusterInput, UpdateClusterOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Copies a snapshot of an elastic cluster.
 */export const copyClusterSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/cluster-snapshot/{snapshotArn}/copy", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.CopyClusterSnapshot" }, CopyClusterSnapshotInput, CopyClusterSnapshotOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a snapshot of an elastic cluster.
 */export const createClusterSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/cluster-snapshot", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.CreateClusterSnapshot" }, CreateClusterSnapshotInput, CreateClusterSnapshotOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an elastic cluster.
 */export const deleteCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/cluster/{clusterArn}", method: "DELETE", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.DeleteCluster" }, DeleteClusterInput, DeleteClusterOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an elastic cluster snapshot.
 */export const deleteClusterSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/cluster-snapshot/{snapshotArn}", method: "DELETE", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.DeleteClusterSnapshot" }, DeleteClusterSnapshotInput, DeleteClusterSnapshotOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a specific elastic cluster.
 */export const getCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/cluster/{clusterArn}", method: "GET", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.GetCluster" }, GetClusterInput, GetClusterOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about provisioned Amazon DocumentDB elastic clusters.
 */export const listClusters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/clusters", method: "GET", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.ListClusters" }, ListClustersInput, ListClustersOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about snapshots for a specified elastic cluster.
 */export const listClusterSnapshots = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/cluster-snapshots", method: "GET", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.ListClusterSnapshots" }, ListClusterSnapshotsInput, ListClusterSnapshotsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Restores an elastic cluster from a snapshot.
 */export const restoreClusterFromSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/cluster-snapshot/{snapshotArn}/restore", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.RestoreClusterFromSnapshot" }, RestoreClusterFromSnapshotInput, RestoreClusterFromSnapshotOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The type of pending maintenance action to be applied to the resource.
 */export const applyPendingMaintenanceAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/pending-action", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.ApplyPendingMaintenanceAction" }, ApplyPendingMaintenanceActionInput, ApplyPendingMaintenanceActionOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new Amazon DocumentDB elastic cluster and returns its cluster structure.
 */export const createCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/cluster", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.CreateCluster" }, CreateClusterInput, CreateClusterOutput, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a specific elastic cluster snapshot
 */export const getClusterSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-28", uri: "/cluster-snapshot/{snapshotArn}", method: "GET", sdkId: "DocDB Elastic", sigV4ServiceName: "docdb-elastic", name: "ChimeraDbLionfishServiceLambda.GetClusterSnapshot" }, GetClusterSnapshotInput, GetClusterSnapshotOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

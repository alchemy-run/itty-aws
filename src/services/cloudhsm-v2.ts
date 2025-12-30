import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const SubnetIds = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class CreateHsmRequest extends S.Class<CreateHsmRequest>("CreateHsmRequest")({ClusterId: S.String, AvailabilityZone: S.String, IpAddress: S.optional(S.String)}) {}
export class DeleteBackupRequest extends S.Class<DeleteBackupRequest>("DeleteBackupRequest")({BackupId: S.String}) {}
export class DeleteClusterRequest extends S.Class<DeleteClusterRequest>("DeleteClusterRequest")({ClusterId: S.String}) {}
export class DeleteHsmRequest extends S.Class<DeleteHsmRequest>("DeleteHsmRequest")({ClusterId: S.String, HsmId: S.optional(S.String), EniId: S.optional(S.String), EniIp: S.optional(S.String)}) {}
export class DeleteResourcePolicyRequest extends S.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({ResourceArn: S.optional(S.String)}) {}
export const Strings = S.Array(S.String);
export const Filters = S.Record({key: S.String, value: Strings});
export class DescribeClustersRequest extends S.Class<DescribeClustersRequest>("DescribeClustersRequest")({Filters: S.optional(Filters), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class GetResourcePolicyRequest extends S.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({ResourceArn: S.optional(S.String)}) {}
export class InitializeClusterRequest extends S.Class<InitializeClusterRequest>("InitializeClusterRequest")({ClusterId: S.String, SignedCert: S.String, TrustAnchor: S.String}) {}
export class ListTagsRequest extends S.Class<ListTagsRequest>("ListTagsRequest")({ResourceId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ModifyBackupAttributesRequest extends S.Class<ModifyBackupAttributesRequest>("ModifyBackupAttributesRequest")({BackupId: S.String, NeverExpires: S.Boolean}) {}
export class BackupRetentionPolicy extends S.Class<BackupRetentionPolicy>("BackupRetentionPolicy")({Type: S.optional(S.String), Value: S.optional(S.String)}) {}
export class ModifyClusterRequest extends S.Class<ModifyClusterRequest>("ModifyClusterRequest")({HsmType: S.optional(S.String), BackupRetentionPolicy: S.optional(BackupRetentionPolicy), ClusterId: S.String}) {}
export class PutResourcePolicyRequest extends S.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({ResourceArn: S.optional(S.String), Policy: S.optional(S.String)}) {}
export class RestoreBackupRequest extends S.Class<RestoreBackupRequest>("RestoreBackupRequest")({BackupId: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceId: S.String, TagList: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceId: S.String, TagKeyList: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class Hsm extends S.Class<Hsm>("Hsm")({AvailabilityZone: S.optional(S.String), ClusterId: S.optional(S.String), SubnetId: S.optional(S.String), EniId: S.optional(S.String), EniIp: S.optional(S.String), EniIpV6: S.optional(S.String), HsmId: S.String, HsmType: S.optional(S.String), State: S.optional(S.String), StateMessage: S.optional(S.String)}) {}
export const Hsms = S.Array(Hsm);
export const ExternalSubnetMapping = S.Record({key: S.String, value: S.String});
export class Certificates extends S.Class<Certificates>("Certificates")({ClusterCsr: S.optional(S.String), HsmCertificate: S.optional(S.String), AwsHardwareCertificate: S.optional(S.String), ManufacturerHardwareCertificate: S.optional(S.String), ClusterCertificate: S.optional(S.String)}) {}
export class Cluster extends S.Class<Cluster>("Cluster")({BackupPolicy: S.optional(S.String), BackupRetentionPolicy: S.optional(BackupRetentionPolicy), ClusterId: S.optional(S.String), CreateTimestamp: S.optional(S.Date), Hsms: S.optional(Hsms), HsmType: S.optional(S.String), HsmTypeRollbackExpiration: S.optional(S.Date), PreCoPassword: S.optional(S.String), SecurityGroup: S.optional(S.String), SourceBackupId: S.optional(S.String), State: S.optional(S.String), StateMessage: S.optional(S.String), SubnetMapping: S.optional(ExternalSubnetMapping), VpcId: S.optional(S.String), NetworkType: S.optional(S.String), Certificates: S.optional(Certificates), TagList: S.optional(TagList), Mode: S.optional(S.String)}) {}
export const Clusters = S.Array(Cluster);
export class CopyBackupToRegionRequest extends S.Class<CopyBackupToRegionRequest>("CopyBackupToRegionRequest")({DestinationRegion: S.String, BackupId: S.String, TagList: S.optional(TagList)}) {}
export class CreateClusterRequest extends S.Class<CreateClusterRequest>("CreateClusterRequest")({BackupRetentionPolicy: S.optional(BackupRetentionPolicy), HsmType: S.String, SourceBackupId: S.optional(S.String), SubnetIds: SubnetIds, NetworkType: S.optional(S.String), TagList: S.optional(TagList), Mode: S.optional(S.String)}) {}
export class DeleteHsmResponse extends S.Class<DeleteHsmResponse>("DeleteHsmResponse")({HsmId: S.optional(S.String)}) {}
export class DeleteResourcePolicyResponse extends S.Class<DeleteResourcePolicyResponse>("DeleteResourcePolicyResponse")({ResourceArn: S.optional(S.String), Policy: S.optional(S.String)}) {}
export class DescribeBackupsRequest extends S.Class<DescribeBackupsRequest>("DescribeBackupsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Filters: S.optional(Filters), Shared: S.optional(S.Boolean), SortAscending: S.optional(S.Boolean)}) {}
export class DescribeClustersResponse extends S.Class<DescribeClustersResponse>("DescribeClustersResponse")({Clusters: S.optional(Clusters), NextToken: S.optional(S.String)}) {}
export class GetResourcePolicyResponse extends S.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({Policy: S.optional(S.String)}) {}
export class InitializeClusterResponse extends S.Class<InitializeClusterResponse>("InitializeClusterResponse")({State: S.optional(S.String), StateMessage: S.optional(S.String)}) {}
export class ListTagsResponse extends S.Class<ListTagsResponse>("ListTagsResponse")({TagList: TagList, NextToken: S.optional(S.String)}) {}
export class Backup extends S.Class<Backup>("Backup")({BackupId: S.String, BackupArn: S.optional(S.String), BackupState: S.optional(S.String), ClusterId: S.optional(S.String), CreateTimestamp: S.optional(S.Date), CopyTimestamp: S.optional(S.Date), NeverExpires: S.optional(S.Boolean), SourceRegion: S.optional(S.String), SourceBackup: S.optional(S.String), SourceCluster: S.optional(S.String), DeleteTimestamp: S.optional(S.Date), TagList: S.optional(TagList), HsmType: S.optional(S.String), Mode: S.optional(S.String)}) {}
export class ModifyBackupAttributesResponse extends S.Class<ModifyBackupAttributesResponse>("ModifyBackupAttributesResponse")({Backup: S.optional(Backup)}) {}
export class ModifyClusterResponse extends S.Class<ModifyClusterResponse>("ModifyClusterResponse")({Cluster: S.optional(Cluster)}) {}
export class PutResourcePolicyResponse extends S.Class<PutResourcePolicyResponse>("PutResourcePolicyResponse")({ResourceArn: S.optional(S.String), Policy: S.optional(S.String)}) {}
export class RestoreBackupResponse extends S.Class<RestoreBackupResponse>("RestoreBackupResponse")({Backup: S.optional(Backup)}) {}
export const Backups = S.Array(Backup);
export class CreateClusterResponse extends S.Class<CreateClusterResponse>("CreateClusterResponse")({Cluster: S.optional(Cluster)}) {}
export class CreateHsmResponse extends S.Class<CreateHsmResponse>("CreateHsmResponse")({Hsm: S.optional(Hsm)}) {}
export class DeleteBackupResponse extends S.Class<DeleteBackupResponse>("DeleteBackupResponse")({Backup: S.optional(Backup)}) {}
export class DescribeBackupsResponse extends S.Class<DescribeBackupsResponse>("DescribeBackupsResponse")({Backups: S.optional(Backups), NextToken: S.optional(S.String)}) {}
export class DestinationBackup extends S.Class<DestinationBackup>("DestinationBackup")({CreateTimestamp: S.optional(S.Date), SourceRegion: S.optional(S.String), SourceBackup: S.optional(S.String), SourceCluster: S.optional(S.String)}) {}
export class CopyBackupToRegionResponse extends S.Class<CopyBackupToRegionResponse>("CopyBackupToRegionResponse")({DestinationBackup: S.optional(DestinationBackup)}) {}
export class DeleteClusterResponse extends S.Class<DeleteClusterResponse>("DeleteClusterResponse")({Cluster: S.optional(Cluster)}) {}

//# Errors
export class CloudHsmAccessDeniedException extends S.TaggedError<CloudHsmAccessDeniedException>()("CloudHsmAccessDeniedException", {}) {};
export class CloudHsmInternalFailureException extends S.TaggedError<CloudHsmInternalFailureException>()("CloudHsmInternalFailureException", {}) {};
export class CloudHsmInvalidRequestException extends S.TaggedError<CloudHsmInvalidRequestException>()("CloudHsmInvalidRequestException", {}) {};
export class CloudHsmResourceNotFoundException extends S.TaggedError<CloudHsmResourceNotFoundException>()("CloudHsmResourceNotFoundException", {}) {};
export class CloudHsmServiceException extends S.TaggedError<CloudHsmServiceException>()("CloudHsmServiceException", {}) {};
export class CloudHsmTagException extends S.TaggedError<CloudHsmTagException>()("CloudHsmTagException", {}) {};
export class CloudHsmResourceLimitExceededException extends S.TaggedError<CloudHsmResourceLimitExceededException>()("CloudHsmResourceLimitExceededException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Retrieves the resource policy document attached to a given resource.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
 */export const getResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Claims an CloudHSM cluster by submitting the cluster certificate issued by your
 * issuing certificate authority (CA) and the CA's root certificate. Before you can claim a
 * cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA.
 * To get the cluster's CSR, use DescribeClusters.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.
 */export const initializeCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.InitializeCluster" }, InitializeClusterRequest, InitializeClusterResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies attributes for CloudHSM backup.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.
 */export const modifyBackupAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.ModifyBackupAttributes" }, ModifyBackupAttributesRequest, ModifyBackupAttributesResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies CloudHSM cluster.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.
 */export const modifyCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.ModifyCluster" }, ModifyClusterRequest, ModifyClusterResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates an CloudHSM resource policy. A resource policy helps you to define the IAM entity
 * (for example, an Amazon Web Services account) that can manage your CloudHSM resources. The following resources support
 * CloudHSM resource policies:
 * 
 * 
 * 
 * - Backup - The resource policy allows you to describe the backup and restore a cluster from the backup in another Amazon Web Services account.
 * 
 * 
 * 
 * 
 * 
 * In order to share a backup, it must be in a 'READY' state and you must own it.
 * 
 * 
 * 
 * 
 * While you can share a backup using the CloudHSM PutResourcePolicy operation, we recommend using Resource Access Manager
 * (RAM) instead. Using RAM provides multiple benefits as it creates the policy for you, allows multiple resources to be shared at
 * one time, and increases the discoverability of shared resources. If you use PutResourcePolicy and want consumers to be able to
 * describe the backups you share with them, you must promote the backup to a standard RAM
 * Resource Share using the RAM PromoteResourceShareCreatedFromPolicy API operation.
 * 
 * For more information, see Working with shared backups in the CloudHSM User Guide
 * 
 * 
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
 */export const putResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Restores a specified CloudHSM backup that is in the
 * `PENDING_DELETION` state. For more information on deleting a backup, see
 * DeleteBackup.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.
 */export const restoreBackup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.RestoreBackup" }, RestoreBackupRequest, RestoreBackupResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified tag or tags from the specified CloudHSM cluster.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException, CloudHsmTagException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new CloudHSM cluster.
 * 
 * 
 * 
 * **Cross-account use:** Yes. To perform this operation with an CloudHSM backup in a different AWS account, specify the full backup
 * ARN in the value of the SourceBackupId parameter.
 */export const createCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.CreateCluster" }, CreateClusterRequest, CreateClusterResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException, CloudHsmTagException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new hardware security module (HSM) in the specified CloudHSM
 * cluster.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Service account.
 */export const createHsm = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.CreateHsm" }, CreateHsmRequest, CreateHsmResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a specified CloudHSM backup. A backup can be restored up to 7 days
 * after the DeleteBackup request is made. For more information on restoring a backup, see
 * RestoreBackup.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.
 */export const deleteBackup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.DeleteBackup" }, DeleteBackupRequest, DeleteBackupResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP
 * address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to
 * specify only one of these values. To find these values, use DescribeClusters.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM hsm in a different Amazon Web Services account.
 */export const deleteHsm = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.DeleteHsm" }, DeleteHsmRequest, DeleteHsmResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an CloudHSM resource policy. Deleting a resource policy will result in the resource being unshared and removed from
 * any RAM resource shares. Deleting the resource policy attached to a backup will not impact any clusters created from that
 * backup.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
 */export const deleteResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, DeleteResourcePolicyResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about backups of CloudHSM clusters. Lists either the backups you own or the backups shared with you when the Shared parameter is true.
 * 
 * 
 * This is a paginated operation, which means that each response might contain only a
 * subset of all the backups. When the response contains only a subset of backups, it includes a
 * `NextToken` value. Use this value in a subsequent `DescribeBackups`
 * request to get more backups. When you receive a response with no `NextToken` (or an
 * empty or null value), that means there are no more backups to get.
 * 
 * 
 * 
 * **Cross-account use:** Yes. Customers can describe backups in other Amazon Web Services accounts that are shared with them.
 */export const describeBackups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.DescribeBackups" }, DescribeBackupsRequest, DescribeBackupsResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException, CloudHsmTagException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about CloudHSM clusters.
 * 
 * 
 * This is a paginated operation, which means that each response might contain only a
 * subset of all the clusters. When the response contains only a subset of clusters, it includes
 * a `NextToken` value. Use this value in a subsequent `DescribeClusters`
 * request to get more clusters. When you receive a response with no `NextToken` (or
 * an empty or null value), that means there are no more clusters to get.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on CloudHSM clusters in a different Amazon Web Services account.
 */export const describeClusters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.DescribeClusters" }, DescribeClustersRequest, DescribeClustersResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmServiceException, CloudHsmTagException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of tags for the specified CloudHSM cluster.
 * 
 * 
 * This is a paginated operation, which means that each response might contain only a
 * subset of all the tags. When the response contains only a subset of tags, it includes a
 * `NextToken` value. Use this value in a subsequent `ListTags` request to
 * get more tags. When you receive a response with no `NextToken` (or an empty or null
 * value), that means there are no more tags to get.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
 */export const listTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.ListTags" }, ListTagsRequest, ListTagsResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException, CloudHsmTagException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or overwrites one or more tags for the specified CloudHSM cluster.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.TagResource" }, TagResourceRequest, TagResourceResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceLimitExceededException, CloudHsmResourceNotFoundException, CloudHsmServiceException, CloudHsmTagException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Copy an CloudHSM cluster backup to a different region.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.
 */export const copyBackupToRegion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.CopyBackupToRegion" }, CopyBackupToRegionRequest, CopyBackupToRegionResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException, CloudHsmTagException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified CloudHSM cluster. Before you can delete a cluster, you must
 * delete all HSMs in the cluster. To see if the cluster contains any HSMs, use DescribeClusters. To delete an HSM, use DeleteHsm.
 * 
 * 
 * 
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.
 */export const deleteCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-28", uri: "/", method: "POST", sdkId: "CloudHSM V2", sigV4ServiceName: "cloudhsm", name: "BaldrApiService.DeleteCluster" }, DeleteClusterRequest, DeleteClusterResponse, [CloudHsmAccessDeniedException, CloudHsmInternalFailureException, CloudHsmInvalidRequestException, CloudHsmResourceNotFoundException, CloudHsmServiceException, CloudHsmTagException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

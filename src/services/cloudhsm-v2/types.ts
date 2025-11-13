import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class CloudHSMV2 extends AWSServiceClient {
  copyBackupToRegion(
    input: CopyBackupToRegionRequest,
  ): Effect.Effect<
    CopyBackupToRegionResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError
  >;
  createCluster(
    input: CreateClusterRequest,
  ): Effect.Effect<
    CreateClusterResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError
  >;
  createHsm(
    input: CreateHsmRequest,
  ): Effect.Effect<
    CreateHsmResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError
  >;
  deleteBackup(
    input: DeleteBackupRequest,
  ): Effect.Effect<
    DeleteBackupResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError
  >;
  deleteCluster(
    input: DeleteClusterRequest,
  ): Effect.Effect<
    DeleteClusterResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError
  >;
  deleteHsm(
    input: DeleteHsmRequest,
  ): Effect.Effect<
    DeleteHsmResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError
  >;
  describeBackups(
    input: DescribeBackupsRequest,
  ): Effect.Effect<
    DescribeBackupsResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError
  >;
  describeClusters(
    input: DescribeClustersRequest,
  ): Effect.Effect<
    DescribeClustersResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError
  >;
  initializeCluster(
    input: InitializeClusterRequest,
  ): Effect.Effect<
    InitializeClusterResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError
  >;
  listTags(
    input: ListTagsRequest,
  ): Effect.Effect<
    ListTagsResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError
  >;
  modifyBackupAttributes(
    input: ModifyBackupAttributesRequest,
  ): Effect.Effect<
    ModifyBackupAttributesResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError
  >;
  modifyCluster(
    input: ModifyClusterRequest,
  ): Effect.Effect<
    ModifyClusterResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError
  >;
  restoreBackup(
    input: RestoreBackupRequest,
  ): Effect.Effect<
    RestoreBackupResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceLimitExceededException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError
  >;
}

export declare class CloudhsmV2 extends CloudHSMV2 {}

export interface Backup {
  BackupId: string;
  BackupArn?: string;
  BackupState?: BackupState;
  ClusterId?: string;
  CreateTimestamp?: Date | string;
  CopyTimestamp?: Date | string;
  NeverExpires?: boolean;
  SourceRegion?: string;
  SourceBackup?: string;
  SourceCluster?: string;
  DeleteTimestamp?: Date | string;
  TagList?: Array<Tag>;
  HsmType?: string;
  Mode?: ClusterMode;
}
export type BackupArn = string;

export type BackupId = string;

export type BackupPolicy = "DEFAULT";
export interface BackupRetentionPolicy {
  Type?: BackupRetentionType;
  Value?: string;
}
export type BackupRetentionType = "DAYS";
export type BackupRetentionValue = string;

export type Backups = Array<Backup>;
export type BackupsMaxSize = number;

export type BackupState =
  | "CREATE_IN_PROGRESS"
  | "READY"
  | "DELETED"
  | "PENDING_DELETION";
export type CloudhsmV2Boolean = boolean;

export type Cert = string;

export interface Certificates {
  ClusterCsr?: string;
  HsmCertificate?: string;
  AwsHardwareCertificate?: string;
  ManufacturerHardwareCertificate?: string;
  ClusterCertificate?: string;
}
export declare class CloudHsmAccessDeniedException extends Data.TaggedError(
  "CloudHsmAccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type CloudHsmArn = string;

export declare class CloudHsmInternalFailureException extends Data.TaggedError(
  "CloudHsmInternalFailureException",
)<{
  readonly Message?: string;
}> {}
export declare class CloudHsmInvalidRequestException extends Data.TaggedError(
  "CloudHsmInvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export declare class CloudHsmResourceLimitExceededException extends Data.TaggedError(
  "CloudHsmResourceLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class CloudHsmResourceNotFoundException extends Data.TaggedError(
  "CloudHsmResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class CloudHsmServiceException extends Data.TaggedError(
  "CloudHsmServiceException",
)<{
  readonly Message?: string;
}> {}
export declare class CloudHsmTagException extends Data.TaggedError(
  "CloudHsmTagException",
)<{
  readonly Message?: string;
}> {}
export interface Cluster {
  BackupPolicy?: BackupPolicy;
  BackupRetentionPolicy?: BackupRetentionPolicy;
  ClusterId?: string;
  CreateTimestamp?: Date | string;
  Hsms?: Array<Hsm>;
  HsmType?: string;
  HsmTypeRollbackExpiration?: Date | string;
  PreCoPassword?: string;
  SecurityGroup?: string;
  SourceBackupId?: string;
  State?: ClusterState;
  StateMessage?: string;
  SubnetMapping?: Record<string, string>;
  VpcId?: string;
  NetworkType?: NetworkType;
  Certificates?: Certificates;
  TagList?: Array<Tag>;
  Mode?: ClusterMode;
}
export type ClusterId = string;

export type ClusterMode = "FIPS" | "NON_FIPS";
export type Clusters = Array<Cluster>;
export type ClustersMaxSize = number;

export type ClusterState =
  | "CREATE_IN_PROGRESS"
  | "UNINITIALIZED"
  | "INITIALIZE_IN_PROGRESS"
  | "INITIALIZED"
  | "ACTIVE"
  | "UPDATE_IN_PROGRESS"
  | "MODIFY_IN_PROGRESS"
  | "ROLLBACK_IN_PROGRESS"
  | "DELETE_IN_PROGRESS"
  | "DELETED"
  | "DEGRADED";
export interface CopyBackupToRegionRequest {
  DestinationRegion: string;
  BackupId: string;
  TagList?: Array<Tag>;
}
export interface CopyBackupToRegionResponse {
  DestinationBackup?: DestinationBackup;
}
export interface CreateClusterRequest {
  BackupRetentionPolicy?: BackupRetentionPolicy;
  HsmType: string;
  SourceBackupId?: string;
  SubnetIds: Array<string>;
  NetworkType?: NetworkType;
  TagList?: Array<Tag>;
  Mode?: ClusterMode;
}
export interface CreateClusterResponse {
  Cluster?: Cluster;
}
export interface CreateHsmRequest {
  ClusterId: string;
  AvailabilityZone: string;
  IpAddress?: string;
}
export interface CreateHsmResponse {
  Hsm?: Hsm;
}
export interface DeleteBackupRequest {
  BackupId: string;
}
export interface DeleteBackupResponse {
  Backup?: Backup;
}
export interface DeleteClusterRequest {
  ClusterId: string;
}
export interface DeleteClusterResponse {
  Cluster?: Cluster;
}
export interface DeleteHsmRequest {
  ClusterId: string;
  HsmId?: string;
  EniId?: string;
  EniIp?: string;
}
export interface DeleteHsmResponse {
  HsmId?: string;
}
export interface DeleteResourcePolicyRequest {
  ResourceArn?: string;
}
export interface DeleteResourcePolicyResponse {
  ResourceArn?: string;
  Policy?: string;
}
export interface DescribeBackupsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Record<string, Array<string>>;
  Shared?: boolean;
  SortAscending?: boolean;
}
export interface DescribeBackupsResponse {
  Backups?: Array<Backup>;
  NextToken?: string;
}
export interface DescribeClustersRequest {
  Filters?: Record<string, Array<string>>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeClustersResponse {
  Clusters?: Array<Cluster>;
  NextToken?: string;
}
export interface DestinationBackup {
  CreateTimestamp?: Date | string;
  SourceRegion?: string;
  SourceBackup?: string;
  SourceCluster?: string;
}
export type EniId = string;

export type errorMessage = string;

export type ExternalAz = string;

export type ExternalSubnetMapping = Record<string, string>;
export type Field = string;

export type Filters = Record<string, Array<string>>;
export interface GetResourcePolicyRequest {
  ResourceArn?: string;
}
export interface GetResourcePolicyResponse {
  Policy?: string;
}
export interface Hsm {
  AvailabilityZone?: string;
  ClusterId?: string;
  SubnetId?: string;
  EniId?: string;
  EniIp?: string;
  EniIpV6?: string;
  HsmId: string;
  HsmType?: string;
  State?: HsmState;
  StateMessage?: string;
}
export type HsmId = string;

export type Hsms = Array<Hsm>;
export type HsmState =
  | "CREATE_IN_PROGRESS"
  | "ACTIVE"
  | "DEGRADED"
  | "DELETE_IN_PROGRESS"
  | "DELETED";
export type HsmType = string;

export interface InitializeClusterRequest {
  ClusterId: string;
  SignedCert: string;
  TrustAnchor: string;
}
export interface InitializeClusterResponse {
  State?: ClusterState;
  StateMessage?: string;
}
export type IpAddress = string;

export type IpV6Address = string;

export interface ListTagsRequest {
  ResourceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTagsResponse {
  TagList: Array<Tag>;
  NextToken?: string;
}
export type MaxSize = number;

export interface ModifyBackupAttributesRequest {
  BackupId: string;
  NeverExpires: boolean;
}
export interface ModifyBackupAttributesResponse {
  Backup?: Backup;
}
export interface ModifyClusterRequest {
  HsmType?: string;
  BackupRetentionPolicy?: BackupRetentionPolicy;
  ClusterId: string;
}
export interface ModifyClusterResponse {
  Cluster?: Cluster;
}
export type NetworkType = "IPV4" | "DUALSTACK";
export type NextToken = string;

export type PreCoPassword = string;

export interface PutResourcePolicyRequest {
  ResourceArn?: string;
  Policy?: string;
}
export interface PutResourcePolicyResponse {
  ResourceArn?: string;
  Policy?: string;
}
export type Region = string;

export type ResourceId = string;

export type ResourcePolicy = string;

export interface RestoreBackupRequest {
  BackupId: string;
}
export interface RestoreBackupResponse {
  Backup?: Backup;
}
export type SecurityGroup = string;

export type StateMessage = string;

export type CloudhsmV2String = string;

export type Strings = Array<string>;
export type SubnetId = string;

export type SubnetIds = Array<string>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceId: string;
  TagList: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type Timestamp = Date | string;

export interface UntagResourceRequest {
  ResourceId: string;
  TagKeyList: Array<string>;
}
export interface UntagResourceResponse {}
export type VpcId = string;

export declare namespace CopyBackupToRegion {
  export type Input = CopyBackupToRegionRequest;
  export type Output = CopyBackupToRegionResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError;
}

export declare namespace CreateCluster {
  export type Input = CreateClusterRequest;
  export type Output = CreateClusterResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError;
}

export declare namespace CreateHsm {
  export type Input = CreateHsmRequest;
  export type Output = CreateHsmResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError;
}

export declare namespace DeleteBackup {
  export type Input = DeleteBackupRequest;
  export type Output = DeleteBackupResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError;
}

export declare namespace DeleteCluster {
  export type Input = DeleteClusterRequest;
  export type Output = DeleteClusterResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError;
}

export declare namespace DeleteHsm {
  export type Input = DeleteHsmRequest;
  export type Output = DeleteHsmResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError;
}

export declare namespace DescribeBackups {
  export type Input = DescribeBackupsRequest;
  export type Output = DescribeBackupsResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError;
}

export declare namespace DescribeClusters {
  export type Input = DescribeClustersRequest;
  export type Output = DescribeClustersResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError;
}

export declare namespace InitializeCluster {
  export type Input = InitializeClusterRequest;
  export type Output = InitializeClusterResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError;
}

export declare namespace ListTags {
  export type Input = ListTagsRequest;
  export type Output = ListTagsResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError;
}

export declare namespace ModifyBackupAttributes {
  export type Input = ModifyBackupAttributesRequest;
  export type Output = ModifyBackupAttributesResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError;
}

export declare namespace ModifyCluster {
  export type Input = ModifyClusterRequest;
  export type Output = ModifyClusterResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError;
}

export declare namespace RestoreBackup {
  export type Input = RestoreBackupRequest;
  export type Output = RestoreBackupResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceLimitExceededException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | CloudHsmAccessDeniedException
    | CloudHsmInternalFailureException
    | CloudHsmInvalidRequestException
    | CloudHsmResourceNotFoundException
    | CloudHsmServiceException
    | CloudHsmTagException
    | CommonAwsError;
}

export type CloudHSMV2Errors =
  | CloudHsmAccessDeniedException
  | CloudHsmInternalFailureException
  | CloudHsmInvalidRequestException
  | CloudHsmResourceLimitExceededException
  | CloudHsmResourceNotFoundException
  | CloudHsmServiceException
  | CloudHsmTagException
  | CommonAwsError;

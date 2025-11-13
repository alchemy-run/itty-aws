import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class StorageGateway extends AWSServiceClient {
  activateGateway(
    input: ActivateGatewayInput,
  ): Effect.Effect<
    ActivateGatewayOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  addCache(
    input: AddCacheInput,
  ): Effect.Effect<
    AddCacheOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  addTagsToResource(
    input: AddTagsToResourceInput,
  ): Effect.Effect<
    AddTagsToResourceOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  addUploadBuffer(
    input: AddUploadBufferInput,
  ): Effect.Effect<
    AddUploadBufferOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  addWorkingStorage(
    input: AddWorkingStorageInput,
  ): Effect.Effect<
    AddWorkingStorageOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  assignTapePool(
    input: AssignTapePoolInput,
  ): Effect.Effect<
    AssignTapePoolOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  associateFileSystem(
    input: AssociateFileSystemInput,
  ): Effect.Effect<
    AssociateFileSystemOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  attachVolume(
    input: AttachVolumeInput,
  ): Effect.Effect<
    AttachVolumeOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  cancelArchival(
    input: CancelArchivalInput,
  ): Effect.Effect<
    CancelArchivalOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  cancelCacheReport(
    input: CancelCacheReportInput,
  ): Effect.Effect<
    CancelCacheReportOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  cancelRetrieval(
    input: CancelRetrievalInput,
  ): Effect.Effect<
    CancelRetrievalOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  createCachediSCSIVolume(
    input: CreateCachediSCSIVolumeInput,
  ): Effect.Effect<
    CreateCachediSCSIVolumeOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  createNFSFileShare(
    input: CreateNFSFileShareInput,
  ): Effect.Effect<
    CreateNFSFileShareOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  createSMBFileShare(
    input: CreateSMBFileShareInput,
  ): Effect.Effect<
    CreateSMBFileShareOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  createSnapshot(
    input: CreateSnapshotInput,
  ): Effect.Effect<
    CreateSnapshotOutput,
    InternalServerError | InvalidGatewayRequestException | ServiceUnavailableError | CommonAwsError
  >;
  createSnapshotFromVolumeRecoveryPoint(
    input: CreateSnapshotFromVolumeRecoveryPointInput,
  ): Effect.Effect<
    CreateSnapshotFromVolumeRecoveryPointOutput,
    InternalServerError | InvalidGatewayRequestException | ServiceUnavailableError | CommonAwsError
  >;
  createStorediSCSIVolume(
    input: CreateStorediSCSIVolumeInput,
  ): Effect.Effect<
    CreateStorediSCSIVolumeOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  createTapePool(
    input: CreateTapePoolInput,
  ): Effect.Effect<
    CreateTapePoolOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  createTapes(
    input: CreateTapesInput,
  ): Effect.Effect<
    CreateTapesOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  createTapeWithBarcode(
    input: CreateTapeWithBarcodeInput,
  ): Effect.Effect<
    CreateTapeWithBarcodeOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  deleteAutomaticTapeCreationPolicy(
    input: DeleteAutomaticTapeCreationPolicyInput,
  ): Effect.Effect<
    DeleteAutomaticTapeCreationPolicyOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  deleteBandwidthRateLimit(
    input: DeleteBandwidthRateLimitInput,
  ): Effect.Effect<
    DeleteBandwidthRateLimitOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  deleteCacheReport(
    input: DeleteCacheReportInput,
  ): Effect.Effect<
    DeleteCacheReportOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  deleteChapCredentials(
    input: DeleteChapCredentialsInput,
  ): Effect.Effect<
    DeleteChapCredentialsOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  deleteFileShare(
    input: DeleteFileShareInput,
  ): Effect.Effect<
    DeleteFileShareOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  deleteGateway(
    input: DeleteGatewayInput,
  ): Effect.Effect<
    DeleteGatewayOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  deleteSnapshotSchedule(
    input: DeleteSnapshotScheduleInput,
  ): Effect.Effect<
    DeleteSnapshotScheduleOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  deleteTape(
    input: DeleteTapeInput,
  ): Effect.Effect<
    DeleteTapeOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  deleteTapeArchive(
    input: DeleteTapeArchiveInput,
  ): Effect.Effect<
    DeleteTapeArchiveOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  deleteTapePool(
    input: DeleteTapePoolInput,
  ): Effect.Effect<
    DeleteTapePoolOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  deleteVolume(
    input: DeleteVolumeInput,
  ): Effect.Effect<
    DeleteVolumeOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeAvailabilityMonitorTest(
    input: DescribeAvailabilityMonitorTestInput,
  ): Effect.Effect<
    DescribeAvailabilityMonitorTestOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeBandwidthRateLimit(
    input: DescribeBandwidthRateLimitInput,
  ): Effect.Effect<
    DescribeBandwidthRateLimitOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeBandwidthRateLimitSchedule(
    input: DescribeBandwidthRateLimitScheduleInput,
  ): Effect.Effect<
    DescribeBandwidthRateLimitScheduleOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeCache(
    input: DescribeCacheInput,
  ): Effect.Effect<
    DescribeCacheOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeCachediSCSIVolumes(
    input: DescribeCachediSCSIVolumesInput,
  ): Effect.Effect<
    DescribeCachediSCSIVolumesOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeCacheReport(
    input: DescribeCacheReportInput,
  ): Effect.Effect<
    DescribeCacheReportOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeChapCredentials(
    input: DescribeChapCredentialsInput,
  ): Effect.Effect<
    DescribeChapCredentialsOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeFileSystemAssociations(
    input: DescribeFileSystemAssociationsInput,
  ): Effect.Effect<
    DescribeFileSystemAssociationsOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeGatewayInformation(
    input: DescribeGatewayInformationInput,
  ): Effect.Effect<
    DescribeGatewayInformationOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeMaintenanceStartTime(
    input: DescribeMaintenanceStartTimeInput,
  ): Effect.Effect<
    DescribeMaintenanceStartTimeOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeNFSFileShares(
    input: DescribeNFSFileSharesInput,
  ): Effect.Effect<
    DescribeNFSFileSharesOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeSMBFileShares(
    input: DescribeSMBFileSharesInput,
  ): Effect.Effect<
    DescribeSMBFileSharesOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeSMBSettings(
    input: DescribeSMBSettingsInput,
  ): Effect.Effect<
    DescribeSMBSettingsOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeSnapshotSchedule(
    input: DescribeSnapshotScheduleInput,
  ): Effect.Effect<
    DescribeSnapshotScheduleOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeStorediSCSIVolumes(
    input: DescribeStorediSCSIVolumesInput,
  ): Effect.Effect<
    DescribeStorediSCSIVolumesOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeTapeArchives(
    input: DescribeTapeArchivesInput,
  ): Effect.Effect<
    DescribeTapeArchivesOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeTapeRecoveryPoints(
    input: DescribeTapeRecoveryPointsInput,
  ): Effect.Effect<
    DescribeTapeRecoveryPointsOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeTapes(
    input: DescribeTapesInput,
  ): Effect.Effect<
    DescribeTapesOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeUploadBuffer(
    input: DescribeUploadBufferInput,
  ): Effect.Effect<
    DescribeUploadBufferOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeVTLDevices(
    input: DescribeVTLDevicesInput,
  ): Effect.Effect<
    DescribeVTLDevicesOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  describeWorkingStorage(
    input: DescribeWorkingStorageInput,
  ): Effect.Effect<
    DescribeWorkingStorageOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  detachVolume(
    input: DetachVolumeInput,
  ): Effect.Effect<
    DetachVolumeOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  disableGateway(
    input: DisableGatewayInput,
  ): Effect.Effect<
    DisableGatewayOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  disassociateFileSystem(
    input: DisassociateFileSystemInput,
  ): Effect.Effect<
    DisassociateFileSystemOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  evictFilesFailingUpload(
    input: EvictFilesFailingUploadInput,
  ): Effect.Effect<
    EvictFilesFailingUploadOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  joinDomain(
    input: JoinDomainInput,
  ): Effect.Effect<
    JoinDomainOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  listAutomaticTapeCreationPolicies(
    input: ListAutomaticTapeCreationPoliciesInput,
  ): Effect.Effect<
    ListAutomaticTapeCreationPoliciesOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  listCacheReports(
    input: ListCacheReportsInput,
  ): Effect.Effect<
    ListCacheReportsOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  listFileShares(
    input: ListFileSharesInput,
  ): Effect.Effect<
    ListFileSharesOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  listFileSystemAssociations(
    input: ListFileSystemAssociationsInput,
  ): Effect.Effect<
    ListFileSystemAssociationsOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  listGateways(
    input: ListGatewaysInput,
  ): Effect.Effect<
    ListGatewaysOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  listLocalDisks(
    input: ListLocalDisksInput,
  ): Effect.Effect<
    ListLocalDisksOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  listTapePools(
    input: ListTapePoolsInput,
  ): Effect.Effect<
    ListTapePoolsOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  listTapes(
    input: ListTapesInput,
  ): Effect.Effect<
    ListTapesOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  listVolumeInitiators(
    input: ListVolumeInitiatorsInput,
  ): Effect.Effect<
    ListVolumeInitiatorsOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  listVolumeRecoveryPoints(
    input: ListVolumeRecoveryPointsInput,
  ): Effect.Effect<
    ListVolumeRecoveryPointsOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  listVolumes(
    input: ListVolumesInput,
  ): Effect.Effect<
    ListVolumesOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  notifyWhenUploaded(
    input: NotifyWhenUploadedInput,
  ): Effect.Effect<
    NotifyWhenUploadedOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  refreshCache(
    input: RefreshCacheInput,
  ): Effect.Effect<
    RefreshCacheOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  removeTagsFromResource(
    input: RemoveTagsFromResourceInput,
  ): Effect.Effect<
    RemoveTagsFromResourceOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  resetCache(
    input: ResetCacheInput,
  ): Effect.Effect<
    ResetCacheOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  retrieveTapeArchive(
    input: RetrieveTapeArchiveInput,
  ): Effect.Effect<
    RetrieveTapeArchiveOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  retrieveTapeRecoveryPoint(
    input: RetrieveTapeRecoveryPointInput,
  ): Effect.Effect<
    RetrieveTapeRecoveryPointOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  setLocalConsolePassword(
    input: SetLocalConsolePasswordInput,
  ): Effect.Effect<
    SetLocalConsolePasswordOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  setSMBGuestPassword(
    input: SetSMBGuestPasswordInput,
  ): Effect.Effect<
    SetSMBGuestPasswordOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  shutdownGateway(
    input: ShutdownGatewayInput,
  ): Effect.Effect<
    ShutdownGatewayOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  startAvailabilityMonitorTest(
    input: StartAvailabilityMonitorTestInput,
  ): Effect.Effect<
    StartAvailabilityMonitorTestOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  startCacheReport(
    input: StartCacheReportInput,
  ): Effect.Effect<
    StartCacheReportOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  startGateway(
    input: StartGatewayInput,
  ): Effect.Effect<
    StartGatewayOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateAutomaticTapeCreationPolicy(
    input: UpdateAutomaticTapeCreationPolicyInput,
  ): Effect.Effect<
    UpdateAutomaticTapeCreationPolicyOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateBandwidthRateLimit(
    input: UpdateBandwidthRateLimitInput,
  ): Effect.Effect<
    UpdateBandwidthRateLimitOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateBandwidthRateLimitSchedule(
    input: UpdateBandwidthRateLimitScheduleInput,
  ): Effect.Effect<
    UpdateBandwidthRateLimitScheduleOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateChapCredentials(
    input: UpdateChapCredentialsInput,
  ): Effect.Effect<
    UpdateChapCredentialsOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateFileSystemAssociation(
    input: UpdateFileSystemAssociationInput,
  ): Effect.Effect<
    UpdateFileSystemAssociationOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateGatewayInformation(
    input: UpdateGatewayInformationInput,
  ): Effect.Effect<
    UpdateGatewayInformationOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateGatewaySoftwareNow(
    input: UpdateGatewaySoftwareNowInput,
  ): Effect.Effect<
    UpdateGatewaySoftwareNowOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateMaintenanceStartTime(
    input: UpdateMaintenanceStartTimeInput,
  ): Effect.Effect<
    UpdateMaintenanceStartTimeOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateNFSFileShare(
    input: UpdateNFSFileShareInput,
  ): Effect.Effect<
    UpdateNFSFileShareOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateSMBFileShare(
    input: UpdateSMBFileShareInput,
  ): Effect.Effect<
    UpdateSMBFileShareOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateSMBFileShareVisibility(
    input: UpdateSMBFileShareVisibilityInput,
  ): Effect.Effect<
    UpdateSMBFileShareVisibilityOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateSMBLocalGroups(
    input: UpdateSMBLocalGroupsInput,
  ): Effect.Effect<
    UpdateSMBLocalGroupsOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateSMBSecurityStrategy(
    input: UpdateSMBSecurityStrategyInput,
  ): Effect.Effect<
    UpdateSMBSecurityStrategyOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateSnapshotSchedule(
    input: UpdateSnapshotScheduleInput,
  ): Effect.Effect<
    UpdateSnapshotScheduleOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
  updateVTLDeviceType(
    input: UpdateVTLDeviceTypeInput,
  ): Effect.Effect<
    UpdateVTLDeviceTypeOutput,
    InternalServerError | InvalidGatewayRequestException | CommonAwsError
  >;
}

export interface ActivateGatewayInput {
  ActivationKey: string;
  GatewayName: string;
  GatewayTimezone: string;
  GatewayRegion: string;
  GatewayType?: string;
  TapeDriveType?: string;
  MediumChangerType?: string;
  Tags?: Array<Tag>;
}
export interface ActivateGatewayOutput {
  GatewayARN?: string;
}
export type ActivationKey = string;

export type ActiveDirectoryStatus = "ACCESS_DENIED" | "DETACHED" | "JOINED" | "JOINING" | "NETWORK_ERROR" | "TIMEOUT" | "UNKNOWN_ERROR" | "INSUFFICIENT_PERMISSIONS";
export interface AddCacheInput {
  GatewayARN: string;
  DiskIds: Array<string>;
}
export interface AddCacheOutput {
  GatewayARN?: string;
}
export interface AddTagsToResourceInput {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface AddTagsToResourceOutput {
  ResourceARN?: string;
}
export interface AddUploadBufferInput {
  GatewayARN: string;
  DiskIds: Array<string>;
}
export interface AddUploadBufferOutput {
  GatewayARN?: string;
}
export interface AddWorkingStorageInput {
  GatewayARN: string;
  DiskIds: Array<string>;
}
export interface AddWorkingStorageOutput {
  GatewayARN?: string;
}
export interface AssignTapePoolInput {
  TapeARN: string;
  PoolId: string;
  BypassGovernanceRetention?: boolean;
}
export interface AssignTapePoolOutput {
  TapeARN?: string;
}
export interface AssociateFileSystemInput {
  UserName: string;
  Password: string;
  ClientToken: string;
  GatewayARN: string;
  LocationARN: string;
  Tags?: Array<Tag>;
  AuditDestinationARN?: string;
  CacheAttributes?: CacheAttributes;
  EndpointNetworkConfiguration?: EndpointNetworkConfiguration;
}
export interface AssociateFileSystemOutput {
  FileSystemAssociationARN?: string;
}
export interface AttachVolumeInput {
  GatewayARN: string;
  TargetName?: string;
  VolumeARN: string;
  NetworkInterfaceId: string;
  DiskId?: string;
}
export interface AttachVolumeOutput {
  VolumeARN?: string;
  TargetARN?: string;
}
export type AuditDestinationARN = string;

export type Authentication = string;

export interface AutomaticTapeCreationPolicyInfo {
  AutomaticTapeCreationRules?: Array<AutomaticTapeCreationRule>;
  GatewayARN?: string;
}
export type AutomaticTapeCreationPolicyInfos = Array<AutomaticTapeCreationPolicyInfo>;
export interface AutomaticTapeCreationRule {
  TapeBarcodePrefix: string;
  PoolId: string;
  TapeSizeInBytes: number;
  MinimumNumTapes: number;
  Worm?: boolean;
}
export type AutomaticTapeCreationRules = Array<AutomaticTapeCreationRule>;
export type AutomaticUpdatePolicy = "ALL_VERSIONS" | "EMERGENCY_VERSIONS_ONLY";
export type AvailabilityMonitorTestStatus = "COMPLETE" | "FAILED" | "PENDING";
export type BandwidthDownloadRateLimit = number;

export interface BandwidthRateLimitInterval {
  StartHourOfDay: number;
  StartMinuteOfHour: number;
  EndHourOfDay: number;
  EndMinuteOfHour: number;
  DaysOfWeek: Array<number>;
  AverageUploadRateLimitInBitsPerSec?: number;
  AverageDownloadRateLimitInBitsPerSec?: number;
}
export type BandwidthRateLimitIntervals = Array<BandwidthRateLimitInterval>;
export type BandwidthType = string;

export type BandwidthUploadRateLimit = number;

export type StorageGatewayBoolean = boolean;

export type Boolean2 = boolean;

export interface CacheAttributes {
  CacheStaleTimeoutInSeconds?: number;
}
export interface CachediSCSIVolume {
  VolumeARN?: string;
  VolumeId?: string;
  VolumeType?: string;
  VolumeStatus?: string;
  VolumeAttachmentStatus?: string;
  VolumeSizeInBytes?: number;
  VolumeProgress?: number;
  SourceSnapshotId?: string;
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
  CreatedDate?: Date | string;
  VolumeUsedInBytes?: number;
  KMSKey?: string;
  TargetName?: string;
}
export type CachediSCSIVolumes = Array<CachediSCSIVolume>;
export type CacheReportARN = string;

export interface CacheReportFilter {
  Name: CacheReportFilterName;
  Values: Array<string>;
}
export type CacheReportFilterList = Array<CacheReportFilter>;
export type CacheReportFilterName = "UploadState" | "UploadFailureReason";
export type CacheReportFilterValue = string;

export type CacheReportFilterValues = Array<string>;
export interface CacheReportInfo {
  CacheReportARN?: string;
  CacheReportStatus?: CacheReportStatus;
  ReportCompletionPercent?: number;
  EndTime?: Date | string;
  Role?: string;
  FileShareARN?: string;
  LocationARN?: string;
  StartTime?: Date | string;
  InclusionFilters?: Array<CacheReportFilter>;
  ExclusionFilters?: Array<CacheReportFilter>;
  ReportName?: string;
  Tags?: Array<Tag>;
}
export type CacheReportList = Array<CacheReportInfo>;
export type CacheReportName = string;

export type CacheReportStatus = "IN_PROGRESS" | "COMPLETED" | "CANCELED" | "FAILED" | "ERROR";
export type CacheStaleTimeoutInSeconds = number;

export interface CancelArchivalInput {
  GatewayARN: string;
  TapeARN: string;
}
export interface CancelArchivalOutput {
  TapeARN?: string;
}
export interface CancelCacheReportInput {
  CacheReportARN: string;
}
export interface CancelCacheReportOutput {
  CacheReportARN?: string;
}
export interface CancelRetrievalInput {
  GatewayARN: string;
  TapeARN: string;
}
export interface CancelRetrievalOutput {
  TapeARN?: string;
}
export type CaseSensitivity = "ClientSpecified" | "CaseSensitive";
export type ChapCredentials = Array<ChapInfo>;
export interface ChapInfo {
  TargetARN?: string;
  SecretToAuthenticateInitiator?: string;
  InitiatorName?: string;
  SecretToAuthenticateTarget?: string;
}
export type ChapSecret = string;

export type ClientToken = string;

export type CloudWatchLogGroupARN = string;

export interface CreateCachediSCSIVolumeInput {
  GatewayARN: string;
  VolumeSizeInBytes: number;
  SnapshotId?: string;
  TargetName: string;
  SourceVolumeARN?: string;
  NetworkInterfaceId: string;
  ClientToken: string;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  Tags?: Array<Tag>;
}
export interface CreateCachediSCSIVolumeOutput {
  VolumeARN?: string;
  TargetARN?: string;
}
export type CreatedDate = Date | string;

export interface CreateNFSFileShareInput {
  ClientToken: string;
  NFSFileShareDefaults?: NFSFileShareDefaults;
  GatewayARN: string;
  EncryptionType?: EncryptionType;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  Role: string;
  LocationARN: string;
  DefaultStorageClass?: string;
  ObjectACL?: ObjectACL;
  ClientList?: Array<string>;
  Squash?: string;
  ReadOnly?: boolean;
  GuessMIMETypeEnabled?: boolean;
  RequesterPays?: boolean;
  Tags?: Array<Tag>;
  FileShareName?: string;
  CacheAttributes?: CacheAttributes;
  NotificationPolicy?: string;
  VPCEndpointDNSName?: string;
  BucketRegion?: string;
  AuditDestinationARN?: string;
}
export interface CreateNFSFileShareOutput {
  FileShareARN?: string;
}
export interface CreateSMBFileShareInput {
  ClientToken: string;
  GatewayARN: string;
  EncryptionType?: EncryptionType;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  Role: string;
  LocationARN: string;
  DefaultStorageClass?: string;
  ObjectACL?: ObjectACL;
  ReadOnly?: boolean;
  GuessMIMETypeEnabled?: boolean;
  RequesterPays?: boolean;
  SMBACLEnabled?: boolean;
  AccessBasedEnumeration?: boolean;
  AdminUserList?: Array<string>;
  ValidUserList?: Array<string>;
  InvalidUserList?: Array<string>;
  AuditDestinationARN?: string;
  Authentication?: string;
  CaseSensitivity?: CaseSensitivity;
  Tags?: Array<Tag>;
  FileShareName?: string;
  CacheAttributes?: CacheAttributes;
  NotificationPolicy?: string;
  VPCEndpointDNSName?: string;
  BucketRegion?: string;
  OplocksEnabled?: boolean;
}
export interface CreateSMBFileShareOutput {
  FileShareARN?: string;
}
export interface CreateSnapshotFromVolumeRecoveryPointInput {
  VolumeARN: string;
  SnapshotDescription: string;
  Tags?: Array<Tag>;
}
export interface CreateSnapshotFromVolumeRecoveryPointOutput {
  SnapshotId?: string;
  VolumeARN?: string;
  VolumeRecoveryPointTime?: string;
}
export interface CreateSnapshotInput {
  VolumeARN: string;
  SnapshotDescription: string;
  Tags?: Array<Tag>;
}
export interface CreateSnapshotOutput {
  VolumeARN?: string;
  SnapshotId?: string;
}
export interface CreateStorediSCSIVolumeInput {
  GatewayARN: string;
  DiskId: string;
  SnapshotId?: string;
  PreserveExistingData: boolean;
  TargetName: string;
  NetworkInterfaceId: string;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  Tags?: Array<Tag>;
}
export interface CreateStorediSCSIVolumeOutput {
  VolumeARN?: string;
  VolumeSizeInBytes?: number;
  TargetARN?: string;
}
export interface CreateTapePoolInput {
  PoolName: string;
  StorageClass: TapeStorageClass;
  RetentionLockType?: RetentionLockType;
  RetentionLockTimeInDays?: number;
  Tags?: Array<Tag>;
}
export interface CreateTapePoolOutput {
  PoolARN?: string;
}
export interface CreateTapesInput {
  GatewayARN: string;
  TapeSizeInBytes: number;
  ClientToken: string;
  NumTapesToCreate: number;
  TapeBarcodePrefix: string;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  PoolId?: string;
  Worm?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateTapesOutput {
  TapeARNs?: Array<string>;
}
export interface CreateTapeWithBarcodeInput {
  GatewayARN: string;
  TapeSizeInBytes: number;
  TapeBarcode: string;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  PoolId?: string;
  Worm?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateTapeWithBarcodeOutput {
  TapeARN?: string;
}
export type DayOfMonth = number;

export type DayOfWeek = number;

export type DaysOfWeek = Array<number>;
export interface DeleteAutomaticTapeCreationPolicyInput {
  GatewayARN: string;
}
export interface DeleteAutomaticTapeCreationPolicyOutput {
  GatewayARN?: string;
}
export interface DeleteBandwidthRateLimitInput {
  GatewayARN: string;
  BandwidthType: string;
}
export interface DeleteBandwidthRateLimitOutput {
  GatewayARN?: string;
}
export interface DeleteCacheReportInput {
  CacheReportARN: string;
}
export interface DeleteCacheReportOutput {
  CacheReportARN?: string;
}
export interface DeleteChapCredentialsInput {
  TargetARN: string;
  InitiatorName: string;
}
export interface DeleteChapCredentialsOutput {
  TargetARN?: string;
  InitiatorName?: string;
}
export interface DeleteFileShareInput {
  FileShareARN: string;
  ForceDelete?: boolean;
}
export interface DeleteFileShareOutput {
  FileShareARN?: string;
}
export interface DeleteGatewayInput {
  GatewayARN: string;
}
export interface DeleteGatewayOutput {
  GatewayARN?: string;
}
export interface DeleteSnapshotScheduleInput {
  VolumeARN: string;
}
export interface DeleteSnapshotScheduleOutput {
  VolumeARN?: string;
}
export interface DeleteTapeArchiveInput {
  TapeARN: string;
  BypassGovernanceRetention?: boolean;
}
export interface DeleteTapeArchiveOutput {
  TapeARN?: string;
}
export interface DeleteTapeInput {
  GatewayARN: string;
  TapeARN: string;
  BypassGovernanceRetention?: boolean;
}
export interface DeleteTapeOutput {
  TapeARN?: string;
}
export interface DeleteTapePoolInput {
  PoolARN: string;
}
export interface DeleteTapePoolOutput {
  PoolARN?: string;
}
export interface DeleteVolumeInput {
  VolumeARN: string;
}
export interface DeleteVolumeOutput {
  VolumeARN?: string;
}
export type DeprecationDate = string;

export interface DescribeAvailabilityMonitorTestInput {
  GatewayARN: string;
}
export interface DescribeAvailabilityMonitorTestOutput {
  GatewayARN?: string;
  Status?: AvailabilityMonitorTestStatus;
  StartTime?: Date | string;
}
export interface DescribeBandwidthRateLimitInput {
  GatewayARN: string;
}
export interface DescribeBandwidthRateLimitOutput {
  GatewayARN?: string;
  AverageUploadRateLimitInBitsPerSec?: number;
  AverageDownloadRateLimitInBitsPerSec?: number;
}
export interface DescribeBandwidthRateLimitScheduleInput {
  GatewayARN: string;
}
export interface DescribeBandwidthRateLimitScheduleOutput {
  GatewayARN?: string;
  BandwidthRateLimitIntervals?: Array<BandwidthRateLimitInterval>;
}
export interface DescribeCachediSCSIVolumesInput {
  VolumeARNs: Array<string>;
}
export interface DescribeCachediSCSIVolumesOutput {
  CachediSCSIVolumes?: Array<CachediSCSIVolume>;
}
export interface DescribeCacheInput {
  GatewayARN: string;
}
export interface DescribeCacheOutput {
  GatewayARN?: string;
  DiskIds?: Array<string>;
  CacheAllocatedInBytes?: number;
  CacheUsedPercentage?: number;
  CacheDirtyPercentage?: number;
  CacheHitPercentage?: number;
  CacheMissPercentage?: number;
}
export interface DescribeCacheReportInput {
  CacheReportARN: string;
}
export interface DescribeCacheReportOutput {
  CacheReportInfo?: CacheReportInfo;
}
export interface DescribeChapCredentialsInput {
  TargetARN: string;
}
export interface DescribeChapCredentialsOutput {
  ChapCredentials?: Array<ChapInfo>;
}
export interface DescribeFileSystemAssociationsInput {
  FileSystemAssociationARNList: Array<string>;
}
export interface DescribeFileSystemAssociationsOutput {
  FileSystemAssociationInfoList?: Array<FileSystemAssociationInfo>;
}
export interface DescribeGatewayInformationInput {
  GatewayARN: string;
}
export interface DescribeGatewayInformationOutput {
  GatewayARN?: string;
  GatewayId?: string;
  GatewayName?: string;
  GatewayTimezone?: string;
  GatewayState?: string;
  GatewayNetworkInterfaces?: Array<NetworkInterface>;
  GatewayType?: string;
  NextUpdateAvailabilityDate?: string;
  LastSoftwareUpdate?: string;
  Ec2InstanceId?: string;
  Ec2InstanceRegion?: string;
  Tags?: Array<Tag>;
  VPCEndpoint?: string;
  CloudWatchLogGroupARN?: string;
  HostEnvironment?: HostEnvironment;
  EndpointType?: string;
  SoftwareUpdatesEndDate?: string;
  DeprecationDate?: string;
  GatewayCapacity?: GatewayCapacity;
  SupportedGatewayCapacities?: Array<GatewayCapacity>;
  HostEnvironmentId?: string;
  SoftwareVersion?: string;
}
export interface DescribeMaintenanceStartTimeInput {
  GatewayARN: string;
}
export interface DescribeMaintenanceStartTimeOutput {
  GatewayARN?: string;
  HourOfDay?: number;
  MinuteOfHour?: number;
  DayOfWeek?: number;
  DayOfMonth?: number;
  Timezone?: string;
  SoftwareUpdatePreferences?: SoftwareUpdatePreferences;
}
export interface DescribeNFSFileSharesInput {
  FileShareARNList: Array<string>;
}
export interface DescribeNFSFileSharesOutput {
  NFSFileShareInfoList?: Array<NFSFileShareInfo>;
}
export interface DescribeSMBFileSharesInput {
  FileShareARNList: Array<string>;
}
export interface DescribeSMBFileSharesOutput {
  SMBFileShareInfoList?: Array<SMBFileShareInfo>;
}
export interface DescribeSMBSettingsInput {
  GatewayARN: string;
}
export interface DescribeSMBSettingsOutput {
  GatewayARN?: string;
  DomainName?: string;
  ActiveDirectoryStatus?: ActiveDirectoryStatus;
  SMBGuestPasswordSet?: boolean;
  SMBSecurityStrategy?: SMBSecurityStrategy;
  FileSharesVisible?: boolean;
  SMBLocalGroups?: SMBLocalGroups;
}
export interface DescribeSnapshotScheduleInput {
  VolumeARN: string;
}
export interface DescribeSnapshotScheduleOutput {
  VolumeARN?: string;
  StartAt?: number;
  RecurrenceInHours?: number;
  Description?: string;
  Timezone?: string;
  Tags?: Array<Tag>;
}
export interface DescribeStorediSCSIVolumesInput {
  VolumeARNs: Array<string>;
}
export interface DescribeStorediSCSIVolumesOutput {
  StorediSCSIVolumes?: Array<StorediSCSIVolume>;
}
export interface DescribeTapeArchivesInput {
  TapeARNs?: Array<string>;
  Marker?: string;
  Limit?: number;
}
export interface DescribeTapeArchivesOutput {
  TapeArchives?: Array<TapeArchive>;
  Marker?: string;
}
export interface DescribeTapeRecoveryPointsInput {
  GatewayARN: string;
  Marker?: string;
  Limit?: number;
}
export interface DescribeTapeRecoveryPointsOutput {
  GatewayARN?: string;
  TapeRecoveryPointInfos?: Array<TapeRecoveryPointInfo>;
  Marker?: string;
}
export interface DescribeTapesInput {
  GatewayARN: string;
  TapeARNs?: Array<string>;
  Marker?: string;
  Limit?: number;
}
export interface DescribeTapesOutput {
  Tapes?: Array<Tape>;
  Marker?: string;
}
export interface DescribeUploadBufferInput {
  GatewayARN: string;
}
export interface DescribeUploadBufferOutput {
  GatewayARN?: string;
  DiskIds?: Array<string>;
  UploadBufferUsedInBytes?: number;
  UploadBufferAllocatedInBytes?: number;
}
export interface DescribeVTLDevicesInput {
  GatewayARN: string;
  VTLDeviceARNs?: Array<string>;
  Marker?: string;
  Limit?: number;
}
export interface DescribeVTLDevicesOutput {
  GatewayARN?: string;
  VTLDevices?: Array<VTLDevice>;
  Marker?: string;
}
export interface DescribeWorkingStorageInput {
  GatewayARN: string;
}
export interface DescribeWorkingStorageOutput {
  GatewayARN?: string;
  DiskIds?: Array<string>;
  WorkingStorageUsedInBytes?: number;
  WorkingStorageAllocatedInBytes?: number;
}
export type Description = string;

export interface DetachVolumeInput {
  VolumeARN: string;
  ForceDetach?: boolean;
}
export interface DetachVolumeOutput {
  VolumeARN?: string;
}
export interface DeviceiSCSIAttributes {
  TargetARN?: string;
  NetworkInterfaceId?: string;
  NetworkInterfacePort?: number;
  ChapEnabled?: boolean;
}
export type DeviceType = string;

export interface DisableGatewayInput {
  GatewayARN: string;
}
export interface DisableGatewayOutput {
  GatewayARN?: string;
}
export interface DisassociateFileSystemInput {
  FileSystemAssociationARN: string;
  ForceDelete?: boolean;
}
export interface DisassociateFileSystemOutput {
  FileSystemAssociationARN?: string;
}
export interface Disk {
  DiskId?: string;
  DiskPath?: string;
  DiskNode?: string;
  DiskStatus?: string;
  DiskSizeInBytes?: number;
  DiskAllocationType?: string;
  DiskAllocationResource?: string;
  DiskAttributeList?: Array<string>;
}
export type DiskAllocationType = string;

export type DiskAttribute = string;

export type DiskAttributeList = Array<string>;
export type DiskId = string;

export type DiskIds = Array<string>;
export type Disks = Array<Disk>;
export type DNSHostName = string;

export type DomainName = string;

export type DomainUserName = string;

export type DomainUserPassword = string;

export type double = number;

export type DoubleObject = number;

export type Ec2InstanceId = string;

export type Ec2InstanceRegion = string;

export type EncryptionType = "SseS3" | "SseKms" | "DsseKms";
export interface EndpointNetworkConfiguration {
  IpAddresses?: Array<string>;
}
export type EndpointType = string;

export type ErrorCode = "ActivationKeyExpired" | "ActivationKeyInvalid" | "ActivationKeyNotFound" | "GatewayInternalError" | "GatewayNotConnected" | "GatewayNotFound" | "GatewayProxyNetworkConnectionBusy" | "AuthenticationFailure" | "BandwidthThrottleScheduleNotFound" | "Blocked" | "CannotExportSnapshot" | "ChapCredentialNotFound" | "DiskAlreadyAllocated" | "DiskDoesNotExist" | "DiskSizeGreaterThanVolumeMaxSize" | "DiskSizeLessThanVolumeSize" | "DiskSizeNotGigAligned" | "DuplicateCertificateInfo" | "DuplicateSchedule" | "EndpointNotFound" | "IAMNotSupported" | "InitiatorInvalid" | "InitiatorNotFound" | "InternalError" | "InvalidGateway" | "InvalidEndpoint" | "InvalidParameters" | "InvalidSchedule" | "LocalStorageLimitExceeded" | "LunAlreadyAllocated " | "LunInvalid" | "JoinDomainInProgress" | "MaximumContentLengthExceeded" | "MaximumTapeCartridgeCountExceeded" | "MaximumVolumeCountExceeded" | "NetworkConfigurationChanged" | "NoDisksAvailable" | "NotImplemented" | "NotSupported" | "OperationAborted" | "OutdatedGateway" | "ParametersNotImplemented" | "RegionInvalid" | "RequestTimeout" | "ServiceUnavailable" | "SnapshotDeleted" | "SnapshotIdInvalid" | "SnapshotInProgress" | "SnapshotNotFound" | "SnapshotScheduleNotFound" | "StagingAreaFull" | "StorageFailure" | "TapeCartridgeNotFound" | "TargetAlreadyExists" | "TargetInvalid" | "TargetNotFound" | "UnauthorizedOperation" | "VolumeAlreadyExists" | "VolumeIdInvalid" | "VolumeInUse" | "VolumeNotFound" | "VolumeNotReady";
export type errorDetails = Record<string, string>;
export interface EvictFilesFailingUploadInput {
  FileShareARN: string;
  ForceRemove?: boolean;
}
export interface EvictFilesFailingUploadOutput {
  NotificationId?: string;
}
export type FileShareARN = string;

export type FileShareARNList = Array<string>;
export type FileShareClientList = Array<string>;
export type FileShareId = string;

export interface FileShareInfo {
  FileShareType?: FileShareType;
  FileShareARN?: string;
  FileShareId?: string;
  FileShareStatus?: string;
  GatewayARN?: string;
}
export type FileShareInfoList = Array<FileShareInfo>;
export type FileShareName = string;

export type FileShareStatus = string;

export type FileShareType = "NFS" | "SMB";
export type FileSystemAssociationARN = string;

export type FileSystemAssociationARNList = Array<string>;
export type FileSystemAssociationId = string;

export interface FileSystemAssociationInfo {
  FileSystemAssociationARN?: string;
  LocationARN?: string;
  FileSystemAssociationStatus?: string;
  AuditDestinationARN?: string;
  GatewayARN?: string;
  Tags?: Array<Tag>;
  CacheAttributes?: CacheAttributes;
  EndpointNetworkConfiguration?: EndpointNetworkConfiguration;
  FileSystemAssociationStatusDetails?: Array<FileSystemAssociationStatusDetail>;
}
export type FileSystemAssociationInfoList = Array<FileSystemAssociationInfo>;
export type FileSystemAssociationStatus = string;

export interface FileSystemAssociationStatusDetail {
  ErrorCode?: string;
}
export type FileSystemAssociationStatusDetails = Array<FileSystemAssociationStatusDetail>;
export interface FileSystemAssociationSummary {
  FileSystemAssociationId?: string;
  FileSystemAssociationARN?: string;
  FileSystemAssociationStatus?: string;
  GatewayARN?: string;
}
export type FileSystemAssociationSummaryList = Array<FileSystemAssociationSummary>;
export type FileSystemAssociationSyncErrorCode = string;

export type FileSystemLocationARN = string;

export type Folder = string;

export type FolderList = Array<string>;
export type GatewayARN = string;

export type GatewayCapacity = "Small" | "Medium" | "Large";
export type GatewayId = string;

export interface GatewayInfo {
  GatewayId?: string;
  GatewayARN?: string;
  GatewayType?: string;
  GatewayOperationalState?: string;
  GatewayName?: string;
  Ec2InstanceId?: string;
  Ec2InstanceRegion?: string;
  HostEnvironment?: HostEnvironment;
  HostEnvironmentId?: string;
  DeprecationDate?: string;
  SoftwareVersion?: string;
}
export type GatewayName = string;

export type GatewayNetworkInterfaces = Array<NetworkInterface>;
export type GatewayOperationalState = string;

export type Gateways = Array<GatewayInfo>;
export type GatewayState = string;

export type GatewayTimezone = string;

export type GatewayType = string;

export type Host = string;

export type HostEnvironment = "VMWARE" | "HYPER-V" | "EC2" | "KVM" | "OTHER" | "SNOWBALL";
export type HostEnvironmentId = string;

export type Hosts = Array<string>;
export type HourOfDay = number;

export type Initiator = string;

export type Initiators = Array<string>;
export type integer = number;

export declare class InternalServerError extends EffectData.TaggedError(
  "InternalServerError",
)<{
  readonly message?: string;
  readonly error?: StorageGatewayError;
}> {}
export declare class InvalidGatewayRequestException extends EffectData.TaggedError(
  "InvalidGatewayRequestException",
)<{
  readonly message?: string;
  readonly error?: StorageGatewayError;
}> {}
export type IpAddressList = Array<string>;
export type IPV4Address = string;

export type Ipv4OrIpv6AddressCIDR = string;

export type IqnName = string;

export interface JoinDomainInput {
  GatewayARN: string;
  DomainName: string;
  OrganizationalUnit?: string;
  DomainControllers?: Array<string>;
  TimeoutInSeconds?: number;
  UserName: string;
  Password: string;
}
export interface JoinDomainOutput {
  GatewayARN?: string;
  ActiveDirectoryStatus?: ActiveDirectoryStatus;
}
export type KMSKey = string;

export type LastSoftwareUpdate = string;

export interface ListAutomaticTapeCreationPoliciesInput {
  GatewayARN?: string;
}
export interface ListAutomaticTapeCreationPoliciesOutput {
  AutomaticTapeCreationPolicyInfos?: Array<AutomaticTapeCreationPolicyInfo>;
}
export interface ListCacheReportsInput {
  Marker?: string;
}
export interface ListCacheReportsOutput {
  CacheReportList?: Array<CacheReportInfo>;
  Marker?: string;
}
export interface ListFileSharesInput {
  GatewayARN?: string;
  Limit?: number;
  Marker?: string;
}
export interface ListFileSharesOutput {
  Marker?: string;
  NextMarker?: string;
  FileShareInfoList?: Array<FileShareInfo>;
}
export interface ListFileSystemAssociationsInput {
  GatewayARN?: string;
  Limit?: number;
  Marker?: string;
}
export interface ListFileSystemAssociationsOutput {
  Marker?: string;
  NextMarker?: string;
  FileSystemAssociationSummaryList?: Array<FileSystemAssociationSummary>;
}
export interface ListGatewaysInput {
  Marker?: string;
  Limit?: number;
}
export interface ListGatewaysOutput {
  Gateways?: Array<GatewayInfo>;
  Marker?: string;
}
export interface ListLocalDisksInput {
  GatewayARN: string;
}
export interface ListLocalDisksOutput {
  GatewayARN?: string;
  Disks?: Array<Disk>;
}
export interface ListTagsForResourceInput {
  ResourceARN: string;
  Marker?: string;
  Limit?: number;
}
export interface ListTagsForResourceOutput {
  ResourceARN?: string;
  Marker?: string;
  Tags?: Array<Tag>;
}
export interface ListTapePoolsInput {
  PoolARNs?: Array<string>;
  Marker?: string;
  Limit?: number;
}
export interface ListTapePoolsOutput {
  PoolInfos?: Array<PoolInfo>;
  Marker?: string;
}
export interface ListTapesInput {
  TapeARNs?: Array<string>;
  Marker?: string;
  Limit?: number;
}
export interface ListTapesOutput {
  TapeInfos?: Array<TapeInfo>;
  Marker?: string;
}
export interface ListVolumeInitiatorsInput {
  VolumeARN: string;
}
export interface ListVolumeInitiatorsOutput {
  Initiators?: Array<string>;
}
export interface ListVolumeRecoveryPointsInput {
  GatewayARN: string;
}
export interface ListVolumeRecoveryPointsOutput {
  GatewayARN?: string;
  VolumeRecoveryPointInfos?: Array<VolumeRecoveryPointInfo>;
}
export interface ListVolumesInput {
  GatewayARN?: string;
  Marker?: string;
  Limit?: number;
}
export interface ListVolumesOutput {
  GatewayARN?: string;
  Marker?: string;
  VolumeInfos?: Array<VolumeInfo>;
}
export type LocalConsolePassword = string;

export type LocationARN = string;

export type long = number;

export type Marker = string;

export type MediumChangerType = string;

export type MinimumNumTapes = number;

export type MinuteOfHour = number;

export interface NetworkInterface {
  Ipv4Address?: string;
  MacAddress?: string;
  Ipv6Address?: string;
}
export type NetworkInterfaceId = string;

export type NextUpdateAvailabilityDate = string;

export interface NFSFileShareDefaults {
  FileMode?: string;
  DirectoryMode?: string;
  GroupId?: number;
  OwnerId?: number;
}
export interface NFSFileShareInfo {
  NFSFileShareDefaults?: NFSFileShareDefaults;
  FileShareARN?: string;
  FileShareId?: string;
  FileShareStatus?: string;
  GatewayARN?: string;
  EncryptionType?: EncryptionType;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  Path?: string;
  Role?: string;
  LocationARN?: string;
  DefaultStorageClass?: string;
  ObjectACL?: ObjectACL;
  ClientList?: Array<string>;
  Squash?: string;
  ReadOnly?: boolean;
  GuessMIMETypeEnabled?: boolean;
  RequesterPays?: boolean;
  Tags?: Array<Tag>;
  FileShareName?: string;
  CacheAttributes?: CacheAttributes;
  NotificationPolicy?: string;
  VPCEndpointDNSName?: string;
  BucketRegion?: string;
  AuditDestinationARN?: string;
}
export type NFSFileShareInfoList = Array<NFSFileShareInfo>;
export type NotificationId = string;

export type NotificationPolicy = string;

export interface NotifyWhenUploadedInput {
  FileShareARN: string;
}
export interface NotifyWhenUploadedOutput {
  FileShareARN?: string;
  NotificationId?: string;
}
export type NumTapesToCreate = number;

export type ObjectACL = "private" | "public-read" | "public-read-write" | "authenticated-read" | "bucket-owner-read" | "bucket-owner-full-control" | "aws-exec-read";
export type OrganizationalUnit = string;

export type Path = string;

export type PermissionId = number;

export type PermissionMode = string;

export type PoolARN = string;

export type PoolARNs = Array<string>;
export type PoolId = string;

export interface PoolInfo {
  PoolARN?: string;
  PoolName?: string;
  StorageClass?: TapeStorageClass;
  RetentionLockType?: RetentionLockType;
  RetentionLockTimeInDays?: number;
  PoolStatus?: PoolStatus;
}
export type PoolInfos = Array<PoolInfo>;
export type PoolName = string;

export type PoolStatus = "ACTIVE" | "DELETED";
export type PositiveIntObject = number;

export type RecurrenceInHours = number;

export interface RefreshCacheInput {
  FileShareARN: string;
  FolderList?: Array<string>;
  Recursive?: boolean;
}
export interface RefreshCacheOutput {
  FileShareARN?: string;
  NotificationId?: string;
}
export type RegionId = string;

export interface RemoveTagsFromResourceInput {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface RemoveTagsFromResourceOutput {
  ResourceARN?: string;
}
export type ReportCompletionPercent = number;

export interface ResetCacheInput {
  GatewayARN: string;
}
export interface ResetCacheOutput {
  GatewayARN?: string;
}
export type ResourceARN = string;

export type RetentionLockTimeInDays = number;

export type RetentionLockType = "COMPLIANCE" | "GOVERNANCE" | "NONE";
export interface RetrieveTapeArchiveInput {
  TapeARN: string;
  GatewayARN: string;
}
export interface RetrieveTapeArchiveOutput {
  TapeARN?: string;
}
export interface RetrieveTapeRecoveryPointInput {
  TapeARN: string;
  GatewayARN: string;
}
export interface RetrieveTapeRecoveryPointOutput {
  TapeARN?: string;
}
export type Role = string;

export declare class ServiceUnavailableError extends EffectData.TaggedError(
  "ServiceUnavailableError",
)<{
  readonly message?: string;
  readonly error?: StorageGatewayError;
}> {}
export interface SetLocalConsolePasswordInput {
  GatewayARN: string;
  LocalConsolePassword: string;
}
export interface SetLocalConsolePasswordOutput {
  GatewayARN?: string;
}
export interface SetSMBGuestPasswordInput {
  GatewayARN: string;
  Password: string;
}
export interface SetSMBGuestPasswordOutput {
  GatewayARN?: string;
}
export interface ShutdownGatewayInput {
  GatewayARN: string;
}
export interface ShutdownGatewayOutput {
  GatewayARN?: string;
}
export interface SMBFileShareInfo {
  FileShareARN?: string;
  FileShareId?: string;
  FileShareStatus?: string;
  GatewayARN?: string;
  EncryptionType?: EncryptionType;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  Path?: string;
  Role?: string;
  LocationARN?: string;
  DefaultStorageClass?: string;
  ObjectACL?: ObjectACL;
  ReadOnly?: boolean;
  GuessMIMETypeEnabled?: boolean;
  RequesterPays?: boolean;
  SMBACLEnabled?: boolean;
  AccessBasedEnumeration?: boolean;
  AdminUserList?: Array<string>;
  ValidUserList?: Array<string>;
  InvalidUserList?: Array<string>;
  AuditDestinationARN?: string;
  Authentication?: string;
  CaseSensitivity?: CaseSensitivity;
  Tags?: Array<Tag>;
  FileShareName?: string;
  CacheAttributes?: CacheAttributes;
  NotificationPolicy?: string;
  VPCEndpointDNSName?: string;
  BucketRegion?: string;
  OplocksEnabled?: boolean;
}
export type SMBFileShareInfoList = Array<SMBFileShareInfo>;
export type SMBGuestPassword = string;

export interface SMBLocalGroups {
  GatewayAdmins?: Array<string>;
}
export type SMBSecurityStrategy = "ClientSpecified" | "MandatorySigning" | "MandatoryEncryption" | "MandatoryEncryptionNoAes128";
export type SnapshotDescription = string;

export type SnapshotId = string;

export interface SoftwareUpdatePreferences {
  AutomaticUpdatePolicy?: AutomaticUpdatePolicy;
}
export type SoftwareUpdatesEndDate = string;

export type SoftwareVersion = string;

export type Squash = string;

export interface StartAvailabilityMonitorTestInput {
  GatewayARN: string;
}
export interface StartAvailabilityMonitorTestOutput {
  GatewayARN?: string;
}
export interface StartCacheReportInput {
  FileShareARN: string;
  Role: string;
  LocationARN: string;
  BucketRegion: string;
  VPCEndpointDNSName?: string;
  InclusionFilters?: Array<CacheReportFilter>;
  ExclusionFilters?: Array<CacheReportFilter>;
  ClientToken: string;
  Tags?: Array<Tag>;
}
export interface StartCacheReportOutput {
  CacheReportARN?: string;
}
export interface StartGatewayInput {
  GatewayARN: string;
}
export interface StartGatewayOutput {
  GatewayARN?: string;
}
export type StorageClass = string;

export interface StorageGatewayError {
  errorCode?: ErrorCode;
  errorDetails?: Record<string, string>;
}
export interface StorediSCSIVolume {
  VolumeARN?: string;
  VolumeId?: string;
  VolumeType?: string;
  VolumeStatus?: string;
  VolumeAttachmentStatus?: string;
  VolumeSizeInBytes?: number;
  VolumeProgress?: number;
  VolumeDiskId?: string;
  SourceSnapshotId?: string;
  PreservedExistingData?: boolean;
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
  CreatedDate?: Date | string;
  VolumeUsedInBytes?: number;
  KMSKey?: string;
  TargetName?: string;
}
export type StorediSCSIVolumes = Array<StorediSCSIVolume>;
export type StorageGatewaystring = string;

export type SupportedGatewayCapacities = Array<GatewayCapacity>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export type Tags = Array<Tag>;
export type TagValue = string;

export interface Tape {
  TapeARN?: string;
  TapeBarcode?: string;
  TapeCreatedDate?: Date | string;
  TapeSizeInBytes?: number;
  TapeStatus?: string;
  VTLDevice?: string;
  Progress?: number;
  TapeUsedInBytes?: number;
  KMSKey?: string;
  PoolId?: string;
  Worm?: boolean;
  RetentionStartDate?: Date | string;
  PoolEntryDate?: Date | string;
}
export interface TapeArchive {
  TapeARN?: string;
  TapeBarcode?: string;
  TapeCreatedDate?: Date | string;
  TapeSizeInBytes?: number;
  CompletionTime?: Date | string;
  RetrievedTo?: string;
  TapeStatus?: string;
  TapeUsedInBytes?: number;
  KMSKey?: string;
  PoolId?: string;
  Worm?: boolean;
  RetentionStartDate?: Date | string;
  PoolEntryDate?: Date | string;
}
export type TapeArchives = Array<TapeArchive>;
export type TapeArchiveStatus = string;

export type TapeARN = string;

export type TapeARNs = Array<string>;
export type TapeBarcode = string;

export type TapeBarcodePrefix = string;

export type TapeDriveType = string;

export interface TapeInfo {
  TapeARN?: string;
  TapeBarcode?: string;
  TapeSizeInBytes?: number;
  TapeStatus?: string;
  GatewayARN?: string;
  PoolId?: string;
  RetentionStartDate?: Date | string;
  PoolEntryDate?: Date | string;
}
export type TapeInfos = Array<TapeInfo>;
export interface TapeRecoveryPointInfo {
  TapeARN?: string;
  TapeRecoveryPointTime?: Date | string;
  TapeSizeInBytes?: number;
  TapeStatus?: string;
}
export type TapeRecoveryPointInfos = Array<TapeRecoveryPointInfo>;
export type TapeRecoveryPointStatus = string;

export type Tapes = Array<Tape>;
export type TapeSize = number;

export type TapeStatus = string;

export type TapeStorageClass = "DEEP_ARCHIVE" | "GLACIER";
export type TapeUsage = number;

export type TargetARN = string;

export type TargetName = string;

export type Time = Date | string;

export type TimeoutInSeconds = number;

export interface UpdateAutomaticTapeCreationPolicyInput {
  AutomaticTapeCreationRules: Array<AutomaticTapeCreationRule>;
  GatewayARN: string;
}
export interface UpdateAutomaticTapeCreationPolicyOutput {
  GatewayARN?: string;
}
export interface UpdateBandwidthRateLimitInput {
  GatewayARN: string;
  AverageUploadRateLimitInBitsPerSec?: number;
  AverageDownloadRateLimitInBitsPerSec?: number;
}
export interface UpdateBandwidthRateLimitOutput {
  GatewayARN?: string;
}
export interface UpdateBandwidthRateLimitScheduleInput {
  GatewayARN: string;
  BandwidthRateLimitIntervals: Array<BandwidthRateLimitInterval>;
}
export interface UpdateBandwidthRateLimitScheduleOutput {
  GatewayARN?: string;
}
export interface UpdateChapCredentialsInput {
  TargetARN: string;
  SecretToAuthenticateInitiator: string;
  InitiatorName: string;
  SecretToAuthenticateTarget?: string;
}
export interface UpdateChapCredentialsOutput {
  TargetARN?: string;
  InitiatorName?: string;
}
export interface UpdateFileSystemAssociationInput {
  FileSystemAssociationARN: string;
  UserName?: string;
  Password?: string;
  AuditDestinationARN?: string;
  CacheAttributes?: CacheAttributes;
}
export interface UpdateFileSystemAssociationOutput {
  FileSystemAssociationARN?: string;
}
export interface UpdateGatewayInformationInput {
  GatewayARN: string;
  GatewayName?: string;
  GatewayTimezone?: string;
  CloudWatchLogGroupARN?: string;
  GatewayCapacity?: GatewayCapacity;
}
export interface UpdateGatewayInformationOutput {
  GatewayARN?: string;
  GatewayName?: string;
}
export interface UpdateGatewaySoftwareNowInput {
  GatewayARN: string;
}
export interface UpdateGatewaySoftwareNowOutput {
  GatewayARN?: string;
}
export interface UpdateMaintenanceStartTimeInput {
  GatewayARN: string;
  HourOfDay?: number;
  MinuteOfHour?: number;
  DayOfWeek?: number;
  DayOfMonth?: number;
  SoftwareUpdatePreferences?: SoftwareUpdatePreferences;
}
export interface UpdateMaintenanceStartTimeOutput {
  GatewayARN?: string;
}
export interface UpdateNFSFileShareInput {
  FileShareARN: string;
  EncryptionType?: EncryptionType;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  NFSFileShareDefaults?: NFSFileShareDefaults;
  DefaultStorageClass?: string;
  ObjectACL?: ObjectACL;
  ClientList?: Array<string>;
  Squash?: string;
  ReadOnly?: boolean;
  GuessMIMETypeEnabled?: boolean;
  RequesterPays?: boolean;
  FileShareName?: string;
  CacheAttributes?: CacheAttributes;
  NotificationPolicy?: string;
  AuditDestinationARN?: string;
}
export interface UpdateNFSFileShareOutput {
  FileShareARN?: string;
}
export interface UpdateSMBFileShareInput {
  FileShareARN: string;
  EncryptionType?: EncryptionType;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  DefaultStorageClass?: string;
  ObjectACL?: ObjectACL;
  ReadOnly?: boolean;
  GuessMIMETypeEnabled?: boolean;
  RequesterPays?: boolean;
  SMBACLEnabled?: boolean;
  AccessBasedEnumeration?: boolean;
  AdminUserList?: Array<string>;
  ValidUserList?: Array<string>;
  InvalidUserList?: Array<string>;
  AuditDestinationARN?: string;
  CaseSensitivity?: CaseSensitivity;
  FileShareName?: string;
  CacheAttributes?: CacheAttributes;
  NotificationPolicy?: string;
  OplocksEnabled?: boolean;
}
export interface UpdateSMBFileShareOutput {
  FileShareARN?: string;
}
export interface UpdateSMBFileShareVisibilityInput {
  GatewayARN: string;
  FileSharesVisible: boolean;
}
export interface UpdateSMBFileShareVisibilityOutput {
  GatewayARN?: string;
}
export interface UpdateSMBLocalGroupsInput {
  GatewayARN: string;
  SMBLocalGroups: SMBLocalGroups;
}
export interface UpdateSMBLocalGroupsOutput {
  GatewayARN?: string;
}
export interface UpdateSMBSecurityStrategyInput {
  GatewayARN: string;
  SMBSecurityStrategy: SMBSecurityStrategy;
}
export interface UpdateSMBSecurityStrategyOutput {
  GatewayARN?: string;
}
export interface UpdateSnapshotScheduleInput {
  VolumeARN: string;
  StartAt: number;
  RecurrenceInHours: number;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface UpdateSnapshotScheduleOutput {
  VolumeARN?: string;
}
export interface UpdateVTLDeviceTypeInput {
  VTLDeviceARN: string;
  DeviceType: string;
}
export interface UpdateVTLDeviceTypeOutput {
  VTLDeviceARN?: string;
}
export type UserList = Array<string>;
export type UserListUser = string;

export type VolumeARN = string;

export type VolumeARNs = Array<string>;
export type VolumeAttachmentStatus = string;

export type VolumeId = string;

export interface VolumeInfo {
  VolumeARN?: string;
  VolumeId?: string;
  GatewayARN?: string;
  GatewayId?: string;
  VolumeType?: string;
  VolumeSizeInBytes?: number;
  VolumeAttachmentStatus?: string;
}
export type VolumeInfos = Array<VolumeInfo>;
export interface VolumeiSCSIAttributes {
  TargetARN?: string;
  NetworkInterfaceId?: string;
  NetworkInterfacePort?: number;
  LunNumber?: number;
  ChapEnabled?: boolean;
}
export interface VolumeRecoveryPointInfo {
  VolumeARN?: string;
  VolumeSizeInBytes?: number;
  VolumeUsageInBytes?: number;
  VolumeRecoveryPointTime?: string;
}
export type VolumeRecoveryPointInfos = Array<VolumeRecoveryPointInfo>;
export type VolumeStatus = string;

export type VolumeType = string;

export type VolumeUsedInBytes = number;

export interface VTLDevice {
  VTLDeviceARN?: string;
  VTLDeviceType?: string;
  VTLDeviceVendor?: string;
  VTLDeviceProductIdentifier?: string;
  DeviceiSCSIAttributes?: DeviceiSCSIAttributes;
}
export type VTLDeviceARN = string;

export type VTLDeviceARNs = Array<string>;
export type VTLDeviceProductIdentifier = string;

export type VTLDevices = Array<VTLDevice>;
export type VTLDeviceType = string;

export type VTLDeviceVendor = string;

export declare namespace ActivateGateway {
  export type Input = ActivateGatewayInput;
  export type Output = ActivateGatewayOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace AddCache {
  export type Input = AddCacheInput;
  export type Output = AddCacheOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace AddTagsToResource {
  export type Input = AddTagsToResourceInput;
  export type Output = AddTagsToResourceOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace AddUploadBuffer {
  export type Input = AddUploadBufferInput;
  export type Output = AddUploadBufferOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace AddWorkingStorage {
  export type Input = AddWorkingStorageInput;
  export type Output = AddWorkingStorageOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace AssignTapePool {
  export type Input = AssignTapePoolInput;
  export type Output = AssignTapePoolOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace AssociateFileSystem {
  export type Input = AssociateFileSystemInput;
  export type Output = AssociateFileSystemOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace AttachVolume {
  export type Input = AttachVolumeInput;
  export type Output = AttachVolumeOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace CancelArchival {
  export type Input = CancelArchivalInput;
  export type Output = CancelArchivalOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace CancelCacheReport {
  export type Input = CancelCacheReportInput;
  export type Output = CancelCacheReportOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace CancelRetrieval {
  export type Input = CancelRetrievalInput;
  export type Output = CancelRetrievalOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace CreateCachediSCSIVolume {
  export type Input = CreateCachediSCSIVolumeInput;
  export type Output = CreateCachediSCSIVolumeOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace CreateNFSFileShare {
  export type Input = CreateNFSFileShareInput;
  export type Output = CreateNFSFileShareOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace CreateSMBFileShare {
  export type Input = CreateSMBFileShareInput;
  export type Output = CreateSMBFileShareOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace CreateSnapshot {
  export type Input = CreateSnapshotInput;
  export type Output = CreateSnapshotOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | ServiceUnavailableError
    | CommonAwsError;
}

export declare namespace CreateSnapshotFromVolumeRecoveryPoint {
  export type Input = CreateSnapshotFromVolumeRecoveryPointInput;
  export type Output = CreateSnapshotFromVolumeRecoveryPointOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | ServiceUnavailableError
    | CommonAwsError;
}

export declare namespace CreateStorediSCSIVolume {
  export type Input = CreateStorediSCSIVolumeInput;
  export type Output = CreateStorediSCSIVolumeOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace CreateTapePool {
  export type Input = CreateTapePoolInput;
  export type Output = CreateTapePoolOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace CreateTapes {
  export type Input = CreateTapesInput;
  export type Output = CreateTapesOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace CreateTapeWithBarcode {
  export type Input = CreateTapeWithBarcodeInput;
  export type Output = CreateTapeWithBarcodeOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DeleteAutomaticTapeCreationPolicy {
  export type Input = DeleteAutomaticTapeCreationPolicyInput;
  export type Output = DeleteAutomaticTapeCreationPolicyOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DeleteBandwidthRateLimit {
  export type Input = DeleteBandwidthRateLimitInput;
  export type Output = DeleteBandwidthRateLimitOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DeleteCacheReport {
  export type Input = DeleteCacheReportInput;
  export type Output = DeleteCacheReportOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DeleteChapCredentials {
  export type Input = DeleteChapCredentialsInput;
  export type Output = DeleteChapCredentialsOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DeleteFileShare {
  export type Input = DeleteFileShareInput;
  export type Output = DeleteFileShareOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DeleteGateway {
  export type Input = DeleteGatewayInput;
  export type Output = DeleteGatewayOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DeleteSnapshotSchedule {
  export type Input = DeleteSnapshotScheduleInput;
  export type Output = DeleteSnapshotScheduleOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DeleteTape {
  export type Input = DeleteTapeInput;
  export type Output = DeleteTapeOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DeleteTapeArchive {
  export type Input = DeleteTapeArchiveInput;
  export type Output = DeleteTapeArchiveOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DeleteTapePool {
  export type Input = DeleteTapePoolInput;
  export type Output = DeleteTapePoolOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DeleteVolume {
  export type Input = DeleteVolumeInput;
  export type Output = DeleteVolumeOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeAvailabilityMonitorTest {
  export type Input = DescribeAvailabilityMonitorTestInput;
  export type Output = DescribeAvailabilityMonitorTestOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeBandwidthRateLimit {
  export type Input = DescribeBandwidthRateLimitInput;
  export type Output = DescribeBandwidthRateLimitOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeBandwidthRateLimitSchedule {
  export type Input = DescribeBandwidthRateLimitScheduleInput;
  export type Output = DescribeBandwidthRateLimitScheduleOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeCache {
  export type Input = DescribeCacheInput;
  export type Output = DescribeCacheOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeCachediSCSIVolumes {
  export type Input = DescribeCachediSCSIVolumesInput;
  export type Output = DescribeCachediSCSIVolumesOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeCacheReport {
  export type Input = DescribeCacheReportInput;
  export type Output = DescribeCacheReportOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeChapCredentials {
  export type Input = DescribeChapCredentialsInput;
  export type Output = DescribeChapCredentialsOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeFileSystemAssociations {
  export type Input = DescribeFileSystemAssociationsInput;
  export type Output = DescribeFileSystemAssociationsOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeGatewayInformation {
  export type Input = DescribeGatewayInformationInput;
  export type Output = DescribeGatewayInformationOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceStartTime {
  export type Input = DescribeMaintenanceStartTimeInput;
  export type Output = DescribeMaintenanceStartTimeOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeNFSFileShares {
  export type Input = DescribeNFSFileSharesInput;
  export type Output = DescribeNFSFileSharesOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeSMBFileShares {
  export type Input = DescribeSMBFileSharesInput;
  export type Output = DescribeSMBFileSharesOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeSMBSettings {
  export type Input = DescribeSMBSettingsInput;
  export type Output = DescribeSMBSettingsOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeSnapshotSchedule {
  export type Input = DescribeSnapshotScheduleInput;
  export type Output = DescribeSnapshotScheduleOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeStorediSCSIVolumes {
  export type Input = DescribeStorediSCSIVolumesInput;
  export type Output = DescribeStorediSCSIVolumesOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeTapeArchives {
  export type Input = DescribeTapeArchivesInput;
  export type Output = DescribeTapeArchivesOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeTapeRecoveryPoints {
  export type Input = DescribeTapeRecoveryPointsInput;
  export type Output = DescribeTapeRecoveryPointsOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeTapes {
  export type Input = DescribeTapesInput;
  export type Output = DescribeTapesOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeUploadBuffer {
  export type Input = DescribeUploadBufferInput;
  export type Output = DescribeUploadBufferOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeVTLDevices {
  export type Input = DescribeVTLDevicesInput;
  export type Output = DescribeVTLDevicesOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DescribeWorkingStorage {
  export type Input = DescribeWorkingStorageInput;
  export type Output = DescribeWorkingStorageOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DetachVolume {
  export type Input = DetachVolumeInput;
  export type Output = DetachVolumeOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DisableGateway {
  export type Input = DisableGatewayInput;
  export type Output = DisableGatewayOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace DisassociateFileSystem {
  export type Input = DisassociateFileSystemInput;
  export type Output = DisassociateFileSystemOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace EvictFilesFailingUpload {
  export type Input = EvictFilesFailingUploadInput;
  export type Output = EvictFilesFailingUploadOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace JoinDomain {
  export type Input = JoinDomainInput;
  export type Output = JoinDomainOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ListAutomaticTapeCreationPolicies {
  export type Input = ListAutomaticTapeCreationPoliciesInput;
  export type Output = ListAutomaticTapeCreationPoliciesOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ListCacheReports {
  export type Input = ListCacheReportsInput;
  export type Output = ListCacheReportsOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ListFileShares {
  export type Input = ListFileSharesInput;
  export type Output = ListFileSharesOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ListFileSystemAssociations {
  export type Input = ListFileSystemAssociationsInput;
  export type Output = ListFileSystemAssociationsOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ListGateways {
  export type Input = ListGatewaysInput;
  export type Output = ListGatewaysOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ListLocalDisks {
  export type Input = ListLocalDisksInput;
  export type Output = ListLocalDisksOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ListTapePools {
  export type Input = ListTapePoolsInput;
  export type Output = ListTapePoolsOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ListTapes {
  export type Input = ListTapesInput;
  export type Output = ListTapesOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ListVolumeInitiators {
  export type Input = ListVolumeInitiatorsInput;
  export type Output = ListVolumeInitiatorsOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ListVolumeRecoveryPoints {
  export type Input = ListVolumeRecoveryPointsInput;
  export type Output = ListVolumeRecoveryPointsOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ListVolumes {
  export type Input = ListVolumesInput;
  export type Output = ListVolumesOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace NotifyWhenUploaded {
  export type Input = NotifyWhenUploadedInput;
  export type Output = NotifyWhenUploadedOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace RefreshCache {
  export type Input = RefreshCacheInput;
  export type Output = RefreshCacheOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace RemoveTagsFromResource {
  export type Input = RemoveTagsFromResourceInput;
  export type Output = RemoveTagsFromResourceOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ResetCache {
  export type Input = ResetCacheInput;
  export type Output = ResetCacheOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace RetrieveTapeArchive {
  export type Input = RetrieveTapeArchiveInput;
  export type Output = RetrieveTapeArchiveOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace RetrieveTapeRecoveryPoint {
  export type Input = RetrieveTapeRecoveryPointInput;
  export type Output = RetrieveTapeRecoveryPointOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace SetLocalConsolePassword {
  export type Input = SetLocalConsolePasswordInput;
  export type Output = SetLocalConsolePasswordOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace SetSMBGuestPassword {
  export type Input = SetSMBGuestPasswordInput;
  export type Output = SetSMBGuestPasswordOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace ShutdownGateway {
  export type Input = ShutdownGatewayInput;
  export type Output = ShutdownGatewayOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace StartAvailabilityMonitorTest {
  export type Input = StartAvailabilityMonitorTestInput;
  export type Output = StartAvailabilityMonitorTestOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace StartCacheReport {
  export type Input = StartCacheReportInput;
  export type Output = StartCacheReportOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace StartGateway {
  export type Input = StartGatewayInput;
  export type Output = StartGatewayOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateAutomaticTapeCreationPolicy {
  export type Input = UpdateAutomaticTapeCreationPolicyInput;
  export type Output = UpdateAutomaticTapeCreationPolicyOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateBandwidthRateLimit {
  export type Input = UpdateBandwidthRateLimitInput;
  export type Output = UpdateBandwidthRateLimitOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateBandwidthRateLimitSchedule {
  export type Input = UpdateBandwidthRateLimitScheduleInput;
  export type Output = UpdateBandwidthRateLimitScheduleOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateChapCredentials {
  export type Input = UpdateChapCredentialsInput;
  export type Output = UpdateChapCredentialsOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateFileSystemAssociation {
  export type Input = UpdateFileSystemAssociationInput;
  export type Output = UpdateFileSystemAssociationOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateGatewayInformation {
  export type Input = UpdateGatewayInformationInput;
  export type Output = UpdateGatewayInformationOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateGatewaySoftwareNow {
  export type Input = UpdateGatewaySoftwareNowInput;
  export type Output = UpdateGatewaySoftwareNowOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateMaintenanceStartTime {
  export type Input = UpdateMaintenanceStartTimeInput;
  export type Output = UpdateMaintenanceStartTimeOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateNFSFileShare {
  export type Input = UpdateNFSFileShareInput;
  export type Output = UpdateNFSFileShareOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateSMBFileShare {
  export type Input = UpdateSMBFileShareInput;
  export type Output = UpdateSMBFileShareOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateSMBFileShareVisibility {
  export type Input = UpdateSMBFileShareVisibilityInput;
  export type Output = UpdateSMBFileShareVisibilityOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateSMBLocalGroups {
  export type Input = UpdateSMBLocalGroupsInput;
  export type Output = UpdateSMBLocalGroupsOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateSMBSecurityStrategy {
  export type Input = UpdateSMBSecurityStrategyInput;
  export type Output = UpdateSMBSecurityStrategyOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateSnapshotSchedule {
  export type Input = UpdateSnapshotScheduleInput;
  export type Output = UpdateSnapshotScheduleOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export declare namespace UpdateVTLDeviceType {
  export type Input = UpdateVTLDeviceTypeInput;
  export type Output = UpdateVTLDeviceTypeOutput;
  export type Error =
    | InternalServerError
    | InvalidGatewayRequestException
    | CommonAwsError;
}

export type StorageGatewayErrors = InternalServerError | InvalidGatewayRequestException | ServiceUnavailableError | CommonAwsError;


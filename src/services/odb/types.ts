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

export declare class odb extends AWSServiceClient {
  acceptMarketplaceRegistration(
    input: AcceptMarketplaceRegistrationInput,
  ): Effect.Effect<
    AcceptMarketplaceRegistrationOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getOciOnboardingStatus(
    input: GetOciOnboardingStatusInput,
  ): Effect.Effect<
    GetOciOnboardingStatusOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  initializeService(
    input: InitializeServiceInput,
  ): Effect.Effect<
    InitializeServiceOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDbSystemShapes(
    input: ListDbSystemShapesInput,
  ): Effect.Effect<
    ListDbSystemShapesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listGiVersions(
    input: ListGiVersionsInput,
  ): Effect.Effect<
    ListGiVersionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSystemVersions(
    input: ListSystemVersionsInput,
  ): Effect.Effect<
    ListSystemVersionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    ResourceNotFoundException | ServiceQuotaExceededException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  createCloudAutonomousVmCluster(
    input: CreateCloudAutonomousVmClusterInput,
  ): Effect.Effect<
    CreateCloudAutonomousVmClusterOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createCloudExadataInfrastructure(
    input: CreateCloudExadataInfrastructureInput,
  ): Effect.Effect<
    CreateCloudExadataInfrastructureOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createCloudVmCluster(
    input: CreateCloudVmClusterInput,
  ): Effect.Effect<
    CreateCloudVmClusterOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createOdbNetwork(
    input: CreateOdbNetworkInput,
  ): Effect.Effect<
    CreateOdbNetworkOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createOdbPeeringConnection(
    input: CreateOdbPeeringConnectionInput,
  ): Effect.Effect<
    CreateOdbPeeringConnectionOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCloudAutonomousVmCluster(
    input: DeleteCloudAutonomousVmClusterInput,
  ): Effect.Effect<
    DeleteCloudAutonomousVmClusterOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteCloudExadataInfrastructure(
    input: DeleteCloudExadataInfrastructureInput,
  ): Effect.Effect<
    DeleteCloudExadataInfrastructureOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCloudVmCluster(
    input: DeleteCloudVmClusterInput,
  ): Effect.Effect<
    DeleteCloudVmClusterOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteOdbNetwork(
    input: DeleteOdbNetworkInput,
  ): Effect.Effect<
    DeleteOdbNetworkOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteOdbPeeringConnection(
    input: DeleteOdbPeeringConnectionInput,
  ): Effect.Effect<
    DeleteOdbPeeringConnectionOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCloudAutonomousVmCluster(
    input: GetCloudAutonomousVmClusterInput,
  ): Effect.Effect<
    GetCloudAutonomousVmClusterOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCloudExadataInfrastructure(
    input: GetCloudExadataInfrastructureInput,
  ): Effect.Effect<
    GetCloudExadataInfrastructureOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCloudExadataInfrastructureUnallocatedResources(
    input: GetCloudExadataInfrastructureUnallocatedResourcesInput,
  ): Effect.Effect<
    GetCloudExadataInfrastructureUnallocatedResourcesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCloudVmCluster(
    input: GetCloudVmClusterInput,
  ): Effect.Effect<
    GetCloudVmClusterOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDbNode(
    input: GetDbNodeInput,
  ): Effect.Effect<
    GetDbNodeOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDbServer(
    input: GetDbServerInput,
  ): Effect.Effect<
    GetDbServerOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getOdbNetwork(
    input: GetOdbNetworkInput,
  ): Effect.Effect<
    GetOdbNetworkOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getOdbPeeringConnection(
    input: GetOdbPeeringConnectionInput,
  ): Effect.Effect<
    GetOdbPeeringConnectionOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAutonomousVirtualMachines(
    input: ListAutonomousVirtualMachinesInput,
  ): Effect.Effect<
    ListAutonomousVirtualMachinesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCloudAutonomousVmClusters(
    input: ListCloudAutonomousVmClustersInput,
  ): Effect.Effect<
    ListCloudAutonomousVmClustersOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCloudExadataInfrastructures(
    input: ListCloudExadataInfrastructuresInput,
  ): Effect.Effect<
    ListCloudExadataInfrastructuresOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCloudVmClusters(
    input: ListCloudVmClustersInput,
  ): Effect.Effect<
    ListCloudVmClustersOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDbNodes(
    input: ListDbNodesInput,
  ): Effect.Effect<
    ListDbNodesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDbServers(
    input: ListDbServersInput,
  ): Effect.Effect<
    ListDbServersOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listOdbNetworks(
    input: ListOdbNetworksInput,
  ): Effect.Effect<
    ListOdbNetworksOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listOdbPeeringConnections(
    input: ListOdbPeeringConnectionsInput,
  ): Effect.Effect<
    ListOdbPeeringConnectionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  rebootDbNode(
    input: RebootDbNodeInput,
  ): Effect.Effect<
    RebootDbNodeOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startDbNode(
    input: StartDbNodeInput,
  ): Effect.Effect<
    StartDbNodeOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopDbNode(
    input: StopDbNodeInput,
  ): Effect.Effect<
    StopDbNodeOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateCloudExadataInfrastructure(
    input: UpdateCloudExadataInfrastructureInput,
  ): Effect.Effect<
    UpdateCloudExadataInfrastructureOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateOdbNetwork(
    input: UpdateOdbNetworkInput,
  ): Effect.Effect<
    UpdateOdbNetworkOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export interface AcceptMarketplaceRegistrationInput {
  marketplaceRegistrationToken: string;
}
export interface AcceptMarketplaceRegistrationOutput {}
export type Access = "ENABLED" | "DISABLED";
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AutonomousVirtualMachineList =
  Array<AutonomousVirtualMachineSummary>;
export interface AutonomousVirtualMachineSummary {
  autonomousVirtualMachineId?: string;
  status?: ResourceStatus;
  statusReason?: string;
  vmName?: string;
  dbServerId?: string;
  dbServerDisplayName?: string;
  cpuCoreCount?: number;
  memorySizeInGBs?: number;
  dbNodeStorageSizeInGBs?: number;
  clientIpAddress?: string;
  cloudAutonomousVmClusterId?: string;
  ocid?: string;
  ociResourceAnchorName?: string;
}
export interface CloudAutonomousVmCluster {
  cloudAutonomousVmClusterId: string;
  cloudAutonomousVmClusterArn?: string;
  odbNetworkId?: string;
  ociResourceAnchorName?: string;
  percentProgress?: number;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudExadataInfrastructureId?: string;
  autonomousDataStoragePercentage?: number;
  autonomousDataStorageSizeInTBs?: number;
  availableAutonomousDataStorageSizeInTBs?: number;
  availableContainerDatabases?: number;
  availableCpus?: number;
  computeModel?: ComputeModel;
  cpuCoreCount?: number;
  cpuCoreCountPerNode?: number;
  cpuPercentage?: number;
  dataStorageSizeInGBs?: number;
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServers?: Array<string>;
  description?: string;
  domain?: string;
  exadataStorageInTBsLowestScaledValue?: number;
  hostname?: string;
  ocid?: string;
  ociUrl?: string;
  isMtlsEnabledVmCluster?: boolean;
  licenseModel?: LicenseModel;
  maintenanceWindow?: MaintenanceWindow;
  maxAcdsLowestScaledValue?: number;
  memoryPerOracleComputeUnitInGBs?: number;
  memorySizeInGBs?: number;
  nodeCount?: number;
  nonProvisionableAutonomousContainerDatabases?: number;
  provisionableAutonomousContainerDatabases?: number;
  provisionedAutonomousContainerDatabases?: number;
  provisionedCpus?: number;
  reclaimableCpus?: number;
  reservedCpus?: number;
  scanListenerPortNonTls?: number;
  scanListenerPortTls?: number;
  shape?: string;
  createdAt?: Date | string;
  timeDatabaseSslCertificateExpires?: Date | string;
  timeOrdsCertificateExpires?: Date | string;
  timeZone?: string;
  totalContainerDatabases?: number;
}
export type CloudAutonomousVmClusterList =
  Array<CloudAutonomousVmClusterSummary>;
export interface CloudAutonomousVmClusterResourceDetails {
  cloudAutonomousVmClusterId?: string;
  unallocatedAdbStorageInTBs?: number;
}
export type CloudAutonomousVmClusterResourceDetailsList =
  Array<CloudAutonomousVmClusterResourceDetails>;
export interface CloudAutonomousVmClusterSummary {
  cloudAutonomousVmClusterId: string;
  cloudAutonomousVmClusterArn?: string;
  odbNetworkId?: string;
  ociResourceAnchorName?: string;
  percentProgress?: number;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudExadataInfrastructureId?: string;
  autonomousDataStoragePercentage?: number;
  autonomousDataStorageSizeInTBs?: number;
  availableAutonomousDataStorageSizeInTBs?: number;
  availableContainerDatabases?: number;
  availableCpus?: number;
  computeModel?: ComputeModel;
  cpuCoreCount?: number;
  cpuCoreCountPerNode?: number;
  cpuPercentage?: number;
  dataStorageSizeInGBs?: number;
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServers?: Array<string>;
  description?: string;
  domain?: string;
  exadataStorageInTBsLowestScaledValue?: number;
  hostname?: string;
  ocid?: string;
  ociUrl?: string;
  isMtlsEnabledVmCluster?: boolean;
  licenseModel?: LicenseModel;
  maintenanceWindow?: MaintenanceWindow;
  maxAcdsLowestScaledValue?: number;
  memoryPerOracleComputeUnitInGBs?: number;
  memorySizeInGBs?: number;
  nodeCount?: number;
  nonProvisionableAutonomousContainerDatabases?: number;
  provisionableAutonomousContainerDatabases?: number;
  provisionedAutonomousContainerDatabases?: number;
  provisionedCpus?: number;
  reclaimableCpus?: number;
  reservedCpus?: number;
  scanListenerPortNonTls?: number;
  scanListenerPortTls?: number;
  shape?: string;
  createdAt?: Date | string;
  timeDatabaseSslCertificateExpires?: Date | string;
  timeOrdsCertificateExpires?: Date | string;
  timeZone?: string;
  totalContainerDatabases?: number;
}
export interface CloudExadataInfrastructure {
  cloudExadataInfrastructureId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudExadataInfrastructureArn?: string;
  activatedStorageCount?: number;
  additionalStorageCount?: number;
  availableStorageSizeInGBs?: number;
  availabilityZone?: string;
  availabilityZoneId?: string;
  computeCount?: number;
  cpuCount?: number;
  customerContactsToSendToOCI?: Array<CustomerContact>;
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServerVersion?: string;
  lastMaintenanceRunId?: string;
  maintenanceWindow?: MaintenanceWindow;
  maxCpuCount?: number;
  maxDataStorageInTBs?: number;
  maxDbNodeStorageSizeInGBs?: number;
  maxMemoryInGBs?: number;
  memorySizeInGBs?: number;
  monthlyDbServerVersion?: string;
  monthlyStorageServerVersion?: string;
  nextMaintenanceRunId?: string;
  ociResourceAnchorName?: string;
  ociUrl?: string;
  ocid?: string;
  shape?: string;
  storageCount?: number;
  storageServerVersion?: string;
  createdAt?: Date | string;
  totalStorageSizeInGBs?: number;
  percentProgress?: number;
  databaseServerType?: string;
  storageServerType?: string;
  computeModel?: ComputeModel;
}
export type CloudExadataInfrastructureList =
  Array<CloudExadataInfrastructureSummary>;
export interface CloudExadataInfrastructureSummary {
  cloudExadataInfrastructureId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudExadataInfrastructureArn?: string;
  activatedStorageCount?: number;
  additionalStorageCount?: number;
  availableStorageSizeInGBs?: number;
  availabilityZone?: string;
  availabilityZoneId?: string;
  computeCount?: number;
  cpuCount?: number;
  customerContactsToSendToOCI?: Array<CustomerContact>;
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServerVersion?: string;
  lastMaintenanceRunId?: string;
  maintenanceWindow?: MaintenanceWindow;
  maxCpuCount?: number;
  maxDataStorageInTBs?: number;
  maxDbNodeStorageSizeInGBs?: number;
  maxMemoryInGBs?: number;
  memorySizeInGBs?: number;
  monthlyDbServerVersion?: string;
  monthlyStorageServerVersion?: string;
  nextMaintenanceRunId?: string;
  ociResourceAnchorName?: string;
  ociUrl?: string;
  ocid?: string;
  shape?: string;
  storageCount?: number;
  storageServerVersion?: string;
  createdAt?: Date | string;
  totalStorageSizeInGBs?: number;
  percentProgress?: number;
  databaseServerType?: string;
  storageServerType?: string;
  computeModel?: ComputeModel;
}
export interface CloudExadataInfrastructureUnallocatedResources {
  cloudAutonomousVmClusters?: Array<CloudAutonomousVmClusterResourceDetails>;
  cloudExadataInfrastructureDisplayName?: string;
  exadataStorageInTBs?: number;
  cloudExadataInfrastructureId?: string;
  localStorageInGBs?: number;
  memoryInGBs?: number;
  ocpus?: number;
}
export interface CloudVmCluster {
  cloudVmClusterId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudVmClusterArn?: string;
  cloudExadataInfrastructureId?: string;
  clusterName?: string;
  cpuCoreCount?: number;
  dataCollectionOptions?: DataCollectionOptions;
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServers?: Array<string>;
  diskRedundancy?: DiskRedundancy;
  giVersion?: string;
  hostname?: string;
  iormConfigCache?: ExadataIormConfig;
  isLocalBackupEnabled?: boolean;
  isSparseDiskgroupEnabled?: boolean;
  lastUpdateHistoryEntryId?: string;
  licenseModel?: LicenseModel;
  listenerPort?: number;
  memorySizeInGBs?: number;
  nodeCount?: number;
  ocid?: string;
  ociResourceAnchorName?: string;
  ociUrl?: string;
  domain?: string;
  scanDnsName?: string;
  scanDnsRecordId?: string;
  scanIpIds?: Array<string>;
  shape?: string;
  sshPublicKeys?: Array<string>;
  storageSizeInGBs?: number;
  systemVersion?: string;
  createdAt?: Date | string;
  timeZone?: string;
  vipIds?: Array<string>;
  odbNetworkId?: string;
  percentProgress?: number;
  computeModel?: ComputeModel;
}
export type CloudVmClusterList = Array<CloudVmClusterSummary>;
export interface CloudVmClusterSummary {
  cloudVmClusterId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudVmClusterArn?: string;
  cloudExadataInfrastructureId?: string;
  clusterName?: string;
  cpuCoreCount?: number;
  dataCollectionOptions?: DataCollectionOptions;
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServers?: Array<string>;
  diskRedundancy?: DiskRedundancy;
  giVersion?: string;
  hostname?: string;
  iormConfigCache?: ExadataIormConfig;
  isLocalBackupEnabled?: boolean;
  isSparseDiskgroupEnabled?: boolean;
  lastUpdateHistoryEntryId?: string;
  licenseModel?: LicenseModel;
  listenerPort?: number;
  memorySizeInGBs?: number;
  nodeCount?: number;
  ocid?: string;
  ociResourceAnchorName?: string;
  ociUrl?: string;
  domain?: string;
  scanDnsName?: string;
  scanDnsRecordId?: string;
  scanIpIds?: Array<string>;
  shape?: string;
  sshPublicKeys?: Array<string>;
  storageSizeInGBs?: number;
  systemVersion?: string;
  createdAt?: Date | string;
  timeZone?: string;
  vipIds?: Array<string>;
  odbNetworkId?: string;
  percentProgress?: number;
  computeModel?: ComputeModel;
}
export type ComputeModel = "ECPU" | "OCPU";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CreateCloudAutonomousVmClusterInput {
  cloudExadataInfrastructureId: string;
  odbNetworkId: string;
  displayName: string;
  clientToken?: string;
  autonomousDataStorageSizeInTBs: number;
  cpuCoreCountPerNode: number;
  dbServers?: Array<string>;
  description?: string;
  isMtlsEnabledVmCluster?: boolean;
  licenseModel?: LicenseModel;
  maintenanceWindow?: MaintenanceWindow;
  memoryPerOracleComputeUnitInGBs: number;
  scanListenerPortNonTls?: number;
  scanListenerPortTls?: number;
  tags?: Record<string, string>;
  timeZone?: string;
  totalContainerDatabases: number;
}
export interface CreateCloudAutonomousVmClusterOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudAutonomousVmClusterId: string;
}
export interface CreateCloudExadataInfrastructureInput {
  displayName: string;
  shape: string;
  availabilityZone?: string;
  availabilityZoneId?: string;
  tags?: Record<string, string>;
  computeCount: number;
  customerContactsToSendToOCI?: Array<CustomerContact>;
  maintenanceWindow?: MaintenanceWindow;
  storageCount: number;
  clientToken?: string;
  databaseServerType?: string;
  storageServerType?: string;
}
export interface CreateCloudExadataInfrastructureOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudExadataInfrastructureId: string;
}
export interface CreateCloudVmClusterInput {
  cloudExadataInfrastructureId: string;
  cpuCoreCount: number;
  displayName: string;
  giVersion: string;
  hostname: string;
  sshPublicKeys: Array<string>;
  odbNetworkId: string;
  clusterName?: string;
  dataCollectionOptions?: DataCollectionOptions;
  dataStorageSizeInTBs?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServers?: Array<string>;
  tags?: Record<string, string>;
  isLocalBackupEnabled?: boolean;
  isSparseDiskgroupEnabled?: boolean;
  licenseModel?: LicenseModel;
  memorySizeInGBs?: number;
  systemVersion?: string;
  timeZone?: string;
  clientToken?: string;
  scanListenerPortTcp?: number;
}
export interface CreateCloudVmClusterOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudVmClusterId: string;
}
export interface CreateOdbNetworkInput {
  displayName: string;
  availabilityZone?: string;
  availabilityZoneId?: string;
  clientSubnetCidr: string;
  backupSubnetCidr?: string;
  customDomainName?: string;
  defaultDnsPrefix?: string;
  clientToken?: string;
  s3Access?: Access;
  zeroEtlAccess?: Access;
  s3PolicyDocument?: string;
  tags?: Record<string, string>;
}
export interface CreateOdbNetworkOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbNetworkId: string;
}
export interface CreateOdbPeeringConnectionInput {
  odbNetworkId: string;
  peerNetworkId: string;
  displayName?: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateOdbPeeringConnectionOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbPeeringConnectionId: string;
}
export interface CustomerContact {
  email?: string;
}
export type CustomerContacts = Array<CustomerContact>;
export interface DataCollectionOptions {
  isDiagnosticsEventsEnabled?: boolean;
  isHealthMonitoringEnabled?: boolean;
  isIncidentLogsEnabled?: boolean;
}
export interface DayOfWeek {
  name?: DayOfWeekName;
}
export type DayOfWeekName =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
export type DaysOfWeek = Array<DayOfWeek>;
export interface DbIormConfig {
  dbName?: string;
  flashCacheLimit?: string;
  share?: number;
}
export type DbIormConfigList = Array<DbIormConfig>;
export interface DbNode {
  dbNodeId?: string;
  dbNodeArn?: string;
  status?: DbNodeResourceStatus;
  statusReason?: string;
  additionalDetails?: string;
  backupIpId?: string;
  backupVnic2Id?: string;
  backupVnicId?: string;
  cpuCoreCount?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServerId?: string;
  dbSystemId?: string;
  faultDomain?: string;
  hostIpId?: string;
  hostname?: string;
  ocid?: string;
  ociResourceAnchorName?: string;
  maintenanceType?: DbNodeMaintenanceType;
  memorySizeInGBs?: number;
  softwareStorageSizeInGB?: number;
  createdAt?: Date | string;
  timeMaintenanceWindowEnd?: string;
  timeMaintenanceWindowStart?: string;
  totalCpuCoreCount?: number;
  vnic2Id?: string;
  vnicId?: string;
  privateIpAddress?: string;
  floatingIpAddress?: string;
}
export type DbNodeList = Array<DbNodeSummary>;
export type DbNodeMaintenanceType = "VMDB_REBOOT_MIGRATION";
export type DbNodeResourceStatus =
  | "AVAILABLE"
  | "FAILED"
  | "PROVISIONING"
  | "TERMINATED"
  | "TERMINATING"
  | "UPDATING"
  | "STOPPING"
  | "STOPPED"
  | "STARTING";
export interface DbNodeSummary {
  dbNodeId?: string;
  dbNodeArn?: string;
  status?: DbNodeResourceStatus;
  statusReason?: string;
  additionalDetails?: string;
  backupIpId?: string;
  backupVnic2Id?: string;
  backupVnicId?: string;
  cpuCoreCount?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServerId?: string;
  dbSystemId?: string;
  faultDomain?: string;
  hostIpId?: string;
  hostname?: string;
  ocid?: string;
  ociResourceAnchorName?: string;
  maintenanceType?: DbNodeMaintenanceType;
  memorySizeInGBs?: number;
  softwareStorageSizeInGB?: number;
  createdAt?: Date | string;
  timeMaintenanceWindowEnd?: string;
  timeMaintenanceWindowStart?: string;
  totalCpuCoreCount?: number;
  vnic2Id?: string;
  vnicId?: string;
}
export interface DbServer {
  dbServerId?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cpuCoreCount?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServerPatchingDetails?: DbServerPatchingDetails;
  displayName?: string;
  exadataInfrastructureId?: string;
  ocid?: string;
  ociResourceAnchorName?: string;
  maxCpuCount?: number;
  maxDbNodeStorageInGBs?: number;
  maxMemoryInGBs?: number;
  memorySizeInGBs?: number;
  shape?: string;
  createdAt?: Date | string;
  vmClusterIds?: Array<string>;
  computeModel?: ComputeModel;
  autonomousVmClusterIds?: Array<string>;
  autonomousVirtualMachineIds?: Array<string>;
}
export type DbServerList = Array<DbServerSummary>;
export interface DbServerPatchingDetails {
  estimatedPatchDuration?: number;
  patchingStatus?: DbServerPatchingStatus;
  timePatchingEnded?: string;
  timePatchingStarted?: string;
}
export type DbServerPatchingStatus =
  | "COMPLETE"
  | "FAILED"
  | "MAINTENANCE_IN_PROGRESS"
  | "SCHEDULED";
export interface DbServerSummary {
  dbServerId?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cpuCoreCount?: number;
  dbNodeStorageSizeInGBs?: number;
  dbServerPatchingDetails?: DbServerPatchingDetails;
  displayName?: string;
  exadataInfrastructureId?: string;
  ocid?: string;
  ociResourceAnchorName?: string;
  maxCpuCount?: number;
  maxDbNodeStorageInGBs?: number;
  maxMemoryInGBs?: number;
  memorySizeInGBs?: number;
  shape?: string;
  createdAt?: Date | string;
  vmClusterIds?: Array<string>;
  computeModel?: ComputeModel;
  autonomousVmClusterIds?: Array<string>;
  autonomousVirtualMachineIds?: Array<string>;
}
export type DbSystemShapeList = Array<DbSystemShapeSummary>;
export interface DbSystemShapeSummary {
  availableCoreCount?: number;
  availableCoreCountPerNode?: number;
  availableDataStorageInTBs?: number;
  availableDataStoragePerServerInTBs?: number;
  availableDbNodePerNodeInGBs?: number;
  availableDbNodeStorageInGBs?: number;
  availableMemoryInGBs?: number;
  availableMemoryPerNodeInGBs?: number;
  coreCountIncrement?: number;
  maxStorageCount?: number;
  maximumNodeCount?: number;
  minCoreCountPerNode?: number;
  minDataStorageInTBs?: number;
  minDbNodeStoragePerNodeInGBs?: number;
  minMemoryPerNodeInGBs?: number;
  minStorageCount?: number;
  minimumCoreCount?: number;
  minimumNodeCount?: number;
  runtimeMinimumCoreCount?: number;
  shapeFamily?: string;
  shapeType?: ShapeType;
  name?: string;
  computeModel?: ComputeModel;
  areServerTypesSupported?: boolean;
}
export interface DeleteCloudAutonomousVmClusterInput {
  cloudAutonomousVmClusterId: string;
}
export interface DeleteCloudAutonomousVmClusterOutput {}
export interface DeleteCloudExadataInfrastructureInput {
  cloudExadataInfrastructureId: string;
}
export interface DeleteCloudExadataInfrastructureOutput {}
export interface DeleteCloudVmClusterInput {
  cloudVmClusterId: string;
}
export interface DeleteCloudVmClusterOutput {}
export interface DeleteOdbNetworkInput {
  odbNetworkId: string;
  deleteAssociatedResources: boolean;
}
export interface DeleteOdbNetworkOutput {}
export interface DeleteOdbPeeringConnectionInput {
  odbPeeringConnectionId: string;
}
export interface DeleteOdbPeeringConnectionOutput {}
export type DiskRedundancy = "HIGH" | "NORMAL";
export interface ExadataIormConfig {
  dbPlans?: Array<DbIormConfig>;
  lifecycleDetails?: string;
  lifecycleState?: IormLifecycleState;
  objective?: Objective;
}
export type GeneralInputString = string;

export interface GetCloudAutonomousVmClusterInput {
  cloudAutonomousVmClusterId: string;
}
export interface GetCloudAutonomousVmClusterOutput {
  cloudAutonomousVmCluster?: CloudAutonomousVmCluster;
}
export interface GetCloudExadataInfrastructureInput {
  cloudExadataInfrastructureId: string;
}
export interface GetCloudExadataInfrastructureOutput {
  cloudExadataInfrastructure?: CloudExadataInfrastructure;
}
export interface GetCloudExadataInfrastructureUnallocatedResourcesInput {
  cloudExadataInfrastructureId: string;
  dbServers?: Array<string>;
}
export interface GetCloudExadataInfrastructureUnallocatedResourcesOutput {
  cloudExadataInfrastructureUnallocatedResources?: CloudExadataInfrastructureUnallocatedResources;
}
export interface GetCloudVmClusterInput {
  cloudVmClusterId: string;
}
export interface GetCloudVmClusterOutput {
  cloudVmCluster?: CloudVmCluster;
}
export interface GetDbNodeInput {
  cloudVmClusterId: string;
  dbNodeId: string;
}
export interface GetDbNodeOutput {
  dbNode?: DbNode;
}
export interface GetDbServerInput {
  cloudExadataInfrastructureId: string;
  dbServerId: string;
}
export interface GetDbServerOutput {
  dbServer?: DbServer;
}
export interface GetOciOnboardingStatusInput {}
export interface GetOciOnboardingStatusOutput {
  status?: OciOnboardingStatus;
  existingTenancyActivationLink?: string;
  newTenancyActivationLink?: string;
}
export interface GetOdbNetworkInput {
  odbNetworkId: string;
}
export interface GetOdbNetworkOutput {
  odbNetwork?: OdbNetwork;
}
export interface GetOdbPeeringConnectionInput {
  odbPeeringConnectionId: string;
}
export interface GetOdbPeeringConnectionOutput {
  odbPeeringConnection?: OdbPeeringConnection;
}
export type GiVersionList = Array<GiVersionSummary>;
export interface GiVersionSummary {
  version?: string;
}
export type HoursOfDay = Array<number>;
export interface InitializeServiceInput {}
export interface InitializeServiceOutput {}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type IormLifecycleState =
  | "BOOTSTRAPPING"
  | "DISABLED"
  | "ENABLED"
  | "FAILED"
  | "UPDATING";
export type LicenseModel = "BRING_YOUR_OWN_LICENSE" | "LICENSE_INCLUDED";
export interface ListAutonomousVirtualMachinesInput {
  maxResults?: number;
  nextToken?: string;
  cloudAutonomousVmClusterId: string;
}
export interface ListAutonomousVirtualMachinesOutput {
  nextToken?: string;
  autonomousVirtualMachines: Array<AutonomousVirtualMachineSummary>;
}
export interface ListCloudAutonomousVmClustersInput {
  maxResults?: number;
  nextToken?: string;
  cloudExadataInfrastructureId?: string;
}
export interface ListCloudAutonomousVmClustersOutput {
  nextToken?: string;
  cloudAutonomousVmClusters: Array<CloudAutonomousVmClusterSummary>;
}
export interface ListCloudExadataInfrastructuresInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListCloudExadataInfrastructuresOutput {
  nextToken?: string;
  cloudExadataInfrastructures: Array<CloudExadataInfrastructureSummary>;
}
export interface ListCloudVmClustersInput {
  maxResults?: number;
  nextToken?: string;
  cloudExadataInfrastructureId?: string;
}
export interface ListCloudVmClustersOutput {
  nextToken?: string;
  cloudVmClusters: Array<CloudVmClusterSummary>;
}
export interface ListDbNodesInput {
  maxResults?: number;
  nextToken?: string;
  cloudVmClusterId: string;
}
export interface ListDbNodesOutput {
  nextToken?: string;
  dbNodes: Array<DbNodeSummary>;
}
export interface ListDbServersInput {
  cloudExadataInfrastructureId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDbServersOutput {
  nextToken?: string;
  dbServers: Array<DbServerSummary>;
}
export interface ListDbSystemShapesInput {
  maxResults?: number;
  nextToken?: string;
  availabilityZone?: string;
  availabilityZoneId?: string;
}
export interface ListDbSystemShapesOutput {
  nextToken?: string;
  dbSystemShapes: Array<DbSystemShapeSummary>;
}
export interface ListGiVersionsInput {
  maxResults?: number;
  nextToken?: string;
  shape?: string;
}
export interface ListGiVersionsOutput {
  nextToken?: string;
  giVersions: Array<GiVersionSummary>;
}
export interface ListOdbNetworksInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListOdbNetworksOutput {
  nextToken?: string;
  odbNetworks: Array<OdbNetworkSummary>;
}
export interface ListOdbPeeringConnectionsInput {
  maxResults?: number;
  nextToken?: string;
  odbNetworkId?: string;
}
export interface ListOdbPeeringConnectionsOutput {
  nextToken?: string;
  odbPeeringConnections: Array<OdbPeeringConnectionSummary>;
}
export interface ListSystemVersionsInput {
  maxResults?: number;
  nextToken?: string;
  giVersion: string;
  shape: string;
}
export interface ListSystemVersionsOutput {
  nextToken?: string;
  systemVersions: Array<SystemVersionSummary>;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface MaintenanceWindow {
  customActionTimeoutInMins?: number;
  daysOfWeek?: Array<DayOfWeek>;
  hoursOfDay?: Array<number>;
  isCustomActionTimeoutEnabled?: boolean;
  leadTimeInWeeks?: number;
  months?: Array<Month>;
  patchingMode?: PatchingModeType;
  preference?: PreferenceType;
  skipRu?: boolean;
  weeksOfMonth?: Array<number>;
}
export type ManagedResourceStatus =
  | "ENABLED"
  | "ENABLING"
  | "DISABLED"
  | "DISABLING";
export interface ManagedS3BackupAccess {
  status?: ManagedResourceStatus;
  ipv4Addresses?: Array<string>;
}
export interface ManagedServices {
  serviceNetworkArn?: string;
  resourceGatewayArn?: string;
  managedServicesIpv4Cidrs?: Array<string>;
  serviceNetworkEndpoint?: ServiceNetworkEndpoint;
  managedS3BackupAccess?: ManagedS3BackupAccess;
  zeroEtlAccess?: ZeroEtlAccess;
  s3Access?: S3Access;
}
export interface Month {
  name?: MonthName;
}
export type MonthName =
  | "JANUARY"
  | "FEBRUARY"
  | "MARCH"
  | "APRIL"
  | "MAY"
  | "JUNE"
  | "JULY"
  | "AUGUST"
  | "SEPTEMBER"
  | "OCTOBER"
  | "NOVEMBER"
  | "DECEMBER";
export type Months = Array<Month>;
export type Objective =
  | "AUTO"
  | "BALANCED"
  | "BASIC"
  | "HIGH_THROUGHPUT"
  | "LOW_LATENCY";
export interface OciDnsForwardingConfig {
  domainName?: string;
  ociDnsListenerIp?: string;
}
export type OciDnsForwardingConfigList = Array<OciDnsForwardingConfig>;
export type OciOnboardingStatus =
  | "NOT_STARTED"
  | "PENDING_LINK_GENERATION"
  | "PENDING_CUSTOMER_ACTION"
  | "PENDING_INITIALIZATION"
  | "ACTIVATING"
  | "ACTIVE_IN_HOME_REGION"
  | "ACTIVE"
  | "ACTIVE_LIMITED"
  | "FAILED"
  | "PUBLIC_OFFER_UNSUPPORTED"
  | "SUSPENDED"
  | "CANCELED";
export interface OdbNetwork {
  odbNetworkId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbNetworkArn?: string;
  availabilityZone?: string;
  availabilityZoneId?: string;
  clientSubnetCidr?: string;
  backupSubnetCidr?: string;
  customDomainName?: string;
  defaultDnsPrefix?: string;
  peeredCidrs?: Array<string>;
  ociNetworkAnchorId?: string;
  ociNetworkAnchorUrl?: string;
  ociResourceAnchorName?: string;
  ociVcnId?: string;
  ociVcnUrl?: string;
  ociDnsForwardingConfigs?: Array<OciDnsForwardingConfig>;
  createdAt?: Date | string;
  percentProgress?: number;
  managedServices?: ManagedServices;
}
export type OdbNetworkList = Array<OdbNetworkSummary>;
export interface OdbNetworkSummary {
  odbNetworkId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbNetworkArn?: string;
  availabilityZone?: string;
  availabilityZoneId?: string;
  clientSubnetCidr?: string;
  backupSubnetCidr?: string;
  customDomainName?: string;
  defaultDnsPrefix?: string;
  peeredCidrs?: Array<string>;
  ociNetworkAnchorId?: string;
  ociNetworkAnchorUrl?: string;
  ociResourceAnchorName?: string;
  ociVcnId?: string;
  ociVcnUrl?: string;
  ociDnsForwardingConfigs?: Array<OciDnsForwardingConfig>;
  createdAt?: Date | string;
  percentProgress?: number;
  managedServices?: ManagedServices;
}
export interface OdbPeeringConnection {
  odbPeeringConnectionId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbPeeringConnectionArn?: string;
  odbNetworkArn?: string;
  peerNetworkArn?: string;
  odbPeeringConnectionType?: string;
  createdAt?: Date | string;
  percentProgress?: number;
}
export type OdbPeeringConnectionList = Array<OdbPeeringConnectionSummary>;
export interface OdbPeeringConnectionSummary {
  odbPeeringConnectionId: string;
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbPeeringConnectionArn?: string;
  odbNetworkArn?: string;
  peerNetworkArn?: string;
  odbPeeringConnectionType?: string;
  createdAt?: Date | string;
  percentProgress?: number;
}
export type PatchingModeType = "ROLLING" | "NONROLLING";
export type PolicyDocument = string;

export type PreferenceType = "NO_PREFERENCE" | "CUSTOM_PREFERENCE";
export interface RebootDbNodeInput {
  cloudVmClusterId: string;
  dbNodeId: string;
}
export interface RebootDbNodeOutput {
  dbNodeId: string;
  status?: DbNodeResourceStatus;
  statusReason?: string;
}
export type RequestTagMap = Record<string, string>;
export type ResourceArn = string;

export type ResourceDisplayName = string;

export type ResourceId = string;

export type ResourceIdOrArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ResourceStatus =
  | "AVAILABLE"
  | "FAILED"
  | "PROVISIONING"
  | "TERMINATED"
  | "TERMINATING"
  | "UPDATING"
  | "MAINTENANCE_IN_PROGRESS";
export type ResponseTagMap = Record<string, string>;
export interface S3Access {
  status?: ManagedResourceStatus;
  ipv4Addresses?: Array<string>;
  domainName?: string;
  s3PolicyDocument?: string;
}
export type SensitiveString = string;

export type SensitiveStringList = Array<string>;
export interface ServiceNetworkEndpoint {
  vpcEndpointId?: string;
  vpcEndpointType?: VpcEndpointType;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly quotaCode: string;
}> {}
export type ShapeType = "AMD" | "INTEL" | "INTEL_FLEX_X9" | "AMPERE_FLEX_A1";
export interface StartDbNodeInput {
  cloudVmClusterId: string;
  dbNodeId: string;
}
export interface StartDbNodeOutput {
  dbNodeId: string;
  status?: DbNodeResourceStatus;
  statusReason?: string;
}
export interface StopDbNodeInput {
  cloudVmClusterId: string;
  dbNodeId: string;
}
export interface StopDbNodeOutput {
  dbNodeId: string;
  status?: DbNodeResourceStatus;
  statusReason?: string;
}
export type StringList = Array<string>;
export type SystemVersionList = Array<SystemVersionSummary>;
export interface SystemVersionSummary {
  giVersion?: string;
  shape?: string;
  systemVersions?: Array<string>;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
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
export interface UntagResourceResponse {}
export interface UpdateCloudExadataInfrastructureInput {
  cloudExadataInfrastructureId: string;
  maintenanceWindow?: MaintenanceWindow;
}
export interface UpdateCloudExadataInfrastructureOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  cloudExadataInfrastructureId: string;
}
export interface UpdateOdbNetworkInput {
  odbNetworkId: string;
  displayName?: string;
  peeredCidrsToBeAdded?: Array<string>;
  peeredCidrsToBeRemoved?: Array<string>;
  s3Access?: Access;
  zeroEtlAccess?: Access;
  s3PolicyDocument?: string;
}
export interface UpdateOdbNetworkOutput {
  displayName?: string;
  status?: ResourceStatus;
  statusReason?: string;
  odbNetworkId: string;
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
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "other";
export type VpcEndpointType = "SERVICENETWORK";
export type WeeksOfMonth = Array<number>;
export interface ZeroEtlAccess {
  status?: ManagedResourceStatus;
  cidr?: string;
}
export declare namespace AcceptMarketplaceRegistration {
  export type Input = AcceptMarketplaceRegistrationInput;
  export type Output = AcceptMarketplaceRegistrationOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOciOnboardingStatus {
  export type Input = GetOciOnboardingStatusInput;
  export type Output = GetOciOnboardingStatusOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace InitializeService {
  export type Input = InitializeServiceInput;
  export type Output = InitializeServiceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDbSystemShapes {
  export type Input = ListDbSystemShapesInput;
  export type Output = ListDbSystemShapesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGiVersions {
  export type Input = ListGiVersionsInput;
  export type Output = ListGiVersionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSystemVersions {
  export type Input = ListSystemVersionsInput;
  export type Output = ListSystemVersionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace CreateCloudAutonomousVmCluster {
  export type Input = CreateCloudAutonomousVmClusterInput;
  export type Output = CreateCloudAutonomousVmClusterOutput;
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

export declare namespace CreateCloudExadataInfrastructure {
  export type Input = CreateCloudExadataInfrastructureInput;
  export type Output = CreateCloudExadataInfrastructureOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCloudVmCluster {
  export type Input = CreateCloudVmClusterInput;
  export type Output = CreateCloudVmClusterOutput;
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

export declare namespace CreateOdbNetwork {
  export type Input = CreateOdbNetworkInput;
  export type Output = CreateOdbNetworkOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateOdbPeeringConnection {
  export type Input = CreateOdbPeeringConnectionInput;
  export type Output = CreateOdbPeeringConnectionOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCloudAutonomousVmCluster {
  export type Input = DeleteCloudAutonomousVmClusterInput;
  export type Output = DeleteCloudAutonomousVmClusterOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCloudExadataInfrastructure {
  export type Input = DeleteCloudExadataInfrastructureInput;
  export type Output = DeleteCloudExadataInfrastructureOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCloudVmCluster {
  export type Input = DeleteCloudVmClusterInput;
  export type Output = DeleteCloudVmClusterOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteOdbNetwork {
  export type Input = DeleteOdbNetworkInput;
  export type Output = DeleteOdbNetworkOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteOdbPeeringConnection {
  export type Input = DeleteOdbPeeringConnectionInput;
  export type Output = DeleteOdbPeeringConnectionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCloudAutonomousVmCluster {
  export type Input = GetCloudAutonomousVmClusterInput;
  export type Output = GetCloudAutonomousVmClusterOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCloudExadataInfrastructure {
  export type Input = GetCloudExadataInfrastructureInput;
  export type Output = GetCloudExadataInfrastructureOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCloudExadataInfrastructureUnallocatedResources {
  export type Input = GetCloudExadataInfrastructureUnallocatedResourcesInput;
  export type Output = GetCloudExadataInfrastructureUnallocatedResourcesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCloudVmCluster {
  export type Input = GetCloudVmClusterInput;
  export type Output = GetCloudVmClusterOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDbNode {
  export type Input = GetDbNodeInput;
  export type Output = GetDbNodeOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDbServer {
  export type Input = GetDbServerInput;
  export type Output = GetDbServerOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOdbNetwork {
  export type Input = GetOdbNetworkInput;
  export type Output = GetOdbNetworkOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOdbPeeringConnection {
  export type Input = GetOdbPeeringConnectionInput;
  export type Output = GetOdbPeeringConnectionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAutonomousVirtualMachines {
  export type Input = ListAutonomousVirtualMachinesInput;
  export type Output = ListAutonomousVirtualMachinesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCloudAutonomousVmClusters {
  export type Input = ListCloudAutonomousVmClustersInput;
  export type Output = ListCloudAutonomousVmClustersOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCloudExadataInfrastructures {
  export type Input = ListCloudExadataInfrastructuresInput;
  export type Output = ListCloudExadataInfrastructuresOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCloudVmClusters {
  export type Input = ListCloudVmClustersInput;
  export type Output = ListCloudVmClustersOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDbNodes {
  export type Input = ListDbNodesInput;
  export type Output = ListDbNodesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDbServers {
  export type Input = ListDbServersInput;
  export type Output = ListDbServersOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOdbNetworks {
  export type Input = ListOdbNetworksInput;
  export type Output = ListOdbNetworksOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOdbPeeringConnections {
  export type Input = ListOdbPeeringConnectionsInput;
  export type Output = ListOdbPeeringConnectionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RebootDbNode {
  export type Input = RebootDbNodeInput;
  export type Output = RebootDbNodeOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartDbNode {
  export type Input = StartDbNodeInput;
  export type Output = StartDbNodeOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopDbNode {
  export type Input = StopDbNodeInput;
  export type Output = StopDbNodeOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCloudExadataInfrastructure {
  export type Input = UpdateCloudExadataInfrastructureInput;
  export type Output = UpdateCloudExadataInfrastructureOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOdbNetwork {
  export type Input = UpdateOdbNetworkInput;
  export type Output = UpdateOdbNetworkOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

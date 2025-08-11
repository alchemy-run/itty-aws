import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class RedshiftServerless extends AWSServiceClient {
  createCustomDomainAssociation(
    input: CreateCustomDomainAssociationRequest,
  ): Effect.Effect<
    CreateCustomDomainAssociationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCustomDomainAssociation(
    input: DeleteCustomDomainAssociationRequest,
  ): Effect.Effect<
    DeleteCustomDomainAssociationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getCredentials(
    input: GetCredentialsRequest,
  ): Effect.Effect<
    GetCredentialsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getCustomDomainAssociation(
    input: GetCustomDomainAssociationRequest,
  ): Effect.Effect<
    GetCustomDomainAssociationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getTrack(
    input: GetTrackRequest,
  ): Effect.Effect<
    GetTrackResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCustomDomainAssociations(
    input: ListCustomDomainAssociationsRequest,
  ): Effect.Effect<
    ListCustomDomainAssociationsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidPaginationException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTracks(
    input: ListTracksRequest,
  ): Effect.Effect<
    ListTracksResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidPaginationException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateCustomDomainAssociation(
    input: UpdateCustomDomainAssociationRequest,
  ): Effect.Effect<
    UpdateCustomDomainAssociationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly code?: string;
  readonly message?: string;
}> {}
export type AccountIdList = Array<string>;
export type AmazonResourceName = string;

export interface Association {
  customDomainCertificateArn?: string;
  customDomainCertificateExpiryTime?: Date | string;
  customDomainName?: string;
  workgroupName?: string;
}
export type AssociationList = Array<Association>;
export type Capacity = number;

export type Charge = number;

export interface ConfigParameter {
  parameterKey?: string;
  parameterValue?: string;
}
export type ConfigParameterList = Array<ConfigParameter>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export interface ConvertRecoveryPointToSnapshotRequest {
  recoveryPointId: string;
  snapshotName: string;
  retentionPeriod?: number;
  tags?: Array<Tag>;
}
export interface ConvertRecoveryPointToSnapshotResponse {
  snapshot?: Snapshot;
}
export interface CreateCustomDomainAssociationRequest {
  workgroupName: string;
  customDomainName: string;
  customDomainCertificateArn: string;
}
export interface CreateCustomDomainAssociationResponse {
  customDomainName?: string;
  workgroupName?: string;
  customDomainCertificateArn?: string;
  customDomainCertificateExpiryTime?: Date | string;
}
export interface CreateEndpointAccessRequest {
  endpointName: string;
  subnetIds: Array<string>;
  workgroupName: string;
  vpcSecurityGroupIds?: Array<string>;
  ownerAccount?: string;
}
export interface CreateEndpointAccessResponse {
  endpoint?: EndpointAccess;
}
export interface CreateNamespaceRequest {
  namespaceName: string;
  adminUsername?: string;
  adminUserPassword?: string;
  dbName?: string;
  kmsKeyId?: string;
  defaultIamRoleArn?: string;
  iamRoles?: Array<string>;
  logExports?: Array<string>;
  tags?: Array<Tag>;
  manageAdminPassword?: boolean;
  adminPasswordSecretKmsKeyId?: string;
  redshiftIdcApplicationArn?: string;
}
export interface CreateNamespaceResponse {
  namespace?: Namespace;
}
export interface CreateReservationRequest {
  capacity: number;
  offeringId: string;
  clientToken?: string;
}
export interface CreateReservationResponse {
  reservation?: Reservation;
}
export interface CreateScheduledActionRequest {
  scheduledActionName: string;
  targetAction: TargetAction;
  schedule: Schedule;
  roleArn: string;
  namespaceName: string;
  enabled?: boolean;
  scheduledActionDescription?: string;
  startTime?: Date | string;
  endTime?: Date | string;
}
export interface CreateScheduledActionResponse {
  scheduledAction?: ScheduledActionResponse;
}
export interface CreateSnapshotCopyConfigurationRequest {
  namespaceName: string;
  destinationRegion: string;
  snapshotRetentionPeriod?: number;
  destinationKmsKeyId?: string;
}
export interface CreateSnapshotCopyConfigurationResponse {
  snapshotCopyConfiguration: SnapshotCopyConfiguration;
}
export interface CreateSnapshotRequest {
  namespaceName: string;
  snapshotName: string;
  retentionPeriod?: number;
  tags?: Array<Tag>;
}
export interface CreateSnapshotResponse {
  snapshot?: Snapshot;
}
export interface CreateSnapshotScheduleActionParameters {
  namespaceName: string;
  snapshotNamePrefix: string;
  retentionPeriod?: number;
  tags?: Array<Tag>;
}
export interface CreateUsageLimitRequest {
  resourceArn: string;
  usageType: string;
  amount: number;
  period?: string;
  breachAction?: string;
}
export interface CreateUsageLimitResponse {
  usageLimit?: UsageLimit;
}
export interface CreateWorkgroupRequest {
  workgroupName: string;
  namespaceName: string;
  baseCapacity?: number;
  enhancedVpcRouting?: boolean;
  configParameters?: Array<ConfigParameter>;
  securityGroupIds?: Array<string>;
  subnetIds?: Array<string>;
  publiclyAccessible?: boolean;
  tags?: Array<Tag>;
  port?: number;
  maxCapacity?: number;
  pricePerformanceTarget?: PerformanceTarget;
  ipAddressType?: string;
  trackName?: string;
}
export interface CreateWorkgroupResponse {
  workgroup?: Workgroup;
}
export type CurrencyCode = string;

export type CustomDomainCertificateArnString = string;

export type CustomDomainName = string;

export type DbName = string;

export type DbPassword = string;

export type DbUser = string;

export interface DeleteCustomDomainAssociationRequest {
  workgroupName: string;
  customDomainName: string;
}
export interface DeleteCustomDomainAssociationResponse {}
export interface DeleteEndpointAccessRequest {
  endpointName: string;
}
export interface DeleteEndpointAccessResponse {
  endpoint?: EndpointAccess;
}
export interface DeleteNamespaceRequest {
  namespaceName: string;
  finalSnapshotName?: string;
  finalSnapshotRetentionPeriod?: number;
}
export interface DeleteNamespaceResponse {
  namespace: Namespace;
}
export interface DeleteResourcePolicyRequest {
  resourceArn: string;
}
export interface DeleteResourcePolicyResponse {}
export interface DeleteScheduledActionRequest {
  scheduledActionName: string;
}
export interface DeleteScheduledActionResponse {
  scheduledAction?: ScheduledActionResponse;
}
export interface DeleteSnapshotCopyConfigurationRequest {
  snapshotCopyConfigurationId: string;
}
export interface DeleteSnapshotCopyConfigurationResponse {
  snapshotCopyConfiguration: SnapshotCopyConfiguration;
}
export interface DeleteSnapshotRequest {
  snapshotName: string;
}
export interface DeleteSnapshotResponse {
  snapshot?: Snapshot;
}
export interface DeleteUsageLimitRequest {
  usageLimitId: string;
}
export interface DeleteUsageLimitResponse {
  usageLimit?: UsageLimit;
}
export interface DeleteWorkgroupRequest {
  workgroupName: string;
}
export interface DeleteWorkgroupResponse {
  workgroup: Workgroup;
}
export type Duration = number;

export interface Endpoint {
  address?: string;
  port?: number;
  vpcEndpoints?: Array<VpcEndpoint>;
}
export interface EndpointAccess {
  endpointName?: string;
  endpointStatus?: string;
  workgroupName?: string;
  endpointCreateTime?: Date | string;
  port?: number;
  address?: string;
  subnetIds?: Array<string>;
  vpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
  vpcEndpoint?: VpcEndpoint;
  endpointArn?: string;
}
export type EndpointAccessList = Array<EndpointAccess>;
export interface GetCredentialsRequest {
  dbName?: string;
  durationSeconds?: number;
  workgroupName?: string;
  customDomainName?: string;
}
export interface GetCredentialsResponse {
  dbUser?: string;
  dbPassword?: string;
  expiration?: Date | string;
  nextRefreshTime?: Date | string;
}
export interface GetCustomDomainAssociationRequest {
  customDomainName: string;
  workgroupName: string;
}
export interface GetCustomDomainAssociationResponse {
  customDomainName?: string;
  workgroupName?: string;
  customDomainCertificateArn?: string;
  customDomainCertificateExpiryTime?: Date | string;
}
export interface GetEndpointAccessRequest {
  endpointName: string;
}
export interface GetEndpointAccessResponse {
  endpoint?: EndpointAccess;
}
export interface GetNamespaceRequest {
  namespaceName: string;
}
export interface GetNamespaceResponse {
  namespace: Namespace;
}
export interface GetRecoveryPointRequest {
  recoveryPointId: string;
}
export interface GetRecoveryPointResponse {
  recoveryPoint?: RecoveryPoint;
}
export interface GetReservationOfferingRequest {
  offeringId: string;
}
export interface GetReservationOfferingResponse {
  reservationOffering: ReservationOffering;
}
export interface GetReservationRequest {
  reservationId: string;
}
export interface GetReservationResponse {
  reservation: Reservation;
}
export interface GetResourcePolicyRequest {
  resourceArn: string;
}
export interface GetResourcePolicyResponse {
  resourcePolicy?: ResourcePolicy;
}
export interface GetScheduledActionRequest {
  scheduledActionName: string;
}
export interface GetScheduledActionResponse {
  scheduledAction?: ScheduledActionResponse;
}
export interface GetSnapshotRequest {
  snapshotName?: string;
  ownerAccount?: string;
  snapshotArn?: string;
}
export interface GetSnapshotResponse {
  snapshot?: Snapshot;
}
export interface GetTableRestoreStatusRequest {
  tableRestoreRequestId: string;
}
export interface GetTableRestoreStatusResponse {
  tableRestoreStatus?: TableRestoreStatus;
}
export interface GetTrackRequest {
  trackName: string;
}
export interface GetTrackResponse {
  track?: ServerlessTrack;
}
export interface GetUsageLimitRequest {
  usageLimitId: string;
}
export interface GetUsageLimitResponse {
  usageLimit?: UsageLimit;
}
export interface GetWorkgroupRequest {
  workgroupName: string;
}
export interface GetWorkgroupResponse {
  workgroup: Workgroup;
}
export type IamRoleArn = string;

export type IamRoleArnList = Array<string>;
export declare class InsufficientCapacityException extends EffectData.TaggedError(
  "InsufficientCapacityException",
)<{
  readonly message: string;
}> {}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export declare class InvalidPaginationException extends EffectData.TaggedError(
  "InvalidPaginationException",
)<{
  readonly message: string;
}> {}
export type IpAddressType = string;

export declare class Ipv6CidrBlockNotFoundException extends EffectData.TaggedError(
  "Ipv6CidrBlockNotFoundException",
)<{
  readonly message: string;
}> {}
export type KmsKeyId = string;

export interface ListCustomDomainAssociationsRequest {
  nextToken?: string;
  maxResults?: number;
  customDomainName?: string;
  customDomainCertificateArn?: string;
}
export interface ListCustomDomainAssociationsResponse {
  nextToken?: string;
  associations?: Array<Association>;
}
export interface ListEndpointAccessRequest {
  nextToken?: string;
  maxResults?: number;
  workgroupName?: string;
  vpcId?: string;
  ownerAccount?: string;
}
export interface ListEndpointAccessResponse {
  nextToken?: string;
  endpoints: Array<EndpointAccess>;
}
export interface ListManagedWorkgroupsRequest {
  sourceArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListManagedWorkgroupsResponse {
  nextToken?: string;
  managedWorkgroups?: Array<ManagedWorkgroupListItem>;
}
export interface ListNamespacesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListNamespacesResponse {
  nextToken?: string;
  namespaces: Array<Namespace>;
}
export interface ListRecoveryPointsRequest {
  nextToken?: string;
  maxResults?: number;
  startTime?: Date | string;
  endTime?: Date | string;
  namespaceName?: string;
  namespaceArn?: string;
}
export interface ListRecoveryPointsResponse {
  recoveryPoints?: Array<RecoveryPoint>;
  nextToken?: string;
}
export interface ListReservationOfferingsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListReservationOfferingsResponse {
  reservationOfferingsList: Array<ReservationOffering>;
  nextToken?: string;
}
export interface ListReservationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListReservationsResponse {
  reservationsList: Array<Reservation>;
  nextToken?: string;
}
export interface ListScheduledActionsRequest {
  nextToken?: string;
  maxResults?: number;
  namespaceName?: string;
}
export interface ListScheduledActionsResponse {
  nextToken?: string;
  scheduledActions?: Array<ScheduledActionAssociation>;
}
export interface ListSnapshotCopyConfigurationsRequest {
  namespaceName?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSnapshotCopyConfigurationsResponse {
  nextToken?: string;
  snapshotCopyConfigurations: Array<SnapshotCopyConfiguration>;
}
export interface ListSnapshotsRequest {
  nextToken?: string;
  maxResults?: number;
  namespaceName?: string;
  namespaceArn?: string;
  ownerAccount?: string;
  startTime?: Date | string;
  endTime?: Date | string;
}
export interface ListSnapshotsResponse {
  nextToken?: string;
  snapshots?: Array<Snapshot>;
}
export interface ListTableRestoreStatusRequest {
  nextToken?: string;
  maxResults?: number;
  namespaceName?: string;
  workgroupName?: string;
}
export interface ListTableRestoreStatusResponse {
  nextToken?: string;
  tableRestoreStatuses?: Array<TableRestoreStatus>;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export interface ListTracksRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListTracksResponse {
  tracks?: Array<ServerlessTrack>;
  nextToken?: string;
}
export interface ListUsageLimitsRequest {
  resourceArn?: string;
  usageType?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListUsageLimitsResponse {
  usageLimits?: Array<UsageLimit>;
  nextToken?: string;
}
export interface ListWorkgroupsRequest {
  nextToken?: string;
  maxResults?: number;
  ownerAccount?: string;
}
export interface ListWorkgroupsResponse {
  nextToken?: string;
  workgroups: Array<Workgroup>;
}
export type LogExport = string;

export type LogExportList = Array<string>;
export interface ManagedWorkgroupListItem {
  managedWorkgroupName?: string;
  managedWorkgroupId?: string;
  sourceArn?: string;
  status?: ManagedWorkgroupStatus;
  creationDate?: Date | string;
}
export type ManagedWorkgroupName = string;

export type ManagedWorkgroups = Array<ManagedWorkgroupListItem>;
export type ManagedWorkgroupStatus =
  | "CREATING"
  | "DELETING"
  | "MODIFYING"
  | "AVAILABLE"
  | "NOT_AVAILABLE";
export interface Namespace {
  namespaceArn?: string;
  namespaceId?: string;
  namespaceName?: string;
  adminUsername?: string;
  dbName?: string;
  kmsKeyId?: string;
  defaultIamRoleArn?: string;
  iamRoles?: Array<string>;
  logExports?: Array<string>;
  status?: string;
  creationDate?: Date | string;
  adminPasswordSecretArn?: string;
  adminPasswordSecretKmsKeyId?: string;
}
export type NamespaceList = Array<Namespace>;
export type NamespaceName = string;

export type NamespaceStatus = string;

export interface NetworkInterface {
  networkInterfaceId?: string;
  subnetId?: string;
  privateIpAddress?: string;
  availabilityZone?: string;
  ipv6Address?: string;
}
export type NetworkInterfaceList = Array<NetworkInterface>;
export type NextInvocationsList = Array<Date | string>;
export type OfferingId = string;

export type OfferingType = string;

export type OwnerAccount = string;

export type PaginationToken = string;

export type ParameterKey = string;

export type ParameterValue = string;

export interface PerformanceTarget {
  status?: string;
  level?: number;
}
export type PerformanceTargetStatus = string;

export interface PutResourcePolicyRequest {
  resourceArn: string;
  policy: string;
}
export interface PutResourcePolicyResponse {
  resourcePolicy?: ResourcePolicy;
}
export interface RecoveryPoint {
  recoveryPointId?: string;
  recoveryPointCreateTime?: Date | string;
  totalSizeInMegaBytes?: number;
  namespaceName?: string;
  workgroupName?: string;
  namespaceArn?: string;
}
export type RecoveryPointList = Array<RecoveryPoint>;
export type RedshiftIdcApplicationArn = string;

export interface Reservation {
  reservationId?: string;
  reservationArn?: string;
  startDate?: Date | string;
  endDate?: Date | string;
  capacity?: number;
  offering?: ReservationOffering;
  status?: string;
}
export type ReservationArn = string;

export type ReservationId = string;

export interface ReservationOffering {
  offeringId?: string;
  duration?: number;
  upfrontCharge?: number;
  hourlyCharge?: number;
  currencyCode?: string;
  offeringType?: string;
}
export type ReservationOfferingsList = Array<ReservationOffering>;
export type ReservationsList = Array<Reservation>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceName?: string;
}> {}
export interface ResourcePolicy {
  resourceArn?: string;
  policy?: string;
}
export interface RestoreFromRecoveryPointRequest {
  recoveryPointId: string;
  namespaceName: string;
  workgroupName: string;
}
export interface RestoreFromRecoveryPointResponse {
  recoveryPointId?: string;
  namespace?: Namespace;
}
export interface RestoreFromSnapshotRequest {
  namespaceName: string;
  workgroupName: string;
  snapshotName?: string;
  snapshotArn?: string;
  ownerAccount?: string;
  manageAdminPassword?: boolean;
  adminPasswordSecretKmsKeyId?: string;
}
export interface RestoreFromSnapshotResponse {
  snapshotName?: string;
  ownerAccount?: string;
  namespace?: Namespace;
}
export interface RestoreTableFromRecoveryPointRequest {
  namespaceName: string;
  workgroupName: string;
  recoveryPointId: string;
  sourceDatabaseName: string;
  sourceSchemaName?: string;
  sourceTableName: string;
  targetDatabaseName?: string;
  targetSchemaName?: string;
  newTableName: string;
  activateCaseSensitiveIdentifier?: boolean;
}
export interface RestoreTableFromRecoveryPointResponse {
  tableRestoreStatus?: TableRestoreStatus;
}
export interface RestoreTableFromSnapshotRequest {
  namespaceName: string;
  workgroupName: string;
  snapshotName: string;
  sourceDatabaseName: string;
  sourceSchemaName?: string;
  sourceTableName: string;
  targetDatabaseName?: string;
  targetSchemaName?: string;
  newTableName: string;
  activateCaseSensitiveIdentifier?: boolean;
}
export interface RestoreTableFromSnapshotResponse {
  tableRestoreStatus?: TableRestoreStatus;
}
interface _Schedule {
  at?: Date | string;
  cron?: string;
}

export type Schedule =
  | (_Schedule & { at: Date | string })
  | (_Schedule & { cron: string });
export interface ScheduledActionAssociation {
  namespaceName?: string;
  scheduledActionName?: string;
}
export type ScheduledActionName = string;

export interface ScheduledActionResponse {
  scheduledActionName?: string;
  schedule?: Schedule;
  scheduledActionDescription?: string;
  nextInvocations?: Array<Date | string>;
  roleArn?: string;
  state?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  targetAction?: TargetAction;
  namespaceName?: string;
  scheduledActionUuid?: string;
}
export type ScheduledActionsList = Array<ScheduledActionAssociation>;
export type SecurityGroupId = string;

export type SecurityGroupIdList = Array<string>;
export interface ServerlessTrack {
  trackName?: string;
  workgroupVersion?: string;
  updateTargets?: Array<UpdateTarget>;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export interface Snapshot {
  namespaceName?: string;
  namespaceArn?: string;
  snapshotName?: string;
  snapshotCreateTime?: Date | string;
  adminUsername?: string;
  status?: string;
  kmsKeyId?: string;
  ownerAccount?: string;
  totalBackupSizeInMegaBytes?: number;
  actualIncrementalBackupSizeInMegaBytes?: number;
  backupProgressInMegaBytes?: number;
  currentBackupRateInMegaBytesPerSecond?: number;
  estimatedSecondsToCompletion?: number;
  elapsedTimeInSeconds?: number;
  snapshotRetentionPeriod?: number;
  snapshotRemainingDays?: number;
  snapshotRetentionStartTime?: Date | string;
  snapshotArn?: string;
  accountsWithRestoreAccess?: Array<string>;
  accountsWithProvisionedRestoreAccess?: Array<string>;
  adminPasswordSecretArn?: string;
  adminPasswordSecretKmsKeyId?: string;
}
export interface SnapshotCopyConfiguration {
  snapshotCopyConfigurationId?: string;
  snapshotCopyConfigurationArn?: string;
  namespaceName?: string;
  destinationRegion?: string;
  snapshotRetentionPeriod?: number;
  destinationKmsKeyId?: string;
}
export type SnapshotCopyConfigurations = Array<SnapshotCopyConfiguration>;
export type SnapshotList = Array<Snapshot>;
export type SnapshotNamePrefix = string;

export type SnapshotStatus = string;

export type SourceArn = string;

export type State = string;

export type Status = string;

export type SubnetId = string;

export type SubnetIdList = Array<string>;
export interface TableRestoreStatus {
  tableRestoreRequestId?: string;
  status?: string;
  message?: string;
  requestTime?: Date | string;
  namespaceName?: string;
  workgroupName?: string;
  snapshotName?: string;
  progressInMegaBytes?: number;
  totalDataInMegaBytes?: number;
  sourceDatabaseName?: string;
  sourceSchemaName?: string;
  sourceTableName?: string;
  targetDatabaseName?: string;
  targetSchemaName?: string;
  newTableName?: string;
  recoveryPointId?: string;
}
export type TableRestoreStatusList = Array<TableRestoreStatus>;
export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

interface _TargetAction {
  createSnapshot?: CreateSnapshotScheduleActionParameters;
}

export type TargetAction = _TargetAction & {
  createSnapshot: CreateSnapshotScheduleActionParameters;
};
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly code?: string;
  readonly message?: string;
}> {}
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export type TrackList = Array<ServerlessTrack>;
export type TrackName = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateCustomDomainAssociationRequest {
  workgroupName: string;
  customDomainName: string;
  customDomainCertificateArn: string;
}
export interface UpdateCustomDomainAssociationResponse {
  customDomainName?: string;
  workgroupName?: string;
  customDomainCertificateArn?: string;
  customDomainCertificateExpiryTime?: Date | string;
}
export interface UpdateEndpointAccessRequest {
  endpointName: string;
  vpcSecurityGroupIds?: Array<string>;
}
export interface UpdateEndpointAccessResponse {
  endpoint?: EndpointAccess;
}
export interface UpdateNamespaceRequest {
  namespaceName: string;
  adminUserPassword?: string;
  adminUsername?: string;
  kmsKeyId?: string;
  defaultIamRoleArn?: string;
  iamRoles?: Array<string>;
  logExports?: Array<string>;
  manageAdminPassword?: boolean;
  adminPasswordSecretKmsKeyId?: string;
}
export interface UpdateNamespaceResponse {
  namespace: Namespace;
}
export interface UpdateScheduledActionRequest {
  scheduledActionName: string;
  targetAction?: TargetAction;
  schedule?: Schedule;
  roleArn?: string;
  enabled?: boolean;
  scheduledActionDescription?: string;
  startTime?: Date | string;
  endTime?: Date | string;
}
export interface UpdateScheduledActionResponse {
  scheduledAction?: ScheduledActionResponse;
}
export interface UpdateSnapshotCopyConfigurationRequest {
  snapshotCopyConfigurationId: string;
  snapshotRetentionPeriod?: number;
}
export interface UpdateSnapshotCopyConfigurationResponse {
  snapshotCopyConfiguration: SnapshotCopyConfiguration;
}
export interface UpdateSnapshotRequest {
  snapshotName: string;
  retentionPeriod?: number;
}
export interface UpdateSnapshotResponse {
  snapshot?: Snapshot;
}
export interface UpdateTarget {
  trackName?: string;
  workgroupVersion?: string;
}
export type UpdateTargetsList = Array<UpdateTarget>;
export interface UpdateUsageLimitRequest {
  usageLimitId: string;
  amount?: number;
  breachAction?: string;
}
export interface UpdateUsageLimitResponse {
  usageLimit?: UsageLimit;
}
export interface UpdateWorkgroupRequest {
  workgroupName: string;
  baseCapacity?: number;
  enhancedVpcRouting?: boolean;
  configParameters?: Array<ConfigParameter>;
  publiclyAccessible?: boolean;
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  port?: number;
  maxCapacity?: number;
  ipAddressType?: string;
  pricePerformanceTarget?: PerformanceTarget;
  trackName?: string;
}
export interface UpdateWorkgroupResponse {
  workgroup: Workgroup;
}
export interface UsageLimit {
  usageLimitId?: string;
  usageLimitArn?: string;
  resourceArn?: string;
  usageType?: string;
  amount?: number;
  period?: string;
  breachAction?: string;
}
export type UsageLimitBreachAction = string;

export type UsageLimitPeriod = string;

export type UsageLimits = Array<UsageLimit>;
export type UsageLimitUsageType = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export interface VpcEndpoint {
  vpcEndpointId?: string;
  vpcId?: string;
  networkInterfaces?: Array<NetworkInterface>;
}
export type VpcEndpointList = Array<VpcEndpoint>;
export type VpcIds = Array<string>;
export type VpcSecurityGroupId = string;

export type VpcSecurityGroupIdList = Array<string>;
export interface VpcSecurityGroupMembership {
  vpcSecurityGroupId?: string;
  status?: string;
}
export type VpcSecurityGroupMembershipList = Array<VpcSecurityGroupMembership>;
export interface Workgroup {
  workgroupId?: string;
  workgroupArn?: string;
  workgroupName?: string;
  namespaceName?: string;
  baseCapacity?: number;
  enhancedVpcRouting?: boolean;
  configParameters?: Array<ConfigParameter>;
  securityGroupIds?: Array<string>;
  subnetIds?: Array<string>;
  status?: string;
  endpoint?: Endpoint;
  publiclyAccessible?: boolean;
  creationDate?: Date | string;
  port?: number;
  customDomainName?: string;
  customDomainCertificateArn?: string;
  customDomainCertificateExpiryTime?: Date | string;
  workgroupVersion?: string;
  patchVersion?: string;
  maxCapacity?: number;
  crossAccountVpcs?: Array<string>;
  ipAddressType?: string;
  pricePerformanceTarget?: PerformanceTarget;
  trackName?: string;
  pendingTrackName?: string;
}
export type WorkgroupList = Array<Workgroup>;
export type WorkgroupName = string;

export type WorkgroupStatus = string;

export declare namespace CreateCustomDomainAssociation {
  export type Input = CreateCustomDomainAssociationRequest;
  export type Output = CreateCustomDomainAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCustomDomainAssociation {
  export type Input = DeleteCustomDomainAssociationRequest;
  export type Output = DeleteCustomDomainAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCredentials {
  export type Input = GetCredentialsRequest;
  export type Output = GetCredentialsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCustomDomainAssociation {
  export type Input = GetCustomDomainAssociationRequest;
  export type Output = GetCustomDomainAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTrack {
  export type Input = GetTrackRequest;
  export type Output = GetTrackResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCustomDomainAssociations {
  export type Input = ListCustomDomainAssociationsRequest;
  export type Output = ListCustomDomainAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidPaginationException
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

export declare namespace ListTracks {
  export type Input = ListTracksRequest;
  export type Output = ListTracksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidPaginationException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
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
    | TooManyTagsException
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

export declare namespace UpdateCustomDomainAssociation {
  export type Input = UpdateCustomDomainAssociationRequest;
  export type Output = UpdateCustomDomainAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

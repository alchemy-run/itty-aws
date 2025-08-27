import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class WorkspacesInstances extends AWSServiceClient {
  associateVolume(
    input: AssociateVolumeRequest,
  ): Effect.Effect<
    AssociateVolumeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createVolume(
    input: CreateVolumeRequest,
  ): Effect.Effect<
    CreateVolumeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createWorkspaceInstance(
    input: CreateWorkspaceInstanceRequest,
  ): Effect.Effect<
    CreateWorkspaceInstanceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteVolume(
    input: DeleteVolumeRequest,
  ): Effect.Effect<
    DeleteVolumeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteWorkspaceInstance(
    input: DeleteWorkspaceInstanceRequest,
  ): Effect.Effect<
    DeleteWorkspaceInstanceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateVolume(
    input: DisassociateVolumeRequest,
  ): Effect.Effect<
    DisassociateVolumeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getWorkspaceInstance(
    input: GetWorkspaceInstanceRequest,
  ): Effect.Effect<
    GetWorkspaceInstanceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInstanceTypes(
    input: ListInstanceTypesRequest,
  ): Effect.Effect<
    ListInstanceTypesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRegions(
    input: ListRegionsRequest,
  ): Effect.Effect<
    ListRegionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listWorkspaceInstances(
    input: ListWorkspaceInstancesRequest,
  ): Effect.Effect<
    ListWorkspaceInstancesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
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
  readonly Message: string;
}> {}
export type AmdSevSnpEnum = "enabled" | "disabled";
export type ARN = string;

export interface AssociateVolumeRequest {
  WorkspaceInstanceId: string;
  VolumeId: string;
  Device: string;
}
export interface AssociateVolumeResponse {}
export type AutoRecoveryEnum = "disabled" | "default";
export type AvailabilityZone = string;

export type BandwidthWeightingEnum = "default" | "vpc-1" | "ebs-1";
export interface BlockDeviceMappingRequest {
  DeviceName?: string;
  Ebs?: EbsBlockDevice;
  NoDevice?: string;
  VirtualName?: string;
}
export type BlockDeviceMappings = Array<BlockDeviceMappingRequest>;
export type CapacityReservationPreferenceEnum =
  | "capacity-reservations-only"
  | "open"
  | "none";
export interface CapacityReservationSpecification {
  CapacityReservationPreference?: CapacityReservationPreferenceEnum;
  CapacityReservationTarget?: CapacityReservationTarget;
}
export interface CapacityReservationTarget {
  CapacityReservationId?: string;
  CapacityReservationResourceGroupArn?: string;
}
export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export interface ConnectionTrackingSpecificationRequest {
  TcpEstablishedTimeout?: number;
  UdpStreamTimeout?: number;
  UdpTimeout?: number;
}
export type CpuCreditsEnum = "standard" | "unlimited";
export interface CpuOptionsRequest {
  AmdSevSnp?: AmdSevSnpEnum;
  CoreCount?: number;
  ThreadsPerCore?: number;
}
export interface CreateVolumeRequest {
  AvailabilityZone: string;
  ClientToken?: string;
  Encrypted?: boolean;
  Iops?: number;
  KmsKeyId?: string;
  SizeInGB?: number;
  SnapshotId?: string;
  TagSpecifications?: Array<TagSpecification>;
  Throughput?: number;
  VolumeType?: VolumeTypeEnum;
}
export interface CreateVolumeResponse {
  VolumeId?: string;
}
export interface CreateWorkspaceInstanceRequest {
  ClientToken?: string;
  Tags?: Array<Tag>;
  ManagedInstance: ManagedInstanceRequest;
}
export interface CreateWorkspaceInstanceResponse {
  WorkspaceInstanceId?: string;
}
export interface CreditSpecificationRequest {
  CpuCredits?: CpuCreditsEnum;
}
export interface DeleteVolumeRequest {
  VolumeId: string;
}
export interface DeleteVolumeResponse {}
export interface DeleteWorkspaceInstanceRequest {
  WorkspaceInstanceId: string;
}
export interface DeleteWorkspaceInstanceResponse {}
export type Description = string;

export type DeviceName = string;

export type DisassociateModeEnum = "FORCE" | "NO_FORCE";
export interface DisassociateVolumeRequest {
  WorkspaceInstanceId: string;
  VolumeId: string;
  Device?: string;
  DisassociateMode?: DisassociateModeEnum;
}
export interface DisassociateVolumeResponse {}
export interface EbsBlockDevice {
  VolumeType?: VolumeTypeEnum;
  Encrypted?: boolean;
  KmsKeyId?: string;
  Iops?: number;
  Throughput?: number;
  VolumeSize?: number;
}
export interface EC2InstanceError {
  EC2ErrorCode?: string;
  EC2ExceptionType?: string;
  EC2ErrorMessage?: string;
}
export type EC2InstanceErrors = Array<EC2InstanceError>;
export interface EC2ManagedInstance {
  InstanceId?: string;
}
export interface EnaSrdSpecificationRequest {
  EnaSrdEnabled?: boolean;
  EnaSrdUdpSpecification?: EnaSrdUdpSpecificationRequest;
}
export interface EnaSrdUdpSpecificationRequest {
  EnaSrdUdpEnabled?: boolean;
}
export interface EnclaveOptionsRequest {
  Enabled?: boolean;
}
export interface GetWorkspaceInstanceRequest {
  WorkspaceInstanceId: string;
}
export interface GetWorkspaceInstanceResponse {
  WorkspaceInstanceErrors?: Array<WorkspaceInstanceError>;
  EC2InstanceErrors?: Array<EC2InstanceError>;
  ProvisionState?: ProvisionStateEnum;
  WorkspaceInstanceId?: string;
  EC2ManagedInstance?: EC2ManagedInstance;
}
export interface HibernationOptionsRequest {
  Configured?: boolean;
}
export type HostId = string;

export type HostnameTypeEnum = "ip-name" | "resource-name";
export type HttpEndpointEnum = "enabled" | "disabled";
export type HttpProtocolIpv6Enum = "enabled" | "disabled";
export type HttpPutResponseHopLimit = number;

export type HttpTokensEnum = "optional" | "required";
export interface IamInstanceProfileSpecification {
  Arn?: string;
  Name?: string;
}
export type ImageId = string;

export type InstanceInterruptionBehaviorEnum = "hibernate" | "stop";
export interface InstanceIpv6Address {
  Ipv6Address?: string;
  IsPrimaryIpv6?: boolean;
}
export interface InstanceMaintenanceOptionsRequest {
  AutoRecovery?: AutoRecoveryEnum;
}
export interface InstanceMarketOptionsRequest {
  MarketType?: MarketTypeEnum;
  SpotOptions?: SpotMarketOptions;
}
export interface InstanceMetadataOptionsRequest {
  HttpEndpoint?: HttpEndpointEnum;
  HttpProtocolIpv6?: HttpProtocolIpv6Enum;
  HttpPutResponseHopLimit?: number;
  HttpTokens?: HttpTokensEnum;
  InstanceMetadataTags?: InstanceMetadataTagsEnum;
}
export type InstanceMetadataTagsEnum = "enabled" | "disabled";
export interface InstanceNetworkInterfaceSpecification {
  AssociateCarrierIpAddress?: boolean;
  AssociatePublicIpAddress?: boolean;
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest;
  Description?: string;
  DeviceIndex?: number;
  EnaSrdSpecification?: EnaSrdSpecificationRequest;
  InterfaceType?: InterfaceTypeEnum;
  Ipv4Prefixes?: Array<Ipv4PrefixSpecificationRequest>;
  Ipv4PrefixCount?: number;
  Ipv6AddressCount?: number;
  Ipv6Addresses?: Array<InstanceIpv6Address>;
  Ipv6Prefixes?: Array<Ipv6PrefixSpecificationRequest>;
  Ipv6PrefixCount?: number;
  NetworkCardIndex?: number;
  NetworkInterfaceId?: string;
  PrimaryIpv6?: boolean;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: Array<PrivateIpAddressSpecification>;
  SecondaryPrivateIpAddressCount?: number;
  Groups?: Array<string>;
  SubnetId?: string;
}
export interface InstanceNetworkPerformanceOptionsRequest {
  BandwidthWeighting?: BandwidthWeightingEnum;
}
export type InstanceType = string;

export interface InstanceTypeInfo {
  InstanceType?: string;
}
export type InstanceTypes = Array<InstanceTypeInfo>;
export type InterfaceTypeEnum = "interface" | "efa" | "efa-only";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
  readonly RetryAfterSeconds?: number;
}> {}
export type Ipv4Address = string;

export type Ipv4Prefix = string;

export type Ipv4Prefixes = Array<Ipv4PrefixSpecificationRequest>;
export interface Ipv4PrefixSpecificationRequest {
  Ipv4Prefix?: string;
}
export type Ipv6Address = string;

export type Ipv6Addresses = Array<InstanceIpv6Address>;
export type Ipv6Prefix = string;

export type Ipv6Prefixes = Array<Ipv6PrefixSpecificationRequest>;
export interface Ipv6PrefixSpecificationRequest {
  Ipv6Prefix?: string;
}
export type KmsKeyId = string;

export interface LicenseConfigurationRequest {
  LicenseConfigurationArn?: string;
}
export type LicenseSpecifications = Array<LicenseConfigurationRequest>;
export interface ListInstanceTypesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListInstanceTypesResponse {
  InstanceTypes: Array<InstanceTypeInfo>;
  NextToken?: string;
}
export interface ListRegionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRegionsResponse {
  Regions: Array<Region>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  WorkspaceInstanceId: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListWorkspaceInstancesRequest {
  ProvisionStates?: Array<ProvisionStateEnum>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListWorkspaceInstancesResponse {
  WorkspaceInstances: Array<WorkspaceInstance>;
  NextToken?: string;
}
export interface ManagedInstanceRequest {
  BlockDeviceMappings?: Array<BlockDeviceMappingRequest>;
  CapacityReservationSpecification?: CapacityReservationSpecification;
  CpuOptions?: CpuOptionsRequest;
  CreditSpecification?: CreditSpecificationRequest;
  DisableApiStop?: boolean;
  EbsOptimized?: boolean;
  EnablePrimaryIpv6?: boolean;
  EnclaveOptions?: EnclaveOptionsRequest;
  HibernationOptions?: HibernationOptionsRequest;
  IamInstanceProfile?: IamInstanceProfileSpecification;
  ImageId?: string;
  InstanceMarketOptions?: InstanceMarketOptionsRequest;
  InstanceType?: string;
  Ipv6Addresses?: Array<InstanceIpv6Address>;
  Ipv6AddressCount?: number;
  KernelId?: string;
  KeyName?: string;
  LicenseSpecifications?: Array<LicenseConfigurationRequest>;
  MaintenanceOptions?: InstanceMaintenanceOptionsRequest;
  MetadataOptions?: InstanceMetadataOptionsRequest;
  Monitoring?: RunInstancesMonitoringEnabled;
  NetworkInterfaces?: Array<InstanceNetworkInterfaceSpecification>;
  NetworkPerformanceOptions?: InstanceNetworkPerformanceOptionsRequest;
  Placement?: Placement;
  PrivateDnsNameOptions?: PrivateDnsNameOptionsRequest;
  PrivateIpAddress?: string;
  RamdiskId?: string;
  SecurityGroupIds?: Array<string>;
  SecurityGroups?: Array<string>;
  SubnetId?: string;
  TagSpecifications?: Array<TagSpecification>;
  UserData?: string;
}
export type MarketTypeEnum = "spot" | "capacity-block";
export type MaxResults = number;

export type NetworkInterfaceId = string;

export type NetworkInterfaces = Array<InstanceNetworkInterfaceSpecification>;
export type NextToken = string;

export type NonNegativeInteger = number;

export interface Placement {
  Affinity?: string;
  AvailabilityZone?: string;
  GroupId?: string;
  GroupName?: string;
  HostId?: string;
  HostResourceGroupArn?: string;
  PartitionNumber?: number;
  Tenancy?: TenancyEnum;
}
export type PlacementGroupId = string;

export interface PrivateDnsNameOptionsRequest {
  HostnameType?: HostnameTypeEnum;
  EnableResourceNameDnsARecord?: boolean;
  EnableResourceNameDnsAAAARecord?: boolean;
}
export type PrivateIpAddresses = Array<PrivateIpAddressSpecification>;
export interface PrivateIpAddressSpecification {
  Primary?: boolean;
  PrivateIpAddress?: string;
}
export type ProvisionStateEnum =
  | "ALLOCATING"
  | "ALLOCATED"
  | "DEALLOCATING"
  | "DEALLOCATED"
  | "ERROR_ALLOCATING"
  | "ERROR_DEALLOCATING";
export type ProvisionStates = Array<ProvisionStateEnum>;
export interface Region {
  RegionName?: string;
}
export type RegionList = Array<Region>;
export type RegionName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export type ResourceTypeEnum =
  | "instance"
  | "volume"
  | "spot-instances-request"
  | "network-interface";
export interface RunInstancesMonitoringEnabled {
  Enabled?: boolean;
}
export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export type SecurityGroupName = string;

export type SecurityGroupNames = Array<string>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
  readonly ServiceCode: string;
  readonly QuotaCode: string;
}> {}
export type SnapshotId = string;

export type SpotInstanceTypeEnum = "one-time" | "persistent";
export interface SpotMarketOptions {
  BlockDurationMinutes?: number;
  InstanceInterruptionBehavior?: InstanceInterruptionBehaviorEnum;
  MaxPrice?: string;
  SpotInstanceType?: SpotInstanceTypeEnum;
  ValidUntilUtc?: Date | string;
}
export type String128 = string;

export type String64 = string;

export type SubnetId = string;

export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  WorkspaceInstanceId: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export interface TagSpecification {
  ResourceType?: ResourceTypeEnum;
  Tags?: Array<Tag>;
}
export type TagSpecifications = Array<TagSpecification>;
export type TagValue = string;

export type TenancyEnum = "default" | "dedicated" | "host";
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly ServiceCode?: string;
  readonly QuotaCode?: string;
  readonly RetryAfterSeconds?: number;
}> {}
export interface UntagResourceRequest {
  WorkspaceInstanceId: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export type UserData = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason: ValidationExceptionReason;
  readonly FieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  Reason: string;
  Message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "UNSUPPORTED_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "DEPENDENCY_FAILURE"
  | "OTHER";
export type VirtualName = string;

export type VolumeId = string;

export type VolumeTypeEnum =
  | "standard"
  | "io1"
  | "io2"
  | "gp2"
  | "sc1"
  | "st1"
  | "gp3";
export interface WorkspaceInstance {
  ProvisionState?: ProvisionStateEnum;
  WorkspaceInstanceId?: string;
  EC2ManagedInstance?: EC2ManagedInstance;
}
export interface WorkspaceInstanceError {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type WorkspaceInstanceErrors = Array<WorkspaceInstanceError>;
export type WorkspaceInstanceId = string;

export type WorkspaceInstances = Array<WorkspaceInstance>;
export declare namespace AssociateVolume {
  export type Input = AssociateVolumeRequest;
  export type Output = AssociateVolumeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateVolume {
  export type Input = CreateVolumeRequest;
  export type Output = CreateVolumeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWorkspaceInstance {
  export type Input = CreateWorkspaceInstanceRequest;
  export type Output = CreateWorkspaceInstanceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteVolume {
  export type Input = DeleteVolumeRequest;
  export type Output = DeleteVolumeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWorkspaceInstance {
  export type Input = DeleteWorkspaceInstanceRequest;
  export type Output = DeleteWorkspaceInstanceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateVolume {
  export type Input = DisassociateVolumeRequest;
  export type Output = DisassociateVolumeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWorkspaceInstance {
  export type Input = GetWorkspaceInstanceRequest;
  export type Output = GetWorkspaceInstanceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInstanceTypes {
  export type Input = ListInstanceTypesRequest;
  export type Output = ListInstanceTypesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRegions {
  export type Input = ListRegionsRequest;
  export type Output = ListRegionsResponse;
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
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWorkspaceInstances {
  export type Input = ListWorkspaceInstancesRequest;
  export type Output = ListWorkspaceInstancesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
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
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

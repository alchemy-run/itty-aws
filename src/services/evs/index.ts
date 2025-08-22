import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class evs extends AWSServiceClient {
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
    | ResourceNotFoundException
    | TagPolicyException
    | TooManyTagsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | TagPolicyException | CommonAwsError
  >;
  createEnvironment(
    input: CreateEnvironmentRequest,
  ): Effect.Effect<
    CreateEnvironmentResponse,
    ValidationException | CommonAwsError
  >;
  createEnvironmentHost(
    input: CreateEnvironmentHostRequest,
  ): Effect.Effect<
    CreateEnvironmentHostResponse,
    ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteEnvironment(
    input: DeleteEnvironmentRequest,
  ): Effect.Effect<
    DeleteEnvironmentResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteEnvironmentHost(
    input: DeleteEnvironmentHostRequest,
  ): Effect.Effect<
    DeleteEnvironmentHostResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getEnvironment(
    input: GetEnvironmentRequest,
  ): Effect.Effect<
    GetEnvironmentResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listEnvironmentHosts(
    input: ListEnvironmentHostsRequest,
  ): Effect.Effect<
    ListEnvironmentHostsResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listEnvironmentVlans(
    input: ListEnvironmentVlansRequest,
  ): Effect.Effect<
    ListEnvironmentVlansResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listEnvironments(
    input: ListEnvironmentsRequest,
  ): Effect.Effect<
    ListEnvironmentsResponse,
    ValidationException | CommonAwsError
  >;
}

export declare class Evs extends evs {}

export type Arn = string;

export interface Check {
  type?: CheckType;
  result?: CheckResult;
  impairedSince?: Date | string;
}
export type CheckResult = "PASSED" | "FAILED" | "UNKNOWN";
export type ChecksList = Array<Check>;
export type CheckType =
  | "KEY_REUSE"
  | "KEY_COVERAGE"
  | "REACHABILITY"
  | "HOST_COUNT";
export type Cidr = string;

export type ClientToken = string;

export interface ConnectivityInfo {
  privateRouteServerPeerings: Array<string>;
}
export interface CreateEnvironmentHostRequest {
  clientToken?: string;
  environmentId: string;
  host: HostInfoForCreate;
}
export interface CreateEnvironmentHostResponse {
  environmentSummary?: EnvironmentSummary;
  host?: Host;
}
export interface CreateEnvironmentRequest {
  clientToken?: string;
  environmentName?: string;
  kmsKeyId?: string;
  tags?: Record<string, string>;
  serviceAccessSecurityGroups?: ServiceAccessSecurityGroups;
  vpcId: string;
  serviceAccessSubnetId: string;
  vcfVersion: VcfVersion;
  termsAccepted: boolean;
  licenseInfo: Array<LicenseInfo>;
  initialVlans: InitialVlans;
  hosts: Array<HostInfoForCreate>;
  connectivityInfo: ConnectivityInfo;
  vcfHostnames: VcfHostnames;
  siteId: string;
}
export interface CreateEnvironmentResponse {
  environment?: Environment;
}
export type DedicatedHostId = string;

export interface DeleteEnvironmentHostRequest {
  clientToken?: string;
  environmentId: string;
  hostName: string;
}
export interface DeleteEnvironmentHostResponse {
  environmentSummary?: EnvironmentSummary;
  host?: Host;
}
export interface DeleteEnvironmentRequest {
  clientToken?: string;
  environmentId: string;
}
export interface DeleteEnvironmentResponse {
  environment?: Environment;
}
export interface Environment {
  environmentId?: string;
  environmentState?: EnvironmentState;
  stateDetails?: string;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  environmentArn?: string;
  environmentName?: string;
  vpcId?: string;
  serviceAccessSubnetId?: string;
  vcfVersion?: VcfVersion;
  termsAccepted?: boolean;
  licenseInfo?: Array<LicenseInfo>;
  siteId?: string;
  environmentStatus?: CheckResult;
  checks?: Array<Check>;
  connectivityInfo?: ConnectivityInfo;
  vcfHostnames?: VcfHostnames;
  kmsKeyId?: string;
  serviceAccessSecurityGroups?: ServiceAccessSecurityGroups;
  credentials?: Array<Secret>;
}
export type EnvironmentId = string;

export type EnvironmentName = string;

export type EnvironmentState =
  | "CREATING"
  | "CREATED"
  | "DELETING"
  | "DELETED"
  | "CREATE_FAILED";
export type EnvironmentStateList = Array<EnvironmentState>;
export interface EnvironmentSummary {
  environmentId?: string;
  environmentName?: string;
  vcfVersion?: VcfVersion;
  environmentStatus?: CheckResult;
  environmentState?: EnvironmentState;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  environmentArn?: string;
}
export type EnvironmentSummaryList = Array<EnvironmentSummary>;
export interface GetEnvironmentRequest {
  environmentId: string;
}
export interface GetEnvironmentResponse {
  environment?: Environment;
}
export interface Host {
  hostName?: string;
  ipAddress?: string;
  keyName?: string;
  instanceType?: InstanceType;
  placementGroupId?: string;
  dedicatedHostId?: string;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  hostState?: HostState;
  stateDetails?: string;
  ec2InstanceId?: string;
  networkInterfaces?: Array<NetworkInterface>;
}
export interface HostInfoForCreate {
  hostName: string;
  keyName: string;
  instanceType: InstanceType;
  placementGroupId?: string;
  dedicatedHostId?: string;
}
export type HostInfoForCreateList = Array<HostInfoForCreate>;
export type HostList = Array<Host>;
export type HostName = string;

export type HostState =
  | "CREATING"
  | "CREATED"
  | "UPDATING"
  | "DELETING"
  | "DELETED"
  | "CREATE_FAILED"
  | "UPDATE_FAILED";
export interface InitialVlanInfo {
  cidr: string;
}
export interface InitialVlans {
  vmkManagement: InitialVlanInfo;
  vmManagement: InitialVlanInfo;
  vMotion: InitialVlanInfo;
  vSan: InitialVlanInfo;
  vTep: InitialVlanInfo;
  edgeVTep: InitialVlanInfo;
  nsxUplink: InitialVlanInfo;
  hcx: InitialVlanInfo;
  expansionVlan1: InitialVlanInfo;
  expansionVlan2: InitialVlanInfo;
}
export type InstanceType = "i4i.metal";
export type IpAddress = string;

export type KeyName = string;

export interface LicenseInfo {
  solutionKey: string;
  vsanKey: string;
}
export type LicenseInfoList = Array<LicenseInfo>;
export interface ListEnvironmentHostsRequest {
  nextToken?: string;
  maxResults?: number;
  environmentId: string;
}
export interface ListEnvironmentHostsResponse {
  nextToken?: string;
  environmentHosts?: Array<Host>;
}
export interface ListEnvironmentsRequest {
  nextToken?: string;
  maxResults?: number;
  state?: Array<EnvironmentState>;
}
export interface ListEnvironmentsResponse {
  nextToken?: string;
  environmentSummaries?: Array<EnvironmentSummary>;
}
export interface ListEnvironmentVlansRequest {
  nextToken?: string;
  maxResults?: number;
  environmentId: string;
}
export interface ListEnvironmentVlansResponse {
  nextToken?: string;
  environmentVlans?: Array<Vlan>;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MaxResults = number;

export interface NetworkInterface {
  networkInterfaceId?: string;
}
export type NetworkInterfaceId = string;

export type NetworkInterfaceList = Array<NetworkInterface>;
export type PaginationToken = string;

export type PlacementGroupId = string;

export type RequestTagMap = Record<string, string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ResponseTagMap = Record<string, string>;
export type RouteServerPeering = string;

export type RouteServerPeeringList = Array<string>;
export interface Secret {
  secretArn?: string;
}
export type SecretList = Array<Secret>;
export type SecurityGroupId = string;

export type SecurityGroups = Array<string>;
export interface ServiceAccessSecurityGroups {
  securityGroups?: Array<string>;
}
export type SolutionKey = string;

export type StateDetails = string;

export type SubnetId = string;

export type TagKey = string;

export type TagKeys = Array<string>;
export declare class TagPolicyException extends EffectData.TaggedError(
  "TagPolicyException",
)<{
  readonly message: string;
}> {}
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
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
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
export interface VcfHostnames {
  vCenter: string;
  nsx: string;
  nsxManager1: string;
  nsxManager2: string;
  nsxManager3: string;
  nsxEdge1: string;
  nsxEdge2: string;
  sddcManager: string;
  cloudBuilder: string;
}
export type VcfVersion = "VCF-5.2.1";
export interface Vlan {
  vlanId?: number;
  cidr?: string;
  availabilityZone?: string;
  functionName?: string;
  subnetId?: string;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  vlanState?: VlanState;
  stateDetails?: string;
}
export type VlanId = number;

export type VlanList = Array<Vlan>;
export type VlanState =
  | "CREATING"
  | "CREATED"
  | "DELETING"
  | "DELETED"
  | "CREATE_FAILED";
export type VpcId = string;

export type VSanLicenseKey = string;

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
    | TagPolicyException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | TagPolicyException
    | CommonAwsError;
}

export declare namespace CreateEnvironment {
  export type Input = CreateEnvironmentRequest;
  export type Output = CreateEnvironmentResponse;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace CreateEnvironmentHost {
  export type Input = CreateEnvironmentHostRequest;
  export type Output = CreateEnvironmentHostResponse;
  export type Error =
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEnvironment {
  export type Input = DeleteEnvironmentRequest;
  export type Output = DeleteEnvironmentResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEnvironmentHost {
  export type Input = DeleteEnvironmentHostRequest;
  export type Output = DeleteEnvironmentHostResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnvironment {
  export type Input = GetEnvironmentRequest;
  export type Output = GetEnvironmentResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironmentHosts {
  export type Input = ListEnvironmentHostsRequest;
  export type Output = ListEnvironmentHostsResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironmentVlans {
  export type Input = ListEnvironmentVlansRequest;
  export type Output = ListEnvironmentVlansResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironments {
  export type Input = ListEnvironmentsRequest;
  export type Output = ListEnvironmentsResponse;
  export type Error = ValidationException | CommonAwsError;
}

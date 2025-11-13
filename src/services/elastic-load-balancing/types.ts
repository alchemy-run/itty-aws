import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ElasticLoadBalancing extends AWSServiceClient {
  addTags(
    input: AddTagsInput,
  ): Effect.Effect<
    AddTagsOutput,
    | AccessPointNotFoundException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError
  >;
  applySecurityGroupsToLoadBalancer(
    input: ApplySecurityGroupsToLoadBalancerInput,
  ): Effect.Effect<
    ApplySecurityGroupsToLoadBalancerOutput,
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | InvalidSecurityGroupException
    | CommonAwsError
  >;
  attachLoadBalancerToSubnets(
    input: AttachLoadBalancerToSubnetsInput,
  ): Effect.Effect<
    AttachLoadBalancerToSubnetsOutput,
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | InvalidSubnetException
    | SubnetNotFoundException
    | CommonAwsError
  >;
  configureHealthCheck(
    input: ConfigureHealthCheckInput,
  ): Effect.Effect<
    ConfigureHealthCheckOutput,
    AccessPointNotFoundException | CommonAwsError
  >;
  createAppCookieStickinessPolicy(
    input: CreateAppCookieStickinessPolicyInput,
  ): Effect.Effect<
    CreateAppCookieStickinessPolicyOutput,
    | AccessPointNotFoundException
    | DuplicatePolicyNameException
    | InvalidConfigurationRequestException
    | TooManyPoliciesException
    | CommonAwsError
  >;
  createLBCookieStickinessPolicy(
    input: CreateLBCookieStickinessPolicyInput,
  ): Effect.Effect<
    CreateLBCookieStickinessPolicyOutput,
    | AccessPointNotFoundException
    | DuplicatePolicyNameException
    | InvalidConfigurationRequestException
    | TooManyPoliciesException
    | CommonAwsError
  >;
  createLoadBalancer(
    input: CreateAccessPointInput,
  ): Effect.Effect<
    CreateAccessPointOutput,
    | CertificateNotFoundException
    | DuplicateAccessPointNameException
    | DuplicateTagKeysException
    | InvalidConfigurationRequestException
    | InvalidSchemeException
    | InvalidSecurityGroupException
    | InvalidSubnetException
    | OperationNotPermittedException
    | SubnetNotFoundException
    | TooManyAccessPointsException
    | TooManyTagsException
    | UnsupportedProtocolException
    | CommonAwsError
  >;
  createLoadBalancerListeners(
    input: CreateLoadBalancerListenerInput,
  ): Effect.Effect<
    CreateLoadBalancerListenerOutput,
    | AccessPointNotFoundException
    | CertificateNotFoundException
    | DuplicateListenerException
    | InvalidConfigurationRequestException
    | UnsupportedProtocolException
    | CommonAwsError
  >;
  createLoadBalancerPolicy(
    input: CreateLoadBalancerPolicyInput,
  ): Effect.Effect<
    CreateLoadBalancerPolicyOutput,
    | AccessPointNotFoundException
    | DuplicatePolicyNameException
    | InvalidConfigurationRequestException
    | PolicyTypeNotFoundException
    | TooManyPoliciesException
    | CommonAwsError
  >;
  deleteLoadBalancer(
    input: DeleteAccessPointInput,
  ): Effect.Effect<DeleteAccessPointOutput, CommonAwsError>;
  deleteLoadBalancerListeners(
    input: DeleteLoadBalancerListenerInput,
  ): Effect.Effect<
    DeleteLoadBalancerListenerOutput,
    AccessPointNotFoundException | CommonAwsError
  >;
  deleteLoadBalancerPolicy(
    input: DeleteLoadBalancerPolicyInput,
  ): Effect.Effect<
    DeleteLoadBalancerPolicyOutput,
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | CommonAwsError
  >;
  deregisterInstancesFromLoadBalancer(
    input: DeregisterEndPointsInput,
  ): Effect.Effect<
    DeregisterEndPointsOutput,
    AccessPointNotFoundException | InvalidEndPointException | CommonAwsError
  >;
  describeAccountLimits(
    input: DescribeAccountLimitsInput,
  ): Effect.Effect<DescribeAccountLimitsOutput, CommonAwsError>;
  describeInstanceHealth(
    input: DescribeEndPointStateInput,
  ): Effect.Effect<
    DescribeEndPointStateOutput,
    | AccessPointNotFoundException
    | InvalidEndPointException
    | InvalidInstance
    | CommonAwsError
  >;
  describeLoadBalancerAttributes(
    input: DescribeLoadBalancerAttributesInput,
  ): Effect.Effect<
    DescribeLoadBalancerAttributesOutput,
    | AccessPointNotFoundException
    | LoadBalancerAttributeNotFoundException
    | CommonAwsError
  >;
  describeLoadBalancerPolicies(
    input: DescribeLoadBalancerPoliciesInput,
  ): Effect.Effect<
    DescribeLoadBalancerPoliciesOutput,
    AccessPointNotFoundException | PolicyNotFoundException | CommonAwsError
  >;
  describeLoadBalancerPolicyTypes(
    input: DescribeLoadBalancerPolicyTypesInput,
  ): Effect.Effect<
    DescribeLoadBalancerPolicyTypesOutput,
    PolicyTypeNotFoundException | CommonAwsError
  >;
  describeLoadBalancers(
    input: DescribeAccessPointsInput,
  ): Effect.Effect<
    DescribeAccessPointsOutput,
    AccessPointNotFoundException | DependencyThrottleException | CommonAwsError
  >;
  describeTags(
    input: DescribeTagsInput,
  ): Effect.Effect<
    DescribeTagsOutput,
    AccessPointNotFoundException | CommonAwsError
  >;
  detachLoadBalancerFromSubnets(
    input: DetachLoadBalancerFromSubnetsInput,
  ): Effect.Effect<
    DetachLoadBalancerFromSubnetsOutput,
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | CommonAwsError
  >;
  disableAvailabilityZonesForLoadBalancer(
    input: RemoveAvailabilityZonesInput,
  ): Effect.Effect<
    RemoveAvailabilityZonesOutput,
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | CommonAwsError
  >;
  enableAvailabilityZonesForLoadBalancer(
    input: AddAvailabilityZonesInput,
  ): Effect.Effect<
    AddAvailabilityZonesOutput,
    AccessPointNotFoundException | CommonAwsError
  >;
  modifyLoadBalancerAttributes(
    input: ModifyLoadBalancerAttributesInput,
  ): Effect.Effect<
    ModifyLoadBalancerAttributesOutput,
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | LoadBalancerAttributeNotFoundException
    | CommonAwsError
  >;
  registerInstancesWithLoadBalancer(
    input: RegisterEndPointsInput,
  ): Effect.Effect<
    RegisterEndPointsOutput,
    AccessPointNotFoundException | InvalidEndPointException | CommonAwsError
  >;
  removeTags(
    input: RemoveTagsInput,
  ): Effect.Effect<
    RemoveTagsOutput,
    AccessPointNotFoundException | CommonAwsError
  >;
  setLoadBalancerListenerSSLCertificate(
    input: SetLoadBalancerListenerSSLCertificateInput,
  ): Effect.Effect<
    SetLoadBalancerListenerSSLCertificateOutput,
    | AccessPointNotFoundException
    | CertificateNotFoundException
    | InvalidConfigurationRequestException
    | ListenerNotFoundException
    | UnsupportedProtocolException
    | CommonAwsError
  >;
  setLoadBalancerPoliciesForBackendServer(
    input: SetLoadBalancerPoliciesForBackendServerInput,
  ): Effect.Effect<
    SetLoadBalancerPoliciesForBackendServerOutput,
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | PolicyNotFoundException
    | CommonAwsError
  >;
  setLoadBalancerPoliciesOfListener(
    input: SetLoadBalancerPoliciesOfListenerInput,
  ): Effect.Effect<
    SetLoadBalancerPoliciesOfListenerOutput,
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | ListenerNotFoundException
    | PolicyNotFoundException
    | CommonAwsError
  >;
}

export interface AccessLog {
  Enabled: boolean;
  S3BucketName?: string;
  EmitInterval?: number;
  S3BucketPrefix?: string;
}
export type AccessLogEnabled = boolean;

export type AccessLogInterval = number;

export type AccessLogPrefix = string;

export type AccessPointName = string;

export declare class AccessPointNotFoundException extends EffectData.TaggedError(
  "AccessPointNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type AccessPointPort = number;

export interface AddAvailabilityZonesInput {
  LoadBalancerName: string;
  AvailabilityZones: Array<string>;
}
export interface AddAvailabilityZonesOutput {
  AvailabilityZones?: Array<string>;
}
export interface AdditionalAttribute {
  Key?: string;
  Value?: string;
}
export type AdditionalAttributeKey = string;

export type AdditionalAttributes = Array<AdditionalAttribute>;
export type AdditionalAttributeValue = string;

export interface AddTagsInput {
  LoadBalancerNames: Array<string>;
  Tags: Array<Tag>;
}
export interface AddTagsOutput {}
export type AppCookieStickinessPolicies = Array<AppCookieStickinessPolicy>;
export interface AppCookieStickinessPolicy {
  PolicyName?: string;
  CookieName?: string;
}
export interface ApplySecurityGroupsToLoadBalancerInput {
  LoadBalancerName: string;
  SecurityGroups: Array<string>;
}
export interface ApplySecurityGroupsToLoadBalancerOutput {
  SecurityGroups?: Array<string>;
}
export interface AttachLoadBalancerToSubnetsInput {
  LoadBalancerName: string;
  Subnets: Array<string>;
}
export interface AttachLoadBalancerToSubnetsOutput {
  Subnets?: Array<string>;
}
export type AttributeName = string;

export type AttributeType = string;

export type AttributeValue = string;

export type AvailabilityZone = string;

export type AvailabilityZones = Array<string>;
export interface BackendServerDescription {
  InstancePort?: number;
  PolicyNames?: Array<string>;
}
export type BackendServerDescriptions = Array<BackendServerDescription>;
export type Cardinality = string;

export declare class CertificateNotFoundException extends EffectData.TaggedError(
  "CertificateNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ConfigureHealthCheckInput {
  LoadBalancerName: string;
  HealthCheck: HealthCheck;
}
export interface ConfigureHealthCheckOutput {
  HealthCheck?: HealthCheck;
}
export interface ConnectionDraining {
  Enabled: boolean;
  Timeout?: number;
}
export type ConnectionDrainingEnabled = boolean;

export type ConnectionDrainingTimeout = number;

export interface ConnectionSettings {
  IdleTimeout: number;
}
export type CookieExpirationPeriod = number;

export type CookieName = string;

export interface CreateAccessPointInput {
  LoadBalancerName: string;
  Listeners: Array<Listener>;
  AvailabilityZones?: Array<string>;
  Subnets?: Array<string>;
  SecurityGroups?: Array<string>;
  Scheme?: string;
  Tags?: Array<Tag>;
}
export interface CreateAccessPointOutput {
  DNSName?: string;
}
export interface CreateAppCookieStickinessPolicyInput {
  LoadBalancerName: string;
  PolicyName: string;
  CookieName: string;
}
export interface CreateAppCookieStickinessPolicyOutput {}
export type CreatedTime = Date | string;

export interface CreateLBCookieStickinessPolicyInput {
  LoadBalancerName: string;
  PolicyName: string;
  CookieExpirationPeriod?: number;
}
export interface CreateLBCookieStickinessPolicyOutput {}
export interface CreateLoadBalancerListenerInput {
  LoadBalancerName: string;
  Listeners: Array<Listener>;
}
export interface CreateLoadBalancerListenerOutput {}
export interface CreateLoadBalancerPolicyInput {
  LoadBalancerName: string;
  PolicyName: string;
  PolicyTypeName: string;
  PolicyAttributes?: Array<PolicyAttribute>;
}
export interface CreateLoadBalancerPolicyOutput {}
export interface CrossZoneLoadBalancing {
  Enabled: boolean;
}
export type CrossZoneLoadBalancingEnabled = boolean;

export type DefaultValue = string;

export interface DeleteAccessPointInput {
  LoadBalancerName: string;
}
export interface DeleteAccessPointOutput {}
export interface DeleteLoadBalancerListenerInput {
  LoadBalancerName: string;
  LoadBalancerPorts: Array<number>;
}
export interface DeleteLoadBalancerListenerOutput {}
export interface DeleteLoadBalancerPolicyInput {
  LoadBalancerName: string;
  PolicyName: string;
}
export interface DeleteLoadBalancerPolicyOutput {}
export declare class DependencyThrottleException extends EffectData.TaggedError(
  "DependencyThrottleException",
)<{
  readonly Message?: string;
}> {}
export interface DeregisterEndPointsInput {
  LoadBalancerName: string;
  Instances: Array<Instance>;
}
export interface DeregisterEndPointsOutput {
  Instances?: Array<Instance>;
}
export interface DescribeAccessPointsInput {
  LoadBalancerNames?: Array<string>;
  Marker?: string;
  PageSize?: number;
}
export interface DescribeAccessPointsOutput {
  LoadBalancerDescriptions?: Array<LoadBalancerDescription>;
  NextMarker?: string;
}
export interface DescribeAccountLimitsInput {
  Marker?: string;
  PageSize?: number;
}
export interface DescribeAccountLimitsOutput {
  Limits?: Array<Limit>;
  NextMarker?: string;
}
export interface DescribeEndPointStateInput {
  LoadBalancerName: string;
  Instances?: Array<Instance>;
}
export interface DescribeEndPointStateOutput {
  InstanceStates?: Array<InstanceState>;
}
export interface DescribeLoadBalancerAttributesInput {
  LoadBalancerName: string;
}
export interface DescribeLoadBalancerAttributesOutput {
  LoadBalancerAttributes?: LoadBalancerAttributes;
}
export interface DescribeLoadBalancerPoliciesInput {
  LoadBalancerName?: string;
  PolicyNames?: Array<string>;
}
export interface DescribeLoadBalancerPoliciesOutput {
  PolicyDescriptions?: Array<PolicyDescription>;
}
export interface DescribeLoadBalancerPolicyTypesInput {
  PolicyTypeNames?: Array<string>;
}
export interface DescribeLoadBalancerPolicyTypesOutput {
  PolicyTypeDescriptions?: Array<PolicyTypeDescription>;
}
export interface DescribeTagsInput {
  LoadBalancerNames: Array<string>;
}
export interface DescribeTagsOutput {
  TagDescriptions?: Array<TagDescription>;
}
export type Description = string;

export interface DetachLoadBalancerFromSubnetsInput {
  LoadBalancerName: string;
  Subnets: Array<string>;
}
export interface DetachLoadBalancerFromSubnetsOutput {
  Subnets?: Array<string>;
}
export type DNSName = string;

export declare class DuplicateAccessPointNameException extends EffectData.TaggedError(
  "DuplicateAccessPointNameException",
)<{
  readonly Message?: string;
}> {}
export declare class DuplicateListenerException extends EffectData.TaggedError(
  "DuplicateListenerException",
)<{
  readonly Message?: string;
}> {}
export declare class DuplicatePolicyNameException extends EffectData.TaggedError(
  "DuplicatePolicyNameException",
)<{
  readonly Message?: string;
}> {}
export declare class DuplicateTagKeysException extends EffectData.TaggedError(
  "DuplicateTagKeysException",
)<{
  readonly Message?: string;
}> {}
export type EndPointPort = number;

export type ErrorDescription = string;

export interface HealthCheck {
  Target: string;
  Interval: number;
  Timeout: number;
  UnhealthyThreshold: number;
  HealthyThreshold: number;
}
export type HealthCheckInterval = number;

export type HealthCheckTarget = string;

export type HealthCheckTimeout = number;

export type HealthyThreshold = number;

export type IdleTimeout = number;

export interface Instance {
  InstanceId?: string;
}
export type InstanceId = string;

export type InstancePort = number;

export type Instances = Array<Instance>;
export interface InstanceState {
  InstanceId?: string;
  State?: string;
  ReasonCode?: string;
  Description?: string;
}
export type InstanceStates = Array<InstanceState>;
export declare class InvalidConfigurationRequestException extends EffectData.TaggedError(
  "InvalidConfigurationRequestException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidEndPointException extends EffectData.TaggedError(
  "InvalidEndPointException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidSchemeException extends EffectData.TaggedError(
  "InvalidSchemeException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidSecurityGroupException extends EffectData.TaggedError(
  "InvalidSecurityGroupException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidSubnetException extends EffectData.TaggedError(
  "InvalidSubnetException",
)<{
  readonly Message?: string;
}> {}
export type LBCookieStickinessPolicies = Array<LBCookieStickinessPolicy>;
export interface LBCookieStickinessPolicy {
  PolicyName?: string;
  CookieExpirationPeriod?: number;
}
export interface Limit {
  Name?: string;
  Max?: string;
}
export type Limits = Array<Limit>;
export interface Listener {
  Protocol: string;
  LoadBalancerPort: number;
  InstanceProtocol?: string;
  InstancePort: number;
  SSLCertificateId?: string;
}
export interface ListenerDescription {
  Listener?: Listener;
  PolicyNames?: Array<string>;
}
export type ListenerDescriptions = Array<ListenerDescription>;
export declare class ListenerNotFoundException extends EffectData.TaggedError(
  "ListenerNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Listeners = Array<Listener>;
export declare class LoadBalancerAttributeNotFoundException extends EffectData.TaggedError(
  "LoadBalancerAttributeNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface LoadBalancerAttributes {
  CrossZoneLoadBalancing?: CrossZoneLoadBalancing;
  AccessLog?: AccessLog;
  ConnectionDraining?: ConnectionDraining;
  ConnectionSettings?: ConnectionSettings;
  AdditionalAttributes?: Array<AdditionalAttribute>;
}
export interface LoadBalancerDescription {
  LoadBalancerName?: string;
  DNSName?: string;
  CanonicalHostedZoneName?: string;
  CanonicalHostedZoneNameID?: string;
  ListenerDescriptions?: Array<ListenerDescription>;
  Policies?: Policies;
  BackendServerDescriptions?: Array<BackendServerDescription>;
  AvailabilityZones?: Array<string>;
  Subnets?: Array<string>;
  VPCId?: string;
  Instances?: Array<Instance>;
  HealthCheck?: HealthCheck;
  SourceSecurityGroup?: SourceSecurityGroup;
  SecurityGroups?: Array<string>;
  CreatedTime?: Date | string;
  Scheme?: string;
}
export type LoadBalancerDescriptions = Array<LoadBalancerDescription>;
export type LoadBalancerNames = Array<string>;
export type LoadBalancerNamesMax20 = Array<string>;
export type LoadBalancerScheme = string;

export type Marker = string;

export type Max = string;

export interface ModifyLoadBalancerAttributesInput {
  LoadBalancerName: string;
  LoadBalancerAttributes: LoadBalancerAttributes;
}
export interface ModifyLoadBalancerAttributesOutput {
  LoadBalancerName?: string;
  LoadBalancerAttributes?: LoadBalancerAttributes;
}
export type Name = string;

export declare class OperationNotPermittedException extends EffectData.TaggedError(
  "OperationNotPermittedException",
)<{
  readonly Message?: string;
}> {}
export type PageSize = number;

export interface Policies {
  AppCookieStickinessPolicies?: Array<AppCookieStickinessPolicy>;
  LBCookieStickinessPolicies?: Array<LBCookieStickinessPolicy>;
  OtherPolicies?: Array<string>;
}
export interface PolicyAttribute {
  AttributeName?: string;
  AttributeValue?: string;
}
export interface PolicyAttributeDescription {
  AttributeName?: string;
  AttributeValue?: string;
}
export type PolicyAttributeDescriptions = Array<PolicyAttributeDescription>;
export type PolicyAttributes = Array<PolicyAttribute>;
export interface PolicyAttributeTypeDescription {
  AttributeName?: string;
  AttributeType?: string;
  Description?: string;
  DefaultValue?: string;
  Cardinality?: string;
}
export type PolicyAttributeTypeDescriptions =
  Array<PolicyAttributeTypeDescription>;
export interface PolicyDescription {
  PolicyName?: string;
  PolicyTypeName?: string;
  PolicyAttributeDescriptions?: Array<PolicyAttributeDescription>;
}
export type PolicyDescriptions = Array<PolicyDescription>;
export type PolicyName = string;

export type PolicyNames = Array<string>;
export declare class PolicyNotFoundException extends EffectData.TaggedError(
  "PolicyNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface PolicyTypeDescription {
  PolicyTypeName?: string;
  Description?: string;
  PolicyAttributeTypeDescriptions?: Array<PolicyAttributeTypeDescription>;
}
export type PolicyTypeDescriptions = Array<PolicyTypeDescription>;
export type PolicyTypeName = string;

export type PolicyTypeNames = Array<string>;
export declare class PolicyTypeNotFoundException extends EffectData.TaggedError(
  "PolicyTypeNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Ports = Array<number>;
export type Protocol = string;

export type ReasonCode = string;

export interface RegisterEndPointsInput {
  LoadBalancerName: string;
  Instances: Array<Instance>;
}
export interface RegisterEndPointsOutput {
  Instances?: Array<Instance>;
}
export interface RemoveAvailabilityZonesInput {
  LoadBalancerName: string;
  AvailabilityZones: Array<string>;
}
export interface RemoveAvailabilityZonesOutput {
  AvailabilityZones?: Array<string>;
}
export interface RemoveTagsInput {
  LoadBalancerNames: Array<string>;
  Tags: Array<TagKeyOnly>;
}
export interface RemoveTagsOutput {}
export type S3BucketName = string;

export type SecurityGroupId = string;

export type SecurityGroupName = string;

export type SecurityGroupOwnerAlias = string;

export type SecurityGroups = Array<string>;
export interface SetLoadBalancerListenerSSLCertificateInput {
  LoadBalancerName: string;
  LoadBalancerPort: number;
  SSLCertificateId: string;
}
export interface SetLoadBalancerListenerSSLCertificateOutput {}
export interface SetLoadBalancerPoliciesForBackendServerInput {
  LoadBalancerName: string;
  InstancePort: number;
  PolicyNames: Array<string>;
}
export interface SetLoadBalancerPoliciesForBackendServerOutput {}
export interface SetLoadBalancerPoliciesOfListenerInput {
  LoadBalancerName: string;
  LoadBalancerPort: number;
  PolicyNames: Array<string>;
}
export interface SetLoadBalancerPoliciesOfListenerOutput {}
export interface SourceSecurityGroup {
  OwnerAlias?: string;
  GroupName?: string;
}
export type SSLCertificateId = string;

export type State = string;

export type SubnetId = string;

export declare class SubnetNotFoundException extends EffectData.TaggedError(
  "SubnetNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Subnets = Array<string>;
export interface Tag {
  Key: string;
  Value?: string;
}
export interface TagDescription {
  LoadBalancerName?: string;
  Tags?: Array<Tag>;
}
export type TagDescriptions = Array<TagDescription>;
export type TagKey = string;

export type TagKeyList = Array<TagKeyOnly>;
export interface TagKeyOnly {
  Key?: string;
}
export type TagList = Array<Tag>;
export type TagValue = string;

export declare class TooManyAccessPointsException extends EffectData.TaggedError(
  "TooManyAccessPointsException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyPoliciesException extends EffectData.TaggedError(
  "TooManyPoliciesException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
}> {}
export type UnhealthyThreshold = number;

export declare class UnsupportedProtocolException extends EffectData.TaggedError(
  "UnsupportedProtocolException",
)<{
  readonly Message?: string;
}> {}
export type VPCId = string;

export declare class InvalidInstance extends EffectData.TaggedError(
  "InvalidInstance",
)<{}> {}

export declare namespace AddTags {
  export type Input = AddTagsInput;
  export type Output = AddTagsOutput;
  export type Error =
    | AccessPointNotFoundException
    | DuplicateTagKeysException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace ApplySecurityGroupsToLoadBalancer {
  export type Input = ApplySecurityGroupsToLoadBalancerInput;
  export type Output = ApplySecurityGroupsToLoadBalancerOutput;
  export type Error =
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | InvalidSecurityGroupException
    | CommonAwsError;
}

export declare namespace AttachLoadBalancerToSubnets {
  export type Input = AttachLoadBalancerToSubnetsInput;
  export type Output = AttachLoadBalancerToSubnetsOutput;
  export type Error =
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | InvalidSubnetException
    | SubnetNotFoundException
    | CommonAwsError;
}

export declare namespace ConfigureHealthCheck {
  export type Input = ConfigureHealthCheckInput;
  export type Output = ConfigureHealthCheckOutput;
  export type Error = AccessPointNotFoundException | CommonAwsError;
}

export declare namespace CreateAppCookieStickinessPolicy {
  export type Input = CreateAppCookieStickinessPolicyInput;
  export type Output = CreateAppCookieStickinessPolicyOutput;
  export type Error =
    | AccessPointNotFoundException
    | DuplicatePolicyNameException
    | InvalidConfigurationRequestException
    | TooManyPoliciesException
    | CommonAwsError;
}

export declare namespace CreateLBCookieStickinessPolicy {
  export type Input = CreateLBCookieStickinessPolicyInput;
  export type Output = CreateLBCookieStickinessPolicyOutput;
  export type Error =
    | AccessPointNotFoundException
    | DuplicatePolicyNameException
    | InvalidConfigurationRequestException
    | TooManyPoliciesException
    | CommonAwsError;
}

export declare namespace CreateLoadBalancer {
  export type Input = CreateAccessPointInput;
  export type Output = CreateAccessPointOutput;
  export type Error =
    | CertificateNotFoundException
    | DuplicateAccessPointNameException
    | DuplicateTagKeysException
    | InvalidConfigurationRequestException
    | InvalidSchemeException
    | InvalidSecurityGroupException
    | InvalidSubnetException
    | OperationNotPermittedException
    | SubnetNotFoundException
    | TooManyAccessPointsException
    | TooManyTagsException
    | UnsupportedProtocolException
    | CommonAwsError;
}

export declare namespace CreateLoadBalancerListeners {
  export type Input = CreateLoadBalancerListenerInput;
  export type Output = CreateLoadBalancerListenerOutput;
  export type Error =
    | AccessPointNotFoundException
    | CertificateNotFoundException
    | DuplicateListenerException
    | InvalidConfigurationRequestException
    | UnsupportedProtocolException
    | CommonAwsError;
}

export declare namespace CreateLoadBalancerPolicy {
  export type Input = CreateLoadBalancerPolicyInput;
  export type Output = CreateLoadBalancerPolicyOutput;
  export type Error =
    | AccessPointNotFoundException
    | DuplicatePolicyNameException
    | InvalidConfigurationRequestException
    | PolicyTypeNotFoundException
    | TooManyPoliciesException
    | CommonAwsError;
}

export declare namespace DeleteLoadBalancer {
  export type Input = DeleteAccessPointInput;
  export type Output = DeleteAccessPointOutput;
  export type Error = CommonAwsError;
}

export declare namespace DeleteLoadBalancerListeners {
  export type Input = DeleteLoadBalancerListenerInput;
  export type Output = DeleteLoadBalancerListenerOutput;
  export type Error = AccessPointNotFoundException | CommonAwsError;
}

export declare namespace DeleteLoadBalancerPolicy {
  export type Input = DeleteLoadBalancerPolicyInput;
  export type Output = DeleteLoadBalancerPolicyOutput;
  export type Error =
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | CommonAwsError;
}

export declare namespace DeregisterInstancesFromLoadBalancer {
  export type Input = DeregisterEndPointsInput;
  export type Output = DeregisterEndPointsOutput;
  export type Error =
    | AccessPointNotFoundException
    | InvalidEndPointException
    | CommonAwsError;
}

export declare namespace DescribeAccountLimits {
  export type Input = DescribeAccountLimitsInput;
  export type Output = DescribeAccountLimitsOutput;
  export type Error = CommonAwsError;
}

export declare namespace DescribeInstanceHealth {
  export type Input = DescribeEndPointStateInput;
  export type Output = DescribeEndPointStateOutput;
  export type Error =
    | AccessPointNotFoundException
    | InvalidEndPointException
    | InvalidInstance
    | CommonAwsError;
}

export declare namespace DescribeLoadBalancerAttributes {
  export type Input = DescribeLoadBalancerAttributesInput;
  export type Output = DescribeLoadBalancerAttributesOutput;
  export type Error =
    | AccessPointNotFoundException
    | LoadBalancerAttributeNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeLoadBalancerPolicies {
  export type Input = DescribeLoadBalancerPoliciesInput;
  export type Output = DescribeLoadBalancerPoliciesOutput;
  export type Error =
    | AccessPointNotFoundException
    | PolicyNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeLoadBalancerPolicyTypes {
  export type Input = DescribeLoadBalancerPolicyTypesInput;
  export type Output = DescribeLoadBalancerPolicyTypesOutput;
  export type Error = PolicyTypeNotFoundException | CommonAwsError;
}

export declare namespace DescribeLoadBalancers {
  export type Input = DescribeAccessPointsInput;
  export type Output = DescribeAccessPointsOutput;
  export type Error =
    | AccessPointNotFoundException
    | DependencyThrottleException
    | CommonAwsError;
}

export declare namespace DescribeTags {
  export type Input = DescribeTagsInput;
  export type Output = DescribeTagsOutput;
  export type Error = AccessPointNotFoundException | CommonAwsError;
}

export declare namespace DetachLoadBalancerFromSubnets {
  export type Input = DetachLoadBalancerFromSubnetsInput;
  export type Output = DetachLoadBalancerFromSubnetsOutput;
  export type Error =
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | CommonAwsError;
}

export declare namespace DisableAvailabilityZonesForLoadBalancer {
  export type Input = RemoveAvailabilityZonesInput;
  export type Output = RemoveAvailabilityZonesOutput;
  export type Error =
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | CommonAwsError;
}

export declare namespace EnableAvailabilityZonesForLoadBalancer {
  export type Input = AddAvailabilityZonesInput;
  export type Output = AddAvailabilityZonesOutput;
  export type Error = AccessPointNotFoundException | CommonAwsError;
}

export declare namespace ModifyLoadBalancerAttributes {
  export type Input = ModifyLoadBalancerAttributesInput;
  export type Output = ModifyLoadBalancerAttributesOutput;
  export type Error =
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | LoadBalancerAttributeNotFoundException
    | CommonAwsError;
}

export declare namespace RegisterInstancesWithLoadBalancer {
  export type Input = RegisterEndPointsInput;
  export type Output = RegisterEndPointsOutput;
  export type Error =
    | AccessPointNotFoundException
    | InvalidEndPointException
    | CommonAwsError;
}

export declare namespace RemoveTags {
  export type Input = RemoveTagsInput;
  export type Output = RemoveTagsOutput;
  export type Error = AccessPointNotFoundException | CommonAwsError;
}

export declare namespace SetLoadBalancerListenerSSLCertificate {
  export type Input = SetLoadBalancerListenerSSLCertificateInput;
  export type Output = SetLoadBalancerListenerSSLCertificateOutput;
  export type Error =
    | AccessPointNotFoundException
    | CertificateNotFoundException
    | InvalidConfigurationRequestException
    | ListenerNotFoundException
    | UnsupportedProtocolException
    | CommonAwsError;
}

export declare namespace SetLoadBalancerPoliciesForBackendServer {
  export type Input = SetLoadBalancerPoliciesForBackendServerInput;
  export type Output = SetLoadBalancerPoliciesForBackendServerOutput;
  export type Error =
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | PolicyNotFoundException
    | CommonAwsError;
}

export declare namespace SetLoadBalancerPoliciesOfListener {
  export type Input = SetLoadBalancerPoliciesOfListenerInput;
  export type Output = SetLoadBalancerPoliciesOfListenerOutput;
  export type Error =
    | AccessPointNotFoundException
    | InvalidConfigurationRequestException
    | ListenerNotFoundException
    | PolicyNotFoundException
    | CommonAwsError;
}

export type ElasticLoadBalancingErrors =
  | AccessPointNotFoundException
  | CertificateNotFoundException
  | DependencyThrottleException
  | DuplicateAccessPointNameException
  | DuplicateListenerException
  | DuplicatePolicyNameException
  | DuplicateTagKeysException
  | InvalidConfigurationRequestException
  | InvalidEndPointException
  | InvalidSchemeException
  | InvalidSecurityGroupException
  | InvalidSubnetException
  | ListenerNotFoundException
  | LoadBalancerAttributeNotFoundException
  | OperationNotPermittedException
  | PolicyNotFoundException
  | PolicyTypeNotFoundException
  | SubnetNotFoundException
  | TooManyAccessPointsException
  | TooManyPoliciesException
  | TooManyTagsException
  | UnsupportedProtocolException
  | InvalidInstance
  | CommonAwsError;

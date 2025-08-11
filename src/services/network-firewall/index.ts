import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class NetworkFirewall extends AWSServiceClient {
  acceptNetworkFirewallTransitGatewayAttachment(
    input: AcceptNetworkFirewallTransitGatewayAttachmentRequest,
  ): Effect.Effect<
    AcceptNetworkFirewallTransitGatewayAttachmentResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateAvailabilityZones(
    input: AssociateAvailabilityZonesRequest,
  ): Effect.Effect<
    AssociateAvailabilityZonesResponse,
    | InsufficientCapacityException
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateFirewallPolicy(
    input: AssociateFirewallPolicyRequest,
  ): Effect.Effect<
    AssociateFirewallPolicyResponse,
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateSubnets(
    input: AssociateSubnetsRequest,
  ): Effect.Effect<
    AssociateSubnetsResponse,
    | InsufficientCapacityException
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createFirewall(
    input: CreateFirewallRequest,
  ): Effect.Effect<
    CreateFirewallResponse,
    | InsufficientCapacityException
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createFirewallPolicy(
    input: CreateFirewallPolicyRequest,
  ): Effect.Effect<
    CreateFirewallPolicyResponse,
    | InsufficientCapacityException
    | InternalServerError
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createRuleGroup(
    input: CreateRuleGroupRequest,
  ): Effect.Effect<
    CreateRuleGroupResponse,
    | InsufficientCapacityException
    | InternalServerError
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createTLSInspectionConfiguration(
    input: CreateTLSInspectionConfigurationRequest,
  ): Effect.Effect<
    CreateTLSInspectionConfigurationResponse,
    | InsufficientCapacityException
    | InternalServerError
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createVpcEndpointAssociation(
    input: CreateVpcEndpointAssociationRequest,
  ): Effect.Effect<
    CreateVpcEndpointAssociationResponse,
    | InsufficientCapacityException
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteFirewall(
    input: DeleteFirewallRequest,
  ): Effect.Effect<
    DeleteFirewallResponse,
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteFirewallPolicy(
    input: DeleteFirewallPolicyRequest,
  ): Effect.Effect<
    DeleteFirewallPolicyResponse,
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteNetworkFirewallTransitGatewayAttachment(
    input: DeleteNetworkFirewallTransitGatewayAttachmentRequest,
  ): Effect.Effect<
    DeleteNetworkFirewallTransitGatewayAttachmentResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    | InternalServerError
    | InvalidRequestException
    | InvalidResourcePolicyException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteRuleGroup(
    input: DeleteRuleGroupRequest,
  ): Effect.Effect<
    DeleteRuleGroupResponse,
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteTLSInspectionConfiguration(
    input: DeleteTLSInspectionConfigurationRequest,
  ): Effect.Effect<
    DeleteTLSInspectionConfigurationResponse,
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteVpcEndpointAssociation(
    input: DeleteVpcEndpointAssociationRequest,
  ): Effect.Effect<
    DeleteVpcEndpointAssociationResponse,
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeFirewall(
    input: DescribeFirewallRequest,
  ): Effect.Effect<
    DescribeFirewallResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeFirewallMetadata(
    input: DescribeFirewallMetadataRequest,
  ): Effect.Effect<
    DescribeFirewallMetadataResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeFirewallPolicy(
    input: DescribeFirewallPolicyRequest,
  ): Effect.Effect<
    DescribeFirewallPolicyResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeFlowOperation(
    input: DescribeFlowOperationRequest,
  ): Effect.Effect<
    DescribeFlowOperationResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeLoggingConfiguration(
    input: DescribeLoggingConfigurationRequest,
  ): Effect.Effect<
    DescribeLoggingConfigurationResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeResourcePolicy(
    input: DescribeResourcePolicyRequest,
  ): Effect.Effect<
    DescribeResourcePolicyResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeRuleGroup(
    input: DescribeRuleGroupRequest,
  ): Effect.Effect<
    DescribeRuleGroupResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeRuleGroupMetadata(
    input: DescribeRuleGroupMetadataRequest,
  ): Effect.Effect<
    DescribeRuleGroupMetadataResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeRuleGroupSummary(
    input: DescribeRuleGroupSummaryRequest,
  ): Effect.Effect<
    DescribeRuleGroupSummaryResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeTLSInspectionConfiguration(
    input: DescribeTLSInspectionConfigurationRequest,
  ): Effect.Effect<
    DescribeTLSInspectionConfigurationResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeVpcEndpointAssociation(
    input: DescribeVpcEndpointAssociationRequest,
  ): Effect.Effect<
    DescribeVpcEndpointAssociationResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateAvailabilityZones(
    input: DisassociateAvailabilityZonesRequest,
  ): Effect.Effect<
    DisassociateAvailabilityZonesResponse,
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateSubnets(
    input: DisassociateSubnetsRequest,
  ): Effect.Effect<
    DisassociateSubnetsResponse,
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getAnalysisReportResults(
    input: GetAnalysisReportResultsRequest,
  ): Effect.Effect<
    GetAnalysisReportResultsResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAnalysisReports(
    input: ListAnalysisReportsRequest,
  ): Effect.Effect<
    ListAnalysisReportsResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listFirewallPolicies(
    input: ListFirewallPoliciesRequest,
  ): Effect.Effect<
    ListFirewallPoliciesResponse,
    | InternalServerError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listFirewalls(
    input: ListFirewallsRequest,
  ): Effect.Effect<
    ListFirewallsResponse,
    | InternalServerError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listFlowOperationResults(
    input: ListFlowOperationResultsRequest,
  ): Effect.Effect<
    ListFlowOperationResultsResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listFlowOperations(
    input: ListFlowOperationsRequest,
  ): Effect.Effect<
    ListFlowOperationsResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listRuleGroups(
    input: ListRuleGroupsRequest,
  ): Effect.Effect<
    ListRuleGroupsResponse,
    | InternalServerError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listTLSInspectionConfigurations(
    input: ListTLSInspectionConfigurationsRequest,
  ): Effect.Effect<
    ListTLSInspectionConfigurationsResponse,
    | InternalServerError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listVpcEndpointAssociations(
    input: ListVpcEndpointAssociationsRequest,
  ): Effect.Effect<
    ListVpcEndpointAssociationsResponse,
    | InternalServerError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | InternalServerError
    | InvalidRequestException
    | InvalidResourcePolicyException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  rejectNetworkFirewallTransitGatewayAttachment(
    input: RejectNetworkFirewallTransitGatewayAttachmentRequest,
  ): Effect.Effect<
    RejectNetworkFirewallTransitGatewayAttachmentResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  startAnalysisReport(
    input: StartAnalysisReportRequest,
  ): Effect.Effect<
    StartAnalysisReportResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  startFlowCapture(
    input: StartFlowCaptureRequest,
  ): Effect.Effect<
    StartFlowCaptureResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  startFlowFlush(
    input: StartFlowFlushRequest,
  ): Effect.Effect<
    StartFlowFlushResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAvailabilityZoneChangeProtection(
    input: UpdateAvailabilityZoneChangeProtectionRequest,
  ): Effect.Effect<
    UpdateAvailabilityZoneChangeProtectionResponse,
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ResourceOwnerCheckException
    | ThrottlingException
    | CommonAwsError
  >;
  updateFirewallAnalysisSettings(
    input: UpdateFirewallAnalysisSettingsRequest,
  ): Effect.Effect<
    UpdateFirewallAnalysisSettingsResponse,
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateFirewallDeleteProtection(
    input: UpdateFirewallDeleteProtectionRequest,
  ): Effect.Effect<
    UpdateFirewallDeleteProtectionResponse,
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ResourceOwnerCheckException
    | ThrottlingException
    | CommonAwsError
  >;
  updateFirewallDescription(
    input: UpdateFirewallDescriptionRequest,
  ): Effect.Effect<
    UpdateFirewallDescriptionResponse,
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateFirewallEncryptionConfiguration(
    input: UpdateFirewallEncryptionConfigurationRequest,
  ): Effect.Effect<
    UpdateFirewallEncryptionConfigurationResponse,
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ResourceOwnerCheckException
    | ThrottlingException
    | CommonAwsError
  >;
  updateFirewallPolicy(
    input: UpdateFirewallPolicyRequest,
  ): Effect.Effect<
    UpdateFirewallPolicyResponse,
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateFirewallPolicyChangeProtection(
    input: UpdateFirewallPolicyChangeProtectionRequest,
  ): Effect.Effect<
    UpdateFirewallPolicyChangeProtectionResponse,
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ResourceOwnerCheckException
    | ThrottlingException
    | CommonAwsError
  >;
  updateLoggingConfiguration(
    input: UpdateLoggingConfigurationRequest,
  ): Effect.Effect<
    UpdateLoggingConfigurationResponse,
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | LogDestinationPermissionException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateRuleGroup(
    input: UpdateRuleGroupRequest,
  ): Effect.Effect<
    UpdateRuleGroupResponse,
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateSubnetChangeProtection(
    input: UpdateSubnetChangeProtectionRequest,
  ): Effect.Effect<
    UpdateSubnetChangeProtectionResponse,
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ResourceOwnerCheckException
    | ThrottlingException
    | CommonAwsError
  >;
  updateTLSInspectionConfiguration(
    input: UpdateTLSInspectionConfigurationRequest,
  ): Effect.Effect<
    UpdateTLSInspectionConfigurationResponse,
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
}

export interface AcceptNetworkFirewallTransitGatewayAttachmentRequest {
  TransitGatewayAttachmentId: string;
}
export interface AcceptNetworkFirewallTransitGatewayAttachmentResponse {
  TransitGatewayAttachmentId: string;
  TransitGatewayAttachmentStatus: TransitGatewayAttachmentStatus;
}
export interface ActionDefinition {
  PublishMetricAction?: PublishMetricAction;
}
export type ActionName = string;

export interface Address {
  AddressDefinition: string;
}
export type AddressDefinition = string;

export type Addresses = Array<Address>;
export type Age = number;

export interface AnalysisReport {
  AnalysisReportId?: string;
  AnalysisType?: EnabledAnalysisType;
  ReportTime?: Date | string;
  Status?: string;
}
export type AnalysisReportId = string;

export type AnalysisReportNextToken = string;

export type AnalysisReportResults = Array<AnalysisTypeReportResult>;
export type AnalysisReports = Array<AnalysisReport>;
export interface AnalysisResult {
  IdentifiedRuleIds?: Array<string>;
  IdentifiedType?: IdentifiedType;
  AnalysisDetail?: string;
}
export type AnalysisResultList = Array<AnalysisResult>;
export interface AnalysisTypeReportResult {
  Protocol?: string;
  FirstAccessed?: Date | string;
  LastAccessed?: Date | string;
  Domain?: string;
  Hits?: Hits;
  UniqueSources?: UniqueSources;
}
export interface AssociateAvailabilityZonesRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  AvailabilityZoneMappings: Array<AvailabilityZoneMapping>;
}
export interface AssociateAvailabilityZonesResponse {
  FirewallArn?: string;
  FirewallName?: string;
  AvailabilityZoneMappings?: Array<AvailabilityZoneMapping>;
  UpdateToken?: string;
}
export interface AssociateFirewallPolicyRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  FirewallPolicyArn: string;
}
export interface AssociateFirewallPolicyResponse {
  FirewallArn?: string;
  FirewallName?: string;
  FirewallPolicyArn?: string;
  UpdateToken?: string;
}
export interface AssociateSubnetsRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  SubnetMappings: Array<SubnetMapping>;
}
export interface AssociateSubnetsResponse {
  FirewallArn?: string;
  FirewallName?: string;
  SubnetMappings?: Array<SubnetMapping>;
  UpdateToken?: string;
}
export type AssociationSyncState = Record<string, AZSyncState>;
export interface Attachment {
  SubnetId?: string;
  EndpointId?: string;
  Status?: AttachmentStatus;
  StatusMessage?: string;
}
export type AttachmentId = string;

export type AttachmentStatus =
  | "CREATING"
  | "DELETING"
  | "FAILED"
  | "ERROR"
  | "SCALING"
  | "READY";
export type AvailabilityZone = string;

export interface AvailabilityZoneMapping {
  AvailabilityZone: string;
}
export type AvailabilityZoneMappings = Array<AvailabilityZoneMapping>;
export type AvailabilityZoneMappingString = string;

export interface AvailabilityZoneMetadata {
  IPAddressType?: IPAddressType;
}
export type AWSAccountId = string;

export type AzSubnet = string;

export type AzSubnets = Array<string>;
export interface AZSyncState {
  Attachment?: Attachment;
}
export type NetworkFirewallBoolean = boolean;

export type ByteCount = number;

export interface CapacityUsageSummary {
  CIDRs?: CIDRSummary;
}
export type Certificates = Array<TlsCertificateData>;
export interface CheckCertificateRevocationStatusActions {
  RevokedStatusAction?: RevocationCheckAction;
  UnknownStatusAction?: RevocationCheckAction;
}
export type CIDRCount = number;

export interface CIDRSummary {
  AvailableCIDRCount?: number;
  UtilizedCIDRCount?: number;
  IPSetReferences?: Record<string, IPSetMetadata>;
}
export type CollectionMember_String = string;

export type ConfigurationSyncState =
  | "PENDING"
  | "IN_SYNC"
  | "CAPACITY_CONSTRAINED";
export type Count = number;

export interface CreateFirewallPolicyRequest {
  FirewallPolicyName: string;
  FirewallPolicy: FirewallPolicy;
  Description?: string;
  Tags?: Array<Tag>;
  DryRun?: boolean;
  EncryptionConfiguration?: EncryptionConfiguration;
}
export interface CreateFirewallPolicyResponse {
  UpdateToken: string;
  FirewallPolicyResponse: FirewallPolicyResponse;
}
export interface CreateFirewallRequest {
  FirewallName: string;
  FirewallPolicyArn: string;
  VpcId?: string;
  SubnetMappings?: Array<SubnetMapping>;
  DeleteProtection?: boolean;
  SubnetChangeProtection?: boolean;
  FirewallPolicyChangeProtection?: boolean;
  Description?: string;
  Tags?: Array<Tag>;
  EncryptionConfiguration?: EncryptionConfiguration;
  EnabledAnalysisTypes?: Array<EnabledAnalysisType>;
  TransitGatewayId?: string;
  AvailabilityZoneMappings?: Array<AvailabilityZoneMapping>;
  AvailabilityZoneChangeProtection?: boolean;
}
export interface CreateFirewallResponse {
  Firewall?: Firewall;
  FirewallStatus?: FirewallStatus;
}
export interface CreateRuleGroupRequest {
  RuleGroupName: string;
  RuleGroup?: RuleGroup;
  Rules?: string;
  Type: RuleGroupType;
  Description?: string;
  Capacity: number;
  Tags?: Array<Tag>;
  DryRun?: boolean;
  EncryptionConfiguration?: EncryptionConfiguration;
  SourceMetadata?: SourceMetadata;
  AnalyzeRuleGroup?: boolean;
  SummaryConfiguration?: SummaryConfiguration;
}
export interface CreateRuleGroupResponse {
  UpdateToken: string;
  RuleGroupResponse: RuleGroupResponse;
}
export interface CreateTLSInspectionConfigurationRequest {
  TLSInspectionConfigurationName: string;
  TLSInspectionConfiguration: TLSInspectionConfiguration;
  Description?: string;
  Tags?: Array<Tag>;
  EncryptionConfiguration?: EncryptionConfiguration;
}
export interface CreateTLSInspectionConfigurationResponse {
  UpdateToken: string;
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse;
}
export interface CreateVpcEndpointAssociationRequest {
  FirewallArn: string;
  VpcId: string;
  SubnetMapping: SubnetMapping;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface CreateVpcEndpointAssociationResponse {
  VpcEndpointAssociation?: VpcEndpointAssociation;
  VpcEndpointAssociationStatus?: VpcEndpointAssociationStatus;
}
export interface CustomAction {
  ActionName: string;
  ActionDefinition: ActionDefinition;
}
export type CustomActions = Array<CustomAction>;
export type DeepThreatInspection = boolean;

export interface DeleteFirewallPolicyRequest {
  FirewallPolicyName?: string;
  FirewallPolicyArn?: string;
}
export interface DeleteFirewallPolicyResponse {
  FirewallPolicyResponse: FirewallPolicyResponse;
}
export interface DeleteFirewallRequest {
  FirewallName?: string;
  FirewallArn?: string;
}
export interface DeleteFirewallResponse {
  Firewall?: Firewall;
  FirewallStatus?: FirewallStatus;
}
export interface DeleteNetworkFirewallTransitGatewayAttachmentRequest {
  TransitGatewayAttachmentId: string;
}
export interface DeleteNetworkFirewallTransitGatewayAttachmentResponse {
  TransitGatewayAttachmentId: string;
  TransitGatewayAttachmentStatus: TransitGatewayAttachmentStatus;
}
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
export interface DeleteResourcePolicyResponse {}
export interface DeleteRuleGroupRequest {
  RuleGroupName?: string;
  RuleGroupArn?: string;
  Type?: RuleGroupType;
}
export interface DeleteRuleGroupResponse {
  RuleGroupResponse: RuleGroupResponse;
}
export interface DeleteTLSInspectionConfigurationRequest {
  TLSInspectionConfigurationArn?: string;
  TLSInspectionConfigurationName?: string;
}
export interface DeleteTLSInspectionConfigurationResponse {
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse;
}
export interface DeleteVpcEndpointAssociationRequest {
  VpcEndpointAssociationArn: string;
}
export interface DeleteVpcEndpointAssociationResponse {
  VpcEndpointAssociation?: VpcEndpointAssociation;
  VpcEndpointAssociationStatus?: VpcEndpointAssociationStatus;
}
export interface DescribeFirewallMetadataRequest {
  FirewallArn?: string;
}
export interface DescribeFirewallMetadataResponse {
  FirewallArn?: string;
  FirewallPolicyArn?: string;
  Description?: string;
  Status?: FirewallStatusValue;
  SupportedAvailabilityZones?: Record<string, AvailabilityZoneMetadata>;
  TransitGatewayAttachmentId?: string;
}
export interface DescribeFirewallPolicyRequest {
  FirewallPolicyName?: string;
  FirewallPolicyArn?: string;
}
export interface DescribeFirewallPolicyResponse {
  UpdateToken: string;
  FirewallPolicyResponse: FirewallPolicyResponse;
  FirewallPolicy?: FirewallPolicy;
}
export interface DescribeFirewallRequest {
  FirewallName?: string;
  FirewallArn?: string;
}
export interface DescribeFirewallResponse {
  UpdateToken?: string;
  Firewall?: Firewall;
  FirewallStatus?: FirewallStatus;
}
export interface DescribeFlowOperationRequest {
  FirewallArn: string;
  AvailabilityZone?: string;
  VpcEndpointAssociationArn?: string;
  VpcEndpointId?: string;
  FlowOperationId: string;
}
export interface DescribeFlowOperationResponse {
  FirewallArn?: string;
  AvailabilityZone?: string;
  VpcEndpointAssociationArn?: string;
  VpcEndpointId?: string;
  FlowOperationId?: string;
  FlowOperationType?: FlowOperationType;
  FlowOperationStatus?: FlowOperationStatus;
  StatusMessage?: string;
  FlowRequestTimestamp?: Date | string;
  FlowOperation?: FlowOperation;
}
export interface DescribeLoggingConfigurationRequest {
  FirewallArn?: string;
  FirewallName?: string;
}
export interface DescribeLoggingConfigurationResponse {
  FirewallArn?: string;
  LoggingConfiguration?: LoggingConfiguration;
  EnableMonitoringDashboard?: boolean;
}
export interface DescribeResourcePolicyRequest {
  ResourceArn: string;
}
export interface DescribeResourcePolicyResponse {
  Policy?: string;
}
export interface DescribeRuleGroupMetadataRequest {
  RuleGroupName?: string;
  RuleGroupArn?: string;
  Type?: RuleGroupType;
}
export interface DescribeRuleGroupMetadataResponse {
  RuleGroupArn: string;
  RuleGroupName: string;
  Description?: string;
  Type?: RuleGroupType;
  Capacity?: number;
  StatefulRuleOptions?: StatefulRuleOptions;
  LastModifiedTime?: Date | string;
}
export interface DescribeRuleGroupRequest {
  RuleGroupName?: string;
  RuleGroupArn?: string;
  Type?: RuleGroupType;
  AnalyzeRuleGroup?: boolean;
}
export interface DescribeRuleGroupResponse {
  UpdateToken: string;
  RuleGroup?: RuleGroup;
  RuleGroupResponse: RuleGroupResponse;
}
export interface DescribeRuleGroupSummaryRequest {
  RuleGroupName?: string;
  RuleGroupArn?: string;
  Type?: RuleGroupType;
}
export interface DescribeRuleGroupSummaryResponse {
  RuleGroupName: string;
  Description?: string;
  Summary?: Summary;
}
export interface DescribeTLSInspectionConfigurationRequest {
  TLSInspectionConfigurationArn?: string;
  TLSInspectionConfigurationName?: string;
}
export interface DescribeTLSInspectionConfigurationResponse {
  UpdateToken: string;
  TLSInspectionConfiguration?: TLSInspectionConfiguration;
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse;
}
export interface DescribeVpcEndpointAssociationRequest {
  VpcEndpointAssociationArn: string;
}
export interface DescribeVpcEndpointAssociationResponse {
  VpcEndpointAssociation?: VpcEndpointAssociation;
  VpcEndpointAssociationStatus?: VpcEndpointAssociationStatus;
}
export type Description = string;

export type Destination = string;

export interface Dimension {
  Value: string;
}
export type Dimensions = Array<Dimension>;
export type DimensionValue = string;

export interface DisassociateAvailabilityZonesRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  AvailabilityZoneMappings: Array<AvailabilityZoneMapping>;
}
export interface DisassociateAvailabilityZonesResponse {
  FirewallArn?: string;
  FirewallName?: string;
  AvailabilityZoneMappings?: Array<AvailabilityZoneMapping>;
  UpdateToken?: string;
}
export interface DisassociateSubnetsRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  SubnetIds: Array<string>;
}
export interface DisassociateSubnetsResponse {
  FirewallArn?: string;
  FirewallName?: string;
  SubnetMappings?: Array<SubnetMapping>;
  UpdateToken?: string;
}
export type Domain = string;

export type EnabledAnalysisType = "TLS_SNI" | "HTTP_HOST";
export type EnabledAnalysisTypes = Array<EnabledAnalysisType>;
export type EnableMonitoringDashboard = boolean;

export interface EncryptionConfiguration {
  KeyId?: string;
  Type: EncryptionType;
}
export type EncryptionType = "CUSTOMER_KMS" | "AWS_OWNED_KMS_KEY";
export type EndpointId = string;

export type EndTime = Date | string;

export type ErrorMessage = string;

export interface Firewall {
  FirewallName?: string;
  FirewallArn?: string;
  FirewallPolicyArn: string;
  VpcId: string;
  SubnetMappings: Array<SubnetMapping>;
  DeleteProtection?: boolean;
  SubnetChangeProtection?: boolean;
  FirewallPolicyChangeProtection?: boolean;
  Description?: string;
  FirewallId: string;
  Tags?: Array<Tag>;
  EncryptionConfiguration?: EncryptionConfiguration;
  NumberOfAssociations?: number;
  EnabledAnalysisTypes?: Array<EnabledAnalysisType>;
  TransitGatewayId?: string;
  TransitGatewayOwnerAccountId?: string;
  AvailabilityZoneMappings?: Array<AvailabilityZoneMapping>;
  AvailabilityZoneChangeProtection?: boolean;
}
export interface FirewallMetadata {
  FirewallName?: string;
  FirewallArn?: string;
  TransitGatewayAttachmentId?: string;
}
export type FirewallPolicies = Array<FirewallPolicyMetadata>;
export interface FirewallPolicy {
  StatelessRuleGroupReferences?: Array<StatelessRuleGroupReference>;
  StatelessDefaultActions: Array<string>;
  StatelessFragmentDefaultActions: Array<string>;
  StatelessCustomActions?: Array<CustomAction>;
  StatefulRuleGroupReferences?: Array<StatefulRuleGroupReference>;
  StatefulDefaultActions?: Array<string>;
  StatefulEngineOptions?: StatefulEngineOptions;
  TLSInspectionConfigurationArn?: string;
  PolicyVariables?: PolicyVariables;
}
export interface FirewallPolicyMetadata {
  Name?: string;
  Arn?: string;
}
export interface FirewallPolicyResponse {
  FirewallPolicyName: string;
  FirewallPolicyArn: string;
  FirewallPolicyId: string;
  Description?: string;
  FirewallPolicyStatus?: ResourceStatus;
  Tags?: Array<Tag>;
  ConsumedStatelessRuleCapacity?: number;
  ConsumedStatefulRuleCapacity?: number;
  NumberOfAssociations?: number;
  EncryptionConfiguration?: EncryptionConfiguration;
  LastModifiedTime?: Date | string;
}
export type Firewalls = Array<FirewallMetadata>;
export interface FirewallStatus {
  Status: FirewallStatusValue;
  ConfigurationSyncStateSummary: ConfigurationSyncState;
  SyncStates?: Record<string, SyncState>;
  CapacityUsageSummary?: CapacityUsageSummary;
  TransitGatewayAttachmentSyncState?: TransitGatewayAttachmentSyncState;
}
export type FirewallStatusValue = "PROVISIONING" | "DELETING" | "READY";
export type FirstAccessed = Date | string;

export type Flags = Array<TCPFlag>;
export interface Flow {
  SourceAddress?: Address;
  DestinationAddress?: Address;
  SourcePort?: string;
  DestinationPort?: string;
  Protocol?: string;
  Age?: number;
  PacketCount?: number;
  ByteCount?: number;
}
export interface FlowFilter {
  SourceAddress?: Address;
  DestinationAddress?: Address;
  SourcePort?: string;
  DestinationPort?: string;
  Protocols?: Array<string>;
}
export type FlowFilters = Array<FlowFilter>;
export interface FlowOperation {
  MinimumFlowAgeInSeconds?: number;
  FlowFilters?: Array<FlowFilter>;
}
export type FlowOperationId = string;

export interface FlowOperationMetadata {
  FlowOperationId?: string;
  FlowOperationType?: FlowOperationType;
  FlowRequestTimestamp?: Date | string;
  FlowOperationStatus?: FlowOperationStatus;
}
export type FlowOperations = Array<FlowOperationMetadata>;
export type FlowOperationStatus =
  | "COMPLETED"
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETED_WITH_ERRORS";
export type FlowOperationType = "FLOW_FLUSH" | "FLOW_CAPTURE";
export type FlowRequestTimestamp = Date | string;

export type Flows = Array<Flow>;
export interface FlowTimeouts {
  TcpIdleTimeoutSeconds?: number;
}
export type GeneratedRulesType = "ALLOWLIST" | "DENYLIST";
export interface GetAnalysisReportResultsRequest {
  FirewallName?: string;
  AnalysisReportId: string;
  FirewallArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetAnalysisReportResultsResponse {
  Status?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  ReportTime?: Date | string;
  AnalysisType?: EnabledAnalysisType;
  NextToken?: string;
  AnalysisReportResults?: Array<AnalysisTypeReportResult>;
}
export type HashMapKey = string;

export type HashMapValue = string;

export interface Header {
  Protocol: StatefulRuleProtocol;
  Source: string;
  SourcePort: string;
  Direction: StatefulRuleDirection;
  Destination: string;
  DestinationPort: string;
}
export interface Hits {
  Count?: number;
}
export type IdentifiedType =
  | "STATELESS_RULE_FORWARDING_ASYMMETRICALLY"
  | "STATELESS_RULE_CONTAINS_TCP_FLAGS";
export declare class InsufficientCapacityException extends EffectData.TaggedError(
  "InsufficientCapacityException",
)<{
  readonly Message?: string;
}> {}
export declare class InternalServerError extends EffectData.TaggedError(
  "InternalServerError",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidOperationException extends EffectData.TaggedError(
  "InvalidOperationException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidResourcePolicyException extends EffectData.TaggedError(
  "InvalidResourcePolicyException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTokenException extends EffectData.TaggedError(
  "InvalidTokenException",
)<{
  readonly Message?: string;
}> {}
export type IPAddressType = "DUALSTACK" | "IPV4" | "IPV6";
export interface IPSet {
  Definition: Array<string>;
}
export type IPSetArn = string;

export interface IPSetMetadata {
  ResolvedCIDRCount?: number;
}
export type IPSetMetadataMap = Record<string, IPSetMetadata>;
export interface IPSetReference {
  ReferenceArn?: string;
}
export type IPSetReferenceMap = Record<string, IPSetReference>;
export type IPSetReferenceName = string;

export type IPSets = Record<string, IPSet>;
export type KeyId = string;

export type Keyword = string;

export type LastAccessed = Date | string;

export type LastUpdateTime = Date | string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListAnalysisReportsRequest {
  FirewallName?: string;
  FirewallArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAnalysisReportsResponse {
  AnalysisReports?: Array<AnalysisReport>;
  NextToken?: string;
}
export interface ListFirewallPoliciesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFirewallPoliciesResponse {
  NextToken?: string;
  FirewallPolicies?: Array<FirewallPolicyMetadata>;
}
export interface ListFirewallsRequest {
  NextToken?: string;
  VpcIds?: Array<string>;
  MaxResults?: number;
}
export interface ListFirewallsResponse {
  NextToken?: string;
  Firewalls?: Array<FirewallMetadata>;
}
export interface ListFlowOperationResultsRequest {
  FirewallArn: string;
  FlowOperationId: string;
  NextToken?: string;
  MaxResults?: number;
  AvailabilityZone?: string;
  VpcEndpointId?: string;
  VpcEndpointAssociationArn?: string;
}
export interface ListFlowOperationResultsResponse {
  FirewallArn?: string;
  AvailabilityZone?: string;
  VpcEndpointAssociationArn?: string;
  VpcEndpointId?: string;
  FlowOperationId?: string;
  FlowOperationStatus?: FlowOperationStatus;
  StatusMessage?: string;
  FlowRequestTimestamp?: Date | string;
  Flows?: Array<Flow>;
  NextToken?: string;
}
export interface ListFlowOperationsRequest {
  FirewallArn: string;
  AvailabilityZone?: string;
  VpcEndpointAssociationArn?: string;
  VpcEndpointId?: string;
  FlowOperationType?: FlowOperationType;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFlowOperationsResponse {
  FlowOperations?: Array<FlowOperationMetadata>;
  NextToken?: string;
}
export interface ListRuleGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
  Scope?: ResourceManagedStatus;
  ManagedType?: ResourceManagedType;
  Type?: RuleGroupType;
}
export interface ListRuleGroupsResponse {
  NextToken?: string;
  RuleGroups?: Array<RuleGroupMetadata>;
}
export interface ListTagsForResourceRequest {
  NextToken?: string;
  MaxResults?: number;
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  NextToken?: string;
  Tags?: Array<Tag>;
}
export interface ListTLSInspectionConfigurationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTLSInspectionConfigurationsResponse {
  NextToken?: string;
  TLSInspectionConfigurations?: Array<TLSInspectionConfigurationMetadata>;
}
export interface ListVpcEndpointAssociationsRequest {
  NextToken?: string;
  MaxResults?: number;
  FirewallArn?: string;
}
export interface ListVpcEndpointAssociationsResponse {
  NextToken?: string;
  VpcEndpointAssociations?: Array<VpcEndpointAssociationMetadata>;
}
export interface LogDestinationConfig {
  LogType: LogType;
  LogDestinationType: LogDestinationType;
  LogDestination: Record<string, string>;
}
export type LogDestinationConfigs = Array<LogDestinationConfig>;
export type LogDestinationMap = Record<string, string>;
export declare class LogDestinationPermissionException extends EffectData.TaggedError(
  "LogDestinationPermissionException",
)<{
  readonly Message?: string;
}> {}
export type LogDestinationType =
  | "S3"
  | "CLOUDWATCH_LOGS"
  | "KINESIS_DATA_FIREHOSE";
export interface LoggingConfiguration {
  LogDestinationConfigs: Array<LogDestinationConfig>;
}
export type LogType = "ALERT" | "FLOW" | "TLS";
export interface MatchAttributes {
  Sources?: Array<Address>;
  Destinations?: Array<Address>;
  SourcePorts?: Array<PortRange>;
  DestinationPorts?: Array<PortRange>;
  Protocols?: Array<number>;
  TCPFlags?: Array<TCPFlagField>;
}
export type NumberOfAssociations = number;

export type OverrideAction = "DROP_TO_ALERT";
export type PacketCount = number;

export type PaginationMaxResults = number;

export type PaginationToken = string;

export interface PerObjectStatus {
  SyncStatus?: PerObjectSyncStatus;
  UpdateToken?: string;
}
export type PerObjectSyncStatus =
  | "PENDING"
  | "IN_SYNC"
  | "CAPACITY_CONSTRAINED";
export type PolicyString = string;

export interface PolicyVariables {
  RuleVariables?: Record<string, IPSet>;
}
export type Port = string;

export interface PortRange {
  FromPort: number;
  ToPort: number;
}
export type PortRangeBound = number;

export type PortRanges = Array<PortRange>;
export interface PortSet {
  Definition?: Array<string>;
}
export type PortSets = Record<string, PortSet>;
export type Priority = number;

export type ProtocolNumber = number;

export type ProtocolNumbers = Array<number>;
export type ProtocolString = string;

export type ProtocolStrings = Array<string>;
export interface PublishMetricAction {
  Dimensions: Array<Dimension>;
}
export interface PutResourcePolicyRequest {
  ResourceArn: string;
  Policy: string;
}
export interface PutResourcePolicyResponse {}
export interface ReferenceSets {
  IPSetReferences?: Record<string, IPSetReference>;
}
export interface RejectNetworkFirewallTransitGatewayAttachmentRequest {
  TransitGatewayAttachmentId: string;
}
export interface RejectNetworkFirewallTransitGatewayAttachmentResponse {
  TransitGatewayAttachmentId: string;
  TransitGatewayAttachmentStatus: TransitGatewayAttachmentStatus;
}
export type ReportTime = Date | string;

export type ResourceArn = string;

export type ResourceId = string;

export type ResourceManagedStatus = "MANAGED" | "ACCOUNT";
export type ResourceManagedType =
  | "AWS_MANAGED_THREAT_SIGNATURES"
  | "AWS_MANAGED_DOMAIN_LISTS"
  | "ACTIVE_THREAT_DEFENSE";
export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceOwnerCheckException extends EffectData.TaggedError(
  "ResourceOwnerCheckException",
)<{
  readonly Message?: string;
}> {}
export type ResourceStatus = "ACTIVE" | "DELETING" | "ERROR";
export type RevocationCheckAction = "PASS" | "DROP" | "REJECT";
export type RuleCapacity = number;

export interface RuleDefinition {
  MatchAttributes: MatchAttributes;
  Actions: Array<string>;
}
export interface RuleGroup {
  RuleVariables?: RuleVariables;
  ReferenceSets?: ReferenceSets;
  RulesSource: RulesSource;
  StatefulRuleOptions?: StatefulRuleOptions;
}
export interface RuleGroupMetadata {
  Name?: string;
  Arn?: string;
}
export interface RuleGroupResponse {
  RuleGroupArn: string;
  RuleGroupName: string;
  RuleGroupId: string;
  Description?: string;
  Type?: RuleGroupType;
  Capacity?: number;
  RuleGroupStatus?: ResourceStatus;
  Tags?: Array<Tag>;
  ConsumedCapacity?: number;
  NumberOfAssociations?: number;
  EncryptionConfiguration?: EncryptionConfiguration;
  SourceMetadata?: SourceMetadata;
  SnsTopic?: string;
  LastModifiedTime?: Date | string;
  AnalysisResults?: Array<AnalysisResult>;
  SummaryConfiguration?: SummaryConfiguration;
}
export type RuleGroups = Array<RuleGroupMetadata>;
export type RuleGroupType = "STATELESS" | "STATEFUL";
export type RuleIdList = Array<string>;
export interface RuleOption {
  Keyword: string;
  Settings?: Array<string>;
}
export type RuleOptions = Array<RuleOption>;
export type RuleOrder = "DEFAULT_ACTION_ORDER" | "STRICT_ORDER";
export interface RulesSource {
  RulesString?: string;
  RulesSourceList?: RulesSourceList;
  StatefulRules?: Array<StatefulRule>;
  StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions;
}
export interface RulesSourceList {
  Targets: Array<string>;
  TargetTypes: Array<TargetType>;
  GeneratedRulesType: GeneratedRulesType;
}
export type RulesString = string;

export type RuleSummaries = Array<RuleSummary>;
export interface RuleSummary {
  SID?: string;
  Msg?: string;
  Metadata?: string;
}
export type RuleTargets = Array<string>;
export type RuleVariableName = string;

export interface RuleVariables {
  IPSets?: Record<string, IPSet>;
  PortSets?: Record<string, PortSet>;
}
export interface ServerCertificate {
  ResourceArn?: string;
}
export interface ServerCertificateConfiguration {
  ServerCertificates?: Array<ServerCertificate>;
  Scopes?: Array<ServerCertificateScope>;
  CertificateAuthorityArn?: string;
  CheckCertificateRevocationStatus?: CheckCertificateRevocationStatusActions;
}
export type ServerCertificateConfigurations =
  Array<ServerCertificateConfiguration>;
export type ServerCertificates = Array<ServerCertificate>;
export interface ServerCertificateScope {
  Sources?: Array<Address>;
  Destinations?: Array<Address>;
  SourcePorts?: Array<PortRange>;
  DestinationPorts?: Array<PortRange>;
  Protocols?: Array<number>;
}
export type ServerCertificateScopes = Array<ServerCertificateScope>;
export type Setting = string;

export type Settings = Array<string>;
export type Source = string;

export interface SourceMetadata {
  SourceArn?: string;
  SourceUpdateToken?: string;
}
export interface StartAnalysisReportRequest {
  FirewallName?: string;
  FirewallArn?: string;
  AnalysisType: EnabledAnalysisType;
}
export interface StartAnalysisReportResponse {
  AnalysisReportId: string;
}
export interface StartFlowCaptureRequest {
  FirewallArn: string;
  AvailabilityZone?: string;
  VpcEndpointAssociationArn?: string;
  VpcEndpointId?: string;
  MinimumFlowAgeInSeconds?: number;
  FlowFilters: Array<FlowFilter>;
}
export interface StartFlowCaptureResponse {
  FirewallArn?: string;
  FlowOperationId?: string;
  FlowOperationStatus?: FlowOperationStatus;
}
export interface StartFlowFlushRequest {
  FirewallArn: string;
  AvailabilityZone?: string;
  VpcEndpointAssociationArn?: string;
  VpcEndpointId?: string;
  MinimumFlowAgeInSeconds?: number;
  FlowFilters: Array<FlowFilter>;
}
export interface StartFlowFlushResponse {
  FirewallArn?: string;
  FlowOperationId?: string;
  FlowOperationStatus?: FlowOperationStatus;
}
export type StartTime = Date | string;

export type StatefulAction = "PASS" | "DROP" | "ALERT" | "REJECT";
export type StatefulActions = Array<string>;
export interface StatefulEngineOptions {
  RuleOrder?: RuleOrder;
  StreamExceptionPolicy?: StreamExceptionPolicy;
  FlowTimeouts?: FlowTimeouts;
}
export interface StatefulRule {
  Action: StatefulAction;
  Header: Header;
  RuleOptions: Array<RuleOption>;
}
export type StatefulRuleDirection = "FORWARD" | "ANY";
export interface StatefulRuleGroupOverride {
  Action?: OverrideAction;
}
export interface StatefulRuleGroupReference {
  ResourceArn: string;
  Priority?: number;
  Override?: StatefulRuleGroupOverride;
  DeepThreatInspection?: boolean;
}
export type StatefulRuleGroupReferences = Array<StatefulRuleGroupReference>;
export interface StatefulRuleOptions {
  RuleOrder?: RuleOrder;
}
export type StatefulRuleProtocol =
  | "ANY"
  | "TCP"
  | "UDP"
  | "ICMP"
  | "HTTP"
  | "FTP"
  | "TLS"
  | "SMB"
  | "DNS"
  | "DCERPC"
  | "SSH"
  | "SMTP"
  | "IMAP"
  | "MSN"
  | "KRB5"
  | "IKEV2"
  | "TFTP"
  | "NTP"
  | "DHCP"
  | "HTTP2"
  | "QUIC";
export type StatefulRules = Array<StatefulRule>;
export type StatelessActions = Array<string>;
export interface StatelessRule {
  RuleDefinition: RuleDefinition;
  Priority: number;
}
export interface StatelessRuleGroupReference {
  ResourceArn: string;
  Priority: number;
}
export type StatelessRuleGroupReferences = Array<StatelessRuleGroupReference>;
export type StatelessRules = Array<StatelessRule>;
export interface StatelessRulesAndCustomActions {
  StatelessRules: Array<StatelessRule>;
  CustomActions?: Array<CustomAction>;
}
export type Status = string;

export type StatusMessage = string;

export type StatusReason = string;

export type StreamExceptionPolicy = "DROP" | "CONTINUE" | "REJECT";
export interface SubnetMapping {
  SubnetId: string;
  IPAddressType?: IPAddressType;
}
export type SubnetMappings = Array<SubnetMapping>;
export interface Summary {
  RuleSummaries?: Array<RuleSummary>;
}
export interface SummaryConfiguration {
  RuleOptions?: Array<SummaryRuleOption>;
}
export type SummaryRuleOption = "SID" | "MSG" | "METADATA";
export type SummaryRuleOptions = Array<SummaryRuleOption>;
export type SupportedAvailabilityZones = Record<
  string,
  AvailabilityZoneMetadata
>;
export interface SyncState {
  Attachment?: Attachment;
  Config?: Record<string, PerObjectStatus>;
}
export type SyncStateConfig = Record<string, PerObjectStatus>;
export type SyncStates = Record<string, SyncState>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagsPaginationMaxResults = number;

export type TagValue = string;

export type TargetType = "TLS_SNI" | "HTTP_HOST";
export type TargetTypes = Array<TargetType>;
export type TCPFlag =
  | "FIN"
  | "SYN"
  | "RST"
  | "PSH"
  | "ACK"
  | "URG"
  | "ECE"
  | "CWR";
export interface TCPFlagField {
  Flags: Array<TCPFlag>;
  Masks?: Array<TCPFlag>;
}
export type TCPFlags = Array<TCPFlagField>;
export type TcpIdleTimeoutRangeBound = number;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export interface TlsCertificateData {
  CertificateArn?: string;
  CertificateSerial?: string;
  Status?: string;
  StatusMessage?: string;
}
export interface TLSInspectionConfiguration {
  ServerCertificateConfigurations?: Array<ServerCertificateConfiguration>;
}
export interface TLSInspectionConfigurationMetadata {
  Name?: string;
  Arn?: string;
}
export interface TLSInspectionConfigurationResponse {
  TLSInspectionConfigurationArn: string;
  TLSInspectionConfigurationName: string;
  TLSInspectionConfigurationId: string;
  TLSInspectionConfigurationStatus?: ResourceStatus;
  Description?: string;
  Tags?: Array<Tag>;
  LastModifiedTime?: Date | string;
  NumberOfAssociations?: number;
  EncryptionConfiguration?: EncryptionConfiguration;
  Certificates?: Array<TlsCertificateData>;
  CertificateAuthority?: TlsCertificateData;
}
export type TLSInspectionConfigurations =
  Array<TLSInspectionConfigurationMetadata>;
export type TransitGatewayAttachmentId = string;

export type TransitGatewayAttachmentStatus =
  | "CREATING"
  | "DELETING"
  | "DELETED"
  | "FAILED"
  | "ERROR"
  | "READY"
  | "PENDING_ACCEPTANCE"
  | "REJECTING"
  | "REJECTED";
export interface TransitGatewayAttachmentSyncState {
  AttachmentId?: string;
  TransitGatewayAttachmentStatus?: TransitGatewayAttachmentStatus;
  StatusMessage?: string;
}
export type TransitGatewayAttachmentSyncStateMessage = string;

export type TransitGatewayId = string;

export interface UniqueSources {
  Count?: number;
}
export declare class UnsupportedOperationException extends EffectData.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAvailabilityZoneChangeProtectionRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  AvailabilityZoneChangeProtection: boolean;
}
export interface UpdateAvailabilityZoneChangeProtectionResponse {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  AvailabilityZoneChangeProtection?: boolean;
}
export interface UpdateFirewallAnalysisSettingsRequest {
  EnabledAnalysisTypes?: Array<EnabledAnalysisType>;
  FirewallArn?: string;
  FirewallName?: string;
  UpdateToken?: string;
}
export interface UpdateFirewallAnalysisSettingsResponse {
  EnabledAnalysisTypes?: Array<EnabledAnalysisType>;
  FirewallArn?: string;
  FirewallName?: string;
  UpdateToken?: string;
}
export interface UpdateFirewallDeleteProtectionRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  DeleteProtection: boolean;
}
export interface UpdateFirewallDeleteProtectionResponse {
  FirewallArn?: string;
  FirewallName?: string;
  DeleteProtection?: boolean;
  UpdateToken?: string;
}
export interface UpdateFirewallDescriptionRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  Description?: string;
}
export interface UpdateFirewallDescriptionResponse {
  FirewallArn?: string;
  FirewallName?: string;
  Description?: string;
  UpdateToken?: string;
}
export interface UpdateFirewallEncryptionConfigurationRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  EncryptionConfiguration?: EncryptionConfiguration;
}
export interface UpdateFirewallEncryptionConfigurationResponse {
  FirewallArn?: string;
  FirewallName?: string;
  UpdateToken?: string;
  EncryptionConfiguration?: EncryptionConfiguration;
}
export interface UpdateFirewallPolicyChangeProtectionRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  FirewallPolicyChangeProtection: boolean;
}
export interface UpdateFirewallPolicyChangeProtectionResponse {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  FirewallPolicyChangeProtection?: boolean;
}
export interface UpdateFirewallPolicyRequest {
  UpdateToken: string;
  FirewallPolicyArn?: string;
  FirewallPolicyName?: string;
  FirewallPolicy: FirewallPolicy;
  Description?: string;
  DryRun?: boolean;
  EncryptionConfiguration?: EncryptionConfiguration;
}
export interface UpdateFirewallPolicyResponse {
  UpdateToken: string;
  FirewallPolicyResponse: FirewallPolicyResponse;
}
export interface UpdateLoggingConfigurationRequest {
  FirewallArn?: string;
  FirewallName?: string;
  LoggingConfiguration?: LoggingConfiguration;
  EnableMonitoringDashboard?: boolean;
}
export interface UpdateLoggingConfigurationResponse {
  FirewallArn?: string;
  FirewallName?: string;
  LoggingConfiguration?: LoggingConfiguration;
  EnableMonitoringDashboard?: boolean;
}
export interface UpdateRuleGroupRequest {
  UpdateToken: string;
  RuleGroupArn?: string;
  RuleGroupName?: string;
  RuleGroup?: RuleGroup;
  Rules?: string;
  Type?: RuleGroupType;
  Description?: string;
  DryRun?: boolean;
  EncryptionConfiguration?: EncryptionConfiguration;
  SourceMetadata?: SourceMetadata;
  AnalyzeRuleGroup?: boolean;
  SummaryConfiguration?: SummaryConfiguration;
}
export interface UpdateRuleGroupResponse {
  UpdateToken: string;
  RuleGroupResponse: RuleGroupResponse;
}
export interface UpdateSubnetChangeProtectionRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  SubnetChangeProtection: boolean;
}
export interface UpdateSubnetChangeProtectionResponse {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  SubnetChangeProtection?: boolean;
}
export interface UpdateTLSInspectionConfigurationRequest {
  TLSInspectionConfigurationArn?: string;
  TLSInspectionConfigurationName?: string;
  TLSInspectionConfiguration: TLSInspectionConfiguration;
  Description?: string;
  EncryptionConfiguration?: EncryptionConfiguration;
  UpdateToken: string;
}
export interface UpdateTLSInspectionConfigurationResponse {
  UpdateToken: string;
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse;
}
export type UpdateToken = string;

export type VariableDefinition = string;

export type VariableDefinitionList = Array<string>;
export interface VpcEndpointAssociation {
  VpcEndpointAssociationId?: string;
  VpcEndpointAssociationArn: string;
  FirewallArn: string;
  VpcId: string;
  SubnetMapping: SubnetMapping;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface VpcEndpointAssociationMetadata {
  VpcEndpointAssociationArn?: string;
}
export type VpcEndpointAssociations = Array<VpcEndpointAssociationMetadata>;
export interface VpcEndpointAssociationStatus {
  Status: FirewallStatusValue;
  AssociationSyncState?: Record<string, AZSyncState>;
}
export type VpcEndpointId = string;

export type VpcId = string;

export type VpcIds = Array<string>;
export declare namespace AcceptNetworkFirewallTransitGatewayAttachment {
  export type Input = AcceptNetworkFirewallTransitGatewayAttachmentRequest;
  export type Output = AcceptNetworkFirewallTransitGatewayAttachmentResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateAvailabilityZones {
  export type Input = AssociateAvailabilityZonesRequest;
  export type Output = AssociateAvailabilityZonesResponse;
  export type Error =
    | InsufficientCapacityException
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateFirewallPolicy {
  export type Input = AssociateFirewallPolicyRequest;
  export type Output = AssociateFirewallPolicyResponse;
  export type Error =
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateSubnets {
  export type Input = AssociateSubnetsRequest;
  export type Output = AssociateSubnetsResponse;
  export type Error =
    | InsufficientCapacityException
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateFirewall {
  export type Input = CreateFirewallRequest;
  export type Output = CreateFirewallResponse;
  export type Error =
    | InsufficientCapacityException
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateFirewallPolicy {
  export type Input = CreateFirewallPolicyRequest;
  export type Output = CreateFirewallPolicyResponse;
  export type Error =
    | InsufficientCapacityException
    | InternalServerError
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateRuleGroup {
  export type Input = CreateRuleGroupRequest;
  export type Output = CreateRuleGroupResponse;
  export type Error =
    | InsufficientCapacityException
    | InternalServerError
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateTLSInspectionConfiguration {
  export type Input = CreateTLSInspectionConfigurationRequest;
  export type Output = CreateTLSInspectionConfigurationResponse;
  export type Error =
    | InsufficientCapacityException
    | InternalServerError
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateVpcEndpointAssociation {
  export type Input = CreateVpcEndpointAssociationRequest;
  export type Output = CreateVpcEndpointAssociationResponse;
  export type Error =
    | InsufficientCapacityException
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteFirewall {
  export type Input = DeleteFirewallRequest;
  export type Output = DeleteFirewallResponse;
  export type Error =
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteFirewallPolicy {
  export type Input = DeleteFirewallPolicyRequest;
  export type Output = DeleteFirewallPolicyResponse;
  export type Error =
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteNetworkFirewallTransitGatewayAttachment {
  export type Input = DeleteNetworkFirewallTransitGatewayAttachmentRequest;
  export type Output = DeleteNetworkFirewallTransitGatewayAttachmentResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | InvalidResourcePolicyException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteRuleGroup {
  export type Input = DeleteRuleGroupRequest;
  export type Output = DeleteRuleGroupResponse;
  export type Error =
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteTLSInspectionConfiguration {
  export type Input = DeleteTLSInspectionConfigurationRequest;
  export type Output = DeleteTLSInspectionConfigurationResponse;
  export type Error =
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteVpcEndpointAssociation {
  export type Input = DeleteVpcEndpointAssociationRequest;
  export type Output = DeleteVpcEndpointAssociationResponse;
  export type Error =
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeFirewall {
  export type Input = DescribeFirewallRequest;
  export type Output = DescribeFirewallResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeFirewallMetadata {
  export type Input = DescribeFirewallMetadataRequest;
  export type Output = DescribeFirewallMetadataResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeFirewallPolicy {
  export type Input = DescribeFirewallPolicyRequest;
  export type Output = DescribeFirewallPolicyResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeFlowOperation {
  export type Input = DescribeFlowOperationRequest;
  export type Output = DescribeFlowOperationResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeLoggingConfiguration {
  export type Input = DescribeLoggingConfigurationRequest;
  export type Output = DescribeLoggingConfigurationResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeResourcePolicy {
  export type Input = DescribeResourcePolicyRequest;
  export type Output = DescribeResourcePolicyResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeRuleGroup {
  export type Input = DescribeRuleGroupRequest;
  export type Output = DescribeRuleGroupResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeRuleGroupMetadata {
  export type Input = DescribeRuleGroupMetadataRequest;
  export type Output = DescribeRuleGroupMetadataResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeRuleGroupSummary {
  export type Input = DescribeRuleGroupSummaryRequest;
  export type Output = DescribeRuleGroupSummaryResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeTLSInspectionConfiguration {
  export type Input = DescribeTLSInspectionConfigurationRequest;
  export type Output = DescribeTLSInspectionConfigurationResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeVpcEndpointAssociation {
  export type Input = DescribeVpcEndpointAssociationRequest;
  export type Output = DescribeVpcEndpointAssociationResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateAvailabilityZones {
  export type Input = DisassociateAvailabilityZonesRequest;
  export type Output = DisassociateAvailabilityZonesResponse;
  export type Error =
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateSubnets {
  export type Input = DisassociateSubnetsRequest;
  export type Output = DisassociateSubnetsResponse;
  export type Error =
    | InternalServerError
    | InvalidOperationException
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetAnalysisReportResults {
  export type Input = GetAnalysisReportResultsRequest;
  export type Output = GetAnalysisReportResultsResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAnalysisReports {
  export type Input = ListAnalysisReportsRequest;
  export type Output = ListAnalysisReportsResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListFirewallPolicies {
  export type Input = ListFirewallPoliciesRequest;
  export type Output = ListFirewallPoliciesResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListFirewalls {
  export type Input = ListFirewallsRequest;
  export type Output = ListFirewallsResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListFlowOperationResults {
  export type Input = ListFlowOperationResultsRequest;
  export type Output = ListFlowOperationResultsResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListFlowOperations {
  export type Input = ListFlowOperationsRequest;
  export type Output = ListFlowOperationsResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRuleGroups {
  export type Input = ListRuleGroupsRequest;
  export type Output = ListRuleGroupsResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTLSInspectionConfigurations {
  export type Input = ListTLSInspectionConfigurationsRequest;
  export type Output = ListTLSInspectionConfigurationsResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListVpcEndpointAssociations {
  export type Input = ListVpcEndpointAssociationsRequest;
  export type Output = ListVpcEndpointAssociationsResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | InvalidResourcePolicyException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RejectNetworkFirewallTransitGatewayAttachment {
  export type Input = RejectNetworkFirewallTransitGatewayAttachmentRequest;
  export type Output = RejectNetworkFirewallTransitGatewayAttachmentResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartAnalysisReport {
  export type Input = StartAnalysisReportRequest;
  export type Output = StartAnalysisReportResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartFlowCapture {
  export type Input = StartFlowCaptureRequest;
  export type Output = StartFlowCaptureResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartFlowFlush {
  export type Input = StartFlowFlushRequest;
  export type Output = StartFlowFlushResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAvailabilityZoneChangeProtection {
  export type Input = UpdateAvailabilityZoneChangeProtectionRequest;
  export type Output = UpdateAvailabilityZoneChangeProtectionResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ResourceOwnerCheckException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateFirewallAnalysisSettings {
  export type Input = UpdateFirewallAnalysisSettingsRequest;
  export type Output = UpdateFirewallAnalysisSettingsResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateFirewallDeleteProtection {
  export type Input = UpdateFirewallDeleteProtectionRequest;
  export type Output = UpdateFirewallDeleteProtectionResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ResourceOwnerCheckException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateFirewallDescription {
  export type Input = UpdateFirewallDescriptionRequest;
  export type Output = UpdateFirewallDescriptionResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateFirewallEncryptionConfiguration {
  export type Input = UpdateFirewallEncryptionConfigurationRequest;
  export type Output = UpdateFirewallEncryptionConfigurationResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ResourceOwnerCheckException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateFirewallPolicy {
  export type Input = UpdateFirewallPolicyRequest;
  export type Output = UpdateFirewallPolicyResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateFirewallPolicyChangeProtection {
  export type Input = UpdateFirewallPolicyChangeProtectionRequest;
  export type Output = UpdateFirewallPolicyChangeProtectionResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ResourceOwnerCheckException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateLoggingConfiguration {
  export type Input = UpdateLoggingConfigurationRequest;
  export type Output = UpdateLoggingConfigurationResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | LogDestinationPermissionException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateRuleGroup {
  export type Input = UpdateRuleGroupRequest;
  export type Output = UpdateRuleGroupResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateSubnetChangeProtection {
  export type Input = UpdateSubnetChangeProtectionRequest;
  export type Output = UpdateSubnetChangeProtectionResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ResourceOwnerCheckException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateTLSInspectionConfiguration {
  export type Input = UpdateTLSInspectionConfigurationRequest;
  export type Output = UpdateTLSInspectionConfigurationResponse;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

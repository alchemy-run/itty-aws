import * as S from "effect/Schema"
import { FormatAwsQueryRequest,FormatAwsQueryResponse,FormatAwsXMLError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const VpcIdentifierList = S.Array(S.String);
export class DeleteClusterSnapshotMessage extends S.Class<DeleteClusterSnapshotMessage>("DeleteClusterSnapshotMessage")({SnapshotIdentifier: S.String, SnapshotClusterIdentifier: S.optional(S.String)}) {}
export const DeleteClusterSnapshotMessageList = S.Array(DeleteClusterSnapshotMessage);
export const SnapshotIdentifierList = S.Array(S.String);
export const ClusterSecurityGroupNameList = S.Array(S.String);
export const VpcSecurityGroupIdList = S.Array(S.String);
export const IamRoleArnList = S.Array(S.String);
export const SubnetIdentifierList = S.Array(S.String);
export const SourceIdsList = S.Array(S.String);
export const EventCategoriesList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export const ScheduleDefinitionList = S.Array(S.String);
export const ConsumerIdentifierList = S.Array(S.String);
export const AttributeNameList = S.Array(S.String);
export const TagValueList = S.Array(S.String);
export const LogTypeList = S.Array(S.String);
export const DbGroupList = S.Array(S.String);
export const ClusterIdentifierList = S.Array(S.String);
export class AcceptReservedNodeExchangeInputMessage extends S.Class<AcceptReservedNodeExchangeInputMessage>("AcceptReservedNodeExchangeInputMessage")({ReservedNodeId: S.String, TargetReservedNodeOfferingId: S.String}) {}
export class PartnerIntegrationInputMessage extends S.Class<PartnerIntegrationInputMessage>("PartnerIntegrationInputMessage")({AccountId: S.String, ClusterIdentifier: S.String, DatabaseName: S.String, PartnerName: S.String}) {}
export class AssociateDataShareConsumerMessage extends S.Class<AssociateDataShareConsumerMessage>("AssociateDataShareConsumerMessage")({DataShareArn: S.String, AssociateEntireAccount: S.optional(S.Boolean), ConsumerArn: S.optional(S.String), ConsumerRegion: S.optional(S.String), AllowWrites: S.optional(S.Boolean)}) {}
export class AuthorizeClusterSecurityGroupIngressMessage extends S.Class<AuthorizeClusterSecurityGroupIngressMessage>("AuthorizeClusterSecurityGroupIngressMessage")({ClusterSecurityGroupName: S.String, CIDRIP: S.optional(S.String), EC2SecurityGroupName: S.optional(S.String), EC2SecurityGroupOwnerId: S.optional(S.String)}) {}
export class AuthorizeDataShareMessage extends S.Class<AuthorizeDataShareMessage>("AuthorizeDataShareMessage")({DataShareArn: S.String, ConsumerIdentifier: S.String, AllowWrites: S.optional(S.Boolean)}) {}
export class AuthorizeEndpointAccessMessage extends S.Class<AuthorizeEndpointAccessMessage>("AuthorizeEndpointAccessMessage")({ClusterIdentifier: S.optional(S.String), Account: S.String, VpcIds: S.optional(VpcIdentifierList)}) {}
export class AuthorizeSnapshotAccessMessage extends S.Class<AuthorizeSnapshotAccessMessage>("AuthorizeSnapshotAccessMessage")({SnapshotIdentifier: S.optional(S.String), SnapshotArn: S.optional(S.String), SnapshotClusterIdentifier: S.optional(S.String), AccountWithRestoreAccess: S.String}) {}
export class BatchDeleteClusterSnapshotsRequest extends S.Class<BatchDeleteClusterSnapshotsRequest>("BatchDeleteClusterSnapshotsRequest")({Identifiers: DeleteClusterSnapshotMessageList}) {}
export class BatchModifyClusterSnapshotsMessage extends S.Class<BatchModifyClusterSnapshotsMessage>("BatchModifyClusterSnapshotsMessage")({SnapshotIdentifierList: SnapshotIdentifierList, ManualSnapshotRetentionPeriod: S.optional(S.Number), Force: S.optional(S.Boolean)}) {}
export class CancelResizeMessage extends S.Class<CancelResizeMessage>("CancelResizeMessage")({ClusterIdentifier: S.String}) {}
export class CopyClusterSnapshotMessage extends S.Class<CopyClusterSnapshotMessage>("CopyClusterSnapshotMessage")({SourceSnapshotIdentifier: S.String, SourceSnapshotClusterIdentifier: S.optional(S.String), TargetSnapshotIdentifier: S.String, ManualSnapshotRetentionPeriod: S.optional(S.Number)}) {}
export class CreateAuthenticationProfileMessage extends S.Class<CreateAuthenticationProfileMessage>("CreateAuthenticationProfileMessage")({AuthenticationProfileName: S.String, AuthenticationProfileContent: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class CreateClusterParameterGroupMessage extends S.Class<CreateClusterParameterGroupMessage>("CreateClusterParameterGroupMessage")({ParameterGroupName: S.String, ParameterGroupFamily: S.String, Description: S.String, Tags: S.optional(TagList)}) {}
export class CreateClusterSecurityGroupMessage extends S.Class<CreateClusterSecurityGroupMessage>("CreateClusterSecurityGroupMessage")({ClusterSecurityGroupName: S.String, Description: S.String, Tags: S.optional(TagList)}) {}
export class CreateClusterSnapshotMessage extends S.Class<CreateClusterSnapshotMessage>("CreateClusterSnapshotMessage")({SnapshotIdentifier: S.String, ClusterIdentifier: S.String, ManualSnapshotRetentionPeriod: S.optional(S.Number), Tags: S.optional(TagList)}) {}
export class CreateClusterSubnetGroupMessage extends S.Class<CreateClusterSubnetGroupMessage>("CreateClusterSubnetGroupMessage")({ClusterSubnetGroupName: S.String, Description: S.String, SubnetIds: SubnetIdentifierList, Tags: S.optional(TagList)}) {}
export class CreateCustomDomainAssociationMessage extends S.Class<CreateCustomDomainAssociationMessage>("CreateCustomDomainAssociationMessage")({CustomDomainName: S.String, CustomDomainCertificateArn: S.String, ClusterIdentifier: S.String}) {}
export class CreateEndpointAccessMessage extends S.Class<CreateEndpointAccessMessage>("CreateEndpointAccessMessage")({ClusterIdentifier: S.optional(S.String), ResourceOwner: S.optional(S.String), EndpointName: S.String, SubnetGroupName: S.String, VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList)}) {}
export class CreateEventSubscriptionMessage extends S.Class<CreateEventSubscriptionMessage>("CreateEventSubscriptionMessage")({SubscriptionName: S.String, SnsTopicArn: S.String, SourceType: S.optional(S.String), SourceIds: S.optional(SourceIdsList), EventCategories: S.optional(EventCategoriesList), Severity: S.optional(S.String), Enabled: S.optional(S.Boolean), Tags: S.optional(TagList)}) {}
export class CreateHsmClientCertificateMessage extends S.Class<CreateHsmClientCertificateMessage>("CreateHsmClientCertificateMessage")({HsmClientCertificateIdentifier: S.String, Tags: S.optional(TagList)}) {}
export class CreateHsmConfigurationMessage extends S.Class<CreateHsmConfigurationMessage>("CreateHsmConfigurationMessage")({HsmConfigurationIdentifier: S.String, Description: S.String, HsmIpAddress: S.String, HsmPartitionName: S.String, HsmPartitionPassword: S.String, HsmServerPublicCertificate: S.String, Tags: S.optional(TagList)}) {}
export class CreateSnapshotCopyGrantMessage extends S.Class<CreateSnapshotCopyGrantMessage>("CreateSnapshotCopyGrantMessage")({SnapshotCopyGrantName: S.String, KmsKeyId: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class CreateSnapshotScheduleMessage extends S.Class<CreateSnapshotScheduleMessage>("CreateSnapshotScheduleMessage")({ScheduleDefinitions: S.optional(ScheduleDefinitionList), ScheduleIdentifier: S.optional(S.String), ScheduleDescription: S.optional(S.String), Tags: S.optional(TagList), DryRun: S.optional(S.Boolean), NextInvocations: S.optional(S.Number)}) {}
export class CreateTagsMessage extends S.Class<CreateTagsMessage>("CreateTagsMessage")({ResourceName: S.String, Tags: TagList}) {}
export class CreateUsageLimitMessage extends S.Class<CreateUsageLimitMessage>("CreateUsageLimitMessage")({ClusterIdentifier: S.String, FeatureType: S.String, LimitType: S.String, Amount: S.Number, Period: S.optional(S.String), BreachAction: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class DeauthorizeDataShareMessage extends S.Class<DeauthorizeDataShareMessage>("DeauthorizeDataShareMessage")({DataShareArn: S.String, ConsumerIdentifier: S.String}) {}
export class DeleteAuthenticationProfileMessage extends S.Class<DeleteAuthenticationProfileMessage>("DeleteAuthenticationProfileMessage")({AuthenticationProfileName: S.String}) {}
export class DeleteClusterMessage extends S.Class<DeleteClusterMessage>("DeleteClusterMessage")({ClusterIdentifier: S.String, SkipFinalClusterSnapshot: S.optional(S.Boolean), FinalClusterSnapshotIdentifier: S.optional(S.String), FinalClusterSnapshotRetentionPeriod: S.optional(S.Number)}) {}
export class DeleteClusterParameterGroupMessage extends S.Class<DeleteClusterParameterGroupMessage>("DeleteClusterParameterGroupMessage")({ParameterGroupName: S.String}) {}
export class DeleteClusterSecurityGroupMessage extends S.Class<DeleteClusterSecurityGroupMessage>("DeleteClusterSecurityGroupMessage")({ClusterSecurityGroupName: S.String}) {}
export class DeleteClusterSubnetGroupMessage extends S.Class<DeleteClusterSubnetGroupMessage>("DeleteClusterSubnetGroupMessage")({ClusterSubnetGroupName: S.String}) {}
export class DeleteCustomDomainAssociationMessage extends S.Class<DeleteCustomDomainAssociationMessage>("DeleteCustomDomainAssociationMessage")({ClusterIdentifier: S.String, CustomDomainName: S.String}) {}
export class DeleteEndpointAccessMessage extends S.Class<DeleteEndpointAccessMessage>("DeleteEndpointAccessMessage")({EndpointName: S.String}) {}
export class DeleteEventSubscriptionMessage extends S.Class<DeleteEventSubscriptionMessage>("DeleteEventSubscriptionMessage")({SubscriptionName: S.String}) {}
export class DeleteHsmClientCertificateMessage extends S.Class<DeleteHsmClientCertificateMessage>("DeleteHsmClientCertificateMessage")({HsmClientCertificateIdentifier: S.String}) {}
export class DeleteHsmConfigurationMessage extends S.Class<DeleteHsmConfigurationMessage>("DeleteHsmConfigurationMessage")({HsmConfigurationIdentifier: S.String}) {}
export class DeleteIntegrationMessage extends S.Class<DeleteIntegrationMessage>("DeleteIntegrationMessage")({IntegrationArn: S.String}) {}
export class PartnerIntegrationOutputMessage extends S.Class<PartnerIntegrationOutputMessage>("PartnerIntegrationOutputMessage")({DatabaseName: S.optional(S.String), PartnerName: S.optional(S.String)}) {}
export class DeleteRedshiftIdcApplicationMessage extends S.Class<DeleteRedshiftIdcApplicationMessage>("DeleteRedshiftIdcApplicationMessage")({RedshiftIdcApplicationArn: S.String}) {}
export class DeleteResourcePolicyMessage extends S.Class<DeleteResourcePolicyMessage>("DeleteResourcePolicyMessage")({ResourceArn: S.String}) {}
export class DeleteScheduledActionMessage extends S.Class<DeleteScheduledActionMessage>("DeleteScheduledActionMessage")({ScheduledActionName: S.String}) {}
export class DeleteSnapshotCopyGrantMessage extends S.Class<DeleteSnapshotCopyGrantMessage>("DeleteSnapshotCopyGrantMessage")({SnapshotCopyGrantName: S.String}) {}
export class DeleteSnapshotScheduleMessage extends S.Class<DeleteSnapshotScheduleMessage>("DeleteSnapshotScheduleMessage")({ScheduleIdentifier: S.String}) {}
export class DeleteTagsMessage extends S.Class<DeleteTagsMessage>("DeleteTagsMessage")({ResourceName: S.String, TagKeys: TagKeyList}) {}
export class DeleteUsageLimitMessage extends S.Class<DeleteUsageLimitMessage>("DeleteUsageLimitMessage")({UsageLimitId: S.String}) {}
export class DescribeAccountAttributesMessage extends S.Class<DescribeAccountAttributesMessage>("DescribeAccountAttributesMessage")({AttributeNames: S.optional(AttributeNameList)}) {}
export class DescribeAuthenticationProfilesMessage extends S.Class<DescribeAuthenticationProfilesMessage>("DescribeAuthenticationProfilesMessage")({AuthenticationProfileName: S.optional(S.String)}) {}
export class DescribeClusterDbRevisionsMessage extends S.Class<DescribeClusterDbRevisionsMessage>("DescribeClusterDbRevisionsMessage")({ClusterIdentifier: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeClusterParameterGroupsMessage extends S.Class<DescribeClusterParameterGroupsMessage>("DescribeClusterParameterGroupsMessage")({ParameterGroupName: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), TagKeys: S.optional(TagKeyList), TagValues: S.optional(TagValueList)}) {}
export class DescribeClusterParametersMessage extends S.Class<DescribeClusterParametersMessage>("DescribeClusterParametersMessage")({ParameterGroupName: S.String, Source: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeClustersMessage extends S.Class<DescribeClustersMessage>("DescribeClustersMessage")({ClusterIdentifier: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), TagKeys: S.optional(TagKeyList), TagValues: S.optional(TagValueList)}) {}
export class DescribeClusterSecurityGroupsMessage extends S.Class<DescribeClusterSecurityGroupsMessage>("DescribeClusterSecurityGroupsMessage")({ClusterSecurityGroupName: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), TagKeys: S.optional(TagKeyList), TagValues: S.optional(TagValueList)}) {}
export class DescribeClusterSubnetGroupsMessage extends S.Class<DescribeClusterSubnetGroupsMessage>("DescribeClusterSubnetGroupsMessage")({ClusterSubnetGroupName: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), TagKeys: S.optional(TagKeyList), TagValues: S.optional(TagValueList)}) {}
export class DescribeClusterTracksMessage extends S.Class<DescribeClusterTracksMessage>("DescribeClusterTracksMessage")({MaintenanceTrackName: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeClusterVersionsMessage extends S.Class<DescribeClusterVersionsMessage>("DescribeClusterVersionsMessage")({ClusterVersion: S.optional(S.String), ClusterParameterGroupFamily: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeCustomDomainAssociationsMessage extends S.Class<DescribeCustomDomainAssociationsMessage>("DescribeCustomDomainAssociationsMessage")({CustomDomainName: S.optional(S.String), CustomDomainCertificateArn: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeDataSharesMessage extends S.Class<DescribeDataSharesMessage>("DescribeDataSharesMessage")({DataShareArn: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeDataSharesForConsumerMessage extends S.Class<DescribeDataSharesForConsumerMessage>("DescribeDataSharesForConsumerMessage")({ConsumerArn: S.optional(S.String), Status: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeDataSharesForProducerMessage extends S.Class<DescribeDataSharesForProducerMessage>("DescribeDataSharesForProducerMessage")({ProducerArn: S.optional(S.String), Status: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeDefaultClusterParametersMessage extends S.Class<DescribeDefaultClusterParametersMessage>("DescribeDefaultClusterParametersMessage")({ParameterGroupFamily: S.String, MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeEndpointAccessMessage extends S.Class<DescribeEndpointAccessMessage>("DescribeEndpointAccessMessage")({ClusterIdentifier: S.optional(S.String), ResourceOwner: S.optional(S.String), EndpointName: S.optional(S.String), VpcId: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeEndpointAuthorizationMessage extends S.Class<DescribeEndpointAuthorizationMessage>("DescribeEndpointAuthorizationMessage")({ClusterIdentifier: S.optional(S.String), Account: S.optional(S.String), Grantee: S.optional(S.Boolean), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeEventCategoriesMessage extends S.Class<DescribeEventCategoriesMessage>("DescribeEventCategoriesMessage")({SourceType: S.optional(S.String)}) {}
export class DescribeEventsMessage extends S.Class<DescribeEventsMessage>("DescribeEventsMessage")({SourceIdentifier: S.optional(S.String), SourceType: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Duration: S.optional(S.Number), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeEventSubscriptionsMessage extends S.Class<DescribeEventSubscriptionsMessage>("DescribeEventSubscriptionsMessage")({SubscriptionName: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), TagKeys: S.optional(TagKeyList), TagValues: S.optional(TagValueList)}) {}
export class DescribeHsmClientCertificatesMessage extends S.Class<DescribeHsmClientCertificatesMessage>("DescribeHsmClientCertificatesMessage")({HsmClientCertificateIdentifier: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), TagKeys: S.optional(TagKeyList), TagValues: S.optional(TagValueList)}) {}
export class DescribeHsmConfigurationsMessage extends S.Class<DescribeHsmConfigurationsMessage>("DescribeHsmConfigurationsMessage")({HsmConfigurationIdentifier: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), TagKeys: S.optional(TagKeyList), TagValues: S.optional(TagValueList)}) {}
export class DescribeInboundIntegrationsMessage extends S.Class<DescribeInboundIntegrationsMessage>("DescribeInboundIntegrationsMessage")({IntegrationArn: S.optional(S.String), TargetArn: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeLoggingStatusMessage extends S.Class<DescribeLoggingStatusMessage>("DescribeLoggingStatusMessage")({ClusterIdentifier: S.String}) {}
export class DescribeOrderableClusterOptionsMessage extends S.Class<DescribeOrderableClusterOptionsMessage>("DescribeOrderableClusterOptionsMessage")({ClusterVersion: S.optional(S.String), NodeType: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribePartnersInputMessage extends S.Class<DescribePartnersInputMessage>("DescribePartnersInputMessage")({AccountId: S.String, ClusterIdentifier: S.String, DatabaseName: S.optional(S.String), PartnerName: S.optional(S.String)}) {}
export class DescribeRedshiftIdcApplicationsMessage extends S.Class<DescribeRedshiftIdcApplicationsMessage>("DescribeRedshiftIdcApplicationsMessage")({RedshiftIdcApplicationArn: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeReservedNodeExchangeStatusInputMessage extends S.Class<DescribeReservedNodeExchangeStatusInputMessage>("DescribeReservedNodeExchangeStatusInputMessage")({ReservedNodeId: S.optional(S.String), ReservedNodeExchangeRequestId: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeReservedNodeOfferingsMessage extends S.Class<DescribeReservedNodeOfferingsMessage>("DescribeReservedNodeOfferingsMessage")({ReservedNodeOfferingId: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeReservedNodesMessage extends S.Class<DescribeReservedNodesMessage>("DescribeReservedNodesMessage")({ReservedNodeId: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeResizeMessage extends S.Class<DescribeResizeMessage>("DescribeResizeMessage")({ClusterIdentifier: S.String}) {}
export class DescribeSnapshotCopyGrantsMessage extends S.Class<DescribeSnapshotCopyGrantsMessage>("DescribeSnapshotCopyGrantsMessage")({SnapshotCopyGrantName: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), TagKeys: S.optional(TagKeyList), TagValues: S.optional(TagValueList)}) {}
export class DescribeSnapshotSchedulesMessage extends S.Class<DescribeSnapshotSchedulesMessage>("DescribeSnapshotSchedulesMessage")({ClusterIdentifier: S.optional(S.String), ScheduleIdentifier: S.optional(S.String), TagKeys: S.optional(TagKeyList), TagValues: S.optional(TagValueList), Marker: S.optional(S.String), MaxRecords: S.optional(S.Number)}) {}
export class CustomerStorageMessage extends S.Class<CustomerStorageMessage>("CustomerStorageMessage")({TotalBackupSizeInMegaBytes: S.optional(S.Number), TotalProvisionedStorageInMegaBytes: S.optional(S.Number)}) {}
export class DescribeTableRestoreStatusMessage extends S.Class<DescribeTableRestoreStatusMessage>("DescribeTableRestoreStatusMessage")({ClusterIdentifier: S.optional(S.String), TableRestoreRequestId: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeTagsMessage extends S.Class<DescribeTagsMessage>("DescribeTagsMessage")({ResourceName: S.optional(S.String), ResourceType: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), TagKeys: S.optional(TagKeyList), TagValues: S.optional(TagValueList)}) {}
export class DescribeUsageLimitsMessage extends S.Class<DescribeUsageLimitsMessage>("DescribeUsageLimitsMessage")({UsageLimitId: S.optional(S.String), ClusterIdentifier: S.optional(S.String), FeatureType: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), TagKeys: S.optional(TagKeyList), TagValues: S.optional(TagValueList)}) {}
export class DisableLoggingMessage extends S.Class<DisableLoggingMessage>("DisableLoggingMessage")({ClusterIdentifier: S.String}) {}
export class DisableSnapshotCopyMessage extends S.Class<DisableSnapshotCopyMessage>("DisableSnapshotCopyMessage")({ClusterIdentifier: S.String}) {}
export class DisassociateDataShareConsumerMessage extends S.Class<DisassociateDataShareConsumerMessage>("DisassociateDataShareConsumerMessage")({DataShareArn: S.String, DisassociateEntireAccount: S.optional(S.Boolean), ConsumerArn: S.optional(S.String), ConsumerRegion: S.optional(S.String)}) {}
export class EnableLoggingMessage extends S.Class<EnableLoggingMessage>("EnableLoggingMessage")({ClusterIdentifier: S.String, BucketName: S.optional(S.String), S3KeyPrefix: S.optional(S.String), LogDestinationType: S.optional(S.String), LogExports: S.optional(LogTypeList)}) {}
export class EnableSnapshotCopyMessage extends S.Class<EnableSnapshotCopyMessage>("EnableSnapshotCopyMessage")({ClusterIdentifier: S.String, DestinationRegion: S.String, RetentionPeriod: S.optional(S.Number), SnapshotCopyGrantName: S.optional(S.String), ManualSnapshotRetentionPeriod: S.optional(S.Number)}) {}
export class FailoverPrimaryComputeInputMessage extends S.Class<FailoverPrimaryComputeInputMessage>("FailoverPrimaryComputeInputMessage")({ClusterIdentifier: S.String}) {}
export class GetClusterCredentialsMessage extends S.Class<GetClusterCredentialsMessage>("GetClusterCredentialsMessage")({DbUser: S.String, DbName: S.optional(S.String), ClusterIdentifier: S.optional(S.String), DurationSeconds: S.optional(S.Number), AutoCreate: S.optional(S.Boolean), DbGroups: S.optional(DbGroupList), CustomDomainName: S.optional(S.String)}) {}
export class GetClusterCredentialsWithIAMMessage extends S.Class<GetClusterCredentialsWithIAMMessage>("GetClusterCredentialsWithIAMMessage")({DbName: S.optional(S.String), ClusterIdentifier: S.optional(S.String), DurationSeconds: S.optional(S.Number), CustomDomainName: S.optional(S.String)}) {}
export class GetIdentityCenterAuthTokenRequest extends S.Class<GetIdentityCenterAuthTokenRequest>("GetIdentityCenterAuthTokenRequest")({ClusterIds: ClusterIdentifierList}) {}
export class GetReservedNodeExchangeConfigurationOptionsInputMessage extends S.Class<GetReservedNodeExchangeConfigurationOptionsInputMessage>("GetReservedNodeExchangeConfigurationOptionsInputMessage")({ActionType: S.String, ClusterIdentifier: S.optional(S.String), SnapshotIdentifier: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class GetReservedNodeExchangeOfferingsInputMessage extends S.Class<GetReservedNodeExchangeOfferingsInputMessage>("GetReservedNodeExchangeOfferingsInputMessage")({ReservedNodeId: S.String, MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class GetResourcePolicyMessage extends S.Class<GetResourcePolicyMessage>("GetResourcePolicyMessage")({ResourceArn: S.String}) {}
export class ListRecommendationsMessage extends S.Class<ListRecommendationsMessage>("ListRecommendationsMessage")({ClusterIdentifier: S.optional(S.String), NamespaceArn: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class ModifyAquaInputMessage extends S.Class<ModifyAquaInputMessage>("ModifyAquaInputMessage")({ClusterIdentifier: S.String, AquaConfigurationStatus: S.optional(S.String)}) {}
export class ModifyAuthenticationProfileMessage extends S.Class<ModifyAuthenticationProfileMessage>("ModifyAuthenticationProfileMessage")({AuthenticationProfileName: S.String, AuthenticationProfileContent: S.String}) {}
export class ModifyClusterMessage extends S.Class<ModifyClusterMessage>("ModifyClusterMessage")({ClusterIdentifier: S.String, ClusterType: S.optional(S.String), NodeType: S.optional(S.String), NumberOfNodes: S.optional(S.Number), ClusterSecurityGroups: S.optional(ClusterSecurityGroupNameList), VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList), MasterUserPassword: S.optional(S.String), ClusterParameterGroupName: S.optional(S.String), AutomatedSnapshotRetentionPeriod: S.optional(S.Number), ManualSnapshotRetentionPeriod: S.optional(S.Number), PreferredMaintenanceWindow: S.optional(S.String), ClusterVersion: S.optional(S.String), AllowVersionUpgrade: S.optional(S.Boolean), HsmClientCertificateIdentifier: S.optional(S.String), HsmConfigurationIdentifier: S.optional(S.String), NewClusterIdentifier: S.optional(S.String), PubliclyAccessible: S.optional(S.Boolean), ElasticIp: S.optional(S.String), EnhancedVpcRouting: S.optional(S.Boolean), MaintenanceTrackName: S.optional(S.String), Encrypted: S.optional(S.Boolean), KmsKeyId: S.optional(S.String), AvailabilityZoneRelocation: S.optional(S.Boolean), AvailabilityZone: S.optional(S.String), Port: S.optional(S.Number), ManageMasterPassword: S.optional(S.Boolean), MasterPasswordSecretKmsKeyId: S.optional(S.String), IpAddressType: S.optional(S.String), MultiAZ: S.optional(S.Boolean)}) {}
export class ModifyClusterDbRevisionMessage extends S.Class<ModifyClusterDbRevisionMessage>("ModifyClusterDbRevisionMessage")({ClusterIdentifier: S.String, RevisionTarget: S.String}) {}
export class ModifyClusterIamRolesMessage extends S.Class<ModifyClusterIamRolesMessage>("ModifyClusterIamRolesMessage")({ClusterIdentifier: S.String, AddIamRoles: S.optional(IamRoleArnList), RemoveIamRoles: S.optional(IamRoleArnList), DefaultIamRoleArn: S.optional(S.String)}) {}
export class ModifyClusterMaintenanceMessage extends S.Class<ModifyClusterMaintenanceMessage>("ModifyClusterMaintenanceMessage")({ClusterIdentifier: S.String, DeferMaintenance: S.optional(S.Boolean), DeferMaintenanceIdentifier: S.optional(S.String), DeferMaintenanceStartTime: S.optional(S.Date), DeferMaintenanceEndTime: S.optional(S.Date), DeferMaintenanceDuration: S.optional(S.Number)}) {}
export class ModifyClusterSnapshotMessage extends S.Class<ModifyClusterSnapshotMessage>("ModifyClusterSnapshotMessage")({SnapshotIdentifier: S.String, ManualSnapshotRetentionPeriod: S.optional(S.Number), Force: S.optional(S.Boolean)}) {}
export class ModifyClusterSnapshotScheduleMessage extends S.Class<ModifyClusterSnapshotScheduleMessage>("ModifyClusterSnapshotScheduleMessage")({ClusterIdentifier: S.String, ScheduleIdentifier: S.optional(S.String), DisassociateSchedule: S.optional(S.Boolean)}) {}
export class ModifyClusterSubnetGroupMessage extends S.Class<ModifyClusterSubnetGroupMessage>("ModifyClusterSubnetGroupMessage")({ClusterSubnetGroupName: S.String, Description: S.optional(S.String), SubnetIds: SubnetIdentifierList}) {}
export class ModifyCustomDomainAssociationMessage extends S.Class<ModifyCustomDomainAssociationMessage>("ModifyCustomDomainAssociationMessage")({CustomDomainName: S.String, CustomDomainCertificateArn: S.String, ClusterIdentifier: S.String}) {}
export class ModifyEndpointAccessMessage extends S.Class<ModifyEndpointAccessMessage>("ModifyEndpointAccessMessage")({EndpointName: S.String, VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList)}) {}
export class ModifyEventSubscriptionMessage extends S.Class<ModifyEventSubscriptionMessage>("ModifyEventSubscriptionMessage")({SubscriptionName: S.String, SnsTopicArn: S.optional(S.String), SourceType: S.optional(S.String), SourceIds: S.optional(SourceIdsList), EventCategories: S.optional(EventCategoriesList), Severity: S.optional(S.String), Enabled: S.optional(S.Boolean)}) {}
export class ModifyIntegrationMessage extends S.Class<ModifyIntegrationMessage>("ModifyIntegrationMessage")({IntegrationArn: S.String, Description: S.optional(S.String), IntegrationName: S.optional(S.String)}) {}
export class ModifyLakehouseConfigurationMessage extends S.Class<ModifyLakehouseConfigurationMessage>("ModifyLakehouseConfigurationMessage")({ClusterIdentifier: S.String, LakehouseRegistration: S.optional(S.String), CatalogName: S.optional(S.String), LakehouseIdcRegistration: S.optional(S.String), LakehouseIdcApplicationArn: S.optional(S.String), DryRun: S.optional(S.Boolean)}) {}
export const AuthorizedAudienceList = S.Array(S.String);
export class AuthorizedTokenIssuer extends S.Class<AuthorizedTokenIssuer>("AuthorizedTokenIssuer")({TrustedTokenIssuerArn: S.optional(S.String), AuthorizedAudiencesList: S.optional(AuthorizedAudienceList)}) {}
export const AuthorizedTokenIssuerList = S.Array(AuthorizedTokenIssuer);
export class LakeFormationQuery extends S.Class<LakeFormationQuery>("LakeFormationQuery")({Authorization: S.String}) {}
export const LakeFormationScopeUnion = S.Union(LakeFormationQuery);
export const LakeFormationServiceIntegrations = S.Array(LakeFormationScopeUnion);
export class ReadWriteAccess extends S.Class<ReadWriteAccess>("ReadWriteAccess")({Authorization: S.String}) {}
export const S3AccessGrantsScopeUnion = S.Union(ReadWriteAccess);
export const S3AccessGrantsServiceIntegrations = S.Array(S3AccessGrantsScopeUnion);
export class Connect extends S.Class<Connect>("Connect")({Authorization: S.String}) {}
export const RedshiftScopeUnion = S.Union(Connect);
export const RedshiftServiceIntegrations = S.Array(RedshiftScopeUnion);
export const ServiceIntegrationsUnion = S.Union(LakeFormationServiceIntegrations, S3AccessGrantsServiceIntegrations, RedshiftServiceIntegrations);
export const ServiceIntegrationList = S.Array(ServiceIntegrationsUnion);
export class ModifyRedshiftIdcApplicationMessage extends S.Class<ModifyRedshiftIdcApplicationMessage>("ModifyRedshiftIdcApplicationMessage")({RedshiftIdcApplicationArn: S.String, IdentityNamespace: S.optional(S.String), IamRoleArn: S.optional(S.String), IdcDisplayName: S.optional(S.String), AuthorizedTokenIssuerList: S.optional(AuthorizedTokenIssuerList), ServiceIntegrations: S.optional(ServiceIntegrationList)}) {}
export class ResizeClusterMessage extends S.Class<ResizeClusterMessage>("ResizeClusterMessage")({ClusterIdentifier: S.String, ClusterType: S.optional(S.String), NodeType: S.optional(S.String), NumberOfNodes: S.optional(S.Number), Classic: S.optional(S.Boolean), ReservedNodeId: S.optional(S.String), TargetReservedNodeOfferingId: S.optional(S.String)}) {}
export class PauseClusterMessage extends S.Class<PauseClusterMessage>("PauseClusterMessage")({ClusterIdentifier: S.String}) {}
export class ResumeClusterMessage extends S.Class<ResumeClusterMessage>("ResumeClusterMessage")({ClusterIdentifier: S.String}) {}
export class ScheduledActionType extends S.Class<ScheduledActionType>("ScheduledActionType")({ResizeCluster: S.optional(ResizeClusterMessage), PauseCluster: S.optional(PauseClusterMessage), ResumeCluster: S.optional(ResumeClusterMessage)}) {}
export class ModifyScheduledActionMessage extends S.Class<ModifyScheduledActionMessage>("ModifyScheduledActionMessage")({ScheduledActionName: S.String, TargetAction: S.optional(ScheduledActionType), Schedule: S.optional(S.String), IamRole: S.optional(S.String), ScheduledActionDescription: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Enable: S.optional(S.Boolean)}) {}
export class ModifySnapshotCopyRetentionPeriodMessage extends S.Class<ModifySnapshotCopyRetentionPeriodMessage>("ModifySnapshotCopyRetentionPeriodMessage")({ClusterIdentifier: S.String, RetentionPeriod: S.Number, Manual: S.optional(S.Boolean)}) {}
export class ModifySnapshotScheduleMessage extends S.Class<ModifySnapshotScheduleMessage>("ModifySnapshotScheduleMessage")({ScheduleIdentifier: S.String, ScheduleDefinitions: ScheduleDefinitionList}) {}
export class ModifyUsageLimitMessage extends S.Class<ModifyUsageLimitMessage>("ModifyUsageLimitMessage")({UsageLimitId: S.String, Amount: S.optional(S.Number), BreachAction: S.optional(S.String)}) {}
export class PurchaseReservedNodeOfferingMessage extends S.Class<PurchaseReservedNodeOfferingMessage>("PurchaseReservedNodeOfferingMessage")({ReservedNodeOfferingId: S.String, NodeCount: S.optional(S.Number)}) {}
export class PutResourcePolicyMessage extends S.Class<PutResourcePolicyMessage>("PutResourcePolicyMessage")({ResourceArn: S.String, Policy: S.String}) {}
export class RebootClusterMessage extends S.Class<RebootClusterMessage>("RebootClusterMessage")({ClusterIdentifier: S.String}) {}
export class ServerlessIdentifier extends S.Class<ServerlessIdentifier>("ServerlessIdentifier")({NamespaceIdentifier: S.String, WorkgroupIdentifier: S.String}) {}
export class ProvisionedIdentifier extends S.Class<ProvisionedIdentifier>("ProvisionedIdentifier")({ClusterIdentifier: S.String}) {}
export const NamespaceIdentifierUnion = S.Union(ServerlessIdentifier, ProvisionedIdentifier);
export class RegisterNamespaceInputMessage extends S.Class<RegisterNamespaceInputMessage>("RegisterNamespaceInputMessage")({NamespaceIdentifier: NamespaceIdentifierUnion, ConsumerIdentifiers: ConsumerIdentifierList}) {}
export class RejectDataShareMessage extends S.Class<RejectDataShareMessage>("RejectDataShareMessage")({DataShareArn: S.String}) {}
export class Parameter extends S.Class<Parameter>("Parameter")({ParameterName: S.optional(S.String), ParameterValue: S.optional(S.String), Description: S.optional(S.String), Source: S.optional(S.String), DataType: S.optional(S.String), AllowedValues: S.optional(S.String), ApplyType: S.optional(S.String), IsModifiable: S.optional(S.Boolean), MinimumEngineVersion: S.optional(S.String)}) {}
export const ParametersList = S.Array(Parameter);
export class ResetClusterParameterGroupMessage extends S.Class<ResetClusterParameterGroupMessage>("ResetClusterParameterGroupMessage")({ParameterGroupName: S.String, ResetAllParameters: S.optional(S.Boolean), Parameters: S.optional(ParametersList)}) {}
export class RestoreFromClusterSnapshotMessage extends S.Class<RestoreFromClusterSnapshotMessage>("RestoreFromClusterSnapshotMessage")({ClusterIdentifier: S.String, SnapshotIdentifier: S.optional(S.String), SnapshotArn: S.optional(S.String), SnapshotClusterIdentifier: S.optional(S.String), Port: S.optional(S.Number), AvailabilityZone: S.optional(S.String), AllowVersionUpgrade: S.optional(S.Boolean), ClusterSubnetGroupName: S.optional(S.String), PubliclyAccessible: S.optional(S.Boolean), OwnerAccount: S.optional(S.String), HsmClientCertificateIdentifier: S.optional(S.String), HsmConfigurationIdentifier: S.optional(S.String), ElasticIp: S.optional(S.String), ClusterParameterGroupName: S.optional(S.String), ClusterSecurityGroups: S.optional(ClusterSecurityGroupNameList), VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList), PreferredMaintenanceWindow: S.optional(S.String), AutomatedSnapshotRetentionPeriod: S.optional(S.Number), ManualSnapshotRetentionPeriod: S.optional(S.Number), KmsKeyId: S.optional(S.String), NodeType: S.optional(S.String), EnhancedVpcRouting: S.optional(S.Boolean), AdditionalInfo: S.optional(S.String), IamRoles: S.optional(IamRoleArnList), MaintenanceTrackName: S.optional(S.String), SnapshotScheduleIdentifier: S.optional(S.String), NumberOfNodes: S.optional(S.Number), AvailabilityZoneRelocation: S.optional(S.Boolean), AquaConfigurationStatus: S.optional(S.String), DefaultIamRoleArn: S.optional(S.String), ReservedNodeId: S.optional(S.String), TargetReservedNodeOfferingId: S.optional(S.String), Encrypted: S.optional(S.Boolean), ManageMasterPassword: S.optional(S.Boolean), MasterPasswordSecretKmsKeyId: S.optional(S.String), IpAddressType: S.optional(S.String), MultiAZ: S.optional(S.Boolean), CatalogName: S.optional(S.String), RedshiftIdcApplicationArn: S.optional(S.String)}) {}
export class RestoreTableFromClusterSnapshotMessage extends S.Class<RestoreTableFromClusterSnapshotMessage>("RestoreTableFromClusterSnapshotMessage")({ClusterIdentifier: S.String, SnapshotIdentifier: S.String, SourceDatabaseName: S.String, SourceSchemaName: S.optional(S.String), SourceTableName: S.String, TargetDatabaseName: S.optional(S.String), TargetSchemaName: S.optional(S.String), NewTableName: S.String, EnableCaseSensitiveIdentifier: S.optional(S.Boolean)}) {}
export class RevokeClusterSecurityGroupIngressMessage extends S.Class<RevokeClusterSecurityGroupIngressMessage>("RevokeClusterSecurityGroupIngressMessage")({ClusterSecurityGroupName: S.String, CIDRIP: S.optional(S.String), EC2SecurityGroupName: S.optional(S.String), EC2SecurityGroupOwnerId: S.optional(S.String)}) {}
export class RevokeEndpointAccessMessage extends S.Class<RevokeEndpointAccessMessage>("RevokeEndpointAccessMessage")({ClusterIdentifier: S.optional(S.String), Account: S.optional(S.String), VpcIds: S.optional(VpcIdentifierList), Force: S.optional(S.Boolean)}) {}
export class RevokeSnapshotAccessMessage extends S.Class<RevokeSnapshotAccessMessage>("RevokeSnapshotAccessMessage")({SnapshotIdentifier: S.optional(S.String), SnapshotArn: S.optional(S.String), SnapshotClusterIdentifier: S.optional(S.String), AccountWithRestoreAccess: S.String}) {}
export class RotateEncryptionKeyMessage extends S.Class<RotateEncryptionKeyMessage>("RotateEncryptionKeyMessage")({ClusterIdentifier: S.String}) {}
export class UpdatePartnerStatusInputMessage extends S.Class<UpdatePartnerStatusInputMessage>("UpdatePartnerStatusInputMessage")({AccountId: S.String, ClusterIdentifier: S.String, DatabaseName: S.String, PartnerName: S.String, Status: S.String, StatusMessage: S.optional(S.String)}) {}
export const DescribeIntegrationsFilterValueList = S.Array(S.String);
export const ValueStringList = S.Array(S.String);
export class SnapshotErrorMessage extends S.Class<SnapshotErrorMessage>("SnapshotErrorMessage")({SnapshotIdentifier: S.optional(S.String), SnapshotClusterIdentifier: S.optional(S.String), FailureCode: S.optional(S.String), FailureReason: S.optional(S.String)}) {}
export const BatchSnapshotOperationErrors = S.Array(SnapshotErrorMessage);
export const ImportTablesCompleted = S.Array(S.String);
export const ImportTablesInProgress = S.Array(S.String);
export const ImportTablesNotStarted = S.Array(S.String);
export const EncryptionContextMap = S.Record({key: S.String, value: S.String});
export const ScheduledSnapshotTimeList = S.Array(S.Date);
export class ClusterParameterGroup extends S.Class<ClusterParameterGroup>("ClusterParameterGroup")({ParameterGroupName: S.optional(S.String), ParameterGroupFamily: S.optional(S.String), Description: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const ParameterGroupList = S.Array(ClusterParameterGroup);
export class NetworkInterface extends S.Class<NetworkInterface>("NetworkInterface")({NetworkInterfaceId: S.optional(S.String), SubnetId: S.optional(S.String), PrivateIpAddress: S.optional(S.String), AvailabilityZone: S.optional(S.String), Ipv6Address: S.optional(S.String)}) {}
export const NetworkInterfaceList = S.Array(NetworkInterface);
export class VpcEndpoint extends S.Class<VpcEndpoint>("VpcEndpoint")({VpcEndpointId: S.optional(S.String), VpcId: S.optional(S.String), NetworkInterfaces: S.optional(NetworkInterfaceList)}) {}
export const VpcEndpointsList = S.Array(VpcEndpoint);
export class Endpoint extends S.Class<Endpoint>("Endpoint")({Address: S.optional(S.String), Port: S.optional(S.Number), VpcEndpoints: S.optional(VpcEndpointsList)}) {}
export class ClusterSecurityGroupMembership extends S.Class<ClusterSecurityGroupMembership>("ClusterSecurityGroupMembership")({ClusterSecurityGroupName: S.optional(S.String), Status: S.optional(S.String)}) {}
export const ClusterSecurityGroupMembershipList = S.Array(ClusterSecurityGroupMembership);
export class VpcSecurityGroupMembership extends S.Class<VpcSecurityGroupMembership>("VpcSecurityGroupMembership")({VpcSecurityGroupId: S.optional(S.String), Status: S.optional(S.String)}) {}
export const VpcSecurityGroupMembershipList = S.Array(VpcSecurityGroupMembership);
export class ClusterParameterStatus extends S.Class<ClusterParameterStatus>("ClusterParameterStatus")({ParameterName: S.optional(S.String), ParameterApplyStatus: S.optional(S.String), ParameterApplyErrorDescription: S.optional(S.String)}) {}
export const ClusterParameterStatusList = S.Array(ClusterParameterStatus);
export class ClusterParameterGroupStatus extends S.Class<ClusterParameterGroupStatus>("ClusterParameterGroupStatus")({ParameterGroupName: S.optional(S.String), ParameterApplyStatus: S.optional(S.String), ClusterParameterStatusList: S.optional(ClusterParameterStatusList)}) {}
export const ClusterParameterGroupStatusList = S.Array(ClusterParameterGroupStatus);
export class PendingModifiedValues extends S.Class<PendingModifiedValues>("PendingModifiedValues")({MasterUserPassword: S.optional(S.String), NodeType: S.optional(S.String), NumberOfNodes: S.optional(S.Number), ClusterType: S.optional(S.String), ClusterVersion: S.optional(S.String), AutomatedSnapshotRetentionPeriod: S.optional(S.Number), ClusterIdentifier: S.optional(S.String), PubliclyAccessible: S.optional(S.Boolean), EnhancedVpcRouting: S.optional(S.Boolean), MaintenanceTrackName: S.optional(S.String), EncryptionType: S.optional(S.String)}) {}
export class RestoreStatus extends S.Class<RestoreStatus>("RestoreStatus")({Status: S.optional(S.String), CurrentRestoreRateInMegaBytesPerSecond: S.optional(S.Number), SnapshotSizeInMegaBytes: S.optional(S.Number), ProgressInMegaBytes: S.optional(S.Number), ElapsedTimeInSeconds: S.optional(S.Number), EstimatedTimeToCompletionInSeconds: S.optional(S.Number)}) {}
export class DataTransferProgress extends S.Class<DataTransferProgress>("DataTransferProgress")({Status: S.optional(S.String), CurrentRateInMegaBytesPerSecond: S.optional(S.Number), TotalDataInMegaBytes: S.optional(S.Number), DataTransferredInMegaBytes: S.optional(S.Number), EstimatedTimeToCompletionInSeconds: S.optional(S.Number), ElapsedTimeInSeconds: S.optional(S.Number)}) {}
export class HsmStatus extends S.Class<HsmStatus>("HsmStatus")({HsmClientCertificateIdentifier: S.optional(S.String), HsmConfigurationIdentifier: S.optional(S.String), Status: S.optional(S.String)}) {}
export class ClusterSnapshotCopyStatus extends S.Class<ClusterSnapshotCopyStatus>("ClusterSnapshotCopyStatus")({DestinationRegion: S.optional(S.String), RetentionPeriod: S.optional(S.Number), ManualSnapshotRetentionPeriod: S.optional(S.Number), SnapshotCopyGrantName: S.optional(S.String)}) {}
export class ClusterNode extends S.Class<ClusterNode>("ClusterNode")({NodeRole: S.optional(S.String), PrivateIPAddress: S.optional(S.String), PublicIPAddress: S.optional(S.String)}) {}
export const ClusterNodesList = S.Array(ClusterNode);
export class ElasticIpStatus extends S.Class<ElasticIpStatus>("ElasticIpStatus")({ElasticIp: S.optional(S.String), Status: S.optional(S.String)}) {}
export class ClusterIamRole extends S.Class<ClusterIamRole>("ClusterIamRole")({IamRoleArn: S.optional(S.String), ApplyStatus: S.optional(S.String)}) {}
export const ClusterIamRoleList = S.Array(ClusterIamRole);
export const PendingActionsList = S.Array(S.String);
export class DeferredMaintenanceWindow extends S.Class<DeferredMaintenanceWindow>("DeferredMaintenanceWindow")({DeferMaintenanceIdentifier: S.optional(S.String), DeferMaintenanceStartTime: S.optional(S.Date), DeferMaintenanceEndTime: S.optional(S.Date)}) {}
export const DeferredMaintenanceWindowsList = S.Array(DeferredMaintenanceWindow);
export class ResizeInfo extends S.Class<ResizeInfo>("ResizeInfo")({ResizeType: S.optional(S.String), AllowCancelResize: S.optional(S.Boolean)}) {}
export class AquaConfiguration extends S.Class<AquaConfiguration>("AquaConfiguration")({AquaStatus: S.optional(S.String), AquaConfigurationStatus: S.optional(S.String)}) {}
export class ReservedNodeExchangeStatus extends S.Class<ReservedNodeExchangeStatus>("ReservedNodeExchangeStatus")({ReservedNodeExchangeRequestId: S.optional(S.String), Status: S.optional(S.String), RequestTime: S.optional(S.Date), SourceReservedNodeId: S.optional(S.String), SourceReservedNodeType: S.optional(S.String), SourceReservedNodeCount: S.optional(S.Number), TargetReservedNodeOfferingId: S.optional(S.String), TargetReservedNodeType: S.optional(S.String), TargetReservedNodeCount: S.optional(S.Number)}) {}
export class SecondaryClusterInfo extends S.Class<SecondaryClusterInfo>("SecondaryClusterInfo")({AvailabilityZone: S.optional(S.String), ClusterNodes: S.optional(ClusterNodesList)}) {}
export class Cluster extends S.Class<Cluster>("Cluster")({ClusterIdentifier: S.optional(S.String), NodeType: S.optional(S.String), ClusterStatus: S.optional(S.String), ClusterAvailabilityStatus: S.optional(S.String), ModifyStatus: S.optional(S.String), MasterUsername: S.optional(S.String), DBName: S.optional(S.String), Endpoint: S.optional(Endpoint), ClusterCreateTime: S.optional(S.Date), AutomatedSnapshotRetentionPeriod: S.optional(S.Number), ManualSnapshotRetentionPeriod: S.optional(S.Number), ClusterSecurityGroups: S.optional(ClusterSecurityGroupMembershipList), VpcSecurityGroups: S.optional(VpcSecurityGroupMembershipList), ClusterParameterGroups: S.optional(ClusterParameterGroupStatusList), ClusterSubnetGroupName: S.optional(S.String), VpcId: S.optional(S.String), AvailabilityZone: S.optional(S.String), PreferredMaintenanceWindow: S.optional(S.String), PendingModifiedValues: S.optional(PendingModifiedValues), ClusterVersion: S.optional(S.String), AllowVersionUpgrade: S.optional(S.Boolean), NumberOfNodes: S.optional(S.Number), PubliclyAccessible: S.optional(S.Boolean), Encrypted: S.optional(S.Boolean), RestoreStatus: S.optional(RestoreStatus), DataTransferProgress: S.optional(DataTransferProgress), HsmStatus: S.optional(HsmStatus), ClusterSnapshotCopyStatus: S.optional(ClusterSnapshotCopyStatus), ClusterPublicKey: S.optional(S.String), ClusterNodes: S.optional(ClusterNodesList), ElasticIpStatus: S.optional(ElasticIpStatus), ClusterRevisionNumber: S.optional(S.String), Tags: S.optional(TagList), KmsKeyId: S.optional(S.String), EnhancedVpcRouting: S.optional(S.Boolean), IamRoles: S.optional(ClusterIamRoleList), PendingActions: S.optional(PendingActionsList), MaintenanceTrackName: S.optional(S.String), ElasticResizeNumberOfNodeOptions: S.optional(S.String), DeferredMaintenanceWindows: S.optional(DeferredMaintenanceWindowsList), SnapshotScheduleIdentifier: S.optional(S.String), SnapshotScheduleState: S.optional(S.String), ExpectedNextSnapshotScheduleTime: S.optional(S.Date), ExpectedNextSnapshotScheduleTimeStatus: S.optional(S.String), NextMaintenanceWindowStartTime: S.optional(S.Date), ResizeInfo: S.optional(ResizeInfo), AvailabilityZoneRelocationStatus: S.optional(S.String), ClusterNamespaceArn: S.optional(S.String), TotalStorageCapacityInMegaBytes: S.optional(S.Number), AquaConfiguration: S.optional(AquaConfiguration), DefaultIamRoleArn: S.optional(S.String), ReservedNodeExchangeStatus: S.optional(ReservedNodeExchangeStatus), CustomDomainName: S.optional(S.String), CustomDomainCertificateArn: S.optional(S.String), CustomDomainCertificateExpiryDate: S.optional(S.Date), MasterPasswordSecretArn: S.optional(S.String), MasterPasswordSecretKmsKeyId: S.optional(S.String), IpAddressType: S.optional(S.String), MultiAZ: S.optional(S.String), MultiAZSecondary: S.optional(SecondaryClusterInfo), LakehouseRegistrationStatus: S.optional(S.String), CatalogArn: S.optional(S.String)}) {}
export const ClusterList = S.Array(Cluster);
export class EC2SecurityGroup extends S.Class<EC2SecurityGroup>("EC2SecurityGroup")({Status: S.optional(S.String), EC2SecurityGroupName: S.optional(S.String), EC2SecurityGroupOwnerId: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const EC2SecurityGroupList = S.Array(EC2SecurityGroup);
export class IPRange extends S.Class<IPRange>("IPRange")({Status: S.optional(S.String), CIDRIP: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const IPRangeList = S.Array(IPRange);
export class ClusterSecurityGroup extends S.Class<ClusterSecurityGroup>("ClusterSecurityGroup")({ClusterSecurityGroupName: S.optional(S.String), Description: S.optional(S.String), EC2SecurityGroups: S.optional(EC2SecurityGroupList), IPRanges: S.optional(IPRangeList), Tags: S.optional(TagList)}) {}
export const ClusterSecurityGroups = S.Array(ClusterSecurityGroup);
export class SnapshotSortingEntity extends S.Class<SnapshotSortingEntity>("SnapshotSortingEntity")({Attribute: S.String, SortOrder: S.optional(S.String)}) {}
export const SnapshotSortingEntityList = S.Array(SnapshotSortingEntity);
export class SupportedPlatform extends S.Class<SupportedPlatform>("SupportedPlatform")({Name: S.optional(S.String)}) {}
export const SupportedPlatformsList = S.Array(SupportedPlatform);
export class AvailabilityZone extends S.Class<AvailabilityZone>("AvailabilityZone")({Name: S.optional(S.String), SupportedPlatforms: S.optional(SupportedPlatformsList)}) {}
export class Subnet extends S.Class<Subnet>("Subnet")({SubnetIdentifier: S.optional(S.String), SubnetAvailabilityZone: S.optional(AvailabilityZone), SubnetStatus: S.optional(S.String)}) {}
export const SubnetList = S.Array(Subnet);
export class ClusterSubnetGroup extends S.Class<ClusterSubnetGroup>("ClusterSubnetGroup")({ClusterSubnetGroupName: S.optional(S.String), Description: S.optional(S.String), VpcId: S.optional(S.String), SubnetGroupStatus: S.optional(S.String), Subnets: S.optional(SubnetList), Tags: S.optional(TagList), SupportedClusterIpAddressTypes: S.optional(ValueStringList)}) {}
export const ClusterSubnetGroups = S.Array(ClusterSubnetGroup);
export class DataShareAssociation extends S.Class<DataShareAssociation>("DataShareAssociation")({ConsumerIdentifier: S.optional(S.String), Status: S.optional(S.String), ConsumerRegion: S.optional(S.String), CreatedDate: S.optional(S.Date), StatusChangeDate: S.optional(S.Date), ProducerAllowedWrites: S.optional(S.Boolean), ConsumerAcceptedWrites: S.optional(S.Boolean)}) {}
export const DataShareAssociationList = S.Array(DataShareAssociation);
export class DataShare extends S.Class<DataShare>("DataShare")({DataShareArn: S.optional(S.String), ProducerArn: S.optional(S.String), AllowPubliclyAccessibleConsumers: S.optional(S.Boolean), DataShareAssociations: S.optional(DataShareAssociationList), ManagedBy: S.optional(S.String), DataShareType: S.optional(S.String)}) {}
export const DataShareList = S.Array(DataShare);
export class EndpointAccess extends S.Class<EndpointAccess>("EndpointAccess")({ClusterIdentifier: S.optional(S.String), ResourceOwner: S.optional(S.String), SubnetGroupName: S.optional(S.String), EndpointStatus: S.optional(S.String), EndpointName: S.optional(S.String), EndpointCreateTime: S.optional(S.Date), Port: S.optional(S.Number), Address: S.optional(S.String), VpcSecurityGroups: S.optional(VpcSecurityGroupMembershipList), VpcEndpoint: S.optional(VpcEndpoint)}) {}
export const EndpointAccesses = S.Array(EndpointAccess);
export class EndpointAuthorization extends S.Class<EndpointAuthorization>("EndpointAuthorization")({Grantor: S.optional(S.String), Grantee: S.optional(S.String), ClusterIdentifier: S.optional(S.String), AuthorizeTime: S.optional(S.Date), ClusterStatus: S.optional(S.String), Status: S.optional(S.String), AllowedAllVPCs: S.optional(S.Boolean), AllowedVPCs: S.optional(VpcIdentifierList), EndpointCount: S.optional(S.Number)}) {}
export const EndpointAuthorizations = S.Array(EndpointAuthorization);
export class EventSubscription extends S.Class<EventSubscription>("EventSubscription")({CustomerAwsId: S.optional(S.String), CustSubscriptionId: S.optional(S.String), SnsTopicArn: S.optional(S.String), Status: S.optional(S.String), SubscriptionCreationTime: S.optional(S.Date), SourceType: S.optional(S.String), SourceIdsList: S.optional(SourceIdsList), EventCategoriesList: S.optional(EventCategoriesList), Severity: S.optional(S.String), Enabled: S.optional(S.Boolean), Tags: S.optional(TagList)}) {}
export const EventSubscriptionsList = S.Array(EventSubscription);
export class HsmClientCertificate extends S.Class<HsmClientCertificate>("HsmClientCertificate")({HsmClientCertificateIdentifier: S.optional(S.String), HsmClientCertificatePublicKey: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const HsmClientCertificateList = S.Array(HsmClientCertificate);
export class HsmConfiguration extends S.Class<HsmConfiguration>("HsmConfiguration")({HsmConfigurationIdentifier: S.optional(S.String), Description: S.optional(S.String), HsmIpAddress: S.optional(S.String), HsmPartitionName: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const HsmConfigurationList = S.Array(HsmConfiguration);
export class DescribeIntegrationsFilter extends S.Class<DescribeIntegrationsFilter>("DescribeIntegrationsFilter")({Name: S.String, Values: DescribeIntegrationsFilterValueList}) {}
export const DescribeIntegrationsFilterList = S.Array(DescribeIntegrationsFilter);
export class NodeConfigurationOptionsFilter extends S.Class<NodeConfigurationOptionsFilter>("NodeConfigurationOptionsFilter")({Name: S.optional(S.String), Operator: S.optional(S.String), Values: S.optional(ValueStringList)}) {}
export const NodeConfigurationOptionsFilterList = S.Array(NodeConfigurationOptionsFilter);
export class RecurringCharge extends S.Class<RecurringCharge>("RecurringCharge")({RecurringChargeAmount: S.optional(S.Number), RecurringChargeFrequency: S.optional(S.String)}) {}
export const RecurringChargeList = S.Array(RecurringCharge);
export class ReservedNode extends S.Class<ReservedNode>("ReservedNode")({ReservedNodeId: S.optional(S.String), ReservedNodeOfferingId: S.optional(S.String), NodeType: S.optional(S.String), StartTime: S.optional(S.Date), Duration: S.optional(S.Number), FixedPrice: S.optional(S.Number), UsagePrice: S.optional(S.Number), CurrencyCode: S.optional(S.String), NodeCount: S.optional(S.Number), State: S.optional(S.String), OfferingType: S.optional(S.String), RecurringCharges: S.optional(RecurringChargeList), ReservedNodeOfferingType: S.optional(S.String)}) {}
export const ReservedNodeList = S.Array(ReservedNode);
export class ScheduledActionFilter extends S.Class<ScheduledActionFilter>("ScheduledActionFilter")({Name: S.String, Values: ValueStringList}) {}
export const ScheduledActionFilterList = S.Array(ScheduledActionFilter);
export class SnapshotCopyGrant extends S.Class<SnapshotCopyGrant>("SnapshotCopyGrant")({SnapshotCopyGrantName: S.optional(S.String), KmsKeyId: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const SnapshotCopyGrantList = S.Array(SnapshotCopyGrant);
export class ClusterAssociatedToSchedule extends S.Class<ClusterAssociatedToSchedule>("ClusterAssociatedToSchedule")({ClusterIdentifier: S.optional(S.String), ScheduleAssociationState: S.optional(S.String)}) {}
export const AssociatedClusterList = S.Array(ClusterAssociatedToSchedule);
export class SnapshotSchedule extends S.Class<SnapshotSchedule>("SnapshotSchedule")({ScheduleDefinitions: S.optional(ScheduleDefinitionList), ScheduleIdentifier: S.optional(S.String), ScheduleDescription: S.optional(S.String), Tags: S.optional(TagList), NextInvocations: S.optional(ScheduledSnapshotTimeList), AssociatedClusterCount: S.optional(S.Number), AssociatedClusters: S.optional(AssociatedClusterList)}) {}
export const SnapshotScheduleList = S.Array(SnapshotSchedule);
export class UsageLimit extends S.Class<UsageLimit>("UsageLimit")({UsageLimitId: S.optional(S.String), ClusterIdentifier: S.optional(S.String), FeatureType: S.optional(S.String), LimitType: S.optional(S.String), Amount: S.optional(S.Number), Period: S.optional(S.String), BreachAction: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const UsageLimits = S.Array(UsageLimit);
export const ScheduledActionTimeList = S.Array(S.Date);
export class BatchModifyClusterSnapshotsOutputMessage extends S.Class<BatchModifyClusterSnapshotsOutputMessage>("BatchModifyClusterSnapshotsOutputMessage")({Resources: S.optional(SnapshotIdentifierList), Errors: S.optional(BatchSnapshotOperationErrors)}) {}
export class ResizeProgressMessage extends S.Class<ResizeProgressMessage>("ResizeProgressMessage")({TargetNodeType: S.optional(S.String), TargetNumberOfNodes: S.optional(S.Number), TargetClusterType: S.optional(S.String), Status: S.optional(S.String), ImportTablesCompleted: S.optional(ImportTablesCompleted), ImportTablesInProgress: S.optional(ImportTablesInProgress), ImportTablesNotStarted: S.optional(ImportTablesNotStarted), AvgResizeRateInMegaBytesPerSecond: S.optional(S.Number), TotalResizeDataInMegaBytes: S.optional(S.Number), ProgressInMegaBytes: S.optional(S.Number), ElapsedTimeInSeconds: S.optional(S.Number), EstimatedTimeToCompletionInSeconds: S.optional(S.Number), ResizeType: S.optional(S.String), Message: S.optional(S.String), TargetEncryptionType: S.optional(S.String), DataTransferProgressPercent: S.optional(S.Number)}) {}
export class AccountWithRestoreAccess extends S.Class<AccountWithRestoreAccess>("AccountWithRestoreAccess")({AccountId: S.optional(S.String), AccountAlias: S.optional(S.String)}) {}
export const AccountsWithRestoreAccessList = S.Array(AccountWithRestoreAccess);
export const RestorableNodeTypeList = S.Array(S.String);
export class Snapshot extends S.Class<Snapshot>("Snapshot")({SnapshotIdentifier: S.optional(S.String), ClusterIdentifier: S.optional(S.String), SnapshotCreateTime: S.optional(S.Date), Status: S.optional(S.String), Port: S.optional(S.Number), AvailabilityZone: S.optional(S.String), ClusterCreateTime: S.optional(S.Date), MasterUsername: S.optional(S.String), ClusterVersion: S.optional(S.String), EngineFullVersion: S.optional(S.String), SnapshotType: S.optional(S.String), NodeType: S.optional(S.String), NumberOfNodes: S.optional(S.Number), DBName: S.optional(S.String), VpcId: S.optional(S.String), Encrypted: S.optional(S.Boolean), KmsKeyId: S.optional(S.String), EncryptedWithHSM: S.optional(S.Boolean), AccountsWithRestoreAccess: S.optional(AccountsWithRestoreAccessList), OwnerAccount: S.optional(S.String), TotalBackupSizeInMegaBytes: S.optional(S.Number), ActualIncrementalBackupSizeInMegaBytes: S.optional(S.Number), BackupProgressInMegaBytes: S.optional(S.Number), CurrentBackupRateInMegaBytesPerSecond: S.optional(S.Number), EstimatedSecondsToCompletion: S.optional(S.Number), ElapsedTimeInSeconds: S.optional(S.Number), SourceRegion: S.optional(S.String), Tags: S.optional(TagList), RestorableNodeTypes: S.optional(RestorableNodeTypeList), EnhancedVpcRouting: S.optional(S.Boolean), MaintenanceTrackName: S.optional(S.String), ManualSnapshotRetentionPeriod: S.optional(S.Number), ManualSnapshotRemainingDays: S.optional(S.Number), SnapshotRetentionStartTime: S.optional(S.Date), MasterPasswordSecretArn: S.optional(S.String), MasterPasswordSecretKmsKeyId: S.optional(S.String), SnapshotArn: S.optional(S.String)}) {}
export class CopyClusterSnapshotResult extends S.Class<CopyClusterSnapshotResult>("CopyClusterSnapshotResult")({Snapshot: S.optional(Snapshot)}) {}
export class CreateAuthenticationProfileResult extends S.Class<CreateAuthenticationProfileResult>("CreateAuthenticationProfileResult")({AuthenticationProfileName: S.optional(S.String), AuthenticationProfileContent: S.optional(S.String)}) {}
export class CreateClusterMessage extends S.Class<CreateClusterMessage>("CreateClusterMessage")({DBName: S.optional(S.String), ClusterIdentifier: S.String, ClusterType: S.optional(S.String), NodeType: S.String, MasterUsername: S.String, MasterUserPassword: S.optional(S.String), ClusterSecurityGroups: S.optional(ClusterSecurityGroupNameList), VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList), ClusterSubnetGroupName: S.optional(S.String), AvailabilityZone: S.optional(S.String), PreferredMaintenanceWindow: S.optional(S.String), ClusterParameterGroupName: S.optional(S.String), AutomatedSnapshotRetentionPeriod: S.optional(S.Number), ManualSnapshotRetentionPeriod: S.optional(S.Number), Port: S.optional(S.Number), ClusterVersion: S.optional(S.String), AllowVersionUpgrade: S.optional(S.Boolean), NumberOfNodes: S.optional(S.Number), PubliclyAccessible: S.optional(S.Boolean), Encrypted: S.optional(S.Boolean), HsmClientCertificateIdentifier: S.optional(S.String), HsmConfigurationIdentifier: S.optional(S.String), ElasticIp: S.optional(S.String), Tags: S.optional(TagList), KmsKeyId: S.optional(S.String), EnhancedVpcRouting: S.optional(S.Boolean), AdditionalInfo: S.optional(S.String), IamRoles: S.optional(IamRoleArnList), MaintenanceTrackName: S.optional(S.String), SnapshotScheduleIdentifier: S.optional(S.String), AvailabilityZoneRelocation: S.optional(S.Boolean), AquaConfigurationStatus: S.optional(S.String), DefaultIamRoleArn: S.optional(S.String), LoadSampleData: S.optional(S.String), ManageMasterPassword: S.optional(S.Boolean), MasterPasswordSecretKmsKeyId: S.optional(S.String), IpAddressType: S.optional(S.String), MultiAZ: S.optional(S.Boolean), RedshiftIdcApplicationArn: S.optional(S.String), CatalogName: S.optional(S.String)}) {}
export class CreateClusterSecurityGroupResult extends S.Class<CreateClusterSecurityGroupResult>("CreateClusterSecurityGroupResult")({ClusterSecurityGroup: S.optional(ClusterSecurityGroup)}) {}
export class CreateClusterSnapshotResult extends S.Class<CreateClusterSnapshotResult>("CreateClusterSnapshotResult")({Snapshot: S.optional(Snapshot)}) {}
export class CreateCustomDomainAssociationResult extends S.Class<CreateCustomDomainAssociationResult>("CreateCustomDomainAssociationResult")({CustomDomainName: S.optional(S.String), CustomDomainCertificateArn: S.optional(S.String), ClusterIdentifier: S.optional(S.String), CustomDomainCertExpiryTime: S.optional(S.String)}) {}
export class CreateIntegrationMessage extends S.Class<CreateIntegrationMessage>("CreateIntegrationMessage")({SourceArn: S.String, TargetArn: S.String, IntegrationName: S.String, KMSKeyId: S.optional(S.String), TagList: S.optional(TagList), AdditionalEncryptionContext: S.optional(EncryptionContextMap), Description: S.optional(S.String)}) {}
export class CreateScheduledActionMessage extends S.Class<CreateScheduledActionMessage>("CreateScheduledActionMessage")({ScheduledActionName: S.String, TargetAction: ScheduledActionType, Schedule: S.String, IamRole: S.String, ScheduledActionDescription: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Enable: S.optional(S.Boolean)}) {}
export class DeleteAuthenticationProfileResult extends S.Class<DeleteAuthenticationProfileResult>("DeleteAuthenticationProfileResult")({AuthenticationProfileName: S.optional(S.String)}) {}
export class DeleteClusterSnapshotResult extends S.Class<DeleteClusterSnapshotResult>("DeleteClusterSnapshotResult")({Snapshot: S.optional(Snapshot)}) {}
export class ClusterParameterGroupsMessage extends S.Class<ClusterParameterGroupsMessage>("ClusterParameterGroupsMessage")({Marker: S.optional(S.String), ParameterGroups: S.optional(ParameterGroupList)}) {}
export class ClusterParameterGroupDetails extends S.Class<ClusterParameterGroupDetails>("ClusterParameterGroupDetails")({Parameters: S.optional(ParametersList), Marker: S.optional(S.String)}) {}
export class ClustersMessage extends S.Class<ClustersMessage>("ClustersMessage")({Marker: S.optional(S.String), Clusters: S.optional(ClusterList)}) {}
export class ClusterSecurityGroupMessage extends S.Class<ClusterSecurityGroupMessage>("ClusterSecurityGroupMessage")({Marker: S.optional(S.String), ClusterSecurityGroups: S.optional(ClusterSecurityGroups)}) {}
export class DescribeClusterSnapshotsMessage extends S.Class<DescribeClusterSnapshotsMessage>("DescribeClusterSnapshotsMessage")({ClusterIdentifier: S.optional(S.String), SnapshotIdentifier: S.optional(S.String), SnapshotArn: S.optional(S.String), SnapshotType: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), OwnerAccount: S.optional(S.String), TagKeys: S.optional(TagKeyList), TagValues: S.optional(TagValueList), ClusterExists: S.optional(S.Boolean), SortingEntities: S.optional(SnapshotSortingEntityList)}) {}
export class ClusterSubnetGroupMessage extends S.Class<ClusterSubnetGroupMessage>("ClusterSubnetGroupMessage")({Marker: S.optional(S.String), ClusterSubnetGroups: S.optional(ClusterSubnetGroups)}) {}
export class DescribeDataSharesResult extends S.Class<DescribeDataSharesResult>("DescribeDataSharesResult")({DataShares: S.optional(DataShareList), Marker: S.optional(S.String)}) {}
export class DescribeDataSharesForConsumerResult extends S.Class<DescribeDataSharesForConsumerResult>("DescribeDataSharesForConsumerResult")({DataShares: S.optional(DataShareList), Marker: S.optional(S.String)}) {}
export class DescribeDataSharesForProducerResult extends S.Class<DescribeDataSharesForProducerResult>("DescribeDataSharesForProducerResult")({DataShares: S.optional(DataShareList), Marker: S.optional(S.String)}) {}
export class EndpointAccessList extends S.Class<EndpointAccessList>("EndpointAccessList")({EndpointAccessList: S.optional(EndpointAccesses), Marker: S.optional(S.String)}) {}
export class EndpointAuthorizationList extends S.Class<EndpointAuthorizationList>("EndpointAuthorizationList")({EndpointAuthorizationList: S.optional(EndpointAuthorizations), Marker: S.optional(S.String)}) {}
export class EventSubscriptionsMessage extends S.Class<EventSubscriptionsMessage>("EventSubscriptionsMessage")({Marker: S.optional(S.String), EventSubscriptionsList: S.optional(EventSubscriptionsList)}) {}
export class HsmClientCertificateMessage extends S.Class<HsmClientCertificateMessage>("HsmClientCertificateMessage")({Marker: S.optional(S.String), HsmClientCertificates: S.optional(HsmClientCertificateList)}) {}
export class HsmConfigurationMessage extends S.Class<HsmConfigurationMessage>("HsmConfigurationMessage")({Marker: S.optional(S.String), HsmConfigurations: S.optional(HsmConfigurationList)}) {}
export class DescribeIntegrationsMessage extends S.Class<DescribeIntegrationsMessage>("DescribeIntegrationsMessage")({IntegrationArn: S.optional(S.String), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), Filters: S.optional(DescribeIntegrationsFilterList)}) {}
export class LoggingStatus extends S.Class<LoggingStatus>("LoggingStatus")({LoggingEnabled: S.optional(S.Boolean), BucketName: S.optional(S.String), S3KeyPrefix: S.optional(S.String), LastSuccessfulDeliveryTime: S.optional(S.Date), LastFailureTime: S.optional(S.Date), LastFailureMessage: S.optional(S.String), LogDestinationType: S.optional(S.String), LogExports: S.optional(LogTypeList)}) {}
export class DescribeNodeConfigurationOptionsMessage extends S.Class<DescribeNodeConfigurationOptionsMessage>("DescribeNodeConfigurationOptionsMessage")({ActionType: S.String, ClusterIdentifier: S.optional(S.String), SnapshotIdentifier: S.optional(S.String), SnapshotArn: S.optional(S.String), OwnerAccount: S.optional(S.String), Filters: S.optional(NodeConfigurationOptionsFilterList), Marker: S.optional(S.String), MaxRecords: S.optional(S.Number)}) {}
export class ReservedNodesMessage extends S.Class<ReservedNodesMessage>("ReservedNodesMessage")({Marker: S.optional(S.String), ReservedNodes: S.optional(ReservedNodeList)}) {}
export class DescribeScheduledActionsMessage extends S.Class<DescribeScheduledActionsMessage>("DescribeScheduledActionsMessage")({ScheduledActionName: S.optional(S.String), TargetActionType: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Active: S.optional(S.Boolean), Filters: S.optional(ScheduledActionFilterList), Marker: S.optional(S.String), MaxRecords: S.optional(S.Number)}) {}
export class SnapshotCopyGrantMessage extends S.Class<SnapshotCopyGrantMessage>("SnapshotCopyGrantMessage")({Marker: S.optional(S.String), SnapshotCopyGrants: S.optional(SnapshotCopyGrantList)}) {}
export class DescribeSnapshotSchedulesOutputMessage extends S.Class<DescribeSnapshotSchedulesOutputMessage>("DescribeSnapshotSchedulesOutputMessage")({SnapshotSchedules: S.optional(SnapshotScheduleList), Marker: S.optional(S.String)}) {}
export class UsageLimitList extends S.Class<UsageLimitList>("UsageLimitList")({UsageLimits: S.optional(UsageLimits), Marker: S.optional(S.String)}) {}
export class DisableSnapshotCopyResult extends S.Class<DisableSnapshotCopyResult>("DisableSnapshotCopyResult")({Cluster: S.optional(Cluster)}) {}
export class EnableSnapshotCopyResult extends S.Class<EnableSnapshotCopyResult>("EnableSnapshotCopyResult")({Cluster: S.optional(Cluster)}) {}
export class FailoverPrimaryComputeResult extends S.Class<FailoverPrimaryComputeResult>("FailoverPrimaryComputeResult")({Cluster: S.optional(Cluster)}) {}
export class ClusterCredentials extends S.Class<ClusterCredentials>("ClusterCredentials")({DbUser: S.optional(S.String), DbPassword: S.optional(S.String), Expiration: S.optional(S.Date)}) {}
export class ClusterExtendedCredentials extends S.Class<ClusterExtendedCredentials>("ClusterExtendedCredentials")({DbUser: S.optional(S.String), DbPassword: S.optional(S.String), Expiration: S.optional(S.Date), NextRefreshTime: S.optional(S.Date)}) {}
export class GetIdentityCenterAuthTokenResponse extends S.Class<GetIdentityCenterAuthTokenResponse>("GetIdentityCenterAuthTokenResponse")({Token: S.optional(S.String), ExpirationTime: S.optional(S.Date)}) {}
export class ReservedNodeOffering extends S.Class<ReservedNodeOffering>("ReservedNodeOffering")({ReservedNodeOfferingId: S.optional(S.String), NodeType: S.optional(S.String), Duration: S.optional(S.Number), FixedPrice: S.optional(S.Number), UsagePrice: S.optional(S.Number), CurrencyCode: S.optional(S.String), OfferingType: S.optional(S.String), RecurringCharges: S.optional(RecurringChargeList), ReservedNodeOfferingType: S.optional(S.String)}) {}
export const ReservedNodeOfferingList = S.Array(ReservedNodeOffering);
export class GetReservedNodeExchangeOfferingsOutputMessage extends S.Class<GetReservedNodeExchangeOfferingsOutputMessage>("GetReservedNodeExchangeOfferingsOutputMessage")({Marker: S.optional(S.String), ReservedNodeOfferings: S.optional(ReservedNodeOfferingList)}) {}
export class ModifyAuthenticationProfileResult extends S.Class<ModifyAuthenticationProfileResult>("ModifyAuthenticationProfileResult")({AuthenticationProfileName: S.optional(S.String), AuthenticationProfileContent: S.optional(S.String)}) {}
export class ModifyClusterResult extends S.Class<ModifyClusterResult>("ModifyClusterResult")({Cluster: S.optional(Cluster)}) {}
export class ModifyClusterDbRevisionResult extends S.Class<ModifyClusterDbRevisionResult>("ModifyClusterDbRevisionResult")({Cluster: S.optional(Cluster)}) {}
export class ModifyClusterIamRolesResult extends S.Class<ModifyClusterIamRolesResult>("ModifyClusterIamRolesResult")({Cluster: S.optional(Cluster)}) {}
export class ModifyClusterMaintenanceResult extends S.Class<ModifyClusterMaintenanceResult>("ModifyClusterMaintenanceResult")({Cluster: S.optional(Cluster)}) {}
export class ModifyClusterParameterGroupMessage extends S.Class<ModifyClusterParameterGroupMessage>("ModifyClusterParameterGroupMessage")({ParameterGroupName: S.String, Parameters: ParametersList}) {}
export class ModifyClusterSnapshotResult extends S.Class<ModifyClusterSnapshotResult>("ModifyClusterSnapshotResult")({Snapshot: S.optional(Snapshot)}) {}
export class ModifyClusterSubnetGroupResult extends S.Class<ModifyClusterSubnetGroupResult>("ModifyClusterSubnetGroupResult")({ClusterSubnetGroup: S.optional(ClusterSubnetGroup)}) {}
export class ModifyCustomDomainAssociationResult extends S.Class<ModifyCustomDomainAssociationResult>("ModifyCustomDomainAssociationResult")({CustomDomainName: S.optional(S.String), CustomDomainCertificateArn: S.optional(S.String), ClusterIdentifier: S.optional(S.String), CustomDomainCertExpiryTime: S.optional(S.String)}) {}
export class ModifyEventSubscriptionResult extends S.Class<ModifyEventSubscriptionResult>("ModifyEventSubscriptionResult")({EventSubscription: S.optional(EventSubscription)}) {}
export class LakehouseConfiguration extends S.Class<LakehouseConfiguration>("LakehouseConfiguration")({ClusterIdentifier: S.optional(S.String), LakehouseIdcApplicationArn: S.optional(S.String), LakehouseRegistrationStatus: S.optional(S.String), CatalogArn: S.optional(S.String)}) {}
export class RedshiftIdcApplication extends S.Class<RedshiftIdcApplication>("RedshiftIdcApplication")({IdcInstanceArn: S.optional(S.String), RedshiftIdcApplicationName: S.optional(S.String), RedshiftIdcApplicationArn: S.optional(S.String), IdentityNamespace: S.optional(S.String), IdcDisplayName: S.optional(S.String), IamRoleArn: S.optional(S.String), IdcManagedApplicationArn: S.optional(S.String), IdcOnboardStatus: S.optional(S.String), AuthorizedTokenIssuerList: S.optional(AuthorizedTokenIssuerList), ServiceIntegrations: S.optional(ServiceIntegrationList), ApplicationType: S.optional(S.String), Tags: S.optional(TagList), SsoTagKeys: S.optional(TagKeyList)}) {}
export class ModifyRedshiftIdcApplicationResult extends S.Class<ModifyRedshiftIdcApplicationResult>("ModifyRedshiftIdcApplicationResult")({RedshiftIdcApplication: S.optional(RedshiftIdcApplication)}) {}
export class ScheduledAction extends S.Class<ScheduledAction>("ScheduledAction")({ScheduledActionName: S.optional(S.String), TargetAction: S.optional(ScheduledActionType), Schedule: S.optional(S.String), IamRole: S.optional(S.String), ScheduledActionDescription: S.optional(S.String), State: S.optional(S.String), NextInvocations: S.optional(ScheduledActionTimeList), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date)}) {}
export class ModifySnapshotCopyRetentionPeriodResult extends S.Class<ModifySnapshotCopyRetentionPeriodResult>("ModifySnapshotCopyRetentionPeriodResult")({Cluster: S.optional(Cluster)}) {}
export class PauseClusterResult extends S.Class<PauseClusterResult>("PauseClusterResult")({Cluster: S.optional(Cluster)}) {}
export class PurchaseReservedNodeOfferingResult extends S.Class<PurchaseReservedNodeOfferingResult>("PurchaseReservedNodeOfferingResult")({ReservedNode: S.optional(ReservedNode)}) {}
export class ResourcePolicy extends S.Class<ResourcePolicy>("ResourcePolicy")({ResourceArn: S.optional(S.String), Policy: S.optional(S.String)}) {}
export class PutResourcePolicyResult extends S.Class<PutResourcePolicyResult>("PutResourcePolicyResult")({ResourcePolicy: S.optional(ResourcePolicy)}) {}
export class RebootClusterResult extends S.Class<RebootClusterResult>("RebootClusterResult")({Cluster: S.optional(Cluster)}) {}
export class RegisterNamespaceOutputMessage extends S.Class<RegisterNamespaceOutputMessage>("RegisterNamespaceOutputMessage")({Status: S.optional(S.String)}) {}
export class ClusterParameterGroupNameMessage extends S.Class<ClusterParameterGroupNameMessage>("ClusterParameterGroupNameMessage")({ParameterGroupName: S.optional(S.String), ParameterGroupStatus: S.optional(S.String)}) {}
export class ResizeClusterResult extends S.Class<ResizeClusterResult>("ResizeClusterResult")({Cluster: S.optional(Cluster)}) {}
export class RestoreFromClusterSnapshotResult extends S.Class<RestoreFromClusterSnapshotResult>("RestoreFromClusterSnapshotResult")({Cluster: S.optional(Cluster)}) {}
export class TableRestoreStatus extends S.Class<TableRestoreStatus>("TableRestoreStatus")({TableRestoreRequestId: S.optional(S.String), Status: S.optional(S.String), Message: S.optional(S.String), RequestTime: S.optional(S.Date), ProgressInMegaBytes: S.optional(S.Number), TotalDataInMegaBytes: S.optional(S.Number), ClusterIdentifier: S.optional(S.String), SnapshotIdentifier: S.optional(S.String), SourceDatabaseName: S.optional(S.String), SourceSchemaName: S.optional(S.String), SourceTableName: S.optional(S.String), TargetDatabaseName: S.optional(S.String), TargetSchemaName: S.optional(S.String), NewTableName: S.optional(S.String)}) {}
export class RestoreTableFromClusterSnapshotResult extends S.Class<RestoreTableFromClusterSnapshotResult>("RestoreTableFromClusterSnapshotResult")({TableRestoreStatus: S.optional(TableRestoreStatus)}) {}
export class ResumeClusterResult extends S.Class<ResumeClusterResult>("ResumeClusterResult")({Cluster: S.optional(Cluster)}) {}
export class RevokeClusterSecurityGroupIngressResult extends S.Class<RevokeClusterSecurityGroupIngressResult>("RevokeClusterSecurityGroupIngressResult")({ClusterSecurityGroup: S.optional(ClusterSecurityGroup)}) {}
export class RevokeSnapshotAccessResult extends S.Class<RevokeSnapshotAccessResult>("RevokeSnapshotAccessResult")({Snapshot: S.optional(Snapshot)}) {}
export class RotateEncryptionKeyResult extends S.Class<RotateEncryptionKeyResult>("RotateEncryptionKeyResult")({Cluster: S.optional(Cluster)}) {}
export const BatchSnapshotOperationErrorList = S.Array(SnapshotErrorMessage);
export class IntegrationError extends S.Class<IntegrationError>("IntegrationError")({ErrorCode: S.String, ErrorMessage: S.optional(S.String)}) {}
export const IntegrationErrorList = S.Array(IntegrationError);
export class AuthenticationProfile extends S.Class<AuthenticationProfile>("AuthenticationProfile")({AuthenticationProfileName: S.optional(S.String), AuthenticationProfileContent: S.optional(S.String)}) {}
export const AuthenticationProfileList = S.Array(AuthenticationProfile);
export const SnapshotList = S.Array(Snapshot);
export class ClusterVersion extends S.Class<ClusterVersion>("ClusterVersion")({ClusterVersion: S.optional(S.String), ClusterParameterGroupFamily: S.optional(S.String), Description: S.optional(S.String)}) {}
export const ClusterVersionList = S.Array(ClusterVersion);
export class DefaultClusterParameters extends S.Class<DefaultClusterParameters>("DefaultClusterParameters")({ParameterGroupFamily: S.optional(S.String), Marker: S.optional(S.String), Parameters: S.optional(ParametersList)}) {}
export class Event extends S.Class<Event>("Event")({SourceIdentifier: S.optional(S.String), SourceType: S.optional(S.String), Message: S.optional(S.String), EventCategories: S.optional(EventCategoriesList), Severity: S.optional(S.String), Date: S.optional(S.Date), EventId: S.optional(S.String)}) {}
export const EventList = S.Array(Event);
export class InboundIntegration extends S.Class<InboundIntegration>("InboundIntegration")({IntegrationArn: S.optional(S.String), SourceArn: S.optional(S.String), TargetArn: S.optional(S.String), Status: S.optional(S.String), Errors: S.optional(IntegrationErrorList), CreateTime: S.optional(S.Date)}) {}
export const InboundIntegrationList = S.Array(InboundIntegration);
export class Integration extends S.Class<Integration>("Integration")({IntegrationArn: S.optional(S.String), IntegrationName: S.optional(S.String), SourceArn: S.optional(S.String), TargetArn: S.optional(S.String), Status: S.optional(S.String), Errors: S.optional(IntegrationErrorList), CreateTime: S.optional(S.Date), Description: S.optional(S.String), KMSKeyId: S.optional(S.String), AdditionalEncryptionContext: S.optional(EncryptionContextMap), Tags: S.optional(TagList)}) {}
export const IntegrationList = S.Array(Integration);
export class PartnerIntegrationInfo extends S.Class<PartnerIntegrationInfo>("PartnerIntegrationInfo")({DatabaseName: S.optional(S.String), PartnerName: S.optional(S.String), Status: S.optional(S.String), StatusMessage: S.optional(S.String), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date)}) {}
export const PartnerIntegrationInfoList = S.Array(PartnerIntegrationInfo);
export const RedshiftIdcApplicationList = S.Array(RedshiftIdcApplication);
export const ReservedNodeExchangeStatusList = S.Array(ReservedNodeExchangeStatus);
export const ScheduledActionList = S.Array(ScheduledAction);
export const TableRestoreStatusList = S.Array(TableRestoreStatus);
export class TaggedResource extends S.Class<TaggedResource>("TaggedResource")({Tag: S.optional(Tag), ResourceName: S.optional(S.String), ResourceType: S.optional(S.String)}) {}
export const TaggedResourceList = S.Array(TaggedResource);
export class ReservedNodeConfigurationOption extends S.Class<ReservedNodeConfigurationOption>("ReservedNodeConfigurationOption")({SourceReservedNode: S.optional(ReservedNode), TargetReservedNodeCount: S.optional(S.Number), TargetReservedNodeOffering: S.optional(ReservedNodeOffering)}) {}
export const ReservedNodeConfigurationOptionList = S.Array(ReservedNodeConfigurationOption);
export class BatchDeleteClusterSnapshotsResult extends S.Class<BatchDeleteClusterSnapshotsResult>("BatchDeleteClusterSnapshotsResult")({Resources: S.optional(SnapshotIdentifierList), Errors: S.optional(BatchSnapshotOperationErrorList)}) {}
export class CreateClusterResult extends S.Class<CreateClusterResult>("CreateClusterResult")({Cluster: S.optional(Cluster)}) {}
export class CreateClusterParameterGroupResult extends S.Class<CreateClusterParameterGroupResult>("CreateClusterParameterGroupResult")({ClusterParameterGroup: S.optional(ClusterParameterGroup)}) {}
export class CreateEventSubscriptionResult extends S.Class<CreateEventSubscriptionResult>("CreateEventSubscriptionResult")({EventSubscription: S.optional(EventSubscription)}) {}
export class CreateHsmClientCertificateResult extends S.Class<CreateHsmClientCertificateResult>("CreateHsmClientCertificateResult")({HsmClientCertificate: S.optional(HsmClientCertificate)}) {}
export class CreateHsmConfigurationResult extends S.Class<CreateHsmConfigurationResult>("CreateHsmConfigurationResult")({HsmConfiguration: S.optional(HsmConfiguration)}) {}
export class CreateSnapshotCopyGrantResult extends S.Class<CreateSnapshotCopyGrantResult>("CreateSnapshotCopyGrantResult")({SnapshotCopyGrant: S.optional(SnapshotCopyGrant)}) {}
export class DeregisterNamespaceInputMessage extends S.Class<DeregisterNamespaceInputMessage>("DeregisterNamespaceInputMessage")({NamespaceIdentifier: NamespaceIdentifierUnion, ConsumerIdentifiers: ConsumerIdentifierList}) {}
export class DescribeAuthenticationProfilesResult extends S.Class<DescribeAuthenticationProfilesResult>("DescribeAuthenticationProfilesResult")({AuthenticationProfiles: S.optional(AuthenticationProfileList)}) {}
export class SnapshotMessage extends S.Class<SnapshotMessage>("SnapshotMessage")({Marker: S.optional(S.String), Snapshots: S.optional(SnapshotList)}) {}
export class ClusterVersionsMessage extends S.Class<ClusterVersionsMessage>("ClusterVersionsMessage")({Marker: S.optional(S.String), ClusterVersions: S.optional(ClusterVersionList)}) {}
export class DescribeDefaultClusterParametersResult extends S.Class<DescribeDefaultClusterParametersResult>("DescribeDefaultClusterParametersResult")({DefaultClusterParameters: S.optional(DefaultClusterParameters)}) {}
export class EventsMessage extends S.Class<EventsMessage>("EventsMessage")({Marker: S.optional(S.String), Events: S.optional(EventList)}) {}
export class InboundIntegrationsMessage extends S.Class<InboundIntegrationsMessage>("InboundIntegrationsMessage")({Marker: S.optional(S.String), InboundIntegrations: S.optional(InboundIntegrationList)}) {}
export class IntegrationsMessage extends S.Class<IntegrationsMessage>("IntegrationsMessage")({Marker: S.optional(S.String), Integrations: S.optional(IntegrationList)}) {}
export class DescribePartnersOutputMessage extends S.Class<DescribePartnersOutputMessage>("DescribePartnersOutputMessage")({PartnerIntegrationInfoList: S.optional(PartnerIntegrationInfoList)}) {}
export class DescribeRedshiftIdcApplicationsResult extends S.Class<DescribeRedshiftIdcApplicationsResult>("DescribeRedshiftIdcApplicationsResult")({RedshiftIdcApplications: S.optional(RedshiftIdcApplicationList), Marker: S.optional(S.String)}) {}
export class DescribeReservedNodeExchangeStatusOutputMessage extends S.Class<DescribeReservedNodeExchangeStatusOutputMessage>("DescribeReservedNodeExchangeStatusOutputMessage")({ReservedNodeExchangeStatusDetails: S.optional(ReservedNodeExchangeStatusList), Marker: S.optional(S.String)}) {}
export class ReservedNodeOfferingsMessage extends S.Class<ReservedNodeOfferingsMessage>("ReservedNodeOfferingsMessage")({Marker: S.optional(S.String), ReservedNodeOfferings: S.optional(ReservedNodeOfferingList)}) {}
export class ScheduledActionsMessage extends S.Class<ScheduledActionsMessage>("ScheduledActionsMessage")({Marker: S.optional(S.String), ScheduledActions: S.optional(ScheduledActionList)}) {}
export class TableRestoreStatusMessage extends S.Class<TableRestoreStatusMessage>("TableRestoreStatusMessage")({TableRestoreStatusDetails: S.optional(TableRestoreStatusList), Marker: S.optional(S.String)}) {}
export class TaggedResourceListMessage extends S.Class<TaggedResourceListMessage>("TaggedResourceListMessage")({TaggedResources: S.optional(TaggedResourceList), Marker: S.optional(S.String)}) {}
export class GetReservedNodeExchangeConfigurationOptionsOutputMessage extends S.Class<GetReservedNodeExchangeConfigurationOptionsOutputMessage>("GetReservedNodeExchangeConfigurationOptionsOutputMessage")({Marker: S.optional(S.String), ReservedNodeConfigurationOptionList: S.optional(ReservedNodeConfigurationOptionList)}) {}
export class GetResourcePolicyResult extends S.Class<GetResourcePolicyResult>("GetResourcePolicyResult")({ResourcePolicy: S.optional(ResourcePolicy)}) {}
export class ModifyAquaOutputMessage extends S.Class<ModifyAquaOutputMessage>("ModifyAquaOutputMessage")({AquaConfiguration: S.optional(AquaConfiguration)}) {}
export class AttributeValueTarget extends S.Class<AttributeValueTarget>("AttributeValueTarget")({AttributeValue: S.optional(S.String)}) {}
export const AttributeValueList = S.Array(AttributeValueTarget);
export class RevisionTarget extends S.Class<RevisionTarget>("RevisionTarget")({DatabaseRevision: S.optional(S.String), Description: S.optional(S.String), DatabaseRevisionReleaseDate: S.optional(S.Date)}) {}
export const RevisionTargetsList = S.Array(RevisionTarget);
export class CertificateAssociation extends S.Class<CertificateAssociation>("CertificateAssociation")({CustomDomainName: S.optional(S.String), ClusterIdentifier: S.optional(S.String)}) {}
export const CertificateAssociationList = S.Array(CertificateAssociation);
export class EventInfoMap extends S.Class<EventInfoMap>("EventInfoMap")({EventId: S.optional(S.String), EventCategories: S.optional(EventCategoriesList), EventDescription: S.optional(S.String), Severity: S.optional(S.String)}) {}
export const EventInfoMapList = S.Array(EventInfoMap);
export class RecommendedAction extends S.Class<RecommendedAction>("RecommendedAction")({Text: S.optional(S.String), Database: S.optional(S.String), Command: S.optional(S.String), Type: S.optional(S.String)}) {}
export const RecommendedActionList = S.Array(RecommendedAction);
export class ReferenceLink extends S.Class<ReferenceLink>("ReferenceLink")({Text: S.optional(S.String), Link: S.optional(S.String)}) {}
export const ReferenceLinkList = S.Array(ReferenceLink);
export class AccountAttribute extends S.Class<AccountAttribute>("AccountAttribute")({AttributeName: S.optional(S.String), AttributeValues: S.optional(AttributeValueList)}) {}
export const AttributeList = S.Array(AccountAttribute);
export class ClusterDbRevision extends S.Class<ClusterDbRevision>("ClusterDbRevision")({ClusterIdentifier: S.optional(S.String), CurrentDatabaseRevision: S.optional(S.String), DatabaseRevisionReleaseDate: S.optional(S.Date), RevisionTargets: S.optional(RevisionTargetsList)}) {}
export const ClusterDbRevisionsList = S.Array(ClusterDbRevision);
export class Association extends S.Class<Association>("Association")({CustomDomainCertificateArn: S.optional(S.String), CustomDomainCertificateExpiryDate: S.optional(S.Date), CertificateAssociations: S.optional(CertificateAssociationList)}) {}
export const AssociationList = S.Array(Association);
export class EventCategoriesMap extends S.Class<EventCategoriesMap>("EventCategoriesMap")({SourceType: S.optional(S.String), Events: S.optional(EventInfoMapList)}) {}
export const EventCategoriesMapList = S.Array(EventCategoriesMap);
export class NodeConfigurationOption extends S.Class<NodeConfigurationOption>("NodeConfigurationOption")({NodeType: S.optional(S.String), NumberOfNodes: S.optional(S.Number), EstimatedDiskUtilizationPercent: S.optional(S.Number), Mode: S.optional(S.String)}) {}
export const NodeConfigurationOptionList = S.Array(NodeConfigurationOption);
export class Recommendation extends S.Class<Recommendation>("Recommendation")({Id: S.optional(S.String), ClusterIdentifier: S.optional(S.String), NamespaceArn: S.optional(S.String), CreatedAt: S.optional(S.Date), RecommendationType: S.optional(S.String), Title: S.optional(S.String), Description: S.optional(S.String), Observation: S.optional(S.String), ImpactRanking: S.optional(S.String), RecommendationText: S.optional(S.String), RecommendedActions: S.optional(RecommendedActionList), ReferenceLinks: S.optional(ReferenceLinkList)}) {}
export const RecommendationList = S.Array(Recommendation);
export class SupportedOperation extends S.Class<SupportedOperation>("SupportedOperation")({OperationName: S.optional(S.String)}) {}
export const SupportedOperationList = S.Array(SupportedOperation);
export class AcceptReservedNodeExchangeOutputMessage extends S.Class<AcceptReservedNodeExchangeOutputMessage>("AcceptReservedNodeExchangeOutputMessage")({ExchangedReservedNode: S.optional(ReservedNode)}) {}
export class AuthorizeClusterSecurityGroupIngressResult extends S.Class<AuthorizeClusterSecurityGroupIngressResult>("AuthorizeClusterSecurityGroupIngressResult")({ClusterSecurityGroup: S.optional(ClusterSecurityGroup)}) {}
export class AuthorizeSnapshotAccessResult extends S.Class<AuthorizeSnapshotAccessResult>("AuthorizeSnapshotAccessResult")({Snapshot: S.optional(Snapshot)}) {}
export class CreateClusterSubnetGroupResult extends S.Class<CreateClusterSubnetGroupResult>("CreateClusterSubnetGroupResult")({ClusterSubnetGroup: S.optional(ClusterSubnetGroup)}) {}
export class CreateRedshiftIdcApplicationMessage extends S.Class<CreateRedshiftIdcApplicationMessage>("CreateRedshiftIdcApplicationMessage")({IdcInstanceArn: S.String, RedshiftIdcApplicationName: S.String, IdentityNamespace: S.optional(S.String), IdcDisplayName: S.String, IamRoleArn: S.String, AuthorizedTokenIssuerList: S.optional(AuthorizedTokenIssuerList), ServiceIntegrations: S.optional(ServiceIntegrationList), ApplicationType: S.optional(S.String), Tags: S.optional(TagList), SsoTagKeys: S.optional(TagKeyList)}) {}
export class DeregisterNamespaceOutputMessage extends S.Class<DeregisterNamespaceOutputMessage>("DeregisterNamespaceOutputMessage")({Status: S.optional(S.String)}) {}
export class AccountAttributeList extends S.Class<AccountAttributeList>("AccountAttributeList")({AccountAttributes: S.optional(AttributeList)}) {}
export class ClusterDbRevisionsMessage extends S.Class<ClusterDbRevisionsMessage>("ClusterDbRevisionsMessage")({Marker: S.optional(S.String), ClusterDbRevisions: S.optional(ClusterDbRevisionsList)}) {}
export class CustomDomainAssociationsMessage extends S.Class<CustomDomainAssociationsMessage>("CustomDomainAssociationsMessage")({Marker: S.optional(S.String), Associations: S.optional(AssociationList)}) {}
export class EventCategoriesMessage extends S.Class<EventCategoriesMessage>("EventCategoriesMessage")({EventCategoriesMapList: S.optional(EventCategoriesMapList)}) {}
export class NodeConfigurationOptionsMessage extends S.Class<NodeConfigurationOptionsMessage>("NodeConfigurationOptionsMessage")({NodeConfigurationOptionList: S.optional(NodeConfigurationOptionList), Marker: S.optional(S.String)}) {}
export class ListRecommendationsResult extends S.Class<ListRecommendationsResult>("ListRecommendationsResult")({Recommendations: S.optional(RecommendationList), Marker: S.optional(S.String)}) {}
export class UpdateTarget extends S.Class<UpdateTarget>("UpdateTarget")({MaintenanceTrackName: S.optional(S.String), DatabaseVersion: S.optional(S.String), SupportedOperations: S.optional(SupportedOperationList)}) {}
export const EligibleTracksToUpdateList = S.Array(UpdateTarget);
export const AvailabilityZoneList = S.Array(AvailabilityZone);
export class MaintenanceTrack extends S.Class<MaintenanceTrack>("MaintenanceTrack")({MaintenanceTrackName: S.optional(S.String), DatabaseVersion: S.optional(S.String), UpdateTargets: S.optional(EligibleTracksToUpdateList)}) {}
export const TrackList = S.Array(MaintenanceTrack);
export class OrderableClusterOption extends S.Class<OrderableClusterOption>("OrderableClusterOption")({ClusterVersion: S.optional(S.String), ClusterType: S.optional(S.String), NodeType: S.optional(S.String), AvailabilityZones: S.optional(AvailabilityZoneList)}) {}
export const OrderableClusterOptionsList = S.Array(OrderableClusterOption);
export class CreateRedshiftIdcApplicationResult extends S.Class<CreateRedshiftIdcApplicationResult>("CreateRedshiftIdcApplicationResult")({RedshiftIdcApplication: S.optional(RedshiftIdcApplication)}) {}
export class DeleteClusterResult extends S.Class<DeleteClusterResult>("DeleteClusterResult")({Cluster: S.optional(Cluster)}) {}
export class TrackListMessage extends S.Class<TrackListMessage>("TrackListMessage")({MaintenanceTracks: S.optional(TrackList), Marker: S.optional(S.String)}) {}
export class OrderableClusterOptionsMessage extends S.Class<OrderableClusterOptionsMessage>("OrderableClusterOptionsMessage")({OrderableClusterOptions: S.optional(OrderableClusterOptionsList), Marker: S.optional(S.String)}) {}

//# Errors
export class InvalidDataShareFault extends S.TaggedError<InvalidDataShareFault>()("InvalidDataShareFault", {}) {};
export class ClusterNotFoundFault extends S.TaggedError<ClusterNotFoundFault>()("ClusterNotFoundFault", {}) {};
export class InvalidClusterStateFault extends S.TaggedError<InvalidClusterStateFault>()("InvalidClusterStateFault", {}) {};
export class UnsupportedOperationFault extends S.TaggedError<UnsupportedOperationFault>()("UnsupportedOperationFault", {}) {};
export class InvalidClusterSnapshotScheduleStateFault extends S.TaggedError<InvalidClusterSnapshotScheduleStateFault>()("InvalidClusterSnapshotScheduleStateFault", {}) {};
export class EndpointNotFoundFault extends S.TaggedError<EndpointNotFoundFault>()("EndpointNotFoundFault", {}) {};
export class PartnerNotFoundFault extends S.TaggedError<PartnerNotFoundFault>()("PartnerNotFoundFault", {}) {};
export class UnauthorizedPartnerIntegrationFault extends S.TaggedError<UnauthorizedPartnerIntegrationFault>()("UnauthorizedPartnerIntegrationFault", {}) {};
export class ResizeNotFoundFault extends S.TaggedError<ResizeNotFoundFault>()("ResizeNotFoundFault", {}) {};
export class ClusterSnapshotAlreadyExistsFault extends S.TaggedError<ClusterSnapshotAlreadyExistsFault>()("ClusterSnapshotAlreadyExistsFault", {}) {};
export class CustomCnameAssociationFault extends S.TaggedError<CustomCnameAssociationFault>()("CustomCnameAssociationFault", {}) {};
export class IntegrationAlreadyExistsFault extends S.TaggedError<IntegrationAlreadyExistsFault>()("IntegrationAlreadyExistsFault", {}) {};
export class InvalidTagFault extends S.TaggedError<InvalidTagFault>()("InvalidTagFault", {}) {};
export class ResourceNotFoundFault extends S.TaggedError<ResourceNotFoundFault>()("ResourceNotFoundFault", {}) {};
export class InvalidUsageLimitFault extends S.TaggedError<InvalidUsageLimitFault>()("InvalidUsageLimitFault", {}) {};
export class ClusterParameterGroupNotFoundFault extends S.TaggedError<ClusterParameterGroupNotFoundFault>()("ClusterParameterGroupNotFoundFault", {message: S.optional(S.String)}) {};
export class ClusterSecurityGroupNotFoundFault extends S.TaggedError<ClusterSecurityGroupNotFoundFault>()("ClusterSecurityGroupNotFoundFault", {message: S.optional(S.String)}) {};
export class InvalidClusterSecurityGroupStateFault extends S.TaggedError<InvalidClusterSecurityGroupStateFault>()("InvalidClusterSecurityGroupStateFault", {}) {};
export class ClusterSubnetGroupNotFoundFault extends S.TaggedError<ClusterSubnetGroupNotFoundFault>()("ClusterSubnetGroupNotFoundFault", {message: S.optional(S.String)}) {};
export class InvalidSubscriptionStateFault extends S.TaggedError<InvalidSubscriptionStateFault>()("InvalidSubscriptionStateFault", {message: S.optional(S.String)}) {};
export class HsmClientCertificateNotFoundFault extends S.TaggedError<HsmClientCertificateNotFoundFault>()("HsmClientCertificateNotFoundFault", {message: S.optional(S.String)}) {};
export class HsmConfigurationNotFoundFault extends S.TaggedError<HsmConfigurationNotFoundFault>()("HsmConfigurationNotFoundFault", {message: S.optional(S.String)}) {};
export class DependentServiceAccessDeniedFault extends S.TaggedError<DependentServiceAccessDeniedFault>()("DependentServiceAccessDeniedFault", {message: S.optional(S.String)}) {};
export class ScheduledActionNotFoundFault extends S.TaggedError<ScheduledActionNotFoundFault>()("ScheduledActionNotFoundFault", {message: S.optional(S.String)}) {};
export class InvalidSnapshotCopyGrantStateFault extends S.TaggedError<InvalidSnapshotCopyGrantStateFault>()("InvalidSnapshotCopyGrantStateFault", {message: S.optional(S.String)}) {};
export class SnapshotScheduleNotFoundFault extends S.TaggedError<SnapshotScheduleNotFoundFault>()("SnapshotScheduleNotFoundFault", {}) {};
export class InvalidNamespaceFault extends S.TaggedError<InvalidNamespaceFault>()("InvalidNamespaceFault", {}) {};
export class SubscriptionNotFoundFault extends S.TaggedError<SubscriptionNotFoundFault>()("SubscriptionNotFoundFault", {}) {};
export class DependentServiceUnavailableFault extends S.TaggedError<DependentServiceUnavailableFault>()("DependentServiceUnavailableFault", {}) {};
export class SnapshotCopyGrantNotFoundFault extends S.TaggedError<SnapshotCopyGrantNotFoundFault>()("SnapshotCopyGrantNotFoundFault", {}) {};
export class BucketNotFoundFault extends S.TaggedError<BucketNotFoundFault>()("BucketNotFoundFault", {message: S.optional(S.String)}) {};
export class UnauthorizedOperation extends S.TaggedError<UnauthorizedOperation>()("UnauthorizedOperation", {}) {};
export class AuthenticationProfileNotFoundFault extends S.TaggedError<AuthenticationProfileNotFoundFault>()("AuthenticationProfileNotFoundFault", {}) {};
export class InvalidClusterParameterGroupStateFault extends S.TaggedError<InvalidClusterParameterGroupStateFault>()("InvalidClusterParameterGroupStateFault", {}) {};
export class ClusterSnapshotNotFoundFault extends S.TaggedError<ClusterSnapshotNotFoundFault>()("ClusterSnapshotNotFoundFault", {}) {};
export class CustomDomainAssociationNotFoundFault extends S.TaggedError<CustomDomainAssociationNotFoundFault>()("CustomDomainAssociationNotFoundFault", {}) {};
export class InvalidEndpointStateFault extends S.TaggedError<InvalidEndpointStateFault>()("InvalidEndpointStateFault", {}) {};
export class IntegrationConflictOperationFault extends S.TaggedError<IntegrationConflictOperationFault>()("IntegrationConflictOperationFault", {}) {};
export class RedshiftIdcApplicationNotExistsFault extends S.TaggedError<RedshiftIdcApplicationNotExistsFault>()("RedshiftIdcApplicationNotExistsFault", {}) {};
export class InvalidScheduledActionFault extends S.TaggedError<InvalidScheduledActionFault>()("InvalidScheduledActionFault", {}) {};
export class InvalidScheduleFault extends S.TaggedError<InvalidScheduleFault>()("InvalidScheduleFault", {}) {};
export class UsageLimitNotFoundFault extends S.TaggedError<UsageLimitNotFoundFault>()("UsageLimitNotFoundFault", {}) {};
export class InsufficientClusterCapacityFault extends S.TaggedError<InsufficientClusterCapacityFault>()("InsufficientClusterCapacityFault", {}) {};
export class EndpointAuthorizationNotFoundFault extends S.TaggedError<EndpointAuthorizationNotFoundFault>()("EndpointAuthorizationNotFoundFault", {message: S.optional(S.String)}) {};
export class AccessToSnapshotDeniedFault extends S.TaggedError<AccessToSnapshotDeniedFault>()("AccessToSnapshotDeniedFault", {}) {};
export class AuthorizationNotFoundFault extends S.TaggedError<AuthorizationNotFoundFault>()("AuthorizationNotFoundFault", {}) {};
export class EndpointAuthorizationAlreadyExistsFault extends S.TaggedError<EndpointAuthorizationAlreadyExistsFault>()("EndpointAuthorizationAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class BatchModifyClusterSnapshotsLimitExceededFault extends S.TaggedError<BatchModifyClusterSnapshotsLimitExceededFault>()("BatchModifyClusterSnapshotsLimitExceededFault", {message: S.optional(S.String)}) {};
export class InvalidRetentionPeriodFault extends S.TaggedError<InvalidRetentionPeriodFault>()("InvalidRetentionPeriodFault", {}) {};
export class ClusterSnapshotQuotaExceededFault extends S.TaggedError<ClusterSnapshotQuotaExceededFault>()("ClusterSnapshotQuotaExceededFault", {}) {};
export class InvalidClusterSnapshotStateFault extends S.TaggedError<InvalidClusterSnapshotStateFault>()("InvalidClusterSnapshotStateFault", {}) {};
export class AuthenticationProfileAlreadyExistsFault extends S.TaggedError<AuthenticationProfileAlreadyExistsFault>()("AuthenticationProfileAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class AuthenticationProfileQuotaExceededFault extends S.TaggedError<AuthenticationProfileQuotaExceededFault>()("AuthenticationProfileQuotaExceededFault", {}) {};
export class ClusterAlreadyExistsFault extends S.TaggedError<ClusterAlreadyExistsFault>()("ClusterAlreadyExistsFault", {}) {};
export class ClusterSecurityGroupAlreadyExistsFault extends S.TaggedError<ClusterSecurityGroupAlreadyExistsFault>()("ClusterSecurityGroupAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class TagLimitExceededFault extends S.TaggedError<TagLimitExceededFault>()("TagLimitExceededFault", {}) {};
export class DependentServiceRequestThrottlingFault extends S.TaggedError<DependentServiceRequestThrottlingFault>()("DependentServiceRequestThrottlingFault", {}) {};
export class LimitExceededFault extends S.TaggedError<LimitExceededFault>()("LimitExceededFault", {}) {};
export class InvalidAuthenticationProfileRequestFault extends S.TaggedError<InvalidAuthenticationProfileRequestFault>()("InvalidAuthenticationProfileRequestFault", {}) {};
export class InvalidClusterSubnetGroupStateFault extends S.TaggedError<InvalidClusterSubnetGroupStateFault>()("InvalidClusterSubnetGroupStateFault", {message: S.optional(S.String)}) {};
export class InvalidHsmClientCertificateStateFault extends S.TaggedError<InvalidHsmClientCertificateStateFault>()("InvalidHsmClientCertificateStateFault", {message: S.optional(S.String)}) {};
export class InvalidHsmConfigurationStateFault extends S.TaggedError<InvalidHsmConfigurationStateFault>()("InvalidHsmConfigurationStateFault", {message: S.optional(S.String)}) {};
export class IntegrationConflictStateFault extends S.TaggedError<IntegrationConflictStateFault>()("IntegrationConflictStateFault", {}) {};
export class IntegrationNotFoundFault extends S.TaggedError<IntegrationNotFoundFault>()("IntegrationNotFoundFault", {}) {};
export class ReservedNodeNotFoundFault extends S.TaggedError<ReservedNodeNotFoundFault>()("ReservedNodeNotFoundFault", {message: S.optional(S.String)}) {};
export class SnapshotCopyAlreadyDisabledFault extends S.TaggedError<SnapshotCopyAlreadyDisabledFault>()("SnapshotCopyAlreadyDisabledFault", {message: S.optional(S.String)}) {};
export class InsufficientS3BucketPolicyFault extends S.TaggedError<InsufficientS3BucketPolicyFault>()("InsufficientS3BucketPolicyFault", {message: S.optional(S.String)}) {};
export class CopyToRegionDisabledFault extends S.TaggedError<CopyToRegionDisabledFault>()("CopyToRegionDisabledFault", {message: S.optional(S.String)}) {};
export class RedshiftInvalidParameterFault extends S.TaggedError<RedshiftInvalidParameterFault>()("RedshiftInvalidParameterFault", {message: S.optional(S.String)}) {};
export class InvalidReservedNodeStateFault extends S.TaggedError<InvalidReservedNodeStateFault>()("InvalidReservedNodeStateFault", {}) {};
export class ReservedNodeAlreadyMigratedFault extends S.TaggedError<ReservedNodeAlreadyMigratedFault>()("ReservedNodeAlreadyMigratedFault", {}) {};
export class ReservedNodeOfferingNotFoundFault extends S.TaggedError<ReservedNodeOfferingNotFoundFault>()("ReservedNodeOfferingNotFoundFault", {}) {};
export class ClusterOnLatestRevisionFault extends S.TaggedError<ClusterOnLatestRevisionFault>()("ClusterOnLatestRevisionFault", {message: S.optional(S.String)}) {};
export class ClusterSubnetQuotaExceededFault extends S.TaggedError<ClusterSubnetQuotaExceededFault>()("ClusterSubnetQuotaExceededFault", {message: S.optional(S.String)}) {};
export class SNSInvalidTopicFault extends S.TaggedError<SNSInvalidTopicFault>()("SNSInvalidTopicFault", {message: S.optional(S.String)}) {};
export class ScheduledActionTypeUnsupportedFault extends S.TaggedError<ScheduledActionTypeUnsupportedFault>()("ScheduledActionTypeUnsupportedFault", {message: S.optional(S.String)}) {};
export class SnapshotScheduleUpdateInProgressFault extends S.TaggedError<SnapshotScheduleUpdateInProgressFault>()("SnapshotScheduleUpdateInProgressFault", {message: S.optional(S.String)}) {};
export class ReservedNodeAlreadyExistsFault extends S.TaggedError<ReservedNodeAlreadyExistsFault>()("ReservedNodeAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class ConflictPolicyUpdateFault extends S.TaggedError<ConflictPolicyUpdateFault>()("ConflictPolicyUpdateFault", {message: S.optional(S.String)}) {};
export class InvalidPolicyFault extends S.TaggedError<InvalidPolicyFault>()("InvalidPolicyFault", {}) {};
export class ClusterQuotaExceededFault extends S.TaggedError<ClusterQuotaExceededFault>()("ClusterQuotaExceededFault", {}) {};
export class InvalidClusterTrackFault extends S.TaggedError<InvalidClusterTrackFault>()("InvalidClusterTrackFault", {}) {};
export class InProgressTableRestoreQuotaExceededFault extends S.TaggedError<InProgressTableRestoreQuotaExceededFault>()("InProgressTableRestoreQuotaExceededFault", {message: S.optional(S.String)}) {};
export class InvalidAuthorizationStateFault extends S.TaggedError<InvalidAuthorizationStateFault>()("InvalidAuthorizationStateFault", {message: S.optional(S.String)}) {};
export class EndpointAuthorizationsPerClusterLimitExceededFault extends S.TaggedError<EndpointAuthorizationsPerClusterLimitExceededFault>()("EndpointAuthorizationsPerClusterLimitExceededFault", {message: S.optional(S.String)}) {};
export class AuthorizationAlreadyExistsFault extends S.TaggedError<AuthorizationAlreadyExistsFault>()("AuthorizationAlreadyExistsFault", {}) {};
export class BatchDeleteRequestSizeExceededFault extends S.TaggedError<BatchDeleteRequestSizeExceededFault>()("BatchDeleteRequestSizeExceededFault", {message: S.optional(S.String)}) {};
export class InvalidElasticIpFault extends S.TaggedError<InvalidElasticIpFault>()("InvalidElasticIpFault", {}) {};
export class InvalidSubnet extends S.TaggedError<InvalidSubnet>()("InvalidSubnet", {}) {};
export class ClusterParameterGroupAlreadyExistsFault extends S.TaggedError<ClusterParameterGroupAlreadyExistsFault>()("ClusterParameterGroupAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class ClusterSecurityGroupQuotaExceededFault extends S.TaggedError<ClusterSecurityGroupQuotaExceededFault>()("ClusterSecurityGroupQuotaExceededFault", {message: S.optional(S.String)}) {};
export class EventSubscriptionQuotaExceededFault extends S.TaggedError<EventSubscriptionQuotaExceededFault>()("EventSubscriptionQuotaExceededFault", {message: S.optional(S.String)}) {};
export class SNSNoAuthorizationFault extends S.TaggedError<SNSNoAuthorizationFault>()("SNSNoAuthorizationFault", {}) {};
export class HsmClientCertificateAlreadyExistsFault extends S.TaggedError<HsmClientCertificateAlreadyExistsFault>()("HsmClientCertificateAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class HsmConfigurationAlreadyExistsFault extends S.TaggedError<HsmConfigurationAlreadyExistsFault>()("HsmConfigurationAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class IntegrationQuotaExceededFault extends S.TaggedError<IntegrationQuotaExceededFault>()("IntegrationQuotaExceededFault", {message: S.optional(S.String)}) {};
export class ScheduledActionAlreadyExistsFault extends S.TaggedError<ScheduledActionAlreadyExistsFault>()("ScheduledActionAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class SnapshotCopyGrantAlreadyExistsFault extends S.TaggedError<SnapshotCopyGrantAlreadyExistsFault>()("SnapshotCopyGrantAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class ScheduleDefinitionTypeUnsupportedFault extends S.TaggedError<ScheduleDefinitionTypeUnsupportedFault>()("ScheduleDefinitionTypeUnsupportedFault", {message: S.optional(S.String)}) {};
export class UsageLimitAlreadyExistsFault extends S.TaggedError<UsageLimitAlreadyExistsFault>()("UsageLimitAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class InvalidClusterSubnetStateFault extends S.TaggedError<InvalidClusterSubnetStateFault>()("InvalidClusterSubnetStateFault", {message: S.optional(S.String)}) {};
export class ReservedNodeExchangeNotFoundFault extends S.TaggedError<ReservedNodeExchangeNotFoundFault>()("ReservedNodeExchangeNotFoundFault", {message: S.optional(S.String)}) {};
export class TableRestoreNotFoundFault extends S.TaggedError<TableRestoreNotFoundFault>()("TableRestoreNotFoundFault", {message: S.optional(S.String)}) {};
export class InvalidS3BucketNameFault extends S.TaggedError<InvalidS3BucketNameFault>()("InvalidS3BucketNameFault", {message: S.optional(S.String)}) {};
export class IncompatibleOrderableOptions extends S.TaggedError<IncompatibleOrderableOptions>()("IncompatibleOrderableOptions", {message: S.optional(S.String)}) {};
export class SNSTopicArnNotFoundFault extends S.TaggedError<SNSTopicArnNotFoundFault>()("SNSTopicArnNotFoundFault", {}) {};
export class SnapshotCopyDisabledFault extends S.TaggedError<SnapshotCopyDisabledFault>()("SnapshotCopyDisabledFault", {message: S.optional(S.String)}) {};
export class ReservedNodeQuotaExceededFault extends S.TaggedError<ReservedNodeQuotaExceededFault>()("ReservedNodeQuotaExceededFault", {message: S.optional(S.String)}) {};
export class NumberOfNodesPerClusterLimitExceededFault extends S.TaggedError<NumberOfNodesPerClusterLimitExceededFault>()("NumberOfNodesPerClusterLimitExceededFault", {message: S.optional(S.String)}) {};
export class InvalidTableRestoreArgumentFault extends S.TaggedError<InvalidTableRestoreArgumentFault>()("InvalidTableRestoreArgumentFault", {message: S.optional(S.String)}) {};
export class AuthorizationQuotaExceededFault extends S.TaggedError<AuthorizationQuotaExceededFault>()("AuthorizationQuotaExceededFault", {}) {};
export class InvalidVPCNetworkStateFault extends S.TaggedError<InvalidVPCNetworkStateFault>()("InvalidVPCNetworkStateFault", {message: S.optional(S.String)}) {};
export class Ipv6CidrBlockNotFoundFault extends S.TaggedError<Ipv6CidrBlockNotFoundFault>()("Ipv6CidrBlockNotFoundFault", {}) {};
export class NumberOfNodesQuotaExceededFault extends S.TaggedError<NumberOfNodesQuotaExceededFault>()("NumberOfNodesQuotaExceededFault", {}) {};
export class ClusterParameterGroupQuotaExceededFault extends S.TaggedError<ClusterParameterGroupQuotaExceededFault>()("ClusterParameterGroupQuotaExceededFault", {message: S.optional(S.String)}) {};
export class ClusterSubnetGroupAlreadyExistsFault extends S.TaggedError<ClusterSubnetGroupAlreadyExistsFault>()("ClusterSubnetGroupAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class AccessToClusterDeniedFault extends S.TaggedError<AccessToClusterDeniedFault>()("AccessToClusterDeniedFault", {message: S.optional(S.String)}) {};
export class SourceNotFoundFault extends S.TaggedError<SourceNotFoundFault>()("SourceNotFoundFault", {}) {};
export class HsmClientCertificateQuotaExceededFault extends S.TaggedError<HsmClientCertificateQuotaExceededFault>()("HsmClientCertificateQuotaExceededFault", {message: S.optional(S.String)}) {};
export class HsmConfigurationQuotaExceededFault extends S.TaggedError<HsmConfigurationQuotaExceededFault>()("HsmConfigurationQuotaExceededFault", {message: S.optional(S.String)}) {};
export class IntegrationSourceNotFoundFault extends S.TaggedError<IntegrationSourceNotFoundFault>()("IntegrationSourceNotFoundFault", {message: S.optional(S.String)}) {};
export class ScheduledActionQuotaExceededFault extends S.TaggedError<ScheduledActionQuotaExceededFault>()("ScheduledActionQuotaExceededFault", {message: S.optional(S.String)}) {};
export class SnapshotCopyGrantQuotaExceededFault extends S.TaggedError<SnapshotCopyGrantQuotaExceededFault>()("SnapshotCopyGrantQuotaExceededFault", {message: S.optional(S.String)}) {};
export class SnapshotScheduleAlreadyExistsFault extends S.TaggedError<SnapshotScheduleAlreadyExistsFault>()("SnapshotScheduleAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class InvalidS3KeyPrefixFault extends S.TaggedError<InvalidS3KeyPrefixFault>()("InvalidS3KeyPrefixFault", {message: S.optional(S.String)}) {};
export class SnapshotCopyAlreadyEnabledFault extends S.TaggedError<SnapshotCopyAlreadyEnabledFault>()("SnapshotCopyAlreadyEnabledFault", {message: S.optional(S.String)}) {};
export class SubnetAlreadyInUse extends S.TaggedError<SubnetAlreadyInUse>()("SubnetAlreadyInUse", {message: S.optional(S.String)}) {};
export class InvalidRestoreFault extends S.TaggedError<InvalidRestoreFault>()("InvalidRestoreFault", {message: S.optional(S.String)}) {};
export class ClusterSubnetGroupQuotaExceededFault extends S.TaggedError<ClusterSubnetGroupQuotaExceededFault>()("ClusterSubnetGroupQuotaExceededFault", {message: S.optional(S.String)}) {};
export class EndpointAlreadyExistsFault extends S.TaggedError<EndpointAlreadyExistsFault>()("EndpointAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class SubscriptionAlreadyExistFault extends S.TaggedError<SubscriptionAlreadyExistFault>()("SubscriptionAlreadyExistFault", {message: S.optional(S.String)}) {};
export class SubscriptionCategoryNotFoundFault extends S.TaggedError<SubscriptionCategoryNotFoundFault>()("SubscriptionCategoryNotFoundFault", {}) {};
export class IntegrationTargetNotFoundFault extends S.TaggedError<IntegrationTargetNotFoundFault>()("IntegrationTargetNotFoundFault", {message: S.optional(S.String)}) {};
export class RedshiftIdcApplicationAlreadyExistsFault extends S.TaggedError<RedshiftIdcApplicationAlreadyExistsFault>()("RedshiftIdcApplicationAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class SnapshotScheduleQuotaExceededFault extends S.TaggedError<SnapshotScheduleQuotaExceededFault>()("SnapshotScheduleQuotaExceededFault", {message: S.optional(S.String)}) {};
export class UnknownSnapshotCopyRegionFault extends S.TaggedError<UnknownSnapshotCopyRegionFault>()("UnknownSnapshotCopyRegionFault", {message: S.optional(S.String)}) {};
export class TableLimitExceededFault extends S.TaggedError<TableLimitExceededFault>()("TableLimitExceededFault", {message: S.optional(S.String)}) {};
export class UnsupportedOptionFault extends S.TaggedError<UnsupportedOptionFault>()("UnsupportedOptionFault", {}) {};
export class SubscriptionEventIdNotFoundFault extends S.TaggedError<SubscriptionEventIdNotFoundFault>()("SubscriptionEventIdNotFoundFault", {}) {};
export class EndpointsPerAuthorizationLimitExceededFault extends S.TaggedError<EndpointsPerAuthorizationLimitExceededFault>()("EndpointsPerAuthorizationLimitExceededFault", {message: S.optional(S.String)}) {};
export class SubscriptionSeverityNotFoundFault extends S.TaggedError<SubscriptionSeverityNotFoundFault>()("SubscriptionSeverityNotFoundFault", {}) {};
export class RedshiftIdcApplicationQuotaExceededFault extends S.TaggedError<RedshiftIdcApplicationQuotaExceededFault>()("RedshiftIdcApplicationQuotaExceededFault", {message: S.optional(S.String)}) {};
export class EndpointsPerClusterLimitExceededFault extends S.TaggedError<EndpointsPerClusterLimitExceededFault>()("EndpointsPerClusterLimitExceededFault", {message: S.optional(S.String)}) {};

//# Operations
/**
 * From a datashare producer account, removes authorization from the specified datashare.
 */export const deauthorizeDataShare = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeauthorizeDataShare" }, DeauthorizeDataShareMessage, DataShare, [InvalidDataShareFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns account level backups storage size and provisional storage.
 */export const describeStorage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeStorage" }, S.Struct({}), CustomerStorageMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Stops logging information, such as queries and connection attempts, for the
 * specified Amazon Redshift cluster.
 */export const disableLogging = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DisableLogging" }, DisableLoggingMessage, LoggingStatus, [ClusterNotFoundFault, InvalidClusterStateFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * From a datashare consumer account, rejects the specified datashare.
 */export const rejectDataShare = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.RejectDataShare" }, RejectDataShareMessage, DataShare, [InvalidDataShareFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Adds a partner integration to a cluster.
 * This operation authorizes a partner to push status updates for the specified database.
 * To complete the integration, you also set up the integration on the partner website.
 */export const addPartner = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.AddPartner" }, PartnerIntegrationInputMessage, PartnerIntegrationOutputMessage, [ClusterNotFoundFault, PartnerNotFoundFault, UnauthorizedPartnerIntegrationFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * From a data producer account, authorizes the sharing of a datashare with one or more
 * consumer accounts or managing entities. To authorize a datashare for a data consumer,
 * the producer account must have the correct access permissions.
 */export const authorizeDataShare = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.AuthorizeDataShare" }, AuthorizeDataShareMessage, DataShare, [InvalidDataShareFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Cancels a resize operation for a cluster.
 */export const cancelResize = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CancelResize" }, CancelResizeMessage, ResizeProgressMessage, [ClusterNotFoundFault, InvalidClusterStateFault, ResizeNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Used to create a custom domain name for a cluster. Properties include the custom domain name, the
 * cluster the custom domain is associated with, and the certificate Amazon Resource Name (ARN).
 */export const createCustomDomainAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateCustomDomainAssociation" }, CreateCustomDomainAssociationMessage, CreateCustomDomainAssociationResult, [ClusterNotFoundFault, CustomCnameAssociationFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes an Amazon Redshift security group.
 * 
 * 
 * 
 * 
 * You cannot delete a security group that is associated with any clusters. You
 * cannot delete the default security group.
 * 
 * 
 * 
 * 
 * 
 * For information about managing security groups, go to
 * Amazon Redshift Cluster Security Groups in the
 * *Amazon Redshift Cluster Management Guide*.
 */export const deleteClusterSecurityGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteClusterSecurityGroup" }, DeleteClusterSecurityGroupMessage, S.Struct({}), [ClusterSecurityGroupNotFoundFault, InvalidClusterSecurityGroupStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.
 */export const deletePartner = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeletePartner" }, PartnerIntegrationInputMessage, PartnerIntegrationOutputMessage, [ClusterNotFoundFault, PartnerNotFoundFault, UnauthorizedPartnerIntegrationFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the resource policy for a specified resource.
 */export const deleteResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteResourcePolicy" }, DeleteResourcePolicyMessage, S.Struct({}), [ResourceNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a snapshot schedule.
 */export const deleteSnapshotSchedule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteSnapshotSchedule" }, DeleteSnapshotScheduleMessage, S.Struct({}), [InvalidClusterSnapshotScheduleStateFault, SnapshotScheduleNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes tags from a resource. You must provide the ARN of the resource
 * from which you want to delete the tag or tags.
 */export const deleteTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteTags" }, DeleteTagsMessage, S.Struct({}), [InvalidTagFault, ResourceNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of Amazon Redshift parameter groups, including parameter groups you
 * created and the default parameter group. For each parameter group, the response includes
 * the parameter group name, description, and parameter group family name. You can
 * optionally specify a name to retrieve the description of a specific parameter
 * group.
 * 
 * 
 * 
 * For more information about parameters and parameter groups, go to
 * Amazon Redshift Parameter Groups
 * in the *Amazon Redshift Cluster Management Guide*.
 * 
 * 
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all parameter groups that match any combination of the specified keys and values. For
 * example, if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all parameter groups that
 * have any combination of those values are returned.
 * 
 * 
 * If both tag keys and values are omitted from the request, parameter groups are
 * returned regardless of whether they have tag keys or values associated with
 * them.
 */export const describeClusterParameterGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeClusterParameterGroups" }, DescribeClusterParameterGroupsMessage, ClusterParameterGroupsMessage, [ClusterParameterGroupNotFoundFault, InvalidTagFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a detailed list of parameters contained within the specified Amazon Redshift
 * parameter group. For each parameter the response includes information such as parameter
 * name, description, data type, value, whether the parameter value is modifiable, and so
 * on.
 * 
 * 
 * You can specify *source* filter to retrieve parameters of only
 * specific type. For example, to retrieve parameters that were modified by a user action
 * such as from ModifyClusterParameterGroup, you can specify
 * *source* equal to *user*.
 * 
 * 
 * 
 * For more information about parameters and parameter groups, go to
 * Amazon Redshift Parameter Groups
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const describeClusterParameters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeClusterParameters" }, DescribeClusterParametersMessage, ClusterParameterGroupDetails, [ClusterParameterGroupNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns properties of provisioned clusters including general cluster properties,
 * cluster database properties, maintenance and backup properties, and security and access
 * properties. This operation supports pagination.
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 * 
 * 
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all clusters that match any combination of the specified keys and values. For example,
 * if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all clusters that have any
 * combination of those values are returned.
 * 
 * 
 * If both tag keys and values are omitted from the request, clusters are returned
 * regardless of whether they have tag keys or values associated with them.
 */export const describeClusters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeClusters" }, DescribeClustersMessage, ClustersMessage, [ClusterNotFoundFault, InvalidTagFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns information about Amazon Redshift security groups. If the name of a security
 * group is specified, the response will contain only information about only that security
 * group.
 * 
 * 
 * 
 * For information about managing security groups, go to
 * Amazon Redshift Cluster Security Groups in the
 * *Amazon Redshift Cluster Management Guide*.
 * 
 * 
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all security groups that match any combination of the specified keys and values. For
 * example, if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all security groups that
 * have any combination of those values are returned.
 * 
 * 
 * If both tag keys and values are omitted from the request, security groups are
 * returned regardless of whether they have tag keys or values associated with
 * them.
 */export const describeClusterSecurityGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeClusterSecurityGroups" }, DescribeClusterSecurityGroupsMessage, ClusterSecurityGroupMessage, [ClusterSecurityGroupNotFoundFault, InvalidTagFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns one or more cluster subnet group objects, which contain metadata about your
 * cluster subnet groups. By default, this operation returns information about all cluster
 * subnet groups that are defined in your Amazon Web Services account.
 * 
 * 
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all subnet groups that match any combination of the specified keys and values. For
 * example, if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all subnet groups that have
 * any combination of those values are returned.
 * 
 * 
 * If both tag keys and values are omitted from the request, subnet groups are
 * returned regardless of whether they have tag keys or values associated with
 * them.
 */export const describeClusterSubnetGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeClusterSubnetGroups" }, DescribeClusterSubnetGroupsMessage, ClusterSubnetGroupMessage, [ClusterSubnetGroupNotFoundFault, InvalidTagFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Shows the status of any inbound or outbound datashares available in the specified
 * account.
 */export const describeDataShares = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeDataShares" }, DescribeDataSharesMessage, DescribeDataSharesResult, [InvalidDataShareFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of datashares where the account identifier being called is a consumer account identifier.
 */export const describeDataSharesForConsumer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeDataSharesForConsumer" }, DescribeDataSharesForConsumerMessage, DescribeDataSharesForConsumerResult, [InvalidNamespaceFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of datashares when the account identifier being called is a producer account identifier.
 */export const describeDataSharesForProducer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeDataSharesForProducer" }, DescribeDataSharesForProducerMessage, DescribeDataSharesForProducerResult, [InvalidNamespaceFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes a Redshift-managed VPC endpoint.
 */export const describeEndpointAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeEndpointAccess" }, DescribeEndpointAccessMessage, EndpointAccessList, [ClusterNotFoundFault, EndpointNotFoundFault, InvalidClusterStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes an endpoint authorization.
 */export const describeEndpointAuthorization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeEndpointAuthorization" }, DescribeEndpointAuthorizationMessage, EndpointAuthorizationList, [ClusterNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Lists descriptions of all the Amazon Redshift event notification subscriptions for a
 * customer account. If you specify a subscription name, lists the description for that
 * subscription.
 * 
 * 
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all event notification subscriptions that match any combination of the specified keys
 * and values. For example, if you have `owner` and `environment` for
 * tag keys, and `admin` and `test` for tag values, all subscriptions
 * that have any combination of those values are returned.
 * 
 * 
 * If both tag keys and values are omitted from the request, subscriptions are
 * returned regardless of whether they have tag keys or values associated with
 * them.
 */export const describeEventSubscriptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeEventSubscriptions" }, DescribeEventSubscriptionsMessage, EventSubscriptionsMessage, [InvalidTagFault, SubscriptionNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns information about the specified HSM client certificate. If no certificate
 * ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.
 * 
 * 
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all HSM client certificates that match any combination of the specified keys and values.
 * For example, if you have `owner` and `environment` for tag keys,
 * and `admin` and `test` for tag values, all HSM client certificates
 * that have any combination of those values are returned.
 * 
 * 
 * If both tag keys and values are omitted from the request, HSM client certificates
 * are returned regardless of whether they have tag keys or values associated with
 * them.
 */export const describeHsmClientCertificates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeHsmClientCertificates" }, DescribeHsmClientCertificatesMessage, HsmClientCertificateMessage, [HsmClientCertificateNotFoundFault, InvalidTagFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns information about the specified Amazon Redshift HSM configuration. If no
 * configuration ID is specified, returns information about all the HSM configurations
 * owned by your Amazon Web Services account.
 * 
 * 
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all HSM connections that match any combination of the specified keys and values. For
 * example, if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all HSM connections that
 * have any combination of those values are returned.
 * 
 * 
 * If both tag keys and values are omitted from the request, HSM connections are
 * returned regardless of whether they have tag keys or values associated with
 * them.
 */export const describeHsmConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeHsmConfigurations" }, DescribeHsmConfigurationsMessage, HsmConfigurationMessage, [HsmConfigurationNotFoundFault, InvalidTagFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes whether information, such as queries and connection attempts, is being
 * logged for the specified Amazon Redshift cluster.
 */export const describeLoggingStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeLoggingStatus" }, DescribeLoggingStatusMessage, LoggingStatus, [ClusterNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns information about the last resize operation for the specified cluster. If
 * no resize operation has ever been initiated for the specified cluster, a HTTP
 * 404 error is returned. If a resize operation was initiated and completed, the
 * status of the resize remains as `SUCCEEDED` until the next resize.
 * 
 * 
 * A resize operation can be requested using ModifyCluster and
 * specifying a different number or type of nodes for the cluster.
 */export const describeResize = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeResize" }, DescribeResizeMessage, ResizeProgressMessage, [ClusterNotFoundFault, ResizeNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination
 * region.
 * 
 * 
 * 
 * For more information about managing snapshot copy grants, go to
 * Amazon Redshift Database Encryption
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const describeSnapshotCopyGrants = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeSnapshotCopyGrants" }, DescribeSnapshotCopyGrantsMessage, SnapshotCopyGrantMessage, [InvalidTagFault, SnapshotCopyGrantNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of snapshot schedules.
 */export const describeSnapshotSchedules = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeSnapshotSchedules" }, DescribeSnapshotSchedulesMessage, DescribeSnapshotSchedulesOutputMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Shows usage limits on a cluster.
 * Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:
 * 
 * 
 * 
 * - If usage limit identifier, cluster identifier, and feature type are not provided,
 * then all usage limit objects for the current account in the current region are returned.
 * 
 * 
 * 
 * - If usage limit identifier is provided,
 * then the corresponding usage limit object is returned.
 * 
 * 
 * 
 * - If cluster identifier is provided,
 * then all usage limit objects for the specified cluster are returned.
 * 
 * 
 * 
 * - If cluster identifier and feature type are provided,
 * then all usage limit objects for the combination of cluster and feature are returned.
 */export const describeUsageLimits = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeUsageLimits" }, DescribeUsageLimitsMessage, UsageLimitList, [ClusterNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * From a datashare consumer account, remove association for the specified datashare.
 */export const disassociateDataShareConsumer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DisassociateDataShareConsumer" }, DisassociateDataShareConsumerMessage, DataShare, [InvalidDataShareFault, InvalidNamespaceFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Fails over the primary compute unit of the specified Multi-AZ cluster to another Availability Zone.
 */export const failoverPrimaryCompute = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.FailoverPrimaryCompute" }, FailoverPrimaryComputeInputMessage, FailoverPrimaryComputeResult, [ClusterNotFoundFault, InvalidClusterStateFault, UnauthorizedOperation, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a database user name and temporary password with temporary authorization to
 * log on to an Amazon Redshift database. The action returns the database user name
 * prefixed with `IAM:` if `AutoCreate` is `False` or
 * `IAMA:` if `AutoCreate` is `True`. You can
 * optionally specify one or more database user groups that the user will join at log on.
 * By default, the temporary credentials expire in 900 seconds. You can optionally specify
 * a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more
 * information, see Using IAM Authentication
 * to Generate Database User Credentials in the Amazon Redshift Cluster Management Guide.
 * 
 * 
 * The Identity and Access Management (IAM) user or role that runs
 * GetClusterCredentials must have an IAM policy attached that allows access to all
 * necessary actions and resources. For more information about permissions, see Resource Policies for GetClusterCredentials in the
 * Amazon Redshift Cluster Management Guide.
 * 
 * 
 * If the `DbGroups` parameter is specified, the IAM policy must allow the
 * `redshift:JoinGroup` action with access to the listed
 * `dbgroups`.
 * 
 * 
 * In addition, if the `AutoCreate` parameter is set to `True`,
 * then the policy must include the `redshift:CreateClusterUser`
 * permission.
 * 
 * 
 * If the `DbName` parameter is specified, the IAM policy must allow access
 * to the resource `dbname` for the specified database name.
 */export const getClusterCredentials = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.GetClusterCredentials" }, GetClusterCredentialsMessage, ClusterCredentials, [ClusterNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a database user name and temporary password with temporary authorization to
 * log in to an Amazon Redshift database.
 * The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity.
 * For more information about IAM identities, see IAM Identities (users, user groups, and roles) in the
 * Amazon Web Services Identity and Access Management User Guide.
 * 
 * 
 * The Identity and Access Management (IAM) identity that runs
 * this operation must have an IAM policy attached that allows access to all
 * necessary actions and resources.
 * For more information about permissions, see Using identity-based policies (IAM policies) in the
 * Amazon Redshift Cluster Management Guide.
 */export const getClusterCredentialsWithIAM = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.GetClusterCredentialsWithIAM" }, GetClusterCredentialsWithIAMMessage, ClusterExtendedCredentials, [ClusterNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the list of Identity and Access Management (IAM) roles that can be
 * used by the cluster to access other Amazon Web Services services.
 * 
 * 
 * The maximum number of IAM roles that you can associate is subject to a quota.
 * For more information, go to Quotas and limits
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const modifyClusterIamRoles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyClusterIamRoles" }, ModifyClusterIamRolesMessage, ModifyClusterIamRolesResult, [ClusterNotFoundFault, InvalidClusterStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the maintenance settings of a cluster.
 */export const modifyClusterMaintenance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyClusterMaintenance" }, ModifyClusterMaintenanceMessage, ModifyClusterMaintenanceResult, [ClusterNotFoundFault, InvalidClusterStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the parameters of a parameter group. For the parameters parameter, it can't contain ASCII characters.
 * 
 * 
 * 
 * For more information about parameters and parameter groups, go to
 * Amazon Redshift Parameter Groups
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const modifyClusterParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyClusterParameterGroup" }, ModifyClusterParameterGroupMessage, ClusterParameterGroupNameMessage, [ClusterParameterGroupNotFoundFault, InvalidClusterParameterGroupStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies a snapshot schedule for a cluster.
 */export const modifyClusterSnapshotSchedule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyClusterSnapshotSchedule" }, ModifyClusterSnapshotScheduleMessage, S.Struct({}), [ClusterNotFoundFault, InvalidClusterSnapshotScheduleStateFault, SnapshotScheduleNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Contains information for changing a custom domain association.
 */export const modifyCustomDomainAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyCustomDomainAssociation" }, ModifyCustomDomainAssociationMessage, ModifyCustomDomainAssociationResult, [ClusterNotFoundFault, CustomCnameAssociationFault, CustomDomainAssociationNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies a Redshift-managed VPC endpoint.
 */export const modifyEndpointAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyEndpointAccess" }, ModifyEndpointAccessMessage, EndpointAccess, [ClusterNotFoundFault, EndpointNotFoundFault, InvalidClusterSecurityGroupStateFault, InvalidClusterStateFault, InvalidEndpointStateFault, UnauthorizedOperation]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Changes an existing Amazon Redshift IAM Identity Center application.
 */export const modifyRedshiftIdcApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyRedshiftIdcApplication" }, ModifyRedshiftIdcApplicationMessage, ModifyRedshiftIdcApplicationResult, [DependentServiceAccessDeniedFault, DependentServiceUnavailableFault, RedshiftIdcApplicationNotExistsFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies a usage limit in a cluster.
 * You can't modify the feature type or period of a usage limit.
 */export const modifyUsageLimit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyUsageLimit" }, ModifyUsageLimitMessage, UsageLimit, [InvalidUsageLimitFault, UnsupportedOperationFault, UsageLimitNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Pauses a cluster.
 */export const pauseCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.PauseCluster" }, PauseClusterMessage, PauseClusterResult, [ClusterNotFoundFault, InvalidClusterStateFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Reboots a cluster. This action is taken as soon as possible. It results in a
 * momentary outage to the cluster, during which the cluster status is set to
 * `rebooting`. A cluster event is created when the reboot is completed. Any
 * pending cluster modifications (see ModifyCluster) are applied at this
 * reboot.
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const rebootCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.RebootCluster" }, RebootClusterMessage, RebootClusterResult, [ClusterNotFoundFault, InvalidClusterStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Registers a cluster or serverless namespace to the Amazon Web Services Glue Data Catalog.
 */export const registerNamespace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.RegisterNamespace" }, RegisterNamespaceInputMessage, RegisterNamespaceOutputMessage, [ClusterNotFoundFault, InvalidClusterStateFault, InvalidNamespaceFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Sets one or more parameters of the specified parameter group to their default
 * values and sets the source values of the parameters to "engine-default". To reset the
 * entire parameter group specify the *ResetAllParameters* parameter.
 * For parameter changes to take effect you must reboot any associated clusters.
 */export const resetClusterParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ResetClusterParameterGroup" }, ResetClusterParameterGroupMessage, ClusterParameterGroupNameMessage, [ClusterParameterGroupNotFoundFault, InvalidClusterParameterGroupStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Resumes a paused cluster.
 */export const resumeCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ResumeCluster" }, ResumeClusterMessage, ResumeClusterResult, [ClusterNotFoundFault, InsufficientClusterCapacityFault, InvalidClusterStateFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Removes the ability of the specified Amazon Web Services account to restore the specified
 * snapshot. If the account is currently restoring the snapshot, the restore will run to
 * completion.
 * 
 * 
 * 
 * For more information about working with snapshots, go to
 * Amazon Redshift Snapshots
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const revokeSnapshotAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.RevokeSnapshotAccess" }, RevokeSnapshotAccessMessage, RevokeSnapshotAccessResult, [AccessToSnapshotDeniedFault, AuthorizationNotFoundFault, ClusterSnapshotNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Updates the status of a partner integration.
 */export const updatePartnerStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.UpdatePartnerStatus" }, UpdatePartnerStatusInputMessage, PartnerIntegrationOutputMessage, [ClusterNotFoundFault, PartnerNotFoundFault, UnauthorizedPartnerIntegrationFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * From a datashare consumer account, associates a datashare with the
 * account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer
 * can consume the datashare.
 */export const associateDataShareConsumer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.AssociateDataShareConsumer" }, AssociateDataShareConsumerMessage, DataShare, [InvalidDataShareFault, InvalidNamespaceFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the settings for a set of cluster snapshots.
 */export const batchModifyClusterSnapshots = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.BatchModifyClusterSnapshots" }, BatchModifyClusterSnapshotsMessage, BatchModifyClusterSnapshotsOutputMessage, [BatchModifyClusterSnapshotsLimitExceededFault, InvalidRetentionPeriodFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Copies the specified automated cluster snapshot to a new manual cluster snapshot.
 * The source must be an automated snapshot and it must be in the available
 * state.
 * 
 * 
 * When you delete a cluster, Amazon Redshift deletes any automated snapshots of the
 * cluster. Also, when the retention period of the snapshot expires, Amazon Redshift
 * automatically deletes it. If you want to keep an automated snapshot for a longer period,
 * you can make a manual copy of the snapshot. Manual snapshots are retained until you
 * delete them.
 * 
 * 
 * 
 * For more information about working with snapshots, go to
 * Amazon Redshift Snapshots
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const copyClusterSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CopyClusterSnapshot" }, CopyClusterSnapshotMessage, CopyClusterSnapshotResult, [ClusterNotFoundFault, ClusterSnapshotAlreadyExistsFault, ClusterSnapshotNotFoundFault, ClusterSnapshotQuotaExceededFault, InvalidClusterSnapshotStateFault, InvalidRetentionPeriodFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a manual snapshot of the specified cluster. The cluster must be in the
 * `available` state.
 * 
 * 
 * 
 * For more information about working with snapshots, go to
 * Amazon Redshift Snapshots
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const createClusterSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateClusterSnapshot" }, CreateClusterSnapshotMessage, CreateClusterSnapshotResult, [ClusterNotFoundFault, ClusterSnapshotAlreadyExistsFault, ClusterSnapshotQuotaExceededFault, InvalidClusterStateFault, InvalidRetentionPeriodFault, InvalidTagFault, TagLimitExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Adds tags to a cluster.
 * 
 * 
 * A resource can have up to 50 tags. If you try to create more than 50 tags for a
 * resource, you will receive an error and the attempt will fail.
 * 
 * 
 * If you specify a key that already exists for the resource, the value for that key
 * will be updated with the new value.
 */export const createTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateTags" }, CreateTagsMessage, S.Struct({}), [InvalidClusterStateFault, InvalidTagFault, ResourceNotFoundFault, TagLimitExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes an authentication profile.
 */export const deleteAuthenticationProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteAuthenticationProfile" }, DeleteAuthenticationProfileMessage, DeleteAuthenticationProfileResult, [AuthenticationProfileNotFoundFault, InvalidAuthenticationProfileRequestFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a specified Amazon Redshift parameter group.
 * 
 * 
 * 
 * 
 * You cannot delete a parameter group if it is associated with a
 * cluster.
 */export const deleteClusterParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteClusterParameterGroup" }, DeleteClusterParameterGroupMessage, S.Struct({}), [ClusterParameterGroupNotFoundFault, InvalidClusterParameterGroupStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the specified manual snapshot. The snapshot must be in the
 * `available` state, with no other users authorized to access the snapshot.
 * 
 * 
 * Unlike automated snapshots, manual snapshots are retained even after you delete
 * your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual
 * snapshot explicitly to avoid getting charged. If other accounts are authorized to access
 * the snapshot, you must revoke all of the authorizations before you can delete the
 * snapshot.
 */export const deleteClusterSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteClusterSnapshot" }, DeleteClusterSnapshotMessage, DeleteClusterSnapshotResult, [ClusterSnapshotNotFoundFault, InvalidClusterSnapshotStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Contains information about deleting a custom domain association for a cluster.
 */export const deleteCustomDomainAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteCustomDomainAssociation" }, DeleteCustomDomainAssociationMessage, S.Struct({}), [ClusterNotFoundFault, CustomCnameAssociationFault, CustomDomainAssociationNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a Redshift-managed VPC endpoint.
 */export const deleteEndpointAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteEndpointAccess" }, DeleteEndpointAccessMessage, EndpointAccess, [ClusterNotFoundFault, EndpointNotFoundFault, InvalidClusterSecurityGroupStateFault, InvalidClusterStateFault, InvalidEndpointStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes an Amazon Redshift event notification subscription.
 */export const deleteEventSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteEventSubscription" }, DeleteEventSubscriptionMessage, S.Struct({}), [InvalidSubscriptionStateFault, SubscriptionNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the specified HSM client certificate.
 */export const deleteHsmClientCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteHsmClientCertificate" }, DeleteHsmClientCertificateMessage, S.Struct({}), [HsmClientCertificateNotFoundFault, InvalidHsmClientCertificateStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the specified Amazon Redshift HSM configuration.
 */export const deleteHsmConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteHsmConfiguration" }, DeleteHsmConfigurationMessage, S.Struct({}), [HsmConfigurationNotFoundFault, InvalidHsmConfigurationStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes an Amazon Redshift IAM Identity Center application.
 */export const deleteRedshiftIdcApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteRedshiftIdcApplication" }, DeleteRedshiftIdcApplicationMessage, S.Struct({}), [DependentServiceAccessDeniedFault, DependentServiceUnavailableFault, RedshiftIdcApplicationNotExistsFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a scheduled action.
 */export const deleteScheduledAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteScheduledAction" }, DeleteScheduledActionMessage, S.Struct({}), [ScheduledActionNotFoundFault, UnauthorizedOperation]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the specified snapshot copy grant.
 */export const deleteSnapshotCopyGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteSnapshotCopyGrant" }, DeleteSnapshotCopyGrantMessage, S.Struct({}), [InvalidSnapshotCopyGrantStateFault, SnapshotCopyGrantNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a usage limit from a cluster.
 */export const deleteUsageLimit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteUsageLimit" }, DeleteUsageLimitMessage, S.Struct({}), [UnsupportedOperationFault, UsageLimitNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes an authentication profile.
 */export const describeAuthenticationProfiles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeAuthenticationProfiles" }, DescribeAuthenticationProfilesMessage, DescribeAuthenticationProfilesResult, [AuthenticationProfileNotFoundFault, InvalidAuthenticationProfileRequestFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns one or more snapshot objects, which contain metadata about your cluster
 * snapshots. By default, this operation returns information about all snapshots of all
 * clusters that are owned by your Amazon Web Services account. No information is returned for
 * snapshots owned by inactive Amazon Web Services accounts.
 * 
 * 
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all snapshots that match any combination of the specified keys and values. For example,
 * if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all snapshots that have any
 * combination of those values are returned. Only snapshots that you own are returned in
 * the response; shared snapshots are not returned with the tag key and tag value request
 * parameters.
 * 
 * 
 * If both tag keys and values are omitted from the request, snapshots are returned
 * regardless of whether they have tag keys or values associated with them.
 */export const describeClusterSnapshots = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeClusterSnapshots" }, DescribeClusterSnapshotsMessage, SnapshotMessage, [ClusterNotFoundFault, ClusterSnapshotNotFoundFault, InvalidTagFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns descriptions of the available Amazon Redshift cluster versions. You can call this
 * operation even before creating any clusters to learn more about the Amazon Redshift versions.
 * 
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const describeClusterVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeClusterVersions" }, DescribeClusterVersionsMessage, ClusterVersionsMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of parameter settings for the specified parameter group
 * family.
 * 
 * 
 * 
 * For more information about parameters and parameter groups, go to
 * Amazon Redshift Parameter Groups
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const describeDefaultClusterParameters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeDefaultClusterParameters" }, DescribeDefaultClusterParametersMessage, DescribeDefaultClusterParametersResult, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns events related to clusters, security groups, snapshots, and parameter
 * groups for the past 14 days. Events specific to a particular cluster, security group,
 * snapshot or parameter group can be obtained by providing the name as a parameter. By
 * default, the past hour of events are returned.
 */export const describeEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeEvents" }, DescribeEventsMessage, EventsMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of inbound integrations.
 */export const describeInboundIntegrations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeInboundIntegrations" }, DescribeInboundIntegrationsMessage, InboundIntegrationsMessage, [IntegrationNotFoundFault, InvalidNamespaceFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes one or more zero-ETL or S3 event integrations with Amazon Redshift.
 */export const describeIntegrations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeIntegrations" }, DescribeIntegrationsMessage, IntegrationsMessage, [IntegrationNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns information about the partner integrations defined for a cluster.
 */export const describePartners = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribePartners" }, DescribePartnersInputMessage, DescribePartnersOutputMessage, [ClusterNotFoundFault, UnauthorizedPartnerIntegrationFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Lists the Amazon Redshift IAM Identity Center applications.
 */export const describeRedshiftIdcApplications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeRedshiftIdcApplications" }, DescribeRedshiftIdcApplicationsMessage, DescribeRedshiftIdcApplicationsResult, [DependentServiceAccessDeniedFault, DependentServiceUnavailableFault, RedshiftIdcApplicationNotExistsFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns the descriptions of the reserved nodes.
 */export const describeReservedNodes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeReservedNodes" }, DescribeReservedNodesMessage, ReservedNodesMessage, [DependentServiceUnavailableFault, ReservedNodeNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes properties of scheduled actions.
 */export const describeScheduledActions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeScheduledActions" }, DescribeScheduledActionsMessage, ScheduledActionsMessage, [ScheduledActionNotFoundFault, UnauthorizedOperation]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of tags. You can return tags from a specific resource by specifying
 * an ARN, or you can return all tags for a given type of resource, such as clusters,
 * snapshots, and so on.
 * 
 * 
 * The following are limitations for `DescribeTags`:
 * 
 * 
 * 
 * - You cannot specify an ARN and a resource-type value together in the same
 * request.
 * 
 * 
 * 
 * - You cannot use the `MaxRecords` and `Marker`
 * parameters together with the ARN parameter.
 * 
 * 
 * 
 * - The `MaxRecords` parameter can be a range from 10 to 50 results
 * to return in a request.
 * 
 * 
 * 
 * 
 * 
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all resources that match any combination of the specified keys and values. For example,
 * if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all resources that have any
 * combination of those values are returned.
 * 
 * 
 * If both tag keys and values are omitted from the request, resources are returned
 * regardless of whether they have tag keys or values associated with them.
 */export const describeTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeTags" }, DescribeTagsMessage, TaggedResourceListMessage, [InvalidTagFault, ResourceNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Disables the automatic copying of snapshots from one region to another region for a
 * specified cluster.
 * 
 * 
 * If your cluster and its snapshots are encrypted using an encrypted symmetric key
 * from Key Management Service, use DeleteSnapshotCopyGrant to delete the grant that
 * grants Amazon Redshift permission to the key in the destination region.
 */export const disableSnapshotCopy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DisableSnapshotCopy" }, DisableSnapshotCopyMessage, DisableSnapshotCopyResult, [ClusterNotFoundFault, InvalidClusterStateFault, SnapshotCopyAlreadyDisabledFault, UnauthorizedOperation, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Generates an encrypted authentication token that propagates the caller's
 * Amazon Web Services IAM Identity Center identity to Amazon Redshift clusters. This API extracts the
 * Amazon Web Services IAM Identity Center identity from enhanced credentials and creates a secure token
 * that Amazon Redshift drivers can use for authentication.
 * 
 * 
 * The token is encrypted using Key Management Service (KMS) and can only be
 * decrypted by the specified Amazon Redshift clusters. The token contains the caller's
 * Amazon Web Services IAM Identity Center identity information and is valid for a limited time period.
 * 
 * 
 * This API is exclusively for use with Amazon Web Services IAM Identity Center enhanced credentials. If the
 * caller is not using enhanced credentials with embedded Amazon Web Services IAM Identity Center identity, the API will
 * return an error.
 */export const getIdentityCenterAuthToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.GetIdentityCenterAuthToken" }, GetIdentityCenterAuthTokenRequest, GetIdentityCenterAuthTokenResponse, [ClusterNotFoundFault, InvalidClusterStateFault, RedshiftInvalidParameterFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term,
 * and usage price of the given DC1 reserved node.
 */export const getReservedNodeExchangeOfferings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.GetReservedNodeExchangeOfferings" }, GetReservedNodeExchangeOfferingsInputMessage, GetReservedNodeExchangeOfferingsOutputMessage, [DependentServiceUnavailableFault, InvalidReservedNodeStateFault, ReservedNodeAlreadyMigratedFault, ReservedNodeNotFoundFault, ReservedNodeOfferingNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
 */export const modifyAquaConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyAquaConfiguration" }, ModifyAquaInputMessage, ModifyAquaOutputMessage, [ClusterNotFoundFault, InvalidClusterStateFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies an authentication profile.
 */export const modifyAuthenticationProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyAuthenticationProfile" }, ModifyAuthenticationProfileMessage, ModifyAuthenticationProfileResult, [AuthenticationProfileNotFoundFault, AuthenticationProfileQuotaExceededFault, InvalidAuthenticationProfileRequestFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the database revision of a cluster. The database revision is a unique
 * revision of the database running in a cluster.
 */export const modifyClusterDbRevision = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyClusterDbRevision" }, ModifyClusterDbRevisionMessage, ModifyClusterDbRevisionResult, [ClusterNotFoundFault, ClusterOnLatestRevisionFault, InvalidClusterStateFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the settings for a snapshot.
 * 
 * 
 * This exanmple modifies the manual retention period setting for a cluster snapshot.
 */export const modifyClusterSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyClusterSnapshot" }, ModifyClusterSnapshotMessage, ModifyClusterSnapshotResult, [ClusterSnapshotNotFoundFault, InvalidClusterSnapshotStateFault, InvalidRetentionPeriodFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies a zero-ETL integration or S3 event integration with Amazon Redshift.
 */export const modifyIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyIntegration" }, ModifyIntegrationMessage, Integration, [IntegrationAlreadyExistsFault, IntegrationConflictOperationFault, IntegrationConflictStateFault, IntegrationNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the lakehouse configuration for a cluster. This operation allows you to manage Amazon Redshift federated permissions and Amazon Web Services IAM Identity Center trusted identity propagation.
 */export const modifyLakehouseConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyLakehouseConfiguration" }, ModifyLakehouseConfigurationMessage, LakehouseConfiguration, [ClusterNotFoundFault, DependentServiceAccessDeniedFault, DependentServiceUnavailableFault, InvalidClusterStateFault, RedshiftIdcApplicationNotExistsFault, UnauthorizedOperation, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies a scheduled action.
 */export const modifyScheduledAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyScheduledAction" }, ModifyScheduledActionMessage, ScheduledAction, [ClusterNotFoundFault, InvalidScheduledActionFault, InvalidScheduleFault, ScheduledActionNotFoundFault, ScheduledActionTypeUnsupportedFault, UnauthorizedOperation, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies a snapshot schedule. Any schedule associated with a cluster is modified
 * asynchronously.
 */export const modifySnapshotSchedule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifySnapshotSchedule" }, ModifySnapshotScheduleMessage, SnapshotSchedule, [InvalidScheduleFault, SnapshotScheduleNotFoundFault, SnapshotScheduleUpdateInProgressFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Updates the resource policy for a specified resource.
 */export const putResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.PutResourcePolicy" }, PutResourcePolicyMessage, PutResourcePolicyResult, [ConflictPolicyUpdateFault, InvalidPolicyFault, ResourceNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Revokes an ingress rule in an Amazon Redshift security group for a previously authorized
 * IP range or Amazon EC2 security group. To add an ingress rule, see AuthorizeClusterSecurityGroupIngress.
 * For information about managing security groups, go to
 * Amazon Redshift Cluster Security Groups in the
 * *Amazon Redshift Cluster Management Guide*.
 */export const revokeClusterSecurityGroupIngress = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.RevokeClusterSecurityGroupIngress" }, RevokeClusterSecurityGroupIngressMessage, RevokeClusterSecurityGroupIngressResult, [AuthorizationNotFoundFault, ClusterSecurityGroupNotFoundFault, InvalidClusterSecurityGroupStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Revokes access to a cluster.
 */export const revokeEndpointAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.RevokeEndpointAccess" }, RevokeEndpointAccessMessage, EndpointAuthorization, [ClusterNotFoundFault, EndpointAuthorizationNotFoundFault, EndpointNotFoundFault, InvalidAuthorizationStateFault, InvalidClusterSecurityGroupStateFault, InvalidClusterStateFault, InvalidEndpointStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Rotates the encryption keys for a cluster.
 */export const rotateEncryptionKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.RotateEncryptionKey" }, RotateEncryptionKeyMessage, RotateEncryptionKeyResult, [ClusterNotFoundFault, DependentServiceRequestThrottlingFault, InvalidClusterStateFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the
 * configuration (term, payment type, or number of nodes) and no additional costs.
 */export const acceptReservedNodeExchange = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.AcceptReservedNodeExchange" }, AcceptReservedNodeExchangeInputMessage, AcceptReservedNodeExchangeOutputMessage, [DependentServiceUnavailableFault, InvalidReservedNodeStateFault, ReservedNodeAlreadyExistsFault, ReservedNodeAlreadyMigratedFault, ReservedNodeNotFoundFault, ReservedNodeOfferingNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Grants access to a cluster.
 */export const authorizeEndpointAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.AuthorizeEndpointAccess" }, AuthorizeEndpointAccessMessage, EndpointAuthorization, [ClusterNotFoundFault, EndpointAuthorizationAlreadyExistsFault, EndpointAuthorizationsPerClusterLimitExceededFault, InvalidAuthorizationStateFault, InvalidClusterStateFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a set of cluster snapshots.
 */export const batchDeleteClusterSnapshots = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.BatchDeleteClusterSnapshots" }, BatchDeleteClusterSnapshotsRequest, BatchDeleteClusterSnapshotsResult, [BatchDeleteRequestSizeExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates an authentication profile with the specified parameters.
 */export const createAuthenticationProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateAuthenticationProfile" }, CreateAuthenticationProfileMessage, CreateAuthenticationProfileResult, [AuthenticationProfileAlreadyExistsFault, AuthenticationProfileQuotaExceededFault, InvalidAuthenticationProfileRequestFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a new Amazon Redshift security group. You use security groups to control access
 * to non-VPC clusters.
 * 
 * 
 * 
 * For information about managing security groups, go to
 * Amazon Redshift Cluster Security Groups in the
 * *Amazon Redshift Cluster Management Guide*.
 */export const createClusterSecurityGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateClusterSecurityGroup" }, CreateClusterSecurityGroupMessage, CreateClusterSecurityGroupResult, [ClusterSecurityGroupAlreadyExistsFault, ClusterSecurityGroupQuotaExceededFault, InvalidTagFault, TagLimitExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a usage limit for a specified Amazon Redshift feature on a cluster.
 * The usage limit is identified by the returned usage limit identifier.
 */export const createUsageLimit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateUsageLimit" }, CreateUsageLimitMessage, UsageLimit, [ClusterNotFoundFault, InvalidClusterStateFault, InvalidUsageLimitFault, LimitExceededFault, TagLimitExceededFault, UnsupportedOperationFault, UsageLimitAlreadyExistsFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the specified cluster subnet group.
 */export const deleteClusterSubnetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteClusterSubnetGroup" }, DeleteClusterSubnetGroupMessage, S.Struct({}), [ClusterSubnetGroupNotFoundFault, InvalidClusterSubnetGroupStateFault, InvalidClusterSubnetStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a zero-ETL integration or S3 event integration with Amazon Redshift.
 */export const deleteIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteIntegration" }, DeleteIntegrationMessage, Integration, [IntegrationConflictOperationFault, IntegrationConflictStateFault, IntegrationNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deregisters a cluster or serverless namespace from the Amazon Web Services Glue Data Catalog.
 */export const deregisterNamespace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeregisterNamespace" }, DeregisterNamespaceInputMessage, DeregisterNamespaceOutputMessage, [ClusterNotFoundFault, InvalidClusterStateFault, InvalidNamespaceFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of attributes attached to an account
 */export const describeAccountAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeAccountAttributes" }, DescribeAccountAttributesMessage, AccountAttributeList, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns an array of `ClusterDbRevision` objects.
 */export const describeClusterDbRevisions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeClusterDbRevisions" }, DescribeClusterDbRevisionsMessage, ClusterDbRevisionsMessage, [ClusterNotFoundFault, InvalidClusterStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Contains information about custom domain associations for a cluster.
 */export const describeCustomDomainAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeCustomDomainAssociations" }, DescribeCustomDomainAssociationsMessage, CustomDomainAssociationsMessage, [CustomDomainAssociationNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Displays a list of event categories for all event source types, or for a specified
 * source type. For a list of the event categories and source types, go to Amazon Redshift Event
 * Notifications.
 */export const describeEventCategories = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeEventCategories" }, DescribeEventCategoriesMessage, EventCategoriesMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns properties of possible node configurations such as node type, number of nodes, and
 * disk usage for the specified action type.
 */export const describeNodeConfigurationOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeNodeConfigurationOptions" }, DescribeNodeConfigurationOptionsMessage, NodeConfigurationOptionsMessage, [AccessToSnapshotDeniedFault, ClusterNotFoundFault, ClusterSnapshotNotFoundFault, InvalidClusterSnapshotStateFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns exchange status details and associated metadata for a reserved-node
 * exchange. Statuses include such values as in progress and requested.
 */export const describeReservedNodeExchangeStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeReservedNodeExchangeStatus" }, DescribeReservedNodeExchangeStatusInputMessage, DescribeReservedNodeExchangeStatusOutputMessage, [ReservedNodeExchangeNotFoundFault, ReservedNodeNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of the available reserved node offerings by Amazon Redshift with their
 * descriptions including the node type, the fixed and recurring costs of reserving the
 * node and duration the node will be reserved for you. These descriptions help you
 * determine which reserve node offering you want to purchase. You then use the unique
 * offering ID in you call to PurchaseReservedNodeOffering to reserve one
 * or more nodes for your Amazon Redshift cluster.
 * 
 * 
 * 
 * For more information about reserved node offerings, go to
 * Purchasing Reserved Nodes
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const describeReservedNodeOfferings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeReservedNodeOfferings" }, DescribeReservedNodeOfferingsMessage, ReservedNodeOfferingsMessage, [DependentServiceUnavailableFault, ReservedNodeOfferingNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Lists the status of one or more table restore requests made using the RestoreTableFromClusterSnapshot API action. If you don't specify a value
 * for the `TableRestoreRequestId` parameter, then
 * `DescribeTableRestoreStatus` returns the status of all table restore
 * requests ordered by the date and time of the request in ascending order. Otherwise
 * `DescribeTableRestoreStatus` returns the status of the table specified by
 * `TableRestoreRequestId`.
 */export const describeTableRestoreStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeTableRestoreStatus" }, DescribeTableRestoreStatusMessage, TableRestoreStatusMessage, [ClusterNotFoundFault, TableRestoreNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Gets the configuration options for the reserved-node exchange. These options
 * include information about the source reserved node and target reserved node offering.
 * Details include the node type, the price, the node count, and the offering type.
 */export const getReservedNodeExchangeConfigurationOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.GetReservedNodeExchangeConfigurationOptions" }, GetReservedNodeExchangeConfigurationOptionsInputMessage, GetReservedNodeExchangeConfigurationOptionsOutputMessage, [ClusterNotFoundFault, ClusterSnapshotNotFoundFault, DependentServiceUnavailableFault, InvalidReservedNodeStateFault, ReservedNodeAlreadyMigratedFault, ReservedNodeNotFoundFault, ReservedNodeOfferingNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Get the resource policy for a specified resource.
 */export const getResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.GetResourcePolicy" }, GetResourcePolicyMessage, GetResourcePolicyResult, [InvalidPolicyFault, ResourceNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * List the Amazon Redshift Advisor recommendations for one or multiple Amazon Redshift clusters in an Amazon Web Services account.
 */export const listRecommendations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ListRecommendations" }, ListRecommendationsMessage, ListRecommendationsResult, [ClusterNotFoundFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after
 * they are copied from the source Amazon Web Services Region. By default, this operation only changes the
 * retention period of copied automated snapshots. The retention periods for both new and
 * existing copied automated snapshots are updated with the new retention period. You can
 * set the manual option to change only the retention periods of copied manual snapshots.
 * If you set this option, only newly copied manual snapshots have the new retention
 * period.
 */export const modifySnapshotCopyRetentionPeriod = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifySnapshotCopyRetentionPeriod" }, ModifySnapshotCopyRetentionPeriodMessage, ModifySnapshotCopyRetentionPeriodResult, [ClusterNotFoundFault, InvalidClusterStateFault, InvalidRetentionPeriodFault, SnapshotCopyDisabledFault, UnauthorizedOperation]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of
 * reserved node offerings. You can purchase one or more of the offerings. You can call the
 * DescribeReservedNodeOfferings API to obtain the available reserved
 * node offerings. You can call this API by providing a specific reserved node offering and
 * the number of nodes you want to reserve.
 * 
 * 
 * 
 * For more information about reserved node offerings, go to
 * Purchasing Reserved Nodes
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const purchaseReservedNodeOffering = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.PurchaseReservedNodeOffering" }, PurchaseReservedNodeOfferingMessage, PurchaseReservedNodeOfferingResult, [ReservedNodeAlreadyExistsFault, ReservedNodeOfferingNotFoundFault, ReservedNodeQuotaExceededFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a new table from a table in an Amazon Redshift cluster snapshot. You must
 * create the new table within the Amazon Redshift cluster that the snapshot was taken
 * from.
 * 
 * 
 * You cannot use `RestoreTableFromClusterSnapshot` to restore a table with
 * the same name as an existing table in an Amazon Redshift cluster. That is, you cannot
 * overwrite an existing table in a cluster with a restored table. If you want to replace
 * your original table with a new, restored table, then rename or drop your original table
 * before you call `RestoreTableFromClusterSnapshot`. When you have renamed your
 * original table, then you can pass the original name of the table as the
 * `NewTableName` parameter value in the call to
 * `RestoreTableFromClusterSnapshot`. This way, you can replace the original
 * table with the table created from the snapshot.
 * 
 * 
 * You can't use this operation to restore tables with
 * interleaved sort keys.
 */export const restoreTableFromClusterSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.RestoreTableFromClusterSnapshot" }, RestoreTableFromClusterSnapshotMessage, RestoreTableFromClusterSnapshotResult, [ClusterNotFoundFault, ClusterSnapshotNotFoundFault, InProgressTableRestoreQuotaExceededFault, InvalidClusterSnapshotStateFault, InvalidClusterStateFault, InvalidTableRestoreArgumentFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether
 * the application accessing your cluster is running on the Internet or an Amazon EC2
 * instance, you can authorize inbound access to either a Classless Interdomain Routing
 * (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as
 * many as 20 ingress rules to an Amazon Redshift security group.
 * 
 * 
 * If you authorize access to an Amazon EC2 security group, specify
 * *EC2SecurityGroupName* and
 * *EC2SecurityGroupOwnerId*. The Amazon EC2 security group and
 * Amazon Redshift cluster must be in the same Amazon Web Services Region.
 * 
 * 
 * If you authorize access to a CIDR/IP address range, specify
 * *CIDRIP*. For an overview of CIDR blocks, see the Wikipedia
 * article on Classless Inter-Domain Routing.
 * 
 * 
 * You must also associate the security group with a cluster so that clients running
 * on these IP addresses or the EC2 instance are authorized to connect to the cluster. For
 * information about managing security groups, go to Working with Security
 * Groups in the *Amazon Redshift Cluster Management Guide*.
 */export const authorizeClusterSecurityGroupIngress = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.AuthorizeClusterSecurityGroupIngress" }, AuthorizeClusterSecurityGroupIngressMessage, AuthorizeClusterSecurityGroupIngressResult, [AuthorizationAlreadyExistsFault, AuthorizationQuotaExceededFault, ClusterSecurityGroupNotFoundFault, InvalidClusterSecurityGroupStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Authorizes the specified Amazon Web Services account to restore the specified
 * snapshot.
 * 
 * 
 * 
 * For more information about working with snapshots, go to
 * Amazon Redshift Snapshots
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const authorizeSnapshotAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.AuthorizeSnapshotAccess" }, AuthorizeSnapshotAccessMessage, AuthorizeSnapshotAccessResult, [AuthorizationAlreadyExistsFault, AuthorizationQuotaExceededFault, ClusterSnapshotNotFoundFault, DependentServiceRequestThrottlingFault, InvalidClusterSnapshotStateFault, LimitExceededFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a new cluster with the specified parameters.
 * 
 * 
 * To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster
 * subnet group name. The cluster subnet group identifies the subnets of your VPC that
 * Amazon Redshift uses when creating the cluster.
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 * 
 * 
 * VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that
 * you own in a Region from reaching or being reached from the internet through internet
 * gateways and egress-only internet gateways. If a subnet group for a
 * provisioned cluster is in an account with VPC BPA turned on, the following capabilities
 * are blocked:
 * 
 * 
 * 
 * - Creating a public cluster
 * 
 * 
 * 
 * - Restoring a public cluster
 * 
 * 
 * 
 * - Modifying a private cluster to be public
 * 
 * 
 * 
 * - Adding a subnet with VPC BPA turned on to the subnet group when there's at
 * least one public cluster within the group
 * 
 * 
 * 
 * 
 * 
 * For more information about VPC BPA, see Block public access to VPCs and
 * subnets in the *Amazon VPC User Guide*.
 */export const createCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateCluster" }, CreateClusterMessage, CreateClusterResult, [ClusterAlreadyExistsFault, ClusterParameterGroupNotFoundFault, ClusterQuotaExceededFault, ClusterSecurityGroupNotFoundFault, ClusterSubnetGroupNotFoundFault, DependentServiceAccessDeniedFault, DependentServiceRequestThrottlingFault, DependentServiceUnavailableFault, HsmClientCertificateNotFoundFault, HsmConfigurationNotFoundFault, InsufficientClusterCapacityFault, InvalidClusterSubnetGroupStateFault, InvalidClusterTrackFault, InvalidElasticIpFault, InvalidRetentionPeriodFault, InvalidSubnet, InvalidTagFault, InvalidVPCNetworkStateFault, Ipv6CidrBlockNotFoundFault, LimitExceededFault, NumberOfNodesPerClusterLimitExceededFault, NumberOfNodesQuotaExceededFault, RedshiftIdcApplicationNotExistsFault, SnapshotScheduleNotFoundFault, TagLimitExceededFault, UnauthorizedOperation, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates an Amazon Redshift parameter group.
 * 
 * 
 * Creating parameter groups is independent of creating clusters. You can associate a
 * cluster with a parameter group when you create the cluster. You can also associate an
 * existing cluster with a parameter group after the cluster is created by using ModifyCluster.
 * 
 * 
 * Parameters in the parameter group define specific behavior that applies to the
 * databases you create on the cluster.
 * For more information about parameters and parameter groups, go to
 * Amazon Redshift Parameter Groups
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const createClusterParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateClusterParameterGroup" }, CreateClusterParameterGroupMessage, CreateClusterParameterGroupResult, [ClusterParameterGroupAlreadyExistsFault, ClusterParameterGroupQuotaExceededFault, InvalidTagFault, TagLimitExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to
 * the client's HSM in order to store and retrieve the keys used to encrypt the cluster
 * databases.
 * 
 * 
 * The command returns a public key, which you must store in the HSM. In addition to
 * creating the HSM certificate, you must create an Amazon Redshift HSM configuration that
 * provides a cluster the information needed to store and use encryption keys in the HSM.
 * For more information, go to Hardware Security Modules
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const createHsmClientCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateHsmClientCertificate" }, CreateHsmClientCertificateMessage, CreateHsmClientCertificateResult, [HsmClientCertificateAlreadyExistsFault, HsmClientCertificateQuotaExceededFault, InvalidTagFault, TagLimitExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates an HSM configuration that contains the information required by an Amazon Redshift
 * cluster to store and use database encryption keys in a Hardware Security Module (HSM).
 * After creating the HSM configuration, you can specify it as a parameter when creating a
 * cluster. The cluster will then store its encryption keys in the HSM.
 * 
 * 
 * In addition to creating an HSM configuration, you must also create an HSM client
 * certificate. For more information, go to Hardware Security Modules
 * in the Amazon Redshift Cluster Management Guide.
 */export const createHsmConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateHsmConfiguration" }, CreateHsmConfigurationMessage, CreateHsmConfigurationResult, [HsmConfigurationAlreadyExistsFault, HsmConfigurationQuotaExceededFault, InvalidTagFault, TagLimitExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action.
 * For example, you can create a schedule of when to run the `ResizeCluster` API operation.
 */export const createScheduledAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateScheduledAction" }, CreateScheduledActionMessage, ScheduledAction, [ClusterNotFoundFault, InvalidScheduledActionFault, InvalidScheduleFault, ScheduledActionAlreadyExistsFault, ScheduledActionQuotaExceededFault, ScheduledActionTypeUnsupportedFault, UnauthorizedOperation, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key
 * from Key Management Service (KMS) to encrypt copied snapshots in a
 * destination region.
 * 
 * 
 * 
 * For more information about managing snapshot copy grants, go to
 * Amazon Redshift Database Encryption
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const createSnapshotCopyGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateSnapshotCopyGrant" }, CreateSnapshotCopyGrantMessage, CreateSnapshotCopyGrantResult, [DependentServiceRequestThrottlingFault, InvalidTagFault, LimitExceededFault, SnapshotCopyGrantAlreadyExistsFault, SnapshotCopyGrantQuotaExceededFault, TagLimitExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web
 * service indicates that the request was received correctly. Use DescribeClusters to monitor the status of the deletion. The delete
 * operation cannot be canceled or reverted once submitted.
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 * 
 * 
 * If you want to shut down the cluster and retain it for future use, set
 * *SkipFinalClusterSnapshot* to `false` and specify a
 * name for *FinalClusterSnapshotIdentifier*. You can later restore this
 * snapshot to resume using the cluster. If a final cluster snapshot is requested, the
 * status of the cluster will be "final-snapshot" while the snapshot is being taken, then
 * it's "deleting" once Amazon Redshift begins deleting the cluster.
 * 
 * 
 * 
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const deleteCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DeleteCluster" }, DeleteClusterMessage, DeleteClusterResult, [ClusterNotFoundFault, ClusterSnapshotAlreadyExistsFault, ClusterSnapshotQuotaExceededFault, InvalidClusterStateFault, InvalidRetentionPeriodFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of all the available maintenance tracks.
 */export const describeClusterTracks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeClusterTracks" }, DescribeClusterTracksMessage, TrackListMessage, [InvalidClusterTrackFault, UnauthorizedOperation]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of orderable cluster options. Before you create a new cluster you
 * can use this operation to find what options are available, such as the EC2 Availability
 * Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can
 * request. The node types differ by available storage, memory, CPU and price. With the
 * cost involved you might want to obtain a list of cluster options in the specific region
 * and specify values when creating a cluster.
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const describeOrderableClusterOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.DescribeOrderableClusterOptions" }, DescribeOrderableClusterOptionsMessage, OrderableClusterOptionsMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Starts logging information, such as queries and connection attempts, for the
 * specified Amazon Redshift cluster.
 */export const enableLogging = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.EnableLogging" }, EnableLoggingMessage, LoggingStatus, [BucketNotFoundFault, ClusterNotFoundFault, InsufficientS3BucketPolicyFault, InvalidClusterStateFault, InvalidS3BucketNameFault, InvalidS3KeyPrefixFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies a cluster subnet group to include the specified list of VPC subnets. The
 * operation replaces the existing list of subnets with the new list of subnets.
 * 
 * 
 * VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that
 * you own in a Region from reaching or being reached from the internet through internet
 * gateways and egress-only internet gateways. If a subnet group for a
 * provisioned cluster is in an account with VPC BPA turned on, the following capabilities
 * are blocked:
 * 
 * 
 * 
 * - Creating a public cluster
 * 
 * 
 * 
 * - Restoring a public cluster
 * 
 * 
 * 
 * - Modifying a private cluster to be public
 * 
 * 
 * 
 * - Adding a subnet with VPC BPA turned on to the subnet group when there's at
 * least one public cluster within the group
 * 
 * 
 * 
 * 
 * 
 * For more information about VPC BPA, see Block public access to VPCs and
 * subnets in the *Amazon VPC User Guide*.
 */export const modifyClusterSubnetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyClusterSubnetGroup" }, ModifyClusterSubnetGroupMessage, ModifyClusterSubnetGroupResult, [ClusterSubnetGroupNotFoundFault, ClusterSubnetQuotaExceededFault, DependentServiceRequestThrottlingFault, InvalidSubnet, SubnetAlreadyInUse, UnauthorizedOperation]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting
 * cluster with the same configuration as the original cluster from which the snapshot was
 * created, except that the new cluster is created with the default cluster security and
 * parameter groups. After Amazon Redshift creates the cluster, you can use the ModifyCluster API to associate a different security group and different
 * parameter group with the restored cluster. If you are using a DS node type, you can also
 * choose to change to another DS node type of the same size during restore.
 * 
 * 
 * If you restore a cluster into a VPC, you must provide a cluster subnet group where
 * you want the cluster restored.
 * 
 * 
 * VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that
 * you own in a Region from reaching or being reached from the internet through internet
 * gateways and egress-only internet gateways. If a subnet group for a
 * provisioned cluster is in an account with VPC BPA turned on, the following capabilities
 * are blocked:
 * 
 * 
 * 
 * - Creating a public cluster
 * 
 * 
 * 
 * - Restoring a public cluster
 * 
 * 
 * 
 * - Modifying a private cluster to be public
 * 
 * 
 * 
 * - Adding a subnet with VPC BPA turned on to the subnet group when there's at
 * least one public cluster within the group
 * 
 * 
 * 
 * 
 * 
 * For more information about VPC BPA, see Block public access to VPCs and
 * subnets in the *Amazon VPC User Guide*.
 * 
 * 
 * 
 * For more information about working with snapshots, go to
 * Amazon Redshift Snapshots
 * in the *Amazon Redshift Cluster Management Guide*.
 */export const restoreFromClusterSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.RestoreFromClusterSnapshot" }, RestoreFromClusterSnapshotMessage, RestoreFromClusterSnapshotResult, [AccessToSnapshotDeniedFault, ClusterAlreadyExistsFault, ClusterParameterGroupNotFoundFault, ClusterQuotaExceededFault, ClusterSecurityGroupNotFoundFault, ClusterSnapshotNotFoundFault, ClusterSubnetGroupNotFoundFault, DependentServiceAccessDeniedFault, DependentServiceRequestThrottlingFault, DependentServiceUnavailableFault, HsmClientCertificateNotFoundFault, HsmConfigurationNotFoundFault, InsufficientClusterCapacityFault, InvalidClusterSnapshotStateFault, InvalidClusterSubnetGroupStateFault, InvalidClusterTrackFault, InvalidElasticIpFault, InvalidReservedNodeStateFault, InvalidRestoreFault, InvalidSubnet, InvalidTagFault, InvalidVPCNetworkStateFault, Ipv6CidrBlockNotFoundFault, LimitExceededFault, NumberOfNodesPerClusterLimitExceededFault, NumberOfNodesQuotaExceededFault, RedshiftIdcApplicationNotExistsFault, ReservedNodeAlreadyExistsFault, ReservedNodeAlreadyMigratedFault, ReservedNodeNotFoundFault, ReservedNodeOfferingNotFoundFault, SnapshotScheduleNotFoundFault, TagLimitExceededFault, UnauthorizedOperation, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a new Amazon Redshift subnet group. You must provide a list of one or more
 * subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating
 * Amazon Redshift subnet group.
 * 
 * 
 * 
 * For information about subnet groups, go to
 * Amazon Redshift Cluster Subnet Groups in the
 * *Amazon Redshift Cluster Management Guide*.
 */export const createClusterSubnetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateClusterSubnetGroup" }, CreateClusterSubnetGroupMessage, CreateClusterSubnetGroupResult, [ClusterSubnetGroupAlreadyExistsFault, ClusterSubnetGroupQuotaExceededFault, ClusterSubnetQuotaExceededFault, DependentServiceRequestThrottlingFault, InvalidSubnet, InvalidTagFault, TagLimitExceededFault, UnauthorizedOperation]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a zero-ETL integration or S3 event integration with Amazon Redshift.
 */export const createIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateIntegration" }, CreateIntegrationMessage, Integration, [IntegrationAlreadyExistsFault, IntegrationConflictOperationFault, IntegrationQuotaExceededFault, IntegrationSourceNotFoundFault, IntegrationTargetNotFoundFault, InvalidClusterStateFault, InvalidTagFault, TagLimitExceededFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule.
 */export const createSnapshotSchedule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateSnapshotSchedule" }, CreateSnapshotScheduleMessage, SnapshotSchedule, [InvalidScheduleFault, InvalidTagFault, ScheduleDefinitionTypeUnsupportedFault, SnapshotScheduleAlreadyExistsFault, SnapshotScheduleQuotaExceededFault, TagLimitExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Enables the automatic copy of snapshots from one region to another region for a
 * specified cluster.
 */export const enableSnapshotCopy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.EnableSnapshotCopy" }, EnableSnapshotCopyMessage, EnableSnapshotCopyResult, [ClusterNotFoundFault, CopyToRegionDisabledFault, DependentServiceRequestThrottlingFault, IncompatibleOrderableOptions, InvalidClusterStateFault, InvalidRetentionPeriodFault, LimitExceededFault, SnapshotCopyAlreadyEnabledFault, SnapshotCopyGrantNotFoundFault, UnauthorizedOperation, UnknownSnapshotCopyRegionFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the settings for a cluster.
 * 
 * 
 * You can also change node type and the number of nodes to scale up or down the
 * cluster. When resizing a cluster, you must specify both the number of nodes and the node
 * type even if one of the parameters does not change.
 * 
 * 
 * You can add another security or
 * parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect.
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 * 
 * 
 * VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that
 * you own in a Region from reaching or being reached from the internet through internet
 * gateways and egress-only internet gateways. If a subnet group for a
 * provisioned cluster is in an account with VPC BPA turned on, the following capabilities
 * are blocked:
 * 
 * 
 * 
 * - Creating a public cluster
 * 
 * 
 * 
 * - Restoring a public cluster
 * 
 * 
 * 
 * - Modifying a private cluster to be public
 * 
 * 
 * 
 * - Adding a subnet with VPC BPA turned on to the subnet group when there's at
 * least one public cluster within the group
 * 
 * 
 * 
 * 
 * 
 * For more information about VPC BPA, see Block public access to VPCs and
 * subnets in the *Amazon VPC User Guide*.
 */export const modifyCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyCluster" }, ModifyClusterMessage, ModifyClusterResult, [ClusterAlreadyExistsFault, ClusterNotFoundFault, ClusterParameterGroupNotFoundFault, ClusterSecurityGroupNotFoundFault, CustomCnameAssociationFault, DependentServiceRequestThrottlingFault, HsmClientCertificateNotFoundFault, HsmConfigurationNotFoundFault, InsufficientClusterCapacityFault, InvalidClusterSecurityGroupStateFault, InvalidClusterStateFault, InvalidClusterTrackFault, InvalidElasticIpFault, InvalidRetentionPeriodFault, Ipv6CidrBlockNotFoundFault, LimitExceededFault, NumberOfNodesPerClusterLimitExceededFault, NumberOfNodesQuotaExceededFault, TableLimitExceededFault, UnauthorizedOperation, UnsupportedOperationFault, UnsupportedOptionFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Changes the size of the cluster. You can change the cluster's type, or change the
 * number or type of nodes. The default behavior is to use the elastic resize method. With
 * an elastic resize, your cluster is available for read and write operations more quickly
 * than with the classic resize method.
 * 
 * 
 * Elastic resize operations have the following restrictions:
 * 
 * 
 * 
 * - You can only resize clusters of the following types:
 * 
 * 
 * 
 * - dc2.large
 * 
 * 
 * 
 * - dc2.8xlarge
 * 
 * 
 * 
 * - ra3.large
 * 
 * 
 * 
 * - ra3.xlplus
 * 
 * 
 * 
 * - ra3.4xlarge
 * 
 * 
 * 
 * - ra3.16xlarge
 * 
 * 
 * 
 * 
 * 
 * 
 * - The type of nodes that you add must match the node type for the
 * cluster.
 */export const resizeCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ResizeCluster" }, ResizeClusterMessage, ResizeClusterResult, [ClusterNotFoundFault, DependentServiceUnavailableFault, InsufficientClusterCapacityFault, InvalidClusterStateFault, InvalidReservedNodeStateFault, LimitExceededFault, NumberOfNodesPerClusterLimitExceededFault, NumberOfNodesQuotaExceededFault, ReservedNodeAlreadyExistsFault, ReservedNodeAlreadyMigratedFault, ReservedNodeNotFoundFault, ReservedNodeOfferingNotFoundFault, UnauthorizedOperation, UnsupportedOperationFault, UnsupportedOptionFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates an Amazon Redshift event notification subscription. This action requires an ARN
 * (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console,
 * the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you
 * must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in
 * the SNS console.
 * 
 * 
 * You can specify the source type, and lists of Amazon Redshift source IDs, event
 * categories, and event severities. Notifications will be sent for all events you want
 * that match those criteria. For example, you can specify source type = cluster, source ID
 * = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity =
 * ERROR. The subscription will only send notifications for those ERROR events in the
 * Availability and Backup categories for the specified clusters.
 * 
 * 
 * If you specify both the source type and source IDs, such as source type = cluster
 * and source identifier = my-cluster-1, notifications will be sent for all the cluster
 * events for my-cluster-1. If you specify a source type but do not specify a source
 * identifier, you will receive notice of the events for the objects of that type in your
 * Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you
 * will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.
 */export const createEventSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateEventSubscription" }, CreateEventSubscriptionMessage, CreateEventSubscriptionResult, [EventSubscriptionQuotaExceededFault, InvalidTagFault, SNSInvalidTopicFault, SNSNoAuthorizationFault, SNSTopicArnNotFoundFault, SourceNotFoundFault, SubscriptionAlreadyExistFault, SubscriptionCategoryNotFoundFault, SubscriptionEventIdNotFoundFault, SubscriptionSeverityNotFoundFault, TagLimitExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates an Amazon Redshift application for use with IAM Identity Center.
 */export const createRedshiftIdcApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateRedshiftIdcApplication" }, CreateRedshiftIdcApplicationMessage, CreateRedshiftIdcApplicationResult, [DependentServiceAccessDeniedFault, DependentServiceUnavailableFault, InvalidTagFault, RedshiftIdcApplicationAlreadyExistsFault, RedshiftIdcApplicationQuotaExceededFault, TagLimitExceededFault, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies an existing Amazon Redshift event notification subscription.
 */export const modifyEventSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.ModifyEventSubscription" }, ModifyEventSubscriptionMessage, ModifyEventSubscriptionResult, [InvalidSubscriptionStateFault, SNSInvalidTopicFault, SNSNoAuthorizationFault, SNSTopicArnNotFoundFault, SourceNotFoundFault, SubscriptionCategoryNotFoundFault, SubscriptionEventIdNotFoundFault, SubscriptionNotFoundFault, SubscriptionSeverityNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a Redshift-managed VPC endpoint.
 */export const createEndpointAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-12-01", uri: "/", method: "POST", sdkId: "Redshift", sigV4ServiceName: "redshift", name: "RedshiftServiceVersion20121201.CreateEndpointAccess" }, CreateEndpointAccessMessage, EndpointAccess, [AccessToClusterDeniedFault, ClusterNotFoundFault, ClusterSubnetGroupNotFoundFault, EndpointAlreadyExistsFault, EndpointsPerAuthorizationLimitExceededFault, EndpointsPerClusterLimitExceededFault, InvalidClusterSecurityGroupStateFault, InvalidClusterStateFault, UnauthorizedOperation, UnsupportedOperationFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);

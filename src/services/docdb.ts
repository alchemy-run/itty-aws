import * as S from "effect/Schema"
import { FormatAwsQueryRequest,FormatAwsQueryResponse,FormatAwsXMLError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const AvailabilityZones = S.Array(S.String);
export const VpcSecurityGroupIdList = S.Array(S.String);
export const LogTypeList = S.Array(S.String);
export const SubnetIdentifierList = S.Array(S.String);
export const EventCategoriesList = S.Array(S.String);
export const SourceIdsList = S.Array(S.String);
export const AttributeValueList = S.Array(S.String);
export const KeyList = S.Array(S.String);
export class AddSourceIdentifierToSubscriptionMessage extends S.Class<AddSourceIdentifierToSubscriptionMessage>("AddSourceIdentifierToSubscriptionMessage")({SubscriptionName: S.String, SourceIdentifier: S.String}) {}
export class ApplyPendingMaintenanceActionMessage extends S.Class<ApplyPendingMaintenanceActionMessage>("ApplyPendingMaintenanceActionMessage")({ResourceIdentifier: S.String, ApplyAction: S.String, OptInType: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class CopyDBClusterParameterGroupMessage extends S.Class<CopyDBClusterParameterGroupMessage>("CopyDBClusterParameterGroupMessage")({SourceDBClusterParameterGroupIdentifier: S.String, TargetDBClusterParameterGroupIdentifier: S.String, TargetDBClusterParameterGroupDescription: S.String, Tags: S.optional(TagList)}) {}
export class CopyDBClusterSnapshotMessage extends S.Class<CopyDBClusterSnapshotMessage>("CopyDBClusterSnapshotMessage")({SourceDBClusterSnapshotIdentifier: S.String, TargetDBClusterSnapshotIdentifier: S.String, KmsKeyId: S.optional(S.String), PreSignedUrl: S.optional(S.String), CopyTags: S.optional(S.Boolean), Tags: S.optional(TagList)}) {}
export class CreateDBClusterParameterGroupMessage extends S.Class<CreateDBClusterParameterGroupMessage>("CreateDBClusterParameterGroupMessage")({DBClusterParameterGroupName: S.String, DBParameterGroupFamily: S.String, Description: S.String, Tags: S.optional(TagList)}) {}
export class CreateDBClusterSnapshotMessage extends S.Class<CreateDBClusterSnapshotMessage>("CreateDBClusterSnapshotMessage")({DBClusterSnapshotIdentifier: S.String, DBClusterIdentifier: S.String, Tags: S.optional(TagList)}) {}
export class CreateDBInstanceMessage extends S.Class<CreateDBInstanceMessage>("CreateDBInstanceMessage")({DBInstanceIdentifier: S.String, DBInstanceClass: S.String, Engine: S.String, AvailabilityZone: S.optional(S.String), PreferredMaintenanceWindow: S.optional(S.String), AutoMinorVersionUpgrade: S.optional(S.Boolean), Tags: S.optional(TagList), DBClusterIdentifier: S.String, CopyTagsToSnapshot: S.optional(S.Boolean), PromotionTier: S.optional(S.Number), EnablePerformanceInsights: S.optional(S.Boolean), PerformanceInsightsKMSKeyId: S.optional(S.String), CACertificateIdentifier: S.optional(S.String)}) {}
export class CreateDBSubnetGroupMessage extends S.Class<CreateDBSubnetGroupMessage>("CreateDBSubnetGroupMessage")({DBSubnetGroupName: S.String, DBSubnetGroupDescription: S.String, SubnetIds: SubnetIdentifierList, Tags: S.optional(TagList)}) {}
export class CreateEventSubscriptionMessage extends S.Class<CreateEventSubscriptionMessage>("CreateEventSubscriptionMessage")({SubscriptionName: S.String, SnsTopicArn: S.String, SourceType: S.optional(S.String), EventCategories: S.optional(EventCategoriesList), SourceIds: S.optional(SourceIdsList), Enabled: S.optional(S.Boolean), Tags: S.optional(TagList)}) {}
export class CreateGlobalClusterMessage extends S.Class<CreateGlobalClusterMessage>("CreateGlobalClusterMessage")({GlobalClusterIdentifier: S.String, SourceDBClusterIdentifier: S.optional(S.String), Engine: S.optional(S.String), EngineVersion: S.optional(S.String), DeletionProtection: S.optional(S.Boolean), DatabaseName: S.optional(S.String), StorageEncrypted: S.optional(S.Boolean)}) {}
export class DeleteDBClusterMessage extends S.Class<DeleteDBClusterMessage>("DeleteDBClusterMessage")({DBClusterIdentifier: S.String, SkipFinalSnapshot: S.optional(S.Boolean), FinalDBSnapshotIdentifier: S.optional(S.String)}) {}
export class DeleteDBClusterParameterGroupMessage extends S.Class<DeleteDBClusterParameterGroupMessage>("DeleteDBClusterParameterGroupMessage")({DBClusterParameterGroupName: S.String}) {}
export class DeleteDBClusterSnapshotMessage extends S.Class<DeleteDBClusterSnapshotMessage>("DeleteDBClusterSnapshotMessage")({DBClusterSnapshotIdentifier: S.String}) {}
export class DeleteDBInstanceMessage extends S.Class<DeleteDBInstanceMessage>("DeleteDBInstanceMessage")({DBInstanceIdentifier: S.String}) {}
export class DeleteDBSubnetGroupMessage extends S.Class<DeleteDBSubnetGroupMessage>("DeleteDBSubnetGroupMessage")({DBSubnetGroupName: S.String}) {}
export class DeleteEventSubscriptionMessage extends S.Class<DeleteEventSubscriptionMessage>("DeleteEventSubscriptionMessage")({SubscriptionName: S.String}) {}
export class DeleteGlobalClusterMessage extends S.Class<DeleteGlobalClusterMessage>("DeleteGlobalClusterMessage")({GlobalClusterIdentifier: S.String}) {}
export const FilterValueList = S.Array(S.String);
export class Filter extends S.Class<Filter>("Filter")({Name: S.String, Values: FilterValueList}) {}
export const FilterList = S.Array(Filter);
export class DescribeDBClusterParameterGroupsMessage extends S.Class<DescribeDBClusterParameterGroupsMessage>("DescribeDBClusterParameterGroupsMessage")({DBClusterParameterGroupName: S.optional(S.String), Filters: S.optional(FilterList), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeDBClusterParametersMessage extends S.Class<DescribeDBClusterParametersMessage>("DescribeDBClusterParametersMessage")({DBClusterParameterGroupName: S.String, Source: S.optional(S.String), Filters: S.optional(FilterList), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeDBClustersMessage extends S.Class<DescribeDBClustersMessage>("DescribeDBClustersMessage")({DBClusterIdentifier: S.optional(S.String), Filters: S.optional(FilterList), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeDBClusterSnapshotAttributesMessage extends S.Class<DescribeDBClusterSnapshotAttributesMessage>("DescribeDBClusterSnapshotAttributesMessage")({DBClusterSnapshotIdentifier: S.String}) {}
export class DescribeDBClusterSnapshotsMessage extends S.Class<DescribeDBClusterSnapshotsMessage>("DescribeDBClusterSnapshotsMessage")({DBClusterIdentifier: S.optional(S.String), DBClusterSnapshotIdentifier: S.optional(S.String), SnapshotType: S.optional(S.String), Filters: S.optional(FilterList), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), IncludeShared: S.optional(S.Boolean), IncludePublic: S.optional(S.Boolean)}) {}
export class DescribeDBEngineVersionsMessage extends S.Class<DescribeDBEngineVersionsMessage>("DescribeDBEngineVersionsMessage")({Engine: S.optional(S.String), EngineVersion: S.optional(S.String), DBParameterGroupFamily: S.optional(S.String), Filters: S.optional(FilterList), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String), DefaultOnly: S.optional(S.Boolean), ListSupportedCharacterSets: S.optional(S.Boolean), ListSupportedTimezones: S.optional(S.Boolean)}) {}
export class DescribeDBInstancesMessage extends S.Class<DescribeDBInstancesMessage>("DescribeDBInstancesMessage")({DBInstanceIdentifier: S.optional(S.String), Filters: S.optional(FilterList), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeDBSubnetGroupsMessage extends S.Class<DescribeDBSubnetGroupsMessage>("DescribeDBSubnetGroupsMessage")({DBSubnetGroupName: S.optional(S.String), Filters: S.optional(FilterList), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeEngineDefaultClusterParametersMessage extends S.Class<DescribeEngineDefaultClusterParametersMessage>("DescribeEngineDefaultClusterParametersMessage")({DBParameterGroupFamily: S.String, Filters: S.optional(FilterList), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeEventCategoriesMessage extends S.Class<DescribeEventCategoriesMessage>("DescribeEventCategoriesMessage")({SourceType: S.optional(S.String), Filters: S.optional(FilterList)}) {}
export class DescribeEventsMessage extends S.Class<DescribeEventsMessage>("DescribeEventsMessage")({SourceIdentifier: S.optional(S.String), SourceType: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), Duration: S.optional(S.Number), EventCategories: S.optional(EventCategoriesList), Filters: S.optional(FilterList), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeEventSubscriptionsMessage extends S.Class<DescribeEventSubscriptionsMessage>("DescribeEventSubscriptionsMessage")({SubscriptionName: S.optional(S.String), Filters: S.optional(FilterList), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeGlobalClustersMessage extends S.Class<DescribeGlobalClustersMessage>("DescribeGlobalClustersMessage")({GlobalClusterIdentifier: S.optional(S.String), Filters: S.optional(FilterList), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeOrderableDBInstanceOptionsMessage extends S.Class<DescribeOrderableDBInstanceOptionsMessage>("DescribeOrderableDBInstanceOptionsMessage")({Engine: S.String, EngineVersion: S.optional(S.String), DBInstanceClass: S.optional(S.String), LicenseModel: S.optional(S.String), Vpc: S.optional(S.Boolean), Filters: S.optional(FilterList), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribePendingMaintenanceActionsMessage extends S.Class<DescribePendingMaintenanceActionsMessage>("DescribePendingMaintenanceActionsMessage")({ResourceIdentifier: S.optional(S.String), Filters: S.optional(FilterList), Marker: S.optional(S.String), MaxRecords: S.optional(S.Number)}) {}
export class FailoverDBClusterMessage extends S.Class<FailoverDBClusterMessage>("FailoverDBClusterMessage")({DBClusterIdentifier: S.optional(S.String), TargetDBInstanceIdentifier: S.optional(S.String)}) {}
export class FailoverGlobalClusterMessage extends S.Class<FailoverGlobalClusterMessage>("FailoverGlobalClusterMessage")({GlobalClusterIdentifier: S.String, TargetDbClusterIdentifier: S.String, AllowDataLoss: S.optional(S.Boolean), Switchover: S.optional(S.Boolean)}) {}
export class ListTagsForResourceMessage extends S.Class<ListTagsForResourceMessage>("ListTagsForResourceMessage")({ResourceName: S.String, Filters: S.optional(FilterList)}) {}
export class ModifyDBClusterSnapshotAttributeMessage extends S.Class<ModifyDBClusterSnapshotAttributeMessage>("ModifyDBClusterSnapshotAttributeMessage")({DBClusterSnapshotIdentifier: S.String, AttributeName: S.String, ValuesToAdd: S.optional(AttributeValueList), ValuesToRemove: S.optional(AttributeValueList)}) {}
export class ModifyDBInstanceMessage extends S.Class<ModifyDBInstanceMessage>("ModifyDBInstanceMessage")({DBInstanceIdentifier: S.String, DBInstanceClass: S.optional(S.String), ApplyImmediately: S.optional(S.Boolean), PreferredMaintenanceWindow: S.optional(S.String), AutoMinorVersionUpgrade: S.optional(S.Boolean), NewDBInstanceIdentifier: S.optional(S.String), CACertificateIdentifier: S.optional(S.String), CopyTagsToSnapshot: S.optional(S.Boolean), PromotionTier: S.optional(S.Number), EnablePerformanceInsights: S.optional(S.Boolean), PerformanceInsightsKMSKeyId: S.optional(S.String), CertificateRotationRestart: S.optional(S.Boolean)}) {}
export class ModifyDBSubnetGroupMessage extends S.Class<ModifyDBSubnetGroupMessage>("ModifyDBSubnetGroupMessage")({DBSubnetGroupName: S.String, DBSubnetGroupDescription: S.optional(S.String), SubnetIds: SubnetIdentifierList}) {}
export class ModifyEventSubscriptionMessage extends S.Class<ModifyEventSubscriptionMessage>("ModifyEventSubscriptionMessage")({SubscriptionName: S.String, SnsTopicArn: S.optional(S.String), SourceType: S.optional(S.String), EventCategories: S.optional(EventCategoriesList), Enabled: S.optional(S.Boolean)}) {}
export class ModifyGlobalClusterMessage extends S.Class<ModifyGlobalClusterMessage>("ModifyGlobalClusterMessage")({GlobalClusterIdentifier: S.String, NewGlobalClusterIdentifier: S.optional(S.String), DeletionProtection: S.optional(S.Boolean)}) {}
export class RebootDBInstanceMessage extends S.Class<RebootDBInstanceMessage>("RebootDBInstanceMessage")({DBInstanceIdentifier: S.String, ForceFailover: S.optional(S.Boolean)}) {}
export class RemoveFromGlobalClusterMessage extends S.Class<RemoveFromGlobalClusterMessage>("RemoveFromGlobalClusterMessage")({GlobalClusterIdentifier: S.String, DbClusterIdentifier: S.String}) {}
export class RemoveSourceIdentifierFromSubscriptionMessage extends S.Class<RemoveSourceIdentifierFromSubscriptionMessage>("RemoveSourceIdentifierFromSubscriptionMessage")({SubscriptionName: S.String, SourceIdentifier: S.String}) {}
export class RemoveTagsFromResourceMessage extends S.Class<RemoveTagsFromResourceMessage>("RemoveTagsFromResourceMessage")({ResourceName: S.String, TagKeys: KeyList}) {}
export class Parameter extends S.Class<Parameter>("Parameter")({ParameterName: S.optional(S.String), ParameterValue: S.optional(S.String), Description: S.optional(S.String), Source: S.optional(S.String), ApplyType: S.optional(S.String), DataType: S.optional(S.String), AllowedValues: S.optional(S.String), IsModifiable: S.optional(S.Boolean), MinimumEngineVersion: S.optional(S.String), ApplyMethod: S.optional(S.String)}) {}
export const ParametersList = S.Array(Parameter);
export class ResetDBClusterParameterGroupMessage extends S.Class<ResetDBClusterParameterGroupMessage>("ResetDBClusterParameterGroupMessage")({DBClusterParameterGroupName: S.String, ResetAllParameters: S.optional(S.Boolean), Parameters: S.optional(ParametersList)}) {}
export class ServerlessV2ScalingConfiguration extends S.Class<ServerlessV2ScalingConfiguration>("ServerlessV2ScalingConfiguration")({MinCapacity: S.optional(S.Number), MaxCapacity: S.optional(S.Number)}) {}
export class RestoreDBClusterFromSnapshotMessage extends S.Class<RestoreDBClusterFromSnapshotMessage>("RestoreDBClusterFromSnapshotMessage")({AvailabilityZones: S.optional(AvailabilityZones), DBClusterIdentifier: S.String, SnapshotIdentifier: S.String, Engine: S.String, EngineVersion: S.optional(S.String), Port: S.optional(S.Number), DBSubnetGroupName: S.optional(S.String), VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList), Tags: S.optional(TagList), KmsKeyId: S.optional(S.String), EnableCloudwatchLogsExports: S.optional(LogTypeList), DeletionProtection: S.optional(S.Boolean), DBClusterParameterGroupName: S.optional(S.String), ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfiguration), StorageType: S.optional(S.String), NetworkType: S.optional(S.String)}) {}
export class RestoreDBClusterToPointInTimeMessage extends S.Class<RestoreDBClusterToPointInTimeMessage>("RestoreDBClusterToPointInTimeMessage")({DBClusterIdentifier: S.String, RestoreType: S.optional(S.String), SourceDBClusterIdentifier: S.String, RestoreToTime: S.optional(S.Date), UseLatestRestorableTime: S.optional(S.Boolean), Port: S.optional(S.Number), DBSubnetGroupName: S.optional(S.String), VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList), Tags: S.optional(TagList), KmsKeyId: S.optional(S.String), EnableCloudwatchLogsExports: S.optional(LogTypeList), DeletionProtection: S.optional(S.Boolean), ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfiguration), StorageType: S.optional(S.String), NetworkType: S.optional(S.String)}) {}
export class StartDBClusterMessage extends S.Class<StartDBClusterMessage>("StartDBClusterMessage")({DBClusterIdentifier: S.String}) {}
export class StopDBClusterMessage extends S.Class<StopDBClusterMessage>("StopDBClusterMessage")({DBClusterIdentifier: S.String}) {}
export class SwitchoverGlobalClusterMessage extends S.Class<SwitchoverGlobalClusterMessage>("SwitchoverGlobalClusterMessage")({GlobalClusterIdentifier: S.String, TargetDbClusterIdentifier: S.String}) {}
export class DBClusterParameterGroup extends S.Class<DBClusterParameterGroup>("DBClusterParameterGroup")({DBClusterParameterGroupName: S.optional(S.String), DBParameterGroupFamily: S.optional(S.String), Description: S.optional(S.String), DBClusterParameterGroupArn: S.optional(S.String)}) {}
export const DBClusterParameterGroupList = S.Array(DBClusterParameterGroup);
export const ReadReplicaIdentifierList = S.Array(S.String);
export class DBClusterMember extends S.Class<DBClusterMember>("DBClusterMember")({DBInstanceIdentifier: S.optional(S.String), IsClusterWriter: S.optional(S.Boolean), DBClusterParameterGroupStatus: S.optional(S.String), PromotionTier: S.optional(S.Number)}) {}
export const DBClusterMemberList = S.Array(DBClusterMember);
export class VpcSecurityGroupMembership extends S.Class<VpcSecurityGroupMembership>("VpcSecurityGroupMembership")({VpcSecurityGroupId: S.optional(S.String), Status: S.optional(S.String)}) {}
export const VpcSecurityGroupMembershipList = S.Array(VpcSecurityGroupMembership);
export class DBClusterRole extends S.Class<DBClusterRole>("DBClusterRole")({RoleArn: S.optional(S.String), Status: S.optional(S.String)}) {}
export const DBClusterRoles = S.Array(DBClusterRole);
export class ServerlessV2ScalingConfigurationInfo extends S.Class<ServerlessV2ScalingConfigurationInfo>("ServerlessV2ScalingConfigurationInfo")({MinCapacity: S.optional(S.Number), MaxCapacity: S.optional(S.Number)}) {}
export class ClusterMasterUserSecret extends S.Class<ClusterMasterUserSecret>("ClusterMasterUserSecret")({SecretArn: S.optional(S.String), SecretStatus: S.optional(S.String), KmsKeyId: S.optional(S.String)}) {}
export class DBCluster extends S.Class<DBCluster>("DBCluster")({AvailabilityZones: S.optional(AvailabilityZones), BackupRetentionPeriod: S.optional(S.Number), DBClusterIdentifier: S.optional(S.String), DBClusterParameterGroup: S.optional(S.String), DBSubnetGroup: S.optional(S.String), Status: S.optional(S.String), PercentProgress: S.optional(S.String), EarliestRestorableTime: S.optional(S.Date), Endpoint: S.optional(S.String), ReaderEndpoint: S.optional(S.String), MultiAZ: S.optional(S.Boolean), Engine: S.optional(S.String), EngineVersion: S.optional(S.String), LatestRestorableTime: S.optional(S.Date), Port: S.optional(S.Number), MasterUsername: S.optional(S.String), PreferredBackupWindow: S.optional(S.String), PreferredMaintenanceWindow: S.optional(S.String), ReplicationSourceIdentifier: S.optional(S.String), ReadReplicaIdentifiers: S.optional(ReadReplicaIdentifierList), DBClusterMembers: S.optional(DBClusterMemberList), VpcSecurityGroups: S.optional(VpcSecurityGroupMembershipList), HostedZoneId: S.optional(S.String), StorageEncrypted: S.optional(S.Boolean), KmsKeyId: S.optional(S.String), DbClusterResourceId: S.optional(S.String), DBClusterArn: S.optional(S.String), AssociatedRoles: S.optional(DBClusterRoles), CloneGroupId: S.optional(S.String), ClusterCreateTime: S.optional(S.Date), EnabledCloudwatchLogsExports: S.optional(LogTypeList), DeletionProtection: S.optional(S.Boolean), IOOptimizedNextAllowedModificationTime: S.optional(S.Date), StorageType: S.optional(S.String), ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfigurationInfo), MasterUserSecret: S.optional(ClusterMasterUserSecret), NetworkType: S.optional(S.String)}) {}
export const DBClusterList = S.Array(DBCluster);
export class DBClusterSnapshot extends S.Class<DBClusterSnapshot>("DBClusterSnapshot")({AvailabilityZones: S.optional(AvailabilityZones), DBClusterSnapshotIdentifier: S.optional(S.String), DBClusterIdentifier: S.optional(S.String), SnapshotCreateTime: S.optional(S.Date), Engine: S.optional(S.String), Status: S.optional(S.String), Port: S.optional(S.Number), VpcId: S.optional(S.String), ClusterCreateTime: S.optional(S.Date), MasterUsername: S.optional(S.String), EngineVersion: S.optional(S.String), SnapshotType: S.optional(S.String), PercentProgress: S.optional(S.Number), StorageEncrypted: S.optional(S.Boolean), KmsKeyId: S.optional(S.String), DBClusterSnapshotArn: S.optional(S.String), SourceDBClusterSnapshotArn: S.optional(S.String), StorageType: S.optional(S.String)}) {}
export const DBClusterSnapshotList = S.Array(DBClusterSnapshot);
export class Endpoint extends S.Class<Endpoint>("Endpoint")({Address: S.optional(S.String), Port: S.optional(S.Number), HostedZoneId: S.optional(S.String)}) {}
export class AvailabilityZone extends S.Class<AvailabilityZone>("AvailabilityZone")({Name: S.optional(S.String)}) {}
export class Subnet extends S.Class<Subnet>("Subnet")({SubnetIdentifier: S.optional(S.String), SubnetAvailabilityZone: S.optional(AvailabilityZone), SubnetStatus: S.optional(S.String)}) {}
export const SubnetList = S.Array(Subnet);
export const NetworkTypeList = S.Array(S.String);
export class DBSubnetGroup extends S.Class<DBSubnetGroup>("DBSubnetGroup")({DBSubnetGroupName: S.optional(S.String), DBSubnetGroupDescription: S.optional(S.String), VpcId: S.optional(S.String), SubnetGroupStatus: S.optional(S.String), Subnets: S.optional(SubnetList), DBSubnetGroupArn: S.optional(S.String), SupportedNetworkTypes: S.optional(NetworkTypeList)}) {}
export class PendingCloudwatchLogsExports extends S.Class<PendingCloudwatchLogsExports>("PendingCloudwatchLogsExports")({LogTypesToEnable: S.optional(LogTypeList), LogTypesToDisable: S.optional(LogTypeList)}) {}
export class PendingModifiedValues extends S.Class<PendingModifiedValues>("PendingModifiedValues")({DBInstanceClass: S.optional(S.String), AllocatedStorage: S.optional(S.Number), MasterUserPassword: S.optional(S.String), Port: S.optional(S.Number), BackupRetentionPeriod: S.optional(S.Number), MultiAZ: S.optional(S.Boolean), EngineVersion: S.optional(S.String), LicenseModel: S.optional(S.String), Iops: S.optional(S.Number), DBInstanceIdentifier: S.optional(S.String), StorageType: S.optional(S.String), CACertificateIdentifier: S.optional(S.String), DBSubnetGroupName: S.optional(S.String), PendingCloudwatchLogsExports: S.optional(PendingCloudwatchLogsExports)}) {}
export class DBInstanceStatusInfo extends S.Class<DBInstanceStatusInfo>("DBInstanceStatusInfo")({StatusType: S.optional(S.String), Normal: S.optional(S.Boolean), Status: S.optional(S.String), Message: S.optional(S.String)}) {}
export const DBInstanceStatusInfoList = S.Array(DBInstanceStatusInfo);
export class CertificateDetails extends S.Class<CertificateDetails>("CertificateDetails")({CAIdentifier: S.optional(S.String), ValidTill: S.optional(S.Date)}) {}
export class DBInstance extends S.Class<DBInstance>("DBInstance")({DBInstanceIdentifier: S.optional(S.String), DBInstanceClass: S.optional(S.String), Engine: S.optional(S.String), DBInstanceStatus: S.optional(S.String), Endpoint: S.optional(Endpoint), InstanceCreateTime: S.optional(S.Date), PreferredBackupWindow: S.optional(S.String), BackupRetentionPeriod: S.optional(S.Number), VpcSecurityGroups: S.optional(VpcSecurityGroupMembershipList), AvailabilityZone: S.optional(S.String), DBSubnetGroup: S.optional(DBSubnetGroup), PreferredMaintenanceWindow: S.optional(S.String), PendingModifiedValues: S.optional(PendingModifiedValues), LatestRestorableTime: S.optional(S.Date), EngineVersion: S.optional(S.String), AutoMinorVersionUpgrade: S.optional(S.Boolean), PubliclyAccessible: S.optional(S.Boolean), StatusInfos: S.optional(DBInstanceStatusInfoList), DBClusterIdentifier: S.optional(S.String), StorageEncrypted: S.optional(S.Boolean), KmsKeyId: S.optional(S.String), DbiResourceId: S.optional(S.String), CACertificateIdentifier: S.optional(S.String), CopyTagsToSnapshot: S.optional(S.Boolean), PromotionTier: S.optional(S.Number), DBInstanceArn: S.optional(S.String), EnabledCloudwatchLogsExports: S.optional(LogTypeList), CertificateDetails: S.optional(CertificateDetails), PerformanceInsightsEnabled: S.optional(S.Boolean), PerformanceInsightsKMSKeyId: S.optional(S.String)}) {}
export const DBInstanceList = S.Array(DBInstance);
export const DBSubnetGroups = S.Array(DBSubnetGroup);
export class EventSubscription extends S.Class<EventSubscription>("EventSubscription")({CustomerAwsId: S.optional(S.String), CustSubscriptionId: S.optional(S.String), SnsTopicArn: S.optional(S.String), Status: S.optional(S.String), SubscriptionCreationTime: S.optional(S.String), SourceType: S.optional(S.String), SourceIdsList: S.optional(SourceIdsList), EventCategoriesList: S.optional(EventCategoriesList), Enabled: S.optional(S.Boolean), EventSubscriptionArn: S.optional(S.String)}) {}
export const EventSubscriptionsList = S.Array(EventSubscription);
export const ReadersArnList = S.Array(S.String);
export class GlobalClusterMember extends S.Class<GlobalClusterMember>("GlobalClusterMember")({DBClusterArn: S.optional(S.String), Readers: S.optional(ReadersArnList), IsWriter: S.optional(S.Boolean), SynchronizationStatus: S.optional(S.String)}) {}
export const GlobalClusterMemberList = S.Array(GlobalClusterMember);
export class FailoverState extends S.Class<FailoverState>("FailoverState")({Status: S.optional(S.String), FromDbClusterArn: S.optional(S.String), ToDbClusterArn: S.optional(S.String), IsDataLossAllowed: S.optional(S.Boolean)}) {}
export class GlobalCluster extends S.Class<GlobalCluster>("GlobalCluster")({GlobalClusterIdentifier: S.optional(S.String), GlobalClusterResourceId: S.optional(S.String), GlobalClusterArn: S.optional(S.String), Status: S.optional(S.String), Engine: S.optional(S.String), EngineVersion: S.optional(S.String), DatabaseName: S.optional(S.String), StorageEncrypted: S.optional(S.Boolean), DeletionProtection: S.optional(S.Boolean), GlobalClusterMembers: S.optional(GlobalClusterMemberList), FailoverState: S.optional(FailoverState), TagList: S.optional(TagList)}) {}
export const GlobalClusterList = S.Array(GlobalCluster);
export class PendingMaintenanceAction extends S.Class<PendingMaintenanceAction>("PendingMaintenanceAction")({Action: S.optional(S.String), AutoAppliedAfterDate: S.optional(S.Date), ForcedApplyDate: S.optional(S.Date), OptInStatus: S.optional(S.String), CurrentApplyDate: S.optional(S.Date), Description: S.optional(S.String)}) {}
export const PendingMaintenanceActionDetails = S.Array(PendingMaintenanceAction);
export class ResourcePendingMaintenanceActions extends S.Class<ResourcePendingMaintenanceActions>("ResourcePendingMaintenanceActions")({ResourceIdentifier: S.optional(S.String), PendingMaintenanceActionDetails: S.optional(PendingMaintenanceActionDetails)}) {}
export const PendingMaintenanceActions = S.Array(ResourcePendingMaintenanceActions);
export class CloudwatchLogsExportConfiguration extends S.Class<CloudwatchLogsExportConfiguration>("CloudwatchLogsExportConfiguration")({EnableLogTypes: S.optional(LogTypeList), DisableLogTypes: S.optional(LogTypeList)}) {}
export class AddTagsToResourceMessage extends S.Class<AddTagsToResourceMessage>("AddTagsToResourceMessage")({ResourceName: S.String, Tags: TagList}) {}
export class CreateDBClusterMessage extends S.Class<CreateDBClusterMessage>("CreateDBClusterMessage")({AvailabilityZones: S.optional(AvailabilityZones), BackupRetentionPeriod: S.optional(S.Number), DBClusterIdentifier: S.String, DBClusterParameterGroupName: S.optional(S.String), VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList), DBSubnetGroupName: S.optional(S.String), Engine: S.String, EngineVersion: S.optional(S.String), Port: S.optional(S.Number), MasterUsername: S.optional(S.String), MasterUserPassword: S.optional(S.String), PreferredBackupWindow: S.optional(S.String), PreferredMaintenanceWindow: S.optional(S.String), Tags: S.optional(TagList), StorageEncrypted: S.optional(S.Boolean), KmsKeyId: S.optional(S.String), PreSignedUrl: S.optional(S.String), EnableCloudwatchLogsExports: S.optional(LogTypeList), DeletionProtection: S.optional(S.Boolean), GlobalClusterIdentifier: S.optional(S.String), StorageType: S.optional(S.String), ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfiguration), ManageMasterUserPassword: S.optional(S.Boolean), MasterUserSecretKmsKeyId: S.optional(S.String), NetworkType: S.optional(S.String)}) {}
export class CreateDBClusterParameterGroupResult extends S.Class<CreateDBClusterParameterGroupResult>("CreateDBClusterParameterGroupResult")({DBClusterParameterGroup: S.optional(DBClusterParameterGroup)}) {}
export class CreateDBClusterSnapshotResult extends S.Class<CreateDBClusterSnapshotResult>("CreateDBClusterSnapshotResult")({DBClusterSnapshot: S.optional(DBClusterSnapshot)}) {}
export class CreateEventSubscriptionResult extends S.Class<CreateEventSubscriptionResult>("CreateEventSubscriptionResult")({EventSubscription: S.optional(EventSubscription)}) {}
export class DeleteDBClusterSnapshotResult extends S.Class<DeleteDBClusterSnapshotResult>("DeleteDBClusterSnapshotResult")({DBClusterSnapshot: S.optional(DBClusterSnapshot)}) {}
export class DeleteDBInstanceResult extends S.Class<DeleteDBInstanceResult>("DeleteDBInstanceResult")({DBInstance: S.optional(DBInstance)}) {}
export class DeleteEventSubscriptionResult extends S.Class<DeleteEventSubscriptionResult>("DeleteEventSubscriptionResult")({EventSubscription: S.optional(EventSubscription)}) {}
export class DeleteGlobalClusterResult extends S.Class<DeleteGlobalClusterResult>("DeleteGlobalClusterResult")({GlobalCluster: S.optional(GlobalCluster)}) {}
export class DescribeCertificatesMessage extends S.Class<DescribeCertificatesMessage>("DescribeCertificatesMessage")({CertificateIdentifier: S.optional(S.String), Filters: S.optional(FilterList), MaxRecords: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DBClusterParameterGroupsMessage extends S.Class<DBClusterParameterGroupsMessage>("DBClusterParameterGroupsMessage")({Marker: S.optional(S.String), DBClusterParameterGroups: S.optional(DBClusterParameterGroupList)}) {}
export class DBClusterParameterGroupDetails extends S.Class<DBClusterParameterGroupDetails>("DBClusterParameterGroupDetails")({Parameters: S.optional(ParametersList), Marker: S.optional(S.String)}) {}
export class DBClusterMessage extends S.Class<DBClusterMessage>("DBClusterMessage")({Marker: S.optional(S.String), DBClusters: S.optional(DBClusterList)}) {}
export class DBClusterSnapshotMessage extends S.Class<DBClusterSnapshotMessage>("DBClusterSnapshotMessage")({Marker: S.optional(S.String), DBClusterSnapshots: S.optional(DBClusterSnapshotList)}) {}
export class DBInstanceMessage extends S.Class<DBInstanceMessage>("DBInstanceMessage")({Marker: S.optional(S.String), DBInstances: S.optional(DBInstanceList)}) {}
export class DBSubnetGroupMessage extends S.Class<DBSubnetGroupMessage>("DBSubnetGroupMessage")({Marker: S.optional(S.String), DBSubnetGroups: S.optional(DBSubnetGroups)}) {}
export class EventSubscriptionsMessage extends S.Class<EventSubscriptionsMessage>("EventSubscriptionsMessage")({Marker: S.optional(S.String), EventSubscriptionsList: S.optional(EventSubscriptionsList)}) {}
export class GlobalClustersMessage extends S.Class<GlobalClustersMessage>("GlobalClustersMessage")({Marker: S.optional(S.String), GlobalClusters: S.optional(GlobalClusterList)}) {}
export class PendingMaintenanceActionsMessage extends S.Class<PendingMaintenanceActionsMessage>("PendingMaintenanceActionsMessage")({PendingMaintenanceActions: S.optional(PendingMaintenanceActions), Marker: S.optional(S.String)}) {}
export class FailoverDBClusterResult extends S.Class<FailoverDBClusterResult>("FailoverDBClusterResult")({DBCluster: S.optional(DBCluster)}) {}
export class FailoverGlobalClusterResult extends S.Class<FailoverGlobalClusterResult>("FailoverGlobalClusterResult")({GlobalCluster: S.optional(GlobalCluster)}) {}
export class TagListMessage extends S.Class<TagListMessage>("TagListMessage")({TagList: S.optional(TagList)}) {}
export class ModifyDBClusterMessage extends S.Class<ModifyDBClusterMessage>("ModifyDBClusterMessage")({DBClusterIdentifier: S.String, NewDBClusterIdentifier: S.optional(S.String), ApplyImmediately: S.optional(S.Boolean), BackupRetentionPeriod: S.optional(S.Number), DBClusterParameterGroupName: S.optional(S.String), VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList), Port: S.optional(S.Number), MasterUserPassword: S.optional(S.String), PreferredBackupWindow: S.optional(S.String), PreferredMaintenanceWindow: S.optional(S.String), CloudwatchLogsExportConfiguration: S.optional(CloudwatchLogsExportConfiguration), EngineVersion: S.optional(S.String), AllowMajorVersionUpgrade: S.optional(S.Boolean), DeletionProtection: S.optional(S.Boolean), StorageType: S.optional(S.String), ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfiguration), ManageMasterUserPassword: S.optional(S.Boolean), MasterUserSecretKmsKeyId: S.optional(S.String), RotateMasterUserPassword: S.optional(S.Boolean), NetworkType: S.optional(S.String)}) {}
export class ModifyDBClusterParameterGroupMessage extends S.Class<ModifyDBClusterParameterGroupMessage>("ModifyDBClusterParameterGroupMessage")({DBClusterParameterGroupName: S.String, Parameters: ParametersList}) {}
export class DBClusterSnapshotAttribute extends S.Class<DBClusterSnapshotAttribute>("DBClusterSnapshotAttribute")({AttributeName: S.optional(S.String), AttributeValues: S.optional(AttributeValueList)}) {}
export const DBClusterSnapshotAttributeList = S.Array(DBClusterSnapshotAttribute);
export class DBClusterSnapshotAttributesResult extends S.Class<DBClusterSnapshotAttributesResult>("DBClusterSnapshotAttributesResult")({DBClusterSnapshotIdentifier: S.optional(S.String), DBClusterSnapshotAttributes: S.optional(DBClusterSnapshotAttributeList)}) {}
export class ModifyDBClusterSnapshotAttributeResult extends S.Class<ModifyDBClusterSnapshotAttributeResult>("ModifyDBClusterSnapshotAttributeResult")({DBClusterSnapshotAttributesResult: S.optional(DBClusterSnapshotAttributesResult)}) {}
export class ModifyDBInstanceResult extends S.Class<ModifyDBInstanceResult>("ModifyDBInstanceResult")({DBInstance: S.optional(DBInstance)}) {}
export class ModifyDBSubnetGroupResult extends S.Class<ModifyDBSubnetGroupResult>("ModifyDBSubnetGroupResult")({DBSubnetGroup: S.optional(DBSubnetGroup)}) {}
export class ModifyEventSubscriptionResult extends S.Class<ModifyEventSubscriptionResult>("ModifyEventSubscriptionResult")({EventSubscription: S.optional(EventSubscription)}) {}
export class ModifyGlobalClusterResult extends S.Class<ModifyGlobalClusterResult>("ModifyGlobalClusterResult")({GlobalCluster: S.optional(GlobalCluster)}) {}
export class RebootDBInstanceResult extends S.Class<RebootDBInstanceResult>("RebootDBInstanceResult")({DBInstance: S.optional(DBInstance)}) {}
export class RemoveFromGlobalClusterResult extends S.Class<RemoveFromGlobalClusterResult>("RemoveFromGlobalClusterResult")({GlobalCluster: S.optional(GlobalCluster)}) {}
export class RemoveSourceIdentifierFromSubscriptionResult extends S.Class<RemoveSourceIdentifierFromSubscriptionResult>("RemoveSourceIdentifierFromSubscriptionResult")({EventSubscription: S.optional(EventSubscription)}) {}
export class DBClusterParameterGroupNameMessage extends S.Class<DBClusterParameterGroupNameMessage>("DBClusterParameterGroupNameMessage")({DBClusterParameterGroupName: S.optional(S.String)}) {}
export class RestoreDBClusterFromSnapshotResult extends S.Class<RestoreDBClusterFromSnapshotResult>("RestoreDBClusterFromSnapshotResult")({DBCluster: S.optional(DBCluster)}) {}
export class RestoreDBClusterToPointInTimeResult extends S.Class<RestoreDBClusterToPointInTimeResult>("RestoreDBClusterToPointInTimeResult")({DBCluster: S.optional(DBCluster)}) {}
export class StartDBClusterResult extends S.Class<StartDBClusterResult>("StartDBClusterResult")({DBCluster: S.optional(DBCluster)}) {}
export class StopDBClusterResult extends S.Class<StopDBClusterResult>("StopDBClusterResult")({DBCluster: S.optional(DBCluster)}) {}
export class SwitchoverGlobalClusterResult extends S.Class<SwitchoverGlobalClusterResult>("SwitchoverGlobalClusterResult")({GlobalCluster: S.optional(GlobalCluster)}) {}
export const CACertificateIdentifiersList = S.Array(S.String);
export class EngineDefaults extends S.Class<EngineDefaults>("EngineDefaults")({DBParameterGroupFamily: S.optional(S.String), Marker: S.optional(S.String), Parameters: S.optional(ParametersList)}) {}
export class EventCategoriesMap extends S.Class<EventCategoriesMap>("EventCategoriesMap")({SourceType: S.optional(S.String), EventCategories: S.optional(EventCategoriesList)}) {}
export const EventCategoriesMapList = S.Array(EventCategoriesMap);
export class Event extends S.Class<Event>("Event")({SourceIdentifier: S.optional(S.String), SourceType: S.optional(S.String), Message: S.optional(S.String), EventCategories: S.optional(EventCategoriesList), Date: S.optional(S.Date), SourceArn: S.optional(S.String)}) {}
export const EventList = S.Array(Event);
export class AddSourceIdentifierToSubscriptionResult extends S.Class<AddSourceIdentifierToSubscriptionResult>("AddSourceIdentifierToSubscriptionResult")({EventSubscription: S.optional(EventSubscription)}) {}
export class CopyDBClusterParameterGroupResult extends S.Class<CopyDBClusterParameterGroupResult>("CopyDBClusterParameterGroupResult")({DBClusterParameterGroup: S.optional(DBClusterParameterGroup)}) {}
export class CopyDBClusterSnapshotResult extends S.Class<CopyDBClusterSnapshotResult>("CopyDBClusterSnapshotResult")({DBClusterSnapshot: S.optional(DBClusterSnapshot)}) {}
export class CreateDBClusterResult extends S.Class<CreateDBClusterResult>("CreateDBClusterResult")({DBCluster: S.optional(DBCluster)}) {}
export class DescribeEngineDefaultClusterParametersResult extends S.Class<DescribeEngineDefaultClusterParametersResult>("DescribeEngineDefaultClusterParametersResult")({EngineDefaults: S.optional(EngineDefaults)}) {}
export class EventCategoriesMessage extends S.Class<EventCategoriesMessage>("EventCategoriesMessage")({EventCategoriesMapList: S.optional(EventCategoriesMapList)}) {}
export class EventsMessage extends S.Class<EventsMessage>("EventsMessage")({Marker: S.optional(S.String), Events: S.optional(EventList)}) {}
export class ModifyDBClusterResult extends S.Class<ModifyDBClusterResult>("ModifyDBClusterResult")({DBCluster: S.optional(DBCluster)}) {}
export class UpgradeTarget extends S.Class<UpgradeTarget>("UpgradeTarget")({Engine: S.optional(S.String), EngineVersion: S.optional(S.String), Description: S.optional(S.String), AutoUpgrade: S.optional(S.Boolean), IsMajorVersionUpgrade: S.optional(S.Boolean)}) {}
export const ValidUpgradeTargetList = S.Array(UpgradeTarget);
export class ServerlessV2FeaturesSupport extends S.Class<ServerlessV2FeaturesSupport>("ServerlessV2FeaturesSupport")({MinCapacity: S.optional(S.Number), MaxCapacity: S.optional(S.Number)}) {}
export const AvailabilityZoneList = S.Array(AvailabilityZone);
export class Certificate extends S.Class<Certificate>("Certificate")({CertificateIdentifier: S.optional(S.String), CertificateType: S.optional(S.String), Thumbprint: S.optional(S.String), ValidFrom: S.optional(S.Date), ValidTill: S.optional(S.Date), CertificateArn: S.optional(S.String)}) {}
export const CertificateList = S.Array(Certificate);
export class DBEngineVersion extends S.Class<DBEngineVersion>("DBEngineVersion")({Engine: S.optional(S.String), EngineVersion: S.optional(S.String), DBParameterGroupFamily: S.optional(S.String), DBEngineDescription: S.optional(S.String), DBEngineVersionDescription: S.optional(S.String), ValidUpgradeTarget: S.optional(ValidUpgradeTargetList), ExportableLogTypes: S.optional(LogTypeList), SupportsLogExportsToCloudwatchLogs: S.optional(S.Boolean), SupportedCACertificateIdentifiers: S.optional(CACertificateIdentifiersList), SupportsCertificateRotationWithoutRestart: S.optional(S.Boolean), ServerlessV2FeaturesSupport: S.optional(ServerlessV2FeaturesSupport)}) {}
export const DBEngineVersionList = S.Array(DBEngineVersion);
export class OrderableDBInstanceOption extends S.Class<OrderableDBInstanceOption>("OrderableDBInstanceOption")({Engine: S.optional(S.String), EngineVersion: S.optional(S.String), DBInstanceClass: S.optional(S.String), LicenseModel: S.optional(S.String), AvailabilityZones: S.optional(AvailabilityZoneList), Vpc: S.optional(S.Boolean), StorageType: S.optional(S.String)}) {}
export const OrderableDBInstanceOptionsList = S.Array(OrderableDBInstanceOption);
export class ApplyPendingMaintenanceActionResult extends S.Class<ApplyPendingMaintenanceActionResult>("ApplyPendingMaintenanceActionResult")({ResourcePendingMaintenanceActions: S.optional(ResourcePendingMaintenanceActions)}) {}
export class CreateDBSubnetGroupResult extends S.Class<CreateDBSubnetGroupResult>("CreateDBSubnetGroupResult")({DBSubnetGroup: S.optional(DBSubnetGroup)}) {}
export class CreateGlobalClusterResult extends S.Class<CreateGlobalClusterResult>("CreateGlobalClusterResult")({GlobalCluster: S.optional(GlobalCluster)}) {}
export class DeleteDBClusterResult extends S.Class<DeleteDBClusterResult>("DeleteDBClusterResult")({DBCluster: S.optional(DBCluster)}) {}
export class CertificateMessage extends S.Class<CertificateMessage>("CertificateMessage")({Certificates: S.optional(CertificateList), Marker: S.optional(S.String)}) {}
export class DescribeDBClusterSnapshotAttributesResult extends S.Class<DescribeDBClusterSnapshotAttributesResult>("DescribeDBClusterSnapshotAttributesResult")({DBClusterSnapshotAttributesResult: S.optional(DBClusterSnapshotAttributesResult)}) {}
export class DBEngineVersionMessage extends S.Class<DBEngineVersionMessage>("DBEngineVersionMessage")({Marker: S.optional(S.String), DBEngineVersions: S.optional(DBEngineVersionList)}) {}
export class OrderableDBInstanceOptionsMessage extends S.Class<OrderableDBInstanceOptionsMessage>("OrderableDBInstanceOptionsMessage")({OrderableDBInstanceOptions: S.optional(OrderableDBInstanceOptionsList), Marker: S.optional(S.String)}) {}
export class CreateDBInstanceResult extends S.Class<CreateDBInstanceResult>("CreateDBInstanceResult")({DBInstance: S.optional(DBInstance)}) {}

//# Errors
export class DBClusterNotFoundFault extends S.TaggedError<DBClusterNotFoundFault>()("DBClusterNotFoundFault", {}) {};
export class DBParameterGroupNotFoundFault extends S.TaggedError<DBParameterGroupNotFoundFault>()("DBParameterGroupNotFoundFault", {message: S.optional(S.String)}) {};
export class DBInstanceNotFoundFault extends S.TaggedError<DBInstanceNotFoundFault>()("DBInstanceNotFoundFault", {}) {};
export class DBSubnetGroupNotFoundFault extends S.TaggedError<DBSubnetGroupNotFoundFault>()("DBSubnetGroupNotFoundFault", {message: S.optional(S.String)}) {};
export class DBClusterSnapshotNotFoundFault extends S.TaggedError<DBClusterSnapshotNotFoundFault>()("DBClusterSnapshotNotFoundFault", {}) {};
export class GlobalClusterNotFoundFault extends S.TaggedError<GlobalClusterNotFoundFault>()("GlobalClusterNotFoundFault", {}) {};
export class InvalidDBClusterStateFault extends S.TaggedError<InvalidDBClusterStateFault>()("InvalidDBClusterStateFault", {}) {};
export class InvalidDBParameterGroupStateFault extends S.TaggedError<InvalidDBParameterGroupStateFault>()("InvalidDBParameterGroupStateFault", {}) {};
export class EventSubscriptionQuotaExceededFault extends S.TaggedError<EventSubscriptionQuotaExceededFault>()("EventSubscriptionQuotaExceededFault", {}) {};
export class InvalidGlobalClusterStateFault extends S.TaggedError<InvalidGlobalClusterStateFault>()("InvalidGlobalClusterStateFault", {}) {};
export class DBSnapshotNotFoundFault extends S.TaggedError<DBSnapshotNotFoundFault>()("DBSnapshotNotFoundFault", {}) {};
export class DBClusterAlreadyExistsFault extends S.TaggedError<DBClusterAlreadyExistsFault>()("DBClusterAlreadyExistsFault", {}) {};
export class InvalidDBInstanceStateFault extends S.TaggedError<InvalidDBInstanceStateFault>()("InvalidDBInstanceStateFault", {}) {};
export class SourceNotFoundFault extends S.TaggedError<SourceNotFoundFault>()("SourceNotFoundFault", {}) {};
export class SubscriptionNotFoundFault extends S.TaggedError<SubscriptionNotFoundFault>()("SubscriptionNotFoundFault", {}) {};
export class DBParameterGroupAlreadyExistsFault extends S.TaggedError<DBParameterGroupAlreadyExistsFault>()("DBParameterGroupAlreadyExistsFault", {}) {};
export class DBClusterSnapshotAlreadyExistsFault extends S.TaggedError<DBClusterSnapshotAlreadyExistsFault>()("DBClusterSnapshotAlreadyExistsFault", {}) {};
export class InvalidDBClusterSnapshotStateFault extends S.TaggedError<InvalidDBClusterSnapshotStateFault>()("InvalidDBClusterSnapshotStateFault", {}) {};
export class DBParameterGroupQuotaExceededFault extends S.TaggedError<DBParameterGroupQuotaExceededFault>()("DBParameterGroupQuotaExceededFault", {}) {};
export class SNSInvalidTopicFault extends S.TaggedError<SNSInvalidTopicFault>()("SNSInvalidTopicFault", {}) {};
export class DBSnapshotAlreadyExistsFault extends S.TaggedError<DBSnapshotAlreadyExistsFault>()("DBSnapshotAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class SnapshotQuotaExceededFault extends S.TaggedError<SnapshotQuotaExceededFault>()("SnapshotQuotaExceededFault", {}) {};
export class InvalidDBSubnetGroupStateFault extends S.TaggedError<InvalidDBSubnetGroupStateFault>()("InvalidDBSubnetGroupStateFault", {message: S.optional(S.String)}) {};
export class InvalidEventSubscriptionStateFault extends S.TaggedError<InvalidEventSubscriptionStateFault>()("InvalidEventSubscriptionStateFault", {message: S.optional(S.String)}) {};
export class ResourceNotFoundFault extends S.TaggedError<ResourceNotFoundFault>()("ResourceNotFoundFault", {message: S.optional(S.String)}) {};
export class DBClusterParameterGroupNotFoundFault extends S.TaggedError<DBClusterParameterGroupNotFoundFault>()("DBClusterParameterGroupNotFoundFault", {}) {};
export class AuthorizationNotFoundFault extends S.TaggedError<AuthorizationNotFoundFault>()("AuthorizationNotFoundFault", {message: S.optional(S.String)}) {};
export class DBSubnetGroupDoesNotCoverEnoughAZs extends S.TaggedError<DBSubnetGroupDoesNotCoverEnoughAZs>()("DBSubnetGroupDoesNotCoverEnoughAZs", {message: S.optional(S.String)}) {};
export class SNSNoAuthorizationFault extends S.TaggedError<SNSNoAuthorizationFault>()("SNSNoAuthorizationFault", {}) {};
export class DBClusterQuotaExceededFault extends S.TaggedError<DBClusterQuotaExceededFault>()("DBClusterQuotaExceededFault", {}) {};
export class InsufficientDBClusterCapacityFault extends S.TaggedError<InsufficientDBClusterCapacityFault>()("InsufficientDBClusterCapacityFault", {}) {};
export class KMSKeyNotAccessibleFault extends S.TaggedError<KMSKeyNotAccessibleFault>()("KMSKeyNotAccessibleFault", {message: S.optional(S.String)}) {};
export class InsufficientStorageClusterCapacityFault extends S.TaggedError<InsufficientStorageClusterCapacityFault>()("InsufficientStorageClusterCapacityFault", {}) {};
export class SNSTopicArnNotFoundFault extends S.TaggedError<SNSTopicArnNotFoundFault>()("SNSTopicArnNotFoundFault", {}) {};
export class InvalidDBSubnetStateFault extends S.TaggedError<InvalidDBSubnetStateFault>()("InvalidDBSubnetStateFault", {message: S.optional(S.String)}) {};
export class CertificateNotFoundFault extends S.TaggedError<CertificateNotFoundFault>()("CertificateNotFoundFault", {}) {};
export class InvalidDBSecurityGroupStateFault extends S.TaggedError<InvalidDBSecurityGroupStateFault>()("InvalidDBSecurityGroupStateFault", {message: S.optional(S.String)}) {};
export class InvalidSubnet extends S.TaggedError<InvalidSubnet>()("InvalidSubnet", {}) {};
export class SharedSnapshotQuotaExceededFault extends S.TaggedError<SharedSnapshotQuotaExceededFault>()("SharedSnapshotQuotaExceededFault", {message: S.optional(S.String)}) {};
export class DBSubnetQuotaExceededFault extends S.TaggedError<DBSubnetQuotaExceededFault>()("DBSubnetQuotaExceededFault", {message: S.optional(S.String)}) {};
export class InvalidDBSnapshotStateFault extends S.TaggedError<InvalidDBSnapshotStateFault>()("InvalidDBSnapshotStateFault", {}) {};
export class InvalidVPCNetworkStateFault extends S.TaggedError<InvalidVPCNetworkStateFault>()("InvalidVPCNetworkStateFault", {}) {};
export class DBInstanceAlreadyExistsFault extends S.TaggedError<DBInstanceAlreadyExistsFault>()("DBInstanceAlreadyExistsFault", {}) {};
export class DBSubnetGroupAlreadyExistsFault extends S.TaggedError<DBSubnetGroupAlreadyExistsFault>()("DBSubnetGroupAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class SubscriptionAlreadyExistFault extends S.TaggedError<SubscriptionAlreadyExistFault>()("SubscriptionAlreadyExistFault", {message: S.optional(S.String)}) {};
export class SubscriptionCategoryNotFoundFault extends S.TaggedError<SubscriptionCategoryNotFoundFault>()("SubscriptionCategoryNotFoundFault", {}) {};
export class GlobalClusterAlreadyExistsFault extends S.TaggedError<GlobalClusterAlreadyExistsFault>()("GlobalClusterAlreadyExistsFault", {message: S.optional(S.String)}) {};
export class NetworkTypeNotSupported extends S.TaggedError<NetworkTypeNotSupported>()("NetworkTypeNotSupported", {}) {};
export class DBSecurityGroupNotFoundFault extends S.TaggedError<DBSecurityGroupNotFoundFault>()("DBSecurityGroupNotFoundFault", {}) {};
export class SubnetAlreadyInUse extends S.TaggedError<SubnetAlreadyInUse>()("SubnetAlreadyInUse", {message: S.optional(S.String)}) {};
export class InvalidRestoreFault extends S.TaggedError<InvalidRestoreFault>()("InvalidRestoreFault", {}) {};
export class StorageQuotaExceededFault extends S.TaggedError<StorageQuotaExceededFault>()("StorageQuotaExceededFault", {}) {};
export class DBSubnetGroupQuotaExceededFault extends S.TaggedError<DBSubnetGroupQuotaExceededFault>()("DBSubnetGroupQuotaExceededFault", {message: S.optional(S.String)}) {};
export class GlobalClusterQuotaExceededFault extends S.TaggedError<GlobalClusterQuotaExceededFault>()("GlobalClusterQuotaExceededFault", {message: S.optional(S.String)}) {};
export class DBUpgradeDependencyFailureFault extends S.TaggedError<DBUpgradeDependencyFailureFault>()("DBUpgradeDependencyFailureFault", {message: S.optional(S.String)}) {};
export class InstanceQuotaExceededFault extends S.TaggedError<InstanceQuotaExceededFault>()("InstanceQuotaExceededFault", {message: S.optional(S.String)}) {};
export class InsufficientDBInstanceCapacityFault extends S.TaggedError<InsufficientDBInstanceCapacityFault>()("InsufficientDBInstanceCapacityFault", {}) {};
export class StorageTypeNotSupportedFault extends S.TaggedError<StorageTypeNotSupportedFault>()("StorageTypeNotSupportedFault", {}) {};

//# Operations
/**
 * Returns a list of `DBClusterParameterGroup` descriptions. If a `DBClusterParameterGroupName` parameter is specified, the list contains only the description of the specified cluster parameter group.
 */export const describeDBClusterParameterGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeDBClusterParameterGroups" }, DescribeDBClusterParameterGroupsMessage, DBClusterParameterGroupsMessage, [DBParameterGroupNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns the detailed parameter list for a particular cluster parameter
 * group.
 */export const describeDBClusterParameters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeDBClusterParameters" }, DescribeDBClusterParametersMessage, DBClusterParameterGroupDetails, [DBParameterGroupNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns information about provisioned Amazon DocumentDB clusters. This API
 * operation supports pagination. For certain management features
 * such as cluster and instance lifecycle management, Amazon DocumentDB leverages
 * operational technology that is shared with Amazon RDS and Amazon
 * Neptune. Use the `filterName=engine,Values=docdb` filter
 * parameter to return only Amazon DocumentDB clusters.
 */export const describeDBClusters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeDBClusters" }, DescribeDBClustersMessage, DBClusterMessage, [DBClusterNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns information about cluster snapshots. This API operation supports pagination.
 */export const describeDBClusterSnapshots = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeDBClusterSnapshots" }, DescribeDBClusterSnapshotsMessage, DBClusterSnapshotMessage, [DBClusterSnapshotNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.
 */export const describeDBInstances = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeDBInstances" }, DescribeDBInstancesMessage, DBInstanceMessage, [DBInstanceNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of `DBSubnetGroup` descriptions. If a
 * `DBSubnetGroupName` is specified, the list will contain only the descriptions of the specified `DBSubnetGroup`.
 */export const describeDBSubnetGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeDBSubnetGroups" }, DescribeDBSubnetGroupsMessage, DBSubnetGroupMessage, [DBSubnetGroupNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns information about Amazon DocumentDB global clusters. This API supports pagination.
 * 
 * This action only applies to Amazon DocumentDB clusters.
 */export const describeGlobalClusters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeGlobalClusters" }, DescribeGlobalClustersMessage, GlobalClustersMessage, [GlobalClusterNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the parameters of a cluster parameter group. To modify more than one
 * parameter, submit a list of the following: `ParameterName`,
 * `ParameterValue`, and `ApplyMethod`. A maximum of 20
 * parameters can be modified in a single request.
 * 
 * Changes to dynamic parameters are applied immediately. Changes to static
 * parameters require a reboot or maintenance window
 * 
 * before the change can take effect.
 * 
 * After you create a cluster parameter group, you should wait at least 5 minutes
 * before creating your first cluster that uses that cluster parameter group as
 * the default parameter group. This allows Amazon DocumentDB to fully complete the create action
 * before the parameter group is used as the default for a new cluster. This step is
 * especially important for parameters that are critical when creating the default
 * database for a cluster, such as the character set for the default database
 * defined by the `character_set_database` parameter.
 */export const modifyDBClusterParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.ModifyDBClusterParameterGroup" }, ModifyDBClusterParameterGroupMessage, DBClusterParameterGroupNameMessage, [DBParameterGroupNotFoundFault, InvalidDBParameterGroupStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.
 * 
 * This action only applies to Amazon DocumentDB clusters.
 */export const modifyGlobalCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.ModifyGlobalCluster" }, ModifyGlobalClusterMessage, ModifyGlobalClusterResult, [GlobalClusterNotFoundFault, InvalidGlobalClusterStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region.
 * 
 * This action only applies to Amazon DocumentDB clusters.
 */export const removeFromGlobalCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.RemoveFromGlobalCluster" }, RemoveFromGlobalClusterMessage, RemoveFromGlobalClusterResult, [DBClusterNotFoundFault, GlobalClusterNotFoundFault, InvalidGlobalClusterStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Removes metadata tags from an Amazon DocumentDB resource.
 */export const removeTagsFromResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.RemoveTagsFromResource" }, RemoveTagsFromResourceMessage, S.Struct({}), [DBClusterNotFoundFault, DBInstanceNotFoundFault, DBSnapshotNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies the parameters of a cluster parameter group to the default value. To
 * reset specific parameters, submit a list of the following: `ParameterName`
 * and `ApplyMethod`. To reset the entire cluster parameter group, specify
 * the `DBClusterParameterGroupName` and `ResetAllParameters`
 * parameters.
 * 
 * When you reset the entire group, dynamic parameters are updated immediately and
 * static parameters are set to `pending-reboot` to take effect on the next DB
 * instance reboot.
 */export const resetDBClusterParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.ResetDBClusterParameterGroup" }, ResetDBClusterParameterGroupMessage, DBClusterParameterGroupNameMessage, [DBParameterGroupNotFoundFault, InvalidDBParameterGroupStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Restarts the stopped cluster that is specified by `DBClusterIdentifier`.
 * For more information, see Stopping and
 * Starting an Amazon DocumentDB Cluster.
 */export const startDBCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.StartDBCluster" }, StartDBClusterMessage, StartDBClusterResult, [DBClusterNotFoundFault, InvalidDBClusterStateFault, InvalidDBInstanceStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Stops the running cluster that is specified by `DBClusterIdentifier`. The
 * cluster must be in the *available* state. For more information, see
 * Stopping and
 * Starting an Amazon DocumentDB Cluster.
 */export const stopDBCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.StopDBCluster" }, StopDBClusterMessage, StopDBClusterResult, [DBClusterNotFoundFault, InvalidDBClusterStateFault, InvalidDBInstanceStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Switches over the specified secondary Amazon DocumentDB cluster to be the new primary Amazon DocumentDB cluster in the global database cluster.
 */export const switchoverGlobalCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.SwitchoverGlobalCluster" }, SwitchoverGlobalClusterMessage, SwitchoverGlobalClusterResult, [DBClusterNotFoundFault, GlobalClusterNotFoundFault, InvalidDBClusterStateFault, InvalidGlobalClusterStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Adds a source identifier to an existing event notification
 * subscription.
 */export const addSourceIdentifierToSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.AddSourceIdentifierToSubscription" }, AddSourceIdentifierToSubscriptionMessage, AddSourceIdentifierToSubscriptionResult, [SourceNotFoundFault, SubscriptionNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Adds metadata tags to an Amazon DocumentDB resource. You can use these tags
 * with cost allocation reporting to track costs that are associated
 * with Amazon DocumentDB resources or in a `Condition` statement in
 * an Identity and Access Management (IAM) policy for Amazon DocumentDB.
 */export const addTagsToResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.AddTagsToResource" }, AddTagsToResourceMessage, S.Struct({}), [DBClusterNotFoundFault, DBInstanceNotFoundFault, DBSnapshotNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a new cluster parameter group.
 * 
 * Parameters in a cluster parameter group apply to all of the
 * instances in a cluster.
 * 
 * A cluster parameter group is initially created with the default
 * parameters for the database engine used by instances in the cluster.
 * In Amazon DocumentDB, you cannot make modifications directly to the
 * `default.docdb3.6` cluster parameter group. If your
 * Amazon DocumentDB cluster is using the default cluster parameter group and you
 * want to modify a value in it, you must first
 * create a new parameter group
 * or
 * copy an existing parameter group,
 * modify it, and then apply the modified parameter group to your
 * cluster. For the new cluster parameter group and associated settings
 * to take effect, you must then reboot the instances in the cluster
 * without failover. For more information,
 * see
 * Modifying Amazon DocumentDB Cluster Parameter Groups.
 */export const createDBClusterParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.CreateDBClusterParameterGroup" }, CreateDBClusterParameterGroupMessage, CreateDBClusterParameterGroupResult, [DBParameterGroupAlreadyExistsFault, DBParameterGroupQuotaExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
 */export const deleteDBClusterParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DeleteDBClusterParameterGroup" }, DeleteDBClusterParameterGroupMessage, S.Struct({}), [DBParameterGroupNotFoundFault, InvalidDBParameterGroupStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.
 * 
 * The cluster snapshot must be in the `available` state to be deleted.
 */export const deleteDBClusterSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DeleteDBClusterSnapshot" }, DeleteDBClusterSnapshotMessage, DeleteDBClusterSnapshotResult, [DBClusterSnapshotNotFoundFault, InvalidDBClusterSnapshotStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a previously provisioned instance.
 */export const deleteDBInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DeleteDBInstance" }, DeleteDBInstanceMessage, DeleteDBInstanceResult, [DBInstanceNotFoundFault, DBSnapshotAlreadyExistsFault, InvalidDBClusterStateFault, InvalidDBInstanceStateFault, SnapshotQuotaExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes an Amazon DocumentDB event notification subscription.
 */export const deleteEventSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DeleteEventSubscription" }, DeleteEventSubscriptionMessage, DeleteEventSubscriptionResult, [InvalidEventSubscriptionStateFault, SubscriptionNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.
 * 
 * This action only applies to Amazon DocumentDB clusters.
 */export const deleteGlobalCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DeleteGlobalCluster" }, DeleteGlobalClusterMessage, DeleteGlobalClusterResult, [GlobalClusterNotFoundFault, InvalidGlobalClusterStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns the default engine and system parameter information for the cluster database
 * engine.
 */export const describeEngineDefaultClusterParameters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeEngineDefaultClusterParameters" }, DescribeEngineDefaultClusterParametersMessage, DescribeEngineDefaultClusterParametersResult, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Displays a list of categories for all event source types, or, if specified, for a
 * specified source type.
 */export const describeEventCategories = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeEventCategories" }, DescribeEventCategoriesMessage, EventCategoriesMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.
 */export const describeEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeEvents" }, DescribeEventsMessage, EventsMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Lists all the subscription descriptions for a customer account. The description for a subscription includes `SubscriptionName`, `SNSTopicARN`, `CustomerID`, `SourceType`, `SourceID`, `CreationTime`, and `Status`.
 * 
 * If you specify a `SubscriptionName`, lists the description for that subscription.
 */export const describeEventSubscriptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeEventSubscriptions" }, DescribeEventSubscriptionsMessage, EventSubscriptionsMessage, [SubscriptionNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of resources (for example, instances) that have at least one pending
 * maintenance action.
 */export const describePendingMaintenanceActions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribePendingMaintenanceActions" }, DescribePendingMaintenanceActionsMessage, PendingMaintenanceActionsMessage, [ResourceNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Forces a failover for a cluster.
 * 
 * A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).
 * 
 * If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.
 */export const failoverDBCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.FailoverDBCluster" }, FailoverDBClusterMessage, FailoverDBClusterResult, [DBClusterNotFoundFault, InvalidDBClusterStateFault, InvalidDBInstanceStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Promotes the specified secondary DB cluster to be the primary DB cluster in the global cluster when failing over a global cluster occurs.
 * 
 * Use this operation to respond to an unplanned event, such as a regional disaster in the primary region.
 * Failing over can result in a loss of write transaction data that wasn't replicated to the chosen secondary before the failover event occurred.
 * However, the recovery process that promotes a DB instance on the chosen seconday DB cluster to be the primary writer DB instance guarantees that the data is in a transactionally consistent state.
 */export const failoverGlobalCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.FailoverGlobalCluster" }, FailoverGlobalClusterMessage, FailoverGlobalClusterResult, [DBClusterNotFoundFault, GlobalClusterNotFoundFault, InvalidDBClusterStateFault, InvalidGlobalClusterStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Lists all tags on an Amazon DocumentDB resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.ListTagsForResource" }, ListTagsForResourceMessage, TagListMessage, [DBClusterNotFoundFault, DBInstanceNotFoundFault, DBSnapshotNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * You might need to reboot your instance, usually for maintenance reasons. For
 * example, if you make certain changes, or if you change the cluster parameter group
 * that is associated with the instance, you must reboot the instance for the changes to
 * take effect.
 * 
 * Rebooting an instance restarts the database engine service. Rebooting an instance
 * results in a momentary outage, during which the instance status is set to
 * *rebooting*.
 */export const rebootDBInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.RebootDBInstance" }, RebootDBInstanceMessage, RebootDBInstanceResult, [DBInstanceNotFoundFault, InvalidDBInstanceStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Removes a source identifier from an existing Amazon DocumentDB event notification
 * subscription.
 */export const removeSourceIdentifierFromSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.RemoveSourceIdentifierFromSubscription" }, RemoveSourceIdentifierFromSubscriptionMessage, RemoveSourceIdentifierFromSubscriptionResult, [SourceNotFoundFault, SubscriptionNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Applies a pending maintenance action to a resource (for example,
 * to an Amazon DocumentDB instance).
 */export const applyPendingMaintenanceAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.ApplyPendingMaintenanceAction" }, ApplyPendingMaintenanceActionMessage, ApplyPendingMaintenanceActionResult, [InvalidDBClusterStateFault, InvalidDBInstanceStateFault, ResourceNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Copies the specified cluster parameter group.
 */export const copyDBClusterParameterGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.CopyDBClusterParameterGroup" }, CopyDBClusterParameterGroupMessage, CopyDBClusterParameterGroupResult, [DBParameterGroupAlreadyExistsFault, DBParameterGroupNotFoundFault, DBParameterGroupQuotaExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Copies a snapshot of a cluster.
 * 
 * To copy a cluster snapshot from a shared manual cluster snapshot,
 * `SourceDBClusterSnapshotIdentifier` must be the Amazon
 * Resource Name (ARN) of the shared cluster snapshot. You can only
 * copy a shared DB cluster snapshot, whether encrypted or not, in the
 * same Amazon Web Services Region.
 * 
 * To cancel the copy operation after it is in progress, delete the
 * target cluster snapshot identified by
 * `TargetDBClusterSnapshotIdentifier` while that cluster
 * snapshot is in the *copying* status.
 */export const copyDBClusterSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.CopyDBClusterSnapshot" }, CopyDBClusterSnapshotMessage, CopyDBClusterSnapshotResult, [DBClusterSnapshotAlreadyExistsFault, DBClusterSnapshotNotFoundFault, InvalidDBClusterSnapshotStateFault, InvalidDBClusterStateFault, KMSKeyNotAccessibleFault, SnapshotQuotaExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a snapshot of a cluster.
 */export const createDBClusterSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.CreateDBClusterSnapshot" }, CreateDBClusterSnapshotMessage, CreateDBClusterSnapshotResult, [DBClusterNotFoundFault, DBClusterSnapshotAlreadyExistsFault, InvalidDBClusterSnapshotStateFault, InvalidDBClusterStateFault, SnapshotQuotaExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.
 */export const deleteDBCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DeleteDBCluster" }, DeleteDBClusterMessage, DeleteDBClusterResult, [DBClusterNotFoundFault, DBClusterSnapshotAlreadyExistsFault, InvalidDBClusterSnapshotStateFault, InvalidDBClusterStateFault, SnapshotQuotaExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a subnet group.
 * 
 * The specified database subnet group must not be associated with any DB
 * instances.
 */export const deleteDBSubnetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DeleteDBSubnetGroup" }, DeleteDBSubnetGroupMessage, S.Struct({}), [DBSubnetGroupNotFoundFault, InvalidDBSubnetGroupStateFault, InvalidDBSubnetStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.
 */export const describeCertificates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeCertificates" }, DescribeCertificatesMessage, CertificateMessage, [CertificateNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of cluster snapshot attribute names and values for a manual DB
 * cluster snapshot.
 * 
 * When you share snapshots with other Amazon Web Services accounts,
 * `DescribeDBClusterSnapshotAttributes` returns the `restore` attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If `all` is included in the list of values for the `restore` attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.
 */export const describeDBClusterSnapshotAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeDBClusterSnapshotAttributes" }, DescribeDBClusterSnapshotAttributesMessage, DescribeDBClusterSnapshotAttributesResult, [DBClusterSnapshotNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of the available engines.
 */export const describeDBEngineVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeDBEngineVersions" }, DescribeDBEngineVersionsMessage, DBEngineVersionMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of orderable instance options for the specified engine.
 */export const describeOrderableDBInstanceOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.DescribeOrderableDBInstanceOptions" }, DescribeOrderableDBInstanceOptionsMessage, OrderableDBInstanceOptionsMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.
 * 
 * To share a manual cluster snapshot with other Amazon Web Services accounts, specify `restore` as the `AttributeName`, and use the `ValuesToAdd` parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value `all` to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the `all` value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the `ValuesToAdd` parameter. You can't use `all` as a value for that parameter in this case.
 */export const modifyDBClusterSnapshotAttribute = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.ModifyDBClusterSnapshotAttribute" }, ModifyDBClusterSnapshotAttributeMessage, ModifyDBClusterSnapshotAttributeResult, [DBClusterSnapshotNotFoundFault, InvalidDBClusterSnapshotStateFault, SharedSnapshotQuotaExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.
 * 
 * You can specify the type of source (`SourceType`) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (`SourceIds`) that trigger the events, and you can provide a list of event categories (`EventCategories`) for events that you want to be notified of. For example, you can specify `SourceType = db-instance`, `SourceIds = mydbinstance1, mydbinstance2` and `EventCategories = Availability, Backup`.
 * 
 * If you specify both the `SourceType` and `SourceIds` (such as `SourceType = db-instance` and `SourceIdentifier = myDBInstance1`), you are notified of all the `db-instance` events for the specified source. If you specify a `SourceType` but do not specify a `SourceIdentifier`, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the `SourceType` or the `SourceIdentifier`, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.
 */export const createEventSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.CreateEventSubscription" }, CreateEventSubscriptionMessage, CreateEventSubscriptionResult, [EventSubscriptionQuotaExceededFault, SNSInvalidTopicFault, SNSNoAuthorizationFault, SNSTopicArnNotFoundFault, SourceNotFoundFault, SubscriptionAlreadyExistFault, SubscriptionCategoryNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.
 */export const modifyDBSubnetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.ModifyDBSubnetGroup" }, ModifyDBSubnetGroupMessage, ModifyDBSubnetGroupResult, [DBSubnetGroupDoesNotCoverEnoughAZs, DBSubnetGroupNotFoundFault, DBSubnetQuotaExceededFault, InvalidSubnet, SubnetAlreadyInUse]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies an existing Amazon DocumentDB event notification subscription.
 */export const modifyEventSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.ModifyEventSubscription" }, ModifyEventSubscriptionMessage, ModifyEventSubscriptionResult, [EventSubscriptionQuotaExceededFault, SNSInvalidTopicFault, SNSNoAuthorizationFault, SNSTopicArnNotFoundFault, SubscriptionCategoryNotFoundFault, SubscriptionNotFoundFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a new cluster from a snapshot or cluster snapshot.
 * 
 * If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.
 * 
 * If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.
 */export const restoreDBClusterFromSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.RestoreDBClusterFromSnapshot" }, RestoreDBClusterFromSnapshotMessage, RestoreDBClusterFromSnapshotResult, [DBClusterAlreadyExistsFault, DBClusterQuotaExceededFault, DBClusterSnapshotNotFoundFault, DBSnapshotNotFoundFault, DBSubnetGroupNotFoundFault, InsufficientDBClusterCapacityFault, InsufficientStorageClusterCapacityFault, InvalidDBClusterSnapshotStateFault, InvalidDBSnapshotStateFault, InvalidRestoreFault, InvalidSubnet, InvalidVPCNetworkStateFault, KMSKeyNotAccessibleFault, NetworkTypeNotSupported, StorageQuotaExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Restores a cluster to an arbitrary point in time. Users can restore to any point in
 * time before `LatestRestorableTime` for up to
 * `BackupRetentionPeriod` days. The target cluster is created from the
 * source cluster with the same configuration as the original cluster, except that
 * the new cluster is created with the default security group.
 */export const restoreDBClusterToPointInTime = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.RestoreDBClusterToPointInTime" }, RestoreDBClusterToPointInTimeMessage, RestoreDBClusterToPointInTimeResult, [DBClusterAlreadyExistsFault, DBClusterNotFoundFault, DBClusterQuotaExceededFault, DBClusterSnapshotNotFoundFault, DBSubnetGroupNotFoundFault, InsufficientDBClusterCapacityFault, InsufficientStorageClusterCapacityFault, InvalidDBClusterSnapshotStateFault, InvalidDBClusterStateFault, InvalidDBSnapshotStateFault, InvalidRestoreFault, InvalidSubnet, InvalidVPCNetworkStateFault, KMSKeyNotAccessibleFault, NetworkTypeNotSupported, StorageQuotaExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a new Amazon DocumentDB cluster.
 */export const createDBCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.CreateDBCluster" }, CreateDBClusterMessage, CreateDBClusterResult, [DBClusterAlreadyExistsFault, DBClusterNotFoundFault, DBClusterParameterGroupNotFoundFault, DBClusterQuotaExceededFault, DBInstanceNotFoundFault, DBSubnetGroupDoesNotCoverEnoughAZs, DBSubnetGroupNotFoundFault, GlobalClusterNotFoundFault, InsufficientStorageClusterCapacityFault, InvalidDBClusterStateFault, InvalidDBInstanceStateFault, InvalidDBSubnetGroupStateFault, InvalidGlobalClusterStateFault, InvalidSubnet, InvalidVPCNetworkStateFault, KMSKeyNotAccessibleFault, NetworkTypeNotSupported, StorageQuotaExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a new subnet group. subnet groups must contain at least one subnet in at
 * least two Availability Zones in the Amazon Web Services Region.
 */export const createDBSubnetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.CreateDBSubnetGroup" }, CreateDBSubnetGroupMessage, CreateDBSubnetGroupResult, [DBSubnetGroupAlreadyExistsFault, DBSubnetGroupDoesNotCoverEnoughAZs, DBSubnetGroupQuotaExceededFault, DBSubnetQuotaExceededFault, InvalidSubnet]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions.
 * The global cluster contains one primary cluster with read-write capability, and up-to 10 read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.
 * 
 * You can create a global cluster that is initially empty, and then add a primary and a secondary to it.
 * Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster.
 * 
 * This action only applies to Amazon DocumentDB clusters.
 */export const createGlobalCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.CreateGlobalCluster" }, CreateGlobalClusterMessage, CreateGlobalClusterResult, [DBClusterNotFoundFault, GlobalClusterAlreadyExistsFault, GlobalClusterQuotaExceededFault, InvalidDBClusterStateFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database
 * configuration parameters by specifying these parameters and the new values in the
 * request.
 */export const modifyDBCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.ModifyDBCluster" }, ModifyDBClusterMessage, ModifyDBClusterResult, [DBClusterAlreadyExistsFault, DBClusterNotFoundFault, DBClusterParameterGroupNotFoundFault, DBSubnetGroupNotFoundFault, InvalidDBClusterStateFault, InvalidDBInstanceStateFault, InvalidDBSecurityGroupStateFault, InvalidDBSubnetGroupStateFault, InvalidSubnet, InvalidVPCNetworkStateFault, NetworkTypeNotSupported, StorageQuotaExceededFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
 */export const modifyDBInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.ModifyDBInstance" }, ModifyDBInstanceMessage, ModifyDBInstanceResult, [AuthorizationNotFoundFault, CertificateNotFoundFault, DBInstanceAlreadyExistsFault, DBInstanceNotFoundFault, DBParameterGroupNotFoundFault, DBSecurityGroupNotFoundFault, DBUpgradeDependencyFailureFault, InsufficientDBInstanceCapacityFault, InvalidDBInstanceStateFault, InvalidDBSecurityGroupStateFault, InvalidVPCNetworkStateFault, StorageQuotaExceededFault, StorageTypeNotSupportedFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a new instance.
 */export const createDBInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-10-31", sdkId: "DocDB", sigV4ServiceName: "rds", name: "AmazonRDSv19.CreateDBInstance" }, CreateDBInstanceMessage, CreateDBInstanceResult, [AuthorizationNotFoundFault, DBClusterNotFoundFault, DBInstanceAlreadyExistsFault, DBParameterGroupNotFoundFault, DBSecurityGroupNotFoundFault, DBSubnetGroupDoesNotCoverEnoughAZs, DBSubnetGroupNotFoundFault, InstanceQuotaExceededFault, InsufficientDBInstanceCapacityFault, InvalidDBClusterStateFault, InvalidSubnet, InvalidVPCNetworkStateFault, KMSKeyNotAccessibleFault, StorageQuotaExceededFault, StorageTypeNotSupportedFault]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);

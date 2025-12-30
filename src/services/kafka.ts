import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const __listOf__string = S.Array(S.String);
export class BatchAssociateScramSecretRequest extends S.Class<BatchAssociateScramSecretRequest>("BatchAssociateScramSecretRequest")({ClusterArn: S.String, SecretArnList: __listOf__string}) {}
export class BatchDisassociateScramSecretRequest extends S.Class<BatchDisassociateScramSecretRequest>("BatchDisassociateScramSecretRequest")({ClusterArn: S.String, SecretArnList: __listOf__string}) {}
export class CreateConfigurationRequest extends S.Class<CreateConfigurationRequest>("CreateConfigurationRequest")({Description: S.optional(S.String), KafkaVersions: S.optional(__listOf__string), Name: S.String, ServerProperties: H.StreamBody()}) {}
export const __mapOf__string = S.Record({key: S.String, value: S.String});
export class CreateVpcConnectionRequest extends S.Class<CreateVpcConnectionRequest>("CreateVpcConnectionRequest")({TargetClusterArn: S.String, Authentication: S.String, VpcId: S.String, ClientSubnets: __listOf__string, SecurityGroups: __listOf__string, Tags: S.optional(__mapOf__string)}) {}
export class DeleteClusterRequest extends S.Class<DeleteClusterRequest>("DeleteClusterRequest")({ClusterArn: S.String, CurrentVersion: S.optional(S.String)}) {}
export class DeleteClusterPolicyRequest extends S.Class<DeleteClusterPolicyRequest>("DeleteClusterPolicyRequest")({ClusterArn: S.String}) {}
export class DeleteClusterPolicyResponse extends S.Class<DeleteClusterPolicyResponse>("DeleteClusterPolicyResponse")({}) {}
export class DeleteConfigurationRequest extends S.Class<DeleteConfigurationRequest>("DeleteConfigurationRequest")({Arn: S.String}) {}
export class DeleteReplicatorRequest extends S.Class<DeleteReplicatorRequest>("DeleteReplicatorRequest")({CurrentVersion: S.optional(S.String), ReplicatorArn: S.String}) {}
export class DeleteVpcConnectionRequest extends S.Class<DeleteVpcConnectionRequest>("DeleteVpcConnectionRequest")({Arn: S.String}) {}
export class DescribeClusterRequest extends S.Class<DescribeClusterRequest>("DescribeClusterRequest")({ClusterArn: S.String}) {}
export class DescribeClusterOperationRequest extends S.Class<DescribeClusterOperationRequest>("DescribeClusterOperationRequest")({ClusterOperationArn: S.String}) {}
export class DescribeClusterOperationV2Request extends S.Class<DescribeClusterOperationV2Request>("DescribeClusterOperationV2Request")({ClusterOperationArn: S.String}) {}
export class DescribeClusterV2Request extends S.Class<DescribeClusterV2Request>("DescribeClusterV2Request")({ClusterArn: S.String}) {}
export class DescribeConfigurationRequest extends S.Class<DescribeConfigurationRequest>("DescribeConfigurationRequest")({Arn: S.String}) {}
export class DescribeConfigurationRevisionRequest extends S.Class<DescribeConfigurationRevisionRequest>("DescribeConfigurationRevisionRequest")({Arn: S.String, Revision: S.Number}) {}
export class DescribeReplicatorRequest extends S.Class<DescribeReplicatorRequest>("DescribeReplicatorRequest")({ReplicatorArn: S.String}) {}
export class DescribeTopicRequest extends S.Class<DescribeTopicRequest>("DescribeTopicRequest")({ClusterArn: S.String, TopicName: S.String}) {}
export class DescribeTopicPartitionsRequest extends S.Class<DescribeTopicPartitionsRequest>("DescribeTopicPartitionsRequest")({ClusterArn: S.String, TopicName: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeVpcConnectionRequest extends S.Class<DescribeVpcConnectionRequest>("DescribeVpcConnectionRequest")({Arn: S.String}) {}
export class GetBootstrapBrokersRequest extends S.Class<GetBootstrapBrokersRequest>("GetBootstrapBrokersRequest")({ClusterArn: S.String}) {}
export class GetClusterPolicyRequest extends S.Class<GetClusterPolicyRequest>("GetClusterPolicyRequest")({ClusterArn: S.String}) {}
export class GetCompatibleKafkaVersionsRequest extends S.Class<GetCompatibleKafkaVersionsRequest>("GetCompatibleKafkaVersionsRequest")({ClusterArn: S.optional(S.String)}) {}
export class ListClientVpcConnectionsRequest extends S.Class<ListClientVpcConnectionsRequest>("ListClientVpcConnectionsRequest")({ClusterArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListClusterOperationsRequest extends S.Class<ListClusterOperationsRequest>("ListClusterOperationsRequest")({ClusterArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListClusterOperationsV2Request extends S.Class<ListClusterOperationsV2Request>("ListClusterOperationsV2Request")({ClusterArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListClustersRequest extends S.Class<ListClustersRequest>("ListClustersRequest")({ClusterNameFilter: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListClustersV2Request extends S.Class<ListClustersV2Request>("ListClustersV2Request")({ClusterNameFilter: S.optional(S.String), ClusterTypeFilter: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListConfigurationRevisionsRequest extends S.Class<ListConfigurationRevisionsRequest>("ListConfigurationRevisionsRequest")({Arn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListConfigurationsRequest extends S.Class<ListConfigurationsRequest>("ListConfigurationsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListKafkaVersionsRequest extends S.Class<ListKafkaVersionsRequest>("ListKafkaVersionsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListNodesRequest extends S.Class<ListNodesRequest>("ListNodesRequest")({ClusterArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListReplicatorsRequest extends S.Class<ListReplicatorsRequest>("ListReplicatorsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ReplicatorNameFilter: S.optional(S.String)}) {}
export class ListScramSecretsRequest extends S.Class<ListScramSecretsRequest>("ListScramSecretsRequest")({ClusterArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class ListTopicsRequest extends S.Class<ListTopicsRequest>("ListTopicsRequest")({ClusterArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), TopicNameFilter: S.optional(S.String)}) {}
export class ListVpcConnectionsRequest extends S.Class<ListVpcConnectionsRequest>("ListVpcConnectionsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class PutClusterPolicyRequest extends S.Class<PutClusterPolicyRequest>("PutClusterPolicyRequest")({ClusterArn: S.String, CurrentVersion: S.optional(S.String), Policy: S.String}) {}
export class RebootBrokerRequest extends S.Class<RebootBrokerRequest>("RebootBrokerRequest")({BrokerIds: __listOf__string, ClusterArn: S.String}) {}
export class RejectClientVpcConnectionRequest extends S.Class<RejectClientVpcConnectionRequest>("RejectClientVpcConnectionRequest")({ClusterArn: S.String, VpcConnectionArn: S.String}) {}
export class RejectClientVpcConnectionResponse extends S.Class<RejectClientVpcConnectionResponse>("RejectClientVpcConnectionResponse")({}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: __mapOf__string}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: __listOf__string}) {}
export class UpdateBrokerCountRequest extends S.Class<UpdateBrokerCountRequest>("UpdateBrokerCountRequest")({ClusterArn: S.String, CurrentVersion: S.String, TargetNumberOfBrokerNodes: S.Number}) {}
export class UpdateBrokerTypeRequest extends S.Class<UpdateBrokerTypeRequest>("UpdateBrokerTypeRequest")({ClusterArn: S.String, CurrentVersion: S.String, TargetInstanceType: S.String}) {}
export class ConfigurationInfo extends S.Class<ConfigurationInfo>("ConfigurationInfo")({Arn: S.String, Revision: S.Number}) {}
export class UpdateClusterConfigurationRequest extends S.Class<UpdateClusterConfigurationRequest>("UpdateClusterConfigurationRequest")({ClusterArn: S.String, ConfigurationInfo: ConfigurationInfo, CurrentVersion: S.String}) {}
export class UpdateClusterKafkaVersionRequest extends S.Class<UpdateClusterKafkaVersionRequest>("UpdateClusterKafkaVersionRequest")({ClusterArn: S.String, ConfigurationInfo: S.optional(ConfigurationInfo), CurrentVersion: S.String, TargetKafkaVersion: S.String}) {}
export class UpdateConfigurationRequest extends S.Class<UpdateConfigurationRequest>("UpdateConfigurationRequest")({Arn: S.String, Description: S.optional(S.String), ServerProperties: H.StreamBody()}) {}
export class JmxExporterInfo extends S.Class<JmxExporterInfo>("JmxExporterInfo")({EnabledInBroker: S.Boolean}) {}
export class NodeExporterInfo extends S.Class<NodeExporterInfo>("NodeExporterInfo")({EnabledInBroker: S.Boolean}) {}
export class PrometheusInfo extends S.Class<PrometheusInfo>("PrometheusInfo")({JmxExporter: S.optional(JmxExporterInfo), NodeExporter: S.optional(NodeExporterInfo)}) {}
export class OpenMonitoringInfo extends S.Class<OpenMonitoringInfo>("OpenMonitoringInfo")({Prometheus: PrometheusInfo}) {}
export class CloudWatchLogs extends S.Class<CloudWatchLogs>("CloudWatchLogs")({Enabled: S.Boolean, LogGroup: S.optional(S.String)}) {}
export class Firehose extends S.Class<Firehose>("Firehose")({DeliveryStream: S.optional(S.String), Enabled: S.Boolean}) {}
export class S3 extends S.Class<S3>("S3")({Bucket: S.optional(S.String), Enabled: S.Boolean, Prefix: S.optional(S.String)}) {}
export class BrokerLogs extends S.Class<BrokerLogs>("BrokerLogs")({CloudWatchLogs: S.optional(CloudWatchLogs), Firehose: S.optional(Firehose), S3: S.optional(S3)}) {}
export class LoggingInfo extends S.Class<LoggingInfo>("LoggingInfo")({BrokerLogs: BrokerLogs}) {}
export class UpdateMonitoringRequest extends S.Class<UpdateMonitoringRequest>("UpdateMonitoringRequest")({ClusterArn: S.String, CurrentVersion: S.String, EnhancedMonitoring: S.optional(S.String), OpenMonitoring: S.optional(OpenMonitoringInfo), LoggingInfo: S.optional(LoggingInfo)}) {}
export class Rebalancing extends S.Class<Rebalancing>("Rebalancing")({Status: S.optional(S.String)}) {}
export class UpdateRebalancingRequest extends S.Class<UpdateRebalancingRequest>("UpdateRebalancingRequest")({ClusterArn: S.String, CurrentVersion: S.String, Rebalancing: Rebalancing}) {}
export class Scram extends S.Class<Scram>("Scram")({Enabled: S.optional(S.Boolean)}) {}
export class Iam extends S.Class<Iam>("Iam")({Enabled: S.optional(S.Boolean)}) {}
export class Sasl extends S.Class<Sasl>("Sasl")({Scram: S.optional(Scram), Iam: S.optional(Iam)}) {}
export class Tls extends S.Class<Tls>("Tls")({CertificateAuthorityArnList: S.optional(__listOf__string), Enabled: S.optional(S.Boolean)}) {}
export class Unauthenticated extends S.Class<Unauthenticated>("Unauthenticated")({Enabled: S.optional(S.Boolean)}) {}
export class ClientAuthentication extends S.Class<ClientAuthentication>("ClientAuthentication")({Sasl: S.optional(Sasl), Tls: S.optional(Tls), Unauthenticated: S.optional(Unauthenticated)}) {}
export class EncryptionAtRest extends S.Class<EncryptionAtRest>("EncryptionAtRest")({DataVolumeKMSKeyId: S.String}) {}
export class EncryptionInTransit extends S.Class<EncryptionInTransit>("EncryptionInTransit")({ClientBroker: S.optional(S.String), InCluster: S.optional(S.Boolean)}) {}
export class EncryptionInfo extends S.Class<EncryptionInfo>("EncryptionInfo")({EncryptionAtRest: S.optional(EncryptionAtRest), EncryptionInTransit: S.optional(EncryptionInTransit)}) {}
export class UpdateSecurityRequest extends S.Class<UpdateSecurityRequest>("UpdateSecurityRequest")({ClientAuthentication: S.optional(ClientAuthentication), ClusterArn: S.String, CurrentVersion: S.String, EncryptionInfo: S.optional(EncryptionInfo)}) {}
export const __listOf__stringMax256 = S.Array(S.String);
export const __listOf__stringMax249 = S.Array(S.String);
export class ProvisionedThroughput extends S.Class<ProvisionedThroughput>("ProvisionedThroughput")({Enabled: S.optional(S.Boolean), VolumeThroughput: S.optional(S.Number)}) {}
export class EBSStorageInfo extends S.Class<EBSStorageInfo>("EBSStorageInfo")({ProvisionedThroughput: S.optional(ProvisionedThroughput), VolumeSize: S.optional(S.Number)}) {}
export class StorageInfo extends S.Class<StorageInfo>("StorageInfo")({EbsStorageInfo: S.optional(EBSStorageInfo)}) {}
export class PublicAccess extends S.Class<PublicAccess>("PublicAccess")({Type: S.optional(S.String)}) {}
export class VpcConnectivityScram extends S.Class<VpcConnectivityScram>("VpcConnectivityScram")({Enabled: S.optional(S.Boolean)}) {}
export class VpcConnectivityIam extends S.Class<VpcConnectivityIam>("VpcConnectivityIam")({Enabled: S.optional(S.Boolean)}) {}
export class VpcConnectivitySasl extends S.Class<VpcConnectivitySasl>("VpcConnectivitySasl")({Scram: S.optional(VpcConnectivityScram), Iam: S.optional(VpcConnectivityIam)}) {}
export class VpcConnectivityTls extends S.Class<VpcConnectivityTls>("VpcConnectivityTls")({Enabled: S.optional(S.Boolean)}) {}
export class VpcConnectivityClientAuthentication extends S.Class<VpcConnectivityClientAuthentication>("VpcConnectivityClientAuthentication")({Sasl: S.optional(VpcConnectivitySasl), Tls: S.optional(VpcConnectivityTls)}) {}
export class VpcConnectivity extends S.Class<VpcConnectivity>("VpcConnectivity")({ClientAuthentication: S.optional(VpcConnectivityClientAuthentication)}) {}
export class ConnectivityInfo extends S.Class<ConnectivityInfo>("ConnectivityInfo")({PublicAccess: S.optional(PublicAccess), VpcConnectivity: S.optional(VpcConnectivity)}) {}
export class BrokerNodeGroupInfo extends S.Class<BrokerNodeGroupInfo>("BrokerNodeGroupInfo")({BrokerAZDistribution: S.optional(S.String), ClientSubnets: __listOf__string, InstanceType: S.String, SecurityGroups: S.optional(__listOf__string), StorageInfo: S.optional(StorageInfo), ConnectivityInfo: S.optional(ConnectivityInfo), ZoneIds: S.optional(__listOf__string)}) {}
export class ProvisionedRequest extends S.Class<ProvisionedRequest>("ProvisionedRequest")({BrokerNodeGroupInfo: BrokerNodeGroupInfo, Rebalancing: S.optional(Rebalancing), ClientAuthentication: S.optional(ClientAuthentication), ConfigurationInfo: S.optional(ConfigurationInfo), EncryptionInfo: S.optional(EncryptionInfo), EnhancedMonitoring: S.optional(S.String), OpenMonitoring: S.optional(OpenMonitoringInfo), KafkaVersion: S.String, LoggingInfo: S.optional(LoggingInfo), NumberOfBrokerNodes: S.Number, StorageMode: S.optional(S.String)}) {}
export class ErrorInfo extends S.Class<ErrorInfo>("ErrorInfo")({ErrorCode: S.optional(S.String), ErrorString: S.optional(S.String)}) {}
export class ClusterOperationStepInfo extends S.Class<ClusterOperationStepInfo>("ClusterOperationStepInfo")({StepStatus: S.optional(S.String)}) {}
export class ClusterOperationStep extends S.Class<ClusterOperationStep>("ClusterOperationStep")({StepInfo: S.optional(ClusterOperationStepInfo), StepName: S.optional(S.String)}) {}
export const __listOfClusterOperationStep = S.Array(ClusterOperationStep);
export class BrokerEBSVolumeInfo extends S.Class<BrokerEBSVolumeInfo>("BrokerEBSVolumeInfo")({KafkaBrokerNodeId: S.String, ProvisionedThroughput: S.optional(ProvisionedThroughput), VolumeSizeGB: S.optional(S.Number)}) {}
export const __listOfBrokerEBSVolumeInfo = S.Array(BrokerEBSVolumeInfo);
export class JmxExporter extends S.Class<JmxExporter>("JmxExporter")({EnabledInBroker: S.Boolean}) {}
export class NodeExporter extends S.Class<NodeExporter>("NodeExporter")({EnabledInBroker: S.Boolean}) {}
export class Prometheus extends S.Class<Prometheus>("Prometheus")({JmxExporter: S.optional(JmxExporter), NodeExporter: S.optional(NodeExporter)}) {}
export class OpenMonitoring extends S.Class<OpenMonitoring>("OpenMonitoring")({Prometheus: Prometheus}) {}
export const __listOf__double = S.Array(S.Number);
export class BrokerCountUpdateInfo extends S.Class<BrokerCountUpdateInfo>("BrokerCountUpdateInfo")({CreatedBrokerIds: S.optional(__listOf__double), DeletedBrokerIds: S.optional(__listOf__double)}) {}
export class MutableClusterInfo extends S.Class<MutableClusterInfo>("MutableClusterInfo")({BrokerEBSVolumeInfo: S.optional(__listOfBrokerEBSVolumeInfo), ConfigurationInfo: S.optional(ConfigurationInfo), NumberOfBrokerNodes: S.optional(S.Number), EnhancedMonitoring: S.optional(S.String), OpenMonitoring: S.optional(OpenMonitoring), KafkaVersion: S.optional(S.String), LoggingInfo: S.optional(LoggingInfo), InstanceType: S.optional(S.String), ClientAuthentication: S.optional(ClientAuthentication), EncryptionInfo: S.optional(EncryptionInfo), ConnectivityInfo: S.optional(ConnectivityInfo), StorageMode: S.optional(S.String), BrokerCountUpdateInfo: S.optional(BrokerCountUpdateInfo), Rebalancing: S.optional(Rebalancing)}) {}
export class UserIdentity extends S.Class<UserIdentity>("UserIdentity")({Type: S.optional(S.String), PrincipalId: S.optional(S.String)}) {}
export class VpcConnectionInfo extends S.Class<VpcConnectionInfo>("VpcConnectionInfo")({VpcConnectionArn: S.optional(S.String), Owner: S.optional(S.String), UserIdentity: S.optional(UserIdentity), CreationTime: S.optional(S.Date)}) {}
export class ClusterOperationInfo extends S.Class<ClusterOperationInfo>("ClusterOperationInfo")({ClientRequestId: S.optional(S.String), ClusterArn: S.optional(S.String), CreationTime: S.optional(S.Date), EndTime: S.optional(S.Date), ErrorInfo: S.optional(ErrorInfo), OperationArn: S.optional(S.String), OperationState: S.optional(S.String), OperationSteps: S.optional(__listOfClusterOperationStep), OperationType: S.optional(S.String), SourceClusterInfo: S.optional(MutableClusterInfo), TargetClusterInfo: S.optional(MutableClusterInfo), VpcConnectionInfo: S.optional(VpcConnectionInfo)}) {}
export const __listOfClusterOperationInfo = S.Array(ClusterOperationInfo);
export class BrokerSoftwareInfo extends S.Class<BrokerSoftwareInfo>("BrokerSoftwareInfo")({ConfigurationArn: S.optional(S.String), ConfigurationRevision: S.optional(S.Number), KafkaVersion: S.optional(S.String)}) {}
export class StateInfo extends S.Class<StateInfo>("StateInfo")({Code: S.optional(S.String), Message: S.optional(S.String)}) {}
export class ClusterInfo extends S.Class<ClusterInfo>("ClusterInfo")({ActiveOperationArn: S.optional(S.String), BrokerNodeGroupInfo: S.optional(BrokerNodeGroupInfo), Rebalancing: S.optional(Rebalancing), ClientAuthentication: S.optional(ClientAuthentication), ClusterArn: S.optional(S.String), ClusterName: S.optional(S.String), CreationTime: S.optional(S.Date), CurrentBrokerSoftwareInfo: S.optional(BrokerSoftwareInfo), CurrentVersion: S.optional(S.String), EncryptionInfo: S.optional(EncryptionInfo), EnhancedMonitoring: S.optional(S.String), OpenMonitoring: S.optional(OpenMonitoring), LoggingInfo: S.optional(LoggingInfo), NumberOfBrokerNodes: S.optional(S.Number), State: S.optional(S.String), StateInfo: S.optional(StateInfo), Tags: S.optional(__mapOf__string), ZookeeperConnectString: S.optional(S.String), ZookeeperConnectStringTls: S.optional(S.String), StorageMode: S.optional(S.String), CustomerActionStatus: S.optional(S.String)}) {}
export const __listOfClusterInfo = S.Array(ClusterInfo);
export class Provisioned extends S.Class<Provisioned>("Provisioned")({BrokerNodeGroupInfo: BrokerNodeGroupInfo, Rebalancing: S.optional(Rebalancing), CurrentBrokerSoftwareInfo: S.optional(BrokerSoftwareInfo), ClientAuthentication: S.optional(ClientAuthentication), EncryptionInfo: S.optional(EncryptionInfo), EnhancedMonitoring: S.optional(S.String), OpenMonitoring: S.optional(OpenMonitoringInfo), LoggingInfo: S.optional(LoggingInfo), NumberOfBrokerNodes: S.Number, ZookeeperConnectString: S.optional(S.String), ZookeeperConnectStringTls: S.optional(S.String), StorageMode: S.optional(S.String), CustomerActionStatus: S.optional(S.String)}) {}
export class VpcConfig extends S.Class<VpcConfig>("VpcConfig")({SubnetIds: __listOf__string, SecurityGroupIds: S.optional(__listOf__string)}) {}
export const __listOfVpcConfig = S.Array(VpcConfig);
export class ServerlessSasl extends S.Class<ServerlessSasl>("ServerlessSasl")({Iam: S.optional(Iam)}) {}
export class ServerlessClientAuthentication extends S.Class<ServerlessClientAuthentication>("ServerlessClientAuthentication")({Sasl: S.optional(ServerlessSasl)}) {}
export class Serverless extends S.Class<Serverless>("Serverless")({VpcConfigs: __listOfVpcConfig, ClientAuthentication: S.optional(ServerlessClientAuthentication)}) {}
export class Cluster extends S.Class<Cluster>("Cluster")({ActiveOperationArn: S.optional(S.String), ClusterType: S.optional(S.String), ClusterArn: S.optional(S.String), ClusterName: S.optional(S.String), CreationTime: S.optional(S.Date), CurrentVersion: S.optional(S.String), State: S.optional(S.String), StateInfo: S.optional(StateInfo), Tags: S.optional(__mapOf__string), Provisioned: S.optional(Provisioned), Serverless: S.optional(Serverless)}) {}
export const __listOfCluster = S.Array(Cluster);
export class ConfigurationRevision extends S.Class<ConfigurationRevision>("ConfigurationRevision")({CreationTime: S.Date, Description: S.optional(S.String), Revision: S.Number}) {}
export const __listOfConfigurationRevision = S.Array(ConfigurationRevision);
export class ConsumerGroupReplicationUpdate extends S.Class<ConsumerGroupReplicationUpdate>("ConsumerGroupReplicationUpdate")({ConsumerGroupsToExclude: __listOf__stringMax256, ConsumerGroupsToReplicate: __listOf__stringMax256, DetectAndCopyNewConsumerGroups: S.Boolean, SynchroniseConsumerGroupOffsets: S.Boolean}) {}
export class TopicReplicationUpdate extends S.Class<TopicReplicationUpdate>("TopicReplicationUpdate")({CopyAccessControlListsForTopics: S.Boolean, CopyTopicConfigurations: S.Boolean, DetectAndCopyNewTopics: S.Boolean, TopicsToExclude: __listOf__stringMax249, TopicsToReplicate: __listOf__stringMax249}) {}
export class UnprocessedScramSecret extends S.Class<UnprocessedScramSecret>("UnprocessedScramSecret")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String), SecretArn: S.optional(S.String)}) {}
export const __listOfUnprocessedScramSecret = S.Array(UnprocessedScramSecret);
export class BatchDisassociateScramSecretResponse extends S.Class<BatchDisassociateScramSecretResponse>("BatchDisassociateScramSecretResponse")({ClusterArn: S.optional(S.String), UnprocessedScramSecrets: S.optional(__listOfUnprocessedScramSecret)}) {}
export class CreateVpcConnectionResponse extends S.Class<CreateVpcConnectionResponse>("CreateVpcConnectionResponse")({VpcConnectionArn: S.optional(S.String), State: S.optional(S.String), Authentication: S.optional(S.String), VpcId: S.optional(S.String), ClientSubnets: S.optional(__listOf__string), SecurityGroups: S.optional(__listOf__string), CreationTime: S.optional(S.Date), Tags: S.optional(__mapOf__string)}) {}
export class DeleteClusterResponse extends S.Class<DeleteClusterResponse>("DeleteClusterResponse")({ClusterArn: S.optional(S.String), State: S.optional(S.String)}) {}
export class DeleteConfigurationResponse extends S.Class<DeleteConfigurationResponse>("DeleteConfigurationResponse")({Arn: S.optional(S.String), State: S.optional(S.String)}) {}
export class DeleteReplicatorResponse extends S.Class<DeleteReplicatorResponse>("DeleteReplicatorResponse")({ReplicatorArn: S.optional(S.String), ReplicatorState: S.optional(S.String)}) {}
export class DeleteVpcConnectionResponse extends S.Class<DeleteVpcConnectionResponse>("DeleteVpcConnectionResponse")({VpcConnectionArn: S.optional(S.String), State: S.optional(S.String)}) {}
export class DescribeConfigurationResponse extends S.Class<DescribeConfigurationResponse>("DescribeConfigurationResponse")({Arn: S.optional(S.String), CreationTime: S.optional(S.Date), Description: S.optional(S.String), KafkaVersions: S.optional(__listOf__string), LatestRevision: S.optional(ConfigurationRevision), Name: S.optional(S.String), State: S.optional(S.String)}) {}
export class DescribeConfigurationRevisionResponse extends S.Class<DescribeConfigurationRevisionResponse>("DescribeConfigurationRevisionResponse")({Arn: S.optional(S.String), CreationTime: S.optional(S.Date), Description: S.optional(S.String), Revision: S.optional(S.Number), ServerProperties: S.optional(H.StreamBody())}) {}
export class DescribeTopicResponse extends S.Class<DescribeTopicResponse>("DescribeTopicResponse")({TopicArn: S.optional(S.String), TopicName: S.optional(S.String), ReplicationFactor: S.optional(S.Number), PartitionCount: S.optional(S.Number), Configs: S.optional(S.String), Status: S.optional(S.String)}) {}
export class DescribeVpcConnectionResponse extends S.Class<DescribeVpcConnectionResponse>("DescribeVpcConnectionResponse")({VpcConnectionArn: S.optional(S.String), TargetClusterArn: S.optional(S.String), State: S.optional(S.String), Authentication: S.optional(S.String), VpcId: S.optional(S.String), Subnets: S.optional(__listOf__string), SecurityGroups: S.optional(__listOf__string), CreationTime: S.optional(S.Date), Tags: S.optional(__mapOf__string)}) {}
export class GetBootstrapBrokersResponse extends S.Class<GetBootstrapBrokersResponse>("GetBootstrapBrokersResponse")({BootstrapBrokerString: S.optional(S.String), BootstrapBrokerStringTls: S.optional(S.String), BootstrapBrokerStringSaslScram: S.optional(S.String), BootstrapBrokerStringSaslIam: S.optional(S.String), BootstrapBrokerStringPublicTls: S.optional(S.String), BootstrapBrokerStringPublicSaslScram: S.optional(S.String), BootstrapBrokerStringPublicSaslIam: S.optional(S.String), BootstrapBrokerStringVpcConnectivityTls: S.optional(S.String), BootstrapBrokerStringVpcConnectivitySaslScram: S.optional(S.String), BootstrapBrokerStringVpcConnectivitySaslIam: S.optional(S.String)}) {}
export class GetClusterPolicyResponse extends S.Class<GetClusterPolicyResponse>("GetClusterPolicyResponse")({CurrentVersion: S.optional(S.String), Policy: S.optional(S.String)}) {}
export class ListClusterOperationsResponse extends S.Class<ListClusterOperationsResponse>("ListClusterOperationsResponse")({ClusterOperationInfoList: S.optional(__listOfClusterOperationInfo), NextToken: S.optional(S.String)}) {}
export class ListClustersResponse extends S.Class<ListClustersResponse>("ListClustersResponse")({ClusterInfoList: S.optional(__listOfClusterInfo), NextToken: S.optional(S.String)}) {}
export class ListClustersV2Response extends S.Class<ListClustersV2Response>("ListClustersV2Response")({ClusterInfoList: S.optional(__listOfCluster), NextToken: S.optional(S.String)}) {}
export class ListConfigurationRevisionsResponse extends S.Class<ListConfigurationRevisionsResponse>("ListConfigurationRevisionsResponse")({NextToken: S.optional(S.String), Revisions: S.optional(__listOfConfigurationRevision)}) {}
export class ListScramSecretsResponse extends S.Class<ListScramSecretsResponse>("ListScramSecretsResponse")({NextToken: S.optional(S.String), SecretArnList: S.optional(__listOf__string)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(__mapOf__string)}) {}
export class PutClusterPolicyResponse extends S.Class<PutClusterPolicyResponse>("PutClusterPolicyResponse")({CurrentVersion: S.optional(S.String)}) {}
export class RebootBrokerResponse extends S.Class<RebootBrokerResponse>("RebootBrokerResponse")({ClusterArn: S.optional(S.String), ClusterOperationArn: S.optional(S.String)}) {}
export class UpdateBrokerCountResponse extends S.Class<UpdateBrokerCountResponse>("UpdateBrokerCountResponse")({ClusterArn: S.optional(S.String), ClusterOperationArn: S.optional(S.String)}) {}
export class UpdateBrokerStorageRequest extends S.Class<UpdateBrokerStorageRequest>("UpdateBrokerStorageRequest")({ClusterArn: S.String, CurrentVersion: S.String, TargetBrokerEBSVolumeInfo: __listOfBrokerEBSVolumeInfo}) {}
export class UpdateBrokerTypeResponse extends S.Class<UpdateBrokerTypeResponse>("UpdateBrokerTypeResponse")({ClusterArn: S.optional(S.String), ClusterOperationArn: S.optional(S.String)}) {}
export class UpdateClusterConfigurationResponse extends S.Class<UpdateClusterConfigurationResponse>("UpdateClusterConfigurationResponse")({ClusterArn: S.optional(S.String), ClusterOperationArn: S.optional(S.String)}) {}
export class UpdateClusterKafkaVersionResponse extends S.Class<UpdateClusterKafkaVersionResponse>("UpdateClusterKafkaVersionResponse")({ClusterArn: S.optional(S.String), ClusterOperationArn: S.optional(S.String)}) {}
export class UpdateConfigurationResponse extends S.Class<UpdateConfigurationResponse>("UpdateConfigurationResponse")({Arn: S.optional(S.String), LatestRevision: S.optional(ConfigurationRevision)}) {}
export class UpdateMonitoringResponse extends S.Class<UpdateMonitoringResponse>("UpdateMonitoringResponse")({ClusterArn: S.optional(S.String), ClusterOperationArn: S.optional(S.String)}) {}
export class UpdateRebalancingResponse extends S.Class<UpdateRebalancingResponse>("UpdateRebalancingResponse")({ClusterArn: S.optional(S.String), ClusterOperationArn: S.optional(S.String)}) {}
export class UpdateReplicationInfoRequest extends S.Class<UpdateReplicationInfoRequest>("UpdateReplicationInfoRequest")({ConsumerGroupReplication: S.optional(ConsumerGroupReplicationUpdate), CurrentVersion: S.String, ReplicatorArn: S.String, SourceKafkaClusterArn: S.String, TargetKafkaClusterArn: S.String, TopicReplication: S.optional(TopicReplicationUpdate)}) {}
export class UpdateSecurityResponse extends S.Class<UpdateSecurityResponse>("UpdateSecurityResponse")({ClusterArn: S.optional(S.String), ClusterOperationArn: S.optional(S.String)}) {}
export class UpdateStorageRequest extends S.Class<UpdateStorageRequest>("UpdateStorageRequest")({ClusterArn: S.String, CurrentVersion: S.String, ProvisionedThroughput: S.optional(ProvisionedThroughput), StorageMode: S.optional(S.String), VolumeSizeGB: S.optional(S.Number)}) {}
export class AmazonMskCluster extends S.Class<AmazonMskCluster>("AmazonMskCluster")({MskClusterArn: S.String}) {}
export class KafkaClusterClientVpcConfig extends S.Class<KafkaClusterClientVpcConfig>("KafkaClusterClientVpcConfig")({SecurityGroupIds: S.optional(__listOf__string), SubnetIds: __listOf__string}) {}
export class ConsumerGroupReplication extends S.Class<ConsumerGroupReplication>("ConsumerGroupReplication")({ConsumerGroupsToExclude: S.optional(__listOf__stringMax256), ConsumerGroupsToReplicate: __listOf__stringMax256, DetectAndCopyNewConsumerGroups: S.optional(S.Boolean), SynchroniseConsumerGroupOffsets: S.optional(S.Boolean)}) {}
export const __listOf__integer = S.Array(S.Number);
export class KafkaCluster extends S.Class<KafkaCluster>("KafkaCluster")({AmazonMskCluster: AmazonMskCluster, VpcConfig: KafkaClusterClientVpcConfig}) {}
export const __listOfKafkaCluster = S.Array(KafkaCluster);
export class KafkaClusterDescription extends S.Class<KafkaClusterDescription>("KafkaClusterDescription")({AmazonMskCluster: S.optional(AmazonMskCluster), KafkaClusterAlias: S.optional(S.String), VpcConfig: S.optional(KafkaClusterClientVpcConfig)}) {}
export const __listOfKafkaClusterDescription = S.Array(KafkaClusterDescription);
export class ReplicationStartingPosition extends S.Class<ReplicationStartingPosition>("ReplicationStartingPosition")({Type: S.optional(S.String)}) {}
export class ReplicationTopicNameConfiguration extends S.Class<ReplicationTopicNameConfiguration>("ReplicationTopicNameConfiguration")({Type: S.optional(S.String)}) {}
export class TopicReplication extends S.Class<TopicReplication>("TopicReplication")({CopyAccessControlListsForTopics: S.optional(S.Boolean), CopyTopicConfigurations: S.optional(S.Boolean), DetectAndCopyNewTopics: S.optional(S.Boolean), StartingPosition: S.optional(ReplicationStartingPosition), TopicNameConfiguration: S.optional(ReplicationTopicNameConfiguration), TopicsToExclude: S.optional(__listOf__stringMax249), TopicsToReplicate: __listOf__stringMax249}) {}
export class ReplicationInfoDescription extends S.Class<ReplicationInfoDescription>("ReplicationInfoDescription")({ConsumerGroupReplication: S.optional(ConsumerGroupReplication), SourceKafkaClusterAlias: S.optional(S.String), TargetCompressionType: S.optional(S.String), TargetKafkaClusterAlias: S.optional(S.String), TopicReplication: S.optional(TopicReplication)}) {}
export const __listOfReplicationInfoDescription = S.Array(ReplicationInfoDescription);
export class ReplicationStateInfo extends S.Class<ReplicationStateInfo>("ReplicationStateInfo")({Code: S.optional(S.String), Message: S.optional(S.String)}) {}
export class TopicPartitionInfo extends S.Class<TopicPartitionInfo>("TopicPartitionInfo")({Partition: S.optional(S.Number), Leader: S.optional(S.Number), Replicas: S.optional(__listOf__integer), Isr: S.optional(__listOf__integer)}) {}
export const __listOfTopicPartitionInfo = S.Array(TopicPartitionInfo);
export class CompatibleKafkaVersion extends S.Class<CompatibleKafkaVersion>("CompatibleKafkaVersion")({SourceVersion: S.optional(S.String), TargetVersions: S.optional(__listOf__string)}) {}
export const __listOfCompatibleKafkaVersion = S.Array(CompatibleKafkaVersion);
export class ClientVpcConnection extends S.Class<ClientVpcConnection>("ClientVpcConnection")({Authentication: S.optional(S.String), CreationTime: S.optional(S.Date), State: S.optional(S.String), VpcConnectionArn: S.String, Owner: S.optional(S.String)}) {}
export const __listOfClientVpcConnection = S.Array(ClientVpcConnection);
export class ClusterOperationV2Summary extends S.Class<ClusterOperationV2Summary>("ClusterOperationV2Summary")({ClusterArn: S.optional(S.String), ClusterType: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), OperationArn: S.optional(S.String), OperationState: S.optional(S.String), OperationType: S.optional(S.String)}) {}
export const __listOfClusterOperationV2Summary = S.Array(ClusterOperationV2Summary);
export class Configuration extends S.Class<Configuration>("Configuration")({Arn: S.String, CreationTime: S.Date, Description: S.String, KafkaVersions: __listOf__string, LatestRevision: ConfigurationRevision, Name: S.String, State: S.String}) {}
export const __listOfConfiguration = S.Array(Configuration);
export class KafkaVersion extends S.Class<KafkaVersion>("KafkaVersion")({Version: S.optional(S.String), Status: S.optional(S.String)}) {}
export const __listOfKafkaVersion = S.Array(KafkaVersion);
export class TopicInfo extends S.Class<TopicInfo>("TopicInfo")({TopicArn: S.optional(S.String), TopicName: S.optional(S.String), ReplicationFactor: S.optional(S.Number), PartitionCount: S.optional(S.Number), OutOfSyncReplicaCount: S.optional(S.Number)}) {}
export const __listOfTopicInfo = S.Array(TopicInfo);
export class VpcConnection extends S.Class<VpcConnection>("VpcConnection")({VpcConnectionArn: S.String, TargetClusterArn: S.String, CreationTime: S.optional(S.Date), Authentication: S.optional(S.String), VpcId: S.optional(S.String), State: S.optional(S.String)}) {}
export const __listOfVpcConnection = S.Array(VpcConnection);
export class BatchAssociateScramSecretResponse extends S.Class<BatchAssociateScramSecretResponse>("BatchAssociateScramSecretResponse")({ClusterArn: S.optional(S.String), UnprocessedScramSecrets: S.optional(__listOfUnprocessedScramSecret)}) {}
export class CreateConfigurationResponse extends S.Class<CreateConfigurationResponse>("CreateConfigurationResponse")({Arn: S.optional(S.String), CreationTime: S.optional(S.Date), LatestRevision: S.optional(ConfigurationRevision), Name: S.optional(S.String), State: S.optional(S.String)}) {}
export class DescribeReplicatorResponse extends S.Class<DescribeReplicatorResponse>("DescribeReplicatorResponse")({CreationTime: S.optional(S.Date), CurrentVersion: S.optional(S.String), IsReplicatorReference: S.optional(S.Boolean), KafkaClusters: S.optional(__listOfKafkaClusterDescription), ReplicationInfoList: S.optional(__listOfReplicationInfoDescription), ReplicatorArn: S.optional(S.String), ReplicatorDescription: S.optional(S.String), ReplicatorName: S.optional(S.String), ReplicatorResourceArn: S.optional(S.String), ReplicatorState: S.optional(S.String), ServiceExecutionRoleArn: S.optional(S.String), StateInfo: S.optional(ReplicationStateInfo), Tags: S.optional(__mapOf__string)}) {}
export class DescribeTopicPartitionsResponse extends S.Class<DescribeTopicPartitionsResponse>("DescribeTopicPartitionsResponse")({Partitions: S.optional(__listOfTopicPartitionInfo), NextToken: S.optional(S.String)}) {}
export class GetCompatibleKafkaVersionsResponse extends S.Class<GetCompatibleKafkaVersionsResponse>("GetCompatibleKafkaVersionsResponse")({CompatibleKafkaVersions: S.optional(__listOfCompatibleKafkaVersion)}) {}
export class ListClientVpcConnectionsResponse extends S.Class<ListClientVpcConnectionsResponse>("ListClientVpcConnectionsResponse")({ClientVpcConnections: S.optional(__listOfClientVpcConnection), NextToken: S.optional(S.String)}) {}
export class ListClusterOperationsV2Response extends S.Class<ListClusterOperationsV2Response>("ListClusterOperationsV2Response")({ClusterOperationInfoList: S.optional(__listOfClusterOperationV2Summary), NextToken: S.optional(S.String)}) {}
export class ListConfigurationsResponse extends S.Class<ListConfigurationsResponse>("ListConfigurationsResponse")({Configurations: S.optional(__listOfConfiguration), NextToken: S.optional(S.String)}) {}
export class ListKafkaVersionsResponse extends S.Class<ListKafkaVersionsResponse>("ListKafkaVersionsResponse")({KafkaVersions: S.optional(__listOfKafkaVersion), NextToken: S.optional(S.String)}) {}
export class ListTopicsResponse extends S.Class<ListTopicsResponse>("ListTopicsResponse")({Topics: S.optional(__listOfTopicInfo), NextToken: S.optional(S.String)}) {}
export class ListVpcConnectionsResponse extends S.Class<ListVpcConnectionsResponse>("ListVpcConnectionsResponse")({VpcConnections: S.optional(__listOfVpcConnection), NextToken: S.optional(S.String)}) {}
export class UpdateBrokerStorageResponse extends S.Class<UpdateBrokerStorageResponse>("UpdateBrokerStorageResponse")({ClusterArn: S.optional(S.String), ClusterOperationArn: S.optional(S.String)}) {}
export class UpdateReplicationInfoResponse extends S.Class<UpdateReplicationInfoResponse>("UpdateReplicationInfoResponse")({ReplicatorArn: S.optional(S.String), ReplicatorState: S.optional(S.String)}) {}
export class UpdateStorageResponse extends S.Class<UpdateStorageResponse>("UpdateStorageResponse")({ClusterArn: S.optional(S.String), ClusterOperationArn: S.optional(S.String)}) {}
export class ClusterOperationV2Provisioned extends S.Class<ClusterOperationV2Provisioned>("ClusterOperationV2Provisioned")({OperationSteps: S.optional(__listOfClusterOperationStep), SourceClusterInfo: S.optional(MutableClusterInfo), TargetClusterInfo: S.optional(MutableClusterInfo), VpcConnectionInfo: S.optional(VpcConnectionInfo)}) {}
export class BrokerNodeInfo extends S.Class<BrokerNodeInfo>("BrokerNodeInfo")({AttachedENIId: S.optional(S.String), BrokerId: S.optional(S.Number), ClientSubnet: S.optional(S.String), ClientVpcIpAddress: S.optional(S.String), CurrentBrokerSoftwareInfo: S.optional(BrokerSoftwareInfo), Endpoints: S.optional(__listOf__string)}) {}
export class ControllerNodeInfo extends S.Class<ControllerNodeInfo>("ControllerNodeInfo")({Endpoints: S.optional(__listOf__string)}) {}
export class ZookeeperNodeInfo extends S.Class<ZookeeperNodeInfo>("ZookeeperNodeInfo")({AttachedENIId: S.optional(S.String), ClientVpcIpAddress: S.optional(S.String), Endpoints: S.optional(__listOf__string), ZookeeperId: S.optional(S.Number), ZookeeperVersion: S.optional(S.String)}) {}
export class KafkaClusterSummary extends S.Class<KafkaClusterSummary>("KafkaClusterSummary")({AmazonMskCluster: S.optional(AmazonMskCluster), KafkaClusterAlias: S.optional(S.String)}) {}
export const __listOfKafkaClusterSummary = S.Array(KafkaClusterSummary);
export class ReplicationInfoSummary extends S.Class<ReplicationInfoSummary>("ReplicationInfoSummary")({SourceKafkaClusterAlias: S.optional(S.String), TargetKafkaClusterAlias: S.optional(S.String)}) {}
export const __listOfReplicationInfoSummary = S.Array(ReplicationInfoSummary);
export class ServerlessRequest extends S.Class<ServerlessRequest>("ServerlessRequest")({VpcConfigs: __listOfVpcConfig, ClientAuthentication: S.optional(ServerlessClientAuthentication)}) {}
export class ReplicationInfo extends S.Class<ReplicationInfo>("ReplicationInfo")({ConsumerGroupReplication: ConsumerGroupReplication, SourceKafkaClusterArn: S.String, TargetCompressionType: S.String, TargetKafkaClusterArn: S.String, TopicReplication: TopicReplication}) {}
export const __listOfReplicationInfo = S.Array(ReplicationInfo);
export class NodeInfo extends S.Class<NodeInfo>("NodeInfo")({AddedToClusterTime: S.optional(S.String), BrokerNodeInfo: S.optional(BrokerNodeInfo), ControllerNodeInfo: S.optional(ControllerNodeInfo), InstanceType: S.optional(S.String), NodeARN: S.optional(S.String), NodeType: S.optional(S.String), ZookeeperNodeInfo: S.optional(ZookeeperNodeInfo)}) {}
export const __listOfNodeInfo = S.Array(NodeInfo);
export class ReplicatorSummary extends S.Class<ReplicatorSummary>("ReplicatorSummary")({CreationTime: S.optional(S.Date), CurrentVersion: S.optional(S.String), IsReplicatorReference: S.optional(S.Boolean), KafkaClustersSummary: S.optional(__listOfKafkaClusterSummary), ReplicationInfoSummaryList: S.optional(__listOfReplicationInfoSummary), ReplicatorArn: S.optional(S.String), ReplicatorName: S.optional(S.String), ReplicatorResourceArn: S.optional(S.String), ReplicatorState: S.optional(S.String)}) {}
export const __listOfReplicatorSummary = S.Array(ReplicatorSummary);
export class VpcConnectionInfoServerless extends S.Class<VpcConnectionInfoServerless>("VpcConnectionInfoServerless")({CreationTime: S.optional(S.Date), Owner: S.optional(S.String), UserIdentity: S.optional(UserIdentity), VpcConnectionArn: S.optional(S.String)}) {}
export class CreateClusterRequest extends S.Class<CreateClusterRequest>("CreateClusterRequest")({BrokerNodeGroupInfo: BrokerNodeGroupInfo, Rebalancing: S.optional(Rebalancing), ClientAuthentication: S.optional(ClientAuthentication), ClusterName: S.String, ConfigurationInfo: S.optional(ConfigurationInfo), EncryptionInfo: S.optional(EncryptionInfo), EnhancedMonitoring: S.optional(S.String), OpenMonitoring: S.optional(OpenMonitoringInfo), KafkaVersion: S.String, LoggingInfo: S.optional(LoggingInfo), NumberOfBrokerNodes: S.Number, Tags: S.optional(__mapOf__string), StorageMode: S.optional(S.String)}) {}
export class CreateClusterV2Request extends S.Class<CreateClusterV2Request>("CreateClusterV2Request")({ClusterName: S.String, Tags: S.optional(__mapOf__string), Provisioned: S.optional(ProvisionedRequest), Serverless: S.optional(ServerlessRequest)}) {}
export class CreateReplicatorRequest extends S.Class<CreateReplicatorRequest>("CreateReplicatorRequest")({Description: S.optional(S.String), KafkaClusters: __listOfKafkaCluster, ReplicationInfoList: __listOfReplicationInfo, ReplicatorName: S.String, ServiceExecutionRoleArn: S.String, Tags: S.optional(__mapOf__string)}) {}
export class DescribeClusterV2Response extends S.Class<DescribeClusterV2Response>("DescribeClusterV2Response")({ClusterInfo: S.optional(Cluster)}) {}
export class ListNodesResponse extends S.Class<ListNodesResponse>("ListNodesResponse")({NextToken: S.optional(S.String), NodeInfoList: S.optional(__listOfNodeInfo)}) {}
export class ListReplicatorsResponse extends S.Class<ListReplicatorsResponse>("ListReplicatorsResponse")({NextToken: S.optional(S.String), Replicators: S.optional(__listOfReplicatorSummary)}) {}
export class ClusterOperationV2Serverless extends S.Class<ClusterOperationV2Serverless>("ClusterOperationV2Serverless")({VpcConnectionInfo: S.optional(VpcConnectionInfoServerless)}) {}
export class ClusterOperationV2 extends S.Class<ClusterOperationV2>("ClusterOperationV2")({ClusterArn: S.optional(S.String), ClusterType: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), ErrorInfo: S.optional(ErrorInfo), OperationArn: S.optional(S.String), OperationState: S.optional(S.String), OperationType: S.optional(S.String), Provisioned: S.optional(ClusterOperationV2Provisioned), Serverless: S.optional(ClusterOperationV2Serverless)}) {}
export class CreateClusterResponse extends S.Class<CreateClusterResponse>("CreateClusterResponse")({ClusterArn: S.optional(S.String), ClusterName: S.optional(S.String), State: S.optional(S.String)}) {}
export class CreateClusterV2Response extends S.Class<CreateClusterV2Response>("CreateClusterV2Response")({ClusterArn: S.optional(S.String), ClusterName: S.optional(S.String), State: S.optional(S.String), ClusterType: S.optional(S.String)}) {}
export class CreateReplicatorResponse extends S.Class<CreateReplicatorResponse>("CreateReplicatorResponse")({ReplicatorArn: S.optional(S.String), ReplicatorName: S.optional(S.String), ReplicatorState: S.optional(S.String)}) {}
export class DescribeClusterOperationResponse extends S.Class<DescribeClusterOperationResponse>("DescribeClusterOperationResponse")({ClusterOperationInfo: S.optional(ClusterOperationInfo)}) {}
export class DescribeClusterOperationV2Response extends S.Class<DescribeClusterOperationV2Response>("DescribeClusterOperationV2Response")({ClusterOperationInfo: S.optional(ClusterOperationV2)}) {}
export class DescribeClusterResponse extends S.Class<DescribeClusterResponse>("DescribeClusterResponse")({ClusterInfo: S.optional(ClusterInfo)}) {}
export class UpdateConnectivityRequest extends S.Class<UpdateConnectivityRequest>("UpdateConnectivityRequest")({ClusterArn: S.String, ConnectivityInfo: ConnectivityInfo, CurrentVersion: S.String}) {}
export class UpdateConnectivityResponse extends S.Class<UpdateConnectivityResponse>("UpdateConnectivityResponse")({ClusterArn: S.optional(S.String), ClusterOperationArn: S.optional(S.String)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class InternalServerErrorException extends S.TaggedError<InternalServerErrorException>()("InternalServerErrorException", {}) {};
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};

//# Operations
/**
 * Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.
 */export const deleteCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}", method: "DELETE", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DeleteCluster" }, DeleteClusterRequest, DeleteClusterResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.
 */export const deleteClusterPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/policy", method: "DELETE", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DeleteClusterPolicy" }, DeleteClusterPolicyRequest, DeleteClusterPolicyResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an MSK Configuration.
 */export const deleteConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/configurations/{Arn}", method: "DELETE", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DeleteConfiguration" }, DeleteConfigurationRequest, DeleteConfigurationResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a MSK VPC connection.
 */export const deleteVpcConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/vpc-connection/{Arn}", method: "DELETE", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DeleteVpcConnection" }, DeleteVpcConnectionRequest, DeleteVpcConnectionResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a description of this MSK configuration.
 */export const describeConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/configurations/{Arn}", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DescribeConfiguration" }, DescribeConfigurationRequest, DescribeConfigurationResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a description of this revision of the configuration.
 */export const describeConfigurationRevision = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/configurations/{Arn}/revisions/{Revision}", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DescribeConfigurationRevision" }, DescribeConfigurationRevisionRequest, DescribeConfigurationRevisionResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns topic details of this topic on a MSK cluster.
 */export const describeTopic = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/topics/{TopicName}", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DescribeTopic" }, DescribeTopicRequest, DescribeTopicResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a description of this MSK VPC connection.
 */export const describeVpcConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/vpc-connection/{Arn}", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DescribeVpcConnection" }, DescribeVpcConnectionRequest, DescribeVpcConnectionResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.
 */export const getClusterPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/policy", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.GetClusterPolicy" }, GetClusterPolicyRequest, GetClusterPolicyResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all the operations that have been performed on the specified MSK cluster.
 */export const listClusterOperations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/operations", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListClusterOperations" }, ListClusterOperationsRequest, ListClusterOperationsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all the MSK clusters in the current Region.
 */export const listClusters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListClusters" }, ListClustersRequest, ListClustersResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all the MSK clusters in the current Region.
 */export const listClustersV2 = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/api/v2/clusters", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListClustersV2" }, ListClustersV2Request, ListClustersV2Response, [BadRequestException, ForbiddenException, InternalServerErrorException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all the MSK configurations in this Region.
 */export const listConfigurationRevisions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/configurations/{Arn}/revisions", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListConfigurationRevisions" }, ListConfigurationRevisionsRequest, ListConfigurationRevisionsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the Scram Secrets associated with an Amazon MSK cluster.
 */export const listScramSecrets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/scram-secrets", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListScramSecrets" }, ListScramSecretsRequest, ListScramSecretsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the tags associated with the specified resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/tags/{ResourceArn}", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates the MSK cluster policy specified by the cluster Amazon Resource Name (ARN) in the request.
 */export const putClusterPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/policy", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.PutClusterPolicy" }, PutClusterPolicyRequest, PutClusterPolicyResponse, [BadRequestException, ForbiddenException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Reboots brokers.
 */export const rebootBroker = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/reboot-broker", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.RebootBroker" }, RebootBrokerRequest, RebootBrokerResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns empty response.
 */export const rejectClientVpcConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/client-vpc-connection", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.RejectClientVpcConnection" }, RejectClientVpcConnectionRequest, RejectClientVpcConnectionResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds tags to the specified MSK resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/tags/{ResourceArn}", method: "POST", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.TagResource" }, TagResourceRequest, S.Struct({}), [BadRequestException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the tags associated with the keys that are provided in the query.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/tags/{ResourceArn}", method: "DELETE", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.UntagResource" }, UntagResourceRequest, S.Struct({}), [BadRequestException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the number of broker nodes in the cluster.
 */export const updateBrokerCount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/nodes/count", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.UpdateBrokerCount" }, UpdateBrokerCountRequest, UpdateBrokerCountResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates EC2 instance type.
 */export const updateBrokerType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/nodes/type", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.UpdateBrokerType" }, UpdateBrokerTypeRequest, UpdateBrokerTypeResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the cluster with the configuration that is specified in the request body.
 */export const updateClusterConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/configuration", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.UpdateClusterConfiguration" }, UpdateClusterConfigurationRequest, UpdateClusterConfigurationResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the Apache Kafka version for the cluster.
 */export const updateClusterKafkaVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/version", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.UpdateClusterKafkaVersion" }, UpdateClusterKafkaVersionRequest, UpdateClusterKafkaVersionResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an MSK configuration.
 */export const updateConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/configurations/{Arn}", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.UpdateConfiguration" }, UpdateConfigurationRequest, UpdateConfigurationResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.
 */export const updateMonitoring = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/monitoring", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.UpdateMonitoring" }, UpdateMonitoringRequest, UpdateMonitoringResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Use this resource to update the intelligent rebalancing status of an Amazon MSK Provisioned cluster with Express brokers.
 */export const updateRebalancing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/rebalancing", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.UpdateRebalancing" }, UpdateRebalancingRequest, UpdateRebalancingResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the security settings for the cluster. You can use this operation to specify encryption and authentication on existing clusters.
 */export const updateSecurity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/security", method: "PATCH", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.UpdateSecurity" }, UpdateSecurityRequest, UpdateSecurityResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates one or more Scram Secrets with an Amazon MSK cluster.
 */export const batchAssociateScramSecret = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/scram-secrets", method: "POST", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.BatchAssociateScramSecret" }, BatchAssociateScramSecretRequest, BatchAssociateScramSecretResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates one or more Scram Secrets from an Amazon MSK cluster.
 */export const batchDisassociateScramSecret = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/scram-secrets", method: "PATCH", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.BatchDisassociateScramSecret" }, BatchDisassociateScramSecretRequest, BatchDisassociateScramSecretResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new MSK configuration.
 */export const createConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/configurations", method: "POST", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.CreateConfiguration" }, CreateConfigurationRequest, CreateConfigurationResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new MSK VPC connection.
 */export const createVpcConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/vpc-connection", method: "POST", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.CreateVpcConnection" }, CreateVpcConnectionRequest, CreateVpcConnectionResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a replicator.
 */export const deleteReplicator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/replication/v1/replicators/{ReplicatorArn}", method: "DELETE", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DeleteReplicator" }, DeleteReplicatorRequest, DeleteReplicatorResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a replicator.
 */export const describeReplicator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/replication/v1/replicators/{ReplicatorArn}", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DescribeReplicator" }, DescribeReplicatorRequest, DescribeReplicatorResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns partition details of this topic on a MSK cluster.
 */export const describeTopicPartitions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/topics/{TopicName}/partitions", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DescribeTopicPartitions" }, DescribeTopicPartitionsRequest, DescribeTopicPartitionsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A list of brokers that a client application can use to bootstrap. This list doesn't necessarily include all of the brokers in the cluster. The following Python 3.6 example shows how you can use the Amazon Resource Name (ARN) of a cluster to get its bootstrap brokers. If you don't know the ARN of your cluster, you can use the `ListClusters` operation to get the ARNs of all the clusters in this account and Region.
 */export const getBootstrapBrokers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/bootstrap-brokers", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.GetBootstrapBrokers" }, GetBootstrapBrokersRequest, GetBootstrapBrokersResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the Apache Kafka versions to which you can update the MSK cluster.
 */export const getCompatibleKafkaVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/compatible-kafka-versions", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.GetCompatibleKafkaVersions" }, GetCompatibleKafkaVersionsRequest, GetCompatibleKafkaVersionsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all the VPC connections in this Region.
 */export const listClientVpcConnections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/client-vpc-connections", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListClientVpcConnections" }, ListClientVpcConnectionsRequest, ListClientVpcConnectionsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all the operations that have been performed on the specified MSK cluster.
 */export const listClusterOperationsV2 = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/api/v2/clusters/{ClusterArn}/operations", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListClusterOperationsV2" }, ListClusterOperationsV2Request, ListClusterOperationsV2Response, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all the MSK configurations in this Region.
 */export const listConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/configurations", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListConfigurations" }, ListConfigurationsRequest, ListConfigurationsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of Apache Kafka versions.
 */export const listKafkaVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/kafka-versions", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListKafkaVersions" }, ListKafkaVersionsRequest, ListKafkaVersionsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List topics in a MSK cluster.
 */export const listTopics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/topics", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListTopics" }, ListTopicsRequest, ListTopicsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all the VPC connections in this Region.
 */export const listVpcConnections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/vpc-connections", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListVpcConnections" }, ListVpcConnectionsRequest, ListVpcConnectionsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the EBS storage associated with MSK brokers.
 */export const updateBrokerStorage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/nodes/storage", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.UpdateBrokerStorage" }, UpdateBrokerStorageRequest, UpdateBrokerStorageResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates replication info of a replicator.
 */export const updateReplicationInfo = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/replication/v1/replicators/{ReplicatorArn}/replication-info", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.UpdateReplicationInfo" }, UpdateReplicationInfoRequest, UpdateReplicationInfoResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates cluster broker volume size (or) sets cluster storage mode to TIERED.
 */export const updateStorage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/storage", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.UpdateStorage" }, UpdateStorageRequest, UpdateStorageResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.
 */export const describeClusterV2 = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/api/v2/clusters/{ClusterArn}", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DescribeClusterV2" }, DescribeClusterV2Request, DescribeClusterV2Response, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the broker nodes in the cluster.
 */export const listNodes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/nodes", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListNodes" }, ListNodesRequest, ListNodesResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the replicators.
 */export const listReplicators = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/replication/v1/replicators", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.ListReplicators" }, ListReplicatorsRequest, ListReplicatorsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new MSK cluster.
 */export const createCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters", method: "POST", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.CreateCluster" }, CreateClusterRequest, CreateClusterResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new MSK cluster.
 */export const createClusterV2 = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/api/v2/clusters", method: "POST", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.CreateClusterV2" }, CreateClusterV2Request, CreateClusterV2Response, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates the replicator.
 */export const createReplicator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/replication/v1/replicators", method: "POST", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.CreateReplicator" }, CreateReplicatorRequest, CreateReplicatorResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a description of the cluster operation specified by the ARN.
 */export const describeClusterOperation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/operations/{ClusterOperationArn}", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DescribeClusterOperation" }, DescribeClusterOperationRequest, DescribeClusterOperationResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a description of the cluster operation specified by the ARN.
 */export const describeClusterOperationV2 = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/api/v2/operations/{ClusterOperationArn}", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DescribeClusterOperationV2" }, DescribeClusterOperationV2Request, DescribeClusterOperationV2Response, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.
 */export const describeCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}", method: "GET", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.DescribeCluster" }, DescribeClusterRequest, DescribeClusterResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the cluster's connectivity configuration.
 */export const updateConnectivity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-14", uri: "/v1/clusters/{ClusterArn}/connectivity", method: "PUT", sdkId: "Kafka", sigV4ServiceName: "kafka", name: "Kafka.UpdateConnectivity" }, UpdateConnectivityRequest, UpdateConnectivityResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

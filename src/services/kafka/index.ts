import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Kafka as _KafkaClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Kafka",
  version: "2018-11-14",
  protocol: "restJson1",
  sigV4ServiceName: "kafka",
  endpointPrefix: "kafka",
  operations: {
    BatchAssociateScramSecret: "POST /v1/clusters/{ClusterArn}/scram-secrets",
    BatchDisassociateScramSecret:
      "PATCH /v1/clusters/{ClusterArn}/scram-secrets",
    CreateCluster: "POST /v1/clusters",
    CreateClusterV2: "POST /api/v2/clusters",
    CreateConfiguration: "POST /v1/configurations",
    CreateReplicator: "POST /replication/v1/replicators",
    CreateVpcConnection: "POST /v1/vpc-connection",
    DeleteCluster: "DELETE /v1/clusters/{ClusterArn}",
    DeleteClusterPolicy: "DELETE /v1/clusters/{ClusterArn}/policy",
    DeleteConfiguration: "DELETE /v1/configurations/{Arn}",
    DeleteReplicator: "DELETE /replication/v1/replicators/{ReplicatorArn}",
    DeleteVpcConnection: "DELETE /v1/vpc-connection/{Arn}",
    DescribeCluster: "GET /v1/clusters/{ClusterArn}",
    DescribeClusterOperation: "GET /v1/operations/{ClusterOperationArn}",
    DescribeClusterOperationV2: "GET /api/v2/operations/{ClusterOperationArn}",
    DescribeClusterV2: "GET /api/v2/clusters/{ClusterArn}",
    DescribeConfiguration: "GET /v1/configurations/{Arn}",
    DescribeConfigurationRevision:
      "GET /v1/configurations/{Arn}/revisions/{Revision}",
    DescribeReplicator: "GET /replication/v1/replicators/{ReplicatorArn}",
    DescribeVpcConnection: "GET /v1/vpc-connection/{Arn}",
    GetBootstrapBrokers: "GET /v1/clusters/{ClusterArn}/bootstrap-brokers",
    GetClusterPolicy: "GET /v1/clusters/{ClusterArn}/policy",
    GetCompatibleKafkaVersions: "GET /v1/compatible-kafka-versions",
    ListClientVpcConnections:
      "GET /v1/clusters/{ClusterArn}/client-vpc-connections",
    ListClusterOperations: "GET /v1/clusters/{ClusterArn}/operations",
    ListClusterOperationsV2: "GET /api/v2/clusters/{ClusterArn}/operations",
    ListClusters: "GET /v1/clusters",
    ListClustersV2: "GET /api/v2/clusters",
    ListConfigurationRevisions: "GET /v1/configurations/{Arn}/revisions",
    ListConfigurations: "GET /v1/configurations",
    ListKafkaVersions: "GET /v1/kafka-versions",
    ListNodes: "GET /v1/clusters/{ClusterArn}/nodes",
    ListReplicators: "GET /replication/v1/replicators",
    ListScramSecrets: "GET /v1/clusters/{ClusterArn}/scram-secrets",
    ListTagsForResource: "GET /v1/tags/{ResourceArn}",
    ListVpcConnections: "GET /v1/vpc-connections",
    PutClusterPolicy: "PUT /v1/clusters/{ClusterArn}/policy",
    RebootBroker: "PUT /v1/clusters/{ClusterArn}/reboot-broker",
    RejectClientVpcConnection:
      "PUT /v1/clusters/{ClusterArn}/client-vpc-connection",
    TagResource: "POST /v1/tags/{ResourceArn}",
    UntagResource: "DELETE /v1/tags/{ResourceArn}",
    UpdateBrokerCount: "PUT /v1/clusters/{ClusterArn}/nodes/count",
    UpdateBrokerStorage: "PUT /v1/clusters/{ClusterArn}/nodes/storage",
    UpdateBrokerType: "PUT /v1/clusters/{ClusterArn}/nodes/type",
    UpdateClusterConfiguration: "PUT /v1/clusters/{ClusterArn}/configuration",
    UpdateClusterKafkaVersion: "PUT /v1/clusters/{ClusterArn}/version",
    UpdateConfiguration: "PUT /v1/configurations/{Arn}",
    UpdateConnectivity: "PUT /v1/clusters/{ClusterArn}/connectivity",
    UpdateMonitoring: "PUT /v1/clusters/{ClusterArn}/monitoring",
    UpdateReplicationInfo:
      "PUT /replication/v1/replicators/{ReplicatorArn}/replication-info",
    UpdateSecurity: "PATCH /v1/clusters/{ClusterArn}/security",
    UpdateStorage: "PUT /v1/clusters/{ClusterArn}/storage",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type Kafka = typeof Kafka;
export const Kafka = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestJson1Handler());
  }
} as unknown as typeof _KafkaClient;

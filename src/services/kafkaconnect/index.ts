import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { KafkaConnect as _KafkaConnectClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "KafkaConnect",
  version: "2021-09-14",
  protocol: "restJson1",
  sigV4ServiceName: "kafkaconnect",
  endpointPrefix: "kafkaconnect",
  operations: {
    CreateConnector: "POST /v1/connectors",
    CreateCustomPlugin: "POST /v1/custom-plugins",
    CreateWorkerConfiguration: "POST /v1/worker-configurations",
    DeleteConnector: "DELETE /v1/connectors/{connectorArn}",
    DeleteCustomPlugin: "DELETE /v1/custom-plugins/{customPluginArn}",
    DeleteWorkerConfiguration:
      "DELETE /v1/worker-configurations/{workerConfigurationArn}",
    DescribeConnector: "GET /v1/connectors/{connectorArn}",
    DescribeConnectorOperation:
      "GET /v1/connectorOperations/{connectorOperationArn}",
    DescribeCustomPlugin: "GET /v1/custom-plugins/{customPluginArn}",
    DescribeWorkerConfiguration:
      "GET /v1/worker-configurations/{workerConfigurationArn}",
    ListConnectorOperations: "GET /v1/connectors/{connectorArn}/operations",
    ListConnectors: "GET /v1/connectors",
    ListCustomPlugins: "GET /v1/custom-plugins",
    ListTagsForResource: "GET /v1/tags/{resourceArn}",
    ListWorkerConfigurations: "GET /v1/worker-configurations",
    TagResource: "POST /v1/tags/{resourceArn}",
    UntagResource: "DELETE /v1/tags/{resourceArn}",
    UpdateConnector: "PUT /v1/connectors/{connectorArn}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type KafkaConnect = typeof KafkaConnect;
export const KafkaConnect = class extends AWSServiceClient {
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
} as unknown as typeof _KafkaConnectClient;

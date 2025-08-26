import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Appflow as _Appflow } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Appflow",
  version: "2020-08-23",
  protocol: "restJson1",
  sigV4ServiceName: "appflow",
  endpointPrefix: "appflow",
  operations: {
    CancelFlowExecutions: "POST /cancel-flow-executions",
    CreateConnectorProfile: "POST /create-connector-profile",
    CreateFlow: "POST /create-flow",
    DeleteConnectorProfile: "POST /delete-connector-profile",
    DeleteFlow: "POST /delete-flow",
    DescribeConnector: "POST /describe-connector",
    DescribeConnectorEntity: "POST /describe-connector-entity",
    DescribeConnectorProfiles: "POST /describe-connector-profiles",
    DescribeConnectors: "POST /describe-connectors",
    DescribeFlow: "POST /describe-flow",
    DescribeFlowExecutionRecords: "POST /describe-flow-execution-records",
    ListConnectorEntities: "POST /list-connector-entities",
    ListConnectors: "POST /list-connectors",
    ListFlows: "POST /list-flows",
    ListTagsForResource: "GET /tags/{resourceArn}",
    RegisterConnector: "POST /register-connector",
    ResetConnectorMetadataCache: "POST /reset-connector-metadata-cache",
    StartFlow: "POST /start-flow",
    StopFlow: "POST /stop-flow",
    TagResource: "POST /tags/{resourceArn}",
    UnregisterConnector: "POST /unregister-connector",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateConnectorProfile: "POST /update-connector-profile",
    UpdateConnectorRegistration: "POST /update-connector-registration",
    UpdateFlow: "POST /update-flow",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Appflow = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Appflow;

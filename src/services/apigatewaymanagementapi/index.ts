import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ApiGatewayManagementApi as _ApiGatewayManagementApi } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "ApiGatewayManagementApi",
  version: "2018-11-29",
  protocol: "restJson1",
  sigV4ServiceName: "execute-api",
  endpointPrefix: "execute-api",
  operations: {
    DeleteConnection: "DELETE /@connections/{ConnectionId}",
    GetConnection: "GET /@connections/{ConnectionId}",
    PostToConnection: "POST /@connections/{ConnectionId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ApiGatewayManagementApi = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ApiGatewayManagementApi;

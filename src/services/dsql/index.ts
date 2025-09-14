import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { DSQL as _DSQLClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "DSQL",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "dsql",
  endpointPrefix: "dsql",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CreateCluster: "POST /cluster",
    DeleteCluster: "DELETE /cluster/{identifier}",
    GetCluster: "GET /cluster/{identifier}",
    GetVpcEndpointServiceName:
      "GET /clusters/{identifier}/vpc-endpoint-service-name",
    ListClusters: "GET /cluster",
    UpdateCluster: "POST /cluster/{identifier}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const DSQL = class extends AWSServiceClient {
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
} as unknown as typeof _DSQLClient;

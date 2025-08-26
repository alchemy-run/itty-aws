import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { EMRcontainers as _EMRcontainers } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "EMR containers",
  version: "2020-10-01",
  protocol: "restJson1",
  sigV4ServiceName: "emr-containers",
  endpointPrefix: "emr-containers",
  operations: {
    CancelJobRun: "DELETE /virtualclusters/{virtualClusterId}/jobruns/{id}",
    CreateJobTemplate: "POST /jobtemplates",
    CreateManagedEndpoint: "POST /virtualclusters/{virtualClusterId}/endpoints",
    CreateSecurityConfiguration: "POST /securityconfigurations",
    CreateVirtualCluster: "POST /virtualclusters",
    DeleteJobTemplate: "DELETE /jobtemplates/{id}",
    DeleteManagedEndpoint:
      "DELETE /virtualclusters/{virtualClusterId}/endpoints/{id}",
    DeleteVirtualCluster: "DELETE /virtualclusters/{id}",
    DescribeJobRun: "GET /virtualclusters/{virtualClusterId}/jobruns/{id}",
    DescribeJobTemplate: "GET /jobtemplates/{id}",
    DescribeManagedEndpoint:
      "GET /virtualclusters/{virtualClusterId}/endpoints/{id}",
    DescribeSecurityConfiguration: "GET /securityconfigurations/{id}",
    DescribeVirtualCluster: "GET /virtualclusters/{id}",
    GetManagedEndpointSessionCredentials:
      "POST /virtualclusters/{virtualClusterIdentifier}/endpoints/{endpointIdentifier}/credentials",
    ListJobRuns: "GET /virtualclusters/{virtualClusterId}/jobruns",
    ListJobTemplates: "GET /jobtemplates",
    ListManagedEndpoints: "GET /virtualclusters/{virtualClusterId}/endpoints",
    ListSecurityConfigurations: "GET /securityconfigurations",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListVirtualClusters: "GET /virtualclusters",
    StartJobRun: "POST /virtualclusters/{virtualClusterId}/jobruns",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const EMRcontainers = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _EMRcontainers;

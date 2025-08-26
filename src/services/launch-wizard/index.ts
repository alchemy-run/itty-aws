import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { LaunchWizard as _LaunchWizard } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Launch Wizard",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "launchwizard",
  endpointPrefix: "launchwizard",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CreateDeployment: "POST /createDeployment",
    DeleteDeployment: "POST /deleteDeployment",
    GetDeployment: "POST /getDeployment",
    GetWorkload: "POST /getWorkload",
    GetWorkloadDeploymentPattern: "POST /getWorkloadDeploymentPattern",
    ListDeploymentEvents: "POST /listDeploymentEvents",
    ListDeployments: "POST /listDeployments",
    ListWorkloadDeploymentPatterns: "POST /listWorkloadDeploymentPatterns",
    ListWorkloads: "POST /listWorkloads",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const LaunchWizard = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _LaunchWizard;

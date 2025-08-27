import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { synthetics as _synthetics } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "synthetics",
  version: "2017-10-11",
  protocol: "restJson1",
  sigV4ServiceName: "synthetics",
  endpointPrefix: "synthetics",
  operations: {
    AssociateResource: "PATCH /group/{GroupIdentifier}/associate",
    CreateCanary: "POST /canary",
    CreateGroup: "POST /group",
    DeleteCanary: "DELETE /canary/{Name}",
    DeleteGroup: "DELETE /group/{GroupIdentifier}",
    DescribeCanaries: "POST /canaries",
    DescribeCanariesLastRun: "POST /canaries/last-run",
    DescribeRuntimeVersions: "POST /runtime-versions",
    DisassociateResource: "PATCH /group/{GroupIdentifier}/disassociate",
    GetCanary: "GET /canary/{Name}",
    GetCanaryRuns: "POST /canary/{Name}/runs",
    GetGroup: "GET /group/{GroupIdentifier}",
    ListAssociatedGroups: "POST /resource/{ResourceArn}/groups",
    ListGroupResources: "POST /group/{GroupIdentifier}/resources",
    ListGroups: "POST /groups",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    StartCanary: "POST /canary/{Name}/start",
    StartCanaryDryRun: "POST /canary/{Name}/dry-run/start",
    StopCanary: "POST /canary/{Name}/stop",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateCanary: "PATCH /canary/{Name}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const synthetics = class extends AWSServiceClient {
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
} as unknown as typeof _synthetics;

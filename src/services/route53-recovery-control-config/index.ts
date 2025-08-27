import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Route53RecoveryControlConfig as _Route53RecoveryControlConfig } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Route53 Recovery Control Config",
  version: "2020-11-02",
  protocol: "restJson1",
  sigV4ServiceName: "route53-recovery-control-config",
  endpointPrefix: "route53-recovery-control-config",
  operations: {
    CreateCluster: "POST /cluster",
    CreateControlPanel: "POST /controlpanel",
    CreateRoutingControl: "POST /routingcontrol",
    CreateSafetyRule: "POST /safetyrule",
    DeleteCluster: "DELETE /cluster/{ClusterArn}",
    DeleteControlPanel: "DELETE /controlpanel/{ControlPanelArn}",
    DeleteRoutingControl: "DELETE /routingcontrol/{RoutingControlArn}",
    DeleteSafetyRule: "DELETE /safetyrule/{SafetyRuleArn}",
    DescribeCluster: "GET /cluster/{ClusterArn}",
    DescribeControlPanel: "GET /controlpanel/{ControlPanelArn}",
    DescribeRoutingControl: "GET /routingcontrol/{RoutingControlArn}",
    DescribeSafetyRule: "GET /safetyrule/{SafetyRuleArn}",
    GetResourcePolicy: "GET /resourcePolicy/{ResourceArn}",
    ListAssociatedRoute53HealthChecks:
      "GET /routingcontrol/{RoutingControlArn}/associatedRoute53HealthChecks",
    ListClusters: "GET /cluster",
    ListControlPanels: "GET /controlpanels",
    ListRoutingControls: "GET /controlpanel/{ControlPanelArn}/routingcontrols",
    ListSafetyRules: "GET /controlpanel/{ControlPanelArn}/safetyrules",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateCluster: "PUT /cluster",
    UpdateControlPanel: "PUT /controlpanel",
    UpdateRoutingControl: "PUT /routingcontrol",
    UpdateSafetyRule: "PUT /safetyrule",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Route53RecoveryControlConfig = class extends AWSServiceClient {
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
} as unknown as typeof _Route53RecoveryControlConfig;

import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { NetworkFlowMonitor as _NetworkFlowMonitorClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "NetworkFlowMonitor",
  version: "2023-04-19",
  protocol: "restJson1",
  sigV4ServiceName: "networkflowmonitor",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CreateMonitor: "POST /monitors",
    CreateScope: "POST /scopes",
    DeleteMonitor: "DELETE /monitors/{monitorName}",
    DeleteScope: "DELETE /scopes/{scopeId}",
    GetMonitor: "GET /monitors/{monitorName}",
    GetQueryResultsMonitorTopContributors:
      "GET /monitors/{monitorName}/topContributorsQueries/{queryId}/results",
    GetQueryResultsWorkloadInsightsTopContributors:
      "GET /workloadInsights/{scopeId}/topContributorsQueries/{queryId}/results",
    GetQueryResultsWorkloadInsightsTopContributorsData:
      "GET /workloadInsights/{scopeId}/topContributorsDataQueries/{queryId}/results",
    GetQueryStatusMonitorTopContributors:
      "GET /monitors/{monitorName}/topContributorsQueries/{queryId}/status",
    GetQueryStatusWorkloadInsightsTopContributors:
      "GET /workloadInsights/{scopeId}/topContributorsQueries/{queryId}/status",
    GetQueryStatusWorkloadInsightsTopContributorsData:
      "GET /workloadInsights/{scopeId}/topContributorsDataQueries/{queryId}/status",
    GetScope: "GET /scopes/{scopeId}",
    ListMonitors: "GET /monitors",
    ListScopes: "GET /scopes",
    StartQueryMonitorTopContributors:
      "POST /monitors/{monitorName}/topContributorsQueries",
    StartQueryWorkloadInsightsTopContributors:
      "POST /workloadInsights/{scopeId}/topContributorsQueries",
    StartQueryWorkloadInsightsTopContributorsData:
      "POST /workloadInsights/{scopeId}/topContributorsDataQueries",
    StopQueryMonitorTopContributors:
      "DELETE /monitors/{monitorName}/topContributorsQueries/{queryId}",
    StopQueryWorkloadInsightsTopContributors:
      "DELETE /workloadInsights/{scopeId}/topContributorsQueries/{queryId}",
    StopQueryWorkloadInsightsTopContributorsData:
      "DELETE /workloadInsights/{scopeId}/topContributorsDataQueries/{queryId}",
    UpdateMonitor: "PATCH /monitors/{monitorName}",
    UpdateScope: "PATCH /scopes/{scopeId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const NetworkFlowMonitor = class extends AWSServiceClient {
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
} as unknown as typeof _NetworkFlowMonitorClient;

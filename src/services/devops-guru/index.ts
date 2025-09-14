import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { DevOpsGuru as _DevOpsGuruClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "DevOps Guru",
  version: "2020-12-01",
  protocol: "restJson1",
  sigV4ServiceName: "devops-guru",
  endpointPrefix: "devops-guru",
  operations: {
    AddNotificationChannel: "PUT /channels",
    DeleteInsight: "DELETE /insights/{Id}",
    DescribeAccountHealth: "GET /accounts/health",
    DescribeAccountOverview: "POST /accounts/overview",
    DescribeAnomaly: "GET /anomalies/{Id}",
    DescribeEventSourcesConfig: "POST /event-sources",
    DescribeFeedback: "POST /feedback",
    DescribeInsight: "GET /insights/{Id}",
    DescribeOrganizationHealth: "POST /organization/health",
    DescribeOrganizationOverview: "POST /organization/overview",
    DescribeOrganizationResourceCollectionHealth:
      "POST /organization/health/resource-collection",
    DescribeResourceCollectionHealth:
      "GET /accounts/health/resource-collection/{ResourceCollectionType}",
    DescribeServiceIntegration: "GET /service-integrations",
    GetCostEstimation: "GET /cost-estimation",
    GetResourceCollection: "GET /resource-collections/{ResourceCollectionType}",
    ListAnomaliesForInsight: "POST /anomalies/insight/{InsightId}",
    ListAnomalousLogGroups: "POST /list-log-anomalies",
    ListEvents: "POST /events",
    ListInsights: "POST /insights",
    ListMonitoredResources: "POST /monitoredResources",
    ListNotificationChannels: "POST /channels",
    ListOrganizationInsights: "POST /organization/insights",
    ListRecommendations: "POST /recommendations",
    PutFeedback: "PUT /feedback",
    RemoveNotificationChannel: "DELETE /channels/{Id}",
    SearchInsights: "POST /insights/search",
    SearchOrganizationInsights: "POST /organization/insights/search",
    StartCostEstimation: "PUT /cost-estimation",
    UpdateEventSourcesConfig: "PUT /event-sources",
    UpdateResourceCollection: "PUT /resource-collections",
    UpdateServiceIntegration: "PUT /service-integrations",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const DevOpsGuru = class extends AWSServiceClient {
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
} as unknown as typeof _DevOpsGuruClient;

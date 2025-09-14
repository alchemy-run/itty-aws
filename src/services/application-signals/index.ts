import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ApplicationSignals as _ApplicationSignalsClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Application Signals",
  version: "2024-04-15",
  protocol: "restJson1",
  sigV4ServiceName: "application-signals",
  endpointPrefix: "application-signals",
  operations: {
    BatchGetServiceLevelObjectiveBudgetReport: "POST /budget-report",
    BatchUpdateExclusionWindows: "PATCH /exclusion-windows",
    GetService: "POST /service",
    ListServiceDependencies: "POST /service-dependencies",
    ListServiceDependents: "POST /service-dependents",
    ListServiceLevelObjectiveExclusionWindows:
      "GET /slo/{Id}/exclusion-windows",
    ListServiceOperations: "POST /service-operations",
    ListServices: "GET /services",
    ListTagsForResource: "GET /tags",
    StartDiscovery: "POST /start-discovery",
    TagResource: "POST /tag-resource",
    UntagResource: "POST /untag-resource",
    CreateServiceLevelObjective: "POST /slo",
    DeleteServiceLevelObjective: "DELETE /slo/{Id}",
    GetServiceLevelObjective: "GET /slo/{Id}",
    ListServiceLevelObjectives: "POST /slos",
    UpdateServiceLevelObjective: "PATCH /slo/{Id}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ApplicationSignals = class extends AWSServiceClient {
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
} as unknown as typeof _ApplicationSignalsClient;

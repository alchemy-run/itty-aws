import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ApplicationCostProfiler as _ApplicationCostProfiler } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "ApplicationCostProfiler",
  version: "2020-09-10",
  protocol: "restJson1",
  sigV4ServiceName: "application-cost-profiler",
  endpointPrefix: "application-cost-profiler",
  operations: {
    DeleteReportDefinition: "DELETE /reportDefinition/{reportId}",
    GetReportDefinition: "GET /reportDefinition/{reportId}",
    ImportApplicationUsage: "POST /importApplicationUsage",
    ListReportDefinitions: "GET /reportDefinition",
    PutReportDefinition: "POST /reportDefinition",
    UpdateReportDefinition: "PUT /reportDefinition/{reportId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ApplicationCostProfiler = class extends AWSServiceClient {
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
} as unknown as typeof _ApplicationCostProfiler;

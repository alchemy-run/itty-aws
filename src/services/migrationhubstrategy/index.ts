import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MigrationHubStrategy as _MigrationHubStrategy } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "MigrationHubStrategy",
  version: "2020-02-19",
  protocol: "restJson1",
  sigV4ServiceName: "migrationhub-strategy",
  endpointPrefix: "migrationhub-strategy",
  operations: {
    GetApplicationComponentDetails:
      "GET /get-applicationcomponent-details/{applicationComponentId}",
    GetApplicationComponentStrategies:
      "GET /get-applicationcomponent-strategies/{applicationComponentId}",
    GetAssessment: "GET /get-assessment/{id}",
    GetImportFileTask: "GET /get-import-file-task/{id}",
    GetLatestAssessmentId: "GET /get-latest-assessment-id",
    GetPortfolioPreferences: "GET /get-portfolio-preferences",
    GetPortfolioSummary: "GET /get-portfolio-summary",
    GetRecommendationReportDetails:
      "GET /get-recommendation-report-details/{id}",
    GetServerDetails: "GET /get-server-details/{serverId}",
    GetServerStrategies: "GET /get-server-strategies/{serverId}",
    ListAnalyzableServers: "POST /list-analyzable-servers",
    ListApplicationComponents: "POST /list-applicationcomponents",
    ListCollectors: "GET /list-collectors",
    ListImportFileTask: "GET /list-import-file-task",
    ListServers: "POST /list-servers",
    PutPortfolioPreferences: "POST /put-portfolio-preferences",
    StartAssessment: "POST /start-assessment",
    StartImportFileTask: "POST /start-import-file-task",
    StartRecommendationReportGeneration:
      "POST /start-recommendation-report-generation",
    StopAssessment: "POST /stop-assessment",
    UpdateApplicationComponentConfig:
      "POST /update-applicationcomponent-config/",
    UpdateServerConfig: "POST /update-server-config/",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MigrationHubStrategy = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _MigrationHubStrategy;

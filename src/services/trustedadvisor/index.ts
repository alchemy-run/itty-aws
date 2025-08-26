import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { TrustedAdvisor as _TrustedAdvisor } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "TrustedAdvisor",
  version: "2022-09-15",
  protocol: "restJson1",
  sigV4ServiceName: "trustedadvisor",
  operations: {
    BatchUpdateRecommendationResourceExclusion:
      "PUT /v1/batch-update-recommendation-resource-exclusion",
    GetOrganizationRecommendation:
      "GET /v1/organization-recommendations/{organizationRecommendationIdentifier}",
    GetRecommendation: "GET /v1/recommendations/{recommendationIdentifier}",
    ListChecks: "GET /v1/checks",
    ListOrganizationRecommendationAccounts:
      "GET /v1/organization-recommendations/{organizationRecommendationIdentifier}/accounts",
    ListOrganizationRecommendationResources:
      "GET /v1/organization-recommendations/{organizationRecommendationIdentifier}/resources",
    ListOrganizationRecommendations: "GET /v1/organization-recommendations",
    ListRecommendationResources:
      "GET /v1/recommendations/{recommendationIdentifier}/resources",
    ListRecommendations: "GET /v1/recommendations",
    UpdateOrganizationRecommendationLifecycle:
      "PUT /v1/organization-recommendations/{organizationRecommendationIdentifier}/lifecycle",
    UpdateRecommendationLifecycle:
      "PUT /v1/recommendations/{recommendationIdentifier}/lifecycle",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const TrustedAdvisor = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _TrustedAdvisor;

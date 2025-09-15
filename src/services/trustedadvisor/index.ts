import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { TrustedAdvisor as _TrustedAdvisorClient } from "./types.ts";

export * from "./types.ts";

export {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";

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

export type _TrustedAdvisor = _TrustedAdvisorClient;
export interface TrustedAdvisor extends _TrustedAdvisor {}
export const TrustedAdvisor = class extends AWSServiceClient {
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
} as unknown as typeof _TrustedAdvisorClient;

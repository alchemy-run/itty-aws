import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { resiliencehub as _resiliencehubClient } from "./types.ts";

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
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "resiliencehub",
  version: "2020-04-30",
  protocol: "restJson1",
  sigV4ServiceName: "resiliencehub",
  endpointPrefix: "resiliencehub",
  operations: {
    AcceptResourceGroupingRecommendations:
      "POST /accept-resource-grouping-recommendations",
    AddDraftAppVersionResourceMappings:
      "POST /add-draft-app-version-resource-mappings",
    BatchUpdateRecommendationStatus: "POST /batch-update-recommendation-status",
    CreateApp: "POST /create-app",
    CreateAppVersionAppComponent: "POST /create-app-version-app-component",
    CreateAppVersionResource: "POST /create-app-version-resource",
    CreateRecommendationTemplate: "POST /create-recommendation-template",
    CreateResiliencyPolicy: "POST /create-resiliency-policy",
    DeleteApp: "POST /delete-app",
    DeleteAppAssessment: "POST /delete-app-assessment",
    DeleteAppInputSource: "POST /delete-app-input-source",
    DeleteAppVersionAppComponent: "POST /delete-app-version-app-component",
    DeleteAppVersionResource: "POST /delete-app-version-resource",
    DeleteRecommendationTemplate: "POST /delete-recommendation-template",
    DeleteResiliencyPolicy: "POST /delete-resiliency-policy",
    DescribeApp: "POST /describe-app",
    DescribeAppAssessment: "POST /describe-app-assessment",
    DescribeAppVersion: "POST /describe-app-version",
    DescribeAppVersionAppComponent: "POST /describe-app-version-app-component",
    DescribeAppVersionResource: "POST /describe-app-version-resource",
    DescribeAppVersionResourcesResolutionStatus:
      "POST /describe-app-version-resources-resolution-status",
    DescribeAppVersionTemplate: "POST /describe-app-version-template",
    DescribeDraftAppVersionResourcesImportStatus:
      "POST /describe-draft-app-version-resources-import-status",
    DescribeMetricsExport: "POST /describe-metrics-export",
    DescribeResiliencyPolicy: "POST /describe-resiliency-policy",
    DescribeResourceGroupingRecommendationTask:
      "POST /describe-resource-grouping-recommendation-task",
    ImportResourcesToDraftAppVersion:
      "POST /import-resources-to-draft-app-version",
    ListAlarmRecommendations: "POST /list-alarm-recommendations",
    ListAppAssessmentComplianceDrifts:
      "POST /list-app-assessment-compliance-drifts",
    ListAppAssessmentResourceDrifts:
      "POST /list-app-assessment-resource-drifts",
    ListAppAssessments: "GET /list-app-assessments",
    ListAppComponentCompliances: "POST /list-app-component-compliances",
    ListAppComponentRecommendations: "POST /list-app-component-recommendations",
    ListAppInputSources: "POST /list-app-input-sources",
    ListApps: "GET /list-apps",
    ListAppVersionAppComponents: "POST /list-app-version-app-components",
    ListAppVersionResourceMappings: "POST /list-app-version-resource-mappings",
    ListAppVersionResources: "POST /list-app-version-resources",
    ListAppVersions: "POST /list-app-versions",
    ListMetrics: "POST /list-metrics",
    ListRecommendationTemplates: "GET /list-recommendation-templates",
    ListResiliencyPolicies: "GET /list-resiliency-policies",
    ListResourceGroupingRecommendations:
      "GET /list-resource-grouping-recommendations",
    ListSopRecommendations: "POST /list-sop-recommendations",
    ListSuggestedResiliencyPolicies: "GET /list-suggested-resiliency-policies",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListTestRecommendations: "POST /list-test-recommendations",
    ListUnsupportedAppVersionResources:
      "POST /list-unsupported-app-version-resources",
    PublishAppVersion: "POST /publish-app-version",
    PutDraftAppVersionTemplate: "POST /put-draft-app-version-template",
    RejectResourceGroupingRecommendations:
      "POST /reject-resource-grouping-recommendations",
    RemoveDraftAppVersionResourceMappings:
      "POST /remove-draft-app-version-resource-mappings",
    ResolveAppVersionResources: "POST /resolve-app-version-resources",
    StartAppAssessment: "POST /start-app-assessment",
    StartMetricsExport: "POST /start-metrics-export",
    StartResourceGroupingRecommendationTask:
      "POST /start-resource-grouping-recommendation-task",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateApp: "POST /update-app",
    UpdateAppVersion: "POST /update-app-version",
    UpdateAppVersionAppComponent: "POST /update-app-version-app-component",
    UpdateAppVersionResource: "POST /update-app-version-resource",
    UpdateResiliencyPolicy: "POST /update-resiliency-policy",
  },
} as const satisfies ServiceMetadata;

export type _resiliencehub = _resiliencehubClient;
export interface resiliencehub extends _resiliencehub {}
export const resiliencehub = class extends AWSServiceClient {
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
} as unknown as typeof _resiliencehubClient;

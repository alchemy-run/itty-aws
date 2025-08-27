import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { AccessAnalyzer as _AccessAnalyzer } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "AccessAnalyzer",
  version: "2019-11-01",
  protocol: "restJson1",
  sigV4ServiceName: "access-analyzer",
  operations: {
    ApplyArchiveRule: "PUT /archive-rule",
    CancelPolicyGeneration: "PUT /policy/generation/{jobId}",
    CheckAccessNotGranted: "POST /policy/check-access-not-granted",
    CheckNoNewAccess: "POST /policy/check-no-new-access",
    CheckNoPublicAccess: "POST /policy/check-no-public-access",
    CreateAccessPreview: "PUT /access-preview",
    GenerateFindingRecommendation: "POST /recommendation/{id}",
    GetAccessPreview: "GET /access-preview/{accessPreviewId}",
    GetAnalyzedResource: "GET /analyzed-resource",
    GetFinding: "GET /finding/{id}",
    GetFindingRecommendation: "GET /recommendation/{id}",
    GetFindingsStatistics: "POST /analyzer/findings/statistics",
    GetFindingV2: "GET /findingv2/{id}",
    GetGeneratedPolicy: "GET /policy/generation/{jobId}",
    ListAccessPreviewFindings: "POST /access-preview/{accessPreviewId}",
    ListAccessPreviews: "GET /access-preview",
    ListAnalyzedResources: "POST /analyzed-resource",
    ListFindings: "POST /finding",
    ListFindingsV2: "POST /findingv2",
    ListPolicyGenerations: "GET /policy/generation",
    ListTagsForResource: "GET /tags/{resourceArn}",
    StartPolicyGeneration: "PUT /policy/generation",
    StartResourceScan: "POST /resource/scan",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateFindings: "PUT /finding",
    ValidatePolicy: "POST /policy/validation",
    CreateAnalyzer: "PUT /analyzer",
    CreateArchiveRule: "PUT /analyzer/{analyzerName}/archive-rule",
    DeleteAnalyzer: "DELETE /analyzer/{analyzerName}",
    DeleteArchiveRule:
      "DELETE /analyzer/{analyzerName}/archive-rule/{ruleName}",
    GetAnalyzer: "GET /analyzer/{analyzerName}",
    GetArchiveRule: "GET /analyzer/{analyzerName}/archive-rule/{ruleName}",
    ListAnalyzers: "GET /analyzer",
    ListArchiveRules: "GET /analyzer/{analyzerName}/archive-rule",
    UpdateAnalyzer: "PUT /analyzer/{analyzerName}",
    UpdateArchiveRule: "PUT /analyzer/{analyzerName}/archive-rule/{ruleName}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const AccessAnalyzer = class extends AWSServiceClient {
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
} as unknown as typeof _AccessAnalyzer;

import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { WellArchitected as _WellArchitected } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "WellArchitected",
  version: "2020-03-31",
  protocol: "restJson1",
  sigV4ServiceName: "wellarchitected",
  endpointPrefix: "wellarchitected",
  operations: {
    AssociateLenses: "PATCH /workloads/{WorkloadId}/associateLenses",
    AssociateProfiles: "PATCH /workloads/{WorkloadId}/associateProfiles",
    CreateLensShare: "POST /lenses/{LensAlias}/shares",
    CreateLensVersion: "POST /lenses/{LensAlias}/versions",
    CreateMilestone: "POST /workloads/{WorkloadId}/milestones",
    CreateProfile: "POST /profiles",
    CreateProfileShare: "POST /profiles/{ProfileArn}/shares",
    CreateReviewTemplate: "POST /reviewTemplates",
    CreateTemplateShare: "POST /templates/shares/{TemplateArn}",
    CreateWorkload: "POST /workloads",
    CreateWorkloadShare: "POST /workloads/{WorkloadId}/shares",
    DeleteLens: "DELETE /lenses/{LensAlias}",
    DeleteLensShare: "DELETE /lenses/{LensAlias}/shares/{ShareId}",
    DeleteProfile: "DELETE /profiles/{ProfileArn}",
    DeleteProfileShare: "DELETE /profiles/{ProfileArn}/shares/{ShareId}",
    DeleteReviewTemplate: "DELETE /reviewTemplates/{TemplateArn}",
    DeleteTemplateShare: "DELETE /templates/shares/{TemplateArn}/{ShareId}",
    DeleteWorkload: "DELETE /workloads/{WorkloadId}",
    DeleteWorkloadShare: "DELETE /workloads/{WorkloadId}/shares/{ShareId}",
    DisassociateLenses: "PATCH /workloads/{WorkloadId}/disassociateLenses",
    DisassociateProfiles: "PATCH /workloads/{WorkloadId}/disassociateProfiles",
    ExportLens: "GET /lenses/{LensAlias}/export",
    GetAnswer:
      "GET /workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}",
    GetConsolidatedReport: "GET /consolidatedReport",
    GetGlobalSettings: "GET /global-settings",
    GetLens: "GET /lenses/{LensAlias}",
    GetLensReview: "GET /workloads/{WorkloadId}/lensReviews/{LensAlias}",
    GetLensReviewReport:
      "GET /workloads/{WorkloadId}/lensReviews/{LensAlias}/report",
    GetLensVersionDifference: "GET /lenses/{LensAlias}/versionDifference",
    GetMilestone: "GET /workloads/{WorkloadId}/milestones/{MilestoneNumber}",
    GetProfile: "GET /profiles/{ProfileArn}",
    GetProfileTemplate: "GET /profileTemplate",
    GetReviewTemplate: "GET /reviewTemplates/{TemplateArn}",
    GetReviewTemplateAnswer:
      "GET /reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}",
    GetReviewTemplateLensReview:
      "GET /reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}",
    GetWorkload: "GET /workloads/{WorkloadId}",
    ImportLens: "PUT /importLens",
    ListAnswers: "GET /workloads/{WorkloadId}/lensReviews/{LensAlias}/answers",
    ListCheckDetails: "POST /workloads/{WorkloadId}/checks",
    ListCheckSummaries: "POST /workloads/{WorkloadId}/checkSummaries",
    ListLenses: "GET /lenses",
    ListLensReviewImprovements:
      "GET /workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements",
    ListLensReviews: "GET /workloads/{WorkloadId}/lensReviews",
    ListLensShares: "GET /lenses/{LensAlias}/shares",
    ListMilestones: "POST /workloads/{WorkloadId}/milestonesSummaries",
    ListNotifications: "POST /notifications",
    ListProfileNotifications: "GET /profileNotifications",
    ListProfiles: "GET /profileSummaries",
    ListProfileShares: "GET /profiles/{ProfileArn}/shares",
    ListReviewTemplateAnswers:
      "GET /reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers",
    ListReviewTemplates: "GET /reviewTemplates",
    ListShareInvitations: "GET /shareInvitations",
    ListTagsForResource: "GET /tags/{WorkloadArn}",
    ListTemplateShares: "GET /templates/shares/{TemplateArn}",
    ListWorkloads: "POST /workloadsSummaries",
    ListWorkloadShares: "GET /workloads/{WorkloadId}/shares",
    TagResource: "POST /tags/{WorkloadArn}",
    UntagResource: "DELETE /tags/{WorkloadArn}",
    UpdateAnswer:
      "PATCH /workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}",
    UpdateGlobalSettings: "PATCH /global-settings",
    UpdateIntegration: "POST /workloads/{WorkloadId}/updateIntegration",
    UpdateLensReview: "PATCH /workloads/{WorkloadId}/lensReviews/{LensAlias}",
    UpdateProfile: "PATCH /profiles/{ProfileArn}",
    UpdateReviewTemplate: "PATCH /reviewTemplates/{TemplateArn}",
    UpdateReviewTemplateAnswer:
      "PATCH /reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}",
    UpdateReviewTemplateLensReview:
      "PATCH /reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}",
    UpdateShareInvitation: "PATCH /shareInvitations/{ShareInvitationId}",
    UpdateWorkload: "PATCH /workloads/{WorkloadId}",
    UpdateWorkloadShare: "PATCH /workloads/{WorkloadId}/shares/{ShareId}",
    UpgradeLensReview:
      "PUT /workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade",
    UpgradeProfileVersion:
      "PUT /workloads/{WorkloadId}/profiles/{ProfileArn}/upgrade",
    UpgradeReviewTemplateLensReview:
      "PUT /reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/upgrade",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const WellArchitected = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _WellArchitected;

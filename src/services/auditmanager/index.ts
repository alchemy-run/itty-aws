import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { AuditManager as _AuditManagerClient } from "./types.ts";

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
  sdkId: "AuditManager",
  version: "2017-07-25",
  protocol: "restJson1",
  sigV4ServiceName: "auditmanager",
  endpointPrefix: "auditmanager",
  operations: {
    AssociateAssessmentReportEvidenceFolder:
      "PUT /assessments/{assessmentId}/associateToAssessmentReport",
    BatchAssociateAssessmentReportEvidence:
      "PUT /assessments/{assessmentId}/batchAssociateToAssessmentReport",
    BatchCreateDelegationByAssessment:
      "POST /assessments/{assessmentId}/delegations",
    BatchDeleteDelegationByAssessment:
      "PUT /assessments/{assessmentId}/delegations",
    BatchDisassociateAssessmentReportEvidence:
      "PUT /assessments/{assessmentId}/batchDisassociateFromAssessmentReport",
    BatchImportEvidenceToAssessmentControl:
      "POST /assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence",
    CreateAssessment: "POST /assessments",
    CreateAssessmentFramework: "POST /assessmentFrameworks",
    CreateAssessmentReport: "POST /assessments/{assessmentId}/reports",
    CreateControl: "POST /controls",
    DeleteAssessment: "DELETE /assessments/{assessmentId}",
    DeleteAssessmentFramework: "DELETE /assessmentFrameworks/{frameworkId}",
    DeleteAssessmentFrameworkShare:
      "DELETE /assessmentFrameworkShareRequests/{requestId}",
    DeleteAssessmentReport:
      "DELETE /assessments/{assessmentId}/reports/{assessmentReportId}",
    DeleteControl: "DELETE /controls/{controlId}",
    DeregisterAccount: "POST /account/deregisterAccount",
    DeregisterOrganizationAdminAccount:
      "POST /account/deregisterOrganizationAdminAccount",
    DisassociateAssessmentReportEvidenceFolder:
      "PUT /assessments/{assessmentId}/disassociateFromAssessmentReport",
    GetAccountStatus: "GET /account/status",
    GetAssessment: "GET /assessments/{assessmentId}",
    GetAssessmentFramework: "GET /assessmentFrameworks/{frameworkId}",
    GetAssessmentReportUrl:
      "GET /assessments/{assessmentId}/reports/{assessmentReportId}/url",
    GetChangeLogs: "GET /assessments/{assessmentId}/changelogs",
    GetControl: "GET /controls/{controlId}",
    GetDelegations: "GET /delegations",
    GetEvidence:
      "GET /assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}",
    GetEvidenceByEvidenceFolder:
      "GET /assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence",
    GetEvidenceFileUploadUrl: "GET /evidenceFileUploadUrl",
    GetEvidenceFolder:
      "GET /assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}",
    GetEvidenceFoldersByAssessment:
      "GET /assessments/{assessmentId}/evidenceFolders",
    GetEvidenceFoldersByAssessmentControl:
      "GET /assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}",
    GetInsights: "GET /insights",
    GetInsightsByAssessment: "GET /insights/assessments/{assessmentId}",
    GetOrganizationAdminAccount: "GET /account/organizationAdminAccount",
    GetServicesInScope: "GET /services",
    GetSettings: "GET /settings/{attribute}",
    ListAssessmentControlInsightsByControlDomain:
      "GET /insights/controls-by-assessment",
    ListAssessmentFrameworks: "GET /assessmentFrameworks",
    ListAssessmentFrameworkShareRequests:
      "GET /assessmentFrameworkShareRequests",
    ListAssessmentReports: "GET /assessmentReports",
    ListAssessments: "GET /assessments",
    ListControlDomainInsights: "GET /insights/control-domains",
    ListControlDomainInsightsByAssessment:
      "GET /insights/control-domains-by-assessment",
    ListControlInsightsByControlDomain: "GET /insights/controls",
    ListControls: "GET /controls",
    ListKeywordsForDataSource: "GET /dataSourceKeywords",
    ListNotifications: "GET /notifications",
    ListTagsForResource: "GET /tags/{resourceArn}",
    RegisterAccount: "POST /account/registerAccount",
    RegisterOrganizationAdminAccount:
      "POST /account/registerOrganizationAdminAccount",
    StartAssessmentFrameworkShare:
      "POST /assessmentFrameworks/{frameworkId}/shareRequests",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateAssessment: "PUT /assessments/{assessmentId}",
    UpdateAssessmentControl:
      "PUT /assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}",
    UpdateAssessmentControlSetStatus:
      "PUT /assessments/{assessmentId}/controlSets/{controlSetId}/status",
    UpdateAssessmentFramework: "PUT /assessmentFrameworks/{frameworkId}",
    UpdateAssessmentFrameworkShare:
      "PUT /assessmentFrameworkShareRequests/{requestId}",
    UpdateAssessmentStatus: "PUT /assessments/{assessmentId}/status",
    UpdateControl: "PUT /controls/{controlId}",
    UpdateSettings: "PUT /settings",
    ValidateAssessmentReportIntegrity: "POST /assessmentReports/integrity",
  },
} as const satisfies ServiceMetadata;

export type _AuditManager = _AuditManagerClient;
export interface AuditManager extends _AuditManager {}
export const AuditManager = class extends AWSServiceClient {
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
} as unknown as typeof _AuditManagerClient;

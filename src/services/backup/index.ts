import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Backup as _BackupClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Backup",
  version: "2018-11-15",
  protocol: "restJson1",
  sigV4ServiceName: "backup",
  endpointPrefix: "backup",
  operations: {
    AssociateBackupVaultMpaApprovalTeam:
      "PUT /backup-vaults/{BackupVaultName}/mpaApprovalTeam",
    CancelLegalHold: "DELETE /legal-holds/{LegalHoldId}",
    CreateBackupPlan: "PUT /backup/plans",
    CreateBackupSelection: "PUT /backup/plans/{BackupPlanId}/selections",
    CreateBackupVault: "PUT /backup-vaults/{BackupVaultName}",
    CreateFramework: "POST /audit/frameworks",
    CreateLegalHold: "POST /legal-holds",
    CreateLogicallyAirGappedBackupVault:
      "PUT /logically-air-gapped-backup-vaults/{BackupVaultName}",
    CreateReportPlan: "POST /audit/report-plans",
    CreateRestoreAccessBackupVault: "PUT /restore-access-backup-vaults",
    CreateRestoreTestingPlan: "PUT /restore-testing/plans",
    CreateRestoreTestingSelection:
      "PUT /restore-testing/plans/{RestoreTestingPlanName}/selections",
    DeleteBackupPlan: "DELETE /backup/plans/{BackupPlanId}",
    DeleteBackupSelection:
      "DELETE /backup/plans/{BackupPlanId}/selections/{SelectionId}",
    DeleteBackupVault: "DELETE /backup-vaults/{BackupVaultName}",
    DeleteBackupVaultAccessPolicy:
      "DELETE /backup-vaults/{BackupVaultName}/access-policy",
    DeleteBackupVaultLockConfiguration:
      "DELETE /backup-vaults/{BackupVaultName}/vault-lock",
    DeleteBackupVaultNotifications:
      "DELETE /backup-vaults/{BackupVaultName}/notification-configuration",
    DeleteFramework: "DELETE /audit/frameworks/{FrameworkName}",
    DeleteRecoveryPoint:
      "DELETE /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}",
    DeleteReportPlan: "DELETE /audit/report-plans/{ReportPlanName}",
    DeleteRestoreTestingPlan:
      "DELETE /restore-testing/plans/{RestoreTestingPlanName}",
    DeleteRestoreTestingSelection:
      "DELETE /restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}",
    DescribeBackupJob: "GET /backup-jobs/{BackupJobId}",
    DescribeBackupVault: "GET /backup-vaults/{BackupVaultName}",
    DescribeCopyJob: "GET /copy-jobs/{CopyJobId}",
    DescribeFramework: "GET /audit/frameworks/{FrameworkName}",
    DescribeGlobalSettings: "GET /global-settings",
    DescribeProtectedResource: "GET /resources/{ResourceArn}",
    DescribeRecoveryPoint:
      "GET /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}",
    DescribeRegionSettings: "GET /account-settings",
    DescribeReportJob: "GET /audit/report-jobs/{ReportJobId}",
    DescribeReportPlan: "GET /audit/report-plans/{ReportPlanName}",
    DescribeRestoreJob: "GET /restore-jobs/{RestoreJobId}",
    DisassociateBackupVaultMpaApprovalTeam:
      "POST /backup-vaults/{BackupVaultName}/mpaApprovalTeam?delete",
    DisassociateRecoveryPoint:
      "POST /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/disassociate",
    DisassociateRecoveryPointFromParent:
      "DELETE /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/parentAssociation",
    ExportBackupPlanTemplate: "GET /backup/plans/{BackupPlanId}/toTemplate",
    GetBackupPlan: "GET /backup/plans/{BackupPlanId}",
    GetBackupPlanFromJSON: "POST /backup/template/json/toPlan",
    GetBackupPlanFromTemplate:
      "GET /backup/template/plans/{BackupPlanTemplateId}/toPlan",
    GetBackupSelection:
      "GET /backup/plans/{BackupPlanId}/selections/{SelectionId}",
    GetBackupVaultAccessPolicy:
      "GET /backup-vaults/{BackupVaultName}/access-policy",
    GetBackupVaultNotifications:
      "GET /backup-vaults/{BackupVaultName}/notification-configuration",
    GetLegalHold: "GET /legal-holds/{LegalHoldId}",
    GetRecoveryPointIndexDetails:
      "GET /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/index",
    GetRecoveryPointRestoreMetadata:
      "GET /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/restore-metadata",
    GetRestoreJobMetadata: "GET /restore-jobs/{RestoreJobId}/metadata",
    GetRestoreTestingInferredMetadata: "GET /restore-testing/inferred-metadata",
    GetRestoreTestingPlan:
      "GET /restore-testing/plans/{RestoreTestingPlanName}",
    GetRestoreTestingSelection:
      "GET /restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}",
    GetSupportedResourceTypes: "GET /supported-resource-types",
    ListBackupJobs: "GET /backup-jobs",
    ListBackupJobSummaries: "GET /audit/backup-job-summaries",
    ListBackupPlans: "GET /backup/plans",
    ListBackupPlanTemplates: "GET /backup/template/plans",
    ListBackupPlanVersions: "GET /backup/plans/{BackupPlanId}/versions",
    ListBackupSelections: "GET /backup/plans/{BackupPlanId}/selections",
    ListBackupVaults: "GET /backup-vaults",
    ListCopyJobs: "GET /copy-jobs",
    ListCopyJobSummaries: "GET /audit/copy-job-summaries",
    ListFrameworks: "GET /audit/frameworks",
    ListIndexedRecoveryPoints: "GET /indexes/recovery-point",
    ListLegalHolds: "GET /legal-holds",
    ListProtectedResources: "GET /resources",
    ListProtectedResourcesByBackupVault:
      "GET /backup-vaults/{BackupVaultName}/resources",
    ListRecoveryPointsByBackupVault:
      "GET /backup-vaults/{BackupVaultName}/recovery-points",
    ListRecoveryPointsByLegalHold:
      "GET /legal-holds/{LegalHoldId}/recovery-points",
    ListRecoveryPointsByResource:
      "GET /resources/{ResourceArn}/recovery-points",
    ListReportJobs: "GET /audit/report-jobs",
    ListReportPlans: "GET /audit/report-plans",
    ListRestoreAccessBackupVaults:
      "GET /logically-air-gapped-backup-vaults/{BackupVaultName}/restore-access-backup-vaults",
    ListRestoreJobs: "GET /restore-jobs",
    ListRestoreJobsByProtectedResource:
      "GET /resources/{ResourceArn}/restore-jobs",
    ListRestoreJobSummaries: "GET /audit/restore-job-summaries",
    ListRestoreTestingPlans: "GET /restore-testing/plans",
    ListRestoreTestingSelections:
      "GET /restore-testing/plans/{RestoreTestingPlanName}/selections",
    ListTags: "GET /tags/{ResourceArn}",
    PutBackupVaultAccessPolicy:
      "PUT /backup-vaults/{BackupVaultName}/access-policy",
    PutBackupVaultLockConfiguration:
      "PUT /backup-vaults/{BackupVaultName}/vault-lock",
    PutBackupVaultNotifications:
      "PUT /backup-vaults/{BackupVaultName}/notification-configuration",
    PutRestoreValidationResult: "PUT /restore-jobs/{RestoreJobId}/validations",
    RevokeRestoreAccessBackupVault:
      "DELETE /logically-air-gapped-backup-vaults/{BackupVaultName}/restore-access-backup-vaults/{RestoreAccessBackupVaultArn}",
    StartBackupJob: "PUT /backup-jobs",
    StartCopyJob: "PUT /copy-jobs",
    StartReportJob: "POST /audit/report-jobs/{ReportPlanName}",
    StartRestoreJob: "PUT /restore-jobs",
    StopBackupJob: "POST /backup-jobs/{BackupJobId}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "POST /untag/{ResourceArn}",
    UpdateBackupPlan: "POST /backup/plans/{BackupPlanId}",
    UpdateFramework: "PUT /audit/frameworks/{FrameworkName}",
    UpdateGlobalSettings: "PUT /global-settings",
    UpdateRecoveryPointIndexSettings:
      "POST /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/index",
    UpdateRecoveryPointLifecycle:
      "POST /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}",
    UpdateRegionSettings: "PUT /account-settings",
    UpdateReportPlan: "PUT /audit/report-plans/{ReportPlanName}",
    UpdateRestoreTestingPlan:
      "PUT /restore-testing/plans/{RestoreTestingPlanName}",
    UpdateRestoreTestingSelection:
      "PUT /restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Backup = class extends AWSServiceClient {
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
} as unknown as typeof _BackupClient;

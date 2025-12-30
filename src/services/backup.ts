import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DescribeGlobalSettingsInput extends S.Class<DescribeGlobalSettingsInput>("DescribeGlobalSettingsInput")({}) {}
export class DescribeRegionSettingsInput extends S.Class<DescribeRegionSettingsInput>("DescribeRegionSettingsInput")({}) {}
export const ResourceTypes = S.Array(S.String);
export const BackupVaultEvents = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AssociateBackupVaultMpaApprovalTeamInput extends S.Class<AssociateBackupVaultMpaApprovalTeamInput>("AssociateBackupVaultMpaApprovalTeamInput")({BackupVaultName: S.String, MpaApprovalTeamArn: S.String, RequesterComment: S.optional(S.String)}) {}
export class CancelLegalHoldInput extends S.Class<CancelLegalHoldInput>("CancelLegalHoldInput")({LegalHoldId: S.String, CancelDescription: S.String, RetainRecordInDays: S.optional(S.Number)}) {}
export class CancelLegalHoldOutput extends S.Class<CancelLegalHoldOutput>("CancelLegalHoldOutput")({}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class CreateBackupVaultInput extends S.Class<CreateBackupVaultInput>("CreateBackupVaultInput")({BackupVaultName: S.String, BackupVaultTags: S.optional(Tags), EncryptionKeyArn: S.optional(S.String), CreatorRequestId: S.optional(S.String)}) {}
export class CreateLogicallyAirGappedBackupVaultInput extends S.Class<CreateLogicallyAirGappedBackupVaultInput>("CreateLogicallyAirGappedBackupVaultInput")({BackupVaultName: S.String, BackupVaultTags: S.optional(Tags), CreatorRequestId: S.optional(S.String), MinRetentionDays: S.Number, MaxRetentionDays: S.Number, EncryptionKeyArn: S.optional(S.String)}) {}
export class CreateRestoreAccessBackupVaultInput extends S.Class<CreateRestoreAccessBackupVaultInput>("CreateRestoreAccessBackupVaultInput")({SourceBackupVaultArn: S.String, BackupVaultName: S.optional(S.String), BackupVaultTags: S.optional(Tags), CreatorRequestId: S.optional(S.String), RequesterComment: S.optional(S.String)}) {}
export class DeleteBackupPlanInput extends S.Class<DeleteBackupPlanInput>("DeleteBackupPlanInput")({BackupPlanId: S.String}) {}
export class DeleteBackupSelectionInput extends S.Class<DeleteBackupSelectionInput>("DeleteBackupSelectionInput")({BackupPlanId: S.String, SelectionId: S.String}) {}
export class DeleteBackupVaultInput extends S.Class<DeleteBackupVaultInput>("DeleteBackupVaultInput")({BackupVaultName: S.String}) {}
export class DeleteBackupVaultAccessPolicyInput extends S.Class<DeleteBackupVaultAccessPolicyInput>("DeleteBackupVaultAccessPolicyInput")({BackupVaultName: S.String}) {}
export class DeleteBackupVaultLockConfigurationInput extends S.Class<DeleteBackupVaultLockConfigurationInput>("DeleteBackupVaultLockConfigurationInput")({BackupVaultName: S.String}) {}
export class DeleteBackupVaultNotificationsInput extends S.Class<DeleteBackupVaultNotificationsInput>("DeleteBackupVaultNotificationsInput")({BackupVaultName: S.String}) {}
export class DeleteFrameworkInput extends S.Class<DeleteFrameworkInput>("DeleteFrameworkInput")({FrameworkName: S.String}) {}
export class DeleteRecoveryPointInput extends S.Class<DeleteRecoveryPointInput>("DeleteRecoveryPointInput")({BackupVaultName: S.String, RecoveryPointArn: S.String}) {}
export class DeleteReportPlanInput extends S.Class<DeleteReportPlanInput>("DeleteReportPlanInput")({ReportPlanName: S.String}) {}
export class DeleteRestoreTestingPlanInput extends S.Class<DeleteRestoreTestingPlanInput>("DeleteRestoreTestingPlanInput")({RestoreTestingPlanName: S.String}) {}
export class DeleteRestoreTestingSelectionInput extends S.Class<DeleteRestoreTestingSelectionInput>("DeleteRestoreTestingSelectionInput")({RestoreTestingPlanName: S.String, RestoreTestingSelectionName: S.String}) {}
export class DeleteTieringConfigurationInput extends S.Class<DeleteTieringConfigurationInput>("DeleteTieringConfigurationInput")({TieringConfigurationName: S.String}) {}
export class DeleteTieringConfigurationOutput extends S.Class<DeleteTieringConfigurationOutput>("DeleteTieringConfigurationOutput")({}) {}
export class DescribeBackupJobInput extends S.Class<DescribeBackupJobInput>("DescribeBackupJobInput")({BackupJobId: S.String}) {}
export class DescribeBackupVaultInput extends S.Class<DescribeBackupVaultInput>("DescribeBackupVaultInput")({BackupVaultName: S.String, BackupVaultAccountId: S.optional(S.String)}) {}
export class DescribeCopyJobInput extends S.Class<DescribeCopyJobInput>("DescribeCopyJobInput")({CopyJobId: S.String}) {}
export class DescribeFrameworkInput extends S.Class<DescribeFrameworkInput>("DescribeFrameworkInput")({FrameworkName: S.String}) {}
export class DescribeProtectedResourceInput extends S.Class<DescribeProtectedResourceInput>("DescribeProtectedResourceInput")({ResourceArn: S.String}) {}
export class DescribeRecoveryPointInput extends S.Class<DescribeRecoveryPointInput>("DescribeRecoveryPointInput")({BackupVaultName: S.String, RecoveryPointArn: S.String, BackupVaultAccountId: S.optional(S.String)}) {}
export class DescribeReportJobInput extends S.Class<DescribeReportJobInput>("DescribeReportJobInput")({ReportJobId: S.String}) {}
export class DescribeReportPlanInput extends S.Class<DescribeReportPlanInput>("DescribeReportPlanInput")({ReportPlanName: S.String}) {}
export class DescribeRestoreJobInput extends S.Class<DescribeRestoreJobInput>("DescribeRestoreJobInput")({RestoreJobId: S.String}) {}
export class DescribeScanJobInput extends S.Class<DescribeScanJobInput>("DescribeScanJobInput")({ScanJobId: S.String}) {}
export class DisassociateBackupVaultMpaApprovalTeamInput extends S.Class<DisassociateBackupVaultMpaApprovalTeamInput>("DisassociateBackupVaultMpaApprovalTeamInput")({BackupVaultName: S.String, RequesterComment: S.optional(S.String)}) {}
export class DisassociateRecoveryPointInput extends S.Class<DisassociateRecoveryPointInput>("DisassociateRecoveryPointInput")({BackupVaultName: S.String, RecoveryPointArn: S.String}) {}
export class DisassociateRecoveryPointFromParentInput extends S.Class<DisassociateRecoveryPointFromParentInput>("DisassociateRecoveryPointFromParentInput")({BackupVaultName: S.String, RecoveryPointArn: S.String}) {}
export class ExportBackupPlanTemplateInput extends S.Class<ExportBackupPlanTemplateInput>("ExportBackupPlanTemplateInput")({BackupPlanId: S.String}) {}
export class GetBackupPlanInput extends S.Class<GetBackupPlanInput>("GetBackupPlanInput")({BackupPlanId: S.String, VersionId: S.optional(S.String), MaxScheduledRunsPreview: S.optional(S.Number)}) {}
export class GetBackupPlanFromJSONInput extends S.Class<GetBackupPlanFromJSONInput>("GetBackupPlanFromJSONInput")({BackupPlanTemplateJson: S.String}) {}
export class GetBackupPlanFromTemplateInput extends S.Class<GetBackupPlanFromTemplateInput>("GetBackupPlanFromTemplateInput")({BackupPlanTemplateId: S.String}) {}
export class GetBackupSelectionInput extends S.Class<GetBackupSelectionInput>("GetBackupSelectionInput")({BackupPlanId: S.String, SelectionId: S.String}) {}
export class GetBackupVaultAccessPolicyInput extends S.Class<GetBackupVaultAccessPolicyInput>("GetBackupVaultAccessPolicyInput")({BackupVaultName: S.String}) {}
export class GetBackupVaultNotificationsInput extends S.Class<GetBackupVaultNotificationsInput>("GetBackupVaultNotificationsInput")({BackupVaultName: S.String}) {}
export class GetLegalHoldInput extends S.Class<GetLegalHoldInput>("GetLegalHoldInput")({LegalHoldId: S.String}) {}
export class GetRecoveryPointIndexDetailsInput extends S.Class<GetRecoveryPointIndexDetailsInput>("GetRecoveryPointIndexDetailsInput")({BackupVaultName: S.String, RecoveryPointArn: S.String}) {}
export class GetRecoveryPointRestoreMetadataInput extends S.Class<GetRecoveryPointRestoreMetadataInput>("GetRecoveryPointRestoreMetadataInput")({BackupVaultName: S.String, RecoveryPointArn: S.String, BackupVaultAccountId: S.optional(S.String)}) {}
export class GetRestoreJobMetadataInput extends S.Class<GetRestoreJobMetadataInput>("GetRestoreJobMetadataInput")({RestoreJobId: S.String}) {}
export class GetRestoreTestingInferredMetadataInput extends S.Class<GetRestoreTestingInferredMetadataInput>("GetRestoreTestingInferredMetadataInput")({BackupVaultAccountId: S.optional(S.String), BackupVaultName: S.String, RecoveryPointArn: S.String}) {}
export class GetRestoreTestingPlanInput extends S.Class<GetRestoreTestingPlanInput>("GetRestoreTestingPlanInput")({RestoreTestingPlanName: S.String}) {}
export class GetRestoreTestingSelectionInput extends S.Class<GetRestoreTestingSelectionInput>("GetRestoreTestingSelectionInput")({RestoreTestingPlanName: S.String, RestoreTestingSelectionName: S.String}) {}
export class GetSupportedResourceTypesOutput extends S.Class<GetSupportedResourceTypesOutput>("GetSupportedResourceTypesOutput")({ResourceTypes: S.optional(ResourceTypes)}) {}
export class GetTieringConfigurationInput extends S.Class<GetTieringConfigurationInput>("GetTieringConfigurationInput")({TieringConfigurationName: S.String}) {}
export class ListBackupJobsInput extends S.Class<ListBackupJobsInput>("ListBackupJobsInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), ByResourceArn: S.optional(S.String), ByState: S.optional(S.String), ByBackupVaultName: S.optional(S.String), ByCreatedBefore: S.optional(S.Date), ByCreatedAfter: S.optional(S.Date), ByResourceType: S.optional(S.String), ByAccountId: S.optional(S.String), ByCompleteAfter: S.optional(S.Date), ByCompleteBefore: S.optional(S.Date), ByParentJobId: S.optional(S.String), ByMessageCategory: S.optional(S.String)}) {}
export class ListBackupJobSummariesInput extends S.Class<ListBackupJobSummariesInput>("ListBackupJobSummariesInput")({AccountId: S.optional(S.String), State: S.optional(S.String), ResourceType: S.optional(S.String), MessageCategory: S.optional(S.String), AggregationPeriod: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListBackupPlansInput extends S.Class<ListBackupPlansInput>("ListBackupPlansInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), IncludeDeleted: S.optional(S.Boolean)}) {}
export class ListBackupPlanTemplatesInput extends S.Class<ListBackupPlanTemplatesInput>("ListBackupPlanTemplatesInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListBackupPlanVersionsInput extends S.Class<ListBackupPlanVersionsInput>("ListBackupPlanVersionsInput")({BackupPlanId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListBackupSelectionsInput extends S.Class<ListBackupSelectionsInput>("ListBackupSelectionsInput")({BackupPlanId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListBackupVaultsInput extends S.Class<ListBackupVaultsInput>("ListBackupVaultsInput")({ByVaultType: S.optional(S.String), ByShared: S.optional(S.Boolean), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListCopyJobsInput extends S.Class<ListCopyJobsInput>("ListCopyJobsInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), ByResourceArn: S.optional(S.String), ByState: S.optional(S.String), ByCreatedBefore: S.optional(S.Date), ByCreatedAfter: S.optional(S.Date), ByResourceType: S.optional(S.String), ByDestinationVaultArn: S.optional(S.String), ByAccountId: S.optional(S.String), ByCompleteBefore: S.optional(S.Date), ByCompleteAfter: S.optional(S.Date), ByParentJobId: S.optional(S.String), ByMessageCategory: S.optional(S.String), BySourceRecoveryPointArn: S.optional(S.String)}) {}
export class ListCopyJobSummariesInput extends S.Class<ListCopyJobSummariesInput>("ListCopyJobSummariesInput")({AccountId: S.optional(S.String), State: S.optional(S.String), ResourceType: S.optional(S.String), MessageCategory: S.optional(S.String), AggregationPeriod: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListFrameworksInput extends S.Class<ListFrameworksInput>("ListFrameworksInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListIndexedRecoveryPointsInput extends S.Class<ListIndexedRecoveryPointsInput>("ListIndexedRecoveryPointsInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), SourceResourceArn: S.optional(S.String), CreatedBefore: S.optional(S.Date), CreatedAfter: S.optional(S.Date), ResourceType: S.optional(S.String), IndexStatus: S.optional(S.String)}) {}
export class ListLegalHoldsInput extends S.Class<ListLegalHoldsInput>("ListLegalHoldsInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListProtectedResourcesInput extends S.Class<ListProtectedResourcesInput>("ListProtectedResourcesInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListProtectedResourcesByBackupVaultInput extends S.Class<ListProtectedResourcesByBackupVaultInput>("ListProtectedResourcesByBackupVaultInput")({BackupVaultName: S.String, BackupVaultAccountId: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListRecoveryPointsByBackupVaultInput extends S.Class<ListRecoveryPointsByBackupVaultInput>("ListRecoveryPointsByBackupVaultInput")({BackupVaultName: S.String, BackupVaultAccountId: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), ByResourceArn: S.optional(S.String), ByResourceType: S.optional(S.String), ByBackupPlanId: S.optional(S.String), ByCreatedBefore: S.optional(S.Date), ByCreatedAfter: S.optional(S.Date), ByParentRecoveryPointArn: S.optional(S.String)}) {}
export class ListRecoveryPointsByLegalHoldInput extends S.Class<ListRecoveryPointsByLegalHoldInput>("ListRecoveryPointsByLegalHoldInput")({LegalHoldId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListRecoveryPointsByResourceInput extends S.Class<ListRecoveryPointsByResourceInput>("ListRecoveryPointsByResourceInput")({ResourceArn: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), ManagedByAWSBackupOnly: S.optional(S.Boolean)}) {}
export class ListReportJobsInput extends S.Class<ListReportJobsInput>("ListReportJobsInput")({ByReportPlanName: S.optional(S.String), ByCreationBefore: S.optional(S.Date), ByCreationAfter: S.optional(S.Date), ByStatus: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListReportPlansInput extends S.Class<ListReportPlansInput>("ListReportPlansInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListRestoreAccessBackupVaultsInput extends S.Class<ListRestoreAccessBackupVaultsInput>("ListRestoreAccessBackupVaultsInput")({BackupVaultName: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListRestoreJobsInput extends S.Class<ListRestoreJobsInput>("ListRestoreJobsInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), ByAccountId: S.optional(S.String), ByResourceType: S.optional(S.String), ByCreatedBefore: S.optional(S.Date), ByCreatedAfter: S.optional(S.Date), ByStatus: S.optional(S.String), ByCompleteBefore: S.optional(S.Date), ByCompleteAfter: S.optional(S.Date), ByRestoreTestingPlanArn: S.optional(S.String), ByParentJobId: S.optional(S.String)}) {}
export class ListRestoreJobsByProtectedResourceInput extends S.Class<ListRestoreJobsByProtectedResourceInput>("ListRestoreJobsByProtectedResourceInput")({ResourceArn: S.String, ByStatus: S.optional(S.String), ByRecoveryPointCreationDateAfter: S.optional(S.Date), ByRecoveryPointCreationDateBefore: S.optional(S.Date), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListRestoreJobSummariesInput extends S.Class<ListRestoreJobSummariesInput>("ListRestoreJobSummariesInput")({AccountId: S.optional(S.String), State: S.optional(S.String), ResourceType: S.optional(S.String), AggregationPeriod: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListRestoreTestingPlansInput extends S.Class<ListRestoreTestingPlansInput>("ListRestoreTestingPlansInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListRestoreTestingSelectionsInput extends S.Class<ListRestoreTestingSelectionsInput>("ListRestoreTestingSelectionsInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), RestoreTestingPlanName: S.String}) {}
export class ListScanJobsInput extends S.Class<ListScanJobsInput>("ListScanJobsInput")({ByAccountId: S.optional(S.String), ByBackupVaultName: S.optional(S.String), ByCompleteAfter: S.optional(S.Date), ByCompleteBefore: S.optional(S.Date), ByMalwareScanner: S.optional(S.String), ByRecoveryPointArn: S.optional(S.String), ByResourceArn: S.optional(S.String), ByResourceType: S.optional(S.String), ByScanResultStatus: S.optional(S.String), ByState: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListScanJobSummariesInput extends S.Class<ListScanJobSummariesInput>("ListScanJobSummariesInput")({AccountId: S.optional(S.String), ResourceType: S.optional(S.String), MalwareScanner: S.optional(S.String), ScanResultStatus: S.optional(S.String), State: S.optional(S.String), AggregationPeriod: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsInput extends S.Class<ListTagsInput>("ListTagsInput")({ResourceArn: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTieringConfigurationsInput extends S.Class<ListTieringConfigurationsInput>("ListTieringConfigurationsInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class PutBackupVaultAccessPolicyInput extends S.Class<PutBackupVaultAccessPolicyInput>("PutBackupVaultAccessPolicyInput")({BackupVaultName: S.String, Policy: S.optional(S.String)}) {}
export class PutBackupVaultLockConfigurationInput extends S.Class<PutBackupVaultLockConfigurationInput>("PutBackupVaultLockConfigurationInput")({BackupVaultName: S.String, MinRetentionDays: S.optional(S.Number), MaxRetentionDays: S.optional(S.Number), ChangeableForDays: S.optional(S.Number)}) {}
export class PutBackupVaultNotificationsInput extends S.Class<PutBackupVaultNotificationsInput>("PutBackupVaultNotificationsInput")({BackupVaultName: S.String, SNSTopicArn: S.String, BackupVaultEvents: BackupVaultEvents}) {}
export class PutRestoreValidationResultInput extends S.Class<PutRestoreValidationResultInput>("PutRestoreValidationResultInput")({RestoreJobId: S.String, ValidationStatus: S.String, ValidationStatusMessage: S.optional(S.String)}) {}
export class RevokeRestoreAccessBackupVaultInput extends S.Class<RevokeRestoreAccessBackupVaultInput>("RevokeRestoreAccessBackupVaultInput")({BackupVaultName: S.String, RestoreAccessBackupVaultArn: S.String, RequesterComment: S.optional(S.String)}) {}
export class Lifecycle extends S.Class<Lifecycle>("Lifecycle")({MoveToColdStorageAfterDays: S.optional(S.Number), DeleteAfterDays: S.optional(S.Number), OptInToArchiveForSupportedResources: S.optional(S.Boolean), DeleteAfterEvent: S.optional(S.String)}) {}
export class StartCopyJobInput extends S.Class<StartCopyJobInput>("StartCopyJobInput")({RecoveryPointArn: S.String, SourceBackupVaultName: S.String, DestinationBackupVaultArn: S.String, IamRoleArn: S.String, IdempotencyToken: S.optional(S.String), Lifecycle: S.optional(Lifecycle)}) {}
export class StartReportJobInput extends S.Class<StartReportJobInput>("StartReportJobInput")({ReportPlanName: S.String, IdempotencyToken: S.optional(S.String)}) {}
export class StartScanJobInput extends S.Class<StartScanJobInput>("StartScanJobInput")({BackupVaultName: S.String, IamRoleArn: S.String, IdempotencyToken: S.optional(S.String), MalwareScanner: S.String, RecoveryPointArn: S.String, ScanBaseRecoveryPointArn: S.optional(S.String), ScanMode: S.String, ScannerRoleArn: S.String}) {}
export class StopBackupJobInput extends S.Class<StopBackupJobInput>("StopBackupJobInput")({BackupJobId: S.String}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({ResourceArn: S.String, Tags: Tags}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({ResourceArn: S.String, TagKeyList: TagKeyList}) {}
export class CopyAction extends S.Class<CopyAction>("CopyAction")({Lifecycle: S.optional(Lifecycle), DestinationBackupVaultArn: S.String}) {}
export const CopyActions = S.Array(CopyAction);
export class IndexAction extends S.Class<IndexAction>("IndexAction")({ResourceTypes: S.optional(ResourceTypes)}) {}
export const IndexActions = S.Array(IndexAction);
export class ScanAction extends S.Class<ScanAction>("ScanAction")({MalwareScanner: S.optional(S.String), ScanMode: S.optional(S.String)}) {}
export const ScanActions = S.Array(ScanAction);
export class BackupRuleInput extends S.Class<BackupRuleInput>("BackupRuleInput")({RuleName: S.String, TargetBackupVaultName: S.String, TargetLogicallyAirGappedBackupVaultArn: S.optional(S.String), ScheduleExpression: S.optional(S.String), StartWindowMinutes: S.optional(S.Number), CompletionWindowMinutes: S.optional(S.Number), Lifecycle: S.optional(Lifecycle), RecoveryPointTags: S.optional(Tags), CopyActions: S.optional(CopyActions), EnableContinuousBackup: S.optional(S.Boolean), ScheduleExpressionTimezone: S.optional(S.String), IndexActions: S.optional(IndexActions), ScanActions: S.optional(ScanActions)}) {}
export const BackupRulesInput = S.Array(BackupRuleInput);
export const BackupOptions = S.Record({key: S.String, value: S.String});
export class AdvancedBackupSetting extends S.Class<AdvancedBackupSetting>("AdvancedBackupSetting")({ResourceType: S.optional(S.String), BackupOptions: S.optional(BackupOptions)}) {}
export const AdvancedBackupSettings = S.Array(AdvancedBackupSetting);
export class ScanSetting extends S.Class<ScanSetting>("ScanSetting")({MalwareScanner: S.optional(S.String), ResourceTypes: S.optional(ResourceTypes), ScannerRoleArn: S.optional(S.String)}) {}
export const ScanSettings = S.Array(ScanSetting);
export class BackupPlanInput extends S.Class<BackupPlanInput>("BackupPlanInput")({BackupPlanName: S.String, Rules: BackupRulesInput, AdvancedBackupSettings: S.optional(AdvancedBackupSettings), ScanSettings: S.optional(ScanSettings)}) {}
export class UpdateBackupPlanInput extends S.Class<UpdateBackupPlanInput>("UpdateBackupPlanInput")({BackupPlanId: S.String, BackupPlan: BackupPlanInput}) {}
export class ControlInputParameter extends S.Class<ControlInputParameter>("ControlInputParameter")({ParameterName: S.optional(S.String), ParameterValue: S.optional(S.String)}) {}
export const ControlInputParameters = S.Array(ControlInputParameter);
export const ComplianceResourceIdList = S.Array(S.String);
export const ResourceTypeList = S.Array(S.String);
export const stringMap = S.Record({key: S.String, value: S.String});
export class ControlScope extends S.Class<ControlScope>("ControlScope")({ComplianceResourceIds: S.optional(ComplianceResourceIdList), ComplianceResourceTypes: S.optional(ResourceTypeList), Tags: S.optional(stringMap)}) {}
export class FrameworkControl extends S.Class<FrameworkControl>("FrameworkControl")({ControlName: S.String, ControlInputParameters: S.optional(ControlInputParameters), ControlScope: S.optional(ControlScope)}) {}
export const FrameworkControls = S.Array(FrameworkControl);
export class UpdateFrameworkInput extends S.Class<UpdateFrameworkInput>("UpdateFrameworkInput")({FrameworkName: S.String, FrameworkDescription: S.optional(S.String), FrameworkControls: S.optional(FrameworkControls), IdempotencyToken: S.optional(S.String)}) {}
export const GlobalSettings = S.Record({key: S.String, value: S.String});
export class UpdateGlobalSettingsInput extends S.Class<UpdateGlobalSettingsInput>("UpdateGlobalSettingsInput")({GlobalSettings: S.optional(GlobalSettings)}) {}
export class UpdateRecoveryPointIndexSettingsInput extends S.Class<UpdateRecoveryPointIndexSettingsInput>("UpdateRecoveryPointIndexSettingsInput")({BackupVaultName: S.String, RecoveryPointArn: S.String, IamRoleArn: S.optional(S.String), Index: S.String}) {}
export class UpdateRecoveryPointLifecycleInput extends S.Class<UpdateRecoveryPointLifecycleInput>("UpdateRecoveryPointLifecycleInput")({BackupVaultName: S.String, RecoveryPointArn: S.String, Lifecycle: S.optional(Lifecycle)}) {}
export const ResourceTypeOptInPreference = S.Record({key: S.String, value: S.Boolean});
export const ResourceTypeManagementPreference = S.Record({key: S.String, value: S.Boolean});
export class UpdateRegionSettingsInput extends S.Class<UpdateRegionSettingsInput>("UpdateRegionSettingsInput")({ResourceTypeOptInPreference: S.optional(ResourceTypeOptInPreference), ResourceTypeManagementPreference: S.optional(ResourceTypeManagementPreference)}) {}
export const FormatList = S.Array(S.String);
export class ReportDeliveryChannel extends S.Class<ReportDeliveryChannel>("ReportDeliveryChannel")({S3BucketName: S.String, S3KeyPrefix: S.optional(S.String), Formats: S.optional(FormatList)}) {}
export const stringList = S.Array(S.String);
export class ReportSetting extends S.Class<ReportSetting>("ReportSetting")({ReportTemplate: S.String, FrameworkArns: S.optional(stringList), NumberOfFrameworks: S.optional(S.Number), Accounts: S.optional(stringList), OrganizationUnits: S.optional(stringList), Regions: S.optional(stringList)}) {}
export class UpdateReportPlanInput extends S.Class<UpdateReportPlanInput>("UpdateReportPlanInput")({ReportPlanName: S.String, ReportPlanDescription: S.optional(S.String), ReportDeliveryChannel: S.optional(ReportDeliveryChannel), ReportSetting: S.optional(ReportSetting), IdempotencyToken: S.optional(S.String)}) {}
export const ResourceArns = S.Array(S.String);
export const VaultNames = S.Array(S.String);
export const ResourceIdentifiers = S.Array(S.String);
export const SensitiveStringMap = S.Record({key: S.String, value: S.String});
export class BackupPlansListMember extends S.Class<BackupPlansListMember>("BackupPlansListMember")({BackupPlanArn: S.optional(S.String), BackupPlanId: S.optional(S.String), CreationDate: S.optional(S.Date), DeletionDate: S.optional(S.Date), VersionId: S.optional(S.String), BackupPlanName: S.optional(S.String), CreatorRequestId: S.optional(S.String), LastExecutionDate: S.optional(S.Date), AdvancedBackupSettings: S.optional(AdvancedBackupSettings)}) {}
export const BackupPlanVersionsList = S.Array(BackupPlansListMember);
export class RecoveryPointCreator extends S.Class<RecoveryPointCreator>("RecoveryPointCreator")({BackupPlanId: S.optional(S.String), BackupPlanArn: S.optional(S.String), BackupPlanName: S.optional(S.String), BackupPlanVersion: S.optional(S.String), BackupRuleId: S.optional(S.String), BackupRuleName: S.optional(S.String), BackupRuleCron: S.optional(S.String), BackupRuleTimezone: S.optional(S.String)}) {}
export const CopyJobChildJobsInState = S.Record({key: S.String, value: S.Number});
export class CopyJob extends S.Class<CopyJob>("CopyJob")({AccountId: S.optional(S.String), CopyJobId: S.optional(S.String), SourceBackupVaultArn: S.optional(S.String), SourceRecoveryPointArn: S.optional(S.String), DestinationBackupVaultArn: S.optional(S.String), DestinationVaultType: S.optional(S.String), DestinationVaultLockState: S.optional(S.String), DestinationRecoveryPointArn: S.optional(S.String), DestinationEncryptionKeyArn: S.optional(S.String), DestinationRecoveryPointLifecycle: S.optional(Lifecycle), ResourceArn: S.optional(S.String), CreationDate: S.optional(S.Date), CompletionDate: S.optional(S.Date), State: S.optional(S.String), StatusMessage: S.optional(S.String), BackupSizeInBytes: S.optional(S.Number), IamRoleArn: S.optional(S.String), CreatedBy: S.optional(RecoveryPointCreator), CreatedByBackupJobId: S.optional(S.String), ResourceType: S.optional(S.String), ParentJobId: S.optional(S.String), IsParent: S.optional(S.Boolean), CompositeMemberIdentifier: S.optional(S.String), NumberOfChildJobs: S.optional(S.Number), ChildJobsInState: S.optional(CopyJobChildJobsInState), ResourceName: S.optional(S.String), MessageCategory: S.optional(S.String)}) {}
export const CopyJobsList = S.Array(CopyJob);
export class ReportDestination extends S.Class<ReportDestination>("ReportDestination")({S3BucketName: S.optional(S.String), S3Keys: S.optional(stringList)}) {}
export class ReportJob extends S.Class<ReportJob>("ReportJob")({ReportJobId: S.optional(S.String), ReportPlanArn: S.optional(S.String), ReportTemplate: S.optional(S.String), CreationTime: S.optional(S.Date), CompletionTime: S.optional(S.Date), Status: S.optional(S.String), StatusMessage: S.optional(S.String), ReportDestination: S.optional(ReportDestination)}) {}
export const ReportJobList = S.Array(ReportJob);
export class ReportPlan extends S.Class<ReportPlan>("ReportPlan")({ReportPlanArn: S.optional(S.String), ReportPlanName: S.optional(S.String), ReportPlanDescription: S.optional(S.String), ReportSetting: S.optional(ReportSetting), ReportDeliveryChannel: S.optional(ReportDeliveryChannel), DeploymentStatus: S.optional(S.String), CreationTime: S.optional(S.Date), LastAttemptedExecutionTime: S.optional(S.Date), LastSuccessfulExecutionTime: S.optional(S.Date)}) {}
export const ReportPlanList = S.Array(ReportPlan);
export const Metadata = S.Record({key: S.String, value: S.String});
export const RestoreTestingRecoveryPointTypeList = S.Array(S.String);
export class RestoreTestingRecoveryPointSelection extends S.Class<RestoreTestingRecoveryPointSelection>("RestoreTestingRecoveryPointSelection")({Algorithm: S.optional(S.String), ExcludeVaults: S.optional(stringList), IncludeVaults: S.optional(stringList), RecoveryPointTypes: S.optional(RestoreTestingRecoveryPointTypeList), SelectionWindowDays: S.optional(S.Number)}) {}
export class RestoreTestingPlanForUpdate extends S.Class<RestoreTestingPlanForUpdate>("RestoreTestingPlanForUpdate")({RecoveryPointSelection: S.optional(RestoreTestingRecoveryPointSelection), ScheduleExpression: S.optional(S.String), ScheduleExpressionTimezone: S.optional(S.String), StartWindowHours: S.optional(S.Number)}) {}
export class KeyValue extends S.Class<KeyValue>("KeyValue")({Key: S.String, Value: S.String}) {}
export const KeyValueList = S.Array(KeyValue);
export class ProtectedResourceConditions extends S.Class<ProtectedResourceConditions>("ProtectedResourceConditions")({StringEquals: S.optional(KeyValueList), StringNotEquals: S.optional(KeyValueList)}) {}
export class RestoreTestingSelectionForUpdate extends S.Class<RestoreTestingSelectionForUpdate>("RestoreTestingSelectionForUpdate")({IamRoleArn: S.optional(S.String), ProtectedResourceArns: S.optional(stringList), ProtectedResourceConditions: S.optional(ProtectedResourceConditions), RestoreMetadataOverrides: S.optional(SensitiveStringMap), ValidationWindowHours: S.optional(S.Number)}) {}
export class ResourceSelection extends S.Class<ResourceSelection>("ResourceSelection")({Resources: ResourceArns, TieringDownSettingsInDays: S.Number, ResourceType: S.String}) {}
export const ResourceSelections = S.Array(ResourceSelection);
export class TieringConfigurationInputForUpdate extends S.Class<TieringConfigurationInputForUpdate>("TieringConfigurationInputForUpdate")({ResourceSelection: ResourceSelections, BackupVaultName: S.String}) {}
export class CreateBackupVaultOutput extends S.Class<CreateBackupVaultOutput>("CreateBackupVaultOutput")({BackupVaultName: S.optional(S.String), BackupVaultArn: S.optional(S.String), CreationDate: S.optional(S.Date)}) {}
export class CreateLogicallyAirGappedBackupVaultOutput extends S.Class<CreateLogicallyAirGappedBackupVaultOutput>("CreateLogicallyAirGappedBackupVaultOutput")({BackupVaultName: S.optional(S.String), BackupVaultArn: S.optional(S.String), CreationDate: S.optional(S.Date), VaultState: S.optional(S.String)}) {}
export class CreateReportPlanInput extends S.Class<CreateReportPlanInput>("CreateReportPlanInput")({ReportPlanName: S.String, ReportPlanDescription: S.optional(S.String), ReportDeliveryChannel: ReportDeliveryChannel, ReportSetting: ReportSetting, ReportPlanTags: S.optional(stringMap), IdempotencyToken: S.optional(S.String)}) {}
export class CreateRestoreAccessBackupVaultOutput extends S.Class<CreateRestoreAccessBackupVaultOutput>("CreateRestoreAccessBackupVaultOutput")({RestoreAccessBackupVaultArn: S.optional(S.String), VaultState: S.optional(S.String), RestoreAccessBackupVaultName: S.optional(S.String), CreationDate: S.optional(S.Date)}) {}
export class DeleteBackupPlanOutput extends S.Class<DeleteBackupPlanOutput>("DeleteBackupPlanOutput")({BackupPlanId: S.optional(S.String), BackupPlanArn: S.optional(S.String), DeletionDate: S.optional(S.Date), VersionId: S.optional(S.String)}) {}
export class DescribeFrameworkOutput extends S.Class<DescribeFrameworkOutput>("DescribeFrameworkOutput")({FrameworkName: S.optional(S.String), FrameworkArn: S.optional(S.String), FrameworkDescription: S.optional(S.String), FrameworkControls: S.optional(FrameworkControls), CreationTime: S.optional(S.Date), DeploymentStatus: S.optional(S.String), FrameworkStatus: S.optional(S.String), IdempotencyToken: S.optional(S.String)}) {}
export class DescribeGlobalSettingsOutput extends S.Class<DescribeGlobalSettingsOutput>("DescribeGlobalSettingsOutput")({GlobalSettings: S.optional(GlobalSettings), LastUpdateTime: S.optional(S.Date)}) {}
export class DescribeProtectedResourceOutput extends S.Class<DescribeProtectedResourceOutput>("DescribeProtectedResourceOutput")({ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), LastBackupTime: S.optional(S.Date), ResourceName: S.optional(S.String), LastBackupVaultArn: S.optional(S.String), LastRecoveryPointArn: S.optional(S.String), LatestRestoreExecutionTimeMinutes: S.optional(S.Number), LatestRestoreJobCreationDate: S.optional(S.Date), LatestRestoreRecoveryPointCreationDate: S.optional(S.Date)}) {}
export class DescribeRegionSettingsOutput extends S.Class<DescribeRegionSettingsOutput>("DescribeRegionSettingsOutput")({ResourceTypeOptInPreference: S.optional(ResourceTypeOptInPreference), ResourceTypeManagementPreference: S.optional(ResourceTypeManagementPreference)}) {}
export class ExportBackupPlanTemplateOutput extends S.Class<ExportBackupPlanTemplateOutput>("ExportBackupPlanTemplateOutput")({BackupPlanTemplateJson: S.optional(S.String)}) {}
export class BackupRule extends S.Class<BackupRule>("BackupRule")({RuleName: S.String, TargetBackupVaultName: S.String, TargetLogicallyAirGappedBackupVaultArn: S.optional(S.String), ScheduleExpression: S.optional(S.String), StartWindowMinutes: S.optional(S.Number), CompletionWindowMinutes: S.optional(S.Number), Lifecycle: S.optional(Lifecycle), RecoveryPointTags: S.optional(Tags), RuleId: S.optional(S.String), CopyActions: S.optional(CopyActions), EnableContinuousBackup: S.optional(S.Boolean), ScheduleExpressionTimezone: S.optional(S.String), IndexActions: S.optional(IndexActions), ScanActions: S.optional(ScanActions)}) {}
export const BackupRules = S.Array(BackupRule);
export class BackupPlan extends S.Class<BackupPlan>("BackupPlan")({BackupPlanName: S.String, Rules: BackupRules, AdvancedBackupSettings: S.optional(AdvancedBackupSettings), ScanSettings: S.optional(ScanSettings)}) {}
export class GetBackupPlanFromJSONOutput extends S.Class<GetBackupPlanFromJSONOutput>("GetBackupPlanFromJSONOutput")({BackupPlan: S.optional(BackupPlan)}) {}
export class GetBackupPlanFromTemplateOutput extends S.Class<GetBackupPlanFromTemplateOutput>("GetBackupPlanFromTemplateOutput")({BackupPlanDocument: S.optional(BackupPlan)}) {}
export class Condition extends S.Class<Condition>("Condition")({ConditionType: S.String, ConditionKey: S.String, ConditionValue: S.String}) {}
export const ListOfTags = S.Array(Condition);
export class ConditionParameter extends S.Class<ConditionParameter>("ConditionParameter")({ConditionKey: S.optional(S.String), ConditionValue: S.optional(S.String)}) {}
export const ConditionParameters = S.Array(ConditionParameter);
export class Conditions extends S.Class<Conditions>("Conditions")({StringEquals: S.optional(ConditionParameters), StringNotEquals: S.optional(ConditionParameters), StringLike: S.optional(ConditionParameters), StringNotLike: S.optional(ConditionParameters)}) {}
export class BackupSelection extends S.Class<BackupSelection>("BackupSelection")({SelectionName: S.String, IamRoleArn: S.String, Resources: S.optional(ResourceArns), ListOfTags: S.optional(ListOfTags), NotResources: S.optional(ResourceArns), Conditions: S.optional(Conditions)}) {}
export class GetBackupSelectionOutput extends S.Class<GetBackupSelectionOutput>("GetBackupSelectionOutput")({BackupSelection: S.optional(BackupSelection), SelectionId: S.optional(S.String), BackupPlanId: S.optional(S.String), CreationDate: S.optional(S.Date), CreatorRequestId: S.optional(S.String)}) {}
export class GetBackupVaultAccessPolicyOutput extends S.Class<GetBackupVaultAccessPolicyOutput>("GetBackupVaultAccessPolicyOutput")({BackupVaultName: S.optional(S.String), BackupVaultArn: S.optional(S.String), Policy: S.optional(S.String)}) {}
export class GetBackupVaultNotificationsOutput extends S.Class<GetBackupVaultNotificationsOutput>("GetBackupVaultNotificationsOutput")({BackupVaultName: S.optional(S.String), BackupVaultArn: S.optional(S.String), SNSTopicArn: S.optional(S.String), BackupVaultEvents: S.optional(BackupVaultEvents)}) {}
export class DateRange extends S.Class<DateRange>("DateRange")({FromDate: S.Date, ToDate: S.Date}) {}
export class RecoveryPointSelection extends S.Class<RecoveryPointSelection>("RecoveryPointSelection")({VaultNames: S.optional(VaultNames), ResourceIdentifiers: S.optional(ResourceIdentifiers), DateRange: S.optional(DateRange)}) {}
export class GetLegalHoldOutput extends S.Class<GetLegalHoldOutput>("GetLegalHoldOutput")({Title: S.optional(S.String), Status: S.optional(S.String), Description: S.optional(S.String), CancelDescription: S.optional(S.String), LegalHoldId: S.optional(S.String), LegalHoldArn: S.optional(S.String), CreationDate: S.optional(S.Date), CancellationDate: S.optional(S.Date), RetainRecordUntil: S.optional(S.Date), RecoveryPointSelection: S.optional(RecoveryPointSelection)}) {}
export class GetRecoveryPointIndexDetailsOutput extends S.Class<GetRecoveryPointIndexDetailsOutput>("GetRecoveryPointIndexDetailsOutput")({RecoveryPointArn: S.optional(S.String), BackupVaultArn: S.optional(S.String), SourceResourceArn: S.optional(S.String), IndexCreationDate: S.optional(S.Date), IndexDeletionDate: S.optional(S.Date), IndexCompletionDate: S.optional(S.Date), IndexStatus: S.optional(S.String), IndexStatusMessage: S.optional(S.String), TotalItemsIndexed: S.optional(S.Number)}) {}
export class GetRecoveryPointRestoreMetadataOutput extends S.Class<GetRecoveryPointRestoreMetadataOutput>("GetRecoveryPointRestoreMetadataOutput")({BackupVaultArn: S.optional(S.String), RecoveryPointArn: S.optional(S.String), RestoreMetadata: S.optional(Metadata), ResourceType: S.optional(S.String)}) {}
export class GetRestoreJobMetadataOutput extends S.Class<GetRestoreJobMetadataOutput>("GetRestoreJobMetadataOutput")({RestoreJobId: S.optional(S.String), Metadata: S.optional(Metadata)}) {}
export class GetRestoreTestingInferredMetadataOutput extends S.Class<GetRestoreTestingInferredMetadataOutput>("GetRestoreTestingInferredMetadataOutput")({InferredMetadata: stringMap}) {}
export class ListBackupPlanVersionsOutput extends S.Class<ListBackupPlanVersionsOutput>("ListBackupPlanVersionsOutput")({NextToken: S.optional(S.String), BackupPlanVersionsList: S.optional(BackupPlanVersionsList)}) {}
export class ListCopyJobsOutput extends S.Class<ListCopyJobsOutput>("ListCopyJobsOutput")({CopyJobs: S.optional(CopyJobsList), NextToken: S.optional(S.String)}) {}
export class ProtectedResource extends S.Class<ProtectedResource>("ProtectedResource")({ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), LastBackupTime: S.optional(S.Date), ResourceName: S.optional(S.String), LastBackupVaultArn: S.optional(S.String), LastRecoveryPointArn: S.optional(S.String)}) {}
export const ProtectedResourcesList = S.Array(ProtectedResource);
export class ListProtectedResourcesByBackupVaultOutput extends S.Class<ListProtectedResourcesByBackupVaultOutput>("ListProtectedResourcesByBackupVaultOutput")({Results: S.optional(ProtectedResourcesList), NextToken: S.optional(S.String)}) {}
export class ListReportJobsOutput extends S.Class<ListReportJobsOutput>("ListReportJobsOutput")({ReportJobs: S.optional(ReportJobList), NextToken: S.optional(S.String)}) {}
export class ListReportPlansOutput extends S.Class<ListReportPlansOutput>("ListReportPlansOutput")({ReportPlans: S.optional(ReportPlanList), NextToken: S.optional(S.String)}) {}
export class RestoreJobCreator extends S.Class<RestoreJobCreator>("RestoreJobCreator")({RestoreTestingPlanArn: S.optional(S.String)}) {}
export class RestoreJobsListMember extends S.Class<RestoreJobsListMember>("RestoreJobsListMember")({AccountId: S.optional(S.String), RestoreJobId: S.optional(S.String), RecoveryPointArn: S.optional(S.String), SourceResourceArn: S.optional(S.String), BackupVaultArn: S.optional(S.String), CreationDate: S.optional(S.Date), CompletionDate: S.optional(S.Date), Status: S.optional(S.String), StatusMessage: S.optional(S.String), PercentDone: S.optional(S.String), BackupSizeInBytes: S.optional(S.Number), IamRoleArn: S.optional(S.String), ExpectedCompletionTimeMinutes: S.optional(S.Number), CreatedResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), RecoveryPointCreationDate: S.optional(S.Date), IsParent: S.optional(S.Boolean), ParentJobId: S.optional(S.String), CreatedBy: S.optional(RestoreJobCreator), ValidationStatus: S.optional(S.String), ValidationStatusMessage: S.optional(S.String), DeletionStatus: S.optional(S.String), DeletionStatusMessage: S.optional(S.String)}) {}
export const RestoreJobsList = S.Array(RestoreJobsListMember);
export class ListRestoreJobsByProtectedResourceOutput extends S.Class<ListRestoreJobsByProtectedResourceOutput>("ListRestoreJobsByProtectedResourceOutput")({RestoreJobs: S.optional(RestoreJobsList), NextToken: S.optional(S.String)}) {}
export class ListTagsOutput extends S.Class<ListTagsOutput>("ListTagsOutput")({NextToken: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class StartBackupJobInput extends S.Class<StartBackupJobInput>("StartBackupJobInput")({BackupVaultName: S.String, LogicallyAirGappedBackupVaultArn: S.optional(S.String), ResourceArn: S.String, IamRoleArn: S.String, IdempotencyToken: S.optional(S.String), StartWindowMinutes: S.optional(S.Number), CompleteWindowMinutes: S.optional(S.Number), Lifecycle: S.optional(Lifecycle), RecoveryPointTags: S.optional(Tags), BackupOptions: S.optional(BackupOptions), Index: S.optional(S.String)}) {}
export class StartCopyJobOutput extends S.Class<StartCopyJobOutput>("StartCopyJobOutput")({CopyJobId: S.optional(S.String), CreationDate: S.optional(S.Date), IsParent: S.optional(S.Boolean)}) {}
export class StartReportJobOutput extends S.Class<StartReportJobOutput>("StartReportJobOutput")({ReportJobId: S.optional(S.String)}) {}
export class StartRestoreJobInput extends S.Class<StartRestoreJobInput>("StartRestoreJobInput")({RecoveryPointArn: S.String, Metadata: Metadata, IamRoleArn: S.optional(S.String), IdempotencyToken: S.optional(S.String), ResourceType: S.optional(S.String), CopySourceTagsToRestoredResource: S.optional(S.Boolean)}) {}
export class StartScanJobOutput extends S.Class<StartScanJobOutput>("StartScanJobOutput")({CreationDate: S.Date, ScanJobId: S.String}) {}
export class UpdateBackupPlanOutput extends S.Class<UpdateBackupPlanOutput>("UpdateBackupPlanOutput")({BackupPlanId: S.optional(S.String), BackupPlanArn: S.optional(S.String), CreationDate: S.optional(S.Date), VersionId: S.optional(S.String), AdvancedBackupSettings: S.optional(AdvancedBackupSettings), ScanSettings: S.optional(ScanSettings)}) {}
export class UpdateFrameworkOutput extends S.Class<UpdateFrameworkOutput>("UpdateFrameworkOutput")({FrameworkName: S.optional(S.String), FrameworkArn: S.optional(S.String), CreationTime: S.optional(S.Date)}) {}
export class UpdateRecoveryPointIndexSettingsOutput extends S.Class<UpdateRecoveryPointIndexSettingsOutput>("UpdateRecoveryPointIndexSettingsOutput")({BackupVaultName: S.optional(S.String), RecoveryPointArn: S.optional(S.String), IndexStatus: S.optional(S.String), Index: S.optional(S.String)}) {}
export class CalculatedLifecycle extends S.Class<CalculatedLifecycle>("CalculatedLifecycle")({MoveToColdStorageAt: S.optional(S.Date), DeleteAt: S.optional(S.Date)}) {}
export class UpdateRecoveryPointLifecycleOutput extends S.Class<UpdateRecoveryPointLifecycleOutput>("UpdateRecoveryPointLifecycleOutput")({BackupVaultArn: S.optional(S.String), RecoveryPointArn: S.optional(S.String), Lifecycle: S.optional(Lifecycle), CalculatedLifecycle: S.optional(CalculatedLifecycle)}) {}
export class UpdateReportPlanOutput extends S.Class<UpdateReportPlanOutput>("UpdateReportPlanOutput")({ReportPlanName: S.optional(S.String), ReportPlanArn: S.optional(S.String), CreationTime: S.optional(S.Date)}) {}
export class UpdateRestoreTestingPlanInput extends S.Class<UpdateRestoreTestingPlanInput>("UpdateRestoreTestingPlanInput")({RestoreTestingPlan: RestoreTestingPlanForUpdate, RestoreTestingPlanName: S.String}) {}
export class UpdateRestoreTestingSelectionInput extends S.Class<UpdateRestoreTestingSelectionInput>("UpdateRestoreTestingSelectionInput")({RestoreTestingPlanName: S.String, RestoreTestingSelection: RestoreTestingSelectionForUpdate, RestoreTestingSelectionName: S.String}) {}
export class UpdateTieringConfigurationInput extends S.Class<UpdateTieringConfigurationInput>("UpdateTieringConfigurationInput")({TieringConfigurationName: S.String, TieringConfiguration: TieringConfigurationInputForUpdate}) {}
export const ScanFindings = S.Array(S.String);
export class RestoreTestingPlanForCreate extends S.Class<RestoreTestingPlanForCreate>("RestoreTestingPlanForCreate")({RecoveryPointSelection: RestoreTestingRecoveryPointSelection, RestoreTestingPlanName: S.String, ScheduleExpression: S.String, ScheduleExpressionTimezone: S.optional(S.String), StartWindowHours: S.optional(S.Number)}) {}
export class TieringConfigurationInputForCreate extends S.Class<TieringConfigurationInputForCreate>("TieringConfigurationInputForCreate")({TieringConfigurationName: S.String, BackupVaultName: S.String, ResourceSelection: ResourceSelections}) {}
export const BackupJobChildJobsInState = S.Record({key: S.String, value: S.Number});
export class LatestMpaApprovalTeamUpdate extends S.Class<LatestMpaApprovalTeamUpdate>("LatestMpaApprovalTeamUpdate")({MpaSessionArn: S.optional(S.String), Status: S.optional(S.String), StatusMessage: S.optional(S.String), InitiationDate: S.optional(S.Date), ExpiryDate: S.optional(S.Date)}) {}
export class ScanResult extends S.Class<ScanResult>("ScanResult")({MalwareScanner: S.optional(S.String), ScanJobState: S.optional(S.String), LastScanTimestamp: S.optional(S.Date), Findings: S.optional(ScanFindings)}) {}
export const ScanResults = S.Array(ScanResult);
export class ScanJobCreator extends S.Class<ScanJobCreator>("ScanJobCreator")({BackupPlanArn: S.String, BackupPlanId: S.String, BackupPlanVersion: S.String, BackupRuleId: S.String}) {}
export class ScanResultInfo extends S.Class<ScanResultInfo>("ScanResultInfo")({ScanResultStatus: S.String}) {}
export class ScheduledPlanExecutionMember extends S.Class<ScheduledPlanExecutionMember>("ScheduledPlanExecutionMember")({ExecutionTime: S.optional(S.Date), RuleId: S.optional(S.String), RuleExecutionType: S.optional(S.String)}) {}
export const ScheduledRunsPreview = S.Array(ScheduledPlanExecutionMember);
export class RestoreTestingPlanForGet extends S.Class<RestoreTestingPlanForGet>("RestoreTestingPlanForGet")({CreationTime: S.Date, CreatorRequestId: S.optional(S.String), LastExecutionTime: S.optional(S.Date), LastUpdateTime: S.optional(S.Date), RecoveryPointSelection: RestoreTestingRecoveryPointSelection, RestoreTestingPlanArn: S.String, RestoreTestingPlanName: S.String, ScheduleExpression: S.String, ScheduleExpressionTimezone: S.optional(S.String), StartWindowHours: S.optional(S.Number)}) {}
export class RestoreTestingSelectionForGet extends S.Class<RestoreTestingSelectionForGet>("RestoreTestingSelectionForGet")({CreationTime: S.Date, CreatorRequestId: S.optional(S.String), IamRoleArn: S.String, ProtectedResourceArns: S.optional(stringList), ProtectedResourceConditions: S.optional(ProtectedResourceConditions), ProtectedResourceType: S.String, RestoreMetadataOverrides: S.optional(SensitiveStringMap), RestoreTestingPlanName: S.String, RestoreTestingSelectionName: S.String, ValidationWindowHours: S.optional(S.Number)}) {}
export class TieringConfiguration extends S.Class<TieringConfiguration>("TieringConfiguration")({TieringConfigurationName: S.String, TieringConfigurationArn: S.optional(S.String), BackupVaultName: S.String, ResourceSelection: ResourceSelections, CreatorRequestId: S.optional(S.String), CreationTime: S.optional(S.Date), LastUpdatedTime: S.optional(S.Date)}) {}
export class BackupJob extends S.Class<BackupJob>("BackupJob")({AccountId: S.optional(S.String), BackupJobId: S.optional(S.String), BackupVaultName: S.optional(S.String), BackupVaultArn: S.optional(S.String), VaultType: S.optional(S.String), VaultLockState: S.optional(S.String), RecoveryPointArn: S.optional(S.String), RecoveryPointLifecycle: S.optional(Lifecycle), EncryptionKeyArn: S.optional(S.String), IsEncrypted: S.optional(S.Boolean), ResourceArn: S.optional(S.String), CreationDate: S.optional(S.Date), CompletionDate: S.optional(S.Date), State: S.optional(S.String), StatusMessage: S.optional(S.String), PercentDone: S.optional(S.String), BackupSizeInBytes: S.optional(S.Number), IamRoleArn: S.optional(S.String), CreatedBy: S.optional(RecoveryPointCreator), ExpectedCompletionDate: S.optional(S.Date), StartBy: S.optional(S.Date), ResourceType: S.optional(S.String), BytesTransferred: S.optional(S.Number), BackupOptions: S.optional(BackupOptions), BackupType: S.optional(S.String), ParentJobId: S.optional(S.String), IsParent: S.optional(S.Boolean), ResourceName: S.optional(S.String), InitiationDate: S.optional(S.Date), MessageCategory: S.optional(S.String)}) {}
export const BackupJobsList = S.Array(BackupJob);
export class BackupJobSummary extends S.Class<BackupJobSummary>("BackupJobSummary")({Region: S.optional(S.String), AccountId: S.optional(S.String), State: S.optional(S.String), ResourceType: S.optional(S.String), MessageCategory: S.optional(S.String), Count: S.optional(S.Number), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date)}) {}
export const BackupJobSummaryList = S.Array(BackupJobSummary);
export const BackupPlansList = S.Array(BackupPlansListMember);
export class BackupPlanTemplatesListMember extends S.Class<BackupPlanTemplatesListMember>("BackupPlanTemplatesListMember")({BackupPlanTemplateId: S.optional(S.String), BackupPlanTemplateName: S.optional(S.String)}) {}
export const BackupPlanTemplatesList = S.Array(BackupPlanTemplatesListMember);
export class BackupSelectionsListMember extends S.Class<BackupSelectionsListMember>("BackupSelectionsListMember")({SelectionId: S.optional(S.String), SelectionName: S.optional(S.String), BackupPlanId: S.optional(S.String), CreationDate: S.optional(S.Date), CreatorRequestId: S.optional(S.String), IamRoleArn: S.optional(S.String)}) {}
export const BackupSelectionsList = S.Array(BackupSelectionsListMember);
export class BackupVaultListMember extends S.Class<BackupVaultListMember>("BackupVaultListMember")({BackupVaultName: S.optional(S.String), BackupVaultArn: S.optional(S.String), VaultType: S.optional(S.String), VaultState: S.optional(S.String), CreationDate: S.optional(S.Date), EncryptionKeyArn: S.optional(S.String), CreatorRequestId: S.optional(S.String), NumberOfRecoveryPoints: S.optional(S.Number), Locked: S.optional(S.Boolean), MinRetentionDays: S.optional(S.Number), MaxRetentionDays: S.optional(S.Number), LockDate: S.optional(S.Date), EncryptionKeyType: S.optional(S.String)}) {}
export const BackupVaultList = S.Array(BackupVaultListMember);
export class CopyJobSummary extends S.Class<CopyJobSummary>("CopyJobSummary")({Region: S.optional(S.String), AccountId: S.optional(S.String), State: S.optional(S.String), ResourceType: S.optional(S.String), MessageCategory: S.optional(S.String), Count: S.optional(S.Number), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date)}) {}
export const CopyJobSummaryList = S.Array(CopyJobSummary);
export class Framework extends S.Class<Framework>("Framework")({FrameworkName: S.optional(S.String), FrameworkArn: S.optional(S.String), FrameworkDescription: S.optional(S.String), NumberOfControls: S.optional(S.Number), CreationTime: S.optional(S.Date), DeploymentStatus: S.optional(S.String)}) {}
export const FrameworkList = S.Array(Framework);
export class IndexedRecoveryPoint extends S.Class<IndexedRecoveryPoint>("IndexedRecoveryPoint")({RecoveryPointArn: S.optional(S.String), SourceResourceArn: S.optional(S.String), IamRoleArn: S.optional(S.String), BackupCreationDate: S.optional(S.Date), ResourceType: S.optional(S.String), IndexCreationDate: S.optional(S.Date), IndexStatus: S.optional(S.String), IndexStatusMessage: S.optional(S.String), BackupVaultArn: S.optional(S.String)}) {}
export const IndexedRecoveryPointList = S.Array(IndexedRecoveryPoint);
export class LegalHold extends S.Class<LegalHold>("LegalHold")({Title: S.optional(S.String), Status: S.optional(S.String), Description: S.optional(S.String), LegalHoldId: S.optional(S.String), LegalHoldArn: S.optional(S.String), CreationDate: S.optional(S.Date), CancellationDate: S.optional(S.Date)}) {}
export const LegalHoldsList = S.Array(LegalHold);
export class RecoveryPointMember extends S.Class<RecoveryPointMember>("RecoveryPointMember")({RecoveryPointArn: S.optional(S.String), ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), BackupVaultName: S.optional(S.String)}) {}
export const RecoveryPointsList = S.Array(RecoveryPointMember);
export class AggregatedScanResult extends S.Class<AggregatedScanResult>("AggregatedScanResult")({FailedScan: S.optional(S.Boolean), Findings: S.optional(ScanFindings), LastComputed: S.optional(S.Date)}) {}
export class RecoveryPointByResource extends S.Class<RecoveryPointByResource>("RecoveryPointByResource")({RecoveryPointArn: S.optional(S.String), CreationDate: S.optional(S.Date), Status: S.optional(S.String), StatusMessage: S.optional(S.String), EncryptionKeyArn: S.optional(S.String), BackupSizeBytes: S.optional(S.Number), BackupVaultName: S.optional(S.String), IsParent: S.optional(S.Boolean), ParentRecoveryPointArn: S.optional(S.String), ResourceName: S.optional(S.String), VaultType: S.optional(S.String), IndexStatus: S.optional(S.String), IndexStatusMessage: S.optional(S.String), EncryptionKeyType: S.optional(S.String), AggregatedScanResult: S.optional(AggregatedScanResult)}) {}
export const RecoveryPointByResourceList = S.Array(RecoveryPointByResource);
export class RestoreJobSummary extends S.Class<RestoreJobSummary>("RestoreJobSummary")({Region: S.optional(S.String), AccountId: S.optional(S.String), State: S.optional(S.String), ResourceType: S.optional(S.String), Count: S.optional(S.Number), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date)}) {}
export const RestoreJobSummaryList = S.Array(RestoreJobSummary);
export class RestoreTestingPlanForList extends S.Class<RestoreTestingPlanForList>("RestoreTestingPlanForList")({CreationTime: S.Date, LastExecutionTime: S.optional(S.Date), LastUpdateTime: S.optional(S.Date), RestoreTestingPlanArn: S.String, RestoreTestingPlanName: S.String, ScheduleExpression: S.String, ScheduleExpressionTimezone: S.optional(S.String), StartWindowHours: S.optional(S.Number)}) {}
export const RestoreTestingPlans = S.Array(RestoreTestingPlanForList);
export class RestoreTestingSelectionForList extends S.Class<RestoreTestingSelectionForList>("RestoreTestingSelectionForList")({CreationTime: S.Date, IamRoleArn: S.String, ProtectedResourceType: S.String, RestoreTestingPlanName: S.String, RestoreTestingSelectionName: S.String, ValidationWindowHours: S.optional(S.Number)}) {}
export const RestoreTestingSelections = S.Array(RestoreTestingSelectionForList);
export class ScanJob extends S.Class<ScanJob>("ScanJob")({AccountId: S.String, BackupVaultArn: S.String, BackupVaultName: S.String, CompletionDate: S.optional(S.Date), CreatedBy: ScanJobCreator, CreationDate: S.Date, IamRoleArn: S.String, MalwareScanner: S.String, RecoveryPointArn: S.String, ResourceArn: S.String, ResourceName: S.String, ResourceType: S.String, ScanBaseRecoveryPointArn: S.optional(S.String), ScanId: S.optional(S.String), ScanJobId: S.String, ScanMode: S.String, ScanResult: S.optional(ScanResultInfo), ScannerRoleArn: S.String, State: S.optional(S.String), StatusMessage: S.optional(S.String)}) {}
export const ScanJobs = S.Array(ScanJob);
export class ScanJobSummary extends S.Class<ScanJobSummary>("ScanJobSummary")({Region: S.optional(S.String), AccountId: S.optional(S.String), State: S.optional(S.String), ResourceType: S.optional(S.String), Count: S.optional(S.Number), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), MalwareScanner: S.optional(S.String), ScanResultStatus: S.optional(S.String)}) {}
export const ScanJobSummaryList = S.Array(ScanJobSummary);
export class TieringConfigurationsListMember extends S.Class<TieringConfigurationsListMember>("TieringConfigurationsListMember")({TieringConfigurationArn: S.optional(S.String), TieringConfigurationName: S.optional(S.String), BackupVaultName: S.optional(S.String), CreationTime: S.optional(S.Date), LastUpdatedTime: S.optional(S.Date)}) {}
export const TieringConfigurationsList = S.Array(TieringConfigurationsListMember);
export class CreateFrameworkInput extends S.Class<CreateFrameworkInput>("CreateFrameworkInput")({FrameworkName: S.String, FrameworkDescription: S.optional(S.String), FrameworkControls: FrameworkControls, IdempotencyToken: S.optional(S.String), FrameworkTags: S.optional(stringMap)}) {}
export class CreateLegalHoldInput extends S.Class<CreateLegalHoldInput>("CreateLegalHoldInput")({Title: S.String, Description: S.String, IdempotencyToken: S.optional(S.String), RecoveryPointSelection: S.optional(RecoveryPointSelection), Tags: S.optional(Tags)}) {}
export class CreateReportPlanOutput extends S.Class<CreateReportPlanOutput>("CreateReportPlanOutput")({ReportPlanName: S.optional(S.String), ReportPlanArn: S.optional(S.String), CreationTime: S.optional(S.Date)}) {}
export class CreateRestoreTestingPlanInput extends S.Class<CreateRestoreTestingPlanInput>("CreateRestoreTestingPlanInput")({CreatorRequestId: S.optional(S.String), RestoreTestingPlan: RestoreTestingPlanForCreate, Tags: S.optional(SensitiveStringMap)}) {}
export class CreateTieringConfigurationInput extends S.Class<CreateTieringConfigurationInput>("CreateTieringConfigurationInput")({TieringConfiguration: TieringConfigurationInputForCreate, TieringConfigurationTags: S.optional(Tags), CreatorRequestId: S.optional(S.String)}) {}
export class DescribeBackupJobOutput extends S.Class<DescribeBackupJobOutput>("DescribeBackupJobOutput")({AccountId: S.optional(S.String), BackupJobId: S.optional(S.String), BackupVaultName: S.optional(S.String), RecoveryPointLifecycle: S.optional(Lifecycle), BackupVaultArn: S.optional(S.String), VaultType: S.optional(S.String), VaultLockState: S.optional(S.String), RecoveryPointArn: S.optional(S.String), EncryptionKeyArn: S.optional(S.String), IsEncrypted: S.optional(S.Boolean), ResourceArn: S.optional(S.String), CreationDate: S.optional(S.Date), CompletionDate: S.optional(S.Date), State: S.optional(S.String), StatusMessage: S.optional(S.String), PercentDone: S.optional(S.String), BackupSizeInBytes: S.optional(S.Number), IamRoleArn: S.optional(S.String), CreatedBy: S.optional(RecoveryPointCreator), ResourceType: S.optional(S.String), BytesTransferred: S.optional(S.Number), ExpectedCompletionDate: S.optional(S.Date), StartBy: S.optional(S.Date), BackupOptions: S.optional(BackupOptions), BackupType: S.optional(S.String), ParentJobId: S.optional(S.String), IsParent: S.optional(S.Boolean), NumberOfChildJobs: S.optional(S.Number), ChildJobsInState: S.optional(BackupJobChildJobsInState), ResourceName: S.optional(S.String), InitiationDate: S.optional(S.Date), MessageCategory: S.optional(S.String)}) {}
export class DescribeBackupVaultOutput extends S.Class<DescribeBackupVaultOutput>("DescribeBackupVaultOutput")({BackupVaultName: S.optional(S.String), BackupVaultArn: S.optional(S.String), VaultType: S.optional(S.String), VaultState: S.optional(S.String), EncryptionKeyArn: S.optional(S.String), CreationDate: S.optional(S.Date), CreatorRequestId: S.optional(S.String), NumberOfRecoveryPoints: S.optional(S.Number), Locked: S.optional(S.Boolean), MinRetentionDays: S.optional(S.Number), MaxRetentionDays: S.optional(S.Number), LockDate: S.optional(S.Date), SourceBackupVaultArn: S.optional(S.String), MpaApprovalTeamArn: S.optional(S.String), MpaSessionArn: S.optional(S.String), LatestMpaApprovalTeamUpdate: S.optional(LatestMpaApprovalTeamUpdate), EncryptionKeyType: S.optional(S.String)}) {}
export class DescribeRecoveryPointOutput extends S.Class<DescribeRecoveryPointOutput>("DescribeRecoveryPointOutput")({RecoveryPointArn: S.optional(S.String), BackupVaultName: S.optional(S.String), BackupVaultArn: S.optional(S.String), SourceBackupVaultArn: S.optional(S.String), ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), CreatedBy: S.optional(RecoveryPointCreator), IamRoleArn: S.optional(S.String), Status: S.optional(S.String), StatusMessage: S.optional(S.String), CreationDate: S.optional(S.Date), InitiationDate: S.optional(S.Date), CompletionDate: S.optional(S.Date), BackupSizeInBytes: S.optional(S.Number), CalculatedLifecycle: S.optional(CalculatedLifecycle), Lifecycle: S.optional(Lifecycle), EncryptionKeyArn: S.optional(S.String), IsEncrypted: S.optional(S.Boolean), StorageClass: S.optional(S.String), LastRestoreTime: S.optional(S.Date), ParentRecoveryPointArn: S.optional(S.String), CompositeMemberIdentifier: S.optional(S.String), IsParent: S.optional(S.Boolean), ResourceName: S.optional(S.String), VaultType: S.optional(S.String), IndexStatus: S.optional(S.String), IndexStatusMessage: S.optional(S.String), EncryptionKeyType: S.optional(S.String), ScanResults: S.optional(ScanResults)}) {}
export class DescribeReportPlanOutput extends S.Class<DescribeReportPlanOutput>("DescribeReportPlanOutput")({ReportPlan: S.optional(ReportPlan)}) {}
export class DescribeRestoreJobOutput extends S.Class<DescribeRestoreJobOutput>("DescribeRestoreJobOutput")({AccountId: S.optional(S.String), RestoreJobId: S.optional(S.String), RecoveryPointArn: S.optional(S.String), SourceResourceArn: S.optional(S.String), BackupVaultArn: S.optional(S.String), CreationDate: S.optional(S.Date), CompletionDate: S.optional(S.Date), Status: S.optional(S.String), StatusMessage: S.optional(S.String), PercentDone: S.optional(S.String), BackupSizeInBytes: S.optional(S.Number), IamRoleArn: S.optional(S.String), ExpectedCompletionTimeMinutes: S.optional(S.Number), CreatedResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), RecoveryPointCreationDate: S.optional(S.Date), CreatedBy: S.optional(RestoreJobCreator), ValidationStatus: S.optional(S.String), ValidationStatusMessage: S.optional(S.String), DeletionStatus: S.optional(S.String), DeletionStatusMessage: S.optional(S.String), IsParent: S.optional(S.Boolean), ParentJobId: S.optional(S.String)}) {}
export class DescribeScanJobOutput extends S.Class<DescribeScanJobOutput>("DescribeScanJobOutput")({AccountId: S.String, BackupVaultArn: S.String, BackupVaultName: S.String, CompletionDate: S.optional(S.Date), CreatedBy: ScanJobCreator, CreationDate: S.Date, IamRoleArn: S.String, MalwareScanner: S.String, RecoveryPointArn: S.String, ResourceArn: S.String, ResourceName: S.String, ResourceType: S.String, ScanBaseRecoveryPointArn: S.optional(S.String), ScanId: S.optional(S.String), ScanJobId: S.String, ScanMode: S.String, ScanResult: S.optional(ScanResultInfo), ScannerRoleArn: S.String, State: S.String, StatusMessage: S.optional(S.String)}) {}
export class GetRestoreTestingPlanOutput extends S.Class<GetRestoreTestingPlanOutput>("GetRestoreTestingPlanOutput")({RestoreTestingPlan: RestoreTestingPlanForGet}) {}
export class GetRestoreTestingSelectionOutput extends S.Class<GetRestoreTestingSelectionOutput>("GetRestoreTestingSelectionOutput")({RestoreTestingSelection: RestoreTestingSelectionForGet}) {}
export class GetTieringConfigurationOutput extends S.Class<GetTieringConfigurationOutput>("GetTieringConfigurationOutput")({TieringConfiguration: S.optional(TieringConfiguration)}) {}
export class ListBackupJobsOutput extends S.Class<ListBackupJobsOutput>("ListBackupJobsOutput")({BackupJobs: S.optional(BackupJobsList), NextToken: S.optional(S.String)}) {}
export class ListBackupJobSummariesOutput extends S.Class<ListBackupJobSummariesOutput>("ListBackupJobSummariesOutput")({BackupJobSummaries: S.optional(BackupJobSummaryList), AggregationPeriod: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListBackupPlansOutput extends S.Class<ListBackupPlansOutput>("ListBackupPlansOutput")({NextToken: S.optional(S.String), BackupPlansList: S.optional(BackupPlansList)}) {}
export class ListBackupPlanTemplatesOutput extends S.Class<ListBackupPlanTemplatesOutput>("ListBackupPlanTemplatesOutput")({NextToken: S.optional(S.String), BackupPlanTemplatesList: S.optional(BackupPlanTemplatesList)}) {}
export class ListBackupSelectionsOutput extends S.Class<ListBackupSelectionsOutput>("ListBackupSelectionsOutput")({NextToken: S.optional(S.String), BackupSelectionsList: S.optional(BackupSelectionsList)}) {}
export class ListBackupVaultsOutput extends S.Class<ListBackupVaultsOutput>("ListBackupVaultsOutput")({BackupVaultList: S.optional(BackupVaultList), NextToken: S.optional(S.String)}) {}
export class ListCopyJobSummariesOutput extends S.Class<ListCopyJobSummariesOutput>("ListCopyJobSummariesOutput")({CopyJobSummaries: S.optional(CopyJobSummaryList), AggregationPeriod: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListFrameworksOutput extends S.Class<ListFrameworksOutput>("ListFrameworksOutput")({Frameworks: S.optional(FrameworkList), NextToken: S.optional(S.String)}) {}
export class ListIndexedRecoveryPointsOutput extends S.Class<ListIndexedRecoveryPointsOutput>("ListIndexedRecoveryPointsOutput")({IndexedRecoveryPoints: S.optional(IndexedRecoveryPointList), NextToken: S.optional(S.String)}) {}
export class ListLegalHoldsOutput extends S.Class<ListLegalHoldsOutput>("ListLegalHoldsOutput")({NextToken: S.optional(S.String), LegalHolds: S.optional(LegalHoldsList)}) {}
export class ListProtectedResourcesOutput extends S.Class<ListProtectedResourcesOutput>("ListProtectedResourcesOutput")({Results: S.optional(ProtectedResourcesList), NextToken: S.optional(S.String)}) {}
export class ListRecoveryPointsByLegalHoldOutput extends S.Class<ListRecoveryPointsByLegalHoldOutput>("ListRecoveryPointsByLegalHoldOutput")({RecoveryPoints: S.optional(RecoveryPointsList), NextToken: S.optional(S.String)}) {}
export class ListRecoveryPointsByResourceOutput extends S.Class<ListRecoveryPointsByResourceOutput>("ListRecoveryPointsByResourceOutput")({NextToken: S.optional(S.String), RecoveryPoints: S.optional(RecoveryPointByResourceList)}) {}
export class ListRestoreJobsOutput extends S.Class<ListRestoreJobsOutput>("ListRestoreJobsOutput")({RestoreJobs: S.optional(RestoreJobsList), NextToken: S.optional(S.String)}) {}
export class ListRestoreJobSummariesOutput extends S.Class<ListRestoreJobSummariesOutput>("ListRestoreJobSummariesOutput")({RestoreJobSummaries: S.optional(RestoreJobSummaryList), AggregationPeriod: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListRestoreTestingPlansOutput extends S.Class<ListRestoreTestingPlansOutput>("ListRestoreTestingPlansOutput")({NextToken: S.optional(S.String), RestoreTestingPlans: RestoreTestingPlans}) {}
export class ListRestoreTestingSelectionsOutput extends S.Class<ListRestoreTestingSelectionsOutput>("ListRestoreTestingSelectionsOutput")({NextToken: S.optional(S.String), RestoreTestingSelections: RestoreTestingSelections}) {}
export class ListScanJobsOutput extends S.Class<ListScanJobsOutput>("ListScanJobsOutput")({NextToken: S.optional(S.String), ScanJobs: ScanJobs}) {}
export class ListScanJobSummariesOutput extends S.Class<ListScanJobSummariesOutput>("ListScanJobSummariesOutput")({ScanJobSummaries: S.optional(ScanJobSummaryList), AggregationPeriod: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListTieringConfigurationsOutput extends S.Class<ListTieringConfigurationsOutput>("ListTieringConfigurationsOutput")({TieringConfigurations: S.optional(TieringConfigurationsList), NextToken: S.optional(S.String)}) {}
export class StartBackupJobOutput extends S.Class<StartBackupJobOutput>("StartBackupJobOutput")({BackupJobId: S.optional(S.String), RecoveryPointArn: S.optional(S.String), CreationDate: S.optional(S.Date), IsParent: S.optional(S.Boolean)}) {}
export class StartRestoreJobOutput extends S.Class<StartRestoreJobOutput>("StartRestoreJobOutput")({RestoreJobId: S.optional(S.String)}) {}
export class UpdateRestoreTestingPlanOutput extends S.Class<UpdateRestoreTestingPlanOutput>("UpdateRestoreTestingPlanOutput")({CreationTime: S.Date, RestoreTestingPlanArn: S.String, RestoreTestingPlanName: S.String, UpdateTime: S.Date}) {}
export class UpdateRestoreTestingSelectionOutput extends S.Class<UpdateRestoreTestingSelectionOutput>("UpdateRestoreTestingSelectionOutput")({CreationTime: S.Date, RestoreTestingPlanArn: S.String, RestoreTestingPlanName: S.String, RestoreTestingSelectionName: S.String, UpdateTime: S.Date}) {}
export class UpdateTieringConfigurationOutput extends S.Class<UpdateTieringConfigurationOutput>("UpdateTieringConfigurationOutput")({TieringConfigurationArn: S.optional(S.String), TieringConfigurationName: S.optional(S.String), CreationTime: S.optional(S.Date), LastUpdatedTime: S.optional(S.Date)}) {}
export class LatestRevokeRequest extends S.Class<LatestRevokeRequest>("LatestRevokeRequest")({MpaSessionArn: S.optional(S.String), Status: S.optional(S.String), StatusMessage: S.optional(S.String), InitiationDate: S.optional(S.Date), ExpiryDate: S.optional(S.Date)}) {}
export class RestoreTestingSelectionForCreate extends S.Class<RestoreTestingSelectionForCreate>("RestoreTestingSelectionForCreate")({IamRoleArn: S.String, ProtectedResourceArns: S.optional(stringList), ProtectedResourceConditions: S.optional(ProtectedResourceConditions), ProtectedResourceType: S.String, RestoreMetadataOverrides: S.optional(SensitiveStringMap), RestoreTestingSelectionName: S.String, ValidationWindowHours: S.optional(S.Number)}) {}
export class RecoveryPointByBackupVault extends S.Class<RecoveryPointByBackupVault>("RecoveryPointByBackupVault")({RecoveryPointArn: S.optional(S.String), BackupVaultName: S.optional(S.String), BackupVaultArn: S.optional(S.String), SourceBackupVaultArn: S.optional(S.String), ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), CreatedBy: S.optional(RecoveryPointCreator), IamRoleArn: S.optional(S.String), Status: S.optional(S.String), StatusMessage: S.optional(S.String), CreationDate: S.optional(S.Date), InitiationDate: S.optional(S.Date), CompletionDate: S.optional(S.Date), BackupSizeInBytes: S.optional(S.Number), CalculatedLifecycle: S.optional(CalculatedLifecycle), Lifecycle: S.optional(Lifecycle), EncryptionKeyArn: S.optional(S.String), IsEncrypted: S.optional(S.Boolean), LastRestoreTime: S.optional(S.Date), ParentRecoveryPointArn: S.optional(S.String), CompositeMemberIdentifier: S.optional(S.String), IsParent: S.optional(S.Boolean), ResourceName: S.optional(S.String), VaultType: S.optional(S.String), IndexStatus: S.optional(S.String), IndexStatusMessage: S.optional(S.String), EncryptionKeyType: S.optional(S.String), AggregatedScanResult: S.optional(AggregatedScanResult)}) {}
export const RecoveryPointByBackupVaultList = S.Array(RecoveryPointByBackupVault);
export class RestoreAccessBackupVaultListMember extends S.Class<RestoreAccessBackupVaultListMember>("RestoreAccessBackupVaultListMember")({RestoreAccessBackupVaultArn: S.optional(S.String), CreationDate: S.optional(S.Date), ApprovalDate: S.optional(S.Date), VaultState: S.optional(S.String), LatestRevokeRequest: S.optional(LatestRevokeRequest)}) {}
export const RestoreAccessBackupVaultList = S.Array(RestoreAccessBackupVaultListMember);
export class CreateBackupPlanInput extends S.Class<CreateBackupPlanInput>("CreateBackupPlanInput")({BackupPlan: BackupPlanInput, BackupPlanTags: S.optional(Tags), CreatorRequestId: S.optional(S.String)}) {}
export class CreateBackupSelectionInput extends S.Class<CreateBackupSelectionInput>("CreateBackupSelectionInput")({BackupPlanId: S.String, BackupSelection: BackupSelection, CreatorRequestId: S.optional(S.String)}) {}
export class CreateFrameworkOutput extends S.Class<CreateFrameworkOutput>("CreateFrameworkOutput")({FrameworkName: S.optional(S.String), FrameworkArn: S.optional(S.String)}) {}
export class CreateLegalHoldOutput extends S.Class<CreateLegalHoldOutput>("CreateLegalHoldOutput")({Title: S.optional(S.String), Status: S.optional(S.String), Description: S.optional(S.String), LegalHoldId: S.optional(S.String), LegalHoldArn: S.optional(S.String), CreationDate: S.optional(S.Date), RecoveryPointSelection: S.optional(RecoveryPointSelection)}) {}
export class CreateRestoreTestingPlanOutput extends S.Class<CreateRestoreTestingPlanOutput>("CreateRestoreTestingPlanOutput")({CreationTime: S.Date, RestoreTestingPlanArn: S.String, RestoreTestingPlanName: S.String}) {}
export class CreateRestoreTestingSelectionInput extends S.Class<CreateRestoreTestingSelectionInput>("CreateRestoreTestingSelectionInput")({CreatorRequestId: S.optional(S.String), RestoreTestingPlanName: S.String, RestoreTestingSelection: RestoreTestingSelectionForCreate}) {}
export class CreateTieringConfigurationOutput extends S.Class<CreateTieringConfigurationOutput>("CreateTieringConfigurationOutput")({TieringConfigurationArn: S.optional(S.String), TieringConfigurationName: S.optional(S.String), CreationTime: S.optional(S.Date)}) {}
export class DescribeCopyJobOutput extends S.Class<DescribeCopyJobOutput>("DescribeCopyJobOutput")({CopyJob: S.optional(CopyJob)}) {}
export class DescribeReportJobOutput extends S.Class<DescribeReportJobOutput>("DescribeReportJobOutput")({ReportJob: S.optional(ReportJob)}) {}
export class GetBackupPlanOutput extends S.Class<GetBackupPlanOutput>("GetBackupPlanOutput")({BackupPlan: S.optional(BackupPlan), BackupPlanId: S.optional(S.String), BackupPlanArn: S.optional(S.String), VersionId: S.optional(S.String), CreatorRequestId: S.optional(S.String), CreationDate: S.optional(S.Date), DeletionDate: S.optional(S.Date), LastExecutionDate: S.optional(S.Date), AdvancedBackupSettings: S.optional(AdvancedBackupSettings), ScheduledRunsPreview: S.optional(ScheduledRunsPreview)}) {}
export class ListRecoveryPointsByBackupVaultOutput extends S.Class<ListRecoveryPointsByBackupVaultOutput>("ListRecoveryPointsByBackupVaultOutput")({NextToken: S.optional(S.String), RecoveryPoints: S.optional(RecoveryPointByBackupVaultList)}) {}
export class ListRestoreAccessBackupVaultsOutput extends S.Class<ListRestoreAccessBackupVaultsOutput>("ListRestoreAccessBackupVaultsOutput")({NextToken: S.optional(S.String), RestoreAccessBackupVaults: S.optional(RestoreAccessBackupVaultList)}) {}
export class CreateBackupPlanOutput extends S.Class<CreateBackupPlanOutput>("CreateBackupPlanOutput")({BackupPlanId: S.optional(S.String), BackupPlanArn: S.optional(S.String), CreationDate: S.optional(S.Date), VersionId: S.optional(S.String), AdvancedBackupSettings: S.optional(AdvancedBackupSettings)}) {}
export class CreateBackupSelectionOutput extends S.Class<CreateBackupSelectionOutput>("CreateBackupSelectionOutput")({SelectionId: S.optional(S.String), BackupPlanId: S.optional(S.String), CreationDate: S.optional(S.Date)}) {}
export class CreateRestoreTestingSelectionOutput extends S.Class<CreateRestoreTestingSelectionOutput>("CreateRestoreTestingSelectionOutput")({CreationTime: S.Date, RestoreTestingPlanArn: S.String, RestoreTestingPlanName: S.String, RestoreTestingSelectionName: S.String}) {}

//# Errors
export class InvalidParameterValueException extends S.TaggedError<InvalidParameterValueException>()("InvalidParameterValueException", {}) {};
export class MissingParameterValueException extends S.TaggedError<MissingParameterValueException>()("MissingParameterValueException", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class InvalidResourceStateException extends S.TaggedError<InvalidResourceStateException>()("InvalidResourceStateException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class AlreadyExistsException extends S.TaggedError<AlreadyExistsException>()("AlreadyExistsException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class DependencyFailureException extends S.TaggedError<DependencyFailureException>()("DependencyFailureException", {}) {};

//# Operations
/**
 * Deletes event notifications for the specified backup vault.
 */export const deleteBackupVaultNotifications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/notification-configuration", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DeleteBackupVaultNotifications" }, DeleteBackupVaultNotificationsInput, S.Struct({}), [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the recovery point specified by a recovery point ID.
 * 
 * 
 * If the recovery point ID belongs to a continuous backup, calling this endpoint deletes
 * the existing continuous backup and stops future continuous backup.
 * 
 * 
 * When an IAM role's permissions are insufficient to call this API, the service sends back
 * an HTTP 200 response with an empty HTTP body, but the recovery point is not deleted.
 * Instead, it enters an `EXPIRED` state.
 * 
 * 
 * 
 * `EXPIRED` recovery points can be deleted with this API once the IAM role
 * has the `iam:CreateServiceLinkedRole` action. To learn more about adding this role, see
 * 
 * Troubleshooting manual deletions.
 * 
 * 
 * If the user or role is deleted or the permission within the role is removed,
 * the deletion will not be successful and will enter an `EXPIRED` state.
 */export const deleteRecoveryPoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DeleteRecoveryPoint" }, DeleteRecoveryPointInput, S.Struct({}), [InvalidParameterValueException, InvalidRequestException, InvalidResourceStateException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the report plan specified by a report plan name.
 */export const deleteReportPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/report-plans/{ReportPlanName}", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DeleteReportPlan" }, DeleteReportPlanInput, S.Struct({}), [ConflictException, InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This request deletes the specified restore testing plan.
 * 
 * 
 * Deletion can only successfully occur if all associated
 * restore testing selections are deleted first.
 */export const deleteRestoreTestingPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-testing/plans/{RestoreTestingPlanName}", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DeleteRestoreTestingPlan" }, DeleteRestoreTestingPlanInput, S.Struct({}), [InvalidRequestException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Input the Restore Testing Plan name and Restore Testing Selection
 * name.
 * 
 * 
 * All testing selections associated with a restore testing plan must
 * be deleted before the restore testing plan can be deleted.
 */export const deleteRestoreTestingSelection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DeleteRestoreTestingSelection" }, DeleteRestoreTestingSelectionInput, S.Struct({}), [ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the tiering configuration specified by a tiering configuration name.
 */export const deleteTieringConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/tiering-configurations/{TieringConfigurationName}", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DeleteTieringConfiguration" }, DeleteTieringConfigurationInput, DeleteTieringConfigurationOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the association between an MPA approval team and a backup vault, disabling the MPA approval workflow for restore operations.
 */export const disassociateBackupVaultMpaApprovalTeam = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/mpaApprovalTeam?delete", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DisassociateBackupVaultMpaApprovalTeam" }, DisassociateBackupVaultMpaApprovalTeamInput, S.Struct({}), [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified continuous backup recovery point from Backup and
 * releases control of that continuous backup to the source service, such as Amazon RDS. The source service will continue to create and retain continuous backups using the
 * lifecycle that you specified in your original backup plan.
 * 
 * 
 * Does not support snapshot backup recovery points.
 */export const disassociateRecoveryPoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/disassociate", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DisassociateRecoveryPoint" }, DisassociateRecoveryPointInput, S.Struct({}), [InvalidParameterValueException, InvalidRequestException, InvalidResourceStateException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This action to a specific child (nested) recovery point removes the relationship
 * between the specified recovery point and its parent (composite) recovery point.
 */export const disassociateRecoveryPointFromParent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/parentAssociation", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DisassociateRecoveryPointFromParent" }, DisassociateRecoveryPointFromParentInput, S.Struct({}), [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the Amazon Web Services resource types supported by Backup.
 */export const getSupportedResourceTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/supported-resource-types", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetSupportedResourceTypes" }, S.Struct({}), GetSupportedResourceTypesOutput, [ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets a resource-based policy that is used to manage access permissions on the target
 * backup vault. Requires a backup vault name and an access policy document in JSON
 * format.
 */export const putBackupVaultAccessPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/access-policy", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.PutBackupVaultAccessPolicy" }, PutBackupVaultAccessPolicyInput, S.Struct({}), [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Applies Backup Vault Lock to a backup vault, preventing attempts to delete
 * any recovery point stored in or created in a backup vault. Vault Lock also prevents
 * attempts to update the lifecycle policy that controls the retention period of any recovery
 * point currently stored in a backup vault. If specified, Vault Lock enforces a minimum and
 * maximum retention period for future backup and copy jobs that target a backup vault.
 * 
 * 
 * 
 * 
 * Backup Vault Lock has been assessed by Cohasset Associates for use in environments
 * that are subject to SEC 17a-4, CFTC, and FINRA regulations. For more information about
 * how Backup Vault Lock relates to these regulations, see the
 * Cohasset Associates
 * Compliance Assessment.
 * 
 * 
 * 
 * 
 * 
 * For more information, see Backup Vault Lock.
 */export const putBackupVaultLockConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/vault-lock", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.PutBackupVaultLockConfiguration" }, PutBackupVaultLockConfigurationInput, S.Struct({}), [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Turns on notifications on a backup vault for the specified topic and events.
 */export const putBackupVaultNotifications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/notification-configuration", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.PutBackupVaultNotifications" }, PutBackupVaultNotificationsInput, S.Struct({}), [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This request allows you to send your independent self-run
 * restore test validation results.
 * `RestoreJobId` and `ValidationStatus`
 * are required. Optionally, you can input a
 * `ValidationStatusMessage`.
 */export const putRestoreValidationResult = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-jobs/{RestoreJobId}/validations", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.PutRestoreValidationResult" }, PutRestoreValidationResultInput, S.Struct({}), [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Revokes access to a restore access backup vault, removing the ability to restore from its recovery points and permanently deleting the vault.
 */export const revokeRestoreAccessBackupVault = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/logically-air-gapped-backup-vaults/{BackupVaultName}/restore-access-backup-vaults/{RestoreAccessBackupVaultArn}", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.RevokeRestoreAccessBackupVault" }, RevokeRestoreAccessBackupVaultInput, S.Struct({}), [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attempts to cancel a job to create a one-time backup of a resource.
 * 
 * 
 * This action is not supported for the following services:
 * 
 * 
 * 
 * - Amazon Aurora
 * 
 * 
 * 
 * - Amazon DocumentDB (with MongoDB compatibility)
 * 
 * 
 * 
 * - Amazon FSx for Lustre
 * 
 * 
 * 
 * - Amazon FSx for NetApp ONTAP
 * 
 * 
 * 
 * - Amazon FSx for OpenZFS
 * 
 * 
 * 
 * - Amazon FSx for Windows File Server
 * 
 * 
 * 
 * - Amazon Neptune
 * 
 * 
 * 
 * - SAP HANA databases on Amazon EC2 instances
 * 
 * 
 * 
 * - Amazon RDS
 */export const stopBackupJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-jobs/{BackupJobId}", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.StopBackupJob" }, StopBackupJobInput, S.Struct({}), [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a set of key-value pairs from a recovery point, backup plan, or backup vault
 * identified by an Amazon Resource Name (ARN)
 * 
 * 
 * This API is not supported for recovery points for resource types
 * including Aurora, Amazon DocumentDB. Amazon EBS,
 * Amazon FSx, Neptune, and Amazon RDS.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/untag/{ResourceArn}", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.UntagResource" }, UntagResourceInput, S.Struct({}), [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates whether the Amazon Web Services account is opted in to cross-account backup.
 * Returns an error if the account is not an Organizations management account. Use the
 * `DescribeGlobalSettings` API to determine the current settings.
 */export const updateGlobalSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/global-settings", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.UpdateGlobalSettings" }, UpdateGlobalSettingsInput, S.Struct({}), [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the current service opt-in settings for the Region.
 * 
 * 
 * Use
 * the `DescribeRegionSettings` API to determine the resource types that are
 * supported.
 */export const updateRegionSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/account-settings", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.UpdateRegionSettings" }, UpdateRegionSettingsInput, S.Struct({}), [InvalidParameterValueException, MissingParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates an MPA approval team with a backup vault.
 */export const associateBackupVaultMpaApprovalTeam = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/mpaApprovalTeam", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.AssociateBackupVaultMpaApprovalTeam" }, AssociateBackupVaultMpaApprovalTeamInput, S.Struct({}), [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified legal hold on a recovery point. This action can only be performed
 * by a user with sufficient permissions.
 */export const cancelLegalHold = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/legal-holds/{LegalHoldId}", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.CancelLegalHold" }, CancelLegalHoldInput, CancelLegalHoldOutput, [InvalidParameterValueException, InvalidResourceStateException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a logical container to where backups may be copied.
 * 
 * 
 * This request includes a name, the Region, the maximum number of retention days, the
 * minimum number of retention days, and optionally can include tags and a creator request
 * ID.
 * 
 * 
 * 
 * 
 * Do not include sensitive data, such as passport numbers, in the name of a backup
 * vault.
 */export const createLogicallyAirGappedBackupVault = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/logically-air-gapped-backup-vaults/{BackupVaultName}", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.CreateLogicallyAirGappedBackupVault" }, CreateLogicallyAirGappedBackupVaultInput, CreateLogicallyAirGappedBackupVaultOutput, [AlreadyExistsException, InvalidParameterValueException, InvalidRequestException, LimitExceededException, MissingParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a restore access backup vault that provides temporary access to recovery points in a logically air-gapped backup vault, subject to MPA approval.
 */export const createRestoreAccessBackupVault = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-access-backup-vaults", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.CreateRestoreAccessBackupVault" }, CreateRestoreAccessBackupVaultInput, CreateRestoreAccessBackupVaultOutput, [AlreadyExistsException, InvalidParameterValueException, InvalidRequestException, LimitExceededException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a backup plan. A backup plan can only be deleted after all associated selections
 * of resources have been deleted. Deleting a backup plan deletes the current version of a
 * backup plan. Previous versions, if any, will still exist.
 */export const deleteBackupPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/plans/{BackupPlanId}", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DeleteBackupPlan" }, DeleteBackupPlanInput, DeleteBackupPlanOutput, [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the resource selection associated with a backup plan that is specified by the
 * `SelectionId`.
 */export const deleteBackupSelection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/plans/{BackupPlanId}/selections/{SelectionId}", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DeleteBackupSelection" }, DeleteBackupSelectionInput, S.Struct({}), [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the backup vault identified by its name. A vault can be deleted only if it is
 * empty.
 */export const deleteBackupVault = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DeleteBackupVault" }, DeleteBackupVaultInput, S.Struct({}), [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the policy document that manages permissions on a backup vault.
 */export const deleteBackupVaultAccessPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/access-policy", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DeleteBackupVaultAccessPolicy" }, DeleteBackupVaultAccessPolicyInput, S.Struct({}), [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes Backup Vault Lock from a backup vault specified by a backup vault
 * name.
 * 
 * 
 * If the Vault Lock configuration is immutable, then you cannot delete Vault Lock using
 * API operations, and you will receive an `InvalidRequestException` if you attempt
 * to do so. For more information, see Vault Lock in the
 * *Backup Developer Guide*.
 */export const deleteBackupVaultLockConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/vault-lock", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DeleteBackupVaultLockConfiguration" }, DeleteBackupVaultLockConfigurationInput, S.Struct({}), [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the framework specified by a framework name.
 */export const deleteFramework = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/frameworks/{FrameworkName}", method: "DELETE", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DeleteFramework" }, DeleteFrameworkInput, S.Struct({}), [ConflictException, InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the framework details for the specified `FrameworkName`.
 */export const describeFramework = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/frameworks/{FrameworkName}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DescribeFramework" }, DescribeFrameworkInput, DescribeFrameworkOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes whether the Amazon Web Services account is opted in to cross-account backup.
 * Returns an error if the account is not a member of an Organizations organization.
 * Example: `describe-global-settings --region us-west-2`
 */export const describeGlobalSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/global-settings", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DescribeGlobalSettings" }, DescribeGlobalSettingsInput, DescribeGlobalSettingsOutput, [InvalidRequestException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a saved resource, including the last time it was backed up,
 * its Amazon Resource Name (ARN), and the Amazon Web Services service type of the saved
 * resource.
 */export const describeProtectedResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/resources/{ResourceArn}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DescribeProtectedResource" }, DescribeProtectedResourceInput, DescribeProtectedResourceOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the current service opt-in settings for the Region. If service opt-in is enabled
 * for a service, Backup tries to protect that service's resources in this Region,
 * when the resource is included in an on-demand backup or scheduled backup plan. Otherwise,
 * Backup does not try to protect that service's resources in this
 * Region.
 */export const describeRegionSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/account-settings", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DescribeRegionSettings" }, DescribeRegionSettingsInput, DescribeRegionSettingsOutput, [ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the backup plan that is specified by the plan ID as a backup template.
 */export const exportBackupPlanTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/plans/{BackupPlanId}/toTemplate", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ExportBackupPlanTemplate" }, ExportBackupPlanTemplateInput, ExportBackupPlanTemplateOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a valid JSON document specifying a backup plan or an error.
 */export const getBackupPlanFromJSON = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/template/json/toPlan", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetBackupPlanFromJSON" }, GetBackupPlanFromJSONInput, GetBackupPlanFromJSONOutput, [InvalidParameterValueException, InvalidRequestException, LimitExceededException, MissingParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the template specified by its `templateId` as a backup plan.
 */export const getBackupPlanFromTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/template/plans/{BackupPlanTemplateId}/toPlan", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetBackupPlanFromTemplate" }, GetBackupPlanFromTemplateInput, GetBackupPlanFromTemplateOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns selection metadata and a document in JSON format that specifies a list of
 * resources that are associated with a backup plan.
 */export const getBackupSelection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/plans/{BackupPlanId}/selections/{SelectionId}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetBackupSelection" }, GetBackupSelectionInput, GetBackupSelectionOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the access policy document that is associated with the named backup
 * vault.
 */export const getBackupVaultAccessPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/access-policy", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetBackupVaultAccessPolicy" }, GetBackupVaultAccessPolicyInput, GetBackupVaultAccessPolicyOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns event notifications for the specified backup vault.
 */export const getBackupVaultNotifications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/notification-configuration", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetBackupVaultNotifications" }, GetBackupVaultNotificationsInput, GetBackupVaultNotificationsOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This action returns details for a specified legal hold. The details are the
 * body of a legal hold in JSON format, in addition to metadata.
 */export const getLegalHold = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/legal-holds/{LegalHoldId}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetLegalHold" }, GetLegalHoldInput, GetLegalHoldOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation returns the metadata and details specific to
 * the backup index associated with the specified recovery point.
 */export const getRecoveryPointIndexDetails = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/index", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetRecoveryPointIndexDetails" }, GetRecoveryPointIndexDetailsInput, GetRecoveryPointIndexDetailsOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a set of metadata key-value pairs that were used to create the backup.
 */export const getRecoveryPointRestoreMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/restore-metadata", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetRecoveryPointRestoreMetadata" }, GetRecoveryPointRestoreMetadataInput, GetRecoveryPointRestoreMetadataOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This request returns the metadata for the specified restore job.
 */export const getRestoreJobMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-jobs/{RestoreJobId}/metadata", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetRestoreJobMetadata" }, GetRestoreJobMetadataInput, GetRestoreJobMetadataOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This request returns the minimal required set of metadata needed to
 * start a restore job with secure default settings. `BackupVaultName`
 * and `RecoveryPointArn` are required parameters.
 * `BackupVaultAccountId` is an optional parameter.
 */export const getRestoreTestingInferredMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-testing/inferred-metadata", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetRestoreTestingInferredMetadata" }, GetRestoreTestingInferredMetadataInput, GetRestoreTestingInferredMetadataOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns version metadata of your backup plans, including Amazon Resource Names (ARNs),
 * backup plan IDs, creation and deletion dates, plan names, and version IDs.
 */export const listBackupPlanVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/plans/{BackupPlanId}/versions", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListBackupPlanVersions" }, ListBackupPlanVersionsInput, ListBackupPlanVersionsOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns metadata about your copy jobs.
 */export const listCopyJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/copy-jobs", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListCopyJobs" }, ListCopyJobsInput, ListCopyJobsOutput, [InvalidParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This request lists the protected resources corresponding to each backup vault.
 */export const listProtectedResourcesByBackupVault = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/resources", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListProtectedResourcesByBackupVault" }, ListProtectedResourcesByBackupVaultInput, ListProtectedResourcesByBackupVaultOutput, [InvalidParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns details about your report jobs.
 */export const listReportJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/report-jobs", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListReportJobs" }, ListReportJobsInput, ListReportJobsOutput, [InvalidParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of your report plans. For detailed information about a single report
 * plan, use `DescribeReportPlan`.
 */export const listReportPlans = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/report-plans", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListReportPlans" }, ListReportPlansInput, ListReportPlansOutput, [InvalidParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This returns restore jobs that contain the specified protected resource.
 * 
 * 
 * You must include `ResourceArn`. You can optionally include
 * `NextToken`, `ByStatus`, `MaxResults`,
 * `ByRecoveryPointCreationDateAfter` , and
 * `ByRecoveryPointCreationDateBefore`.
 */export const listRestoreJobsByProtectedResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/resources/{ResourceArn}/restore-jobs", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListRestoreJobsByProtectedResource" }, ListRestoreJobsByProtectedResourceInput, ListRestoreJobsByProtectedResourceOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the tags assigned to the resource, such as a target recovery point, backup plan,
 * or backup vault.
 * 
 * 
 * This operation returns results depending on the resource type used in the value for
 * `resourceArn`. For example, recovery points of Amazon DynamoDB with
 * Advanced Settings have an ARN (Amazon Resource Name) that begins with
 * `arn:aws:backup`. Recovery points (backups) of DynamoDB without
 * Advanced Settings enabled have an ARN that begins with
 * `arn:aws:dynamodb`.
 * 
 * 
 * When this operation is called and when you include values of `resourceArn`
 * that have an ARN other than `arn:aws:backup`, it may return one of the
 * exceptions listed below. To prevent this exception, include only values representing
 * resource types that are fully managed by Backup. These have an ARN that begins
 * `arn:aws:backup` and they are noted in the Feature availability by resource table.
 */export const listTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListTags" }, ListTagsInput, ListTagsOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a job to create a one-time copy of the specified resource.
 * 
 * 
 * Does not support continuous backups.
 * 
 * 
 * See Copy
 * job retry for information on how Backup retries copy job
 * operations.
 */export const startCopyJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/copy-jobs", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.StartCopyJob" }, StartCopyJobInput, StartCopyJobOutput, [InvalidParameterValueException, InvalidRequestException, LimitExceededException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts an on-demand report job for the specified report plan.
 */export const startReportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/report-jobs/{ReportPlanName}", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.StartReportJob" }, StartReportJobInput, StartReportJobOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts scanning jobs for specific resources.
 */export const startScanJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/scan/job", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.StartScanJob" }, StartScanJobInput, StartScanJobOutput, [InvalidParameterValueException, InvalidRequestException, LimitExceededException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns a set of key-value pairs to a resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/tags/{ResourceArn}", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.TagResource" }, TagResourceInput, S.Struct({}), [InvalidParameterValueException, LimitExceededException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified backup plan. The new version is uniquely identified by its ID.
 */export const updateBackupPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/plans/{BackupPlanId}", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.UpdateBackupPlan" }, UpdateBackupPlanInput, UpdateBackupPlanOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified framework.
 */export const updateFramework = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/frameworks/{FrameworkName}", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.UpdateFramework" }, UpdateFrameworkInput, UpdateFrameworkOutput, [AlreadyExistsException, ConflictException, InvalidParameterValueException, LimitExceededException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation updates the settings of a recovery point index.
 * 
 * 
 * Required: BackupVaultName, RecoveryPointArn, and IAMRoleArn
 */export const updateRecoveryPointIndexSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/index", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.UpdateRecoveryPointIndexSettings" }, UpdateRecoveryPointIndexSettingsInput, UpdateRecoveryPointIndexSettingsOutput, [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the transition lifecycle of a recovery point.
 * 
 * 
 * The lifecycle defines when a protected resource is transitioned to cold storage and when
 * it expires. Backup transitions and expires backups automatically according to
 * the lifecycle that you define.
 * 
 * 
 * Resource types that can transition to cold storage are listed in the Feature availability by resource table. Backup ignores this expression for
 * other resource types.
 * 
 * 
 * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
 * days. Therefore, the “retention” setting must be 90 days greater than the “transition to
 * cold after days” setting. The “transition to cold after days” setting cannot be changed
 * after a backup has been transitioned to cold.
 * 
 * 
 * 
 * 
 * If your lifecycle currently uses the parameters `DeleteAfterDays` and
 * `MoveToColdStorageAfterDays`, include these parameters and their values when you call
 * this operation. Not including them may result in your plan updating with null values.
 * 
 * 
 * 
 * 
 * This operation does not support continuous backups.
 */export const updateRecoveryPointLifecycle = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.UpdateRecoveryPointLifecycle" }, UpdateRecoveryPointLifecycleInput, UpdateRecoveryPointLifecycleOutput, [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified report plan.
 */export const updateReportPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/report-plans/{ReportPlanName}", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.UpdateReportPlan" }, UpdateReportPlanInput, UpdateReportPlanOutput, [ConflictException, InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a logical container where backups are stored. A `CreateBackupVault`
 * request includes a name, optionally one or more resource tags, an encryption key, and a
 * request ID.
 * 
 * 
 * 
 * 
 * Do not include sensitive data, such as passport numbers, in the name of a backup
 * vault.
 */export const createBackupVault = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.CreateBackupVault" }, CreateBackupVaultInput, CreateBackupVaultOutput, [AlreadyExistsException, InvalidParameterValueException, LimitExceededException, MissingParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a report plan. A report plan is a document that contains information about the
 * contents of the report and where Backup will deliver it.
 * 
 * 
 * If you call `CreateReportPlan` with a plan that already exists, you receive
 * an `AlreadyExistsException` exception.
 */export const createReportPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/report-plans", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.CreateReportPlan" }, CreateReportPlanInput, CreateReportPlanOutput, [AlreadyExistsException, InvalidParameterValueException, LimitExceededException, MissingParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns metadata about a backup vault specified by its name.
 */export const describeBackupVault = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DescribeBackupVault" }, DescribeBackupVaultInput, DescribeBackupVaultOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns metadata associated with a recovery point, including ID, status, encryption, and
 * lifecycle.
 */export const describeRecoveryPoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DescribeRecoveryPoint" }, DescribeRecoveryPointInput, DescribeRecoveryPointOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all report plans for an Amazon Web Services account and Amazon Web Services Region.
 */export const describeReportPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/report-plans/{ReportPlanName}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DescribeReportPlan" }, DescribeReportPlanInput, DescribeReportPlanOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns metadata associated with a restore job that is specified by a job ID.
 */export const describeRestoreJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-jobs/{RestoreJobId}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DescribeRestoreJob" }, DescribeRestoreJobInput, DescribeRestoreJobOutput, [DependencyFailureException, InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns scan job details for the specified ScanJobID.
 */export const describeScanJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/scan/jobs/{ScanJobId}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DescribeScanJob" }, DescribeScanJobInput, DescribeScanJobOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns `RestoreTestingPlan` details for the specified
 * `RestoreTestingPlanName`. The details are the body of a restore testing plan
 * in JSON format, in addition to plan metadata.
 */export const getRestoreTestingPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-testing/plans/{RestoreTestingPlanName}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetRestoreTestingPlan" }, GetRestoreTestingPlanInput, GetRestoreTestingPlanOutput, [ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns RestoreTestingSelection, which displays resources
 * and elements of the restore testing plan.
 */export const getRestoreTestingSelection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetRestoreTestingSelection" }, GetRestoreTestingSelectionInput, GetRestoreTestingSelectionOutput, [ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns `TieringConfiguration` details for the specified
 * `TieringConfigurationName`. The details are the body of a tiering configuration
 * in JSON format, in addition to configuration metadata.
 */export const getTieringConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/tiering-configurations/{TieringConfigurationName}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetTieringConfiguration" }, GetTieringConfigurationInput, GetTieringConfigurationOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of existing backup jobs for an authenticated account for the last 30
 * days. For a longer period of time, consider using these monitoring tools.
 */export const listBackupJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-jobs", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListBackupJobs" }, ListBackupJobsInput, ListBackupJobsOutput, [InvalidParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This is a request for a summary of backup jobs created
 * or running within the most recent 30 days. You can
 * include parameters AccountID, State, ResourceType, MessageCategory,
 * AggregationPeriod, MaxResults, or NextToken to filter
 * results.
 * 
 * 
 * This request returns a summary that contains
 * Region, Account, State, ResourceType, MessageCategory,
 * StartTime, EndTime, and Count of included jobs.
 */export const listBackupJobSummaries = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/backup-job-summaries", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListBackupJobSummaries" }, ListBackupJobSummariesInput, ListBackupJobSummariesOutput, [InvalidParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the active backup plans for the account.
 */export const listBackupPlans = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/plans", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListBackupPlans" }, ListBackupPlansInput, ListBackupPlansOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the backup plan templates.
 */export const listBackupPlanTemplates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/template/plans", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListBackupPlanTemplates" }, ListBackupPlanTemplatesInput, ListBackupPlanTemplatesOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array containing metadata of the resources associated with the target backup
 * plan.
 */export const listBackupSelections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/plans/{BackupPlanId}/selections", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListBackupSelections" }, ListBackupSelectionsInput, ListBackupSelectionsOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of recovery point storage containers along with information about
 * them.
 */export const listBackupVaults = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListBackupVaults" }, ListBackupVaultsInput, ListBackupVaultsOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This request obtains a list of copy jobs created
 * or running within the the most recent 30 days. You can
 * include parameters AccountID, State, ResourceType, MessageCategory,
 * AggregationPeriod, MaxResults, or NextToken to filter
 * results.
 * 
 * 
 * This request returns a summary that contains
 * Region, Account, State, RestourceType, MessageCategory,
 * StartTime, EndTime, and Count of included jobs.
 */export const listCopyJobSummaries = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/copy-job-summaries", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListCopyJobSummaries" }, ListCopyJobSummariesInput, ListCopyJobSummariesOutput, [InvalidParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all frameworks for an Amazon Web Services account and Amazon Web Services Region.
 */export const listFrameworks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/frameworks", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListFrameworks" }, ListFrameworksInput, ListFrameworksOutput, [InvalidParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation returns a list of recovery points that have an
 * associated index, belonging to the specified account.
 * 
 * 
 * Optional parameters you can include are: MaxResults;
 * NextToken; SourceResourceArns; CreatedBefore; CreatedAfter;
 * and ResourceType.
 */export const listIndexedRecoveryPoints = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/indexes/recovery-point", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListIndexedRecoveryPoints" }, ListIndexedRecoveryPointsInput, ListIndexedRecoveryPointsOutput, [InvalidParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This action returns metadata about active and previous legal holds.
 */export const listLegalHolds = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/legal-holds", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListLegalHolds" }, ListLegalHoldsInput, ListLegalHoldsOutput, [InvalidParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array of resources successfully backed up by Backup, including
 * the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a
 * resource type.
 */export const listProtectedResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/resources", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListProtectedResources" }, ListProtectedResourcesInput, ListProtectedResourcesOutput, [InvalidParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This action returns recovery point ARNs (Amazon Resource Names) of the
 * specified legal hold.
 */export const listRecoveryPointsByLegalHold = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/legal-holds/{LegalHoldId}/recovery-points", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListRecoveryPointsByLegalHold" }, ListRecoveryPointsByLegalHoldInput, ListRecoveryPointsByLegalHoldOutput, [InvalidParameterValueException, MissingParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The information about the recovery points of the type specified by a
 * resource Amazon Resource Name (ARN).
 * 
 * 
 * 
 * 
 * For Amazon EFS and Amazon EC2, this action only lists recovery points
 * created by Backup.
 */export const listRecoveryPointsByResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/resources/{ResourceArn}/recovery-points", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListRecoveryPointsByResource" }, ListRecoveryPointsByResourceInput, ListRecoveryPointsByResourceOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of jobs that Backup initiated to restore a saved resource,
 * including details about the recovery process.
 */export const listRestoreJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-jobs", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListRestoreJobs" }, ListRestoreJobsInput, ListRestoreJobsOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This request obtains a summary of restore jobs created
 * or running within the the most recent 30 days. You can
 * include parameters AccountID, State, ResourceType,
 * AggregationPeriod, MaxResults, or NextToken to filter
 * results.
 * 
 * 
 * This request returns a summary that contains
 * Region, Account, State, RestourceType, MessageCategory,
 * StartTime, EndTime, and Count of included jobs.
 */export const listRestoreJobSummaries = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/restore-job-summaries", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListRestoreJobSummaries" }, ListRestoreJobSummariesInput, ListRestoreJobSummariesOutput, [InvalidParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of restore testing plans.
 */export const listRestoreTestingPlans = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-testing/plans", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListRestoreTestingPlans" }, ListRestoreTestingPlansInput, ListRestoreTestingPlansOutput, [InvalidParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of restore testing selections. Can be filtered
 * by `MaxResults` and `RestoreTestingPlanName`.
 */export const listRestoreTestingSelections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-testing/plans/{RestoreTestingPlanName}/selections", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListRestoreTestingSelections" }, ListRestoreTestingSelectionsInput, ListRestoreTestingSelectionsOutput, [InvalidParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of existing scan jobs for an authenticated account for the last 30 days.
 */export const listScanJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/scan/jobs", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListScanJobs" }, ListScanJobsInput, ListScanJobsOutput, [InvalidParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This is a request for a summary of scan jobs created or running within the most recent 30 days.
 */export const listScanJobSummaries = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/scan-job-summaries", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListScanJobSummaries" }, ListScanJobSummariesInput, ListScanJobSummariesOutput, [InvalidParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of tiering configurations.
 */export const listTieringConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/tiering-configurations", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListTieringConfigurations" }, ListTieringConfigurationsInput, ListTieringConfigurationsOutput, [InvalidParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts an on-demand backup job for the specified resource.
 */export const startBackupJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-jobs", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.StartBackupJob" }, StartBackupJobInput, StartBackupJobOutput, [InvalidParameterValueException, InvalidRequestException, LimitExceededException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Recovers the saved resource identified by an Amazon Resource Name (ARN).
 */export const startRestoreJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-jobs", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.StartRestoreJob" }, StartRestoreJobInput, StartRestoreJobOutput, [InvalidParameterValueException, InvalidRequestException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This request will send changes to your specified restore testing
 * plan. `RestoreTestingPlanName`
 * cannot be updated after it is created.
 * 
 * 
 * 
 * `RecoveryPointSelection` can contain:
 * 
 * 
 * 
 * - `Algorithm`
 * 
 * 
 * 
 * 
 * - `ExcludeVaults`
 * 
 * 
 * 
 * 
 * - `IncludeVaults`
 * 
 * 
 * 
 * 
 * - `RecoveryPointTypes`
 * 
 * 
 * 
 * 
 * - `SelectionWindowDays`
 */export const updateRestoreTestingPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-testing/plans/{RestoreTestingPlanName}", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.UpdateRestoreTestingPlan" }, UpdateRestoreTestingPlanInput, UpdateRestoreTestingPlanOutput, [ConflictException, InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified restore testing selection.
 * 
 * 
 * Most elements except the `RestoreTestingSelectionName`
 * can be updated with this request.
 * 
 * 
 * You can use either protected resource ARNs or conditions, but not both.
 */export const updateRestoreTestingSelection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.UpdateRestoreTestingSelection" }, UpdateRestoreTestingSelectionInput, UpdateRestoreTestingSelectionOutput, [ConflictException, InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This request will send changes to your specified tiering
 * configuration. `TieringConfigurationName`
 * cannot be updated after it is created.
 * 
 * 
 * 
 * `ResourceSelection` can contain:
 * 
 * 
 * 
 * - `Resources`
 * 
 * 
 * 
 * 
 * - `TieringDownSettingsInDays`
 * 
 * 
 * 
 * 
 * - `ResourceType`
 */export const updateTieringConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/tiering-configurations/{TieringConfigurationName}", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.UpdateTieringConfiguration" }, UpdateTieringConfigurationInput, UpdateTieringConfigurationOutput, [AlreadyExistsException, ConflictException, InvalidParameterValueException, LimitExceededException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a framework with one or more controls. A framework is a collection of controls
 * that you can use to evaluate your backup practices. By using pre-built customizable
 * controls to define your policies, you can evaluate whether your backup practices comply
 * with your policies and which resources are not yet in compliance.
 */export const createFramework = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/frameworks", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.CreateFramework" }, CreateFrameworkInput, CreateFrameworkOutput, [AlreadyExistsException, InvalidParameterValueException, LimitExceededException, MissingParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a legal hold on a recovery point (backup). A legal hold is a restraint on
 * altering or deleting a backup until an authorized user cancels the legal hold. Any actions
 * to delete or disassociate a recovery point will fail with an error if one or more active
 * legal holds are on the recovery point.
 */export const createLegalHold = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/legal-holds", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.CreateLegalHold" }, CreateLegalHoldInput, CreateLegalHoldOutput, [InvalidParameterValueException, LimitExceededException, MissingParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a restore testing plan.
 * 
 * 
 * The first of two steps to create a restore testing
 * plan. After this request is successful, finish the procedure using
 * CreateRestoreTestingSelection.
 */export const createRestoreTestingPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-testing/plans", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.CreateRestoreTestingPlan" }, CreateRestoreTestingPlanInput, CreateRestoreTestingPlanOutput, [AlreadyExistsException, ConflictException, InvalidParameterValueException, LimitExceededException, MissingParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a tiering configuration.
 * 
 * 
 * A tiering configuration enables automatic movement of backup data to a lower-cost storage tier based on the age of backed-up objects in the backup vault.
 * 
 * 
 * Each vault can only have one vault-specific tiering configuration, in addition to any global configuration that applies to all vaults.
 */export const createTieringConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/tiering-configurations", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.CreateTieringConfiguration" }, CreateTieringConfigurationInput, CreateTieringConfigurationOutput, [AlreadyExistsException, ConflictException, InvalidParameterValueException, LimitExceededException, MissingParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns backup job details for the specified `BackupJobId`.
 */export const describeBackupJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-jobs/{BackupJobId}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DescribeBackupJob" }, DescribeBackupJobInput, DescribeBackupJobOutput, [DependencyFailureException, InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns metadata associated with creating a copy of a resource.
 */export const describeCopyJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/copy-jobs/{CopyJobId}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DescribeCopyJob" }, DescribeCopyJobInput, DescribeCopyJobOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the details associated with creating a report as specified by its
 * `ReportJobId`.
 */export const describeReportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/audit/report-jobs/{ReportJobId}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.DescribeReportJob" }, DescribeReportJobInput, DescribeReportJobOutput, [MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns `BackupPlan` details for the specified `BackupPlanId`. The
 * details are the body of a backup plan in JSON format, in addition to plan metadata.
 */export const getBackupPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/plans/{BackupPlanId}", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.GetBackupPlan" }, GetBackupPlanInput, GetBackupPlanOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns detailed information about the recovery points stored in a backup vault.
 */export const listRecoveryPointsByBackupVault = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup-vaults/{BackupVaultName}/recovery-points", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListRecoveryPointsByBackupVault" }, ListRecoveryPointsByBackupVaultInput, ListRecoveryPointsByBackupVaultOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of restore access backup vaults associated with a specified backup vault.
 */export const listRestoreAccessBackupVaults = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/logically-air-gapped-backup-vaults/{BackupVaultName}/restore-access-backup-vaults", method: "GET", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.ListRestoreAccessBackupVaults" }, ListRestoreAccessBackupVaultsInput, ListRestoreAccessBackupVaultsOutput, [InvalidParameterValueException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a backup plan using a backup plan name and backup rules. A backup plan is a
 * document that contains information that Backup uses to schedule tasks that
 * create recovery points for resources.
 * 
 * 
 * If you call `CreateBackupPlan` with a plan that already exists, you receive
 * an `AlreadyExistsException` exception.
 */export const createBackupPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/plans", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.CreateBackupPlan" }, CreateBackupPlanInput, CreateBackupPlanOutput, [AlreadyExistsException, InvalidParameterValueException, LimitExceededException, MissingParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a JSON document that specifies a set of resources to assign to a backup plan.
 * For examples, see Assigning resources programmatically.
 */export const createBackupSelection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/backup/plans/{BackupPlanId}/selections", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.CreateBackupSelection" }, CreateBackupSelectionInput, CreateBackupSelectionOutput, [AlreadyExistsException, InvalidParameterValueException, LimitExceededException, MissingParameterValueException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This request can be sent after CreateRestoreTestingPlan request
 * returns successfully. This is the second part of creating a resource testing
 * plan, and it must be completed sequentially.
 * 
 * 
 * This consists of `RestoreTestingSelectionName`,
 * `ProtectedResourceType`, and one of the following:
 * 
 * 
 * 
 * - `ProtectedResourceArns`
 * 
 * 
 * 
 * 
 * - `ProtectedResourceConditions`
 * 
 * 
 * 
 * 
 * 
 * 
 * Each protected resource type can have one single value.
 * 
 * 
 * A restore testing selection can include a wildcard value ("*") for
 * `ProtectedResourceArns` along with `ProtectedResourceConditions`.
 * Alternatively, you can include up to 30 specific protected resource ARNs in
 * `ProtectedResourceArns`.
 * 
 * 
 * Cannot select by both protected resource types AND specific ARNs.
 * Request will fail if both are included.
 */export const createRestoreTestingSelection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-15", uri: "/restore-testing/plans/{RestoreTestingPlanName}/selections", method: "PUT", sdkId: "Backup", sigV4ServiceName: "backup", name: "CryoControllerUserManager.CreateRestoreTestingSelection" }, CreateRestoreTestingSelectionInput, CreateRestoreTestingSelectionOutput, [AlreadyExistsException, InvalidParameterValueException, LimitExceededException, MissingParameterValueException, ResourceNotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

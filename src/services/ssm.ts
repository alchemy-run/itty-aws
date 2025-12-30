import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const InstanceIdList = S.Array(S.String);
export const CalendarNameOrARNList = S.Array(S.String);
export const PatchIdList = S.Array(S.String);
export const ParameterNameList = S.Array(S.String);
export const ParameterLabelList = S.Array(S.String);
export const ComplianceResourceIdList = S.Array(S.String);
export const ComplianceResourceTypeList = S.Array(S.String);
export const AccountIdList = S.Array(S.String);
export const KeyList = S.Array(S.String);
export const AssociationIdList = S.Array(S.String);
export const OpsItemOpsDataKeysList = S.Array(S.String);
export const MetadataKeysToDeleteList = S.Array(S.String);
export class AssociateOpsItemRelatedItemRequest extends S.Class<AssociateOpsItemRelatedItemRequest>("AssociateOpsItemRelatedItemRequest")({OpsItemId: S.String, AssociationType: S.String, ResourceType: S.String, ResourceUri: S.String}) {}
export class CancelCommandRequest extends S.Class<CancelCommandRequest>("CancelCommandRequest")({CommandId: S.String, InstanceIds: S.optional(InstanceIdList)}) {}
export class CancelCommandResult extends S.Class<CancelCommandResult>("CancelCommandResult")({}) {}
export class CancelMaintenanceWindowExecutionRequest extends S.Class<CancelMaintenanceWindowExecutionRequest>("CancelMaintenanceWindowExecutionRequest")({WindowExecutionId: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class CreateMaintenanceWindowRequest extends S.Class<CreateMaintenanceWindowRequest>("CreateMaintenanceWindowRequest")({Name: S.String, Description: S.optional(S.String), StartDate: S.optional(S.String), EndDate: S.optional(S.String), Schedule: S.String, ScheduleTimezone: S.optional(S.String), ScheduleOffset: S.optional(S.Number), Duration: S.Number, Cutoff: S.Number, AllowUnassociatedTargets: S.Boolean, ClientToken: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class DeleteActivationRequest extends S.Class<DeleteActivationRequest>("DeleteActivationRequest")({ActivationId: S.String}) {}
export class DeleteActivationResult extends S.Class<DeleteActivationResult>("DeleteActivationResult")({}) {}
export class DeleteAssociationRequest extends S.Class<DeleteAssociationRequest>("DeleteAssociationRequest")({Name: S.optional(S.String), InstanceId: S.optional(S.String), AssociationId: S.optional(S.String)}) {}
export class DeleteAssociationResult extends S.Class<DeleteAssociationResult>("DeleteAssociationResult")({}) {}
export class DeleteDocumentRequest extends S.Class<DeleteDocumentRequest>("DeleteDocumentRequest")({Name: S.String, DocumentVersion: S.optional(S.String), VersionName: S.optional(S.String), Force: S.optional(S.Boolean)}) {}
export class DeleteDocumentResult extends S.Class<DeleteDocumentResult>("DeleteDocumentResult")({}) {}
export class DeleteInventoryRequest extends S.Class<DeleteInventoryRequest>("DeleteInventoryRequest")({TypeName: S.String, SchemaDeleteOption: S.optional(S.String), DryRun: S.optional(S.Boolean), ClientToken: S.optional(S.String)}) {}
export class DeleteMaintenanceWindowRequest extends S.Class<DeleteMaintenanceWindowRequest>("DeleteMaintenanceWindowRequest")({WindowId: S.String}) {}
export class DeleteOpsItemRequest extends S.Class<DeleteOpsItemRequest>("DeleteOpsItemRequest")({OpsItemId: S.String}) {}
export class DeleteOpsItemResponse extends S.Class<DeleteOpsItemResponse>("DeleteOpsItemResponse")({}) {}
export class DeleteOpsMetadataRequest extends S.Class<DeleteOpsMetadataRequest>("DeleteOpsMetadataRequest")({OpsMetadataArn: S.String}) {}
export class DeleteOpsMetadataResult extends S.Class<DeleteOpsMetadataResult>("DeleteOpsMetadataResult")({}) {}
export class DeleteParameterRequest extends S.Class<DeleteParameterRequest>("DeleteParameterRequest")({Name: S.String}) {}
export class DeleteParameterResult extends S.Class<DeleteParameterResult>("DeleteParameterResult")({}) {}
export class DeleteParametersRequest extends S.Class<DeleteParametersRequest>("DeleteParametersRequest")({Names: ParameterNameList}) {}
export class DeletePatchBaselineRequest extends S.Class<DeletePatchBaselineRequest>("DeletePatchBaselineRequest")({BaselineId: S.String}) {}
export class DeleteResourceDataSyncRequest extends S.Class<DeleteResourceDataSyncRequest>("DeleteResourceDataSyncRequest")({SyncName: S.String, SyncType: S.optional(S.String)}) {}
export class DeleteResourceDataSyncResult extends S.Class<DeleteResourceDataSyncResult>("DeleteResourceDataSyncResult")({}) {}
export class DeleteResourcePolicyRequest extends S.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({ResourceArn: S.String, PolicyId: S.String, PolicyHash: S.String}) {}
export class DeleteResourcePolicyResponse extends S.Class<DeleteResourcePolicyResponse>("DeleteResourcePolicyResponse")({}) {}
export class DeregisterManagedInstanceRequest extends S.Class<DeregisterManagedInstanceRequest>("DeregisterManagedInstanceRequest")({InstanceId: S.String}) {}
export class DeregisterManagedInstanceResult extends S.Class<DeregisterManagedInstanceResult>("DeregisterManagedInstanceResult")({}) {}
export class DeregisterPatchBaselineForPatchGroupRequest extends S.Class<DeregisterPatchBaselineForPatchGroupRequest>("DeregisterPatchBaselineForPatchGroupRequest")({BaselineId: S.String, PatchGroup: S.String}) {}
export class DeregisterTargetFromMaintenanceWindowRequest extends S.Class<DeregisterTargetFromMaintenanceWindowRequest>("DeregisterTargetFromMaintenanceWindowRequest")({WindowId: S.String, WindowTargetId: S.String, Safe: S.optional(S.Boolean)}) {}
export class DeregisterTaskFromMaintenanceWindowRequest extends S.Class<DeregisterTaskFromMaintenanceWindowRequest>("DeregisterTaskFromMaintenanceWindowRequest")({WindowId: S.String, WindowTaskId: S.String}) {}
export class DescribeAssociationRequest extends S.Class<DescribeAssociationRequest>("DescribeAssociationRequest")({Name: S.optional(S.String), InstanceId: S.optional(S.String), AssociationId: S.optional(S.String), AssociationVersion: S.optional(S.String)}) {}
export class DescribeDocumentRequest extends S.Class<DescribeDocumentRequest>("DescribeDocumentRequest")({Name: S.String, DocumentVersion: S.optional(S.String), VersionName: S.optional(S.String)}) {}
export class DescribeDocumentPermissionRequest extends S.Class<DescribeDocumentPermissionRequest>("DescribeDocumentPermissionRequest")({Name: S.String, PermissionType: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeEffectiveInstanceAssociationsRequest extends S.Class<DescribeEffectiveInstanceAssociationsRequest>("DescribeEffectiveInstanceAssociationsRequest")({InstanceId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeEffectivePatchesForPatchBaselineRequest extends S.Class<DescribeEffectivePatchesForPatchBaselineRequest>("DescribeEffectivePatchesForPatchBaselineRequest")({BaselineId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeInstanceAssociationsStatusRequest extends S.Class<DescribeInstanceAssociationsStatusRequest>("DescribeInstanceAssociationsStatusRequest")({InstanceId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export const PatchOrchestratorFilterValues = S.Array(S.String);
export class PatchOrchestratorFilter extends S.Class<PatchOrchestratorFilter>("PatchOrchestratorFilter")({Key: S.optional(S.String), Values: S.optional(PatchOrchestratorFilterValues)}) {}
export const PatchOrchestratorFilterList = S.Array(PatchOrchestratorFilter);
export class DescribeInstancePatchesRequest extends S.Class<DescribeInstancePatchesRequest>("DescribeInstancePatchesRequest")({InstanceId: S.String, Filters: S.optional(PatchOrchestratorFilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeInstancePatchStatesRequest extends S.Class<DescribeInstancePatchStatesRequest>("DescribeInstancePatchStatesRequest")({InstanceIds: InstanceIdList, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeInventoryDeletionsRequest extends S.Class<DescribeInventoryDeletionsRequest>("DescribeInventoryDeletionsRequest")({DeletionId: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export const MaintenanceWindowFilterValues = S.Array(S.String);
export class MaintenanceWindowFilter extends S.Class<MaintenanceWindowFilter>("MaintenanceWindowFilter")({Key: S.optional(S.String), Values: S.optional(MaintenanceWindowFilterValues)}) {}
export const MaintenanceWindowFilterList = S.Array(MaintenanceWindowFilter);
export class DescribeMaintenanceWindowExecutionTaskInvocationsRequest extends S.Class<DescribeMaintenanceWindowExecutionTaskInvocationsRequest>("DescribeMaintenanceWindowExecutionTaskInvocationsRequest")({WindowExecutionId: S.String, TaskId: S.String, Filters: S.optional(MaintenanceWindowFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowExecutionTasksRequest extends S.Class<DescribeMaintenanceWindowExecutionTasksRequest>("DescribeMaintenanceWindowExecutionTasksRequest")({WindowExecutionId: S.String, Filters: S.optional(MaintenanceWindowFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowsRequest extends S.Class<DescribeMaintenanceWindowsRequest>("DescribeMaintenanceWindowsRequest")({Filters: S.optional(MaintenanceWindowFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export const TargetValues = S.Array(S.String);
export class Target extends S.Class<Target>("Target")({Key: S.optional(S.String), Values: S.optional(TargetValues)}) {}
export const Targets = S.Array(Target);
export class DescribeMaintenanceWindowScheduleRequest extends S.Class<DescribeMaintenanceWindowScheduleRequest>("DescribeMaintenanceWindowScheduleRequest")({WindowId: S.optional(S.String), Targets: S.optional(Targets), ResourceType: S.optional(S.String), Filters: S.optional(PatchOrchestratorFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowsForTargetRequest extends S.Class<DescribeMaintenanceWindowsForTargetRequest>("DescribeMaintenanceWindowsForTargetRequest")({Targets: Targets, ResourceType: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowTargetsRequest extends S.Class<DescribeMaintenanceWindowTargetsRequest>("DescribeMaintenanceWindowTargetsRequest")({WindowId: S.String, Filters: S.optional(MaintenanceWindowFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowTasksRequest extends S.Class<DescribeMaintenanceWindowTasksRequest>("DescribeMaintenanceWindowTasksRequest")({WindowId: S.String, Filters: S.optional(MaintenanceWindowFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribePatchBaselinesRequest extends S.Class<DescribePatchBaselinesRequest>("DescribePatchBaselinesRequest")({Filters: S.optional(PatchOrchestratorFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribePatchGroupsRequest extends S.Class<DescribePatchGroupsRequest>("DescribePatchGroupsRequest")({MaxResults: S.optional(S.Number), Filters: S.optional(PatchOrchestratorFilterList), NextToken: S.optional(S.String)}) {}
export class DescribePatchGroupStateRequest extends S.Class<DescribePatchGroupStateRequest>("DescribePatchGroupStateRequest")({PatchGroup: S.String}) {}
export class DescribePatchPropertiesRequest extends S.Class<DescribePatchPropertiesRequest>("DescribePatchPropertiesRequest")({OperatingSystem: S.String, Property: S.String, PatchSet: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DisassociateOpsItemRelatedItemRequest extends S.Class<DisassociateOpsItemRelatedItemRequest>("DisassociateOpsItemRelatedItemRequest")({OpsItemId: S.String, AssociationId: S.String}) {}
export class DisassociateOpsItemRelatedItemResponse extends S.Class<DisassociateOpsItemRelatedItemResponse>("DisassociateOpsItemRelatedItemResponse")({}) {}
export class GetAccessTokenRequest extends S.Class<GetAccessTokenRequest>("GetAccessTokenRequest")({AccessRequestId: S.String}) {}
export class GetAutomationExecutionRequest extends S.Class<GetAutomationExecutionRequest>("GetAutomationExecutionRequest")({AutomationExecutionId: S.String}) {}
export class GetCalendarStateRequest extends S.Class<GetCalendarStateRequest>("GetCalendarStateRequest")({CalendarNames: CalendarNameOrARNList, AtTime: S.optional(S.String)}) {}
export class GetCommandInvocationRequest extends S.Class<GetCommandInvocationRequest>("GetCommandInvocationRequest")({CommandId: S.String, InstanceId: S.String, PluginName: S.optional(S.String)}) {}
export class GetConnectionStatusRequest extends S.Class<GetConnectionStatusRequest>("GetConnectionStatusRequest")({Target: S.String}) {}
export class GetDefaultPatchBaselineRequest extends S.Class<GetDefaultPatchBaselineRequest>("GetDefaultPatchBaselineRequest")({OperatingSystem: S.optional(S.String)}) {}
export class GetDocumentRequest extends S.Class<GetDocumentRequest>("GetDocumentRequest")({Name: S.String, VersionName: S.optional(S.String), DocumentVersion: S.optional(S.String), DocumentFormat: S.optional(S.String)}) {}
export class GetExecutionPreviewRequest extends S.Class<GetExecutionPreviewRequest>("GetExecutionPreviewRequest")({ExecutionPreviewId: S.String}) {}
export class GetInventorySchemaRequest extends S.Class<GetInventorySchemaRequest>("GetInventorySchemaRequest")({TypeName: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Aggregator: S.optional(S.Boolean), SubType: S.optional(S.Boolean)}) {}
export class GetMaintenanceWindowRequest extends S.Class<GetMaintenanceWindowRequest>("GetMaintenanceWindowRequest")({WindowId: S.String}) {}
export class GetMaintenanceWindowExecutionRequest extends S.Class<GetMaintenanceWindowExecutionRequest>("GetMaintenanceWindowExecutionRequest")({WindowExecutionId: S.String}) {}
export class GetMaintenanceWindowExecutionTaskRequest extends S.Class<GetMaintenanceWindowExecutionTaskRequest>("GetMaintenanceWindowExecutionTaskRequest")({WindowExecutionId: S.String, TaskId: S.String}) {}
export class GetMaintenanceWindowExecutionTaskInvocationRequest extends S.Class<GetMaintenanceWindowExecutionTaskInvocationRequest>("GetMaintenanceWindowExecutionTaskInvocationRequest")({WindowExecutionId: S.String, TaskId: S.String, InvocationId: S.String}) {}
export class GetMaintenanceWindowTaskRequest extends S.Class<GetMaintenanceWindowTaskRequest>("GetMaintenanceWindowTaskRequest")({WindowId: S.String, WindowTaskId: S.String}) {}
export class GetOpsItemRequest extends S.Class<GetOpsItemRequest>("GetOpsItemRequest")({OpsItemId: S.String, OpsItemArn: S.optional(S.String)}) {}
export class GetOpsMetadataRequest extends S.Class<GetOpsMetadataRequest>("GetOpsMetadataRequest")({OpsMetadataArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetParameterRequest extends S.Class<GetParameterRequest>("GetParameterRequest")({Name: S.String, WithDecryption: S.optional(S.Boolean)}) {}
export class GetParameterHistoryRequest extends S.Class<GetParameterHistoryRequest>("GetParameterHistoryRequest")({Name: S.String, WithDecryption: S.optional(S.Boolean), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetParametersRequest extends S.Class<GetParametersRequest>("GetParametersRequest")({Names: ParameterNameList, WithDecryption: S.optional(S.Boolean)}) {}
export const ParameterStringFilterValueList = S.Array(S.String);
export class ParameterStringFilter extends S.Class<ParameterStringFilter>("ParameterStringFilter")({Key: S.String, Option: S.optional(S.String), Values: S.optional(ParameterStringFilterValueList)}) {}
export const ParameterStringFilterList = S.Array(ParameterStringFilter);
export class GetParametersByPathRequest extends S.Class<GetParametersByPathRequest>("GetParametersByPathRequest")({Path: S.String, Recursive: S.optional(S.Boolean), ParameterFilters: S.optional(ParameterStringFilterList), WithDecryption: S.optional(S.Boolean), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetPatchBaselineRequest extends S.Class<GetPatchBaselineRequest>("GetPatchBaselineRequest")({BaselineId: S.String}) {}
export class GetPatchBaselineForPatchGroupRequest extends S.Class<GetPatchBaselineForPatchGroupRequest>("GetPatchBaselineForPatchGroupRequest")({PatchGroup: S.String, OperatingSystem: S.optional(S.String)}) {}
export class GetResourcePoliciesRequest extends S.Class<GetResourcePoliciesRequest>("GetResourcePoliciesRequest")({ResourceArn: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class GetServiceSettingRequest extends S.Class<GetServiceSettingRequest>("GetServiceSettingRequest")({SettingId: S.String}) {}
export class LabelParameterVersionRequest extends S.Class<LabelParameterVersionRequest>("LabelParameterVersionRequest")({Name: S.String, ParameterVersion: S.optional(S.Number), Labels: ParameterLabelList}) {}
export class ListAssociationVersionsRequest extends S.Class<ListAssociationVersionsRequest>("ListAssociationVersionsRequest")({AssociationId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class CommandFilter extends S.Class<CommandFilter>("CommandFilter")({key: S.String, value: S.String}) {}
export const CommandFilterList = S.Array(CommandFilter);
export class ListCommandsRequest extends S.Class<ListCommandsRequest>("ListCommandsRequest")({CommandId: S.optional(S.String), InstanceId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Filters: S.optional(CommandFilterList)}) {}
export const ComplianceStringFilterValueList = S.Array(S.String);
export class ComplianceStringFilter extends S.Class<ComplianceStringFilter>("ComplianceStringFilter")({Key: S.optional(S.String), Values: S.optional(ComplianceStringFilterValueList), Type: S.optional(S.String)}) {}
export const ComplianceStringFilterList = S.Array(ComplianceStringFilter);
export class ListComplianceSummariesRequest extends S.Class<ListComplianceSummariesRequest>("ListComplianceSummariesRequest")({Filters: S.optional(ComplianceStringFilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListDocumentMetadataHistoryRequest extends S.Class<ListDocumentMetadataHistoryRequest>("ListDocumentMetadataHistoryRequest")({Name: S.String, DocumentVersion: S.optional(S.String), Metadata: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListDocumentVersionsRequest extends S.Class<ListDocumentVersionsRequest>("ListDocumentVersionsRequest")({Name: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export const InventoryFilterValueList = S.Array(S.String);
export class InventoryFilter extends S.Class<InventoryFilter>("InventoryFilter")({Key: S.String, Values: InventoryFilterValueList, Type: S.optional(S.String)}) {}
export const InventoryFilterList = S.Array(InventoryFilter);
export class ListInventoryEntriesRequest extends S.Class<ListInventoryEntriesRequest>("ListInventoryEntriesRequest")({InstanceId: S.String, TypeName: S.String, Filters: S.optional(InventoryFilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListResourceComplianceSummariesRequest extends S.Class<ListResourceComplianceSummariesRequest>("ListResourceComplianceSummariesRequest")({Filters: S.optional(ComplianceStringFilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListResourceDataSyncRequest extends S.Class<ListResourceDataSyncRequest>("ListResourceDataSyncRequest")({SyncType: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceType: S.String, ResourceId: S.String}) {}
export class ModifyDocumentPermissionRequest extends S.Class<ModifyDocumentPermissionRequest>("ModifyDocumentPermissionRequest")({Name: S.String, PermissionType: S.String, AccountIdsToAdd: S.optional(AccountIdList), AccountIdsToRemove: S.optional(AccountIdList), SharedDocumentVersion: S.optional(S.String)}) {}
export class ModifyDocumentPermissionResponse extends S.Class<ModifyDocumentPermissionResponse>("ModifyDocumentPermissionResponse")({}) {}
export class PutParameterRequest extends S.Class<PutParameterRequest>("PutParameterRequest")({Name: S.String, Description: S.optional(S.String), Value: S.String, Type: S.optional(S.String), KeyId: S.optional(S.String), Overwrite: S.optional(S.Boolean), AllowedPattern: S.optional(S.String), Tags: S.optional(TagList), Tier: S.optional(S.String), Policies: S.optional(S.String), DataType: S.optional(S.String)}) {}
export class PutResourcePolicyRequest extends S.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({ResourceArn: S.String, Policy: S.String, PolicyId: S.optional(S.String), PolicyHash: S.optional(S.String)}) {}
export class RegisterDefaultPatchBaselineRequest extends S.Class<RegisterDefaultPatchBaselineRequest>("RegisterDefaultPatchBaselineRequest")({BaselineId: S.String}) {}
export class RegisterPatchBaselineForPatchGroupRequest extends S.Class<RegisterPatchBaselineForPatchGroupRequest>("RegisterPatchBaselineForPatchGroupRequest")({BaselineId: S.String, PatchGroup: S.String}) {}
export class RegisterTargetWithMaintenanceWindowRequest extends S.Class<RegisterTargetWithMaintenanceWindowRequest>("RegisterTargetWithMaintenanceWindowRequest")({WindowId: S.String, ResourceType: S.String, Targets: Targets, OwnerInformation: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), ClientToken: S.optional(S.String)}) {}
export class RemoveTagsFromResourceRequest extends S.Class<RemoveTagsFromResourceRequest>("RemoveTagsFromResourceRequest")({ResourceType: S.String, ResourceId: S.String, TagKeys: KeyList}) {}
export class RemoveTagsFromResourceResult extends S.Class<RemoveTagsFromResourceResult>("RemoveTagsFromResourceResult")({}) {}
export class ResetServiceSettingRequest extends S.Class<ResetServiceSettingRequest>("ResetServiceSettingRequest")({SettingId: S.String}) {}
export class ResumeSessionRequest extends S.Class<ResumeSessionRequest>("ResumeSessionRequest")({SessionId: S.String}) {}
export class StartAccessRequestRequest extends S.Class<StartAccessRequestRequest>("StartAccessRequestRequest")({Reason: S.String, Targets: Targets, Tags: S.optional(TagList)}) {}
export class StartAssociationsOnceRequest extends S.Class<StartAssociationsOnceRequest>("StartAssociationsOnceRequest")({AssociationIds: AssociationIdList}) {}
export class StartAssociationsOnceResult extends S.Class<StartAssociationsOnceResult>("StartAssociationsOnceResult")({}) {}
export const AutomationParameterValueList = S.Array(S.String);
export const AutomationParameterMap = S.Record({key: S.String, value: AutomationParameterValueList});
export const TargetMapValueList = S.Array(S.String);
export const TargetMap = S.Record({key: S.String, value: TargetMapValueList});
export const TargetMaps = S.Array(TargetMap);
export const Accounts = S.Array(S.String);
export const Regions = S.Array(S.String);
export class Alarm extends S.Class<Alarm>("Alarm")({Name: S.String}) {}
export const AlarmList = S.Array(Alarm);
export class AlarmConfiguration extends S.Class<AlarmConfiguration>("AlarmConfiguration")({IgnorePollAlarmFailure: S.optional(S.Boolean), Alarms: AlarmList}) {}
export const ExcludeAccounts = S.Array(S.String);
export class TargetLocation extends S.Class<TargetLocation>("TargetLocation")({Accounts: S.optional(Accounts), Regions: S.optional(Regions), TargetLocationMaxConcurrency: S.optional(S.String), TargetLocationMaxErrors: S.optional(S.String), ExecutionRoleName: S.optional(S.String), TargetLocationAlarmConfiguration: S.optional(AlarmConfiguration), IncludeChildOrganizationUnits: S.optional(S.Boolean), ExcludeAccounts: S.optional(ExcludeAccounts), Targets: S.optional(Targets), TargetsMaxConcurrency: S.optional(S.String), TargetsMaxErrors: S.optional(S.String)}) {}
export const TargetLocations = S.Array(TargetLocation);
export class StartAutomationExecutionRequest extends S.Class<StartAutomationExecutionRequest>("StartAutomationExecutionRequest")({DocumentName: S.String, DocumentVersion: S.optional(S.String), Parameters: S.optional(AutomationParameterMap), ClientToken: S.optional(S.String), Mode: S.optional(S.String), TargetParameterName: S.optional(S.String), Targets: S.optional(Targets), TargetMaps: S.optional(TargetMaps), MaxConcurrency: S.optional(S.String), MaxErrors: S.optional(S.String), TargetLocations: S.optional(TargetLocations), Tags: S.optional(TagList), AlarmConfiguration: S.optional(AlarmConfiguration), TargetLocationsURL: S.optional(S.String)}) {}
export class StopAutomationExecutionRequest extends S.Class<StopAutomationExecutionRequest>("StopAutomationExecutionRequest")({AutomationExecutionId: S.String, Type: S.optional(S.String)}) {}
export class StopAutomationExecutionResult extends S.Class<StopAutomationExecutionResult>("StopAutomationExecutionResult")({}) {}
export class TerminateSessionRequest extends S.Class<TerminateSessionRequest>("TerminateSessionRequest")({SessionId: S.String}) {}
export class UnlabelParameterVersionRequest extends S.Class<UnlabelParameterVersionRequest>("UnlabelParameterVersionRequest")({Name: S.String, ParameterVersion: S.Number, Labels: ParameterLabelList}) {}
export const ParameterValueList = S.Array(S.String);
export const Parameters = S.Record({key: S.String, value: ParameterValueList});
export class S3OutputLocation extends S.Class<S3OutputLocation>("S3OutputLocation")({OutputS3Region: S.optional(S.String), OutputS3BucketName: S.optional(S.String), OutputS3KeyPrefix: S.optional(S.String)}) {}
export class InstanceAssociationOutputLocation extends S.Class<InstanceAssociationOutputLocation>("InstanceAssociationOutputLocation")({S3Location: S.optional(S3OutputLocation)}) {}
export class UpdateAssociationRequest extends S.Class<UpdateAssociationRequest>("UpdateAssociationRequest")({AssociationId: S.String, Parameters: S.optional(Parameters), DocumentVersion: S.optional(S.String), ScheduleExpression: S.optional(S.String), OutputLocation: S.optional(InstanceAssociationOutputLocation), Name: S.optional(S.String), Targets: S.optional(Targets), AssociationName: S.optional(S.String), AssociationVersion: S.optional(S.String), AutomationTargetParameterName: S.optional(S.String), MaxErrors: S.optional(S.String), MaxConcurrency: S.optional(S.String), ComplianceSeverity: S.optional(S.String), SyncCompliance: S.optional(S.String), ApplyOnlyAtCronInterval: S.optional(S.Boolean), CalendarNames: S.optional(CalendarNameOrARNList), TargetLocations: S.optional(TargetLocations), ScheduleOffset: S.optional(S.Number), Duration: S.optional(S.Number), TargetMaps: S.optional(TargetMaps), AlarmConfiguration: S.optional(AlarmConfiguration)}) {}
export const AttachmentsSourceValues = S.Array(S.String);
export class AttachmentsSource extends S.Class<AttachmentsSource>("AttachmentsSource")({Key: S.optional(S.String), Values: S.optional(AttachmentsSourceValues), Name: S.optional(S.String)}) {}
export const AttachmentsSourceList = S.Array(AttachmentsSource);
export class UpdateDocumentRequest extends S.Class<UpdateDocumentRequest>("UpdateDocumentRequest")({Content: S.String, Attachments: S.optional(AttachmentsSourceList), Name: S.String, DisplayName: S.optional(S.String), VersionName: S.optional(S.String), DocumentVersion: S.optional(S.String), DocumentFormat: S.optional(S.String), TargetType: S.optional(S.String)}) {}
export class UpdateDocumentDefaultVersionRequest extends S.Class<UpdateDocumentDefaultVersionRequest>("UpdateDocumentDefaultVersionRequest")({Name: S.String, DocumentVersion: S.String}) {}
export class UpdateMaintenanceWindowRequest extends S.Class<UpdateMaintenanceWindowRequest>("UpdateMaintenanceWindowRequest")({WindowId: S.String, Name: S.optional(S.String), Description: S.optional(S.String), StartDate: S.optional(S.String), EndDate: S.optional(S.String), Schedule: S.optional(S.String), ScheduleTimezone: S.optional(S.String), ScheduleOffset: S.optional(S.Number), Duration: S.optional(S.Number), Cutoff: S.optional(S.Number), AllowUnassociatedTargets: S.optional(S.Boolean), Enabled: S.optional(S.Boolean), Replace: S.optional(S.Boolean)}) {}
export class UpdateMaintenanceWindowTargetRequest extends S.Class<UpdateMaintenanceWindowTargetRequest>("UpdateMaintenanceWindowTargetRequest")({WindowId: S.String, WindowTargetId: S.String, Targets: S.optional(Targets), OwnerInformation: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), Replace: S.optional(S.Boolean)}) {}
export const MaintenanceWindowTaskParameterValueList = S.Array(S.String);
export class MaintenanceWindowTaskParameterValueExpression extends S.Class<MaintenanceWindowTaskParameterValueExpression>("MaintenanceWindowTaskParameterValueExpression")({Values: S.optional(MaintenanceWindowTaskParameterValueList)}) {}
export const MaintenanceWindowTaskParameters = S.Record({key: S.String, value: MaintenanceWindowTaskParameterValueExpression});
export class CloudWatchOutputConfig extends S.Class<CloudWatchOutputConfig>("CloudWatchOutputConfig")({CloudWatchLogGroupName: S.optional(S.String), CloudWatchOutputEnabled: S.optional(S.Boolean)}) {}
export const NotificationEventList = S.Array(S.String);
export class NotificationConfig extends S.Class<NotificationConfig>("NotificationConfig")({NotificationArn: S.optional(S.String), NotificationEvents: S.optional(NotificationEventList), NotificationType: S.optional(S.String)}) {}
export class MaintenanceWindowRunCommandParameters extends S.Class<MaintenanceWindowRunCommandParameters>("MaintenanceWindowRunCommandParameters")({Comment: S.optional(S.String), CloudWatchOutputConfig: S.optional(CloudWatchOutputConfig), DocumentHash: S.optional(S.String), DocumentHashType: S.optional(S.String), DocumentVersion: S.optional(S.String), NotificationConfig: S.optional(NotificationConfig), OutputS3BucketName: S.optional(S.String), OutputS3KeyPrefix: S.optional(S.String), Parameters: S.optional(Parameters), ServiceRoleArn: S.optional(S.String), TimeoutSeconds: S.optional(S.Number)}) {}
export class MaintenanceWindowAutomationParameters extends S.Class<MaintenanceWindowAutomationParameters>("MaintenanceWindowAutomationParameters")({DocumentVersion: S.optional(S.String), Parameters: S.optional(AutomationParameterMap)}) {}
export class MaintenanceWindowStepFunctionsParameters extends S.Class<MaintenanceWindowStepFunctionsParameters>("MaintenanceWindowStepFunctionsParameters")({Input: S.optional(S.String), Name: S.optional(S.String)}) {}
export class MaintenanceWindowLambdaParameters extends S.Class<MaintenanceWindowLambdaParameters>("MaintenanceWindowLambdaParameters")({ClientContext: S.optional(S.String), Qualifier: S.optional(S.String), Payload: S.optional(H.StreamBody())}) {}
export class MaintenanceWindowTaskInvocationParameters extends S.Class<MaintenanceWindowTaskInvocationParameters>("MaintenanceWindowTaskInvocationParameters")({RunCommand: S.optional(MaintenanceWindowRunCommandParameters), Automation: S.optional(MaintenanceWindowAutomationParameters), StepFunctions: S.optional(MaintenanceWindowStepFunctionsParameters), Lambda: S.optional(MaintenanceWindowLambdaParameters)}) {}
export class LoggingInfo extends S.Class<LoggingInfo>("LoggingInfo")({S3BucketName: S.String, S3KeyPrefix: S.optional(S.String), S3Region: S.String}) {}
export class UpdateMaintenanceWindowTaskRequest extends S.Class<UpdateMaintenanceWindowTaskRequest>("UpdateMaintenanceWindowTaskRequest")({WindowId: S.String, WindowTaskId: S.String, Targets: S.optional(Targets), TaskArn: S.optional(S.String), ServiceRoleArn: S.optional(S.String), TaskParameters: S.optional(MaintenanceWindowTaskParameters), TaskInvocationParameters: S.optional(MaintenanceWindowTaskInvocationParameters), Priority: S.optional(S.Number), MaxConcurrency: S.optional(S.String), MaxErrors: S.optional(S.String), LoggingInfo: S.optional(LoggingInfo), Name: S.optional(S.String), Description: S.optional(S.String), Replace: S.optional(S.Boolean), CutoffBehavior: S.optional(S.String), AlarmConfiguration: S.optional(AlarmConfiguration)}) {}
export class UpdateManagedInstanceRoleRequest extends S.Class<UpdateManagedInstanceRoleRequest>("UpdateManagedInstanceRoleRequest")({InstanceId: S.String, IamRole: S.String}) {}
export class UpdateManagedInstanceRoleResult extends S.Class<UpdateManagedInstanceRoleResult>("UpdateManagedInstanceRoleResult")({}) {}
export class OpsItemDataValue extends S.Class<OpsItemDataValue>("OpsItemDataValue")({Value: S.optional(S.String), Type: S.optional(S.String)}) {}
export const OpsItemOperationalData = S.Record({key: S.String, value: OpsItemDataValue});
export class OpsItemNotification extends S.Class<OpsItemNotification>("OpsItemNotification")({Arn: S.optional(S.String)}) {}
export const OpsItemNotifications = S.Array(OpsItemNotification);
export class RelatedOpsItem extends S.Class<RelatedOpsItem>("RelatedOpsItem")({OpsItemId: S.String}) {}
export const RelatedOpsItems = S.Array(RelatedOpsItem);
export class UpdateOpsItemRequest extends S.Class<UpdateOpsItemRequest>("UpdateOpsItemRequest")({Description: S.optional(S.String), OperationalData: S.optional(OpsItemOperationalData), OperationalDataToDelete: S.optional(OpsItemOpsDataKeysList), Notifications: S.optional(OpsItemNotifications), Priority: S.optional(S.Number), RelatedOpsItems: S.optional(RelatedOpsItems), Status: S.optional(S.String), OpsItemId: S.String, Title: S.optional(S.String), Category: S.optional(S.String), Severity: S.optional(S.String), ActualStartTime: S.optional(S.Date), ActualEndTime: S.optional(S.Date), PlannedStartTime: S.optional(S.Date), PlannedEndTime: S.optional(S.Date), OpsItemArn: S.optional(S.String)}) {}
export class UpdateOpsItemResponse extends S.Class<UpdateOpsItemResponse>("UpdateOpsItemResponse")({}) {}
export class MetadataValue extends S.Class<MetadataValue>("MetadataValue")({Value: S.optional(S.String)}) {}
export const MetadataMap = S.Record({key: S.String, value: MetadataValue});
export class UpdateOpsMetadataRequest extends S.Class<UpdateOpsMetadataRequest>("UpdateOpsMetadataRequest")({OpsMetadataArn: S.String, MetadataToUpdate: S.optional(MetadataMap), KeysToDelete: S.optional(MetadataKeysToDeleteList)}) {}
export const PatchFilterValueList = S.Array(S.String);
export class PatchFilter extends S.Class<PatchFilter>("PatchFilter")({Key: S.String, Values: PatchFilterValueList}) {}
export const PatchFilterList = S.Array(PatchFilter);
export class PatchFilterGroup extends S.Class<PatchFilterGroup>("PatchFilterGroup")({PatchFilters: PatchFilterList}) {}
export class PatchRule extends S.Class<PatchRule>("PatchRule")({PatchFilterGroup: PatchFilterGroup, ComplianceLevel: S.optional(S.String), ApproveAfterDays: S.optional(S.Number), ApproveUntilDate: S.optional(S.String), EnableNonSecurity: S.optional(S.Boolean)}) {}
export const PatchRuleList = S.Array(PatchRule);
export class PatchRuleGroup extends S.Class<PatchRuleGroup>("PatchRuleGroup")({PatchRules: PatchRuleList}) {}
export const PatchSourceProductList = S.Array(S.String);
export class PatchSource extends S.Class<PatchSource>("PatchSource")({Name: S.String, Products: PatchSourceProductList, Configuration: S.String}) {}
export const PatchSourceList = S.Array(PatchSource);
export class UpdatePatchBaselineRequest extends S.Class<UpdatePatchBaselineRequest>("UpdatePatchBaselineRequest")({BaselineId: S.String, Name: S.optional(S.String), GlobalFilters: S.optional(PatchFilterGroup), ApprovalRules: S.optional(PatchRuleGroup), ApprovedPatches: S.optional(PatchIdList), ApprovedPatchesComplianceLevel: S.optional(S.String), ApprovedPatchesEnableNonSecurity: S.optional(S.Boolean), RejectedPatches: S.optional(PatchIdList), RejectedPatchesAction: S.optional(S.String), Description: S.optional(S.String), Sources: S.optional(PatchSourceList), AvailableSecurityUpdatesComplianceStatus: S.optional(S.String), Replace: S.optional(S.Boolean)}) {}
export class ResourceDataSyncOrganizationalUnit extends S.Class<ResourceDataSyncOrganizationalUnit>("ResourceDataSyncOrganizationalUnit")({OrganizationalUnitId: S.optional(S.String)}) {}
export const ResourceDataSyncOrganizationalUnitList = S.Array(ResourceDataSyncOrganizationalUnit);
export class ResourceDataSyncAwsOrganizationsSource extends S.Class<ResourceDataSyncAwsOrganizationsSource>("ResourceDataSyncAwsOrganizationsSource")({OrganizationSourceType: S.String, OrganizationalUnits: S.optional(ResourceDataSyncOrganizationalUnitList)}) {}
export const ResourceDataSyncSourceRegionList = S.Array(S.String);
export class ResourceDataSyncSource extends S.Class<ResourceDataSyncSource>("ResourceDataSyncSource")({SourceType: S.String, AwsOrganizationsSource: S.optional(ResourceDataSyncAwsOrganizationsSource), SourceRegions: ResourceDataSyncSourceRegionList, IncludeFutureRegions: S.optional(S.Boolean), EnableAllOpsDataSources: S.optional(S.Boolean)}) {}
export class UpdateResourceDataSyncRequest extends S.Class<UpdateResourceDataSyncRequest>("UpdateResourceDataSyncRequest")({SyncName: S.String, SyncType: S.String, SyncSource: ResourceDataSyncSource}) {}
export class UpdateResourceDataSyncResult extends S.Class<UpdateResourceDataSyncResult>("UpdateResourceDataSyncResult")({}) {}
export class UpdateServiceSettingRequest extends S.Class<UpdateServiceSettingRequest>("UpdateServiceSettingRequest")({SettingId: S.String, SettingValue: S.String}) {}
export class UpdateServiceSettingResult extends S.Class<UpdateServiceSettingResult>("UpdateServiceSettingResult")({}) {}
export const StringList = S.Array(S.String);
export const AutomationExecutionFilterValueList = S.Array(S.String);
export const StepExecutionFilterValueList = S.Array(S.String);
export const InstanceInformationFilterValueSet = S.Array(S.String);
export const InstancePatchStateFilterValues = S.Array(S.String);
export const InstancePropertyFilterValueSet = S.Array(S.String);
export const OpsItemFilterValues = S.Array(S.String);
export const ParametersFilterValueList = S.Array(S.String);
export const OpsFilterValueList = S.Array(S.String);
export const DocumentKeyValuesFilterValues = S.Array(S.String);
export const NodeFilterValueList = S.Array(S.String);
export const OpsItemEventFilterValues = S.Array(S.String);
export const OpsItemRelatedItemsFilterValues = S.Array(S.String);
export const OpsMetadataFilterValueList = S.Array(S.String);
export const SessionManagerParameterValueList = S.Array(S.String);
export class RegistrationMetadataItem extends S.Class<RegistrationMetadataItem>("RegistrationMetadataItem")({Key: S.String, Value: S.String}) {}
export const RegistrationMetadataList = S.Array(RegistrationMetadataItem);
export class CreateAssociationBatchRequestEntry extends S.Class<CreateAssociationBatchRequestEntry>("CreateAssociationBatchRequestEntry")({Name: S.String, InstanceId: S.optional(S.String), Parameters: S.optional(Parameters), AutomationTargetParameterName: S.optional(S.String), DocumentVersion: S.optional(S.String), Targets: S.optional(Targets), ScheduleExpression: S.optional(S.String), OutputLocation: S.optional(InstanceAssociationOutputLocation), AssociationName: S.optional(S.String), MaxErrors: S.optional(S.String), MaxConcurrency: S.optional(S.String), ComplianceSeverity: S.optional(S.String), SyncCompliance: S.optional(S.String), ApplyOnlyAtCronInterval: S.optional(S.Boolean), CalendarNames: S.optional(CalendarNameOrARNList), TargetLocations: S.optional(TargetLocations), ScheduleOffset: S.optional(S.Number), Duration: S.optional(S.Number), TargetMaps: S.optional(TargetMaps), AlarmConfiguration: S.optional(AlarmConfiguration)}) {}
export const CreateAssociationBatchRequestEntries = S.Array(CreateAssociationBatchRequestEntry);
export class DocumentRequires extends S.Class<DocumentRequires>("DocumentRequires")({Name: S.String, Version: S.optional(S.String), RequireType: S.optional(S.String), VersionName: S.optional(S.String)}) {}
export const DocumentRequiresList = S.Array(DocumentRequires);
export const OpsItemParameterNamesList = S.Array(S.String);
export class DescribeActivationsFilter extends S.Class<DescribeActivationsFilter>("DescribeActivationsFilter")({FilterKey: S.optional(S.String), FilterValues: S.optional(StringList)}) {}
export const DescribeActivationsFilterList = S.Array(DescribeActivationsFilter);
export class AssociationExecutionFilter extends S.Class<AssociationExecutionFilter>("AssociationExecutionFilter")({Key: S.String, Value: S.String, Type: S.String}) {}
export const AssociationExecutionFilterList = S.Array(AssociationExecutionFilter);
export class AssociationExecutionTargetsFilter extends S.Class<AssociationExecutionTargetsFilter>("AssociationExecutionTargetsFilter")({Key: S.String, Value: S.String}) {}
export const AssociationExecutionTargetsFilterList = S.Array(AssociationExecutionTargetsFilter);
export class AutomationExecutionFilter extends S.Class<AutomationExecutionFilter>("AutomationExecutionFilter")({Key: S.String, Values: AutomationExecutionFilterValueList}) {}
export const AutomationExecutionFilterList = S.Array(AutomationExecutionFilter);
export class StepExecutionFilter extends S.Class<StepExecutionFilter>("StepExecutionFilter")({Key: S.String, Values: StepExecutionFilterValueList}) {}
export const StepExecutionFilterList = S.Array(StepExecutionFilter);
export class InstanceInformationFilter extends S.Class<InstanceInformationFilter>("InstanceInformationFilter")({key: S.String, valueSet: InstanceInformationFilterValueSet}) {}
export const InstanceInformationFilterList = S.Array(InstanceInformationFilter);
export class InstanceInformationStringFilter extends S.Class<InstanceInformationStringFilter>("InstanceInformationStringFilter")({Key: S.String, Values: InstanceInformationFilterValueSet}) {}
export const InstanceInformationStringFilterList = S.Array(InstanceInformationStringFilter);
export class InstancePatchStateFilter extends S.Class<InstancePatchStateFilter>("InstancePatchStateFilter")({Key: S.String, Values: InstancePatchStateFilterValues, Type: S.String}) {}
export const InstancePatchStateFilterList = S.Array(InstancePatchStateFilter);
export class InstancePropertyFilter extends S.Class<InstancePropertyFilter>("InstancePropertyFilter")({key: S.String, valueSet: InstancePropertyFilterValueSet}) {}
export const InstancePropertyFilterList = S.Array(InstancePropertyFilter);
export class InstancePropertyStringFilter extends S.Class<InstancePropertyStringFilter>("InstancePropertyStringFilter")({Key: S.String, Values: InstancePropertyFilterValueSet, Operator: S.optional(S.String)}) {}
export const InstancePropertyStringFilterList = S.Array(InstancePropertyStringFilter);
export class OpsItemFilter extends S.Class<OpsItemFilter>("OpsItemFilter")({Key: S.String, Values: OpsItemFilterValues, Operator: S.String}) {}
export const OpsItemFilters = S.Array(OpsItemFilter);
export class ParametersFilter extends S.Class<ParametersFilter>("ParametersFilter")({Key: S.String, Values: ParametersFilterValueList}) {}
export const ParametersFilterList = S.Array(ParametersFilter);
export class SessionFilter extends S.Class<SessionFilter>("SessionFilter")({key: S.String, value: S.String}) {}
export const SessionFilterList = S.Array(SessionFilter);
export class BaselineOverride extends S.Class<BaselineOverride>("BaselineOverride")({OperatingSystem: S.optional(S.String), GlobalFilters: S.optional(PatchFilterGroup), ApprovalRules: S.optional(PatchRuleGroup), ApprovedPatches: S.optional(PatchIdList), ApprovedPatchesComplianceLevel: S.optional(S.String), RejectedPatches: S.optional(PatchIdList), RejectedPatchesAction: S.optional(S.String), ApprovedPatchesEnableNonSecurity: S.optional(S.Boolean), Sources: S.optional(PatchSourceList), AvailableSecurityUpdatesComplianceStatus: S.optional(S.String)}) {}
export class ResultAttribute extends S.Class<ResultAttribute>("ResultAttribute")({TypeName: S.String}) {}
export const ResultAttributeList = S.Array(ResultAttribute);
export const MaintenanceWindowExecutionTaskIdList = S.Array(S.String);
export const MaintenanceWindowTaskParametersList = S.Array(MaintenanceWindowTaskParameters);
export class OpsFilter extends S.Class<OpsFilter>("OpsFilter")({Key: S.String, Values: OpsFilterValueList, Type: S.optional(S.String)}) {}
export const OpsFilterList = S.Array(OpsFilter);
export class OpsResultAttribute extends S.Class<OpsResultAttribute>("OpsResultAttribute")({TypeName: S.String}) {}
export const OpsResultAttributeList = S.Array(OpsResultAttribute);
export class Parameter extends S.Class<Parameter>("Parameter")({Name: S.optional(S.String), Type: S.optional(S.String), Value: S.optional(S.String), Version: S.optional(S.Number), Selector: S.optional(S.String), SourceResult: S.optional(S.String), LastModifiedDate: S.optional(S.Date), ARN: S.optional(S.String), DataType: S.optional(S.String)}) {}
export const ParameterList = S.Array(Parameter);
export const PatchGroupList = S.Array(S.String);
export class AssociationFilter extends S.Class<AssociationFilter>("AssociationFilter")({key: S.String, value: S.String}) {}
export const AssociationFilterList = S.Array(AssociationFilter);
export class DocumentFilter extends S.Class<DocumentFilter>("DocumentFilter")({key: S.String, value: S.String}) {}
export const DocumentFilterList = S.Array(DocumentFilter);
export class DocumentKeyValuesFilter extends S.Class<DocumentKeyValuesFilter>("DocumentKeyValuesFilter")({Key: S.optional(S.String), Values: S.optional(DocumentKeyValuesFilterValues)}) {}
export const DocumentKeyValuesFilterList = S.Array(DocumentKeyValuesFilter);
export class NodeFilter extends S.Class<NodeFilter>("NodeFilter")({Key: S.String, Values: NodeFilterValueList, Type: S.optional(S.String)}) {}
export const NodeFilterList = S.Array(NodeFilter);
export class NodeAggregator extends S.Class<NodeAggregator>("NodeAggregator")({AggregatorType: S.String, TypeName: S.String, AttributeName: S.String, Aggregators: S.optional(S.suspend(() => NodeAggregatorList))}) {}
export type NodeAggregatorList = NodeAggregator[];
export const NodeAggregatorList = S.Array(S.suspend((): S.Schema<NodeAggregator, any> => NodeAggregator)) as any as S.Schema<NodeAggregatorList>;
export class OpsItemEventFilter extends S.Class<OpsItemEventFilter>("OpsItemEventFilter")({Key: S.String, Values: OpsItemEventFilterValues, Operator: S.String}) {}
export const OpsItemEventFilters = S.Array(OpsItemEventFilter);
export class OpsItemRelatedItemsFilter extends S.Class<OpsItemRelatedItemsFilter>("OpsItemRelatedItemsFilter")({Key: S.String, Values: OpsItemRelatedItemsFilterValues, Operator: S.String}) {}
export const OpsItemRelatedItemsFilters = S.Array(OpsItemRelatedItemsFilter);
export class OpsMetadataFilter extends S.Class<OpsMetadataFilter>("OpsMetadataFilter")({Key: S.String, Values: OpsMetadataFilterValueList}) {}
export const OpsMetadataFilterList = S.Array(OpsMetadataFilter);
export class ComplianceExecutionSummary extends S.Class<ComplianceExecutionSummary>("ComplianceExecutionSummary")({ExecutionTime: S.Date, ExecutionId: S.optional(S.String), ExecutionType: S.optional(S.String)}) {}
export class Runbook extends S.Class<Runbook>("Runbook")({DocumentName: S.String, DocumentVersion: S.optional(S.String), Parameters: S.optional(AutomationParameterMap), TargetParameterName: S.optional(S.String), Targets: S.optional(Targets), TargetMaps: S.optional(TargetMaps), MaxConcurrency: S.optional(S.String), MaxErrors: S.optional(S.String), TargetLocations: S.optional(TargetLocations)}) {}
export const Runbooks = S.Array(Runbook);
export const SessionManagerParameters = S.Record({key: S.String, value: SessionManagerParameterValueList});
export class AssociationStatus extends S.Class<AssociationStatus>("AssociationStatus")({Date: S.Date, Name: S.String, Message: S.String, AdditionalInfo: S.optional(S.String)}) {}
export class AddTagsToResourceRequest extends S.Class<AddTagsToResourceRequest>("AddTagsToResourceRequest")({ResourceType: S.String, ResourceId: S.String, Tags: TagList}) {}
export class AddTagsToResourceResult extends S.Class<AddTagsToResourceResult>("AddTagsToResourceResult")({}) {}
export class AssociateOpsItemRelatedItemResponse extends S.Class<AssociateOpsItemRelatedItemResponse>("AssociateOpsItemRelatedItemResponse")({AssociationId: S.optional(S.String)}) {}
export class CancelMaintenanceWindowExecutionResult extends S.Class<CancelMaintenanceWindowExecutionResult>("CancelMaintenanceWindowExecutionResult")({WindowExecutionId: S.optional(S.String)}) {}
export class CreateActivationRequest extends S.Class<CreateActivationRequest>("CreateActivationRequest")({Description: S.optional(S.String), DefaultInstanceName: S.optional(S.String), IamRole: S.String, RegistrationLimit: S.optional(S.Number), ExpirationDate: S.optional(S.Date), Tags: S.optional(TagList), RegistrationMetadata: S.optional(RegistrationMetadataList)}) {}
export class CreateAssociationBatchRequest extends S.Class<CreateAssociationBatchRequest>("CreateAssociationBatchRequest")({Entries: CreateAssociationBatchRequestEntries}) {}
export class CreateDocumentRequest extends S.Class<CreateDocumentRequest>("CreateDocumentRequest")({Content: S.String, Requires: S.optional(DocumentRequiresList), Attachments: S.optional(AttachmentsSourceList), Name: S.String, DisplayName: S.optional(S.String), VersionName: S.optional(S.String), DocumentType: S.optional(S.String), DocumentFormat: S.optional(S.String), TargetType: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class CreateMaintenanceWindowResult extends S.Class<CreateMaintenanceWindowResult>("CreateMaintenanceWindowResult")({WindowId: S.optional(S.String)}) {}
export class DeleteMaintenanceWindowResult extends S.Class<DeleteMaintenanceWindowResult>("DeleteMaintenanceWindowResult")({WindowId: S.optional(S.String)}) {}
export class DeleteParametersResult extends S.Class<DeleteParametersResult>("DeleteParametersResult")({DeletedParameters: S.optional(ParameterNameList), InvalidParameters: S.optional(ParameterNameList)}) {}
export class DeletePatchBaselineResult extends S.Class<DeletePatchBaselineResult>("DeletePatchBaselineResult")({BaselineId: S.optional(S.String)}) {}
export class DeregisterPatchBaselineForPatchGroupResult extends S.Class<DeregisterPatchBaselineForPatchGroupResult>("DeregisterPatchBaselineForPatchGroupResult")({BaselineId: S.optional(S.String), PatchGroup: S.optional(S.String)}) {}
export class DeregisterTargetFromMaintenanceWindowResult extends S.Class<DeregisterTargetFromMaintenanceWindowResult>("DeregisterTargetFromMaintenanceWindowResult")({WindowId: S.optional(S.String), WindowTargetId: S.optional(S.String)}) {}
export class DeregisterTaskFromMaintenanceWindowResult extends S.Class<DeregisterTaskFromMaintenanceWindowResult>("DeregisterTaskFromMaintenanceWindowResult")({WindowId: S.optional(S.String), WindowTaskId: S.optional(S.String)}) {}
export class DescribeActivationsRequest extends S.Class<DescribeActivationsRequest>("DescribeActivationsRequest")({Filters: S.optional(DescribeActivationsFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeAssociationExecutionsRequest extends S.Class<DescribeAssociationExecutionsRequest>("DescribeAssociationExecutionsRequest")({AssociationId: S.String, Filters: S.optional(AssociationExecutionFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeAssociationExecutionTargetsRequest extends S.Class<DescribeAssociationExecutionTargetsRequest>("DescribeAssociationExecutionTargetsRequest")({AssociationId: S.String, ExecutionId: S.String, Filters: S.optional(AssociationExecutionTargetsFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeAutomationExecutionsRequest extends S.Class<DescribeAutomationExecutionsRequest>("DescribeAutomationExecutionsRequest")({Filters: S.optional(AutomationExecutionFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeAutomationStepExecutionsRequest extends S.Class<DescribeAutomationStepExecutionsRequest>("DescribeAutomationStepExecutionsRequest")({AutomationExecutionId: S.String, Filters: S.optional(StepExecutionFilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), ReverseOrder: S.optional(S.Boolean)}) {}
export class DescribeAvailablePatchesRequest extends S.Class<DescribeAvailablePatchesRequest>("DescribeAvailablePatchesRequest")({Filters: S.optional(PatchOrchestratorFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeInstanceInformationRequest extends S.Class<DescribeInstanceInformationRequest>("DescribeInstanceInformationRequest")({InstanceInformationFilterList: S.optional(InstanceInformationFilterList), Filters: S.optional(InstanceInformationStringFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeInstancePatchStatesForPatchGroupRequest extends S.Class<DescribeInstancePatchStatesForPatchGroupRequest>("DescribeInstancePatchStatesForPatchGroupRequest")({PatchGroup: S.String, Filters: S.optional(InstancePatchStateFilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeInstancePropertiesRequest extends S.Class<DescribeInstancePropertiesRequest>("DescribeInstancePropertiesRequest")({InstancePropertyFilterList: S.optional(InstancePropertyFilterList), FiltersWithOperator: S.optional(InstancePropertyStringFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowExecutionsRequest extends S.Class<DescribeMaintenanceWindowExecutionsRequest>("DescribeMaintenanceWindowExecutionsRequest")({WindowId: S.String, Filters: S.optional(MaintenanceWindowFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeOpsItemsRequest extends S.Class<DescribeOpsItemsRequest>("DescribeOpsItemsRequest")({OpsItemFilters: S.optional(OpsItemFilters), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeParametersRequest extends S.Class<DescribeParametersRequest>("DescribeParametersRequest")({Filters: S.optional(ParametersFilterList), ParameterFilters: S.optional(ParameterStringFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Shared: S.optional(S.Boolean)}) {}
export class DescribePatchGroupStateResult extends S.Class<DescribePatchGroupStateResult>("DescribePatchGroupStateResult")({Instances: S.optional(S.Number), InstancesWithInstalledPatches: S.optional(S.Number), InstancesWithInstalledOtherPatches: S.optional(S.Number), InstancesWithInstalledPendingRebootPatches: S.optional(S.Number), InstancesWithInstalledRejectedPatches: S.optional(S.Number), InstancesWithMissingPatches: S.optional(S.Number), InstancesWithFailedPatches: S.optional(S.Number), InstancesWithNotApplicablePatches: S.optional(S.Number), InstancesWithUnreportedNotApplicablePatches: S.optional(S.Number), InstancesWithCriticalNonCompliantPatches: S.optional(S.Number), InstancesWithSecurityNonCompliantPatches: S.optional(S.Number), InstancesWithOtherNonCompliantPatches: S.optional(S.Number), InstancesWithAvailableSecurityUpdates: S.optional(S.Number)}) {}
export class DescribeSessionsRequest extends S.Class<DescribeSessionsRequest>("DescribeSessionsRequest")({State: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Filters: S.optional(SessionFilterList)}) {}
export class GetCalendarStateResponse extends S.Class<GetCalendarStateResponse>("GetCalendarStateResponse")({State: S.optional(S.String), AtTime: S.optional(S.String), NextTransitionTime: S.optional(S.String)}) {}
export class GetCommandInvocationResult extends S.Class<GetCommandInvocationResult>("GetCommandInvocationResult")({CommandId: S.optional(S.String), InstanceId: S.optional(S.String), Comment: S.optional(S.String), DocumentName: S.optional(S.String), DocumentVersion: S.optional(S.String), PluginName: S.optional(S.String), ResponseCode: S.optional(S.Number), ExecutionStartDateTime: S.optional(S.String), ExecutionElapsedTime: S.optional(S.String), ExecutionEndDateTime: S.optional(S.String), Status: S.optional(S.String), StatusDetails: S.optional(S.String), StandardOutputContent: S.optional(S.String), StandardOutputUrl: S.optional(S.String), StandardErrorContent: S.optional(S.String), StandardErrorUrl: S.optional(S.String), CloudWatchOutputConfig: S.optional(CloudWatchOutputConfig)}) {}
export class GetConnectionStatusResponse extends S.Class<GetConnectionStatusResponse>("GetConnectionStatusResponse")({Target: S.optional(S.String), Status: S.optional(S.String)}) {}
export class GetDefaultPatchBaselineResult extends S.Class<GetDefaultPatchBaselineResult>("GetDefaultPatchBaselineResult")({BaselineId: S.optional(S.String), OperatingSystem: S.optional(S.String)}) {}
export class GetDeployablePatchSnapshotForInstanceRequest extends S.Class<GetDeployablePatchSnapshotForInstanceRequest>("GetDeployablePatchSnapshotForInstanceRequest")({InstanceId: S.String, SnapshotId: S.String, BaselineOverride: S.optional(BaselineOverride), UseS3DualStackEndpoint: S.optional(S.Boolean)}) {}
export class GetMaintenanceWindowResult extends S.Class<GetMaintenanceWindowResult>("GetMaintenanceWindowResult")({WindowId: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), StartDate: S.optional(S.String), EndDate: S.optional(S.String), Schedule: S.optional(S.String), ScheduleTimezone: S.optional(S.String), ScheduleOffset: S.optional(S.Number), NextExecutionTime: S.optional(S.String), Duration: S.optional(S.Number), Cutoff: S.optional(S.Number), AllowUnassociatedTargets: S.optional(S.Boolean), Enabled: S.optional(S.Boolean), CreatedDate: S.optional(S.Date), ModifiedDate: S.optional(S.Date)}) {}
export class GetMaintenanceWindowExecutionResult extends S.Class<GetMaintenanceWindowExecutionResult>("GetMaintenanceWindowExecutionResult")({WindowExecutionId: S.optional(S.String), TaskIds: S.optional(MaintenanceWindowExecutionTaskIdList), Status: S.optional(S.String), StatusDetails: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date)}) {}
export class GetMaintenanceWindowExecutionTaskInvocationResult extends S.Class<GetMaintenanceWindowExecutionTaskInvocationResult>("GetMaintenanceWindowExecutionTaskInvocationResult")({WindowExecutionId: S.optional(S.String), TaskExecutionId: S.optional(S.String), InvocationId: S.optional(S.String), ExecutionId: S.optional(S.String), TaskType: S.optional(S.String), Parameters: S.optional(S.String), Status: S.optional(S.String), StatusDetails: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), OwnerInformation: S.optional(S.String), WindowTargetId: S.optional(S.String)}) {}
export class GetMaintenanceWindowTaskResult extends S.Class<GetMaintenanceWindowTaskResult>("GetMaintenanceWindowTaskResult")({WindowId: S.optional(S.String), WindowTaskId: S.optional(S.String), Targets: S.optional(Targets), TaskArn: S.optional(S.String), ServiceRoleArn: S.optional(S.String), TaskType: S.optional(S.String), TaskParameters: S.optional(MaintenanceWindowTaskParameters), TaskInvocationParameters: S.optional(MaintenanceWindowTaskInvocationParameters), Priority: S.optional(S.Number), MaxConcurrency: S.optional(S.String), MaxErrors: S.optional(S.String), LoggingInfo: S.optional(LoggingInfo), Name: S.optional(S.String), Description: S.optional(S.String), CutoffBehavior: S.optional(S.String), AlarmConfiguration: S.optional(AlarmConfiguration)}) {}
export class GetOpsMetadataResult extends S.Class<GetOpsMetadataResult>("GetOpsMetadataResult")({ResourceId: S.optional(S.String), Metadata: S.optional(MetadataMap), NextToken: S.optional(S.String)}) {}
export class GetParametersResult extends S.Class<GetParametersResult>("GetParametersResult")({Parameters: S.optional(ParameterList), InvalidParameters: S.optional(ParameterNameList)}) {}
export class GetParametersByPathResult extends S.Class<GetParametersByPathResult>("GetParametersByPathResult")({Parameters: S.optional(ParameterList), NextToken: S.optional(S.String)}) {}
export class GetPatchBaselineResult extends S.Class<GetPatchBaselineResult>("GetPatchBaselineResult")({BaselineId: S.optional(S.String), Name: S.optional(S.String), OperatingSystem: S.optional(S.String), GlobalFilters: S.optional(PatchFilterGroup), ApprovalRules: S.optional(PatchRuleGroup), ApprovedPatches: S.optional(PatchIdList), ApprovedPatchesComplianceLevel: S.optional(S.String), ApprovedPatchesEnableNonSecurity: S.optional(S.Boolean), RejectedPatches: S.optional(PatchIdList), RejectedPatchesAction: S.optional(S.String), PatchGroups: S.optional(PatchGroupList), CreatedDate: S.optional(S.Date), ModifiedDate: S.optional(S.Date), Description: S.optional(S.String), Sources: S.optional(PatchSourceList), AvailableSecurityUpdatesComplianceStatus: S.optional(S.String)}) {}
export class GetPatchBaselineForPatchGroupResult extends S.Class<GetPatchBaselineForPatchGroupResult>("GetPatchBaselineForPatchGroupResult")({BaselineId: S.optional(S.String), PatchGroup: S.optional(S.String), OperatingSystem: S.optional(S.String)}) {}
export class LabelParameterVersionResult extends S.Class<LabelParameterVersionResult>("LabelParameterVersionResult")({InvalidLabels: S.optional(ParameterLabelList), ParameterVersion: S.optional(S.Number)}) {}
export class ListAssociationsRequest extends S.Class<ListAssociationsRequest>("ListAssociationsRequest")({AssociationFilterList: S.optional(AssociationFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListCommandInvocationsRequest extends S.Class<ListCommandInvocationsRequest>("ListCommandInvocationsRequest")({CommandId: S.optional(S.String), InstanceId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Filters: S.optional(CommandFilterList), Details: S.optional(S.Boolean)}) {}
export class ListComplianceItemsRequest extends S.Class<ListComplianceItemsRequest>("ListComplianceItemsRequest")({Filters: S.optional(ComplianceStringFilterList), ResourceIds: S.optional(ComplianceResourceIdList), ResourceTypes: S.optional(ComplianceResourceTypeList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListDocumentsRequest extends S.Class<ListDocumentsRequest>("ListDocumentsRequest")({DocumentFilterList: S.optional(DocumentFilterList), Filters: S.optional(DocumentKeyValuesFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export const InventoryItemEntry = S.Record({key: S.String, value: S.String});
export const InventoryItemEntryList = S.Array(InventoryItemEntry);
export class ListInventoryEntriesResult extends S.Class<ListInventoryEntriesResult>("ListInventoryEntriesResult")({TypeName: S.optional(S.String), InstanceId: S.optional(S.String), SchemaVersion: S.optional(S.String), CaptureTime: S.optional(S.String), Entries: S.optional(InventoryItemEntryList), NextToken: S.optional(S.String)}) {}
export class ListNodesRequest extends S.Class<ListNodesRequest>("ListNodesRequest")({SyncName: S.optional(S.String), Filters: S.optional(NodeFilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListNodesSummaryRequest extends S.Class<ListNodesSummaryRequest>("ListNodesSummaryRequest")({SyncName: S.optional(S.String), Filters: S.optional(NodeFilterList), Aggregators: NodeAggregatorList, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListOpsItemEventsRequest extends S.Class<ListOpsItemEventsRequest>("ListOpsItemEventsRequest")({Filters: S.optional(OpsItemEventFilters), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListOpsItemRelatedItemsRequest extends S.Class<ListOpsItemRelatedItemsRequest>("ListOpsItemRelatedItemsRequest")({OpsItemId: S.optional(S.String), Filters: S.optional(OpsItemRelatedItemsFilters), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListOpsMetadataRequest extends S.Class<ListOpsMetadataRequest>("ListOpsMetadataRequest")({Filters: S.optional(OpsMetadataFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResult extends S.Class<ListTagsForResourceResult>("ListTagsForResourceResult")({TagList: S.optional(TagList)}) {}
export class PutParameterResult extends S.Class<PutParameterResult>("PutParameterResult")({Version: S.optional(S.Number), Tier: S.optional(S.String)}) {}
export class PutResourcePolicyResponse extends S.Class<PutResourcePolicyResponse>("PutResourcePolicyResponse")({PolicyId: S.optional(S.String), PolicyHash: S.optional(S.String)}) {}
export class RegisterDefaultPatchBaselineResult extends S.Class<RegisterDefaultPatchBaselineResult>("RegisterDefaultPatchBaselineResult")({BaselineId: S.optional(S.String)}) {}
export class RegisterPatchBaselineForPatchGroupResult extends S.Class<RegisterPatchBaselineForPatchGroupResult>("RegisterPatchBaselineForPatchGroupResult")({BaselineId: S.optional(S.String), PatchGroup: S.optional(S.String)}) {}
export class RegisterTargetWithMaintenanceWindowResult extends S.Class<RegisterTargetWithMaintenanceWindowResult>("RegisterTargetWithMaintenanceWindowResult")({WindowTargetId: S.optional(S.String)}) {}
export class ServiceSetting extends S.Class<ServiceSetting>("ServiceSetting")({SettingId: S.optional(S.String), SettingValue: S.optional(S.String), LastModifiedDate: S.optional(S.Date), LastModifiedUser: S.optional(S.String), ARN: S.optional(S.String), Status: S.optional(S.String)}) {}
export class ResetServiceSettingResult extends S.Class<ResetServiceSettingResult>("ResetServiceSettingResult")({ServiceSetting: S.optional(ServiceSetting)}) {}
export class ResumeSessionResponse extends S.Class<ResumeSessionResponse>("ResumeSessionResponse")({SessionId: S.optional(S.String), TokenValue: S.optional(S.String), StreamUrl: S.optional(S.String)}) {}
export class SendAutomationSignalRequest extends S.Class<SendAutomationSignalRequest>("SendAutomationSignalRequest")({AutomationExecutionId: S.String, SignalType: S.String, Payload: S.optional(AutomationParameterMap)}) {}
export class SendAutomationSignalResult extends S.Class<SendAutomationSignalResult>("SendAutomationSignalResult")({}) {}
export class SendCommandRequest extends S.Class<SendCommandRequest>("SendCommandRequest")({InstanceIds: S.optional(InstanceIdList), Targets: S.optional(Targets), DocumentName: S.String, DocumentVersion: S.optional(S.String), DocumentHash: S.optional(S.String), DocumentHashType: S.optional(S.String), TimeoutSeconds: S.optional(S.Number), Comment: S.optional(S.String), Parameters: S.optional(Parameters), OutputS3Region: S.optional(S.String), OutputS3BucketName: S.optional(S.String), OutputS3KeyPrefix: S.optional(S.String), MaxConcurrency: S.optional(S.String), MaxErrors: S.optional(S.String), ServiceRoleArn: S.optional(S.String), NotificationConfig: S.optional(NotificationConfig), CloudWatchOutputConfig: S.optional(CloudWatchOutputConfig), AlarmConfiguration: S.optional(AlarmConfiguration)}) {}
export class StartAccessRequestResponse extends S.Class<StartAccessRequestResponse>("StartAccessRequestResponse")({AccessRequestId: S.optional(S.String)}) {}
export class StartAutomationExecutionResult extends S.Class<StartAutomationExecutionResult>("StartAutomationExecutionResult")({AutomationExecutionId: S.optional(S.String)}) {}
export class StartChangeRequestExecutionRequest extends S.Class<StartChangeRequestExecutionRequest>("StartChangeRequestExecutionRequest")({ScheduledTime: S.optional(S.Date), DocumentName: S.String, DocumentVersion: S.optional(S.String), Parameters: S.optional(AutomationParameterMap), ChangeRequestName: S.optional(S.String), ClientToken: S.optional(S.String), AutoApprove: S.optional(S.Boolean), Runbooks: Runbooks, Tags: S.optional(TagList), ScheduledEndTime: S.optional(S.Date), ChangeDetails: S.optional(S.String)}) {}
export class StartSessionRequest extends S.Class<StartSessionRequest>("StartSessionRequest")({Target: S.String, DocumentName: S.optional(S.String), Reason: S.optional(S.String), Parameters: S.optional(SessionManagerParameters)}) {}
export class TerminateSessionResponse extends S.Class<TerminateSessionResponse>("TerminateSessionResponse")({SessionId: S.optional(S.String)}) {}
export class UnlabelParameterVersionResult extends S.Class<UnlabelParameterVersionResult>("UnlabelParameterVersionResult")({RemovedLabels: S.optional(ParameterLabelList), InvalidLabels: S.optional(ParameterLabelList)}) {}
export const AssociationStatusAggregatedCount = S.Record({key: S.String, value: S.Number});
export class AssociationOverview extends S.Class<AssociationOverview>("AssociationOverview")({Status: S.optional(S.String), DetailedStatus: S.optional(S.String), AssociationStatusAggregatedCount: S.optional(AssociationStatusAggregatedCount)}) {}
export class AlarmStateInformation extends S.Class<AlarmStateInformation>("AlarmStateInformation")({Name: S.String, State: S.String}) {}
export const AlarmStateInformationList = S.Array(AlarmStateInformation);
export class AssociationDescription extends S.Class<AssociationDescription>("AssociationDescription")({Name: S.optional(S.String), InstanceId: S.optional(S.String), AssociationVersion: S.optional(S.String), Date: S.optional(S.Date), LastUpdateAssociationDate: S.optional(S.Date), Status: S.optional(AssociationStatus), Overview: S.optional(AssociationOverview), DocumentVersion: S.optional(S.String), AutomationTargetParameterName: S.optional(S.String), Parameters: S.optional(Parameters), AssociationId: S.optional(S.String), Targets: S.optional(Targets), ScheduleExpression: S.optional(S.String), OutputLocation: S.optional(InstanceAssociationOutputLocation), LastExecutionDate: S.optional(S.Date), LastSuccessfulExecutionDate: S.optional(S.Date), AssociationName: S.optional(S.String), MaxErrors: S.optional(S.String), MaxConcurrency: S.optional(S.String), ComplianceSeverity: S.optional(S.String), SyncCompliance: S.optional(S.String), ApplyOnlyAtCronInterval: S.optional(S.Boolean), CalendarNames: S.optional(CalendarNameOrARNList), TargetLocations: S.optional(TargetLocations), ScheduleOffset: S.optional(S.Number), Duration: S.optional(S.Number), TargetMaps: S.optional(TargetMaps), AlarmConfiguration: S.optional(AlarmConfiguration), TriggeredAlarms: S.optional(AlarmStateInformationList)}) {}
export class UpdateAssociationResult extends S.Class<UpdateAssociationResult>("UpdateAssociationResult")({AssociationDescription: S.optional(AssociationDescription)}) {}
export class UpdateAssociationStatusRequest extends S.Class<UpdateAssociationStatusRequest>("UpdateAssociationStatusRequest")({Name: S.String, InstanceId: S.String, AssociationStatus: AssociationStatus}) {}
export class DocumentParameter extends S.Class<DocumentParameter>("DocumentParameter")({Name: S.optional(S.String), Type: S.optional(S.String), Description: S.optional(S.String), DefaultValue: S.optional(S.String)}) {}
export const DocumentParameterList = S.Array(DocumentParameter);
export const PlatformTypeList = S.Array(S.String);
export class AttachmentInformation extends S.Class<AttachmentInformation>("AttachmentInformation")({Name: S.optional(S.String)}) {}
export const AttachmentInformationList = S.Array(AttachmentInformation);
export class ReviewInformation extends S.Class<ReviewInformation>("ReviewInformation")({ReviewedTime: S.optional(S.Date), Status: S.optional(S.String), Reviewer: S.optional(S.String)}) {}
export const ReviewInformationList = S.Array(ReviewInformation);
export const CategoryList = S.Array(S.String);
export const CategoryEnumList = S.Array(S.String);
export class DocumentDescription extends S.Class<DocumentDescription>("DocumentDescription")({Sha1: S.optional(S.String), Hash: S.optional(S.String), HashType: S.optional(S.String), Name: S.optional(S.String), DisplayName: S.optional(S.String), VersionName: S.optional(S.String), Owner: S.optional(S.String), CreatedDate: S.optional(S.Date), Status: S.optional(S.String), StatusInformation: S.optional(S.String), DocumentVersion: S.optional(S.String), Description: S.optional(S.String), Parameters: S.optional(DocumentParameterList), PlatformTypes: S.optional(PlatformTypeList), DocumentType: S.optional(S.String), SchemaVersion: S.optional(S.String), LatestVersion: S.optional(S.String), DefaultVersion: S.optional(S.String), DocumentFormat: S.optional(S.String), TargetType: S.optional(S.String), Tags: S.optional(TagList), AttachmentsInformation: S.optional(AttachmentInformationList), Requires: S.optional(DocumentRequiresList), Author: S.optional(S.String), ReviewInformation: S.optional(ReviewInformationList), ApprovedVersion: S.optional(S.String), PendingReviewVersion: S.optional(S.String), ReviewStatus: S.optional(S.String), Category: S.optional(CategoryList), CategoryEnum: S.optional(CategoryEnumList)}) {}
export class UpdateDocumentResult extends S.Class<UpdateDocumentResult>("UpdateDocumentResult")({DocumentDescription: S.optional(DocumentDescription)}) {}
export class UpdateMaintenanceWindowResult extends S.Class<UpdateMaintenanceWindowResult>("UpdateMaintenanceWindowResult")({WindowId: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), StartDate: S.optional(S.String), EndDate: S.optional(S.String), Schedule: S.optional(S.String), ScheduleTimezone: S.optional(S.String), ScheduleOffset: S.optional(S.Number), Duration: S.optional(S.Number), Cutoff: S.optional(S.Number), AllowUnassociatedTargets: S.optional(S.Boolean), Enabled: S.optional(S.Boolean)}) {}
export class UpdateMaintenanceWindowTargetResult extends S.Class<UpdateMaintenanceWindowTargetResult>("UpdateMaintenanceWindowTargetResult")({WindowId: S.optional(S.String), WindowTargetId: S.optional(S.String), Targets: S.optional(Targets), OwnerInformation: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String)}) {}
export class UpdateMaintenanceWindowTaskResult extends S.Class<UpdateMaintenanceWindowTaskResult>("UpdateMaintenanceWindowTaskResult")({WindowId: S.optional(S.String), WindowTaskId: S.optional(S.String), Targets: S.optional(Targets), TaskArn: S.optional(S.String), ServiceRoleArn: S.optional(S.String), TaskParameters: S.optional(MaintenanceWindowTaskParameters), TaskInvocationParameters: S.optional(MaintenanceWindowTaskInvocationParameters), Priority: S.optional(S.Number), MaxConcurrency: S.optional(S.String), MaxErrors: S.optional(S.String), LoggingInfo: S.optional(LoggingInfo), Name: S.optional(S.String), Description: S.optional(S.String), CutoffBehavior: S.optional(S.String), AlarmConfiguration: S.optional(AlarmConfiguration)}) {}
export class UpdateOpsMetadataResult extends S.Class<UpdateOpsMetadataResult>("UpdateOpsMetadataResult")({OpsMetadataArn: S.optional(S.String)}) {}
export class UpdatePatchBaselineResult extends S.Class<UpdatePatchBaselineResult>("UpdatePatchBaselineResult")({BaselineId: S.optional(S.String), Name: S.optional(S.String), OperatingSystem: S.optional(S.String), GlobalFilters: S.optional(PatchFilterGroup), ApprovalRules: S.optional(PatchRuleGroup), ApprovedPatches: S.optional(PatchIdList), ApprovedPatchesComplianceLevel: S.optional(S.String), ApprovedPatchesEnableNonSecurity: S.optional(S.Boolean), RejectedPatches: S.optional(PatchIdList), RejectedPatchesAction: S.optional(S.String), CreatedDate: S.optional(S.Date), ModifiedDate: S.optional(S.Date), Description: S.optional(S.String), Sources: S.optional(PatchSourceList), AvailableSecurityUpdatesComplianceStatus: S.optional(S.String)}) {}
export class ResourceDataSyncDestinationDataSharing extends S.Class<ResourceDataSyncDestinationDataSharing>("ResourceDataSyncDestinationDataSharing")({DestinationDataSharingType: S.optional(S.String)}) {}
export class InventoryGroup extends S.Class<InventoryGroup>("InventoryGroup")({Name: S.String, Filters: InventoryFilterList}) {}
export const InventoryGroupList = S.Array(InventoryGroup);
export const OpsAggregatorValueMap = S.Record({key: S.String, value: S.String});
export const ComplianceItemDetails = S.Record({key: S.String, value: S.String});
export const InventoryItemContentContext = S.Record({key: S.String, value: S.String});
export class AutomationExecutionInputs extends S.Class<AutomationExecutionInputs>("AutomationExecutionInputs")({Parameters: S.optional(AutomationParameterMap), TargetParameterName: S.optional(S.String), Targets: S.optional(Targets), TargetMaps: S.optional(TargetMaps), TargetLocations: S.optional(TargetLocations), TargetLocationsURL: S.optional(S.String)}) {}
export class DocumentReviewCommentSource extends S.Class<DocumentReviewCommentSource>("DocumentReviewCommentSource")({Type: S.optional(S.String), Content: S.optional(S.String)}) {}
export const DocumentReviewCommentList = S.Array(DocumentReviewCommentSource);
export const AssociationDescriptionList = S.Array(AssociationDescription);
export class ResourceDataSyncS3Destination extends S.Class<ResourceDataSyncS3Destination>("ResourceDataSyncS3Destination")({BucketName: S.String, Prefix: S.optional(S.String), SyncFormat: S.String, Region: S.String, AWSKMSKeyARN: S.optional(S.String), DestinationDataSharing: S.optional(ResourceDataSyncDestinationDataSharing)}) {}
export const PatchAdvisoryIdList = S.Array(S.String);
export const PatchBugzillaIdList = S.Array(S.String);
export const PatchCVEIdList = S.Array(S.String);
export class Patch extends S.Class<Patch>("Patch")({Id: S.optional(S.String), ReleaseDate: S.optional(S.Date), Title: S.optional(S.String), Description: S.optional(S.String), ContentUrl: S.optional(S.String), Vendor: S.optional(S.String), ProductFamily: S.optional(S.String), Product: S.optional(S.String), Classification: S.optional(S.String), MsrcSeverity: S.optional(S.String), KbNumber: S.optional(S.String), MsrcNumber: S.optional(S.String), Language: S.optional(S.String), AdvisoryIds: S.optional(PatchAdvisoryIdList), BugzillaIds: S.optional(PatchBugzillaIdList), CVEIds: S.optional(PatchCVEIdList), Name: S.optional(S.String), Epoch: S.optional(S.Number), Version: S.optional(S.String), Release: S.optional(S.String), Arch: S.optional(S.String), Severity: S.optional(S.String), Repository: S.optional(S.String)}) {}
export const PatchList = S.Array(Patch);
export class AccountSharingInfo extends S.Class<AccountSharingInfo>("AccountSharingInfo")({AccountId: S.optional(S.String), SharedDocumentVersion: S.optional(S.String)}) {}
export const AccountSharingInfoList = S.Array(AccountSharingInfo);
export class InstanceAssociation extends S.Class<InstanceAssociation>("InstanceAssociation")({AssociationId: S.optional(S.String), InstanceId: S.optional(S.String), Content: S.optional(S.String), AssociationVersion: S.optional(S.String)}) {}
export const InstanceAssociationList = S.Array(InstanceAssociation);
export class PatchComplianceData extends S.Class<PatchComplianceData>("PatchComplianceData")({Title: S.String, KBId: S.String, Classification: S.String, Severity: S.String, State: S.String, InstalledTime: S.Date, CVEIds: S.optional(S.String)}) {}
export const PatchComplianceDataList = S.Array(PatchComplianceData);
export class InstancePatchState extends S.Class<InstancePatchState>("InstancePatchState")({InstanceId: S.String, PatchGroup: S.String, BaselineId: S.String, SnapshotId: S.optional(S.String), InstallOverrideList: S.optional(S.String), OwnerInformation: S.optional(S.String), InstalledCount: S.optional(S.Number), InstalledOtherCount: S.optional(S.Number), InstalledPendingRebootCount: S.optional(S.Number), InstalledRejectedCount: S.optional(S.Number), MissingCount: S.optional(S.Number), FailedCount: S.optional(S.Number), UnreportedNotApplicableCount: S.optional(S.Number), NotApplicableCount: S.optional(S.Number), AvailableSecurityUpdateCount: S.optional(S.Number), OperationStartTime: S.Date, OperationEndTime: S.Date, Operation: S.String, LastNoRebootInstallOperationTime: S.optional(S.Date), RebootOption: S.optional(S.String), CriticalNonCompliantCount: S.optional(S.Number), SecurityNonCompliantCount: S.optional(S.Number), OtherNonCompliantCount: S.optional(S.Number)}) {}
export const InstancePatchStateList = S.Array(InstancePatchState);
export const InstancePatchStatesList = S.Array(InstancePatchState);
export class InventoryDeletionSummaryItem extends S.Class<InventoryDeletionSummaryItem>("InventoryDeletionSummaryItem")({Version: S.optional(S.String), Count: S.optional(S.Number), RemainingCount: S.optional(S.Number)}) {}
export const InventoryDeletionSummaryItems = S.Array(InventoryDeletionSummaryItem);
export class InventoryDeletionSummary extends S.Class<InventoryDeletionSummary>("InventoryDeletionSummary")({TotalCount: S.optional(S.Number), RemainingCount: S.optional(S.Number), SummaryItems: S.optional(InventoryDeletionSummaryItems)}) {}
export class InventoryDeletionStatusItem extends S.Class<InventoryDeletionStatusItem>("InventoryDeletionStatusItem")({DeletionId: S.optional(S.String), TypeName: S.optional(S.String), DeletionStartTime: S.optional(S.Date), LastStatus: S.optional(S.String), LastStatusMessage: S.optional(S.String), DeletionSummary: S.optional(InventoryDeletionSummary), LastStatusUpdateTime: S.optional(S.Date)}) {}
export const InventoryDeletionsList = S.Array(InventoryDeletionStatusItem);
export class MaintenanceWindowExecutionTaskInvocationIdentity extends S.Class<MaintenanceWindowExecutionTaskInvocationIdentity>("MaintenanceWindowExecutionTaskInvocationIdentity")({WindowExecutionId: S.optional(S.String), TaskExecutionId: S.optional(S.String), InvocationId: S.optional(S.String), ExecutionId: S.optional(S.String), TaskType: S.optional(S.String), Parameters: S.optional(S.String), Status: S.optional(S.String), StatusDetails: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), OwnerInformation: S.optional(S.String), WindowTargetId: S.optional(S.String)}) {}
export const MaintenanceWindowExecutionTaskInvocationIdentityList = S.Array(MaintenanceWindowExecutionTaskInvocationIdentity);
export class MaintenanceWindowExecutionTaskIdentity extends S.Class<MaintenanceWindowExecutionTaskIdentity>("MaintenanceWindowExecutionTaskIdentity")({WindowExecutionId: S.optional(S.String), TaskExecutionId: S.optional(S.String), Status: S.optional(S.String), StatusDetails: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), TaskArn: S.optional(S.String), TaskType: S.optional(S.String), AlarmConfiguration: S.optional(AlarmConfiguration), TriggeredAlarms: S.optional(AlarmStateInformationList)}) {}
export const MaintenanceWindowExecutionTaskIdentityList = S.Array(MaintenanceWindowExecutionTaskIdentity);
export class MaintenanceWindowIdentity extends S.Class<MaintenanceWindowIdentity>("MaintenanceWindowIdentity")({WindowId: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), Enabled: S.optional(S.Boolean), Duration: S.optional(S.Number), Cutoff: S.optional(S.Number), Schedule: S.optional(S.String), ScheduleTimezone: S.optional(S.String), ScheduleOffset: S.optional(S.Number), EndDate: S.optional(S.String), StartDate: S.optional(S.String), NextExecutionTime: S.optional(S.String)}) {}
export const MaintenanceWindowIdentityList = S.Array(MaintenanceWindowIdentity);
export class ScheduledWindowExecution extends S.Class<ScheduledWindowExecution>("ScheduledWindowExecution")({WindowId: S.optional(S.String), Name: S.optional(S.String), ExecutionTime: S.optional(S.String)}) {}
export const ScheduledWindowExecutionList = S.Array(ScheduledWindowExecution);
export class MaintenanceWindowIdentityForTarget extends S.Class<MaintenanceWindowIdentityForTarget>("MaintenanceWindowIdentityForTarget")({WindowId: S.optional(S.String), Name: S.optional(S.String)}) {}
export const MaintenanceWindowsForTargetList = S.Array(MaintenanceWindowIdentityForTarget);
export class MaintenanceWindowTarget extends S.Class<MaintenanceWindowTarget>("MaintenanceWindowTarget")({WindowId: S.optional(S.String), WindowTargetId: S.optional(S.String), ResourceType: S.optional(S.String), Targets: S.optional(Targets), OwnerInformation: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String)}) {}
export const MaintenanceWindowTargetList = S.Array(MaintenanceWindowTarget);
export class MaintenanceWindowTask extends S.Class<MaintenanceWindowTask>("MaintenanceWindowTask")({WindowId: S.optional(S.String), WindowTaskId: S.optional(S.String), TaskArn: S.optional(S.String), Type: S.optional(S.String), Targets: S.optional(Targets), TaskParameters: S.optional(MaintenanceWindowTaskParameters), Priority: S.optional(S.Number), LoggingInfo: S.optional(LoggingInfo), ServiceRoleArn: S.optional(S.String), MaxConcurrency: S.optional(S.String), MaxErrors: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), CutoffBehavior: S.optional(S.String), AlarmConfiguration: S.optional(AlarmConfiguration)}) {}
export const MaintenanceWindowTaskList = S.Array(MaintenanceWindowTask);
export class PatchBaselineIdentity extends S.Class<PatchBaselineIdentity>("PatchBaselineIdentity")({BaselineId: S.optional(S.String), BaselineName: S.optional(S.String), OperatingSystem: S.optional(S.String), BaselineDescription: S.optional(S.String), DefaultBaseline: S.optional(S.Boolean)}) {}
export const PatchBaselineIdentityList = S.Array(PatchBaselineIdentity);
export class PatchGroupPatchBaselineMapping extends S.Class<PatchGroupPatchBaselineMapping>("PatchGroupPatchBaselineMapping")({PatchGroup: S.optional(S.String), BaselineIdentity: S.optional(PatchBaselineIdentity)}) {}
export const PatchGroupPatchBaselineMappingList = S.Array(PatchGroupPatchBaselineMapping);
export const PatchPropertyEntry = S.Record({key: S.String, value: S.String});
export const PatchPropertiesList = S.Array(PatchPropertyEntry);
export class Credentials extends S.Class<Credentials>("Credentials")({AccessKeyId: S.String, SecretAccessKey: S.String, SessionToken: S.String, ExpirationTime: S.Date}) {}
export class AttachmentContent extends S.Class<AttachmentContent>("AttachmentContent")({Name: S.optional(S.String), Size: S.optional(S.Number), Hash: S.optional(S.String), HashType: S.optional(S.String), Url: S.optional(S.String)}) {}
export const AttachmentContentList = S.Array(AttachmentContent);
export class InventoryAggregator extends S.Class<InventoryAggregator>("InventoryAggregator")({Expression: S.optional(S.String), Aggregators: S.optional(S.suspend(() => InventoryAggregatorList)), Groups: S.optional(InventoryGroupList)}) {}
export type InventoryAggregatorList = InventoryAggregator[];
export const InventoryAggregatorList = S.Array(S.suspend((): S.Schema<InventoryAggregator, any> => InventoryAggregator)) as any as S.Schema<InventoryAggregatorList>;
export class OpsItem extends S.Class<OpsItem>("OpsItem")({CreatedBy: S.optional(S.String), OpsItemType: S.optional(S.String), CreatedTime: S.optional(S.Date), Description: S.optional(S.String), LastModifiedBy: S.optional(S.String), LastModifiedTime: S.optional(S.Date), Notifications: S.optional(OpsItemNotifications), Priority: S.optional(S.Number), RelatedOpsItems: S.optional(RelatedOpsItems), Status: S.optional(S.String), OpsItemId: S.optional(S.String), Version: S.optional(S.String), Title: S.optional(S.String), Source: S.optional(S.String), OperationalData: S.optional(OpsItemOperationalData), Category: S.optional(S.String), Severity: S.optional(S.String), ActualStartTime: S.optional(S.Date), ActualEndTime: S.optional(S.Date), PlannedStartTime: S.optional(S.Date), PlannedEndTime: S.optional(S.Date), OpsItemArn: S.optional(S.String)}) {}
export class OpsAggregator extends S.Class<OpsAggregator>("OpsAggregator")({AggregatorType: S.optional(S.String), TypeName: S.optional(S.String), AttributeName: S.optional(S.String), Values: S.optional(OpsAggregatorValueMap), Filters: S.optional(OpsFilterList), Aggregators: S.optional(S.suspend(() => OpsAggregatorList))}) {}
export type OpsAggregatorList = OpsAggregator[];
export const OpsAggregatorList = S.Array(S.suspend((): S.Schema<OpsAggregator, any> => OpsAggregator)) as any as S.Schema<OpsAggregatorList>;
export class GetResourcePoliciesResponseEntry extends S.Class<GetResourcePoliciesResponseEntry>("GetResourcePoliciesResponseEntry")({PolicyId: S.optional(S.String), PolicyHash: S.optional(S.String), Policy: S.optional(S.String)}) {}
export const GetResourcePoliciesResponseEntries = S.Array(GetResourcePoliciesResponseEntry);
export class AssociationVersionInfo extends S.Class<AssociationVersionInfo>("AssociationVersionInfo")({AssociationId: S.optional(S.String), AssociationVersion: S.optional(S.String), CreatedDate: S.optional(S.Date), Name: S.optional(S.String), DocumentVersion: S.optional(S.String), Parameters: S.optional(Parameters), Targets: S.optional(Targets), ScheduleExpression: S.optional(S.String), OutputLocation: S.optional(InstanceAssociationOutputLocation), AssociationName: S.optional(S.String), MaxErrors: S.optional(S.String), MaxConcurrency: S.optional(S.String), ComplianceSeverity: S.optional(S.String), SyncCompliance: S.optional(S.String), ApplyOnlyAtCronInterval: S.optional(S.Boolean), CalendarNames: S.optional(CalendarNameOrARNList), TargetLocations: S.optional(TargetLocations), ScheduleOffset: S.optional(S.Number), Duration: S.optional(S.Number), TargetMaps: S.optional(TargetMaps)}) {}
export const AssociationVersionList = S.Array(AssociationVersionInfo);
export class Command extends S.Class<Command>("Command")({CommandId: S.optional(S.String), DocumentName: S.optional(S.String), DocumentVersion: S.optional(S.String), Comment: S.optional(S.String), ExpiresAfter: S.optional(S.Date), Parameters: S.optional(Parameters), InstanceIds: S.optional(InstanceIdList), Targets: S.optional(Targets), RequestedDateTime: S.optional(S.Date), Status: S.optional(S.String), StatusDetails: S.optional(S.String), OutputS3Region: S.optional(S.String), OutputS3BucketName: S.optional(S.String), OutputS3KeyPrefix: S.optional(S.String), MaxConcurrency: S.optional(S.String), MaxErrors: S.optional(S.String), TargetCount: S.optional(S.Number), CompletedCount: S.optional(S.Number), ErrorCount: S.optional(S.Number), DeliveryTimedOutCount: S.optional(S.Number), ServiceRole: S.optional(S.String), NotificationConfig: S.optional(NotificationConfig), CloudWatchOutputConfig: S.optional(CloudWatchOutputConfig), TimeoutSeconds: S.optional(S.Number), AlarmConfiguration: S.optional(AlarmConfiguration), TriggeredAlarms: S.optional(AlarmStateInformationList)}) {}
export const CommandList = S.Array(Command);
export class DocumentVersionInfo extends S.Class<DocumentVersionInfo>("DocumentVersionInfo")({Name: S.optional(S.String), DisplayName: S.optional(S.String), DocumentVersion: S.optional(S.String), VersionName: S.optional(S.String), CreatedDate: S.optional(S.Date), IsDefaultVersion: S.optional(S.Boolean), DocumentFormat: S.optional(S.String), Status: S.optional(S.String), StatusInformation: S.optional(S.String), ReviewStatus: S.optional(S.String)}) {}
export const DocumentVersionList = S.Array(DocumentVersionInfo);
export class SeveritySummary extends S.Class<SeveritySummary>("SeveritySummary")({CriticalCount: S.optional(S.Number), HighCount: S.optional(S.Number), MediumCount: S.optional(S.Number), LowCount: S.optional(S.Number), InformationalCount: S.optional(S.Number), UnspecifiedCount: S.optional(S.Number)}) {}
export class CompliantSummary extends S.Class<CompliantSummary>("CompliantSummary")({CompliantCount: S.optional(S.Number), SeveritySummary: S.optional(SeveritySummary)}) {}
export class NonCompliantSummary extends S.Class<NonCompliantSummary>("NonCompliantSummary")({NonCompliantCount: S.optional(S.Number), SeveritySummary: S.optional(SeveritySummary)}) {}
export class ResourceComplianceSummaryItem extends S.Class<ResourceComplianceSummaryItem>("ResourceComplianceSummaryItem")({ComplianceType: S.optional(S.String), ResourceType: S.optional(S.String), ResourceId: S.optional(S.String), Status: S.optional(S.String), OverallSeverity: S.optional(S.String), ExecutionSummary: S.optional(ComplianceExecutionSummary), CompliantSummary: S.optional(CompliantSummary), NonCompliantSummary: S.optional(NonCompliantSummary)}) {}
export const ResourceComplianceSummaryItemList = S.Array(ResourceComplianceSummaryItem);
export class ComplianceItemEntry extends S.Class<ComplianceItemEntry>("ComplianceItemEntry")({Id: S.optional(S.String), Title: S.optional(S.String), Severity: S.String, Status: S.String, Details: S.optional(ComplianceItemDetails)}) {}
export const ComplianceItemEntryList = S.Array(ComplianceItemEntry);
export class InventoryItem extends S.Class<InventoryItem>("InventoryItem")({TypeName: S.String, SchemaVersion: S.String, CaptureTime: S.String, ContentHash: S.optional(S.String), Content: S.optional(InventoryItemEntryList), Context: S.optional(InventoryItemContentContext)}) {}
export const InventoryItemList = S.Array(InventoryItem);
export const ExecutionInputs = S.Union(AutomationExecutionInputs);
export class DocumentDefaultVersionDescription extends S.Class<DocumentDefaultVersionDescription>("DocumentDefaultVersionDescription")({Name: S.optional(S.String), DefaultVersion: S.optional(S.String), DefaultVersionName: S.optional(S.String)}) {}
export class DocumentReviews extends S.Class<DocumentReviews>("DocumentReviews")({Action: S.String, Comment: S.optional(DocumentReviewCommentList)}) {}
export const ValidNextStepList = S.Array(S.String);
export const TargetParameterList = S.Array(S.String);
export const RegionList = S.Array(S.String);
export class CreateActivationResult extends S.Class<CreateActivationResult>("CreateActivationResult")({ActivationId: S.optional(S.String), ActivationCode: S.optional(S.String)}) {}
export class CreateAssociationRequest extends S.Class<CreateAssociationRequest>("CreateAssociationRequest")({Name: S.String, DocumentVersion: S.optional(S.String), InstanceId: S.optional(S.String), Parameters: S.optional(Parameters), Targets: S.optional(Targets), ScheduleExpression: S.optional(S.String), OutputLocation: S.optional(InstanceAssociationOutputLocation), AssociationName: S.optional(S.String), AutomationTargetParameterName: S.optional(S.String), MaxErrors: S.optional(S.String), MaxConcurrency: S.optional(S.String), ComplianceSeverity: S.optional(S.String), SyncCompliance: S.optional(S.String), ApplyOnlyAtCronInterval: S.optional(S.Boolean), CalendarNames: S.optional(CalendarNameOrARNList), TargetLocations: S.optional(TargetLocations), ScheduleOffset: S.optional(S.Number), Duration: S.optional(S.Number), TargetMaps: S.optional(TargetMaps), Tags: S.optional(TagList), AlarmConfiguration: S.optional(AlarmConfiguration)}) {}
export class CreateDocumentResult extends S.Class<CreateDocumentResult>("CreateDocumentResult")({DocumentDescription: S.optional(DocumentDescription)}) {}
export class CreateOpsItemRequest extends S.Class<CreateOpsItemRequest>("CreateOpsItemRequest")({Description: S.String, OpsItemType: S.optional(S.String), OperationalData: S.optional(OpsItemOperationalData), Notifications: S.optional(OpsItemNotifications), Priority: S.optional(S.Number), RelatedOpsItems: S.optional(RelatedOpsItems), Source: S.String, Title: S.String, Tags: S.optional(TagList), Category: S.optional(S.String), Severity: S.optional(S.String), ActualStartTime: S.optional(S.Date), ActualEndTime: S.optional(S.Date), PlannedStartTime: S.optional(S.Date), PlannedEndTime: S.optional(S.Date), AccountId: S.optional(S.String)}) {}
export class CreateOpsMetadataRequest extends S.Class<CreateOpsMetadataRequest>("CreateOpsMetadataRequest")({ResourceId: S.String, Metadata: S.optional(MetadataMap), Tags: S.optional(TagList)}) {}
export class CreatePatchBaselineRequest extends S.Class<CreatePatchBaselineRequest>("CreatePatchBaselineRequest")({OperatingSystem: S.optional(S.String), Name: S.String, GlobalFilters: S.optional(PatchFilterGroup), ApprovalRules: S.optional(PatchRuleGroup), ApprovedPatches: S.optional(PatchIdList), ApprovedPatchesComplianceLevel: S.optional(S.String), ApprovedPatchesEnableNonSecurity: S.optional(S.Boolean), RejectedPatches: S.optional(PatchIdList), RejectedPatchesAction: S.optional(S.String), Description: S.optional(S.String), Sources: S.optional(PatchSourceList), AvailableSecurityUpdatesComplianceStatus: S.optional(S.String), ClientToken: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const NormalStringMap = S.Record({key: S.String, value: S.String});
export class FailureDetails extends S.Class<FailureDetails>("FailureDetails")({FailureStage: S.optional(S.String), FailureType: S.optional(S.String), Details: S.optional(AutomationParameterMap)}) {}
export class ParentStepDetails extends S.Class<ParentStepDetails>("ParentStepDetails")({StepExecutionId: S.optional(S.String), StepName: S.optional(S.String), Action: S.optional(S.String), Iteration: S.optional(S.Number), IteratorValue: S.optional(S.String)}) {}
export class StepExecution extends S.Class<StepExecution>("StepExecution")({StepName: S.optional(S.String), Action: S.optional(S.String), TimeoutSeconds: S.optional(S.Number), OnFailure: S.optional(S.String), MaxAttempts: S.optional(S.Number), ExecutionStartTime: S.optional(S.Date), ExecutionEndTime: S.optional(S.Date), StepStatus: S.optional(S.String), ResponseCode: S.optional(S.String), Inputs: S.optional(NormalStringMap), Outputs: S.optional(AutomationParameterMap), Response: S.optional(S.String), FailureMessage: S.optional(S.String), FailureDetails: S.optional(FailureDetails), StepExecutionId: S.optional(S.String), OverriddenParameters: S.optional(AutomationParameterMap), IsEnd: S.optional(S.Boolean), NextStep: S.optional(S.String), IsCritical: S.optional(S.Boolean), ValidNextSteps: S.optional(ValidNextStepList), Targets: S.optional(Targets), TargetLocation: S.optional(TargetLocation), TriggeredAlarms: S.optional(AlarmStateInformationList), ParentStepDetails: S.optional(ParentStepDetails)}) {}
export const StepExecutionList = S.Array(StepExecution);
export class DescribeAutomationStepExecutionsResult extends S.Class<DescribeAutomationStepExecutionsResult>("DescribeAutomationStepExecutionsResult")({StepExecutions: S.optional(StepExecutionList), NextToken: S.optional(S.String)}) {}
export class DescribeAvailablePatchesResult extends S.Class<DescribeAvailablePatchesResult>("DescribeAvailablePatchesResult")({Patches: S.optional(PatchList), NextToken: S.optional(S.String)}) {}
export class DescribeDocumentPermissionResponse extends S.Class<DescribeDocumentPermissionResponse>("DescribeDocumentPermissionResponse")({AccountIds: S.optional(AccountIdList), AccountSharingInfoList: S.optional(AccountSharingInfoList), NextToken: S.optional(S.String)}) {}
export class DescribeEffectiveInstanceAssociationsResult extends S.Class<DescribeEffectiveInstanceAssociationsResult>("DescribeEffectiveInstanceAssociationsResult")({Associations: S.optional(InstanceAssociationList), NextToken: S.optional(S.String)}) {}
export class DescribeInstancePatchesResult extends S.Class<DescribeInstancePatchesResult>("DescribeInstancePatchesResult")({Patches: S.optional(PatchComplianceDataList), NextToken: S.optional(S.String)}) {}
export class DescribeInstancePatchStatesResult extends S.Class<DescribeInstancePatchStatesResult>("DescribeInstancePatchStatesResult")({InstancePatchStates: S.optional(InstancePatchStateList), NextToken: S.optional(S.String)}) {}
export class DescribeInstancePatchStatesForPatchGroupResult extends S.Class<DescribeInstancePatchStatesForPatchGroupResult>("DescribeInstancePatchStatesForPatchGroupResult")({InstancePatchStates: S.optional(InstancePatchStatesList), NextToken: S.optional(S.String)}) {}
export class DescribeInventoryDeletionsResult extends S.Class<DescribeInventoryDeletionsResult>("DescribeInventoryDeletionsResult")({InventoryDeletions: S.optional(InventoryDeletionsList), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowExecutionTaskInvocationsResult extends S.Class<DescribeMaintenanceWindowExecutionTaskInvocationsResult>("DescribeMaintenanceWindowExecutionTaskInvocationsResult")({WindowExecutionTaskInvocationIdentities: S.optional(MaintenanceWindowExecutionTaskInvocationIdentityList), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowExecutionTasksResult extends S.Class<DescribeMaintenanceWindowExecutionTasksResult>("DescribeMaintenanceWindowExecutionTasksResult")({WindowExecutionTaskIdentities: S.optional(MaintenanceWindowExecutionTaskIdentityList), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowsResult extends S.Class<DescribeMaintenanceWindowsResult>("DescribeMaintenanceWindowsResult")({WindowIdentities: S.optional(MaintenanceWindowIdentityList), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowScheduleResult extends S.Class<DescribeMaintenanceWindowScheduleResult>("DescribeMaintenanceWindowScheduleResult")({ScheduledWindowExecutions: S.optional(ScheduledWindowExecutionList), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowsForTargetResult extends S.Class<DescribeMaintenanceWindowsForTargetResult>("DescribeMaintenanceWindowsForTargetResult")({WindowIdentities: S.optional(MaintenanceWindowsForTargetList), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowTargetsResult extends S.Class<DescribeMaintenanceWindowTargetsResult>("DescribeMaintenanceWindowTargetsResult")({Targets: S.optional(MaintenanceWindowTargetList), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowTasksResult extends S.Class<DescribeMaintenanceWindowTasksResult>("DescribeMaintenanceWindowTasksResult")({Tasks: S.optional(MaintenanceWindowTaskList), NextToken: S.optional(S.String)}) {}
export class DescribePatchBaselinesResult extends S.Class<DescribePatchBaselinesResult>("DescribePatchBaselinesResult")({BaselineIdentities: S.optional(PatchBaselineIdentityList), NextToken: S.optional(S.String)}) {}
export class DescribePatchGroupsResult extends S.Class<DescribePatchGroupsResult>("DescribePatchGroupsResult")({Mappings: S.optional(PatchGroupPatchBaselineMappingList), NextToken: S.optional(S.String)}) {}
export class DescribePatchPropertiesResult extends S.Class<DescribePatchPropertiesResult>("DescribePatchPropertiesResult")({Properties: S.optional(PatchPropertiesList), NextToken: S.optional(S.String)}) {}
export class GetAccessTokenResponse extends S.Class<GetAccessTokenResponse>("GetAccessTokenResponse")({Credentials: S.optional(Credentials), AccessRequestStatus: S.optional(S.String)}) {}
export class GetDeployablePatchSnapshotForInstanceResult extends S.Class<GetDeployablePatchSnapshotForInstanceResult>("GetDeployablePatchSnapshotForInstanceResult")({InstanceId: S.optional(S.String), SnapshotId: S.optional(S.String), SnapshotDownloadUrl: S.optional(S.String), Product: S.optional(S.String)}) {}
export class GetDocumentResult extends S.Class<GetDocumentResult>("GetDocumentResult")({Name: S.optional(S.String), CreatedDate: S.optional(S.Date), DisplayName: S.optional(S.String), VersionName: S.optional(S.String), DocumentVersion: S.optional(S.String), Status: S.optional(S.String), StatusInformation: S.optional(S.String), Content: S.optional(S.String), DocumentType: S.optional(S.String), DocumentFormat: S.optional(S.String), Requires: S.optional(DocumentRequiresList), AttachmentsContent: S.optional(AttachmentContentList), ReviewStatus: S.optional(S.String)}) {}
export class GetInventoryRequest extends S.Class<GetInventoryRequest>("GetInventoryRequest")({Filters: S.optional(InventoryFilterList), Aggregators: S.optional(InventoryAggregatorList), ResultAttributes: S.optional(ResultAttributeList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class GetMaintenanceWindowExecutionTaskResult extends S.Class<GetMaintenanceWindowExecutionTaskResult>("GetMaintenanceWindowExecutionTaskResult")({WindowExecutionId: S.optional(S.String), TaskExecutionId: S.optional(S.String), TaskArn: S.optional(S.String), ServiceRole: S.optional(S.String), Type: S.optional(S.String), TaskParameters: S.optional(MaintenanceWindowTaskParametersList), Priority: S.optional(S.Number), MaxConcurrency: S.optional(S.String), MaxErrors: S.optional(S.String), Status: S.optional(S.String), StatusDetails: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), AlarmConfiguration: S.optional(AlarmConfiguration), TriggeredAlarms: S.optional(AlarmStateInformationList)}) {}
export class GetOpsItemResponse extends S.Class<GetOpsItemResponse>("GetOpsItemResponse")({OpsItem: S.optional(OpsItem)}) {}
export class GetOpsSummaryRequest extends S.Class<GetOpsSummaryRequest>("GetOpsSummaryRequest")({SyncName: S.optional(S.String), Filters: S.optional(OpsFilterList), Aggregators: S.optional(OpsAggregatorList), ResultAttributes: S.optional(OpsResultAttributeList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class GetParameterResult extends S.Class<GetParameterResult>("GetParameterResult")({Parameter: S.optional(Parameter)}) {}
export class GetResourcePoliciesResponse extends S.Class<GetResourcePoliciesResponse>("GetResourcePoliciesResponse")({NextToken: S.optional(S.String), Policies: S.optional(GetResourcePoliciesResponseEntries)}) {}
export class GetServiceSettingResult extends S.Class<GetServiceSettingResult>("GetServiceSettingResult")({ServiceSetting: S.optional(ServiceSetting)}) {}
export class ListAssociationVersionsResult extends S.Class<ListAssociationVersionsResult>("ListAssociationVersionsResult")({AssociationVersions: S.optional(AssociationVersionList), NextToken: S.optional(S.String)}) {}
export class ListCommandsResult extends S.Class<ListCommandsResult>("ListCommandsResult")({Commands: S.optional(CommandList), NextToken: S.optional(S.String)}) {}
export class ListDocumentVersionsResult extends S.Class<ListDocumentVersionsResult>("ListDocumentVersionsResult")({DocumentVersions: S.optional(DocumentVersionList), NextToken: S.optional(S.String)}) {}
export class ListResourceComplianceSummariesResult extends S.Class<ListResourceComplianceSummariesResult>("ListResourceComplianceSummariesResult")({ResourceComplianceSummaryItems: S.optional(ResourceComplianceSummaryItemList), NextToken: S.optional(S.String)}) {}
export class PutComplianceItemsRequest extends S.Class<PutComplianceItemsRequest>("PutComplianceItemsRequest")({ResourceId: S.String, ResourceType: S.String, ComplianceType: S.String, ExecutionSummary: ComplianceExecutionSummary, Items: ComplianceItemEntryList, ItemContentHash: S.optional(S.String), UploadType: S.optional(S.String)}) {}
export class PutComplianceItemsResult extends S.Class<PutComplianceItemsResult>("PutComplianceItemsResult")({}) {}
export class PutInventoryRequest extends S.Class<PutInventoryRequest>("PutInventoryRequest")({InstanceId: S.String, Items: InventoryItemList}) {}
export class RegisterTaskWithMaintenanceWindowRequest extends S.Class<RegisterTaskWithMaintenanceWindowRequest>("RegisterTaskWithMaintenanceWindowRequest")({WindowId: S.String, Targets: S.optional(Targets), TaskArn: S.String, ServiceRoleArn: S.optional(S.String), TaskType: S.String, TaskParameters: S.optional(MaintenanceWindowTaskParameters), TaskInvocationParameters: S.optional(MaintenanceWindowTaskInvocationParameters), Priority: S.optional(S.Number), MaxConcurrency: S.optional(S.String), MaxErrors: S.optional(S.String), LoggingInfo: S.optional(LoggingInfo), Name: S.optional(S.String), Description: S.optional(S.String), ClientToken: S.optional(S.String), CutoffBehavior: S.optional(S.String), AlarmConfiguration: S.optional(AlarmConfiguration)}) {}
export class SendCommandResult extends S.Class<SendCommandResult>("SendCommandResult")({Command: S.optional(Command)}) {}
export class StartChangeRequestExecutionResult extends S.Class<StartChangeRequestExecutionResult>("StartChangeRequestExecutionResult")({AutomationExecutionId: S.optional(S.String)}) {}
export class StartExecutionPreviewRequest extends S.Class<StartExecutionPreviewRequest>("StartExecutionPreviewRequest")({DocumentName: S.String, DocumentVersion: S.optional(S.String), ExecutionInputs: S.optional(ExecutionInputs)}) {}
export class StartSessionResponse extends S.Class<StartSessionResponse>("StartSessionResponse")({SessionId: S.optional(S.String), TokenValue: S.optional(S.String), StreamUrl: S.optional(S.String)}) {}
export class UpdateAssociationStatusResult extends S.Class<UpdateAssociationStatusResult>("UpdateAssociationStatusResult")({AssociationDescription: S.optional(AssociationDescription)}) {}
export class UpdateDocumentDefaultVersionResult extends S.Class<UpdateDocumentDefaultVersionResult>("UpdateDocumentDefaultVersionResult")({Description: S.optional(DocumentDefaultVersionDescription)}) {}
export class UpdateDocumentMetadataRequest extends S.Class<UpdateDocumentMetadataRequest>("UpdateDocumentMetadataRequest")({Name: S.String, DocumentVersion: S.optional(S.String), DocumentReviews: DocumentReviews}) {}
export class UpdateDocumentMetadataResponse extends S.Class<UpdateDocumentMetadataResponse>("UpdateDocumentMetadataResponse")({}) {}
export class PatchStatus extends S.Class<PatchStatus>("PatchStatus")({DeploymentStatus: S.optional(S.String), ComplianceLevel: S.optional(S.String), ApprovalDate: S.optional(S.Date)}) {}
export class ResolvedTargets extends S.Class<ResolvedTargets>("ResolvedTargets")({ParameterValues: S.optional(TargetParameterList), Truncated: S.optional(S.Boolean)}) {}
export class ProgressCounters extends S.Class<ProgressCounters>("ProgressCounters")({TotalSteps: S.optional(S.Number), SuccessSteps: S.optional(S.Number), FailedSteps: S.optional(S.Number), CancelledSteps: S.optional(S.Number), TimedOutSteps: S.optional(S.Number)}) {}
export class InventoryItemAttribute extends S.Class<InventoryItemAttribute>("InventoryItemAttribute")({Name: S.String, DataType: S.String}) {}
export const InventoryItemAttributeList = S.Array(InventoryItemAttribute);
export class ParameterInlinePolicy extends S.Class<ParameterInlinePolicy>("ParameterInlinePolicy")({PolicyText: S.optional(S.String), PolicyType: S.optional(S.String), PolicyStatus: S.optional(S.String)}) {}
export const ParameterPolicyList = S.Array(ParameterInlinePolicy);
export class DocumentReviewerResponseSource extends S.Class<DocumentReviewerResponseSource>("DocumentReviewerResponseSource")({CreateTime: S.optional(S.Date), UpdatedTime: S.optional(S.Date), ReviewStatus: S.optional(S.String), Comment: S.optional(DocumentReviewCommentList), Reviewer: S.optional(S.String)}) {}
export const DocumentReviewerResponseList = S.Array(DocumentReviewerResponseSource);
export class ResourceDataSyncSourceWithState extends S.Class<ResourceDataSyncSourceWithState>("ResourceDataSyncSourceWithState")({SourceType: S.optional(S.String), AwsOrganizationsSource: S.optional(ResourceDataSyncAwsOrganizationsSource), SourceRegions: S.optional(ResourceDataSyncSourceRegionList), IncludeFutureRegions: S.optional(S.Boolean), State: S.optional(S.String), EnableAllOpsDataSources: S.optional(S.Boolean)}) {}
export class FailedCreateAssociation extends S.Class<FailedCreateAssociation>("FailedCreateAssociation")({Entry: S.optional(CreateAssociationBatchRequestEntry), Message: S.optional(S.String), Fault: S.optional(S.String)}) {}
export const FailedCreateAssociationList = S.Array(FailedCreateAssociation);
export const ResourcePolicyParameterNamesList = S.Array(S.String);
export class Activation extends S.Class<Activation>("Activation")({ActivationId: S.optional(S.String), Description: S.optional(S.String), DefaultInstanceName: S.optional(S.String), IamRole: S.optional(S.String), RegistrationLimit: S.optional(S.Number), RegistrationsCount: S.optional(S.Number), ExpirationDate: S.optional(S.Date), Expired: S.optional(S.Boolean), CreatedDate: S.optional(S.Date), Tags: S.optional(TagList)}) {}
export const ActivationList = S.Array(Activation);
export class AssociationExecution extends S.Class<AssociationExecution>("AssociationExecution")({AssociationId: S.optional(S.String), AssociationVersion: S.optional(S.String), ExecutionId: S.optional(S.String), Status: S.optional(S.String), DetailedStatus: S.optional(S.String), CreatedTime: S.optional(S.Date), LastExecutionDate: S.optional(S.Date), ResourceCountByStatus: S.optional(S.String), AlarmConfiguration: S.optional(AlarmConfiguration), TriggeredAlarms: S.optional(AlarmStateInformationList)}) {}
export const AssociationExecutionsList = S.Array(AssociationExecution);
export class AutomationExecutionMetadata extends S.Class<AutomationExecutionMetadata>("AutomationExecutionMetadata")({AutomationExecutionId: S.optional(S.String), DocumentName: S.optional(S.String), DocumentVersion: S.optional(S.String), AutomationExecutionStatus: S.optional(S.String), ExecutionStartTime: S.optional(S.Date), ExecutionEndTime: S.optional(S.Date), ExecutedBy: S.optional(S.String), LogFile: S.optional(S.String), Outputs: S.optional(AutomationParameterMap), Mode: S.optional(S.String), ParentAutomationExecutionId: S.optional(S.String), CurrentStepName: S.optional(S.String), CurrentAction: S.optional(S.String), FailureMessage: S.optional(S.String), TargetParameterName: S.optional(S.String), Targets: S.optional(Targets), TargetMaps: S.optional(TargetMaps), ResolvedTargets: S.optional(ResolvedTargets), MaxConcurrency: S.optional(S.String), MaxErrors: S.optional(S.String), Target: S.optional(S.String), AutomationType: S.optional(S.String), AlarmConfiguration: S.optional(AlarmConfiguration), TriggeredAlarms: S.optional(AlarmStateInformationList), TargetLocationsURL: S.optional(S.String), AutomationSubtype: S.optional(S.String), ScheduledTime: S.optional(S.Date), Runbooks: S.optional(Runbooks), OpsItemId: S.optional(S.String), AssociationId: S.optional(S.String), ChangeRequestName: S.optional(S.String)}) {}
export const AutomationExecutionMetadataList = S.Array(AutomationExecutionMetadata);
export class EffectivePatch extends S.Class<EffectivePatch>("EffectivePatch")({Patch: S.optional(Patch), PatchStatus: S.optional(PatchStatus)}) {}
export const EffectivePatchList = S.Array(EffectivePatch);
export const InstanceAssociationStatusAggregatedCount = S.Record({key: S.String, value: S.Number});
export class InstanceAggregatedAssociationOverview extends S.Class<InstanceAggregatedAssociationOverview>("InstanceAggregatedAssociationOverview")({DetailedStatus: S.optional(S.String), InstanceAssociationStatusAggregatedCount: S.optional(InstanceAssociationStatusAggregatedCount)}) {}
export class InstanceProperty extends S.Class<InstanceProperty>("InstanceProperty")({Name: S.optional(S.String), InstanceId: S.optional(S.String), InstanceType: S.optional(S.String), InstanceRole: S.optional(S.String), KeyName: S.optional(S.String), InstanceState: S.optional(S.String), Architecture: S.optional(S.String), IPAddress: S.optional(S.String), LaunchTime: S.optional(S.Date), PingStatus: S.optional(S.String), LastPingDateTime: S.optional(S.Date), AgentVersion: S.optional(S.String), PlatformType: S.optional(S.String), PlatformName: S.optional(S.String), PlatformVersion: S.optional(S.String), ActivationId: S.optional(S.String), IamRole: S.optional(S.String), RegistrationDate: S.optional(S.Date), ResourceType: S.optional(S.String), ComputerName: S.optional(S.String), AssociationStatus: S.optional(S.String), LastAssociationExecutionDate: S.optional(S.Date), LastSuccessfulAssociationExecutionDate: S.optional(S.Date), AssociationOverview: S.optional(InstanceAggregatedAssociationOverview), SourceId: S.optional(S.String), SourceType: S.optional(S.String)}) {}
export const InstanceProperties = S.Array(InstanceProperty);
export class MaintenanceWindowExecution extends S.Class<MaintenanceWindowExecution>("MaintenanceWindowExecution")({WindowId: S.optional(S.String), WindowExecutionId: S.optional(S.String), Status: S.optional(S.String), StatusDetails: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date)}) {}
export const MaintenanceWindowExecutionList = S.Array(MaintenanceWindowExecution);
export class OpsItemSummary extends S.Class<OpsItemSummary>("OpsItemSummary")({CreatedBy: S.optional(S.String), CreatedTime: S.optional(S.Date), LastModifiedBy: S.optional(S.String), LastModifiedTime: S.optional(S.Date), Priority: S.optional(S.Number), Source: S.optional(S.String), Status: S.optional(S.String), OpsItemId: S.optional(S.String), Title: S.optional(S.String), OperationalData: S.optional(OpsItemOperationalData), Category: S.optional(S.String), Severity: S.optional(S.String), OpsItemType: S.optional(S.String), ActualStartTime: S.optional(S.Date), ActualEndTime: S.optional(S.Date), PlannedStartTime: S.optional(S.Date), PlannedEndTime: S.optional(S.Date)}) {}
export const OpsItemSummaries = S.Array(OpsItemSummary);
export class ParameterMetadata extends S.Class<ParameterMetadata>("ParameterMetadata")({Name: S.optional(S.String), ARN: S.optional(S.String), Type: S.optional(S.String), KeyId: S.optional(S.String), LastModifiedDate: S.optional(S.Date), LastModifiedUser: S.optional(S.String), Description: S.optional(S.String), AllowedPattern: S.optional(S.String), Version: S.optional(S.Number), Tier: S.optional(S.String), Policies: S.optional(ParameterPolicyList), DataType: S.optional(S.String)}) {}
export const ParameterMetadataList = S.Array(ParameterMetadata);
export class InventoryItemSchema extends S.Class<InventoryItemSchema>("InventoryItemSchema")({TypeName: S.String, Version: S.optional(S.String), Attributes: InventoryItemAttributeList, DisplayName: S.optional(S.String)}) {}
export const InventoryItemSchemaResultList = S.Array(InventoryItemSchema);
export class ParameterHistory extends S.Class<ParameterHistory>("ParameterHistory")({Name: S.optional(S.String), Type: S.optional(S.String), KeyId: S.optional(S.String), LastModifiedDate: S.optional(S.Date), LastModifiedUser: S.optional(S.String), Description: S.optional(S.String), Value: S.optional(S.String), AllowedPattern: S.optional(S.String), Version: S.optional(S.Number), Labels: S.optional(ParameterLabelList), Tier: S.optional(S.String), Policies: S.optional(ParameterPolicyList), DataType: S.optional(S.String)}) {}
export const ParameterHistoryList = S.Array(ParameterHistory);
export class Association extends S.Class<Association>("Association")({Name: S.optional(S.String), InstanceId: S.optional(S.String), AssociationId: S.optional(S.String), AssociationVersion: S.optional(S.String), DocumentVersion: S.optional(S.String), Targets: S.optional(Targets), LastExecutionDate: S.optional(S.Date), Overview: S.optional(AssociationOverview), ScheduleExpression: S.optional(S.String), AssociationName: S.optional(S.String), ScheduleOffset: S.optional(S.Number), Duration: S.optional(S.Number), TargetMaps: S.optional(TargetMaps)}) {}
export const AssociationList = S.Array(Association);
export class ComplianceItem extends S.Class<ComplianceItem>("ComplianceItem")({ComplianceType: S.optional(S.String), ResourceType: S.optional(S.String), ResourceId: S.optional(S.String), Id: S.optional(S.String), Title: S.optional(S.String), Status: S.optional(S.String), Severity: S.optional(S.String), ExecutionSummary: S.optional(ComplianceExecutionSummary), Details: S.optional(ComplianceItemDetails)}) {}
export const ComplianceItemList = S.Array(ComplianceItem);
export class DocumentMetadataResponseInfo extends S.Class<DocumentMetadataResponseInfo>("DocumentMetadataResponseInfo")({ReviewerResponse: S.optional(DocumentReviewerResponseList)}) {}
export class DocumentIdentifier extends S.Class<DocumentIdentifier>("DocumentIdentifier")({Name: S.optional(S.String), CreatedDate: S.optional(S.Date), DisplayName: S.optional(S.String), Owner: S.optional(S.String), VersionName: S.optional(S.String), PlatformTypes: S.optional(PlatformTypeList), DocumentVersion: S.optional(S.String), DocumentType: S.optional(S.String), SchemaVersion: S.optional(S.String), DocumentFormat: S.optional(S.String), TargetType: S.optional(S.String), Tags: S.optional(TagList), Requires: S.optional(DocumentRequiresList), ReviewStatus: S.optional(S.String), Author: S.optional(S.String)}) {}
export const DocumentIdentifierList = S.Array(DocumentIdentifier);
export const NodeSummary = S.Record({key: S.String, value: S.String});
export const NodeSummaryList = S.Array(NodeSummary);
export class OpsItemIdentity extends S.Class<OpsItemIdentity>("OpsItemIdentity")({Arn: S.optional(S.String)}) {}
export class OpsItemRelatedItemSummary extends S.Class<OpsItemRelatedItemSummary>("OpsItemRelatedItemSummary")({OpsItemId: S.optional(S.String), AssociationId: S.optional(S.String), ResourceType: S.optional(S.String), AssociationType: S.optional(S.String), ResourceUri: S.optional(S.String), CreatedBy: S.optional(OpsItemIdentity), CreatedTime: S.optional(S.Date), LastModifiedBy: S.optional(OpsItemIdentity), LastModifiedTime: S.optional(S.Date)}) {}
export const OpsItemRelatedItemSummaries = S.Array(OpsItemRelatedItemSummary);
export class OpsMetadata extends S.Class<OpsMetadata>("OpsMetadata")({ResourceId: S.optional(S.String), OpsMetadataArn: S.optional(S.String), LastModifiedDate: S.optional(S.Date), LastModifiedUser: S.optional(S.String), CreationDate: S.optional(S.Date)}) {}
export const OpsMetadataList = S.Array(OpsMetadata);
export class ResourceDataSyncItem extends S.Class<ResourceDataSyncItem>("ResourceDataSyncItem")({SyncName: S.optional(S.String), SyncType: S.optional(S.String), SyncSource: S.optional(ResourceDataSyncSourceWithState), S3Destination: S.optional(ResourceDataSyncS3Destination), LastSyncTime: S.optional(S.Date), LastSuccessfulSyncTime: S.optional(S.Date), SyncLastModifiedTime: S.optional(S.Date), LastStatus: S.optional(S.String), SyncCreatedTime: S.optional(S.Date), LastSyncStatusMessage: S.optional(S.String)}) {}
export const ResourceDataSyncItemList = S.Array(ResourceDataSyncItem);
export class S3OutputUrl extends S.Class<S3OutputUrl>("S3OutputUrl")({OutputUrl: S.optional(S.String)}) {}
export const StepPreviewMap = S.Record({key: S.String, value: S.Number});
export class TargetPreview extends S.Class<TargetPreview>("TargetPreview")({Count: S.optional(S.Number), TargetType: S.optional(S.String)}) {}
export const TargetPreviewList = S.Array(TargetPreview);
export class CreateAssociationResult extends S.Class<CreateAssociationResult>("CreateAssociationResult")({AssociationDescription: S.optional(AssociationDescription)}) {}
export class CreateAssociationBatchResult extends S.Class<CreateAssociationBatchResult>("CreateAssociationBatchResult")({Successful: S.optional(AssociationDescriptionList), Failed: S.optional(FailedCreateAssociationList)}) {}
export class CreateOpsItemResponse extends S.Class<CreateOpsItemResponse>("CreateOpsItemResponse")({OpsItemId: S.optional(S.String), OpsItemArn: S.optional(S.String)}) {}
export class CreateOpsMetadataResult extends S.Class<CreateOpsMetadataResult>("CreateOpsMetadataResult")({OpsMetadataArn: S.optional(S.String)}) {}
export class CreatePatchBaselineResult extends S.Class<CreatePatchBaselineResult>("CreatePatchBaselineResult")({BaselineId: S.optional(S.String)}) {}
export class CreateResourceDataSyncRequest extends S.Class<CreateResourceDataSyncRequest>("CreateResourceDataSyncRequest")({SyncName: S.String, S3Destination: S.optional(ResourceDataSyncS3Destination), SyncType: S.optional(S.String), SyncSource: S.optional(ResourceDataSyncSource)}) {}
export class CreateResourceDataSyncResult extends S.Class<CreateResourceDataSyncResult>("CreateResourceDataSyncResult")({}) {}
export class DeleteInventoryResult extends S.Class<DeleteInventoryResult>("DeleteInventoryResult")({DeletionId: S.optional(S.String), TypeName: S.optional(S.String), DeletionSummary: S.optional(InventoryDeletionSummary)}) {}
export class DescribeActivationsResult extends S.Class<DescribeActivationsResult>("DescribeActivationsResult")({ActivationList: S.optional(ActivationList), NextToken: S.optional(S.String)}) {}
export class DescribeAssociationExecutionsResult extends S.Class<DescribeAssociationExecutionsResult>("DescribeAssociationExecutionsResult")({AssociationExecutions: S.optional(AssociationExecutionsList), NextToken: S.optional(S.String)}) {}
export class DescribeAutomationExecutionsResult extends S.Class<DescribeAutomationExecutionsResult>("DescribeAutomationExecutionsResult")({AutomationExecutionMetadataList: S.optional(AutomationExecutionMetadataList), NextToken: S.optional(S.String)}) {}
export class DescribeDocumentResult extends S.Class<DescribeDocumentResult>("DescribeDocumentResult")({Document: S.optional(DocumentDescription)}) {}
export class DescribeEffectivePatchesForPatchBaselineResult extends S.Class<DescribeEffectivePatchesForPatchBaselineResult>("DescribeEffectivePatchesForPatchBaselineResult")({EffectivePatches: S.optional(EffectivePatchList), NextToken: S.optional(S.String)}) {}
export class DescribeInstancePropertiesResult extends S.Class<DescribeInstancePropertiesResult>("DescribeInstancePropertiesResult")({InstanceProperties: S.optional(InstanceProperties), NextToken: S.optional(S.String)}) {}
export class DescribeMaintenanceWindowExecutionsResult extends S.Class<DescribeMaintenanceWindowExecutionsResult>("DescribeMaintenanceWindowExecutionsResult")({WindowExecutions: S.optional(MaintenanceWindowExecutionList), NextToken: S.optional(S.String)}) {}
export class DescribeOpsItemsResponse extends S.Class<DescribeOpsItemsResponse>("DescribeOpsItemsResponse")({NextToken: S.optional(S.String), OpsItemSummaries: S.optional(OpsItemSummaries)}) {}
export class DescribeParametersResult extends S.Class<DescribeParametersResult>("DescribeParametersResult")({Parameters: S.optional(ParameterMetadataList), NextToken: S.optional(S.String)}) {}
export class GetInventorySchemaResult extends S.Class<GetInventorySchemaResult>("GetInventorySchemaResult")({Schemas: S.optional(InventoryItemSchemaResultList), NextToken: S.optional(S.String)}) {}
export class GetParameterHistoryResult extends S.Class<GetParameterHistoryResult>("GetParameterHistoryResult")({Parameters: S.optional(ParameterHistoryList), NextToken: S.optional(S.String)}) {}
export class ListAssociationsResult extends S.Class<ListAssociationsResult>("ListAssociationsResult")({Associations: S.optional(AssociationList), NextToken: S.optional(S.String)}) {}
export class ListComplianceItemsResult extends S.Class<ListComplianceItemsResult>("ListComplianceItemsResult")({ComplianceItems: S.optional(ComplianceItemList), NextToken: S.optional(S.String)}) {}
export class ListDocumentMetadataHistoryResponse extends S.Class<ListDocumentMetadataHistoryResponse>("ListDocumentMetadataHistoryResponse")({Name: S.optional(S.String), DocumentVersion: S.optional(S.String), Author: S.optional(S.String), Metadata: S.optional(DocumentMetadataResponseInfo), NextToken: S.optional(S.String)}) {}
export class ListDocumentsResult extends S.Class<ListDocumentsResult>("ListDocumentsResult")({DocumentIdentifiers: S.optional(DocumentIdentifierList), NextToken: S.optional(S.String)}) {}
export class ListNodesSummaryResult extends S.Class<ListNodesSummaryResult>("ListNodesSummaryResult")({Summary: S.optional(NodeSummaryList), NextToken: S.optional(S.String)}) {}
export class ListOpsItemRelatedItemsResponse extends S.Class<ListOpsItemRelatedItemsResponse>("ListOpsItemRelatedItemsResponse")({NextToken: S.optional(S.String), Summaries: S.optional(OpsItemRelatedItemSummaries)}) {}
export class ListOpsMetadataResult extends S.Class<ListOpsMetadataResult>("ListOpsMetadataResult")({OpsMetadataList: S.optional(OpsMetadataList), NextToken: S.optional(S.String)}) {}
export class ListResourceDataSyncResult extends S.Class<ListResourceDataSyncResult>("ListResourceDataSyncResult")({ResourceDataSyncItems: S.optional(ResourceDataSyncItemList), NextToken: S.optional(S.String)}) {}
export class PutInventoryResult extends S.Class<PutInventoryResult>("PutInventoryResult")({Message: S.optional(S.String)}) {}
export class RegisterTaskWithMaintenanceWindowResult extends S.Class<RegisterTaskWithMaintenanceWindowResult>("RegisterTaskWithMaintenanceWindowResult")({WindowTaskId: S.optional(S.String)}) {}
export class StartExecutionPreviewResponse extends S.Class<StartExecutionPreviewResponse>("StartExecutionPreviewResponse")({ExecutionPreviewId: S.optional(S.String)}) {}
export class OutputSource extends S.Class<OutputSource>("OutputSource")({OutputSourceId: S.optional(S.String), OutputSourceType: S.optional(S.String)}) {}
export class InstanceAssociationOutputUrl extends S.Class<InstanceAssociationOutputUrl>("InstanceAssociationOutputUrl")({S3OutputUrl: S.optional(S3OutputUrl)}) {}
export class SessionManagerOutputUrl extends S.Class<SessionManagerOutputUrl>("SessionManagerOutputUrl")({S3OutputUrl: S.optional(S.String), CloudWatchOutputUrl: S.optional(S.String)}) {}
export class AutomationExecutionPreview extends S.Class<AutomationExecutionPreview>("AutomationExecutionPreview")({StepPreviews: S.optional(StepPreviewMap), Regions: S.optional(RegionList), TargetPreviews: S.optional(TargetPreviewList), TotalAccounts: S.optional(S.Number)}) {}
export class CommandPlugin extends S.Class<CommandPlugin>("CommandPlugin")({Name: S.optional(S.String), Status: S.optional(S.String), StatusDetails: S.optional(S.String), ResponseCode: S.optional(S.Number), ResponseStartDateTime: S.optional(S.Date), ResponseFinishDateTime: S.optional(S.Date), Output: S.optional(S.String), StandardOutputUrl: S.optional(S.String), StandardErrorUrl: S.optional(S.String), OutputS3Region: S.optional(S.String), OutputS3BucketName: S.optional(S.String), OutputS3KeyPrefix: S.optional(S.String)}) {}
export const CommandPluginList = S.Array(CommandPlugin);
export class NodeOwnerInfo extends S.Class<NodeOwnerInfo>("NodeOwnerInfo")({AccountId: S.optional(S.String), OrganizationalUnitId: S.optional(S.String), OrganizationalUnitPath: S.optional(S.String)}) {}
export class AssociationExecutionTarget extends S.Class<AssociationExecutionTarget>("AssociationExecutionTarget")({AssociationId: S.optional(S.String), AssociationVersion: S.optional(S.String), ExecutionId: S.optional(S.String), ResourceId: S.optional(S.String), ResourceType: S.optional(S.String), Status: S.optional(S.String), DetailedStatus: S.optional(S.String), LastExecutionDate: S.optional(S.Date), OutputSource: S.optional(OutputSource)}) {}
export const AssociationExecutionTargetsList = S.Array(AssociationExecutionTarget);
export class InstanceAssociationStatusInfo extends S.Class<InstanceAssociationStatusInfo>("InstanceAssociationStatusInfo")({AssociationId: S.optional(S.String), Name: S.optional(S.String), DocumentVersion: S.optional(S.String), AssociationVersion: S.optional(S.String), InstanceId: S.optional(S.String), ExecutionDate: S.optional(S.Date), Status: S.optional(S.String), DetailedStatus: S.optional(S.String), ExecutionSummary: S.optional(S.String), ErrorCode: S.optional(S.String), OutputUrl: S.optional(InstanceAssociationOutputUrl), AssociationName: S.optional(S.String)}) {}
export const InstanceAssociationStatusInfos = S.Array(InstanceAssociationStatusInfo);
export class Session extends S.Class<Session>("Session")({SessionId: S.optional(S.String), Target: S.optional(S.String), Status: S.optional(S.String), StartDate: S.optional(S.Date), EndDate: S.optional(S.Date), DocumentName: S.optional(S.String), Owner: S.optional(S.String), Reason: S.optional(S.String), Details: S.optional(S.String), OutputUrl: S.optional(SessionManagerOutputUrl), MaxSessionDuration: S.optional(S.String), AccessType: S.optional(S.String)}) {}
export const SessionList = S.Array(Session);
export class AutomationExecution extends S.Class<AutomationExecution>("AutomationExecution")({AutomationExecutionId: S.optional(S.String), DocumentName: S.optional(S.String), DocumentVersion: S.optional(S.String), ExecutionStartTime: S.optional(S.Date), ExecutionEndTime: S.optional(S.Date), AutomationExecutionStatus: S.optional(S.String), StepExecutions: S.optional(StepExecutionList), StepExecutionsTruncated: S.optional(S.Boolean), Parameters: S.optional(AutomationParameterMap), Outputs: S.optional(AutomationParameterMap), FailureMessage: S.optional(S.String), Mode: S.optional(S.String), ParentAutomationExecutionId: S.optional(S.String), ExecutedBy: S.optional(S.String), CurrentStepName: S.optional(S.String), CurrentAction: S.optional(S.String), TargetParameterName: S.optional(S.String), Targets: S.optional(Targets), TargetMaps: S.optional(TargetMaps), ResolvedTargets: S.optional(ResolvedTargets), MaxConcurrency: S.optional(S.String), MaxErrors: S.optional(S.String), Target: S.optional(S.String), TargetLocations: S.optional(TargetLocations), ProgressCounters: S.optional(ProgressCounters), AlarmConfiguration: S.optional(AlarmConfiguration), TriggeredAlarms: S.optional(AlarmStateInformationList), TargetLocationsURL: S.optional(S.String), AutomationSubtype: S.optional(S.String), ScheduledTime: S.optional(S.Date), Runbooks: S.optional(Runbooks), OpsItemId: S.optional(S.String), AssociationId: S.optional(S.String), ChangeRequestName: S.optional(S.String), Variables: S.optional(AutomationParameterMap)}) {}
export const ExecutionPreview = S.Union(AutomationExecutionPreview);
export class CommandInvocation extends S.Class<CommandInvocation>("CommandInvocation")({CommandId: S.optional(S.String), InstanceId: S.optional(S.String), InstanceName: S.optional(S.String), Comment: S.optional(S.String), DocumentName: S.optional(S.String), DocumentVersion: S.optional(S.String), RequestedDateTime: S.optional(S.Date), Status: S.optional(S.String), StatusDetails: S.optional(S.String), TraceOutput: S.optional(S.String), StandardOutputUrl: S.optional(S.String), StandardErrorUrl: S.optional(S.String), CommandPlugins: S.optional(CommandPluginList), ServiceRole: S.optional(S.String), NotificationConfig: S.optional(NotificationConfig), CloudWatchOutputConfig: S.optional(CloudWatchOutputConfig)}) {}
export const CommandInvocationList = S.Array(CommandInvocation);
export class ComplianceSummaryItem extends S.Class<ComplianceSummaryItem>("ComplianceSummaryItem")({ComplianceType: S.optional(S.String), CompliantSummary: S.optional(CompliantSummary), NonCompliantSummary: S.optional(NonCompliantSummary)}) {}
export const ComplianceSummaryItemList = S.Array(ComplianceSummaryItem);
export class OpsItemEventSummary extends S.Class<OpsItemEventSummary>("OpsItemEventSummary")({OpsItemId: S.optional(S.String), EventId: S.optional(S.String), Source: S.optional(S.String), DetailType: S.optional(S.String), Detail: S.optional(S.String), CreatedBy: S.optional(OpsItemIdentity), CreatedTime: S.optional(S.Date)}) {}
export const OpsItemEventSummaries = S.Array(OpsItemEventSummary);
export class InstanceInfo extends S.Class<InstanceInfo>("InstanceInfo")({AgentType: S.optional(S.String), AgentVersion: S.optional(S.String), ComputerName: S.optional(S.String), InstanceStatus: S.optional(S.String), IpAddress: S.optional(S.String), ManagedStatus: S.optional(S.String), PlatformType: S.optional(S.String), PlatformName: S.optional(S.String), PlatformVersion: S.optional(S.String), ResourceType: S.optional(S.String)}) {}
export class DescribeAssociationResult extends S.Class<DescribeAssociationResult>("DescribeAssociationResult")({AssociationDescription: S.optional(AssociationDescription)}) {}
export class DescribeAssociationExecutionTargetsResult extends S.Class<DescribeAssociationExecutionTargetsResult>("DescribeAssociationExecutionTargetsResult")({AssociationExecutionTargets: S.optional(AssociationExecutionTargetsList), NextToken: S.optional(S.String)}) {}
export class DescribeInstanceAssociationsStatusResult extends S.Class<DescribeInstanceAssociationsStatusResult>("DescribeInstanceAssociationsStatusResult")({InstanceAssociationStatusInfos: S.optional(InstanceAssociationStatusInfos), NextToken: S.optional(S.String)}) {}
export class DescribeSessionsResponse extends S.Class<DescribeSessionsResponse>("DescribeSessionsResponse")({Sessions: S.optional(SessionList), NextToken: S.optional(S.String)}) {}
export class GetAutomationExecutionResult extends S.Class<GetAutomationExecutionResult>("GetAutomationExecutionResult")({AutomationExecution: S.optional(AutomationExecution)}) {}
export class GetExecutionPreviewResponse extends S.Class<GetExecutionPreviewResponse>("GetExecutionPreviewResponse")({ExecutionPreviewId: S.optional(S.String), EndedAt: S.optional(S.Date), Status: S.optional(S.String), StatusMessage: S.optional(S.String), ExecutionPreview: S.optional(ExecutionPreview)}) {}
export class ListCommandInvocationsResult extends S.Class<ListCommandInvocationsResult>("ListCommandInvocationsResult")({CommandInvocations: S.optional(CommandInvocationList), NextToken: S.optional(S.String)}) {}
export class ListComplianceSummariesResult extends S.Class<ListComplianceSummariesResult>("ListComplianceSummariesResult")({ComplianceSummaryItems: S.optional(ComplianceSummaryItemList), NextToken: S.optional(S.String)}) {}
export class ListOpsItemEventsResponse extends S.Class<ListOpsItemEventsResponse>("ListOpsItemEventsResponse")({NextToken: S.optional(S.String), Summaries: S.optional(OpsItemEventSummaries)}) {}
export const NodeType = S.Union(InstanceInfo);
export class InstanceInformation extends S.Class<InstanceInformation>("InstanceInformation")({InstanceId: S.optional(S.String), PingStatus: S.optional(S.String), LastPingDateTime: S.optional(S.Date), AgentVersion: S.optional(S.String), IsLatestVersion: S.optional(S.Boolean), PlatformType: S.optional(S.String), PlatformName: S.optional(S.String), PlatformVersion: S.optional(S.String), ActivationId: S.optional(S.String), IamRole: S.optional(S.String), RegistrationDate: S.optional(S.Date), ResourceType: S.optional(S.String), Name: S.optional(S.String), IPAddress: S.optional(S.String), ComputerName: S.optional(S.String), AssociationStatus: S.optional(S.String), LastAssociationExecutionDate: S.optional(S.Date), LastSuccessfulAssociationExecutionDate: S.optional(S.Date), AssociationOverview: S.optional(InstanceAggregatedAssociationOverview), SourceId: S.optional(S.String), SourceType: S.optional(S.String)}) {}
export const InstanceInformationList = S.Array(InstanceInformation);
export class Node extends S.Class<Node>("Node")({CaptureTime: S.optional(S.Date), Id: S.optional(S.String), Owner: S.optional(NodeOwnerInfo), Region: S.optional(S.String), NodeType: S.optional(NodeType)}) {}
export const NodeList = S.Array(Node);
export class InventoryResultItem extends S.Class<InventoryResultItem>("InventoryResultItem")({TypeName: S.String, SchemaVersion: S.String, CaptureTime: S.optional(S.String), ContentHash: S.optional(S.String), Content: InventoryItemEntryList}) {}
export class DescribeInstanceInformationResult extends S.Class<DescribeInstanceInformationResult>("DescribeInstanceInformationResult")({InstanceInformationList: S.optional(InstanceInformationList), NextToken: S.optional(S.String)}) {}
export class ListNodesResult extends S.Class<ListNodesResult>("ListNodesResult")({Nodes: S.optional(NodeList), NextToken: S.optional(S.String)}) {}
export const InventoryResultItemMap = S.Record({key: S.String, value: InventoryResultItem});
export const OpsEntityItemEntry = S.Record({key: S.String, value: S.String});
export const OpsEntityItemEntryList = S.Array(OpsEntityItemEntry);
export class InventoryResultEntity extends S.Class<InventoryResultEntity>("InventoryResultEntity")({Id: S.optional(S.String), Data: S.optional(InventoryResultItemMap)}) {}
export const InventoryResultEntityList = S.Array(InventoryResultEntity);
export class OpsEntityItem extends S.Class<OpsEntityItem>("OpsEntityItem")({CaptureTime: S.optional(S.String), Content: S.optional(OpsEntityItemEntryList)}) {}
export class GetInventoryResult extends S.Class<GetInventoryResult>("GetInventoryResult")({Entities: S.optional(InventoryResultEntityList), NextToken: S.optional(S.String)}) {}
export const OpsEntityItemMap = S.Record({key: S.String, value: OpsEntityItem});
export class OpsEntity extends S.Class<OpsEntity>("OpsEntity")({Id: S.optional(S.String), Data: S.optional(OpsEntityItemMap)}) {}
export const OpsEntityList = S.Array(OpsEntity);
export class GetOpsSummaryResult extends S.Class<GetOpsSummaryResult>("GetOpsSummaryResult")({Entities: S.optional(OpsEntityList), NextToken: S.optional(S.String)}) {}

//# Errors
export class DuplicateInstanceId extends S.TaggedError<DuplicateInstanceId>()("DuplicateInstanceId", {}) {};
export class InternalServerError extends S.TaggedError<InternalServerError>()("InternalServerError", {}) {};
export class AssociatedInstances extends S.TaggedError<AssociatedInstances>()("AssociatedInstances", {}) {};
export class InvalidResourceId extends S.TaggedError<InvalidResourceId>()("InvalidResourceId", {}) {};
export class InvalidResourceType extends S.TaggedError<InvalidResourceType>()("InvalidResourceType", {}) {};
export class AssociationDoesNotExist extends S.TaggedError<AssociationDoesNotExist>()("AssociationDoesNotExist", {}) {};
export class InvalidInstanceId extends S.TaggedError<InvalidInstanceId>()("InvalidInstanceId", {}) {};
export class TooManyTagsError extends S.TaggedError<TooManyTagsError>()("TooManyTagsError", {}) {};
export class TooManyUpdates extends S.TaggedError<TooManyUpdates>()("TooManyUpdates", {}) {};
export class OpsItemConflictException extends S.TaggedError<OpsItemConflictException>()("OpsItemConflictException", {}) {};
export class OpsItemInvalidParameterException extends S.TaggedError<OpsItemInvalidParameterException>()("OpsItemInvalidParameterException", {}) {};
export class InvalidCommandId extends S.TaggedError<InvalidCommandId>()("InvalidCommandId", {}) {};
export class InvalidActivation extends S.TaggedError<InvalidActivation>()("InvalidActivation", {Message: S.optional(S.String)}) {};
export class InvalidDocument extends S.TaggedError<InvalidDocument>()("InvalidDocument", {}) {};
export class OpsMetadataInvalidArgumentException extends S.TaggedError<OpsMetadataInvalidArgumentException>()("OpsMetadataInvalidArgumentException", {message: S.optional(S.String)}) {};
export class ParameterNotFound extends S.TaggedError<ParameterNotFound>()("ParameterNotFound", {message: S.optional(S.String)}) {};
export class ResourceDataSyncInvalidConfigurationException extends S.TaggedError<ResourceDataSyncInvalidConfigurationException>()("ResourceDataSyncInvalidConfigurationException", {Message: S.optional(S.String)}) {};
export class MalformedResourcePolicyDocumentException extends S.TaggedError<MalformedResourcePolicyDocumentException>()("MalformedResourcePolicyDocumentException", {Message: S.optional(S.String)}) {};
export class DoesNotExistException extends S.TaggedError<DoesNotExistException>()("DoesNotExistException", {}) {};
export class InvalidPluginName extends S.TaggedError<InvalidPluginName>()("InvalidPluginName", {}) {};
export class InvocationDoesNotExist extends S.TaggedError<InvocationDoesNotExist>()("InvocationDoesNotExist", {}) {};
export class OpsMetadataNotFoundException extends S.TaggedError<OpsMetadataNotFoundException>()("OpsMetadataNotFoundException", {}) {};
export class InvalidFilterKey extends S.TaggedError<InvalidFilterKey>()("InvalidFilterKey", {}) {};
export class DocumentLimitExceeded extends S.TaggedError<DocumentLimitExceeded>()("DocumentLimitExceeded", {Message: S.optional(S.String)}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class IdempotentParameterMismatch extends S.TaggedError<IdempotentParameterMismatch>()("IdempotentParameterMismatch", {}) {};
export class ServiceSettingNotFound extends S.TaggedError<ServiceSettingNotFound>()("ServiceSettingNotFound", {}) {};
export class AutomationExecutionNotFoundException extends S.TaggedError<AutomationExecutionNotFoundException>()("AutomationExecutionNotFoundException", {}) {};
export class InvalidAssociation extends S.TaggedError<InvalidAssociation>()("InvalidAssociation", {Message: S.optional(S.String)}) {};
export class OpsItemAccessDeniedException extends S.TaggedError<OpsItemAccessDeniedException>()("OpsItemAccessDeniedException", {Message: S.optional(S.String)}) {};
export class ResourceDataSyncConflictException extends S.TaggedError<ResourceDataSyncConflictException>()("ResourceDataSyncConflictException", {Message: S.optional(S.String)}) {};
export class ResourceDataSyncNotFoundException extends S.TaggedError<ResourceDataSyncNotFoundException>()("ResourceDataSyncNotFoundException", {}) {};
export class OpsItemLimitExceededException extends S.TaggedError<OpsItemLimitExceededException>()("OpsItemLimitExceededException", {ResourceTypes: S.optional(OpsItemParameterNamesList), Limit: S.optional(S.Number), LimitType: S.optional(S.String), Message: S.optional(S.String)}) {};
export class OpsItemNotFoundException extends S.TaggedError<OpsItemNotFoundException>()("OpsItemNotFoundException", {}) {};
export class ResourceLimitExceededException extends S.TaggedError<ResourceLimitExceededException>()("ResourceLimitExceededException", {}) {};
export class InvalidActivationId extends S.TaggedError<InvalidActivationId>()("InvalidActivationId", {Message: S.optional(S.String)}) {};
export class InvalidDocumentOperation extends S.TaggedError<InvalidDocumentOperation>()("InvalidDocumentOperation", {Message: S.optional(S.String)}) {};
export class ResourceInUseException extends S.TaggedError<ResourceInUseException>()("ResourceInUseException", {Message: S.optional(S.String)}) {};
export class ResourcePolicyConflictException extends S.TaggedError<ResourcePolicyConflictException>()("ResourcePolicyConflictException", {}) {};
export class TargetInUseException extends S.TaggedError<TargetInUseException>()("TargetInUseException", {Message: S.optional(S.String)}) {};
export class InvalidNextToken extends S.TaggedError<InvalidNextToken>()("InvalidNextToken", {}) {};
export class InvalidFilter extends S.TaggedError<InvalidFilter>()("InvalidFilter", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InvalidDocumentType extends S.TaggedError<InvalidDocumentType>()("InvalidDocumentType", {Message: S.optional(S.String)}) {};
export class InvalidKeyId extends S.TaggedError<InvalidKeyId>()("InvalidKeyId", {}) {};
export class ParameterVersionNotFound extends S.TaggedError<ParameterVersionNotFound>()("ParameterVersionNotFound", {}) {};
export class InvalidFilterOption extends S.TaggedError<InvalidFilterOption>()("InvalidFilterOption", {message: S.optional(S.String)}) {};
export class InvalidFilterValue extends S.TaggedError<InvalidFilterValue>()("InvalidFilterValue", {}) {};
export class ResourcePolicyInvalidParameterException extends S.TaggedError<ResourcePolicyInvalidParameterException>()("ResourcePolicyInvalidParameterException", {}) {};
export class ParameterVersionLabelLimitExceeded extends S.TaggedError<ParameterVersionLabelLimitExceeded>()("ParameterVersionLabelLimitExceeded", {message: S.optional(S.String)}) {};
export class DocumentPermissionLimit extends S.TaggedError<DocumentPermissionLimit>()("DocumentPermissionLimit", {Message: S.optional(S.String)}) {};
export class InvalidPermissionType extends S.TaggedError<InvalidPermissionType>()("InvalidPermissionType", {}) {};
export class HierarchyLevelLimitExceededException extends S.TaggedError<HierarchyLevelLimitExceededException>()("HierarchyLevelLimitExceededException", {message: S.optional(S.String)}) {};
export class AlreadyExistsException extends S.TaggedError<AlreadyExistsException>()("AlreadyExistsException", {Message: S.optional(S.String)}) {};
export class AutomationStepNotFoundException extends S.TaggedError<AutomationStepNotFoundException>()("AutomationStepNotFoundException", {Message: S.optional(S.String)}) {};
export class InvalidDocumentVersion extends S.TaggedError<InvalidDocumentVersion>()("InvalidDocumentVersion", {}) {};
export class AutomationDefinitionNotFoundException extends S.TaggedError<AutomationDefinitionNotFoundException>()("AutomationDefinitionNotFoundException", {Message: S.optional(S.String)}) {};
export class InvalidAutomationStatusUpdateException extends S.TaggedError<InvalidAutomationStatusUpdateException>()("InvalidAutomationStatusUpdateException", {Message: S.optional(S.String)}) {};
export class AssociationVersionLimitExceeded extends S.TaggedError<AssociationVersionLimitExceeded>()("AssociationVersionLimitExceeded", {Message: S.optional(S.String)}) {};
export class StatusUnchanged extends S.TaggedError<StatusUnchanged>()("StatusUnchanged", {}) {};
export class DocumentVersionLimitExceeded extends S.TaggedError<DocumentVersionLimitExceeded>()("DocumentVersionLimitExceeded", {Message: S.optional(S.String)}) {};
export class OpsItemAlreadyExistsException extends S.TaggedError<OpsItemAlreadyExistsException>()("OpsItemAlreadyExistsException", {Message: S.optional(S.String), OpsItemId: S.optional(S.String)}) {};
export class OpsMetadataKeyLimitExceededException extends S.TaggedError<OpsMetadataKeyLimitExceededException>()("OpsMetadataKeyLimitExceededException", {message: S.optional(S.String)}) {};
export class OpsItemRelatedItemAlreadyExistsException extends S.TaggedError<OpsItemRelatedItemAlreadyExistsException>()("OpsItemRelatedItemAlreadyExistsException", {Message: S.optional(S.String), ResourceUri: S.optional(S.String), OpsItemId: S.optional(S.String)}) {};
export class InvalidParameters extends S.TaggedError<InvalidParameters>()("InvalidParameters", {Message: S.optional(S.String)}) {};
export class AssociationAlreadyExists extends S.TaggedError<AssociationAlreadyExists>()("AssociationAlreadyExists", {}) {};
export class AssociationLimitExceeded extends S.TaggedError<AssociationLimitExceeded>()("AssociationLimitExceeded", {}) {};
export class InvalidOutputLocation extends S.TaggedError<InvalidOutputLocation>()("InvalidOutputLocation", {}) {};
export class InvalidSchedule extends S.TaggedError<InvalidSchedule>()("InvalidSchedule", {}) {};
export class DocumentAlreadyExists extends S.TaggedError<DocumentAlreadyExists>()("DocumentAlreadyExists", {Message: S.optional(S.String)}) {};
export class InvalidDeletionIdException extends S.TaggedError<InvalidDeletionIdException>()("InvalidDeletionIdException", {Message: S.optional(S.String)}) {};
export class OpsItemRelatedItemAssociationNotFoundException extends S.TaggedError<OpsItemRelatedItemAssociationNotFoundException>()("OpsItemRelatedItemAssociationNotFoundException", {Message: S.optional(S.String)}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {Message: S.String, QuotaCode: S.optional(S.String), ServiceCode: S.optional(S.String)}) {};
export class UnsupportedCalendarException extends S.TaggedError<UnsupportedCalendarException>()("UnsupportedCalendarException", {Message: S.optional(S.String)}) {};
export class UnsupportedFeatureRequiredException extends S.TaggedError<UnsupportedFeatureRequiredException>()("UnsupportedFeatureRequiredException", {Message: S.optional(S.String)}) {};
export class UnsupportedOperatingSystem extends S.TaggedError<UnsupportedOperatingSystem>()("UnsupportedOperatingSystem", {}) {};
export class InvalidTypeNameException extends S.TaggedError<InvalidTypeNameException>()("InvalidTypeNameException", {}) {};
export class ComplianceTypeCountLimitExceededException extends S.TaggedError<ComplianceTypeCountLimitExceededException>()("ComplianceTypeCountLimitExceededException", {Message: S.optional(S.String)}) {};
export class HierarchyTypeMismatchException extends S.TaggedError<HierarchyTypeMismatchException>()("HierarchyTypeMismatchException", {message: S.optional(S.String)}) {};
export class ResourcePolicyLimitExceededException extends S.TaggedError<ResourcePolicyLimitExceededException>()("ResourcePolicyLimitExceededException", {Limit: S.optional(S.Number), LimitType: S.optional(S.String), Message: S.optional(S.String)}) {};
export class ResourcePolicyNotFoundException extends S.TaggedError<ResourcePolicyNotFoundException>()("ResourcePolicyNotFoundException", {}) {};
export class InvalidAutomationSignalException extends S.TaggedError<InvalidAutomationSignalException>()("InvalidAutomationSignalException", {Message: S.optional(S.String)}) {};
export class InvalidNotificationConfig extends S.TaggedError<InvalidNotificationConfig>()("InvalidNotificationConfig", {Message: S.optional(S.String)}) {};
export class InvalidOutputFolder extends S.TaggedError<InvalidOutputFolder>()("InvalidOutputFolder", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {Message: S.String, ResourceId: S.optional(S.String), ResourceType: S.optional(S.String), QuotaCode: S.String, ServiceCode: S.String}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class AutomationDefinitionVersionNotFoundException extends S.TaggedError<AutomationDefinitionVersionNotFoundException>()("AutomationDefinitionVersionNotFoundException", {Message: S.optional(S.String)}) {};
export class AutomationDefinitionNotApprovedException extends S.TaggedError<AutomationDefinitionNotApprovedException>()("AutomationDefinitionNotApprovedException", {Message: S.optional(S.String)}) {};
export class AutomationExecutionLimitExceededException extends S.TaggedError<AutomationExecutionLimitExceededException>()("AutomationExecutionLimitExceededException", {}) {};
export class TargetNotConnected extends S.TaggedError<TargetNotConnected>()("TargetNotConnected", {Message: S.optional(S.String)}) {};
export class InvalidAssociationVersion extends S.TaggedError<InvalidAssociationVersion>()("InvalidAssociationVersion", {Message: S.optional(S.String)}) {};
export class InvalidTarget extends S.TaggedError<InvalidTarget>()("InvalidTarget", {}) {};
export class DuplicateDocumentContent extends S.TaggedError<DuplicateDocumentContent>()("DuplicateDocumentContent", {Message: S.optional(S.String)}) {};
export class InvalidDocumentSchemaVersion extends S.TaggedError<InvalidDocumentSchemaVersion>()("InvalidDocumentSchemaVersion", {Message: S.optional(S.String)}) {};
export class OpsMetadataTooManyUpdatesException extends S.TaggedError<OpsMetadataTooManyUpdatesException>()("OpsMetadataTooManyUpdatesException", {message: S.optional(S.String)}) {};
export class InvalidTargetMaps extends S.TaggedError<InvalidTargetMaps>()("InvalidTargetMaps", {}) {};
export class InvalidDocumentContent extends S.TaggedError<InvalidDocumentContent>()("InvalidDocumentContent", {Message: S.optional(S.String)}) {};
export class OpsMetadataAlreadyExistsException extends S.TaggedError<OpsMetadataAlreadyExistsException>()("OpsMetadataAlreadyExistsException", {message: S.optional(S.String)}) {};
export class ResourceDataSyncAlreadyExistsException extends S.TaggedError<ResourceDataSyncAlreadyExistsException>()("ResourceDataSyncAlreadyExistsException", {SyncName: S.optional(S.String)}) {};
export class InvalidDeleteInventoryParametersException extends S.TaggedError<InvalidDeleteInventoryParametersException>()("InvalidDeleteInventoryParametersException", {Message: S.optional(S.String)}) {};
export class InvalidInstancePropertyFilterValue extends S.TaggedError<InvalidInstancePropertyFilterValue>()("InvalidInstancePropertyFilterValue", {message: S.optional(S.String)}) {};
export class InvalidAggregatorException extends S.TaggedError<InvalidAggregatorException>()("InvalidAggregatorException", {Message: S.optional(S.String)}) {};
export class InvalidItemContentException extends S.TaggedError<InvalidItemContentException>()("InvalidItemContentException", {TypeName: S.optional(S.String), Message: S.optional(S.String)}) {};
export class CustomSchemaCountLimitExceededException extends S.TaggedError<CustomSchemaCountLimitExceededException>()("CustomSchemaCountLimitExceededException", {Message: S.optional(S.String)}) {};
export class IncompatiblePolicyException extends S.TaggedError<IncompatiblePolicyException>()("IncompatiblePolicyException", {message: S.optional(S.String)}) {};
export class FeatureNotAvailableException extends S.TaggedError<FeatureNotAvailableException>()("FeatureNotAvailableException", {Message: S.optional(S.String)}) {};
export class InvalidRole extends S.TaggedError<InvalidRole>()("InvalidRole", {Message: S.optional(S.String)}) {};
export class MaxDocumentSizeExceeded extends S.TaggedError<MaxDocumentSizeExceeded>()("MaxDocumentSizeExceeded", {}) {};
export class UnsupportedPlatformType extends S.TaggedError<UnsupportedPlatformType>()("UnsupportedPlatformType", {}) {};
export class InvalidAutomationExecutionParametersException extends S.TaggedError<InvalidAutomationExecutionParametersException>()("InvalidAutomationExecutionParametersException", {}) {};
export class DuplicateDocumentVersionName extends S.TaggedError<DuplicateDocumentVersionName>()("DuplicateDocumentVersionName", {Message: S.optional(S.String)}) {};
export class InvalidTag extends S.TaggedError<InvalidTag>()("InvalidTag", {Message: S.optional(S.String)}) {};
export class NoLongerSupportedException extends S.TaggedError<NoLongerSupportedException>()("NoLongerSupportedException", {}) {};
export class OpsMetadataLimitExceededException extends S.TaggedError<OpsMetadataLimitExceededException>()("OpsMetadataLimitExceededException", {message: S.optional(S.String)}) {};
export class ResourceDataSyncCountExceededException extends S.TaggedError<ResourceDataSyncCountExceededException>()("ResourceDataSyncCountExceededException", {Message: S.optional(S.String)}) {};
export class InvalidInventoryRequestException extends S.TaggedError<InvalidInventoryRequestException>()("InvalidInventoryRequestException", {Message: S.optional(S.String)}) {};
export class AssociationExecutionDoesNotExist extends S.TaggedError<AssociationExecutionDoesNotExist>()("AssociationExecutionDoesNotExist", {Message: S.optional(S.String)}) {};
export class UnsupportedOperationException extends S.TaggedError<UnsupportedOperationException>()("UnsupportedOperationException", {}) {};
export class ItemSizeLimitExceededException extends S.TaggedError<ItemSizeLimitExceededException>()("ItemSizeLimitExceededException", {TypeName: S.optional(S.String), Message: S.optional(S.String)}) {};
export class InvalidInventoryItemContextException extends S.TaggedError<InvalidInventoryItemContextException>()("InvalidInventoryItemContextException", {Message: S.optional(S.String)}) {};
export class InvalidAllowedPatternException extends S.TaggedError<InvalidAllowedPatternException>()("InvalidAllowedPatternException", {message: S.optional(S.String)}) {};
export class InvalidUpdate extends S.TaggedError<InvalidUpdate>()("InvalidUpdate", {Message: S.optional(S.String)}) {};
export class InvalidOptionException extends S.TaggedError<InvalidOptionException>()("InvalidOptionException", {Message: S.optional(S.String)}) {};
export class InvalidInstanceInformationFilterValue extends S.TaggedError<InvalidInstanceInformationFilterValue>()("InvalidInstanceInformationFilterValue", {message: S.optional(S.String)}) {};
export class TotalSizeLimitExceededException extends S.TaggedError<TotalSizeLimitExceededException>()("TotalSizeLimitExceededException", {Message: S.optional(S.String)}) {};
export class ItemContentMismatchException extends S.TaggedError<ItemContentMismatchException>()("ItemContentMismatchException", {TypeName: S.optional(S.String), Message: S.optional(S.String)}) {};
export class InvalidPolicyAttributeException extends S.TaggedError<InvalidPolicyAttributeException>()("InvalidPolicyAttributeException", {message: S.optional(S.String)}) {};
export class InvalidInventoryGroupException extends S.TaggedError<InvalidInventoryGroupException>()("InvalidInventoryGroupException", {Message: S.optional(S.String)}) {};
export class SubTypeCountLimitExceededException extends S.TaggedError<SubTypeCountLimitExceededException>()("SubTypeCountLimitExceededException", {Message: S.optional(S.String)}) {};
export class InvalidPolicyTypeException extends S.TaggedError<InvalidPolicyTypeException>()("InvalidPolicyTypeException", {message: S.optional(S.String)}) {};
export class InvalidResultAttributeException extends S.TaggedError<InvalidResultAttributeException>()("InvalidResultAttributeException", {Message: S.optional(S.String)}) {};
export class UnsupportedInventoryItemContextException extends S.TaggedError<UnsupportedInventoryItemContextException>()("UnsupportedInventoryItemContextException", {TypeName: S.optional(S.String), Message: S.optional(S.String)}) {};
export class ParameterAlreadyExists extends S.TaggedError<ParameterAlreadyExists>()("ParameterAlreadyExists", {message: S.optional(S.String)}) {};
export class UnsupportedInventorySchemaVersionException extends S.TaggedError<UnsupportedInventorySchemaVersionException>()("UnsupportedInventorySchemaVersionException", {Message: S.optional(S.String)}) {};
export class ParameterLimitExceeded extends S.TaggedError<ParameterLimitExceeded>()("ParameterLimitExceeded", {message: S.optional(S.String)}) {};
export class ParameterMaxVersionLimitExceeded extends S.TaggedError<ParameterMaxVersionLimitExceeded>()("ParameterMaxVersionLimitExceeded", {message: S.optional(S.String)}) {};
export class ParameterPatternMismatchException extends S.TaggedError<ParameterPatternMismatchException>()("ParameterPatternMismatchException", {message: S.optional(S.String)}) {};
export class PoliciesLimitExceededException extends S.TaggedError<PoliciesLimitExceededException>()("PoliciesLimitExceededException", {message: S.optional(S.String)}) {};
export class UnsupportedParameterType extends S.TaggedError<UnsupportedParameterType>()("UnsupportedParameterType", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Changes the Identity and Access Management (IAM) role that is assigned to the
 * on-premises server, edge device, or virtual machines (VM). IAM roles are first
 * assigned to these hybrid nodes during the activation process. For more information, see CreateActivation.
 */export const updateManagedInstanceRole = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdateManagedInstanceRole" }, UpdateManagedInstanceRoleRequest, UpdateManagedInstanceRoleResult, [InternalServerError, InvalidInstanceId]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or overwrites one or more tags for the specified resource. *Tags*
 * are metadata that you can assign to your automations, documents, managed nodes, maintenance
 * windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your
 * resources in different ways, for example, by purpose, owner, or environment. Each tag consists of
 * a key and an optional value, both of which you define. For example, you could define a set of
 * tags for your account's managed nodes that helps you track each node's owner and stack level. For
 * example:
 * 
 * - `Key=Owner,Value=DbAdmin`
 * 
 * - `Key=Owner,Value=SysAdmin`
 * 
 * - `Key=Owner,Value=Dev`
 * 
 * - `Key=Stack,Value=Production`
 * 
 * - `Key=Stack,Value=Pre-Production`
 * 
 * - `Key=Stack,Value=Test`
 * 
 * Most resources can have a maximum of 50 tags. Automations can have a maximum of 5
 * tags.
 * 
 * We recommend that you devise a set of tag keys that meets your needs for each resource type.
 * Using a consistent set of tag keys makes it easier for you to manage your resources. You can
 * search and filter the resources based on the tags you add. Tags don't have any semantic meaning
 * to and are interpreted strictly as a string of characters.
 * 
 * For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see Tag your Amazon EC2
 * resources in the *Amazon EC2 User Guide*.
 */export const addTagsToResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.AddTagsToResource" }, AddTagsToResourceRequest, AddTagsToResourceResult, [InternalServerError, InvalidResourceId, InvalidResourceType, TooManyTagsError, TooManyUpdates]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attempts to cancel the command specified by the Command ID. There is no guarantee that the
 * command will be terminated and the underlying process stopped.
 */export const cancelCommand = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.CancelCommand" }, CancelCommandRequest, CancelCommandResult, [DuplicateInstanceId, InternalServerError, InvalidCommandId, InvalidInstanceId]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified managed
 * node. If you created the association by using the `Targets` parameter, then you must
 * delete the association by using the association ID.
 * 
 * When you disassociate a document from a managed node, it doesn't change the configuration of
 * the node. To change the configuration state of a managed node after you disassociate a document,
 * you must create a new document with the desired configuration and associate it with the
 * node.
 */export const deleteAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeleteAssociation" }, DeleteAssociationRequest, DeleteAssociationResult, [AssociationDoesNotExist, InternalServerError, InvalidDocument, InvalidInstanceId, TooManyUpdates]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a maintenance window.
 */export const deleteMaintenanceWindow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeleteMaintenanceWindow" }, DeleteMaintenanceWindowRequest, DeleteMaintenanceWindowResult, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an OpsItem. You must have permission in Identity and Access Management (IAM) to
 * delete an OpsItem.
 * 
 * Note the following important information about this operation.
 * 
 * - Deleting an OpsItem is irreversible. You can't restore a deleted OpsItem.
 * 
 * - This operation uses an *eventual consistency model*, which means the
 * system can take a few minutes to complete this operation. If you delete an OpsItem and
 * immediately call, for example, GetOpsItem, the deleted OpsItem might still
 * appear in the response.
 * 
 * - This operation is idempotent. The system doesn't throw an exception if you repeatedly
 * call this operation for the same OpsItem. If the first call is successful, all additional calls
 * return the same successful response as the first call.
 * 
 * - This operation doesn't support cross-account calls. A delegated administrator or
 * management account can't delete OpsItems in other accounts, even if OpsCenter has been set up for
 * cross-account administration. For more information about cross-account administration, see
 * Setting up
 * OpsCenter to centrally manage OpsItems across accounts in the *Systems Manager User Guide*.
 */export const deleteOpsItem = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeleteOpsItem" }, DeleteOpsItemRequest, DeleteOpsItemResponse, [InternalServerError, OpsItemInvalidParameterException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a parameter from the system. After deleting a parameter, wait for at least 30 seconds
 * to create a parameter with the same name.
 */export const deleteParameter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeleteParameter" }, DeleteParameterRequest, DeleteParameterResult, [InternalServerError, ParameterNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to
 * create a parameter with the same name.
 */export const deleteParameters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeleteParameters" }, DeleteParametersRequest, DeleteParametersResult, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the server or virtual machine from the list of registered servers.
 * 
 * If you want to reregister an on-premises server, edge device, or VM, you must use a
 * different Activation Code and Activation ID than used to register the machine previously. The
 * Activation Code and Activation ID must not have already been used on the maximum number of
 * activations specified when they were created. For more information, see Deregistering
 * managed nodes in a hybrid and multicloud environment in the
 * *Amazon Web Services Systems Manager User Guide*.
 */export const deregisterManagedInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeregisterManagedInstance" }, DeregisterManagedInstanceRequest, DeregisterManagedInstanceResult, [InternalServerError, InvalidInstanceId]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a patch group from a patch baseline.
 */export const deregisterPatchBaselineForPatchGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeregisterPatchBaselineForPatchGroup" }, DeregisterPatchBaselineForPatchGroupRequest, DeregisterPatchBaselineForPatchGroupResult, [InternalServerError, InvalidResourceId]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a task from a maintenance window.
 */export const deregisterTaskFromMaintenanceWindow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeregisterTaskFromMaintenanceWindow" }, DeregisterTaskFromMaintenanceWindowRequest, DeregisterTaskFromMaintenanceWindowResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns detailed information about command execution for an invocation or plugin. The Run
 * Command API follows an eventual consistency model, due to the distributed nature of the system
 * supporting the API. This means that the result of an API command you run that affects your
 * resources might not be immediately visible to all subsequent commands you run. You should keep
 * this in mind when you carry out an API command that immediately follows a previous API
 * command.
 * 
 * `GetCommandInvocation` only gives the execution status of a plugin in a document.
 * To get the command execution status on a specific managed node, use ListCommandInvocations. To get the command execution status across managed nodes,
 * use ListCommands.
 */export const getCommandInvocation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetCommandInvocation" }, GetCommandInvocationRequest, GetCommandInvocationResult, [InternalServerError, InvalidCommandId, InvalidInstanceId, InvalidPluginName, InvocationDoesNotExist]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the Session Manager connection status for a managed node to determine whether it is running
 * and ready to receive Session Manager connections.
 */export const getConnectionStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetConnectionStatus" }, GetConnectionStatusRequest, GetConnectionStatusResponse, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch
 * baselines. For example, you can create a default patch baseline for each operating system.
 * 
 * If you don't specify an operating system value, the default patch baseline for Windows is
 * returned.
 */export const getDefaultPatchBaseline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetDefaultPatchBaseline" }, GetDefaultPatchBaselineRequest, GetDefaultPatchBaselineResult, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a maintenance window.
 */export const getMaintenanceWindow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetMaintenanceWindow" }, GetMaintenanceWindowRequest, GetMaintenanceWindowResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details about a specific a maintenance window execution.
 */export const getMaintenanceWindowExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetMaintenanceWindowExecution" }, GetMaintenanceWindowExecutionRequest, GetMaintenanceWindowExecutionResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a specific task running on a specific target.
 */export const getMaintenanceWindowExecutionTaskInvocation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation" }, GetMaintenanceWindowExecutionTaskInvocationRequest, GetMaintenanceWindowExecutionTaskInvocationResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details of a maintenance window task.
 * 
 * For maintenance window tasks without a specified target, you can't supply values for
 * `--max-errors` and `--max-concurrency`. Instead, the system inserts a
 * placeholder value of `1`, which may be reported in the response to this command.
 * These values don't affect the running of your task and can be ignored.
 * 
 * To retrieve a list of tasks in a maintenance window, instead use the DescribeMaintenanceWindowTasks command.
 */export const getMaintenanceWindowTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetMaintenanceWindowTask" }, GetMaintenanceWindowTaskRequest, GetMaintenanceWindowTaskResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * View operational metadata related to an application in Application Manager.
 */export const getOpsMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetOpsMetadata" }, GetOpsMetadataRequest, GetOpsMetadataResult, [InternalServerError, OpsMetadataInvalidArgumentException, OpsMetadataNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a patch baseline.
 */export const getPatchBaseline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetPatchBaseline" }, GetPatchBaselineRequest, GetPatchBaselineResult, [DoesNotExistException, InternalServerError, InvalidResourceId]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the patch baseline that should be used for the specified patch group.
 */export const getPatchBaselineForPatchGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetPatchBaselineForPatchGroup" }, GetPatchBaselineForPatchGroupRequest, GetPatchBaselineForPatchGroupResult, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the tags assigned to the specified resource.
 * 
 * For information about the ID format for each supported resource type, see AddTagsToResource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResult, [InternalServerError, InvalidResourceId, InvalidResourceType]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Defines the default patch baseline for the relevant operating system.
 * 
 * To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline
 * Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify
 * `arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed` instead of
 * `pb-0574b43a65ea646ed`.
 */export const registerDefaultPatchBaseline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.RegisterDefaultPatchBaseline" }, RegisterDefaultPatchBaselineRequest, RegisterDefaultPatchBaselineResult, [DoesNotExistException, InternalServerError, InvalidResourceId]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tag keys from the specified resource.
 */export const removeTagsFromResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.RemoveTagsFromResource" }, RemoveTagsFromResourceRequest, RemoveTagsFromResourceResult, [InternalServerError, InvalidResourceId, InvalidResourceType, TooManyUpdates]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * `ServiceSetting` is an account-level setting for an Amazon Web Services service. This setting
 * defines how a user interacts with or uses a service or a feature of a service. For example, if an
 * Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services
 * service team might create a default setting of "false". This means the user can't use this
 * feature unless they change the setting to "true" and intentionally opt in for a paid
 * feature.
 * 
 * Services map a `SettingId` object to a setting value. Amazon Web Services services teams define
 * the default value for a `SettingId`. You can't create a new `SettingId`,
 * but you can overwrite the default value if you have the `ssm:UpdateServiceSetting`
 * permission for the setting. Use the GetServiceSetting API operation to view the
 * current value. Use the UpdateServiceSetting API operation to change the default
 * setting.
 * 
 * Reset the service setting for the account to the default value as provisioned by the Amazon Web Services
 * service team.
 */export const resetServiceSetting = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ResetServiceSetting" }, ResetServiceSettingRequest, ResetServiceSettingResult, [InternalServerError, ServiceSettingNotFound, TooManyUpdates]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Reconnects a session to a managed node after it has been disconnected. Connections can be
 * resumed for disconnected sessions, but not terminated sessions.
 * 
 * This command is primarily for use by client machines to automatically reconnect during
 * intermittent network issues. It isn't intended for any other use.
 */export const resumeSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ResumeSession" }, ResumeSessionRequest, ResumeSessionResponse, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Runs an association immediately and only one time. This operation can be helpful when
 * troubleshooting associations.
 */export const startAssociationsOnce = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.StartAssociationsOnce" }, StartAssociationsOnceRequest, StartAssociationsOnceResult, [AssociationDoesNotExist, InvalidAssociation]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Permanently ends a session and closes the data connection between the Session Manager client and
 * SSM Agent on the managed node. A terminated session can't be resumed.
 */export const terminateSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.TerminateSession" }, TerminateSessionRequest, TerminateSessionResponse, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing maintenance window. Only specified parameters are modified.
 * 
 * The value you specify for `Duration` determines the specific end time for the
 * maintenance window based on the time it begins. No maintenance window tasks are permitted to
 * start after the resulting endtime minus the number of hours you specify for `Cutoff`.
 * For example, if the maintenance window starts at 3 PM, the duration is three hours, and the
 * value you specify for `Cutoff` is one hour, no maintenance window tasks can start
 * after 5 PM.
 */export const updateMaintenanceWindow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdateMaintenanceWindow" }, UpdateMaintenanceWindowRequest, UpdateMaintenanceWindowResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the target of an existing maintenance window. You
 * can change the following:
 * 
 * - Name
 * 
 * - Description
 * 
 * - Owner
 * 
 * - IDs for an ID target
 * 
 * - Tags for a Tag target
 * 
 * - From any supported tag type to another. The three supported tag types are ID target, Tag
 * target, and resource group. For more information, see Target.
 * 
 * If a parameter is null, then the corresponding field isn't modified.
 */export const updateMaintenanceWindowTarget = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdateMaintenanceWindowTarget" }, UpdateMaintenanceWindowTargetRequest, UpdateMaintenanceWindowTargetResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies a task assigned to a maintenance window. You can't change the task type, but you
 * can change the following values:
 * 
 * - `TaskARN`. For example, you can change a `RUN_COMMAND` task from
 * `AWS-RunPowerShellScript` to `AWS-RunShellScript`.
 * 
 * - `ServiceRoleArn`
 * 
 * - `TaskInvocationParameters`
 * 
 * - `Priority`
 * 
 * - `MaxConcurrency`
 * 
 * - `MaxErrors`
 * 
 * One or more targets must be specified for maintenance window Run Command-type tasks.
 * Depending on the task, targets are optional for other maintenance window task types (Automation,
 * Lambda, and Step Functions). For more information about running tasks
 * that don't specify targets, see Registering
 * maintenance window tasks without targets in the
 * *Amazon Web Services Systems Manager User Guide*.
 * 
 * If the value for a parameter in `UpdateMaintenanceWindowTask` is null, then the
 * corresponding field isn't modified. If you set `Replace` to true, then all fields
 * required by the RegisterTaskWithMaintenanceWindow operation are required for
 * this request. Optional fields that aren't specified are set to null.
 * 
 * When you update a maintenance window task that has options specified in
 * `TaskInvocationParameters`, you must provide again all the
 * `TaskInvocationParameters` values that you want to retain. The values you don't
 * specify again are removed. For example, suppose that when you registered a Run Command task, you
 * specified `TaskInvocationParameters` values for `Comment`,
 * `NotificationConfig`, and `OutputS3BucketName`. If you update the
 * maintenance window task and specify only a different `OutputS3BucketName` value, the
 * values for `Comment` and `NotificationConfig` are removed.
 */export const updateMaintenanceWindowTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdateMaintenanceWindowTask" }, UpdateMaintenanceWindowTaskRequest, UpdateMaintenanceWindowTaskResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies an existing patch baseline. Fields not specified in the request are left
 * unchanged.
 * 
 * For information about valid key-value pairs in `PatchFilters` for each supported
 * operating system type, see PatchFilter.
 */export const updatePatchBaseline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdatePatchBaseline" }, UpdatePatchBaselineRequest, UpdatePatchBaselineResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a resource data sync. After you create a resource data sync for a Region, you can't
 * change the account options for that sync. For example, if you create a sync in the us-east-2
 * (Ohio) Region and you choose the `Include only the current account` option, you can't
 * edit that sync later and choose the Include all accounts from my Organizations
 * configuration option. Instead, you must delete the first resource data sync, and create a
 * new one.
 * 
 * This API operation only supports a resource data sync that was created with a
 * SyncFromSource `SyncType`.
 */export const updateResourceDataSync = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdateResourceDataSync" }, UpdateResourceDataSyncRequest, UpdateResourceDataSyncResult, [InternalServerError, ResourceDataSyncConflictException, ResourceDataSyncInvalidConfigurationException, ResourceDataSyncNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * `ServiceSetting` is an account-level setting for an Amazon Web Services service. This setting
 * defines how a user interacts with or uses a service or a feature of a service. For example, if an
 * Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services
 * service team might create a default setting of "false". This means the user can't use this
 * feature unless they change the setting to "true" and intentionally opt in for a paid
 * feature.
 * 
 * Services map a `SettingId` object to a setting value. Amazon Web Services services teams define
 * the default value for a `SettingId`. You can't create a new `SettingId`,
 * but you can overwrite the default value if you have the `ssm:UpdateServiceSetting`
 * permission for the setting. Use the GetServiceSetting API operation to view the
 * current value. Or, use the ResetServiceSetting to change the value back to the
 * original value defined by the Amazon Web Services service team.
 * 
 * Update the service setting for the account.
 */export const updateServiceSetting = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdateServiceSetting" }, UpdateServiceSettingRequest, UpdateServiceSettingResult, [InternalServerError, ServiceSettingNotFound, TooManyUpdates]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops a maintenance window execution that is already in progress and cancels any tasks in
 * the window that haven't already starting running. Tasks already in progress will continue to
 * completion.
 */export const cancelMaintenanceWindowExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.CancelMaintenanceWindowExecution" }, CancelMaintenanceWindowExecutionRequest, CancelMaintenanceWindowExecutionResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new maintenance window.
 * 
 * The value you specify for `Duration` determines the specific end time for the
 * maintenance window based on the time it begins. No maintenance window tasks are permitted to
 * start after the resulting endtime minus the number of hours you specify for `Cutoff`.
 * For example, if the maintenance window starts at 3 PM, the duration is three hours, and the
 * value you specify for `Cutoff` is one hour, no maintenance window tasks can start
 * after 5 PM.
 */export const createMaintenanceWindow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.CreateMaintenanceWindow" }, CreateMaintenanceWindowRequest, CreateMaintenanceWindowResult, [IdempotentParameterMismatch, InternalServerError, ResourceLimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an activation. You aren't required to delete an activation. If you delete an
 * activation, you can no longer use it to register additional managed nodes. Deleting an activation
 * doesn't de-register managed nodes. You must manually de-register managed nodes.
 */export const deleteActivation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeleteActivation" }, DeleteActivationRequest, DeleteActivationResult, [InternalServerError, InvalidActivation, InvalidActivationId, TooManyUpdates]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the
 * document.
 * 
 * Before you delete the document, we recommend that you use DeleteAssociation to disassociate all managed nodes that are associated with the document.
 */export const deleteDocument = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeleteDocument" }, DeleteDocumentRequest, DeleteDocumentResult, [AssociatedInstances, InternalServerError, InvalidDocument, InvalidDocumentOperation, TooManyUpdates]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete OpsMetadata related to an application.
 */export const deleteOpsMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeleteOpsMetadata" }, DeleteOpsMetadataRequest, DeleteOpsMetadataResult, [InternalServerError, OpsMetadataInvalidArgumentException, OpsMetadataNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a patch baseline.
 */export const deletePatchBaseline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeletePatchBaseline" }, DeletePatchBaselineRequest, DeletePatchBaselineResult, [InternalServerError, ResourceInUseException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a resource data sync configuration. After the configuration is deleted, changes to
 * data on managed nodes are no longer synced to or from the target. Deleting a sync configuration
 * doesn't delete data.
 */export const deleteResourceDataSync = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeleteResourceDataSync" }, DeleteResourceDataSyncRequest, DeleteResourceDataSyncResult, [InternalServerError, ResourceDataSyncInvalidConfigurationException, ResourceDataSyncNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a target from a maintenance window.
 */export const deregisterTargetFromMaintenanceWindow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeregisterTargetFromMaintenanceWindow" }, DeregisterTargetFromMaintenanceWindowRequest, DeregisterTargetFromMaintenanceWindowResult, [DoesNotExistException, InternalServerError, TargetInUseException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all patches eligible to be included in a patch baseline.
 * 
 * Currently, `DescribeAvailablePatches` supports only the Amazon Linux 1, Amazon
 * Linux 2, and Windows Server operating systems.
 */export const describeAvailablePatches = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeAvailablePatches" }, DescribeAvailablePatchesRequest, DescribeAvailablePatchesResult, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * All associations for the managed nodes.
 */export const describeEffectiveInstanceAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeEffectiveInstanceAssociations" }, DescribeEffectiveInstanceAssociationsRequest, DescribeEffectiveInstanceAssociationsResult, [InternalServerError, InvalidInstanceId, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the patches on the specified managed node and their state
 * relative to the patch baseline being used for the node.
 */export const describeInstancePatches = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeInstancePatches" }, DescribeInstancePatchesRequest, DescribeInstancePatchesResult, [InternalServerError, InvalidFilter, InvalidInstanceId, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the high-level patch state of one or more managed nodes.
 */export const describeInstancePatchStates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeInstancePatchStates" }, DescribeInstancePatchStatesRequest, DescribeInstancePatchStatesResult, [InternalServerError, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the high-level patch state for the managed nodes in the specified patch
 * group.
 */export const describeInstancePatchStatesForPatchGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeInstancePatchStatesForPatchGroup" }, DescribeInstancePatchStatesForPatchGroupRequest, DescribeInstancePatchStatesForPatchGroupResult, [InternalServerError, InvalidFilter, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the individual task executions (one per target) for a particular task run as part
 * of a maintenance window execution.
 */export const describeMaintenanceWindowExecutionTaskInvocations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations" }, DescribeMaintenanceWindowExecutionTaskInvocationsRequest, DescribeMaintenanceWindowExecutionTaskInvocationsResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * For a given maintenance window execution, lists the tasks that were run.
 */export const describeMaintenanceWindowExecutionTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeMaintenanceWindowExecutionTasks" }, DescribeMaintenanceWindowExecutionTasksRequest, DescribeMaintenanceWindowExecutionTasksResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the maintenance windows in an Amazon Web Services account.
 */export const describeMaintenanceWindows = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeMaintenanceWindows" }, DescribeMaintenanceWindowsRequest, DescribeMaintenanceWindowsResult, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about upcoming executions of a maintenance window.
 */export const describeMaintenanceWindowSchedule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeMaintenanceWindowSchedule" }, DescribeMaintenanceWindowScheduleRequest, DescribeMaintenanceWindowScheduleResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the maintenance window targets or tasks that a managed node is
 * associated with.
 */export const describeMaintenanceWindowsForTarget = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeMaintenanceWindowsForTarget" }, DescribeMaintenanceWindowsForTargetRequest, DescribeMaintenanceWindowsForTargetResult, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the targets registered with the maintenance window.
 */export const describeMaintenanceWindowTargets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeMaintenanceWindowTargets" }, DescribeMaintenanceWindowTargetsRequest, DescribeMaintenanceWindowTargetsResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tasks in a maintenance window.
 * 
 * For maintenance window tasks without a specified target, you can't supply values for
 * `--max-errors` and `--max-concurrency`. Instead, the system inserts a
 * placeholder value of `1`, which may be reported in the response to this command.
 * These values don't affect the running of your task and can be ignored.
 */export const describeMaintenanceWindowTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeMaintenanceWindowTasks" }, DescribeMaintenanceWindowTasksRequest, DescribeMaintenanceWindowTasksResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the patch baselines in your Amazon Web Services account.
 */export const describePatchBaselines = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribePatchBaselines" }, DescribePatchBaselinesRequest, DescribePatchBaselinesResult, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all patch groups that have been registered with patch baselines.
 */export const describePatchGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribePatchGroups" }, DescribePatchGroupsRequest, DescribePatchGroupsResult, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns high-level aggregated patch compliance state information for a patch group.
 */export const describePatchGroupState = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribePatchGroupState" }, DescribePatchGroupStateRequest, DescribePatchGroupStateResult, [InternalServerError, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the properties of available patches organized by product, product family,
 * classification, severity, and other properties of available patches. You can use the reported
 * properties in the filters you specify in requests for operations such as CreatePatchBaseline, UpdatePatchBaseline, DescribeAvailablePatches, and DescribePatchBaselines.
 * 
 * The following section lists the properties that can be used in filters for each major
 * operating system type:
 * 
 * ### AMAZON_LINUX
 * 
 * Valid properties: `PRODUCT` | `CLASSIFICATION` |
 * `SEVERITY`
 * 
 * ### AMAZON_LINUX_2
 * 
 * Valid properties: `PRODUCT` | `CLASSIFICATION` |
 * `SEVERITY`
 * 
 * ### AMAZON_LINUX_2023
 * 
 * Valid properties: `PRODUCT` | `CLASSIFICATION` |
 * `SEVERITY`
 * 
 * ### CENTOS
 * 
 * Valid properties: `PRODUCT` | `CLASSIFICATION` |
 * `SEVERITY`
 * 
 * ### DEBIAN
 * 
 * Valid properties: `PRODUCT` | `PRIORITY`
 * 
 * ### MACOS
 * 
 * Valid properties: `PRODUCT` | `CLASSIFICATION`
 * 
 * ### ORACLE_LINUX
 * 
 * Valid properties: `PRODUCT` | `CLASSIFICATION` |
 * `SEVERITY`
 * 
 * ### REDHAT_ENTERPRISE_LINUX
 * 
 * Valid properties: `PRODUCT` | `CLASSIFICATION` |
 * `SEVERITY`
 * 
 * ### SUSE
 * 
 * Valid properties: `PRODUCT` | `CLASSIFICATION` |
 * `SEVERITY`
 * 
 * ### UBUNTU
 * 
 * Valid properties: `PRODUCT` | `PRIORITY`
 * 
 * ### WINDOWS
 * 
 * Valid properties: `PRODUCT` | `PRODUCT_FAMILY` |
 * `CLASSIFICATION` | `MSRC_SEVERITY`
 */export const describePatchProperties = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribePatchProperties" }, DescribePatchPropertiesRequest, DescribePatchPropertiesResult, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details about a specific task run as part of a maintenance window
 * execution.
 */export const getMaintenanceWindowExecutionTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetMaintenanceWindowExecutionTask" }, GetMaintenanceWindowExecutionTaskRequest, GetMaintenanceWindowExecutionTaskResult, [DoesNotExistException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get information about an OpsItem by using the ID. You must have permission in Identity and Access Management (IAM) to view information about an OpsItem. For more information,
 * see Set
 * up OpsCenter in the *Amazon Web Services Systems Manager User Guide*.
 * 
 * Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and
 * remediate operational issues impacting the performance and health of their Amazon Web Services resources. For
 * more information, see Amazon Web Services Systems Manager OpsCenter in the
 * *Amazon Web Services Systems Manager User Guide*.
 */export const getOpsItem = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetOpsItem" }, GetOpsItemRequest, GetOpsItemResponse, [InternalServerError, OpsItemAccessDeniedException, OpsItemNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get information about a single parameter by specifying the parameter name.
 * 
 * Parameter names can't contain spaces. The service removes any spaces specified for the
 * beginning or end of a parameter name. If the specified name for a parameter contains spaces
 * between characters, the request fails with a `ValidationException` error.
 * 
 * To get information about more than one parameter at a time, use the GetParameters operation.
 */export const getParameter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetParameter" }, GetParameterRequest, GetParameterResult, [InternalServerError, InvalidKeyId, ParameterNotFound, ParameterVersionNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get information about one or more parameters by specifying multiple parameter names.
 * 
 * To get information about a single parameter, you can use the GetParameter
 * operation instead.
 * 
 * Parameter names can't contain spaces. The service removes any spaces specified for the
 * beginning or end of a parameter name. If the specified name for a parameter contains spaces
 * between characters, the request fails with a `ValidationException` error.
 */export const getParameters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetParameters" }, GetParametersRequest, GetParametersResult, [InternalServerError, InvalidKeyId]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve information about one or more parameters under a specified level in a hierarchy.
 * 
 * Request results are returned on a best-effort basis. If you specify `MaxResults`
 * in the request, the response includes information up to the limit specified. The number of items
 * returned, however, can be between zero and the value of `MaxResults`. If the service
 * reaches an internal limit while processing the results, it stops the operation and returns the
 * matching values up to that point and a `NextToken`. You can specify the
 * `NextToken` in a subsequent call to get the next set of results.
 * 
 * Parameter names can't contain spaces. The service removes any spaces specified for the
 * beginning or end of a parameter name. If the specified name for a parameter contains spaces
 * between characters, the request fails with a `ValidationException` error.
 */export const getParametersByPath = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetParametersByPath" }, GetParametersByPathRequest, GetParametersByPathResult, [InternalServerError, InvalidFilterKey, InvalidFilterOption, InvalidFilterValue, InvalidKeyId, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array of the `Policy` object.
 */export const getResourcePolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetResourcePolicies" }, GetResourcePoliciesRequest, GetResourcePoliciesResponse, [InternalServerError, ResourceNotFoundException, ResourcePolicyInvalidParameterException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * `ServiceSetting` is an account-level setting for an Amazon Web Services service. This setting
 * defines how a user interacts with or uses a service or a feature of a service. For example, if an
 * Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services
 * service team might create a default setting of `false`. This means the user can't use
 * this feature unless they change the setting to `true` and intentionally opt in for a
 * paid feature.
 * 
 * Services map a `SettingId` object to a setting value. Amazon Web Services services teams define
 * the default value for a `SettingId`. You can't create a new `SettingId`,
 * but you can overwrite the default value if you have the `ssm:UpdateServiceSetting`
 * permission for the setting. Use the UpdateServiceSetting API operation to
 * change the default setting. Or use the ResetServiceSetting to change the value
 * back to the original value defined by the Amazon Web Services service team.
 * 
 * Query the current service setting for the Amazon Web Services account.
 */export const getServiceSetting = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetServiceSetting" }, GetServiceSettingRequest, GetServiceSettingResult, [InternalServerError, ServiceSettingNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A parameter label is a user-defined alias to help you manage different versions of a
 * parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and
 * increments the version number by one. A label can help you remember the purpose of a parameter
 * when there are multiple versions.
 * 
 * Parameter labels have the following requirements and restrictions.
 * 
 * - A version of a parameter can have a maximum of 10 labels.
 * 
 * - You can't attach the same label to different versions of the same parameter. For example,
 * if version 1 has the label Production, then you can't attach Production to version 2.
 * 
 * - You can move a label from one version of a parameter to another.
 * 
 * - You can't create a label when you create a new parameter. You must attach a label to a
 * specific version of a parameter.
 * 
 * - If you no longer want to use a parameter label, then you can either delete it or move it
 * to a different version of a parameter.
 * 
 * - A label can have a maximum of 100 characters.
 * 
 * - Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or
 * underscores (_).
 * 
 * - Labels can't begin with a number, "`aws`" or "`ssm`" (not case
 * sensitive). If a label fails to meet these requirements, then the label isn't associated with a
 * parameter and the system displays it in the list of InvalidLabels.
 * 
 * - Parameter names can't contain spaces. The service removes any spaces specified for
 * the beginning or end of a parameter name. If the specified name for a parameter contains spaces
 * between characters, the request fails with a `ValidationException` error.
 */export const labelParameterVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.LabelParameterVersion" }, LabelParameterVersionRequest, LabelParameterVersionResult, [InternalServerError, ParameterNotFound, ParameterVersionLabelLimitExceeded, ParameterVersionNotFound, TooManyUpdates]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves all versions of an association for a specific association ID.
 */export const listAssociationVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListAssociationVersions" }, ListAssociationVersionsRequest, ListAssociationVersionsResult, [AssociationDoesNotExist, InternalServerError, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the commands requested by users of the Amazon Web Services account.
 */export const listCommands = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListCommands" }, ListCommandsRequest, ListCommandsResult, [InternalServerError, InvalidCommandId, InvalidFilterKey, InvalidInstanceId, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all versions for a document.
 */export const listDocumentVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListDocumentVersions" }, ListDocumentVersionsRequest, ListDocumentVersionsResult, [InternalServerError, InvalidDocument, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a resource-level summary count. The summary includes information about compliant and
 * non-compliant statuses and detailed compliance-item severity counts, according to the filter
 * criteria you specify.
 */export const listResourceComplianceSummaries = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListResourceComplianceSummaries" }, ListResourceComplianceSummariesRequest, ListResourceComplianceSummariesResult, [InternalServerError, InvalidFilter, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document
 * privately, you must specify the Amazon Web Services user IDs for those people who can use the document. If
 * you share a document publicly, you must specify *All* as the account
 * ID.
 */export const modifyDocumentPermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ModifyDocumentPermission" }, ModifyDocumentPermissionRequest, ModifyDocumentPermissionResponse, [DocumentLimitExceeded, DocumentPermissionLimit, InternalServerError, InvalidDocument, InvalidPermissionType]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers a patch baseline for a patch group.
 */export const registerPatchBaselineForPatchGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.RegisterPatchBaselineForPatchGroup" }, RegisterPatchBaselineForPatchGroupRequest, RegisterPatchBaselineForPatchGroupResult, [AlreadyExistsException, DoesNotExistException, InternalServerError, InvalidResourceId, ResourceLimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers a target with a maintenance window.
 */export const registerTargetWithMaintenanceWindow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.RegisterTargetWithMaintenanceWindow" }, RegisterTargetWithMaintenanceWindowRequest, RegisterTargetWithMaintenanceWindowResult, [DoesNotExistException, IdempotentParameterMismatch, InternalServerError, ResourceLimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stop an Automation that is currently running.
 */export const stopAutomationExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.StopAutomationExecution" }, StopAutomationExecutionRequest, StopAutomationExecutionResult, [AutomationExecutionNotFoundException, InternalServerError, InvalidAutomationStatusUpdateException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove a label or labels from a parameter.
 * 
 * Parameter names can't contain spaces. The service removes any spaces specified for the
 * beginning or end of a parameter name. If the specified name for a parameter contains spaces
 * between characters, the request fails with a `ValidationException` error.
 */export const unlabelParameterVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UnlabelParameterVersion" }, UnlabelParameterVersionRequest, UnlabelParameterVersionResult, [InternalServerError, ParameterNotFound, ParameterVersionNotFound, TooManyUpdates]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified
 * managed node.
 * 
 * `UpdateAssociationStatus` is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to
 * report status updates about your associations and is only used for associations created with the
 * `InstanceId` legacy parameter.
 */export const updateAssociationStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdateAssociationStatus" }, UpdateAssociationStatusRequest, UpdateAssociationStatusResult, [AssociationDoesNotExist, InternalServerError, InvalidDocument, InvalidInstanceId, StatusUnchanged, TooManyUpdates]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Amazon Web Services Systems Manager Change Manager will no longer be open to new
 * customers starting November 7, 2025. If you would like to use Change Manager, sign up prior to that date. Existing customers can
 * continue to use the service as normal. For more information, see
 * Amazon Web Services Systems Manager Change Manager availability change.
 * 
 * Updates information related to approval reviews for a specific version of a change template
 * in Change Manager.
 */export const updateDocumentMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdateDocumentMetadata" }, UpdateDocumentMetadataRequest, UpdateDocumentMetadataResponse, [InternalServerError, InvalidDocument, InvalidDocumentOperation, InvalidDocumentVersion, TooManyUpdates]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see Set up OpsCenter in the
 * *Amazon Web Services Systems Manager User Guide*.
 * 
 * Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and
 * remediate operational issues impacting the performance and health of their Amazon Web Services resources. For
 * more information, see Amazon Web Services Systems Manager OpsCenter in the
 * *Amazon Web Services Systems Manager User Guide*.
 */export const updateOpsItem = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdateOpsItem" }, UpdateOpsItemRequest, UpdateOpsItemResponse, [InternalServerError, OpsItemAccessDeniedException, OpsItemAlreadyExistsException, OpsItemConflictException, OpsItemInvalidParameterException, OpsItemLimitExceededException, OpsItemNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an
 * Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are tools in
 * Amazon Web Services Systems Manager.
 */export const associateOpsItemRelatedItem = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.AssociateOpsItemRelatedItem" }, AssociateOpsItemRelatedItemRequest, AssociateOpsItemRelatedItemResponse, [InternalServerError, OpsItemConflictException, OpsItemInvalidParameterException, OpsItemLimitExceededException, OpsItemNotFoundException, OpsItemRelatedItemAlreadyExistsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Generates an activation code and activation ID you can use to register your on-premises
 * servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with
 * Systems Manager makes it possible to manage them using Systems Manager tools. You use the activation code and ID when
 * installing SSM Agent on machines in your hybrid environment. For more information about
 * requirements for managing on-premises machines using Systems Manager, see Using Amazon Web Services Systems Manager in
 * hybrid and multicloud environments in the *Amazon Web Services Systems Manager User Guide*.
 * 
 * Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are
 * configured for Systems Manager are all called *managed nodes*.
 */export const createActivation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.CreateActivation" }, CreateActivationRequest, CreateActivationResult, [InternalServerError, InvalidParameters]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new OpsItem. You must have permission in Identity and Access Management (IAM) to create a new OpsItem. For more information, see Set up OpsCenter in the
 * *Amazon Web Services Systems Manager User Guide*.
 * 
 * Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and
 * remediate operational issues impacting the performance and health of their Amazon Web Services resources. For
 * more information, see Amazon Web Services Systems Manager OpsCenter in the
 * *Amazon Web Services Systems Manager User Guide*.
 */export const createOpsItem = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.CreateOpsItem" }, CreateOpsItemRequest, CreateOpsItemResponse, [InternalServerError, OpsItemAccessDeniedException, OpsItemAlreadyExistsException, OpsItemInvalidParameterException, OpsItemLimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a patch baseline.
 * 
 * For information about valid key-value pairs in `PatchFilters` for each supported
 * operating system type, see PatchFilter.
 */export const createPatchBaseline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.CreatePatchBaseline" }, CreatePatchBaselineRequest, CreatePatchBaselineResult, [IdempotentParameterMismatch, InternalServerError, ResourceLimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes details about the activation, such as the date and time the activation was
 * created, its expiration date, the Identity and Access Management (IAM) role assigned to
 * the managed nodes in the activation, and the number of nodes registered by using this
 * activation.
 */export const describeActivations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeActivations" }, DescribeActivationsRequest, DescribeActivationsResult, [InternalServerError, InvalidFilter, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Views all executions for a specific association ID.
 */export const describeAssociationExecutions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeAssociationExecutions" }, DescribeAssociationExecutionsRequest, DescribeAssociationExecutionsResult, [AssociationDoesNotExist, InternalServerError, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides details about all active and terminated Automation executions.
 */export const describeAutomationExecutions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeAutomationExecutions" }, DescribeAutomationExecutionsRequest, DescribeAutomationExecutionsResult, [InternalServerError, InvalidFilterKey, InvalidFilterValue, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Information about all active and terminated step executions in an Automation
 * workflow.
 */export const describeAutomationStepExecutions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeAutomationStepExecutions" }, DescribeAutomationStepExecutionsRequest, DescribeAutomationStepExecutionsResult, [AutomationExecutionNotFoundException, InternalServerError, InvalidFilterKey, InvalidFilterValue, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified Amazon Web Services Systems Manager document (SSM document).
 */export const describeDocument = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeDocument" }, DescribeDocumentRequest, DescribeDocumentResult, [InternalServerError, InvalidDocument, InvalidDocumentVersion]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the
 * document, you are the owner. If a document is shared, it can either be shared privately (by
 * specifying a user's Amazon Web Services account ID) or publicly (*All*).
 */export const describeDocumentPermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeDocumentPermission" }, DescribeDocumentPermissionRequest, DescribeDocumentPermissionResponse, [InternalServerError, InvalidDocument, InvalidDocumentOperation, InvalidNextToken, InvalidPermissionType]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a specific delete inventory operation.
 */export const describeInventoryDeletions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeInventoryDeletions" }, DescribeInventoryDeletionsRequest, DescribeInventoryDeletionsResult, [InternalServerError, InvalidDeletionIdException, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the executions of a maintenance window. This includes information about when the
 * maintenance window was scheduled to be active, and information about tasks registered and run
 * with the maintenance window.
 */export const describeMaintenanceWindowExecutions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeMaintenanceWindowExecutions" }, DescribeMaintenanceWindowExecutionsRequest, DescribeMaintenanceWindowExecutionsResult, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see Set up OpsCenter in the
 * *Amazon Web Services Systems Manager User Guide*.
 * 
 * Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and
 * remediate operational issues impacting the performance and health of their Amazon Web Services resources. For
 * more information, see Amazon Web Services Systems Manager OpsCenter in the
 * *Amazon Web Services Systems Manager User Guide*.
 */export const describeOpsItems = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeOpsItems" }, DescribeOpsItemsRequest, DescribeOpsItemsResponse, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the parameters in your Amazon Web Services account or the parameters shared with you when you enable
 * the Shared option.
 * 
 * Request results are returned on a best-effort basis. If you specify `MaxResults`
 * in the request, the response includes information up to the limit specified. The number of items
 * returned, however, can be between zero and the value of `MaxResults`. If the service
 * reaches an internal limit while processing the results, it stops the operation and returns the
 * matching values up to that point and a `NextToken`. You can specify the
 * `NextToken` in a subsequent call to get the next set of results.
 * 
 * Parameter names can't contain spaces. The service removes any spaces specified for the
 * beginning or end of a parameter name. If the specified name for a parameter contains spaces
 * between characters, the request fails with a `ValidationException` error.
 * 
 * If you change the KMS key alias for the KMS key used to encrypt a parameter,
 * then you must also update the key alias the parameter uses to reference KMS. Otherwise,
 * `DescribeParameters` retrieves whatever the original key alias was
 * referencing.
 */export const describeParameters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeParameters" }, DescribeParametersRequest, DescribeParametersResult, [InternalServerError, InvalidFilterKey, InvalidFilterOption, InvalidFilterValue, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the association between an OpsItem and a related item. For example, this API
 * operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a tool in
 * Amazon Web Services Systems Manager.
 */export const disassociateOpsItemRelatedItem = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DisassociateOpsItemRelatedItem" }, DisassociateOpsItemRelatedItemRequest, DisassociateOpsItemRelatedItemResponse, [InternalServerError, OpsItemConflictException, OpsItemInvalidParameterException, OpsItemNotFoundException, OpsItemRelatedItemAssociationNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If
 * you specify a time, `GetCalendarState` returns the state of the calendar at that
 * specific time, and returns the next time that the change calendar state will transition. If you
 * don't specify a time, `GetCalendarState` uses the current time. Change Calendar
 * entries have two possible states: `OPEN` or `CLOSED`.
 * 
 * If you specify more than one calendar in a request, the command returns the status of
 * `OPEN` only if all calendars in the request are open. If one or more calendars in the
 * request are closed, the status returned is `CLOSED`.
 * 
 * For more information about Change Calendar, a tool in Amazon Web Services Systems Manager, see Amazon Web Services Systems Manager Change Calendar in the *Amazon Web Services Systems Manager User Guide*.
 */export const getCalendarState = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetCalendarState" }, GetCalendarStateRequest, GetCalendarStateResponse, [InternalServerError, InvalidDocument, InvalidDocumentType, UnsupportedCalendarException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current snapshot for the patch baseline the managed node uses. This API is
 * primarily used by the `AWS-RunPatchBaseline` Systems Manager document (SSM document).
 * 
 * If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid
 * this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a tool in Amazon Web Services Systems Manager,
 * with an SSM document that enables you to target a managed node with a script or command. For
 * example, run the command using the `AWS-RunShellScript` document or the
 * `AWS-RunPowerShellScript` document.
 */export const getDeployablePatchSnapshotForInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetDeployablePatchSnapshotForInstance" }, GetDeployablePatchSnapshotForInstanceRequest, GetDeployablePatchSnapshotForInstanceResult, [InternalServerError, UnsupportedFeatureRequiredException, UnsupportedOperatingSystem]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).
 */export const getDocument = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetDocument" }, GetDocumentRequest, GetDocumentResult, [InternalServerError, InvalidDocument, InvalidDocumentVersion]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Return a list of inventory type names for the account, or return a list of attribute names
 * for a specific Inventory item type.
 */export const getInventorySchema = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetInventorySchema" }, GetInventorySchemaRequest, GetInventorySchemaResult, [InternalServerError, InvalidNextToken, InvalidTypeNameException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the history of all changes to a parameter.
 * 
 * Parameter names can't contain spaces. The service removes any spaces specified for the
 * beginning or end of a parameter name. If the specified name for a parameter contains spaces
 * between characters, the request fails with a `ValidationException` error.
 * 
 * If you change the KMS key alias for the KMS key used to encrypt a parameter,
 * then you must also update the key alias the parameter uses to reference KMS. Otherwise,
 * `GetParameterHistory` retrieves whatever the original key alias was
 * referencing.
 */export const getParameterHistory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetParameterHistory" }, GetParameterHistoryRequest, GetParameterHistoryResult, [InternalServerError, InvalidKeyId, InvalidNextToken, ParameterNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns all State Manager associations in the current Amazon Web Services account and Amazon Web Services Region. You
 * can limit the results to a specific State Manager association document or managed node by
 * specifying a filter. State Manager is a tool in Amazon Web Services Systems Manager.
 */export const listAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListAssociations" }, ListAssociationsRequest, ListAssociationsResult, [InternalServerError, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * For a specified resource ID, this API operation returns a list of compliance statuses for
 * different resource types. Currently, you can only specify one resource ID per call. List results
 * depend on the criteria specified in the filter.
 */export const listComplianceItems = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListComplianceItems" }, ListComplianceItemsRequest, ListComplianceItemsResult, [InternalServerError, InvalidFilter, InvalidNextToken, InvalidResourceId, InvalidResourceType]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Amazon Web Services Systems Manager Change Manager will no longer be open to new
 * customers starting November 7, 2025. If you would like to use Change Manager, sign up prior to that date. Existing customers can
 * continue to use the service as normal. For more information, see
 * Amazon Web Services Systems Manager Change Manager availability change.
 * 
 * Information about approval reviews for a version of a change template in Change Manager.
 */export const listDocumentMetadataHistory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListDocumentMetadataHistory" }, ListDocumentMetadataHistoryRequest, ListDocumentMetadataHistoryResponse, [InternalServerError, InvalidDocument, InvalidDocumentVersion, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can
 * limit the results of this request by using a filter.
 */export const listDocuments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListDocuments" }, ListDocumentsRequest, ListDocumentsResult, [InternalServerError, InvalidFilterKey, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A list of inventory items returned by the request.
 */export const listInventoryEntries = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListInventoryEntries" }, ListInventoryEntriesRequest, ListInventoryEntriesResult, [InternalServerError, InvalidFilter, InvalidInstanceId, InvalidNextToken, InvalidTypeNameException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a
 * tool in Amazon Web Services Systems Manager.
 */export const listOpsItemRelatedItems = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListOpsItemRelatedItems" }, ListOpsItemRelatedItemsRequest, ListOpsItemRelatedItemsResponse, [InternalServerError, OpsItemInvalidParameterException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or
 * blobs.
 */export const listOpsMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListOpsMetadata" }, ListOpsMetadataRequest, ListOpsMetadataResult, [InternalServerError, OpsMetadataInvalidArgumentException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists your resource data sync configurations. Includes information about the last time a
 * sync attempted to start, the last sync status, and the last time a sync successfully
 * completed.
 * 
 * The number of sync configurations might be too large to return using a single call to
 * `ListResourceDataSync`. You can limit the number of sync configurations returned by
 * using the `MaxResults` parameter. To determine whether there are more sync
 * configurations to list, check the value of `NextToken` in the output. If there are
 * more sync configurations to list, you can request them by specifying the `NextToken`
 * returned in the call to the parameter of a subsequent call.
 */export const listResourceDataSync = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListResourceDataSync" }, ListResourceDataSyncRequest, ListResourceDataSyncResult, [InternalServerError, InvalidNextToken, ResourceDataSyncInvalidConfigurationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates a Systems Manager resource policy. A resource policy helps you to define the
 * IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources.
 * The following resources support Systems Manager resource policies.
 * 
 * - `OpsItemGroup` - The resource policy for `OpsItemGroup` enables
 * Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
 * 
 * - `Parameter` - The resource policy is used to share a parameter with other
 * accounts using Resource Access Manager (RAM).
 * 
 * To share a parameter, it must be in the advanced parameter tier. For information about
 * parameter tiers, see Managing
 * parameter tiers. For information about changing an existing standard parameter to an
 * advanced parameter, see Changing a standard parameter to an advanced parameter.
 * 
 * To share a `SecureString` parameter, it must be encrypted with a customer managed key, and you must share the key separately through Key Management Service. Amazon Web Services managed keys cannot be shared. Parameters encrypted with the default Amazon Web Services managed key can be updated to use a customer managed key instead. For KMS key definitions, see KMS concepts in the
 * *Key Management Service Developer Guide*.
 * 
 * While you can share a parameter using the Systems Manager `PutResourcePolicy` operation,
 * we recommend using Resource Access Manager (RAM) instead. This is because using
 * `PutResourcePolicy` requires the extra step of promoting the parameter to a
 * standard RAM Resource Share using the RAM
 * PromoteResourceShareCreatedFromPolicy API operation. Otherwise, the parameter won't
 * be returned by the Systems Manager DescribeParameters API operation using the `--shared` option.
 * 
 * For more information, see Sharing a
 * parameter in the *Amazon Web Services Systems Manager User Guide*
 */export const putResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [InternalServerError, MalformedResourcePolicyDocumentException, ResourceNotFoundException, ResourcePolicyConflictException, ResourcePolicyInvalidParameterException, ResourcePolicyLimitExceededException, ResourcePolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends a signal to an Automation execution to change the current behavior or status of the
 * execution.
 */export const sendAutomationSignal = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.SendAutomationSignal" }, SendAutomationSignalRequest, SendAutomationSignalResult, [AutomationExecutionNotFoundException, AutomationStepNotFoundException, InternalServerError, InvalidAutomationSignalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the workflow for just-in-time node access sessions.
 */export const startAccessRequest = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.StartAccessRequest" }, StartAccessRequestRequest, StartAccessRequestResponse, [AccessDeniedException, InternalServerError, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates the process of creating a preview showing the effects that running a specified
 * Automation runbook would have on the targeted resources.
 */export const startExecutionPreview = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.StartExecutionPreview" }, StartExecutionPreviewRequest, StartExecutionPreviewResponse, [InternalServerError, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates a connection to a target (for example, a managed node) for a Session Manager session.
 * Returns a URL and token that can be used to open a WebSocket connection for sending input and
 * receiving outputs.
 * 
 * Amazon Web Services CLI usage: `start-session` is an interactive command that requires the Session Manager
 * plugin to be installed on the client machine making the call. For information, see Install
 * the Session Manager plugin for the Amazon Web Services CLI in the *Amazon Web Services Systems Manager User Guide*.
 * 
 * Amazon Web Services Tools for PowerShell usage: Start-SSMSession isn't currently supported by Amazon Web Services Tools
 * for PowerShell on Windows local machines.
 */export const startSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.StartSession" }, StartSessionRequest, StartSessionResponse, [InternalServerError, InvalidDocument, TargetNotConnected]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Set the default version of a document.
 * 
 * If you change a document version for a State Manager association, Systems Manager immediately runs
 * the association unless you previously specifed the `apply-only-at-cron-interval`
 * parameter.
 */export const updateDocumentDefaultVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdateDocumentDefaultVersion" }, UpdateDocumentDefaultVersionRequest, UpdateDocumentDefaultVersionResult, [InternalServerError, InvalidDocument, InvalidDocumentSchemaVersion, InvalidDocumentVersion]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.
 */export const updateOpsMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdateOpsMetadata" }, UpdateOpsMetadataRequest, UpdateOpsMetadataResult, [InternalServerError, OpsMetadataInvalidArgumentException, OpsMetadataKeyLimitExceededException, OpsMetadataNotFoundException, OpsMetadataTooManyUpdatesException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. The following
 * resources support Systems Manager resource policies.
 * 
 * - `OpsItemGroup` - The resource policy for `OpsItemGroup` enables
 * Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
 * 
 * - `Parameter` - The resource policy is used to share a parameter with other
 * accounts using Resource Access Manager (RAM). For more information about
 * cross-account sharing of parameters, see Working with
 * shared parameters in the *Amazon Web Services Systems Manager User Guide*.
 */export const deleteResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, DeleteResourcePolicyResponse, [InternalServerError, MalformedResourcePolicyDocumentException, ResourceNotFoundException, ResourcePolicyConflictException, ResourcePolicyInvalidParameterException, ResourcePolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the association for the specified target or managed node. If you created the
 * association by using the `Targets` parameter, then you must retrieve the association
 * by using the association ID.
 */export const describeAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeAssociation" }, DescribeAssociationRequest, DescribeAssociationResult, [AssociationDoesNotExist, InternalServerError, InvalidAssociationVersion, InvalidDocument, InvalidInstanceId]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current effective patches (the patch and the approval state) for the specified
 * patch baseline. Applies to patch baselines for Windows only.
 */export const describeEffectivePatchesForPatchBaseline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeEffectivePatchesForPatchBaseline" }, DescribeEffectivePatchesForPatchBaselineRequest, DescribeEffectivePatchesForPatchBaselineResult, [DoesNotExistException, InternalServerError, InvalidResourceId, UnsupportedOperatingSystem]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The status of the associations for the managed nodes.
 */export const describeInstanceAssociationsStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeInstanceAssociationsStatus" }, DescribeInstanceAssociationsStatusRequest, DescribeInstanceAssociationsStatusResult, [InternalServerError, InvalidInstanceId, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * An API operation used by the Systems Manager console to display information about Systems Manager managed
 * nodes.
 */export const describeInstanceProperties = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeInstanceProperties" }, DescribeInstancePropertiesRequest, DescribeInstancePropertiesResult, [InternalServerError, InvalidActivationId, InvalidDocument, InvalidFilterKey, InvalidInstanceId, InvalidInstancePropertyFilterValue, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of all active sessions (both connected and disconnected) or terminated
 * sessions from the past 30 days.
 */export const describeSessions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeSessions" }, DescribeSessionsRequest, DescribeSessionsResponse, [InternalServerError, InvalidFilterKey, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a credentials set to be used with just-in-time node access.
 */export const getAccessToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetAccessToken" }, GetAccessTokenRequest, GetAccessTokenResponse, [AccessDeniedException, InternalServerError, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get detailed information about a particular Automation execution.
 */export const getAutomationExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetAutomationExecution" }, GetAutomationExecutionRequest, GetAutomationExecutionResult, [AutomationExecutionNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates the process of retrieving an existing preview that shows the effects that running
 * a specified Automation runbook would have on the targeted resources.
 */export const getExecutionPreview = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetExecutionPreview" }, GetExecutionPreviewRequest, GetExecutionPreviewResponse, [InternalServerError, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * An invocation is copy of a command sent to a specific managed node. A command can apply to
 * one or more managed nodes. A command invocation applies to one managed node. For example, if a
 * user runs `SendCommand` against three managed nodes, then a command invocation is
 * created for each requested managed node ID. `ListCommandInvocations` provide status
 * about command execution.
 */export const listCommandInvocations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListCommandInvocations" }, ListCommandInvocationsRequest, ListCommandInvocationsResult, [InternalServerError, InvalidCommandId, InvalidFilterKey, InvalidInstanceId, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a summary count of compliant and non-compliant resources for a compliance type. For
 * example, this call can return State Manager associations, patches, or custom compliance types
 * according to the filter criteria that you specify.
 */export const listComplianceSummaries = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListComplianceSummaries" }, ListComplianceSummariesRequest, ListComplianceSummariesResult, [InternalServerError, InvalidFilter, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can
 * limit the results to events associated with specific OpsItems by specifying a filter.
 */export const listOpsItemEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListOpsItemEvents" }, ListOpsItemEventsRequest, ListOpsItemEventsResponse, [InternalServerError, OpsItemInvalidParameterException, OpsItemLimitExceededException, OpsItemNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a new task to a maintenance window.
 */export const registerTaskWithMaintenanceWindow = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.RegisterTaskWithMaintenanceWindow" }, RegisterTaskWithMaintenanceWindowRequest, RegisterTaskWithMaintenanceWindowResult, [DoesNotExistException, FeatureNotAvailableException, IdempotentParameterMismatch, InternalServerError, ResourceLimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Runs commands on one or more managed nodes.
 */export const sendCommand = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.SendCommand" }, SendCommandRequest, SendCommandResult, [DuplicateInstanceId, InternalServerError, InvalidDocument, InvalidDocumentVersion, InvalidInstanceId, InvalidNotificationConfig, InvalidOutputFolder, InvalidParameters, InvalidRole, MaxDocumentSizeExceeded, UnsupportedPlatformType]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates execution of an Automation runbook.
 */export const startAutomationExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.StartAutomationExecution" }, StartAutomationExecutionRequest, StartAutomationExecutionResult, [AutomationDefinitionNotFoundException, AutomationDefinitionVersionNotFoundException, AutomationExecutionLimitExceededException, IdempotentParameterMismatch, InternalServerError, InvalidAutomationExecutionParametersException, InvalidTarget]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates one or more values for an SSM document.
 */export const updateDocument = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdateDocument" }, UpdateDocumentRequest, UpdateDocumentResult, [DocumentVersionLimitExceeded, DuplicateDocumentContent, DuplicateDocumentVersionName, InternalServerError, InvalidDocument, InvalidDocumentContent, InvalidDocumentOperation, InvalidDocumentSchemaVersion, InvalidDocumentVersion, MaxDocumentSizeExceeded]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A State Manager association defines the state that you want to maintain on your managed
 * nodes. For example, an association can specify that anti-virus software must be installed and
 * running on your managed nodes, or that certain ports must be closed. For static targets, the
 * association specifies a schedule for when the configuration is reapplied. For dynamic targets,
 * such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a tool in Amazon Web Services Systems Manager
 * applies the configuration when new managed nodes are added to the group. The association also
 * specifies actions to take when applying the configuration. For example, an association for
 * anti-virus software might run once a day. If the software isn't installed, then State Manager
 * installs it. If the software is installed, but the service isn't running, then the association
 * might instruct State Manager to start the service.
 */export const createAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.CreateAssociation" }, CreateAssociationRequest, CreateAssociationResult, [AssociationAlreadyExists, AssociationLimitExceeded, InternalServerError, InvalidDocument, InvalidDocumentVersion, InvalidInstanceId, InvalidOutputLocation, InvalidParameters, InvalidSchedule, InvalidTag, InvalidTarget, InvalidTargetMaps, UnsupportedPlatformType]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes
 * or targets.
 * 
 * When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager
 * Agent (SSM Agent) running on the managed node processes the document and configures the node as
 * specified.
 * 
 * If you associate a document with a managed node that already has an associated document, the
 * system returns the AssociationAlreadyExists exception.
 */export const createAssociationBatch = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.CreateAssociationBatch" }, CreateAssociationBatchRequest, CreateAssociationBatchResult, [AssociationLimitExceeded, DuplicateInstanceId, InternalServerError, InvalidDocument, InvalidDocumentVersion, InvalidInstanceId, InvalidOutputLocation, InvalidParameters, InvalidSchedule, InvalidTarget, InvalidTargetMaps, UnsupportedPlatformType]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs
 * on your managed nodes. For more information about SSM documents, including information about
 * supported schemas, features, and syntax, see Amazon Web Services Systems Manager Documents in the
 * *Amazon Web Services Systems Manager User Guide*.
 */export const createDocument = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.CreateDocument" }, CreateDocumentRequest, CreateDocumentResult, [DocumentAlreadyExists, DocumentLimitExceeded, InternalServerError, InvalidDocumentContent, InvalidDocumentSchemaVersion, MaxDocumentSizeExceeded, NoLongerSupportedException, TooManyUpdates]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify
 * information about the new application, including the application type.
 */export const createOpsMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.CreateOpsMetadata" }, CreateOpsMetadataRequest, CreateOpsMetadataResult, [InternalServerError, OpsMetadataAlreadyExistsException, OpsMetadataInvalidArgumentException, OpsMetadataLimitExceededException, OpsMetadataTooManyUpdatesException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A resource data sync helps you view data from multiple sources in a single location.
 * Amazon Web Services Systems Manager offers two types of resource data sync: `SyncToDestination` and
 * `SyncFromSource`.
 * 
 * You can configure Systems Manager Inventory to use the `SyncToDestination` type to
 * synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see Creating a
 * resource data sync for Inventory in the *Amazon Web Services Systems Manager User Guide*.
 * 
 * You can configure Systems Manager Explorer to use the `SyncFromSource` type to synchronize
 * operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a
 * single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple
 * Amazon Web Services accounts and Amazon Web Services Regions or `EntireOrganization` by using Organizations. For more
 * information, see Setting up Systems Manager
 * Explorer to display data from multiple accounts and Regions in the
 * *Amazon Web Services Systems Manager User Guide*.
 * 
 * A resource data sync is an asynchronous operation that returns immediately. After a
 * successful initial sync is completed, the system continuously syncs data. To check the status of
 * a sync, use the ListResourceDataSync.
 * 
 * By default, data isn't encrypted in Amazon S3. We strongly recommend that you
 * enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you
 * secure access to the Amazon S3 bucket by creating a restrictive bucket policy.
 */export const createResourceDataSync = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.CreateResourceDataSync" }, CreateResourceDataSyncRequest, CreateResourceDataSyncResult, [InternalServerError, ResourceDataSyncAlreadyExistsException, ResourceDataSyncCountExceededException, ResourceDataSyncInvalidConfigurationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Views information about a specific execution of a specific association.
 */export const describeAssociationExecutionTargets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeAssociationExecutionTargets" }, DescribeAssociationExecutionTargetsRequest, DescribeAssociationExecutionTargetsResult, [AssociationDoesNotExist, AssociationExecutionDoesNotExist, InternalServerError, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Takes in filters and returns a list of managed nodes matching the filter criteria.
 */export const listNodes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListNodes" }, ListNodesRequest, ListNodesResult, [InternalServerError, InvalidFilter, InvalidNextToken, ResourceDataSyncNotFoundException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Generates a summary of managed instance/node metadata based on the filters and aggregators
 * you specify. Results are grouped by the input aggregator you specify.
 */export const listNodesSummary = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.ListNodesSummary" }, ListNodesSummaryRequest, ListNodesSummaryResult, [InternalServerError, InvalidAggregatorException, InvalidFilter, InvalidNextToken, ResourceDataSyncNotFoundException, UnsupportedOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Amazon Web Services Systems Manager Change Manager will no longer be open to new
 * customers starting November 7, 2025. If you would like to use Change Manager, sign up prior to that date. Existing customers can
 * continue to use the service as normal. For more information, see
 * Amazon Web Services Systems Manager Change Manager availability change.
 * 
 * Creates a change request for Change Manager. The Automation runbooks specified in the
 * change request run only after all required approvals for the change request have been
 * received.
 */export const startChangeRequestExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.StartChangeRequestExecution" }, StartChangeRequestExecutionRequest, StartChangeRequestExecutionResult, [AutomationDefinitionNotApprovedException, AutomationDefinitionNotFoundException, AutomationDefinitionVersionNotFoundException, AutomationExecutionLimitExceededException, IdempotentParameterMismatch, InternalServerError, InvalidAutomationExecutionParametersException, NoLongerSupportedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an association. You can update the association name and version, the document
 * version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you
 * call `UpdateAssociation`, the system removes all optional parameters from the request
 * and overwrites the association with null values for those parameters. This is by design. You must
 * specify all optional parameters in the call, even if you are not changing the parameters. This
 * includes the `Name` parameter. Before calling this API action, we recommend that you
 * call the DescribeAssociation API operation and make a note of all optional
 * parameters required for your `UpdateAssociation` call.
 * 
 * In order to call this API operation, a user, group, or role must be granted permission to
 * call the DescribeAssociation API operation. If you don't have permission to
 * call `DescribeAssociation`, then you receive the following error: An error
 * occurred (AccessDeniedException) when calling the UpdateAssociation operation: User:
 * isn't authorized to perform: ssm:DescribeAssociation on resource:
 * 
 * When you update an association, the association immediately runs against the specified
 * targets. You can add the `ApplyOnlyAtCronInterval` parameter to run the association
 * during the next schedule run.
 */export const updateAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.UpdateAssociation" }, UpdateAssociationRequest, UpdateAssociationResult, [AssociationDoesNotExist, AssociationVersionLimitExceeded, InternalServerError, InvalidAssociationVersion, InvalidDocument, InvalidDocumentVersion, InvalidOutputLocation, InvalidParameters, InvalidSchedule, InvalidTarget, InvalidTargetMaps, InvalidUpdate, TooManyUpdates]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a custom inventory type or the data associated with a custom Inventory type. Deleting
 * a custom inventory type is also referred to as deleting a custom inventory schema.
 */export const deleteInventory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DeleteInventory" }, DeleteInventoryRequest, DeleteInventoryResult, [InternalServerError, InvalidDeleteInventoryParametersException, InvalidInventoryRequestException, InvalidOptionException, InvalidTypeNameException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides information about one or more of your managed nodes, including the operating system
 * platform, SSM Agent version, association status, and IP address. This operation does not return
 * information for nodes that are either Stopped or Terminated.
 * 
 * If you specify one or more node IDs, the operation returns information for those managed
 * nodes. If you don't specify node IDs, it returns information for all your managed nodes. If you
 * specify a node ID that isn't valid or a node that you don't own, you receive an error.
 * 
 * The `IamRole` field returned for this API operation is the role assigned to an
 * Amazon EC2 instance configured with a Systems Manager Quick Setup host management configuration or
 * the role assigned to an on-premises managed node.
 */export const describeInstanceInformation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.DescribeInstanceInformation" }, DescribeInstanceInformationRequest, DescribeInstanceInformationResult, [InternalServerError, InvalidFilterKey, InvalidInstanceId, InvalidInstanceInformationFilterValue, InvalidNextToken]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers a compliance type and other compliance details on a designated resource. This
 * operation lets you register custom compliance details with a resource. This call overwrites
 * existing compliance information on the resource, so you must provide a full list of compliance
 * items each time that you send the request.
 * 
 * ComplianceType can be one of the following:
 * 
 * - ExecutionId: The execution ID when the patch, association, or custom compliance item was
 * applied.
 * 
 * - ExecutionType: Specify patch, association, or Custom:`string`.
 * 
 * - ExecutionTime. The time the patch, association, or custom compliance item was applied to
 * the managed node.
 * 
 * For State Manager associations, this represents the time when compliance status was
 * captured by the Systems Manager service during its internal compliance aggregation workflow, not
 * necessarily when the association was executed on the managed node. State Manager updates
 * compliance information for all associations on an instance whenever any association executes,
 * which may result in multiple associations showing the same execution time.
 * 
 * - Id: The patch, association, or custom compliance ID.
 * 
 * - Title: A title.
 * 
 * - Status: The status of the compliance item. For example, `approved` for patches,
 * or `Failed` for associations.
 * 
 * - Severity: A patch severity. For example, `Critical`.
 * 
 * - DocumentName: An SSM document name. For example, `AWS-RunPatchBaseline`.
 * 
 * - DocumentVersion: An SSM document version number. For example, 4.
 * 
 * - Classification: A patch classification. For example, `security updates`.
 * 
 * - PatchBaselineId: A patch baseline ID.
 * 
 * - PatchSeverity: A patch severity. For example, `Critical`.
 * 
 * - PatchState: A patch state. For example, `InstancesWithFailedPatches`.
 * 
 * - PatchGroup: The name of a patch group.
 * 
 * - InstalledTime: The time the association, patch, or custom compliance item was applied to
 * the resource. Specify the time by using the following format:
 * `yyyy-MM-dd'T'HH:mm:ss'Z'`
 */export const putComplianceItems = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.PutComplianceItems" }, PutComplianceItemsRequest, PutComplianceItemsResult, [ComplianceTypeCountLimitExceededException, InternalServerError, InvalidItemContentException, InvalidResourceId, InvalidResourceType, ItemSizeLimitExceededException, TotalSizeLimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * View a summary of operations metadata (OpsData) based on specified filters and aggregators.
 * OpsData can include information about Amazon Web Services Systems Manager OpsCenter operational workitems (OpsItems) as
 * well as information about any Amazon Web Services resource or service configured to report OpsData to Amazon Web Services Systems Manager
 * Explorer.
 */export const getOpsSummary = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetOpsSummary" }, GetOpsSummaryRequest, GetOpsSummaryResult, [InternalServerError, InvalidAggregatorException, InvalidFilter, InvalidNextToken, InvalidTypeNameException, ResourceDataSyncNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Query inventory information. This includes managed node status, such as `Stopped`
 * or `Terminated`.
 */export const getInventory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.GetInventory" }, GetInventoryRequest, GetInventoryResult, [InternalServerError, InvalidAggregatorException, InvalidFilter, InvalidInventoryGroupException, InvalidNextToken, InvalidResultAttributeException, InvalidTypeNameException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Bulk update custom inventory items on one or more managed nodes. The request adds an
 * inventory item, if it doesn't already exist, or updates an inventory item, if it does
 * exist.
 */export const putInventory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.PutInventory" }, PutInventoryRequest, PutInventoryResult, [CustomSchemaCountLimitExceededException, InternalServerError, InvalidInstanceId, InvalidInventoryItemContextException, InvalidItemContentException, InvalidTypeNameException, ItemContentMismatchException, ItemSizeLimitExceededException, SubTypeCountLimitExceededException, TotalSizeLimitExceededException, UnsupportedInventoryItemContextException, UnsupportedInventorySchemaVersionException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create or update a parameter in Parameter Store.
 */export const putParameter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-11-06", sdkId: "SSM", sigV4ServiceName: "ssm", name: "AmazonSSM.PutParameter" }, PutParameterRequest, PutParameterResult, [HierarchyLevelLimitExceededException, HierarchyTypeMismatchException, IncompatiblePolicyException, InternalServerError, InvalidAllowedPatternException, InvalidKeyId, InvalidPolicyAttributeException, InvalidPolicyTypeException, ParameterAlreadyExists, ParameterLimitExceeded, ParameterMaxVersionLimitExceeded, ParameterPatternMismatchException, PoliciesLimitExceededException, TooManyUpdates, UnsupportedParameterType]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

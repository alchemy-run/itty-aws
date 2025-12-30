import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetInvitationsCountRequest extends S.Class<GetInvitationsCountRequest>("GetInvitationsCountRequest")({}) {}
export const FindingIds = S.Array(S.String);
export const FindingTypes = S.Array(S.String);
export const AccountIds = S.Array(S.String);
export const CoverageStatisticsTypeList = S.Array(S.String);
export const FindingStatisticTypes = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AcceptAdministratorInvitationRequest extends S.Class<AcceptAdministratorInvitationRequest>("AcceptAdministratorInvitationRequest")({DetectorId: S.String, AdministratorId: S.String, InvitationId: S.String}) {}
export class AcceptAdministratorInvitationResponse extends S.Class<AcceptAdministratorInvitationResponse>("AcceptAdministratorInvitationResponse")({}) {}
export class AcceptInvitationRequest extends S.Class<AcceptInvitationRequest>("AcceptInvitationRequest")({DetectorId: S.String, MasterId: S.String, InvitationId: S.String}) {}
export class AcceptInvitationResponse extends S.Class<AcceptInvitationResponse>("AcceptInvitationResponse")({}) {}
export class ArchiveFindingsRequest extends S.Class<ArchiveFindingsRequest>("ArchiveFindingsRequest")({DetectorId: S.String, FindingIds: FindingIds}) {}
export class ArchiveFindingsResponse extends S.Class<ArchiveFindingsResponse>("ArchiveFindingsResponse")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class CreateIPSetRequest extends S.Class<CreateIPSetRequest>("CreateIPSetRequest")({DetectorId: S.String, Name: S.String, Format: S.String, Location: S.String, Activate: S.Boolean, ClientToken: S.optional(S.String), Tags: S.optional(TagMap), ExpectedBucketOwner: S.optional(S.String)}) {}
export class CreateSampleFindingsRequest extends S.Class<CreateSampleFindingsRequest>("CreateSampleFindingsRequest")({DetectorId: S.String, FindingTypes: S.optional(FindingTypes)}) {}
export class CreateSampleFindingsResponse extends S.Class<CreateSampleFindingsResponse>("CreateSampleFindingsResponse")({}) {}
export class CreateThreatEntitySetRequest extends S.Class<CreateThreatEntitySetRequest>("CreateThreatEntitySetRequest")({DetectorId: S.String, Name: S.String, Format: S.String, Location: S.String, ExpectedBucketOwner: S.optional(S.String), Activate: S.Boolean, ClientToken: S.optional(S.String), Tags: S.optional(TagMap)}) {}
export class CreateThreatIntelSetRequest extends S.Class<CreateThreatIntelSetRequest>("CreateThreatIntelSetRequest")({DetectorId: S.String, Name: S.String, Format: S.String, Location: S.String, Activate: S.Boolean, ClientToken: S.optional(S.String), Tags: S.optional(TagMap), ExpectedBucketOwner: S.optional(S.String)}) {}
export class CreateTrustedEntitySetRequest extends S.Class<CreateTrustedEntitySetRequest>("CreateTrustedEntitySetRequest")({DetectorId: S.String, Name: S.String, Format: S.String, Location: S.String, ExpectedBucketOwner: S.optional(S.String), Activate: S.Boolean, ClientToken: S.optional(S.String), Tags: S.optional(TagMap)}) {}
export class DeclineInvitationsRequest extends S.Class<DeclineInvitationsRequest>("DeclineInvitationsRequest")({AccountIds: AccountIds}) {}
export class DeleteDetectorRequest extends S.Class<DeleteDetectorRequest>("DeleteDetectorRequest")({DetectorId: S.String}) {}
export class DeleteDetectorResponse extends S.Class<DeleteDetectorResponse>("DeleteDetectorResponse")({}) {}
export class DeleteFilterRequest extends S.Class<DeleteFilterRequest>("DeleteFilterRequest")({DetectorId: S.String, FilterName: S.String}) {}
export class DeleteFilterResponse extends S.Class<DeleteFilterResponse>("DeleteFilterResponse")({}) {}
export class DeleteInvitationsRequest extends S.Class<DeleteInvitationsRequest>("DeleteInvitationsRequest")({AccountIds: AccountIds}) {}
export class DeleteIPSetRequest extends S.Class<DeleteIPSetRequest>("DeleteIPSetRequest")({DetectorId: S.String, IpSetId: S.String}) {}
export class DeleteIPSetResponse extends S.Class<DeleteIPSetResponse>("DeleteIPSetResponse")({}) {}
export class DeleteMalwareProtectionPlanRequest extends S.Class<DeleteMalwareProtectionPlanRequest>("DeleteMalwareProtectionPlanRequest")({MalwareProtectionPlanId: S.String}) {}
export class DeleteMembersRequest extends S.Class<DeleteMembersRequest>("DeleteMembersRequest")({DetectorId: S.String, AccountIds: AccountIds}) {}
export class DeletePublishingDestinationRequest extends S.Class<DeletePublishingDestinationRequest>("DeletePublishingDestinationRequest")({DetectorId: S.String, DestinationId: S.String}) {}
export class DeletePublishingDestinationResponse extends S.Class<DeletePublishingDestinationResponse>("DeletePublishingDestinationResponse")({}) {}
export class DeleteThreatEntitySetRequest extends S.Class<DeleteThreatEntitySetRequest>("DeleteThreatEntitySetRequest")({DetectorId: S.String, ThreatEntitySetId: S.String}) {}
export class DeleteThreatEntitySetResponse extends S.Class<DeleteThreatEntitySetResponse>("DeleteThreatEntitySetResponse")({}) {}
export class DeleteThreatIntelSetRequest extends S.Class<DeleteThreatIntelSetRequest>("DeleteThreatIntelSetRequest")({DetectorId: S.String, ThreatIntelSetId: S.String}) {}
export class DeleteThreatIntelSetResponse extends S.Class<DeleteThreatIntelSetResponse>("DeleteThreatIntelSetResponse")({}) {}
export class DeleteTrustedEntitySetRequest extends S.Class<DeleteTrustedEntitySetRequest>("DeleteTrustedEntitySetRequest")({DetectorId: S.String, TrustedEntitySetId: S.String}) {}
export class DeleteTrustedEntitySetResponse extends S.Class<DeleteTrustedEntitySetResponse>("DeleteTrustedEntitySetResponse")({}) {}
export class DescribeOrganizationConfigurationRequest extends S.Class<DescribeOrganizationConfigurationRequest>("DescribeOrganizationConfigurationRequest")({DetectorId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribePublishingDestinationRequest extends S.Class<DescribePublishingDestinationRequest>("DescribePublishingDestinationRequest")({DetectorId: S.String, DestinationId: S.String}) {}
export class DisableOrganizationAdminAccountRequest extends S.Class<DisableOrganizationAdminAccountRequest>("DisableOrganizationAdminAccountRequest")({AdminAccountId: S.String}) {}
export class DisableOrganizationAdminAccountResponse extends S.Class<DisableOrganizationAdminAccountResponse>("DisableOrganizationAdminAccountResponse")({}) {}
export class DisassociateFromAdministratorAccountRequest extends S.Class<DisassociateFromAdministratorAccountRequest>("DisassociateFromAdministratorAccountRequest")({DetectorId: S.String}) {}
export class DisassociateFromAdministratorAccountResponse extends S.Class<DisassociateFromAdministratorAccountResponse>("DisassociateFromAdministratorAccountResponse")({}) {}
export class DisassociateFromMasterAccountRequest extends S.Class<DisassociateFromMasterAccountRequest>("DisassociateFromMasterAccountRequest")({DetectorId: S.String}) {}
export class DisassociateFromMasterAccountResponse extends S.Class<DisassociateFromMasterAccountResponse>("DisassociateFromMasterAccountResponse")({}) {}
export class DisassociateMembersRequest extends S.Class<DisassociateMembersRequest>("DisassociateMembersRequest")({DetectorId: S.String, AccountIds: AccountIds}) {}
export class EnableOrganizationAdminAccountRequest extends S.Class<EnableOrganizationAdminAccountRequest>("EnableOrganizationAdminAccountRequest")({AdminAccountId: S.String}) {}
export class EnableOrganizationAdminAccountResponse extends S.Class<EnableOrganizationAdminAccountResponse>("EnableOrganizationAdminAccountResponse")({}) {}
export class GetAdministratorAccountRequest extends S.Class<GetAdministratorAccountRequest>("GetAdministratorAccountRequest")({DetectorId: S.String}) {}
export class GetDetectorRequest extends S.Class<GetDetectorRequest>("GetDetectorRequest")({DetectorId: S.String}) {}
export class GetFilterRequest extends S.Class<GetFilterRequest>("GetFilterRequest")({DetectorId: S.String, FilterName: S.String}) {}
export class SortCriteria extends S.Class<SortCriteria>("SortCriteria")({AttributeName: S.optional(S.String), OrderBy: S.optional(S.String)}) {}
export class GetFindingsRequest extends S.Class<GetFindingsRequest>("GetFindingsRequest")({DetectorId: S.String, FindingIds: FindingIds, SortCriteria: S.optional(SortCriteria)}) {}
export const Eq = S.Array(S.String);
export const Neq = S.Array(S.String);
export const Equals = S.Array(S.String);
export const NotEquals = S.Array(S.String);
export const Matches = S.Array(S.String);
export const NotMatches = S.Array(S.String);
export class Condition extends S.Class<Condition>("Condition")({Eq: S.optional(Eq), Neq: S.optional(Neq), Gt: S.optional(S.Number), Gte: S.optional(S.Number), Lt: S.optional(S.Number), Lte: S.optional(S.Number), Equals: S.optional(Equals), NotEquals: S.optional(NotEquals), GreaterThan: S.optional(S.Number), GreaterThanOrEqual: S.optional(S.Number), LessThan: S.optional(S.Number), LessThanOrEqual: S.optional(S.Number), Matches: S.optional(Matches), NotMatches: S.optional(NotMatches)}) {}
export const Criterion = S.Record({key: S.String, value: Condition});
export class FindingCriteria extends S.Class<FindingCriteria>("FindingCriteria")({Criterion: S.optional(Criterion)}) {}
export class GetFindingsStatisticsRequest extends S.Class<GetFindingsStatisticsRequest>("GetFindingsStatisticsRequest")({DetectorId: S.String, FindingStatisticTypes: S.optional(FindingStatisticTypes), FindingCriteria: S.optional(FindingCriteria), GroupBy: S.optional(S.String), OrderBy: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class GetInvitationsCountResponse extends S.Class<GetInvitationsCountResponse>("GetInvitationsCountResponse")({InvitationsCount: S.optional(S.Number)}) {}
export class GetIPSetRequest extends S.Class<GetIPSetRequest>("GetIPSetRequest")({DetectorId: S.String, IpSetId: S.String}) {}
export class GetMalwareProtectionPlanRequest extends S.Class<GetMalwareProtectionPlanRequest>("GetMalwareProtectionPlanRequest")({MalwareProtectionPlanId: S.String}) {}
export class GetMalwareScanRequest extends S.Class<GetMalwareScanRequest>("GetMalwareScanRequest")({ScanId: S.String}) {}
export class GetMalwareScanSettingsRequest extends S.Class<GetMalwareScanSettingsRequest>("GetMalwareScanSettingsRequest")({DetectorId: S.String}) {}
export class GetMasterAccountRequest extends S.Class<GetMasterAccountRequest>("GetMasterAccountRequest")({DetectorId: S.String}) {}
export class GetMemberDetectorsRequest extends S.Class<GetMemberDetectorsRequest>("GetMemberDetectorsRequest")({DetectorId: S.String, AccountIds: AccountIds}) {}
export class GetMembersRequest extends S.Class<GetMembersRequest>("GetMembersRequest")({DetectorId: S.String, AccountIds: AccountIds}) {}
export class GetRemainingFreeTrialDaysRequest extends S.Class<GetRemainingFreeTrialDaysRequest>("GetRemainingFreeTrialDaysRequest")({DetectorId: S.String, AccountIds: AccountIds}) {}
export class GetThreatEntitySetRequest extends S.Class<GetThreatEntitySetRequest>("GetThreatEntitySetRequest")({DetectorId: S.String, ThreatEntitySetId: S.String}) {}
export class GetThreatIntelSetRequest extends S.Class<GetThreatIntelSetRequest>("GetThreatIntelSetRequest")({DetectorId: S.String, ThreatIntelSetId: S.String}) {}
export class GetTrustedEntitySetRequest extends S.Class<GetTrustedEntitySetRequest>("GetTrustedEntitySetRequest")({DetectorId: S.String, TrustedEntitySetId: S.String}) {}
export class InviteMembersRequest extends S.Class<InviteMembersRequest>("InviteMembersRequest")({DetectorId: S.String, AccountIds: AccountIds, DisableEmailNotification: S.optional(S.Boolean), Message: S.optional(S.String)}) {}
export class ListDetectorsRequest extends S.Class<ListDetectorsRequest>("ListDetectorsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListFiltersRequest extends S.Class<ListFiltersRequest>("ListFiltersRequest")({DetectorId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListFindingsRequest extends S.Class<ListFindingsRequest>("ListFindingsRequest")({DetectorId: S.String, FindingCriteria: S.optional(FindingCriteria), SortCriteria: S.optional(SortCriteria), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListInvitationsRequest extends S.Class<ListInvitationsRequest>("ListInvitationsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListIPSetsRequest extends S.Class<ListIPSetsRequest>("ListIPSetsRequest")({DetectorId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListMalwareProtectionPlansRequest extends S.Class<ListMalwareProtectionPlansRequest>("ListMalwareProtectionPlansRequest")({NextToken: S.optional(S.String)}) {}
export class ListMembersRequest extends S.Class<ListMembersRequest>("ListMembersRequest")({DetectorId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), OnlyAssociated: S.optional(S.String)}) {}
export class ListOrganizationAdminAccountsRequest extends S.Class<ListOrganizationAdminAccountsRequest>("ListOrganizationAdminAccountsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListPublishingDestinationsRequest extends S.Class<ListPublishingDestinationsRequest>("ListPublishingDestinationsRequest")({DetectorId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class ListThreatEntitySetsRequest extends S.Class<ListThreatEntitySetsRequest>("ListThreatEntitySetsRequest")({DetectorId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListThreatIntelSetsRequest extends S.Class<ListThreatIntelSetsRequest>("ListThreatIntelSetsRequest")({DetectorId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTrustedEntitySetsRequest extends S.Class<ListTrustedEntitySetsRequest>("ListTrustedEntitySetsRequest")({DetectorId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class StartMonitoringMembersRequest extends S.Class<StartMonitoringMembersRequest>("StartMonitoringMembersRequest")({DetectorId: S.String, AccountIds: AccountIds}) {}
export class StopMonitoringMembersRequest extends S.Class<StopMonitoringMembersRequest>("StopMonitoringMembersRequest")({DetectorId: S.String, AccountIds: AccountIds}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UnarchiveFindingsRequest extends S.Class<UnarchiveFindingsRequest>("UnarchiveFindingsRequest")({DetectorId: S.String, FindingIds: FindingIds}) {}
export class UnarchiveFindingsResponse extends S.Class<UnarchiveFindingsResponse>("UnarchiveFindingsResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class S3LogsConfiguration extends S.Class<S3LogsConfiguration>("S3LogsConfiguration")({Enable: S.Boolean}) {}
export class KubernetesAuditLogsConfiguration extends S.Class<KubernetesAuditLogsConfiguration>("KubernetesAuditLogsConfiguration")({Enable: S.Boolean}) {}
export class KubernetesConfiguration extends S.Class<KubernetesConfiguration>("KubernetesConfiguration")({AuditLogs: KubernetesAuditLogsConfiguration}) {}
export class ScanEc2InstanceWithFindings extends S.Class<ScanEc2InstanceWithFindings>("ScanEc2InstanceWithFindings")({EbsVolumes: S.optional(S.Boolean)}) {}
export class MalwareProtectionConfiguration extends S.Class<MalwareProtectionConfiguration>("MalwareProtectionConfiguration")({ScanEc2InstanceWithFindings: S.optional(ScanEc2InstanceWithFindings)}) {}
export class DataSourceConfigurations extends S.Class<DataSourceConfigurations>("DataSourceConfigurations")({S3Logs: S.optional(S3LogsConfiguration), Kubernetes: S.optional(KubernetesConfiguration), MalwareProtection: S.optional(MalwareProtectionConfiguration)}) {}
export class DetectorAdditionalConfiguration extends S.Class<DetectorAdditionalConfiguration>("DetectorAdditionalConfiguration")({Name: S.optional(S.String), Status: S.optional(S.String)}) {}
export const DetectorAdditionalConfigurations = S.Array(DetectorAdditionalConfiguration);
export class DetectorFeatureConfiguration extends S.Class<DetectorFeatureConfiguration>("DetectorFeatureConfiguration")({Name: S.optional(S.String), Status: S.optional(S.String), AdditionalConfiguration: S.optional(DetectorAdditionalConfigurations)}) {}
export const DetectorFeatureConfigurations = S.Array(DetectorFeatureConfiguration);
export class UpdateDetectorRequest extends S.Class<UpdateDetectorRequest>("UpdateDetectorRequest")({DetectorId: S.String, Enable: S.optional(S.Boolean), FindingPublishingFrequency: S.optional(S.String), DataSources: S.optional(DataSourceConfigurations), Features: S.optional(DetectorFeatureConfigurations)}) {}
export class UpdateDetectorResponse extends S.Class<UpdateDetectorResponse>("UpdateDetectorResponse")({}) {}
export class UpdateFilterRequest extends S.Class<UpdateFilterRequest>("UpdateFilterRequest")({DetectorId: S.String, FilterName: S.String, Description: S.optional(S.String), Action: S.optional(S.String), Rank: S.optional(S.Number), FindingCriteria: S.optional(FindingCriteria)}) {}
export class UpdateFindingsFeedbackRequest extends S.Class<UpdateFindingsFeedbackRequest>("UpdateFindingsFeedbackRequest")({DetectorId: S.String, FindingIds: FindingIds, Feedback: S.String, Comments: S.optional(S.String)}) {}
export class UpdateFindingsFeedbackResponse extends S.Class<UpdateFindingsFeedbackResponse>("UpdateFindingsFeedbackResponse")({}) {}
export class UpdateIPSetRequest extends S.Class<UpdateIPSetRequest>("UpdateIPSetRequest")({DetectorId: S.String, IpSetId: S.String, Name: S.optional(S.String), Location: S.optional(S.String), Activate: S.optional(S.Boolean), ExpectedBucketOwner: S.optional(S.String)}) {}
export class UpdateIPSetResponse extends S.Class<UpdateIPSetResponse>("UpdateIPSetResponse")({}) {}
export class DestinationProperties extends S.Class<DestinationProperties>("DestinationProperties")({DestinationArn: S.optional(S.String), KmsKeyArn: S.optional(S.String)}) {}
export class UpdatePublishingDestinationRequest extends S.Class<UpdatePublishingDestinationRequest>("UpdatePublishingDestinationRequest")({DetectorId: S.String, DestinationId: S.String, DestinationProperties: S.optional(DestinationProperties)}) {}
export class UpdatePublishingDestinationResponse extends S.Class<UpdatePublishingDestinationResponse>("UpdatePublishingDestinationResponse")({}) {}
export class UpdateThreatEntitySetRequest extends S.Class<UpdateThreatEntitySetRequest>("UpdateThreatEntitySetRequest")({DetectorId: S.String, ThreatEntitySetId: S.String, Name: S.optional(S.String), Location: S.optional(S.String), ExpectedBucketOwner: S.optional(S.String), Activate: S.optional(S.Boolean)}) {}
export class UpdateThreatEntitySetResponse extends S.Class<UpdateThreatEntitySetResponse>("UpdateThreatEntitySetResponse")({}) {}
export class UpdateThreatIntelSetRequest extends S.Class<UpdateThreatIntelSetRequest>("UpdateThreatIntelSetRequest")({DetectorId: S.String, ThreatIntelSetId: S.String, Name: S.optional(S.String), Location: S.optional(S.String), Activate: S.optional(S.Boolean), ExpectedBucketOwner: S.optional(S.String)}) {}
export class UpdateThreatIntelSetResponse extends S.Class<UpdateThreatIntelSetResponse>("UpdateThreatIntelSetResponse")({}) {}
export class UpdateTrustedEntitySetRequest extends S.Class<UpdateTrustedEntitySetRequest>("UpdateTrustedEntitySetRequest")({DetectorId: S.String, TrustedEntitySetId: S.String, Name: S.optional(S.String), Location: S.optional(S.String), ExpectedBucketOwner: S.optional(S.String), Activate: S.optional(S.Boolean)}) {}
export class UpdateTrustedEntitySetResponse extends S.Class<UpdateTrustedEntitySetResponse>("UpdateTrustedEntitySetResponse")({}) {}
export const DataSourceList = S.Array(S.String);
export const ResourceList = S.Array(S.String);
export const UsageFeatureList = S.Array(S.String);
export class AccountDetail extends S.Class<AccountDetail>("AccountDetail")({AccountId: S.String, Email: S.String}) {}
export const AccountDetails = S.Array(AccountDetail);
export class UsageCriteria extends S.Class<UsageCriteria>("UsageCriteria")({AccountIds: S.optional(AccountIds), DataSources: S.optional(DataSourceList), Resources: S.optional(ResourceList), Features: S.optional(UsageFeatureList)}) {}
export class CoverageSortCriteria extends S.Class<CoverageSortCriteria>("CoverageSortCriteria")({AttributeName: S.optional(S.String), OrderBy: S.optional(S.String)}) {}
export const DetectorIds = S.Array(S.String);
export const FilterNames = S.Array(S.String);
export const IpSetIds = S.Array(S.String);
export const ThreatEntitySetIds = S.Array(S.String);
export const ThreatIntelSetIds = S.Array(S.String);
export const TrustedEntitySetIds = S.Array(S.String);
export class S3ObjectForSendObjectMalwareScan extends S.Class<S3ObjectForSendObjectMalwareScan>("S3ObjectForSendObjectMalwareScan")({Bucket: S.optional(S.String), Key: S.optional(S.String), VersionId: S.optional(S.String)}) {}
export const MalwareProtectionPlanObjectPrefixesList = S.Array(S.String);
export class CreateIPSetResponse extends S.Class<CreateIPSetResponse>("CreateIPSetResponse")({IpSetId: S.String}) {}
export class CreateMembersRequest extends S.Class<CreateMembersRequest>("CreateMembersRequest")({DetectorId: S.String, AccountDetails: AccountDetails}) {}
export class CreatePublishingDestinationRequest extends S.Class<CreatePublishingDestinationRequest>("CreatePublishingDestinationRequest")({DetectorId: S.String, DestinationType: S.String, DestinationProperties: DestinationProperties, ClientToken: S.optional(S.String), Tags: S.optional(TagMap)}) {}
export class CreateThreatEntitySetResponse extends S.Class<CreateThreatEntitySetResponse>("CreateThreatEntitySetResponse")({ThreatEntitySetId: S.String}) {}
export class CreateThreatIntelSetResponse extends S.Class<CreateThreatIntelSetResponse>("CreateThreatIntelSetResponse")({ThreatIntelSetId: S.String}) {}
export class CreateTrustedEntitySetResponse extends S.Class<CreateTrustedEntitySetResponse>("CreateTrustedEntitySetResponse")({TrustedEntitySetId: S.String}) {}
export class UnprocessedAccount extends S.Class<UnprocessedAccount>("UnprocessedAccount")({AccountId: S.String, Result: S.String}) {}
export const UnprocessedAccounts = S.Array(UnprocessedAccount);
export class DeleteInvitationsResponse extends S.Class<DeleteInvitationsResponse>("DeleteInvitationsResponse")({UnprocessedAccounts: UnprocessedAccounts}) {}
export class DeleteMembersResponse extends S.Class<DeleteMembersResponse>("DeleteMembersResponse")({UnprocessedAccounts: UnprocessedAccounts}) {}
export class DescribePublishingDestinationResponse extends S.Class<DescribePublishingDestinationResponse>("DescribePublishingDestinationResponse")({DestinationId: S.String, DestinationType: S.String, Status: S.String, PublishingFailureStartTimestamp: S.Number, DestinationProperties: DestinationProperties, Tags: S.optional(TagMap)}) {}
export class DisassociateMembersResponse extends S.Class<DisassociateMembersResponse>("DisassociateMembersResponse")({UnprocessedAccounts: UnprocessedAccounts}) {}
export class GetFilterResponse extends S.Class<GetFilterResponse>("GetFilterResponse")({Name: S.String, Description: S.optional(S.String), Action: S.String, Rank: S.optional(S.Number), FindingCriteria: FindingCriteria, Tags: S.optional(TagMap)}) {}
export class GetIPSetResponse extends S.Class<GetIPSetResponse>("GetIPSetResponse")({Name: S.String, Format: S.String, Location: S.String, Status: S.String, Tags: S.optional(TagMap), ExpectedBucketOwner: S.optional(S.String)}) {}
export class ScanConditionPair extends S.Class<ScanConditionPair>("ScanConditionPair")({Key: S.String, Value: S.optional(S.String)}) {}
export const MapEquals = S.Array(ScanConditionPair);
export class ScanCondition extends S.Class<ScanCondition>("ScanCondition")({MapEquals: MapEquals}) {}
export const ScanCriterion = S.Record({key: S.String, value: ScanCondition});
export class ScanResourceCriteria extends S.Class<ScanResourceCriteria>("ScanResourceCriteria")({Include: S.optional(ScanCriterion), Exclude: S.optional(ScanCriterion)}) {}
export class GetMalwareScanSettingsResponse extends S.Class<GetMalwareScanSettingsResponse>("GetMalwareScanSettingsResponse")({ScanResourceCriteria: S.optional(ScanResourceCriteria), EbsSnapshotPreservation: S.optional(S.String)}) {}
export class GetThreatEntitySetResponse extends S.Class<GetThreatEntitySetResponse>("GetThreatEntitySetResponse")({Name: S.String, Format: S.String, Location: S.String, ExpectedBucketOwner: S.optional(S.String), Status: S.String, Tags: S.optional(TagMap), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), ErrorDetails: S.optional(S.String)}) {}
export class GetThreatIntelSetResponse extends S.Class<GetThreatIntelSetResponse>("GetThreatIntelSetResponse")({Name: S.String, Format: S.String, Location: S.String, Status: S.String, Tags: S.optional(TagMap), ExpectedBucketOwner: S.optional(S.String)}) {}
export class GetTrustedEntitySetResponse extends S.Class<GetTrustedEntitySetResponse>("GetTrustedEntitySetResponse")({Name: S.String, Format: S.String, Location: S.String, ExpectedBucketOwner: S.optional(S.String), Status: S.String, Tags: S.optional(TagMap), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), ErrorDetails: S.optional(S.String)}) {}
export class GetUsageStatisticsRequest extends S.Class<GetUsageStatisticsRequest>("GetUsageStatisticsRequest")({DetectorId: S.String, UsageStatisticType: S.String, UsageCriteria: UsageCriteria, Unit: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class InviteMembersResponse extends S.Class<InviteMembersResponse>("InviteMembersResponse")({UnprocessedAccounts: UnprocessedAccounts}) {}
export class CoverageFilterCondition extends S.Class<CoverageFilterCondition>("CoverageFilterCondition")({Equals: S.optional(Equals), NotEquals: S.optional(NotEquals)}) {}
export class CoverageFilterCriterion extends S.Class<CoverageFilterCriterion>("CoverageFilterCriterion")({CriterionKey: S.optional(S.String), FilterCondition: S.optional(CoverageFilterCondition)}) {}
export const CoverageFilterCriterionList = S.Array(CoverageFilterCriterion);
export class CoverageFilterCriteria extends S.Class<CoverageFilterCriteria>("CoverageFilterCriteria")({FilterCriterion: S.optional(CoverageFilterCriterionList)}) {}
export class ListCoverageRequest extends S.Class<ListCoverageRequest>("ListCoverageRequest")({DetectorId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), FilterCriteria: S.optional(CoverageFilterCriteria), SortCriteria: S.optional(CoverageSortCriteria)}) {}
export class ListDetectorsResponse extends S.Class<ListDetectorsResponse>("ListDetectorsResponse")({DetectorIds: DetectorIds, NextToken: S.optional(S.String)}) {}
export class ListFiltersResponse extends S.Class<ListFiltersResponse>("ListFiltersResponse")({FilterNames: FilterNames, NextToken: S.optional(S.String)}) {}
export class ListFindingsResponse extends S.Class<ListFindingsResponse>("ListFindingsResponse")({FindingIds: FindingIds, NextToken: S.optional(S.String)}) {}
export class ListIPSetsResponse extends S.Class<ListIPSetsResponse>("ListIPSetsResponse")({IpSetIds: IpSetIds, NextToken: S.optional(S.String)}) {}
export class Member extends S.Class<Member>("Member")({AccountId: S.String, DetectorId: S.optional(S.String), MasterId: S.String, Email: S.String, RelationshipStatus: S.String, InvitedAt: S.optional(S.String), UpdatedAt: S.String, AdministratorId: S.optional(S.String)}) {}
export const Members = S.Array(Member);
export class ListMembersResponse extends S.Class<ListMembersResponse>("ListMembersResponse")({Members: S.optional(Members), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagMap)}) {}
export class ListThreatEntitySetsResponse extends S.Class<ListThreatEntitySetsResponse>("ListThreatEntitySetsResponse")({ThreatEntitySetIds: ThreatEntitySetIds, NextToken: S.optional(S.String)}) {}
export class ListThreatIntelSetsResponse extends S.Class<ListThreatIntelSetsResponse>("ListThreatIntelSetsResponse")({ThreatIntelSetIds: ThreatIntelSetIds, NextToken: S.optional(S.String)}) {}
export class ListTrustedEntitySetsResponse extends S.Class<ListTrustedEntitySetsResponse>("ListTrustedEntitySetsResponse")({TrustedEntitySetIds: TrustedEntitySetIds, NextToken: S.optional(S.String)}) {}
export class SendObjectMalwareScanRequest extends S.Class<SendObjectMalwareScanRequest>("SendObjectMalwareScanRequest")({S3Object: S.optional(S3ObjectForSendObjectMalwareScan)}) {}
export class SendObjectMalwareScanResponse extends S.Class<SendObjectMalwareScanResponse>("SendObjectMalwareScanResponse")({}) {}
export class StartMonitoringMembersResponse extends S.Class<StartMonitoringMembersResponse>("StartMonitoringMembersResponse")({UnprocessedAccounts: UnprocessedAccounts}) {}
export class StopMonitoringMembersResponse extends S.Class<StopMonitoringMembersResponse>("StopMonitoringMembersResponse")({UnprocessedAccounts: UnprocessedAccounts}) {}
export class UpdateFilterResponse extends S.Class<UpdateFilterResponse>("UpdateFilterResponse")({Name: S.String}) {}
export class CreateS3BucketResource extends S.Class<CreateS3BucketResource>("CreateS3BucketResource")({BucketName: S.optional(S.String), ObjectPrefixes: S.optional(MalwareProtectionPlanObjectPrefixesList)}) {}
export class MalwareProtectionPlanTaggingAction extends S.Class<MalwareProtectionPlanTaggingAction>("MalwareProtectionPlanTaggingAction")({Status: S.optional(S.String)}) {}
export class FilterCondition extends S.Class<FilterCondition>("FilterCondition")({EqualsValue: S.optional(S.String), GreaterThan: S.optional(S.Number), LessThan: S.optional(S.Number)}) {}
export class ListMalwareScansFilterCriterion extends S.Class<ListMalwareScansFilterCriterion>("ListMalwareScansFilterCriterion")({ListMalwareScansCriterionKey: S.optional(S.String), FilterCondition: S.optional(FilterCondition)}) {}
export const ListMalwareScansFilterCriterionList = S.Array(ListMalwareScansFilterCriterion);
export class IncrementalScanDetails extends S.Class<IncrementalScanDetails>("IncrementalScanDetails")({BaselineResourceArn: S.String}) {}
export class RecoveryPoint extends S.Class<RecoveryPoint>("RecoveryPoint")({BackupVaultName: S.String}) {}
export class UpdateS3BucketResource extends S.Class<UpdateS3BucketResource>("UpdateS3BucketResource")({ObjectPrefixes: S.optional(MalwareProtectionPlanObjectPrefixesList)}) {}
export class MemberAdditionalConfiguration extends S.Class<MemberAdditionalConfiguration>("MemberAdditionalConfiguration")({Name: S.optional(S.String), Status: S.optional(S.String)}) {}
export const MemberAdditionalConfigurations = S.Array(MemberAdditionalConfiguration);
export class OrganizationS3LogsConfiguration extends S.Class<OrganizationS3LogsConfiguration>("OrganizationS3LogsConfiguration")({AutoEnable: S.Boolean}) {}
export class OrganizationAdditionalConfiguration extends S.Class<OrganizationAdditionalConfiguration>("OrganizationAdditionalConfiguration")({Name: S.optional(S.String), AutoEnable: S.optional(S.String)}) {}
export const OrganizationAdditionalConfigurations = S.Array(OrganizationAdditionalConfiguration);
export class CreateProtectedResource extends S.Class<CreateProtectedResource>("CreateProtectedResource")({S3Bucket: S.optional(CreateS3BucketResource)}) {}
export class MalwareProtectionPlanActions extends S.Class<MalwareProtectionPlanActions>("MalwareProtectionPlanActions")({Tagging: S.optional(MalwareProtectionPlanTaggingAction)}) {}
export class Administrator extends S.Class<Administrator>("Administrator")({AccountId: S.optional(S.String), InvitationId: S.optional(S.String), RelationshipStatus: S.optional(S.String), InvitedAt: S.optional(S.String)}) {}
export class MalwareProtectionPlanStatusReason extends S.Class<MalwareProtectionPlanStatusReason>("MalwareProtectionPlanStatusReason")({Code: S.optional(S.String), Message: S.optional(S.String)}) {}
export const MalwareProtectionPlanStatusReasonsList = S.Array(MalwareProtectionPlanStatusReason);
export class Master extends S.Class<Master>("Master")({AccountId: S.optional(S.String), InvitationId: S.optional(S.String), RelationshipStatus: S.optional(S.String), InvitedAt: S.optional(S.String)}) {}
export class Invitation extends S.Class<Invitation>("Invitation")({AccountId: S.optional(S.String), InvitationId: S.optional(S.String), RelationshipStatus: S.optional(S.String), InvitedAt: S.optional(S.String)}) {}
export const Invitations = S.Array(Invitation);
export class MalwareProtectionPlanSummary extends S.Class<MalwareProtectionPlanSummary>("MalwareProtectionPlanSummary")({MalwareProtectionPlanId: S.optional(S.String)}) {}
export const MalwareProtectionPlansSummary = S.Array(MalwareProtectionPlanSummary);
export class ListMalwareScansFilterCriteria extends S.Class<ListMalwareScansFilterCriteria>("ListMalwareScansFilterCriteria")({ListMalwareScansFilterCriterion: S.optional(ListMalwareScansFilterCriterionList)}) {}
export class AdminAccount extends S.Class<AdminAccount>("AdminAccount")({AdminAccountId: S.optional(S.String), AdminStatus: S.optional(S.String)}) {}
export const AdminAccounts = S.Array(AdminAccount);
export class Destination extends S.Class<Destination>("Destination")({DestinationId: S.String, DestinationType: S.String, Status: S.String}) {}
export const Destinations = S.Array(Destination);
export class StartMalwareScanConfiguration extends S.Class<StartMalwareScanConfiguration>("StartMalwareScanConfiguration")({Role: S.String, IncrementalScanDetails: S.optional(IncrementalScanDetails), RecoveryPoint: S.optional(RecoveryPoint)}) {}
export class UpdateProtectedResource extends S.Class<UpdateProtectedResource>("UpdateProtectedResource")({S3Bucket: S.optional(UpdateS3BucketResource)}) {}
export class MemberFeaturesConfiguration extends S.Class<MemberFeaturesConfiguration>("MemberFeaturesConfiguration")({Name: S.optional(S.String), Status: S.optional(S.String), AdditionalConfiguration: S.optional(MemberAdditionalConfigurations)}) {}
export const MemberFeaturesConfigurations = S.Array(MemberFeaturesConfiguration);
export class OrganizationFeatureConfiguration extends S.Class<OrganizationFeatureConfiguration>("OrganizationFeatureConfiguration")({Name: S.optional(S.String), AutoEnable: S.optional(S.String), AdditionalConfiguration: S.optional(OrganizationAdditionalConfigurations)}) {}
export const OrganizationFeaturesConfigurations = S.Array(OrganizationFeatureConfiguration);
export class OrganizationKubernetesAuditLogsConfiguration extends S.Class<OrganizationKubernetesAuditLogsConfiguration>("OrganizationKubernetesAuditLogsConfiguration")({AutoEnable: S.Boolean}) {}
export class CreateMalwareProtectionPlanRequest extends S.Class<CreateMalwareProtectionPlanRequest>("CreateMalwareProtectionPlanRequest")({ClientToken: S.optional(S.String), Role: S.String, ProtectedResource: CreateProtectedResource, Actions: S.optional(MalwareProtectionPlanActions), Tags: S.optional(TagMap)}) {}
export class CreateMembersResponse extends S.Class<CreateMembersResponse>("CreateMembersResponse")({UnprocessedAccounts: UnprocessedAccounts}) {}
export class CreatePublishingDestinationResponse extends S.Class<CreatePublishingDestinationResponse>("CreatePublishingDestinationResponse")({DestinationId: S.String}) {}
export class DeclineInvitationsResponse extends S.Class<DeclineInvitationsResponse>("DeclineInvitationsResponse")({UnprocessedAccounts: UnprocessedAccounts}) {}
export class GetAdministratorAccountResponse extends S.Class<GetAdministratorAccountResponse>("GetAdministratorAccountResponse")({Administrator: Administrator}) {}
export class GetMalwareProtectionPlanResponse extends S.Class<GetMalwareProtectionPlanResponse>("GetMalwareProtectionPlanResponse")({Arn: S.optional(S.String), Role: S.optional(S.String), ProtectedResource: S.optional(CreateProtectedResource), Actions: S.optional(MalwareProtectionPlanActions), CreatedAt: S.optional(S.Date), Status: S.optional(S.String), StatusReasons: S.optional(MalwareProtectionPlanStatusReasonsList), Tags: S.optional(TagMap)}) {}
export class GetMasterAccountResponse extends S.Class<GetMasterAccountResponse>("GetMasterAccountResponse")({Master: Master}) {}
export class GetMembersResponse extends S.Class<GetMembersResponse>("GetMembersResponse")({Members: Members, UnprocessedAccounts: UnprocessedAccounts}) {}
export class ListInvitationsResponse extends S.Class<ListInvitationsResponse>("ListInvitationsResponse")({Invitations: S.optional(Invitations), NextToken: S.optional(S.String)}) {}
export class ListMalwareProtectionPlansResponse extends S.Class<ListMalwareProtectionPlansResponse>("ListMalwareProtectionPlansResponse")({MalwareProtectionPlans: S.optional(MalwareProtectionPlansSummary), NextToken: S.optional(S.String)}) {}
export class ListMalwareScansRequest extends S.Class<ListMalwareScansRequest>("ListMalwareScansRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), FilterCriteria: S.optional(ListMalwareScansFilterCriteria), SortCriteria: S.optional(SortCriteria)}) {}
export class ListOrganizationAdminAccountsResponse extends S.Class<ListOrganizationAdminAccountsResponse>("ListOrganizationAdminAccountsResponse")({AdminAccounts: S.optional(AdminAccounts), NextToken: S.optional(S.String)}) {}
export class ListPublishingDestinationsResponse extends S.Class<ListPublishingDestinationsResponse>("ListPublishingDestinationsResponse")({Destinations: Destinations, NextToken: S.optional(S.String)}) {}
export class StartMalwareScanRequest extends S.Class<StartMalwareScanRequest>("StartMalwareScanRequest")({ResourceArn: S.String, ClientToken: S.optional(S.String), ScanConfiguration: S.optional(StartMalwareScanConfiguration)}) {}
export class UpdateMalwareProtectionPlanRequest extends S.Class<UpdateMalwareProtectionPlanRequest>("UpdateMalwareProtectionPlanRequest")({MalwareProtectionPlanId: S.String, Role: S.optional(S.String), Actions: S.optional(MalwareProtectionPlanActions), ProtectedResource: S.optional(UpdateProtectedResource)}) {}
export class UpdateMemberDetectorsRequest extends S.Class<UpdateMemberDetectorsRequest>("UpdateMemberDetectorsRequest")({DetectorId: S.String, AccountIds: AccountIds, DataSources: S.optional(DataSourceConfigurations), Features: S.optional(MemberFeaturesConfigurations)}) {}
export class FilterCriterion extends S.Class<FilterCriterion>("FilterCriterion")({CriterionKey: S.optional(S.String), FilterCondition: S.optional(FilterCondition)}) {}
export const FilterCriterionList = S.Array(FilterCriterion);
export class OrganizationS3LogsConfigurationResult extends S.Class<OrganizationS3LogsConfigurationResult>("OrganizationS3LogsConfigurationResult")({AutoEnable: S.Boolean}) {}
export class OrganizationAdditionalConfigurationResult extends S.Class<OrganizationAdditionalConfigurationResult>("OrganizationAdditionalConfigurationResult")({Name: S.optional(S.String), AutoEnable: S.optional(S.String)}) {}
export const OrganizationAdditionalConfigurationResults = S.Array(OrganizationAdditionalConfigurationResult);
export class CloudTrailConfigurationResult extends S.Class<CloudTrailConfigurationResult>("CloudTrailConfigurationResult")({Status: S.String}) {}
export class DNSLogsConfigurationResult extends S.Class<DNSLogsConfigurationResult>("DNSLogsConfigurationResult")({Status: S.String}) {}
export class FlowLogsConfigurationResult extends S.Class<FlowLogsConfigurationResult>("FlowLogsConfigurationResult")({Status: S.String}) {}
export class S3LogsConfigurationResult extends S.Class<S3LogsConfigurationResult>("S3LogsConfigurationResult")({Status: S.String}) {}
export class DetectorAdditionalConfigurationResult extends S.Class<DetectorAdditionalConfigurationResult>("DetectorAdditionalConfigurationResult")({Name: S.optional(S.String), Status: S.optional(S.String), UpdatedAt: S.optional(S.Date)}) {}
export const DetectorAdditionalConfigurationResults = S.Array(DetectorAdditionalConfigurationResult);
export const CountBySeverity = S.Record({key: S.String, value: S.Number});
export class AccountStatistics extends S.Class<AccountStatistics>("AccountStatistics")({AccountId: S.optional(S.String), LastGeneratedAt: S.optional(S.Date), TotalFindings: S.optional(S.Number)}) {}
export const GroupedByAccount = S.Array(AccountStatistics);
export class DateStatistics extends S.Class<DateStatistics>("DateStatistics")({Date: S.optional(S.Date), LastGeneratedAt: S.optional(S.Date), Severity: S.optional(S.Number), TotalFindings: S.optional(S.Number)}) {}
export const GroupedByDate = S.Array(DateStatistics);
export class FindingTypeStatistics extends S.Class<FindingTypeStatistics>("FindingTypeStatistics")({FindingType: S.optional(S.String), LastGeneratedAt: S.optional(S.Date), TotalFindings: S.optional(S.Number)}) {}
export const GroupedByFindingType = S.Array(FindingTypeStatistics);
export class ResourceStatistics extends S.Class<ResourceStatistics>("ResourceStatistics")({AccountId: S.optional(S.String), LastGeneratedAt: S.optional(S.Date), ResourceId: S.optional(S.String), ResourceType: S.optional(S.String), TotalFindings: S.optional(S.Number)}) {}
export const GroupedByResource = S.Array(ResourceStatistics);
export class SeverityStatistics extends S.Class<SeverityStatistics>("SeverityStatistics")({LastGeneratedAt: S.optional(S.Date), Severity: S.optional(S.Number), TotalFindings: S.optional(S.Number)}) {}
export const GroupedBySeverity = S.Array(SeverityStatistics);
export class TriggerDetails extends S.Class<TriggerDetails>("TriggerDetails")({GuardDutyFindingId: S.optional(S.String), Description: S.optional(S.String), TriggerType: S.optional(S.String)}) {}
export class ScanConfigurationRecoveryPoint extends S.Class<ScanConfigurationRecoveryPoint>("ScanConfigurationRecoveryPoint")({BackupVaultName: S.optional(S.String)}) {}
export class FreeTrialFeatureConfigurationResult extends S.Class<FreeTrialFeatureConfigurationResult>("FreeTrialFeatureConfigurationResult")({Name: S.optional(S.String), FreeTrialDaysRemaining: S.optional(S.Number)}) {}
export const FreeTrialFeatureConfigurationsResults = S.Array(FreeTrialFeatureConfigurationResult);
export class OrganizationKubernetesConfiguration extends S.Class<OrganizationKubernetesConfiguration>("OrganizationKubernetesConfiguration")({AuditLogs: OrganizationKubernetesAuditLogsConfiguration}) {}
export class VolumeDetail extends S.Class<VolumeDetail>("VolumeDetail")({VolumeArn: S.optional(S.String), VolumeType: S.optional(S.String), DeviceName: S.optional(S.String), VolumeSizeInGB: S.optional(S.Number), EncryptionType: S.optional(S.String), SnapshotArn: S.optional(S.String), KmsKeyArn: S.optional(S.String)}) {}
export const VolumeDetails = S.Array(VolumeDetail);
export const Sources = S.Array(S.String);
export class OrganizationFeatureStatisticsAdditionalConfiguration extends S.Class<OrganizationFeatureStatisticsAdditionalConfiguration>("OrganizationFeatureStatisticsAdditionalConfiguration")({Name: S.optional(S.String), EnabledAccountsCount: S.optional(S.Number)}) {}
export const OrganizationFeatureStatisticsAdditionalConfigurations = S.Array(OrganizationFeatureStatisticsAdditionalConfiguration);
export class OrganizationEbsVolumes extends S.Class<OrganizationEbsVolumes>("OrganizationEbsVolumes")({AutoEnable: S.optional(S.Boolean)}) {}
export class FilterCriteria extends S.Class<FilterCriteria>("FilterCriteria")({FilterCriterion: S.optional(FilterCriterionList)}) {}
export class OrganizationFeatureConfigurationResult extends S.Class<OrganizationFeatureConfigurationResult>("OrganizationFeatureConfigurationResult")({Name: S.optional(S.String), AutoEnable: S.optional(S.String), AdditionalConfiguration: S.optional(OrganizationAdditionalConfigurationResults)}) {}
export const OrganizationFeaturesConfigurationsResults = S.Array(OrganizationFeatureConfigurationResult);
export class DetectorFeatureConfigurationResult extends S.Class<DetectorFeatureConfigurationResult>("DetectorFeatureConfigurationResult")({Name: S.optional(S.String), Status: S.optional(S.String), UpdatedAt: S.optional(S.Date), AdditionalConfiguration: S.optional(DetectorAdditionalConfigurationResults)}) {}
export const DetectorFeatureConfigurationsResults = S.Array(DetectorFeatureConfigurationResult);
export class FindingStatistics extends S.Class<FindingStatistics>("FindingStatistics")({CountBySeverity: S.optional(CountBySeverity), GroupedByAccount: S.optional(GroupedByAccount), GroupedByDate: S.optional(GroupedByDate), GroupedByFindingType: S.optional(GroupedByFindingType), GroupedByResource: S.optional(GroupedByResource), GroupedBySeverity: S.optional(GroupedBySeverity)}) {}
export class ScanConfiguration extends S.Class<ScanConfiguration>("ScanConfiguration")({Role: S.optional(S.String), TriggerDetails: S.optional(TriggerDetails), IncrementalScanDetails: S.optional(IncrementalScanDetails), RecoveryPoint: S.optional(ScanConfigurationRecoveryPoint)}) {}
export class OrganizationKubernetesAuditLogsConfigurationResult extends S.Class<OrganizationKubernetesAuditLogsConfigurationResult>("OrganizationKubernetesAuditLogsConfigurationResult")({AutoEnable: S.Boolean}) {}
export class KubernetesAuditLogsConfigurationResult extends S.Class<KubernetesAuditLogsConfigurationResult>("KubernetesAuditLogsConfigurationResult")({Status: S.String}) {}
export class AccessKeyDetails extends S.Class<AccessKeyDetails>("AccessKeyDetails")({AccessKeyId: S.optional(S.String), PrincipalId: S.optional(S.String), UserName: S.optional(S.String), UserType: S.optional(S.String)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const Tags = S.Array(Tag);
export class EksClusterDetails extends S.Class<EksClusterDetails>("EksClusterDetails")({Name: S.optional(S.String), Arn: S.optional(S.String), VpcId: S.optional(S.String), Status: S.optional(S.String), Tags: S.optional(Tags), CreatedAt: S.optional(S.Date)}) {}
export class EbsVolumeDetails extends S.Class<EbsVolumeDetails>("EbsVolumeDetails")({ScannedVolumeDetails: S.optional(VolumeDetails), SkippedVolumeDetails: S.optional(VolumeDetails)}) {}
export class RdsDbInstanceDetails extends S.Class<RdsDbInstanceDetails>("RdsDbInstanceDetails")({DbInstanceIdentifier: S.optional(S.String), Engine: S.optional(S.String), EngineVersion: S.optional(S.String), DbClusterIdentifier: S.optional(S.String), DbInstanceArn: S.optional(S.String), DbiResourceId: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class RdsLimitlessDbDetails extends S.Class<RdsLimitlessDbDetails>("RdsLimitlessDbDetails")({DbShardGroupIdentifier: S.optional(S.String), DbShardGroupResourceId: S.optional(S.String), DbShardGroupArn: S.optional(S.String), Engine: S.optional(S.String), EngineVersion: S.optional(S.String), DbClusterIdentifier: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class RdsDbUserDetails extends S.Class<RdsDbUserDetails>("RdsDbUserDetails")({User: S.optional(S.String), Application: S.optional(S.String), Database: S.optional(S.String), Ssl: S.optional(S.String), AuthMethod: S.optional(S.String)}) {}
export class EbsSnapshotDetails extends S.Class<EbsSnapshotDetails>("EbsSnapshotDetails")({SnapshotArn: S.optional(S.String)}) {}
export class Ec2ImageDetails extends S.Class<Ec2ImageDetails>("Ec2ImageDetails")({ImageArn: S.optional(S.String)}) {}
export class RecoveryPointDetails extends S.Class<RecoveryPointDetails>("RecoveryPointDetails")({RecoveryPointArn: S.optional(S.String), BackupVaultName: S.optional(S.String)}) {}
export class ServiceAdditionalInfo extends S.Class<ServiceAdditionalInfo>("ServiceAdditionalInfo")({Value: S.optional(S.String), Type: S.optional(S.String)}) {}
export class EbsSnapshot extends S.Class<EbsSnapshot>("EbsSnapshot")({DeviceName: S.optional(S.String)}) {}
export class MemberAdditionalConfigurationResult extends S.Class<MemberAdditionalConfigurationResult>("MemberAdditionalConfigurationResult")({Name: S.optional(S.String), Status: S.optional(S.String), UpdatedAt: S.optional(S.Date)}) {}
export const MemberAdditionalConfigurationResults = S.Array(MemberAdditionalConfigurationResult);
export class OrganizationFeatureStatistics extends S.Class<OrganizationFeatureStatistics>("OrganizationFeatureStatistics")({Name: S.optional(S.String), EnabledAccountsCount: S.optional(S.Number), AdditionalConfiguration: S.optional(OrganizationFeatureStatisticsAdditionalConfigurations)}) {}
export const OrganizationFeatureStatisticsResults = S.Array(OrganizationFeatureStatistics);
export class DataSourceFreeTrial extends S.Class<DataSourceFreeTrial>("DataSourceFreeTrial")({FreeTrialDaysRemaining: S.optional(S.Number)}) {}
export class KubernetesDataSourceFreeTrial extends S.Class<KubernetesDataSourceFreeTrial>("KubernetesDataSourceFreeTrial")({AuditLogs: S.optional(DataSourceFreeTrial)}) {}
export class MalwareProtectionDataSourceFreeTrial extends S.Class<MalwareProtectionDataSourceFreeTrial>("MalwareProtectionDataSourceFreeTrial")({ScanEc2InstanceWithFindings: S.optional(DataSourceFreeTrial)}) {}
export class OrganizationScanEc2InstanceWithFindings extends S.Class<OrganizationScanEc2InstanceWithFindings>("OrganizationScanEc2InstanceWithFindings")({EbsVolumes: S.optional(OrganizationEbsVolumes)}) {}
export class CreateDetectorRequest extends S.Class<CreateDetectorRequest>("CreateDetectorRequest")({Enable: S.Boolean, ClientToken: S.optional(S.String), FindingPublishingFrequency: S.optional(S.String), DataSources: S.optional(DataSourceConfigurations), Tags: S.optional(TagMap), Features: S.optional(DetectorFeatureConfigurations)}) {}
export class CreateFilterRequest extends S.Class<CreateFilterRequest>("CreateFilterRequest")({DetectorId: S.String, Name: S.String, Description: S.optional(S.String), Action: S.optional(S.String), Rank: S.optional(S.Number), FindingCriteria: FindingCriteria, ClientToken: S.optional(S.String), Tags: S.optional(TagMap)}) {}
export class CreateMalwareProtectionPlanResponse extends S.Class<CreateMalwareProtectionPlanResponse>("CreateMalwareProtectionPlanResponse")({MalwareProtectionPlanId: S.optional(S.String)}) {}
export class DescribeMalwareScansRequest extends S.Class<DescribeMalwareScansRequest>("DescribeMalwareScansRequest")({DetectorId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), FilterCriteria: S.optional(FilterCriteria), SortCriteria: S.optional(SortCriteria)}) {}
export class GetCoverageStatisticsRequest extends S.Class<GetCoverageStatisticsRequest>("GetCoverageStatisticsRequest")({DetectorId: S.String, FilterCriteria: S.optional(CoverageFilterCriteria), StatisticsType: CoverageStatisticsTypeList}) {}
export const Ipv6Addresses = S.Array(S.String);
export const Groups = S.Array(S.String);
export const SessionNameList = S.Array(S.String);
export class VolumeMount extends S.Class<VolumeMount>("VolumeMount")({Name: S.optional(S.String), MountPath: S.optional(S.String)}) {}
export const VolumeMounts = S.Array(VolumeMount);
export class SecurityContext extends S.Class<SecurityContext>("SecurityContext")({Privileged: S.optional(S.Boolean), AllowPrivilegeEscalation: S.optional(S.Boolean)}) {}
export class Container extends S.Class<Container>("Container")({ContainerRuntime: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Image: S.optional(S.String), ImagePrefix: S.optional(S.String), VolumeMounts: S.optional(VolumeMounts), SecurityContext: S.optional(SecurityContext)}) {}
export const Containers = S.Array(Container);
export const SubnetIds = S.Array(S.String);
export const SourceIps = S.Array(S.String);
export const ThreatNames = S.Array(S.String);
export const FlagsList = S.Array(S.String);
export const MemoryRegionsList = S.Array(S.String);
export const AdditionalSequenceTypes = S.Array(S.String);
export class GetFindingsStatisticsResponse extends S.Class<GetFindingsStatisticsResponse>("GetFindingsStatisticsResponse")({FindingStatistics: FindingStatistics, NextToken: S.optional(S.String)}) {}
export class StartMalwareScanResponse extends S.Class<StartMalwareScanResponse>("StartMalwareScanResponse")({ScanId: S.optional(S.String)}) {}
export class UpdateMemberDetectorsResponse extends S.Class<UpdateMemberDetectorsResponse>("UpdateMemberDetectorsResponse")({UnprocessedAccounts: UnprocessedAccounts}) {}
export class OrganizationKubernetesConfigurationResult extends S.Class<OrganizationKubernetesConfigurationResult>("OrganizationKubernetesConfigurationResult")({AuditLogs: OrganizationKubernetesAuditLogsConfigurationResult}) {}
export class KubernetesConfigurationResult extends S.Class<KubernetesConfigurationResult>("KubernetesConfigurationResult")({AuditLogs: KubernetesAuditLogsConfigurationResult}) {}
export class ScannedResourceDetails extends S.Class<ScannedResourceDetails>("ScannedResourceDetails")({EbsVolume: S.optional(VolumeDetail), EbsSnapshot: S.optional(EbsSnapshot)}) {}
export class MemberFeaturesConfigurationResult extends S.Class<MemberFeaturesConfigurationResult>("MemberFeaturesConfigurationResult")({Name: S.optional(S.String), Status: S.optional(S.String), UpdatedAt: S.optional(S.Date), AdditionalConfiguration: S.optional(MemberAdditionalConfigurationResults)}) {}
export const MemberFeaturesConfigurationsResults = S.Array(MemberFeaturesConfigurationResult);
export class OrganizationStatistics extends S.Class<OrganizationStatistics>("OrganizationStatistics")({TotalAccountsCount: S.optional(S.Number), MemberAccountsCount: S.optional(S.Number), ActiveAccountsCount: S.optional(S.Number), EnabledAccountsCount: S.optional(S.Number), CountByFeature: S.optional(OrganizationFeatureStatisticsResults)}) {}
export class DataSourcesFreeTrial extends S.Class<DataSourcesFreeTrial>("DataSourcesFreeTrial")({CloudTrail: S.optional(DataSourceFreeTrial), DnsLogs: S.optional(DataSourceFreeTrial), FlowLogs: S.optional(DataSourceFreeTrial), S3Logs: S.optional(DataSourceFreeTrial), Kubernetes: S.optional(KubernetesDataSourceFreeTrial), MalwareProtection: S.optional(MalwareProtectionDataSourceFreeTrial)}) {}
export class Total extends S.Class<Total>("Total")({Amount: S.optional(S.String), Unit: S.optional(S.String)}) {}
export class UsageDataSourceResult extends S.Class<UsageDataSourceResult>("UsageDataSourceResult")({DataSource: S.optional(S.String), Total: S.optional(Total)}) {}
export const UsageDataSourceResultList = S.Array(UsageDataSourceResult);
export class UsageResourceResult extends S.Class<UsageResourceResult>("UsageResourceResult")({Resource: S.optional(S.String), Total: S.optional(Total)}) {}
export const UsageResourceResultList = S.Array(UsageResourceResult);
export class UsageFeatureResult extends S.Class<UsageFeatureResult>("UsageFeatureResult")({Feature: S.optional(S.String), Total: S.optional(Total)}) {}
export const UsageFeatureResultList = S.Array(UsageFeatureResult);
export class OrganizationMalwareProtectionConfiguration extends S.Class<OrganizationMalwareProtectionConfiguration>("OrganizationMalwareProtectionConfiguration")({ScanEc2InstanceWithFindings: S.optional(OrganizationScanEc2InstanceWithFindings)}) {}
export class OrganizationEbsVolumesResult extends S.Class<OrganizationEbsVolumesResult>("OrganizationEbsVolumesResult")({AutoEnable: S.optional(S.Boolean)}) {}
export class EbsVolumesResult extends S.Class<EbsVolumesResult>("EbsVolumesResult")({Status: S.optional(S.String), Reason: S.optional(S.String)}) {}
export class Owner extends S.Class<Owner>("Owner")({Id: S.optional(S.String)}) {}
export class DefaultServerSideEncryption extends S.Class<DefaultServerSideEncryption>("DefaultServerSideEncryption")({EncryptionType: S.optional(S.String), KmsMasterKeyArn: S.optional(S.String)}) {}
export class S3ObjectDetail extends S.Class<S3ObjectDetail>("S3ObjectDetail")({ObjectArn: S.optional(S.String), Key: S.optional(S.String), ETag: S.optional(S.String), Hash: S.optional(S.String), VersionId: S.optional(S.String)}) {}
export const S3ObjectDetails = S.Array(S3ObjectDetail);
export class IamInstanceProfile extends S.Class<IamInstanceProfile>("IamInstanceProfile")({Arn: S.optional(S.String), Id: S.optional(S.String)}) {}
export class ProductCode extends S.Class<ProductCode>("ProductCode")({Code: S.optional(S.String), ProductType: S.optional(S.String)}) {}
export const ProductCodes = S.Array(ProductCode);
export class HostPath extends S.Class<HostPath>("HostPath")({Path: S.optional(S.String)}) {}
export class Volume extends S.Class<Volume>("Volume")({Name: S.optional(S.String), HostPath: S.optional(HostPath)}) {}
export const Volumes = S.Array(Volume);
export class EcsTaskDetails extends S.Class<EcsTaskDetails>("EcsTaskDetails")({Arn: S.optional(S.String), DefinitionArn: S.optional(S.String), Version: S.optional(S.String), TaskCreatedAt: S.optional(S.Date), StartedAt: S.optional(S.Date), StartedBy: S.optional(S.String), Tags: S.optional(Tags), Volumes: S.optional(Volumes), Containers: S.optional(Containers), Group: S.optional(S.String), LaunchType: S.optional(S.String)}) {}
export class SecurityGroup extends S.Class<SecurityGroup>("SecurityGroup")({GroupId: S.optional(S.String), GroupName: S.optional(S.String)}) {}
export const SecurityGroups = S.Array(SecurityGroup);
export class VpcConfig extends S.Class<VpcConfig>("VpcConfig")({SubnetIds: S.optional(SubnetIds), VpcId: S.optional(S.String), SecurityGroups: S.optional(SecurityGroups)}) {}
export class DnsRequestAction extends S.Class<DnsRequestAction>("DnsRequestAction")({Domain: S.optional(S.String), Protocol: S.optional(S.String), Blocked: S.optional(S.Boolean), DomainWithSuffix: S.optional(S.String), VpcOwnerAccountId: S.optional(S.String)}) {}
export class City extends S.Class<City>("City")({CityName: S.optional(S.String)}) {}
export class Country extends S.Class<Country>("Country")({CountryCode: S.optional(S.String), CountryName: S.optional(S.String)}) {}
export class GeoLocation extends S.Class<GeoLocation>("GeoLocation")({Lat: S.optional(S.Number), Lon: S.optional(S.Number)}) {}
export class Organization extends S.Class<Organization>("Organization")({Asn: S.optional(S.String), AsnOrg: S.optional(S.String), Isp: S.optional(S.String), Org: S.optional(S.String)}) {}
export class RemoteIpDetails extends S.Class<RemoteIpDetails>("RemoteIpDetails")({City: S.optional(City), Country: S.optional(Country), GeoLocation: S.optional(GeoLocation), IpAddressV4: S.optional(S.String), IpAddressV6: S.optional(S.String), Organization: S.optional(Organization)}) {}
export class KubernetesApiCallAction extends S.Class<KubernetesApiCallAction>("KubernetesApiCallAction")({RequestUri: S.optional(S.String), Verb: S.optional(S.String), SourceIps: S.optional(SourceIps), UserAgent: S.optional(S.String), RemoteIpDetails: S.optional(RemoteIpDetails), StatusCode: S.optional(S.Number), Parameters: S.optional(S.String), Resource: S.optional(S.String), Subresource: S.optional(S.String), Namespace: S.optional(S.String), ResourceName: S.optional(S.String)}) {}
export class KubernetesPermissionCheckedDetails extends S.Class<KubernetesPermissionCheckedDetails>("KubernetesPermissionCheckedDetails")({Verb: S.optional(S.String), Resource: S.optional(S.String), Namespace: S.optional(S.String), Allowed: S.optional(S.Boolean)}) {}
export class KubernetesRoleBindingDetails extends S.Class<KubernetesRoleBindingDetails>("KubernetesRoleBindingDetails")({Kind: S.optional(S.String), Name: S.optional(S.String), Uid: S.optional(S.String), RoleRefName: S.optional(S.String), RoleRefKind: S.optional(S.String)}) {}
export class KubernetesRoleDetails extends S.Class<KubernetesRoleDetails>("KubernetesRoleDetails")({Kind: S.optional(S.String), Name: S.optional(S.String), Uid: S.optional(S.String)}) {}
export class ThreatIntelligenceDetail extends S.Class<ThreatIntelligenceDetail>("ThreatIntelligenceDetail")({ThreatListName: S.optional(S.String), ThreatNames: S.optional(ThreatNames), ThreatFileSha256: S.optional(S.String)}) {}
export const ThreatIntelligenceDetails = S.Array(ThreatIntelligenceDetail);
export class LineageObject extends S.Class<LineageObject>("LineageObject")({StartTime: S.optional(S.Date), NamespacePid: S.optional(S.Number), UserId: S.optional(S.Number), Name: S.optional(S.String), Pid: S.optional(S.Number), Uuid: S.optional(S.String), ExecutablePath: S.optional(S.String), Euid: S.optional(S.Number), ParentUuid: S.optional(S.String)}) {}
export const Lineage = S.Array(LineageObject);
export class ProcessDetails extends S.Class<ProcessDetails>("ProcessDetails")({Name: S.optional(S.String), ExecutablePath: S.optional(S.String), ExecutableSha256: S.optional(S.String), NamespacePid: S.optional(S.Number), Pwd: S.optional(S.String), Pid: S.optional(S.Number), StartTime: S.optional(S.Date), Uuid: S.optional(S.String), ParentUuid: S.optional(S.String), User: S.optional(S.String), UserId: S.optional(S.Number), Euid: S.optional(S.Number), Lineage: S.optional(Lineage)}) {}
export class RuntimeContext extends S.Class<RuntimeContext>("RuntimeContext")({ModifyingProcess: S.optional(ProcessDetails), ModifiedAt: S.optional(S.Date), ScriptPath: S.optional(S.String), LibraryPath: S.optional(S.String), LdPreloadValue: S.optional(S.String), SocketPath: S.optional(S.String), RuncBinaryPath: S.optional(S.String), ReleaseAgentPath: S.optional(S.String), MountSource: S.optional(S.String), MountTarget: S.optional(S.String), FileSystemType: S.optional(S.String), Flags: S.optional(FlagsList), ModuleName: S.optional(S.String), ModuleFilePath: S.optional(S.String), ModuleSha256: S.optional(S.String), ShellHistoryFilePath: S.optional(S.String), TargetProcess: S.optional(ProcessDetails), AddressFamily: S.optional(S.String), IanaProtocolNumber: S.optional(S.Number), MemoryRegions: S.optional(MemoryRegionsList), ToolName: S.optional(S.String), ToolCategory: S.optional(S.String), ServiceName: S.optional(S.String), CommandLineExample: S.optional(S.String), ThreatFilePath: S.optional(S.String)}) {}
export class MalwareProtectionFindingsScanConfiguration extends S.Class<MalwareProtectionFindingsScanConfiguration>("MalwareProtectionFindingsScanConfiguration")({TriggerType: S.optional(S.String), IncrementalScanDetails: S.optional(IncrementalScanDetails)}) {}
export class AdditionalInfo extends S.Class<AdditionalInfo>("AdditionalInfo")({VersionId: S.optional(S.String), DeviceName: S.optional(S.String)}) {}
export const ResourceUids = S.Array(S.String);
export const ActorIds = S.Array(S.String);
export const EndpointIds = S.Array(S.String);
export const IndicatorValues = S.Array(S.String);
export class ScannedResource extends S.Class<ScannedResource>("ScannedResource")({ScannedResourceArn: S.optional(S.String), ScannedResourceType: S.optional(S.String), ScannedResourceStatus: S.optional(S.String), ScanStatusReason: S.optional(S.String), ResourceDetails: S.optional(ScannedResourceDetails)}) {}
export const ScannedResources = S.Array(ScannedResource);
export class ScanEc2InstanceWithFindingsResult extends S.Class<ScanEc2InstanceWithFindingsResult>("ScanEc2InstanceWithFindingsResult")({EbsVolumes: S.optional(EbsVolumesResult)}) {}
export class MalwareProtectionConfigurationResult extends S.Class<MalwareProtectionConfigurationResult>("MalwareProtectionConfigurationResult")({ScanEc2InstanceWithFindings: S.optional(ScanEc2InstanceWithFindingsResult), ServiceRole: S.optional(S.String)}) {}
export class DataSourceConfigurationsResult extends S.Class<DataSourceConfigurationsResult>("DataSourceConfigurationsResult")({CloudTrail: CloudTrailConfigurationResult, DNSLogs: DNSLogsConfigurationResult, FlowLogs: FlowLogsConfigurationResult, S3Logs: S3LogsConfigurationResult, Kubernetes: S.optional(KubernetesConfigurationResult), MalwareProtection: S.optional(MalwareProtectionConfigurationResult)}) {}
export class MemberDataSourceConfiguration extends S.Class<MemberDataSourceConfiguration>("MemberDataSourceConfiguration")({AccountId: S.String, DataSources: S.optional(DataSourceConfigurationsResult), Features: S.optional(MemberFeaturesConfigurationsResults)}) {}
export const MemberDataSourceConfigurations = S.Array(MemberDataSourceConfiguration);
export class OrganizationDetails extends S.Class<OrganizationDetails>("OrganizationDetails")({UpdatedAt: S.optional(S.Date), OrganizationStatistics: S.optional(OrganizationStatistics)}) {}
export class AccountFreeTrialInfo extends S.Class<AccountFreeTrialInfo>("AccountFreeTrialInfo")({AccountId: S.optional(S.String), DataSources: S.optional(DataSourcesFreeTrial), Features: S.optional(FreeTrialFeatureConfigurationsResults)}) {}
export const AccountFreeTrialInfos = S.Array(AccountFreeTrialInfo);
export class MalwareScan extends S.Class<MalwareScan>("MalwareScan")({ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), ScanId: S.optional(S.String), ScanStatus: S.optional(S.String), ScanResultStatus: S.optional(S.String), ScanType: S.optional(S.String), ScanStartedAt: S.optional(S.Date), ScanCompletedAt: S.optional(S.Date)}) {}
export const MalwareScans = S.Array(MalwareScan);
export class OrganizationDataSourceConfigurations extends S.Class<OrganizationDataSourceConfigurations>("OrganizationDataSourceConfigurations")({S3Logs: S.optional(OrganizationS3LogsConfiguration), Kubernetes: S.optional(OrganizationKubernetesConfiguration), MalwareProtection: S.optional(OrganizationMalwareProtectionConfiguration)}) {}
export class OrganizationScanEc2InstanceWithFindingsResult extends S.Class<OrganizationScanEc2InstanceWithFindingsResult>("OrganizationScanEc2InstanceWithFindingsResult")({EbsVolumes: S.optional(OrganizationEbsVolumesResult)}) {}
export class EcsClusterDetails extends S.Class<EcsClusterDetails>("EcsClusterDetails")({Name: S.optional(S.String), Arn: S.optional(S.String), Status: S.optional(S.String), ActiveServicesCount: S.optional(S.Number), RegisteredContainerInstancesCount: S.optional(S.Number), RunningTasksCount: S.optional(S.Number), Tags: S.optional(Tags), TaskDetails: S.optional(EcsTaskDetails)}) {}
export class LambdaDetails extends S.Class<LambdaDetails>("LambdaDetails")({FunctionArn: S.optional(S.String), FunctionName: S.optional(S.String), Description: S.optional(S.String), LastModifiedAt: S.optional(S.Date), RevisionId: S.optional(S.String), FunctionVersion: S.optional(S.String), Role: S.optional(S.String), VpcConfig: S.optional(VpcConfig), Tags: S.optional(Tags)}) {}
export class Evidence extends S.Class<Evidence>("Evidence")({ThreatIntelligenceDetails: S.optional(ThreatIntelligenceDetails)}) {}
export class ItemDetails extends S.Class<ItemDetails>("ItemDetails")({ResourceArn: S.optional(S.String), ItemPath: S.optional(S.String), Hash: S.optional(S.String), AdditionalInfo: S.optional(AdditionalInfo)}) {}
export const ItemDetailsList = S.Array(ItemDetails);
export class UsageTopAccountResult extends S.Class<UsageTopAccountResult>("UsageTopAccountResult")({AccountId: S.optional(S.String), Total: S.optional(Total)}) {}
export const UsageTopAccountsByFeatureList = S.Array(UsageTopAccountResult);
export class CreateFilterResponse extends S.Class<CreateFilterResponse>("CreateFilterResponse")({Name: S.String}) {}
export class PrivateIpAddressDetails extends S.Class<PrivateIpAddressDetails>("PrivateIpAddressDetails")({PrivateDnsName: S.optional(S.String), PrivateIpAddress: S.optional(S.String)}) {}
export const PrivateIpAddresses = S.Array(PrivateIpAddressDetails);
export class ImpersonatedUser extends S.Class<ImpersonatedUser>("ImpersonatedUser")({Username: S.optional(S.String), Groups: S.optional(Groups)}) {}
export class DomainDetails extends S.Class<DomainDetails>("DomainDetails")({Domain: S.optional(S.String)}) {}
export class RemoteAccountDetails extends S.Class<RemoteAccountDetails>("RemoteAccountDetails")({AccountId: S.optional(S.String), Affiliated: S.optional(S.Boolean)}) {}
export const AffectedResources = S.Record({key: S.String, value: S.String});
export class LocalPortDetails extends S.Class<LocalPortDetails>("LocalPortDetails")({Port: S.optional(S.Number), PortName: S.optional(S.String)}) {}
export class LocalIpDetails extends S.Class<LocalIpDetails>("LocalIpDetails")({IpAddressV4: S.optional(S.String), IpAddressV6: S.optional(S.String)}) {}
export class RemotePortDetails extends S.Class<RemotePortDetails>("RemotePortDetails")({Port: S.optional(S.Number), PortName: S.optional(S.String)}) {}
export class PortProbeDetail extends S.Class<PortProbeDetail>("PortProbeDetail")({LocalPortDetails: S.optional(LocalPortDetails), LocalIpDetails: S.optional(LocalIpDetails), RemoteIpDetails: S.optional(RemoteIpDetails)}) {}
export const PortProbeDetails = S.Array(PortProbeDetail);
export class LoginAttribute extends S.Class<LoginAttribute>("LoginAttribute")({User: S.optional(S.String), Application: S.optional(S.String), FailedLoginAttempts: S.optional(S.Number), SuccessfulLoginAttempts: S.optional(S.Number)}) {}
export const LoginAttributes = S.Array(LoginAttribute);
export class ScannedItemCount extends S.Class<ScannedItemCount>("ScannedItemCount")({TotalGb: S.optional(S.Number), Files: S.optional(S.Number), Volumes: S.optional(S.Number)}) {}
export class ThreatsDetectedItemCount extends S.Class<ThreatsDetectedItemCount>("ThreatsDetectedItemCount")({Files: S.optional(S.Number)}) {}
export class HighestSeverityThreatDetails extends S.Class<HighestSeverityThreatDetails>("HighestSeverityThreatDetails")({Severity: S.optional(S.String), ThreatName: S.optional(S.String), Count: S.optional(S.Number)}) {}
export class Indicator extends S.Class<Indicator>("Indicator")({Key: S.String, Values: S.optional(IndicatorValues), Title: S.optional(S.String)}) {}
export const Indicators = S.Array(Indicator);
export class Signal extends S.Class<Signal>("Signal")({Uid: S.String, Type: S.String, Description: S.optional(S.String), Name: S.String, CreatedAt: S.Date, UpdatedAt: S.Date, FirstSeenAt: S.Date, LastSeenAt: S.Date, Severity: S.optional(S.Number), Count: S.Number, ResourceUids: S.optional(ResourceUids), ActorIds: S.optional(ActorIds), EndpointIds: S.optional(EndpointIds), SignalIndicators: S.optional(Indicators)}) {}
export const Signals = S.Array(Signal);
export class ItemPath extends S.Class<ItemPath>("ItemPath")({NestedItemPath: S.optional(S.String), Hash: S.optional(S.String)}) {}
export const ItemPaths = S.Array(ItemPath);
export class GetMemberDetectorsResponse extends S.Class<GetMemberDetectorsResponse>("GetMemberDetectorsResponse")({MemberDataSourceConfigurations: MemberDataSourceConfigurations, UnprocessedAccounts: UnprocessedAccounts}) {}
export class GetOrganizationStatisticsResponse extends S.Class<GetOrganizationStatisticsResponse>("GetOrganizationStatisticsResponse")({OrganizationDetails: S.optional(OrganizationDetails)}) {}
export class GetRemainingFreeTrialDaysResponse extends S.Class<GetRemainingFreeTrialDaysResponse>("GetRemainingFreeTrialDaysResponse")({Accounts: S.optional(AccountFreeTrialInfos), UnprocessedAccounts: S.optional(UnprocessedAccounts)}) {}
export const Issues = S.Array(S.String);
export class ListMalwareScansResponse extends S.Class<ListMalwareScansResponse>("ListMalwareScansResponse")({Scans: MalwareScans, NextToken: S.optional(S.String)}) {}
export class UpdateMalwareScanSettingsRequest extends S.Class<UpdateMalwareScanSettingsRequest>("UpdateMalwareScanSettingsRequest")({DetectorId: S.String, ScanResourceCriteria: S.optional(ScanResourceCriteria), EbsSnapshotPreservation: S.optional(S.String)}) {}
export class UpdateMalwareScanSettingsResponse extends S.Class<UpdateMalwareScanSettingsResponse>("UpdateMalwareScanSettingsResponse")({}) {}
export class UpdateOrganizationConfigurationRequest extends S.Class<UpdateOrganizationConfigurationRequest>("UpdateOrganizationConfigurationRequest")({DetectorId: S.String, AutoEnable: S.optional(S.Boolean), DataSources: S.optional(OrganizationDataSourceConfigurations), Features: S.optional(OrganizationFeaturesConfigurations), AutoEnableOrganizationMembers: S.optional(S.String)}) {}
export class UpdateOrganizationConfigurationResponse extends S.Class<UpdateOrganizationConfigurationResponse>("UpdateOrganizationConfigurationResponse")({}) {}
export class OrganizationMalwareProtectionConfigurationResult extends S.Class<OrganizationMalwareProtectionConfigurationResult>("OrganizationMalwareProtectionConfigurationResult")({ScanEc2InstanceWithFindings: S.optional(OrganizationScanEc2InstanceWithFindingsResult)}) {}
export class ScanResultThreat extends S.Class<ScanResultThreat>("ScanResultThreat")({Name: S.optional(S.String), Source: S.optional(S.String), Count: S.optional(S.Number), Hash: S.optional(S.String), ItemDetails: S.optional(ItemDetailsList)}) {}
export const ScanResultThreats = S.Array(ScanResultThreat);
export class UsageAccountResult extends S.Class<UsageAccountResult>("UsageAccountResult")({AccountId: S.optional(S.String), Total: S.optional(Total)}) {}
export const UsageAccountResultList = S.Array(UsageAccountResult);
export class UsageTopAccountsResult extends S.Class<UsageTopAccountsResult>("UsageTopAccountsResult")({Feature: S.optional(S.String), Accounts: S.optional(UsageTopAccountsByFeatureList)}) {}
export const UsageTopAccountsResultList = S.Array(UsageTopAccountsResult);
export class NetworkInterface extends S.Class<NetworkInterface>("NetworkInterface")({Ipv6Addresses: S.optional(Ipv6Addresses), NetworkInterfaceId: S.optional(S.String), PrivateDnsName: S.optional(S.String), PrivateIpAddress: S.optional(S.String), PrivateIpAddresses: S.optional(PrivateIpAddresses), PublicDnsName: S.optional(S.String), PublicIp: S.optional(S.String), SecurityGroups: S.optional(SecurityGroups), SubnetId: S.optional(S.String), VpcId: S.optional(S.String)}) {}
export const NetworkInterfaces = S.Array(NetworkInterface);
export class KubernetesUserDetails extends S.Class<KubernetesUserDetails>("KubernetesUserDetails")({Username: S.optional(S.String), Uid: S.optional(S.String), Groups: S.optional(Groups), SessionName: S.optional(SessionNameList), ImpersonatedUser: S.optional(ImpersonatedUser)}) {}
export class NetworkConnectionAction extends S.Class<NetworkConnectionAction>("NetworkConnectionAction")({Blocked: S.optional(S.Boolean), ConnectionDirection: S.optional(S.String), LocalPortDetails: S.optional(LocalPortDetails), Protocol: S.optional(S.String), LocalIpDetails: S.optional(LocalIpDetails), LocalNetworkInterface: S.optional(S.String), RemoteIpDetails: S.optional(RemoteIpDetails), RemotePortDetails: S.optional(RemotePortDetails)}) {}
export class PortProbeAction extends S.Class<PortProbeAction>("PortProbeAction")({Blocked: S.optional(S.Boolean), PortProbeDetails: S.optional(PortProbeDetails)}) {}
export class RdsLoginAttemptAction extends S.Class<RdsLoginAttemptAction>("RdsLoginAttemptAction")({RemoteIpDetails: S.optional(RemoteIpDetails), LoginAttributes: S.optional(LoginAttributes)}) {}
export class Threat extends S.Class<Threat>("Threat")({Name: S.optional(S.String), Source: S.optional(S.String), ItemPaths: S.optional(ItemPaths), Count: S.optional(S.Number), Hash: S.optional(S.String), ItemDetails: S.optional(ItemDetailsList)}) {}
export const Threats = S.Array(Threat);
export class AddonDetails extends S.Class<AddonDetails>("AddonDetails")({AddonVersion: S.optional(S.String), AddonStatus: S.optional(S.String)}) {}
export class FargateDetails extends S.Class<FargateDetails>("FargateDetails")({Issues: S.optional(Issues), ManagementType: S.optional(S.String)}) {}
export class ContainerInstanceDetails extends S.Class<ContainerInstanceDetails>("ContainerInstanceDetails")({CoveredContainerInstances: S.optional(S.Number), CompatibleContainerInstances: S.optional(S.Number)}) {}
export class AgentDetails extends S.Class<AgentDetails>("AgentDetails")({Version: S.optional(S.String)}) {}
export class UnprocessedDataSourcesResult extends S.Class<UnprocessedDataSourcesResult>("UnprocessedDataSourcesResult")({MalwareProtection: S.optional(MalwareProtectionConfigurationResult)}) {}
export class OrganizationDataSourceConfigurationsResult extends S.Class<OrganizationDataSourceConfigurationsResult>("OrganizationDataSourceConfigurationsResult")({S3Logs: OrganizationS3LogsConfigurationResult, Kubernetes: S.optional(OrganizationKubernetesConfigurationResult), MalwareProtection: S.optional(OrganizationMalwareProtectionConfigurationResult)}) {}
export class BlockPublicAccess extends S.Class<BlockPublicAccess>("BlockPublicAccess")({IgnorePublicAcls: S.optional(S.Boolean), RestrictPublicBuckets: S.optional(S.Boolean), BlockPublicAcls: S.optional(S.Boolean), BlockPublicPolicy: S.optional(S.Boolean)}) {}
export class AccountLevelPermissions extends S.Class<AccountLevelPermissions>("AccountLevelPermissions")({BlockPublicAccess: S.optional(BlockPublicAccess)}) {}
export class Session extends S.Class<Session>("Session")({Uid: S.optional(S.String), MfaStatus: S.optional(S.String), CreatedTime: S.optional(S.Date), Issuer: S.optional(S.String)}) {}
export class ActorProcess extends S.Class<ActorProcess>("ActorProcess")({Name: S.String, Path: S.String, Sha256: S.optional(S.String)}) {}
export class NetworkGeoLocation extends S.Class<NetworkGeoLocation>("NetworkGeoLocation")({City: S.String, Country: S.String, Latitude: S.Number, Longitude: S.Number}) {}
export class AutonomousSystem extends S.Class<AutonomousSystem>("AutonomousSystem")({Name: S.String, Number: S.Number}) {}
export class NetworkConnection extends S.Class<NetworkConnection>("NetworkConnection")({Direction: S.String}) {}
export class GetMalwareScanResultDetails extends S.Class<GetMalwareScanResultDetails>("GetMalwareScanResultDetails")({ScanResultStatus: S.optional(S.String), SkippedFileCount: S.optional(S.Number), FailedFileCount: S.optional(S.Number), ThreatFoundFileCount: S.optional(S.Number), TotalFileCount: S.optional(S.Number), TotalBytes: S.optional(S.Number), UniqueThreatCount: S.optional(S.Number), Threats: S.optional(ScanResultThreats)}) {}
export class UsageStatistics extends S.Class<UsageStatistics>("UsageStatistics")({SumByAccount: S.optional(UsageAccountResultList), TopAccountsByFeature: S.optional(UsageTopAccountsResultList), SumByDataSource: S.optional(UsageDataSourceResultList), SumByResource: S.optional(UsageResourceResultList), TopResources: S.optional(UsageResourceResultList), SumByFeature: S.optional(UsageFeatureResultList)}) {}
export class InstanceDetails extends S.Class<InstanceDetails>("InstanceDetails")({AvailabilityZone: S.optional(S.String), IamInstanceProfile: S.optional(IamInstanceProfile), ImageDescription: S.optional(S.String), ImageId: S.optional(S.String), InstanceId: S.optional(S.String), InstanceState: S.optional(S.String), InstanceType: S.optional(S.String), OutpostArn: S.optional(S.String), LaunchTime: S.optional(S.String), NetworkInterfaces: S.optional(NetworkInterfaces), Platform: S.optional(S.String), ProductCodes: S.optional(ProductCodes), Tags: S.optional(Tags)}) {}
export class RuntimeDetails extends S.Class<RuntimeDetails>("RuntimeDetails")({Process: S.optional(ProcessDetails), Context: S.optional(RuntimeContext)}) {}
export const S3ObjectUids = S.Array(S.String);
export const Ec2NetworkInterfaceUids = S.Array(S.String);
export const Ec2InstanceUids = S.Array(S.String);
export const ContainerUids = S.Array(S.String);
export class MalwareScanDetails extends S.Class<MalwareScanDetails>("MalwareScanDetails")({Threats: S.optional(Threats), ScanId: S.optional(S.String), ScanType: S.optional(S.String), ScanCategory: S.optional(S.String), ScanConfiguration: S.optional(MalwareProtectionFindingsScanConfiguration), UniqueThreatCount: S.optional(S.Number)}) {}
export class CoverageEksClusterDetails extends S.Class<CoverageEksClusterDetails>("CoverageEksClusterDetails")({ClusterName: S.optional(S.String), CoveredNodes: S.optional(S.Number), CompatibleNodes: S.optional(S.Number), AddonDetails: S.optional(AddonDetails), ManagementType: S.optional(S.String)}) {}
export class CoverageEcsClusterDetails extends S.Class<CoverageEcsClusterDetails>("CoverageEcsClusterDetails")({ClusterName: S.optional(S.String), FargateDetails: S.optional(FargateDetails), ContainerInstanceDetails: S.optional(ContainerInstanceDetails)}) {}
export class CoverageEc2InstanceDetails extends S.Class<CoverageEc2InstanceDetails>("CoverageEc2InstanceDetails")({InstanceId: S.optional(S.String), InstanceType: S.optional(S.String), ClusterArn: S.optional(S.String), AgentDetails: S.optional(AgentDetails), ManagementType: S.optional(S.String)}) {}
export class CreateDetectorResponse extends S.Class<CreateDetectorResponse>("CreateDetectorResponse")({DetectorId: S.optional(S.String), UnprocessedDataSources: S.optional(UnprocessedDataSourcesResult)}) {}
export class DescribeOrganizationConfigurationResponse extends S.Class<DescribeOrganizationConfigurationResponse>("DescribeOrganizationConfigurationResponse")({AutoEnable: S.optional(S.Boolean), MemberAccountLimitReached: S.Boolean, DataSources: S.optional(OrganizationDataSourceConfigurationsResult), Features: S.optional(OrganizationFeaturesConfigurationsResults), NextToken: S.optional(S.String), AutoEnableOrganizationMembers: S.optional(S.String)}) {}
export class GetDetectorResponse extends S.Class<GetDetectorResponse>("GetDetectorResponse")({CreatedAt: S.optional(S.String), FindingPublishingFrequency: S.optional(S.String), ServiceRole: S.String, Status: S.String, UpdatedAt: S.optional(S.String), DataSources: S.optional(DataSourceConfigurationsResult), Tags: S.optional(TagMap), Features: S.optional(DetectorFeatureConfigurationsResults)}) {}
export class NetworkEndpoint extends S.Class<NetworkEndpoint>("NetworkEndpoint")({Id: S.String, Ip: S.optional(S.String), Domain: S.optional(S.String), Port: S.optional(S.Number), Location: S.optional(NetworkGeoLocation), AutonomousSystem: S.optional(AutonomousSystem), Connection: S.optional(NetworkConnection)}) {}
export const NetworkEndpoints = S.Array(NetworkEndpoint);
export class GetMalwareScanResponse extends S.Class<GetMalwareScanResponse>("GetMalwareScanResponse")({ScanId: S.optional(S.String), DetectorId: S.optional(S.String), AdminDetectorId: S.optional(S.String), ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), ScannedResourcesCount: S.optional(S.Number), SkippedResourcesCount: S.optional(S.Number), FailedResourcesCount: S.optional(S.Number), ScannedResources: S.optional(ScannedResources), ScanConfiguration: S.optional(ScanConfiguration), ScanCategory: S.optional(S.String), ScanStatus: S.optional(S.String), ScanStatusReason: S.optional(S.String), ScanType: S.optional(S.String), ScanStartedAt: S.optional(S.Date), ScanCompletedAt: S.optional(S.Date), ScanResultDetails: S.optional(GetMalwareScanResultDetails)}) {}
export class GetUsageStatisticsResponse extends S.Class<GetUsageStatisticsResponse>("GetUsageStatisticsResponse")({UsageStatistics: S.optional(UsageStatistics), NextToken: S.optional(S.String)}) {}
export class ResourceDetails extends S.Class<ResourceDetails>("ResourceDetails")({InstanceArn: S.optional(S.String)}) {}
export class ScanResultDetails extends S.Class<ScanResultDetails>("ScanResultDetails")({ScanResult: S.optional(S.String)}) {}
export const CountByResourceType = S.Record({key: S.String, value: S.Number});
export const CountByCoverageStatus = S.Record({key: S.String, value: S.Number});
export class AccessControlList extends S.Class<AccessControlList>("AccessControlList")({AllowsPublicReadAccess: S.optional(S.Boolean), AllowsPublicWriteAccess: S.optional(S.Boolean)}) {}
export class BucketPolicy extends S.Class<BucketPolicy>("BucketPolicy")({AllowsPublicReadAccess: S.optional(S.Boolean), AllowsPublicWriteAccess: S.optional(S.Boolean)}) {}
export class ScanFilePath extends S.Class<ScanFilePath>("ScanFilePath")({FilePath: S.optional(S.String), VolumeArn: S.optional(S.String), Hash: S.optional(S.String), FileName: S.optional(S.String)}) {}
export const FilePaths = S.Array(ScanFilePath);
export const ObservationTexts = S.Array(S.String);
export class Observations extends S.Class<Observations>("Observations")({Text: S.optional(ObservationTexts)}) {}
export class AnomalyObject extends S.Class<AnomalyObject>("AnomalyObject")({ProfileType: S.optional(S.String), ProfileSubtype: S.optional(S.String), Observations: S.optional(Observations)}) {}
export const AnomalyUnusualBehaviorFeature = S.Record({key: S.String, value: AnomalyObject});
export class Account extends S.Class<Account>("Account")({Uid: S.String, Name: S.optional(S.String)}) {}
export class Ec2Instance extends S.Class<Ec2Instance>("Ec2Instance")({AvailabilityZone: S.optional(S.String), ImageDescription: S.optional(S.String), InstanceState: S.optional(S.String), IamInstanceProfile: S.optional(IamInstanceProfile), InstanceType: S.optional(S.String), OutpostArn: S.optional(S.String), Platform: S.optional(S.String), ProductCodes: S.optional(ProductCodes), Ec2NetworkInterfaceUids: S.optional(Ec2NetworkInterfaceUids)}) {}
export class AccessKey extends S.Class<AccessKey>("AccessKey")({PrincipalId: S.optional(S.String), UserName: S.optional(S.String), UserType: S.optional(S.String)}) {}
export class Ec2NetworkInterface extends S.Class<Ec2NetworkInterface>("Ec2NetworkInterface")({Ipv6Addresses: S.optional(Ipv6Addresses), PrivateIpAddresses: S.optional(PrivateIpAddresses), PublicIp: S.optional(S.String), SecurityGroups: S.optional(SecurityGroups), SubNetId: S.optional(S.String), VpcId: S.optional(S.String)}) {}
export class S3Object extends S.Class<S3Object>("S3Object")({ETag: S.optional(S.String), Key: S.optional(S.String), VersionId: S.optional(S.String)}) {}
export class EksCluster extends S.Class<EksCluster>("EksCluster")({Arn: S.optional(S.String), CreatedAt: S.optional(S.Date), Status: S.optional(S.String), VpcId: S.optional(S.String), Ec2InstanceUids: S.optional(Ec2InstanceUids)}) {}
export class KubernetesWorkload extends S.Class<KubernetesWorkload>("KubernetesWorkload")({ContainerUids: S.optional(ContainerUids), Namespace: S.optional(S.String), KubernetesResourcesTypes: S.optional(S.String)}) {}
export class ContainerFindingResource extends S.Class<ContainerFindingResource>("ContainerFindingResource")({Image: S.String, ImageUid: S.optional(S.String)}) {}
export class EcsCluster extends S.Class<EcsCluster>("EcsCluster")({Status: S.optional(S.String), Ec2InstanceUids: S.optional(Ec2InstanceUids)}) {}
export class EcsTask extends S.Class<EcsTask>("EcsTask")({CreatedAt: S.optional(S.Date), TaskDefinitionArn: S.optional(S.String), LaunchType: S.optional(S.String), ContainerUids: S.optional(ContainerUids)}) {}
export class IamInstanceProfileV2 extends S.Class<IamInstanceProfileV2>("IamInstanceProfileV2")({Ec2InstanceUids: S.optional(Ec2InstanceUids)}) {}
export class AutoscalingAutoScalingGroup extends S.Class<AutoscalingAutoScalingGroup>("AutoscalingAutoScalingGroup")({Ec2InstanceUids: S.optional(Ec2InstanceUids)}) {}
export class Ec2LaunchTemplate extends S.Class<Ec2LaunchTemplate>("Ec2LaunchTemplate")({Ec2InstanceUids: S.optional(Ec2InstanceUids), Version: S.optional(S.String)}) {}
export class Ec2Vpc extends S.Class<Ec2Vpc>("Ec2Vpc")({Ec2InstanceUids: S.optional(Ec2InstanceUids)}) {}
export class Ec2Image extends S.Class<Ec2Image>("Ec2Image")({Ec2InstanceUids: S.optional(Ec2InstanceUids)}) {}
export class CloudformationStack extends S.Class<CloudformationStack>("CloudformationStack")({Ec2InstanceUids: S.optional(Ec2InstanceUids)}) {}
export class CoverageResourceDetails extends S.Class<CoverageResourceDetails>("CoverageResourceDetails")({EksClusterDetails: S.optional(CoverageEksClusterDetails), ResourceType: S.optional(S.String), EcsClusterDetails: S.optional(CoverageEcsClusterDetails), Ec2InstanceDetails: S.optional(CoverageEc2InstanceDetails)}) {}
export class KubernetesWorkloadDetails extends S.Class<KubernetesWorkloadDetails>("KubernetesWorkloadDetails")({Name: S.optional(S.String), Type: S.optional(S.String), Uid: S.optional(S.String), Namespace: S.optional(S.String), HostNetwork: S.optional(S.Boolean), Containers: S.optional(Containers), Volumes: S.optional(Volumes), ServiceAccountName: S.optional(S.String), HostIPC: S.optional(S.Boolean), HostPID: S.optional(S.Boolean)}) {}
export class AwsApiCallAction extends S.Class<AwsApiCallAction>("AwsApiCallAction")({Api: S.optional(S.String), CallerType: S.optional(S.String), DomainDetails: S.optional(DomainDetails), ErrorCode: S.optional(S.String), UserAgent: S.optional(S.String), RemoteIpDetails: S.optional(RemoteIpDetails), ServiceName: S.optional(S.String), RemoteAccountDetails: S.optional(RemoteAccountDetails), AffectedResources: S.optional(AffectedResources)}) {}
export class Scan extends S.Class<Scan>("Scan")({DetectorId: S.optional(S.String), AdminDetectorId: S.optional(S.String), ScanId: S.optional(S.String), ScanStatus: S.optional(S.String), FailureReason: S.optional(S.String), ScanStartTime: S.optional(S.Date), ScanEndTime: S.optional(S.Date), TriggerDetails: S.optional(TriggerDetails), ResourceDetails: S.optional(ResourceDetails), ScanResultDetails: S.optional(ScanResultDetails), AccountId: S.optional(S.String), TotalBytes: S.optional(S.Number), FileCount: S.optional(S.Number), AttachedVolumes: S.optional(VolumeDetails), ScanType: S.optional(S.String)}) {}
export const Scans = S.Array(Scan);
export class CoverageStatistics extends S.Class<CoverageStatistics>("CoverageStatistics")({CountByResourceType: S.optional(CountByResourceType), CountByCoverageStatus: S.optional(CountByCoverageStatus)}) {}
export class BucketLevelPermissions extends S.Class<BucketLevelPermissions>("BucketLevelPermissions")({AccessControlList: S.optional(AccessControlList), BucketPolicy: S.optional(BucketPolicy), BlockPublicAccess: S.optional(BlockPublicAccess)}) {}
export class ScanThreatName extends S.Class<ScanThreatName>("ScanThreatName")({Name: S.optional(S.String), Severity: S.optional(S.String), ItemCount: S.optional(S.Number), FilePaths: S.optional(FilePaths)}) {}
export const ScanThreatNames = S.Array(ScanThreatName);
export const Behavior = S.Record({key: S.String, value: AnomalyUnusualBehaviorFeature});
export class User extends S.Class<User>("User")({Name: S.String, Uid: S.String, Type: S.String, CredentialUid: S.optional(S.String), Account: S.optional(Account)}) {}
export class CoverageResource extends S.Class<CoverageResource>("CoverageResource")({ResourceId: S.optional(S.String), DetectorId: S.optional(S.String), AccountId: S.optional(S.String), ResourceDetails: S.optional(CoverageResourceDetails), CoverageStatus: S.optional(S.String), Issue: S.optional(S.String), UpdatedAt: S.optional(S.Date)}) {}
export const CoverageResources = S.Array(CoverageResource);
export class KubernetesDetails extends S.Class<KubernetesDetails>("KubernetesDetails")({KubernetesUserDetails: S.optional(KubernetesUserDetails), KubernetesWorkloadDetails: S.optional(KubernetesWorkloadDetails)}) {}
export class Action extends S.Class<Action>("Action")({ActionType: S.optional(S.String), AwsApiCallAction: S.optional(AwsApiCallAction), DnsRequestAction: S.optional(DnsRequestAction), NetworkConnectionAction: S.optional(NetworkConnectionAction), PortProbeAction: S.optional(PortProbeAction), KubernetesApiCallAction: S.optional(KubernetesApiCallAction), RdsLoginAttemptAction: S.optional(RdsLoginAttemptAction), KubernetesPermissionCheckedDetails: S.optional(KubernetesPermissionCheckedDetails), KubernetesRoleBindingDetails: S.optional(KubernetesRoleBindingDetails), KubernetesRoleDetails: S.optional(KubernetesRoleDetails)}) {}
export class PublicAccessConfiguration extends S.Class<PublicAccessConfiguration>("PublicAccessConfiguration")({PublicAclAccess: S.optional(S.String), PublicPolicyAccess: S.optional(S.String), PublicAclIgnoreBehavior: S.optional(S.String), PublicBucketRestrictBehavior: S.optional(S.String)}) {}
export class DescribeMalwareScansResponse extends S.Class<DescribeMalwareScansResponse>("DescribeMalwareScansResponse")({Scans: Scans, NextToken: S.optional(S.String)}) {}
export class GetCoverageStatisticsResponse extends S.Class<GetCoverageStatisticsResponse>("GetCoverageStatisticsResponse")({CoverageStatistics: S.optional(CoverageStatistics)}) {}
export class PermissionConfiguration extends S.Class<PermissionConfiguration>("PermissionConfiguration")({BucketLevelPermissions: S.optional(BucketLevelPermissions), AccountLevelPermissions: S.optional(AccountLevelPermissions)}) {}
export class ThreatDetectedByName extends S.Class<ThreatDetectedByName>("ThreatDetectedByName")({ItemCount: S.optional(S.Number), UniqueThreatNameCount: S.optional(S.Number), Shortened: S.optional(S.Boolean), ThreatNames: S.optional(ScanThreatNames)}) {}
export class AnomalyUnusual extends S.Class<AnomalyUnusual>("AnomalyUnusual")({Behavior: S.optional(Behavior)}) {}
export class Actor extends S.Class<Actor>("Actor")({Id: S.String, User: S.optional(User), Session: S.optional(Session), Process: S.optional(ActorProcess)}) {}
export const Actors = S.Array(Actor);
export class ListCoverageResponse extends S.Class<ListCoverageResponse>("ListCoverageResponse")({Resources: CoverageResources, NextToken: S.optional(S.String)}) {}
export const AnomalyProfileFeatureObjects = S.Array(AnomalyObject);
export class S3Bucket extends S.Class<S3Bucket>("S3Bucket")({OwnerId: S.optional(S.String), CreatedAt: S.optional(S.Date), EncryptionType: S.optional(S.String), EncryptionKeyArn: S.optional(S.String), EffectivePermission: S.optional(S.String), PublicReadAccess: S.optional(S.String), PublicWriteAccess: S.optional(S.String), AccountPublicAccess: S.optional(PublicAccessConfiguration), BucketPublicAccess: S.optional(PublicAccessConfiguration), S3ObjectUids: S.optional(S3ObjectUids)}) {}
export class PublicAccess extends S.Class<PublicAccess>("PublicAccess")({PermissionConfiguration: S.optional(PermissionConfiguration), EffectivePermission: S.optional(S.String)}) {}
export class ScanDetections extends S.Class<ScanDetections>("ScanDetections")({ScannedItemCount: S.optional(ScannedItemCount), ThreatsDetectedItemCount: S.optional(ThreatsDetectedItemCount), HighestSeverityThreatDetails: S.optional(HighestSeverityThreatDetails), ThreatDetectedByName: S.optional(ThreatDetectedByName)}) {}
export const AnomalyProfileFeatures = S.Record({key: S.String, value: AnomalyProfileFeatureObjects});
export class ResourceData extends S.Class<ResourceData>("ResourceData")({S3Bucket: S.optional(S3Bucket), Ec2Instance: S.optional(Ec2Instance), AccessKey: S.optional(AccessKey), Ec2NetworkInterface: S.optional(Ec2NetworkInterface), S3Object: S.optional(S3Object), EksCluster: S.optional(EksCluster), KubernetesWorkload: S.optional(KubernetesWorkload), Container: S.optional(ContainerFindingResource), EcsCluster: S.optional(EcsCluster), EcsTask: S.optional(EcsTask), IamInstanceProfile: S.optional(IamInstanceProfileV2), AutoscalingAutoScalingGroup: S.optional(AutoscalingAutoScalingGroup), Ec2LaunchTemplate: S.optional(Ec2LaunchTemplate), Ec2Vpc: S.optional(Ec2Vpc), Ec2Image: S.optional(Ec2Image), CloudformationStack: S.optional(CloudformationStack)}) {}
export class S3BucketDetail extends S.Class<S3BucketDetail>("S3BucketDetail")({Arn: S.optional(S.String), Name: S.optional(S.String), Type: S.optional(S.String), CreatedAt: S.optional(S.Date), Owner: S.optional(Owner), Tags: S.optional(Tags), DefaultServerSideEncryption: S.optional(DefaultServerSideEncryption), PublicAccess: S.optional(PublicAccess), S3ObjectDetails: S.optional(S3ObjectDetails)}) {}
export const S3BucketDetails = S.Array(S3BucketDetail);
export class EbsVolumeScanDetails extends S.Class<EbsVolumeScanDetails>("EbsVolumeScanDetails")({ScanId: S.optional(S.String), ScanStartedAt: S.optional(S.Date), ScanCompletedAt: S.optional(S.Date), TriggerFindingId: S.optional(S.String), Sources: S.optional(Sources), ScanDetections: S.optional(ScanDetections), ScanType: S.optional(S.String)}) {}
export const AnomalyProfiles = S.Record({key: S.String, value: AnomalyProfileFeatures});
export class ResourceV2 extends S.Class<ResourceV2>("ResourceV2")({Uid: S.String, Name: S.optional(S.String), AccountId: S.optional(S.String), ResourceType: S.String, Region: S.optional(S.String), Service: S.optional(S.String), CloudPartition: S.optional(S.String), Tags: S.optional(Tags), Data: S.optional(ResourceData)}) {}
export const Resources = S.Array(ResourceV2);
export class Resource extends S.Class<Resource>("Resource")({AccessKeyDetails: S.optional(AccessKeyDetails), S3BucketDetails: S.optional(S3BucketDetails), InstanceDetails: S.optional(InstanceDetails), EksClusterDetails: S.optional(EksClusterDetails), KubernetesDetails: S.optional(KubernetesDetails), ResourceType: S.optional(S.String), EbsVolumeDetails: S.optional(EbsVolumeDetails), EcsClusterDetails: S.optional(EcsClusterDetails), ContainerDetails: S.optional(Container), RdsDbInstanceDetails: S.optional(RdsDbInstanceDetails), RdsLimitlessDbDetails: S.optional(RdsLimitlessDbDetails), RdsDbUserDetails: S.optional(RdsDbUserDetails), LambdaDetails: S.optional(LambdaDetails), EbsSnapshotDetails: S.optional(EbsSnapshotDetails), Ec2ImageDetails: S.optional(Ec2ImageDetails), RecoveryPointDetails: S.optional(RecoveryPointDetails)}) {}
export class Anomaly extends S.Class<Anomaly>("Anomaly")({Profiles: S.optional(AnomalyProfiles), Unusual: S.optional(AnomalyUnusual)}) {}
export class Sequence extends S.Class<Sequence>("Sequence")({Uid: S.String, Description: S.String, Actors: S.optional(Actors), Resources: S.optional(Resources), Endpoints: S.optional(NetworkEndpoints), Signals: Signals, SequenceIndicators: S.optional(Indicators), AdditionalSequenceTypes: S.optional(AdditionalSequenceTypes)}) {}
export class Detection extends S.Class<Detection>("Detection")({Anomaly: S.optional(Anomaly), Sequence: S.optional(Sequence)}) {}
export class Service extends S.Class<Service>("Service")({Action: S.optional(Action), Evidence: S.optional(Evidence), Archived: S.optional(S.Boolean), Count: S.optional(S.Number), DetectorId: S.optional(S.String), EventFirstSeen: S.optional(S.String), EventLastSeen: S.optional(S.String), ResourceRole: S.optional(S.String), ServiceName: S.optional(S.String), UserFeedback: S.optional(S.String), AdditionalInfo: S.optional(ServiceAdditionalInfo), FeatureName: S.optional(S.String), EbsVolumeScanDetails: S.optional(EbsVolumeScanDetails), RuntimeDetails: S.optional(RuntimeDetails), Detection: S.optional(Detection), MalwareScanDetails: S.optional(MalwareScanDetails)}) {}
export class Finding extends S.Class<Finding>("Finding")({AccountId: S.String, Arn: S.String, Confidence: S.optional(S.Number), CreatedAt: S.String, Description: S.optional(S.String), Id: S.String, Partition: S.optional(S.String), Region: S.String, Resource: Resource, SchemaVersion: S.String, Service: S.optional(Service), Severity: S.Number, Title: S.optional(S.String), Type: S.String, UpdatedAt: S.String, AssociatedAttackSequenceArn: S.optional(S.String)}) {}
export const Findings = S.Array(Finding);
export class GetFindingsResponse extends S.Class<GetFindingsResponse>("GetFindingsResponse")({Findings: Findings}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class InternalServerErrorException extends S.TaggedError<InternalServerErrorException>()("InternalServerErrorException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {Message: S.optional(S.String), Type: S.optional(S.String)}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};

//# Operations
/**
 * Archives GuardDuty findings that are specified by the list of finding IDs.
 * 
 * 
 * 
 * 
 * Only the administrator account can archive findings. Member accounts don't have
 * permission to archive findings from their accounts.
 */export const archiveFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/findings/archive", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ArchiveFindings" }, ArchiveFindingsRequest, ArchiveFindingsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Generates sample findings of types specified by the list of finding types. If 'NULL' is
 * specified for `findingTypes`, the API generates sample findings of all supported
 * finding types.
 */export const createSampleFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/findings/create", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.CreateSampleFindings" }, CreateSampleFindingsRequest, CreateSampleFindingsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an Amazon GuardDuty detector that is specified by the detector ID.
 */export const deleteDetector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}", method: "DELETE", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DeleteDetector" }, DeleteDetectorRequest, DeleteDetectorResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the filter specified by the filter name.
 */export const deleteFilter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/filter/{FilterName}", method: "DELETE", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DeleteFilter" }, DeleteFilterRequest, DeleteFilterResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the IPSet specified by the `ipSetId`. IPSets are called trusted IP
 * lists in the console user interface.
 */export const deleteIPSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/ipset/{IpSetId}", method: "DELETE", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DeleteIPSet" }, DeleteIPSetRequest, DeleteIPSetResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the publishing definition with the specified `destinationId`.
 */export const deletePublishingDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/publishingDestination/{DestinationId}", method: "DELETE", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DeletePublishingDestination" }, DeletePublishingDestinationRequest, DeletePublishingDestinationResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the threat entity set that is associated with the specified
 * `threatEntitySetId`.
 */export const deleteThreatEntitySet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/threatentityset/{ThreatEntitySetId}", method: "DELETE", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DeleteThreatEntitySet" }, DeleteThreatEntitySetRequest, DeleteThreatEntitySetResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the ThreatIntelSet specified by the ThreatIntelSet ID.
 */export const deleteThreatIntelSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}", method: "DELETE", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DeleteThreatIntelSet" }, DeleteThreatIntelSetRequest, DeleteThreatIntelSetResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the trusted entity set that is associated with the specified
 * `trustedEntitySetId`.
 */export const deleteTrustedEntitySet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/trustedentityset/{TrustedEntitySetId}", method: "DELETE", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DeleteTrustedEntitySet" }, DeleteTrustedEntitySetRequest, DeleteTrustedEntitySetResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the existing GuardDuty delegated
 * administrator of the organization. Only the organization's management account can run this
 * API operation.
 */export const disableOrganizationAdminAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/admin/disable", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DisableOrganizationAdminAccount" }, DisableOrganizationAdminAccountRequest, DisableOrganizationAdminAccountResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the current GuardDuty member account from its administrator account.
 * 
 * 
 * When you
 * disassociate an invited member from a GuardDuty delegated administrator, the member account details
 * obtained from the CreateMembers API, including the associated email addresses, are retained. This is
 * done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To
 * remove the details associated with a member account, the delegated administrator must invoke the
 * DeleteMembers API.
 * 
 * 
 * With `autoEnableOrganizationMembers` configuration for your organization set to
 * `ALL`, you'll receive an error if you attempt to disable GuardDuty in a member
 * account.
 */export const disassociateFromAdministratorAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/administrator/disassociate", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DisassociateFromAdministratorAccount" }, DisassociateFromAdministratorAccountRequest, DisassociateFromAdministratorAccountResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the current GuardDuty member account from its administrator account.
 * 
 * 
 * When you
 * disassociate an invited member from a GuardDuty delegated administrator, the member account details
 * obtained from the CreateMembers API, including the associated email addresses, are retained. This is
 * done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To
 * remove the details associated with a member account, the delegated administrator must invoke the
 * DeleteMembers API.
 */export const disassociateFromMasterAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/master/disassociate", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DisassociateFromMasterAccount" }, DisassociateFromMasterAccountRequest, DisassociateFromMasterAccountResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Designates an Amazon Web Services account within the organization as your GuardDuty delegated
 * administrator. Only the organization's management account can run this
 * API operation.
 */export const enableOrganizationAdminAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/admin/enable", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.EnableOrganizationAdminAccount" }, EnableOrganizationAdminAccountRequest, EnableOrganizationAdminAccountResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the count of all GuardDuty membership invitations that were sent to the current
 * member account except the currently accepted invitation.
 */export const getInvitationsCount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/invitation/count", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetInvitationsCount" }, GetInvitationsCountRequest, GetInvitationsCountResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds tags to a resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/tags/{ResourceArn}", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Unarchives GuardDuty findings specified by the `findingIds`.
 */export const unarchiveFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/findings/unarchive", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UnarchiveFindings" }, UnarchiveFindingsRequest, UnarchiveFindingsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the GuardDuty detector specified by the detector ID.
 * 
 * 
 * Specifying both EKS Runtime Monitoring (`EKS_RUNTIME_MONITORING`)
 * and Runtime Monitoring (`RUNTIME_MONITORING`) will cause an error.
 * You can add only one of these two features because Runtime Monitoring already includes the
 * threat detection for Amazon EKS resources. For more information, see
 * Runtime Monitoring.
 * 
 * 
 * There might be regional differences because some data sources might not be
 * available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 * information, see Regions and endpoints.
 */export const updateDetector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UpdateDetector" }, UpdateDetectorRequest, UpdateDetectorResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Marks the specified GuardDuty findings as useful or not useful.
 */export const updateFindingsFeedback = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/findings/feedback", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UpdateFindingsFeedback" }, UpdateFindingsFeedbackRequest, UpdateFindingsFeedbackResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the IPSet specified by the IPSet ID.
 */export const updateIPSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/ipset/{IpSetId}", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UpdateIPSet" }, UpdateIPSetRequest, UpdateIPSetResponse, [AccessDeniedException, BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates information about the publishing destination specified by the
 * `destinationId`.
 */export const updatePublishingDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/publishingDestination/{DestinationId}", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UpdatePublishingDestination" }, UpdatePublishingDestinationRequest, UpdatePublishingDestinationResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the threat entity set associated with the specified `threatEntitySetId`.
 */export const updateThreatEntitySet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/threatentityset/{ThreatEntitySetId}", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UpdateThreatEntitySet" }, UpdateThreatEntitySetRequest, UpdateThreatEntitySetResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the ThreatIntelSet specified by the ThreatIntelSet ID.
 */export const updateThreatIntelSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UpdateThreatIntelSet" }, UpdateThreatIntelSetRequest, UpdateThreatIntelSetResponse, [AccessDeniedException, BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the trusted entity set associated with the specified `trustedEntitySetId`.
 */export const updateTrustedEntitySet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/trustedentityset/{TrustedEntitySetId}", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UpdateTrustedEntitySet" }, UpdateTrustedEntitySetRequest, UpdateTrustedEntitySetResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Accepts the invitation to be a member account and get monitored by a GuardDuty
 * administrator account that sent the invitation.
 */export const acceptAdministratorInvitation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/administrator", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.AcceptAdministratorInvitation" }, AcceptAdministratorInvitationRequest, AcceptAdministratorInvitationResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Accepts the invitation to be monitored by a GuardDuty administrator account.
 */export const acceptInvitation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/master", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.AcceptInvitation" }, AcceptInvitationRequest, AcceptInvitationResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new IPSet, which is called a trusted IP list in the console user interface. An
 * IPSet is a list of IP addresses that are trusted for secure communication with Amazon Web Services
 * infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are
 * included in IPSets. Only users from the administrator account can use this operation.
 */export const createIPSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/ipset", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.CreateIPSet" }, CreateIPSetRequest, CreateIPSetResponse, [AccessDeniedException, BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new threat entity set. In a threat entity set, you can provide known malicious
 * IP addresses and domains for your Amazon Web Services environment.
 * GuardDuty generates findings based on the entries in the threat entity sets.
 * Only users of the administrator account can manage entity sets, which automatically apply
 * to member accounts.
 */export const createThreatEntitySet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/threatentityset", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.CreateThreatEntitySet" }, CreateThreatEntitySetRequest, CreateThreatEntitySetResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses.
 * GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator
 * account can use this operation.
 */export const createThreatIntelSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/threatintelset", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.CreateThreatIntelSet" }, CreateThreatIntelSetRequest, CreateThreatIntelSetResponse, [AccessDeniedException, BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new trusted entity set. In the trusted entity set, you can provide IP addresses
 * and domains that you believe are secure for communication in your Amazon Web Services environment. GuardDuty
 * will not generate findings for the entries that are specified in a trusted entity set. At any
 * given time, you can have only one trusted entity set.
 * 
 * 
 * Only users of the administrator account can manage the entity sets, which automatically
 * apply to member accounts.
 */export const createTrustedEntitySet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/trustedentityset", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.CreateTrustedEntitySet" }, CreateTrustedEntitySetRequest, CreateTrustedEntitySetResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes invitations sent to the current member account by Amazon Web Services accounts specified by
 * their account IDs.
 */export const deleteInvitations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/invitation/delete", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DeleteInvitations" }, DeleteInvitationsRequest, DeleteInvitationsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes GuardDuty member accounts (to the current GuardDuty administrator account)
 * specified by the account IDs.
 * 
 * 
 * With `autoEnableOrganizationMembers` configuration for your organization set to
 * `ALL`, you'll receive an error if you attempt to disable GuardDuty for a member
 * account in your organization.
 */export const deleteMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/member/delete", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DeleteMembers" }, DeleteMembersRequest, DeleteMembersResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the publishing destination specified by the provided
 * `destinationId`.
 */export const describePublishingDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/publishingDestination/{DestinationId}", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DescribePublishingDestination" }, DescribePublishingDestinationRequest, DescribePublishingDestinationResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates GuardDuty member accounts (from the current administrator account) specified
 * by the account IDs.
 * 
 * 
 * When you
 * disassociate an invited member from a GuardDuty delegated administrator, the member account details
 * obtained from the CreateMembers API, including the associated email addresses, are retained. This is
 * done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To
 * remove the details associated with a member account, the delegated administrator must invoke the
 * DeleteMembers API.
 * 
 * 
 * With `autoEnableOrganizationMembers` configuration for your organization set to
 * `ALL`, you'll receive an error if you attempt to disassociate a member account
 * before removing them from your organization.
 * 
 * 
 * If you disassociate a member account that was added by invitation, the member account details
 * obtained from this API, including the associated email addresses, will be retained.
 * This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To
 * remove the details associated with a member account, the delegated administrator must invoke the
 * DeleteMembers API.
 * 
 * 
 * When the member accounts added through Organizations are later disassociated, you (administrator)
 * can't invite them by calling the InviteMembers API. You can create an association with these
 * member accounts again only by calling the CreateMembers API.
 */export const disassociateMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/member/disassociate", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DisassociateMembers" }, DisassociateMembersRequest, DisassociateMembersResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the details of the filter specified by the filter name.
 */export const getFilter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/filter/{FilterName}", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetFilter" }, GetFilterRequest, GetFilterResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the IPSet specified by the `ipSetId`.
 */export const getIPSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/ipset/{IpSetId}", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetIPSet" }, GetIPSetRequest, GetIPSetResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the details of the malware scan settings.
 * 
 * 
 * There might be regional differences because some data sources might not be
 * available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 * information, see Regions and endpoints.
 */export const getMalwareScanSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/malware-scan-settings", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetMalwareScanSettings" }, GetMalwareScanSettingsRequest, GetMalwareScanSettingsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the threat entity set associated with the specified `threatEntitySetId`.
 */export const getThreatEntitySet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/threatentityset/{ThreatEntitySetId}", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetThreatEntitySet" }, GetThreatEntitySetRequest, GetThreatEntitySetResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.
 */export const getThreatIntelSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetThreatIntelSet" }, GetThreatIntelSetRequest, GetThreatIntelSetResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the trusted entity set associated with the specified `trustedEntitySetId`.
 */export const getTrustedEntitySet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/trustedentityset/{TrustedEntitySetId}", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetTrustedEntitySet" }, GetTrustedEntitySetRequest, GetTrustedEntitySetResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Invites Amazon Web Services accounts to become members of an organization administered by the Amazon Web Services account
 * that invokes this API. If you are using Amazon Web Services Organizations to manage your GuardDuty environment, this step is not
 * needed. For more information, see Managing accounts with organizations.
 * 
 * 
 * To invite Amazon Web Services accounts, the first step is
 * to ensure that GuardDuty has been enabled in the potential member accounts. You can now invoke this API
 * to add accounts by invitation. The
 * invited accounts can either accept or decline the invitation from their GuardDuty accounts. Each invited Amazon Web Services account can
 * choose to accept the invitation from only one Amazon Web Services account. For more information, see
 * Managing GuardDuty accounts
 * by invitation.
 * 
 * 
 * After the invite has been accepted and you choose to disassociate a member account
 * (by using DisassociateMembers) from your account,
 * the details of the member account obtained by invoking CreateMembers, including the
 * associated email addresses, will be retained.
 * This is done so that you can invoke InviteMembers without the need to invoke
 * CreateMembers again. To
 * remove the details associated with a member account, you must also invoke
 * DeleteMembers.
 * 
 * 
 * If you disassociate a member account that was added by invitation, the member account details
 * obtained from this API, including the associated email addresses, will be retained.
 * This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To
 * remove the details associated with a member account, the delegated administrator must invoke the
 * DeleteMembers API.
 * 
 * 
 * When the member accounts added through Organizations are later disassociated, you (administrator)
 * can't invite them by calling the InviteMembers API. You can create an association with these
 * member accounts again only by calling the CreateMembers API.
 */export const inviteMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/member/invite", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.InviteMembers" }, InviteMembersRequest, InviteMembersResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists detectorIds of all the existing Amazon GuardDuty detector resources.
 */export const listDetectors = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListDetectors" }, ListDetectorsRequest, ListDetectorsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a paginated list of the current filters.
 */export const listFilters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/filter", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListFilters" }, ListFiltersRequest, ListFiltersResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists GuardDuty findings for the specified detector ID.
 * 
 * 
 * There might be regional differences because some flags might not be available in all the Regions where GuardDuty
 * is currently supported. For more information, see Regions and endpoints.
 */export const listFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/findings", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListFindings" }, ListFindingsRequest, ListFindingsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this
 * operation from a member account, the IPSets returned are the IPSets from the associated
 * administrator account.
 */export const listIPSets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/ipset", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListIPSets" }, ListIPSetsRequest, ListIPSetsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists details about all member accounts for the current GuardDuty administrator
 * account.
 */export const listMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/member", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListMembers" }, ListMembersRequest, ListMembersResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists tags for a resource. Tagging is currently supported for detectors, finding filters,
 * IP sets, threat intel sets, and publishing destination, with a limit of 50 tags per resource.
 * When invoked, this
 * operation returns all assigned tags for a given resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the threat entity sets associated with the specified GuardDuty detector ID. If you use this
 * operation from a member account, the threat entity sets that are returned as a response, belong to the
 * administrator account.
 */export const listThreatEntitySets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/threatentityset", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListThreatEntitySets" }, ListThreatEntitySetsRequest, ListThreatEntitySetsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you
 * use this operation from a member account, the ThreatIntelSets associated with the
 * administrator account are returned.
 */export const listThreatIntelSets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/threatintelset", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListThreatIntelSets" }, ListThreatIntelSetsRequest, ListThreatIntelSetsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the trusted entity sets associated with the specified GuardDuty detector ID. If you use this
 * operation from a member account, the trusted entity sets that are returned as a response, belong to the
 * administrator account.
 */export const listTrustedEntitySets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/trustedentityset", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListTrustedEntitySets" }, ListTrustedEntitySetsRequest, ListTrustedEntitySetsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates a malware scan for a specific S3 object. This API allows you to perform on-demand malware scanning of individual objects in S3 buckets that have Malware Protection for S3 enabled.
 * 
 * 
 * When you use this API, the Amazon Web Services service terms for GuardDuty Malware
 * Protection apply. For more information, see Amazon Web Services service terms for GuardDuty Malware Protection.
 */export const sendObjectMalwareScan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/object-malware-scan/send", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.SendObjectMalwareScan" }, SendObjectMalwareScanRequest, SendObjectMalwareScanResponse, [AccessDeniedException, BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Turns on GuardDuty monitoring of the specified member accounts. Use this operation to
 * restart monitoring of accounts that you stopped monitoring with the StopMonitoringMembers operation.
 */export const startMonitoringMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/member/start", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.StartMonitoringMembers" }, StartMonitoringMembersRequest, StartMonitoringMembersResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops GuardDuty monitoring for the specified member accounts. Use the
 * `StartMonitoringMembers` operation to restart monitoring for those
 * accounts.
 * 
 * 
 * With `autoEnableOrganizationMembers` configuration for your organization set to
 * `ALL`, you'll receive an error if you attempt to stop monitoring the member
 * accounts in your organization.
 */export const stopMonitoringMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/member/stop", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.StopMonitoringMembers" }, StopMonitoringMembersRequest, StopMonitoringMembersResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the filter specified by the filter name.
 */export const updateFilter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/filter/{FilterName}", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UpdateFilter" }, UpdateFilterRequest, UpdateFilterResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates member accounts of the current Amazon Web Services account by specifying a list of Amazon Web Services account
 * IDs. This step is a prerequisite for managing the associated member accounts either by
 * invitation or through an organization.
 * 
 * 
 * As a delegated administrator, using `CreateMembers` will enable GuardDuty in
 * the added member accounts, with the exception of the
 * organization delegated administrator account. A delegated administrator must enable GuardDuty
 * prior to being added as a member.
 * 
 * 
 * When you use CreateMembers as an Organizations delegated
 * administrator, GuardDuty applies your organization's auto-enable settings to the member
 * accounts in this request, irrespective of the accounts being new or existing members. For
 * more information about the existing auto-enable settings for your organization, see
 * DescribeOrganizationConfiguration.
 * 
 * 
 * If you disassociate a member account that was added by invitation, the member account details
 * obtained from this API, including the associated email addresses, will be retained.
 * This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To
 * remove the details associated with a member account, the delegated administrator must invoke the
 * DeleteMembers API.
 * 
 * 
 * When the member accounts added through Organizations are later disassociated, you (administrator)
 * can't invite them by calling the InviteMembers API. You can create an association with these
 * member accounts again only by calling the CreateMembers API.
 */export const createMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/member", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.CreateMembers" }, CreateMembersRequest, CreateMembersResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a publishing destination where you can export your GuardDuty findings. Before you start exporting the
 * findings, the destination resource must exist.
 */export const createPublishingDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/publishingDestination", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.CreatePublishingDestination" }, CreatePublishingDestinationRequest, CreatePublishingDestinationResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Declines invitations sent to the current member account by Amazon Web Services accounts specified by
 * their account IDs.
 */export const declineInvitations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/invitation/decline", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DeclineInvitations" }, DeclineInvitationsRequest, DeclineInvitationsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the Malware Protection plan ID associated with the Malware Protection plan resource.
 * Use this API only when you no longer want to protect the resource associated with this
 * Malware Protection plan ID.
 */export const deleteMalwareProtectionPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/malware-protection-plan/{MalwareProtectionPlanId}", method: "DELETE", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DeleteMalwareProtectionPlan" }, DeleteMalwareProtectionPlanRequest, S.Struct({}), [AccessDeniedException, BadRequestException, InternalServerErrorException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides the details of the GuardDuty administrator account associated with the current
 * GuardDuty member account.
 * 
 * 
 * Based on the type of account that runs this API, the following list shows how the API behavior varies:
 * 
 * 
 * 
 * - When the GuardDuty administrator account runs this API, it will return success (`HTTP 200`) but no content.
 * 
 * 
 * 
 * - When a member account runs this API, it will return the details of the GuardDuty administrator account that is associated
 * with this calling member account.
 * 
 * 
 * 
 * - When an individual account (not associated with an organization) runs this API, it will return success (`HTTP 200`)
 * but no content.
 */export const getAdministratorAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/administrator", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetAdministratorAccount" }, GetAdministratorAccountRequest, GetAdministratorAccountResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the Malware Protection plan details associated with a Malware Protection
 * plan ID.
 */export const getMalwareProtectionPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/malware-protection-plan/{MalwareProtectionPlanId}", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetMalwareProtectionPlan" }, GetMalwareProtectionPlanRequest, GetMalwareProtectionPlanResponse, [AccessDeniedException, BadRequestException, InternalServerErrorException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides the details for the GuardDuty administrator account associated with the current
 * GuardDuty member account.
 */export const getMasterAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/master", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetMasterAccount" }, GetMasterAccountRequest, GetMasterAccountResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves GuardDuty member accounts (of the current GuardDuty administrator account)
 * specified by the account IDs.
 */export const getMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/member/get", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetMembers" }, GetMembersRequest, GetMembersResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all GuardDuty membership invitations that were sent to the current Amazon Web Services
 * account.
 */export const listInvitations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/invitation", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListInvitations" }, ListInvitationsRequest, ListInvitationsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Malware Protection plan IDs associated with the protected
 * resources in your Amazon Web Services account.
 */export const listMalwareProtectionPlans = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/malware-protection-plan", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListMalwareProtectionPlans" }, ListMalwareProtectionPlansRequest, ListMalwareProtectionPlansResponse, [AccessDeniedException, BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the accounts designated as GuardDuty delegated administrators.
 * Only the organization's management account can run this
 * API operation.
 */export const listOrganizationAdminAccounts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/admin", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListOrganizationAdminAccounts" }, ListOrganizationAdminAccountsRequest, ListOrganizationAdminAccountsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of publishing destinations associated with the specified
 * `detectorId`.
 */export const listPublishingDestinations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/publishingDestination", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListPublishingDestinations" }, ListPublishingDestinationsRequest, ListPublishingDestinationsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing Malware Protection plan resource.
 */export const updateMalwareProtectionPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/malware-protection-plan/{MalwareProtectionPlanId}", method: "PATCH", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UpdateMalwareProtectionPlan" }, UpdateMalwareProtectionPlanRequest, S.Struct({}), [AccessDeniedException, BadRequestException, InternalServerErrorException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists GuardDuty findings statistics for the specified detector ID.
 * 
 * 
 * You must provide either `findingStatisticTypes` or
 * `groupBy` parameter, and not both. You can use the `maxResults` and `orderBy`
 * parameters only when using `groupBy`.
 * 
 * 
 * There might be regional differences because some flags might not be available in all the Regions where GuardDuty
 * is currently supported. For more information, see Regions and endpoints.
 */export const getFindingsStatistics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/findings/statistics", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetFindingsStatistics" }, GetFindingsStatisticsRequest, GetFindingsStatisticsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates the malware scan. Invoking this API will automatically create the Service-linked role in
 * the corresponding account if the resourceArn belongs to an EC2 instance.
 * 
 * 
 * When the malware scan starts, you can use the associated scan ID to track the status of the scan. For more information,
 * see ListMalwareScans and GetMalwareScan.
 * 
 * 
 * When you use this API, the Amazon Web Services service terms for GuardDuty Malware
 * Protection apply. For more information, see Amazon Web Services service terms for GuardDuty Malware Protection.
 */export const startMalwareScan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/malware-scan/start", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.StartMalwareScan" }, StartMalwareScanRequest, StartMalwareScanResponse, [BadRequestException, ConflictException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Contains information on member accounts to be updated.
 * 
 * 
 * Specifying both EKS Runtime Monitoring (`EKS_RUNTIME_MONITORING`)
 * and Runtime Monitoring (`RUNTIME_MONITORING`) will cause an error.
 * You can add only one of these two features because Runtime Monitoring already includes the
 * threat detection for Amazon EKS resources. For more information, see
 * Runtime Monitoring.
 * 
 * 
 * There might be regional differences because some data sources might not be
 * available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 * information, see Regions and endpoints.
 */export const updateMemberDetectors = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/member/detector/update", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UpdateMemberDetectors" }, UpdateMemberDetectorsRequest, UpdateMemberDetectorsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a filter using the specified finding criteria. The maximum number of saved filters
 * per Amazon Web Services account per Region is 100. For more information, see Quotas for GuardDuty.
 */export const createFilter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/filter", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.CreateFilter" }, CreateFilterRequest, CreateFilterResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new Malware Protection plan for the protected resource.
 * 
 * 
 * When you create a Malware Protection plan, the Amazon Web Services service terms for GuardDuty Malware
 * Protection apply. For more information, see Amazon Web Services service terms for GuardDuty Malware Protection.
 */export const createMalwareProtectionPlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/malware-protection-plan", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.CreateMalwareProtectionPlan" }, CreateMalwareProtectionPlanRequest, CreateMalwareProtectionPlanResponse, [AccessDeniedException, BadRequestException, ConflictException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes which data sources are enabled for the member account's detector.
 * 
 * 
 * There might be regional differences because some data sources might not be
 * available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 * information, see Regions and endpoints.
 */export const getMemberDetectors = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/member/detector/get", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetMemberDetectors" }, GetMemberDetectorsRequest, GetMemberDetectorsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves how many active member accounts have
 * each feature enabled within GuardDuty. Only a delegated GuardDuty administrator of an organization can run this API.
 * 
 * 
 * When you create a new organization, it might take up to 24
 * hours to generate the statistics for the entire organization.
 */export const getOrganizationStatistics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/organization/statistics", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetOrganizationStatistics" }, S.Struct({}), GetOrganizationStatisticsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides the number of days left for each data source used in the free trial
 * period.
 */export const getRemainingFreeTrialDays = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/freeTrial/daysRemaining", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetRemainingFreeTrialDays" }, GetRemainingFreeTrialDaysRequest, GetRemainingFreeTrialDaysResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of malware scans. Each member account can view the malware scans for their
 * own accounts. An administrator can view the malware scans for all of its members' accounts.
 */export const listMalwareScans = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/malware-scan", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListMalwareScans" }, ListMalwareScansRequest, ListMalwareScansResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the malware scan settings.
 * 
 * 
 * There might be regional differences because some data sources might not be
 * available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 * information, see Regions and endpoints.
 */export const updateMalwareScanSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/malware-scan-settings", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UpdateMalwareScanSettings" }, UpdateMalwareScanSettingsRequest, UpdateMalwareScanSettingsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Configures the delegated administrator account with the provided values. You must provide
 * a value for either `autoEnableOrganizationMembers` or `autoEnable`, but not both.
 * 
 * 
 * Specifying both EKS Runtime Monitoring (`EKS_RUNTIME_MONITORING`)
 * and Runtime Monitoring (`RUNTIME_MONITORING`) will cause an error.
 * You can add only one of these two features because Runtime Monitoring already includes the
 * threat detection for Amazon EKS resources. For more information, see
 * Runtime Monitoring.
 * 
 * 
 * There might be regional differences because some data sources might not be
 * available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 * information, see Regions and endpoints.
 */export const updateOrganizationConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/admin", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.UpdateOrganizationConfiguration" }, UpdateOrganizationConfigurationRequest, UpdateOrganizationConfigurationResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a single GuardDuty detector. A detector is a resource that represents the
 * GuardDuty service. To start using GuardDuty, you must create a detector in each Region where
 * you enable the service. You can have only one detector per account per Region. All data
 * sources are enabled in a new detector by default.
 * 
 * 
 * 
 * - When you don't specify any `features`, with an
 * exception to `RUNTIME_MONITORING`, all the optional features are
 * enabled by default.
 * 
 * 
 * 
 * - When you specify some of the `features`, any feature that is not specified in the
 * API call gets enabled by default, with an exception to `RUNTIME_MONITORING`.
 * 
 * 
 * 
 * 
 * 
 * Specifying both EKS Runtime Monitoring (`EKS_RUNTIME_MONITORING`)
 * and Runtime Monitoring (`RUNTIME_MONITORING`) will cause an error.
 * You can add only one of these two features because Runtime Monitoring already includes the
 * threat detection for Amazon EKS resources. For more information, see
 * Runtime Monitoring.
 * 
 * 
 * There might be regional differences because some data sources might not be
 * available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 * information, see Regions and endpoints.
 */export const createDetector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.CreateDetector" }, CreateDetectorRequest, CreateDetectorResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the account selected as the delegated administrator for
 * GuardDuty.
 * 
 * 
 * There might be regional differences because some data sources might not be
 * available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 * information, see Regions and endpoints.
 */export const describeOrganizationConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/admin", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DescribeOrganizationConfiguration" }, DescribeOrganizationConfigurationRequest, DescribeOrganizationConfigurationResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a GuardDuty detector specified by the detectorId.
 * 
 * 
 * There might be regional differences because some data sources might not be
 * available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 * information, see Regions and endpoints.
 */export const getDetector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetDetector" }, GetDetectorRequest, GetDetectorResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the detailed information for a specific malware scan. Each member account can view the malware scan details for their
 * own account. An administrator can view malware scan details for all accounts in the organization.
 * 
 * 
 * There might be regional differences because some data sources might not be
 * available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 * information, see Regions and endpoints.
 */export const getMalwareScan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/malware-scan/{ScanId}", method: "GET", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetMalwareScan" }, GetMalwareScanRequest, GetMalwareScanResponse, [BadRequestException, InternalServerErrorException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector
 * ID. For newly enabled detectors or data sources, the cost returned will include only the usage
 * so far under 30 days. This may differ from the cost metrics in the console, which project
 * usage over 30 days to provide a monthly cost estimate. For more information, see Understanding How Usage Costs are Calculated.
 */export const getUsageStatistics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/usage/statistics", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetUsageStatistics" }, GetUsageStatisticsRequest, GetUsageStatisticsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of malware scans. Each member account can view the malware scans for their
 * own accounts. An administrator can view the malware scans for all the member accounts.
 * 
 * 
 * There might be regional differences because some data sources might not be
 * available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 * information, see Regions and endpoints.
 */export const describeMalwareScans = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/malware-scans", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.DescribeMalwareScans" }, DescribeMalwareScansRequest, DescribeMalwareScansResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves aggregated statistics for your account. If you are a GuardDuty administrator, you
 * can retrieve the statistics for all the resources associated with the active member accounts
 * in your organization who have enabled Runtime Monitoring and have the GuardDuty security agent running
 * on their resources.
 */export const getCoverageStatistics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/coverage/statistics", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetCoverageStatistics" }, GetCoverageStatisticsRequest, GetCoverageStatisticsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists coverage details for your GuardDuty account. If you're a GuardDuty administrator, you can
 * retrieve all resources associated with the active member accounts in your organization.
 * 
 * 
 * Make sure the accounts have Runtime Monitoring enabled and GuardDuty agent running on
 * their resources.
 */export const listCoverage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/coverage", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.ListCoverage" }, ListCoverageRequest, ListCoverageResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes Amazon GuardDuty findings specified by finding IDs.
 */export const getFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-28", uri: "/detector/{DetectorId}/findings/get", sdkId: "GuardDuty", sigV4ServiceName: "guardduty", name: "GuardDutyAPIService.GetFindings" }, GetFindingsRequest, GetFindingsResponse, [BadRequestException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

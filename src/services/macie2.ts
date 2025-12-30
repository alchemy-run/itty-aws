import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DescribeOrganizationConfigurationRequest extends S.Class<DescribeOrganizationConfigurationRequest>("DescribeOrganizationConfigurationRequest")({}) {}
export class DisableMacieRequest extends S.Class<DisableMacieRequest>("DisableMacieRequest")({}) {}
export class DisableMacieResponse extends S.Class<DisableMacieResponse>("DisableMacieResponse")({}) {}
export class DisassociateFromAdministratorAccountRequest extends S.Class<DisassociateFromAdministratorAccountRequest>("DisassociateFromAdministratorAccountRequest")({}) {}
export class DisassociateFromAdministratorAccountResponse extends S.Class<DisassociateFromAdministratorAccountResponse>("DisassociateFromAdministratorAccountResponse")({}) {}
export class DisassociateFromMasterAccountRequest extends S.Class<DisassociateFromMasterAccountRequest>("DisassociateFromMasterAccountRequest")({}) {}
export class DisassociateFromMasterAccountResponse extends S.Class<DisassociateFromMasterAccountResponse>("DisassociateFromMasterAccountResponse")({}) {}
export class GetAdministratorAccountRequest extends S.Class<GetAdministratorAccountRequest>("GetAdministratorAccountRequest")({}) {}
export class GetAutomatedDiscoveryConfigurationRequest extends S.Class<GetAutomatedDiscoveryConfigurationRequest>("GetAutomatedDiscoveryConfigurationRequest")({}) {}
export class GetClassificationExportConfigurationRequest extends S.Class<GetClassificationExportConfigurationRequest>("GetClassificationExportConfigurationRequest")({}) {}
export class GetFindingsPublicationConfigurationRequest extends S.Class<GetFindingsPublicationConfigurationRequest>("GetFindingsPublicationConfigurationRequest")({}) {}
export class GetInvitationsCountRequest extends S.Class<GetInvitationsCountRequest>("GetInvitationsCountRequest")({}) {}
export class GetMacieSessionRequest extends S.Class<GetMacieSessionRequest>("GetMacieSessionRequest")({}) {}
export class GetMasterAccountRequest extends S.Class<GetMasterAccountRequest>("GetMasterAccountRequest")({}) {}
export class GetRevealConfigurationRequest extends S.Class<GetRevealConfigurationRequest>("GetRevealConfigurationRequest")({}) {}
export const __listOf__string = S.Array(S.String);
export const __listOfFindingType = S.Array(S.String);
export class AcceptInvitationRequest extends S.Class<AcceptInvitationRequest>("AcceptInvitationRequest")({administratorAccountId: S.optional(S.String), invitationId: S.String, masterAccount: S.optional(S.String)}) {}
export class AcceptInvitationResponse extends S.Class<AcceptInvitationResponse>("AcceptInvitationResponse")({}) {}
export class BatchGetCustomDataIdentifiersRequest extends S.Class<BatchGetCustomDataIdentifiersRequest>("BatchGetCustomDataIdentifiersRequest")({ids: S.optional(__listOf__string)}) {}
export class CreateInvitationsRequest extends S.Class<CreateInvitationsRequest>("CreateInvitationsRequest")({accountIds: __listOf__string, disableEmailNotification: S.optional(S.Boolean), message: S.optional(S.String)}) {}
export class CreateSampleFindingsRequest extends S.Class<CreateSampleFindingsRequest>("CreateSampleFindingsRequest")({findingTypes: S.optional(__listOfFindingType)}) {}
export class CreateSampleFindingsResponse extends S.Class<CreateSampleFindingsResponse>("CreateSampleFindingsResponse")({}) {}
export class DeclineInvitationsRequest extends S.Class<DeclineInvitationsRequest>("DeclineInvitationsRequest")({accountIds: __listOf__string}) {}
export class DeleteAllowListRequest extends S.Class<DeleteAllowListRequest>("DeleteAllowListRequest")({id: S.String, ignoreJobChecks: S.optional(S.String)}) {}
export class DeleteAllowListResponse extends S.Class<DeleteAllowListResponse>("DeleteAllowListResponse")({}) {}
export class DeleteCustomDataIdentifierRequest extends S.Class<DeleteCustomDataIdentifierRequest>("DeleteCustomDataIdentifierRequest")({id: S.String}) {}
export class DeleteCustomDataIdentifierResponse extends S.Class<DeleteCustomDataIdentifierResponse>("DeleteCustomDataIdentifierResponse")({}) {}
export class DeleteFindingsFilterRequest extends S.Class<DeleteFindingsFilterRequest>("DeleteFindingsFilterRequest")({id: S.String}) {}
export class DeleteFindingsFilterResponse extends S.Class<DeleteFindingsFilterResponse>("DeleteFindingsFilterResponse")({}) {}
export class DeleteInvitationsRequest extends S.Class<DeleteInvitationsRequest>("DeleteInvitationsRequest")({accountIds: __listOf__string}) {}
export class DeleteMemberRequest extends S.Class<DeleteMemberRequest>("DeleteMemberRequest")({id: S.String}) {}
export class DeleteMemberResponse extends S.Class<DeleteMemberResponse>("DeleteMemberResponse")({}) {}
export class DescribeClassificationJobRequest extends S.Class<DescribeClassificationJobRequest>("DescribeClassificationJobRequest")({jobId: S.String}) {}
export class DescribeOrganizationConfigurationResponse extends S.Class<DescribeOrganizationConfigurationResponse>("DescribeOrganizationConfigurationResponse")({autoEnable: S.optional(S.Boolean), maxAccountLimitReached: S.optional(S.Boolean)}) {}
export class DisableOrganizationAdminAccountRequest extends S.Class<DisableOrganizationAdminAccountRequest>("DisableOrganizationAdminAccountRequest")({adminAccountId: S.String}) {}
export class DisableOrganizationAdminAccountResponse extends S.Class<DisableOrganizationAdminAccountResponse>("DisableOrganizationAdminAccountResponse")({}) {}
export class DisassociateMemberRequest extends S.Class<DisassociateMemberRequest>("DisassociateMemberRequest")({id: S.String}) {}
export class DisassociateMemberResponse extends S.Class<DisassociateMemberResponse>("DisassociateMemberResponse")({}) {}
export class EnableMacieRequest extends S.Class<EnableMacieRequest>("EnableMacieRequest")({clientToken: S.optional(S.String), findingPublishingFrequency: S.optional(S.String), status: S.optional(S.String)}) {}
export class EnableMacieResponse extends S.Class<EnableMacieResponse>("EnableMacieResponse")({}) {}
export class EnableOrganizationAdminAccountRequest extends S.Class<EnableOrganizationAdminAccountRequest>("EnableOrganizationAdminAccountRequest")({adminAccountId: S.String, clientToken: S.optional(S.String)}) {}
export class EnableOrganizationAdminAccountResponse extends S.Class<EnableOrganizationAdminAccountResponse>("EnableOrganizationAdminAccountResponse")({}) {}
export class GetAllowListRequest extends S.Class<GetAllowListRequest>("GetAllowListRequest")({id: S.String}) {}
export class GetAutomatedDiscoveryConfigurationResponse extends S.Class<GetAutomatedDiscoveryConfigurationResponse>("GetAutomatedDiscoveryConfigurationResponse")({autoEnableOrganizationMembers: S.optional(S.String), classificationScopeId: S.optional(S.String), disabledAt: S.optional(S.Date), firstEnabledAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date), sensitivityInspectionTemplateId: S.optional(S.String), status: S.optional(S.String)}) {}
export class GetBucketStatisticsRequest extends S.Class<GetBucketStatisticsRequest>("GetBucketStatisticsRequest")({accountId: S.optional(S.String)}) {}
export class GetClassificationScopeRequest extends S.Class<GetClassificationScopeRequest>("GetClassificationScopeRequest")({id: S.String}) {}
export class GetCustomDataIdentifierRequest extends S.Class<GetCustomDataIdentifierRequest>("GetCustomDataIdentifierRequest")({id: S.String}) {}
export class GetFindingsFilterRequest extends S.Class<GetFindingsFilterRequest>("GetFindingsFilterRequest")({id: S.String}) {}
export class GetInvitationsCountResponse extends S.Class<GetInvitationsCountResponse>("GetInvitationsCountResponse")({invitationsCount: S.optional(S.Number)}) {}
export class GetMacieSessionResponse extends S.Class<GetMacieSessionResponse>("GetMacieSessionResponse")({createdAt: S.optional(S.Date), findingPublishingFrequency: S.optional(S.String), serviceRole: S.optional(S.String), status: S.optional(S.String), updatedAt: S.optional(S.Date)}) {}
export class Invitation extends S.Class<Invitation>("Invitation")({accountId: S.optional(S.String), invitationId: S.optional(S.String), invitedAt: S.optional(S.Date), relationshipStatus: S.optional(S.String)}) {}
export class GetMasterAccountResponse extends S.Class<GetMasterAccountResponse>("GetMasterAccountResponse")({master: S.optional(Invitation)}) {}
export class GetMemberRequest extends S.Class<GetMemberRequest>("GetMemberRequest")({id: S.String}) {}
export class GetResourceProfileRequest extends S.Class<GetResourceProfileRequest>("GetResourceProfileRequest")({resourceArn: S.String}) {}
export class GetSensitiveDataOccurrencesRequest extends S.Class<GetSensitiveDataOccurrencesRequest>("GetSensitiveDataOccurrencesRequest")({findingId: S.String}) {}
export class GetSensitiveDataOccurrencesAvailabilityRequest extends S.Class<GetSensitiveDataOccurrencesAvailabilityRequest>("GetSensitiveDataOccurrencesAvailabilityRequest")({findingId: S.String}) {}
export class GetSensitivityInspectionTemplateRequest extends S.Class<GetSensitivityInspectionTemplateRequest>("GetSensitivityInspectionTemplateRequest")({id: S.String}) {}
export class GetUsageTotalsRequest extends S.Class<GetUsageTotalsRequest>("GetUsageTotalsRequest")({timeRange: S.optional(S.String)}) {}
export class ListAllowListsRequest extends S.Class<ListAllowListsRequest>("ListAllowListsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListAutomatedDiscoveryAccountsRequest extends S.Class<ListAutomatedDiscoveryAccountsRequest>("ListAutomatedDiscoveryAccountsRequest")({accountIds: S.optional(__listOf__string), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListClassificationScopesRequest extends S.Class<ListClassificationScopesRequest>("ListClassificationScopesRequest")({name: S.optional(S.String), nextToken: S.optional(S.String)}) {}
export class ListCustomDataIdentifiersRequest extends S.Class<ListCustomDataIdentifiersRequest>("ListCustomDataIdentifiersRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class CriterionAdditionalProperties extends S.Class<CriterionAdditionalProperties>("CriterionAdditionalProperties")({eq: S.optional(__listOf__string), eqExactMatch: S.optional(__listOf__string), gt: S.optional(S.Number), gte: S.optional(S.Number), lt: S.optional(S.Number), lte: S.optional(S.Number), neq: S.optional(__listOf__string)}) {}
export const Criterion = S.Record({key: S.String, value: CriterionAdditionalProperties});
export class FindingCriteria extends S.Class<FindingCriteria>("FindingCriteria")({criterion: S.optional(Criterion)}) {}
export class SortCriteria extends S.Class<SortCriteria>("SortCriteria")({attributeName: S.optional(S.String), orderBy: S.optional(S.String)}) {}
export class ListFindingsRequest extends S.Class<ListFindingsRequest>("ListFindingsRequest")({findingCriteria: S.optional(FindingCriteria), maxResults: S.optional(S.Number), nextToken: S.optional(S.String), sortCriteria: S.optional(SortCriteria)}) {}
export class ListFindingsFiltersRequest extends S.Class<ListFindingsFiltersRequest>("ListFindingsFiltersRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListInvitationsRequest extends S.Class<ListInvitationsRequest>("ListInvitationsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListManagedDataIdentifiersRequest extends S.Class<ListManagedDataIdentifiersRequest>("ListManagedDataIdentifiersRequest")({nextToken: S.optional(S.String)}) {}
export class ListMembersRequest extends S.Class<ListMembersRequest>("ListMembersRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), onlyAssociated: S.optional(S.String)}) {}
export class ListOrganizationAdminAccountsRequest extends S.Class<ListOrganizationAdminAccountsRequest>("ListOrganizationAdminAccountsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListResourceProfileArtifactsRequest extends S.Class<ListResourceProfileArtifactsRequest>("ListResourceProfileArtifactsRequest")({nextToken: S.optional(S.String), resourceArn: S.String}) {}
export class ListResourceProfileDetectionsRequest extends S.Class<ListResourceProfileDetectionsRequest>("ListResourceProfileDetectionsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), resourceArn: S.String}) {}
export class ListSensitivityInspectionTemplatesRequest extends S.Class<ListSensitivityInspectionTemplatesRequest>("ListSensitivityInspectionTemplatesRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class S3Destination extends S.Class<S3Destination>("S3Destination")({bucketName: S.String, keyPrefix: S.optional(S.String), kmsKeyArn: S.String}) {}
export class ClassificationExportConfiguration extends S.Class<ClassificationExportConfiguration>("ClassificationExportConfiguration")({s3Destination: S.optional(S3Destination)}) {}
export class PutClassificationExportConfigurationRequest extends S.Class<PutClassificationExportConfigurationRequest>("PutClassificationExportConfigurationRequest")({configuration: ClassificationExportConfiguration}) {}
export class SecurityHubConfiguration extends S.Class<SecurityHubConfiguration>("SecurityHubConfiguration")({publishClassificationFindings: S.Boolean, publishPolicyFindings: S.Boolean}) {}
export class PutFindingsPublicationConfigurationRequest extends S.Class<PutFindingsPublicationConfigurationRequest>("PutFindingsPublicationConfigurationRequest")({clientToken: S.optional(S.String), securityHubConfiguration: S.optional(SecurityHubConfiguration)}) {}
export class PutFindingsPublicationConfigurationResponse extends S.Class<PutFindingsPublicationConfigurationResponse>("PutFindingsPublicationConfigurationResponse")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class TestCustomDataIdentifierRequest extends S.Class<TestCustomDataIdentifierRequest>("TestCustomDataIdentifierRequest")({ignoreWords: S.optional(__listOf__string), keywords: S.optional(__listOf__string), maximumMatchDistance: S.optional(S.Number), regex: S.String, sampleText: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: __listOf__string}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class S3WordsList extends S.Class<S3WordsList>("S3WordsList")({bucketName: S.String, objectKey: S.String}) {}
export class AllowListCriteria extends S.Class<AllowListCriteria>("AllowListCriteria")({regex: S.optional(S.String), s3WordsList: S.optional(S3WordsList)}) {}
export class UpdateAllowListRequest extends S.Class<UpdateAllowListRequest>("UpdateAllowListRequest")({criteria: AllowListCriteria, description: S.optional(S.String), id: S.String, name: S.String}) {}
export class UpdateAutomatedDiscoveryConfigurationRequest extends S.Class<UpdateAutomatedDiscoveryConfigurationRequest>("UpdateAutomatedDiscoveryConfigurationRequest")({autoEnableOrganizationMembers: S.optional(S.String), status: S.String}) {}
export class UpdateAutomatedDiscoveryConfigurationResponse extends S.Class<UpdateAutomatedDiscoveryConfigurationResponse>("UpdateAutomatedDiscoveryConfigurationResponse")({}) {}
export class UpdateClassificationJobRequest extends S.Class<UpdateClassificationJobRequest>("UpdateClassificationJobRequest")({jobId: S.String, jobStatus: S.String}) {}
export class UpdateClassificationJobResponse extends S.Class<UpdateClassificationJobResponse>("UpdateClassificationJobResponse")({}) {}
export class UpdateFindingsFilterRequest extends S.Class<UpdateFindingsFilterRequest>("UpdateFindingsFilterRequest")({action: S.optional(S.String), clientToken: S.optional(S.String), description: S.optional(S.String), findingCriteria: S.optional(FindingCriteria), id: S.String, name: S.optional(S.String), position: S.optional(S.Number)}) {}
export class UpdateMacieSessionRequest extends S.Class<UpdateMacieSessionRequest>("UpdateMacieSessionRequest")({findingPublishingFrequency: S.optional(S.String), status: S.optional(S.String)}) {}
export class UpdateMacieSessionResponse extends S.Class<UpdateMacieSessionResponse>("UpdateMacieSessionResponse")({}) {}
export class UpdateMemberSessionRequest extends S.Class<UpdateMemberSessionRequest>("UpdateMemberSessionRequest")({id: S.String, status: S.String}) {}
export class UpdateMemberSessionResponse extends S.Class<UpdateMemberSessionResponse>("UpdateMemberSessionResponse")({}) {}
export class UpdateOrganizationConfigurationRequest extends S.Class<UpdateOrganizationConfigurationRequest>("UpdateOrganizationConfigurationRequest")({autoEnable: S.Boolean}) {}
export class UpdateOrganizationConfigurationResponse extends S.Class<UpdateOrganizationConfigurationResponse>("UpdateOrganizationConfigurationResponse")({}) {}
export class UpdateResourceProfileRequest extends S.Class<UpdateResourceProfileRequest>("UpdateResourceProfileRequest")({resourceArn: S.String, sensitivityScoreOverride: S.optional(S.Number)}) {}
export class UpdateResourceProfileResponse extends S.Class<UpdateResourceProfileResponse>("UpdateResourceProfileResponse")({}) {}
export class DailySchedule extends S.Class<DailySchedule>("DailySchedule")({}) {}
export class AutomatedDiscoveryAccountUpdate extends S.Class<AutomatedDiscoveryAccountUpdate>("AutomatedDiscoveryAccountUpdate")({accountId: S.optional(S.String), status: S.optional(S.String)}) {}
export const __listOfAutomatedDiscoveryAccountUpdate = S.Array(AutomatedDiscoveryAccountUpdate);
export class SeverityLevel extends S.Class<SeverityLevel>("SeverityLevel")({occurrencesThreshold: S.Number, severity: S.String}) {}
export const SeverityLevelList = S.Array(SeverityLevel);
export class AccountDetail extends S.Class<AccountDetail>("AccountDetail")({accountId: S.String, email: S.String}) {}
export class BucketSortCriteria extends S.Class<BucketSortCriteria>("BucketSortCriteria")({attributeName: S.optional(S.String), orderBy: S.optional(S.String)}) {}
export class FindingStatisticsSortCriteria extends S.Class<FindingStatisticsSortCriteria>("FindingStatisticsSortCriteria")({attributeName: S.optional(S.String), orderBy: S.optional(S.String)}) {}
export class RevealConfiguration extends S.Class<RevealConfiguration>("RevealConfiguration")({kmsKeyId: S.optional(S.String), status: S.String}) {}
export class RetrievalConfiguration extends S.Class<RetrievalConfiguration>("RetrievalConfiguration")({externalId: S.optional(S.String), retrievalMode: S.String, roleName: S.optional(S.String)}) {}
export const __listOfUnavailabilityReasonCode = S.Array(S.String);
export class UsageStatisticsFilter extends S.Class<UsageStatisticsFilter>("UsageStatisticsFilter")({comparator: S.optional(S.String), key: S.optional(S.String), values: S.optional(__listOf__string)}) {}
export const __listOfUsageStatisticsFilter = S.Array(UsageStatisticsFilter);
export class UsageStatisticsSortBy extends S.Class<UsageStatisticsSortBy>("UsageStatisticsSortBy")({key: S.optional(S.String), orderBy: S.optional(S.String)}) {}
export class ListJobsSortCriteria extends S.Class<ListJobsSortCriteria>("ListJobsSortCriteria")({attributeName: S.optional(S.String), orderBy: S.optional(S.String)}) {}
export const __listOfInvitation = S.Array(Invitation);
export class SearchResourcesSortCriteria extends S.Class<SearchResourcesSortCriteria>("SearchResourcesSortCriteria")({attributeName: S.optional(S.String), orderBy: S.optional(S.String)}) {}
export class SuppressDataIdentifier extends S.Class<SuppressDataIdentifier>("SuppressDataIdentifier")({id: S.optional(S.String), type: S.optional(S.String)}) {}
export const __listOfSuppressDataIdentifier = S.Array(SuppressDataIdentifier);
export class UpdateRetrievalConfiguration extends S.Class<UpdateRetrievalConfiguration>("UpdateRetrievalConfiguration")({retrievalMode: S.String, roleName: S.optional(S.String)}) {}
export class SensitivityInspectionTemplateExcludes extends S.Class<SensitivityInspectionTemplateExcludes>("SensitivityInspectionTemplateExcludes")({managedDataIdentifierIds: S.optional(__listOf__string)}) {}
export class SensitivityInspectionTemplateIncludes extends S.Class<SensitivityInspectionTemplateIncludes>("SensitivityInspectionTemplateIncludes")({allowListIds: S.optional(__listOf__string), customDataIdentifierIds: S.optional(__listOf__string), managedDataIdentifierIds: S.optional(__listOf__string)}) {}
export const __listOfS3BucketName = S.Array(S.String);
export class BatchUpdateAutomatedDiscoveryAccountsRequest extends S.Class<BatchUpdateAutomatedDiscoveryAccountsRequest>("BatchUpdateAutomatedDiscoveryAccountsRequest")({accounts: S.optional(__listOfAutomatedDiscoveryAccountUpdate)}) {}
export class CreateCustomDataIdentifierRequest extends S.Class<CreateCustomDataIdentifierRequest>("CreateCustomDataIdentifierRequest")({clientToken: S.optional(S.String), description: S.optional(S.String), ignoreWords: S.optional(__listOf__string), keywords: S.optional(__listOf__string), maximumMatchDistance: S.optional(S.Number), name: S.String, regex: S.String, severityLevels: S.optional(SeverityLevelList), tags: S.optional(TagMap)}) {}
export class CreateMemberRequest extends S.Class<CreateMemberRequest>("CreateMemberRequest")({account: AccountDetail, tags: S.optional(TagMap)}) {}
export class UnprocessedAccount extends S.Class<UnprocessedAccount>("UnprocessedAccount")({accountId: S.optional(S.String), errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const __listOfUnprocessedAccount = S.Array(UnprocessedAccount);
export class DeclineInvitationsResponse extends S.Class<DeclineInvitationsResponse>("DeclineInvitationsResponse")({unprocessedAccounts: S.optional(__listOfUnprocessedAccount)}) {}
export class DeleteInvitationsResponse extends S.Class<DeleteInvitationsResponse>("DeleteInvitationsResponse")({unprocessedAccounts: S.optional(__listOfUnprocessedAccount)}) {}
export class GetAdministratorAccountResponse extends S.Class<GetAdministratorAccountResponse>("GetAdministratorAccountResponse")({administrator: S.optional(Invitation)}) {}
export class GetCustomDataIdentifierResponse extends S.Class<GetCustomDataIdentifierResponse>("GetCustomDataIdentifierResponse")({arn: S.optional(S.String), createdAt: S.optional(S.Date), deleted: S.optional(S.Boolean), description: S.optional(S.String), id: S.optional(S.String), ignoreWords: S.optional(__listOf__string), keywords: S.optional(__listOf__string), maximumMatchDistance: S.optional(S.Number), name: S.optional(S.String), regex: S.optional(S.String), severityLevels: S.optional(SeverityLevelList), tags: S.optional(TagMap)}) {}
export class GetFindingsRequest extends S.Class<GetFindingsRequest>("GetFindingsRequest")({findingIds: __listOf__string, sortCriteria: S.optional(SortCriteria)}) {}
export class GetFindingsFilterResponse extends S.Class<GetFindingsFilterResponse>("GetFindingsFilterResponse")({action: S.optional(S.String), arn: S.optional(S.String), description: S.optional(S.String), findingCriteria: S.optional(FindingCriteria), id: S.optional(S.String), name: S.optional(S.String), position: S.optional(S.Number), tags: S.optional(TagMap)}) {}
export class GetFindingsPublicationConfigurationResponse extends S.Class<GetFindingsPublicationConfigurationResponse>("GetFindingsPublicationConfigurationResponse")({securityHubConfiguration: S.optional(SecurityHubConfiguration)}) {}
export class GetFindingStatisticsRequest extends S.Class<GetFindingStatisticsRequest>("GetFindingStatisticsRequest")({findingCriteria: S.optional(FindingCriteria), groupBy: S.String, size: S.optional(S.Number), sortCriteria: S.optional(FindingStatisticsSortCriteria)}) {}
export class GetMemberResponse extends S.Class<GetMemberResponse>("GetMemberResponse")({accountId: S.optional(S.String), administratorAccountId: S.optional(S.String), arn: S.optional(S.String), email: S.optional(S.String), invitedAt: S.optional(S.Date), masterAccountId: S.optional(S.String), relationshipStatus: S.optional(S.String), tags: S.optional(TagMap), updatedAt: S.optional(S.Date)}) {}
export class GetRevealConfigurationResponse extends S.Class<GetRevealConfigurationResponse>("GetRevealConfigurationResponse")({configuration: S.optional(RevealConfiguration), retrievalConfiguration: S.optional(RetrievalConfiguration)}) {}
export class GetSensitiveDataOccurrencesAvailabilityResponse extends S.Class<GetSensitiveDataOccurrencesAvailabilityResponse>("GetSensitiveDataOccurrencesAvailabilityResponse")({code: S.optional(S.String), reasons: S.optional(__listOfUnavailabilityReasonCode)}) {}
export class GetSensitivityInspectionTemplateResponse extends S.Class<GetSensitivityInspectionTemplateResponse>("GetSensitivityInspectionTemplateResponse")({description: S.optional(S.String), excludes: S.optional(SensitivityInspectionTemplateExcludes), includes: S.optional(SensitivityInspectionTemplateIncludes), name: S.optional(S.String), sensitivityInspectionTemplateId: S.optional(S.String)}) {}
export class GetUsageStatisticsRequest extends S.Class<GetUsageStatisticsRequest>("GetUsageStatisticsRequest")({filterBy: S.optional(__listOfUsageStatisticsFilter), maxResults: S.optional(S.Number), nextToken: S.optional(S.String), sortBy: S.optional(UsageStatisticsSortBy), timeRange: S.optional(S.String)}) {}
export class ListFindingsResponse extends S.Class<ListFindingsResponse>("ListFindingsResponse")({findingIds: S.optional(__listOf__string), nextToken: S.optional(S.String)}) {}
export class ListInvitationsResponse extends S.Class<ListInvitationsResponse>("ListInvitationsResponse")({invitations: S.optional(__listOfInvitation), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class PutClassificationExportConfigurationResponse extends S.Class<PutClassificationExportConfigurationResponse>("PutClassificationExportConfigurationResponse")({configuration: S.optional(ClassificationExportConfiguration)}) {}
export class TestCustomDataIdentifierResponse extends S.Class<TestCustomDataIdentifierResponse>("TestCustomDataIdentifierResponse")({matchCount: S.optional(S.Number)}) {}
export class UpdateAllowListResponse extends S.Class<UpdateAllowListResponse>("UpdateAllowListResponse")({arn: S.optional(S.String), id: S.optional(S.String)}) {}
export class UpdateFindingsFilterResponse extends S.Class<UpdateFindingsFilterResponse>("UpdateFindingsFilterResponse")({arn: S.optional(S.String), id: S.optional(S.String)}) {}
export class UpdateResourceProfileDetectionsRequest extends S.Class<UpdateResourceProfileDetectionsRequest>("UpdateResourceProfileDetectionsRequest")({resourceArn: S.String, suppressDataIdentifiers: S.optional(__listOfSuppressDataIdentifier)}) {}
export class UpdateResourceProfileDetectionsResponse extends S.Class<UpdateResourceProfileDetectionsResponse>("UpdateResourceProfileDetectionsResponse")({}) {}
export class UpdateRevealConfigurationRequest extends S.Class<UpdateRevealConfigurationRequest>("UpdateRevealConfigurationRequest")({configuration: RevealConfiguration, retrievalConfiguration: S.optional(UpdateRetrievalConfiguration)}) {}
export class UpdateSensitivityInspectionTemplateRequest extends S.Class<UpdateSensitivityInspectionTemplateRequest>("UpdateSensitivityInspectionTemplateRequest")({description: S.optional(S.String), excludes: S.optional(SensitivityInspectionTemplateExcludes), id: S.String, includes: S.optional(SensitivityInspectionTemplateIncludes)}) {}
export class UpdateSensitivityInspectionTemplateResponse extends S.Class<UpdateSensitivityInspectionTemplateResponse>("UpdateSensitivityInspectionTemplateResponse")({}) {}
export class S3BucketDefinitionForJob extends S.Class<S3BucketDefinitionForJob>("S3BucketDefinitionForJob")({accountId: S.String, buckets: __listOf__string}) {}
export const __listOfS3BucketDefinitionForJob = S.Array(S3BucketDefinitionForJob);
export class MonthlySchedule extends S.Class<MonthlySchedule>("MonthlySchedule")({dayOfMonth: S.optional(S.Number)}) {}
export class WeeklySchedule extends S.Class<WeeklySchedule>("WeeklySchedule")({dayOfWeek: S.optional(S.String)}) {}
export class BucketCriteriaAdditionalProperties extends S.Class<BucketCriteriaAdditionalProperties>("BucketCriteriaAdditionalProperties")({eq: S.optional(__listOf__string), gt: S.optional(S.Number), gte: S.optional(S.Number), lt: S.optional(S.Number), lte: S.optional(S.Number), neq: S.optional(__listOf__string), prefix: S.optional(S.String)}) {}
export class ListJobsFilterTerm extends S.Class<ListJobsFilterTerm>("ListJobsFilterTerm")({comparator: S.optional(S.String), key: S.optional(S.String), values: S.optional(__listOf__string)}) {}
export const __listOfListJobsFilterTerm = S.Array(ListJobsFilterTerm);
export class S3ClassificationScopeExclusionUpdate extends S.Class<S3ClassificationScopeExclusionUpdate>("S3ClassificationScopeExclusionUpdate")({bucketNames: __listOfS3BucketName, operation: S.String}) {}
export class BatchGetCustomDataIdentifierSummary extends S.Class<BatchGetCustomDataIdentifierSummary>("BatchGetCustomDataIdentifierSummary")({arn: S.optional(S.String), createdAt: S.optional(S.Date), deleted: S.optional(S.Boolean), description: S.optional(S.String), id: S.optional(S.String), name: S.optional(S.String)}) {}
export const __listOfBatchGetCustomDataIdentifierSummary = S.Array(BatchGetCustomDataIdentifierSummary);
export class JobScheduleFrequency extends S.Class<JobScheduleFrequency>("JobScheduleFrequency")({dailySchedule: S.optional(DailySchedule), monthlySchedule: S.optional(MonthlySchedule), weeklySchedule: S.optional(WeeklySchedule)}) {}
export const BucketCriteria = S.Record({key: S.String, value: BucketCriteriaAdditionalProperties});
export class LastRunErrorStatus extends S.Class<LastRunErrorStatus>("LastRunErrorStatus")({code: S.optional(S.String)}) {}
export class Statistics extends S.Class<Statistics>("Statistics")({approximateNumberOfObjectsToProcess: S.optional(S.Number), numberOfRuns: S.optional(S.Number)}) {}
export class UserPausedDetails extends S.Class<UserPausedDetails>("UserPausedDetails")({jobExpiresAt: S.optional(S.Date), jobImminentExpirationHealthEventArn: S.optional(S.String), jobPausedAt: S.optional(S.Date)}) {}
export class AllowListStatus extends S.Class<AllowListStatus>("AllowListStatus")({code: S.String, description: S.optional(S.String)}) {}
export class BucketCountByEffectivePermission extends S.Class<BucketCountByEffectivePermission>("BucketCountByEffectivePermission")({publiclyAccessible: S.optional(S.Number), publiclyReadable: S.optional(S.Number), publiclyWritable: S.optional(S.Number), unknown: S.optional(S.Number)}) {}
export class BucketCountByEncryptionType extends S.Class<BucketCountByEncryptionType>("BucketCountByEncryptionType")({kmsManaged: S.optional(S.Number), s3Managed: S.optional(S.Number), unencrypted: S.optional(S.Number), unknown: S.optional(S.Number)}) {}
export class BucketCountPolicyAllowsUnencryptedObjectUploads extends S.Class<BucketCountPolicyAllowsUnencryptedObjectUploads>("BucketCountPolicyAllowsUnencryptedObjectUploads")({allowsUnencryptedObjectUploads: S.optional(S.Number), deniesUnencryptedObjectUploads: S.optional(S.Number), unknown: S.optional(S.Number)}) {}
export class BucketCountBySharedAccessType extends S.Class<BucketCountBySharedAccessType>("BucketCountBySharedAccessType")({external: S.optional(S.Number), internal: S.optional(S.Number), notShared: S.optional(S.Number), unknown: S.optional(S.Number)}) {}
export class ObjectLevelStatistics extends S.Class<ObjectLevelStatistics>("ObjectLevelStatistics")({fileType: S.optional(S.Number), storageClass: S.optional(S.Number), total: S.optional(S.Number)}) {}
export class ResourceStatistics extends S.Class<ResourceStatistics>("ResourceStatistics")({totalBytesClassified: S.optional(S.Number), totalDetections: S.optional(S.Number), totalDetectionsSuppressed: S.optional(S.Number), totalItemsClassified: S.optional(S.Number), totalItemsSensitive: S.optional(S.Number), totalItemsSkipped: S.optional(S.Number), totalItemsSkippedInvalidEncryption: S.optional(S.Number), totalItemsSkippedInvalidKms: S.optional(S.Number), totalItemsSkippedPermissionDenied: S.optional(S.Number)}) {}
export class UsageTotal extends S.Class<UsageTotal>("UsageTotal")({currency: S.optional(S.String), estimatedCost: S.optional(S.String), type: S.optional(S.String)}) {}
export const __listOfUsageTotal = S.Array(UsageTotal);
export class AllowListSummary extends S.Class<AllowListSummary>("AllowListSummary")({arn: S.optional(S.String), createdAt: S.optional(S.Date), description: S.optional(S.String), id: S.optional(S.String), name: S.optional(S.String), updatedAt: S.optional(S.Date)}) {}
export const __listOfAllowListSummary = S.Array(AllowListSummary);
export class AutomatedDiscoveryAccount extends S.Class<AutomatedDiscoveryAccount>("AutomatedDiscoveryAccount")({accountId: S.optional(S.String), status: S.optional(S.String)}) {}
export const __listOfAutomatedDiscoveryAccount = S.Array(AutomatedDiscoveryAccount);
export class ListJobsFilterCriteria extends S.Class<ListJobsFilterCriteria>("ListJobsFilterCriteria")({excludes: S.optional(__listOfListJobsFilterTerm), includes: S.optional(__listOfListJobsFilterTerm)}) {}
export class ClassificationScopeSummary extends S.Class<ClassificationScopeSummary>("ClassificationScopeSummary")({id: S.optional(S.String), name: S.optional(S.String)}) {}
export const __listOfClassificationScopeSummary = S.Array(ClassificationScopeSummary);
export class CustomDataIdentifierSummary extends S.Class<CustomDataIdentifierSummary>("CustomDataIdentifierSummary")({arn: S.optional(S.String), createdAt: S.optional(S.Date), description: S.optional(S.String), id: S.optional(S.String), name: S.optional(S.String)}) {}
export const __listOfCustomDataIdentifierSummary = S.Array(CustomDataIdentifierSummary);
export class FindingsFilterListItem extends S.Class<FindingsFilterListItem>("FindingsFilterListItem")({action: S.optional(S.String), arn: S.optional(S.String), id: S.optional(S.String), name: S.optional(S.String), tags: S.optional(TagMap)}) {}
export const __listOfFindingsFilterListItem = S.Array(FindingsFilterListItem);
export class ManagedDataIdentifierSummary extends S.Class<ManagedDataIdentifierSummary>("ManagedDataIdentifierSummary")({category: S.optional(S.String), id: S.optional(S.String)}) {}
export const __listOfManagedDataIdentifierSummary = S.Array(ManagedDataIdentifierSummary);
export class Member extends S.Class<Member>("Member")({accountId: S.optional(S.String), administratorAccountId: S.optional(S.String), arn: S.optional(S.String), email: S.optional(S.String), invitedAt: S.optional(S.Date), masterAccountId: S.optional(S.String), relationshipStatus: S.optional(S.String), tags: S.optional(TagMap), updatedAt: S.optional(S.Date)}) {}
export const __listOfMember = S.Array(Member);
export class AdminAccount extends S.Class<AdminAccount>("AdminAccount")({accountId: S.optional(S.String), status: S.optional(S.String)}) {}
export const __listOfAdminAccount = S.Array(AdminAccount);
export class ResourceProfileArtifact extends S.Class<ResourceProfileArtifact>("ResourceProfileArtifact")({arn: S.String, classificationResultStatus: S.String, sensitive: S.optional(S.Boolean)}) {}
export const __listOfResourceProfileArtifact = S.Array(ResourceProfileArtifact);
export class Detection extends S.Class<Detection>("Detection")({arn: S.optional(S.String), count: S.optional(S.Number), id: S.optional(S.String), name: S.optional(S.String), suppressed: S.optional(S.Boolean), type: S.optional(S.String)}) {}
export const __listOfDetection = S.Array(Detection);
export class SensitivityInspectionTemplatesEntry extends S.Class<SensitivityInspectionTemplatesEntry>("SensitivityInspectionTemplatesEntry")({id: S.optional(S.String), name: S.optional(S.String)}) {}
export const __listOfSensitivityInspectionTemplatesEntry = S.Array(SensitivityInspectionTemplatesEntry);
export class S3ClassificationScopeUpdate extends S.Class<S3ClassificationScopeUpdate>("S3ClassificationScopeUpdate")({excludes: S3ClassificationScopeExclusionUpdate}) {}
export class BatchGetCustomDataIdentifiersResponse extends S.Class<BatchGetCustomDataIdentifiersResponse>("BatchGetCustomDataIdentifiersResponse")({customDataIdentifiers: S.optional(__listOfBatchGetCustomDataIdentifierSummary), notFoundIdentifierIds: S.optional(__listOf__string)}) {}
export class CreateAllowListRequest extends S.Class<CreateAllowListRequest>("CreateAllowListRequest")({clientToken: S.String, criteria: AllowListCriteria, description: S.optional(S.String), name: S.String, tags: S.optional(TagMap)}) {}
export class CreateCustomDataIdentifierResponse extends S.Class<CreateCustomDataIdentifierResponse>("CreateCustomDataIdentifierResponse")({customDataIdentifierId: S.optional(S.String)}) {}
export class CreateInvitationsResponse extends S.Class<CreateInvitationsResponse>("CreateInvitationsResponse")({unprocessedAccounts: S.optional(__listOfUnprocessedAccount)}) {}
export class CreateMemberResponse extends S.Class<CreateMemberResponse>("CreateMemberResponse")({arn: S.optional(S.String)}) {}
export class DescribeBucketsRequest extends S.Class<DescribeBucketsRequest>("DescribeBucketsRequest")({criteria: S.optional(BucketCriteria), maxResults: S.optional(S.Number), nextToken: S.optional(S.String), sortCriteria: S.optional(BucketSortCriteria)}) {}
export class SimpleCriterionForJob extends S.Class<SimpleCriterionForJob>("SimpleCriterionForJob")({comparator: S.optional(S.String), key: S.optional(S.String), values: S.optional(__listOf__string)}) {}
export class TagCriterionPairForJob extends S.Class<TagCriterionPairForJob>("TagCriterionPairForJob")({key: S.optional(S.String), value: S.optional(S.String)}) {}
export const __listOfTagCriterionPairForJob = S.Array(TagCriterionPairForJob);
export class TagCriterionForJob extends S.Class<TagCriterionForJob>("TagCriterionForJob")({comparator: S.optional(S.String), tagValues: S.optional(__listOfTagCriterionPairForJob)}) {}
export class CriteriaForJob extends S.Class<CriteriaForJob>("CriteriaForJob")({simpleCriterion: S.optional(SimpleCriterionForJob), tagCriterion: S.optional(TagCriterionForJob)}) {}
export const __listOfCriteriaForJob = S.Array(CriteriaForJob);
export class CriteriaBlockForJob extends S.Class<CriteriaBlockForJob>("CriteriaBlockForJob")({and: S.optional(__listOfCriteriaForJob)}) {}
export class S3BucketCriteriaForJob extends S.Class<S3BucketCriteriaForJob>("S3BucketCriteriaForJob")({excludes: S.optional(CriteriaBlockForJob), includes: S.optional(CriteriaBlockForJob)}) {}
export class SimpleScopeTerm extends S.Class<SimpleScopeTerm>("SimpleScopeTerm")({comparator: S.optional(S.String), key: S.optional(S.String), values: S.optional(__listOf__string)}) {}
export class TagValuePair extends S.Class<TagValuePair>("TagValuePair")({key: S.optional(S.String), value: S.optional(S.String)}) {}
export const __listOfTagValuePair = S.Array(TagValuePair);
export class TagScopeTerm extends S.Class<TagScopeTerm>("TagScopeTerm")({comparator: S.optional(S.String), key: S.optional(S.String), tagValues: S.optional(__listOfTagValuePair), target: S.optional(S.String)}) {}
export class JobScopeTerm extends S.Class<JobScopeTerm>("JobScopeTerm")({simpleScopeTerm: S.optional(SimpleScopeTerm), tagScopeTerm: S.optional(TagScopeTerm)}) {}
export const __listOfJobScopeTerm = S.Array(JobScopeTerm);
export class JobScopingBlock extends S.Class<JobScopingBlock>("JobScopingBlock")({and: S.optional(__listOfJobScopeTerm)}) {}
export class Scoping extends S.Class<Scoping>("Scoping")({excludes: S.optional(JobScopingBlock), includes: S.optional(JobScopingBlock)}) {}
export class S3JobDefinition extends S.Class<S3JobDefinition>("S3JobDefinition")({bucketCriteria: S.optional(S3BucketCriteriaForJob), bucketDefinitions: S.optional(__listOfS3BucketDefinitionForJob), scoping: S.optional(Scoping)}) {}
export class DescribeClassificationJobResponse extends S.Class<DescribeClassificationJobResponse>("DescribeClassificationJobResponse")({allowListIds: S.optional(__listOf__string), clientToken: S.optional(S.String), createdAt: S.optional(S.Date), customDataIdentifierIds: S.optional(__listOf__string), description: S.optional(S.String), initialRun: S.optional(S.Boolean), jobArn: S.optional(S.String), jobId: S.optional(S.String), jobStatus: S.optional(S.String), jobType: S.optional(S.String), lastRunErrorStatus: S.optional(LastRunErrorStatus), lastRunTime: S.optional(S.Date), managedDataIdentifierIds: S.optional(__listOf__string), managedDataIdentifierSelector: S.optional(S.String), name: S.optional(S.String), s3JobDefinition: S.optional(S3JobDefinition), samplingPercentage: S.optional(S.Number), scheduleFrequency: S.optional(JobScheduleFrequency), statistics: S.optional(Statistics), tags: S.optional(TagMap), userPausedDetails: S.optional(UserPausedDetails)}) {}
export class GetAllowListResponse extends S.Class<GetAllowListResponse>("GetAllowListResponse")({arn: S.optional(S.String), createdAt: S.optional(S.Date), criteria: S.optional(AllowListCriteria), description: S.optional(S.String), id: S.optional(S.String), name: S.optional(S.String), status: S.optional(AllowListStatus), tags: S.optional(TagMap), updatedAt: S.optional(S.Date)}) {}
export class GetClassificationExportConfigurationResponse extends S.Class<GetClassificationExportConfigurationResponse>("GetClassificationExportConfigurationResponse")({configuration: S.optional(ClassificationExportConfiguration)}) {}
export class GetResourceProfileResponse extends S.Class<GetResourceProfileResponse>("GetResourceProfileResponse")({profileUpdatedAt: S.optional(S.Date), sensitivityScore: S.optional(S.Number), sensitivityScoreOverridden: S.optional(S.Boolean), statistics: S.optional(ResourceStatistics)}) {}
export class GetUsageTotalsResponse extends S.Class<GetUsageTotalsResponse>("GetUsageTotalsResponse")({timeRange: S.optional(S.String), usageTotals: S.optional(__listOfUsageTotal)}) {}
export class ListAllowListsResponse extends S.Class<ListAllowListsResponse>("ListAllowListsResponse")({allowLists: S.optional(__listOfAllowListSummary), nextToken: S.optional(S.String)}) {}
export class ListAutomatedDiscoveryAccountsResponse extends S.Class<ListAutomatedDiscoveryAccountsResponse>("ListAutomatedDiscoveryAccountsResponse")({items: S.optional(__listOfAutomatedDiscoveryAccount), nextToken: S.optional(S.String)}) {}
export class ListClassificationJobsRequest extends S.Class<ListClassificationJobsRequest>("ListClassificationJobsRequest")({filterCriteria: S.optional(ListJobsFilterCriteria), maxResults: S.optional(S.Number), nextToken: S.optional(S.String), sortCriteria: S.optional(ListJobsSortCriteria)}) {}
export class ListClassificationScopesResponse extends S.Class<ListClassificationScopesResponse>("ListClassificationScopesResponse")({classificationScopes: S.optional(__listOfClassificationScopeSummary), nextToken: S.optional(S.String)}) {}
export class ListCustomDataIdentifiersResponse extends S.Class<ListCustomDataIdentifiersResponse>("ListCustomDataIdentifiersResponse")({items: S.optional(__listOfCustomDataIdentifierSummary), nextToken: S.optional(S.String)}) {}
export class ListFindingsFiltersResponse extends S.Class<ListFindingsFiltersResponse>("ListFindingsFiltersResponse")({findingsFilterListItems: S.optional(__listOfFindingsFilterListItem), nextToken: S.optional(S.String)}) {}
export class ListManagedDataIdentifiersResponse extends S.Class<ListManagedDataIdentifiersResponse>("ListManagedDataIdentifiersResponse")({items: S.optional(__listOfManagedDataIdentifierSummary), nextToken: S.optional(S.String)}) {}
export class ListMembersResponse extends S.Class<ListMembersResponse>("ListMembersResponse")({members: S.optional(__listOfMember), nextToken: S.optional(S.String)}) {}
export class ListOrganizationAdminAccountsResponse extends S.Class<ListOrganizationAdminAccountsResponse>("ListOrganizationAdminAccountsResponse")({adminAccounts: S.optional(__listOfAdminAccount), nextToken: S.optional(S.String)}) {}
export class ListResourceProfileArtifactsResponse extends S.Class<ListResourceProfileArtifactsResponse>("ListResourceProfileArtifactsResponse")({artifacts: S.optional(__listOfResourceProfileArtifact), nextToken: S.optional(S.String)}) {}
export class ListResourceProfileDetectionsResponse extends S.Class<ListResourceProfileDetectionsResponse>("ListResourceProfileDetectionsResponse")({detections: S.optional(__listOfDetection), nextToken: S.optional(S.String)}) {}
export class ListSensitivityInspectionTemplatesResponse extends S.Class<ListSensitivityInspectionTemplatesResponse>("ListSensitivityInspectionTemplatesResponse")({nextToken: S.optional(S.String), sensitivityInspectionTemplates: S.optional(__listOfSensitivityInspectionTemplatesEntry)}) {}
export class UpdateClassificationScopeRequest extends S.Class<UpdateClassificationScopeRequest>("UpdateClassificationScopeRequest")({id: S.String, s3: S.optional(S3ClassificationScopeUpdate)}) {}
export class UpdateClassificationScopeResponse extends S.Class<UpdateClassificationScopeResponse>("UpdateClassificationScopeResponse")({}) {}
export class UpdateRevealConfigurationResponse extends S.Class<UpdateRevealConfigurationResponse>("UpdateRevealConfigurationResponse")({configuration: S.optional(RevealConfiguration), retrievalConfiguration: S.optional(RetrievalConfiguration)}) {}
export class SensitivityAggregations extends S.Class<SensitivityAggregations>("SensitivityAggregations")({classifiableSizeInBytes: S.optional(S.Number), publiclyAccessibleCount: S.optional(S.Number), totalCount: S.optional(S.Number), totalSizeInBytes: S.optional(S.Number)}) {}
export class S3ClassificationScopeExclusion extends S.Class<S3ClassificationScopeExclusion>("S3ClassificationScopeExclusion")({bucketNames: __listOfS3BucketName}) {}
export class DetectedDataDetails extends S.Class<DetectedDataDetails>("DetectedDataDetails")({value: S.String}) {}
export const __listOfDetectedDataDetails = S.Array(DetectedDataDetails);
export class SearchResourcesSimpleCriterion extends S.Class<SearchResourcesSimpleCriterion>("SearchResourcesSimpleCriterion")({comparator: S.optional(S.String), key: S.optional(S.String), values: S.optional(__listOf__string)}) {}
export class AutomatedDiscoveryAccountUpdateError extends S.Class<AutomatedDiscoveryAccountUpdateError>("AutomatedDiscoveryAccountUpdateError")({accountId: S.optional(S.String), errorCode: S.optional(S.String)}) {}
export const __listOfAutomatedDiscoveryAccountUpdateError = S.Array(AutomatedDiscoveryAccountUpdateError);
export class BucketStatisticsBySensitivity extends S.Class<BucketStatisticsBySensitivity>("BucketStatisticsBySensitivity")({classificationError: S.optional(SensitivityAggregations), notClassified: S.optional(SensitivityAggregations), notSensitive: S.optional(SensitivityAggregations), sensitive: S.optional(SensitivityAggregations)}) {}
export class S3ClassificationScope extends S.Class<S3ClassificationScope>("S3ClassificationScope")({excludes: S3ClassificationScopeExclusion}) {}
export class GroupCount extends S.Class<GroupCount>("GroupCount")({count: S.optional(S.Number), groupKey: S.optional(S.String)}) {}
export const __listOfGroupCount = S.Array(GroupCount);
export const SensitiveDataOccurrences = S.Record({key: S.String, value: __listOfDetectedDataDetails});
export class BatchUpdateAutomatedDiscoveryAccountsResponse extends S.Class<BatchUpdateAutomatedDiscoveryAccountsResponse>("BatchUpdateAutomatedDiscoveryAccountsResponse")({errors: S.optional(__listOfAutomatedDiscoveryAccountUpdateError)}) {}
export class CreateAllowListResponse extends S.Class<CreateAllowListResponse>("CreateAllowListResponse")({arn: S.optional(S.String), id: S.optional(S.String)}) {}
export class CreateFindingsFilterRequest extends S.Class<CreateFindingsFilterRequest>("CreateFindingsFilterRequest")({action: S.String, clientToken: S.optional(S.String), description: S.optional(S.String), findingCriteria: FindingCriteria, name: S.String, position: S.optional(S.Number), tags: S.optional(TagMap)}) {}
export class GetBucketStatisticsResponse extends S.Class<GetBucketStatisticsResponse>("GetBucketStatisticsResponse")({bucketCount: S.optional(S.Number), bucketCountByEffectivePermission: S.optional(BucketCountByEffectivePermission), bucketCountByEncryptionType: S.optional(BucketCountByEncryptionType), bucketCountByObjectEncryptionRequirement: S.optional(BucketCountPolicyAllowsUnencryptedObjectUploads), bucketCountBySharedAccessType: S.optional(BucketCountBySharedAccessType), bucketStatisticsBySensitivity: S.optional(BucketStatisticsBySensitivity), classifiableObjectCount: S.optional(S.Number), classifiableSizeInBytes: S.optional(S.Number), lastUpdated: S.optional(S.Date), objectCount: S.optional(S.Number), sizeInBytes: S.optional(S.Number), sizeInBytesCompressed: S.optional(S.Number), unclassifiableObjectCount: S.optional(ObjectLevelStatistics), unclassifiableObjectSizeInBytes: S.optional(ObjectLevelStatistics)}) {}
export class GetClassificationScopeResponse extends S.Class<GetClassificationScopeResponse>("GetClassificationScopeResponse")({id: S.optional(S.String), name: S.optional(S.String), s3: S.optional(S3ClassificationScope)}) {}
export class GetFindingStatisticsResponse extends S.Class<GetFindingStatisticsResponse>("GetFindingStatisticsResponse")({countsByGroup: S.optional(__listOfGroupCount)}) {}
export class GetSensitiveDataOccurrencesResponse extends S.Class<GetSensitiveDataOccurrencesResponse>("GetSensitiveDataOccurrencesResponse")({error: S.optional(S.String), sensitiveDataOccurrences: S.optional(SensitiveDataOccurrences), status: S.optional(S.String)}) {}
export class SearchResourcesTagCriterionPair extends S.Class<SearchResourcesTagCriterionPair>("SearchResourcesTagCriterionPair")({key: S.optional(S.String), value: S.optional(S.String)}) {}
export const __listOfSearchResourcesTagCriterionPair = S.Array(SearchResourcesTagCriterionPair);
export class Severity extends S.Class<Severity>("Severity")({description: S.optional(S.String), score: S.optional(S.Number)}) {}
export class KeyValuePair extends S.Class<KeyValuePair>("KeyValuePair")({key: S.optional(S.String), value: S.optional(S.String)}) {}
export const KeyValuePairList = S.Array(KeyValuePair);
export class SearchResourcesTagCriterion extends S.Class<SearchResourcesTagCriterion>("SearchResourcesTagCriterion")({comparator: S.optional(S.String), tagValues: S.optional(__listOfSearchResourcesTagCriterionPair)}) {}
export class JobSummary extends S.Class<JobSummary>("JobSummary")({bucketCriteria: S.optional(S3BucketCriteriaForJob), bucketDefinitions: S.optional(__listOfS3BucketDefinitionForJob), createdAt: S.optional(S.Date), jobId: S.optional(S.String), jobStatus: S.optional(S.String), jobType: S.optional(S.String), lastRunErrorStatus: S.optional(LastRunErrorStatus), name: S.optional(S.String), userPausedDetails: S.optional(UserPausedDetails)}) {}
export const __listOfJobSummary = S.Array(JobSummary);
export class ServerSideEncryption extends S.Class<ServerSideEncryption>("ServerSideEncryption")({encryptionType: S.optional(S.String), kmsMasterKeyId: S.optional(S.String)}) {}
export class S3Object extends S.Class<S3Object>("S3Object")({bucketArn: S.optional(S.String), eTag: S.optional(S.String), extension: S.optional(S.String), key: S.optional(S.String), lastModified: S.optional(S.Date), path: S.optional(S.String), publicAccess: S.optional(S.Boolean), serverSideEncryption: S.optional(ServerSideEncryption), size: S.optional(S.Number), storageClass: S.optional(S.String), tags: S.optional(KeyValuePairList), versionId: S.optional(S.String)}) {}
export class ServiceLimit extends S.Class<ServiceLimit>("ServiceLimit")({isServiceLimited: S.optional(S.Boolean), unit: S.optional(S.String), value: S.optional(S.Number)}) {}
export class SearchResourcesCriteria extends S.Class<SearchResourcesCriteria>("SearchResourcesCriteria")({simpleCriterion: S.optional(SearchResourcesSimpleCriterion), tagCriterion: S.optional(SearchResourcesTagCriterion)}) {}
export const __listOfSearchResourcesCriteria = S.Array(SearchResourcesCriteria);
export class CreateFindingsFilterResponse extends S.Class<CreateFindingsFilterResponse>("CreateFindingsFilterResponse")({arn: S.optional(S.String), id: S.optional(S.String)}) {}
export class ListClassificationJobsResponse extends S.Class<ListClassificationJobsResponse>("ListClassificationJobsResponse")({items: S.optional(__listOfJobSummary), nextToken: S.optional(S.String)}) {}
export class JobDetails extends S.Class<JobDetails>("JobDetails")({isDefinedInJob: S.optional(S.String), isMonitoredByJob: S.optional(S.String), lastJobId: S.optional(S.String), lastJobRunTime: S.optional(S.Date)}) {}
export class ObjectCountByEncryptionType extends S.Class<ObjectCountByEncryptionType>("ObjectCountByEncryptionType")({customerManaged: S.optional(S.Number), kmsManaged: S.optional(S.Number), s3Managed: S.optional(S.Number), unencrypted: S.optional(S.Number), unknown: S.optional(S.Number)}) {}
export class ReplicationDetails extends S.Class<ReplicationDetails>("ReplicationDetails")({replicated: S.optional(S.Boolean), replicatedExternally: S.optional(S.Boolean), replicationAccounts: S.optional(__listOf__string)}) {}
export class BucketServerSideEncryption extends S.Class<BucketServerSideEncryption>("BucketServerSideEncryption")({kmsMasterKeyId: S.optional(S.String), type: S.optional(S.String)}) {}
export const __listOfKeyValuePair = S.Array(KeyValuePair);
export class UsageByAccount extends S.Class<UsageByAccount>("UsageByAccount")({currency: S.optional(S.String), estimatedCost: S.optional(S.String), serviceLimit: S.optional(ServiceLimit), type: S.optional(S.String)}) {}
export const __listOfUsageByAccount = S.Array(UsageByAccount);
export class SearchResourcesCriteriaBlock extends S.Class<SearchResourcesCriteriaBlock>("SearchResourcesCriteriaBlock")({and: S.optional(__listOfSearchResourcesCriteria)}) {}
export class ClassificationResultStatus extends S.Class<ClassificationResultStatus>("ClassificationResultStatus")({code: S.optional(S.String), reason: S.optional(S.String)}) {}
export class ApiCallDetails extends S.Class<ApiCallDetails>("ApiCallDetails")({api: S.optional(S.String), apiServiceName: S.optional(S.String), firstSeen: S.optional(S.Date), lastSeen: S.optional(S.Date)}) {}
export class DomainDetails extends S.Class<DomainDetails>("DomainDetails")({domainName: S.optional(S.String)}) {}
export class S3BucketOwner extends S.Class<S3BucketOwner>("S3BucketOwner")({displayName: S.optional(S.String), id: S.optional(S.String)}) {}
export class UsageRecord extends S.Class<UsageRecord>("UsageRecord")({accountId: S.optional(S.String), automatedDiscoveryFreeTrialStartDate: S.optional(S.Date), freeTrialStartDate: S.optional(S.Date), usage: S.optional(__listOfUsageByAccount)}) {}
export const __listOfUsageRecord = S.Array(UsageRecord);
export class SearchResourcesBucketCriteria extends S.Class<SearchResourcesBucketCriteria>("SearchResourcesBucketCriteria")({excludes: S.optional(SearchResourcesCriteriaBlock), includes: S.optional(SearchResourcesCriteriaBlock)}) {}
export class FindingAction extends S.Class<FindingAction>("FindingAction")({actionType: S.optional(S.String), apiCallDetails: S.optional(ApiCallDetails)}) {}
export class BlockPublicAccess extends S.Class<BlockPublicAccess>("BlockPublicAccess")({blockPublicAcls: S.optional(S.Boolean), blockPublicPolicy: S.optional(S.Boolean), ignorePublicAcls: S.optional(S.Boolean), restrictPublicBuckets: S.optional(S.Boolean)}) {}
export class AccountLevelPermissions extends S.Class<AccountLevelPermissions>("AccountLevelPermissions")({blockPublicAccess: S.optional(BlockPublicAccess)}) {}
export class AccessControlList extends S.Class<AccessControlList>("AccessControlList")({allowsPublicReadAccess: S.optional(S.Boolean), allowsPublicWriteAccess: S.optional(S.Boolean)}) {}
export class BucketPolicy extends S.Class<BucketPolicy>("BucketPolicy")({allowsPublicReadAccess: S.optional(S.Boolean), allowsPublicWriteAccess: S.optional(S.Boolean)}) {}
export class BucketLevelPermissions extends S.Class<BucketLevelPermissions>("BucketLevelPermissions")({accessControlList: S.optional(AccessControlList), blockPublicAccess: S.optional(BlockPublicAccess), bucketPolicy: S.optional(BucketPolicy)}) {}
export class BucketPermissionConfiguration extends S.Class<BucketPermissionConfiguration>("BucketPermissionConfiguration")({accountLevelPermissions: S.optional(AccountLevelPermissions), bucketLevelPermissions: S.optional(BucketLevelPermissions)}) {}
export class BucketPublicAccess extends S.Class<BucketPublicAccess>("BucketPublicAccess")({effectivePermission: S.optional(S.String), permissionConfiguration: S.optional(BucketPermissionConfiguration)}) {}
export class S3Bucket extends S.Class<S3Bucket>("S3Bucket")({allowsUnencryptedObjectUploads: S.optional(S.String), arn: S.optional(S.String), createdAt: S.optional(S.Date), defaultServerSideEncryption: S.optional(ServerSideEncryption), name: S.optional(S.String), owner: S.optional(S3BucketOwner), publicAccess: S.optional(BucketPublicAccess), tags: S.optional(KeyValuePairList)}) {}
export class Cell extends S.Class<Cell>("Cell")({cellReference: S.optional(S.String), column: S.optional(S.Number), columnName: S.optional(S.String), row: S.optional(S.Number)}) {}
export const Cells = S.Array(Cell);
export class Range extends S.Class<Range>("Range")({end: S.optional(S.Number), start: S.optional(S.Number), startColumn: S.optional(S.Number)}) {}
export const Ranges = S.Array(Range);
export class Page extends S.Class<Page>("Page")({lineRange: S.optional(Range), offsetRange: S.optional(Range), pageNumber: S.optional(S.Number)}) {}
export const Pages = S.Array(Page);
export class Record extends S.Class<Record>("Record")({jsonPath: S.optional(S.String), recordIndex: S.optional(S.Number)}) {}
export const Records = S.Array(Record);
export class Occurrences extends S.Class<Occurrences>("Occurrences")({cells: S.optional(Cells), lineRanges: S.optional(Ranges), offsetRanges: S.optional(Ranges), pages: S.optional(Pages), records: S.optional(Records)}) {}
export class DefaultDetection extends S.Class<DefaultDetection>("DefaultDetection")({count: S.optional(S.Number), occurrences: S.optional(Occurrences), type: S.optional(S.String)}) {}
export const DefaultDetections = S.Array(DefaultDetection);
export class IpCity extends S.Class<IpCity>("IpCity")({name: S.optional(S.String)}) {}
export class IpCountry extends S.Class<IpCountry>("IpCountry")({code: S.optional(S.String), name: S.optional(S.String)}) {}
export class IpGeoLocation extends S.Class<IpGeoLocation>("IpGeoLocation")({lat: S.optional(S.Number), lon: S.optional(S.Number)}) {}
export class IpOwner extends S.Class<IpOwner>("IpOwner")({asn: S.optional(S.String), asnOrg: S.optional(S.String), isp: S.optional(S.String), org: S.optional(S.String)}) {}
export class AwsAccount extends S.Class<AwsAccount>("AwsAccount")({accountId: S.optional(S.String), principalId: S.optional(S.String)}) {}
export class AwsService extends S.Class<AwsService>("AwsService")({invokedBy: S.optional(S.String)}) {}
export class SessionContextAttributes extends S.Class<SessionContextAttributes>("SessionContextAttributes")({creationDate: S.optional(S.Date), mfaAuthenticated: S.optional(S.Boolean)}) {}
export class SessionIssuer extends S.Class<SessionIssuer>("SessionIssuer")({accountId: S.optional(S.String), arn: S.optional(S.String), principalId: S.optional(S.String), type: S.optional(S.String), userName: S.optional(S.String)}) {}
export class SessionContext extends S.Class<SessionContext>("SessionContext")({attributes: S.optional(SessionContextAttributes), sessionIssuer: S.optional(SessionIssuer)}) {}
export class FederatedUser extends S.Class<FederatedUser>("FederatedUser")({accessKeyId: S.optional(S.String), accountId: S.optional(S.String), arn: S.optional(S.String), principalId: S.optional(S.String), sessionContext: S.optional(SessionContext)}) {}
export class IamUser extends S.Class<IamUser>("IamUser")({accountId: S.optional(S.String), arn: S.optional(S.String), principalId: S.optional(S.String), userName: S.optional(S.String)}) {}
export class UserIdentityRoot extends S.Class<UserIdentityRoot>("UserIdentityRoot")({accountId: S.optional(S.String), arn: S.optional(S.String), principalId: S.optional(S.String)}) {}
export class GetUsageStatisticsResponse extends S.Class<GetUsageStatisticsResponse>("GetUsageStatisticsResponse")({nextToken: S.optional(S.String), records: S.optional(__listOfUsageRecord), timeRange: S.optional(S.String)}) {}
export class SearchResourcesRequest extends S.Class<SearchResourcesRequest>("SearchResourcesRequest")({bucketCriteria: S.optional(SearchResourcesBucketCriteria), maxResults: S.optional(S.Number), nextToken: S.optional(S.String), sortCriteria: S.optional(SearchResourcesSortCriteria)}) {}
export class ResourcesAffected extends S.Class<ResourcesAffected>("ResourcesAffected")({s3Bucket: S.optional(S3Bucket), s3Object: S.optional(S3Object)}) {}
export class SensitiveDataItem extends S.Class<SensitiveDataItem>("SensitiveDataItem")({category: S.optional(S.String), detections: S.optional(DefaultDetections), totalCount: S.optional(S.Number)}) {}
export const SensitiveData = S.Array(SensitiveDataItem);
export class IpAddressDetails extends S.Class<IpAddressDetails>("IpAddressDetails")({ipAddressV4: S.optional(S.String), ipCity: S.optional(IpCity), ipCountry: S.optional(IpCountry), ipGeoLocation: S.optional(IpGeoLocation), ipOwner: S.optional(IpOwner)}) {}
export class CreateClassificationJobRequest extends S.Class<CreateClassificationJobRequest>("CreateClassificationJobRequest")({allowListIds: S.optional(__listOf__string), clientToken: S.String, customDataIdentifierIds: S.optional(__listOf__string), description: S.optional(S.String), initialRun: S.optional(S.Boolean), jobType: S.String, managedDataIdentifierIds: S.optional(__listOf__string), managedDataIdentifierSelector: S.optional(S.String), name: S.String, s3JobDefinition: S3JobDefinition, samplingPercentage: S.optional(S.Number), scheduleFrequency: S.optional(JobScheduleFrequency), tags: S.optional(TagMap)}) {}
export class CreateClassificationJobResponse extends S.Class<CreateClassificationJobResponse>("CreateClassificationJobResponse")({jobArn: S.optional(S.String), jobId: S.optional(S.String)}) {}
export class CustomDetection extends S.Class<CustomDetection>("CustomDetection")({arn: S.optional(S.String), count: S.optional(S.Number), name: S.optional(S.String), occurrences: S.optional(Occurrences)}) {}
export const CustomDetections = S.Array(CustomDetection);
export class AssumedRole extends S.Class<AssumedRole>("AssumedRole")({accessKeyId: S.optional(S.String), accountId: S.optional(S.String), arn: S.optional(S.String), principalId: S.optional(S.String), sessionContext: S.optional(SessionContext)}) {}
export class MatchingBucket extends S.Class<MatchingBucket>("MatchingBucket")({accountId: S.optional(S.String), automatedDiscoveryMonitoringStatus: S.optional(S.String), bucketName: S.optional(S.String), classifiableObjectCount: S.optional(S.Number), classifiableSizeInBytes: S.optional(S.Number), errorCode: S.optional(S.String), errorMessage: S.optional(S.String), jobDetails: S.optional(JobDetails), lastAutomatedDiscoveryTime: S.optional(S.Date), objectCount: S.optional(S.Number), objectCountByEncryptionType: S.optional(ObjectCountByEncryptionType), sensitivityScore: S.optional(S.Number), sizeInBytes: S.optional(S.Number), sizeInBytesCompressed: S.optional(S.Number), unclassifiableObjectCount: S.optional(ObjectLevelStatistics), unclassifiableObjectSizeInBytes: S.optional(ObjectLevelStatistics)}) {}
export class CustomDataIdentifiers extends S.Class<CustomDataIdentifiers>("CustomDataIdentifiers")({detections: S.optional(CustomDetections), totalCount: S.optional(S.Number)}) {}
export class UserIdentity extends S.Class<UserIdentity>("UserIdentity")({assumedRole: S.optional(AssumedRole), awsAccount: S.optional(AwsAccount), awsService: S.optional(AwsService), federatedUser: S.optional(FederatedUser), iamUser: S.optional(IamUser), root: S.optional(UserIdentityRoot), type: S.optional(S.String)}) {}
export class BucketMetadata extends S.Class<BucketMetadata>("BucketMetadata")({accountId: S.optional(S.String), allowsUnencryptedObjectUploads: S.optional(S.String), automatedDiscoveryMonitoringStatus: S.optional(S.String), bucketArn: S.optional(S.String), bucketCreatedAt: S.optional(S.Date), bucketName: S.optional(S.String), classifiableObjectCount: S.optional(S.Number), classifiableSizeInBytes: S.optional(S.Number), errorCode: S.optional(S.String), errorMessage: S.optional(S.String), jobDetails: S.optional(JobDetails), lastAutomatedDiscoveryTime: S.optional(S.Date), lastUpdated: S.optional(S.Date), objectCount: S.optional(S.Number), objectCountByEncryptionType: S.optional(ObjectCountByEncryptionType), publicAccess: S.optional(BucketPublicAccess), region: S.optional(S.String), replicationDetails: S.optional(ReplicationDetails), sensitivityScore: S.optional(S.Number), serverSideEncryption: S.optional(BucketServerSideEncryption), sharedAccess: S.optional(S.String), sizeInBytes: S.optional(S.Number), sizeInBytesCompressed: S.optional(S.Number), tags: S.optional(__listOfKeyValuePair), unclassifiableObjectCount: S.optional(ObjectLevelStatistics), unclassifiableObjectSizeInBytes: S.optional(ObjectLevelStatistics), versioning: S.optional(S.Boolean)}) {}
export const __listOfBucketMetadata = S.Array(BucketMetadata);
export class MatchingResource extends S.Class<MatchingResource>("MatchingResource")({matchingBucket: S.optional(MatchingBucket)}) {}
export const __listOfMatchingResource = S.Array(MatchingResource);
export class ClassificationResult extends S.Class<ClassificationResult>("ClassificationResult")({additionalOccurrences: S.optional(S.Boolean), customDataIdentifiers: S.optional(CustomDataIdentifiers), mimeType: S.optional(S.String), sensitiveData: S.optional(SensitiveData), sizeClassified: S.optional(S.Number), status: S.optional(ClassificationResultStatus)}) {}
export class FindingActor extends S.Class<FindingActor>("FindingActor")({domainDetails: S.optional(DomainDetails), ipAddressDetails: S.optional(IpAddressDetails), userIdentity: S.optional(UserIdentity)}) {}
export class DescribeBucketsResponse extends S.Class<DescribeBucketsResponse>("DescribeBucketsResponse")({buckets: S.optional(__listOfBucketMetadata), nextToken: S.optional(S.String)}) {}
export class SearchResourcesResponse extends S.Class<SearchResourcesResponse>("SearchResourcesResponse")({matchingResources: S.optional(__listOfMatchingResource), nextToken: S.optional(S.String)}) {}
export class ClassificationDetails extends S.Class<ClassificationDetails>("ClassificationDetails")({detailedResultsLocation: S.optional(S.String), jobArn: S.optional(S.String), jobId: S.optional(S.String), originType: S.optional(S.String), result: S.optional(ClassificationResult)}) {}
export class PolicyDetails extends S.Class<PolicyDetails>("PolicyDetails")({action: S.optional(FindingAction), actor: S.optional(FindingActor)}) {}
export class Finding extends S.Class<Finding>("Finding")({accountId: S.optional(S.String), archived: S.optional(S.Boolean), category: S.optional(S.String), classificationDetails: S.optional(ClassificationDetails), count: S.optional(S.Number), createdAt: S.optional(S.Date), description: S.optional(S.String), id: S.optional(S.String), partition: S.optional(S.String), policyDetails: S.optional(PolicyDetails), region: S.optional(S.String), resourcesAffected: S.optional(ResourcesAffected), sample: S.optional(S.Boolean), schemaVersion: S.optional(S.String), severity: S.optional(Severity), title: S.optional(S.String), type: S.optional(S.String), updatedAt: S.optional(S.Date)}) {}
export const __listOfFinding = S.Array(Finding);
export class GetFindingsResponse extends S.Class<GetFindingsResponse>("GetFindingsResponse")({findings: S.optional(__listOfFinding)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class UnprocessableEntityException extends S.TaggedError<UnprocessableEntityException>()("UnprocessableEntityException", {message: S.String}) {};

//# Operations
/**
 * Deletes a findings filter.
 */export const deleteFindingsFilter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/findingsfilters/{id}", method: "DELETE", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DeleteFindingsFilter" }, DeleteFindingsFilterRequest, DeleteFindingsFilterResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the association between an Amazon Macie administrator account and an account.
 */export const deleteMember = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/members/{id}", method: "DELETE", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DeleteMember" }, DeleteMemberRequest, DeleteMemberResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the Amazon Macie configuration settings for an organization in Organizations.
 */export const describeOrganizationConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/admin/configuration", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DescribeOrganizationConfiguration" }, DescribeOrganizationConfigurationRequest, DescribeOrganizationConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables Amazon Macie and deletes all settings and resources for a Macie account.
 */export const disableMacie = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/macie", method: "DELETE", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DisableMacie" }, DisableMacieRequest, DisableMacieResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.
 */export const disableOrganizationAdminAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/admin", method: "DELETE", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DisableOrganizationAdminAccount" }, DisableOrganizationAdminAccountRequest, DisableOrganizationAdminAccountResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a member account from its Amazon Macie administrator account.
 */export const disassociateFromAdministratorAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/administrator/disassociate", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DisassociateFromAdministratorAccount" }, DisassociateFromAdministratorAccountRequest, DisassociateFromAdministratorAccountResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the DisassociateFromAdministratorAccount operation.
 */export const disassociateFromMasterAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/master/disassociate", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DisassociateFromMasterAccount" }, DisassociateFromMasterAccountRequest, DisassociateFromMasterAccountResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates an Amazon Macie administrator account from a member account.
 */export const disassociateMember = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/members/disassociate/{id}", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DisassociateMember" }, DisassociateMemberRequest, DisassociateMemberResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables Amazon Macie and specifies the configuration settings for a Macie account.
 */export const enableMacie = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/macie", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.EnableMacie" }, EnableMacieRequest, EnableMacieResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.
 */export const enableOrganizationAdminAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/admin", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.EnableOrganizationAdminAccount" }, EnableOrganizationAdminAccountRequest, EnableOrganizationAdminAccountResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the configuration settings and status of automated sensitive data discovery for an organization or standalone account.
 */export const getAutomatedDiscoveryConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/automated-discovery/configuration", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetAutomatedDiscoveryConfiguration" }, GetAutomatedDiscoveryConfigurationRequest, GetAutomatedDiscoveryConfigurationResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the count of Amazon Macie membership invitations that were received by an account.
 */export const getInvitationsCount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/invitations/count", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetInvitationsCount" }, GetInvitationsCountRequest, GetInvitationsCountResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the status and configuration settings for an Amazon Macie account.
 */export const getMacieSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/macie", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetMacieSession" }, GetMacieSessionRequest, GetMacieSessionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the GetAdministratorAccount operation.
 */export const getMasterAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/master", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetMasterAccount" }, GetMasterAccountRequest, GetMasterAccountResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the configuration settings for publishing findings to Security Hub.
 */export const putFindingsPublicationConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/findings-publication-configuration", method: "PUT", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.PutFindingsPublicationConfiguration" }, PutFindingsPublicationConfigurationRequest, PutFindingsPublicationConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/tags/{resourceArn}", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.TagResource" }, TagResourceRequest, TagResourceResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more tags (keys and values) from an Amazon Macie resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.UntagResource" }, UntagResourceRequest, UntagResourceResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes the configuration settings and status of automated sensitive data discovery for an organization or standalone account.
 */export const updateAutomatedDiscoveryConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/automated-discovery/configuration", method: "PUT", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.UpdateAutomatedDiscoveryConfiguration" }, UpdateAutomatedDiscoveryConfigurationRequest, UpdateAutomatedDiscoveryConfigurationResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes the status of a classification job.
 */export const updateClassificationJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/jobs/{jobId}", method: "PATCH", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.UpdateClassificationJob" }, UpdateClassificationJobRequest, UpdateClassificationJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.
 */export const updateMacieSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/macie", method: "PATCH", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.UpdateMacieSession" }, UpdateMacieSessionRequest, UpdateMacieSessionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.
 */export const updateMemberSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/macie/members/{id}", method: "PATCH", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.UpdateMemberSession" }, UpdateMemberSessionRequest, UpdateMemberSessionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the Amazon Macie configuration settings for an organization in Organizations.
 */export const updateOrganizationConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/admin/configuration", method: "PATCH", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.UpdateOrganizationConfiguration" }, UpdateOrganizationConfigurationRequest, UpdateOrganizationConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the sensitivity score for an S3 bucket.
 */export const updateResourceProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/resource-profiles", method: "PATCH", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.UpdateResourceProfile" }, UpdateResourceProfileRequest, UpdateResourceProfileResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Accepts an Amazon Macie membership invitation that was received from a specific account.
 */export const acceptInvitation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/invitations/accept", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.AcceptInvitation" }, AcceptInvitationRequest, AcceptInvitationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates sample findings.
 */export const createSampleFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/findings/sample", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.CreateSampleFindings" }, CreateSampleFindingsRequest, CreateSampleFindingsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Declines Amazon Macie membership invitations that were received from specific accounts.
 */export const declineInvitations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/invitations/decline", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DeclineInvitations" }, DeclineInvitationsRequest, DeclineInvitationsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an allow list.
 */export const deleteAllowList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/allow-lists/{id}", method: "DELETE", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DeleteAllowList" }, DeleteAllowListRequest, DeleteAllowListResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Soft deletes a custom data identifier.
 */export const deleteCustomDataIdentifier = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/custom-data-identifiers/{id}", method: "DELETE", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DeleteCustomDataIdentifier" }, DeleteCustomDataIdentifierRequest, DeleteCustomDataIdentifierResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes Amazon Macie membership invitations that were received from specific accounts.
 */export const deleteInvitations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/invitations/delete", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DeleteInvitations" }, DeleteInvitationsRequest, DeleteInvitationsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the Amazon Macie administrator account for an account.
 */export const getAdministratorAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/administrator", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetAdministratorAccount" }, GetAdministratorAccountRequest, GetAdministratorAccountResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the criteria and other settings for a custom data identifier.
 */export const getCustomDataIdentifier = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/custom-data-identifiers/{id}", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetCustomDataIdentifier" }, GetCustomDataIdentifierRequest, GetCustomDataIdentifierResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the criteria and other settings for a findings filter.
 */export const getFindingsFilter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/findingsfilters/{id}", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetFindingsFilter" }, GetFindingsFilterRequest, GetFindingsFilterResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the configuration settings for publishing findings to Security Hub.
 */export const getFindingsPublicationConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/findings-publication-configuration", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetFindingsPublicationConfiguration" }, GetFindingsPublicationConfigurationRequest, GetFindingsPublicationConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an account that's associated with an Amazon Macie administrator account.
 */export const getMember = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/members/{id}", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetMember" }, GetMemberRequest, GetMemberResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
 */export const getRevealConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/reveal-configuration", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetRevealConfiguration" }, GetRevealConfigurationRequest, GetRevealConfigurationResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Checks whether occurrences of sensitive data can be retrieved for a finding.
 */export const getSensitiveDataOccurrencesAvailability = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/findings/{findingId}/reveal/availability", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetSensitiveDataOccurrencesAvailability" }, GetSensitiveDataOccurrencesAvailabilityRequest, GetSensitiveDataOccurrencesAvailabilityResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the settings for the sensitivity inspection template for an account.
 */export const getSensitivityInspectionTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/templates/sensitivity-inspections/{id}", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetSensitivityInspectionTemplate" }, GetSensitivityInspectionTemplateRequest, GetSensitivityInspectionTemplateResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a subset of information about one or more findings.
 */export const listFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/findings", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListFindings" }, ListFindingsRequest, ListFindingsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about Amazon Macie membership invitations that were received by an account.
 */export const listInvitations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/invitations", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListInvitations" }, ListInvitationsRequest, ListInvitationsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or updates the configuration settings for storing data classification results.
 */export const putClassificationExportConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/classification-export-configuration", method: "PUT", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.PutClassificationExportConfiguration" }, PutClassificationExportConfigurationRequest, PutClassificationExportConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tests criteria for a custom data identifier.
 */export const testCustomDataIdentifier = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/custom-data-identifiers/test", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.TestCustomDataIdentifier" }, TestCustomDataIdentifierRequest, TestCustomDataIdentifierResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the settings for an allow list.
 */export const updateAllowList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/allow-lists/{id}", method: "PUT", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.UpdateAllowList" }, UpdateAllowListRequest, UpdateAllowListResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the criteria and other settings for a findings filter.
 */export const updateFindingsFilter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/findingsfilters/{id}", method: "PATCH", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.UpdateFindingsFilter" }, UpdateFindingsFilterRequest, UpdateFindingsFilterResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the sensitivity scoring settings for an S3 bucket.
 */export const updateResourceProfileDetections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/resource-profiles/detections", method: "PATCH", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.UpdateResourceProfileDetections" }, UpdateResourceProfileDetectionsRequest, UpdateResourceProfileDetectionsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the settings for the sensitivity inspection template for an account.
 */export const updateSensitivityInspectionTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/templates/sensitivity-inspections/{id}", method: "PUT", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.UpdateSensitivityInspectionTemplate" }, UpdateSensitivityInspectionTemplateRequest, UpdateSensitivityInspectionTemplateResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about one or more custom data identifiers.
 */export const batchGetCustomDataIdentifiers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/custom-data-identifiers/get", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.BatchGetCustomDataIdentifiers" }, BatchGetCustomDataIdentifiersRequest, BatchGetCustomDataIdentifiersResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates and defines the criteria and other settings for a custom data identifier.
 */export const createCustomDataIdentifier = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/custom-data-identifiers", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.CreateCustomDataIdentifier" }, CreateCustomDataIdentifierRequest, CreateCustomDataIdentifierResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends an Amazon Macie membership invitation to one or more accounts.
 */export const createInvitations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/invitations", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.CreateInvitations" }, CreateInvitationsRequest, CreateInvitationsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates an account with an Amazon Macie administrator account.
 */export const createMember = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/members", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.CreateMember" }, CreateMemberRequest, CreateMemberResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the status and settings for a classification job.
 */export const describeClassificationJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/jobs/{jobId}", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DescribeClassificationJob" }, DescribeClassificationJobRequest, DescribeClassificationJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the settings and status of an allow list.
 */export const getAllowList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/allow-lists/{id}", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetAllowList" }, GetAllowListRequest, GetAllowListResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the configuration settings for storing data classification results.
 */export const getClassificationExportConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/classification-export-configuration", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetClassificationExportConfiguration" }, GetClassificationExportConfigurationRequest, GetClassificationExportConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.
 */export const getResourceProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/resource-profiles", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetResourceProfile" }, GetResourceProfileRequest, GetResourceProfileResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves (queries) aggregated usage data for an account.
 */export const getUsageTotals = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/usage", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetUsageTotals" }, GetUsageTotalsRequest, GetUsageTotalsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a subset of information about all the allow lists for an account.
 */export const listAllowLists = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/allow-lists", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListAllowLists" }, ListAllowListsRequest, ListAllowListsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the status of automated sensitive data discovery for one or more accounts.
 */export const listAutomatedDiscoveryAccounts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/automated-discovery/accounts", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListAutomatedDiscoveryAccounts" }, ListAutomatedDiscoveryAccountsRequest, ListAutomatedDiscoveryAccountsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a subset of information about the classification scope for an account.
 */export const listClassificationScopes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/classification-scopes", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListClassificationScopes" }, ListClassificationScopesRequest, ListClassificationScopesResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a subset of information about the custom data identifiers for an account.
 */export const listCustomDataIdentifiers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/custom-data-identifiers/list", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListCustomDataIdentifiers" }, ListCustomDataIdentifiersRequest, ListCustomDataIdentifiersResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a subset of information about all the findings filters for an account.
 */export const listFindingsFilters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/findingsfilters", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListFindingsFilters" }, ListFindingsFiltersRequest, ListFindingsFiltersResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
 */export const listManagedDataIdentifiers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/managed-data-identifiers/list", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListManagedDataIdentifiers" }, ListManagedDataIdentifiersRequest, ListManagedDataIdentifiersResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
 */export const listMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/members", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListMembers" }, ListMembersRequest, ListMembersResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.
 */export const listOrganizationAdminAccounts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/admin", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListOrganizationAdminAccounts" }, ListOrganizationAdminAccountsRequest, ListOrganizationAdminAccountsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about objects that Amazon Macie selected from an S3 bucket for automated sensitive data discovery.
 */export const listResourceProfileArtifacts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/resource-profiles/artifacts", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListResourceProfileArtifacts" }, ListResourceProfileArtifactsRequest, ListResourceProfileArtifactsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.
 */export const listResourceProfileDetections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/resource-profiles/detections", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListResourceProfileDetections" }, ListResourceProfileDetectionsRequest, ListResourceProfileDetectionsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a subset of information about the sensitivity inspection template for an account.
 */export const listSensitivityInspectionTemplates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/templates/sensitivity-inspections", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListSensitivityInspectionTemplates" }, ListSensitivityInspectionTemplatesRequest, ListSensitivityInspectionTemplatesResponse, [AccessDeniedException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the classification scope settings for an account.
 */export const updateClassificationScope = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/classification-scopes/{id}", method: "PATCH", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.UpdateClassificationScope" }, UpdateClassificationScopeRequest, UpdateClassificationScopeResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
 */export const updateRevealConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/reveal-configuration", method: "PUT", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.UpdateRevealConfiguration" }, UpdateRevealConfigurationRequest, UpdateRevealConfigurationResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes the status of automated sensitive data discovery for one or more accounts.
 */export const batchUpdateAutomatedDiscoveryAccounts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/automated-discovery/accounts", method: "PATCH", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.BatchUpdateAutomatedDiscoveryAccounts" }, BatchUpdateAutomatedDiscoveryAccountsRequest, BatchUpdateAutomatedDiscoveryAccountsResponse, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates and defines the settings for an allow list.
 */export const createAllowList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/allow-lists", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.CreateAllowList" }, CreateAllowListRequest, CreateAllowListResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.
 */export const getBucketStatistics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/datasources/s3/statistics", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetBucketStatistics" }, GetBucketStatisticsRequest, GetBucketStatisticsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the classification scope settings for an account.
 */export const getClassificationScope = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/classification-scopes/{id}", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetClassificationScope" }, GetClassificationScopeRequest, GetClassificationScopeResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves (queries) aggregated statistical data about findings.
 */export const getFindingStatistics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/findings/statistics", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetFindingStatistics" }, GetFindingStatisticsRequest, GetFindingStatisticsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates and defines the criteria and other settings for a findings filter.
 */export const createFindingsFilter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/findingsfilters", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.CreateFindingsFilter" }, CreateFindingsFilterRequest, CreateFindingsFilterResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves occurrences of sensitive data reported by a finding.
 */export const getSensitiveDataOccurrences = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/findings/{findingId}/reveal", method: "GET", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetSensitiveDataOccurrences" }, GetSensitiveDataOccurrencesRequest, GetSensitiveDataOccurrencesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnprocessableEntityException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a subset of information about one or more classification jobs.
 */export const listClassificationJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/jobs/list", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.ListClassificationJobs" }, ListClassificationJobsRequest, ListClassificationJobsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves (queries) quotas and aggregated usage data for one or more accounts.
 */export const getUsageStatistics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/usage/statistics", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetUsageStatistics" }, GetUsageStatisticsRequest, GetUsageStatisticsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates and defines the settings for a classification job.
 */export const createClassificationJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/jobs", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.CreateClassificationJob" }, CreateClassificationJobRequest, CreateClassificationJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.
 */export const describeBuckets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/datasources/s3", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.DescribeBuckets" }, DescribeBucketsRequest, DescribeBucketsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes for an account.
 */export const searchResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/datasources/search-resources", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.SearchResources" }, SearchResourcesRequest, SearchResourcesResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details of one or more findings.
 */export const getFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-01-01", uri: "/findings/describe", sdkId: "Macie2", sigV4ServiceName: "macie2", name: "Macie2.GetFindings" }, GetFindingsRequest, GetFindingsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

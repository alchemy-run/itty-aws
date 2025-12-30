import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const AccountIdExtendedList = S.Array(S.String);
export const GraphArnList = S.Array(S.String);
export const AccountIdList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export const DatasourcePackageList = S.Array(S.String);
export class AcceptInvitationRequest extends S.Class<AcceptInvitationRequest>("AcceptInvitationRequest")({GraphArn: S.String}) {}
export class BatchGetGraphMemberDatasourcesRequest extends S.Class<BatchGetGraphMemberDatasourcesRequest>("BatchGetGraphMemberDatasourcesRequest")({GraphArn: S.String, AccountIds: AccountIdExtendedList}) {}
export class BatchGetMembershipDatasourcesRequest extends S.Class<BatchGetMembershipDatasourcesRequest>("BatchGetMembershipDatasourcesRequest")({GraphArns: GraphArnList}) {}
export class DeleteGraphRequest extends S.Class<DeleteGraphRequest>("DeleteGraphRequest")({GraphArn: S.String}) {}
export class DeleteMembersRequest extends S.Class<DeleteMembersRequest>("DeleteMembersRequest")({GraphArn: S.String, AccountIds: AccountIdList}) {}
export class DescribeOrganizationConfigurationRequest extends S.Class<DescribeOrganizationConfigurationRequest>("DescribeOrganizationConfigurationRequest")({GraphArn: S.String}) {}
export class DisassociateMembershipRequest extends S.Class<DisassociateMembershipRequest>("DisassociateMembershipRequest")({GraphArn: S.String}) {}
export class EnableOrganizationAdminAccountRequest extends S.Class<EnableOrganizationAdminAccountRequest>("EnableOrganizationAdminAccountRequest")({AccountId: S.String}) {}
export class GetInvestigationRequest extends S.Class<GetInvestigationRequest>("GetInvestigationRequest")({GraphArn: S.String, InvestigationId: S.String}) {}
export class GetMembersRequest extends S.Class<GetMembersRequest>("GetMembersRequest")({GraphArn: S.String, AccountIds: AccountIdList}) {}
export class ListDatasourcePackagesRequest extends S.Class<ListDatasourcePackagesRequest>("ListDatasourcePackagesRequest")({GraphArn: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListGraphsRequest extends S.Class<ListGraphsRequest>("ListGraphsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListIndicatorsRequest extends S.Class<ListIndicatorsRequest>("ListIndicatorsRequest")({GraphArn: S.String, InvestigationId: S.String, IndicatorType: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListInvitationsRequest extends S.Class<ListInvitationsRequest>("ListInvitationsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListMembersRequest extends S.Class<ListMembersRequest>("ListMembersRequest")({GraphArn: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListOrganizationAdminAccountsRequest extends S.Class<ListOrganizationAdminAccountsRequest>("ListOrganizationAdminAccountsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class RejectInvitationRequest extends S.Class<RejectInvitationRequest>("RejectInvitationRequest")({GraphArn: S.String}) {}
export class StartInvestigationRequest extends S.Class<StartInvestigationRequest>("StartInvestigationRequest")({GraphArn: S.String, EntityArn: S.String, ScopeStartTime: S.Date, ScopeEndTime: S.Date}) {}
export class StartMonitoringMemberRequest extends S.Class<StartMonitoringMemberRequest>("StartMonitoringMemberRequest")({GraphArn: S.String, AccountId: S.String}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateDatasourcePackagesRequest extends S.Class<UpdateDatasourcePackagesRequest>("UpdateDatasourcePackagesRequest")({GraphArn: S.String, DatasourcePackages: DatasourcePackageList}) {}
export class UpdateInvestigationStateRequest extends S.Class<UpdateInvestigationStateRequest>("UpdateInvestigationStateRequest")({GraphArn: S.String, InvestigationId: S.String, State: S.String}) {}
export class UpdateOrganizationConfigurationRequest extends S.Class<UpdateOrganizationConfigurationRequest>("UpdateOrganizationConfigurationRequest")({GraphArn: S.String, AutoEnable: S.optional(S.Boolean)}) {}
export class Account extends S.Class<Account>("Account")({AccountId: S.String, EmailAddress: S.String}) {}
export const AccountList = S.Array(Account);
export class SortCriteria extends S.Class<SortCriteria>("SortCriteria")({Field: S.optional(S.String), SortOrder: S.optional(S.String)}) {}
export const ResourceList = S.Array(S.String);
export class CreateGraphRequest extends S.Class<CreateGraphRequest>("CreateGraphRequest")({Tags: S.optional(TagMap)}) {}
export class CreateMembersRequest extends S.Class<CreateMembersRequest>("CreateMembersRequest")({GraphArn: S.String, Message: S.optional(S.String), DisableEmailNotification: S.optional(S.Boolean), Accounts: AccountList}) {}
export class UnprocessedAccount extends S.Class<UnprocessedAccount>("UnprocessedAccount")({AccountId: S.optional(S.String), Reason: S.optional(S.String)}) {}
export const UnprocessedAccountList = S.Array(UnprocessedAccount);
export class DeleteMembersResponse extends S.Class<DeleteMembersResponse>("DeleteMembersResponse")({AccountIds: S.optional(AccountIdList), UnprocessedAccounts: S.optional(UnprocessedAccountList)}) {}
export class DescribeOrganizationConfigurationResponse extends S.Class<DescribeOrganizationConfigurationResponse>("DescribeOrganizationConfigurationResponse")({AutoEnable: S.optional(S.Boolean)}) {}
export class GetInvestigationResponse extends S.Class<GetInvestigationResponse>("GetInvestigationResponse")({GraphArn: S.optional(S.String), InvestigationId: S.optional(S.String), EntityArn: S.optional(S.String), EntityType: S.optional(S.String), CreatedTime: S.optional(S.Date), ScopeStartTime: S.optional(S.Date), ScopeEndTime: S.optional(S.Date), Status: S.optional(S.String), Severity: S.optional(S.String), State: S.optional(S.String)}) {}
export class DatasourcePackageUsageInfo extends S.Class<DatasourcePackageUsageInfo>("DatasourcePackageUsageInfo")({VolumeUsageInBytes: S.optional(S.Number), VolumeUsageUpdateTime: S.optional(S.Date)}) {}
export const VolumeUsageByDatasourcePackage = S.Record({key: S.String, value: DatasourcePackageUsageInfo});
export const DatasourcePackageIngestStates = S.Record({key: S.String, value: S.String});
export class MemberDetail extends S.Class<MemberDetail>("MemberDetail")({AccountId: S.optional(S.String), EmailAddress: S.optional(S.String), GraphArn: S.optional(S.String), MasterId: S.optional(S.String), AdministratorId: S.optional(S.String), Status: S.optional(S.String), DisabledReason: S.optional(S.String), InvitedTime: S.optional(S.Date), UpdatedTime: S.optional(S.Date), VolumeUsageInBytes: S.optional(S.Number), VolumeUsageUpdatedTime: S.optional(S.Date), PercentOfGraphUtilization: S.optional(S.Number), PercentOfGraphUtilizationUpdatedTime: S.optional(S.Date), InvitationType: S.optional(S.String), VolumeUsageByDatasourcePackage: S.optional(VolumeUsageByDatasourcePackage), DatasourcePackageIngestStates: S.optional(DatasourcePackageIngestStates)}) {}
export const MemberDetailList = S.Array(MemberDetail);
export class ListInvitationsResponse extends S.Class<ListInvitationsResponse>("ListInvitationsResponse")({Invitations: S.optional(MemberDetailList), NextToken: S.optional(S.String)}) {}
export class ListMembersResponse extends S.Class<ListMembersResponse>("ListMembersResponse")({MemberDetails: S.optional(MemberDetailList), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagMap)}) {}
export class StartInvestigationResponse extends S.Class<StartInvestigationResponse>("StartInvestigationResponse")({InvestigationId: S.optional(S.String)}) {}
export class StringFilter extends S.Class<StringFilter>("StringFilter")({Value: S.String}) {}
export class DateFilter extends S.Class<DateFilter>("DateFilter")({StartInclusive: S.Date, EndInclusive: S.Date}) {}
export class UnprocessedGraph extends S.Class<UnprocessedGraph>("UnprocessedGraph")({GraphArn: S.optional(S.String), Reason: S.optional(S.String)}) {}
export const UnprocessedGraphList = S.Array(UnprocessedGraph);
export class Graph extends S.Class<Graph>("Graph")({Arn: S.optional(S.String), CreatedTime: S.optional(S.Date)}) {}
export const GraphList = S.Array(Graph);
export class FilterCriteria extends S.Class<FilterCriteria>("FilterCriteria")({Severity: S.optional(StringFilter), Status: S.optional(StringFilter), State: S.optional(StringFilter), EntityArn: S.optional(StringFilter), CreatedTime: S.optional(DateFilter)}) {}
export class Administrator extends S.Class<Administrator>("Administrator")({AccountId: S.optional(S.String), GraphArn: S.optional(S.String), DelegationTime: S.optional(S.Date)}) {}
export const AdministratorList = S.Array(Administrator);
export class TimestampForCollection extends S.Class<TimestampForCollection>("TimestampForCollection")({Timestamp: S.optional(S.Date)}) {}
export const LastIngestStateChangeDates = S.Record({key: S.String, value: TimestampForCollection});
export const DatasourcePackageIngestHistory = S.Record({key: S.String, value: LastIngestStateChangeDates});
export class MembershipDatasources extends S.Class<MembershipDatasources>("MembershipDatasources")({AccountId: S.optional(S.String), GraphArn: S.optional(S.String), DatasourcePackageIngestHistory: S.optional(DatasourcePackageIngestHistory)}) {}
export const MembershipDatasourcesList = S.Array(MembershipDatasources);
export class BatchGetMembershipDatasourcesResponse extends S.Class<BatchGetMembershipDatasourcesResponse>("BatchGetMembershipDatasourcesResponse")({MembershipDatasources: S.optional(MembershipDatasourcesList), UnprocessedGraphs: S.optional(UnprocessedGraphList)}) {}
export class CreateGraphResponse extends S.Class<CreateGraphResponse>("CreateGraphResponse")({GraphArn: S.optional(S.String)}) {}
export class CreateMembersResponse extends S.Class<CreateMembersResponse>("CreateMembersResponse")({Members: S.optional(MemberDetailList), UnprocessedAccounts: S.optional(UnprocessedAccountList)}) {}
export class ListGraphsResponse extends S.Class<ListGraphsResponse>("ListGraphsResponse")({GraphList: S.optional(GraphList), NextToken: S.optional(S.String)}) {}
export class ListInvestigationsRequest extends S.Class<ListInvestigationsRequest>("ListInvestigationsRequest")({GraphArn: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), FilterCriteria: S.optional(FilterCriteria), SortCriteria: S.optional(SortCriteria)}) {}
export class ListOrganizationAdminAccountsResponse extends S.Class<ListOrganizationAdminAccountsResponse>("ListOrganizationAdminAccountsResponse")({Administrators: S.optional(AdministratorList), NextToken: S.optional(S.String)}) {}
export class DatasourcePackageIngestDetail extends S.Class<DatasourcePackageIngestDetail>("DatasourcePackageIngestDetail")({DatasourcePackageIngestState: S.optional(S.String), LastIngestStateChange: S.optional(LastIngestStateChangeDates)}) {}
export const DatasourcePackageIngestDetails = S.Record({key: S.String, value: DatasourcePackageIngestDetail});
export class TTPsObservedDetail extends S.Class<TTPsObservedDetail>("TTPsObservedDetail")({Tactic: S.optional(S.String), Technique: S.optional(S.String), Procedure: S.optional(S.String), IpAddress: S.optional(S.String), APIName: S.optional(S.String), APISuccessCount: S.optional(S.Number), APIFailureCount: S.optional(S.Number)}) {}
export class ImpossibleTravelDetail extends S.Class<ImpossibleTravelDetail>("ImpossibleTravelDetail")({StartingIpAddress: S.optional(S.String), EndingIpAddress: S.optional(S.String), StartingLocation: S.optional(S.String), EndingLocation: S.optional(S.String), HourlyTimeDelta: S.optional(S.Number)}) {}
export class FlaggedIpAddressDetail extends S.Class<FlaggedIpAddressDetail>("FlaggedIpAddressDetail")({IpAddress: S.optional(S.String), Reason: S.optional(S.String)}) {}
export class NewGeolocationDetail extends S.Class<NewGeolocationDetail>("NewGeolocationDetail")({Location: S.optional(S.String), IpAddress: S.optional(S.String), IsNewForEntireAccount: S.optional(S.Boolean)}) {}
export class NewAsoDetail extends S.Class<NewAsoDetail>("NewAsoDetail")({Aso: S.optional(S.String), IsNewForEntireAccount: S.optional(S.Boolean)}) {}
export class NewUserAgentDetail extends S.Class<NewUserAgentDetail>("NewUserAgentDetail")({UserAgent: S.optional(S.String), IsNewForEntireAccount: S.optional(S.Boolean)}) {}
export class RelatedFindingDetail extends S.Class<RelatedFindingDetail>("RelatedFindingDetail")({Arn: S.optional(S.String), Type: S.optional(S.String), IpAddress: S.optional(S.String)}) {}
export class RelatedFindingGroupDetail extends S.Class<RelatedFindingGroupDetail>("RelatedFindingGroupDetail")({Id: S.optional(S.String)}) {}
export class ListDatasourcePackagesResponse extends S.Class<ListDatasourcePackagesResponse>("ListDatasourcePackagesResponse")({DatasourcePackages: S.optional(DatasourcePackageIngestDetails), NextToken: S.optional(S.String)}) {}
export class IndicatorDetail extends S.Class<IndicatorDetail>("IndicatorDetail")({TTPsObservedDetail: S.optional(TTPsObservedDetail), ImpossibleTravelDetail: S.optional(ImpossibleTravelDetail), FlaggedIpAddressDetail: S.optional(FlaggedIpAddressDetail), NewGeolocationDetail: S.optional(NewGeolocationDetail), NewAsoDetail: S.optional(NewAsoDetail), NewUserAgentDetail: S.optional(NewUserAgentDetail), RelatedFindingDetail: S.optional(RelatedFindingDetail), RelatedFindingGroupDetail: S.optional(RelatedFindingGroupDetail)}) {}
export class Indicator extends S.Class<Indicator>("Indicator")({IndicatorType: S.optional(S.String), IndicatorDetail: S.optional(IndicatorDetail)}) {}
export const Indicators = S.Array(Indicator);
export class InvestigationDetail extends S.Class<InvestigationDetail>("InvestigationDetail")({InvestigationId: S.optional(S.String), Severity: S.optional(S.String), Status: S.optional(S.String), State: S.optional(S.String), CreatedTime: S.optional(S.Date), EntityArn: S.optional(S.String), EntityType: S.optional(S.String)}) {}
export const InvestigationDetails = S.Array(InvestigationDetail);
export class GetMembersResponse extends S.Class<GetMembersResponse>("GetMembersResponse")({MemberDetails: S.optional(MemberDetailList), UnprocessedAccounts: S.optional(UnprocessedAccountList)}) {}
export class ListIndicatorsResponse extends S.Class<ListIndicatorsResponse>("ListIndicatorsResponse")({GraphArn: S.optional(S.String), InvestigationId: S.optional(S.String), NextToken: S.optional(S.String), Indicators: S.optional(Indicators)}) {}
export class ListInvestigationsResponse extends S.Class<ListInvestigationsResponse>("ListInvestigationsResponse")({InvestigationDetails: S.optional(InvestigationDetails), NextToken: S.optional(S.String)}) {}
export class BatchGetGraphMemberDatasourcesResponse extends S.Class<BatchGetGraphMemberDatasourcesResponse>("BatchGetGraphMemberDatasourcesResponse")({MemberDatasources: S.optional(MembershipDatasourcesList), UnprocessedAccounts: S.optional(UnprocessedAccountList)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Rejects an invitation to contribute the account data to a behavior graph. This operation
 * must be called by an invited member account that has the `INVITED`
 * status.
 * 
 * `RejectInvitation` cannot be called by an organization account in the
 * organization behavior graph. In the organization behavior graph, organization accounts do
 * not receive an invitation.
 */export const rejectInvitation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/invitation/removal", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.RejectInvitation" }, RejectInvitationRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Applies tag values to a behavior graph.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/tags/{ResourceArn}", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from a behavior graph.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a data source package for the Detective behavior graph.
 */export const updateDatasourcePackages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/graph/datasources/update", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.UpdateDatasourcePackages" }, UpdateDatasourcePackagesRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the state of an investigation.
 */export const updateInvestigationState = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/investigations/updateInvestigationState", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.UpdateInvestigationState" }, UpdateInvestigationStateRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the configuration for the Organizations integration in the current Region.
 * Can only be called by the Detective administrator account for the
 * organization.
 */export const updateOrganizationConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/orgs/updateOrganizationConfiguration", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.UpdateOrganizationConfiguration" }, UpdateOrganizationConfigurationRequest, S.Struct({}), [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Accepts an invitation for the member account to contribute data to a behavior graph.
 * This operation can only be called by an invited member account.
 * 
 * The request provides the ARN of behavior graph.
 * 
 * The member account status in the graph must be `INVITED`.
 */export const acceptInvitation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/invitation", method: "PUT", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.AcceptInvitation" }, AcceptInvitationRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables the specified behavior graph and queues it to be deleted. This operation
 * removes the behavior graph from each member account's list of behavior graphs.
 * 
 * `DeleteGraph` can only be called by the administrator account for a behavior
 * graph.
 */export const deleteGraph = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/graph/removal", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.DeleteGraph" }, DeleteGraphRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified member accounts from the behavior graph. The removed accounts no
 * longer contribute data to the behavior graph. This operation can only be called by the
 * administrator account for the behavior graph.
 * 
 * For invited accounts, the removed accounts are deleted from the list of accounts in the
 * behavior graph. To restore the account, the administrator account must send another
 * invitation.
 * 
 * For organization accounts in the organization behavior graph, the Detective
 * administrator account can always enable the organization account again. Organization
 * accounts that are not enabled as member accounts are not included in the
 * `ListMembers` results for the organization behavior graph.
 * 
 * An administrator account cannot use `DeleteMembers` to remove their own
 * account from the behavior graph. To disable a behavior graph, the administrator account
 * uses the `DeleteGraph` API method.
 */export const deleteMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/graph/members/removal", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.DeleteMembers" }, DeleteMembersRequest, DeleteMembersResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the configuration for the organization behavior graph.
 * Currently indicates whether to automatically enable new organization accounts as member
 * accounts.
 * 
 * Can only be called by the Detective administrator account for the organization.
 */export const describeOrganizationConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/orgs/describeOrganizationConfiguration", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.DescribeOrganizationConfiguration" }, DescribeOrganizationConfigurationRequest, DescribeOrganizationConfigurationResponse, [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the Detective administrator account in the current Region. Deletes the
 * organization behavior graph.
 * 
 * Can only be called by the organization management account.
 * 
 * Removing the Detective administrator account does not affect the delegated
 * administrator account for Detective in Organizations.
 * 
 * To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.
 */export const disableOrganizationAdminAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/orgs/disableAdminAccount", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.DisableOrganizationAdminAccount" }, S.Struct({}), S.Struct({}), [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the member account from the specified behavior graph. This operation can only be
 * called by an invited member account that has the `ENABLED` status.
 * 
 * `DisassociateMembership` cannot be called by an organization account in the
 * organization behavior graph. For the organization behavior graph, the Detective
 * administrator account determines which organization accounts to enable or disable as member
 * accounts.
 */export const disassociateMembership = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/membership/removal", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.DisassociateMembership" }, DisassociateMembershipRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Designates the Detective administrator account for the organization in the
 * current Region.
 * 
 * If the account does not have Detective enabled, then enables Detective
 * for that account and creates a new behavior graph.
 * 
 * Can only be called by the organization management account.
 * 
 * If the organization has a delegated administrator account in Organizations, then the
 * Detective administrator account must be either the delegated administrator
 * account or the organization management account.
 * 
 * If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other
 * than the organization management account, Detective calls Organizations to
 * make that account the delegated administrator account for Detective. The
 * organization management account cannot be the delegated administrator account.
 */export const enableOrganizationAdminAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/orgs/enableAdminAccount", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.EnableOrganizationAdminAccount" }, EnableOrganizationAdminAccountRequest, S.Struct({}), [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Detective investigations lets you investigate IAM users and IAM roles using indicators of compromise. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. `GetInvestigation` returns the investigation results of an investigation for a behavior graph.
 */export const getInvestigation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/investigations/getInvestigation", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.GetInvestigation" }, GetInvestigationRequest, GetInvestigationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the list of open and accepted behavior graph invitations for the member
 * account. This operation can only be called by an invited member account.
 * 
 * Open invitations are invitations that the member account has not responded to.
 * 
 * The results do not include behavior graphs for which the member account declined the
 * invitation. The results also do not include behavior graphs that the member account
 * resigned from or was removed from.
 */export const listInvitations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/invitations/list", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.ListInvitations" }, ListInvitationsRequest, ListInvitationsResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the list of member accounts for a behavior graph.
 * 
 * For invited accounts, the results do not include member accounts that were removed from
 * the behavior graph.
 * 
 * For the organization behavior graph, the results do not include organization accounts
 * that the Detective administrator account has not enabled as member
 * accounts.
 */export const listMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/graph/members/list", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.ListMembers" }, ListMembersRequest, ListMembersResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the tag values that are assigned to a behavior graph.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Detective investigations lets you investigate IAM users and IAM roles using indicators of compromise. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. `StartInvestigation` initiates an investigation on an entity in a behavior graph.
 */export const startInvestigation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/investigations/startInvestigation", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.StartInvestigation" }, StartInvestigationRequest, StartInvestigationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends a request to enable data ingest for a member account that has a status of
 * `ACCEPTED_BUT_DISABLED`.
 * 
 * For valid member accounts, the status is updated as follows.
 * 
 * - If Detective enabled the member account, then the new status is
 * `ENABLED`.
 * 
 * - If Detective cannot enable the member account, the status remains
 * `ACCEPTED_BUT_DISABLED`.
 */export const startMonitoringMember = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/graph/member/monitoringstate", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.StartMonitoringMember" }, StartMonitoringMemberRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information on the data source package history for an account.
 */export const batchGetMembershipDatasources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/membership/datasources/get", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.BatchGetMembershipDatasources" }, BatchGetMembershipDatasourcesRequest, BatchGetMembershipDatasourcesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new behavior graph for the calling account, and sets that account as the
 * administrator account. This operation is called by the account that is enabling Detective.
 * 
 * The operation also enables Detective for the calling account in the currently
 * selected Region. It returns the ARN of the new behavior graph.
 * 
 * `CreateGraph` triggers a process to create the corresponding data tables for
 * the new behavior graph.
 * 
 * An account can only be the administrator account for one behavior graph within a Region.
 * If the same account calls `CreateGraph` with the same administrator account, it
 * always returns the same behavior graph ARN. It does not create a new behavior graph.
 */export const createGraph = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/graph", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.CreateGraph" }, CreateGraphRequest, CreateGraphResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * `CreateMembers` is used to send invitations to accounts. For the organization
 * behavior graph, the Detective administrator account uses
 * `CreateMembers` to enable organization accounts as member accounts.
 * 
 * For invited accounts, `CreateMembers` sends a request to invite the specified
 * Amazon Web Services accounts to be member accounts in the behavior graph. This operation
 * can only be called by the administrator account for a behavior graph.
 * 
 * `CreateMembers` verifies the accounts and then invites the verified accounts.
 * The administrator can optionally specify to not send invitation emails to the member
 * accounts. This would be used when the administrator manages their member accounts
 * centrally.
 * 
 * For organization accounts in the organization behavior graph, `CreateMembers`
 * attempts to enable the accounts. The organization accounts do not receive
 * invitations.
 * 
 * The request provides the behavior graph ARN and the list of accounts to invite or to
 * enable.
 * 
 * The response separates the requested accounts into two lists:
 * 
 * - The accounts that `CreateMembers` was able to process. For invited
 * accounts, includes member accounts that are being verified, that have passed
 * verification and are to be invited, and that have failed verification. For
 * organization accounts in the organization behavior graph, includes accounts that can
 * be enabled and that cannot be enabled.
 * 
 * - The accounts that `CreateMembers` was unable to process. This list
 * includes accounts that were already invited to be member accounts in the behavior
 * graph.
 */export const createMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/graph/members", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.CreateMembers" }, CreateMembersRequest, CreateMembersResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the list of behavior graphs that the calling account is an administrator account
 * of. This operation can only be called by an administrator account.
 * 
 * Because an account can currently only be the administrator of one behavior graph within
 * a Region, the results always contain a single behavior graph.
 */export const listGraphs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/graphs/list", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.ListGraphs" }, ListGraphsRequest, ListGraphsResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the Detective administrator account for an
 * organization. Can only be called by the organization management account.
 */export const listOrganizationAdminAccounts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/orgs/adminAccountslist", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.ListOrganizationAdminAccounts" }, ListOrganizationAdminAccountsRequest, ListOrganizationAdminAccountsResponse, [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists data source packages in the behavior graph.
 */export const listDatasourcePackages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/graph/datasources/list", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.ListDatasourcePackages" }, ListDatasourcePackagesRequest, ListDatasourcePackagesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the membership details for specified member accounts for a behavior
 * graph.
 */export const getMembers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/graph/members/get", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.GetMembers" }, GetMembersRequest, GetMembersResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the indicators from an investigation. You can use the information from the indicators to determine if an IAM user and/or IAM role is involved in an unusual activity that could indicate malicious behavior and its impact.
 */export const listIndicators = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/investigations/listIndicators", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.ListIndicators" }, ListIndicatorsRequest, ListIndicatorsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Detective investigations lets you investigate IAM users and
 * IAM roles using indicators of compromise. An indicator of compromise
 * (IOC) is an artifact observed in or on a network, system, or environment that can (with a
 * high level of confidence) identify malicious activity or a security incident.
 * `ListInvestigations` lists all active Detective
 * investigations.
 */export const listInvestigations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/investigations/listInvestigations", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.ListInvestigations" }, ListInvestigationsRequest, ListInvestigationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets data source package information for the behavior graph.
 */export const batchGetGraphMemberDatasources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-26", uri: "/graph/datasources/get", sdkId: "Detective", sigV4ServiceName: "detective", name: "AmazonDetective.BatchGetGraphMemberDatasources" }, BatchGetGraphMemberDatasourcesRequest, BatchGetGraphMemberDatasourcesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

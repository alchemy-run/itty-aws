import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class SecurityHub extends AWSServiceClient {
  acceptAdministratorInvitation(
    input: AcceptAdministratorInvitationRequest,
  ): Effect.Effect<
    AcceptAdministratorInvitationResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  acceptInvitation(
    input: AcceptInvitationRequest,
  ): Effect.Effect<
    AcceptInvitationResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  batchDeleteAutomationRules(
    input: BatchDeleteAutomationRulesRequest,
  ): Effect.Effect<
    BatchDeleteAutomationRulesResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  batchDisableStandards(
    input: BatchDisableStandardsRequest,
  ): Effect.Effect<
    BatchDisableStandardsResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  batchEnableStandards(
    input: BatchEnableStandardsRequest,
  ): Effect.Effect<
    BatchEnableStandardsResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  batchGetAutomationRules(
    input: BatchGetAutomationRulesRequest,
  ): Effect.Effect<
    BatchGetAutomationRulesResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  batchGetConfigurationPolicyAssociations(
    input: BatchGetConfigurationPolicyAssociationsRequest,
  ): Effect.Effect<
    BatchGetConfigurationPolicyAssociationsResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  batchGetSecurityControls(
    input: BatchGetSecurityControlsRequest,
  ): Effect.Effect<
    BatchGetSecurityControlsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  batchGetStandardsControlAssociations(
    input: BatchGetStandardsControlAssociationsRequest,
  ): Effect.Effect<
    BatchGetStandardsControlAssociationsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  batchImportFindings(
    input: BatchImportFindingsRequest,
  ): Effect.Effect<
    BatchImportFindingsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  batchUpdateAutomationRules(
    input: BatchUpdateAutomationRulesRequest,
  ): Effect.Effect<
    BatchUpdateAutomationRulesResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  batchUpdateFindings(
    input: BatchUpdateFindingsRequest,
  ): Effect.Effect<
    BatchUpdateFindingsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  batchUpdateFindingsV2(
    input: BatchUpdateFindingsV2Request,
  ): Effect.Effect<
    BatchUpdateFindingsV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchUpdateStandardsControlAssociations(
    input: BatchUpdateStandardsControlAssociationsRequest,
  ): Effect.Effect<
    BatchUpdateStandardsControlAssociationsResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  connectorRegistrationsV2(
    input: ConnectorRegistrationsV2Request,
  ): Effect.Effect<
    ConnectorRegistrationsV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createActionTarget(
    input: CreateActionTargetRequest,
  ): Effect.Effect<
    CreateActionTargetResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceConflictException | CommonAwsError
  >;
  createAggregatorV2(
    input: CreateAggregatorV2Request,
  ): Effect.Effect<
    CreateAggregatorV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createAutomationRule(
    input: CreateAutomationRuleRequest,
  ): Effect.Effect<
    CreateAutomationRuleResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  createAutomationRuleV2(
    input: CreateAutomationRuleV2Request,
  ): Effect.Effect<
    CreateAutomationRuleV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createConfigurationPolicy(
    input: CreateConfigurationPolicyRequest,
  ): Effect.Effect<
    CreateConfigurationPolicyResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceConflictException | CommonAwsError
  >;
  createConnectorV2(
    input: CreateConnectorV2Request,
  ): Effect.Effect<
    CreateConnectorV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createFindingAggregator(
    input: CreateFindingAggregatorRequest,
  ): Effect.Effect<
    CreateFindingAggregatorResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  createInsight(
    input: CreateInsightRequest,
  ): Effect.Effect<
    CreateInsightResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceConflictException | CommonAwsError
  >;
  createMembers(
    input: CreateMembersRequest,
  ): Effect.Effect<
    CreateMembersResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceConflictException | CommonAwsError
  >;
  createTicketV2(
    input: CreateTicketV2Request,
  ): Effect.Effect<
    CreateTicketV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  declineInvitations(
    input: DeclineInvitationsRequest,
  ): Effect.Effect<
    DeclineInvitationsResponse,
    InternalException | InvalidAccessException | InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  deleteActionTarget(
    input: DeleteActionTargetRequest,
  ): Effect.Effect<
    DeleteActionTargetResponse,
    InternalException | InvalidAccessException | InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  deleteAggregatorV2(
    input: DeleteAggregatorV2Request,
  ): Effect.Effect<
    DeleteAggregatorV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteAutomationRuleV2(
    input: DeleteAutomationRuleV2Request,
  ): Effect.Effect<
    DeleteAutomationRuleV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteConfigurationPolicy(
    input: DeleteConfigurationPolicyRequest,
  ): Effect.Effect<
    DeleteConfigurationPolicyResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceConflictException | ResourceNotFoundException | CommonAwsError
  >;
  deleteConnectorV2(
    input: DeleteConnectorV2Request,
  ): Effect.Effect<
    DeleteConnectorV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteFindingAggregator(
    input: DeleteFindingAggregatorRequest,
  ): Effect.Effect<
    DeleteFindingAggregatorResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  deleteInsight(
    input: DeleteInsightRequest,
  ): Effect.Effect<
    DeleteInsightResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  deleteInvitations(
    input: DeleteInvitationsRequest,
  ): Effect.Effect<
    DeleteInvitationsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  deleteMembers(
    input: DeleteMembersRequest,
  ): Effect.Effect<
    DeleteMembersResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  describeActionTargets(
    input: DescribeActionTargetsRequest,
  ): Effect.Effect<
    DescribeActionTargetsResponse,
    InternalException | InvalidAccessException | InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeHub(
    input: DescribeHubRequest,
  ): Effect.Effect<
    DescribeHubResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  describeOrganizationConfiguration(
    input: DescribeOrganizationConfigurationRequest,
  ): Effect.Effect<
    DescribeOrganizationConfigurationResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  describeProducts(
    input: DescribeProductsRequest,
  ): Effect.Effect<
    DescribeProductsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  describeProductsV2(
    input: DescribeProductsV2Request,
  ): Effect.Effect<
    DescribeProductsV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeSecurityHubV2(
    input: DescribeSecurityHubV2Request,
  ): Effect.Effect<
    DescribeSecurityHubV2Response,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeStandards(
    input: DescribeStandardsRequest,
  ): Effect.Effect<
    DescribeStandardsResponse,
    InternalException | InvalidAccessException | InvalidInputException | CommonAwsError
  >;
  describeStandardsControls(
    input: DescribeStandardsControlsRequest,
  ): Effect.Effect<
    DescribeStandardsControlsResponse,
    InternalException | InvalidAccessException | InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  disableImportFindingsForProduct(
    input: DisableImportFindingsForProductRequest,
  ): Effect.Effect<
    DisableImportFindingsForProductResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  disableOrganizationAdminAccount(
    input: DisableOrganizationAdminAccountRequest,
  ): Effect.Effect<
    DisableOrganizationAdminAccountResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  disableSecurityHub(
    input: DisableSecurityHubRequest,
  ): Effect.Effect<
    DisableSecurityHubResponse,
    AccessDeniedException | InternalException | InvalidAccessException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  disableSecurityHubV2(
    input: DisableSecurityHubV2Request,
  ): Effect.Effect<
    DisableSecurityHubV2Response,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateFromAdministratorAccount(
    input: DisassociateFromAdministratorAccountRequest,
  ): Effect.Effect<
    DisassociateFromAdministratorAccountResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  disassociateFromMasterAccount(
    input: DisassociateFromMasterAccountRequest,
  ): Effect.Effect<
    DisassociateFromMasterAccountResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  disassociateMembers(
    input: DisassociateMembersRequest,
  ): Effect.Effect<
    DisassociateMembersResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  enableImportFindingsForProduct(
    input: EnableImportFindingsForProductRequest,
  ): Effect.Effect<
    EnableImportFindingsForProductResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceConflictException | CommonAwsError
  >;
  enableOrganizationAdminAccount(
    input: EnableOrganizationAdminAccountRequest,
  ): Effect.Effect<
    EnableOrganizationAdminAccountResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  enableSecurityHub(
    input: EnableSecurityHubRequest,
  ): Effect.Effect<
    EnableSecurityHubResponse,
    AccessDeniedException | InternalException | InvalidAccessException | LimitExceededException | ResourceConflictException | CommonAwsError
  >;
  enableSecurityHubV2(
    input: EnableSecurityHubV2Request,
  ): Effect.Effect<
    EnableSecurityHubV2Response,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAdministratorAccount(
    input: GetAdministratorAccountRequest,
  ): Effect.Effect<
    GetAdministratorAccountResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getAggregatorV2(
    input: GetAggregatorV2Request,
  ): Effect.Effect<
    GetAggregatorV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAutomationRuleV2(
    input: GetAutomationRuleV2Request,
  ): Effect.Effect<
    GetAutomationRuleV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getConfigurationPolicy(
    input: GetConfigurationPolicyRequest,
  ): Effect.Effect<
    GetConfigurationPolicyResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getConfigurationPolicyAssociation(
    input: GetConfigurationPolicyAssociationRequest,
  ): Effect.Effect<
    GetConfigurationPolicyAssociationResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getConnectorV2(
    input: GetConnectorV2Request,
  ): Effect.Effect<
    GetConnectorV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getEnabledStandards(
    input: GetEnabledStandardsRequest,
  ): Effect.Effect<
    GetEnabledStandardsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  getFindingAggregator(
    input: GetFindingAggregatorRequest,
  ): Effect.Effect<
    GetFindingAggregatorResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getFindingHistory(
    input: GetFindingHistoryRequest,
  ): Effect.Effect<
    GetFindingHistoryResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  getFindings(
    input: GetFindingsRequest,
  ): Effect.Effect<
    GetFindingsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  getFindingStatisticsV2(
    input: GetFindingStatisticsV2Request,
  ): Effect.Effect<
    GetFindingStatisticsV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getFindingsV2(
    input: GetFindingsV2Request,
  ): Effect.Effect<
    GetFindingsV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getInsightResults(
    input: GetInsightResultsRequest,
  ): Effect.Effect<
    GetInsightResultsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getInsights(
    input: GetInsightsRequest,
  ): Effect.Effect<
    GetInsightsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getInvitationsCount(
    input: GetInvitationsCountRequest,
  ): Effect.Effect<
    GetInvitationsCountResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  getMasterAccount(
    input: GetMasterAccountRequest,
  ): Effect.Effect<
    GetMasterAccountResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getMembers(
    input: GetMembersRequest,
  ): Effect.Effect<
    GetMembersResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  getResourcesStatisticsV2(
    input: GetResourcesStatisticsV2Request,
  ): Effect.Effect<
    GetResourcesStatisticsV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getResourcesV2(
    input: GetResourcesV2Request,
  ): Effect.Effect<
    GetResourcesV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getSecurityControlDefinition(
    input: GetSecurityControlDefinitionRequest,
  ): Effect.Effect<
    GetSecurityControlDefinitionResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  inviteMembers(
    input: InviteMembersRequest,
  ): Effect.Effect<
    InviteMembersResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  listAggregatorsV2(
    input: ListAggregatorsV2Request,
  ): Effect.Effect<
    ListAggregatorsV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAutomationRules(
    input: ListAutomationRulesRequest,
  ): Effect.Effect<
    ListAutomationRulesResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  listAutomationRulesV2(
    input: ListAutomationRulesV2Request,
  ): Effect.Effect<
    ListAutomationRulesV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listConfigurationPolicies(
    input: ListConfigurationPoliciesRequest,
  ): Effect.Effect<
    ListConfigurationPoliciesResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  listConfigurationPolicyAssociations(
    input: ListConfigurationPolicyAssociationsRequest,
  ): Effect.Effect<
    ListConfigurationPolicyAssociationsResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  listConnectorsV2(
    input: ListConnectorsV2Request,
  ): Effect.Effect<
    ListConnectorsV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEnabledProductsForImport(
    input: ListEnabledProductsForImportRequest,
  ): Effect.Effect<
    ListEnabledProductsForImportResponse,
    InternalException | InvalidAccessException | LimitExceededException | CommonAwsError
  >;
  listFindingAggregators(
    input: ListFindingAggregatorsRequest,
  ): Effect.Effect<
    ListFindingAggregatorsResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  listInvitations(
    input: ListInvitationsRequest,
  ): Effect.Effect<
    ListInvitationsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  listMembers(
    input: ListMembersRequest,
  ): Effect.Effect<
    ListMembersResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  listOrganizationAdminAccounts(
    input: ListOrganizationAdminAccountsRequest,
  ): Effect.Effect<
    ListOrganizationAdminAccountsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  listSecurityControlDefinitions(
    input: ListSecurityControlDefinitionsRequest,
  ): Effect.Effect<
    ListSecurityControlDefinitionsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  listStandardsControlAssociations(
    input: ListStandardsControlAssociationsRequest,
  ): Effect.Effect<
    ListStandardsControlAssociationsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalException | InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  startConfigurationPolicyAssociation(
    input: StartConfigurationPolicyAssociationRequest,
  ): Effect.Effect<
    StartConfigurationPolicyAssociationResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  startConfigurationPolicyDisassociation(
    input: StartConfigurationPolicyDisassociationRequest,
  ): Effect.Effect<
    StartConfigurationPolicyDisassociationResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalException | InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalException | InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  updateActionTarget(
    input: UpdateActionTargetRequest,
  ): Effect.Effect<
    UpdateActionTargetResponse,
    InternalException | InvalidAccessException | InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  updateAggregatorV2(
    input: UpdateAggregatorV2Request,
  ): Effect.Effect<
    UpdateAggregatorV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateAutomationRuleV2(
    input: UpdateAutomationRuleV2Request,
  ): Effect.Effect<
    UpdateAutomationRuleV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateConfigurationPolicy(
    input: UpdateConfigurationPolicyRequest,
  ): Effect.Effect<
    UpdateConfigurationPolicyResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceConflictException | ResourceNotFoundException | CommonAwsError
  >;
  updateConnectorV2(
    input: UpdateConnectorV2Request,
  ): Effect.Effect<
    UpdateConnectorV2Response,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateFindingAggregator(
    input: UpdateFindingAggregatorRequest,
  ): Effect.Effect<
    UpdateFindingAggregatorResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  updateFindings(
    input: UpdateFindingsRequest,
  ): Effect.Effect<
    UpdateFindingsResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  updateInsight(
    input: UpdateInsightRequest,
  ): Effect.Effect<
    UpdateInsightResponse,
    InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  updateOrganizationConfiguration(
    input: UpdateOrganizationConfigurationRequest,
  ): Effect.Effect<
    UpdateOrganizationConfigurationResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceConflictException | ResourceNotFoundException | CommonAwsError
  >;
  updateSecurityControl(
    input: UpdateSecurityControlRequest,
  ): Effect.Effect<
    UpdateSecurityControlResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  updateSecurityHubConfiguration(
    input: UpdateSecurityHubConfigurationRequest,
  ): Effect.Effect<
    UpdateSecurityHubConfigurationResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  updateStandardsControl(
    input: UpdateStandardsControlRequest,
  ): Effect.Effect<
    UpdateStandardsControlResponse,
    AccessDeniedException | InternalException | InvalidAccessException | InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
}

export declare class Securityhub extends SecurityHub {}

export interface AcceptAdministratorInvitationRequest {
  AdministratorId: string;
  InvitationId: string;
}
export interface AcceptAdministratorInvitationResponse {
}
export interface AcceptInvitationRequest {
  MasterId: string;
  InvitationId: string;
}
export interface AcceptInvitationResponse {
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export interface AccountDetails {
  AccountId: string;
  Email?: string;
}
export type AccountDetailsList = Array<AccountDetails>;
export type AccountId = string;

export type AccountIdList = Array<string>;
export interface Action {
  ActionType?: string;
  NetworkConnectionAction?: NetworkConnectionAction;
  AwsApiCallAction?: AwsApiCallAction;
  DnsRequestAction?: DnsRequestAction;
  PortProbeAction?: PortProbeAction;
}
export type ActionList = Array<AutomationRulesAction>;
export interface ActionLocalIpDetails {
  IpAddressV4?: string;
}
export interface ActionLocalPortDetails {
  Port?: number;
  PortName?: string;
}
export interface ActionRemoteIpDetails {
  IpAddressV4?: string;
  Organization?: IpOrganizationDetails;
  Country?: Country;
  City?: City;
  GeoLocation?: GeoLocation;
}
export interface ActionRemotePortDetails {
  Port?: number;
  PortName?: string;
}
export interface ActionTarget {
  ActionTargetArn: string;
  Name: string;
  Description: string;
}
export type ActionTargetList = Array<ActionTarget>;
export interface Actor {
  Id?: string;
  User?: ActorUser;
  Session?: ActorSession;
}
export interface ActorSession {
  Uid?: string;
  MfaStatus?: ActorSessionMfaStatus;
  CreatedTime?: number;
  Issuer?: string;
}
export type ActorSessionMfaStatus = "ENABLED" | "DISABLED";
export type ActorsList = Array<Actor>;
export interface ActorUser {
  Name?: string;
  Uid?: string;
  Type?: string;
  CredentialUid?: string;
  Account?: UserAccount;
}
export interface Adjustment {
  Metric?: string;
  Reason?: string;
}
export type AdjustmentList = Array<Adjustment>;
export interface AdminAccount {
  AccountId?: string;
  Status?: AdminStatus;
}
export type AdminAccounts = Array<AdminAccount>;
export type AdminsMaxResults = number;

export type AdminStatus = "ENABLED" | "DISABLE_IN_PROGRESS";
export interface AggregatorV2 {
  AggregatorV2Arn?: string;
}
export type AggregatorV2List = Array<AggregatorV2>;
export type AllowedOperators = "AND" | "OR";
export type AlphaNumericNonEmptyString = string;

export type ArnList = Array<string>;
export interface AssociatedStandard {
  StandardsId?: string;
}
export type AssociatedStandardsList = Array<AssociatedStandard>;
export interface AssociationFilters {
  ConfigurationPolicyId?: string;
  AssociationType?: AssociationType;
  AssociationStatus?: ConfigurationPolicyAssociationStatus;
}
export interface AssociationSetDetails {
  AssociationState?: AssociationStateDetails;
  GatewayId?: string;
  Main?: boolean;
  RouteTableAssociationId?: string;
  RouteTableId?: string;
  SubnetId?: string;
}
export type AssociationSetList = Array<AssociationSetDetails>;
export interface AssociationStateDetails {
  State?: string;
  StatusMessage?: string;
}
export type AssociationStatus = "ENABLED" | "DISABLED";
export type AssociationType = "INHERITED" | "APPLIED";
export type AutoEnableStandards = "NONE" | "DEFAULT";
export interface AutomationRulesAction {
  Type?: AutomationRulesActionType;
  FindingFieldsUpdate?: AutomationRulesFindingFieldsUpdate;
}
export type AutomationRulesActionListV2 = Array<AutomationRulesActionV2>;
export type AutomationRulesActionType = "FINDING_FIELDS_UPDATE";
export type AutomationRulesActionTypeListV2 = Array<AutomationRulesActionTypeObjectV2>;
export interface AutomationRulesActionTypeObjectV2 {
  Type?: AutomationRulesActionTypeV2;
}
export type AutomationRulesActionTypeV2 = "FINDING_FIELDS_UPDATE" | "EXTERNAL_INTEGRATION";
export interface AutomationRulesActionV2 {
  Type: AutomationRulesActionTypeV2;
  FindingFieldsUpdate?: AutomationRulesFindingFieldsUpdateV2;
  ExternalIntegrationConfiguration?: ExternalIntegrationConfiguration;
}
export type AutomationRulesArnsList = Array<string>;
export interface AutomationRulesConfig {
  RuleArn?: string;
  RuleStatus?: RuleStatus;
  RuleOrder?: number;
  RuleName?: string;
  Description?: string;
  IsTerminal?: boolean;
  Criteria?: AutomationRulesFindingFilters;
  Actions?: Array<AutomationRulesAction>;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  CreatedBy?: string;
}
export type AutomationRulesConfigList = Array<AutomationRulesConfig>;
export interface AutomationRulesFindingFieldsUpdate {
  Note?: NoteUpdate;
  Severity?: SeverityUpdate;
  VerificationState?: VerificationState;
  Confidence?: number;
  Criticality?: number;
  Types?: Array<string>;
  UserDefinedFields?: Record<string, string>;
  Workflow?: WorkflowUpdate;
  RelatedFindings?: Array<RelatedFinding>;
}
export interface AutomationRulesFindingFieldsUpdateV2 {
  SeverityId?: number;
  Comment?: string;
  StatusId?: number;
}
export interface AutomationRulesFindingFilters {
  ProductArn?: Array<StringFilter>;
  AwsAccountId?: Array<StringFilter>;
  Id?: Array<StringFilter>;
  GeneratorId?: Array<StringFilter>;
  Type?: Array<StringFilter>;
  FirstObservedAt?: Array<DateFilter>;
  LastObservedAt?: Array<DateFilter>;
  CreatedAt?: Array<DateFilter>;
  UpdatedAt?: Array<DateFilter>;
  Confidence?: Array<NumberFilter>;
  Criticality?: Array<NumberFilter>;
  Title?: Array<StringFilter>;
  Description?: Array<StringFilter>;
  SourceUrl?: Array<StringFilter>;
  ProductName?: Array<StringFilter>;
  CompanyName?: Array<StringFilter>;
  SeverityLabel?: Array<StringFilter>;
  ResourceType?: Array<StringFilter>;
  ResourceId?: Array<StringFilter>;
  ResourcePartition?: Array<StringFilter>;
  ResourceRegion?: Array<StringFilter>;
  ResourceTags?: Array<MapFilter>;
  ResourceDetailsOther?: Array<MapFilter>;
  ComplianceStatus?: Array<StringFilter>;
  ComplianceSecurityControlId?: Array<StringFilter>;
  ComplianceAssociatedStandardsId?: Array<StringFilter>;
  VerificationState?: Array<StringFilter>;
  WorkflowStatus?: Array<StringFilter>;
  RecordState?: Array<StringFilter>;
  RelatedFindingsProductArn?: Array<StringFilter>;
  RelatedFindingsId?: Array<StringFilter>;
  NoteText?: Array<StringFilter>;
  NoteUpdatedAt?: Array<DateFilter>;
  NoteUpdatedBy?: Array<StringFilter>;
  UserDefinedFields?: Array<MapFilter>;
  ResourceApplicationArn?: Array<StringFilter>;
  ResourceApplicationName?: Array<StringFilter>;
  AwsAccountName?: Array<StringFilter>;
}
export interface AutomationRulesMetadata {
  RuleArn?: string;
  RuleStatus?: RuleStatus;
  RuleOrder?: number;
  RuleName?: string;
  Description?: string;
  IsTerminal?: boolean;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  CreatedBy?: string;
}
export type AutomationRulesMetadataList = Array<AutomationRulesMetadata>;
export type AutomationRulesMetadataListV2 = Array<AutomationRulesMetadataV2>;
export interface AutomationRulesMetadataV2 {
  RuleArn?: string;
  RuleId?: string;
  RuleOrder?: number;
  RuleName?: string;
  RuleStatus?: RuleStatusV2;
  Description?: string;
  Actions?: Array<AutomationRulesActionTypeObjectV2>;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export interface AvailabilityZone {
  ZoneName?: string;
  SubnetId?: string;
}
export type AvailabilityZones = Array<AvailabilityZone>;
export interface AwsAmazonMqBrokerDetails {
  AuthenticationStrategy?: string;
  AutoMinorVersionUpgrade?: boolean;
  BrokerArn?: string;
  BrokerName?: string;
  DeploymentMode?: string;
  EncryptionOptions?: AwsAmazonMqBrokerEncryptionOptionsDetails;
  EngineType?: string;
  EngineVersion?: string;
  HostInstanceType?: string;
  BrokerId?: string;
  LdapServerMetadata?: AwsAmazonMqBrokerLdapServerMetadataDetails;
  Logs?: AwsAmazonMqBrokerLogsDetails;
  MaintenanceWindowStartTime?: AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails;
  PubliclyAccessible?: boolean;
  SecurityGroups?: Array<string>;
  StorageType?: string;
  SubnetIds?: Array<string>;
  Users?: Array<AwsAmazonMqBrokerUsersDetails>;
}
export interface AwsAmazonMqBrokerEncryptionOptionsDetails {
  KmsKeyId?: string;
  UseAwsOwnedKey?: boolean;
}
export interface AwsAmazonMqBrokerLdapServerMetadataDetails {
  Hosts?: Array<string>;
  RoleBase?: string;
  RoleName?: string;
  RoleSearchMatching?: string;
  RoleSearchSubtree?: boolean;
  ServiceAccountUsername?: string;
  UserBase?: string;
  UserRoleName?: string;
  UserSearchMatching?: string;
  UserSearchSubtree?: boolean;
}
export interface AwsAmazonMqBrokerLogsDetails {
  Audit?: boolean;
  General?: boolean;
  AuditLogGroup?: string;
  GeneralLogGroup?: string;
  Pending?: AwsAmazonMqBrokerLogsPendingDetails;
}
export interface AwsAmazonMqBrokerLogsPendingDetails {
  Audit?: boolean;
  General?: boolean;
}
export interface AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails {
  DayOfWeek?: string;
  TimeOfDay?: string;
  TimeZone?: string;
}
export interface AwsAmazonMqBrokerUsersDetails {
  PendingChange?: string;
  Username?: string;
}
export type AwsAmazonMqBrokerUsersList = Array<AwsAmazonMqBrokerUsersDetails>;
export interface AwsApiCallAction {
  Api?: string;
  ServiceName?: string;
  CallerType?: string;
  RemoteIpDetails?: ActionRemoteIpDetails;
  DomainDetails?: AwsApiCallActionDomainDetails;
  AffectedResources?: Record<string, string>;
  FirstSeen?: string;
  LastSeen?: string;
}
export interface AwsApiCallActionDomainDetails {
  Domain?: string;
}
export interface AwsApiGatewayAccessLogSettings {
  Format?: string;
  DestinationArn?: string;
}
export interface AwsApiGatewayCanarySettings {
  PercentTraffic?: number;
  DeploymentId?: string;
  StageVariableOverrides?: Record<string, string>;
  UseStageCache?: boolean;
}
export interface AwsApiGatewayEndpointConfiguration {
  Types?: Array<string>;
}
export interface AwsApiGatewayMethodSettings {
  MetricsEnabled?: boolean;
  LoggingLevel?: string;
  DataTraceEnabled?: boolean;
  ThrottlingBurstLimit?: number;
  ThrottlingRateLimit?: number;
  CachingEnabled?: boolean;
  CacheTtlInSeconds?: number;
  CacheDataEncrypted?: boolean;
  RequireAuthorizationForCacheControl?: boolean;
  UnauthorizedCacheControlHeaderStrategy?: string;
  HttpMethod?: string;
  ResourcePath?: string;
}
export type AwsApiGatewayMethodSettingsList = Array<AwsApiGatewayMethodSettings>;
export interface AwsApiGatewayRestApiDetails {
  Id?: string;
  Name?: string;
  Description?: string;
  CreatedDate?: string;
  Version?: string;
  BinaryMediaTypes?: Array<string>;
  MinimumCompressionSize?: number;
  ApiKeySource?: string;
  EndpointConfiguration?: AwsApiGatewayEndpointConfiguration;
}
export interface AwsApiGatewayStageDetails {
  DeploymentId?: string;
  ClientCertificateId?: string;
  StageName?: string;
  Description?: string;
  CacheClusterEnabled?: boolean;
  CacheClusterSize?: string;
  CacheClusterStatus?: string;
  MethodSettings?: Array<AwsApiGatewayMethodSettings>;
  Variables?: Record<string, string>;
  DocumentationVersion?: string;
  AccessLogSettings?: AwsApiGatewayAccessLogSettings;
  CanarySettings?: AwsApiGatewayCanarySettings;
  TracingEnabled?: boolean;
  CreatedDate?: string;
  LastUpdatedDate?: string;
  WebAclArn?: string;
}
export interface AwsApiGatewayV2ApiDetails {
  ApiEndpoint?: string;
  ApiId?: string;
  ApiKeySelectionExpression?: string;
  CreatedDate?: string;
  Description?: string;
  Version?: string;
  Name?: string;
  ProtocolType?: string;
  RouteSelectionExpression?: string;
  CorsConfiguration?: AwsCorsConfiguration;
}
export interface AwsApiGatewayV2RouteSettings {
  DetailedMetricsEnabled?: boolean;
  LoggingLevel?: string;
  DataTraceEnabled?: boolean;
  ThrottlingBurstLimit?: number;
  ThrottlingRateLimit?: number;
}
export interface AwsApiGatewayV2StageDetails {
  ClientCertificateId?: string;
  CreatedDate?: string;
  Description?: string;
  DefaultRouteSettings?: AwsApiGatewayV2RouteSettings;
  DeploymentId?: string;
  LastUpdatedDate?: string;
  RouteSettings?: AwsApiGatewayV2RouteSettings;
  StageName?: string;
  StageVariables?: Record<string, string>;
  AccessLogSettings?: AwsApiGatewayAccessLogSettings;
  AutoDeploy?: boolean;
  LastDeploymentStatusMessage?: string;
  ApiGatewayManaged?: boolean;
}
export interface AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails {
  AuthenticationType?: string;
  LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails;
  OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails;
  UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails;
}
export type AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersList = Array<AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails>;
export interface AwsAppSyncGraphQlApiDetails {
  ApiId?: string;
  Id?: string;
  OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails;
  Name?: string;
  LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails;
  XrayEnabled?: boolean;
  Arn?: string;
  UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails;
  AuthenticationType?: string;
  LogConfig?: AwsAppSyncGraphQlApiLogConfigDetails;
  AdditionalAuthenticationProviders?: Array<AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails>;
  WafWebAclArn?: string;
}
export interface AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails {
  AuthorizerResultTtlInSeconds?: number;
  AuthorizerUri?: string;
  IdentityValidationExpression?: string;
}
export interface AwsAppSyncGraphQlApiLogConfigDetails {
  CloudWatchLogsRoleArn?: string;
  ExcludeVerboseContent?: boolean;
  FieldLogLevel?: string;
}
export interface AwsAppSyncGraphQlApiOpenIdConnectConfigDetails {
  AuthTtL?: number;
  ClientId?: string;
  IatTtL?: number;
  Issuer?: string;
}
export interface AwsAppSyncGraphQlApiUserPoolConfigDetails {
  AppIdClientRegex?: string;
  AwsRegion?: string;
  DefaultAction?: string;
  UserPoolId?: string;
}
export interface AwsAthenaWorkGroupConfigurationDetails {
  ResultConfiguration?: AwsAthenaWorkGroupConfigurationResultConfigurationDetails;
}
export interface AwsAthenaWorkGroupConfigurationResultConfigurationDetails {
  EncryptionConfiguration?: AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails;
}
export interface AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails {
  EncryptionOption?: string;
  KmsKey?: string;
}
export interface AwsAthenaWorkGroupDetails {
  Name?: string;
  Description?: string;
  State?: string;
  Configuration?: AwsAthenaWorkGroupConfigurationDetails;
}
export type AwsAutoScalingAutoScalingGroupAvailabilityZonesList = Array<AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails>;
export interface AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails {
  Value?: string;
}
export interface AwsAutoScalingAutoScalingGroupDetails {
  LaunchConfigurationName?: string;
  LoadBalancerNames?: Array<string>;
  HealthCheckType?: string;
  HealthCheckGracePeriod?: number;
  CreatedTime?: string;
  MixedInstancesPolicy?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails;
  AvailabilityZones?: Array<AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails>;
  LaunchTemplate?: AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification;
  CapacityRebalance?: boolean;
}
export interface AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
}
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails {
  InstancesDistribution?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails;
  LaunchTemplate?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails;
}
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails {
  OnDemandAllocationStrategy?: string;
  OnDemandBaseCapacity?: number;
  OnDemandPercentageAboveBaseCapacity?: number;
  SpotAllocationStrategy?: string;
  SpotInstancePools?: number;
  SpotMaxPrice?: string;
}
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails {
  LaunchTemplateSpecification?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
  Overrides?: Array<AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails>;
}
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
}
export type AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList = Array<AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails>;
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails {
  InstanceType?: string;
  WeightedCapacity?: string;
}
export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails {
  DeviceName?: string;
  Ebs?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails;
  NoDevice?: boolean;
  VirtualName?: string;
}
export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails {
  DeleteOnTermination?: boolean;
  Encrypted?: boolean;
  Iops?: number;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: string;
}
export type AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList = Array<AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails>;
export interface AwsAutoScalingLaunchConfigurationDetails {
  AssociatePublicIpAddress?: boolean;
  BlockDeviceMappings?: Array<AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails>;
  ClassicLinkVpcId?: string;
  ClassicLinkVpcSecurityGroups?: Array<string>;
  CreatedTime?: string;
  EbsOptimized?: boolean;
  IamInstanceProfile?: string;
  ImageId?: string;
  InstanceMonitoring?: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails;
  InstanceType?: string;
  KernelId?: string;
  KeyName?: string;
  LaunchConfigurationName?: string;
  PlacementTenancy?: string;
  RamdiskId?: string;
  SecurityGroups?: Array<string>;
  SpotPrice?: string;
  UserData?: string;
  MetadataOptions?: AwsAutoScalingLaunchConfigurationMetadataOptions;
}
export interface AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails {
  Enabled?: boolean;
}
export interface AwsAutoScalingLaunchConfigurationMetadataOptions {
  HttpEndpoint?: string;
  HttpPutResponseHopLimit?: number;
  HttpTokens?: string;
}
export interface AwsBackupBackupPlanAdvancedBackupSettingsDetails {
  BackupOptions?: Record<string, string>;
  ResourceType?: string;
}
export type AwsBackupBackupPlanAdvancedBackupSettingsList = Array<AwsBackupBackupPlanAdvancedBackupSettingsDetails>;
export interface AwsBackupBackupPlanBackupPlanDetails {
  BackupPlanName?: string;
  AdvancedBackupSettings?: Array<AwsBackupBackupPlanAdvancedBackupSettingsDetails>;
  BackupPlanRule?: Array<AwsBackupBackupPlanRuleDetails>;
}
export interface AwsBackupBackupPlanDetails {
  BackupPlan?: AwsBackupBackupPlanBackupPlanDetails;
  BackupPlanArn?: string;
  BackupPlanId?: string;
  VersionId?: string;
}
export interface AwsBackupBackupPlanLifecycleDetails {
  DeleteAfterDays?: number;
  MoveToColdStorageAfterDays?: number;
}
export interface AwsBackupBackupPlanRuleCopyActionsDetails {
  DestinationBackupVaultArn?: string;
  Lifecycle?: AwsBackupBackupPlanLifecycleDetails;
}
export type AwsBackupBackupPlanRuleCopyActionsList = Array<AwsBackupBackupPlanRuleCopyActionsDetails>;
export interface AwsBackupBackupPlanRuleDetails {
  TargetBackupVault?: string;
  StartWindowMinutes?: number;
  ScheduleExpression?: string;
  RuleName?: string;
  RuleId?: string;
  EnableContinuousBackup?: boolean;
  CompletionWindowMinutes?: number;
  CopyActions?: Array<AwsBackupBackupPlanRuleCopyActionsDetails>;
  Lifecycle?: AwsBackupBackupPlanLifecycleDetails;
}
export type AwsBackupBackupPlanRuleList = Array<AwsBackupBackupPlanRuleDetails>;
export interface AwsBackupBackupVaultDetails {
  BackupVaultArn?: string;
  BackupVaultName?: string;
  EncryptionKeyArn?: string;
  Notifications?: AwsBackupBackupVaultNotificationsDetails;
  AccessPolicy?: string;
}
export interface AwsBackupBackupVaultNotificationsDetails {
  BackupVaultEvents?: Array<string>;
  SnsTopicArn?: string;
}
export interface AwsBackupRecoveryPointCalculatedLifecycleDetails {
  DeleteAt?: string;
  MoveToColdStorageAt?: string;
}
export interface AwsBackupRecoveryPointCreatedByDetails {
  BackupPlanArn?: string;
  BackupPlanId?: string;
  BackupPlanVersion?: string;
  BackupRuleId?: string;
}
export interface AwsBackupRecoveryPointDetails {
  BackupSizeInBytes?: number;
  BackupVaultArn?: string;
  BackupVaultName?: string;
  CalculatedLifecycle?: AwsBackupRecoveryPointCalculatedLifecycleDetails;
  CompletionDate?: string;
  CreatedBy?: AwsBackupRecoveryPointCreatedByDetails;
  CreationDate?: string;
  EncryptionKeyArn?: string;
  IamRoleArn?: string;
  IsEncrypted?: boolean;
  LastRestoreTime?: string;
  Lifecycle?: AwsBackupRecoveryPointLifecycleDetails;
  RecoveryPointArn?: string;
  ResourceArn?: string;
  ResourceType?: string;
  SourceBackupVaultArn?: string;
  Status?: string;
  StatusMessage?: string;
  StorageClass?: string;
}
export interface AwsBackupRecoveryPointLifecycleDetails {
  DeleteAfterDays?: number;
  MoveToColdStorageAfterDays?: number;
}
export interface AwsCertificateManagerCertificateDetails {
  CertificateAuthorityArn?: string;
  CreatedAt?: string;
  DomainName?: string;
  DomainValidationOptions?: Array<AwsCertificateManagerCertificateDomainValidationOption>;
  ExtendedKeyUsages?: Array<AwsCertificateManagerCertificateExtendedKeyUsage>;
  FailureReason?: string;
  ImportedAt?: string;
  InUseBy?: Array<string>;
  IssuedAt?: string;
  Issuer?: string;
  KeyAlgorithm?: string;
  KeyUsages?: Array<AwsCertificateManagerCertificateKeyUsage>;
  NotAfter?: string;
  NotBefore?: string;
  Options?: AwsCertificateManagerCertificateOptions;
  RenewalEligibility?: string;
  RenewalSummary?: AwsCertificateManagerCertificateRenewalSummary;
  Serial?: string;
  SignatureAlgorithm?: string;
  Status?: string;
  Subject?: string;
  SubjectAlternativeNames?: Array<string>;
  Type?: string;
}
export interface AwsCertificateManagerCertificateDomainValidationOption {
  DomainName?: string;
  ResourceRecord?: AwsCertificateManagerCertificateResourceRecord;
  ValidationDomain?: string;
  ValidationEmails?: Array<string>;
  ValidationMethod?: string;
  ValidationStatus?: string;
}
export type AwsCertificateManagerCertificateDomainValidationOptions = Array<AwsCertificateManagerCertificateDomainValidationOption>;
export interface AwsCertificateManagerCertificateExtendedKeyUsage {
  Name?: string;
  OId?: string;
}
export type AwsCertificateManagerCertificateExtendedKeyUsages = Array<AwsCertificateManagerCertificateExtendedKeyUsage>;
export interface AwsCertificateManagerCertificateKeyUsage {
  Name?: string;
}
export type AwsCertificateManagerCertificateKeyUsages = Array<AwsCertificateManagerCertificateKeyUsage>;
export interface AwsCertificateManagerCertificateOptions {
  CertificateTransparencyLoggingPreference?: string;
}
export interface AwsCertificateManagerCertificateRenewalSummary {
  DomainValidationOptions?: Array<AwsCertificateManagerCertificateDomainValidationOption>;
  RenewalStatus?: string;
  RenewalStatusReason?: string;
  UpdatedAt?: string;
}
export interface AwsCertificateManagerCertificateResourceRecord {
  Name?: string;
  Type?: string;
  Value?: string;
}
export interface AwsCloudFormationStackDetails {
  Capabilities?: Array<string>;
  CreationTime?: string;
  Description?: string;
  DisableRollback?: boolean;
  DriftInformation?: AwsCloudFormationStackDriftInformationDetails;
  EnableTerminationProtection?: boolean;
  LastUpdatedTime?: string;
  NotificationArns?: Array<string>;
  Outputs?: Array<AwsCloudFormationStackOutputsDetails>;
  RoleArn?: string;
  StackId?: string;
  StackName?: string;
  StackStatus?: string;
  StackStatusReason?: string;
  TimeoutInMinutes?: number;
}
export interface AwsCloudFormationStackDriftInformationDetails {
  StackDriftStatus?: string;
}
export interface AwsCloudFormationStackOutputsDetails {
  Description?: string;
  OutputKey?: string;
  OutputValue?: string;
}
export type AwsCloudFormationStackOutputsList = Array<AwsCloudFormationStackOutputsDetails>;
export interface AwsCloudFrontDistributionCacheBehavior {
  ViewerProtocolPolicy?: string;
}
export interface AwsCloudFrontDistributionCacheBehaviors {
  Items?: Array<AwsCloudFrontDistributionCacheBehavior>;
}
export type AwsCloudFrontDistributionCacheBehaviorsItemList = Array<AwsCloudFrontDistributionCacheBehavior>;
export interface AwsCloudFrontDistributionDefaultCacheBehavior {
  ViewerProtocolPolicy?: string;
}
export interface AwsCloudFrontDistributionDetails {
  CacheBehaviors?: AwsCloudFrontDistributionCacheBehaviors;
  DefaultCacheBehavior?: AwsCloudFrontDistributionDefaultCacheBehavior;
  DefaultRootObject?: string;
  DomainName?: string;
  ETag?: string;
  LastModifiedTime?: string;
  Logging?: AwsCloudFrontDistributionLogging;
  Origins?: AwsCloudFrontDistributionOrigins;
  OriginGroups?: AwsCloudFrontDistributionOriginGroups;
  ViewerCertificate?: AwsCloudFrontDistributionViewerCertificate;
  Status?: string;
  WebAclId?: string;
}
export interface AwsCloudFrontDistributionLogging {
  Bucket?: string;
  Enabled?: boolean;
  IncludeCookies?: boolean;
  Prefix?: string;
}
export interface AwsCloudFrontDistributionOriginCustomOriginConfig {
  HttpPort?: number;
  HttpsPort?: number;
  OriginKeepaliveTimeout?: number;
  OriginProtocolPolicy?: string;
  OriginReadTimeout?: number;
  OriginSslProtocols?: AwsCloudFrontDistributionOriginSslProtocols;
}
export interface AwsCloudFrontDistributionOriginGroup {
  FailoverCriteria?: AwsCloudFrontDistributionOriginGroupFailover;
}
export interface AwsCloudFrontDistributionOriginGroupFailover {
  StatusCodes?: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes;
}
export interface AwsCloudFrontDistributionOriginGroupFailoverStatusCodes {
  Items?: Array<number>;
  Quantity?: number;
}
export type AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList = Array<number>;
export interface AwsCloudFrontDistributionOriginGroups {
  Items?: Array<AwsCloudFrontDistributionOriginGroup>;
}
export type AwsCloudFrontDistributionOriginGroupsItemList = Array<AwsCloudFrontDistributionOriginGroup>;
export interface AwsCloudFrontDistributionOriginItem {
  DomainName?: string;
  Id?: string;
  OriginPath?: string;
  S3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig;
  CustomOriginConfig?: AwsCloudFrontDistributionOriginCustomOriginConfig;
}
export type AwsCloudFrontDistributionOriginItemList = Array<AwsCloudFrontDistributionOriginItem>;
export interface AwsCloudFrontDistributionOrigins {
  Items?: Array<AwsCloudFrontDistributionOriginItem>;
}
export interface AwsCloudFrontDistributionOriginS3OriginConfig {
  OriginAccessIdentity?: string;
}
export interface AwsCloudFrontDistributionOriginSslProtocols {
  Items?: Array<string>;
  Quantity?: number;
}
export interface AwsCloudFrontDistributionViewerCertificate {
  AcmCertificateArn?: string;
  Certificate?: string;
  CertificateSource?: string;
  CloudFrontDefaultCertificate?: boolean;
  IamCertificateId?: string;
  MinimumProtocolVersion?: string;
  SslSupportMethod?: string;
}
export interface AwsCloudTrailTrailDetails {
  CloudWatchLogsLogGroupArn?: string;
  CloudWatchLogsRoleArn?: string;
  HasCustomEventSelectors?: boolean;
  HomeRegion?: string;
  IncludeGlobalServiceEvents?: boolean;
  IsMultiRegionTrail?: boolean;
  IsOrganizationTrail?: boolean;
  KmsKeyId?: string;
  LogFileValidationEnabled?: boolean;
  Name?: string;
  S3BucketName?: string;
  S3KeyPrefix?: string;
  SnsTopicArn?: string;
  SnsTopicName?: string;
  TrailArn?: string;
}
export interface AwsCloudWatchAlarmDetails {
  ActionsEnabled?: boolean;
  AlarmActions?: Array<string>;
  AlarmArn?: string;
  AlarmConfigurationUpdatedTimestamp?: string;
  AlarmDescription?: string;
  AlarmName?: string;
  ComparisonOperator?: string;
  DatapointsToAlarm?: number;
  Dimensions?: Array<AwsCloudWatchAlarmDimensionsDetails>;
  EvaluateLowSampleCountPercentile?: string;
  EvaluationPeriods?: number;
  ExtendedStatistic?: string;
  InsufficientDataActions?: Array<string>;
  MetricName?: string;
  Namespace?: string;
  OkActions?: Array<string>;
  Period?: number;
  Statistic?: string;
  Threshold?: number;
  ThresholdMetricId?: string;
  TreatMissingData?: string;
  Unit?: string;
}
export interface AwsCloudWatchAlarmDimensionsDetails {
  Name?: string;
  Value?: string;
}
export type AwsCloudWatchAlarmDimensionsList = Array<AwsCloudWatchAlarmDimensionsDetails>;
export interface AwsCodeBuildProjectArtifactsDetails {
  ArtifactIdentifier?: string;
  EncryptionDisabled?: boolean;
  Location?: string;
  Name?: string;
  NamespaceType?: string;
  OverrideArtifactName?: boolean;
  Packaging?: string;
  Path?: string;
  Type?: string;
}
export type AwsCodeBuildProjectArtifactsList = Array<AwsCodeBuildProjectArtifactsDetails>;
export interface AwsCodeBuildProjectDetails {
  EncryptionKey?: string;
  Artifacts?: Array<AwsCodeBuildProjectArtifactsDetails>;
  Environment?: AwsCodeBuildProjectEnvironment;
  Name?: string;
  Source?: AwsCodeBuildProjectSource;
  ServiceRole?: string;
  LogsConfig?: AwsCodeBuildProjectLogsConfigDetails;
  VpcConfig?: AwsCodeBuildProjectVpcConfig;
  SecondaryArtifacts?: Array<AwsCodeBuildProjectArtifactsDetails>;
}
export interface AwsCodeBuildProjectEnvironment {
  Certificate?: string;
  EnvironmentVariables?: Array<AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails>;
  PrivilegedMode?: boolean;
  ImagePullCredentialsType?: string;
  RegistryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;
  Type?: string;
}
export interface AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails {
  Name?: string;
  Type?: string;
  Value?: string;
}
export type AwsCodeBuildProjectEnvironmentEnvironmentVariablesList = Array<AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails>;
export interface AwsCodeBuildProjectEnvironmentRegistryCredential {
  Credential?: string;
  CredentialProvider?: string;
}
export interface AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails {
  GroupName?: string;
  Status?: string;
  StreamName?: string;
}
export interface AwsCodeBuildProjectLogsConfigDetails {
  CloudWatchLogs?: AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails;
  S3Logs?: AwsCodeBuildProjectLogsConfigS3LogsDetails;
}
export interface AwsCodeBuildProjectLogsConfigS3LogsDetails {
  EncryptionDisabled?: boolean;
  Location?: string;
  Status?: string;
}
export interface AwsCodeBuildProjectSource {
  Type?: string;
  Location?: string;
  GitCloneDepth?: number;
  InsecureSsl?: boolean;
}
export interface AwsCodeBuildProjectVpcConfig {
  VpcId?: string;
  Subnets?: Array<string>;
  SecurityGroupIds?: Array<string>;
}
export interface AwsCorsConfiguration {
  AllowOrigins?: Array<string>;
  AllowCredentials?: boolean;
  ExposeHeaders?: Array<string>;
  MaxAge?: number;
  AllowMethods?: Array<string>;
  AllowHeaders?: Array<string>;
}
export interface AwsDmsEndpointDetails {
  CertificateArn?: string;
  DatabaseName?: string;
  EndpointArn?: string;
  EndpointIdentifier?: string;
  EndpointType?: string;
  EngineName?: string;
  ExternalId?: string;
  ExtraConnectionAttributes?: string;
  KmsKeyId?: string;
  Port?: number;
  ServerName?: string;
  SslMode?: string;
  Username?: string;
}
export interface AwsDmsReplicationInstanceDetails {
  AllocatedStorage?: number;
  AutoMinorVersionUpgrade?: boolean;
  AvailabilityZone?: string;
  EngineVersion?: string;
  KmsKeyId?: string;
  MultiAZ?: boolean;
  PreferredMaintenanceWindow?: string;
  PubliclyAccessible?: boolean;
  ReplicationInstanceClass?: string;
  ReplicationInstanceIdentifier?: string;
  ReplicationSubnetGroup?: AwsDmsReplicationInstanceReplicationSubnetGroupDetails;
  VpcSecurityGroups?: Array<AwsDmsReplicationInstanceVpcSecurityGroupsDetails>;
}
export interface AwsDmsReplicationInstanceReplicationSubnetGroupDetails {
  ReplicationSubnetGroupIdentifier?: string;
}
export interface AwsDmsReplicationInstanceVpcSecurityGroupsDetails {
  VpcSecurityGroupId?: string;
}
export type AwsDmsReplicationInstanceVpcSecurityGroupsList = Array<AwsDmsReplicationInstanceVpcSecurityGroupsDetails>;
export interface AwsDmsReplicationTaskDetails {
  CdcStartPosition?: string;
  CdcStartTime?: string;
  CdcStopPosition?: string;
  MigrationType?: string;
  Id?: string;
  ResourceIdentifier?: string;
  ReplicationInstanceArn?: string;
  ReplicationTaskIdentifier?: string;
  ReplicationTaskSettings?: string;
  SourceEndpointArn?: string;
  TableMappings?: string;
  TargetEndpointArn?: string;
  TaskData?: string;
}
export interface AwsDynamoDbTableAttributeDefinition {
  AttributeName?: string;
  AttributeType?: string;
}
export type AwsDynamoDbTableAttributeDefinitionList = Array<AwsDynamoDbTableAttributeDefinition>;
export interface AwsDynamoDbTableBillingModeSummary {
  BillingMode?: string;
  LastUpdateToPayPerRequestDateTime?: string;
}
export interface AwsDynamoDbTableDetails {
  AttributeDefinitions?: Array<AwsDynamoDbTableAttributeDefinition>;
  BillingModeSummary?: AwsDynamoDbTableBillingModeSummary;
  CreationDateTime?: string;
  GlobalSecondaryIndexes?: Array<AwsDynamoDbTableGlobalSecondaryIndex>;
  GlobalTableVersion?: string;
  ItemCount?: number;
  KeySchema?: Array<AwsDynamoDbTableKeySchema>;
  LatestStreamArn?: string;
  LatestStreamLabel?: string;
  LocalSecondaryIndexes?: Array<AwsDynamoDbTableLocalSecondaryIndex>;
  ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
  Replicas?: Array<AwsDynamoDbTableReplica>;
  RestoreSummary?: AwsDynamoDbTableRestoreSummary;
  SseDescription?: AwsDynamoDbTableSseDescription;
  StreamSpecification?: AwsDynamoDbTableStreamSpecification;
  TableId?: string;
  TableName?: string;
  TableSizeBytes?: number;
  TableStatus?: string;
  DeletionProtectionEnabled?: boolean;
}
export interface AwsDynamoDbTableGlobalSecondaryIndex {
  Backfilling?: boolean;
  IndexArn?: string;
  IndexName?: string;
  IndexSizeBytes?: number;
  IndexStatus?: string;
  ItemCount?: number;
  KeySchema?: Array<AwsDynamoDbTableKeySchema>;
  Projection?: AwsDynamoDbTableProjection;
  ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
}
export type AwsDynamoDbTableGlobalSecondaryIndexList = Array<AwsDynamoDbTableGlobalSecondaryIndex>;
export interface AwsDynamoDbTableKeySchema {
  AttributeName?: string;
  KeyType?: string;
}
export type AwsDynamoDbTableKeySchemaList = Array<AwsDynamoDbTableKeySchema>;
export interface AwsDynamoDbTableLocalSecondaryIndex {
  IndexArn?: string;
  IndexName?: string;
  KeySchema?: Array<AwsDynamoDbTableKeySchema>;
  Projection?: AwsDynamoDbTableProjection;
}
export type AwsDynamoDbTableLocalSecondaryIndexList = Array<AwsDynamoDbTableLocalSecondaryIndex>;
export interface AwsDynamoDbTableProjection {
  NonKeyAttributes?: Array<string>;
  ProjectionType?: string;
}
export interface AwsDynamoDbTableProvisionedThroughput {
  LastDecreaseDateTime?: string;
  LastIncreaseDateTime?: string;
  NumberOfDecreasesToday?: number;
  ReadCapacityUnits?: number;
  WriteCapacityUnits?: number;
}
export interface AwsDynamoDbTableProvisionedThroughputOverride {
  ReadCapacityUnits?: number;
}
export interface AwsDynamoDbTableReplica {
  GlobalSecondaryIndexes?: Array<AwsDynamoDbTableReplicaGlobalSecondaryIndex>;
  KmsMasterKeyId?: string;
  ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
  RegionName?: string;
  ReplicaStatus?: string;
  ReplicaStatusDescription?: string;
}
export interface AwsDynamoDbTableReplicaGlobalSecondaryIndex {
  IndexName?: string;
  ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
}
export type AwsDynamoDbTableReplicaGlobalSecondaryIndexList = Array<AwsDynamoDbTableReplicaGlobalSecondaryIndex>;
export type AwsDynamoDbTableReplicaList = Array<AwsDynamoDbTableReplica>;
export interface AwsDynamoDbTableRestoreSummary {
  SourceBackupArn?: string;
  SourceTableArn?: string;
  RestoreDateTime?: string;
  RestoreInProgress?: boolean;
}
export interface AwsDynamoDbTableSseDescription {
  InaccessibleEncryptionDateTime?: string;
  Status?: string;
  SseType?: string;
  KmsMasterKeyArn?: string;
}
export interface AwsDynamoDbTableStreamSpecification {
  StreamEnabled?: boolean;
  StreamViewType?: string;
}
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails {
  DirectoryId?: string;
}
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsDetails {
  Type?: string;
  ActiveDirectory?: AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails;
  MutualAuthentication?: AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails;
  FederatedAuthentication?: AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails;
}
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails {
  SamlProviderArn?: string;
  SelfServiceSamlProviderArn?: string;
}
export type AwsEc2ClientVpnEndpointAuthenticationOptionsList = Array<AwsEc2ClientVpnEndpointAuthenticationOptionsDetails>;
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails {
  ClientRootCertificateChain?: string;
}
export interface AwsEc2ClientVpnEndpointClientConnectOptionsDetails {
  Enabled?: boolean;
  LambdaFunctionArn?: string;
  Status?: AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails;
}
export interface AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails {
  Code?: string;
  Message?: string;
}
export interface AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails {
  Enabled?: boolean;
  BannerText?: string;
}
export interface AwsEc2ClientVpnEndpointConnectionLogOptionsDetails {
  Enabled?: boolean;
  CloudwatchLogGroup?: string;
  CloudwatchLogStream?: string;
}
export interface AwsEc2ClientVpnEndpointDetails {
  ClientVpnEndpointId?: string;
  Description?: string;
  ClientCidrBlock?: string;
  DnsServer?: Array<string>;
  SplitTunnel?: boolean;
  TransportProtocol?: string;
  VpnPort?: number;
  ServerCertificateArn?: string;
  AuthenticationOptions?: Array<AwsEc2ClientVpnEndpointAuthenticationOptionsDetails>;
  ConnectionLogOptions?: AwsEc2ClientVpnEndpointConnectionLogOptionsDetails;
  SecurityGroupIdSet?: Array<string>;
  VpcId?: string;
  SelfServicePortalUrl?: string;
  ClientConnectOptions?: AwsEc2ClientVpnEndpointClientConnectOptionsDetails;
  SessionTimeoutHours?: number;
  ClientLoginBannerOptions?: AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails;
}
export interface AwsEc2EipDetails {
  InstanceId?: string;
  PublicIp?: string;
  AllocationId?: string;
  AssociationId?: string;
  Domain?: string;
  PublicIpv4Pool?: string;
  NetworkBorderGroup?: string;
  NetworkInterfaceId?: string;
  NetworkInterfaceOwnerId?: string;
  PrivateIpAddress?: string;
}
export interface AwsEc2InstanceDetails {
  Type?: string;
  ImageId?: string;
  IpV4Addresses?: Array<string>;
  IpV6Addresses?: Array<string>;
  KeyName?: string;
  IamInstanceProfileArn?: string;
  VpcId?: string;
  SubnetId?: string;
  LaunchedAt?: string;
  NetworkInterfaces?: Array<AwsEc2InstanceNetworkInterfacesDetails>;
  VirtualizationType?: string;
  MetadataOptions?: AwsEc2InstanceMetadataOptions;
  Monitoring?: AwsEc2InstanceMonitoringDetails;
}
export interface AwsEc2InstanceMetadataOptions {
  HttpEndpoint?: string;
  HttpProtocolIpv6?: string;
  HttpPutResponseHopLimit?: number;
  HttpTokens?: string;
  InstanceMetadataTags?: string;
}
export interface AwsEc2InstanceMonitoringDetails {
  State?: string;
}
export interface AwsEc2InstanceNetworkInterfacesDetails {
  NetworkInterfaceId?: string;
}
export type AwsEc2InstanceNetworkInterfacesList = Array<AwsEc2InstanceNetworkInterfacesDetails>;
export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails {
  DeviceName?: string;
  Ebs?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails;
  NoDevice?: string;
  VirtualName?: string;
}
export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails {
  DeleteOnTermination?: boolean;
  Encrypted?: boolean;
  Iops?: number;
  KmsKeyId?: string;
  SnapshotId?: string;
  Throughput?: number;
  VolumeSize?: number;
  VolumeType?: string;
}
export type AwsEc2LaunchTemplateDataBlockDeviceMappingSetList = Array<AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails>;
export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails {
  CapacityReservationId?: string;
  CapacityReservationResourceGroupArn?: string;
}
export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails {
  CapacityReservationPreference?: string;
  CapacityReservationTarget?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails;
}
export interface AwsEc2LaunchTemplateDataCpuOptionsDetails {
  CoreCount?: number;
  ThreadsPerCore?: number;
}
export interface AwsEc2LaunchTemplateDataCreditSpecificationDetails {
  CpuCredits?: string;
}
export interface AwsEc2LaunchTemplateDataDetails {
  BlockDeviceMappingSet?: Array<AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails>;
  CapacityReservationSpecification?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails;
  CpuOptions?: AwsEc2LaunchTemplateDataCpuOptionsDetails;
  CreditSpecification?: AwsEc2LaunchTemplateDataCreditSpecificationDetails;
  DisableApiStop?: boolean;
  DisableApiTermination?: boolean;
  EbsOptimized?: boolean;
  ElasticGpuSpecificationSet?: Array<AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails>;
  ElasticInferenceAcceleratorSet?: Array<AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails>;
  EnclaveOptions?: AwsEc2LaunchTemplateDataEnclaveOptionsDetails;
  HibernationOptions?: AwsEc2LaunchTemplateDataHibernationOptionsDetails;
  IamInstanceProfile?: AwsEc2LaunchTemplateDataIamInstanceProfileDetails;
  ImageId?: string;
  InstanceInitiatedShutdownBehavior?: string;
  InstanceMarketOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails;
  InstanceRequirements?: AwsEc2LaunchTemplateDataInstanceRequirementsDetails;
  InstanceType?: string;
  KernelId?: string;
  KeyName?: string;
  LicenseSet?: Array<AwsEc2LaunchTemplateDataLicenseSetDetails>;
  MaintenanceOptions?: AwsEc2LaunchTemplateDataMaintenanceOptionsDetails;
  MetadataOptions?: AwsEc2LaunchTemplateDataMetadataOptionsDetails;
  Monitoring?: AwsEc2LaunchTemplateDataMonitoringDetails;
  NetworkInterfaceSet?: Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails>;
  Placement?: AwsEc2LaunchTemplateDataPlacementDetails;
  PrivateDnsNameOptions?: AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails;
  RamDiskId?: string;
  SecurityGroupIdSet?: Array<string>;
  SecurityGroupSet?: Array<string>;
  UserData?: string;
}
export interface AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails {
  Type?: string;
}
export type AwsEc2LaunchTemplateDataElasticGpuSpecificationSetList = Array<AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails>;
export interface AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails {
  Count?: number;
  Type?: string;
}
export type AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetList = Array<AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails>;
export interface AwsEc2LaunchTemplateDataEnclaveOptionsDetails {
  Enabled?: boolean;
}
export interface AwsEc2LaunchTemplateDataHibernationOptionsDetails {
  Configured?: boolean;
}
export interface AwsEc2LaunchTemplateDataIamInstanceProfileDetails {
  Arn?: string;
  Name?: string;
}
export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails {
  MarketType?: string;
  SpotOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails;
}
export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails {
  BlockDurationMinutes?: number;
  InstanceInterruptionBehavior?: string;
  MaxPrice?: string;
  SpotInstanceType?: string;
  ValidUntil?: string;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsDetails {
  AcceleratorCount?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails;
  AcceleratorManufacturers?: Array<string>;
  AcceleratorNames?: Array<string>;
  AcceleratorTotalMemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails;
  AcceleratorTypes?: Array<string>;
  BareMetal?: string;
  BaselineEbsBandwidthMbps?: AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails;
  BurstablePerformance?: string;
  CpuManufacturers?: Array<string>;
  ExcludedInstanceTypes?: Array<string>;
  InstanceGenerations?: Array<string>;
  LocalStorage?: string;
  LocalStorageTypes?: Array<string>;
  MemoryGiBPerVCpu?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails;
  MemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails;
  NetworkInterfaceCount?: AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  RequireHibernateSupport?: boolean;
  SpotMaxPricePercentageOverLowestPrice?: number;
  TotalLocalStorageGB?: AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails;
  VCpuCount?: AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataLicenseSetDetails {
  LicenseConfigurationArn?: string;
}
export type AwsEc2LaunchTemplateDataLicenseSetList = Array<AwsEc2LaunchTemplateDataLicenseSetDetails>;
export interface AwsEc2LaunchTemplateDataMaintenanceOptionsDetails {
  AutoRecovery?: string;
}
export interface AwsEc2LaunchTemplateDataMetadataOptionsDetails {
  HttpEndpoint?: string;
  HttpProtocolIpv6?: string;
  HttpTokens?: string;
  HttpPutResponseHopLimit?: number;
  InstanceMetadataTags?: string;
}
export interface AwsEc2LaunchTemplateDataMonitoringDetails {
  Enabled?: boolean;
}
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails {
  AssociateCarrierIpAddress?: boolean;
  AssociatePublicIpAddress?: boolean;
  DeleteOnTermination?: boolean;
  Description?: string;
  DeviceIndex?: number;
  Groups?: Array<string>;
  InterfaceType?: string;
  Ipv4PrefixCount?: number;
  Ipv4Prefixes?: Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails>;
  Ipv6AddressCount?: number;
  Ipv6Addresses?: Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails>;
  Ipv6PrefixCount?: number;
  Ipv6Prefixes?: Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails>;
  NetworkCardIndex?: number;
  NetworkInterfaceId?: string;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails>;
  SecondaryPrivateIpAddressCount?: number;
  SubnetId?: string;
}
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails {
  Ipv4Prefix?: string;
}
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesList = Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails>;
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails {
  Ipv6Address?: string;
}
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesList = Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails>;
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails {
  Ipv6Prefix?: string;
}
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesList = Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails>;
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetList = Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails>;
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails {
  Primary?: boolean;
  PrivateIpAddress?: string;
}
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesList = Array<AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails>;
export interface AwsEc2LaunchTemplateDataPlacementDetails {
  Affinity?: string;
  AvailabilityZone?: string;
  GroupName?: string;
  HostId?: string;
  HostResourceGroupArn?: string;
  PartitionNumber?: number;
  SpreadDomain?: string;
  Tenancy?: string;
}
export interface AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails {
  EnableResourceNameDnsAAAARecord?: boolean;
  EnableResourceNameDnsARecord?: boolean;
  HostnameType?: string;
}
export interface AwsEc2LaunchTemplateDetails {
  LaunchTemplateName?: string;
  Id?: string;
  LaunchTemplateData?: AwsEc2LaunchTemplateDataDetails;
  DefaultVersionNumber?: number;
  LatestVersionNumber?: number;
}
export interface AwsEc2NetworkAclAssociation {
  NetworkAclAssociationId?: string;
  NetworkAclId?: string;
  SubnetId?: string;
}
export type AwsEc2NetworkAclAssociationList = Array<AwsEc2NetworkAclAssociation>;
export interface AwsEc2NetworkAclDetails {
  IsDefault?: boolean;
  NetworkAclId?: string;
  OwnerId?: string;
  VpcId?: string;
  Associations?: Array<AwsEc2NetworkAclAssociation>;
  Entries?: Array<AwsEc2NetworkAclEntry>;
}
export interface AwsEc2NetworkAclEntry {
  CidrBlock?: string;
  Egress?: boolean;
  IcmpTypeCode?: IcmpTypeCode;
  Ipv6CidrBlock?: string;
  PortRange?: PortRangeFromTo;
  Protocol?: string;
  RuleAction?: string;
  RuleNumber?: number;
}
export type AwsEc2NetworkAclEntryList = Array<AwsEc2NetworkAclEntry>;
export interface AwsEc2NetworkInterfaceAttachment {
  AttachTime?: string;
  AttachmentId?: string;
  DeleteOnTermination?: boolean;
  DeviceIndex?: number;
  InstanceId?: string;
  InstanceOwnerId?: string;
  Status?: string;
}
export interface AwsEc2NetworkInterfaceDetails {
  Attachment?: AwsEc2NetworkInterfaceAttachment;
  NetworkInterfaceId?: string;
  SecurityGroups?: Array<AwsEc2NetworkInterfaceSecurityGroup>;
  SourceDestCheck?: boolean;
  IpV6Addresses?: Array<AwsEc2NetworkInterfaceIpV6AddressDetail>;
  PrivateIpAddresses?: Array<AwsEc2NetworkInterfacePrivateIpAddressDetail>;
  PublicDnsName?: string;
  PublicIp?: string;
}
export interface AwsEc2NetworkInterfaceIpV6AddressDetail {
  IpV6Address?: string;
}
export type AwsEc2NetworkInterfaceIpV6AddressList = Array<AwsEc2NetworkInterfaceIpV6AddressDetail>;
export interface AwsEc2NetworkInterfacePrivateIpAddressDetail {
  PrivateIpAddress?: string;
  PrivateDnsName?: string;
}
export type AwsEc2NetworkInterfacePrivateIpAddressList = Array<AwsEc2NetworkInterfacePrivateIpAddressDetail>;
export interface AwsEc2NetworkInterfaceSecurityGroup {
  GroupName?: string;
  GroupId?: string;
}
export type AwsEc2NetworkInterfaceSecurityGroupList = Array<AwsEc2NetworkInterfaceSecurityGroup>;
export interface AwsEc2RouteTableDetails {
  AssociationSet?: Array<AssociationSetDetails>;
  OwnerId?: string;
  PropagatingVgwSet?: Array<PropagatingVgwSetDetails>;
  RouteTableId?: string;
  RouteSet?: Array<RouteSetDetails>;
  VpcId?: string;
}
export interface AwsEc2SecurityGroupDetails {
  GroupName?: string;
  GroupId?: string;
  OwnerId?: string;
  VpcId?: string;
  IpPermissions?: Array<AwsEc2SecurityGroupIpPermission>;
  IpPermissionsEgress?: Array<AwsEc2SecurityGroupIpPermission>;
}
export interface AwsEc2SecurityGroupIpPermission {
  IpProtocol?: string;
  FromPort?: number;
  ToPort?: number;
  UserIdGroupPairs?: Array<AwsEc2SecurityGroupUserIdGroupPair>;
  IpRanges?: Array<AwsEc2SecurityGroupIpRange>;
  Ipv6Ranges?: Array<AwsEc2SecurityGroupIpv6Range>;
  PrefixListIds?: Array<AwsEc2SecurityGroupPrefixListId>;
}
export type AwsEc2SecurityGroupIpPermissionList = Array<AwsEc2SecurityGroupIpPermission>;
export interface AwsEc2SecurityGroupIpRange {
  CidrIp?: string;
}
export type AwsEc2SecurityGroupIpRangeList = Array<AwsEc2SecurityGroupIpRange>;
export interface AwsEc2SecurityGroupIpv6Range {
  CidrIpv6?: string;
}
export type AwsEc2SecurityGroupIpv6RangeList = Array<AwsEc2SecurityGroupIpv6Range>;
export interface AwsEc2SecurityGroupPrefixListId {
  PrefixListId?: string;
}
export type AwsEc2SecurityGroupPrefixListIdList = Array<AwsEc2SecurityGroupPrefixListId>;
export interface AwsEc2SecurityGroupUserIdGroupPair {
  GroupId?: string;
  GroupName?: string;
  PeeringStatus?: string;
  UserId?: string;
  VpcId?: string;
  VpcPeeringConnectionId?: string;
}
export type AwsEc2SecurityGroupUserIdGroupPairList = Array<AwsEc2SecurityGroupUserIdGroupPair>;
export interface AwsEc2SubnetDetails {
  AssignIpv6AddressOnCreation?: boolean;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  AvailableIpAddressCount?: number;
  CidrBlock?: string;
  DefaultForAz?: boolean;
  MapPublicIpOnLaunch?: boolean;
  OwnerId?: string;
  State?: string;
  SubnetArn?: string;
  SubnetId?: string;
  VpcId?: string;
  Ipv6CidrBlockAssociationSet?: Array<Ipv6CidrBlockAssociation>;
}
export interface AwsEc2TransitGatewayDetails {
  Id?: string;
  Description?: string;
  DefaultRouteTablePropagation?: string;
  AutoAcceptSharedAttachments?: string;
  DefaultRouteTableAssociation?: string;
  TransitGatewayCidrBlocks?: Array<string>;
  AssociationDefaultRouteTableId?: string;
  PropagationDefaultRouteTableId?: string;
  VpnEcmpSupport?: string;
  DnsSupport?: string;
  MulticastSupport?: string;
  AmazonSideAsn?: number;
}
export interface AwsEc2VolumeAttachment {
  AttachTime?: string;
  DeleteOnTermination?: boolean;
  InstanceId?: string;
  Status?: string;
}
export type AwsEc2VolumeAttachmentList = Array<AwsEc2VolumeAttachment>;
export interface AwsEc2VolumeDetails {
  CreateTime?: string;
  DeviceName?: string;
  Encrypted?: boolean;
  Size?: number;
  SnapshotId?: string;
  Status?: string;
  KmsKeyId?: string;
  Attachments?: Array<AwsEc2VolumeAttachment>;
  VolumeId?: string;
  VolumeType?: string;
  VolumeScanStatus?: string;
}
export interface AwsEc2VpcDetails {
  CidrBlockAssociationSet?: Array<CidrBlockAssociation>;
  Ipv6CidrBlockAssociationSet?: Array<Ipv6CidrBlockAssociation>;
  DhcpOptionsId?: string;
  State?: string;
}
export interface AwsEc2VpcEndpointServiceDetails {
  AcceptanceRequired?: boolean;
  AvailabilityZones?: Array<string>;
  BaseEndpointDnsNames?: Array<string>;
  ManagesVpcEndpoints?: boolean;
  GatewayLoadBalancerArns?: Array<string>;
  NetworkLoadBalancerArns?: Array<string>;
  PrivateDnsName?: string;
  ServiceId?: string;
  ServiceName?: string;
  ServiceState?: string;
  ServiceType?: Array<AwsEc2VpcEndpointServiceServiceTypeDetails>;
}
export interface AwsEc2VpcEndpointServiceServiceTypeDetails {
  ServiceType?: string;
}
export type AwsEc2VpcEndpointServiceServiceTypeList = Array<AwsEc2VpcEndpointServiceServiceTypeDetails>;
export interface AwsEc2VpcPeeringConnectionDetails {
  AccepterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails;
  ExpirationTime?: string;
  RequesterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails;
  Status?: AwsEc2VpcPeeringConnectionStatusDetails;
  VpcPeeringConnectionId?: string;
}
export interface AwsEc2VpcPeeringConnectionStatusDetails {
  Code?: string;
  Message?: string;
}
export interface AwsEc2VpcPeeringConnectionVpcInfoDetails {
  CidrBlock?: string;
  CidrBlockSet?: Array<VpcInfoCidrBlockSetDetails>;
  Ipv6CidrBlockSet?: Array<VpcInfoIpv6CidrBlockSetDetails>;
  OwnerId?: string;
  PeeringOptions?: VpcInfoPeeringOptionsDetails;
  Region?: string;
  VpcId?: string;
}
export interface AwsEc2VpnConnectionDetails {
  VpnConnectionId?: string;
  State?: string;
  CustomerGatewayId?: string;
  CustomerGatewayConfiguration?: string;
  Type?: string;
  VpnGatewayId?: string;
  Category?: string;
  VgwTelemetry?: Array<AwsEc2VpnConnectionVgwTelemetryDetails>;
  Options?: AwsEc2VpnConnectionOptionsDetails;
  Routes?: Array<AwsEc2VpnConnectionRoutesDetails>;
  TransitGatewayId?: string;
}
export interface AwsEc2VpnConnectionOptionsDetails {
  StaticRoutesOnly?: boolean;
  TunnelOptions?: Array<AwsEc2VpnConnectionOptionsTunnelOptionsDetails>;
}
export interface AwsEc2VpnConnectionOptionsTunnelOptionsDetails {
  DpdTimeoutSeconds?: number;
  IkeVersions?: Array<string>;
  OutsideIpAddress?: string;
  Phase1DhGroupNumbers?: Array<number>;
  Phase1EncryptionAlgorithms?: Array<string>;
  Phase1IntegrityAlgorithms?: Array<string>;
  Phase1LifetimeSeconds?: number;
  Phase2DhGroupNumbers?: Array<number>;
  Phase2EncryptionAlgorithms?: Array<string>;
  Phase2IntegrityAlgorithms?: Array<string>;
  Phase2LifetimeSeconds?: number;
  PreSharedKey?: string;
  RekeyFuzzPercentage?: number;
  RekeyMarginTimeSeconds?: number;
  ReplayWindowSize?: number;
  TunnelInsideCidr?: string;
}
export type AwsEc2VpnConnectionOptionsTunnelOptionsList = Array<AwsEc2VpnConnectionOptionsTunnelOptionsDetails>;
export interface AwsEc2VpnConnectionRoutesDetails {
  DestinationCidrBlock?: string;
  State?: string;
}
export type AwsEc2VpnConnectionRoutesList = Array<AwsEc2VpnConnectionRoutesDetails>;
export interface AwsEc2VpnConnectionVgwTelemetryDetails {
  AcceptedRouteCount?: number;
  CertificateArn?: string;
  LastStatusChange?: string;
  OutsideIpAddress?: string;
  Status?: string;
  StatusMessage?: string;
}
export type AwsEc2VpnConnectionVgwTelemetryList = Array<AwsEc2VpnConnectionVgwTelemetryDetails>;
export interface AwsEcrContainerImageDetails {
  RegistryId?: string;
  RepositoryName?: string;
  Architecture?: string;
  ImageDigest?: string;
  ImageTags?: Array<string>;
  ImagePublishedAt?: string;
}
export interface AwsEcrRepositoryDetails {
  Arn?: string;
  ImageScanningConfiguration?: AwsEcrRepositoryImageScanningConfigurationDetails;
  ImageTagMutability?: string;
  LifecyclePolicy?: AwsEcrRepositoryLifecyclePolicyDetails;
  RepositoryName?: string;
  RepositoryPolicyText?: string;
}
export interface AwsEcrRepositoryImageScanningConfigurationDetails {
  ScanOnPush?: boolean;
}
export interface AwsEcrRepositoryLifecyclePolicyDetails {
  LifecyclePolicyText?: string;
  RegistryId?: string;
}
export interface AwsEcsClusterClusterSettingsDetails {
  Name?: string;
  Value?: string;
}
export type AwsEcsClusterClusterSettingsList = Array<AwsEcsClusterClusterSettingsDetails>;
export interface AwsEcsClusterConfigurationDetails {
  ExecuteCommandConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationDetails;
}
export interface AwsEcsClusterConfigurationExecuteCommandConfigurationDetails {
  KmsKeyId?: string;
  LogConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails;
  Logging?: string;
}
export interface AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails {
  CloudWatchEncryptionEnabled?: boolean;
  CloudWatchLogGroupName?: string;
  S3BucketName?: string;
  S3EncryptionEnabled?: boolean;
  S3KeyPrefix?: string;
}
export interface AwsEcsClusterDefaultCapacityProviderStrategyDetails {
  Base?: number;
  CapacityProvider?: string;
  Weight?: number;
}
export type AwsEcsClusterDefaultCapacityProviderStrategyList = Array<AwsEcsClusterDefaultCapacityProviderStrategyDetails>;
export interface AwsEcsClusterDetails {
  ClusterArn?: string;
  ActiveServicesCount?: number;
  CapacityProviders?: Array<string>;
  ClusterSettings?: Array<AwsEcsClusterClusterSettingsDetails>;
  Configuration?: AwsEcsClusterConfigurationDetails;
  DefaultCapacityProviderStrategy?: Array<AwsEcsClusterDefaultCapacityProviderStrategyDetails>;
  ClusterName?: string;
  RegisteredContainerInstancesCount?: number;
  RunningTasksCount?: number;
  Status?: string;
}
export interface AwsEcsContainerDetails {
  Name?: string;
  Image?: string;
  MountPoints?: Array<AwsMountPoint>;
  Privileged?: boolean;
}
export type AwsEcsContainerDetailsList = Array<AwsEcsContainerDetails>;
export interface AwsEcsServiceCapacityProviderStrategyDetails {
  Base?: number;
  CapacityProvider?: string;
  Weight?: number;
}
export type AwsEcsServiceCapacityProviderStrategyList = Array<AwsEcsServiceCapacityProviderStrategyDetails>;
export interface AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails {
  Enable?: boolean;
  Rollback?: boolean;
}
export interface AwsEcsServiceDeploymentConfigurationDetails {
  DeploymentCircuitBreaker?: AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails;
  MaximumPercent?: number;
  MinimumHealthyPercent?: number;
}
export interface AwsEcsServiceDeploymentControllerDetails {
  Type?: string;
}
export interface AwsEcsServiceDetails {
  CapacityProviderStrategy?: Array<AwsEcsServiceCapacityProviderStrategyDetails>;
  Cluster?: string;
  DeploymentConfiguration?: AwsEcsServiceDeploymentConfigurationDetails;
  DeploymentController?: AwsEcsServiceDeploymentControllerDetails;
  DesiredCount?: number;
  EnableEcsManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  HealthCheckGracePeriodSeconds?: number;
  LaunchType?: string;
  LoadBalancers?: Array<AwsEcsServiceLoadBalancersDetails>;
  Name?: string;
  NetworkConfiguration?: AwsEcsServiceNetworkConfigurationDetails;
  PlacementConstraints?: Array<AwsEcsServicePlacementConstraintsDetails>;
  PlacementStrategies?: Array<AwsEcsServicePlacementStrategiesDetails>;
  PlatformVersion?: string;
  PropagateTags?: string;
  Role?: string;
  SchedulingStrategy?: string;
  ServiceArn?: string;
  ServiceName?: string;
  ServiceRegistries?: Array<AwsEcsServiceServiceRegistriesDetails>;
  TaskDefinition?: string;
}
export interface AwsEcsServiceLoadBalancersDetails {
  ContainerName?: string;
  ContainerPort?: number;
  LoadBalancerName?: string;
  TargetGroupArn?: string;
}
export type AwsEcsServiceLoadBalancersList = Array<AwsEcsServiceLoadBalancersDetails>;
export interface AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails {
  AssignPublicIp?: string;
  SecurityGroups?: Array<string>;
  Subnets?: Array<string>;
}
export interface AwsEcsServiceNetworkConfigurationDetails {
  AwsVpcConfiguration?: AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails;
}
export interface AwsEcsServicePlacementConstraintsDetails {
  Expression?: string;
  Type?: string;
}
export type AwsEcsServicePlacementConstraintsList = Array<AwsEcsServicePlacementConstraintsDetails>;
export interface AwsEcsServicePlacementStrategiesDetails {
  Field?: string;
  Type?: string;
}
export type AwsEcsServicePlacementStrategiesList = Array<AwsEcsServicePlacementStrategiesDetails>;
export interface AwsEcsServiceServiceRegistriesDetails {
  ContainerName?: string;
  ContainerPort?: number;
  Port?: number;
  RegistryArn?: string;
}
export type AwsEcsServiceServiceRegistriesList = Array<AwsEcsServiceServiceRegistriesDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails {
  Condition?: string;
  ContainerName?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsDependsOnList = Array<AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsDetails {
  Command?: Array<string>;
  Cpu?: number;
  DependsOn?: Array<AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails>;
  DisableNetworking?: boolean;
  DnsSearchDomains?: Array<string>;
  DnsServers?: Array<string>;
  DockerLabels?: Record<string, string>;
  DockerSecurityOptions?: Array<string>;
  EntryPoint?: Array<string>;
  Environment?: Array<AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails>;
  EnvironmentFiles?: Array<AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails>;
  Essential?: boolean;
  ExtraHosts?: Array<AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails>;
  FirelensConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails;
  HealthCheck?: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails;
  Hostname?: string;
  Image?: string;
  Interactive?: boolean;
  Links?: Array<string>;
  LinuxParameters?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails;
  LogConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails;
  Memory?: number;
  MemoryReservation?: number;
  MountPoints?: Array<AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails>;
  Name?: string;
  PortMappings?: Array<AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails>;
  Privileged?: boolean;
  PseudoTerminal?: boolean;
  ReadonlyRootFilesystem?: boolean;
  RepositoryCredentials?: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails;
  ResourceRequirements?: Array<AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails>;
  Secrets?: Array<AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails>;
  StartTimeout?: number;
  StopTimeout?: number;
  SystemControls?: Array<AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails>;
  Ulimits?: Array<AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails>;
  User?: string;
  VolumesFrom?: Array<AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails>;
  WorkingDirectory?: string;
}
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails {
  Name?: string;
  Value?: string;
}
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails {
  Type?: string;
  Value?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList = Array<AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList = Array<AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails {
  Hostname?: string;
  IpAddress?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList = Array<AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails {
  Options?: Record<string, string>;
  Type?: string;
}
export interface AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails {
  Command?: Array<string>;
  Interval?: number;
  Retries?: number;
  StartPeriod?: number;
  Timeout?: number;
}
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails {
  Add?: Array<string>;
  Drop?: Array<string>;
}
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails {
  Capabilities?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails;
  Devices?: Array<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails>;
  InitProcessEnabled?: boolean;
  MaxSwap?: number;
  SharedMemorySize?: number;
  Swappiness?: number;
  Tmpfs?: Array<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails>;
}
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails {
  ContainerPath?: string;
  HostPath?: string;
  Permissions?: Array<string>;
}
export type AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList = Array<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
  ContainerPath?: string;
  MountOptions?: Array<string>;
  Size?: number;
}
export type AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList = Array<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsList = Array<AwsEcsTaskDefinitionContainerDefinitionsDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails {
  LogDriver?: string;
  Options?: Record<string, string>;
  SecretOptions?: Array<AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails>;
}
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails {
  Name?: string;
  ValueFrom?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList = Array<AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails {
  ContainerPath?: string;
  ReadOnly?: boolean;
  SourceVolume?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsMountPointsList = Array<AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails {
  ContainerPort?: number;
  HostPort?: number;
  Protocol?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList = Array<AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
  CredentialsParameter?: string;
}
export interface AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
  Type?: string;
  Value?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList = Array<AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails {
  Name?: string;
  ValueFrom?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsSecretsList = Array<AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails {
  Namespace?: string;
  Value?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList = Array<AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
  HardLimit?: number;
  Name?: string;
  SoftLimit?: number;
}
export type AwsEcsTaskDefinitionContainerDefinitionsUlimitsList = Array<AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails {
  ReadOnly?: boolean;
  SourceContainer?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList = Array<AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails>;
export interface AwsEcsTaskDefinitionDetails {
  ContainerDefinitions?: Array<AwsEcsTaskDefinitionContainerDefinitionsDetails>;
  Cpu?: string;
  ExecutionRoleArn?: string;
  Family?: string;
  InferenceAccelerators?: Array<AwsEcsTaskDefinitionInferenceAcceleratorsDetails>;
  IpcMode?: string;
  Memory?: string;
  NetworkMode?: string;
  PidMode?: string;
  PlacementConstraints?: Array<AwsEcsTaskDefinitionPlacementConstraintsDetails>;
  ProxyConfiguration?: AwsEcsTaskDefinitionProxyConfigurationDetails;
  RequiresCompatibilities?: Array<string>;
  TaskRoleArn?: string;
  Volumes?: Array<AwsEcsTaskDefinitionVolumesDetails>;
  Status?: string;
}
export interface AwsEcsTaskDefinitionInferenceAcceleratorsDetails {
  DeviceName?: string;
  DeviceType?: string;
}
export type AwsEcsTaskDefinitionInferenceAcceleratorsList = Array<AwsEcsTaskDefinitionInferenceAcceleratorsDetails>;
export interface AwsEcsTaskDefinitionPlacementConstraintsDetails {
  Expression?: string;
  Type?: string;
}
export type AwsEcsTaskDefinitionPlacementConstraintsList = Array<AwsEcsTaskDefinitionPlacementConstraintsDetails>;
export interface AwsEcsTaskDefinitionProxyConfigurationDetails {
  ContainerName?: string;
  ProxyConfigurationProperties?: Array<AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails>;
  Type?: string;
}
export interface AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails {
  Name?: string;
  Value?: string;
}
export type AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList = Array<AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails>;
export interface AwsEcsTaskDefinitionVolumesDetails {
  DockerVolumeConfiguration?: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails;
  EfsVolumeConfiguration?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails;
  Host?: AwsEcsTaskDefinitionVolumesHostDetails;
  Name?: string;
}
export interface AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails {
  Autoprovision?: boolean;
  Driver?: string;
  DriverOpts?: Record<string, string>;
  Labels?: Record<string, string>;
  Scope?: string;
}
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails {
  AccessPointId?: string;
  Iam?: string;
}
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails {
  AuthorizationConfig?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails;
  FilesystemId?: string;
  RootDirectory?: string;
  TransitEncryption?: string;
  TransitEncryptionPort?: number;
}
export interface AwsEcsTaskDefinitionVolumesHostDetails {
  SourcePath?: string;
}
export type AwsEcsTaskDefinitionVolumesList = Array<AwsEcsTaskDefinitionVolumesDetails>;
export interface AwsEcsTaskDetails {
  ClusterArn?: string;
  TaskDefinitionArn?: string;
  Version?: string;
  CreatedAt?: string;
  StartedAt?: string;
  StartedBy?: string;
  Group?: string;
  Volumes?: Array<AwsEcsTaskVolumeDetails>;
  Containers?: Array<AwsEcsContainerDetails>;
}
export interface AwsEcsTaskVolumeDetails {
  Name?: string;
  Host?: AwsEcsTaskVolumeHostDetails;
}
export type AwsEcsTaskVolumeDetailsList = Array<AwsEcsTaskVolumeDetails>;
export interface AwsEcsTaskVolumeHostDetails {
  SourcePath?: string;
}
export interface AwsEfsAccessPointDetails {
  AccessPointId?: string;
  Arn?: string;
  ClientToken?: string;
  FileSystemId?: string;
  PosixUser?: AwsEfsAccessPointPosixUserDetails;
  RootDirectory?: AwsEfsAccessPointRootDirectoryDetails;
}
export interface AwsEfsAccessPointPosixUserDetails {
  Gid?: string;
  SecondaryGids?: Array<string>;
  Uid?: string;
}
export interface AwsEfsAccessPointRootDirectoryCreationInfoDetails {
  OwnerGid?: string;
  OwnerUid?: string;
  Permissions?: string;
}
export interface AwsEfsAccessPointRootDirectoryDetails {
  CreationInfo?: AwsEfsAccessPointRootDirectoryCreationInfoDetails;
  Path?: string;
}
export interface AwsEksClusterDetails {
  Arn?: string;
  CertificateAuthorityData?: string;
  ClusterStatus?: string;
  Endpoint?: string;
  Name?: string;
  ResourcesVpcConfig?: AwsEksClusterResourcesVpcConfigDetails;
  RoleArn?: string;
  Version?: string;
  Logging?: AwsEksClusterLoggingDetails;
}
export interface AwsEksClusterLoggingClusterLoggingDetails {
  Enabled?: boolean;
  Types?: Array<string>;
}
export type AwsEksClusterLoggingClusterLoggingList = Array<AwsEksClusterLoggingClusterLoggingDetails>;
export interface AwsEksClusterLoggingDetails {
  ClusterLogging?: Array<AwsEksClusterLoggingClusterLoggingDetails>;
}
export interface AwsEksClusterResourcesVpcConfigDetails {
  SecurityGroupIds?: Array<string>;
  SubnetIds?: Array<string>;
  EndpointPublicAccess?: boolean;
}
export interface AwsElasticBeanstalkEnvironmentDetails {
  ApplicationName?: string;
  Cname?: string;
  DateCreated?: string;
  DateUpdated?: string;
  Description?: string;
  EndpointUrl?: string;
  EnvironmentArn?: string;
  EnvironmentId?: string;
  EnvironmentLinks?: Array<AwsElasticBeanstalkEnvironmentEnvironmentLink>;
  EnvironmentName?: string;
  OptionSettings?: Array<AwsElasticBeanstalkEnvironmentOptionSetting>;
  PlatformArn?: string;
  SolutionStackName?: string;
  Status?: string;
  Tier?: AwsElasticBeanstalkEnvironmentTier;
  VersionLabel?: string;
}
export interface AwsElasticBeanstalkEnvironmentEnvironmentLink {
  EnvironmentName?: string;
  LinkName?: string;
}
export type AwsElasticBeanstalkEnvironmentEnvironmentLinks = Array<AwsElasticBeanstalkEnvironmentEnvironmentLink>;
export interface AwsElasticBeanstalkEnvironmentOptionSetting {
  Namespace?: string;
  OptionName?: string;
  ResourceName?: string;
  Value?: string;
}
export type AwsElasticBeanstalkEnvironmentOptionSettings = Array<AwsElasticBeanstalkEnvironmentOptionSetting>;
export interface AwsElasticBeanstalkEnvironmentTier {
  Name?: string;
  Type?: string;
  Version?: string;
}
export interface AwsElasticsearchDomainDetails {
  AccessPolicies?: string;
  DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;
  DomainId?: string;
  DomainName?: string;
  Endpoint?: string;
  Endpoints?: Record<string, string>;
  ElasticsearchVersion?: string;
  ElasticsearchClusterConfig?: AwsElasticsearchDomainElasticsearchClusterConfigDetails;
  EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;
  LogPublishingOptions?: AwsElasticsearchDomainLogPublishingOptions;
  NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;
  ServiceSoftwareOptions?: AwsElasticsearchDomainServiceSoftwareOptions;
  VPCOptions?: AwsElasticsearchDomainVPCOptions;
}
export interface AwsElasticsearchDomainDomainEndpointOptions {
  EnforceHTTPS?: boolean;
  TLSSecurityPolicy?: string;
}
export interface AwsElasticsearchDomainElasticsearchClusterConfigDetails {
  DedicatedMasterCount?: number;
  DedicatedMasterEnabled?: boolean;
  DedicatedMasterType?: string;
  InstanceCount?: number;
  InstanceType?: string;
  ZoneAwarenessConfig?: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails;
  ZoneAwarenessEnabled?: boolean;
}
export interface AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails {
  AvailabilityZoneCount?: number;
}
export interface AwsElasticsearchDomainEncryptionAtRestOptions {
  Enabled?: boolean;
  KmsKeyId?: string;
}
export interface AwsElasticsearchDomainLogPublishingOptions {
  IndexSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
  SearchSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
  AuditLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
}
export interface AwsElasticsearchDomainLogPublishingOptionsLogConfig {
  CloudWatchLogsLogGroupArn?: string;
  Enabled?: boolean;
}
export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
  Enabled?: boolean;
}
export interface AwsElasticsearchDomainServiceSoftwareOptions {
  AutomatedUpdateDate?: string;
  Cancellable?: boolean;
  CurrentVersion?: string;
  Description?: string;
  NewVersion?: string;
  UpdateAvailable?: boolean;
  UpdateStatus?: string;
}
export interface AwsElasticsearchDomainVPCOptions {
  AvailabilityZones?: Array<string>;
  SecurityGroupIds?: Array<string>;
  SubnetIds?: Array<string>;
  VPCId?: string;
}
export type AwsElbAppCookieStickinessPolicies = Array<AwsElbAppCookieStickinessPolicy>;
export interface AwsElbAppCookieStickinessPolicy {
  CookieName?: string;
  PolicyName?: string;
}
export type AwsElbLbCookieStickinessPolicies = Array<AwsElbLbCookieStickinessPolicy>;
export interface AwsElbLbCookieStickinessPolicy {
  CookieExpirationPeriod?: number;
  PolicyName?: string;
}
export interface AwsElbLoadBalancerAccessLog {
  EmitInterval?: number;
  Enabled?: boolean;
  S3BucketName?: string;
  S3BucketPrefix?: string;
}
export interface AwsElbLoadBalancerAdditionalAttribute {
  Key?: string;
  Value?: string;
}
export type AwsElbLoadBalancerAdditionalAttributeList = Array<AwsElbLoadBalancerAdditionalAttribute>;
export interface AwsElbLoadBalancerAttributes {
  AccessLog?: AwsElbLoadBalancerAccessLog;
  ConnectionDraining?: AwsElbLoadBalancerConnectionDraining;
  ConnectionSettings?: AwsElbLoadBalancerConnectionSettings;
  CrossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing;
  AdditionalAttributes?: Array<AwsElbLoadBalancerAdditionalAttribute>;
}
export interface AwsElbLoadBalancerBackendServerDescription {
  InstancePort?: number;
  PolicyNames?: Array<string>;
}
export type AwsElbLoadBalancerBackendServerDescriptions = Array<AwsElbLoadBalancerBackendServerDescription>;
export interface AwsElbLoadBalancerConnectionDraining {
  Enabled?: boolean;
  Timeout?: number;
}
export interface AwsElbLoadBalancerConnectionSettings {
  IdleTimeout?: number;
}
export interface AwsElbLoadBalancerCrossZoneLoadBalancing {
  Enabled?: boolean;
}
export interface AwsElbLoadBalancerDetails {
  AvailabilityZones?: Array<string>;
  BackendServerDescriptions?: Array<AwsElbLoadBalancerBackendServerDescription>;
  CanonicalHostedZoneName?: string;
  CanonicalHostedZoneNameID?: string;
  CreatedTime?: string;
  DnsName?: string;
  HealthCheck?: AwsElbLoadBalancerHealthCheck;
  Instances?: Array<AwsElbLoadBalancerInstance>;
  ListenerDescriptions?: Array<AwsElbLoadBalancerListenerDescription>;
  LoadBalancerAttributes?: AwsElbLoadBalancerAttributes;
  LoadBalancerName?: string;
  Policies?: AwsElbLoadBalancerPolicies;
  Scheme?: string;
  SecurityGroups?: Array<string>;
  SourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup;
  Subnets?: Array<string>;
  VpcId?: string;
}
export interface AwsElbLoadBalancerHealthCheck {
  HealthyThreshold?: number;
  Interval?: number;
  Target?: string;
  Timeout?: number;
  UnhealthyThreshold?: number;
}
export interface AwsElbLoadBalancerInstance {
  InstanceId?: string;
}
export type AwsElbLoadBalancerInstances = Array<AwsElbLoadBalancerInstance>;
export interface AwsElbLoadBalancerListener {
  InstancePort?: number;
  InstanceProtocol?: string;
  LoadBalancerPort?: number;
  Protocol?: string;
  SslCertificateId?: string;
}
export interface AwsElbLoadBalancerListenerDescription {
  Listener?: AwsElbLoadBalancerListener;
  PolicyNames?: Array<string>;
}
export type AwsElbLoadBalancerListenerDescriptions = Array<AwsElbLoadBalancerListenerDescription>;
export interface AwsElbLoadBalancerPolicies {
  AppCookieStickinessPolicies?: Array<AwsElbAppCookieStickinessPolicy>;
  LbCookieStickinessPolicies?: Array<AwsElbLbCookieStickinessPolicy>;
  OtherPolicies?: Array<string>;
}
export interface AwsElbLoadBalancerSourceSecurityGroup {
  GroupName?: string;
  OwnerAlias?: string;
}
export interface AwsElbv2LoadBalancerAttribute {
  Key?: string;
  Value?: string;
}
export type AwsElbv2LoadBalancerAttributes = Array<AwsElbv2LoadBalancerAttribute>;
export interface AwsElbv2LoadBalancerDetails {
  AvailabilityZones?: Array<AvailabilityZone>;
  CanonicalHostedZoneId?: string;
  CreatedTime?: string;
  DNSName?: string;
  IpAddressType?: string;
  Scheme?: string;
  SecurityGroups?: Array<string>;
  State?: LoadBalancerState;
  Type?: string;
  VpcId?: string;
  LoadBalancerAttributes?: Array<AwsElbv2LoadBalancerAttribute>;
}
export interface AwsEventSchemasRegistryDetails {
  Description?: string;
  RegistryArn?: string;
  RegistryName?: string;
}
export interface AwsEventsEndpointDetails {
  Arn?: string;
  Description?: string;
  EndpointId?: string;
  EndpointUrl?: string;
  EventBuses?: Array<AwsEventsEndpointEventBusesDetails>;
  Name?: string;
  ReplicationConfig?: AwsEventsEndpointReplicationConfigDetails;
  RoleArn?: string;
  RoutingConfig?: AwsEventsEndpointRoutingConfigDetails;
  State?: string;
  StateReason?: string;
}
export interface AwsEventsEndpointEventBusesDetails {
  EventBusArn?: string;
}
export type AwsEventsEndpointEventBusesList = Array<AwsEventsEndpointEventBusesDetails>;
export interface AwsEventsEndpointReplicationConfigDetails {
  State?: string;
}
export interface AwsEventsEndpointRoutingConfigDetails {
  FailoverConfig?: AwsEventsEndpointRoutingConfigFailoverConfigDetails;
}
export interface AwsEventsEndpointRoutingConfigFailoverConfigDetails {
  Primary?: AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails;
  Secondary?: AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails;
}
export interface AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails {
  HealthCheck?: string;
}
export interface AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails {
  Route?: string;
}
export interface AwsEventsEventbusDetails {
  Arn?: string;
  Name?: string;
  Policy?: string;
}
export interface AwsGuardDutyDetectorDataSourcesCloudTrailDetails {
  Status?: string;
}
export interface AwsGuardDutyDetectorDataSourcesDetails {
  CloudTrail?: AwsGuardDutyDetectorDataSourcesCloudTrailDetails;
  DnsLogs?: AwsGuardDutyDetectorDataSourcesDnsLogsDetails;
  FlowLogs?: AwsGuardDutyDetectorDataSourcesFlowLogsDetails;
  Kubernetes?: AwsGuardDutyDetectorDataSourcesKubernetesDetails;
  MalwareProtection?: AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails;
  S3Logs?: AwsGuardDutyDetectorDataSourcesS3LogsDetails;
}
export interface AwsGuardDutyDetectorDataSourcesDnsLogsDetails {
  Status?: string;
}
export interface AwsGuardDutyDetectorDataSourcesFlowLogsDetails {
  Status?: string;
}
export interface AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails {
  Status?: string;
}
export interface AwsGuardDutyDetectorDataSourcesKubernetesDetails {
  AuditLogs?: AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails;
}
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails {
  ScanEc2InstanceWithFindings?: AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails;
  ServiceRole?: string;
}
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails {
  EbsVolumes?: AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails;
}
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails {
  Reason?: string;
  Status?: string;
}
export interface AwsGuardDutyDetectorDataSourcesS3LogsDetails {
  Status?: string;
}
export interface AwsGuardDutyDetectorDetails {
  DataSources?: AwsGuardDutyDetectorDataSourcesDetails;
  Features?: Array<AwsGuardDutyDetectorFeaturesDetails>;
  FindingPublishingFrequency?: string;
  ServiceRole?: string;
  Status?: string;
}
export interface AwsGuardDutyDetectorFeaturesDetails {
  Name?: string;
  Status?: string;
}
export type AwsGuardDutyDetectorFeaturesList = Array<AwsGuardDutyDetectorFeaturesDetails>;
export interface AwsIamAccessKeyDetails {
  UserName?: string;
  Status?: AwsIamAccessKeyStatus;
  CreatedAt?: string;
  PrincipalId?: string;
  PrincipalType?: string;
  PrincipalName?: string;
  AccountId?: string;
  AccessKeyId?: string;
  SessionContext?: AwsIamAccessKeySessionContext;
}
export interface AwsIamAccessKeySessionContext {
  Attributes?: AwsIamAccessKeySessionContextAttributes;
  SessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer;
}
export interface AwsIamAccessKeySessionContextAttributes {
  MfaAuthenticated?: boolean;
  CreationDate?: string;
}
export interface AwsIamAccessKeySessionContextSessionIssuer {
  Type?: string;
  PrincipalId?: string;
  Arn?: string;
  AccountId?: string;
  UserName?: string;
}
export type AwsIamAccessKeyStatus = "Active" | "Inactive";
export interface AwsIamAttachedManagedPolicy {
  PolicyName?: string;
  PolicyArn?: string;
}
export type AwsIamAttachedManagedPolicyList = Array<AwsIamAttachedManagedPolicy>;
export interface AwsIamGroupDetails {
  AttachedManagedPolicies?: Array<AwsIamAttachedManagedPolicy>;
  CreateDate?: string;
  GroupId?: string;
  GroupName?: string;
  GroupPolicyList?: Array<AwsIamGroupPolicy>;
  Path?: string;
}
export interface AwsIamGroupPolicy {
  PolicyName?: string;
}
export type AwsIamGroupPolicyList = Array<AwsIamGroupPolicy>;
export interface AwsIamInstanceProfile {
  Arn?: string;
  CreateDate?: string;
  InstanceProfileId?: string;
  InstanceProfileName?: string;
  Path?: string;
  Roles?: Array<AwsIamInstanceProfileRole>;
}
export type AwsIamInstanceProfileList = Array<AwsIamInstanceProfile>;
export interface AwsIamInstanceProfileRole {
  Arn?: string;
  AssumeRolePolicyDocument?: string;
  CreateDate?: string;
  Path?: string;
  RoleId?: string;
  RoleName?: string;
}
export type AwsIamInstanceProfileRoles = Array<AwsIamInstanceProfileRole>;
export interface AwsIamPermissionsBoundary {
  PermissionsBoundaryArn?: string;
  PermissionsBoundaryType?: string;
}
export interface AwsIamPolicyDetails {
  AttachmentCount?: number;
  CreateDate?: string;
  DefaultVersionId?: string;
  Description?: string;
  IsAttachable?: boolean;
  Path?: string;
  PermissionsBoundaryUsageCount?: number;
  PolicyId?: string;
  PolicyName?: string;
  PolicyVersionList?: Array<AwsIamPolicyVersion>;
  UpdateDate?: string;
}
export interface AwsIamPolicyVersion {
  VersionId?: string;
  IsDefaultVersion?: boolean;
  CreateDate?: string;
}
export type AwsIamPolicyVersionList = Array<AwsIamPolicyVersion>;
export type AwsIamRoleAssumeRolePolicyDocument = string;

export interface AwsIamRoleDetails {
  AssumeRolePolicyDocument?: string;
  AttachedManagedPolicies?: Array<AwsIamAttachedManagedPolicy>;
  CreateDate?: string;
  InstanceProfileList?: Array<AwsIamInstanceProfile>;
  PermissionsBoundary?: AwsIamPermissionsBoundary;
  RoleId?: string;
  RoleName?: string;
  RolePolicyList?: Array<AwsIamRolePolicy>;
  MaxSessionDuration?: number;
  Path?: string;
}
export interface AwsIamRolePolicy {
  PolicyName?: string;
}
export type AwsIamRolePolicyList = Array<AwsIamRolePolicy>;
export interface AwsIamUserDetails {
  AttachedManagedPolicies?: Array<AwsIamAttachedManagedPolicy>;
  CreateDate?: string;
  GroupList?: Array<string>;
  Path?: string;
  PermissionsBoundary?: AwsIamPermissionsBoundary;
  UserId?: string;
  UserName?: string;
  UserPolicyList?: Array<AwsIamUserPolicy>;
}
export interface AwsIamUserPolicy {
  PolicyName?: string;
}
export type AwsIamUserPolicyList = Array<AwsIamUserPolicy>;
export interface AwsKinesisStreamDetails {
  Name?: string;
  Arn?: string;
  StreamEncryption?: AwsKinesisStreamStreamEncryptionDetails;
  ShardCount?: number;
  RetentionPeriodHours?: number;
}
export interface AwsKinesisStreamStreamEncryptionDetails {
  EncryptionType?: string;
  KeyId?: string;
}
export interface AwsKmsKeyDetails {
  AWSAccountId?: string;
  CreationDate?: number;
  KeyId?: string;
  KeyManager?: string;
  KeyState?: string;
  Origin?: string;
  Description?: string;
  KeyRotationStatus?: boolean;
}
export interface AwsLambdaFunctionCode {
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
  ZipFile?: string;
}
export interface AwsLambdaFunctionDeadLetterConfig {
  TargetArn?: string;
}
export interface AwsLambdaFunctionDetails {
  Code?: AwsLambdaFunctionCode;
  CodeSha256?: string;
  DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;
  Environment?: AwsLambdaFunctionEnvironment;
  FunctionName?: string;
  Handler?: string;
  KmsKeyArn?: string;
  LastModified?: string;
  Layers?: Array<AwsLambdaFunctionLayer>;
  MasterArn?: string;
  MemorySize?: number;
  RevisionId?: string;
  Role?: string;
  Runtime?: string;
  Timeout?: number;
  TracingConfig?: AwsLambdaFunctionTracingConfig;
  VpcConfig?: AwsLambdaFunctionVpcConfig;
  Version?: string;
  Architectures?: Array<string>;
  PackageType?: string;
}
export interface AwsLambdaFunctionEnvironment {
  Variables?: Record<string, string>;
  Error?: AwsLambdaFunctionEnvironmentError;
}
export interface AwsLambdaFunctionEnvironmentError {
  ErrorCode?: string;
  Message?: string;
}
export interface AwsLambdaFunctionLayer {
  Arn?: string;
  CodeSize?: number;
}
export type AwsLambdaFunctionLayerList = Array<AwsLambdaFunctionLayer>;
export interface AwsLambdaFunctionTracingConfig {
  Mode?: string;
}
export interface AwsLambdaFunctionVpcConfig {
  SecurityGroupIds?: Array<string>;
  SubnetIds?: Array<string>;
  VpcId?: string;
}
export interface AwsLambdaLayerVersionDetails {
  Version?: number;
  CompatibleRuntimes?: Array<string>;
  CreatedDate?: string;
}
export type AwsLambdaLayerVersionNumber = number;

export interface AwsMountPoint {
  SourceVolume?: string;
  ContainerPath?: string;
}
export type AwsMountPointList = Array<AwsMountPoint>;
export interface AwsMskClusterClusterInfoClientAuthenticationDetails {
  Sasl?: AwsMskClusterClusterInfoClientAuthenticationSaslDetails;
  Unauthenticated?: AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails;
  Tls?: AwsMskClusterClusterInfoClientAuthenticationTlsDetails;
}
export interface AwsMskClusterClusterInfoClientAuthenticationSaslDetails {
  Iam?: AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails;
  Scram?: AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails;
}
export interface AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails {
  Enabled?: boolean;
}
export interface AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails {
  Enabled?: boolean;
}
export interface AwsMskClusterClusterInfoClientAuthenticationTlsDetails {
  CertificateAuthorityArnList?: Array<string>;
  Enabled?: boolean;
}
export interface AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails {
  Enabled?: boolean;
}
export interface AwsMskClusterClusterInfoDetails {
  EncryptionInfo?: AwsMskClusterClusterInfoEncryptionInfoDetails;
  CurrentVersion?: string;
  NumberOfBrokerNodes?: number;
  ClusterName?: string;
  ClientAuthentication?: AwsMskClusterClusterInfoClientAuthenticationDetails;
  EnhancedMonitoring?: string;
}
export interface AwsMskClusterClusterInfoEncryptionInfoDetails {
  EncryptionInTransit?: AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails;
  EncryptionAtRest?: AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails;
}
export interface AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails {
  DataVolumeKMSKeyId?: string;
}
export interface AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails {
  InCluster?: boolean;
  ClientBroker?: string;
}
export interface AwsMskClusterDetails {
  ClusterInfo?: AwsMskClusterClusterInfoDetails;
}
export interface AwsNetworkFirewallFirewallDetails {
  DeleteProtection?: boolean;
  Description?: string;
  FirewallArn?: string;
  FirewallId?: string;
  FirewallName?: string;
  FirewallPolicyArn?: string;
  FirewallPolicyChangeProtection?: boolean;
  SubnetChangeProtection?: boolean;
  SubnetMappings?: Array<AwsNetworkFirewallFirewallSubnetMappingsDetails>;
  VpcId?: string;
}
export interface AwsNetworkFirewallFirewallPolicyDetails {
  FirewallPolicy?: FirewallPolicyDetails;
  FirewallPolicyArn?: string;
  FirewallPolicyId?: string;
  FirewallPolicyName?: string;
  Description?: string;
}
export interface AwsNetworkFirewallFirewallSubnetMappingsDetails {
  SubnetId?: string;
}
export type AwsNetworkFirewallFirewallSubnetMappingsList = Array<AwsNetworkFirewallFirewallSubnetMappingsDetails>;
export interface AwsNetworkFirewallRuleGroupDetails {
  Capacity?: number;
  Description?: string;
  RuleGroup?: RuleGroupDetails;
  RuleGroupArn?: string;
  RuleGroupId?: string;
  RuleGroupName?: string;
  Type?: string;
}
export interface AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails {
  Enabled?: boolean;
  InternalUserDatabaseEnabled?: boolean;
  MasterUserOptions?: AwsOpenSearchServiceDomainMasterUserOptionsDetails;
}
export interface AwsOpenSearchServiceDomainClusterConfigDetails {
  InstanceCount?: number;
  WarmEnabled?: boolean;
  WarmCount?: number;
  DedicatedMasterEnabled?: boolean;
  ZoneAwarenessConfig?: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails;
  DedicatedMasterCount?: number;
  InstanceType?: string;
  WarmType?: string;
  ZoneAwarenessEnabled?: boolean;
  DedicatedMasterType?: string;
}
export interface AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails {
  AvailabilityZoneCount?: number;
}
export interface AwsOpenSearchServiceDomainDetails {
  Arn?: string;
  AccessPolicies?: string;
  DomainName?: string;
  Id?: string;
  DomainEndpoint?: string;
  EngineVersion?: string;
  EncryptionAtRestOptions?: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails;
  NodeToNodeEncryptionOptions?: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails;
  ServiceSoftwareOptions?: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails;
  ClusterConfig?: AwsOpenSearchServiceDomainClusterConfigDetails;
  DomainEndpointOptions?: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails;
  VpcOptions?: AwsOpenSearchServiceDomainVpcOptionsDetails;
  LogPublishingOptions?: AwsOpenSearchServiceDomainLogPublishingOptionsDetails;
  DomainEndpoints?: Record<string, string>;
  AdvancedSecurityOptions?: AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails;
}
export interface AwsOpenSearchServiceDomainDomainEndpointOptionsDetails {
  CustomEndpointCertificateArn?: string;
  CustomEndpointEnabled?: boolean;
  EnforceHTTPS?: boolean;
  CustomEndpoint?: string;
  TLSSecurityPolicy?: string;
}
export interface AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails {
  Enabled?: boolean;
  KmsKeyId?: string;
}
export interface AwsOpenSearchServiceDomainLogPublishingOption {
  CloudWatchLogsLogGroupArn?: string;
  Enabled?: boolean;
}
export interface AwsOpenSearchServiceDomainLogPublishingOptionsDetails {
  IndexSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
  SearchSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
  AuditLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
}
export interface AwsOpenSearchServiceDomainMasterUserOptionsDetails {
  MasterUserArn?: string;
  MasterUserName?: string;
  MasterUserPassword?: string;
}
export interface AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails {
  Enabled?: boolean;
}
export interface AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails {
  AutomatedUpdateDate?: string;
  Cancellable?: boolean;
  CurrentVersion?: string;
  Description?: string;
  NewVersion?: string;
  UpdateAvailable?: boolean;
  UpdateStatus?: string;
  OptionalDeployment?: boolean;
}
export interface AwsOpenSearchServiceDomainVpcOptionsDetails {
  SecurityGroupIds?: Array<string>;
  SubnetIds?: Array<string>;
}
export interface AwsRdsDbClusterAssociatedRole {
  RoleArn?: string;
  Status?: string;
}
export type AwsRdsDbClusterAssociatedRoles = Array<AwsRdsDbClusterAssociatedRole>;
export interface AwsRdsDbClusterDetails {
  AllocatedStorage?: number;
  AvailabilityZones?: Array<string>;
  BackupRetentionPeriod?: number;
  DatabaseName?: string;
  Status?: string;
  Endpoint?: string;
  ReaderEndpoint?: string;
  CustomEndpoints?: Array<string>;
  MultiAz?: boolean;
  Engine?: string;
  EngineVersion?: string;
  Port?: number;
  MasterUsername?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  ReadReplicaIdentifiers?: Array<string>;
  VpcSecurityGroups?: Array<AwsRdsDbInstanceVpcSecurityGroup>;
  HostedZoneId?: string;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DbClusterResourceId?: string;
  AssociatedRoles?: Array<AwsRdsDbClusterAssociatedRole>;
  ClusterCreateTime?: string;
  EnabledCloudWatchLogsExports?: Array<string>;
  EngineMode?: string;
  DeletionProtection?: boolean;
  HttpEndpointEnabled?: boolean;
  ActivityStreamStatus?: string;
  CopyTagsToSnapshot?: boolean;
  CrossAccountClone?: boolean;
  DomainMemberships?: Array<AwsRdsDbDomainMembership>;
  DbClusterParameterGroup?: string;
  DbSubnetGroup?: string;
  DbClusterOptionGroupMemberships?: Array<AwsRdsDbClusterOptionGroupMembership>;
  DbClusterIdentifier?: string;
  DbClusterMembers?: Array<AwsRdsDbClusterMember>;
  IamDatabaseAuthenticationEnabled?: boolean;
  AutoMinorVersionUpgrade?: boolean;
}
export interface AwsRdsDbClusterMember {
  IsClusterWriter?: boolean;
  PromotionTier?: number;
  DbInstanceIdentifier?: string;
  DbClusterParameterGroupStatus?: string;
}
export type AwsRdsDbClusterMembers = Array<AwsRdsDbClusterMember>;
export interface AwsRdsDbClusterOptionGroupMembership {
  DbClusterOptionGroupName?: string;
  Status?: string;
}
export type AwsRdsDbClusterOptionGroupMemberships = Array<AwsRdsDbClusterOptionGroupMembership>;
export interface AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute {
  AttributeName?: string;
  AttributeValues?: Array<string>;
}
export type AwsRdsDbClusterSnapshotDbClusterSnapshotAttributes = Array<AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute>;
export interface AwsRdsDbClusterSnapshotDetails {
  AvailabilityZones?: Array<string>;
  SnapshotCreateTime?: string;
  Engine?: string;
  AllocatedStorage?: number;
  Status?: string;
  Port?: number;
  VpcId?: string;
  ClusterCreateTime?: string;
  MasterUsername?: string;
  EngineVersion?: string;
  LicenseModel?: string;
  SnapshotType?: string;
  PercentProgress?: number;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DbClusterIdentifier?: string;
  DbClusterSnapshotIdentifier?: string;
  IamDatabaseAuthenticationEnabled?: boolean;
  DbClusterSnapshotAttributes?: Array<AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute>;
}
export interface AwsRdsDbDomainMembership {
  Domain?: string;
  Status?: string;
  Fqdn?: string;
  IamRoleName?: string;
}
export type AwsRdsDbDomainMemberships = Array<AwsRdsDbDomainMembership>;
export interface AwsRdsDbInstanceAssociatedRole {
  RoleArn?: string;
  FeatureName?: string;
  Status?: string;
}
export type AwsRdsDbInstanceAssociatedRoles = Array<AwsRdsDbInstanceAssociatedRole>;
export interface AwsRdsDbInstanceDetails {
  AssociatedRoles?: Array<AwsRdsDbInstanceAssociatedRole>;
  CACertificateIdentifier?: string;
  DBClusterIdentifier?: string;
  DBInstanceIdentifier?: string;
  DBInstanceClass?: string;
  DbInstancePort?: number;
  DbiResourceId?: string;
  DBName?: string;
  DeletionProtection?: boolean;
  Endpoint?: AwsRdsDbInstanceEndpoint;
  Engine?: string;
  EngineVersion?: string;
  IAMDatabaseAuthenticationEnabled?: boolean;
  InstanceCreateTime?: string;
  KmsKeyId?: string;
  PubliclyAccessible?: boolean;
  StorageEncrypted?: boolean;
  TdeCredentialArn?: string;
  VpcSecurityGroups?: Array<AwsRdsDbInstanceVpcSecurityGroup>;
  MultiAz?: boolean;
  EnhancedMonitoringResourceArn?: string;
  DbInstanceStatus?: string;
  MasterUsername?: string;
  AllocatedStorage?: number;
  PreferredBackupWindow?: string;
  BackupRetentionPeriod?: number;
  DbSecurityGroups?: Array<string>;
  DbParameterGroups?: Array<AwsRdsDbParameterGroup>;
  AvailabilityZone?: string;
  DbSubnetGroup?: AwsRdsDbSubnetGroup;
  PreferredMaintenanceWindow?: string;
  PendingModifiedValues?: AwsRdsDbPendingModifiedValues;
  LatestRestorableTime?: string;
  AutoMinorVersionUpgrade?: boolean;
  ReadReplicaSourceDBInstanceIdentifier?: string;
  ReadReplicaDBInstanceIdentifiers?: Array<string>;
  ReadReplicaDBClusterIdentifiers?: Array<string>;
  LicenseModel?: string;
  Iops?: number;
  OptionGroupMemberships?: Array<AwsRdsDbOptionGroupMembership>;
  CharacterSetName?: string;
  SecondaryAvailabilityZone?: string;
  StatusInfos?: Array<AwsRdsDbStatusInfo>;
  StorageType?: string;
  DomainMemberships?: Array<AwsRdsDbDomainMembership>;
  CopyTagsToSnapshot?: boolean;
  MonitoringInterval?: number;
  MonitoringRoleArn?: string;
  PromotionTier?: number;
  Timezone?: string;
  PerformanceInsightsEnabled?: boolean;
  PerformanceInsightsKmsKeyId?: string;
  PerformanceInsightsRetentionPeriod?: number;
  EnabledCloudWatchLogsExports?: Array<string>;
  ProcessorFeatures?: Array<AwsRdsDbProcessorFeature>;
  ListenerEndpoint?: AwsRdsDbInstanceEndpoint;
  MaxAllocatedStorage?: number;
}
export interface AwsRdsDbInstanceEndpoint {
  Address?: string;
  Port?: number;
  HostedZoneId?: string;
}
export interface AwsRdsDbInstanceVpcSecurityGroup {
  VpcSecurityGroupId?: string;
  Status?: string;
}
export type AwsRdsDbInstanceVpcSecurityGroups = Array<AwsRdsDbInstanceVpcSecurityGroup>;
export interface AwsRdsDbOptionGroupMembership {
  OptionGroupName?: string;
  Status?: string;
}
export type AwsRdsDbOptionGroupMemberships = Array<AwsRdsDbOptionGroupMembership>;
export interface AwsRdsDbParameterGroup {
  DbParameterGroupName?: string;
  ParameterApplyStatus?: string;
}
export type AwsRdsDbParameterGroups = Array<AwsRdsDbParameterGroup>;
export interface AwsRdsDbPendingModifiedValues {
  DbInstanceClass?: string;
  AllocatedStorage?: number;
  MasterUserPassword?: string;
  Port?: number;
  BackupRetentionPeriod?: number;
  MultiAZ?: boolean;
  EngineVersion?: string;
  LicenseModel?: string;
  Iops?: number;
  DbInstanceIdentifier?: string;
  StorageType?: string;
  CaCertificateIdentifier?: string;
  DbSubnetGroupName?: string;
  PendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;
  ProcessorFeatures?: Array<AwsRdsDbProcessorFeature>;
}
export interface AwsRdsDbProcessorFeature {
  Name?: string;
  Value?: string;
}
export type AwsRdsDbProcessorFeatures = Array<AwsRdsDbProcessorFeature>;
export interface AwsRdsDbSecurityGroupDetails {
  DbSecurityGroupArn?: string;
  DbSecurityGroupDescription?: string;
  DbSecurityGroupName?: string;
  Ec2SecurityGroups?: Array<AwsRdsDbSecurityGroupEc2SecurityGroup>;
  IpRanges?: Array<AwsRdsDbSecurityGroupIpRange>;
  OwnerId?: string;
  VpcId?: string;
}
export interface AwsRdsDbSecurityGroupEc2SecurityGroup {
  Ec2SecurityGroupId?: string;
  Ec2SecurityGroupName?: string;
  Ec2SecurityGroupOwnerId?: string;
  Status?: string;
}
export type AwsRdsDbSecurityGroupEc2SecurityGroups = Array<AwsRdsDbSecurityGroupEc2SecurityGroup>;
export interface AwsRdsDbSecurityGroupIpRange {
  CidrIp?: string;
  Status?: string;
}
export type AwsRdsDbSecurityGroupIpRanges = Array<AwsRdsDbSecurityGroupIpRange>;
export interface AwsRdsDbSnapshotDetails {
  DbSnapshotIdentifier?: string;
  DbInstanceIdentifier?: string;
  SnapshotCreateTime?: string;
  Engine?: string;
  AllocatedStorage?: number;
  Status?: string;
  Port?: number;
  AvailabilityZone?: string;
  VpcId?: string;
  InstanceCreateTime?: string;
  MasterUsername?: string;
  EngineVersion?: string;
  LicenseModel?: string;
  SnapshotType?: string;
  Iops?: number;
  OptionGroupName?: string;
  PercentProgress?: number;
  SourceRegion?: string;
  SourceDbSnapshotIdentifier?: string;
  StorageType?: string;
  TdeCredentialArn?: string;
  Encrypted?: boolean;
  KmsKeyId?: string;
  Timezone?: string;
  IamDatabaseAuthenticationEnabled?: boolean;
  ProcessorFeatures?: Array<AwsRdsDbProcessorFeature>;
  DbiResourceId?: string;
}
export interface AwsRdsDbStatusInfo {
  StatusType?: string;
  Normal?: boolean;
  Status?: string;
  Message?: string;
}
export type AwsRdsDbStatusInfos = Array<AwsRdsDbStatusInfo>;
export interface AwsRdsDbSubnetGroup {
  DbSubnetGroupName?: string;
  DbSubnetGroupDescription?: string;
  VpcId?: string;
  SubnetGroupStatus?: string;
  Subnets?: Array<AwsRdsDbSubnetGroupSubnet>;
  DbSubnetGroupArn?: string;
}
export interface AwsRdsDbSubnetGroupSubnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone;
  SubnetStatus?: string;
}
export interface AwsRdsDbSubnetGroupSubnetAvailabilityZone {
  Name?: string;
}
export type AwsRdsDbSubnetGroupSubnets = Array<AwsRdsDbSubnetGroupSubnet>;
export interface AwsRdsEventSubscriptionDetails {
  CustSubscriptionId?: string;
  CustomerAwsId?: string;
  Enabled?: boolean;
  EventCategoriesList?: Array<string>;
  EventSubscriptionArn?: string;
  SnsTopicArn?: string;
  SourceIdsList?: Array<string>;
  SourceType?: string;
  Status?: string;
  SubscriptionCreationTime?: string;
}
export interface AwsRdsPendingCloudWatchLogsExports {
  LogTypesToEnable?: Array<string>;
  LogTypesToDisable?: Array<string>;
}
export interface AwsRedshiftClusterClusterNode {
  NodeRole?: string;
  PrivateIpAddress?: string;
  PublicIpAddress?: string;
}
export type AwsRedshiftClusterClusterNodes = Array<AwsRedshiftClusterClusterNode>;
export interface AwsRedshiftClusterClusterParameterGroup {
  ClusterParameterStatusList?: Array<AwsRedshiftClusterClusterParameterStatus>;
  ParameterApplyStatus?: string;
  ParameterGroupName?: string;
}
export type AwsRedshiftClusterClusterParameterGroups = Array<AwsRedshiftClusterClusterParameterGroup>;
export interface AwsRedshiftClusterClusterParameterStatus {
  ParameterName?: string;
  ParameterApplyStatus?: string;
  ParameterApplyErrorDescription?: string;
}
export type AwsRedshiftClusterClusterParameterStatusList = Array<AwsRedshiftClusterClusterParameterStatus>;
export interface AwsRedshiftClusterClusterSecurityGroup {
  ClusterSecurityGroupName?: string;
  Status?: string;
}
export type AwsRedshiftClusterClusterSecurityGroups = Array<AwsRedshiftClusterClusterSecurityGroup>;
export interface AwsRedshiftClusterClusterSnapshotCopyStatus {
  DestinationRegion?: string;
  ManualSnapshotRetentionPeriod?: number;
  RetentionPeriod?: number;
  SnapshotCopyGrantName?: string;
}
export interface AwsRedshiftClusterDeferredMaintenanceWindow {
  DeferMaintenanceEndTime?: string;
  DeferMaintenanceIdentifier?: string;
  DeferMaintenanceStartTime?: string;
}
export type AwsRedshiftClusterDeferredMaintenanceWindows = Array<AwsRedshiftClusterDeferredMaintenanceWindow>;
export interface AwsRedshiftClusterDetails {
  AllowVersionUpgrade?: boolean;
  AutomatedSnapshotRetentionPeriod?: number;
  AvailabilityZone?: string;
  ClusterAvailabilityStatus?: string;
  ClusterCreateTime?: string;
  ClusterIdentifier?: string;
  ClusterNodes?: Array<AwsRedshiftClusterClusterNode>;
  ClusterParameterGroups?: Array<AwsRedshiftClusterClusterParameterGroup>;
  ClusterPublicKey?: string;
  ClusterRevisionNumber?: string;
  ClusterSecurityGroups?: Array<AwsRedshiftClusterClusterSecurityGroup>;
  ClusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus;
  ClusterStatus?: string;
  ClusterSubnetGroupName?: string;
  ClusterVersion?: string;
  DBName?: string;
  DeferredMaintenanceWindows?: Array<AwsRedshiftClusterDeferredMaintenanceWindow>;
  ElasticIpStatus?: AwsRedshiftClusterElasticIpStatus;
  ElasticResizeNumberOfNodeOptions?: string;
  Encrypted?: boolean;
  Endpoint?: AwsRedshiftClusterEndpoint;
  EnhancedVpcRouting?: boolean;
  ExpectedNextSnapshotScheduleTime?: string;
  ExpectedNextSnapshotScheduleTimeStatus?: string;
  HsmStatus?: AwsRedshiftClusterHsmStatus;
  IamRoles?: Array<AwsRedshiftClusterIamRole>;
  KmsKeyId?: string;
  MaintenanceTrackName?: string;
  ManualSnapshotRetentionPeriod?: number;
  MasterUsername?: string;
  NextMaintenanceWindowStartTime?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  PendingActions?: Array<string>;
  PendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues;
  PreferredMaintenanceWindow?: string;
  PubliclyAccessible?: boolean;
  ResizeInfo?: AwsRedshiftClusterResizeInfo;
  RestoreStatus?: AwsRedshiftClusterRestoreStatus;
  SnapshotScheduleIdentifier?: string;
  SnapshotScheduleState?: string;
  VpcId?: string;
  VpcSecurityGroups?: Array<AwsRedshiftClusterVpcSecurityGroup>;
  LoggingStatus?: AwsRedshiftClusterLoggingStatus;
}
export interface AwsRedshiftClusterElasticIpStatus {
  ElasticIp?: string;
  Status?: string;
}
export interface AwsRedshiftClusterEndpoint {
  Address?: string;
  Port?: number;
}
export interface AwsRedshiftClusterHsmStatus {
  HsmClientCertificateIdentifier?: string;
  HsmConfigurationIdentifier?: string;
  Status?: string;
}
export interface AwsRedshiftClusterIamRole {
  ApplyStatus?: string;
  IamRoleArn?: string;
}
export type AwsRedshiftClusterIamRoles = Array<AwsRedshiftClusterIamRole>;
export interface AwsRedshiftClusterLoggingStatus {
  BucketName?: string;
  LastFailureMessage?: string;
  LastFailureTime?: string;
  LastSuccessfulDeliveryTime?: string;
  LoggingEnabled?: boolean;
  S3KeyPrefix?: string;
}
export interface AwsRedshiftClusterPendingModifiedValues {
  AutomatedSnapshotRetentionPeriod?: number;
  ClusterIdentifier?: string;
  ClusterType?: string;
  ClusterVersion?: string;
  EncryptionType?: string;
  EnhancedVpcRouting?: boolean;
  MaintenanceTrackName?: string;
  MasterUserPassword?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  PubliclyAccessible?: boolean;
}
export interface AwsRedshiftClusterResizeInfo {
  AllowCancelResize?: boolean;
  ResizeType?: string;
}
export interface AwsRedshiftClusterRestoreStatus {
  CurrentRestoreRateInMegaBytesPerSecond?: number;
  ElapsedTimeInSeconds?: number;
  EstimatedTimeToCompletionInSeconds?: number;
  ProgressInMegaBytes?: number;
  SnapshotSizeInMegaBytes?: number;
  Status?: string;
}
export interface AwsRedshiftClusterVpcSecurityGroup {
  Status?: string;
  VpcSecurityGroupId?: string;
}
export type AwsRedshiftClusterVpcSecurityGroups = Array<AwsRedshiftClusterVpcSecurityGroup>;
export interface AwsRoute53HostedZoneConfigDetails {
  Comment?: string;
}
export interface AwsRoute53HostedZoneDetails {
  HostedZone?: AwsRoute53HostedZoneObjectDetails;
  Vpcs?: Array<AwsRoute53HostedZoneVpcDetails>;
  NameServers?: Array<string>;
  QueryLoggingConfig?: AwsRoute53QueryLoggingConfigDetails;
}
export type AwsRoute53HostedZoneNameServersList = Array<string>;
export interface AwsRoute53HostedZoneObjectDetails {
  Id?: string;
  Name?: string;
  Config?: AwsRoute53HostedZoneConfigDetails;
}
export interface AwsRoute53HostedZoneVpcDetails {
  Id?: string;
  Region?: string;
}
export type AwsRoute53HostedZoneVpcsList = Array<AwsRoute53HostedZoneVpcDetails>;
export interface AwsRoute53QueryLoggingConfigDetails {
  CloudWatchLogsLogGroupArn?: CloudWatchLogsLogGroupArnConfigDetails;
}
export interface AwsS3AccessPointDetails {
  AccessPointArn?: string;
  Alias?: string;
  Bucket?: string;
  BucketAccountId?: string;
  Name?: string;
  NetworkOrigin?: string;
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;
  VpcConfiguration?: AwsS3AccessPointVpcConfigurationDetails;
}
export interface AwsS3AccessPointVpcConfigurationDetails {
  VpcId?: string;
}
export interface AwsS3AccountPublicAccessBlockDetails {
  BlockPublicAcls?: boolean;
  BlockPublicPolicy?: boolean;
  IgnorePublicAcls?: boolean;
  RestrictPublicBuckets?: boolean;
}
export interface AwsS3BucketBucketLifecycleConfigurationDetails {
  Rules?: Array<AwsS3BucketBucketLifecycleConfigurationRulesDetails>;
}
export interface AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails {
  DaysAfterInitiation?: number;
}
export interface AwsS3BucketBucketLifecycleConfigurationRulesDetails {
  AbortIncompleteMultipartUpload?: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails;
  ExpirationDate?: string;
  ExpirationInDays?: number;
  ExpiredObjectDeleteMarker?: boolean;
  Filter?: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails;
  ID?: string;
  NoncurrentVersionExpirationInDays?: number;
  NoncurrentVersionTransitions?: Array<AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails>;
  Prefix?: string;
  Status?: string;
  Transitions?: Array<AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails>;
}
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
  Predicate?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails;
}
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
  Operands?: Array<AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails>;
  Prefix?: string;
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails;
  Type?: string;
}
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
  Prefix?: string;
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails;
  Type?: string;
}
export type AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList = Array<AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails>;
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
  Key?: string;
  Value?: string;
}
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
  Key?: string;
  Value?: string;
}
export type AwsS3BucketBucketLifecycleConfigurationRulesList = Array<AwsS3BucketBucketLifecycleConfigurationRulesDetails>;
export interface AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
  Days?: number;
  StorageClass?: string;
}
export type AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList = Array<AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails>;
export interface AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
  Date?: string;
  Days?: number;
  StorageClass?: string;
}
export type AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList = Array<AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails>;
export interface AwsS3BucketBucketVersioningConfiguration {
  IsMfaDeleteEnabled?: boolean;
  Status?: string;
}
export interface AwsS3BucketDetails {
  OwnerId?: string;
  OwnerName?: string;
  OwnerAccountId?: string;
  CreatedAt?: string;
  ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;
  BucketLifecycleConfiguration?: AwsS3BucketBucketLifecycleConfigurationDetails;
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;
  AccessControlList?: string;
  BucketLoggingConfiguration?: AwsS3BucketLoggingConfiguration;
  BucketWebsiteConfiguration?: AwsS3BucketWebsiteConfiguration;
  BucketNotificationConfiguration?: AwsS3BucketNotificationConfiguration;
  BucketVersioningConfiguration?: AwsS3BucketBucketVersioningConfiguration;
  ObjectLockConfiguration?: AwsS3BucketObjectLockConfiguration;
  Name?: string;
}
export interface AwsS3BucketLoggingConfiguration {
  DestinationBucketName?: string;
  LogFilePrefix?: string;
}
export interface AwsS3BucketNotificationConfiguration {
  Configurations?: Array<AwsS3BucketNotificationConfigurationDetail>;
}
export interface AwsS3BucketNotificationConfigurationDetail {
  Events?: Array<string>;
  Filter?: AwsS3BucketNotificationConfigurationFilter;
  Destination?: string;
  Type?: string;
}
export type AwsS3BucketNotificationConfigurationDetails = Array<AwsS3BucketNotificationConfigurationDetail>;
export type AwsS3BucketNotificationConfigurationEvents = Array<string>;
export interface AwsS3BucketNotificationConfigurationFilter {
  S3KeyFilter?: AwsS3BucketNotificationConfigurationS3KeyFilter;
}
export interface AwsS3BucketNotificationConfigurationS3KeyFilter {
  FilterRules?: Array<AwsS3BucketNotificationConfigurationS3KeyFilterRule>;
}
export interface AwsS3BucketNotificationConfigurationS3KeyFilterRule {
  Name?: AwsS3BucketNotificationConfigurationS3KeyFilterRuleName;
  Value?: string;
}
export type AwsS3BucketNotificationConfigurationS3KeyFilterRuleName = "Prefix" | "Suffix";
export type AwsS3BucketNotificationConfigurationS3KeyFilterRules = Array<AwsS3BucketNotificationConfigurationS3KeyFilterRule>;
export interface AwsS3BucketObjectLockConfiguration {
  ObjectLockEnabled?: string;
  Rule?: AwsS3BucketObjectLockConfigurationRuleDetails;
}
export interface AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails {
  Days?: number;
  Mode?: string;
  Years?: number;
}
export interface AwsS3BucketObjectLockConfigurationRuleDetails {
  DefaultRetention?: AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails;
}
export interface AwsS3BucketServerSideEncryptionByDefault {
  SSEAlgorithm?: string;
  KMSMasterKeyID?: string;
}
export interface AwsS3BucketServerSideEncryptionConfiguration {
  Rules?: Array<AwsS3BucketServerSideEncryptionRule>;
}
export interface AwsS3BucketServerSideEncryptionRule {
  ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
}
export type AwsS3BucketServerSideEncryptionRules = Array<AwsS3BucketServerSideEncryptionRule>;
export interface AwsS3BucketWebsiteConfiguration {
  ErrorDocument?: string;
  IndexDocumentSuffix?: string;
  RedirectAllRequestsTo?: AwsS3BucketWebsiteConfigurationRedirectTo;
  RoutingRules?: Array<AwsS3BucketWebsiteConfigurationRoutingRule>;
}
export interface AwsS3BucketWebsiteConfigurationRedirectTo {
  Hostname?: string;
  Protocol?: string;
}
export interface AwsS3BucketWebsiteConfigurationRoutingRule {
  Condition?: AwsS3BucketWebsiteConfigurationRoutingRuleCondition;
  Redirect?: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect;
}
export interface AwsS3BucketWebsiteConfigurationRoutingRuleCondition {
  HttpErrorCodeReturnedEquals?: string;
  KeyPrefixEquals?: string;
}
export interface AwsS3BucketWebsiteConfigurationRoutingRuleRedirect {
  Hostname?: string;
  HttpRedirectCode?: string;
  Protocol?: string;
  ReplaceKeyPrefixWith?: string;
  ReplaceKeyWith?: string;
}
export type AwsS3BucketWebsiteConfigurationRoutingRules = Array<AwsS3BucketWebsiteConfigurationRoutingRule>;
export interface AwsS3ObjectDetails {
  LastModified?: string;
  ETag?: string;
  VersionId?: string;
  ContentType?: string;
  ServerSideEncryption?: string;
  SSEKMSKeyId?: string;
}
export interface AwsSageMakerNotebookInstanceDetails {
  AcceleratorTypes?: Array<string>;
  AdditionalCodeRepositories?: Array<string>;
  DefaultCodeRepository?: string;
  DirectInternetAccess?: string;
  FailureReason?: string;
  InstanceMetadataServiceConfiguration?: AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails;
  InstanceType?: string;
  KmsKeyId?: string;
  NetworkInterfaceId?: string;
  NotebookInstanceArn?: string;
  NotebookInstanceLifecycleConfigName?: string;
  NotebookInstanceName?: string;
  NotebookInstanceStatus?: string;
  PlatformIdentifier?: string;
  RoleArn?: string;
  RootAccess?: string;
  SecurityGroups?: Array<string>;
  SubnetId?: string;
  Url?: string;
  VolumeSizeInGB?: number;
}
export interface AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails {
  MinimumInstanceMetadataServiceVersion?: string;
}
export interface AwsSecretsManagerSecretDetails {
  RotationRules?: AwsSecretsManagerSecretRotationRules;
  RotationOccurredWithinFrequency?: boolean;
  KmsKeyId?: string;
  RotationEnabled?: boolean;
  RotationLambdaArn?: string;
  Deleted?: boolean;
  Name?: string;
  Description?: string;
}
export interface AwsSecretsManagerSecretRotationRules {
  AutomaticallyAfterDays?: number;
}
export interface AwsSecurityFinding {
  SchemaVersion: string;
  Id: string;
  ProductArn: string;
  ProductName?: string;
  CompanyName?: string;
  Region?: string;
  GeneratorId: string;
  AwsAccountId: string;
  Types?: Array<string>;
  FirstObservedAt?: string;
  LastObservedAt?: string;
  CreatedAt: string;
  UpdatedAt: string;
  Severity?: Severity;
  Confidence?: number;
  Criticality?: number;
  Title: string;
  Description: string;
  Remediation?: Remediation;
  SourceUrl?: string;
  ProductFields?: Record<string, string>;
  UserDefinedFields?: Record<string, string>;
  Malware?: Array<Malware>;
  Network?: Network;
  NetworkPath?: Array<NetworkPathComponent>;
  Process?: ProcessDetails;
  Threats?: Array<Threat>;
  ThreatIntelIndicators?: Array<ThreatIntelIndicator>;
  Resources: Array<Resource>;
  Compliance?: Compliance;
  VerificationState?: VerificationState;
  WorkflowState?: WorkflowState;
  Workflow?: Workflow;
  RecordState?: RecordState;
  RelatedFindings?: Array<RelatedFinding>;
  Note?: Note;
  Vulnerabilities?: Array<Vulnerability>;
  PatchSummary?: PatchSummary;
  Action?: Action;
  FindingProviderFields?: FindingProviderFields;
  Sample?: boolean;
  GeneratorDetails?: GeneratorDetails;
  ProcessedAt?: string;
  AwsAccountName?: string;
  Detection?: Detection;
}
export interface AwsSecurityFindingFilters {
  ProductArn?: Array<StringFilter>;
  AwsAccountId?: Array<StringFilter>;
  Id?: Array<StringFilter>;
  GeneratorId?: Array<StringFilter>;
  Region?: Array<StringFilter>;
  Type?: Array<StringFilter>;
  FirstObservedAt?: Array<DateFilter>;
  LastObservedAt?: Array<DateFilter>;
  CreatedAt?: Array<DateFilter>;
  UpdatedAt?: Array<DateFilter>;
  SeverityProduct?: Array<NumberFilter>;
  SeverityNormalized?: Array<NumberFilter>;
  SeverityLabel?: Array<StringFilter>;
  Confidence?: Array<NumberFilter>;
  Criticality?: Array<NumberFilter>;
  Title?: Array<StringFilter>;
  Description?: Array<StringFilter>;
  RecommendationText?: Array<StringFilter>;
  SourceUrl?: Array<StringFilter>;
  ProductFields?: Array<MapFilter>;
  ProductName?: Array<StringFilter>;
  CompanyName?: Array<StringFilter>;
  UserDefinedFields?: Array<MapFilter>;
  MalwareName?: Array<StringFilter>;
  MalwareType?: Array<StringFilter>;
  MalwarePath?: Array<StringFilter>;
  MalwareState?: Array<StringFilter>;
  NetworkDirection?: Array<StringFilter>;
  NetworkProtocol?: Array<StringFilter>;
  NetworkSourceIpV4?: Array<IpFilter>;
  NetworkSourceIpV6?: Array<IpFilter>;
  NetworkSourcePort?: Array<NumberFilter>;
  NetworkSourceDomain?: Array<StringFilter>;
  NetworkSourceMac?: Array<StringFilter>;
  NetworkDestinationIpV4?: Array<IpFilter>;
  NetworkDestinationIpV6?: Array<IpFilter>;
  NetworkDestinationPort?: Array<NumberFilter>;
  NetworkDestinationDomain?: Array<StringFilter>;
  ProcessName?: Array<StringFilter>;
  ProcessPath?: Array<StringFilter>;
  ProcessPid?: Array<NumberFilter>;
  ProcessParentPid?: Array<NumberFilter>;
  ProcessLaunchedAt?: Array<DateFilter>;
  ProcessTerminatedAt?: Array<DateFilter>;
  ThreatIntelIndicatorType?: Array<StringFilter>;
  ThreatIntelIndicatorValue?: Array<StringFilter>;
  ThreatIntelIndicatorCategory?: Array<StringFilter>;
  ThreatIntelIndicatorLastObservedAt?: Array<DateFilter>;
  ThreatIntelIndicatorSource?: Array<StringFilter>;
  ThreatIntelIndicatorSourceUrl?: Array<StringFilter>;
  ResourceType?: Array<StringFilter>;
  ResourceId?: Array<StringFilter>;
  ResourcePartition?: Array<StringFilter>;
  ResourceRegion?: Array<StringFilter>;
  ResourceTags?: Array<MapFilter>;
  ResourceAwsEc2InstanceType?: Array<StringFilter>;
  ResourceAwsEc2InstanceImageId?: Array<StringFilter>;
  ResourceAwsEc2InstanceIpV4Addresses?: Array<IpFilter>;
  ResourceAwsEc2InstanceIpV6Addresses?: Array<IpFilter>;
  ResourceAwsEc2InstanceKeyName?: Array<StringFilter>;
  ResourceAwsEc2InstanceIamInstanceProfileArn?: Array<StringFilter>;
  ResourceAwsEc2InstanceVpcId?: Array<StringFilter>;
  ResourceAwsEc2InstanceSubnetId?: Array<StringFilter>;
  ResourceAwsEc2InstanceLaunchedAt?: Array<DateFilter>;
  ResourceAwsS3BucketOwnerId?: Array<StringFilter>;
  ResourceAwsS3BucketOwnerName?: Array<StringFilter>;
  ResourceAwsIamAccessKeyUserName?: Array<StringFilter>;
  ResourceAwsIamAccessKeyPrincipalName?: Array<StringFilter>;
  ResourceAwsIamAccessKeyStatus?: Array<StringFilter>;
  ResourceAwsIamAccessKeyCreatedAt?: Array<DateFilter>;
  ResourceAwsIamUserUserName?: Array<StringFilter>;
  ResourceContainerName?: Array<StringFilter>;
  ResourceContainerImageId?: Array<StringFilter>;
  ResourceContainerImageName?: Array<StringFilter>;
  ResourceContainerLaunchedAt?: Array<DateFilter>;
  ResourceDetailsOther?: Array<MapFilter>;
  ComplianceStatus?: Array<StringFilter>;
  VerificationState?: Array<StringFilter>;
  WorkflowState?: Array<StringFilter>;
  WorkflowStatus?: Array<StringFilter>;
  RecordState?: Array<StringFilter>;
  RelatedFindingsProductArn?: Array<StringFilter>;
  RelatedFindingsId?: Array<StringFilter>;
  NoteText?: Array<StringFilter>;
  NoteUpdatedAt?: Array<DateFilter>;
  NoteUpdatedBy?: Array<StringFilter>;
  Keyword?: Array<KeywordFilter>;
  FindingProviderFieldsConfidence?: Array<NumberFilter>;
  FindingProviderFieldsCriticality?: Array<NumberFilter>;
  FindingProviderFieldsRelatedFindingsId?: Array<StringFilter>;
  FindingProviderFieldsRelatedFindingsProductArn?: Array<StringFilter>;
  FindingProviderFieldsSeverityLabel?: Array<StringFilter>;
  FindingProviderFieldsSeverityOriginal?: Array<StringFilter>;
  FindingProviderFieldsTypes?: Array<StringFilter>;
  Sample?: Array<BooleanFilter>;
  ComplianceSecurityControlId?: Array<StringFilter>;
  ComplianceAssociatedStandardsId?: Array<StringFilter>;
  VulnerabilitiesExploitAvailable?: Array<StringFilter>;
  VulnerabilitiesFixAvailable?: Array<StringFilter>;
  ComplianceSecurityControlParametersName?: Array<StringFilter>;
  ComplianceSecurityControlParametersValue?: Array<StringFilter>;
  AwsAccountName?: Array<StringFilter>;
  ResourceApplicationName?: Array<StringFilter>;
  ResourceApplicationArn?: Array<StringFilter>;
}
export interface AwsSecurityFindingIdentifier {
  Id: string;
  ProductArn: string;
}
export type AwsSecurityFindingIdentifierList = Array<AwsSecurityFindingIdentifier>;
export type AwsSecurityFindingList = Array<AwsSecurityFinding>;
export interface AwsSnsTopicDetails {
  KmsMasterKeyId?: string;
  Subscription?: Array<AwsSnsTopicSubscription>;
  TopicName?: string;
  Owner?: string;
  SqsSuccessFeedbackRoleArn?: string;
  SqsFailureFeedbackRoleArn?: string;
  ApplicationSuccessFeedbackRoleArn?: string;
  FirehoseSuccessFeedbackRoleArn?: string;
  FirehoseFailureFeedbackRoleArn?: string;
  HttpSuccessFeedbackRoleArn?: string;
  HttpFailureFeedbackRoleArn?: string;
}
export interface AwsSnsTopicSubscription {
  Endpoint?: string;
  Protocol?: string;
}
export type AwsSnsTopicSubscriptionList = Array<AwsSnsTopicSubscription>;
export interface AwsSqsQueueDetails {
  KmsDataKeyReusePeriodSeconds?: number;
  KmsMasterKeyId?: string;
  QueueName?: string;
  DeadLetterTargetArn?: string;
}
export interface AwsSsmComplianceSummary {
  Status?: string;
  CompliantCriticalCount?: number;
  CompliantHighCount?: number;
  CompliantMediumCount?: number;
  ExecutionType?: string;
  NonCompliantCriticalCount?: number;
  CompliantInformationalCount?: number;
  NonCompliantInformationalCount?: number;
  CompliantUnspecifiedCount?: number;
  NonCompliantLowCount?: number;
  NonCompliantHighCount?: number;
  CompliantLowCount?: number;
  ComplianceType?: string;
  PatchBaselineId?: string;
  OverallSeverity?: string;
  NonCompliantMediumCount?: number;
  NonCompliantUnspecifiedCount?: number;
  PatchGroup?: string;
}
export interface AwsSsmPatch {
  ComplianceSummary?: AwsSsmComplianceSummary;
}
export interface AwsSsmPatchComplianceDetails {
  Patch?: AwsSsmPatch;
}
export interface AwsStepFunctionStateMachineDetails {
  Label?: string;
  LoggingConfiguration?: AwsStepFunctionStateMachineLoggingConfigurationDetails;
  Name?: string;
  RoleArn?: string;
  StateMachineArn?: string;
  Status?: string;
  TracingConfiguration?: AwsStepFunctionStateMachineTracingConfigurationDetails;
  Type?: string;
}
export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails {
  LogGroupArn?: string;
}
export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails {
  CloudWatchLogsLogGroup?: AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails;
}
export type AwsStepFunctionStateMachineLoggingConfigurationDestinationsList = Array<AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails>;
export interface AwsStepFunctionStateMachineLoggingConfigurationDetails {
  Destinations?: Array<AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails>;
  IncludeExecutionData?: boolean;
  Level?: string;
}
export interface AwsStepFunctionStateMachineTracingConfigurationDetails {
  Enabled?: boolean;
}
export interface AwsWafRateBasedRuleDetails {
  MetricName?: string;
  Name?: string;
  RateKey?: string;
  RateLimit?: number;
  RuleId?: string;
  MatchPredicates?: Array<AwsWafRateBasedRuleMatchPredicate>;
}
export interface AwsWafRateBasedRuleMatchPredicate {
  DataId?: string;
  Negated?: boolean;
  Type?: string;
}
export type AwsWafRateBasedRuleMatchPredicateList = Array<AwsWafRateBasedRuleMatchPredicate>;
export interface AwsWafRegionalRateBasedRuleDetails {
  MetricName?: string;
  Name?: string;
  RateKey?: string;
  RateLimit?: number;
  RuleId?: string;
  MatchPredicates?: Array<AwsWafRegionalRateBasedRuleMatchPredicate>;
}
export interface AwsWafRegionalRateBasedRuleMatchPredicate {
  DataId?: string;
  Negated?: boolean;
  Type?: string;
}
export type AwsWafRegionalRateBasedRuleMatchPredicateList = Array<AwsWafRegionalRateBasedRuleMatchPredicate>;
export interface AwsWafRegionalRuleDetails {
  MetricName?: string;
  Name?: string;
  PredicateList?: Array<AwsWafRegionalRulePredicateListDetails>;
  RuleId?: string;
}
export interface AwsWafRegionalRuleGroupDetails {
  MetricName?: string;
  Name?: string;
  RuleGroupId?: string;
  Rules?: Array<AwsWafRegionalRuleGroupRulesDetails>;
}
export interface AwsWafRegionalRuleGroupRulesActionDetails {
  Type?: string;
}
export interface AwsWafRegionalRuleGroupRulesDetails {
  Action?: AwsWafRegionalRuleGroupRulesActionDetails;
  Priority?: number;
  RuleId?: string;
  Type?: string;
}
export type AwsWafRegionalRuleGroupRulesList = Array<AwsWafRegionalRuleGroupRulesDetails>;
export type AwsWafRegionalRulePredicateList = Array<AwsWafRegionalRulePredicateListDetails>;
export interface AwsWafRegionalRulePredicateListDetails {
  DataId?: string;
  Negated?: boolean;
  Type?: string;
}
export interface AwsWafRegionalWebAclDetails {
  DefaultAction?: string;
  MetricName?: string;
  Name?: string;
  RulesList?: Array<AwsWafRegionalWebAclRulesListDetails>;
  WebAclId?: string;
}
export type AwsWafRegionalWebAclRulesList = Array<AwsWafRegionalWebAclRulesListDetails>;
export interface AwsWafRegionalWebAclRulesListActionDetails {
  Type?: string;
}
export interface AwsWafRegionalWebAclRulesListDetails {
  Action?: AwsWafRegionalWebAclRulesListActionDetails;
  OverrideAction?: AwsWafRegionalWebAclRulesListOverrideActionDetails;
  Priority?: number;
  RuleId?: string;
  Type?: string;
}
export interface AwsWafRegionalWebAclRulesListOverrideActionDetails {
  Type?: string;
}
export interface AwsWafRuleDetails {
  MetricName?: string;
  Name?: string;
  PredicateList?: Array<AwsWafRulePredicateListDetails>;
  RuleId?: string;
}
export interface AwsWafRuleGroupDetails {
  MetricName?: string;
  Name?: string;
  RuleGroupId?: string;
  Rules?: Array<AwsWafRuleGroupRulesDetails>;
}
export interface AwsWafRuleGroupRulesActionDetails {
  Type?: string;
}
export interface AwsWafRuleGroupRulesDetails {
  Action?: AwsWafRuleGroupRulesActionDetails;
  Priority?: number;
  RuleId?: string;
  Type?: string;
}
export type AwsWafRuleGroupRulesList = Array<AwsWafRuleGroupRulesDetails>;
export type AwsWafRulePredicateList = Array<AwsWafRulePredicateListDetails>;
export interface AwsWafRulePredicateListDetails {
  DataId?: string;
  Negated?: boolean;
  Type?: string;
}
export interface AwsWafv2ActionAllowDetails {
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}
export interface AwsWafv2ActionBlockDetails {
  CustomResponse?: AwsWafv2CustomResponseDetails;
}
export interface AwsWafv2CustomHttpHeader {
  Name?: string;
  Value?: string;
}
export interface AwsWafv2CustomRequestHandlingDetails {
  InsertHeaders?: Array<AwsWafv2CustomHttpHeader>;
}
export interface AwsWafv2CustomResponseDetails {
  CustomResponseBodyKey?: string;
  ResponseCode?: number;
  ResponseHeaders?: Array<AwsWafv2CustomHttpHeader>;
}
export type AwsWafv2InsertHeadersList = Array<AwsWafv2CustomHttpHeader>;
export interface AwsWafv2RuleGroupDetails {
  Capacity?: number;
  Description?: string;
  Id?: string;
  Name?: string;
  Arn?: string;
  Rules?: Array<AwsWafv2RulesDetails>;
  Scope?: string;
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}
export interface AwsWafv2RulesActionCaptchaDetails {
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}
export interface AwsWafv2RulesActionCountDetails {
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}
export interface AwsWafv2RulesActionDetails {
  Allow?: AwsWafv2ActionAllowDetails;
  Block?: AwsWafv2ActionBlockDetails;
  Captcha?: AwsWafv2RulesActionCaptchaDetails;
  Count?: AwsWafv2RulesActionCountDetails;
}
export interface AwsWafv2RulesDetails {
  Action?: AwsWafv2RulesActionDetails;
  Name?: string;
  OverrideAction?: string;
  Priority?: number;
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}
export type AwsWafv2RulesList = Array<AwsWafv2RulesDetails>;
export interface AwsWafv2VisibilityConfigDetails {
  CloudWatchMetricsEnabled?: boolean;
  MetricName?: string;
  SampledRequestsEnabled?: boolean;
}
export interface AwsWafv2WebAclActionDetails {
  Allow?: AwsWafv2ActionAllowDetails;
  Block?: AwsWafv2ActionBlockDetails;
}
export interface AwsWafv2WebAclCaptchaConfigDetails {
  ImmunityTimeProperty?: AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails;
}
export interface AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails {
  ImmunityTime?: number;
}
export interface AwsWafv2WebAclDetails {
  Name?: string;
  Arn?: string;
  ManagedbyFirewallManager?: boolean;
  Id?: string;
  Capacity?: number;
  CaptchaConfig?: AwsWafv2WebAclCaptchaConfigDetails;
  DefaultAction?: AwsWafv2WebAclActionDetails;
  Description?: string;
  Rules?: Array<AwsWafv2RulesDetails>;
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}
export interface AwsWafWebAclDetails {
  Name?: string;
  DefaultAction?: string;
  Rules?: Array<AwsWafWebAclRule>;
  WebAclId?: string;
}
export interface AwsWafWebAclRule {
  Action?: WafAction;
  ExcludedRules?: Array<WafExcludedRule>;
  OverrideAction?: WafOverrideAction;
  Priority?: number;
  RuleId?: string;
  Type?: string;
}
export type AwsWafWebAclRuleList = Array<AwsWafWebAclRule>;
export interface AwsXrayEncryptionConfigDetails {
  KeyId?: string;
  Status?: string;
  Type?: string;
}
export interface BatchDeleteAutomationRulesRequest {
  AutomationRulesArns: Array<string>;
}
export interface BatchDeleteAutomationRulesResponse {
  ProcessedAutomationRules?: Array<string>;
  UnprocessedAutomationRules?: Array<UnprocessedAutomationRule>;
}
export interface BatchDisableStandardsRequest {
  StandardsSubscriptionArns: Array<string>;
}
export interface BatchDisableStandardsResponse {
  StandardsSubscriptions?: Array<StandardsSubscription>;
}
export interface BatchEnableStandardsRequest {
  StandardsSubscriptionRequests: Array<StandardsSubscriptionRequest>;
}
export interface BatchEnableStandardsResponse {
  StandardsSubscriptions?: Array<StandardsSubscription>;
}
export interface BatchGetAutomationRulesRequest {
  AutomationRulesArns: Array<string>;
}
export interface BatchGetAutomationRulesResponse {
  Rules?: Array<AutomationRulesConfig>;
  UnprocessedAutomationRules?: Array<UnprocessedAutomationRule>;
}
export interface BatchGetConfigurationPolicyAssociationsRequest {
  ConfigurationPolicyAssociationIdentifiers: Array<ConfigurationPolicyAssociation>;
}
export interface BatchGetConfigurationPolicyAssociationsResponse {
  ConfigurationPolicyAssociations?: Array<ConfigurationPolicyAssociationSummary>;
  UnprocessedConfigurationPolicyAssociations?: Array<UnprocessedConfigurationPolicyAssociation>;
}
export interface BatchGetSecurityControlsRequest {
  SecurityControlIds: Array<string>;
}
export interface BatchGetSecurityControlsResponse {
  SecurityControls: Array<SecurityControl>;
  UnprocessedIds?: Array<UnprocessedSecurityControl>;
}
export interface BatchGetStandardsControlAssociationsRequest {
  StandardsControlAssociationIds: Array<StandardsControlAssociationId>;
}
export interface BatchGetStandardsControlAssociationsResponse {
  StandardsControlAssociationDetails: Array<StandardsControlAssociationDetail>;
  UnprocessedAssociations?: Array<UnprocessedStandardsControlAssociation>;
}
export interface BatchImportFindingsRequest {
  Findings: Array<AwsSecurityFinding>;
}
export type BatchImportFindingsRequestFindingList = Array<AwsSecurityFinding>;
export interface BatchImportFindingsResponse {
  FailedCount: number;
  SuccessCount: number;
  FailedFindings?: Array<ImportFindingsError>;
}
export interface BatchUpdateAutomationRulesRequest {
  UpdateAutomationRulesRequestItems: Array<UpdateAutomationRulesRequestItem>;
}
export interface BatchUpdateAutomationRulesResponse {
  ProcessedAutomationRules?: Array<string>;
  UnprocessedAutomationRules?: Array<UnprocessedAutomationRule>;
}
export interface BatchUpdateFindingsRequest {
  FindingIdentifiers: Array<AwsSecurityFindingIdentifier>;
  Note?: NoteUpdate;
  Severity?: SeverityUpdate;
  VerificationState?: VerificationState;
  Confidence?: number;
  Criticality?: number;
  Types?: Array<string>;
  UserDefinedFields?: Record<string, string>;
  Workflow?: WorkflowUpdate;
  RelatedFindings?: Array<RelatedFinding>;
}
export interface BatchUpdateFindingsResponse {
  ProcessedFindings: Array<AwsSecurityFindingIdentifier>;
  UnprocessedFindings: Array<BatchUpdateFindingsUnprocessedFinding>;
}
export interface BatchUpdateFindingsUnprocessedFinding {
  FindingIdentifier: AwsSecurityFindingIdentifier;
  ErrorCode: string;
  ErrorMessage: string;
}
export type BatchUpdateFindingsUnprocessedFindingsList = Array<BatchUpdateFindingsUnprocessedFinding>;
export interface BatchUpdateFindingsV2ProcessedFinding {
  FindingIdentifier?: OcsfFindingIdentifier;
  MetadataUid?: string;
}
export type BatchUpdateFindingsV2ProcessedFindingsList = Array<BatchUpdateFindingsV2ProcessedFinding>;
export interface BatchUpdateFindingsV2Request {
  MetadataUids?: Array<string>;
  FindingIdentifiers?: Array<OcsfFindingIdentifier>;
  Comment?: string;
  SeverityId?: number;
  StatusId?: number;
}
export interface BatchUpdateFindingsV2Response {
  ProcessedFindings: Array<BatchUpdateFindingsV2ProcessedFinding>;
  UnprocessedFindings: Array<BatchUpdateFindingsV2UnprocessedFinding>;
}
export interface BatchUpdateFindingsV2UnprocessedFinding {
  FindingIdentifier?: OcsfFindingIdentifier;
  MetadataUid?: string;
  ErrorCode?: BatchUpdateFindingsV2UnprocessedFindingErrorCode;
  ErrorMessage?: string;
}
export type BatchUpdateFindingsV2UnprocessedFindingErrorCode = "ResourceNotFoundException" | "ValidationException" | "InternalServerException" | "ConflictException";
export type BatchUpdateFindingsV2UnprocessedFindingsList = Array<BatchUpdateFindingsV2UnprocessedFinding>;
export interface BatchUpdateStandardsControlAssociationsRequest {
  StandardsControlAssociationUpdates: Array<StandardsControlAssociationUpdate>;
}
export interface BatchUpdateStandardsControlAssociationsResponse {
  UnprocessedAssociationUpdates?: Array<UnprocessedStandardsControlAssociationUpdate>;
}
export type SecurityhubBoolean = boolean;

export interface BooleanConfigurationOptions {
  DefaultValue?: boolean;
}
export interface BooleanFilter {
  Value?: boolean;
}
export type BooleanFilterList = Array<BooleanFilter>;
export type CategoryList = Array<string>;
export interface Cell {
  Column?: number;
  Row?: number;
  ColumnName?: string;
  CellReference?: string;
}
export type Cells = Array<Cell>;
export interface CidrBlockAssociation {
  AssociationId?: string;
  CidrBlock?: string;
  CidrBlockState?: string;
}
export type CidrBlockAssociationList = Array<CidrBlockAssociation>;
export interface City {
  CityName?: string;
}
export interface ClassificationResult {
  MimeType?: string;
  SizeClassified?: number;
  AdditionalOccurrences?: boolean;
  Status?: ClassificationStatus;
  SensitiveData?: Array<SensitiveDataResult>;
  CustomDataIdentifiers?: CustomDataIdentifiersResult;
}
export interface ClassificationStatus {
  Code?: string;
  Reason?: string;
}
export type ClientToken = string;

export interface CloudWatchLogsLogGroupArnConfigDetails {
  CloudWatchLogsLogGroupArn?: string;
  HostedZoneId?: string;
  Id?: string;
}
export interface CodeRepositoryDetails {
  ProviderType?: string;
  ProjectName?: string;
  CodeSecurityIntegrationArn?: string;
}
export interface CodeVulnerabilitiesFilePath {
  EndLine?: number;
  FileName?: string;
  FilePath?: string;
  StartLine?: number;
}
export interface Compliance {
  Status?: ComplianceStatus;
  RelatedRequirements?: Array<string>;
  StatusReasons?: Array<StatusReason>;
  SecurityControlId?: string;
  AssociatedStandards?: Array<AssociatedStandard>;
  SecurityControlParameters?: Array<SecurityControlParameter>;
}
export type ComplianceStatus = "PASSED" | "WARNING" | "FAILED" | "NOT_AVAILABLE";
export interface CompositeFilter {
  StringFilters?: Array<OcsfStringFilter>;
  DateFilters?: Array<OcsfDateFilter>;
  BooleanFilters?: Array<OcsfBooleanFilter>;
  NumberFilters?: Array<OcsfNumberFilter>;
  MapFilters?: Array<OcsfMapFilter>;
  IpFilters?: Array<OcsfIpFilter>;
  NestedCompositeFilters?: Array<CompositeFilter>;
  Operator?: AllowedOperators;
}
export type CompositeFilterList = Array<CompositeFilter>;
interface _ConfigurationOptions {
  Integer?: IntegerConfigurationOptions;
  IntegerList?: IntegerListConfigurationOptions;
  Double?: DoubleConfigurationOptions;
  String?: StringConfigurationOptions;
  StringList?: StringListConfigurationOptions;
  Boolean?: BooleanConfigurationOptions;
  Enum?: EnumConfigurationOptions;
  EnumList?: EnumListConfigurationOptions;
}

export type ConfigurationOptions = (_ConfigurationOptions & { Integer: IntegerConfigurationOptions }) | (_ConfigurationOptions & { IntegerList: IntegerListConfigurationOptions }) | (_ConfigurationOptions & { Double: DoubleConfigurationOptions }) | (_ConfigurationOptions & { String: StringConfigurationOptions }) | (_ConfigurationOptions & { StringList: StringListConfigurationOptions }) | (_ConfigurationOptions & { Boolean: BooleanConfigurationOptions }) | (_ConfigurationOptions & { Enum: EnumConfigurationOptions }) | (_ConfigurationOptions & { EnumList: EnumListConfigurationOptions });
export interface ConfigurationPolicyAssociation {
  Target?: Target;
}
export type ConfigurationPolicyAssociationList = Array<ConfigurationPolicyAssociationSummary>;
export type ConfigurationPolicyAssociationsList = Array<ConfigurationPolicyAssociation>;
export type ConfigurationPolicyAssociationStatus = "PENDING" | "SUCCESS" | "FAILED";
export interface ConfigurationPolicyAssociationSummary {
  ConfigurationPolicyId?: string;
  TargetId?: string;
  TargetType?: TargetType;
  AssociationType?: AssociationType;
  UpdatedAt?: Date | string;
  AssociationStatus?: ConfigurationPolicyAssociationStatus;
  AssociationStatusMessage?: string;
}
export type ConfigurationPolicyAssociationSummaryList = Array<ConfigurationPolicyAssociationSummary>;
export interface ConfigurationPolicySummary {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  UpdatedAt?: Date | string;
  ServiceEnabled?: boolean;
}
export type ConfigurationPolicySummaryList = Array<ConfigurationPolicySummary>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export type ConnectionDirection = "INBOUND" | "OUTBOUND";
export type ConnectorAuthStatus = "ACTIVE" | "FAILED";
export type ConnectorProviderName = "JIRA_CLOUD" | "SERVICENOW";
export interface ConnectorRegistrationsV2Request {
  AuthCode: string;
  AuthState: string;
}
export interface ConnectorRegistrationsV2Response {
  ConnectorArn?: string;
  ConnectorId: string;
}
export type ConnectorStatus = "CONNECTED" | "FAILED_TO_CONNECT" | "PENDING_CONFIGURATION" | "PENDING_AUTHORIZATION";
export interface ConnectorSummary {
  ConnectorArn?: string;
  ConnectorId: string;
  Name: string;
  Description?: string;
  ProviderSummary: ProviderSummary;
  CreatedAt: Date | string;
}
export type ConnectorSummaryList = Array<ConnectorSummary>;
export interface ContainerDetails {
  ContainerRuntime?: string;
  Name?: string;
  ImageId?: string;
  ImageName?: string;
  LaunchedAt?: string;
  VolumeMounts?: Array<VolumeMount>;
  Privileged?: boolean;
}
export type ControlFindingGenerator = "STANDARD_CONTROL" | "SECURITY_CONTROL";
export type ControlStatus = "ENABLED" | "DISABLED";
export interface Country {
  CountryCode?: string;
  CountryName?: string;
}
export interface CreateActionTargetRequest {
  Name: string;
  Description: string;
  Id: string;
}
export interface CreateActionTargetResponse {
  ActionTargetArn: string;
}
export interface CreateAggregatorV2Request {
  RegionLinkingMode: string;
  LinkedRegions?: Array<string>;
  Tags?: Record<string, string>;
  ClientToken?: string;
}
export interface CreateAggregatorV2Response {
  AggregatorV2Arn?: string;
  AggregationRegion?: string;
  RegionLinkingMode?: string;
  LinkedRegions?: Array<string>;
}
export interface CreateAutomationRuleRequest {
  Tags?: Record<string, string>;
  RuleStatus?: RuleStatus;
  RuleOrder: number;
  RuleName: string;
  Description: string;
  IsTerminal?: boolean;
  Criteria: AutomationRulesFindingFilters;
  Actions: Array<AutomationRulesAction>;
}
export interface CreateAutomationRuleResponse {
  RuleArn?: string;
}
export interface CreateAutomationRuleV2Request {
  RuleName: string;
  RuleStatus?: RuleStatusV2;
  Description: string;
  RuleOrder: number;
  Criteria: Criteria;
  Actions: Array<AutomationRulesActionV2>;
  Tags?: Record<string, string>;
  ClientToken?: string;
}
export interface CreateAutomationRuleV2Response {
  RuleArn?: string;
  RuleId?: string;
}
export interface CreateConfigurationPolicyRequest {
  Name: string;
  Description?: string;
  ConfigurationPolicy: Policy;
  Tags?: Record<string, string>;
}
export interface CreateConfigurationPolicyResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  UpdatedAt?: Date | string;
  CreatedAt?: Date | string;
  ConfigurationPolicy?: Policy;
}
export interface CreateConnectorV2Request {
  Name: string;
  Description?: string;
  Provider: ProviderConfiguration;
  KmsKeyArn?: string;
  Tags?: Record<string, string>;
  ClientToken?: string;
}
export interface CreateConnectorV2Response {
  ConnectorArn?: string;
  ConnectorId: string;
  AuthUrl?: string;
}
export interface CreateFindingAggregatorRequest {
  RegionLinkingMode: string;
  Regions?: Array<string>;
}
export interface CreateFindingAggregatorResponse {
  FindingAggregatorArn?: string;
  FindingAggregationRegion?: string;
  RegionLinkingMode?: string;
  Regions?: Array<string>;
}
export interface CreateInsightRequest {
  Name: string;
  Filters: AwsSecurityFindingFilters;
  GroupByAttribute: string;
}
export interface CreateInsightResponse {
  InsightArn: string;
}
export interface CreateMembersRequest {
  AccountDetails: Array<AccountDetails>;
}
export interface CreateMembersResponse {
  UnprocessedAccounts?: Array<Result>;
}
export interface CreateTicketV2Request {
  ConnectorId: string;
  FindingMetadataUid: string;
  ClientToken?: string;
}
export interface CreateTicketV2Response {
  TicketId: string;
  TicketSrcUrl?: string;
}
interface _Criteria {
  OcsfFindingCriteria?: OcsfFindingFilters;
}

export type Criteria = (_Criteria & { OcsfFindingCriteria: OcsfFindingFilters });
export type CrossAccountMaxResults = number;

export interface CustomDataIdentifiersDetections {
  Count?: number;
  Arn?: string;
  Name?: string;
  Occurrences?: Occurrences;
}
export type CustomDataIdentifiersDetectionsList = Array<CustomDataIdentifiersDetections>;
export interface CustomDataIdentifiersResult {
  Detections?: Array<CustomDataIdentifiersDetections>;
  TotalCount?: number;
}
export type CustomizableProperties = Array<SecurityControlProperty>;
export interface Cvss {
  Version?: string;
  BaseScore?: number;
  BaseVector?: string;
  Source?: string;
  Adjustments?: Array<Adjustment>;
}
export type CvssList = Array<Cvss>;
export interface DataClassificationDetails {
  DetailedResultsLocation?: string;
  Result?: ClassificationResult;
}
export interface DateFilter {
  Start?: string;
  End?: string;
  DateRange?: DateRange;
}
export type DateFilterList = Array<DateFilter>;
export interface DateRange {
  Value?: number;
  Unit?: DateRangeUnit;
}
export type DateRangeUnit = "DAYS";
export interface DeclineInvitationsRequest {
  AccountIds: Array<string>;
}
export interface DeclineInvitationsResponse {
  UnprocessedAccounts?: Array<Result>;
}
export interface DeleteActionTargetRequest {
  ActionTargetArn: string;
}
export interface DeleteActionTargetResponse {
  ActionTargetArn: string;
}
export interface DeleteAggregatorV2Request {
  AggregatorV2Arn: string;
}
export interface DeleteAggregatorV2Response {
}
export interface DeleteAutomationRuleV2Request {
  Identifier: string;
}
export interface DeleteAutomationRuleV2Response {
}
export interface DeleteConfigurationPolicyRequest {
  Identifier: string;
}
export interface DeleteConfigurationPolicyResponse {
}
export interface DeleteConnectorV2Request {
  ConnectorId: string;
}
export interface DeleteConnectorV2Response {
}
export interface DeleteFindingAggregatorRequest {
  FindingAggregatorArn: string;
}
export interface DeleteFindingAggregatorResponse {
}
export interface DeleteInsightRequest {
  InsightArn: string;
}
export interface DeleteInsightResponse {
  InsightArn: string;
}
export interface DeleteInvitationsRequest {
  AccountIds: Array<string>;
}
export interface DeleteInvitationsResponse {
  UnprocessedAccounts?: Array<Result>;
}
export interface DeleteMembersRequest {
  AccountIds: Array<string>;
}
export interface DeleteMembersResponse {
  UnprocessedAccounts?: Array<Result>;
}
export interface DescribeActionTargetsRequest {
  ActionTargetArns?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeActionTargetsResponse {
  ActionTargets: Array<ActionTarget>;
  NextToken?: string;
}
export interface DescribeHubRequest {
  HubArn?: string;
}
export interface DescribeHubResponse {
  HubArn?: string;
  SubscribedAt?: string;
  AutoEnableControls?: boolean;
  ControlFindingGenerator?: ControlFindingGenerator;
}
export interface DescribeOrganizationConfigurationRequest {
}
export interface DescribeOrganizationConfigurationResponse {
  AutoEnable?: boolean;
  MemberAccountLimitReached?: boolean;
  AutoEnableStandards?: AutoEnableStandards;
  OrganizationConfiguration?: OrganizationConfiguration;
}
export interface DescribeProductsRequest {
  NextToken?: string;
  MaxResults?: number;
  ProductArn?: string;
}
export interface DescribeProductsResponse {
  Products: Array<Product>;
  NextToken?: string;
}
export interface DescribeProductsV2Request {
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeProductsV2Response {
  ProductsV2: Array<ProductV2>;
  NextToken?: string;
}
export interface DescribeSecurityHubV2Request {
}
export interface DescribeSecurityHubV2Response {
  HubV2Arn?: string;
  SubscribedAt?: string;
}
export interface DescribeStandardsControlsRequest {
  StandardsSubscriptionArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeStandardsControlsResponse {
  Controls?: Array<StandardsControl>;
  NextToken?: string;
}
export interface DescribeStandardsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeStandardsResponse {
  Standards?: Array<Standard>;
  NextToken?: string;
}
export interface Detection {
  Sequence?: Sequence;
}
export type DisabledSecurityControlIdentifierList = Array<string>;
export interface DisableImportFindingsForProductRequest {
  ProductSubscriptionArn: string;
}
export interface DisableImportFindingsForProductResponse {
}
export interface DisableOrganizationAdminAccountRequest {
  AdminAccountId: string;
  Feature?: SecurityHubFeature;
}
export interface DisableOrganizationAdminAccountResponse {
}
export interface DisableSecurityHubRequest {
}
export interface DisableSecurityHubResponse {
}
export interface DisableSecurityHubV2Request {
}
export interface DisableSecurityHubV2Response {
}
export interface DisassociateFromAdministratorAccountRequest {
}
export interface DisassociateFromAdministratorAccountResponse {
}
export interface DisassociateFromMasterAccountRequest {
}
export interface DisassociateFromMasterAccountResponse {
}
export interface DisassociateMembersRequest {
  AccountIds: Array<string>;
}
export interface DisassociateMembersResponse {
}
export interface DnsRequestAction {
  Domain?: string;
  Protocol?: string;
  Blocked?: boolean;
}
export type Double = number;

export interface DoubleConfigurationOptions {
  DefaultValue?: number;
  Min?: number;
  Max?: number;
}
export type EnabledSecurityControlIdentifierList = Array<string>;
export type EnabledStandardIdentifierList = Array<string>;
export interface EnableImportFindingsForProductRequest {
  ProductArn: string;
}
export interface EnableImportFindingsForProductResponse {
  ProductSubscriptionArn?: string;
}
export interface EnableOrganizationAdminAccountRequest {
  AdminAccountId: string;
  Feature?: SecurityHubFeature;
}
export interface EnableOrganizationAdminAccountResponse {
  AdminAccountId?: string;
  Feature?: SecurityHubFeature;
}
export interface EnableSecurityHubRequest {
  Tags?: Record<string, string>;
  EnableDefaultStandards?: boolean;
  ControlFindingGenerator?: ControlFindingGenerator;
}
export interface EnableSecurityHubResponse {
}
export interface EnableSecurityHubV2Request {
  Tags?: Record<string, string>;
}
export interface EnableSecurityHubV2Response {
  HubV2Arn?: string;
}
export interface EnumConfigurationOptions {
  DefaultValue?: string;
  AllowedValues?: Array<string>;
}
export interface EnumListConfigurationOptions {
  DefaultValue?: Array<string>;
  MaxItems?: number;
  AllowedValues?: Array<string>;
}
export interface ExternalIntegrationConfiguration {
  ConnectorArn?: string;
}
export type FieldMap = Record<string, string>;
export type FilePathList = Array<FilePaths>;
export interface FilePaths {
  FilePath?: string;
  FileName?: string;
  ResourceId?: string;
  Hash?: string;
}
export interface FindingAggregator {
  FindingAggregatorArn?: string;
}
export type FindingAggregatorList = Array<FindingAggregator>;
export interface FindingHistoryRecord {
  FindingIdentifier?: AwsSecurityFindingIdentifier;
  UpdateTime?: Date | string;
  FindingCreated?: boolean;
  UpdateSource?: FindingHistoryUpdateSource;
  Updates?: Array<FindingHistoryUpdate>;
  NextToken?: string;
}
export type FindingHistoryRecordList = Array<FindingHistoryRecord>;
export interface FindingHistoryUpdate {
  UpdatedField?: string;
  OldValue?: string;
  NewValue?: string;
}
export type FindingHistoryUpdatesList = Array<FindingHistoryUpdate>;
export interface FindingHistoryUpdateSource {
  Type?: FindingHistoryUpdateSourceType;
  Identity?: string;
}
export type FindingHistoryUpdateSourceType = "BATCH_UPDATE_FINDINGS" | "BATCH_IMPORT_FINDINGS";
export interface FindingProviderFields {
  Confidence?: number;
  Criticality?: number;
  RelatedFindings?: Array<RelatedFinding>;
  Severity?: FindingProviderSeverity;
  Types?: Array<string>;
}
export interface FindingProviderSeverity {
  Label?: SeverityLabel;
  Original?: string;
}
export interface FirewallPolicyDetails {
  StatefulRuleGroupReferences?: Array<FirewallPolicyStatefulRuleGroupReferencesDetails>;
  StatelessCustomActions?: Array<FirewallPolicyStatelessCustomActionsDetails>;
  StatelessDefaultActions?: Array<string>;
  StatelessFragmentDefaultActions?: Array<string>;
  StatelessRuleGroupReferences?: Array<FirewallPolicyStatelessRuleGroupReferencesDetails>;
}
export interface FirewallPolicyStatefulRuleGroupReferencesDetails {
  ResourceArn?: string;
}
export type FirewallPolicyStatefulRuleGroupReferencesList = Array<FirewallPolicyStatefulRuleGroupReferencesDetails>;
export interface FirewallPolicyStatelessCustomActionsDetails {
  ActionDefinition?: StatelessCustomActionDefinition;
  ActionName?: string;
}
export type FirewallPolicyStatelessCustomActionsList = Array<FirewallPolicyStatelessCustomActionsDetails>;
export interface FirewallPolicyStatelessRuleGroupReferencesDetails {
  Priority?: number;
  ResourceArn?: string;
}
export type FirewallPolicyStatelessRuleGroupReferencesList = Array<FirewallPolicyStatelessRuleGroupReferencesDetails>;
export interface GeneratorDetails {
  Name?: string;
  Description?: string;
  Labels?: Array<string>;
}
export interface GeoLocation {
  Lon?: number;
  Lat?: number;
}
export interface GetAdministratorAccountRequest {
}
export interface GetAdministratorAccountResponse {
  Administrator?: Invitation;
}
export interface GetAggregatorV2Request {
  AggregatorV2Arn: string;
}
export interface GetAggregatorV2Response {
  AggregatorV2Arn?: string;
  AggregationRegion?: string;
  RegionLinkingMode?: string;
  LinkedRegions?: Array<string>;
}
export interface GetAutomationRuleV2Request {
  Identifier: string;
}
export interface GetAutomationRuleV2Response {
  RuleArn?: string;
  RuleId?: string;
  RuleOrder?: number;
  RuleName?: string;
  RuleStatus?: RuleStatusV2;
  Description?: string;
  Criteria?: Criteria;
  Actions?: Array<AutomationRulesActionV2>;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export interface GetConfigurationPolicyAssociationRequest {
  Target: Target;
}
export interface GetConfigurationPolicyAssociationResponse {
  ConfigurationPolicyId?: string;
  TargetId?: string;
  TargetType?: TargetType;
  AssociationType?: AssociationType;
  UpdatedAt?: Date | string;
  AssociationStatus?: ConfigurationPolicyAssociationStatus;
  AssociationStatusMessage?: string;
}
export interface GetConfigurationPolicyRequest {
  Identifier: string;
}
export interface GetConfigurationPolicyResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  UpdatedAt?: Date | string;
  CreatedAt?: Date | string;
  ConfigurationPolicy?: Policy;
}
export interface GetConnectorV2Request {
  ConnectorId: string;
}
export interface GetConnectorV2Response {
  ConnectorArn?: string;
  ConnectorId: string;
  Name: string;
  Description?: string;
  KmsKeyArn?: string;
  CreatedAt: Date | string;
  LastUpdatedAt: Date | string;
  Health: HealthCheck;
  ProviderDetail: ProviderDetail;
}
export interface GetEnabledStandardsRequest {
  StandardsSubscriptionArns?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetEnabledStandardsResponse {
  StandardsSubscriptions?: Array<StandardsSubscription>;
  NextToken?: string;
}
export interface GetFindingAggregatorRequest {
  FindingAggregatorArn: string;
}
export interface GetFindingAggregatorResponse {
  FindingAggregatorArn?: string;
  FindingAggregationRegion?: string;
  RegionLinkingMode?: string;
  Regions?: Array<string>;
}
export interface GetFindingHistoryRequest {
  FindingIdentifier: AwsSecurityFindingIdentifier;
  StartTime?: Date | string;
  EndTime?: Date | string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetFindingHistoryResponse {
  Records?: Array<FindingHistoryRecord>;
  NextToken?: string;
}
export interface GetFindingsRequest {
  Filters?: AwsSecurityFindingFilters;
  SortCriteria?: Array<SortCriterion>;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetFindingsResponse {
  Findings: Array<AwsSecurityFinding>;
  NextToken?: string;
}
export interface GetFindingStatisticsV2Request {
  GroupByRules: Array<GroupByRule>;
  SortOrder?: SortOrder;
  MaxStatisticResults?: number;
}
export interface GetFindingStatisticsV2Response {
  GroupByResults?: Array<GroupByResult>;
}
export interface GetFindingsV2Request {
  Filters?: OcsfFindingFilters;
  SortCriteria?: Array<SortCriterion>;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetFindingsV2Response {
  Findings?: Array<unknown>;
  NextToken?: string;
}
export interface GetInsightResultsRequest {
  InsightArn: string;
}
export interface GetInsightResultsResponse {
  InsightResults: InsightResults;
}
export interface GetInsightsRequest {
  InsightArns?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetInsightsResponse {
  Insights: Array<Insight>;
  NextToken?: string;
}
export interface GetInvitationsCountRequest {
}
export interface GetInvitationsCountResponse {
  InvitationsCount?: number;
}
export interface GetMasterAccountRequest {
}
export interface GetMasterAccountResponse {
  Master?: Invitation;
}
export interface GetMembersRequest {
  AccountIds: Array<string>;
}
export interface GetMembersResponse {
  Members?: Array<Member>;
  UnprocessedAccounts?: Array<Result>;
}
export interface GetResourcesStatisticsV2Request {
  GroupByRules: Array<ResourceGroupByRule>;
  SortOrder?: SortOrder;
  MaxStatisticResults?: number;
}
export interface GetResourcesStatisticsV2Response {
  GroupByResults: Array<GroupByResult>;
}
export interface GetResourcesV2Request {
  Filters?: ResourcesFilters;
  SortCriteria?: Array<SortCriterion>;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetResourcesV2Response {
  Resources: Array<ResourceResult>;
  NextToken?: string;
}
export interface GetSecurityControlDefinitionRequest {
  SecurityControlId: string;
}
export interface GetSecurityControlDefinitionResponse {
  SecurityControlDefinition: SecurityControlDefinition;
}
export type GroupByField = "activity_name" | "cloud.account.uid" | "cloud.provider" | "cloud.region" | "compliance.assessments.name" | "compliance.status" | "compliance.control" | "finding_info.title" | "finding_info.types" | "metadata.product.name" | "metadata.product.uid" | "resources.type" | "resources.uid" | "severity" | "status" | "vulnerabilities.fix_coverage" | "class_name" | "vulnerabilities.affected_packages.name" | "finding_info.analytic.name" | "compliance.standards" | "cloud.account.name";
export interface GroupByResult {
  GroupByField?: string;
  GroupByValues?: Array<GroupByValue>;
}
export type GroupByResults = Array<GroupByResult>;
export interface GroupByRule {
  Filters?: OcsfFindingFilters;
  GroupByField: GroupByField;
}
export type GroupByRules = Array<GroupByRule>;
export interface GroupByValue {
  FieldValue?: string;
  Count?: number;
}
export type GroupByValues = Array<GroupByValue>;
export interface HealthCheck {
  ConnectorStatus: ConnectorStatus;
  Message?: string;
  LastCheckedAt: Date | string;
}
export interface IcmpTypeCode {
  Code?: number;
  Type?: number;
}
export interface ImportFindingsError {
  Id: string;
  ErrorCode: string;
  ErrorMessage: string;
}
export type ImportFindingsErrorList = Array<ImportFindingsError>;
export interface Indicator {
  Key?: string;
  Values?: Array<string>;
  Title?: string;
  Type?: string;
}
export type IndicatorsList = Array<Indicator>;
export interface Insight {
  InsightArn: string;
  Name: string;
  Filters: AwsSecurityFindingFilters;
  GroupByAttribute: string;
}
export type InsightList = Array<Insight>;
export interface InsightResults {
  InsightArn: string;
  GroupByAttribute: string;
  ResultValues: Array<InsightResultValue>;
}
export interface InsightResultValue {
  GroupByAttributeValue: string;
  Count: number;
}
export type InsightResultValueList = Array<InsightResultValue>;
export type Integer = number;

export interface IntegerConfigurationOptions {
  DefaultValue?: number;
  Min?: number;
  Max?: number;
}
export type IntegerList = Array<number>;
export interface IntegerListConfigurationOptions {
  DefaultValue?: Array<number>;
  Min?: number;
  Max?: number;
  MaxItems?: number;
}
export type IntegrationType = "SEND_FINDINGS_TO_SECURITY_HUB" | "RECEIVE_FINDINGS_FROM_SECURITY_HUB" | "UPDATE_FINDINGS_IN_SECURITY_HUB";
export type IntegrationTypeList = Array<IntegrationType>;
export type IntegrationV2Type = "SEND_FINDINGS_TO_SECURITY_HUB" | "RECEIVE_FINDINGS_FROM_SECURITY_HUB" | "UPDATE_FINDINGS_IN_SECURITY_HUB";
export type IntegrationV2TypeList = Array<IntegrationV2Type>;
export declare class InternalException extends EffectData.TaggedError(
  "InternalException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export declare class InvalidAccessException extends EffectData.TaggedError(
  "InvalidAccessException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export interface Invitation {
  AccountId?: string;
  InvitationId?: string;
  InvitedAt?: Date | string;
  MemberStatus?: string;
}
export type InvitationList = Array<Invitation>;
export interface InviteMembersRequest {
  AccountIds: Array<string>;
}
export interface InviteMembersResponse {
  UnprocessedAccounts?: Array<Result>;
}
export interface IpFilter {
  Cidr?: string;
}
export type IpFilterList = Array<IpFilter>;
export interface IpOrganizationDetails {
  Asn?: number;
  AsnOrg?: string;
  Isp?: string;
  Org?: string;
}
export interface Ipv6CidrBlockAssociation {
  AssociationId?: string;
  Ipv6CidrBlock?: string;
  CidrBlockState?: string;
}
export type Ipv6CidrBlockAssociationList = Array<Ipv6CidrBlockAssociation>;
export interface JiraCloudDetail {
  CloudId?: string;
  ProjectKey?: string;
  Domain?: string;
  AuthUrl?: string;
  AuthStatus?: ConnectorAuthStatus;
}
export interface JiraCloudProviderConfiguration {
  ProjectKey?: string;
}
export interface JiraCloudUpdateConfiguration {
  ProjectKey: string;
}
export interface KeywordFilter {
  Value?: string;
}
export type KeywordFilterList = Array<KeywordFilter>;
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export interface ListAggregatorsV2Request {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAggregatorsV2Response {
  AggregatorsV2?: Array<AggregatorV2>;
  NextToken?: string;
}
export interface ListAutomationRulesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAutomationRulesResponse {
  AutomationRulesMetadata?: Array<AutomationRulesMetadata>;
  NextToken?: string;
}
export interface ListAutomationRulesV2Request {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAutomationRulesV2Response {
  Rules?: Array<AutomationRulesMetadataV2>;
  NextToken?: string;
}
export interface ListConfigurationPoliciesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListConfigurationPoliciesResponse {
  ConfigurationPolicySummaries?: Array<ConfigurationPolicySummary>;
  NextToken?: string;
}
export interface ListConfigurationPolicyAssociationsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: AssociationFilters;
}
export interface ListConfigurationPolicyAssociationsResponse {
  ConfigurationPolicyAssociationSummaries?: Array<ConfigurationPolicyAssociationSummary>;
  NextToken?: string;
}
export interface ListConnectorsV2Request {
  NextToken?: string;
  MaxResults?: number;
  ProviderName?: ConnectorProviderName;
  ConnectorStatus?: ConnectorStatus;
}
export interface ListConnectorsV2Response {
  NextToken?: string;
  Connectors: Array<ConnectorSummary>;
}
export interface ListEnabledProductsForImportRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEnabledProductsForImportResponse {
  ProductSubscriptions?: Array<string>;
  NextToken?: string;
}
export interface ListFindingAggregatorsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFindingAggregatorsResponse {
  FindingAggregators?: Array<FindingAggregator>;
  NextToken?: string;
}
export interface ListInvitationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListInvitationsResponse {
  Invitations?: Array<Invitation>;
  NextToken?: string;
}
export interface ListMembersRequest {
  OnlyAssociated?: boolean;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListMembersResponse {
  Members?: Array<Member>;
  NextToken?: string;
}
export interface ListOrganizationAdminAccountsRequest {
  MaxResults?: number;
  NextToken?: string;
  Feature?: SecurityHubFeature;
}
export interface ListOrganizationAdminAccountsResponse {
  AdminAccounts?: Array<AdminAccount>;
  NextToken?: string;
  Feature?: SecurityHubFeature;
}
export interface ListSecurityControlDefinitionsRequest {
  StandardsArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSecurityControlDefinitionsResponse {
  SecurityControlDefinitions: Array<SecurityControlDefinition>;
  NextToken?: string;
}
export interface ListStandardsControlAssociationsRequest {
  SecurityControlId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListStandardsControlAssociationsResponse {
  StandardsControlAssociationSummaries: Array<StandardsControlAssociationSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface LoadBalancerState {
  Code?: string;
  Reason?: string;
}
export type Long = number;

export interface Malware {
  Name: string;
  Type?: MalwareType;
  Path?: string;
  State?: MalwareState;
}
export type MalwareList = Array<Malware>;
export type MalwareState = "OBSERVED" | "REMOVAL_FAILED" | "REMOVED";
export type MalwareType = "ADWARE" | "BLENDED_THREAT" | "BOTNET_AGENT" | "COIN_MINER" | "EXPLOIT_KIT" | "KEYLOGGER" | "MACRO" | "POTENTIALLY_UNWANTED" | "SPYWARE" | "RANSOMWARE" | "REMOTE_ACCESS" | "ROOTKIT" | "TROJAN" | "VIRUS" | "WORM";
export interface MapFilter {
  Key?: string;
  Value?: string;
  Comparison?: MapFilterComparison;
}
export type MapFilterComparison = "EQUALS" | "NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS";
export type MapFilterList = Array<MapFilter>;
export type MaxResults = number;

export type MaxStatisticResults = number;

export interface Member {
  AccountId?: string;
  Email?: string;
  MasterId?: string;
  AdministratorId?: string;
  MemberStatus?: string;
  InvitedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type MemberList = Array<Member>;
export type MetadataUidList = Array<string>;
export interface Network {
  Direction?: NetworkDirection;
  Protocol?: string;
  OpenPortRange?: PortRange;
  SourceIpV4?: string;
  SourceIpV6?: string;
  SourcePort?: number;
  SourceDomain?: string;
  SourceMac?: string;
  DestinationIpV4?: string;
  DestinationIpV6?: string;
  DestinationPort?: number;
  DestinationDomain?: string;
}
export interface NetworkAutonomousSystem {
  Name?: string;
  Number?: number;
}
export interface NetworkConnection {
  Direction?: ConnectionDirection;
}
export interface NetworkConnectionAction {
  ConnectionDirection?: string;
  RemoteIpDetails?: ActionRemoteIpDetails;
  RemotePortDetails?: ActionRemotePortDetails;
  LocalPortDetails?: ActionLocalPortDetails;
  Protocol?: string;
  Blocked?: boolean;
}
export type NetworkDirection = "IN" | "OUT";
export interface NetworkEndpoint {
  Id?: string;
  Ip?: string;
  Domain?: string;
  Port?: number;
  Location?: NetworkGeoLocation;
  AutonomousSystem?: NetworkAutonomousSystem;
  Connection?: NetworkConnection;
}
export type NetworkEndpointsList = Array<NetworkEndpoint>;
export interface NetworkGeoLocation {
  City?: string;
  Country?: string;
  Lat?: number;
  Lon?: number;
}
export interface NetworkHeader {
  Protocol?: string;
  Destination?: NetworkPathComponentDetails;
  Source?: NetworkPathComponentDetails;
}
export interface NetworkPathComponent {
  ComponentId?: string;
  ComponentType?: string;
  Egress?: NetworkHeader;
  Ingress?: NetworkHeader;
}
export interface NetworkPathComponentDetails {
  Address?: Array<string>;
  PortRanges?: Array<PortRange>;
}
export type NetworkPathList = Array<NetworkPathComponent>;
export type NextToken = string;

export type NonEmptyString = string;

export type NonEmptyStringList = Array<string>;
export interface Note {
  Text: string;
  UpdatedBy: string;
  UpdatedAt: string;
}
export interface NoteUpdate {
  Text: string;
  UpdatedBy: string;
}
export interface NumberFilter {
  Gte?: number;
  Lte?: number;
  Eq?: number;
  Gt?: number;
  Lt?: number;
}
export type NumberFilterList = Array<NumberFilter>;
export interface Occurrences {
  LineRanges?: Array<Range>;
  OffsetRanges?: Array<Range>;
  Pages?: Array<Page>;
  Records?: Array<SecurityhubRecord>;
  Cells?: Array<Cell>;
}
export type OcsfBooleanField = "compliance.assessments.meets_criteria" | "vulnerabilities.is_exploit_available" | "vulnerabilities.is_fix_available";
export interface OcsfBooleanFilter {
  FieldName?: OcsfBooleanField;
  Filter?: BooleanFilter;
}
export type OcsfBooleanFilterList = Array<OcsfBooleanFilter>;
export type OcsfDateField = "finding_info.created_time_dt" | "finding_info.first_seen_time_dt" | "finding_info.last_seen_time_dt" | "finding_info.modified_time_dt" | "resources.image.created_time_dt" | "resources.image.last_used_time_dt" | "resources.modified_time_dt";
export interface OcsfDateFilter {
  FieldName?: OcsfDateField;
  Filter?: DateFilter;
}
export type OcsfDateFilterList = Array<OcsfDateFilter>;
export type OcsfFinding = unknown;

export interface OcsfFindingFilters {
  CompositeFilters?: Array<CompositeFilter>;
  CompositeOperator?: AllowedOperators;
}
export interface OcsfFindingIdentifier {
  CloudAccountUid: string;
  FindingInfoUid: string;
  MetadataProductUid: string;
}
export type OcsfFindingIdentifierList = Array<OcsfFindingIdentifier>;
export type OcsfFindingsList = Array<unknown>;
export type OcsfIpField = "evidences.dst_endpoint.ip" | "evidences.src_endpoint.ip";
export interface OcsfIpFilter {
  FieldName?: OcsfIpField;
  Filter?: IpFilter;
}
export type OcsfIpFilterList = Array<OcsfIpFilter>;
export type OcsfMapField = "resources.tags" | "compliance.control_parameters" | "databucket.tags" | "finding_info.tags";
export interface OcsfMapFilter {
  FieldName?: OcsfMapField;
  Filter?: MapFilter;
}
export type OcsfMapFilterList = Array<OcsfMapFilter>;
export type OcsfNumberField = "activity_id" | "compliance.status_id" | "confidence_score" | "severity_id" | "status_id" | "finding_info.related_events_count" | "evidences.api.response.code" | "evidences.dst_endpoint.autonomous_system.number" | "evidences.dst_endpoint.port" | "evidences.src_endpoint.autonomous_system.number" | "evidences.src_endpoint.port" | "resources.image.in_use_count";
export interface OcsfNumberFilter {
  FieldName?: OcsfNumberField;
  Filter?: NumberFilter;
}
export type OcsfNumberFilterList = Array<OcsfNumberFilter>;
export type OcsfStringField = "metadata.uid" | "activity_name" | "cloud.account.uid" | "cloud.provider" | "cloud.region" | "compliance.assessments.category" | "compliance.assessments.name" | "compliance.control" | "compliance.status" | "compliance.standards" | "finding_info.desc" | "finding_info.src_url" | "finding_info.title" | "finding_info.types" | "finding_info.uid" | "finding_info.related_events.uid" | "finding_info.related_events.product.uid" | "finding_info.related_events.title" | "metadata.product.name" | "metadata.product.uid" | "metadata.product.vendor_name" | "remediation.desc" | "remediation.references" | "resources.cloud_partition" | "resources.region" | "resources.type" | "resources.uid" | "severity" | "status" | "comment" | "vulnerabilities.fix_coverage" | "class_name" | "databucket.encryption_details.algorithm" | "databucket.encryption_details.key_uid" | "databucket.file.data_classifications.classifier_details.type" | "evidences.actor.user.account.uid" | "evidences.api.operation" | "evidences.api.response.error_message" | "evidences.api.service.name" | "evidences.connection_info.direction" | "evidences.connection_info.protocol_name" | "evidences.dst_endpoint.autonomous_system.name" | "evidences.dst_endpoint.location.city" | "evidences.dst_endpoint.location.country" | "evidences.src_endpoint.autonomous_system.name" | "evidences.src_endpoint.hostname" | "evidences.src_endpoint.location.city" | "evidences.src_endpoint.location.country" | "finding_info.analytic.name" | "malware.name" | "malware_scan_info.uid" | "malware.severity" | "resources.cloud_function.layers.uid_alt" | "resources.cloud_function.runtime" | "resources.cloud_function.user.uid" | "resources.device.encryption_details.key_uid" | "resources.device.image.uid" | "resources.image.architecture" | "resources.image.registry_uid" | "resources.image.repository_name" | "resources.image.uid" | "resources.subnet_info.uid" | "resources.vpc_uid" | "vulnerabilities.affected_code.file.path" | "vulnerabilities.affected_packages.name" | "vulnerabilities.cve.epss.score" | "vulnerabilities.cve.uid" | "vulnerabilities.related_vulnerabilities" | "cloud.account.name";
export interface OcsfStringFilter {
  FieldName?: OcsfStringField;
  Filter?: StringFilter;
}
export type OcsfStringFilterList = Array<OcsfStringFilter>;
export interface OrganizationConfiguration {
  ConfigurationType?: OrganizationConfigurationConfigurationType;
  Status?: OrganizationConfigurationStatus;
  StatusMessage?: string;
}
export type OrganizationConfigurationConfigurationType = "CENTRAL" | "LOCAL";
export type OrganizationConfigurationStatus = "PENDING" | "ENABLED" | "FAILED";
export interface Page {
  PageNumber?: number;
  LineRange?: Range;
  OffsetRange?: Range;
}
export type Pages = Array<Page>;
export interface ParameterConfiguration {
  ValueType: ParameterValueType;
  Value?: ParameterValue;
}
export interface ParameterDefinition {
  Description: string;
  ConfigurationOptions: ConfigurationOptions;
}
export type ParameterDefinitions = Record<string, ParameterDefinition>;
export type Parameters = Record<string, ParameterConfiguration>;
interface _ParameterValue {
  Integer?: number;
  IntegerList?: Array<number>;
  Double?: number;
  String?: string;
  StringList?: Array<string>;
  Boolean?: boolean;
  Enum?: string;
  EnumList?: Array<string>;
}

export type ParameterValue = (_ParameterValue & { Integer: number }) | (_ParameterValue & { IntegerList: Array<number> }) | (_ParameterValue & { Double: number }) | (_ParameterValue & { String: string }) | (_ParameterValue & { StringList: Array<string> }) | (_ParameterValue & { Boolean: boolean }) | (_ParameterValue & { Enum: string }) | (_ParameterValue & { EnumList: Array<string> });
export type ParameterValueType = "DEFAULT" | "CUSTOM";
export type Partition = "aws" | "aws-cn" | "aws-us-gov";
export interface PatchSummary {
  Id: string;
  InstalledCount?: number;
  MissingCount?: number;
  FailedCount?: number;
  InstalledOtherCount?: number;
  InstalledRejectedCount?: number;
  InstalledPendingReboot?: number;
  OperationStartTime?: string;
  OperationEndTime?: string;
  RebootOption?: string;
  Operation?: string;
}
interface _Policy {
  SecurityHub?: SecurityHubPolicy;
}

export type Policy = (_Policy & { SecurityHub: SecurityHubPolicy });
export interface PortProbeAction {
  PortProbeDetails?: Array<PortProbeDetail>;
  Blocked?: boolean;
}
export interface PortProbeDetail {
  LocalPortDetails?: ActionLocalPortDetails;
  LocalIpDetails?: ActionLocalIpDetails;
  RemoteIpDetails?: ActionRemoteIpDetails;
}
export type PortProbeDetailList = Array<PortProbeDetail>;
export interface PortRange {
  Begin?: number;
  End?: number;
}
export interface PortRangeFromTo {
  From?: number;
  To?: number;
}
export type PortRangeList = Array<PortRange>;
export interface ProcessDetails {
  Name?: string;
  Path?: string;
  Pid?: number;
  ParentPid?: number;
  LaunchedAt?: string;
  TerminatedAt?: string;
}
export interface Product {
  ProductArn: string;
  ProductName?: string;
  CompanyName?: string;
  Description?: string;
  Categories?: Array<string>;
  IntegrationTypes?: Array<IntegrationType>;
  MarketplaceUrl?: string;
  ActivationUrl?: string;
  ProductSubscriptionResourcePolicy?: string;
}
export type ProductsList = Array<Product>;
export type ProductSubscriptionArnList = Array<string>;
export type ProductsV2List = Array<ProductV2>;
export interface ProductV2 {
  ProductV2Name?: string;
  CompanyName?: string;
  Description?: string;
  Categories?: Array<string>;
  IntegrationV2Types?: Array<IntegrationV2Type>;
  MarketplaceUrl?: string;
  ActivationUrl?: string;
}
export interface PropagatingVgwSetDetails {
  GatewayId?: string;
}
export type PropagatingVgwSetList = Array<PropagatingVgwSetDetails>;
interface _ProviderConfiguration {
  JiraCloud?: JiraCloudProviderConfiguration;
  ServiceNow?: ServiceNowProviderConfiguration;
}

export type ProviderConfiguration = (_ProviderConfiguration & { JiraCloud: JiraCloudProviderConfiguration }) | (_ProviderConfiguration & { ServiceNow: ServiceNowProviderConfiguration });
interface _ProviderDetail {
  JiraCloud?: JiraCloudDetail;
  ServiceNow?: ServiceNowDetail;
}

export type ProviderDetail = (_ProviderDetail & { JiraCloud: JiraCloudDetail }) | (_ProviderDetail & { ServiceNow: ServiceNowDetail });
export interface ProviderSummary {
  ProviderName?: ConnectorProviderName;
  ConnectorStatus?: ConnectorStatus;
}
interface _ProviderUpdateConfiguration {
  JiraCloud?: JiraCloudUpdateConfiguration;
}

export type ProviderUpdateConfiguration = (_ProviderUpdateConfiguration & { JiraCloud: JiraCloudUpdateConfiguration });
export interface Range {
  Start?: number;
  End?: number;
  StartColumn?: number;
}
export type Ranges = Array<Range>;
export type RatioScale = number;

export interface Recommendation {
  Text?: string;
  Url?: string;
}
export interface SecurityhubRecord {
  JsonPath?: string;
  RecordIndex?: number;
}
export type Records = Array<SecurityhubRecord>;
export type RecordState = "ACTIVE" | "ARCHIVED";
export type RegionAvailabilityStatus = "AVAILABLE" | "UNAVAILABLE";
export interface RelatedFinding {
  ProductArn: string;
  Id: string;
}
export type RelatedFindingList = Array<RelatedFinding>;
export type RelatedRequirementsList = Array<string>;
export interface Remediation {
  Recommendation?: Recommendation;
}
export interface Resource {
  Type: string;
  Id: string;
  Partition?: Partition;
  Region?: string;
  ResourceRole?: string;
  Tags?: Record<string, string>;
  DataClassification?: DataClassificationDetails;
  Details?: ResourceDetails;
  ApplicationName?: string;
  ApplicationArn?: string;
}
export type ResourceArn = string;

export type ResourceCategory = "Compute" | "Database" | "Storage" | "Code" | "AI/ML" | "Identity" | "Network" | "Other";
export type ResourceConfig = unknown;

export declare class ResourceConflictException extends EffectData.TaggedError(
  "ResourceConflictException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export interface ResourceDetails {
  AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;
  AwsCodeBuildProject?: AwsCodeBuildProjectDetails;
  AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;
  AwsEc2Instance?: AwsEc2InstanceDetails;
  AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;
  AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;
  AwsEc2Volume?: AwsEc2VolumeDetails;
  AwsEc2Vpc?: AwsEc2VpcDetails;
  AwsEc2Eip?: AwsEc2EipDetails;
  AwsEc2Subnet?: AwsEc2SubnetDetails;
  AwsEc2NetworkAcl?: AwsEc2NetworkAclDetails;
  AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;
  AwsElasticBeanstalkEnvironment?: AwsElasticBeanstalkEnvironmentDetails;
  AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;
  AwsS3Bucket?: AwsS3BucketDetails;
  AwsS3AccountPublicAccessBlock?: AwsS3AccountPublicAccessBlockDetails;
  AwsS3Object?: AwsS3ObjectDetails;
  AwsSecretsManagerSecret?: AwsSecretsManagerSecretDetails;
  AwsIamAccessKey?: AwsIamAccessKeyDetails;
  AwsIamUser?: AwsIamUserDetails;
  AwsIamPolicy?: AwsIamPolicyDetails;
  AwsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails;
  AwsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails;
  AwsDynamoDbTable?: AwsDynamoDbTableDetails;
  AwsApiGatewayStage?: AwsApiGatewayStageDetails;
  AwsApiGatewayRestApi?: AwsApiGatewayRestApiDetails;
  AwsCloudTrailTrail?: AwsCloudTrailTrailDetails;
  AwsSsmPatchCompliance?: AwsSsmPatchComplianceDetails;
  AwsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails;
  AwsRedshiftCluster?: AwsRedshiftClusterDetails;
  AwsElbLoadBalancer?: AwsElbLoadBalancerDetails;
  AwsIamGroup?: AwsIamGroupDetails;
  AwsIamRole?: AwsIamRoleDetails;
  AwsKmsKey?: AwsKmsKeyDetails;
  AwsLambdaFunction?: AwsLambdaFunctionDetails;
  AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;
  AwsRdsDbInstance?: AwsRdsDbInstanceDetails;
  AwsSnsTopic?: AwsSnsTopicDetails;
  AwsSqsQueue?: AwsSqsQueueDetails;
  AwsWafWebAcl?: AwsWafWebAclDetails;
  AwsRdsDbSnapshot?: AwsRdsDbSnapshotDetails;
  AwsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails;
  AwsRdsDbCluster?: AwsRdsDbClusterDetails;
  AwsEcsCluster?: AwsEcsClusterDetails;
  AwsEcsContainer?: AwsEcsContainerDetails;
  AwsEcsTaskDefinition?: AwsEcsTaskDefinitionDetails;
  Container?: ContainerDetails;
  Other?: Record<string, string>;
  AwsRdsEventSubscription?: AwsRdsEventSubscriptionDetails;
  AwsEcsService?: AwsEcsServiceDetails;
  AwsAutoScalingLaunchConfiguration?: AwsAutoScalingLaunchConfigurationDetails;
  AwsEc2VpnConnection?: AwsEc2VpnConnectionDetails;
  AwsEcrContainerImage?: AwsEcrContainerImageDetails;
  AwsOpenSearchServiceDomain?: AwsOpenSearchServiceDomainDetails;
  AwsEc2VpcEndpointService?: AwsEc2VpcEndpointServiceDetails;
  AwsXrayEncryptionConfig?: AwsXrayEncryptionConfigDetails;
  AwsWafRateBasedRule?: AwsWafRateBasedRuleDetails;
  AwsWafRegionalRateBasedRule?: AwsWafRegionalRateBasedRuleDetails;
  AwsEcrRepository?: AwsEcrRepositoryDetails;
  AwsEksCluster?: AwsEksClusterDetails;
  AwsNetworkFirewallFirewallPolicy?: AwsNetworkFirewallFirewallPolicyDetails;
  AwsNetworkFirewallFirewall?: AwsNetworkFirewallFirewallDetails;
  AwsNetworkFirewallRuleGroup?: AwsNetworkFirewallRuleGroupDetails;
  AwsRdsDbSecurityGroup?: AwsRdsDbSecurityGroupDetails;
  AwsKinesisStream?: AwsKinesisStreamDetails;
  AwsEc2TransitGateway?: AwsEc2TransitGatewayDetails;
  AwsEfsAccessPoint?: AwsEfsAccessPointDetails;
  AwsCloudFormationStack?: AwsCloudFormationStackDetails;
  AwsCloudWatchAlarm?: AwsCloudWatchAlarmDetails;
  AwsEc2VpcPeeringConnection?: AwsEc2VpcPeeringConnectionDetails;
  AwsWafRegionalRuleGroup?: AwsWafRegionalRuleGroupDetails;
  AwsWafRegionalRule?: AwsWafRegionalRuleDetails;
  AwsWafRegionalWebAcl?: AwsWafRegionalWebAclDetails;
  AwsWafRule?: AwsWafRuleDetails;
  AwsWafRuleGroup?: AwsWafRuleGroupDetails;
  AwsEcsTask?: AwsEcsTaskDetails;
  AwsBackupBackupVault?: AwsBackupBackupVaultDetails;
  AwsBackupBackupPlan?: AwsBackupBackupPlanDetails;
  AwsBackupRecoveryPoint?: AwsBackupRecoveryPointDetails;
  AwsEc2LaunchTemplate?: AwsEc2LaunchTemplateDetails;
  AwsSageMakerNotebookInstance?: AwsSageMakerNotebookInstanceDetails;
  AwsWafv2WebAcl?: AwsWafv2WebAclDetails;
  AwsWafv2RuleGroup?: AwsWafv2RuleGroupDetails;
  AwsEc2RouteTable?: AwsEc2RouteTableDetails;
  AwsAmazonMqBroker?: AwsAmazonMqBrokerDetails;
  AwsAppSyncGraphQlApi?: AwsAppSyncGraphQlApiDetails;
  AwsEventSchemasRegistry?: AwsEventSchemasRegistryDetails;
  AwsGuardDutyDetector?: AwsGuardDutyDetectorDetails;
  AwsStepFunctionStateMachine?: AwsStepFunctionStateMachineDetails;
  AwsAthenaWorkGroup?: AwsAthenaWorkGroupDetails;
  AwsEventsEventbus?: AwsEventsEventbusDetails;
  AwsDmsEndpoint?: AwsDmsEndpointDetails;
  AwsEventsEndpoint?: AwsEventsEndpointDetails;
  AwsDmsReplicationTask?: AwsDmsReplicationTaskDetails;
  AwsDmsReplicationInstance?: AwsDmsReplicationInstanceDetails;
  AwsRoute53HostedZone?: AwsRoute53HostedZoneDetails;
  AwsMskCluster?: AwsMskClusterDetails;
  AwsS3AccessPoint?: AwsS3AccessPointDetails;
  AwsEc2ClientVpnEndpoint?: AwsEc2ClientVpnEndpointDetails;
  CodeRepository?: CodeRepositoryDetails;
}
export interface ResourceFindingsSummary {
  FindingType: string;
  ProductName: string;
  TotalFindings: number;
  Severities?: ResourceSeverityBreakdown;
}
export type ResourceFindingsSummaryList = Array<ResourceFindingsSummary>;
export type ResourceGroupByField = "AccountId" | "Region" | "ResourceCategory" | "ResourceType" | "ResourceName" | "FindingsSummary.FindingType";
export interface ResourceGroupByRule {
  GroupByField: ResourceGroupByField;
  Filters?: ResourcesFilters;
}
export type ResourceGroupByRules = Array<ResourceGroupByRule>;
export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export type ResourceList = Array<Resource>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export interface ResourceResult {
  ResourceGuid?: string;
  ResourceId: string;
  AccountId: string;
  Region: string;
  ResourceCategory?: ResourceCategory;
  ResourceType?: string;
  ResourceName?: string;
  ResourceCreationTimeDt?: string;
  ResourceDetailCaptureTimeDt: string;
  FindingsSummary?: Array<ResourceFindingsSummary>;
  ResourceTags?: Array<ResourceTag>;
  ResourceConfig: unknown;
}
export type Resources = Array<ResourceResult>;
export interface ResourcesCompositeFilter {
  StringFilters?: Array<ResourcesStringFilter>;
  DateFilters?: Array<ResourcesDateFilter>;
  NumberFilters?: Array<ResourcesNumberFilter>;
  MapFilters?: Array<ResourcesMapFilter>;
  NestedCompositeFilters?: Array<ResourcesCompositeFilter>;
  Operator?: AllowedOperators;
}
export type ResourcesCompositeFilterList = Array<ResourcesCompositeFilter>;
export type ResourcesDateField = "ResourceDetailCaptureTime" | "ResourceCreationTime";
export interface ResourcesDateFilter {
  FieldName?: ResourcesDateField;
  Filter?: DateFilter;
}
export type ResourcesDateFilterList = Array<ResourcesDateFilter>;
export interface ResourceSeverityBreakdown {
  Other?: number;
  Fatal?: number;
  Critical?: number;
  High?: number;
  Medium?: number;
  Low?: number;
  Informational?: number;
  Unknown?: number;
}
export interface ResourcesFilters {
  CompositeFilters?: Array<ResourcesCompositeFilter>;
  CompositeOperator?: AllowedOperators;
}
export type ResourcesMapField = "ResourceTags";
export interface ResourcesMapFilter {
  FieldName?: ResourcesMapField;
  Filter?: MapFilter;
}
export type ResourcesMapFilterList = Array<ResourcesMapFilter>;
export type ResourcesNumberField = "FindingsSummary.TotalFindings" | "FindingsSummary.Severities.Other" | "FindingsSummary.Severities.Fatal" | "FindingsSummary.Severities.Critical" | "FindingsSummary.Severities.High" | "FindingsSummary.Severities.Medium" | "FindingsSummary.Severities.Low" | "FindingsSummary.Severities.Informational" | "FindingsSummary.Severities.Unknown";
export interface ResourcesNumberFilter {
  FieldName?: ResourcesNumberField;
  Filter?: NumberFilter;
}
export type ResourcesNumberFilterList = Array<ResourcesNumberFilter>;
export type ResourcesStringField = "ResourceGuid" | "ResourceId" | "AccountId" | "Region" | "ResourceCategory" | "ResourceType" | "ResourceName" | "FindingsSummary.FindingType" | "FindingsSummary.ProductName";
export interface ResourcesStringFilter {
  FieldName?: ResourcesStringField;
  Filter?: StringFilter;
}
export type ResourcesStringFilterList = Array<ResourcesStringFilter>;
export interface ResourceTag {
  Key: string;
  Value: string;
}
export type ResourceTagList = Array<ResourceTag>;
export interface Result {
  AccountId?: string;
  ProcessingResult?: string;
}
export type ResultList = Array<Result>;
export interface RouteSetDetails {
  CarrierGatewayId?: string;
  CoreNetworkArn?: string;
  DestinationCidrBlock?: string;
  DestinationIpv6CidrBlock?: string;
  DestinationPrefixListId?: string;
  EgressOnlyInternetGatewayId?: string;
  GatewayId?: string;
  InstanceId?: string;
  InstanceOwnerId?: string;
  LocalGatewayId?: string;
  NatGatewayId?: string;
  NetworkInterfaceId?: string;
  Origin?: string;
  State?: string;
  TransitGatewayId?: string;
  VpcPeeringConnectionId?: string;
}
export type RouteSetList = Array<RouteSetDetails>;
export interface RuleGroupDetails {
  RuleVariables?: RuleGroupVariables;
  RulesSource?: RuleGroupSource;
}
export interface RuleGroupSource {
  RulesSourceList?: RuleGroupSourceListDetails;
  RulesString?: string;
  StatefulRules?: Array<RuleGroupSourceStatefulRulesDetails>;
  StatelessRulesAndCustomActions?: RuleGroupSourceStatelessRulesAndCustomActionsDetails;
}
export interface RuleGroupSourceCustomActionsDetails {
  ActionDefinition?: StatelessCustomActionDefinition;
  ActionName?: string;
}
export type RuleGroupSourceCustomActionsList = Array<RuleGroupSourceCustomActionsDetails>;
export interface RuleGroupSourceListDetails {
  GeneratedRulesType?: string;
  TargetTypes?: Array<string>;
  Targets?: Array<string>;
}
export interface RuleGroupSourceStatefulRulesDetails {
  Action?: string;
  Header?: RuleGroupSourceStatefulRulesHeaderDetails;
  RuleOptions?: Array<RuleGroupSourceStatefulRulesOptionsDetails>;
}
export interface RuleGroupSourceStatefulRulesHeaderDetails {
  Destination?: string;
  DestinationPort?: string;
  Direction?: string;
  Protocol?: string;
  Source?: string;
  SourcePort?: string;
}
export type RuleGroupSourceStatefulRulesList = Array<RuleGroupSourceStatefulRulesDetails>;
export interface RuleGroupSourceStatefulRulesOptionsDetails {
  Keyword?: string;
  Settings?: Array<string>;
}
export type RuleGroupSourceStatefulRulesOptionsList = Array<RuleGroupSourceStatefulRulesOptionsDetails>;
export type RuleGroupSourceStatefulRulesRuleOptionsSettingsList = Array<string>;
export interface RuleGroupSourceStatelessRuleDefinition {
  Actions?: Array<string>;
  MatchAttributes?: RuleGroupSourceStatelessRuleMatchAttributes;
}
export interface RuleGroupSourceStatelessRuleMatchAttributes {
  DestinationPorts?: Array<RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts>;
  Destinations?: Array<RuleGroupSourceStatelessRuleMatchAttributesDestinations>;
  Protocols?: Array<number>;
  SourcePorts?: Array<RuleGroupSourceStatelessRuleMatchAttributesSourcePorts>;
  Sources?: Array<RuleGroupSourceStatelessRuleMatchAttributesSources>;
  TcpFlags?: Array<RuleGroupSourceStatelessRuleMatchAttributesTcpFlags>;
}
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts {
  FromPort?: number;
  ToPort?: number;
}
export type RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList = Array<RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts>;
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinations {
  AddressDefinition?: string;
}
export type RuleGroupSourceStatelessRuleMatchAttributesDestinationsList = Array<RuleGroupSourceStatelessRuleMatchAttributesDestinations>;
export type RuleGroupSourceStatelessRuleMatchAttributesProtocolsList = Array<number>;
export interface RuleGroupSourceStatelessRuleMatchAttributesSourcePorts {
  FromPort?: number;
  ToPort?: number;
}
export type RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList = Array<RuleGroupSourceStatelessRuleMatchAttributesSourcePorts>;
export interface RuleGroupSourceStatelessRuleMatchAttributesSources {
  AddressDefinition?: string;
}
export type RuleGroupSourceStatelessRuleMatchAttributesSourcesList = Array<RuleGroupSourceStatelessRuleMatchAttributesSources>;
export interface RuleGroupSourceStatelessRuleMatchAttributesTcpFlags {
  Flags?: Array<string>;
  Masks?: Array<string>;
}
export type RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList = Array<RuleGroupSourceStatelessRuleMatchAttributesTcpFlags>;
export interface RuleGroupSourceStatelessRulesAndCustomActionsDetails {
  CustomActions?: Array<RuleGroupSourceCustomActionsDetails>;
  StatelessRules?: Array<RuleGroupSourceStatelessRulesDetails>;
}
export interface RuleGroupSourceStatelessRulesDetails {
  Priority?: number;
  RuleDefinition?: RuleGroupSourceStatelessRuleDefinition;
}
export type RuleGroupSourceStatelessRulesList = Array<RuleGroupSourceStatelessRulesDetails>;
export interface RuleGroupVariables {
  IpSets?: RuleGroupVariablesIpSetsDetails;
  PortSets?: RuleGroupVariablesPortSetsDetails;
}
export interface RuleGroupVariablesIpSetsDetails {
  Definition?: Array<string>;
}
export interface RuleGroupVariablesPortSetsDetails {
  Definition?: Array<string>;
}
export type RuleOrderValue = number;

export type RuleOrderValueV2 = number;

export type RuleStatus = "ENABLED" | "DISABLED";
export type RuleStatusV2 = "ENABLED" | "DISABLED";
export interface SecurityControl {
  SecurityControlId: string;
  SecurityControlArn: string;
  Title: string;
  Description: string;
  RemediationUrl: string;
  SeverityRating: SeverityRating;
  SecurityControlStatus: ControlStatus;
  UpdateStatus?: UpdateStatus;
  Parameters?: Record<string, ParameterConfiguration>;
  LastUpdateReason?: string;
}
export interface SecurityControlCustomParameter {
  SecurityControlId?: string;
  Parameters?: Record<string, ParameterConfiguration>;
}
export type SecurityControlCustomParametersList = Array<SecurityControlCustomParameter>;
export interface SecurityControlDefinition {
  SecurityControlId: string;
  Title: string;
  Description: string;
  RemediationUrl: string;
  SeverityRating: SeverityRating;
  CurrentRegionAvailability: RegionAvailabilityStatus;
  CustomizableProperties?: Array<SecurityControlProperty>;
  ParameterDefinitions?: Record<string, ParameterDefinition>;
}
export type SecurityControlDefinitions = Array<SecurityControlDefinition>;
export interface SecurityControlParameter {
  Name?: string;
  Value?: Array<string>;
}
export type SecurityControlParametersList = Array<SecurityControlParameter>;
export type SecurityControlProperty = "Parameters";
export type SecurityControls = Array<SecurityControl>;
export interface SecurityControlsConfiguration {
  EnabledSecurityControlIdentifiers?: Array<string>;
  DisabledSecurityControlIdentifiers?: Array<string>;
  SecurityControlCustomParameters?: Array<SecurityControlCustomParameter>;
}
export type SecurityGroups = Array<string>;
export type SecurityHubFeature = "SecurityHub" | "SecurityHubV2";
export interface SecurityHubPolicy {
  ServiceEnabled?: boolean;
  EnabledStandardIdentifiers?: Array<string>;
  SecurityControlsConfiguration?: SecurityControlsConfiguration;
}
export interface SensitiveDataDetections {
  Count?: number;
  Type?: string;
  Occurrences?: Occurrences;
}
export type SensitiveDataDetectionsList = Array<SensitiveDataDetections>;
export interface SensitiveDataResult {
  Category?: string;
  Detections?: Array<SensitiveDataDetections>;
  TotalCount?: number;
}
export type SensitiveDataResultList = Array<SensitiveDataResult>;
export type SensitiveNonEmptyString = string;

export interface Sequence {
  Uid?: string;
  Actors?: Array<Actor>;
  Endpoints?: Array<NetworkEndpoint>;
  Signals?: Array<Signal>;
  SequenceIndicators?: Array<Indicator>;
}
export interface ServiceNowDetail {
  InstanceName?: string;
  ClientId?: string;
  AuthStatus: ConnectorAuthStatus;
}
export interface ServiceNowProviderConfiguration {
  InstanceName: string;
  ClientId: string;
  ClientSecret: string;
}
export interface Severity {
  Product?: number;
  Label?: SeverityLabel;
  Normalized?: number;
  Original?: string;
}
export type SeverityLabel = "INFORMATIONAL" | "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type SeverityRating = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export interface SeverityUpdate {
  Normalized?: number;
  Product?: number;
  Label?: SeverityLabel;
}
export interface Signal {
  Type?: string;
  Id?: string;
  Title?: string;
  ProductArn?: string;
  ResourceIds?: Array<string>;
  SignalIndicators?: Array<Indicator>;
  Name?: string;
  CreatedAt?: number;
  UpdatedAt?: number;
  FirstSeenAt?: number;
  LastSeenAt?: number;
  Severity?: number;
  Count?: number;
  ActorIds?: Array<string>;
  EndpointIds?: Array<string>;
}
export type SignalsList = Array<Signal>;
export type SizeBytes = number;

export interface SoftwarePackage {
  Name?: string;
  Version?: string;
  Epoch?: string;
  Release?: string;
  Architecture?: string;
  PackageManager?: string;
  FilePath?: string;
  FixedInVersion?: string;
  Remediation?: string;
  SourceLayerHash?: string;
  SourceLayerArn?: string;
}
export type SoftwarePackageList = Array<SoftwarePackage>;
export type SortCriteria = Array<SortCriterion>;
export interface SortCriterion {
  Field?: string;
  SortOrder?: SortOrder;
}
export type SortOrder = "asc" | "desc";
export interface Standard {
  StandardsArn?: string;
  Name?: string;
  Description?: string;
  EnabledByDefault?: boolean;
  StandardsManagedBy?: StandardsManagedBy;
}
export type Standards = Array<Standard>;
export interface StandardsControl {
  StandardsControlArn?: string;
  ControlStatus?: ControlStatus;
  DisabledReason?: string;
  ControlStatusUpdatedAt?: Date | string;
  ControlId?: string;
  Title?: string;
  Description?: string;
  RemediationUrl?: string;
  SeverityRating?: SeverityRating;
  RelatedRequirements?: Array<string>;
}
export type StandardsControlArnList = Array<string>;
export interface StandardsControlAssociationDetail {
  StandardsArn: string;
  SecurityControlId: string;
  SecurityControlArn: string;
  AssociationStatus: AssociationStatus;
  RelatedRequirements?: Array<string>;
  UpdatedAt?: Date | string;
  UpdatedReason?: string;
  StandardsControlTitle?: string;
  StandardsControlDescription?: string;
  StandardsControlArns?: Array<string>;
}
export type StandardsControlAssociationDetails = Array<StandardsControlAssociationDetail>;
export interface StandardsControlAssociationId {
  SecurityControlId: string;
  StandardsArn: string;
}
export type StandardsControlAssociationIds = Array<StandardsControlAssociationId>;
export type StandardsControlAssociationSummaries = Array<StandardsControlAssociationSummary>;
export interface StandardsControlAssociationSummary {
  StandardsArn: string;
  SecurityControlId: string;
  SecurityControlArn: string;
  AssociationStatus: AssociationStatus;
  RelatedRequirements?: Array<string>;
  UpdatedAt?: Date | string;
  UpdatedReason?: string;
  StandardsControlTitle?: string;
  StandardsControlDescription?: string;
}
export interface StandardsControlAssociationUpdate {
  StandardsArn: string;
  SecurityControlId: string;
  AssociationStatus: AssociationStatus;
  UpdatedReason?: string;
}
export type StandardsControlAssociationUpdates = Array<StandardsControlAssociationUpdate>;
export type StandardsControls = Array<StandardsControl>;
export type StandardsControlsUpdatable = "READY_FOR_UPDATES" | "NOT_READY_FOR_UPDATES";
export type StandardsInputParameterMap = Record<string, string>;
export interface StandardsManagedBy {
  Company?: string;
  Product?: string;
}
export type StandardsStatus = "PENDING" | "READY" | "FAILED" | "DELETING" | "INCOMPLETE";
export interface StandardsStatusReason {
  StatusReasonCode: StatusReasonCode;
}
export interface StandardsSubscription {
  StandardsSubscriptionArn: string;
  StandardsArn: string;
  StandardsInput: Record<string, string>;
  StandardsStatus: StandardsStatus;
  StandardsControlsUpdatable?: StandardsControlsUpdatable;
  StandardsStatusReason?: StandardsStatusReason;
}
export type StandardsSubscriptionArns = Array<string>;
export interface StandardsSubscriptionRequest {
  StandardsArn: string;
  StandardsInput?: Record<string, string>;
}
export type StandardsSubscriptionRequests = Array<StandardsSubscriptionRequest>;
export type StandardsSubscriptions = Array<StandardsSubscription>;
export interface StartConfigurationPolicyAssociationRequest {
  ConfigurationPolicyIdentifier: string;
  Target: Target;
}
export interface StartConfigurationPolicyAssociationResponse {
  ConfigurationPolicyId?: string;
  TargetId?: string;
  TargetType?: TargetType;
  AssociationType?: AssociationType;
  UpdatedAt?: Date | string;
  AssociationStatus?: ConfigurationPolicyAssociationStatus;
  AssociationStatusMessage?: string;
}
export interface StartConfigurationPolicyDisassociationRequest {
  Target?: Target;
  ConfigurationPolicyIdentifier: string;
}
export interface StartConfigurationPolicyDisassociationResponse {
}
export interface StatelessCustomActionDefinition {
  PublishMetricAction?: StatelessCustomPublishMetricAction;
}
export interface StatelessCustomPublishMetricAction {
  Dimensions?: Array<StatelessCustomPublishMetricActionDimension>;
}
export interface StatelessCustomPublishMetricActionDimension {
  Value?: string;
}
export type StatelessCustomPublishMetricActionDimensionsList = Array<StatelessCustomPublishMetricActionDimension>;
export interface StatusReason {
  ReasonCode: string;
  Description?: string;
}
export type StatusReasonCode = "NO_AVAILABLE_CONFIGURATION_RECORDER" | "MAXIMUM_NUMBER_OF_CONFIG_RULES_EXCEEDED" | "INTERNAL_ERROR";
export type StatusReasonsList = Array<StatusReason>;
export interface StringConfigurationOptions {
  DefaultValue?: string;
  Re2Expression?: string;
  ExpressionDescription?: string;
}
export interface StringFilter {
  Value?: string;
  Comparison?: StringFilterComparison;
}
export type StringFilterComparison = "EQUALS" | "PREFIX" | "NOT_EQUALS" | "PREFIX_NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS" | "CONTAINS_WORD";
export type StringFilterList = Array<StringFilter>;
export type StringList = Array<string>;
export interface StringListConfigurationOptions {
  DefaultValue?: Array<string>;
  Re2Expression?: string;
  MaxItems?: number;
  ExpressionDescription?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

interface _Target {
  AccountId?: string;
  OrganizationalUnitId?: string;
  RootId?: string;
}

export type Target = (_Target & { AccountId: string }) | (_Target & { OrganizationalUnitId: string }) | (_Target & { RootId: string });
export type TargetType = "ACCOUNT" | "ORGANIZATIONAL_UNIT" | "ROOT";
export interface Threat {
  Name?: string;
  Severity?: string;
  ItemCount?: number;
  FilePaths?: Array<FilePaths>;
}
export interface ThreatIntelIndicator {
  Type?: ThreatIntelIndicatorType;
  Value?: string;
  Category?: ThreatIntelIndicatorCategory;
  LastObservedAt?: string;
  Source?: string;
  SourceUrl?: string;
}
export type ThreatIntelIndicatorCategory = "BACKDOOR" | "CARD_STEALER" | "COMMAND_AND_CONTROL" | "DROP_SITE" | "EXPLOIT_SITE" | "KEYLOGGER";
export type ThreatIntelIndicatorList = Array<ThreatIntelIndicator>;
export type ThreatIntelIndicatorType = "DOMAIN" | "EMAIL_ADDRESS" | "HASH_MD5" | "HASH_SHA1" | "HASH_SHA256" | "HASH_SHA512" | "IPV4_ADDRESS" | "IPV6_ADDRESS" | "MUTEX" | "PROCESS" | "URL";
export type ThreatList = Array<Threat>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export type Timestamp = Date | string;

export type TypeList = Array<string>;
export interface UnprocessedAutomationRule {
  RuleArn?: string;
  ErrorCode?: number;
  ErrorMessage?: string;
}
export type UnprocessedAutomationRulesList = Array<UnprocessedAutomationRule>;
export interface UnprocessedConfigurationPolicyAssociation {
  ConfigurationPolicyAssociationIdentifiers?: ConfigurationPolicyAssociation;
  ErrorCode?: string;
  ErrorReason?: string;
}
export type UnprocessedConfigurationPolicyAssociationList = Array<UnprocessedConfigurationPolicyAssociation>;
export type UnprocessedErrorCode = "INVALID_INPUT" | "ACCESS_DENIED" | "NOT_FOUND" | "RESOURCE_NOT_FOUND" | "LIMIT_EXCEEDED";
export interface UnprocessedSecurityControl {
  SecurityControlId: string;
  ErrorCode: UnprocessedErrorCode;
  ErrorReason?: string;
}
export type UnprocessedSecurityControls = Array<UnprocessedSecurityControl>;
export interface UnprocessedStandardsControlAssociation {
  StandardsControlAssociationId: StandardsControlAssociationId;
  ErrorCode: UnprocessedErrorCode;
  ErrorReason?: string;
}
export type UnprocessedStandardsControlAssociations = Array<UnprocessedStandardsControlAssociation>;
export interface UnprocessedStandardsControlAssociationUpdate {
  StandardsControlAssociationUpdate: StandardsControlAssociationUpdate;
  ErrorCode: UnprocessedErrorCode;
  ErrorReason?: string;
}
export type UnprocessedStandardsControlAssociationUpdates = Array<UnprocessedStandardsControlAssociationUpdate>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateActionTargetRequest {
  ActionTargetArn: string;
  Name?: string;
  Description?: string;
}
export interface UpdateActionTargetResponse {
}
export interface UpdateAggregatorV2Request {
  AggregatorV2Arn: string;
  RegionLinkingMode: string;
  LinkedRegions?: Array<string>;
}
export interface UpdateAggregatorV2Response {
  AggregatorV2Arn?: string;
  AggregationRegion?: string;
  RegionLinkingMode?: string;
  LinkedRegions?: Array<string>;
}
export interface UpdateAutomationRulesRequestItem {
  RuleArn: string;
  RuleStatus?: RuleStatus;
  RuleOrder?: number;
  Description?: string;
  RuleName?: string;
  IsTerminal?: boolean;
  Criteria?: AutomationRulesFindingFilters;
  Actions?: Array<AutomationRulesAction>;
}
export type UpdateAutomationRulesRequestItemsList = Array<UpdateAutomationRulesRequestItem>;
export interface UpdateAutomationRuleV2Request {
  Identifier: string;
  RuleStatus?: RuleStatusV2;
  RuleOrder?: number;
  Description?: string;
  RuleName?: string;
  Criteria?: Criteria;
  Actions?: Array<AutomationRulesActionV2>;
}
export interface UpdateAutomationRuleV2Response {
}
export interface UpdateConfigurationPolicyRequest {
  Identifier: string;
  Name?: string;
  Description?: string;
  UpdatedReason?: string;
  ConfigurationPolicy?: Policy;
}
export interface UpdateConfigurationPolicyResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  UpdatedAt?: Date | string;
  CreatedAt?: Date | string;
  ConfigurationPolicy?: Policy;
}
export interface UpdateConnectorV2Request {
  ConnectorId: string;
  ClientSecret?: string;
  Description?: string;
  Provider?: ProviderUpdateConfiguration;
}
export interface UpdateConnectorV2Response {
}
export interface UpdateFindingAggregatorRequest {
  FindingAggregatorArn: string;
  RegionLinkingMode: string;
  Regions?: Array<string>;
}
export interface UpdateFindingAggregatorResponse {
  FindingAggregatorArn?: string;
  FindingAggregationRegion?: string;
  RegionLinkingMode?: string;
  Regions?: Array<string>;
}
export interface UpdateFindingsRequest {
  Filters: AwsSecurityFindingFilters;
  Note?: NoteUpdate;
  RecordState?: RecordState;
}
export interface UpdateFindingsResponse {
}
export interface UpdateInsightRequest {
  InsightArn: string;
  Name?: string;
  Filters?: AwsSecurityFindingFilters;
  GroupByAttribute?: string;
}
export interface UpdateInsightResponse {
}
export interface UpdateOrganizationConfigurationRequest {
  AutoEnable: boolean;
  AutoEnableStandards?: AutoEnableStandards;
  OrganizationConfiguration?: OrganizationConfiguration;
}
export interface UpdateOrganizationConfigurationResponse {
}
export interface UpdateSecurityControlRequest {
  SecurityControlId: string;
  Parameters: Record<string, ParameterConfiguration>;
  LastUpdateReason?: string;
}
export interface UpdateSecurityControlResponse {
}
export interface UpdateSecurityHubConfigurationRequest {
  AutoEnableControls?: boolean;
  ControlFindingGenerator?: ControlFindingGenerator;
}
export interface UpdateSecurityHubConfigurationResponse {
}
export interface UpdateStandardsControlRequest {
  StandardsControlArn: string;
  ControlStatus?: ControlStatus;
  DisabledReason?: string;
}
export interface UpdateStandardsControlResponse {
}
export type UpdateStatus = "READY" | "UPDATING";
export interface UserAccount {
  Uid?: string;
  Name?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export type VerificationState = "UNKNOWN" | "TRUE_POSITIVE" | "FALSE_POSITIVE" | "BENIGN_POSITIVE";
export interface VolumeMount {
  Name?: string;
  MountPath?: string;
}
export type VolumeMountList = Array<VolumeMount>;
export interface VpcInfoCidrBlockSetDetails {
  CidrBlock?: string;
}
export type VpcInfoCidrBlockSetList = Array<VpcInfoCidrBlockSetDetails>;
export interface VpcInfoIpv6CidrBlockSetDetails {
  Ipv6CidrBlock?: string;
}
export type VpcInfoIpv6CidrBlockSetList = Array<VpcInfoIpv6CidrBlockSetDetails>;
export interface VpcInfoPeeringOptionsDetails {
  AllowDnsResolutionFromRemoteVpc?: boolean;
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
export interface Vulnerability {
  Id: string;
  VulnerablePackages?: Array<SoftwarePackage>;
  Cvss?: Array<Cvss>;
  RelatedVulnerabilities?: Array<string>;
  Vendor?: VulnerabilityVendor;
  ReferenceUrls?: Array<string>;
  FixAvailable?: VulnerabilityFixAvailable;
  EpssScore?: number;
  ExploitAvailable?: VulnerabilityExploitAvailable;
  LastKnownExploitAt?: string;
  CodeVulnerabilities?: Array<VulnerabilityCodeVulnerabilities>;
}
export interface VulnerabilityCodeVulnerabilities {
  Cwes?: Array<string>;
  FilePath?: CodeVulnerabilitiesFilePath;
  SourceArn?: string;
}
export type VulnerabilityCodeVulnerabilitiesList = Array<VulnerabilityCodeVulnerabilities>;
export type VulnerabilityExploitAvailable = "YES" | "NO";
export type VulnerabilityFixAvailable = "YES" | "NO" | "PARTIAL";
export type VulnerabilityList = Array<Vulnerability>;
export interface VulnerabilityVendor {
  Name: string;
  Url?: string;
  VendorSeverity?: string;
  VendorCreatedAt?: string;
  VendorUpdatedAt?: string;
}
export interface WafAction {
  Type?: string;
}
export interface WafExcludedRule {
  RuleId?: string;
}
export type WafExcludedRuleList = Array<WafExcludedRule>;
export interface WafOverrideAction {
  Type?: string;
}
export interface Workflow {
  Status?: WorkflowStatus;
}
export type WorkflowState = "NEW" | "ASSIGNED" | "IN_PROGRESS" | "DEFERRED" | "RESOLVED";
export type WorkflowStatus = "NEW" | "NOTIFIED" | "RESOLVED" | "SUPPRESSED";
export interface WorkflowUpdate {
  Status?: WorkflowStatus;
}
export declare namespace AcceptAdministratorInvitation {
  export type Input = AcceptAdministratorInvitationRequest;
  export type Output = AcceptAdministratorInvitationResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AcceptInvitation {
  export type Input = AcceptInvitationRequest;
  export type Output = AcceptInvitationResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace BatchDeleteAutomationRules {
  export type Input = BatchDeleteAutomationRulesRequest;
  export type Output = BatchDeleteAutomationRulesResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace BatchDisableStandards {
  export type Input = BatchDisableStandardsRequest;
  export type Output = BatchDisableStandardsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace BatchEnableStandards {
  export type Input = BatchEnableStandardsRequest;
  export type Output = BatchEnableStandardsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace BatchGetAutomationRules {
  export type Input = BatchGetAutomationRulesRequest;
  export type Output = BatchGetAutomationRulesResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace BatchGetConfigurationPolicyAssociations {
  export type Input = BatchGetConfigurationPolicyAssociationsRequest;
  export type Output = BatchGetConfigurationPolicyAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace BatchGetSecurityControls {
  export type Input = BatchGetSecurityControlsRequest;
  export type Output = BatchGetSecurityControlsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace BatchGetStandardsControlAssociations {
  export type Input = BatchGetStandardsControlAssociationsRequest;
  export type Output = BatchGetStandardsControlAssociationsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace BatchImportFindings {
  export type Input = BatchImportFindingsRequest;
  export type Output = BatchImportFindingsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace BatchUpdateAutomationRules {
  export type Input = BatchUpdateAutomationRulesRequest;
  export type Output = BatchUpdateAutomationRulesResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace BatchUpdateFindings {
  export type Input = BatchUpdateFindingsRequest;
  export type Output = BatchUpdateFindingsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace BatchUpdateFindingsV2 {
  export type Input = BatchUpdateFindingsV2Request;
  export type Output = BatchUpdateFindingsV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchUpdateStandardsControlAssociations {
  export type Input = BatchUpdateStandardsControlAssociationsRequest;
  export type Output = BatchUpdateStandardsControlAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ConnectorRegistrationsV2 {
  export type Input = ConnectorRegistrationsV2Request;
  export type Output = ConnectorRegistrationsV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateActionTarget {
  export type Input = CreateActionTargetRequest;
  export type Output = CreateActionTargetResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceConflictException
    | CommonAwsError;
}

export declare namespace CreateAggregatorV2 {
  export type Input = CreateAggregatorV2Request;
  export type Output = CreateAggregatorV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAutomationRule {
  export type Input = CreateAutomationRuleRequest;
  export type Output = CreateAutomationRuleResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateAutomationRuleV2 {
  export type Input = CreateAutomationRuleV2Request;
  export type Output = CreateAutomationRuleV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateConfigurationPolicy {
  export type Input = CreateConfigurationPolicyRequest;
  export type Output = CreateConfigurationPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceConflictException
    | CommonAwsError;
}

export declare namespace CreateConnectorV2 {
  export type Input = CreateConnectorV2Request;
  export type Output = CreateConnectorV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFindingAggregator {
  export type Input = CreateFindingAggregatorRequest;
  export type Output = CreateFindingAggregatorResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateInsight {
  export type Input = CreateInsightRequest;
  export type Output = CreateInsightResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceConflictException
    | CommonAwsError;
}

export declare namespace CreateMembers {
  export type Input = CreateMembersRequest;
  export type Output = CreateMembersResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceConflictException
    | CommonAwsError;
}

export declare namespace CreateTicketV2 {
  export type Input = CreateTicketV2Request;
  export type Output = CreateTicketV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeclineInvitations {
  export type Input = DeclineInvitationsRequest;
  export type Output = DeclineInvitationsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteActionTarget {
  export type Input = DeleteActionTargetRequest;
  export type Output = DeleteActionTargetResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteAggregatorV2 {
  export type Input = DeleteAggregatorV2Request;
  export type Output = DeleteAggregatorV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAutomationRuleV2 {
  export type Input = DeleteAutomationRuleV2Request;
  export type Output = DeleteAutomationRuleV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConfigurationPolicy {
  export type Input = DeleteConfigurationPolicyRequest;
  export type Output = DeleteConfigurationPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteConnectorV2 {
  export type Input = DeleteConnectorV2Request;
  export type Output = DeleteConnectorV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFindingAggregator {
  export type Input = DeleteFindingAggregatorRequest;
  export type Output = DeleteFindingAggregatorResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteInsight {
  export type Input = DeleteInsightRequest;
  export type Output = DeleteInsightResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteInvitations {
  export type Input = DeleteInvitationsRequest;
  export type Output = DeleteInvitationsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteMembers {
  export type Input = DeleteMembersRequest;
  export type Output = DeleteMembersResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeActionTargets {
  export type Input = DescribeActionTargetsRequest;
  export type Output = DescribeActionTargetsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeHub {
  export type Input = DescribeHubRequest;
  export type Output = DescribeHubResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationConfiguration {
  export type Input = DescribeOrganizationConfigurationRequest;
  export type Output = DescribeOrganizationConfigurationResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DescribeProducts {
  export type Input = DescribeProductsRequest;
  export type Output = DescribeProductsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DescribeProductsV2 {
  export type Input = DescribeProductsV2Request;
  export type Output = DescribeProductsV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSecurityHubV2 {
  export type Input = DescribeSecurityHubV2Request;
  export type Output = DescribeSecurityHubV2Response;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeStandards {
  export type Input = DescribeStandardsRequest;
  export type Output = DescribeStandardsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace DescribeStandardsControls {
  export type Input = DescribeStandardsControlsRequest;
  export type Output = DescribeStandardsControlsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisableImportFindingsForProduct {
  export type Input = DisableImportFindingsForProductRequest;
  export type Output = DisableImportFindingsForProductResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisableOrganizationAdminAccount {
  export type Input = DisableOrganizationAdminAccountRequest;
  export type Output = DisableOrganizationAdminAccountResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DisableSecurityHub {
  export type Input = DisableSecurityHubRequest;
  export type Output = DisableSecurityHubResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisableSecurityHubV2 {
  export type Input = DisableSecurityHubV2Request;
  export type Output = DisableSecurityHubV2Response;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateFromAdministratorAccount {
  export type Input = DisassociateFromAdministratorAccountRequest;
  export type Output = DisassociateFromAdministratorAccountResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateFromMasterAccount {
  export type Input = DisassociateFromMasterAccountRequest;
  export type Output = DisassociateFromMasterAccountResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateMembers {
  export type Input = DisassociateMembersRequest;
  export type Output = DisassociateMembersResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace EnableImportFindingsForProduct {
  export type Input = EnableImportFindingsForProductRequest;
  export type Output = EnableImportFindingsForProductResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceConflictException
    | CommonAwsError;
}

export declare namespace EnableOrganizationAdminAccount {
  export type Input = EnableOrganizationAdminAccountRequest;
  export type Output = EnableOrganizationAdminAccountResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace EnableSecurityHub {
  export type Input = EnableSecurityHubRequest;
  export type Output = EnableSecurityHubResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | LimitExceededException
    | ResourceConflictException
    | CommonAwsError;
}

export declare namespace EnableSecurityHubV2 {
  export type Input = EnableSecurityHubV2Request;
  export type Output = EnableSecurityHubV2Response;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAdministratorAccount {
  export type Input = GetAdministratorAccountRequest;
  export type Output = GetAdministratorAccountResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetAggregatorV2 {
  export type Input = GetAggregatorV2Request;
  export type Output = GetAggregatorV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAutomationRuleV2 {
  export type Input = GetAutomationRuleV2Request;
  export type Output = GetAutomationRuleV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfigurationPolicy {
  export type Input = GetConfigurationPolicyRequest;
  export type Output = GetConfigurationPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetConfigurationPolicyAssociation {
  export type Input = GetConfigurationPolicyAssociationRequest;
  export type Output = GetConfigurationPolicyAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetConnectorV2 {
  export type Input = GetConnectorV2Request;
  export type Output = GetConnectorV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnabledStandards {
  export type Input = GetEnabledStandardsRequest;
  export type Output = GetEnabledStandardsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetFindingAggregator {
  export type Input = GetFindingAggregatorRequest;
  export type Output = GetFindingAggregatorResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetFindingHistory {
  export type Input = GetFindingHistoryRequest;
  export type Output = GetFindingHistoryResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetFindings {
  export type Input = GetFindingsRequest;
  export type Output = GetFindingsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetFindingStatisticsV2 {
  export type Input = GetFindingStatisticsV2Request;
  export type Output = GetFindingStatisticsV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFindingsV2 {
  export type Input = GetFindingsV2Request;
  export type Output = GetFindingsV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInsightResults {
  export type Input = GetInsightResultsRequest;
  export type Output = GetInsightResultsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetInsights {
  export type Input = GetInsightsRequest;
  export type Output = GetInsightsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetInvitationsCount {
  export type Input = GetInvitationsCountRequest;
  export type Output = GetInvitationsCountResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetMasterAccount {
  export type Input = GetMasterAccountRequest;
  export type Output = GetMasterAccountResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetMembers {
  export type Input = GetMembersRequest;
  export type Output = GetMembersResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetResourcesStatisticsV2 {
  export type Input = GetResourcesStatisticsV2Request;
  export type Output = GetResourcesStatisticsV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcesV2 {
  export type Input = GetResourcesV2Request;
  export type Output = GetResourcesV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSecurityControlDefinition {
  export type Input = GetSecurityControlDefinitionRequest;
  export type Output = GetSecurityControlDefinitionResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace InviteMembers {
  export type Input = InviteMembersRequest;
  export type Output = InviteMembersResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListAggregatorsV2 {
  export type Input = ListAggregatorsV2Request;
  export type Output = ListAggregatorsV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAutomationRules {
  export type Input = ListAutomationRulesRequest;
  export type Output = ListAutomationRulesResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListAutomationRulesV2 {
  export type Input = ListAutomationRulesV2Request;
  export type Output = ListAutomationRulesV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConfigurationPolicies {
  export type Input = ListConfigurationPoliciesRequest;
  export type Output = ListConfigurationPoliciesResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListConfigurationPolicyAssociations {
  export type Input = ListConfigurationPolicyAssociationsRequest;
  export type Output = ListConfigurationPolicyAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListConnectorsV2 {
  export type Input = ListConnectorsV2Request;
  export type Output = ListConnectorsV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnabledProductsForImport {
  export type Input = ListEnabledProductsForImportRequest;
  export type Output = ListEnabledProductsForImportResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListFindingAggregators {
  export type Input = ListFindingAggregatorsRequest;
  export type Output = ListFindingAggregatorsResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListInvitations {
  export type Input = ListInvitationsRequest;
  export type Output = ListInvitationsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListMembers {
  export type Input = ListMembersRequest;
  export type Output = ListMembersResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListOrganizationAdminAccounts {
  export type Input = ListOrganizationAdminAccountsRequest;
  export type Output = ListOrganizationAdminAccountsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListSecurityControlDefinitions {
  export type Input = ListSecurityControlDefinitionsRequest;
  export type Output = ListSecurityControlDefinitionsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListStandardsControlAssociations {
  export type Input = ListStandardsControlAssociationsRequest;
  export type Output = ListStandardsControlAssociationsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartConfigurationPolicyAssociation {
  export type Input = StartConfigurationPolicyAssociationRequest;
  export type Output = StartConfigurationPolicyAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartConfigurationPolicyDisassociation {
  export type Input = StartConfigurationPolicyDisassociationRequest;
  export type Output = StartConfigurationPolicyDisassociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateActionTarget {
  export type Input = UpdateActionTargetRequest;
  export type Output = UpdateActionTargetResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateAggregatorV2 {
  export type Input = UpdateAggregatorV2Request;
  export type Output = UpdateAggregatorV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAutomationRuleV2 {
  export type Input = UpdateAutomationRuleV2Request;
  export type Output = UpdateAutomationRuleV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConfigurationPolicy {
  export type Input = UpdateConfigurationPolicyRequest;
  export type Output = UpdateConfigurationPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateConnectorV2 {
  export type Input = UpdateConnectorV2Request;
  export type Output = UpdateConnectorV2Response;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFindingAggregator {
  export type Input = UpdateFindingAggregatorRequest;
  export type Output = UpdateFindingAggregatorResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateFindings {
  export type Input = UpdateFindingsRequest;
  export type Output = UpdateFindingsResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateInsight {
  export type Input = UpdateInsightRequest;
  export type Output = UpdateInsightResponse;
  export type Error =
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateOrganizationConfiguration {
  export type Input = UpdateOrganizationConfigurationRequest;
  export type Output = UpdateOrganizationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateSecurityControl {
  export type Input = UpdateSecurityControlRequest;
  export type Output = UpdateSecurityControlResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateSecurityHubConfiguration {
  export type Input = UpdateSecurityHubConfigurationRequest;
  export type Output = UpdateSecurityHubConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateStandardsControl {
  export type Input = UpdateStandardsControlRequest;
  export type Output = UpdateStandardsControlResponse;
  export type Error =
    | AccessDeniedException
    | InternalException
    | InvalidAccessException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export type SecurityHubErrors = AccessDeniedException | ConflictException | InternalException | InternalServerException | InvalidAccessException | InvalidInputException | LimitExceededException | ResourceConflictException | ResourceInUseException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError;


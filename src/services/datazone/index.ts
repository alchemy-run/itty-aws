import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class DataZone extends AWSServiceClient {
  acceptPredictions(
    input: AcceptPredictionsInput,
  ): Effect.Effect<
    AcceptPredictionsOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  acceptSubscriptionRequest(
    input: AcceptSubscriptionRequestInput,
  ): Effect.Effect<
    AcceptSubscriptionRequestOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  addEntityOwner(
    input: AddEntityOwnerInput,
  ): Effect.Effect<
    AddEntityOwnerOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  addPolicyGrant(
    input: AddPolicyGrantInput,
  ): Effect.Effect<
    AddPolicyGrantOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateEnvironmentRole(
    input: AssociateEnvironmentRoleInput,
  ): Effect.Effect<
    AssociateEnvironmentRoleOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelSubscription(
    input: CancelSubscriptionInput,
  ): Effect.Effect<
    CancelSubscriptionOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAssetFilter(
    input: CreateAssetFilterInput,
  ): Effect.Effect<
    CreateAssetFilterOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createConnection(
    input: CreateConnectionInput,
  ): Effect.Effect<
    CreateConnectionOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createEnvironment(
    input: CreateEnvironmentInput,
  ): Effect.Effect<
    CreateEnvironmentOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createEnvironmentAction(
    input: CreateEnvironmentActionInput,
  ): Effect.Effect<
    CreateEnvironmentActionOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createEnvironmentProfile(
    input: CreateEnvironmentProfileInput,
  ): Effect.Effect<
    CreateEnvironmentProfileOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createGroupProfile(
    input: CreateGroupProfileInput,
  ): Effect.Effect<
    CreateGroupProfileOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createListingChangeSet(
    input: CreateListingChangeSetInput,
  ): Effect.Effect<
    CreateListingChangeSetOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createProject(
    input: CreateProjectInput,
  ): Effect.Effect<
    CreateProjectOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createProjectMembership(
    input: CreateProjectMembershipInput,
  ): Effect.Effect<
    CreateProjectMembershipOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createProjectProfile(
    input: CreateProjectProfileInput,
  ): Effect.Effect<
    CreateProjectProfileOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSubscriptionGrant(
    input: CreateSubscriptionGrantInput,
  ): Effect.Effect<
    CreateSubscriptionGrantOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSubscriptionRequest(
    input: CreateSubscriptionRequestInput,
  ): Effect.Effect<
    CreateSubscriptionRequestOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSubscriptionTarget(
    input: CreateSubscriptionTargetInput,
  ): Effect.Effect<
    CreateSubscriptionTargetOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createUserProfile(
    input: CreateUserProfileInput,
  ): Effect.Effect<
    CreateUserProfileOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteAssetFilter(
    input: DeleteAssetFilterInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteConnection(
    input: DeleteConnectionInput,
  ): Effect.Effect<
    DeleteConnectionOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEnvironment(
    input: DeleteEnvironmentInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEnvironmentAction(
    input: DeleteEnvironmentActionInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEnvironmentProfile(
    input: DeleteEnvironmentProfileInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteProject(
    input: DeleteProjectInput,
  ): Effect.Effect<
    DeleteProjectOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteProjectMembership(
    input: DeleteProjectMembershipInput,
  ): Effect.Effect<
    DeleteProjectMembershipOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteProjectProfile(
    input: DeleteProjectProfileInput,
  ): Effect.Effect<
    DeleteProjectProfileOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteSubscriptionGrant(
    input: DeleteSubscriptionGrantInput,
  ): Effect.Effect<
    DeleteSubscriptionGrantOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteSubscriptionRequest(
    input: DeleteSubscriptionRequestInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteSubscriptionTarget(
    input: DeleteSubscriptionTargetInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteTimeSeriesDataPoints(
    input: DeleteTimeSeriesDataPointsInput,
  ): Effect.Effect<
    DeleteTimeSeriesDataPointsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateEnvironmentRole(
    input: DisassociateEnvironmentRoleInput,
  ): Effect.Effect<
    DisassociateEnvironmentRoleOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAssetFilter(
    input: GetAssetFilterInput,
  ): Effect.Effect<
    GetAssetFilterOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getConnection(
    input: GetConnectionInput,
  ): Effect.Effect<
    GetConnectionOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEnvironment(
    input: GetEnvironmentInput,
  ): Effect.Effect<
    GetEnvironmentOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEnvironmentAction(
    input: GetEnvironmentActionInput,
  ): Effect.Effect<
    GetEnvironmentActionOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEnvironmentBlueprint(
    input: GetEnvironmentBlueprintInput,
  ): Effect.Effect<
    GetEnvironmentBlueprintOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEnvironmentCredentials(
    input: GetEnvironmentCredentialsInput,
  ): Effect.Effect<
    GetEnvironmentCredentialsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEnvironmentProfile(
    input: GetEnvironmentProfileInput,
  ): Effect.Effect<
    GetEnvironmentProfileOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getGroupProfile(
    input: GetGroupProfileInput,
  ): Effect.Effect<
    GetGroupProfileOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getIamPortalLoginUrl(
    input: GetIamPortalLoginUrlInput,
  ): Effect.Effect<
    GetIamPortalLoginUrlOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getJobRun(
    input: GetJobRunInput,
  ): Effect.Effect<
    GetJobRunOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLineageEvent(
    input: GetLineageEventInput,
  ): Effect.Effect<
    GetLineageEventOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLineageNode(
    input: GetLineageNodeInput,
  ): Effect.Effect<
    GetLineageNodeOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getProject(
    input: GetProjectInput,
  ): Effect.Effect<
    GetProjectOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getProjectProfile(
    input: GetProjectProfileInput,
  ): Effect.Effect<
    GetProjectProfileOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSubscription(
    input: GetSubscriptionInput,
  ): Effect.Effect<
    GetSubscriptionOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSubscriptionGrant(
    input: GetSubscriptionGrantInput,
  ): Effect.Effect<
    GetSubscriptionGrantOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSubscriptionRequestDetails(
    input: GetSubscriptionRequestDetailsInput,
  ): Effect.Effect<
    GetSubscriptionRequestDetailsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSubscriptionTarget(
    input: GetSubscriptionTargetInput,
  ): Effect.Effect<
    GetSubscriptionTargetOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTimeSeriesDataPoint(
    input: GetTimeSeriesDataPointInput,
  ): Effect.Effect<
    GetTimeSeriesDataPointOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getUserProfile(
    input: GetUserProfileInput,
  ): Effect.Effect<
    GetUserProfileOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listAssetFilters(
    input: ListAssetFiltersInput,
  ): Effect.Effect<
    ListAssetFiltersOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAssetRevisions(
    input: ListAssetRevisionsInput,
  ): Effect.Effect<
    ListAssetRevisionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listConnections(
    input: ListConnectionsInput,
  ): Effect.Effect<
    ListConnectionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataProductRevisions(
    input: ListDataProductRevisionsInput,
  ): Effect.Effect<
    ListDataProductRevisionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataSourceRunActivities(
    input: ListDataSourceRunActivitiesInput,
  ): Effect.Effect<
    ListDataSourceRunActivitiesOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEntityOwners(
    input: ListEntityOwnersInput,
  ): Effect.Effect<
    ListEntityOwnersOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEnvironmentActions(
    input: ListEnvironmentActionsInput,
  ): Effect.Effect<
    ListEnvironmentActionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEnvironmentBlueprints(
    input: ListEnvironmentBlueprintsInput,
  ): Effect.Effect<
    ListEnvironmentBlueprintsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEnvironmentProfiles(
    input: ListEnvironmentProfilesInput,
  ): Effect.Effect<
    ListEnvironmentProfilesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEnvironments(
    input: ListEnvironmentsInput,
  ): Effect.Effect<
    ListEnvironmentsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listJobRuns(
    input: ListJobRunsInput,
  ): Effect.Effect<
    ListJobRunsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLineageEvents(
    input: ListLineageEventsInput,
  ): Effect.Effect<
    ListLineageEventsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLineageNodeHistory(
    input: ListLineageNodeHistoryInput,
  ): Effect.Effect<
    ListLineageNodeHistoryOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listNotifications(
    input: ListNotificationsInput,
  ): Effect.Effect<
    ListNotificationsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listPolicyGrants(
    input: ListPolicyGrantsInput,
  ): Effect.Effect<
    ListPolicyGrantsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProjectMemberships(
    input: ListProjectMembershipsInput,
  ): Effect.Effect<
    ListProjectMembershipsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProjectProfiles(
    input: ListProjectProfilesInput,
  ): Effect.Effect<
    ListProjectProfilesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProjects(
    input: ListProjectsInput,
  ): Effect.Effect<
    ListProjectsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSubscriptionGrants(
    input: ListSubscriptionGrantsInput,
  ): Effect.Effect<
    ListSubscriptionGrantsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSubscriptionRequests(
    input: ListSubscriptionRequestsInput,
  ): Effect.Effect<
    ListSubscriptionRequestsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSubscriptions(
    input: ListSubscriptionsInput,
  ): Effect.Effect<
    ListSubscriptionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSubscriptionTargets(
    input: ListSubscriptionTargetsInput,
  ): Effect.Effect<
    ListSubscriptionTargetsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listTimeSeriesDataPoints(
    input: ListTimeSeriesDataPointsInput,
  ): Effect.Effect<
    ListTimeSeriesDataPointsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  postLineageEvent(
    input: PostLineageEventInput,
  ): Effect.Effect<
    PostLineageEventOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  postTimeSeriesDataPoints(
    input: PostTimeSeriesDataPointsInput,
  ): Effect.Effect<
    PostTimeSeriesDataPointsOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  rejectPredictions(
    input: RejectPredictionsInput,
  ): Effect.Effect<
    RejectPredictionsOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  rejectSubscriptionRequest(
    input: RejectSubscriptionRequestInput,
  ): Effect.Effect<
    RejectSubscriptionRequestOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  removeEntityOwner(
    input: RemoveEntityOwnerInput,
  ): Effect.Effect<
    RemoveEntityOwnerOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  removePolicyGrant(
    input: RemovePolicyGrantInput,
  ): Effect.Effect<
    RemovePolicyGrantOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  revokeSubscription(
    input: RevokeSubscriptionInput,
  ): Effect.Effect<
    RevokeSubscriptionOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  search(
    input: SearchInput,
  ): Effect.Effect<
    SearchOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchGroupProfiles(
    input: SearchGroupProfilesInput,
  ): Effect.Effect<
    SearchGroupProfilesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  searchListings(
    input: SearchListingsInput,
  ): Effect.Effect<
    SearchListingsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchTypes(
    input: SearchTypesInput,
  ): Effect.Effect<
    SearchTypesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchUserProfiles(
    input: SearchUserProfilesInput,
  ): Effect.Effect<
    SearchUserProfilesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  updateAssetFilter(
    input: UpdateAssetFilterInput,
  ): Effect.Effect<
    UpdateAssetFilterOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateConnection(
    input: UpdateConnectionInput,
  ): Effect.Effect<
    UpdateConnectionOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEnvironment(
    input: UpdateEnvironmentInput,
  ): Effect.Effect<
    UpdateEnvironmentOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEnvironmentAction(
    input: UpdateEnvironmentActionInput,
  ): Effect.Effect<
    UpdateEnvironmentActionOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEnvironmentProfile(
    input: UpdateEnvironmentProfileInput,
  ): Effect.Effect<
    UpdateEnvironmentProfileOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateGroupProfile(
    input: UpdateGroupProfileInput,
  ): Effect.Effect<
    UpdateGroupProfileOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateProject(
    input: UpdateProjectInput,
  ): Effect.Effect<
    UpdateProjectOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateProjectProfile(
    input: UpdateProjectProfileInput,
  ): Effect.Effect<
    UpdateProjectProfileOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSubscriptionGrantStatus(
    input: UpdateSubscriptionGrantStatusInput,
  ): Effect.Effect<
    UpdateSubscriptionGrantStatusOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSubscriptionRequest(
    input: UpdateSubscriptionRequestInput,
  ): Effect.Effect<
    UpdateSubscriptionRequestOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSubscriptionTarget(
    input: UpdateSubscriptionTargetInput,
  ): Effect.Effect<
    UpdateSubscriptionTargetOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateUserProfile(
    input: UpdateUserProfileInput,
  ): Effect.Effect<
    UpdateUserProfileOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  cancelMetadataGenerationRun(
    input: CancelMetadataGenerationRunInput,
  ): Effect.Effect<
    CancelMetadataGenerationRunOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAsset(
    input: CreateAssetInput,
  ): Effect.Effect<
    CreateAssetOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAssetRevision(
    input: CreateAssetRevisionInput,
  ): Effect.Effect<
    CreateAssetRevisionOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAssetType(
    input: CreateAssetTypeInput,
  ): Effect.Effect<
    CreateAssetTypeOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataProduct(
    input: CreateDataProductInput,
  ): Effect.Effect<
    CreateDataProductOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataProductRevision(
    input: CreateDataProductRevisionInput,
  ): Effect.Effect<
    CreateDataProductRevisionOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataSource(
    input: CreateDataSourceInput,
  ): Effect.Effect<
    CreateDataSourceOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDomain(
    input: CreateDomainInput,
  ): Effect.Effect<
    CreateDomainOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDomainUnit(
    input: CreateDomainUnitInput,
  ): Effect.Effect<
    CreateDomainUnitOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createFormType(
    input: CreateFormTypeInput,
  ): Effect.Effect<
    CreateFormTypeOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createGlossary(
    input: CreateGlossaryInput,
  ): Effect.Effect<
    CreateGlossaryOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createGlossaryTerm(
    input: CreateGlossaryTermInput,
  ): Effect.Effect<
    CreateGlossaryTermOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRule(
    input: CreateRuleInput,
  ): Effect.Effect<
    CreateRuleOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAsset(
    input: DeleteAssetInput,
  ): Effect.Effect<
    DeleteAssetOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAssetType(
    input: DeleteAssetTypeInput,
  ): Effect.Effect<
    DeleteAssetTypeOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataProduct(
    input: DeleteDataProductInput,
  ): Effect.Effect<
    DeleteDataProductOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataSource(
    input: DeleteDataSourceInput,
  ): Effect.Effect<
    DeleteDataSourceOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDomain(
    input: DeleteDomainInput,
  ): Effect.Effect<
    DeleteDomainOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDomainUnit(
    input: DeleteDomainUnitInput,
  ): Effect.Effect<
    DeleteDomainUnitOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEnvironmentBlueprintConfiguration(
    input: DeleteEnvironmentBlueprintConfigurationInput,
  ): Effect.Effect<
    DeleteEnvironmentBlueprintConfigurationOutput,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  deleteFormType(
    input: DeleteFormTypeInput,
  ): Effect.Effect<
    DeleteFormTypeOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteGlossary(
    input: DeleteGlossaryInput,
  ): Effect.Effect<
    DeleteGlossaryOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteGlossaryTerm(
    input: DeleteGlossaryTermInput,
  ): Effect.Effect<
    DeleteGlossaryTermOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteListing(
    input: DeleteListingInput,
  ): Effect.Effect<
    DeleteListingOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRule(
    input: DeleteRuleInput,
  ): Effect.Effect<
    DeleteRuleOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAsset(
    input: GetAssetInput,
  ): Effect.Effect<
    GetAssetOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAssetType(
    input: GetAssetTypeInput,
  ): Effect.Effect<
    GetAssetTypeOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataProduct(
    input: GetDataProductInput,
  ): Effect.Effect<
    GetDataProductOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataSource(
    input: GetDataSourceInput,
  ): Effect.Effect<
    GetDataSourceOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataSourceRun(
    input: GetDataSourceRunInput,
  ): Effect.Effect<
    GetDataSourceRunOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDomain(
    input: GetDomainInput,
  ): Effect.Effect<
    GetDomainOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDomainUnit(
    input: GetDomainUnitInput,
  ): Effect.Effect<
    GetDomainUnitOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEnvironmentBlueprintConfiguration(
    input: GetEnvironmentBlueprintConfigurationInput,
  ): Effect.Effect<
    GetEnvironmentBlueprintConfigurationOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getFormType(
    input: GetFormTypeInput,
  ): Effect.Effect<
    GetFormTypeOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getGlossary(
    input: GetGlossaryInput,
  ): Effect.Effect<
    GetGlossaryOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getGlossaryTerm(
    input: GetGlossaryTermInput,
  ): Effect.Effect<
    GetGlossaryTermOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getListing(
    input: GetListingInput,
  ): Effect.Effect<
    GetListingOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMetadataGenerationRun(
    input: GetMetadataGenerationRunInput,
  ): Effect.Effect<
    GetMetadataGenerationRunOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRule(
    input: GetRuleInput,
  ): Effect.Effect<
    GetRuleOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataSourceRuns(
    input: ListDataSourceRunsInput,
  ): Effect.Effect<
    ListDataSourceRunsOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataSources(
    input: ListDataSourcesInput,
  ): Effect.Effect<
    ListDataSourcesOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDomainUnitsForParent(
    input: ListDomainUnitsForParentInput,
  ): Effect.Effect<
    ListDomainUnitsForParentOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDomains(
    input: ListDomainsInput,
  ): Effect.Effect<
    ListDomainsOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEnvironmentBlueprintConfigurations(
    input: ListEnvironmentBlueprintConfigurationsInput,
  ): Effect.Effect<
    ListEnvironmentBlueprintConfigurationsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listMetadataGenerationRuns(
    input: ListMetadataGenerationRunsInput,
  ): Effect.Effect<
    ListMetadataGenerationRunsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRules(
    input: ListRulesInput,
  ): Effect.Effect<
    ListRulesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putEnvironmentBlueprintConfiguration(
    input: PutEnvironmentBlueprintConfigurationInput,
  ): Effect.Effect<
    PutEnvironmentBlueprintConfigurationOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startDataSourceRun(
    input: StartDataSourceRunInput,
  ): Effect.Effect<
    StartDataSourceRunOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startMetadataGenerationRun(
    input: StartMetadataGenerationRunInput,
  ): Effect.Effect<
    StartMetadataGenerationRunOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDataSource(
    input: UpdateDataSourceInput,
  ): Effect.Effect<
    UpdateDataSourceOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDomain(
    input: UpdateDomainInput,
  ): Effect.Effect<
    UpdateDomainOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDomainUnit(
    input: UpdateDomainUnitInput,
  ): Effect.Effect<
    UpdateDomainUnitOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateGlossary(
    input: UpdateGlossaryInput,
  ): Effect.Effect<
    UpdateGlossaryOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateGlossaryTerm(
    input: UpdateGlossaryTermInput,
  ): Effect.Effect<
    UpdateGlossaryTermOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateRule(
    input: UpdateRuleInput,
  ): Effect.Effect<
    UpdateRuleOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Datazone extends DataZone {}

export interface AcceptChoice {
  predictionTarget: string;
  predictionChoice?: number;
  editedValue?: string;
}
export type AcceptChoices = Array<AcceptChoice>;
export interface AcceptedAssetScope {
  assetId: string;
  filterIds: Array<string>;
}
export type AcceptedAssetScopes = Array<AcceptedAssetScope>;
export interface AcceptPredictionsInput {
  domainIdentifier: string;
  identifier: string;
  revision?: string;
  acceptRule?: AcceptRule;
  acceptChoices?: Array<AcceptChoice>;
  clientToken?: string;
}
export interface AcceptPredictionsOutput {
  domainId: string;
  assetId: string;
  revision: string;
}
export interface AcceptRule {
  rule?: AcceptRuleBehavior;
  threshold?: number;
}
export type AcceptRuleBehavior = "ALL" | "NONE";
export interface AcceptSubscriptionRequestInput {
  domainIdentifier: string;
  identifier: string;
  decisionComment?: string;
  assetScopes?: Array<AcceptedAssetScope>;
}
export interface AcceptSubscriptionRequestOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionRequestStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  requestReason: string;
  subscribedPrincipals: Array<SubscribedPrincipal>;
  subscribedListings: Array<SubscribedListing>;
  reviewerId?: string;
  decisionComment?: string;
  existingSubscriptionId?: string;
  metadataForms?: Array<FormOutput>;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type ActionLink = string;

interface _ActionParameters {
  awsConsoleLink?: AwsConsoleLinkParameters;
}

export type ActionParameters = _ActionParameters & {
  awsConsoleLink: AwsConsoleLinkParameters;
};
export interface AddEntityOwnerInput {
  domainIdentifier: string;
  entityType: DataZoneEntityType;
  entityIdentifier: string;
  owner: OwnerProperties;
  clientToken?: string;
}
export interface AddEntityOwnerOutput {}
export interface AddPolicyGrantInput {
  domainIdentifier: string;
  entityType: TargetEntityType;
  entityIdentifier: string;
  policyType: ManagedPolicyType;
  principal: PolicyGrantPrincipal;
  detail: PolicyGrantDetail;
  clientToken?: string;
}
export interface AddPolicyGrantOutput {}
export interface AddToProjectMemberPoolPolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export type AggregationAttributeDisplayValue = string;

export type AggregationAttributeValue = string;

export type AggregationDisplayValue = string;

export type AggregationList = Array<AggregationListItem>;
export interface AggregationListItem {
  attribute: string;
  displayValue?: string;
}
export interface AggregationOutput {
  attribute?: string;
  displayValue?: string;
  items?: Array<AggregationOutputItem>;
}
export interface AggregationOutputItem {
  value?: string;
  count?: number;
  displayValue?: string;
}
export type AggregationOutputItems = Array<AggregationOutputItem>;
export type AggregationOutputList = Array<AggregationOutput>;
export interface AllDomainUnitsGrantFilter {}
export interface AllUsersGrantFilter {}
export type ApplicableAssetTypes = Array<string>;
interface _AssetFilterConfiguration {
  columnConfiguration?: ColumnFilterConfiguration;
  rowConfiguration?: RowFilterConfiguration;
}

export type AssetFilterConfiguration =
  | (_AssetFilterConfiguration & {
      columnConfiguration: ColumnFilterConfiguration;
    })
  | (_AssetFilterConfiguration & { rowConfiguration: RowFilterConfiguration });
export type AssetFilters = Array<AssetFilterSummary>;
export interface AssetFilterSummary {
  id: string;
  domainId: string;
  assetId: string;
  name: string;
  description?: string;
  status?: FilterStatus;
  effectiveColumnNames?: Array<string>;
  effectiveRowFilter?: string;
  createdAt?: Date | string;
  errorMessage?: string;
}
export type AssetId = string;

export type AssetIdentifier = string;

export interface AssetInDataProductListingItem {
  entityId?: string;
  entityRevision?: string;
  entityType?: string;
}
export type AssetInDataProductListingItems =
  Array<AssetInDataProductListingItem>;
export interface AssetItem {
  domainId: string;
  identifier: string;
  name: string;
  typeIdentifier: string;
  typeRevision: string;
  externalIdentifier?: string;
  description?: string;
  createdAt?: Date | string;
  createdBy?: string;
  firstRevisionCreatedAt?: Date | string;
  firstRevisionCreatedBy?: string;
  glossaryTerms?: Array<string>;
  owningProjectId: string;
  additionalAttributes?: AssetItemAdditionalAttributes;
}
export interface AssetItemAdditionalAttributes {
  formsOutput?: Array<FormOutput>;
  readOnlyFormsOutput?: Array<FormOutput>;
  latestTimeSeriesDataPointFormsOutput?: Array<TimeSeriesDataPointSummaryFormOutput>;
  matchRationale?: Array<MatchRationaleItem>;
}
export interface AssetListing {
  assetId?: string;
  assetRevision?: string;
  assetType?: string;
  createdAt?: Date | string;
  forms?: string;
  latestTimeSeriesDataPointForms?: Array<TimeSeriesDataPointSummaryFormOutput>;
  glossaryTerms?: Array<DetailedGlossaryTerm>;
  owningProjectId?: string;
}
export interface AssetListingDetails {
  listingId: string;
  listingStatus: ListingStatus;
}
export interface AssetListingItem {
  listingId?: string;
  listingRevision?: string;
  name?: string;
  entityId?: string;
  entityRevision?: string;
  entityType?: string;
  description?: string;
  createdAt?: Date | string;
  listingCreatedBy?: string;
  listingUpdatedBy?: string;
  glossaryTerms?: Array<DetailedGlossaryTerm>;
  owningProjectId?: string;
  additionalAttributes?: AssetListingItemAdditionalAttributes;
}
export interface AssetListingItemAdditionalAttributes {
  forms?: string;
  matchRationale?: Array<MatchRationaleItem>;
  latestTimeSeriesDataPointForms?: Array<TimeSeriesDataPointSummaryFormOutput>;
}
export type AssetName = string;

export interface AssetRevision {
  domainId?: string;
  id?: string;
  revision?: string;
  createdBy?: string;
  createdAt?: Date | string;
}
export type AssetRevisions = Array<AssetRevision>;
export interface AssetScope {
  assetId: string;
  filterIds: Array<string>;
  status: string;
  errorMessage?: string;
}
export interface AssetTargetNameMap {
  assetId: string;
  targetName: string;
}
export type AssetTargetNames = Array<AssetTargetNameMap>;
export type AssetTypeIdentifier = string;

export type AssetTypeIdentifiers = Array<string>;
export interface AssetTypeItem {
  domainId: string;
  name: string;
  revision: string;
  description?: string;
  formsOutput: Record<string, FormEntryOutput>;
  owningProjectId: string;
  originDomainId?: string;
  originProjectId?: string;
  createdAt?: Date | string;
  createdBy?: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export interface AssetTypesForRule {
  selectionMode: RuleScopeSelectionMode;
  specificAssetTypes?: Array<string>;
}
export interface AssociateEnvironmentRoleInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  environmentRoleArn: string;
}
export interface AssociateEnvironmentRoleOutput {}
export interface AthenaPropertiesInput {
  workgroupName?: string;
}
export interface AthenaPropertiesOutput {
  workgroupName?: string;
}
export interface AthenaPropertiesPatch {
  workgroupName?: string;
}
export type Attribute = string;

export interface AuthenticationConfiguration {
  authenticationType?: AuthenticationType;
  secretArn?: string;
  oAuth2Properties?: OAuth2Properties;
}
export interface AuthenticationConfigurationInput {
  authenticationType?: AuthenticationType;
  oAuth2Properties?: OAuth2Properties;
  secretArn?: string;
  kmsKeyArn?: string;
  basicAuthenticationCredentials?: BasicAuthenticationCredentials;
  customAuthenticationCredentials?: Record<string, string>;
}
export interface AuthenticationConfigurationPatch {
  secretArn?: string;
  basicAuthenticationCredentials?: BasicAuthenticationCredentials;
}
export type AuthenticationType = "BASIC" | "OAUTH2" | "CUSTOM";
export interface AuthorizationCodeProperties {
  authorizationCode?: string;
  redirectUri?: string;
}
export type AuthorizedPrincipalIdentifier = string;

export type AuthorizedPrincipalIdentifiers = Array<string>;
export type AuthType = "IAM_IDC" | "DISABLED";
interface _AwsAccount {
  awsAccountId?: string;
  awsAccountIdPath?: string;
}

export type AwsAccount =
  | (_AwsAccount & { awsAccountId: string })
  | (_AwsAccount & { awsAccountIdPath: string });
export type AwsAccountId = string;

export interface AwsConsoleLinkParameters {
  uri?: string;
}
export interface AwsLocation {
  accessRole?: string;
  awsAccountId?: string;
  awsRegion?: string;
  iamConnectionId?: string;
}
export type AwsRegion = string;

export interface BasicAuthenticationCredentials {
  userName?: string;
  password?: string;
}
export interface BusinessNameGenerationConfiguration {
  enabled?: boolean;
}
export interface CancelMetadataGenerationRunInput {
  domainIdentifier: string;
  identifier: string;
}
export interface CancelMetadataGenerationRunOutput {}
export interface CancelSubscriptionInput {
  domainIdentifier: string;
  identifier: string;
}
export interface CancelSubscriptionOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  subscribedPrincipal: SubscribedPrincipal;
  subscribedListing: SubscribedListing;
  subscriptionRequestId?: string;
  retainPermissions?: boolean;
}
export type ChangeAction = "PUBLISH" | "UNPUBLISH";
export type ClientToken = string;

export interface CloudFormationProperties {
  templateUrl: string;
}
export interface ColumnFilterConfiguration {
  includedColumnNames?: Array<string>;
}
export type ColumnNameList = Array<string>;
export type ComputeEnvironments = "SPARK" | "ATHENA" | "PYTHON";
export type ComputeEnvironmentsList = Array<ComputeEnvironments>;
export interface ConfigurableActionParameter {
  key?: string;
  value?: string;
}
export type ConfigurableActionParameterList =
  Array<ConfigurableActionParameter>;
export type ConfigurableActionTypeAuthorization = "IAM" | "HTTPS";
export interface ConfigurableEnvironmentAction {
  type: string;
  auth?: ConfigurableActionTypeAuthorization;
  parameters: Array<ConfigurableActionParameter>;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export interface ConnectionCredentials {
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
  expiration?: Date | string;
}
export type ConnectionId = string;

export type ConnectionName = string;

export type ConnectionProperties = Record<string, string>;
interface _ConnectionPropertiesInput {
  athenaProperties?: AthenaPropertiesInput;
  glueProperties?: GluePropertiesInput;
  hyperPodProperties?: HyperPodPropertiesInput;
  iamProperties?: IamPropertiesInput;
  redshiftProperties?: RedshiftPropertiesInput;
  sparkEmrProperties?: SparkEmrPropertiesInput;
  sparkGlueProperties?: SparkGluePropertiesInput;
  s3Properties?: S3PropertiesInput;
}

export type ConnectionPropertiesInput =
  | (_ConnectionPropertiesInput & { athenaProperties: AthenaPropertiesInput })
  | (_ConnectionPropertiesInput & { glueProperties: GluePropertiesInput })
  | (_ConnectionPropertiesInput & {
      hyperPodProperties: HyperPodPropertiesInput;
    })
  | (_ConnectionPropertiesInput & { iamProperties: IamPropertiesInput })
  | (_ConnectionPropertiesInput & {
      redshiftProperties: RedshiftPropertiesInput;
    })
  | (_ConnectionPropertiesInput & {
      sparkEmrProperties: SparkEmrPropertiesInput;
    })
  | (_ConnectionPropertiesInput & {
      sparkGlueProperties: SparkGluePropertiesInput;
    })
  | (_ConnectionPropertiesInput & { s3Properties: S3PropertiesInput });
interface _ConnectionPropertiesOutput {
  athenaProperties?: AthenaPropertiesOutput;
  glueProperties?: GluePropertiesOutput;
  hyperPodProperties?: HyperPodPropertiesOutput;
  iamProperties?: IamPropertiesOutput;
  redshiftProperties?: RedshiftPropertiesOutput;
  sparkEmrProperties?: SparkEmrPropertiesOutput;
  sparkGlueProperties?: SparkGluePropertiesOutput;
  s3Properties?: S3PropertiesOutput;
}

export type ConnectionPropertiesOutput =
  | (_ConnectionPropertiesOutput & { athenaProperties: AthenaPropertiesOutput })
  | (_ConnectionPropertiesOutput & { glueProperties: GluePropertiesOutput })
  | (_ConnectionPropertiesOutput & {
      hyperPodProperties: HyperPodPropertiesOutput;
    })
  | (_ConnectionPropertiesOutput & { iamProperties: IamPropertiesOutput })
  | (_ConnectionPropertiesOutput & {
      redshiftProperties: RedshiftPropertiesOutput;
    })
  | (_ConnectionPropertiesOutput & {
      sparkEmrProperties: SparkEmrPropertiesOutput;
    })
  | (_ConnectionPropertiesOutput & {
      sparkGlueProperties: SparkGluePropertiesOutput;
    })
  | (_ConnectionPropertiesOutput & { s3Properties: S3PropertiesOutput });
interface _ConnectionPropertiesPatch {
  athenaProperties?: AthenaPropertiesPatch;
  glueProperties?: GluePropertiesPatch;
  iamProperties?: IamPropertiesPatch;
  redshiftProperties?: RedshiftPropertiesPatch;
  sparkEmrProperties?: SparkEmrPropertiesPatch;
  s3Properties?: S3PropertiesPatch;
}

export type ConnectionPropertiesPatch =
  | (_ConnectionPropertiesPatch & { athenaProperties: AthenaPropertiesPatch })
  | (_ConnectionPropertiesPatch & { glueProperties: GluePropertiesPatch })
  | (_ConnectionPropertiesPatch & { iamProperties: IamPropertiesPatch })
  | (_ConnectionPropertiesPatch & {
      redshiftProperties: RedshiftPropertiesPatch;
    })
  | (_ConnectionPropertiesPatch & {
      sparkEmrProperties: SparkEmrPropertiesPatch;
    })
  | (_ConnectionPropertiesPatch & { s3Properties: S3PropertiesPatch });
export type ConnectionStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "DELETING"
  | "DELETE_FAILED"
  | "READY"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "DELETED";
export type ConnectionSummaries = Array<ConnectionSummary>;
export interface ConnectionSummary {
  connectionId: string;
  domainId: string;
  domainUnitId: string;
  environmentId?: string;
  name: string;
  physicalEndpoints: Array<PhysicalEndpoint>;
  projectId?: string;
  props?: ConnectionPropertiesOutput;
  type: ConnectionType;
}
export type ConnectionType =
  | "ATHENA"
  | "BIGQUERY"
  | "DATABRICKS"
  | "DOCUMENTDB"
  | "DYNAMODB"
  | "HYPERPOD"
  | "IAM"
  | "MYSQL"
  | "OPENSEARCH"
  | "ORACLE"
  | "POSTGRESQL"
  | "REDSHIFT"
  | "S3"
  | "SAPHANA"
  | "SNOWFLAKE"
  | "SPARK"
  | "SQLSERVER"
  | "TERADATA"
  | "VERTICA"
  | "WORKFLOWS_MWAA";
export interface CreateAssetFilterInput {
  domainIdentifier: string;
  assetIdentifier: string;
  name: string;
  description?: string;
  configuration: AssetFilterConfiguration;
  clientToken?: string;
}
export interface CreateAssetFilterOutput {
  id: string;
  domainId: string;
  assetId: string;
  name: string;
  description?: string;
  status?: FilterStatus;
  configuration: AssetFilterConfiguration;
  createdAt?: Date | string;
  errorMessage?: string;
  effectiveColumnNames?: Array<string>;
  effectiveRowFilter?: string;
}
export interface CreateAssetInput {
  name: string;
  domainIdentifier: string;
  externalIdentifier?: string;
  typeIdentifier: string;
  typeRevision?: string;
  description?: string;
  glossaryTerms?: Array<string>;
  formsInput?: Array<FormInput>;
  owningProjectIdentifier: string;
  predictionConfiguration?: PredictionConfiguration;
  clientToken?: string;
}
export interface CreateAssetOutput {
  id: string;
  name: string;
  typeIdentifier: string;
  typeRevision: string;
  externalIdentifier?: string;
  revision: string;
  description?: string;
  createdAt?: Date | string;
  createdBy?: string;
  firstRevisionCreatedAt?: Date | string;
  firstRevisionCreatedBy?: string;
  glossaryTerms?: Array<string>;
  owningProjectId: string;
  domainId: string;
  listing?: AssetListingDetails;
  formsOutput: Array<FormOutput>;
  readOnlyFormsOutput?: Array<FormOutput>;
  latestTimeSeriesDataPointFormsOutput?: Array<TimeSeriesDataPointSummaryFormOutput>;
  predictionConfiguration?: PredictionConfiguration;
}
export interface CreateAssetRevisionInput {
  name: string;
  domainIdentifier: string;
  identifier: string;
  typeRevision?: string;
  description?: string;
  glossaryTerms?: Array<string>;
  formsInput?: Array<FormInput>;
  predictionConfiguration?: PredictionConfiguration;
  clientToken?: string;
}
export interface CreateAssetRevisionOutput {
  id: string;
  name: string;
  typeIdentifier: string;
  typeRevision: string;
  externalIdentifier?: string;
  revision: string;
  description?: string;
  createdAt?: Date | string;
  createdBy?: string;
  firstRevisionCreatedAt?: Date | string;
  firstRevisionCreatedBy?: string;
  glossaryTerms?: Array<string>;
  owningProjectId: string;
  domainId: string;
  listing?: AssetListingDetails;
  formsOutput: Array<FormOutput>;
  readOnlyFormsOutput?: Array<FormOutput>;
  latestTimeSeriesDataPointFormsOutput?: Array<TimeSeriesDataPointSummaryFormOutput>;
  predictionConfiguration?: PredictionConfiguration;
}
export interface CreateAssetTypeInput {
  domainIdentifier: string;
  name: string;
  description?: string;
  formsInput: Record<string, FormEntryInput>;
  owningProjectIdentifier: string;
}
export interface CreateAssetTypeOutput {
  domainId: string;
  name: string;
  revision: string;
  description?: string;
  formsOutput: Record<string, FormEntryOutput>;
  owningProjectId?: string;
  originDomainId?: string;
  originProjectId?: string;
  createdAt?: Date | string;
  createdBy?: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export interface CreateAssetTypePolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface CreateConnectionInput {
  awsLocation?: AwsLocation;
  clientToken?: string;
  description?: string;
  domainIdentifier: string;
  environmentIdentifier: string;
  name: string;
  props?: ConnectionPropertiesInput;
}
export interface CreateConnectionOutput {
  connectionId: string;
  description?: string;
  domainId: string;
  domainUnitId: string;
  environmentId?: string;
  name: string;
  physicalEndpoints: Array<PhysicalEndpoint>;
  projectId?: string;
  props?: ConnectionPropertiesOutput;
  type: ConnectionType;
}
export type CreatedAt = Date | string;

export interface CreateDataProductInput {
  domainIdentifier: string;
  name: string;
  owningProjectIdentifier: string;
  description?: string;
  glossaryTerms?: Array<string>;
  formsInput?: Array<FormInput>;
  items?: Array<DataProductItem>;
  clientToken?: string;
}
export interface CreateDataProductOutput {
  domainId: string;
  id: string;
  revision: string;
  owningProjectId: string;
  name: string;
  status: DataProductStatus;
  description?: string;
  glossaryTerms?: Array<string>;
  items?: Array<DataProductItem>;
  formsOutput?: Array<FormOutput>;
  createdAt?: Date | string;
  createdBy?: string;
  firstRevisionCreatedAt?: Date | string;
  firstRevisionCreatedBy?: string;
}
export interface CreateDataProductRevisionInput {
  domainIdentifier: string;
  identifier: string;
  name: string;
  description?: string;
  glossaryTerms?: Array<string>;
  items?: Array<DataProductItem>;
  formsInput?: Array<FormInput>;
  clientToken?: string;
}
export interface CreateDataProductRevisionOutput {
  domainId: string;
  id: string;
  revision: string;
  owningProjectId: string;
  name: string;
  status: DataProductStatus;
  description?: string;
  glossaryTerms?: Array<string>;
  items?: Array<DataProductItem>;
  formsOutput?: Array<FormOutput>;
  createdAt?: Date | string;
  createdBy?: string;
  firstRevisionCreatedAt?: Date | string;
  firstRevisionCreatedBy?: string;
}
export interface CreateDataSourceInput {
  name: string;
  description?: string;
  domainIdentifier: string;
  projectIdentifier: string;
  environmentIdentifier?: string;
  connectionIdentifier?: string;
  type: string;
  configuration?: DataSourceConfigurationInput;
  recommendation?: RecommendationConfiguration;
  enableSetting?: EnableSetting;
  schedule?: ScheduleConfiguration;
  publishOnImport?: boolean;
  assetFormsInput?: Array<FormInput>;
  clientToken?: string;
}
export interface CreateDataSourceOutput {
  id: string;
  status?: DataSourceStatus;
  type?: string;
  name: string;
  description?: string;
  domainId: string;
  projectId: string;
  environmentId?: string;
  connectionId?: string;
  configuration?: DataSourceConfigurationOutput;
  recommendation?: RecommendationConfiguration;
  enableSetting?: EnableSetting;
  publishOnImport?: boolean;
  assetFormsOutput?: Array<FormOutput>;
  schedule?: ScheduleConfiguration;
  lastRunStatus?: DataSourceRunStatus;
  lastRunAt?: Date | string;
  lastRunErrorMessage?: DataSourceErrorMessage;
  errorMessage?: DataSourceErrorMessage;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export type CreatedBy = string;

export interface CreateDomainInput {
  name: string;
  description?: string;
  singleSignOn?: SingleSignOn;
  domainExecutionRole: string;
  kmsKeyIdentifier?: string;
  tags?: Record<string, string>;
  domainVersion?: DomainVersion;
  serviceRole?: string;
  clientToken?: string;
}
export interface CreateDomainOutput {
  id: string;
  rootDomainUnitId?: string;
  name?: string;
  description?: string;
  singleSignOn?: SingleSignOn;
  domainExecutionRole?: string;
  arn?: string;
  kmsKeyIdentifier?: string;
  status?: DomainStatus;
  portalUrl?: string;
  tags?: Record<string, string>;
  domainVersion?: DomainVersion;
  serviceRole?: string;
}
export interface CreateDomainUnitInput {
  domainIdentifier: string;
  name: string;
  parentDomainUnitIdentifier: string;
  description?: string;
  clientToken?: string;
}
export interface CreateDomainUnitOutput {
  id: string;
  domainId: string;
  name: string;
  parentDomainUnitId?: string;
  description?: string;
  owners: Array<DomainUnitOwnerProperties>;
  ancestorDomainUnitIds: Array<string>;
  createdAt?: Date | string;
  createdBy?: string;
}
export interface CreateDomainUnitPolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface CreateEnvironmentActionInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  name: string;
  parameters: ActionParameters;
  description?: string;
}
export interface CreateEnvironmentActionOutput {
  domainId: string;
  environmentId: string;
  id: string;
  name: string;
  parameters: ActionParameters;
  description?: string;
}
export interface CreateEnvironmentInput {
  projectIdentifier: string;
  domainIdentifier: string;
  description?: string;
  name: string;
  environmentProfileIdentifier?: string;
  userParameters?: Array<EnvironmentParameter>;
  glossaryTerms?: Array<string>;
  environmentAccountIdentifier?: string;
  environmentAccountRegion?: string;
  environmentBlueprintIdentifier?: string;
  deploymentOrder?: number;
  environmentConfigurationId?: string;
}
export interface CreateEnvironmentOutput {
  projectId: string;
  id?: string;
  domainId: string;
  createdBy: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description?: string;
  environmentProfileId?: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  provider: string;
  provisionedResources?: Array<Resource>;
  status?: EnvironmentStatus;
  environmentActions?: Array<ConfigurableEnvironmentAction>;
  glossaryTerms?: Array<string>;
  userParameters?: Array<CustomParameter>;
  lastDeployment?: Deployment;
  provisioningProperties?: ProvisioningProperties;
  deploymentProperties?: DeploymentProperties;
  environmentBlueprintId?: string;
  environmentConfigurationId?: string;
}
export interface CreateEnvironmentProfileInput {
  domainIdentifier: string;
  name: string;
  description?: string;
  environmentBlueprintIdentifier: string;
  projectIdentifier: string;
  userParameters?: Array<EnvironmentParameter>;
  awsAccountId?: string;
  awsAccountRegion?: string;
}
export interface CreateEnvironmentProfileOutput {
  id: string;
  domainId: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  createdBy: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description?: string;
  environmentBlueprintId: string;
  projectId?: string;
  userParameters?: Array<CustomParameter>;
}
export interface CreateEnvironmentProfilePolicyGrantDetail {
  domainUnitId?: string;
}
export interface CreateFormTypeInput {
  domainIdentifier: string;
  name: string;
  model: Model;
  owningProjectIdentifier: string;
  status?: FormTypeStatus;
  description?: string;
}
export interface CreateFormTypeOutput {
  domainId: string;
  name: string;
  revision: string;
  description?: string;
  owningProjectId?: string;
  originDomainId?: string;
  originProjectId?: string;
}
export interface CreateFormTypePolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface CreateGlossaryInput {
  domainIdentifier: string;
  name: string;
  owningProjectIdentifier: string;
  description?: string;
  status?: GlossaryStatus;
  clientToken?: string;
}
export interface CreateGlossaryOutput {
  domainId: string;
  id: string;
  name: string;
  owningProjectId: string;
  description?: string;
  status?: GlossaryStatus;
}
export interface CreateGlossaryPolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface CreateGlossaryTermInput {
  domainIdentifier: string;
  glossaryIdentifier: string;
  name: string;
  status?: GlossaryTermStatus;
  shortDescription?: string;
  longDescription?: string;
  termRelations?: TermRelations;
  clientToken?: string;
}
export interface CreateGlossaryTermOutput {
  id: string;
  domainId: string;
  glossaryId: string;
  name: string;
  status: GlossaryTermStatus;
  shortDescription?: string;
  longDescription?: string;
  termRelations?: TermRelations;
}
export interface CreateGroupProfileInput {
  domainIdentifier: string;
  groupIdentifier: string;
  clientToken?: string;
}
export interface CreateGroupProfileOutput {
  domainId?: string;
  id?: string;
  status?: GroupProfileStatus;
  groupName?: string;
}
export interface CreateListingChangeSetInput {
  domainIdentifier: string;
  entityIdentifier: string;
  entityType: EntityType;
  entityRevision?: string;
  action: ChangeAction;
  clientToken?: string;
}
export interface CreateListingChangeSetOutput {
  listingId: string;
  listingRevision: string;
  status: ListingStatus;
}
export interface CreateProjectFromProjectProfilePolicyGrantDetail {
  includeChildDomainUnits?: boolean;
  projectProfiles?: Array<string>;
}
export interface CreateProjectInput {
  domainIdentifier: string;
  name: string;
  description?: string;
  glossaryTerms?: Array<string>;
  domainUnitId?: string;
  projectProfileId?: string;
  userParameters?: Array<EnvironmentConfigurationUserParameter>;
}
export interface CreateProjectMembershipInput {
  domainIdentifier: string;
  projectIdentifier: string;
  member: Member;
  designation: UserDesignation;
}
export interface CreateProjectMembershipOutput {}
export interface CreateProjectOutput {
  domainId: string;
  id: string;
  name: string;
  description?: string;
  projectStatus?: ProjectStatus;
  failureReasons?: Array<ProjectDeletionError>;
  createdBy: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  glossaryTerms?: Array<string>;
  domainUnitId?: string;
  projectProfileId?: string;
  userParameters?: Array<EnvironmentConfigurationUserParameter>;
  environmentDeploymentDetails?: EnvironmentDeploymentDetails;
}
export interface CreateProjectPolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface CreateProjectProfileInput {
  domainIdentifier: string;
  name: string;
  description?: string;
  status?: Status;
  environmentConfigurations?: Array<EnvironmentConfiguration>;
  domainUnitIdentifier?: string;
}
export interface CreateProjectProfileOutput {
  domainId: string;
  id: string;
  name: string;
  description?: string;
  status?: Status;
  environmentConfigurations?: Array<EnvironmentConfiguration>;
  createdBy: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  domainUnitId?: string;
}
export interface CreateRuleInput {
  domainIdentifier: string;
  name: string;
  target: RuleTarget;
  action: RuleAction;
  scope: RuleScope;
  detail: RuleDetail;
  description?: string;
  clientToken?: string;
}
export interface CreateRuleOutput {
  identifier: string;
  name: string;
  ruleType: RuleType;
  target: RuleTarget;
  action: RuleAction;
  scope: RuleScope;
  detail: RuleDetail;
  targetType?: RuleTargetType;
  description?: string;
  createdAt: Date | string;
  createdBy: string;
}
export interface CreateSubscriptionGrantInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  subscriptionTargetIdentifier?: string;
  grantedEntity: GrantedEntityInput;
  assetTargetNames?: Array<AssetTargetNameMap>;
  clientToken?: string;
}
export interface CreateSubscriptionGrantOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  subscriptionTargetId: string;
  grantedEntity: GrantedEntity;
  status: SubscriptionGrantOverallStatus;
  assets?: Array<SubscribedAsset>;
  subscriptionId?: string;
}
export interface CreateSubscriptionRequestInput {
  domainIdentifier: string;
  subscribedPrincipals: Array<SubscribedPrincipalInput>;
  subscribedListings: Array<SubscribedListingInput>;
  requestReason: string;
  clientToken?: string;
  metadataForms?: Array<FormInput>;
}
export interface CreateSubscriptionRequestOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionRequestStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  requestReason: string;
  subscribedPrincipals: Array<SubscribedPrincipal>;
  subscribedListings: Array<SubscribedListing>;
  reviewerId?: string;
  decisionComment?: string;
  existingSubscriptionId?: string;
  metadataForms?: Array<FormOutput>;
}
export interface CreateSubscriptionTargetInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  name: string;
  type: string;
  subscriptionTargetConfig: Array<SubscriptionTargetForm>;
  authorizedPrincipals: Array<string>;
  manageAccessRole: string;
  applicableAssetTypes: Array<string>;
  provider?: string;
  clientToken?: string;
}
export interface CreateSubscriptionTargetOutput {
  id: string;
  authorizedPrincipals: Array<string>;
  domainId: string;
  projectId: string;
  environmentId: string;
  name: string;
  type: string;
  createdBy: string;
  updatedBy?: string;
  createdAt: Date | string;
  updatedAt?: Date | string;
  manageAccessRole?: string;
  applicableAssetTypes: Array<string>;
  subscriptionTargetConfig: Array<SubscriptionTargetForm>;
  provider: string;
}
export interface CreateUserProfileInput {
  domainIdentifier: string;
  userIdentifier: string;
  userType?: UserType;
  clientToken?: string;
}
export interface CreateUserProfileOutput {
  domainId?: string;
  id?: string;
  type?: UserProfileType;
  status?: UserProfileStatus;
  details?: UserProfileDetails;
}
export type CredentialMap = Record<string, string>;
export type CronString = string;

export interface CustomParameter {
  keyName: string;
  description?: string;
  fieldType: string;
  defaultValue?: string;
  isEditable?: boolean;
  isOptional?: boolean;
}
export type CustomParameterList = Array<CustomParameter>;
export type DataAssetActivityStatus =
  | "FAILED"
  | "PUBLISHING_FAILED"
  | "SUCCEEDED_CREATED"
  | "SUCCEEDED_UPDATED"
  | "SKIPPED_ALREADY_IMPORTED"
  | "SKIPPED_ARCHIVED"
  | "SKIPPED_NO_ACCESS"
  | "UNCHANGED";
export type DataPointIdentifier = string;

export type DataProductDescription = string;

export type DataProductId = string;

export interface DataProductItem {
  itemType: DataProductItemType;
  identifier: string;
  revision?: string;
  glossaryTerms?: Array<string>;
}
export interface DataProductItemAdditionalAttributes {
  matchRationale?: Array<MatchRationaleItem>;
}
export type DataProductItems = Array<DataProductItem>;
export type DataProductItemType = "ASSET";
export interface DataProductListing {
  dataProductId?: string;
  dataProductRevision?: string;
  createdAt?: Date | string;
  forms?: string;
  glossaryTerms?: Array<DetailedGlossaryTerm>;
  owningProjectId?: string;
  items?: Array<ListingSummary>;
}
export interface DataProductListingItem {
  listingId?: string;
  listingRevision?: string;
  name?: string;
  entityId?: string;
  entityRevision?: string;
  description?: string;
  createdAt?: Date | string;
  listingCreatedBy?: string;
  listingUpdatedBy?: string;
  glossaryTerms?: Array<DetailedGlossaryTerm>;
  owningProjectId?: string;
  additionalAttributes?: DataProductListingItemAdditionalAttributes;
  items?: Array<ListingSummaryItem>;
}
export interface DataProductListingItemAdditionalAttributes {
  forms?: string;
  matchRationale?: Array<MatchRationaleItem>;
}
export type DataProductName = string;

export interface DataProductResultItem {
  domainId: string;
  id: string;
  name: string;
  owningProjectId: string;
  description?: string;
  glossaryTerms?: Array<string>;
  createdAt?: Date | string;
  createdBy?: string;
  firstRevisionCreatedAt?: Date | string;
  firstRevisionCreatedBy?: string;
  additionalAttributes?: DataProductItemAdditionalAttributes;
}
export interface DataProductRevision {
  domainId?: string;
  id?: string;
  revision?: string;
  createdAt?: Date | string;
  createdBy?: string;
}
export type DataProductRevisions = Array<DataProductRevision>;
export type DataProductStatus = "CREATED" | "CREATING" | "CREATE_FAILED";
interface _DataSourceConfigurationInput {
  glueRunConfiguration?: GlueRunConfigurationInput;
  redshiftRunConfiguration?: RedshiftRunConfigurationInput;
  sageMakerRunConfiguration?: SageMakerRunConfigurationInput;
}

export type DataSourceConfigurationInput =
  | (_DataSourceConfigurationInput & {
      glueRunConfiguration: GlueRunConfigurationInput;
    })
  | (_DataSourceConfigurationInput & {
      redshiftRunConfiguration: RedshiftRunConfigurationInput;
    })
  | (_DataSourceConfigurationInput & {
      sageMakerRunConfiguration: SageMakerRunConfigurationInput;
    });
interface _DataSourceConfigurationOutput {
  glueRunConfiguration?: GlueRunConfigurationOutput;
  redshiftRunConfiguration?: RedshiftRunConfigurationOutput;
  sageMakerRunConfiguration?: SageMakerRunConfigurationOutput;
}

export type DataSourceConfigurationOutput =
  | (_DataSourceConfigurationOutput & {
      glueRunConfiguration: GlueRunConfigurationOutput;
    })
  | (_DataSourceConfigurationOutput & {
      redshiftRunConfiguration: RedshiftRunConfigurationOutput;
    })
  | (_DataSourceConfigurationOutput & {
      sageMakerRunConfiguration: SageMakerRunConfigurationOutput;
    });
export interface DataSourceErrorMessage {
  errorType: DataSourceErrorType;
  errorDetail?: string;
}
export type DataSourceErrorType =
  | "ACCESS_DENIED_EXCEPTION"
  | "CONFLICT_EXCEPTION"
  | "INTERNAL_SERVER_EXCEPTION"
  | "RESOURCE_NOT_FOUND_EXCEPTION"
  | "SERVICE_QUOTA_EXCEEDED_EXCEPTION"
  | "THROTTLING_EXCEPTION"
  | "VALIDATION_EXCEPTION";
export type DataSourceId = string;

export type DataSourceRunActivities = Array<DataSourceRunActivity>;
export interface DataSourceRunActivity {
  database: string;
  dataSourceRunId: string;
  technicalName: string;
  dataAssetStatus: DataAssetActivityStatus;
  projectId: string;
  dataAssetId?: string;
  technicalDescription?: string;
  errorMessage?: DataSourceErrorMessage;
  lineageSummary?: LineageInfo;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export type DataSourceRunId = string;

export interface DataSourceRunLineageSummary {
  importStatus?: LineageImportStatus;
}
export type DataSourceRunStatus =
  | "REQUESTED"
  | "RUNNING"
  | "FAILED"
  | "PARTIALLY_SUCCEEDED"
  | "SUCCESS";
export type DataSourceRunSummaries = Array<DataSourceRunSummary>;
export interface DataSourceRunSummary {
  id: string;
  dataSourceId: string;
  type: DataSourceRunType;
  status: DataSourceRunStatus;
  projectId: string;
  runStatisticsForAssets?: RunStatisticsForAssets;
  errorMessage?: DataSourceErrorMessage;
  createdAt: Date | string;
  updatedAt: Date | string;
  startedAt?: Date | string;
  stoppedAt?: Date | string;
  lineageSummary?: DataSourceRunLineageSummary;
}
export type DataSourceRunType = "PRIORITIZED" | "SCHEDULED";
export type DataSourceStatus =
  | "CREATING"
  | "FAILED_CREATION"
  | "READY"
  | "UPDATING"
  | "FAILED_UPDATE"
  | "RUNNING"
  | "DELETING"
  | "FAILED_DELETION";
export type DataSourceSummaries = Array<DataSourceSummary>;
export interface DataSourceSummary {
  domainId: string;
  environmentId?: string;
  connectionId?: string;
  dataSourceId: string;
  name: string;
  type: string;
  status: DataSourceStatus;
  enableSetting?: EnableSetting;
  schedule?: ScheduleConfiguration;
  lastRunStatus?: DataSourceRunStatus;
  lastRunAt?: Date | string;
  lastRunErrorMessage?: DataSourceErrorMessage;
  lastRunAssetCount?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  description?: string;
}
export type DataSourceType = string;

export type DataZoneEntityType = "DOMAIN_UNIT";
export type DateTime = Date | string;

export type DecisionComment = string;

export interface DeleteAssetFilterInput {
  domainIdentifier: string;
  assetIdentifier: string;
  identifier: string;
}
export interface DeleteAssetInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteAssetOutput {}
export interface DeleteAssetTypeInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteAssetTypeOutput {}
export interface DeleteConnectionInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteConnectionOutput {
  status?: string;
}
export interface DeleteDataProductInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteDataProductOutput {}
export interface DeleteDataSourceInput {
  domainIdentifier: string;
  identifier: string;
  clientToken?: string;
  retainPermissionsOnRevokeFailure?: boolean;
}
export interface DeleteDataSourceOutput {
  id: string;
  status?: DataSourceStatus;
  type?: string;
  name: string;
  description?: string;
  domainId: string;
  projectId: string;
  environmentId?: string;
  connectionId?: string;
  configuration?: DataSourceConfigurationOutput;
  enableSetting?: EnableSetting;
  publishOnImport?: boolean;
  assetFormsOutput?: Array<FormOutput>;
  schedule?: ScheduleConfiguration;
  lastRunStatus?: DataSourceRunStatus;
  lastRunAt?: Date | string;
  lastRunErrorMessage?: DataSourceErrorMessage;
  errorMessage?: DataSourceErrorMessage;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  selfGrantStatus?: SelfGrantStatusOutput;
  retainPermissionsOnRevokeFailure?: boolean;
}
export interface DeleteDomainInput {
  identifier: string;
  clientToken?: string;
  skipDeletionCheck?: boolean;
}
export interface DeleteDomainOutput {
  status: DomainStatus;
}
export interface DeleteDomainUnitInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteDomainUnitOutput {}
export interface DeleteEnvironmentActionInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  identifier: string;
}
export interface DeleteEnvironmentBlueprintConfigurationInput {
  domainIdentifier: string;
  environmentBlueprintIdentifier: string;
}
export interface DeleteEnvironmentBlueprintConfigurationOutput {}
export interface DeleteEnvironmentInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteEnvironmentProfileInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteFormTypeInput {
  domainIdentifier: string;
  formTypeIdentifier: string;
}
export interface DeleteFormTypeOutput {}
export interface DeleteGlossaryInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteGlossaryOutput {}
export interface DeleteGlossaryTermInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteGlossaryTermOutput {}
export interface DeleteListingInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteListingOutput {}
export interface DeleteProjectInput {
  domainIdentifier: string;
  identifier: string;
  skipDeletionCheck?: boolean;
}
export interface DeleteProjectMembershipInput {
  domainIdentifier: string;
  projectIdentifier: string;
  member: Member;
}
export interface DeleteProjectMembershipOutput {}
export interface DeleteProjectOutput {}
export interface DeleteProjectProfileInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteProjectProfileOutput {}
export interface DeleteRuleInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteRuleOutput {}
export interface DeleteSubscriptionGrantInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteSubscriptionGrantOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  subscriptionTargetId: string;
  grantedEntity: GrantedEntity;
  status: SubscriptionGrantOverallStatus;
  assets?: Array<SubscribedAsset>;
  subscriptionId?: string;
}
export interface DeleteSubscriptionRequestInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteSubscriptionTargetInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  identifier: string;
}
export interface DeleteTimeSeriesDataPointsInput {
  domainIdentifier: string;
  entityIdentifier: string;
  entityType: TimeSeriesEntityType;
  formName: string;
  clientToken?: string;
}
export interface DeleteTimeSeriesDataPointsOutput {}
export interface Deployment {
  deploymentId?: string;
  deploymentType?: DeploymentType;
  deploymentStatus?: DeploymentStatus;
  failureReason?: EnvironmentError;
  messages?: Array<string>;
  isDeploymentComplete?: boolean;
}
export type DeploymentMessage = string;

export type DeploymentMessagesList = Array<string>;
export type DeploymentMode = "ON_CREATE" | "ON_DEMAND";
export type DeploymentOrder = number;

export interface DeploymentProperties {
  startTimeoutMinutes?: number;
  endTimeoutMinutes?: number;
}
export type DeploymentStatus =
  | "IN_PROGRESS"
  | "SUCCESSFUL"
  | "FAILED"
  | "PENDING_DEPLOYMENT";
export type DeploymentType = "CREATE" | "UPDATE" | "DELETE";
export type Description = string;

export interface DetailedGlossaryTerm {
  name?: string;
  shortDescription?: string;
}
export type DetailedGlossaryTerms = Array<DetailedGlossaryTerm>;
export interface DisassociateEnvironmentRoleInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  environmentRoleArn: string;
}
export interface DisassociateEnvironmentRoleOutput {}
export type DomainDescription = string;

export type DomainId = string;

export type DomainName = string;

export type DomainStatus =
  | "CREATING"
  | "AVAILABLE"
  | "CREATION_FAILED"
  | "DELETING"
  | "DELETED"
  | "DELETION_FAILED";
export type DomainSummaries = Array<DomainSummary>;
export interface DomainSummary {
  id: string;
  name: string;
  description?: string;
  arn: string;
  managedAccountId: string;
  status: DomainStatus;
  portalUrl?: string;
  createdAt: Date | string;
  lastUpdatedAt?: Date | string;
  domainVersion?: DomainVersion;
}
export type DomainUnitDescription = string;

export type DomainUnitDesignation = "OWNER";
export interface DomainUnitFilterForProject {
  domainUnit: string;
  includeChildDomainUnits?: boolean;
}
interface _DomainUnitGrantFilter {
  allDomainUnitsGrantFilter?: AllDomainUnitsGrantFilter;
}

export type DomainUnitGrantFilter = _DomainUnitGrantFilter & {
  allDomainUnitsGrantFilter: AllDomainUnitsGrantFilter;
};
export interface DomainUnitGroupProperties {
  groupId?: string;
}
export type DomainUnitId = string;

export type DomainUnitIds = Array<string>;
export type DomainUnitName = string;

interface _DomainUnitOwnerProperties {
  user?: DomainUnitUserProperties;
  group?: DomainUnitGroupProperties;
}

export type DomainUnitOwnerProperties =
  | (_DomainUnitOwnerProperties & { user: DomainUnitUserProperties })
  | (_DomainUnitOwnerProperties & { group: DomainUnitGroupProperties });
export type DomainUnitOwners = Array<DomainUnitOwnerProperties>;
export interface DomainUnitPolicyGrantPrincipal {
  domainUnitDesignation: DomainUnitDesignation;
  domainUnitIdentifier?: string;
  domainUnitGrantFilter?: DomainUnitGrantFilter;
}
export type DomainUnitSummaries = Array<DomainUnitSummary>;
export interface DomainUnitSummary {
  name: string;
  id: string;
}
export interface DomainUnitTarget {
  domainUnitId: string;
  includeChildDomainUnits?: boolean;
}
export interface DomainUnitUserProperties {
  userId?: string;
}
export type DomainVersion = "V1" | "V2";
export type EdgeDirection = "UPSTREAM" | "DOWNSTREAM";
export type EditedValue = string;

export type EnabledRegionList = Array<string>;
export type EnableSetting = "ENABLED" | "DISABLED";
export type EntityId = string;

export type EntityIdentifier = string;

export type EntityOwners = Array<OwnerPropertiesOutput>;
export type EntityType = "ASSET" | "DATA_PRODUCT";
export type EnvironmentActionId = string;

export type EnvironmentActionList = Array<ConfigurableEnvironmentAction>;
export interface EnvironmentActionSummary {
  domainId: string;
  environmentId: string;
  id: string;
  name: string;
  parameters: ActionParameters;
  description?: string;
}
export interface EnvironmentBlueprintConfigurationItem {
  domainId: string;
  environmentBlueprintId: string;
  provisioningRoleArn?: string;
  environmentRolePermissionBoundary?: string;
  manageAccessRoleArn?: string;
  enabledRegions?: Array<string>;
  regionalParameters?: Record<string, Record<string, string>>;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  provisioningConfigurations?: Array<ProvisioningConfiguration>;
}
export type EnvironmentBlueprintConfigurations =
  Array<EnvironmentBlueprintConfigurationItem>;
export type EnvironmentBlueprintId = string;

export type EnvironmentBlueprintName = string;

export type EnvironmentBlueprintSummaries = Array<EnvironmentBlueprintSummary>;
export interface EnvironmentBlueprintSummary {
  id: string;
  name: string;
  description?: string;
  provider: string;
  provisioningProperties: ProvisioningProperties;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export interface EnvironmentConfiguration {
  name: string;
  id?: string;
  environmentBlueprintId: string;
  description?: string;
  deploymentMode?: DeploymentMode;
  configurationParameters?: EnvironmentConfigurationParametersDetails;
  awsAccount: AwsAccount;
  awsRegion: Region;
  deploymentOrder?: number;
}
export type EnvironmentConfigurationId = string;

export type EnvironmentConfigurationName = string;

export interface EnvironmentConfigurationParameter {
  name?: string;
  value?: string;
  isEditable?: boolean;
}
export type EnvironmentConfigurationParameterName = string;

export interface EnvironmentConfigurationParametersDetails {
  ssmPath?: string;
  parameterOverrides?: Array<EnvironmentConfigurationParameter>;
  resolvedParameters?: Array<EnvironmentConfigurationParameter>;
}
export type EnvironmentConfigurationParametersList =
  Array<EnvironmentConfigurationParameter>;
export type EnvironmentConfigurationsList = Array<EnvironmentConfiguration>;
export interface EnvironmentConfigurationUserParameter {
  environmentId?: string;
  environmentConfigurationName?: string;
  environmentParameters?: Array<EnvironmentParameter>;
}
export type EnvironmentConfigurationUserParametersList =
  Array<EnvironmentConfigurationUserParameter>;
export interface EnvironmentDeploymentDetails {
  overallDeploymentStatus?: OverallDeploymentStatus;
  environmentFailureReasons?: Record<string, Array<EnvironmentError>>;
}
export interface EnvironmentError {
  code?: string;
  message: string;
}
export type EnvironmentFailureReasons = Record<string, Array<EnvironmentError>>;
export type EnvironmentFailureReasonsList = Array<EnvironmentError>;
export type EnvironmentId = string;

export type EnvironmentName = string;

export interface EnvironmentParameter {
  name?: string;
  value?: string;
}
export type EnvironmentParametersList = Array<EnvironmentParameter>;
export type EnvironmentProfileId = string;

export type EnvironmentProfileName = string;

export type EnvironmentProfileSummaries = Array<EnvironmentProfileSummary>;
export interface EnvironmentProfileSummary {
  id: string;
  domainId: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  createdBy: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description?: string;
  environmentBlueprintId: string;
  projectId?: string;
}
export type EnvironmentStatus =
  | "ACTIVE"
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETE_FAILED"
  | "VALIDATION_FAILED"
  | "SUSPENDED"
  | "DISABLED"
  | "EXPIRED"
  | "DELETED"
  | "INACCESSIBLE";
export type EnvironmentSummaries = Array<EnvironmentSummary>;
export interface EnvironmentSummary {
  projectId: string;
  id?: string;
  domainId: string;
  createdBy: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description?: string;
  environmentProfileId?: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  provider: string;
  status?: EnvironmentStatus;
  environmentConfigurationId?: string;
}
export interface EqualToExpression {
  columnName: string;
  value: string;
}
export type ErrorMessage = string;

interface _EventSummary {
  openLineageRunEventSummary?: OpenLineageRunEventSummary;
}

export type EventSummary = _EventSummary & {
  openLineageRunEventSummary: OpenLineageRunEventSummary;
};
export type ExternalIdentifier = string;

export type FailedQueryProcessingErrorMessages = Array<string>;
export interface FailureCause {
  message?: string;
}
export type FailureReasons = Array<ProjectDeletionError>;
export interface Filter {
  attribute: string;
  value: string;
}
interface _FilterClause {
  filter?: Filter;
  and?: Array<FilterClause>;
  or?: Array<FilterClause>;
}

export type FilterClause =
  | (_FilterClause & { filter: Filter })
  | (_FilterClause & { and: Array<FilterClause> })
  | (_FilterClause & { or: Array<FilterClause> });
export interface FilterExpression {
  type: FilterExpressionType;
  expression: string;
}
export type FilterExpressions = Array<FilterExpression>;
export type FilterExpressionType = "INCLUDE" | "EXCLUDE";
export type FilterId = string;

export type FilterIds = Array<string>;
export type FilterList = Array<FilterClause>;
export type FilterName = string;

export type FilterStatus = "VALID" | "INVALID";
export type FirstName = string;

export interface FormEntryInput {
  typeIdentifier: string;
  typeRevision: string;
  required?: boolean;
}
export interface FormEntryOutput {
  typeName: string;
  typeRevision: string;
  required?: boolean;
}
export interface FormInput {
  formName: string;
  typeIdentifier?: string;
  typeRevision?: string;
  content?: string;
}
export type FormInputList = Array<FormInput>;
export type FormName = string;

export interface FormOutput {
  formName: string;
  typeName?: string;
  typeRevision?: string;
  content?: string;
}
export type FormOutputList = Array<FormOutput>;
export type Forms = string;

export type FormsInputMap = Record<string, FormEntryInput>;
export type FormsOutputMap = Record<string, FormEntryOutput>;
export interface FormTypeData {
  domainId: string;
  name: string;
  revision: string;
  model?: Model;
  status?: FormTypeStatus;
  owningProjectId?: string;
  originDomainId?: string;
  originProjectId?: string;
  createdAt?: Date | string;
  createdBy?: string;
  description?: string;
  imports?: Array<Import>;
}
export type FormTypeIdentifier = string;

export type FormTypeName = string;

export type FormTypeStatus = "ENABLED" | "DISABLED";
export interface GetAssetFilterInput {
  domainIdentifier: string;
  assetIdentifier: string;
  identifier: string;
}
export interface GetAssetFilterOutput {
  id: string;
  domainId: string;
  assetId: string;
  name: string;
  description?: string;
  status?: FilterStatus;
  configuration: AssetFilterConfiguration;
  createdAt?: Date | string;
  errorMessage?: string;
  effectiveColumnNames?: Array<string>;
  effectiveRowFilter?: string;
}
export interface GetAssetInput {
  domainIdentifier: string;
  identifier: string;
  revision?: string;
}
export interface GetAssetOutput {
  id: string;
  name: string;
  typeIdentifier: string;
  typeRevision: string;
  externalIdentifier?: string;
  revision: string;
  description?: string;
  createdAt?: Date | string;
  createdBy?: string;
  firstRevisionCreatedAt?: Date | string;
  firstRevisionCreatedBy?: string;
  glossaryTerms?: Array<string>;
  owningProjectId: string;
  domainId: string;
  listing?: AssetListingDetails;
  formsOutput: Array<FormOutput>;
  readOnlyFormsOutput?: Array<FormOutput>;
  latestTimeSeriesDataPointFormsOutput?: Array<TimeSeriesDataPointSummaryFormOutput>;
}
export interface GetAssetTypeInput {
  domainIdentifier: string;
  identifier: string;
  revision?: string;
}
export interface GetAssetTypeOutput {
  domainId: string;
  name: string;
  revision: string;
  description?: string;
  formsOutput: Record<string, FormEntryOutput>;
  owningProjectId: string;
  originDomainId?: string;
  originProjectId?: string;
  createdAt?: Date | string;
  createdBy?: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export interface GetConnectionInput {
  domainIdentifier: string;
  identifier: string;
  withSecret?: boolean;
}
export interface GetConnectionOutput {
  connectionCredentials?: ConnectionCredentials;
  connectionId: string;
  description?: string;
  domainId: string;
  domainUnitId: string;
  environmentId?: string;
  environmentUserRole?: string;
  name: string;
  physicalEndpoints: Array<PhysicalEndpoint>;
  projectId?: string;
  props?: ConnectionPropertiesOutput;
  type: ConnectionType;
}
export interface GetDataProductInput {
  domainIdentifier: string;
  identifier: string;
  revision?: string;
}
export interface GetDataProductOutput {
  domainId: string;
  id: string;
  revision: string;
  owningProjectId: string;
  name: string;
  status: DataProductStatus;
  description?: string;
  glossaryTerms?: Array<string>;
  items?: Array<DataProductItem>;
  formsOutput?: Array<FormOutput>;
  createdAt?: Date | string;
  createdBy?: string;
  firstRevisionCreatedAt?: Date | string;
  firstRevisionCreatedBy?: string;
}
export interface GetDataSourceInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetDataSourceOutput {
  id: string;
  status?: DataSourceStatus;
  type?: string;
  name: string;
  description?: string;
  domainId: string;
  projectId: string;
  environmentId?: string;
  connectionId?: string;
  configuration?: DataSourceConfigurationOutput;
  recommendation?: RecommendationConfiguration;
  enableSetting?: EnableSetting;
  publishOnImport?: boolean;
  assetFormsOutput?: Array<FormOutput>;
  schedule?: ScheduleConfiguration;
  lastRunStatus?: DataSourceRunStatus;
  lastRunAt?: Date | string;
  lastRunErrorMessage?: DataSourceErrorMessage;
  lastRunAssetCount?: number;
  errorMessage?: DataSourceErrorMessage;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  selfGrantStatus?: SelfGrantStatusOutput;
}
export interface GetDataSourceRunInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetDataSourceRunOutput {
  domainId: string;
  dataSourceId: string;
  id: string;
  projectId: string;
  status: DataSourceRunStatus;
  type: DataSourceRunType;
  dataSourceConfigurationSnapshot?: string;
  runStatisticsForAssets?: RunStatisticsForAssets;
  lineageSummary?: DataSourceRunLineageSummary;
  errorMessage?: DataSourceErrorMessage;
  createdAt: Date | string;
  updatedAt: Date | string;
  startedAt?: Date | string;
  stoppedAt?: Date | string;
}
export interface GetDomainInput {
  identifier: string;
}
export interface GetDomainOutput {
  id: string;
  rootDomainUnitId?: string;
  name?: string;
  description?: string;
  singleSignOn?: SingleSignOn;
  domainExecutionRole: string;
  arn?: string;
  kmsKeyIdentifier?: string;
  status: DomainStatus;
  portalUrl?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  tags?: Record<string, string>;
  domainVersion?: DomainVersion;
  serviceRole?: string;
}
export interface GetDomainUnitInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetDomainUnitOutput {
  id: string;
  domainId: string;
  name: string;
  parentDomainUnitId?: string;
  description?: string;
  owners: Array<DomainUnitOwnerProperties>;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  createdBy?: string;
  lastUpdatedBy?: string;
}
export interface GetEnvironmentActionInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  identifier: string;
}
export interface GetEnvironmentActionOutput {
  domainId: string;
  environmentId: string;
  id: string;
  name: string;
  parameters: ActionParameters;
  description?: string;
}
export interface GetEnvironmentBlueprintConfigurationInput {
  domainIdentifier: string;
  environmentBlueprintIdentifier: string;
}
export interface GetEnvironmentBlueprintConfigurationOutput {
  domainId: string;
  environmentBlueprintId: string;
  provisioningRoleArn?: string;
  environmentRolePermissionBoundary?: string;
  manageAccessRoleArn?: string;
  enabledRegions?: Array<string>;
  regionalParameters?: Record<string, Record<string, string>>;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  provisioningConfigurations?: Array<ProvisioningConfiguration>;
}
export interface GetEnvironmentBlueprintInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetEnvironmentBlueprintOutput {
  id: string;
  name: string;
  description?: string;
  provider: string;
  provisioningProperties: ProvisioningProperties;
  deploymentProperties?: DeploymentProperties;
  userParameters?: Array<CustomParameter>;
  glossaryTerms?: Array<string>;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export interface GetEnvironmentCredentialsInput {
  domainIdentifier: string;
  environmentIdentifier: string;
}
export interface GetEnvironmentCredentialsOutput {
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
  expiration?: Date | string;
}
export interface GetEnvironmentInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetEnvironmentOutput {
  projectId: string;
  id?: string;
  domainId: string;
  createdBy: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description?: string;
  environmentProfileId?: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  provider: string;
  provisionedResources?: Array<Resource>;
  status?: EnvironmentStatus;
  environmentActions?: Array<ConfigurableEnvironmentAction>;
  glossaryTerms?: Array<string>;
  userParameters?: Array<CustomParameter>;
  lastDeployment?: Deployment;
  provisioningProperties?: ProvisioningProperties;
  deploymentProperties?: DeploymentProperties;
  environmentBlueprintId?: string;
  environmentConfigurationId?: string;
}
export interface GetEnvironmentProfileInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetEnvironmentProfileOutput {
  id: string;
  domainId: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  createdBy: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description?: string;
  environmentBlueprintId: string;
  projectId?: string;
  userParameters?: Array<CustomParameter>;
}
export interface GetFormTypeInput {
  domainIdentifier: string;
  formTypeIdentifier: string;
  revision?: string;
}
export interface GetFormTypeOutput {
  domainId: string;
  name: string;
  revision: string;
  model: Model;
  owningProjectId?: string;
  originDomainId?: string;
  originProjectId?: string;
  status?: FormTypeStatus;
  createdAt?: Date | string;
  createdBy?: string;
  description?: string;
  imports?: Array<Import>;
}
export interface GetGlossaryInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetGlossaryOutput {
  domainId: string;
  id: string;
  owningProjectId: string;
  name: string;
  description?: string;
  status: GlossaryStatus;
  createdAt?: Date | string;
  createdBy?: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export interface GetGlossaryTermInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetGlossaryTermOutput {
  domainId: string;
  glossaryId: string;
  id: string;
  name: string;
  shortDescription?: string;
  longDescription?: string;
  termRelations?: TermRelations;
  status: GlossaryTermStatus;
  createdAt?: Date | string;
  createdBy?: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export interface GetGroupProfileInput {
  domainIdentifier: string;
  groupIdentifier: string;
}
export interface GetGroupProfileOutput {
  domainId?: string;
  id?: string;
  status?: GroupProfileStatus;
  groupName?: string;
}
export interface GetIamPortalLoginUrlInput {
  domainIdentifier: string;
}
export interface GetIamPortalLoginUrlOutput {
  authCodeUrl?: string;
  userProfileId: string;
}
export interface GetJobRunInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetJobRunOutput {
  domainId?: string;
  id?: string;
  jobId?: string;
  jobType?: JobType;
  runMode?: JobRunMode;
  details?: JobRunDetails;
  status?: JobRunStatus;
  error?: JobRunError;
  createdBy?: string;
  createdAt?: Date | string;
  startTime?: Date | string;
  endTime?: Date | string;
}
export interface GetLineageEventInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetLineageEventOutput {
  domainId?: string;
  id?: string;
  event?: Uint8Array | string;
  createdBy?: string;
  processingStatus?: LineageEventProcessingStatus;
  eventTime?: Date | string;
  createdAt?: Date | string;
}
export interface GetLineageNodeInput {
  domainIdentifier: string;
  identifier: string;
  eventTimestamp?: Date | string;
}
export interface GetLineageNodeOutput {
  domainId: string;
  name?: string;
  description?: string;
  createdAt?: Date | string;
  createdBy?: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  id: string;
  typeName: string;
  typeRevision?: string;
  sourceIdentifier?: string;
  eventTimestamp?: Date | string;
  formsOutput?: Array<FormOutput>;
  upstreamNodes?: Array<LineageNodeReference>;
  downstreamNodes?: Array<LineageNodeReference>;
}
export interface GetListingInput {
  domainIdentifier: string;
  identifier: string;
  listingRevision?: string;
}
export interface GetListingOutput {
  domainId: string;
  id: string;
  listingRevision: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  createdBy?: string;
  updatedBy?: string;
  item?: ListingItem;
  name?: string;
  description?: string;
  status?: ListingStatus;
}
export interface GetMetadataGenerationRunInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetMetadataGenerationRunOutput {
  domainId: string;
  id: string;
  target?: MetadataGenerationRunTarget;
  status?: MetadataGenerationRunStatus;
  type?: MetadataGenerationRunType;
  createdAt?: Date | string;
  createdBy?: string;
  owningProjectId: string;
}
export interface GetProjectInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetProjectOutput {
  domainId: string;
  id: string;
  name: string;
  description?: string;
  projectStatus?: ProjectStatus;
  failureReasons?: Array<ProjectDeletionError>;
  createdBy: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  glossaryTerms?: Array<string>;
  domainUnitId?: string;
  projectProfileId?: string;
  userParameters?: Array<EnvironmentConfigurationUserParameter>;
  environmentDeploymentDetails?: EnvironmentDeploymentDetails;
}
export interface GetProjectProfileInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetProjectProfileOutput {
  domainId: string;
  id: string;
  name: string;
  description?: string;
  status?: Status;
  environmentConfigurations?: Array<EnvironmentConfiguration>;
  createdBy: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  domainUnitId?: string;
}
export interface GetRuleInput {
  domainIdentifier: string;
  identifier: string;
  revision?: string;
}
export interface GetRuleOutput {
  identifier: string;
  revision: string;
  name: string;
  ruleType: RuleType;
  target: RuleTarget;
  action: RuleAction;
  scope: RuleScope;
  detail: RuleDetail;
  targetType?: RuleTargetType;
  description?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  createdBy: string;
  lastUpdatedBy: string;
}
export interface GetSubscriptionGrantInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetSubscriptionGrantOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  subscriptionTargetId: string;
  grantedEntity: GrantedEntity;
  status: SubscriptionGrantOverallStatus;
  assets?: Array<SubscribedAsset>;
  subscriptionId?: string;
}
export interface GetSubscriptionInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetSubscriptionOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  subscribedPrincipal: SubscribedPrincipal;
  subscribedListing: SubscribedListing;
  subscriptionRequestId?: string;
  retainPermissions?: boolean;
}
export interface GetSubscriptionRequestDetailsInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetSubscriptionRequestDetailsOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionRequestStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  requestReason: string;
  subscribedPrincipals: Array<SubscribedPrincipal>;
  subscribedListings: Array<SubscribedListing>;
  reviewerId?: string;
  decisionComment?: string;
  existingSubscriptionId?: string;
  metadataForms?: Array<FormOutput>;
}
export interface GetSubscriptionTargetInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  identifier: string;
}
export interface GetSubscriptionTargetOutput {
  id: string;
  authorizedPrincipals: Array<string>;
  domainId: string;
  projectId: string;
  environmentId: string;
  name: string;
  type: string;
  createdBy: string;
  updatedBy?: string;
  createdAt: Date | string;
  updatedAt?: Date | string;
  manageAccessRole?: string;
  applicableAssetTypes: Array<string>;
  subscriptionTargetConfig: Array<SubscriptionTargetForm>;
  provider: string;
}
export interface GetTimeSeriesDataPointInput {
  domainIdentifier: string;
  entityIdentifier: string;
  entityType: TimeSeriesEntityType;
  identifier: string;
  formName: string;
}
export interface GetTimeSeriesDataPointOutput {
  domainId?: string;
  entityId?: string;
  entityType?: TimeSeriesEntityType;
  formName?: string;
  form?: TimeSeriesDataPointFormOutput;
}
export interface GetUserProfileInput {
  domainIdentifier: string;
  userIdentifier: string;
  type?: UserProfileType;
}
export interface GetUserProfileOutput {
  domainId?: string;
  id?: string;
  type?: UserProfileType;
  status?: UserProfileStatus;
  details?: UserProfileDetails;
}
export type GlossaryDescription = string;

export type GlossaryId = string;

export interface GlossaryItem {
  domainId: string;
  id: string;
  name: string;
  owningProjectId: string;
  description?: string;
  status: GlossaryStatus;
  createdAt?: Date | string;
  createdBy?: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  additionalAttributes?: GlossaryItemAdditionalAttributes;
}
export interface GlossaryItemAdditionalAttributes {
  matchRationale?: Array<MatchRationaleItem>;
}
export type GlossaryName = string;

export type GlossaryStatus = "DISABLED" | "ENABLED";
export type GlossaryTermId = string;

export interface GlossaryTermItem {
  domainId: string;
  glossaryId: string;
  id: string;
  name: string;
  shortDescription?: string;
  longDescription?: string;
  termRelations?: TermRelations;
  status: GlossaryTermStatus;
  createdAt?: Date | string;
  createdBy?: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  additionalAttributes?: GlossaryTermItemAdditionalAttributes;
}
export interface GlossaryTermItemAdditionalAttributes {
  matchRationale?: Array<MatchRationaleItem>;
}
export type GlossaryTermName = string;

export type GlossaryTerms = Array<string>;
export type GlossaryTermStatus = "ENABLED" | "DISABLED";
export interface GlueConnection {
  name?: string;
  description?: string;
  connectionType?: ConnectionType;
  matchCriteria?: Array<string>;
  connectionProperties?: Record<string, string>;
  sparkProperties?: Record<string, string>;
  athenaProperties?: Record<string, string>;
  pythonProperties?: Record<string, string>;
  physicalConnectionRequirements?: PhysicalConnectionRequirements;
  creationTime?: Date | string;
  lastUpdatedTime?: Date | string;
  lastUpdatedBy?: string;
  status?: ConnectionStatus;
  statusReason?: string;
  lastConnectionValidationTime?: Date | string;
  authenticationConfiguration?: AuthenticationConfiguration;
  connectionSchemaVersion?: number;
  compatibleComputeEnvironments?: Array<ComputeEnvironments>;
}
export interface GlueConnectionInput {
  connectionProperties?: Record<string, string>;
  physicalConnectionRequirements?: PhysicalConnectionRequirements;
  name?: string;
  description?: string;
  connectionType?: GlueConnectionType;
  matchCriteria?: string;
  validateCredentials?: boolean;
  validateForComputeEnvironments?: Array<ComputeEnvironments>;
  sparkProperties?: Record<string, string>;
  athenaProperties?: Record<string, string>;
  pythonProperties?: Record<string, string>;
  authenticationConfiguration?: AuthenticationConfigurationInput;
}
export interface GlueConnectionPatch {
  description?: string;
  connectionProperties?: Record<string, string>;
  authenticationConfiguration?: AuthenticationConfigurationPatch;
}
export type GlueConnectionType =
  | "SNOWFLAKE"
  | "BIGQUERY"
  | "DOCUMENTDB"
  | "DYNAMODB"
  | "MYSQL"
  | "OPENSEARCH"
  | "ORACLE"
  | "POSTGRESQL"
  | "REDSHIFT"
  | "SAPHANA"
  | "SQLSERVER"
  | "TERADATA"
  | "VERTICA";
export interface GlueOAuth2Credentials {
  userManagedClientApplicationClientSecret?: string;
  accessToken?: string;
  refreshToken?: string;
  jwtToken?: string;
}
export interface GluePropertiesInput {
  glueConnectionInput?: GlueConnectionInput;
}
export interface GluePropertiesOutput {
  status?: ConnectionStatus;
  errorMessage?: string;
}
export interface GluePropertiesPatch {
  glueConnectionInput?: GlueConnectionPatch;
}
export interface GlueRunConfigurationInput {
  dataAccessRole?: string;
  relationalFilterConfigurations: Array<RelationalFilterConfiguration>;
  autoImportDataQualityResult?: boolean;
  catalogName?: string;
}
export interface GlueRunConfigurationOutput {
  accountId?: string;
  region?: string;
  dataAccessRole?: string;
  relationalFilterConfigurations: Array<RelationalFilterConfiguration>;
  autoImportDataQualityResult?: boolean;
  catalogName?: string;
}
export interface GlueSelfGrantStatusOutput {
  selfGrantStatusDetails: Array<SelfGrantStatusDetail>;
}
export type GovernanceType = "AWS_MANAGED" | "USER_MANAGED";
interface _GrantedEntity {
  listing?: ListingRevision;
}

export type GrantedEntity = _GrantedEntity & { listing: ListingRevision };
interface _GrantedEntityInput {
  listing?: ListingRevisionInput;
}

export type GrantedEntityInput = _GrantedEntityInput & {
  listing: ListingRevisionInput;
};
export interface GreaterThanExpression {
  columnName: string;
  value: string;
}
export interface GreaterThanOrEqualToExpression {
  columnName: string;
  value: string;
}
export interface GroupDetails {
  groupId: string;
}
export type GroupIdentifier = string;

interface _GroupPolicyGrantPrincipal {
  groupIdentifier?: string;
}

export type GroupPolicyGrantPrincipal = _GroupPolicyGrantPrincipal & {
  groupIdentifier: string;
};
export type GroupProfileId = string;

export type GroupProfileName = string;

export type GroupProfileStatus = "ASSIGNED" | "NOT_ASSIGNED";
export type GroupProfileSummaries = Array<GroupProfileSummary>;
export interface GroupProfileSummary {
  domainId?: string;
  id?: string;
  status?: GroupProfileStatus;
  groupName?: string;
}
export type GroupSearchText = string;

export type GroupSearchType = "SSO_GROUP" | "DATAZONE_SSO_GROUP";
export type HyperPodOrchestrator = "EKS" | "SLURM";
export interface HyperPodPropertiesInput {
  clusterName: string;
}
export interface HyperPodPropertiesOutput {
  clusterName: string;
  clusterArn?: string;
  orchestrator?: HyperPodOrchestrator;
}
export interface IamPropertiesInput {
  glueLineageSyncEnabled?: boolean;
}
export interface IamPropertiesOutput {
  environmentId?: string;
  glueLineageSyncEnabled?: boolean;
}
export interface IamPropertiesPatch {
  glueLineageSyncEnabled?: boolean;
}
export type IamRoleArn = string;

export interface IamUserProfileDetails {
  arn?: string;
}
export interface Import {
  name: string;
  revision: string;
}
export type ImportList = Array<Import>;
export interface InExpression {
  columnName: string;
  values: Array<string>;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type InventorySearchScope =
  | "ASSET"
  | "GLOSSARY"
  | "GLOSSARY_TERM"
  | "DATA_PRODUCT";
export interface IsNotNullExpression {
  columnName: string;
}
export interface IsNullExpression {
  columnName: string;
}
export type ItemGlossaryTerms = Array<string>;
interface _JobRunDetails {
  lineageRunDetails?: LineageRunDetails;
}

export type JobRunDetails = _JobRunDetails & {
  lineageRunDetails: LineageRunDetails;
};
export interface JobRunError {
  message: string;
}
export type JobRunMode = "SCHEDULED" | "ON_DEMAND";
export type JobRunStatus =
  | "SCHEDULED"
  | "IN_PROGRESS"
  | "SUCCESS"
  | "PARTIALLY_SUCCEEDED"
  | "FAILED"
  | "ABORTED"
  | "TIMED_OUT"
  | "CANCELED";
export type JobRunSummaries = Array<JobRunSummary>;
export interface JobRunSummary {
  domainId?: string;
  jobId?: string;
  jobType?: JobType;
  runId?: string;
  runMode?: JobRunMode;
  status?: JobRunStatus;
  error?: JobRunError;
  createdBy?: string;
  createdAt?: Date | string;
  startTime?: Date | string;
  endTime?: Date | string;
}
export type JobType = "LINEAGE";
export type KmsKeyArn = string;

export interface LakeFormationConfiguration {
  locationRegistrationRole?: string;
  locationRegistrationExcludeS3Locations?: Array<string>;
}
export type LastName = string;

export interface LessThanExpression {
  columnName: string;
  value: string;
}
export interface LessThanOrEqualToExpression {
  columnName: string;
  value: string;
}
export interface LikeExpression {
  columnName: string;
  value: string;
}
export type LineageEvent = Uint8Array | string;

export type LineageEventErrorMessage = string;

export type LineageEventIdentifier = string;

export type LineageEventProcessingStatus =
  | "REQUESTED"
  | "PROCESSING"
  | "SUCCESS"
  | "FAILED";
export type LineageEventSummaries = Array<LineageEventSummary>;
export interface LineageEventSummary {
  id?: string;
  domainId?: string;
  processingStatus?: LineageEventProcessingStatus;
  eventTime?: Date | string;
  eventSummary?: EventSummary;
  createdBy?: string;
  createdAt?: Date | string;
}
export type LineageImportStatus =
  | "IN_PROGRESS"
  | "SUCCESS"
  | "FAILED"
  | "PARTIALLY_SUCCEEDED";
export interface LineageInfo {
  eventId?: string;
  eventStatus?: LineageEventProcessingStatus;
  errorMessage?: string;
}
export type LineageNodeId = string;

export type LineageNodeIdentifier = string;

export interface LineageNodeReference {
  id?: string;
  eventTimestamp?: Date | string;
}
export type LineageNodeReferenceList = Array<LineageNodeReference>;
export type LineageNodeSummaries = Array<LineageNodeSummary>;
export interface LineageNodeSummary {
  domainId: string;
  name?: string;
  description?: string;
  createdAt?: Date | string;
  createdBy?: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  id: string;
  typeName: string;
  typeRevision?: string;
  sourceIdentifier?: string;
  eventTimestamp?: Date | string;
}
export interface LineageNodeTypeItem {
  domainId: string;
  name?: string;
  description?: string;
  createdAt?: Date | string;
  createdBy?: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  revision: string;
  formsOutput: Record<string, FormEntryOutput>;
}
export interface LineageRunDetails {
  sqlQueryRunDetails?: LineageSqlQueryRunDetails;
}
export interface LineageSqlQueryRunDetails {
  queryStartTime?: Date | string;
  queryEndTime?: Date | string;
  totalQueriesProcessed?: number;
  numQueriesFailed?: number;
  errorMessages?: Array<string>;
}
export interface LineageSyncSchedule {
  schedule?: string;
}
export interface ListAssetFiltersInput {
  domainIdentifier: string;
  assetIdentifier: string;
  status?: FilterStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssetFiltersOutput {
  items: Array<AssetFilterSummary>;
  nextToken?: string;
}
export interface ListAssetRevisionsInput {
  domainIdentifier: string;
  identifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssetRevisionsOutput {
  items?: Array<AssetRevision>;
  nextToken?: string;
}
export interface ListConnectionsInput {
  domainIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  sortBy?: SortFieldConnection;
  sortOrder?: SortOrder;
  name?: string;
  environmentIdentifier?: string;
  projectIdentifier: string;
  type?: ConnectionType;
}
export interface ListConnectionsOutput {
  items: Array<ConnectionSummary>;
  nextToken?: string;
}
export interface ListDataProductRevisionsInput {
  domainIdentifier: string;
  identifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDataProductRevisionsOutput {
  items: Array<DataProductRevision>;
  nextToken?: string;
}
export interface ListDataSourceRunActivitiesInput {
  domainIdentifier: string;
  identifier: string;
  status?: DataAssetActivityStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataSourceRunActivitiesOutput {
  items: Array<DataSourceRunActivity>;
  nextToken?: string;
}
export interface ListDataSourceRunsInput {
  domainIdentifier: string;
  dataSourceIdentifier: string;
  status?: DataSourceRunStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataSourceRunsOutput {
  items: Array<DataSourceRunSummary>;
  nextToken?: string;
}
export interface ListDataSourcesInput {
  domainIdentifier: string;
  projectIdentifier: string;
  environmentIdentifier?: string;
  connectionIdentifier?: string;
  type?: string;
  status?: DataSourceStatus;
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataSourcesOutput {
  items: Array<DataSourceSummary>;
  nextToken?: string;
}
export interface ListDomainsInput {
  status?: DomainStatus;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDomainsOutput {
  items: Array<DomainSummary>;
  nextToken?: string;
}
export interface ListDomainUnitsForParentInput {
  domainIdentifier: string;
  parentDomainUnitIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDomainUnitsForParentOutput {
  items: Array<DomainUnitSummary>;
  nextToken?: string;
}
export interface ListEntityOwnersInput {
  domainIdentifier: string;
  entityType: DataZoneEntityType;
  entityIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListEntityOwnersOutput {
  owners: Array<OwnerPropertiesOutput>;
  nextToken?: string;
}
export interface ListEnvironmentActionsInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListEnvironmentActionsOutput {
  items?: Array<EnvironmentActionSummary>;
  nextToken?: string;
}
export type ListEnvironmentActionSummaries = Array<EnvironmentActionSummary>;
export interface ListEnvironmentBlueprintConfigurationsInput {
  domainIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListEnvironmentBlueprintConfigurationsOutput {
  items?: Array<EnvironmentBlueprintConfigurationItem>;
  nextToken?: string;
}
export interface ListEnvironmentBlueprintsInput {
  domainIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  name?: string;
  managed?: boolean;
}
export interface ListEnvironmentBlueprintsOutput {
  items: Array<EnvironmentBlueprintSummary>;
  nextToken?: string;
}
export interface ListEnvironmentProfilesInput {
  domainIdentifier: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  environmentBlueprintIdentifier?: string;
  projectIdentifier?: string;
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListEnvironmentProfilesOutput {
  items: Array<EnvironmentProfileSummary>;
  nextToken?: string;
}
export interface ListEnvironmentsInput {
  domainIdentifier: string;
  awsAccountId?: string;
  status?: EnvironmentStatus;
  awsAccountRegion?: string;
  projectIdentifier: string;
  environmentProfileIdentifier?: string;
  environmentBlueprintIdentifier?: string;
  provider?: string;
  name?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListEnvironmentsOutput {
  items: Array<EnvironmentSummary>;
  nextToken?: string;
}
export type ListingId = string;

interface _ListingItem {
  assetListing?: AssetListing;
  dataProductListing?: DataProductListing;
}

export type ListingItem =
  | (_ListingItem & { assetListing: AssetListing })
  | (_ListingItem & { dataProductListing: DataProductListing });
export type ListingName = string;

export interface ListingRevision {
  id: string;
  revision: string;
}
export interface ListingRevisionInput {
  identifier: string;
  revision: string;
}
export type ListingStatus = "CREATING" | "ACTIVE" | "INACTIVE";
export type ListingSummaries = Array<ListingSummary>;
export interface ListingSummary {
  listingId?: string;
  listingRevision?: string;
  glossaryTerms?: Array<DetailedGlossaryTerm>;
}
export interface ListingSummaryItem {
  listingId?: string;
  listingRevision?: string;
  glossaryTerms?: Array<DetailedGlossaryTerm>;
}
export type ListingSummaryItems = Array<ListingSummaryItem>;
export interface ListJobRunsInput {
  domainIdentifier: string;
  jobIdentifier: string;
  status?: JobRunStatus;
  sortOrder?: SortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface ListJobRunsOutput {
  items?: Array<JobRunSummary>;
  nextToken?: string;
}
export interface ListLineageEventsInput {
  domainIdentifier: string;
  maxResults?: number;
  timestampAfter?: Date | string;
  timestampBefore?: Date | string;
  processingStatus?: LineageEventProcessingStatus;
  sortOrder?: SortOrder;
  nextToken?: string;
}
export interface ListLineageEventsOutput {
  items?: Array<LineageEventSummary>;
  nextToken?: string;
}
export interface ListLineageNodeHistoryInput {
  domainIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  identifier: string;
  direction?: EdgeDirection;
  eventTimestampGTE?: Date | string;
  eventTimestampLTE?: Date | string;
  sortOrder?: SortOrder;
}
export interface ListLineageNodeHistoryOutput {
  nodes?: Array<LineageNodeSummary>;
  nextToken?: string;
}
export interface ListMetadataGenerationRunsInput {
  domainIdentifier: string;
  status?: MetadataGenerationRunStatus;
  type?: MetadataGenerationRunType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListMetadataGenerationRunsOutput {
  items?: Array<MetadataGenerationRunItem>;
  nextToken?: string;
}
export interface ListNotificationsInput {
  domainIdentifier: string;
  type: NotificationType;
  afterTimestamp?: Date | string;
  beforeTimestamp?: Date | string;
  subjects?: Array<string>;
  taskStatus?: TaskStatus;
  maxResults?: number;
  nextToken?: string;
}
export interface ListNotificationsOutput {
  notifications?: Array<NotificationOutput>;
  nextToken?: string;
}
export interface ListPolicyGrantsInput {
  domainIdentifier: string;
  entityType: TargetEntityType;
  entityIdentifier: string;
  policyType: ManagedPolicyType;
  maxResults?: number;
  nextToken?: string;
}
export interface ListPolicyGrantsOutput {
  grantList: Array<PolicyGrantMember>;
  nextToken?: string;
}
export interface ListProjectMembershipsInput {
  domainIdentifier: string;
  projectIdentifier: string;
  sortBy?: SortFieldProject;
  sortOrder?: SortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface ListProjectMembershipsOutput {
  members: Array<ProjectMember>;
  nextToken?: string;
}
export interface ListProjectProfilesInput {
  domainIdentifier: string;
  name?: string;
  sortBy?: SortFieldProject;
  sortOrder?: SortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface ListProjectProfilesOutput {
  items?: Array<ProjectProfileSummary>;
  nextToken?: string;
}
export interface ListProjectsInput {
  domainIdentifier: string;
  userIdentifier?: string;
  groupIdentifier?: string;
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListProjectsOutput {
  items?: Array<ProjectSummary>;
  nextToken?: string;
}
export interface ListRulesInput {
  domainIdentifier: string;
  targetType: RuleTargetType;
  targetIdentifier: string;
  ruleType?: RuleType;
  action?: RuleAction;
  projectIds?: Array<string>;
  assetTypes?: Array<string>;
  dataProduct?: boolean;
  includeCascaded?: boolean;
  maxResults?: number;
  nextToken?: string;
}
export interface ListRulesOutput {
  items: Array<RuleSummary>;
  nextToken?: string;
}
export interface ListSubscriptionGrantsInput {
  domainIdentifier: string;
  environmentId?: string;
  subscriptionTargetId?: string;
  subscribedListingId?: string;
  subscriptionId?: string;
  owningProjectId?: string;
  sortBy?: SortKey;
  sortOrder?: SortOrder;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSubscriptionGrantsOutput {
  items: Array<SubscriptionGrantSummary>;
  nextToken?: string;
}
export interface ListSubscriptionRequestsInput {
  domainIdentifier: string;
  status?: SubscriptionRequestStatus;
  subscribedListingId?: string;
  owningProjectId?: string;
  approverProjectId?: string;
  sortBy?: SortKey;
  sortOrder?: SortOrder;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSubscriptionRequestsOutput {
  items: Array<SubscriptionRequestSummary>;
  nextToken?: string;
}
export interface ListSubscriptionsInput {
  domainIdentifier: string;
  subscriptionRequestIdentifier?: string;
  status?: SubscriptionStatus;
  subscribedListingId?: string;
  owningProjectId?: string;
  approverProjectId?: string;
  sortBy?: SortKey;
  sortOrder?: SortOrder;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSubscriptionsOutput {
  items: Array<SubscriptionSummary>;
  nextToken?: string;
}
export interface ListSubscriptionTargetsInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  sortBy?: SortKey;
  sortOrder?: SortOrder;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSubscriptionTargetsOutput {
  items: Array<SubscriptionTargetSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListTimeSeriesDataPointsInput {
  domainIdentifier: string;
  entityIdentifier: string;
  entityType: TimeSeriesEntityType;
  formName: string;
  startedAt?: Date | string;
  endedAt?: Date | string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTimeSeriesDataPointsOutput {
  items?: Array<TimeSeriesDataPointSummaryFormOutput>;
  nextToken?: string;
}
export type LongDescription = string;

export type ManagedPolicyType =
  | "CREATE_DOMAIN_UNIT"
  | "OVERRIDE_DOMAIN_UNIT_OWNERS"
  | "ADD_TO_PROJECT_MEMBER_POOL"
  | "OVERRIDE_PROJECT_OWNERS"
  | "CREATE_GLOSSARY"
  | "CREATE_FORM_TYPE"
  | "CREATE_ASSET_TYPE"
  | "CREATE_PROJECT"
  | "CREATE_ENVIRONMENT_PROFILE"
  | "DELEGATE_CREATE_ENVIRONMENT_PROFILE"
  | "CREATE_ENVIRONMENT"
  | "CREATE_ENVIRONMENT_FROM_BLUEPRINT"
  | "CREATE_PROJECT_FROM_PROJECT_PROFILE"
  | "USE_ASSET_TYPE";
export type MatchCriteria = Array<string>;
export interface MatchOffset {
  startOffset?: number;
  endOffset?: number;
}
export type MatchOffsets = Array<MatchOffset>;
export type MatchRationale = Array<MatchRationaleItem>;
interface _MatchRationaleItem {
  textMatches?: Array<TextMatchItem>;
}

export type MatchRationaleItem = _MatchRationaleItem & {
  textMatches: Array<TextMatchItem>;
};
export type MaxResults = number;

export type MaxResultsForListDomains = number;

interface _Member {
  userIdentifier?: string;
  groupIdentifier?: string;
}

export type Member =
  | (_Member & { userIdentifier: string })
  | (_Member & { groupIdentifier: string });
interface _MemberDetails {
  user?: UserDetails;
  group?: GroupDetails;
}

export type MemberDetails =
  | (_MemberDetails & { user: UserDetails })
  | (_MemberDetails & { group: GroupDetails });
export type Message = string;

export interface MetadataFormEnforcementDetail {
  requiredMetadataForms?: Array<MetadataFormReference>;
}
export type MetadataFormInputs = Array<FormInput>;
export interface MetadataFormReference {
  typeIdentifier: string;
  typeRevision: string;
}
export type MetadataForms = Array<FormOutput>;
export type MetadataFormsSummary = Array<MetadataFormSummary>;
export interface MetadataFormSummary {
  formName?: string;
  typeName: string;
  typeRevision: string;
}
export type MetadataGenerationRunIdentifier = string;

export interface MetadataGenerationRunItem {
  domainId: string;
  id: string;
  target?: MetadataGenerationRunTarget;
  status?: MetadataGenerationRunStatus;
  type?: MetadataGenerationRunType;
  createdAt?: Date | string;
  createdBy?: string;
  owningProjectId: string;
}
export type MetadataGenerationRuns = Array<MetadataGenerationRunItem>;
export type MetadataGenerationRunStatus =
  | "SUBMITTED"
  | "IN_PROGRESS"
  | "CANCELED"
  | "SUCCEEDED"
  | "FAILED";
export interface MetadataGenerationRunTarget {
  type: MetadataGenerationTargetType;
  identifier: string;
  revision?: string;
}
export type MetadataGenerationRunType = "BUSINESS_DESCRIPTIONS";
export type MetadataGenerationTargetType = "ASSET";
export type MetadataMap = Record<string, string>;
interface _Model {
  smithy?: string;
}

export type Model = _Model & { smithy: string };
export type Name = string;

export interface NameIdentifier {
  name?: string;
  namespace?: string;
}
export type NameIdentifiers = Array<NameIdentifier>;
export interface NotEqualToExpression {
  columnName: string;
  value: string;
}
export interface NotificationOutput {
  identifier: string;
  domainIdentifier: string;
  type: NotificationType;
  topic: Topic;
  title: string;
  message: string;
  status?: TaskStatus;
  actionLink: string;
  creationTimestamp: Date | string;
  lastUpdatedTimestamp: Date | string;
  metadata?: Record<string, string>;
}
export interface NotificationResource {
  type: NotificationResourceType;
  id: string;
  name?: string;
}
export type NotificationResourceType = "PROJECT";
export type NotificationRole =
  | "PROJECT_OWNER"
  | "PROJECT_CONTRIBUTOR"
  | "PROJECT_VIEWER"
  | "DOMAIN_OWNER"
  | "PROJECT_SUBSCRIBER";
export type NotificationsList = Array<NotificationOutput>;
export type NotificationSubjects = Array<string>;
export type NotificationType = "TASK" | "EVENT";
export interface NotInExpression {
  columnName: string;
  values: Array<string>;
}
export interface NotLikeExpression {
  columnName: string;
  value: string;
}
export interface OAuth2ClientApplication {
  userManagedClientApplicationClientId?: string;
  aWSManagedClientApplicationReference?: string;
}
export type OAuth2GrantType =
  | "AUTHORIZATION_CODE"
  | "CLIENT_CREDENTIALS"
  | "JWT_BEARER";
export interface OAuth2Properties {
  oAuth2GrantType?: OAuth2GrantType;
  oAuth2ClientApplication?: OAuth2ClientApplication;
  tokenUrl?: string;
  tokenUrlParametersMap?: Record<string, string>;
  authorizationCodeProperties?: AuthorizationCodeProperties;
  oAuth2Credentials?: GlueOAuth2Credentials;
}
export interface OpenLineageRunEventSummary {
  eventType?: OpenLineageRunState;
  runId?: string;
  job?: NameIdentifier;
  inputs?: Array<NameIdentifier>;
  outputs?: Array<NameIdentifier>;
}
export type OpenLineageRunState =
  | "START"
  | "RUNNING"
  | "COMPLETE"
  | "ABORT"
  | "FAIL"
  | "OTHER";
export type OverallDeploymentStatus =
  | "PENDING_DEPLOYMENT"
  | "IN_PROGRESS"
  | "SUCCESSFUL"
  | "FAILED_VALIDATION"
  | "FAILED_DEPLOYMENT";
export interface OverrideDomainUnitOwnersPolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface OverrideProjectOwnersPolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface OwnerGroupProperties {
  groupIdentifier: string;
}
export interface OwnerGroupPropertiesOutput {
  groupId?: string;
}
interface _OwnerProperties {
  user?: OwnerUserProperties;
  group?: OwnerGroupProperties;
}

export type OwnerProperties =
  | (_OwnerProperties & { user: OwnerUserProperties })
  | (_OwnerProperties & { group: OwnerGroupProperties });
interface _OwnerPropertiesOutput {
  user?: OwnerUserPropertiesOutput;
  group?: OwnerGroupPropertiesOutput;
}

export type OwnerPropertiesOutput =
  | (_OwnerPropertiesOutput & { user: OwnerUserPropertiesOutput })
  | (_OwnerPropertiesOutput & { group: OwnerGroupPropertiesOutput });
export interface OwnerUserProperties {
  userIdentifier: string;
}
export interface OwnerUserPropertiesOutput {
  userId?: string;
}
export type PaginationToken = string;

export type ParameterStorePath = string;

export type Password = string;

export interface PhysicalConnectionRequirements {
  subnetId?: string;
  subnetIdList?: Array<string>;
  securityGroupIdList?: Array<string>;
  availabilityZone?: string;
}
export interface PhysicalEndpoint {
  awsLocation?: AwsLocation;
  glueConnectionName?: string;
  glueConnection?: GlueConnection;
  host?: string;
  port?: number;
  protocol?: Protocol;
  stage?: string;
}
export type PhysicalEndpoints = Array<PhysicalEndpoint>;
export type PolicyArn = string;

interface _PolicyGrantDetail {
  createDomainUnit?: CreateDomainUnitPolicyGrantDetail;
  overrideDomainUnitOwners?: OverrideDomainUnitOwnersPolicyGrantDetail;
  addToProjectMemberPool?: AddToProjectMemberPoolPolicyGrantDetail;
  overrideProjectOwners?: OverrideProjectOwnersPolicyGrantDetail;
  createGlossary?: CreateGlossaryPolicyGrantDetail;
  createFormType?: CreateFormTypePolicyGrantDetail;
  createAssetType?: CreateAssetTypePolicyGrantDetail;
  createProject?: CreateProjectPolicyGrantDetail;
  createEnvironmentProfile?: CreateEnvironmentProfilePolicyGrantDetail;
  delegateCreateEnvironmentProfile?: Unit;
  createEnvironment?: Unit;
  createEnvironmentFromBlueprint?: Unit;
  createProjectFromProjectProfile?: CreateProjectFromProjectProfilePolicyGrantDetail;
  useAssetType?: UseAssetTypePolicyGrantDetail;
}

export type PolicyGrantDetail =
  | (_PolicyGrantDetail & {
      createDomainUnit: CreateDomainUnitPolicyGrantDetail;
    })
  | (_PolicyGrantDetail & {
      overrideDomainUnitOwners: OverrideDomainUnitOwnersPolicyGrantDetail;
    })
  | (_PolicyGrantDetail & {
      addToProjectMemberPool: AddToProjectMemberPoolPolicyGrantDetail;
    })
  | (_PolicyGrantDetail & {
      overrideProjectOwners: OverrideProjectOwnersPolicyGrantDetail;
    })
  | (_PolicyGrantDetail & { createGlossary: CreateGlossaryPolicyGrantDetail })
  | (_PolicyGrantDetail & { createFormType: CreateFormTypePolicyGrantDetail })
  | (_PolicyGrantDetail & { createAssetType: CreateAssetTypePolicyGrantDetail })
  | (_PolicyGrantDetail & { createProject: CreateProjectPolicyGrantDetail })
  | (_PolicyGrantDetail & {
      createEnvironmentProfile: CreateEnvironmentProfilePolicyGrantDetail;
    })
  | (_PolicyGrantDetail & { delegateCreateEnvironmentProfile: Unit })
  | (_PolicyGrantDetail & { createEnvironment: Unit })
  | (_PolicyGrantDetail & { createEnvironmentFromBlueprint: Unit })
  | (_PolicyGrantDetail & {
      createProjectFromProjectProfile: CreateProjectFromProjectProfilePolicyGrantDetail;
    })
  | (_PolicyGrantDetail & { useAssetType: UseAssetTypePolicyGrantDetail });
export type PolicyGrantList = Array<PolicyGrantMember>;
export interface PolicyGrantMember {
  principal?: PolicyGrantPrincipal;
  detail?: PolicyGrantDetail;
  createdAt?: Date | string;
  createdBy?: string;
}
interface _PolicyGrantPrincipal {
  user?: UserPolicyGrantPrincipal;
  group?: GroupPolicyGrantPrincipal;
  project?: ProjectPolicyGrantPrincipal;
  domainUnit?: DomainUnitPolicyGrantPrincipal;
}

export type PolicyGrantPrincipal =
  | (_PolicyGrantPrincipal & { user: UserPolicyGrantPrincipal })
  | (_PolicyGrantPrincipal & { group: GroupPolicyGrantPrincipal })
  | (_PolicyGrantPrincipal & { project: ProjectPolicyGrantPrincipal })
  | (_PolicyGrantPrincipal & { domainUnit: DomainUnitPolicyGrantPrincipal });
export interface PostLineageEventInput {
  domainIdentifier: string;
  event: Uint8Array | string;
  clientToken?: string;
}
export interface PostLineageEventOutput {
  id?: string;
  domainId?: string;
}
export interface PostTimeSeriesDataPointsInput {
  domainIdentifier: string;
  entityIdentifier: string;
  entityType: TimeSeriesEntityType;
  forms: Array<TimeSeriesDataPointFormInput>;
  clientToken?: string;
}
export interface PostTimeSeriesDataPointsOutput {
  domainId?: string;
  entityId?: string;
  entityType?: TimeSeriesEntityType;
  forms?: Array<TimeSeriesDataPointFormOutput>;
}
export type PredictionChoices = Array<number>;
export interface PredictionConfiguration {
  businessNameGeneration?: BusinessNameGenerationConfiguration;
}
export interface ProjectDeletionError {
  code?: string;
  message?: string;
}
export type ProjectDesignation =
  | "OWNER"
  | "CONTRIBUTOR"
  | "PROJECT_CATALOG_STEWARD";
interface _ProjectGrantFilter {
  domainUnitFilter?: DomainUnitFilterForProject;
}

export type ProjectGrantFilter = _ProjectGrantFilter & {
  domainUnitFilter: DomainUnitFilterForProject;
};
export type ProjectId = string;

export type ProjectIds = Array<string>;
export interface ProjectMember {
  memberDetails: MemberDetails;
  designation: UserDesignation;
}
export type ProjectMembers = Array<ProjectMember>;
export type ProjectName = string;

export interface ProjectPolicyGrantPrincipal {
  projectDesignation: ProjectDesignation;
  projectIdentifier?: string;
  projectGrantFilter?: ProjectGrantFilter;
}
export type ProjectProfileId = string;

export type ProjectProfileList = Array<string>;
export type ProjectProfileName = string;

export type ProjectProfileSummaries = Array<ProjectProfileSummary>;
export interface ProjectProfileSummary {
  domainId: string;
  id: string;
  name: string;
  description?: string;
  status?: Status;
  createdBy: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  domainUnitId?: string;
}
export interface ProjectsForRule {
  selectionMode: RuleScopeSelectionMode;
  specificProjects?: Array<string>;
}
export type ProjectStatus =
  | "ACTIVE"
  | "DELETING"
  | "DELETE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED";
export type ProjectSummaries = Array<ProjectSummary>;
export interface ProjectSummary {
  domainId: string;
  id: string;
  name: string;
  description?: string;
  projectStatus?: ProjectStatus;
  failureReasons?: Array<ProjectDeletionError>;
  createdBy: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  domainUnitId?: string;
}
export type PropertyMap = Record<string, string>;
export type Protocol =
  | "ATHENA"
  | "GLUE_INTERACTIVE_SESSION"
  | "HTTPS"
  | "JDBC"
  | "LIVY"
  | "ODBC"
  | "PRISM";
interface _ProvisioningConfiguration {
  lakeFormationConfiguration?: LakeFormationConfiguration;
}

export type ProvisioningConfiguration = _ProvisioningConfiguration & {
  lakeFormationConfiguration: LakeFormationConfiguration;
};
export type ProvisioningConfigurationList = Array<ProvisioningConfiguration>;
interface _ProvisioningProperties {
  cloudFormation?: CloudFormationProperties;
}

export type ProvisioningProperties = _ProvisioningProperties & {
  cloudFormation: CloudFormationProperties;
};
export interface PutEnvironmentBlueprintConfigurationInput {
  domainIdentifier: string;
  environmentBlueprintIdentifier: string;
  provisioningRoleArn?: string;
  manageAccessRoleArn?: string;
  environmentRolePermissionBoundary?: string;
  enabledRegions: Array<string>;
  regionalParameters?: Record<string, Record<string, string>>;
  provisioningConfigurations?: Array<ProvisioningConfiguration>;
}
export interface PutEnvironmentBlueprintConfigurationOutput {
  domainId: string;
  environmentBlueprintId: string;
  provisioningRoleArn?: string;
  environmentRolePermissionBoundary?: string;
  manageAccessRoleArn?: string;
  enabledRegions?: Array<string>;
  regionalParameters?: Record<string, Record<string, string>>;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  provisioningConfigurations?: Array<ProvisioningConfiguration>;
}
export interface RecommendationConfiguration {
  enableBusinessNameGeneration?: boolean;
}
export interface RedshiftClusterStorage {
  clusterName: string;
}
export interface RedshiftCredentialConfiguration {
  secretManagerArn: string;
}
interface _RedshiftCredentials {
  secretArn?: string;
  usernamePassword?: UsernamePassword;
}

export type RedshiftCredentials =
  | (_RedshiftCredentials & { secretArn: string })
  | (_RedshiftCredentials & { usernamePassword: UsernamePassword });
export interface RedshiftLineageSyncConfigurationInput {
  enabled?: boolean;
  schedule?: LineageSyncSchedule;
}
export interface RedshiftLineageSyncConfigurationOutput {
  lineageJobId?: string;
  enabled?: boolean;
  schedule?: LineageSyncSchedule;
}
export interface RedshiftPropertiesInput {
  storage?: RedshiftStorageProperties;
  databaseName?: string;
  host?: string;
  port?: number;
  credentials?: RedshiftCredentials;
  lineageSync?: RedshiftLineageSyncConfigurationInput;
}
export interface RedshiftPropertiesOutput {
  storage?: RedshiftStorageProperties;
  credentials?: RedshiftCredentials;
  isProvisionedSecret?: boolean;
  jdbcIamUrl?: string;
  jdbcUrl?: string;
  redshiftTempDir?: string;
  lineageSync?: RedshiftLineageSyncConfigurationOutput;
  status?: ConnectionStatus;
  databaseName?: string;
}
export interface RedshiftPropertiesPatch {
  storage?: RedshiftStorageProperties;
  databaseName?: string;
  host?: string;
  port?: number;
  credentials?: RedshiftCredentials;
  lineageSync?: RedshiftLineageSyncConfigurationInput;
}
export interface RedshiftRunConfigurationInput {
  dataAccessRole?: string;
  relationalFilterConfigurations: Array<RelationalFilterConfiguration>;
  redshiftCredentialConfiguration?: RedshiftCredentialConfiguration;
  redshiftStorage?: RedshiftStorage;
}
export interface RedshiftRunConfigurationOutput {
  accountId?: string;
  region?: string;
  dataAccessRole?: string;
  relationalFilterConfigurations: Array<RelationalFilterConfiguration>;
  redshiftCredentialConfiguration?: RedshiftCredentialConfiguration;
  redshiftStorage: RedshiftStorage;
}
export interface RedshiftSelfGrantStatusOutput {
  selfGrantStatusDetails: Array<SelfGrantStatusDetail>;
}
export interface RedshiftServerlessStorage {
  workgroupName: string;
}
interface _RedshiftStorage {
  redshiftClusterSource?: RedshiftClusterStorage;
  redshiftServerlessSource?: RedshiftServerlessStorage;
}

export type RedshiftStorage =
  | (_RedshiftStorage & { redshiftClusterSource: RedshiftClusterStorage })
  | (_RedshiftStorage & {
      redshiftServerlessSource: RedshiftServerlessStorage;
    });
interface _RedshiftStorageProperties {
  clusterName?: string;
  workgroupName?: string;
}

export type RedshiftStorageProperties =
  | (_RedshiftStorageProperties & { clusterName: string })
  | (_RedshiftStorageProperties & { workgroupName: string });
interface _Region {
  regionName?: string;
  regionNamePath?: string;
}

export type Region =
  | (_Region & { regionName: string })
  | (_Region & { regionNamePath: string });
export type RegionalParameter = Record<string, string>;
export type RegionalParameterMap = Record<string, Record<string, string>>;
export type RegionName = string;

export interface RejectChoice {
  predictionTarget: string;
  predictionChoices?: Array<number>;
}
export type RejectChoices = Array<RejectChoice>;
export interface RejectPredictionsInput {
  domainIdentifier: string;
  identifier: string;
  revision?: string;
  rejectRule?: RejectRule;
  rejectChoices?: Array<RejectChoice>;
  clientToken?: string;
}
export interface RejectPredictionsOutput {
  domainId: string;
  assetId: string;
  assetRevision: string;
}
export interface RejectRule {
  rule?: RejectRuleBehavior;
  threshold?: number;
}
export type RejectRuleBehavior = "ALL" | "NONE";
export interface RejectSubscriptionRequestInput {
  domainIdentifier: string;
  identifier: string;
  decisionComment?: string;
}
export interface RejectSubscriptionRequestOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionRequestStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  requestReason: string;
  subscribedPrincipals: Array<SubscribedPrincipal>;
  subscribedListings: Array<SubscribedListing>;
  reviewerId?: string;
  decisionComment?: string;
  existingSubscriptionId?: string;
  metadataForms?: Array<FormOutput>;
}
export interface RelationalFilterConfiguration {
  databaseName: string;
  schemaName?: string;
  filterExpressions?: Array<FilterExpression>;
}
export type RelationalFilterConfigurations =
  Array<RelationalFilterConfiguration>;
export interface RemoveEntityOwnerInput {
  domainIdentifier: string;
  entityType: DataZoneEntityType;
  entityIdentifier: string;
  owner: OwnerProperties;
  clientToken?: string;
}
export interface RemoveEntityOwnerOutput {}
export interface RemovePolicyGrantInput {
  domainIdentifier: string;
  entityType: TargetEntityType;
  entityIdentifier: string;
  policyType: ManagedPolicyType;
  principal: PolicyGrantPrincipal;
  clientToken?: string;
}
export interface RemovePolicyGrantOutput {}
export type RequestReason = string;

export type RequiredMetadataFormList = Array<MetadataFormReference>;
export interface Resource {
  provider?: string;
  name?: string;
  value: string;
  type: string;
}
export type ResourceList = Array<Resource>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type Revision = string;

export type RevisionInput = string;

export interface RevokeSubscriptionInput {
  domainIdentifier: string;
  identifier: string;
  retainPermissions?: boolean;
}
export interface RevokeSubscriptionOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  subscribedPrincipal: SubscribedPrincipal;
  subscribedListing: SubscribedListing;
  subscriptionRequestId?: string;
  retainPermissions?: boolean;
}
export type RoleArn = string;

interface _RowFilter {
  expression?: RowFilterExpression;
  and?: Array<RowFilter>;
  or?: Array<RowFilter>;
}

export type RowFilter =
  | (_RowFilter & { expression: RowFilterExpression })
  | (_RowFilter & { and: Array<RowFilter> })
  | (_RowFilter & { or: Array<RowFilter> });
export interface RowFilterConfiguration {
  rowFilter: RowFilter;
  sensitive?: boolean;
}
interface _RowFilterExpression {
  equalTo?: EqualToExpression;
  notEqualTo?: NotEqualToExpression;
  greaterThan?: GreaterThanExpression;
  lessThan?: LessThanExpression;
  greaterThanOrEqualTo?: GreaterThanOrEqualToExpression;
  lessThanOrEqualTo?: LessThanOrEqualToExpression;
  isNull?: IsNullExpression;
  isNotNull?: IsNotNullExpression;
  in?: InExpression;
  notIn?: NotInExpression;
  like?: LikeExpression;
  notLike?: NotLikeExpression;
}

export type RowFilterExpression =
  | (_RowFilterExpression & { equalTo: EqualToExpression })
  | (_RowFilterExpression & { notEqualTo: NotEqualToExpression })
  | (_RowFilterExpression & { greaterThan: GreaterThanExpression })
  | (_RowFilterExpression & { lessThan: LessThanExpression })
  | (_RowFilterExpression & {
      greaterThanOrEqualTo: GreaterThanOrEqualToExpression;
    })
  | (_RowFilterExpression & { lessThanOrEqualTo: LessThanOrEqualToExpression })
  | (_RowFilterExpression & { isNull: IsNullExpression })
  | (_RowFilterExpression & { isNotNull: IsNotNullExpression })
  | (_RowFilterExpression & { in: InExpression })
  | (_RowFilterExpression & { notIn: NotInExpression })
  | (_RowFilterExpression & { like: LikeExpression })
  | (_RowFilterExpression & { notLike: NotLikeExpression });
export type RowFilterList = Array<RowFilter>;
export type RuleAction =
  | "CREATE_LISTING_CHANGE_SET"
  | "CREATE_SUBSCRIPTION_REQUEST";
export type RuleAssetTypeList = Array<string>;
interface _RuleDetail {
  metadataFormEnforcementDetail?: MetadataFormEnforcementDetail;
}

export type RuleDetail = _RuleDetail & {
  metadataFormEnforcementDetail: MetadataFormEnforcementDetail;
};
export type RuleId = string;

export type RuleName = string;

export type RuleProjectIdentifierList = Array<string>;
export interface RuleScope {
  assetType?: AssetTypesForRule;
  dataProduct?: boolean;
  project?: ProjectsForRule;
}
export type RuleScopeSelectionMode = "ALL" | "SPECIFIC";
export type RuleSummaries = Array<RuleSummary>;
export interface RuleSummary {
  identifier?: string;
  revision?: string;
  ruleType?: RuleType;
  name?: string;
  targetType?: RuleTargetType;
  target?: RuleTarget;
  action?: RuleAction;
  scope?: RuleScope;
  updatedAt?: Date | string;
  lastUpdatedBy?: string;
}
interface _RuleTarget {
  domainUnitTarget?: DomainUnitTarget;
}

export type RuleTarget = _RuleTarget & { domainUnitTarget: DomainUnitTarget };
export type RuleTargetType = "DOMAIN_UNIT";
export type RuleType = "METADATA_FORM_ENFORCEMENT";
export type RunIdentifier = string;

export interface RunStatisticsForAssets {
  added?: number;
  updated?: number;
  unchanged?: number;
  skipped?: number;
  failed?: number;
}
export type S3AccessGrantLocationId = string;

export type S3Location = string;

export type S3LocationList = Array<string>;
export interface S3PropertiesInput {
  s3Uri: string;
  s3AccessGrantLocationId?: string;
}
export interface S3PropertiesOutput {
  s3Uri: string;
  s3AccessGrantLocationId?: string;
  status?: ConnectionStatus;
  errorMessage?: string;
}
export interface S3PropertiesPatch {
  s3Uri: string;
  s3AccessGrantLocationId?: string;
}
export type S3Uri = string;

export type SageMakerAssetType = string;

export type SageMakerResourceArn = string;

export interface SageMakerRunConfigurationInput {
  trackingAssets: Record<string, Array<string>>;
}
export interface SageMakerRunConfigurationOutput {
  accountId?: string;
  region?: string;
  trackingAssets: Record<string, Array<string>>;
}
export interface ScheduleConfiguration {
  timezone?: Timezone;
  schedule?: string;
}
export interface SearchGroupProfilesInput {
  domainIdentifier: string;
  groupType: GroupSearchType;
  searchText?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface SearchGroupProfilesOutput {
  items?: Array<GroupProfileSummary>;
  nextToken?: string;
}
export interface SearchInItem {
  attribute: string;
}
export type SearchInList = Array<SearchInItem>;
export interface SearchInput {
  domainIdentifier: string;
  owningProjectIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
  searchScope: InventorySearchScope;
  searchText?: string;
  searchIn?: Array<SearchInItem>;
  filters?: FilterClause;
  sort?: SearchSort;
  additionalAttributes?: Array<SearchOutputAdditionalAttribute>;
}
interface _SearchInventoryResultItem {
  glossaryItem?: GlossaryItem;
  glossaryTermItem?: GlossaryTermItem;
  assetItem?: AssetItem;
  dataProductItem?: DataProductResultItem;
}

export type SearchInventoryResultItem =
  | (_SearchInventoryResultItem & { glossaryItem: GlossaryItem })
  | (_SearchInventoryResultItem & { glossaryTermItem: GlossaryTermItem })
  | (_SearchInventoryResultItem & { assetItem: AssetItem })
  | (_SearchInventoryResultItem & { dataProductItem: DataProductResultItem });
export type SearchInventoryResultItems = Array<SearchInventoryResultItem>;
export interface SearchListingsInput {
  domainIdentifier: string;
  searchText?: string;
  searchIn?: Array<SearchInItem>;
  maxResults?: number;
  nextToken?: string;
  filters?: FilterClause;
  aggregations?: Array<AggregationListItem>;
  sort?: SearchSort;
  additionalAttributes?: Array<SearchOutputAdditionalAttribute>;
}
export interface SearchListingsOutput {
  items?: Array<SearchResultItem>;
  nextToken?: string;
  totalMatchCount?: number;
  aggregates?: Array<AggregationOutput>;
}
export interface SearchOutput {
  items?: Array<SearchInventoryResultItem>;
  nextToken?: string;
  totalMatchCount?: number;
}
export type SearchOutputAdditionalAttribute =
  | "FORMS"
  | "TIME_SERIES_DATA_POINT_FORMS"
  | "TEXT_MATCH_RATIONALE";
export type SearchOutputAdditionalAttributes =
  Array<SearchOutputAdditionalAttribute>;
interface _SearchResultItem {
  assetListing?: AssetListingItem;
  dataProductListing?: DataProductListingItem;
}

export type SearchResultItem =
  | (_SearchResultItem & { assetListing: AssetListingItem })
  | (_SearchResultItem & { dataProductListing: DataProductListingItem });
export type SearchResultItems = Array<SearchResultItem>;
export interface SearchSort {
  attribute: string;
  order?: SortOrder;
}
export type SearchText = string;

export interface SearchTypesInput {
  domainIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  searchScope: TypesSearchScope;
  searchText?: string;
  searchIn?: Array<SearchInItem>;
  filters?: FilterClause;
  sort?: SearchSort;
  managed: boolean;
}
export interface SearchTypesOutput {
  items?: Array<SearchTypesResultItem>;
  nextToken?: string;
  totalMatchCount?: number;
}
interface _SearchTypesResultItem {
  assetTypeItem?: AssetTypeItem;
  formTypeItem?: FormTypeData;
  lineageNodeTypeItem?: LineageNodeTypeItem;
}

export type SearchTypesResultItem =
  | (_SearchTypesResultItem & { assetTypeItem: AssetTypeItem })
  | (_SearchTypesResultItem & { formTypeItem: FormTypeData })
  | (_SearchTypesResultItem & { lineageNodeTypeItem: LineageNodeTypeItem });
export type SearchTypesResultItems = Array<SearchTypesResultItem>;
export interface SearchUserProfilesInput {
  domainIdentifier: string;
  userType: UserSearchType;
  searchText?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface SearchUserProfilesOutput {
  items?: Array<UserProfileSummary>;
  nextToken?: string;
}
export type SecurityGroupIdList = Array<string>;
export type SelfGrantStatus =
  | "GRANT_PENDING"
  | "REVOKE_PENDING"
  | "GRANT_IN_PROGRESS"
  | "REVOKE_IN_PROGRESS"
  | "GRANTED"
  | "GRANT_FAILED"
  | "REVOKE_FAILED";
export interface SelfGrantStatusDetail {
  databaseName: string;
  schemaName?: string;
  status: SelfGrantStatus;
  failureCause?: string;
}
export type SelfGrantStatusDetails = Array<SelfGrantStatusDetail>;
interface _SelfGrantStatusOutput {
  glueSelfGrantStatus?: GlueSelfGrantStatusOutput;
  redshiftSelfGrantStatus?: RedshiftSelfGrantStatusOutput;
}

export type SelfGrantStatusOutput =
  | (_SelfGrantStatusOutput & {
      glueSelfGrantStatus: GlueSelfGrantStatusOutput;
    })
  | (_SelfGrantStatusOutput & {
      redshiftSelfGrantStatus: RedshiftSelfGrantStatusOutput;
    });
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type ShortDescription = string;

export interface SingleSignOn {
  type?: AuthType;
  userAssignment?: UserAssignment;
  idcInstanceArn?: string;
}
export type Smithy = string;

export type SortFieldConnection = "NAME";
export type SortFieldProject = "NAME";
export type SortKey = "CREATED_AT" | "UPDATED_AT";
export type SortOrder = "ASCENDING" | "DESCENDING";
export interface SparkEmrPropertiesInput {
  computeArn?: string;
  instanceProfileArn?: string;
  javaVirtualEnv?: string;
  logUri?: string;
  pythonVirtualEnv?: string;
  runtimeRole?: string;
  trustedCertificatesS3Uri?: string;
}
export interface SparkEmrPropertiesOutput {
  computeArn?: string;
  credentials?: UsernamePassword;
  credentialsExpiration?: Date | string;
  governanceType?: GovernanceType;
  instanceProfileArn?: string;
  javaVirtualEnv?: string;
  livyEndpoint?: string;
  logUri?: string;
  pythonVirtualEnv?: string;
  runtimeRole?: string;
  trustedCertificatesS3Uri?: string;
}
export interface SparkEmrPropertiesPatch {
  computeArn?: string;
  instanceProfileArn?: string;
  javaVirtualEnv?: string;
  logUri?: string;
  pythonVirtualEnv?: string;
  runtimeRole?: string;
  trustedCertificatesS3Uri?: string;
}
export interface SparkGlueArgs {
  connection?: string;
}
export interface SparkGluePropertiesInput {
  additionalArgs?: SparkGlueArgs;
  glueConnectionName?: string;
  glueVersion?: string;
  idleTimeout?: number;
  javaVirtualEnv?: string;
  numberOfWorkers?: number;
  pythonVirtualEnv?: string;
  workerType?: string;
}
export interface SparkGluePropertiesOutput {
  additionalArgs?: SparkGlueArgs;
  glueConnectionName?: string;
  glueVersion?: string;
  idleTimeout?: number;
  javaVirtualEnv?: string;
  numberOfWorkers?: number;
  pythonVirtualEnv?: string;
  workerType?: string;
}
export interface SsoUserProfileDetails {
  username?: string;
  firstName?: string;
  lastName?: string;
}
export interface StartDataSourceRunInput {
  domainIdentifier: string;
  dataSourceIdentifier: string;
  clientToken?: string;
}
export interface StartDataSourceRunOutput {
  domainId: string;
  dataSourceId: string;
  id: string;
  projectId: string;
  status: DataSourceRunStatus;
  type: DataSourceRunType;
  dataSourceConfigurationSnapshot?: string;
  runStatisticsForAssets?: RunStatisticsForAssets;
  errorMessage?: DataSourceErrorMessage;
  createdAt: Date | string;
  updatedAt: Date | string;
  startedAt?: Date | string;
  stoppedAt?: Date | string;
}
export interface StartMetadataGenerationRunInput {
  domainIdentifier: string;
  type: MetadataGenerationRunType;
  target: MetadataGenerationRunTarget;
  clientToken?: string;
  owningProjectIdentifier: string;
}
export interface StartMetadataGenerationRunOutput {
  domainId: string;
  id: string;
  status?: MetadataGenerationRunStatus;
  type?: MetadataGenerationRunType;
  createdAt?: Date | string;
  createdBy?: string;
  owningProjectId?: string;
}
export type Status = "ENABLED" | "DISABLED";
export type StringList = Array<string>;
export type SubnetId = string;

export type SubnetIdList = Array<string>;
export interface SubscribedAsset {
  assetId: string;
  assetRevision: string;
  status: SubscriptionGrantStatus;
  targetName?: string;
  failureCause?: FailureCause;
  grantedTimestamp?: Date | string;
  failureTimestamp?: Date | string;
  assetScope?: AssetScope;
}
export interface SubscribedAssetListing {
  entityId?: string;
  entityRevision?: string;
  entityType?: string;
  forms?: string;
  glossaryTerms?: Array<DetailedGlossaryTerm>;
  assetScope?: AssetScope;
}
export type SubscribedAssets = Array<SubscribedAsset>;
export interface SubscribedListing {
  id: string;
  revision?: string;
  name: string;
  description: string;
  item: SubscribedListingItem;
  ownerProjectId: string;
  ownerProjectName?: string;
}
export interface SubscribedListingInput {
  identifier: string;
}
export type SubscribedListingInputs = Array<SubscribedListingInput>;
interface _SubscribedListingItem {
  assetListing?: SubscribedAssetListing;
  productListing?: SubscribedProductListing;
}

export type SubscribedListingItem =
  | (_SubscribedListingItem & { assetListing: SubscribedAssetListing })
  | (_SubscribedListingItem & { productListing: SubscribedProductListing });
export type SubscribedListings = Array<SubscribedListing>;
interface _SubscribedPrincipal {
  project?: SubscribedProject;
}

export type SubscribedPrincipal = _SubscribedPrincipal & {
  project: SubscribedProject;
};
interface _SubscribedPrincipalInput {
  project?: SubscribedProjectInput;
}

export type SubscribedPrincipalInput = _SubscribedPrincipalInput & {
  project: SubscribedProjectInput;
};
export type SubscribedPrincipalInputs = Array<SubscribedPrincipalInput>;
export type SubscribedPrincipals = Array<SubscribedPrincipal>;
export interface SubscribedProductListing {
  entityId?: string;
  entityRevision?: string;
  glossaryTerms?: Array<DetailedGlossaryTerm>;
  name?: string;
  description?: string;
  assetListings?: Array<AssetInDataProductListingItem>;
}
export interface SubscribedProject {
  id?: string;
  name?: string;
}
export interface SubscribedProjectInput {
  identifier?: string;
}
export type SubscriptionGrantId = string;

export type SubscriptionGrantOverallStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "GRANT_FAILED"
  | "REVOKE_FAILED"
  | "GRANT_AND_REVOKE_FAILED"
  | "COMPLETED"
  | "INACCESSIBLE";
export type SubscriptionGrants = Array<SubscriptionGrantSummary>;
export type SubscriptionGrantStatus =
  | "GRANT_PENDING"
  | "REVOKE_PENDING"
  | "GRANT_IN_PROGRESS"
  | "REVOKE_IN_PROGRESS"
  | "GRANTED"
  | "REVOKED"
  | "GRANT_FAILED"
  | "REVOKE_FAILED";
export interface SubscriptionGrantSummary {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  subscriptionTargetId: string;
  grantedEntity: GrantedEntity;
  status: SubscriptionGrantOverallStatus;
  assets?: Array<SubscribedAsset>;
  subscriptionId?: string;
}
export type SubscriptionId = string;

export type SubscriptionRequestId = string;

export type SubscriptionRequests = Array<SubscriptionRequestSummary>;
export type SubscriptionRequestStatus = "PENDING" | "ACCEPTED" | "REJECTED";
export interface SubscriptionRequestSummary {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionRequestStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  requestReason: string;
  subscribedPrincipals: Array<SubscribedPrincipal>;
  subscribedListings: Array<SubscribedListing>;
  reviewerId?: string;
  decisionComment?: string;
  existingSubscriptionId?: string;
  metadataFormsSummary?: Array<MetadataFormSummary>;
}
export type Subscriptions = Array<SubscriptionSummary>;
export type SubscriptionStatus = "APPROVED" | "REVOKED" | "CANCELLED";
export interface SubscriptionSummary {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  subscribedPrincipal: SubscribedPrincipal;
  subscribedListing: SubscribedListing;
  subscriptionRequestId?: string;
  retainPermissions?: boolean;
}
export interface SubscriptionTargetForm {
  formName: string;
  content: string;
}
export type SubscriptionTargetForms = Array<SubscriptionTargetForm>;
export type SubscriptionTargetId = string;

export type SubscriptionTargetName = string;

export type SubscriptionTargets = Array<SubscriptionTargetSummary>;
export interface SubscriptionTargetSummary {
  id: string;
  authorizedPrincipals: Array<string>;
  domainId: string;
  projectId: string;
  environmentId: string;
  name: string;
  type: string;
  createdBy: string;
  updatedBy?: string;
  createdAt: Date | string;
  updatedAt?: Date | string;
  manageAccessRole?: string;
  applicableAssetTypes: Array<string>;
  subscriptionTargetConfig: Array<SubscriptionTargetForm>;
  provider: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagValue = string;

export type TargetEntityType =
  | "DOMAIN_UNIT"
  | "ENVIRONMENT_BLUEPRINT_CONFIGURATION"
  | "ENVIRONMENT_PROFILE"
  | "ASSET_TYPE";
export type TaskId = string;

export type TaskStatus = "ACTIVE" | "INACTIVE";
export interface TermRelations {
  isA?: Array<string>;
  classifies?: Array<string>;
}
export type TextMatches = Array<TextMatchItem>;
export interface TextMatchItem {
  attribute?: string;
  text?: string;
  matchOffsets?: Array<MatchOffset>;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface TimeSeriesDataPointFormInput {
  formName: string;
  typeIdentifier: string;
  typeRevision?: string;
  timestamp: Date | string;
  content?: string;
}
export type TimeSeriesDataPointFormInputList =
  Array<TimeSeriesDataPointFormInput>;
export interface TimeSeriesDataPointFormOutput {
  formName: string;
  typeIdentifier: string;
  typeRevision?: string;
  timestamp: Date | string;
  content?: string;
  id?: string;
}
export type TimeSeriesDataPointFormOutputList =
  Array<TimeSeriesDataPointFormOutput>;
export type TimeSeriesDataPointIdentifier = string;

export interface TimeSeriesDataPointSummaryFormOutput {
  formName: string;
  typeIdentifier: string;
  typeRevision?: string;
  timestamp: Date | string;
  contentSummary?: string;
  id?: string;
}
export type TimeSeriesDataPointSummaryFormOutputList =
  Array<TimeSeriesDataPointSummaryFormOutput>;
export type TimeSeriesEntityType = "ASSET" | "LISTING";
export type TimeSeriesFormName = string;

export type Timezone =
  | "UTC"
  | "AFRICA_JOHANNESBURG"
  | "AMERICA_MONTREAL"
  | "AMERICA_SAO_PAULO"
  | "ASIA_BAHRAIN"
  | "ASIA_BANGKOK"
  | "ASIA_CALCUTTA"
  | "ASIA_DUBAI"
  | "ASIA_HONG_KONG"
  | "ASIA_JAKARTA"
  | "ASIA_KUALA_LUMPUR"
  | "ASIA_SEOUL"
  | "ASIA_SHANGHAI"
  | "ASIA_SINGAPORE"
  | "ASIA_TAIPEI"
  | "ASIA_TOKYO"
  | "AUSTRALIA_MELBOURNE"
  | "AUSTRALIA_SYDNEY"
  | "CANADA_CENTRAL"
  | "CET"
  | "CST6CDT"
  | "ETC_GMT"
  | "ETC_GMT0"
  | "ETC_GMT_ADD_0"
  | "ETC_GMT_ADD_1"
  | "ETC_GMT_ADD_10"
  | "ETC_GMT_ADD_11"
  | "ETC_GMT_ADD_12"
  | "ETC_GMT_ADD_2"
  | "ETC_GMT_ADD_3"
  | "ETC_GMT_ADD_4"
  | "ETC_GMT_ADD_5"
  | "ETC_GMT_ADD_6"
  | "ETC_GMT_ADD_7"
  | "ETC_GMT_ADD_8"
  | "ETC_GMT_ADD_9"
  | "ETC_GMT_NEG_0"
  | "ETC_GMT_NEG_1"
  | "ETC_GMT_NEG_10"
  | "ETC_GMT_NEG_11"
  | "ETC_GMT_NEG_12"
  | "ETC_GMT_NEG_13"
  | "ETC_GMT_NEG_14"
  | "ETC_GMT_NEG_2"
  | "ETC_GMT_NEG_3"
  | "ETC_GMT_NEG_4"
  | "ETC_GMT_NEG_5"
  | "ETC_GMT_NEG_6"
  | "ETC_GMT_NEG_7"
  | "ETC_GMT_NEG_8"
  | "ETC_GMT_NEG_9"
  | "EUROPE_DUBLIN"
  | "EUROPE_LONDON"
  | "EUROPE_PARIS"
  | "EUROPE_STOCKHOLM"
  | "EUROPE_ZURICH"
  | "ISRAEL"
  | "MEXICO_GENERAL"
  | "MST7MDT"
  | "PACIFIC_AUCKLAND"
  | "US_CENTRAL"
  | "US_EASTERN"
  | "US_MOUNTAIN"
  | "US_PACIFIC";
export type Title = string;

export type TokenUrlParametersMap = Record<string, string>;
export interface Topic {
  subject: string;
  resource: NotificationResource;
  role: NotificationRole;
}
export type TrackingAssetArns = Array<string>;
export type TrackingAssets = Record<string, Array<string>>;
export type TypeName = string;

export type TypesSearchScope = "ASSET_TYPE" | "FORM_TYPE" | "LINEAGE_NODE_TYPE";
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message: string;
}> {}
export interface Unit {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAssetFilterInput {
  domainIdentifier: string;
  assetIdentifier: string;
  identifier: string;
  name?: string;
  description?: string;
  configuration?: AssetFilterConfiguration;
}
export interface UpdateAssetFilterOutput {
  id: string;
  domainId: string;
  assetId: string;
  name: string;
  description?: string;
  status?: FilterStatus;
  configuration: AssetFilterConfiguration;
  createdAt?: Date | string;
  errorMessage?: string;
  effectiveColumnNames?: Array<string>;
  effectiveRowFilter?: string;
}
export interface UpdateConnectionInput {
  domainIdentifier: string;
  identifier: string;
  description?: string;
  awsLocation?: AwsLocation;
  props?: ConnectionPropertiesPatch;
}
export interface UpdateConnectionOutput {
  connectionId: string;
  description?: string;
  domainId: string;
  domainUnitId: string;
  environmentId?: string;
  name: string;
  physicalEndpoints: Array<PhysicalEndpoint>;
  projectId?: string;
  props?: ConnectionPropertiesOutput;
  type: ConnectionType;
}
export type UpdatedAt = Date | string;

export interface UpdateDataSourceInput {
  domainIdentifier: string;
  identifier: string;
  name?: string;
  description?: string;
  enableSetting?: EnableSetting;
  publishOnImport?: boolean;
  assetFormsInput?: Array<FormInput>;
  schedule?: ScheduleConfiguration;
  configuration?: DataSourceConfigurationInput;
  recommendation?: RecommendationConfiguration;
  retainPermissionsOnRevokeFailure?: boolean;
}
export interface UpdateDataSourceOutput {
  id: string;
  status?: DataSourceStatus;
  type?: string;
  name: string;
  description?: string;
  domainId: string;
  projectId: string;
  environmentId?: string;
  connectionId?: string;
  configuration?: DataSourceConfigurationOutput;
  recommendation?: RecommendationConfiguration;
  enableSetting?: EnableSetting;
  publishOnImport?: boolean;
  assetFormsOutput?: Array<FormOutput>;
  schedule?: ScheduleConfiguration;
  lastRunStatus?: DataSourceRunStatus;
  lastRunAt?: Date | string;
  lastRunErrorMessage?: DataSourceErrorMessage;
  errorMessage?: DataSourceErrorMessage;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  selfGrantStatus?: SelfGrantStatusOutput;
  retainPermissionsOnRevokeFailure?: boolean;
}
export type UpdatedBy = string;

export interface UpdateDomainInput {
  identifier: string;
  description?: string;
  singleSignOn?: SingleSignOn;
  domainExecutionRole?: string;
  serviceRole?: string;
  name?: string;
  clientToken?: string;
}
export interface UpdateDomainOutput {
  id: string;
  rootDomainUnitId?: string;
  description?: string;
  singleSignOn?: SingleSignOn;
  domainExecutionRole?: string;
  serviceRole?: string;
  name?: string;
  lastUpdatedAt?: Date | string;
}
export interface UpdateDomainUnitInput {
  domainIdentifier: string;
  identifier: string;
  description?: string;
  name?: string;
}
export interface UpdateDomainUnitOutput {
  id: string;
  domainId: string;
  name: string;
  owners: Array<DomainUnitOwnerProperties>;
  description?: string;
  parentDomainUnitId?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  createdBy?: string;
  lastUpdatedBy?: string;
}
export interface UpdateEnvironmentActionInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  identifier: string;
  parameters?: ActionParameters;
  name?: string;
  description?: string;
}
export interface UpdateEnvironmentActionOutput {
  domainId: string;
  environmentId: string;
  id: string;
  name: string;
  parameters: ActionParameters;
  description?: string;
}
export interface UpdateEnvironmentInput {
  domainIdentifier: string;
  identifier: string;
  name?: string;
  description?: string;
  glossaryTerms?: Array<string>;
  blueprintVersion?: string;
  userParameters?: Array<EnvironmentParameter>;
}
export interface UpdateEnvironmentOutput {
  projectId: string;
  id?: string;
  domainId: string;
  createdBy: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description?: string;
  environmentProfileId?: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  provider: string;
  provisionedResources?: Array<Resource>;
  status?: EnvironmentStatus;
  environmentActions?: Array<ConfigurableEnvironmentAction>;
  glossaryTerms?: Array<string>;
  userParameters?: Array<CustomParameter>;
  lastDeployment?: Deployment;
  provisioningProperties?: ProvisioningProperties;
  deploymentProperties?: DeploymentProperties;
  environmentBlueprintId?: string;
  environmentConfigurationId?: string;
}
export interface UpdateEnvironmentProfileInput {
  domainIdentifier: string;
  identifier: string;
  name?: string;
  description?: string;
  userParameters?: Array<EnvironmentParameter>;
  awsAccountId?: string;
  awsAccountRegion?: string;
}
export interface UpdateEnvironmentProfileOutput {
  id: string;
  domainId: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  createdBy: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description?: string;
  environmentBlueprintId: string;
  projectId?: string;
  userParameters?: Array<CustomParameter>;
}
export interface UpdateGlossaryInput {
  domainIdentifier: string;
  identifier: string;
  name?: string;
  description?: string;
  status?: GlossaryStatus;
  clientToken?: string;
}
export interface UpdateGlossaryOutput {
  domainId: string;
  id: string;
  name: string;
  owningProjectId: string;
  description?: string;
  status?: GlossaryStatus;
}
export interface UpdateGlossaryTermInput {
  domainIdentifier: string;
  glossaryIdentifier?: string;
  identifier: string;
  name?: string;
  shortDescription?: string;
  longDescription?: string;
  termRelations?: TermRelations;
  status?: GlossaryTermStatus;
}
export interface UpdateGlossaryTermOutput {
  id: string;
  domainId: string;
  glossaryId: string;
  name: string;
  status: GlossaryTermStatus;
  shortDescription?: string;
  longDescription?: string;
  termRelations?: TermRelations;
}
export interface UpdateGroupProfileInput {
  domainIdentifier: string;
  groupIdentifier: string;
  status: GroupProfileStatus;
}
export interface UpdateGroupProfileOutput {
  domainId?: string;
  id?: string;
  status?: GroupProfileStatus;
  groupName?: string;
}
export interface UpdateProjectInput {
  domainIdentifier: string;
  identifier: string;
  name?: string;
  description?: string;
  glossaryTerms?: Array<string>;
  domainUnitId?: string;
  environmentDeploymentDetails?: EnvironmentDeploymentDetails;
  userParameters?: Array<EnvironmentConfigurationUserParameter>;
  projectProfileVersion?: string;
}
export interface UpdateProjectOutput {
  domainId: string;
  id: string;
  name: string;
  description?: string;
  projectStatus?: ProjectStatus;
  failureReasons?: Array<ProjectDeletionError>;
  createdBy: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  glossaryTerms?: Array<string>;
  domainUnitId?: string;
  projectProfileId?: string;
  userParameters?: Array<EnvironmentConfigurationUserParameter>;
  environmentDeploymentDetails?: EnvironmentDeploymentDetails;
}
export interface UpdateProjectProfileInput {
  domainIdentifier: string;
  identifier: string;
  name?: string;
  description?: string;
  status?: Status;
  environmentConfigurations?: Array<EnvironmentConfiguration>;
  domainUnitIdentifier?: string;
}
export interface UpdateProjectProfileOutput {
  domainId: string;
  id: string;
  name: string;
  description?: string;
  status?: Status;
  environmentConfigurations?: Array<EnvironmentConfiguration>;
  createdBy: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  domainUnitId?: string;
}
export interface UpdateRuleInput {
  domainIdentifier: string;
  identifier: string;
  name?: string;
  description?: string;
  scope?: RuleScope;
  detail?: RuleDetail;
  includeChildDomainUnits?: boolean;
}
export interface UpdateRuleOutput {
  identifier: string;
  revision: string;
  name: string;
  ruleType: RuleType;
  target: RuleTarget;
  action: RuleAction;
  scope: RuleScope;
  detail: RuleDetail;
  description?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  createdBy: string;
  lastUpdatedBy: string;
}
export interface UpdateSubscriptionGrantStatusInput {
  domainIdentifier: string;
  identifier: string;
  assetIdentifier: string;
  status: SubscriptionGrantStatus;
  failureCause?: FailureCause;
  targetName?: string;
}
export interface UpdateSubscriptionGrantStatusOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  subscriptionTargetId: string;
  grantedEntity: GrantedEntity;
  status: SubscriptionGrantOverallStatus;
  assets?: Array<SubscribedAsset>;
  subscriptionId?: string;
}
export interface UpdateSubscriptionRequestInput {
  domainIdentifier: string;
  identifier: string;
  requestReason: string;
}
export interface UpdateSubscriptionRequestOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionRequestStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  requestReason: string;
  subscribedPrincipals: Array<SubscribedPrincipal>;
  subscribedListings: Array<SubscribedListing>;
  reviewerId?: string;
  decisionComment?: string;
  existingSubscriptionId?: string;
  metadataForms?: Array<FormOutput>;
}
export interface UpdateSubscriptionTargetInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  identifier: string;
  name?: string;
  authorizedPrincipals?: Array<string>;
  applicableAssetTypes?: Array<string>;
  subscriptionTargetConfig?: Array<SubscriptionTargetForm>;
  manageAccessRole?: string;
  provider?: string;
}
export interface UpdateSubscriptionTargetOutput {
  id: string;
  authorizedPrincipals: Array<string>;
  domainId: string;
  projectId: string;
  environmentId: string;
  name: string;
  type: string;
  createdBy: string;
  updatedBy?: string;
  createdAt: Date | string;
  updatedAt?: Date | string;
  manageAccessRole?: string;
  applicableAssetTypes: Array<string>;
  subscriptionTargetConfig: Array<SubscriptionTargetForm>;
  provider: string;
}
export interface UpdateUserProfileInput {
  domainIdentifier: string;
  userIdentifier: string;
  type?: UserProfileType;
  status: UserProfileStatus;
}
export interface UpdateUserProfileOutput {
  domainId?: string;
  id?: string;
  type?: UserProfileType;
  status?: UserProfileStatus;
  details?: UserProfileDetails;
}
export interface UseAssetTypePolicyGrantDetail {
  domainUnitId?: string;
}
export type UserAssignment = "AUTOMATIC" | "MANUAL";
export type UserDesignation =
  | "PROJECT_OWNER"
  | "PROJECT_CONTRIBUTOR"
  | "PROJECT_CATALOG_VIEWER"
  | "PROJECT_CATALOG_CONSUMER"
  | "PROJECT_CATALOG_STEWARD";
export interface UserDetails {
  userId: string;
}
export type UserIdentifier = string;

export type Username = string;

export interface UsernamePassword {
  password: string;
  username: string;
}
interface _UserPolicyGrantPrincipal {
  userIdentifier?: string;
  allUsersGrantFilter?: AllUsersGrantFilter;
}

export type UserPolicyGrantPrincipal =
  | (_UserPolicyGrantPrincipal & { userIdentifier: string })
  | (_UserPolicyGrantPrincipal & { allUsersGrantFilter: AllUsersGrantFilter });
interface _UserProfileDetails {
  iam?: IamUserProfileDetails;
  sso?: SsoUserProfileDetails;
}

export type UserProfileDetails =
  | (_UserProfileDetails & { iam: IamUserProfileDetails })
  | (_UserProfileDetails & { sso: SsoUserProfileDetails });
export type UserProfileId = string;

export type UserProfileName = string;

export type UserProfileStatus =
  | "ASSIGNED"
  | "NOT_ASSIGNED"
  | "ACTIVATED"
  | "DEACTIVATED";
export type UserProfileSummaries = Array<UserProfileSummary>;
export interface UserProfileSummary {
  domainId?: string;
  id?: string;
  type?: UserProfileType;
  status?: UserProfileStatus;
  details?: UserProfileDetails;
}
export type UserProfileType = "IAM" | "SSO";
export type UserSearchText = string;

export type UserSearchType =
  | "SSO_USER"
  | "DATAZONE_USER"
  | "DATAZONE_SSO_USER"
  | "DATAZONE_IAM_USER";
export type UserType = "IAM_USER" | "IAM_ROLE" | "SSO_USER";
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export declare namespace AcceptPredictions {
  export type Input = AcceptPredictionsInput;
  export type Output = AcceptPredictionsOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AcceptSubscriptionRequest {
  export type Input = AcceptSubscriptionRequestInput;
  export type Output = AcceptSubscriptionRequestOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AddEntityOwner {
  export type Input = AddEntityOwnerInput;
  export type Output = AddEntityOwnerOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AddPolicyGrant {
  export type Input = AddPolicyGrantInput;
  export type Output = AddPolicyGrantOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateEnvironmentRole {
  export type Input = AssociateEnvironmentRoleInput;
  export type Output = AssociateEnvironmentRoleOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelSubscription {
  export type Input = CancelSubscriptionInput;
  export type Output = CancelSubscriptionOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAssetFilter {
  export type Input = CreateAssetFilterInput;
  export type Output = CreateAssetFilterOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateConnection {
  export type Input = CreateConnectionInput;
  export type Output = CreateConnectionOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateEnvironment {
  export type Input = CreateEnvironmentInput;
  export type Output = CreateEnvironmentOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateEnvironmentAction {
  export type Input = CreateEnvironmentActionInput;
  export type Output = CreateEnvironmentActionOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateEnvironmentProfile {
  export type Input = CreateEnvironmentProfileInput;
  export type Output = CreateEnvironmentProfileOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGroupProfile {
  export type Input = CreateGroupProfileInput;
  export type Output = CreateGroupProfileOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateListingChangeSet {
  export type Input = CreateListingChangeSetInput;
  export type Output = CreateListingChangeSetOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateProject {
  export type Input = CreateProjectInput;
  export type Output = CreateProjectOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateProjectMembership {
  export type Input = CreateProjectMembershipInput;
  export type Output = CreateProjectMembershipOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateProjectProfile {
  export type Input = CreateProjectProfileInput;
  export type Output = CreateProjectProfileOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSubscriptionGrant {
  export type Input = CreateSubscriptionGrantInput;
  export type Output = CreateSubscriptionGrantOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSubscriptionRequest {
  export type Input = CreateSubscriptionRequestInput;
  export type Output = CreateSubscriptionRequestOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSubscriptionTarget {
  export type Input = CreateSubscriptionTargetInput;
  export type Output = CreateSubscriptionTargetOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateUserProfile {
  export type Input = CreateUserProfileInput;
  export type Output = CreateUserProfileOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAssetFilter {
  export type Input = DeleteAssetFilterInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConnection {
  export type Input = DeleteConnectionInput;
  export type Output = DeleteConnectionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEnvironment {
  export type Input = DeleteEnvironmentInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEnvironmentAction {
  export type Input = DeleteEnvironmentActionInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEnvironmentProfile {
  export type Input = DeleteEnvironmentProfileInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProject {
  export type Input = DeleteProjectInput;
  export type Output = DeleteProjectOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProjectMembership {
  export type Input = DeleteProjectMembershipInput;
  export type Output = DeleteProjectMembershipOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProjectProfile {
  export type Input = DeleteProjectProfileInput;
  export type Output = DeleteProjectProfileOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSubscriptionGrant {
  export type Input = DeleteSubscriptionGrantInput;
  export type Output = DeleteSubscriptionGrantOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSubscriptionRequest {
  export type Input = DeleteSubscriptionRequestInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSubscriptionTarget {
  export type Input = DeleteSubscriptionTargetInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTimeSeriesDataPoints {
  export type Input = DeleteTimeSeriesDataPointsInput;
  export type Output = DeleteTimeSeriesDataPointsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateEnvironmentRole {
  export type Input = DisassociateEnvironmentRoleInput;
  export type Output = DisassociateEnvironmentRoleOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAssetFilter {
  export type Input = GetAssetFilterInput;
  export type Output = GetAssetFilterOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConnection {
  export type Input = GetConnectionInput;
  export type Output = GetConnectionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnvironment {
  export type Input = GetEnvironmentInput;
  export type Output = GetEnvironmentOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnvironmentAction {
  export type Input = GetEnvironmentActionInput;
  export type Output = GetEnvironmentActionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnvironmentBlueprint {
  export type Input = GetEnvironmentBlueprintInput;
  export type Output = GetEnvironmentBlueprintOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnvironmentCredentials {
  export type Input = GetEnvironmentCredentialsInput;
  export type Output = GetEnvironmentCredentialsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnvironmentProfile {
  export type Input = GetEnvironmentProfileInput;
  export type Output = GetEnvironmentProfileOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGroupProfile {
  export type Input = GetGroupProfileInput;
  export type Output = GetGroupProfileOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIamPortalLoginUrl {
  export type Input = GetIamPortalLoginUrlInput;
  export type Output = GetIamPortalLoginUrlOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetJobRun {
  export type Input = GetJobRunInput;
  export type Output = GetJobRunOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLineageEvent {
  export type Input = GetLineageEventInput;
  export type Output = GetLineageEventOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLineageNode {
  export type Input = GetLineageNodeInput;
  export type Output = GetLineageNodeOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProject {
  export type Input = GetProjectInput;
  export type Output = GetProjectOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProjectProfile {
  export type Input = GetProjectProfileInput;
  export type Output = GetProjectProfileOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSubscription {
  export type Input = GetSubscriptionInput;
  export type Output = GetSubscriptionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSubscriptionGrant {
  export type Input = GetSubscriptionGrantInput;
  export type Output = GetSubscriptionGrantOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSubscriptionRequestDetails {
  export type Input = GetSubscriptionRequestDetailsInput;
  export type Output = GetSubscriptionRequestDetailsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSubscriptionTarget {
  export type Input = GetSubscriptionTargetInput;
  export type Output = GetSubscriptionTargetOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTimeSeriesDataPoint {
  export type Input = GetTimeSeriesDataPointInput;
  export type Output = GetTimeSeriesDataPointOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetUserProfile {
  export type Input = GetUserProfileInput;
  export type Output = GetUserProfileOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssetFilters {
  export type Input = ListAssetFiltersInput;
  export type Output = ListAssetFiltersOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssetRevisions {
  export type Input = ListAssetRevisionsInput;
  export type Output = ListAssetRevisionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConnections {
  export type Input = ListConnectionsInput;
  export type Output = ListConnectionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataProductRevisions {
  export type Input = ListDataProductRevisionsInput;
  export type Output = ListDataProductRevisionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSourceRunActivities {
  export type Input = ListDataSourceRunActivitiesInput;
  export type Output = ListDataSourceRunActivitiesOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEntityOwners {
  export type Input = ListEntityOwnersInput;
  export type Output = ListEntityOwnersOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironmentActions {
  export type Input = ListEnvironmentActionsInput;
  export type Output = ListEnvironmentActionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironmentBlueprints {
  export type Input = ListEnvironmentBlueprintsInput;
  export type Output = ListEnvironmentBlueprintsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironmentProfiles {
  export type Input = ListEnvironmentProfilesInput;
  export type Output = ListEnvironmentProfilesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironments {
  export type Input = ListEnvironmentsInput;
  export type Output = ListEnvironmentsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobRuns {
  export type Input = ListJobRunsInput;
  export type Output = ListJobRunsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLineageEvents {
  export type Input = ListLineageEventsInput;
  export type Output = ListLineageEventsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLineageNodeHistory {
  export type Input = ListLineageNodeHistoryInput;
  export type Output = ListLineageNodeHistoryOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNotifications {
  export type Input = ListNotificationsInput;
  export type Output = ListNotificationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPolicyGrants {
  export type Input = ListPolicyGrantsInput;
  export type Output = ListPolicyGrantsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProjectMemberships {
  export type Input = ListProjectMembershipsInput;
  export type Output = ListProjectMembershipsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProjectProfiles {
  export type Input = ListProjectProfilesInput;
  export type Output = ListProjectProfilesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProjects {
  export type Input = ListProjectsInput;
  export type Output = ListProjectsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSubscriptionGrants {
  export type Input = ListSubscriptionGrantsInput;
  export type Output = ListSubscriptionGrantsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSubscriptionRequests {
  export type Input = ListSubscriptionRequestsInput;
  export type Output = ListSubscriptionRequestsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSubscriptions {
  export type Input = ListSubscriptionsInput;
  export type Output = ListSubscriptionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSubscriptionTargets {
  export type Input = ListSubscriptionTargetsInput;
  export type Output = ListSubscriptionTargetsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTimeSeriesDataPoints {
  export type Input = ListTimeSeriesDataPointsInput;
  export type Output = ListTimeSeriesDataPointsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PostLineageEvent {
  export type Input = PostLineageEventInput;
  export type Output = PostLineageEventOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PostTimeSeriesDataPoints {
  export type Input = PostTimeSeriesDataPointsInput;
  export type Output = PostTimeSeriesDataPointsOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RejectPredictions {
  export type Input = RejectPredictionsInput;
  export type Output = RejectPredictionsOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RejectSubscriptionRequest {
  export type Input = RejectSubscriptionRequestInput;
  export type Output = RejectSubscriptionRequestOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemoveEntityOwner {
  export type Input = RemoveEntityOwnerInput;
  export type Output = RemoveEntityOwnerOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemovePolicyGrant {
  export type Input = RemovePolicyGrantInput;
  export type Output = RemovePolicyGrantOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RevokeSubscription {
  export type Input = RevokeSubscriptionInput;
  export type Output = RevokeSubscriptionOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Search {
  export type Input = SearchInput;
  export type Output = SearchOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchGroupProfiles {
  export type Input = SearchGroupProfilesInput;
  export type Output = SearchGroupProfilesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchListings {
  export type Input = SearchListingsInput;
  export type Output = SearchListingsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchTypes {
  export type Input = SearchTypesInput;
  export type Output = SearchTypesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchUserProfiles {
  export type Input = SearchUserProfilesInput;
  export type Output = SearchUserProfilesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateAssetFilter {
  export type Input = UpdateAssetFilterInput;
  export type Output = UpdateAssetFilterOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConnection {
  export type Input = UpdateConnectionInput;
  export type Output = UpdateConnectionOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEnvironment {
  export type Input = UpdateEnvironmentInput;
  export type Output = UpdateEnvironmentOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEnvironmentAction {
  export type Input = UpdateEnvironmentActionInput;
  export type Output = UpdateEnvironmentActionOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEnvironmentProfile {
  export type Input = UpdateEnvironmentProfileInput;
  export type Output = UpdateEnvironmentProfileOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateGroupProfile {
  export type Input = UpdateGroupProfileInput;
  export type Output = UpdateGroupProfileOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProject {
  export type Input = UpdateProjectInput;
  export type Output = UpdateProjectOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProjectProfile {
  export type Input = UpdateProjectProfileInput;
  export type Output = UpdateProjectProfileOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSubscriptionGrantStatus {
  export type Input = UpdateSubscriptionGrantStatusInput;
  export type Output = UpdateSubscriptionGrantStatusOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSubscriptionRequest {
  export type Input = UpdateSubscriptionRequestInput;
  export type Output = UpdateSubscriptionRequestOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSubscriptionTarget {
  export type Input = UpdateSubscriptionTargetInput;
  export type Output = UpdateSubscriptionTargetOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateUserProfile {
  export type Input = UpdateUserProfileInput;
  export type Output = UpdateUserProfileOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelMetadataGenerationRun {
  export type Input = CancelMetadataGenerationRunInput;
  export type Output = CancelMetadataGenerationRunOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAsset {
  export type Input = CreateAssetInput;
  export type Output = CreateAssetOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAssetRevision {
  export type Input = CreateAssetRevisionInput;
  export type Output = CreateAssetRevisionOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAssetType {
  export type Input = CreateAssetTypeInput;
  export type Output = CreateAssetTypeOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataProduct {
  export type Input = CreateDataProductInput;
  export type Output = CreateDataProductOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataProductRevision {
  export type Input = CreateDataProductRevisionInput;
  export type Output = CreateDataProductRevisionOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataSource {
  export type Input = CreateDataSourceInput;
  export type Output = CreateDataSourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDomain {
  export type Input = CreateDomainInput;
  export type Output = CreateDomainOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDomainUnit {
  export type Input = CreateDomainUnitInput;
  export type Output = CreateDomainUnitOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFormType {
  export type Input = CreateFormTypeInput;
  export type Output = CreateFormTypeOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGlossary {
  export type Input = CreateGlossaryInput;
  export type Output = CreateGlossaryOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGlossaryTerm {
  export type Input = CreateGlossaryTermInput;
  export type Output = CreateGlossaryTermOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRule {
  export type Input = CreateRuleInput;
  export type Output = CreateRuleOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAsset {
  export type Input = DeleteAssetInput;
  export type Output = DeleteAssetOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAssetType {
  export type Input = DeleteAssetTypeInput;
  export type Output = DeleteAssetTypeOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataProduct {
  export type Input = DeleteDataProductInput;
  export type Output = DeleteDataProductOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataSource {
  export type Input = DeleteDataSourceInput;
  export type Output = DeleteDataSourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDomain {
  export type Input = DeleteDomainInput;
  export type Output = DeleteDomainOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDomainUnit {
  export type Input = DeleteDomainUnitInput;
  export type Output = DeleteDomainUnitOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEnvironmentBlueprintConfiguration {
  export type Input = DeleteEnvironmentBlueprintConfigurationInput;
  export type Output = DeleteEnvironmentBlueprintConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFormType {
  export type Input = DeleteFormTypeInput;
  export type Output = DeleteFormTypeOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGlossary {
  export type Input = DeleteGlossaryInput;
  export type Output = DeleteGlossaryOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGlossaryTerm {
  export type Input = DeleteGlossaryTermInput;
  export type Output = DeleteGlossaryTermOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteListing {
  export type Input = DeleteListingInput;
  export type Output = DeleteListingOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRule {
  export type Input = DeleteRuleInput;
  export type Output = DeleteRuleOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAsset {
  export type Input = GetAssetInput;
  export type Output = GetAssetOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAssetType {
  export type Input = GetAssetTypeInput;
  export type Output = GetAssetTypeOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataProduct {
  export type Input = GetDataProductInput;
  export type Output = GetDataProductOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataSource {
  export type Input = GetDataSourceInput;
  export type Output = GetDataSourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataSourceRun {
  export type Input = GetDataSourceRunInput;
  export type Output = GetDataSourceRunOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDomain {
  export type Input = GetDomainInput;
  export type Output = GetDomainOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDomainUnit {
  export type Input = GetDomainUnitInput;
  export type Output = GetDomainUnitOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnvironmentBlueprintConfiguration {
  export type Input = GetEnvironmentBlueprintConfigurationInput;
  export type Output = GetEnvironmentBlueprintConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFormType {
  export type Input = GetFormTypeInput;
  export type Output = GetFormTypeOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGlossary {
  export type Input = GetGlossaryInput;
  export type Output = GetGlossaryOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGlossaryTerm {
  export type Input = GetGlossaryTermInput;
  export type Output = GetGlossaryTermOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetListing {
  export type Input = GetListingInput;
  export type Output = GetListingOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMetadataGenerationRun {
  export type Input = GetMetadataGenerationRunInput;
  export type Output = GetMetadataGenerationRunOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRule {
  export type Input = GetRuleInput;
  export type Output = GetRuleOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSourceRuns {
  export type Input = ListDataSourceRunsInput;
  export type Output = ListDataSourceRunsOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSources {
  export type Input = ListDataSourcesInput;
  export type Output = ListDataSourcesOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDomainUnitsForParent {
  export type Input = ListDomainUnitsForParentInput;
  export type Output = ListDomainUnitsForParentOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDomains {
  export type Input = ListDomainsInput;
  export type Output = ListDomainsOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironmentBlueprintConfigurations {
  export type Input = ListEnvironmentBlueprintConfigurationsInput;
  export type Output = ListEnvironmentBlueprintConfigurationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMetadataGenerationRuns {
  export type Input = ListMetadataGenerationRunsInput;
  export type Output = ListMetadataGenerationRunsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRules {
  export type Input = ListRulesInput;
  export type Output = ListRulesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutEnvironmentBlueprintConfiguration {
  export type Input = PutEnvironmentBlueprintConfigurationInput;
  export type Output = PutEnvironmentBlueprintConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartDataSourceRun {
  export type Input = StartDataSourceRunInput;
  export type Output = StartDataSourceRunOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartMetadataGenerationRun {
  export type Input = StartMetadataGenerationRunInput;
  export type Output = StartMetadataGenerationRunOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDataSource {
  export type Input = UpdateDataSourceInput;
  export type Output = UpdateDataSourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDomain {
  export type Input = UpdateDomainInput;
  export type Output = UpdateDomainOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDomainUnit {
  export type Input = UpdateDomainUnitInput;
  export type Output = UpdateDomainUnitOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateGlossary {
  export type Input = UpdateGlossaryInput;
  export type Output = UpdateGlossaryOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateGlossaryTerm {
  export type Input = UpdateGlossaryTermInput;
  export type Output = UpdateGlossaryTermOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRule {
  export type Input = UpdateRuleInput;
  export type Output = UpdateRuleOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

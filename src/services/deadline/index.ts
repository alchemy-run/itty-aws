import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class deadline extends AWSServiceClient {
  createQueueFleetAssociation(
    input: CreateQueueFleetAssociationRequest,
  ): Effect.Effect<
    CreateQueueFleetAssociationResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createQueueLimitAssociation(
    input: CreateQueueLimitAssociationRequest,
  ): Effect.Effect<
    CreateQueueLimitAssociationResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteQueueFleetAssociation(
    input: DeleteQueueFleetAssociationRequest,
  ): Effect.Effect<
    DeleteQueueFleetAssociationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteQueueLimitAssociation(
    input: DeleteQueueLimitAssociationRequest,
  ): Effect.Effect<
    DeleteQueueLimitAssociationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQueueFleetAssociation(
    input: GetQueueFleetAssociationRequest,
  ): Effect.Effect<
    GetQueueFleetAssociationResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQueueLimitAssociation(
    input: GetQueueLimitAssociationRequest,
  ): Effect.Effect<
    GetQueueLimitAssociationResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSessionsStatisticsAggregation(
    input: GetSessionsStatisticsAggregationRequest,
  ): Effect.Effect<
    GetSessionsStatisticsAggregationResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAvailableMeteredProducts(
    input: ListAvailableMeteredProductsRequest,
  ): Effect.Effect<
    ListAvailableMeteredProductsResponse,
    InternalServerErrorException | ThrottlingException | CommonAwsError
  >;
  listQueueFleetAssociations(
    input: ListQueueFleetAssociationsRequest,
  ): Effect.Effect<
    ListQueueFleetAssociationsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listQueueLimitAssociations(
    input: ListQueueLimitAssociationsRequest,
  ): Effect.Effect<
    ListQueueLimitAssociationsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchJobs(
    input: SearchJobsRequest,
  ): Effect.Effect<
    SearchJobsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchSteps(
    input: SearchStepsRequest,
  ): Effect.Effect<
    SearchStepsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchTasks(
    input: SearchTasksRequest,
  ): Effect.Effect<
    SearchTasksResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchWorkers(
    input: SearchWorkersRequest,
  ): Effect.Effect<
    SearchWorkersResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startSessionsStatisticsAggregation(
    input: StartSessionsStatisticsAggregationRequest,
  ): Effect.Effect<
    StartSessionsStatisticsAggregationResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateQueueFleetAssociation(
    input: UpdateQueueFleetAssociationRequest,
  ): Effect.Effect<
    UpdateQueueFleetAssociationResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateQueueLimitAssociation(
    input: UpdateQueueLimitAssociationRequest,
  ): Effect.Effect<
    UpdateQueueLimitAssociationResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateMemberToFarm(
    input: AssociateMemberToFarmRequest,
  ): Effect.Effect<
    AssociateMemberToFarmResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateMemberToFleet(
    input: AssociateMemberToFleetRequest,
  ): Effect.Effect<
    AssociateMemberToFleetResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateMemberToJob(
    input: AssociateMemberToJobRequest,
  ): Effect.Effect<
    AssociateMemberToJobResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateMemberToQueue(
    input: AssociateMemberToQueueRequest,
  ): Effect.Effect<
    AssociateMemberToQueueResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  assumeFleetRoleForRead(
    input: AssumeFleetRoleForReadRequest,
  ): Effect.Effect<
    AssumeFleetRoleForReadResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  assumeFleetRoleForWorker(
    input: AssumeFleetRoleForWorkerRequest,
  ): Effect.Effect<
    AssumeFleetRoleForWorkerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  assumeQueueRoleForRead(
    input: AssumeQueueRoleForReadRequest,
  ): Effect.Effect<
    AssumeQueueRoleForReadResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  assumeQueueRoleForUser(
    input: AssumeQueueRoleForUserRequest,
  ): Effect.Effect<
    AssumeQueueRoleForUserResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  assumeQueueRoleForWorker(
    input: AssumeQueueRoleForWorkerRequest,
  ): Effect.Effect<
    AssumeQueueRoleForWorkerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchGetJobEntity(
    input: BatchGetJobEntityRequest,
  ): Effect.Effect<
    BatchGetJobEntityResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  copyJobTemplate(
    input: CopyJobTemplateRequest,
  ): Effect.Effect<
    CopyJobTemplateResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createBudget(
    input: CreateBudgetRequest,
  ): Effect.Effect<
    CreateBudgetResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createFarm(
    input: CreateFarmRequest,
  ): Effect.Effect<
    CreateFarmResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createFleet(
    input: CreateFleetRequest,
  ): Effect.Effect<
    CreateFleetResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createJob(
    input: CreateJobRequest,
  ): Effect.Effect<
    CreateJobResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createLicenseEndpoint(
    input: CreateLicenseEndpointRequest,
  ): Effect.Effect<
    CreateLicenseEndpointResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createLimit(
    input: CreateLimitRequest,
  ): Effect.Effect<
    CreateLimitResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createMonitor(
    input: CreateMonitorRequest,
  ): Effect.Effect<
    CreateMonitorResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createQueue(
    input: CreateQueueRequest,
  ): Effect.Effect<
    CreateQueueResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createQueueEnvironment(
    input: CreateQueueEnvironmentRequest,
  ): Effect.Effect<
    CreateQueueEnvironmentResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createStorageProfile(
    input: CreateStorageProfileRequest,
  ): Effect.Effect<
    CreateStorageProfileResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createWorker(
    input: CreateWorkerRequest,
  ): Effect.Effect<
    CreateWorkerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteBudget(
    input: DeleteBudgetRequest,
  ): Effect.Effect<
    DeleteBudgetResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteFarm(
    input: DeleteFarmRequest,
  ): Effect.Effect<
    DeleteFarmResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteFleet(
    input: DeleteFleetRequest,
  ): Effect.Effect<
    DeleteFleetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteLicenseEndpoint(
    input: DeleteLicenseEndpointRequest,
  ): Effect.Effect<
    DeleteLicenseEndpointResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteLimit(
    input: DeleteLimitRequest,
  ): Effect.Effect<
    DeleteLimitResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteMeteredProduct(
    input: DeleteMeteredProductRequest,
  ): Effect.Effect<
    DeleteMeteredProductResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteMonitor(
    input: DeleteMonitorRequest,
  ): Effect.Effect<
    DeleteMonitorResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteQueue(
    input: DeleteQueueRequest,
  ): Effect.Effect<
    DeleteQueueResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteQueueEnvironment(
    input: DeleteQueueEnvironmentRequest,
  ): Effect.Effect<
    DeleteQueueEnvironmentResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteStorageProfile(
    input: DeleteStorageProfileRequest,
  ): Effect.Effect<
    DeleteStorageProfileResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteWorker(
    input: DeleteWorkerRequest,
  ): Effect.Effect<
    DeleteWorkerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateMemberFromFarm(
    input: DisassociateMemberFromFarmRequest,
  ): Effect.Effect<
    DisassociateMemberFromFarmResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateMemberFromFleet(
    input: DisassociateMemberFromFleetRequest,
  ): Effect.Effect<
    DisassociateMemberFromFleetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateMemberFromJob(
    input: DisassociateMemberFromJobRequest,
  ): Effect.Effect<
    DisassociateMemberFromJobResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateMemberFromQueue(
    input: DisassociateMemberFromQueueRequest,
  ): Effect.Effect<
    DisassociateMemberFromQueueResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getBudget(
    input: GetBudgetRequest,
  ): Effect.Effect<
    GetBudgetResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getFarm(
    input: GetFarmRequest,
  ): Effect.Effect<
    GetFarmResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getFleet(
    input: GetFleetRequest,
  ): Effect.Effect<
    GetFleetResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getJob(
    input: GetJobRequest,
  ): Effect.Effect<
    GetJobResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLicenseEndpoint(
    input: GetLicenseEndpointRequest,
  ): Effect.Effect<
    GetLicenseEndpointResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLimit(
    input: GetLimitRequest,
  ): Effect.Effect<
    GetLimitResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMonitor(
    input: GetMonitorRequest,
  ): Effect.Effect<
    GetMonitorResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQueue(
    input: GetQueueRequest,
  ): Effect.Effect<
    GetQueueResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQueueEnvironment(
    input: GetQueueEnvironmentRequest,
  ): Effect.Effect<
    GetQueueEnvironmentResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSession(
    input: GetSessionRequest,
  ): Effect.Effect<
    GetSessionResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSessionAction(
    input: GetSessionActionRequest,
  ): Effect.Effect<
    GetSessionActionResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getStep(
    input: GetStepRequest,
  ): Effect.Effect<
    GetStepResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getStorageProfile(
    input: GetStorageProfileRequest,
  ): Effect.Effect<
    GetStorageProfileResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getStorageProfileForQueue(
    input: GetStorageProfileForQueueRequest,
  ): Effect.Effect<
    GetStorageProfileForQueueResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTask(
    input: GetTaskRequest,
  ): Effect.Effect<
    GetTaskResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getWorker(
    input: GetWorkerRequest,
  ): Effect.Effect<
    GetWorkerResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBudgets(
    input: ListBudgetsRequest,
  ): Effect.Effect<
    ListBudgetsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFarmMembers(
    input: ListFarmMembersRequest,
  ): Effect.Effect<
    ListFarmMembersResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFarms(
    input: ListFarmsRequest,
  ): Effect.Effect<
    ListFarmsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFleetMembers(
    input: ListFleetMembersRequest,
  ): Effect.Effect<
    ListFleetMembersResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFleets(
    input: ListFleetsRequest,
  ): Effect.Effect<
    ListFleetsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listJobMembers(
    input: ListJobMembersRequest,
  ): Effect.Effect<
    ListJobMembersResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listJobParameterDefinitions(
    input: ListJobParameterDefinitionsRequest,
  ): Effect.Effect<
    ListJobParameterDefinitionsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<
    ListJobsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLicenseEndpoints(
    input: ListLicenseEndpointsRequest,
  ): Effect.Effect<
    ListLicenseEndpointsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLimits(
    input: ListLimitsRequest,
  ): Effect.Effect<
    ListLimitsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMeteredProducts(
    input: ListMeteredProductsRequest,
  ): Effect.Effect<
    ListMeteredProductsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMonitors(
    input: ListMonitorsRequest,
  ): Effect.Effect<
    ListMonitorsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listQueueEnvironments(
    input: ListQueueEnvironmentsRequest,
  ): Effect.Effect<
    ListQueueEnvironmentsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listQueueMembers(
    input: ListQueueMembersRequest,
  ): Effect.Effect<
    ListQueueMembersResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listQueues(
    input: ListQueuesRequest,
  ): Effect.Effect<
    ListQueuesResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSessionActions(
    input: ListSessionActionsRequest,
  ): Effect.Effect<
    ListSessionActionsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSessions(
    input: ListSessionsRequest,
  ): Effect.Effect<
    ListSessionsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSessionsForWorker(
    input: ListSessionsForWorkerRequest,
  ): Effect.Effect<
    ListSessionsForWorkerResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listStepConsumers(
    input: ListStepConsumersRequest,
  ): Effect.Effect<
    ListStepConsumersResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listStepDependencies(
    input: ListStepDependenciesRequest,
  ): Effect.Effect<
    ListStepDependenciesResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSteps(
    input: ListStepsRequest,
  ): Effect.Effect<
    ListStepsResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listStorageProfiles(
    input: ListStorageProfilesRequest,
  ): Effect.Effect<
    ListStorageProfilesResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listStorageProfilesForQueue(
    input: ListStorageProfilesForQueueRequest,
  ): Effect.Effect<
    ListStorageProfilesForQueueResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTasks(
    input: ListTasksRequest,
  ): Effect.Effect<
    ListTasksResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listWorkers(
    input: ListWorkersRequest,
  ): Effect.Effect<
    ListWorkersResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putMeteredProduct(
    input: PutMeteredProductRequest,
  ): Effect.Effect<
    PutMeteredProductResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateBudget(
    input: UpdateBudgetRequest,
  ): Effect.Effect<
    UpdateBudgetResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateFarm(
    input: UpdateFarmRequest,
  ): Effect.Effect<
    UpdateFarmResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateFleet(
    input: UpdateFleetRequest,
  ): Effect.Effect<
    UpdateFleetResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateJob(
    input: UpdateJobRequest,
  ): Effect.Effect<
    UpdateJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateLimit(
    input: UpdateLimitRequest,
  ): Effect.Effect<
    UpdateLimitResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateMonitor(
    input: UpdateMonitorRequest,
  ): Effect.Effect<
    UpdateMonitorResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateQueue(
    input: UpdateQueueRequest,
  ): Effect.Effect<
    UpdateQueueResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateQueueEnvironment(
    input: UpdateQueueEnvironmentRequest,
  ): Effect.Effect<
    UpdateQueueEnvironmentResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSession(
    input: UpdateSessionRequest,
  ): Effect.Effect<
    UpdateSessionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateStep(
    input: UpdateStepRequest,
  ): Effect.Effect<
    UpdateStepResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateStorageProfile(
    input: UpdateStorageProfileRequest,
  ): Effect.Effect<
    UpdateStorageProfileResponse,
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateTask(
    input: UpdateTaskRequest,
  ): Effect.Effect<
    UpdateTaskResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateWorker(
    input: UpdateWorkerRequest,
  ): Effect.Effect<
    UpdateWorkerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateWorkerSchedule(
    input: UpdateWorkerScheduleRequest,
  ): Effect.Effect<
    UpdateWorkerScheduleResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export interface AcceleratorCapabilities {
  selections: Array<AcceleratorSelection>;
  count?: AcceleratorCountRange;
}
export interface AcceleratorCountRange {
  min: number;
  max?: number;
}
export type AcceleratorName = "t4" | "a10g" | "l4" | "l40s";
export type AcceleratorRuntime = string;

export interface AcceleratorSelection {
  name: AcceleratorName;
  runtime?: string;
}
export type AcceleratorSelections = Array<AcceleratorSelection>;
export interface AcceleratorTotalMemoryMiBRange {
  min: number;
  max?: number;
}
export type AcceleratorType = "gpu";
export type AcceleratorTypes = Array<AcceleratorType>;
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
  readonly context?: Record<string, string>;
}> {}
export type AccessKeyId = string;

export interface AcquiredLimit {
  limitId: string;
  count: number;
}
export type AcquiredLimits = Array<AcquiredLimit>;
export type AggregationId = string;

export type AllowedStorageProfileIds = Array<string>;
export type AmountCapabilityName = string;

export type AmountRequirementName = string;

export interface AssignedEnvironmentEnterSessionActionDefinition {
  environmentId: string;
}
export interface AssignedEnvironmentExitSessionActionDefinition {
  environmentId: string;
}
export interface AssignedSession {
  queueId: string;
  jobId: string;
  sessionActions: Array<AssignedSessionAction>;
  logConfiguration: LogConfiguration;
}
export interface AssignedSessionAction {
  sessionActionId: string;
  definition: AssignedSessionActionDefinition;
}
interface _AssignedSessionActionDefinition {
  envEnter?: AssignedEnvironmentEnterSessionActionDefinition;
  envExit?: AssignedEnvironmentExitSessionActionDefinition;
  taskRun?: AssignedTaskRunSessionActionDefinition;
  syncInputJobAttachments?: AssignedSyncInputJobAttachmentsSessionActionDefinition;
}

export type AssignedSessionActionDefinition =
  | (_AssignedSessionActionDefinition & {
      envEnter: AssignedEnvironmentEnterSessionActionDefinition;
    })
  | (_AssignedSessionActionDefinition & {
      envExit: AssignedEnvironmentExitSessionActionDefinition;
    })
  | (_AssignedSessionActionDefinition & {
      taskRun: AssignedTaskRunSessionActionDefinition;
    })
  | (_AssignedSessionActionDefinition & {
      syncInputJobAttachments: AssignedSyncInputJobAttachmentsSessionActionDefinition;
    });
export type AssignedSessionActions = Array<AssignedSessionAction>;
export type AssignedSessions = Record<string, AssignedSession>;
export interface AssignedSyncInputJobAttachmentsSessionActionDefinition {
  stepId?: string;
}
export interface AssignedTaskRunSessionActionDefinition {
  taskId?: string;
  stepId: string;
  parameters: Record<string, TaskParameterValue>;
}
export interface AssociateMemberToFarmRequest {
  farmId: string;
  principalId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
}
export interface AssociateMemberToFarmResponse {}
export interface AssociateMemberToFleetRequest {
  farmId: string;
  fleetId: string;
  principalId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
}
export interface AssociateMemberToFleetResponse {}
export interface AssociateMemberToJobRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  principalId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
}
export interface AssociateMemberToJobResponse {}
export interface AssociateMemberToQueueRequest {
  farmId: string;
  queueId: string;
  principalId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
}
export interface AssociateMemberToQueueResponse {}
export interface AssumeFleetRoleForReadRequest {
  farmId: string;
  fleetId: string;
}
export interface AssumeFleetRoleForReadResponse {
  credentials: AwsCredentials;
}
export interface AssumeFleetRoleForWorkerRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
}
export interface AssumeFleetRoleForWorkerResponse {
  credentials: AwsCredentials;
}
export interface AssumeQueueRoleForReadRequest {
  farmId: string;
  queueId: string;
}
export interface AssumeQueueRoleForReadResponse {
  credentials: AwsCredentials;
}
export interface AssumeQueueRoleForUserRequest {
  farmId: string;
  queueId: string;
}
export interface AssumeQueueRoleForUserResponse {
  credentials: AwsCredentials;
}
export interface AssumeQueueRoleForWorkerRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
  queueId: string;
}
export interface AssumeQueueRoleForWorkerResponse {
  credentials?: AwsCredentials;
}
export interface Attachments {
  manifests: Array<ManifestProperties>;
  fileSystem?: JobAttachmentsFileSystem;
}
export type AttributeCapabilityName = string;

export type AttributeCapabilityValue = string;

export type AttributeCapabilityValuesList = Array<string>;
export type AutoScalingMode = "NO_SCALING" | "EVENT_BASED_AUTO_SCALING";
export type AutoScalingStatus = "GROWING" | "STEADY" | "SHRINKING";
export interface AwsCredentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken: string;
  expiration: Date | string;
}
export type BatchGetJobEntityErrors = Array<GetJobEntityError>;
export type BatchGetJobEntityList = Array<JobEntity>;
export interface BatchGetJobEntityRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
  identifiers: Array<JobEntityIdentifiersUnion>;
}
export interface BatchGetJobEntityResponse {
  entities: Array<JobEntity>;
  errors: Array<GetJobEntityError>;
}
export type BoundedString = string;

export type BudgetActionsToAdd = Array<BudgetActionToAdd>;
export type BudgetActionsToRemove = Array<BudgetActionToRemove>;
export interface BudgetActionToAdd {
  type: BudgetActionType;
  thresholdPercentage: number;
  description?: string;
}
export interface BudgetActionToRemove {
  type: BudgetActionType;
  thresholdPercentage: number;
}
export type BudgetActionType =
  | "STOP_SCHEDULING_AND_COMPLETE_TASKS"
  | "STOP_SCHEDULING_AND_CANCEL_TASKS";
export type BudgetId = string;

interface _BudgetSchedule {
  fixed?: FixedBudgetSchedule;
}

export type BudgetSchedule = _BudgetSchedule & { fixed: FixedBudgetSchedule };
export type BudgetStatus = "ACTIVE" | "INACTIVE";
export type BudgetSummaries = Array<BudgetSummary>;
export interface BudgetSummary {
  budgetId: string;
  usageTrackingResource: UsageTrackingResource;
  status: BudgetStatus;
  displayName: string;
  description?: string;
  approximateDollarLimit: number;
  usages: ConsumedUsages;
  createdBy: string;
  createdAt: Date | string;
  updatedBy?: string;
  updatedAt?: Date | string;
}
export type CancelSessionActions = Record<string, Array<string>>;
export type ClientToken = string;

export type CombinationExpression = string;

export type ComparisonOperator =
  | "EQUAL"
  | "NOT_EQUAL"
  | "GREATER_THAN_EQUAL_TO"
  | "GREATER_THAN"
  | "LESS_THAN_EQUAL_TO"
  | "LESS_THAN";
export type CompletedStatus =
  | "SUCCEEDED"
  | "FAILED"
  | "INTERRUPTED"
  | "CANCELED"
  | "NEVER_ATTEMPTED";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly reason: ConflictExceptionReason;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly context?: Record<string, string>;
}> {}
export type ConflictExceptionReason =
  | "CONFLICT_EXCEPTION"
  | "CONCURRENT_MODIFICATION"
  | "RESOURCE_ALREADY_EXISTS"
  | "RESOURCE_IN_USE"
  | "STATUS_CONFLICT";
export type ConsumedUsageLimit = number;

export interface ConsumedUsages {
  approximateDollarUsage: number;
}
export interface CopyJobTemplateRequest {
  farmId: string;
  jobId: string;
  queueId: string;
  targetS3Location: S3Location;
}
export interface CopyJobTemplateResponse {
  templateType: JobTemplateType;
}
export type CpuArchitectureType = "x86_64" | "arm64";
export interface CreateBudgetRequest {
  clientToken?: string;
  farmId: string;
  usageTrackingResource: UsageTrackingResource;
  displayName: string;
  description?: string;
  approximateDollarLimit: number;
  actions: Array<BudgetActionToAdd>;
  schedule: BudgetSchedule;
}
export interface CreateBudgetResponse {
  budgetId: string;
}
export type CreatedAt = Date | string;

export type CreatedBy = string;

export interface CreateFarmRequest {
  clientToken?: string;
  displayName: string;
  description?: string;
  kmsKeyArn?: string;
  tags?: Record<string, string>;
}
export interface CreateFarmResponse {
  farmId: string;
}
export interface CreateFleetRequest {
  clientToken?: string;
  farmId: string;
  displayName: string;
  description?: string;
  roleArn: string;
  minWorkerCount?: number;
  maxWorkerCount: number;
  configuration: FleetConfiguration;
  tags?: Record<string, string>;
  hostConfiguration?: HostConfiguration;
}
export interface CreateFleetResponse {
  fleetId: string;
}
export interface CreateJobRequest {
  farmId: string;
  queueId: string;
  clientToken?: string;
  template?: string;
  templateType?: JobTemplateType;
  priority: number;
  parameters?: Record<string, JobParameter>;
  attachments?: Attachments;
  storageProfileId?: string;
  targetTaskRunStatus?: CreateJobTargetTaskRunStatus;
  maxFailedTasksCount?: number;
  maxRetriesPerTask?: number;
  maxWorkerCount?: number;
  sourceJobId?: string;
}
export interface CreateJobResponse {
  jobId: string;
}
export type CreateJobTargetTaskRunStatus = "READY" | "SUSPENDED";
export interface CreateLicenseEndpointRequest {
  clientToken?: string;
  vpcId: string;
  subnetIds: Array<string>;
  securityGroupIds: Array<string>;
  tags?: Record<string, string>;
}
export interface CreateLicenseEndpointResponse {
  licenseEndpointId: string;
}
export interface CreateLimitRequest {
  clientToken?: string;
  displayName: string;
  amountRequirementName: string;
  maxCount: number;
  farmId: string;
  description?: string;
}
export interface CreateLimitResponse {
  limitId: string;
}
export interface CreateMonitorRequest {
  clientToken?: string;
  displayName: string;
  identityCenterInstanceArn: string;
  subdomain: string;
  roleArn: string;
  tags?: Record<string, string>;
}
export interface CreateMonitorResponse {
  monitorId: string;
  identityCenterApplicationArn: string;
}
export interface CreateQueueEnvironmentRequest {
  clientToken?: string;
  farmId: string;
  queueId: string;
  priority: number;
  templateType: EnvironmentTemplateType;
  template: string;
}
export interface CreateQueueEnvironmentResponse {
  queueEnvironmentId: string;
}
export interface CreateQueueFleetAssociationRequest {
  farmId: string;
  queueId: string;
  fleetId: string;
}
export interface CreateQueueFleetAssociationResponse {}
export interface CreateQueueLimitAssociationRequest {
  farmId: string;
  queueId: string;
  limitId: string;
}
export interface CreateQueueLimitAssociationResponse {}
export interface CreateQueueRequest {
  clientToken?: string;
  farmId: string;
  displayName: string;
  description?: string;
  defaultBudgetAction?: DefaultQueueBudgetAction;
  jobAttachmentSettings?: JobAttachmentSettings;
  roleArn?: string;
  jobRunAsUser?: JobRunAsUser;
  requiredFileSystemLocationNames?: Array<string>;
  allowedStorageProfileIds?: Array<string>;
  tags?: Record<string, string>;
}
export interface CreateQueueResponse {
  queueId: string;
}
export interface CreateStorageProfileRequest {
  clientToken?: string;
  farmId: string;
  displayName: string;
  osFamily: StorageProfileOperatingSystemFamily;
  fileSystemLocations?: Array<FileSystemLocation>;
}
export interface CreateStorageProfileResponse {
  storageProfileId: string;
}
export interface CreateWorkerRequest {
  farmId: string;
  fleetId: string;
  hostProperties?: HostPropertiesRequest;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateWorkerResponse {
  workerId: string;
}
export interface CustomerManagedFleetConfiguration {
  mode: AutoScalingMode;
  workerCapabilities: CustomerManagedWorkerCapabilities;
  storageProfileId?: string;
  tagPropagationMode?: TagPropagationMode;
}
export type CustomerManagedFleetOperatingSystemFamily =
  | "WINDOWS"
  | "LINUX"
  | "MACOS";
export interface CustomerManagedWorkerCapabilities {
  vCpuCount: VCpuCountRange;
  memoryMiB: MemoryMiBRange;
  acceleratorTypes?: Array<AcceleratorType>;
  acceleratorCount?: AcceleratorCountRange;
  acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRange;
  osFamily: CustomerManagedFleetOperatingSystemFamily;
  cpuArchitectureType: CpuArchitectureType;
  customAmounts?: Array<FleetAmountCapability>;
  customAttributes?: Array<FleetAttributeCapability>;
}
export type CustomFleetAmountCapabilities = Array<FleetAmountCapability>;
export type CustomFleetAttributeCapabilities = Array<FleetAttributeCapability>;
export interface DateTimeFilterExpression {
  name: string;
  operator: ComparisonOperator;
  dateTime: Date | string;
}
export type DeadlinePrincipalType = "USER" | "GROUP";
export type DefaultQueueBudgetAction =
  | "NONE"
  | "STOP_SCHEDULING_AND_COMPLETE_TASKS"
  | "STOP_SCHEDULING_AND_CANCEL_TASKS";
export interface DeleteBudgetRequest {
  farmId: string;
  budgetId: string;
}
export interface DeleteBudgetResponse {}
export interface DeleteFarmRequest {
  farmId: string;
}
export interface DeleteFarmResponse {}
export interface DeleteFleetRequest {
  clientToken?: string;
  farmId: string;
  fleetId: string;
}
export interface DeleteFleetResponse {}
export interface DeleteLicenseEndpointRequest {
  licenseEndpointId: string;
}
export interface DeleteLicenseEndpointResponse {}
export interface DeleteLimitRequest {
  farmId: string;
  limitId: string;
}
export interface DeleteLimitResponse {}
export interface DeleteMeteredProductRequest {
  licenseEndpointId: string;
  productId: string;
}
export interface DeleteMeteredProductResponse {}
export interface DeleteMonitorRequest {
  monitorId: string;
}
export interface DeleteMonitorResponse {}
export interface DeleteQueueEnvironmentRequest {
  farmId: string;
  queueId: string;
  queueEnvironmentId: string;
}
export interface DeleteQueueEnvironmentResponse {}
export interface DeleteQueueFleetAssociationRequest {
  farmId: string;
  queueId: string;
  fleetId: string;
}
export interface DeleteQueueFleetAssociationResponse {}
export interface DeleteQueueLimitAssociationRequest {
  farmId: string;
  queueId: string;
  limitId: string;
}
export interface DeleteQueueLimitAssociationResponse {}
export interface DeleteQueueRequest {
  farmId: string;
  queueId: string;
}
export interface DeleteQueueResponse {}
export interface DeleteStorageProfileRequest {
  farmId: string;
  storageProfileId: string;
}
export interface DeleteStorageProfileResponse {}
export interface DeleteWorkerRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
}
export interface DeleteWorkerResponse {}
export type DependenciesList = Array<string>;
export type DependencyConsumerResolutionStatus = "RESOLVED" | "UNRESOLVED";
export interface DependencyCounts {
  dependenciesResolved: number;
  dependenciesUnresolved: number;
  consumersResolved: number;
  consumersUnresolved: number;
}
export type Description = string;

export type DesiredWorkerStatus = "STOPPED";
export interface DisassociateMemberFromFarmRequest {
  farmId: string;
  principalId: string;
}
export interface DisassociateMemberFromFarmResponse {}
export interface DisassociateMemberFromFleetRequest {
  farmId: string;
  fleetId: string;
  principalId: string;
}
export interface DisassociateMemberFromFleetResponse {}
export interface DisassociateMemberFromJobRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  principalId: string;
}
export interface DisassociateMemberFromJobResponse {}
export interface DisassociateMemberFromQueueRequest {
  farmId: string;
  queueId: string;
  principalId: string;
}
export interface DisassociateMemberFromQueueResponse {}
export type DnsName = string;

export type Document = unknown;

export type Double = number;

export type EbsIops = number;

export type EbsThroughputMiB = number;

export interface Ec2EbsVolume {
  sizeGiB?: number;
  iops?: number;
  throughputMiB?: number;
}
export type Ec2MarketType = "on-demand" | "spot";
export type EndedAt = Date | string;

export type EndsAt = Date | string;

export interface EnvironmentDetailsEntity {
  jobId: string;
  environmentId: string;
  schemaVersion: string;
  template: unknown;
}
export interface EnvironmentDetailsError {
  jobId: string;
  environmentId: string;
  code: JobEntityErrorCode;
  message: string;
}
export interface EnvironmentDetailsIdentifiers {
  jobId: string;
  environmentId: string;
}
export interface EnvironmentEnterSessionActionDefinition {
  environmentId: string;
}
export interface EnvironmentEnterSessionActionDefinitionSummary {
  environmentId: string;
}
export interface EnvironmentExitSessionActionDefinition {
  environmentId: string;
}
export interface EnvironmentExitSessionActionDefinitionSummary {
  environmentId: string;
}
export type EnvironmentId = string;

export type EnvironmentName = string;

export type EnvironmentTemplate = string;

export type EnvironmentTemplateType = "JSON" | "YAML";
export type ExceptionContext = Record<string, string>;
export type FarmId = string;

export interface FarmMember {
  farmId: string;
  principalId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
}
export type FarmMembers = Array<FarmMember>;
export type FarmSummaries = Array<FarmSummary>;
export interface FarmSummary {
  farmId: string;
  displayName: string;
  kmsKeyArn?: string;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export interface FieldSortExpression {
  sortOrder: SortOrder;
  name: string;
}
export interface FileSystemLocation {
  name: string;
  path: string;
  type: FileSystemLocationType;
}
export type FileSystemLocationName = string;

export type FileSystemLocationsList = Array<FileSystemLocation>;
export type FileSystemLocationType = "SHARED" | "LOCAL";
export interface FixedBudgetSchedule {
  startTime: Date | string;
  endTime: Date | string;
}
export type FleetAmountCapabilities = Array<FleetAmountCapability>;
export interface FleetAmountCapability {
  name: string;
  min: number;
  max?: number;
}
export type FleetAttributeCapabilities = Array<FleetAttributeCapability>;
export interface FleetAttributeCapability {
  name: string;
  values: Array<string>;
}
export interface FleetCapabilities {
  amounts?: Array<FleetAmountCapability>;
  attributes?: Array<FleetAttributeCapability>;
}
interface _FleetConfiguration {
  customerManaged?: CustomerManagedFleetConfiguration;
  serviceManagedEc2?: ServiceManagedEc2FleetConfiguration;
}

export type FleetConfiguration =
  | (_FleetConfiguration & {
      customerManaged: CustomerManagedFleetConfiguration;
    })
  | (_FleetConfiguration & {
      serviceManagedEc2: ServiceManagedEc2FleetConfiguration;
    });
export type FleetId = string;

export type FleetIds = Array<string>;
export interface FleetMember {
  farmId: string;
  fleetId: string;
  principalId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
}
export type FleetMembers = Array<FleetMember>;
export type FleetStatus =
  | "ACTIVE"
  | "CREATE_IN_PROGRESS"
  | "UPDATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "UPDATE_FAILED";
export type FleetSummaries = Array<FleetSummary>;
export interface FleetSummary {
  fleetId: string;
  farmId: string;
  displayName: string;
  status: FleetStatus;
  autoScalingStatus?: AutoScalingStatus;
  targetWorkerCount?: number;
  workerCount: number;
  minWorkerCount: number;
  maxWorkerCount: number;
  configuration: FleetConfiguration;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export type FloatString = string;

export interface GetBudgetRequest {
  farmId: string;
  budgetId: string;
}
export interface GetBudgetResponse {
  budgetId: string;
  usageTrackingResource: UsageTrackingResource;
  status: BudgetStatus;
  displayName: string;
  description?: string;
  approximateDollarLimit: number;
  usages: ConsumedUsages;
  actions: Array<ResponseBudgetAction>;
  schedule: BudgetSchedule;
  createdBy: string;
  createdAt: Date | string;
  updatedBy?: string;
  updatedAt?: Date | string;
  queueStoppedAt?: Date | string;
}
export interface GetFarmRequest {
  farmId: string;
}
export interface GetFarmResponse {
  farmId: string;
  displayName: string;
  description?: string;
  kmsKeyArn: string;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export interface GetFleetRequest {
  farmId: string;
  fleetId: string;
}
export interface GetFleetResponse {
  fleetId: string;
  farmId: string;
  displayName: string;
  description?: string;
  status: FleetStatus;
  autoScalingStatus?: AutoScalingStatus;
  targetWorkerCount?: number;
  workerCount: number;
  minWorkerCount: number;
  maxWorkerCount: number;
  configuration: FleetConfiguration;
  hostConfiguration?: HostConfiguration;
  capabilities?: FleetCapabilities;
  roleArn: string;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
interface _GetJobEntityError {
  jobDetails?: JobDetailsError;
  jobAttachmentDetails?: JobAttachmentDetailsError;
  stepDetails?: StepDetailsError;
  environmentDetails?: EnvironmentDetailsError;
}

export type GetJobEntityError =
  | (_GetJobEntityError & { jobDetails: JobDetailsError })
  | (_GetJobEntityError & { jobAttachmentDetails: JobAttachmentDetailsError })
  | (_GetJobEntityError & { stepDetails: StepDetailsError })
  | (_GetJobEntityError & { environmentDetails: EnvironmentDetailsError });
export interface GetJobRequest {
  farmId: string;
  queueId: string;
  jobId: string;
}
export interface GetJobResponse {
  jobId: string;
  name: string;
  lifecycleStatus: JobLifecycleStatus;
  lifecycleStatusMessage: string;
  priority: number;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  startedAt?: Date | string;
  endedAt?: Date | string;
  taskRunStatus?: TaskRunStatus;
  targetTaskRunStatus?: JobTargetTaskRunStatus;
  taskRunStatusCounts?: Record<TaskRunStatus, number>;
  taskFailureRetryCount?: number;
  storageProfileId?: string;
  maxFailedTasksCount?: number;
  maxRetriesPerTask?: number;
  parameters?: Record<string, JobParameter>;
  attachments?: Attachments;
  description?: string;
  maxWorkerCount?: number;
  sourceJobId?: string;
}
export interface GetLicenseEndpointRequest {
  licenseEndpointId: string;
}
export interface GetLicenseEndpointResponse {
  licenseEndpointId: string;
  status: LicenseEndpointStatus;
  statusMessage: string;
  vpcId?: string;
  dnsName?: string;
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
}
export interface GetLimitRequest {
  farmId: string;
  limitId: string;
}
export interface GetLimitResponse {
  displayName: string;
  amountRequirementName: string;
  maxCount: number;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  farmId: string;
  limitId: string;
  currentCount: number;
  description?: string;
}
export interface GetMonitorRequest {
  monitorId: string;
}
export interface GetMonitorResponse {
  monitorId: string;
  displayName: string;
  subdomain: string;
  url: string;
  roleArn: string;
  identityCenterInstanceArn: string;
  identityCenterApplicationArn: string;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export interface GetQueueEnvironmentRequest {
  farmId: string;
  queueId: string;
  queueEnvironmentId: string;
}
export interface GetQueueEnvironmentResponse {
  queueEnvironmentId: string;
  name: string;
  priority: number;
  templateType: EnvironmentTemplateType;
  template: string;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export interface GetQueueFleetAssociationRequest {
  farmId: string;
  queueId: string;
  fleetId: string;
}
export interface GetQueueFleetAssociationResponse {
  queueId: string;
  fleetId: string;
  status: QueueFleetAssociationStatus;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export interface GetQueueLimitAssociationRequest {
  farmId: string;
  queueId: string;
  limitId: string;
}
export interface GetQueueLimitAssociationResponse {
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  queueId: string;
  limitId: string;
  status: QueueLimitAssociationStatus;
}
export interface GetQueueRequest {
  farmId: string;
  queueId: string;
}
export interface GetQueueResponse {
  queueId: string;
  displayName: string;
  description?: string;
  farmId: string;
  status: QueueStatus;
  defaultBudgetAction: DefaultQueueBudgetAction;
  blockedReason?: QueueBlockedReason;
  jobAttachmentSettings?: JobAttachmentSettings;
  roleArn?: string;
  requiredFileSystemLocationNames?: Array<string>;
  allowedStorageProfileIds?: Array<string>;
  jobRunAsUser?: JobRunAsUser;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export interface GetSessionActionRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  sessionActionId: string;
}
export interface GetSessionActionResponse {
  sessionActionId: string;
  status: SessionActionStatus;
  startedAt?: Date | string;
  endedAt?: Date | string;
  workerUpdatedAt?: Date | string;
  progressPercent?: number;
  sessionId: string;
  processExitCode?: number;
  progressMessage?: string;
  definition: SessionActionDefinition;
  acquiredLimits?: Array<AcquiredLimit>;
  manifests?: Array<TaskRunManifestPropertiesResponse>;
}
export interface GetSessionRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  sessionId: string;
}
export interface GetSessionResponse {
  sessionId: string;
  fleetId: string;
  workerId: string;
  startedAt: Date | string;
  log: LogConfiguration;
  lifecycleStatus: SessionLifecycleStatus;
  endedAt?: Date | string;
  updatedAt?: Date | string;
  updatedBy?: string;
  targetLifecycleStatus?: SessionLifecycleTargetStatus;
  hostProperties?: HostPropertiesResponse;
  workerLog?: LogConfiguration;
}
export interface GetSessionsStatisticsAggregationRequest {
  farmId: string;
  aggregationId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface GetSessionsStatisticsAggregationResponse {
  statistics?: Array<Statistics>;
  nextToken?: string;
  status: SessionsStatisticsAggregationStatus;
  statusMessage?: string;
}
export interface GetStepRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
}
export interface GetStepResponse {
  stepId: string;
  name: string;
  lifecycleStatus: StepLifecycleStatus;
  lifecycleStatusMessage?: string;
  taskRunStatus: TaskRunStatus;
  taskRunStatusCounts: Record<TaskRunStatus, number>;
  taskFailureRetryCount?: number;
  targetTaskRunStatus?: StepTargetTaskRunStatus;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  startedAt?: Date | string;
  endedAt?: Date | string;
  dependencyCounts?: DependencyCounts;
  requiredCapabilities?: StepRequiredCapabilities;
  parameterSpace?: ParameterSpace;
  description?: string;
}
export interface GetStorageProfileForQueueRequest {
  farmId: string;
  queueId: string;
  storageProfileId: string;
}
export interface GetStorageProfileForQueueResponse {
  storageProfileId: string;
  displayName: string;
  osFamily: StorageProfileOperatingSystemFamily;
  fileSystemLocations?: Array<FileSystemLocation>;
}
export interface GetStorageProfileRequest {
  farmId: string;
  storageProfileId: string;
}
export interface GetStorageProfileResponse {
  storageProfileId: string;
  displayName: string;
  osFamily: StorageProfileOperatingSystemFamily;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  fileSystemLocations?: Array<FileSystemLocation>;
}
export interface GetTaskRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  taskId: string;
}
export interface GetTaskResponse {
  taskId: string;
  createdAt: Date | string;
  createdBy: string;
  runStatus: TaskRunStatus;
  targetRunStatus?: TaskTargetRunStatus;
  failureRetryCount?: number;
  parameters?: Record<string, TaskParameterValue>;
  startedAt?: Date | string;
  endedAt?: Date | string;
  updatedAt?: Date | string;
  updatedBy?: string;
  latestSessionActionId?: string;
}
export interface GetWorkerRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
}
export interface GetWorkerResponse {
  farmId: string;
  fleetId: string;
  workerId: string;
  hostProperties?: HostPropertiesResponse;
  status: WorkerStatus;
  log?: LogConfiguration;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export interface HostConfiguration {
  scriptBody: string;
  scriptTimeoutSeconds?: number;
}
export type HostConfigurationScript = string;

export type HostConfigurationScriptTimeoutSeconds = number;

export type HostName = string;

export interface HostPropertiesRequest {
  ipAddresses?: IpAddresses;
  hostName?: string;
}
export interface HostPropertiesResponse {
  ipAddresses?: IpAddresses;
  hostName?: string;
  ec2InstanceArn?: string;
  ec2InstanceType?: string;
}
export type IamRoleArn = string;

export type IdentityCenterApplicationArn = string;

export type IdentityCenterInstanceArn = string;

export type IdentityCenterPrincipalId = string;

export type IdentityStoreId = string;

export type InstanceType = string;

export type InstanceTypes = Array<string>;
export type Integer = number;

export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type IntString = string;

export interface IpAddresses {
  ipV4Addresses?: Array<string>;
  ipV6Addresses?: Array<string>;
}
export type IpV4Address = string;

export type IpV4Addresses = Array<string>;
export type IpV6Address = string;

export type IpV6Addresses = Array<string>;
export interface JobAttachmentDetailsEntity {
  jobId: string;
  attachments: Attachments;
}
export interface JobAttachmentDetailsError {
  jobId: string;
  code: JobEntityErrorCode;
  message: string;
}
export interface JobAttachmentDetailsIdentifiers {
  jobId: string;
}
export interface JobAttachmentSettings {
  s3BucketName: string;
  rootPrefix: string;
}
export type JobAttachmentsFileSystem = "COPIED" | "VIRTUAL";
export type JobDescription = string;

export interface JobDetailsEntity {
  jobId: string;
  jobAttachmentSettings?: JobAttachmentSettings;
  jobRunAsUser?: JobRunAsUser;
  logGroupName: string;
  queueRoleArn?: string;
  parameters?: Record<string, JobParameter>;
  schemaVersion: string;
  pathMappingRules?: Array<PathMappingRule>;
}
export interface JobDetailsError {
  jobId: string;
  code: JobEntityErrorCode;
  message: string;
}
export interface JobDetailsIdentifiers {
  jobId: string;
}
interface _JobEntity {
  jobDetails?: JobDetailsEntity;
  jobAttachmentDetails?: JobAttachmentDetailsEntity;
  stepDetails?: StepDetailsEntity;
  environmentDetails?: EnvironmentDetailsEntity;
}

export type JobEntity =
  | (_JobEntity & { jobDetails: JobDetailsEntity })
  | (_JobEntity & { jobAttachmentDetails: JobAttachmentDetailsEntity })
  | (_JobEntity & { stepDetails: StepDetailsEntity })
  | (_JobEntity & { environmentDetails: EnvironmentDetailsEntity });
export type JobEntityErrorCode =
  | "AccessDeniedException"
  | "InternalServerException"
  | "ValidationException"
  | "ResourceNotFoundException"
  | "MaxPayloadSizeExceeded"
  | "ConflictException";
export type JobEntityIdentifiers = Array<JobEntityIdentifiersUnion>;
interface _JobEntityIdentifiersUnion {
  jobDetails?: JobDetailsIdentifiers;
  jobAttachmentDetails?: JobAttachmentDetailsIdentifiers;
  stepDetails?: StepDetailsIdentifiers;
  environmentDetails?: EnvironmentDetailsIdentifiers;
}

export type JobEntityIdentifiersUnion =
  | (_JobEntityIdentifiersUnion & { jobDetails: JobDetailsIdentifiers })
  | (_JobEntityIdentifiersUnion & {
      jobAttachmentDetails: JobAttachmentDetailsIdentifiers;
    })
  | (_JobEntityIdentifiersUnion & { stepDetails: StepDetailsIdentifiers })
  | (_JobEntityIdentifiersUnion & {
      environmentDetails: EnvironmentDetailsIdentifiers;
    });
export type JobId = string;

export type JobLifecycleStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "CREATE_COMPLETE"
  | "UPLOAD_IN_PROGRESS"
  | "UPLOAD_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED"
  | "UPDATE_SUCCEEDED"
  | "ARCHIVED";
export interface JobMember {
  farmId: string;
  queueId: string;
  jobId: string;
  principalId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
}
export type JobMembers = Array<JobMember>;
export type JobName = string;

interface _JobParameter {
  int?: string;
  float?: string;
  string?: string;
  path?: string;
}

export type JobParameter =
  | (_JobParameter & { int: string })
  | (_JobParameter & { float: string })
  | (_JobParameter & { string: string })
  | (_JobParameter & { path: string });
export type JobParameterDefinition = unknown;

export type JobParameterDefinitions = Array<unknown>;
export type JobParameters = Record<string, JobParameter>;
export type JobPriority = number;

export interface JobRunAsUser {
  posix?: PosixUser;
  windows?: WindowsUser;
  runAs: RunAs;
}
export type JobSearchSummaries = Array<JobSearchSummary>;
export interface JobSearchSummary {
  jobId?: string;
  queueId?: string;
  name?: string;
  lifecycleStatus?: JobLifecycleStatus;
  lifecycleStatusMessage?: string;
  taskRunStatus?: TaskRunStatus;
  targetTaskRunStatus?: JobTargetTaskRunStatus;
  taskRunStatusCounts?: Record<TaskRunStatus, number>;
  taskFailureRetryCount?: number;
  priority?: number;
  maxFailedTasksCount?: number;
  maxRetriesPerTask?: number;
  createdBy?: string;
  createdAt?: Date | string;
  endedAt?: Date | string;
  startedAt?: Date | string;
  updatedAt?: Date | string;
  updatedBy?: string;
  jobParameters?: Record<string, JobParameter>;
  maxWorkerCount?: number;
  sourceJobId?: string;
}
export type JobSummaries = Array<JobSummary>;
export interface JobSummary {
  jobId: string;
  name: string;
  lifecycleStatus: JobLifecycleStatus;
  lifecycleStatusMessage: string;
  priority: number;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  startedAt?: Date | string;
  endedAt?: Date | string;
  taskRunStatus?: TaskRunStatus;
  targetTaskRunStatus?: JobTargetTaskRunStatus;
  taskRunStatusCounts?: Record<TaskRunStatus, number>;
  taskFailureRetryCount?: number;
  maxFailedTasksCount?: number;
  maxRetriesPerTask?: number;
  maxWorkerCount?: number;
  sourceJobId?: string;
}
export type JobTargetTaskRunStatus =
  | "READY"
  | "FAILED"
  | "SUCCEEDED"
  | "CANCELED"
  | "SUSPENDED"
  | "PENDING";
export type JobTemplate = string;

export type JobTemplateType = "JSON" | "YAML";
export type KmsKeyArn = string;

export type LicenseEndpointId = string;

export type LicenseEndpointStatus =
  | "CREATE_IN_PROGRESS"
  | "DELETE_IN_PROGRESS"
  | "READY"
  | "NOT_READY";
export type LicenseEndpointSummaries = Array<LicenseEndpointSummary>;
export interface LicenseEndpointSummary {
  licenseEndpointId?: string;
  status?: LicenseEndpointStatus;
  statusMessage?: string;
  vpcId?: string;
}
export type LicenseProduct = string;

export type LimitId = string;

export type LimitSummaries = Array<LimitSummary>;
export interface LimitSummary {
  displayName: string;
  amountRequirementName: string;
  maxCount: number;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  farmId: string;
  limitId: string;
  currentCount: number;
}
export type ListAttributeCapabilityValue = Array<string>;
export interface ListAvailableMeteredProductsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListAvailableMeteredProductsResponse {
  meteredProducts: Array<MeteredProductSummary>;
  nextToken?: string;
}
export interface ListBudgetsRequest {
  nextToken?: string;
  farmId: string;
  maxResults?: number;
  status?: BudgetStatus;
}
export interface ListBudgetsResponse {
  nextToken?: string;
  budgets: Array<BudgetSummary>;
}
export interface ListFarmMembersRequest {
  farmId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListFarmMembersResponse {
  members: Array<FarmMember>;
  nextToken?: string;
}
export interface ListFarmsRequest {
  nextToken?: string;
  principalId?: string;
  maxResults?: number;
}
export interface ListFarmsResponse {
  nextToken?: string;
  farms: Array<FarmSummary>;
}
export interface ListFleetMembersRequest {
  farmId: string;
  fleetId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListFleetMembersResponse {
  members: Array<FleetMember>;
  nextToken?: string;
}
export interface ListFleetsRequest {
  farmId: string;
  principalId?: string;
  displayName?: string;
  status?: FleetStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface ListFleetsResponse {
  fleets: Array<FleetSummary>;
  nextToken?: string;
}
export interface ListJobMembersRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListJobMembersResponse {
  members: Array<JobMember>;
  nextToken?: string;
}
export interface ListJobParameterDefinitionsRequest {
  farmId: string;
  jobId: string;
  queueId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListJobParameterDefinitionsResponse {
  jobParameterDefinitions: Array<unknown>;
  nextToken?: string;
}
export interface ListJobsRequest {
  farmId: string;
  principalId?: string;
  queueId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListJobsResponse {
  jobs: Array<JobSummary>;
  nextToken?: string;
}
export interface ListLicenseEndpointsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListLicenseEndpointsResponse {
  licenseEndpoints: Array<LicenseEndpointSummary>;
  nextToken?: string;
}
export interface ListLimitsRequest {
  farmId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListLimitsResponse {
  limits: Array<LimitSummary>;
  nextToken?: string;
}
export interface ListMeteredProductsRequest {
  licenseEndpointId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListMeteredProductsResponse {
  meteredProducts: Array<MeteredProductSummary>;
  nextToken?: string;
}
export interface ListMonitorsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListMonitorsResponse {
  nextToken?: string;
  monitors: Array<MonitorSummary>;
}
export interface ListQueueEnvironmentsRequest {
  farmId: string;
  queueId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListQueueEnvironmentsResponse {
  environments: Array<QueueEnvironmentSummary>;
  nextToken?: string;
}
export interface ListQueueFleetAssociationsRequest {
  farmId: string;
  queueId?: string;
  fleetId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListQueueFleetAssociationsResponse {
  queueFleetAssociations: Array<QueueFleetAssociationSummary>;
  nextToken?: string;
}
export interface ListQueueLimitAssociationsRequest {
  farmId: string;
  queueId?: string;
  limitId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListQueueLimitAssociationsResponse {
  queueLimitAssociations: Array<QueueLimitAssociationSummary>;
  nextToken?: string;
}
export interface ListQueueMembersRequest {
  farmId: string;
  queueId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListQueueMembersResponse {
  members: Array<QueueMember>;
  nextToken?: string;
}
export interface ListQueuesRequest {
  farmId: string;
  principalId?: string;
  status?: QueueStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface ListQueuesResponse {
  queues: Array<QueueSummary>;
  nextToken?: string;
}
export interface ListSessionActionsRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  sessionId?: string;
  taskId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSessionActionsResponse {
  sessionActions: Array<SessionActionSummary>;
  nextToken?: string;
}
export interface ListSessionsForWorkerRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSessionsForWorkerResponse {
  sessions: Array<WorkerSessionSummary>;
  nextToken?: string;
}
export type ListSessionsForWorkerSummaries = Array<WorkerSessionSummary>;
export interface ListSessionsRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSessionsResponse {
  sessions: Array<SessionSummary>;
  nextToken?: string;
}
export interface ListStepConsumersRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListStepConsumersResponse {
  consumers: Array<StepConsumer>;
  nextToken?: string;
}
export interface ListStepDependenciesRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListStepDependenciesResponse {
  dependencies: Array<StepDependency>;
  nextToken?: string;
}
export interface ListStepsRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListStepsResponse {
  steps: Array<StepSummary>;
  nextToken?: string;
}
export interface ListStorageProfilesForQueueRequest {
  farmId: string;
  queueId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListStorageProfilesForQueueResponse {
  storageProfiles: Array<StorageProfileSummary>;
  nextToken?: string;
}
export interface ListStorageProfilesRequest {
  farmId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListStorageProfilesResponse {
  storageProfiles: Array<StorageProfileSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListTasksRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTasksResponse {
  tasks: Array<TaskSummary>;
  nextToken?: string;
}
export interface ListWorkersRequest {
  farmId: string;
  fleetId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListWorkersResponse {
  nextToken?: string;
  workers: Array<WorkerSummary>;
}
export interface LogConfiguration {
  logDriver: string;
  options?: Record<string, string>;
  parameters?: Record<string, string>;
  error?: string;
}
export type LogDriver = string;

export type LogError = string;

export type LogicalOperator = "AND" | "OR";
export type LogOptions = Record<string, string>;
export type LogParameters = Record<string, string>;
export interface ManifestProperties {
  fileSystemLocationName?: string;
  rootPath: string;
  rootPathFormat: PathFormat;
  outputRelativeDirectories?: Array<string>;
  inputManifestPath?: string;
  inputManifestHash?: string;
}
export type ManifestPropertiesList = Array<ManifestProperties>;
export type MaxCount = number;

export type MaxFailedTasksCount = number;

export type MaxResults = number;

export type MaxRetriesPerTask = number;

export type MaxWorkerCount = number;

export type MembershipLevel = "VIEWER" | "CONTRIBUTOR" | "OWNER" | "MANAGER";
export type MemoryAmountMiB = number;

export interface MemoryMiBRange {
  min: number;
  max?: number;
}
export type MeteredProductId = string;

export interface MeteredProductSummary {
  productId: string;
  family: string;
  vendor: string;
  port: number;
}
export type MeteredProductSummaryList = Array<MeteredProductSummary>;
export type MinOneMaxInteger = number;

export type MinOneMaxTenThousand = number;

export type MinZeroMaxInteger = number;

export type MonitorId = string;

export type MonitorSummaries = Array<MonitorSummary>;
export interface MonitorSummary {
  monitorId: string;
  displayName: string;
  subdomain: string;
  url: string;
  roleArn: string;
  identityCenterInstanceArn: string;
  identityCenterApplicationArn: string;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export type NextItemOffset = number;

export type OutputRelativeDirectoriesList = Array<string>;
export interface ParameterFilterExpression {
  name: string;
  operator: ComparisonOperator;
  value: string;
}
export interface ParameterSortExpression {
  sortOrder: SortOrder;
  name: string;
}
export interface ParameterSpace {
  parameters: Array<StepParameter>;
  combination?: string;
}
export type ParameterString = string;

export type ParameterValue = string;

export type PathFormat = "windows" | "posix";
export interface PathMappingRule {
  sourcePathFormat: PathFormat;
  sourcePath: string;
  destinationPath: string;
}
export type PathMappingRules = Array<PathMappingRule>;
export type PathString = string;

export type Period = "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY";
export type PortNumber = number;

export interface PosixUser {
  user: string;
  group: string;
}
export type Priority = number;

export type ProcessExitCode = number;

export interface PutMeteredProductRequest {
  licenseEndpointId: string;
  productId: string;
}
export interface PutMeteredProductResponse {}
export type QueueBlockedReason =
  | "NO_BUDGET_CONFIGURED"
  | "BUDGET_THRESHOLD_REACHED";
export type QueueEnvironmentId = string;

export type QueueEnvironmentSummaries = Array<QueueEnvironmentSummary>;
export interface QueueEnvironmentSummary {
  queueEnvironmentId: string;
  name: string;
  priority: number;
}
export type QueueFleetAssociationStatus =
  | "ACTIVE"
  | "STOP_SCHEDULING_AND_COMPLETE_TASKS"
  | "STOP_SCHEDULING_AND_CANCEL_TASKS"
  | "STOPPED";
export type QueueFleetAssociationSummaries =
  Array<QueueFleetAssociationSummary>;
export interface QueueFleetAssociationSummary {
  queueId: string;
  fleetId: string;
  status: QueueFleetAssociationStatus;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export type QueueId = string;

export type QueueIds = Array<string>;
export type QueueLimitAssociationStatus =
  | "ACTIVE"
  | "STOP_LIMIT_USAGE_AND_COMPLETE_TASKS"
  | "STOP_LIMIT_USAGE_AND_CANCEL_TASKS"
  | "STOPPED";
export type QueueLimitAssociationSummaries =
  Array<QueueLimitAssociationSummary>;
export interface QueueLimitAssociationSummary {
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  queueId: string;
  limitId: string;
  status: QueueLimitAssociationStatus;
}
export interface QueueMember {
  farmId: string;
  queueId: string;
  principalId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
}
export type QueueMemberList = Array<QueueMember>;
export type QueueStatus = "IDLE" | "SCHEDULING" | "SCHEDULING_BLOCKED";
export type QueueSummaries = Array<QueueSummary>;
export interface QueueSummary {
  farmId: string;
  queueId: string;
  displayName: string;
  status: QueueStatus;
  defaultBudgetAction: DefaultQueueBudgetAction;
  blockedReason?: QueueBlockedReason;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export type RequiredFileSystemLocationNames = Array<string>;
export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly context?: Record<string, string>;
}> {}
export interface ResponseBudgetAction {
  type: BudgetActionType;
  thresholdPercentage: number;
  description?: string;
}
export type ResponseBudgetActionList = Array<ResponseBudgetAction>;
export type RunAs = "QUEUE_CONFIGURED_USER" | "WORKER_AGENT_USER";
export type S3BucketName = string;

export type S3Key = string;

export interface S3Location {
  bucketName: string;
  key: string;
}
export type S3Prefix = string;

interface _SearchFilterExpression {
  dateTimeFilter?: DateTimeFilterExpression;
  parameterFilter?: ParameterFilterExpression;
  searchTermFilter?: SearchTermFilterExpression;
  stringFilter?: StringFilterExpression;
  groupFilter?: SearchGroupedFilterExpressions;
}

export type SearchFilterExpression =
  | (_SearchFilterExpression & { dateTimeFilter: DateTimeFilterExpression })
  | (_SearchFilterExpression & { parameterFilter: ParameterFilterExpression })
  | (_SearchFilterExpression & { searchTermFilter: SearchTermFilterExpression })
  | (_SearchFilterExpression & { stringFilter: StringFilterExpression })
  | (_SearchFilterExpression & { groupFilter: SearchGroupedFilterExpressions });
export type SearchFilterExpressions = Array<SearchFilterExpression>;
export interface SearchGroupedFilterExpressions {
  filters: Array<SearchFilterExpression>;
  operator: LogicalOperator;
}
export interface SearchJobsRequest {
  farmId: string;
  queueIds: Array<string>;
  filterExpressions?: SearchGroupedFilterExpressions;
  sortExpressions?: Array<SearchSortExpression>;
  itemOffset: number;
  pageSize?: number;
}
export interface SearchJobsResponse {
  jobs: Array<JobSearchSummary>;
  nextItemOffset?: number;
  totalResults: number;
}
interface _SearchSortExpression {
  userJobsFirst?: UserJobsFirst;
  fieldSort?: FieldSortExpression;
  parameterSort?: ParameterSortExpression;
}

export type SearchSortExpression =
  | (_SearchSortExpression & { userJobsFirst: UserJobsFirst })
  | (_SearchSortExpression & { fieldSort: FieldSortExpression })
  | (_SearchSortExpression & { parameterSort: ParameterSortExpression });
export type SearchSortExpressions = Array<SearchSortExpression>;
export interface SearchStepsRequest {
  farmId: string;
  queueIds: Array<string>;
  jobId?: string;
  filterExpressions?: SearchGroupedFilterExpressions;
  sortExpressions?: Array<SearchSortExpression>;
  itemOffset: number;
  pageSize?: number;
}
export interface SearchStepsResponse {
  steps: Array<StepSearchSummary>;
  nextItemOffset?: number;
  totalResults: number;
}
export interface SearchTasksRequest {
  farmId: string;
  queueIds: Array<string>;
  jobId?: string;
  filterExpressions?: SearchGroupedFilterExpressions;
  sortExpressions?: Array<SearchSortExpression>;
  itemOffset: number;
  pageSize?: number;
}
export interface SearchTasksResponse {
  tasks: Array<TaskSearchSummary>;
  nextItemOffset?: number;
  totalResults: number;
}
export type SearchTerm = string;

export interface SearchTermFilterExpression {
  searchTerm: string;
  matchType?: SearchTermMatchingType;
}
export type SearchTermMatchingType = "FUZZY_MATCH" | "CONTAINS";
export interface SearchWorkersRequest {
  farmId: string;
  fleetIds: Array<string>;
  filterExpressions?: SearchGroupedFilterExpressions;
  sortExpressions?: Array<SearchSortExpression>;
  itemOffset: number;
  pageSize?: number;
}
export interface SearchWorkersResponse {
  workers: Array<WorkerSearchSummary>;
  nextItemOffset?: number;
  totalResults: number;
}
export type SecretAccessKey = string;

export type SecurityGroupId = string;

export type SecurityGroupIdList = Array<string>;
export interface ServiceManagedEc2FleetConfiguration {
  instanceCapabilities: ServiceManagedEc2InstanceCapabilities;
  instanceMarketOptions: ServiceManagedEc2InstanceMarketOptions;
  vpcConfiguration?: VpcConfiguration;
  storageProfileId?: string;
}
export interface ServiceManagedEc2InstanceCapabilities {
  vCpuCount: VCpuCountRange;
  memoryMiB: MemoryMiBRange;
  osFamily: ServiceManagedFleetOperatingSystemFamily;
  cpuArchitectureType: CpuArchitectureType;
  rootEbsVolume?: Ec2EbsVolume;
  acceleratorCapabilities?: AcceleratorCapabilities;
  allowedInstanceTypes?: Array<string>;
  excludedInstanceTypes?: Array<string>;
  customAmounts?: Array<FleetAmountCapability>;
  customAttributes?: Array<FleetAttributeCapability>;
}
export interface ServiceManagedEc2InstanceMarketOptions {
  type: Ec2MarketType;
}
export type ServiceManagedFleetOperatingSystemFamily = "WINDOWS" | "LINUX";
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly reason: ServiceQuotaExceededExceptionReason;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
  readonly resourceId?: string;
  readonly context?: Record<string, string>;
}> {}
export type ServiceQuotaExceededExceptionReason =
  | "SERVICE_QUOTA_EXCEEDED_EXCEPTION"
  | "KMS_KEY_LIMIT_EXCEEDED"
  | "DEPENDENCY_LIMIT_EXCEEDED";
interface _SessionActionDefinition {
  envEnter?: EnvironmentEnterSessionActionDefinition;
  envExit?: EnvironmentExitSessionActionDefinition;
  taskRun?: TaskRunSessionActionDefinition;
  syncInputJobAttachments?: SyncInputJobAttachmentsSessionActionDefinition;
}

export type SessionActionDefinition =
  | (_SessionActionDefinition & {
      envEnter: EnvironmentEnterSessionActionDefinition;
    })
  | (_SessionActionDefinition & {
      envExit: EnvironmentExitSessionActionDefinition;
    })
  | (_SessionActionDefinition & { taskRun: TaskRunSessionActionDefinition })
  | (_SessionActionDefinition & {
      syncInputJobAttachments: SyncInputJobAttachmentsSessionActionDefinition;
    });
interface _SessionActionDefinitionSummary {
  envEnter?: EnvironmentEnterSessionActionDefinitionSummary;
  envExit?: EnvironmentExitSessionActionDefinitionSummary;
  taskRun?: TaskRunSessionActionDefinitionSummary;
  syncInputJobAttachments?: SyncInputJobAttachmentsSessionActionDefinitionSummary;
}

export type SessionActionDefinitionSummary =
  | (_SessionActionDefinitionSummary & {
      envEnter: EnvironmentEnterSessionActionDefinitionSummary;
    })
  | (_SessionActionDefinitionSummary & {
      envExit: EnvironmentExitSessionActionDefinitionSummary;
    })
  | (_SessionActionDefinitionSummary & {
      taskRun: TaskRunSessionActionDefinitionSummary;
    })
  | (_SessionActionDefinitionSummary & {
      syncInputJobAttachments: SyncInputJobAttachmentsSessionActionDefinitionSummary;
    });
export type SessionActionId = string;

export type SessionActionIdList = Array<string>;
export type SessionActionProgressMessage = string;

export type SessionActionProgressPercent = number;

export type SessionActionStatus =
  | "ASSIGNED"
  | "RUNNING"
  | "CANCELING"
  | "SUCCEEDED"
  | "FAILED"
  | "INTERRUPTED"
  | "CANCELED"
  | "NEVER_ATTEMPTED"
  | "SCHEDULED"
  | "RECLAIMING"
  | "RECLAIMED";
export type SessionActionSummaries = Array<SessionActionSummary>;
export interface SessionActionSummary {
  sessionActionId: string;
  status: SessionActionStatus;
  startedAt?: Date | string;
  endedAt?: Date | string;
  workerUpdatedAt?: Date | string;
  progressPercent?: number;
  definition: SessionActionDefinitionSummary;
  manifests?: Array<TaskRunManifestPropertiesResponse>;
}
export type SessionId = string;

export type SessionLifecycleStatus =
  | "STARTED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_SUCCEEDED"
  | "UPDATE_FAILED"
  | "ENDED";
export type SessionLifecycleTargetStatus = "ENDED";
export type SessionsStatisticsAggregationStatus =
  | "IN_PROGRESS"
  | "TIMEOUT"
  | "FAILED"
  | "COMPLETED";
interface _SessionsStatisticsResources {
  queueIds?: Array<string>;
  fleetIds?: Array<string>;
}

export type SessionsStatisticsResources =
  | (_SessionsStatisticsResources & { queueIds: Array<string> })
  | (_SessionsStatisticsResources & { fleetIds: Array<string> });
export type SessionSummaries = Array<SessionSummary>;
export interface SessionSummary {
  sessionId: string;
  fleetId: string;
  workerId: string;
  startedAt: Date | string;
  lifecycleStatus: SessionLifecycleStatus;
  endedAt?: Date | string;
  updatedAt?: Date | string;
  updatedBy?: string;
  targetLifecycleStatus?: SessionLifecycleTargetStatus;
}
export type SessionToken = string;

export type SortOrder = "ASCENDING" | "DESCENDING";
export type StartedAt = Date | string;

export type StartsAt = Date | string;

export interface StartSessionsStatisticsAggregationRequest {
  farmId: string;
  resourceIds: SessionsStatisticsResources;
  startTime: Date | string;
  endTime: Date | string;
  timezone?: string;
  period?: Period;
  groupBy: Array<UsageGroupByField>;
  statistics: Array<UsageStatistic>;
}
export interface StartSessionsStatisticsAggregationResponse {
  aggregationId: string;
}
export interface Statistics {
  queueId?: string;
  fleetId?: string;
  jobId?: string;
  jobName?: string;
  userId?: string;
  usageType?: UsageType;
  licenseProduct?: string;
  instanceType?: string;
  count: number;
  costInUsd: Stats;
  runtimeInSeconds: Stats;
  aggregationStartTime?: Date | string;
  aggregationEndTime?: Date | string;
}
export type StatisticsList = Array<Statistics>;
export interface Stats {
  min?: number;
  max?: number;
  avg?: number;
  sum?: number;
}
export type StatusMessage = string;

export type StepAmountCapabilities = Array<StepAmountCapability>;
export interface StepAmountCapability {
  name: string;
  min?: number;
  max?: number;
  value?: number;
}
export type StepAttributeCapabilities = Array<StepAttributeCapability>;
export interface StepAttributeCapability {
  name: string;
  anyOf?: Array<string>;
  allOf?: Array<string>;
}
export interface StepConsumer {
  stepId: string;
  status: DependencyConsumerResolutionStatus;
}
export type StepConsumers = Array<StepConsumer>;
export type StepDependencies = Array<StepDependency>;
export interface StepDependency {
  stepId: string;
  status: DependencyConsumerResolutionStatus;
}
export type StepDescription = string;

export interface StepDetailsEntity {
  jobId: string;
  stepId: string;
  schemaVersion: string;
  template: unknown;
  dependencies: Array<string>;
}
export interface StepDetailsError {
  jobId: string;
  stepId: string;
  code: JobEntityErrorCode;
  message: string;
}
export interface StepDetailsIdentifiers {
  jobId: string;
  stepId: string;
}
export type StepId = string;

export type StepLifecycleStatus =
  | "CREATE_COMPLETE"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED"
  | "UPDATE_SUCCEEDED";
export type StepName = string;

export interface StepParameter {
  name: string;
  type: StepParameterType;
}
export type StepParameterList = Array<StepParameter>;
export type StepParameterName = string;

export type StepParameterType =
  | "INT"
  | "FLOAT"
  | "STRING"
  | "PATH"
  | "CHUNK_INT";
export interface StepRequiredCapabilities {
  attributes: Array<StepAttributeCapability>;
  amounts: Array<StepAmountCapability>;
}
export type StepSearchSummaries = Array<StepSearchSummary>;
export interface StepSearchSummary {
  stepId?: string;
  jobId?: string;
  queueId?: string;
  name?: string;
  lifecycleStatus?: StepLifecycleStatus;
  lifecycleStatusMessage?: string;
  taskRunStatus?: TaskRunStatus;
  targetTaskRunStatus?: StepTargetTaskRunStatus;
  taskRunStatusCounts?: Record<TaskRunStatus, number>;
  taskFailureRetryCount?: number;
  createdAt?: Date | string;
  createdBy?: string;
  startedAt?: Date | string;
  endedAt?: Date | string;
  updatedAt?: Date | string;
  updatedBy?: string;
  parameterSpace?: ParameterSpace;
}
export type StepSummaries = Array<StepSummary>;
export interface StepSummary {
  stepId: string;
  name: string;
  lifecycleStatus: StepLifecycleStatus;
  lifecycleStatusMessage?: string;
  taskRunStatus: TaskRunStatus;
  taskRunStatusCounts: Record<TaskRunStatus, number>;
  taskFailureRetryCount?: number;
  targetTaskRunStatus?: StepTargetTaskRunStatus;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  startedAt?: Date | string;
  endedAt?: Date | string;
  dependencyCounts?: DependencyCounts;
}
export type StepTargetTaskRunStatus =
  | "READY"
  | "FAILED"
  | "SUCCEEDED"
  | "CANCELED"
  | "SUSPENDED"
  | "PENDING";
export type StorageProfileId = string;

export type StorageProfileOperatingSystemFamily = "WINDOWS" | "LINUX" | "MACOS";
export type StorageProfileSummaries = Array<StorageProfileSummary>;
export interface StorageProfileSummary {
  storageProfileId: string;
  displayName: string;
  osFamily: StorageProfileOperatingSystemFamily;
}
export type DeadlineString = string;

export type StringFilter = string;

export interface StringFilterExpression {
  name: string;
  operator: ComparisonOperator;
  value: string;
}
export type StringList = Array<string>;
export type StructureIdList = Array<string>;
export type Subdomain = string;

export type SubnetId = string;

export type SubnetIdList = Array<string>;
export interface SyncInputJobAttachmentsSessionActionDefinition {
  stepId?: string;
}
export interface SyncInputJobAttachmentsSessionActionDefinitionSummary {
  stepId?: string;
}
export type TagPropagationMode =
  | "NO_PROPAGATION"
  | "PROPAGATE_TAGS_TO_WORKERS_AT_LAUNCH";
export interface TagResourceRequest {
  resourceArn: string;
  tags?: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TaskFailureRetryCount = number;

export type TaskId = string;

export type TaskParameters = Record<string, TaskParameterValue>;
interface _TaskParameterValue {
  int?: string;
  float?: string;
  string?: string;
  path?: string;
  chunkInt?: string;
}

export type TaskParameterValue =
  | (_TaskParameterValue & { int: string })
  | (_TaskParameterValue & { float: string })
  | (_TaskParameterValue & { string: string })
  | (_TaskParameterValue & { path: string })
  | (_TaskParameterValue & { chunkInt: string });
export type TaskRetryCount = number;

export type TaskRunManifestPropertiesListRequest =
  Array<TaskRunManifestPropertiesRequest>;
export type TaskRunManifestPropertiesListResponse =
  Array<TaskRunManifestPropertiesResponse>;
export interface TaskRunManifestPropertiesRequest {
  outputManifestPath?: string;
  outputManifestHash?: string;
}
export interface TaskRunManifestPropertiesResponse {
  outputManifestPath?: string;
  outputManifestHash?: string;
}
export interface TaskRunSessionActionDefinition {
  taskId?: string;
  stepId: string;
  parameters: Record<string, TaskParameterValue>;
}
export interface TaskRunSessionActionDefinitionSummary {
  taskId?: string;
  stepId: string;
  parameters?: Record<string, TaskParameterValue>;
}
export type TaskRunStatus =
  | "PENDING"
  | "READY"
  | "ASSIGNED"
  | "STARTING"
  | "SCHEDULED"
  | "INTERRUPTING"
  | "RUNNING"
  | "SUSPENDED"
  | "CANCELED"
  | "FAILED"
  | "SUCCEEDED"
  | "NOT_COMPATIBLE";
export type TaskRunStatusCounts = Record<TaskRunStatus, number>;
export type TaskSearchSummaries = Array<TaskSearchSummary>;
export interface TaskSearchSummary {
  taskId?: string;
  stepId?: string;
  jobId?: string;
  queueId?: string;
  runStatus?: TaskRunStatus;
  targetRunStatus?: TaskTargetRunStatus;
  parameters?: Record<string, TaskParameterValue>;
  failureRetryCount?: number;
  startedAt?: Date | string;
  endedAt?: Date | string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export type TaskSummaries = Array<TaskSummary>;
export interface TaskSummary {
  taskId: string;
  createdAt: Date | string;
  createdBy: string;
  runStatus: TaskRunStatus;
  targetRunStatus?: TaskTargetRunStatus;
  failureRetryCount?: number;
  parameters?: Record<string, TaskParameterValue>;
  startedAt?: Date | string;
  endedAt?: Date | string;
  updatedAt?: Date | string;
  updatedBy?: string;
  latestSessionActionId?: string;
}
export type TaskTargetRunStatus =
  | "READY"
  | "FAILED"
  | "SUCCEEDED"
  | "CANCELED"
  | "SUSPENDED"
  | "PENDING";
export type ThresholdPercentage = number;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
  readonly context?: Record<string, string>;
}> {}
export type Timestamp = Date | string;

export type Timezone = string;

export type TotalResults = number;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateBudgetRequest {
  clientToken?: string;
  farmId: string;
  budgetId: string;
  displayName?: string;
  description?: string;
  status?: BudgetStatus;
  approximateDollarLimit?: number;
  actionsToAdd?: Array<BudgetActionToAdd>;
  actionsToRemove?: Array<BudgetActionToRemove>;
  schedule?: BudgetSchedule;
}
export interface UpdateBudgetResponse {}
export type UpdatedAt = Date | string;

export type UpdatedBy = string;

export interface UpdatedSessionActionInfo {
  completedStatus?: CompletedStatus;
  processExitCode?: number;
  progressMessage?: string;
  startedAt?: Date | string;
  endedAt?: Date | string;
  updatedAt?: Date | string;
  progressPercent?: number;
  manifests?: Array<TaskRunManifestPropertiesRequest>;
}
export type UpdatedSessionActions = Record<string, UpdatedSessionActionInfo>;
export type UpdatedWorkerStatus = "STARTED" | "STOPPING" | "STOPPED";
export interface UpdateFarmRequest {
  farmId: string;
  displayName?: string;
  description?: string;
}
export interface UpdateFarmResponse {}
export interface UpdateFleetRequest {
  clientToken?: string;
  farmId: string;
  fleetId: string;
  displayName?: string;
  description?: string;
  roleArn?: string;
  minWorkerCount?: number;
  maxWorkerCount?: number;
  configuration?: FleetConfiguration;
  hostConfiguration?: HostConfiguration;
}
export interface UpdateFleetResponse {}
export type UpdateJobLifecycleStatus = "ARCHIVED";
export interface UpdateJobRequest {
  clientToken?: string;
  targetTaskRunStatus?: JobTargetTaskRunStatus;
  priority?: number;
  maxFailedTasksCount?: number;
  maxRetriesPerTask?: number;
  lifecycleStatus?: UpdateJobLifecycleStatus;
  maxWorkerCount?: number;
  farmId: string;
  queueId: string;
  jobId: string;
}
export interface UpdateJobResponse {}
export interface UpdateLimitRequest {
  farmId: string;
  limitId: string;
  displayName?: string;
  description?: string;
  maxCount?: number;
}
export interface UpdateLimitResponse {}
export interface UpdateMonitorRequest {
  monitorId: string;
  subdomain?: string;
  displayName?: string;
  roleArn?: string;
}
export interface UpdateMonitorResponse {}
export interface UpdateQueueEnvironmentRequest {
  clientToken?: string;
  farmId: string;
  queueId: string;
  queueEnvironmentId: string;
  priority?: number;
  templateType?: EnvironmentTemplateType;
  template?: string;
}
export interface UpdateQueueEnvironmentResponse {}
export interface UpdateQueueFleetAssociationRequest {
  farmId: string;
  queueId: string;
  fleetId: string;
  status: UpdateQueueFleetAssociationStatus;
}
export interface UpdateQueueFleetAssociationResponse {}
export type UpdateQueueFleetAssociationStatus =
  | "ACTIVE"
  | "STOP_SCHEDULING_AND_COMPLETE_TASKS"
  | "STOP_SCHEDULING_AND_CANCEL_TASKS";
export interface UpdateQueueLimitAssociationRequest {
  farmId: string;
  queueId: string;
  limitId: string;
  status: UpdateQueueLimitAssociationStatus;
}
export interface UpdateQueueLimitAssociationResponse {}
export type UpdateQueueLimitAssociationStatus =
  | "ACTIVE"
  | "STOP_LIMIT_USAGE_AND_COMPLETE_TASKS"
  | "STOP_LIMIT_USAGE_AND_CANCEL_TASKS";
export interface UpdateQueueRequest {
  clientToken?: string;
  farmId: string;
  queueId: string;
  displayName?: string;
  description?: string;
  defaultBudgetAction?: DefaultQueueBudgetAction;
  jobAttachmentSettings?: JobAttachmentSettings;
  roleArn?: string;
  jobRunAsUser?: JobRunAsUser;
  requiredFileSystemLocationNamesToAdd?: Array<string>;
  requiredFileSystemLocationNamesToRemove?: Array<string>;
  allowedStorageProfileIdsToAdd?: Array<string>;
  allowedStorageProfileIdsToRemove?: Array<string>;
}
export interface UpdateQueueResponse {}
export interface UpdateSessionRequest {
  clientToken?: string;
  targetLifecycleStatus: SessionLifecycleTargetStatus;
  farmId: string;
  queueId: string;
  jobId: string;
  sessionId: string;
}
export interface UpdateSessionResponse {}
export interface UpdateStepRequest {
  targetTaskRunStatus: StepTargetTaskRunStatus;
  clientToken?: string;
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
}
export interface UpdateStepResponse {}
export interface UpdateStorageProfileRequest {
  clientToken?: string;
  farmId: string;
  storageProfileId: string;
  displayName?: string;
  osFamily?: StorageProfileOperatingSystemFamily;
  fileSystemLocationsToAdd?: Array<FileSystemLocation>;
  fileSystemLocationsToRemove?: Array<FileSystemLocation>;
}
export interface UpdateStorageProfileResponse {}
export interface UpdateTaskRequest {
  clientToken?: string;
  targetRunStatus: TaskTargetRunStatus;
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  taskId: string;
}
export interface UpdateTaskResponse {}
export interface UpdateWorkerRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
  status?: UpdatedWorkerStatus;
  capabilities?: WorkerCapabilities;
  hostProperties?: HostPropertiesRequest;
}
export interface UpdateWorkerResponse {
  log?: LogConfiguration;
  hostConfiguration?: HostConfiguration;
}
export type UpdateWorkerScheduleInterval = number;

export interface UpdateWorkerScheduleRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
  updatedSessionActions?: Record<string, UpdatedSessionActionInfo>;
}
export interface UpdateWorkerScheduleResponse {
  assignedSessions: Record<string, AssignedSession>;
  cancelSessionActions: Record<string, Array<string>>;
  desiredWorkerStatus?: DesiredWorkerStatus;
  updateIntervalSeconds: number;
}
export type Url = string;

export type UsageGroupBy = Array<UsageGroupByField>;
export type UsageGroupByField =
  | "QUEUE_ID"
  | "FLEET_ID"
  | "JOB_ID"
  | "USER_ID"
  | "USAGE_TYPE"
  | "INSTANCE_TYPE"
  | "LICENSE_PRODUCT";
export type UsageStatistic = "SUM" | "MIN" | "MAX" | "AVG";
export type UsageStatistics = Array<UsageStatistic>;
interface _UsageTrackingResource {
  queueId?: string;
}

export type UsageTrackingResource = _UsageTrackingResource & {
  queueId: string;
};
export type UsageType = "COMPUTE" | "LICENSE";
export type UserId = string;

export interface UserJobsFirst {
  userIdentityId: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: ValidationExceptionReason;
  readonly fieldList?: Array<ValidationExceptionField>;
  readonly context?: Record<string, string>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER";
export interface VCpuCountRange {
  min: number;
  max?: number;
}
export interface VpcConfiguration {
  resourceConfigurationArns?: Array<string>;
}
export type VpcId = string;

export type VpcResourceConfigurationArn = string;

export type VpcResourceConfigurationArns = Array<string>;
export interface WindowsUser {
  user: string;
  passwordArn: string;
}
export interface WorkerAmountCapability {
  name: string;
  value: number;
}
export type WorkerAmountCapabilityList = Array<WorkerAmountCapability>;
export interface WorkerAttributeCapability {
  name: string;
  values: Array<string>;
}
export type WorkerAttributeCapabilityList = Array<WorkerAttributeCapability>;
export interface WorkerCapabilities {
  amounts: Array<WorkerAmountCapability>;
  attributes: Array<WorkerAttributeCapability>;
}
export type WorkerId = string;

export type WorkerSearchSummaries = Array<WorkerSearchSummary>;
export interface WorkerSearchSummary {
  fleetId?: string;
  workerId?: string;
  status?: WorkerStatus;
  hostProperties?: HostPropertiesResponse;
  createdBy?: string;
  createdAt?: Date | string;
  updatedBy?: string;
  updatedAt?: Date | string;
}
export interface WorkerSessionSummary {
  sessionId: string;
  queueId: string;
  jobId: string;
  startedAt: Date | string;
  lifecycleStatus: SessionLifecycleStatus;
  endedAt?: Date | string;
  targetLifecycleStatus?: SessionLifecycleTargetStatus;
}
export type WorkerStatus =
  | "CREATED"
  | "STARTED"
  | "STOPPING"
  | "STOPPED"
  | "NOT_RESPONDING"
  | "NOT_COMPATIBLE"
  | "RUNNING"
  | "IDLE";
export type WorkerSummaries = Array<WorkerSummary>;
export interface WorkerSummary {
  workerId: string;
  farmId: string;
  fleetId: string;
  status: WorkerStatus;
  hostProperties?: HostPropertiesResponse;
  log?: LogConfiguration;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
}
export declare namespace CreateQueueFleetAssociation {
  export type Input = CreateQueueFleetAssociationRequest;
  export type Output = CreateQueueFleetAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateQueueLimitAssociation {
  export type Input = CreateQueueLimitAssociationRequest;
  export type Output = CreateQueueLimitAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteQueueFleetAssociation {
  export type Input = DeleteQueueFleetAssociationRequest;
  export type Output = DeleteQueueFleetAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteQueueLimitAssociation {
  export type Input = DeleteQueueLimitAssociationRequest;
  export type Output = DeleteQueueLimitAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQueueFleetAssociation {
  export type Input = GetQueueFleetAssociationRequest;
  export type Output = GetQueueFleetAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQueueLimitAssociation {
  export type Input = GetQueueLimitAssociationRequest;
  export type Output = GetQueueLimitAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSessionsStatisticsAggregation {
  export type Input = GetSessionsStatisticsAggregationRequest;
  export type Output = GetSessionsStatisticsAggregationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAvailableMeteredProducts {
  export type Input = ListAvailableMeteredProductsRequest;
  export type Output = ListAvailableMeteredProductsResponse;
  export type Error =
    | InternalServerErrorException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListQueueFleetAssociations {
  export type Input = ListQueueFleetAssociationsRequest;
  export type Output = ListQueueFleetAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListQueueLimitAssociations {
  export type Input = ListQueueLimitAssociationsRequest;
  export type Output = ListQueueLimitAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchJobs {
  export type Input = SearchJobsRequest;
  export type Output = SearchJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchSteps {
  export type Input = SearchStepsRequest;
  export type Output = SearchStepsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchTasks {
  export type Input = SearchTasksRequest;
  export type Output = SearchTasksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchWorkers {
  export type Input = SearchWorkersRequest;
  export type Output = SearchWorkersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartSessionsStatisticsAggregation {
  export type Input = StartSessionsStatisticsAggregationRequest;
  export type Output = StartSessionsStatisticsAggregationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateQueueFleetAssociation {
  export type Input = UpdateQueueFleetAssociationRequest;
  export type Output = UpdateQueueFleetAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateQueueLimitAssociation {
  export type Input = UpdateQueueLimitAssociationRequest;
  export type Output = UpdateQueueLimitAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateMemberToFarm {
  export type Input = AssociateMemberToFarmRequest;
  export type Output = AssociateMemberToFarmResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateMemberToFleet {
  export type Input = AssociateMemberToFleetRequest;
  export type Output = AssociateMemberToFleetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateMemberToJob {
  export type Input = AssociateMemberToJobRequest;
  export type Output = AssociateMemberToJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateMemberToQueue {
  export type Input = AssociateMemberToQueueRequest;
  export type Output = AssociateMemberToQueueResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssumeFleetRoleForRead {
  export type Input = AssumeFleetRoleForReadRequest;
  export type Output = AssumeFleetRoleForReadResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssumeFleetRoleForWorker {
  export type Input = AssumeFleetRoleForWorkerRequest;
  export type Output = AssumeFleetRoleForWorkerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssumeQueueRoleForRead {
  export type Input = AssumeQueueRoleForReadRequest;
  export type Output = AssumeQueueRoleForReadResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssumeQueueRoleForUser {
  export type Input = AssumeQueueRoleForUserRequest;
  export type Output = AssumeQueueRoleForUserResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssumeQueueRoleForWorker {
  export type Input = AssumeQueueRoleForWorkerRequest;
  export type Output = AssumeQueueRoleForWorkerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetJobEntity {
  export type Input = BatchGetJobEntityRequest;
  export type Output = BatchGetJobEntityResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CopyJobTemplate {
  export type Input = CopyJobTemplateRequest;
  export type Output = CopyJobTemplateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateBudget {
  export type Input = CreateBudgetRequest;
  export type Output = CreateBudgetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFarm {
  export type Input = CreateFarmRequest;
  export type Output = CreateFarmResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFleet {
  export type Input = CreateFleetRequest;
  export type Output = CreateFleetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateJob {
  export type Input = CreateJobRequest;
  export type Output = CreateJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLicenseEndpoint {
  export type Input = CreateLicenseEndpointRequest;
  export type Output = CreateLicenseEndpointResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLimit {
  export type Input = CreateLimitRequest;
  export type Output = CreateLimitResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateMonitor {
  export type Input = CreateMonitorRequest;
  export type Output = CreateMonitorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateQueue {
  export type Input = CreateQueueRequest;
  export type Output = CreateQueueResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateQueueEnvironment {
  export type Input = CreateQueueEnvironmentRequest;
  export type Output = CreateQueueEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateStorageProfile {
  export type Input = CreateStorageProfileRequest;
  export type Output = CreateStorageProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWorker {
  export type Input = CreateWorkerRequest;
  export type Output = CreateWorkerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteBudget {
  export type Input = DeleteBudgetRequest;
  export type Output = DeleteBudgetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFarm {
  export type Input = DeleteFarmRequest;
  export type Output = DeleteFarmResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFleet {
  export type Input = DeleteFleetRequest;
  export type Output = DeleteFleetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLicenseEndpoint {
  export type Input = DeleteLicenseEndpointRequest;
  export type Output = DeleteLicenseEndpointResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLimit {
  export type Input = DeleteLimitRequest;
  export type Output = DeleteLimitResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMeteredProduct {
  export type Input = DeleteMeteredProductRequest;
  export type Output = DeleteMeteredProductResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMonitor {
  export type Input = DeleteMonitorRequest;
  export type Output = DeleteMonitorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteQueue {
  export type Input = DeleteQueueRequest;
  export type Output = DeleteQueueResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteQueueEnvironment {
  export type Input = DeleteQueueEnvironmentRequest;
  export type Output = DeleteQueueEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteStorageProfile {
  export type Input = DeleteStorageProfileRequest;
  export type Output = DeleteStorageProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWorker {
  export type Input = DeleteWorkerRequest;
  export type Output = DeleteWorkerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateMemberFromFarm {
  export type Input = DisassociateMemberFromFarmRequest;
  export type Output = DisassociateMemberFromFarmResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateMemberFromFleet {
  export type Input = DisassociateMemberFromFleetRequest;
  export type Output = DisassociateMemberFromFleetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateMemberFromJob {
  export type Input = DisassociateMemberFromJobRequest;
  export type Output = DisassociateMemberFromJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateMemberFromQueue {
  export type Input = DisassociateMemberFromQueueRequest;
  export type Output = DisassociateMemberFromQueueResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBudget {
  export type Input = GetBudgetRequest;
  export type Output = GetBudgetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFarm {
  export type Input = GetFarmRequest;
  export type Output = GetFarmResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFleet {
  export type Input = GetFleetRequest;
  export type Output = GetFleetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetJob {
  export type Input = GetJobRequest;
  export type Output = GetJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLicenseEndpoint {
  export type Input = GetLicenseEndpointRequest;
  export type Output = GetLicenseEndpointResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLimit {
  export type Input = GetLimitRequest;
  export type Output = GetLimitResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMonitor {
  export type Input = GetMonitorRequest;
  export type Output = GetMonitorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQueue {
  export type Input = GetQueueRequest;
  export type Output = GetQueueResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQueueEnvironment {
  export type Input = GetQueueEnvironmentRequest;
  export type Output = GetQueueEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSession {
  export type Input = GetSessionRequest;
  export type Output = GetSessionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSessionAction {
  export type Input = GetSessionActionRequest;
  export type Output = GetSessionActionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStep {
  export type Input = GetStepRequest;
  export type Output = GetStepResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStorageProfile {
  export type Input = GetStorageProfileRequest;
  export type Output = GetStorageProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStorageProfileForQueue {
  export type Input = GetStorageProfileForQueueRequest;
  export type Output = GetStorageProfileForQueueResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTask {
  export type Input = GetTaskRequest;
  export type Output = GetTaskResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWorker {
  export type Input = GetWorkerRequest;
  export type Output = GetWorkerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBudgets {
  export type Input = ListBudgetsRequest;
  export type Output = ListBudgetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFarmMembers {
  export type Input = ListFarmMembersRequest;
  export type Output = ListFarmMembersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFarms {
  export type Input = ListFarmsRequest;
  export type Output = ListFarmsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFleetMembers {
  export type Input = ListFleetMembersRequest;
  export type Output = ListFleetMembersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFleets {
  export type Input = ListFleetsRequest;
  export type Output = ListFleetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobMembers {
  export type Input = ListJobMembersRequest;
  export type Output = ListJobMembersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobParameterDefinitions {
  export type Input = ListJobParameterDefinitionsRequest;
  export type Output = ListJobParameterDefinitionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = ListJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLicenseEndpoints {
  export type Input = ListLicenseEndpointsRequest;
  export type Output = ListLicenseEndpointsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLimits {
  export type Input = ListLimitsRequest;
  export type Output = ListLimitsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMeteredProducts {
  export type Input = ListMeteredProductsRequest;
  export type Output = ListMeteredProductsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMonitors {
  export type Input = ListMonitorsRequest;
  export type Output = ListMonitorsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListQueueEnvironments {
  export type Input = ListQueueEnvironmentsRequest;
  export type Output = ListQueueEnvironmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListQueueMembers {
  export type Input = ListQueueMembersRequest;
  export type Output = ListQueueMembersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListQueues {
  export type Input = ListQueuesRequest;
  export type Output = ListQueuesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSessionActions {
  export type Input = ListSessionActionsRequest;
  export type Output = ListSessionActionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSessions {
  export type Input = ListSessionsRequest;
  export type Output = ListSessionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSessionsForWorker {
  export type Input = ListSessionsForWorkerRequest;
  export type Output = ListSessionsForWorkerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStepConsumers {
  export type Input = ListStepConsumersRequest;
  export type Output = ListStepConsumersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStepDependencies {
  export type Input = ListStepDependenciesRequest;
  export type Output = ListStepDependenciesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSteps {
  export type Input = ListStepsRequest;
  export type Output = ListStepsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStorageProfiles {
  export type Input = ListStorageProfilesRequest;
  export type Output = ListStorageProfilesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStorageProfilesForQueue {
  export type Input = ListStorageProfilesForQueueRequest;
  export type Output = ListStorageProfilesForQueueResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTasks {
  export type Input = ListTasksRequest;
  export type Output = ListTasksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWorkers {
  export type Input = ListWorkersRequest;
  export type Output = ListWorkersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutMeteredProduct {
  export type Input = PutMeteredProductRequest;
  export type Output = PutMeteredProductResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateBudget {
  export type Input = UpdateBudgetRequest;
  export type Output = UpdateBudgetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFarm {
  export type Input = UpdateFarmRequest;
  export type Output = UpdateFarmResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFleet {
  export type Input = UpdateFleetRequest;
  export type Output = UpdateFleetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateJob {
  export type Input = UpdateJobRequest;
  export type Output = UpdateJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLimit {
  export type Input = UpdateLimitRequest;
  export type Output = UpdateLimitResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMonitor {
  export type Input = UpdateMonitorRequest;
  export type Output = UpdateMonitorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateQueue {
  export type Input = UpdateQueueRequest;
  export type Output = UpdateQueueResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateQueueEnvironment {
  export type Input = UpdateQueueEnvironmentRequest;
  export type Output = UpdateQueueEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSession {
  export type Input = UpdateSessionRequest;
  export type Output = UpdateSessionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateStep {
  export type Input = UpdateStepRequest;
  export type Output = UpdateStepResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateStorageProfile {
  export type Input = UpdateStorageProfileRequest;
  export type Output = UpdateStorageProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTask {
  export type Input = UpdateTaskRequest;
  export type Output = UpdateTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorker {
  export type Input = UpdateWorkerRequest;
  export type Output = UpdateWorkerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkerSchedule {
  export type Input = UpdateWorkerScheduleRequest;
  export type Output = UpdateWorkerScheduleResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "deadline",
  version: "2023-10-12",
  protocol: "restJson1",
  operations: {
    CreateQueueFleetAssociation:
      "PUT /2023-10-12/farms/{farmId}/queue-fleet-associations",
    CreateQueueLimitAssociation:
      "PUT /2023-10-12/farms/{farmId}/queue-limit-associations",
    DeleteQueueFleetAssociation:
      "DELETE /2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}",
    DeleteQueueLimitAssociation:
      "DELETE /2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}",
    GetQueueFleetAssociation:
      "GET /2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}",
    GetQueueLimitAssociation:
      "GET /2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}",
    GetSessionsStatisticsAggregation:
      "GET /2023-10-12/farms/{farmId}/sessions-statistics-aggregation",
    ListAvailableMeteredProducts: "GET /2023-10-12/metered-products",
    ListQueueFleetAssociations:
      "GET /2023-10-12/farms/{farmId}/queue-fleet-associations",
    ListQueueLimitAssociations:
      "GET /2023-10-12/farms/{farmId}/queue-limit-associations",
    ListTagsForResource: "GET /2023-10-12/tags/{resourceArn}",
    SearchJobs: "POST /2023-10-12/farms/{farmId}/search/jobs",
    SearchSteps: "POST /2023-10-12/farms/{farmId}/search/steps",
    SearchTasks: "POST /2023-10-12/farms/{farmId}/search/tasks",
    SearchWorkers: "POST /2023-10-12/farms/{farmId}/search/workers",
    StartSessionsStatisticsAggregation:
      "POST /2023-10-12/farms/{farmId}/sessions-statistics-aggregation",
    TagResource: "POST /2023-10-12/tags/{resourceArn}",
    UntagResource: "DELETE /2023-10-12/tags/{resourceArn}",
    UpdateQueueFleetAssociation:
      "PATCH /2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}",
    UpdateQueueLimitAssociation:
      "PATCH /2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}",
    AssociateMemberToFarm:
      "PUT /2023-10-12/farms/{farmId}/members/{principalId}",
    AssociateMemberToFleet:
      "PUT /2023-10-12/farms/{farmId}/fleets/{fleetId}/members/{principalId}",
    AssociateMemberToJob:
      "PUT /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members/{principalId}",
    AssociateMemberToQueue:
      "PUT /2023-10-12/farms/{farmId}/queues/{queueId}/members/{principalId}",
    AssumeFleetRoleForRead:
      "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/read-roles",
    AssumeFleetRoleForWorker:
      "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/fleet-roles",
    AssumeQueueRoleForRead:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/read-roles",
    AssumeQueueRoleForUser:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/user-roles",
    AssumeQueueRoleForWorker:
      "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/queue-roles",
    BatchGetJobEntity:
      "POST /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/batchGetJobEntity",
    CopyJobTemplate:
      "POST /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/template",
    CreateBudget: "POST /2023-10-12/farms/{farmId}/budgets",
    CreateFarm: "POST /2023-10-12/farms",
    CreateFleet: "POST /2023-10-12/farms/{farmId}/fleets",
    CreateJob: "POST /2023-10-12/farms/{farmId}/queues/{queueId}/jobs",
    CreateLicenseEndpoint: "POST /2023-10-12/license-endpoints",
    CreateLimit: "POST /2023-10-12/farms/{farmId}/limits",
    CreateMonitor: "POST /2023-10-12/monitors",
    CreateQueue: "POST /2023-10-12/farms/{farmId}/queues",
    CreateQueueEnvironment:
      "POST /2023-10-12/farms/{farmId}/queues/{queueId}/environments",
    CreateStorageProfile: "POST /2023-10-12/farms/{farmId}/storage-profiles",
    CreateWorker: "POST /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers",
    DeleteBudget: "DELETE /2023-10-12/farms/{farmId}/budgets/{budgetId}",
    DeleteFarm: "DELETE /2023-10-12/farms/{farmId}",
    DeleteFleet: "DELETE /2023-10-12/farms/{farmId}/fleets/{fleetId}",
    DeleteLicenseEndpoint:
      "DELETE /2023-10-12/license-endpoints/{licenseEndpointId}",
    DeleteLimit: "DELETE /2023-10-12/farms/{farmId}/limits/{limitId}",
    DeleteMeteredProduct:
      "DELETE /2023-10-12/license-endpoints/{licenseEndpointId}/metered-products/{productId}",
    DeleteMonitor: "DELETE /2023-10-12/monitors/{monitorId}",
    DeleteQueue: "DELETE /2023-10-12/farms/{farmId}/queues/{queueId}",
    DeleteQueueEnvironment:
      "DELETE /2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}",
    DeleteStorageProfile:
      "DELETE /2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}",
    DeleteWorker:
      "DELETE /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}",
    DisassociateMemberFromFarm:
      "DELETE /2023-10-12/farms/{farmId}/members/{principalId}",
    DisassociateMemberFromFleet:
      "DELETE /2023-10-12/farms/{farmId}/fleets/{fleetId}/members/{principalId}",
    DisassociateMemberFromJob:
      "DELETE /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members/{principalId}",
    DisassociateMemberFromQueue:
      "DELETE /2023-10-12/farms/{farmId}/queues/{queueId}/members/{principalId}",
    GetBudget: "GET /2023-10-12/farms/{farmId}/budgets/{budgetId}",
    GetFarm: "GET /2023-10-12/farms/{farmId}",
    GetFleet: "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}",
    GetJob: "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}",
    GetLicenseEndpoint: "GET /2023-10-12/license-endpoints/{licenseEndpointId}",
    GetLimit: "GET /2023-10-12/farms/{farmId}/limits/{limitId}",
    GetMonitor: "GET /2023-10-12/monitors/{monitorId}",
    GetQueue: "GET /2023-10-12/farms/{farmId}/queues/{queueId}",
    GetQueueEnvironment:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}",
    GetSession:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions/{sessionId}",
    GetSessionAction:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/session-actions/{sessionActionId}",
    GetStep:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}",
    GetStorageProfile:
      "GET /2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}",
    GetStorageProfileForQueue:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/storage-profiles/{storageProfileId}",
    GetTask:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks/{taskId}",
    GetWorker:
      "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}",
    ListBudgets: "GET /2023-10-12/farms/{farmId}/budgets",
    ListFarmMembers: "GET /2023-10-12/farms/{farmId}/members",
    ListFarms: "GET /2023-10-12/farms",
    ListFleetMembers: "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/members",
    ListFleets: "GET /2023-10-12/farms/{farmId}/fleets",
    ListJobMembers:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members",
    ListJobParameterDefinitions:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/parameter-definitions",
    ListJobs: "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs",
    ListLicenseEndpoints: "GET /2023-10-12/license-endpoints",
    ListLimits: "GET /2023-10-12/farms/{farmId}/limits",
    ListMeteredProducts:
      "GET /2023-10-12/license-endpoints/{licenseEndpointId}/metered-products",
    ListMonitors: "GET /2023-10-12/monitors",
    ListQueueEnvironments:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/environments",
    ListQueueMembers: "GET /2023-10-12/farms/{farmId}/queues/{queueId}/members",
    ListQueues: "GET /2023-10-12/farms/{farmId}/queues",
    ListSessionActions:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/session-actions",
    ListSessions:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions",
    ListSessionsForWorker:
      "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/sessions",
    ListStepConsumers:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/consumers",
    ListStepDependencies:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/dependencies",
    ListSteps:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps",
    ListStorageProfiles: "GET /2023-10-12/farms/{farmId}/storage-profiles",
    ListStorageProfilesForQueue:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/storage-profiles",
    ListTasks:
      "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks",
    ListWorkers: "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers",
    PutMeteredProduct:
      "PUT /2023-10-12/license-endpoints/{licenseEndpointId}/metered-products/{productId}",
    UpdateBudget: "PATCH /2023-10-12/farms/{farmId}/budgets/{budgetId}",
    UpdateFarm: "PATCH /2023-10-12/farms/{farmId}",
    UpdateFleet: "PATCH /2023-10-12/farms/{farmId}/fleets/{fleetId}",
    UpdateJob: "PATCH /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}",
    UpdateLimit: "PATCH /2023-10-12/farms/{farmId}/limits/{limitId}",
    UpdateMonitor: "PATCH /2023-10-12/monitors/{monitorId}",
    UpdateQueue: "PATCH /2023-10-12/farms/{farmId}/queues/{queueId}",
    UpdateQueueEnvironment:
      "PATCH /2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}",
    UpdateSession:
      "PATCH /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions/{sessionId}",
    UpdateStep:
      "PATCH /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}",
    UpdateStorageProfile:
      "PATCH /2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}",
    UpdateTask:
      "PATCH /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks/{taskId}",
    UpdateWorker:
      "PATCH /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}",
    UpdateWorkerSchedule:
      "PATCH /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/schedule",
  },
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;

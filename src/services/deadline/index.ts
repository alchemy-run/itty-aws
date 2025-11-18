import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { deadline as _deadlineClient } from "./types.ts";

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
  sdkId: "deadline",
  version: "2023-10-12",
  protocol: "restJson1",
  sigV4ServiceName: "deadline",
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
  retryableErrors: {
    InternalServerErrorException: { retryAfterSeconds: "Retry-After" },
    ThrottlingException: { retryAfterSeconds: "Retry-After" },
  },
} as const satisfies ServiceMetadata;

export type _deadline = _deadlineClient;
export interface deadline extends _deadline {}
export const deadline = class extends AWSServiceClient {
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
} as unknown as typeof _deadlineClient;

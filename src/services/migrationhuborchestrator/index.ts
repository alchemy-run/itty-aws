import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MigrationHubOrchestrator as _MigrationHubOrchestratorClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "MigrationHubOrchestrator",
  version: "2021-08-28",
  protocol: "restJson1",
  sigV4ServiceName: "migrationhub-orchestrator",
  endpointPrefix: "migrationhub-orchestrator",
  operations: {
    "ListTagsForResource": "GET /tags/{resourceArn}",
    "TagResource": "POST /tags/{resourceArn}",
    "UntagResource": "DELETE /tags/{resourceArn}",
    "CreateTemplate": "POST /template",
    "CreateWorkflow": "POST /migrationworkflow/",
    "CreateWorkflowStep": "POST /workflowstep",
    "CreateWorkflowStepGroup": "POST /workflowstepgroups",
    "DeleteTemplate": "DELETE /template/{id}",
    "DeleteWorkflow": "DELETE /migrationworkflow/{id}",
    "DeleteWorkflowStep": "DELETE /workflowstep/{id}",
    "DeleteWorkflowStepGroup": "DELETE /workflowstepgroup/{id}",
    "GetTemplate": "GET /migrationworkflowtemplate/{id}",
    "GetTemplateStep": "GET /templatestep/{id}",
    "GetTemplateStepGroup": "GET /templates/{templateId}/stepgroups/{id}",
    "GetWorkflow": "GET /migrationworkflow/{id}",
    "GetWorkflowStep": "GET /workflowstep/{id}",
    "GetWorkflowStepGroup": "GET /workflowstepgroup/{id}",
    "ListPlugins": "GET /plugins",
    "ListTemplateStepGroups": "GET /templatestepgroups/{templateId}",
    "ListTemplateSteps": "GET /templatesteps",
    "ListTemplates": "GET /migrationworkflowtemplates",
    "ListWorkflowStepGroups": "GET /workflowstepgroups",
    "ListWorkflowSteps": "GET /workflow/{workflowId}/workflowstepgroups/{stepGroupId}/workflowsteps",
    "ListWorkflows": "GET /migrationworkflows",
    "RetryWorkflowStep": "POST /retryworkflowstep/{id}",
    "StartWorkflow": "POST /migrationworkflow/{id}/start",
    "StopWorkflow": "POST /migrationworkflow/{id}/stop",
    "UpdateTemplate": "POST /template/{id}",
    "UpdateWorkflow": "POST /migrationworkflow/{id}",
    "UpdateWorkflowStep": "POST /workflowstep/{id}",
    "UpdateWorkflowStepGroup": "POST /workflowstepgroup/{id}",
  },
  retryableErrors: {
    "ValidationException": {},
    "AccessDeniedException": {},
    "ConflictException": {},
  },
} as const satisfies ServiceMetadata;

export type _MigrationHubOrchestrator = _MigrationHubOrchestratorClient;
export interface MigrationHubOrchestrator extends _MigrationHubOrchestrator {}
export const MigrationHubOrchestrator = class extends AWSServiceClient {
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
} as unknown as typeof _MigrationHubOrchestratorClient;

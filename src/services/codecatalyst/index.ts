import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CodeCatalyst as _CodeCatalyst } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "CodeCatalyst",
  version: "2022-09-28",
  protocol: "restJson1",
  sigV4ServiceName: "undefined",
  endpointPrefix: "codecatalyst",
  operations: {
    GetUserDetails: "GET /userDetails",
    VerifySession: "GET /session",
    CreateAccessToken: "PUT /v1/accessTokens",
    CreateDevEnvironment:
      "PUT /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments",
    CreateProject: "PUT /v1/spaces/{spaceName}/projects",
    CreateSourceRepository:
      "PUT /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}",
    CreateSourceRepositoryBranch:
      "PUT /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches/{name}",
    DeleteAccessToken: "DELETE /v1/accessTokens/{id}",
    DeleteDevEnvironment:
      "DELETE /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}",
    DeleteProject: "DELETE /v1/spaces/{spaceName}/projects/{name}",
    DeleteSourceRepository:
      "DELETE /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}",
    DeleteSpace: "DELETE /v1/spaces/{name}",
    GetDevEnvironment:
      "GET /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}",
    GetProject: "GET /v1/spaces/{spaceName}/projects/{name}",
    GetSourceRepository:
      "GET /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}",
    GetSourceRepositoryCloneUrls:
      "GET /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/cloneUrls",
    GetSpace: "GET /v1/spaces/{name}",
    GetSubscription: "GET /v1/spaces/{spaceName}/subscription",
    GetWorkflow:
      "GET /v1/spaces/{spaceName}/projects/{projectName}/workflows/{id}",
    GetWorkflowRun:
      "GET /v1/spaces/{spaceName}/projects/{projectName}/workflowRuns/{id}",
    ListAccessTokens: "POST /v1/accessTokens",
    ListDevEnvironmentSessions:
      "POST /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{devEnvironmentId}/sessions",
    ListDevEnvironments: "POST /v1/spaces/{spaceName}/devEnvironments",
    ListEventLogs: "POST /v1/spaces/{spaceName}/eventLogs",
    ListProjects: "POST /v1/spaces/{spaceName}/projects",
    ListSourceRepositories:
      "POST /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories",
    ListSourceRepositoryBranches:
      "POST /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches",
    ListSpaces: "POST /v1/spaces",
    ListWorkflowRuns:
      "POST /v1/spaces/{spaceName}/projects/{projectName}/workflowRuns",
    ListWorkflows:
      "POST /v1/spaces/{spaceName}/projects/{projectName}/workflows",
    StartDevEnvironment:
      "PUT /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/start",
    StartDevEnvironmentSession:
      "PUT /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session",
    StartWorkflowRun:
      "PUT /v1/spaces/{spaceName}/projects/{projectName}/workflowRuns",
    StopDevEnvironment:
      "PUT /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/stop",
    StopDevEnvironmentSession:
      "DELETE /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session/{sessionId}",
    UpdateDevEnvironment:
      "PATCH /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}",
    UpdateProject: "PATCH /v1/spaces/{spaceName}/projects/{name}",
    UpdateSpace: "PATCH /v1/spaces/{name}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CodeCatalyst = class extends AWSServiceClient {
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
} as unknown as typeof _CodeCatalyst;

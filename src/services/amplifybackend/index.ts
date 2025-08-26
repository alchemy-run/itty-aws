import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { AmplifyBackend as _AmplifyBackend } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "AmplifyBackend",
  version: "2020-08-11",
  protocol: "restJson1",
  sigV4ServiceName: "amplifybackend",
  endpointPrefix: "amplifybackend",
  operations: {
    CloneBackend:
      "POST /backend/{AppId}/environments/{BackendEnvironmentName}/clone",
    CreateBackend: "POST /backend",
    CreateBackendAPI: "POST /backend/{AppId}/api",
    CreateBackendAuth: "POST /backend/{AppId}/auth",
    CreateBackendConfig: "POST /backend/{AppId}/config",
    CreateBackendStorage: "POST /backend/{AppId}/storage",
    CreateToken: "POST /backend/{AppId}/challenge",
    DeleteBackend:
      "POST /backend/{AppId}/environments/{BackendEnvironmentName}/remove",
    DeleteBackendAPI:
      "POST /backend/{AppId}/api/{BackendEnvironmentName}/remove",
    DeleteBackendAuth:
      "POST /backend/{AppId}/auth/{BackendEnvironmentName}/remove",
    DeleteBackendStorage:
      "POST /backend/{AppId}/storage/{BackendEnvironmentName}/remove",
    DeleteToken: "POST /backend/{AppId}/challenge/{SessionId}/remove",
    GenerateBackendAPIModels:
      "POST /backend/{AppId}/api/{BackendEnvironmentName}/generateModels",
    GetBackend: "POST /backend/{AppId}/details",
    GetBackendAPI: "POST /backend/{AppId}/api/{BackendEnvironmentName}/details",
    GetBackendAPIModels:
      "POST /backend/{AppId}/api/{BackendEnvironmentName}/getModels",
    GetBackendAuth:
      "POST /backend/{AppId}/auth/{BackendEnvironmentName}/details",
    GetBackendJob: "GET /backend/{AppId}/job/{BackendEnvironmentName}/{JobId}",
    GetBackendStorage:
      "POST /backend/{AppId}/storage/{BackendEnvironmentName}/details",
    GetToken: "GET /backend/{AppId}/challenge/{SessionId}",
    ImportBackendAuth:
      "POST /backend/{AppId}/auth/{BackendEnvironmentName}/import",
    ImportBackendStorage:
      "POST /backend/{AppId}/storage/{BackendEnvironmentName}/import",
    ListBackendJobs: "POST /backend/{AppId}/job/{BackendEnvironmentName}",
    ListS3Buckets: "POST /s3Buckets",
    RemoveAllBackends: "POST /backend/{AppId}/remove",
    RemoveBackendConfig: "POST /backend/{AppId}/config/remove",
    UpdateBackendAPI: "POST /backend/{AppId}/api/{BackendEnvironmentName}",
    UpdateBackendAuth: "POST /backend/{AppId}/auth/{BackendEnvironmentName}",
    UpdateBackendConfig: "POST /backend/{AppId}/config/update",
    UpdateBackendJob:
      "POST /backend/{AppId}/job/{BackendEnvironmentName}/{JobId}",
    UpdateBackendStorage:
      "POST /backend/{AppId}/storage/{BackendEnvironmentName}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const AmplifyBackend = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _AmplifyBackend;

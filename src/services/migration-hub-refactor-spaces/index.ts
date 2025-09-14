import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MigrationHubRefactorSpaces as _MigrationHubRefactorSpacesClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Migration Hub Refactor Spaces",
  version: "2021-10-26",
  protocol: "restJson1",
  sigV4ServiceName: "refactor-spaces",
  endpointPrefix: "refactor-spaces",
  operations: {
    CreateApplication:
      "POST /environments/{EnvironmentIdentifier}/applications",
    CreateEnvironment: "POST /environments",
    CreateRoute:
      "POST /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes",
    CreateService:
      "POST /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services",
    DeleteApplication:
      "DELETE /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}",
    DeleteEnvironment: "DELETE /environments/{EnvironmentIdentifier}",
    DeleteResourcePolicy: "DELETE /resourcepolicy/{Identifier}",
    DeleteRoute:
      "DELETE /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}",
    DeleteService:
      "DELETE /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services/{ServiceIdentifier}",
    GetApplication:
      "GET /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}",
    GetEnvironment: "GET /environments/{EnvironmentIdentifier}",
    GetResourcePolicy: "GET /resourcepolicy/{Identifier}",
    GetRoute:
      "GET /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}",
    GetService:
      "GET /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services/{ServiceIdentifier}",
    ListApplications: "GET /environments/{EnvironmentIdentifier}/applications",
    ListEnvironments: "GET /environments",
    ListEnvironmentVpcs: "GET /environments/{EnvironmentIdentifier}/vpcs",
    ListRoutes:
      "GET /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes",
    ListServices:
      "GET /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    PutResourcePolicy: "PUT /resourcepolicy",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateRoute:
      "PATCH /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MigrationHubRefactorSpaces = class extends AWSServiceClient {
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
} as unknown as typeof _MigrationHubRefactorSpacesClient;

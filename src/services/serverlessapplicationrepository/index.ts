import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ServerlessApplicationRepository as _ServerlessApplicationRepositoryClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "ServerlessApplicationRepository",
  version: "2017-09-08",
  protocol: "restJson1",
  sigV4ServiceName: "serverlessrepo",
  endpointPrefix: "serverlessrepo",
  operations: {
    CreateApplication: "POST /applications",
    CreateApplicationVersion:
      "PUT /applications/{ApplicationId}/versions/{SemanticVersion}",
    CreateCloudFormationChangeSet:
      "POST /applications/{ApplicationId}/changesets",
    CreateCloudFormationTemplate:
      "POST /applications/{ApplicationId}/templates",
    DeleteApplication: "DELETE /applications/{ApplicationId}",
    GetApplication: "GET /applications/{ApplicationId}",
    GetApplicationPolicy: "GET /applications/{ApplicationId}/policy",
    GetCloudFormationTemplate:
      "GET /applications/{ApplicationId}/templates/{TemplateId}",
    ListApplicationDependencies:
      "GET /applications/{ApplicationId}/dependencies",
    ListApplications: "GET /applications",
    ListApplicationVersions: "GET /applications/{ApplicationId}/versions",
    PutApplicationPolicy: "PUT /applications/{ApplicationId}/policy",
    UnshareApplication: "POST /applications/{ApplicationId}/unshare",
    UpdateApplication: "PATCH /applications/{ApplicationId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ServerlessApplicationRepository = class extends AWSServiceClient {
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
} as unknown as typeof _ServerlessApplicationRepositoryClient;

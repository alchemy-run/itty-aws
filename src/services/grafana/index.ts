import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { grafana as _grafana } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "grafana",
  version: "2020-08-18",
  protocol: "restJson1",
  sigV4ServiceName: "grafana",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListVersions: "GET /versions",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    AssociateLicense: "POST /workspaces/{workspaceId}/licenses/{licenseType}",
    CreateWorkspace: "POST /workspaces",
    CreateWorkspaceApiKey: "POST /workspaces/{workspaceId}/apikeys",
    CreateWorkspaceServiceAccount:
      "POST /workspaces/{workspaceId}/serviceaccounts",
    CreateWorkspaceServiceAccountToken:
      "POST /workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens",
    DeleteWorkspace: "DELETE /workspaces/{workspaceId}",
    DeleteWorkspaceApiKey: "DELETE /workspaces/{workspaceId}/apikeys/{keyName}",
    DeleteWorkspaceServiceAccount:
      "DELETE /workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}",
    DeleteWorkspaceServiceAccountToken:
      "DELETE /workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens/{tokenId}",
    DescribeWorkspace: "GET /workspaces/{workspaceId}",
    DescribeWorkspaceAuthentication:
      "GET /workspaces/{workspaceId}/authentication",
    DescribeWorkspaceConfiguration:
      "GET /workspaces/{workspaceId}/configuration",
    DisassociateLicense:
      "DELETE /workspaces/{workspaceId}/licenses/{licenseType}",
    ListPermissions: "GET /workspaces/{workspaceId}/permissions",
    ListWorkspaceServiceAccountTokens:
      "GET /workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens",
    ListWorkspaceServiceAccounts:
      "GET /workspaces/{workspaceId}/serviceaccounts",
    ListWorkspaces: "GET /workspaces",
    UpdatePermissions: "PATCH /workspaces/{workspaceId}/permissions",
    UpdateWorkspace: "PUT /workspaces/{workspaceId}",
    UpdateWorkspaceAuthentication:
      "POST /workspaces/{workspaceId}/authentication",
    UpdateWorkspaceConfiguration: "PUT /workspaces/{workspaceId}/configuration",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const grafana = class extends AWSServiceClient {
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
} as unknown as typeof _grafana;

import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { amp as _amp } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "amp",
  version: "2020-08-01",
  protocol: "restJson1",
  sigV4ServiceName: "aps",
  operations: {
    GetDefaultScraperConfiguration: "GET /scraperconfiguration",
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CreateAlertManagerDefinition:
      "POST /workspaces/{workspaceId}/alertmanager/definition",
    CreateLoggingConfiguration: "POST /workspaces/{workspaceId}/logging",
    CreateQueryLoggingConfiguration:
      "POST /workspaces/{workspaceId}/logging/query",
    CreateRuleGroupsNamespace:
      "POST /workspaces/{workspaceId}/rulegroupsnamespaces",
    CreateScraper: "POST /scrapers",
    CreateWorkspace: "POST /workspaces",
    DeleteAlertManagerDefinition:
      "DELETE /workspaces/{workspaceId}/alertmanager/definition",
    DeleteLoggingConfiguration: "DELETE /workspaces/{workspaceId}/logging",
    DeleteQueryLoggingConfiguration:
      "DELETE /workspaces/{workspaceId}/logging/query",
    DeleteRuleGroupsNamespace:
      "DELETE /workspaces/{workspaceId}/rulegroupsnamespaces/{name}",
    DeleteScraper: "DELETE /scrapers/{scraperId}",
    DeleteWorkspace: "DELETE /workspaces/{workspaceId}",
    DescribeAlertManagerDefinition:
      "GET /workspaces/{workspaceId}/alertmanager/definition",
    DescribeLoggingConfiguration: "GET /workspaces/{workspaceId}/logging",
    DescribeQueryLoggingConfiguration:
      "GET /workspaces/{workspaceId}/logging/query",
    DescribeRuleGroupsNamespace:
      "GET /workspaces/{workspaceId}/rulegroupsnamespaces/{name}",
    DescribeScraper: "GET /scrapers/{scraperId}",
    DescribeWorkspace: "GET /workspaces/{workspaceId}",
    DescribeWorkspaceConfiguration:
      "GET /workspaces/{workspaceId}/configuration",
    ListRuleGroupsNamespaces:
      "GET /workspaces/{workspaceId}/rulegroupsnamespaces",
    ListScrapers: "GET /scrapers",
    ListWorkspaces: "GET /workspaces",
    PutAlertManagerDefinition:
      "PUT /workspaces/{workspaceId}/alertmanager/definition",
    PutRuleGroupsNamespace:
      "PUT /workspaces/{workspaceId}/rulegroupsnamespaces/{name}",
    UpdateLoggingConfiguration: "PUT /workspaces/{workspaceId}/logging",
    UpdateQueryLoggingConfiguration:
      "PUT /workspaces/{workspaceId}/logging/query",
    UpdateScraper: "PUT /scrapers/{scraperId}",
    UpdateWorkspaceAlias: "POST /workspaces/{workspaceId}/alias",
    UpdateWorkspaceConfiguration:
      "PATCH /workspaces/{workspaceId}/configuration",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const amp = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _amp;

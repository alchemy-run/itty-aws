import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { BedrockAgent as _BedrockAgent } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Bedrock Agent",
  version: "2023-06-05",
  protocol: "restJson1",
  sigV4ServiceName: "bedrock",
  endpointPrefix: "bedrock-agent",
  operations: {
    ValidateFlowDefinition: "POST /flows/validate-definition",
    AssociateAgentCollaborator:
      "PUT /agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/",
    AssociateAgentKnowledgeBase:
      "PUT /agents/{agentId}/agentversions/{agentVersion}/knowledgebases/",
    CreateAgent: "PUT /agents/",
    CreateAgentActionGroup:
      "PUT /agents/{agentId}/agentversions/{agentVersion}/actiongroups/",
    CreateAgentAlias: "PUT /agents/{agentId}/agentaliases/",
    CreateDataSource: "PUT /knowledgebases/{knowledgeBaseId}/datasources/",
    CreateFlow: "POST /flows/",
    CreateFlowAlias: "POST /flows/{flowIdentifier}/aliases",
    CreateFlowVersion: "POST /flows/{flowIdentifier}/versions",
    CreateKnowledgeBase: "PUT /knowledgebases/",
    CreatePrompt: "POST /prompts/",
    CreatePromptVersion: "POST /prompts/{promptIdentifier}/versions",
    DeleteAgent: "DELETE /agents/{agentId}/",
    DeleteAgentActionGroup:
      "DELETE /agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/",
    DeleteAgentAlias: "DELETE /agents/{agentId}/agentaliases/{agentAliasId}/",
    DeleteAgentVersion:
      "DELETE /agents/{agentId}/agentversions/{agentVersion}/",
    DeleteDataSource:
      "DELETE /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}",
    DeleteFlow: "DELETE /flows/{flowIdentifier}/",
    DeleteFlowAlias: "DELETE /flows/{flowIdentifier}/aliases/{aliasIdentifier}",
    DeleteFlowVersion: "DELETE /flows/{flowIdentifier}/versions/{flowVersion}/",
    DeleteKnowledgeBase: "DELETE /knowledgebases/{knowledgeBaseId}",
    DeleteKnowledgeBaseDocuments:
      "POST /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents/deleteDocuments",
    DeletePrompt: "DELETE /prompts/{promptIdentifier}/",
    DisassociateAgentCollaborator:
      "DELETE /agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/{collaboratorId}/",
    DisassociateAgentKnowledgeBase:
      "DELETE /agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/",
    GetAgent: "GET /agents/{agentId}/",
    GetAgentActionGroup:
      "GET /agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/",
    GetAgentAlias: "GET /agents/{agentId}/agentaliases/{agentAliasId}/",
    GetAgentCollaborator:
      "GET /agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/{collaboratorId}/",
    GetAgentKnowledgeBase:
      "GET /agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/",
    GetAgentVersion: "GET /agents/{agentId}/agentversions/{agentVersion}/",
    GetDataSource:
      "GET /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}",
    GetFlow: "GET /flows/{flowIdentifier}/",
    GetFlowAlias: "GET /flows/{flowIdentifier}/aliases/{aliasIdentifier}",
    GetFlowVersion: "GET /flows/{flowIdentifier}/versions/{flowVersion}/",
    GetIngestionJob:
      "GET /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/{ingestionJobId}",
    GetKnowledgeBase: "GET /knowledgebases/{knowledgeBaseId}",
    GetKnowledgeBaseDocuments:
      "POST /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents/getDocuments",
    GetPrompt: "GET /prompts/{promptIdentifier}/",
    IngestKnowledgeBaseDocuments:
      "PUT /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents",
    ListAgentActionGroups:
      "POST /agents/{agentId}/agentversions/{agentVersion}/actiongroups/",
    ListAgentAliases: "POST /agents/{agentId}/agentaliases/",
    ListAgentCollaborators:
      "POST /agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/",
    ListAgentKnowledgeBases:
      "POST /agents/{agentId}/agentversions/{agentVersion}/knowledgebases/",
    ListAgentVersions: "POST /agents/{agentId}/agentversions/",
    ListAgents: "POST /agents/",
    ListDataSources: "POST /knowledgebases/{knowledgeBaseId}/datasources/",
    ListFlowAliases: "GET /flows/{flowIdentifier}/aliases",
    ListFlowVersions: "GET /flows/{flowIdentifier}/versions",
    ListFlows: "GET /flows/",
    ListIngestionJobs:
      "POST /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/",
    ListKnowledgeBaseDocuments:
      "POST /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents",
    ListKnowledgeBases: "POST /knowledgebases/",
    ListPrompts: "GET /prompts/",
    ListTagsForResource: "GET /tags/{resourceArn}",
    PrepareAgent: "POST /agents/{agentId}/",
    PrepareFlow: "POST /flows/{flowIdentifier}/",
    StartIngestionJob:
      "PUT /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/",
    StopIngestionJob:
      "POST /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/{ingestionJobId}/stop",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateAgent: "PUT /agents/{agentId}/",
    UpdateAgentActionGroup:
      "PUT /agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/",
    UpdateAgentAlias: "PUT /agents/{agentId}/agentaliases/{agentAliasId}/",
    UpdateAgentCollaborator:
      "PUT /agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/{collaboratorId}/",
    UpdateAgentKnowledgeBase:
      "PUT /agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/",
    UpdateDataSource:
      "PUT /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}",
    UpdateFlow: "PUT /flows/{flowIdentifier}/",
    UpdateFlowAlias: "PUT /flows/{flowIdentifier}/aliases/{aliasIdentifier}",
    UpdateKnowledgeBase: "PUT /knowledgebases/{knowledgeBaseId}",
    UpdatePrompt: "PUT /prompts/{promptIdentifier}/",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const BedrockAgent = class extends AWSServiceClient {
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
} as unknown as typeof _BedrockAgent;

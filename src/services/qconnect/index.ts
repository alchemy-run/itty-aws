import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { QConnect as _QConnectClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "QConnect",
  version: "2020-10-19",
  protocol: "restJson1",
  sigV4ServiceName: "wisdom",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    ActivateMessageTemplate:
      "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/activate",
    CreateAIAgent: "POST /assistants/{assistantId}/aiagents",
    CreateAIAgentVersion:
      "POST /assistants/{assistantId}/aiagents/{aiAgentId}/versions",
    CreateAIGuardrail: "POST /assistants/{assistantId}/aiguardrails",
    CreateAIGuardrailVersion:
      "POST /assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions",
    CreateAIPrompt: "POST /assistants/{assistantId}/aiprompts",
    CreateAIPromptVersion:
      "POST /assistants/{assistantId}/aiprompts/{aiPromptId}/versions",
    CreateAssistant: "POST /assistants",
    CreateAssistantAssociation: "POST /assistants/{assistantId}/associations",
    CreateContent: "POST /knowledgeBases/{knowledgeBaseId}/contents",
    CreateContentAssociation:
      "POST /knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations",
    CreateKnowledgeBase: "POST /knowledgeBases",
    CreateMessageTemplate:
      "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates",
    CreateMessageTemplateAttachment:
      "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/attachments",
    CreateMessageTemplateVersion:
      "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/versions",
    CreateQuickResponse:
      "POST /knowledgeBases/{knowledgeBaseId}/quickResponses",
    CreateSession: "POST /assistants/{assistantId}/sessions",
    DeactivateMessageTemplate:
      "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/deactivate",
    DeleteAIAgent: "DELETE /assistants/{assistantId}/aiagents/{aiAgentId}",
    DeleteAIAgentVersion:
      "DELETE /assistants/{assistantId}/aiagents/{aiAgentId}/versions/{versionNumber}",
    DeleteAIGuardrail:
      "DELETE /assistants/{assistantId}/aiguardrails/{aiGuardrailId}",
    DeleteAIGuardrailVersion:
      "DELETE /assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions/{versionNumber}",
    DeleteAIPrompt: "DELETE /assistants/{assistantId}/aiprompts/{aiPromptId}",
    DeleteAIPromptVersion:
      "DELETE /assistants/{assistantId}/aiprompts/{aiPromptId}/versions/{versionNumber}",
    DeleteAssistant: "DELETE /assistants/{assistantId}",
    DeleteAssistantAssociation:
      "DELETE /assistants/{assistantId}/associations/{assistantAssociationId}",
    DeleteContent:
      "DELETE /knowledgeBases/{knowledgeBaseId}/contents/{contentId}",
    DeleteContentAssociation:
      "DELETE /knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations/{contentAssociationId}",
    DeleteImportJob:
      "DELETE /knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}",
    DeleteKnowledgeBase: "DELETE /knowledgeBases/{knowledgeBaseId}",
    DeleteMessageTemplate:
      "DELETE /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}",
    DeleteMessageTemplateAttachment:
      "DELETE /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/attachments/{attachmentId}",
    DeleteQuickResponse:
      "DELETE /knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
    GetAIAgent: "GET /assistants/{assistantId}/aiagents/{aiAgentId}",
    GetAIGuardrail:
      "GET /assistants/{assistantId}/aiguardrails/{aiGuardrailId}",
    GetAIPrompt: "GET /assistants/{assistantId}/aiprompts/{aiPromptId}",
    GetAssistant: "GET /assistants/{assistantId}",
    GetAssistantAssociation:
      "GET /assistants/{assistantId}/associations/{assistantAssociationId}",
    GetContent: "GET /knowledgeBases/{knowledgeBaseId}/contents/{contentId}",
    GetContentAssociation:
      "GET /knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations/{contentAssociationId}",
    GetContentSummary:
      "GET /knowledgeBases/{knowledgeBaseId}/contents/{contentId}/summary",
    GetImportJob:
      "GET /knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}",
    GetKnowledgeBase: "GET /knowledgeBases/{knowledgeBaseId}",
    GetMessageTemplate:
      "GET /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}",
    GetNextMessage:
      "GET /assistants/{assistantId}/sessions/{sessionId}/messages/next",
    GetQuickResponse:
      "GET /knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
    GetRecommendations:
      "GET /assistants/{assistantId}/sessions/{sessionId}/recommendations",
    GetSession: "GET /assistants/{assistantId}/sessions/{sessionId}",
    ListAIAgentVersions:
      "GET /assistants/{assistantId}/aiagents/{aiAgentId}/versions",
    ListAIAgents: "GET /assistants/{assistantId}/aiagents",
    ListAIGuardrailVersions:
      "GET /assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions",
    ListAIGuardrails: "GET /assistants/{assistantId}/aiguardrails",
    ListAIPromptVersions:
      "GET /assistants/{assistantId}/aiprompts/{aiPromptId}/versions",
    ListAIPrompts: "GET /assistants/{assistantId}/aiprompts",
    ListAssistantAssociations: "GET /assistants/{assistantId}/associations",
    ListAssistants: "GET /assistants",
    ListContentAssociations:
      "GET /knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations",
    ListContents: "GET /knowledgeBases/{knowledgeBaseId}/contents",
    ListImportJobs: "GET /knowledgeBases/{knowledgeBaseId}/importJobs",
    ListKnowledgeBases: "GET /knowledgeBases",
    ListMessageTemplateVersions:
      "GET /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/versions",
    ListMessageTemplates:
      "GET /knowledgeBases/{knowledgeBaseId}/messageTemplates",
    ListMessages: "GET /assistants/{assistantId}/sessions/{sessionId}/messages",
    ListQuickResponses: "GET /knowledgeBases/{knowledgeBaseId}/quickResponses",
    NotifyRecommendationsReceived:
      "POST /assistants/{assistantId}/sessions/{sessionId}/recommendations/notify",
    PutFeedback: "PUT /assistants/{assistantId}/feedback",
    QueryAssistant: "POST /assistants/{assistantId}/query",
    RemoveAssistantAIAgent:
      "DELETE /assistants/{assistantId}/aiagentConfiguration",
    RemoveKnowledgeBaseTemplateUri:
      "DELETE /knowledgeBases/{knowledgeBaseId}/templateUri",
    RenderMessageTemplate:
      "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/render",
    SearchContent: "POST /knowledgeBases/{knowledgeBaseId}/search",
    SearchMessageTemplates:
      "POST /knowledgeBases/{knowledgeBaseId}/search/messageTemplates",
    SearchQuickResponses:
      "POST /knowledgeBases/{knowledgeBaseId}/search/quickResponses",
    SearchSessions: "POST /assistants/{assistantId}/searchSessions",
    SendMessage: "POST /assistants/{assistantId}/sessions/{sessionId}/message",
    StartContentUpload: "POST /knowledgeBases/{knowledgeBaseId}/upload",
    StartImportJob: "POST /knowledgeBases/{knowledgeBaseId}/importJobs",
    UpdateAIAgent: "POST /assistants/{assistantId}/aiagents/{aiAgentId}",
    UpdateAIGuardrail:
      "POST /assistants/{assistantId}/aiguardrails/{aiGuardrailId}",
    UpdateAIPrompt: "POST /assistants/{assistantId}/aiprompts/{aiPromptId}",
    UpdateAssistantAIAgent:
      "POST /assistants/{assistantId}/aiagentConfiguration",
    UpdateContent:
      "POST /knowledgeBases/{knowledgeBaseId}/contents/{contentId}",
    UpdateKnowledgeBaseTemplateUri:
      "POST /knowledgeBases/{knowledgeBaseId}/templateUri",
    UpdateMessageTemplate:
      "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}",
    UpdateMessageTemplateMetadata:
      "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/metadata",
    UpdateQuickResponse:
      "POST /knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
    UpdateSession: "POST /assistants/{assistantId}/sessions/{sessionId}",
    UpdateSessionData:
      "PATCH /assistants/{assistantId}/sessions/{sessionId}/data",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const QConnect = class extends AWSServiceClient {
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
} as unknown as typeof _QConnectClient;

import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Wisdom as _WisdomClient } from "./types.ts";

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
  ServiceUnavailable,
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Wisdom",
  version: "2020-10-19",
  protocol: "restJson1",
  sigV4ServiceName: "wisdom",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CreateAssistant: "POST /assistants",
    CreateAssistantAssociation: "POST /assistants/{assistantId}/associations",
    CreateContent: "POST /knowledgeBases/{knowledgeBaseId}/contents",
    CreateKnowledgeBase: "POST /knowledgeBases",
    CreateQuickResponse:
      "POST /knowledgeBases/{knowledgeBaseId}/quickResponses",
    CreateSession: "POST /assistants/{assistantId}/sessions",
    DeleteAssistant: "DELETE /assistants/{assistantId}",
    DeleteAssistantAssociation:
      "DELETE /assistants/{assistantId}/associations/{assistantAssociationId}",
    DeleteContent:
      "DELETE /knowledgeBases/{knowledgeBaseId}/contents/{contentId}",
    DeleteImportJob:
      "DELETE /knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}",
    DeleteKnowledgeBase: "DELETE /knowledgeBases/{knowledgeBaseId}",
    DeleteQuickResponse:
      "DELETE /knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
    GetAssistant: "GET /assistants/{assistantId}",
    GetAssistantAssociation:
      "GET /assistants/{assistantId}/associations/{assistantAssociationId}",
    GetContent: "GET /knowledgeBases/{knowledgeBaseId}/contents/{contentId}",
    GetContentSummary:
      "GET /knowledgeBases/{knowledgeBaseId}/contents/{contentId}/summary",
    GetImportJob:
      "GET /knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}",
    GetKnowledgeBase: "GET /knowledgeBases/{knowledgeBaseId}",
    GetQuickResponse:
      "GET /knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
    GetRecommendations:
      "GET /assistants/{assistantId}/sessions/{sessionId}/recommendations",
    GetSession: "GET /assistants/{assistantId}/sessions/{sessionId}",
    ListAssistantAssociations: "GET /assistants/{assistantId}/associations",
    ListAssistants: "GET /assistants",
    ListContents: "GET /knowledgeBases/{knowledgeBaseId}/contents",
    ListImportJobs: "GET /knowledgeBases/{knowledgeBaseId}/importJobs",
    ListKnowledgeBases: "GET /knowledgeBases",
    ListQuickResponses: "GET /knowledgeBases/{knowledgeBaseId}/quickResponses",
    NotifyRecommendationsReceived:
      "POST /assistants/{assistantId}/sessions/{sessionId}/recommendations/notify",
    QueryAssistant: "POST /assistants/{assistantId}/query",
    RemoveKnowledgeBaseTemplateUri:
      "DELETE /knowledgeBases/{knowledgeBaseId}/templateUri",
    SearchContent: "POST /knowledgeBases/{knowledgeBaseId}/search",
    SearchQuickResponses:
      "POST /knowledgeBases/{knowledgeBaseId}/search/quickResponses",
    SearchSessions: "POST /assistants/{assistantId}/searchSessions",
    StartContentUpload: "POST /knowledgeBases/{knowledgeBaseId}/upload",
    StartImportJob: "POST /knowledgeBases/{knowledgeBaseId}/importJobs",
    UpdateContent:
      "POST /knowledgeBases/{knowledgeBaseId}/contents/{contentId}",
    UpdateKnowledgeBaseTemplateUri:
      "POST /knowledgeBases/{knowledgeBaseId}/templateUri",
    UpdateQuickResponse:
      "POST /knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
  },
} as const satisfies ServiceMetadata;

export type _Wisdom = _WisdomClient;
export interface Wisdom extends _Wisdom {}
export const Wisdom = class extends AWSServiceClient {
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
} as unknown as typeof _WisdomClient;

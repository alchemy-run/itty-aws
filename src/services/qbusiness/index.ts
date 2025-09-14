import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { QBusiness as _QBusinessClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "QBusiness",
  version: "2023-11-27",
  protocol: "restJson1",
  sigV4ServiceName: "qbusiness",
  operations: {
    AssociatePermission: "POST /applications/{applicationId}/policy",
    BatchDeleteDocument:
      "POST /applications/{applicationId}/indices/{indexId}/documents/delete",
    BatchPutDocument:
      "POST /applications/{applicationId}/indices/{indexId}/documents",
    CancelSubscription:
      "DELETE /applications/{applicationId}/subscriptions/{subscriptionId}",
    Chat: {
      http: "POST /applications/{applicationId}/conversations",
      traits: {
        outputStream: "httpPayload",
      },
    },
    ChatSync: "POST /applications/{applicationId}/conversations?sync",
    CheckDocumentAccess:
      "GET /applications/{applicationId}/index/{indexId}/users/{userId}/documents/{documentId}/check-document-access",
    CreateAnonymousWebExperienceUrl:
      "POST /applications/{applicationId}/experiences/{webExperienceId}/anonymous-url",
    CreateChatResponseConfiguration:
      "POST /applications/{applicationId}/chatresponseconfigurations",
    CreateSubscription: "POST /applications/{applicationId}/subscriptions",
    CreateUser: "POST /applications/{applicationId}/users",
    DeleteAttachment:
      "DELETE /applications/{applicationId}/conversations/{conversationId}/attachments/{attachmentId}",
    DeleteChatControlsConfiguration:
      "DELETE /applications/{applicationId}/chatcontrols",
    DeleteChatResponseConfiguration:
      "DELETE /applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}",
    DeleteConversation:
      "DELETE /applications/{applicationId}/conversations/{conversationId}",
    DeleteGroup:
      "DELETE /applications/{applicationId}/indices/{indexId}/groups/{groupName}",
    DeleteUser: "DELETE /applications/{applicationId}/users/{userId}",
    DisassociatePermission:
      "DELETE /applications/{applicationId}/policy/{statementId}",
    GetChatControlsConfiguration:
      "GET /applications/{applicationId}/chatcontrols",
    GetChatResponseConfiguration:
      "GET /applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}",
    GetGroup:
      "GET /applications/{applicationId}/indices/{indexId}/groups/{groupName}",
    GetMedia:
      "GET /applications/{applicationId}/conversations/{conversationId}/messages/{messageId}/media/{mediaId}",
    GetPolicy: "GET /applications/{applicationId}/policy",
    GetUser: "GET /applications/{applicationId}/users/{userId}",
    ListAttachments: "GET /applications/{applicationId}/attachments",
    ListChatResponseConfigurations:
      "GET /applications/{applicationId}/chatresponseconfigurations",
    ListConversations: "GET /applications/{applicationId}/conversations",
    ListDataSourceSyncJobs:
      "GET /applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/syncjobs",
    ListDocuments:
      "GET /applications/{applicationId}/index/{indexId}/documents",
    ListGroups: "GET /applications/{applicationId}/indices/{indexId}/groups",
    ListMessages:
      "GET /applications/{applicationId}/conversations/{conversationId}",
    ListPluginActions:
      "GET /applications/{applicationId}/plugins/{pluginId}/actions",
    ListPluginTypeActions: "GET /pluginTypes/{pluginType}/actions",
    ListPluginTypeMetadata: "GET /pluginTypeMetadata",
    ListSubscriptions: "GET /applications/{applicationId}/subscriptions",
    ListTagsForResource: "GET /v1/tags/{resourceARN}",
    PutFeedback:
      "POST /applications/{applicationId}/conversations/{conversationId}/messages/{messageId}/feedback",
    PutGroup: "PUT /applications/{applicationId}/indices/{indexId}/groups",
    SearchRelevantContent:
      "POST /applications/{applicationId}/relevant-content",
    StartDataSourceSyncJob:
      "POST /applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/startsync",
    StopDataSourceSyncJob:
      "POST /applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/stopsync",
    TagResource: "POST /v1/tags/{resourceARN}",
    UntagResource: "DELETE /v1/tags/{resourceARN}",
    UpdateChatControlsConfiguration:
      "PATCH /applications/{applicationId}/chatcontrols",
    UpdateChatResponseConfiguration:
      "PUT /applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}",
    UpdateSubscription:
      "PUT /applications/{applicationId}/subscriptions/{subscriptionId}",
    UpdateUser: "PUT /applications/{applicationId}/users/{userId}",
    CreateApplication: "POST /applications",
    CreateDataAccessor: "POST /applications/{applicationId}/dataaccessors",
    CreateDataSource:
      "POST /applications/{applicationId}/indices/{indexId}/datasources",
    CreateIndex: "POST /applications/{applicationId}/indices",
    CreatePlugin: "POST /applications/{applicationId}/plugins",
    CreateRetriever: "POST /applications/{applicationId}/retrievers",
    CreateWebExperience: "POST /applications/{applicationId}/experiences",
    DeleteApplication: "DELETE /applications/{applicationId}",
    DeleteDataAccessor:
      "DELETE /applications/{applicationId}/dataaccessors/{dataAccessorId}",
    DeleteDataSource:
      "DELETE /applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}",
    DeleteIndex: "DELETE /applications/{applicationId}/indices/{indexId}",
    DeletePlugin: "DELETE /applications/{applicationId}/plugins/{pluginId}",
    DeleteRetriever:
      "DELETE /applications/{applicationId}/retrievers/{retrieverId}",
    DeleteWebExperience:
      "DELETE /applications/{applicationId}/experiences/{webExperienceId}",
    GetApplication: "GET /applications/{applicationId}",
    GetDataAccessor:
      "GET /applications/{applicationId}/dataaccessors/{dataAccessorId}",
    GetDataSource:
      "GET /applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}",
    GetIndex: "GET /applications/{applicationId}/indices/{indexId}",
    GetPlugin: "GET /applications/{applicationId}/plugins/{pluginId}",
    GetRetriever: "GET /applications/{applicationId}/retrievers/{retrieverId}",
    GetWebExperience:
      "GET /applications/{applicationId}/experiences/{webExperienceId}",
    ListApplications: "GET /applications",
    ListDataAccessors: "GET /applications/{applicationId}/dataaccessors",
    ListDataSources:
      "GET /applications/{applicationId}/indices/{indexId}/datasources",
    ListIndices: "GET /applications/{applicationId}/indices",
    ListPlugins: "GET /applications/{applicationId}/plugins",
    ListRetrievers: "GET /applications/{applicationId}/retrievers",
    ListWebExperiences: "GET /applications/{applicationId}/experiences",
    UpdateApplication: "PUT /applications/{applicationId}",
    UpdateDataAccessor:
      "PUT /applications/{applicationId}/dataaccessors/{dataAccessorId}",
    UpdateDataSource:
      "PUT /applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}",
    UpdateIndex: "PUT /applications/{applicationId}/indices/{indexId}",
    UpdatePlugin: "PUT /applications/{applicationId}/plugins/{pluginId}",
    UpdateRetriever:
      "PUT /applications/{applicationId}/retrievers/{retrieverId}",
    UpdateWebExperience:
      "PUT /applications/{applicationId}/experiences/{webExperienceId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type QBusiness = typeof QBusiness;
export const QBusiness = class extends AWSServiceClient {
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
} as unknown as typeof _QBusinessClient;

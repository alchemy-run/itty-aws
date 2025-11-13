import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class QBusiness extends AWSServiceClient {
  associatePermission(
    input: AssociatePermissionRequest,
  ): Effect.Effect<
    AssociatePermissionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchDeleteDocument(
    input: BatchDeleteDocumentRequest,
  ): Effect.Effect<
    BatchDeleteDocumentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchPutDocument(
    input: BatchPutDocumentRequest,
  ): Effect.Effect<
    BatchPutDocumentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelSubscription(
    input: CancelSubscriptionRequest,
  ): Effect.Effect<
    CancelSubscriptionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  chat(
    input: ChatInput,
  ): Effect.Effect<
    ChatOutput,
    | AccessDeniedException
    | ConflictException
    | ExternalResourceException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  chatSync(
    input: ChatSyncInput,
  ): Effect.Effect<
    ChatSyncOutput,
    | AccessDeniedException
    | ConflictException
    | ExternalResourceException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  checkDocumentAccess(
    input: CheckDocumentAccessRequest,
  ): Effect.Effect<
    CheckDocumentAccessResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAnonymousWebExperienceUrl(
    input: CreateAnonymousWebExperienceUrlRequest,
  ): Effect.Effect<
    CreateAnonymousWebExperienceUrlResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createChatResponseConfiguration(
    input: CreateChatResponseConfigurationRequest,
  ): Effect.Effect<
    CreateChatResponseConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSubscription(
    input: CreateSubscriptionRequest,
  ): Effect.Effect<
    CreateSubscriptionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    CreateUserResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAttachment(
    input: DeleteAttachmentRequest,
  ): Effect.Effect<
    DeleteAttachmentResponse,
    | AccessDeniedException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteChatControlsConfiguration(
    input: DeleteChatControlsConfigurationRequest,
  ): Effect.Effect<
    DeleteChatControlsConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteChatResponseConfiguration(
    input: DeleteChatResponseConfigurationRequest,
  ): Effect.Effect<
    DeleteChatResponseConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteConversation(
    input: DeleteConversationRequest,
  ): Effect.Effect<
    DeleteConversationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteGroup(
    input: DeleteGroupRequest,
  ): Effect.Effect<
    DeleteGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    DeleteUserResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociatePermission(
    input: DisassociatePermissionRequest,
  ): Effect.Effect<
    DisassociatePermissionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getChatControlsConfiguration(
    input: GetChatControlsConfigurationRequest,
  ): Effect.Effect<
    GetChatControlsConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getChatResponseConfiguration(
    input: GetChatResponseConfigurationRequest,
  ): Effect.Effect<
    GetChatResponseConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDocumentContent(
    input: GetDocumentContentRequest,
  ): Effect.Effect<
    GetDocumentContentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getGroup(
    input: GetGroupRequest,
  ): Effect.Effect<
    GetGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMedia(
    input: GetMediaRequest,
  ): Effect.Effect<
    GetMediaResponse,
    | AccessDeniedException
    | InternalServerException
    | LicenseNotFoundException
    | MediaTooLargeException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPolicy(
    input: GetPolicyRequest,
  ): Effect.Effect<
    GetPolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getUser(
    input: GetUserRequest,
  ): Effect.Effect<
    GetUserResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAttachments(
    input: ListAttachmentsRequest,
  ): Effect.Effect<
    ListAttachmentsResponse,
    | AccessDeniedException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listChatResponseConfigurations(
    input: ListChatResponseConfigurationsRequest,
  ): Effect.Effect<
    ListChatResponseConfigurationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listConversations(
    input: ListConversationsRequest,
  ): Effect.Effect<
    ListConversationsResponse,
    | AccessDeniedException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataSourceSyncJobs(
    input: ListDataSourceSyncJobsRequest,
  ): Effect.Effect<
    ListDataSourceSyncJobsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDocuments(
    input: ListDocumentsRequest,
  ): Effect.Effect<
    ListDocumentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listGroups(
    input: ListGroupsRequest,
  ): Effect.Effect<
    ListGroupsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMessages(
    input: ListMessagesRequest,
  ): Effect.Effect<
    ListMessagesResponse,
    | AccessDeniedException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPluginActions(
    input: ListPluginActionsRequest,
  ): Effect.Effect<
    ListPluginActionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPluginTypeActions(
    input: ListPluginTypeActionsRequest,
  ): Effect.Effect<
    ListPluginTypeActionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPluginTypeMetadata(
    input: ListPluginTypeMetadataRequest,
  ): Effect.Effect<
    ListPluginTypeMetadataResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSubscriptions(
    input: ListSubscriptionsRequest,
  ): Effect.Effect<
    ListSubscriptionsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putFeedback(
    input: PutFeedbackRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putGroup(
    input: PutGroupRequest,
  ): Effect.Effect<
    PutGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchRelevantContent(
    input: SearchRelevantContentRequest,
  ): Effect.Effect<
    SearchRelevantContentResponse,
    | AccessDeniedException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startDataSourceSyncJob(
    input: StartDataSourceSyncJobRequest,
  ): Effect.Effect<
    StartDataSourceSyncJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopDataSourceSyncJob(
    input: StopDataSourceSyncJobRequest,
  ): Effect.Effect<
    StopDataSourceSyncJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateChatControlsConfiguration(
    input: UpdateChatControlsConfigurationRequest,
  ): Effect.Effect<
    UpdateChatControlsConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateChatResponseConfiguration(
    input: UpdateChatResponseConfigurationRequest,
  ): Effect.Effect<
    UpdateChatResponseConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSubscription(
    input: UpdateSubscriptionRequest,
  ): Effect.Effect<
    UpdateSubscriptionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateUser(
    input: UpdateUserRequest,
  ): Effect.Effect<
    UpdateUserResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataAccessor(
    input: CreateDataAccessorRequest,
  ): Effect.Effect<
    CreateDataAccessorResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataSource(
    input: CreateDataSourceRequest,
  ): Effect.Effect<
    CreateDataSourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createIndex(
    input: CreateIndexRequest,
  ): Effect.Effect<
    CreateIndexResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createPlugin(
    input: CreatePluginRequest,
  ): Effect.Effect<
    CreatePluginResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRetriever(
    input: CreateRetrieverRequest,
  ): Effect.Effect<
    CreateRetrieverResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createWebExperience(
    input: CreateWebExperienceRequest,
  ): Effect.Effect<
    CreateWebExperienceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    DeleteApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataAccessor(
    input: DeleteDataAccessorRequest,
  ): Effect.Effect<
    DeleteDataAccessorResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataSource(
    input: DeleteDataSourceRequest,
  ): Effect.Effect<
    DeleteDataSourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteIndex(
    input: DeleteIndexRequest,
  ): Effect.Effect<
    DeleteIndexResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePlugin(
    input: DeletePluginRequest,
  ): Effect.Effect<
    DeletePluginResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRetriever(
    input: DeleteRetrieverRequest,
  ): Effect.Effect<
    DeleteRetrieverResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteWebExperience(
    input: DeleteWebExperienceRequest,
  ): Effect.Effect<
    DeleteWebExperienceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getApplication(
    input: GetApplicationRequest,
  ): Effect.Effect<
    GetApplicationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataAccessor(
    input: GetDataAccessorRequest,
  ): Effect.Effect<
    GetDataAccessorResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataSource(
    input: GetDataSourceRequest,
  ): Effect.Effect<
    GetDataSourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getIndex(
    input: GetIndexRequest,
  ): Effect.Effect<
    GetIndexResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPlugin(
    input: GetPluginRequest,
  ): Effect.Effect<
    GetPluginResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRetriever(
    input: GetRetrieverRequest,
  ): Effect.Effect<
    GetRetrieverResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getWebExperience(
    input: GetWebExperienceRequest,
  ): Effect.Effect<
    GetWebExperienceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    ListApplicationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataAccessors(
    input: ListDataAccessorsRequest,
  ): Effect.Effect<
    ListDataAccessorsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataSources(
    input: ListDataSourcesRequest,
  ): Effect.Effect<
    ListDataSourcesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listIndices(
    input: ListIndicesRequest,
  ): Effect.Effect<
    ListIndicesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPlugins(
    input: ListPluginsRequest,
  ): Effect.Effect<
    ListPluginsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRetrievers(
    input: ListRetrieversRequest,
  ): Effect.Effect<
    ListRetrieversResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listWebExperiences(
    input: ListWebExperiencesRequest,
  ): Effect.Effect<
    ListWebExperiencesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    UpdateApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDataAccessor(
    input: UpdateDataAccessorRequest,
  ): Effect.Effect<
    UpdateDataAccessorResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDataSource(
    input: UpdateDataSourceRequest,
  ): Effect.Effect<
    UpdateDataSourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateIndex(
    input: UpdateIndexRequest,
  ): Effect.Effect<
    UpdateIndexResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePlugin(
    input: UpdatePluginRequest,
  ): Effect.Effect<
    UpdatePluginResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateRetriever(
    input: UpdateRetrieverRequest,
  ): Effect.Effect<
    UpdateRetrieverResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateWebExperience(
    input: UpdateWebExperienceRequest,
  ): Effect.Effect<
    UpdateWebExperienceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Qbusiness extends QBusiness {}

export interface AccessConfiguration {
  accessControls: Array<AccessControl>;
  memberRelation?: MemberRelation;
}
export interface AccessControl {
  principals: Array<Principal>;
  memberRelation?: MemberRelation;
}
export type AccessControls = Array<AccessControl>;
export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface ActionConfiguration {
  action: string;
  filterConfiguration?: ActionFilterConfiguration;
}
export type ActionConfigurationList = Array<ActionConfiguration>;
export interface ActionExecution {
  pluginId: string;
  payload: Record<string, ActionExecutionPayloadField>;
  payloadFieldNameSeparator: string;
}
export interface ActionExecutionEvent {
  pluginId: string;
  payload: Record<string, ActionExecutionPayloadField>;
  payloadFieldNameSeparator: string;
}
export type ActionExecutionPayload = Record<
  string,
  ActionExecutionPayloadField
>;
export interface ActionExecutionPayloadField {
  value: unknown;
}
export interface ActionFilterConfiguration {
  documentAttributeFilter: AttributeFilter;
}
export type ActionPayloadFieldKey = string;

export type ActionPayloadFieldNameSeparator = string;

export type ActionPayloadFieldType = "STRING" | "NUMBER" | "ARRAY" | "BOOLEAN";
export type ActionPayloadFieldValue = unknown;

export interface ActionReview {
  pluginId?: string;
  pluginType?: PluginType;
  payload?: Record<string, ActionReviewPayloadField>;
  payloadFieldNameSeparator?: string;
}
export interface ActionReviewEvent {
  conversationId?: string;
  userMessageId?: string;
  systemMessageId?: string;
  pluginId?: string;
  pluginType?: PluginType;
  payload?: Record<string, ActionReviewPayloadField>;
  payloadFieldNameSeparator?: string;
}
export type ActionReviewPayload = Record<string, ActionReviewPayloadField>;
export interface ActionReviewPayloadField {
  displayName?: string;
  displayOrder?: number;
  displayDescription?: string;
  type?: ActionPayloadFieldType;
  value?: unknown;
  allowedValues?: Array<ActionReviewPayloadFieldAllowedValue>;
  allowedFormat?: string;
  arrayItemJsonSchema?: unknown;
  required?: boolean;
}
export interface ActionReviewPayloadFieldAllowedValue {
  value?: unknown;
  displayValue?: unknown;
}
export type ActionReviewPayloadFieldAllowedValues =
  Array<ActionReviewPayloadFieldAllowedValue>;
export type ActionReviewPayloadFieldArrayItemJsonSchema = unknown;

export type Actions = Array<ActionSummary>;
export interface ActionSummary {
  actionIdentifier?: string;
  displayName?: string;
  instructionExample?: string;
  description?: string;
}
export type AmazonResourceName = string;

interface _APISchema {
  payload?: string;
  s3?: S3;
}

export type APISchema =
  | (_APISchema & { payload: string })
  | (_APISchema & { s3: S3 });
export type APISchemaType = "OPEN_API_V3";
export interface Application {
  displayName?: string;
  applicationId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  status?: ApplicationStatus;
  identityType?: IdentityType;
  quickSightConfiguration?: QuickSightConfiguration;
}
export type ApplicationArn = string;

export type ApplicationId = string;

export type ApplicationName = string;

export type Applications = Array<Application>;
export type ApplicationStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING";
export interface AppliedAttachmentsConfiguration {
  attachmentsControlMode?: AttachmentsControlMode;
}
export interface AppliedCreatorModeConfiguration {
  creatorModeControl: CreatorModeControl;
}
export interface AppliedOrchestrationConfiguration {
  control: OrchestrationControl;
}
export interface AssociatedGroup {
  name?: string;
  type?: MembershipType;
}
export type AssociatedGroups = Array<AssociatedGroup>;
export interface AssociatedUser {
  id?: string;
  type?: MembershipType;
}
export type AssociatedUsers = Array<AssociatedUser>;
export interface AssociatePermissionRequest {
  applicationId: string;
  statementId: string;
  actions: Array<string>;
  conditions?: Array<PermissionCondition>;
  principal: string;
}
export interface AssociatePermissionResponse {
  statement?: string;
}
export interface Attachment {
  attachmentId?: string;
  conversationId?: string;
  name?: string;
  copyFrom?: CopyFromSource;
  fileType?: string;
  fileSize?: number;
  md5chksum?: string;
  createdAt?: Date | string;
  status?: AttachmentStatus;
  error?: ErrorDetail;
}
export type AttachmentId = string;

export interface AttachmentInput {
  data?: Uint8Array | string;
  name?: string;
  copyFrom?: CopyFromSource;
}
export interface AttachmentInputEvent {
  attachment?: AttachmentInput;
}
export type AttachmentList = Array<Attachment>;
export type AttachmentName = string;

export interface AttachmentOutput {
  name?: string;
  status?: AttachmentStatus;
  error?: ErrorDetail;
  attachmentId?: string;
  conversationId?: string;
}
export interface AttachmentsConfiguration {
  attachmentsControlMode: AttachmentsControlMode;
}
export type AttachmentsControlMode = "ENABLED" | "DISABLED";
export type AttachmentsInput = Array<AttachmentInput>;
export type AttachmentsOutput = Array<AttachmentOutput>;
export type AttachmentStatus = "FAILED" | "SUCCESS";
export interface AttributeFilter {
  andAllFilters?: Array<AttributeFilter>;
  orAllFilters?: Array<AttributeFilter>;
  notFilter?: AttributeFilter;
  equalsTo?: DocumentAttribute;
  containsAll?: DocumentAttribute;
  containsAny?: DocumentAttribute;
  greaterThan?: DocumentAttribute;
  greaterThanOrEquals?: DocumentAttribute;
  lessThan?: DocumentAttribute;
  lessThanOrEquals?: DocumentAttribute;
}
export type AttributeFilters = Array<AttributeFilter>;
export type AttributeType = "STRING" | "STRING_LIST" | "NUMBER" | "DATE";
export type AttributeValueOperator = "DELETE";
export interface AudioExtractionConfiguration {
  audioExtractionStatus: AudioExtractionStatus;
}
export type AudioExtractionStatus = "ENABLED" | "DISABLED";
export type AudioExtractionType = "TRANSCRIPT" | "SUMMARY";
export interface AudioSourceDetails {
  mediaId?: string;
  mediaMimeType?: string;
  startTimeMilliseconds?: number;
  endTimeMilliseconds?: number;
  audioExtractionType?: AudioExtractionType;
}
export interface AuthChallengeRequest {
  authorizationUrl: string;
}
export interface AuthChallengeRequestEvent {
  authorizationUrl: string;
}
export interface AuthChallengeResponse {
  responseMap: Record<string, string>;
}
export interface AuthChallengeResponseEvent {
  responseMap: Record<string, string>;
}
export type AuthorizationResponseMap = Record<string, string>;
export type AuthResponseKey = string;

export type AuthResponseValue = string;

export interface AutoSubscriptionConfiguration {
  autoSubscribe: AutoSubscriptionStatus;
  defaultSubscriptionType?: SubscriptionType;
}
export type AutoSubscriptionStatus = "ENABLED" | "DISABLED";
export interface BasicAuthConfiguration {
  secretArn: string;
  roleArn: string;
}
export interface BatchDeleteDocumentRequest {
  applicationId: string;
  indexId: string;
  documents: Array<DeleteDocument>;
  dataSourceSyncId?: string;
}
export interface BatchDeleteDocumentResponse {
  failedDocuments?: Array<FailedDocument>;
}
export interface BatchPutDocumentRequest {
  applicationId: string;
  indexId: string;
  documents: Array<Document>;
  roleArn?: string;
  dataSourceSyncId?: string;
}
export interface BatchPutDocumentResponse {
  failedDocuments?: Array<FailedDocument>;
}
export type Blob = Uint8Array | string;

export type BlockedPhrase = string;

export type BlockedPhrases = Array<string>;
export interface BlockedPhrasesConfiguration {
  blockedPhrases?: Array<string>;
  systemMessageOverride?: string;
}
export interface BlockedPhrasesConfigurationUpdate {
  blockedPhrasesToCreateOrUpdate?: Array<string>;
  blockedPhrasesToDelete?: Array<string>;
  systemMessageOverride?: string;
}
export type BoostingDurationInSeconds = number;

export type BrowserExtension = string;

export interface BrowserExtensionConfiguration {
  enabledBrowserExtensions: Array<string>;
}
export type BrowserExtensionList = Array<string>;
export interface CancelSubscriptionRequest {
  applicationId: string;
  subscriptionId: string;
}
export interface CancelSubscriptionResponse {
  subscriptionArn?: string;
  currentSubscription?: SubscriptionDetails;
  nextSubscription?: SubscriptionDetails;
}
export interface ChatInput {
  applicationId: string;
  userId?: string;
  userGroups?: Array<string>;
  conversationId?: string;
  parentMessageId?: string;
  clientToken?: string;
  inputStream?: ChatInputStream;
}
interface _ChatInputStream {
  configurationEvent?: ConfigurationEvent;
  textEvent?: TextInputEvent;
  attachmentEvent?: AttachmentInputEvent;
  actionExecutionEvent?: ActionExecutionEvent;
  endOfInputEvent?: EndOfInputEvent;
  authChallengeResponseEvent?: AuthChallengeResponseEvent;
}

export type ChatInputStream =
  | (_ChatInputStream & { configurationEvent: ConfigurationEvent })
  | (_ChatInputStream & { textEvent: TextInputEvent })
  | (_ChatInputStream & { attachmentEvent: AttachmentInputEvent })
  | (_ChatInputStream & { actionExecutionEvent: ActionExecutionEvent })
  | (_ChatInputStream & { endOfInputEvent: EndOfInputEvent })
  | (_ChatInputStream & {
      authChallengeResponseEvent: AuthChallengeResponseEvent;
    });
export type ChatMode = "RETRIEVAL_MODE" | "CREATOR_MODE" | "PLUGIN_MODE";
interface _ChatModeConfiguration {
  pluginConfiguration?: PluginConfiguration;
}

export type ChatModeConfiguration = _ChatModeConfiguration & {
  pluginConfiguration: PluginConfiguration;
};
export interface ChatOutput {
  outputStream?: ChatOutputStream;
}
interface _ChatOutputStream {
  textEvent?: TextOutputEvent;
  metadataEvent?: MetadataEvent;
  actionReviewEvent?: ActionReviewEvent;
  failedAttachmentEvent?: FailedAttachmentEvent;
  authChallengeRequestEvent?: AuthChallengeRequestEvent;
}

export type ChatOutputStream =
  | (_ChatOutputStream & { textEvent: TextOutputEvent })
  | (_ChatOutputStream & { metadataEvent: MetadataEvent })
  | (_ChatOutputStream & { actionReviewEvent: ActionReviewEvent })
  | (_ChatOutputStream & { failedAttachmentEvent: FailedAttachmentEvent })
  | (_ChatOutputStream & {
      authChallengeRequestEvent: AuthChallengeRequestEvent;
    });
export interface ChatResponseConfiguration {
  chatResponseConfigurationId: string;
  chatResponseConfigurationArn: string;
  displayName: string;
  responseConfigurationSummary?: string;
  status: ChatResponseConfigurationStatus;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export type ChatResponseConfigurationArn = string;

export interface ChatResponseConfigurationDetail {
  responseConfigurations?: { [key in ResponseConfigurationType]?: string };
  responseConfigurationSummary?: string;
  status?: ChatResponseConfigurationStatus;
  error?: ErrorDetail;
  updatedAt?: Date | string;
}
export type ChatResponseConfigurationId = string;

export type ChatResponseConfigurations = Array<ChatResponseConfiguration>;
export type ChatResponseConfigurationStatus =
  | "CREATING"
  | "UPDATING"
  | "FAILED"
  | "ACTIVE";
export interface ChatSyncInput {
  applicationId: string;
  userId?: string;
  userGroups?: Array<string>;
  userMessage?: string;
  attachments?: Array<AttachmentInput>;
  actionExecution?: ActionExecution;
  authChallengeResponse?: AuthChallengeResponse;
  conversationId?: string;
  parentMessageId?: string;
  attributeFilter?: AttributeFilter;
  chatMode?: ChatMode;
  chatModeConfiguration?: ChatModeConfiguration;
  clientToken?: string;
}
export interface ChatSyncOutput {
  conversationId?: string;
  systemMessage?: string;
  systemMessageId?: string;
  userMessageId?: string;
  actionReview?: ActionReview;
  authChallengeRequest?: AuthChallengeRequest;
  sourceAttributions?: Array<SourceAttribution>;
  failedAttachments?: Array<AttachmentOutput>;
}
export interface CheckDocumentAccessRequest {
  applicationId: string;
  indexId: string;
  userId: string;
  documentId: string;
  dataSourceId?: string;
}
export interface CheckDocumentAccessResponse {
  userGroups?: Array<AssociatedGroup>;
  userAliases?: Array<AssociatedUser>;
  hasAccess?: boolean;
  documentAcl?: DocumentAcl;
}
export type ClientIdForOIDC = string;

export type ClientIdsForOIDC = Array<string>;
export type ClientNamespace = string;

export type ClientToken = string;

export interface ConfigurationEvent {
  chatMode?: ChatMode;
  chatModeConfiguration?: ChatModeConfiguration;
  attributeFilter?: AttributeFilter;
}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface ContentBlockerRule {
  systemMessageOverride?: string;
}
export interface ContentRetrievalRule {
  eligibleDataSources?: Array<EligibleDataSource>;
}
interface _ContentSource {
  retriever?: RetrieverContentSource;
}

export type ContentSource = _ContentSource & {
  retriever: RetrieverContentSource;
};
export type ContentType =
  | "PDF"
  | "HTML"
  | "MS_WORD"
  | "PLAIN_TEXT"
  | "PPT"
  | "RTF"
  | "XML"
  | "XSLT"
  | "MS_EXCEL"
  | "CSV"
  | "JSON"
  | "MD";
export interface Conversation {
  conversationId?: string;
  title?: string;
  startTime?: Date | string;
}
export type ConversationId = string;

export type Conversations = Array<Conversation>;
export interface ConversationSource {
  conversationId: string;
  attachmentId: string;
}
export type ConversationTitle = string;

interface _CopyFromSource {
  conversation?: ConversationSource;
}

export type CopyFromSource = _CopyFromSource & {
  conversation: ConversationSource;
};
export interface CreateAnonymousWebExperienceUrlRequest {
  applicationId: string;
  webExperienceId: string;
  sessionDurationInMinutes?: number;
}
export interface CreateAnonymousWebExperienceUrlResponse {
  anonymousUrl?: string;
}
export interface CreateApplicationRequest {
  displayName: string;
  roleArn?: string;
  identityType?: IdentityType;
  iamIdentityProviderArn?: string;
  identityCenterInstanceArn?: string;
  clientIdsForOIDC?: Array<string>;
  description?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  tags?: Array<Tag>;
  clientToken?: string;
  attachmentsConfiguration?: AttachmentsConfiguration;
  qAppsConfiguration?: QAppsConfiguration;
  personalizationConfiguration?: PersonalizationConfiguration;
  quickSightConfiguration?: QuickSightConfiguration;
}
export interface CreateApplicationResponse {
  applicationId?: string;
  applicationArn?: string;
}
export interface CreateChatResponseConfigurationRequest {
  applicationId: string;
  displayName: string;
  clientToken?: string;
  responseConfigurations: { [key in ResponseConfigurationType]?: string };
  tags?: Array<Tag>;
}
export interface CreateChatResponseConfigurationResponse {
  chatResponseConfigurationId: string;
  chatResponseConfigurationArn: string;
}
export interface CreateDataAccessorRequest {
  applicationId: string;
  principal: string;
  actionConfigurations: Array<ActionConfiguration>;
  clientToken?: string;
  displayName: string;
  authenticationDetail?: DataAccessorAuthenticationDetail;
  tags?: Array<Tag>;
}
export interface CreateDataAccessorResponse {
  dataAccessorId: string;
  idcApplicationArn: string;
  dataAccessorArn: string;
}
export interface CreateDataSourceRequest {
  applicationId: string;
  indexId: string;
  displayName: string;
  configuration: unknown;
  vpcConfiguration?: DataSourceVpcConfiguration;
  description?: string;
  tags?: Array<Tag>;
  syncSchedule?: string;
  roleArn?: string;
  clientToken?: string;
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
  mediaExtractionConfiguration?: MediaExtractionConfiguration;
}
export interface CreateDataSourceResponse {
  dataSourceId?: string;
  dataSourceArn?: string;
}
export interface CreateIndexRequest {
  applicationId: string;
  displayName: string;
  description?: string;
  type?: IndexType;
  tags?: Array<Tag>;
  capacityConfiguration?: IndexCapacityConfiguration;
  clientToken?: string;
}
export interface CreateIndexResponse {
  indexId?: string;
  indexArn?: string;
}
export interface CreatePluginRequest {
  applicationId: string;
  displayName: string;
  type: PluginType;
  authConfiguration: PluginAuthConfiguration;
  serverUrl?: string;
  customPluginConfiguration?: CustomPluginConfiguration;
  tags?: Array<Tag>;
  clientToken?: string;
}
export interface CreatePluginResponse {
  pluginId?: string;
  pluginArn?: string;
  buildStatus?: PluginBuildStatus;
}
export interface CreateRetrieverRequest {
  applicationId: string;
  type: RetrieverType;
  displayName: string;
  configuration: RetrieverConfiguration;
  roleArn?: string;
  clientToken?: string;
  tags?: Array<Tag>;
}
export interface CreateRetrieverResponse {
  retrieverId?: string;
  retrieverArn?: string;
}
export interface CreateSubscriptionRequest {
  applicationId: string;
  principal: SubscriptionPrincipal;
  type: SubscriptionType;
  clientToken?: string;
}
export interface CreateSubscriptionResponse {
  subscriptionId?: string;
  subscriptionArn?: string;
  currentSubscription?: SubscriptionDetails;
  nextSubscription?: SubscriptionDetails;
}
export interface CreateUserRequest {
  applicationId: string;
  userId: string;
  userAliases?: Array<UserAlias>;
  clientToken?: string;
}
export interface CreateUserResponse {}
export interface CreateWebExperienceRequest {
  applicationId: string;
  title?: string;
  subtitle?: string;
  welcomeMessage?: string;
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
  origins?: Array<string>;
  roleArn?: string;
  tags?: Array<Tag>;
  clientToken?: string;
  identityProviderConfiguration?: IdentityProviderConfiguration;
  browserExtensionConfiguration?: BrowserExtensionConfiguration;
  customizationConfiguration?: CustomizationConfiguration;
}
export interface CreateWebExperienceResponse {
  webExperienceId?: string;
  webExperienceArn?: string;
}
export interface CreatorModeConfiguration {
  creatorModeControl: CreatorModeControl;
}
export type CreatorModeControl = "ENABLED" | "DISABLED";
export type CustomCSSUrl = string;

export interface CustomizationConfiguration {
  customCSSUrl?: string;
  logoUrl?: string;
  fontUrl?: string;
  faviconUrl?: string;
}
export interface CustomPluginConfiguration {
  description: string;
  apiSchemaType: APISchemaType;
  apiSchema?: APISchema;
}
export interface DataAccessor {
  displayName?: string;
  dataAccessorId?: string;
  dataAccessorArn?: string;
  idcApplicationArn?: string;
  principal?: string;
  authenticationDetail?: DataAccessorAuthenticationDetail;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export type DataAccessorArn = string;

interface _DataAccessorAuthenticationConfiguration {
  idcTrustedTokenIssuerConfiguration?: DataAccessorIdcTrustedTokenIssuerConfiguration;
}

export type DataAccessorAuthenticationConfiguration =
  _DataAccessorAuthenticationConfiguration & {
    idcTrustedTokenIssuerConfiguration: DataAccessorIdcTrustedTokenIssuerConfiguration;
  };
export interface DataAccessorAuthenticationDetail {
  authenticationType: DataAccessorAuthenticationType;
  authenticationConfiguration?: DataAccessorAuthenticationConfiguration;
  externalIds?: Array<string>;
}
export type DataAccessorAuthenticationType =
  | "AWS_IAM_IDC_TTI"
  | "AWS_IAM_IDC_AUTH_CODE";
export type DataAccessorExternalId = string;

export type DataAccessorExternalIds = Array<string>;
export type DataAccessorId = string;

export interface DataAccessorIdcTrustedTokenIssuerConfiguration {
  idcTrustedTokenIssuerArn: string;
}
export type DataAccessorName = string;

export type DataAccessors = Array<DataAccessor>;
export interface DataSource {
  displayName?: string;
  dataSourceId?: string;
  type?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  status?: DataSourceStatus;
}
export type DataSourceArn = string;

export type DataSourceConfiguration = unknown;

export type DataSourceId = string;

export type DataSourceIds = Array<string>;
export type DataSourceName = string;

export type DataSources = Array<DataSource>;
export type DataSourceStatus =
  | "PENDING_CREATION"
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING";
export interface DataSourceSyncJob {
  executionId?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  status?: DataSourceSyncJobStatus;
  error?: ErrorDetail;
  dataSourceErrorCode?: string;
  metrics?: DataSourceSyncJobMetrics;
}
export interface DataSourceSyncJobMetrics {
  documentsAdded?: string;
  documentsModified?: string;
  documentsDeleted?: string;
  documentsFailed?: string;
  documentsScanned?: string;
}
export type DataSourceSyncJobs = Array<DataSourceSyncJob>;
export type DataSourceSyncJobStatus =
  | "FAILED"
  | "SUCCEEDED"
  | "SYNCING"
  | "INCOMPLETE"
  | "STOPPING"
  | "ABORTED"
  | "SYNCING_INDEXING";
export type DataSourceUserId = string;

export interface DataSourceVpcConfiguration {
  subnetIds: Array<string>;
  securityGroupIds: Array<string>;
}
export interface DateAttributeBoostingConfiguration {
  boostingLevel: DocumentAttributeBoostingLevel;
  boostingDurationInSeconds?: number;
}
export interface DeleteApplicationRequest {
  applicationId: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteAttachmentRequest {
  applicationId: string;
  conversationId: string;
  attachmentId: string;
  userId?: string;
}
export interface DeleteAttachmentResponse {}
export interface DeleteChatControlsConfigurationRequest {
  applicationId: string;
}
export interface DeleteChatControlsConfigurationResponse {}
export interface DeleteChatResponseConfigurationRequest {
  applicationId: string;
  chatResponseConfigurationId: string;
}
export interface DeleteChatResponseConfigurationResponse {}
export interface DeleteConversationRequest {
  conversationId: string;
  applicationId: string;
  userId?: string;
}
export interface DeleteConversationResponse {}
export interface DeleteDataAccessorRequest {
  applicationId: string;
  dataAccessorId: string;
}
export interface DeleteDataAccessorResponse {}
export interface DeleteDataSourceRequest {
  applicationId: string;
  indexId: string;
  dataSourceId: string;
}
export interface DeleteDataSourceResponse {}
export interface DeleteDocument {
  documentId: string;
}
export type DeleteDocuments = Array<DeleteDocument>;
export interface DeleteGroupRequest {
  applicationId: string;
  indexId: string;
  groupName: string;
  dataSourceId?: string;
}
export interface DeleteGroupResponse {}
export interface DeleteIndexRequest {
  applicationId: string;
  indexId: string;
}
export interface DeleteIndexResponse {}
export interface DeletePluginRequest {
  applicationId: string;
  pluginId: string;
}
export interface DeletePluginResponse {}
export interface DeleteRetrieverRequest {
  applicationId: string;
  retrieverId: string;
}
export interface DeleteRetrieverResponse {}
export interface DeleteUserRequest {
  applicationId: string;
  userId: string;
}
export interface DeleteUserResponse {}
export interface DeleteWebExperienceRequest {
  applicationId: string;
  webExperienceId: string;
}
export interface DeleteWebExperienceResponse {}
export type Description = string;

export interface DisassociatePermissionRequest {
  applicationId: string;
  statementId: string;
}
export interface DisassociatePermissionResponse {}
export type DisplayName = string;

export interface Document {
  id: string;
  attributes?: Array<DocumentAttribute>;
  content?: DocumentContent;
  contentType?: ContentType;
  title?: string;
  accessConfiguration?: AccessConfiguration;
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
  mediaExtractionConfiguration?: MediaExtractionConfiguration;
}
export interface DocumentAcl {
  allowlist?: DocumentAclMembership;
  denyList?: DocumentAclMembership;
}
export interface DocumentAclCondition {
  memberRelation?: MemberRelation;
  users?: Array<DocumentAclUser>;
  groups?: Array<DocumentAclGroup>;
}
export type DocumentAclConditions = Array<DocumentAclCondition>;
export interface DocumentAclGroup {
  name?: string;
  type?: MembershipType;
}
export type DocumentAclGroups = Array<DocumentAclGroup>;
export interface DocumentAclMembership {
  memberRelation?: MemberRelation;
  conditions?: Array<DocumentAclCondition>;
}
export interface DocumentAclUser {
  id?: string;
  type?: MembershipType;
}
export type DocumentAclUsers = Array<DocumentAclUser>;
export interface DocumentAttribute {
  name: string;
  value: DocumentAttributeValue;
}
interface _DocumentAttributeBoostingConfiguration {
  numberConfiguration?: NumberAttributeBoostingConfiguration;
  stringConfiguration?: StringAttributeBoostingConfiguration;
  dateConfiguration?: DateAttributeBoostingConfiguration;
  stringListConfiguration?: StringListAttributeBoostingConfiguration;
}

export type DocumentAttributeBoostingConfiguration =
  | (_DocumentAttributeBoostingConfiguration & {
      numberConfiguration: NumberAttributeBoostingConfiguration;
    })
  | (_DocumentAttributeBoostingConfiguration & {
      stringConfiguration: StringAttributeBoostingConfiguration;
    })
  | (_DocumentAttributeBoostingConfiguration & {
      dateConfiguration: DateAttributeBoostingConfiguration;
    })
  | (_DocumentAttributeBoostingConfiguration & {
      stringListConfiguration: StringListAttributeBoostingConfiguration;
    });
export type DocumentAttributeBoostingLevel =
  | "NONE"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "VERY_HIGH"
  | "ONE"
  | "TWO";
export type DocumentAttributeBoostingOverrideMap = Record<
  string,
  DocumentAttributeBoostingConfiguration
>;
export interface DocumentAttributeCondition {
  key: string;
  operator: DocumentEnrichmentConditionOperator;
  value?: DocumentAttributeValue;
}
export interface DocumentAttributeConfiguration {
  name?: string;
  type?: AttributeType;
  search?: Status;
}
export type DocumentAttributeConfigurations =
  Array<DocumentAttributeConfiguration>;
export type DocumentAttributeKey = string;

export type DocumentAttributes = Array<DocumentAttribute>;
export type DocumentAttributeStringListValue = Array<string>;
export type DocumentAttributeStringValue = string;

export interface DocumentAttributeTarget {
  key: string;
  value?: DocumentAttributeValue;
  attributeValueOperator?: AttributeValueOperator;
}
interface _DocumentAttributeValue {
  stringValue?: string;
  stringListValue?: Array<string>;
  longValue?: number;
  dateValue?: Date | string;
}

export type DocumentAttributeValue =
  | (_DocumentAttributeValue & { stringValue: string })
  | (_DocumentAttributeValue & { stringListValue: Array<string> })
  | (_DocumentAttributeValue & { longValue: number })
  | (_DocumentAttributeValue & { dateValue: Date | string });
interface _DocumentContent {
  blob?: Uint8Array | string;
  s3?: S3;
}

export type DocumentContent =
  | (_DocumentContent & { blob: Uint8Array | string })
  | (_DocumentContent & { s3: S3 });
export type DocumentContentOperator = "DELETE";
export type DocumentDetailList = Array<DocumentDetails>;
export interface DocumentDetails {
  documentId?: string;
  status?: DocumentStatus;
  error?: ErrorDetail;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export type DocumentEnrichmentConditionOperator =
  | "GREATER_THAN"
  | "GREATER_THAN_OR_EQUALS"
  | "LESS_THAN"
  | "LESS_THAN_OR_EQUALS"
  | "EQUALS"
  | "NOT_EQUALS"
  | "CONTAINS"
  | "NOT_CONTAINS"
  | "EXISTS"
  | "NOT_EXISTS"
  | "BEGINS_WITH";
export interface DocumentEnrichmentConfiguration {
  inlineConfigurations?: Array<InlineDocumentEnrichmentConfiguration>;
  preExtractionHookConfiguration?: HookConfiguration;
  postExtractionHookConfiguration?: HookConfiguration;
}
export type DocumentId = string;

export type DocumentMetadataConfigurationName = string;

export type Documents = Array<Document>;
export type DocumentStatus =
  | "RECEIVED"
  | "PROCESSING"
  | "INDEXED"
  | "UPDATED"
  | "FAILED"
  | "DELETING"
  | "DELETED"
  | "DOCUMENT_FAILED_TO_INDEX";
export interface EligibleDataSource {
  indexId?: string;
  dataSourceId?: string;
}
export type EligibleDataSources = Array<EligibleDataSource>;
export interface EncryptionConfiguration {
  kmsKeyId?: string;
}
export interface EndOfInputEvent {}
export type ErrorCode =
  | "InternalError"
  | "InvalidRequest"
  | "ResourceInactive"
  | "ResourceNotFound";
export interface ErrorDetail {
  errorMessage?: string;
  errorCode?: ErrorCode;
}
export type ErrorMessage = string;

export type ExampleChatMessage = string;

export type ExampleChatMessages = Array<string>;
export type ExecutionId = string;

export declare class ExternalResourceException extends Data.TaggedError(
  "ExternalResourceException",
)<{
  readonly message: string;
}> {}
export interface FailedAttachmentEvent {
  conversationId?: string;
  userMessageId?: string;
  systemMessageId?: string;
  attachment?: AttachmentOutput;
}
export interface FailedDocument {
  id?: string;
  error?: ErrorDetail;
  dataSourceId?: string;
}
export type FailedDocuments = Array<FailedDocument>;
export type FaviconUrl = string;

export type FontUrl = string;

export interface GetApplicationRequest {
  applicationId: string;
}
export interface GetApplicationResponse {
  displayName?: string;
  applicationId?: string;
  applicationArn?: string;
  identityType?: IdentityType;
  iamIdentityProviderArn?: string;
  identityCenterApplicationArn?: string;
  roleArn?: string;
  status?: ApplicationStatus;
  description?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  error?: ErrorDetail;
  attachmentsConfiguration?: AppliedAttachmentsConfiguration;
  qAppsConfiguration?: QAppsConfiguration;
  personalizationConfiguration?: PersonalizationConfiguration;
  autoSubscriptionConfiguration?: AutoSubscriptionConfiguration;
  clientIdsForOIDC?: Array<string>;
  quickSightConfiguration?: QuickSightConfiguration;
}
export interface GetChatControlsConfigurationRequest {
  applicationId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface GetChatControlsConfigurationResponse {
  responseScope?: ResponseScope;
  orchestrationConfiguration?: AppliedOrchestrationConfiguration;
  blockedPhrases?: BlockedPhrasesConfiguration;
  topicConfigurations?: Array<TopicConfiguration>;
  creatorModeConfiguration?: AppliedCreatorModeConfiguration;
  nextToken?: string;
  hallucinationReductionConfiguration?: HallucinationReductionConfiguration;
}
export interface GetChatResponseConfigurationRequest {
  applicationId: string;
  chatResponseConfigurationId: string;
}
export interface GetChatResponseConfigurationResponse {
  chatResponseConfigurationId?: string;
  chatResponseConfigurationArn?: string;
  displayName?: string;
  createdAt?: Date | string;
  inUseConfiguration?: ChatResponseConfigurationDetail;
  lastUpdateConfiguration?: ChatResponseConfigurationDetail;
}
export interface GetDataAccessorRequest {
  applicationId: string;
  dataAccessorId: string;
}
export interface GetDataAccessorResponse {
  displayName?: string;
  dataAccessorId?: string;
  dataAccessorArn?: string;
  applicationId?: string;
  idcApplicationArn?: string;
  principal?: string;
  actionConfigurations?: Array<ActionConfiguration>;
  authenticationDetail?: DataAccessorAuthenticationDetail;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export interface GetDataSourceRequest {
  applicationId: string;
  indexId: string;
  dataSourceId: string;
}
export interface GetDataSourceResponse {
  applicationId?: string;
  indexId?: string;
  dataSourceId?: string;
  dataSourceArn?: string;
  displayName?: string;
  type?: string;
  configuration?: unknown;
  vpcConfiguration?: DataSourceVpcConfiguration;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  description?: string;
  status?: DataSourceStatus;
  syncSchedule?: string;
  roleArn?: string;
  error?: ErrorDetail;
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
  mediaExtractionConfiguration?: MediaExtractionConfiguration;
}
export interface GetDocumentContentRequest {
  applicationId: string;
  indexId: string;
  dataSourceId?: string;
  documentId: string;
  outputFormat?: OutputFormat;
}
export interface GetDocumentContentResponse {
  presignedUrl: string;
  mimeType: string;
}
export interface GetGroupRequest {
  applicationId: string;
  indexId: string;
  groupName: string;
  dataSourceId?: string;
}
export interface GetGroupResponse {
  status?: GroupStatusDetail;
  statusHistory?: Array<GroupStatusDetail>;
}
export interface GetIndexRequest {
  applicationId: string;
  indexId: string;
}
export interface GetIndexResponse {
  applicationId?: string;
  indexId?: string;
  displayName?: string;
  indexArn?: string;
  status?: IndexStatus;
  type?: IndexType;
  description?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  capacityConfiguration?: IndexCapacityConfiguration;
  documentAttributeConfigurations?: Array<DocumentAttributeConfiguration>;
  error?: ErrorDetail;
  indexStatistics?: IndexStatistics;
}
export interface GetMediaRequest {
  applicationId: string;
  conversationId: string;
  messageId: string;
  mediaId: string;
}
export interface GetMediaResponse {
  mediaBytes?: Uint8Array | string;
  mediaMimeType?: string;
}
export interface GetPluginRequest {
  applicationId: string;
  pluginId: string;
}
export interface GetPluginResponse {
  applicationId?: string;
  pluginId?: string;
  displayName?: string;
  type?: PluginType;
  serverUrl?: string;
  authConfiguration?: PluginAuthConfiguration;
  customPluginConfiguration?: CustomPluginConfiguration;
  buildStatus?: PluginBuildStatus;
  pluginArn?: string;
  state?: PluginState;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export interface GetPolicyRequest {
  applicationId: string;
}
export interface GetPolicyResponse {
  policy?: string;
}
export interface GetRetrieverRequest {
  applicationId: string;
  retrieverId: string;
}
export interface GetRetrieverResponse {
  applicationId?: string;
  retrieverId?: string;
  retrieverArn?: string;
  type?: RetrieverType;
  status?: RetrieverStatus;
  displayName?: string;
  configuration?: RetrieverConfiguration;
  roleArn?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export interface GetUserRequest {
  applicationId: string;
  userId: string;
}
export interface GetUserResponse {
  userAliases?: Array<UserAlias>;
}
export interface GetWebExperienceRequest {
  applicationId: string;
  webExperienceId: string;
}
export interface GetWebExperienceResponse {
  applicationId?: string;
  webExperienceId?: string;
  webExperienceArn?: string;
  defaultEndpoint?: string;
  status?: WebExperienceStatus;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  title?: string;
  subtitle?: string;
  welcomeMessage?: string;
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
  origins?: Array<string>;
  roleArn?: string;
  identityProviderConfiguration?: IdentityProviderConfiguration;
  authenticationConfiguration?: WebExperienceAuthConfiguration;
  error?: ErrorDetail;
  browserExtensionConfiguration?: BrowserExtensionConfiguration;
  customizationConfiguration?: CustomizationConfiguration;
}
export type GroupIdentifier = string;

export interface GroupMembers {
  memberGroups?: Array<MemberGroup>;
  memberUsers?: Array<MemberUser>;
  s3PathForGroupMembers?: S3;
}
export type GroupName = string;

export type GroupStatus =
  | "FAILED"
  | "SUCCEEDED"
  | "PROCESSING"
  | "DELETING"
  | "DELETED";
export interface GroupStatusDetail {
  status?: GroupStatus;
  lastUpdatedAt?: Date | string;
  errorDetail?: ErrorDetail;
}
export type GroupStatusDetails = Array<GroupStatusDetail>;
export interface GroupSummary {
  groupName?: string;
}
export type GroupSummaryList = Array<GroupSummary>;
export interface HallucinationReductionConfiguration {
  hallucinationReductionControl?: HallucinationReductionControl;
}
export type HallucinationReductionControl = "ENABLED" | "DISABLED";
export interface HookConfiguration {
  invocationCondition?: DocumentAttributeCondition;
  lambdaArn?: string;
  s3BucketName?: string;
  roleArn?: string;
}
export type IAMIdentityProviderArn = string;

export type IdcApplicationArn = string;

export interface IdcAuthConfiguration {
  idcApplicationArn: string;
  roleArn: string;
}
export type IdcTrustedTokenIssuerArn = string;

interface _IdentityProviderConfiguration {
  samlConfiguration?: SamlProviderConfiguration;
  openIDConnectConfiguration?: OpenIDConnectProviderConfiguration;
}

export type IdentityProviderConfiguration =
  | (_IdentityProviderConfiguration & {
      samlConfiguration: SamlProviderConfiguration;
    })
  | (_IdentityProviderConfiguration & {
      openIDConnectConfiguration: OpenIDConnectProviderConfiguration;
    });
export type IdentityType =
  | "AWS_IAM_IDP_SAML"
  | "AWS_IAM_IDP_OIDC"
  | "AWS_IAM_IDC"
  | "AWS_QUICKSIGHT_IDP"
  | "ANONYMOUS";
export interface ImageExtractionConfiguration {
  imageExtractionStatus: ImageExtractionStatus;
}
export type ImageExtractionStatus = "ENABLED" | "DISABLED";
export interface ImageSourceDetails {
  mediaId?: string;
  mediaMimeType?: string;
}
export interface Index {
  displayName?: string;
  indexId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  status?: IndexStatus;
}
export type IndexArn = string;

export interface IndexCapacityConfiguration {
  units?: number;
}
export type IndexCapacityInteger = number;

export type IndexedTextBytes = number;

export type IndexedTextDocument = number;

export type IndexId = string;

export type IndexName = string;

export interface IndexStatistics {
  textDocumentStatistics?: TextDocumentStatistics;
}
export type IndexStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING";
export type IndexType = "ENTERPRISE" | "STARTER";
export type Indices = Array<Index>;
export interface InlineDocumentEnrichmentConfiguration {
  condition?: DocumentAttributeCondition;
  target?: DocumentAttributeTarget;
  documentContentOperator?: DocumentContentOperator;
}
export type InlineDocumentEnrichmentConfigurations =
  Array<InlineDocumentEnrichmentConfiguration>;
export type InstanceArn = string;

export type Instruction = string;

export interface InstructionCollection {
  responseLength?: string;
  targetAudience?: string;
  perspective?: string;
  outputStyle?: string;
  identity?: string;
  tone?: string;
  customInstructions?: string;
  examples?: string;
}
export type Integer = number;

export type IntegrationId = string;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface KendraIndexConfiguration {
  indexId: string;
}
export type KendraIndexId = string;

export type KmsKeyId = string;

export type LambdaArn = string;

export declare class LicenseNotFoundException extends Data.TaggedError(
  "LicenseNotFoundException",
)<{
  readonly message: string;
}> {}
export interface ListApplicationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListApplicationsResponse {
  nextToken?: string;
  applications?: Array<Application>;
}
export interface ListAttachmentsRequest {
  applicationId: string;
  conversationId?: string;
  userId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAttachmentsResponse {
  attachments?: Array<Attachment>;
  nextToken?: string;
}
export interface ListChatResponseConfigurationsRequest {
  applicationId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListChatResponseConfigurationsResponse {
  chatResponseConfigurations?: Array<ChatResponseConfiguration>;
  nextToken?: string;
}
export interface ListConversationsRequest {
  applicationId: string;
  userId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListConversationsResponse {
  nextToken?: string;
  conversations?: Array<Conversation>;
}
export interface ListDataAccessorsRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataAccessorsResponse {
  dataAccessors?: Array<DataAccessor>;
  nextToken?: string;
}
export interface ListDataSourcesRequest {
  applicationId: string;
  indexId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataSourcesResponse {
  dataSources?: Array<DataSource>;
  nextToken?: string;
}
export interface ListDataSourceSyncJobsRequest {
  dataSourceId: string;
  applicationId: string;
  indexId: string;
  nextToken?: string;
  maxResults?: number;
  startTime?: Date | string;
  endTime?: Date | string;
  statusFilter?: DataSourceSyncJobStatus;
}
export interface ListDataSourceSyncJobsResponse {
  history?: Array<DataSourceSyncJob>;
  nextToken?: string;
}
export interface ListDocumentsRequest {
  applicationId: string;
  indexId: string;
  dataSourceIds?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDocumentsResponse {
  documentDetailList?: Array<DocumentDetails>;
  nextToken?: string;
}
export interface ListGroupsRequest {
  applicationId: string;
  indexId: string;
  updatedEarlierThan: Date | string;
  dataSourceId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListGroupsResponse {
  nextToken?: string;
  items?: Array<GroupSummary>;
}
export interface ListIndicesRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListIndicesResponse {
  nextToken?: string;
  indices?: Array<Index>;
}
export interface ListMessagesRequest {
  conversationId: string;
  applicationId: string;
  userId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListMessagesResponse {
  messages?: Array<Message>;
  nextToken?: string;
}
export interface ListPluginActionsRequest {
  applicationId: string;
  pluginId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPluginActionsResponse {
  nextToken?: string;
  items?: Array<ActionSummary>;
}
export interface ListPluginsRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPluginsResponse {
  nextToken?: string;
  plugins?: Array<Plugin>;
}
export interface ListPluginTypeActionsRequest {
  pluginType: PluginType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPluginTypeActionsResponse {
  nextToken?: string;
  items?: Array<ActionSummary>;
}
export interface ListPluginTypeMetadataRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListPluginTypeMetadataResponse {
  nextToken?: string;
  items?: Array<PluginTypeMetadataSummary>;
}
export type ListPluginTypeMetadataSummaries = Array<PluginTypeMetadataSummary>;
export interface ListRetrieversRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListRetrieversResponse {
  retrievers?: Array<Retriever>;
  nextToken?: string;
}
export interface ListSubscriptionsRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSubscriptionsResponse {
  nextToken?: string;
  subscriptions?: Array<Subscription>;
}
export interface ListTagsForResourceRequest {
  resourceARN: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export interface ListWebExperiencesRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListWebExperiencesResponse {
  webExperiences?: Array<WebExperience>;
  nextToken?: string;
}
export type LogoUrl = string;

export type Long = number;

export type MaxResults = number;

export type MaxResultsIntegerForGetTopicConfigurations = number;

export type MaxResultsIntegerForListApplications = number;

export type MaxResultsIntegerForListAttachments = number;

export type MaxResultsIntegerForListConversations = number;

export type MaxResultsIntegerForListDataAccessors = number;

export type MaxResultsIntegerForListDataSources = number;

export type MaxResultsIntegerForListDataSourcesSyncJobs = number;

export type MaxResultsIntegerForListDocuments = number;

export type MaxResultsIntegerForListGroupsRequest = number;

export type MaxResultsIntegerForListIndices = number;

export type MaxResultsIntegerForListMessages = number;

export type MaxResultsIntegerForListPluginActions = number;

export type MaxResultsIntegerForListPlugins = number;

export type MaxResultsIntegerForListPluginTypeActions = number;

export type MaxResultsIntegerForListPluginTypeMetadata = number;

export type MaxResultsIntegerForListRetrieversRequest = number;

export type MaxResultsIntegerForListSubscriptions = number;

export type MaxResultsIntegerForListWebExperiencesRequest = number;

export interface MediaExtractionConfiguration {
  imageExtractionConfiguration?: ImageExtractionConfiguration;
  audioExtractionConfiguration?: AudioExtractionConfiguration;
  videoExtractionConfiguration?: VideoExtractionConfiguration;
}
export type MediaId = string;

export declare class MediaTooLargeException extends Data.TaggedError(
  "MediaTooLargeException",
)<{
  readonly message: string;
}> {}
export interface MemberGroup {
  groupName: string;
  type?: MembershipType;
}
export type MemberGroups = Array<MemberGroup>;
export type MemberRelation = "AND" | "OR";
export type MembershipType = "INDEX" | "DATASOURCE";
export interface MemberUser {
  userId: string;
  type?: MembershipType;
}
export type MemberUsers = Array<MemberUser>;
export interface Message {
  messageId?: string;
  body?: string;
  time?: Date | string;
  type?: MessageType;
  attachments?: Array<AttachmentOutput>;
  sourceAttribution?: Array<SourceAttribution>;
  actionReview?: ActionReview;
  actionExecution?: ActionExecution;
}
export type MessageBody = string;

export type MessageId = string;

export type Messages = Array<Message>;
export type MessageType = "USER" | "SYSTEM";
export type MessageUsefulness = "USEFUL" | "NOT_USEFUL";
export type MessageUsefulnessComment = string;

export interface MessageUsefulnessFeedback {
  usefulness: MessageUsefulness;
  reason?: MessageUsefulnessReason;
  comment?: string;
  submittedAt: Date | string;
}
export type MessageUsefulnessReason =
  | "NOT_FACTUALLY_CORRECT"
  | "HARMFUL_OR_UNSAFE"
  | "INCORRECT_OR_MISSING_SOURCES"
  | "NOT_HELPFUL"
  | "FACTUALLY_CORRECT"
  | "COMPLETE"
  | "RELEVANT_SOURCES"
  | "HELPFUL"
  | "NOT_BASED_ON_DOCUMENTS"
  | "NOT_COMPLETE"
  | "NOT_CONCISE"
  | "OTHER";
export interface MetadataEvent {
  conversationId?: string;
  userMessageId?: string;
  systemMessageId?: string;
  sourceAttributions?: Array<SourceAttribution>;
  finalTextMessage?: string;
}
export type MetricValue = string;

export interface NativeIndexConfiguration {
  indexId: string;
  version?: number;
  boostingOverride?: Record<string, DocumentAttributeBoostingConfiguration>;
}
export type NextToken = string;

export type NextToken1500 = string;

export interface NoAuthConfiguration {}
export interface NumberAttributeBoostingConfiguration {
  boostingLevel: DocumentAttributeBoostingLevel;
  boostingType?: NumberAttributeBoostingType;
}
export type NumberAttributeBoostingType =
  | "PRIORITIZE_LARGER_VALUES"
  | "PRIORITIZE_SMALLER_VALUES";
export interface OAuth2ClientCredentialConfiguration {
  secretArn: string;
  roleArn: string;
  authorizationUrl?: string;
  tokenUrl?: string;
}
export interface OpenIDConnectProviderConfiguration {
  secretsArn: string;
  secretsRole: string;
}
export interface OrchestrationConfiguration {
  control: OrchestrationControl;
}
export type OrchestrationControl = "ENABLED" | "DISABLED";
export type Origin = string;

export type OutputFormat = "RAW" | "EXTRACTED";
export type Payload = string;

export interface PermissionCondition {
  conditionOperator: PermissionConditionOperator;
  conditionKey: string;
  conditionValues: Array<string>;
}
export type PermissionConditionKey = string;

export type PermissionConditionOperator = "StringEquals";
export type PermissionConditions = Array<PermissionCondition>;
export type PermissionConditionValue = string;

export type PermissionConditionValues = Array<string>;
export interface PersonalizationConfiguration {
  personalizationControlMode: PersonalizationControlMode;
}
export type PersonalizationControlMode = "ENABLED" | "DISABLED";
export interface Plugin {
  pluginId?: string;
  displayName?: string;
  type?: PluginType;
  serverUrl?: string;
  state?: PluginState;
  buildStatus?: PluginBuildStatus;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export type PluginArn = string;

interface _PluginAuthConfiguration {
  basicAuthConfiguration?: BasicAuthConfiguration;
  oAuth2ClientCredentialConfiguration?: OAuth2ClientCredentialConfiguration;
  noAuthConfiguration?: NoAuthConfiguration;
  idcAuthConfiguration?: IdcAuthConfiguration;
}

export type PluginAuthConfiguration =
  | (_PluginAuthConfiguration & {
      basicAuthConfiguration: BasicAuthConfiguration;
    })
  | (_PluginAuthConfiguration & {
      oAuth2ClientCredentialConfiguration: OAuth2ClientCredentialConfiguration;
    })
  | (_PluginAuthConfiguration & { noAuthConfiguration: NoAuthConfiguration })
  | (_PluginAuthConfiguration & { idcAuthConfiguration: IdcAuthConfiguration });
export type PluginBuildStatus =
  | "READY"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED";
export interface PluginConfiguration {
  pluginId: string;
}
export type PluginDescription = string;

export type PluginId = string;

export type PluginName = string;

export type Plugins = Array<Plugin>;
export type PluginState = "ENABLED" | "DISABLED";
export type PluginType =
  | "SERVICE_NOW"
  | "SALESFORCE"
  | "JIRA"
  | "ZENDESK"
  | "CUSTOM"
  | "QUICKSIGHT"
  | "SERVICENOW_NOW_PLATFORM"
  | "JIRA_CLOUD"
  | "SALESFORCE_CRM"
  | "ZENDESK_SUITE"
  | "ATLASSIAN_CONFLUENCE"
  | "GOOGLE_CALENDAR"
  | "MICROSOFT_TEAMS"
  | "MICROSOFT_EXCHANGE"
  | "PAGERDUTY_ADVANCE"
  | "SMARTSHEET"
  | "ASANA";
export type PluginTypeCategory =
  | "Customer relationship management (CRM)"
  | "Project management"
  | "Communication"
  | "Productivity"
  | "Ticketing and incident management";
export interface PluginTypeMetadataSummary {
  type?: PluginType;
  category?: PluginTypeCategory;
  description?: string;
}
interface _Principal {
  user?: PrincipalUser;
  group?: PrincipalGroup;
}

export type Principal =
  | (_Principal & { user: PrincipalUser })
  | (_Principal & { group: PrincipalGroup });
export interface PrincipalGroup {
  name?: string;
  access: ReadAccessType;
  membershipType?: MembershipType;
}
export type PrincipalRoleArn = string;

export type Principals = Array<Principal>;
export interface PrincipalUser {
  id?: string;
  access: ReadAccessType;
  membershipType?: MembershipType;
}
export interface PutFeedbackRequest {
  applicationId: string;
  userId?: string;
  conversationId: string;
  messageId: string;
  messageCopiedAt?: Date | string;
  messageUsefulness?: MessageUsefulnessFeedback;
}
export interface PutGroupRequest {
  applicationId: string;
  indexId: string;
  groupName: string;
  dataSourceId?: string;
  type: MembershipType;
  groupMembers: GroupMembers;
  roleArn?: string;
}
export interface PutGroupResponse {}
export interface QAppsConfiguration {
  qAppsControlMode: QAppsControlMode;
}
export type QAppsControlMode = "ENABLED" | "DISABLED";
export type QIamAction = string;

export type QIamActions = Array<string>;
export type QueryText = string;

export interface QuickSightConfiguration {
  clientNamespace: string;
}
export type ReadAccessType = "ALLOW" | "DENY";
export interface RelevantContent {
  content?: string;
  documentId?: string;
  documentTitle?: string;
  documentUri?: string;
  documentAttributes?: Array<DocumentAttribute>;
  scoreAttributes?: ScoreAttributes;
}
export type RelevantContentList = Array<RelevantContent>;
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface ResponseConfiguration {
  instructionCollection?: InstructionCollection;
}
export type ResponseConfigurations = Record<
  ResponseConfigurationType,
  ResponseConfiguration
>;
export type ResponseConfigurationSummary = string;

export type ResponseConfigurationType = "ALL";
export type ResponseScope =
  | "ENTERPRISE_CONTENT_ONLY"
  | "EXTENDED_KNOWLEDGE_ENABLED";
export interface Retriever {
  applicationId?: string;
  retrieverId?: string;
  type?: RetrieverType;
  status?: RetrieverStatus;
  displayName?: string;
}
export type RetrieverArn = string;

interface _RetrieverConfiguration {
  nativeIndexConfiguration?: NativeIndexConfiguration;
  kendraIndexConfiguration?: KendraIndexConfiguration;
}

export type RetrieverConfiguration =
  | (_RetrieverConfiguration & {
      nativeIndexConfiguration: NativeIndexConfiguration;
    })
  | (_RetrieverConfiguration & {
      kendraIndexConfiguration: KendraIndexConfiguration;
    });
export interface RetrieverContentSource {
  retrieverId: string;
}
export type RetrieverId = string;

export type RetrieverName = string;

export type Retrievers = Array<Retriever>;
export type RetrieverStatus = "CREATING" | "ACTIVE" | "FAILED";
export type RetrieverType = "NATIVE_INDEX" | "KENDRA_INDEX";
export type RoleArn = string;

export interface Rule {
  includedUsersAndGroups?: UsersAndGroups;
  excludedUsersAndGroups?: UsersAndGroups;
  ruleType: RuleType;
  ruleConfiguration?: RuleConfiguration;
}
interface _RuleConfiguration {
  contentBlockerRule?: ContentBlockerRule;
  contentRetrievalRule?: ContentRetrievalRule;
}

export type RuleConfiguration =
  | (_RuleConfiguration & { contentBlockerRule: ContentBlockerRule })
  | (_RuleConfiguration & { contentRetrievalRule: ContentRetrievalRule });
export type Rules = Array<Rule>;
export type RuleType = "CONTENT_BLOCKER_RULE" | "CONTENT_RETRIEVAL_RULE";
export interface S3 {
  bucket: string;
  key: string;
}
export type S3BucketName = string;

export type S3ObjectKey = string;

export type SamlAttribute = string;

export type SamlAuthenticationUrl = string;

export interface SamlConfiguration {
  metadataXML: string;
  roleArn: string;
  userIdAttribute: string;
  userGroupAttribute?: string;
}
export type SamlMetadataXML = string;

export interface SamlProviderConfiguration {
  authenticationUrl: string;
}
export interface ScoreAttributes {
  scoreConfidence?: ScoreConfidence;
}
export type ScoreConfidence =
  | "VERY_HIGH"
  | "HIGH"
  | "MEDIUM"
  | "LOW"
  | "NOT_AVAILABLE";
export interface SearchRelevantContentRequest {
  applicationId: string;
  queryText: string;
  contentSource: ContentSource;
  attributeFilter?: AttributeFilter;
  maxResults?: number;
  nextToken?: string;
}
export interface SearchRelevantContentResponse {
  relevantContent?: Array<RelevantContent>;
  nextToken?: string;
}
export type SecretArn = string;

export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type SessionDurationInMinutes = number;

export interface SnippetExcerpt {
  text?: string;
}
export type SnippetExcerptText = string;

export interface SourceAttribution {
  title?: string;
  snippet?: string;
  url?: string;
  citationNumber?: number;
  updatedAt?: Date | string;
  textMessageSegments?: Array<TextSegment>;
  documentId?: string;
  indexId?: string;
  datasourceId?: string;
}
export type SourceAttributionMediaId = string;

export type SourceAttributions = Array<SourceAttribution>;
interface _SourceDetails {
  imageSourceDetails?: ImageSourceDetails;
  audioSourceDetails?: AudioSourceDetails;
  videoSourceDetails?: VideoSourceDetails;
}

export type SourceDetails =
  | (_SourceDetails & { imageSourceDetails: ImageSourceDetails })
  | (_SourceDetails & { audioSourceDetails: AudioSourceDetails })
  | (_SourceDetails & { videoSourceDetails: VideoSourceDetails });
export interface StartDataSourceSyncJobRequest {
  dataSourceId: string;
  applicationId: string;
  indexId: string;
}
export interface StartDataSourceSyncJobResponse {
  executionId?: string;
}
export type StatementId = string;

export type Status = "ENABLED" | "DISABLED";
export interface StopDataSourceSyncJobRequest {
  dataSourceId: string;
  applicationId: string;
  indexId: string;
}
export interface StopDataSourceSyncJobResponse {}
export type QbusinessString = string;

export interface StringAttributeBoostingConfiguration {
  boostingLevel: DocumentAttributeBoostingLevel;
  attributeValueBoosting?: Record<string, StringAttributeValueBoostingLevel>;
}
export type StringAttributeValueBoosting = Record<
  string,
  StringAttributeValueBoostingLevel
>;
export type StringAttributeValueBoostingLevel =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "VERY_HIGH"
  | "ONE"
  | "TWO"
  | "THREE"
  | "FOUR"
  | "FIVE";
export interface StringListAttributeBoostingConfiguration {
  boostingLevel: DocumentAttributeBoostingLevel;
}
export type SubnetId = string;

export type SubnetIds = Array<string>;
export interface Subscription {
  subscriptionId?: string;
  subscriptionArn?: string;
  principal?: SubscriptionPrincipal;
  currentSubscription?: SubscriptionDetails;
  nextSubscription?: SubscriptionDetails;
}
export type SubscriptionArn = string;

export interface SubscriptionDetails {
  type?: SubscriptionType;
}
export type SubscriptionId = string;

interface _SubscriptionPrincipal {
  user?: string;
  group?: string;
}

export type SubscriptionPrincipal =
  | (_SubscriptionPrincipal & { user: string })
  | (_SubscriptionPrincipal & { group: string });
export type Subscriptions = Array<Subscription>;
export type SubscriptionType = "Q_LITE" | "Q_BUSINESS";
export type SyncSchedule = string;

export type SystemMessageId = string;

export type SystemMessageOverride = string;

export type SystemMessageType = "RESPONSE" | "GROUNDED_RESPONSE";
export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceARN: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type Tags = Array<Tag>;
export type TagValue = string;

export interface TextDocumentStatistics {
  indexedTextBytes?: number;
  indexedTextDocumentCount?: number;
}
export interface TextInputEvent {
  userMessage: string;
}
export interface TextOutputEvent {
  systemMessageType?: SystemMessageType;
  conversationId?: string;
  userMessageId?: string;
  systemMessageId?: string;
  systemMessage?: string;
}
export interface TextSegment {
  beginOffset?: number;
  endOffset?: number;
  snippetExcerpt?: SnippetExcerpt;
  mediaId?: string;
  mediaMimeType?: string;
  sourceDetails?: SourceDetails;
}
export type TextSegmentList = Array<TextSegment>;
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export type Timestamp = Date | string;

export type Title = string;

export interface TopicConfiguration {
  name: string;
  description?: string;
  exampleChatMessages?: Array<string>;
  rules: Array<Rule>;
}
export type TopicConfigurationName = string;

export type TopicConfigurations = Array<TopicConfiguration>;
export type TopicDescription = string;

export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateApplicationRequest {
  applicationId: string;
  identityCenterInstanceArn?: string;
  displayName?: string;
  description?: string;
  roleArn?: string;
  attachmentsConfiguration?: AttachmentsConfiguration;
  qAppsConfiguration?: QAppsConfiguration;
  personalizationConfiguration?: PersonalizationConfiguration;
  autoSubscriptionConfiguration?: AutoSubscriptionConfiguration;
}
export interface UpdateApplicationResponse {}
export interface UpdateChatControlsConfigurationRequest {
  applicationId: string;
  clientToken?: string;
  responseScope?: ResponseScope;
  orchestrationConfiguration?: OrchestrationConfiguration;
  blockedPhrasesConfigurationUpdate?: BlockedPhrasesConfigurationUpdate;
  topicConfigurationsToCreateOrUpdate?: Array<TopicConfiguration>;
  topicConfigurationsToDelete?: Array<TopicConfiguration>;
  creatorModeConfiguration?: CreatorModeConfiguration;
  hallucinationReductionConfiguration?: HallucinationReductionConfiguration;
}
export interface UpdateChatControlsConfigurationResponse {}
export interface UpdateChatResponseConfigurationRequest {
  applicationId: string;
  chatResponseConfigurationId: string;
  displayName?: string;
  responseConfigurations: { [key in ResponseConfigurationType]?: string };
  clientToken?: string;
}
export interface UpdateChatResponseConfigurationResponse {}
export interface UpdateDataAccessorRequest {
  applicationId: string;
  dataAccessorId: string;
  actionConfigurations: Array<ActionConfiguration>;
  authenticationDetail?: DataAccessorAuthenticationDetail;
  displayName?: string;
}
export interface UpdateDataAccessorResponse {}
export interface UpdateDataSourceRequest {
  applicationId: string;
  indexId: string;
  dataSourceId: string;
  displayName?: string;
  configuration?: unknown;
  vpcConfiguration?: DataSourceVpcConfiguration;
  description?: string;
  syncSchedule?: string;
  roleArn?: string;
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
  mediaExtractionConfiguration?: MediaExtractionConfiguration;
}
export interface UpdateDataSourceResponse {}
export interface UpdateIndexRequest {
  applicationId: string;
  indexId: string;
  displayName?: string;
  description?: string;
  capacityConfiguration?: IndexCapacityConfiguration;
  documentAttributeConfigurations?: Array<DocumentAttributeConfiguration>;
}
export interface UpdateIndexResponse {}
export interface UpdatePluginRequest {
  applicationId: string;
  pluginId: string;
  displayName?: string;
  state?: PluginState;
  serverUrl?: string;
  customPluginConfiguration?: CustomPluginConfiguration;
  authConfiguration?: PluginAuthConfiguration;
}
export interface UpdatePluginResponse {}
export interface UpdateRetrieverRequest {
  applicationId: string;
  retrieverId: string;
  configuration?: RetrieverConfiguration;
  displayName?: string;
  roleArn?: string;
}
export interface UpdateRetrieverResponse {}
export interface UpdateSubscriptionRequest {
  applicationId: string;
  subscriptionId: string;
  type: SubscriptionType;
}
export interface UpdateSubscriptionResponse {
  subscriptionArn?: string;
  currentSubscription?: SubscriptionDetails;
  nextSubscription?: SubscriptionDetails;
}
export interface UpdateUserRequest {
  applicationId: string;
  userId: string;
  userAliasesToUpdate?: Array<UserAlias>;
  userAliasesToDelete?: Array<UserAlias>;
}
export interface UpdateUserResponse {
  userAliasesAdded?: Array<UserAlias>;
  userAliasesUpdated?: Array<UserAlias>;
  userAliasesDeleted?: Array<UserAlias>;
}
export interface UpdateWebExperienceRequest {
  applicationId: string;
  webExperienceId: string;
  roleArn?: string;
  authenticationConfiguration?: WebExperienceAuthConfiguration;
  title?: string;
  subtitle?: string;
  welcomeMessage?: string;
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
  identityProviderConfiguration?: IdentityProviderConfiguration;
  origins?: Array<string>;
  browserExtensionConfiguration?: BrowserExtensionConfiguration;
  customizationConfiguration?: CustomizationConfiguration;
}
export interface UpdateWebExperienceResponse {}
export type Url = string;

export interface UserAlias {
  indexId?: string;
  dataSourceId?: string;
  userId: string;
}
export type UserAliases = Array<UserAlias>;
export type UserGroups = Array<string>;
export type UserId = string;

export type UserIdentifier = string;

export type UserIds = Array<string>;
export type UserMessage = string;

export interface UsersAndGroups {
  userIds?: Array<string>;
  userGroups?: Array<string>;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: ValidationExceptionReason;
  readonly fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFields = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "UNKNOWN_OPERATION";
export interface VideoExtractionConfiguration {
  videoExtractionStatus: VideoExtractionStatus;
}
export type VideoExtractionStatus = "ENABLED" | "DISABLED";
export type VideoExtractionType = "TRANSCRIPT" | "SUMMARY";
export interface VideoSourceDetails {
  mediaId?: string;
  mediaMimeType?: string;
  startTimeMilliseconds?: number;
  endTimeMilliseconds?: number;
  videoExtractionType?: VideoExtractionType;
}
export interface WebExperience {
  webExperienceId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  defaultEndpoint?: string;
  status?: WebExperienceStatus;
}
export type WebExperienceArn = string;

interface _WebExperienceAuthConfiguration {
  samlConfiguration?: SamlConfiguration;
}

export type WebExperienceAuthConfiguration = _WebExperienceAuthConfiguration & {
  samlConfiguration: SamlConfiguration;
};
export type WebExperienceId = string;

export type WebExperienceOrigins = Array<string>;
export type WebExperiences = Array<WebExperience>;
export type WebExperienceSamplePromptsControlMode = "ENABLED" | "DISABLED";
export type WebExperienceStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "PENDING_AUTH_CONFIG";
export type WebExperienceSubtitle = string;

export type WebExperienceTitle = string;

export type WebExperienceWelcomeMessage = string;

export declare namespace AssociatePermission {
  export type Input = AssociatePermissionRequest;
  export type Output = AssociatePermissionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchDeleteDocument {
  export type Input = BatchDeleteDocumentRequest;
  export type Output = BatchDeleteDocumentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchPutDocument {
  export type Input = BatchPutDocumentRequest;
  export type Output = BatchPutDocumentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelSubscription {
  export type Input = CancelSubscriptionRequest;
  export type Output = CancelSubscriptionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Chat {
  export type Input = ChatInput;
  export type Output = ChatOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ExternalResourceException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ChatSync {
  export type Input = ChatSyncInput;
  export type Output = ChatSyncOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ExternalResourceException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CheckDocumentAccess {
  export type Input = CheckDocumentAccessRequest;
  export type Output = CheckDocumentAccessResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAnonymousWebExperienceUrl {
  export type Input = CreateAnonymousWebExperienceUrlRequest;
  export type Output = CreateAnonymousWebExperienceUrlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateChatResponseConfiguration {
  export type Input = CreateChatResponseConfigurationRequest;
  export type Output = CreateChatResponseConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSubscription {
  export type Input = CreateSubscriptionRequest;
  export type Output = CreateSubscriptionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserRequest;
  export type Output = CreateUserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAttachment {
  export type Input = DeleteAttachmentRequest;
  export type Output = DeleteAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteChatControlsConfiguration {
  export type Input = DeleteChatControlsConfigurationRequest;
  export type Output = DeleteChatControlsConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteChatResponseConfiguration {
  export type Input = DeleteChatResponseConfigurationRequest;
  export type Output = DeleteChatResponseConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConversation {
  export type Input = DeleteConversationRequest;
  export type Output = DeleteConversationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGroup {
  export type Input = DeleteGroupRequest;
  export type Output = DeleteGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserRequest;
  export type Output = DeleteUserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociatePermission {
  export type Input = DisassociatePermissionRequest;
  export type Output = DisassociatePermissionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetChatControlsConfiguration {
  export type Input = GetChatControlsConfigurationRequest;
  export type Output = GetChatControlsConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetChatResponseConfiguration {
  export type Input = GetChatResponseConfigurationRequest;
  export type Output = GetChatResponseConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDocumentContent {
  export type Input = GetDocumentContentRequest;
  export type Output = GetDocumentContentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGroup {
  export type Input = GetGroupRequest;
  export type Output = GetGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMedia {
  export type Input = GetMediaRequest;
  export type Output = GetMediaResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LicenseNotFoundException
    | MediaTooLargeException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPolicy {
  export type Input = GetPolicyRequest;
  export type Output = GetPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetUser {
  export type Input = GetUserRequest;
  export type Output = GetUserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAttachments {
  export type Input = ListAttachmentsRequest;
  export type Output = ListAttachmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListChatResponseConfigurations {
  export type Input = ListChatResponseConfigurationsRequest;
  export type Output = ListChatResponseConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConversations {
  export type Input = ListConversationsRequest;
  export type Output = ListConversationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSourceSyncJobs {
  export type Input = ListDataSourceSyncJobsRequest;
  export type Output = ListDataSourceSyncJobsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDocuments {
  export type Input = ListDocumentsRequest;
  export type Output = ListDocumentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGroups {
  export type Input = ListGroupsRequest;
  export type Output = ListGroupsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMessages {
  export type Input = ListMessagesRequest;
  export type Output = ListMessagesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPluginActions {
  export type Input = ListPluginActionsRequest;
  export type Output = ListPluginActionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPluginTypeActions {
  export type Input = ListPluginTypeActionsRequest;
  export type Output = ListPluginTypeActionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPluginTypeMetadata {
  export type Input = ListPluginTypeMetadataRequest;
  export type Output = ListPluginTypeMetadataResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSubscriptions {
  export type Input = ListSubscriptionsRequest;
  export type Output = ListSubscriptionsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutFeedback {
  export type Input = PutFeedbackRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutGroup {
  export type Input = PutGroupRequest;
  export type Output = PutGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchRelevantContent {
  export type Input = SearchRelevantContentRequest;
  export type Output = SearchRelevantContentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LicenseNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartDataSourceSyncJob {
  export type Input = StartDataSourceSyncJobRequest;
  export type Output = StartDataSourceSyncJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopDataSourceSyncJob {
  export type Input = StopDataSourceSyncJobRequest;
  export type Output = StopDataSourceSyncJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateChatControlsConfiguration {
  export type Input = UpdateChatControlsConfigurationRequest;
  export type Output = UpdateChatControlsConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateChatResponseConfiguration {
  export type Input = UpdateChatResponseConfigurationRequest;
  export type Output = UpdateChatResponseConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSubscription {
  export type Input = UpdateSubscriptionRequest;
  export type Output = UpdateSubscriptionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateUser {
  export type Input = UpdateUserRequest;
  export type Output = UpdateUserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataAccessor {
  export type Input = CreateDataAccessorRequest;
  export type Output = CreateDataAccessorResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataSource {
  export type Input = CreateDataSourceRequest;
  export type Output = CreateDataSourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIndex {
  export type Input = CreateIndexRequest;
  export type Output = CreateIndexResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePlugin {
  export type Input = CreatePluginRequest;
  export type Output = CreatePluginResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRetriever {
  export type Input = CreateRetrieverRequest;
  export type Output = CreateRetrieverResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWebExperience {
  export type Input = CreateWebExperienceRequest;
  export type Output = CreateWebExperienceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = DeleteApplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataAccessor {
  export type Input = DeleteDataAccessorRequest;
  export type Output = DeleteDataAccessorResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataSource {
  export type Input = DeleteDataSourceRequest;
  export type Output = DeleteDataSourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIndex {
  export type Input = DeleteIndexRequest;
  export type Output = DeleteIndexResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePlugin {
  export type Input = DeletePluginRequest;
  export type Output = DeletePluginResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRetriever {
  export type Input = DeleteRetrieverRequest;
  export type Output = DeleteRetrieverResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWebExperience {
  export type Input = DeleteWebExperienceRequest;
  export type Output = DeleteWebExperienceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetApplication {
  export type Input = GetApplicationRequest;
  export type Output = GetApplicationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataAccessor {
  export type Input = GetDataAccessorRequest;
  export type Output = GetDataAccessorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataSource {
  export type Input = GetDataSourceRequest;
  export type Output = GetDataSourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIndex {
  export type Input = GetIndexRequest;
  export type Output = GetIndexResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPlugin {
  export type Input = GetPluginRequest;
  export type Output = GetPluginResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRetriever {
  export type Input = GetRetrieverRequest;
  export type Output = GetRetrieverResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWebExperience {
  export type Input = GetWebExperienceRequest;
  export type Output = GetWebExperienceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = ListApplicationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataAccessors {
  export type Input = ListDataAccessorsRequest;
  export type Output = ListDataAccessorsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSources {
  export type Input = ListDataSourcesRequest;
  export type Output = ListDataSourcesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIndices {
  export type Input = ListIndicesRequest;
  export type Output = ListIndicesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPlugins {
  export type Input = ListPluginsRequest;
  export type Output = ListPluginsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRetrievers {
  export type Input = ListRetrieversRequest;
  export type Output = ListRetrieversResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWebExperiences {
  export type Input = ListWebExperiencesRequest;
  export type Output = ListWebExperiencesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = UpdateApplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDataAccessor {
  export type Input = UpdateDataAccessorRequest;
  export type Output = UpdateDataAccessorResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDataSource {
  export type Input = UpdateDataSourceRequest;
  export type Output = UpdateDataSourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateIndex {
  export type Input = UpdateIndexRequest;
  export type Output = UpdateIndexResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePlugin {
  export type Input = UpdatePluginRequest;
  export type Output = UpdatePluginResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRetriever {
  export type Input = UpdateRetrieverRequest;
  export type Output = UpdateRetrieverResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWebExperience {
  export type Input = UpdateWebExperienceRequest;
  export type Output = UpdateWebExperienceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type QBusinessErrors =
  | AccessDeniedException
  | ConflictException
  | ExternalResourceException
  | InternalServerException
  | LicenseNotFoundException
  | MediaTooLargeException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;

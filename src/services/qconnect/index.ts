import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class QConnect extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    ResourceNotFoundException | TooManyTagsException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
}

export declare class Qconnect extends QConnect {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface ActivateMessageTemplateRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  versionNumber: number;
}
export interface ActivateMessageTemplateResponse {
  messageTemplateArn: string;
  messageTemplateId: string;
  versionNumber: number;
}
export interface AgentAttributes {
  firstName?: string;
  lastName?: string;
}
export type AIAgentAssociationConfigurationType = string;

interface _AIAgentConfiguration {
  manualSearchAIAgentConfiguration?: ManualSearchAIAgentConfiguration;
  answerRecommendationAIAgentConfiguration?: AnswerRecommendationAIAgentConfiguration;
  selfServiceAIAgentConfiguration?: SelfServiceAIAgentConfiguration;
}

export type AIAgentConfiguration =
  | (_AIAgentConfiguration & {
      manualSearchAIAgentConfiguration: ManualSearchAIAgentConfiguration;
    })
  | (_AIAgentConfiguration & {
      answerRecommendationAIAgentConfiguration: AnswerRecommendationAIAgentConfiguration;
    })
  | (_AIAgentConfiguration & {
      selfServiceAIAgentConfiguration: SelfServiceAIAgentConfiguration;
    });
export interface AIAgentConfigurationData {
  aiAgentId: string;
}
export type AIAgentConfigurationMap = Record<string, AIAgentConfigurationData>;
export interface AIAgentData {
  assistantId: string;
  assistantArn: string;
  aiAgentId: string;
  aiAgentArn: string;
  name: string;
  type: string;
  configuration: AIAgentConfiguration;
  modifiedTime?: Date | string;
  description?: string;
  visibilityStatus: string;
  tags?: Record<string, string>;
  origin?: string;
  status?: string;
}
export interface AIAgentSummary {
  name: string;
  assistantId: string;
  assistantArn: string;
  aiAgentId: string;
  type: string;
  aiAgentArn: string;
  modifiedTime?: Date | string;
  visibilityStatus: string;
  configuration?: AIAgentConfiguration;
  origin?: string;
  description?: string;
  status?: string;
  tags?: Record<string, string>;
}
export type AIAgentSummaryList = Array<AIAgentSummary>;
export type AIAgentType = string;

export type AIAgentVersionSummariesList = Array<AIAgentVersionSummary>;
export interface AIAgentVersionSummary {
  aiAgentSummary?: AIAgentSummary;
  versionNumber?: number;
}
export type AIGuardrailBlockedMessaging = string;

export interface AIGuardrailContentPolicyConfig {
  filtersConfig: Array<GuardrailContentFilterConfig>;
}
export interface AIGuardrailContextualGroundingPolicyConfig {
  filtersConfig: Array<GuardrailContextualGroundingFilterConfig>;
}
export interface AIGuardrailData {
  assistantId: string;
  assistantArn: string;
  aiGuardrailArn: string;
  aiGuardrailId: string;
  name: string;
  visibilityStatus: string;
  blockedInputMessaging: string;
  blockedOutputsMessaging: string;
  description?: string;
  topicPolicyConfig?: AIGuardrailTopicPolicyConfig;
  contentPolicyConfig?: AIGuardrailContentPolicyConfig;
  wordPolicyConfig?: AIGuardrailWordPolicyConfig;
  sensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig;
  contextualGroundingPolicyConfig?: AIGuardrailContextualGroundingPolicyConfig;
  tags?: Record<string, string>;
  status?: string;
  modifiedTime?: Date | string;
}
export type AIGuardrailDescription = string;

export interface AIGuardrailSensitiveInformationPolicyConfig {
  piiEntitiesConfig?: Array<GuardrailPiiEntityConfig>;
  regexesConfig?: Array<GuardrailRegexConfig>;
}
export type AIGuardrailSummariesList = Array<AIGuardrailSummary>;
export interface AIGuardrailSummary {
  name: string;
  assistantId: string;
  assistantArn: string;
  aiGuardrailId: string;
  aiGuardrailArn: string;
  modifiedTime?: Date | string;
  visibilityStatus: string;
  description?: string;
  status?: string;
  tags?: Record<string, string>;
}
export interface AIGuardrailTopicPolicyConfig {
  topicsConfig: Array<GuardrailTopicConfig>;
}
export type AIGuardrailVersionSummariesList = Array<AIGuardrailVersionSummary>;
export interface AIGuardrailVersionSummary {
  aiGuardrailSummary?: AIGuardrailSummary;
  versionNumber?: number;
}
export interface AIGuardrailWordPolicyConfig {
  wordsConfig?: Array<GuardrailWordConfig>;
  managedWordListsConfig?: Array<GuardrailManagedWordsConfig>;
}
export type AIPromptAPIFormat = string;

export interface AIPromptData {
  assistantId: string;
  assistantArn: string;
  aiPromptId: string;
  aiPromptArn: string;
  name: string;
  type: string;
  templateType: string;
  modelId: string;
  apiFormat: string;
  templateConfiguration: AIPromptTemplateConfiguration;
  modifiedTime?: Date | string;
  description?: string;
  visibilityStatus: string;
  tags?: Record<string, string>;
  origin?: string;
  status?: string;
}
export type AIPromptModelIdentifier = string;

export interface AIPromptSummary {
  name: string;
  assistantId: string;
  assistantArn: string;
  aiPromptId: string;
  type: string;
  aiPromptArn: string;
  modifiedTime?: Date | string;
  templateType: string;
  modelId: string;
  apiFormat: string;
  visibilityStatus: string;
  origin?: string;
  description?: string;
  status?: string;
  tags?: Record<string, string>;
}
export type AIPromptSummaryList = Array<AIPromptSummary>;
interface _AIPromptTemplateConfiguration {
  textFullAIPromptEditTemplateConfiguration?: TextFullAIPromptEditTemplateConfiguration;
}

export type AIPromptTemplateConfiguration = _AIPromptTemplateConfiguration & {
  textFullAIPromptEditTemplateConfiguration: TextFullAIPromptEditTemplateConfiguration;
};
export type AIPromptTemplateType = string;

export type AIPromptType = string;

export type AIPromptVersionSummariesList = Array<AIPromptVersionSummary>;
export interface AIPromptVersionSummary {
  aiPromptSummary?: AIPromptSummary;
  versionNumber?: number;
}
export interface AmazonConnectGuideAssociationData {
  flowId?: string;
}
export type AndConditions = Array<TagCondition>;
export interface AnswerRecommendationAIAgentConfiguration {
  intentLabelingGenerationAIPromptId?: string;
  queryReformulationAIPromptId?: string;
  answerGenerationAIPromptId?: string;
  answerGenerationAIGuardrailId?: string;
  associationConfigurations?: Array<AssociationConfiguration>;
  locale?: string;
}
export interface AppIntegrationsConfiguration {
  appIntegrationArn: string;
  objectFields?: Array<string>;
}
export type Arn = string;

export type ArnWithQualifier = string;

export interface AssistantAssociationData {
  assistantAssociationId: string;
  assistantAssociationArn: string;
  assistantId: string;
  assistantArn: string;
  associationType: string;
  associationData: AssistantAssociationOutputData;
  tags?: Record<string, string>;
}
interface _AssistantAssociationInputData {
  knowledgeBaseId?: string;
}

export type AssistantAssociationInputData = _AssistantAssociationInputData & {
  knowledgeBaseId: string;
};
interface _AssistantAssociationOutputData {
  knowledgeBaseAssociation?: KnowledgeBaseAssociationData;
}

export type AssistantAssociationOutputData = _AssistantAssociationOutputData & {
  knowledgeBaseAssociation: KnowledgeBaseAssociationData;
};
export interface AssistantAssociationSummary {
  assistantAssociationId: string;
  assistantAssociationArn: string;
  assistantId: string;
  assistantArn: string;
  associationType: string;
  associationData: AssistantAssociationOutputData;
  tags?: Record<string, string>;
}
export type AssistantAssociationSummaryList =
  Array<AssistantAssociationSummary>;
export interface AssistantCapabilityConfiguration {
  type?: string;
}
export type AssistantCapabilityType = string;

export interface AssistantData {
  assistantId: string;
  assistantArn: string;
  name: string;
  type: string;
  status: string;
  description?: string;
  tags?: Record<string, string>;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  integrationConfiguration?: AssistantIntegrationConfiguration;
  capabilityConfiguration?: AssistantCapabilityConfiguration;
  aiAgentConfiguration?: Record<string, AIAgentConfigurationData>;
}
export interface AssistantIntegrationConfiguration {
  topicIntegrationArn?: string;
}
export type AssistantList = Array<AssistantSummary>;
export type AssistantStatus = string;

export interface AssistantSummary {
  assistantId: string;
  assistantArn: string;
  name: string;
  type: string;
  status: string;
  description?: string;
  tags?: Record<string, string>;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  integrationConfiguration?: AssistantIntegrationConfiguration;
  capabilityConfiguration?: AssistantCapabilityConfiguration;
  aiAgentConfiguration?: Record<string, AIAgentConfigurationData>;
}
export type AssistantType = string;

export interface AssociationConfiguration {
  associationId?: string;
  associationType?: string;
  associationConfigurationData?: AssociationConfigurationData;
}
interface _AssociationConfigurationData {
  knowledgeBaseAssociationConfigurationData?: KnowledgeBaseAssociationConfigurationData;
}

export type AssociationConfigurationData = _AssociationConfigurationData & {
  knowledgeBaseAssociationConfigurationData: KnowledgeBaseAssociationConfigurationData;
};
export type AssociationConfigurationList = Array<AssociationConfiguration>;
export type AssociationType = string;

export type AttachmentFileName = string;

export interface BedrockFoundationModelConfigurationForParsing {
  modelArn: string;
  parsingPrompt?: ParsingPrompt;
}
export type BedrockModelArnForParsing = string;

export type Channel = string;

export type Channels = Array<string>;
export type ChannelSubtype = string;

export interface ChunkingConfiguration {
  chunkingStrategy: string;
  fixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration;
  hierarchicalChunkingConfiguration?: HierarchicalChunkingConfiguration;
  semanticChunkingConfiguration?: SemanticChunkingConfiguration;
}
export type ChunkingStrategy = string;

export interface CitationSpan {
  beginOffsetInclusive?: number;
  endOffsetExclusive?: number;
}
export type CitationSpanOffset = number;

export type ClientToken = string;

interface _Configuration {
  connectConfiguration?: ConnectConfiguration;
}

export type Configuration = _Configuration & {
  connectConfiguration: ConnectConfiguration;
};
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface ConnectConfiguration {
  instanceId?: string;
}
export type ContactAttributeKey = string;

export type ContactAttributeKeys = Array<string>;
export type ContactAttributes = Record<string, string>;
export type ContactAttributeValue = string;

interface _ContentAssociationContents {
  amazonConnectGuideAssociation?: AmazonConnectGuideAssociationData;
}

export type ContentAssociationContents = _ContentAssociationContents & {
  amazonConnectGuideAssociation: AmazonConnectGuideAssociationData;
};
export interface ContentAssociationData {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  contentId: string;
  contentArn: string;
  contentAssociationId: string;
  contentAssociationArn: string;
  associationType: string;
  associationData: ContentAssociationContents;
  tags?: Record<string, string>;
}
export interface ContentAssociationSummary {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  contentId: string;
  contentArn: string;
  contentAssociationId: string;
  contentAssociationArn: string;
  associationType: string;
  associationData: ContentAssociationContents;
  tags?: Record<string, string>;
}
export type ContentAssociationSummaryList = Array<ContentAssociationSummary>;
export type ContentAssociationType = string;

export interface ContentData {
  contentArn: string;
  contentId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  revisionId: string;
  title: string;
  contentType: string;
  status: string;
  metadata: Record<string, string>;
  tags?: Record<string, string>;
  linkOutUri?: string;
  url: string;
  urlExpiry: Date | string;
}
export interface ContentDataDetails {
  textData: TextData;
  rankingData: RankingData;
}
export type ContentDisposition = string;

interface _ContentFeedbackData {
  generativeContentFeedbackData?: GenerativeContentFeedbackData;
}

export type ContentFeedbackData = _ContentFeedbackData & {
  generativeContentFeedbackData: GenerativeContentFeedbackData;
};
export type ContentMetadata = Record<string, string>;
export interface ContentReference {
  knowledgeBaseArn?: string;
  knowledgeBaseId?: string;
  contentArn?: string;
  contentId?: string;
  sourceURL?: string;
  referenceType?: string;
}
export type ContentStatus = string;

export interface ContentSummary {
  contentArn: string;
  contentId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  revisionId: string;
  title: string;
  contentType: string;
  status: string;
  metadata: Record<string, string>;
  tags?: Record<string, string>;
}
export type ContentSummaryList = Array<ContentSummary>;
export type ContentTitle = string;

export type ContentType = string;

export interface ConversationContext {
  selfServiceConversationHistory: Array<SelfServiceConversationHistory>;
}
export interface ConversationState {
  status: string;
  reason?: string;
}
export type ConversationStatus = string;

export type ConversationStatusReason = string;

export interface CreateAIAgentRequest {
  clientToken?: string;
  assistantId: string;
  name: string;
  type: string;
  configuration: AIAgentConfiguration;
  visibilityStatus: string;
  tags?: Record<string, string>;
  description?: string;
}
export interface CreateAIAgentResponse {
  aiAgent?: AIAgentData;
}
export interface CreateAIAgentVersionRequest {
  assistantId: string;
  aiAgentId: string;
  modifiedTime?: Date | string;
  clientToken?: string;
}
export interface CreateAIAgentVersionResponse {
  aiAgent?: AIAgentData;
  versionNumber?: number;
}
export interface CreateAIGuardrailRequest {
  clientToken?: string;
  assistantId: string;
  name: string;
  blockedInputMessaging: string;
  blockedOutputsMessaging: string;
  visibilityStatus: string;
  description?: string;
  topicPolicyConfig?: AIGuardrailTopicPolicyConfig;
  contentPolicyConfig?: AIGuardrailContentPolicyConfig;
  wordPolicyConfig?: AIGuardrailWordPolicyConfig;
  sensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig;
  contextualGroundingPolicyConfig?: AIGuardrailContextualGroundingPolicyConfig;
  tags?: Record<string, string>;
}
export interface CreateAIGuardrailResponse {
  aiGuardrail?: AIGuardrailData;
}
export interface CreateAIGuardrailVersionRequest {
  assistantId: string;
  aiGuardrailId: string;
  modifiedTime?: Date | string;
  clientToken?: string;
}
export interface CreateAIGuardrailVersionResponse {
  aiGuardrail?: AIGuardrailData;
  versionNumber?: number;
}
export interface CreateAIPromptRequest {
  clientToken?: string;
  assistantId: string;
  name: string;
  type: string;
  templateConfiguration: AIPromptTemplateConfiguration;
  visibilityStatus: string;
  templateType: string;
  modelId: string;
  apiFormat: string;
  tags?: Record<string, string>;
  description?: string;
}
export interface CreateAIPromptResponse {
  aiPrompt?: AIPromptData;
}
export interface CreateAIPromptVersionRequest {
  assistantId: string;
  aiPromptId: string;
  modifiedTime?: Date | string;
  clientToken?: string;
}
export interface CreateAIPromptVersionResponse {
  aiPrompt?: AIPromptData;
  versionNumber?: number;
}
export interface CreateAssistantAssociationRequest {
  assistantId: string;
  associationType: string;
  association: AssistantAssociationInputData;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateAssistantAssociationResponse {
  assistantAssociation?: AssistantAssociationData;
}
export interface CreateAssistantRequest {
  clientToken?: string;
  name: string;
  type: string;
  description?: string;
  tags?: Record<string, string>;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}
export interface CreateAssistantResponse {
  assistant?: AssistantData;
}
export interface CreateContentAssociationRequest {
  clientToken?: string;
  knowledgeBaseId: string;
  contentId: string;
  associationType: string;
  association: ContentAssociationContents;
  tags?: Record<string, string>;
}
export interface CreateContentAssociationResponse {
  contentAssociation?: ContentAssociationData;
}
export interface CreateContentRequest {
  knowledgeBaseId: string;
  name: string;
  title?: string;
  overrideLinkOutUri?: string;
  metadata?: Record<string, string>;
  uploadId: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateContentResponse {
  content?: ContentData;
}
export interface CreateKnowledgeBaseRequest {
  clientToken?: string;
  name: string;
  knowledgeBaseType: string;
  sourceConfiguration?: SourceConfiguration;
  renderingConfiguration?: RenderingConfiguration;
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  description?: string;
  tags?: Record<string, string>;
}
export interface CreateKnowledgeBaseResponse {
  knowledgeBase?: KnowledgeBaseData;
}
export interface CreateMessageTemplateAttachmentRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  contentDisposition: string;
  name: string;
  body: string;
  clientToken?: string;
}
export interface CreateMessageTemplateAttachmentResponse {
  attachment?: MessageTemplateAttachment;
}
export interface CreateMessageTemplateRequest {
  knowledgeBaseId: string;
  name: string;
  content: MessageTemplateContentProvider;
  description?: string;
  channelSubtype: string;
  language?: string;
  defaultAttributes?: MessageTemplateAttributes;
  groupingConfiguration?: GroupingConfiguration;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateMessageTemplateResponse {
  messageTemplate?: MessageTemplateData;
}
export interface CreateMessageTemplateVersionRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  messageTemplateContentSha256?: string;
}
export interface CreateMessageTemplateVersionResponse {
  messageTemplate?: ExtendedMessageTemplateData;
}
export interface CreateQuickResponseRequest {
  knowledgeBaseId: string;
  name: string;
  content: QuickResponseDataProvider;
  contentType?: string;
  groupingConfiguration?: GroupingConfiguration;
  description?: string;
  shortcutKey?: string;
  isActive?: boolean;
  channels?: Array<string>;
  language?: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateQuickResponseResponse {
  quickResponse?: QuickResponseData;
}
export interface CreateSessionRequest {
  clientToken?: string;
  assistantId: string;
  name: string;
  description?: string;
  tags?: Record<string, string>;
  tagFilter?: TagFilter;
  aiAgentConfiguration?: Record<string, AIAgentConfigurationData>;
}
export interface CreateSessionResponse {
  session?: SessionData;
}
export type CustomAttributes = Record<string, string>;
export interface CustomerProfileAttributes {
  profileId?: string;
  profileARN?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  accountNumber?: string;
  emailAddress?: string;
  phoneNumber?: string;
  additionalInformation?: string;
  partyType?: string;
  businessName?: string;
  birthDate?: string;
  gender?: string;
  mobilePhoneNumber?: string;
  homePhoneNumber?: string;
  businessPhoneNumber?: string;
  businessEmailAddress?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  city?: string;
  county?: string;
  country?: string;
  postalCode?: string;
  province?: string;
  state?: string;
  shippingAddress1?: string;
  shippingAddress2?: string;
  shippingAddress3?: string;
  shippingAddress4?: string;
  shippingCity?: string;
  shippingCounty?: string;
  shippingCountry?: string;
  shippingPostalCode?: string;
  shippingProvince?: string;
  shippingState?: string;
  mailingAddress1?: string;
  mailingAddress2?: string;
  mailingAddress3?: string;
  mailingAddress4?: string;
  mailingCity?: string;
  mailingCounty?: string;
  mailingCountry?: string;
  mailingPostalCode?: string;
  mailingProvince?: string;
  mailingState?: string;
  billingAddress1?: string;
  billingAddress2?: string;
  billingAddress3?: string;
  billingAddress4?: string;
  billingCity?: string;
  billingCounty?: string;
  billingCountry?: string;
  billingPostalCode?: string;
  billingProvince?: string;
  billingState?: string;
  custom?: Record<string, string>;
}
interface _DataDetails {
  contentData?: ContentDataDetails;
  generativeData?: GenerativeDataDetails;
  intentDetectedData?: IntentDetectedDataDetails;
  sourceContentData?: SourceContentDataDetails;
  generativeChunkData?: GenerativeChunkDataDetails;
}

export type DataDetails =
  | (_DataDetails & { contentData: ContentDataDetails })
  | (_DataDetails & { generativeData: GenerativeDataDetails })
  | (_DataDetails & { intentDetectedData: IntentDetectedDataDetails })
  | (_DataDetails & { sourceContentData: SourceContentDataDetails })
  | (_DataDetails & { generativeChunkData: GenerativeChunkDataDetails });
interface _DataReference {
  contentReference?: ContentReference;
  generativeReference?: GenerativeReference;
}

export type DataReference =
  | (_DataReference & { contentReference: ContentReference })
  | (_DataReference & { generativeReference: GenerativeReference });
export interface DataSummary {
  reference: DataReference;
  details: DataDetails;
}
export type DataSummaryList = Array<DataSummary>;
export interface DeactivateMessageTemplateRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  versionNumber: number;
}
export interface DeactivateMessageTemplateResponse {
  messageTemplateArn: string;
  messageTemplateId: string;
  versionNumber: number;
}
export interface DeleteAIAgentRequest {
  assistantId: string;
  aiAgentId: string;
}
export interface DeleteAIAgentResponse {}
export interface DeleteAIAgentVersionRequest {
  assistantId: string;
  aiAgentId: string;
  versionNumber: number;
}
export interface DeleteAIAgentVersionResponse {}
export interface DeleteAIGuardrailRequest {
  assistantId: string;
  aiGuardrailId: string;
}
export interface DeleteAIGuardrailResponse {}
export interface DeleteAIGuardrailVersionRequest {
  assistantId: string;
  aiGuardrailId: string;
  versionNumber: number;
}
export interface DeleteAIGuardrailVersionResponse {}
export interface DeleteAIPromptRequest {
  assistantId: string;
  aiPromptId: string;
}
export interface DeleteAIPromptResponse {}
export interface DeleteAIPromptVersionRequest {
  assistantId: string;
  aiPromptId: string;
  versionNumber: number;
}
export interface DeleteAIPromptVersionResponse {}
export interface DeleteAssistantAssociationRequest {
  assistantAssociationId: string;
  assistantId: string;
}
export interface DeleteAssistantAssociationResponse {}
export interface DeleteAssistantRequest {
  assistantId: string;
}
export interface DeleteAssistantResponse {}
export interface DeleteContentAssociationRequest {
  knowledgeBaseId: string;
  contentId: string;
  contentAssociationId: string;
}
export interface DeleteContentAssociationResponse {}
export interface DeleteContentRequest {
  knowledgeBaseId: string;
  contentId: string;
}
export interface DeleteContentResponse {}
export interface DeleteImportJobRequest {
  knowledgeBaseId: string;
  importJobId: string;
}
export interface DeleteImportJobResponse {}
export interface DeleteKnowledgeBaseRequest {
  knowledgeBaseId: string;
}
export interface DeleteKnowledgeBaseResponse {}
export interface DeleteMessageTemplateAttachmentRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  attachmentId: string;
}
export interface DeleteMessageTemplateAttachmentResponse {}
export interface DeleteMessageTemplateRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
}
export interface DeleteMessageTemplateResponse {}
export interface DeleteQuickResponseRequest {
  knowledgeBaseId: string;
  quickResponseId: string;
}
export interface DeleteQuickResponseResponse {}
export type Description = string;

export interface Document {
  contentReference: ContentReference;
  title?: DocumentText;
  excerpt?: DocumentText;
}
export interface DocumentText {
  text?: string;
  highlights?: Array<Highlight>;
}
export interface EmailHeader {
  name?: string;
  value?: string;
}
export type EmailHeaderKey = string;

export type EmailHeaders = Array<EmailHeader>;
export type EmailHeaderValue = string;

export interface EmailMessageTemplateContent {
  subject?: string;
  body?: EmailMessageTemplateContentBody;
  headers?: Array<EmailHeader>;
}
export interface EmailMessageTemplateContentBody {
  plainText?: MessageTemplateBodyContentProvider;
  html?: MessageTemplateBodyContentProvider;
}
export interface ExtendedMessageTemplateData {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channelSubtype: string;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  lastModifiedBy: string;
  content: MessageTemplateContentProvider;
  description?: string;
  language?: string;
  groupingConfiguration?: GroupingConfiguration;
  defaultAttributes?: MessageTemplateAttributes;
  attributeTypes?: Array<string>;
  attachments?: Array<MessageTemplateAttachment>;
  isActive?: boolean;
  versionNumber?: number;
  messageTemplateContentSha256: string;
  tags?: Record<string, string>;
}
export type ExternalSource = string;

export interface ExternalSourceConfiguration {
  source: string;
  configuration: Configuration;
}
export type FailureReason = Array<string>;
export interface Filter {
  field: string;
  operator: string;
  value: string;
}
export type FilterField = string;

export type FilterList = Array<Filter>;
export type FilterOperator = string;

export interface FixedSizeChunkingConfiguration {
  maxTokens: number;
  overlapPercentage: number;
}
export interface GenerativeChunkDataDetails {
  completion?: string;
  references?: Array<DataSummary>;
  nextChunkToken?: string;
}
export interface GenerativeContentFeedbackData {
  relevance: string;
}
export interface GenerativeDataDetails {
  completion: string;
  references: Array<DataSummary>;
  rankingData: RankingData;
}
export interface GenerativeReference {
  modelId?: string;
  generationId?: string;
}
export type GenericArn = string;

export interface GetAIAgentRequest {
  assistantId: string;
  aiAgentId: string;
}
export interface GetAIAgentResponse {
  aiAgent?: AIAgentData;
  versionNumber?: number;
}
export interface GetAIGuardrailRequest {
  assistantId: string;
  aiGuardrailId: string;
}
export interface GetAIGuardrailResponse {
  aiGuardrail?: AIGuardrailData;
  versionNumber?: number;
}
export interface GetAIPromptRequest {
  assistantId: string;
  aiPromptId: string;
}
export interface GetAIPromptResponse {
  aiPrompt?: AIPromptData;
  versionNumber?: number;
}
export interface GetAssistantAssociationRequest {
  assistantAssociationId: string;
  assistantId: string;
}
export interface GetAssistantAssociationResponse {
  assistantAssociation?: AssistantAssociationData;
}
export interface GetAssistantRequest {
  assistantId: string;
}
export interface GetAssistantResponse {
  assistant?: AssistantData;
}
export interface GetContentAssociationRequest {
  knowledgeBaseId: string;
  contentId: string;
  contentAssociationId: string;
}
export interface GetContentAssociationResponse {
  contentAssociation?: ContentAssociationData;
}
export interface GetContentRequest {
  contentId: string;
  knowledgeBaseId: string;
}
export interface GetContentResponse {
  content?: ContentData;
}
export interface GetContentSummaryRequest {
  contentId: string;
  knowledgeBaseId: string;
}
export interface GetContentSummaryResponse {
  contentSummary?: ContentSummary;
}
export interface GetImportJobRequest {
  importJobId: string;
  knowledgeBaseId: string;
}
export interface GetImportJobResponse {
  importJob?: ImportJobData;
}
export interface GetKnowledgeBaseRequest {
  knowledgeBaseId: string;
}
export interface GetKnowledgeBaseResponse {
  knowledgeBase?: KnowledgeBaseData;
}
export interface GetMessageTemplateRequest {
  messageTemplateId: string;
  knowledgeBaseId: string;
}
export interface GetMessageTemplateResponse {
  messageTemplate?: ExtendedMessageTemplateData;
}
export interface GetNextMessageRequest {
  assistantId: string;
  sessionId: string;
  nextMessageToken: string;
}
export interface GetNextMessageResponse {
  type: string;
  response: MessageOutput;
  requestMessageId: string;
  conversationState: ConversationState;
  nextMessageToken?: string;
  conversationSessionData?: Array<RuntimeSessionData>;
}
export interface GetQuickResponseRequest {
  quickResponseId: string;
  knowledgeBaseId: string;
}
export interface GetQuickResponseResponse {
  quickResponse?: QuickResponseData;
}
export interface GetRecommendationsRequest {
  assistantId: string;
  sessionId: string;
  maxResults?: number;
  waitTimeSeconds?: number;
  nextChunkToken?: string;
}
export interface GetRecommendationsResponse {
  recommendations: Array<RecommendationData>;
  triggers?: Array<RecommendationTrigger>;
}
export interface GetSessionRequest {
  assistantId: string;
  sessionId: string;
}
export interface GetSessionResponse {
  session?: SessionData;
}
export interface GroupingConfiguration {
  criteria?: string;
  values?: Array<string>;
}
export type GroupingCriteria = string;

export type GroupingValue = string;

export type GroupingValues = Array<string>;
export interface GuardrailContentFilterConfig {
  type: string;
  inputStrength: string;
  outputStrength: string;
}
export type GuardrailContentFiltersConfig = Array<GuardrailContentFilterConfig>;
export type GuardrailContentFilterType = string;

export interface GuardrailContextualGroundingFilterConfig {
  type: string;
  threshold: number;
}
export type GuardrailContextualGroundingFiltersConfig =
  Array<GuardrailContextualGroundingFilterConfig>;
export type GuardrailContextualGroundingFilterThreshold = number;

export type GuardrailContextualGroundingFilterType = string;

export type GuardrailFilterStrength = string;

export type GuardrailManagedWordListsConfig =
  Array<GuardrailManagedWordsConfig>;
export interface GuardrailManagedWordsConfig {
  type: string;
}
export type GuardrailManagedWordsType = string;

export type GuardrailPiiEntitiesConfig = Array<GuardrailPiiEntityConfig>;
export interface GuardrailPiiEntityConfig {
  type: string;
  action: string;
}
export type GuardrailPiiEntityType = string;

export interface GuardrailRegexConfig {
  name: string;
  description?: string;
  pattern: string;
  action: string;
}
export type GuardrailRegexDescription = string;

export type GuardrailRegexesConfig = Array<GuardrailRegexConfig>;
export type GuardrailRegexName = string;

export type GuardrailRegexPattern = string;

export type GuardrailSensitiveInformationAction = string;

export interface GuardrailTopicConfig {
  name: string;
  definition: string;
  examples?: Array<string>;
  type: string;
}
export type GuardrailTopicDefinition = string;

export type GuardrailTopicExample = string;

export type GuardrailTopicExamples = Array<string>;
export type GuardrailTopicName = string;

export type GuardrailTopicsConfig = Array<GuardrailTopicConfig>;
export type GuardrailTopicType = string;

export interface GuardrailWordConfig {
  text: string;
}
export type GuardrailWordsConfig = Array<GuardrailWordConfig>;
export type GuardrailWordText = string;

export type Headers = Record<string, string>;
export interface HierarchicalChunkingConfiguration {
  levelConfigurations: Array<HierarchicalChunkingLevelConfiguration>;
  overlapTokens: number;
}
export interface HierarchicalChunkingLevelConfiguration {
  maxTokens: number;
}
export type HierarchicalChunkingLevelConfigurations =
  Array<HierarchicalChunkingLevelConfiguration>;
export interface Highlight {
  beginOffsetInclusive?: number;
  endOffsetExclusive?: number;
}
export type HighlightOffset = number;

export type Highlights = Array<Highlight>;
export interface ImportJobData {
  importJobId: string;
  knowledgeBaseId: string;
  uploadId: string;
  knowledgeBaseArn: string;
  importJobType: string;
  status: string;
  url: string;
  failedRecordReport?: string;
  urlExpiry: Date | string;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  metadata?: Record<string, string>;
  externalSourceConfiguration?: ExternalSourceConfiguration;
}
export type ImportJobList = Array<ImportJobSummary>;
export type ImportJobStatus = string;

export interface ImportJobSummary {
  importJobId: string;
  knowledgeBaseId: string;
  uploadId: string;
  knowledgeBaseArn: string;
  importJobType: string;
  status: string;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  metadata?: Record<string, string>;
  externalSourceConfiguration?: ExternalSourceConfiguration;
}
export type ImportJobType = string;

export interface IntentDetectedDataDetails {
  intent: string;
  intentId: string;
}
export interface IntentInputData {
  intentId: string;
}
export interface KnowledgeBaseAssociationConfigurationData {
  contentTagFilter?: TagFilter;
  maxResults?: number;
  overrideKnowledgeBaseSearchType?: string;
}
export interface KnowledgeBaseAssociationData {
  knowledgeBaseId?: string;
  knowledgeBaseArn?: string;
}
export interface KnowledgeBaseData {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  name: string;
  knowledgeBaseType: string;
  status: string;
  lastContentModificationTime?: Date | string;
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
  sourceConfiguration?: SourceConfiguration;
  renderingConfiguration?: RenderingConfiguration;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  description?: string;
  tags?: Record<string, string>;
  ingestionStatus?: string;
  ingestionFailureReasons?: Array<string>;
}
export type KnowledgeBaseList = Array<KnowledgeBaseSummary>;
export type KnowledgeBaseSearchType = string;

export type KnowledgeBaseStatus = string;

export interface KnowledgeBaseSummary {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  name: string;
  knowledgeBaseType: string;
  status: string;
  sourceConfiguration?: SourceConfiguration;
  vectorIngestionConfiguration?: VectorIngestionConfiguration;
  renderingConfiguration?: RenderingConfiguration;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  description?: string;
  tags?: Record<string, string>;
}
export type KnowledgeBaseType = string;

export type LanguageCode = string;

export interface ListAIAgentsRequest {
  assistantId: string;
  nextToken?: string;
  maxResults?: number;
  origin?: string;
}
export interface ListAIAgentsResponse {
  aiAgentSummaries: Array<AIAgentSummary>;
  nextToken?: string;
}
export interface ListAIAgentVersionsRequest {
  assistantId: string;
  aiAgentId: string;
  nextToken?: string;
  maxResults?: number;
  origin?: string;
}
export interface ListAIAgentVersionsResponse {
  aiAgentVersionSummaries: Array<AIAgentVersionSummary>;
  nextToken?: string;
}
export interface ListAIGuardrailsRequest {
  assistantId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAIGuardrailsResponse {
  aiGuardrailSummaries: Array<AIGuardrailSummary>;
  nextToken?: string;
}
export interface ListAIGuardrailVersionsRequest {
  assistantId: string;
  aiGuardrailId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAIGuardrailVersionsResponse {
  aiGuardrailVersionSummaries: Array<AIGuardrailVersionSummary>;
  nextToken?: string;
}
export interface ListAIPromptsRequest {
  assistantId: string;
  nextToken?: string;
  maxResults?: number;
  origin?: string;
}
export interface ListAIPromptsResponse {
  aiPromptSummaries: Array<AIPromptSummary>;
  nextToken?: string;
}
export interface ListAIPromptVersionsRequest {
  assistantId: string;
  aiPromptId: string;
  nextToken?: string;
  maxResults?: number;
  origin?: string;
}
export interface ListAIPromptVersionsResponse {
  aiPromptVersionSummaries: Array<AIPromptVersionSummary>;
  nextToken?: string;
}
export interface ListAssistantAssociationsRequest {
  nextToken?: string;
  maxResults?: number;
  assistantId: string;
}
export interface ListAssistantAssociationsResponse {
  assistantAssociationSummaries: Array<AssistantAssociationSummary>;
  nextToken?: string;
}
export interface ListAssistantsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssistantsResponse {
  assistantSummaries: Array<AssistantSummary>;
  nextToken?: string;
}
export interface ListContentAssociationsRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
  contentId: string;
}
export interface ListContentAssociationsResponse {
  contentAssociationSummaries: Array<ContentAssociationSummary>;
  nextToken?: string;
}
export interface ListContentsRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
}
export interface ListContentsResponse {
  contentSummaries: Array<ContentSummary>;
  nextToken?: string;
}
export interface ListImportJobsRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
}
export interface ListImportJobsResponse {
  importJobSummaries: Array<ImportJobSummary>;
  nextToken?: string;
}
export interface ListKnowledgeBasesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListKnowledgeBasesResponse {
  knowledgeBaseSummaries: Array<KnowledgeBaseSummary>;
  nextToken?: string;
}
export interface ListMessagesRequest {
  assistantId: string;
  sessionId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListMessagesResponse {
  messages: Array<MessageOutput>;
  nextToken?: string;
}
export interface ListMessageTemplatesRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
}
export interface ListMessageTemplatesResponse {
  messageTemplateSummaries: Array<MessageTemplateSummary>;
  nextToken?: string;
}
export interface ListMessageTemplateVersionsRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListMessageTemplateVersionsResponse {
  messageTemplateVersionSummaries: Array<MessageTemplateVersionSummary>;
  nextToken?: string;
}
export interface ListQuickResponsesRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
}
export interface ListQuickResponsesResponse {
  quickResponseSummaries: Array<QuickResponseSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type LlmModelId = string;

interface _ManagedSourceConfiguration {
  webCrawlerConfiguration?: WebCrawlerConfiguration;
}

export type ManagedSourceConfiguration = _ManagedSourceConfiguration & {
  webCrawlerConfiguration: WebCrawlerConfiguration;
};
export interface ManualSearchAIAgentConfiguration {
  answerGenerationAIPromptId?: string;
  answerGenerationAIGuardrailId?: string;
  associationConfigurations?: Array<AssociationConfiguration>;
  locale?: string;
}
export type MaxResults = number;

export interface MessageConfiguration {
  generateFillerMessage?: boolean;
}
interface _MessageData {
  text?: TextMessage;
}

export type MessageData = _MessageData & { text: TextMessage };
export interface MessageInput {
  value: MessageData;
}
export type MessageList = Array<MessageOutput>;
export interface MessageOutput {
  value: MessageData;
  messageId: string;
  participant: string;
  timestamp: Date | string;
}
export interface MessageTemplateAttachment {
  contentDisposition: string;
  name: string;
  uploadedTime: Date | string;
  url: string;
  urlExpiry: Date | string;
  attachmentId: string;
}
export type MessageTemplateAttachmentList = Array<MessageTemplateAttachment>;
export type MessageTemplateAttributeKey = string;

export type MessageTemplateAttributeKeyList = Array<string>;
export interface MessageTemplateAttributes {
  systemAttributes?: SystemAttributes;
  agentAttributes?: AgentAttributes;
  customerProfileAttributes?: CustomerProfileAttributes;
  customAttributes?: Record<string, string>;
}
export type MessageTemplateAttributeType = string;

export type MessageTemplateAttributeTypeList = Array<string>;
export type MessageTemplateAttributeValue = string;

interface _MessageTemplateBodyContentProvider {
  content?: string;
}

export type MessageTemplateBodyContentProvider =
  _MessageTemplateBodyContentProvider & { content: string };
interface _MessageTemplateContentProvider {
  email?: EmailMessageTemplateContent;
  sms?: SMSMessageTemplateContent;
}

export type MessageTemplateContentProvider =
  | (_MessageTemplateContentProvider & { email: EmailMessageTemplateContent })
  | (_MessageTemplateContentProvider & { sms: SMSMessageTemplateContent });
export type MessageTemplateContentSha256 = string;

export interface MessageTemplateData {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channelSubtype: string;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  lastModifiedBy: string;
  content: MessageTemplateContentProvider;
  description?: string;
  language?: string;
  groupingConfiguration?: GroupingConfiguration;
  defaultAttributes?: MessageTemplateAttributes;
  attributeTypes?: Array<string>;
  messageTemplateContentSha256: string;
  tags?: Record<string, string>;
}
export interface MessageTemplateFilterField {
  name: string;
  values?: Array<string>;
  operator: string;
  includeNoExistence?: boolean;
}
export type MessageTemplateFilterFieldList = Array<MessageTemplateFilterField>;
export type MessageTemplateFilterOperator = string;

export type MessageTemplateFilterValue = string;

export type MessageTemplateFilterValueList = Array<string>;
export interface MessageTemplateOrderField {
  name: string;
  order?: string;
}
export interface MessageTemplateQueryField {
  name: string;
  values: Array<string>;
  operator: string;
  allowFuzziness?: boolean;
  priority?: string;
}
export type MessageTemplateQueryFieldList = Array<MessageTemplateQueryField>;
export type MessageTemplateQueryOperator = string;

export type MessageTemplateQueryValue = string;

export type MessageTemplateQueryValueList = Array<string>;
export interface MessageTemplateSearchExpression {
  queries?: Array<MessageTemplateQueryField>;
  filters?: Array<MessageTemplateFilterField>;
  orderOnField?: MessageTemplateOrderField;
}
export interface MessageTemplateSearchResultData {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channelSubtype: string;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  lastModifiedBy: string;
  isActive?: boolean;
  versionNumber?: number;
  description?: string;
  groupingConfiguration?: GroupingConfiguration;
  language?: string;
  tags?: Record<string, string>;
}
export type MessageTemplateSearchResultsList =
  Array<MessageTemplateSearchResultData>;
export interface MessageTemplateSummary {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channelSubtype: string;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  lastModifiedBy: string;
  activeVersionNumber?: number;
  description?: string;
  tags?: Record<string, string>;
}
export type MessageTemplateSummaryList = Array<MessageTemplateSummary>;
export interface MessageTemplateVersionSummary {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channelSubtype: string;
  isActive: boolean;
  versionNumber: number;
}
export type MessageTemplateVersionSummaryList =
  Array<MessageTemplateVersionSummary>;
export type MessageType = string;

export type Name = string;

export type NextToken = string;

export type NonEmptySensitiveString = string;

export type NonEmptyString = string;

export type NonEmptyUnlimitedString = string;

export interface NotifyRecommendationsReceivedError {
  recommendationId?: string;
  message?: string;
}
export type NotifyRecommendationsReceivedErrorList =
  Array<NotifyRecommendationsReceivedError>;
export type NotifyRecommendationsReceivedErrorMessage = string;

export interface NotifyRecommendationsReceivedRequest {
  assistantId: string;
  sessionId: string;
  recommendationIds: Array<string>;
}
export interface NotifyRecommendationsReceivedResponse {
  recommendationIds?: Array<string>;
  errors?: Array<NotifyRecommendationsReceivedError>;
}
export type ObjectFieldsList = Array<string>;
interface _OrCondition {
  andConditions?: Array<TagCondition>;
  tagCondition?: TagCondition;
}

export type OrCondition =
  | (_OrCondition & { andConditions: Array<TagCondition> })
  | (_OrCondition & { tagCondition: TagCondition });
export type OrConditions = Array<OrCondition>;
export type Order = string;

export type Origin = string;

export interface ParsingConfiguration {
  parsingStrategy: string;
  bedrockFoundationModelConfiguration?: BedrockFoundationModelConfigurationForParsing;
}
export interface ParsingPrompt {
  parsingPromptText: string;
}
export type ParsingPromptText = string;

export type ParsingStrategy = string;

export type Participant = string;

export declare class PreconditionFailedException extends EffectData.TaggedError(
  "PreconditionFailedException",
)<{
  readonly message?: string;
}> {}
export type Priority = string;

export interface PutFeedbackRequest {
  assistantId: string;
  targetId: string;
  targetType: string;
  contentFeedback: ContentFeedbackData;
}
export interface PutFeedbackResponse {
  assistantId: string;
  assistantArn: string;
  targetId: string;
  targetType: string;
  contentFeedback: ContentFeedbackData;
}
export interface QueryAssistantRequest {
  assistantId: string;
  queryText?: string;
  nextToken?: string;
  maxResults?: number;
  sessionId?: string;
  queryCondition?: Array<QueryCondition>;
  queryInputData?: QueryInputData;
  overrideKnowledgeBaseSearchType?: string;
}
export interface QueryAssistantResponse {
  results: Array<ResultData>;
  nextToken?: string;
}
interface _QueryCondition {
  single?: QueryConditionItem;
}

export type QueryCondition = _QueryCondition & { single: QueryConditionItem };
export type QueryConditionComparisonOperator = string;

export type QueryConditionExpression = Array<QueryCondition>;
export type QueryConditionFieldName = string;

export interface QueryConditionItem {
  field: string;
  comparator: string;
  value: string;
}
interface _QueryInputData {
  queryTextInputData?: QueryTextInputData;
  intentInputData?: IntentInputData;
}

export type QueryInputData =
  | (_QueryInputData & { queryTextInputData: QueryTextInputData })
  | (_QueryInputData & { intentInputData: IntentInputData });
export interface QueryRecommendationTriggerData {
  text?: string;
}
export type QueryResultsList = Array<ResultData>;
export type QueryResultType = string;

export type QueryText = string;

export interface QueryTextInputData {
  text: string;
}
export type QuickResponseContent = string;

interface _QuickResponseContentProvider {
  content?: string;
}

export type QuickResponseContentProvider = _QuickResponseContentProvider & {
  content: string;
};
export interface QuickResponseContents {
  plainText?: QuickResponseContentProvider;
  markdown?: QuickResponseContentProvider;
}
export interface QuickResponseData {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: string;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  contents?: QuickResponseContents;
  description?: string;
  groupingConfiguration?: GroupingConfiguration;
  shortcutKey?: string;
  lastModifiedBy?: string;
  isActive?: boolean;
  channels?: Array<string>;
  language?: string;
  tags?: Record<string, string>;
}
interface _QuickResponseDataProvider {
  content?: string;
}

export type QuickResponseDataProvider = _QuickResponseDataProvider & {
  content: string;
};
export type QuickResponseDescription = string;

export interface QuickResponseFilterField {
  name: string;
  values?: Array<string>;
  operator: string;
  includeNoExistence?: boolean;
}
export type QuickResponseFilterFieldList = Array<QuickResponseFilterField>;
export type QuickResponseFilterOperator = string;

export type QuickResponseFilterValue = string;

export type QuickResponseFilterValueList = Array<string>;
export type QuickResponseName = string;

export interface QuickResponseOrderField {
  name: string;
  order?: string;
}
export interface QuickResponseQueryField {
  name: string;
  values: Array<string>;
  operator: string;
  allowFuzziness?: boolean;
  priority?: string;
}
export type QuickResponseQueryFieldList = Array<QuickResponseQueryField>;
export type QuickResponseQueryOperator = string;

export type QuickResponseQueryValue = string;

export type QuickResponseQueryValueList = Array<string>;
export interface QuickResponseSearchExpression {
  queries?: Array<QuickResponseQueryField>;
  filters?: Array<QuickResponseFilterField>;
  orderOnField?: QuickResponseOrderField;
}
export interface QuickResponseSearchResultData {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: string;
  contents: QuickResponseContents;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  isActive: boolean;
  description?: string;
  groupingConfiguration?: GroupingConfiguration;
  shortcutKey?: string;
  lastModifiedBy?: string;
  channels?: Array<string>;
  language?: string;
  attributesNotInterpolated?: Array<string>;
  attributesInterpolated?: Array<string>;
  tags?: Record<string, string>;
}
export type QuickResponseSearchResultsList =
  Array<QuickResponseSearchResultData>;
export type QuickResponseStatus = string;

export interface QuickResponseSummary {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: string;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  description?: string;
  lastModifiedBy?: string;
  isActive?: boolean;
  channels?: Array<string>;
  tags?: Record<string, string>;
}
export type QuickResponseSummaryList = Array<QuickResponseSummary>;
export type QuickResponseType = string;

export interface RankingData {
  relevanceScore?: number;
  relevanceLevel?: string;
}
export interface RecommendationData {
  recommendationId: string;
  document?: Document;
  relevanceScore?: number;
  relevanceLevel?: string;
  type?: string;
  data?: DataSummary;
}
export type RecommendationId = string;

export type RecommendationIdList = Array<string>;
export type RecommendationList = Array<RecommendationData>;
export type RecommendationSourceType = string;

export interface RecommendationTrigger {
  id: string;
  type: string;
  source: string;
  data: RecommendationTriggerData;
  recommendationIds: Array<string>;
}
interface _RecommendationTriggerData {
  query?: QueryRecommendationTriggerData;
}

export type RecommendationTriggerData = _RecommendationTriggerData & {
  query: QueryRecommendationTriggerData;
};
export type RecommendationTriggerList = Array<RecommendationTrigger>;
export type RecommendationTriggerType = string;

export type RecommendationType = string;

export type ReferenceType = string;

export type Relevance = string;

export type RelevanceLevel = string;

export type RelevanceScore = number;

export interface RemoveAssistantAIAgentRequest {
  assistantId: string;
  aiAgentType: string;
}
export interface RemoveAssistantAIAgentResponse {}
export interface RemoveKnowledgeBaseTemplateUriRequest {
  knowledgeBaseId: string;
}
export interface RemoveKnowledgeBaseTemplateUriResponse {}
export interface RenderingConfiguration {
  templateUri?: string;
}
export interface RenderMessageTemplateRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  attributes: MessageTemplateAttributes;
}
export interface RenderMessageTemplateResponse {
  content: MessageTemplateContentProvider;
  attributesNotInterpolated?: Array<string>;
  attachments?: Array<MessageTemplateAttachment>;
}
export declare class RequestTimeoutException extends EffectData.TaggedError(
  "RequestTimeoutException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export interface ResultData {
  resultId: string;
  document?: Document;
  relevanceScore?: number;
  data?: DataSummary;
  type?: string;
}
export interface RuntimeSessionData {
  key: string;
  value: RuntimeSessionDataValue;
}
export type RuntimeSessionDataList = Array<RuntimeSessionData>;
interface _RuntimeSessionDataValue {
  stringValue?: string;
}

export type RuntimeSessionDataValue = _RuntimeSessionDataValue & {
  stringValue: string;
};
export interface SearchContentRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
  searchExpression: SearchExpression;
}
export interface SearchContentResponse {
  contentSummaries: Array<ContentSummary>;
  nextToken?: string;
}
export interface SearchExpression {
  filters: Array<Filter>;
}
export interface SearchMessageTemplatesRequest {
  knowledgeBaseId: string;
  searchExpression: MessageTemplateSearchExpression;
  nextToken?: string;
  maxResults?: number;
}
export interface SearchMessageTemplatesResponse {
  results: Array<MessageTemplateSearchResultData>;
  nextToken?: string;
}
export interface SearchQuickResponsesRequest {
  knowledgeBaseId: string;
  searchExpression: QuickResponseSearchExpression;
  nextToken?: string;
  maxResults?: number;
  attributes?: Record<string, string>;
}
export interface SearchQuickResponsesResponse {
  results: Array<QuickResponseSearchResultData>;
  nextToken?: string;
}
export interface SearchSessionsRequest {
  nextToken?: string;
  maxResults?: number;
  assistantId: string;
  searchExpression: SearchExpression;
}
export interface SearchSessionsResponse {
  sessionSummaries: Array<SessionSummary>;
  nextToken?: string;
}
export interface SeedUrl {
  url?: string;
}
export type SeedUrls = Array<SeedUrl>;
export interface SelfServiceAIAgentConfiguration {
  selfServicePreProcessingAIPromptId?: string;
  selfServiceAnswerGenerationAIPromptId?: string;
  selfServiceAIGuardrailId?: string;
  associationConfigurations?: Array<AssociationConfiguration>;
}
export interface SelfServiceConversationHistory {
  turnNumber: number;
  inputTranscript?: string;
  botResponse?: string;
}
export type SelfServiceConversationHistoryList =
  Array<SelfServiceConversationHistory>;
export interface SemanticChunkingConfiguration {
  maxTokens: number;
  bufferSize: number;
  breakpointPercentileThreshold: number;
}
export interface SendMessageRequest {
  assistantId: string;
  sessionId: string;
  type: string;
  message: MessageInput;
  conversationContext?: ConversationContext;
  configuration?: MessageConfiguration;
  clientToken?: string;
}
export interface SendMessageResponse {
  requestMessageId: string;
  configuration?: MessageConfiguration;
  nextMessageToken: string;
}
export type SensitiveString = string;

export interface ServerSideEncryptionConfiguration {
  kmsKeyId?: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface SessionData {
  sessionArn: string;
  sessionId: string;
  name: string;
  description?: string;
  tags?: Record<string, string>;
  integrationConfiguration?: SessionIntegrationConfiguration;
  tagFilter?: TagFilter;
  aiAgentConfiguration?: Record<string, AIAgentConfigurationData>;
  origin?: string;
}
export type SessionDataNamespace = string;

export interface SessionIntegrationConfiguration {
  topicIntegrationArn?: string;
}
export type SessionSummaries = Array<SessionSummary>;
export interface SessionSummary {
  sessionId: string;
  sessionArn: string;
  assistantId: string;
  assistantArn: string;
}
export type ShortCutKey = string;

export interface SMSMessageTemplateContent {
  body?: SMSMessageTemplateContentBody;
}
export interface SMSMessageTemplateContentBody {
  plainText?: MessageTemplateBodyContentProvider;
}
interface _SourceConfiguration {
  appIntegrations?: AppIntegrationsConfiguration;
  managedSourceConfiguration?: ManagedSourceConfiguration;
}

export type SourceConfiguration =
  | (_SourceConfiguration & { appIntegrations: AppIntegrationsConfiguration })
  | (_SourceConfiguration & {
      managedSourceConfiguration: ManagedSourceConfiguration;
    });
export interface SourceContentDataDetails {
  id: string;
  type: string;
  textData: TextData;
  rankingData: RankingData;
  citationSpan?: CitationSpan;
}
export type SourceContentType = string;

export interface StartContentUploadRequest {
  knowledgeBaseId: string;
  contentType: string;
  presignedUrlTimeToLive?: number;
}
export interface StartContentUploadResponse {
  uploadId: string;
  url: string;
  urlExpiry: Date | string;
  headersToInclude: Record<string, string>;
}
export interface StartImportJobRequest {
  knowledgeBaseId: string;
  importJobType: string;
  uploadId: string;
  clientToken?: string;
  metadata?: Record<string, string>;
  externalSourceConfiguration?: ExternalSourceConfiguration;
}
export interface StartImportJobResponse {
  importJob?: ImportJobData;
}
export type Status = string;

export type SyncStatus = string;

export interface SystemAttributes {
  name?: string;
  customerEndpoint?: SystemEndpointAttributes;
  systemEndpoint?: SystemEndpointAttributes;
}
export interface SystemEndpointAttributes {
  address?: string;
}
export interface TagCondition {
  key: string;
  value?: string;
}
interface _TagFilter {
  tagCondition?: TagCondition;
  andConditions?: Array<TagCondition>;
  orConditions?: Array<OrCondition>;
}

export type TagFilter =
  | (_TagFilter & { tagCondition: TagCondition })
  | (_TagFilter & { andConditions: Array<TagCondition> })
  | (_TagFilter & { orConditions: Array<OrCondition> });
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagValue = string;

export type TargetType = string;

export type TextAIPrompt = string;

export interface TextData {
  title?: DocumentText;
  excerpt?: DocumentText;
}
export interface TextFullAIPromptEditTemplateConfiguration {
  text: string;
}
export interface TextMessage {
  value?: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type TimeToLive = number;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAIAgentRequest {
  clientToken?: string;
  assistantId: string;
  aiAgentId: string;
  visibilityStatus: string;
  configuration?: AIAgentConfiguration;
  description?: string;
}
export interface UpdateAIAgentResponse {
  aiAgent?: AIAgentData;
}
export interface UpdateAIGuardrailRequest {
  clientToken?: string;
  assistantId: string;
  aiGuardrailId: string;
  visibilityStatus: string;
  blockedInputMessaging: string;
  blockedOutputsMessaging: string;
  description?: string;
  topicPolicyConfig?: AIGuardrailTopicPolicyConfig;
  contentPolicyConfig?: AIGuardrailContentPolicyConfig;
  wordPolicyConfig?: AIGuardrailWordPolicyConfig;
  sensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig;
  contextualGroundingPolicyConfig?: AIGuardrailContextualGroundingPolicyConfig;
}
export interface UpdateAIGuardrailResponse {
  aiGuardrail?: AIGuardrailData;
}
export interface UpdateAIPromptRequest {
  clientToken?: string;
  assistantId: string;
  aiPromptId: string;
  visibilityStatus: string;
  templateConfiguration?: AIPromptTemplateConfiguration;
  description?: string;
}
export interface UpdateAIPromptResponse {
  aiPrompt?: AIPromptData;
}
export interface UpdateAssistantAIAgentRequest {
  assistantId: string;
  aiAgentType: string;
  configuration: AIAgentConfigurationData;
}
export interface UpdateAssistantAIAgentResponse {
  assistant?: AssistantData;
}
export interface UpdateContentRequest {
  knowledgeBaseId: string;
  contentId: string;
  revisionId?: string;
  title?: string;
  overrideLinkOutUri?: string;
  removeOverrideLinkOutUri?: boolean;
  metadata?: Record<string, string>;
  uploadId?: string;
}
export interface UpdateContentResponse {
  content?: ContentData;
}
export interface UpdateKnowledgeBaseTemplateUriRequest {
  knowledgeBaseId: string;
  templateUri: string;
}
export interface UpdateKnowledgeBaseTemplateUriResponse {
  knowledgeBase?: KnowledgeBaseData;
}
export interface UpdateMessageTemplateMetadataRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  name?: string;
  description?: string;
  groupingConfiguration?: GroupingConfiguration;
}
export interface UpdateMessageTemplateMetadataResponse {
  messageTemplate?: MessageTemplateData;
}
export interface UpdateMessageTemplateRequest {
  knowledgeBaseId: string;
  messageTemplateId: string;
  content?: MessageTemplateContentProvider;
  language?: string;
  defaultAttributes?: MessageTemplateAttributes;
}
export interface UpdateMessageTemplateResponse {
  messageTemplate?: MessageTemplateData;
}
export interface UpdateQuickResponseRequest {
  knowledgeBaseId: string;
  quickResponseId: string;
  name?: string;
  content?: QuickResponseDataProvider;
  contentType?: string;
  groupingConfiguration?: GroupingConfiguration;
  removeGroupingConfiguration?: boolean;
  description?: string;
  removeDescription?: boolean;
  shortcutKey?: string;
  removeShortcutKey?: boolean;
  isActive?: boolean;
  channels?: Array<string>;
  language?: string;
}
export interface UpdateQuickResponseResponse {
  quickResponse?: QuickResponseData;
}
export interface UpdateSessionDataRequest {
  assistantId: string;
  sessionId: string;
  namespace?: string;
  data: Array<RuntimeSessionData>;
}
export interface UpdateSessionDataResponse {
  sessionArn: string;
  sessionId: string;
  namespace: string;
  data: Array<RuntimeSessionData>;
}
export interface UpdateSessionRequest {
  assistantId: string;
  sessionId: string;
  description?: string;
  tagFilter?: TagFilter;
  aiAgentConfiguration?: Record<string, AIAgentConfigurationData>;
}
export interface UpdateSessionResponse {
  session?: SessionData;
}
export type UploadId = string;

export type Uri = string;

export type Url = string;

export interface UrlConfiguration {
  seedUrls?: Array<SeedUrl>;
}
export type UrlFilterList = Array<string>;
export type UrlFilterPattern = string;

export type Uuid = string;

export type UuidOrArn = string;

export type UuidOrArnOrEitherWithQualifier = string;

export type UuidWithQualifier = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export interface VectorIngestionConfiguration {
  chunkingConfiguration?: ChunkingConfiguration;
  parsingConfiguration?: ParsingConfiguration;
}
export type Version = number;

export type VisibilityStatus = string;

export type WaitTimeSeconds = number;

export interface WebCrawlerConfiguration {
  urlConfiguration: UrlConfiguration;
  crawlerLimits?: WebCrawlerLimits;
  inclusionFilters?: Array<string>;
  exclusionFilters?: Array<string>;
  scope?: string;
}
export interface WebCrawlerLimits {
  rateLimit?: number;
}
export type WebScopeType = string;

export type WebUrl = string;

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

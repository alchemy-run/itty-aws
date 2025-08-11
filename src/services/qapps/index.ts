import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class QApps extends AWSServiceClient {
  associateLibraryItemReview(
    input: AssociateLibraryItemReviewInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  associateQAppWithUser(
    input: AssociateQAppWithUserInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  batchCreateCategory(
    input: BatchCreateCategoryInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  batchDeleteCategory(
    input: BatchDeleteCategoryInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  batchUpdateCategory(
    input: BatchUpdateCategoryInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  createLibraryItem(
    input: CreateLibraryItemInput,
  ): Effect.Effect<
    CreateLibraryItemOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  createPresignedUrl(
    input: CreatePresignedUrlInput,
  ): Effect.Effect<
    CreatePresignedUrlOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  createQApp(
    input: CreateQAppInput,
  ): Effect.Effect<
    CreateQAppOutput,
    | AccessDeniedException
    | ConflictException
    | ContentTooLargeException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  deleteLibraryItem(
    input: DeleteLibraryItemInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  deleteQApp(
    input: DeleteQAppInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  describeQAppPermissions(
    input: DescribeQAppPermissionsInput,
  ): Effect.Effect<
    DescribeQAppPermissionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  disassociateLibraryItemReview(
    input: DisassociateLibraryItemReviewInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  disassociateQAppFromUser(
    input: DisassociateQAppFromUserInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  exportQAppSessionData(
    input: ExportQAppSessionDataInput,
  ): Effect.Effect<
    ExportQAppSessionDataOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getLibraryItem(
    input: GetLibraryItemInput,
  ): Effect.Effect<
    GetLibraryItemOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getQApp(
    input: GetQAppInput,
  ): Effect.Effect<
    GetQAppOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getQAppSession(
    input: GetQAppSessionInput,
  ): Effect.Effect<
    GetQAppSessionOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getQAppSessionMetadata(
    input: GetQAppSessionMetadataInput,
  ): Effect.Effect<
    GetQAppSessionMetadataOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  importDocument(
    input: ImportDocumentInput,
  ): Effect.Effect<
    ImportDocumentOutput,
    | AccessDeniedException
    | ContentTooLargeException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listCategories(
    input: ListCategoriesInput,
  ): Effect.Effect<
    ListCategoriesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listLibraryItems(
    input: ListLibraryItemsInput,
  ): Effect.Effect<
    ListLibraryItemsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listQApps(
    input: ListQAppsInput,
  ): Effect.Effect<
    ListQAppsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listQAppSessionData(
    input: ListQAppSessionDataInput,
  ): Effect.Effect<
    ListQAppSessionDataOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
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
  predictQApp(
    input: PredictQAppInput,
  ): Effect.Effect<
    PredictQAppOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  startQAppSession(
    input: StartQAppSessionInput,
  ): Effect.Effect<
    StartQAppSessionOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  stopQAppSession(
    input: StopQAppSessionInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
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
  updateLibraryItem(
    input: UpdateLibraryItemInput,
  ): Effect.Effect<
    UpdateLibraryItemOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  updateLibraryItemMetadata(
    input: UpdateLibraryItemMetadataInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  updateQApp(
    input: UpdateQAppInput,
  ): Effect.Effect<
    UpdateQAppOutput,
    | AccessDeniedException
    | ContentTooLargeException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  updateQAppPermissions(
    input: UpdateQAppPermissionsInput,
  ): Effect.Effect<
    UpdateQAppPermissionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  updateQAppSession(
    input: UpdateQAppSessionInput,
  ): Effect.Effect<
    UpdateQAppSessionOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  updateQAppSessionMetadata(
    input: UpdateQAppSessionMetadataInput,
  ): Effect.Effect<
    UpdateQAppSessionMetadataOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Qapps extends QApps {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type Action = "READ" | "WRITE";
export type ActionIdentifier = string;

export type AmazonResourceName = string;

export type AppArn = string;

export interface AppDefinition {
  appDefinitionVersion: string;
  cards: Array<Card>;
  canEdit?: boolean;
}
export interface AppDefinitionInput {
  cards: Array<CardInput>;
  initialPrompt?: string;
}
export type AppRequiredCapabilities = Array<AppRequiredCapability>;
export type AppRequiredCapability =
  | "FILE_UPLOAD"
  | "CREATOR_MODE"
  | "RETRIEVAL_MODE"
  | "PLUGIN_MODE";
export type AppStatus = "PUBLISHED" | "DRAFT" | "DELETED";
export type AppVersion = number;

export interface AssociateLibraryItemReviewInput {
  instanceId: string;
  libraryItemId: string;
}
export interface AssociateQAppWithUserInput {
  instanceId: string;
  appId: string;
}
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
export interface BatchCreateCategoryInput {
  instanceId: string;
  categories: Array<BatchCreateCategoryInputCategory>;
}
export interface BatchCreateCategoryInputCategory {
  id?: string;
  title: string;
  color?: string;
}
export type BatchCreateCategoryInputCategoryList =
  Array<BatchCreateCategoryInputCategory>;
export interface BatchDeleteCategoryInput {
  instanceId: string;
  categories: Array<string>;
}
export interface BatchUpdateCategoryInput {
  instanceId: string;
  categories: Array<CategoryInput>;
}
interface _Card {
  textInput?: TextInputCard;
  qQuery?: QQueryCard;
  qPlugin?: QPluginCard;
  fileUpload?: FileUploadCard;
  formInput?: FormInputCard;
}

export type Card =
  | (_Card & { textInput: TextInputCard })
  | (_Card & { qQuery: QQueryCard })
  | (_Card & { qPlugin: QPluginCard })
  | (_Card & { fileUpload: FileUploadCard })
  | (_Card & { formInput: FormInputCard });
interface _CardInput {
  textInput?: TextInputCardInput;
  qQuery?: QQueryCardInput;
  qPlugin?: QPluginCardInput;
  fileUpload?: FileUploadCardInput;
  formInput?: FormInputCardInput;
}

export type CardInput =
  | (_CardInput & { textInput: TextInputCardInput })
  | (_CardInput & { qQuery: QQueryCardInput })
  | (_CardInput & { qPlugin: QPluginCardInput })
  | (_CardInput & { fileUpload: FileUploadCardInput })
  | (_CardInput & { formInput: FormInputCardInput });
export type CardList = Array<CardInput>;
export type CardModelList = Array<Card>;
export type CardOutputSource = "APPROVED_SOURCES" | "LLM";
export interface CardStatus {
  currentState: ExecutionStatus;
  currentValue: string;
  submissions?: Array<Submission>;
}
export type CardStatusMap = Record<string, CardStatus>;
export type CardType =
  | "TEXT_INPUT"
  | "Q_QUERY"
  | "FILE_UPLOAD"
  | "Q_PLUGIN"
  | "FORM_INPUT";
export interface CardValue {
  cardId: string;
  value: string;
  submissionMutation?: SubmissionMutation;
}
export type CardValueList = Array<CardValue>;
export type CategoriesList = Array<Category>;
export interface Category {
  id: string;
  title: string;
  color?: string;
  appCount?: number;
}
export type CategoryIdList = Array<string>;
export interface CategoryInput {
  id: string;
  title: string;
  color?: string;
}
export type CategoryList = Array<Category>;
export type CategoryListInput = Array<CategoryInput>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export declare class ContentTooLargeException extends EffectData.TaggedError(
  "ContentTooLargeException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface ConversationMessage {
  body: string;
  type: Sender;
}
export interface CreateLibraryItemInput {
  instanceId: string;
  appId: string;
  appVersion: number;
  categories: Array<string>;
}
export interface CreateLibraryItemOutput {
  libraryItemId: string;
  status: string;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  ratingCount: number;
  isVerified?: boolean;
}
export interface CreatePresignedUrlInput {
  instanceId: string;
  cardId: string;
  appId: string;
  fileContentsSha256: string;
  fileName: string;
  scope: DocumentScope;
  sessionId?: string;
}
export interface CreatePresignedUrlOutput {
  fileId: string;
  presignedUrl: string;
  presignedUrlFields: Record<string, string>;
  presignedUrlExpiration: Date | string;
}
export interface CreateQAppInput {
  instanceId: string;
  title: string;
  description?: string;
  appDefinition: AppDefinitionInput;
  tags?: Record<string, string>;
}
export interface CreateQAppOutput {
  appId: string;
  appArn: string;
  title: string;
  description?: string;
  initialPrompt?: string;
  appVersion: number;
  status: AppStatus;
  createdAt: Date | string;
  createdBy: string;
  updatedAt: Date | string;
  updatedBy: string;
  requiredCapabilities?: Array<AppRequiredCapability>;
}
export type Default = string;

export type DeleteCategoryInputList = Array<string>;
export interface DeleteLibraryItemInput {
  instanceId: string;
  libraryItemId: string;
}
export interface DeleteQAppInput {
  instanceId: string;
  appId: string;
}
export type DependencyList = Array<string>;
export interface DescribeQAppPermissionsInput {
  instanceId: string;
  appId: string;
}
export interface DescribeQAppPermissionsOutput {
  resourceArn?: string;
  appId?: string;
  permissions?: Array<PermissionOutput>;
}
export type Description = string;

export interface DisassociateLibraryItemReviewInput {
  instanceId: string;
  libraryItemId: string;
}
export interface DisassociateQAppFromUserInput {
  instanceId: string;
  appId: string;
}
export interface DocumentAttribute {
  name: string;
  value: DocumentAttributeValue;
}
export type DocumentAttributeKey = string;

export type DocumentAttributeStringListValue = Array<string>;
export type DocumentAttributeStringValue = string;

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
export type DocumentScope = "APPLICATION" | "SESSION";
export type ExecutionStatus = "IN_PROGRESS" | "WAITING" | "COMPLETED" | "ERROR";
export interface ExportQAppSessionDataInput {
  instanceId: string;
  sessionId: string;
}
export interface ExportQAppSessionDataOutput {
  csvFileLink: string;
  expiresAt: Date | string;
  sessionArn: string;
}
export type Filename = string;

export interface FileUploadCard {
  id: string;
  title: string;
  dependencies: Array<string>;
  type: CardType;
  filename?: string;
  fileId?: string;
  allowOverride?: boolean;
}
export interface FileUploadCardInput {
  title: string;
  id: string;
  type: CardType;
  filename?: string;
  fileId?: string;
  allowOverride?: boolean;
}
export interface FormInputCard {
  id: string;
  title: string;
  dependencies: Array<string>;
  type: CardType;
  metadata: FormInputCardMetadata;
  computeMode?: InputCardComputeMode;
}
export interface FormInputCardInput {
  title: string;
  id: string;
  type: CardType;
  metadata: FormInputCardMetadata;
  computeMode?: InputCardComputeMode;
}
export interface FormInputCardMetadata {
  schema: unknown;
}
export type FormInputCardMetadataSchema = unknown;

export interface GetLibraryItemInput {
  instanceId: string;
  libraryItemId: string;
  appId?: string;
}
export interface GetLibraryItemOutput {
  libraryItemId: string;
  appId: string;
  appVersion: number;
  categories: Array<Category>;
  status: string;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  ratingCount: number;
  isRatedByUser?: boolean;
  userCount?: number;
  isVerified?: boolean;
}
export interface GetQAppInput {
  instanceId: string;
  appId: string;
  appVersion?: number;
}
export interface GetQAppOutput {
  appId: string;
  appArn: string;
  title: string;
  description?: string;
  initialPrompt?: string;
  appVersion: number;
  status: AppStatus;
  createdAt: Date | string;
  createdBy: string;
  updatedAt: Date | string;
  updatedBy: string;
  requiredCapabilities?: Array<AppRequiredCapability>;
  appDefinition: AppDefinition;
}
export interface GetQAppSessionInput {
  instanceId: string;
  sessionId: string;
}
export interface GetQAppSessionMetadataInput {
  instanceId: string;
  sessionId: string;
}
export interface GetQAppSessionMetadataOutput {
  sessionId: string;
  sessionArn: string;
  sessionName?: string;
  sharingConfiguration: SessionSharingConfiguration;
  sessionOwner?: boolean;
}
export interface GetQAppSessionOutput {
  sessionId: string;
  sessionArn: string;
  sessionName?: string;
  appVersion?: number;
  latestPublishedAppVersion?: number;
  status: ExecutionStatus;
  cardStatus: Record<string, CardStatus>;
  userIsHost?: boolean;
}
export interface ImportDocumentInput {
  instanceId: string;
  cardId: string;
  appId: string;
  fileContentsBase64: string;
  fileName: string;
  scope: DocumentScope;
  sessionId?: string;
}
export interface ImportDocumentOutput {
  fileId?: string;
}
export type InitialPrompt = string;

export type InputCardComputeMode = "APPEND" | "REPLACE";
export type InstanceId = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type LibraryItemList = Array<LibraryItemMember>;
export interface LibraryItemMember {
  libraryItemId: string;
  appId: string;
  appVersion: number;
  categories: Array<Category>;
  status: string;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  ratingCount: number;
  isRatedByUser?: boolean;
  userCount?: number;
  isVerified?: boolean;
}
export type LibraryItemStatus = "PUBLISHED" | "DISABLED";
export interface ListCategoriesInput {
  instanceId: string;
}
export interface ListCategoriesOutput {
  categories?: Array<Category>;
}
export interface ListLibraryItemsInput {
  instanceId: string;
  limit?: number;
  nextToken?: string;
  categoryId?: string;
}
export interface ListLibraryItemsOutput {
  libraryItems?: Array<LibraryItemMember>;
  nextToken?: string;
}
export interface ListQAppSessionDataInput {
  instanceId: string;
  sessionId: string;
}
export interface ListQAppSessionDataOutput {
  sessionId: string;
  sessionArn: string;
  sessionData?: Array<QAppSessionData>;
  nextToken?: string;
}
export interface ListQAppsInput {
  instanceId: string;
  limit?: number;
  nextToken?: string;
}
export interface ListQAppsOutput {
  apps: Array<UserAppItem>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceARN: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type Long = number;

export type MemoryReferenceList = Array<string>;
export type MessageList = Array<ConversationMessage>;
export type PageLimit = number;

export type PaginationToken = string;

export interface PermissionInput {
  action: Action;
  principal: string;
}
export interface PermissionOutput {
  action: Action;
  principal: PrincipalOutput;
}
export type PermissionsInputList = Array<PermissionInput>;
export type PermissionsOutputList = Array<PermissionOutput>;
export type Placeholder = string;

export type PlatoString = string;

export type PluginId = string;

export type PluginType =
  | "SERVICE_NOW"
  | "SALESFORCE"
  | "JIRA"
  | "ZENDESK"
  | "CUSTOM"
  | "ASANA"
  | "ATLASSIAN_CONFLUENCE"
  | "GOOGLE_CALENDAR"
  | "JIRA_CLOUD"
  | "MICROSOFT_EXCHANGE"
  | "MICROSOFT_TEAMS"
  | "PAGERDUTY_ADVANCE"
  | "SALESFORCE_CRM"
  | "SERVICENOW_NOW_PLATFORM"
  | "SMARTSHEET"
  | "ZENDESK_SUITE";
export interface PredictAppDefinition {
  title: string;
  description?: string;
  appDefinition: AppDefinitionInput;
}
export interface PredictQAppInput {
  instanceId: string;
  options?: PredictQAppInputOptions;
}
interface _PredictQAppInputOptions {
  conversation?: Array<ConversationMessage>;
  problemStatement?: string;
}

export type PredictQAppInputOptions =
  | (_PredictQAppInputOptions & { conversation: Array<ConversationMessage> })
  | (_PredictQAppInputOptions & { problemStatement: string });
export interface PredictQAppOutput {
  app: PredictAppDefinition;
  problemStatement: string;
}
export type PresignedUrlFields = Record<string, string>;
export interface PrincipalOutput {
  userId?: string;
  userType?: UserType;
  email?: string;
}
export type Prompt = string;

export interface QAppSessionData {
  cardId: string;
  value?: unknown;
  user: User;
  submissionId?: string;
  timestamp?: Date | string;
}
export type QAppSessionDataList = Array<QAppSessionData>;
export type QAppsTimestamp = Date | string;

export interface QPluginCard {
  id: string;
  title: string;
  dependencies: Array<string>;
  type: CardType;
  prompt: string;
  pluginType: PluginType;
  pluginId: string;
  actionIdentifier?: string;
}
export interface QPluginCardInput {
  title: string;
  id: string;
  type: CardType;
  prompt: string;
  pluginId: string;
  actionIdentifier?: string;
}
export interface QQueryCard {
  id: string;
  title: string;
  dependencies: Array<string>;
  type: CardType;
  prompt: string;
  outputSource: CardOutputSource;
  attributeFilter?: AttributeFilter;
  memoryReferences?: Array<string>;
}
export interface QQueryCardInput {
  title: string;
  id: string;
  type: CardType;
  prompt: string;
  outputSource?: CardOutputSource;
  attributeFilter?: AttributeFilter;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type Sender = "USER" | "SYSTEM";
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export type SessionName = string;

export type SessionSharingAcceptResponses = boolean;

export interface SessionSharingConfiguration {
  enabled: boolean;
  acceptResponses?: boolean;
  revealCards?: boolean;
}
export type SessionSharingEnabled = boolean;

export type SessionSharingRevealCards = boolean;

export interface StartQAppSessionInput {
  instanceId: string;
  appId: string;
  appVersion: number;
  initialValues?: Array<CardValue>;
  sessionId?: string;
  tags?: Record<string, string>;
}
export interface StartQAppSessionOutput {
  sessionId: string;
  sessionArn: string;
}
export interface StopQAppSessionInput {
  instanceId: string;
  sessionId: string;
}
export interface Submission {
  value?: unknown;
  submissionId?: string;
  timestamp?: Date | string;
}
export type SubmissionList = Array<Submission>;
export interface SubmissionMutation {
  submissionId: string;
  mutationType: SubmissionMutationKind;
}
export type SubmissionMutationKind = "edit" | "delete" | "add";
export type TagKey = string;

export type TagKeys = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceARN: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagValue = string;

export interface TextInputCard {
  id: string;
  title: string;
  dependencies: Array<string>;
  type: CardType;
  placeholder?: string;
  defaultValue?: string;
}
export interface TextInputCardInput {
  title: string;
  id: string;
  type: CardType;
  placeholder?: string;
  defaultValue?: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
  readonly retryAfterSeconds?: number;
}> {}
export type Timestamp = Date | string;

export type Title = string;

export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message: string;
}> {}
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateLibraryItemInput {
  instanceId: string;
  libraryItemId: string;
  status?: LibraryItemStatus;
  categories?: Array<string>;
}
export interface UpdateLibraryItemMetadataInput {
  instanceId: string;
  libraryItemId: string;
  isVerified?: boolean;
}
export interface UpdateLibraryItemOutput {
  libraryItemId: string;
  appId: string;
  appVersion: number;
  categories: Array<Category>;
  status: string;
  createdAt: Date | string;
  createdBy: string;
  updatedAt?: Date | string;
  updatedBy?: string;
  ratingCount: number;
  isRatedByUser?: boolean;
  userCount?: number;
  isVerified?: boolean;
}
export interface UpdateQAppInput {
  instanceId: string;
  appId: string;
  title?: string;
  description?: string;
  appDefinition?: AppDefinitionInput;
}
export interface UpdateQAppOutput {
  appId: string;
  appArn: string;
  title: string;
  description?: string;
  initialPrompt?: string;
  appVersion: number;
  status: AppStatus;
  createdAt: Date | string;
  createdBy: string;
  updatedAt: Date | string;
  updatedBy: string;
  requiredCapabilities?: Array<AppRequiredCapability>;
}
export interface UpdateQAppPermissionsInput {
  instanceId: string;
  appId: string;
  grantPermissions?: Array<PermissionInput>;
  revokePermissions?: Array<PermissionInput>;
}
export interface UpdateQAppPermissionsOutput {
  resourceArn?: string;
  appId?: string;
  permissions?: Array<PermissionOutput>;
}
export interface UpdateQAppSessionInput {
  instanceId: string;
  sessionId: string;
  values?: Array<CardValue>;
}
export interface UpdateQAppSessionMetadataInput {
  instanceId: string;
  sessionId: string;
  sessionName?: string;
  sharingConfiguration: SessionSharingConfiguration;
}
export interface UpdateQAppSessionMetadataOutput {
  sessionId: string;
  sessionArn: string;
  sessionName?: string;
  sharingConfiguration: SessionSharingConfiguration;
}
export interface UpdateQAppSessionOutput {
  sessionId: string;
  sessionArn: string;
}
export interface User {
  userId?: string;
}
export interface UserAppItem {
  appId: string;
  appArn: string;
  title: string;
  description?: string;
  createdAt: Date | string;
  canEdit?: boolean;
  status?: string;
  isVerified?: boolean;
}
export type UserAppsList = Array<UserAppItem>;
export type UserId = string;

export type UserType = "OWNER" | "USER";
export type UUID = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export declare namespace AssociateLibraryItemReview {
  export type Input = AssociateLibraryItemReviewInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateQAppWithUser {
  export type Input = AssociateQAppWithUserInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchCreateCategory {
  export type Input = BatchCreateCategoryInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchDeleteCategory {
  export type Input = BatchDeleteCategoryInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchUpdateCategory {
  export type Input = BatchUpdateCategoryInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLibraryItem {
  export type Input = CreateLibraryItemInput;
  export type Output = CreateLibraryItemOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePresignedUrl {
  export type Input = CreatePresignedUrlInput;
  export type Output = CreatePresignedUrlOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateQApp {
  export type Input = CreateQAppInput;
  export type Output = CreateQAppOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ContentTooLargeException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLibraryItem {
  export type Input = DeleteLibraryItemInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteQApp {
  export type Input = DeleteQAppInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeQAppPermissions {
  export type Input = DescribeQAppPermissionsInput;
  export type Output = DescribeQAppPermissionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateLibraryItemReview {
  export type Input = DisassociateLibraryItemReviewInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateQAppFromUser {
  export type Input = DisassociateQAppFromUserInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ExportQAppSessionData {
  export type Input = ExportQAppSessionDataInput;
  export type Output = ExportQAppSessionDataOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLibraryItem {
  export type Input = GetLibraryItemInput;
  export type Output = GetLibraryItemOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQApp {
  export type Input = GetQAppInput;
  export type Output = GetQAppOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQAppSession {
  export type Input = GetQAppSessionInput;
  export type Output = GetQAppSessionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQAppSessionMetadata {
  export type Input = GetQAppSessionMetadataInput;
  export type Output = GetQAppSessionMetadataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ImportDocument {
  export type Input = ImportDocumentInput;
  export type Output = ImportDocumentOutput;
  export type Error =
    | AccessDeniedException
    | ContentTooLargeException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCategories {
  export type Input = ListCategoriesInput;
  export type Output = ListCategoriesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLibraryItems {
  export type Input = ListLibraryItemsInput;
  export type Output = ListLibraryItemsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListQApps {
  export type Input = ListQAppsInput;
  export type Output = ListQAppsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListQAppSessionData {
  export type Input = ListQAppSessionDataInput;
  export type Output = ListQAppSessionDataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
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

export declare namespace PredictQApp {
  export type Input = PredictQAppInput;
  export type Output = PredictQAppOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartQAppSession {
  export type Input = StartQAppSessionInput;
  export type Output = StartQAppSessionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopQAppSession {
  export type Input = StopQAppSessionInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
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

export declare namespace UpdateLibraryItem {
  export type Input = UpdateLibraryItemInput;
  export type Output = UpdateLibraryItemOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLibraryItemMetadata {
  export type Input = UpdateLibraryItemMetadataInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateQApp {
  export type Input = UpdateQAppInput;
  export type Output = UpdateQAppOutput;
  export type Error =
    | AccessDeniedException
    | ContentTooLargeException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateQAppPermissions {
  export type Input = UpdateQAppPermissionsInput;
  export type Output = UpdateQAppPermissionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateQAppSession {
  export type Input = UpdateQAppSessionInput;
  export type Output = UpdateQAppSessionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateQAppSessionMetadata {
  export type Input = UpdateQAppSessionMetadataInput;
  export type Output = UpdateQAppSessionMetadataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

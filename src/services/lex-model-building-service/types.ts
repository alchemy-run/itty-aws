import type { Effect, Stream, Data as EffectData } from "effect";
import type { ResponseError } from "@effect/platform/HttpClientError";
import type { Buffer } from "node:buffer";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | ThrottlingException | UnrecognizedClientException | UnknownOperationException | ValidationError | ValidationException | AccessDeniedException;
import { AWSServiceClient } from "../../client.ts";

export declare class LexModelBuildingService extends AWSServiceClient {
  createBotVersion(
    input: CreateBotVersionRequest,
  ): Effect.Effect<
    CreateBotVersionResponse,
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | PreconditionFailedException | CommonAwsError
  >;
  createIntentVersion(
    input: CreateIntentVersionRequest,
  ): Effect.Effect<
    CreateIntentVersionResponse,
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | PreconditionFailedException | CommonAwsError
  >;
  createSlotTypeVersion(
    input: CreateSlotTypeVersionRequest,
  ): Effect.Effect<
    CreateSlotTypeVersionResponse,
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | PreconditionFailedException | CommonAwsError
  >;
  deleteBot(
    input: DeleteBotRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | ResourceInUseException | CommonAwsError
  >;
  deleteBotAlias(
    input: DeleteBotAliasRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | ResourceInUseException | CommonAwsError
  >;
  deleteBotChannelAssociation(
    input: DeleteBotChannelAssociationRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  deleteBotVersion(
    input: DeleteBotVersionRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | ResourceInUseException | CommonAwsError
  >;
  deleteIntent(
    input: DeleteIntentRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | ResourceInUseException | CommonAwsError
  >;
  deleteIntentVersion(
    input: DeleteIntentVersionRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | ResourceInUseException | CommonAwsError
  >;
  deleteSlotType(
    input: DeleteSlotTypeRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | ResourceInUseException | CommonAwsError
  >;
  deleteSlotTypeVersion(
    input: DeleteSlotTypeVersionRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | ResourceInUseException | CommonAwsError
  >;
  deleteUtterances(
    input: DeleteUtterancesRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getBot(
    input: GetBotRequest,
  ): Effect.Effect<
    GetBotResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getBotAlias(
    input: GetBotAliasRequest,
  ): Effect.Effect<
    GetBotAliasResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getBotAliases(
    input: GetBotAliasesRequest,
  ): Effect.Effect<
    GetBotAliasesResponse,
    BadRequestException | InternalFailureException | LimitExceededException | CommonAwsError
  >;
  getBotChannelAssociation(
    input: GetBotChannelAssociationRequest,
  ): Effect.Effect<
    GetBotChannelAssociationResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getBotChannelAssociations(
    input: GetBotChannelAssociationsRequest,
  ): Effect.Effect<
    GetBotChannelAssociationsResponse,
    BadRequestException | InternalFailureException | LimitExceededException | CommonAwsError
  >;
  getBots(
    input: GetBotsRequest,
  ): Effect.Effect<
    GetBotsResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getBotVersions(
    input: GetBotVersionsRequest,
  ): Effect.Effect<
    GetBotVersionsResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getBuiltinIntent(
    input: GetBuiltinIntentRequest,
  ): Effect.Effect<
    GetBuiltinIntentResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getBuiltinIntents(
    input: GetBuiltinIntentsRequest,
  ): Effect.Effect<
    GetBuiltinIntentsResponse,
    BadRequestException | InternalFailureException | LimitExceededException | CommonAwsError
  >;
  getBuiltinSlotTypes(
    input: GetBuiltinSlotTypesRequest,
  ): Effect.Effect<
    GetBuiltinSlotTypesResponse,
    BadRequestException | InternalFailureException | LimitExceededException | CommonAwsError
  >;
  getExport(
    input: GetExportRequest,
  ): Effect.Effect<
    GetExportResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getImport(
    input: GetImportRequest,
  ): Effect.Effect<
    GetImportResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getIntent(
    input: GetIntentRequest,
  ): Effect.Effect<
    GetIntentResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getIntents(
    input: GetIntentsRequest,
  ): Effect.Effect<
    GetIntentsResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getIntentVersions(
    input: GetIntentVersionsRequest,
  ): Effect.Effect<
    GetIntentVersionsResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getMigration(
    input: GetMigrationRequest,
  ): Effect.Effect<
    GetMigrationResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getMigrations(
    input: GetMigrationsRequest,
  ): Effect.Effect<
    GetMigrationsResponse,
    BadRequestException | InternalFailureException | LimitExceededException | CommonAwsError
  >;
  getSlotType(
    input: GetSlotTypeRequest,
  ): Effect.Effect<
    GetSlotTypeResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getSlotTypes(
    input: GetSlotTypesRequest,
  ): Effect.Effect<
    GetSlotTypesResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getSlotTypeVersions(
    input: GetSlotTypeVersionsRequest,
  ): Effect.Effect<
    GetSlotTypeVersionsResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  getUtterancesView(
    input: GetUtterancesViewRequest,
  ): Effect.Effect<
    GetUtterancesViewResponse,
    BadRequestException | InternalFailureException | LimitExceededException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  putBot(
    input: PutBotRequest,
  ): Effect.Effect<
    PutBotResponse,
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | PreconditionFailedException | CommonAwsError
  >;
  putBotAlias(
    input: PutBotAliasRequest,
  ): Effect.Effect<
    PutBotAliasResponse,
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | PreconditionFailedException | CommonAwsError
  >;
  putIntent(
    input: PutIntentRequest,
  ): Effect.Effect<
    PutIntentResponse,
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | PreconditionFailedException | CommonAwsError
  >;
  putSlotType(
    input: PutSlotTypeRequest,
  ): Effect.Effect<
    PutSlotTypeResponse,
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | PreconditionFailedException | CommonAwsError
  >;
  startImport(
    input: StartImportRequest,
  ): Effect.Effect<
    StartImportResponse,
    BadRequestException | InternalFailureException | LimitExceededException | CommonAwsError
  >;
  startMigration(
    input: StartMigrationRequest,
  ): Effect.Effect<
    StartMigrationResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AliasName = string;

export type AliasNameOrListAll = string;

export type AmazonResourceName = string;

export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export type Blob = Uint8Array | string;

export type LexModelBuildingServiceBoolean = boolean;

export interface BotAliasMetadata {
  name?: string;
  description?: string;
  botVersion?: string;
  botName?: string;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  checksum?: string;
  conversationLogs?: ConversationLogsResponse;
}
export type BotAliasMetadataList = Array<BotAliasMetadata>;
export interface BotChannelAssociation {
  name?: string;
  description?: string;
  botAlias?: string;
  botName?: string;
  createdDate?: Date | string;
  type?: ChannelType;
  botConfiguration?: Record<string, string>;
  status?: ChannelStatus;
  failureReason?: string;
}
export type BotChannelAssociationList = Array<BotChannelAssociation>;
export type BotChannelName = string;

export interface BotMetadata {
  name?: string;
  description?: string;
  status?: Status;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  version?: string;
}
export type BotMetadataList = Array<BotMetadata>;
export type BotName = string;

export type BotVersions = Array<string>;
export interface BuiltinIntentMetadata {
  signature?: string;
  supportedLocales?: Array<Locale>;
}
export type BuiltinIntentMetadataList = Array<BuiltinIntentMetadata>;
export type BuiltinIntentSignature = string;

export interface BuiltinIntentSlot {
  name?: string;
}
export type BuiltinIntentSlotList = Array<BuiltinIntentSlot>;
export interface BuiltinSlotTypeMetadata {
  signature?: string;
  supportedLocales?: Array<Locale>;
}
export type BuiltinSlotTypeMetadataList = Array<BuiltinSlotTypeMetadata>;
export type BuiltinSlotTypeSignature = string;

export type ChannelConfigurationMap = Record<string, string>;
export type ChannelStatus = "IN_PROGRESS" | "CREATED" | "FAILED";
export type ChannelType = "Facebook" | "Slack" | "Twilio-Sms" | "Kik";
export interface CodeHook {
  uri: string;
  messageVersion: string;
}
export type ConfidenceThreshold = number;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ContentString = string;

export type ContentType = "PlainText" | "SSML" | "CustomPayload";
export type ContextTimeToLiveInSeconds = number;

export type ContextTurnsToLive = number;

export interface ConversationLogsRequest {
  logSettings: Array<LogSettingsRequest>;
  iamRoleArn: string;
}
export interface ConversationLogsResponse {
  logSettings?: Array<LogSettingsResponse>;
  iamRoleArn?: string;
}
export type Count = number;

export interface CreateBotVersionRequest {
  name: string;
  checksum?: string;
}
export interface CreateBotVersionResponse {
  name?: string;
  description?: string;
  intents?: Array<Intent>;
  clarificationPrompt?: Prompt;
  abortStatement?: Statement;
  status?: Status;
  failureReason?: string;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  idleSessionTTLInSeconds?: number;
  voiceId?: string;
  checksum?: string;
  version?: string;
  locale?: Locale;
  childDirected?: boolean;
  enableModelImprovements?: boolean;
  detectSentiment?: boolean;
}
export interface CreateIntentVersionRequest {
  name: string;
  checksum?: string;
}
export interface CreateIntentVersionResponse {
  name?: string;
  description?: string;
  slots?: Array<Slot>;
  sampleUtterances?: Array<string>;
  confirmationPrompt?: Prompt;
  rejectionStatement?: Statement;
  followUpPrompt?: FollowUpPrompt;
  conclusionStatement?: Statement;
  dialogCodeHook?: CodeHook;
  fulfillmentActivity?: FulfillmentActivity;
  parentIntentSignature?: string;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  version?: string;
  checksum?: string;
  kendraConfiguration?: KendraConfiguration;
  inputContexts?: Array<InputContext>;
  outputContexts?: Array<OutputContext>;
}
export interface CreateSlotTypeVersionRequest {
  name: string;
  checksum?: string;
}
export interface CreateSlotTypeVersionResponse {
  name?: string;
  description?: string;
  enumerationValues?: Array<EnumerationValue>;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  version?: string;
  checksum?: string;
  valueSelectionStrategy?: SlotValueSelectionStrategy;
  parentSlotTypeSignature?: string;
  slotTypeConfigurations?: Array<SlotTypeConfiguration>;
}
export type CustomOrBuiltinSlotTypeName = string;

export interface DeleteBotAliasRequest {
  name: string;
  botName: string;
}
export interface DeleteBotChannelAssociationRequest {
  name: string;
  botName: string;
  botAlias: string;
}
export interface DeleteBotRequest {
  name: string;
}
export interface DeleteBotVersionRequest {
  name: string;
  version: string;
}
export interface DeleteIntentRequest {
  name: string;
}
export interface DeleteIntentVersionRequest {
  name: string;
  version: string;
}
export interface DeleteSlotTypeRequest {
  name: string;
}
export interface DeleteSlotTypeVersionRequest {
  name: string;
  version: string;
}
export interface DeleteUtterancesRequest {
  botName: string;
  userId: string;
}
export type Description = string;

export type Destination = "CLOUDWATCH_LOGS" | "S3";
export interface EnumerationValue {
  value: string;
  synonyms?: Array<string>;
}
export type EnumerationValues = Array<EnumerationValue>;
export type ExportStatus = "IN_PROGRESS" | "READY" | "FAILED";
export type ExportType = "ALEXA_SKILLS_KIT" | "LEX";
export interface FollowUpPrompt {
  prompt: Prompt;
  rejectionStatement: Statement;
}
export interface FulfillmentActivity {
  type: FulfillmentActivityType;
  codeHook?: CodeHook;
}
export type FulfillmentActivityType = "ReturnIntent" | "CodeHook";
export interface GetBotAliasesRequest {
  botName: string;
  nextToken?: string;
  maxResults?: number;
  nameContains?: string;
}
export interface GetBotAliasesResponse {
  BotAliases?: Array<BotAliasMetadata>;
  nextToken?: string;
}
export interface GetBotAliasRequest {
  name: string;
  botName: string;
}
export interface GetBotAliasResponse {
  name?: string;
  description?: string;
  botVersion?: string;
  botName?: string;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  checksum?: string;
  conversationLogs?: ConversationLogsResponse;
}
export interface GetBotChannelAssociationRequest {
  name: string;
  botName: string;
  botAlias: string;
}
export interface GetBotChannelAssociationResponse {
  name?: string;
  description?: string;
  botAlias?: string;
  botName?: string;
  createdDate?: Date | string;
  type?: ChannelType;
  botConfiguration?: Record<string, string>;
  status?: ChannelStatus;
  failureReason?: string;
}
export interface GetBotChannelAssociationsRequest {
  botName: string;
  botAlias: string;
  nextToken?: string;
  maxResults?: number;
  nameContains?: string;
}
export interface GetBotChannelAssociationsResponse {
  botChannelAssociations?: Array<BotChannelAssociation>;
  nextToken?: string;
}
export interface GetBotRequest {
  name: string;
  versionOrAlias: string;
}
export interface GetBotResponse {
  name?: string;
  description?: string;
  intents?: Array<Intent>;
  enableModelImprovements?: boolean;
  nluIntentConfidenceThreshold?: number;
  clarificationPrompt?: Prompt;
  abortStatement?: Statement;
  status?: Status;
  failureReason?: string;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  idleSessionTTLInSeconds?: number;
  voiceId?: string;
  checksum?: string;
  version?: string;
  locale?: Locale;
  childDirected?: boolean;
  detectSentiment?: boolean;
}
export interface GetBotsRequest {
  nextToken?: string;
  maxResults?: number;
  nameContains?: string;
}
export interface GetBotsResponse {
  bots?: Array<BotMetadata>;
  nextToken?: string;
}
export interface GetBotVersionsRequest {
  name: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetBotVersionsResponse {
  bots?: Array<BotMetadata>;
  nextToken?: string;
}
export interface GetBuiltinIntentRequest {
  signature: string;
}
export interface GetBuiltinIntentResponse {
  signature?: string;
  supportedLocales?: Array<Locale>;
  slots?: Array<BuiltinIntentSlot>;
}
export interface GetBuiltinIntentsRequest {
  locale?: Locale;
  signatureContains?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetBuiltinIntentsResponse {
  intents?: Array<BuiltinIntentMetadata>;
  nextToken?: string;
}
export interface GetBuiltinSlotTypesRequest {
  locale?: Locale;
  signatureContains?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetBuiltinSlotTypesResponse {
  slotTypes?: Array<BuiltinSlotTypeMetadata>;
  nextToken?: string;
}
export interface GetExportRequest {
  name: string;
  version: string;
  resourceType: ResourceType;
  exportType: ExportType;
}
export interface GetExportResponse {
  name?: string;
  version?: string;
  resourceType?: ResourceType;
  exportType?: ExportType;
  exportStatus?: ExportStatus;
  failureReason?: string;
  url?: string;
}
export interface GetImportRequest {
  importId: string;
}
export interface GetImportResponse {
  name?: string;
  resourceType?: ResourceType;
  mergeStrategy?: MergeStrategy;
  importId?: string;
  importStatus?: ImportStatus;
  failureReason?: Array<string>;
  createdDate?: Date | string;
}
export interface GetIntentRequest {
  name: string;
  version: string;
}
export interface GetIntentResponse {
  name?: string;
  description?: string;
  slots?: Array<Slot>;
  sampleUtterances?: Array<string>;
  confirmationPrompt?: Prompt;
  rejectionStatement?: Statement;
  followUpPrompt?: FollowUpPrompt;
  conclusionStatement?: Statement;
  dialogCodeHook?: CodeHook;
  fulfillmentActivity?: FulfillmentActivity;
  parentIntentSignature?: string;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  version?: string;
  checksum?: string;
  kendraConfiguration?: KendraConfiguration;
  inputContexts?: Array<InputContext>;
  outputContexts?: Array<OutputContext>;
}
export interface GetIntentsRequest {
  nextToken?: string;
  maxResults?: number;
  nameContains?: string;
}
export interface GetIntentsResponse {
  intents?: Array<IntentMetadata>;
  nextToken?: string;
}
export interface GetIntentVersionsRequest {
  name: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetIntentVersionsResponse {
  intents?: Array<IntentMetadata>;
  nextToken?: string;
}
export interface GetMigrationRequest {
  migrationId: string;
}
export interface GetMigrationResponse {
  migrationId?: string;
  v1BotName?: string;
  v1BotVersion?: string;
  v1BotLocale?: Locale;
  v2BotId?: string;
  v2BotRole?: string;
  migrationStatus?: MigrationStatus;
  migrationStrategy?: MigrationStrategy;
  migrationTimestamp?: Date | string;
  alerts?: Array<MigrationAlert>;
}
export interface GetMigrationsRequest {
  sortByAttribute?: MigrationSortAttribute;
  sortByOrder?: SortOrder;
  v1BotNameContains?: string;
  migrationStatusEquals?: MigrationStatus;
  maxResults?: number;
  nextToken?: string;
}
export interface GetMigrationsResponse {
  migrationSummaries?: Array<MigrationSummary>;
  nextToken?: string;
}
export interface GetSlotTypeRequest {
  name: string;
  version: string;
}
export interface GetSlotTypeResponse {
  name?: string;
  description?: string;
  enumerationValues?: Array<EnumerationValue>;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  version?: string;
  checksum?: string;
  valueSelectionStrategy?: SlotValueSelectionStrategy;
  parentSlotTypeSignature?: string;
  slotTypeConfigurations?: Array<SlotTypeConfiguration>;
}
export interface GetSlotTypesRequest {
  nextToken?: string;
  maxResults?: number;
  nameContains?: string;
}
export interface GetSlotTypesResponse {
  slotTypes?: Array<SlotTypeMetadata>;
  nextToken?: string;
}
export interface GetSlotTypeVersionsRequest {
  name: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetSlotTypeVersionsResponse {
  slotTypes?: Array<SlotTypeMetadata>;
  nextToken?: string;
}
export interface GetUtterancesViewRequest {
  botName: string;
  botVersions: Array<string>;
  statusType: StatusType;
}
export interface GetUtterancesViewResponse {
  botName?: string;
  utterances?: Array<UtteranceList>;
}
export type GroupNumber = number;

export type IamRoleArn = string;

export type ImportStatus = "IN_PROGRESS" | "COMPLETE" | "FAILED";
export interface InputContext {
  name: string;
}
export type InputContextList = Array<InputContext>;
export type InputContextName = string;

export interface Intent {
  intentName: string;
  intentVersion: string;
}
export type IntentList = Array<Intent>;
export interface IntentMetadata {
  name?: string;
  description?: string;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  version?: string;
}
export type IntentMetadataList = Array<IntentMetadata>;
export type IntentName = string;

export type IntentUtteranceList = Array<string>;
export declare class InternalFailureException extends EffectData.TaggedError(
  "InternalFailureException",
)<{
  readonly message?: string;
}> {}
export interface KendraConfiguration {
  kendraIndex: string;
  queryFilterString?: string;
  role: string;
}
export type KendraIndexArn = string;

export type KmsKeyArn = string;

export type LambdaARN = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly retryAfterSeconds?: string;
  readonly message?: string;
}> {}
export type ListOfUtterance = Array<UtteranceData>;
export type ListsOfUtterances = Array<UtteranceList>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export type Locale = "de-DE" | "en-AU" | "en-GB" | "en-IN" | "en-US" | "es-419" | "es-ES" | "es-US" | "fr-FR" | "fr-CA" | "it-IT" | "ja-JP" | "ko-KR";
export type LocaleList = Array<Locale>;
export interface LogSettingsRequest {
  logType: LogType;
  destination: Destination;
  kmsKeyArn?: string;
  resourceArn: string;
}
export type LogSettingsRequestList = Array<LogSettingsRequest>;
export interface LogSettingsResponse {
  logType?: LogType;
  destination?: Destination;
  kmsKeyArn?: string;
  resourceArn?: string;
  resourcePrefix?: string;
}
export type LogSettingsResponseList = Array<LogSettingsResponse>;
export type LogType = "AUDIO" | "TEXT";
export type MaxResults = number;

export type MergeStrategy = "OVERWRITE_LATEST" | "FAIL_ON_CONFLICT";
export interface Message {
  contentType: ContentType;
  content: string;
  groupNumber?: number;
}
export type MessageList = Array<Message>;
export type MessageVersion = string;

export interface MigrationAlert {
  type?: MigrationAlertType;
  message?: string;
  details?: Array<string>;
  referenceURLs?: Array<string>;
}
export type MigrationAlertDetail = string;

export type MigrationAlertDetails = Array<string>;
export type MigrationAlertMessage = string;

export type MigrationAlertReferenceURL = string;

export type MigrationAlertReferenceURLs = Array<string>;
export type MigrationAlerts = Array<MigrationAlert>;
export type MigrationAlertType = "ERROR" | "WARN";
export type MigrationId = string;

export type MigrationSortAttribute = "V1_BOT_NAME" | "MIGRATION_DATE_TIME";
export type MigrationStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED";
export type MigrationStrategy = "CREATE_NEW" | "UPDATE_EXISTING";
export interface MigrationSummary {
  migrationId?: string;
  v1BotName?: string;
  v1BotVersion?: string;
  v1BotLocale?: Locale;
  v2BotId?: string;
  v2BotRole?: string;
  migrationStatus?: MigrationStatus;
  migrationStrategy?: MigrationStrategy;
  migrationTimestamp?: Date | string;
}
export type MigrationSummaryList = Array<MigrationSummary>;
export type Name = string;

export type NextToken = string;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export type NumericalVersion = string;

export type ObfuscationSetting = "NONE" | "DEFAULT_OBFUSCATION";
export interface OutputContext {
  name: string;
  timeToLiveInSeconds: number;
  turnsToLive: number;
}
export type OutputContextList = Array<OutputContext>;
export type OutputContextName = string;

export declare class PreconditionFailedException extends EffectData.TaggedError(
  "PreconditionFailedException",
)<{
  readonly message?: string;
}> {}
export type Priority = number;

export type ProcessBehavior = "SAVE" | "BUILD";
export interface Prompt {
  messages: Array<Message>;
  maxAttempts: number;
  responseCard?: string;
}
export type PromptMaxAttempts = number;

export interface PutBotAliasRequest {
  name: string;
  description?: string;
  botVersion: string;
  botName: string;
  checksum?: string;
  conversationLogs?: ConversationLogsRequest;
  tags?: Array<Tag>;
}
export interface PutBotAliasResponse {
  name?: string;
  description?: string;
  botVersion?: string;
  botName?: string;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  checksum?: string;
  conversationLogs?: ConversationLogsResponse;
  tags?: Array<Tag>;
}
export interface PutBotRequest {
  name: string;
  description?: string;
  intents?: Array<Intent>;
  enableModelImprovements?: boolean;
  nluIntentConfidenceThreshold?: number;
  clarificationPrompt?: Prompt;
  abortStatement?: Statement;
  idleSessionTTLInSeconds?: number;
  voiceId?: string;
  checksum?: string;
  processBehavior?: ProcessBehavior;
  locale: Locale;
  childDirected: boolean;
  detectSentiment?: boolean;
  createVersion?: boolean;
  tags?: Array<Tag>;
}
export interface PutBotResponse {
  name?: string;
  description?: string;
  intents?: Array<Intent>;
  enableModelImprovements?: boolean;
  nluIntentConfidenceThreshold?: number;
  clarificationPrompt?: Prompt;
  abortStatement?: Statement;
  status?: Status;
  failureReason?: string;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  idleSessionTTLInSeconds?: number;
  voiceId?: string;
  checksum?: string;
  version?: string;
  locale?: Locale;
  childDirected?: boolean;
  createVersion?: boolean;
  detectSentiment?: boolean;
  tags?: Array<Tag>;
}
export interface PutIntentRequest {
  name: string;
  description?: string;
  slots?: Array<Slot>;
  sampleUtterances?: Array<string>;
  confirmationPrompt?: Prompt;
  rejectionStatement?: Statement;
  followUpPrompt?: FollowUpPrompt;
  conclusionStatement?: Statement;
  dialogCodeHook?: CodeHook;
  fulfillmentActivity?: FulfillmentActivity;
  parentIntentSignature?: string;
  checksum?: string;
  createVersion?: boolean;
  kendraConfiguration?: KendraConfiguration;
  inputContexts?: Array<InputContext>;
  outputContexts?: Array<OutputContext>;
}
export interface PutIntentResponse {
  name?: string;
  description?: string;
  slots?: Array<Slot>;
  sampleUtterances?: Array<string>;
  confirmationPrompt?: Prompt;
  rejectionStatement?: Statement;
  followUpPrompt?: FollowUpPrompt;
  conclusionStatement?: Statement;
  dialogCodeHook?: CodeHook;
  fulfillmentActivity?: FulfillmentActivity;
  parentIntentSignature?: string;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  version?: string;
  checksum?: string;
  createVersion?: boolean;
  kendraConfiguration?: KendraConfiguration;
  inputContexts?: Array<InputContext>;
  outputContexts?: Array<OutputContext>;
}
export interface PutSlotTypeRequest {
  name: string;
  description?: string;
  enumerationValues?: Array<EnumerationValue>;
  checksum?: string;
  valueSelectionStrategy?: SlotValueSelectionStrategy;
  createVersion?: boolean;
  parentSlotTypeSignature?: string;
  slotTypeConfigurations?: Array<SlotTypeConfiguration>;
}
export interface PutSlotTypeResponse {
  name?: string;
  description?: string;
  enumerationValues?: Array<EnumerationValue>;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  version?: string;
  checksum?: string;
  valueSelectionStrategy?: SlotValueSelectionStrategy;
  createVersion?: boolean;
  parentSlotTypeSignature?: string;
  slotTypeConfigurations?: Array<SlotTypeConfiguration>;
}
export type QueryFilterString = string;

export type ReferenceType = "Intent" | "Bot" | "BotAlias" | "BotChannel";
export type RegexPattern = string;

export type ResourceArn = string;

export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly referenceType?: ReferenceType;
  readonly exampleReference?: ResourceReference;
}> {}
export type ResourcePrefix = string;

export interface ResourceReference {
  name?: string;
  version?: string;
}
export type ResourceType = "BOT" | "INTENT" | "SLOT_TYPE";
export type ResponseCard = string;

export type roleArn = string;

export type SessionTTL = number;

export interface Slot {
  name: string;
  description?: string;
  slotConstraint: SlotConstraint;
  slotType?: string;
  slotTypeVersion?: string;
  valueElicitationPrompt?: Prompt;
  priority?: number;
  sampleUtterances?: Array<string>;
  responseCard?: string;
  obfuscationSetting?: ObfuscationSetting;
  defaultValueSpec?: SlotDefaultValueSpec;
}
export type SlotConstraint = "Required" | "Optional";
export interface SlotDefaultValue {
  defaultValue: string;
}
export type SlotDefaultValueList = Array<SlotDefaultValue>;
export interface SlotDefaultValueSpec {
  defaultValueList: Array<SlotDefaultValue>;
}
export type SlotDefaultValueString = string;

export type SlotList = Array<Slot>;
export type SlotName = string;

export interface SlotTypeConfiguration {
  regexConfiguration?: SlotTypeRegexConfiguration;
}
export type SlotTypeConfigurations = Array<SlotTypeConfiguration>;
export interface SlotTypeMetadata {
  name?: string;
  description?: string;
  lastUpdatedDate?: Date | string;
  createdDate?: Date | string;
  version?: string;
}
export type SlotTypeMetadataList = Array<SlotTypeMetadata>;
export type SlotTypeName = string;

export interface SlotTypeRegexConfiguration {
  pattern: string;
}
export type SlotUtteranceList = Array<string>;
export type SlotValueSelectionStrategy = "ORIGINAL_VALUE" | "TOP_RESOLUTION";
export type SortOrder = "ASCENDING" | "DESCENDING";
export interface StartImportRequest {
  payload: Uint8Array | string | Buffer | Stream.Stream<Uint8Array>;
  resourceType: ResourceType;
  mergeStrategy: MergeStrategy;
  tags?: Array<Tag>;
}
export interface StartImportResponse {
  name?: string;
  resourceType?: ResourceType;
  mergeStrategy?: MergeStrategy;
  importId?: string;
  importStatus?: ImportStatus;
  tags?: Array<Tag>;
  createdDate?: Date | string;
}
export interface StartMigrationRequest {
  v1BotName: string;
  v1BotVersion: string;
  v2BotName: string;
  v2BotRole: string;
  migrationStrategy: MigrationStrategy;
}
export interface StartMigrationResponse {
  v1BotName?: string;
  v1BotVersion?: string;
  v1BotLocale?: Locale;
  v2BotId?: string;
  v2BotRole?: string;
  migrationId?: string;
  migrationStrategy?: MigrationStrategy;
  migrationTimestamp?: Date | string;
}
export interface Statement {
  messages: Array<Message>;
  responseCard?: string;
}
export type Status = "BUILDING" | "READY" | "READY_BASIC_TESTING" | "FAILED" | "NOT_BUILT";
export type StatusType = "Detected" | "Missed";
export type LexModelBuildingServiceString = string;

export type StringList = Array<string>;
export type SynonymList = Array<string>;
export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export type Timestamp = Date | string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export type UserId = string;

export type Utterance = string;

export interface UtteranceData {
  utteranceString?: string;
  count?: number;
  distinctUsers?: number;
  firstUtteredDate?: Date | string;
  lastUtteredDate?: Date | string;
}
export interface UtteranceList {
  botVersion?: string;
  utterances?: Array<UtteranceData>;
}
export type UtteranceString = string;

export type V2BotId = string;

export type V2BotName = string;

export type Value = string;

export type Version = string;

export declare namespace CreateBotVersion {
  export type Input = CreateBotVersionRequest;
  export type Output = CreateBotVersionResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | PreconditionFailedException
    | CommonAwsError;
}

export declare namespace CreateIntentVersion {
  export type Input = CreateIntentVersionRequest;
  export type Output = CreateIntentVersionResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | PreconditionFailedException
    | CommonAwsError;
}

export declare namespace CreateSlotTypeVersion {
  export type Input = CreateSlotTypeVersionRequest;
  export type Output = CreateSlotTypeVersionResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | PreconditionFailedException
    | CommonAwsError;
}

export declare namespace DeleteBot {
  export type Input = DeleteBotRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteBotAlias {
  export type Input = DeleteBotAliasRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteBotChannelAssociation {
  export type Input = DeleteBotChannelAssociationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteBotVersion {
  export type Input = DeleteBotVersionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteIntent {
  export type Input = DeleteIntentRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteIntentVersion {
  export type Input = DeleteIntentVersionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteSlotType {
  export type Input = DeleteSlotTypeRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteSlotTypeVersion {
  export type Input = DeleteSlotTypeVersionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteUtterances {
  export type Input = DeleteUtterancesRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetBot {
  export type Input = GetBotRequest;
  export type Output = GetBotResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetBotAlias {
  export type Input = GetBotAliasRequest;
  export type Output = GetBotAliasResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetBotAliases {
  export type Input = GetBotAliasesRequest;
  export type Output = GetBotAliasesResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetBotChannelAssociation {
  export type Input = GetBotChannelAssociationRequest;
  export type Output = GetBotChannelAssociationResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetBotChannelAssociations {
  export type Input = GetBotChannelAssociationsRequest;
  export type Output = GetBotChannelAssociationsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetBots {
  export type Input = GetBotsRequest;
  export type Output = GetBotsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetBotVersions {
  export type Input = GetBotVersionsRequest;
  export type Output = GetBotVersionsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetBuiltinIntent {
  export type Input = GetBuiltinIntentRequest;
  export type Output = GetBuiltinIntentResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetBuiltinIntents {
  export type Input = GetBuiltinIntentsRequest;
  export type Output = GetBuiltinIntentsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetBuiltinSlotTypes {
  export type Input = GetBuiltinSlotTypesRequest;
  export type Output = GetBuiltinSlotTypesResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetExport {
  export type Input = GetExportRequest;
  export type Output = GetExportResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetImport {
  export type Input = GetImportRequest;
  export type Output = GetImportResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetIntent {
  export type Input = GetIntentRequest;
  export type Output = GetIntentResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetIntents {
  export type Input = GetIntentsRequest;
  export type Output = GetIntentsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetIntentVersions {
  export type Input = GetIntentVersionsRequest;
  export type Output = GetIntentVersionsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetMigration {
  export type Input = GetMigrationRequest;
  export type Output = GetMigrationResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetMigrations {
  export type Input = GetMigrationsRequest;
  export type Output = GetMigrationsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace GetSlotType {
  export type Input = GetSlotTypeRequest;
  export type Output = GetSlotTypeResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetSlotTypes {
  export type Input = GetSlotTypesRequest;
  export type Output = GetSlotTypesResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetSlotTypeVersions {
  export type Input = GetSlotTypeVersionsRequest;
  export type Output = GetSlotTypeVersionsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetUtterancesView {
  export type Input = GetUtterancesViewRequest;
  export type Output = GetUtterancesViewResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace PutBot {
  export type Input = PutBotRequest;
  export type Output = PutBotResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | PreconditionFailedException
    | CommonAwsError;
}

export declare namespace PutBotAlias {
  export type Input = PutBotAliasRequest;
  export type Output = PutBotAliasResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | PreconditionFailedException
    | CommonAwsError;
}

export declare namespace PutIntent {
  export type Input = PutIntentRequest;
  export type Output = PutIntentResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | PreconditionFailedException
    | CommonAwsError;
}

export declare namespace PutSlotType {
  export type Input = PutSlotTypeRequest;
  export type Output = PutSlotTypeResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | PreconditionFailedException
    | CommonAwsError;
}

export declare namespace StartImport {
  export type Input = StartImportRequest;
  export type Output = StartImportResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace StartMigration {
  export type Input = StartMigrationRequest;
  export type Output = StartMigrationResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export type LexModelBuildingServiceErrors = AccessDeniedException | BadRequestException | ConflictException | InternalFailureException | LimitExceededException | NotFoundException | PreconditionFailedException | ResourceInUseException | CommonAwsError;


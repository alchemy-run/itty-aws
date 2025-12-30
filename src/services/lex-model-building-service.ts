import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const BotVersions = S.Array(S.String);
export const IntentUtteranceList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class CreateBotVersionRequest extends S.Class<CreateBotVersionRequest>("CreateBotVersionRequest")({name: S.String, checksum: S.optional(S.String)}) {}
export class CreateIntentVersionRequest extends S.Class<CreateIntentVersionRequest>("CreateIntentVersionRequest")({name: S.String, checksum: S.optional(S.String)}) {}
export class CreateSlotTypeVersionRequest extends S.Class<CreateSlotTypeVersionRequest>("CreateSlotTypeVersionRequest")({name: S.String, checksum: S.optional(S.String)}) {}
export class DeleteBotRequest extends S.Class<DeleteBotRequest>("DeleteBotRequest")({name: S.String}) {}
export class DeleteBotAliasRequest extends S.Class<DeleteBotAliasRequest>("DeleteBotAliasRequest")({name: S.String, botName: S.String}) {}
export class DeleteBotChannelAssociationRequest extends S.Class<DeleteBotChannelAssociationRequest>("DeleteBotChannelAssociationRequest")({name: S.String, botName: S.String, botAlias: S.String}) {}
export class DeleteBotVersionRequest extends S.Class<DeleteBotVersionRequest>("DeleteBotVersionRequest")({name: S.String, version: S.String}) {}
export class DeleteIntentRequest extends S.Class<DeleteIntentRequest>("DeleteIntentRequest")({name: S.String}) {}
export class DeleteIntentVersionRequest extends S.Class<DeleteIntentVersionRequest>("DeleteIntentVersionRequest")({name: S.String, version: S.String}) {}
export class DeleteSlotTypeRequest extends S.Class<DeleteSlotTypeRequest>("DeleteSlotTypeRequest")({name: S.String}) {}
export class DeleteSlotTypeVersionRequest extends S.Class<DeleteSlotTypeVersionRequest>("DeleteSlotTypeVersionRequest")({name: S.String, version: S.String}) {}
export class DeleteUtterancesRequest extends S.Class<DeleteUtterancesRequest>("DeleteUtterancesRequest")({botName: S.String, userId: S.String}) {}
export class GetBotRequest extends S.Class<GetBotRequest>("GetBotRequest")({name: S.String, versionOrAlias: S.String}) {}
export class GetBotAliasRequest extends S.Class<GetBotAliasRequest>("GetBotAliasRequest")({name: S.String, botName: S.String}) {}
export class GetBotAliasesRequest extends S.Class<GetBotAliasesRequest>("GetBotAliasesRequest")({botName: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), nameContains: S.optional(S.String)}) {}
export class GetBotChannelAssociationRequest extends S.Class<GetBotChannelAssociationRequest>("GetBotChannelAssociationRequest")({name: S.String, botName: S.String, botAlias: S.String}) {}
export class GetBotChannelAssociationsRequest extends S.Class<GetBotChannelAssociationsRequest>("GetBotChannelAssociationsRequest")({botName: S.String, botAlias: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), nameContains: S.optional(S.String)}) {}
export class GetBotsRequest extends S.Class<GetBotsRequest>("GetBotsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), nameContains: S.optional(S.String)}) {}
export class GetBotVersionsRequest extends S.Class<GetBotVersionsRequest>("GetBotVersionsRequest")({name: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetBuiltinIntentRequest extends S.Class<GetBuiltinIntentRequest>("GetBuiltinIntentRequest")({signature: S.String}) {}
export class GetBuiltinIntentsRequest extends S.Class<GetBuiltinIntentsRequest>("GetBuiltinIntentsRequest")({locale: S.optional(S.String), signatureContains: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetBuiltinSlotTypesRequest extends S.Class<GetBuiltinSlotTypesRequest>("GetBuiltinSlotTypesRequest")({locale: S.optional(S.String), signatureContains: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetExportRequest extends S.Class<GetExportRequest>("GetExportRequest")({name: S.String, version: S.String, resourceType: S.String, exportType: S.String}) {}
export class GetImportRequest extends S.Class<GetImportRequest>("GetImportRequest")({importId: S.String}) {}
export class GetIntentRequest extends S.Class<GetIntentRequest>("GetIntentRequest")({name: S.String, version: S.String}) {}
export class GetIntentsRequest extends S.Class<GetIntentsRequest>("GetIntentsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), nameContains: S.optional(S.String)}) {}
export class GetIntentVersionsRequest extends S.Class<GetIntentVersionsRequest>("GetIntentVersionsRequest")({name: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetMigrationRequest extends S.Class<GetMigrationRequest>("GetMigrationRequest")({migrationId: S.String}) {}
export class GetMigrationsRequest extends S.Class<GetMigrationsRequest>("GetMigrationsRequest")({sortByAttribute: S.optional(S.String), sortByOrder: S.optional(S.String), v1BotNameContains: S.optional(S.String), migrationStatusEquals: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class GetSlotTypeRequest extends S.Class<GetSlotTypeRequest>("GetSlotTypeRequest")({name: S.String, version: S.String}) {}
export class GetSlotTypesRequest extends S.Class<GetSlotTypesRequest>("GetSlotTypesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), nameContains: S.optional(S.String)}) {}
export class GetSlotTypeVersionsRequest extends S.Class<GetSlotTypeVersionsRequest>("GetSlotTypeVersionsRequest")({name: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetUtterancesViewRequest extends S.Class<GetUtterancesViewRequest>("GetUtterancesViewRequest")({botName: S.String, botVersions: BotVersions, statusType: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const TagList = S.Array(Tag);
export class StartImportRequest extends S.Class<StartImportRequest>("StartImportRequest")({payload: H.StreamBody(), resourceType: S.String, mergeStrategy: S.String, tags: S.optional(TagList)}) {}
export class StartMigrationRequest extends S.Class<StartMigrationRequest>("StartMigrationRequest")({v1BotName: S.String, v1BotVersion: S.String, v2BotName: S.String, v2BotRole: S.String, migrationStrategy: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const SlotUtteranceList = S.Array(S.String);
export const SynonymList = S.Array(S.String);
export const LocaleList = S.Array(S.String);
export const StringList = S.Array(S.String);
export class Intent extends S.Class<Intent>("Intent")({intentName: S.String, intentVersion: S.String}) {}
export const IntentList = S.Array(Intent);
export class Message extends S.Class<Message>("Message")({contentType: S.String, content: S.String, groupNumber: S.optional(S.Number)}) {}
export const MessageList = S.Array(Message);
export class Statement extends S.Class<Statement>("Statement")({messages: MessageList, responseCard: S.optional(S.String)}) {}
export class Prompt extends S.Class<Prompt>("Prompt")({messages: MessageList, maxAttempts: S.Number, responseCard: S.optional(S.String)}) {}
export class FollowUpPrompt extends S.Class<FollowUpPrompt>("FollowUpPrompt")({prompt: Prompt, rejectionStatement: Statement}) {}
export class CodeHook extends S.Class<CodeHook>("CodeHook")({uri: S.String, messageVersion: S.String}) {}
export class FulfillmentActivity extends S.Class<FulfillmentActivity>("FulfillmentActivity")({type: S.String, codeHook: S.optional(CodeHook)}) {}
export class KendraConfiguration extends S.Class<KendraConfiguration>("KendraConfiguration")({kendraIndex: S.String, queryFilterString: S.optional(S.String), role: S.String}) {}
export class InputContext extends S.Class<InputContext>("InputContext")({name: S.String}) {}
export const InputContextList = S.Array(InputContext);
export class OutputContext extends S.Class<OutputContext>("OutputContext")({name: S.String, timeToLiveInSeconds: S.Number, turnsToLive: S.Number}) {}
export const OutputContextList = S.Array(OutputContext);
export class EnumerationValue extends S.Class<EnumerationValue>("EnumerationValue")({value: S.String, synonyms: S.optional(SynonymList)}) {}
export const EnumerationValues = S.Array(EnumerationValue);
export class CreateBotVersionResponse extends S.Class<CreateBotVersionResponse>("CreateBotVersionResponse")({name: S.optional(S.String), description: S.optional(S.String), intents: S.optional(IntentList), clarificationPrompt: S.optional(Prompt), abortStatement: S.optional(Statement), status: S.optional(S.String), failureReason: S.optional(S.String), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), idleSessionTTLInSeconds: S.optional(S.Number), voiceId: S.optional(S.String), checksum: S.optional(S.String), version: S.optional(S.String), locale: S.optional(S.String), childDirected: S.optional(S.Boolean), enableModelImprovements: S.optional(S.Boolean), detectSentiment: S.optional(S.Boolean)}) {}
export class SlotDefaultValue extends S.Class<SlotDefaultValue>("SlotDefaultValue")({defaultValue: S.String}) {}
export const SlotDefaultValueList = S.Array(SlotDefaultValue);
export class SlotDefaultValueSpec extends S.Class<SlotDefaultValueSpec>("SlotDefaultValueSpec")({defaultValueList: SlotDefaultValueList}) {}
export class Slot extends S.Class<Slot>("Slot")({name: S.String, description: S.optional(S.String), slotConstraint: S.String, slotType: S.optional(S.String), slotTypeVersion: S.optional(S.String), valueElicitationPrompt: S.optional(Prompt), priority: S.optional(S.Number), sampleUtterances: S.optional(SlotUtteranceList), responseCard: S.optional(S.String), obfuscationSetting: S.optional(S.String), defaultValueSpec: S.optional(SlotDefaultValueSpec)}) {}
export const SlotList = S.Array(Slot);
export class CreateIntentVersionResponse extends S.Class<CreateIntentVersionResponse>("CreateIntentVersionResponse")({name: S.optional(S.String), description: S.optional(S.String), slots: S.optional(SlotList), sampleUtterances: S.optional(IntentUtteranceList), confirmationPrompt: S.optional(Prompt), rejectionStatement: S.optional(Statement), followUpPrompt: S.optional(FollowUpPrompt), conclusionStatement: S.optional(Statement), dialogCodeHook: S.optional(CodeHook), fulfillmentActivity: S.optional(FulfillmentActivity), parentIntentSignature: S.optional(S.String), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), version: S.optional(S.String), checksum: S.optional(S.String), kendraConfiguration: S.optional(KendraConfiguration), inputContexts: S.optional(InputContextList), outputContexts: S.optional(OutputContextList)}) {}
export class SlotTypeRegexConfiguration extends S.Class<SlotTypeRegexConfiguration>("SlotTypeRegexConfiguration")({pattern: S.String}) {}
export class SlotTypeConfiguration extends S.Class<SlotTypeConfiguration>("SlotTypeConfiguration")({regexConfiguration: S.optional(SlotTypeRegexConfiguration)}) {}
export const SlotTypeConfigurations = S.Array(SlotTypeConfiguration);
export class CreateSlotTypeVersionResponse extends S.Class<CreateSlotTypeVersionResponse>("CreateSlotTypeVersionResponse")({name: S.optional(S.String), description: S.optional(S.String), enumerationValues: S.optional(EnumerationValues), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), version: S.optional(S.String), checksum: S.optional(S.String), valueSelectionStrategy: S.optional(S.String), parentSlotTypeSignature: S.optional(S.String), slotTypeConfigurations: S.optional(SlotTypeConfigurations)}) {}
export class GetBotResponse extends S.Class<GetBotResponse>("GetBotResponse")({name: S.optional(S.String), description: S.optional(S.String), intents: S.optional(IntentList), enableModelImprovements: S.optional(S.Boolean), nluIntentConfidenceThreshold: S.optional(S.Number), clarificationPrompt: S.optional(Prompt), abortStatement: S.optional(Statement), status: S.optional(S.String), failureReason: S.optional(S.String), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), idleSessionTTLInSeconds: S.optional(S.Number), voiceId: S.optional(S.String), checksum: S.optional(S.String), version: S.optional(S.String), locale: S.optional(S.String), childDirected: S.optional(S.Boolean), detectSentiment: S.optional(S.Boolean)}) {}
export class BotMetadata extends S.Class<BotMetadata>("BotMetadata")({name: S.optional(S.String), description: S.optional(S.String), status: S.optional(S.String), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), version: S.optional(S.String)}) {}
export const BotMetadataList = S.Array(BotMetadata);
export class GetBotVersionsResponse extends S.Class<GetBotVersionsResponse>("GetBotVersionsResponse")({bots: S.optional(BotMetadataList), nextToken: S.optional(S.String)}) {}
export class GetExportResponse extends S.Class<GetExportResponse>("GetExportResponse")({name: S.optional(S.String), version: S.optional(S.String), resourceType: S.optional(S.String), exportType: S.optional(S.String), exportStatus: S.optional(S.String), failureReason: S.optional(S.String), url: S.optional(S.String)}) {}
export class GetImportResponse extends S.Class<GetImportResponse>("GetImportResponse")({name: S.optional(S.String), resourceType: S.optional(S.String), mergeStrategy: S.optional(S.String), importId: S.optional(S.String), importStatus: S.optional(S.String), failureReason: S.optional(StringList), createdDate: S.optional(S.Date)}) {}
export class GetIntentResponse extends S.Class<GetIntentResponse>("GetIntentResponse")({name: S.optional(S.String), description: S.optional(S.String), slots: S.optional(SlotList), sampleUtterances: S.optional(IntentUtteranceList), confirmationPrompt: S.optional(Prompt), rejectionStatement: S.optional(Statement), followUpPrompt: S.optional(FollowUpPrompt), conclusionStatement: S.optional(Statement), dialogCodeHook: S.optional(CodeHook), fulfillmentActivity: S.optional(FulfillmentActivity), parentIntentSignature: S.optional(S.String), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), version: S.optional(S.String), checksum: S.optional(S.String), kendraConfiguration: S.optional(KendraConfiguration), inputContexts: S.optional(InputContextList), outputContexts: S.optional(OutputContextList)}) {}
export class IntentMetadata extends S.Class<IntentMetadata>("IntentMetadata")({name: S.optional(S.String), description: S.optional(S.String), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), version: S.optional(S.String)}) {}
export const IntentMetadataList = S.Array(IntentMetadata);
export class GetIntentVersionsResponse extends S.Class<GetIntentVersionsResponse>("GetIntentVersionsResponse")({intents: S.optional(IntentMetadataList), nextToken: S.optional(S.String)}) {}
export class GetSlotTypeResponse extends S.Class<GetSlotTypeResponse>("GetSlotTypeResponse")({name: S.optional(S.String), description: S.optional(S.String), enumerationValues: S.optional(EnumerationValues), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), version: S.optional(S.String), checksum: S.optional(S.String), valueSelectionStrategy: S.optional(S.String), parentSlotTypeSignature: S.optional(S.String), slotTypeConfigurations: S.optional(SlotTypeConfigurations)}) {}
export class SlotTypeMetadata extends S.Class<SlotTypeMetadata>("SlotTypeMetadata")({name: S.optional(S.String), description: S.optional(S.String), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), version: S.optional(S.String)}) {}
export const SlotTypeMetadataList = S.Array(SlotTypeMetadata);
export class GetSlotTypeVersionsResponse extends S.Class<GetSlotTypeVersionsResponse>("GetSlotTypeVersionsResponse")({slotTypes: S.optional(SlotTypeMetadataList), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList)}) {}
export class StartImportResponse extends S.Class<StartImportResponse>("StartImportResponse")({name: S.optional(S.String), resourceType: S.optional(S.String), mergeStrategy: S.optional(S.String), importId: S.optional(S.String), importStatus: S.optional(S.String), tags: S.optional(TagList), createdDate: S.optional(S.Date)}) {}
export class StartMigrationResponse extends S.Class<StartMigrationResponse>("StartMigrationResponse")({v1BotName: S.optional(S.String), v1BotVersion: S.optional(S.String), v1BotLocale: S.optional(S.String), v2BotId: S.optional(S.String), v2BotRole: S.optional(S.String), migrationId: S.optional(S.String), migrationStrategy: S.optional(S.String), migrationTimestamp: S.optional(S.Date)}) {}
export const MigrationAlertDetails = S.Array(S.String);
export const MigrationAlertReferenceURLs = S.Array(S.String);
export class LogSettingsRequest extends S.Class<LogSettingsRequest>("LogSettingsRequest")({logType: S.String, destination: S.String, kmsKeyArn: S.optional(S.String), resourceArn: S.String}) {}
export const LogSettingsRequestList = S.Array(LogSettingsRequest);
export class ResourceReference extends S.Class<ResourceReference>("ResourceReference")({name: S.optional(S.String), version: S.optional(S.String)}) {}
export class LogSettingsResponse extends S.Class<LogSettingsResponse>("LogSettingsResponse")({logType: S.optional(S.String), destination: S.optional(S.String), kmsKeyArn: S.optional(S.String), resourceArn: S.optional(S.String), resourcePrefix: S.optional(S.String)}) {}
export const LogSettingsResponseList = S.Array(LogSettingsResponse);
export class ConversationLogsResponse extends S.Class<ConversationLogsResponse>("ConversationLogsResponse")({logSettings: S.optional(LogSettingsResponseList), iamRoleArn: S.optional(S.String)}) {}
export class BotAliasMetadata extends S.Class<BotAliasMetadata>("BotAliasMetadata")({name: S.optional(S.String), description: S.optional(S.String), botVersion: S.optional(S.String), botName: S.optional(S.String), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), checksum: S.optional(S.String), conversationLogs: S.optional(ConversationLogsResponse)}) {}
export const BotAliasMetadataList = S.Array(BotAliasMetadata);
export const ChannelConfigurationMap = S.Record({key: S.String, value: S.String});
export class BotChannelAssociation extends S.Class<BotChannelAssociation>("BotChannelAssociation")({name: S.optional(S.String), description: S.optional(S.String), botAlias: S.optional(S.String), botName: S.optional(S.String), createdDate: S.optional(S.Date), type: S.optional(S.String), botConfiguration: S.optional(ChannelConfigurationMap), status: S.optional(S.String), failureReason: S.optional(S.String)}) {}
export const BotChannelAssociationList = S.Array(BotChannelAssociation);
export class BuiltinIntentSlot extends S.Class<BuiltinIntentSlot>("BuiltinIntentSlot")({name: S.optional(S.String)}) {}
export const BuiltinIntentSlotList = S.Array(BuiltinIntentSlot);
export class BuiltinIntentMetadata extends S.Class<BuiltinIntentMetadata>("BuiltinIntentMetadata")({signature: S.optional(S.String), supportedLocales: S.optional(LocaleList)}) {}
export const BuiltinIntentMetadataList = S.Array(BuiltinIntentMetadata);
export class BuiltinSlotTypeMetadata extends S.Class<BuiltinSlotTypeMetadata>("BuiltinSlotTypeMetadata")({signature: S.optional(S.String), supportedLocales: S.optional(LocaleList)}) {}
export const BuiltinSlotTypeMetadataList = S.Array(BuiltinSlotTypeMetadata);
export class MigrationAlert extends S.Class<MigrationAlert>("MigrationAlert")({type: S.optional(S.String), message: S.optional(S.String), details: S.optional(MigrationAlertDetails), referenceURLs: S.optional(MigrationAlertReferenceURLs)}) {}
export const MigrationAlerts = S.Array(MigrationAlert);
export class MigrationSummary extends S.Class<MigrationSummary>("MigrationSummary")({migrationId: S.optional(S.String), v1BotName: S.optional(S.String), v1BotVersion: S.optional(S.String), v1BotLocale: S.optional(S.String), v2BotId: S.optional(S.String), v2BotRole: S.optional(S.String), migrationStatus: S.optional(S.String), migrationStrategy: S.optional(S.String), migrationTimestamp: S.optional(S.Date)}) {}
export const MigrationSummaryList = S.Array(MigrationSummary);
export class ConversationLogsRequest extends S.Class<ConversationLogsRequest>("ConversationLogsRequest")({logSettings: LogSettingsRequestList, iamRoleArn: S.String}) {}
export class GetBotAliasesResponse extends S.Class<GetBotAliasesResponse>("GetBotAliasesResponse")({BotAliases: S.optional(BotAliasMetadataList), nextToken: S.optional(S.String)}) {}
export class GetBotChannelAssociationResponse extends S.Class<GetBotChannelAssociationResponse>("GetBotChannelAssociationResponse")({name: S.optional(S.String), description: S.optional(S.String), botAlias: S.optional(S.String), botName: S.optional(S.String), createdDate: S.optional(S.Date), type: S.optional(S.String), botConfiguration: S.optional(ChannelConfigurationMap), status: S.optional(S.String), failureReason: S.optional(S.String)}) {}
export class GetBotChannelAssociationsResponse extends S.Class<GetBotChannelAssociationsResponse>("GetBotChannelAssociationsResponse")({botChannelAssociations: S.optional(BotChannelAssociationList), nextToken: S.optional(S.String)}) {}
export class GetBotsResponse extends S.Class<GetBotsResponse>("GetBotsResponse")({bots: S.optional(BotMetadataList), nextToken: S.optional(S.String)}) {}
export class GetBuiltinIntentResponse extends S.Class<GetBuiltinIntentResponse>("GetBuiltinIntentResponse")({signature: S.optional(S.String), supportedLocales: S.optional(LocaleList), slots: S.optional(BuiltinIntentSlotList)}) {}
export class GetBuiltinIntentsResponse extends S.Class<GetBuiltinIntentsResponse>("GetBuiltinIntentsResponse")({intents: S.optional(BuiltinIntentMetadataList), nextToken: S.optional(S.String)}) {}
export class GetBuiltinSlotTypesResponse extends S.Class<GetBuiltinSlotTypesResponse>("GetBuiltinSlotTypesResponse")({slotTypes: S.optional(BuiltinSlotTypeMetadataList), nextToken: S.optional(S.String)}) {}
export class GetIntentsResponse extends S.Class<GetIntentsResponse>("GetIntentsResponse")({intents: S.optional(IntentMetadataList), nextToken: S.optional(S.String)}) {}
export class GetMigrationResponse extends S.Class<GetMigrationResponse>("GetMigrationResponse")({migrationId: S.optional(S.String), v1BotName: S.optional(S.String), v1BotVersion: S.optional(S.String), v1BotLocale: S.optional(S.String), v2BotId: S.optional(S.String), v2BotRole: S.optional(S.String), migrationStatus: S.optional(S.String), migrationStrategy: S.optional(S.String), migrationTimestamp: S.optional(S.Date), alerts: S.optional(MigrationAlerts)}) {}
export class GetMigrationsResponse extends S.Class<GetMigrationsResponse>("GetMigrationsResponse")({migrationSummaries: S.optional(MigrationSummaryList), nextToken: S.optional(S.String)}) {}
export class GetSlotTypesResponse extends S.Class<GetSlotTypesResponse>("GetSlotTypesResponse")({slotTypes: S.optional(SlotTypeMetadataList), nextToken: S.optional(S.String)}) {}
export class PutBotRequest extends S.Class<PutBotRequest>("PutBotRequest")({name: S.String, description: S.optional(S.String), intents: S.optional(IntentList), enableModelImprovements: S.optional(S.Boolean), nluIntentConfidenceThreshold: S.optional(S.Number), clarificationPrompt: S.optional(Prompt), abortStatement: S.optional(Statement), idleSessionTTLInSeconds: S.optional(S.Number), voiceId: S.optional(S.String), checksum: S.optional(S.String), processBehavior: S.optional(S.String), locale: S.String, childDirected: S.Boolean, detectSentiment: S.optional(S.Boolean), createVersion: S.optional(S.Boolean), tags: S.optional(TagList)}) {}
export class PutBotAliasRequest extends S.Class<PutBotAliasRequest>("PutBotAliasRequest")({name: S.String, description: S.optional(S.String), botVersion: S.String, botName: S.String, checksum: S.optional(S.String), conversationLogs: S.optional(ConversationLogsRequest), tags: S.optional(TagList)}) {}
export class PutSlotTypeRequest extends S.Class<PutSlotTypeRequest>("PutSlotTypeRequest")({name: S.String, description: S.optional(S.String), enumerationValues: S.optional(EnumerationValues), checksum: S.optional(S.String), valueSelectionStrategy: S.optional(S.String), createVersion: S.optional(S.Boolean), parentSlotTypeSignature: S.optional(S.String), slotTypeConfigurations: S.optional(SlotTypeConfigurations)}) {}
export class UtteranceData extends S.Class<UtteranceData>("UtteranceData")({utteranceString: S.optional(S.String), count: S.optional(S.Number), distinctUsers: S.optional(S.Number), firstUtteredDate: S.optional(S.Date), lastUtteredDate: S.optional(S.Date)}) {}
export const ListOfUtterance = S.Array(UtteranceData);
export class UtteranceList extends S.Class<UtteranceList>("UtteranceList")({botVersion: S.optional(S.String), utterances: S.optional(ListOfUtterance)}) {}
export const ListsOfUtterances = S.Array(UtteranceList);
export class GetBotAliasResponse extends S.Class<GetBotAliasResponse>("GetBotAliasResponse")({name: S.optional(S.String), description: S.optional(S.String), botVersion: S.optional(S.String), botName: S.optional(S.String), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), checksum: S.optional(S.String), conversationLogs: S.optional(ConversationLogsResponse)}) {}
export class GetUtterancesViewResponse extends S.Class<GetUtterancesViewResponse>("GetUtterancesViewResponse")({botName: S.optional(S.String), utterances: S.optional(ListsOfUtterances)}) {}
export class PutBotResponse extends S.Class<PutBotResponse>("PutBotResponse")({name: S.optional(S.String), description: S.optional(S.String), intents: S.optional(IntentList), enableModelImprovements: S.optional(S.Boolean), nluIntentConfidenceThreshold: S.optional(S.Number), clarificationPrompt: S.optional(Prompt), abortStatement: S.optional(Statement), status: S.optional(S.String), failureReason: S.optional(S.String), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), idleSessionTTLInSeconds: S.optional(S.Number), voiceId: S.optional(S.String), checksum: S.optional(S.String), version: S.optional(S.String), locale: S.optional(S.String), childDirected: S.optional(S.Boolean), createVersion: S.optional(S.Boolean), detectSentiment: S.optional(S.Boolean), tags: S.optional(TagList)}) {}
export class PutBotAliasResponse extends S.Class<PutBotAliasResponse>("PutBotAliasResponse")({name: S.optional(S.String), description: S.optional(S.String), botVersion: S.optional(S.String), botName: S.optional(S.String), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), checksum: S.optional(S.String), conversationLogs: S.optional(ConversationLogsResponse), tags: S.optional(TagList)}) {}
export class PutIntentRequest extends S.Class<PutIntentRequest>("PutIntentRequest")({name: S.String, description: S.optional(S.String), slots: S.optional(SlotList), sampleUtterances: S.optional(IntentUtteranceList), confirmationPrompt: S.optional(Prompt), rejectionStatement: S.optional(Statement), followUpPrompt: S.optional(FollowUpPrompt), conclusionStatement: S.optional(Statement), dialogCodeHook: S.optional(CodeHook), fulfillmentActivity: S.optional(FulfillmentActivity), parentIntentSignature: S.optional(S.String), checksum: S.optional(S.String), createVersion: S.optional(S.Boolean), kendraConfiguration: S.optional(KendraConfiguration), inputContexts: S.optional(InputContextList), outputContexts: S.optional(OutputContextList)}) {}
export class PutSlotTypeResponse extends S.Class<PutSlotTypeResponse>("PutSlotTypeResponse")({name: S.optional(S.String), description: S.optional(S.String), enumerationValues: S.optional(EnumerationValues), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), version: S.optional(S.String), checksum: S.optional(S.String), valueSelectionStrategy: S.optional(S.String), createVersion: S.optional(S.Boolean), parentSlotTypeSignature: S.optional(S.String), slotTypeConfigurations: S.optional(SlotTypeConfigurations)}) {}
export class PutIntentResponse extends S.Class<PutIntentResponse>("PutIntentResponse")({name: S.optional(S.String), description: S.optional(S.String), slots: S.optional(SlotList), sampleUtterances: S.optional(IntentUtteranceList), confirmationPrompt: S.optional(Prompt), rejectionStatement: S.optional(Statement), followUpPrompt: S.optional(FollowUpPrompt), conclusionStatement: S.optional(Statement), dialogCodeHook: S.optional(CodeHook), fulfillmentActivity: S.optional(FulfillmentActivity), parentIntentSignature: S.optional(S.String), lastUpdatedDate: S.optional(S.Date), createdDate: S.optional(S.Date), version: S.optional(S.String), checksum: S.optional(S.String), createVersion: S.optional(S.Boolean), kendraConfiguration: S.optional(KendraConfiguration), inputContexts: S.optional(InputContextList), outputContexts: S.optional(OutputContextList)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalFailureException extends S.TaggedError<InternalFailureException>()("InternalFailureException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class ResourceInUseException extends S.TaggedError<ResourceInUseException>()("ResourceInUseException", {}) {};
export class PreconditionFailedException extends S.TaggedError<PreconditionFailedException>()("PreconditionFailedException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes all versions of the slot type, including the
 * `$LATEST` version. To delete a specific version of the slot
 * type, use the DeleteSlotTypeVersion operation.
 * 
 * 
 * You can delete a version of a slot type only if it is not
 * referenced. To delete a slot type that is referred to in one or more
 * intents, you must remove those references first.
 * 
 * 
 * 
 * 
 * If you get the `ResourceInUseException` exception,
 * the exception provides an example reference that shows the intent where
 * the slot type is referenced. To remove the reference to the slot type,
 * either update the intent or delete it. If you get the same exception
 * when you attempt to delete the slot type again, repeat until the slot
 * type has no references and the `DeleteSlotType` call is
 * successful.
 * 
 * 
 * 
 * 
 * This operation requires permission for the
 * `lex:DeleteSlotType` action.
 */export const deleteSlotType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/slottypes/{name}", method: "DELETE", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.DeleteSlotType" }, DeleteSlotTypeRequest, S.Struct({}), [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, NotFoundException, ResourceInUseException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a specific version of a slot type. To delete all versions
 * of a slot type, use the DeleteSlotType operation.
 * 
 * 
 * This operation requires permissions for the
 * `lex:DeleteSlotTypeVersion` action.
 */export const deleteSlotTypeVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/slottypes/{name}/version/{version}", method: "DELETE", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.DeleteSlotTypeVersion" }, DeleteSlotTypeVersionRequest, S.Struct({}), [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, NotFoundException, ResourceInUseException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes stored utterances.
 * 
 * 
 * Amazon Lex stores the utterances that users send to your bot. Utterances
 * are stored for 15 days for use with the GetUtterancesView operation, and then stored indefinitely for use in improving the
 * ability of your bot to respond to user input.
 * 
 * 
 * Use the `DeleteUtterances` operation to manually delete
 * stored utterances for a specific user. When you use the
 * `DeleteUtterances` operation, utterances stored for improving
 * your bot's ability to respond to user input are deleted immediately.
 * Utterances stored for use with the `GetUtterancesView`
 * operation are deleted after 15 days.
 * 
 * 
 * This operation requires permissions for the
 * `lex:DeleteUtterances` action.
 */export const deleteUtterances = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{botName}/utterances/{userId}", method: "DELETE", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.DeleteUtterances" }, DeleteUtterancesRequest, S.Struct({}), [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds the specified tags to the specified resource. If a tag key
 * already exists, the existing value is replaced with the new value.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/tags/{resourceArn}", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.TagResource" }, TagResourceRequest, TagResourceResponse, [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from a bot, bot alias or bot channel.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new version of an intent based on the
 * `$LATEST` version of the intent. If the `$LATEST`
 * version of this intent hasn't changed since you last updated it, Amazon Lex
 * doesn't create a new version. It returns the last version you
 * created.
 * 
 * 
 * 
 * 
 * You can update only the `$LATEST` version of the
 * intent. You can't update the numbered versions that you create with the
 * `CreateIntentVersion` operation.
 * 
 * 
 * 
 * 
 * When you create a version of an intent, Amazon Lex sets the version to
 * 1. Subsequent versions increment by 1. For more information, see versioning-intro.
 * 
 * 
 * This operation requires permissions to perform the
 * `lex:CreateIntentVersion` action.
 */export const createIntentVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/intents/{name}/versions", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.CreateIntentVersion" }, CreateIntentVersionRequest, CreateIntentVersionResponse, [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, NotFoundException, PreconditionFailedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new version of a slot type based on the
 * `$LATEST` version of the specified slot type. If the
 * `$LATEST` version of this resource has not changed since the
 * last version that you created, Amazon Lex doesn't create a new version. It
 * returns the last version that you created.
 * 
 * 
 * 
 * 
 * You can update only the `$LATEST` version of a slot
 * type. You can't update the numbered versions that you create with the
 * `CreateSlotTypeVersion` operation.
 * 
 * 
 * 
 * 
 * When you create a version of a slot type, Amazon Lex sets the version to
 * 1. Subsequent versions increment by 1. For more information, see versioning-intro.
 * 
 * 
 * This operation requires permissions for the
 * `lex:CreateSlotTypeVersion` action.
 */export const createSlotTypeVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/slottypes/{name}/versions", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.CreateSlotTypeVersion" }, CreateSlotTypeVersionRequest, CreateSlotTypeVersionResponse, [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, NotFoundException, PreconditionFailedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes all versions of the bot, including the `$LATEST`
 * version. To delete a specific version of the bot, use the DeleteBotVersion operation. The `DeleteBot`
 * operation doesn't immediately remove the bot schema. Instead, it is marked
 * for deletion and removed later.
 * 
 * 
 * Amazon Lex stores utterances indefinitely for improving the ability of
 * your bot to respond to user inputs. These utterances are not removed when
 * the bot is deleted. To remove the utterances, use the DeleteUtterances operation.
 * 
 * 
 * If a bot has an alias, you can't delete it. Instead, the
 * `DeleteBot` operation returns a
 * `ResourceInUseException` exception that includes a reference
 * to the alias that refers to the bot. To remove the reference to the bot,
 * delete the alias. If you get the same exception again, delete the
 * referring alias until the `DeleteBot` operation is
 * successful.
 * 
 * 
 * This operation requires permissions for the
 * `lex:DeleteBot` action.
 */export const deleteBot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{name}", method: "DELETE", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.DeleteBot" }, DeleteBotRequest, S.Struct({}), [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, NotFoundException, ResourceInUseException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an alias for the specified bot.
 * 
 * 
 * You can't delete an alias that is used in the association between a
 * bot and a messaging channel. If an alias is used in a channel association,
 * the `DeleteBot` operation returns a
 * `ResourceInUseException` exception that includes a reference
 * to the channel association that refers to the bot. You can remove the
 * reference to the alias by deleting the channel association. If you get the
 * same exception again, delete the referring association until the
 * `DeleteBotAlias` operation is successful.
 */export const deleteBotAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{botName}/aliases/{name}", method: "DELETE", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.DeleteBotAlias" }, DeleteBotAliasRequest, S.Struct({}), [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, NotFoundException, ResourceInUseException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the association between an Amazon Lex bot and a messaging
 * platform.
 * 
 * 
 * This operation requires permission for the
 * `lex:DeleteBotChannelAssociation` action.
 */export const deleteBotChannelAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{botName}/aliases/{botAlias}/channels/{name}", method: "DELETE", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.DeleteBotChannelAssociation" }, DeleteBotChannelAssociationRequest, S.Struct({}), [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a specific version of a bot. To delete all versions of a
 * bot, use the DeleteBot operation.
 * 
 * 
 * This operation requires permissions for the
 * `lex:DeleteBotVersion` action.
 */export const deleteBotVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{name}/versions/{version}", method: "DELETE", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.DeleteBotVersion" }, DeleteBotVersionRequest, S.Struct({}), [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, NotFoundException, ResourceInUseException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes all versions of the intent, including the
 * `$LATEST` version. To delete a specific version of the
 * intent, use the DeleteIntentVersion operation.
 * 
 * 
 * You can delete a version of an intent only if it is not
 * referenced. To delete an intent that is referred to in one or more bots
 * (see how-it-works), you must remove those references
 * first.
 * 
 * 
 * 
 * 
 * If you get the `ResourceInUseException` exception, it
 * provides an example reference that shows where the intent is referenced.
 * To remove the reference to the intent, either update the bot or delete
 * it. If you get the same exception when you attempt to delete the intent
 * again, repeat until the intent has no references and the call to
 * `DeleteIntent` is successful.
 * 
 * 
 * 
 * 
 * This operation requires permission for the
 * `lex:DeleteIntent` action.
 */export const deleteIntent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/intents/{name}", method: "DELETE", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.DeleteIntent" }, DeleteIntentRequest, S.Struct({}), [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, NotFoundException, ResourceInUseException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns metadata information for a specific bot. You must provide
 * the bot name and the bot version or alias.
 * 
 * 
 * This operation requires permissions for the
 * `lex:GetBot` action.
 */export const getBot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{name}/versions/{versionOrAlias}", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetBot" }, GetBotRequest, GetBotResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about all of the versions of a bot.
 * 
 * 
 * The `GetBotVersions` operation returns a
 * `BotMetadata` object for each version of a bot. For example,
 * if a bot has three numbered versions, the `GetBotVersions`
 * operation returns four `BotMetadata` objects in the response,
 * one for each numbered version and one for the `$LATEST`
 * version.
 * 
 * 
 * The `GetBotVersions` operation always returns at least
 * one version, the `$LATEST` version.
 * 
 * 
 * This operation requires permissions for the
 * `lex:GetBotVersions` action.
 */export const getBotVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{name}/versions", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetBotVersions" }, GetBotVersionsRequest, GetBotVersionsResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Exports the contents of a Amazon Lex resource in a specified format.
 */export const getExport = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/exports", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetExport" }, GetExportRequest, GetExportResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about an import job started with the
 * `StartImport` operation.
 */export const getImport = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/imports/{importId}", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetImport" }, GetImportRequest, GetImportResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about an intent. In addition to the intent
 * name, you must specify the intent version.
 * 
 * 
 * This operation requires permissions to perform the
 * `lex:GetIntent` action.
 */export const getIntent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/intents/{name}/versions/{version}", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetIntent" }, GetIntentRequest, GetIntentResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about all of the versions of an intent.
 * 
 * 
 * The `GetIntentVersions` operation returns an
 * `IntentMetadata` object for each version of an intent. For
 * example, if an intent has three numbered versions, the
 * `GetIntentVersions` operation returns four
 * `IntentMetadata` objects in the response, one for each
 * numbered version and one for the `$LATEST` version.
 * 
 * 
 * The `GetIntentVersions` operation always returns at
 * least one version, the `$LATEST` version.
 * 
 * 
 * This operation requires permissions for the
 * `lex:GetIntentVersions` action.
 */export const getIntentVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/intents/{name}/versions", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetIntentVersions" }, GetIntentVersionsRequest, GetIntentVersionsResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a specific version of a slot type. In
 * addition to specifying the slot type name, you must specify the slot type
 * version.
 * 
 * 
 * This operation requires permissions for the
 * `lex:GetSlotType` action.
 */export const getSlotType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/slottypes/{name}/versions/{version}", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetSlotType" }, GetSlotTypeRequest, GetSlotTypeResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about all versions of a slot type.
 * 
 * 
 * The `GetSlotTypeVersions` operation returns a
 * `SlotTypeMetadata` object for each version of a slot type.
 * For example, if a slot type has three numbered versions, the
 * `GetSlotTypeVersions` operation returns four
 * `SlotTypeMetadata` objects in the response, one for each
 * numbered version and one for the `$LATEST` version.
 * 
 * 
 * The `GetSlotTypeVersions` operation always returns at
 * least one version, the `$LATEST` version.
 * 
 * 
 * This operation requires permissions for the
 * `lex:GetSlotTypeVersions` action.
 */export const getSlotTypeVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/slottypes/{name}/versions", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetSlotTypeVersions" }, GetSlotTypeVersionsRequest, GetSlotTypeVersionsResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of tags associated with the specified resource. Only bots,
 * bot aliases, and bot channels can have tags associated with them.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a job to import a resource to Amazon Lex.
 */export const startImport = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/imports", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.StartImport" }, StartImportRequest, StartImportResponse, [BadRequestException, InternalFailureException, LimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new version of the bot based on the `$LATEST`
 * version. If the `$LATEST` version of this resource hasn't
 * changed since you created the last version, Amazon Lex doesn't create a new
 * version. It returns the last created version.
 * 
 * 
 * 
 * 
 * You can update only the `$LATEST` version of the bot.
 * You can't update the numbered versions that you create with the
 * `CreateBotVersion` operation.
 * 
 * 
 * 
 * 
 * When you create the first version of a bot, Amazon Lex sets the version
 * to 1. Subsequent versions increment by 1. For more information, see versioning-intro.
 * 
 * 
 * This operation requires permission for the
 * `lex:CreateBotVersion` action.
 */export const createBotVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{name}/versions", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.CreateBotVersion" }, CreateBotVersionRequest, CreateBotVersionResponse, [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, NotFoundException, PreconditionFailedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a specific version of an intent. To delete all versions of
 * a intent, use the DeleteIntent operation.
 * 
 * 
 * This operation requires permissions for the
 * `lex:DeleteIntentVersion` action.
 */export const deleteIntentVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/intents/{name}/versions/{version}", method: "DELETE", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.DeleteIntentVersion" }, DeleteIntentVersionRequest, S.Struct({}), [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, NotFoundException, ResourceInUseException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of aliases for a specified Amazon Lex bot.
 * 
 * 
 * This operation requires permissions for the
 * `lex:GetBotAliases` action.
 */export const getBotAliases = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{botName}/aliases", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetBotAliases" }, GetBotAliasesRequest, GetBotAliasesResponse, [BadRequestException, InternalFailureException, LimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the association between an Amazon Lex bot and
 * a messaging platform.
 * 
 * 
 * This operation requires permissions for the
 * `lex:GetBotChannelAssociation` action.
 */export const getBotChannelAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{botName}/aliases/{botAlias}/channels/{name}", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetBotChannelAssociation" }, GetBotChannelAssociationRequest, GetBotChannelAssociationResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all of the channels associated with the
 * specified bot.
 * 
 * 
 * The `GetBotChannelAssociations` operation requires
 * permissions for the `lex:GetBotChannelAssociations`
 * action.
 */export const getBotChannelAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{botName}/aliases/{botAlias}/channels", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetBotChannelAssociations" }, GetBotChannelAssociationsRequest, GetBotChannelAssociationsResponse, [BadRequestException, InternalFailureException, LimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns bot information as follows:
 * 
 * 
 * 
 * - If you provide the `nameContains` field, the
 * response includes information for the `$LATEST` version of
 * all bots whose name contains the specified string.
 * 
 * 
 * 
 * - If you don't specify the `nameContains` field, the
 * operation returns information about the `$LATEST` version
 * of all of your bots.
 * 
 * 
 * 
 * 
 * 
 * This operation requires permission for the `lex:GetBots`
 * action.
 */export const getBots = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetBots" }, GetBotsRequest, GetBotsResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a built-in intent.
 * 
 * 
 * This operation requires permission for the
 * `lex:GetBuiltinIntent` action.
 */export const getBuiltinIntent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/builtins/intents/{signature}", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetBuiltinIntent" }, GetBuiltinIntentRequest, GetBuiltinIntentResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of built-in intents that meet the specified
 * criteria.
 * 
 * 
 * This operation requires permission for the
 * `lex:GetBuiltinIntents` action.
 */export const getBuiltinIntents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/builtins/intents", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetBuiltinIntents" }, GetBuiltinIntentsRequest, GetBuiltinIntentsResponse, [BadRequestException, InternalFailureException, LimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of built-in slot types that meet the specified
 * criteria.
 * 
 * 
 * For a list of built-in slot types, see Slot Type Reference in the Alexa Skills
 * Kit.
 * 
 * 
 * This operation requires permission for the
 * `lex:GetBuiltInSlotTypes` action.
 */export const getBuiltinSlotTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/builtins/slottypes", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetBuiltinSlotTypes" }, GetBuiltinSlotTypesRequest, GetBuiltinSlotTypesResponse, [BadRequestException, InternalFailureException, LimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns intent information as follows:
 * 
 * 
 * 
 * - If you specify the `nameContains` field, returns the
 * `$LATEST` version of all intents that contain the
 * specified string.
 * 
 * 
 * 
 * - If you don't specify the `nameContains` field,
 * returns information about the `$LATEST` version of all
 * intents.
 * 
 * 
 * 
 * 
 * 
 * The operation requires permission for the
 * `lex:GetIntents` action.
 */export const getIntents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/intents", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetIntents" }, GetIntentsRequest, GetIntentsResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides details about an ongoing or complete migration from an
 * Amazon Lex V1 bot to an Amazon Lex V2 bot. Use this operation to view the migration
 * alerts and warnings related to the migration.
 */export const getMigration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/migrations/{migrationId}", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetMigration" }, GetMigrationRequest, GetMigrationResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.
 */export const getMigrations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/migrations", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetMigrations" }, GetMigrationsRequest, GetMigrationsResponse, [BadRequestException, InternalFailureException, LimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns slot type information as follows:
 * 
 * 
 * 
 * - If you specify the `nameContains` field, returns the
 * `$LATEST` version of all slot types that contain the
 * specified string.
 * 
 * 
 * 
 * - If you don't specify the `nameContains` field,
 * returns information about the `$LATEST` version of all slot
 * types.
 * 
 * 
 * 
 * 
 * 
 * The operation requires permission for the
 * `lex:GetSlotTypes` action.
 */export const getSlotTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/slottypes", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetSlotTypes" }, GetSlotTypesRequest, GetSlotTypesResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when
 * you want to take advantage of the new features of Amazon Lex V2.
 * 
 * 
 * For more information, see Migrating a bot in the Amazon Lex
 * developer guide.
 */export const startMigration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/migrations", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.StartMigration" }, StartMigrationRequest, StartMigrationResponse, [AccessDeniedException, BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about an Amazon Lex bot alias. For more information
 * about aliases, see versioning-aliases.
 * 
 * 
 * This operation requires permissions for the
 * `lex:GetBotAlias` action.
 */export const getBotAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{botName}/aliases/{name}", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetBotAlias" }, GetBotAliasRequest, GetBotAliasResponse, [BadRequestException, InternalFailureException, LimitExceededException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Use the `GetUtterancesView` operation to get information
 * about the utterances that your users have made to your bot. You can use
 * this list to tune the utterances that your bot responds to.
 * 
 * 
 * For example, say that you have created a bot to order flowers.
 * After your users have used your bot for a while, use the
 * `GetUtterancesView` operation to see the requests that they
 * have made and whether they have been successful. You might find that the
 * utterance "I want flowers" is not being recognized. You could add this
 * utterance to the `OrderFlowers` intent so that your bot
 * recognizes that utterance.
 * 
 * 
 * After you publish a new version of a bot, you can get information
 * about the old version and the new so that you can compare the performance
 * across the two versions.
 * 
 * 
 * Utterance statistics are generated once a day. Data is available
 * for the last 15 days. You can request information for up to 5 versions of
 * your bot in each request. Amazon Lex returns the most frequent utterances
 * received by the bot in the last 15 days. The response contains information
 * about a maximum of 100 utterances for each version.
 * 
 * 
 * If you set `childDirected` field to true when you
 * created your bot, if you are using slot obfuscation with one or more
 * slots, or if you opted out of participating in improving Amazon Lex, utterances
 * are not available.
 * 
 * 
 * This operation requires permissions for the
 * `lex:GetUtterancesView` action.
 */export const getUtterancesView = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{botName}/utterances?view=aggregation", method: "GET", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.GetUtterancesView" }, GetUtterancesViewRequest, GetUtterancesViewResponse, [BadRequestException, InternalFailureException, LimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Amazon Lex conversational bot or replaces an existing bot.
 * When you create or update a bot you are only required to specify a name, a
 * locale, and whether the bot is directed toward children under age 13. You
 * can use this to add intents later, or to remove intents from an existing
 * bot. When you create a bot with the minimum information, the bot is
 * created or updated but Amazon Lex returns the `` response
 * `FAILED`. You can build the bot after you add one or more
 * intents. For more information about Amazon Lex bots, see how-it-works.
 * 
 * 
 * If you specify the name of an existing bot, the fields in the
 * request replace the existing values in the `$LATEST` version of
 * the bot. Amazon Lex removes any fields that you don't provide values for in the
 * request, except for the `idleTTLInSeconds` and
 * `privacySettings` fields, which are set to their default
 * values. If you don't specify values for required fields, Amazon Lex throws an
 * exception.
 * 
 * 
 * This operation requires permissions for the `lex:PutBot`
 * action. For more information, see security-iam.
 */export const putBot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{name}/versions/$LATEST", method: "PUT", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.PutBot" }, PutBotRequest, PutBotResponse, [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, PreconditionFailedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an alias for the specified version of the bot or replaces
 * an alias for the specified bot. To change the version of the bot that the
 * alias points to, replace the alias. For more information about aliases,
 * see versioning-aliases.
 * 
 * 
 * This operation requires permissions for the
 * `lex:PutBotAlias` action.
 */export const putBotAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/bots/{botName}/aliases/{name}", method: "PUT", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.PutBotAlias" }, PutBotAliasRequest, PutBotAliasResponse, [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, PreconditionFailedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a custom slot type or replaces an existing custom slot
 * type.
 * 
 * 
 * To create a custom slot type, specify a name for the slot type and
 * a set of enumeration values, which are the values that a slot of this type
 * can assume. For more information, see how-it-works.
 * 
 * 
 * If you specify the name of an existing slot type, the fields in the
 * request replace the existing values in the `$LATEST` version of
 * the slot type. Amazon Lex removes the fields that you don't provide in the
 * request. If you don't specify required fields, Amazon Lex throws an exception.
 * When you update the `$LATEST` version of a slot type, if a bot
 * uses the `$LATEST` version of an intent that contains the slot
 * type, the bot's `status` field is set to
 * `NOT_BUILT`.
 * 
 * 
 * This operation requires permissions for the
 * `lex:PutSlotType` action.
 */export const putSlotType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/slottypes/{name}/versions/$LATEST", method: "PUT", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.PutSlotType" }, PutSlotTypeRequest, PutSlotTypeResponse, [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, PreconditionFailedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an intent or replaces an existing intent.
 * 
 * 
 * To define the interaction between the user and your bot, you use
 * one or more intents. For a pizza ordering bot, for example, you would
 * create an `OrderPizza` intent.
 * 
 * 
 * To create an intent or replace an existing intent, you must provide
 * the following:
 * 
 * 
 * 
 * - Intent name. For example, `OrderPizza`.
 * 
 * 
 * 
 * - Sample utterances. For example, "Can I order a pizza, please."
 * and "I want to order a pizza."
 * 
 * 
 * 
 * - Information to be gathered. You specify slot types for the
 * information that your bot will request from the user. You can specify
 * standard slot types, such as a date or a time, or custom slot types
 * such as the size and crust of a pizza.
 * 
 * 
 * 
 * - How the intent will be fulfilled. You can provide a Lambda
 * function or configure the intent to return the intent information to
 * the client application. If you use a Lambda function, when all of the
 * intent information is available, Amazon Lex invokes your Lambda function.
 * If you configure your intent to return the intent information to the
 * client application.
 * 
 * 
 * 
 * 
 * 
 * You can specify other optional information in the request, such
 * as:
 * 
 * 
 * 
 * - A confirmation prompt to ask the user to confirm an intent. For
 * example, "Shall I order your pizza?"
 * 
 * 
 * 
 * - A conclusion statement to send to the user after the intent has
 * been fulfilled. For example, "I placed your pizza order."
 * 
 * 
 * 
 * - A follow-up prompt that asks the user for additional activity.
 * For example, asking "Do you want to order a drink with your
 * pizza?"
 * 
 * 
 * 
 * 
 * 
 * If you specify an existing intent name to update the intent, Amazon Lex
 * replaces the values in the `$LATEST` version of the intent with
 * the values in the request. Amazon Lex removes fields that you don't provide in
 * the request. If you don't specify the required fields, Amazon Lex throws an
 * exception. When you update the `$LATEST` version of an intent,
 * the `status` field of any bot that uses the
 * `$LATEST` version of the intent is set to
 * `NOT_BUILT`.
 * 
 * 
 * For more information, see how-it-works.
 * 
 * 
 * This operation requires permissions for the
 * `lex:PutIntent` action.
 */export const putIntent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-04-19", uri: "/intents/{name}/versions/$LATEST", method: "PUT", sdkId: "Lex Model Building Service", sigV4ServiceName: "lex", name: "AWSDeepSenseModelBuildingService.PutIntent" }, PutIntentRequest, PutIntentResponse, [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, PreconditionFailedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

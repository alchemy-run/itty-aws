import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { LexModelsV2 as _LexModelsV2 } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Lex Models V2",
  version: "2020-08-07",
  protocol: "restJson1",
  sigV4ServiceName: "lex",
  endpointPrefix: "models-v2-lex",
  operations: {
    BatchCreateCustomVocabularyItem:
      "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate",
    BatchDeleteCustomVocabularyItem:
      "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete",
    BatchUpdateCustomVocabularyItem:
      "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate",
    BuildBotLocale:
      "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
    CreateBot: "PUT /bots",
    CreateBotAlias: "PUT /bots/{botId}/botaliases",
    CreateBotLocale: "PUT /bots/{botId}/botversions/{botVersion}/botlocales",
    CreateBotReplica: "PUT /bots/{botId}/replicas",
    CreateBotVersion: "PUT /bots/{botId}/botversions",
    CreateExport: "PUT /exports",
    CreateIntent:
      "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents",
    CreateResourcePolicy: "POST /policy/{resourceArn}",
    CreateResourcePolicyStatement: "POST /policy/{resourceArn}/statements",
    CreateSlot:
      "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots",
    CreateSlotType:
      "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes",
    CreateTestSetDiscrepancyReport:
      "POST /testsets/{testSetId}/testsetdiscrepancy",
    CreateUploadUrl: "POST /createuploadurl",
    DeleteBot: "DELETE /bots/{botId}",
    DeleteBotAlias: "DELETE /bots/{botId}/botaliases/{botAliasId}",
    DeleteBotLocale:
      "DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
    DeleteBotReplica: "DELETE /bots/{botId}/replicas/{replicaRegion}",
    DeleteBotVersion: "DELETE /bots/{botId}/botversions/{botVersion}",
    DeleteCustomVocabulary:
      "DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary",
    DeleteExport: "DELETE /exports/{exportId}",
    DeleteImport: "DELETE /imports/{importId}",
    DeleteIntent:
      "DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}",
    DeleteResourcePolicy: "DELETE /policy/{resourceArn}",
    DeleteResourcePolicyStatement:
      "DELETE /policy/{resourceArn}/statements/{statementId}",
    DeleteSlot:
      "DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
    DeleteSlotType:
      "DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}",
    DeleteTestSet: "DELETE /testsets/{testSetId}",
    DeleteUtterances: "DELETE /bots/{botId}/utterances",
    DescribeBot: "GET /bots/{botId}",
    DescribeBotAlias: "GET /bots/{botId}/botaliases/{botAliasId}",
    DescribeBotLocale:
      "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
    DescribeBotRecommendation:
      "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}",
    DescribeBotReplica: "GET /bots/{botId}/replicas/{replicaRegion}",
    DescribeBotResourceGeneration:
      "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations/{generationId}",
    DescribeBotVersion: "GET /bots/{botId}/botversions/{botVersion}",
    DescribeCustomVocabularyMetadata:
      "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata",
    DescribeExport: "GET /exports/{exportId}",
    DescribeImport: "GET /imports/{importId}",
    DescribeIntent:
      "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}",
    DescribeResourcePolicy: "GET /policy/{resourceArn}",
    DescribeSlot:
      "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
    DescribeSlotType:
      "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}",
    DescribeTestExecution: "GET /testexecutions/{testExecutionId}",
    DescribeTestSet: "GET /testsets/{testSetId}",
    DescribeTestSetDiscrepancyReport:
      "GET /testsetdiscrepancy/{testSetDiscrepancyReportId}",
    DescribeTestSetGeneration: "GET /testsetgenerations/{testSetGenerationId}",
    GenerateBotElement:
      "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generate",
    GetTestExecutionArtifactsUrl:
      "GET /testexecutions/{testExecutionId}/artifacturl",
    ListAggregatedUtterances: "POST /bots/{botId}/aggregatedutterances",
    ListBotAliases: "POST /bots/{botId}/botaliases",
    ListBotAliasReplicas:
      "POST /bots/{botId}/replicas/{replicaRegion}/botaliases",
    ListBotLocales: "POST /bots/{botId}/botversions/{botVersion}/botlocales",
    ListBotRecommendations:
      "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations",
    ListBotReplicas: "POST /bots/{botId}/replicas",
    ListBotResourceGenerations:
      "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations",
    ListBots: "POST /bots",
    ListBotVersionReplicas:
      "POST /bots/{botId}/replicas/{replicaRegion}/botversions",
    ListBotVersions: "POST /bots/{botId}/botversions",
    ListBuiltInIntents: "POST /builtins/locales/{localeId}/intents",
    ListBuiltInSlotTypes: "POST /builtins/locales/{localeId}/slottypes",
    ListCustomVocabularyItems:
      "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list",
    ListExports: "POST /exports",
    ListImports: "POST /imports",
    ListIntentMetrics: "POST /bots/{botId}/analytics/intentmetrics",
    ListIntentPaths: "POST /bots/{botId}/analytics/intentpaths",
    ListIntents:
      "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents",
    ListIntentStageMetrics: "POST /bots/{botId}/analytics/intentstagemetrics",
    ListRecommendedIntents:
      "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents",
    ListSessionAnalyticsData: "POST /bots/{botId}/analytics/sessions",
    ListSessionMetrics: "POST /bots/{botId}/analytics/sessionmetrics",
    ListSlots:
      "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots",
    ListSlotTypes:
      "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes",
    ListTagsForResource: "GET /tags/{resourceARN}",
    ListTestExecutionResultItems:
      "POST /testexecutions/{testExecutionId}/results",
    ListTestExecutions: "POST /testexecutions",
    ListTestSetRecords: "POST /testsets/{testSetId}/records",
    ListTestSets: "POST /testsets",
    ListUtteranceAnalyticsData: "POST /bots/{botId}/analytics/utterances",
    ListUtteranceMetrics: "POST /bots/{botId}/analytics/utterancemetrics",
    SearchAssociatedTranscripts:
      "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts",
    StartBotRecommendation:
      "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations",
    StartBotResourceGeneration:
      "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/startgeneration",
    StartImport: "PUT /imports",
    StartTestExecution: "POST /testsets/{testSetId}/testexecutions",
    StartTestSetGeneration: "PUT /testsetgenerations",
    StopBotRecommendation:
      "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation",
    TagResource: "POST /tags/{resourceARN}",
    UntagResource: "DELETE /tags/{resourceARN}",
    UpdateBot: "PUT /bots/{botId}",
    UpdateBotAlias: "PUT /bots/{botId}/botaliases/{botAliasId}",
    UpdateBotLocale:
      "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
    UpdateBotRecommendation:
      "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}",
    UpdateExport: "PUT /exports/{exportId}",
    UpdateIntent:
      "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}",
    UpdateResourcePolicy: "PUT /policy/{resourceArn}",
    UpdateSlot:
      "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
    UpdateSlotType:
      "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}",
    UpdateTestSet: "PUT /testsets/{testSetId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const LexModelsV2 = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _LexModelsV2;

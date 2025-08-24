import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class LexModelsV2 extends AWSServiceClient {
  batchCreateCustomVocabularyItem(
    input: BatchCreateCustomVocabularyItemRequest,
  ): Effect.Effect<
    BatchCreateCustomVocabularyItemResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchDeleteCustomVocabularyItem(
    input: BatchDeleteCustomVocabularyItemRequest,
  ): Effect.Effect<
    BatchDeleteCustomVocabularyItemResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchUpdateCustomVocabularyItem(
    input: BatchUpdateCustomVocabularyItemRequest,
  ): Effect.Effect<
    BatchUpdateCustomVocabularyItemResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  buildBotLocale(
    input: BuildBotLocaleRequest,
  ): Effect.Effect<
    BuildBotLocaleResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createBot(
    input: CreateBotRequest,
  ): Effect.Effect<
    CreateBotResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createBotAlias(
    input: CreateBotAliasRequest,
  ): Effect.Effect<
    CreateBotAliasResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createBotLocale(
    input: CreateBotLocaleRequest,
  ): Effect.Effect<
    CreateBotLocaleResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createBotReplica(
    input: CreateBotReplicaRequest,
  ): Effect.Effect<
    CreateBotReplicaResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createBotVersion(
    input: CreateBotVersionRequest,
  ): Effect.Effect<
    CreateBotVersionResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createExport(
    input: CreateExportRequest,
  ): Effect.Effect<
    CreateExportResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createIntent(
    input: CreateIntentRequest,
  ): Effect.Effect<
    CreateIntentResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createResourcePolicy(
    input: CreateResourcePolicyRequest,
  ): Effect.Effect<
    CreateResourcePolicyResponse,
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createResourcePolicyStatement(
    input: CreateResourcePolicyStatementRequest,
  ): Effect.Effect<
    CreateResourcePolicyStatementResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSlot(
    input: CreateSlotRequest,
  ): Effect.Effect<
    CreateSlotResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSlotType(
    input: CreateSlotTypeRequest,
  ): Effect.Effect<
    CreateSlotTypeResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createTestSetDiscrepancyReport(
    input: CreateTestSetDiscrepancyReportRequest,
  ): Effect.Effect<
    CreateTestSetDiscrepancyReportResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createUploadUrl(
    input: CreateUploadUrlRequest,
  ): Effect.Effect<
    CreateUploadUrlResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteBot(
    input: DeleteBotRequest,
  ): Effect.Effect<
    DeleteBotResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteBotAlias(
    input: DeleteBotAliasRequest,
  ): Effect.Effect<
    DeleteBotAliasResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteBotLocale(
    input: DeleteBotLocaleRequest,
  ): Effect.Effect<
    DeleteBotLocaleResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteBotReplica(
    input: DeleteBotReplicaRequest,
  ): Effect.Effect<
    DeleteBotReplicaResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteBotVersion(
    input: DeleteBotVersionRequest,
  ): Effect.Effect<
    DeleteBotVersionResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCustomVocabulary(
    input: DeleteCustomVocabularyRequest,
  ): Effect.Effect<
    DeleteCustomVocabularyResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteExport(
    input: DeleteExportRequest,
  ): Effect.Effect<
    DeleteExportResponse,
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteImport(
    input: DeleteImportRequest,
  ): Effect.Effect<
    DeleteImportResponse,
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteIntent(
    input: DeleteIntentRequest,
  ): Effect.Effect<
    {},
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteResourcePolicyStatement(
    input: DeleteResourcePolicyStatementRequest,
  ): Effect.Effect<
    DeleteResourcePolicyStatementResponse,
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteSlot(
    input: DeleteSlotRequest,
  ): Effect.Effect<
    {},
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteSlotType(
    input: DeleteSlotTypeRequest,
  ): Effect.Effect<
    {},
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteTestSet(
    input: DeleteTestSetRequest,
  ): Effect.Effect<
    {},
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteUtterances(
    input: DeleteUtterancesRequest,
  ): Effect.Effect<
    DeleteUtterancesResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeBot(
    input: DescribeBotRequest,
  ): Effect.Effect<
    DescribeBotResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeBotAlias(
    input: DescribeBotAliasRequest,
  ): Effect.Effect<
    DescribeBotAliasResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeBotLocale(
    input: DescribeBotLocaleRequest,
  ): Effect.Effect<
    DescribeBotLocaleResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeBotRecommendation(
    input: DescribeBotRecommendationRequest,
  ): Effect.Effect<
    DescribeBotRecommendationResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeBotReplica(
    input: DescribeBotReplicaRequest,
  ): Effect.Effect<
    DescribeBotReplicaResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeBotResourceGeneration(
    input: DescribeBotResourceGenerationRequest,
  ): Effect.Effect<
    DescribeBotResourceGenerationResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeBotVersion(
    input: DescribeBotVersionRequest,
  ): Effect.Effect<
    DescribeBotVersionResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeCustomVocabularyMetadata(
    input: DescribeCustomVocabularyMetadataRequest,
  ): Effect.Effect<
    DescribeCustomVocabularyMetadataResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeExport(
    input: DescribeExportRequest,
  ): Effect.Effect<
    DescribeExportResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeImport(
    input: DescribeImportRequest,
  ): Effect.Effect<
    DescribeImportResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeIntent(
    input: DescribeIntentRequest,
  ): Effect.Effect<
    DescribeIntentResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeResourcePolicy(
    input: DescribeResourcePolicyRequest,
  ): Effect.Effect<
    DescribeResourcePolicyResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeSlot(
    input: DescribeSlotRequest,
  ): Effect.Effect<
    DescribeSlotResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeSlotType(
    input: DescribeSlotTypeRequest,
  ): Effect.Effect<
    DescribeSlotTypeResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeTestExecution(
    input: DescribeTestExecutionRequest,
  ): Effect.Effect<
    DescribeTestExecutionResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeTestSet(
    input: DescribeTestSetRequest,
  ): Effect.Effect<
    DescribeTestSetResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeTestSetDiscrepancyReport(
    input: DescribeTestSetDiscrepancyReportRequest,
  ): Effect.Effect<
    DescribeTestSetDiscrepancyReportResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeTestSetGeneration(
    input: DescribeTestSetGenerationRequest,
  ): Effect.Effect<
    DescribeTestSetGenerationResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  generateBotElement(
    input: GenerateBotElementRequest,
  ): Effect.Effect<
    GenerateBotElementResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTestExecutionArtifactsUrl(
    input: GetTestExecutionArtifactsUrlRequest,
  ): Effect.Effect<
    GetTestExecutionArtifactsUrlResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAggregatedUtterances(
    input: ListAggregatedUtterancesRequest,
  ): Effect.Effect<
    ListAggregatedUtterancesResponse,
    | InternalServerException
    | PreconditionFailedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBotAliases(
    input: ListBotAliasesRequest,
  ): Effect.Effect<
    ListBotAliasesResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBotAliasReplicas(
    input: ListBotAliasReplicasRequest,
  ): Effect.Effect<
    ListBotAliasReplicasResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBotLocales(
    input: ListBotLocalesRequest,
  ): Effect.Effect<
    ListBotLocalesResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBotRecommendations(
    input: ListBotRecommendationsRequest,
  ): Effect.Effect<
    ListBotRecommendationsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBotReplicas(
    input: ListBotReplicasRequest,
  ): Effect.Effect<
    ListBotReplicasResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBotResourceGenerations(
    input: ListBotResourceGenerationsRequest,
  ): Effect.Effect<
    ListBotResourceGenerationsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBots(
    input: ListBotsRequest,
  ): Effect.Effect<
    ListBotsResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBotVersionReplicas(
    input: ListBotVersionReplicasRequest,
  ): Effect.Effect<
    ListBotVersionReplicasResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBotVersions(
    input: ListBotVersionsRequest,
  ): Effect.Effect<
    ListBotVersionsResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBuiltInIntents(
    input: ListBuiltInIntentsRequest,
  ): Effect.Effect<
    ListBuiltInIntentsResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBuiltInSlotTypes(
    input: ListBuiltInSlotTypesRequest,
  ): Effect.Effect<
    ListBuiltInSlotTypesResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCustomVocabularyItems(
    input: ListCustomVocabularyItemsRequest,
  ): Effect.Effect<
    ListCustomVocabularyItemsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listExports(
    input: ListExportsRequest,
  ): Effect.Effect<
    ListExportsResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listImports(
    input: ListImportsRequest,
  ): Effect.Effect<
    ListImportsResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listIntentMetrics(
    input: ListIntentMetricsRequest,
  ): Effect.Effect<
    ListIntentMetricsResponse,
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listIntentPaths(
    input: ListIntentPathsRequest,
  ): Effect.Effect<
    ListIntentPathsResponse,
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listIntents(
    input: ListIntentsRequest,
  ): Effect.Effect<
    ListIntentsResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listIntentStageMetrics(
    input: ListIntentStageMetricsRequest,
  ): Effect.Effect<
    ListIntentStageMetricsResponse,
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRecommendedIntents(
    input: ListRecommendedIntentsRequest,
  ): Effect.Effect<
    ListRecommendedIntentsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSessionAnalyticsData(
    input: ListSessionAnalyticsDataRequest,
  ): Effect.Effect<
    ListSessionAnalyticsDataResponse,
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSessionMetrics(
    input: ListSessionMetricsRequest,
  ): Effect.Effect<
    ListSessionMetricsResponse,
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSlots(
    input: ListSlotsRequest,
  ): Effect.Effect<
    ListSlotsResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSlotTypes(
    input: ListSlotTypesRequest,
  ): Effect.Effect<
    ListSlotTypesResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTestExecutionResultItems(
    input: ListTestExecutionResultItemsRequest,
  ): Effect.Effect<
    ListTestExecutionResultItemsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTestExecutions(
    input: ListTestExecutionsRequest,
  ): Effect.Effect<
    ListTestExecutionsResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTestSetRecords(
    input: ListTestSetRecordsRequest,
  ): Effect.Effect<
    ListTestSetRecordsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTestSets(
    input: ListTestSetsRequest,
  ): Effect.Effect<
    ListTestSetsResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listUtteranceAnalyticsData(
    input: ListUtteranceAnalyticsDataRequest,
  ): Effect.Effect<
    ListUtteranceAnalyticsDataResponse,
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listUtteranceMetrics(
    input: ListUtteranceMetricsRequest,
  ): Effect.Effect<
    ListUtteranceMetricsResponse,
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchAssociatedTranscripts(
    input: SearchAssociatedTranscriptsRequest,
  ): Effect.Effect<
    SearchAssociatedTranscriptsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startBotRecommendation(
    input: StartBotRecommendationRequest,
  ): Effect.Effect<
    StartBotRecommendationResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startBotResourceGeneration(
    input: StartBotResourceGenerationRequest,
  ): Effect.Effect<
    StartBotResourceGenerationResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startImport(
    input: StartImportRequest,
  ): Effect.Effect<
    StartImportResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startTestExecution(
    input: StartTestExecutionRequest,
  ): Effect.Effect<
    StartTestExecutionResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startTestSetGeneration(
    input: StartTestSetGenerationRequest,
  ): Effect.Effect<
    StartTestSetGenerationResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopBotRecommendation(
    input: StopBotRecommendationRequest,
  ): Effect.Effect<
    StopBotRecommendationResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
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
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateBot(
    input: UpdateBotRequest,
  ): Effect.Effect<
    UpdateBotResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateBotAlias(
    input: UpdateBotAliasRequest,
  ): Effect.Effect<
    UpdateBotAliasResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateBotLocale(
    input: UpdateBotLocaleRequest,
  ): Effect.Effect<
    UpdateBotLocaleResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateBotRecommendation(
    input: UpdateBotRecommendationRequest,
  ): Effect.Effect<
    UpdateBotRecommendationResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateExport(
    input: UpdateExportRequest,
  ): Effect.Effect<
    UpdateExportResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateIntent(
    input: UpdateIntentRequest,
  ): Effect.Effect<
    UpdateIntentResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateResourcePolicy(
    input: UpdateResourcePolicyRequest,
  ): Effect.Effect<
    UpdateResourcePolicyResponse,
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSlot(
    input: UpdateSlotRequest,
  ): Effect.Effect<
    UpdateSlotResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSlotType(
    input: UpdateSlotTypeRequest,
  ): Effect.Effect<
    UpdateSlotTypeResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateTestSet(
    input: UpdateTestSetRequest,
  ): Effect.Effect<
    UpdateTestSetResponse,
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export interface ActiveContext {
  name: string;
}
export type ActiveContextList = Array<ActiveContext>;
export type ActiveContextName = string;

export interface AdvancedRecognitionSetting {
  audioRecognitionStrategy?: AudioRecognitionStrategy;
}
export interface AgentTurnResult {
  expectedAgentPrompt: string;
  actualAgentPrompt?: string;
  errorDetails?: ExecutionErrorDetails;
  actualElicitedSlot?: string;
  actualIntent?: string;
}
export interface AgentTurnSpecification {
  agentPrompt: string;
}
export interface AggregatedUtterancesFilter {
  name: AggregatedUtterancesFilterName;
  values: Array<string>;
  operator: AggregatedUtterancesFilterOperator;
}
export type AggregatedUtterancesFilterName = "Utterance";
export type AggregatedUtterancesFilterOperator = "CO" | "EQ";
export type AggregatedUtterancesFilters = Array<AggregatedUtterancesFilter>;
export type AggregatedUtterancesSortAttribute = "HitCount" | "MissedCount";
export interface AggregatedUtterancesSortBy {
  attribute: AggregatedUtterancesSortAttribute;
  order: SortOrder;
}
export interface AggregatedUtterancesSummary {
  utterance?: string;
  hitCount?: number;
  missedCount?: number;
  utteranceFirstRecordedInAggregationDuration?: Date | string;
  utteranceLastRecordedInAggregationDuration?: Date | string;
  containsDataFromDeletedResources?: boolean;
}
export type AggregatedUtterancesSummaryList =
  Array<AggregatedUtterancesSummary>;
export interface AllowedInputTypes {
  allowAudioInput: boolean;
  allowDTMFInput: boolean;
}
export type AmazonResourceName = string;

export type AnalyticsBinByList = Array<AnalyticsBinBySpecification>;
export type AnalyticsBinByName = "ConversationStartTime" | "UtteranceTimestamp";
export interface AnalyticsBinBySpecification {
  name: AnalyticsBinByName;
  interval: AnalyticsInterval;
  order?: AnalyticsSortOrder;
}
export interface AnalyticsBinKey {
  name?: AnalyticsBinByName;
  value?: number;
}
export type AnalyticsBinKeys = Array<AnalyticsBinKey>;
export type AnalyticsBinValue = number;

export type AnalyticsChannel = string;

export type AnalyticsCommonFilterName =
  | "BotAliasId"
  | "BotVersion"
  | "LocaleId"
  | "Modality"
  | "Channel";
export type AnalyticsFilterOperator = "EQ" | "GT" | "LT";
export type AnalyticsFilterValue = string;

export type AnalyticsFilterValues = Array<string>;
export type AnalyticsGroupByValue = string;

export type AnalyticsIntentField =
  | "IntentName"
  | "IntentEndState"
  | "IntentLevel";
export interface AnalyticsIntentFilter {
  name: AnalyticsIntentFilterName;
  operator: AnalyticsFilterOperator;
  values: Array<string>;
}
export type AnalyticsIntentFilterName =
  | "BotAliasId"
  | "BotVersion"
  | "LocaleId"
  | "Modality"
  | "Channel"
  | "SessionId"
  | "OriginatingRequestId"
  | "IntentName"
  | "IntentEndState";
export type AnalyticsIntentFilters = Array<AnalyticsIntentFilter>;
export interface AnalyticsIntentGroupByKey {
  name?: AnalyticsIntentField;
  value?: string;
}
export type AnalyticsIntentGroupByKeys = Array<AnalyticsIntentGroupByKey>;
export type AnalyticsIntentGroupByList =
  Array<AnalyticsIntentGroupBySpecification>;
export interface AnalyticsIntentGroupBySpecification {
  name: AnalyticsIntentField;
}
export interface AnalyticsIntentMetric {
  name: AnalyticsIntentMetricName;
  statistic: AnalyticsMetricStatistic;
  order?: AnalyticsSortOrder;
}
export type AnalyticsIntentMetricName =
  | "Count"
  | "Success"
  | "Failure"
  | "Switched"
  | "Dropped";
export interface AnalyticsIntentMetricResult {
  name?: AnalyticsIntentMetricName;
  statistic?: AnalyticsMetricStatistic;
  value?: number;
}
export type AnalyticsIntentMetricResults = Array<AnalyticsIntentMetricResult>;
export type AnalyticsIntentMetrics = Array<AnalyticsIntentMetric>;
export type AnalyticsIntentNodeSummaries = Array<AnalyticsIntentNodeSummary>;
export interface AnalyticsIntentNodeSummary {
  intentName?: string;
  intentPath?: string;
  intentCount?: number;
  intentLevel?: number;
  nodeType?: AnalyticsNodeType;
}
export interface AnalyticsIntentResult {
  binKeys?: Array<AnalyticsBinKey>;
  groupByKeys?: Array<AnalyticsIntentGroupByKey>;
  metricsResults?: Array<AnalyticsIntentMetricResult>;
}
export type AnalyticsIntentResults = Array<AnalyticsIntentResult>;
export type AnalyticsIntentStageField = "IntentStageName" | "SwitchedToIntent";
export interface AnalyticsIntentStageFilter {
  name: AnalyticsIntentStageFilterName;
  operator: AnalyticsFilterOperator;
  values: Array<string>;
}
export type AnalyticsIntentStageFilterName =
  | "BotAliasId"
  | "BotVersion"
  | "LocaleId"
  | "Modality"
  | "Channel"
  | "SessionId"
  | "OriginatingRequestId"
  | "IntentName"
  | "IntentStageName";
export type AnalyticsIntentStageFilters = Array<AnalyticsIntentStageFilter>;
export interface AnalyticsIntentStageGroupByKey {
  name?: AnalyticsIntentStageField;
  value?: string;
}
export type AnalyticsIntentStageGroupByKeys =
  Array<AnalyticsIntentStageGroupByKey>;
export type AnalyticsIntentStageGroupByList =
  Array<AnalyticsIntentStageGroupBySpecification>;
export interface AnalyticsIntentStageGroupBySpecification {
  name: AnalyticsIntentStageField;
}
export interface AnalyticsIntentStageMetric {
  name: AnalyticsIntentStageMetricName;
  statistic: AnalyticsMetricStatistic;
  order?: AnalyticsSortOrder;
}
export type AnalyticsIntentStageMetricName =
  | "Count"
  | "Success"
  | "Failed"
  | "Dropped"
  | "Retry";
export interface AnalyticsIntentStageMetricResult {
  name?: AnalyticsIntentStageMetricName;
  statistic?: AnalyticsMetricStatistic;
  value?: number;
}
export type AnalyticsIntentStageMetricResults =
  Array<AnalyticsIntentStageMetricResult>;
export type AnalyticsIntentStageMetrics = Array<AnalyticsIntentStageMetric>;
export interface AnalyticsIntentStageResult {
  binKeys?: Array<AnalyticsBinKey>;
  groupByKeys?: Array<AnalyticsIntentStageGroupByKey>;
  metricsResults?: Array<AnalyticsIntentStageMetricResult>;
}
export type AnalyticsIntentStageResults = Array<AnalyticsIntentStageResult>;
export type AnalyticsInterval = "OneHour" | "OneDay";
export type AnalyticsLongValue = number;

export type AnalyticsMetricStatistic = "Sum" | "Avg" | "Max";
export type AnalyticsMetricValue = number;

export type AnalyticsModality = "Speech" | "Text" | "DTMF" | "MultiMode";
export type AnalyticsNodeCount = number;

export type AnalyticsNodeLevel = number;

export type AnalyticsNodeType = "Inner" | "Exit";
export type AnalyticsOriginatingRequestId = string;

export type AnalyticsPath = string;

export interface AnalyticsPathFilter {
  name: AnalyticsCommonFilterName;
  operator: AnalyticsFilterOperator;
  values: Array<string>;
}
export type AnalyticsPathFilters = Array<AnalyticsPathFilter>;
export type AnalyticsSessionField = "ConversationEndState" | "LocaleId";
export interface AnalyticsSessionFilter {
  name: AnalyticsSessionFilterName;
  operator: AnalyticsFilterOperator;
  values: Array<string>;
}
export type AnalyticsSessionFilterName =
  | "BotAliasId"
  | "BotVersion"
  | "LocaleId"
  | "Modality"
  | "Channel"
  | "Duration"
  | "ConversationEndState"
  | "SessionId"
  | "OriginatingRequestId"
  | "IntentPath";
export type AnalyticsSessionFilters = Array<AnalyticsSessionFilter>;
export interface AnalyticsSessionGroupByKey {
  name?: AnalyticsSessionField;
  value?: string;
}
export type AnalyticsSessionGroupByKeys = Array<AnalyticsSessionGroupByKey>;
export type AnalyticsSessionGroupByList =
  Array<AnalyticsSessionGroupBySpecification>;
export interface AnalyticsSessionGroupBySpecification {
  name: AnalyticsSessionField;
}
export type AnalyticsSessionId = string;

export interface AnalyticsSessionMetric {
  name: AnalyticsSessionMetricName;
  statistic: AnalyticsMetricStatistic;
  order?: AnalyticsSortOrder;
}
export type AnalyticsSessionMetricName =
  | "Count"
  | "Success"
  | "Failure"
  | "Dropped"
  | "Duration"
  | "TurnsPerConversation"
  | "Concurrency";
export interface AnalyticsSessionMetricResult {
  name?: AnalyticsSessionMetricName;
  statistic?: AnalyticsMetricStatistic;
  value?: number;
}
export type AnalyticsSessionMetricResults = Array<AnalyticsSessionMetricResult>;
export type AnalyticsSessionMetrics = Array<AnalyticsSessionMetric>;
export interface AnalyticsSessionResult {
  binKeys?: Array<AnalyticsBinKey>;
  groupByKeys?: Array<AnalyticsSessionGroupByKey>;
  metricsResults?: Array<AnalyticsSessionMetricResult>;
}
export type AnalyticsSessionResults = Array<AnalyticsSessionResult>;
export type AnalyticsSessionSortByName =
  | "ConversationStartTime"
  | "NumberOfTurns"
  | "Duration";
export type AnalyticsSortOrder = "Ascending" | "Descending";
export interface AnalyticsUtteranceAttribute {
  name: AnalyticsUtteranceAttributeName;
}
export type AnalyticsUtteranceAttributeName = "LastUsedIntent";
export interface AnalyticsUtteranceAttributeResult {
  lastUsedIntent?: string;
}
export type AnalyticsUtteranceAttributeResults =
  Array<AnalyticsUtteranceAttributeResult>;
export type AnalyticsUtteranceAttributes = Array<AnalyticsUtteranceAttribute>;
export type AnalyticsUtteranceField = "UtteranceText" | "UtteranceState";
export interface AnalyticsUtteranceFilter {
  name: AnalyticsUtteranceFilterName;
  operator: AnalyticsFilterOperator;
  values: Array<string>;
}
export type AnalyticsUtteranceFilterName =
  | "BotAliasId"
  | "BotVersion"
  | "LocaleId"
  | "Modality"
  | "Channel"
  | "SessionId"
  | "OriginatingRequestId"
  | "UtteranceState"
  | "UtteranceText";
export type AnalyticsUtteranceFilters = Array<AnalyticsUtteranceFilter>;
export interface AnalyticsUtteranceGroupByKey {
  name?: AnalyticsUtteranceField;
  value?: string;
}
export type AnalyticsUtteranceGroupByKeys = Array<AnalyticsUtteranceGroupByKey>;
export type AnalyticsUtteranceGroupByList =
  Array<AnalyticsUtteranceGroupBySpecification>;
export interface AnalyticsUtteranceGroupBySpecification {
  name: AnalyticsUtteranceField;
}
export interface AnalyticsUtteranceMetric {
  name: AnalyticsUtteranceMetricName;
  statistic: AnalyticsMetricStatistic;
  order?: AnalyticsSortOrder;
}
export type AnalyticsUtteranceMetricName =
  | "Count"
  | "Missed"
  | "Detected"
  | "UtteranceTimestamp";
export interface AnalyticsUtteranceMetricResult {
  name?: AnalyticsUtteranceMetricName;
  statistic?: AnalyticsMetricStatistic;
  value?: number;
}
export type AnalyticsUtteranceMetricResults =
  Array<AnalyticsUtteranceMetricResult>;
export type AnalyticsUtteranceMetrics = Array<AnalyticsUtteranceMetric>;
export interface AnalyticsUtteranceResult {
  binKeys?: Array<AnalyticsBinKey>;
  groupByKeys?: Array<AnalyticsUtteranceGroupByKey>;
  metricsResults?: Array<AnalyticsUtteranceMetricResult>;
  attributeResults?: Array<AnalyticsUtteranceAttributeResult>;
}
export type AnalyticsUtteranceResults = Array<AnalyticsUtteranceResult>;
export type AnalyticsUtteranceSortByName = "UtteranceTimestamp";
export type AnswerField = string;

export interface AssociatedTranscript {
  transcript?: string;
}
export interface AssociatedTranscriptFilter {
  name: AssociatedTranscriptFilterName;
  values: Array<string>;
}
export type AssociatedTranscriptFilterName = "IntentId" | "SlotTypeId";
export type AssociatedTranscriptFilters = Array<AssociatedTranscriptFilter>;
export type AssociatedTranscriptList = Array<AssociatedTranscript>;
export type AttachmentTitle = string;

export type AttachmentUrl = string;

export interface AudioAndDTMFInputSpecification {
  startTimeoutMs: number;
  audioSpecification?: AudioSpecification;
  dtmfSpecification?: DTMFSpecification;
}
export type AudioFileS3Location = string;

export interface AudioLogDestination {
  s3Bucket: S3BucketLogDestination;
}
export interface AudioLogSetting {
  enabled: boolean;
  destination: AudioLogDestination;
  selectiveLoggingEnabled?: boolean;
}
export type AudioLogSettingsList = Array<AudioLogSetting>;
export type AudioRecognitionStrategy = "UseSlotValuesAsCustomVocabulary";
export interface AudioSpecification {
  maxLengthMs: number;
  endTimeoutMs: number;
}
export interface BatchCreateCustomVocabularyItemRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  customVocabularyItemList: Array<NewCustomVocabularyItem>;
}
export interface BatchCreateCustomVocabularyItemResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  errors?: Array<FailedCustomVocabularyItem>;
  resources?: Array<CustomVocabularyItem>;
}
export interface BatchDeleteCustomVocabularyItemRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  customVocabularyItemList: Array<CustomVocabularyEntryId>;
}
export interface BatchDeleteCustomVocabularyItemResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  errors?: Array<FailedCustomVocabularyItem>;
  resources?: Array<CustomVocabularyItem>;
}
export interface BatchUpdateCustomVocabularyItemRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  customVocabularyItemList: Array<CustomVocabularyItem>;
}
export interface BatchUpdateCustomVocabularyItemResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  errors?: Array<FailedCustomVocabularyItem>;
  resources?: Array<CustomVocabularyItem>;
}
export interface BedrockGuardrailConfiguration {
  identifier: string;
  version: string;
}
export type BedrockGuardrailIdentifier = string;

export type BedrockGuardrailVersion = string;

export type BedrockKnowledgeBaseArn = string;

export interface BedrockKnowledgeStoreConfiguration {
  bedrockKnowledgeBaseArn: string;
  exactResponse?: boolean;
  exactResponseFields?: BedrockKnowledgeStoreExactResponseFields;
}
export interface BedrockKnowledgeStoreExactResponseFields {
  answerField?: string;
}
export type BedrockModelArn = string;

export type BedrockModelCustomPrompt = string;

export interface BedrockModelSpecification {
  modelArn: string;
  guardrail?: BedrockGuardrailConfiguration;
  traceStatus?: BedrockTraceStatus;
  customPrompt?: string;
}
export type BedrockTraceStatus = "ENABLED" | "DISABLED";
export type LexModelsV2Boolean = boolean;

export interface BotAliasHistoryEvent {
  botVersion?: string;
  startDate?: Date | string;
  endDate?: Date | string;
}
export type BotAliasHistoryEventsList = Array<BotAliasHistoryEvent>;
export type BotAliasId = string;

export interface BotAliasLocaleSettings {
  enabled: boolean;
  codeHookSpecification?: CodeHookSpecification;
}
export type BotAliasLocaleSettingsMap = Record<string, BotAliasLocaleSettings>;
export type BotAliasName = string;

export interface BotAliasReplicaSummary {
  botAliasId?: string;
  botAliasReplicationStatus?: BotAliasReplicationStatus;
  botVersion?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  failureReasons?: Array<string>;
}
export type BotAliasReplicaSummaryList = Array<BotAliasReplicaSummary>;
export type BotAliasReplicationStatus =
  | "Creating"
  | "Updating"
  | "Available"
  | "Deleting"
  | "Failed";
export type BotAliasStatus = "Creating" | "Available" | "Deleting" | "Failed";
export interface BotAliasSummary {
  botAliasId?: string;
  botAliasName?: string;
  description?: string;
  botVersion?: string;
  botAliasStatus?: BotAliasStatus;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export type BotAliasSummaryList = Array<BotAliasSummary>;
export interface BotAliasTestExecutionTarget {
  botId: string;
  botAliasId: string;
  localeId: string;
}
export interface BotExportSpecification {
  botId: string;
  botVersion: string;
}
export interface BotFilter {
  name: BotFilterName;
  values: Array<string>;
  operator: BotFilterOperator;
}
export type BotFilterName = "BotName" | "BotType";
export type BotFilterOperator = "CO" | "EQ" | "NE";
export type BotFilters = Array<BotFilter>;
export interface BotImportSpecification {
  botName: string;
  roleArn: string;
  dataPrivacy: DataPrivacy;
  errorLogSettings?: ErrorLogSettings;
  idleSessionTTLInSeconds?: number;
  botTags?: Record<string, string>;
  testBotAliasTags?: Record<string, string>;
}
export interface BotLocaleExportSpecification {
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface BotLocaleFilter {
  name: BotLocaleFilterName;
  values: Array<string>;
  operator: BotLocaleFilterOperator;
}
export type BotLocaleFilterName = "BotLocaleName";
export type BotLocaleFilterOperator = "CO" | "EQ";
export type BotLocaleFilters = Array<BotLocaleFilter>;
export interface BotLocaleHistoryEvent {
  event: string;
  eventDate: Date | string;
}
export type BotLocaleHistoryEventDescription = string;

export type BotLocaleHistoryEventsList = Array<BotLocaleHistoryEvent>;
export interface BotLocaleImportSpecification {
  botId: string;
  botVersion: string;
  localeId: string;
  nluIntentConfidenceThreshold?: number;
  voiceSettings?: VoiceSettings;
}
export type BotLocaleSortAttribute = "BotLocaleName";
export interface BotLocaleSortBy {
  attribute: BotLocaleSortAttribute;
  order: SortOrder;
}
export type BotLocaleStatus =
  | "Creating"
  | "Building"
  | "Built"
  | "ReadyExpressTesting"
  | "Failed"
  | "Deleting"
  | "NotBuilt"
  | "Importing"
  | "Processing";
export interface BotLocaleSummary {
  localeId?: string;
  localeName?: string;
  description?: string;
  botLocaleStatus?: BotLocaleStatus;
  lastUpdatedDateTime?: Date | string;
  lastBuildSubmittedDateTime?: Date | string;
}
export type BotLocaleSummaryList = Array<BotLocaleSummary>;
export interface BotMember {
  botMemberId: string;
  botMemberName: string;
  botMemberAliasId: string;
  botMemberAliasName: string;
  botMemberVersion: string;
}
export type BotMembers = Array<BotMember>;
export interface BotRecommendationResults {
  botLocaleExportUrl?: string;
  associatedTranscriptsUrl?: string;
  statistics?: BotRecommendationResultStatistics;
}
export interface BotRecommendationResultStatistics {
  intents?: IntentStatistics;
  slotTypes?: SlotTypeStatistics;
}
export type BotRecommendationStatus =
  | "Processing"
  | "Deleting"
  | "Deleted"
  | "Downloading"
  | "Updating"
  | "Available"
  | "Failed"
  | "Stopping"
  | "Stopped";
export interface BotRecommendationSummary {
  botRecommendationStatus: BotRecommendationStatus;
  botRecommendationId: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export type BotRecommendationSummaryList = Array<BotRecommendationSummary>;
export type BotReplicaStatus = "Enabling" | "Enabled" | "Deleting" | "Failed";
export interface BotReplicaSummary {
  replicaRegion?: string;
  creationDateTime?: Date | string;
  botReplicaStatus?: BotReplicaStatus;
  failureReasons?: Array<string>;
}
export type BotReplicaSummaryList = Array<BotReplicaSummary>;
export type BotSortAttribute = "BotName";
export interface BotSortBy {
  attribute: BotSortAttribute;
  order: SortOrder;
}
export type BotStatus =
  | "Creating"
  | "Available"
  | "Inactive"
  | "Deleting"
  | "Failed"
  | "Versioning"
  | "Importing"
  | "Updating";
export interface BotSummary {
  botId?: string;
  botName?: string;
  description?: string;
  botStatus?: BotStatus;
  latestBotVersion?: string;
  lastUpdatedDateTime?: Date | string;
  botType?: BotType;
}
export type BotSummaryList = Array<BotSummary>;
export type BotType = "Bot" | "BotNetwork";
export type BotVersion = string;

export interface BotVersionLocaleDetails {
  sourceBotVersion: string;
}
export type BotVersionLocaleSpecification = Record<
  string,
  BotVersionLocaleDetails
>;
export type BotVersionReplicaSortAttribute = "BotVersion";
export interface BotVersionReplicaSortBy {
  attribute: BotVersionReplicaSortAttribute;
  order: SortOrder;
}
export interface BotVersionReplicaSummary {
  botVersion?: string;
  botVersionReplicationStatus?: BotVersionReplicationStatus;
  creationDateTime?: Date | string;
  failureReasons?: Array<string>;
}
export type BotVersionReplicaSummaryList = Array<BotVersionReplicaSummary>;
export type BotVersionReplicationStatus =
  | "Creating"
  | "Available"
  | "Deleting"
  | "Failed";
export type BotVersionSortAttribute = "BotVersion";
export interface BotVersionSortBy {
  attribute: BotVersionSortAttribute;
  order: SortOrder;
}
export interface BotVersionSummary {
  botName?: string;
  botVersion?: string;
  description?: string;
  botStatus?: BotStatus;
  creationDateTime?: Date | string;
}
export type BotVersionSummaryList = Array<BotVersionSummary>;
export type BoxedBoolean = boolean;

export interface BuildBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface BuildBotLocaleResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botLocaleStatus?: BotLocaleStatus;
  lastBuildSubmittedDateTime?: Date | string;
}
export interface BuildtimeSettings {
  descriptiveBotBuilder?: DescriptiveBotBuilderSpecification;
  sampleUtteranceGeneration?: SampleUtteranceGenerationSpecification;
}
export type BuiltInIntentSortAttribute = "IntentSignature";
export interface BuiltInIntentSortBy {
  attribute: BuiltInIntentSortAttribute;
  order: SortOrder;
}
export interface BuiltInIntentSummary {
  intentSignature?: string;
  description?: string;
}
export type BuiltInIntentSummaryList = Array<BuiltInIntentSummary>;
export type BuiltInOrCustomSlotTypeId = string;

export type BuiltInSlotTypeSortAttribute = "SlotTypeSignature";
export interface BuiltInSlotTypeSortBy {
  attribute: BuiltInSlotTypeSortAttribute;
  order: SortOrder;
}
export interface BuiltInSlotTypeSummary {
  slotTypeSignature?: string;
  description?: string;
}
export type BuiltInSlotTypeSummaryList = Array<BuiltInSlotTypeSummary>;
export type BuiltInsMaxResults = number;

export interface Button {
  text: string;
  value: string;
}
export type ButtonsList = Array<Button>;
export type ButtonText = string;

export type ButtonValue = string;

export type ChildDirected = boolean;

export type CloudWatchLogGroupArn = string;

export interface CloudWatchLogGroupLogDestination {
  cloudWatchLogGroupArn: string;
  logPrefix: string;
}
export type CodeHookInterfaceVersion = string;

export interface CodeHookSpecification {
  lambdaCodeHook: LambdaCodeHook;
}
export interface CompositeSlotTypeSetting {
  subSlots?: Array<SubSlotTypeComposition>;
}
export interface Condition {
  expressionString: string;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  nextStep: DialogState;
  response?: ResponseSpecification;
}
export type ConditionalBranches = Array<ConditionalBranch>;
export interface ConditionalSpecification {
  active: boolean;
  conditionalBranches: Array<ConditionalBranch>;
  defaultBranch: DefaultConditionalBranch;
}
export type ConditionExpression = string;

export type ConditionKey = string;

export type ConditionKeyValueMap = Record<string, string>;
export type ConditionMap = Record<string, Record<string, string>>;
export type ConditionOperator = string;

export type ConditionValue = string;

export type ConfidenceThreshold = number;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ContextTimeToLiveInSeconds = number;

export type ContextTurnsToLive = number;

export type ConversationEndState = "Success" | "Failure" | "Dropped";
export interface ConversationLevelIntentClassificationResultItem {
  intentName: string;
  matchResult: TestResultMatchStatus;
}
export type ConversationLevelIntentClassificationResults =
  Array<ConversationLevelIntentClassificationResultItem>;
export interface ConversationLevelResultDetail {
  endToEndResult: TestResultMatchStatus;
  speechTranscriptionResult?: TestResultMatchStatus;
}
export interface ConversationLevelSlotResolutionResultItem {
  intentName: string;
  slotName: string;
  matchResult: TestResultMatchStatus;
}
export type ConversationLevelSlotResolutionResults =
  Array<ConversationLevelSlotResolutionResultItem>;
export interface ConversationLevelTestResultItem {
  conversationId: string;
  endToEndResult: TestResultMatchStatus;
  speechTranscriptionResult?: TestResultMatchStatus;
  intentClassificationResults: Array<ConversationLevelIntentClassificationResultItem>;
  slotResolutionResults: Array<ConversationLevelSlotResolutionResultItem>;
}
export type ConversationLevelTestResultItemList =
  Array<ConversationLevelTestResultItem>;
export interface ConversationLevelTestResults {
  items: Array<ConversationLevelTestResultItem>;
}
export interface ConversationLevelTestResultsFilterBy {
  endToEndResult?: TestResultMatchStatus;
}
export interface ConversationLogsDataSource {
  botId: string;
  botAliasId: string;
  localeId: string;
  filter: ConversationLogsDataSourceFilterBy;
}
export interface ConversationLogsDataSourceFilterBy {
  startTime: Date | string;
  endTime: Date | string;
  inputMode: ConversationLogsInputModeFilter;
}
export interface ConversationLogSettings {
  textLogSettings?: Array<TextLogSetting>;
  audioLogSettings?: Array<AudioLogSetting>;
}
export type ConversationLogsInputModeFilter = "Speech" | "Text";
export type Count = number;

export interface CreateBotAliasRequest {
  botAliasName: string;
  description?: string;
  botVersion?: string;
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  botId: string;
  tags?: Record<string, string>;
}
export interface CreateBotAliasResponse {
  botAliasId?: string;
  botAliasName?: string;
  description?: string;
  botVersion?: string;
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  botAliasStatus?: BotAliasStatus;
  botId?: string;
  creationDateTime?: Date | string;
  tags?: Record<string, string>;
}
export interface CreateBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  description?: string;
  nluIntentConfidenceThreshold: number;
  voiceSettings?: VoiceSettings;
  generativeAISettings?: GenerativeAISettings;
}
export interface CreateBotLocaleResponse {
  botId?: string;
  botVersion?: string;
  localeName?: string;
  localeId?: string;
  description?: string;
  nluIntentConfidenceThreshold?: number;
  voiceSettings?: VoiceSettings;
  botLocaleStatus?: BotLocaleStatus;
  creationDateTime?: Date | string;
  generativeAISettings?: GenerativeAISettings;
}
export interface CreateBotReplicaRequest {
  botId: string;
  replicaRegion: string;
}
export interface CreateBotReplicaResponse {
  botId?: string;
  replicaRegion?: string;
  sourceRegion?: string;
  creationDateTime?: Date | string;
  botReplicaStatus?: BotReplicaStatus;
}
export interface CreateBotRequest {
  botName: string;
  description?: string;
  roleArn: string;
  dataPrivacy: DataPrivacy;
  idleSessionTTLInSeconds: number;
  botTags?: Record<string, string>;
  testBotAliasTags?: Record<string, string>;
  botType?: BotType;
  botMembers?: Array<BotMember>;
  errorLogSettings?: ErrorLogSettings;
}
export interface CreateBotResponse {
  botId?: string;
  botName?: string;
  description?: string;
  roleArn?: string;
  dataPrivacy?: DataPrivacy;
  idleSessionTTLInSeconds?: number;
  botStatus?: BotStatus;
  creationDateTime?: Date | string;
  botTags?: Record<string, string>;
  testBotAliasTags?: Record<string, string>;
  botType?: BotType;
  botMembers?: Array<BotMember>;
  errorLogSettings?: ErrorLogSettings;
}
export interface CreateBotVersionRequest {
  botId: string;
  description?: string;
  botVersionLocaleSpecification: Record<string, BotVersionLocaleDetails>;
}
export interface CreateBotVersionResponse {
  botId?: string;
  description?: string;
  botVersion?: string;
  botVersionLocaleSpecification?: Record<string, BotVersionLocaleDetails>;
  botStatus?: BotStatus;
  creationDateTime?: Date | string;
}
export type CreateCustomVocabularyItemsList = Array<NewCustomVocabularyItem>;
export interface CreateExportRequest {
  resourceSpecification: ExportResourceSpecification;
  fileFormat: ImportExportFileFormat;
  filePassword?: string;
}
export interface CreateExportResponse {
  exportId?: string;
  resourceSpecification?: ExportResourceSpecification;
  fileFormat?: ImportExportFileFormat;
  exportStatus?: ExportStatus;
  creationDateTime?: Date | string;
}
export interface CreateIntentRequest {
  intentName: string;
  description?: string;
  parentIntentSignature?: string;
  sampleUtterances?: Array<SampleUtterance>;
  dialogCodeHook?: DialogCodeHookSettings;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;
  intentConfirmationSetting?: IntentConfirmationSetting;
  intentClosingSetting?: IntentClosingSetting;
  inputContexts?: Array<InputContext>;
  outputContexts?: Array<OutputContext>;
  kendraConfiguration?: KendraConfiguration;
  botId: string;
  botVersion: string;
  localeId: string;
  initialResponseSetting?: InitialResponseSetting;
  qnAIntentConfiguration?: QnAIntentConfiguration;
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration;
}
export interface CreateIntentResponse {
  intentId?: string;
  intentName?: string;
  description?: string;
  parentIntentSignature?: string;
  sampleUtterances?: Array<SampleUtterance>;
  dialogCodeHook?: DialogCodeHookSettings;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;
  intentConfirmationSetting?: IntentConfirmationSetting;
  intentClosingSetting?: IntentClosingSetting;
  inputContexts?: Array<InputContext>;
  outputContexts?: Array<OutputContext>;
  kendraConfiguration?: KendraConfiguration;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  creationDateTime?: Date | string;
  initialResponseSetting?: InitialResponseSetting;
  qnAIntentConfiguration?: QnAIntentConfiguration;
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration;
}
export interface CreateResourcePolicyRequest {
  resourceArn: string;
  policy: string;
}
export interface CreateResourcePolicyResponse {
  resourceArn?: string;
  revisionId?: string;
}
export interface CreateResourcePolicyStatementRequest {
  resourceArn: string;
  statementId: string;
  effect: Effect;
  principal: Array<Principal>;
  action: Array<string>;
  condition?: Record<string, Record<string, string>>;
  expectedRevisionId?: string;
}
export interface CreateResourcePolicyStatementResponse {
  resourceArn?: string;
  revisionId?: string;
}
export interface CreateSlotRequest {
  slotName: string;
  description?: string;
  slotTypeId?: string;
  valueElicitationSetting: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
}
export interface CreateSlotResponse {
  slotId?: string;
  slotName?: string;
  description?: string;
  slotTypeId?: string;
  valueElicitationSetting?: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  intentId?: string;
  creationDateTime?: Date | string;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
}
export interface CreateSlotTypeRequest {
  slotTypeName: string;
  description?: string;
  slotTypeValues?: Array<SlotTypeValue>;
  valueSelectionSetting?: SlotValueSelectionSetting;
  parentSlotTypeSignature?: string;
  botId: string;
  botVersion: string;
  localeId: string;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}
export interface CreateSlotTypeResponse {
  slotTypeId?: string;
  slotTypeName?: string;
  description?: string;
  slotTypeValues?: Array<SlotTypeValue>;
  valueSelectionSetting?: SlotValueSelectionSetting;
  parentSlotTypeSignature?: string;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  creationDateTime?: Date | string;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}
export interface CreateTestSetDiscrepancyReportRequest {
  testSetId: string;
  target: TestSetDiscrepancyReportResourceTarget;
}
export interface CreateTestSetDiscrepancyReportResponse {
  testSetDiscrepancyReportId?: string;
  creationDateTime?: Date | string;
  testSetId?: string;
  target?: TestSetDiscrepancyReportResourceTarget;
}
export interface CreateUploadUrlRequest {}
export interface CreateUploadUrlResponse {
  importId?: string;
  uploadUrl?: string;
}
export interface CustomPayload {
  value: string;
}
export type CustomPayloadValue = string;

export interface CustomVocabularyEntryId {
  itemId: string;
}
export interface CustomVocabularyExportSpecification {
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface CustomVocabularyImportSpecification {
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface CustomVocabularyItem {
  itemId: string;
  phrase: string;
  weight?: number;
  displayAs?: string;
}
export type CustomVocabularyItems = Array<CustomVocabularyItem>;
export type CustomVocabularyStatus =
  | "Ready"
  | "Deleting"
  | "Exporting"
  | "Importing"
  | "Creating";
export interface DataPrivacy {
  childDirected: boolean;
}
export interface DataSourceConfiguration {
  opensearchConfiguration?: OpensearchConfiguration;
  kendraConfiguration?: QnAKendraConfiguration;
  bedrockKnowledgeStoreConfiguration?: BedrockKnowledgeStoreConfiguration;
}
export interface DateRangeFilter {
  startDateTime: Date | string;
  endDateTime: Date | string;
}
export interface DefaultConditionalBranch {
  nextStep?: DialogState;
  response?: ResponseSpecification;
}
export interface DeleteBotAliasRequest {
  botAliasId: string;
  botId: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteBotAliasResponse {
  botAliasId?: string;
  botId?: string;
  botAliasStatus?: BotAliasStatus;
}
export interface DeleteBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface DeleteBotLocaleResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botLocaleStatus?: BotLocaleStatus;
}
export interface DeleteBotReplicaRequest {
  botId: string;
  replicaRegion: string;
}
export interface DeleteBotReplicaResponse {
  botId?: string;
  replicaRegion?: string;
  botReplicaStatus?: BotReplicaStatus;
}
export interface DeleteBotRequest {
  botId: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteBotResponse {
  botId?: string;
  botStatus?: BotStatus;
}
export interface DeleteBotVersionRequest {
  botId: string;
  botVersion: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteBotVersionResponse {
  botId?: string;
  botVersion?: string;
  botStatus?: BotStatus;
}
export type DeleteCustomVocabularyItemsList = Array<CustomVocabularyEntryId>;
export interface DeleteCustomVocabularyRequest {
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface DeleteCustomVocabularyResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  customVocabularyStatus?: CustomVocabularyStatus;
}
export interface DeleteExportRequest {
  exportId: string;
}
export interface DeleteExportResponse {
  exportId?: string;
  exportStatus?: ExportStatus;
}
export interface DeleteImportRequest {
  importId: string;
}
export interface DeleteImportResponse {
  importId?: string;
  importStatus?: ImportStatus;
}
export interface DeleteIntentRequest {
  intentId: string;
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface DeleteResourcePolicyRequest {
  resourceArn: string;
  expectedRevisionId?: string;
}
export interface DeleteResourcePolicyResponse {
  resourceArn?: string;
  revisionId?: string;
}
export interface DeleteResourcePolicyStatementRequest {
  resourceArn: string;
  statementId: string;
  expectedRevisionId?: string;
}
export interface DeleteResourcePolicyStatementResponse {
  resourceArn?: string;
  revisionId?: string;
}
export interface DeleteSlotRequest {
  slotId: string;
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
}
export interface DeleteSlotTypeRequest {
  slotTypeId: string;
  botId: string;
  botVersion: string;
  localeId: string;
  skipResourceInUseCheck?: boolean;
}
export interface DeleteTestSetRequest {
  testSetId: string;
}
export interface DeleteUtterancesRequest {
  botId: string;
  localeId?: string;
  sessionId?: string;
}
export interface DeleteUtterancesResponse {}
export interface DescribeBotAliasRequest {
  botAliasId: string;
  botId: string;
}
export interface DescribeBotAliasResponse {
  botAliasId?: string;
  botAliasName?: string;
  description?: string;
  botVersion?: string;
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  botAliasHistoryEvents?: Array<BotAliasHistoryEvent>;
  botAliasStatus?: BotAliasStatus;
  botId?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  parentBotNetworks?: Array<ParentBotNetwork>;
}
export interface DescribeBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface DescribeBotLocaleResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  localeName?: string;
  description?: string;
  nluIntentConfidenceThreshold?: number;
  voiceSettings?: VoiceSettings;
  intentsCount?: number;
  slotTypesCount?: number;
  botLocaleStatus?: BotLocaleStatus;
  failureReasons?: Array<string>;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  lastBuildSubmittedDateTime?: Date | string;
  botLocaleHistoryEvents?: Array<BotLocaleHistoryEvent>;
  recommendedActions?: Array<string>;
  generativeAISettings?: GenerativeAISettings;
}
export interface DescribeBotRecommendationRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  botRecommendationId: string;
}
export interface DescribeBotRecommendationResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationStatus?: BotRecommendationStatus;
  botRecommendationId?: string;
  failureReasons?: Array<string>;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  transcriptSourceSetting?: TranscriptSourceSetting;
  encryptionSetting?: EncryptionSetting;
  botRecommendationResults?: BotRecommendationResults;
}
export interface DescribeBotReplicaRequest {
  botId: string;
  replicaRegion: string;
}
export interface DescribeBotReplicaResponse {
  botId?: string;
  replicaRegion?: string;
  sourceRegion?: string;
  creationDateTime?: Date | string;
  botReplicaStatus?: BotReplicaStatus;
  failureReasons?: Array<string>;
}
export interface DescribeBotRequest {
  botId: string;
}
export interface DescribeBotResourceGenerationRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  generationId: string;
}
export interface DescribeBotResourceGenerationResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  generationId?: string;
  failureReasons?: Array<string>;
  generationStatus?: GenerationStatus;
  generationInputPrompt?: string;
  generatedBotLocaleUrl?: string;
  creationDateTime?: Date | string;
  modelArn?: string;
  lastUpdatedDateTime?: Date | string;
}
export interface DescribeBotResponse {
  botId?: string;
  botName?: string;
  description?: string;
  roleArn?: string;
  dataPrivacy?: DataPrivacy;
  idleSessionTTLInSeconds?: number;
  botStatus?: BotStatus;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  botType?: BotType;
  botMembers?: Array<BotMember>;
  failureReasons?: Array<string>;
  errorLogSettings?: ErrorLogSettings;
}
export interface DescribeBotVersionRequest {
  botId: string;
  botVersion: string;
}
export interface DescribeBotVersionResponse {
  botId?: string;
  botName?: string;
  botVersion?: string;
  description?: string;
  roleArn?: string;
  dataPrivacy?: DataPrivacy;
  idleSessionTTLInSeconds?: number;
  botStatus?: BotStatus;
  failureReasons?: Array<string>;
  creationDateTime?: Date | string;
  parentBotNetworks?: Array<ParentBotNetwork>;
  botType?: BotType;
  botMembers?: Array<BotMember>;
}
export interface DescribeCustomVocabularyMetadataRequest {
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface DescribeCustomVocabularyMetadataResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  customVocabularyStatus?: CustomVocabularyStatus;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export interface DescribeExportRequest {
  exportId: string;
}
export interface DescribeExportResponse {
  exportId?: string;
  resourceSpecification?: ExportResourceSpecification;
  fileFormat?: ImportExportFileFormat;
  exportStatus?: ExportStatus;
  failureReasons?: Array<string>;
  downloadUrl?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export interface DescribeImportRequest {
  importId: string;
}
export interface DescribeImportResponse {
  importId?: string;
  resourceSpecification?: ImportResourceSpecification;
  importedResourceId?: string;
  importedResourceName?: string;
  mergeStrategy?: MergeStrategy;
  importStatus?: ImportStatus;
  failureReasons?: Array<string>;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export interface DescribeIntentRequest {
  intentId: string;
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface DescribeIntentResponse {
  intentId?: string;
  intentName?: string;
  description?: string;
  parentIntentSignature?: string;
  sampleUtterances?: Array<SampleUtterance>;
  dialogCodeHook?: DialogCodeHookSettings;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;
  slotPriorities?: Array<SlotPriority>;
  intentConfirmationSetting?: IntentConfirmationSetting;
  intentClosingSetting?: IntentClosingSetting;
  inputContexts?: Array<InputContext>;
  outputContexts?: Array<OutputContext>;
  kendraConfiguration?: KendraConfiguration;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  initialResponseSetting?: InitialResponseSetting;
  qnAIntentConfiguration?: QnAIntentConfiguration;
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration;
}
export interface DescribeResourcePolicyRequest {
  resourceArn: string;
}
export interface DescribeResourcePolicyResponse {
  resourceArn?: string;
  policy?: string;
  revisionId?: string;
}
export interface DescribeSlotRequest {
  slotId: string;
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
}
export interface DescribeSlotResponse {
  slotId?: string;
  slotName?: string;
  description?: string;
  slotTypeId?: string;
  valueElicitationSetting?: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  intentId?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
}
export interface DescribeSlotTypeRequest {
  slotTypeId: string;
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface DescribeSlotTypeResponse {
  slotTypeId?: string;
  slotTypeName?: string;
  description?: string;
  slotTypeValues?: Array<SlotTypeValue>;
  valueSelectionSetting?: SlotValueSelectionSetting;
  parentSlotTypeSignature?: string;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}
export interface DescribeTestExecutionRequest {
  testExecutionId: string;
}
export interface DescribeTestExecutionResponse {
  testExecutionId?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  testExecutionStatus?: TestExecutionStatus;
  testSetId?: string;
  testSetName?: string;
  target?: TestExecutionTarget;
  apiMode?: TestExecutionApiMode;
  testExecutionModality?: TestExecutionModality;
  failureReasons?: Array<string>;
}
export interface DescribeTestSetDiscrepancyReportRequest {
  testSetDiscrepancyReportId: string;
}
export interface DescribeTestSetDiscrepancyReportResponse {
  testSetDiscrepancyReportId?: string;
  testSetId?: string;
  creationDateTime?: Date | string;
  target?: TestSetDiscrepancyReportResourceTarget;
  testSetDiscrepancyReportStatus?: TestSetDiscrepancyReportStatus;
  lastUpdatedDataTime?: Date | string;
  testSetDiscrepancyTopErrors?: TestSetDiscrepancyErrors;
  testSetDiscrepancyRawOutputUrl?: string;
  failureReasons?: Array<string>;
}
export interface DescribeTestSetGenerationRequest {
  testSetGenerationId: string;
}
export interface DescribeTestSetGenerationResponse {
  testSetGenerationId?: string;
  testSetGenerationStatus?: TestSetGenerationStatus;
  failureReasons?: Array<string>;
  testSetId?: string;
  testSetName?: string;
  description?: string;
  storageLocation?: TestSetStorageLocation;
  generationDataSource?: TestSetGenerationDataSource;
  roleArn?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export interface DescribeTestSetRequest {
  testSetId: string;
}
export interface DescribeTestSetResponse {
  testSetId?: string;
  testSetName?: string;
  description?: string;
  modality?: TestSetModality;
  status?: TestSetStatus;
  roleArn?: string;
  numTurns?: number;
  storageLocation?: TestSetStorageLocation;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export type Description = string;

export interface DescriptiveBotBuilderSpecification {
  enabled: boolean;
  bedrockModelSpecification?: BedrockModelSpecification;
}
export interface DialogAction {
  type: DialogActionType;
  slotToElicit?: string;
  suppressNextMessage?: boolean;
}
export type DialogActionType =
  | "ElicitIntent"
  | "StartIntent"
  | "ElicitSlot"
  | "EvaluateConditional"
  | "InvokeDialogCodeHook"
  | "ConfirmIntent"
  | "FulfillIntent"
  | "CloseIntent"
  | "EndConversation";
export interface DialogCodeHookInvocationSetting {
  enableCodeHookInvocation: boolean;
  active: boolean;
  invocationLabel?: string;
  postCodeHookSpecification: PostDialogCodeHookInvocationSpecification;
}
export interface DialogCodeHookSettings {
  enabled: boolean;
}
export interface DialogState {
  dialogAction?: DialogAction;
  intent?: IntentOverride;
  sessionAttributes?: Record<string, string>;
}
export type DomainEndpoint = string;

export type DraftBotVersion = string;

export type DTMFCharacter = string;

export interface DTMFSpecification {
  maxLength: number;
  endTimeoutMs: number;
  deletionCharacter: string;
  endCharacter: string;
}
export type Effect = "Allow" | "Deny";
export interface ElicitationCodeHookInvocationSetting {
  enableCodeHookInvocation: boolean;
  invocationLabel?: string;
}
export type Enabled = boolean;

export interface EncryptionSetting {
  kmsKeyArn?: string;
  botLocaleExportPassword?: string;
  associatedTranscriptsPassword?: string;
}
export type ErrorCode =
  | "DUPLICATE_INPUT"
  | "RESOURCE_DOES_NOT_EXIST"
  | "RESOURCE_ALREADY_EXISTS"
  | "INTERNAL_SERVER_FAILURE";
export interface ErrorLogSettings {
  enabled: boolean;
}
export type ErrorMessage = string;

export interface ExactResponseFields {
  questionField: string;
  answerField: string;
}
export type ExceptionMessage = string;

export interface ExecutionErrorDetails {
  errorCode: string;
  errorMessage: string;
}
export interface ExportFilter {
  name: ExportFilterName;
  values: Array<string>;
  operator: ExportFilterOperator;
}
export type ExportFilterName = "ExportResourceType";
export type ExportFilterOperator = "CO" | "EQ";
export type ExportFilters = Array<ExportFilter>;
export interface ExportResourceSpecification {
  botExportSpecification?: BotExportSpecification;
  botLocaleExportSpecification?: BotLocaleExportSpecification;
  customVocabularyExportSpecification?: CustomVocabularyExportSpecification;
  testSetExportSpecification?: TestSetExportSpecification;
}
export type ExportSortAttribute = "LastUpdatedDateTime";
export interface ExportSortBy {
  attribute: ExportSortAttribute;
  order: SortOrder;
}
export type ExportStatus = "InProgress" | "Completed" | "Failed" | "Deleting";
export interface ExportSummary {
  exportId?: string;
  resourceSpecification?: ExportResourceSpecification;
  fileFormat?: ImportExportFileFormat;
  exportStatus?: ExportStatus;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export type ExportSummaryList = Array<ExportSummary>;
export interface ExternalSourceSetting {
  grammarSlotTypeSetting?: GrammarSlotTypeSetting;
}
export interface FailedCustomVocabularyItem {
  itemId?: string;
  errorMessage?: string;
  errorCode?: ErrorCode;
}
export type FailedCustomVocabularyItems = Array<FailedCustomVocabularyItem>;
export type FailureReason = string;

export type FailureReasons = Array<string>;
export type FilePassword = string;

export type FilterValue = string;

export type FilterValues = Array<string>;
export interface FulfillmentCodeHookSettings {
  enabled: boolean;
  postFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification;
  fulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification;
  active?: boolean;
}
export type FulfillmentStartResponseDelay = number;

export interface FulfillmentStartResponseSpecification {
  delayInSeconds: number;
  messageGroups: Array<MessageGroup>;
  allowInterrupt?: boolean;
}
export type FulfillmentTimeout = number;

export type FulfillmentUpdateResponseFrequency = number;

export interface FulfillmentUpdateResponseSpecification {
  frequencyInSeconds: number;
  messageGroups: Array<MessageGroup>;
  allowInterrupt?: boolean;
}
export interface FulfillmentUpdatesSpecification {
  active: boolean;
  startResponse?: FulfillmentStartResponseSpecification;
  updateResponse?: FulfillmentUpdateResponseSpecification;
  timeoutInSeconds?: number;
}
export interface GenerateBotElementRequest {
  intentId: string;
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface GenerateBotElementResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  intentId?: string;
  sampleUtterances?: Array<SampleUtterance>;
}
export type GenerationInput = string;

export interface GenerationSortBy {
  attribute: GenerationSortByAttribute;
  order: SortOrder;
}
export type GenerationSortByAttribute = "creationStartTime" | "lastUpdatedTime";
export type GenerationStatus = "Failed" | "Complete" | "InProgress";
export interface GenerationSummary {
  generationId?: string;
  generationStatus?: GenerationStatus;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export type GenerationSummaryList = Array<GenerationSummary>;
export interface GenerativeAISettings {
  runtimeSettings?: RuntimeSettings;
  buildtimeSettings?: BuildtimeSettings;
}
export interface GetTestExecutionArtifactsUrlRequest {
  testExecutionId: string;
}
export interface GetTestExecutionArtifactsUrlResponse {
  testExecutionId?: string;
  downloadArtifactsUrl?: string;
}
export interface GrammarSlotTypeSetting {
  source?: GrammarSlotTypeSource;
}
export interface GrammarSlotTypeSource {
  s3BucketName: string;
  s3ObjectKey: string;
  kmsKeyArn?: string;
}
export type HitCount = number;

export type Id = string;

export interface ImageResponseCard {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  buttons?: Array<Button>;
}
export type ImportedResourceId = string;

export type ImportExportFileFormat = "LexJson" | "TSV" | "CSV";
export type ImportExportFilePassword = string;

export interface ImportFilter {
  name: ImportFilterName;
  values: Array<string>;
  operator: ImportFilterOperator;
}
export type ImportFilterName = "ImportResourceType";
export type ImportFilterOperator = "CO" | "EQ";
export type ImportFilters = Array<ImportFilter>;
export interface ImportResourceSpecification {
  botImportSpecification?: BotImportSpecification;
  botLocaleImportSpecification?: BotLocaleImportSpecification;
  customVocabularyImportSpecification?: CustomVocabularyImportSpecification;
  testSetImportResourceSpecification?: TestSetImportResourceSpecification;
}
export type ImportResourceType =
  | "Bot"
  | "BotLocale"
  | "CustomVocabulary"
  | "TestSet";
export type ImportSortAttribute = "LastUpdatedDateTime";
export interface ImportSortBy {
  attribute: ImportSortAttribute;
  order: SortOrder;
}
export type ImportStatus = "InProgress" | "Completed" | "Failed" | "Deleting";
export interface ImportSummary {
  importId?: string;
  importedResourceId?: string;
  importedResourceName?: string;
  importStatus?: ImportStatus;
  mergeStrategy?: MergeStrategy;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  importedResourceType?: ImportResourceType;
}
export type ImportSummaryList = Array<ImportSummary>;
export type IncludeField = string;

export interface InitialResponseSetting {
  initialResponse?: ResponseSpecification;
  nextStep?: DialogState;
  conditional?: ConditionalSpecification;
  codeHook?: DialogCodeHookInvocationSetting;
}
export interface InputContext {
  name: string;
}
export type InputContextsList = Array<InputContext>;
export interface InputSessionStateSpecification {
  sessionAttributes?: Record<string, string>;
  activeContexts?: Array<ActiveContext>;
  runtimeHints?: RuntimeHints;
}
export interface IntentClassificationTestResultItem {
  intentName: string;
  multiTurnConversation: boolean;
  resultCounts: IntentClassificationTestResultItemCounts;
}
export interface IntentClassificationTestResultItemCounts {
  totalResultCount: number;
  speechTranscriptionResultCounts?: Record<TestResultMatchStatus, number>;
  intentMatchResultCounts: Record<TestResultMatchStatus, number>;
}
export type IntentClassificationTestResultItemList =
  Array<IntentClassificationTestResultItem>;
export interface IntentClassificationTestResults {
  items: Array<IntentClassificationTestResultItem>;
}
export interface IntentClosingSetting {
  closingResponse?: ResponseSpecification;
  active?: boolean;
  nextStep?: DialogState;
  conditional?: ConditionalSpecification;
}
export interface IntentConfirmationSetting {
  promptSpecification: PromptSpecification;
  declinationResponse?: ResponseSpecification;
  active?: boolean;
  confirmationResponse?: ResponseSpecification;
  confirmationNextStep?: DialogState;
  confirmationConditional?: ConditionalSpecification;
  declinationNextStep?: DialogState;
  declinationConditional?: ConditionalSpecification;
  failureResponse?: ResponseSpecification;
  failureNextStep?: DialogState;
  failureConditional?: ConditionalSpecification;
  codeHook?: DialogCodeHookInvocationSetting;
  elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
}
export interface IntentFilter {
  name: IntentFilterName;
  values: Array<string>;
  operator: IntentFilterOperator;
}
export type IntentFilterName = "IntentName";
export type IntentFilterOperator = "CO" | "EQ";
export type IntentFilters = Array<IntentFilter>;
export interface IntentLevelSlotResolutionTestResultItem {
  intentName: string;
  multiTurnConversation: boolean;
  slotResolutionResults: Array<SlotResolutionTestResultItem>;
}
export type IntentLevelSlotResolutionTestResultItemList =
  Array<IntentLevelSlotResolutionTestResultItem>;
export interface IntentLevelSlotResolutionTestResults {
  items: Array<IntentLevelSlotResolutionTestResultItem>;
}
export interface IntentOverride {
  name?: string;
  slots?: Record<string, SlotValueOverride>;
}
export type IntentSignature = string;

export type IntentSortAttribute = "IntentName" | "LastUpdatedDateTime";
export interface IntentSortBy {
  attribute: IntentSortAttribute;
  order: SortOrder;
}
export type IntentState =
  | "Failed"
  | "Fulfilled"
  | "InProgress"
  | "ReadyForFulfillment"
  | "Waiting"
  | "FulfillmentInProgress";
export interface IntentStatistics {
  discoveredIntentCount?: number;
}
export interface IntentSummary {
  intentId?: string;
  intentName?: string;
  description?: string;
  parentIntentSignature?: string;
  inputContexts?: Array<InputContext>;
  outputContexts?: Array<OutputContext>;
  lastUpdatedDateTime?: Date | string;
}
export type IntentSummaryList = Array<IntentSummary>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface InvokedIntentSample {
  intentName?: string;
}
export type InvokedIntentSamples = Array<InvokedIntentSample>;
export type ItemId = string;

export interface KendraConfiguration {
  kendraIndex: string;
  queryFilterStringEnabled?: boolean;
  queryFilterString?: string;
}
export type KendraIndexArn = string;

export type KmsKeyArn = string;

export type LambdaARN = string;

export interface LambdaCodeHook {
  lambdaARN: string;
  codeHookInterfaceVersion: string;
}
export interface LexTranscriptFilter {
  dateRangeFilter?: DateRangeFilter;
}
export interface ListAggregatedUtterancesRequest {
  botId: string;
  botAliasId?: string;
  botVersion?: string;
  localeId: string;
  aggregationDuration: UtteranceAggregationDuration;
  sortBy?: AggregatedUtterancesSortBy;
  filters?: Array<AggregatedUtterancesFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAggregatedUtterancesResponse {
  botId?: string;
  botAliasId?: string;
  botVersion?: string;
  localeId?: string;
  aggregationDuration?: UtteranceAggregationDuration;
  aggregationWindowStartTime?: Date | string;
  aggregationWindowEndTime?: Date | string;
  aggregationLastRefreshedDateTime?: Date | string;
  aggregatedUtterancesSummaries?: Array<AggregatedUtterancesSummary>;
  nextToken?: string;
}
export interface ListBotAliasesRequest {
  botId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListBotAliasesResponse {
  botAliasSummaries?: Array<BotAliasSummary>;
  nextToken?: string;
  botId?: string;
}
export interface ListBotAliasReplicasRequest {
  botId: string;
  replicaRegion: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListBotAliasReplicasResponse {
  botId?: string;
  sourceRegion?: string;
  replicaRegion?: string;
  botAliasReplicaSummaries?: Array<BotAliasReplicaSummary>;
  nextToken?: string;
}
export interface ListBotLocalesRequest {
  botId: string;
  botVersion: string;
  sortBy?: BotLocaleSortBy;
  filters?: Array<BotLocaleFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListBotLocalesResponse {
  botId?: string;
  botVersion?: string;
  nextToken?: string;
  botLocaleSummaries?: Array<BotLocaleSummary>;
}
export interface ListBotRecommendationsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListBotRecommendationsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationSummaries?: Array<BotRecommendationSummary>;
  nextToken?: string;
}
export interface ListBotReplicasRequest {
  botId: string;
}
export interface ListBotReplicasResponse {
  botId?: string;
  sourceRegion?: string;
  botReplicaSummaries?: Array<BotReplicaSummary>;
}
export interface ListBotResourceGenerationsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  sortBy?: GenerationSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface ListBotResourceGenerationsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  generationSummaries?: Array<GenerationSummary>;
  nextToken?: string;
}
export interface ListBotsRequest {
  sortBy?: BotSortBy;
  filters?: Array<BotFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListBotsResponse {
  botSummaries?: Array<BotSummary>;
  nextToken?: string;
}
export interface ListBotVersionReplicasRequest {
  botId: string;
  replicaRegion: string;
  maxResults?: number;
  nextToken?: string;
  sortBy?: BotVersionReplicaSortBy;
}
export interface ListBotVersionReplicasResponse {
  botId?: string;
  sourceRegion?: string;
  replicaRegion?: string;
  botVersionReplicaSummaries?: Array<BotVersionReplicaSummary>;
  nextToken?: string;
}
export interface ListBotVersionsRequest {
  botId: string;
  sortBy?: BotVersionSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface ListBotVersionsResponse {
  botId?: string;
  botVersionSummaries?: Array<BotVersionSummary>;
  nextToken?: string;
}
export interface ListBuiltInIntentsRequest {
  localeId: string;
  sortBy?: BuiltInIntentSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface ListBuiltInIntentsResponse {
  builtInIntentSummaries?: Array<BuiltInIntentSummary>;
  nextToken?: string;
  localeId?: string;
}
export interface ListBuiltInSlotTypesRequest {
  localeId: string;
  sortBy?: BuiltInSlotTypeSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface ListBuiltInSlotTypesResponse {
  builtInSlotTypeSummaries?: Array<BuiltInSlotTypeSummary>;
  nextToken?: string;
  localeId?: string;
}
export interface ListCustomVocabularyItemsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListCustomVocabularyItemsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  customVocabularyItems?: Array<CustomVocabularyItem>;
  nextToken?: string;
}
export interface ListExportsRequest {
  botId?: string;
  botVersion?: string;
  sortBy?: ExportSortBy;
  filters?: Array<ExportFilter>;
  maxResults?: number;
  nextToken?: string;
  localeId?: string;
}
export interface ListExportsResponse {
  botId?: string;
  botVersion?: string;
  exportSummaries?: Array<ExportSummary>;
  nextToken?: string;
  localeId?: string;
}
export interface ListImportsRequest {
  botId?: string;
  botVersion?: string;
  sortBy?: ImportSortBy;
  filters?: Array<ImportFilter>;
  maxResults?: number;
  nextToken?: string;
  localeId?: string;
}
export interface ListImportsResponse {
  botId?: string;
  botVersion?: string;
  importSummaries?: Array<ImportSummary>;
  nextToken?: string;
  localeId?: string;
}
export interface ListIntentMetricsRequest {
  botId: string;
  startDateTime: Date | string;
  endDateTime: Date | string;
  metrics: Array<AnalyticsIntentMetric>;
  binBy?: Array<AnalyticsBinBySpecification>;
  groupBy?: Array<AnalyticsIntentGroupBySpecification>;
  filters?: Array<AnalyticsIntentFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListIntentMetricsResponse {
  botId?: string;
  results?: Array<AnalyticsIntentResult>;
  nextToken?: string;
}
export interface ListIntentPathsRequest {
  botId: string;
  startDateTime: Date | string;
  endDateTime: Date | string;
  intentPath: string;
  filters?: Array<AnalyticsPathFilter>;
}
export interface ListIntentPathsResponse {
  nodeSummaries?: Array<AnalyticsIntentNodeSummary>;
}
export interface ListIntentsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  sortBy?: IntentSortBy;
  filters?: Array<IntentFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListIntentsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  intentSummaries?: Array<IntentSummary>;
  nextToken?: string;
}
export interface ListIntentStageMetricsRequest {
  botId: string;
  startDateTime: Date | string;
  endDateTime: Date | string;
  metrics: Array<AnalyticsIntentStageMetric>;
  binBy?: Array<AnalyticsBinBySpecification>;
  groupBy?: Array<AnalyticsIntentStageGroupBySpecification>;
  filters?: Array<AnalyticsIntentStageFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListIntentStageMetricsResponse {
  botId?: string;
  results?: Array<AnalyticsIntentStageResult>;
  nextToken?: string;
}
export interface ListRecommendedIntentsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  botRecommendationId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListRecommendedIntentsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationId?: string;
  summaryList?: Array<RecommendedIntentSummary>;
  nextToken?: string;
}
export interface ListSessionAnalyticsDataRequest {
  botId: string;
  startDateTime: Date | string;
  endDateTime: Date | string;
  sortBy?: SessionDataSortBy;
  filters?: Array<AnalyticsSessionFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSessionAnalyticsDataResponse {
  botId?: string;
  nextToken?: string;
  sessions?: Array<SessionSpecification>;
}
export interface ListSessionMetricsRequest {
  botId: string;
  startDateTime: Date | string;
  endDateTime: Date | string;
  metrics: Array<AnalyticsSessionMetric>;
  binBy?: Array<AnalyticsBinBySpecification>;
  groupBy?: Array<AnalyticsSessionGroupBySpecification>;
  filters?: Array<AnalyticsSessionFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSessionMetricsResponse {
  botId?: string;
  results?: Array<AnalyticsSessionResult>;
  nextToken?: string;
}
export interface ListSlotsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
  sortBy?: SlotSortBy;
  filters?: Array<SlotFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSlotsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  intentId?: string;
  slotSummaries?: Array<SlotSummary>;
  nextToken?: string;
}
export interface ListSlotTypesRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  sortBy?: SlotTypeSortBy;
  filters?: Array<SlotTypeFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSlotTypesResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  slotTypeSummaries?: Array<SlotTypeSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceARN: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListTestExecutionResultItemsRequest {
  testExecutionId: string;
  resultFilterBy: TestExecutionResultFilterBy;
  maxResults?: number;
  nextToken?: string;
}
export interface ListTestExecutionResultItemsResponse {
  testExecutionResults?: TestExecutionResultItems;
  nextToken?: string;
}
export interface ListTestExecutionsRequest {
  sortBy?: TestExecutionSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface ListTestExecutionsResponse {
  testExecutions?: Array<TestExecutionSummary>;
  nextToken?: string;
}
export interface ListTestSetRecordsRequest {
  testSetId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListTestSetRecordsResponse {
  testSetRecords?: Array<TestSetTurnRecord>;
  nextToken?: string;
}
export interface ListTestSetsRequest {
  sortBy?: TestSetSortBy;
  maxResults?: number;
  nextToken?: string;
}
export interface ListTestSetsResponse {
  testSets?: Array<TestSetSummary>;
  nextToken?: string;
}
export interface ListUtteranceAnalyticsDataRequest {
  botId: string;
  startDateTime: Date | string;
  endDateTime: Date | string;
  sortBy?: UtteranceDataSortBy;
  filters?: Array<AnalyticsUtteranceFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListUtteranceAnalyticsDataResponse {
  botId?: string;
  nextToken?: string;
  utterances?: Array<UtteranceSpecification>;
}
export interface ListUtteranceMetricsRequest {
  botId: string;
  startDateTime: Date | string;
  endDateTime: Date | string;
  metrics: Array<AnalyticsUtteranceMetric>;
  binBy?: Array<AnalyticsBinBySpecification>;
  groupBy?: Array<AnalyticsUtteranceGroupBySpecification>;
  attributes?: Array<AnalyticsUtteranceAttribute>;
  filters?: Array<AnalyticsUtteranceFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListUtteranceMetricsResponse {
  botId?: string;
  results?: Array<AnalyticsUtteranceResult>;
  nextToken?: string;
}
export type LocaleId = string;

export type LocaleName = string;

export type LogPrefix = string;

export type MaxResults = number;

export type MaxUtteranceDigits = number;

export type MergeStrategy = "Overwrite" | "FailOnConflict" | "Append";
export interface Message {
  plainTextMessage?: PlainTextMessage;
  customPayload?: CustomPayload;
  ssmlMessage?: SSMLMessage;
  imageResponseCard?: ImageResponseCard;
}
export interface MessageGroup {
  message: Message;
  variations?: Array<Message>;
}
export type MessageGroupsList = Array<MessageGroup>;
export type MessageSelectionStrategy = "Random" | "Ordered";
export type MessageVariationsList = Array<Message>;
export type MissedCount = number;

export interface MultipleValuesSetting {
  allowMultipleValues?: boolean;
}
export type Name = string;

export interface NewCustomVocabularyItem {
  phrase: string;
  weight?: number;
  displayAs?: string;
}
export type NextIndex = number;

export type NextToken = string;

export interface NluImprovementSpecification {
  enabled: boolean;
}
export type NonEmptyString = string;

export type NumericalBotVersion = string;

export interface ObfuscationSetting {
  obfuscationSettingType: ObfuscationSettingType;
}
export type ObfuscationSettingType = "None" | "DefaultObfuscation";
export type ObjectPrefix = string;

export type ObjectPrefixes = Array<string>;
export interface OpensearchConfiguration {
  domainEndpoint: string;
  indexName: string;
  exactResponse?: boolean;
  exactResponseFields?: ExactResponseFields;
  includeFields?: Array<string>;
}
export type Operation = string;

export type OperationList = Array<string>;
export type OSIncludeFields = Array<string>;
export type OSIndexName = string;

export interface OutputContext {
  name: string;
  timeToLiveInSeconds: number;
  turnsToLive: number;
}
export type OutputContextsList = Array<OutputContext>;
export interface OverallTestResultItem {
  multiTurnConversation: boolean;
  totalResultCount: number;
  speechTranscriptionResultCounts?: Record<TestResultMatchStatus, number>;
  endToEndResultCounts: Record<TestResultMatchStatus, number>;
}
export type OverallTestResultItemList = Array<OverallTestResultItem>;
export interface OverallTestResults {
  items: Array<OverallTestResultItem>;
}
export interface ParentBotNetwork {
  botId: string;
  botVersion: string;
}
export type ParentBotNetworks = Array<ParentBotNetwork>;
export interface PathFormat {
  objectPrefixes?: Array<string>;
}
export type Phrase = string;

export interface PlainTextMessage {
  value: string;
}
export type PlainTextMessageValue = string;

export type Policy = string;

export interface PostDialogCodeHookInvocationSpecification {
  successResponse?: ResponseSpecification;
  successNextStep?: DialogState;
  successConditional?: ConditionalSpecification;
  failureResponse?: ResponseSpecification;
  failureNextStep?: DialogState;
  failureConditional?: ConditionalSpecification;
  timeoutResponse?: ResponseSpecification;
  timeoutNextStep?: DialogState;
  timeoutConditional?: ConditionalSpecification;
}
export interface PostFulfillmentStatusSpecification {
  successResponse?: ResponseSpecification;
  failureResponse?: ResponseSpecification;
  timeoutResponse?: ResponseSpecification;
  successNextStep?: DialogState;
  successConditional?: ConditionalSpecification;
  failureNextStep?: DialogState;
  failureConditional?: ConditionalSpecification;
  timeoutNextStep?: DialogState;
  timeoutConditional?: ConditionalSpecification;
}
export declare class PreconditionFailedException extends EffectData.TaggedError(
  "PreconditionFailedException",
)<{
  readonly message?: string;
}> {}
export type PresignedS3Url = string;

export interface Principal {
  service?: string;
  arn?: string;
}
export type PrincipalArn = string;

export type PrincipalList = Array<Principal>;
export type PriorityValue = number;

export type PromptAttempt =
  | "Initial"
  | "Retry1"
  | "Retry2"
  | "Retry3"
  | "Retry4"
  | "Retry5";
export interface PromptAttemptSpecification {
  allowInterrupt?: boolean;
  allowedInputTypes: AllowedInputTypes;
  audioAndDTMFInputSpecification?: AudioAndDTMFInputSpecification;
  textInputSpecification?: TextInputSpecification;
}
export type PromptAttemptsSpecificationMap = Record<
  PromptAttempt,
  PromptAttemptSpecification
>;
export type PromptMaxRetries = number;

export interface PromptSpecification {
  messageGroups: Array<MessageGroup>;
  maxRetries: number;
  allowInterrupt?: boolean;
  messageSelectionStrategy?: MessageSelectionStrategy;
  promptAttemptsSpecification?: Record<
    PromptAttempt,
    PromptAttemptSpecification
  >;
}
export type QInConnectAssistantARN = string;

export interface QInConnectAssistantConfiguration {
  assistantArn: string;
}
export interface QInConnectIntentConfiguration {
  qInConnectAssistantConfiguration?: QInConnectAssistantConfiguration;
}
export interface QnAIntentConfiguration {
  dataSourceConfiguration?: DataSourceConfiguration;
  bedrockModelConfiguration?: BedrockModelSpecification;
}
export interface QnAKendraConfiguration {
  kendraIndex: string;
  queryFilterStringEnabled?: boolean;
  queryFilterString?: string;
  exactResponse?: boolean;
}
export type QueryFilterString = string;

export type QuestionField = string;

export type RecommendedAction = string;

export type RecommendedActions = Array<string>;
export interface RecommendedIntentSummary {
  intentId?: string;
  intentName?: string;
  sampleUtterancesCount?: number;
}
export type RecommendedIntentSummaryList = Array<RecommendedIntentSummary>;
export type RecordNumber = number;

export type RegexPattern = string;

export interface RelativeAggregationDuration {
  timeDimension: TimeDimension;
  timeValue: number;
}
export type ReplicaRegion = string;

export type ResourceCount = number;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface ResponseSpecification {
  messageGroups: Array<MessageGroup>;
  allowInterrupt?: boolean;
}
export type RetryAfterSeconds = number;

export type RevisionId = string;

export type RoleArn = string;

export interface RuntimeHintDetails {
  runtimeHintValues?: Array<RuntimeHintValue>;
  subSlotHints?: Record<string, RuntimeHintDetails>;
}
export type RuntimeHintPhrase = string;

export interface RuntimeHints {
  slotHints?: Record<string, Record<string, RuntimeHintDetails>>;
}
export interface RuntimeHintValue {
  phrase: string;
}
export type RuntimeHintValuesList = Array<RuntimeHintValue>;
export interface RuntimeSettings {
  slotResolutionImprovement?: SlotResolutionImprovementSpecification;
  nluImprovement?: NluImprovementSpecification;
}
export type S3BucketArn = string;

export interface S3BucketLogDestination {
  kmsKeyArn?: string;
  s3BucketArn: string;
  logPrefix: string;
}
export type S3BucketName = string;

export interface S3BucketTranscriptSource {
  s3BucketName: string;
  pathFormat?: PathFormat;
  transcriptFormat: TranscriptFormat;
  transcriptFilter?: TranscriptFilter;
  kmsKeyArn?: string;
}
export type S3ObjectPath = string;

export interface SampleUtterance {
  utterance: string;
}
export interface SampleUtteranceGenerationSpecification {
  enabled: boolean;
  bedrockModelSpecification?: BedrockModelSpecification;
}
export type SampleUtterancesCount = number;

export type SampleUtterancesList = Array<SampleUtterance>;
export interface SampleValue {
  value: string;
}
export interface SearchAssociatedTranscriptsRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  botRecommendationId: string;
  searchOrder?: SearchOrder;
  filters: Array<AssociatedTranscriptFilter>;
  maxResults?: number;
  nextIndex?: number;
}
export interface SearchAssociatedTranscriptsResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationId?: string;
  nextIndex?: number;
  associatedTranscripts?: Array<AssociatedTranscript>;
  totalResults?: number;
}
export type SearchOrder = "Ascending" | "Descending";
export interface SentimentAnalysisSettings {
  detectSentiment: boolean;
}
export type ServicePrincipal = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface SessionDataSortBy {
  name: AnalyticsSessionSortByName;
  order: AnalyticsSortOrder;
}
export type SessionId = string;

export interface SessionSpecification {
  botAliasId?: string;
  botVersion?: string;
  localeId?: string;
  channel?: string;
  sessionId?: string;
  conversationStartTime?: Date | string;
  conversationEndTime?: Date | string;
  conversationDurationSeconds?: number;
  conversationEndState?: ConversationEndState;
  mode?: AnalyticsModality;
  numberOfTurns?: number;
  invokedIntentSamples?: Array<InvokedIntentSample>;
  originatingRequestId?: string;
}
export type SessionSpecifications = Array<SessionSpecification>;
export type SessionTTL = number;

export type SkipResourceInUseCheck = boolean;

export interface SlotCaptureSetting {
  captureResponse?: ResponseSpecification;
  captureNextStep?: DialogState;
  captureConditional?: ConditionalSpecification;
  failureResponse?: ResponseSpecification;
  failureNextStep?: DialogState;
  failureConditional?: ConditionalSpecification;
  codeHook?: DialogCodeHookInvocationSetting;
  elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
}
export type SlotConstraint = "Required" | "Optional";
export interface SlotDefaultValue {
  defaultValue: string;
}
export type SlotDefaultValueList = Array<SlotDefaultValue>;
export interface SlotDefaultValueSpecification {
  defaultValueList: Array<SlotDefaultValue>;
}
export type SlotDefaultValueString = string;

export interface SlotFilter {
  name: SlotFilterName;
  values: Array<string>;
  operator: SlotFilterOperator;
}
export type SlotFilterName = "SlotName";
export type SlotFilterOperator = "CO" | "EQ";
export type SlotFilters = Array<SlotFilter>;
export type SlotHintsIntentMap = Record<
  string,
  Record<string, RuntimeHintDetails>
>;
export type SlotHintsSlotMap = Record<string, RuntimeHintDetails>;
export type SlotPrioritiesList = Array<SlotPriority>;
export interface SlotPriority {
  priority: number;
  slotId: string;
}
export interface SlotResolutionImprovementSpecification {
  enabled: boolean;
  bedrockModelSpecification?: BedrockModelSpecification;
}
export interface SlotResolutionSetting {
  slotResolutionStrategy: SlotResolutionStrategy;
}
export type SlotResolutionStrategy = "EnhancedFallback" | "Default";
export interface SlotResolutionTestResultItem {
  slotName: string;
  resultCounts: SlotResolutionTestResultItemCounts;
}
export interface SlotResolutionTestResultItemCounts {
  totalResultCount: number;
  speechTranscriptionResultCounts?: Record<TestResultMatchStatus, number>;
  slotMatchResultCounts: Record<TestResultMatchStatus, number>;
}
export type SlotResolutionTestResultItems = Array<SlotResolutionTestResultItem>;
export type SlotShape = "Scalar" | "List";
export type SlotSortAttribute = "SlotName" | "LastUpdatedDateTime";
export interface SlotSortBy {
  attribute: SlotSortAttribute;
  order: SortOrder;
}
export interface SlotSummary {
  slotId?: string;
  slotName?: string;
  description?: string;
  slotConstraint?: SlotConstraint;
  slotTypeId?: string;
  valueElicitationPromptSpecification?: PromptSpecification;
  lastUpdatedDateTime?: Date | string;
}
export type SlotSummaryList = Array<SlotSummary>;
export type SlotTypeCategory =
  | "Custom"
  | "Extended"
  | "ExternalGrammar"
  | "Composite";
export interface SlotTypeFilter {
  name: SlotTypeFilterName;
  values: Array<string>;
  operator: SlotTypeFilterOperator;
}
export type SlotTypeFilterName = "SlotTypeName" | "ExternalSourceType";
export type SlotTypeFilterOperator = "CO" | "EQ";
export type SlotTypeFilters = Array<SlotTypeFilter>;
export type SlotTypeSignature = string;

export type SlotTypeSortAttribute = "SlotTypeName" | "LastUpdatedDateTime";
export interface SlotTypeSortBy {
  attribute: SlotTypeSortAttribute;
  order: SortOrder;
}
export interface SlotTypeStatistics {
  discoveredSlotTypeCount?: number;
}
export interface SlotTypeSummary {
  slotTypeId?: string;
  slotTypeName?: string;
  description?: string;
  parentSlotTypeSignature?: string;
  lastUpdatedDateTime?: Date | string;
  slotTypeCategory?: SlotTypeCategory;
}
export type SlotTypeSummaryList = Array<SlotTypeSummary>;
export interface SlotTypeValue {
  sampleValue?: SampleValue;
  synonyms?: Array<SampleValue>;
}
export type SlotTypeValues = Array<SlotTypeValue>;
export interface SlotValue {
  interpretedValue?: string;
}
export interface SlotValueElicitationSetting {
  defaultValueSpecification?: SlotDefaultValueSpecification;
  slotConstraint: SlotConstraint;
  promptSpecification?: PromptSpecification;
  sampleUtterances?: Array<SampleUtterance>;
  waitAndContinueSpecification?: WaitAndContinueSpecification;
  slotCaptureSetting?: SlotCaptureSetting;
  slotResolutionSetting?: SlotResolutionSetting;
}
export interface SlotValueOverride {
  shape?: SlotShape;
  value?: SlotValue;
  values?: Array<SlotValueOverride>;
}
export type SlotValueOverrideMap = Record<string, SlotValueOverride>;
export interface SlotValueRegexFilter {
  pattern: string;
}
export type SlotValueResolutionStrategy =
  | "OriginalValue"
  | "TopResolution"
  | "Concatenation";
export type SlotValues = Array<SlotValueOverride>;
export interface SlotValueSelectionSetting {
  resolutionStrategy: SlotValueResolutionStrategy;
  regexFilter?: SlotValueRegexFilter;
  advancedRecognitionSetting?: AdvancedRecognitionSetting;
}
export type SortOrder = "Ascending" | "Descending";
export interface Specifications {
  slotTypeId: string;
  valueElicitationSetting: SubSlotValueElicitationSetting;
}
export interface SSMLMessage {
  value: string;
}
export type SSMLMessageValue = string;

export interface StartBotRecommendationRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  transcriptSourceSetting: TranscriptSourceSetting;
  encryptionSetting?: EncryptionSetting;
}
export interface StartBotRecommendationResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationStatus?: BotRecommendationStatus;
  botRecommendationId?: string;
  creationDateTime?: Date | string;
  transcriptSourceSetting?: TranscriptSourceSetting;
  encryptionSetting?: EncryptionSetting;
}
export interface StartBotResourceGenerationRequest {
  generationInputPrompt: string;
  botId: string;
  botVersion: string;
  localeId: string;
}
export interface StartBotResourceGenerationResponse {
  generationInputPrompt?: string;
  generationId?: string;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  generationStatus?: GenerationStatus;
  creationDateTime?: Date | string;
}
export interface StartImportRequest {
  importId: string;
  resourceSpecification: ImportResourceSpecification;
  mergeStrategy: MergeStrategy;
  filePassword?: string;
}
export interface StartImportResponse {
  importId?: string;
  resourceSpecification?: ImportResourceSpecification;
  mergeStrategy?: MergeStrategy;
  importStatus?: ImportStatus;
  creationDateTime?: Date | string;
}
export interface StartTestExecutionRequest {
  testSetId: string;
  target: TestExecutionTarget;
  apiMode: TestExecutionApiMode;
  testExecutionModality?: TestExecutionModality;
}
export interface StartTestExecutionResponse {
  testExecutionId?: string;
  creationDateTime?: Date | string;
  testSetId?: string;
  target?: TestExecutionTarget;
  apiMode?: TestExecutionApiMode;
  testExecutionModality?: TestExecutionModality;
}
export interface StartTestSetGenerationRequest {
  testSetName: string;
  description?: string;
  storageLocation: TestSetStorageLocation;
  generationDataSource: TestSetGenerationDataSource;
  roleArn: string;
  testSetTags?: Record<string, string>;
}
export interface StartTestSetGenerationResponse {
  testSetGenerationId?: string;
  creationDateTime?: Date | string;
  testSetGenerationStatus?: TestSetGenerationStatus;
  testSetName?: string;
  description?: string;
  storageLocation?: TestSetStorageLocation;
  generationDataSource?: TestSetGenerationDataSource;
  roleArn?: string;
  testSetTags?: Record<string, string>;
}
export type StillWaitingResponseFrequency = number;

export interface StillWaitingResponseSpecification {
  messageGroups: Array<MessageGroup>;
  frequencyInSeconds: number;
  timeoutInSeconds: number;
  allowInterrupt?: boolean;
}
export type StillWaitingResponseTimeout = number;

export interface StopBotRecommendationRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  botRecommendationId: string;
}
export interface StopBotRecommendationResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationStatus?: BotRecommendationStatus;
  botRecommendationId?: string;
}
export type LexModelsV2String = string;

export type StringMap = Record<string, string>;
export type SubSlotExpression = string;

export interface SubSlotSetting {
  expression?: string;
  slotSpecifications?: Record<string, Specifications>;
}
export type SubSlotSpecificationMap = Record<string, Specifications>;
export interface SubSlotTypeComposition {
  name: string;
  slotTypeId: string;
}
export type SubSlotTypeList = Array<SubSlotTypeComposition>;
export interface SubSlotValueElicitationSetting {
  defaultValueSpecification?: SlotDefaultValueSpecification;
  promptSpecification: PromptSpecification;
  sampleUtterances?: Array<SampleUtterance>;
  waitAndContinueSpecification?: WaitAndContinueSpecification;
}
export type SynonymList = Array<SampleValue>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceARN: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TestExecutionApiMode = "Streaming" | "NonStreaming";
export type TestExecutionModality = "Text" | "Audio";
export interface TestExecutionResultFilterBy {
  resultTypeFilter: TestResultTypeFilter;
  conversationLevelTestResultsFilterBy?: ConversationLevelTestResultsFilterBy;
}
export interface TestExecutionResultItems {
  overallTestResults?: OverallTestResults;
  conversationLevelTestResults?: ConversationLevelTestResults;
  intentClassificationTestResults?: IntentClassificationTestResults;
  intentLevelSlotResolutionTestResults?: IntentLevelSlotResolutionTestResults;
  utteranceLevelTestResults?: UtteranceLevelTestResults;
}
export type TestExecutionSortAttribute = "TestSetName" | "CreationDateTime";
export interface TestExecutionSortBy {
  attribute: TestExecutionSortAttribute;
  order: SortOrder;
}
export type TestExecutionStatus =
  | "Pending"
  | "Waiting"
  | "InProgress"
  | "Completed"
  | "Failed"
  | "Stopping"
  | "Stopped";
export interface TestExecutionSummary {
  testExecutionId?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  testExecutionStatus?: TestExecutionStatus;
  testSetId?: string;
  testSetName?: string;
  target?: TestExecutionTarget;
  apiMode?: TestExecutionApiMode;
  testExecutionModality?: TestExecutionModality;
}
export type TestExecutionSummaryList = Array<TestExecutionSummary>;
export interface TestExecutionTarget {
  botAliasTarget?: BotAliasTestExecutionTarget;
}
export type TestResultMatchStatus = "Matched" | "Mismatched" | "ExecutionError";
export type TestResultMatchStatusCountMap = Record<
  TestResultMatchStatus,
  number
>;
export type TestResultSlotName = string;

export type TestResultTypeFilter =
  | "OverallTestResults"
  | "ConversationLevelTestResults"
  | "IntentClassificationTestResults"
  | "SlotResolutionTestResults"
  | "UtteranceLevelResults";
export type TestSetAgentPrompt = string;

export type TestSetConversationId = string;

export interface TestSetDiscrepancyErrors {
  intentDiscrepancies: Array<TestSetIntentDiscrepancyItem>;
  slotDiscrepancies: Array<TestSetSlotDiscrepancyItem>;
}
export interface TestSetDiscrepancyReportBotAliasTarget {
  botId: string;
  botAliasId: string;
  localeId: string;
}
export interface TestSetDiscrepancyReportResourceTarget {
  botAliasTarget?: TestSetDiscrepancyReportBotAliasTarget;
}
export type TestSetDiscrepancyReportStatus =
  | "InProgress"
  | "Completed"
  | "Failed";
export interface TestSetExportSpecification {
  testSetId: string;
}
export interface TestSetGenerationDataSource {
  conversationLogsDataSource?: ConversationLogsDataSource;
}
export type TestSetGenerationStatus =
  | "Generating"
  | "Ready"
  | "Failed"
  | "Pending";
export interface TestSetImportInputLocation {
  s3BucketName: string;
  s3Path: string;
}
export interface TestSetImportResourceSpecification {
  testSetName: string;
  description?: string;
  roleArn: string;
  storageLocation: TestSetStorageLocation;
  importInputLocation: TestSetImportInputLocation;
  modality: TestSetModality;
  testSetTags?: Record<string, string>;
}
export interface TestSetIntentDiscrepancyItem {
  intentName: string;
  errorMessage: string;
}
export type TestSetIntentDiscrepancyList = Array<TestSetIntentDiscrepancyItem>;
export type TestSetModality = "Text" | "Audio";
export interface TestSetSlotDiscrepancyItem {
  intentName: string;
  slotName: string;
  errorMessage: string;
}
export type TestSetSlotDiscrepancyList = Array<TestSetSlotDiscrepancyItem>;
export type TestSetSortAttribute = "TestSetName" | "LastUpdatedDateTime";
export interface TestSetSortBy {
  attribute: TestSetSortAttribute;
  order: SortOrder;
}
export type TestSetStatus =
  | "Importing"
  | "PendingAnnotation"
  | "Deleting"
  | "ValidationError"
  | "Ready";
export interface TestSetStorageLocation {
  s3BucketName: string;
  s3Path: string;
  kmsKeyArn?: string;
}
export interface TestSetSummary {
  testSetId?: string;
  testSetName?: string;
  description?: string;
  modality?: TestSetModality;
  status?: TestSetStatus;
  roleArn?: string;
  numTurns?: number;
  storageLocation?: TestSetStorageLocation;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export type TestSetSummaryList = Array<TestSetSummary>;
export interface TestSetTurnRecord {
  recordNumber: number;
  conversationId?: string;
  turnNumber?: number;
  turnSpecification: TurnSpecification;
}
export type TestSetTurnRecordList = Array<TestSetTurnRecord>;
export interface TestSetTurnResult {
  agent?: AgentTurnResult;
  user?: UserTurnResult;
}
export type TestSetUtteranceText = string;

export interface TextInputSpecification {
  startTimeoutMs: number;
}
export interface TextLogDestination {
  cloudWatch: CloudWatchLogGroupLogDestination;
}
export interface TextLogSetting {
  enabled: boolean;
  destination: TextLogDestination;
  selectiveLoggingEnabled?: boolean;
}
export type TextLogSettingsList = Array<TextLogSetting>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly retryAfterSeconds?: number;
  readonly message?: string;
}> {}
export type TimeDimension = "Hours" | "Days" | "Weeks";
export type TimeInMilliSeconds = number;

export type Timestamp = Date | string;

export type TimeValue = number;

export type Transcript = string;

export interface TranscriptFilter {
  lexTranscriptFilter?: LexTranscriptFilter;
}
export type TranscriptFormat = "Lex";
export interface TranscriptSourceSetting {
  s3BucketTranscriptSource?: S3BucketTranscriptSource;
}
export type TurnNumber = number;

export interface TurnSpecification {
  agentTurn?: AgentTurnSpecification;
  userTurn?: UserTurnSpecification;
}
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateBotAliasRequest {
  botAliasId: string;
  botAliasName: string;
  description?: string;
  botVersion?: string;
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  botId: string;
}
export interface UpdateBotAliasResponse {
  botAliasId?: string;
  botAliasName?: string;
  description?: string;
  botVersion?: string;
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  botAliasStatus?: BotAliasStatus;
  botId?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export interface UpdateBotLocaleRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  description?: string;
  nluIntentConfidenceThreshold: number;
  voiceSettings?: VoiceSettings;
  generativeAISettings?: GenerativeAISettings;
}
export interface UpdateBotLocaleResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  localeName?: string;
  description?: string;
  nluIntentConfidenceThreshold?: number;
  voiceSettings?: VoiceSettings;
  botLocaleStatus?: BotLocaleStatus;
  failureReasons?: Array<string>;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  recommendedActions?: Array<string>;
  generativeAISettings?: GenerativeAISettings;
}
export interface UpdateBotRecommendationRequest {
  botId: string;
  botVersion: string;
  localeId: string;
  botRecommendationId: string;
  encryptionSetting: EncryptionSetting;
}
export interface UpdateBotRecommendationResponse {
  botId?: string;
  botVersion?: string;
  localeId?: string;
  botRecommendationStatus?: BotRecommendationStatus;
  botRecommendationId?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  transcriptSourceSetting?: TranscriptSourceSetting;
  encryptionSetting?: EncryptionSetting;
}
export interface UpdateBotRequest {
  botId: string;
  botName: string;
  description?: string;
  roleArn: string;
  dataPrivacy: DataPrivacy;
  idleSessionTTLInSeconds: number;
  botType?: BotType;
  botMembers?: Array<BotMember>;
  errorLogSettings?: ErrorLogSettings;
}
export interface UpdateBotResponse {
  botId?: string;
  botName?: string;
  description?: string;
  roleArn?: string;
  dataPrivacy?: DataPrivacy;
  idleSessionTTLInSeconds?: number;
  botStatus?: BotStatus;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  botType?: BotType;
  botMembers?: Array<BotMember>;
  errorLogSettings?: ErrorLogSettings;
}
export type UpdateCustomVocabularyItemsList = Array<CustomVocabularyItem>;
export interface UpdateExportRequest {
  exportId: string;
  filePassword?: string;
}
export interface UpdateExportResponse {
  exportId?: string;
  resourceSpecification?: ExportResourceSpecification;
  fileFormat?: ImportExportFileFormat;
  exportStatus?: ExportStatus;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export interface UpdateIntentRequest {
  intentId: string;
  intentName: string;
  description?: string;
  parentIntentSignature?: string;
  sampleUtterances?: Array<SampleUtterance>;
  dialogCodeHook?: DialogCodeHookSettings;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;
  slotPriorities?: Array<SlotPriority>;
  intentConfirmationSetting?: IntentConfirmationSetting;
  intentClosingSetting?: IntentClosingSetting;
  inputContexts?: Array<InputContext>;
  outputContexts?: Array<OutputContext>;
  kendraConfiguration?: KendraConfiguration;
  botId: string;
  botVersion: string;
  localeId: string;
  initialResponseSetting?: InitialResponseSetting;
  qnAIntentConfiguration?: QnAIntentConfiguration;
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration;
}
export interface UpdateIntentResponse {
  intentId?: string;
  intentName?: string;
  description?: string;
  parentIntentSignature?: string;
  sampleUtterances?: Array<SampleUtterance>;
  dialogCodeHook?: DialogCodeHookSettings;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;
  slotPriorities?: Array<SlotPriority>;
  intentConfirmationSetting?: IntentConfirmationSetting;
  intentClosingSetting?: IntentClosingSetting;
  inputContexts?: Array<InputContext>;
  outputContexts?: Array<OutputContext>;
  kendraConfiguration?: KendraConfiguration;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  initialResponseSetting?: InitialResponseSetting;
  qnAIntentConfiguration?: QnAIntentConfiguration;
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration;
}
export interface UpdateResourcePolicyRequest {
  resourceArn: string;
  policy: string;
  expectedRevisionId?: string;
}
export interface UpdateResourcePolicyResponse {
  resourceArn?: string;
  revisionId?: string;
}
export interface UpdateSlotRequest {
  slotId: string;
  slotName: string;
  description?: string;
  slotTypeId?: string;
  valueElicitationSetting: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  botId: string;
  botVersion: string;
  localeId: string;
  intentId: string;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
}
export interface UpdateSlotResponse {
  slotId?: string;
  slotName?: string;
  description?: string;
  slotTypeId?: string;
  valueElicitationSetting?: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  intentId?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
}
export interface UpdateSlotTypeRequest {
  slotTypeId: string;
  slotTypeName: string;
  description?: string;
  slotTypeValues?: Array<SlotTypeValue>;
  valueSelectionSetting?: SlotValueSelectionSetting;
  parentSlotTypeSignature?: string;
  botId: string;
  botVersion: string;
  localeId: string;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}
export interface UpdateSlotTypeResponse {
  slotTypeId?: string;
  slotTypeName?: string;
  description?: string;
  slotTypeValues?: Array<SlotTypeValue>;
  valueSelectionSetting?: SlotValueSelectionSetting;
  parentSlotTypeSignature?: string;
  botId?: string;
  botVersion?: string;
  localeId?: string;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}
export interface UpdateTestSetRequest {
  testSetId: string;
  testSetName: string;
  description?: string;
}
export interface UpdateTestSetResponse {
  testSetId?: string;
  testSetName?: string;
  description?: string;
  modality?: TestSetModality;
  status?: TestSetStatus;
  roleArn?: string;
  numTurns?: number;
  storageLocation?: TestSetStorageLocation;
  creationDateTime?: Date | string;
  lastUpdatedDateTime?: Date | string;
}
export interface UserTurnInputSpecification {
  utteranceInput: UtteranceInputSpecification;
  requestAttributes?: Record<string, string>;
  sessionState?: InputSessionStateSpecification;
}
export interface UserTurnIntentOutput {
  name: string;
  slots?: Record<string, UserTurnSlotOutput>;
}
export interface UserTurnOutputSpecification {
  intent: UserTurnIntentOutput;
  activeContexts?: Array<ActiveContext>;
  transcript?: string;
}
export interface UserTurnResult {
  input: UserTurnInputSpecification;
  expectedOutput: UserTurnOutputSpecification;
  actualOutput?: UserTurnOutputSpecification;
  errorDetails?: ExecutionErrorDetails;
  endToEndResult?: TestResultMatchStatus;
  intentMatchResult?: TestResultMatchStatus;
  slotMatchResult?: TestResultMatchStatus;
  speechTranscriptionResult?: TestResultMatchStatus;
  conversationLevelResult?: ConversationLevelResultDetail;
}
export interface UserTurnSlotOutput {
  value?: string;
  values?: Array<UserTurnSlotOutput>;
  subSlots?: Record<string, UserTurnSlotOutput>;
}
export type UserTurnSlotOutputList = Array<UserTurnSlotOutput>;
export type UserTurnSlotOutputMap = Record<string, UserTurnSlotOutput>;
export interface UserTurnSpecification {
  input: UserTurnInputSpecification;
  expected: UserTurnOutputSpecification;
}
export type Utterance = string;

export interface UtteranceAggregationDuration {
  relativeAggregationDuration: RelativeAggregationDuration;
}
export interface UtteranceAudioInputSpecification {
  audioFileS3Location: string;
}
export interface UtteranceBotResponse {
  content?: string;
  contentType?: UtteranceContentType;
  imageResponseCard?: ImageResponseCard;
}
export type UtteranceBotResponses = Array<UtteranceBotResponse>;
export type UtteranceContentType =
  | "PlainText"
  | "CustomPayload"
  | "SSML"
  | "ImageResponseCard";
export interface UtteranceDataSortBy {
  name: AnalyticsUtteranceSortByName;
  order: AnalyticsSortOrder;
}
export interface UtteranceInputSpecification {
  textInput?: string;
  audioInput?: UtteranceAudioInputSpecification;
}
export interface UtteranceLevelTestResultItem {
  recordNumber: number;
  conversationId?: string;
  turnResult: TestSetTurnResult;
}
export type UtteranceLevelTestResultItemList =
  Array<UtteranceLevelTestResultItem>;
export interface UtteranceLevelTestResults {
  items: Array<UtteranceLevelTestResultItem>;
}
export interface UtteranceSpecification {
  botAliasId?: string;
  botVersion?: string;
  localeId?: string;
  sessionId?: string;
  channel?: string;
  mode?: AnalyticsModality;
  conversationStartTime?: Date | string;
  conversationEndTime?: Date | string;
  utterance?: string;
  utteranceTimestamp?: Date | string;
  audioVoiceDurationMillis?: number;
  utteranceUnderstood?: boolean;
  inputType?: string;
  outputType?: string;
  associatedIntentName?: string;
  associatedSlotName?: string;
  intentState?: IntentState;
  dialogActionType?: string;
  botResponseAudioVoiceId?: string;
  slotsFilledInSession?: string;
  utteranceRequestId?: string;
  botResponses?: Array<UtteranceBotResponse>;
}
export type UtteranceSpecifications = Array<UtteranceSpecification>;
export type UtteranceUnderstood = boolean;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type Value = string;

export type VoiceEngine = "standard" | "neural" | "long-form" | "generative";
export type VoiceId = string;

export interface VoiceSettings {
  voiceId: string;
  engine?: VoiceEngine;
}
export interface WaitAndContinueSpecification {
  waitingResponse: ResponseSpecification;
  continueResponse: ResponseSpecification;
  stillWaitingResponse?: StillWaitingResponseSpecification;
  active?: boolean;
}
export type Weight = number;

export declare namespace BatchCreateCustomVocabularyItem {
  export type Input = BatchCreateCustomVocabularyItemRequest;
  export type Output = BatchCreateCustomVocabularyItemResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchDeleteCustomVocabularyItem {
  export type Input = BatchDeleteCustomVocabularyItemRequest;
  export type Output = BatchDeleteCustomVocabularyItemResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchUpdateCustomVocabularyItem {
  export type Input = BatchUpdateCustomVocabularyItemRequest;
  export type Output = BatchUpdateCustomVocabularyItemResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BuildBotLocale {
  export type Input = BuildBotLocaleRequest;
  export type Output = BuildBotLocaleResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateBot {
  export type Input = CreateBotRequest;
  export type Output = CreateBotResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateBotAlias {
  export type Input = CreateBotAliasRequest;
  export type Output = CreateBotAliasResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateBotLocale {
  export type Input = CreateBotLocaleRequest;
  export type Output = CreateBotLocaleResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateBotReplica {
  export type Input = CreateBotReplicaRequest;
  export type Output = CreateBotReplicaResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateBotVersion {
  export type Input = CreateBotVersionRequest;
  export type Output = CreateBotVersionResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateExport {
  export type Input = CreateExportRequest;
  export type Output = CreateExportResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIntent {
  export type Input = CreateIntentRequest;
  export type Output = CreateIntentResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateResourcePolicy {
  export type Input = CreateResourcePolicyRequest;
  export type Output = CreateResourcePolicyResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateResourcePolicyStatement {
  export type Input = CreateResourcePolicyStatementRequest;
  export type Output = CreateResourcePolicyStatementResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSlot {
  export type Input = CreateSlotRequest;
  export type Output = CreateSlotResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSlotType {
  export type Input = CreateSlotTypeRequest;
  export type Output = CreateSlotTypeResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTestSetDiscrepancyReport {
  export type Input = CreateTestSetDiscrepancyReportRequest;
  export type Output = CreateTestSetDiscrepancyReportResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateUploadUrl {
  export type Input = CreateUploadUrlRequest;
  export type Output = CreateUploadUrlResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteBot {
  export type Input = DeleteBotRequest;
  export type Output = DeleteBotResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteBotAlias {
  export type Input = DeleteBotAliasRequest;
  export type Output = DeleteBotAliasResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteBotLocale {
  export type Input = DeleteBotLocaleRequest;
  export type Output = DeleteBotLocaleResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteBotReplica {
  export type Input = DeleteBotReplicaRequest;
  export type Output = DeleteBotReplicaResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteBotVersion {
  export type Input = DeleteBotVersionRequest;
  export type Output = DeleteBotVersionResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCustomVocabulary {
  export type Input = DeleteCustomVocabularyRequest;
  export type Output = DeleteCustomVocabularyResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteExport {
  export type Input = DeleteExportRequest;
  export type Output = DeleteExportResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteImport {
  export type Input = DeleteImportRequest;
  export type Output = DeleteImportResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIntent {
  export type Input = DeleteIntentRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicyStatement {
  export type Input = DeleteResourcePolicyStatementRequest;
  export type Output = DeleteResourcePolicyStatementResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteSlot {
  export type Input = DeleteSlotRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSlotType {
  export type Input = DeleteSlotTypeRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTestSet {
  export type Input = DeleteTestSetRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteUtterances {
  export type Input = DeleteUtterancesRequest;
  export type Output = DeleteUtterancesResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeBot {
  export type Input = DescribeBotRequest;
  export type Output = DescribeBotResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeBotAlias {
  export type Input = DescribeBotAliasRequest;
  export type Output = DescribeBotAliasResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeBotLocale {
  export type Input = DescribeBotLocaleRequest;
  export type Output = DescribeBotLocaleResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeBotRecommendation {
  export type Input = DescribeBotRecommendationRequest;
  export type Output = DescribeBotRecommendationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeBotReplica {
  export type Input = DescribeBotReplicaRequest;
  export type Output = DescribeBotReplicaResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeBotResourceGeneration {
  export type Input = DescribeBotResourceGenerationRequest;
  export type Output = DescribeBotResourceGenerationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeBotVersion {
  export type Input = DescribeBotVersionRequest;
  export type Output = DescribeBotVersionResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeCustomVocabularyMetadata {
  export type Input = DescribeCustomVocabularyMetadataRequest;
  export type Output = DescribeCustomVocabularyMetadataResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeExport {
  export type Input = DescribeExportRequest;
  export type Output = DescribeExportResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeImport {
  export type Input = DescribeImportRequest;
  export type Output = DescribeImportResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeIntent {
  export type Input = DescribeIntentRequest;
  export type Output = DescribeIntentResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeResourcePolicy {
  export type Input = DescribeResourcePolicyRequest;
  export type Output = DescribeResourcePolicyResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeSlot {
  export type Input = DescribeSlotRequest;
  export type Output = DescribeSlotResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSlotType {
  export type Input = DescribeSlotTypeRequest;
  export type Output = DescribeSlotTypeResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeTestExecution {
  export type Input = DescribeTestExecutionRequest;
  export type Output = DescribeTestExecutionResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeTestSet {
  export type Input = DescribeTestSetRequest;
  export type Output = DescribeTestSetResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeTestSetDiscrepancyReport {
  export type Input = DescribeTestSetDiscrepancyReportRequest;
  export type Output = DescribeTestSetDiscrepancyReportResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeTestSetGeneration {
  export type Input = DescribeTestSetGenerationRequest;
  export type Output = DescribeTestSetGenerationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GenerateBotElement {
  export type Input = GenerateBotElementRequest;
  export type Output = GenerateBotElementResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTestExecutionArtifactsUrl {
  export type Input = GetTestExecutionArtifactsUrlRequest;
  export type Output = GetTestExecutionArtifactsUrlResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAggregatedUtterances {
  export type Input = ListAggregatedUtterancesRequest;
  export type Output = ListAggregatedUtterancesResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBotAliases {
  export type Input = ListBotAliasesRequest;
  export type Output = ListBotAliasesResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBotAliasReplicas {
  export type Input = ListBotAliasReplicasRequest;
  export type Output = ListBotAliasReplicasResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBotLocales {
  export type Input = ListBotLocalesRequest;
  export type Output = ListBotLocalesResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBotRecommendations {
  export type Input = ListBotRecommendationsRequest;
  export type Output = ListBotRecommendationsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBotReplicas {
  export type Input = ListBotReplicasRequest;
  export type Output = ListBotReplicasResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBotResourceGenerations {
  export type Input = ListBotResourceGenerationsRequest;
  export type Output = ListBotResourceGenerationsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBots {
  export type Input = ListBotsRequest;
  export type Output = ListBotsResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBotVersionReplicas {
  export type Input = ListBotVersionReplicasRequest;
  export type Output = ListBotVersionReplicasResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBotVersions {
  export type Input = ListBotVersionsRequest;
  export type Output = ListBotVersionsResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBuiltInIntents {
  export type Input = ListBuiltInIntentsRequest;
  export type Output = ListBuiltInIntentsResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBuiltInSlotTypes {
  export type Input = ListBuiltInSlotTypesRequest;
  export type Output = ListBuiltInSlotTypesResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCustomVocabularyItems {
  export type Input = ListCustomVocabularyItemsRequest;
  export type Output = ListCustomVocabularyItemsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExports {
  export type Input = ListExportsRequest;
  export type Output = ListExportsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListImports {
  export type Input = ListImportsRequest;
  export type Output = ListImportsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIntentMetrics {
  export type Input = ListIntentMetricsRequest;
  export type Output = ListIntentMetricsResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIntentPaths {
  export type Input = ListIntentPathsRequest;
  export type Output = ListIntentPathsResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIntents {
  export type Input = ListIntentsRequest;
  export type Output = ListIntentsResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIntentStageMetrics {
  export type Input = ListIntentStageMetricsRequest;
  export type Output = ListIntentStageMetricsResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRecommendedIntents {
  export type Input = ListRecommendedIntentsRequest;
  export type Output = ListRecommendedIntentsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSessionAnalyticsData {
  export type Input = ListSessionAnalyticsDataRequest;
  export type Output = ListSessionAnalyticsDataResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSessionMetrics {
  export type Input = ListSessionMetricsRequest;
  export type Output = ListSessionMetricsResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSlots {
  export type Input = ListSlotsRequest;
  export type Output = ListSlotsResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSlotTypes {
  export type Input = ListSlotTypesRequest;
  export type Output = ListSlotTypesResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTestExecutionResultItems {
  export type Input = ListTestExecutionResultItemsRequest;
  export type Output = ListTestExecutionResultItemsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTestExecutions {
  export type Input = ListTestExecutionsRequest;
  export type Output = ListTestExecutionsResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTestSetRecords {
  export type Input = ListTestSetRecordsRequest;
  export type Output = ListTestSetRecordsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTestSets {
  export type Input = ListTestSetsRequest;
  export type Output = ListTestSetsResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListUtteranceAnalyticsData {
  export type Input = ListUtteranceAnalyticsDataRequest;
  export type Output = ListUtteranceAnalyticsDataResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListUtteranceMetrics {
  export type Input = ListUtteranceMetricsRequest;
  export type Output = ListUtteranceMetricsResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchAssociatedTranscripts {
  export type Input = SearchAssociatedTranscriptsRequest;
  export type Output = SearchAssociatedTranscriptsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartBotRecommendation {
  export type Input = StartBotRecommendationRequest;
  export type Output = StartBotRecommendationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartBotResourceGeneration {
  export type Input = StartBotResourceGenerationRequest;
  export type Output = StartBotResourceGenerationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartImport {
  export type Input = StartImportRequest;
  export type Output = StartImportResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartTestExecution {
  export type Input = StartTestExecutionRequest;
  export type Output = StartTestExecutionResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartTestSetGeneration {
  export type Input = StartTestSetGenerationRequest;
  export type Output = StartTestSetGenerationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopBotRecommendation {
  export type Input = StopBotRecommendationRequest;
  export type Output = StopBotRecommendationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
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
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateBot {
  export type Input = UpdateBotRequest;
  export type Output = UpdateBotResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateBotAlias {
  export type Input = UpdateBotAliasRequest;
  export type Output = UpdateBotAliasResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateBotLocale {
  export type Input = UpdateBotLocaleRequest;
  export type Output = UpdateBotLocaleResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateBotRecommendation {
  export type Input = UpdateBotRecommendationRequest;
  export type Output = UpdateBotRecommendationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateExport {
  export type Input = UpdateExportRequest;
  export type Output = UpdateExportResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateIntent {
  export type Input = UpdateIntentRequest;
  export type Output = UpdateIntentResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResourcePolicy {
  export type Input = UpdateResourcePolicyRequest;
  export type Output = UpdateResourcePolicyResponse;
  export type Error =
    | InternalServerException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSlot {
  export type Input = UpdateSlotRequest;
  export type Output = UpdateSlotResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSlotType {
  export type Input = UpdateSlotTypeRequest;
  export type Output = UpdateSlotTypeResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTestSet {
  export type Input = UpdateTestSetRequest;
  export type Output = UpdateTestSetResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | PreconditionFailedException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "Lex Models V2",
  version: "2020-08-07",
  protocol: "restJson1",
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
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;

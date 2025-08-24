import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class EntityResolution extends AWSServiceClient {
  addPolicyStatement(
    input: AddPolicyStatementInput,
  ): Effect.Effect<
    AddPolicyStatementOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchDeleteUniqueId(
    input: BatchDeleteUniqueIdInput,
  ): Effect.Effect<
    BatchDeleteUniqueIdOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createIdMappingWorkflow(
    input: CreateIdMappingWorkflowInput,
  ): Effect.Effect<
    CreateIdMappingWorkflowOutput,
    | AccessDeniedException
    | ConflictException
    | ExceedsLimitException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createIdNamespace(
    input: CreateIdNamespaceInput,
  ): Effect.Effect<
    CreateIdNamespaceOutput,
    | AccessDeniedException
    | ConflictException
    | ExceedsLimitException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createMatchingWorkflow(
    input: CreateMatchingWorkflowInput,
  ): Effect.Effect<
    CreateMatchingWorkflowOutput,
    | AccessDeniedException
    | ConflictException
    | ExceedsLimitException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSchemaMapping(
    input: CreateSchemaMappingInput,
  ): Effect.Effect<
    CreateSchemaMappingOutput,
    | AccessDeniedException
    | ConflictException
    | ExceedsLimitException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteIdMappingWorkflow(
    input: DeleteIdMappingWorkflowInput,
  ): Effect.Effect<
    DeleteIdMappingWorkflowOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteIdNamespace(
    input: DeleteIdNamespaceInput,
  ): Effect.Effect<
    DeleteIdNamespaceOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteMatchingWorkflow(
    input: DeleteMatchingWorkflowInput,
  ): Effect.Effect<
    DeleteMatchingWorkflowOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePolicyStatement(
    input: DeletePolicyStatementInput,
  ): Effect.Effect<
    DeletePolicyStatementOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteSchemaMapping(
    input: DeleteSchemaMappingInput,
  ): Effect.Effect<
    DeleteSchemaMappingOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  generateMatchId(
    input: GenerateMatchIdInput,
  ): Effect.Effect<
    GenerateMatchIdOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getIdMappingJob(
    input: GetIdMappingJobInput,
  ): Effect.Effect<
    GetIdMappingJobOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getIdMappingWorkflow(
    input: GetIdMappingWorkflowInput,
  ): Effect.Effect<
    GetIdMappingWorkflowOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getIdNamespace(
    input: GetIdNamespaceInput,
  ): Effect.Effect<
    GetIdNamespaceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMatchId(
    input: GetMatchIdInput,
  ): Effect.Effect<
    GetMatchIdOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMatchingJob(
    input: GetMatchingJobInput,
  ): Effect.Effect<
    GetMatchingJobOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMatchingWorkflow(
    input: GetMatchingWorkflowInput,
  ): Effect.Effect<
    GetMatchingWorkflowOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPolicy(
    input: GetPolicyInput,
  ): Effect.Effect<
    GetPolicyOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getProviderService(
    input: GetProviderServiceInput,
  ): Effect.Effect<
    GetProviderServiceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSchemaMapping(
    input: GetSchemaMappingInput,
  ): Effect.Effect<
    GetSchemaMappingOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listIdMappingJobs(
    input: ListIdMappingJobsInput,
  ): Effect.Effect<
    ListIdMappingJobsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listIdMappingWorkflows(
    input: ListIdMappingWorkflowsInput,
  ): Effect.Effect<
    ListIdMappingWorkflowsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listIdNamespaces(
    input: ListIdNamespacesInput,
  ): Effect.Effect<
    ListIdNamespacesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMatchingJobs(
    input: ListMatchingJobsInput,
  ): Effect.Effect<
    ListMatchingJobsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMatchingWorkflows(
    input: ListMatchingWorkflowsInput,
  ): Effect.Effect<
    ListMatchingWorkflowsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProviderServices(
    input: ListProviderServicesInput,
  ): Effect.Effect<
    ListProviderServicesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSchemaMappings(
    input: ListSchemaMappingsInput,
  ): Effect.Effect<
    ListSchemaMappingsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putPolicy(
    input: PutPolicyInput,
  ): Effect.Effect<
    PutPolicyOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startIdMappingJob(
    input: StartIdMappingJobInput,
  ): Effect.Effect<
    StartIdMappingJobOutput,
    | AccessDeniedException
    | ConflictException
    | ExceedsLimitException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startMatchingJob(
    input: StartMatchingJobInput,
  ): Effect.Effect<
    StartMatchingJobOutput,
    | AccessDeniedException
    | ConflictException
    | ExceedsLimitException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  updateIdMappingWorkflow(
    input: UpdateIdMappingWorkflowInput,
  ): Effect.Effect<
    UpdateIdMappingWorkflowOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateIdNamespace(
    input: UpdateIdNamespaceInput,
  ): Effect.Effect<
    UpdateIdNamespaceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateMatchingWorkflow(
    input: UpdateMatchingWorkflowInput,
  ): Effect.Effect<
    UpdateMatchingWorkflowOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSchemaMapping(
    input: UpdateSchemaMappingInput,
  ): Effect.Effect<
    UpdateSchemaMappingOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Entityresolution extends EntityResolution {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AddPolicyStatementInput {
  arn: string;
  statementId: string;
  effect: StatementEffect;
  action: Array<string>;
  principal: Array<string>;
  condition?: string;
}
export interface AddPolicyStatementOutput {
  arn: string;
  token: string;
  policy?: string;
}
export type AttributeMatchingModel = "ONE_TO_ONE" | "MANY_TO_MANY";
export type AttributeName = string;

export type AwsAccountId = string;

export type AwsAccountIdList = Array<string>;
export interface BatchDeleteUniqueIdInput {
  workflowName: string;
  inputSource?: string;
  uniqueIds: Array<string>;
}
export interface BatchDeleteUniqueIdOutput {
  status: DeleteUniqueIdStatus;
  errors: Array<DeleteUniqueIdError>;
  deleted: Array<DeletedUniqueId>;
  disconnectedUniqueIds: Array<string>;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateIdMappingWorkflowInput {
  workflowName: string;
  description?: string;
  inputSourceConfig: Array<IdMappingWorkflowInputSource>;
  outputSourceConfig?: Array<IdMappingWorkflowOutputSource>;
  idMappingTechniques: IdMappingTechniques;
  roleArn?: string;
  tags?: Record<string, string>;
}
export interface CreateIdMappingWorkflowOutput {
  workflowName: string;
  workflowArn: string;
  description?: string;
  inputSourceConfig: Array<IdMappingWorkflowInputSource>;
  outputSourceConfig?: Array<IdMappingWorkflowOutputSource>;
  idMappingTechniques: IdMappingTechniques;
  roleArn?: string;
}
export interface CreateIdNamespaceInput {
  idNamespaceName: string;
  description?: string;
  inputSourceConfig?: Array<IdNamespaceInputSource>;
  idMappingWorkflowProperties?: Array<IdNamespaceIdMappingWorkflowProperties>;
  type: IdNamespaceType;
  roleArn?: string;
  tags?: Record<string, string>;
}
export interface CreateIdNamespaceOutput {
  idNamespaceName: string;
  idNamespaceArn: string;
  description?: string;
  inputSourceConfig?: Array<IdNamespaceInputSource>;
  idMappingWorkflowProperties?: Array<IdNamespaceIdMappingWorkflowProperties>;
  type: IdNamespaceType;
  roleArn?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  tags?: Record<string, string>;
}
export interface CreateMatchingWorkflowInput {
  workflowName: string;
  description?: string;
  inputSourceConfig: Array<InputSource>;
  outputSourceConfig: Array<OutputSource>;
  resolutionTechniques: ResolutionTechniques;
  incrementalRunConfig?: IncrementalRunConfig;
  roleArn: string;
  tags?: Record<string, string>;
}
export interface CreateMatchingWorkflowOutput {
  workflowName: string;
  workflowArn: string;
  description?: string;
  inputSourceConfig: Array<InputSource>;
  outputSourceConfig: Array<OutputSource>;
  resolutionTechniques: ResolutionTechniques;
  incrementalRunConfig?: IncrementalRunConfig;
  roleArn: string;
}
export interface CreateSchemaMappingInput {
  schemaName: string;
  description?: string;
  mappedInputFields: Array<SchemaInputAttribute>;
  tags?: Record<string, string>;
}
export interface CreateSchemaMappingOutput {
  schemaName: string;
  schemaArn: string;
  description: string;
  mappedInputFields: Array<SchemaInputAttribute>;
}
export interface DeletedUniqueId {
  uniqueId: string;
}
export type DeletedUniqueIdList = Array<DeletedUniqueId>;
export interface DeleteIdMappingWorkflowInput {
  workflowName: string;
}
export interface DeleteIdMappingWorkflowOutput {
  message: string;
}
export interface DeleteIdNamespaceInput {
  idNamespaceName: string;
}
export interface DeleteIdNamespaceOutput {
  message: string;
}
export interface DeleteMatchingWorkflowInput {
  workflowName: string;
}
export interface DeleteMatchingWorkflowOutput {
  message: string;
}
export interface DeletePolicyStatementInput {
  arn: string;
  statementId: string;
}
export interface DeletePolicyStatementOutput {
  arn: string;
  token: string;
  policy?: string;
}
export interface DeleteSchemaMappingInput {
  schemaName: string;
}
export interface DeleteSchemaMappingOutput {
  message: string;
}
export interface DeleteUniqueIdError {
  uniqueId: string;
  errorType: DeleteUniqueIdErrorType;
}
export type DeleteUniqueIdErrorsList = Array<DeleteUniqueIdError>;
export type DeleteUniqueIdErrorType = "SERVICE_ERROR" | "VALIDATION_ERROR";
export type DeleteUniqueIdStatus = "COMPLETED" | "ACCEPTED";
export type Description = string;

export type DisconnectedUniqueIdsList = Array<string>;
export type EntityName = string;

export type EntityNameOrIdMappingWorkflowArn = string;

export type EntityNameOrIdNamespaceArn = string;

export interface ErrorDetails {
  errorMessage?: string;
}
export type ErrorMessage = string;

export declare class ExceedsLimitException extends EffectData.TaggedError(
  "ExceedsLimitException",
)<{
  readonly message?: string;
  readonly quotaName?: string;
  readonly quotaValue?: number;
}> {}
export interface FailedRecord {
  inputSourceARN: string;
  uniqueId: string;
  errorMessage: string;
}
export type FailedRecordsList = Array<FailedRecord>;
export interface GenerateMatchIdInput {
  workflowName: string;
  records: Array<EntityresolutionRecord>;
  processingType?: ProcessingType;
}
export interface GenerateMatchIdOutput {
  matchGroups: Array<MatchGroup>;
  failedRecords: Array<FailedRecord>;
}
export interface GetIdMappingJobInput {
  workflowName: string;
  jobId: string;
}
export interface GetIdMappingJobOutput {
  jobId: string;
  status: JobStatus;
  startTime: Date | string;
  endTime?: Date | string;
  metrics?: IdMappingJobMetrics;
  errorDetails?: ErrorDetails;
  outputSourceConfig?: Array<IdMappingJobOutputSource>;
}
export interface GetIdMappingWorkflowInput {
  workflowName: string;
}
export interface GetIdMappingWorkflowOutput {
  workflowName: string;
  workflowArn: string;
  description?: string;
  inputSourceConfig: Array<IdMappingWorkflowInputSource>;
  outputSourceConfig?: Array<IdMappingWorkflowOutputSource>;
  idMappingTechniques: IdMappingTechniques;
  createdAt: Date | string;
  updatedAt: Date | string;
  roleArn?: string;
  tags?: Record<string, string>;
}
export interface GetIdNamespaceInput {
  idNamespaceName: string;
}
export interface GetIdNamespaceOutput {
  idNamespaceName: string;
  idNamespaceArn: string;
  description?: string;
  inputSourceConfig?: Array<IdNamespaceInputSource>;
  idMappingWorkflowProperties?: Array<IdNamespaceIdMappingWorkflowProperties>;
  type: IdNamespaceType;
  roleArn?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  tags?: Record<string, string>;
}
export interface GetMatchIdInput {
  workflowName: string;
  record: Record<string, string>;
  applyNormalization?: boolean;
}
export interface GetMatchIdOutput {
  matchId?: string;
  matchRule?: string;
}
export interface GetMatchingJobInput {
  workflowName: string;
  jobId: string;
}
export interface GetMatchingJobOutput {
  jobId: string;
  status: JobStatus;
  startTime: Date | string;
  endTime?: Date | string;
  metrics?: JobMetrics;
  errorDetails?: ErrorDetails;
  outputSourceConfig?: Array<JobOutputSource>;
}
export interface GetMatchingWorkflowInput {
  workflowName: string;
}
export interface GetMatchingWorkflowOutput {
  workflowName: string;
  workflowArn: string;
  description?: string;
  inputSourceConfig: Array<InputSource>;
  outputSourceConfig: Array<OutputSource>;
  resolutionTechniques: ResolutionTechniques;
  createdAt: Date | string;
  updatedAt: Date | string;
  incrementalRunConfig?: IncrementalRunConfig;
  roleArn: string;
  tags?: Record<string, string>;
}
export interface GetPolicyInput {
  arn: string;
}
export interface GetPolicyOutput {
  arn: string;
  token: string;
  policy?: string;
}
export interface GetProviderServiceInput {
  providerName: string;
  providerServiceName: string;
}
export interface GetProviderServiceOutput {
  providerName: string;
  providerServiceName: string;
  providerServiceDisplayName: string;
  providerServiceType: ServiceType;
  providerServiceArn: string;
  providerConfigurationDefinition?: unknown;
  providerIdNameSpaceConfiguration?: ProviderIdNameSpaceConfiguration;
  providerJobConfiguration?: unknown;
  providerEndpointConfiguration: ProviderEndpointConfiguration;
  anonymizedOutput: boolean;
  providerEntityOutputDefinition: unknown;
  providerIntermediateDataAccessConfiguration?: ProviderIntermediateDataAccessConfiguration;
  providerComponentSchema?: ProviderComponentSchema;
}
export interface GetSchemaMappingInput {
  schemaName: string;
}
export interface GetSchemaMappingOutput {
  schemaName: string;
  schemaArn: string;
  description?: string;
  mappedInputFields: Array<SchemaInputAttribute>;
  createdAt: Date | string;
  updatedAt: Date | string;
  tags?: Record<string, string>;
  hasWorkflows: boolean;
}
export type HeaderSafeUniqueId = string;

export interface IdMappingJobMetrics {
  inputRecords?: number;
  totalRecordsProcessed?: number;
  recordsNotProcessed?: number;
  totalMappedRecords?: number;
  totalMappedSourceRecords?: number;
  totalMappedTargetRecords?: number;
  uniqueRecordsLoaded?: number;
}
export interface IdMappingJobOutputSource {
  roleArn: string;
  outputS3Path: string;
  KMSArn?: string;
}
export type IdMappingJobOutputSourceConfig = Array<IdMappingJobOutputSource>;
export type IdMappingRoleArn = string;

export interface IdMappingRuleBasedProperties {
  rules?: Array<Rule>;
  ruleDefinitionType: IdMappingWorkflowRuleDefinitionType;
  attributeMatchingModel: AttributeMatchingModel;
  recordMatchingModel: RecordMatchingModel;
}
export interface IdMappingTechniques {
  idMappingType: IdMappingType;
  ruleBasedProperties?: IdMappingRuleBasedProperties;
  providerProperties?: ProviderProperties;
}
export type IdMappingType = "PROVIDER" | "RULE_BASED";
export type IdMappingWorkflowArn = string;

export interface IdMappingWorkflowInputSource {
  inputSourceARN: string;
  schemaName?: string;
  type?: IdNamespaceType;
}
export type IdMappingWorkflowInputSourceConfig =
  Array<IdMappingWorkflowInputSource>;
export type IdMappingWorkflowList = Array<IdMappingWorkflowSummary>;
export interface IdMappingWorkflowOutputSource {
  outputS3Path: string;
  KMSArn?: string;
}
export type IdMappingWorkflowOutputSourceConfig =
  Array<IdMappingWorkflowOutputSource>;
export type IdMappingWorkflowRuleDefinitionType = "SOURCE" | "TARGET";
export type IdMappingWorkflowRuleDefinitionTypeList =
  Array<IdMappingWorkflowRuleDefinitionType>;
export interface IdMappingWorkflowSummary {
  workflowName: string;
  workflowArn: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export type IdNamespaceArn = string;

export interface IdNamespaceIdMappingWorkflowMetadata {
  idMappingType: IdMappingType;
}
export type IdNamespaceIdMappingWorkflowMetadataList =
  Array<IdNamespaceIdMappingWorkflowMetadata>;
export interface IdNamespaceIdMappingWorkflowProperties {
  idMappingType: IdMappingType;
  ruleBasedProperties?: NamespaceRuleBasedProperties;
  providerProperties?: NamespaceProviderProperties;
}
export type IdNamespaceIdMappingWorkflowPropertiesList =
  Array<IdNamespaceIdMappingWorkflowProperties>;
export interface IdNamespaceInputSource {
  inputSourceARN: string;
  schemaName?: string;
}
export type IdNamespaceInputSourceConfig = Array<IdNamespaceInputSource>;
export type IdNamespaceList = Array<IdNamespaceSummary>;
export interface IdNamespaceSummary {
  idNamespaceName: string;
  idNamespaceArn: string;
  description?: string;
  idMappingWorkflowProperties?: Array<IdNamespaceIdMappingWorkflowMetadata>;
  type: IdNamespaceType;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export type IdNamespaceType = "SOURCE" | "TARGET";
export interface IncrementalRunConfig {
  incrementalRunType?: IncrementalRunType;
}
export type IncrementalRunType = "IMMEDIATE";
export interface InputSource {
  inputSourceARN: string;
  schemaName: string;
  applyNormalization?: boolean;
}
export type InputSourceConfig = Array<InputSource>;
export interface IntermediateSourceConfiguration {
  intermediateS3Path: string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type JobId = string;

export type JobList = Array<JobSummary>;
export interface JobMetrics {
  inputRecords?: number;
  totalRecordsProcessed?: number;
  recordsNotProcessed?: number;
  matchIDs?: number;
}
export interface JobOutputSource {
  roleArn: string;
  outputS3Path: string;
  KMSArn?: string;
}
export type JobOutputSourceConfig = Array<JobOutputSource>;
export type JobStatus = "RUNNING" | "SUCCEEDED" | "FAILED" | "QUEUED";
export interface JobSummary {
  jobId: string;
  status: JobStatus;
  startTime: Date | string;
  endTime?: Date | string;
}
export type KMSArn = string;

export interface ListIdMappingJobsInput {
  workflowName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListIdMappingJobsOutput {
  jobs?: Array<JobSummary>;
  nextToken?: string;
}
export interface ListIdMappingWorkflowsInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListIdMappingWorkflowsOutput {
  workflowSummaries?: Array<IdMappingWorkflowSummary>;
  nextToken?: string;
}
export interface ListIdNamespacesInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListIdNamespacesOutput {
  idNamespaceSummaries?: Array<IdNamespaceSummary>;
  nextToken?: string;
}
export interface ListMatchingJobsInput {
  workflowName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListMatchingJobsOutput {
  jobs?: Array<JobSummary>;
  nextToken?: string;
}
export interface ListMatchingWorkflowsInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListMatchingWorkflowsOutput {
  workflowSummaries?: Array<MatchingWorkflowSummary>;
  nextToken?: string;
}
export interface ListProviderServicesInput {
  nextToken?: string;
  maxResults?: number;
  providerName?: string;
}
export interface ListProviderServicesOutput {
  providerServiceSummaries?: Array<ProviderServiceSummary>;
  nextToken?: string;
}
export interface ListSchemaMappingsInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListSchemaMappingsOutput {
  schemaList?: Array<SchemaMappingSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags: Record<string, string>;
}
export interface MatchedRecord {
  inputSourceARN: string;
  recordId: string;
}
export type MatchedRecordsList = Array<MatchedRecord>;
export interface MatchGroup {
  records: Array<MatchedRecord>;
  matchId: string;
  matchRule: string;
}
export type MatchGroupsList = Array<MatchGroup>;
export type MatchingKeys = Array<string>;
export type MatchingWorkflowArn = string;

export type MatchingWorkflowList = Array<MatchingWorkflowSummary>;
export interface MatchingWorkflowSummary {
  workflowName: string;
  workflowArn: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  resolutionType: ResolutionType;
}
export type MatchPurpose = "IDENTIFIER_GENERATION" | "INDEXING";
export interface NamespaceProviderProperties {
  providerServiceArn: string;
  providerConfiguration?: unknown;
}
export interface NamespaceRuleBasedProperties {
  rules?: Array<Rule>;
  ruleDefinitionTypes?: Array<IdMappingWorkflowRuleDefinitionType>;
  attributeMatchingModel?: AttributeMatchingModel;
  recordMatchingModels?: Array<RecordMatchingModel>;
}
export type NextToken = string;

export interface OutputAttribute {
  name: string;
  hashed?: boolean;
}
export type OutputAttributes = Array<OutputAttribute>;
export interface OutputSource {
  outputS3Path: string;
  KMSArn?: string;
  output: Array<OutputAttribute>;
  applyNormalization?: boolean;
}
export type OutputSourceConfig = Array<OutputSource>;
export type PolicyDocument = string;

export type PolicyToken = string;

export type ProcessingType = "CONSISTENT" | "EVENTUAL" | "EVENTUAL_NO_LOOKUP";
export interface ProviderComponentSchema {
  schemas?: Array<Array<string>>;
  providerSchemaAttributes?: Array<ProviderSchemaAttribute>;
}
interface _ProviderEndpointConfiguration {
  marketplaceConfiguration?: ProviderMarketplaceConfiguration;
}

export type ProviderEndpointConfiguration = _ProviderEndpointConfiguration & {
  marketplaceConfiguration: ProviderMarketplaceConfiguration;
};
export interface ProviderIdNameSpaceConfiguration {
  description?: string;
  providerTargetConfigurationDefinition?: unknown;
  providerSourceConfigurationDefinition?: unknown;
}
export interface ProviderIntermediateDataAccessConfiguration {
  awsAccountIds?: Array<string>;
  requiredBucketActions?: Array<string>;
}
export interface ProviderMarketplaceConfiguration {
  dataSetId: string;
  revisionId: string;
  assetId: string;
  listingId: string;
}
export interface ProviderProperties {
  providerServiceArn: string;
  providerConfiguration?: unknown;
  intermediateSourceConfiguration?: IntermediateSourceConfiguration;
}
export interface ProviderSchemaAttribute {
  fieldName: string;
  type: SchemaAttributeType;
  subType?: string;
  hashing?: boolean;
}
export type ProviderSchemaAttributes = Array<ProviderSchemaAttribute>;
export type ProviderServiceArn = string;

export type ProviderServiceDisplayName = string;

export type ProviderServiceList = Array<ProviderServiceSummary>;
export interface ProviderServiceSummary {
  providerServiceArn: string;
  providerName: string;
  providerServiceDisplayName: string;
  providerServiceName: string;
  providerServiceType: ServiceType;
}
export interface PutPolicyInput {
  arn: string;
  token?: string;
  policy: string;
}
export interface PutPolicyOutput {
  arn: string;
  token: string;
  policy?: string;
}
export interface EntityresolutionRecord {
  inputSourceARN: string;
  uniqueId: string;
  recordAttributeMap: Record<string, string>;
}
export type RecordAttributeMap = Record<string, string>;
export type RecordAttributeMapString255 = Record<string, string>;
export type RecordList = Array<EntityresolutionRecord>;
export type RecordMatchingModel =
  | "ONE_SOURCE_TO_ONE_TARGET"
  | "MANY_SOURCE_TO_ONE_TARGET";
export type RecordMatchingModelList = Array<RecordMatchingModel>;
export type RequiredBucketActionsList = Array<string>;
export interface ResolutionTechniques {
  resolutionType: ResolutionType;
  ruleBasedProperties?: RuleBasedProperties;
  ruleConditionProperties?: RuleConditionProperties;
  providerProperties?: ProviderProperties;
}
export type ResolutionType = "RULE_MATCHING" | "ML_MATCHING" | "PROVIDER";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RoleArn = string;

export interface Rule {
  ruleName: string;
  matchingKeys: Array<string>;
}
export interface RuleBasedProperties {
  rules: Array<Rule>;
  attributeMatchingModel: AttributeMatchingModel;
  matchPurpose?: MatchPurpose;
}
export interface RuleCondition {
  ruleName: string;
  condition: string;
}
export type RuleConditionList = Array<RuleCondition>;
export interface RuleConditionProperties {
  rules: Array<RuleCondition>;
}
export type RuleList = Array<Rule>;
export type S3Path = string;

export type SchemaAttributeType =
  | "NAME"
  | "NAME_FIRST"
  | "NAME_MIDDLE"
  | "NAME_LAST"
  | "ADDRESS"
  | "ADDRESS_STREET1"
  | "ADDRESS_STREET2"
  | "ADDRESS_STREET3"
  | "ADDRESS_CITY"
  | "ADDRESS_STATE"
  | "ADDRESS_COUNTRY"
  | "ADDRESS_POSTALCODE"
  | "PHONE"
  | "PHONE_NUMBER"
  | "PHONE_COUNTRYCODE"
  | "EMAIL_ADDRESS"
  | "UNIQUE_ID"
  | "DATE"
  | "STRING"
  | "PROVIDER_ID"
  | "IPV4"
  | "IPV6"
  | "MAID";
export interface SchemaInputAttribute {
  fieldName: string;
  type: SchemaAttributeType;
  groupName?: string;
  matchKey?: string;
  subType?: string;
  hashed?: boolean;
}
export type SchemaInputAttributes = Array<SchemaInputAttribute>;
export type SchemaList = Array<string>;
export type SchemaMappingArn = string;

export type SchemaMappingList = Array<SchemaMappingSummary>;
export interface SchemaMappingSummary {
  schemaName: string;
  schemaArn: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  hasWorkflows: boolean;
}
export type Schemas = Array<Array<string>>;
export type ServiceType = "ASSIGNMENT" | "ID_MAPPING";
export interface StartIdMappingJobInput {
  workflowName: string;
  outputSourceConfig?: Array<IdMappingJobOutputSource>;
}
export interface StartIdMappingJobOutput {
  jobId: string;
  outputSourceConfig?: Array<IdMappingJobOutputSource>;
}
export interface StartMatchingJobInput {
  workflowName: string;
}
export interface StartMatchingJobOutput {
  jobId: string;
}
export type StatementAction = string;

export type StatementActionList = Array<string>;
export type StatementCondition = string;

export type StatementEffect = "Allow" | "Deny";
export type StatementId = string;

export type StatementPrincipal = string;

export type StatementPrincipalList = Array<string>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type UniqueId = string;

export type UniqueIdList = Array<string>;
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateIdMappingWorkflowInput {
  workflowName: string;
  description?: string;
  inputSourceConfig: Array<IdMappingWorkflowInputSource>;
  outputSourceConfig?: Array<IdMappingWorkflowOutputSource>;
  idMappingTechniques: IdMappingTechniques;
  roleArn?: string;
}
export interface UpdateIdMappingWorkflowOutput {
  workflowName: string;
  workflowArn: string;
  description?: string;
  inputSourceConfig: Array<IdMappingWorkflowInputSource>;
  outputSourceConfig?: Array<IdMappingWorkflowOutputSource>;
  idMappingTechniques: IdMappingTechniques;
  roleArn?: string;
}
export interface UpdateIdNamespaceInput {
  idNamespaceName: string;
  description?: string;
  inputSourceConfig?: Array<IdNamespaceInputSource>;
  idMappingWorkflowProperties?: Array<IdNamespaceIdMappingWorkflowProperties>;
  roleArn?: string;
}
export interface UpdateIdNamespaceOutput {
  idNamespaceName: string;
  idNamespaceArn: string;
  description?: string;
  inputSourceConfig?: Array<IdNamespaceInputSource>;
  idMappingWorkflowProperties?: Array<IdNamespaceIdMappingWorkflowProperties>;
  type: IdNamespaceType;
  roleArn?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export interface UpdateMatchingWorkflowInput {
  workflowName: string;
  description?: string;
  inputSourceConfig: Array<InputSource>;
  outputSourceConfig: Array<OutputSource>;
  resolutionTechniques: ResolutionTechniques;
  incrementalRunConfig?: IncrementalRunConfig;
  roleArn: string;
}
export interface UpdateMatchingWorkflowOutput {
  workflowName: string;
  description?: string;
  inputSourceConfig: Array<InputSource>;
  outputSourceConfig: Array<OutputSource>;
  resolutionTechniques: ResolutionTechniques;
  incrementalRunConfig?: IncrementalRunConfig;
  roleArn: string;
}
export interface UpdateSchemaMappingInput {
  schemaName: string;
  description?: string;
  mappedInputFields: Array<SchemaInputAttribute>;
}
export interface UpdateSchemaMappingOutput {
  schemaName: string;
  schemaArn: string;
  description?: string;
  mappedInputFields: Array<SchemaInputAttribute>;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type VeniceGlobalArn = string;

export declare namespace AddPolicyStatement {
  export type Input = AddPolicyStatementInput;
  export type Output = AddPolicyStatementOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchDeleteUniqueId {
  export type Input = BatchDeleteUniqueIdInput;
  export type Output = BatchDeleteUniqueIdOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIdMappingWorkflow {
  export type Input = CreateIdMappingWorkflowInput;
  export type Output = CreateIdMappingWorkflowOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ExceedsLimitException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIdNamespace {
  export type Input = CreateIdNamespaceInput;
  export type Output = CreateIdNamespaceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ExceedsLimitException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateMatchingWorkflow {
  export type Input = CreateMatchingWorkflowInput;
  export type Output = CreateMatchingWorkflowOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ExceedsLimitException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSchemaMapping {
  export type Input = CreateSchemaMappingInput;
  export type Output = CreateSchemaMappingOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ExceedsLimitException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIdMappingWorkflow {
  export type Input = DeleteIdMappingWorkflowInput;
  export type Output = DeleteIdMappingWorkflowOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIdNamespace {
  export type Input = DeleteIdNamespaceInput;
  export type Output = DeleteIdNamespaceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMatchingWorkflow {
  export type Input = DeleteMatchingWorkflowInput;
  export type Output = DeleteMatchingWorkflowOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePolicyStatement {
  export type Input = DeletePolicyStatementInput;
  export type Output = DeletePolicyStatementOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSchemaMapping {
  export type Input = DeleteSchemaMappingInput;
  export type Output = DeleteSchemaMappingOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GenerateMatchId {
  export type Input = GenerateMatchIdInput;
  export type Output = GenerateMatchIdOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIdMappingJob {
  export type Input = GetIdMappingJobInput;
  export type Output = GetIdMappingJobOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIdMappingWorkflow {
  export type Input = GetIdMappingWorkflowInput;
  export type Output = GetIdMappingWorkflowOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIdNamespace {
  export type Input = GetIdNamespaceInput;
  export type Output = GetIdNamespaceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMatchId {
  export type Input = GetMatchIdInput;
  export type Output = GetMatchIdOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMatchingJob {
  export type Input = GetMatchingJobInput;
  export type Output = GetMatchingJobOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMatchingWorkflow {
  export type Input = GetMatchingWorkflowInput;
  export type Output = GetMatchingWorkflowOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPolicy {
  export type Input = GetPolicyInput;
  export type Output = GetPolicyOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProviderService {
  export type Input = GetProviderServiceInput;
  export type Output = GetProviderServiceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSchemaMapping {
  export type Input = GetSchemaMappingInput;
  export type Output = GetSchemaMappingOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIdMappingJobs {
  export type Input = ListIdMappingJobsInput;
  export type Output = ListIdMappingJobsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIdMappingWorkflows {
  export type Input = ListIdMappingWorkflowsInput;
  export type Output = ListIdMappingWorkflowsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIdNamespaces {
  export type Input = ListIdNamespacesInput;
  export type Output = ListIdNamespacesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMatchingJobs {
  export type Input = ListMatchingJobsInput;
  export type Output = ListMatchingJobsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMatchingWorkflows {
  export type Input = ListMatchingWorkflowsInput;
  export type Output = ListMatchingWorkflowsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProviderServices {
  export type Input = ListProviderServicesInput;
  export type Output = ListProviderServicesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSchemaMappings {
  export type Input = ListSchemaMappingsInput;
  export type Output = ListSchemaMappingsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutPolicy {
  export type Input = PutPolicyInput;
  export type Output = PutPolicyOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartIdMappingJob {
  export type Input = StartIdMappingJobInput;
  export type Output = StartIdMappingJobOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ExceedsLimitException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartMatchingJob {
  export type Input = StartMatchingJobInput;
  export type Output = StartMatchingJobOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ExceedsLimitException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateIdMappingWorkflow {
  export type Input = UpdateIdMappingWorkflowInput;
  export type Output = UpdateIdMappingWorkflowOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateIdNamespace {
  export type Input = UpdateIdNamespaceInput;
  export type Output = UpdateIdNamespaceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMatchingWorkflow {
  export type Input = UpdateMatchingWorkflowInput;
  export type Output = UpdateMatchingWorkflowOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSchemaMapping {
  export type Input = UpdateSchemaMappingInput;
  export type Output = UpdateSchemaMappingOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "EntityResolution",
  version: "2018-05-10",
  protocol: "restJson1",
  operations: {
    AddPolicyStatement: "POST /policies/{arn}/{statementId}",
    BatchDeleteUniqueId: "DELETE /matchingworkflows/{workflowName}/uniqueids",
    CreateIdMappingWorkflow: "POST /idmappingworkflows",
    CreateIdNamespace: "POST /idnamespaces",
    CreateMatchingWorkflow: "POST /matchingworkflows",
    CreateSchemaMapping: "POST /schemas",
    DeleteIdMappingWorkflow: "DELETE /idmappingworkflows/{workflowName}",
    DeleteIdNamespace: "DELETE /idnamespaces/{idNamespaceName}",
    DeleteMatchingWorkflow: "DELETE /matchingworkflows/{workflowName}",
    DeletePolicyStatement: "DELETE /policies/{arn}/{statementId}",
    DeleteSchemaMapping: "DELETE /schemas/{schemaName}",
    GenerateMatchId: "POST /matchingworkflows/{workflowName}/generateMatches",
    GetIdMappingJob: "GET /idmappingworkflows/{workflowName}/jobs/{jobId}",
    GetIdMappingWorkflow: "GET /idmappingworkflows/{workflowName}",
    GetIdNamespace: "GET /idnamespaces/{idNamespaceName}",
    GetMatchId: "POST /matchingworkflows/{workflowName}/matches",
    GetMatchingJob: "GET /matchingworkflows/{workflowName}/jobs/{jobId}",
    GetMatchingWorkflow: "GET /matchingworkflows/{workflowName}",
    GetPolicy: "GET /policies/{arn}",
    GetProviderService:
      "GET /providerservices/{providerName}/{providerServiceName}",
    GetSchemaMapping: "GET /schemas/{schemaName}",
    ListIdMappingJobs: "GET /idmappingworkflows/{workflowName}/jobs",
    ListIdMappingWorkflows: "GET /idmappingworkflows",
    ListIdNamespaces: "GET /idnamespaces",
    ListMatchingJobs: "GET /matchingworkflows/{workflowName}/jobs",
    ListMatchingWorkflows: "GET /matchingworkflows",
    ListProviderServices: "GET /providerservices",
    ListSchemaMappings: "GET /schemas",
    ListTagsForResource: "GET /tags/{resourceArn}",
    PutPolicy: "PUT /policies/{arn}",
    StartIdMappingJob: "POST /idmappingworkflows/{workflowName}/jobs",
    StartMatchingJob: "POST /matchingworkflows/{workflowName}/jobs",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateIdMappingWorkflow: "PUT /idmappingworkflows/{workflowName}",
    UpdateIdNamespace: "PUT /idnamespaces/{idNamespaceName}",
    UpdateMatchingWorkflow: "PUT /matchingworkflows/{workflowName}",
    UpdateSchemaMapping: "PUT /schemas/{schemaName}",
  },
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;

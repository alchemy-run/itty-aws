import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class CleanRooms extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export declare class Cleanrooms extends CleanRooms {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
  readonly reason?: string;
}> {}
export type AccessDeniedExceptionReason = string;

export type AccountId = string;

export type AdditionalAnalyses = "ALLOWED" | "REQUIRED" | "NOT_ALLOWED";
export type AdditionalAnalysesResourceArn = string;

export interface AggregateColumn {
  columnNames: Array<string>;
  function: string;
}
export type AggregateColumnList = Array<AggregateColumn>;
export type AggregateFunctionName = string;

export interface AggregationConstraint {
  columnName: string;
  minimum: number;
  type: string;
}
export type AggregationConstraints = Array<AggregationConstraint>;
export type AggregationType = string;

export type AllowedAdditionalAnalyses = Array<string>;
export type AllowedAnalysesList = Array<string>;
export type AllowedAnalysisProviderList = Array<string>;
export type AllowedColumnList = Array<string>;
export type AllowedResultReceivers = Array<string>;
export type AnalysisFormat = "SQL" | "PYSPARK_1_0";
export type AnalysisMethod = "DIRECT_QUERY" | "DIRECT_JOB" | "MULTIPLE";
export interface AnalysisParameter {
  name: string;
  type: ParameterType;
  defaultValue?: string;
}
export type AnalysisParameterList = Array<AnalysisParameter>;
export interface AnalysisRule {
  collaborationId: string;
  type: AnalysisRuleType;
  name: string;
  createTime: Date | string;
  updateTime: Date | string;
  policy: AnalysisRulePolicy;
  collaborationPolicy?: ConfiguredTableAssociationAnalysisRulePolicy;
  consolidatedPolicy?: ConsolidatedPolicy;
}
export interface AnalysisRuleAggregation {
  aggregateColumns: Array<AggregateColumn>;
  joinColumns: Array<string>;
  joinRequired?: string;
  allowedJoinOperators?: Array<string>;
  dimensionColumns: Array<string>;
  scalarFunctions: Array<string>;
  outputConstraints: Array<AggregationConstraint>;
  additionalAnalyses?: AdditionalAnalyses;
}
export type AnalysisRuleColumnList = Array<string>;
export type AnalysisRuleColumnName = string;

export type AnalysisRuleColumnNameList = Array<string>;
export interface AnalysisRuleCustom {
  allowedAnalyses: Array<string>;
  allowedAnalysisProviders?: Array<string>;
  additionalAnalyses?: AdditionalAnalyses;
  disallowedOutputColumns?: Array<string>;
  differentialPrivacy?: DifferentialPrivacyConfiguration;
}
export interface AnalysisRuleIdMappingTable {
  joinColumns: Array<string>;
  queryConstraints: Array<QueryConstraint>;
  dimensionColumns?: Array<string>;
}
export interface AnalysisRuleList {
  joinColumns: Array<string>;
  allowedJoinOperators?: Array<string>;
  listColumns: Array<string>;
  additionalAnalyses?: AdditionalAnalyses;
}
interface _AnalysisRulePolicy {
  v1?: AnalysisRulePolicyV1;
}

export type AnalysisRulePolicy = _AnalysisRulePolicy & {
  v1: AnalysisRulePolicyV1;
};
interface _AnalysisRulePolicyV1 {
  list?: AnalysisRuleList;
  aggregation?: AnalysisRuleAggregation;
  custom?: AnalysisRuleCustom;
  idMappingTable?: AnalysisRuleIdMappingTable;
}

export type AnalysisRulePolicyV1 =
  | (_AnalysisRulePolicyV1 & { list: AnalysisRuleList })
  | (_AnalysisRulePolicyV1 & { aggregation: AnalysisRuleAggregation })
  | (_AnalysisRulePolicyV1 & { custom: AnalysisRuleCustom })
  | (_AnalysisRulePolicyV1 & { idMappingTable: AnalysisRuleIdMappingTable });
export type AnalysisRuleType =
  | "AGGREGATION"
  | "LIST"
  | "CUSTOM"
  | "ID_MAPPING_TABLE";
export type AnalysisRuleTypeList = Array<AnalysisRuleType>;
export interface AnalysisSchema {
  referencedTables?: Array<string>;
}
interface _AnalysisSource {
  text?: string;
  artifacts?: AnalysisTemplateArtifacts;
}

export type AnalysisSource =
  | (_AnalysisSource & { text: string })
  | (_AnalysisSource & { artifacts: AnalysisTemplateArtifacts });
interface _AnalysisSourceMetadata {
  artifacts?: AnalysisTemplateArtifactMetadata;
}

export type AnalysisSourceMetadata = _AnalysisSourceMetadata & {
  artifacts: AnalysisTemplateArtifactMetadata;
};
export interface AnalysisTemplate {
  id: string;
  arn: string;
  collaborationId: string;
  collaborationArn: string;
  membershipId: string;
  membershipArn: string;
  description?: string;
  name: string;
  createTime: Date | string;
  updateTime: Date | string;
  schema: AnalysisSchema;
  format: AnalysisFormat;
  source: AnalysisSource;
  sourceMetadata?: AnalysisSourceMetadata;
  analysisParameters?: Array<AnalysisParameter>;
  validations?: Array<AnalysisTemplateValidationStatusDetail>;
}
export type AnalysisTemplateArn = string;

export type AnalysisTemplateArnList = Array<string>;
export type AnalysisTemplateArnOrQueryWildcard = string;

export interface AnalysisTemplateArtifact {
  location: S3Location;
}
export type AnalysisTemplateArtifactList = Array<AnalysisTemplateArtifact>;
export interface AnalysisTemplateArtifactMetadata {
  entryPointHash: Hash;
  additionalArtifactHashes?: Array<Hash>;
}
export interface AnalysisTemplateArtifacts {
  entryPoint: AnalysisTemplateArtifact;
  additionalArtifacts?: Array<AnalysisTemplateArtifact>;
  roleArn: string;
}
export type AnalysisTemplateIdentifier = string;

export interface AnalysisTemplateSummary {
  arn: string;
  createTime: Date | string;
  id: string;
  name: string;
  updateTime: Date | string;
  membershipArn: string;
  membershipId: string;
  collaborationArn: string;
  collaborationId: string;
  description?: string;
}
export type AnalysisTemplateSummaryList = Array<AnalysisTemplateSummary>;
export type AnalysisTemplateText = string;

export type AnalysisTemplateValidationStatus =
  | "VALID"
  | "INVALID"
  | "UNABLE_TO_VALIDATE";
export interface AnalysisTemplateValidationStatusDetail {
  type: AnalysisTemplateValidationType;
  status: AnalysisTemplateValidationStatus;
  reasons?: Array<AnalysisTemplateValidationStatusReason>;
}
export type AnalysisTemplateValidationStatusDetailList =
  Array<AnalysisTemplateValidationStatusDetail>;
export interface AnalysisTemplateValidationStatusReason {
  message: string;
}
export type AnalysisTemplateValidationStatusReasonList =
  Array<AnalysisTemplateValidationStatusReason>;
export type AnalysisTemplateValidationType = "DIFFERENTIAL_PRIVACY";
export type AnalysisType = "DIRECT_ANALYSIS" | "ADDITIONAL_ANALYSIS";
export type AnalyticsEngine = "SPARK" | "CLEAN_ROOMS_SQL";
export type AthenaDatabaseName = string;

export type AthenaOutputLocation = string;

export type AthenaTableName = string;

export interface AthenaTableReference {
  workGroup: string;
  outputLocation?: string;
  databaseName: string;
  tableName: string;
}
export type AthenaWorkGroup = string;

export interface BatchGetCollaborationAnalysisTemplateError {
  arn: string;
  code: string;
  message: string;
}
export type BatchGetCollaborationAnalysisTemplateErrorList =
  Array<BatchGetCollaborationAnalysisTemplateError>;
export interface BatchGetCollaborationAnalysisTemplateInput {
  collaborationIdentifier: string;
  analysisTemplateArns: Array<string>;
}
export interface BatchGetCollaborationAnalysisTemplateOutput {
  collaborationAnalysisTemplates: Array<CollaborationAnalysisTemplate>;
  errors: Array<BatchGetCollaborationAnalysisTemplateError>;
}
export interface BatchGetSchemaAnalysisRuleError {
  name: string;
  type: AnalysisRuleType;
  code: string;
  message: string;
}
export type BatchGetSchemaAnalysisRuleErrorList =
  Array<BatchGetSchemaAnalysisRuleError>;
export interface BatchGetSchemaAnalysisRuleInput {
  collaborationIdentifier: string;
  schemaAnalysisRuleRequests: Array<SchemaAnalysisRuleRequest>;
}
export interface BatchGetSchemaAnalysisRuleOutput {
  analysisRules: Array<AnalysisRule>;
  errors: Array<BatchGetSchemaAnalysisRuleError>;
}
export interface BatchGetSchemaError {
  name: string;
  code: string;
  message: string;
}
export type BatchGetSchemaErrorList = Array<BatchGetSchemaError>;
export interface BatchGetSchemaInput {
  collaborationIdentifier: string;
  names: Array<string>;
}
export interface BatchGetSchemaOutput {
  schemas: Array<Schema>;
  errors: Array<BatchGetSchemaError>;
}
export interface BilledJobResourceUtilization {
  units: number;
}
export interface BilledResourceUtilization {
  units: number;
}
export type CleanroomsArn = string;

export interface Collaboration {
  id: string;
  arn: string;
  name: string;
  description?: string;
  creatorAccountId: string;
  creatorDisplayName: string;
  createTime: Date | string;
  updateTime: Date | string;
  memberStatus: string;
  membershipId?: string;
  membershipArn?: string;
  dataEncryptionMetadata?: DataEncryptionMetadata;
  queryLogStatus: CollaborationQueryLogStatus;
  jobLogStatus?: CollaborationJobLogStatus;
  analyticsEngine?: AnalyticsEngine;
}
export interface CollaborationAnalysisTemplate {
  id: string;
  arn: string;
  collaborationId: string;
  collaborationArn: string;
  description?: string;
  creatorAccountId: string;
  name: string;
  createTime: Date | string;
  updateTime: Date | string;
  schema: AnalysisSchema;
  format: AnalysisFormat;
  source?: AnalysisSource;
  sourceMetadata?: AnalysisSourceMetadata;
  analysisParameters?: Array<AnalysisParameter>;
  validations?: Array<AnalysisTemplateValidationStatusDetail>;
}
export type CollaborationAnalysisTemplateList =
  Array<CollaborationAnalysisTemplate>;
export interface CollaborationAnalysisTemplateSummary {
  arn: string;
  createTime: Date | string;
  id: string;
  name: string;
  updateTime: Date | string;
  collaborationArn: string;
  collaborationId: string;
  creatorAccountId: string;
  description?: string;
}
export type CollaborationAnalysisTemplateSummaryList =
  Array<CollaborationAnalysisTemplateSummary>;
export type CollaborationArn = string;

export interface CollaborationConfiguredAudienceModelAssociation {
  id: string;
  arn: string;
  collaborationId: string;
  collaborationArn: string;
  configuredAudienceModelArn: string;
  name: string;
  description?: string;
  creatorAccountId: string;
  createTime: Date | string;
  updateTime: Date | string;
}
export interface CollaborationConfiguredAudienceModelAssociationSummary {
  arn: string;
  createTime: Date | string;
  id: string;
  name: string;
  updateTime: Date | string;
  collaborationArn: string;
  collaborationId: string;
  creatorAccountId: string;
  description?: string;
}
export type CollaborationConfiguredAudienceModelAssociationSummaryList =
  Array<CollaborationConfiguredAudienceModelAssociationSummary>;
export type CollaborationDescription = string;

export type CollaborationIdentifier = string;

export interface CollaborationIdNamespaceAssociation {
  id: string;
  arn: string;
  collaborationId: string;
  collaborationArn: string;
  name: string;
  description?: string;
  creatorAccountId: string;
  createTime: Date | string;
  updateTime: Date | string;
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig;
  inputReferenceProperties: IdNamespaceAssociationInputReferenceProperties;
  idMappingConfig?: IdMappingConfig;
}
export interface CollaborationIdNamespaceAssociationSummary {
  arn: string;
  createTime: Date | string;
  id: string;
  updateTime: Date | string;
  collaborationArn: string;
  collaborationId: string;
  creatorAccountId: string;
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig;
  name: string;
  description?: string;
  inputReferenceProperties: IdNamespaceAssociationInputReferencePropertiesSummary;
}
export type CollaborationIdNamespaceAssociationSummaryList =
  Array<CollaborationIdNamespaceAssociationSummary>;
export type CollaborationJobLogStatus = "ENABLED" | "DISABLED";
export type CollaborationName = string;

export interface CollaborationPrivacyBudgetSummary {
  id: string;
  privacyBudgetTemplateId: string;
  privacyBudgetTemplateArn: string;
  collaborationId: string;
  collaborationArn: string;
  creatorAccountId: string;
  type: PrivacyBudgetType;
  createTime: Date | string;
  updateTime: Date | string;
  budget: PrivacyBudget;
}
export type CollaborationPrivacyBudgetSummaryList =
  Array<CollaborationPrivacyBudgetSummary>;
export interface CollaborationPrivacyBudgetTemplate {
  id: string;
  arn: string;
  collaborationId: string;
  collaborationArn: string;
  creatorAccountId: string;
  createTime: Date | string;
  updateTime: Date | string;
  privacyBudgetType: PrivacyBudgetType;
  autoRefresh: PrivacyBudgetTemplateAutoRefresh;
  parameters: PrivacyBudgetTemplateParametersOutput;
}
export interface CollaborationPrivacyBudgetTemplateSummary {
  id: string;
  arn: string;
  collaborationId: string;
  collaborationArn: string;
  creatorAccountId: string;
  privacyBudgetType: PrivacyBudgetType;
  createTime: Date | string;
  updateTime: Date | string;
}
export type CollaborationPrivacyBudgetTemplateSummaryList =
  Array<CollaborationPrivacyBudgetTemplateSummary>;
export type CollaborationQueryLogStatus = "ENABLED" | "DISABLED";
export interface CollaborationSummary {
  id: string;
  arn: string;
  name: string;
  creatorAccountId: string;
  creatorDisplayName: string;
  createTime: Date | string;
  updateTime: Date | string;
  memberStatus: string;
  membershipId?: string;
  membershipArn?: string;
  analyticsEngine?: AnalyticsEngine;
}
export type CollaborationSummaryList = Array<CollaborationSummary>;
export interface Column {
  name: string;
  type: string;
}
export type ColumnList = Array<Column>;
export type ColumnName = string;

export type ColumnTypeString = string;

interface _ComputeConfiguration {
  worker?: WorkerComputeConfiguration;
}

export type ComputeConfiguration = _ComputeConfiguration & {
  worker: WorkerComputeConfiguration;
};
interface _ConfigurationDetails {
  directAnalysisConfigurationDetails?: DirectAnalysisConfigurationDetails;
}

export type ConfigurationDetails = _ConfigurationDetails & {
  directAnalysisConfigurationDetails: DirectAnalysisConfigurationDetails;
};
export type ConfiguredAudienceModelArn = string;

export interface ConfiguredAudienceModelAssociation {
  id: string;
  arn: string;
  configuredAudienceModelArn: string;
  membershipId: string;
  membershipArn: string;
  collaborationId: string;
  collaborationArn: string;
  name: string;
  manageResourcePolicies: boolean;
  description?: string;
  createTime: Date | string;
  updateTime: Date | string;
}
export type ConfiguredAudienceModelAssociationArn = string;

export type ConfiguredAudienceModelAssociationIdentifier = string;

export type ConfiguredAudienceModelAssociationName = string;

export interface ConfiguredAudienceModelAssociationSummary {
  membershipId: string;
  membershipArn: string;
  collaborationArn: string;
  collaborationId: string;
  createTime: Date | string;
  updateTime: Date | string;
  id: string;
  arn: string;
  name: string;
  configuredAudienceModelArn: string;
  description?: string;
}
export type ConfiguredAudienceModelAssociationSummaryList =
  Array<ConfiguredAudienceModelAssociationSummary>;
export interface ConfiguredTable {
  id: string;
  arn: string;
  name: string;
  description?: string;
  tableReference: TableReference;
  createTime: Date | string;
  updateTime: Date | string;
  analysisRuleTypes: Array<ConfiguredTableAnalysisRuleType>;
  analysisMethod: AnalysisMethod;
  allowedColumns: Array<string>;
  selectedAnalysisMethods?: Array<SelectedAnalysisMethod>;
}
export interface ConfiguredTableAnalysisRule {
  configuredTableId: string;
  configuredTableArn: string;
  policy: ConfiguredTableAnalysisRulePolicy;
  type: ConfiguredTableAnalysisRuleType;
  createTime: Date | string;
  updateTime: Date | string;
}
interface _ConfiguredTableAnalysisRulePolicy {
  v1?: ConfiguredTableAnalysisRulePolicyV1;
}

export type ConfiguredTableAnalysisRulePolicy =
  _ConfiguredTableAnalysisRulePolicy & {
    v1: ConfiguredTableAnalysisRulePolicyV1;
  };
interface _ConfiguredTableAnalysisRulePolicyV1 {
  list?: AnalysisRuleList;
  aggregation?: AnalysisRuleAggregation;
  custom?: AnalysisRuleCustom;
}

export type ConfiguredTableAnalysisRulePolicyV1 =
  | (_ConfiguredTableAnalysisRulePolicyV1 & { list: AnalysisRuleList })
  | (_ConfiguredTableAnalysisRulePolicyV1 & {
      aggregation: AnalysisRuleAggregation;
    })
  | (_ConfiguredTableAnalysisRulePolicyV1 & { custom: AnalysisRuleCustom });
export type ConfiguredTableAnalysisRuleType = "AGGREGATION" | "LIST" | "CUSTOM";
export type ConfiguredTableAnalysisRuleTypeList =
  Array<ConfiguredTableAnalysisRuleType>;
export type ConfiguredTableArn = string;

export interface ConfiguredTableAssociation {
  arn: string;
  id: string;
  configuredTableId: string;
  configuredTableArn: string;
  membershipId: string;
  membershipArn: string;
  roleArn: string;
  name: string;
  description?: string;
  analysisRuleTypes?: Array<ConfiguredTableAssociationAnalysisRuleType>;
  createTime: Date | string;
  updateTime: Date | string;
}
export interface ConfiguredTableAssociationAnalysisRule {
  membershipIdentifier: string;
  configuredTableAssociationId: string;
  configuredTableAssociationArn: string;
  policy: ConfiguredTableAssociationAnalysisRulePolicy;
  type: ConfiguredTableAssociationAnalysisRuleType;
  createTime: Date | string;
  updateTime: Date | string;
}
export interface ConfiguredTableAssociationAnalysisRuleAggregation {
  allowedResultReceivers?: Array<string>;
  allowedAdditionalAnalyses?: Array<string>;
}
export interface ConfiguredTableAssociationAnalysisRuleCustom {
  allowedResultReceivers?: Array<string>;
  allowedAdditionalAnalyses?: Array<string>;
}
export interface ConfiguredTableAssociationAnalysisRuleList {
  allowedResultReceivers?: Array<string>;
  allowedAdditionalAnalyses?: Array<string>;
}
interface _ConfiguredTableAssociationAnalysisRulePolicy {
  v1?: ConfiguredTableAssociationAnalysisRulePolicyV1;
}

export type ConfiguredTableAssociationAnalysisRulePolicy =
  _ConfiguredTableAssociationAnalysisRulePolicy & {
    v1: ConfiguredTableAssociationAnalysisRulePolicyV1;
  };
interface _ConfiguredTableAssociationAnalysisRulePolicyV1 {
  list?: ConfiguredTableAssociationAnalysisRuleList;
  aggregation?: ConfiguredTableAssociationAnalysisRuleAggregation;
  custom?: ConfiguredTableAssociationAnalysisRuleCustom;
}

export type ConfiguredTableAssociationAnalysisRulePolicyV1 =
  | (_ConfiguredTableAssociationAnalysisRulePolicyV1 & {
      list: ConfiguredTableAssociationAnalysisRuleList;
    })
  | (_ConfiguredTableAssociationAnalysisRulePolicyV1 & {
      aggregation: ConfiguredTableAssociationAnalysisRuleAggregation;
    })
  | (_ConfiguredTableAssociationAnalysisRulePolicyV1 & {
      custom: ConfiguredTableAssociationAnalysisRuleCustom;
    });
export type ConfiguredTableAssociationAnalysisRuleType =
  | "AGGREGATION"
  | "LIST"
  | "CUSTOM";
export type ConfiguredTableAssociationAnalysisRuleTypeList =
  Array<ConfiguredTableAssociationAnalysisRuleType>;
export type ConfiguredTableAssociationArn = string;

export type ConfiguredTableAssociationIdentifier = string;

export interface ConfiguredTableAssociationSummary {
  configuredTableId: string;
  membershipId: string;
  membershipArn: string;
  name: string;
  createTime: Date | string;
  updateTime: Date | string;
  id: string;
  arn: string;
  analysisRuleTypes?: Array<ConfiguredTableAssociationAnalysisRuleType>;
}
export type ConfiguredTableAssociationSummaryList =
  Array<ConfiguredTableAssociationSummary>;
export type ConfiguredTableIdentifier = string;

export interface ConfiguredTableSummary {
  id: string;
  arn: string;
  name: string;
  createTime: Date | string;
  updateTime: Date | string;
  analysisRuleTypes: Array<ConfiguredTableAnalysisRuleType>;
  analysisMethod: AnalysisMethod;
  selectedAnalysisMethods?: Array<SelectedAnalysisMethod>;
}
export type ConfiguredTableSummaryList = Array<ConfiguredTableSummary>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly reason?: string;
}> {}
export type ConflictExceptionReason = string;

interface _ConsolidatedPolicy {
  v1?: ConsolidatedPolicyV1;
}

export type ConsolidatedPolicy = _ConsolidatedPolicy & {
  v1: ConsolidatedPolicyV1;
};
export interface ConsolidatedPolicyAggregation {
  aggregateColumns: Array<AggregateColumn>;
  joinColumns: Array<string>;
  joinRequired?: string;
  allowedJoinOperators?: Array<string>;
  dimensionColumns: Array<string>;
  scalarFunctions: Array<string>;
  outputConstraints: Array<AggregationConstraint>;
  additionalAnalyses?: AdditionalAnalyses;
  allowedResultReceivers?: Array<string>;
  allowedAdditionalAnalyses?: Array<string>;
}
export interface ConsolidatedPolicyCustom {
  allowedAnalyses: Array<string>;
  allowedAnalysisProviders?: Array<string>;
  additionalAnalyses?: AdditionalAnalyses;
  disallowedOutputColumns?: Array<string>;
  differentialPrivacy?: DifferentialPrivacyConfiguration;
  allowedResultReceivers?: Array<string>;
  allowedAdditionalAnalyses?: Array<string>;
}
export interface ConsolidatedPolicyList {
  joinColumns: Array<string>;
  allowedJoinOperators?: Array<string>;
  listColumns: Array<string>;
  additionalAnalyses?: AdditionalAnalyses;
  allowedResultReceivers?: Array<string>;
  allowedAdditionalAnalyses?: Array<string>;
}
interface _ConsolidatedPolicyV1 {
  list?: ConsolidatedPolicyList;
  aggregation?: ConsolidatedPolicyAggregation;
  custom?: ConsolidatedPolicyCustom;
}

export type ConsolidatedPolicyV1 =
  | (_ConsolidatedPolicyV1 & { list: ConsolidatedPolicyList })
  | (_ConsolidatedPolicyV1 & { aggregation: ConsolidatedPolicyAggregation })
  | (_ConsolidatedPolicyV1 & { custom: ConsolidatedPolicyCustom });
export interface CreateAnalysisTemplateInput {
  description?: string;
  membershipIdentifier: string;
  name: string;
  format: AnalysisFormat;
  source: AnalysisSource;
  tags?: Partial<Record<string, string>>;
  analysisParameters?: Array<AnalysisParameter>;
  schema?: AnalysisSchema;
}
export interface CreateAnalysisTemplateOutput {
  analysisTemplate: AnalysisTemplate;
}
export interface CreateCollaborationInput {
  members: Array<MemberSpecification>;
  name: string;
  description: string;
  creatorMemberAbilities: Array<MemberAbility>;
  creatorMLMemberAbilities?: MLMemberAbilities;
  creatorDisplayName: string;
  dataEncryptionMetadata?: DataEncryptionMetadata;
  queryLogStatus: CollaborationQueryLogStatus;
  jobLogStatus?: CollaborationJobLogStatus;
  tags?: Partial<Record<string, string>>;
  creatorPaymentConfiguration?: PaymentConfiguration;
  analyticsEngine?: AnalyticsEngine;
}
export interface CreateCollaborationOutput {
  collaboration: Collaboration;
}
export interface CreateConfiguredAudienceModelAssociationInput {
  membershipIdentifier: string;
  configuredAudienceModelArn: string;
  configuredAudienceModelAssociationName: string;
  manageResourcePolicies: boolean;
  tags?: Partial<Record<string, string>>;
  description?: string;
}
export interface CreateConfiguredAudienceModelAssociationOutput {
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation;
}
export interface CreateConfiguredTableAnalysisRuleInput {
  configuredTableIdentifier: string;
  analysisRuleType: ConfiguredTableAnalysisRuleType;
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy;
}
export interface CreateConfiguredTableAnalysisRuleOutput {
  analysisRule: ConfiguredTableAnalysisRule;
}
export interface CreateConfiguredTableAssociationAnalysisRuleInput {
  membershipIdentifier: string;
  configuredTableAssociationIdentifier: string;
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType;
  analysisRulePolicy: ConfiguredTableAssociationAnalysisRulePolicy;
}
export interface CreateConfiguredTableAssociationAnalysisRuleOutput {
  analysisRule: ConfiguredTableAssociationAnalysisRule;
}
export interface CreateConfiguredTableAssociationInput {
  name: string;
  description?: string;
  membershipIdentifier: string;
  configuredTableIdentifier: string;
  roleArn: string;
  tags?: Partial<Record<string, string>>;
}
export interface CreateConfiguredTableAssociationOutput {
  configuredTableAssociation: ConfiguredTableAssociation;
}
export interface CreateConfiguredTableInput {
  name: string;
  description?: string;
  tableReference: TableReference;
  allowedColumns: Array<string>;
  analysisMethod: AnalysisMethod;
  selectedAnalysisMethods?: Array<SelectedAnalysisMethod>;
  tags?: Partial<Record<string, string>>;
}
export interface CreateConfiguredTableOutput {
  configuredTable: ConfiguredTable;
}
export interface CreateIdMappingTableInput {
  membershipIdentifier: string;
  name: string;
  description?: string;
  inputReferenceConfig: IdMappingTableInputReferenceConfig;
  tags?: Partial<Record<string, string>>;
  kmsKeyArn?: string;
}
export interface CreateIdMappingTableOutput {
  idMappingTable: IdMappingTable;
}
export interface CreateIdNamespaceAssociationInput {
  membershipIdentifier: string;
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig;
  tags?: Partial<Record<string, string>>;
  name: string;
  description?: string;
  idMappingConfig?: IdMappingConfig;
}
export interface CreateIdNamespaceAssociationOutput {
  idNamespaceAssociation: IdNamespaceAssociation;
}
export interface CreateMembershipInput {
  collaborationIdentifier: string;
  queryLogStatus: MembershipQueryLogStatus;
  jobLogStatus?: MembershipJobLogStatus;
  tags?: Partial<Record<string, string>>;
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration;
  paymentConfiguration?: MembershipPaymentConfiguration;
}
export interface CreateMembershipOutput {
  membership: Membership;
}
export interface CreatePrivacyBudgetTemplateInput {
  membershipIdentifier: string;
  autoRefresh: PrivacyBudgetTemplateAutoRefresh;
  privacyBudgetType: PrivacyBudgetType;
  parameters: PrivacyBudgetTemplateParametersInput;
  tags?: Partial<Record<string, string>>;
}
export interface CreatePrivacyBudgetTemplateOutput {
  privacyBudgetTemplate: PrivacyBudgetTemplate;
}
export type CustomMLMemberAbilities = Array<CustomMLMemberAbility>;
export type CustomMLMemberAbility =
  | "CAN_RECEIVE_MODEL_OUTPUT"
  | "CAN_RECEIVE_INFERENCE_OUTPUT";
export interface DataEncryptionMetadata {
  allowCleartext: boolean;
  allowDuplicates: boolean;
  allowJoinsOnColumnsWithDifferentNames: boolean;
  preserveNulls: boolean;
}
export interface DeleteAnalysisTemplateInput {
  membershipIdentifier: string;
  analysisTemplateIdentifier: string;
}
export interface DeleteAnalysisTemplateOutput {}
export interface DeleteCollaborationInput {
  collaborationIdentifier: string;
}
export interface DeleteCollaborationOutput {}
export interface DeleteConfiguredAudienceModelAssociationInput {
  configuredAudienceModelAssociationIdentifier: string;
  membershipIdentifier: string;
}
export interface DeleteConfiguredAudienceModelAssociationOutput {}
export interface DeleteConfiguredTableAnalysisRuleInput {
  configuredTableIdentifier: string;
  analysisRuleType: ConfiguredTableAnalysisRuleType;
}
export interface DeleteConfiguredTableAnalysisRuleOutput {}
export interface DeleteConfiguredTableAssociationAnalysisRuleInput {
  membershipIdentifier: string;
  configuredTableAssociationIdentifier: string;
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType;
}
export interface DeleteConfiguredTableAssociationAnalysisRuleOutput {}
export interface DeleteConfiguredTableAssociationInput {
  configuredTableAssociationIdentifier: string;
  membershipIdentifier: string;
}
export interface DeleteConfiguredTableAssociationOutput {}
export interface DeleteConfiguredTableInput {
  configuredTableIdentifier: string;
}
export interface DeleteConfiguredTableOutput {}
export interface DeleteIdMappingTableInput {
  idMappingTableIdentifier: string;
  membershipIdentifier: string;
}
export interface DeleteIdMappingTableOutput {}
export interface DeleteIdNamespaceAssociationInput {
  idNamespaceAssociationIdentifier: string;
  membershipIdentifier: string;
}
export interface DeleteIdNamespaceAssociationOutput {}
export interface DeleteMemberInput {
  collaborationIdentifier: string;
  accountId: string;
}
export interface DeleteMemberOutput {}
export interface DeleteMembershipInput {
  membershipIdentifier: string;
}
export interface DeleteMembershipOutput {}
export interface DeletePrivacyBudgetTemplateInput {
  membershipIdentifier: string;
  privacyBudgetTemplateIdentifier: string;
}
export interface DeletePrivacyBudgetTemplateOutput {}
export type DifferentialPrivacyAggregationExpression = string;

export type DifferentialPrivacyAggregationType =
  | "AVG"
  | "COUNT"
  | "COUNT_DISTINCT"
  | "SUM"
  | "STDDEV";
export interface DifferentialPrivacyColumn {
  name: string;
}
export type DifferentialPrivacyColumnList = Array<DifferentialPrivacyColumn>;
export interface DifferentialPrivacyConfiguration {
  columns: Array<DifferentialPrivacyColumn>;
}
export interface DifferentialPrivacyParameters {
  sensitivityParameters: Array<DifferentialPrivacySensitivityParameters>;
}
export interface DifferentialPrivacyPreviewAggregation {
  type: DifferentialPrivacyAggregationType;
  maxCount: number;
}
export type DifferentialPrivacyPreviewAggregationList =
  Array<DifferentialPrivacyPreviewAggregation>;
export interface DifferentialPrivacyPreviewParametersInput {
  epsilon: number;
  usersNoisePerQuery: number;
}
export interface DifferentialPrivacyPrivacyBudget {
  aggregations: Array<DifferentialPrivacyPrivacyBudgetAggregation>;
  epsilon: number;
}
export interface DifferentialPrivacyPrivacyBudgetAggregation {
  type: DifferentialPrivacyAggregationType;
  maxCount: number;
  remainingCount: number;
}
export type DifferentialPrivacyPrivacyBudgetAggregationList =
  Array<DifferentialPrivacyPrivacyBudgetAggregation>;
export interface DifferentialPrivacyPrivacyImpact {
  aggregations: Array<DifferentialPrivacyPreviewAggregation>;
}
export interface DifferentialPrivacySensitivityParameters {
  aggregationType: DifferentialPrivacyAggregationType;
  aggregationExpression: string;
  userContributionLimit: number;
  minColumnValue?: number;
  maxColumnValue?: number;
}
export type DifferentialPrivacySensitivityParametersList =
  Array<DifferentialPrivacySensitivityParameters>;
export interface DifferentialPrivacyTemplateParametersInput {
  epsilon: number;
  usersNoisePerQuery: number;
}
export interface DifferentialPrivacyTemplateParametersOutput {
  epsilon: number;
  usersNoisePerQuery: number;
}
export interface DifferentialPrivacyTemplateUpdateParameters {
  epsilon?: number;
  usersNoisePerQuery?: number;
}
export interface DirectAnalysisConfigurationDetails {
  receiverAccountIds?: Array<string>;
}
export type DisplayName = string;

export type Epsilon = number;

export type FilterableMemberStatus = string;

export type GenericResourceName = string;

export interface GetAnalysisTemplateInput {
  membershipIdentifier: string;
  analysisTemplateIdentifier: string;
}
export interface GetAnalysisTemplateOutput {
  analysisTemplate: AnalysisTemplate;
}
export interface GetCollaborationAnalysisTemplateInput {
  collaborationIdentifier: string;
  analysisTemplateArn: string;
}
export interface GetCollaborationAnalysisTemplateOutput {
  collaborationAnalysisTemplate: CollaborationAnalysisTemplate;
}
export interface GetCollaborationConfiguredAudienceModelAssociationInput {
  collaborationIdentifier: string;
  configuredAudienceModelAssociationIdentifier: string;
}
export interface GetCollaborationConfiguredAudienceModelAssociationOutput {
  collaborationConfiguredAudienceModelAssociation: CollaborationConfiguredAudienceModelAssociation;
}
export interface GetCollaborationIdNamespaceAssociationInput {
  collaborationIdentifier: string;
  idNamespaceAssociationIdentifier: string;
}
export interface GetCollaborationIdNamespaceAssociationOutput {
  collaborationIdNamespaceAssociation: CollaborationIdNamespaceAssociation;
}
export interface GetCollaborationInput {
  collaborationIdentifier: string;
}
export interface GetCollaborationOutput {
  collaboration: Collaboration;
}
export interface GetCollaborationPrivacyBudgetTemplateInput {
  collaborationIdentifier: string;
  privacyBudgetTemplateIdentifier: string;
}
export interface GetCollaborationPrivacyBudgetTemplateOutput {
  collaborationPrivacyBudgetTemplate: CollaborationPrivacyBudgetTemplate;
}
export interface GetConfiguredAudienceModelAssociationInput {
  configuredAudienceModelAssociationIdentifier: string;
  membershipIdentifier: string;
}
export interface GetConfiguredAudienceModelAssociationOutput {
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation;
}
export interface GetConfiguredTableAnalysisRuleInput {
  configuredTableIdentifier: string;
  analysisRuleType: ConfiguredTableAnalysisRuleType;
}
export interface GetConfiguredTableAnalysisRuleOutput {
  analysisRule: ConfiguredTableAnalysisRule;
}
export interface GetConfiguredTableAssociationAnalysisRuleInput {
  membershipIdentifier: string;
  configuredTableAssociationIdentifier: string;
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType;
}
export interface GetConfiguredTableAssociationAnalysisRuleOutput {
  analysisRule: ConfiguredTableAssociationAnalysisRule;
}
export interface GetConfiguredTableAssociationInput {
  configuredTableAssociationIdentifier: string;
  membershipIdentifier: string;
}
export interface GetConfiguredTableAssociationOutput {
  configuredTableAssociation: ConfiguredTableAssociation;
}
export interface GetConfiguredTableInput {
  configuredTableIdentifier: string;
}
export interface GetConfiguredTableOutput {
  configuredTable: ConfiguredTable;
}
export interface GetIdMappingTableInput {
  idMappingTableIdentifier: string;
  membershipIdentifier: string;
}
export interface GetIdMappingTableOutput {
  idMappingTable: IdMappingTable;
}
export interface GetIdNamespaceAssociationInput {
  idNamespaceAssociationIdentifier: string;
  membershipIdentifier: string;
}
export interface GetIdNamespaceAssociationOutput {
  idNamespaceAssociation: IdNamespaceAssociation;
}
export interface GetMembershipInput {
  membershipIdentifier: string;
}
export interface GetMembershipOutput {
  membership: Membership;
}
export interface GetPrivacyBudgetTemplateInput {
  membershipIdentifier: string;
  privacyBudgetTemplateIdentifier: string;
}
export interface GetPrivacyBudgetTemplateOutput {
  privacyBudgetTemplate: PrivacyBudgetTemplate;
}
export interface GetProtectedJobInput {
  membershipIdentifier: string;
  protectedJobIdentifier: string;
}
export interface GetProtectedJobOutput {
  protectedJob: ProtectedJob;
}
export interface GetProtectedQueryInput {
  membershipIdentifier: string;
  protectedQueryIdentifier: string;
}
export interface GetProtectedQueryOutput {
  protectedQuery: ProtectedQuery;
}
export interface GetSchemaAnalysisRuleInput {
  collaborationIdentifier: string;
  name: string;
  type: AnalysisRuleType;
}
export interface GetSchemaAnalysisRuleOutput {
  analysisRule: AnalysisRule;
}
export interface GetSchemaInput {
  collaborationIdentifier: string;
  name: string;
}
export interface GetSchemaOutput {
  schema: Schema;
}
export type GlueDatabaseName = string;

export type GlueTableName = string;

export interface GlueTableReference {
  tableName: string;
  databaseName: string;
}
export interface Hash {
  sha256?: string;
}
export type HashList = Array<Hash>;
export interface IdMappingConfig {
  allowUseAsDimensionColumn: boolean;
}
export interface IdMappingTable {
  id: string;
  arn: string;
  inputReferenceConfig: IdMappingTableInputReferenceConfig;
  membershipId: string;
  membershipArn: string;
  collaborationId: string;
  collaborationArn: string;
  description?: string;
  name: string;
  createTime: Date | string;
  updateTime: Date | string;
  inputReferenceProperties: IdMappingTableInputReferenceProperties;
  kmsKeyArn?: string;
}
export type IdMappingTableArn = string;

export type IdMappingTableInputReferenceArn = string;

export interface IdMappingTableInputReferenceConfig {
  inputReferenceArn: string;
  manageResourcePolicies: boolean;
}
export interface IdMappingTableInputReferenceProperties {
  idMappingTableInputSource: Array<IdMappingTableInputSource>;
}
export interface IdMappingTableInputSource {
  idNamespaceAssociationId: string;
  type: IdNamespaceType;
}
export type IdMappingTableInputSourceList = Array<IdMappingTableInputSource>;
export interface IdMappingTableSchemaTypeProperties {
  idMappingTableInputSource: Array<IdMappingTableInputSource>;
}
export interface IdMappingTableSummary {
  collaborationArn: string;
  collaborationId: string;
  membershipId: string;
  membershipArn: string;
  createTime: Date | string;
  updateTime: Date | string;
  id: string;
  arn: string;
  description?: string;
  inputReferenceConfig: IdMappingTableInputReferenceConfig;
  name: string;
}
export type IdMappingTableSummaryList = Array<IdMappingTableSummary>;
export type IdMappingWorkflowsSupported = Array<unknown>;
export interface IdNamespaceAssociation {
  id: string;
  arn: string;
  membershipId: string;
  membershipArn: string;
  collaborationId: string;
  collaborationArn: string;
  name: string;
  description?: string;
  createTime: Date | string;
  updateTime: Date | string;
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig;
  inputReferenceProperties: IdNamespaceAssociationInputReferenceProperties;
  idMappingConfig?: IdMappingConfig;
}
export type IdNamespaceAssociationArn = string;

export type IdNamespaceAssociationIdentifier = string;

export type IdNamespaceAssociationInputReferenceArn = string;

export interface IdNamespaceAssociationInputReferenceConfig {
  inputReferenceArn: string;
  manageResourcePolicies: boolean;
}
export interface IdNamespaceAssociationInputReferenceProperties {
  idNamespaceType: IdNamespaceType;
  idMappingWorkflowsSupported: Array<unknown>;
}
export interface IdNamespaceAssociationInputReferencePropertiesSummary {
  idNamespaceType: IdNamespaceType;
}
export interface IdNamespaceAssociationSummary {
  membershipId: string;
  membershipArn: string;
  collaborationArn: string;
  collaborationId: string;
  createTime: Date | string;
  updateTime: Date | string;
  id: string;
  arn: string;
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig;
  name: string;
  description?: string;
  inputReferenceProperties: IdNamespaceAssociationInputReferencePropertiesSummary;
}
export type IdNamespaceAssociationSummaryList =
  Array<IdNamespaceAssociationSummary>;
export type IdNamespaceType = "SOURCE" | "TARGET";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface JobComputePaymentConfig {
  isResponsible: boolean;
}
export type JoinOperator = string;

export type JoinOperatorsList = Array<string>;
export type JoinRequiredOption = string;

export type KeyPrefix = string;

export type KMSKeyArn = string;

export interface ListAnalysisTemplatesInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAnalysisTemplatesOutput {
  nextToken?: string;
  analysisTemplateSummaries: Array<AnalysisTemplateSummary>;
}
export interface ListCollaborationAnalysisTemplatesInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCollaborationAnalysisTemplatesOutput {
  nextToken?: string;
  collaborationAnalysisTemplateSummaries: Array<CollaborationAnalysisTemplateSummary>;
}
export interface ListCollaborationConfiguredAudienceModelAssociationsInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCollaborationConfiguredAudienceModelAssociationsOutput {
  collaborationConfiguredAudienceModelAssociationSummaries: Array<CollaborationConfiguredAudienceModelAssociationSummary>;
  nextToken?: string;
}
export interface ListCollaborationIdNamespaceAssociationsInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCollaborationIdNamespaceAssociationsOutput {
  nextToken?: string;
  collaborationIdNamespaceAssociationSummaries: Array<CollaborationIdNamespaceAssociationSummary>;
}
export interface ListCollaborationPrivacyBudgetsInput {
  collaborationIdentifier: string;
  privacyBudgetType: PrivacyBudgetType;
  maxResults?: number;
  nextToken?: string;
}
export interface ListCollaborationPrivacyBudgetsOutput {
  collaborationPrivacyBudgetSummaries: Array<CollaborationPrivacyBudgetSummary>;
  nextToken?: string;
}
export interface ListCollaborationPrivacyBudgetTemplatesInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCollaborationPrivacyBudgetTemplatesOutput {
  nextToken?: string;
  collaborationPrivacyBudgetTemplateSummaries: Array<CollaborationPrivacyBudgetTemplateSummary>;
}
export interface ListCollaborationsInput {
  nextToken?: string;
  maxResults?: number;
  memberStatus?: string;
}
export interface ListCollaborationsOutput {
  nextToken?: string;
  collaborationList: Array<CollaborationSummary>;
}
export interface ListConfiguredAudienceModelAssociationsInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListConfiguredAudienceModelAssociationsOutput {
  configuredAudienceModelAssociationSummaries: Array<ConfiguredAudienceModelAssociationSummary>;
  nextToken?: string;
}
export interface ListConfiguredTableAssociationsInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListConfiguredTableAssociationsOutput {
  configuredTableAssociationSummaries: Array<ConfiguredTableAssociationSummary>;
  nextToken?: string;
}
export interface ListConfiguredTablesInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListConfiguredTablesOutput {
  configuredTableSummaries: Array<ConfiguredTableSummary>;
  nextToken?: string;
}
export interface ListIdMappingTablesInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListIdMappingTablesOutput {
  idMappingTableSummaries: Array<IdMappingTableSummary>;
  nextToken?: string;
}
export interface ListIdNamespaceAssociationsInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListIdNamespaceAssociationsOutput {
  nextToken?: string;
  idNamespaceAssociationSummaries: Array<IdNamespaceAssociationSummary>;
}
export interface ListMembershipsInput {
  nextToken?: string;
  maxResults?: number;
  status?: string;
}
export interface ListMembershipsOutput {
  nextToken?: string;
  membershipSummaries: Array<MembershipSummary>;
}
export interface ListMembersInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListMembersOutput {
  nextToken?: string;
  memberSummaries: Array<MemberSummary>;
}
export interface ListPrivacyBudgetsInput {
  membershipIdentifier: string;
  privacyBudgetType: PrivacyBudgetType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPrivacyBudgetsOutput {
  privacyBudgetSummaries: Array<PrivacyBudgetSummary>;
  nextToken?: string;
}
export interface ListPrivacyBudgetTemplatesInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPrivacyBudgetTemplatesOutput {
  nextToken?: string;
  privacyBudgetTemplateSummaries: Array<PrivacyBudgetTemplateSummary>;
}
export interface ListProtectedJobsInput {
  membershipIdentifier: string;
  status?: ProtectedJobStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface ListProtectedJobsOutput {
  nextToken?: string;
  protectedJobs: Array<ProtectedJobSummary>;
}
export interface ListProtectedQueriesInput {
  membershipIdentifier: string;
  status?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListProtectedQueriesOutput {
  nextToken?: string;
  protectedQueries: Array<ProtectedQuerySummary>;
}
export interface ListSchemasInput {
  collaborationIdentifier: string;
  schemaType?: SchemaType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSchemasOutput {
  schemaSummaries: Array<SchemaSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags: Partial<Record<string, string>>;
}
export type MaxResults = number;

export type MemberAbilities = Array<MemberAbility>;
export type MemberAbility = "CAN_QUERY" | "CAN_RECEIVE_RESULTS" | "CAN_RUN_JOB";
export type MemberList = Array<MemberSpecification>;
export interface Membership {
  id: string;
  arn: string;
  collaborationArn: string;
  collaborationId: string;
  collaborationCreatorAccountId: string;
  collaborationCreatorDisplayName: string;
  collaborationName: string;
  createTime: Date | string;
  updateTime: Date | string;
  status: string;
  memberAbilities: Array<MemberAbility>;
  mlMemberAbilities?: MLMemberAbilities;
  queryLogStatus: MembershipQueryLogStatus;
  jobLogStatus?: MembershipJobLogStatus;
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration;
  paymentConfiguration: MembershipPaymentConfiguration;
}
export type MembershipArn = string;

export type MembershipIdentifier = string;

export interface MembershipJobComputePaymentConfig {
  isResponsible: boolean;
}
export type MembershipJobLogStatus = "ENABLED" | "DISABLED";
export interface MembershipMLPaymentConfig {
  modelTraining?: MembershipModelTrainingPaymentConfig;
  modelInference?: MembershipModelInferencePaymentConfig;
}
export interface MembershipModelInferencePaymentConfig {
  isResponsible: boolean;
}
export interface MembershipModelTrainingPaymentConfig {
  isResponsible: boolean;
}
export interface MembershipPaymentConfiguration {
  queryCompute: MembershipQueryComputePaymentConfig;
  machineLearning?: MembershipMLPaymentConfig;
  jobCompute?: MembershipJobComputePaymentConfig;
}
interface _MembershipProtectedJobOutputConfiguration {
  s3?: ProtectedJobS3OutputConfigurationInput;
}

export type MembershipProtectedJobOutputConfiguration =
  _MembershipProtectedJobOutputConfiguration & {
    s3: ProtectedJobS3OutputConfigurationInput;
  };
export interface MembershipProtectedJobResultConfiguration {
  outputConfiguration: MembershipProtectedJobOutputConfiguration;
  roleArn: string;
}
interface _MembershipProtectedQueryOutputConfiguration {
  s3?: ProtectedQueryS3OutputConfiguration;
}

export type MembershipProtectedQueryOutputConfiguration =
  _MembershipProtectedQueryOutputConfiguration & {
    s3: ProtectedQueryS3OutputConfiguration;
  };
export interface MembershipProtectedQueryResultConfiguration {
  outputConfiguration: MembershipProtectedQueryOutputConfiguration;
  roleArn?: string;
}
export interface MembershipQueryComputePaymentConfig {
  isResponsible: boolean;
}
export type MembershipQueryLogStatus = "ENABLED" | "DISABLED";
export type MembershipStatus = string;

export interface MembershipSummary {
  id: string;
  arn: string;
  collaborationArn: string;
  collaborationId: string;
  collaborationCreatorAccountId: string;
  collaborationCreatorDisplayName: string;
  collaborationName: string;
  createTime: Date | string;
  updateTime: Date | string;
  status: string;
  memberAbilities: Array<MemberAbility>;
  mlMemberAbilities?: MLMemberAbilities;
  paymentConfiguration: MembershipPaymentConfiguration;
}
export type MembershipSummaryList = Array<MembershipSummary>;
export interface MemberSpecification {
  accountId: string;
  memberAbilities: Array<MemberAbility>;
  mlMemberAbilities?: MLMemberAbilities;
  displayName: string;
  paymentConfiguration?: PaymentConfiguration;
}
export type MemberStatus = string;

export interface MemberSummary {
  accountId: string;
  status: string;
  displayName: string;
  abilities: Array<MemberAbility>;
  mlAbilities?: MLMemberAbilities;
  createTime: Date | string;
  updateTime: Date | string;
  membershipId?: string;
  membershipArn?: string;
  paymentConfiguration: PaymentConfiguration;
}
export type MemberSummaryList = Array<MemberSummary>;
export interface MLMemberAbilities {
  customMLMemberAbilities: Array<CustomMLMemberAbility>;
}
export interface MLPaymentConfig {
  modelTraining?: ModelTrainingPaymentConfig;
  modelInference?: ModelInferencePaymentConfig;
}
export interface ModelInferencePaymentConfig {
  isResponsible: boolean;
}
export interface ModelTrainingPaymentConfig {
  isResponsible: boolean;
}
export type PaginationToken = string;

export type ParameterMap = Partial<Record<string, string>>;
export type ParameterName = string;

export type ParameterType =
  | "SMALLINT"
  | "INTEGER"
  | "BIGINT"
  | "DECIMAL"
  | "REAL"
  | "DOUBLE_PRECISION"
  | "BOOLEAN"
  | "CHAR"
  | "VARCHAR"
  | "DATE"
  | "TIMESTAMP"
  | "TIMESTAMPTZ"
  | "TIME"
  | "TIMETZ"
  | "VARBYTE"
  | "BINARY"
  | "BYTE"
  | "CHARACTER"
  | "DOUBLE"
  | "FLOAT"
  | "INT"
  | "LONG"
  | "NUMERIC"
  | "SHORT"
  | "STRING"
  | "TIMESTAMP_LTZ"
  | "TIMESTAMP_NTZ"
  | "TINYINT";
export type ParameterValue = string;

export interface PaymentConfiguration {
  queryCompute: QueryComputePaymentConfig;
  machineLearning?: MLPaymentConfig;
  jobCompute?: JobComputePaymentConfig;
}
export interface PopulateIdMappingTableInput {
  idMappingTableIdentifier: string;
  membershipIdentifier: string;
}
export interface PopulateIdMappingTableOutput {
  idMappingJobId: string;
}
export interface PreviewPrivacyImpactInput {
  membershipIdentifier: string;
  parameters: PreviewPrivacyImpactParametersInput;
}
export interface PreviewPrivacyImpactOutput {
  privacyImpact: PrivacyImpact;
}
interface _PreviewPrivacyImpactParametersInput {
  differentialPrivacy?: DifferentialPrivacyPreviewParametersInput;
}

export type PreviewPrivacyImpactParametersInput =
  _PreviewPrivacyImpactParametersInput & {
    differentialPrivacy: DifferentialPrivacyPreviewParametersInput;
  };
interface _PrivacyBudget {
  differentialPrivacy?: DifferentialPrivacyPrivacyBudget;
}

export type PrivacyBudget = _PrivacyBudget & {
  differentialPrivacy: DifferentialPrivacyPrivacyBudget;
};
export interface PrivacyBudgetSummary {
  id: string;
  privacyBudgetTemplateId: string;
  privacyBudgetTemplateArn: string;
  membershipId: string;
  membershipArn: string;
  collaborationId: string;
  collaborationArn: string;
  type: PrivacyBudgetType;
  createTime: Date | string;
  updateTime: Date | string;
  budget: PrivacyBudget;
}
export type PrivacyBudgetSummaryList = Array<PrivacyBudgetSummary>;
export interface PrivacyBudgetTemplate {
  id: string;
  arn: string;
  membershipId: string;
  membershipArn: string;
  collaborationId: string;
  collaborationArn: string;
  createTime: Date | string;
  updateTime: Date | string;
  privacyBudgetType: PrivacyBudgetType;
  autoRefresh: PrivacyBudgetTemplateAutoRefresh;
  parameters: PrivacyBudgetTemplateParametersOutput;
}
export type PrivacyBudgetTemplateArn = string;

export type PrivacyBudgetTemplateAutoRefresh = "CALENDAR_MONTH" | "NONE";
export type PrivacyBudgetTemplateIdentifier = string;

interface _PrivacyBudgetTemplateParametersInput {
  differentialPrivacy?: DifferentialPrivacyTemplateParametersInput;
}

export type PrivacyBudgetTemplateParametersInput =
  _PrivacyBudgetTemplateParametersInput & {
    differentialPrivacy: DifferentialPrivacyTemplateParametersInput;
  };
interface _PrivacyBudgetTemplateParametersOutput {
  differentialPrivacy?: DifferentialPrivacyTemplateParametersOutput;
}

export type PrivacyBudgetTemplateParametersOutput =
  _PrivacyBudgetTemplateParametersOutput & {
    differentialPrivacy: DifferentialPrivacyTemplateParametersOutput;
  };
export interface PrivacyBudgetTemplateSummary {
  id: string;
  arn: string;
  membershipId: string;
  membershipArn: string;
  collaborationId: string;
  collaborationArn: string;
  privacyBudgetType: PrivacyBudgetType;
  createTime: Date | string;
  updateTime: Date | string;
}
export type PrivacyBudgetTemplateSummaryList =
  Array<PrivacyBudgetTemplateSummary>;
interface _PrivacyBudgetTemplateUpdateParameters {
  differentialPrivacy?: DifferentialPrivacyTemplateUpdateParameters;
}

export type PrivacyBudgetTemplateUpdateParameters =
  _PrivacyBudgetTemplateUpdateParameters & {
    differentialPrivacy: DifferentialPrivacyTemplateUpdateParameters;
  };
export type PrivacyBudgetType = "DIFFERENTIAL_PRIVACY";
interface _PrivacyImpact {
  differentialPrivacy?: DifferentialPrivacyPrivacyImpact;
}

export type PrivacyImpact = _PrivacyImpact & {
  differentialPrivacy: DifferentialPrivacyPrivacyImpact;
};
export interface ProtectedJob {
  id: string;
  membershipId: string;
  membershipArn: string;
  createTime: Date | string;
  jobParameters?: ProtectedJobParameters;
  status: ProtectedJobStatus;
  resultConfiguration?: ProtectedJobResultConfigurationOutput;
  statistics?: ProtectedJobStatistics;
  result?: ProtectedJobResult;
  error?: ProtectedJobError;
}
export type ProtectedJobAnalysisType = "DIRECT_ANALYSIS";
interface _ProtectedJobConfigurationDetails {
  directAnalysisConfigurationDetails?: ProtectedJobDirectAnalysisConfigurationDetails;
}

export type ProtectedJobConfigurationDetails =
  _ProtectedJobConfigurationDetails & {
    directAnalysisConfigurationDetails: ProtectedJobDirectAnalysisConfigurationDetails;
  };
export interface ProtectedJobDirectAnalysisConfigurationDetails {
  receiverAccountIds?: Array<string>;
}
export interface ProtectedJobError {
  message: string;
  code: string;
}
export type ProtectedJobIdentifier = string;

export interface ProtectedJobMemberOutputConfigurationInput {
  accountId: string;
}
export interface ProtectedJobMemberOutputConfigurationOutput {
  accountId: string;
}
export type ProtectedJobMemberOutputList =
  Array<ProtectedJobSingleMemberOutput>;
interface _ProtectedJobOutput {
  s3?: ProtectedJobS3Output;
  memberList?: Array<ProtectedJobSingleMemberOutput>;
}

export type ProtectedJobOutput =
  | (_ProtectedJobOutput & { s3: ProtectedJobS3Output })
  | (_ProtectedJobOutput & {
      memberList: Array<ProtectedJobSingleMemberOutput>;
    });
interface _ProtectedJobOutputConfigurationInput {
  member?: ProtectedJobMemberOutputConfigurationInput;
}

export type ProtectedJobOutputConfigurationInput =
  _ProtectedJobOutputConfigurationInput & {
    member: ProtectedJobMemberOutputConfigurationInput;
  };
interface _ProtectedJobOutputConfigurationOutput {
  s3?: ProtectedJobS3OutputConfigurationOutput;
  member?: ProtectedJobMemberOutputConfigurationOutput;
}

export type ProtectedJobOutputConfigurationOutput =
  | (_ProtectedJobOutputConfigurationOutput & {
      s3: ProtectedJobS3OutputConfigurationOutput;
    })
  | (_ProtectedJobOutputConfigurationOutput & {
      member: ProtectedJobMemberOutputConfigurationOutput;
    });
export interface ProtectedJobParameters {
  analysisTemplateArn?: string;
}
export type ProtectedJobReceiverAccountIds = Array<string>;
export interface ProtectedJobReceiverConfiguration {
  analysisType: ProtectedJobAnalysisType;
  configurationDetails?: ProtectedJobConfigurationDetails;
}
export type ProtectedJobReceiverConfigurations =
  Array<ProtectedJobReceiverConfiguration>;
export interface ProtectedJobResult {
  output: ProtectedJobOutput;
}
export interface ProtectedJobResultConfigurationInput {
  outputConfiguration: ProtectedJobOutputConfigurationInput;
}
export interface ProtectedJobResultConfigurationOutput {
  outputConfiguration: ProtectedJobOutputConfigurationOutput;
}
export interface ProtectedJobS3Output {
  location: string;
}
export interface ProtectedJobS3OutputConfigurationInput {
  bucket: string;
  keyPrefix?: string;
}
export interface ProtectedJobS3OutputConfigurationOutput {
  bucket: string;
  keyPrefix?: string;
}
export interface ProtectedJobSingleMemberOutput {
  accountId: string;
}
export interface ProtectedJobStatistics {
  totalDurationInMillis?: number;
  billedResourceUtilization?: BilledJobResourceUtilization;
}
export type ProtectedJobStatus =
  | "SUBMITTED"
  | "STARTED"
  | "CANCELLED"
  | "CANCELLING"
  | "FAILED"
  | "SUCCESS";
export interface ProtectedJobSummary {
  id: string;
  membershipId: string;
  membershipArn: string;
  createTime: Date | string;
  status: ProtectedJobStatus;
  receiverConfigurations: Array<ProtectedJobReceiverConfiguration>;
}
export type ProtectedJobSummaryList = Array<ProtectedJobSummary>;
export type ProtectedJobType = "PYSPARK";
export interface ProtectedQuery {
  id: string;
  membershipId: string;
  membershipArn: string;
  createTime: Date | string;
  sqlParameters?: ProtectedQuerySQLParameters;
  status: string;
  resultConfiguration?: ProtectedQueryResultConfiguration;
  statistics?: ProtectedQueryStatistics;
  result?: ProtectedQueryResult;
  error?: ProtectedQueryError;
  differentialPrivacy?: DifferentialPrivacyParameters;
  computeConfiguration?: ComputeConfiguration;
}
export interface ProtectedQueryDistributeOutput {
  s3?: ProtectedQueryS3Output;
  memberList?: Array<ProtectedQuerySingleMemberOutput>;
}
export interface ProtectedQueryDistributeOutputConfiguration {
  locations: Array<ProtectedQueryDistributeOutputConfigurationLocation>;
}
interface _ProtectedQueryDistributeOutputConfigurationLocation {
  s3?: ProtectedQueryS3OutputConfiguration;
  member?: ProtectedQueryMemberOutputConfiguration;
}

export type ProtectedQueryDistributeOutputConfigurationLocation =
  | (_ProtectedQueryDistributeOutputConfigurationLocation & {
      s3: ProtectedQueryS3OutputConfiguration;
    })
  | (_ProtectedQueryDistributeOutputConfigurationLocation & {
      member: ProtectedQueryMemberOutputConfiguration;
    });
export type ProtectedQueryDistributeOutputConfigurationLocations =
  Array<ProtectedQueryDistributeOutputConfigurationLocation>;
export interface ProtectedQueryError {
  message: string;
  code: string;
}
export type ProtectedQueryIdentifier = string;

export interface ProtectedQueryMemberOutputConfiguration {
  accountId: string;
}
export type ProtectedQueryMemberOutputList =
  Array<ProtectedQuerySingleMemberOutput>;
interface _ProtectedQueryOutput {
  s3?: ProtectedQueryS3Output;
  memberList?: Array<ProtectedQuerySingleMemberOutput>;
  distribute?: ProtectedQueryDistributeOutput;
}

export type ProtectedQueryOutput =
  | (_ProtectedQueryOutput & { s3: ProtectedQueryS3Output })
  | (_ProtectedQueryOutput & {
      memberList: Array<ProtectedQuerySingleMemberOutput>;
    })
  | (_ProtectedQueryOutput & { distribute: ProtectedQueryDistributeOutput });
interface _ProtectedQueryOutputConfiguration {
  s3?: ProtectedQueryS3OutputConfiguration;
  member?: ProtectedQueryMemberOutputConfiguration;
  distribute?: ProtectedQueryDistributeOutputConfiguration;
}

export type ProtectedQueryOutputConfiguration =
  | (_ProtectedQueryOutputConfiguration & {
      s3: ProtectedQueryS3OutputConfiguration;
    })
  | (_ProtectedQueryOutputConfiguration & {
      member: ProtectedQueryMemberOutputConfiguration;
    })
  | (_ProtectedQueryOutputConfiguration & {
      distribute: ProtectedQueryDistributeOutputConfiguration;
    });
export interface ProtectedQueryResult {
  output: ProtectedQueryOutput;
}
export interface ProtectedQueryResultConfiguration {
  outputConfiguration: ProtectedQueryOutputConfiguration;
}
export interface ProtectedQueryS3Output {
  location: string;
}
export interface ProtectedQueryS3OutputConfiguration {
  resultFormat: string;
  bucket: string;
  keyPrefix?: string;
  singleFileOutput?: boolean;
}
export interface ProtectedQuerySingleMemberOutput {
  accountId: string;
}
export interface ProtectedQuerySQLParameters {
  queryString?: string;
  analysisTemplateArn?: string;
  parameters?: Partial<Record<string, string>>;
}
export interface ProtectedQueryStatistics {
  totalDurationInMillis?: number;
  billedResourceUtilization?: BilledResourceUtilization;
}
export type ProtectedQueryStatus = string;

export interface ProtectedQuerySummary {
  id: string;
  membershipId: string;
  membershipArn: string;
  createTime: Date | string;
  status: string;
  receiverConfigurations: Array<ReceiverConfiguration>;
}
export type ProtectedQuerySummaryList = Array<ProtectedQuerySummary>;
export type ProtectedQueryType = string;

export interface QueryComputePaymentConfig {
  isResponsible: boolean;
}
interface _QueryConstraint {
  requireOverlap?: QueryConstraintRequireOverlap;
}

export type QueryConstraint = _QueryConstraint & {
  requireOverlap: QueryConstraintRequireOverlap;
};
export type QueryConstraintList = Array<QueryConstraint>;
export interface QueryConstraintRequireOverlap {
  columns?: Array<string>;
}
export type QueryTables = Array<string>;
export type ReceiverAccountIds = Array<string>;
export interface ReceiverConfiguration {
  analysisType: AnalysisType;
  configurationDetails?: ConfigurationDetails;
}
export type ReceiverConfigurationsList = Array<ReceiverConfiguration>;
export type ResourceAlias = string;

export type ResourceDescription = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ResourceType = string;

export type ResultFormat = string;

export type RoleArn = string;

export interface S3Location {
  bucket: string;
  key: string;
}
export type ScalarFunctions = string;

export type ScalarFunctionsList = Array<string>;
export interface Schema {
  columns: Array<Column>;
  partitionKeys: Array<Column>;
  analysisRuleTypes: Array<AnalysisRuleType>;
  analysisMethod?: AnalysisMethod;
  selectedAnalysisMethods?: Array<SelectedAnalysisMethod>;
  creatorAccountId: string;
  name: string;
  collaborationId: string;
  collaborationArn: string;
  description: string;
  createTime: Date | string;
  updateTime: Date | string;
  type: SchemaType;
  schemaStatusDetails: Array<SchemaStatusDetail>;
  schemaTypeProperties?: SchemaTypeProperties;
}
export type SchemaAnalysisRuleList = Array<AnalysisRule>;
export interface SchemaAnalysisRuleRequest {
  name: string;
  type: AnalysisRuleType;
}
export type SchemaAnalysisRuleRequestList = Array<SchemaAnalysisRuleRequest>;
export type SchemaConfiguration = "DIFFERENTIAL_PRIVACY";
export type SchemaConfigurationList = Array<SchemaConfiguration>;
export type SchemaList = Array<Schema>;
export type SchemaStatus = "READY" | "NOT_READY";
export interface SchemaStatusDetail {
  status: SchemaStatus;
  reasons?: Array<SchemaStatusReason>;
  analysisRuleType?: AnalysisRuleType;
  configurations?: Array<SchemaConfiguration>;
  analysisType: AnalysisType;
}
export type SchemaStatusDetailList = Array<SchemaStatusDetail>;
export interface SchemaStatusReason {
  code: SchemaStatusReasonCode;
  message: string;
}
export type SchemaStatusReasonCode =
  | "ANALYSIS_RULE_MISSING"
  | "ANALYSIS_TEMPLATES_NOT_CONFIGURED"
  | "ANALYSIS_PROVIDERS_NOT_CONFIGURED"
  | "DIFFERENTIAL_PRIVACY_POLICY_NOT_CONFIGURED"
  | "ID_MAPPING_TABLE_NOT_POPULATED"
  | "COLLABORATION_ANALYSIS_RULE_NOT_CONFIGURED"
  | "ADDITIONAL_ANALYSES_NOT_CONFIGURED"
  | "RESULT_RECEIVERS_NOT_CONFIGURED"
  | "ADDITIONAL_ANALYSES_NOT_ALLOWED"
  | "RESULT_RECEIVERS_NOT_ALLOWED"
  | "ANALYSIS_RULE_TYPES_NOT_COMPATIBLE";
export type SchemaStatusReasonList = Array<SchemaStatusReason>;
export interface SchemaSummary {
  name: string;
  type: SchemaType;
  creatorAccountId: string;
  createTime: Date | string;
  updateTime: Date | string;
  collaborationId: string;
  collaborationArn: string;
  analysisRuleTypes: Array<AnalysisRuleType>;
  analysisMethod?: AnalysisMethod;
  selectedAnalysisMethods?: Array<SelectedAnalysisMethod>;
}
export type SchemaSummaryList = Array<SchemaSummary>;
export type SchemaType = "TABLE" | "ID_MAPPING_TABLE";
interface _SchemaTypeProperties {
  idMappingTable?: IdMappingTableSchemaTypeProperties;
}

export type SchemaTypeProperties = _SchemaTypeProperties & {
  idMappingTable: IdMappingTableSchemaTypeProperties;
};
export type SecretsManagerArn = string;

export type SelectedAnalysisMethod = "DIRECT_QUERY" | "DIRECT_JOB";
export type SelectedAnalysisMethods = Array<SelectedAnalysisMethod>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly quotaName: string;
  readonly quotaValue: number;
}> {}
export type SnowflakeAccountIdentifier = string;

export type SnowflakeDatabaseName = string;

export type SnowflakeSchemaName = string;

export type SnowflakeTableName = string;

export interface SnowflakeTableReference {
  secretArn: string;
  accountIdentifier: string;
  databaseName: string;
  tableName: string;
  schemaName: string;
  tableSchema: SnowflakeTableSchema;
}
interface _SnowflakeTableSchema {
  v1?: Array<SnowflakeTableSchemaV1>;
}

export type SnowflakeTableSchema = _SnowflakeTableSchema & {
  v1: Array<SnowflakeTableSchemaV1>;
};
export type SnowflakeTableSchemaList = Array<SnowflakeTableSchemaV1>;
export interface SnowflakeTableSchemaV1 {
  columnName: string;
  columnType: string;
}
export interface StartProtectedJobInput {
  type: ProtectedJobType;
  membershipIdentifier: string;
  jobParameters: ProtectedJobParameters;
  resultConfiguration?: ProtectedJobResultConfigurationInput;
}
export interface StartProtectedJobOutput {
  protectedJob: ProtectedJob;
}
export interface StartProtectedQueryInput {
  type: string;
  membershipIdentifier: string;
  sqlParameters: ProtectedQuerySQLParameters;
  resultConfiguration?: ProtectedQueryResultConfiguration;
  computeConfiguration?: ComputeConfiguration;
}
export interface StartProtectedQueryOutput {
  protectedQuery: ProtectedQuery;
}
export type TableAlias = string;

export type TableAliasList = Array<string>;
export type TableDescription = string;

interface _TableReference {
  glue?: GlueTableReference;
  snowflake?: SnowflakeTableReference;
  athena?: AthenaTableReference;
}

export type TableReference =
  | (_TableReference & { glue: GlueTableReference })
  | (_TableReference & { snowflake: SnowflakeTableReference })
  | (_TableReference & { athena: AthenaTableReference });
export type TagKey = string;

export type TagKeys = Array<string>;
export type TagMap = Partial<Record<string, string>>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Partial<Record<string, string>>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export type TargetProtectedJobStatus = "CANCELLED";
export type TargetProtectedQueryStatus = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateAnalysisTemplateInput {
  membershipIdentifier: string;
  analysisTemplateIdentifier: string;
  description?: string;
}
export interface UpdateAnalysisTemplateOutput {
  analysisTemplate: AnalysisTemplate;
}
export interface UpdateCollaborationInput {
  collaborationIdentifier: string;
  name?: string;
  description?: string;
  analyticsEngine?: AnalyticsEngine;
}
export interface UpdateCollaborationOutput {
  collaboration: Collaboration;
}
export interface UpdateConfiguredAudienceModelAssociationInput {
  configuredAudienceModelAssociationIdentifier: string;
  membershipIdentifier: string;
  description?: string;
  name?: string;
}
export interface UpdateConfiguredAudienceModelAssociationOutput {
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation;
}
export interface UpdateConfiguredTableAnalysisRuleInput {
  configuredTableIdentifier: string;
  analysisRuleType: ConfiguredTableAnalysisRuleType;
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy;
}
export interface UpdateConfiguredTableAnalysisRuleOutput {
  analysisRule: ConfiguredTableAnalysisRule;
}
export interface UpdateConfiguredTableAssociationAnalysisRuleInput {
  membershipIdentifier: string;
  configuredTableAssociationIdentifier: string;
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType;
  analysisRulePolicy: ConfiguredTableAssociationAnalysisRulePolicy;
}
export interface UpdateConfiguredTableAssociationAnalysisRuleOutput {
  analysisRule: ConfiguredTableAssociationAnalysisRule;
}
export interface UpdateConfiguredTableAssociationInput {
  configuredTableAssociationIdentifier: string;
  membershipIdentifier: string;
  description?: string;
  roleArn?: string;
}
export interface UpdateConfiguredTableAssociationOutput {
  configuredTableAssociation: ConfiguredTableAssociation;
}
export interface UpdateConfiguredTableInput {
  configuredTableIdentifier: string;
  name?: string;
  description?: string;
  tableReference?: TableReference;
  allowedColumns?: Array<string>;
  analysisMethod?: AnalysisMethod;
  selectedAnalysisMethods?: Array<SelectedAnalysisMethod>;
}
export interface UpdateConfiguredTableOutput {
  configuredTable: ConfiguredTable;
}
export interface UpdateIdMappingTableInput {
  idMappingTableIdentifier: string;
  membershipIdentifier: string;
  description?: string;
  kmsKeyArn?: string;
}
export interface UpdateIdMappingTableOutput {
  idMappingTable: IdMappingTable;
}
export interface UpdateIdNamespaceAssociationInput {
  idNamespaceAssociationIdentifier: string;
  membershipIdentifier: string;
  name?: string;
  description?: string;
  idMappingConfig?: IdMappingConfig;
}
export interface UpdateIdNamespaceAssociationOutput {
  idNamespaceAssociation: IdNamespaceAssociation;
}
export interface UpdateMembershipInput {
  membershipIdentifier: string;
  queryLogStatus?: MembershipQueryLogStatus;
  jobLogStatus?: MembershipJobLogStatus;
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration;
}
export interface UpdateMembershipOutput {
  membership: Membership;
}
export interface UpdatePrivacyBudgetTemplateInput {
  membershipIdentifier: string;
  privacyBudgetTemplateIdentifier: string;
  privacyBudgetType: PrivacyBudgetType;
  parameters?: PrivacyBudgetTemplateUpdateParameters;
}
export interface UpdatePrivacyBudgetTemplateOutput {
  privacyBudgetTemplate: PrivacyBudgetTemplate;
}
export interface UpdateProtectedJobInput {
  membershipIdentifier: string;
  protectedJobIdentifier: string;
  targetStatus: TargetProtectedJobStatus;
}
export interface UpdateProtectedJobOutput {
  protectedJob: ProtectedJob;
}
export interface UpdateProtectedQueryInput {
  membershipIdentifier: string;
  protectedQueryIdentifier: string;
  targetStatus: string;
}
export interface UpdateProtectedQueryOutput {
  protectedQuery: ProtectedQuery;
}
export type UsersNoisePerQuery = number;

export type UUID = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly reason?: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export interface WorkerComputeConfiguration {
  type?: WorkerComputeType;
  number?: number;
}
export type WorkerComputeType = "CR1X" | "CR4X";
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

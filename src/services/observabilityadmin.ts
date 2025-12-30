import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ResourceTypes = S.Array(S.String);
export const AccountIdentifiers = S.Array(S.String);
export const OrganizationUnitIdentifiers = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export const TelemetrySourceTypes = S.Array(S.String);
export class VPCFlowLogParameters extends S.Class<VPCFlowLogParameters>("VPCFlowLogParameters")({LogFormat: S.optional(S.String), TrafficType: S.optional(S.String), MaxAggregationInterval: S.optional(S.Number)}) {}
export const StringList = S.Array(S.String);
export class AdvancedFieldSelector extends S.Class<AdvancedFieldSelector>("AdvancedFieldSelector")({Field: S.String, Equals: S.optional(StringList), StartsWith: S.optional(StringList), EndsWith: S.optional(StringList), NotEquals: S.optional(StringList), NotStartsWith: S.optional(StringList), NotEndsWith: S.optional(StringList)}) {}
export const FieldSelectors = S.Array(AdvancedFieldSelector);
export class AdvancedEventSelector extends S.Class<AdvancedEventSelector>("AdvancedEventSelector")({Name: S.optional(S.String), FieldSelectors: FieldSelectors}) {}
export const AdvancedEventSelectors = S.Array(AdvancedEventSelector);
export class CloudtrailParameters extends S.Class<CloudtrailParameters>("CloudtrailParameters")({AdvancedEventSelectors: AdvancedEventSelectors}) {}
export class ELBLoadBalancerLoggingParameters extends S.Class<ELBLoadBalancerLoggingParameters>("ELBLoadBalancerLoggingParameters")({OutputFormat: S.optional(S.String), FieldDelimiter: S.optional(S.String)}) {}
export class SingleHeader extends S.Class<SingleHeader>("SingleHeader")({Name: S.optional(S.String)}) {}
export class FieldToMatch extends S.Class<FieldToMatch>("FieldToMatch")({SingleHeader: S.optional(SingleHeader), UriPath: S.optional(S.String), QueryString: S.optional(S.String), Method: S.optional(S.String)}) {}
export const RedactedFields = S.Array(FieldToMatch);
export class ActionCondition extends S.Class<ActionCondition>("ActionCondition")({Action: S.optional(S.String)}) {}
export class LabelNameCondition extends S.Class<LabelNameCondition>("LabelNameCondition")({LabelName: S.optional(S.String)}) {}
export class Condition extends S.Class<Condition>("Condition")({ActionCondition: S.optional(ActionCondition), LabelNameCondition: S.optional(LabelNameCondition)}) {}
export const Conditions = S.Array(Condition);
export class Filter extends S.Class<Filter>("Filter")({Behavior: S.optional(S.String), Requirement: S.optional(S.String), Conditions: S.optional(Conditions)}) {}
export const Filters = S.Array(Filter);
export class LoggingFilter extends S.Class<LoggingFilter>("LoggingFilter")({Filters: S.optional(Filters), DefaultBehavior: S.optional(S.String)}) {}
export class WAFLoggingParameters extends S.Class<WAFLoggingParameters>("WAFLoggingParameters")({RedactedFields: S.optional(RedactedFields), LoggingFilter: S.optional(LoggingFilter), LogType: S.optional(S.String)}) {}
export const LogTypes = S.Array(S.String);
export class LogDeliveryParameters extends S.Class<LogDeliveryParameters>("LogDeliveryParameters")({LogTypes: S.optional(LogTypes)}) {}
export class TelemetryDestinationConfiguration extends S.Class<TelemetryDestinationConfiguration>("TelemetryDestinationConfiguration")({DestinationType: S.optional(S.String), DestinationPattern: S.optional(S.String), RetentionInDays: S.optional(S.Number), VPCFlowLogParameters: S.optional(VPCFlowLogParameters), CloudtrailParameters: S.optional(CloudtrailParameters), ELBLoadBalancerLoggingParameters: S.optional(ELBLoadBalancerLoggingParameters), WAFLoggingParameters: S.optional(WAFLoggingParameters), LogDeliveryParameters: S.optional(LogDeliveryParameters)}) {}
export class TelemetryRule extends S.Class<TelemetryRule>("TelemetryRule")({ResourceType: S.optional(S.String), TelemetryType: S.String, TelemetrySourceTypes: S.optional(TelemetrySourceTypes), DestinationConfiguration: S.optional(TelemetryDestinationConfiguration), Scope: S.optional(S.String), SelectionCriteria: S.optional(S.String)}) {}
export const TagMapInput = S.Record({key: S.String, value: S.String});
export class CreateTelemetryRuleForOrganizationInput extends S.Class<CreateTelemetryRuleForOrganizationInput>("CreateTelemetryRuleForOrganizationInput")({RuleName: S.String, Rule: TelemetryRule, Tags: S.optional(TagMapInput)}) {}
export class DeleteCentralizationRuleForOrganizationInput extends S.Class<DeleteCentralizationRuleForOrganizationInput>("DeleteCentralizationRuleForOrganizationInput")({RuleIdentifier: S.String}) {}
export class DeleteS3TableIntegrationInput extends S.Class<DeleteS3TableIntegrationInput>("DeleteS3TableIntegrationInput")({Arn: S.String}) {}
export class DeleteTelemetryRuleInput extends S.Class<DeleteTelemetryRuleInput>("DeleteTelemetryRuleInput")({RuleIdentifier: S.String}) {}
export class DeleteTelemetryRuleForOrganizationInput extends S.Class<DeleteTelemetryRuleForOrganizationInput>("DeleteTelemetryRuleForOrganizationInput")({RuleIdentifier: S.String}) {}
export class GetCentralizationRuleForOrganizationInput extends S.Class<GetCentralizationRuleForOrganizationInput>("GetCentralizationRuleForOrganizationInput")({RuleIdentifier: S.String}) {}
export class GetS3TableIntegrationInput extends S.Class<GetS3TableIntegrationInput>("GetS3TableIntegrationInput")({Arn: S.String}) {}
export class GetTelemetryEnrichmentStatusOutput extends S.Class<GetTelemetryEnrichmentStatusOutput>("GetTelemetryEnrichmentStatusOutput")({Status: S.optional(S.String), AwsResourceExplorerManagedViewArn: S.optional(S.String)}) {}
export class GetTelemetryEvaluationStatusOutput extends S.Class<GetTelemetryEvaluationStatusOutput>("GetTelemetryEvaluationStatusOutput")({Status: S.optional(S.String), FailureReason: S.optional(S.String)}) {}
export class GetTelemetryEvaluationStatusForOrganizationOutput extends S.Class<GetTelemetryEvaluationStatusForOrganizationOutput>("GetTelemetryEvaluationStatusForOrganizationOutput")({Status: S.optional(S.String), FailureReason: S.optional(S.String)}) {}
export class GetTelemetryRuleInput extends S.Class<GetTelemetryRuleInput>("GetTelemetryRuleInput")({RuleIdentifier: S.String}) {}
export class GetTelemetryRuleForOrganizationInput extends S.Class<GetTelemetryRuleForOrganizationInput>("GetTelemetryRuleForOrganizationInput")({RuleIdentifier: S.String}) {}
export class ListCentralizationRulesForOrganizationInput extends S.Class<ListCentralizationRulesForOrganizationInput>("ListCentralizationRulesForOrganizationInput")({RuleNamePrefix: S.optional(S.String), AllRegions: S.optional(S.Boolean), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export const TelemetryConfigurationState = S.Record({key: S.String, value: S.String});
export class ListResourceTelemetryForOrganizationInput extends S.Class<ListResourceTelemetryForOrganizationInput>("ListResourceTelemetryForOrganizationInput")({AccountIdentifiers: S.optional(AccountIdentifiers), ResourceIdentifierPrefix: S.optional(S.String), ResourceTypes: S.optional(ResourceTypes), TelemetryConfigurationState: S.optional(TelemetryConfigurationState), ResourceTags: S.optional(TagMapInput), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListS3TableIntegrationsInput extends S.Class<ListS3TableIntegrationsInput>("ListS3TableIntegrationsInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({ResourceARN: S.String}) {}
export class ListTelemetryRulesInput extends S.Class<ListTelemetryRulesInput>("ListTelemetryRulesInput")({RuleNamePrefix: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTelemetryRulesForOrganizationInput extends S.Class<ListTelemetryRulesForOrganizationInput>("ListTelemetryRulesForOrganizationInput")({RuleNamePrefix: S.optional(S.String), SourceAccountIds: S.optional(AccountIdentifiers), SourceOrganizationUnitIds: S.optional(OrganizationUnitIdentifiers), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class StartTelemetryEnrichmentOutput extends S.Class<StartTelemetryEnrichmentOutput>("StartTelemetryEnrichmentOutput")({Status: S.optional(S.String), AwsResourceExplorerManagedViewArn: S.optional(S.String)}) {}
export class StopTelemetryEnrichmentOutput extends S.Class<StopTelemetryEnrichmentOutput>("StopTelemetryEnrichmentOutput")({Status: S.optional(S.String)}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({ResourceARN: S.String, Tags: TagMapInput}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export const Regions = S.Array(S.String);
export class SourceLogsConfiguration extends S.Class<SourceLogsConfiguration>("SourceLogsConfiguration")({LogGroupSelectionCriteria: S.String, EncryptedLogGroupStrategy: S.String}) {}
export class CentralizationRuleSource extends S.Class<CentralizationRuleSource>("CentralizationRuleSource")({Regions: Regions, Scope: S.optional(S.String), SourceLogsConfiguration: S.optional(SourceLogsConfiguration)}) {}
export class LogsEncryptionConfiguration extends S.Class<LogsEncryptionConfiguration>("LogsEncryptionConfiguration")({EncryptionStrategy: S.String, KmsKeyArn: S.optional(S.String), EncryptionConflictResolutionStrategy: S.optional(S.String)}) {}
export class LogsBackupConfiguration extends S.Class<LogsBackupConfiguration>("LogsBackupConfiguration")({Region: S.String, KmsKeyArn: S.optional(S.String)}) {}
export class DestinationLogsConfiguration extends S.Class<DestinationLogsConfiguration>("DestinationLogsConfiguration")({LogsEncryptionConfiguration: S.optional(LogsEncryptionConfiguration), BackupConfiguration: S.optional(LogsBackupConfiguration)}) {}
export class CentralizationRuleDestination extends S.Class<CentralizationRuleDestination>("CentralizationRuleDestination")({Region: S.String, Account: S.optional(S.String), DestinationLogsConfiguration: S.optional(DestinationLogsConfiguration)}) {}
export class CentralizationRule extends S.Class<CentralizationRule>("CentralizationRule")({Source: CentralizationRuleSource, Destination: CentralizationRuleDestination}) {}
export class UpdateCentralizationRuleForOrganizationInput extends S.Class<UpdateCentralizationRuleForOrganizationInput>("UpdateCentralizationRuleForOrganizationInput")({RuleIdentifier: S.String, Rule: CentralizationRule}) {}
export class UpdateTelemetryRuleInput extends S.Class<UpdateTelemetryRuleInput>("UpdateTelemetryRuleInput")({RuleIdentifier: S.String, Rule: TelemetryRule}) {}
export class UpdateTelemetryRuleForOrganizationInput extends S.Class<UpdateTelemetryRuleForOrganizationInput>("UpdateTelemetryRuleForOrganizationInput")({RuleIdentifier: S.String, Rule: TelemetryRule}) {}
export class TelemetryPipelineConfiguration extends S.Class<TelemetryPipelineConfiguration>("TelemetryPipelineConfiguration")({Body: S.String}) {}
export class ValidateTelemetryPipelineConfigurationInput extends S.Class<ValidateTelemetryPipelineConfigurationInput>("ValidateTelemetryPipelineConfigurationInput")({Configuration: TelemetryPipelineConfiguration}) {}
export class Encryption extends S.Class<Encryption>("Encryption")({SseAlgorithm: S.String, KmsKeyArn: S.optional(S.String)}) {}
export class Record extends S.Class<Record>("Record")({Data: S.optional(S.String), Type: S.optional(S.String)}) {}
export const Records = S.Array(Record);
export class CreateS3TableIntegrationInput extends S.Class<CreateS3TableIntegrationInput>("CreateS3TableIntegrationInput")({Encryption: Encryption, RoleArn: S.String, Tags: S.optional(TagMapInput)}) {}
export class CreateTelemetryRuleForOrganizationOutput extends S.Class<CreateTelemetryRuleForOrganizationOutput>("CreateTelemetryRuleForOrganizationOutput")({RuleArn: S.optional(S.String)}) {}
export class GetCentralizationRuleForOrganizationOutput extends S.Class<GetCentralizationRuleForOrganizationOutput>("GetCentralizationRuleForOrganizationOutput")({RuleName: S.optional(S.String), RuleArn: S.optional(S.String), CreatorAccountId: S.optional(S.String), CreatedTimeStamp: S.optional(S.Number), CreatedRegion: S.optional(S.String), LastUpdateTimeStamp: S.optional(S.Number), RuleHealth: S.optional(S.String), FailureReason: S.optional(S.String), CentralizationRule: S.optional(CentralizationRule)}) {}
export class GetS3TableIntegrationOutput extends S.Class<GetS3TableIntegrationOutput>("GetS3TableIntegrationOutput")({Arn: S.optional(S.String), RoleArn: S.optional(S.String), Status: S.optional(S.String), Encryption: S.optional(Encryption), DestinationTableBucketArn: S.optional(S.String), CreatedTimeStamp: S.optional(S.Number)}) {}
export class GetTelemetryRuleOutput extends S.Class<GetTelemetryRuleOutput>("GetTelemetryRuleOutput")({RuleName: S.optional(S.String), RuleArn: S.optional(S.String), CreatedTimeStamp: S.optional(S.Number), LastUpdateTimeStamp: S.optional(S.Number), TelemetryRule: S.optional(TelemetryRule)}) {}
export class GetTelemetryRuleForOrganizationOutput extends S.Class<GetTelemetryRuleForOrganizationOutput>("GetTelemetryRuleForOrganizationOutput")({RuleName: S.optional(S.String), RuleArn: S.optional(S.String), CreatedTimeStamp: S.optional(S.Number), LastUpdateTimeStamp: S.optional(S.Number), TelemetryRule: S.optional(TelemetryRule)}) {}
export class ListResourceTelemetryInput extends S.Class<ListResourceTelemetryInput>("ListResourceTelemetryInput")({ResourceIdentifierPrefix: S.optional(S.String), ResourceTypes: S.optional(ResourceTypes), TelemetryConfigurationState: S.optional(TelemetryConfigurationState), ResourceTags: S.optional(TagMapInput), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class TelemetryRuleSummary extends S.Class<TelemetryRuleSummary>("TelemetryRuleSummary")({RuleName: S.optional(S.String), RuleArn: S.optional(S.String), CreatedTimeStamp: S.optional(S.Number), LastUpdateTimeStamp: S.optional(S.Number), ResourceType: S.optional(S.String), TelemetryType: S.optional(S.String), TelemetrySourceTypes: S.optional(TelemetrySourceTypes)}) {}
export const TelemetryRuleSummaries = S.Array(TelemetryRuleSummary);
export class ListTelemetryRulesForOrganizationOutput extends S.Class<ListTelemetryRulesForOrganizationOutput>("ListTelemetryRulesForOrganizationOutput")({TelemetryRuleSummaries: S.optional(TelemetryRuleSummaries), NextToken: S.optional(S.String)}) {}
export class TestTelemetryPipelineInput extends S.Class<TestTelemetryPipelineInput>("TestTelemetryPipelineInput")({Records: Records, Configuration: TelemetryPipelineConfiguration}) {}
export class UpdateCentralizationRuleForOrganizationOutput extends S.Class<UpdateCentralizationRuleForOrganizationOutput>("UpdateCentralizationRuleForOrganizationOutput")({RuleArn: S.optional(S.String)}) {}
export class UpdateTelemetryRuleOutput extends S.Class<UpdateTelemetryRuleOutput>("UpdateTelemetryRuleOutput")({RuleArn: S.optional(S.String)}) {}
export class UpdateTelemetryRuleForOrganizationOutput extends S.Class<UpdateTelemetryRuleForOrganizationOutput>("UpdateTelemetryRuleForOrganizationOutput")({RuleArn: S.optional(S.String)}) {}
export const FieldMap = S.Record({key: S.String, value: S.String});
export class ValidationError extends S.Class<ValidationError>("ValidationError")({Message: S.optional(S.String), Reason: S.optional(S.String), FieldMap: S.optional(FieldMap)}) {}
export const ValidationErrors = S.Array(ValidationError);
export class ValidateTelemetryPipelineConfigurationOutput extends S.Class<ValidateTelemetryPipelineConfigurationOutput>("ValidateTelemetryPipelineConfigurationOutput")({Errors: S.optional(ValidationErrors)}) {}
export class CentralizationRuleSummary extends S.Class<CentralizationRuleSummary>("CentralizationRuleSummary")({RuleName: S.optional(S.String), RuleArn: S.optional(S.String), CreatorAccountId: S.optional(S.String), CreatedTimeStamp: S.optional(S.Number), CreatedRegion: S.optional(S.String), LastUpdateTimeStamp: S.optional(S.Number), RuleHealth: S.optional(S.String), FailureReason: S.optional(S.String), DestinationAccountId: S.optional(S.String), DestinationRegion: S.optional(S.String)}) {}
export const CentralizationRuleSummaries = S.Array(CentralizationRuleSummary);
export const TagMapOutput = S.Record({key: S.String, value: S.String});
export class TelemetryConfiguration extends S.Class<TelemetryConfiguration>("TelemetryConfiguration")({AccountIdentifier: S.optional(S.String), TelemetryConfigurationState: S.optional(TelemetryConfigurationState), ResourceType: S.optional(S.String), ResourceIdentifier: S.optional(S.String), ResourceTags: S.optional(TagMapOutput), LastUpdateTimeStamp: S.optional(S.Number)}) {}
export const TelemetryConfigurations = S.Array(TelemetryConfiguration);
export class IntegrationSummary extends S.Class<IntegrationSummary>("IntegrationSummary")({Arn: S.optional(S.String), Status: S.optional(S.String)}) {}
export const IntegrationSummaries = S.Array(IntegrationSummary);
export class CreateS3TableIntegrationOutput extends S.Class<CreateS3TableIntegrationOutput>("CreateS3TableIntegrationOutput")({Arn: S.optional(S.String)}) {}
export class ListCentralizationRulesForOrganizationOutput extends S.Class<ListCentralizationRulesForOrganizationOutput>("ListCentralizationRulesForOrganizationOutput")({CentralizationRuleSummaries: S.optional(CentralizationRuleSummaries), NextToken: S.optional(S.String)}) {}
export class ListResourceTelemetryOutput extends S.Class<ListResourceTelemetryOutput>("ListResourceTelemetryOutput")({TelemetryConfigurations: S.optional(TelemetryConfigurations), NextToken: S.optional(S.String)}) {}
export class ListResourceTelemetryForOrganizationOutput extends S.Class<ListResourceTelemetryForOrganizationOutput>("ListResourceTelemetryForOrganizationOutput")({TelemetryConfigurations: S.optional(TelemetryConfigurations), NextToken: S.optional(S.String)}) {}
export class ListS3TableIntegrationsOutput extends S.Class<ListS3TableIntegrationsOutput>("ListS3TableIntegrationsOutput")({IntegrationSummaries: S.optional(IntegrationSummaries), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({Tags: TagMapOutput}) {}
export class ListTelemetryRulesOutput extends S.Class<ListTelemetryRulesOutput>("ListTelemetryRulesOutput")({TelemetryRuleSummaries: S.optional(TelemetryRuleSummaries), NextToken: S.optional(S.String)}) {}
export class PipelineOutputError extends S.Class<PipelineOutputError>("PipelineOutputError")({Message: S.optional(S.String)}) {}
export class PipelineOutput extends S.Class<PipelineOutput>("PipelineOutput")({Record: S.optional(Record), Error: S.optional(PipelineOutputError)}) {}
export const PipelineOutputs = S.Array(PipelineOutput);
export class CreateCentralizationRuleForOrganizationInput extends S.Class<CreateCentralizationRuleForOrganizationInput>("CreateCentralizationRuleForOrganizationInput")({RuleName: S.String, Rule: CentralizationRule, Tags: S.optional(TagMapInput)}) {}
export class TestTelemetryPipelineOutput extends S.Class<TestTelemetryPipelineOutput>("TestTelemetryPipelineOutput")({Results: S.optional(PipelineOutputs)}) {}
export class CreateCentralizationRuleForOrganizationOutput extends S.Class<CreateCentralizationRuleForOrganizationOutput>("CreateCentralizationRuleForOrganizationOutput")({RuleArn: S.optional(S.String)}) {}
export class CreateTelemetryRuleInput extends S.Class<CreateTelemetryRuleInput>("CreateTelemetryRuleInput")({RuleName: S.String, Rule: TelemetryRule, Tags: S.optional(TagMapInput)}) {}
export class CreateTelemetryRuleOutput extends S.Class<CreateTelemetryRuleOutput>("CreateTelemetryRuleOutput")({RuleArn: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class InvalidStateException extends S.TaggedError<InvalidStateException>()("InvalidStateException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes a telemetry rule from your account. Any telemetry configurations previously created by the rule will remain but no new resources will be configured by this rule.
 */export const deleteTelemetryRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/DeleteTelemetryRule", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.DeleteTelemetryRule" }, DeleteTelemetryRuleInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an organization-wide telemetry rule. This operation can only be called by the organization's management account or a delegated administrator account.
 */export const deleteTelemetryRuleForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/DeleteTelemetryRuleForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.DeleteTelemetryRuleForOrganization" }, DeleteTelemetryRuleForOrganizationInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the current status of the resource tags for telemetry feature, which enhances telemetry data with additional resource metadata from Resource Explorer.
 */export const getTelemetryEnrichmentStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/GetTelemetryEnrichmentStatus", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.GetTelemetryEnrichmentStatus" }, S.Struct({}), GetTelemetryEnrichmentStatusOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the current onboarding status of the telemetry config feature, including the status of the feature and reason the feature failed to start or stop.
 */export const getTelemetryEvaluationStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/GetTelemetryEvaluationStatus", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.GetTelemetryEvaluationStatus" }, S.Struct({}), GetTelemetryEvaluationStatusOutput, [AccessDeniedException, InternalServerException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This returns the onboarding status of the telemetry configuration feature for the organization. It can only be called by a Management Account of an Amazon Web Services Organization or an assigned Delegated Admin Account of Amazon CloudWatch telemetry config.
 */export const getTelemetryEvaluationStatusForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/GetTelemetryEvaluationStatusForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.GetTelemetryEvaluationStatusForOrganization" }, S.Struct({}), GetTelemetryEvaluationStatusForOrganizationOutput, [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This action begins onboarding the caller Amazon Web Services account to the telemetry config feature.
 */export const startTelemetryEvaluation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/StartTelemetryEvaluation", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.StartTelemetryEvaluation" }, S.Struct({}), S.Struct({}), [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This actions begins onboarding the organization and all member accounts to the telemetry config feature.
 */export const startTelemetryEvaluationForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/StartTelemetryEvaluationForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.StartTelemetryEvaluationForOrganization" }, S.Struct({}), S.Struct({}), [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables the resource tags for telemetry feature for your account, stopping the enhancement of telemetry data with additional resource metadata.
 */export const stopTelemetryEnrichment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/StopTelemetryEnrichment", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.StopTelemetryEnrichment" }, S.Struct({}), StopTelemetryEnrichmentOutput, [AccessDeniedException, ConflictException, InternalServerException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This action begins offboarding the caller Amazon Web Services account from the telemetry config feature.
 */export const stopTelemetryEvaluation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/StopTelemetryEvaluation", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.StopTelemetryEvaluation" }, S.Struct({}), S.Struct({}), [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from a resource. Supports telemetry rule resources and telemetry pipeline resources.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/UntagResource", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.UntagResource" }, UntagResourceInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a telemetry rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.
 */export const createTelemetryRuleForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/CreateTelemetryRuleForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.CreateTelemetryRuleForOrganization" }, CreateTelemetryRuleForOrganizationInput, CreateTelemetryRuleForOrganizationOutput, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an organization-wide centralization rule. This operation can only be called by the organization's management account or a delegated administrator account.
 */export const deleteCentralizationRuleForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/DeleteCentralizationRuleForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.DeleteCentralizationRuleForOrganization" }, DeleteCentralizationRuleForOrganizationInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an S3 Table integration and its associated data. This operation removes the connection between CloudWatch Observability Admin and S3 Tables.
 */export const deleteS3TableIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/DeleteS3TableIntegration", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.DeleteS3TableIntegration" }, DeleteS3TableIntegrationInput, S.Struct({}), [AccessDeniedException, InternalServerException, InvalidStateException, ServiceQuotaExceededException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details of a specific organization centralization rule. This operation can only be called by the organization's management account or a delegated administrator account.
 */export const getCentralizationRuleForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/GetCentralizationRuleForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.GetCentralizationRuleForOrganization" }, GetCentralizationRuleForOrganizationInput, GetCentralizationRuleForOrganizationOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a specific S3 Table integration, including its configuration, status, and metadata.
 */export const getS3TableIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/GetS3TableIntegration", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.GetS3TableIntegration" }, GetS3TableIntegrationInput, GetS3TableIntegrationOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details of a specific telemetry rule in your account.
 */export const getTelemetryRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/GetTelemetryRule", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.GetTelemetryRule" }, GetTelemetryRuleInput, GetTelemetryRuleOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details of a specific organization telemetry rule. This operation can only be called by the organization's management account or a delegated administrator account.
 */export const getTelemetryRuleForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/GetTelemetryRuleForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.GetTelemetryRuleForOrganization" }, GetTelemetryRuleForOrganizationInput, GetTelemetryRuleForOrganizationOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all telemetry rules in your organization. This operation can only be called by the organization's management account or a delegated administrator account.
 */export const listTelemetryRulesForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/ListTelemetryRulesForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.ListTelemetryRulesForOrganization" }, ListTelemetryRulesForOrganizationInput, ListTelemetryRulesForOrganizationOutput, [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables the resource tags for telemetry feature for your account, which enhances telemetry data with additional resource metadata from Resource Explorer to provide richer context for monitoring and observability.
 */export const startTelemetryEnrichment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/StartTelemetryEnrichment", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.StartTelemetryEnrichment" }, S.Struct({}), StartTelemetryEnrichmentOutput, [AccessDeniedException, ConflictException, InternalServerException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or updates tags for a resource. Supports telemetry rule resources and telemetry pipeline resources.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/TagResource", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.TagResource" }, TagResourceInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing centralization rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.
 */export const updateCentralizationRuleForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/UpdateCentralizationRuleForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.UpdateCentralizationRuleForOrganization" }, UpdateCentralizationRuleForOrganizationInput, UpdateCentralizationRuleForOrganizationOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing telemetry rule in your account. If multiple users attempt to modify the same telemetry rule simultaneously, a ConflictException is returned to provide specific error information for concurrent modification scenarios.
 */export const updateTelemetryRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/UpdateTelemetryRule", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.UpdateTelemetryRule" }, UpdateTelemetryRuleInput, UpdateTelemetryRuleOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing telemetry rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.
 */export const updateTelemetryRuleForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/UpdateTelemetryRuleForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.UpdateTelemetryRuleForOrganization" }, UpdateTelemetryRuleForOrganizationInput, UpdateTelemetryRuleForOrganizationOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Validates a pipeline configuration without creating the pipeline. This operation checks the configuration for syntax errors and compatibility issues.
 */export const validateTelemetryPipelineConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/ValidateTelemetryPipelineConfiguration", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.ValidateTelemetryPipelineConfiguration" }, ValidateTelemetryPipelineConfigurationInput, ValidateTelemetryPipelineConfigurationOutput, [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an integration between CloudWatch and S3 Tables for analytics. This integration enables querying CloudWatch telemetry data using analytics engines like Amazon Athena, Amazon Redshift, and Apache Spark.
 */export const createS3TableIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/CreateS3TableIntegration", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.CreateS3TableIntegration" }, CreateS3TableIntegrationInput, CreateS3TableIntegrationOutput, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all centralization rules in your organization. This operation can only be called by the organization's management account or a delegated administrator account.
 */export const listCentralizationRulesForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/ListCentralizationRulesForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.ListCentralizationRulesForOrganization" }, ListCentralizationRulesForOrganizationInput, ListCentralizationRulesForOrganizationOutput, [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of telemetry configurations for Amazon Web Services resources supported by telemetry config. For more information, see Auditing CloudWatch telemetry configurations.
 */export const listResourceTelemetry = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/ListResourceTelemetry", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.ListResourceTelemetry" }, ListResourceTelemetryInput, ListResourceTelemetryOutput, [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of telemetry configurations for Amazon Web Services resources supported by telemetry config in the organization.
 */export const listResourceTelemetryForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/ListResourceTelemetryForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.ListResourceTelemetryForOrganization" }, ListResourceTelemetryForOrganizationInput, ListResourceTelemetryForOrganizationOutput, [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all S3 Table integrations in your account. We recommend using pagination to ensure that the operation returns quickly and successfully.
 */export const listS3TableIntegrations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/ListS3TableIntegrations", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.ListS3TableIntegrations" }, ListS3TableIntegrationsInput, ListS3TableIntegrationsOutput, [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all tags attached to the specified resource. Supports telemetry rule resources and telemetry pipeline resources.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/ListTagsForResource", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all telemetry rules in your account. You can filter the results by specifying a rule name prefix.
 */export const listTelemetryRules = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/ListTelemetryRules", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.ListTelemetryRules" }, ListTelemetryRulesInput, ListTelemetryRulesOutput, [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This action offboards the Organization of the caller Amazon Web Services account from the telemetry config feature.
 */export const stopTelemetryEvaluationForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/StopTelemetryEvaluationForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.StopTelemetryEvaluationForOrganization" }, S.Struct({}), S.Struct({}), [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tests a pipeline configuration with sample records to validate data processing before deployment. This operation helps ensure your pipeline configuration works as expected.
 */export const testTelemetryPipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/TestTelemetryPipeline", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.TestTelemetryPipeline" }, TestTelemetryPipelineInput, TestTelemetryPipelineOutput, [AccessDeniedException, InternalServerException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a centralization rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.
 */export const createCentralizationRuleForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/CreateCentralizationRuleForOrganization", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.CreateCentralizationRuleForOrganization" }, CreateCentralizationRuleForOrganizationInput, CreateCentralizationRuleForOrganizationOutput, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a telemetry rule that defines how telemetry should be configured for Amazon Web Services resources in your account. The rule specifies which resources should have telemetry enabled and how that telemetry data should be collected based on resource type, telemetry type, and selection criteria.
 */export const createTelemetryRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/CreateTelemetryRule", sdkId: "ObservabilityAdmin", sigV4ServiceName: "observabilityadmin", name: "ObservabilityAdmin.CreateTelemetryRule" }, CreateTelemetryRuleInput, CreateTelemetryRuleOutput, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, TooManyRequestsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

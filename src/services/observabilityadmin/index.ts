import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ObservabilityAdmin extends AWSServiceClient {
  createTelemetryRule(
    input: CreateTelemetryRuleInput,
  ): Effect.Effect<
    CreateTelemetryRuleOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  createTelemetryRuleForOrganization(
    input: CreateTelemetryRuleForOrganizationInput,
  ): Effect.Effect<
    CreateTelemetryRuleForOrganizationOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  deleteTelemetryRule(
    input: DeleteTelemetryRuleInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  deleteTelemetryRuleForOrganization(
    input: DeleteTelemetryRuleForOrganizationInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getTelemetryEvaluationStatus(input: {}): Effect.Effect<
    GetTelemetryEvaluationStatusOutput,
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTelemetryEvaluationStatusForOrganization(input: {}): Effect.Effect<
    GetTelemetryEvaluationStatusForOrganizationOutput,
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getTelemetryRule(
    input: GetTelemetryRuleInput,
  ): Effect.Effect<
    GetTelemetryRuleOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getTelemetryRuleForOrganization(
    input: GetTelemetryRuleForOrganizationInput,
  ): Effect.Effect<
    GetTelemetryRuleForOrganizationOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listResourceTelemetry(
    input: ListResourceTelemetryInput,
  ): Effect.Effect<
    ListResourceTelemetryOutput,
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listResourceTelemetryForOrganization(
    input: ListResourceTelemetryForOrganizationInput,
  ): Effect.Effect<
    ListResourceTelemetryForOrganizationOutput,
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listTelemetryRules(
    input: ListTelemetryRulesInput,
  ): Effect.Effect<
    ListTelemetryRulesOutput,
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listTelemetryRulesForOrganization(
    input: ListTelemetryRulesForOrganizationInput,
  ): Effect.Effect<
    ListTelemetryRulesForOrganizationOutput,
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  startTelemetryEvaluation(input: {}): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  startTelemetryEvaluationForOrganization(input: {}): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  stopTelemetryEvaluation(input: {}): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  stopTelemetryEvaluationForOrganization(input: {}): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  updateTelemetryRule(
    input: UpdateTelemetryRuleInput,
  ): Effect.Effect<
    UpdateTelemetryRuleOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  updateTelemetryRuleForOrganization(
    input: UpdateTelemetryRuleForOrganizationInput,
  ): Effect.Effect<
    UpdateTelemetryRuleForOrganizationOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Observabilityadmin extends ObservabilityAdmin {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
  readonly amznErrorType?: string;
}> {}
export type AccountIdentifier = string;

export type AccountIdentifiers = Array<string>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateTelemetryRuleForOrganizationInput {
  RuleName: string;
  Rule: TelemetryRule;
  Tags?: Record<string, string>;
}
export interface CreateTelemetryRuleForOrganizationOutput {
  RuleArn?: string;
}
export interface CreateTelemetryRuleInput {
  RuleName: string;
  Rule: TelemetryRule;
  Tags?: Record<string, string>;
}
export interface CreateTelemetryRuleOutput {
  RuleArn?: string;
}
export interface DeleteTelemetryRuleForOrganizationInput {
  RuleIdentifier: string;
}
export interface DeleteTelemetryRuleInput {
  RuleIdentifier: string;
}
export type DestinationType = "cloud-watch-logs";
export type FailureReason = string;

export interface GetTelemetryEvaluationStatusForOrganizationOutput {
  Status?: Status;
  FailureReason?: string;
}
export interface GetTelemetryEvaluationStatusOutput {
  Status?: Status;
  FailureReason?: string;
}
export interface GetTelemetryRuleForOrganizationInput {
  RuleIdentifier: string;
}
export interface GetTelemetryRuleForOrganizationOutput {
  RuleName?: string;
  RuleArn?: string;
  CreatedTimeStamp?: number;
  LastUpdateTimeStamp?: number;
  TelemetryRule?: TelemetryRule;
}
export interface GetTelemetryRuleInput {
  RuleIdentifier: string;
}
export interface GetTelemetryRuleOutput {
  RuleName?: string;
  RuleArn?: string;
  CreatedTimeStamp?: number;
  LastUpdateTimeStamp?: number;
  TelemetryRule?: TelemetryRule;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
  readonly amznErrorType?: string;
}> {}
export interface ListResourceTelemetryForOrganizationInput {
  AccountIdentifiers?: Array<string>;
  ResourceIdentifierPrefix?: string;
  ResourceTypes?: Array<ResourceType>;
  TelemetryConfigurationState?: Record<TelemetryType, TelemetryState>;
  ResourceTags?: Record<string, string>;
  MaxResults?: number;
  NextToken?: string;
}
export type ListResourceTelemetryForOrganizationMaxResults = number;

export interface ListResourceTelemetryForOrganizationOutput {
  TelemetryConfigurations?: Array<TelemetryConfiguration>;
  NextToken?: string;
}
export interface ListResourceTelemetryInput {
  ResourceIdentifierPrefix?: string;
  ResourceTypes?: Array<ResourceType>;
  TelemetryConfigurationState?: Record<TelemetryType, TelemetryState>;
  ResourceTags?: Record<string, string>;
  MaxResults?: number;
  NextToken?: string;
}
export type ListResourceTelemetryMaxResults = number;

export interface ListResourceTelemetryOutput {
  TelemetryConfigurations?: Array<TelemetryConfiguration>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  ResourceARN: string;
}
export interface ListTagsForResourceOutput {
  Tags: Record<string, string>;
}
export interface ListTelemetryRulesForOrganizationInput {
  RuleNamePrefix?: string;
  SourceAccountIds?: Array<string>;
  SourceOrganizationUnitIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export type ListTelemetryRulesForOrganizationMaxResults = number;

export interface ListTelemetryRulesForOrganizationOutput {
  TelemetryRuleSummaries?: Array<TelemetryRuleSummary>;
  NextToken?: string;
}
export interface ListTelemetryRulesInput {
  RuleNamePrefix?: string;
  MaxResults?: number;
  NextToken?: string;
}
export type ListTelemetryRulesMaxResults = number;

export interface ListTelemetryRulesOutput {
  TelemetryRuleSummaries?: Array<TelemetryRuleSummary>;
  NextToken?: string;
}
export type NextToken = string;

export type OrganizationUnitIdentifier = string;

export type OrganizationUnitIdentifiers = Array<string>;
export type ResourceArn = string;

export type ResourceIdentifier = string;

export type ResourceIdentifierPrefix = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourceType =
  | "AWS::EC2::Instance"
  | "AWS::EC2::VPC"
  | "AWS::Lambda::Function";
export type ResourceTypes = Array<ResourceType>;
export type RetentionPeriodInDays = number;

export type RuleIdentifier = string;

export type RuleName = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
  readonly amznErrorType?: string;
}> {}
export type Status =
  | "NOT_STARTED"
  | "STARTING"
  | "FAILED_START"
  | "RUNNING"
  | "STOPPING"
  | "FAILED_STOP"
  | "STOPPED";
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMapInput = Record<string, string>;
export type TagMapOutput = Record<string, string>;
export interface TagResourceInput {
  ResourceARN: string;
  Tags: Record<string, string>;
}
export type TagValue = string;

export interface TelemetryConfiguration {
  AccountIdentifier?: string;
  TelemetryConfigurationState?: Record<TelemetryType, TelemetryState>;
  ResourceType?: ResourceType;
  ResourceIdentifier?: string;
  ResourceTags?: Record<string, string>;
  LastUpdateTimeStamp?: number;
}
export type TelemetryConfigurations = Array<TelemetryConfiguration>;
export type TelemetryConfigurationState = Record<TelemetryType, TelemetryState>;
export interface TelemetryDestinationConfiguration {
  DestinationType?: DestinationType;
  DestinationPattern?: string;
  RetentionInDays?: number;
  VPCFlowLogParameters?: VPCFlowLogParameters;
}
export interface TelemetryRule {
  ResourceType?: ResourceType;
  TelemetryType: TelemetryType;
  DestinationConfiguration?: TelemetryDestinationConfiguration;
  Scope?: string;
  SelectionCriteria?: string;
}
export type TelemetryRuleSummaries = Array<TelemetryRuleSummary>;
export interface TelemetryRuleSummary {
  RuleName?: string;
  RuleArn?: string;
  CreatedTimeStamp?: number;
  LastUpdateTimeStamp?: number;
  ResourceType?: ResourceType;
  TelemetryType?: TelemetryType;
}
export type TelemetryState = "Enabled" | "Disabled" | "NotApplicable";
export type TelemetryType = "Logs" | "Metrics" | "Traces";
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceInput {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UpdateTelemetryRuleForOrganizationInput {
  RuleIdentifier: string;
  Rule: TelemetryRule;
}
export interface UpdateTelemetryRuleForOrganizationOutput {
  RuleArn?: string;
}
export interface UpdateTelemetryRuleInput {
  RuleIdentifier: string;
  Rule: TelemetryRule;
}
export interface UpdateTelemetryRuleOutput {
  RuleArn?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export interface VPCFlowLogParameters {
  LogFormat?: string;
  TrafficType?: string;
  MaxAggregationInterval?: number;
}
export declare namespace CreateTelemetryRule {
  export type Input = CreateTelemetryRuleInput;
  export type Output = CreateTelemetryRuleOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTelemetryRuleForOrganization {
  export type Input = CreateTelemetryRuleForOrganizationInput;
  export type Output = CreateTelemetryRuleForOrganizationOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTelemetryRule {
  export type Input = DeleteTelemetryRuleInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTelemetryRuleForOrganization {
  export type Input = DeleteTelemetryRuleForOrganizationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTelemetryEvaluationStatus {
  export type Input = {};
  export type Output = GetTelemetryEvaluationStatusOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTelemetryEvaluationStatusForOrganization {
  export type Input = {};
  export type Output = GetTelemetryEvaluationStatusForOrganizationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTelemetryRule {
  export type Input = GetTelemetryRuleInput;
  export type Output = GetTelemetryRuleOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTelemetryRuleForOrganization {
  export type Input = GetTelemetryRuleForOrganizationInput;
  export type Output = GetTelemetryRuleForOrganizationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceTelemetry {
  export type Input = ListResourceTelemetryInput;
  export type Output = ListResourceTelemetryOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceTelemetryForOrganization {
  export type Input = ListResourceTelemetryForOrganizationInput;
  export type Output = ListResourceTelemetryForOrganizationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTelemetryRules {
  export type Input = ListTelemetryRulesInput;
  export type Output = ListTelemetryRulesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTelemetryRulesForOrganization {
  export type Input = ListTelemetryRulesForOrganizationInput;
  export type Output = ListTelemetryRulesForOrganizationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartTelemetryEvaluation {
  export type Input = {};
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartTelemetryEvaluationForOrganization {
  export type Input = {};
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopTelemetryEvaluation {
  export type Input = {};
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopTelemetryEvaluationForOrganization {
  export type Input = {};
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTelemetryRule {
  export type Input = UpdateTelemetryRuleInput;
  export type Output = UpdateTelemetryRuleOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTelemetryRuleForOrganization {
  export type Input = UpdateTelemetryRuleForOrganizationInput;
  export type Output = UpdateTelemetryRuleForOrganizationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

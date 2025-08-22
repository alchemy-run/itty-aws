import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class TrustedAdvisor extends AWSServiceClient {
  batchUpdateRecommendationResourceExclusion(
    input: BatchUpdateRecommendationResourceExclusionRequest,
  ): Effect.Effect<
    BatchUpdateRecommendationResourceExclusionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getOrganizationRecommendation(
    input: GetOrganizationRecommendationRequest,
  ): Effect.Effect<
    GetOrganizationRecommendationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRecommendation(
    input: GetRecommendationRequest,
  ): Effect.Effect<
    GetRecommendationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listChecks(
    input: ListChecksRequest,
  ): Effect.Effect<
    ListChecksResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listOrganizationRecommendationAccounts(
    input: ListOrganizationRecommendationAccountsRequest,
  ): Effect.Effect<
    ListOrganizationRecommendationAccountsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listOrganizationRecommendationResources(
    input: ListOrganizationRecommendationResourcesRequest,
  ): Effect.Effect<
    ListOrganizationRecommendationResourcesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listOrganizationRecommendations(
    input: ListOrganizationRecommendationsRequest,
  ): Effect.Effect<
    ListOrganizationRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRecommendationResources(
    input: ListRecommendationResourcesRequest,
  ): Effect.Effect<
    ListRecommendationResourcesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRecommendations(
    input: ListRecommendationsRequest,
  ): Effect.Effect<
    ListRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateOrganizationRecommendationLifecycle(
    input: UpdateOrganizationRecommendationLifecycleRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateRecommendationLifecycle(
    input: UpdateRecommendationLifecycleRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Trustedadvisor extends TrustedAdvisor {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccountId = string;

export type AccountRecommendationArn = string;

export type AccountRecommendationIdentifier = string;

export interface AccountRecommendationLifecycleSummary {
  accountId?: string;
  accountRecommendationArn?: string;
  lifecycleStage?: RecommendationLifecycleStage;
  updatedOnBehalfOf?: string;
  updatedOnBehalfOfJobTitle?: string;
  updateReason?: string;
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;
  lastUpdatedAt?: Date | string;
}
export type AccountRecommendationLifecycleSummaryList =
  Array<AccountRecommendationLifecycleSummary>;
export interface BatchUpdateRecommendationResourceExclusionRequest {
  recommendationResourceExclusions: Array<RecommendationResourceExclusion>;
}
export interface BatchUpdateRecommendationResourceExclusionResponse {
  batchUpdateRecommendationResourceExclusionErrors: Array<UpdateRecommendationResourceExclusionError>;
}
export type CheckArn = string;

export type CheckIdentifier = string;

export interface CheckSummary {
  id: string;
  arn: string;
  name: string;
  description: string;
  pillars: Array<RecommendationPillar>;
  awsServices: Array<string>;
  source: RecommendationSource;
  metadata: Record<string, string>;
}
export type CheckSummaryList = Array<CheckSummary>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export type ExclusionStatus = "excluded" | "included";
export interface GetOrganizationRecommendationRequest {
  organizationRecommendationIdentifier: string;
}
export interface GetOrganizationRecommendationResponse {
  organizationRecommendation?: OrganizationRecommendation;
}
export interface GetRecommendationRequest {
  recommendationIdentifier: string;
}
export interface GetRecommendationResponse {
  recommendation?: Recommendation;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface ListChecksRequest {
  nextToken?: string;
  maxResults?: number;
  pillar?: RecommendationPillar;
  awsService?: string;
  source?: RecommendationSource;
  language?: RecommendationLanguage;
}
export interface ListChecksResponse {
  nextToken?: string;
  checkSummaries: Array<CheckSummary>;
}
export interface ListOrganizationRecommendationAccountsRequest {
  nextToken?: string;
  maxResults?: number;
  organizationRecommendationIdentifier: string;
  affectedAccountId?: string;
}
export interface ListOrganizationRecommendationAccountsResponse {
  nextToken?: string;
  accountRecommendationLifecycleSummaries: Array<AccountRecommendationLifecycleSummary>;
}
export interface ListOrganizationRecommendationResourcesRequest {
  nextToken?: string;
  maxResults?: number;
  status?: ResourceStatus;
  exclusionStatus?: ExclusionStatus;
  regionCode?: string;
  organizationRecommendationIdentifier: string;
  affectedAccountId?: string;
}
export interface ListOrganizationRecommendationResourcesResponse {
  nextToken?: string;
  organizationRecommendationResourceSummaries: Array<OrganizationRecommendationResourceSummary>;
}
export interface ListOrganizationRecommendationsRequest {
  nextToken?: string;
  maxResults?: number;
  type?: RecommendationType;
  status?: RecommendationStatus;
  pillar?: RecommendationPillar;
  awsService?: string;
  source?: RecommendationSource;
  checkIdentifier?: string;
  afterLastUpdatedAt?: Date | string;
  beforeLastUpdatedAt?: Date | string;
}
export interface ListOrganizationRecommendationsResponse {
  nextToken?: string;
  organizationRecommendationSummaries: Array<OrganizationRecommendationSummary>;
}
export interface ListRecommendationResourcesRequest {
  nextToken?: string;
  maxResults?: number;
  status?: ResourceStatus;
  exclusionStatus?: ExclusionStatus;
  regionCode?: string;
  recommendationIdentifier: string;
}
export interface ListRecommendationResourcesResponse {
  nextToken?: string;
  recommendationResourceSummaries: Array<RecommendationResourceSummary>;
}
export interface ListRecommendationsRequest {
  nextToken?: string;
  maxResults?: number;
  type?: RecommendationType;
  status?: RecommendationStatus;
  pillar?: RecommendationPillar;
  awsService?: string;
  source?: RecommendationSource;
  checkIdentifier?: string;
  afterLastUpdatedAt?: Date | string;
  beforeLastUpdatedAt?: Date | string;
}
export interface ListRecommendationsResponse {
  nextToken?: string;
  recommendationSummaries: Array<RecommendationSummary>;
}
export interface OrganizationRecommendation {
  id: string;
  type: RecommendationType;
  checkArn?: string;
  status: RecommendationStatus;
  lifecycleStage?: RecommendationLifecycleStage;
  pillars: Array<RecommendationPillar>;
  source: RecommendationSource;
  awsServices?: Array<string>;
  name: string;
  resourcesAggregates: RecommendationResourcesAggregates;
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  arn: string;
  description: string;
  createdBy?: string;
  updatedOnBehalfOf?: string;
  updatedOnBehalfOfJobTitle?: string;
  updateReason?: string;
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;
  resolvedAt?: Date | string;
}
export type OrganizationRecommendationArn = string;

export type OrganizationRecommendationIdentifier = string;

export interface OrganizationRecommendationResourceSummary {
  id: string;
  arn: string;
  awsResourceId: string;
  regionCode: string;
  status: ResourceStatus;
  metadata: Record<string, string>;
  lastUpdatedAt: Date | string;
  exclusionStatus?: ExclusionStatus;
  accountId?: string;
  recommendationArn: string;
}
export type OrganizationRecommendationResourceSummaryList =
  Array<OrganizationRecommendationResourceSummary>;
export interface OrganizationRecommendationSummary {
  id: string;
  type: RecommendationType;
  checkArn?: string;
  status: RecommendationStatus;
  lifecycleStage?: RecommendationLifecycleStage;
  pillars: Array<RecommendationPillar>;
  source: RecommendationSource;
  awsServices?: Array<string>;
  name: string;
  resourcesAggregates: RecommendationResourcesAggregates;
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  arn: string;
}
export type OrganizationRecommendationSummaryList =
  Array<OrganizationRecommendationSummary>;
export interface Recommendation {
  id: string;
  type: RecommendationType;
  checkArn?: string;
  status: RecommendationStatus;
  lifecycleStage?: RecommendationLifecycleStage;
  pillars: Array<RecommendationPillar>;
  source: RecommendationSource;
  awsServices?: Array<string>;
  name: string;
  resourcesAggregates: RecommendationResourcesAggregates;
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  arn: string;
  description: string;
  createdBy?: string;
  updatedOnBehalfOf?: string;
  updatedOnBehalfOfJobTitle?: string;
  updateReason?: string;
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;
  resolvedAt?: Date | string;
}
export type RecommendationAwsService = string;

export type RecommendationAwsServiceList = Array<string>;
export interface RecommendationCostOptimizingAggregates {
  estimatedMonthlySavings: number;
  estimatedPercentMonthlySavings: number;
}
export type RecommendationLanguage =
  | "en"
  | "ja"
  | "zh"
  | "fr"
  | "de"
  | "ko"
  | "zh_TW"
  | "it"
  | "es"
  | "pt_BR"
  | "id";
export type RecommendationLifecycleStage =
  | "in_progress"
  | "pending_response"
  | "dismissed"
  | "resolved";
export type RecommendationPillar =
  | "cost_optimizing"
  | "performance"
  | "security"
  | "service_limits"
  | "fault_tolerance"
  | "operational_excellence";
export type RecommendationPillarList = Array<RecommendationPillar>;
export interface RecommendationPillarSpecificAggregates {
  costOptimizing?: RecommendationCostOptimizingAggregates;
}
export type RecommendationRegionCode = string;

export type RecommendationResourceArn = string;

export interface RecommendationResourceExclusion {
  arn: string;
  isExcluded: boolean;
}
export type RecommendationResourceExclusionList =
  Array<RecommendationResourceExclusion>;
export interface RecommendationResourcesAggregates {
  okCount: number;
  warningCount: number;
  errorCount: number;
}
export interface RecommendationResourceSummary {
  id: string;
  arn: string;
  awsResourceId: string;
  regionCode: string;
  status: ResourceStatus;
  metadata: Record<string, string>;
  lastUpdatedAt: Date | string;
  exclusionStatus?: ExclusionStatus;
  recommendationArn: string;
}
export type RecommendationResourceSummaryList =
  Array<RecommendationResourceSummary>;
export type RecommendationSource =
  | "aws_config"
  | "compute_optimizer"
  | "cost_explorer"
  | "lse"
  | "manual"
  | "pse"
  | "rds"
  | "resilience"
  | "resilience_hub"
  | "security_hub"
  | "stir"
  | "ta_check"
  | "well_architected";
export type RecommendationStatus = "ok" | "warning" | "error";
export interface RecommendationSummary {
  id: string;
  type: RecommendationType;
  checkArn?: string;
  status: RecommendationStatus;
  lifecycleStage?: RecommendationLifecycleStage;
  pillars: Array<RecommendationPillar>;
  source: RecommendationSource;
  awsServices?: Array<string>;
  name: string;
  resourcesAggregates: RecommendationResourcesAggregates;
  pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  arn: string;
}
export type RecommendationSummaryList = Array<RecommendationSummary>;
export type RecommendationType = "standard" | "priority";
export type RecommendationUpdateReason = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type ResourceStatus = "ok" | "warning" | "error";
export type StringMap = Record<string, string>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface UpdateOrganizationRecommendationLifecycleRequest {
  lifecycleStage: UpdateRecommendationLifecycleStage;
  updateReason?: string;
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;
  organizationRecommendationIdentifier: string;
}
export interface UpdateRecommendationLifecycleRequest {
  lifecycleStage: UpdateRecommendationLifecycleStage;
  updateReason?: string;
  updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;
  recommendationIdentifier: string;
}
export type UpdateRecommendationLifecycleStage =
  | "pending_response"
  | "in_progress"
  | "dismissed"
  | "resolved";
export type UpdateRecommendationLifecycleStageReasonCode =
  | "non_critical_account"
  | "temporary_account"
  | "valid_business_case"
  | "other_methods_available"
  | "low_priority"
  | "not_applicable"
  | "other";
export interface UpdateRecommendationResourceExclusionError {
  arn?: string;
  errorCode?: string;
  errorMessage?: string;
}
export type UpdateRecommendationResourceExclusionErrorList =
  Array<UpdateRecommendationResourceExclusionError>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export declare namespace BatchUpdateRecommendationResourceExclusion {
  export type Input = BatchUpdateRecommendationResourceExclusionRequest;
  export type Output = BatchUpdateRecommendationResourceExclusionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOrganizationRecommendation {
  export type Input = GetOrganizationRecommendationRequest;
  export type Output = GetOrganizationRecommendationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRecommendation {
  export type Input = GetRecommendationRequest;
  export type Output = GetRecommendationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListChecks {
  export type Input = ListChecksRequest;
  export type Output = ListChecksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOrganizationRecommendationAccounts {
  export type Input = ListOrganizationRecommendationAccountsRequest;
  export type Output = ListOrganizationRecommendationAccountsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOrganizationRecommendationResources {
  export type Input = ListOrganizationRecommendationResourcesRequest;
  export type Output = ListOrganizationRecommendationResourcesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOrganizationRecommendations {
  export type Input = ListOrganizationRecommendationsRequest;
  export type Output = ListOrganizationRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRecommendationResources {
  export type Input = ListRecommendationResourcesRequest;
  export type Output = ListRecommendationResourcesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRecommendations {
  export type Input = ListRecommendationsRequest;
  export type Output = ListRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOrganizationRecommendationLifecycle {
  export type Input = UpdateOrganizationRecommendationLifecycleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRecommendationLifecycle {
  export type Input = UpdateRecommendationLifecycleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

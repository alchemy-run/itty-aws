import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class BCMPricingCalculator extends AWSServiceClient {
  getPreferences(
    input: GetPreferencesRequest,
  ): Effect.Effect<
    GetPreferencesResponse,
    DataUnavailableException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    ResourceNotFoundException | ServiceQuotaExceededException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  updatePreferences(
    input: UpdatePreferencesRequest,
  ): Effect.Effect<
    UpdatePreferencesResponse,
    DataUnavailableException | ServiceQuotaExceededException | CommonAwsError
  >;
  batchCreateBillScenarioCommitmentModification(
    input: BatchCreateBillScenarioCommitmentModificationRequest,
  ): Effect.Effect<
    BatchCreateBillScenarioCommitmentModificationResponse,
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  batchCreateBillScenarioUsageModification(
    input: BatchCreateBillScenarioUsageModificationRequest,
  ): Effect.Effect<
    BatchCreateBillScenarioUsageModificationResponse,
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  batchCreateWorkloadEstimateUsage(
    input: BatchCreateWorkloadEstimateUsageRequest,
  ): Effect.Effect<
    BatchCreateWorkloadEstimateUsageResponse,
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  batchDeleteBillScenarioCommitmentModification(
    input: BatchDeleteBillScenarioCommitmentModificationRequest,
  ): Effect.Effect<
    BatchDeleteBillScenarioCommitmentModificationResponse,
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  batchDeleteBillScenarioUsageModification(
    input: BatchDeleteBillScenarioUsageModificationRequest,
  ): Effect.Effect<
    BatchDeleteBillScenarioUsageModificationResponse,
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  batchDeleteWorkloadEstimateUsage(
    input: BatchDeleteWorkloadEstimateUsageRequest,
  ): Effect.Effect<
    BatchDeleteWorkloadEstimateUsageResponse,
    | DataUnavailableException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  batchUpdateBillScenarioCommitmentModification(
    input: BatchUpdateBillScenarioCommitmentModificationRequest,
  ): Effect.Effect<
    BatchUpdateBillScenarioCommitmentModificationResponse,
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  batchUpdateBillScenarioUsageModification(
    input: BatchUpdateBillScenarioUsageModificationRequest,
  ): Effect.Effect<
    BatchUpdateBillScenarioUsageModificationResponse,
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  batchUpdateWorkloadEstimateUsage(
    input: BatchUpdateWorkloadEstimateUsageRequest,
  ): Effect.Effect<
    BatchUpdateWorkloadEstimateUsageResponse,
    | DataUnavailableException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createBillEstimate(
    input: CreateBillEstimateRequest,
  ): Effect.Effect<
    CreateBillEstimateResponse,
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createBillScenario(
    input: CreateBillScenarioRequest,
  ): Effect.Effect<
    CreateBillScenarioResponse,
    | ConflictException
    | DataUnavailableException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createWorkloadEstimate(
    input: CreateWorkloadEstimateRequest,
  ): Effect.Effect<
    CreateWorkloadEstimateResponse,
    | ConflictException
    | DataUnavailableException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  deleteBillEstimate(
    input: DeleteBillEstimateRequest,
  ): Effect.Effect<
    DeleteBillEstimateResponse,
    ConflictException | DataUnavailableException | CommonAwsError
  >;
  deleteBillScenario(
    input: DeleteBillScenarioRequest,
  ): Effect.Effect<
    DeleteBillScenarioResponse,
    ConflictException | DataUnavailableException | CommonAwsError
  >;
  deleteWorkloadEstimate(
    input: DeleteWorkloadEstimateRequest,
  ): Effect.Effect<
    DeleteWorkloadEstimateResponse,
    DataUnavailableException | CommonAwsError
  >;
  getBillEstimate(
    input: GetBillEstimateRequest,
  ): Effect.Effect<
    GetBillEstimateResponse,
    DataUnavailableException | ResourceNotFoundException | CommonAwsError
  >;
  getBillScenario(
    input: GetBillScenarioRequest,
  ): Effect.Effect<
    GetBillScenarioResponse,
    DataUnavailableException | ResourceNotFoundException | CommonAwsError
  >;
  getWorkloadEstimate(
    input: GetWorkloadEstimateRequest,
  ): Effect.Effect<
    GetWorkloadEstimateResponse,
    DataUnavailableException | ResourceNotFoundException | CommonAwsError
  >;
  listBillEstimateCommitments(
    input: ListBillEstimateCommitmentsRequest,
  ): Effect.Effect<
    ListBillEstimateCommitmentsResponse,
    DataUnavailableException | ResourceNotFoundException | CommonAwsError
  >;
  listBillEstimateInputCommitmentModifications(
    input: ListBillEstimateInputCommitmentModificationsRequest,
  ): Effect.Effect<
    ListBillEstimateInputCommitmentModificationsResponse,
    DataUnavailableException | ResourceNotFoundException | CommonAwsError
  >;
  listBillEstimateInputUsageModifications(
    input: ListBillEstimateInputUsageModificationsRequest,
  ): Effect.Effect<
    ListBillEstimateInputUsageModificationsResponse,
    DataUnavailableException | ResourceNotFoundException | CommonAwsError
  >;
  listBillEstimateLineItems(
    input: ListBillEstimateLineItemsRequest,
  ): Effect.Effect<
    ListBillEstimateLineItemsResponse,
    DataUnavailableException | ResourceNotFoundException | CommonAwsError
  >;
  listBillEstimates(
    input: ListBillEstimatesRequest,
  ): Effect.Effect<
    ListBillEstimatesResponse,
    DataUnavailableException | CommonAwsError
  >;
  listBillScenarioCommitmentModifications(
    input: ListBillScenarioCommitmentModificationsRequest,
  ): Effect.Effect<
    ListBillScenarioCommitmentModificationsResponse,
    DataUnavailableException | ResourceNotFoundException | CommonAwsError
  >;
  listBillScenarioUsageModifications(
    input: ListBillScenarioUsageModificationsRequest,
  ): Effect.Effect<
    ListBillScenarioUsageModificationsResponse,
    DataUnavailableException | ResourceNotFoundException | CommonAwsError
  >;
  listBillScenarios(
    input: ListBillScenariosRequest,
  ): Effect.Effect<
    ListBillScenariosResponse,
    DataUnavailableException | CommonAwsError
  >;
  listWorkloadEstimateUsage(
    input: ListWorkloadEstimateUsageRequest,
  ): Effect.Effect<
    ListWorkloadEstimateUsageResponse,
    DataUnavailableException | ResourceNotFoundException | CommonAwsError
  >;
  listWorkloadEstimates(
    input: ListWorkloadEstimatesRequest,
  ): Effect.Effect<
    ListWorkloadEstimatesResponse,
    DataUnavailableException | CommonAwsError
  >;
  updateBillEstimate(
    input: UpdateBillEstimateRequest,
  ): Effect.Effect<
    UpdateBillEstimateResponse,
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateBillScenario(
    input: UpdateBillScenarioRequest,
  ): Effect.Effect<
    UpdateBillScenarioResponse,
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateWorkloadEstimate(
    input: UpdateWorkloadEstimateRequest,
  ): Effect.Effect<
    UpdateWorkloadEstimateResponse,
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export declare class BcmPricingCalculator extends BCMPricingCalculator {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccountId = string;

export interface AddReservedInstanceAction {
  reservedInstancesOfferingId?: string;
  instanceCount?: number;
}
export interface AddSavingsPlanAction {
  savingsPlanOfferingId?: string;
  commitment?: number;
}
export type Arn = string;

export type AvailabilityZone = string;

export type BatchCreateBillScenarioCommitmentModificationEntries =
  Array<BatchCreateBillScenarioCommitmentModificationEntry>;
export interface BatchCreateBillScenarioCommitmentModificationEntry {
  key: string;
  group?: string;
  usageAccountId: string;
  commitmentAction: BillScenarioCommitmentModificationAction;
}
export interface BatchCreateBillScenarioCommitmentModificationError {
  key?: string;
  errorMessage?: string;
  errorCode?: BatchCreateBillScenarioCommitmentModificationErrorCode;
}
export type BatchCreateBillScenarioCommitmentModificationErrorCode =
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | "INVALID_ACCOUNT";
export type BatchCreateBillScenarioCommitmentModificationErrors =
  Array<BatchCreateBillScenarioCommitmentModificationError>;
export interface BatchCreateBillScenarioCommitmentModificationItem {
  key?: string;
  id?: string;
  group?: string;
  usageAccountId?: string;
  commitmentAction?: BillScenarioCommitmentModificationAction;
}
export type BatchCreateBillScenarioCommitmentModificationItems =
  Array<BatchCreateBillScenarioCommitmentModificationItem>;
export interface BatchCreateBillScenarioCommitmentModificationRequest {
  billScenarioId: string;
  commitmentModifications: Array<BatchCreateBillScenarioCommitmentModificationEntry>;
  clientToken?: string;
}
export interface BatchCreateBillScenarioCommitmentModificationResponse {
  items?: Array<BatchCreateBillScenarioCommitmentModificationItem>;
  errors?: Array<BatchCreateBillScenarioCommitmentModificationError>;
}
export type BatchCreateBillScenarioUsageModificationEntries =
  Array<BatchCreateBillScenarioUsageModificationEntry>;
export interface BatchCreateBillScenarioUsageModificationEntry {
  serviceCode: string;
  usageType: string;
  operation: string;
  availabilityZone?: string;
  key: string;
  group?: string;
  usageAccountId: string;
  amounts?: Array<UsageAmount>;
  historicalUsage?: HistoricalUsageEntity;
}
export interface BatchCreateBillScenarioUsageModificationError {
  key?: string;
  errorMessage?: string;
  errorCode?: BatchCreateBillScenarioUsageModificationErrorCode;
}
export type BatchCreateBillScenarioUsageModificationErrorCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR";
export type BatchCreateBillScenarioUsageModificationErrors =
  Array<BatchCreateBillScenarioUsageModificationError>;
export interface BatchCreateBillScenarioUsageModificationItem {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  availabilityZone?: string;
  id?: string;
  group?: string;
  usageAccountId?: string;
  quantities?: Array<UsageQuantity>;
  historicalUsage?: HistoricalUsageEntity;
  key?: string;
}
export type BatchCreateBillScenarioUsageModificationItems =
  Array<BatchCreateBillScenarioUsageModificationItem>;
export interface BatchCreateBillScenarioUsageModificationRequest {
  billScenarioId: string;
  usageModifications: Array<BatchCreateBillScenarioUsageModificationEntry>;
  clientToken?: string;
}
export interface BatchCreateBillScenarioUsageModificationResponse {
  items?: Array<BatchCreateBillScenarioUsageModificationItem>;
  errors?: Array<BatchCreateBillScenarioUsageModificationError>;
}
export type BatchCreateWorkloadEstimateUsageCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR";
export type BatchCreateWorkloadEstimateUsageEntries =
  Array<BatchCreateWorkloadEstimateUsageEntry>;
export interface BatchCreateWorkloadEstimateUsageEntry {
  serviceCode: string;
  usageType: string;
  operation: string;
  key: string;
  group?: string;
  usageAccountId: string;
  amount: number;
  historicalUsage?: HistoricalUsageEntity;
}
export interface BatchCreateWorkloadEstimateUsageError {
  key?: string;
  errorCode?: BatchCreateWorkloadEstimateUsageCode;
  errorMessage?: string;
}
export type BatchCreateWorkloadEstimateUsageErrors =
  Array<BatchCreateWorkloadEstimateUsageError>;
export interface BatchCreateWorkloadEstimateUsageItem {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  id?: string;
  usageAccountId?: string;
  group?: string;
  quantity?: WorkloadEstimateUsageQuantity;
  cost?: number;
  currency?: CurrencyCode;
  status?: WorkloadEstimateCostStatus;
  historicalUsage?: HistoricalUsageEntity;
  key?: string;
}
export type BatchCreateWorkloadEstimateUsageItems =
  Array<BatchCreateWorkloadEstimateUsageItem>;
export interface BatchCreateWorkloadEstimateUsageRequest {
  workloadEstimateId: string;
  usage: Array<BatchCreateWorkloadEstimateUsageEntry>;
  clientToken?: string;
}
export interface BatchCreateWorkloadEstimateUsageResponse {
  items?: Array<BatchCreateWorkloadEstimateUsageItem>;
  errors?: Array<BatchCreateWorkloadEstimateUsageError>;
}
export type BatchDeleteBillScenarioCommitmentModificationEntries =
  Array<string>;
export interface BatchDeleteBillScenarioCommitmentModificationError {
  id?: string;
  errorCode?: BatchDeleteBillScenarioCommitmentModificationErrorCode;
  errorMessage?: string;
}
export type BatchDeleteBillScenarioCommitmentModificationErrorCode =
  | "BAD_REQUEST"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR";
export type BatchDeleteBillScenarioCommitmentModificationErrors =
  Array<BatchDeleteBillScenarioCommitmentModificationError>;
export interface BatchDeleteBillScenarioCommitmentModificationRequest {
  billScenarioId: string;
  ids: Array<string>;
}
export interface BatchDeleteBillScenarioCommitmentModificationResponse {
  errors?: Array<BatchDeleteBillScenarioCommitmentModificationError>;
}
export type BatchDeleteBillScenarioUsageModificationEntries = Array<string>;
export interface BatchDeleteBillScenarioUsageModificationError {
  id?: string;
  errorMessage?: string;
  errorCode?: BatchDeleteBillScenarioUsageModificationErrorCode;
}
export type BatchDeleteBillScenarioUsageModificationErrorCode =
  | "BAD_REQUEST"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR";
export type BatchDeleteBillScenarioUsageModificationErrors =
  Array<BatchDeleteBillScenarioUsageModificationError>;
export interface BatchDeleteBillScenarioUsageModificationRequest {
  billScenarioId: string;
  ids: Array<string>;
}
export interface BatchDeleteBillScenarioUsageModificationResponse {
  errors?: Array<BatchDeleteBillScenarioUsageModificationError>;
}
export type BatchDeleteWorkloadEstimateUsageEntries = Array<string>;
export interface BatchDeleteWorkloadEstimateUsageError {
  id?: string;
  errorMessage?: string;
  errorCode?: WorkloadEstimateUpdateUsageErrorCode;
}
export type BatchDeleteWorkloadEstimateUsageErrors =
  Array<BatchDeleteWorkloadEstimateUsageError>;
export interface BatchDeleteWorkloadEstimateUsageRequest {
  workloadEstimateId: string;
  ids: Array<string>;
}
export interface BatchDeleteWorkloadEstimateUsageResponse {
  errors?: Array<BatchDeleteWorkloadEstimateUsageError>;
}
export type BatchUpdateBillScenarioCommitmentModificationEntries =
  Array<BatchUpdateBillScenarioCommitmentModificationEntry>;
export interface BatchUpdateBillScenarioCommitmentModificationEntry {
  id: string;
  group?: string;
}
export interface BatchUpdateBillScenarioCommitmentModificationError {
  id?: string;
  errorCode?: BatchUpdateBillScenarioCommitmentModificationErrorCode;
  errorMessage?: string;
}
export type BatchUpdateBillScenarioCommitmentModificationErrorCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR";
export type BatchUpdateBillScenarioCommitmentModificationErrors =
  Array<BatchUpdateBillScenarioCommitmentModificationError>;
export interface BatchUpdateBillScenarioCommitmentModificationRequest {
  billScenarioId: string;
  commitmentModifications: Array<BatchUpdateBillScenarioCommitmentModificationEntry>;
}
export interface BatchUpdateBillScenarioCommitmentModificationResponse {
  items?: Array<BillScenarioCommitmentModificationItem>;
  errors?: Array<BatchUpdateBillScenarioCommitmentModificationError>;
}
export type BatchUpdateBillScenarioUsageModificationEntries =
  Array<BatchUpdateBillScenarioUsageModificationEntry>;
export interface BatchUpdateBillScenarioUsageModificationEntry {
  id: string;
  group?: string;
  amounts?: Array<UsageAmount>;
}
export interface BatchUpdateBillScenarioUsageModificationError {
  id?: string;
  errorMessage?: string;
  errorCode?: BatchUpdateBillScenarioUsageModificationErrorCode;
}
export type BatchUpdateBillScenarioUsageModificationErrorCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR";
export type BatchUpdateBillScenarioUsageModificationErrors =
  Array<BatchUpdateBillScenarioUsageModificationError>;
export interface BatchUpdateBillScenarioUsageModificationRequest {
  billScenarioId: string;
  usageModifications: Array<BatchUpdateBillScenarioUsageModificationEntry>;
}
export interface BatchUpdateBillScenarioUsageModificationResponse {
  items?: Array<BillScenarioUsageModificationItem>;
  errors?: Array<BatchUpdateBillScenarioUsageModificationError>;
}
export type BatchUpdateWorkloadEstimateUsageEntries =
  Array<BatchUpdateWorkloadEstimateUsageEntry>;
export interface BatchUpdateWorkloadEstimateUsageEntry {
  id: string;
  group?: string;
  amount?: number;
}
export interface BatchUpdateWorkloadEstimateUsageError {
  id?: string;
  errorMessage?: string;
  errorCode?: WorkloadEstimateUpdateUsageErrorCode;
}
export type BatchUpdateWorkloadEstimateUsageErrors =
  Array<BatchUpdateWorkloadEstimateUsageError>;
export interface BatchUpdateWorkloadEstimateUsageRequest {
  workloadEstimateId: string;
  usage: Array<BatchUpdateWorkloadEstimateUsageEntry>;
}
export interface BatchUpdateWorkloadEstimateUsageResponse {
  items?: Array<WorkloadEstimateUsageItem>;
  errors?: Array<BatchUpdateWorkloadEstimateUsageError>;
}
export type BillEstimateCommitmentSummaries =
  Array<BillEstimateCommitmentSummary>;
export interface BillEstimateCommitmentSummary {
  id?: string;
  purchaseAgreementType?: PurchaseAgreementType;
  offeringId?: string;
  usageAccountId?: string;
  region?: string;
  termLength?: string;
  paymentOption?: string;
  upfrontPayment?: CostAmount;
  monthlyPayment?: CostAmount;
}
export interface BillEstimateCostSummary {
  totalCostDifference?: CostDifference;
  serviceCostDifferences?: Record<string, CostDifference>;
}
export type BillEstimateInputCommitmentModificationSummaries =
  Array<BillEstimateInputCommitmentModificationSummary>;
export interface BillEstimateInputCommitmentModificationSummary {
  id?: string;
  group?: string;
  usageAccountId?: string;
  commitmentAction?: BillScenarioCommitmentModificationAction;
}
export type BillEstimateInputUsageModificationSummaries =
  Array<BillEstimateInputUsageModificationSummary>;
export interface BillEstimateInputUsageModificationSummary {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  availabilityZone?: string;
  id?: string;
  group?: string;
  usageAccountId?: string;
  quantities?: Array<UsageQuantity>;
  historicalUsage?: HistoricalUsageEntity;
}
export type BillEstimateLineItemSummaries = Array<BillEstimateLineItemSummary>;
export interface BillEstimateLineItemSummary {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  availabilityZone?: string;
  id?: string;
  lineItemId?: string;
  lineItemType?: string;
  payerAccountId?: string;
  usageAccountId?: string;
  estimatedUsageQuantity?: UsageQuantityResult;
  estimatedCost?: CostAmount;
  historicalUsageQuantity?: UsageQuantityResult;
  historicalCost?: CostAmount;
  savingsPlanArns?: Array<string>;
}
export type BillEstimateName = string;

export type BillEstimateStatus = "IN_PROGRESS" | "COMPLETE" | "FAILED";
export type BillEstimateSummaries = Array<BillEstimateSummary>;
export interface BillEstimateSummary {
  id: string;
  name?: string;
  status?: BillEstimateStatus;
  billInterval?: BillInterval;
  createdAt?: Date | string;
  expiresAt?: Date | string;
}
export interface BillInterval {
  start?: Date | string;
  end?: Date | string;
}
interface _BillScenarioCommitmentModificationAction {
  addReservedInstanceAction?: AddReservedInstanceAction;
  addSavingsPlanAction?: AddSavingsPlanAction;
  negateReservedInstanceAction?: NegateReservedInstanceAction;
  negateSavingsPlanAction?: NegateSavingsPlanAction;
}

export type BillScenarioCommitmentModificationAction =
  | (_BillScenarioCommitmentModificationAction & {
      addReservedInstanceAction: AddReservedInstanceAction;
    })
  | (_BillScenarioCommitmentModificationAction & {
      addSavingsPlanAction: AddSavingsPlanAction;
    })
  | (_BillScenarioCommitmentModificationAction & {
      negateReservedInstanceAction: NegateReservedInstanceAction;
    })
  | (_BillScenarioCommitmentModificationAction & {
      negateSavingsPlanAction: NegateSavingsPlanAction;
    });
export interface BillScenarioCommitmentModificationItem {
  id?: string;
  usageAccountId?: string;
  group?: string;
  commitmentAction?: BillScenarioCommitmentModificationAction;
}
export type BillScenarioCommitmentModificationItems =
  Array<BillScenarioCommitmentModificationItem>;
export type BillScenarioName = string;

export type BillScenarioStatus = "READY" | "LOCKED" | "FAILED" | "STALE";
export type BillScenarioSummaries = Array<BillScenarioSummary>;
export interface BillScenarioSummary {
  id: string;
  name?: string;
  billInterval?: BillInterval;
  status?: BillScenarioStatus;
  createdAt?: Date | string;
  expiresAt?: Date | string;
  failureMessage?: string;
}
export interface BillScenarioUsageModificationItem {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  availabilityZone?: string;
  id?: string;
  group?: string;
  usageAccountId?: string;
  quantities?: Array<UsageQuantity>;
  historicalUsage?: HistoricalUsageEntity;
}
export type BillScenarioUsageModificationItems =
  Array<BillScenarioUsageModificationItem>;
export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CostAmount {
  amount?: number;
  currency?: CurrencyCode;
}
export interface CostDifference {
  historicalCost?: CostAmount;
  estimatedCost?: CostAmount;
}
export interface CreateBillEstimateRequest {
  billScenarioId: string;
  name: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateBillEstimateResponse {
  id: string;
  name?: string;
  status?: BillEstimateStatus;
  failureMessage?: string;
  billInterval?: BillInterval;
  costSummary?: BillEstimateCostSummary;
  createdAt?: Date | string;
  expiresAt?: Date | string;
}
export interface CreateBillScenarioRequest {
  name: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateBillScenarioResponse {
  id: string;
  name?: string;
  billInterval?: BillInterval;
  status?: BillScenarioStatus;
  createdAt?: Date | string;
  expiresAt?: Date | string;
  failureMessage?: string;
}
export interface CreateWorkloadEstimateRequest {
  name: string;
  clientToken?: string;
  rateType?: WorkloadEstimateRateType;
  tags?: Record<string, string>;
}
export interface CreateWorkloadEstimateResponse {
  id: string;
  name?: string;
  createdAt?: Date | string;
  expiresAt?: Date | string;
  rateType?: WorkloadEstimateRateType;
  rateTimestamp?: Date | string;
  status?: WorkloadEstimateStatus;
  totalCost?: number;
  costCurrency?: CurrencyCode;
  failureMessage?: string;
}
export type CurrencyCode = "USD";
export declare class DataUnavailableException extends EffectData.TaggedError(
  "DataUnavailableException",
)<{
  readonly message: string;
}> {}
export interface DeleteBillEstimateRequest {
  identifier: string;
}
export interface DeleteBillEstimateResponse {}
export interface DeleteBillScenarioRequest {
  identifier: string;
}
export interface DeleteBillScenarioResponse {}
export interface DeleteWorkloadEstimateRequest {
  identifier: string;
}
export interface DeleteWorkloadEstimateResponse {}
export interface Expression {
  and?: Array<Expression>;
  or?: Array<Expression>;
  not?: Expression;
  costCategories?: ExpressionFilter;
  dimensions?: ExpressionFilter;
  tags?: ExpressionFilter;
}
export interface ExpressionFilter {
  key?: string;
  matchOptions?: Array<string>;
  values?: Array<string>;
}
export type ExpressionList = Array<Expression>;
export interface FilterTimestamp {
  afterTimestamp?: Date | string;
  beforeTimestamp?: Date | string;
}
export interface GetBillEstimateRequest {
  identifier: string;
}
export interface GetBillEstimateResponse {
  id: string;
  name?: string;
  status?: BillEstimateStatus;
  failureMessage?: string;
  billInterval?: BillInterval;
  costSummary?: BillEstimateCostSummary;
  createdAt?: Date | string;
  expiresAt?: Date | string;
}
export interface GetBillScenarioRequest {
  identifier: string;
}
export interface GetBillScenarioResponse {
  id: string;
  name?: string;
  billInterval?: BillInterval;
  status?: BillScenarioStatus;
  createdAt?: Date | string;
  expiresAt?: Date | string;
  failureMessage?: string;
}
export interface GetPreferencesRequest {}
export interface GetPreferencesResponse {
  managementAccountRateTypeSelections?: Array<RateType>;
  memberAccountRateTypeSelections?: Array<RateType>;
  standaloneAccountRateTypeSelections?: Array<RateType>;
}
export interface GetWorkloadEstimateRequest {
  identifier: string;
}
export interface GetWorkloadEstimateResponse {
  id: string;
  name?: string;
  createdAt?: Date | string;
  expiresAt?: Date | string;
  rateType?: WorkloadEstimateRateType;
  rateTimestamp?: Date | string;
  status?: WorkloadEstimateStatus;
  totalCost?: number;
  costCurrency?: CurrencyCode;
  failureMessage?: string;
}
export interface HistoricalUsageEntity {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  usageAccountId: string;
  billInterval: BillInterval;
  filterExpression: Expression;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type Key = string;

export interface ListBillEstimateCommitmentsRequest {
  billEstimateId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListBillEstimateCommitmentsResponse {
  items?: Array<BillEstimateCommitmentSummary>;
  nextToken?: string;
}
export interface ListBillEstimateInputCommitmentModificationsRequest {
  billEstimateId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListBillEstimateInputCommitmentModificationsResponse {
  items?: Array<BillEstimateInputCommitmentModificationSummary>;
  nextToken?: string;
}
export interface ListBillEstimateInputUsageModificationsRequest {
  billEstimateId: string;
  filters?: Array<ListUsageFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListBillEstimateInputUsageModificationsResponse {
  items?: Array<BillEstimateInputUsageModificationSummary>;
  nextToken?: string;
}
export interface ListBillEstimateLineItemsFilter {
  name: ListBillEstimateLineItemsFilterName;
  values: Array<string>;
  matchOption?: MatchOption;
}
export type ListBillEstimateLineItemsFilterName =
  | "USAGE_ACCOUNT_ID"
  | "SERVICE_CODE"
  | "USAGE_TYPE"
  | "OPERATION"
  | "LOCATION"
  | "LINE_ITEM_TYPE";
export type ListBillEstimateLineItemsFilters =
  Array<ListBillEstimateLineItemsFilter>;
export type ListBillEstimateLineItemsFilterValues = Array<string>;
export interface ListBillEstimateLineItemsRequest {
  billEstimateId: string;
  filters?: Array<ListBillEstimateLineItemsFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListBillEstimateLineItemsResponse {
  items?: Array<BillEstimateLineItemSummary>;
  nextToken?: string;
}
export interface ListBillEstimatesFilter {
  name: ListBillEstimatesFilterName;
  values: Array<string>;
  matchOption?: MatchOption;
}
export type ListBillEstimatesFilterName = "STATUS" | "NAME";
export type ListBillEstimatesFilters = Array<ListBillEstimatesFilter>;
export type ListBillEstimatesFilterValues = Array<string>;
export interface ListBillEstimatesRequest {
  filters?: Array<ListBillEstimatesFilter>;
  createdAtFilter?: FilterTimestamp;
  expiresAtFilter?: FilterTimestamp;
  nextToken?: string;
  maxResults?: number;
}
export interface ListBillEstimatesResponse {
  items?: Array<BillEstimateSummary>;
  nextToken?: string;
}
export interface ListBillScenarioCommitmentModificationsRequest {
  billScenarioId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListBillScenarioCommitmentModificationsResponse {
  items?: Array<BillScenarioCommitmentModificationItem>;
  nextToken?: string;
}
export interface ListBillScenariosFilter {
  name: ListBillScenariosFilterName;
  values: Array<string>;
  matchOption?: MatchOption;
}
export type ListBillScenariosFilterName = "STATUS" | "NAME";
export type ListBillScenariosFilters = Array<ListBillScenariosFilter>;
export type ListBillScenariosFilterValues = Array<string>;
export interface ListBillScenariosRequest {
  filters?: Array<ListBillScenariosFilter>;
  createdAtFilter?: FilterTimestamp;
  expiresAtFilter?: FilterTimestamp;
  nextToken?: string;
  maxResults?: number;
}
export interface ListBillScenariosResponse {
  items?: Array<BillScenarioSummary>;
  nextToken?: string;
}
export interface ListBillScenarioUsageModificationsRequest {
  billScenarioId: string;
  filters?: Array<ListUsageFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListBillScenarioUsageModificationsResponse {
  items?: Array<BillScenarioUsageModificationItem>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  arn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListUsageFilter {
  name: ListUsageFilterName;
  values: Array<string>;
  matchOption?: MatchOption;
}
export type ListUsageFilterName =
  | "USAGE_ACCOUNT_ID"
  | "SERVICE_CODE"
  | "USAGE_TYPE"
  | "OPERATION"
  | "LOCATION"
  | "USAGE_GROUP"
  | "HISTORICAL_USAGE_ACCOUNT_ID"
  | "HISTORICAL_SERVICE_CODE"
  | "HISTORICAL_USAGE_TYPE"
  | "HISTORICAL_OPERATION"
  | "HISTORICAL_LOCATION";
export type ListUsageFilters = Array<ListUsageFilter>;
export type ListUsageFilterValues = Array<string>;
export interface ListWorkloadEstimatesFilter {
  name: ListWorkloadEstimatesFilterName;
  values: Array<string>;
  matchOption?: MatchOption;
}
export type ListWorkloadEstimatesFilterName = "STATUS" | "NAME";
export type ListWorkloadEstimatesFilters = Array<ListWorkloadEstimatesFilter>;
export type ListWorkloadEstimatesFilterValues = Array<string>;
export interface ListWorkloadEstimatesRequest {
  createdAtFilter?: FilterTimestamp;
  expiresAtFilter?: FilterTimestamp;
  filters?: Array<ListWorkloadEstimatesFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListWorkloadEstimatesResponse {
  items?: Array<WorkloadEstimateSummary>;
  nextToken?: string;
}
export interface ListWorkloadEstimateUsageRequest {
  workloadEstimateId: string;
  filters?: Array<ListUsageFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListWorkloadEstimateUsageResponse {
  items?: Array<WorkloadEstimateUsageItem>;
  nextToken?: string;
}
export type MatchOption = "EQUALS" | "STARTS_WITH" | "CONTAINS";
export type MaxResults = number;

export interface NegateReservedInstanceAction {
  reservedInstancesId?: string;
}
export interface NegateSavingsPlanAction {
  savingsPlanId?: string;
}
export type NextPageToken = string;

export type Operation = string;

export type PurchaseAgreementType = "SAVINGS_PLANS" | "RESERVED_INSTANCE";
export type RateType =
  | "BEFORE_DISCOUNTS"
  | "AFTER_DISCOUNTS"
  | "AFTER_DISCOUNTS_AND_COMMITMENTS";
export type RateTypes = Array<RateType>;
export type ReservedInstanceInstanceCount = number;

export type ResourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ResourceTagKey = string;

export type ResourceTagKeys = Array<string>;
export type ResourceTagValue = string;

export type SavingsPlanArns = Array<string>;
export type SavingsPlanCommitment = number;

export type ServiceCode = string;

export type ServiceCostDifferenceMap = Record<string, CostDifference>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export type StringList = Array<string>;
export interface TagResourceRequest {
  arn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface UntagResourceRequest {
  arn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateBillEstimateRequest {
  identifier: string;
  name?: string;
  expiresAt?: Date | string;
}
export interface UpdateBillEstimateResponse {
  id: string;
  name?: string;
  status?: BillEstimateStatus;
  failureMessage?: string;
  billInterval?: BillInterval;
  costSummary?: BillEstimateCostSummary;
  createdAt?: Date | string;
  expiresAt?: Date | string;
}
export interface UpdateBillScenarioRequest {
  identifier: string;
  name?: string;
  expiresAt?: Date | string;
}
export interface UpdateBillScenarioResponse {
  id: string;
  name?: string;
  billInterval?: BillInterval;
  status?: BillScenarioStatus;
  createdAt?: Date | string;
  expiresAt?: Date | string;
  failureMessage?: string;
}
export interface UpdatePreferencesRequest {
  managementAccountRateTypeSelections?: Array<RateType>;
  memberAccountRateTypeSelections?: Array<RateType>;
  standaloneAccountRateTypeSelections?: Array<RateType>;
}
export interface UpdatePreferencesResponse {
  managementAccountRateTypeSelections?: Array<RateType>;
  memberAccountRateTypeSelections?: Array<RateType>;
  standaloneAccountRateTypeSelections?: Array<RateType>;
}
export interface UpdateWorkloadEstimateRequest {
  identifier: string;
  name?: string;
  expiresAt?: Date | string;
}
export interface UpdateWorkloadEstimateResponse {
  id: string;
  name?: string;
  createdAt?: Date | string;
  expiresAt?: Date | string;
  rateType?: WorkloadEstimateRateType;
  rateTimestamp?: Date | string;
  status?: WorkloadEstimateStatus;
  totalCost?: number;
  costCurrency?: CurrencyCode;
  failureMessage?: string;
}
export interface UsageAmount {
  startHour: Date | string;
  amount: number;
}
export type UsageAmounts = Array<UsageAmount>;
export type UsageGroup = string;

export type UsageQuantities = Array<UsageQuantity>;
export interface UsageQuantity {
  startHour?: Date | string;
  unit?: string;
  amount?: number;
}
export interface UsageQuantityResult {
  amount?: number;
  unit?: string;
}
export type UsageType = string;

export type Uuid = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason?: ValidationExceptionReason;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "invalidRequestFromMember"
  | "disallowedRate"
  | "other";
export type WorkloadEstimateCostStatus = "VALID" | "INVALID" | "STALE";
export type WorkloadEstimateName = string;

export type WorkloadEstimateRateType =
  | "BEFORE_DISCOUNTS"
  | "AFTER_DISCOUNTS"
  | "AFTER_DISCOUNTS_AND_COMMITMENTS";
export type WorkloadEstimateStatus =
  | "UPDATING"
  | "VALID"
  | "INVALID"
  | "ACTION_NEEDED";
export type WorkloadEstimateSummaries = Array<WorkloadEstimateSummary>;
export interface WorkloadEstimateSummary {
  id: string;
  name?: string;
  createdAt?: Date | string;
  expiresAt?: Date | string;
  rateType?: WorkloadEstimateRateType;
  rateTimestamp?: Date | string;
  status?: WorkloadEstimateStatus;
  totalCost?: number;
  costCurrency?: CurrencyCode;
  failureMessage?: string;
}
export type WorkloadEstimateUpdateUsageErrorCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR";
export interface WorkloadEstimateUsageItem {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  id?: string;
  usageAccountId?: string;
  group?: string;
  quantity?: WorkloadEstimateUsageQuantity;
  cost?: number;
  currency?: CurrencyCode;
  status?: WorkloadEstimateCostStatus;
  historicalUsage?: HistoricalUsageEntity;
}
export type WorkloadEstimateUsageItems = Array<WorkloadEstimateUsageItem>;
export type WorkloadEstimateUsageMaxResults = number;

export interface WorkloadEstimateUsageQuantity {
  unit?: string;
  amount?: number;
}
export declare namespace GetPreferences {
  export type Input = GetPreferencesRequest;
  export type Output = GetPreferencesResponse;
  export type Error = DataUnavailableException | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace UpdatePreferences {
  export type Input = UpdatePreferencesRequest;
  export type Output = UpdatePreferencesResponse;
  export type Error =
    | DataUnavailableException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace BatchCreateBillScenarioCommitmentModification {
  export type Input = BatchCreateBillScenarioCommitmentModificationRequest;
  export type Output = BatchCreateBillScenarioCommitmentModificationResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace BatchCreateBillScenarioUsageModification {
  export type Input = BatchCreateBillScenarioUsageModificationRequest;
  export type Output = BatchCreateBillScenarioUsageModificationResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace BatchCreateWorkloadEstimateUsage {
  export type Input = BatchCreateWorkloadEstimateUsageRequest;
  export type Output = BatchCreateWorkloadEstimateUsageResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace BatchDeleteBillScenarioCommitmentModification {
  export type Input = BatchDeleteBillScenarioCommitmentModificationRequest;
  export type Output = BatchDeleteBillScenarioCommitmentModificationResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace BatchDeleteBillScenarioUsageModification {
  export type Input = BatchDeleteBillScenarioUsageModificationRequest;
  export type Output = BatchDeleteBillScenarioUsageModificationResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace BatchDeleteWorkloadEstimateUsage {
  export type Input = BatchDeleteWorkloadEstimateUsageRequest;
  export type Output = BatchDeleteWorkloadEstimateUsageResponse;
  export type Error =
    | DataUnavailableException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace BatchUpdateBillScenarioCommitmentModification {
  export type Input = BatchUpdateBillScenarioCommitmentModificationRequest;
  export type Output = BatchUpdateBillScenarioCommitmentModificationResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace BatchUpdateBillScenarioUsageModification {
  export type Input = BatchUpdateBillScenarioUsageModificationRequest;
  export type Output = BatchUpdateBillScenarioUsageModificationResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace BatchUpdateWorkloadEstimateUsage {
  export type Input = BatchUpdateWorkloadEstimateUsageRequest;
  export type Output = BatchUpdateWorkloadEstimateUsageResponse;
  export type Error =
    | DataUnavailableException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateBillEstimate {
  export type Input = CreateBillEstimateRequest;
  export type Output = CreateBillEstimateResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateBillScenario {
  export type Input = CreateBillScenarioRequest;
  export type Output = CreateBillScenarioResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateWorkloadEstimate {
  export type Input = CreateWorkloadEstimateRequest;
  export type Output = CreateWorkloadEstimateResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace DeleteBillEstimate {
  export type Input = DeleteBillEstimateRequest;
  export type Output = DeleteBillEstimateResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteBillScenario {
  export type Input = DeleteBillScenarioRequest;
  export type Output = DeleteBillScenarioResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteWorkloadEstimate {
  export type Input = DeleteWorkloadEstimateRequest;
  export type Output = DeleteWorkloadEstimateResponse;
  export type Error = DataUnavailableException | CommonAwsError;
}

export declare namespace GetBillEstimate {
  export type Input = GetBillEstimateRequest;
  export type Output = GetBillEstimateResponse;
  export type Error =
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetBillScenario {
  export type Input = GetBillScenarioRequest;
  export type Output = GetBillScenarioResponse;
  export type Error =
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetWorkloadEstimate {
  export type Input = GetWorkloadEstimateRequest;
  export type Output = GetWorkloadEstimateResponse;
  export type Error =
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListBillEstimateCommitments {
  export type Input = ListBillEstimateCommitmentsRequest;
  export type Output = ListBillEstimateCommitmentsResponse;
  export type Error =
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListBillEstimateInputCommitmentModifications {
  export type Input = ListBillEstimateInputCommitmentModificationsRequest;
  export type Output = ListBillEstimateInputCommitmentModificationsResponse;
  export type Error =
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListBillEstimateInputUsageModifications {
  export type Input = ListBillEstimateInputUsageModificationsRequest;
  export type Output = ListBillEstimateInputUsageModificationsResponse;
  export type Error =
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListBillEstimateLineItems {
  export type Input = ListBillEstimateLineItemsRequest;
  export type Output = ListBillEstimateLineItemsResponse;
  export type Error =
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListBillEstimates {
  export type Input = ListBillEstimatesRequest;
  export type Output = ListBillEstimatesResponse;
  export type Error = DataUnavailableException | CommonAwsError;
}

export declare namespace ListBillScenarioCommitmentModifications {
  export type Input = ListBillScenarioCommitmentModificationsRequest;
  export type Output = ListBillScenarioCommitmentModificationsResponse;
  export type Error =
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListBillScenarioUsageModifications {
  export type Input = ListBillScenarioUsageModificationsRequest;
  export type Output = ListBillScenarioUsageModificationsResponse;
  export type Error =
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListBillScenarios {
  export type Input = ListBillScenariosRequest;
  export type Output = ListBillScenariosResponse;
  export type Error = DataUnavailableException | CommonAwsError;
}

export declare namespace ListWorkloadEstimateUsage {
  export type Input = ListWorkloadEstimateUsageRequest;
  export type Output = ListWorkloadEstimateUsageResponse;
  export type Error =
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListWorkloadEstimates {
  export type Input = ListWorkloadEstimatesRequest;
  export type Output = ListWorkloadEstimatesResponse;
  export type Error = DataUnavailableException | CommonAwsError;
}

export declare namespace UpdateBillEstimate {
  export type Input = UpdateBillEstimateRequest;
  export type Output = UpdateBillEstimateResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateBillScenario {
  export type Input = UpdateBillScenarioRequest;
  export type Output = UpdateBillScenarioResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateWorkloadEstimate {
  export type Input = UpdateWorkloadEstimateRequest;
  export type Output = UpdateWorkloadEstimateResponse;
  export type Error =
    | ConflictException
    | DataUnavailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "BCM Pricing Calculator",
  version: "2024-06-19",
  protocol: "awsJson1_0",
  targetPrefix: "AWSBCMPricingCalculator",
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;

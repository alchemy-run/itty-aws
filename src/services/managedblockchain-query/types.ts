import type { Effect, Data as EffectData } from "effect";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class ManagedBlockchainQuery extends AWSServiceClient {
  batchGetTokenBalance(
    input: BatchGetTokenBalanceInput,
  ): Effect.Effect<
    BatchGetTokenBalanceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAssetContract(
    input: GetAssetContractInput,
  ): Effect.Effect<
    GetAssetContractOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTokenBalance(
    input: GetTokenBalanceInput,
  ): Effect.Effect<
    GetTokenBalanceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTransaction(
    input: GetTransactionInput,
  ): Effect.Effect<
    GetTransactionOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAssetContracts(
    input: ListAssetContractsInput,
  ): Effect.Effect<
    ListAssetContractsOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFilteredTransactionEvents(
    input: ListFilteredTransactionEventsInput,
  ): Effect.Effect<
    ListFilteredTransactionEventsOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTokenBalances(
    input: ListTokenBalancesInput,
  ): Effect.Effect<
    ListTokenBalancesOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTransactionEvents(
    input: ListTransactionEventsInput,
  ): Effect.Effect<
    ListTransactionEventsOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTransactions(
    input: ListTransactionsInput,
  ): Effect.Effect<
    ListTransactionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class ManagedblockchainQuery extends ManagedBlockchainQuery {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface AddressIdentifierFilter {
  transactionEventToAddress: Array<string>;
}
export interface AssetContract {
  contractIdentifier: ContractIdentifier;
  tokenStandard: string;
  deployerAddress: string;
}
export type AssetContractList = Array<AssetContract>;
export interface BatchGetTokenBalanceErrorItem {
  tokenIdentifier?: TokenIdentifier;
  ownerIdentifier?: OwnerIdentifier;
  atBlockchainInstant?: BlockchainInstant;
  errorCode: string;
  errorMessage: string;
  errorType: string;
}
export type BatchGetTokenBalanceErrors = Array<BatchGetTokenBalanceErrorItem>;
export interface BatchGetTokenBalanceInput {
  getTokenBalanceInputs?: Array<BatchGetTokenBalanceInputItem>;
}
export interface BatchGetTokenBalanceInputItem {
  tokenIdentifier: TokenIdentifier;
  ownerIdentifier: OwnerIdentifier;
  atBlockchainInstant?: BlockchainInstant;
}
export interface BatchGetTokenBalanceOutput {
  tokenBalances: Array<BatchGetTokenBalanceOutputItem>;
  errors: Array<BatchGetTokenBalanceErrorItem>;
}
export interface BatchGetTokenBalanceOutputItem {
  ownerIdentifier?: OwnerIdentifier;
  tokenIdentifier?: TokenIdentifier;
  balance: string;
  atBlockchainInstant: BlockchainInstant;
  lastUpdatedTime?: BlockchainInstant;
}
export type BatchGetTokenBalanceOutputList =
  Array<BatchGetTokenBalanceOutputItem>;
export interface BlockchainInstant {
  time?: Date | string;
}
export type BlockHash = string;

export type ChainAddress = string;

export type ChainAddresses = Array<string>;
export type ConfirmationStatus = string;

export interface ConfirmationStatusFilter {
  include: Array<string>;
}
export type ConfirmationStatusIncludeList = Array<string>;
export interface ContractFilter {
  network: string;
  tokenStandard: string;
  deployerAddress: string;
}
export interface ContractIdentifier {
  network: string;
  contractAddress: string;
}
export interface ContractMetadata {
  name?: string;
  symbol?: string;
  decimals?: number;
}
export type ErrorType = string;

export type ExceptionMessage = string;

export type ExecutionStatus = string;

export interface GetAssetContractInput {
  contractIdentifier: ContractIdentifier;
}
export interface GetAssetContractOutput {
  contractIdentifier: ContractIdentifier;
  tokenStandard: string;
  deployerAddress: string;
  metadata?: ContractMetadata;
}
export interface GetTokenBalanceInput {
  tokenIdentifier: TokenIdentifier;
  ownerIdentifier: OwnerIdentifier;
  atBlockchainInstant?: BlockchainInstant;
}
export type GetTokenBalanceInputList = Array<BatchGetTokenBalanceInputItem>;
export interface GetTokenBalanceOutput {
  ownerIdentifier?: OwnerIdentifier;
  tokenIdentifier?: TokenIdentifier;
  balance: string;
  atBlockchainInstant: BlockchainInstant;
  lastUpdatedTime?: BlockchainInstant;
}
export interface GetTransactionInput {
  transactionHash?: string;
  transactionId?: string;
  network: string;
}
export interface GetTransactionOutput {
  transaction: Transaction;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface ListAssetContractsInput {
  contractFilter: ContractFilter;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssetContractsOutput {
  contracts: Array<AssetContract>;
  nextToken?: string;
}
export interface ListFilteredTransactionEventsInput {
  network: string;
  addressIdentifierFilter: AddressIdentifierFilter;
  timeFilter?: TimeFilter;
  voutFilter?: VoutFilter;
  confirmationStatusFilter?: ConfirmationStatusFilter;
  sort?: ListFilteredTransactionEventsSort;
  nextToken?: string;
  maxResults?: number;
}
export interface ListFilteredTransactionEventsOutput {
  events: Array<TransactionEvent>;
  nextToken?: string;
}
export interface ListFilteredTransactionEventsSort {
  sortBy?: string;
  sortOrder?: string;
}
export type ListFilteredTransactionEventsSortBy = string;

export interface ListTokenBalancesInput {
  ownerFilter?: OwnerFilter;
  tokenFilter: TokenFilter;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTokenBalancesOutput {
  tokenBalances: Array<TokenBalance>;
  nextToken?: string;
}
export interface ListTransactionEventsInput {
  transactionHash?: string;
  transactionId?: string;
  network: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTransactionEventsOutput {
  events: Array<TransactionEvent>;
  nextToken?: string;
}
export interface ListTransactionsInput {
  address: string;
  network: string;
  fromBlockchainInstant?: BlockchainInstant;
  toBlockchainInstant?: BlockchainInstant;
  sort?: ListTransactionsSort;
  nextToken?: string;
  maxResults?: number;
  confirmationStatusFilter?: ConfirmationStatusFilter;
}
export interface ListTransactionsOutput {
  transactions: Array<TransactionOutputItem>;
  nextToken?: string;
}
export interface ListTransactionsSort {
  sortBy?: string;
  sortOrder?: string;
}
export type ListTransactionsSortBy = string;

export type NextToken = string;

export interface OwnerFilter {
  address: string;
}
export interface OwnerIdentifier {
  address: string;
}
export type QueryNetwork = string;

export type QueryTokenId = string;

export type QueryTokenStandard = string;

export type QueryTransactionEventType = string;

export type QueryTransactionHash = string;

export type QueryTransactionId = string;

export type QuotaCode = string;

export type ResourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ResourceType = string;

export type ServiceCode = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export type SortOrder = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface TimeFilter {
  from?: BlockchainInstant;
  to?: BlockchainInstant;
}
export interface TokenBalance {
  ownerIdentifier?: OwnerIdentifier;
  tokenIdentifier?: TokenIdentifier;
  balance: string;
  atBlockchainInstant: BlockchainInstant;
  lastUpdatedTime?: BlockchainInstant;
}
export type TokenBalanceList = Array<TokenBalance>;
export interface TokenFilter {
  network: string;
  contractAddress?: string;
  tokenId?: string;
}
export interface TokenIdentifier {
  network: string;
  contractAddress?: string;
  tokenId?: string;
}
export interface Transaction {
  network: string;
  blockHash?: string;
  transactionHash: string;
  blockNumber?: string;
  transactionTimestamp: Date | string;
  transactionIndex: number;
  numberOfTransactions: number;
  to: string;
  from?: string;
  contractAddress?: string;
  gasUsed?: string;
  cumulativeGasUsed?: string;
  effectiveGasPrice?: string;
  signatureV?: number;
  signatureR?: string;
  signatureS?: string;
  transactionFee?: string;
  transactionId?: string;
  confirmationStatus?: string;
  executionStatus?: string;
}
export interface TransactionEvent {
  network: string;
  transactionHash: string;
  eventType: string;
  from?: string;
  to?: string;
  value?: string;
  contractAddress?: string;
  tokenId?: string;
  transactionId?: string;
  voutIndex?: number;
  voutSpent?: boolean;
  spentVoutTransactionId?: string;
  spentVoutTransactionHash?: string;
  spentVoutIndex?: number;
  blockchainInstant?: BlockchainInstant;
  confirmationStatus?: string;
}
export type TransactionEventList = Array<TransactionEvent>;
export interface TransactionOutputItem {
  transactionHash: string;
  transactionId?: string;
  network: string;
  transactionTimestamp: Date | string;
  confirmationStatus?: string;
}
export type TransactionOutputList = Array<TransactionOutputItem>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export interface VoutFilter {
  voutSpent: boolean;
}
export declare namespace BatchGetTokenBalance {
  export type Input = BatchGetTokenBalanceInput;
  export type Output = BatchGetTokenBalanceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAssetContract {
  export type Input = GetAssetContractInput;
  export type Output = GetAssetContractOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTokenBalance {
  export type Input = GetTokenBalanceInput;
  export type Output = GetTokenBalanceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTransaction {
  export type Input = GetTransactionInput;
  export type Output = GetTransactionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssetContracts {
  export type Input = ListAssetContractsInput;
  export type Output = ListAssetContractsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFilteredTransactionEvents {
  export type Input = ListFilteredTransactionEventsInput;
  export type Output = ListFilteredTransactionEventsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTokenBalances {
  export type Input = ListTokenBalancesInput;
  export type Output = ListTokenBalancesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTransactionEvents {
  export type Input = ListTransactionEventsInput;
  export type Output = ListTransactionEventsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTransactions {
  export type Input = ListTransactionsInput;
  export type Output = ListTransactionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

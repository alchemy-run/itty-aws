import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class QLDBSession extends AWSServiceClient {
  sendCommand(
    input: SendCommandRequest,
  ): Effect.Effect<
    SendCommandResult,
    | BadRequestException
    | CapacityExceededException
    | InvalidSessionException
    | LimitExceededException
    | OccConflictException
    | RateExceededException
    | CommonAwsError
  >;
}

export declare class QldbSession extends QLDBSession {}

export interface AbortTransactionRequest {}
export interface AbortTransactionResult {
  TimingInformation?: TimingInformation;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export declare class CapacityExceededException extends EffectData.TaggedError(
  "CapacityExceededException",
)<{
  readonly Message?: string;
}> {}
export type CommitDigest = Uint8Array | string;

export interface CommitTransactionRequest {
  TransactionId: string;
  CommitDigest: Uint8Array | string;
}
export interface CommitTransactionResult {
  TransactionId?: string;
  CommitDigest?: Uint8Array | string;
  TimingInformation?: TimingInformation;
  ConsumedIOs?: IOUsage;
}
export interface EndSessionRequest {}
export interface EndSessionResult {
  TimingInformation?: TimingInformation;
}
export type ErrorCode = string;

export type ErrorMessage = string;

export interface ExecuteStatementRequest {
  TransactionId: string;
  Statement: string;
  Parameters?: Array<ValueHolder>;
}
export interface ExecuteStatementResult {
  FirstPage?: Page;
  TimingInformation?: TimingInformation;
  ConsumedIOs?: IOUsage;
}
export interface FetchPageRequest {
  TransactionId: string;
  NextPageToken: string;
}
export interface FetchPageResult {
  Page?: Page;
  TimingInformation?: TimingInformation;
  ConsumedIOs?: IOUsage;
}
export declare class InvalidSessionException extends EffectData.TaggedError(
  "InvalidSessionException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export type IonBinary = Uint8Array | string;

export type IonText = string;

export interface IOUsage {
  ReadIOs?: number;
  WriteIOs?: number;
}
export type LedgerName = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class OccConflictException extends EffectData.TaggedError(
  "OccConflictException",
)<{
  readonly Message?: string;
}> {}
export interface Page {
  Values?: Array<ValueHolder>;
  NextPageToken?: string;
}
export type PageToken = string;

export type ProcessingTimeMilliseconds = number;

export declare class RateExceededException extends EffectData.TaggedError(
  "RateExceededException",
)<{
  readonly Message?: string;
}> {}
export type ReadIOs = number;

export interface SendCommandRequest {
  SessionToken?: string;
  StartSession?: StartSessionRequest;
  StartTransaction?: StartTransactionRequest;
  EndSession?: EndSessionRequest;
  CommitTransaction?: CommitTransactionRequest;
  AbortTransaction?: AbortTransactionRequest;
  ExecuteStatement?: ExecuteStatementRequest;
  FetchPage?: FetchPageRequest;
}
export interface SendCommandResult {
  StartSession?: StartSessionResult;
  StartTransaction?: StartTransactionResult;
  EndSession?: EndSessionResult;
  CommitTransaction?: CommitTransactionResult;
  AbortTransaction?: AbortTransactionResult;
  ExecuteStatement?: ExecuteStatementResult;
  FetchPage?: FetchPageResult;
}
export type SessionToken = string;

export interface StartSessionRequest {
  LedgerName: string;
}
export interface StartSessionResult {
  SessionToken?: string;
  TimingInformation?: TimingInformation;
}
export interface StartTransactionRequest {}
export interface StartTransactionResult {
  TransactionId?: string;
  TimingInformation?: TimingInformation;
}
export type Statement = string;

export type StatementParameters = Array<ValueHolder>;
export interface TimingInformation {
  ProcessingTimeMilliseconds?: number;
}
export type TransactionId = string;

export interface ValueHolder {
  IonBinary?: Uint8Array | string;
  IonText?: string;
}
export type ValueHolders = Array<ValueHolder>;
export type WriteIOs = number;

export declare namespace SendCommand {
  export type Input = SendCommandRequest;
  export type Output = SendCommandResult;
  export type Error =
    | BadRequestException
    | CapacityExceededException
    | InvalidSessionException
    | LimitExceededException
    | OccConflictException
    | RateExceededException
    | CommonAwsError;
}

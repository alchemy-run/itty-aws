import type { Effect, Stream, Data as EffectData } from "effect";
import type { ResponseError } from "@effect/platform/HttpClientError";
import type { AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = AccessDeniedException | ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class IoTJobsDataPlane extends AWSServiceClient {
  describeJobExecution(
    input: DescribeJobExecutionRequest,
  ): Effect.Effect<
    DescribeJobExecutionResponse,
    CertificateValidationException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | TerminalStateException | ThrottlingException | CommonAwsError
  >;
  getPendingJobExecutions(
    input: GetPendingJobExecutionsRequest,
  ): Effect.Effect<
    GetPendingJobExecutionsResponse,
    CertificateValidationException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  startCommandExecution(
    input: StartCommandExecutionRequest,
  ): Effect.Effect<
    StartCommandExecutionResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startNextPendingJobExecution(
    input: StartNextPendingJobExecutionRequest,
  ): Effect.Effect<
    StartNextPendingJobExecutionResponse,
    CertificateValidationException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updateJobExecution(
    input: UpdateJobExecutionRequest,
  ): Effect.Effect<
    UpdateJobExecutionResponse,
    CertificateValidationException | InvalidRequestException | InvalidStateTransitionException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
}

export declare class IotJobsDataPlane extends IoTJobsDataPlane {}

export type ApproximateSecondsBeforeTimedOut = number;

export type BinaryBlob = Uint8Array | string;

export type BinaryParameterValue = Uint8Array | string;

export type BooleanParameterValue = boolean;

export declare class CertificateValidationException extends EffectData.TaggedError(
  "CertificateValidationException",
)<{
  readonly message?: string;
}> {}
export type ClientRequestTokenV2 = string;

export type CommandArn = string;

export type CommandExecutionId = string;

export type CommandExecutionParameterMap = Record<string, CommandParameterValue>;
export type CommandExecutionTimeoutInSeconds = number;

export type CommandParameterName = string;

export interface CommandParameterValue {
  S?: string;
  B?: boolean;
  I?: number;
  L?: number;
  D?: number;
  BIN?: Uint8Array | string;
  UL?: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
}> {}
export type DescribeJobExecutionJobId = string;

export interface DescribeJobExecutionRequest {
  jobId: string;
  thingName: string;
  includeJobDocument?: boolean;
  executionNumber?: number;
}
export interface DescribeJobExecutionResponse {
  execution?: JobExecution;
}
export type DetailsKey = string;

export type DetailsMap = Record<string, string>;
export type DetailsValue = string;

export type DoubleParameterValue = number;

export type errorMessage = string;

export type ExecutionNumber = number;

export type ExpectedVersion = number;

export interface GetPendingJobExecutionsRequest {
  thingName: string;
}
export interface GetPendingJobExecutionsResponse {
  inProgressJobs?: Array<JobExecutionSummary>;
  queuedJobs?: Array<JobExecutionSummary>;
}
export type IncludeExecutionState = boolean;

export type IncludeJobDocument = boolean;

export type IntegerParameterValue = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidStateTransitionException extends EffectData.TaggedError(
  "InvalidStateTransitionException",
)<{
  readonly message?: string;
}> {}
export type JobDocument = string;

export interface JobExecution {
  jobId?: string;
  thingName?: string;
  status?: JobExecutionStatus;
  statusDetails?: Record<string, string>;
  queuedAt?: number;
  startedAt?: number;
  lastUpdatedAt?: number;
  approximateSecondsBeforeTimedOut?: number;
  versionNumber?: number;
  executionNumber?: number;
  jobDocument?: string;
}
export interface JobExecutionState {
  status?: JobExecutionStatus;
  statusDetails?: Record<string, string>;
  versionNumber?: number;
}
export type JobExecutionStatus = "QUEUED" | "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | "TIMED_OUT" | "REJECTED" | "REMOVED" | "CANCELED";
export interface JobExecutionSummary {
  jobId?: string;
  queuedAt?: number;
  startedAt?: number;
  lastUpdatedAt?: number;
  versionNumber?: number;
  executionNumber?: number;
}
export type JobExecutionSummaryList = Array<JobExecutionSummary>;
export type JobId = string;

export type LastUpdatedAt = number;

export type LongParameterValue = number;

export type QueuedAt = number;

export type resourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export interface StartCommandExecutionRequest {
  targetArn: string;
  commandArn: string;
  parameters?: Record<string, CommandParameterValue>;
  executionTimeoutSeconds?: number;
  clientToken?: string;
}
export interface StartCommandExecutionResponse {
  executionId?: string;
}
export type StartedAt = number;

export interface StartNextPendingJobExecutionRequest {
  thingName: string;
  statusDetails?: Record<string, string>;
  stepTimeoutInMinutes?: number;
}
export interface StartNextPendingJobExecutionResponse {
  execution?: JobExecution;
}
export type StepTimeoutInMinutes = number;

export type StringParameterValue = string;

export type TargetArn = string;

export declare class TerminalStateException extends EffectData.TaggedError(
  "TerminalStateException",
)<{
  readonly message?: string;
}> {}
export type ThingName = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
  readonly payload?: Uint8Array | string | Stream.Stream<Uint8Array>;
}> {}
export type UnsignedLongParameterValue = string;

export interface UpdateJobExecutionRequest {
  jobId: string;
  thingName: string;
  status: JobExecutionStatus;
  statusDetails?: Record<string, string>;
  stepTimeoutInMinutes?: number;
  expectedVersion?: number;
  includeJobExecutionState?: boolean;
  includeJobDocument?: boolean;
  executionNumber?: number;
}
export interface UpdateJobExecutionResponse {
  executionState?: JobExecutionState;
  jobDocument?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type VersionNumber = number;

export declare namespace DescribeJobExecution {
  export type Input = DescribeJobExecutionRequest;
  export type Output = DescribeJobExecutionResponse;
  export type Error =
    | CertificateValidationException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | TerminalStateException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetPendingJobExecutions {
  export type Input = GetPendingJobExecutionsRequest;
  export type Output = GetPendingJobExecutionsResponse;
  export type Error =
    | CertificateValidationException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartCommandExecution {
  export type Input = StartCommandExecutionRequest;
  export type Output = StartCommandExecutionResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartNextPendingJobExecution {
  export type Input = StartNextPendingJobExecutionRequest;
  export type Output = StartNextPendingJobExecutionResponse;
  export type Error =
    | CertificateValidationException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateJobExecution {
  export type Input = UpdateJobExecutionRequest;
  export type Output = UpdateJobExecutionResponse;
  export type Error =
    | CertificateValidationException
    | InvalidRequestException
    | InvalidStateTransitionException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export type IoTJobsDataPlaneErrors = CertificateValidationException | ConflictException | InternalServerException | InvalidRequestException | InvalidStateTransitionException | ResourceNotFoundException | ServiceQuotaExceededException | ServiceUnavailableException | TerminalStateException | ThrottlingException | ValidationException | CommonAwsError;


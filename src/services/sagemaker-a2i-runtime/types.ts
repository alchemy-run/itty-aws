import type { Effect, Data as EffectData } from "effect";
import type {
  AccessDeniedException,
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
  | AccessDeniedException
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
  | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class SageMakerA2IRuntime extends AWSServiceClient {
  deleteHumanLoop(
    input: DeleteHumanLoopRequest,
  ): Effect.Effect<
    DeleteHumanLoopResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeHumanLoop(
    input: DescribeHumanLoopRequest,
  ): Effect.Effect<
    DescribeHumanLoopResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listHumanLoops(
    input: ListHumanLoopsRequest,
  ): Effect.Effect<
    ListHumanLoopsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startHumanLoop(
    input: StartHumanLoopRequest,
  ): Effect.Effect<
    StartHumanLoopResponse,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopHumanLoop(
    input: StopHumanLoopRequest,
  ): Effect.Effect<
    StopHumanLoopResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class SagemakerA2iRuntime extends SageMakerA2IRuntime {}

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type ContentClassifier =
  | "FreeOfPersonallyIdentifiableInformation"
  | "FreeOfAdultContent";
export type ContentClassifiers = Array<ContentClassifier>;
export interface DeleteHumanLoopRequest {
  HumanLoopName: string;
}
export interface DeleteHumanLoopResponse {}
export interface DescribeHumanLoopRequest {
  HumanLoopName: string;
}
export interface DescribeHumanLoopResponse {
  CreationTime: Date | string;
  FailureReason?: string;
  FailureCode?: string;
  HumanLoopStatus: HumanLoopStatus;
  HumanLoopName: string;
  HumanLoopArn: string;
  FlowDefinitionArn: string;
  HumanLoopOutput?: HumanLoopOutput;
}
export type FailureReason = string;

export type FlowDefinitionArn = string;

export type HumanLoopArn = string;

export interface HumanLoopDataAttributes {
  ContentClassifiers: Array<ContentClassifier>;
}
export interface HumanLoopInput {
  InputContent: string;
}
export type HumanLoopName = string;

export interface HumanLoopOutput {
  OutputS3Uri: string;
}
export type HumanLoopStatus =
  | "InProgress"
  | "Failed"
  | "Completed"
  | "Stopped"
  | "Stopping";
export type HumanLoopSummaries = Array<HumanLoopSummary>;
export interface HumanLoopSummary {
  HumanLoopName?: string;
  HumanLoopStatus?: HumanLoopStatus;
  CreationTime?: Date | string;
  FailureReason?: string;
  FlowDefinitionArn?: string;
}
export type InputContent = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface ListHumanLoopsRequest {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
  FlowDefinitionArn: string;
  SortOrder?: SortOrder;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListHumanLoopsResponse {
  HumanLoopSummaries: Array<HumanLoopSummary>;
  NextToken?: string;
}
export type MaxResults = number;

export type NextToken = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export type SortOrder = "Ascending" | "Descending";
export interface StartHumanLoopRequest {
  HumanLoopName: string;
  FlowDefinitionArn: string;
  HumanLoopInput: HumanLoopInput;
  DataAttributes?: HumanLoopDataAttributes;
}
export interface StartHumanLoopResponse {
  HumanLoopArn?: string;
}
export interface StopHumanLoopRequest {
  HumanLoopName: string;
}
export interface StopHumanLoopResponse {}
export type SagemakerA2iRuntimeString = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type Timestamp = Date | string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace DeleteHumanLoop {
  export type Input = DeleteHumanLoopRequest;
  export type Output = DeleteHumanLoopResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeHumanLoop {
  export type Input = DescribeHumanLoopRequest;
  export type Output = DescribeHumanLoopResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListHumanLoops {
  export type Input = ListHumanLoopsRequest;
  export type Output = ListHumanLoopsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartHumanLoop {
  export type Input = StartHumanLoopRequest;
  export type Output = StartHumanLoopResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopHumanLoop {
  export type Input = StopHumanLoopRequest;
  export type Output = StopHumanLoopResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

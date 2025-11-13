import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class Route53RecoveryCluster extends AWSServiceClient {
  getRoutingControlState(
    input: GetRoutingControlStateRequest,
  ): Effect.Effect<
    GetRoutingControlStateResponse,
    AccessDeniedException | EndpointTemporarilyUnavailableException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listRoutingControls(
    input: ListRoutingControlsRequest,
  ): Effect.Effect<
    ListRoutingControlsResponse,
    AccessDeniedException | EndpointTemporarilyUnavailableException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateRoutingControlState(
    input: UpdateRoutingControlStateRequest,
  ): Effect.Effect<
    UpdateRoutingControlStateResponse,
    AccessDeniedException | ConflictException | EndpointTemporarilyUnavailableException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateRoutingControlStates(
    input: UpdateRoutingControlStatesRequest,
  ): Effect.Effect<
    UpdateRoutingControlStatesResponse,
    AccessDeniedException | ConflictException | EndpointTemporarilyUnavailableException | InternalServerException | ResourceNotFoundException | ServiceLimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type Arn = string;

export type Arns = Array<string>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ControlPanelName = string;

export declare class EndpointTemporarilyUnavailableException extends EffectData.TaggedError(
  "EndpointTemporarilyUnavailableException",
)<{
  readonly message: string;
}> {}
export interface GetRoutingControlStateRequest {
  RoutingControlArn: string;
}
export interface GetRoutingControlStateResponse {
  RoutingControlArn: string;
  RoutingControlState: RoutingControlState;
  RoutingControlName?: string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface ListRoutingControlsRequest {
  ControlPanelArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRoutingControlsResponse {
  RoutingControls: Array<RoutingControl>;
  NextToken?: string;
}
export type MaxResults = number;

export type Owner = string;

export type PageToken = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type RetryAfterSeconds = number;

export interface RoutingControl {
  ControlPanelArn?: string;
  ControlPanelName?: string;
  RoutingControlArn?: string;
  RoutingControlName?: string;
  RoutingControlState?: RoutingControlState;
  Owner?: string;
}
export type RoutingControlName = string;

export type RoutingControls = Array<RoutingControl>;
export type RoutingControlState = "On" | "Off";
export declare class ServiceLimitExceededException extends EffectData.TaggedError(
  "ServiceLimitExceededException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly limitCode: string;
  readonly serviceCode: string;
}> {}
export type Route53RecoveryClusterString = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type UpdateRoutingControlStateEntries = Array<UpdateRoutingControlStateEntry>;
export interface UpdateRoutingControlStateEntry {
  RoutingControlArn: string;
  RoutingControlState: RoutingControlState;
}
export interface UpdateRoutingControlStateRequest {
  RoutingControlArn: string;
  RoutingControlState: RoutingControlState;
  SafetyRulesToOverride?: Array<string>;
}
export interface UpdateRoutingControlStateResponse {
}
export interface UpdateRoutingControlStatesRequest {
  UpdateRoutingControlStateEntries: Array<UpdateRoutingControlStateEntry>;
  SafetyRulesToOverride?: Array<string>;
}
export interface UpdateRoutingControlStatesResponse {
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason?: ValidationExceptionReason;
  readonly fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = "unknownOperation" | "cannotParse" | "fieldValidationFailed" | "other";
export declare namespace GetRoutingControlState {
  export type Input = GetRoutingControlStateRequest;
  export type Output = GetRoutingControlStateResponse;
  export type Error =
    | AccessDeniedException
    | EndpointTemporarilyUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRoutingControls {
  export type Input = ListRoutingControlsRequest;
  export type Output = ListRoutingControlsResponse;
  export type Error =
    | AccessDeniedException
    | EndpointTemporarilyUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRoutingControlState {
  export type Input = UpdateRoutingControlStateRequest;
  export type Output = UpdateRoutingControlStateResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | EndpointTemporarilyUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRoutingControlStates {
  export type Input = UpdateRoutingControlStatesRequest;
  export type Output = UpdateRoutingControlStatesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | EndpointTemporarilyUnavailableException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type Route53RecoveryClusterErrors = AccessDeniedException | ConflictException | EndpointTemporarilyUnavailableException | InternalServerException | ResourceNotFoundException | ServiceLimitExceededException | ThrottlingException | ValidationException | CommonAwsError;


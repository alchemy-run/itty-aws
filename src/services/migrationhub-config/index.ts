import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export class MigrationHubConfig extends AWSServiceClient {
  createHomeRegionControl(
    input: CreateHomeRegionControlRequest,
  ): Effect.Effect<
    CreateHomeRegionControlResult,
    | AccessDeniedException
    | DryRunOperation
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  > {
    return this.call("CreateHomeRegionControl", input);
  }
  deleteHomeRegionControl(
    input: DeleteHomeRegionControlRequest,
  ): Effect.Effect<
    DeleteHomeRegionControlResult,
    | AccessDeniedException
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  > {
    return this.call("DeleteHomeRegionControl", input);
  }
  describeHomeRegionControls(
    input: DescribeHomeRegionControlsRequest,
  ): Effect.Effect<
    DescribeHomeRegionControlsResult,
    | AccessDeniedException
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  > {
    return this.call("DescribeHomeRegionControls", input);
  }
  getHomeRegion(
    input: GetHomeRegionRequest,
  ): Effect.Effect<
    GetHomeRegionResult,
    | AccessDeniedException
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  > {
    return this.call("GetHomeRegion", input);
  }
}

export class MigrationhubConfig extends MigrationHubConfig {}

export default MigrationHubConfig;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type ControlId = string;

export interface CreateHomeRegionControlRequest {
  HomeRegion: string;
  Target: Target;
  DryRun?: boolean;
}
export interface CreateHomeRegionControlResult {
  HomeRegionControl?: HomeRegionControl;
}
export interface DeleteHomeRegionControlRequest {
  ControlId: string;
}
export interface DeleteHomeRegionControlResult {}
export type DescribeHomeRegionControlsMaxResults = number;

export interface DescribeHomeRegionControlsRequest {
  ControlId?: string;
  HomeRegion?: string;
  Target?: Target;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeHomeRegionControlsResult {
  HomeRegionControls?: Array<HomeRegionControl>;
  NextToken?: string;
}
export type DryRun = boolean;

export declare class DryRunOperation extends EffectData.TaggedError(
  "DryRunOperation",
)<{
  readonly Message?: string;
}> {}
export type ErrorMessage = string;

export interface GetHomeRegionRequest {}
export interface GetHomeRegionResult {
  HomeRegion?: string;
}
export type HomeRegion = string;

export interface HomeRegionControl {
  ControlId?: string;
  HomeRegion?: string;
  Target?: Target;
  RequestedTime?: Date | string;
}
export type HomeRegionControls = Array<HomeRegionControl>;
export declare class InternalServerError extends EffectData.TaggedError(
  "InternalServerError",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly Message?: string;
}> {}
export type RequestedTime = Date | string;

export type RetryAfterSeconds = number;

export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export interface Target {
  Type: TargetType;
  Id?: string;
}
export type TargetId = string;

export type TargetType = "ACCOUNT";
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly RetryAfterSeconds?: number;
}> {}
export type Token = string;

export declare namespace CreateHomeRegionControl {
  export type Input = CreateHomeRegionControlRequest;
  export type Output = CreateHomeRegionControlResult;
  export type Error =
    | AccessDeniedException
    | DryRunOperation
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteHomeRegionControl {
  export type Input = DeleteHomeRegionControlRequest;
  export type Output = DeleteHomeRegionControlResult;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeHomeRegionControls {
  export type Input = DescribeHomeRegionControlsRequest;
  export type Output = DescribeHomeRegionControlsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetHomeRegion {
  export type Input = GetHomeRegionRequest;
  export type Output = GetHomeRegionResult;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidInputException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

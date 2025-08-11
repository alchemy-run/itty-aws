import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ARCZonalShift extends AWSServiceClient {
  cancelPracticeRun(
    input: CancelPracticeRunRequest,
  ): Effect.Effect<
    CancelPracticeRunResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelZonalShift(
    input: CancelZonalShiftRequest,
  ): Effect.Effect<
    ZonalShift,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createPracticeRunConfiguration(
    input: CreatePracticeRunConfigurationRequest,
  ): Effect.Effect<
    CreatePracticeRunConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePracticeRunConfiguration(
    input: DeletePracticeRunConfigurationRequest,
  ): Effect.Effect<
    DeletePracticeRunConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAutoshiftObserverNotificationStatus(
    input: GetAutoshiftObserverNotificationStatusRequest,
  ): Effect.Effect<
    GetAutoshiftObserverNotificationStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError
  >;
  getManagedResource(
    input: GetManagedResourceRequest,
  ): Effect.Effect<
    GetManagedResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAutoshifts(
    input: ListAutoshiftsRequest,
  ): Effect.Effect<
    ListAutoshiftsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listManagedResources(
    input: ListManagedResourcesRequest,
  ): Effect.Effect<
    ListManagedResourcesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listZonalShifts(
    input: ListZonalShiftsRequest,
  ): Effect.Effect<
    ListZonalShiftsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startPracticeRun(
    input: StartPracticeRunRequest,
  ): Effect.Effect<
    StartPracticeRunResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startZonalShift(
    input: StartZonalShiftRequest,
  ): Effect.Effect<
    ZonalShift,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateAutoshiftObserverNotificationStatus(
    input: UpdateAutoshiftObserverNotificationStatusRequest,
  ): Effect.Effect<
    UpdateAutoshiftObserverNotificationStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePracticeRunConfiguration(
    input: UpdatePracticeRunConfigurationRequest,
  ): Effect.Effect<
    UpdatePracticeRunConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateZonalAutoshiftConfiguration(
    input: UpdateZonalAutoshiftConfigurationRequest,
  ): Effect.Effect<
    UpdateZonalAutoshiftConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateZonalShift(
    input: UpdateZonalShiftRequest,
  ): Effect.Effect<
    ZonalShift,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class ArcZonalShift extends ARCZonalShift {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AppliedStatus = "APPLIED" | "NOT_APPLIED";
export type AppliedWeights = Record<string, number>;
export type AutoshiftAppliedStatus = "APPLIED" | "NOT_APPLIED";
export type AutoshiftExecutionStatus = "ACTIVE" | "COMPLETED";
export interface AutoshiftInResource {
  appliedStatus: AutoshiftAppliedStatus;
  awayFrom: string;
  startTime: Date | string;
}
export type AutoshiftObserverNotificationStatus = "ENABLED" | "DISABLED";
export type AutoshiftsInResource = Array<AutoshiftInResource>;
export type AutoshiftSummaries = Array<AutoshiftSummary>;
export interface AutoshiftSummary {
  awayFrom: string;
  endTime?: Date | string;
  startTime: Date | string;
  status: AutoshiftExecutionStatus;
}
export type AvailabilityZone = string;

export type AvailabilityZones = Array<string>;
export type BlockedDate = string;

export type BlockedDates = Array<string>;
export type BlockedWindow = string;

export type BlockedWindows = Array<string>;
export interface CancelPracticeRunRequest {
  zonalShiftId: string;
}
export interface CancelPracticeRunResponse {
  zonalShiftId: string;
  resourceIdentifier: string;
  awayFrom: string;
  expiryTime: Date | string;
  startTime: Date | string;
  status: ZonalShiftStatus;
  comment: string;
}
export interface CancelZonalShiftRequest {
  zonalShiftId: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly reason: ConflictExceptionReason;
  readonly zonalShiftId?: string;
}> {}
export type ConflictExceptionReason =
  | "ZONAL_SHIFT_ALREADY_EXISTS"
  | "ZONAL_SHIFT_STATUS_NOT_ACTIVE"
  | "SIMULTANEOUS_ZONAL_SHIFTS_CONFLICT"
  | "PRACTICE_CONFIGURATION_ALREADY_EXISTS"
  | "AUTOSHIFT_ENABLED"
  | "PRACTICE_CONFIGURATION_DOES_NOT_EXIST"
  | "ZONAL_AUTOSHIFT_ACTIVE"
  | "PRACTICE_OUTCOME_ALARMS_RED"
  | "PRACTICE_BLOCKING_ALARMS_RED"
  | "PRACTICE_IN_BLOCKED_DATES"
  | "PRACTICE_IN_BLOCKED_WINDOWS";
export interface ControlCondition {
  type: ControlConditionType;
  alarmIdentifier: string;
}
export type ControlConditions = Array<ControlCondition>;
export type ControlConditionType = "CLOUDWATCH";
export interface CreatePracticeRunConfigurationRequest {
  resourceIdentifier: string;
  blockedWindows?: Array<string>;
  blockedDates?: Array<string>;
  blockingAlarms?: Array<ControlCondition>;
  outcomeAlarms: Array<ControlCondition>;
}
export interface CreatePracticeRunConfigurationResponse {
  arn: string;
  name: string;
  zonalAutoshiftStatus: ZonalAutoshiftStatus;
  practiceRunConfiguration: PracticeRunConfiguration;
}
export interface DeletePracticeRunConfigurationRequest {
  resourceIdentifier: string;
}
export interface DeletePracticeRunConfigurationResponse {
  arn: string;
  name: string;
  zonalAutoshiftStatus: ZonalAutoshiftStatus;
}
export type ExpiresIn = string;

export type ExpiryTime = Date | string;

export interface GetAutoshiftObserverNotificationStatusRequest {}
export interface GetAutoshiftObserverNotificationStatusResponse {
  status: AutoshiftObserverNotificationStatus;
}
export interface GetManagedResourceRequest {
  resourceIdentifier: string;
}
export interface GetManagedResourceResponse {
  arn?: string;
  name?: string;
  appliedWeights: Record<string, number>;
  zonalShifts: Array<ZonalShiftInResource>;
  autoshifts?: Array<AutoshiftInResource>;
  practiceRunConfiguration?: PracticeRunConfiguration;
  zonalAutoshiftStatus?: ZonalAutoshiftStatus;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface ListAutoshiftsRequest {
  nextToken?: string;
  status?: AutoshiftExecutionStatus;
  maxResults?: number;
}
export interface ListAutoshiftsResponse {
  items?: Array<AutoshiftSummary>;
  nextToken?: string;
}
export interface ListManagedResourcesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListManagedResourcesResponse {
  items: Array<ManagedResourceSummary>;
  nextToken?: string;
}
export interface ListZonalShiftsRequest {
  nextToken?: string;
  status?: ZonalShiftStatus;
  maxResults?: number;
  resourceIdentifier?: string;
}
export interface ListZonalShiftsResponse {
  items?: Array<ZonalShiftSummary>;
  nextToken?: string;
}
export type ManagedResourceSummaries = Array<ManagedResourceSummary>;
export interface ManagedResourceSummary {
  arn?: string;
  name?: string;
  availabilityZones: Array<string>;
  appliedWeights?: Record<string, number>;
  zonalShifts?: Array<ZonalShiftInResource>;
  autoshifts?: Array<AutoshiftInResource>;
  zonalAutoshiftStatus?: ZonalAutoshiftStatus;
  practiceRunStatus?: ZonalAutoshiftStatus;
}
export type MaxResults = number;

export type MetricIdentifier = string;

export interface PracticeRunConfiguration {
  blockingAlarms?: Array<ControlCondition>;
  outcomeAlarms: Array<ControlCondition>;
  blockedWindows?: Array<string>;
  blockedDates?: Array<string>;
}
export type PracticeRunOutcome =
  | "FAILED"
  | "INTERRUPTED"
  | "PENDING"
  | "SUCCEEDED"
  | "CAPACITY_CHECK_FAILED";
export type ResourceArn = string;

export type ResourceIdentifier = string;

export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type ShiftType =
  | "ZONAL_SHIFT"
  | "PRACTICE_RUN"
  | "FIS_EXPERIMENT"
  | "ZONAL_AUTOSHIFT";
export interface StartPracticeRunRequest {
  resourceIdentifier: string;
  awayFrom: string;
  comment: string;
}
export interface StartPracticeRunResponse {
  zonalShiftId: string;
  resourceIdentifier: string;
  awayFrom: string;
  expiryTime: Date | string;
  startTime: Date | string;
  status: ZonalShiftStatus;
  comment: string;
}
export type StartTime = Date | string;

export interface StartZonalShiftRequest {
  resourceIdentifier: string;
  awayFrom: string;
  expiresIn: string;
  comment: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface UpdateAutoshiftObserverNotificationStatusRequest {
  status: AutoshiftObserverNotificationStatus;
}
export interface UpdateAutoshiftObserverNotificationStatusResponse {
  status: AutoshiftObserverNotificationStatus;
}
export interface UpdatePracticeRunConfigurationRequest {
  resourceIdentifier: string;
  blockedWindows?: Array<string>;
  blockedDates?: Array<string>;
  blockingAlarms?: Array<ControlCondition>;
  outcomeAlarms?: Array<ControlCondition>;
}
export interface UpdatePracticeRunConfigurationResponse {
  arn: string;
  name: string;
  zonalAutoshiftStatus: ZonalAutoshiftStatus;
  practiceRunConfiguration: PracticeRunConfiguration;
}
export interface UpdateZonalAutoshiftConfigurationRequest {
  resourceIdentifier: string;
  zonalAutoshiftStatus: ZonalAutoshiftStatus;
}
export interface UpdateZonalAutoshiftConfigurationResponse {
  resourceIdentifier: string;
  zonalAutoshiftStatus: ZonalAutoshiftStatus;
}
export interface UpdateZonalShiftRequest {
  zonalShiftId: string;
  comment?: string;
  expiresIn?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: ValidationExceptionReason;
}> {}
export type ValidationExceptionReason =
  | "INVALID_EXPIRES_IN"
  | "INVALID_STATUS"
  | "MISSING_VALUE"
  | "INVALID_TOKEN"
  | "INVALID_RESOURCE_IDENTIFIER"
  | "INVALID_AZ"
  | "UNSUPPORTED_AZ"
  | "INVALID_ALARM_CONDITION"
  | "INVALID_CONDITION_TYPE"
  | "INVALID_PRACTICE_BLOCKER"
  | "FIS_EXPERIMENT_UPDATE_NOT_ALLOWED"
  | "AUTOSHIFT_UPDATE_NOT_ALLOWED"
  | "UNSUPPORTED_PRACTICE_CANCEL_SHIFT_TYPE";
export type Weight = number;

export type ZonalAutoshiftStatus = "ENABLED" | "DISABLED";
export interface ZonalShift {
  zonalShiftId: string;
  resourceIdentifier: string;
  awayFrom: string;
  expiryTime: Date | string;
  startTime: Date | string;
  status: ZonalShiftStatus;
  comment: string;
}
export type ZonalShiftComment = string;

export type ZonalShiftId = string;

export interface ZonalShiftInResource {
  appliedStatus: AppliedStatus;
  zonalShiftId: string;
  resourceIdentifier: string;
  awayFrom: string;
  expiryTime: Date | string;
  startTime: Date | string;
  comment: string;
  shiftType?: ShiftType;
  practiceRunOutcome?: PracticeRunOutcome;
}
export type ZonalShiftsInResource = Array<ZonalShiftInResource>;
export type ZonalShiftStatus = "ACTIVE" | "EXPIRED" | "CANCELED";
export type ZonalShiftSummaries = Array<ZonalShiftSummary>;
export interface ZonalShiftSummary {
  zonalShiftId: string;
  resourceIdentifier: string;
  awayFrom: string;
  expiryTime: Date | string;
  startTime: Date | string;
  status: ZonalShiftStatus;
  comment: string;
  shiftType?: ShiftType;
  practiceRunOutcome?: PracticeRunOutcome;
}
export declare namespace CancelPracticeRun {
  export type Input = CancelPracticeRunRequest;
  export type Output = CancelPracticeRunResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelZonalShift {
  export type Input = CancelZonalShiftRequest;
  export type Output = ZonalShift;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePracticeRunConfiguration {
  export type Input = CreatePracticeRunConfigurationRequest;
  export type Output = CreatePracticeRunConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePracticeRunConfiguration {
  export type Input = DeletePracticeRunConfigurationRequest;
  export type Output = DeletePracticeRunConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAutoshiftObserverNotificationStatus {
  export type Input = GetAutoshiftObserverNotificationStatusRequest;
  export type Output = GetAutoshiftObserverNotificationStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetManagedResource {
  export type Input = GetManagedResourceRequest;
  export type Output = GetManagedResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAutoshifts {
  export type Input = ListAutoshiftsRequest;
  export type Output = ListAutoshiftsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListManagedResources {
  export type Input = ListManagedResourcesRequest;
  export type Output = ListManagedResourcesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListZonalShifts {
  export type Input = ListZonalShiftsRequest;
  export type Output = ListZonalShiftsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartPracticeRun {
  export type Input = StartPracticeRunRequest;
  export type Output = StartPracticeRunResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartZonalShift {
  export type Input = StartZonalShiftRequest;
  export type Output = ZonalShift;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAutoshiftObserverNotificationStatus {
  export type Input = UpdateAutoshiftObserverNotificationStatusRequest;
  export type Output = UpdateAutoshiftObserverNotificationStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePracticeRunConfiguration {
  export type Input = UpdatePracticeRunConfigurationRequest;
  export type Output = UpdatePracticeRunConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateZonalAutoshiftConfiguration {
  export type Input = UpdateZonalAutoshiftConfigurationRequest;
  export type Output = UpdateZonalAutoshiftConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateZonalShift {
  export type Input = UpdateZonalShiftRequest;
  export type Output = ZonalShift;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

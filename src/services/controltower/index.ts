import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ControlTower extends AWSServiceClient {
  disableControl(
    input: DisableControlInput,
  ): Effect.Effect<
    DisableControlOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createLandingZone(
    input: CreateLandingZoneInput,
  ): Effect.Effect<
    CreateLandingZoneOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteLandingZone(
    input: DeleteLandingZoneInput,
  ): Effect.Effect<
    DeleteLandingZoneOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disableBaseline(
    input: DisableBaselineInput,
  ): Effect.Effect<
    DisableBaselineOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  enableBaseline(
    input: EnableBaselineInput,
  ): Effect.Effect<
    EnableBaselineOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  enableControl(
    input: EnableControlInput,
  ): Effect.Effect<
    EnableControlOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getBaseline(
    input: GetBaselineInput,
  ): Effect.Effect<
    GetBaselineOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getBaselineOperation(
    input: GetBaselineOperationInput,
  ): Effect.Effect<
    GetBaselineOperationOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getControlOperation(
    input: GetControlOperationInput,
  ): Effect.Effect<
    GetControlOperationOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEnabledBaseline(
    input: GetEnabledBaselineInput,
  ): Effect.Effect<
    GetEnabledBaselineOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEnabledControl(
    input: GetEnabledControlInput,
  ): Effect.Effect<
    GetEnabledControlOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLandingZone(
    input: GetLandingZoneInput,
  ): Effect.Effect<
    GetLandingZoneOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLandingZoneOperation(
    input: GetLandingZoneOperationInput,
  ): Effect.Effect<
    GetLandingZoneOperationOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBaselines(
    input: ListBaselinesInput,
  ): Effect.Effect<
    ListBaselinesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listControlOperations(
    input: ListControlOperationsInput,
  ): Effect.Effect<
    ListControlOperationsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEnabledBaselines(
    input: ListEnabledBaselinesInput,
  ): Effect.Effect<
    ListEnabledBaselinesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEnabledControls(
    input: ListEnabledControlsInput,
  ): Effect.Effect<
    ListEnabledControlsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLandingZoneOperations(
    input: ListLandingZoneOperationsInput,
  ): Effect.Effect<
    ListLandingZoneOperationsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLandingZones(
    input: ListLandingZonesInput,
  ): Effect.Effect<
    ListLandingZonesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  resetEnabledBaseline(
    input: ResetEnabledBaselineInput,
  ): Effect.Effect<
    ResetEnabledBaselineOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  resetEnabledControl(
    input: ResetEnabledControlInput,
  ): Effect.Effect<
    ResetEnabledControlOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  resetLandingZone(
    input: ResetLandingZoneInput,
  ): Effect.Effect<
    ResetLandingZoneOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateEnabledBaseline(
    input: UpdateEnabledBaselineInput,
  ): Effect.Effect<
    UpdateEnabledBaselineOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEnabledControl(
    input: UpdateEnabledControlInput,
  ): Effect.Effect<
    UpdateEnabledControlOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateLandingZone(
    input: UpdateLandingZoneInput,
  ): Effect.Effect<
    UpdateLandingZoneOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Controltower extends ControlTower {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type Arn = string;

export type BaselineArn = string;

export interface BaselineOperation {
  operationIdentifier?: string;
  operationType?: BaselineOperationType;
  status?: BaselineOperationStatus;
  startTime?: Date | string;
  endTime?: Date | string;
  statusMessage?: string;
}
export type BaselineOperationStatus = "SUCCEEDED" | "FAILED" | "IN_PROGRESS";
export type BaselineOperationType =
  | "ENABLE_BASELINE"
  | "DISABLE_BASELINE"
  | "UPDATE_ENABLED_BASELINE"
  | "RESET_ENABLED_BASELINE";
export type Baselines = Array<BaselineSummary>;
export interface BaselineSummary {
  arn: string;
  name: string;
  description?: string;
}
export type BaselineVersion = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export type ControlIdentifier = string;

export type ControlIdentifiers = Array<string>;
export interface ControlOperation {
  operationType?: ControlOperationType;
  startTime?: Date | string;
  endTime?: Date | string;
  status?: ControlOperationStatus;
  statusMessage?: string;
  operationIdentifier?: string;
  controlIdentifier?: string;
  targetIdentifier?: string;
  enabledControlIdentifier?: string;
}
export interface ControlOperationFilter {
  controlIdentifiers?: Array<string>;
  targetIdentifiers?: Array<string>;
  enabledControlIdentifiers?: Array<string>;
  statuses?: Array<ControlOperationStatus>;
  controlOperationTypes?: Array<ControlOperationType>;
}
export type ControlOperations = Array<ControlOperationSummary>;
export type ControlOperationStatus = "SUCCEEDED" | "FAILED" | "IN_PROGRESS";
export type ControlOperationStatuses = Array<ControlOperationStatus>;
export interface ControlOperationSummary {
  operationType?: ControlOperationType;
  startTime?: Date | string;
  endTime?: Date | string;
  status?: ControlOperationStatus;
  statusMessage?: string;
  operationIdentifier?: string;
  controlIdentifier?: string;
  targetIdentifier?: string;
  enabledControlIdentifier?: string;
}
export type ControlOperationType =
  | "ENABLE_CONTROL"
  | "DISABLE_CONTROL"
  | "UPDATE_ENABLED_CONTROL"
  | "RESET_ENABLED_CONTROL";
export type ControlOperationTypes = Array<ControlOperationType>;
export interface CreateLandingZoneInput {
  version: string;
  manifest: unknown;
  tags?: Record<string, string>;
}
export interface CreateLandingZoneOutput {
  arn: string;
  operationIdentifier: string;
}
export interface DeleteLandingZoneInput {
  landingZoneIdentifier: string;
}
export interface DeleteLandingZoneOutput {
  operationIdentifier: string;
}
export interface DisableBaselineInput {
  enabledBaselineIdentifier: string;
}
export interface DisableBaselineOutput {
  operationIdentifier: string;
}
export interface DisableControlInput {
  controlIdentifier: string;
  targetIdentifier: string;
}
export interface DisableControlOutput {
  operationIdentifier: string;
}
export type DriftStatus = "DRIFTED" | "IN_SYNC" | "NOT_CHECKING" | "UNKNOWN";
export type DriftStatuses = Array<DriftStatus>;
export interface DriftStatusSummary {
  driftStatus?: DriftStatus;
}
export interface EnableBaselineInput {
  baselineVersion: string;
  parameters?: Array<EnabledBaselineParameter>;
  baselineIdentifier: string;
  targetIdentifier: string;
  tags?: Record<string, string>;
}
export interface EnableBaselineOutput {
  operationIdentifier: string;
  arn: string;
}
export interface EnableControlInput {
  controlIdentifier: string;
  targetIdentifier: string;
  tags?: Record<string, string>;
  parameters?: Array<EnabledControlParameter>;
}
export interface EnableControlOutput {
  operationIdentifier: string;
  arn?: string;
}
export type EnabledBaselineBaselineIdentifiers = Array<string>;
export interface EnabledBaselineDetails {
  arn: string;
  baselineIdentifier: string;
  baselineVersion?: string;
  driftStatusSummary?: EnabledBaselineDriftStatusSummary;
  targetIdentifier: string;
  parentIdentifier?: string;
  statusSummary: EnablementStatusSummary;
  parameters?: Array<EnabledBaselineParameterSummary>;
}
export type EnabledBaselineDriftStatus = "IN_SYNC" | "DRIFTED";
export type EnabledBaselineDriftStatuses = Array<EnabledBaselineDriftStatus>;
export interface EnabledBaselineDriftStatusSummary {
  types?: EnabledBaselineDriftTypes;
}
export interface EnabledBaselineDriftTypes {
  inheritance?: EnabledBaselineInheritanceDrift;
}
export type EnabledBaselineEnablementStatuses = Array<EnablementStatus>;
export interface EnabledBaselineFilter {
  targetIdentifiers?: Array<string>;
  baselineIdentifiers?: Array<string>;
  parentIdentifiers?: Array<string>;
  statuses?: Array<EnablementStatus>;
  inheritanceDriftStatuses?: Array<EnabledBaselineDriftStatus>;
}
export interface EnabledBaselineInheritanceDrift {
  status?: EnabledBaselineDriftStatus;
}
export interface EnabledBaselineParameter {
  key: string;
  value: unknown;
}
export type EnabledBaselineParameterDocument = unknown;

export type EnabledBaselineParameters = Array<EnabledBaselineParameter>;
export type EnabledBaselineParameterSummaries =
  Array<EnabledBaselineParameterSummary>;
export interface EnabledBaselineParameterSummary {
  key: string;
  value: unknown;
}
export type EnabledBaselineParentIdentifiers = Array<string>;
export type EnabledBaselines = Array<EnabledBaselineSummary>;
export interface EnabledBaselineSummary {
  arn: string;
  baselineIdentifier: string;
  baselineVersion?: string;
  driftStatusSummary?: EnabledBaselineDriftStatusSummary;
  targetIdentifier: string;
  parentIdentifier?: string;
  statusSummary: EnablementStatusSummary;
}
export type EnabledBaselineTargetIdentifiers = Array<string>;
export interface EnabledControlDetails {
  arn?: string;
  controlIdentifier?: string;
  targetIdentifier?: string;
  targetRegions?: Array<Region>;
  statusSummary?: EnablementStatusSummary;
  driftStatusSummary?: DriftStatusSummary;
  parameters?: Array<EnabledControlParameterSummary>;
}
export interface EnabledControlFilter {
  controlIdentifiers?: Array<string>;
  statuses?: Array<EnablementStatus>;
  driftStatuses?: Array<DriftStatus>;
}
export type EnabledControlIdentifiers = Array<string>;
export interface EnabledControlParameter {
  key: string;
  value: unknown;
}
export type EnabledControlParameters = Array<EnabledControlParameter>;
export type EnabledControlParameterSummaries =
  Array<EnabledControlParameterSummary>;
export interface EnabledControlParameterSummary {
  key: string;
  value: unknown;
}
export type EnabledControls = Array<EnabledControlSummary>;
export interface EnabledControlSummary {
  controlIdentifier?: string;
  arn?: string;
  targetIdentifier?: string;
  statusSummary?: EnablementStatusSummary;
  driftStatusSummary?: DriftStatusSummary;
}
export type EnablementStatus = "SUCCEEDED" | "FAILED" | "UNDER_CHANGE";
export type EnablementStatuses = Array<EnablementStatus>;
export interface EnablementStatusSummary {
  status?: EnablementStatus;
  lastOperationIdentifier?: string;
}
export interface GetBaselineInput {
  baselineIdentifier: string;
}
export interface GetBaselineOperationInput {
  operationIdentifier: string;
}
export interface GetBaselineOperationOutput {
  baselineOperation: BaselineOperation;
}
export interface GetBaselineOutput {
  arn: string;
  name: string;
  description?: string;
}
export interface GetControlOperationInput {
  operationIdentifier: string;
}
export interface GetControlOperationOutput {
  controlOperation: ControlOperation;
}
export interface GetEnabledBaselineInput {
  enabledBaselineIdentifier: string;
}
export interface GetEnabledBaselineOutput {
  enabledBaselineDetails?: EnabledBaselineDetails;
}
export interface GetEnabledControlInput {
  enabledControlIdentifier: string;
}
export interface GetEnabledControlOutput {
  enabledControlDetails: EnabledControlDetails;
}
export interface GetLandingZoneInput {
  landingZoneIdentifier: string;
}
export interface GetLandingZoneOperationInput {
  operationIdentifier: string;
}
export interface GetLandingZoneOperationOutput {
  operationDetails: LandingZoneOperationDetail;
}
export interface GetLandingZoneOutput {
  landingZone: LandingZoneDetail;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface LandingZoneDetail {
  version: string;
  manifest: unknown;
  arn?: string;
  status?: LandingZoneStatus;
  latestAvailableVersion?: string;
  driftStatus?: LandingZoneDriftStatusSummary;
}
export type LandingZoneDriftStatus = "DRIFTED" | "IN_SYNC";
export interface LandingZoneDriftStatusSummary {
  status?: LandingZoneDriftStatus;
}
export interface LandingZoneOperationDetail {
  operationType?: LandingZoneOperationType;
  operationIdentifier?: string;
  status?: LandingZoneOperationStatus;
  startTime?: Date | string;
  endTime?: Date | string;
  statusMessage?: string;
}
export interface LandingZoneOperationFilter {
  types?: Array<LandingZoneOperationType>;
  statuses?: Array<LandingZoneOperationStatus>;
}
export type LandingZoneOperations = Array<LandingZoneOperationSummary>;
export type LandingZoneOperationStatus = "SUCCEEDED" | "FAILED" | "IN_PROGRESS";
export type LandingZoneOperationStatuses = Array<LandingZoneOperationStatus>;
export interface LandingZoneOperationSummary {
  operationType?: LandingZoneOperationType;
  operationIdentifier?: string;
  status?: LandingZoneOperationStatus;
}
export type LandingZoneOperationType = "DELETE" | "CREATE" | "UPDATE" | "RESET";
export type LandingZoneOperationTypes = Array<LandingZoneOperationType>;
export type LandingZoneStatus = "ACTIVE" | "PROCESSING" | "FAILED";
export type LandingZoneSummaries = Array<LandingZoneSummary>;
export interface LandingZoneSummary {
  arn?: string;
}
export type LandingZoneVersion = string;

export interface ListBaselinesInput {
  nextToken?: string;
  maxResults?: number;
}
export type ListBaselinesMaxResults = number;

export interface ListBaselinesOutput {
  baselines: Array<BaselineSummary>;
  nextToken?: string;
}
export interface ListControlOperationsInput {
  filter?: ControlOperationFilter;
  nextToken?: string;
  maxResults?: number;
}
export type ListControlOperationsMaxResults = number;

export type ListControlOperationsNextToken = string;

export interface ListControlOperationsOutput {
  controlOperations: Array<ControlOperationSummary>;
  nextToken?: string;
}
export interface ListEnabledBaselinesInput {
  filter?: EnabledBaselineFilter;
  nextToken?: string;
  maxResults?: number;
  includeChildren?: boolean;
}
export type ListEnabledBaselinesMaxResults = number;

export type ListEnabledBaselinesNextToken = string;

export interface ListEnabledBaselinesOutput {
  enabledBaselines: Array<EnabledBaselineSummary>;
  nextToken?: string;
}
export interface ListEnabledControlsInput {
  targetIdentifier?: string;
  nextToken?: string;
  maxResults?: number;
  filter?: EnabledControlFilter;
}
export interface ListEnabledControlsOutput {
  enabledControls: Array<EnabledControlSummary>;
  nextToken?: string;
}
export interface ListLandingZoneOperationsInput {
  filter?: LandingZoneOperationFilter;
  nextToken?: string;
  maxResults?: number;
}
export type ListLandingZoneOperationsMaxResults = number;

export interface ListLandingZoneOperationsOutput {
  landingZoneOperations: Array<LandingZoneOperationSummary>;
  nextToken?: string;
}
export interface ListLandingZonesInput {
  nextToken?: string;
  maxResults?: number;
}
export type ListLandingZonesMaxResults = number;

export interface ListLandingZonesOutput {
  landingZones: Array<LandingZoneSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags: Record<string, string>;
}
export type Manifest = unknown;

export type MaxResults = number;

export type OperationIdentifier = string;

export interface Region {
  name?: string;
}
export type RegionName = string;

export interface ResetEnabledBaselineInput {
  enabledBaselineIdentifier: string;
}
export interface ResetEnabledBaselineOutput {
  operationIdentifier: string;
}
export interface ResetEnabledControlInput {
  enabledControlIdentifier: string;
}
export interface ResetEnabledControlOutput {
  operationIdentifier: string;
}
export interface ResetLandingZoneInput {
  landingZoneIdentifier: string;
}
export interface ResetLandingZoneOutput {
  operationIdentifier: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type TagKey = string;

export type TagKeys = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export type TargetIdentifier = string;

export type TargetIdentifiers = Array<string>;
export type TargetRegions = Array<Region>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export type Timestamp = Date | string;

export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateEnabledBaselineInput {
  baselineVersion: string;
  parameters?: Array<EnabledBaselineParameter>;
  enabledBaselineIdentifier: string;
}
export interface UpdateEnabledBaselineOutput {
  operationIdentifier: string;
}
export interface UpdateEnabledControlInput {
  parameters: Array<EnabledControlParameter>;
  enabledControlIdentifier: string;
}
export interface UpdateEnabledControlOutput {
  operationIdentifier: string;
}
export interface UpdateLandingZoneInput {
  version: string;
  manifest: unknown;
  landingZoneIdentifier: string;
}
export interface UpdateLandingZoneOutput {
  operationIdentifier: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export declare namespace DisableControl {
  export type Input = DisableControlInput;
  export type Output = DisableControlOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLandingZone {
  export type Input = CreateLandingZoneInput;
  export type Output = CreateLandingZoneOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLandingZone {
  export type Input = DeleteLandingZoneInput;
  export type Output = DeleteLandingZoneOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisableBaseline {
  export type Input = DisableBaselineInput;
  export type Output = DisableBaselineOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EnableBaseline {
  export type Input = EnableBaselineInput;
  export type Output = EnableBaselineOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EnableControl {
  export type Input = EnableControlInput;
  export type Output = EnableControlOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBaseline {
  export type Input = GetBaselineInput;
  export type Output = GetBaselineOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBaselineOperation {
  export type Input = GetBaselineOperationInput;
  export type Output = GetBaselineOperationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetControlOperation {
  export type Input = GetControlOperationInput;
  export type Output = GetControlOperationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnabledBaseline {
  export type Input = GetEnabledBaselineInput;
  export type Output = GetEnabledBaselineOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnabledControl {
  export type Input = GetEnabledControlInput;
  export type Output = GetEnabledControlOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLandingZone {
  export type Input = GetLandingZoneInput;
  export type Output = GetLandingZoneOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLandingZoneOperation {
  export type Input = GetLandingZoneOperationInput;
  export type Output = GetLandingZoneOperationOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBaselines {
  export type Input = ListBaselinesInput;
  export type Output = ListBaselinesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListControlOperations {
  export type Input = ListControlOperationsInput;
  export type Output = ListControlOperationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnabledBaselines {
  export type Input = ListEnabledBaselinesInput;
  export type Output = ListEnabledBaselinesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnabledControls {
  export type Input = ListEnabledControlsInput;
  export type Output = ListEnabledControlsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLandingZoneOperations {
  export type Input = ListLandingZoneOperationsInput;
  export type Output = ListLandingZoneOperationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLandingZones {
  export type Input = ListLandingZonesInput;
  export type Output = ListLandingZonesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetEnabledBaseline {
  export type Input = ResetEnabledBaselineInput;
  export type Output = ResetEnabledBaselineOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetEnabledControl {
  export type Input = ResetEnabledControlInput;
  export type Output = ResetEnabledControlOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetLandingZone {
  export type Input = ResetLandingZoneInput;
  export type Output = ResetLandingZoneOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEnabledBaseline {
  export type Input = UpdateEnabledBaselineInput;
  export type Output = UpdateEnabledBaselineOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEnabledControl {
  export type Input = UpdateEnabledControlInput;
  export type Output = UpdateEnabledControlOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLandingZone {
  export type Input = UpdateLandingZoneInput;
  export type Output = UpdateLandingZoneOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

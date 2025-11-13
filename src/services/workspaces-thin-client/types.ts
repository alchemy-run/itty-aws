import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
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

export declare class WorkSpacesThinClient extends AWSServiceClient {
  createEnvironment(
    input: CreateEnvironmentRequest,
  ): Effect.Effect<
    CreateEnvironmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDevice(
    input: DeleteDeviceRequest,
  ): Effect.Effect<
    DeleteDeviceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEnvironment(
    input: DeleteEnvironmentRequest,
  ): Effect.Effect<
    DeleteEnvironmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deregisterDevice(
    input: DeregisterDeviceRequest,
  ): Effect.Effect<
    DeregisterDeviceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDevice(
    input: GetDeviceRequest,
  ): Effect.Effect<
    GetDeviceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEnvironment(
    input: GetEnvironmentRequest,
  ): Effect.Effect<
    GetEnvironmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSoftwareSet(
    input: GetSoftwareSetRequest,
  ): Effect.Effect<
    GetSoftwareSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDevices(
    input: ListDevicesRequest,
  ): Effect.Effect<
    ListDevicesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEnvironments(
    input: ListEnvironmentsRequest,
  ): Effect.Effect<
    ListEnvironmentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSoftwareSets(
    input: ListSoftwareSetsRequest,
  ): Effect.Effect<
    ListSoftwareSetsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDevice(
    input: UpdateDeviceRequest,
  ): Effect.Effect<
    UpdateDeviceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEnvironment(
    input: UpdateEnvironmentRequest,
  ): Effect.Effect<
    UpdateEnvironmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSoftwareSet(
    input: UpdateSoftwareSetRequest,
  ): Effect.Effect<
    UpdateSoftwareSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class WorkspacesThinClient extends WorkSpacesThinClient {}

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type ActivationCode = string;

export type ApplyTimeOf = "UTC" | "DEVICE";
export type Arn = string;

export type ClientToken = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export interface CreateEnvironmentRequest {
  name?: string;
  desktopArn: string;
  desktopEndpoint?: string;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
  maintenanceWindow?: MaintenanceWindow;
  softwareSetUpdateMode?: SoftwareSetUpdateMode;
  desiredSoftwareSetId?: string;
  kmsKeyArn?: string;
  clientToken?: string;
  tags?: Record<string, string>;
  deviceCreationTags?: Record<string, string>;
}
export interface CreateEnvironmentResponse {
  environment?: EnvironmentSummary;
}
export type DayOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
export type DayOfWeekList = Array<DayOfWeek>;
export interface DeleteDeviceRequest {
  id: string;
  clientToken?: string;
}
export interface DeleteDeviceResponse {}
export interface DeleteEnvironmentRequest {
  id: string;
  clientToken?: string;
}
export interface DeleteEnvironmentResponse {}
export interface DeregisterDeviceRequest {
  id: string;
  targetDeviceStatus?: TargetDeviceStatus;
  clientToken?: string;
}
export interface DeregisterDeviceResponse {}
export type DesktopEndpoint = string;

export type DesktopType = "workspaces" | "appstream" | "workspaces-web";
export interface Device {
  id?: string;
  serialNumber?: string;
  name?: string;
  model?: string;
  environmentId?: string;
  status?: DeviceStatus;
  currentSoftwareSetId?: string;
  currentSoftwareSetVersion?: string;
  desiredSoftwareSetId?: string;
  pendingSoftwareSetId?: string;
  pendingSoftwareSetVersion?: string;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
  softwareSetComplianceStatus?: DeviceSoftwareSetComplianceStatus;
  softwareSetUpdateStatus?: SoftwareSetUpdateStatus;
  lastConnectedAt?: Date | string;
  lastPostureAt?: Date | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  arn?: string;
  kmsKeyArn?: string;
  lastUserId?: string;
}
export type DeviceCreationTagKey = string;

export type DeviceCreationTagsMap = Record<string, string>;
export type DeviceCreationTagValue = string;

export type DeviceId = string;

export type DeviceList = Array<DeviceSummary>;
export type DeviceName = string;

export type DeviceSoftwareSetComplianceStatus =
  | "NONE"
  | "COMPLIANT"
  | "NOT_COMPLIANT";
export type DeviceStatus =
  | "REGISTERED"
  | "DEREGISTERING"
  | "DEREGISTERED"
  | "ARCHIVED";
export interface DeviceSummary {
  id?: string;
  serialNumber?: string;
  name?: string;
  model?: string;
  environmentId?: string;
  status?: DeviceStatus;
  currentSoftwareSetId?: string;
  desiredSoftwareSetId?: string;
  pendingSoftwareSetId?: string;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
  lastConnectedAt?: Date | string;
  lastPostureAt?: Date | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  arn?: string;
  lastUserId?: string;
}
export interface Environment {
  id?: string;
  name?: string;
  desktopArn?: string;
  desktopEndpoint?: string;
  desktopType?: DesktopType;
  activationCode?: string;
  registeredDevicesCount?: number;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
  maintenanceWindow?: MaintenanceWindow;
  softwareSetUpdateMode?: SoftwareSetUpdateMode;
  desiredSoftwareSetId?: string;
  pendingSoftwareSetId?: string;
  pendingSoftwareSetVersion?: string;
  softwareSetComplianceStatus?: EnvironmentSoftwareSetComplianceStatus;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  arn?: string;
  kmsKeyArn?: string;
  deviceCreationTags?: Record<string, string>;
}
export type EnvironmentId = string;

export type EnvironmentList = Array<EnvironmentSummary>;
export type EnvironmentName = string;

export type EnvironmentSoftwareSetComplianceStatus =
  | "NO_REGISTERED_DEVICES"
  | "COMPLIANT"
  | "NOT_COMPLIANT";
export interface EnvironmentSummary {
  id?: string;
  name?: string;
  desktopArn?: string;
  desktopEndpoint?: string;
  desktopType?: DesktopType;
  activationCode?: string;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
  maintenanceWindow?: MaintenanceWindow;
  softwareSetUpdateMode?: SoftwareSetUpdateMode;
  desiredSoftwareSetId?: string;
  pendingSoftwareSetId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  arn?: string;
}
export type ExceptionMessage = string;

export type FieldName = string;

export interface GetDeviceRequest {
  id: string;
}
export interface GetDeviceResponse {
  device?: Device;
}
export interface GetEnvironmentRequest {
  id: string;
}
export interface GetEnvironmentResponse {
  environment?: Environment;
}
export interface GetSoftwareSetRequest {
  id: string;
}
export interface GetSoftwareSetResponse {
  softwareSet?: SoftwareSet;
}
export type Hour = number;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
  readonly retryAfterSeconds?: number;
}> {}
export type KmsKeyArn = string;

export interface ListDevicesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListDevicesResponse {
  devices?: Array<DeviceSummary>;
  nextToken?: string;
}
export interface ListEnvironmentsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListEnvironmentsResponse {
  environments?: Array<EnvironmentSummary>;
  nextToken?: string;
}
export interface ListSoftwareSetsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListSoftwareSetsResponse {
  softwareSets?: Array<SoftwareSetSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface MaintenanceWindow {
  type: MaintenanceWindowType;
  startTimeHour?: number;
  startTimeMinute?: number;
  endTimeHour?: number;
  endTimeMinute?: number;
  daysOfTheWeek?: Array<DayOfWeek>;
  applyTimeOf?: ApplyTimeOf;
}
export type MaintenanceWindowType = "SYSTEM" | "CUSTOM";
export type MaxResults = number;

export type Minute = number;

export type PaginationToken = string;

export type QuotaCode = string;

export type ResourceId = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export type ResourceType = string;

export type RetryAfterSeconds = number;

export type ServiceCode = string;

export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export interface Software {
  name?: string;
  version?: string;
}
export type SoftwareList = Array<Software>;
export interface SoftwareSet {
  id?: string;
  version?: string;
  releasedAt?: Date | string;
  supportedUntil?: Date | string;
  validationStatus?: SoftwareSetValidationStatus;
  software?: Array<Software>;
  arn?: string;
}
export type SoftwareSetId = string;

export type SoftwareSetIdOrEmptyString = string;

export type SoftwareSetList = Array<SoftwareSetSummary>;
export interface SoftwareSetSummary {
  id?: string;
  version?: string;
  releasedAt?: Date | string;
  supportedUntil?: Date | string;
  validationStatus?: SoftwareSetValidationStatus;
  arn?: string;
}
export type SoftwareSetUpdateMode = "USE_LATEST" | "USE_DESIRED";
export type SoftwareSetUpdateSchedule =
  | "USE_MAINTENANCE_WINDOW"
  | "APPLY_IMMEDIATELY";
export type SoftwareSetUpdateStatus =
  | "AVAILABLE"
  | "IN_PROGRESS"
  | "UP_TO_DATE";
export type SoftwareSetValidationStatus = "VALIDATED" | "NOT_VALIDATED";
export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagsMap = Record<string, string>;
export type TargetDeviceStatus = "DEREGISTERED" | "ARCHIVED";
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export type Timestamp = Date | string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateDeviceRequest {
  id: string;
  name?: string;
  desiredSoftwareSetId?: string;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
}
export interface UpdateDeviceResponse {
  device?: DeviceSummary;
}
export interface UpdateEnvironmentRequest {
  id: string;
  name?: string;
  desktopArn?: string;
  desktopEndpoint?: string;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
  maintenanceWindow?: MaintenanceWindow;
  softwareSetUpdateMode?: SoftwareSetUpdateMode;
  desiredSoftwareSetId?: string;
  deviceCreationTags?: Record<string, string>;
}
export interface UpdateEnvironmentResponse {
  environment?: EnvironmentSummary;
}
export interface UpdateSoftwareSetRequest {
  id: string;
  validationStatus: SoftwareSetValidationStatus;
}
export interface UpdateSoftwareSetResponse {}
export type UserId = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
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
  | "other";
export declare namespace CreateEnvironment {
  export type Input = CreateEnvironmentRequest;
  export type Output = CreateEnvironmentResponse;
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

export declare namespace DeleteDevice {
  export type Input = DeleteDeviceRequest;
  export type Output = DeleteDeviceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEnvironment {
  export type Input = DeleteEnvironmentRequest;
  export type Output = DeleteEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterDevice {
  export type Input = DeregisterDeviceRequest;
  export type Output = DeregisterDeviceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDevice {
  export type Input = GetDeviceRequest;
  export type Output = GetDeviceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnvironment {
  export type Input = GetEnvironmentRequest;
  export type Output = GetEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSoftwareSet {
  export type Input = GetSoftwareSetRequest;
  export type Output = GetSoftwareSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDevices {
  export type Input = ListDevicesRequest;
  export type Output = ListDevicesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironments {
  export type Input = ListEnvironmentsRequest;
  export type Output = ListEnvironmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSoftwareSets {
  export type Input = ListSoftwareSetsRequest;
  export type Output = ListSoftwareSetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDevice {
  export type Input = UpdateDeviceRequest;
  export type Output = UpdateDeviceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEnvironment {
  export type Input = UpdateEnvironmentRequest;
  export type Output = UpdateEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSoftwareSet {
  export type Input = UpdateSoftwareSetRequest;
  export type Output = UpdateSoftwareSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type WorkSpacesThinClientErrors =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;

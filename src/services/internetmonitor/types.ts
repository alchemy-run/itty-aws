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

export declare class InternetMonitor extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createMonitor(
    input: CreateMonitorInput,
  ): Effect.Effect<
    CreateMonitorOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteMonitor(
    input: DeleteMonitorInput,
  ): Effect.Effect<
    DeleteMonitorOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getHealthEvent(
    input: GetHealthEventInput,
  ): Effect.Effect<
    GetHealthEventOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getInternetEvent(
    input: GetInternetEventInput,
  ): Effect.Effect<
    GetInternetEventOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMonitor(
    input: GetMonitorInput,
  ): Effect.Effect<
    GetMonitorOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQueryResults(
    input: GetQueryResultsInput,
  ): Effect.Effect<
    GetQueryResultsOutput,
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQueryStatus(
    input: GetQueryStatusInput,
  ): Effect.Effect<
    GetQueryStatusOutput,
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listHealthEvents(
    input: ListHealthEventsInput,
  ): Effect.Effect<
    ListHealthEventsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInternetEvents(
    input: ListInternetEventsInput,
  ): Effect.Effect<
    ListInternetEventsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMonitors(
    input: ListMonitorsInput,
  ): Effect.Effect<
    ListMonitorsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startQuery(
    input: StartQueryInput,
  ): Effect.Effect<
    StartQueryOutput,
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopQuery(
    input: StopQueryInput,
  ): Effect.Effect<
    StopQueryOutput,
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateMonitor(
    input: UpdateMonitorInput,
  ): Effect.Effect<
    UpdateMonitorOutput,
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Internetmonitor extends InternetMonitor {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AccountId = string;

export type Arn = string;

export interface AvailabilityMeasurement {
  ExperienceScore?: number;
  PercentOfTotalTrafficImpacted?: number;
  PercentOfClientLocationImpacted?: number;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export interface ClientLocation {
  ASName: string;
  ASNumber: number;
  Country: string;
  Subdivision?: string;
  Metro?: string;
  City: string;
  Latitude: number;
  Longitude: number;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateMonitorInput {
  MonitorName: string;
  Resources?: Array<string>;
  ClientToken?: string;
  Tags?: Record<string, string>;
  MaxCityNetworksToMonitor?: number;
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;
  TrafficPercentageToMonitor?: number;
  HealthEventsConfig?: HealthEventsConfig;
}
export interface CreateMonitorOutput {
  Arn: string;
  Status: string;
}
export interface DeleteMonitorInput {
  MonitorName: string;
}
export interface DeleteMonitorOutput {}
export type FilterList = Array<string>;
export interface FilterParameter {
  Field?: string;
  Operator?: string;
  Values?: Array<string>;
}
export type FilterParameters = Array<FilterParameter>;
export interface GetHealthEventInput {
  MonitorName: string;
  EventId: string;
  LinkedAccountId?: string;
}
export interface GetHealthEventOutput {
  EventArn: string;
  EventId: string;
  StartedAt: Date | string;
  EndedAt?: Date | string;
  CreatedAt?: Date | string;
  LastUpdatedAt: Date | string;
  ImpactedLocations: Array<ImpactedLocation>;
  Status: string;
  PercentOfTotalTrafficImpacted?: number;
  ImpactType: string;
  HealthScoreThreshold?: number;
}
export interface GetInternetEventInput {
  EventId: string;
}
export interface GetInternetEventOutput {
  EventId: string;
  EventArn: string;
  StartedAt: Date | string;
  EndedAt?: Date | string;
  ClientLocation: ClientLocation;
  EventType: string;
  EventStatus: string;
}
export interface GetMonitorInput {
  MonitorName: string;
  LinkedAccountId?: string;
}
export interface GetMonitorOutput {
  MonitorName: string;
  MonitorArn: string;
  Resources: Array<string>;
  Status: string;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  ProcessingStatus?: string;
  ProcessingStatusInfo?: string;
  Tags?: Record<string, string>;
  MaxCityNetworksToMonitor?: number;
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;
  TrafficPercentageToMonitor?: number;
  HealthEventsConfig?: HealthEventsConfig;
}
export interface GetQueryResultsInput {
  MonitorName: string;
  QueryId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetQueryResultsOutput {
  Fields: Array<QueryField>;
  Data: Array<Array<string>>;
  NextToken?: string;
}
export interface GetQueryStatusInput {
  MonitorName: string;
  QueryId: string;
}
export interface GetQueryStatusOutput {
  Status: string;
}
export interface HealthEvent {
  EventArn: string;
  EventId: string;
  StartedAt: Date | string;
  EndedAt?: Date | string;
  CreatedAt?: Date | string;
  LastUpdatedAt: Date | string;
  ImpactedLocations: Array<ImpactedLocation>;
  Status: string;
  PercentOfTotalTrafficImpacted?: number;
  ImpactType: string;
  HealthScoreThreshold?: number;
}
export type HealthEventImpactType = string;

export type HealthEventList = Array<HealthEvent>;
export type HealthEventName = string;

export interface HealthEventsConfig {
  AvailabilityScoreThreshold?: number;
  PerformanceScoreThreshold?: number;
  AvailabilityLocalHealthEventsConfig?: LocalHealthEventsConfig;
  PerformanceLocalHealthEventsConfig?: LocalHealthEventsConfig;
}
export type HealthEventStatus = string;

export interface ImpactedLocation {
  ASName: string;
  ASNumber: number;
  Country: string;
  Subdivision?: string;
  Metro?: string;
  City?: string;
  Latitude?: number;
  Longitude?: number;
  CountryCode?: string;
  SubdivisionCode?: string;
  ServiceLocation?: string;
  Status: string;
  CausedBy?: NetworkImpairment;
  InternetHealth?: InternetHealth;
  Ipv4Prefixes?: Array<string>;
}
export type ImpactedLocationsList = Array<ImpactedLocation>;
export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly message?: string;
}> {}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type InternetEventId = string;

export type InternetEventMaxResults = number;

export type InternetEventsList = Array<InternetEventSummary>;
export type InternetEventStatus = string;

export interface InternetEventSummary {
  EventId: string;
  EventArn: string;
  StartedAt: Date | string;
  EndedAt?: Date | string;
  ClientLocation: ClientLocation;
  EventType: string;
  EventStatus: string;
}
export type InternetEventType = string;

export interface InternetHealth {
  Availability?: AvailabilityMeasurement;
  Performance?: PerformanceMeasurement;
}
export interface InternetMeasurementsLogDelivery {
  S3Config?: S3Config;
}
export type Ipv4PrefixList = Array<string>;
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListHealthEventsInput {
  MonitorName: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  NextToken?: string;
  MaxResults?: number;
  EventStatus?: string;
  LinkedAccountId?: string;
}
export interface ListHealthEventsOutput {
  HealthEvents: Array<HealthEvent>;
  NextToken?: string;
}
export interface ListInternetEventsInput {
  NextToken?: string;
  MaxResults?: number;
  StartTime?: Date | string;
  EndTime?: Date | string;
  EventStatus?: string;
  EventType?: string;
}
export interface ListInternetEventsOutput {
  InternetEvents: Array<InternetEventSummary>;
  NextToken?: string;
}
export interface ListMonitorsInput {
  NextToken?: string;
  MaxResults?: number;
  MonitorStatus?: string;
  IncludeLinkedAccounts?: boolean;
}
export interface ListMonitorsOutput {
  Monitors: Array<Monitor>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  ResourceArn: string;
}
export interface ListTagsForResourceOutput {
  Tags?: Record<string, string>;
}
export interface LocalHealthEventsConfig {
  Status?: string;
  HealthScoreThreshold?: number;
  MinTrafficImpact?: number;
}
export type LocalHealthEventsConfigStatus = string;

export type LogDeliveryStatus = string;

export type MaxCityNetworksToMonitor = number;

export type MaxResults = number;

export interface Monitor {
  MonitorName: string;
  MonitorArn: string;
  Status: string;
  ProcessingStatus?: string;
}
export type MonitorArn = string;

export type MonitorConfigState = string;

export type MonitorList = Array<Monitor>;
export type MonitorProcessingStatusCode = string;

export interface Network {
  ASName: string;
  ASNumber: number;
}
export interface NetworkImpairment {
  Networks: Array<Network>;
  AsPath: Array<Network>;
  NetworkEventType: string;
}
export type NetworkList = Array<Network>;
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export type Operator = string;

export type Percentage = number;

export interface PerformanceMeasurement {
  ExperienceScore?: number;
  PercentOfTotalTrafficImpacted?: number;
  PercentOfClientLocationImpacted?: number;
  RoundTripTime?: RoundTripTime;
}
export type QueryData = Array<Array<string>>;
export interface QueryField {
  Name?: string;
  Type?: string;
}
export type QueryFields = Array<QueryField>;
export type QueryMaxResults = number;

export type QueryRow = Array<string>;
export type QueryStatus = string;

export type QueryType = string;

export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface RoundTripTime {
  P50?: number;
  P90?: number;
  P95?: number;
}
export interface S3Config {
  BucketName?: string;
  BucketPrefix?: string;
  LogDeliveryStatus?: string;
}
export type SetOfARNs = Array<string>;
export interface StartQueryInput {
  MonitorName: string;
  StartTime: Date | string;
  EndTime: Date | string;
  QueryType: string;
  FilterParameters?: Array<FilterParameter>;
  LinkedAccountId?: string;
}
export interface StartQueryOutput {
  QueryId: string;
}
export interface StopQueryInput {
  MonitorName: string;
  QueryId: string;
}
export interface StopQueryOutput {}
export type TagKey = string;

export type TagKeys = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message?: string;
}> {}
export type TrafficPercentageToMonitor = number;

export type TriangulationEventType = string;

export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateMonitorInput {
  MonitorName: string;
  ResourcesToAdd?: Array<string>;
  ResourcesToRemove?: Array<string>;
  Status?: string;
  ClientToken?: string;
  MaxCityNetworksToMonitor?: number;
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;
  TrafficPercentageToMonitor?: number;
  HealthEventsConfig?: HealthEventsConfig;
}
export interface UpdateMonitorOutput {
  MonitorArn: string;
  Status: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateMonitor {
  export type Input = CreateMonitorInput;
  export type Output = CreateMonitorOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMonitor {
  export type Input = DeleteMonitorInput;
  export type Output = DeleteMonitorOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetHealthEvent {
  export type Input = GetHealthEventInput;
  export type Output = GetHealthEventOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInternetEvent {
  export type Input = GetInternetEventInput;
  export type Output = GetInternetEventOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMonitor {
  export type Input = GetMonitorInput;
  export type Output = GetMonitorOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQueryResults {
  export type Input = GetQueryResultsInput;
  export type Output = GetQueryResultsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQueryStatus {
  export type Input = GetQueryStatusInput;
  export type Output = GetQueryStatusOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListHealthEvents {
  export type Input = ListHealthEventsInput;
  export type Output = ListHealthEventsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInternetEvents {
  export type Input = ListInternetEventsInput;
  export type Output = ListInternetEventsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMonitors {
  export type Input = ListMonitorsInput;
  export type Output = ListMonitorsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartQuery {
  export type Input = StartQueryInput;
  export type Output = StartQueryOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopQuery {
  export type Input = StopQueryInput;
  export type Output = StopQueryOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMonitor {
  export type Input = UpdateMonitorInput;
  export type Output = UpdateMonitorOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type InternetMonitorErrors =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | InternalServerException
  | LimitExceededException
  | NotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | TooManyRequestsException
  | ValidationException
  | CommonAwsError;

import type { Effect, Stream, Data as EffectData } from "effect";
import type { ResponseError } from "@effect/platform/HttpClientError";
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

export declare class IoTEventsData extends AWSServiceClient {
  batchAcknowledgeAlarm(
    input: BatchAcknowledgeAlarmRequest,
  ): Effect.Effect<
    BatchAcknowledgeAlarmResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  batchDeleteDetector(
    input: BatchDeleteDetectorRequest,
  ): Effect.Effect<
    BatchDeleteDetectorResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  batchDisableAlarm(
    input: BatchDisableAlarmRequest,
  ): Effect.Effect<
    BatchDisableAlarmResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  batchEnableAlarm(
    input: BatchEnableAlarmRequest,
  ): Effect.Effect<
    BatchEnableAlarmResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  batchPutMessage(
    input: BatchPutMessageRequest,
  ): Effect.Effect<
    BatchPutMessageResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  batchResetAlarm(
    input: BatchResetAlarmRequest,
  ): Effect.Effect<
    BatchResetAlarmResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  batchSnoozeAlarm(
    input: BatchSnoozeAlarmRequest,
  ): Effect.Effect<
    BatchSnoozeAlarmResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  batchUpdateDetector(
    input: BatchUpdateDetectorRequest,
  ): Effect.Effect<
    BatchUpdateDetectorResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAlarm(
    input: DescribeAlarmRequest,
  ): Effect.Effect<
    DescribeAlarmResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDetector(
    input: DescribeDetectorRequest,
  ): Effect.Effect<
    DescribeDetectorResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listAlarms(
    input: ListAlarmsRequest,
  ): Effect.Effect<
    ListAlarmsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listDetectors(
    input: ListDetectorsRequest,
  ): Effect.Effect<
    ListDetectorsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
}

export declare class IotEventsData extends IoTEventsData {}

export interface AcknowledgeActionConfiguration {
  note?: string;
}
export interface AcknowledgeAlarmActionRequest {
  requestId: string;
  alarmModelName: string;
  keyValue?: string;
  note?: string;
}
export type AcknowledgeAlarmActionRequests =
  Array<AcknowledgeAlarmActionRequest>;
export interface Alarm {
  alarmModelName?: string;
  alarmModelVersion?: string;
  keyValue?: string;
  alarmState?: AlarmState;
  severity?: number;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
}
export type AlarmModelName = string;

export type AlarmModelVersion = string;

export interface AlarmState {
  stateName?: AlarmStateName;
  ruleEvaluation?: RuleEvaluation;
  customerAction?: CustomerAction;
  systemEvent?: SystemEvent;
}
export type AlarmStateName =
  | "DISABLED"
  | "NORMAL"
  | "ACTIVE"
  | "ACKNOWLEDGED"
  | "SNOOZE_DISABLED"
  | "LATCHED";
export type AlarmSummaries = Array<AlarmSummary>;
export interface AlarmSummary {
  alarmModelName?: string;
  alarmModelVersion?: string;
  keyValue?: string;
  stateName?: AlarmStateName;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
}
export interface BatchAcknowledgeAlarmRequest {
  acknowledgeActionRequests: Array<AcknowledgeAlarmActionRequest>;
}
export interface BatchAcknowledgeAlarmResponse {
  errorEntries?: Array<BatchAlarmActionErrorEntry>;
}
export type BatchAlarmActionErrorEntries = Array<BatchAlarmActionErrorEntry>;
export interface BatchAlarmActionErrorEntry {
  requestId?: string;
  errorCode?: ErrorCode;
  errorMessage?: string;
}
export type BatchDeleteDetectorErrorEntries =
  Array<BatchDeleteDetectorErrorEntry>;
export interface BatchDeleteDetectorErrorEntry {
  messageId?: string;
  errorCode?: ErrorCode;
  errorMessage?: string;
}
export interface BatchDeleteDetectorRequest {
  detectors: Array<DeleteDetectorRequest>;
}
export interface BatchDeleteDetectorResponse {
  batchDeleteDetectorErrorEntries?: Array<BatchDeleteDetectorErrorEntry>;
}
export interface BatchDisableAlarmRequest {
  disableActionRequests: Array<DisableAlarmActionRequest>;
}
export interface BatchDisableAlarmResponse {
  errorEntries?: Array<BatchAlarmActionErrorEntry>;
}
export interface BatchEnableAlarmRequest {
  enableActionRequests: Array<EnableAlarmActionRequest>;
}
export interface BatchEnableAlarmResponse {
  errorEntries?: Array<BatchAlarmActionErrorEntry>;
}
export type BatchPutMessageErrorEntries = Array<BatchPutMessageErrorEntry>;
export interface BatchPutMessageErrorEntry {
  messageId?: string;
  errorCode?: ErrorCode;
  errorMessage?: string;
}
export interface BatchPutMessageRequest {
  messages: Array<Message>;
}
export interface BatchPutMessageResponse {
  BatchPutMessageErrorEntries?: Array<BatchPutMessageErrorEntry>;
}
export interface BatchResetAlarmRequest {
  resetActionRequests: Array<ResetAlarmActionRequest>;
}
export interface BatchResetAlarmResponse {
  errorEntries?: Array<BatchAlarmActionErrorEntry>;
}
export interface BatchSnoozeAlarmRequest {
  snoozeActionRequests: Array<SnoozeAlarmActionRequest>;
}
export interface BatchSnoozeAlarmResponse {
  errorEntries?: Array<BatchAlarmActionErrorEntry>;
}
export type BatchUpdateDetectorErrorEntries =
  Array<BatchUpdateDetectorErrorEntry>;
export interface BatchUpdateDetectorErrorEntry {
  messageId?: string;
  errorCode?: ErrorCode;
  errorMessage?: string;
}
export interface BatchUpdateDetectorRequest {
  detectors: Array<UpdateDetectorRequest>;
}
export interface BatchUpdateDetectorResponse {
  batchUpdateDetectorErrorEntries?: Array<BatchUpdateDetectorErrorEntry>;
}
export type ComparisonOperator =
  | "GREATER"
  | "GREATER_OR_EQUAL"
  | "LESS"
  | "LESS_OR_EQUAL"
  | "EQUAL"
  | "NOT_EQUAL";
export interface CustomerAction {
  actionName?: CustomerActionName;
  snoozeActionConfiguration?: SnoozeActionConfiguration;
  enableActionConfiguration?: EnableActionConfiguration;
  disableActionConfiguration?: DisableActionConfiguration;
  acknowledgeActionConfiguration?: AcknowledgeActionConfiguration;
  resetActionConfiguration?: ResetActionConfiguration;
}
export type CustomerActionName =
  | "SNOOZE"
  | "ENABLE"
  | "DISABLE"
  | "ACKNOWLEDGE"
  | "RESET";
export interface DeleteDetectorRequest {
  messageId: string;
  detectorModelName: string;
  keyValue?: string;
}
export type DeleteDetectorRequests = Array<DeleteDetectorRequest>;
export interface DescribeAlarmRequest {
  alarmModelName: string;
  keyValue?: string;
}
export interface DescribeAlarmResponse {
  alarm?: Alarm;
}
export interface DescribeDetectorRequest {
  detectorModelName: string;
  keyValue?: string;
}
export interface DescribeDetectorResponse {
  detector?: Detector;
}
export interface Detector {
  detectorModelName?: string;
  keyValue?: string;
  detectorModelVersion?: string;
  state?: DetectorState;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
}
export type DetectorModelName = string;

export type DetectorModelVersion = string;

export interface DetectorState {
  stateName: string;
  variables: Array<Variable>;
  timers: Array<Timer>;
}
export interface DetectorStateDefinition {
  stateName: string;
  variables: Array<VariableDefinition>;
  timers: Array<TimerDefinition>;
}
export interface DetectorStateSummary {
  stateName?: string;
}
export type DetectorSummaries = Array<DetectorSummary>;
export interface DetectorSummary {
  detectorModelName?: string;
  keyValue?: string;
  detectorModelVersion?: string;
  state?: DetectorStateSummary;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
}
export interface DisableActionConfiguration {
  note?: string;
}
export interface DisableAlarmActionRequest {
  requestId: string;
  alarmModelName: string;
  keyValue?: string;
  note?: string;
}
export type DisableAlarmActionRequests = Array<DisableAlarmActionRequest>;
export interface EnableActionConfiguration {
  note?: string;
}
export interface EnableAlarmActionRequest {
  requestId: string;
  alarmModelName: string;
  keyValue?: string;
  note?: string;
}
export type EnableAlarmActionRequests = Array<EnableAlarmActionRequest>;
export type EphemeralInputName = string;

export type EpochMilliTimestamp = number;

export type ErrorCode =
  | "ResourceNotFoundException"
  | "InvalidRequestException"
  | "InternalFailureException"
  | "ServiceUnavailableException"
  | "ThrottlingException";
export type ErrorMessage = string;

export type EventType = "STATE_CHANGE";
export type InputPropertyValue = string;

export declare class InternalFailureException extends EffectData.TaggedError(
  "InternalFailureException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export type KeyValue = string;

export interface ListAlarmsRequest {
  alarmModelName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAlarmsResponse {
  alarmSummaries?: Array<AlarmSummary>;
  nextToken?: string;
}
export interface ListDetectorsRequest {
  detectorModelName: string;
  stateName?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDetectorsResponse {
  detectorSummaries?: Array<DetectorSummary>;
  nextToken?: string;
}
export type MaxResults = number;

export interface Message {
  messageId: string;
  inputName: string;
  payload: Uint8Array | string | Stream.Stream<Uint8Array>;
  timestamp?: TimestampValue;
}
export type MessageId = string;

export type Messages = Array<Message>;
export type NextToken = string;

export type Note = string;

export type Payload = Uint8Array | string;

export type RequestId = string;

export interface ResetActionConfiguration {
  note?: string;
}
export interface ResetAlarmActionRequest {
  requestId: string;
  alarmModelName: string;
  keyValue?: string;
  note?: string;
}
export type ResetAlarmActionRequests = Array<ResetAlarmActionRequest>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface RuleEvaluation {
  simpleRuleEvaluation?: SimpleRuleEvaluation;
}
export type Seconds = number;

export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export type Severity = number;

export interface SimpleRuleEvaluation {
  inputPropertyValue?: string;
  operator?: ComparisonOperator;
  thresholdValue?: string;
}
export interface SnoozeActionConfiguration {
  snoozeDuration?: number;
  note?: string;
}
export interface SnoozeAlarmActionRequest {
  requestId: string;
  alarmModelName: string;
  keyValue?: string;
  note?: string;
  snoozeDuration: number;
}
export type SnoozeAlarmActionRequests = Array<SnoozeAlarmActionRequest>;
export type SnoozeDuration = number;

export interface StateChangeConfiguration {
  triggerType?: TriggerType;
}
export type StateName = string;

export interface SystemEvent {
  eventType?: EventType;
  stateChangeConfiguration?: StateChangeConfiguration;
}
export type ThresholdValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface Timer {
  name: string;
  timestamp: Date | string;
}
export interface TimerDefinition {
  name: string;
  seconds: number;
}
export type TimerDefinitions = Array<TimerDefinition>;
export type TimerName = string;

export type Timers = Array<Timer>;
export type Timestamp = Date | string;

export interface TimestampValue {
  timeInMillis?: number;
}
export type TriggerType = "SNOOZE_TIMEOUT";
export interface UpdateDetectorRequest {
  messageId: string;
  detectorModelName: string;
  keyValue?: string;
  state: DetectorStateDefinition;
}
export type UpdateDetectorRequests = Array<UpdateDetectorRequest>;
export interface Variable {
  name: string;
  value: string;
}
export interface VariableDefinition {
  name: string;
  value: string;
}
export type VariableDefinitions = Array<VariableDefinition>;
export type VariableName = string;

export type Variables = Array<Variable>;
export type VariableValue = string;

export declare namespace BatchAcknowledgeAlarm {
  export type Input = BatchAcknowledgeAlarmRequest;
  export type Output = BatchAcknowledgeAlarmResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchDeleteDetector {
  export type Input = BatchDeleteDetectorRequest;
  export type Output = BatchDeleteDetectorResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchDisableAlarm {
  export type Input = BatchDisableAlarmRequest;
  export type Output = BatchDisableAlarmResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchEnableAlarm {
  export type Input = BatchEnableAlarmRequest;
  export type Output = BatchEnableAlarmResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchPutMessage {
  export type Input = BatchPutMessageRequest;
  export type Output = BatchPutMessageResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchResetAlarm {
  export type Input = BatchResetAlarmRequest;
  export type Output = BatchResetAlarmResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchSnoozeAlarm {
  export type Input = BatchSnoozeAlarmRequest;
  export type Output = BatchSnoozeAlarmResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchUpdateDetector {
  export type Input = BatchUpdateDetectorRequest;
  export type Output = BatchUpdateDetectorResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAlarm {
  export type Input = DescribeAlarmRequest;
  export type Output = DescribeAlarmResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDetector {
  export type Input = DescribeDetectorRequest;
  export type Output = DescribeDetectorResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAlarms {
  export type Input = ListAlarmsRequest;
  export type Output = ListAlarmsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDetectors {
  export type Input = ListDetectorsRequest;
  export type Output = ListDetectorsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

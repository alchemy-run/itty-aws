import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class DescribeAlarmRequest extends Schema.Class<DescribeAlarmRequest>("DescribeAlarmRequest")({alarmModelName: Schema.String, keyValue: Schema.optional(Schema.String)}) {}
export class DescribeDetectorRequest extends Schema.Class<DescribeDetectorRequest>("DescribeDetectorRequest")({detectorModelName: Schema.String, keyValue: Schema.optional(Schema.String)}) {}
export class ListAlarmsRequest extends Schema.Class<ListAlarmsRequest>("ListAlarmsRequest")({alarmModelName: Schema.String, nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number)}) {}
export class ListDetectorsRequest extends Schema.Class<ListDetectorsRequest>("ListDetectorsRequest")({detectorModelName: Schema.String, stateName: Schema.optional(Schema.String), nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number)}) {}
export class AcknowledgeAlarmActionRequest extends Schema.Class<AcknowledgeAlarmActionRequest>("AcknowledgeAlarmActionRequest")({requestId: Schema.String, alarmModelName: Schema.String, keyValue: Schema.optional(Schema.String), note: Schema.optional(Schema.String)}) {}
export const AcknowledgeAlarmActionRequests = Schema.Array(AcknowledgeAlarmActionRequest);
export class DeleteDetectorRequest extends Schema.Class<DeleteDetectorRequest>("DeleteDetectorRequest")({messageId: Schema.String, detectorModelName: Schema.String, keyValue: Schema.optional(Schema.String)}) {}
export const DeleteDetectorRequests = Schema.Array(DeleteDetectorRequest);
export class DisableAlarmActionRequest extends Schema.Class<DisableAlarmActionRequest>("DisableAlarmActionRequest")({requestId: Schema.String, alarmModelName: Schema.String, keyValue: Schema.optional(Schema.String), note: Schema.optional(Schema.String)}) {}
export const DisableAlarmActionRequests = Schema.Array(DisableAlarmActionRequest);
export class EnableAlarmActionRequest extends Schema.Class<EnableAlarmActionRequest>("EnableAlarmActionRequest")({requestId: Schema.String, alarmModelName: Schema.String, keyValue: Schema.optional(Schema.String), note: Schema.optional(Schema.String)}) {}
export const EnableAlarmActionRequests = Schema.Array(EnableAlarmActionRequest);
export class ResetAlarmActionRequest extends Schema.Class<ResetAlarmActionRequest>("ResetAlarmActionRequest")({requestId: Schema.String, alarmModelName: Schema.String, keyValue: Schema.optional(Schema.String), note: Schema.optional(Schema.String)}) {}
export const ResetAlarmActionRequests = Schema.Array(ResetAlarmActionRequest);
export class SnoozeAlarmActionRequest extends Schema.Class<SnoozeAlarmActionRequest>("SnoozeAlarmActionRequest")({requestId: Schema.String, alarmModelName: Schema.String, keyValue: Schema.optional(Schema.String), note: Schema.optional(Schema.String), snoozeDuration: Schema.Number}) {}
export const SnoozeAlarmActionRequests = Schema.Array(SnoozeAlarmActionRequest);
export class BatchAcknowledgeAlarmRequest extends Schema.Class<BatchAcknowledgeAlarmRequest>("BatchAcknowledgeAlarmRequest")({acknowledgeActionRequests: AcknowledgeAlarmActionRequests}) {}
export class BatchDeleteDetectorRequest extends Schema.Class<BatchDeleteDetectorRequest>("BatchDeleteDetectorRequest")({detectors: DeleteDetectorRequests}) {}
export class BatchDisableAlarmRequest extends Schema.Class<BatchDisableAlarmRequest>("BatchDisableAlarmRequest")({disableActionRequests: DisableAlarmActionRequests}) {}
export class BatchEnableAlarmRequest extends Schema.Class<BatchEnableAlarmRequest>("BatchEnableAlarmRequest")({enableActionRequests: EnableAlarmActionRequests}) {}
export class BatchResetAlarmRequest extends Schema.Class<BatchResetAlarmRequest>("BatchResetAlarmRequest")({resetActionRequests: ResetAlarmActionRequests}) {}
export class BatchSnoozeAlarmRequest extends Schema.Class<BatchSnoozeAlarmRequest>("BatchSnoozeAlarmRequest")({snoozeActionRequests: SnoozeAlarmActionRequests}) {}
export class TimestampValue extends Schema.Class<TimestampValue>("TimestampValue")({timeInMillis: Schema.optional(Schema.Number)}) {}
export class Message extends Schema.Class<Message>("Message")({messageId: Schema.String, inputName: Schema.String, payload: StreamBody(), timestamp: Schema.optional(TimestampValue)}) {}
export const Messages = Schema.Array(Message);
export class AlarmSummary extends Schema.Class<AlarmSummary>("AlarmSummary")({alarmModelName: Schema.optional(Schema.String), alarmModelVersion: Schema.optional(Schema.String), keyValue: Schema.optional(Schema.String), stateName: Schema.optional(Schema.String), creationTime: Schema.optional(Schema.Date), lastUpdateTime: Schema.optional(Schema.Date)}) {}
export const AlarmSummaries = Schema.Array(AlarmSummary);
export class VariableDefinition extends Schema.Class<VariableDefinition>("VariableDefinition")({name: Schema.String, value: Schema.String}) {}
export const VariableDefinitions = Schema.Array(VariableDefinition);
export class TimerDefinition extends Schema.Class<TimerDefinition>("TimerDefinition")({name: Schema.String, seconds: Schema.Number}) {}
export const TimerDefinitions = Schema.Array(TimerDefinition);
export class BatchAlarmActionErrorEntry extends Schema.Class<BatchAlarmActionErrorEntry>("BatchAlarmActionErrorEntry")({requestId: Schema.optional(Schema.String), errorCode: Schema.optional(Schema.String), errorMessage: Schema.optional(Schema.String)}) {}
export const BatchAlarmActionErrorEntries = Schema.Array(BatchAlarmActionErrorEntry);
export class BatchDisableAlarmResponse extends Schema.Class<BatchDisableAlarmResponse>("BatchDisableAlarmResponse")({errorEntries: Schema.optional(BatchAlarmActionErrorEntries)}) {}
export class BatchEnableAlarmResponse extends Schema.Class<BatchEnableAlarmResponse>("BatchEnableAlarmResponse")({errorEntries: Schema.optional(BatchAlarmActionErrorEntries)}) {}
export class BatchPutMessageRequest extends Schema.Class<BatchPutMessageRequest>("BatchPutMessageRequest")({messages: Messages}) {}
export class BatchResetAlarmResponse extends Schema.Class<BatchResetAlarmResponse>("BatchResetAlarmResponse")({errorEntries: Schema.optional(BatchAlarmActionErrorEntries)}) {}
export class BatchSnoozeAlarmResponse extends Schema.Class<BatchSnoozeAlarmResponse>("BatchSnoozeAlarmResponse")({errorEntries: Schema.optional(BatchAlarmActionErrorEntries)}) {}
export class ListAlarmsResponse extends Schema.Class<ListAlarmsResponse>("ListAlarmsResponse")({alarmSummaries: Schema.optional(AlarmSummaries), nextToken: Schema.optional(Schema.String)}) {}
export class DetectorStateDefinition extends Schema.Class<DetectorStateDefinition>("DetectorStateDefinition")({stateName: Schema.String, variables: VariableDefinitions, timers: TimerDefinitions}) {}
export class DetectorStateSummary extends Schema.Class<DetectorStateSummary>("DetectorStateSummary")({stateName: Schema.optional(Schema.String)}) {}
export class BatchDeleteDetectorErrorEntry extends Schema.Class<BatchDeleteDetectorErrorEntry>("BatchDeleteDetectorErrorEntry")({messageId: Schema.optional(Schema.String), errorCode: Schema.optional(Schema.String), errorMessage: Schema.optional(Schema.String)}) {}
export const BatchDeleteDetectorErrorEntries = Schema.Array(BatchDeleteDetectorErrorEntry);
export class UpdateDetectorRequest extends Schema.Class<UpdateDetectorRequest>("UpdateDetectorRequest")({messageId: Schema.String, detectorModelName: Schema.String, keyValue: Schema.optional(Schema.String), state: DetectorStateDefinition}) {}
export const UpdateDetectorRequests = Schema.Array(UpdateDetectorRequest);
export class DetectorSummary extends Schema.Class<DetectorSummary>("DetectorSummary")({detectorModelName: Schema.optional(Schema.String), keyValue: Schema.optional(Schema.String), detectorModelVersion: Schema.optional(Schema.String), state: Schema.optional(DetectorStateSummary), creationTime: Schema.optional(Schema.Date), lastUpdateTime: Schema.optional(Schema.Date)}) {}
export const DetectorSummaries = Schema.Array(DetectorSummary);
export class Variable extends Schema.Class<Variable>("Variable")({name: Schema.String, value: Schema.String}) {}
export const Variables = Schema.Array(Variable);
export class Timer extends Schema.Class<Timer>("Timer")({name: Schema.String, timestamp: Schema.Date}) {}
export const Timers = Schema.Array(Timer);
export class BatchAcknowledgeAlarmResponse extends Schema.Class<BatchAcknowledgeAlarmResponse>("BatchAcknowledgeAlarmResponse")({errorEntries: Schema.optional(BatchAlarmActionErrorEntries)}) {}
export class BatchDeleteDetectorResponse extends Schema.Class<BatchDeleteDetectorResponse>("BatchDeleteDetectorResponse")({batchDeleteDetectorErrorEntries: Schema.optional(BatchDeleteDetectorErrorEntries)}) {}
export class InternalFailureException extends Schema.Class<InternalFailureException>("InternalFailureException")({message: Schema.optional(Schema.String)}) {}
export class InvalidRequestException extends Schema.Class<InvalidRequestException>("InvalidRequestException")({message: Schema.optional(Schema.String)}) {}
export class ServiceUnavailableException extends Schema.Class<ServiceUnavailableException>("ServiceUnavailableException")({message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.optional(Schema.String)}) {}
export class BatchUpdateDetectorRequest extends Schema.Class<BatchUpdateDetectorRequest>("BatchUpdateDetectorRequest")({detectors: UpdateDetectorRequests}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class ListDetectorsResponse extends Schema.Class<ListDetectorsResponse>("ListDetectorsResponse")({detectorSummaries: Schema.optional(DetectorSummaries), nextToken: Schema.optional(Schema.String)}) {}
export class DetectorState extends Schema.Class<DetectorState>("DetectorState")({stateName: Schema.String, variables: Variables, timers: Timers}) {}
export class SimpleRuleEvaluation extends Schema.Class<SimpleRuleEvaluation>("SimpleRuleEvaluation")({inputPropertyValue: Schema.optional(Schema.String), operator: Schema.optional(Schema.String), thresholdValue: Schema.optional(Schema.String)}) {}
export class SnoozeActionConfiguration extends Schema.Class<SnoozeActionConfiguration>("SnoozeActionConfiguration")({snoozeDuration: Schema.optional(Schema.Number), note: Schema.optional(Schema.String)}) {}
export class EnableActionConfiguration extends Schema.Class<EnableActionConfiguration>("EnableActionConfiguration")({note: Schema.optional(Schema.String)}) {}
export class DisableActionConfiguration extends Schema.Class<DisableActionConfiguration>("DisableActionConfiguration")({note: Schema.optional(Schema.String)}) {}
export class AcknowledgeActionConfiguration extends Schema.Class<AcknowledgeActionConfiguration>("AcknowledgeActionConfiguration")({note: Schema.optional(Schema.String)}) {}
export class ResetActionConfiguration extends Schema.Class<ResetActionConfiguration>("ResetActionConfiguration")({note: Schema.optional(Schema.String)}) {}
export class StateChangeConfiguration extends Schema.Class<StateChangeConfiguration>("StateChangeConfiguration")({triggerType: Schema.optional(Schema.String)}) {}
export class BatchPutMessageErrorEntry extends Schema.Class<BatchPutMessageErrorEntry>("BatchPutMessageErrorEntry")({messageId: Schema.optional(Schema.String), errorCode: Schema.optional(Schema.String), errorMessage: Schema.optional(Schema.String)}) {}
export const BatchPutMessageErrorEntries = Schema.Array(BatchPutMessageErrorEntry);
export class Detector extends Schema.Class<Detector>("Detector")({detectorModelName: Schema.optional(Schema.String), keyValue: Schema.optional(Schema.String), detectorModelVersion: Schema.optional(Schema.String), state: Schema.optional(DetectorState), creationTime: Schema.optional(Schema.Date), lastUpdateTime: Schema.optional(Schema.Date)}) {}
export class RuleEvaluation extends Schema.Class<RuleEvaluation>("RuleEvaluation")({simpleRuleEvaluation: Schema.optional(SimpleRuleEvaluation)}) {}
export class CustomerAction extends Schema.Class<CustomerAction>("CustomerAction")({actionName: Schema.optional(Schema.String), snoozeActionConfiguration: Schema.optional(SnoozeActionConfiguration), enableActionConfiguration: Schema.optional(EnableActionConfiguration), disableActionConfiguration: Schema.optional(DisableActionConfiguration), acknowledgeActionConfiguration: Schema.optional(AcknowledgeActionConfiguration), resetActionConfiguration: Schema.optional(ResetActionConfiguration)}) {}
export class SystemEvent extends Schema.Class<SystemEvent>("SystemEvent")({eventType: Schema.optional(Schema.String), stateChangeConfiguration: Schema.optional(StateChangeConfiguration)}) {}
export class BatchPutMessageResponse extends Schema.Class<BatchPutMessageResponse>("BatchPutMessageResponse")({BatchPutMessageErrorEntries: Schema.optional(BatchPutMessageErrorEntries)}) {}
export class DescribeDetectorResponse extends Schema.Class<DescribeDetectorResponse>("DescribeDetectorResponse")({detector: Schema.optional(Detector)}) {}
export class AlarmState extends Schema.Class<AlarmState>("AlarmState")({stateName: Schema.optional(Schema.String), ruleEvaluation: Schema.optional(RuleEvaluation), customerAction: Schema.optional(CustomerAction), systemEvent: Schema.optional(SystemEvent)}) {}
export class BatchUpdateDetectorErrorEntry extends Schema.Class<BatchUpdateDetectorErrorEntry>("BatchUpdateDetectorErrorEntry")({messageId: Schema.optional(Schema.String), errorCode: Schema.optional(Schema.String), errorMessage: Schema.optional(Schema.String)}) {}
export const BatchUpdateDetectorErrorEntries = Schema.Array(BatchUpdateDetectorErrorEntry);
export class Alarm extends Schema.Class<Alarm>("Alarm")({alarmModelName: Schema.optional(Schema.String), alarmModelVersion: Schema.optional(Schema.String), keyValue: Schema.optional(Schema.String), alarmState: Schema.optional(AlarmState), severity: Schema.optional(Schema.Number), creationTime: Schema.optional(Schema.Date), lastUpdateTime: Schema.optional(Schema.Date)}) {}
export class BatchUpdateDetectorResponse extends Schema.Class<BatchUpdateDetectorResponse>("BatchUpdateDetectorResponse")({batchUpdateDetectorErrorEntries: Schema.optional(BatchUpdateDetectorErrorEntries)}) {}
export class DescribeAlarmResponse extends Schema.Class<DescribeAlarmResponse>("DescribeAlarmResponse")({alarm: Schema.optional(Alarm)}) {}

//# Errors
export class InternalFailureExceptionError extends Schema.TaggedError<InternalFailureExceptionError>()("InternalFailureException", InternalFailureException.fields) {};
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException.fields) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const batchAcknowledgeAlarm = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-23", uri: "/alarms/acknowledge", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchAcknowledgeAlarm" }, BatchAcknowledgeAlarmRequest, BatchAcknowledgeAlarmResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchDeleteDetector = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-23", uri: "/detectors/delete", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchDeleteDetector" }, BatchDeleteDetectorRequest, BatchDeleteDetectorResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchDisableAlarm = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-23", uri: "/alarms/disable", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchDisableAlarm" }, BatchDisableAlarmRequest, BatchDisableAlarmResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchEnableAlarm = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-23", uri: "/alarms/enable", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchEnableAlarm" }, BatchEnableAlarmRequest, BatchEnableAlarmResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchResetAlarm = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-23", uri: "/alarms/reset", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchResetAlarm" }, BatchResetAlarmRequest, BatchResetAlarmResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchSnoozeAlarm = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-23", uri: "/alarms/snooze", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchSnoozeAlarm" }, BatchSnoozeAlarmRequest, BatchSnoozeAlarmResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAlarms = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-23", uri: "/alarms/{alarmModelName}", method: "GET", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.ListAlarms" }, ListAlarmsRequest, ListAlarmsResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listDetectors = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-23", uri: "/detectors/{detectorModelName}", method: "GET", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.ListDetectors" }, ListDetectorsRequest, ListDetectorsResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchPutMessage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-23", uri: "/inputs/messages", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchPutMessage" }, BatchPutMessageRequest, BatchPutMessageResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const describeDetector = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-23", uri: "/detectors/{detectorModelName}/keyValues", method: "GET", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.DescribeDetector" }, DescribeDetectorRequest, DescribeDetectorResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchUpdateDetector = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-23", uri: "/detectors", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchUpdateDetector" }, BatchUpdateDetectorRequest, BatchUpdateDetectorResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const describeAlarm = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-23", uri: "/alarms/{alarmModelName}/keyValues", method: "GET", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.DescribeAlarm" }, DescribeAlarmRequest, DescribeAlarmResponse, [InternalFailureExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

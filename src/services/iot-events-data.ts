import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DescribeAlarmRequest extends S.Class<DescribeAlarmRequest>("DescribeAlarmRequest")({alarmModelName: S.String, keyValue: S.optional(S.String)}) {}
export class DescribeDetectorRequest extends S.Class<DescribeDetectorRequest>("DescribeDetectorRequest")({detectorModelName: S.String, keyValue: S.optional(S.String)}) {}
export class ListAlarmsRequest extends S.Class<ListAlarmsRequest>("ListAlarmsRequest")({alarmModelName: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListDetectorsRequest extends S.Class<ListDetectorsRequest>("ListDetectorsRequest")({detectorModelName: S.String, stateName: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class AcknowledgeAlarmActionRequest extends S.Class<AcknowledgeAlarmActionRequest>("AcknowledgeAlarmActionRequest")({requestId: S.String, alarmModelName: S.String, keyValue: S.optional(S.String), note: S.optional(S.String)}) {}
export const AcknowledgeAlarmActionRequests = S.Array(AcknowledgeAlarmActionRequest);
export class DeleteDetectorRequest extends S.Class<DeleteDetectorRequest>("DeleteDetectorRequest")({messageId: S.String, detectorModelName: S.String, keyValue: S.optional(S.String)}) {}
export const DeleteDetectorRequests = S.Array(DeleteDetectorRequest);
export class DisableAlarmActionRequest extends S.Class<DisableAlarmActionRequest>("DisableAlarmActionRequest")({requestId: S.String, alarmModelName: S.String, keyValue: S.optional(S.String), note: S.optional(S.String)}) {}
export const DisableAlarmActionRequests = S.Array(DisableAlarmActionRequest);
export class EnableAlarmActionRequest extends S.Class<EnableAlarmActionRequest>("EnableAlarmActionRequest")({requestId: S.String, alarmModelName: S.String, keyValue: S.optional(S.String), note: S.optional(S.String)}) {}
export const EnableAlarmActionRequests = S.Array(EnableAlarmActionRequest);
export class ResetAlarmActionRequest extends S.Class<ResetAlarmActionRequest>("ResetAlarmActionRequest")({requestId: S.String, alarmModelName: S.String, keyValue: S.optional(S.String), note: S.optional(S.String)}) {}
export const ResetAlarmActionRequests = S.Array(ResetAlarmActionRequest);
export class SnoozeAlarmActionRequest extends S.Class<SnoozeAlarmActionRequest>("SnoozeAlarmActionRequest")({requestId: S.String, alarmModelName: S.String, keyValue: S.optional(S.String), note: S.optional(S.String), snoozeDuration: S.Number}) {}
export const SnoozeAlarmActionRequests = S.Array(SnoozeAlarmActionRequest);
export class BatchAcknowledgeAlarmRequest extends S.Class<BatchAcknowledgeAlarmRequest>("BatchAcknowledgeAlarmRequest")({acknowledgeActionRequests: AcknowledgeAlarmActionRequests}) {}
export class BatchDeleteDetectorRequest extends S.Class<BatchDeleteDetectorRequest>("BatchDeleteDetectorRequest")({detectors: DeleteDetectorRequests}) {}
export class BatchDisableAlarmRequest extends S.Class<BatchDisableAlarmRequest>("BatchDisableAlarmRequest")({disableActionRequests: DisableAlarmActionRequests}) {}
export class BatchEnableAlarmRequest extends S.Class<BatchEnableAlarmRequest>("BatchEnableAlarmRequest")({enableActionRequests: EnableAlarmActionRequests}) {}
export class BatchResetAlarmRequest extends S.Class<BatchResetAlarmRequest>("BatchResetAlarmRequest")({resetActionRequests: ResetAlarmActionRequests}) {}
export class BatchSnoozeAlarmRequest extends S.Class<BatchSnoozeAlarmRequest>("BatchSnoozeAlarmRequest")({snoozeActionRequests: SnoozeAlarmActionRequests}) {}
export class TimestampValue extends S.Class<TimestampValue>("TimestampValue")({timeInMillis: S.optional(S.Number)}) {}
export class Message extends S.Class<Message>("Message")({messageId: S.String, inputName: S.String, payload: H.StreamBody(), timestamp: S.optional(TimestampValue)}) {}
export const Messages = S.Array(Message);
export class AlarmSummary extends S.Class<AlarmSummary>("AlarmSummary")({alarmModelName: S.optional(S.String), alarmModelVersion: S.optional(S.String), keyValue: S.optional(S.String), stateName: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date)}) {}
export const AlarmSummaries = S.Array(AlarmSummary);
export class VariableDefinition extends S.Class<VariableDefinition>("VariableDefinition")({name: S.String, value: S.String}) {}
export const VariableDefinitions = S.Array(VariableDefinition);
export class TimerDefinition extends S.Class<TimerDefinition>("TimerDefinition")({name: S.String, seconds: S.Number}) {}
export const TimerDefinitions = S.Array(TimerDefinition);
export class BatchAlarmActionErrorEntry extends S.Class<BatchAlarmActionErrorEntry>("BatchAlarmActionErrorEntry")({requestId: S.optional(S.String), errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const BatchAlarmActionErrorEntries = S.Array(BatchAlarmActionErrorEntry);
export class BatchDisableAlarmResponse extends S.Class<BatchDisableAlarmResponse>("BatchDisableAlarmResponse")({errorEntries: S.optional(BatchAlarmActionErrorEntries)}) {}
export class BatchEnableAlarmResponse extends S.Class<BatchEnableAlarmResponse>("BatchEnableAlarmResponse")({errorEntries: S.optional(BatchAlarmActionErrorEntries)}) {}
export class BatchPutMessageRequest extends S.Class<BatchPutMessageRequest>("BatchPutMessageRequest")({messages: Messages}) {}
export class BatchResetAlarmResponse extends S.Class<BatchResetAlarmResponse>("BatchResetAlarmResponse")({errorEntries: S.optional(BatchAlarmActionErrorEntries)}) {}
export class BatchSnoozeAlarmResponse extends S.Class<BatchSnoozeAlarmResponse>("BatchSnoozeAlarmResponse")({errorEntries: S.optional(BatchAlarmActionErrorEntries)}) {}
export class ListAlarmsResponse extends S.Class<ListAlarmsResponse>("ListAlarmsResponse")({alarmSummaries: S.optional(AlarmSummaries), nextToken: S.optional(S.String)}) {}
export class DetectorStateDefinition extends S.Class<DetectorStateDefinition>("DetectorStateDefinition")({stateName: S.String, variables: VariableDefinitions, timers: TimerDefinitions}) {}
export class DetectorStateSummary extends S.Class<DetectorStateSummary>("DetectorStateSummary")({stateName: S.optional(S.String)}) {}
export class BatchDeleteDetectorErrorEntry extends S.Class<BatchDeleteDetectorErrorEntry>("BatchDeleteDetectorErrorEntry")({messageId: S.optional(S.String), errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const BatchDeleteDetectorErrorEntries = S.Array(BatchDeleteDetectorErrorEntry);
export class UpdateDetectorRequest extends S.Class<UpdateDetectorRequest>("UpdateDetectorRequest")({messageId: S.String, detectorModelName: S.String, keyValue: S.optional(S.String), state: DetectorStateDefinition}) {}
export const UpdateDetectorRequests = S.Array(UpdateDetectorRequest);
export class DetectorSummary extends S.Class<DetectorSummary>("DetectorSummary")({detectorModelName: S.optional(S.String), keyValue: S.optional(S.String), detectorModelVersion: S.optional(S.String), state: S.optional(DetectorStateSummary), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date)}) {}
export const DetectorSummaries = S.Array(DetectorSummary);
export class Variable extends S.Class<Variable>("Variable")({name: S.String, value: S.String}) {}
export const Variables = S.Array(Variable);
export class Timer extends S.Class<Timer>("Timer")({name: S.String, timestamp: S.Date}) {}
export const Timers = S.Array(Timer);
export class BatchAcknowledgeAlarmResponse extends S.Class<BatchAcknowledgeAlarmResponse>("BatchAcknowledgeAlarmResponse")({errorEntries: S.optional(BatchAlarmActionErrorEntries)}) {}
export class BatchDeleteDetectorResponse extends S.Class<BatchDeleteDetectorResponse>("BatchDeleteDetectorResponse")({batchDeleteDetectorErrorEntries: S.optional(BatchDeleteDetectorErrorEntries)}) {}
export class BatchUpdateDetectorRequest extends S.Class<BatchUpdateDetectorRequest>("BatchUpdateDetectorRequest")({detectors: UpdateDetectorRequests}) {}
export class ListDetectorsResponse extends S.Class<ListDetectorsResponse>("ListDetectorsResponse")({detectorSummaries: S.optional(DetectorSummaries), nextToken: S.optional(S.String)}) {}
export class DetectorState extends S.Class<DetectorState>("DetectorState")({stateName: S.String, variables: Variables, timers: Timers}) {}
export class SimpleRuleEvaluation extends S.Class<SimpleRuleEvaluation>("SimpleRuleEvaluation")({inputPropertyValue: S.optional(S.String), operator: S.optional(S.String), thresholdValue: S.optional(S.String)}) {}
export class SnoozeActionConfiguration extends S.Class<SnoozeActionConfiguration>("SnoozeActionConfiguration")({snoozeDuration: S.optional(S.Number), note: S.optional(S.String)}) {}
export class EnableActionConfiguration extends S.Class<EnableActionConfiguration>("EnableActionConfiguration")({note: S.optional(S.String)}) {}
export class DisableActionConfiguration extends S.Class<DisableActionConfiguration>("DisableActionConfiguration")({note: S.optional(S.String)}) {}
export class AcknowledgeActionConfiguration extends S.Class<AcknowledgeActionConfiguration>("AcknowledgeActionConfiguration")({note: S.optional(S.String)}) {}
export class ResetActionConfiguration extends S.Class<ResetActionConfiguration>("ResetActionConfiguration")({note: S.optional(S.String)}) {}
export class StateChangeConfiguration extends S.Class<StateChangeConfiguration>("StateChangeConfiguration")({triggerType: S.optional(S.String)}) {}
export class BatchPutMessageErrorEntry extends S.Class<BatchPutMessageErrorEntry>("BatchPutMessageErrorEntry")({messageId: S.optional(S.String), errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const BatchPutMessageErrorEntries = S.Array(BatchPutMessageErrorEntry);
export class Detector extends S.Class<Detector>("Detector")({detectorModelName: S.optional(S.String), keyValue: S.optional(S.String), detectorModelVersion: S.optional(S.String), state: S.optional(DetectorState), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date)}) {}
export class RuleEvaluation extends S.Class<RuleEvaluation>("RuleEvaluation")({simpleRuleEvaluation: S.optional(SimpleRuleEvaluation)}) {}
export class CustomerAction extends S.Class<CustomerAction>("CustomerAction")({actionName: S.optional(S.String), snoozeActionConfiguration: S.optional(SnoozeActionConfiguration), enableActionConfiguration: S.optional(EnableActionConfiguration), disableActionConfiguration: S.optional(DisableActionConfiguration), acknowledgeActionConfiguration: S.optional(AcknowledgeActionConfiguration), resetActionConfiguration: S.optional(ResetActionConfiguration)}) {}
export class SystemEvent extends S.Class<SystemEvent>("SystemEvent")({eventType: S.optional(S.String), stateChangeConfiguration: S.optional(StateChangeConfiguration)}) {}
export class BatchPutMessageResponse extends S.Class<BatchPutMessageResponse>("BatchPutMessageResponse")({BatchPutMessageErrorEntries: S.optional(BatchPutMessageErrorEntries)}) {}
export class DescribeDetectorResponse extends S.Class<DescribeDetectorResponse>("DescribeDetectorResponse")({detector: S.optional(Detector)}) {}
export class AlarmState extends S.Class<AlarmState>("AlarmState")({stateName: S.optional(S.String), ruleEvaluation: S.optional(RuleEvaluation), customerAction: S.optional(CustomerAction), systemEvent: S.optional(SystemEvent)}) {}
export class BatchUpdateDetectorErrorEntry extends S.Class<BatchUpdateDetectorErrorEntry>("BatchUpdateDetectorErrorEntry")({messageId: S.optional(S.String), errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const BatchUpdateDetectorErrorEntries = S.Array(BatchUpdateDetectorErrorEntry);
export class Alarm extends S.Class<Alarm>("Alarm")({alarmModelName: S.optional(S.String), alarmModelVersion: S.optional(S.String), keyValue: S.optional(S.String), alarmState: S.optional(AlarmState), severity: S.optional(S.Number), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date)}) {}
export class BatchUpdateDetectorResponse extends S.Class<BatchUpdateDetectorResponse>("BatchUpdateDetectorResponse")({batchUpdateDetectorErrorEntries: S.optional(BatchUpdateDetectorErrorEntries)}) {}
export class DescribeAlarmResponse extends S.Class<DescribeAlarmResponse>("DescribeAlarmResponse")({alarm: S.optional(Alarm)}) {}

//# Errors
export class InternalFailureException extends S.TaggedError<InternalFailureException>()("InternalFailureException", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Acknowledges one or more alarms. The alarms change to the `ACKNOWLEDGED` state
 * after you acknowledge them.
 */export const batchAcknowledgeAlarm = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-23", uri: "/alarms/acknowledge", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchAcknowledgeAlarm" }, BatchAcknowledgeAlarmRequest, BatchAcknowledgeAlarmResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the ListDetectors API call.
 */export const batchDeleteDetector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-23", uri: "/detectors/delete", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchDeleteDetector" }, BatchDeleteDetectorRequest, BatchDeleteDetectorResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables one or more alarms. The alarms change to the `DISABLED` state after
 * you disable them.
 */export const batchDisableAlarm = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-23", uri: "/alarms/disable", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchDisableAlarm" }, BatchDisableAlarmRequest, BatchDisableAlarmResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables one or more alarms. The alarms change to the `NORMAL` state after you
 * enable them.
 */export const batchEnableAlarm = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-23", uri: "/alarms/enable", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchEnableAlarm" }, BatchEnableAlarmRequest, BatchEnableAlarmResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Resets one or more alarms. The alarms return to the `NORMAL` state after you
 * reset them.
 */export const batchResetAlarm = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-23", uri: "/alarms/reset", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchResetAlarm" }, BatchResetAlarmRequest, BatchResetAlarmResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes one or more alarms to the snooze mode. The alarms change to the
 * `SNOOZE_DISABLED` state after you set them to the snooze mode.
 */export const batchSnoozeAlarm = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-23", uri: "/alarms/snooze", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchSnoozeAlarm" }, BatchSnoozeAlarmRequest, BatchSnoozeAlarmResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists one or more alarms. The operation returns only the metadata associated with each
 * alarm.
 */export const listAlarms = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-23", uri: "/alarms/{alarmModelName}", method: "GET", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.ListAlarms" }, ListAlarmsRequest, ListAlarmsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists detectors (the instances of a detector model).
 */export const listDetectors = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-23", uri: "/detectors/{detectorModelName}", method: "GET", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.ListDetectors" }, ListDetectorsRequest, ListDetectorsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends a set of messages to the IoT Events system. Each message payload is transformed into
 * the input you specify (`"inputName"`) and ingested into any detectors that monitor
 * that input. If multiple messages are sent, the order in which the messages are processed isn't
 * guaranteed. To guarantee ordering, you must send messages one at a time and wait for a
 * successful response.
 */export const batchPutMessage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-23", uri: "/inputs/messages", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchPutMessage" }, BatchPutMessageRequest, BatchPutMessageResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the specified detector (instance).
 */export const describeDetector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-23", uri: "/detectors/{detectorModelName}/keyValues", method: "GET", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.DescribeDetector" }, DescribeDetectorRequest, DescribeDetectorResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the state, variable values, and timer settings of one or more detectors
 * (instances) of a specified detector model.
 */export const batchUpdateDetector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-23", uri: "/detectors", method: "POST", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.BatchUpdateDetector" }, BatchUpdateDetectorRequest, BatchUpdateDetectorResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an alarm.
 */export const describeAlarm = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-23", uri: "/alarms/{alarmModelName}/keyValues", method: "GET", sdkId: "IoT Events Data", sigV4ServiceName: "ioteventsdata", name: "IotColumboDataService.DescribeAlarm" }, DescribeAlarmRequest, DescribeAlarmResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

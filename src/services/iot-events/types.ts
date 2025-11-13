import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
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
  ValidationException,
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
  | ValidationException
  | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class IoTEvents extends AWSServiceClient {
  createAlarmModel(
    input: CreateAlarmModelRequest,
  ): Effect.Effect<
    CreateAlarmModelResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createDetectorModel(
    input: CreateDetectorModelRequest,
  ): Effect.Effect<
    CreateDetectorModelResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createInput(
    input: CreateInputRequest,
  ): Effect.Effect<
    CreateInputResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteAlarmModel(
    input: DeleteAlarmModelRequest,
  ): Effect.Effect<
    DeleteAlarmModelResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDetectorModel(
    input: DeleteDetectorModelRequest,
  ): Effect.Effect<
    DeleteDetectorModelResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteInput(
    input: DeleteInputRequest,
  ): Effect.Effect<
    DeleteInputResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAlarmModel(
    input: DescribeAlarmModelRequest,
  ): Effect.Effect<
    DescribeAlarmModelResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDetectorModel(
    input: DescribeDetectorModelRequest,
  ): Effect.Effect<
    DescribeDetectorModelResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDetectorModelAnalysis(
    input: DescribeDetectorModelAnalysisRequest,
  ): Effect.Effect<
    DescribeDetectorModelAnalysisResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeInput(
    input: DescribeInputRequest,
  ): Effect.Effect<
    DescribeInputResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeLoggingOptions(
    input: DescribeLoggingOptionsRequest,
  ): Effect.Effect<
    DescribeLoggingOptionsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getDetectorModelAnalysisResults(
    input: GetDetectorModelAnalysisResultsRequest,
  ): Effect.Effect<
    GetDetectorModelAnalysisResultsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listAlarmModels(
    input: ListAlarmModelsRequest,
  ): Effect.Effect<
    ListAlarmModelsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listAlarmModelVersions(
    input: ListAlarmModelVersionsRequest,
  ): Effect.Effect<
    ListAlarmModelVersionsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listDetectorModels(
    input: ListDetectorModelsRequest,
  ): Effect.Effect<
    ListDetectorModelsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listDetectorModelVersions(
    input: ListDetectorModelVersionsRequest,
  ): Effect.Effect<
    ListDetectorModelVersionsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listInputRoutings(
    input: ListInputRoutingsRequest,
  ): Effect.Effect<
    ListInputRoutingsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listInputs(
    input: ListInputsRequest,
  ): Effect.Effect<
    ListInputsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  putLoggingOptions(
    input: PutLoggingOptionsRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceUnavailableException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  startDetectorModelAnalysis(
    input: StartDetectorModelAnalysisRequest,
  ): Effect.Effect<
    StartDetectorModelAnalysisResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAlarmModel(
    input: UpdateAlarmModelRequest,
  ): Effect.Effect<
    UpdateAlarmModelResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDetectorModel(
    input: UpdateDetectorModelRequest,
  ): Effect.Effect<
    UpdateDetectorModelResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateInput(
    input: UpdateInputRequest,
  ): Effect.Effect<
    UpdateInputResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
}

export declare class IotEvents extends IoTEvents {}

export interface AcknowledgeFlow {
  enabled: boolean;
}
export type AcknowledgeFlowEnabled = boolean;

export interface Action {
  setVariable?: SetVariableAction;
  sns?: SNSTopicPublishAction;
  iotTopicPublish?: IotTopicPublishAction;
  setTimer?: SetTimerAction;
  clearTimer?: ClearTimerAction;
  resetTimer?: ResetTimerAction;
  lambda?: LambdaAction;
  iotEvents?: IotEventsAction;
  sqs?: SqsAction;
  firehose?: FirehoseAction;
  dynamoDB?: DynamoDBAction;
  dynamoDBv2?: DynamoDBv2Action;
  iotSiteWise?: IotSiteWiseAction;
}
export type Actions = Array<Action>;
export interface AlarmAction {
  sns?: SNSTopicPublishAction;
  iotTopicPublish?: IotTopicPublishAction;
  lambda?: LambdaAction;
  iotEvents?: IotEventsAction;
  sqs?: SqsAction;
  firehose?: FirehoseAction;
  dynamoDB?: DynamoDBAction;
  dynamoDBv2?: DynamoDBv2Action;
  iotSiteWise?: IotSiteWiseAction;
}
export type AlarmActions = Array<AlarmAction>;
export interface AlarmCapabilities {
  initializationConfiguration?: InitializationConfiguration;
  acknowledgeFlow?: AcknowledgeFlow;
}
export interface AlarmEventActions {
  alarmActions?: Array<AlarmAction>;
}
export type AlarmModelArn = string;

export type AlarmModelDescription = string;

export type AlarmModelName = string;

export type AlarmModelSummaries = Array<AlarmModelSummary>;
export interface AlarmModelSummary {
  creationTime?: Date | string;
  alarmModelDescription?: string;
  alarmModelName?: string;
}
export type AlarmModelVersion = string;

export type AlarmModelVersionStatus =
  | "ACTIVE"
  | "ACTIVATING"
  | "INACTIVE"
  | "FAILED";
export type AlarmModelVersionSummaries = Array<AlarmModelVersionSummary>;
export interface AlarmModelVersionSummary {
  alarmModelName?: string;
  alarmModelArn?: string;
  alarmModelVersion?: string;
  roleArn?: string;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  status?: AlarmModelVersionStatus;
  statusMessage?: string;
}
export interface AlarmNotification {
  notificationActions?: Array<NotificationAction>;
}
export interface AlarmRule {
  simpleRule?: SimpleRule;
}
export type AmazonResourceName = string;

export type AnalysisId = string;

export type AnalysisMessage = string;

export interface AnalysisResult {
  type?: string;
  level?: AnalysisResultLevel;
  message?: string;
  locations?: Array<AnalysisResultLocation>;
}
export type AnalysisResultLevel = "INFO" | "WARNING" | "ERROR";
export interface AnalysisResultLocation {
  path?: string;
}
export type AnalysisResultLocationPath = string;

export type AnalysisResultLocations = Array<AnalysisResultLocation>;
export type AnalysisResults = Array<AnalysisResult>;
export type AnalysisStatus = "RUNNING" | "COMPLETE" | "FAILED";
export type AnalysisType = string;

export type AssetId = string;

export type AssetModelId = string;

export type AssetPropertyAlias = string;

export type AssetPropertyBooleanValue = string;

export type AssetPropertyDoubleValue = string;

export type AssetPropertyEntryId = string;

export type AssetPropertyId = string;

export type AssetPropertyIntegerValue = string;

export type AssetPropertyOffsetInNanos = string;

export type AssetPropertyQuality = string;

export type AssetPropertyStringValue = string;

export type AssetPropertyTimeInSeconds = string;

export interface AssetPropertyTimestamp {
  timeInSeconds: string;
  offsetInNanos?: string;
}
export interface AssetPropertyValue {
  value?: AssetPropertyVariant;
  timestamp?: AssetPropertyTimestamp;
  quality?: string;
}
export interface AssetPropertyVariant {
  stringValue?: string;
  integerValue?: string;
  doubleValue?: string;
  booleanValue?: string;
}
export interface Attribute {
  jsonPath: string;
}
export type AttributeJsonPath = string;

export type Attributes = Array<Attribute>;
export interface ClearTimerAction {
  timerName: string;
}
export type ComparisonOperator =
  | "GREATER"
  | "GREATER_OR_EQUAL"
  | "LESS"
  | "LESS_OR_EQUAL"
  | "EQUAL"
  | "NOT_EQUAL";
export type Condition = string;

export type ContentExpression = string;

export interface CreateAlarmModelRequest {
  alarmModelName: string;
  alarmModelDescription?: string;
  roleArn: string;
  tags?: Array<Tag>;
  key?: string;
  severity?: number;
  alarmRule: AlarmRule;
  alarmNotification?: AlarmNotification;
  alarmEventActions?: AlarmEventActions;
  alarmCapabilities?: AlarmCapabilities;
}
export interface CreateAlarmModelResponse {
  creationTime?: Date | string;
  alarmModelArn?: string;
  alarmModelVersion?: string;
  lastUpdateTime?: Date | string;
  status?: AlarmModelVersionStatus;
}
export interface CreateDetectorModelRequest {
  detectorModelName: string;
  detectorModelDefinition: DetectorModelDefinition;
  detectorModelDescription?: string;
  key?: string;
  roleArn: string;
  tags?: Array<Tag>;
  evaluationMethod?: EvaluationMethod;
}
export interface CreateDetectorModelResponse {
  detectorModelConfiguration?: DetectorModelConfiguration;
}
export interface CreateInputRequest {
  inputName: string;
  inputDescription?: string;
  inputDefinition: InputDefinition;
  tags?: Array<Tag>;
}
export interface CreateInputResponse {
  inputConfiguration?: InputConfiguration;
}
export interface DeleteAlarmModelRequest {
  alarmModelName: string;
}
export interface DeleteAlarmModelResponse {}
export interface DeleteDetectorModelRequest {
  detectorModelName: string;
}
export interface DeleteDetectorModelResponse {}
export interface DeleteInputRequest {
  inputName: string;
}
export interface DeleteInputResponse {}
export type DeliveryStreamName = string;

export interface DescribeAlarmModelRequest {
  alarmModelName: string;
  alarmModelVersion?: string;
}
export interface DescribeAlarmModelResponse {
  creationTime?: Date | string;
  alarmModelArn?: string;
  alarmModelVersion?: string;
  lastUpdateTime?: Date | string;
  status?: AlarmModelVersionStatus;
  statusMessage?: string;
  alarmModelName?: string;
  alarmModelDescription?: string;
  roleArn?: string;
  key?: string;
  severity?: number;
  alarmRule?: AlarmRule;
  alarmNotification?: AlarmNotification;
  alarmEventActions?: AlarmEventActions;
  alarmCapabilities?: AlarmCapabilities;
}
export interface DescribeDetectorModelAnalysisRequest {
  analysisId: string;
}
export interface DescribeDetectorModelAnalysisResponse {
  status?: AnalysisStatus;
}
export interface DescribeDetectorModelRequest {
  detectorModelName: string;
  detectorModelVersion?: string;
}
export interface DescribeDetectorModelResponse {
  detectorModel?: DetectorModel;
}
export interface DescribeInputRequest {
  inputName: string;
}
export interface DescribeInputResponse {
  input?: Input;
}
export interface DescribeLoggingOptionsRequest {}
export interface DescribeLoggingOptionsResponse {
  loggingOptions?: LoggingOptions;
}
export interface DetectorDebugOption {
  detectorModelName: string;
  keyValue?: string;
}
export type DetectorDebugOptions = Array<DetectorDebugOption>;
export interface DetectorModel {
  detectorModelDefinition?: DetectorModelDefinition;
  detectorModelConfiguration?: DetectorModelConfiguration;
}
export type DetectorModelArn = string;

export interface DetectorModelConfiguration {
  detectorModelName?: string;
  detectorModelVersion?: string;
  detectorModelDescription?: string;
  detectorModelArn?: string;
  roleArn?: string;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  status?: DetectorModelVersionStatus;
  key?: string;
  evaluationMethod?: EvaluationMethod;
}
export interface DetectorModelDefinition {
  states: Array<State>;
  initialStateName: string;
}
export type DetectorModelDescription = string;

export type DetectorModelName = string;

export type DetectorModelSummaries = Array<DetectorModelSummary>;
export interface DetectorModelSummary {
  detectorModelName?: string;
  detectorModelDescription?: string;
  creationTime?: Date | string;
}
export type DetectorModelVersion = string;

export type DetectorModelVersionStatus =
  | "ACTIVE"
  | "ACTIVATING"
  | "INACTIVE"
  | "DEPRECATED"
  | "DRAFT"
  | "PAUSED"
  | "FAILED";
export type DetectorModelVersionSummaries = Array<DetectorModelVersionSummary>;
export interface DetectorModelVersionSummary {
  detectorModelName?: string;
  detectorModelVersion?: string;
  detectorModelArn?: string;
  roleArn?: string;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  status?: DetectorModelVersionStatus;
  evaluationMethod?: EvaluationMethod;
}
export type DisabledOnInitialization = boolean;

export interface DynamoDBAction {
  hashKeyType?: string;
  hashKeyField: string;
  hashKeyValue: string;
  rangeKeyType?: string;
  rangeKeyField?: string;
  rangeKeyValue?: string;
  operation?: string;
  payloadField?: string;
  tableName: string;
  payload?: Payload;
}
export interface DynamoDBv2Action {
  tableName: string;
  payload?: Payload;
}
export type DynamoKeyField = string;

export type DynamoKeyType = string;

export type DynamoKeyValue = string;

export type DynamoOperation = string;

export type DynamoTableName = string;

export interface EmailConfiguration {
  from: string;
  content?: EmailContent;
  recipients: EmailRecipients;
}
export type EmailConfigurations = Array<EmailConfiguration>;
export interface EmailContent {
  subject?: string;
  additionalMessage?: string;
}
export interface EmailRecipients {
  to?: Array<RecipientDetail>;
}
export type EmailSubject = string;

export type errorMessage = string;

export type EvaluationMethod = "BATCH" | "SERIAL";
export interface Event {
  eventName: string;
  condition?: string;
  actions?: Array<Action>;
}
export type EventName = string;

export type Events = Array<Event>;
export interface FirehoseAction {
  deliveryStreamName: string;
  separator?: string;
  payload?: Payload;
}
export type FirehoseSeparator = string;

export type FromEmail = string;

export interface GetDetectorModelAnalysisResultsRequest {
  analysisId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetDetectorModelAnalysisResultsResponse {
  analysisResults?: Array<AnalysisResult>;
  nextToken?: string;
}
export type IdentityStoreId = string;

export interface InitializationConfiguration {
  disabledOnInitialization: boolean;
}
export interface Input {
  inputConfiguration?: InputConfiguration;
  inputDefinition?: InputDefinition;
}
export type InputArn = string;

export interface InputConfiguration {
  inputName: string;
  inputDescription?: string;
  inputArn: string;
  creationTime: Date | string;
  lastUpdateTime: Date | string;
  status: InputStatus;
}
export interface InputDefinition {
  attributes: Array<Attribute>;
}
export type InputDescription = string;

export interface InputIdentifier {
  iotEventsInputIdentifier?: IotEventsInputIdentifier;
  iotSiteWiseInputIdentifier?: IotSiteWiseInputIdentifier;
}
export type InputName = string;

export type InputProperty = string;

export type InputStatus = "CREATING" | "UPDATING" | "ACTIVE" | "DELETING";
export type InputSummaries = Array<InputSummary>;
export interface InputSummary {
  inputName?: string;
  inputDescription?: string;
  inputArn?: string;
  creationTime?: Date | string;
  lastUpdateTime?: Date | string;
  status?: InputStatus;
}
export declare class InternalFailureException extends Data.TaggedError(
  "InternalFailureException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export interface IotEventsAction {
  inputName: string;
  payload?: Payload;
}
export interface IotEventsInputIdentifier {
  inputName: string;
}
export interface IotSiteWiseAction {
  entryId?: string;
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  propertyValue?: AssetPropertyValue;
}
export interface IotSiteWiseAssetModelPropertyIdentifier {
  assetModelId: string;
  propertyId: string;
}
export interface IotSiteWiseInputIdentifier {
  iotSiteWiseAssetModelPropertyIdentifier?: IotSiteWiseAssetModelPropertyIdentifier;
}
export interface IotTopicPublishAction {
  mqttTopic: string;
  payload?: Payload;
}
export type KeyValue = string;

export interface LambdaAction {
  functionArn: string;
  payload?: Payload;
}
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListAlarmModelsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListAlarmModelsResponse {
  alarmModelSummaries?: Array<AlarmModelSummary>;
  nextToken?: string;
}
export interface ListAlarmModelVersionsRequest {
  alarmModelName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAlarmModelVersionsResponse {
  alarmModelVersionSummaries?: Array<AlarmModelVersionSummary>;
  nextToken?: string;
}
export interface ListDetectorModelsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListDetectorModelsResponse {
  detectorModelSummaries?: Array<DetectorModelSummary>;
  nextToken?: string;
}
export interface ListDetectorModelVersionsRequest {
  detectorModelName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDetectorModelVersionsResponse {
  detectorModelVersionSummaries?: Array<DetectorModelVersionSummary>;
  nextToken?: string;
}
export interface ListInputRoutingsRequest {
  inputIdentifier: InputIdentifier;
  maxResults?: number;
  nextToken?: string;
}
export interface ListInputRoutingsResponse {
  routedResources?: Array<RoutedResource>;
  nextToken?: string;
}
export interface ListInputsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListInputsResponse {
  inputSummaries?: Array<InputSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export type LoggingEnabled = boolean;

export type LoggingLevel = "ERROR" | "INFO" | "DEBUG";
export interface LoggingOptions {
  roleArn: string;
  level: LoggingLevel;
  enabled: boolean;
  detectorDebugOptions?: Array<DetectorDebugOption>;
}
export type MaxAnalysisResults = number;

export type MaxResults = number;

export type MQTTTopic = string;

export type NextToken = string;

export interface NotificationAction {
  action: NotificationTargetActions;
  smsConfigurations?: Array<SMSConfiguration>;
  emailConfigurations?: Array<EmailConfiguration>;
}
export type NotificationActions = Array<NotificationAction>;
export type NotificationAdditionalMessage = string;

export interface NotificationTargetActions {
  lambdaAction?: LambdaAction;
}
export interface OnEnterLifecycle {
  events?: Array<Event>;
}
export interface OnExitLifecycle {
  events?: Array<Event>;
}
export interface OnInputLifecycle {
  events?: Array<Event>;
  transitionEvents?: Array<TransitionEvent>;
}
export interface Payload {
  contentExpression: string;
  type: PayloadType;
}
export type PayloadType = "STRING" | "JSON";
export interface PutLoggingOptionsRequest {
  loggingOptions: LoggingOptions;
}
export type QueueUrl = string;

export interface RecipientDetail {
  ssoIdentity?: SSOIdentity;
}
export type RecipientDetails = Array<RecipientDetail>;
export interface ResetTimerAction {
  timerName: string;
}
export declare class ResourceAlreadyExistsException extends Data.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceArn?: string;
}> {}
export type resourceArn = string;

export type resourceId = string;

export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
}> {}
export type ResourceName = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface RoutedResource {
  name?: string;
  arn?: string;
}
export type RoutedResources = Array<RoutedResource>;
export type Seconds = number;

export declare class ServiceUnavailableException extends Data.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export interface SetTimerAction {
  timerName: string;
  seconds?: number;
  durationExpression?: string;
}
export interface SetVariableAction {
  variableName: string;
  value: string;
}
export type Severity = number;

export interface SimpleRule {
  inputProperty: string;
  comparisonOperator: ComparisonOperator;
  threshold: string;
}
export interface SMSConfiguration {
  senderId?: string;
  additionalMessage?: string;
  recipients: Array<RecipientDetail>;
}
export type SMSConfigurations = Array<SMSConfiguration>;
export type SMSSenderId = string;

export interface SNSTopicPublishAction {
  targetArn: string;
  payload?: Payload;
}
export interface SqsAction {
  queueUrl: string;
  useBase64?: boolean;
  payload?: Payload;
}
export interface SSOIdentity {
  identityStoreId: string;
  userId?: string;
}
export type SSOReferenceId = string;

export interface StartDetectorModelAnalysisRequest {
  detectorModelDefinition: DetectorModelDefinition;
}
export interface StartDetectorModelAnalysisResponse {
  analysisId?: string;
}
export interface State {
  stateName: string;
  onInput?: OnInputLifecycle;
  onEnter?: OnEnterLifecycle;
  onExit?: OnExitLifecycle;
}
export type StateName = string;

export type States = Array<State>;
export type StatusMessage = string;

export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type Tags = Array<Tag>;
export type TagValue = string;

export type Threshold = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type TimerName = string;

export type Timestamp = Date | string;

export interface TransitionEvent {
  eventName: string;
  condition: string;
  actions?: Array<Action>;
  nextState: string;
}
export type TransitionEvents = Array<TransitionEvent>;
export declare class UnsupportedOperationException extends Data.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAlarmModelRequest {
  alarmModelName: string;
  alarmModelDescription?: string;
  roleArn: string;
  severity?: number;
  alarmRule: AlarmRule;
  alarmNotification?: AlarmNotification;
  alarmEventActions?: AlarmEventActions;
  alarmCapabilities?: AlarmCapabilities;
}
export interface UpdateAlarmModelResponse {
  creationTime?: Date | string;
  alarmModelArn?: string;
  alarmModelVersion?: string;
  lastUpdateTime?: Date | string;
  status?: AlarmModelVersionStatus;
}
export interface UpdateDetectorModelRequest {
  detectorModelName: string;
  detectorModelDefinition: DetectorModelDefinition;
  detectorModelDescription?: string;
  roleArn: string;
  evaluationMethod?: EvaluationMethod;
}
export interface UpdateDetectorModelResponse {
  detectorModelConfiguration?: DetectorModelConfiguration;
}
export interface UpdateInputRequest {
  inputName: string;
  inputDescription?: string;
  inputDefinition: InputDefinition;
}
export interface UpdateInputResponse {
  inputConfiguration?: InputConfiguration;
}
export type UseBase64 = boolean;

export type VariableName = string;

export type VariableValue = string;

export declare namespace CreateAlarmModel {
  export type Input = CreateAlarmModelRequest;
  export type Output = CreateAlarmModelResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDetectorModel {
  export type Input = CreateDetectorModelRequest;
  export type Output = CreateDetectorModelResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateInput {
  export type Input = CreateInputRequest;
  export type Output = CreateInputResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAlarmModel {
  export type Input = DeleteAlarmModelRequest;
  export type Output = DeleteAlarmModelResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDetectorModel {
  export type Input = DeleteDetectorModelRequest;
  export type Output = DeleteDetectorModelResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteInput {
  export type Input = DeleteInputRequest;
  export type Output = DeleteInputResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAlarmModel {
  export type Input = DescribeAlarmModelRequest;
  export type Output = DescribeAlarmModelResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDetectorModel {
  export type Input = DescribeDetectorModelRequest;
  export type Output = DescribeDetectorModelResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDetectorModelAnalysis {
  export type Input = DescribeDetectorModelAnalysisRequest;
  export type Output = DescribeDetectorModelAnalysisResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeInput {
  export type Input = DescribeInputRequest;
  export type Output = DescribeInputResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeLoggingOptions {
  export type Input = DescribeLoggingOptionsRequest;
  export type Output = DescribeLoggingOptionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetDetectorModelAnalysisResults {
  export type Input = GetDetectorModelAnalysisResultsRequest;
  export type Output = GetDetectorModelAnalysisResultsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAlarmModels {
  export type Input = ListAlarmModelsRequest;
  export type Output = ListAlarmModelsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAlarmModelVersions {
  export type Input = ListAlarmModelVersionsRequest;
  export type Output = ListAlarmModelVersionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDetectorModels {
  export type Input = ListDetectorModelsRequest;
  export type Output = ListDetectorModelsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDetectorModelVersions {
  export type Input = ListDetectorModelVersionsRequest;
  export type Output = ListDetectorModelVersionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListInputRoutings {
  export type Input = ListInputRoutingsRequest;
  export type Output = ListInputRoutingsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListInputs {
  export type Input = ListInputsRequest;
  export type Output = ListInputsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutLoggingOptions {
  export type Input = PutLoggingOptionsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ServiceUnavailableException
    | ThrottlingException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartDetectorModelAnalysis {
  export type Input = StartDetectorModelAnalysisRequest;
  export type Output = StartDetectorModelAnalysisResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAlarmModel {
  export type Input = UpdateAlarmModelRequest;
  export type Output = UpdateAlarmModelResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDetectorModel {
  export type Input = UpdateDetectorModelRequest;
  export type Output = UpdateDetectorModelResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateInput {
  export type Input = UpdateInputRequest;
  export type Output = UpdateInputResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export type IoTEventsErrors =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnsupportedOperationException
  | CommonAwsError;

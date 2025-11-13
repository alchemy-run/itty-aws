import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class SSMIncidents extends AWSServiceClient {
  batchGetIncidentFindings(
    input: BatchGetIncidentFindingsInput,
  ): Effect.Effect<
    BatchGetIncidentFindingsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createReplicationSet(
    input: CreateReplicationSetInput,
  ): Effect.Effect<
    CreateReplicationSetOutput,
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createResponsePlan(
    input: CreateResponsePlanInput,
  ): Effect.Effect<
    CreateResponsePlanOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createTimelineEvent(
    input: CreateTimelineEventInput,
  ): Effect.Effect<
    CreateTimelineEventOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteIncidentRecord(
    input: DeleteIncidentRecordInput,
  ): Effect.Effect<
    DeleteIncidentRecordOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteReplicationSet(
    input: DeleteReplicationSetInput,
  ): Effect.Effect<
    DeleteReplicationSetOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyInput,
  ): Effect.Effect<
    DeleteResourcePolicyOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteResponsePlan(
    input: DeleteResponsePlanInput,
  ): Effect.Effect<
    DeleteResponsePlanOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteTimelineEvent(
    input: DeleteTimelineEventInput,
  ): Effect.Effect<
    DeleteTimelineEventOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getIncidentRecord(
    input: GetIncidentRecordInput,
  ): Effect.Effect<
    GetIncidentRecordOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getReplicationSet(
    input: GetReplicationSetInput,
  ): Effect.Effect<
    GetReplicationSetOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getResourcePolicies(
    input: GetResourcePoliciesInput,
  ): Effect.Effect<
    GetResourcePoliciesOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getResponsePlan(
    input: GetResponsePlanInput,
  ): Effect.Effect<
    GetResponsePlanOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getTimelineEvent(
    input: GetTimelineEventInput,
  ): Effect.Effect<
    GetTimelineEventOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listIncidentFindings(
    input: ListIncidentFindingsInput,
  ): Effect.Effect<
    ListIncidentFindingsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listIncidentRecords(
    input: ListIncidentRecordsInput,
  ): Effect.Effect<
    ListIncidentRecordsOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listRelatedItems(
    input: ListRelatedItemsInput,
  ): Effect.Effect<
    ListRelatedItemsOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listReplicationSets(
    input: ListReplicationSetsInput,
  ): Effect.Effect<
    ListReplicationSetsOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listResponsePlans(
    input: ListResponsePlansInput,
  ): Effect.Effect<
    ListResponsePlansOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTimelineEvents(
    input: ListTimelineEventsInput,
  ): Effect.Effect<
    ListTimelineEventsOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyInput,
  ): Effect.Effect<
    PutResourcePolicyOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startIncident(
    input: StartIncidentInput,
  ): Effect.Effect<
    StartIncidentOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateDeletionProtection(
    input: UpdateDeletionProtectionInput,
  ): Effect.Effect<
    UpdateDeletionProtectionOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateIncidentRecord(
    input: UpdateIncidentRecordInput,
  ): Effect.Effect<
    UpdateIncidentRecordOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateRelatedItems(
    input: UpdateRelatedItemsInput,
  ): Effect.Effect<
    UpdateRelatedItemsOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateReplicationSet(
    input: UpdateReplicationSetInput,
  ): Effect.Effect<
    UpdateReplicationSetOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateResponsePlan(
    input: UpdateResponsePlanInput,
  ): Effect.Effect<
    UpdateResponsePlanOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateTimelineEvent(
    input: UpdateTimelineEventInput,
  ): Effect.Effect<
    UpdateTimelineEventOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export declare class SsmIncidents extends SSMIncidents {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
interface _Action {
  ssmAutomation?: SsmAutomation;
}

export type Action = (_Action & { ssmAutomation: SsmAutomation });
export type ActionsList = Array<Action>;
export interface AddRegionAction {
  regionName: string;
  sseKmsKeyId?: string;
}
export type Arn = string;

interface _AttributeValueList {
  stringValues?: Array<string>;
  integerValues?: Array<number>;
}

export type AttributeValueList = (_AttributeValueList & { stringValues: Array<string> }) | (_AttributeValueList & { integerValues: Array<number> });
interface _AutomationExecution {
  ssmExecutionArn?: string;
}

export type AutomationExecution = (_AutomationExecution & { ssmExecutionArn: string });
export type AutomationExecutionSet = Array<AutomationExecution>;
export interface BatchGetIncidentFindingsError {
  findingId: string;
  code: string;
  message: string;
}
export type BatchGetIncidentFindingsErrorList = Array<BatchGetIncidentFindingsError>;
export interface BatchGetIncidentFindingsInput {
  incidentRecordArn: string;
  findingIds: Array<string>;
}
export interface BatchGetIncidentFindingsOutput {
  findings: Array<Finding>;
  errors: Array<BatchGetIncidentFindingsError>;
}
export type ChatbotSnsConfigurationSet = Array<string>;
interface _ChatChannel {
  empty?: EmptyChatChannel;
  chatbotSns?: Array<string>;
}

export type ChatChannel = (_ChatChannel & { empty: EmptyChatChannel }) | (_ChatChannel & { chatbotSns: Array<string> });
export type ClientToken = string;

export interface CloudFormationStackUpdate {
  startTime: Date | string;
  endTime?: Date | string;
  stackArn: string;
}
export interface CodeDeployDeployment {
  startTime: Date | string;
  endTime?: Date | string;
  deploymentGroupArn: string;
  deploymentId: string;
}
interface _Condition {
  before?: Date | string;
  after?: Date | string;
  equals?: AttributeValueList;
}

export type Condition = (_Condition & { before: Date | string }) | (_Condition & { after: Date | string }) | (_Condition & { equals: AttributeValueList });
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceIdentifier?: string;
  readonly resourceType?: string;
  readonly retryAfter?: Date | string;
}> {}
export interface CreateReplicationSetInput {
  regions: Record<string, RegionMapInputValue>;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateReplicationSetOutput {
  arn: string;
}
export interface CreateResponsePlanInput {
  clientToken?: string;
  name: string;
  displayName?: string;
  incidentTemplate: IncidentTemplate;
  chatChannel?: ChatChannel;
  engagements?: Array<string>;
  actions?: Array<Action>;
  tags?: Record<string, string>;
  integrations?: Array<Integration>;
}
export interface CreateResponsePlanOutput {
  arn: string;
}
export interface CreateTimelineEventInput {
  clientToken?: string;
  incidentRecordArn: string;
  eventTime: Date | string;
  eventType: string;
  eventData: string;
  eventReferences?: Array<EventReference>;
}
export interface CreateTimelineEventOutput {
  incidentRecordArn: string;
  eventId: string;
}
export type DedupeString = string;

export interface DeleteIncidentRecordInput {
  arn: string;
}
export interface DeleteIncidentRecordOutput {
}
export interface DeleteRegionAction {
  regionName: string;
}
export interface DeleteReplicationSetInput {
  arn: string;
}
export interface DeleteReplicationSetOutput {
}
export interface DeleteResourcePolicyInput {
  resourceArn: string;
  policyId: string;
}
export interface DeleteResourcePolicyOutput {
}
export interface DeleteResponsePlanInput {
  arn: string;
}
export interface DeleteResponsePlanOutput {
}
export interface DeleteTimelineEventInput {
  incidentRecordArn: string;
  eventId: string;
}
export interface DeleteTimelineEventOutput {
}
export type DynamicSsmParameters = Record<string, DynamicSsmParameterValue>;
interface _DynamicSsmParameterValue {
  variable?: string;
}

export type DynamicSsmParameterValue = (_DynamicSsmParameterValue & { variable: string });
export interface EmptyChatChannel {
}
export type EngagementSet = Array<string>;
export type EventData = string;

interface _EventReference {
  resource?: string;
  relatedItemId?: string;
}

export type EventReference = (_EventReference & { resource: string }) | (_EventReference & { relatedItemId: string });
export type EventReferenceList = Array<EventReference>;
export interface EventSummary {
  incidentRecordArn: string;
  eventId: string;
  eventTime: Date | string;
  eventUpdatedTime: Date | string;
  eventType: string;
  eventReferences?: Array<EventReference>;
}
export type EventSummaryList = Array<EventSummary>;
export type ExceptionMessage = string;

export interface Filter {
  key: string;
  condition: Condition;
}
export type FilterList = Array<Filter>;
export interface Finding {
  id: string;
  creationTime: Date | string;
  lastModifiedTime: Date | string;
  details?: FindingDetails;
}
interface _FindingDetails {
  codeDeployDeployment?: CodeDeployDeployment;
  cloudFormationStackUpdate?: CloudFormationStackUpdate;
}

export type FindingDetails = (_FindingDetails & { codeDeployDeployment: CodeDeployDeployment }) | (_FindingDetails & { cloudFormationStackUpdate: CloudFormationStackUpdate });
export type FindingId = string;

export type FindingIdList = Array<string>;
export type FindingList = Array<Finding>;
export interface FindingSummary {
  id: string;
  lastModifiedTime: Date | string;
}
export type FindingSummaryList = Array<FindingSummary>;
export type GeneratedId = string;

export interface GetIncidentRecordInput {
  arn: string;
}
export interface GetIncidentRecordOutput {
  incidentRecord: IncidentRecord;
}
export interface GetReplicationSetInput {
  arn: string;
}
export interface GetReplicationSetOutput {
  replicationSet: ReplicationSet;
}
export interface GetResourcePoliciesInput {
  resourceArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface GetResourcePoliciesOutput {
  resourcePolicies: Array<ResourcePolicy>;
  nextToken?: string;
}
export interface GetResponsePlanInput {
  arn: string;
}
export interface GetResponsePlanOutput {
  arn: string;
  name: string;
  displayName?: string;
  incidentTemplate: IncidentTemplate;
  chatChannel?: ChatChannel;
  engagements?: Array<string>;
  actions?: Array<Action>;
  integrations?: Array<Integration>;
}
export interface GetTimelineEventInput {
  incidentRecordArn: string;
  eventId: string;
}
export interface GetTimelineEventOutput {
  event: TimelineEvent;
}
export type Impact = number;

export interface IncidentRecord {
  arn: string;
  title: string;
  summary?: string;
  status: string;
  impact: number;
  creationTime: Date | string;
  resolvedTime?: Date | string;
  lastModifiedTime: Date | string;
  lastModifiedBy: string;
  automationExecutions?: Array<AutomationExecution>;
  incidentRecordSource: IncidentRecordSource;
  dedupeString: string;
  chatChannel?: ChatChannel;
  notificationTargets?: Array<NotificationTargetItem>;
}
export interface IncidentRecordSource {
  createdBy: string;
  invokedBy?: string;
  resourceArn?: string;
  source: string;
}
export type IncidentRecordStatus = string;

export interface IncidentRecordSummary {
  arn: string;
  title: string;
  status: string;
  impact: number;
  creationTime: Date | string;
  resolvedTime?: Date | string;
  incidentRecordSource: IncidentRecordSource;
}
export type IncidentRecordSummaryList = Array<IncidentRecordSummary>;
export type IncidentSource = string;

export type IncidentSummary = string;

export interface IncidentTemplate {
  title: string;
  impact: number;
  summary?: string;
  dedupeString?: string;
  notificationTargets?: Array<NotificationTargetItem>;
  incidentTags?: Record<string, string>;
}
export type IncidentTitle = string;

export type IntegerList = Array<number>;
interface _Integration {
  pagerDutyConfiguration?: PagerDutyConfiguration;
}

export type Integration = (_Integration & { pagerDutyConfiguration: PagerDutyConfiguration });
export type Integrations = Array<Integration>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface ItemIdentifier {
  value: ItemValue;
  type: string;
}
export type ItemType = string;

interface _ItemValue {
  arn?: string;
  url?: string;
  metricDefinition?: string;
  pagerDutyIncidentDetail?: PagerDutyIncidentDetail;
}

export type ItemValue = (_ItemValue & { arn: string }) | (_ItemValue & { url: string }) | (_ItemValue & { metricDefinition: string }) | (_ItemValue & { pagerDutyIncidentDetail: PagerDutyIncidentDetail });
export interface ListIncidentFindingsInput {
  incidentRecordArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListIncidentFindingsOutput {
  findings: Array<FindingSummary>;
  nextToken?: string;
}
export interface ListIncidentRecordsInput {
  filters?: Array<Filter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListIncidentRecordsOutput {
  incidentRecordSummaries: Array<IncidentRecordSummary>;
  nextToken?: string;
}
export interface ListRelatedItemsInput {
  incidentRecordArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListRelatedItemsOutput {
  relatedItems: Array<RelatedItem>;
  nextToken?: string;
}
export interface ListReplicationSetsInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListReplicationSetsOutput {
  replicationSetArns: Array<string>;
  nextToken?: string;
}
export interface ListResponsePlansInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListResponsePlansOutput {
  responsePlanSummaries: Array<ResponsePlanSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: Record<string, string>;
}
export interface ListTimelineEventsInput {
  incidentRecordArn: string;
  filters?: Array<Filter>;
  sortBy?: string;
  sortOrder?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListTimelineEventsOutput {
  eventSummaries: Array<EventSummary>;
  nextToken?: string;
}
export type MaxResults = number;

export type MetricDefinition = string;

export type NextToken = string;

interface _NotificationTargetItem {
  snsTopicArn?: string;
}

export type NotificationTargetItem = (_NotificationTargetItem & { snsTopicArn: string });
export type NotificationTargetSet = Array<NotificationTargetItem>;
export interface PagerDutyConfiguration {
  name: string;
  secretId: string;
  pagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration;
}
export interface PagerDutyIncidentConfiguration {
  serviceId: string;
}
export interface PagerDutyIncidentDetail {
  id: string;
  autoResolve?: boolean;
  secretId?: string;
}
export type Policy = string;

export type PolicyId = string;

export interface PutResourcePolicyInput {
  resourceArn: string;
  policy: string;
}
export interface PutResourcePolicyOutput {
  policyId: string;
}
export type RawData = string;

export interface RegionInfo {
  sseKmsKeyId?: string;
  status: string;
  statusMessage?: string;
  statusUpdateDateTime: Date | string;
}
export type RegionInfoMap = Record<string, RegionInfo>;
export type RegionMapInput = Record<string, RegionMapInputValue>;
export interface RegionMapInputValue {
  sseKmsKeyId?: string;
}
export type RegionName = string;

export type RegionStatus = string;

export interface RelatedItem {
  identifier: ItemIdentifier;
  title?: string;
  generatedId?: string;
}
export type RelatedItemList = Array<RelatedItem>;
interface _RelatedItemsUpdate {
  itemToAdd?: RelatedItem;
  itemToRemove?: ItemIdentifier;
}

export type RelatedItemsUpdate = (_RelatedItemsUpdate & { itemToAdd: RelatedItem }) | (_RelatedItemsUpdate & { itemToRemove: ItemIdentifier });
export interface ReplicationSet {
  arn?: string;
  regionMap: Record<string, RegionInfo>;
  status: string;
  deletionProtected: boolean;
  createdTime: Date | string;
  createdBy: string;
  lastModifiedTime: Date | string;
  lastModifiedBy: string;
}
export type ReplicationSetArnList = Array<string>;
export type ReplicationSetStatus = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceIdentifier?: string;
  readonly resourceType?: string;
}> {}
export interface ResourcePolicy {
  policyDocument: string;
  policyId: string;
  ramResourceShareRegion: string;
}
export type ResourcePolicyList = Array<ResourcePolicy>;
export type ResourceType = string;

export type ResponsePlanDisplayName = string;

export type ResponsePlanName = string;

export interface ResponsePlanSummary {
  arn: string;
  name: string;
  displayName?: string;
}
export type ResponsePlanSummaryList = Array<ResponsePlanSummary>;
export type RoleArn = string;

export type ServiceCode = string;

export type ServicePrincipal = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceIdentifier?: string;
  readonly resourceType?: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export type SnsArn = string;

export type SortOrder = string;

export type SseKmsKey = string;

export interface SsmAutomation {
  roleArn: string;
  documentName: string;
  documentVersion?: string;
  targetAccount?: string;
  parameters?: Record<string, Array<string>>;
  dynamicParameters?: Record<string, DynamicSsmParameterValue>;
}
export type SsmContactsArn = string;

export type SsmParameters = Record<string, Array<string>>;
export type SsmParameterValues = Array<string>;
export type SsmTargetAccount = string;

export interface StartIncidentInput {
  clientToken?: string;
  responsePlanArn: string;
  title?: string;
  impact?: number;
  triggerDetails?: TriggerDetails;
  relatedItems?: Array<RelatedItem>;
}
export interface StartIncidentOutput {
  incidentRecordArn: string;
}
export type StringList = Array<string>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export type TagMapUpdate = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export interface TimelineEvent {
  incidentRecordArn: string;
  eventId: string;
  eventTime: Date | string;
  eventUpdatedTime: Date | string;
  eventType: string;
  eventData: string;
  eventReferences?: Array<EventReference>;
}
export type TimelineEventSort = string;

export type TimelineEventType = string;

export interface TriggerDetails {
  source: string;
  triggerArn?: string;
  timestamp: Date | string;
  rawData?: string;
}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export type UpdateActionList = Array<UpdateReplicationSetAction>;
export interface UpdateDeletionProtectionInput {
  arn: string;
  deletionProtected: boolean;
  clientToken?: string;
}
export interface UpdateDeletionProtectionOutput {
}
export interface UpdateIncidentRecordInput {
  clientToken?: string;
  arn: string;
  title?: string;
  summary?: string;
  impact?: number;
  status?: string;
  chatChannel?: ChatChannel;
  notificationTargets?: Array<NotificationTargetItem>;
}
export interface UpdateIncidentRecordOutput {
}
export interface UpdateRelatedItemsInput {
  clientToken?: string;
  incidentRecordArn: string;
  relatedItemsUpdate: RelatedItemsUpdate;
}
export interface UpdateRelatedItemsOutput {
}
interface _UpdateReplicationSetAction {
  addRegionAction?: AddRegionAction;
  deleteRegionAction?: DeleteRegionAction;
}

export type UpdateReplicationSetAction = (_UpdateReplicationSetAction & { addRegionAction: AddRegionAction }) | (_UpdateReplicationSetAction & { deleteRegionAction: DeleteRegionAction });
export interface UpdateReplicationSetInput {
  arn: string;
  actions: Array<UpdateReplicationSetAction>;
  clientToken?: string;
}
export interface UpdateReplicationSetOutput {
}
export interface UpdateResponsePlanInput {
  clientToken?: string;
  arn: string;
  displayName?: string;
  incidentTemplateTitle?: string;
  incidentTemplateImpact?: number;
  incidentTemplateSummary?: string;
  incidentTemplateDedupeString?: string;
  incidentTemplateNotificationTargets?: Array<NotificationTargetItem>;
  chatChannel?: ChatChannel;
  engagements?: Array<string>;
  actions?: Array<Action>;
  incidentTemplateTags?: Record<string, string>;
  integrations?: Array<Integration>;
}
export interface UpdateResponsePlanOutput {
}
export interface UpdateTimelineEventInput {
  clientToken?: string;
  incidentRecordArn: string;
  eventId: string;
  eventTime?: Date | string;
  eventType?: string;
  eventData?: string;
  eventReferences?: Array<EventReference>;
}
export interface UpdateTimelineEventOutput {
}
export type Url = string;

export type UUID = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export type VariableType = string;

export declare namespace BatchGetIncidentFindings {
  export type Input = BatchGetIncidentFindingsInput;
  export type Output = BatchGetIncidentFindingsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateReplicationSet {
  export type Input = CreateReplicationSetInput;
  export type Output = CreateReplicationSetOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateResponsePlan {
  export type Input = CreateResponsePlanInput;
  export type Output = CreateResponsePlanOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTimelineEvent {
  export type Input = CreateTimelineEventInput;
  export type Output = CreateTimelineEventOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIncidentRecord {
  export type Input = DeleteIncidentRecordInput;
  export type Output = DeleteIncidentRecordOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteReplicationSet {
  export type Input = DeleteReplicationSetInput;
  export type Output = DeleteReplicationSetOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyInput;
  export type Output = DeleteResourcePolicyOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResponsePlan {
  export type Input = DeleteResponsePlanInput;
  export type Output = DeleteResponsePlanOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTimelineEvent {
  export type Input = DeleteTimelineEventInput;
  export type Output = DeleteTimelineEventOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIncidentRecord {
  export type Input = GetIncidentRecordInput;
  export type Output = GetIncidentRecordOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetReplicationSet {
  export type Input = GetReplicationSetInput;
  export type Output = GetReplicationSetOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcePolicies {
  export type Input = GetResourcePoliciesInput;
  export type Output = GetResourcePoliciesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResponsePlan {
  export type Input = GetResponsePlanInput;
  export type Output = GetResponsePlanOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTimelineEvent {
  export type Input = GetTimelineEventInput;
  export type Output = GetTimelineEventOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIncidentFindings {
  export type Input = ListIncidentFindingsInput;
  export type Output = ListIncidentFindingsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIncidentRecords {
  export type Input = ListIncidentRecordsInput;
  export type Output = ListIncidentRecordsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRelatedItems {
  export type Input = ListRelatedItemsInput;
  export type Output = ListRelatedItemsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListReplicationSets {
  export type Input = ListReplicationSetsInput;
  export type Output = ListReplicationSetsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResponsePlans {
  export type Input = ListResponsePlansInput;
  export type Output = ListResponsePlansOutput;
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

export declare namespace ListTimelineEvents {
  export type Input = ListTimelineEventsInput;
  export type Output = ListTimelineEventsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyInput;
  export type Output = PutResourcePolicyOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartIncident {
  export type Input = StartIncidentInput;
  export type Output = StartIncidentOutput;
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
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
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

export declare namespace UpdateDeletionProtection {
  export type Input = UpdateDeletionProtectionInput;
  export type Output = UpdateDeletionProtectionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateIncidentRecord {
  export type Input = UpdateIncidentRecordInput;
  export type Output = UpdateIncidentRecordOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRelatedItems {
  export type Input = UpdateRelatedItemsInput;
  export type Output = UpdateRelatedItemsOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateReplicationSet {
  export type Input = UpdateReplicationSetInput;
  export type Output = UpdateReplicationSetOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResponsePlan {
  export type Input = UpdateResponsePlanInput;
  export type Output = UpdateResponsePlanOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTimelineEvent {
  export type Input = UpdateTimelineEventInput;
  export type Output = UpdateTimelineEventOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type SSMIncidentsErrors = AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError;


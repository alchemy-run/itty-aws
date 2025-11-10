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

export declare class ConnectCampaignsV2 extends AWSServiceClient {
  createCampaign(
    input: CreateCampaignRequest,
  ): Effect.Effect<
    CreateCampaignResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCampaign(
    input: DeleteCampaignRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteCampaignChannelSubtypeConfig(
    input: DeleteCampaignChannelSubtypeConfigRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteCampaignCommunicationLimits(
    input: DeleteCampaignCommunicationLimitsRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteCampaignCommunicationTime(
    input: DeleteCampaignCommunicationTimeRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteConnectInstanceConfig(
    input: DeleteConnectInstanceConfigRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | InvalidStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteConnectInstanceIntegration(
    input: DeleteConnectInstanceIntegrationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteInstanceOnboardingJob(
    input: DeleteInstanceOnboardingJobRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeCampaign(
    input: DescribeCampaignRequest,
  ): Effect.Effect<
    DescribeCampaignResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getCampaignState(
    input: GetCampaignStateRequest,
  ): Effect.Effect<
    GetCampaignStateResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCampaignStateBatch(
    input: GetCampaignStateBatchRequest,
  ): Effect.Effect<
    GetCampaignStateBatchResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getConnectInstanceConfig(
    input: GetConnectInstanceConfigRequest,
  ): Effect.Effect<
    GetConnectInstanceConfigResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getInstanceCommunicationLimits(
    input: GetInstanceCommunicationLimitsRequest,
  ): Effect.Effect<
    GetInstanceCommunicationLimitsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getInstanceOnboardingJobStatus(
    input: GetInstanceOnboardingJobStatusRequest,
  ): Effect.Effect<
    GetInstanceOnboardingJobStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listCampaigns(
    input: ListCampaignsRequest,
  ): Effect.Effect<
    ListCampaignsResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listConnectInstanceIntegrations(
    input: ListConnectInstanceIntegrationsRequest,
  ): Effect.Effect<
    ListConnectInstanceIntegrationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
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
  pauseCampaign(
    input: PauseCampaignRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putConnectInstanceIntegration(
    input: PutConnectInstanceIntegrationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putInstanceCommunicationLimits(
    input: PutInstanceCommunicationLimitsRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putOutboundRequestBatch(
    input: PutOutboundRequestBatchRequest,
  ): Effect.Effect<
    PutOutboundRequestBatchResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putProfileOutboundRequestBatch(
    input: PutProfileOutboundRequestBatchRequest,
  ): Effect.Effect<
    PutProfileOutboundRequestBatchResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  resumeCampaign(
    input: ResumeCampaignRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startCampaign(
    input: StartCampaignRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startInstanceOnboardingJob(
    input: StartInstanceOnboardingJobRequest,
  ): Effect.Effect<
    StartInstanceOnboardingJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopCampaign(
    input: StopCampaignRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateCampaignChannelSubtypeConfig(
    input: UpdateCampaignChannelSubtypeConfigRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateCampaignCommunicationLimits(
    input: UpdateCampaignCommunicationLimitsRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateCampaignCommunicationTime(
    input: UpdateCampaignCommunicationTimeRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateCampaignFlowAssociation(
    input: UpdateCampaignFlowAssociationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateCampaignName(
    input: UpdateCampaignNameRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateCampaignSchedule(
    input: UpdateCampaignScheduleRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateCampaignSource(
    input: UpdateCampaignSourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Connectcampaignsv2 extends ConnectCampaignsV2 {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export interface AgentlessConfig {}
export interface AnswerMachineDetectionConfig {
  enableAnswerMachineDetection: boolean;
  awaitAnswerMachinePrompt?: boolean;
}
export type Arn = string;

export type AttributeName = string;

export type Attributes = Record<string, string>;
export type AttributeValue = string;

export type BandwidthAllocation = number;

export interface Campaign {
  id: string;
  arn: string;
  name: string;
  connectInstanceId: string;
  channelSubtypeConfig: ChannelSubtypeConfig;
  source?: Source;
  connectCampaignFlowArn?: string;
  schedule?: Schedule;
  communicationTimeConfig?: CommunicationTimeConfig;
  communicationLimitsOverride?: CommunicationLimitsConfig;
  tags?: Record<string, string>;
}
export type CampaignArn = string;

export type CampaignDeletionPolicy = string;

export interface CampaignFilters {
  instanceIdFilter?: InstanceIdFilter;
}
export type CampaignId = string;

export type CampaignIdList = Array<string>;
export type CampaignName = string;

export type CampaignState = string;

export interface CampaignSummary {
  id: string;
  arn: string;
  name: string;
  connectInstanceId: string;
  channelSubtypes: Array<string>;
  schedule?: Schedule;
  connectCampaignFlowArn?: string;
}
export type CampaignSummaryList = Array<CampaignSummary>;
export type Capacity = number;

export type ChannelSubtype = string;

export interface ChannelSubtypeConfig {
  telephony?: TelephonyChannelSubtypeConfig;
  sms?: SmsChannelSubtypeConfig;
  email?: EmailChannelSubtypeConfig;
}
export type ChannelSubtypeList = Array<string>;
interface _ChannelSubtypeParameters {
  telephony?: TelephonyChannelSubtypeParameters;
  sms?: SmsChannelSubtypeParameters;
  email?: EmailChannelSubtypeParameters;
}

export type ChannelSubtypeParameters =
  | (_ChannelSubtypeParameters & {
      telephony: TelephonyChannelSubtypeParameters;
    })
  | (_ChannelSubtypeParameters & { sms: SmsChannelSubtypeParameters })
  | (_ChannelSubtypeParameters & { email: EmailChannelSubtypeParameters });
export type ClientToken = string;

export interface CommunicationLimit {
  maxCountPerRecipient: number;
  frequency: number;
  unit: string;
}
export type CommunicationLimitList = Array<CommunicationLimit>;
interface _CommunicationLimits {
  communicationLimitsList?: Array<CommunicationLimit>;
}

export type CommunicationLimits = _CommunicationLimits & {
  communicationLimitsList: Array<CommunicationLimit>;
};
export interface CommunicationLimitsConfig {
  allChannelSubtypes?: CommunicationLimits;
  instanceLimitsHandling?: string;
}
export type CommunicationLimitsConfigType = string;

export type CommunicationLimitTimeUnit = string;

export interface CommunicationTimeConfig {
  localTimeZoneConfig: LocalTimeZoneConfig;
  telephony?: TimeWindow;
  sms?: TimeWindow;
  email?: TimeWindow;
}
export type CommunicationTimeConfigType = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export type ContactFlowId = string;

export interface CreateCampaignRequest {
  name: string;
  connectInstanceId: string;
  channelSubtypeConfig: ChannelSubtypeConfig;
  source?: Source;
  connectCampaignFlowArn?: string;
  schedule?: Schedule;
  communicationTimeConfig?: CommunicationTimeConfig;
  communicationLimitsOverride?: CommunicationLimitsConfig;
  tags?: Record<string, string>;
}
export interface CreateCampaignResponse {
  id?: string;
  arn?: string;
  tags?: Record<string, string>;
}
export interface CustomerProfilesIntegrationConfig {
  domainArn: string;
  objectTypeNames: Record<string, string>;
}
export interface CustomerProfilesIntegrationIdentifier {
  domainArn: string;
}
export interface CustomerProfilesIntegrationSummary {
  domainArn: string;
  objectTypeNames: Record<string, string>;
}
export type DailyHours = Record<string, Array<TimeRange>>;
export type DayOfWeek = string;

export interface DeleteCampaignChannelSubtypeConfigRequest {
  id: string;
  channelSubtype: string;
}
export interface DeleteCampaignCommunicationLimitsRequest {
  id: string;
  config: string;
}
export interface DeleteCampaignCommunicationTimeRequest {
  id: string;
  config: string;
}
export interface DeleteCampaignRequest {
  id: string;
}
export interface DeleteConnectInstanceConfigRequest {
  connectInstanceId: string;
  campaignDeletionPolicy?: string;
}
export interface DeleteConnectInstanceIntegrationRequest {
  connectInstanceId: string;
  integrationIdentifier: IntegrationIdentifier;
}
export interface DeleteInstanceOnboardingJobRequest {
  connectInstanceId: string;
}
export interface DescribeCampaignRequest {
  id: string;
}
export interface DescribeCampaignResponse {
  campaign?: Campaign;
}
export type DestinationPhoneNumber = string;

export type DialRequestId = string;

export type EmailAddress = string;

export interface EmailChannelSubtypeConfig {
  capacity?: number;
  outboundMode: EmailOutboundMode;
  defaultOutboundConfig: EmailOutboundConfig;
}
export interface EmailChannelSubtypeParameters {
  destinationEmailAddress: string;
  connectSourceEmailAddress?: string;
  templateArn?: string;
  templateParameters: Record<string, string>;
}
export type EmailDisplayName = string;

export interface EmailOutboundConfig {
  connectSourceEmailAddress: string;
  sourceEmailAddressDisplayName?: string;
  wisdomTemplateArn: string;
}
interface _EmailOutboundMode {
  agentless?: AgentlessConfig;
}

export type EmailOutboundMode = _EmailOutboundMode & {
  agentless: AgentlessConfig;
};
export type Enabled = boolean;

export interface EncryptionConfig {
  enabled: boolean;
  encryptionType?: string;
  keyArn?: string;
}
export type EncryptionKey = string;

export type EncryptionType = string;

export interface EventTrigger {
  customerProfilesDomainArn?: string;
}
export type EventType = string;

export interface FailedCampaignStateResponse {
  campaignId?: string;
  failureCode?: string;
}
export type FailedCampaignStateResponseList =
  Array<FailedCampaignStateResponse>;
export interface FailedProfileOutboundRequest {
  clientToken?: string;
  id?: string;
  failureCode?: string;
}
export type FailedProfileOutboundRequestList =
  Array<FailedProfileOutboundRequest>;
export interface FailedRequest {
  clientToken?: string;
  id?: string;
  failureCode?: string;
}
export type FailedRequestList = Array<FailedRequest>;
export type FailureCode = string;

export type GetCampaignStateBatchFailureCode = string;

export interface GetCampaignStateBatchRequest {
  campaignIds: Array<string>;
}
export interface GetCampaignStateBatchResponse {
  successfulRequests?: Array<SuccessfulCampaignStateResponse>;
  failedRequests?: Array<FailedCampaignStateResponse>;
}
export interface GetCampaignStateRequest {
  id: string;
}
export interface GetCampaignStateResponse {
  state?: string;
}
export interface GetConnectInstanceConfigRequest {
  connectInstanceId: string;
}
export interface GetConnectInstanceConfigResponse {
  connectInstanceConfig?: InstanceConfig;
}
export interface GetInstanceCommunicationLimitsRequest {
  connectInstanceId: string;
}
export interface GetInstanceCommunicationLimitsResponse {
  communicationLimitsConfig?: InstanceCommunicationLimitsConfig;
}
export interface GetInstanceOnboardingJobStatusRequest {
  connectInstanceId: string;
}
export interface GetInstanceOnboardingJobStatusResponse {
  connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus;
}
export interface InstanceCommunicationLimitsConfig {
  allChannelSubtypes?: CommunicationLimits;
}
export interface InstanceConfig {
  connectInstanceId: string;
  serviceLinkedRoleArn: string;
  encryptionConfig: EncryptionConfig;
}
export type InstanceId = string;

export interface InstanceIdFilter {
  value: string;
  operator: string;
}
export type InstanceIdFilterOperator = string;

export type InstanceLimitsHandling = string;

export type InstanceOnboardingJobFailureCode = string;

export interface InstanceOnboardingJobStatus {
  connectInstanceId: string;
  status: string;
  failureCode?: string;
}
export type InstanceOnboardingJobStatusCode = string;

interface _IntegrationConfig {
  customerProfiles?: CustomerProfilesIntegrationConfig;
  qConnect?: QConnectIntegrationConfig;
}

export type IntegrationConfig =
  | (_IntegrationConfig & {
      customerProfiles: CustomerProfilesIntegrationConfig;
    })
  | (_IntegrationConfig & { qConnect: QConnectIntegrationConfig });
interface _IntegrationIdentifier {
  customerProfiles?: CustomerProfilesIntegrationIdentifier;
  qConnect?: QConnectIntegrationIdentifier;
}

export type IntegrationIdentifier =
  | (_IntegrationIdentifier & {
      customerProfiles: CustomerProfilesIntegrationIdentifier;
    })
  | (_IntegrationIdentifier & { qConnect: QConnectIntegrationIdentifier });
interface _IntegrationSummary {
  customerProfiles?: CustomerProfilesIntegrationSummary;
  qConnect?: QConnectIntegrationSummary;
}

export type IntegrationSummary =
  | (_IntegrationSummary & {
      customerProfiles: CustomerProfilesIntegrationSummary;
    })
  | (_IntegrationSummary & { qConnect: QConnectIntegrationSummary });
export type IntegrationSummaryList = Array<IntegrationSummary>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export declare class InvalidCampaignStateException extends EffectData.TaggedError(
  "InvalidCampaignStateException",
)<{
  readonly state: string;
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export declare class InvalidStateException extends EffectData.TaggedError(
  "InvalidStateException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export type Iso8601Date = string;

export type Iso8601Duration = string;

export type Iso8601Time = string;

export interface ListCampaignsRequest {
  maxResults?: number;
  nextToken?: string;
  filters?: CampaignFilters;
}
export interface ListCampaignsResponse {
  nextToken?: string;
  campaignSummaryList?: Array<CampaignSummary>;
}
export interface ListConnectInstanceIntegrationsRequest {
  connectInstanceId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListConnectInstanceIntegrationsResponse {
  nextToken?: string;
  integrationSummaryList?: Array<IntegrationSummary>;
}
export interface ListTagsForResourceRequest {
  arn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface LocalTimeZoneConfig {
  defaultTimeZone?: string;
  localTimeZoneDetection?: Array<string>;
}
export type LocalTimeZoneDetection = Array<string>;
export type LocalTimeZoneDetectionType = string;

export type MaxResults = number;

export type NextToken = string;

export type ObjectTypeName = string;

export type ObjectTypeNamesMap = Record<string, string>;
interface _OpenHours {
  dailyHours?: Record<string, Array<TimeRange>>;
}

export type OpenHours = _OpenHours & {
  dailyHours: Record<string, Array<TimeRange>>;
};
export interface OutboundRequest {
  clientToken: string;
  expirationTime: Date | string;
  channelSubtypeParameters: ChannelSubtypeParameters;
}
export type OutboundRequestList = Array<OutboundRequest>;
export interface PauseCampaignRequest {
  id: string;
}
export interface PredictiveConfig {
  bandwidthAllocation: number;
}
export type ProfileId = string;

export interface ProfileOutboundRequest {
  clientToken: string;
  profileId: string;
  expirationTime?: Date | string;
}
export type ProfileOutboundRequestFailureCode = string;

export type ProfileOutboundRequestId = string;

export type ProfileOutboundRequestList = Array<ProfileOutboundRequest>;
export interface ProgressiveConfig {
  bandwidthAllocation: number;
}
export interface PutConnectInstanceIntegrationRequest {
  connectInstanceId: string;
  integrationConfig: IntegrationConfig;
}
export interface PutInstanceCommunicationLimitsRequest {
  connectInstanceId: string;
  communicationLimitsConfig: InstanceCommunicationLimitsConfig;
}
export interface PutOutboundRequestBatchRequest {
  id: string;
  outboundRequests: Array<OutboundRequest>;
}
export interface PutOutboundRequestBatchResponse {
  successfulRequests?: Array<SuccessfulRequest>;
  failedRequests?: Array<FailedRequest>;
}
export interface PutProfileOutboundRequestBatchRequest {
  id: string;
  profileOutboundRequests: Array<ProfileOutboundRequest>;
}
export interface PutProfileOutboundRequestBatchResponse {
  successfulRequests?: Array<SuccessfulProfileOutboundRequest>;
  failedRequests?: Array<FailedProfileOutboundRequest>;
}
export interface QConnectIntegrationConfig {
  knowledgeBaseArn: string;
}
export interface QConnectIntegrationIdentifier {
  knowledgeBaseArn: string;
}
export interface QConnectIntegrationSummary {
  knowledgeBaseArn: string;
}
export type QueueId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export interface RestrictedPeriod {
  name?: string;
  startDate: string;
  endDate: string;
}
export type RestrictedPeriodList = Array<RestrictedPeriod>;
export type RestrictedPeriodName = string;

interface _RestrictedPeriods {
  restrictedPeriodList?: Array<RestrictedPeriod>;
}

export type RestrictedPeriods = _RestrictedPeriods & {
  restrictedPeriodList: Array<RestrictedPeriod>;
};
export interface ResumeCampaignRequest {
  id: string;
}
export interface Schedule {
  startTime: Date | string;
  endTime: Date | string;
  refreshFrequency?: string;
}
export type ServiceLinkedRoleArn = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export interface SmsChannelSubtypeConfig {
  capacity?: number;
  outboundMode: SmsOutboundMode;
  defaultOutboundConfig: SmsOutboundConfig;
}
export interface SmsChannelSubtypeParameters {
  destinationPhoneNumber: string;
  connectSourcePhoneNumberArn?: string;
  templateArn?: string;
  templateParameters: Record<string, string>;
}
export interface SmsOutboundConfig {
  connectSourcePhoneNumberArn: string;
  wisdomTemplateArn: string;
}
interface _SmsOutboundMode {
  agentless?: AgentlessConfig;
}

export type SmsOutboundMode = _SmsOutboundMode & { agentless: AgentlessConfig };
interface _Source {
  customerProfilesSegmentArn?: string;
  eventTrigger?: EventTrigger;
}

export type Source =
  | (_Source & { customerProfilesSegmentArn: string })
  | (_Source & { eventTrigger: EventTrigger });
export type SourcePhoneNumber = string;

export interface StartCampaignRequest {
  id: string;
}
export interface StartInstanceOnboardingJobRequest {
  connectInstanceId: string;
  encryptionConfig: EncryptionConfig;
}
export interface StartInstanceOnboardingJobResponse {
  connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus;
}
export interface StopCampaignRequest {
  id: string;
}
export interface SuccessfulCampaignStateResponse {
  campaignId?: string;
  state?: string;
}
export type SuccessfulCampaignStateResponseList =
  Array<SuccessfulCampaignStateResponse>;
export interface SuccessfulProfileOutboundRequest {
  clientToken?: string;
  id?: string;
}
export type SuccessfulProfileOutboundRequestList =
  Array<SuccessfulProfileOutboundRequest>;
export interface SuccessfulRequest {
  clientToken?: string;
  id?: string;
}
export type SuccessfulRequestList = Array<SuccessfulRequest>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  arn: string;
  tags: Record<string, string>;
}
export type TagValue = string;

export interface TelephonyChannelSubtypeConfig {
  capacity?: number;
  connectQueueId?: string;
  outboundMode: TelephonyOutboundMode;
  defaultOutboundConfig: TelephonyOutboundConfig;
}
export interface TelephonyChannelSubtypeParameters {
  destinationPhoneNumber: string;
  attributes: Record<string, string>;
  connectSourcePhoneNumber?: string;
  answerMachineDetectionConfig?: AnswerMachineDetectionConfig;
}
export interface TelephonyOutboundConfig {
  connectContactFlowId: string;
  connectSourcePhoneNumber?: string;
  answerMachineDetectionConfig?: AnswerMachineDetectionConfig;
}
interface _TelephonyOutboundMode {
  progressive?: ProgressiveConfig;
  predictive?: PredictiveConfig;
  agentless?: AgentlessConfig;
}

export type TelephonyOutboundMode =
  | (_TelephonyOutboundMode & { progressive: ProgressiveConfig })
  | (_TelephonyOutboundMode & { predictive: PredictiveConfig })
  | (_TelephonyOutboundMode & { agentless: AgentlessConfig });
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export interface TimeRange {
  startTime: string;
  endTime: string;
}
export type TimeRangeList = Array<TimeRange>;
export type TimeStamp = Date | string;

export interface TimeWindow {
  openHours: OpenHours;
  restrictedPeriods?: RestrictedPeriods;
}
export type TimeZone = string;

export interface UntagResourceRequest {
  arn: string;
  tagKeys: Array<string>;
}
export interface UpdateCampaignChannelSubtypeConfigRequest {
  id: string;
  channelSubtypeConfig: ChannelSubtypeConfig;
}
export interface UpdateCampaignCommunicationLimitsRequest {
  id: string;
  communicationLimitsOverride: CommunicationLimitsConfig;
}
export interface UpdateCampaignCommunicationTimeRequest {
  id: string;
  communicationTimeConfig: CommunicationTimeConfig;
}
export interface UpdateCampaignFlowAssociationRequest {
  id: string;
  connectCampaignFlowArn: string;
}
export interface UpdateCampaignNameRequest {
  id: string;
  name: string;
}
export interface UpdateCampaignScheduleRequest {
  id: string;
  schedule: Schedule;
}
export interface UpdateCampaignSourceRequest {
  id: string;
  source: Source;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly xAmzErrorType?: string;
}> {}
export type XAmazonErrorType = string;

export declare namespace CreateCampaign {
  export type Input = CreateCampaignRequest;
  export type Output = CreateCampaignResponse;
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

export declare namespace DeleteCampaign {
  export type Input = DeleteCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCampaignChannelSubtypeConfig {
  export type Input = DeleteCampaignChannelSubtypeConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCampaignCommunicationLimits {
  export type Input = DeleteCampaignCommunicationLimitsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCampaignCommunicationTime {
  export type Input = DeleteCampaignCommunicationTimeRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConnectInstanceConfig {
  export type Input = DeleteConnectInstanceConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConnectInstanceIntegration {
  export type Input = DeleteConnectInstanceIntegrationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInstanceOnboardingJob {
  export type Input = DeleteInstanceOnboardingJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeCampaign {
  export type Input = DescribeCampaignRequest;
  export type Output = DescribeCampaignResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCampaignState {
  export type Input = GetCampaignStateRequest;
  export type Output = GetCampaignStateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCampaignStateBatch {
  export type Input = GetCampaignStateBatchRequest;
  export type Output = GetCampaignStateBatchResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConnectInstanceConfig {
  export type Input = GetConnectInstanceConfigRequest;
  export type Output = GetConnectInstanceConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInstanceCommunicationLimits {
  export type Input = GetInstanceCommunicationLimitsRequest;
  export type Output = GetInstanceCommunicationLimitsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInstanceOnboardingJobStatus {
  export type Input = GetInstanceOnboardingJobStatusRequest;
  export type Output = GetInstanceOnboardingJobStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCampaigns {
  export type Input = ListCampaignsRequest;
  export type Output = ListCampaignsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConnectInstanceIntegrations {
  export type Input = ListConnectInstanceIntegrationsRequest;
  export type Output = ListConnectInstanceIntegrationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
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

export declare namespace PauseCampaign {
  export type Input = PauseCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutConnectInstanceIntegration {
  export type Input = PutConnectInstanceIntegrationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutInstanceCommunicationLimits {
  export type Input = PutInstanceCommunicationLimitsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutOutboundRequestBatch {
  export type Input = PutOutboundRequestBatchRequest;
  export type Output = PutOutboundRequestBatchResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutProfileOutboundRequestBatch {
  export type Input = PutProfileOutboundRequestBatchRequest;
  export type Output = PutProfileOutboundRequestBatchResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResumeCampaign {
  export type Input = ResumeCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartCampaign {
  export type Input = StartCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartInstanceOnboardingJob {
  export type Input = StartInstanceOnboardingJobRequest;
  export type Output = StartInstanceOnboardingJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopCampaign {
  export type Input = StopCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCampaignChannelSubtypeConfig {
  export type Input = UpdateCampaignChannelSubtypeConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCampaignCommunicationLimits {
  export type Input = UpdateCampaignCommunicationLimitsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCampaignCommunicationTime {
  export type Input = UpdateCampaignCommunicationTimeRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCampaignFlowAssociation {
  export type Input = UpdateCampaignFlowAssociationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCampaignName {
  export type Input = UpdateCampaignNameRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCampaignSchedule {
  export type Input = UpdateCampaignScheduleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCampaignSource {
  export type Input = UpdateCampaignSourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidCampaignStateException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

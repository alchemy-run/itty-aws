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

export declare class Notifications extends AWSServiceClient {
  listManagedNotificationChannelAssociations(
    input: ListManagedNotificationChannelAssociationsRequest,
  ): Effect.Effect<
    ListManagedNotificationChannelAssociationsResponse,
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
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
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
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateChannel(
    input: AssociateChannelRequest,
  ): Effect.Effect<
    AssociateChannelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateManagedNotificationAccountContact(
    input: AssociateManagedNotificationAccountContactRequest,
  ): Effect.Effect<
    AssociateManagedNotificationAccountContactResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateManagedNotificationAdditionalChannel(
    input: AssociateManagedNotificationAdditionalChannelRequest,
  ): Effect.Effect<
    AssociateManagedNotificationAdditionalChannelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createEventRule(
    input: CreateEventRuleRequest,
  ): Effect.Effect<
    CreateEventRuleResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createNotificationConfiguration(
    input: CreateNotificationConfigurationRequest,
  ): Effect.Effect<
    CreateNotificationConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEventRule(
    input: DeleteEventRuleRequest,
  ): Effect.Effect<
    DeleteEventRuleResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteNotificationConfiguration(
    input: DeleteNotificationConfigurationRequest,
  ): Effect.Effect<
    DeleteNotificationConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deregisterNotificationHub(
    input: DeregisterNotificationHubRequest,
  ): Effect.Effect<
    DeregisterNotificationHubResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disableNotificationsAccessForOrganization(
    input: DisableNotificationsAccessForOrganizationRequest,
  ): Effect.Effect<
    DisableNotificationsAccessForOrganizationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateChannel(
    input: DisassociateChannelRequest,
  ): Effect.Effect<
    DisassociateChannelResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateManagedNotificationAccountContact(
    input: DisassociateManagedNotificationAccountContactRequest,
  ): Effect.Effect<
    DisassociateManagedNotificationAccountContactResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateManagedNotificationAdditionalChannel(
    input: DisassociateManagedNotificationAdditionalChannelRequest,
  ): Effect.Effect<
    DisassociateManagedNotificationAdditionalChannelResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  enableNotificationsAccessForOrganization(
    input: EnableNotificationsAccessForOrganizationRequest,
  ): Effect.Effect<
    EnableNotificationsAccessForOrganizationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEventRule(
    input: GetEventRuleRequest,
  ): Effect.Effect<
    GetEventRuleResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getManagedNotificationChildEvent(
    input: GetManagedNotificationChildEventRequest,
  ): Effect.Effect<
    GetManagedNotificationChildEventResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getManagedNotificationConfiguration(
    input: GetManagedNotificationConfigurationRequest,
  ): Effect.Effect<
    GetManagedNotificationConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getManagedNotificationEvent(
    input: GetManagedNotificationEventRequest,
  ): Effect.Effect<
    GetManagedNotificationEventResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getNotificationConfiguration(
    input: GetNotificationConfigurationRequest,
  ): Effect.Effect<
    GetNotificationConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getNotificationEvent(
    input: GetNotificationEventRequest,
  ): Effect.Effect<
    GetNotificationEventResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getNotificationsAccessForOrganization(
    input: GetNotificationsAccessForOrganizationRequest,
  ): Effect.Effect<
    GetNotificationsAccessForOrganizationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listChannels(
    input: ListChannelsRequest,
  ): Effect.Effect<
    ListChannelsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEventRules(
    input: ListEventRulesRequest,
  ): Effect.Effect<
    ListEventRulesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listManagedNotificationChildEvents(
    input: ListManagedNotificationChildEventsRequest,
  ): Effect.Effect<
    ListManagedNotificationChildEventsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listManagedNotificationConfigurations(
    input: ListManagedNotificationConfigurationsRequest,
  ): Effect.Effect<
    ListManagedNotificationConfigurationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listManagedNotificationEvents(
    input: ListManagedNotificationEventsRequest,
  ): Effect.Effect<
    ListManagedNotificationEventsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listNotificationConfigurations(
    input: ListNotificationConfigurationsRequest,
  ): Effect.Effect<
    ListNotificationConfigurationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listNotificationEvents(
    input: ListNotificationEventsRequest,
  ): Effect.Effect<
    ListNotificationEventsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listNotificationHubs(
    input: ListNotificationHubsRequest,
  ): Effect.Effect<
    ListNotificationHubsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  registerNotificationHub(
    input: RegisterNotificationHubRequest,
  ): Effect.Effect<
    RegisterNotificationHubResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEventRule(
    input: UpdateEventRuleRequest,
  ): Effect.Effect<
    UpdateEventRuleResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateNotificationConfiguration(
    input: UpdateNotificationConfigurationRequest,
  ): Effect.Effect<
    UpdateNotificationConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccessStatus = "ENABLED" | "DISABLED" | "PENDING";
export type AccountContactType = string;

export type AccountId = string;

export type AggregatedNotificationRegions = Array<string>;
export interface AggregationDetail {
  summarizationDimensions?: Array<SummarizationDimensionDetail>;
}
export type AggregationDuration = string;

export type AggregationEventType = string;

export interface AggregationKey {
  name: string;
  value: string;
}
export type AggregationKeys = Array<AggregationKey>;
export interface AggregationSummary {
  eventCount: number;
  aggregatedBy: Array<AggregationKey>;
  aggregatedAccounts: SummarizationDimensionOverview;
  aggregatedRegions: SummarizationDimensionOverview;
  aggregatedOrganizationalUnits?: SummarizationDimensionOverview;
  additionalSummarizationDimensions?: Array<SummarizationDimensionOverview>;
}
export type Arn = string;

export interface AssociateChannelRequest {
  arn: string;
  notificationConfigurationArn: string;
}
export interface AssociateChannelResponse {}
export interface AssociateManagedNotificationAccountContactRequest {
  contactIdentifier: string;
  managedNotificationConfigurationArn: string;
}
export interface AssociateManagedNotificationAccountContactResponse {}
export interface AssociateManagedNotificationAdditionalChannelRequest {
  channelArn: string;
  managedNotificationConfigurationArn: string;
}
export interface AssociateManagedNotificationAdditionalChannelResponse {}
export type ChannelArn = string;

export type ChannelAssociationOverrideOption = string;

export type ChannelIdentifier = string;

export type Channels = Array<string>;
export type ChannelType = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
}> {}
export interface CreateEventRuleRequest {
  notificationConfigurationArn: string;
  source: string;
  eventType: string;
  eventPattern?: string;
  regions: Array<string>;
}
export interface CreateEventRuleResponse {
  arn: string;
  notificationConfigurationArn: string;
  statusSummaryByRegion: Record<string, EventRuleStatusSummary>;
}
export interface CreateNotificationConfigurationRequest {
  name: string;
  description: string;
  aggregationDuration?: string;
  tags?: Record<string, string>;
}
export interface CreateNotificationConfigurationResponse {
  arn: string;
  status: string;
}
export type CreationTime = Date | string;

export interface DeleteEventRuleRequest {
  arn: string;
}
export interface DeleteEventRuleResponse {}
export interface DeleteNotificationConfigurationRequest {
  arn: string;
}
export interface DeleteNotificationConfigurationResponse {}
export interface DeregisterNotificationHubRequest {
  notificationHubRegion: string;
}
export interface DeregisterNotificationHubResponse {
  notificationHubRegion: string;
  statusSummary: NotificationHubStatusSummary;
}
export interface Dimension {
  name: string;
  value: string;
}
export type Dimensions = Array<Dimension>;
export interface DisableNotificationsAccessForOrganizationRequest {}
export interface DisableNotificationsAccessForOrganizationResponse {}
export interface DisassociateChannelRequest {
  arn: string;
  notificationConfigurationArn: string;
}
export interface DisassociateChannelResponse {}
export interface DisassociateManagedNotificationAccountContactRequest {
  contactIdentifier: string;
  managedNotificationConfigurationArn: string;
}
export interface DisassociateManagedNotificationAccountContactResponse {}
export interface DisassociateManagedNotificationAdditionalChannelRequest {
  channelArn: string;
  managedNotificationConfigurationArn: string;
}
export interface DisassociateManagedNotificationAdditionalChannelResponse {}
export interface EnableNotificationsAccessForOrganizationRequest {}
export interface EnableNotificationsAccessForOrganizationResponse {}
export type ErrorMessage = string;

export type EventRuleArn = string;

export type EventRuleEventPattern = string;

export type EventRules = Array<EventRuleStructure>;
export type EventRuleStatus = string;

export type EventRuleStatusReason = string;

export interface EventRuleStatusSummary {
  status: string;
  reason: string;
}
export interface EventRuleStructure {
  arn: string;
  notificationConfigurationArn: string;
  creationTime: Date | string;
  source: string;
  eventType: string;
  eventPattern: string;
  regions: Array<string>;
  managedRules: Array<string>;
  statusSummaryByRegion: Record<string, EventRuleStatusSummary>;
}
export type EventStatus = string;

export type EventType = string;

export interface GetEventRuleRequest {
  arn: string;
}
export interface GetEventRuleResponse {
  arn: string;
  notificationConfigurationArn: string;
  creationTime: Date | string;
  source: string;
  eventType: string;
  eventPattern: string;
  regions: Array<string>;
  managedRules: Array<string>;
  statusSummaryByRegion: Record<string, EventRuleStatusSummary>;
}
export interface GetManagedNotificationChildEventRequest {
  arn: string;
  locale?: string;
}
export interface GetManagedNotificationChildEventResponse {
  arn: string;
  managedNotificationConfigurationArn: string;
  creationTime: Date | string;
  content: ManagedNotificationChildEvent;
}
export interface GetManagedNotificationConfigurationRequest {
  arn: string;
}
export interface GetManagedNotificationConfigurationResponse {
  arn: string;
  name: string;
  description: string;
  category: string;
  subCategory: string;
}
export interface GetManagedNotificationEventRequest {
  arn: string;
  locale?: string;
}
export interface GetManagedNotificationEventResponse {
  arn: string;
  managedNotificationConfigurationArn: string;
  creationTime: Date | string;
  content: ManagedNotificationEvent;
}
export interface GetNotificationConfigurationRequest {
  arn: string;
}
export interface GetNotificationConfigurationResponse {
  arn: string;
  name: string;
  description: string;
  status: string;
  creationTime: Date | string;
  aggregationDuration?: string;
}
export interface GetNotificationEventRequest {
  arn: string;
  locale?: string;
}
export interface GetNotificationEventResponse {
  arn: string;
  notificationConfigurationArn: string;
  creationTime: Date | string;
  content: NotificationEventSchema;
}
export interface GetNotificationsAccessForOrganizationRequest {}
export interface GetNotificationsAccessForOrganizationResponse {
  notificationsAccessForOrganization: NotificationsAccessForOrganization;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type LastActivationTime = Date | string;

export interface ListChannelsRequest {
  notificationConfigurationArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListChannelsResponse {
  nextToken?: string;
  channels: Array<string>;
}
export interface ListEventRulesRequest {
  notificationConfigurationArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListEventRulesResponse {
  nextToken?: string;
  eventRules: Array<EventRuleStructure>;
}
export interface ListManagedNotificationChannelAssociationsRequest {
  managedNotificationConfigurationArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListManagedNotificationChannelAssociationsResponse {
  nextToken?: string;
  channelAssociations: Array<ManagedNotificationChannelAssociationSummary>;
}
export interface ListManagedNotificationChildEventsRequest {
  aggregateManagedNotificationEventArn: string;
  startTime?: Date | string;
  endTime?: Date | string;
  locale?: string;
  maxResults?: number;
  relatedAccount?: string;
  organizationalUnitId?: string;
  nextToken?: string;
}
export interface ListManagedNotificationChildEventsResponse {
  nextToken?: string;
  managedNotificationChildEvents: Array<ManagedNotificationChildEventOverview>;
}
export interface ListManagedNotificationConfigurationsRequest {
  channelIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListManagedNotificationConfigurationsResponse {
  nextToken?: string;
  managedNotificationConfigurations: Array<ManagedNotificationConfigurationStructure>;
}
export interface ListManagedNotificationEventsRequest {
  startTime?: Date | string;
  endTime?: Date | string;
  locale?: string;
  source?: string;
  maxResults?: number;
  nextToken?: string;
  organizationalUnitId?: string;
  relatedAccount?: string;
}
export interface ListManagedNotificationEventsResponse {
  nextToken?: string;
  managedNotificationEvents: Array<ManagedNotificationEventOverview>;
}
export interface ListNotificationConfigurationsRequest {
  eventRuleSource?: string;
  channelArn?: string;
  status?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListNotificationConfigurationsResponse {
  nextToken?: string;
  notificationConfigurations: Array<NotificationConfigurationStructure>;
}
export interface ListNotificationEventsRequest {
  startTime?: Date | string;
  endTime?: Date | string;
  locale?: string;
  source?: string;
  includeChildEvents?: boolean;
  aggregateNotificationEventArn?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListNotificationEventsResponse {
  nextToken?: string;
  notificationEvents: Array<NotificationEventOverview>;
}
export interface ListNotificationHubsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListNotificationHubsResponse {
  notificationHubs: Array<NotificationHubOverview>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  arn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type LocaleCode = string;

export type ManagedNotificationChannelAssociations =
  Array<ManagedNotificationChannelAssociationSummary>;
export interface ManagedNotificationChannelAssociationSummary {
  channelIdentifier: string;
  channelType: string;
  overrideOption?: string;
}
export interface ManagedNotificationChildEvent {
  schemaVersion: string;
  id: string;
  messageComponents: MessageComponents;
  sourceEventDetailUrl?: string;
  sourceEventDetailUrlDisplayText?: string;
  notificationType: string;
  eventStatus?: string;
  aggregateManagedNotificationEventArn: string;
  startTime?: Date | string;
  endTime?: Date | string;
  textParts: Record<string, TextPartValue>;
  organizationalUnitId?: string;
  aggregationDetail?: AggregationDetail;
}
export type ManagedNotificationChildEventArn = string;

export interface ManagedNotificationChildEventOverview {
  arn: string;
  managedNotificationConfigurationArn: string;
  relatedAccount: string;
  creationTime: Date | string;
  childEvent: ManagedNotificationChildEventSummary;
  aggregateManagedNotificationEventArn: string;
  organizationalUnitId?: string;
}
export type ManagedNotificationChildEvents =
  Array<ManagedNotificationChildEventOverview>;
export interface ManagedNotificationChildEventSummary {
  schemaVersion: string;
  sourceEventMetadata: ManagedSourceEventMetadataSummary;
  messageComponents: MessageComponentsSummary;
  aggregationDetail: AggregationDetail;
  eventStatus: string;
  notificationType: string;
}
export type ManagedNotificationConfigurationDescription = string;

export type ManagedNotificationConfigurationName = string;

export type ManagedNotificationConfigurationOsArn = string;

export type ManagedNotificationConfigurations =
  Array<ManagedNotificationConfigurationStructure>;
export interface ManagedNotificationConfigurationStructure {
  arn: string;
  name: string;
  description: string;
}
export interface ManagedNotificationEvent {
  schemaVersion: string;
  id: string;
  messageComponents: MessageComponents;
  sourceEventDetailUrl?: string;
  sourceEventDetailUrlDisplayText?: string;
  notificationType: string;
  eventStatus?: string;
  aggregationEventType?: string;
  aggregationSummary?: AggregationSummary;
  startTime?: Date | string;
  endTime?: Date | string;
  textParts: Record<string, TextPartValue>;
  organizationalUnitId?: string;
}
export type ManagedNotificationEventArn = string;

export interface ManagedNotificationEventOverview {
  arn: string;
  managedNotificationConfigurationArn: string;
  relatedAccount: string;
  creationTime: Date | string;
  notificationEvent: ManagedNotificationEventSummary;
  aggregationEventType?: string;
  organizationalUnitId?: string;
  aggregationSummary?: AggregationSummary;
  aggregatedNotificationRegions?: Array<string>;
}
export type ManagedNotificationEvents = Array<ManagedNotificationEventOverview>;
export interface ManagedNotificationEventSummary {
  schemaVersion: string;
  sourceEventMetadata: ManagedSourceEventMetadataSummary;
  messageComponents: MessageComponentsSummary;
  eventStatus: string;
  notificationType: string;
}
export type ManagedRuleArn = string;

export type ManagedRuleArns = Array<string>;
export interface ManagedSourceEventMetadataSummary {
  eventOriginRegion?: string;
  source: string;
  eventType: string;
}
export type Media = Array<MediaElement>;
export interface MediaElement {
  mediaId: string;
  type: string;
  url: string;
  caption: string;
}
export type MediaElementType = string;

export type MediaId = string;

export interface MessageComponents {
  headline?: string;
  paragraphSummary?: string;
  completeDescription?: string;
  dimensions?: Array<Dimension>;
}
export interface MessageComponentsSummary {
  headline: string;
}
export type NextToken = string;

export type NotificationConfigurationArn = string;

export type NotificationConfigurationDescription = string;

export type NotificationConfigurationName = string;

export type NotificationConfigurations =
  Array<NotificationConfigurationStructure>;
export type NotificationConfigurationStatus = string;

export interface NotificationConfigurationStructure {
  arn: string;
  name: string;
  description: string;
  status: string;
  creationTime: Date | string;
  aggregationDuration?: string;
}
export type NotificationEventArn = string;

export type NotificationEventId = string;

export interface NotificationEventOverview {
  arn: string;
  notificationConfigurationArn: string;
  relatedAccount: string;
  creationTime: Date | string;
  notificationEvent: NotificationEventSummary;
  aggregationEventType?: string;
  aggregateNotificationEventArn?: string;
  aggregationSummary?: AggregationSummary;
}
export type NotificationEvents = Array<NotificationEventOverview>;
export interface NotificationEventSchema {
  schemaVersion: string;
  id: string;
  sourceEventMetadata: SourceEventMetadata;
  messageComponents: MessageComponents;
  sourceEventDetailUrl?: string;
  sourceEventDetailUrlDisplayText?: string;
  notificationType: string;
  eventStatus?: string;
  aggregationEventType?: string;
  aggregateNotificationEventArn?: string;
  aggregationSummary?: AggregationSummary;
  startTime?: Date | string;
  endTime?: Date | string;
  textParts: Record<string, TextPartValue>;
  media: Array<MediaElement>;
}
export interface NotificationEventSummary {
  schemaVersion: string;
  sourceEventMetadata: SourceEventMetadataSummary;
  messageComponents: MessageComponentsSummary;
  eventStatus: string;
  notificationType: string;
}
export interface NotificationHubOverview {
  notificationHubRegion: string;
  statusSummary: NotificationHubStatusSummary;
  creationTime: Date | string;
  lastActivationTime?: Date | string;
}
export type NotificationHubs = Array<NotificationHubOverview>;
export type NotificationHubStatus = string;

export type NotificationHubStatusReason = string;

export interface NotificationHubStatusSummary {
  status: string;
  reason: string;
}
export interface NotificationsAccessForOrganization {
  accessStatus: AccessStatus;
}
export type NotificationType = string;

export type OrganizationalUnitId = string;

export type QuotaCode = string;

export type Region = string;

export type Regions = Array<string>;
export interface RegisterNotificationHubRequest {
  notificationHubRegion: string;
}
export interface RegisterNotificationHubResponse {
  notificationHubRegion: string;
  statusSummary: NotificationHubStatusSummary;
  creationTime: Date | string;
  lastActivationTime?: Date | string;
}
export interface Resource {
  id?: string;
  arn?: string;
  detailUrl?: string;
  tags?: Array<string>;
}
export type ResourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
}> {}
export type Resources = Array<Resource>;
export type ResourceType = string;

export type SampleAggregationDimensionValues = Array<string>;
export type SchemaVersion = string;

export type ServiceCode = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceType: string;
  readonly resourceId?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export type Source = string;

export interface SourceEventMetadata {
  eventTypeVersion: string;
  sourceEventId: string;
  eventOriginRegion?: string;
  relatedAccount: string;
  source: string;
  eventOccurrenceTime: Date | string;
  eventType: string;
  relatedResources: Array<Resource>;
}
export interface SourceEventMetadataSummary {
  eventOriginRegion?: string;
  source: string;
  eventType: string;
}
export type StatusSummaryByRegion = Record<string, EventRuleStatusSummary>;
export interface SummarizationDimensionDetail {
  name: string;
  value: string;
}
export type SummarizationDimensionDetails = Array<SummarizationDimensionDetail>;
export interface SummarizationDimensionOverview {
  name: string;
  count: number;
  sampleValues?: Array<string>;
}
export type SummarizationDimensionOverviews =
  Array<SummarizationDimensionOverview>;
export type TagKey = string;

export type TagKeys = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  arn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Array<string>;
export type TagValue = string;

export type TextByLocale = Record<string, string>;
export type TextPartId = string;

export type TextPartReference = string;

export type TextParts = Record<string, TextPartValue>;
export type TextPartType = string;

export interface TextPartValue {
  type: string;
  displayText?: string;
  textByLocale?: Record<string, string>;
  url?: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface UntagResourceRequest {
  arn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateEventRuleRequest {
  arn: string;
  eventPattern?: string;
  regions?: Array<string>;
}
export interface UpdateEventRuleResponse {
  arn: string;
  notificationConfigurationArn: string;
  statusSummaryByRegion: Record<string, EventRuleStatusSummary>;
}
export interface UpdateNotificationConfigurationRequest {
  arn: string;
  name?: string;
  description?: string;
  aggregationDuration?: string;
}
export interface UpdateNotificationConfigurationResponse {
  arn: string;
}
export type Url = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason?: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export declare namespace ListManagedNotificationChannelAssociations {
  export type Input = ListManagedNotificationChannelAssociationsRequest;
  export type Output = ListManagedNotificationChannelAssociationsResponse;
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

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
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
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateChannel {
  export type Input = AssociateChannelRequest;
  export type Output = AssociateChannelResponse;
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

export declare namespace AssociateManagedNotificationAccountContact {
  export type Input = AssociateManagedNotificationAccountContactRequest;
  export type Output = AssociateManagedNotificationAccountContactResponse;
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

export declare namespace AssociateManagedNotificationAdditionalChannel {
  export type Input = AssociateManagedNotificationAdditionalChannelRequest;
  export type Output = AssociateManagedNotificationAdditionalChannelResponse;
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

export declare namespace CreateEventRule {
  export type Input = CreateEventRuleRequest;
  export type Output = CreateEventRuleResponse;
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

export declare namespace CreateNotificationConfiguration {
  export type Input = CreateNotificationConfigurationRequest;
  export type Output = CreateNotificationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEventRule {
  export type Input = DeleteEventRuleRequest;
  export type Output = DeleteEventRuleResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteNotificationConfiguration {
  export type Input = DeleteNotificationConfigurationRequest;
  export type Output = DeleteNotificationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterNotificationHub {
  export type Input = DeregisterNotificationHubRequest;
  export type Output = DeregisterNotificationHubResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisableNotificationsAccessForOrganization {
  export type Input = DisableNotificationsAccessForOrganizationRequest;
  export type Output = DisableNotificationsAccessForOrganizationResponse;
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

export declare namespace DisassociateChannel {
  export type Input = DisassociateChannelRequest;
  export type Output = DisassociateChannelResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateManagedNotificationAccountContact {
  export type Input = DisassociateManagedNotificationAccountContactRequest;
  export type Output = DisassociateManagedNotificationAccountContactResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateManagedNotificationAdditionalChannel {
  export type Input = DisassociateManagedNotificationAdditionalChannelRequest;
  export type Output = DisassociateManagedNotificationAdditionalChannelResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EnableNotificationsAccessForOrganization {
  export type Input = EnableNotificationsAccessForOrganizationRequest;
  export type Output = EnableNotificationsAccessForOrganizationResponse;
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

export declare namespace GetEventRule {
  export type Input = GetEventRuleRequest;
  export type Output = GetEventRuleResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetManagedNotificationChildEvent {
  export type Input = GetManagedNotificationChildEventRequest;
  export type Output = GetManagedNotificationChildEventResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetManagedNotificationConfiguration {
  export type Input = GetManagedNotificationConfigurationRequest;
  export type Output = GetManagedNotificationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetManagedNotificationEvent {
  export type Input = GetManagedNotificationEventRequest;
  export type Output = GetManagedNotificationEventResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNotificationConfiguration {
  export type Input = GetNotificationConfigurationRequest;
  export type Output = GetNotificationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNotificationEvent {
  export type Input = GetNotificationEventRequest;
  export type Output = GetNotificationEventResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNotificationsAccessForOrganization {
  export type Input = GetNotificationsAccessForOrganizationRequest;
  export type Output = GetNotificationsAccessForOrganizationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListChannels {
  export type Input = ListChannelsRequest;
  export type Output = ListChannelsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEventRules {
  export type Input = ListEventRulesRequest;
  export type Output = ListEventRulesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListManagedNotificationChildEvents {
  export type Input = ListManagedNotificationChildEventsRequest;
  export type Output = ListManagedNotificationChildEventsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListManagedNotificationConfigurations {
  export type Input = ListManagedNotificationConfigurationsRequest;
  export type Output = ListManagedNotificationConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListManagedNotificationEvents {
  export type Input = ListManagedNotificationEventsRequest;
  export type Output = ListManagedNotificationEventsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNotificationConfigurations {
  export type Input = ListNotificationConfigurationsRequest;
  export type Output = ListNotificationConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNotificationEvents {
  export type Input = ListNotificationEventsRequest;
  export type Output = ListNotificationEventsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNotificationHubs {
  export type Input = ListNotificationHubsRequest;
  export type Output = ListNotificationHubsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterNotificationHub {
  export type Input = RegisterNotificationHubRequest;
  export type Output = RegisterNotificationHubResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEventRule {
  export type Input = UpdateEventRuleRequest;
  export type Output = UpdateEventRuleResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateNotificationConfiguration {
  export type Input = UpdateNotificationConfigurationRequest;
  export type Output = UpdateNotificationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

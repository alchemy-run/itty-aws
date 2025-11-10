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

export declare class SSMContacts extends AWSServiceClient {
  acceptPage(
    input: AcceptPageRequest,
  ): Effect.Effect<
    AcceptPageResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  activateContactChannel(
    input: ActivateContactChannelRequest,
  ): Effect.Effect<
    ActivateContactChannelResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createContact(
    input: CreateContactRequest,
  ): Effect.Effect<
    CreateContactResult,
    | AccessDeniedException
    | ConflictException
    | DataEncryptionException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createContactChannel(
    input: CreateContactChannelRequest,
  ): Effect.Effect<
    CreateContactChannelResult,
    | AccessDeniedException
    | ConflictException
    | DataEncryptionException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRotation(
    input: CreateRotationRequest,
  ): Effect.Effect<
    CreateRotationResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRotationOverride(
    input: CreateRotationOverrideRequest,
  ): Effect.Effect<
    CreateRotationOverrideResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deactivateContactChannel(
    input: DeactivateContactChannelRequest,
  ): Effect.Effect<
    DeactivateContactChannelResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteContact(
    input: DeleteContactRequest,
  ): Effect.Effect<
    DeleteContactResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteContactChannel(
    input: DeleteContactChannelRequest,
  ): Effect.Effect<
    DeleteContactChannelResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRotation(
    input: DeleteRotationRequest,
  ): Effect.Effect<
    DeleteRotationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRotationOverride(
    input: DeleteRotationOverrideRequest,
  ): Effect.Effect<
    DeleteRotationOverrideResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeEngagement(
    input: DescribeEngagementRequest,
  ): Effect.Effect<
    DescribeEngagementResult,
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describePage(
    input: DescribePageRequest,
  ): Effect.Effect<
    DescribePageResult,
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getContact(
    input: GetContactRequest,
  ): Effect.Effect<
    GetContactResult,
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getContactChannel(
    input: GetContactChannelRequest,
  ): Effect.Effect<
    GetContactChannelResult,
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getContactPolicy(
    input: GetContactPolicyRequest,
  ): Effect.Effect<
    GetContactPolicyResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRotation(
    input: GetRotationRequest,
  ): Effect.Effect<
    GetRotationResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRotationOverride(
    input: GetRotationOverrideRequest,
  ): Effect.Effect<
    GetRotationOverrideResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listContactChannels(
    input: ListContactChannelsRequest,
  ): Effect.Effect<
    ListContactChannelsResult,
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listContacts(
    input: ListContactsRequest,
  ): Effect.Effect<
    ListContactsResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEngagements(
    input: ListEngagementsRequest,
  ): Effect.Effect<
    ListEngagementsResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPageReceipts(
    input: ListPageReceiptsRequest,
  ): Effect.Effect<
    ListPageReceiptsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPageResolutions(
    input: ListPageResolutionsRequest,
  ): Effect.Effect<
    ListPageResolutionsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPagesByContact(
    input: ListPagesByContactRequest,
  ): Effect.Effect<
    ListPagesByContactResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPagesByEngagement(
    input: ListPagesByEngagementRequest,
  ): Effect.Effect<
    ListPagesByEngagementResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPreviewRotationShifts(
    input: ListPreviewRotationShiftsRequest,
  ): Effect.Effect<
    ListPreviewRotationShiftsResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRotationOverrides(
    input: ListRotationOverridesRequest,
  ): Effect.Effect<
    ListRotationOverridesResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRotations(
    input: ListRotationsRequest,
  ): Effect.Effect<
    ListRotationsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRotationShifts(
    input: ListRotationShiftsRequest,
  ): Effect.Effect<
    ListRotationShiftsResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putContactPolicy(
    input: PutContactPolicyRequest,
  ): Effect.Effect<
    PutContactPolicyResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendActivationCode(
    input: SendActivationCodeRequest,
  ): Effect.Effect<
    SendActivationCodeResult,
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startEngagement(
    input: StartEngagementRequest,
  ): Effect.Effect<
    StartEngagementResult,
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopEngagement(
    input: StopEngagementRequest,
  ): Effect.Effect<
    StopEngagementResult,
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
    TagResourceResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateContact(
    input: UpdateContactRequest,
  ): Effect.Effect<
    UpdateContactResult,
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateContactChannel(
    input: UpdateContactChannelRequest,
  ): Effect.Effect<
    UpdateContactChannelResult,
    | AccessDeniedException
    | ConflictException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateRotation(
    input: UpdateRotationRequest,
  ): Effect.Effect<
    UpdateRotationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class SsmContacts extends SSMContacts {}

export type AcceptCode = string;

export type AcceptCodeValidation = "IGNORE" | "ENFORCE";
export interface AcceptPageRequest {
  PageId: string;
  ContactChannelId?: string;
  AcceptType: AcceptType;
  Note?: string;
  AcceptCode: string;
  AcceptCodeValidation?: AcceptCodeValidation;
}
export interface AcceptPageResult {}
export type AcceptType = "DELIVERED" | "READ";
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export interface ActivateContactChannelRequest {
  ContactChannelId: string;
  ActivationCode: string;
}
export interface ActivateContactChannelResult {}
export type ActivationCode = string;

export type ActivationStatus = "ACTIVATED" | "NOT_ACTIVATED";
export type AmazonResourceName = string;

export type ChannelName = string;

export interface ChannelTargetInfo {
  ContactChannelId: string;
  RetryIntervalInMinutes?: number;
}
export type ChannelType = "SMS" | "VOICE" | "EMAIL";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
  readonly DependentEntities?: Array<DependentEntity>;
}> {}
export interface Contact {
  ContactArn: string;
  Alias: string;
  DisplayName?: string;
  Type: ContactType;
}
export type ContactAlias = string;

export interface ContactChannel {
  ContactChannelArn: string;
  ContactArn: string;
  Name: string;
  Type?: ChannelType;
  DeliveryAddress: ContactChannelAddress;
  ActivationStatus: ActivationStatus;
}
export interface ContactChannelAddress {
  SimpleAddress?: string;
}
export type ContactChannelList = Array<ContactChannel>;
export type ContactName = string;

export type ContactsList = Array<Contact>;
export interface ContactTargetInfo {
  ContactId?: string;
  IsEssential: boolean;
}
export type ContactType = "PERSONAL" | "ESCALATION" | "ONCALL_SCHEDULE";
export type Content = string;

export interface CoverageTime {
  Start?: HandOffTime;
  End?: HandOffTime;
}
export type CoverageTimes = Array<CoverageTime>;
export interface CreateContactChannelRequest {
  ContactId: string;
  Name: string;
  Type: ChannelType;
  DeliveryAddress: ContactChannelAddress;
  DeferActivation?: boolean;
  IdempotencyToken?: string;
}
export interface CreateContactChannelResult {
  ContactChannelArn: string;
}
export interface CreateContactRequest {
  Alias: string;
  DisplayName?: string;
  Type: ContactType;
  Plan: Plan;
  Tags?: Array<Tag>;
  IdempotencyToken?: string;
}
export interface CreateContactResult {
  ContactArn: string;
}
export interface CreateRotationOverrideRequest {
  RotationId: string;
  NewContactIds: Array<string>;
  StartTime: Date | string;
  EndTime: Date | string;
  IdempotencyToken?: string;
}
export interface CreateRotationOverrideResult {
  RotationOverrideId: string;
}
export interface CreateRotationRequest {
  Name: string;
  ContactIds: Array<string>;
  StartTime?: Date | string;
  TimeZoneId: string;
  Recurrence: RecurrenceSettings;
  Tags?: Array<Tag>;
  IdempotencyToken?: string;
}
export interface CreateRotationResult {
  RotationArn: string;
}
export type DailySettings = Array<HandOffTime>;
export declare class DataEncryptionException extends EffectData.TaggedError(
  "DataEncryptionException",
)<{
  readonly Message: string;
}> {}
export type DateTime = Date | string;

export type DayOfMonth = number;

export type DayOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
export interface DeactivateContactChannelRequest {
  ContactChannelId: string;
}
export interface DeactivateContactChannelResult {}
export type DeferActivation = boolean;

export interface DeleteContactChannelRequest {
  ContactChannelId: string;
}
export interface DeleteContactChannelResult {}
export interface DeleteContactRequest {
  ContactId: string;
}
export interface DeleteContactResult {}
export interface DeleteRotationOverrideRequest {
  RotationId: string;
  RotationOverrideId: string;
}
export interface DeleteRotationOverrideResult {}
export interface DeleteRotationRequest {
  RotationId: string;
}
export interface DeleteRotationResult {}
export interface DependentEntity {
  RelationType: string;
  DependentResourceIds: Array<string>;
}
export type DependentEntityList = Array<DependentEntity>;
export interface DescribeEngagementRequest {
  EngagementId: string;
}
export interface DescribeEngagementResult {
  ContactArn: string;
  EngagementArn: string;
  Sender: string;
  Subject: string;
  Content: string;
  PublicSubject?: string;
  PublicContent?: string;
  IncidentId?: string;
  StartTime?: Date | string;
  StopTime?: Date | string;
}
export interface DescribePageRequest {
  PageId: string;
}
export interface DescribePageResult {
  PageArn: string;
  EngagementArn: string;
  ContactArn: string;
  Sender: string;
  Subject: string;
  Content: string;
  PublicSubject?: string;
  PublicContent?: string;
  IncidentId?: string;
  SentTime?: Date | string;
  ReadTime?: Date | string;
  DeliveryTime?: Date | string;
}
export interface Engagement {
  EngagementArn: string;
  ContactArn: string;
  Sender: string;
  IncidentId?: string;
  StartTime?: Date | string;
  StopTime?: Date | string;
}
export type EngagementsList = Array<Engagement>;
export interface GetContactChannelRequest {
  ContactChannelId: string;
}
export interface GetContactChannelResult {
  ContactArn: string;
  ContactChannelArn: string;
  Name: string;
  Type: ChannelType;
  DeliveryAddress: ContactChannelAddress;
  ActivationStatus?: ActivationStatus;
}
export interface GetContactPolicyRequest {
  ContactArn: string;
}
export interface GetContactPolicyResult {
  ContactArn?: string;
  Policy?: string;
}
export interface GetContactRequest {
  ContactId: string;
}
export interface GetContactResult {
  ContactArn: string;
  Alias: string;
  DisplayName?: string;
  Type: ContactType;
  Plan: Plan;
}
export interface GetRotationOverrideRequest {
  RotationId: string;
  RotationOverrideId: string;
}
export interface GetRotationOverrideResult {
  RotationOverrideId?: string;
  RotationArn?: string;
  NewContactIds?: Array<string>;
  StartTime?: Date | string;
  EndTime?: Date | string;
  CreateTime?: Date | string;
}
export interface GetRotationRequest {
  RotationId: string;
}
export interface GetRotationResult {
  RotationArn: string;
  Name: string;
  ContactIds: Array<string>;
  StartTime: Date | string;
  TimeZoneId: string;
  Recurrence: RecurrenceSettings;
}
export interface HandOffTime {
  HourOfDay: number;
  MinuteOfHour: number;
}
export type HourOfDay = number;

export type IdempotencyToken = string;

export type IncidentId = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
  readonly RetryAfterSeconds?: number;
}> {}
export type IsEssential = boolean;

export interface ListContactChannelsRequest {
  ContactId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListContactChannelsResult {
  NextToken?: string;
  ContactChannels: Array<ContactChannel>;
}
export interface ListContactsRequest {
  NextToken?: string;
  MaxResults?: number;
  AliasPrefix?: string;
  Type?: ContactType;
}
export interface ListContactsResult {
  NextToken?: string;
  Contacts?: Array<Contact>;
}
export interface ListEngagementsRequest {
  NextToken?: string;
  MaxResults?: number;
  IncidentId?: string;
  TimeRangeValue?: TimeRange;
}
export interface ListEngagementsResult {
  NextToken?: string;
  Engagements: Array<Engagement>;
}
export interface ListPageReceiptsRequest {
  PageId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPageReceiptsResult {
  NextToken?: string;
  Receipts?: Array<Receipt>;
}
export interface ListPageResolutionsRequest {
  NextToken?: string;
  PageId: string;
}
export interface ListPageResolutionsResult {
  NextToken?: string;
  PageResolutions: Array<ResolutionContact>;
}
export interface ListPagesByContactRequest {
  ContactId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPagesByContactResult {
  NextToken?: string;
  Pages: Array<Page>;
}
export interface ListPagesByEngagementRequest {
  EngagementId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPagesByEngagementResult {
  NextToken?: string;
  Pages: Array<Page>;
}
export interface ListPreviewRotationShiftsRequest {
  RotationStartTime?: Date | string;
  StartTime?: Date | string;
  EndTime: Date | string;
  Members: Array<string>;
  TimeZoneId: string;
  Recurrence: RecurrenceSettings;
  Overrides?: Array<PreviewOverride>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPreviewRotationShiftsResult {
  RotationShifts?: Array<RotationShift>;
  NextToken?: string;
}
export interface ListRotationOverridesRequest {
  RotationId: string;
  StartTime: Date | string;
  EndTime: Date | string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRotationOverridesResult {
  RotationOverrides?: Array<RotationOverride>;
  NextToken?: string;
}
export interface ListRotationShiftsRequest {
  RotationId: string;
  StartTime?: Date | string;
  EndTime: Date | string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRotationShiftsResult {
  RotationShifts?: Array<RotationShift>;
  NextToken?: string;
}
export interface ListRotationsRequest {
  RotationNamePrefix?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRotationsResult {
  NextToken?: string;
  Rotations: Array<Rotation>;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResult {
  Tags?: Array<Tag>;
}
export type MaxResults = number;

export type Member = string;

export type MinuteOfHour = number;

export interface MonthlySetting {
  DayOfMonth: number;
  HandOffTime: HandOffTime;
}
export type MonthlySettings = Array<MonthlySetting>;
export type NumberOfOnCalls = number;

export type OverrideList = Array<PreviewOverride>;
export interface Page {
  PageArn: string;
  EngagementArn: string;
  ContactArn: string;
  Sender: string;
  IncidentId?: string;
  SentTime?: Date | string;
  DeliveryTime?: Date | string;
  ReadTime?: Date | string;
}
export type PagesList = Array<Page>;
export type PaginationToken = string;

export interface Plan {
  Stages?: Array<Stage>;
  RotationIds?: Array<string>;
}
export type Policy = string;

export interface PreviewOverride {
  NewMembers?: Array<string>;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type PublicContent = string;

export type PublicSubject = string;

export interface PutContactPolicyRequest {
  ContactArn: string;
  Policy: string;
}
export interface PutContactPolicyResult {}
export interface Receipt {
  ContactChannelArn?: string;
  ReceiptType: ReceiptType;
  ReceiptInfo?: string;
  ReceiptTime: Date | string;
}
export type ReceiptInfo = string;

export type ReceiptsList = Array<Receipt>;
export type ReceiptType = "DELIVERED" | "ERROR" | "READ" | "SENT" | "STOP";
export type RecurrenceMultiplier = number;

export interface RecurrenceSettings {
  MonthlySettings?: Array<MonthlySetting>;
  WeeklySettings?: Array<WeeklySetting>;
  DailySettings?: Array<HandOffTime>;
  NumberOfOnCalls: number;
  ShiftCoverages?: { [key in DayOfWeek]?: string };
  RecurrenceMultiplier: number;
}
export interface ResolutionContact {
  ContactArn: string;
  Type: ContactType;
  StageIndex?: number;
}
export type ResolutionList = Array<ResolutionContact>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export type RetryAfterSeconds = number;

export type RetryIntervalInMinutes = number;

export interface Rotation {
  RotationArn: string;
  Name: string;
  ContactIds?: Array<string>;
  StartTime?: Date | string;
  TimeZoneId?: string;
  Recurrence?: RecurrenceSettings;
}
export type RotationContactsArnList = Array<string>;
export type RotationName = string;

export interface RotationOverride {
  RotationOverrideId: string;
  NewContactIds: Array<string>;
  StartTime: Date | string;
  EndTime: Date | string;
  CreateTime: Date | string;
}
export type RotationOverrideContactsArnList = Array<string>;
export type RotationOverridePreviewMemberList = Array<string>;
export type RotationOverrides = Array<RotationOverride>;
export type RotationPreviewMemberList = Array<string>;
export type Rotations = Array<Rotation>;
export interface RotationShift {
  ContactIds?: Array<string>;
  StartTime: Date | string;
  EndTime: Date | string;
  Type?: ShiftType;
  ShiftDetails?: ShiftDetails;
}
export type RotationShifts = Array<RotationShift>;
export interface SendActivationCodeRequest {
  ContactChannelId: string;
}
export interface SendActivationCodeResult {}
export type Sender = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
  readonly QuotaCode: string;
  readonly ServiceCode: string;
}> {}
export type ShiftCoveragesMap = Record<DayOfWeek, Array<CoverageTime>>;
export interface ShiftDetails {
  OverriddenContactIds: Array<string>;
}
export type ShiftType = "REGULAR" | "OVERRIDDEN";
export type SimpleAddress = string;

export type SsmContactsArn = string;

export type SsmContactsArnList = Array<string>;
export interface Stage {
  DurationInMinutes: number;
  Targets: Array<Target>;
}
export type StageDurationInMins = number;

export type StageIndex = number;

export type StagesList = Array<Stage>;
export interface StartEngagementRequest {
  ContactId: string;
  Sender: string;
  Subject: string;
  Content: string;
  PublicSubject?: string;
  PublicContent?: string;
  IncidentId?: string;
  IdempotencyToken?: string;
}
export interface StartEngagementResult {
  EngagementArn: string;
}
export interface StopEngagementRequest {
  EngagementId: string;
  Reason?: string;
}
export interface StopEngagementResult {}
export type StopReason = string;

export type SsmContactsString = string;

export type Subject = string;

export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResult {}
export type TagsList = Array<Tag>;
export type TagValue = string;

export interface Target {
  ChannelTargetInfo?: ChannelTargetInfo;
  ContactTargetInfo?: ContactTargetInfo;
}
export type TargetsList = Array<Target>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly QuotaCode?: string;
  readonly ServiceCode?: string;
  readonly RetryAfterSeconds?: number;
}> {}
export interface TimeRange {
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type TimeZoneId = string;

export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResult {}
export interface UpdateContactChannelRequest {
  ContactChannelId: string;
  Name?: string;
  DeliveryAddress?: ContactChannelAddress;
}
export interface UpdateContactChannelResult {}
export interface UpdateContactRequest {
  ContactId: string;
  DisplayName?: string;
  Plan?: Plan;
}
export interface UpdateContactResult {}
export interface UpdateRotationRequest {
  RotationId: string;
  ContactIds?: Array<string>;
  StartTime?: Date | string;
  TimeZoneId?: string;
  Recurrence: RecurrenceSettings;
}
export interface UpdateRotationResult {}
export type Uuid = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason?: ValidationExceptionReason;
  readonly Fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER";
export interface WeeklySetting {
  DayOfWeek: DayOfWeek;
  HandOffTime: HandOffTime;
}
export type WeeklySettings = Array<WeeklySetting>;
export declare namespace AcceptPage {
  export type Input = AcceptPageRequest;
  export type Output = AcceptPageResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ActivateContactChannel {
  export type Input = ActivateContactChannelRequest;
  export type Output = ActivateContactChannelResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateContact {
  export type Input = CreateContactRequest;
  export type Output = CreateContactResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DataEncryptionException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateContactChannel {
  export type Input = CreateContactChannelRequest;
  export type Output = CreateContactChannelResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DataEncryptionException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRotation {
  export type Input = CreateRotationRequest;
  export type Output = CreateRotationResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRotationOverride {
  export type Input = CreateRotationOverrideRequest;
  export type Output = CreateRotationOverrideResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeactivateContactChannel {
  export type Input = DeactivateContactChannelRequest;
  export type Output = DeactivateContactChannelResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteContact {
  export type Input = DeleteContactRequest;
  export type Output = DeleteContactResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteContactChannel {
  export type Input = DeleteContactChannelRequest;
  export type Output = DeleteContactChannelResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRotation {
  export type Input = DeleteRotationRequest;
  export type Output = DeleteRotationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRotationOverride {
  export type Input = DeleteRotationOverrideRequest;
  export type Output = DeleteRotationOverrideResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeEngagement {
  export type Input = DescribeEngagementRequest;
  export type Output = DescribeEngagementResult;
  export type Error =
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePage {
  export type Input = DescribePageRequest;
  export type Output = DescribePageResult;
  export type Error =
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetContact {
  export type Input = GetContactRequest;
  export type Output = GetContactResult;
  export type Error =
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetContactChannel {
  export type Input = GetContactChannelRequest;
  export type Output = GetContactChannelResult;
  export type Error =
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetContactPolicy {
  export type Input = GetContactPolicyRequest;
  export type Output = GetContactPolicyResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRotation {
  export type Input = GetRotationRequest;
  export type Output = GetRotationResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRotationOverride {
  export type Input = GetRotationOverrideRequest;
  export type Output = GetRotationOverrideResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListContactChannels {
  export type Input = ListContactChannelsRequest;
  export type Output = ListContactChannelsResult;
  export type Error =
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListContacts {
  export type Input = ListContactsRequest;
  export type Output = ListContactsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEngagements {
  export type Input = ListEngagementsRequest;
  export type Output = ListEngagementsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPageReceipts {
  export type Input = ListPageReceiptsRequest;
  export type Output = ListPageReceiptsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPageResolutions {
  export type Input = ListPageResolutionsRequest;
  export type Output = ListPageResolutionsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPagesByContact {
  export type Input = ListPagesByContactRequest;
  export type Output = ListPagesByContactResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPagesByEngagement {
  export type Input = ListPagesByEngagementRequest;
  export type Output = ListPagesByEngagementResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPreviewRotationShifts {
  export type Input = ListPreviewRotationShiftsRequest;
  export type Output = ListPreviewRotationShiftsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRotationOverrides {
  export type Input = ListRotationOverridesRequest;
  export type Output = ListRotationOverridesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRotations {
  export type Input = ListRotationsRequest;
  export type Output = ListRotationsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRotationShifts {
  export type Input = ListRotationShiftsRequest;
  export type Output = ListRotationShiftsResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutContactPolicy {
  export type Input = PutContactPolicyRequest;
  export type Output = PutContactPolicyResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendActivationCode {
  export type Input = SendActivationCodeRequest;
  export type Output = SendActivationCodeResult;
  export type Error =
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartEngagement {
  export type Input = StartEngagementRequest;
  export type Output = StartEngagementResult;
  export type Error =
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopEngagement {
  export type Input = StopEngagementRequest;
  export type Output = StopEngagementResult;
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
  export type Output = TagResourceResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateContact {
  export type Input = UpdateContactRequest;
  export type Output = UpdateContactResult;
  export type Error =
    | AccessDeniedException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateContactChannel {
  export type Input = UpdateContactChannelRequest;
  export type Output = UpdateContactChannelResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DataEncryptionException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRotation {
  export type Input = UpdateRotationRequest;
  export type Output = UpdateRotationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

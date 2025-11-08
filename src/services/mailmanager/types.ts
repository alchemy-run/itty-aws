import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class MailManager extends AWSServiceClient {
  createAddressListImportJob(
    input: CreateAddressListImportJobRequest,
  ): Effect.Effect<
    CreateAddressListImportJobResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deregisterMemberFromAddressList(
    input: DeregisterMemberFromAddressListRequest,
  ): Effect.Effect<
    DeregisterMemberFromAddressListResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAddressListImportJob(
    input: GetAddressListImportJobRequest,
  ): Effect.Effect<
    GetAddressListImportJobResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getArchiveExport(
    input: GetArchiveExportRequest,
  ): Effect.Effect<
    GetArchiveExportResponse,
    AccessDeniedException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getArchiveMessage(
    input: GetArchiveMessageRequest,
  ): Effect.Effect<
    GetArchiveMessageResponse,
    AccessDeniedException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getArchiveMessageContent(
    input: GetArchiveMessageContentRequest,
  ): Effect.Effect<
    GetArchiveMessageContentResponse,
    AccessDeniedException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getArchiveSearch(
    input: GetArchiveSearchRequest,
  ): Effect.Effect<
    GetArchiveSearchResponse,
    AccessDeniedException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getArchiveSearchResults(
    input: GetArchiveSearchResultsRequest,
  ): Effect.Effect<
    GetArchiveSearchResultsResponse,
    AccessDeniedException | ConflictException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getMemberOfAddressList(
    input: GetMemberOfAddressListRequest,
  ): Effect.Effect<
    GetMemberOfAddressListResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAddressListImportJobs(
    input: ListAddressListImportJobsRequest,
  ): Effect.Effect<
    ListAddressListImportJobsResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listArchiveExports(
    input: ListArchiveExportsRequest,
  ): Effect.Effect<
    ListArchiveExportsResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listArchiveSearches(
    input: ListArchiveSearchesRequest,
  ): Effect.Effect<
    ListArchiveSearchesResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listMembersOfAddressList(
    input: ListMembersOfAddressListRequest,
  ): Effect.Effect<
    ListMembersOfAddressListResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  registerMemberToAddressList(
    input: RegisterMemberToAddressListRequest,
  ): Effect.Effect<
    RegisterMemberToAddressListResponse,
    AccessDeniedException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startAddressListImportJob(
    input: StartAddressListImportJobRequest,
  ): Effect.Effect<
    StartAddressListImportJobResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startArchiveExport(
    input: StartArchiveExportRequest,
  ): Effect.Effect<
    StartArchiveExportResponse,
    AccessDeniedException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startArchiveSearch(
    input: StartArchiveSearchRequest,
  ): Effect.Effect<
    StartArchiveSearchResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  stopAddressListImportJob(
    input: StopAddressListImportJobRequest,
  ): Effect.Effect<
    StopAddressListImportJobResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  stopArchiveExport(
    input: StopArchiveExportRequest,
  ): Effect.Effect<
    StopArchiveExportResponse,
    AccessDeniedException | ThrottlingException | ValidationException | CommonAwsError
  >;
  stopArchiveSearch(
    input: StopArchiveSearchRequest,
  ): Effect.Effect<
    StopArchiveSearchResponse,
    AccessDeniedException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createAddonInstance(
    input: CreateAddonInstanceRequest,
  ): Effect.Effect<
    CreateAddonInstanceResponse,
    ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createAddonSubscription(
    input: CreateAddonSubscriptionRequest,
  ): Effect.Effect<
    CreateAddonSubscriptionResponse,
    ConflictException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createAddressList(
    input: CreateAddressListRequest,
  ): Effect.Effect<
    CreateAddressListResponse,
    AccessDeniedException | ConflictException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createArchive(
    input: CreateArchiveRequest,
  ): Effect.Effect<
    CreateArchiveResponse,
    AccessDeniedException | ConflictException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createIngressPoint(
    input: CreateIngressPointRequest,
  ): Effect.Effect<
    CreateIngressPointResponse,
    ConflictException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createRelay(
    input: CreateRelayRequest,
  ): Effect.Effect<
    CreateRelayResponse,
    ConflictException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createRuleSet(
    input: CreateRuleSetRequest,
  ): Effect.Effect<
    CreateRuleSetResponse,
    ConflictException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createTrafficPolicy(
    input: CreateTrafficPolicyRequest,
  ): Effect.Effect<
    CreateTrafficPolicyResponse,
    ConflictException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  deleteAddonInstance(
    input: DeleteAddonInstanceRequest,
  ): Effect.Effect<
    DeleteAddonInstanceResponse,
    ConflictException | ValidationException | CommonAwsError
  >;
  deleteAddonSubscription(
    input: DeleteAddonSubscriptionRequest,
  ): Effect.Effect<
    DeleteAddonSubscriptionResponse,
    ConflictException | ValidationException | CommonAwsError
  >;
  deleteAddressList(
    input: DeleteAddressListRequest,
  ): Effect.Effect<
    DeleteAddressListResponse,
    AccessDeniedException | ConflictException | ThrottlingException | CommonAwsError
  >;
  deleteArchive(
    input: DeleteArchiveRequest,
  ): Effect.Effect<
    DeleteArchiveResponse,
    AccessDeniedException | ConflictException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteIngressPoint(
    input: DeleteIngressPointRequest,
  ): Effect.Effect<
    DeleteIngressPointResponse,
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteRelay(
    input: DeleteRelayRequest,
  ): Effect.Effect<
    DeleteRelayResponse,
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteRuleSet(
    input: DeleteRuleSetRequest,
  ): Effect.Effect<
    DeleteRuleSetResponse,
    ConflictException | ValidationException | CommonAwsError
  >;
  deleteTrafficPolicy(
    input: DeleteTrafficPolicyRequest,
  ): Effect.Effect<
    DeleteTrafficPolicyResponse,
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getAddonInstance(
    input: GetAddonInstanceRequest,
  ): Effect.Effect<
    GetAddonInstanceResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getAddonSubscription(
    input: GetAddonSubscriptionRequest,
  ): Effect.Effect<
    GetAddonSubscriptionResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getAddressList(
    input: GetAddressListRequest,
  ): Effect.Effect<
    GetAddressListResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getArchive(
    input: GetArchiveRequest,
  ): Effect.Effect<
    GetArchiveResponse,
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getIngressPoint(
    input: GetIngressPointRequest,
  ): Effect.Effect<
    GetIngressPointResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getRelay(
    input: GetRelayRequest,
  ): Effect.Effect<
    GetRelayResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getRuleSet(
    input: GetRuleSetRequest,
  ): Effect.Effect<
    GetRuleSetResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getTrafficPolicy(
    input: GetTrafficPolicyRequest,
  ): Effect.Effect<
    GetTrafficPolicyResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listAddonInstances(
    input: ListAddonInstancesRequest,
  ): Effect.Effect<
    ListAddonInstancesResponse,
    ValidationException | CommonAwsError
  >;
  listAddonSubscriptions(
    input: ListAddonSubscriptionsRequest,
  ): Effect.Effect<
    ListAddonSubscriptionsResponse,
    ValidationException | CommonAwsError
  >;
  listAddressLists(
    input: ListAddressListsRequest,
  ): Effect.Effect<
    ListAddressListsResponse,
    AccessDeniedException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listArchives(
    input: ListArchivesRequest,
  ): Effect.Effect<
    ListArchivesResponse,
    AccessDeniedException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listIngressPoints(
    input: ListIngressPointsRequest,
  ): Effect.Effect<
    ListIngressPointsResponse,
    ValidationException | CommonAwsError
  >;
  listRelays(
    input: ListRelaysRequest,
  ): Effect.Effect<
    ListRelaysResponse,
    ValidationException | CommonAwsError
  >;
  listRuleSets(
    input: ListRuleSetsRequest,
  ): Effect.Effect<
    ListRuleSetsResponse,
    ValidationException | CommonAwsError
  >;
  listTrafficPolicies(
    input: ListTrafficPoliciesRequest,
  ): Effect.Effect<
    ListTrafficPoliciesResponse,
    ValidationException | CommonAwsError
  >;
  updateArchive(
    input: UpdateArchiveRequest,
  ): Effect.Effect<
    UpdateArchiveResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateIngressPoint(
    input: UpdateIngressPointRequest,
  ): Effect.Effect<
    UpdateIngressPointResponse,
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateRelay(
    input: UpdateRelayRequest,
  ): Effect.Effect<
    UpdateRelayResponse,
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateRuleSet(
    input: UpdateRuleSetRequest,
  ): Effect.Effect<
    UpdateRuleSetResponse,
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateTrafficPolicy(
    input: UpdateTrafficPolicyRequest,
  ): Effect.Effect<
    UpdateTrafficPolicyResponse,
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export declare class Mailmanager extends MailManager {}

export type AcceptAction = "ALLOW" | "DENY";
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type ActionFailurePolicy = "CONTINUE" | "DROP";
export interface AddHeaderAction {
  HeaderName: string;
  HeaderValue: string;
}
export interface AddonInstance {
  AddonInstanceId?: string;
  AddonSubscriptionId?: string;
  AddonName?: string;
  AddonInstanceArn?: string;
  CreatedTimestamp?: Date | string;
}
export type AddonInstanceArn = string;

export type AddonInstanceId = string;

export type AddonInstances = Array<AddonInstance>;
export type AddonName = string;

export interface AddonSubscription {
  AddonSubscriptionId?: string;
  AddonName?: string;
  AddonSubscriptionArn?: string;
  CreatedTimestamp?: Date | string;
}
export type AddonSubscriptionArn = string;

export type AddonSubscriptionId = string;

export type AddonSubscriptions = Array<AddonSubscription>;
export type Address = string;

export interface AddressFilter {
  AddressPrefix?: string;
}
export interface AddressList {
  AddressListId: string;
  AddressListArn: string;
  AddressListName: string;
  CreatedTimestamp: Date | string;
  LastUpdatedTimestamp: Date | string;
}
export type AddressListArn = string;

export type AddressListId = string;

export type AddressListName = string;

export type AddressLists = Array<AddressList>;
export type AddressPageSize = number;

export type AddressPrefix = string;

export interface Analysis {
  Analyzer: string;
  ResultField: string;
}
export type AnalyzerArn = string;

export interface Archive {
  ArchiveId: string;
  ArchiveName?: string;
  ArchiveState?: ArchiveState;
  LastUpdatedTimestamp?: Date | string;
}
export interface ArchiveAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  TargetArchive: string;
}
export type ArchiveArn = string;

export type ArchiveBooleanEmailAttribute = "HAS_ATTACHMENTS";
export interface ArchiveBooleanExpression {
  Evaluate: ArchiveBooleanToEvaluate;
  Operator: ArchiveBooleanOperator;
}
export type ArchiveBooleanOperator = "IS_TRUE" | "IS_FALSE";
interface _ArchiveBooleanToEvaluate {
  Attribute?: ArchiveBooleanEmailAttribute;
}

export type ArchiveBooleanToEvaluate = (_ArchiveBooleanToEvaluate & { Attribute: ArchiveBooleanEmailAttribute });
export type ArchivedMessageId = string;

interface _ArchiveFilterCondition {
  StringExpression?: ArchiveStringExpression;
  BooleanExpression?: ArchiveBooleanExpression;
}

export type ArchiveFilterCondition = (_ArchiveFilterCondition & { StringExpression: ArchiveStringExpression }) | (_ArchiveFilterCondition & { BooleanExpression: ArchiveBooleanExpression });
export type ArchiveFilterConditions = Array<ArchiveFilterCondition>;
export interface ArchiveFilters {
  Include?: Array<ArchiveFilterCondition>;
  Unless?: Array<ArchiveFilterCondition>;
}
export type ArchiveId = string;

export type ArchiveIdString = string;

export type ArchiveNameString = string;

interface _ArchiveRetention {
  RetentionPeriod?: RetentionPeriod;
}

export type ArchiveRetention = (_ArchiveRetention & { RetentionPeriod: RetentionPeriod });
export type ArchivesList = Array<Archive>;
export type ArchiveState = "ACTIVE" | "PENDING_DELETION";
export type ArchiveStringEmailAttribute = "TO" | "FROM" | "CC" | "SUBJECT" | "ENVELOPE_TO" | "ENVELOPE_FROM";
export interface ArchiveStringExpression {
  Evaluate: ArchiveStringToEvaluate;
  Operator: ArchiveStringOperator;
  Values: Array<string>;
}
export type ArchiveStringOperator = "CONTAINS";
interface _ArchiveStringToEvaluate {
  Attribute?: ArchiveStringEmailAttribute;
}

export type ArchiveStringToEvaluate = (_ArchiveStringToEvaluate & { Attribute: ArchiveStringEmailAttribute });
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateAddonInstanceRequest {
  ClientToken?: string;
  AddonSubscriptionId: string;
  Tags?: Array<Tag>;
}
export interface CreateAddonInstanceResponse {
  AddonInstanceId: string;
}
export interface CreateAddonSubscriptionRequest {
  ClientToken?: string;
  AddonName: string;
  Tags?: Array<Tag>;
}
export interface CreateAddonSubscriptionResponse {
  AddonSubscriptionId: string;
}
export interface CreateAddressListImportJobRequest {
  ClientToken?: string;
  AddressListId: string;
  Name: string;
  ImportDataFormat: ImportDataFormat;
}
export interface CreateAddressListImportJobResponse {
  JobId: string;
  PreSignedUrl: string;
}
export interface CreateAddressListRequest {
  ClientToken?: string;
  AddressListName: string;
  Tags?: Array<Tag>;
}
export interface CreateAddressListResponse {
  AddressListId: string;
}
export interface CreateArchiveRequest {
  ClientToken?: string;
  ArchiveName: string;
  Retention?: ArchiveRetention;
  KmsKeyArn?: string;
  Tags?: Array<Tag>;
}
export interface CreateArchiveResponse {
  ArchiveId: string;
}
export interface CreateIngressPointRequest {
  ClientToken?: string;
  IngressPointName: string;
  Type: IngressPointType;
  RuleSetId: string;
  TrafficPolicyId: string;
  IngressPointConfiguration?: IngressPointConfiguration;
  NetworkConfiguration?: NetworkConfiguration;
  Tags?: Array<Tag>;
}
export interface CreateIngressPointResponse {
  IngressPointId: string;
}
export interface CreateRelayRequest {
  ClientToken?: string;
  RelayName: string;
  ServerName: string;
  ServerPort: number;
  Authentication: RelayAuthentication;
  Tags?: Array<Tag>;
}
export interface CreateRelayResponse {
  RelayId: string;
}
export interface CreateRuleSetRequest {
  ClientToken?: string;
  RuleSetName: string;
  Rules: Array<Rule>;
  Tags?: Array<Tag>;
}
export interface CreateRuleSetResponse {
  RuleSetId: string;
}
export interface CreateTrafficPolicyRequest {
  ClientToken?: string;
  TrafficPolicyName: string;
  PolicyStatements: Array<PolicyStatement>;
  DefaultAction: AcceptAction;
  MaxMessageSizeBytes?: number;
  Tags?: Array<Tag>;
}
export interface CreateTrafficPolicyResponse {
  TrafficPolicyId: string;
}
export interface DeleteAddonInstanceRequest {
  AddonInstanceId: string;
}
export interface DeleteAddonInstanceResponse {
}
export interface DeleteAddonSubscriptionRequest {
  AddonSubscriptionId: string;
}
export interface DeleteAddonSubscriptionResponse {
}
export interface DeleteAddressListRequest {
  AddressListId: string;
}
export interface DeleteAddressListResponse {
}
export interface DeleteArchiveRequest {
  ArchiveId: string;
}
export interface DeleteArchiveResponse {
}
export interface DeleteIngressPointRequest {
  IngressPointId: string;
}
export interface DeleteIngressPointResponse {
}
export interface DeleteRelayRequest {
  RelayId: string;
}
export interface DeleteRelayResponse {
}
export interface DeleteRuleSetRequest {
  RuleSetId: string;
}
export interface DeleteRuleSetResponse {
}
export interface DeleteTrafficPolicyRequest {
  TrafficPolicyId: string;
}
export interface DeleteTrafficPolicyResponse {
}
export interface DeliverToMailboxAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  MailboxArn: string;
  RoleArn: string;
}
export interface DeliverToQBusinessAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  ApplicationId: string;
  IndexId: string;
  RoleArn: string;
}
export interface DeregisterMemberFromAddressListRequest {
  AddressListId: string;
  Address: string;
}
export interface DeregisterMemberFromAddressListResponse {
}
export interface DropAction {
}
export type EmailAddress = string;

export type EmailReceivedHeadersList = Array<string>;
export interface Envelope {
  Helo?: string;
  From?: string;
  To?: Array<string>;
}
export type ErrorMessage = string;

interface _ExportDestinationConfiguration {
  S3?: S3ExportDestinationConfiguration;
}

export type ExportDestinationConfiguration = (_ExportDestinationConfiguration & { S3: S3ExportDestinationConfiguration });
export type ExportId = string;

export type ExportMaxResults = number;

export type ExportState = "QUEUED" | "PREPROCESSING" | "PROCESSING" | "COMPLETED" | "FAILED" | "CANCELLED";
export interface ExportStatus {
  SubmissionTimestamp?: Date | string;
  CompletionTimestamp?: Date | string;
  State?: ExportState;
  ErrorMessage?: string;
}
export interface ExportSummary {
  ExportId?: string;
  Status?: ExportStatus;
}
export type ExportSummaryList = Array<ExportSummary>;
export interface GetAddonInstanceRequest {
  AddonInstanceId: string;
}
export interface GetAddonInstanceResponse {
  AddonSubscriptionId?: string;
  AddonName?: string;
  AddonInstanceArn?: string;
  CreatedTimestamp?: Date | string;
}
export interface GetAddonSubscriptionRequest {
  AddonSubscriptionId: string;
}
export interface GetAddonSubscriptionResponse {
  AddonName?: string;
  AddonSubscriptionArn?: string;
  CreatedTimestamp?: Date | string;
}
export interface GetAddressListImportJobRequest {
  JobId: string;
}
export interface GetAddressListImportJobResponse {
  JobId: string;
  Name: string;
  Status: ImportJobStatus;
  PreSignedUrl: string;
  ImportedItemsCount?: number;
  FailedItemsCount?: number;
  ImportDataFormat: ImportDataFormat;
  AddressListId: string;
  CreatedTimestamp: Date | string;
  StartTimestamp?: Date | string;
  CompletedTimestamp?: Date | string;
  Error?: string;
}
export interface GetAddressListRequest {
  AddressListId: string;
}
export interface GetAddressListResponse {
  AddressListId: string;
  AddressListArn: string;
  AddressListName: string;
  CreatedTimestamp: Date | string;
  LastUpdatedTimestamp: Date | string;
}
export interface GetArchiveExportRequest {
  ExportId: string;
}
export interface GetArchiveExportResponse {
  ArchiveId?: string;
  Filters?: ArchiveFilters;
  FromTimestamp?: Date | string;
  ToTimestamp?: Date | string;
  MaxResults?: number;
  ExportDestinationConfiguration?: ExportDestinationConfiguration;
  Status?: ExportStatus;
}
export interface GetArchiveMessageContentRequest {
  ArchivedMessageId: string;
}
export interface GetArchiveMessageContentResponse {
  Body?: MessageBody;
}
export interface GetArchiveMessageRequest {
  ArchivedMessageId: string;
}
export interface GetArchiveMessageResponse {
  MessageDownloadLink?: string;
  Metadata?: Metadata;
  Envelope?: Envelope;
}
export interface GetArchiveRequest {
  ArchiveId: string;
}
export interface GetArchiveResponse {
  ArchiveId: string;
  ArchiveName: string;
  ArchiveArn: string;
  ArchiveState: ArchiveState;
  Retention: ArchiveRetention;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
  KmsKeyArn?: string;
}
export interface GetArchiveSearchRequest {
  SearchId: string;
}
export interface GetArchiveSearchResponse {
  ArchiveId?: string;
  Filters?: ArchiveFilters;
  FromTimestamp?: Date | string;
  ToTimestamp?: Date | string;
  MaxResults?: number;
  Status?: SearchStatus;
}
export interface GetArchiveSearchResultsRequest {
  SearchId: string;
}
export interface GetArchiveSearchResultsResponse {
  Rows?: Array<Row>;
}
export interface GetIngressPointRequest {
  IngressPointId: string;
}
export interface GetIngressPointResponse {
  IngressPointId: string;
  IngressPointName: string;
  IngressPointArn?: string;
  Status?: IngressPointStatus;
  Type?: IngressPointType;
  ARecord?: string;
  RuleSetId?: string;
  TrafficPolicyId?: string;
  IngressPointAuthConfiguration?: IngressPointAuthConfiguration;
  NetworkConfiguration?: NetworkConfiguration;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
}
export interface GetMemberOfAddressListRequest {
  AddressListId: string;
  Address: string;
}
export interface GetMemberOfAddressListResponse {
  Address: string;
  CreatedTimestamp: Date | string;
}
export interface GetRelayRequest {
  RelayId: string;
}
export interface GetRelayResponse {
  RelayId: string;
  RelayArn?: string;
  RelayName?: string;
  ServerName?: string;
  ServerPort?: number;
  Authentication?: RelayAuthentication;
  CreatedTimestamp?: Date | string;
  LastModifiedTimestamp?: Date | string;
}
export interface GetRuleSetRequest {
  RuleSetId: string;
}
export interface GetRuleSetResponse {
  RuleSetId: string;
  RuleSetArn: string;
  RuleSetName: string;
  CreatedDate: Date | string;
  LastModificationDate: Date | string;
  Rules: Array<Rule>;
}
export interface GetTrafficPolicyRequest {
  TrafficPolicyId: string;
}
export interface GetTrafficPolicyResponse {
  TrafficPolicyName: string;
  TrafficPolicyId: string;
  TrafficPolicyArn?: string;
  PolicyStatements?: Array<PolicyStatement>;
  MaxMessageSizeBytes?: number;
  DefaultAction?: AcceptAction;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
}
export type HeaderName = string;

export type HeaderValue = string;

export type IamRoleArn = string;

export type IdempotencyToken = string;

export type IdOrArn = string;

export interface ImportDataFormat {
  ImportDataType: ImportDataType;
}
export type ImportDataType = "CSV" | "JSON";
export interface ImportJob {
  JobId: string;
  Name: string;
  Status: ImportJobStatus;
  PreSignedUrl: string;
  ImportedItemsCount?: number;
  FailedItemsCount?: number;
  ImportDataFormat: ImportDataFormat;
  AddressListId: string;
  CreatedTimestamp: Date | string;
  StartTimestamp?: Date | string;
  CompletedTimestamp?: Date | string;
  Error?: string;
}
export type ImportJobs = Array<ImportJob>;
export type ImportJobStatus = "CREATED" | "PROCESSING" | "COMPLETED" | "FAILED" | "STOPPED";
export type IngressAddressListArnList = Array<string>;
export type IngressAddressListEmailAttribute = "RECIPIENT";
export interface IngressAnalysis {
  Analyzer: string;
  ResultField: string;
}
export interface IngressBooleanExpression {
  Evaluate: IngressBooleanToEvaluate;
  Operator: IngressBooleanOperator;
}
export type IngressBooleanOperator = "IS_TRUE" | "IS_FALSE";
interface _IngressBooleanToEvaluate {
  Analysis?: IngressAnalysis;
  IsInAddressList?: IngressIsInAddressList;
}

export type IngressBooleanToEvaluate = (_IngressBooleanToEvaluate & { Analysis: IngressAnalysis }) | (_IngressBooleanToEvaluate & { IsInAddressList: IngressIsInAddressList });
export type IngressIpOperator = "CIDR_MATCHES" | "NOT_CIDR_MATCHES";
interface _IngressIpToEvaluate {
  Attribute?: IngressIpv4Attribute;
}

export type IngressIpToEvaluate = (_IngressIpToEvaluate & { Attribute: IngressIpv4Attribute });
export type IngressIpv4Attribute = "SENDER_IP";
export interface IngressIpv4Expression {
  Evaluate: IngressIpToEvaluate;
  Operator: IngressIpOperator;
  Values: Array<string>;
}
export type IngressIpv6Attribute = "SENDER_IPV6";
export interface IngressIpv6Expression {
  Evaluate: IngressIpv6ToEvaluate;
  Operator: IngressIpOperator;
  Values: Array<string>;
}
interface _IngressIpv6ToEvaluate {
  Attribute?: IngressIpv6Attribute;
}

export type IngressIpv6ToEvaluate = (_IngressIpv6ToEvaluate & { Attribute: IngressIpv6Attribute });
export interface IngressIsInAddressList {
  Attribute: IngressAddressListEmailAttribute;
  AddressLists: Array<string>;
}
export interface IngressPoint {
  IngressPointName: string;
  IngressPointId: string;
  Status: IngressPointStatus;
  Type: IngressPointType;
  ARecord?: string;
}
export type IngressPointARecord = string;

export type IngressPointArn = string;

export interface IngressPointAuthConfiguration {
  IngressPointPasswordConfiguration?: IngressPointPasswordConfiguration;
  SecretArn?: string;
}
interface _IngressPointConfiguration {
  SmtpPassword?: string;
  SecretArn?: string;
}

export type IngressPointConfiguration = (_IngressPointConfiguration & { SmtpPassword: string }) | (_IngressPointConfiguration & { SecretArn: string });
export type IngressPointId = string;

export type IngressPointName = string;

export interface IngressPointPasswordConfiguration {
  SmtpPasswordVersion?: string;
  PreviousSmtpPasswordVersion?: string;
  PreviousSmtpPasswordExpiryTimestamp?: Date | string;
}
export type IngressPointsList = Array<IngressPoint>;
export type IngressPointStatus = "PROVISIONING" | "DEPROVISIONING" | "UPDATING" | "ACTIVE" | "CLOSED" | "FAILED";
export type IngressPointStatusToUpdate = "ACTIVE" | "CLOSED";
export type IngressPointType = "OPEN" | "AUTH";
export type IngressStringEmailAttribute = "RECIPIENT";
export interface IngressStringExpression {
  Evaluate: IngressStringToEvaluate;
  Operator: IngressStringOperator;
  Values: Array<string>;
}
export type IngressStringOperator = "EQUALS" | "NOT_EQUALS" | "STARTS_WITH" | "ENDS_WITH" | "CONTAINS";
interface _IngressStringToEvaluate {
  Attribute?: IngressStringEmailAttribute;
  Analysis?: IngressAnalysis;
}

export type IngressStringToEvaluate = (_IngressStringToEvaluate & { Attribute: IngressStringEmailAttribute }) | (_IngressStringToEvaluate & { Analysis: IngressAnalysis });
export type IngressTlsAttribute = "TLS_PROTOCOL";
export type IngressTlsProtocolAttribute = "TLS1_2" | "TLS1_3";
export interface IngressTlsProtocolExpression {
  Evaluate: IngressTlsProtocolToEvaluate;
  Operator: IngressTlsProtocolOperator;
  Value: IngressTlsProtocolAttribute;
}
export type IngressTlsProtocolOperator = "MINIMUM_TLS_VERSION" | "IS";
interface _IngressTlsProtocolToEvaluate {
  Attribute?: IngressTlsAttribute;
}

export type IngressTlsProtocolToEvaluate = (_IngressTlsProtocolToEvaluate & { Attribute: IngressTlsAttribute });
export type IpType = "IPV4" | "DUAL_STACK";
export type Ipv4Cidr = string;

export type Ipv4Cidrs = Array<string>;
export type Ipv6Cidr = string;

export type Ipv6Cidrs = Array<string>;
export type JobId = string;

export type JobItemsCount = number;

export type JobName = string;

export type KmsKeyArn = string;

export type KmsKeyId = string;

export interface ListAddonInstancesRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface ListAddonInstancesResponse {
  AddonInstances?: Array<AddonInstance>;
  NextToken?: string;
}
export interface ListAddonSubscriptionsRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface ListAddonSubscriptionsResponse {
  AddonSubscriptions?: Array<AddonSubscription>;
  NextToken?: string;
}
export interface ListAddressListImportJobsRequest {
  AddressListId: string;
  NextToken?: string;
  PageSize?: number;
}
export interface ListAddressListImportJobsResponse {
  ImportJobs: Array<ImportJob>;
  NextToken?: string;
}
export interface ListAddressListsRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface ListAddressListsResponse {
  AddressLists: Array<AddressList>;
  NextToken?: string;
}
export interface ListArchiveExportsRequest {
  ArchiveId: string;
  NextToken?: string;
  PageSize?: number;
}
export interface ListArchiveExportsResponse {
  Exports?: Array<ExportSummary>;
  NextToken?: string;
}
export interface ListArchiveSearchesRequest {
  ArchiveId: string;
  NextToken?: string;
  PageSize?: number;
}
export interface ListArchiveSearchesResponse {
  Searches?: Array<SearchSummary>;
  NextToken?: string;
}
export interface ListArchivesRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface ListArchivesResponse {
  Archives: Array<Archive>;
  NextToken?: string;
}
export interface ListIngressPointsRequest {
  PageSize?: number;
  NextToken?: string;
}
export interface ListIngressPointsResponse {
  IngressPoints?: Array<IngressPoint>;
  NextToken?: string;
}
export interface ListMembersOfAddressListRequest {
  AddressListId: string;
  Filter?: AddressFilter;
  NextToken?: string;
  PageSize?: number;
}
export interface ListMembersOfAddressListResponse {
  Addresses: Array<SavedAddress>;
  NextToken?: string;
}
export interface ListRelaysRequest {
  PageSize?: number;
  NextToken?: string;
}
export interface ListRelaysResponse {
  Relays: Array<Relay>;
  NextToken?: string;
}
export interface ListRuleSetsRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface ListRuleSetsResponse {
  RuleSets: Array<RuleSet>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags: Array<Tag>;
}
export interface ListTrafficPoliciesRequest {
  PageSize?: number;
  NextToken?: string;
}
export interface ListTrafficPoliciesResponse {
  TrafficPolicies?: Array<TrafficPolicy>;
  NextToken?: string;
}
export type MailFrom = "REPLACE" | "PRESERVE";
export type MaxMessageSizeBytes = number;

export interface MessageBody {
  Text?: string;
  Html?: string;
  MessageMalformed?: boolean;
}
export interface Metadata {
  Timestamp?: Date | string;
  IngressPointId?: string;
  TrafficPolicyId?: string;
  RuleSetId?: string;
  SenderHostname?: string;
  SenderIpAddress?: string;
  TlsCipherSuite?: string;
  TlsProtocol?: string;
  SendingMethod?: string;
  SourceIdentity?: string;
  SendingPool?: string;
  ConfigurationSet?: string;
  SourceArn?: string;
}
export type MimeHeaderAttribute = string;

export type NameOrArn = string;

interface _NetworkConfiguration {
  PublicNetworkConfiguration?: PublicNetworkConfiguration;
  PrivateNetworkConfiguration?: PrivateNetworkConfiguration;
}

export type NetworkConfiguration = (_NetworkConfiguration & { PublicNetworkConfiguration: PublicNetworkConfiguration }) | (_NetworkConfiguration & { PrivateNetworkConfiguration: PrivateNetworkConfiguration });
export interface NoAuthentication {
}
export type PageSize = number;

export type PaginationToken = string;

interface _PolicyCondition {
  StringExpression?: IngressStringExpression;
  IpExpression?: IngressIpv4Expression;
  Ipv6Expression?: IngressIpv6Expression;
  TlsExpression?: IngressTlsProtocolExpression;
  BooleanExpression?: IngressBooleanExpression;
}

export type PolicyCondition = (_PolicyCondition & { StringExpression: IngressStringExpression }) | (_PolicyCondition & { IpExpression: IngressIpv4Expression }) | (_PolicyCondition & { Ipv6Expression: IngressIpv6Expression }) | (_PolicyCondition & { TlsExpression: IngressTlsProtocolExpression }) | (_PolicyCondition & { BooleanExpression: IngressBooleanExpression });
export type PolicyConditions = Array<PolicyCondition>;
export interface PolicyStatement {
  Conditions: Array<PolicyCondition>;
  Action: AcceptAction;
}
export type PolicyStatementList = Array<PolicyStatement>;
export type PreSignedUrl = string;

export interface PrivateNetworkConfiguration {
  VpcEndpointId: string;
}
export interface PublicNetworkConfiguration {
  IpType: IpType;
}
export type QBusinessApplicationId = string;

export type QBusinessIndexId = string;

export type Recipients = Array<string>;
export interface RegisterMemberToAddressListRequest {
  AddressListId: string;
  Address: string;
}
export interface RegisterMemberToAddressListResponse {
}
export interface Relay {
  RelayId?: string;
  RelayName?: string;
  LastModifiedTimestamp?: Date | string;
}
export interface RelayAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  Relay: string;
  MailFrom?: MailFrom;
}
export type RelayArn = string;

interface _RelayAuthentication {
  SecretArn?: string;
  NoAuthentication?: NoAuthentication;
}

export type RelayAuthentication = (_RelayAuthentication & { SecretArn: string }) | (_RelayAuthentication & { NoAuthentication: NoAuthentication });
export type RelayId = string;

export type RelayName = string;

export type Relays = Array<Relay>;
export type RelayServerName = string;

export type RelayServerPort = number;

export interface ReplaceRecipientAction {
  ReplaceWith?: Array<string>;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResultField = string;

export type RetentionPeriod = "THREE_MONTHS" | "SIX_MONTHS" | "NINE_MONTHS" | "ONE_YEAR" | "EIGHTEEN_MONTHS" | "TWO_YEARS" | "THIRTY_MONTHS" | "THREE_YEARS" | "FOUR_YEARS" | "FIVE_YEARS" | "SIX_YEARS" | "SEVEN_YEARS" | "EIGHT_YEARS" | "NINE_YEARS" | "TEN_YEARS" | "PERMANENT";
export interface Row {
  ArchivedMessageId?: string;
  ReceivedTimestamp?: Date | string;
  Date?: string;
  To?: string;
  From?: string;
  Cc?: string;
  Subject?: string;
  MessageId?: string;
  HasAttachments?: boolean;
  ReceivedHeaders?: Array<string>;
  InReplyTo?: string;
  XMailer?: string;
  XOriginalMailer?: string;
  XPriority?: string;
  IngressPointId?: string;
  SenderHostname?: string;
  SenderIpAddress?: string;
  Envelope?: Envelope;
  SourceArn?: string;
}
export type RowsList = Array<Row>;
export interface Rule {
  Name?: string;
  Conditions?: Array<RuleCondition>;
  Unless?: Array<RuleCondition>;
  Actions: Array<RuleAction>;
}
interface _RuleAction {
  Drop?: DropAction;
  Relay?: RelayAction;
  Archive?: ArchiveAction;
  WriteToS3?: S3Action;
  Send?: SendAction;
  AddHeader?: AddHeaderAction;
  ReplaceRecipient?: ReplaceRecipientAction;
  DeliverToMailbox?: DeliverToMailboxAction;
  DeliverToQBusiness?: DeliverToQBusinessAction;
  PublishToSns?: SnsAction;
}

export type RuleAction = (_RuleAction & { Drop: DropAction }) | (_RuleAction & { Relay: RelayAction }) | (_RuleAction & { Archive: ArchiveAction }) | (_RuleAction & { WriteToS3: S3Action }) | (_RuleAction & { Send: SendAction }) | (_RuleAction & { AddHeader: AddHeaderAction }) | (_RuleAction & { ReplaceRecipient: ReplaceRecipientAction }) | (_RuleAction & { DeliverToMailbox: DeliverToMailboxAction }) | (_RuleAction & { DeliverToQBusiness: DeliverToQBusinessAction }) | (_RuleAction & { PublishToSns: SnsAction });
export type RuleActions = Array<RuleAction>;
export type RuleAddressListArnList = Array<string>;
export type RuleAddressListEmailAttribute = "RECIPIENT" | "MAIL_FROM" | "SENDER" | "FROM" | "TO" | "CC";
export type RuleBooleanEmailAttribute = "READ_RECEIPT_REQUESTED" | "TLS" | "TLS_WRAPPED";
export interface RuleBooleanExpression {
  Evaluate: RuleBooleanToEvaluate;
  Operator: RuleBooleanOperator;
}
export type RuleBooleanOperator = "IS_TRUE" | "IS_FALSE";
interface _RuleBooleanToEvaluate {
  Attribute?: RuleBooleanEmailAttribute;
  Analysis?: Analysis;
  IsInAddressList?: RuleIsInAddressList;
}

export type RuleBooleanToEvaluate = (_RuleBooleanToEvaluate & { Attribute: RuleBooleanEmailAttribute }) | (_RuleBooleanToEvaluate & { Analysis: Analysis }) | (_RuleBooleanToEvaluate & { IsInAddressList: RuleIsInAddressList });
interface _RuleCondition {
  BooleanExpression?: RuleBooleanExpression;
  StringExpression?: RuleStringExpression;
  NumberExpression?: RuleNumberExpression;
  IpExpression?: RuleIpExpression;
  VerdictExpression?: RuleVerdictExpression;
  DmarcExpression?: RuleDmarcExpression;
}

export type RuleCondition = (_RuleCondition & { BooleanExpression: RuleBooleanExpression }) | (_RuleCondition & { StringExpression: RuleStringExpression }) | (_RuleCondition & { NumberExpression: RuleNumberExpression }) | (_RuleCondition & { IpExpression: RuleIpExpression }) | (_RuleCondition & { VerdictExpression: RuleVerdictExpression }) | (_RuleCondition & { DmarcExpression: RuleDmarcExpression });
export type RuleConditions = Array<RuleCondition>;
export interface RuleDmarcExpression {
  Operator: RuleDmarcOperator;
  Values: Array<RuleDmarcPolicy>;
}
export type RuleDmarcOperator = "EQUALS" | "NOT_EQUALS";
export type RuleDmarcPolicy = "NONE" | "QUARANTINE" | "REJECT";
export type RuleDmarcValueList = Array<RuleDmarcPolicy>;
export type RuleIpEmailAttribute = "SOURCE_IP";
export interface RuleIpExpression {
  Evaluate: RuleIpToEvaluate;
  Operator: RuleIpOperator;
  Values: Array<string>;
}
export type RuleIpOperator = "CIDR_MATCHES" | "NOT_CIDR_MATCHES";
export type RuleIpStringValue = string;

interface _RuleIpToEvaluate {
  Attribute?: RuleIpEmailAttribute;
}

export type RuleIpToEvaluate = (_RuleIpToEvaluate & { Attribute: RuleIpEmailAttribute });
export type RuleIpValueList = Array<string>;
export interface RuleIsInAddressList {
  Attribute: RuleAddressListEmailAttribute;
  AddressLists: Array<string>;
}
export type RuleName = string;

export type RuleNumberEmailAttribute = "MESSAGE_SIZE";
export interface RuleNumberExpression {
  Evaluate: RuleNumberToEvaluate;
  Operator: RuleNumberOperator;
  Value: number;
}
export type RuleNumberOperator = "EQUALS" | "NOT_EQUALS" | "LESS_THAN" | "GREATER_THAN" | "LESS_THAN_OR_EQUAL" | "GREATER_THAN_OR_EQUAL";
interface _RuleNumberToEvaluate {
  Attribute?: RuleNumberEmailAttribute;
}

export type RuleNumberToEvaluate = (_RuleNumberToEvaluate & { Attribute: RuleNumberEmailAttribute });
export type Rules = Array<Rule>;
export interface RuleSet {
  RuleSetId?: string;
  RuleSetName?: string;
  LastModificationDate?: Date | string;
}
export type RuleSetArn = string;

export type RuleSetId = string;

export type RuleSetName = string;

export type RuleSets = Array<RuleSet>;
export type RuleStringEmailAttribute = "MAIL_FROM" | "HELO" | "RECIPIENT" | "SENDER" | "FROM" | "SUBJECT" | "TO" | "CC";
export interface RuleStringExpression {
  Evaluate: RuleStringToEvaluate;
  Operator: RuleStringOperator;
  Values: Array<string>;
}
export type RuleStringList = Array<string>;
export type RuleStringOperator = "EQUALS" | "NOT_EQUALS" | "STARTS_WITH" | "ENDS_WITH" | "CONTAINS";
interface _RuleStringToEvaluate {
  Attribute?: RuleStringEmailAttribute;
  MimeHeaderAttribute?: string;
  Analysis?: Analysis;
}

export type RuleStringToEvaluate = (_RuleStringToEvaluate & { Attribute: RuleStringEmailAttribute }) | (_RuleStringToEvaluate & { MimeHeaderAttribute: string }) | (_RuleStringToEvaluate & { Analysis: Analysis });
export type RuleStringValue = string;

export type RuleVerdict = "PASS" | "FAIL" | "GRAY" | "PROCESSING_FAILED";
export type RuleVerdictAttribute = "SPF" | "DKIM";
export interface RuleVerdictExpression {
  Evaluate: RuleVerdictToEvaluate;
  Operator: RuleVerdictOperator;
  Values: Array<RuleVerdict>;
}
export type RuleVerdictOperator = "EQUALS" | "NOT_EQUALS";
interface _RuleVerdictToEvaluate {
  Attribute?: RuleVerdictAttribute;
  Analysis?: Analysis;
}

export type RuleVerdictToEvaluate = (_RuleVerdictToEvaluate & { Attribute: RuleVerdictAttribute }) | (_RuleVerdictToEvaluate & { Analysis: Analysis });
export type RuleVerdictValueList = Array<RuleVerdict>;
export interface S3Action {
  ActionFailurePolicy?: ActionFailurePolicy;
  RoleArn: string;
  S3Bucket: string;
  S3Prefix?: string;
  S3SseKmsKeyId?: string;
}
export type S3Bucket = string;

export interface S3ExportDestinationConfiguration {
  S3Location?: string;
}
export type S3Location = string;

export type S3Prefix = string;

export type S3PresignedURL = string;

export interface SavedAddress {
  Address: string;
  CreatedTimestamp: Date | string;
}
export type SavedAddresses = Array<SavedAddress>;
export type SearchId = string;

export type SearchMaxResults = number;

export type SearchState = "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
export interface SearchStatus {
  SubmissionTimestamp?: Date | string;
  CompletionTimestamp?: Date | string;
  State?: SearchState;
  ErrorMessage?: string;
}
export interface SearchSummary {
  SearchId?: string;
  Status?: SearchStatus;
}
export type SearchSummaryList = Array<SearchSummary>;
export type SecretArn = string;

export interface SendAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  RoleArn: string;
}
export type SenderIpAddress = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export type SmtpPassword = string;

export interface SnsAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  TopicArn: string;
  RoleArn: string;
  Encoding?: SnsNotificationEncoding;
  PayloadType?: SnsNotificationPayloadType;
}
export type SnsNotificationEncoding = "UTF-8" | "BASE64";
export type SnsNotificationPayloadType = "HEADERS" | "CONTENT";
export type SnsTopicArn = string;

export interface StartAddressListImportJobRequest {
  JobId: string;
}
export interface StartAddressListImportJobResponse {
}
export interface StartArchiveExportRequest {
  ArchiveId: string;
  Filters?: ArchiveFilters;
  FromTimestamp: Date | string;
  ToTimestamp: Date | string;
  MaxResults?: number;
  ExportDestinationConfiguration: ExportDestinationConfiguration;
  IncludeMetadata?: boolean;
}
export interface StartArchiveExportResponse {
  ExportId?: string;
}
export interface StartArchiveSearchRequest {
  ArchiveId: string;
  Filters?: ArchiveFilters;
  FromTimestamp: Date | string;
  ToTimestamp: Date | string;
  MaxResults: number;
}
export interface StartArchiveSearchResponse {
  SearchId?: string;
}
export interface StopAddressListImportJobRequest {
  JobId: string;
}
export interface StopAddressListImportJobResponse {
}
export interface StopArchiveExportRequest {
  ExportId: string;
}
export interface StopArchiveExportResponse {
}
export interface StopArchiveSearchRequest {
  SearchId: string;
}
export interface StopArchiveSearchResponse {
}
export type StringList = Array<string>;
export type StringValue = string;

export type StringValueList = Array<string>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TaggableResourceArn = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export interface TrafficPolicy {
  TrafficPolicyName: string;
  TrafficPolicyId: string;
  DefaultAction: AcceptAction;
}
export type TrafficPolicyArn = string;

export type TrafficPolicyId = string;

export type TrafficPolicyList = Array<TrafficPolicy>;
export type TrafficPolicyName = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateArchiveRequest {
  ArchiveId: string;
  ArchiveName?: string;
  Retention?: ArchiveRetention;
}
export interface UpdateArchiveResponse {
}
export interface UpdateIngressPointRequest {
  IngressPointId: string;
  IngressPointName?: string;
  StatusToUpdate?: IngressPointStatusToUpdate;
  RuleSetId?: string;
  TrafficPolicyId?: string;
  IngressPointConfiguration?: IngressPointConfiguration;
}
export interface UpdateIngressPointResponse {
}
export interface UpdateRelayRequest {
  RelayId: string;
  RelayName?: string;
  ServerName?: string;
  ServerPort?: number;
  Authentication?: RelayAuthentication;
}
export interface UpdateRelayResponse {
}
export interface UpdateRuleSetRequest {
  RuleSetId: string;
  RuleSetName?: string;
  Rules?: Array<Rule>;
}
export interface UpdateRuleSetResponse {
}
export interface UpdateTrafficPolicyRequest {
  TrafficPolicyId: string;
  TrafficPolicyName?: string;
  PolicyStatements?: Array<PolicyStatement>;
  DefaultAction?: AcceptAction;
  MaxMessageSizeBytes?: number;
}
export interface UpdateTrafficPolicyResponse {
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type VpcEndpointId = string;

export declare namespace CreateAddressListImportJob {
  export type Input = CreateAddressListImportJobRequest;
  export type Output = CreateAddressListImportJobResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterMemberFromAddressList {
  export type Input = DeregisterMemberFromAddressListRequest;
  export type Output = DeregisterMemberFromAddressListResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAddressListImportJob {
  export type Input = GetAddressListImportJobRequest;
  export type Output = GetAddressListImportJobResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetArchiveExport {
  export type Input = GetArchiveExportRequest;
  export type Output = GetArchiveExportResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetArchiveMessage {
  export type Input = GetArchiveMessageRequest;
  export type Output = GetArchiveMessageResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetArchiveMessageContent {
  export type Input = GetArchiveMessageContentRequest;
  export type Output = GetArchiveMessageContentResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetArchiveSearch {
  export type Input = GetArchiveSearchRequest;
  export type Output = GetArchiveSearchResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetArchiveSearchResults {
  export type Input = GetArchiveSearchResultsRequest;
  export type Output = GetArchiveSearchResultsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMemberOfAddressList {
  export type Input = GetMemberOfAddressListRequest;
  export type Output = GetMemberOfAddressListResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAddressListImportJobs {
  export type Input = ListAddressListImportJobsRequest;
  export type Output = ListAddressListImportJobsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListArchiveExports {
  export type Input = ListArchiveExportsRequest;
  export type Output = ListArchiveExportsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListArchiveSearches {
  export type Input = ListArchiveSearchesRequest;
  export type Output = ListArchiveSearchesResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMembersOfAddressList {
  export type Input = ListMembersOfAddressListRequest;
  export type Output = ListMembersOfAddressListResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterMemberToAddressList {
  export type Input = RegisterMemberToAddressListRequest;
  export type Output = RegisterMemberToAddressListResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartAddressListImportJob {
  export type Input = StartAddressListImportJobRequest;
  export type Output = StartAddressListImportJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartArchiveExport {
  export type Input = StartArchiveExportRequest;
  export type Output = StartArchiveExportResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartArchiveSearch {
  export type Input = StartArchiveSearchRequest;
  export type Output = StartArchiveSearchResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopAddressListImportJob {
  export type Input = StopAddressListImportJobRequest;
  export type Output = StopAddressListImportJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopArchiveExport {
  export type Input = StopArchiveExportRequest;
  export type Output = StopArchiveExportResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopArchiveSearch {
  export type Input = StopArchiveSearchRequest;
  export type Output = StopArchiveSearchResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAddonInstance {
  export type Input = CreateAddonInstanceRequest;
  export type Output = CreateAddonInstanceResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAddonSubscription {
  export type Input = CreateAddonSubscriptionRequest;
  export type Output = CreateAddonSubscriptionResponse;
  export type Error =
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAddressList {
  export type Input = CreateAddressListRequest;
  export type Output = CreateAddressListResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateArchive {
  export type Input = CreateArchiveRequest;
  export type Output = CreateArchiveResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIngressPoint {
  export type Input = CreateIngressPointRequest;
  export type Output = CreateIngressPointResponse;
  export type Error =
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRelay {
  export type Input = CreateRelayRequest;
  export type Output = CreateRelayResponse;
  export type Error =
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRuleSet {
  export type Input = CreateRuleSetRequest;
  export type Output = CreateRuleSetResponse;
  export type Error =
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTrafficPolicy {
  export type Input = CreateTrafficPolicyRequest;
  export type Output = CreateTrafficPolicyResponse;
  export type Error =
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAddonInstance {
  export type Input = DeleteAddonInstanceRequest;
  export type Output = DeleteAddonInstanceResponse;
  export type Error =
    | ConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAddonSubscription {
  export type Input = DeleteAddonSubscriptionRequest;
  export type Output = DeleteAddonSubscriptionResponse;
  export type Error =
    | ConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAddressList {
  export type Input = DeleteAddressListRequest;
  export type Output = DeleteAddressListResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteArchive {
  export type Input = DeleteArchiveRequest;
  export type Output = DeleteArchiveResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIngressPoint {
  export type Input = DeleteIngressPointRequest;
  export type Output = DeleteIngressPointResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRelay {
  export type Input = DeleteRelayRequest;
  export type Output = DeleteRelayResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRuleSet {
  export type Input = DeleteRuleSetRequest;
  export type Output = DeleteRuleSetResponse;
  export type Error =
    | ConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTrafficPolicy {
  export type Input = DeleteTrafficPolicyRequest;
  export type Output = DeleteTrafficPolicyResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAddonInstance {
  export type Input = GetAddonInstanceRequest;
  export type Output = GetAddonInstanceResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAddonSubscription {
  export type Input = GetAddonSubscriptionRequest;
  export type Output = GetAddonSubscriptionResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAddressList {
  export type Input = GetAddressListRequest;
  export type Output = GetAddressListResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetArchive {
  export type Input = GetArchiveRequest;
  export type Output = GetArchiveResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIngressPoint {
  export type Input = GetIngressPointRequest;
  export type Output = GetIngressPointResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRelay {
  export type Input = GetRelayRequest;
  export type Output = GetRelayResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRuleSet {
  export type Input = GetRuleSetRequest;
  export type Output = GetRuleSetResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTrafficPolicy {
  export type Input = GetTrafficPolicyRequest;
  export type Output = GetTrafficPolicyResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAddonInstances {
  export type Input = ListAddonInstancesRequest;
  export type Output = ListAddonInstancesResponse;
  export type Error =
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAddonSubscriptions {
  export type Input = ListAddonSubscriptionsRequest;
  export type Output = ListAddonSubscriptionsResponse;
  export type Error =
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAddressLists {
  export type Input = ListAddressListsRequest;
  export type Output = ListAddressListsResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListArchives {
  export type Input = ListArchivesRequest;
  export type Output = ListArchivesResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIngressPoints {
  export type Input = ListIngressPointsRequest;
  export type Output = ListIngressPointsResponse;
  export type Error =
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRelays {
  export type Input = ListRelaysRequest;
  export type Output = ListRelaysResponse;
  export type Error =
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRuleSets {
  export type Input = ListRuleSetsRequest;
  export type Output = ListRuleSetsResponse;
  export type Error =
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTrafficPolicies {
  export type Input = ListTrafficPoliciesRequest;
  export type Output = ListTrafficPoliciesResponse;
  export type Error =
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateArchive {
  export type Input = UpdateArchiveRequest;
  export type Output = UpdateArchiveResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateIngressPoint {
  export type Input = UpdateIngressPointRequest;
  export type Output = UpdateIngressPointResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRelay {
  export type Input = UpdateRelayRequest;
  export type Output = UpdateRelayResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRuleSet {
  export type Input = UpdateRuleSetRequest;
  export type Output = UpdateRuleSetResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTrafficPolicy {
  export type Input = UpdateTrafficPolicyRequest;
  export type Output = UpdateTrafficPolicyResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}


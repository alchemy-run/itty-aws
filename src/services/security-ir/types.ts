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
  | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class SecurityIR extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  batchGetMemberAccountDetails(
    input: BatchGetMemberAccountDetailsRequest,
  ): Effect.Effect<BatchGetMemberAccountDetailsResponse, CommonAwsError>;
  cancelMembership(
    input: CancelMembershipRequest,
  ): Effect.Effect<CancelMembershipResponse, CommonAwsError>;
  closeCase(
    input: CloseCaseRequest,
  ): Effect.Effect<CloseCaseResponse, CommonAwsError>;
  createCase(
    input: CreateCaseRequest,
  ): Effect.Effect<CreateCaseResponse, CommonAwsError>;
  createCaseComment(
    input: CreateCaseCommentRequest,
  ): Effect.Effect<CreateCaseCommentResponse, CommonAwsError>;
  createMembership(
    input: CreateMembershipRequest,
  ): Effect.Effect<CreateMembershipResponse, CommonAwsError>;
  getCase(
    input: GetCaseRequest,
  ): Effect.Effect<GetCaseResponse, CommonAwsError>;
  getCaseAttachmentDownloadUrl(
    input: GetCaseAttachmentDownloadUrlRequest,
  ): Effect.Effect<GetCaseAttachmentDownloadUrlResponse, CommonAwsError>;
  getCaseAttachmentUploadUrl(
    input: GetCaseAttachmentUploadUrlRequest,
  ): Effect.Effect<GetCaseAttachmentUploadUrlResponse, CommonAwsError>;
  getMembership(
    input: GetMembershipRequest,
  ): Effect.Effect<GetMembershipResponse, CommonAwsError>;
  listCaseEdits(
    input: ListCaseEditsRequest,
  ): Effect.Effect<ListCaseEditsResponse, CommonAwsError>;
  listCases(
    input: ListCasesRequest,
  ): Effect.Effect<ListCasesResponse, CommonAwsError>;
  listComments(
    input: ListCommentsRequest,
  ): Effect.Effect<ListCommentsResponse, CommonAwsError>;
  listMemberships(
    input: ListMembershipsRequest,
  ): Effect.Effect<ListMembershipsResponse, CommonAwsError>;
  updateCase(
    input: UpdateCaseRequest,
  ): Effect.Effect<UpdateCaseResponse, CommonAwsError>;
  updateCaseComment(
    input: UpdateCaseCommentRequest,
  ): Effect.Effect<UpdateCaseCommentResponse, CommonAwsError>;
  updateCaseStatus(
    input: UpdateCaseStatusRequest,
  ): Effect.Effect<UpdateCaseStatusResponse, CommonAwsError>;
  updateMembership(
    input: UpdateMembershipRequest,
  ): Effect.Effect<UpdateMembershipResponse, CommonAwsError>;
  updateResolverType(
    input: UpdateResolverTypeRequest,
  ): Effect.Effect<UpdateResolverTypeResponse, CommonAwsError>;
}

export declare class SecurityIr extends SecurityIR {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type Arn = string;

export type AttachmentId = string;

export type AWSAccountId = string;

export type AWSAccountIds = Array<string>;
export type AwsRegion =
  | "af-south-1"
  | "ap-east-1"
  | "ap-northeast-1"
  | "ap-northeast-2"
  | "ap-northeast-3"
  | "ap-south-1"
  | "ap-south-2"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ap-southeast-3"
  | "ap-southeast-4"
  | "ap-southeast-5"
  | "ap-southeast-7"
  | "ca-central-1"
  | "ca-west-1"
  | "cn-north-1"
  | "cn-northwest-1"
  | "eu-central-1"
  | "eu-central-2"
  | "eu-north-1"
  | "eu-south-1"
  | "eu-south-2"
  | "eu-west-1"
  | "eu-west-2"
  | "eu-west-3"
  | "il-central-1"
  | "me-central-1"
  | "me-south-1"
  | "mx-central-1"
  | "sa-east-1"
  | "us-east-1"
  | "us-east-2"
  | "us-west-1"
  | "us-west-2";
export type AwsService = string;

export interface BatchGetMemberAccountDetailsRequest {
  membershipId: string;
  accountIds: Array<string>;
}
export interface BatchGetMemberAccountDetailsResponse {
  items?: Array<GetMembershipAccountDetailItem>;
  errors?: Array<GetMembershipAccountDetailError>;
}
export interface CancelMembershipRequest {
  membershipId: string;
}
export interface CancelMembershipResponse {
  membershipId: string;
}
export type CaseArn = string;

export interface CaseAttachmentAttributes {
  attachmentId: string;
  fileName: string;
  attachmentStatus: CaseAttachmentStatus;
  creator: string;
  createdDate: Date | string;
}
export type CaseAttachmentsList = Array<CaseAttachmentAttributes>;
export type CaseAttachmentStatus = "Verified" | "Failed" | "Pending";
export type CaseDescription = string;

export type CaseEditAction = string;

export interface CaseEditItem {
  eventTimestamp?: Date | string;
  principal?: string;
  action?: string;
  message?: string;
}
export type CaseEditItems = Array<CaseEditItem>;
export type CaseEditMessage = string;

export type CaseId = string;

export type CaseStatus =
  | "Submitted"
  | "Acknowledged"
  | "Detection and Analysis"
  | "Containment, Eradication and Recovery"
  | "Post-incident Activities"
  | "Ready to Close"
  | "Closed";
export type CaseTitle = string;

export interface CloseCaseRequest {
  caseId: string;
}
export interface CloseCaseResponse {
  caseStatus?: CaseStatus;
  closedDate?: Date | string;
}
export type ClosureCode =
  | "Investigation Completed"
  | "Not Resolved"
  | "False Positive"
  | "Duplicate";
export type CommentBody = string;

export type CommentId = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ContentLength = number;

export interface CreateCaseCommentRequest {
  caseId: string;
  clientToken?: string;
  body: string;
}
export interface CreateCaseCommentResponse {
  commentId: string;
}
export interface CreateCaseRequest {
  clientToken?: string;
  resolverType: ResolverType;
  title: string;
  description: string;
  engagementType: EngagementType;
  reportedIncidentStartDate: Date | string;
  impactedAccounts: Array<string>;
  watchers: Array<Watcher>;
  threatActorIpAddresses?: Array<ThreatActorIp>;
  impactedServices?: Array<string>;
  impactedAwsRegions?: Array<ImpactedAwsRegion>;
  tags?: Record<string, string>;
}
export interface CreateCaseResponse {
  caseId: string;
}
export interface CreateMembershipRequest {
  clientToken?: string;
  membershipName: string;
  incidentResponseTeam: Array<IncidentResponder>;
  optInFeatures?: Array<OptInFeature>;
  tags?: Record<string, string>;
}
export interface CreateMembershipResponse {
  membershipId: string;
}
export type CustomerType = "Standalone" | "Organization";
export type EmailAddress = string;

export type EngagementType = "Security Incident" | "Investigation";
export type FileName = string;

export interface GetCaseAttachmentDownloadUrlRequest {
  caseId: string;
  attachmentId: string;
}
export interface GetCaseAttachmentDownloadUrlResponse {
  attachmentPresignedUrl: string;
}
export interface GetCaseAttachmentUploadUrlRequest {
  caseId: string;
  fileName: string;
  contentLength: number;
  clientToken?: string;
}
export interface GetCaseAttachmentUploadUrlResponse {
  attachmentPresignedUrl: string;
}
export interface GetCaseRequest {
  caseId: string;
}
export interface GetCaseResponse {
  title?: string;
  caseArn?: string;
  description?: string;
  caseStatus?: CaseStatus;
  engagementType?: EngagementType;
  reportedIncidentStartDate?: Date | string;
  actualIncidentStartDate?: Date | string;
  impactedAwsRegions?: Array<ImpactedAwsRegion>;
  threatActorIpAddresses?: Array<ThreatActorIp>;
  pendingAction?: PendingAction;
  impactedAccounts?: Array<string>;
  watchers?: Array<Watcher>;
  createdDate?: Date | string;
  lastUpdatedDate?: Date | string;
  closureCode?: ClosureCode;
  resolverType?: ResolverType;
  impactedServices?: Array<string>;
  caseAttachments?: Array<CaseAttachmentAttributes>;
  closedDate?: Date | string;
}
export interface GetMembershipAccountDetailError {
  accountId: string;
  error: string;
  message: string;
}
export type GetMembershipAccountDetailErrors =
  Array<GetMembershipAccountDetailError>;
export interface GetMembershipAccountDetailItem {
  accountId?: string;
  relationshipStatus?: MembershipAccountRelationshipStatus;
  relationshipType?: MembershipAccountRelationshipType;
}
export type GetMembershipAccountDetailItems =
  Array<GetMembershipAccountDetailItem>;
export interface GetMembershipRequest {
  membershipId: string;
}
export interface GetMembershipResponse {
  membershipId: string;
  accountId?: string;
  region?: AwsRegion;
  membershipName?: string;
  membershipArn?: string;
  membershipStatus?: MembershipStatus;
  membershipActivationTimestamp?: Date | string;
  membershipDeactivationTimestamp?: Date | string;
  customerType?: CustomerType;
  numberOfAccountsCovered?: number;
  incidentResponseTeam?: Array<IncidentResponder>;
  optInFeatures?: Array<OptInFeature>;
}
export type ImpactedAccounts = Array<string>;
export interface ImpactedAwsRegion {
  region: AwsRegion;
}
export type ImpactedAwsRegionList = Array<ImpactedAwsRegion>;
export type ImpactedServicesList = Array<string>;
export interface IncidentResponder {
  name: string;
  jobTitle: string;
  email: string;
}
export type IncidentResponderName = string;

export type IncidentResponseTeam = Array<IncidentResponder>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export declare class InvalidTokenException extends EffectData.TaggedError(
  "InvalidTokenException",
)<{
  readonly message: string;
}> {}
export type IPAddress = string;

export type JobTitle = string;

export interface ListCaseEditsRequest {
  nextToken?: string;
  maxResults?: number;
  caseId: string;
}
export interface ListCaseEditsResponse {
  nextToken?: string;
  items?: Array<CaseEditItem>;
  total?: number;
}
export interface ListCasesItem {
  caseId: string;
  lastUpdatedDate?: Date | string;
  title?: string;
  caseArn?: string;
  engagementType?: EngagementType;
  caseStatus?: CaseStatus;
  createdDate?: Date | string;
  closedDate?: Date | string;
  resolverType?: ResolverType;
  pendingAction?: PendingAction;
}
export type ListCasesItems = Array<ListCasesItem>;
export interface ListCasesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListCasesResponse {
  nextToken?: string;
  items?: Array<ListCasesItem>;
  total?: number;
}
export interface ListCommentsItem {
  commentId: string;
  createdDate?: Date | string;
  lastUpdatedDate?: Date | string;
  creator?: string;
  lastUpdatedBy?: string;
  body?: string;
}
export type ListCommentsItems = Array<ListCommentsItem>;
export interface ListCommentsRequest {
  nextToken?: string;
  maxResults?: number;
  caseId: string;
}
export interface ListCommentsResponse {
  nextToken?: string;
  items?: Array<ListCommentsItem>;
  total?: number;
}
export interface ListMembershipItem {
  membershipId: string;
  accountId?: string;
  region?: AwsRegion;
  membershipArn?: string;
  membershipStatus?: MembershipStatus;
}
export type ListMembershipItems = Array<ListMembershipItem>;
export interface ListMembershipsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListMembershipsResponse {
  nextToken?: string;
  items?: Array<ListMembershipItem>;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags: Record<string, string>;
}
export type MembershipAccountRelationshipStatus =
  | "Associated"
  | "Disassociated";
export type MembershipAccountRelationshipType = "Organization";
export type MembershipArn = string;

export type MembershipId = string;

export type MembershipName = string;

export type MembershipStatus = "Active" | "Cancelled" | "Terminated";
export interface OptInFeature {
  featureName: OptInFeatureName;
  isEnabled: boolean;
}
export type OptInFeatureName = "Triage";
export type OptInFeatures = Array<OptInFeature>;
export type PendingAction = "Customer" | "None";
export type PersonName = string;

export type PrincipalId = string;

export type ResolverType = "AWS" | "Self";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export declare class SecurityIncidentResponseNotActiveException extends EffectData.TaggedError(
  "SecurityIncidentResponseNotActiveException",
)<{
  readonly message: string;
}> {}
export type SelfManagedCaseStatus =
  | "Submitted"
  | "Detection and Analysis"
  | "Containment, Eradication and Recovery"
  | "Post-incident Activities";
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export type TagKey = string;

export type TagKeys = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export interface ThreatActorIp {
  ipAddress: string;
  userAgent?: string;
}
export type ThreatActorIpList = Array<ThreatActorIp>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateCaseCommentRequest {
  caseId: string;
  commentId: string;
  body: string;
}
export interface UpdateCaseCommentResponse {
  commentId: string;
  body?: string;
}
export interface UpdateCaseRequest {
  caseId: string;
  title?: string;
  description?: string;
  reportedIncidentStartDate?: Date | string;
  actualIncidentStartDate?: Date | string;
  engagementType?: EngagementType;
  watchersToAdd?: Array<Watcher>;
  watchersToDelete?: Array<Watcher>;
  threatActorIpAddressesToAdd?: Array<ThreatActorIp>;
  threatActorIpAddressesToDelete?: Array<ThreatActorIp>;
  impactedServicesToAdd?: Array<string>;
  impactedServicesToDelete?: Array<string>;
  impactedAwsRegionsToAdd?: Array<ImpactedAwsRegion>;
  impactedAwsRegionsToDelete?: Array<ImpactedAwsRegion>;
  impactedAccountsToAdd?: Array<string>;
  impactedAccountsToDelete?: Array<string>;
}
export interface UpdateCaseResponse {}
export interface UpdateCaseStatusRequest {
  caseId: string;
  caseStatus: SelfManagedCaseStatus;
}
export interface UpdateCaseStatusResponse {
  caseStatus?: SelfManagedCaseStatus;
}
export interface UpdateMembershipRequest {
  membershipId: string;
  membershipName?: string;
  incidentResponseTeam?: Array<IncidentResponder>;
  optInFeatures?: Array<OptInFeature>;
}
export interface UpdateMembershipResponse {}
export interface UpdateResolverTypeRequest {
  caseId: string;
  resolverType: ResolverType;
}
export interface UpdateResolverTypeResponse {
  caseId: string;
  caseStatus?: CaseStatus;
  resolverType?: ResolverType;
}
export type Url = string;

export type UserAgent = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: ValidationExceptionReason;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER";
export interface Watcher {
  email: string;
  name?: string;
  jobTitle?: string;
}
export type Watchers = Array<Watcher>;
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetMemberAccountDetails {
  export type Input = BatchGetMemberAccountDetailsRequest;
  export type Output = BatchGetMemberAccountDetailsResponse;
  export type Error = CommonAwsError;
}

export declare namespace CancelMembership {
  export type Input = CancelMembershipRequest;
  export type Output = CancelMembershipResponse;
  export type Error = CommonAwsError;
}

export declare namespace CloseCase {
  export type Input = CloseCaseRequest;
  export type Output = CloseCaseResponse;
  export type Error = CommonAwsError;
}

export declare namespace CreateCase {
  export type Input = CreateCaseRequest;
  export type Output = CreateCaseResponse;
  export type Error = CommonAwsError;
}

export declare namespace CreateCaseComment {
  export type Input = CreateCaseCommentRequest;
  export type Output = CreateCaseCommentResponse;
  export type Error = CommonAwsError;
}

export declare namespace CreateMembership {
  export type Input = CreateMembershipRequest;
  export type Output = CreateMembershipResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetCase {
  export type Input = GetCaseRequest;
  export type Output = GetCaseResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetCaseAttachmentDownloadUrl {
  export type Input = GetCaseAttachmentDownloadUrlRequest;
  export type Output = GetCaseAttachmentDownloadUrlResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetCaseAttachmentUploadUrl {
  export type Input = GetCaseAttachmentUploadUrlRequest;
  export type Output = GetCaseAttachmentUploadUrlResponse;
  export type Error = CommonAwsError;
}

export declare namespace GetMembership {
  export type Input = GetMembershipRequest;
  export type Output = GetMembershipResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListCaseEdits {
  export type Input = ListCaseEditsRequest;
  export type Output = ListCaseEditsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListCases {
  export type Input = ListCasesRequest;
  export type Output = ListCasesResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListComments {
  export type Input = ListCommentsRequest;
  export type Output = ListCommentsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListMemberships {
  export type Input = ListMembershipsRequest;
  export type Output = ListMembershipsResponse;
  export type Error = CommonAwsError;
}

export declare namespace UpdateCase {
  export type Input = UpdateCaseRequest;
  export type Output = UpdateCaseResponse;
  export type Error = CommonAwsError;
}

export declare namespace UpdateCaseComment {
  export type Input = UpdateCaseCommentRequest;
  export type Output = UpdateCaseCommentResponse;
  export type Error = CommonAwsError;
}

export declare namespace UpdateCaseStatus {
  export type Input = UpdateCaseStatusRequest;
  export type Output = UpdateCaseStatusResponse;
  export type Error = CommonAwsError;
}

export declare namespace UpdateMembership {
  export type Input = UpdateMembershipRequest;
  export type Output = UpdateMembershipResponse;
  export type Error = CommonAwsError;
}

export declare namespace UpdateResolverType {
  export type Input = UpdateResolverTypeRequest;
  export type Output = UpdateResolverTypeResponse;
  export type Error = CommonAwsError;
}

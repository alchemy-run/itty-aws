import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class MPA extends AWSServiceClient {
  getPolicyVersion(
    input: GetPolicyVersionRequest,
  ): Effect.Effect<
    GetPolicyVersionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    | AccessDeniedException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPolicies(
    input: ListPoliciesRequest,
  ): Effect.Effect<
    ListPoliciesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPolicyVersions(
    input: ListPolicyVersionsRequest,
  ): Effect.Effect<
    ListPolicyVersionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listResourcePolicies(
    input: ListResourcePoliciesRequest,
  ): Effect.Effect<
    ListResourcePoliciesResponse,
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
    | TooManyTagsException
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
}

export declare class Mpa extends MPA {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export type AccountId = string;

export type ActionCompletionStrategy = "AUTO_COMPLETION_UPON_APPROVAL";
export type ActionName = string;

interface _ApprovalStrategy {
  MofN?: MofNApprovalStrategy;
}

export type ApprovalStrategy = _ApprovalStrategy & {
  MofN: MofNApprovalStrategy;
};
interface _ApprovalStrategyResponse {
  MofN?: MofNApprovalStrategy;
}

export type ApprovalStrategyResponse = _ApprovalStrategyResponse & {
  MofN: MofNApprovalStrategy;
};
export type ApprovalTeamArn = string;

export type ApprovalTeamName = string;

export interface ApprovalTeamRequestApprover {
  PrimaryIdentityId: string;
  PrimaryIdentitySourceArn: string;
}
export type ApprovalTeamRequestApprovers = Array<ApprovalTeamRequestApprover>;
export type ApprovalTeamStatus = "ACTIVE" | "INACTIVE" | "DELETING" | "PENDING";
export type ApprovalTeamStatusCode =
  | "VALIDATING"
  | "PENDING_ACTIVATION"
  | "FAILED_VALIDATION"
  | "FAILED_ACTIVATION"
  | "UPDATE_PENDING_APPROVAL"
  | "UPDATE_PENDING_ACTIVATION"
  | "UPDATE_FAILED_APPROVAL"
  | "UPDATE_FAILED_ACTIVATION"
  | "UPDATE_FAILED_VALIDATION"
  | "DELETE_PENDING_APPROVAL"
  | "DELETE_FAILED_APPROVAL"
  | "DELETE_FAILED_VALIDATION";
export interface CancelSessionRequest {
  SessionArn: string;
}
export interface CancelSessionResponse {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
}> {}
export interface CreateApprovalTeamRequest {
  ClientToken?: string;
  ApprovalStrategy: ApprovalStrategy;
  Approvers: Array<ApprovalTeamRequestApprover>;
  Description: string;
  Policies: Array<PolicyReference>;
  Name: string;
  Tags?: Record<string, string>;
}
export interface CreateApprovalTeamResponse {
  CreationTime?: Date | string;
  Arn?: string;
  Name?: string;
  VersionId?: string;
}
export interface CreateIdentitySourceRequest {
  IdentitySourceParameters: IdentitySourceParameters;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateIdentitySourceResponse {
  IdentitySourceType?: IdentitySourceType;
  IdentitySourceArn?: string;
  CreationTime?: Date | string;
}
export interface DeleteIdentitySourceRequest {
  IdentitySourceArn: string;
}
export interface DeleteInactiveApprovalTeamVersionRequest {
  Arn: string;
  VersionId: string;
}
export interface DeleteInactiveApprovalTeamVersionResponse {}
export type Description = string;

export interface Filter {
  FieldName?: FilterField;
  Operator?: Operator;
  Value?: string;
}
export type FilterField =
  | "ACTION_NAME"
  | "APPROVAL_TEAM_NAME"
  | "VOTING_TIME"
  | "VOTE"
  | "SESSION_STATUS"
  | "INITIATION_TIME";
export type Filters = Array<Filter>;
export interface GetApprovalTeamRequest {
  Arn: string;
}
export interface GetApprovalTeamResponse {
  CreationTime?: Date | string;
  ApprovalStrategy?: ApprovalStrategyResponse;
  NumberOfApprovers?: number;
  Approvers?: Array<GetApprovalTeamResponseApprover>;
  Arn?: string;
  Description?: string;
  Name?: string;
  Status?: ApprovalTeamStatus;
  StatusCode?: ApprovalTeamStatusCode;
  StatusMessage?: string;
  UpdateSessionArn?: string;
  VersionId?: string;
  Policies?: Array<PolicyReference>;
  LastUpdateTime?: Date | string;
  PendingUpdate?: PendingUpdate;
}
export interface GetApprovalTeamResponseApprover {
  ApproverId?: string;
  ResponseTime?: Date | string;
  PrimaryIdentityId?: string;
  PrimaryIdentitySourceArn?: string;
  PrimaryIdentityStatus?: IdentityStatus;
}
export type GetApprovalTeamResponseApprovers =
  Array<GetApprovalTeamResponseApprover>;
export interface GetIdentitySourceRequest {
  IdentitySourceArn: string;
}
export interface GetIdentitySourceResponse {
  IdentitySourceType?: IdentitySourceType;
  IdentitySourceParameters?: IdentitySourceParametersForGet;
  IdentitySourceArn?: string;
  CreationTime?: Date | string;
  Status?: IdentitySourceStatus;
  StatusCode?: IdentitySourceStatusCode;
  StatusMessage?: string;
}
export interface GetPolicyVersionRequest {
  PolicyVersionArn: string;
}
export interface GetPolicyVersionResponse {
  PolicyVersion: PolicyVersion;
}
export interface GetResourcePolicyRequest {
  ResourceArn: string;
  PolicyName: string;
  PolicyType: PolicyType;
}
export interface GetResourcePolicyResponse {
  ResourceArn: string;
  PolicyType: PolicyType;
  PolicyVersionArn?: string;
  PolicyName: string;
  PolicyDocument: string;
}
export interface GetSessionRequest {
  SessionArn: string;
}
export interface GetSessionResponse {
  SessionArn?: string;
  ApprovalTeamArn?: string;
  ApprovalTeamName?: string;
  ProtectedResourceArn?: string;
  ApprovalStrategy?: ApprovalStrategyResponse;
  NumberOfApprovers?: number;
  InitiationTime?: Date | string;
  ExpirationTime?: Date | string;
  CompletionTime?: Date | string;
  Description?: string;
  Metadata?: Record<string, string>;
  Status?: SessionStatus;
  StatusCode?: SessionStatusCode;
  StatusMessage?: string;
  ExecutionStatus?: SessionExecutionStatus;
  ActionName?: string;
  RequesterServicePrincipal?: string;
  RequesterPrincipalArn?: string;
  RequesterAccountId?: string;
  RequesterRegion?: string;
  RequesterComment?: string;
  ActionCompletionStrategy?: ActionCompletionStrategy;
  ApproverResponses?: Array<GetSessionResponseApproverResponse>;
}
export interface GetSessionResponseApproverResponse {
  ApproverId?: string;
  IdentitySourceArn?: string;
  IdentityId?: string;
  Response?: SessionResponse;
  ResponseTime?: Date | string;
}
export type GetSessionResponseApproverResponses =
  Array<GetSessionResponseApproverResponse>;
export interface IamIdentityCenter {
  InstanceArn: string;
  Region: string;
}
export interface IamIdentityCenterForGet {
  InstanceArn?: string;
  ApprovalPortalUrl?: string;
  Region?: string;
}
export interface IamIdentityCenterForList {
  InstanceArn?: string;
  ApprovalPortalUrl?: string;
  Region?: string;
}
export type IdcInstanceArn = string;

export type IdentityId = string;

export interface IdentitySourceForList {
  IdentitySourceType?: IdentitySourceType;
  IdentitySourceParameters?: IdentitySourceParametersForList;
  IdentitySourceArn?: string;
  CreationTime?: Date | string;
  Status?: IdentitySourceStatus;
  StatusCode?: IdentitySourceStatusCode;
  StatusMessage?: string;
}
export interface IdentitySourceParameters {
  IamIdentityCenter?: IamIdentityCenter;
}
interface _IdentitySourceParametersForGet {
  IamIdentityCenter?: IamIdentityCenterForGet;
}

export type IdentitySourceParametersForGet = _IdentitySourceParametersForGet & {
  IamIdentityCenter: IamIdentityCenterForGet;
};
interface _IdentitySourceParametersForList {
  IamIdentityCenter?: IamIdentityCenterForList;
}

export type IdentitySourceParametersForList =
  _IdentitySourceParametersForList & {
    IamIdentityCenter: IamIdentityCenterForList;
  };
export type IdentitySources = Array<IdentitySourceForList>;
export type IdentitySourceStatus = "CREATING" | "ACTIVE" | "DELETING" | "ERROR";
export type IdentitySourceStatusCode =
  | "ACCESS_DENIED"
  | "DELETION_FAILED"
  | "IDC_INSTANCE_NOT_FOUND"
  | "IDC_INSTANCE_NOT_VALID";
export type IdentitySourceType = "IAM_IDENTITY_CENTER";
export type IdentityStatus = "PENDING" | "ACCEPTED" | "REJECTED" | "INVALID";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message: string;
}> {}
export type IsoTimestamp = Date | string;

export interface ListApprovalTeamsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListApprovalTeamsResponse {
  NextToken?: string;
  ApprovalTeams?: Array<ListApprovalTeamsResponseApprovalTeam>;
}
export interface ListApprovalTeamsResponseApprovalTeam {
  CreationTime?: Date | string;
  ApprovalStrategy?: ApprovalStrategyResponse;
  NumberOfApprovers?: number;
  Arn?: string;
  Name?: string;
  Description?: string;
  Status?: ApprovalTeamStatus;
  StatusCode?: ApprovalTeamStatusCode;
  StatusMessage?: string;
}
export type ListApprovalTeamsResponseApprovalTeams =
  Array<ListApprovalTeamsResponseApprovalTeam>;
export interface ListIdentitySourcesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListIdentitySourcesResponse {
  NextToken?: string;
  IdentitySources?: Array<IdentitySourceForList>;
}
export interface ListPoliciesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPoliciesResponse {
  NextToken?: string;
  Policies?: Array<Policy>;
}
export interface ListPolicyVersionsRequest {
  MaxResults?: number;
  NextToken?: string;
  PolicyArn: string;
}
export interface ListPolicyVersionsResponse {
  NextToken?: string;
  PolicyVersions?: Array<PolicyVersionSummary>;
}
export interface ListResourcePoliciesRequest {
  ResourceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListResourcePoliciesResponse {
  NextToken?: string;
  ResourcePolicies?: Array<ListResourcePoliciesResponseResourcePolicy>;
}
export type ListResourcePoliciesResponseResourcePolicies =
  Array<ListResourcePoliciesResponseResourcePolicy>;
export interface ListResourcePoliciesResponseResourcePolicy {
  PolicyArn?: string;
  PolicyType?: PolicyType;
  PolicyName?: string;
}
export interface ListSessionsRequest {
  ApprovalTeamArn: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface ListSessionsResponse {
  NextToken?: string;
  Sessions?: Array<ListSessionsResponseSession>;
}
export interface ListSessionsResponseSession {
  SessionArn?: string;
  ApprovalTeamName?: string;
  ApprovalTeamArn?: string;
  InitiationTime?: Date | string;
  ExpirationTime?: Date | string;
  CompletionTime?: Date | string;
  Description?: string;
  ActionName?: string;
  ProtectedResourceArn?: string;
  RequesterServicePrincipal?: string;
  RequesterPrincipalArn?: string;
  RequesterRegion?: string;
  RequesterAccountId?: string;
  Status?: SessionStatus;
  StatusCode?: SessionStatusCode;
  StatusMessage?: string;
  ActionCompletionStrategy?: ActionCompletionStrategy;
}
export type ListSessionsResponseSessions = Array<ListSessionsResponseSession>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type MaxResults = number;

export type Message = string;

export interface MofNApprovalStrategy {
  MinApprovalsRequired: number;
}
export type Operator =
  | "EQUALS"
  | "NOT_EQUALS"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "LESS_THAN_OR_EQUAL_TO"
  | "CONTAINS"
  | "DOES_NOT_CONTAIN"
  | "BETWEEN";
export type ParticipantId = string;

export interface PendingUpdate {
  VersionId?: string;
  Description?: string;
  ApprovalStrategy?: ApprovalStrategyResponse;
  NumberOfApprovers?: number;
  Status?: ApprovalTeamStatus;
  StatusCode?: ApprovalTeamStatusCode;
  StatusMessage?: string;
  Approvers?: Array<GetApprovalTeamResponseApprover>;
  UpdateInitiationTime?: Date | string;
}
export type Policies = Array<Policy>;
export type PoliciesReferences = Array<PolicyReference>;
export interface Policy {
  Arn: string;
  DefaultVersion: number;
  PolicyType: PolicyType;
  Name: string;
}
export type PolicyDocument = string;

export type PolicyName = string;

export interface PolicyReference {
  PolicyArn: string;
}
export type PolicyStatus = "ATTACHABLE" | "DEPRECATED";
export type PolicyType = "AWS_MANAGED" | "AWS_RAM";
export interface PolicyVersion {
  Arn: string;
  PolicyArn: string;
  VersionId: number;
  PolicyType: PolicyType;
  IsDefault: boolean;
  Name: string;
  Status: PolicyStatus;
  CreationTime: Date | string;
  LastUpdatedTime: Date | string;
  Document: string;
}
export type PolicyVersionId = number;

export type PolicyVersions = Array<PolicyVersionSummary>;
export interface PolicyVersionSummary {
  Arn: string;
  PolicyArn: string;
  VersionId: number;
  PolicyType: PolicyType;
  IsDefault: boolean;
  Name: string;
  Status: PolicyStatus;
  CreationTime: Date | string;
  LastUpdatedTime: Date | string;
}
export type QualifiedPolicyArn = string;

export type Region = string;

export type RequesterComment = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
}> {}
export type ServicePrincipal = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
}> {}
export type SessionArn = string;

export type SessionExecutionStatus = "EXECUTED" | "FAILED" | "PENDING";
export type SessionKey = string;

export type SessionMetadata = Record<string, string>;
export type SessionResponse = "APPROVED" | "REJECTED" | "NO_RESPONSE";
export type SessionStatus =
  | "PENDING"
  | "CANCELLED"
  | "APPROVED"
  | "FAILED"
  | "CREATING";
export type SessionStatusCode =
  | "REJECTED"
  | "EXPIRED"
  | "CONFIGURATION_CHANGED";
export type SessionValue = string;

export interface StartActiveApprovalTeamDeletionRequest {
  PendingWindowDays?: number;
  Arn: string;
}
export interface StartActiveApprovalTeamDeletionResponse {
  DeletionCompletionTime?: Date | string;
  DeletionStartTime?: Date | string;
}
export type MpaString = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export type Token = string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message: string;
  readonly ResourceName?: string;
}> {}
export type UnqualifiedPolicyArn = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateApprovalTeamRequest {
  ApprovalStrategy?: ApprovalStrategy;
  Approvers?: Array<ApprovalTeamRequestApprover>;
  Description?: string;
  Arn: string;
}
export interface UpdateApprovalTeamResponse {
  VersionId?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
}> {}
export declare namespace GetPolicyVersion {
  export type Input = GetPolicyVersionRequest;
  export type Output = GetPolicyVersionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPolicies {
  export type Input = ListPoliciesRequest;
  export type Output = ListPoliciesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPolicyVersions {
  export type Input = ListPolicyVersionsRequest;
  export type Output = ListPolicyVersionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourcePolicies {
  export type Input = ListResourcePoliciesRequest;
  export type Output = ListResourcePoliciesResponse;
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
    | TooManyTagsException
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

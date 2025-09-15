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

export declare class AIOps extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | AccessDeniedException
    | ConflictException
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
    | ConflictException
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
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createInvestigationGroup(
    input: CreateInvestigationGroupInput,
  ): Effect.Effect<
    CreateInvestigationGroupOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteInvestigationGroup(
    input: DeleteInvestigationGroupRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteInvestigationGroupPolicy(
    input: DeleteInvestigationGroupPolicyRequest,
  ): Effect.Effect<
    DeleteInvestigationGroupPolicyOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getInvestigationGroup(
    input: GetInvestigationGroupRequest,
  ): Effect.Effect<
    GetInvestigationGroupResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getInvestigationGroupPolicy(
    input: GetInvestigationGroupPolicyRequest,
  ): Effect.Effect<
    GetInvestigationGroupPolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInvestigationGroups(
    input: ListInvestigationGroupsInput,
  ): Effect.Effect<
    ListInvestigationGroupsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError
  >;
  putInvestigationGroupPolicy(
    input: PutInvestigationGroupPolicyRequest,
  ): Effect.Effect<
    PutInvestigationGroupPolicyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateInvestigationGroup(
    input: UpdateInvestigationGroupRequest,
  ): Effect.Effect<
    UpdateInvestigationGroupOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Aiops extends AIOps {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type ChatbotNotificationChannel = Record<string, Array<string>>;
export type ChatConfigurationArn = string;

export type ChatConfigurationArns = Array<string>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateInvestigationGroupInput {
  name: string;
  roleArn: string;
  encryptionConfiguration?: EncryptionConfiguration;
  retentionInDays?: number;
  tags?: Record<string, string>;
  tagKeyBoundaries?: Array<string>;
  chatbotNotificationChannel?: Record<string, Array<string>>;
  isCloudTrailEventHistoryEnabled?: boolean;
  crossAccountConfigurations?: Array<CrossAccountConfiguration>;
}
export interface CreateInvestigationGroupOutput {
  arn?: string;
}
export interface CrossAccountConfiguration {
  sourceRoleArn?: string;
}
export type CrossAccountConfigurations = Array<CrossAccountConfiguration>;
export interface DeleteInvestigationGroupPolicyOutput {}
export interface DeleteInvestigationGroupPolicyRequest {
  identifier: string;
}
export interface DeleteInvestigationGroupRequest {
  identifier: string;
}
export interface EncryptionConfiguration {
  type?: EncryptionConfigurationType;
  kmsKeyId?: string;
}
export type EncryptionConfigurationType =
  | "AWS_OWNED_KEY"
  | "CUSTOMER_MANAGED_KMS_KEY";
export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly message?: string;
}> {}
export interface GetInvestigationGroupPolicyRequest {
  identifier: string;
}
export interface GetInvestigationGroupPolicyResponse {
  investigationGroupArn?: string;
  policy?: string;
}
export interface GetInvestigationGroupRequest {
  identifier: string;
}
export interface GetInvestigationGroupResponse {
  createdBy?: string;
  createdAt?: number;
  lastModifiedBy?: string;
  lastModifiedAt?: number;
  name?: string;
  arn?: string;
  roleArn?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  retentionInDays?: number;
  chatbotNotificationChannel?: Record<string, Array<string>>;
  tagKeyBoundaries?: Array<string>;
  isCloudTrailEventHistoryEnabled?: boolean;
  crossAccountConfigurations?: Array<CrossAccountConfiguration>;
}
export type IdentifierStringWithPatternAndLengthLimits = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type InvestigationGroupArn = string;

export type InvestigationGroupIdentifier = string;

export type InvestigationGroupPolicyDocument = string;

export type InvestigationGroups = Array<ListInvestigationGroupsModel>;
export type KmsKeyId = string;

export interface ListInvestigationGroupsInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListInvestigationGroupsModel {
  arn?: string;
  name?: string;
}
export interface ListInvestigationGroupsOutput {
  nextToken?: string;
  investigationGroups?: Array<ListInvestigationGroupsModel>;
}
export interface ListTagsForResourceOutput {
  tags?: Record<string, string>;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface PutInvestigationGroupPolicyRequest {
  identifier: string;
  policy: string;
}
export interface PutInvestigationGroupPolicyResponse {
  investigationGroupArn?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type Retention = number;

export type RoleArn = string;

export type SensitiveStringWithLengthLimits = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export type SNSTopicArn = string;

export type StringWithPatternAndLengthLimits = string;

export type TagKey = string;

export type TagKeyBoundaries = Array<string>;
export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateInvestigationGroupOutput {}
export interface UpdateInvestigationGroupRequest {
  identifier: string;
  roleArn?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  tagKeyBoundaries?: Array<string>;
  chatbotNotificationChannel?: Record<string, Array<string>>;
  isCloudTrailEventHistoryEnabled?: boolean;
  crossAccountConfigurations?: Array<CrossAccountConfiguration>;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceOutput;
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

export declare namespace CreateInvestigationGroup {
  export type Input = CreateInvestigationGroupInput;
  export type Output = CreateInvestigationGroupOutput;
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

export declare namespace DeleteInvestigationGroup {
  export type Input = DeleteInvestigationGroupRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteInvestigationGroupPolicy {
  export type Input = DeleteInvestigationGroupPolicyRequest;
  export type Output = DeleteInvestigationGroupPolicyOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInvestigationGroup {
  export type Input = GetInvestigationGroupRequest;
  export type Output = GetInvestigationGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetInvestigationGroupPolicy {
  export type Input = GetInvestigationGroupPolicyRequest;
  export type Output = GetInvestigationGroupPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInvestigationGroups {
  export type Input = ListInvestigationGroupsInput;
  export type Output = ListInvestigationGroupsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutInvestigationGroupPolicy {
  export type Input = PutInvestigationGroupPolicyRequest;
  export type Output = PutInvestigationGroupPolicyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateInvestigationGroup {
  export type Input = UpdateInvestigationGroupRequest;
  export type Output = UpdateInvestigationGroupOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

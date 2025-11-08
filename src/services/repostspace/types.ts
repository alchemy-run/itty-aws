import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class repostspace extends AWSServiceClient {
  batchAddChannelRoleToAccessors(
    input: BatchAddChannelRoleToAccessorsInput,
  ): Effect.Effect<
    BatchAddChannelRoleToAccessorsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchAddRole(
    input: BatchAddRoleInput,
  ): Effect.Effect<
    BatchAddRoleOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchRemoveChannelRoleFromAccessors(
    input: BatchRemoveChannelRoleFromAccessorsInput,
  ): Effect.Effect<
    BatchRemoveChannelRoleFromAccessorsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchRemoveRole(
    input: BatchRemoveRoleInput,
  ): Effect.Effect<
    BatchRemoveRoleOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createChannel(
    input: CreateChannelInput,
  ): Effect.Effect<
    CreateChannelOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createSpace(
    input: CreateSpaceInput,
  ): Effect.Effect<
    CreateSpaceOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteSpace(
    input: DeleteSpaceInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deregisterAdmin(
    input: DeregisterAdminInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getChannel(
    input: GetChannelInput,
  ): Effect.Effect<
    GetChannelOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getSpace(
    input: GetSpaceInput,
  ): Effect.Effect<
    GetSpaceOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listChannels(
    input: ListChannelsInput,
  ): Effect.Effect<
    ListChannelsOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listSpaces(
    input: ListSpacesInput,
  ): Effect.Effect<
    ListSpacesOutput,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  registerAdmin(
    input: RegisterAdminInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  sendInvites(
    input: SendInvitesInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateChannel(
    input: UpdateChannelInput,
  ): Effect.Effect<
    UpdateChannelOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateSpace(
    input: UpdateSpaceInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export declare class Repostspace extends repostspace {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccessorId = string;

export type AccessorIdList = Array<string>;
export type AdminId = string;

export type AllowedDomainsList = Array<string>;
export type Arn = string;

export interface BatchAddChannelRoleToAccessorsInput {
  spaceId: string;
  channelId: string;
  accessorIds: Array<string>;
  channelRole: ChannelRole;
}
export interface BatchAddChannelRoleToAccessorsOutput {
  addedAccessorIds: Array<string>;
  errors: Array<BatchError>;
}
export interface BatchAddRoleInput {
  spaceId: string;
  accessorIds: Array<string>;
  role: Role;
}
export interface BatchAddRoleOutput {
  addedAccessorIds: Array<string>;
  errors: Array<BatchError>;
}
export interface BatchError {
  accessorId: string;
  error: number;
  message: string;
}
export type BatchErrorList = Array<BatchError>;
export interface BatchRemoveChannelRoleFromAccessorsInput {
  spaceId: string;
  channelId: string;
  accessorIds: Array<string>;
  channelRole: ChannelRole;
}
export interface BatchRemoveChannelRoleFromAccessorsOutput {
  removedAccessorIds: Array<string>;
  errors: Array<BatchError>;
}
export interface BatchRemoveRoleInput {
  spaceId: string;
  accessorIds: Array<string>;
  role: Role;
}
export interface BatchRemoveRoleOutput {
  removedAccessorIds: Array<string>;
  errors: Array<BatchError>;
}
export interface ChannelData {
  spaceId: string;
  channelId: string;
  channelName: string;
  channelDescription?: string;
  createDateTime: Date | string;
  deleteDateTime?: Date | string;
  channelStatus: ChannelStatus;
  userCount: number;
  groupCount: number;
}
export type ChannelDescription = string;

export type ChannelId = string;

export type ChannelName = string;

export type ChannelRole = "ASKER" | "EXPERT" | "MODERATOR" | "SUPPORTREQUESTOR";
export type ChannelRoleList = Array<ChannelRole>;
export type ChannelRoles = Record<string, Array<ChannelRole>>;
export type ChannelsList = Array<ChannelData>;
export type ChannelStatus = "CREATED" | "CREATING" | "CREATE_FAILED" | "DELETED" | "DELETING" | "DELETE_FAILED";
export type ClientId = string;

export type ConfigurationStatus = "CONFIGURED" | "UNCONFIGURED";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ContentSize = number;

export interface CreateChannelInput {
  spaceId: string;
  channelName: string;
  channelDescription?: string;
}
export interface CreateChannelOutput {
  channelId: string;
}
export interface CreateSpaceInput {
  name: string;
  subdomain: string;
  tier: TierLevel;
  description?: string;
  userKMSKey?: string;
  tags?: Record<string, string>;
  roleArn?: string;
  supportedEmailDomains?: SupportedEmailDomainsParameters;
}
export interface CreateSpaceOutput {
  spaceId: string;
}
export interface DeleteSpaceInput {
  spaceId: string;
}
export interface DeregisterAdminInput {
  spaceId: string;
  adminId: string;
}
export type EmailDomain = string;

export type ErrorCode = number;

export type ErrorMessage = string;

export type FeatureEnableParameter = "ENABLED" | "DISABLED";
export type FeatureEnableStatus = "ENABLED" | "DISABLED" | "NOT_ALLOWED";
export interface GetChannelInput {
  spaceId: string;
  channelId: string;
}
export interface GetChannelOutput {
  spaceId: string;
  channelId: string;
  channelName: string;
  channelDescription?: string;
  createDateTime: Date | string;
  deleteDateTime?: Date | string;
  channelRoles?: Record<string, Array<ChannelRole>>;
  channelStatus: ChannelStatus;
}
export interface GetSpaceInput {
  spaceId: string;
}
export interface GetSpaceOutput {
  spaceId: string;
  arn: string;
  name: string;
  status: string;
  configurationStatus: ConfigurationStatus;
  clientId: string;
  identityStoreId?: string;
  applicationArn?: string;
  description?: string;
  vanityDomainStatus: VanityDomainStatus;
  vanityDomain: string;
  randomDomain: string;
  customerRoleArn?: string;
  createDateTime: Date | string;
  deleteDateTime?: Date | string;
  tier: TierLevel;
  storageLimit: number;
  userAdmins?: Array<string>;
  groupAdmins?: Array<string>;
  roles?: Record<string, Array<Role>>;
  userKMSKey?: string;
  userCount?: number;
  contentSize?: number;
  supportedEmailDomains?: SupportedEmailDomainsStatus;
}
export type GroupAdmins = Array<string>;
export type GroupCount = number;

export type IdentityStoreId = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type InviteBody = string;

export type InviteTitle = string;

export type KMSKey = string;

export interface ListChannelsInput {
  spaceId: string;
  nextToken?: string;
  maxResults?: number;
}
export type ListChannelsLimit = number;

export interface ListChannelsOutput {
  channels: Array<ChannelData>;
  nextToken?: string;
}
export interface ListSpacesInput {
  nextToken?: string;
  maxResults?: number;
}
export type ListSpacesLimit = number;

export interface ListSpacesOutput {
  spaces: Array<SpaceData>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type ProvisioningStatus = string;

export interface RegisterAdminInput {
  spaceId: string;
  adminId: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type Role = "EXPERT" | "MODERATOR" | "ADMINISTRATOR" | "SUPPORTREQUESTOR";
export type RoleList = Array<Role>;
export type Roles = Record<string, Array<Role>>;
export interface SendInvitesInput {
  spaceId: string;
  accessorIds: Array<string>;
  title: string;
  body: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export interface SpaceData {
  spaceId: string;
  arn: string;
  name: string;
  description?: string;
  status: string;
  configurationStatus: ConfigurationStatus;
  vanityDomainStatus: VanityDomainStatus;
  vanityDomain: string;
  randomDomain: string;
  tier: TierLevel;
  storageLimit: number;
  createDateTime: Date | string;
  deleteDateTime?: Date | string;
  userKMSKey?: string;
  userCount?: number;
  contentSize?: number;
  supportedEmailDomains?: SupportedEmailDomainsStatus;
}
export type SpaceDescription = string;

export type SpaceId = string;

export type SpaceName = string;

export type SpacesList = Array<SpaceData>;
export type SpaceSubdomain = string;

export type StorageLimit = number;

export interface SupportedEmailDomainsParameters {
  enabled?: FeatureEnableParameter;
  allowedDomains?: Array<string>;
}
export interface SupportedEmailDomainsStatus {
  enabled?: FeatureEnableStatus;
  allowedDomains?: Array<string>;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type Tags = Record<string, string>;
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export type TierLevel = "BASIC" | "STANDARD";
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateChannelInput {
  spaceId: string;
  channelId: string;
  channelName: string;
  channelDescription?: string;
}
export interface UpdateChannelOutput {
}
export interface UpdateSpaceInput {
  spaceId: string;
  description?: string;
  tier?: TierLevel;
  roleArn?: string;
  supportedEmailDomains?: SupportedEmailDomainsParameters;
}
export type Url = string;

export type UserAdmins = Array<string>;
export type UserCount = number;

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
export type ValidationExceptionReason = "unknownOperation" | "cannotParse" | "fieldValidationFailed" | "other";
export type VanityDomainStatus = "PENDING" | "APPROVED" | "UNAPPROVED";
export declare namespace BatchAddChannelRoleToAccessors {
  export type Input = BatchAddChannelRoleToAccessorsInput;
  export type Output = BatchAddChannelRoleToAccessorsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchAddRole {
  export type Input = BatchAddRoleInput;
  export type Output = BatchAddRoleOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchRemoveChannelRoleFromAccessors {
  export type Input = BatchRemoveChannelRoleFromAccessorsInput;
  export type Output = BatchRemoveChannelRoleFromAccessorsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchRemoveRole {
  export type Input = BatchRemoveRoleInput;
  export type Output = BatchRemoveRoleOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateChannel {
  export type Input = CreateChannelInput;
  export type Output = CreateChannelOutput;
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

export declare namespace CreateSpace {
  export type Input = CreateSpaceInput;
  export type Output = CreateSpaceOutput;
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

export declare namespace DeleteSpace {
  export type Input = DeleteSpaceInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterAdmin {
  export type Input = DeregisterAdminInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetChannel {
  export type Input = GetChannelInput;
  export type Output = GetChannelOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSpace {
  export type Input = GetSpaceInput;
  export type Output = GetSpaceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListChannels {
  export type Input = ListChannelsInput;
  export type Output = ListChannelsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSpaces {
  export type Input = ListSpacesInput;
  export type Output = ListSpacesOutput;
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

export declare namespace RegisterAdmin {
  export type Input = RegisterAdminInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendInvites {
  export type Input = SendInvitesInput;
  export type Output = {};
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

export declare namespace UpdateChannel {
  export type Input = UpdateChannelInput;
  export type Output = UpdateChannelOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSpace {
  export type Input = UpdateSpaceInput;
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


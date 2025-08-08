import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export class Cloud9 extends AWSServiceClient {
  createEnvironmentEC2(
    input: CreateEnvironmentEC2Request,
  ): Effect.Effect<
    CreateEnvironmentEC2Result,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  > {
    return this.call("CreateEnvironmentEC2", input);
  }
  createEnvironmentMembership(
    input: CreateEnvironmentMembershipRequest,
  ): Effect.Effect<
    CreateEnvironmentMembershipResult,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  > {
    return this.call("CreateEnvironmentMembership", input);
  }
  deleteEnvironment(
    input: DeleteEnvironmentRequest,
  ): Effect.Effect<
    DeleteEnvironmentResult,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  > {
    return this.call("DeleteEnvironment", input);
  }
  deleteEnvironmentMembership(
    input: DeleteEnvironmentMembershipRequest,
  ): Effect.Effect<
    DeleteEnvironmentMembershipResult,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  > {
    return this.call("DeleteEnvironmentMembership", input);
  }
  describeEnvironmentMemberships(
    input: DescribeEnvironmentMembershipsRequest,
  ): Effect.Effect<
    DescribeEnvironmentMembershipsResult,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  > {
    return this.call("DescribeEnvironmentMemberships", input);
  }
  describeEnvironments(
    input: DescribeEnvironmentsRequest,
  ): Effect.Effect<
    DescribeEnvironmentsResult,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  > {
    return this.call("DescribeEnvironments", input);
  }
  describeEnvironmentStatus(
    input: DescribeEnvironmentStatusRequest,
  ): Effect.Effect<
    DescribeEnvironmentStatusResult,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  > {
    return this.call("DescribeEnvironmentStatus", input);
  }
  listEnvironments(
    input: ListEnvironmentsRequest,
  ): Effect.Effect<
    ListEnvironmentsResult,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  > {
    return this.call("ListEnvironments", input);
  }
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  > {
    return this.call("ListTagsForResource", input);
  }
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | BadRequestException
    | ConcurrentAccessException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  > {
    return this.call("TagResource", input);
  }
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | BadRequestException
    | ConcurrentAccessException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  > {
    return this.call("UntagResource", input);
  }
  updateEnvironment(
    input: UpdateEnvironmentRequest,
  ): Effect.Effect<
    UpdateEnvironmentResult,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  > {
    return this.call("UpdateEnvironment", input);
  }
  updateEnvironmentMembership(
    input: UpdateEnvironmentMembershipRequest,
  ): Effect.Effect<
    UpdateEnvironmentMembershipResult,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  > {
    return this.call("UpdateEnvironmentMembership", input);
  }
}

export default Cloud9;

export type AutomaticStopTimeMinutes = number;

export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
  readonly className?: string;
  readonly code?: number;
}> {}
export type BoundedEnvironmentIdList = Array<string>;
export type ClientRequestToken = string;

export declare class ConcurrentAccessException extends EffectData.TaggedError(
  "ConcurrentAccessException",
)<{
  readonly message?: string;
  readonly className?: string;
  readonly code?: number;
}> {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly className?: string;
  readonly code?: number;
}> {}
export type ConnectionType = "CONNECT_SSH" | "CONNECT_SSM";
export interface CreateEnvironmentEC2Request {
  name: string;
  description?: string;
  clientRequestToken?: string;
  instanceType: string;
  subnetId?: string;
  imageId: string;
  automaticStopTimeMinutes?: number;
  ownerArn?: string;
  tags?: Array<Tag>;
  connectionType?: ConnectionType;
  dryRun?: boolean;
}
export interface CreateEnvironmentEC2Result {
  environmentId?: string;
}
export interface CreateEnvironmentMembershipRequest {
  environmentId: string;
  userArn: string;
  permissions: MemberPermissions;
}
export interface CreateEnvironmentMembershipResult {
  membership: EnvironmentMember;
}
export interface DeleteEnvironmentMembershipRequest {
  environmentId: string;
  userArn: string;
}
export interface DeleteEnvironmentMembershipResult {}
export interface DeleteEnvironmentRequest {
  environmentId: string;
}
export interface DeleteEnvironmentResult {}
export interface DescribeEnvironmentMembershipsRequest {
  userArn?: string;
  environmentId?: string;
  permissions?: Array<Permissions>;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeEnvironmentMembershipsResult {
  memberships?: Array<EnvironmentMember>;
  nextToken?: string;
}
export interface DescribeEnvironmentsRequest {
  environmentIds: Array<string>;
}
export interface DescribeEnvironmentsResult {
  environments?: Array<Environment>;
}
export interface DescribeEnvironmentStatusRequest {
  environmentId: string;
}
export interface DescribeEnvironmentStatusResult {
  status: EnvironmentStatus;
  message: string;
}
export interface Environment {
  id?: string;
  name?: string;
  description?: string;
  type: EnvironmentType;
  connectionType?: ConnectionType;
  arn: string;
  ownerArn: string;
  lifecycle?: EnvironmentLifecycle;
  managedCredentialsStatus?: ManagedCredentialsStatus;
}
export type EnvironmentArn = string;

export type EnvironmentDescription = string;

export type EnvironmentId = string;

export type EnvironmentIdList = Array<string>;
export interface EnvironmentLifecycle {
  status?: EnvironmentLifecycleStatus;
  reason?: string;
  failureResource?: string;
}
export type EnvironmentLifecycleStatus =
  | "CREATING"
  | "CREATED"
  | "CREATE_FAILED"
  | "DELETING"
  | "DELETE_FAILED";
export type EnvironmentList = Array<Environment>;
export interface EnvironmentMember {
  permissions: Permissions;
  userId: string;
  userArn: string;
  environmentId: string;
  lastAccess?: Date | string;
}
export type EnvironmentMembersList = Array<EnvironmentMember>;
export type EnvironmentName = string;

export type EnvironmentStatus =
  | "ERROR"
  | "CREATING"
  | "CONNECTING"
  | "READY"
  | "STOPPING"
  | "STOPPED"
  | "DELETING";
export type EnvironmentType = "SSH" | "EC2";
export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly message?: string;
  readonly className?: string;
  readonly code?: number;
}> {}
export type ImageId = string;

export type InstanceType = string;

export type Integer = number;

export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly message?: string;
  readonly className?: string;
  readonly code?: number;
}> {}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
  readonly className?: string;
  readonly code?: number;
}> {}
export interface ListEnvironmentsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListEnvironmentsResult {
  nextToken?: string;
  environmentIds?: Array<string>;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type ManagedCredentialsAction = "ENABLE" | "DISABLE";
export type ManagedCredentialsStatus =
  | "ENABLED_ON_CREATE"
  | "ENABLED_BY_OWNER"
  | "DISABLED_BY_DEFAULT"
  | "DISABLED_BY_OWNER"
  | "DISABLED_BY_COLLABORATOR"
  | "PENDING_REMOVAL_BY_COLLABORATOR"
  | "PENDING_START_REMOVAL_BY_COLLABORATOR"
  | "PENDING_REMOVAL_BY_OWNER"
  | "PENDING_START_REMOVAL_BY_OWNER"
  | "FAILED_REMOVAL_BY_COLLABORATOR"
  | "FAILED_REMOVAL_BY_OWNER";
export type MaxResults = number;

export type MemberPermissions = "READ_WRITE" | "READ_ONLY";
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
  readonly className?: string;
  readonly code?: number;
}> {}
export type NullableBoolean = boolean;

export type Permissions = "OWNER" | "READ_WRITE" | "READ_ONLY";
export type PermissionsList = Array<Permissions>;
export type Cloud9String = string;

export type SubnetId = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type Timestamp = Date | string;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message?: string;
  readonly className?: string;
  readonly code?: number;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateEnvironmentMembershipRequest {
  environmentId: string;
  userArn: string;
  permissions: MemberPermissions;
}
export interface UpdateEnvironmentMembershipResult {
  membership?: EnvironmentMember;
}
export interface UpdateEnvironmentRequest {
  environmentId: string;
  name?: string;
  description?: string;
  managedCredentialsAction?: ManagedCredentialsAction;
}
export interface UpdateEnvironmentResult {}
export type UserArn = string;

export declare namespace CreateEnvironmentEC2 {
  export type Input = CreateEnvironmentEC2Request;
  export type Output = CreateEnvironmentEC2Result;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateEnvironmentMembership {
  export type Input = CreateEnvironmentMembershipRequest;
  export type Output = CreateEnvironmentMembershipResult;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteEnvironment {
  export type Input = DeleteEnvironmentRequest;
  export type Output = DeleteEnvironmentResult;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteEnvironmentMembership {
  export type Input = DeleteEnvironmentMembershipRequest;
  export type Output = DeleteEnvironmentMembershipResult;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeEnvironmentMemberships {
  export type Input = DescribeEnvironmentMembershipsRequest;
  export type Output = DescribeEnvironmentMembershipsResult;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeEnvironments {
  export type Input = DescribeEnvironmentsRequest;
  export type Output = DescribeEnvironmentsResult;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeEnvironmentStatus {
  export type Input = DescribeEnvironmentStatusRequest;
  export type Output = DescribeEnvironmentStatusResult;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListEnvironments {
  export type Input = ListEnvironmentsRequest;
  export type Output = ListEnvironmentsResult;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequestException
    | ConcurrentAccessException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | BadRequestException
    | ConcurrentAccessException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateEnvironment {
  export type Input = UpdateEnvironmentRequest;
  export type Output = UpdateEnvironmentResult;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateEnvironmentMembership {
  export type Input = UpdateEnvironmentMembershipRequest;
  export type Output = UpdateEnvironmentMembershipResult;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

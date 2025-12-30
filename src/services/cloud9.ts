import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const PermissionsList = S.Array(S.String);
export const BoundedEnvironmentIdList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class CreateEnvironmentMembershipRequest extends S.Class<CreateEnvironmentMembershipRequest>("CreateEnvironmentMembershipRequest")({environmentId: S.String, userArn: S.String, permissions: S.String}) {}
export class DeleteEnvironmentRequest extends S.Class<DeleteEnvironmentRequest>("DeleteEnvironmentRequest")({environmentId: S.String}) {}
export class DeleteEnvironmentResult extends S.Class<DeleteEnvironmentResult>("DeleteEnvironmentResult")({}) {}
export class DeleteEnvironmentMembershipRequest extends S.Class<DeleteEnvironmentMembershipRequest>("DeleteEnvironmentMembershipRequest")({environmentId: S.String, userArn: S.String}) {}
export class DeleteEnvironmentMembershipResult extends S.Class<DeleteEnvironmentMembershipResult>("DeleteEnvironmentMembershipResult")({}) {}
export class DescribeEnvironmentMembershipsRequest extends S.Class<DescribeEnvironmentMembershipsRequest>("DescribeEnvironmentMembershipsRequest")({userArn: S.optional(S.String), environmentId: S.optional(S.String), permissions: S.optional(PermissionsList), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class DescribeEnvironmentsRequest extends S.Class<DescribeEnvironmentsRequest>("DescribeEnvironmentsRequest")({environmentIds: BoundedEnvironmentIdList}) {}
export class DescribeEnvironmentStatusRequest extends S.Class<DescribeEnvironmentStatusRequest>("DescribeEnvironmentStatusRequest")({environmentId: S.String}) {}
export class ListEnvironmentsRequest extends S.Class<ListEnvironmentsRequest>("ListEnvironmentsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateEnvironmentRequest extends S.Class<UpdateEnvironmentRequest>("UpdateEnvironmentRequest")({environmentId: S.String, name: S.optional(S.String), description: S.optional(S.String), managedCredentialsAction: S.optional(S.String)}) {}
export class UpdateEnvironmentResult extends S.Class<UpdateEnvironmentResult>("UpdateEnvironmentResult")({}) {}
export class UpdateEnvironmentMembershipRequest extends S.Class<UpdateEnvironmentMembershipRequest>("UpdateEnvironmentMembershipRequest")({environmentId: S.String, userArn: S.String, permissions: S.String}) {}
export class EnvironmentMember extends S.Class<EnvironmentMember>("EnvironmentMember")({permissions: S.String, userId: S.String, userArn: S.String, environmentId: S.String, lastAccess: S.optional(S.Date)}) {}
export const EnvironmentMembersList = S.Array(EnvironmentMember);
export const EnvironmentIdList = S.Array(S.String);
export class CreateEnvironmentEC2Request extends S.Class<CreateEnvironmentEC2Request>("CreateEnvironmentEC2Request")({name: S.String, description: S.optional(S.String), clientRequestToken: S.optional(S.String), instanceType: S.String, subnetId: S.optional(S.String), imageId: S.String, automaticStopTimeMinutes: S.optional(S.Number), ownerArn: S.optional(S.String), tags: S.optional(TagList), connectionType: S.optional(S.String), dryRun: S.optional(S.Boolean)}) {}
export class DescribeEnvironmentMembershipsResult extends S.Class<DescribeEnvironmentMembershipsResult>("DescribeEnvironmentMembershipsResult")({memberships: S.optional(EnvironmentMembersList), nextToken: S.optional(S.String)}) {}
export class DescribeEnvironmentStatusResult extends S.Class<DescribeEnvironmentStatusResult>("DescribeEnvironmentStatusResult")({status: S.String, message: S.String}) {}
export class ListEnvironmentsResult extends S.Class<ListEnvironmentsResult>("ListEnvironmentsResult")({nextToken: S.optional(S.String), environmentIds: S.optional(EnvironmentIdList)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class UpdateEnvironmentMembershipResult extends S.Class<UpdateEnvironmentMembershipResult>("UpdateEnvironmentMembershipResult")({membership: S.optional(EnvironmentMember)}) {}
export class CreateEnvironmentEC2Result extends S.Class<CreateEnvironmentEC2Result>("CreateEnvironmentEC2Result")({environmentId: S.optional(S.String)}) {}
export class CreateEnvironmentMembershipResult extends S.Class<CreateEnvironmentMembershipResult>("CreateEnvironmentMembershipResult")({membership: EnvironmentMember}) {}
export class EnvironmentLifecycle extends S.Class<EnvironmentLifecycle>("EnvironmentLifecycle")({status: S.optional(S.String), reason: S.optional(S.String), failureResource: S.optional(S.String)}) {}
export class Environment extends S.Class<Environment>("Environment")({id: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), type: S.String, connectionType: S.optional(S.String), arn: S.String, ownerArn: S.String, lifecycle: S.optional(EnvironmentLifecycle), managedCredentialsStatus: S.optional(S.String)}) {}
export const EnvironmentList = S.Array(Environment);
export class DescribeEnvironmentsResult extends S.Class<DescribeEnvironmentsResult>("DescribeEnvironmentsResult")({environments: S.optional(EnvironmentList)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ConcurrentAccessException extends S.TaggedError<ConcurrentAccessException>()("ConcurrentAccessException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class InternalServerErrorException extends S.TaggedError<InternalServerErrorException>()("InternalServerErrorException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};

//# Operations
/**
 * Gets status information for an Cloud9 development environment.
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */export const describeEnvironmentStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-23", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus" }, DescribeEnvironmentStatusRequest, DescribeEnvironmentStatusResult, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of Cloud9 development environment identifiers.
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */export const listEnvironments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-23", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.ListEnvironments" }, ListEnvironmentsRequest, ListEnvironmentsResult, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of the tags associated with an Cloud9 development environment.
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-23", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestException, InternalServerErrorException, NotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds tags to an Cloud9 development environment.
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Tags that you add to an Cloud9 environment by using this method will NOT be
 * automatically propagated to underlying resources.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-23", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.TagResource" }, TagResourceRequest, TagResourceResponse, [BadRequestException, ConcurrentAccessException, InternalServerErrorException, NotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from an Cloud9 development environment.
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-23", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [BadRequestException, ConcurrentAccessException, InternalServerErrorException, NotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes the settings of an existing Cloud9 development environment.
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */export const updateEnvironment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-23", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.UpdateEnvironment" }, UpdateEnvironmentRequest, UpdateEnvironmentResult, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes the settings of an existing environment member for an Cloud9 development
 * environment.
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */export const updateEnvironmentMembership = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-23", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership" }, UpdateEnvironmentMembershipRequest, UpdateEnvironmentMembershipResult, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and
 * then connects from the instance to the environment.
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */export const createEnvironmentEC2 = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-23", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2" }, CreateEnvironmentEC2Request, CreateEnvironmentEC2Result, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds an environment member to an Cloud9 development environment.
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */export const createEnvironmentMembership = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-23", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership" }, CreateEnvironmentMembershipRequest, CreateEnvironmentMembershipResult, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the
 * environment, also terminates the instance.
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */export const deleteEnvironment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-23", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.DeleteEnvironment" }, DeleteEnvironmentRequest, DeleteEnvironmentResult, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an environment member from a development environment.
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */export const deleteEnvironmentMembership = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-23", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership" }, DeleteEnvironmentMembershipRequest, DeleteEnvironmentMembershipResult, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about environment members for an Cloud9 development environment.
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */export const describeEnvironmentMemberships = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-23", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships" }, DescribeEnvironmentMembershipsRequest, DescribeEnvironmentMembershipsResult, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about Cloud9 development environments.
 * 
 * 
 * 
 * 
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */export const describeEnvironments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-23", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.DescribeEnvironments" }, DescribeEnvironmentsRequest, DescribeEnvironmentsResult, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

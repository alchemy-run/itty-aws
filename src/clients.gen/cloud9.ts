import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const PermissionsList = Schema.Array(Schema.String);
export const BoundedEnvironmentIdList = Schema.Array(Schema.String);
export const TagKeyList = Schema.Array(Schema.String);
export const CreateEnvironmentMembershipRequest = Schema.Struct({environmentId: Schema.String, userArn: Schema.String, permissions: Schema.String});
export const DeleteEnvironmentRequest = Schema.Struct({environmentId: Schema.String});
export const DeleteEnvironmentResult = Schema.Struct({});
export const DeleteEnvironmentMembershipRequest = Schema.Struct({environmentId: Schema.String, userArn: Schema.String});
export const DeleteEnvironmentMembershipResult = Schema.Struct({});
export const DescribeEnvironmentMembershipsRequest = Schema.Struct({userArn: Schema.optional(Schema.String), environmentId: Schema.optional(Schema.String), permissions: Schema.optional(PermissionsList), nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number)});
export const DescribeEnvironmentsRequest = Schema.Struct({environmentIds: BoundedEnvironmentIdList});
export const DescribeEnvironmentStatusRequest = Schema.Struct({environmentId: Schema.String});
export const ListEnvironmentsRequest = Schema.Struct({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number)});
export const ListTagsForResourceRequest = Schema.Struct({ResourceARN: Schema.String});
export const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const TagList = Schema.Array(Tag);
export const TagResourceRequest = Schema.Struct({ResourceARN: Schema.String, Tags: TagList});
export const TagResourceResponse = Schema.Struct({});
export const UntagResourceRequest = Schema.Struct({ResourceARN: Schema.String, TagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const UpdateEnvironmentRequest = Schema.Struct({environmentId: Schema.String, name: Schema.optional(Schema.String), description: Schema.optional(Schema.String), managedCredentialsAction: Schema.optional(Schema.String)});
export const UpdateEnvironmentResult = Schema.Struct({});
export const UpdateEnvironmentMembershipRequest = Schema.Struct({environmentId: Schema.String, userArn: Schema.String, permissions: Schema.String});
export const EnvironmentMember = Schema.Struct({permissions: Schema.String, userId: Schema.String, userArn: Schema.String, environmentId: Schema.String, lastAccess: Schema.optional(Schema.Date)});
export const EnvironmentMembersList = Schema.Array(EnvironmentMember);
export const EnvironmentIdList = Schema.Array(Schema.String);
export const CreateEnvironmentEC2Request = Schema.Struct({name: Schema.String, description: Schema.optional(Schema.String), clientRequestToken: Schema.optional(Schema.String), instanceType: Schema.String, subnetId: Schema.optional(Schema.String), imageId: Schema.String, automaticStopTimeMinutes: Schema.optional(Schema.Number), ownerArn: Schema.optional(Schema.String), tags: Schema.optional(TagList), connectionType: Schema.optional(Schema.String), dryRun: Schema.optional(Schema.Boolean)});
export const BadRequestException = Schema.Struct({message: Schema.optional(Schema.String), className: Schema.optional(Schema.String), code: Schema.optional(Schema.Number)});
export const ConflictException = Schema.Struct({message: Schema.optional(Schema.String), className: Schema.optional(Schema.String), code: Schema.optional(Schema.Number)});
export const DescribeEnvironmentMembershipsResult = Schema.Struct({memberships: Schema.optional(EnvironmentMembersList), nextToken: Schema.optional(Schema.String)});
export const DescribeEnvironmentStatusResult = Schema.Struct({status: Schema.String, message: Schema.String});
export const ListEnvironmentsResult = Schema.Struct({nextToken: Schema.optional(Schema.String), environmentIds: Schema.optional(EnvironmentIdList)});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(TagList)});
export const ConcurrentAccessException = Schema.Struct({message: Schema.optional(Schema.String), className: Schema.optional(Schema.String), code: Schema.optional(Schema.Number)});
export const InternalServerErrorException = Schema.Struct({message: Schema.optional(Schema.String), className: Schema.optional(Schema.String), code: Schema.optional(Schema.Number)});
export const ForbiddenException = Schema.Struct({message: Schema.optional(Schema.String), className: Schema.optional(Schema.String), code: Schema.optional(Schema.Number)});
export const UpdateEnvironmentMembershipResult = Schema.Struct({membership: Schema.optional(EnvironmentMember)});
export const CreateEnvironmentEC2Result = Schema.Struct({environmentId: Schema.optional(Schema.String)});
export const CreateEnvironmentMembershipResult = Schema.Struct({membership: EnvironmentMember});
export const LimitExceededException = Schema.Struct({message: Schema.optional(Schema.String), className: Schema.optional(Schema.String), code: Schema.optional(Schema.Number)});
export const NotFoundException = Schema.Struct({message: Schema.optional(Schema.String), className: Schema.optional(Schema.String), code: Schema.optional(Schema.Number)});
export const TooManyRequestsException = Schema.Struct({message: Schema.optional(Schema.String), className: Schema.optional(Schema.String), code: Schema.optional(Schema.Number)});
export const EnvironmentLifecycle = Schema.Struct({status: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), failureResource: Schema.optional(Schema.String)});
export const Environment = Schema.Struct({id: Schema.optional(Schema.String), name: Schema.optional(Schema.String), description: Schema.optional(Schema.String), type: Schema.String, connectionType: Schema.optional(Schema.String), arn: Schema.String, ownerArn: Schema.String, lifecycle: Schema.optional(EnvironmentLifecycle), managedCredentialsStatus: Schema.optional(Schema.String)});
export const EnvironmentList = Schema.Array(Environment);
export const DescribeEnvironmentsResult = Schema.Struct({environments: Schema.optional(EnvironmentList)});

//# Errors
export class BadRequestExceptionError extends Schema.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException) {};
export class ConcurrentAccessExceptionError extends Schema.TaggedError<ConcurrentAccessExceptionError>()("ConcurrentAccessException", ConcurrentAccessException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class ForbiddenExceptionError extends Schema.TaggedError<ForbiddenExceptionError>()("ForbiddenException", ForbiddenException) {};
export class InternalServerErrorExceptionError extends Schema.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException) {};
export class LimitExceededExceptionError extends Schema.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException) {};
export class NotFoundExceptionError extends Schema.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException) {};
export class TooManyRequestsExceptionError extends Schema.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException) {};

//# Operations
export const describeEnvironmentStatus = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-23", uri: "/", method: "POST", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus" }, DescribeEnvironmentStatusRequest, DescribeEnvironmentStatusResult, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, LimitExceededExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listEnvironments = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-23", uri: "/", method: "POST", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.ListEnvironments" }, ListEnvironmentsRequest, ListEnvironmentsResult, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, LimitExceededExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-23", uri: "/", method: "POST", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-23", uri: "/", method: "POST", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.TagResource" }, TagResourceRequest, TagResourceResponse, [BadRequestExceptionError, ConcurrentAccessExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-23", uri: "/", method: "POST", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [BadRequestExceptionError, ConcurrentAccessExceptionError, InternalServerErrorExceptionError, NotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateEnvironment = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-23", uri: "/", method: "POST", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.UpdateEnvironment" }, UpdateEnvironmentRequest, UpdateEnvironmentResult, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, LimitExceededExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateEnvironmentMembership = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-23", uri: "/", method: "POST", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership" }, UpdateEnvironmentMembershipRequest, UpdateEnvironmentMembershipResult, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, LimitExceededExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createEnvironmentEC2 = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-23", uri: "/", method: "POST", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2" }, CreateEnvironmentEC2Request, CreateEnvironmentEC2Result, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, LimitExceededExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createEnvironmentMembership = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-23", uri: "/", method: "POST", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership" }, CreateEnvironmentMembershipRequest, CreateEnvironmentMembershipResult, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, LimitExceededExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteEnvironment = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-23", uri: "/", method: "POST", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.DeleteEnvironment" }, DeleteEnvironmentRequest, DeleteEnvironmentResult, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, LimitExceededExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteEnvironmentMembership = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-23", uri: "/", method: "POST", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership" }, DeleteEnvironmentMembershipRequest, DeleteEnvironmentMembershipResult, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, LimitExceededExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeEnvironmentMemberships = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-23", uri: "/", method: "POST", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships" }, DescribeEnvironmentMembershipsRequest, DescribeEnvironmentMembershipsResult, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, LimitExceededExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeEnvironments = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-23", uri: "/", method: "POST", sdkId: "Cloud9", sigV4ServiceName: "cloud9", name: "AWSCloud9WorkspaceManagementService.DescribeEnvironments" }, DescribeEnvironmentsRequest, DescribeEnvironmentsResult, [BadRequestExceptionError, ConflictExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, LimitExceededExceptionError, NotFoundExceptionError, TooManyRequestsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

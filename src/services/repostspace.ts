import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const AccessorIdList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class BatchAddChannelRoleToAccessorsInput extends S.Class<BatchAddChannelRoleToAccessorsInput>("BatchAddChannelRoleToAccessorsInput")({spaceId: S.String, channelId: S.String, accessorIds: AccessorIdList, channelRole: S.String}) {}
export class BatchAddRoleInput extends S.Class<BatchAddRoleInput>("BatchAddRoleInput")({spaceId: S.String, accessorIds: AccessorIdList, role: S.String}) {}
export class BatchRemoveChannelRoleFromAccessorsInput extends S.Class<BatchRemoveChannelRoleFromAccessorsInput>("BatchRemoveChannelRoleFromAccessorsInput")({spaceId: S.String, channelId: S.String, accessorIds: AccessorIdList, channelRole: S.String}) {}
export class BatchRemoveRoleInput extends S.Class<BatchRemoveRoleInput>("BatchRemoveRoleInput")({spaceId: S.String, accessorIds: AccessorIdList, role: S.String}) {}
export class CreateChannelInput extends S.Class<CreateChannelInput>("CreateChannelInput")({spaceId: S.String, channelName: S.String, channelDescription: S.optional(S.String)}) {}
export class DeleteSpaceInput extends S.Class<DeleteSpaceInput>("DeleteSpaceInput")({spaceId: S.String}) {}
export class DeregisterAdminInput extends S.Class<DeregisterAdminInput>("DeregisterAdminInput")({spaceId: S.String, adminId: S.String}) {}
export class GetChannelInput extends S.Class<GetChannelInput>("GetChannelInput")({spaceId: S.String, channelId: S.String}) {}
export class GetSpaceInput extends S.Class<GetSpaceInput>("GetSpaceInput")({spaceId: S.String}) {}
export class ListChannelsInput extends S.Class<ListChannelsInput>("ListChannelsInput")({spaceId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListSpacesInput extends S.Class<ListSpacesInput>("ListSpacesInput")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class RegisterAdminInput extends S.Class<RegisterAdminInput>("RegisterAdminInput")({spaceId: S.String, adminId: S.String}) {}
export class SendInvitesInput extends S.Class<SendInvitesInput>("SendInvitesInput")({spaceId: S.String, accessorIds: AccessorIdList, title: S.String, body: S.String}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateChannelInput extends S.Class<UpdateChannelInput>("UpdateChannelInput")({spaceId: S.String, channelId: S.String, channelName: S.String, channelDescription: S.optional(S.String)}) {}
export class UpdateChannelOutput extends S.Class<UpdateChannelOutput>("UpdateChannelOutput")({}) {}
export const AllowedDomainsList = S.Array(S.String);
export class SupportedEmailDomainsParameters extends S.Class<SupportedEmailDomainsParameters>("SupportedEmailDomainsParameters")({enabled: S.optional(S.String), allowedDomains: S.optional(AllowedDomainsList)}) {}
export class UpdateSpaceInput extends S.Class<UpdateSpaceInput>("UpdateSpaceInput")({spaceId: S.String, description: S.optional(S.String), tier: S.optional(S.String), roleArn: S.optional(S.String), supportedEmailDomains: S.optional(SupportedEmailDomainsParameters)}) {}
export const UserAdmins = S.Array(S.String);
export const GroupAdmins = S.Array(S.String);
export class BatchError extends S.Class<BatchError>("BatchError")({accessorId: S.String, error: S.Number, message: S.String}) {}
export const BatchErrorList = S.Array(BatchError);
export class BatchAddRoleOutput extends S.Class<BatchAddRoleOutput>("BatchAddRoleOutput")({addedAccessorIds: AccessorIdList, errors: BatchErrorList}) {}
export class BatchRemoveChannelRoleFromAccessorsOutput extends S.Class<BatchRemoveChannelRoleFromAccessorsOutput>("BatchRemoveChannelRoleFromAccessorsOutput")({removedAccessorIds: AccessorIdList, errors: BatchErrorList}) {}
export class BatchRemoveRoleOutput extends S.Class<BatchRemoveRoleOutput>("BatchRemoveRoleOutput")({removedAccessorIds: AccessorIdList, errors: BatchErrorList}) {}
export class CreateChannelOutput extends S.Class<CreateChannelOutput>("CreateChannelOutput")({channelId: S.String}) {}
export class CreateSpaceInput extends S.Class<CreateSpaceInput>("CreateSpaceInput")({name: S.String, subdomain: S.String, tier: S.String, description: S.optional(S.String), userKMSKey: S.optional(S.String), tags: S.optional(Tags), roleArn: S.optional(S.String), supportedEmailDomains: S.optional(SupportedEmailDomainsParameters)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(Tags)}) {}
export const ChannelRoleList = S.Array(S.String);
export const RoleList = S.Array(S.String);
export const ChannelRoles = S.Record({key: S.String, value: ChannelRoleList});
export const Roles = S.Record({key: S.String, value: RoleList});
export class SupportedEmailDomainsStatus extends S.Class<SupportedEmailDomainsStatus>("SupportedEmailDomainsStatus")({enabled: S.optional(S.String), allowedDomains: S.optional(AllowedDomainsList)}) {}
export class ChannelData extends S.Class<ChannelData>("ChannelData")({spaceId: S.String, channelId: S.String, channelName: S.String, channelDescription: S.optional(S.String), createDateTime: S.Date, deleteDateTime: S.optional(S.Date), channelStatus: S.String, userCount: S.Number, groupCount: S.Number}) {}
export const ChannelsList = S.Array(ChannelData);
export class SpaceData extends S.Class<SpaceData>("SpaceData")({spaceId: S.String, arn: S.String, name: S.String, description: S.optional(S.String), status: S.String, configurationStatus: S.String, vanityDomainStatus: S.String, vanityDomain: S.String, randomDomain: S.String, tier: S.String, storageLimit: S.Number, createDateTime: S.Date, deleteDateTime: S.optional(S.Date), userKMSKey: S.optional(S.String), userCount: S.optional(S.Number), contentSize: S.optional(S.Number), supportedEmailDomains: S.optional(SupportedEmailDomainsStatus)}) {}
export const SpacesList = S.Array(SpaceData);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class BatchAddChannelRoleToAccessorsOutput extends S.Class<BatchAddChannelRoleToAccessorsOutput>("BatchAddChannelRoleToAccessorsOutput")({addedAccessorIds: AccessorIdList, errors: BatchErrorList}) {}
export class CreateSpaceOutput extends S.Class<CreateSpaceOutput>("CreateSpaceOutput")({spaceId: S.String}) {}
export class GetChannelOutput extends S.Class<GetChannelOutput>("GetChannelOutput")({spaceId: S.String, channelId: S.String, channelName: S.String, channelDescription: S.optional(S.String), createDateTime: S.Date, deleteDateTime: S.optional(S.Date), channelRoles: S.optional(ChannelRoles), channelStatus: S.String}) {}
export class GetSpaceOutput extends S.Class<GetSpaceOutput>("GetSpaceOutput")({spaceId: S.String, arn: S.String, name: S.String, status: S.String, configurationStatus: S.String, clientId: S.String, identityStoreId: S.optional(S.String), applicationArn: S.optional(S.String), description: S.optional(S.String), vanityDomainStatus: S.String, vanityDomain: S.String, randomDomain: S.String, customerRoleArn: S.optional(S.String), createDateTime: S.Date, deleteDateTime: S.optional(S.Date), tier: S.String, storageLimit: S.Number, userAdmins: S.optional(UserAdmins), groupAdmins: S.optional(GroupAdmins), roles: S.optional(Roles), userKMSKey: S.optional(S.String), userCount: S.optional(S.Number), contentSize: S.optional(S.Number), supportedEmailDomains: S.optional(SupportedEmailDomainsStatus)}) {}
export class ListChannelsOutput extends S.Class<ListChannelsOutput>("ListChannelsOutput")({channels: ChannelsList, nextToken: S.optional(S.String)}) {}
export class ListSpacesOutput extends S.Class<ListSpacesOutput>("ListSpacesOutput")({spaces: SpacesList, nextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String, resourceId: S.String, resourceType: S.String, serviceCode: S.String, quotaCode: S.String}) {};

//# Operations
/**
 * Removes the association of the tag with the AWS re:Post Private resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies an existing AWS re:Post Private private re:Post.
 */export const updateSpace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}", method: "PUT", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.UpdateSpace" }, UpdateSpaceInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Add a role to multiple users or groups in a private re:Post.
 */export const batchAddRole = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}/roles", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.BatchAddRole" }, BatchAddRoleInput, BatchAddRoleOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove a role from multiple users or groups in a private re:Post channel.
 */export const batchRemoveChannelRoleFromAccessors = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}/channels/{channelId}/roles", method: "PATCH", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.BatchRemoveChannelRoleFromAccessors" }, BatchRemoveChannelRoleFromAccessorsInput, BatchRemoveChannelRoleFromAccessorsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove a role from multiple users or groups in a private re:Post.
 */export const batchRemoveRole = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}/roles", method: "PATCH", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.BatchRemoveRole" }, BatchRemoveRoleInput, BatchRemoveRoleOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an AWS re:Post Private private re:Post.
 */export const deleteSpace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}", method: "DELETE", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.DeleteSpace" }, DeleteSpaceInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the user or group from the list of administrators of the private re:Post.
 */export const deregisterAdmin = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}/admins/{adminId}", method: "DELETE", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.DeregisterAdmin" }, DeregisterAdminInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the tags that are associated with the AWS re:Post Private resource specified by the resourceArn. The only resource that can be tagged is a private re:Post.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/tags/{resourceArn}", method: "GET", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a user or group to the list of administrators of the private re:Post.
 */export const registerAdmin = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}/admins/{adminId}", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.RegisterAdmin" }, RegisterAdminInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends an invitation email to selected users and groups.
 */export const sendInvites = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}/invite", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.SendInvites" }, SendInvitesInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies an existing channel.
 */export const updateChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}/channels/{channelId}", method: "PUT", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.UpdateChannel" }, UpdateChannelInput, UpdateChannelOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Add role to multiple users or groups in a private re:Post channel.
 */export const batchAddChannelRoleToAccessors = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}/channels/{channelId}/roles", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.BatchAddChannelRoleToAccessors" }, BatchAddChannelRoleToAccessorsInput, BatchAddChannelRoleToAccessorsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a channel in an AWS re:Post Private private re:Post.
 */export const createChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}/channels", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.CreateChannel" }, CreateChannelInput, CreateChannelOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an AWS re:Post Private private re:Post.
 */export const createSpace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.CreateSpace" }, CreateSpaceInput, CreateSpaceOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Displays information about a channel in a private re:Post.
 */export const getChannel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}/channels/{channelId}", method: "GET", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.GetChannel" }, GetChannelInput, GetChannelOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Displays information about the AWS re:Post Private private re:Post.
 */export const getSpace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}", method: "GET", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.GetSpace" }, GetSpaceInput, GetSpaceOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the list of channel within a private re:Post with some information about each channel.
 */export const listChannels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces/{spaceId}/channels", method: "GET", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.ListChannels" }, ListChannelsInput, ListChannelsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of AWS re:Post Private private re:Posts in the account with some information about each private re:Post.
 */export const listSpaces = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/spaces", method: "GET", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.ListSpaces" }, ListSpacesInput, ListSpacesOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates tags with an AWS re:Post Private resource. Currently, the only resource that can be tagged is the private re:Post. If you specify a new tag key for the resource, the tag is appended to the list of tags that are associated with the resource. If you specify a tag key that’s already associated with the resource, the new tag value that you specify replaces the previous value for that tag.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-05-13", uri: "/tags/{resourceArn}", sdkId: "repostspace", sigV4ServiceName: "repostspace", name: "RepostSpace.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

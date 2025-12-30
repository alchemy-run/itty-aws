import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class EnableSharingWithAwsOrganizationRequest extends S.Class<EnableSharingWithAwsOrganizationRequest>("EnableSharingWithAwsOrganizationRequest")({}) {}
export const ResourceArnList = S.Array(S.String);
export const PrincipalArnOrIdList = S.Array(S.String);
export const SourceArnOrAccountList = S.Array(S.String);
export const PermissionArnList = S.Array(S.String);
export const ResourceShareArnList = S.Array(S.String);
export const ResourceShareInvitationArnList = S.Array(S.String);
export const ReplacePermissionAssociationsWorkIdList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AcceptResourceShareInvitationRequest extends S.Class<AcceptResourceShareInvitationRequest>("AcceptResourceShareInvitationRequest")({resourceShareInvitationArn: S.String, clientToken: S.optional(S.String)}) {}
export class AssociateResourceShareRequest extends S.Class<AssociateResourceShareRequest>("AssociateResourceShareRequest")({resourceShareArn: S.String, resourceArns: S.optional(ResourceArnList), principals: S.optional(PrincipalArnOrIdList), clientToken: S.optional(S.String), sources: S.optional(SourceArnOrAccountList)}) {}
export class AssociateResourceSharePermissionRequest extends S.Class<AssociateResourceSharePermissionRequest>("AssociateResourceSharePermissionRequest")({resourceShareArn: S.String, permissionArn: S.String, replace: S.optional(S.Boolean), clientToken: S.optional(S.String), permissionVersion: S.optional(S.Number)}) {}
export class CreatePermissionVersionRequest extends S.Class<CreatePermissionVersionRequest>("CreatePermissionVersionRequest")({permissionArn: S.String, policyTemplate: S.String, clientToken: S.optional(S.String)}) {}
export class Tag extends S.Class<Tag>("Tag")({key: S.optional(S.String), value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class CreateResourceShareRequest extends S.Class<CreateResourceShareRequest>("CreateResourceShareRequest")({name: S.String, resourceArns: S.optional(ResourceArnList), principals: S.optional(PrincipalArnOrIdList), tags: S.optional(TagList), allowExternalPrincipals: S.optional(S.Boolean), clientToken: S.optional(S.String), permissionArns: S.optional(PermissionArnList), sources: S.optional(SourceArnOrAccountList)}) {}
export class DeletePermissionRequest extends S.Class<DeletePermissionRequest>("DeletePermissionRequest")({permissionArn: S.String, clientToken: S.optional(S.String)}) {}
export class DeletePermissionVersionRequest extends S.Class<DeletePermissionVersionRequest>("DeletePermissionVersionRequest")({permissionArn: S.String, permissionVersion: S.Number, clientToken: S.optional(S.String)}) {}
export class DeleteResourceShareRequest extends S.Class<DeleteResourceShareRequest>("DeleteResourceShareRequest")({resourceShareArn: S.String, clientToken: S.optional(S.String)}) {}
export class DisassociateResourceShareRequest extends S.Class<DisassociateResourceShareRequest>("DisassociateResourceShareRequest")({resourceShareArn: S.String, resourceArns: S.optional(ResourceArnList), principals: S.optional(PrincipalArnOrIdList), clientToken: S.optional(S.String), sources: S.optional(SourceArnOrAccountList)}) {}
export class DisassociateResourceSharePermissionRequest extends S.Class<DisassociateResourceSharePermissionRequest>("DisassociateResourceSharePermissionRequest")({resourceShareArn: S.String, permissionArn: S.String, clientToken: S.optional(S.String)}) {}
export class EnableSharingWithAwsOrganizationResponse extends S.Class<EnableSharingWithAwsOrganizationResponse>("EnableSharingWithAwsOrganizationResponse")({returnValue: S.optional(S.Boolean)}) {}
export class GetPermissionRequest extends S.Class<GetPermissionRequest>("GetPermissionRequest")({permissionArn: S.String, permissionVersion: S.optional(S.Number)}) {}
export class GetResourcePoliciesRequest extends S.Class<GetResourcePoliciesRequest>("GetResourcePoliciesRequest")({resourceArns: ResourceArnList, principal: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetResourceShareAssociationsRequest extends S.Class<GetResourceShareAssociationsRequest>("GetResourceShareAssociationsRequest")({associationType: S.String, resourceShareArns: S.optional(ResourceShareArnList), resourceArn: S.optional(S.String), principal: S.optional(S.String), associationStatus: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetResourceShareInvitationsRequest extends S.Class<GetResourceShareInvitationsRequest>("GetResourceShareInvitationsRequest")({resourceShareInvitationArns: S.optional(ResourceShareInvitationArnList), resourceShareArns: S.optional(ResourceShareArnList), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListPendingInvitationResourcesRequest extends S.Class<ListPendingInvitationResourcesRequest>("ListPendingInvitationResourcesRequest")({resourceShareInvitationArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), resourceRegionScope: S.optional(S.String)}) {}
export class ListPermissionAssociationsRequest extends S.Class<ListPermissionAssociationsRequest>("ListPermissionAssociationsRequest")({permissionArn: S.optional(S.String), permissionVersion: S.optional(S.Number), associationStatus: S.optional(S.String), resourceType: S.optional(S.String), featureSet: S.optional(S.String), defaultVersion: S.optional(S.Boolean), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListPermissionsRequest extends S.Class<ListPermissionsRequest>("ListPermissionsRequest")({resourceType: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), permissionType: S.optional(S.String)}) {}
export class ListPermissionVersionsRequest extends S.Class<ListPermissionVersionsRequest>("ListPermissionVersionsRequest")({permissionArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListPrincipalsRequest extends S.Class<ListPrincipalsRequest>("ListPrincipalsRequest")({resourceOwner: S.String, resourceArn: S.optional(S.String), principals: S.optional(PrincipalArnOrIdList), resourceType: S.optional(S.String), resourceShareArns: S.optional(ResourceShareArnList), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListReplacePermissionAssociationsWorkRequest extends S.Class<ListReplacePermissionAssociationsWorkRequest>("ListReplacePermissionAssociationsWorkRequest")({workIds: S.optional(ReplacePermissionAssociationsWorkIdList), status: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListResourcesRequest extends S.Class<ListResourcesRequest>("ListResourcesRequest")({resourceOwner: S.String, principal: S.optional(S.String), resourceType: S.optional(S.String), resourceArns: S.optional(ResourceArnList), resourceShareArns: S.optional(ResourceShareArnList), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), resourceRegionScope: S.optional(S.String)}) {}
export class ListResourceSharePermissionsRequest extends S.Class<ListResourceSharePermissionsRequest>("ListResourceSharePermissionsRequest")({resourceShareArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListResourceTypesRequest extends S.Class<ListResourceTypesRequest>("ListResourceTypesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), resourceRegionScope: S.optional(S.String)}) {}
export class PromotePermissionCreatedFromPolicyRequest extends S.Class<PromotePermissionCreatedFromPolicyRequest>("PromotePermissionCreatedFromPolicyRequest")({permissionArn: S.String, name: S.String, clientToken: S.optional(S.String)}) {}
export class PromoteResourceShareCreatedFromPolicyRequest extends S.Class<PromoteResourceShareCreatedFromPolicyRequest>("PromoteResourceShareCreatedFromPolicyRequest")({resourceShareArn: S.String}) {}
export class RejectResourceShareInvitationRequest extends S.Class<RejectResourceShareInvitationRequest>("RejectResourceShareInvitationRequest")({resourceShareInvitationArn: S.String, clientToken: S.optional(S.String)}) {}
export class ReplacePermissionAssociationsRequest extends S.Class<ReplacePermissionAssociationsRequest>("ReplacePermissionAssociationsRequest")({fromPermissionArn: S.String, fromPermissionVersion: S.optional(S.Number), toPermissionArn: S.String, clientToken: S.optional(S.String)}) {}
export class SetDefaultPermissionVersionRequest extends S.Class<SetDefaultPermissionVersionRequest>("SetDefaultPermissionVersionRequest")({permissionArn: S.String, permissionVersion: S.Number, clientToken: S.optional(S.String)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceShareArn: S.optional(S.String), tags: TagList, resourceArn: S.optional(S.String)}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceShareArn: S.optional(S.String), tagKeys: TagKeyList, resourceArn: S.optional(S.String)}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateResourceShareRequest extends S.Class<UpdateResourceShareRequest>("UpdateResourceShareRequest")({resourceShareArn: S.String, name: S.optional(S.String), allowExternalPrincipals: S.optional(S.Boolean), clientToken: S.optional(S.String)}) {}
export const TagValueList = S.Array(S.String);
export const PolicyList = S.Array(S.String);
export class ResourceShareAssociation extends S.Class<ResourceShareAssociation>("ResourceShareAssociation")({resourceShareArn: S.optional(S.String), resourceShareName: S.optional(S.String), associatedEntity: S.optional(S.String), associationType: S.optional(S.String), status: S.optional(S.String), statusMessage: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdatedTime: S.optional(S.Date), external: S.optional(S.Boolean)}) {}
export const ResourceShareAssociationList = S.Array(ResourceShareAssociation);
export class ResourceShareInvitation extends S.Class<ResourceShareInvitation>("ResourceShareInvitation")({resourceShareInvitationArn: S.optional(S.String), resourceShareName: S.optional(S.String), resourceShareArn: S.optional(S.String), senderAccountId: S.optional(S.String), receiverAccountId: S.optional(S.String), invitationTimestamp: S.optional(S.Date), status: S.optional(S.String), resourceShareAssociations: S.optional(ResourceShareAssociationList), receiverArn: S.optional(S.String)}) {}
export const ResourceShareInvitationList = S.Array(ResourceShareInvitation);
export class TagFilter extends S.Class<TagFilter>("TagFilter")({tagKey: S.optional(S.String), tagValues: S.optional(TagValueList)}) {}
export const TagFilters = S.Array(TagFilter);
export class AssociateResourceSharePermissionResponse extends S.Class<AssociateResourceSharePermissionResponse>("AssociateResourceSharePermissionResponse")({returnValue: S.optional(S.Boolean), clientToken: S.optional(S.String)}) {}
export class CreatePermissionRequest extends S.Class<CreatePermissionRequest>("CreatePermissionRequest")({name: S.String, resourceType: S.String, policyTemplate: S.String, clientToken: S.optional(S.String), tags: S.optional(TagList)}) {}
export class DeletePermissionResponse extends S.Class<DeletePermissionResponse>("DeletePermissionResponse")({returnValue: S.optional(S.Boolean), clientToken: S.optional(S.String), permissionStatus: S.optional(S.String)}) {}
export class DeletePermissionVersionResponse extends S.Class<DeletePermissionVersionResponse>("DeletePermissionVersionResponse")({returnValue: S.optional(S.Boolean), clientToken: S.optional(S.String), permissionStatus: S.optional(S.String)}) {}
export class DeleteResourceShareResponse extends S.Class<DeleteResourceShareResponse>("DeleteResourceShareResponse")({returnValue: S.optional(S.Boolean), clientToken: S.optional(S.String)}) {}
export class DisassociateResourceShareResponse extends S.Class<DisassociateResourceShareResponse>("DisassociateResourceShareResponse")({resourceShareAssociations: S.optional(ResourceShareAssociationList), clientToken: S.optional(S.String)}) {}
export class DisassociateResourceSharePermissionResponse extends S.Class<DisassociateResourceSharePermissionResponse>("DisassociateResourceSharePermissionResponse")({returnValue: S.optional(S.Boolean), clientToken: S.optional(S.String)}) {}
export class ResourceSharePermissionDetail extends S.Class<ResourceSharePermissionDetail>("ResourceSharePermissionDetail")({arn: S.optional(S.String), version: S.optional(S.String), defaultVersion: S.optional(S.Boolean), name: S.optional(S.String), resourceType: S.optional(S.String), permission: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdatedTime: S.optional(S.Date), isResourceTypeDefault: S.optional(S.Boolean), permissionType: S.optional(S.String), featureSet: S.optional(S.String), status: S.optional(S.String), tags: S.optional(TagList)}) {}
export class GetPermissionResponse extends S.Class<GetPermissionResponse>("GetPermissionResponse")({permission: S.optional(ResourceSharePermissionDetail)}) {}
export class GetResourcePoliciesResponse extends S.Class<GetResourcePoliciesResponse>("GetResourcePoliciesResponse")({policies: S.optional(PolicyList), nextToken: S.optional(S.String)}) {}
export class GetResourceShareAssociationsResponse extends S.Class<GetResourceShareAssociationsResponse>("GetResourceShareAssociationsResponse")({resourceShareAssociations: S.optional(ResourceShareAssociationList), nextToken: S.optional(S.String)}) {}
export class GetResourceShareInvitationsResponse extends S.Class<GetResourceShareInvitationsResponse>("GetResourceShareInvitationsResponse")({resourceShareInvitations: S.optional(ResourceShareInvitationList), nextToken: S.optional(S.String)}) {}
export class GetResourceSharesRequest extends S.Class<GetResourceSharesRequest>("GetResourceSharesRequest")({resourceShareArns: S.optional(ResourceShareArnList), resourceShareStatus: S.optional(S.String), resourceOwner: S.String, name: S.optional(S.String), tagFilters: S.optional(TagFilters), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), permissionArn: S.optional(S.String), permissionVersion: S.optional(S.Number)}) {}
export class ResourceSharePermissionSummary extends S.Class<ResourceSharePermissionSummary>("ResourceSharePermissionSummary")({arn: S.optional(S.String), version: S.optional(S.String), defaultVersion: S.optional(S.Boolean), name: S.optional(S.String), resourceType: S.optional(S.String), status: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdatedTime: S.optional(S.Date), isResourceTypeDefault: S.optional(S.Boolean), permissionType: S.optional(S.String), featureSet: S.optional(S.String), tags: S.optional(TagList)}) {}
export const ResourceSharePermissionList = S.Array(ResourceSharePermissionSummary);
export class ListPermissionVersionsResponse extends S.Class<ListPermissionVersionsResponse>("ListPermissionVersionsResponse")({permissions: S.optional(ResourceSharePermissionList), nextToken: S.optional(S.String)}) {}
export class Resource extends S.Class<Resource>("Resource")({arn: S.optional(S.String), type: S.optional(S.String), resourceShareArn: S.optional(S.String), resourceGroupArn: S.optional(S.String), status: S.optional(S.String), statusMessage: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdatedTime: S.optional(S.Date), resourceRegionScope: S.optional(S.String)}) {}
export const ResourceList = S.Array(Resource);
export class ListResourcesResponse extends S.Class<ListResourcesResponse>("ListResourcesResponse")({resources: S.optional(ResourceList), nextToken: S.optional(S.String)}) {}
export class ListResourceSharePermissionsResponse extends S.Class<ListResourceSharePermissionsResponse>("ListResourceSharePermissionsResponse")({permissions: S.optional(ResourceSharePermissionList), nextToken: S.optional(S.String)}) {}
export class PromotePermissionCreatedFromPolicyResponse extends S.Class<PromotePermissionCreatedFromPolicyResponse>("PromotePermissionCreatedFromPolicyResponse")({permission: S.optional(ResourceSharePermissionSummary), clientToken: S.optional(S.String)}) {}
export class PromoteResourceShareCreatedFromPolicyResponse extends S.Class<PromoteResourceShareCreatedFromPolicyResponse>("PromoteResourceShareCreatedFromPolicyResponse")({returnValue: S.optional(S.Boolean)}) {}
export class RejectResourceShareInvitationResponse extends S.Class<RejectResourceShareInvitationResponse>("RejectResourceShareInvitationResponse")({resourceShareInvitation: S.optional(ResourceShareInvitation), clientToken: S.optional(S.String)}) {}
export class ReplacePermissionAssociationsWork extends S.Class<ReplacePermissionAssociationsWork>("ReplacePermissionAssociationsWork")({id: S.optional(S.String), fromPermissionArn: S.optional(S.String), fromPermissionVersion: S.optional(S.String), toPermissionArn: S.optional(S.String), toPermissionVersion: S.optional(S.String), status: S.optional(S.String), statusMessage: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdatedTime: S.optional(S.Date)}) {}
export class ReplacePermissionAssociationsResponse extends S.Class<ReplacePermissionAssociationsResponse>("ReplacePermissionAssociationsResponse")({replacePermissionAssociationsWork: S.optional(ReplacePermissionAssociationsWork), clientToken: S.optional(S.String)}) {}
export class SetDefaultPermissionVersionResponse extends S.Class<SetDefaultPermissionVersionResponse>("SetDefaultPermissionVersionResponse")({returnValue: S.optional(S.Boolean), clientToken: S.optional(S.String)}) {}
export class ResourceShare extends S.Class<ResourceShare>("ResourceShare")({resourceShareArn: S.optional(S.String), name: S.optional(S.String), owningAccountId: S.optional(S.String), allowExternalPrincipals: S.optional(S.Boolean), status: S.optional(S.String), statusMessage: S.optional(S.String), tags: S.optional(TagList), creationTime: S.optional(S.Date), lastUpdatedTime: S.optional(S.Date), featureSet: S.optional(S.String)}) {}
export class UpdateResourceShareResponse extends S.Class<UpdateResourceShareResponse>("UpdateResourceShareResponse")({resourceShare: S.optional(ResourceShare), clientToken: S.optional(S.String)}) {}
export const ResourceShareList = S.Array(ResourceShare);
export class AssociatedPermission extends S.Class<AssociatedPermission>("AssociatedPermission")({arn: S.optional(S.String), permissionVersion: S.optional(S.String), defaultVersion: S.optional(S.Boolean), resourceType: S.optional(S.String), status: S.optional(S.String), featureSet: S.optional(S.String), lastUpdatedTime: S.optional(S.Date), resourceShareArn: S.optional(S.String)}) {}
export const AssociatedPermissionList = S.Array(AssociatedPermission);
export class Principal extends S.Class<Principal>("Principal")({id: S.optional(S.String), resourceShareArn: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdatedTime: S.optional(S.Date), external: S.optional(S.Boolean)}) {}
export const PrincipalList = S.Array(Principal);
export const ReplacePermissionAssociationsWorkList = S.Array(ReplacePermissionAssociationsWork);
export class ServiceNameAndResourceType extends S.Class<ServiceNameAndResourceType>("ServiceNameAndResourceType")({resourceType: S.optional(S.String), serviceName: S.optional(S.String), resourceRegionScope: S.optional(S.String)}) {}
export const ServiceNameAndResourceTypeList = S.Array(ServiceNameAndResourceType);
export class AcceptResourceShareInvitationResponse extends S.Class<AcceptResourceShareInvitationResponse>("AcceptResourceShareInvitationResponse")({resourceShareInvitation: S.optional(ResourceShareInvitation), clientToken: S.optional(S.String)}) {}
export class AssociateResourceShareResponse extends S.Class<AssociateResourceShareResponse>("AssociateResourceShareResponse")({resourceShareAssociations: S.optional(ResourceShareAssociationList), clientToken: S.optional(S.String)}) {}
export class CreatePermissionResponse extends S.Class<CreatePermissionResponse>("CreatePermissionResponse")({permission: S.optional(ResourceSharePermissionSummary), clientToken: S.optional(S.String)}) {}
export class CreatePermissionVersionResponse extends S.Class<CreatePermissionVersionResponse>("CreatePermissionVersionResponse")({permission: S.optional(ResourceSharePermissionDetail), clientToken: S.optional(S.String)}) {}
export class CreateResourceShareResponse extends S.Class<CreateResourceShareResponse>("CreateResourceShareResponse")({resourceShare: S.optional(ResourceShare), clientToken: S.optional(S.String)}) {}
export class GetResourceSharesResponse extends S.Class<GetResourceSharesResponse>("GetResourceSharesResponse")({resourceShares: S.optional(ResourceShareList), nextToken: S.optional(S.String)}) {}
export class ListPendingInvitationResourcesResponse extends S.Class<ListPendingInvitationResourcesResponse>("ListPendingInvitationResourcesResponse")({resources: S.optional(ResourceList), nextToken: S.optional(S.String)}) {}
export class ListPermissionAssociationsResponse extends S.Class<ListPermissionAssociationsResponse>("ListPermissionAssociationsResponse")({permissions: S.optional(AssociatedPermissionList), nextToken: S.optional(S.String)}) {}
export class ListPermissionsResponse extends S.Class<ListPermissionsResponse>("ListPermissionsResponse")({permissions: S.optional(ResourceSharePermissionList), nextToken: S.optional(S.String)}) {}
export class ListPrincipalsResponse extends S.Class<ListPrincipalsResponse>("ListPrincipalsResponse")({principals: S.optional(PrincipalList), nextToken: S.optional(S.String)}) {}
export class ListReplacePermissionAssociationsWorkResponse extends S.Class<ListReplacePermissionAssociationsWorkResponse>("ListReplacePermissionAssociationsWorkResponse")({replacePermissionAssociationsWorks: S.optional(ReplacePermissionAssociationsWorkList), nextToken: S.optional(S.String)}) {}
export class ListResourceTypesResponse extends S.Class<ListResourceTypesResponse>("ListResourceTypesResponse")({resourceTypes: S.optional(ServiceNameAndResourceTypeList), nextToken: S.optional(S.String)}) {}

//# Errors
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class IdempotentParameterMismatchException extends S.TaggedError<IdempotentParameterMismatchException>()("IdempotentParameterMismatchException", {}) {};
export class InvalidClientTokenException extends S.TaggedError<InvalidClientTokenException>()("InvalidClientTokenException", {}) {};
export class MalformedArnException extends S.TaggedError<MalformedArnException>()("MalformedArnException", {}) {};
export class OperationNotPermittedException extends S.TaggedError<OperationNotPermittedException>()("OperationNotPermittedException", {}) {};
export class InvalidStateTransitionException extends S.TaggedError<InvalidStateTransitionException>()("InvalidStateTransitionException", {}) {};
export class ServerInternalException extends S.TaggedError<ServerInternalException>()("ServerInternalException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class InvalidNextTokenException extends S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {}) {};
export class UnknownResourceException extends S.TaggedError<UnknownResourceException>()("UnknownResourceException", {}) {};
export class MissingRequiredParameterException extends S.TaggedError<MissingRequiredParameterException>()("MissingRequiredParameterException", {}) {};
export class ResourceShareLimitExceededException extends S.TaggedError<ResourceShareLimitExceededException>()("ResourceShareLimitExceededException", {}) {};
export class ResourceShareInvitationAlreadyAcceptedException extends S.TaggedError<ResourceShareInvitationAlreadyAcceptedException>()("ResourceShareInvitationAlreadyAcceptedException", {}) {};
export class InvalidPolicyException extends S.TaggedError<InvalidPolicyException>()("InvalidPolicyException", {}) {};
export class ResourceArnNotFoundException extends S.TaggedError<ResourceArnNotFoundException>()("ResourceArnNotFoundException", {}) {};
export class InvalidMaxResultsException extends S.TaggedError<InvalidMaxResultsException>()("InvalidMaxResultsException", {message: S.String}) {};
export class ResourceShareInvitationAlreadyRejectedException extends S.TaggedError<ResourceShareInvitationAlreadyRejectedException>()("ResourceShareInvitationAlreadyRejectedException", {}) {};
export class ResourceShareInvitationArnNotFoundException extends S.TaggedError<ResourceShareInvitationArnNotFoundException>()("ResourceShareInvitationArnNotFoundException", {}) {};
export class InvalidResourceTypeException extends S.TaggedError<InvalidResourceTypeException>()("InvalidResourceTypeException", {message: S.String}) {};
export class UnmatchedPolicyPermissionException extends S.TaggedError<UnmatchedPolicyPermissionException>()("UnmatchedPolicyPermissionException", {message: S.String}) {};
export class ResourceShareInvitationExpiredException extends S.TaggedError<ResourceShareInvitationExpiredException>()("ResourceShareInvitationExpiredException", {}) {};
export class TagLimitExceededException extends S.TaggedError<TagLimitExceededException>()("TagLimitExceededException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {message: S.String}) {};
export class MalformedPolicyTemplateException extends S.TaggedError<MalformedPolicyTemplateException>()("MalformedPolicyTemplateException", {}) {};
export class TagPolicyViolationException extends S.TaggedError<TagPolicyViolationException>()("TagPolicyViolationException", {}) {};
export class PermissionAlreadyExistsException extends S.TaggedError<PermissionAlreadyExistsException>()("PermissionAlreadyExistsException", {message: S.String}) {};
export class PermissionVersionsLimitExceededException extends S.TaggedError<PermissionVersionsLimitExceededException>()("PermissionVersionsLimitExceededException", {message: S.String}) {};
export class PermissionLimitExceededException extends S.TaggedError<PermissionLimitExceededException>()("PermissionLimitExceededException", {message: S.String}) {};

//# Operations
/**
 * Enables resource sharing within your organization in Organizations. This operation creates
 * a service-linked role called `AWSServiceRoleForResourceAccessManager` that has the IAM managed policy
 * named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about
 * the organization and its structure. This lets you share resources with all of the
 * accounts in the calling account's organization by specifying the organization ID, or all
 * of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable
 * sharing within the organization, you can specify only individual Amazon Web Services accounts, or for
 * supported resource types, IAM roles and users.
 * 
 * You must call this operation from an IAM role or user in the organization's
 * management account.
 */export const enableSharingWithAwsOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/enablesharingwithawsorganization", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.EnableSharingWithAwsOrganization" }, EnableSharingWithAwsOrganizationRequest, EnableSharingWithAwsOrganizationResponse, [OperationNotPermittedException, ServerInternalException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the lists of resources and principals that associated for resource shares that you
 * own.
 */export const getResourceShareAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/getresourceshareassociations", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.GetResourceShareAssociations" }, GetResourceShareAssociationsRequest, GetResourceShareAssociationsResponse, [InvalidNextTokenException, InvalidParameterException, MalformedArnException, OperationNotPermittedException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the available versions of the specified RAM permission.
 */export const listPermissionVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/listpermissionversions", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.ListPermissionVersions" }, ListPermissionVersionsRequest, ListPermissionVersionsResponse, [InvalidNextTokenException, InvalidParameterException, MalformedArnException, OperationNotPermittedException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the RAM permissions that are associated with a resource share.
 */export const listResourceSharePermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/listresourcesharepermissions", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.ListResourceSharePermissions" }, ListResourceSharePermissionsRequest, ListResourceSharePermissionsResponse, [InvalidNextTokenException, InvalidParameterException, MalformedArnException, OperationNotPermittedException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates all resource shares that use a managed permission to a different managed
 * permission. This operation always applies the default version of the target managed
 * permission. You can optionally specify that the update applies to only resource shares that
 * currently use a specified version. This enables you to update to the latest version,
 * without changing the which managed permission is used.
 * 
 * You can use this operation to update all of your resource shares to use the current
 * default version of the permission by specifying the same value for the
 * `fromPermissionArn` and `toPermissionArn` parameters.
 * 
 * You can use the optional `fromPermissionVersion` parameter to update only
 * those resources that use a specified version of the managed permission to the new managed
 * permission.
 * 
 * To successfully perform this operation, you must have permission to update the
 * resource-based policy on all affected resource types.
 */export const replacePermissionAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/replacepermissionassociations", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.ReplacePermissionAssociations" }, ReplacePermissionAssociationsRequest, ReplacePermissionAssociationsResponse, [IdempotentParameterMismatchException, InvalidClientTokenException, InvalidParameterException, MalformedArnException, OperationNotPermittedException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Designates the specified version number as the default version for the specified
 * customer managed permission. New resource shares automatically use this new default permission. Existing
 * resource shares continue to use their original permission version, but you can use ReplacePermissionAssociations to update them.
 */export const setDefaultPermissionVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/setdefaultpermissionversion", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.SetDefaultPermissionVersion" }, SetDefaultPermissionVersionRequest, SetDefaultPermissionVersionResponse, [IdempotentParameterMismatchException, InvalidClientTokenException, InvalidParameterException, MalformedArnException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified tag key and value pairs from the specified resource share or managed permission.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/untagresource", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InvalidParameterException, MalformedArnException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies some of the properties of the specified resource share.
 */export const updateResourceShare = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/updateresourceshare", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.UpdateResourceShare" }, UpdateResourceShareRequest, UpdateResourceShareResponse, [IdempotentParameterMismatchException, InvalidClientTokenException, InvalidParameterException, MalformedArnException, MissingRequiredParameterException, OperationNotPermittedException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or replaces the RAM permission for a resource type included in a resource share. You can
 * have exactly one permission associated with each resource type in the resource share. You can add
 * a new RAM permission only if there are currently no resources of that resource type
 * currently in the resource share.
 */export const associateResourceSharePermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/associateresourcesharepermission", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.AssociateResourceSharePermission" }, AssociateResourceSharePermissionRequest, AssociateResourceSharePermissionResponse, [InvalidClientTokenException, InvalidParameterException, MalformedArnException, OperationNotPermittedException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You
 * can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all
 * versions associated with the customer managed permission.
 */export const deletePermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/deletepermission", method: "DELETE", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.DeletePermission" }, DeletePermissionRequest, DeletePermissionResponse, [IdempotentParameterMismatchException, InvalidClientTokenException, MalformedArnException, OperationNotPermittedException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes one version of a customer managed permission. The version you specify must not be attached to any
 * resource share and must not be the default version for the permission.
 * 
 * If a customer managed permission has the maximum of 5 versions, then you must delete at
 * least one version before you can create another.
 */export const deletePermissionVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/deletepermissionversion", method: "DELETE", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.DeletePermissionVersion" }, DeletePermissionVersionRequest, DeletePermissionVersionResponse, [IdempotentParameterMismatchException, InvalidClientTokenException, InvalidParameterException, MalformedArnException, OperationNotPermittedException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified resource share.
 * 
 * This doesn't delete any of the resources that were associated with the resource share; it
 * only stops the sharing of those resources through this resource share.
 */export const deleteResourceShare = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/deleteresourceshare", method: "DELETE", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.DeleteResourceShare" }, DeleteResourceShareRequest, DeleteResourceShareResponse, [IdempotentParameterMismatchException, InvalidClientTokenException, InvalidParameterException, InvalidStateTransitionException, MalformedArnException, OperationNotPermittedException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified principals or resources from participating in the specified
 * resource share.
 */export const disassociateResourceShare = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/disassociateresourceshare", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.DisassociateResourceShare" }, DisassociateResourceShareRequest, DisassociateResourceShareResponse, [IdempotentParameterMismatchException, InvalidClientTokenException, InvalidParameterException, InvalidStateTransitionException, MalformedArnException, OperationNotPermittedException, ResourceShareLimitExceededException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a managed permission from a resource share. Permission changes take effect immediately. You can
 * remove a managed permission from a resource share only if there are currently no resources of the relevant
 * resource type currently attached to the resource share.
 */export const disassociateResourceSharePermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/disassociateresourcesharepermission", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.DisassociateResourceSharePermission" }, DisassociateResourceSharePermissionRequest, DisassociateResourceSharePermissionResponse, [InvalidClientTokenException, InvalidParameterException, InvalidStateTransitionException, MalformedArnException, OperationNotPermittedException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the contents of a managed permission in JSON format.
 */export const getPermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/getpermission", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.GetPermission" }, GetPermissionRequest, GetPermissionResponse, [InvalidParameterException, MalformedArnException, OperationNotPermittedException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the resource policies for the specified resources that you own and have
 * shared.
 */export const getResourcePolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/getresourcepolicies", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.GetResourcePolicies" }, GetResourcePoliciesRequest, GetResourcePoliciesResponse, [InvalidNextTokenException, InvalidParameterException, MalformedArnException, ResourceArnNotFoundException, ServerInternalException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details about the resource shares that you own or that are shared with you.
 */export const getResourceShares = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/getresourceshares", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.GetResourceShares" }, GetResourceSharesRequest, GetResourceSharesResponse, [InvalidNextTokenException, InvalidParameterException, MalformedArnException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists information about the managed permission and its associations to any resource shares that use
 * this managed permission. This lets you see which resource shares use which versions of the specified
 * managed permission.
 */export const listPermissionAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/listpermissionassociations", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.ListPermissionAssociations" }, ListPermissionAssociationsRequest, ListPermissionAssociationsResponse, [InvalidNextTokenException, InvalidParameterException, MalformedArnException, ServerInternalException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of available RAM permissions that you can use for the supported
 * resource types.
 */export const listPermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/listpermissions", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.ListPermissions" }, ListPermissionsRequest, ListPermissionsResponse, [InvalidNextTokenException, InvalidParameterException, OperationNotPermittedException, ServerInternalException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the principals that you are sharing resources with or that are sharing resources
 * with you.
 */export const listPrincipals = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/listprincipals", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.ListPrincipals" }, ListPrincipalsRequest, ListPrincipalsResponse, [InvalidNextTokenException, InvalidParameterException, MalformedArnException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current status of the asynchronous tasks performed by RAM when you
 * perform the ReplacePermissionAssociationsWork operation.
 */export const listReplacePermissionAssociationsWork = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/listreplacepermissionassociationswork", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.ListReplacePermissionAssociationsWork" }, ListReplacePermissionAssociationsWorkRequest, ListReplacePermissionAssociationsWorkResponse, [InvalidNextTokenException, InvalidParameterException, ServerInternalException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the resources that you added to a resource share or the resources that are shared with
 * you.
 */export const listResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/listresources", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.ListResources" }, ListResourcesRequest, ListResourcesResponse, [InvalidNextTokenException, InvalidParameterException, InvalidResourceTypeException, MalformedArnException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the resource types that can be shared by RAM.
 */export const listResourceTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/listresourcetypes", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.ListResourceTypes" }, ListResourceTypesRequest, ListResourceTypesResponse, [InvalidNextTokenException, InvalidParameterException, ServerInternalException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * When you attach a resource-based policy to a resource, RAM automatically creates
 * a resource share of `featureSet`=`CREATED_FROM_POLICY` with a managed permission that
 * has the same IAM permissions as the original resource-based policy. However, this type
 * of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by
 * using RAM.
 * 
 * This operation creates a separate, fully manageable customer managed permission that has the same IAM
 * permissions as the original resource-based policy. You can associate this customer managed permission to any
 * resource shares.
 * 
 * Before you use PromoteResourceShareCreatedFromPolicy, you should
 * first run this operation to ensure that you have an appropriate customer managed permission that can be
 * associated with the promoted resource share.
 * 
 * - The original `CREATED_FROM_POLICY` policy isn't deleted, and
 * resource shares using that original policy aren't automatically
 * updated.
 * 
 * - You can't modify a `CREATED_FROM_POLICY` resource share so you can't
 * associate the new customer managed permission by using
 * `ReplacePermsissionAssociations`. However, if you use PromoteResourceShareCreatedFromPolicy, that operation
 * automatically associates the fully manageable customer managed permission to the newly promoted
 * `STANDARD` resource share.
 * 
 * - After you promote a resource share, if the original `CREATED_FROM_POLICY`
 * managed permission has no other associations to A resource share, then RAM automatically deletes
 * it.
 */export const promotePermissionCreatedFromPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/promotepermissioncreatedfrompolicy", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.PromotePermissionCreatedFromPolicy" }, PromotePermissionCreatedFromPolicyRequest, PromotePermissionCreatedFromPolicyResponse, [InvalidParameterException, MalformedArnException, MissingRequiredParameterException, OperationNotPermittedException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * When you attach a resource-based policy to a resource, RAM automatically creates
 * a resource share of `featureSet`=`CREATED_FROM_POLICY` with a managed permission that
 * has the same IAM permissions as the original resource-based policy. However, this type
 * of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by
 * using RAM.
 * 
 * This operation promotes the resource share to a `STANDARD` resource share that is fully
 * manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and
 * it becomes visible to all of the principals you shared it with.
 * 
 * Before you perform this operation, you should first run PromotePermissionCreatedFromPolicyto ensure that you have an
 * appropriate customer managed permission that can be associated with this resource share after its is promoted. If
 * this operation can't find a managed permission that exactly matches the existing
 * `CREATED_FROM_POLICY` permission, then this operation fails.
 */export const promoteResourceShareCreatedFromPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/promoteresourcesharecreatedfrompolicy", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.PromoteResourceShareCreatedFromPolicy" }, PromoteResourceShareCreatedFromPolicyRequest, PromoteResourceShareCreatedFromPolicyResponse, [InvalidParameterException, InvalidStateTransitionException, MalformedArnException, MissingRequiredParameterException, OperationNotPermittedException, ResourceShareLimitExceededException, ServerInternalException, ServiceUnavailableException, UnknownResourceException, UnmatchedPolicyPermissionException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Rejects an invitation to a resource share from another Amazon Web Services account.
 */export const rejectResourceShareInvitation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/rejectresourceshareinvitation", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.RejectResourceShareInvitation" }, RejectResourceShareInvitationRequest, RejectResourceShareInvitationResponse, [IdempotentParameterMismatchException, InvalidClientTokenException, MalformedArnException, OperationNotPermittedException, ResourceShareInvitationAlreadyAcceptedException, ResourceShareInvitationAlreadyRejectedException, ResourceShareInvitationArnNotFoundException, ResourceShareInvitationExpiredException, ServerInternalException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the
 * invitation, the resources included in the resource share are available to interact with in the
 * relevant Amazon Web Services Management Consoles and tools.
 */export const acceptResourceShareInvitation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/acceptresourceshareinvitation", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.AcceptResourceShareInvitation" }, AcceptResourceShareInvitationRequest, AcceptResourceShareInvitationResponse, [IdempotentParameterMismatchException, InvalidClientTokenException, MalformedArnException, OperationNotPermittedException, ResourceShareInvitationAlreadyAcceptedException, ResourceShareInvitationAlreadyRejectedException, ResourceShareInvitationArnNotFoundException, ResourceShareInvitationExpiredException, ServerInternalException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds the specified list of principals and list of resources to a resource share. Principals that
 * already have access to this resource share immediately receive access to the added resources.
 * Newly added principals immediately receive access to the resources shared in this resource share.
 */export const associateResourceShare = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/associateresourceshare", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.AssociateResourceShare" }, AssociateResourceShareRequest, AssociateResourceShareResponse, [IdempotentParameterMismatchException, InvalidClientTokenException, InvalidParameterException, InvalidStateTransitionException, MalformedArnException, OperationNotPermittedException, ResourceShareLimitExceededException, ServerInternalException, ServiceUnavailableException, ThrottlingException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a resource share. You can provide a list of the Amazon Resource Names (ARNs) for the resources that you
 * want to share, a list of principals you want to share the resources with, and the
 * permissions to grant those principals.
 * 
 * Sharing a resource makes it available for use by principals outside of the
 * Amazon Web Services account that created the resource. Sharing doesn't change any permissions or
 * quotas that apply to the resource in the account that created it.
 */export const createResourceShare = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/createresourceshare", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.CreateResourceShare" }, CreateResourceShareRequest, CreateResourceShareResponse, [IdempotentParameterMismatchException, InvalidClientTokenException, InvalidParameterException, InvalidStateTransitionException, MalformedArnException, OperationNotPermittedException, ResourceShareLimitExceededException, ServerInternalException, ServiceUnavailableException, TagLimitExceededException, TagPolicyViolationException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details about invitations that you have received for resource shares.
 */export const getResourceShareInvitations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/getresourceshareinvitations", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.GetResourceShareInvitations" }, GetResourceShareInvitationsRequest, GetResourceShareInvitationsResponse, [InvalidMaxResultsException, InvalidNextTokenException, InvalidParameterException, MalformedArnException, ResourceShareInvitationArnNotFoundException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the resources in a resource share that is shared with you but for which the invitation is
 * still `PENDING`. That means that you haven't accepted or rejected the
 * invitation and the invitation hasn't expired.
 */export const listPendingInvitationResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/listpendinginvitationresources", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.ListPendingInvitationResources" }, ListPendingInvitationResourcesRequest, ListPendingInvitationResourcesResponse, [InvalidNextTokenException, InvalidParameterException, MalformedArnException, MissingRequiredParameterException, ResourceShareInvitationAlreadyRejectedException, ResourceShareInvitationArnNotFoundException, ResourceShareInvitationExpiredException, ServerInternalException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds the specified tag keys and values to a resource share or managed permission. If you choose a resource share, the
 * tags are attached to only the resource share, not to the resources that are in the resource share.
 * 
 * The tags on a managed permission are the same for all versions of the managed permission.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/tagresource", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.TagResource" }, TagResourceRequest, TagResourceResponse, [InvalidParameterException, MalformedArnException, ResourceArnNotFoundException, ServerInternalException, ServiceUnavailableException, TagLimitExceededException, TagPolicyViolationException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new version of the specified customer managed permission. The new version is automatically set as
 * the default version of the customer managed permission. New resource shares automatically use the default
 * permission. Existing resource shares continue to use their original permission versions,
 * but you can use ReplacePermissionAssociations to update them.
 * 
 * If the specified customer managed permission already has the maximum of 5 versions, then
 * you must delete one of the existing versions before you can create a new one.
 */export const createPermissionVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/createpermissionversion", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.CreatePermissionVersion" }, CreatePermissionVersionRequest, CreatePermissionVersionResponse, [IdempotentParameterMismatchException, InvalidClientTokenException, InvalidParameterException, InvalidPolicyException, MalformedArnException, MalformedPolicyTemplateException, PermissionVersionsLimitExceededException, ServerInternalException, ServiceUnavailableException, UnknownResourceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a customer managed permission for a specified resource type that you can attach to resource shares.
 * It is created in the Amazon Web Services Region in which you call the operation.
 */export const createPermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-04", uri: "/createpermission", sdkId: "RAM", sigV4ServiceName: "ram", name: "AmazonResourceSharing.CreatePermission" }, CreatePermissionRequest, CreatePermissionResponse, [IdempotentParameterMismatchException, InvalidClientTokenException, InvalidParameterException, InvalidPolicyException, MalformedPolicyTemplateException, OperationNotPermittedException, PermissionAlreadyExistsException, PermissionLimitExceededException, ServerInternalException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

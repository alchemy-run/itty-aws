import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const GroupIds = S.Array(S.String);
export class ExternalId extends S.Class<ExternalId>("ExternalId")({Issuer: S.String, Id: S.String}) {}
export class UniqueAttribute extends S.Class<UniqueAttribute>("UniqueAttribute")({AttributePath: S.String, AttributeValue: S.Any}) {}
export const AlternateIdentifier = S.Union(ExternalId, UniqueAttribute);
export class GetUserIdRequest extends S.Class<GetUserIdRequest>("GetUserIdRequest")({IdentityStoreId: S.String, AlternateIdentifier: AlternateIdentifier}) {}
export const MemberId = S.Union(S.String);
export class IsMemberInGroupsRequest extends S.Class<IsMemberInGroupsRequest>("IsMemberInGroupsRequest")({IdentityStoreId: S.String, MemberId: MemberId, GroupIds: GroupIds}) {}
export class ListGroupMembershipsForMemberRequest extends S.Class<ListGroupMembershipsForMemberRequest>("ListGroupMembershipsForMemberRequest")({IdentityStoreId: S.String, MemberId: MemberId, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetGroupMembershipIdRequest extends S.Class<GetGroupMembershipIdRequest>("GetGroupMembershipIdRequest")({IdentityStoreId: S.String, GroupId: S.String, MemberId: MemberId}) {}
export class GetUserIdResponse extends S.Class<GetUserIdResponse>("GetUserIdResponse")({IdentityStoreId: S.String, UserId: S.String}) {}
export class GroupMembershipExistenceResult extends S.Class<GroupMembershipExistenceResult>("GroupMembershipExistenceResult")({GroupId: S.optional(S.String), MemberId: S.optional(MemberId), MembershipExists: S.optional(S.Boolean)}) {}
export const GroupMembershipExistenceResults = S.Array(GroupMembershipExistenceResult);
export class GroupMembership extends S.Class<GroupMembership>("GroupMembership")({IdentityStoreId: S.String, MembershipId: S.optional(S.String), GroupId: S.optional(S.String), MemberId: S.optional(MemberId), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), CreatedBy: S.optional(S.String), UpdatedBy: S.optional(S.String)}) {}
export const GroupMemberships = S.Array(GroupMembership);
export class GetGroupIdRequest extends S.Class<GetGroupIdRequest>("GetGroupIdRequest")({IdentityStoreId: S.String, AlternateIdentifier: AlternateIdentifier}) {}
export class GetGroupMembershipIdResponse extends S.Class<GetGroupMembershipIdResponse>("GetGroupMembershipIdResponse")({MembershipId: S.String, IdentityStoreId: S.String}) {}
export class IsMemberInGroupsResponse extends S.Class<IsMemberInGroupsResponse>("IsMemberInGroupsResponse")({Results: GroupMembershipExistenceResults}) {}
export class ListGroupMembershipsForMemberResponse extends S.Class<ListGroupMembershipsForMemberResponse>("ListGroupMembershipsForMemberResponse")({GroupMemberships: GroupMemberships, NextToken: S.optional(S.String)}) {}
export class GetGroupIdResponse extends S.Class<GetGroupIdResponse>("GetGroupIdResponse")({GroupId: S.String, IdentityStoreId: S.String}) {}

//# Errors
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * Retrieves the `UserId` in an identity store.
 * 
 * 
 * If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the * IAM Identity Center User Guide*.
 */export const getUserId = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-15", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.GetUserId" }, GetUserIdRequest, GetUserIdResponse, [ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Checks the user's membership in all requested groups and returns if the member exists in all queried groups.
 * 
 * 
 * If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the * IAM Identity Center User Guide*.
 */export const isMemberInGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-15", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.IsMemberInGroups" }, IsMemberInGroupsRequest, IsMemberInGroupsResponse, [ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * For the specified member in the specified identity store, returns the list of all ` GroupMembership` objects and returns results in paginated form.
 * 
 * 
 * If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the * IAM Identity Center User Guide*.
 */export const listGroupMembershipsForMember = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-15", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.ListGroupMembershipsForMember" }, ListGroupMembershipsForMemberRequest, ListGroupMembershipsForMemberResponse, [ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves `GroupId` in an identity store.
 * 
 * 
 * If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the * IAM Identity Center User Guide*.
 */export const getGroupId = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-15", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.GetGroupId" }, GetGroupIdRequest, GetGroupIdResponse, [ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the `MembershipId` in an identity store.
 * 
 * 
 * If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the * IAM Identity Center User Guide*.
 */export const getGroupMembershipId = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-15", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.GetGroupMembershipId" }, GetGroupMembershipIdRequest, GetGroupMembershipIdResponse, [ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

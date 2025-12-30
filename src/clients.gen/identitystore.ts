import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const GroupIds = Schema.Array(Schema.String);
export class ExternalId extends Schema.Class<ExternalId>("ExternalId")({Issuer: Schema.String, Id: Schema.String}) {}
export class UniqueAttribute extends Schema.Class<UniqueAttribute>("UniqueAttribute")({AttributePath: Schema.String, AttributeValue: Schema.JsonValue}) {}
export const AlternateIdentifier = Schema.Union(ExternalId, UniqueAttribute);
export class GetUserIdRequest extends Schema.Class<GetUserIdRequest>("GetUserIdRequest")({IdentityStoreId: Schema.String, AlternateIdentifier: AlternateIdentifier}) {}
export const MemberId = Schema.Union(Schema.String);
export class IsMemberInGroupsRequest extends Schema.Class<IsMemberInGroupsRequest>("IsMemberInGroupsRequest")({IdentityStoreId: Schema.String, MemberId: MemberId, GroupIds: GroupIds}) {}
export class ListGroupMembershipsForMemberRequest extends Schema.Class<ListGroupMembershipsForMemberRequest>("ListGroupMembershipsForMemberRequest")({IdentityStoreId: Schema.String, MemberId: MemberId, MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)}) {}
export class GetGroupMembershipIdRequest extends Schema.Class<GetGroupMembershipIdRequest>("GetGroupMembershipIdRequest")({IdentityStoreId: Schema.String, GroupId: Schema.String, MemberId: MemberId}) {}
export class GetUserIdResponse extends Schema.Class<GetUserIdResponse>("GetUserIdResponse")({IdentityStoreId: Schema.String, UserId: Schema.String}) {}
export class GroupMembershipExistenceResult extends Schema.Class<GroupMembershipExistenceResult>("GroupMembershipExistenceResult")({GroupId: Schema.optional(Schema.String), MemberId: Schema.optional(MemberId), MembershipExists: Schema.optional(Schema.Boolean)}) {}
export const GroupMembershipExistenceResults = Schema.Array(GroupMembershipExistenceResult);
export class GroupMembership extends Schema.Class<GroupMembership>("GroupMembership")({IdentityStoreId: Schema.String, MembershipId: Schema.optional(Schema.String), GroupId: Schema.optional(Schema.String), MemberId: Schema.optional(MemberId), CreatedAt: Schema.optional(Schema.Date), UpdatedAt: Schema.optional(Schema.Date), CreatedBy: Schema.optional(Schema.String), UpdatedBy: Schema.optional(Schema.String)}) {}
export const GroupMemberships = Schema.Array(GroupMembership);
export class GetGroupIdRequest extends Schema.Class<GetGroupIdRequest>("GetGroupIdRequest")({IdentityStoreId: Schema.String, AlternateIdentifier: AlternateIdentifier}) {}
export class GetGroupMembershipIdResponse extends Schema.Class<GetGroupMembershipIdResponse>("GetGroupMembershipIdResponse")({MembershipId: Schema.String, IdentityStoreId: Schema.String}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({ResourceType: Schema.optional(Schema.String), ResourceId: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String), Message: Schema.optional(Schema.String), RequestId: Schema.optional(Schema.String)}) {}
export class IsMemberInGroupsResponse extends Schema.Class<IsMemberInGroupsResponse>("IsMemberInGroupsResponse")({Results: GroupMembershipExistenceResults}) {}
export class ListGroupMembershipsForMemberResponse extends Schema.Class<ListGroupMembershipsForMemberResponse>("ListGroupMembershipsForMemberResponse")({GroupMemberships: GroupMemberships, NextToken: Schema.optional(Schema.String)}) {}
export class GetGroupIdResponse extends Schema.Class<GetGroupIdResponse>("GetGroupIdResponse")({GroupId: Schema.String, IdentityStoreId: Schema.String}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.optional(Schema.String), RequestId: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String)}) {}

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const getUserId = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-06-15", uri: "/", method: "POST", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.GetUserId" }, GetUserIdRequest, GetUserIdResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const isMemberInGroups = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-06-15", uri: "/", method: "POST", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.IsMemberInGroups" }, IsMemberInGroupsRequest, IsMemberInGroupsResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listGroupMembershipsForMember = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-06-15", uri: "/", method: "POST", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.ListGroupMembershipsForMember" }, ListGroupMembershipsForMemberRequest, ListGroupMembershipsForMemberResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getGroupId = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-06-15", uri: "/", method: "POST", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.GetGroupId" }, GetGroupIdRequest, GetGroupIdResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getGroupMembershipId = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-06-15", uri: "/", method: "POST", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.GetGroupMembershipId" }, GetGroupMembershipIdRequest, GetGroupMembershipIdResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

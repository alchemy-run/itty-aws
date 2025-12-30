import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const GroupIds = Schema.Array(Schema.String);
export const ExternalId = Schema.Struct({Issuer: Schema.String, Id: Schema.String});
export const UniqueAttribute = Schema.Struct({AttributePath: Schema.String, AttributeValue: Schema.JsonValue});
export const AlternateIdentifier = Schema.Union(ExternalId, UniqueAttribute);
export const GetUserIdRequest = Schema.Struct({IdentityStoreId: Schema.String, AlternateIdentifier: AlternateIdentifier});
export const MemberId = Schema.Union(Schema.String);
export const IsMemberInGroupsRequest = Schema.Struct({IdentityStoreId: Schema.String, MemberId: MemberId, GroupIds: GroupIds});
export const ListGroupMembershipsForMemberRequest = Schema.Struct({IdentityStoreId: Schema.String, MemberId: MemberId, MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)});
export const GetGroupMembershipIdRequest = Schema.Struct({IdentityStoreId: Schema.String, GroupId: Schema.String, MemberId: MemberId});
export const GetUserIdResponse = Schema.Struct({UserId: Schema.String, IdentityStoreId: Schema.String});
export const GroupMembershipExistenceResult = Schema.Struct({GroupId: Schema.optional(Schema.String), MemberId: Schema.optional(MemberId), MembershipExists: Schema.optional(Schema.Boolean)});
export const GroupMembershipExistenceResults = Schema.Array(GroupMembershipExistenceResult);
export const GroupMembership = Schema.Struct({IdentityStoreId: Schema.String, MembershipId: Schema.optional(Schema.String), GroupId: Schema.optional(Schema.String), MemberId: Schema.optional(MemberId)});
export const GroupMemberships = Schema.Array(GroupMembership);
export const GetGroupIdRequest = Schema.Struct({IdentityStoreId: Schema.String, AlternateIdentifier: AlternateIdentifier});
export const GetGroupMembershipIdResponse = Schema.Struct({MembershipId: Schema.String, IdentityStoreId: Schema.String});
export const ResourceNotFoundException = Schema.Struct({ResourceType: Schema.optional(Schema.String), ResourceId: Schema.optional(Schema.String), Message: Schema.optional(Schema.String), RequestId: Schema.optional(Schema.String)});
export const IsMemberInGroupsResponse = Schema.Struct({Results: GroupMembershipExistenceResults});
export const ListGroupMembershipsForMemberResponse = Schema.Struct({GroupMemberships: GroupMemberships, NextToken: Schema.optional(Schema.String)});
export const GetGroupIdResponse = Schema.Struct({GroupId: Schema.String, IdentityStoreId: Schema.String});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String), RequestId: Schema.optional(Schema.String)});

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const getUserId = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-06-15", uri: "/", method: "POST", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.GetUserId" }, GetUserIdRequest, GetUserIdResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const isMemberInGroups = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-06-15", uri: "/", method: "POST", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.IsMemberInGroups" }, IsMemberInGroupsRequest, IsMemberInGroupsResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listGroupMembershipsForMember = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-06-15", uri: "/", method: "POST", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.ListGroupMembershipsForMember" }, ListGroupMembershipsForMemberRequest, ListGroupMembershipsForMemberResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getGroupId = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-06-15", uri: "/", method: "POST", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.GetGroupId" }, GetGroupIdRequest, GetGroupIdResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getGroupMembershipId = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-06-15", uri: "/", method: "POST", sdkId: "identitystore", sigV4ServiceName: "identitystore", name: "AWSIdentityStore.GetGroupMembershipId" }, GetGroupMembershipIdRequest, GetGroupMembershipIdResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

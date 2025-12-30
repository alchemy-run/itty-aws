import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class AssociateResourceToProfileRequest extends S.Class<AssociateResourceToProfileRequest>("AssociateResourceToProfileRequest")({ProfileId: S.String, ResourceArn: S.String, Name: S.String, ResourceProperties: S.optional(S.String)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class CreateProfileRequest extends S.Class<CreateProfileRequest>("CreateProfileRequest")({Name: S.String, ClientToken: S.String, Tags: S.optional(TagList)}) {}
export class DeleteProfileRequest extends S.Class<DeleteProfileRequest>("DeleteProfileRequest")({ProfileId: S.String}) {}
export class DisassociateProfileRequest extends S.Class<DisassociateProfileRequest>("DisassociateProfileRequest")({ProfileId: S.String, ResourceId: S.String}) {}
export class DisassociateResourceFromProfileRequest extends S.Class<DisassociateResourceFromProfileRequest>("DisassociateResourceFromProfileRequest")({ProfileId: S.String, ResourceArn: S.String}) {}
export class GetProfileRequest extends S.Class<GetProfileRequest>("GetProfileRequest")({ProfileId: S.String}) {}
export class GetProfileAssociationRequest extends S.Class<GetProfileAssociationRequest>("GetProfileAssociationRequest")({ProfileAssociationId: S.String}) {}
export class GetProfileResourceAssociationRequest extends S.Class<GetProfileResourceAssociationRequest>("GetProfileResourceAssociationRequest")({ProfileResourceAssociationId: S.String}) {}
export class ListProfileAssociationsRequest extends S.Class<ListProfileAssociationsRequest>("ListProfileAssociationsRequest")({ResourceId: S.optional(S.String), ProfileId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListProfileResourceAssociationsRequest extends S.Class<ListProfileResourceAssociationsRequest>("ListProfileResourceAssociationsRequest")({ProfileId: S.String, ResourceType: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListProfilesRequest extends S.Class<ListProfilesRequest>("ListProfilesRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateProfileResourceAssociationRequest extends S.Class<UpdateProfileResourceAssociationRequest>("UpdateProfileResourceAssociationRequest")({ProfileResourceAssociationId: S.String, Name: S.optional(S.String), ResourceProperties: S.optional(S.String)}) {}
export class ProfileAssociation extends S.Class<ProfileAssociation>("ProfileAssociation")({Id: S.optional(S.String), Name: S.optional(S.String), OwnerId: S.optional(S.String), ProfileId: S.optional(S.String), ResourceId: S.optional(S.String), Status: S.optional(S.String), StatusMessage: S.optional(S.String), CreationTime: S.optional(S.Date), ModificationTime: S.optional(S.Date)}) {}
export const ProfileAssociations = S.Array(ProfileAssociation);
export class ProfileResourceAssociation extends S.Class<ProfileResourceAssociation>("ProfileResourceAssociation")({Id: S.optional(S.String), Name: S.optional(S.String), OwnerId: S.optional(S.String), ProfileId: S.optional(S.String), ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), ResourceProperties: S.optional(S.String), Status: S.optional(S.String), StatusMessage: S.optional(S.String), CreationTime: S.optional(S.Date), ModificationTime: S.optional(S.Date)}) {}
export const ProfileResourceAssociations = S.Array(ProfileResourceAssociation);
export const TagMap = S.Record({key: S.String, value: S.String});
export class AssociateProfileRequest extends S.Class<AssociateProfileRequest>("AssociateProfileRequest")({ProfileId: S.String, ResourceId: S.String, Name: S.String, Tags: S.optional(TagList)}) {}
export class Profile extends S.Class<Profile>("Profile")({Id: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String), OwnerId: S.optional(S.String), Status: S.optional(S.String), StatusMessage: S.optional(S.String), ShareStatus: S.optional(S.String), CreationTime: S.optional(S.Date), ModificationTime: S.optional(S.Date), ClientToken: S.optional(S.String)}) {}
export class DeleteProfileResponse extends S.Class<DeleteProfileResponse>("DeleteProfileResponse")({Profile: S.optional(Profile)}) {}
export class DisassociateResourceFromProfileResponse extends S.Class<DisassociateResourceFromProfileResponse>("DisassociateResourceFromProfileResponse")({ProfileResourceAssociation: S.optional(ProfileResourceAssociation)}) {}
export class GetProfileResponse extends S.Class<GetProfileResponse>("GetProfileResponse")({Profile: S.optional(Profile)}) {}
export class GetProfileAssociationResponse extends S.Class<GetProfileAssociationResponse>("GetProfileAssociationResponse")({ProfileAssociation: S.optional(ProfileAssociation)}) {}
export class GetProfileResourceAssociationResponse extends S.Class<GetProfileResourceAssociationResponse>("GetProfileResourceAssociationResponse")({ProfileResourceAssociation: S.optional(ProfileResourceAssociation)}) {}
export class ListProfileAssociationsResponse extends S.Class<ListProfileAssociationsResponse>("ListProfileAssociationsResponse")({ProfileAssociations: S.optional(ProfileAssociations), NextToken: S.optional(S.String)}) {}
export class ListProfileResourceAssociationsResponse extends S.Class<ListProfileResourceAssociationsResponse>("ListProfileResourceAssociationsResponse")({ProfileResourceAssociations: S.optional(ProfileResourceAssociations), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: TagMap}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UpdateProfileResourceAssociationResponse extends S.Class<UpdateProfileResourceAssociationResponse>("UpdateProfileResourceAssociationResponse")({ProfileResourceAssociation: S.optional(ProfileResourceAssociation)}) {}
export class ProfileSummary extends S.Class<ProfileSummary>("ProfileSummary")({Id: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String), ShareStatus: S.optional(S.String)}) {}
export const ProfileSummaryList = S.Array(ProfileSummary);
export class AssociateProfileResponse extends S.Class<AssociateProfileResponse>("AssociateProfileResponse")({ProfileAssociation: S.optional(ProfileAssociation)}) {}
export class AssociateResourceToProfileResponse extends S.Class<AssociateResourceToProfileResponse>("AssociateResourceToProfileResponse")({ProfileResourceAssociation: S.optional(ProfileResourceAssociation)}) {}
export class CreateProfileResponse extends S.Class<CreateProfileResponse>("CreateProfileResponse")({Profile: S.optional(Profile)}) {}
export class DisassociateProfileResponse extends S.Class<DisassociateProfileResponse>("DisassociateProfileResponse")({ProfileAssociation: S.optional(ProfileAssociation)}) {}
export class ListProfilesResponse extends S.Class<ListProfilesResponse>("ListProfilesResponse")({ProfileSummaries: S.optional(ProfileSummaryList), NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class InternalServiceErrorException extends S.TaggedError<InternalServiceErrorException>()("InternalServiceErrorException", {}) {};
export class InvalidNextTokenException extends S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class ResourceExistsException extends S.TaggedError<ResourceExistsException>()("ResourceExistsException", {Message: S.optional(S.String), ResourceType: S.optional(S.String)}) {};

//# Operations
/**
 * Lists the tags that you associated with the specified resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, ConflictException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more tags to a specified resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more tags from a specified resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, ConflictException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a DNS reource configuration to a Route 53 Profile.
 */export const associateResourceToProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/profileresourceassociation", method: "POST", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.AssociateResourceToProfile" }, AssociateResourceToProfileRequest, AssociateResourceToProfileResponse, [AccessDeniedException, ConflictException, InternalServiceErrorException, InvalidParameterException, LimitExceededException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an empty Route 53 Profile.
 */export const createProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/profile", method: "POST", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.CreateProfile" }, CreateProfileRequest, CreateProfileResponse, [AccessDeniedException, InvalidParameterException, LimitExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified Route 53 Profile. Before you can delete a profile, you must first disassociate it from all VPCs.
 */export const deleteProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/profile/{ProfileId}", method: "DELETE", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.DeleteProfile" }, DeleteProfileRequest, DeleteProfileResponse, [AccessDeniedException, ConflictException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Dissociates a specified Route 53 Profile from the specified VPC.
 */export const disassociateProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/profileassociation/Profileid/{ProfileId}/resourceid/{ResourceId}", method: "DELETE", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.DisassociateProfile" }, DisassociateProfileRequest, DisassociateProfileResponse, [AccessDeniedException, InvalidParameterException, LimitExceededException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Dissoaciated a specified resource, from the Route 53 Profile.
 */export const disassociateResourceFromProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/profileresourceassociation/profileid/{ProfileId}/resourcearn/{ResourceArn}", method: "DELETE", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.DisassociateResourceFromProfile" }, DisassociateResourceFromProfileRequest, DisassociateResourceFromProfileResponse, [AccessDeniedException, ConflictException, InternalServiceErrorException, InvalidParameterException, LimitExceededException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a specified Route 53 Profile, such as whether whether the Profile is shared, and the current status of the Profile.
 */export const getProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/profile/{ProfileId}", method: "GET", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.GetProfile" }, GetProfileRequest, GetProfileResponse, [AccessDeniedException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a Route 53 Profile association for a VPC. A VPC can have only one Profile association, but a Profile can be associated with up to 5000 VPCs.
 */export const getProfileAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/profileassociation/{ProfileAssociationId}", method: "GET", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.GetProfileAssociation" }, GetProfileAssociationRequest, GetProfileAssociationResponse, [AccessDeniedException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a specified Route 53 Profile resource association.
 */export const getProfileResourceAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/profileresourceassociation/{ProfileResourceAssociationId}", method: "GET", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.GetProfileResourceAssociation" }, GetProfileResourceAssociationRequest, GetProfileResourceAssociationResponse, [AccessDeniedException, InvalidParameterException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the VPCs that the specified Route 53 Profile is associated with.
 */export const listProfileAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/profileassociations", method: "GET", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.ListProfileAssociations" }, ListProfileAssociationsRequest, ListProfileAssociationsResponse, [AccessDeniedException, InvalidNextTokenException, InvalidParameterException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the resource associations for the specified Route 53 Profile.
 */export const listProfileResourceAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/profileresourceassociations/profileid/{ProfileId}", method: "GET", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.ListProfileResourceAssociations" }, ListProfileResourceAssociationsRequest, ListProfileResourceAssociationsResponse, [AccessDeniedException, InternalServiceErrorException, InvalidNextTokenException, InvalidParameterException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the Route 53 Profiles associated with your Amazon Web Services account.
 */export const listProfiles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/profiles", method: "GET", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.ListProfiles" }, ListProfilesRequest, ListProfilesResponse, [AccessDeniedException, InvalidNextTokenException, InvalidParameterException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified Route 53 Profile resourse association.
 */export const updateProfileResourceAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/profileresourceassociation/{ProfileResourceAssociationId}", method: "PATCH", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.UpdateProfileResourceAssociation" }, UpdateProfileResourceAssociationRequest, UpdateProfileResourceAssociationResponse, [AccessDeniedException, ConflictException, InternalServiceErrorException, InvalidParameterException, LimitExceededException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a Route 53 Profiles profile with a VPC. A VPC can have only one Profile associated with it, but a Profile can be associated with 1000 of VPCs (and you can request a higher quota).
 * For more information, see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html#limits-api-entities.
 */export const associateProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/profileassociation", method: "POST", sdkId: "Route53Profiles", sigV4ServiceName: "route53profiles", name: "Route53Profiles.AssociateProfile" }, AssociateProfileRequest, AssociateProfileResponse, [AccessDeniedException, ConflictException, InvalidParameterException, LimitExceededException, ResourceExistsException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

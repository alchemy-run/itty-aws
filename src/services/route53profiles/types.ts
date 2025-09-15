import type { Effect, Data as EffectData } from "effect";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class Route53Profiles extends AWSServiceClient {
  associateProfile(
    input: AssociateProfileRequest,
  ): Effect.Effect<
    AssociateProfileResponse,
    | AccessDeniedException
    | ConflictException
    | InvalidParameterException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateResourceToProfile(
    input: AssociateResourceToProfileRequest,
  ): Effect.Effect<
    AssociateResourceToProfileResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createProfile(
    input: CreateProfileRequest,
  ): Effect.Effect<
    CreateProfileResponse,
    | AccessDeniedException
    | InvalidParameterException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteProfile(
    input: DeleteProfileRequest,
  ): Effect.Effect<
    DeleteProfileResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateProfile(
    input: DisassociateProfileRequest,
  ): Effect.Effect<
    DisassociateProfileResponse,
    | AccessDeniedException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateResourceFromProfile(
    input: DisassociateResourceFromProfileRequest,
  ): Effect.Effect<
    DisassociateResourceFromProfileResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getProfile(
    input: GetProfileRequest,
  ): Effect.Effect<
    GetProfileResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getProfileAssociation(
    input: GetProfileAssociationRequest,
  ): Effect.Effect<
    GetProfileAssociationResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getProfileResourceAssociation(
    input: GetProfileResourceAssociationRequest,
  ): Effect.Effect<
    GetProfileResourceAssociationResponse,
    | AccessDeniedException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProfileAssociations(
    input: ListProfileAssociationsRequest,
  ): Effect.Effect<
    ListProfileAssociationsResponse,
    | AccessDeniedException
    | InvalidNextTokenException
    | InvalidParameterException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProfileResourceAssociations(
    input: ListProfileResourceAssociationsRequest,
  ): Effect.Effect<
    ListProfileResourceAssociationsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProfiles(
    input: ListProfilesRequest,
  ): Effect.Effect<
    ListProfilesResponse,
    | AccessDeniedException
    | InvalidNextTokenException
    | InvalidParameterException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateProfileResourceAssociation(
    input: UpdateProfileResourceAssociationRequest,
  ): Effect.Effect<
    UpdateProfileResourceAssociationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Route53profiles extends Route53Profiles {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccountId = string;

export type Arn = string;

export interface AssociateProfileRequest {
  ProfileId: string;
  ResourceId: string;
  Name: string;
  Tags?: Array<Tag>;
}
export interface AssociateProfileResponse {
  ProfileAssociation?: ProfileAssociation;
}
export interface AssociateResourceToProfileRequest {
  ProfileId: string;
  ResourceArn: string;
  Name: string;
  ResourceProperties?: string;
}
export interface AssociateResourceToProfileResponse {
  ProfileResourceAssociation?: ProfileResourceAssociation;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateProfileRequest {
  Name: string;
  ClientToken: string;
  Tags?: Array<Tag>;
}
export interface CreateProfileResponse {
  Profile?: Profile;
}
export type CreatorRequestId = string;

export interface DeleteProfileRequest {
  ProfileId: string;
}
export interface DeleteProfileResponse {
  Profile?: Profile;
}
export interface DisassociateProfileRequest {
  ProfileId: string;
  ResourceId: string;
}
export interface DisassociateProfileResponse {
  ProfileAssociation?: ProfileAssociation;
}
export interface DisassociateResourceFromProfileRequest {
  ProfileId: string;
  ResourceArn: string;
}
export interface DisassociateResourceFromProfileResponse {
  ProfileResourceAssociation?: ProfileResourceAssociation;
}
export type ExceptionMessage = string;

export interface GetProfileAssociationRequest {
  ProfileAssociationId: string;
}
export interface GetProfileAssociationResponse {
  ProfileAssociation?: ProfileAssociation;
}
export interface GetProfileRequest {
  ProfileId: string;
}
export interface GetProfileResourceAssociationRequest {
  ProfileResourceAssociationId: string;
}
export interface GetProfileResourceAssociationResponse {
  ProfileResourceAssociation?: ProfileResourceAssociation;
}
export interface GetProfileResponse {
  Profile?: Profile;
}
export declare class InternalServiceErrorException extends EffectData.TaggedError(
  "InternalServiceErrorException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message: string;
  readonly FieldName?: string;
}> {}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
}> {}
export interface ListProfileAssociationsRequest {
  ResourceId?: string;
  ProfileId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListProfileAssociationsResponse {
  ProfileAssociations?: Array<ProfileAssociation>;
  NextToken?: string;
}
export interface ListProfileResourceAssociationsRequest {
  ProfileId: string;
  ResourceType?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListProfileResourceAssociationsResponse {
  ProfileResourceAssociations?: Array<ProfileResourceAssociation>;
  NextToken?: string;
}
export interface ListProfilesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListProfilesResponse {
  ProfileSummaries?: Array<ProfileSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags: Record<string, string>;
}
export type MaxResults = number;

export type Name = string;

export type NextToken = string;

export interface Profile {
  Id?: string;
  Arn?: string;
  Name?: string;
  OwnerId?: string;
  Status?: ProfileStatus;
  StatusMessage?: string;
  ShareStatus?: ShareStatus;
  CreationTime?: Date | string;
  ModificationTime?: Date | string;
  ClientToken?: string;
}
export interface ProfileAssociation {
  Id?: string;
  Name?: string;
  OwnerId?: string;
  ProfileId?: string;
  ResourceId?: string;
  Status?: ProfileStatus;
  StatusMessage?: string;
  CreationTime?: Date | string;
  ModificationTime?: Date | string;
}
export type ProfileAssociations = Array<ProfileAssociation>;
export interface ProfileResourceAssociation {
  Id?: string;
  Name?: string;
  OwnerId?: string;
  ProfileId?: string;
  ResourceArn?: string;
  ResourceType?: string;
  ResourceProperties?: string;
  Status?: ProfileStatus;
  StatusMessage?: string;
  CreationTime?: Date | string;
  ModificationTime?: Date | string;
}
export type ProfileResourceAssociations = Array<ProfileResourceAssociation>;
export type ProfileStatus =
  | "COMPLETE"
  | "DELETING"
  | "UPDATING"
  | "CREATING"
  | "DELETED"
  | "FAILED";
export interface ProfileSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  ShareStatus?: ShareStatus;
}
export type ProfileSummaryList = Array<ProfileSummary>;
export declare class ResourceExistsException extends EffectData.TaggedError(
  "ResourceExistsException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
}> {}
export type ResourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
}> {}
export type ResourceProperties = string;

export type Rfc3339Timestamp = Date | string;

export type ShareStatus = "NOT_SHARED" | "SHARED_WITH_ME" | "SHARED_BY_ME";
export type Route53profilesString = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateProfileResourceAssociationRequest {
  ProfileResourceAssociationId: string;
  Name?: string;
  ResourceProperties?: string;
}
export interface UpdateProfileResourceAssociationResponse {
  ProfileResourceAssociation?: ProfileResourceAssociation;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace AssociateProfile {
  export type Input = AssociateProfileRequest;
  export type Output = AssociateProfileResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InvalidParameterException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateResourceToProfile {
  export type Input = AssociateResourceToProfileRequest;
  export type Output = AssociateResourceToProfileResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateProfile {
  export type Input = CreateProfileRequest;
  export type Output = CreateProfileResponse;
  export type Error =
    | AccessDeniedException
    | InvalidParameterException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProfile {
  export type Input = DeleteProfileRequest;
  export type Output = DeleteProfileResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateProfile {
  export type Input = DisassociateProfileRequest;
  export type Output = DisassociateProfileResponse;
  export type Error =
    | AccessDeniedException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateResourceFromProfile {
  export type Input = DisassociateResourceFromProfileRequest;
  export type Output = DisassociateResourceFromProfileResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProfile {
  export type Input = GetProfileRequest;
  export type Output = GetProfileResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProfileAssociation {
  export type Input = GetProfileAssociationRequest;
  export type Output = GetProfileAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProfileResourceAssociation {
  export type Input = GetProfileResourceAssociationRequest;
  export type Output = GetProfileResourceAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProfileAssociations {
  export type Input = ListProfileAssociationsRequest;
  export type Output = ListProfileAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InvalidNextTokenException
    | InvalidParameterException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProfileResourceAssociations {
  export type Input = ListProfileResourceAssociationsRequest;
  export type Output = ListProfileResourceAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProfiles {
  export type Input = ListProfilesRequest;
  export type Output = ListProfilesResponse;
  export type Error =
    | AccessDeniedException
    | InvalidNextTokenException
    | InvalidParameterException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
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
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProfileResourceAssociation {
  export type Input = UpdateProfileResourceAssociationRequest;
  export type Output = UpdateProfileResourceAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

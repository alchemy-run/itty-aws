import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const WorkgroupNameList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class CreateCustomDomainAssociationRequest extends S.Class<CreateCustomDomainAssociationRequest>("CreateCustomDomainAssociationRequest")({workgroupName: S.String, customDomainName: S.String, customDomainCertificateArn: S.String}) {}
export class DeleteCustomDomainAssociationRequest extends S.Class<DeleteCustomDomainAssociationRequest>("DeleteCustomDomainAssociationRequest")({workgroupName: S.String, customDomainName: S.String}) {}
export class DeleteCustomDomainAssociationResponse extends S.Class<DeleteCustomDomainAssociationResponse>("DeleteCustomDomainAssociationResponse")({}) {}
export class DeleteResourcePolicyRequest extends S.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({resourceArn: S.String}) {}
export class DeleteResourcePolicyResponse extends S.Class<DeleteResourcePolicyResponse>("DeleteResourcePolicyResponse")({}) {}
export class GetCredentialsRequest extends S.Class<GetCredentialsRequest>("GetCredentialsRequest")({dbName: S.optional(S.String), durationSeconds: S.optional(S.Number), workgroupName: S.optional(S.String), customDomainName: S.optional(S.String)}) {}
export class GetCustomDomainAssociationRequest extends S.Class<GetCustomDomainAssociationRequest>("GetCustomDomainAssociationRequest")({customDomainName: S.String, workgroupName: S.String}) {}
export class GetIdentityCenterAuthTokenRequest extends S.Class<GetIdentityCenterAuthTokenRequest>("GetIdentityCenterAuthTokenRequest")({workgroupNames: WorkgroupNameList}) {}
export class GetResourcePolicyRequest extends S.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({resourceArn: S.String}) {}
export class GetTrackRequest extends S.Class<GetTrackRequest>("GetTrackRequest")({trackName: S.String}) {}
export class ListCustomDomainAssociationsRequest extends S.Class<ListCustomDomainAssociationsRequest>("ListCustomDomainAssociationsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), customDomainName: S.optional(S.String), customDomainCertificateArn: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class ListTracksRequest extends S.Class<ListTracksRequest>("ListTracksRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class PutResourcePolicyRequest extends S.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({resourceArn: S.String, policy: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateCustomDomainAssociationRequest extends S.Class<UpdateCustomDomainAssociationRequest>("UpdateCustomDomainAssociationRequest")({workgroupName: S.String, customDomainName: S.String, customDomainCertificateArn: S.String}) {}
export class UpdateTarget extends S.Class<UpdateTarget>("UpdateTarget")({trackName: S.optional(S.String), workgroupVersion: S.optional(S.String)}) {}
export const UpdateTargetsList = S.Array(UpdateTarget);
export class ServerlessTrack extends S.Class<ServerlessTrack>("ServerlessTrack")({trackName: S.optional(S.String), workgroupVersion: S.optional(S.String), updateTargets: S.optional(UpdateTargetsList)}) {}
export const TrackList = S.Array(ServerlessTrack);
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const TagList = S.Array(Tag);
export class CreateCustomDomainAssociationResponse extends S.Class<CreateCustomDomainAssociationResponse>("CreateCustomDomainAssociationResponse")({customDomainName: S.optional(S.String), workgroupName: S.optional(S.String), customDomainCertificateArn: S.optional(S.String), customDomainCertificateExpiryTime: S.optional(S.Date)}) {}
export class GetCredentialsResponse extends S.Class<GetCredentialsResponse>("GetCredentialsResponse")({dbUser: S.optional(S.String), dbPassword: S.optional(S.String), expiration: S.optional(S.Date), nextRefreshTime: S.optional(S.Date)}) {}
export class GetCustomDomainAssociationResponse extends S.Class<GetCustomDomainAssociationResponse>("GetCustomDomainAssociationResponse")({customDomainName: S.optional(S.String), workgroupName: S.optional(S.String), customDomainCertificateArn: S.optional(S.String), customDomainCertificateExpiryTime: S.optional(S.Date)}) {}
export class GetIdentityCenterAuthTokenResponse extends S.Class<GetIdentityCenterAuthTokenResponse>("GetIdentityCenterAuthTokenResponse")({token: S.optional(S.String), expirationTime: S.optional(S.Date)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList)}) {}
export class ListTracksResponse extends S.Class<ListTracksResponse>("ListTracksResponse")({tracks: S.optional(TrackList), nextToken: S.optional(S.String)}) {}
export class ResourcePolicy extends S.Class<ResourcePolicy>("ResourcePolicy")({resourceArn: S.optional(S.String), policy: S.optional(S.String)}) {}
export class PutResourcePolicyResponse extends S.Class<PutResourcePolicyResponse>("PutResourcePolicyResponse")({resourcePolicy: S.optional(ResourcePolicy)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UpdateCustomDomainAssociationResponse extends S.Class<UpdateCustomDomainAssociationResponse>("UpdateCustomDomainAssociationResponse")({customDomainName: S.optional(S.String), workgroupName: S.optional(S.String), customDomainCertificateArn: S.optional(S.String), customDomainCertificateExpiryTime: S.optional(S.Date)}) {}
export class Association extends S.Class<Association>("Association")({customDomainCertificateArn: S.optional(S.String), customDomainCertificateExpiryTime: S.optional(S.Date), customDomainName: S.optional(S.String), workgroupName: S.optional(S.String)}) {}
export const AssociationList = S.Array(Association);
export class GetResourcePolicyResponse extends S.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({resourcePolicy: S.optional(ResourcePolicy)}) {}
export class ListCustomDomainAssociationsResponse extends S.Class<ListCustomDomainAssociationsResponse>("ListCustomDomainAssociationsResponse")({nextToken: S.optional(S.String), associations: S.optional(AssociationList)}) {}
export class GetTrackResponse extends S.Class<GetTrackResponse>("GetTrackResponse")({track: S.optional(ServerlessTrack)}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class DryRunException extends S.TaggedError<DryRunException>()("DryRunException", {message: S.String}) {};
export class InvalidPaginationException extends S.TaggedError<InvalidPaginationException>()("InvalidPaginationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {message: S.optional(S.String), resourceName: S.optional(S.String)}) {};

//# Operations
/**
 * Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.
 * 
 * By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).
 * 
 * The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.
 * 
 * If the `DbName` parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.
 */export const getCredentials = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.GetCredentials" }, GetCredentialsRequest, GetCredentialsResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a specific custom domain association.
 */export const getCustomDomainAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.GetCustomDomainAssociation" }, GetCustomDomainAssociationRequest, GetCustomDomainAssociationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags assigned to a resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag or set of tags from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an Amazon Redshift Serverless certificate associated with a custom domain.
 */export const updateCustomDomainAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.UpdateCustomDomainAssociation" }, UpdateCustomDomainAssociationRequest, UpdateCustomDomainAssociationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a custom domain association for Amazon Redshift Serverless.
 */export const createCustomDomainAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.CreateCustomDomainAssociation" }, CreateCustomDomainAssociationRequest, CreateCustomDomainAssociationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a custom domain association for Amazon Redshift Serverless.
 */export const deleteCustomDomainAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.DeleteCustomDomainAssociation" }, DeleteCustomDomainAssociationRequest, DeleteCustomDomainAssociationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified resource policy.
 */export const deleteResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, DeleteResourcePolicyResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an Identity Center authentication token for accessing Amazon Redshift Serverless workgroups.
 * 
 * The token provides secure access to data within the specified workgroups using Identity Center identity propagation. The token expires after a specified duration and must be refreshed for continued access.
 * 
 * The Identity and Access Management (IAM) user or role that runs GetIdentityCenterAuthToken must have appropriate permissions to access the specified workgroups and Identity Center integration must be configured for the workgroups.
 */export const getIdentityCenterAuthToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.GetIdentityCenterAuthToken" }, GetIdentityCenterAuthTokenRequest, GetIdentityCenterAuthTokenResponse, [AccessDeniedException, ConflictException, DryRunException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a resource policy.
 */export const getResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists custom domain associations for Amazon Redshift Serverless.
 */export const listCustomDomainAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.ListCustomDomainAssociations" }, ListCustomDomainAssociationsRequest, ListCustomDomainAssociationsResponse, [AccessDeniedException, InternalServerException, InvalidPaginationException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the Amazon Redshift Serverless versions.
 */export const listTracks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.ListTracks" }, ListTracksRequest, ListTracksResponse, [AccessDeniedException, InternalServerException, InvalidPaginationException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.
 */export const putResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns one or more tags to a resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, TooManyTagsException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the Redshift Serverless version for a specified track.
 */export const getTrack = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-04-21", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.GetTrack" }, GetTrackRequest, GetTrackResponse, [AccessDeniedException, ConflictException, DryRunException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

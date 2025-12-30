import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const CreateCustomDomainAssociationRequest = Schema.Struct({workgroupName: Schema.String, customDomainName: Schema.String, customDomainCertificateArn: Schema.String});
export const DeleteCustomDomainAssociationRequest = Schema.Struct({workgroupName: Schema.String, customDomainName: Schema.String});
export const DeleteCustomDomainAssociationResponse = Schema.Struct({});
export const DeleteResourcePolicyRequest = Schema.Struct({resourceArn: Schema.String});
export const DeleteResourcePolicyResponse = Schema.Struct({});
export const GetCredentialsRequest = Schema.Struct({dbName: Schema.optional(Schema.String), durationSeconds: Schema.optional(Schema.Number), workgroupName: Schema.optional(Schema.String), customDomainName: Schema.optional(Schema.String)});
export const GetCustomDomainAssociationRequest = Schema.Struct({customDomainName: Schema.String, workgroupName: Schema.String});
export const GetResourcePolicyRequest = Schema.Struct({resourceArn: Schema.String});
export const GetTrackRequest = Schema.Struct({trackName: Schema.String});
export const ListCustomDomainAssociationsRequest = Schema.Struct({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), customDomainName: Schema.optional(Schema.String), customDomainCertificateArn: Schema.optional(Schema.String)});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const ListTracksRequest = Schema.Struct({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number)});
export const PutResourcePolicyRequest = Schema.Struct({resourceArn: Schema.String, policy: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const UpdateCustomDomainAssociationRequest = Schema.Struct({workgroupName: Schema.String, customDomainName: Schema.String, customDomainCertificateArn: Schema.String});
export const UpdateTarget = Schema.Struct({trackName: Schema.optional(Schema.String), workgroupVersion: Schema.optional(Schema.String)});
export const UpdateTargetsList = Schema.Array(UpdateTarget);
export const ServerlessTrack = Schema.Struct({trackName: Schema.optional(Schema.String), workgroupVersion: Schema.optional(Schema.String), updateTargets: Schema.optional(UpdateTargetsList)});
export const TrackList = Schema.Array(ServerlessTrack);
export const Tag = Schema.Struct({key: Schema.String, value: Schema.String});
export const TagList = Schema.Array(Tag);
export const CreateCustomDomainAssociationResponse = Schema.Struct({customDomainName: Schema.optional(Schema.String), workgroupName: Schema.optional(Schema.String), customDomainCertificateArn: Schema.optional(Schema.String), customDomainCertificateExpiryTime: Schema.optional(Schema.Date)});
export const AccessDeniedException = Schema.Struct({code: Schema.optional(Schema.String), message: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({message: Schema.String});
export const GetCredentialsResponse = Schema.Struct({dbUser: Schema.optional(Schema.String), dbPassword: Schema.optional(Schema.String), expiration: Schema.optional(Schema.Date), nextRefreshTime: Schema.optional(Schema.Date)});
export const GetCustomDomainAssociationResponse = Schema.Struct({customDomainName: Schema.optional(Schema.String), workgroupName: Schema.optional(Schema.String), customDomainCertificateArn: Schema.optional(Schema.String), customDomainCertificateExpiryTime: Schema.optional(Schema.Date)});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagList)});
export const ListTracksResponse = Schema.Struct({tracks: Schema.optional(TrackList), nextToken: Schema.optional(Schema.String)});
export const ResourcePolicy = Schema.Struct({resourceArn: Schema.optional(Schema.String), policy: Schema.optional(Schema.String)});
export const PutResourcePolicyResponse = Schema.Struct({resourcePolicy: Schema.optional(ResourcePolicy)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagList});
export const TagResourceResponse = Schema.Struct({});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceName: Schema.optional(Schema.String)});
export const UpdateCustomDomainAssociationResponse = Schema.Struct({customDomainName: Schema.optional(Schema.String), workgroupName: Schema.optional(Schema.String), customDomainCertificateArn: Schema.optional(Schema.String), customDomainCertificateExpiryTime: Schema.optional(Schema.Date)});
export const Association = Schema.Struct({customDomainCertificateArn: Schema.optional(Schema.String), customDomainCertificateExpiryTime: Schema.optional(Schema.Date), customDomainName: Schema.optional(Schema.String), workgroupName: Schema.optional(Schema.String)});
export const AssociationList = Schema.Array(Association);
export const ConflictException = Schema.Struct({message: Schema.String});
export const ThrottlingException = Schema.Struct({code: Schema.optional(Schema.String), message: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({message: Schema.String});
export const GetResourcePolicyResponse = Schema.Struct({resourcePolicy: Schema.optional(ResourcePolicy)});
export const ListCustomDomainAssociationsResponse = Schema.Struct({nextToken: Schema.optional(Schema.String), associations: Schema.optional(AssociationList)});
export const InvalidPaginationException = Schema.Struct({message: Schema.String});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.String});
export const TooManyTagsException = Schema.Struct({message: Schema.optional(Schema.String), resourceName: Schema.optional(Schema.String)});
export const GetTrackResponse = Schema.Struct({track: Schema.optional(ServerlessTrack)});

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class InvalidPaginationExceptionError extends Schema.TaggedError<InvalidPaginationExceptionError>()("InvalidPaginationException", InvalidPaginationException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};
export class TooManyTagsExceptionError extends Schema.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException) {};

//# Operations
export const getCredentials = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.GetCredentials" }, GetCredentialsRequest, GetCredentialsResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getCustomDomainAssociation = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.GetCustomDomainAssociation" }, GetCustomDomainAssociationRequest, GetCustomDomainAssociationResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateCustomDomainAssociation = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.UpdateCustomDomainAssociation" }, UpdateCustomDomainAssociationRequest, UpdateCustomDomainAssociationResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createCustomDomainAssociation = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.CreateCustomDomainAssociation" }, CreateCustomDomainAssociationRequest, CreateCustomDomainAssociationResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteCustomDomainAssociation = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.DeleteCustomDomainAssociation" }, DeleteCustomDomainAssociationRequest, DeleteCustomDomainAssociationResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, DeleteResourcePolicyResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listCustomDomainAssociations = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.ListCustomDomainAssociations" }, ListCustomDomainAssociationsRequest, ListCustomDomainAssociationsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, InvalidPaginationExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTracks = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.ListTracks" }, ListTracksRequest, ListTracksResponse, [AccessDeniedExceptionError, InternalServerExceptionError, InvalidPaginationExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, TooManyTagsExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getTrack = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-04-21", uri: "/", method: "POST", sdkId: "Redshift Serverless", sigV4ServiceName: "redshift-serverless", name: "RedshiftServerless.GetTrack" }, GetTrackRequest, GetTrackResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);

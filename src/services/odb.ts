import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetOciOnboardingStatusInput extends S.Class<GetOciOnboardingStatusInput>("GetOciOnboardingStatusInput")({}) {}
export const TagKeys = S.Array(S.String);
export class AcceptMarketplaceRegistrationInput extends S.Class<AcceptMarketplaceRegistrationInput>("AcceptMarketplaceRegistrationInput")({marketplaceRegistrationToken: S.String}) {}
export class AcceptMarketplaceRegistrationOutput extends S.Class<AcceptMarketplaceRegistrationOutput>("AcceptMarketplaceRegistrationOutput")({}) {}
export class AssociateIamRoleToResourceInput extends S.Class<AssociateIamRoleToResourceInput>("AssociateIamRoleToResourceInput")({iamRoleArn: S.String, awsIntegration: S.String, resourceArn: S.String}) {}
export class AssociateIamRoleToResourceOutput extends S.Class<AssociateIamRoleToResourceOutput>("AssociateIamRoleToResourceOutput")({}) {}
export class DisassociateIamRoleFromResourceInput extends S.Class<DisassociateIamRoleFromResourceInput>("DisassociateIamRoleFromResourceInput")({iamRoleArn: S.String, awsIntegration: S.String, resourceArn: S.String}) {}
export class DisassociateIamRoleFromResourceOutput extends S.Class<DisassociateIamRoleFromResourceOutput>("DisassociateIamRoleFromResourceOutput")({}) {}
export class InitializeServiceInput extends S.Class<InitializeServiceInput>("InitializeServiceInput")({ociIdentityDomain: S.optional(S.Boolean)}) {}
export class InitializeServiceOutput extends S.Class<InitializeServiceOutput>("InitializeServiceOutput")({}) {}
export class ListDbSystemShapesInput extends S.Class<ListDbSystemShapesInput>("ListDbSystemShapesInput")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), availabilityZone: S.optional(S.String), availabilityZoneId: S.optional(S.String)}) {}
export class ListGiVersionsInput extends S.Class<ListGiVersionsInput>("ListGiVersionsInput")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), shape: S.optional(S.String)}) {}
export class ListSystemVersionsInput extends S.Class<ListSystemVersionsInput>("ListSystemVersionsInput")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), giVersion: S.String, shape: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class OciIdentityDomain extends S.Class<OciIdentityDomain>("OciIdentityDomain")({ociIdentityDomainId: S.optional(S.String), ociIdentityDomainResourceUrl: S.optional(S.String), ociIdentityDomainUrl: S.optional(S.String), status: S.optional(S.String), statusReason: S.optional(S.String), accountSetupCloudFormationUrl: S.optional(S.String)}) {}
export const RequestTagMap = S.Record({key: S.String, value: S.String});
export class GetOciOnboardingStatusOutput extends S.Class<GetOciOnboardingStatusOutput>("GetOciOnboardingStatusOutput")({status: S.optional(S.String), existingTenancyActivationLink: S.optional(S.String), newTenancyActivationLink: S.optional(S.String), ociIdentityDomain: S.optional(OciIdentityDomain)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: RequestTagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export const StringList = S.Array(S.String);
export class DbSystemShapeSummary extends S.Class<DbSystemShapeSummary>("DbSystemShapeSummary")({availableCoreCount: S.optional(S.Number), availableCoreCountPerNode: S.optional(S.Number), availableDataStorageInTBs: S.optional(S.Number), availableDataStoragePerServerInTBs: S.optional(S.Number), availableDbNodePerNodeInGBs: S.optional(S.Number), availableDbNodeStorageInGBs: S.optional(S.Number), availableMemoryInGBs: S.optional(S.Number), availableMemoryPerNodeInGBs: S.optional(S.Number), coreCountIncrement: S.optional(S.Number), maxStorageCount: S.optional(S.Number), maximumNodeCount: S.optional(S.Number), minCoreCountPerNode: S.optional(S.Number), minDataStorageInTBs: S.optional(S.Number), minDbNodeStoragePerNodeInGBs: S.optional(S.Number), minMemoryPerNodeInGBs: S.optional(S.Number), minStorageCount: S.optional(S.Number), minimumCoreCount: S.optional(S.Number), minimumNodeCount: S.optional(S.Number), runtimeMinimumCoreCount: S.optional(S.Number), shapeFamily: S.optional(S.String), shapeType: S.optional(S.String), name: S.optional(S.String), computeModel: S.optional(S.String), areServerTypesSupported: S.optional(S.Boolean)}) {}
export const DbSystemShapeList = S.Array(DbSystemShapeSummary);
export class GiVersionSummary extends S.Class<GiVersionSummary>("GiVersionSummary")({version: S.optional(S.String)}) {}
export const GiVersionList = S.Array(GiVersionSummary);
export class SystemVersionSummary extends S.Class<SystemVersionSummary>("SystemVersionSummary")({giVersion: S.optional(S.String), shape: S.optional(S.String), systemVersions: S.optional(StringList)}) {}
export const SystemVersionList = S.Array(SystemVersionSummary);
export const ResponseTagMap = S.Record({key: S.String, value: S.String});
export class ListDbSystemShapesOutput extends S.Class<ListDbSystemShapesOutput>("ListDbSystemShapesOutput")({nextToken: S.optional(S.String), dbSystemShapes: DbSystemShapeList}) {}
export class ListGiVersionsOutput extends S.Class<ListGiVersionsOutput>("ListGiVersionsOutput")({nextToken: S.optional(S.String), giVersions: GiVersionList}) {}
export class ListSystemVersionsOutput extends S.Class<ListSystemVersionsOutput>("ListSystemVersionsOutput")({nextToken: S.optional(S.String), systemVersions: SystemVersionList}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(ResponseTagMap)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String, resourceId: S.String, resourceType: S.String, quotaCode: S.String}) {};

//# Operations
/**
 * Associates an Amazon Web Services Identity and Access Management (IAM) service role with a specified resource to enable Amazon Web Services service integration.
 */export const associateIamRoleToResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-08-20", uri: "/", method: "POST", sdkId: "odb", sigV4ServiceName: "odb", name: "Odb.AssociateIamRoleToResource" }, AssociateIamRoleToResourceInput, AssociateIamRoleToResourceOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates an Amazon Web Services Identity and Access Management (IAM) service role from a specified resource to disable Amazon Web Services service integration.
 */export const disassociateIamRoleFromResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-08-20", uri: "/", method: "POST", sdkId: "odb", sigV4ServiceName: "odb", name: "Odb.DisassociateIamRoleFromResource" }, DisassociateIamRoleFromResourceInput, DisassociateIamRoleFromResourceOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the tenancy activation link and onboarding status for your Amazon Web Services account.
 */export const getOciOnboardingStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-08-20", uri: "/", method: "POST", sdkId: "odb", sigV4ServiceName: "odb", name: "Odb.GetOciOnboardingStatus" }, GetOciOnboardingStatusInput, GetOciOnboardingStatusOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initializes the ODB service for the first time in an account.
 */export const initializeService = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-08-20", uri: "/", method: "POST", sdkId: "odb", sigV4ServiceName: "odb", name: "Odb.InitializeService" }, InitializeServiceInput, InitializeServiceOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from the specified resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-08-20", uri: "/", method: "POST", sdkId: "odb", sigV4ServiceName: "odb", name: "Odb.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the shapes that are available for an Exadata infrastructure.
 */export const listDbSystemShapes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-08-20", uri: "/", method: "POST", sdkId: "odb", sigV4ServiceName: "odb", name: "Odb.ListDbSystemShapes" }, ListDbSystemShapesInput, ListDbSystemShapesOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about Oracle Grid Infrastructure (GI) software versions that are available for a VM cluster for the specified shape.
 */export const listGiVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-08-20", uri: "/", method: "POST", sdkId: "odb", sigV4ServiceName: "odb", name: "Odb.ListGiVersions" }, ListGiVersionsInput, ListGiVersionsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the system versions that are available for a VM cluster for the specified `giVersion` and `shape`.
 */export const listSystemVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-08-20", uri: "/", method: "POST", sdkId: "odb", sigV4ServiceName: "odb", name: "Odb.ListSystemVersions" }, ListSystemVersionsInput, ListSystemVersionsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the tags applied to this resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-08-20", uri: "/", method: "POST", sdkId: "odb", sigV4ServiceName: "odb", name: "Odb.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Applies tags to the specified resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-08-20", uri: "/", method: "POST", sdkId: "odb", sigV4ServiceName: "odb", name: "Odb.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundException, ServiceQuotaExceededException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers the Amazon Web Services Marketplace token for your Amazon Web Services account to activate your Oracle Database@Amazon Web Services subscription.
 */export const acceptMarketplaceRegistration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-08-20", uri: "/", method: "POST", sdkId: "odb", sigV4ServiceName: "odb", name: "Odb.AcceptMarketplaceRegistration" }, AcceptMarketplaceRegistrationInput, AcceptMarketplaceRegistrationOutput, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

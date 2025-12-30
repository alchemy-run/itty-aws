import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const __listOf__string = S.Array(S.String);
export class CreateApplicationRequest extends S.Class<CreateApplicationRequest>("CreateApplicationRequest")({Author: S.String, Description: S.String, HomePageUrl: S.optional(S.String), Labels: S.optional(__listOf__string), LicenseBody: S.optional(S.String), LicenseUrl: S.optional(S.String), Name: S.String, ReadmeBody: S.optional(S.String), ReadmeUrl: S.optional(S.String), SemanticVersion: S.optional(S.String), SourceCodeArchiveUrl: S.optional(S.String), SourceCodeUrl: S.optional(S.String), SpdxLicenseId: S.optional(S.String), TemplateBody: S.optional(S.String), TemplateUrl: S.optional(S.String)}) {}
export class CreateApplicationVersionRequest extends S.Class<CreateApplicationVersionRequest>("CreateApplicationVersionRequest")({ApplicationId: S.String, SemanticVersion: S.String, SourceCodeArchiveUrl: S.optional(S.String), SourceCodeUrl: S.optional(S.String), TemplateBody: S.optional(S.String), TemplateUrl: S.optional(S.String)}) {}
export class CreateCloudFormationTemplateRequest extends S.Class<CreateCloudFormationTemplateRequest>("CreateCloudFormationTemplateRequest")({ApplicationId: S.String, SemanticVersion: S.optional(S.String)}) {}
export class DeleteApplicationRequest extends S.Class<DeleteApplicationRequest>("DeleteApplicationRequest")({ApplicationId: S.String}) {}
export class GetApplicationRequest extends S.Class<GetApplicationRequest>("GetApplicationRequest")({ApplicationId: S.String, SemanticVersion: S.optional(S.String)}) {}
export class GetApplicationPolicyRequest extends S.Class<GetApplicationPolicyRequest>("GetApplicationPolicyRequest")({ApplicationId: S.String}) {}
export class GetCloudFormationTemplateRequest extends S.Class<GetCloudFormationTemplateRequest>("GetCloudFormationTemplateRequest")({ApplicationId: S.String, TemplateId: S.String}) {}
export class ListApplicationDependenciesRequest extends S.Class<ListApplicationDependenciesRequest>("ListApplicationDependenciesRequest")({ApplicationId: S.String, MaxItems: S.optional(S.Number), NextToken: S.optional(S.String), SemanticVersion: S.optional(S.String)}) {}
export class ListApplicationsRequest extends S.Class<ListApplicationsRequest>("ListApplicationsRequest")({MaxItems: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListApplicationVersionsRequest extends S.Class<ListApplicationVersionsRequest>("ListApplicationVersionsRequest")({ApplicationId: S.String, MaxItems: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class UnshareApplicationRequest extends S.Class<UnshareApplicationRequest>("UnshareApplicationRequest")({ApplicationId: S.String, OrganizationId: S.String}) {}
export class UpdateApplicationRequest extends S.Class<UpdateApplicationRequest>("UpdateApplicationRequest")({ApplicationId: S.String, Author: S.optional(S.String), Description: S.optional(S.String), HomePageUrl: S.optional(S.String), Labels: S.optional(__listOf__string), ReadmeBody: S.optional(S.String), ReadmeUrl: S.optional(S.String)}) {}
export const __listOfCapability = S.Array(S.String);
export class ParameterValue extends S.Class<ParameterValue>("ParameterValue")({Name: S.String, Value: S.String}) {}
export const __listOfParameterValue = S.Array(ParameterValue);
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const __listOfTag = S.Array(Tag);
export class ApplicationPolicyStatement extends S.Class<ApplicationPolicyStatement>("ApplicationPolicyStatement")({Actions: __listOf__string, PrincipalOrgIDs: S.optional(__listOf__string), Principals: __listOf__string, StatementId: S.optional(S.String)}) {}
export const __listOfApplicationPolicyStatement = S.Array(ApplicationPolicyStatement);
export class CreateCloudFormationTemplateResponse extends S.Class<CreateCloudFormationTemplateResponse>("CreateCloudFormationTemplateResponse")({ApplicationId: S.optional(S.String), CreationTime: S.optional(S.String), ExpirationTime: S.optional(S.String), SemanticVersion: S.optional(S.String), Status: S.optional(S.String), TemplateId: S.optional(S.String), TemplateUrl: S.optional(S.String)}) {}
export class ParameterDefinition extends S.Class<ParameterDefinition>("ParameterDefinition")({AllowedPattern: S.optional(S.String), AllowedValues: S.optional(__listOf__string), ConstraintDescription: S.optional(S.String), DefaultValue: S.optional(S.String), Description: S.optional(S.String), MaxLength: S.optional(S.Number), MaxValue: S.optional(S.Number), MinLength: S.optional(S.Number), MinValue: S.optional(S.Number), Name: S.String, NoEcho: S.optional(S.Boolean), ReferencedByResources: __listOf__string, Type: S.optional(S.String)}) {}
export const __listOfParameterDefinition = S.Array(ParameterDefinition);
export class Version extends S.Class<Version>("Version")({ApplicationId: S.String, CreationTime: S.String, ParameterDefinitions: __listOfParameterDefinition, RequiredCapabilities: __listOfCapability, ResourcesSupported: S.Boolean, SemanticVersion: S.String, SourceCodeArchiveUrl: S.optional(S.String), SourceCodeUrl: S.optional(S.String), TemplateUrl: S.String}) {}
export class GetApplicationResponse extends S.Class<GetApplicationResponse>("GetApplicationResponse")({ApplicationId: S.optional(S.String), Author: S.optional(S.String), CreationTime: S.optional(S.String), Description: S.optional(S.String), HomePageUrl: S.optional(S.String), IsVerifiedAuthor: S.optional(S.Boolean), Labels: S.optional(__listOf__string), LicenseUrl: S.optional(S.String), Name: S.optional(S.String), ReadmeUrl: S.optional(S.String), SpdxLicenseId: S.optional(S.String), VerifiedAuthorUrl: S.optional(S.String), Version: S.optional(Version)}) {}
export class GetApplicationPolicyResponse extends S.Class<GetApplicationPolicyResponse>("GetApplicationPolicyResponse")({Statements: S.optional(__listOfApplicationPolicyStatement)}) {}
export class GetCloudFormationTemplateResponse extends S.Class<GetCloudFormationTemplateResponse>("GetCloudFormationTemplateResponse")({ApplicationId: S.optional(S.String), CreationTime: S.optional(S.String), ExpirationTime: S.optional(S.String), SemanticVersion: S.optional(S.String), Status: S.optional(S.String), TemplateId: S.optional(S.String), TemplateUrl: S.optional(S.String)}) {}
export class PutApplicationPolicyRequest extends S.Class<PutApplicationPolicyRequest>("PutApplicationPolicyRequest")({ApplicationId: S.String, Statements: __listOfApplicationPolicyStatement}) {}
export class UpdateApplicationResponse extends S.Class<UpdateApplicationResponse>("UpdateApplicationResponse")({ApplicationId: S.optional(S.String), Author: S.optional(S.String), CreationTime: S.optional(S.String), Description: S.optional(S.String), HomePageUrl: S.optional(S.String), IsVerifiedAuthor: S.optional(S.Boolean), Labels: S.optional(__listOf__string), LicenseUrl: S.optional(S.String), Name: S.optional(S.String), ReadmeUrl: S.optional(S.String), SpdxLicenseId: S.optional(S.String), VerifiedAuthorUrl: S.optional(S.String), Version: S.optional(Version)}) {}
export class RollbackTrigger extends S.Class<RollbackTrigger>("RollbackTrigger")({Arn: S.String, Type: S.String}) {}
export const __listOfRollbackTrigger = S.Array(RollbackTrigger);
export class RollbackConfiguration extends S.Class<RollbackConfiguration>("RollbackConfiguration")({MonitoringTimeInMinutes: S.optional(S.Number), RollbackTriggers: S.optional(__listOfRollbackTrigger)}) {}
export class ApplicationDependencySummary extends S.Class<ApplicationDependencySummary>("ApplicationDependencySummary")({ApplicationId: S.String, SemanticVersion: S.String}) {}
export const __listOfApplicationDependencySummary = S.Array(ApplicationDependencySummary);
export class ApplicationSummary extends S.Class<ApplicationSummary>("ApplicationSummary")({ApplicationId: S.String, Author: S.String, CreationTime: S.optional(S.String), Description: S.String, HomePageUrl: S.optional(S.String), Labels: S.optional(__listOf__string), Name: S.String, SpdxLicenseId: S.optional(S.String)}) {}
export const __listOfApplicationSummary = S.Array(ApplicationSummary);
export class VersionSummary extends S.Class<VersionSummary>("VersionSummary")({ApplicationId: S.String, CreationTime: S.String, SemanticVersion: S.String, SourceCodeUrl: S.optional(S.String)}) {}
export const __listOfVersionSummary = S.Array(VersionSummary);
export class CreateApplicationResponse extends S.Class<CreateApplicationResponse>("CreateApplicationResponse")({ApplicationId: S.optional(S.String), Author: S.optional(S.String), CreationTime: S.optional(S.String), Description: S.optional(S.String), HomePageUrl: S.optional(S.String), IsVerifiedAuthor: S.optional(S.Boolean), Labels: S.optional(__listOf__string), LicenseUrl: S.optional(S.String), Name: S.optional(S.String), ReadmeUrl: S.optional(S.String), SpdxLicenseId: S.optional(S.String), VerifiedAuthorUrl: S.optional(S.String), Version: S.optional(Version)}) {}
export class CreateApplicationVersionResponse extends S.Class<CreateApplicationVersionResponse>("CreateApplicationVersionResponse")({ApplicationId: S.optional(S.String), CreationTime: S.optional(S.String), ParameterDefinitions: S.optional(__listOfParameterDefinition), RequiredCapabilities: S.optional(__listOfCapability), ResourcesSupported: S.optional(S.Boolean), SemanticVersion: S.optional(S.String), SourceCodeArchiveUrl: S.optional(S.String), SourceCodeUrl: S.optional(S.String), TemplateUrl: S.optional(S.String)}) {}
export class CreateCloudFormationChangeSetRequest extends S.Class<CreateCloudFormationChangeSetRequest>("CreateCloudFormationChangeSetRequest")({ApplicationId: S.String, Capabilities: S.optional(__listOf__string), ChangeSetName: S.optional(S.String), ClientToken: S.optional(S.String), Description: S.optional(S.String), NotificationArns: S.optional(__listOf__string), ParameterOverrides: S.optional(__listOfParameterValue), ResourceTypes: S.optional(__listOf__string), RollbackConfiguration: S.optional(RollbackConfiguration), SemanticVersion: S.optional(S.String), StackName: S.String, Tags: S.optional(__listOfTag), TemplateId: S.optional(S.String)}) {}
export class ListApplicationDependenciesResponse extends S.Class<ListApplicationDependenciesResponse>("ListApplicationDependenciesResponse")({Dependencies: S.optional(__listOfApplicationDependencySummary), NextToken: S.optional(S.String)}) {}
export class ListApplicationsResponse extends S.Class<ListApplicationsResponse>("ListApplicationsResponse")({Applications: S.optional(__listOfApplicationSummary), NextToken: S.optional(S.String)}) {}
export class ListApplicationVersionsResponse extends S.Class<ListApplicationVersionsResponse>("ListApplicationVersionsResponse")({NextToken: S.optional(S.String), Versions: S.optional(__listOfVersionSummary)}) {}
export class PutApplicationPolicyResponse extends S.Class<PutApplicationPolicyResponse>("PutApplicationPolicyResponse")({Statements: S.optional(__listOfApplicationPolicyStatement)}) {}
export class CreateCloudFormationChangeSetResponse extends S.Class<CreateCloudFormationChangeSetResponse>("CreateCloudFormationChangeSetResponse")({ApplicationId: S.optional(S.String), ChangeSetId: S.optional(S.String), SemanticVersion: S.optional(S.String), StackId: S.optional(S.String)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class InternalServerErrorException extends S.TaggedError<InternalServerErrorException>()("InternalServerErrorException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};

//# Operations
/**
 * Gets the specified AWS CloudFormation template.
 */export const getCloudFormationTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications/{ApplicationId}/templates/{TemplateId}", method: "GET", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.GetCloudFormationTemplate" }, GetCloudFormationTemplateRequest, GetCloudFormationTemplateResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Unshares an application from an AWS Organization.
 * 
 * This operation can be called only from the organization's master account.
 */export const unshareApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications/{ApplicationId}/unshare", method: "POST", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.UnshareApplication" }, UnshareApplicationRequest, S.Struct({}), [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified application.
 */export const updateApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications/{ApplicationId}", method: "PATCH", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.UpdateApplication" }, UpdateApplicationRequest, UpdateApplicationResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an application, optionally including an AWS SAM file to create the first application version in the same call.
 */export const createApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications", method: "POST", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.CreateApplication" }, CreateApplicationRequest, CreateApplicationResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an application version.
 */export const createApplicationVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications/{ApplicationId}/versions/{SemanticVersion}", method: "PUT", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.CreateApplicationVersion" }, CreateApplicationVersionRequest, CreateApplicationVersionResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an AWS CloudFormation template.
 */export const createCloudFormationTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications/{ApplicationId}/templates", method: "POST", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.CreateCloudFormationTemplate" }, CreateCloudFormationTemplateRequest, CreateCloudFormationTemplateResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified application.
 */export const deleteApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications/{ApplicationId}", method: "DELETE", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.DeleteApplication" }, DeleteApplicationRequest, S.Struct({}), [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the specified application.
 */export const getApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications/{ApplicationId}", method: "GET", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.GetApplication" }, GetApplicationRequest, GetApplicationResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the policy for the application.
 */export const getApplicationPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications/{ApplicationId}/policy", method: "GET", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.GetApplicationPolicy" }, GetApplicationPolicyRequest, GetApplicationPolicyResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the list of applications nested in the containing application.
 */export const listApplicationDependencies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications/{ApplicationId}/dependencies", method: "GET", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.ListApplicationDependencies" }, ListApplicationDependenciesRequest, ListApplicationDependenciesResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists applications owned by the requester.
 */export const listApplications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications", method: "GET", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.ListApplications" }, ListApplicationsRequest, ListApplicationsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists versions for the specified application.
 */export const listApplicationVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications/{ApplicationId}/versions", method: "GET", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.ListApplicationVersions" }, ListApplicationVersionsRequest, ListApplicationVersionsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the permission policy for an application. For the list of actions supported for this operation, see
 * Application
 * Permissions
 * .
 */export const putApplicationPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications/{ApplicationId}/policy", method: "PUT", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.PutApplicationPolicy" }, PutApplicationPolicyRequest, PutApplicationPolicyResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an AWS CloudFormation change set for the given application.
 */export const createCloudFormationChangeSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-08", uri: "/applications/{ApplicationId}/changesets", method: "POST", sdkId: "ServerlessApplicationRepository", sigV4ServiceName: "serverlessrepo", name: "ServerlessApplicationRepository.CreateCloudFormationChangeSet" }, CreateCloudFormationChangeSetRequest, CreateCloudFormationChangeSetResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

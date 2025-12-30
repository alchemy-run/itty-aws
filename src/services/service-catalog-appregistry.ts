import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const Options = S.Array(S.String);
export const GetAssociatedResourceFilter = S.Array(S.String);
export const TagKeys = S.Array(S.String);
export class AssociateAttributeGroupRequest extends S.Class<AssociateAttributeGroupRequest>("AssociateAttributeGroupRequest")({application: S.String, attributeGroup: S.String}) {}
export class AssociateResourceRequest extends S.Class<AssociateResourceRequest>("AssociateResourceRequest")({application: S.String, resourceType: S.String, resource: S.String, options: S.optional(Options)}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class CreateAttributeGroupRequest extends S.Class<CreateAttributeGroupRequest>("CreateAttributeGroupRequest")({name: S.String, description: S.optional(S.String), attributes: S.String, tags: S.optional(Tags), clientToken: S.String}) {}
export class DeleteApplicationRequest extends S.Class<DeleteApplicationRequest>("DeleteApplicationRequest")({application: S.String}) {}
export class DeleteAttributeGroupRequest extends S.Class<DeleteAttributeGroupRequest>("DeleteAttributeGroupRequest")({attributeGroup: S.String}) {}
export class DisassociateAttributeGroupRequest extends S.Class<DisassociateAttributeGroupRequest>("DisassociateAttributeGroupRequest")({application: S.String, attributeGroup: S.String}) {}
export class DisassociateResourceRequest extends S.Class<DisassociateResourceRequest>("DisassociateResourceRequest")({application: S.String, resourceType: S.String, resource: S.String}) {}
export class GetApplicationRequest extends S.Class<GetApplicationRequest>("GetApplicationRequest")({application: S.String}) {}
export class GetAssociatedResourceRequest extends S.Class<GetAssociatedResourceRequest>("GetAssociatedResourceRequest")({application: S.String, resourceType: S.String, resource: S.String, nextToken: S.optional(S.String), resourceTagStatus: S.optional(GetAssociatedResourceFilter), maxResults: S.optional(S.Number)}) {}
export class GetAttributeGroupRequest extends S.Class<GetAttributeGroupRequest>("GetAttributeGroupRequest")({attributeGroup: S.String}) {}
export class ListApplicationsRequest extends S.Class<ListApplicationsRequest>("ListApplicationsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAssociatedAttributeGroupsRequest extends S.Class<ListAssociatedAttributeGroupsRequest>("ListAssociatedAttributeGroupsRequest")({application: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAssociatedResourcesRequest extends S.Class<ListAssociatedResourcesRequest>("ListAssociatedResourcesRequest")({application: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAttributeGroupsRequest extends S.Class<ListAttributeGroupsRequest>("ListAttributeGroupsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAttributeGroupsForApplicationRequest extends S.Class<ListAttributeGroupsForApplicationRequest>("ListAttributeGroupsForApplicationRequest")({application: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class TagQueryConfiguration extends S.Class<TagQueryConfiguration>("TagQueryConfiguration")({tagKey: S.optional(S.String)}) {}
export class AppRegistryConfiguration extends S.Class<AppRegistryConfiguration>("AppRegistryConfiguration")({tagQueryConfiguration: S.optional(TagQueryConfiguration)}) {}
export class PutConfigurationRequest extends S.Class<PutConfigurationRequest>("PutConfigurationRequest")({configuration: AppRegistryConfiguration}) {}
export class SyncResourceRequest extends S.Class<SyncResourceRequest>("SyncResourceRequest")({resourceType: S.String, resource: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateApplicationRequest extends S.Class<UpdateApplicationRequest>("UpdateApplicationRequest")({application: S.String, name: S.optional(S.String), description: S.optional(S.String)}) {}
export class UpdateAttributeGroupRequest extends S.Class<UpdateAttributeGroupRequest>("UpdateAttributeGroupRequest")({attributeGroup: S.String, name: S.optional(S.String), description: S.optional(S.String), attributes: S.optional(S.String)}) {}
export class ApplicationSummary extends S.Class<ApplicationSummary>("ApplicationSummary")({id: S.optional(S.String), arn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date)}) {}
export const ApplicationSummaries = S.Array(ApplicationSummary);
export const AttributeGroupIds = S.Array(S.String);
export class AttributeGroupSummary extends S.Class<AttributeGroupSummary>("AttributeGroupSummary")({id: S.optional(S.String), arn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), createdBy: S.optional(S.String)}) {}
export const AttributeGroupSummaries = S.Array(AttributeGroupSummary);
export class AssociateAttributeGroupResponse extends S.Class<AssociateAttributeGroupResponse>("AssociateAttributeGroupResponse")({applicationArn: S.optional(S.String), attributeGroupArn: S.optional(S.String)}) {}
export class AssociateResourceResponse extends S.Class<AssociateResourceResponse>("AssociateResourceResponse")({applicationArn: S.optional(S.String), resourceArn: S.optional(S.String), options: S.optional(Options)}) {}
export class CreateApplicationRequest extends S.Class<CreateApplicationRequest>("CreateApplicationRequest")({name: S.String, description: S.optional(S.String), tags: S.optional(Tags), clientToken: S.String}) {}
export class DisassociateAttributeGroupResponse extends S.Class<DisassociateAttributeGroupResponse>("DisassociateAttributeGroupResponse")({applicationArn: S.optional(S.String), attributeGroupArn: S.optional(S.String)}) {}
export class DisassociateResourceResponse extends S.Class<DisassociateResourceResponse>("DisassociateResourceResponse")({applicationArn: S.optional(S.String), resourceArn: S.optional(S.String)}) {}
export class GetAttributeGroupResponse extends S.Class<GetAttributeGroupResponse>("GetAttributeGroupResponse")({id: S.optional(S.String), arn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), attributes: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), tags: S.optional(Tags), createdBy: S.optional(S.String)}) {}
export class ListApplicationsResponse extends S.Class<ListApplicationsResponse>("ListApplicationsResponse")({applications: S.optional(ApplicationSummaries), nextToken: S.optional(S.String)}) {}
export class ListAssociatedAttributeGroupsResponse extends S.Class<ListAssociatedAttributeGroupsResponse>("ListAssociatedAttributeGroupsResponse")({attributeGroups: S.optional(AttributeGroupIds), nextToken: S.optional(S.String)}) {}
export class ListAttributeGroupsResponse extends S.Class<ListAttributeGroupsResponse>("ListAttributeGroupsResponse")({attributeGroups: S.optional(AttributeGroupSummaries), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(Tags)}) {}
export class SyncResourceResponse extends S.Class<SyncResourceResponse>("SyncResourceResponse")({applicationArn: S.optional(S.String), resourceArn: S.optional(S.String), actionTaken: S.optional(S.String)}) {}
export class AttributeGroup extends S.Class<AttributeGroup>("AttributeGroup")({id: S.optional(S.String), arn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), tags: S.optional(Tags)}) {}
export class UpdateAttributeGroupResponse extends S.Class<UpdateAttributeGroupResponse>("UpdateAttributeGroupResponse")({attributeGroup: S.optional(AttributeGroup)}) {}
export const ApplicationTagDefinition = S.Record({key: S.String, value: S.String});
export class AttributeGroupDetails extends S.Class<AttributeGroupDetails>("AttributeGroupDetails")({id: S.optional(S.String), arn: S.optional(S.String), name: S.optional(S.String), createdBy: S.optional(S.String)}) {}
export const AttributeGroupDetailsList = S.Array(AttributeGroupDetails);
export class Application extends S.Class<Application>("Application")({id: S.optional(S.String), arn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), tags: S.optional(Tags), applicationTag: S.optional(ApplicationTagDefinition)}) {}
export class CreateApplicationResponse extends S.Class<CreateApplicationResponse>("CreateApplicationResponse")({application: S.optional(Application)}) {}
export class CreateAttributeGroupResponse extends S.Class<CreateAttributeGroupResponse>("CreateAttributeGroupResponse")({attributeGroup: S.optional(AttributeGroup)}) {}
export class DeleteApplicationResponse extends S.Class<DeleteApplicationResponse>("DeleteApplicationResponse")({application: S.optional(ApplicationSummary)}) {}
export class DeleteAttributeGroupResponse extends S.Class<DeleteAttributeGroupResponse>("DeleteAttributeGroupResponse")({attributeGroup: S.optional(AttributeGroupSummary)}) {}
export class GetConfigurationResponse extends S.Class<GetConfigurationResponse>("GetConfigurationResponse")({configuration: S.optional(AppRegistryConfiguration)}) {}
export class ListAttributeGroupsForApplicationResponse extends S.Class<ListAttributeGroupsForApplicationResponse>("ListAttributeGroupsForApplicationResponse")({attributeGroupsDetails: S.optional(AttributeGroupDetailsList), nextToken: S.optional(S.String)}) {}
export class UpdateApplicationResponse extends S.Class<UpdateApplicationResponse>("UpdateApplicationResponse")({application: S.optional(Application)}) {}
export class ResourceGroup extends S.Class<ResourceGroup>("ResourceGroup")({state: S.optional(S.String), arn: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export class ResourceIntegrations extends S.Class<ResourceIntegrations>("ResourceIntegrations")({resourceGroup: S.optional(ResourceGroup)}) {}
export class ResourcesListItem extends S.Class<ResourcesListItem>("ResourcesListItem")({resourceArn: S.optional(S.String), errorMessage: S.optional(S.String), status: S.optional(S.String), resourceType: S.optional(S.String)}) {}
export const ResourcesList = S.Array(ResourcesListItem);
export class ResourceDetails extends S.Class<ResourceDetails>("ResourceDetails")({tagValue: S.optional(S.String)}) {}
export class Integrations extends S.Class<Integrations>("Integrations")({resourceGroup: S.optional(ResourceGroup), applicationTagResourceGroup: S.optional(ResourceGroup)}) {}
export class Resource extends S.Class<Resource>("Resource")({name: S.optional(S.String), arn: S.optional(S.String), associationTime: S.optional(S.Date), integrations: S.optional(ResourceIntegrations)}) {}
export class ApplicationTagResult extends S.Class<ApplicationTagResult>("ApplicationTagResult")({applicationTagStatus: S.optional(S.String), errorMessage: S.optional(S.String), resources: S.optional(ResourcesList), nextToken: S.optional(S.String)}) {}
export class ResourceInfo extends S.Class<ResourceInfo>("ResourceInfo")({name: S.optional(S.String), arn: S.optional(S.String), resourceType: S.optional(S.String), resourceDetails: S.optional(ResourceDetails), options: S.optional(Options)}) {}
export const Resources = S.Array(ResourceInfo);
export class GetApplicationResponse extends S.Class<GetApplicationResponse>("GetApplicationResponse")({id: S.optional(S.String), arn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), associatedResourceCount: S.optional(S.Number), tags: S.optional(Tags), integrations: S.optional(Integrations), applicationTag: S.optional(ApplicationTagDefinition)}) {}
export class GetAssociatedResourceResponse extends S.Class<GetAssociatedResourceResponse>("GetAssociatedResourceResponse")({resource: S.optional(Resource), options: S.optional(Options), applicationTagResult: S.optional(ApplicationTagResult)}) {}
export class ListAssociatedResourcesResponse extends S.Class<ListAssociatedResourcesResponse>("ListAssociatedResourcesResponse")({resources: S.optional(Resources), nextToken: S.optional(S.String)}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * Disassociates a resource from application.
 * Both the resource and the application can be specified either by ID or name.
 * 
 * 
 * 
 * 
 * **Minimum permissions**
 * 
 * 
 * 
 * 
 * You must have the following permissions to remove a resource that's been associated with an application using the `APPLY_APPLICATION_TAG` option for AssociateResource.
 * 
 * 
 * 
 * 
 * - `tag:GetResources`
 * 
 * 
 * 
 * 
 * - `tag:UntagResources`
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * You must also have the following permissions if you don't use the `AWSServiceCatalogAppRegistryFullAccess` policy.
 * For more information, see AWSServiceCatalogAppRegistryFullAccess in the AppRegistry Administrator Guide.
 * 
 * 
 * 
 * 
 * - `resource-groups:DisassociateResource`
 * 
 * 
 * 
 * 
 * - `cloudformation:UpdateStack`
 * 
 * 
 * 
 * 
 * - `cloudformation:DescribeStacks`
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * In addition, you must have the tagging permission defined by the Amazon Web Services service that creates the resource.
 * For more information, see UntagResources in the *Resource Groups Tagging API Reference*.
 */export const disassociateResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/applications/{application}/resources/{resourceType}/{resource}", method: "DELETE", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.DisassociateResource" }, DisassociateResourceRequest, DisassociateResourceResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves an attribute group
 * by its ARN, ID, or name.
 * The attribute group can be specified
 * by its ARN, ID, or name.
 */export const getAttributeGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/attribute-groups/{attributeGroup}", method: "GET", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.GetAttributeGroup" }, GetAttributeGroupRequest, GetAttributeGroupResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of all of your applications. Results are paginated.
 */export const listApplications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/applications", method: "GET", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.ListApplications" }, ListApplicationsRequest, ListApplicationsResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all attribute groups that are associated with specified application. Results are paginated.
 */export const listAssociatedAttributeGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/applications/{application}/attribute-groups", method: "GET", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.ListAssociatedAttributeGroups" }, ListAssociatedAttributeGroupsRequest, ListAssociatedAttributeGroupsResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all attribute groups which you have access to. Results are paginated.
 */export const listAttributeGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/attribute-groups", method: "GET", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.ListAttributeGroups" }, ListAttributeGroupsRequest, ListAttributeGroupsResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all of the tags on the resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a `TagKey` configuration
 * to an account.
 */export const putConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/configuration", method: "PUT", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.PutConfiguration" }, PutConfigurationRequest, S.Struct({}), [ConflictException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Syncs the resource with current AppRegistry records.
 * 
 * 
 * Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.
 */export const syncResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/sync/{resourceType}/{resource}", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.SyncResource" }, SyncResourceRequest, SyncResourceResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns one or more tags (key-value pairs) to the specified resource.
 * 
 * 
 * Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.
 * 
 * 
 * This operation returns an empty response if the call was successful.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/tags/{resourceArn}", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from a resource.
 * 
 * 
 * This operation returns an empty response if the call was successful.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing attribute group with new details.
 */export const updateAttributeGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/attribute-groups/{attributeGroup}", method: "PATCH", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.UpdateAttributeGroup" }, UpdateAttributeGroupRequest, UpdateAttributeGroupResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates an attribute group with an application to augment the application's metadata
 * with the group's attributes. This feature enables applications to be described with
 * user-defined details that are machine-readable, such as third-party integrations.
 */export const associateAttributeGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/applications/{application}/attribute-groups/{attributeGroup}", method: "PUT", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.AssociateAttributeGroup" }, AssociateAttributeGroupRequest, AssociateAttributeGroupResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a resource with an application.
 * The resource can be specified by its ARN or name.
 * The application can be specified by ARN, ID, or name.
 * 
 * 
 * 
 * 
 * **Minimum permissions**
 * 
 * 
 * 
 * 
 * You must have the following permissions to associate a resource using the `OPTIONS` parameter set to `APPLY_APPLICATION_TAG`.
 * 
 * 
 * 
 * 
 * - `tag:GetResources`
 * 
 * 
 * 
 * 
 * - `tag:TagResources`
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * You must also have these additional permissions if you don't use the `AWSServiceCatalogAppRegistryFullAccess` policy.
 * For more information, see AWSServiceCatalogAppRegistryFullAccess in the AppRegistry Administrator Guide.
 * 
 * 
 * 
 * 
 * - `resource-groups:AssociateResource`
 * 
 * 
 * 
 * 
 * - `cloudformation:UpdateStack`
 * 
 * 
 * 
 * 
 * - `cloudformation:DescribeStacks`
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * In addition, you must have the tagging permission defined by the Amazon Web Services service that creates the resource.
 * For more information, see TagResources in the *Resource Groups Tagging API Reference*.
 */export const associateResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/applications/{application}/resources/{resourceType}/{resource}", method: "PUT", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.AssociateResource" }, AssociateResourceRequest, AssociateResourceResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.
 */export const createApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/applications", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.CreateApplication" }, CreateApplicationRequest, CreateApplicationResponse, [ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new attribute group as a container for user-defined attributes. This feature
 * enables users to have full control over their cloud application's metadata in a rich
 * machine-readable format to facilitate integration with automated workflows and third-party
 * tools.
 */export const createAttributeGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/attribute-groups", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.CreateAttributeGroup" }, CreateAttributeGroupRequest, CreateAttributeGroupResponse, [ConflictException, InternalServerException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.
 */export const deleteApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/applications/{application}", method: "DELETE", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.DeleteApplication" }, DeleteApplicationRequest, DeleteApplicationResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an attribute group, specified either by its attribute group ID, name, or ARN.
 */export const deleteAttributeGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/attribute-groups/{attributeGroup}", method: "DELETE", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.DeleteAttributeGroup" }, DeleteAttributeGroupRequest, DeleteAttributeGroupResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts `AssociateAttributeGroup`.
 */export const disassociateAttributeGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/applications/{application}/attribute-groups/{attributeGroup}", method: "DELETE", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.DisassociateAttributeGroup" }, DisassociateAttributeGroupRequest, DisassociateAttributeGroupResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a `TagKey` configuration
 * from an account.
 */export const getConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/configuration", method: "GET", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.GetConfiguration" }, S.Struct({}), GetConfigurationResponse, [InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the details of all attribute groups associated with a specific application. The results display in pages.
 */export const listAttributeGroupsForApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/applications/{application}/attribute-group-details", method: "GET", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.ListAttributeGroupsForApplication" }, ListAttributeGroupsForApplicationRequest, ListAttributeGroupsForApplicationResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing application with new attributes.
 */export const updateApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/applications/{application}", method: "PATCH", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.UpdateApplication" }, UpdateApplicationRequest, UpdateApplicationResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves metadata information
 * about one
 * of your applications.
 * The application can be specified
 * by its ARN, ID, or name
 * (which is unique
 * within one account
 * in one region
 * at a given point
 * in time).
 * Specify
 * by ARN or ID
 * in automated workflows
 * if you want
 * to make sure
 * that the exact same application is returned or a `ResourceNotFoundException` is thrown,
 * avoiding the ABA addressing problem.
 */export const getApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/applications/{application}", method: "GET", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.GetApplication" }, GetApplicationRequest, GetApplicationResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the resource associated with the application.
 */export const getAssociatedResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/applications/{application}/resources/{resourceType}/{resource}", method: "GET", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.GetAssociatedResource" }, GetAssociatedResourceRequest, GetAssociatedResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all
 * of the resources
 * that are associated
 * with the specified application.
 * Results are paginated.
 * 
 * 
 * 
 * 
 * 
 * 
 * If you share an application,
 * and a consumer account associates a tag query
 * to the application,
 * all of the users
 * who can access the application
 * can also view the tag values
 * in all accounts
 * that are associated
 * with it
 * using this API.
 */export const listAssociatedResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-06-24", uri: "/applications/{application}/resources", method: "GET", sdkId: "Service Catalog AppRegistry", sigV4ServiceName: "servicecatalog", name: "AWS242AppRegistry.ListAssociatedResources" }, ListAssociatedResourcesRequest, ListAssociatedResourcesResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ViewArnList = S.Array(S.String);
export const RegionList = S.Array(S.String);
export const AccountIdList = S.Array(S.String);
export const StringList = S.Array(S.String);
export class BatchGetViewInput extends S.Class<BatchGetViewInput>("BatchGetViewInput")({ViewArns: S.optional(ViewArnList)}) {}
export class CreateResourceExplorerSetupInput extends S.Class<CreateResourceExplorerSetupInput>("CreateResourceExplorerSetupInput")({RegionList: RegionList, AggregatorRegions: S.optional(RegionList), ViewName: S.String}) {}
export class DeleteResourceExplorerSetupInput extends S.Class<DeleteResourceExplorerSetupInput>("DeleteResourceExplorerSetupInput")({RegionList: S.optional(RegionList), DeleteInAllRegions: S.optional(S.Boolean)}) {}
export class GetDefaultViewOutput extends S.Class<GetDefaultViewOutput>("GetDefaultViewOutput")({ViewArn: S.optional(S.String)}) {}
export class GetManagedViewInput extends S.Class<GetManagedViewInput>("GetManagedViewInput")({ManagedViewArn: S.String}) {}
export class GetResourceExplorerSetupInput extends S.Class<GetResourceExplorerSetupInput>("GetResourceExplorerSetupInput")({TaskId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetServiceIndexOutput extends S.Class<GetServiceIndexOutput>("GetServiceIndexOutput")({Arn: S.optional(S.String), Type: S.optional(S.String)}) {}
export class GetServiceViewInput extends S.Class<GetServiceViewInput>("GetServiceViewInput")({ServiceViewArn: S.String}) {}
export class ListIndexesForMembersInput extends S.Class<ListIndexesForMembersInput>("ListIndexesForMembersInput")({AccountIdList: AccountIdList, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListManagedViewsInput extends S.Class<ListManagedViewsInput>("ListManagedViewsInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ServicePrincipal: S.optional(S.String)}) {}
export class ListServiceIndexesInput extends S.Class<ListServiceIndexesInput>("ListServiceIndexesInput")({Regions: S.optional(RegionList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListServiceViewsInput extends S.Class<ListServiceViewsInput>("ListServiceViewsInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListStreamingAccessForServicesInput extends S.Class<ListStreamingAccessForServicesInput>("ListStreamingAccessForServicesInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListSupportedResourceTypesInput extends S.Class<ListSupportedResourceTypesInput>("ListSupportedResourceTypesInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: S.String}) {}
export class SearchInput extends S.Class<SearchInput>("SearchInput")({QueryString: S.String, MaxResults: S.optional(S.Number), ViewArn: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({resourceArn: S.String, Tags: S.optional(TagMap)}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: S.String, tagKeys: StringList}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export class OrgConfiguration extends S.Class<OrgConfiguration>("OrgConfiguration")({AWSServiceAccessStatus: S.String, ServiceLinkedRole: S.optional(S.String)}) {}
export const ManagedViewArnList = S.Array(S.String);
export class SearchFilter extends S.Class<SearchFilter>("SearchFilter")({FilterString: S.String}) {}
export const ServiceViewArnList = S.Array(S.String);
export class CreateResourceExplorerSetupOutput extends S.Class<CreateResourceExplorerSetupOutput>("CreateResourceExplorerSetupOutput")({TaskId: S.String}) {}
export class DeleteResourceExplorerSetupOutput extends S.Class<DeleteResourceExplorerSetupOutput>("DeleteResourceExplorerSetupOutput")({TaskId: S.String}) {}
export class GetAccountLevelServiceConfigurationOutput extends S.Class<GetAccountLevelServiceConfigurationOutput>("GetAccountLevelServiceConfigurationOutput")({OrgConfiguration: S.optional(OrgConfiguration)}) {}
export class GetIndexOutput extends S.Class<GetIndexOutput>("GetIndexOutput")({Arn: S.optional(S.String), Type: S.optional(S.String), State: S.optional(S.String), ReplicatingFrom: S.optional(RegionList), ReplicatingTo: S.optional(RegionList), CreatedAt: S.optional(S.Date), LastUpdatedAt: S.optional(S.Date), Tags: S.optional(TagMap)}) {}
export class ListManagedViewsOutput extends S.Class<ListManagedViewsOutput>("ListManagedViewsOutput")({NextToken: S.optional(S.String), ManagedViews: S.optional(ManagedViewArnList)}) {}
export class ListResourcesInput extends S.Class<ListResourcesInput>("ListResourcesInput")({Filters: S.optional(SearchFilter), MaxResults: S.optional(S.Number), ViewArn: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListServiceViewsOutput extends S.Class<ListServiceViewsOutput>("ListServiceViewsOutput")({NextToken: S.optional(S.String), ServiceViews: S.optional(ServiceViewArnList)}) {}
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({Tags: S.optional(TagMap)}) {}
export class BatchGetViewError extends S.Class<BatchGetViewError>("BatchGetViewError")({ViewArn: S.String, ErrorMessage: S.String}) {}
export const BatchGetViewErrors = S.Array(BatchGetViewError);
export class IncludedProperty extends S.Class<IncludedProperty>("IncludedProperty")({Name: S.String}) {}
export const IncludedPropertyList = S.Array(IncludedProperty);
export class ManagedView extends S.Class<ManagedView>("ManagedView")({ManagedViewArn: S.optional(S.String), ManagedViewName: S.optional(S.String), TrustedService: S.optional(S.String), LastUpdatedAt: S.optional(S.Date), Owner: S.optional(S.String), Scope: S.optional(S.String), IncludedProperties: S.optional(IncludedPropertyList), Filters: S.optional(SearchFilter), ResourcePolicy: S.optional(S.String), Version: S.optional(S.String)}) {}
export class ServiceView extends S.Class<ServiceView>("ServiceView")({ServiceViewArn: S.String, Filters: S.optional(SearchFilter), IncludedProperties: S.optional(IncludedPropertyList), StreamingAccessForService: S.optional(S.String), ScopeType: S.optional(S.String)}) {}
export class MemberIndex extends S.Class<MemberIndex>("MemberIndex")({AccountId: S.optional(S.String), Region: S.optional(S.String), Arn: S.optional(S.String), Type: S.optional(S.String)}) {}
export const MemberIndexList = S.Array(MemberIndex);
export class Index extends S.Class<Index>("Index")({Region: S.optional(S.String), Arn: S.optional(S.String), Type: S.optional(S.String)}) {}
export const IndexList = S.Array(Index);
export class StreamingAccessDetails extends S.Class<StreamingAccessDetails>("StreamingAccessDetails")({ServicePrincipal: S.String, CreatedAt: S.Date}) {}
export const StreamingAccessDetailsList = S.Array(StreamingAccessDetails);
export class SupportedResourceType extends S.Class<SupportedResourceType>("SupportedResourceType")({Service: S.optional(S.String), ResourceType: S.optional(S.String)}) {}
export const ResourceTypeList = S.Array(SupportedResourceType);
export class ResourceCount extends S.Class<ResourceCount>("ResourceCount")({TotalResources: S.optional(S.Number), Complete: S.optional(S.Boolean)}) {}
export class GetManagedViewOutput extends S.Class<GetManagedViewOutput>("GetManagedViewOutput")({ManagedView: S.optional(ManagedView)}) {}
export class GetServiceViewOutput extends S.Class<GetServiceViewOutput>("GetServiceViewOutput")({View: ServiceView}) {}
export class ListIndexesForMembersOutput extends S.Class<ListIndexesForMembersOutput>("ListIndexesForMembersOutput")({Indexes: S.optional(MemberIndexList), NextToken: S.optional(S.String)}) {}
export class ResourceProperty extends S.Class<ResourceProperty>("ResourceProperty")({Name: S.optional(S.String), LastReportedAt: S.optional(S.Date), Data: S.optional(S.Any)}) {}
export const ResourcePropertyList = S.Array(ResourceProperty);
export class Resource extends S.Class<Resource>("Resource")({Arn: S.optional(S.String), OwningAccountId: S.optional(S.String), Region: S.optional(S.String), ResourceType: S.optional(S.String), Service: S.optional(S.String), LastReportedAt: S.optional(S.Date), Properties: S.optional(ResourcePropertyList)}) {}
export const ResourceList = S.Array(Resource);
export class ListResourcesOutput extends S.Class<ListResourcesOutput>("ListResourcesOutput")({Resources: S.optional(ResourceList), NextToken: S.optional(S.String), ViewArn: S.optional(S.String)}) {}
export class ListServiceIndexesOutput extends S.Class<ListServiceIndexesOutput>("ListServiceIndexesOutput")({Indexes: S.optional(IndexList), NextToken: S.optional(S.String)}) {}
export class ListStreamingAccessForServicesOutput extends S.Class<ListStreamingAccessForServicesOutput>("ListStreamingAccessForServicesOutput")({StreamingAccessForServices: StreamingAccessDetailsList, NextToken: S.optional(S.String)}) {}
export class ListSupportedResourceTypesOutput extends S.Class<ListSupportedResourceTypesOutput>("ListSupportedResourceTypesOutput")({ResourceTypes: S.optional(ResourceTypeList), NextToken: S.optional(S.String)}) {}
export class View extends S.Class<View>("View")({ViewArn: S.optional(S.String), Owner: S.optional(S.String), LastUpdatedAt: S.optional(S.Date), Scope: S.optional(S.String), IncludedProperties: S.optional(IncludedPropertyList), Filters: S.optional(SearchFilter)}) {}
export class ErrorDetails extends S.Class<ErrorDetails>("ErrorDetails")({Code: S.optional(S.String), Message: S.optional(S.String)}) {}
export class ViewStatus extends S.Class<ViewStatus>("ViewStatus")({Status: S.optional(S.String), View: S.optional(View), ErrorDetails: S.optional(ErrorDetails)}) {}
export const ViewList = S.Array(View);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({Name: S.String, ValidationIssue: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class BatchGetViewOutput extends S.Class<BatchGetViewOutput>("BatchGetViewOutput")({Views: S.optional(ViewList), Errors: S.optional(BatchGetViewErrors)}) {}
export class SearchOutput extends S.Class<SearchOutput>("SearchOutput")({Resources: S.optional(ResourceList), NextToken: S.optional(S.String), ViewArn: S.optional(S.String), Count: S.optional(ResourceCount)}) {}
export class IndexStatus extends S.Class<IndexStatus>("IndexStatus")({Status: S.optional(S.String), Index: S.optional(Index), ErrorDetails: S.optional(ErrorDetails)}) {}
export class RegionStatus extends S.Class<RegionStatus>("RegionStatus")({Region: S.optional(S.String), Index: S.optional(IndexStatus), View: S.optional(ViewStatus)}) {}
export const RegionStatusList = S.Array(RegionStatus);
export class GetResourceExplorerSetupOutput extends S.Class<GetResourceExplorerSetupOutput>("GetResourceExplorerSetupOutput")({Regions: S.optional(RegionStatusList), NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {Message: S.optional(S.String)}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};

//# Operations
/**
 * Deletes a Resource Explorer setup configuration. This operation removes indexes and views from the specified Regions or all Regions where Resource Explorer is configured.
 */export const deleteResourceExplorerSetup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/DeleteResourceExplorerSetup", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.DeleteResourceExplorerSetup" }, DeleteResourceExplorerSetupInput, DeleteResourceExplorerSetupOutput, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * After you call this operation, the affected Amazon Web Services Region no longer has a default view. All Search operations in that Region must explicitly specify a view or the operation fails. You can configure a new default by calling the AssociateDefaultView operation.
 * 
 * If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every `Search` operation performed in that Region.
 */export const disassociateDefaultView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/DisassociateDefaultView", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.DisassociateDefaultView" }, S.Struct({}), S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the status of your account's Amazon Web Services service access, and validates the service linked role required to access the multi-account search feature. Only the management account can invoke this API call.
 */export const getAccountLevelServiceConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/GetAccountLevelServiceConfiguration", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.GetAccountLevelServiceConfiguration" }, S.Struct({}), GetAccountLevelServiceConfigurationOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the Amazon Resource Name (ARN) of the view that is the default for the Amazon Web Services Region in which you call this operation. You can then call GetView to retrieve the details of that view.
 */export const getDefaultView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/GetDefaultView", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.GetDefaultView" }, S.Struct({}), GetDefaultViewOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details about the Amazon Web Services Resource Explorer index in the Amazon Web Services Region in which you invoked the operation.
 */export const getIndex = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/GetIndex", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.GetIndex" }, S.Struct({}), GetIndexOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the Resource Explorer index in the current Amazon Web Services Region. This operation returns the ARN and type of the index if one exists.
 */export const getServiceIndex = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/GetServiceIndex", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.GetServiceIndex" }, S.Struct({}), GetServiceIndexOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Amazon resource names (ARNs) of the Amazon Web Services-managed views available in the Amazon Web Services Region in which you call this operation.
 */export const listManagedViews = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/ListManagedViews", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.ListManagedViews" }, ListManagedViewsInput, ListManagedViewsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all Resource Explorer service views available in the current Amazon Web Services account. This operation returns the ARNs of available service views.
 */export const listServiceViews = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/ListServiceViews", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.ListServiceViews" }, ListServiceViewsInput, ListServiceViewsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags that are attached to the specified resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more tag key and value pairs to an Amazon Web Services Resource Explorer view or index.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.TagResource" }, TagResourceInput, TagResourceOutput, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more tag key and value pairs from an Amazon Web Services Resource Explorer view or index.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.UntagResource" }, UntagResourceInput, UntagResourceOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details of the specified Amazon Web Services-managed view.
 */export const getManagedView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/GetManagedView", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.GetManagedView" }, GetManagedViewInput, GetManagedViewOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details about a specific Resource Explorer service view. This operation returns the configuration and properties of the specified view.
 */export const getServiceView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/GetServiceView", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.GetServiceView" }, GetServiceViewInput, GetServiceViewOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of a member's indexes in all Amazon Web Services Regions that are currently collecting resource information for Amazon Web Services Resource Explorer. Only the management account or a delegated administrator with service access enabled can invoke this API call.
 */export const listIndexesForMembers = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/ListIndexesForMembers", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.ListIndexesForMembers" }, ListIndexesForMembersInput, ListIndexesForMembersOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of resources and their details that match the specified criteria. This query must use a view. If you don’t explicitly specify a view, then Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation.
 */export const listResources = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/ListResources", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.ListResources" }, ListResourcesInput, ListResourcesOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all Resource Explorer indexes across the specified Amazon Web Services Regions. This operation returns information about indexes including their ARNs, types, and Regions.
 */export const listServiceIndexes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/ListServiceIndexes", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.ListServiceIndexes" }, ListServiceIndexesInput, ListServiceIndexesOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of Amazon Web Services services that have been granted streaming access to your Resource Explorer data. Streaming access allows Amazon Web Services services to receive real-time updates about your resources as they are indexed by Resource Explorer.
 */export const listStreamingAccessForServices = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/ListStreamingAccessForServices", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.ListStreamingAccessForServices" }, ListStreamingAccessForServicesInput, ListStreamingAccessForServicesOutput, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of all resource types currently supported by Amazon Web Services Resource Explorer.
 */export const listSupportedResourceTypes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/ListSupportedResourceTypes", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.ListSupportedResourceTypes" }, ListSupportedResourceTypesInput, ListSupportedResourceTypesOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details about a list of views.
 */export const batchGetView = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/BatchGetView", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.BatchGetView" }, BatchGetViewInput, BatchGetViewOutput, [AccessDeniedException, InternalServerException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Resource Explorer setup configuration across multiple Amazon Web Services Regions. This operation sets up indexes and views in the specified Regions. This operation can also be used to set an aggregator Region for cross-Region resource search.
 */export const createResourceExplorerSetup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/CreateResourceExplorerSetup", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.CreateResourceExplorerSetup" }, CreateResourceExplorerSetupInput, CreateResourceExplorerSetupOutput, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Searches for resources and displays details about all resources that match the specified criteria. You must specify a query string.
 * 
 * All search queries must use a view. If you don't explicitly specify a view, then Amazon Web Services Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation. The results are the logical intersection of the results that match both the `QueryString` parameter supplied to this operation and the `SearchFilter` parameter attached to the view.
 * 
 * For the complete syntax supported by the `QueryString` parameter, see Search query syntax reference for Resource Explorer.
 * 
 * If your search results are empty, or are missing results that you think should be there, see Troubleshooting Resource Explorer search.
 */export const search = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/Search", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.Search" }, SearchInput, SearchOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the status and details of a Resource Explorer setup operation. This operation returns information about the progress of creating or deleting Resource Explorer configurations across Regions.
 */export const getResourceExplorerSetup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-28", uri: "/GetResourceExplorerSetup", method: "POST", sdkId: "Resource Explorer 2", sigV4ServiceName: "resource-explorer-2", name: "ResourceExplorer.GetResourceExplorerSetup" }, GetResourceExplorerSetupInput, GetResourceExplorerSetupOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

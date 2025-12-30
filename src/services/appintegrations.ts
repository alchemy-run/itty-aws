import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const PermissionList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class DeleteApplicationRequest extends S.Class<DeleteApplicationRequest>("DeleteApplicationRequest")({Arn: S.String}) {}
export class DeleteApplicationResponse extends S.Class<DeleteApplicationResponse>("DeleteApplicationResponse")({}) {}
export class DeleteDataIntegrationRequest extends S.Class<DeleteDataIntegrationRequest>("DeleteDataIntegrationRequest")({DataIntegrationIdentifier: S.String}) {}
export class DeleteDataIntegrationResponse extends S.Class<DeleteDataIntegrationResponse>("DeleteDataIntegrationResponse")({}) {}
export class DeleteEventIntegrationRequest extends S.Class<DeleteEventIntegrationRequest>("DeleteEventIntegrationRequest")({Name: S.String}) {}
export class DeleteEventIntegrationResponse extends S.Class<DeleteEventIntegrationResponse>("DeleteEventIntegrationResponse")({}) {}
export class GetApplicationRequest extends S.Class<GetApplicationRequest>("GetApplicationRequest")({Arn: S.String}) {}
export class GetDataIntegrationRequest extends S.Class<GetDataIntegrationRequest>("GetDataIntegrationRequest")({Identifier: S.String}) {}
export class GetEventIntegrationRequest extends S.Class<GetEventIntegrationRequest>("GetEventIntegrationRequest")({Name: S.String}) {}
export class ListApplicationAssociationsRequest extends S.Class<ListApplicationAssociationsRequest>("ListApplicationAssociationsRequest")({ApplicationId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListApplicationsRequest extends S.Class<ListApplicationsRequest>("ListApplicationsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), ApplicationType: S.optional(S.String)}) {}
export class ListDataIntegrationAssociationsRequest extends S.Class<ListDataIntegrationAssociationsRequest>("ListDataIntegrationAssociationsRequest")({DataIntegrationIdentifier: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListDataIntegrationsRequest extends S.Class<ListDataIntegrationsRequest>("ListDataIntegrationsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListEventIntegrationAssociationsRequest extends S.Class<ListEventIntegrationAssociationsRequest>("ListEventIntegrationAssociationsRequest")({EventIntegrationName: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListEventIntegrationsRequest extends S.Class<ListEventIntegrationsRequest>("ListEventIntegrationsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const ApplicationApprovedOrigins = S.Array(S.String);
export class ExternalUrlConfig extends S.Class<ExternalUrlConfig>("ExternalUrlConfig")({AccessUrl: S.String, ApprovedOrigins: S.optional(ApplicationApprovedOrigins)}) {}
export class ApplicationSourceConfig extends S.Class<ApplicationSourceConfig>("ApplicationSourceConfig")({ExternalUrlConfig: S.optional(ExternalUrlConfig)}) {}
export class Subscription extends S.Class<Subscription>("Subscription")({Event: S.String, Description: S.optional(S.String)}) {}
export const SubscriptionList = S.Array(Subscription);
export class Publication extends S.Class<Publication>("Publication")({Event: S.String, Schema: S.String, Description: S.optional(S.String)}) {}
export const PublicationList = S.Array(Publication);
export class ContactHandling extends S.Class<ContactHandling>("ContactHandling")({Scope: S.optional(S.String)}) {}
export class ApplicationConfig extends S.Class<ApplicationConfig>("ApplicationConfig")({ContactHandling: S.optional(ContactHandling)}) {}
export const IframePermissionList = S.Array(S.String);
export class IframeConfig extends S.Class<IframeConfig>("IframeConfig")({Allow: S.optional(IframePermissionList), Sandbox: S.optional(IframePermissionList)}) {}
export class UpdateApplicationRequest extends S.Class<UpdateApplicationRequest>("UpdateApplicationRequest")({Arn: S.String, Name: S.optional(S.String), Description: S.optional(S.String), ApplicationSourceConfig: S.optional(ApplicationSourceConfig), Subscriptions: S.optional(SubscriptionList), Publications: S.optional(PublicationList), Permissions: S.optional(PermissionList), IsService: S.optional(S.Boolean), InitializationTimeout: S.optional(S.Number), ApplicationConfig: S.optional(ApplicationConfig), IframeConfig: S.optional(IframeConfig), ApplicationType: S.optional(S.String)}) {}
export class UpdateApplicationResponse extends S.Class<UpdateApplicationResponse>("UpdateApplicationResponse")({}) {}
export class UpdateDataIntegrationRequest extends S.Class<UpdateDataIntegrationRequest>("UpdateDataIntegrationRequest")({Identifier: S.String, Name: S.optional(S.String), Description: S.optional(S.String)}) {}
export class UpdateDataIntegrationResponse extends S.Class<UpdateDataIntegrationResponse>("UpdateDataIntegrationResponse")({}) {}
export class OnDemandConfiguration extends S.Class<OnDemandConfiguration>("OnDemandConfiguration")({StartTime: S.String, EndTime: S.optional(S.String)}) {}
export class ScheduleConfiguration extends S.Class<ScheduleConfiguration>("ScheduleConfiguration")({FirstExecutionFrom: S.optional(S.String), Object: S.optional(S.String), ScheduleExpression: S.String}) {}
export class ExecutionConfiguration extends S.Class<ExecutionConfiguration>("ExecutionConfiguration")({ExecutionMode: S.String, OnDemandConfiguration: S.optional(OnDemandConfiguration), ScheduleConfiguration: S.optional(ScheduleConfiguration)}) {}
export class UpdateDataIntegrationAssociationRequest extends S.Class<UpdateDataIntegrationAssociationRequest>("UpdateDataIntegrationAssociationRequest")({DataIntegrationIdentifier: S.String, DataIntegrationAssociationIdentifier: S.String, ExecutionConfiguration: ExecutionConfiguration}) {}
export class UpdateDataIntegrationAssociationResponse extends S.Class<UpdateDataIntegrationAssociationResponse>("UpdateDataIntegrationAssociationResponse")({}) {}
export class UpdateEventIntegrationRequest extends S.Class<UpdateEventIntegrationRequest>("UpdateEventIntegrationRequest")({Name: S.String, Description: S.optional(S.String)}) {}
export class UpdateEventIntegrationResponse extends S.Class<UpdateEventIntegrationResponse>("UpdateEventIntegrationResponse")({}) {}
export const FolderList = S.Array(S.String);
export const FieldsList = S.Array(S.String);
export const FieldsMap = S.Record({key: S.String, value: FieldsList});
export const ObjectConfiguration = S.Record({key: S.String, value: FieldsMap});
export const ClientAssociationMetadata = S.Record({key: S.String, value: S.String});
export class EventFilter extends S.Class<EventFilter>("EventFilter")({Source: S.String}) {}
export class CreateEventIntegrationRequest extends S.Class<CreateEventIntegrationRequest>("CreateEventIntegrationRequest")({Name: S.String, Description: S.optional(S.String), EventFilter: EventFilter, EventBridgeBus: S.String, ClientToken: S.optional(S.String), Tags: S.optional(TagMap)}) {}
export class GetApplicationResponse extends S.Class<GetApplicationResponse>("GetApplicationResponse")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Namespace: S.optional(S.String), Description: S.optional(S.String), ApplicationSourceConfig: S.optional(ApplicationSourceConfig), Subscriptions: S.optional(SubscriptionList), Publications: S.optional(PublicationList), CreatedTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date), Tags: S.optional(TagMap), Permissions: S.optional(PermissionList), IsService: S.optional(S.Boolean), InitializationTimeout: S.optional(S.Number), ApplicationConfig: S.optional(ApplicationConfig), IframeConfig: S.optional(IframeConfig), ApplicationType: S.optional(S.String)}) {}
export class FileConfiguration extends S.Class<FileConfiguration>("FileConfiguration")({Folders: FolderList, Filters: S.optional(FieldsMap)}) {}
export class GetDataIntegrationResponse extends S.Class<GetDataIntegrationResponse>("GetDataIntegrationResponse")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), KmsKey: S.optional(S.String), SourceURI: S.optional(S.String), ScheduleConfiguration: S.optional(ScheduleConfiguration), Tags: S.optional(TagMap), FileConfiguration: S.optional(FileConfiguration), ObjectConfiguration: S.optional(ObjectConfiguration)}) {}
export class GetEventIntegrationResponse extends S.Class<GetEventIntegrationResponse>("GetEventIntegrationResponse")({Name: S.optional(S.String), Description: S.optional(S.String), EventIntegrationArn: S.optional(S.String), EventBridgeBus: S.optional(S.String), EventFilter: S.optional(EventFilter), Tags: S.optional(TagMap)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class ApplicationAssociationSummary extends S.Class<ApplicationAssociationSummary>("ApplicationAssociationSummary")({ApplicationAssociationArn: S.optional(S.String), ApplicationArn: S.optional(S.String), ClientId: S.optional(S.String)}) {}
export const ApplicationAssociationsList = S.Array(ApplicationAssociationSummary);
export class ApplicationSummary extends S.Class<ApplicationSummary>("ApplicationSummary")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Namespace: S.optional(S.String), CreatedTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date), IsService: S.optional(S.Boolean), ApplicationType: S.optional(S.String)}) {}
export const ApplicationsList = S.Array(ApplicationSummary);
export class DataIntegrationSummary extends S.Class<DataIntegrationSummary>("DataIntegrationSummary")({Arn: S.optional(S.String), Name: S.optional(S.String), SourceURI: S.optional(S.String)}) {}
export const DataIntegrationsList = S.Array(DataIntegrationSummary);
export class EventIntegrationAssociation extends S.Class<EventIntegrationAssociation>("EventIntegrationAssociation")({EventIntegrationAssociationArn: S.optional(S.String), EventIntegrationAssociationId: S.optional(S.String), EventIntegrationName: S.optional(S.String), ClientId: S.optional(S.String), EventBridgeRuleName: S.optional(S.String), ClientAssociationMetadata: S.optional(ClientAssociationMetadata)}) {}
export const EventIntegrationAssociationsList = S.Array(EventIntegrationAssociation);
export class EventIntegration extends S.Class<EventIntegration>("EventIntegration")({EventIntegrationArn: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), EventFilter: S.optional(EventFilter), EventBridgeBus: S.optional(S.String), Tags: S.optional(TagMap)}) {}
export const EventIntegrationsList = S.Array(EventIntegration);
export class CreateApplicationRequest extends S.Class<CreateApplicationRequest>("CreateApplicationRequest")({Name: S.String, Namespace: S.String, Description: S.optional(S.String), ApplicationSourceConfig: ApplicationSourceConfig, Subscriptions: S.optional(SubscriptionList), Publications: S.optional(PublicationList), ClientToken: S.optional(S.String), Tags: S.optional(TagMap), Permissions: S.optional(PermissionList), IsService: S.optional(S.Boolean), InitializationTimeout: S.optional(S.Number), ApplicationConfig: S.optional(ApplicationConfig), IframeConfig: S.optional(IframeConfig), ApplicationType: S.optional(S.String)}) {}
export class CreateDataIntegrationRequest extends S.Class<CreateDataIntegrationRequest>("CreateDataIntegrationRequest")({Name: S.String, Description: S.optional(S.String), KmsKey: S.String, SourceURI: S.optional(S.String), ScheduleConfig: S.optional(ScheduleConfiguration), Tags: S.optional(TagMap), ClientToken: S.optional(S.String), FileConfiguration: S.optional(FileConfiguration), ObjectConfiguration: S.optional(ObjectConfiguration)}) {}
export class CreateDataIntegrationAssociationRequest extends S.Class<CreateDataIntegrationAssociationRequest>("CreateDataIntegrationAssociationRequest")({DataIntegrationIdentifier: S.String, ClientId: S.optional(S.String), ObjectConfiguration: S.optional(ObjectConfiguration), DestinationURI: S.optional(S.String), ClientAssociationMetadata: S.optional(ClientAssociationMetadata), ClientToken: S.optional(S.String), ExecutionConfiguration: S.optional(ExecutionConfiguration)}) {}
export class CreateEventIntegrationResponse extends S.Class<CreateEventIntegrationResponse>("CreateEventIntegrationResponse")({EventIntegrationArn: S.optional(S.String)}) {}
export class ListApplicationAssociationsResponse extends S.Class<ListApplicationAssociationsResponse>("ListApplicationAssociationsResponse")({ApplicationAssociations: S.optional(ApplicationAssociationsList), NextToken: S.optional(S.String)}) {}
export class ListApplicationsResponse extends S.Class<ListApplicationsResponse>("ListApplicationsResponse")({Applications: S.optional(ApplicationsList), NextToken: S.optional(S.String)}) {}
export class ListDataIntegrationsResponse extends S.Class<ListDataIntegrationsResponse>("ListDataIntegrationsResponse")({DataIntegrations: S.optional(DataIntegrationsList), NextToken: S.optional(S.String)}) {}
export class ListEventIntegrationAssociationsResponse extends S.Class<ListEventIntegrationAssociationsResponse>("ListEventIntegrationAssociationsResponse")({EventIntegrationAssociations: S.optional(EventIntegrationAssociationsList), NextToken: S.optional(S.String)}) {}
export class ListEventIntegrationsResponse extends S.Class<ListEventIntegrationsResponse>("ListEventIntegrationsResponse")({EventIntegrations: S.optional(EventIntegrationsList), NextToken: S.optional(S.String)}) {}
export class LastExecutionStatus extends S.Class<LastExecutionStatus>("LastExecutionStatus")({ExecutionStatus: S.optional(S.String), StatusMessage: S.optional(S.String)}) {}
export class DataIntegrationAssociationSummary extends S.Class<DataIntegrationAssociationSummary>("DataIntegrationAssociationSummary")({DataIntegrationAssociationArn: S.optional(S.String), DataIntegrationArn: S.optional(S.String), ClientId: S.optional(S.String), DestinationURI: S.optional(S.String), LastExecutionStatus: S.optional(LastExecutionStatus), ExecutionConfiguration: S.optional(ExecutionConfiguration)}) {}
export const DataIntegrationAssociationsList = S.Array(DataIntegrationAssociationSummary);
export class CreateApplicationResponse extends S.Class<CreateApplicationResponse>("CreateApplicationResponse")({Arn: S.optional(S.String), Id: S.optional(S.String)}) {}
export class CreateDataIntegrationResponse extends S.Class<CreateDataIntegrationResponse>("CreateDataIntegrationResponse")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), KmsKey: S.optional(S.String), SourceURI: S.optional(S.String), ScheduleConfiguration: S.optional(ScheduleConfiguration), Tags: S.optional(TagMap), ClientToken: S.optional(S.String), FileConfiguration: S.optional(FileConfiguration), ObjectConfiguration: S.optional(ObjectConfiguration)}) {}
export class CreateDataIntegrationAssociationResponse extends S.Class<CreateDataIntegrationAssociationResponse>("CreateDataIntegrationAssociationResponse")({DataIntegrationAssociationId: S.optional(S.String), DataIntegrationArn: S.optional(S.String)}) {}
export class ListDataIntegrationAssociationsResponse extends S.Class<ListDataIntegrationAssociationsResponse>("ListDataIntegrationAssociationsResponse")({DataIntegrationAssociations: S.optional(DataIntegrationAssociationsList), NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServiceError extends S.TaggedError<InternalServiceError>()("InternalServiceError", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class UnsupportedOperationException extends S.TaggedError<UnsupportedOperationException>()("UnsupportedOperationException", {Message: S.optional(S.String)}) {};
export class DuplicateResourceException extends S.TaggedError<DuplicateResourceException>()("DuplicateResourceException", {}) {};
export class ResourceQuotaExceededException extends S.TaggedError<ResourceQuotaExceededException>()("ResourceQuotaExceededException", {}) {};

//# Operations
/**
 * Updates the description of a DataIntegration.
 * 
 * 
 * 
 * 
 * You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
 * Use a different DataIntegration, or recreate the DataIntegration using the
 * CreateDataIntegration API.
 */export const updateDataIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/dataIntegrations/{Identifier}", method: "PATCH", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.UpdateDataIntegration" }, UpdateDataIntegrationRequest, UpdateDataIntegrationResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates and persists a DataIntegrationAssociation resource.
 * 
 * 
 * 
 * 
 * 
 * Updating a DataIntegrationAssociation with ExecutionConfiguration will rerun the on-demand job.
 */export const updateDataIntegrationAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/dataIntegrations/{DataIntegrationIdentifier}/associations/{DataIntegrationAssociationIdentifier}", method: "PATCH", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.UpdateDataIntegrationAssociation" }, UpdateDataIntegrationAssociationRequest, UpdateDataIntegrationAssociationResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the description of an event integration.
 */export const updateEventIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/eventIntegrations/{Name}", method: "PATCH", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.UpdateEventIntegration" }, UpdateEventIntegrationRequest, UpdateEventIntegrationResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the Application. Only Applications that don't have any Application Associations
 * can be deleted.
 */export const deleteApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/applications/{Arn}", method: "DELETE", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.DeleteApplication" }, DeleteApplicationRequest, DeleteApplicationResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the DataIntegration. Only DataIntegrations that don't have any
 * DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the
 * underlying Amazon AppFlow flow and service linked role.
 * 
 * 
 * 
 * 
 * You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
 * Use a different DataIntegration, or recreate the DataIntegration using the
 * CreateDataIntegration API.
 */export const deleteDataIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/dataIntegrations/{DataIntegrationIdentifier}", method: "DELETE", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.DeleteDataIntegration" }, DeleteDataIntegrationRequest, DeleteDataIntegrationResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified existing event integration. If the event integration is associated
 * with clients, the request is rejected.
 */export const deleteEventIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/eventIntegrations/{Name}", method: "DELETE", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.DeleteEventIntegration" }, DeleteEventIntegrationRequest, DeleteEventIntegrationResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get an Application resource.
 */export const getApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/applications/{Arn}", method: "GET", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.GetApplication" }, GetApplicationRequest, GetApplicationResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the DataIntegration.
 * 
 * 
 * 
 * 
 * You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
 * Use a different DataIntegration, or recreate the DataIntegration using the
 * CreateDataIntegration API.
 */export const getDataIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/dataIntegrations/{Identifier}", method: "GET", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.GetDataIntegration" }, GetDataIntegrationRequest, GetDataIntegrationResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the event integration.
 */export const getEventIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/eventIntegrations/{Name}", method: "GET", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.GetEventIntegration" }, GetEventIntegrationRequest, GetEventIntegrationResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags for the specified resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/tags/{resourceArn}", method: "GET", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds the specified tags to the specified resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/tags/{resourceArn}", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified tags from the specified resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates and persists an Application resource.
 */export const updateApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/applications/{Arn}", method: "PATCH", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.UpdateApplication" }, UpdateApplicationRequest, UpdateApplicationResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException, UnsupportedOperationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a paginated list of application associations for an application.
 */export const listApplicationAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/applications/{ApplicationId}/associations", method: "GET", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.ListApplicationAssociations" }, ListApplicationAssociationsRequest, ListApplicationAssociationsResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists applications in the account.
 */export const listApplications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/applications", method: "GET", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.ListApplications" }, ListApplicationsRequest, ListApplicationsResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a paginated list of DataIntegrations in the account.
 * 
 * 
 * 
 * 
 * You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
 * Use a different DataIntegration, or recreate the DataIntegration using the
 * CreateDataIntegration API.
 */export const listDataIntegrations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/dataIntegrations", method: "GET", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.ListDataIntegrations" }, ListDataIntegrationsRequest, ListDataIntegrationsResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a paginated list of event integration associations in the account.
 */export const listEventIntegrationAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/eventIntegrations/{EventIntegrationName}/associations", method: "GET", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.ListEventIntegrationAssociations" }, ListEventIntegrationAssociationsRequest, ListEventIntegrationAssociationsResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a paginated list of event integrations in the account.
 */export const listEventIntegrations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/eventIntegrations", method: "GET", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.ListEventIntegrations" }, ListEventIntegrationsRequest, ListEventIntegrationsResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates and persists a DataIntegration resource.
 * 
 * 
 * 
 * 
 * You cannot create a DataIntegration association for a DataIntegration that has been
 * previously associated. Use a different DataIntegration, or recreate the DataIntegration
 * using the `CreateDataIntegration` API.
 */export const createDataIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/dataIntegrations", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.CreateDataIntegration" }, CreateDataIntegrationRequest, CreateDataIntegrationResponse, [AccessDeniedException, DuplicateResourceException, InternalServiceError, InvalidRequestException, ResourceQuotaExceededException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates and persists a DataIntegrationAssociation resource.
 */export const createDataIntegrationAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/dataIntegrations/{DataIntegrationIdentifier}/associations", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.CreateDataIntegrationAssociation" }, CreateDataIntegrationAssociationRequest, CreateDataIntegrationAssociationResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ResourceQuotaExceededException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an EventIntegration, given a specified name, description, and a reference to an
 * Amazon EventBridge bus in your account and a partner event source that pushes events to
 * that bus. No objects are created in the your account, only metadata that is persisted on the
 * EventIntegration control plane.
 */export const createEventIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/eventIntegrations", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.CreateEventIntegration" }, CreateEventIntegrationRequest, CreateEventIntegrationResponse, [AccessDeniedException, DuplicateResourceException, InternalServiceError, InvalidRequestException, ResourceQuotaExceededException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a paginated list of DataIntegration associations in the account.
 * 
 * 
 * 
 * 
 * You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
 * Use a different DataIntegration, or recreate the DataIntegration using the
 * CreateDataIntegration API.
 */export const listDataIntegrationAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/dataIntegrations/{DataIntegrationIdentifier}/associations", method: "GET", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.ListDataIntegrationAssociations" }, ListDataIntegrationAssociationsRequest, ListDataIntegrationAssociationsResponse, [AccessDeniedException, InternalServiceError, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates and persists an Application resource.
 */export const createApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-29", uri: "/applications", sdkId: "AppIntegrations", sigV4ServiceName: "app-integrations", name: "AmazonAppIntegrationService.CreateApplication" }, CreateApplicationRequest, CreateApplicationResponse, [AccessDeniedException, DuplicateResourceException, InternalServiceError, InvalidRequestException, ResourceQuotaExceededException, ThrottlingException, UnsupportedOperationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

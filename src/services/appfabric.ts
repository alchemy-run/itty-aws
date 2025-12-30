import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TaskIdList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class BatchGetUserAccessTasksRequest extends S.Class<BatchGetUserAccessTasksRequest>("BatchGetUserAccessTasksRequest")({appBundleIdentifier: S.String, taskIdList: TaskIdList}) {}
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const TagList = S.Array(Tag);
export class CreateAppBundleRequest extends S.Class<CreateAppBundleRequest>("CreateAppBundleRequest")({clientToken: S.optional(S.String), customerManagedKeyIdentifier: S.optional(S.String), tags: S.optional(TagList)}) {}
export class CreateIngestionRequest extends S.Class<CreateIngestionRequest>("CreateIngestionRequest")({appBundleIdentifier: S.String, app: S.String, tenantId: S.String, ingestionType: S.String, clientToken: S.optional(S.String), tags: S.optional(TagList)}) {}
export class DeleteAppAuthorizationRequest extends S.Class<DeleteAppAuthorizationRequest>("DeleteAppAuthorizationRequest")({appBundleIdentifier: S.String, appAuthorizationIdentifier: S.String}) {}
export class DeleteAppAuthorizationResponse extends S.Class<DeleteAppAuthorizationResponse>("DeleteAppAuthorizationResponse")({}) {}
export class DeleteAppBundleRequest extends S.Class<DeleteAppBundleRequest>("DeleteAppBundleRequest")({appBundleIdentifier: S.String}) {}
export class DeleteAppBundleResponse extends S.Class<DeleteAppBundleResponse>("DeleteAppBundleResponse")({}) {}
export class DeleteIngestionRequest extends S.Class<DeleteIngestionRequest>("DeleteIngestionRequest")({appBundleIdentifier: S.String, ingestionIdentifier: S.String}) {}
export class DeleteIngestionResponse extends S.Class<DeleteIngestionResponse>("DeleteIngestionResponse")({}) {}
export class DeleteIngestionDestinationRequest extends S.Class<DeleteIngestionDestinationRequest>("DeleteIngestionDestinationRequest")({appBundleIdentifier: S.String, ingestionIdentifier: S.String, ingestionDestinationIdentifier: S.String}) {}
export class DeleteIngestionDestinationResponse extends S.Class<DeleteIngestionDestinationResponse>("DeleteIngestionDestinationResponse")({}) {}
export class GetAppAuthorizationRequest extends S.Class<GetAppAuthorizationRequest>("GetAppAuthorizationRequest")({appBundleIdentifier: S.String, appAuthorizationIdentifier: S.String}) {}
export class GetAppBundleRequest extends S.Class<GetAppBundleRequest>("GetAppBundleRequest")({appBundleIdentifier: S.String}) {}
export class GetIngestionRequest extends S.Class<GetIngestionRequest>("GetIngestionRequest")({appBundleIdentifier: S.String, ingestionIdentifier: S.String}) {}
export class GetIngestionDestinationRequest extends S.Class<GetIngestionDestinationRequest>("GetIngestionDestinationRequest")({appBundleIdentifier: S.String, ingestionIdentifier: S.String, ingestionDestinationIdentifier: S.String}) {}
export class ListAppAuthorizationsRequest extends S.Class<ListAppAuthorizationsRequest>("ListAppAuthorizationsRequest")({appBundleIdentifier: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListAppBundlesRequest extends S.Class<ListAppBundlesRequest>("ListAppBundlesRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListIngestionDestinationsRequest extends S.Class<ListIngestionDestinationsRequest>("ListIngestionDestinationsRequest")({appBundleIdentifier: S.String, ingestionIdentifier: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListIngestionsRequest extends S.Class<ListIngestionsRequest>("ListIngestionsRequest")({appBundleIdentifier: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class StartIngestionRequest extends S.Class<StartIngestionRequest>("StartIngestionRequest")({ingestionIdentifier: S.String, appBundleIdentifier: S.String}) {}
export class StartIngestionResponse extends S.Class<StartIngestionResponse>("StartIngestionResponse")({}) {}
export class StartUserAccessTasksRequest extends S.Class<StartUserAccessTasksRequest>("StartUserAccessTasksRequest")({appBundleIdentifier: S.String, email: S.String}) {}
export class StopIngestionRequest extends S.Class<StopIngestionRequest>("StopIngestionRequest")({ingestionIdentifier: S.String, appBundleIdentifier: S.String}) {}
export class StopIngestionResponse extends S.Class<StopIngestionResponse>("StopIngestionResponse")({}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class Oauth2Credential extends S.Class<Oauth2Credential>("Oauth2Credential")({clientId: S.String, clientSecret: S.String}) {}
export class ApiKeyCredential extends S.Class<ApiKeyCredential>("ApiKeyCredential")({apiKey: S.String}) {}
export const Credential = S.Union(Oauth2Credential, ApiKeyCredential);
export class Tenant extends S.Class<Tenant>("Tenant")({tenantIdentifier: S.String, tenantDisplayName: S.String}) {}
export class UpdateAppAuthorizationRequest extends S.Class<UpdateAppAuthorizationRequest>("UpdateAppAuthorizationRequest")({appBundleIdentifier: S.String, appAuthorizationIdentifier: S.String, credential: S.optional(Credential), tenant: S.optional(Tenant)}) {}
export class S3Bucket extends S.Class<S3Bucket>("S3Bucket")({bucketName: S.String, prefix: S.optional(S.String)}) {}
export class FirehoseStream extends S.Class<FirehoseStream>("FirehoseStream")({streamName: S.String}) {}
export const Destination = S.Union(S3Bucket, FirehoseStream);
export class AuditLogDestinationConfiguration extends S.Class<AuditLogDestinationConfiguration>("AuditLogDestinationConfiguration")({destination: Destination}) {}
export const DestinationConfiguration = S.Union(AuditLogDestinationConfiguration);
export class UpdateIngestionDestinationRequest extends S.Class<UpdateIngestionDestinationRequest>("UpdateIngestionDestinationRequest")({appBundleIdentifier: S.String, ingestionIdentifier: S.String, ingestionDestinationIdentifier: S.String, destinationConfiguration: DestinationConfiguration}) {}
export class AuthRequest extends S.Class<AuthRequest>("AuthRequest")({redirectUri: S.String, code: S.String}) {}
export class ConnectAppAuthorizationRequest extends S.Class<ConnectAppAuthorizationRequest>("ConnectAppAuthorizationRequest")({appBundleIdentifier: S.String, appAuthorizationIdentifier: S.String, authRequest: S.optional(AuthRequest)}) {}
export class AppBundle extends S.Class<AppBundle>("AppBundle")({arn: S.String, customerManagedKeyArn: S.optional(S.String)}) {}
export class GetAppBundleResponse extends S.Class<GetAppBundleResponse>("GetAppBundleResponse")({appBundle: AppBundle}) {}
export class Ingestion extends S.Class<Ingestion>("Ingestion")({arn: S.String, appBundleArn: S.String, app: S.String, tenantId: S.String, createdAt: S.Date, updatedAt: S.Date, state: S.String, ingestionType: S.String}) {}
export class GetIngestionResponse extends S.Class<GetIngestionResponse>("GetIngestionResponse")({ingestion: Ingestion}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList)}) {}
export class AppAuthorization extends S.Class<AppAuthorization>("AppAuthorization")({appAuthorizationArn: S.String, appBundleArn: S.String, app: S.String, tenant: Tenant, authType: S.String, status: S.String, createdAt: S.Date, updatedAt: S.Date, persona: S.optional(S.String), authUrl: S.optional(S.String)}) {}
export class UpdateAppAuthorizationResponse extends S.Class<UpdateAppAuthorizationResponse>("UpdateAppAuthorizationResponse")({appAuthorization: AppAuthorization}) {}
export class AuditLogProcessingConfiguration extends S.Class<AuditLogProcessingConfiguration>("AuditLogProcessingConfiguration")({schema: S.String, format: S.String}) {}
export const ProcessingConfiguration = S.Union(AuditLogProcessingConfiguration);
export class IngestionDestination extends S.Class<IngestionDestination>("IngestionDestination")({arn: S.String, ingestionArn: S.String, processingConfiguration: ProcessingConfiguration, destinationConfiguration: DestinationConfiguration, status: S.optional(S.String), statusReason: S.optional(S.String), createdAt: S.optional(S.Date), updatedAt: S.optional(S.Date)}) {}
export class UpdateIngestionDestinationResponse extends S.Class<UpdateIngestionDestinationResponse>("UpdateIngestionDestinationResponse")({ingestionDestination: IngestionDestination}) {}
export class AppAuthorizationSummary extends S.Class<AppAuthorizationSummary>("AppAuthorizationSummary")({appAuthorizationArn: S.String, appBundleArn: S.String, app: S.String, tenant: Tenant, status: S.String, updatedAt: S.Date}) {}
export const AppAuthorizationSummaryList = S.Array(AppAuthorizationSummary);
export class AppBundleSummary extends S.Class<AppBundleSummary>("AppBundleSummary")({arn: S.String}) {}
export const AppBundleSummaryList = S.Array(AppBundleSummary);
export class IngestionDestinationSummary extends S.Class<IngestionDestinationSummary>("IngestionDestinationSummary")({arn: S.String}) {}
export const IngestionDestinationList = S.Array(IngestionDestinationSummary);
export class IngestionSummary extends S.Class<IngestionSummary>("IngestionSummary")({arn: S.String, app: S.String, tenantId: S.String, state: S.String}) {}
export const IngestionList = S.Array(IngestionSummary);
export class TaskError extends S.Class<TaskError>("TaskError")({errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export class UserAccessTaskItem extends S.Class<UserAccessTaskItem>("UserAccessTaskItem")({app: S.String, tenantId: S.String, taskId: S.optional(S.String), error: S.optional(TaskError)}) {}
export const UserAccessTasksList = S.Array(UserAccessTaskItem);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class ConnectAppAuthorizationResponse extends S.Class<ConnectAppAuthorizationResponse>("ConnectAppAuthorizationResponse")({appAuthorizationSummary: AppAuthorizationSummary}) {}
export class CreateAppAuthorizationRequest extends S.Class<CreateAppAuthorizationRequest>("CreateAppAuthorizationRequest")({appBundleIdentifier: S.String, app: S.String, credential: Credential, tenant: Tenant, authType: S.String, clientToken: S.optional(S.String), tags: S.optional(TagList)}) {}
export class CreateAppBundleResponse extends S.Class<CreateAppBundleResponse>("CreateAppBundleResponse")({appBundle: AppBundle}) {}
export class CreateIngestionResponse extends S.Class<CreateIngestionResponse>("CreateIngestionResponse")({ingestion: Ingestion}) {}
export class GetAppAuthorizationResponse extends S.Class<GetAppAuthorizationResponse>("GetAppAuthorizationResponse")({appAuthorization: AppAuthorization}) {}
export class GetIngestionDestinationResponse extends S.Class<GetIngestionDestinationResponse>("GetIngestionDestinationResponse")({ingestionDestination: IngestionDestination}) {}
export class ListAppAuthorizationsResponse extends S.Class<ListAppAuthorizationsResponse>("ListAppAuthorizationsResponse")({appAuthorizationSummaryList: AppAuthorizationSummaryList, nextToken: S.optional(S.String)}) {}
export class ListAppBundlesResponse extends S.Class<ListAppBundlesResponse>("ListAppBundlesResponse")({appBundleSummaryList: AppBundleSummaryList, nextToken: S.optional(S.String)}) {}
export class ListIngestionDestinationsResponse extends S.Class<ListIngestionDestinationsResponse>("ListIngestionDestinationsResponse")({ingestionDestinations: IngestionDestinationList, nextToken: S.optional(S.String)}) {}
export class ListIngestionsResponse extends S.Class<ListIngestionsResponse>("ListIngestionsResponse")({ingestions: IngestionList, nextToken: S.optional(S.String)}) {}
export class StartUserAccessTasksResponse extends S.Class<StartUserAccessTasksResponse>("StartUserAccessTasksResponse")({userAccessTasksList: S.optional(UserAccessTasksList)}) {}
export class UserAccessResultItem extends S.Class<UserAccessResultItem>("UserAccessResultItem")({app: S.optional(S.String), tenantId: S.optional(S.String), tenantDisplayName: S.optional(S.String), taskId: S.optional(S.String), resultStatus: S.optional(S.String), email: S.optional(S.String), userId: S.optional(S.String), userFullName: S.optional(S.String), userFirstName: S.optional(S.String), userLastName: S.optional(S.String), userStatus: S.optional(S.String), taskError: S.optional(TaskError)}) {}
export const UserAccessResultsList = S.Array(UserAccessResultItem);
export class BatchGetUserAccessTasksResponse extends S.Class<BatchGetUserAccessTasksResponse>("BatchGetUserAccessTasksResponse")({userAccessResultsList: S.optional(UserAccessResultsList)}) {}
export class CreateAppAuthorizationResponse extends S.Class<CreateAppAuthorizationResponse>("CreateAppAuthorizationResponse")({appAuthorization: AppAuthorization}) {}
export class CreateIngestionDestinationRequest extends S.Class<CreateIngestionDestinationRequest>("CreateIngestionDestinationRequest")({appBundleIdentifier: S.String, ingestionIdentifier: S.String, processingConfiguration: ProcessingConfiguration, destinationConfiguration: DestinationConfiguration, clientToken: S.optional(S.String), tags: S.optional(TagList)}) {}
export class CreateIngestionDestinationResponse extends S.Class<CreateIngestionDestinationResponse>("CreateIngestionDestinationResponse")({ingestionDestination: IngestionDestination}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Assigns one or more tags (key-value pairs) to the specified resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/tags/{resourceArn}", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag or tags from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an app authorization. You must delete the associated ingestion before you can
 * delete an app authorization.
 */export const deleteAppAuthorization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}", method: "DELETE", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.DeleteAppAuthorization" }, DeleteAppAuthorizationRequest, DeleteAppAuthorizationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an app bundle. You must delete all associated app authorizations before you can
 * delete an app bundle.
 */export const deleteAppBundle = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}", method: "DELETE", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.DeleteAppBundle" }, DeleteAppBundleRequest, DeleteAppBundleResponse, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an ingestion. You must stop (disable) the ingestion and you must delete all
 * associated ingestion destinations before you can delete an app ingestion.
 */export const deleteIngestion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}", method: "DELETE", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.DeleteIngestion" }, DeleteIngestionRequest, DeleteIngestionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an ingestion destination.
 * 
 * This deletes the association between an ingestion and it's destination. It doesn't
 * delete previously ingested data or the storage destination, such as the Amazon S3
 * bucket where the data is delivered. If the ingestion destination is deleted while the
 * associated ingestion is enabled, the ingestion will fail and is eventually disabled.
 */export const deleteIngestionDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}", method: "DELETE", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.DeleteIngestionDestination" }, DeleteIngestionDestinationRequest, DeleteIngestionDestinationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about an app bundle.
 */export const getAppBundle = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}", method: "GET", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.GetAppBundle" }, GetAppBundleRequest, GetAppBundleResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about an ingestion.
 */export const getIngestion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}", method: "GET", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.GetIngestion" }, GetIngestionRequest, GetIngestionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of tags for a resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/tags/{resourceArn}", method: "GET", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts (enables) an ingestion, which collects data from an application.
 */export const startIngestion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/start", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.StartIngestion" }, StartIngestionRequest, StartIngestionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an app authorization within an app bundle, which allows AppFabric to connect to an
 * application.
 * 
 * If the app authorization was in a `connected` state, updating the app
 * authorization will set it back to a `PendingConnect` state.
 */export const updateAppAuthorization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}", method: "PATCH", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.UpdateAppAuthorization" }, UpdateAppAuthorizationRequest, UpdateAppAuthorizationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Establishes a connection between Amazon Web Services AppFabric and an application, which allows AppFabric to
 * call the APIs of the application.
 */export const connectAppAuthorization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}/connect", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.ConnectAppAuthorization" }, ConnectAppAuthorizationRequest, ConnectAppAuthorizationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an app bundle to collect data from an application using AppFabric.
 */export const createAppBundle = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.CreateAppBundle" }, CreateAppBundleRequest, CreateAppBundleResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a data ingestion for an application.
 */export const createIngestion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/ingestions", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.CreateIngestion" }, CreateIngestionRequest, CreateIngestionResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about an app authorization.
 */export const getAppAuthorization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}", method: "GET", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.GetAppAuthorization" }, GetAppAuthorizationRequest, GetAppAuthorizationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about an ingestion destination.
 */export const getIngestionDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}", method: "GET", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.GetIngestionDestination" }, GetIngestionDestinationRequest, GetIngestionDestinationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all app authorizations configured for an app bundle.
 */export const listAppAuthorizations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/appauthorizations", method: "GET", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.ListAppAuthorizations" }, ListAppAuthorizationsRequest, ListAppAuthorizationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of app bundles.
 */export const listAppBundles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles", method: "GET", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.ListAppBundles" }, ListAppBundlesRequest, ListAppBundlesResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all ingestion destinations configured for an ingestion.
 */export const listIngestionDestinations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations", method: "GET", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.ListIngestionDestinations" }, ListIngestionDestinationsRequest, ListIngestionDestinationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all ingestions configured for an app bundle.
 */export const listIngestions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/ingestions", method: "GET", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.ListIngestions" }, ListIngestionsRequest, ListIngestionsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the tasks to search user access status for a specific email address.
 * 
 * The tasks are stopped when the user access status data is found. The tasks are
 * terminated when the API calls to the application time out.
 */export const startUserAccessTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/useraccess/start", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.StartUserAccessTasks" }, StartUserAccessTasksRequest, StartUserAccessTasksResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops (disables) an ingestion.
 */export const stopIngestion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/stop", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.StopIngestion" }, StopIngestionRequest, StopIngestionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an ingestion destination, which specifies how an application's ingested data is
 * processed by Amazon Web Services AppFabric and where it's delivered.
 */export const updateIngestionDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}", method: "PATCH", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.UpdateIngestionDestination" }, UpdateIngestionDestinationRequest, UpdateIngestionDestinationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets user access details in a batch request.
 * 
 * This action polls data from the tasks that are kicked off by the
 * `StartUserAccessTasks` action.
 */export const batchGetUserAccessTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/useraccess/batchget", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.BatchGetUserAccessTasks" }, BatchGetUserAccessTasksRequest, BatchGetUserAccessTasksResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an app authorization within an app bundle, which allows AppFabric to connect to an
 * application.
 */export const createAppAuthorization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/appauthorizations", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.CreateAppAuthorization" }, CreateAppAuthorizationRequest, CreateAppAuthorizationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an ingestion destination, which specifies how an application's ingested data is
 * processed by Amazon Web Services AppFabric and where it's delivered.
 */export const createIngestionDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-05-19", uri: "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations", sdkId: "AppFabric", sigV4ServiceName: "appfabric", name: "FabricFrontEndService.CreateIngestionDestination" }, CreateIngestionDestinationRequest, CreateIngestionDestinationResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

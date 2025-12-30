import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class CancelResourceRequestInput extends S.Class<CancelResourceRequestInput>("CancelResourceRequestInput")({RequestToken: S.String}) {}
export class CreateResourceInput extends S.Class<CreateResourceInput>("CreateResourceInput")({TypeName: S.String, TypeVersionId: S.optional(S.String), RoleArn: S.optional(S.String), ClientToken: S.optional(S.String), DesiredState: S.String}) {}
export class DeleteResourceInput extends S.Class<DeleteResourceInput>("DeleteResourceInput")({TypeName: S.String, TypeVersionId: S.optional(S.String), RoleArn: S.optional(S.String), ClientToken: S.optional(S.String), Identifier: S.String}) {}
export class GetResourceInput extends S.Class<GetResourceInput>("GetResourceInput")({TypeName: S.String, TypeVersionId: S.optional(S.String), RoleArn: S.optional(S.String), Identifier: S.String}) {}
export class GetResourceRequestStatusInput extends S.Class<GetResourceRequestStatusInput>("GetResourceRequestStatusInput")({RequestToken: S.String}) {}
export class ListResourcesInput extends S.Class<ListResourcesInput>("ListResourcesInput")({TypeName: S.String, TypeVersionId: S.optional(S.String), RoleArn: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), ResourceModel: S.optional(S.String)}) {}
export class UpdateResourceInput extends S.Class<UpdateResourceInput>("UpdateResourceInput")({TypeName: S.String, TypeVersionId: S.optional(S.String), RoleArn: S.optional(S.String), ClientToken: S.optional(S.String), Identifier: S.String, PatchDocument: S.String}) {}
export const Operations = S.Array(S.String);
export const OperationStatuses = S.Array(S.String);
export class ResourceRequestStatusFilter extends S.Class<ResourceRequestStatusFilter>("ResourceRequestStatusFilter")({Operations: S.optional(Operations), OperationStatuses: S.optional(OperationStatuses)}) {}
export class ResourceDescription extends S.Class<ResourceDescription>("ResourceDescription")({Identifier: S.optional(S.String), Properties: S.optional(S.String)}) {}
export const ResourceDescriptions = S.Array(ResourceDescription);
export class ProgressEvent extends S.Class<ProgressEvent>("ProgressEvent")({TypeName: S.optional(S.String), Identifier: S.optional(S.String), RequestToken: S.optional(S.String), HooksRequestToken: S.optional(S.String), Operation: S.optional(S.String), OperationStatus: S.optional(S.String), EventTime: S.optional(S.Date), ResourceModel: S.optional(S.String), StatusMessage: S.optional(S.String), ErrorCode: S.optional(S.String), RetryAfter: S.optional(S.Date)}) {}
export class CreateResourceOutput extends S.Class<CreateResourceOutput>("CreateResourceOutput")({ProgressEvent: S.optional(ProgressEvent)}) {}
export class DeleteResourceOutput extends S.Class<DeleteResourceOutput>("DeleteResourceOutput")({ProgressEvent: S.optional(ProgressEvent)}) {}
export class ListResourceRequestsInput extends S.Class<ListResourceRequestsInput>("ListResourceRequestsInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ResourceRequestStatusFilter: S.optional(ResourceRequestStatusFilter)}) {}
export class ListResourcesOutput extends S.Class<ListResourcesOutput>("ListResourcesOutput")({TypeName: S.optional(S.String), ResourceDescriptions: S.optional(ResourceDescriptions), NextToken: S.optional(S.String)}) {}
export class UpdateResourceOutput extends S.Class<UpdateResourceOutput>("UpdateResourceOutput")({ProgressEvent: S.optional(ProgressEvent)}) {}
export class HookProgressEvent extends S.Class<HookProgressEvent>("HookProgressEvent")({HookTypeName: S.optional(S.String), HookTypeVersionId: S.optional(S.String), HookTypeArn: S.optional(S.String), InvocationPoint: S.optional(S.String), HookStatus: S.optional(S.String), HookEventTime: S.optional(S.Date), HookStatusMessage: S.optional(S.String), FailureMode: S.optional(S.String)}) {}
export const HooksProgressEvent = S.Array(HookProgressEvent);
export const ResourceRequestStatusSummaries = S.Array(ProgressEvent);
export class CancelResourceRequestOutput extends S.Class<CancelResourceRequestOutput>("CancelResourceRequestOutput")({ProgressEvent: S.optional(ProgressEvent)}) {}
export class GetResourceOutput extends S.Class<GetResourceOutput>("GetResourceOutput")({TypeName: S.optional(S.String), ResourceDescription: S.optional(ResourceDescription)}) {}
export class GetResourceRequestStatusOutput extends S.Class<GetResourceRequestStatusOutput>("GetResourceRequestStatusOutput")({ProgressEvent: S.optional(ProgressEvent), HooksProgressEvent: S.optional(HooksProgressEvent)}) {}
export class ListResourceRequestsOutput extends S.Class<ListResourceRequestsOutput>("ListResourceRequestsOutput")({ResourceRequestStatusSummaries: S.optional(ResourceRequestStatusSummaries), NextToken: S.optional(S.String)}) {}

//# Errors
export class AlreadyExistsException extends S.TaggedError<AlreadyExistsException>()("AlreadyExistsException", {}) {};
export class ClientTokenConflictException extends S.TaggedError<ClientTokenConflictException>()("ClientTokenConflictException", {}) {};
export class ConcurrentOperationException extends S.TaggedError<ConcurrentOperationException>()("ConcurrentOperationException", {}) {};
export class GeneralServiceException extends S.TaggedError<GeneralServiceException>()("GeneralServiceException", {}) {};
export class HandlerFailureException extends S.TaggedError<HandlerFailureException>()("HandlerFailureException", {}) {};
export class HandlerInternalFailureException extends S.TaggedError<HandlerInternalFailureException>()("HandlerInternalFailureException", {}) {};
export class InvalidCredentialsException extends S.TaggedError<InvalidCredentialsException>()("InvalidCredentialsException", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {Message: S.optional(S.String)}) {};
export class RequestTokenNotFoundException extends S.TaggedError<RequestTokenNotFoundException>()("RequestTokenNotFoundException", {}) {};
export class NetworkFailureException extends S.TaggedError<NetworkFailureException>()("NetworkFailureException", {}) {};
export class NotStabilizedException extends S.TaggedError<NotStabilizedException>()("NotStabilizedException", {}) {};
export class NotUpdatableException extends S.TaggedError<NotUpdatableException>()("NotUpdatableException", {}) {};
export class PrivateTypeException extends S.TaggedError<PrivateTypeException>()("PrivateTypeException", {}) {};
export class ResourceConflictException extends S.TaggedError<ResourceConflictException>()("ResourceConflictException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ServiceInternalErrorException extends S.TaggedError<ServiceInternalErrorException>()("ServiceInternalErrorException", {}) {};
export class ServiceLimitExceededException extends S.TaggedError<ServiceLimitExceededException>()("ServiceLimitExceededException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class TypeNotFoundException extends S.TaggedError<TypeNotFoundException>()("TypeNotFoundException", {}) {};
export class UnsupportedActionException extends S.TaggedError<UnsupportedActionException>()("UnsupportedActionException", {}) {};

//# Operations
/**
 * Returns existing resource operation requests. This includes requests of all status types.
 * For more information, see Listing active resource operation requests in the
 * *Amazon Web Services Cloud Control API User Guide*.
 * 
 * Resource operation requests expire after 7 days.
 */export const listResourceRequests = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-30", sdkId: "CloudControl", sigV4ServiceName: "cloudcontrolapi", name: "CloudApiService.ListResourceRequests" }, ListResourceRequestsInput, ListResourceRequestsOutput, []), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels the specified resource operation request. For more information, see Canceling resource operation requests in the
 * *Amazon Web Services Cloud Control API User Guide*.
 * 
 * Only resource operations requests with a status of `PENDING` or
 * `IN_PROGRESS` can be canceled.
 */export const cancelResourceRequest = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-30", sdkId: "CloudControl", sigV4ServiceName: "cloudcontrolapi", name: "CloudApiService.CancelResourceRequest" }, CancelResourceRequestInput, CancelResourceRequestOutput, [ConcurrentModificationException, RequestTokenNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the current status of a resource operation request. For more information, see
 * Tracking the progress of resource operation requests in the
 * *Amazon Web Services Cloud Control API User Guide*.
 */export const getResourceRequestStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-30", sdkId: "CloudControl", sigV4ServiceName: "cloudcontrolapi", name: "CloudApiService.GetResourceRequestStatus" }, GetResourceRequestStatusInput, GetResourceRequestStatusOutput, [RequestTokenNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates the specified resource. For more information, see Creating a
 * resource in the *Amazon Web Services Cloud Control API User Guide*.
 * 
 * After you have initiated a resource creation request, you can monitor the progress of your
 * request by calling GetResourceRequestStatus using the `RequestToken` of the
 * `ProgressEvent` type returned by `CreateResource`.
 */export const createResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-30", sdkId: "CloudControl", sigV4ServiceName: "cloudcontrolapi", name: "CloudApiService.CreateResource" }, CreateResourceInput, CreateResourceOutput, [AlreadyExistsException, ClientTokenConflictException, ConcurrentOperationException, GeneralServiceException, HandlerFailureException, HandlerInternalFailureException, InvalidCredentialsException, InvalidRequestException, NetworkFailureException, NotStabilizedException, NotUpdatableException, PrivateTypeException, ResourceConflictException, ResourceNotFoundException, ServiceInternalErrorException, ServiceLimitExceededException, ThrottlingException, TypeNotFoundException, UnsupportedActionException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified resource. For details, see Deleting a
 * resource in the *Amazon Web Services Cloud Control API User Guide*.
 * 
 * After you have initiated a resource deletion request, you can monitor the progress of your
 * request by calling GetResourceRequestStatus using the `RequestToken` of the
 * `ProgressEvent` returned by `DeleteResource`.
 */export const deleteResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-30", sdkId: "CloudControl", sigV4ServiceName: "cloudcontrolapi", name: "CloudApiService.DeleteResource" }, DeleteResourceInput, DeleteResourceOutput, [AlreadyExistsException, ClientTokenConflictException, ConcurrentOperationException, GeneralServiceException, HandlerFailureException, HandlerInternalFailureException, InvalidCredentialsException, InvalidRequestException, NetworkFailureException, NotStabilizedException, NotUpdatableException, PrivateTypeException, ResourceConflictException, ResourceNotFoundException, ServiceInternalErrorException, ServiceLimitExceededException, ThrottlingException, TypeNotFoundException, UnsupportedActionException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the current state of the specified resource. For details, see
 * Reading a resource's current state.
 * 
 * You can use this action to return information about an existing resource in your account
 * and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.
 */export const getResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-30", sdkId: "CloudControl", sigV4ServiceName: "cloudcontrolapi", name: "CloudApiService.GetResource" }, GetResourceInput, GetResourceOutput, [AlreadyExistsException, GeneralServiceException, HandlerFailureException, HandlerInternalFailureException, InvalidCredentialsException, InvalidRequestException, NetworkFailureException, NotStabilizedException, NotUpdatableException, PrivateTypeException, ResourceConflictException, ResourceNotFoundException, ServiceInternalErrorException, ServiceLimitExceededException, ThrottlingException, TypeNotFoundException, UnsupportedActionException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the specified resources. For more information, see Discovering resources in the *Amazon Web Services Cloud Control API User Guide*.
 * 
 * You can use this action to return information about existing resources in your account and
 * Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.
 */export const listResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-30", sdkId: "CloudControl", sigV4ServiceName: "cloudcontrolapi", name: "CloudApiService.ListResources" }, ListResourcesInput, ListResourcesOutput, [AlreadyExistsException, GeneralServiceException, HandlerFailureException, HandlerInternalFailureException, InvalidCredentialsException, InvalidRequestException, NetworkFailureException, NotStabilizedException, NotUpdatableException, PrivateTypeException, ResourceConflictException, ResourceNotFoundException, ServiceInternalErrorException, ServiceLimitExceededException, ThrottlingException, TypeNotFoundException, UnsupportedActionException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified property values in the resource.
 * 
 * You specify your resource property updates as a list of patch operations contained in a
 * JSON patch document that adheres to the
 * RFC 6902 - JavaScript Object
 * Notation (JSON) Patch
 * standard.
 * 
 * For details on how Cloud Control API performs resource update operations, see Updating a resource in the *Amazon Web Services Cloud Control API User Guide*.
 * 
 * After you have initiated a resource update request, you can monitor the progress of your
 * request by calling GetResourceRequestStatus using the `RequestToken` of the
 * `ProgressEvent` returned by `UpdateResource`.
 * 
 * For more information about the properties of a specific resource, refer to the related
 * topic for the resource in the Resource and property types reference in the *CloudFormation Users Guide*.
 */export const updateResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-09-30", sdkId: "CloudControl", sigV4ServiceName: "cloudcontrolapi", name: "CloudApiService.UpdateResource" }, UpdateResourceInput, UpdateResourceOutput, [AlreadyExistsException, ClientTokenConflictException, ConcurrentOperationException, GeneralServiceException, HandlerFailureException, HandlerInternalFailureException, InvalidCredentialsException, InvalidRequestException, NetworkFailureException, NotStabilizedException, NotUpdatableException, PrivateTypeException, ResourceConflictException, ResourceNotFoundException, ServiceInternalErrorException, ServiceLimitExceededException, ThrottlingException, TypeNotFoundException, UnsupportedActionException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);

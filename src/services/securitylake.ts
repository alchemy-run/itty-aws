import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteDataLakeExceptionSubscriptionRequest extends S.Class<DeleteDataLakeExceptionSubscriptionRequest>("DeleteDataLakeExceptionSubscriptionRequest")({}) {}
export class DeleteDataLakeExceptionSubscriptionResponse extends S.Class<DeleteDataLakeExceptionSubscriptionResponse>("DeleteDataLakeExceptionSubscriptionResponse")({}) {}
export class DeregisterDataLakeDelegatedAdministratorRequest extends S.Class<DeregisterDataLakeDelegatedAdministratorRequest>("DeregisterDataLakeDelegatedAdministratorRequest")({}) {}
export class DeregisterDataLakeDelegatedAdministratorResponse extends S.Class<DeregisterDataLakeDelegatedAdministratorResponse>("DeregisterDataLakeDelegatedAdministratorResponse")({}) {}
export class GetDataLakeExceptionSubscriptionRequest extends S.Class<GetDataLakeExceptionSubscriptionRequest>("GetDataLakeExceptionSubscriptionRequest")({}) {}
export const RegionList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class CreateDataLakeExceptionSubscriptionRequest extends S.Class<CreateDataLakeExceptionSubscriptionRequest>("CreateDataLakeExceptionSubscriptionRequest")({subscriptionProtocol: S.String, notificationEndpoint: S.String, exceptionTimeToLive: S.optional(S.Number)}) {}
export class CreateDataLakeExceptionSubscriptionResponse extends S.Class<CreateDataLakeExceptionSubscriptionResponse>("CreateDataLakeExceptionSubscriptionResponse")({}) {}
export class GetDataLakeExceptionSubscriptionResponse extends S.Class<GetDataLakeExceptionSubscriptionResponse>("GetDataLakeExceptionSubscriptionResponse")({subscriptionProtocol: S.optional(S.String), notificationEndpoint: S.optional(S.String), exceptionTimeToLive: S.optional(S.Number)}) {}
export class ListDataLakeExceptionsRequest extends S.Class<ListDataLakeExceptionsRequest>("ListDataLakeExceptionsRequest")({regions: S.optional(RegionList), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class RegisterDataLakeDelegatedAdministratorRequest extends S.Class<RegisterDataLakeDelegatedAdministratorRequest>("RegisterDataLakeDelegatedAdministratorRequest")({accountId: S.String}) {}
export class RegisterDataLakeDelegatedAdministratorResponse extends S.Class<RegisterDataLakeDelegatedAdministratorResponse>("RegisterDataLakeDelegatedAdministratorResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateDataLakeExceptionSubscriptionRequest extends S.Class<UpdateDataLakeExceptionSubscriptionRequest>("UpdateDataLakeExceptionSubscriptionRequest")({subscriptionProtocol: S.String, notificationEndpoint: S.String, exceptionTimeToLive: S.optional(S.Number)}) {}
export class UpdateDataLakeExceptionSubscriptionResponse extends S.Class<UpdateDataLakeExceptionSubscriptionResponse>("UpdateDataLakeExceptionSubscriptionResponse")({}) {}
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const TagList = S.Array(Tag);
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class DataLakeException extends S.Class<DataLakeException>("DataLakeException")({region: S.optional(S.String), exception: S.optional(S.String), remediation: S.optional(S.String), timestamp: S.optional(S.Date)}) {}
export const DataLakeExceptionList = S.Array(DataLakeException);
export class ListDataLakeExceptionsResponse extends S.Class<ListDataLakeExceptionsResponse>("ListDataLakeExceptionsResponse")({exceptions: S.optional(DataLakeExceptionList), nextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};

//# Operations
/**
 * Designates the Amazon Security Lake delegated administrator account for the organization. This
 * API can only be called by the organization management account. The organization management
 * account cannot be the delegated administrator account.
 */export const registerDataLakeDelegatedAdministrator = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/v1/datalake/delegate", method: "POST", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.RegisterDataLakeDelegatedAdministrator" }, RegisterDataLakeDelegatedAdministratorRequest, RegisterDataLakeDelegatedAdministratorResponse, [AccessDeniedException, BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more tags (keys and values) from an Amazon Security Lake resource: a subscriber, or the data lake configuration for your
 * Amazon Web Services account in a particular Amazon Web Services Region.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/v1/tags/{resourceArn}", method: "DELETE", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified notification subscription in Amazon Security Lake for the organization
 * you specify.
 */export const updateDataLakeExceptionSubscription = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/v1/datalake/exceptions/subscription", method: "PUT", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.UpdateDataLakeExceptionSubscription" }, UpdateDataLakeExceptionSubscriptionRequest, UpdateDataLakeExceptionSubscriptionResponse, [AccessDeniedException, BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates the specified notification subscription in Amazon Security Lake for the organization
 * you specify. The notification subscription is created for exceptions that cannot be resolved by Security Lake automatically.
 */export const createDataLakeExceptionSubscription = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/v1/datalake/exceptions/subscription", method: "POST", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.CreateDataLakeExceptionSubscription" }, CreateDataLakeExceptionSubscriptionRequest, CreateDataLakeExceptionSubscriptionResponse, [AccessDeniedException, BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified notification subscription in Amazon Security Lake for the organization
 * you specify.
 */export const deleteDataLakeExceptionSubscription = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/v1/datalake/exceptions/subscription", method: "DELETE", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.DeleteDataLakeExceptionSubscription" }, DeleteDataLakeExceptionSubscriptionRequest, DeleteDataLakeExceptionSubscriptionResponse, [AccessDeniedException, BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the Amazon Security Lake delegated administrator account for the organization. This API
 * can only be called by the organization management account. The organization management
 * account cannot be the delegated administrator account.
 */export const deregisterDataLakeDelegatedAdministrator = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/v1/datalake/delegate", method: "DELETE", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.DeregisterDataLakeDelegatedAdministrator" }, DeregisterDataLakeDelegatedAdministratorRequest, DeregisterDataLakeDelegatedAdministratorResponse, [AccessDeniedException, BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the protocol and endpoint that were provided when subscribing to Amazon SNS topics for exception notifications.
 */export const getDataLakeExceptionSubscription = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/v1/datalake/exceptions/subscription", method: "GET", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.GetDataLakeExceptionSubscription" }, GetDataLakeExceptionSubscriptionRequest, GetDataLakeExceptionSubscriptionResponse, [AccessDeniedException, BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the tags (keys and values) that are associated with an Amazon Security Lake resource: a subscriber, or the data lake configuration for
 * your Amazon Web Services account in a particular Amazon Web Services Region.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/v1/tags/{resourceArn}", method: "GET", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or updates one or more tags that are associated with an Amazon Security Lake resource: a subscriber, or the data lake configuration for your
 * Amazon Web Services account in a particular Amazon Web Services Region. A *tag* is a label that you can define and associate with
 * Amazon Web Services resources. Each tag consists of a required *tag key* and an associated *tag value*. A
 * *tag key* is a general label that acts as a category for a more specific tag value. A *tag value* acts as a
 * descriptor for a tag key. Tags can help you identify, categorize, and manage resources in different ways, such as by owner, environment, or other
 * criteria. For more information, see
 * Tagging Amazon Security Lake resources in the
 * *Amazon Security Lake User Guide*.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/v1/tags/{resourceArn}", method: "POST", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Amazon Security Lake exceptions that you can use to find the source of problems and
 * fix them.
 */export const listDataLakeExceptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/v1/datalake/exceptions", method: "POST", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.ListDataLakeExceptions" }, ListDataLakeExceptionsRequest, ListDataLakeExceptionsResponse, [AccessDeniedException, BadRequestException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

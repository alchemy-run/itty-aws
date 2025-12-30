import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export class ListManagedNotificationChannelAssociationsRequest extends S.Class<ListManagedNotificationChannelAssociationsRequest>("ListManagedNotificationChannelAssociationsRequest")({managedNotificationConfigurationArn: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListMemberAccountsRequest extends S.Class<ListMemberAccountsRequest>("ListMemberAccountsRequest")({notificationConfigurationArn: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String), memberAccount: S.optional(S.String), status: S.optional(S.String), organizationalUnitId: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({arn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({arn: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({arn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class ManagedNotificationChannelAssociationSummary extends S.Class<ManagedNotificationChannelAssociationSummary>("ManagedNotificationChannelAssociationSummary")({channelIdentifier: S.String, channelType: S.String, overrideOption: S.optional(S.String)}) {}
export const ManagedNotificationChannelAssociations = S.Array(ManagedNotificationChannelAssociationSummary);
export class MemberAccount extends S.Class<MemberAccount>("MemberAccount")({notificationConfigurationArn: S.optional(S.String), accountId: S.String, status: S.String, statusReason: S.String, organizationalUnitId: S.String}) {}
export const MemberAccounts = S.Array(MemberAccount);
export class ListManagedNotificationChannelAssociationsResponse extends S.Class<ListManagedNotificationChannelAssociationsResponse>("ListManagedNotificationChannelAssociationsResponse")({nextToken: S.optional(S.String), channelAssociations: ManagedNotificationChannelAssociations}) {}
export class ListMemberAccountsResponse extends S.Class<ListMemberAccountsResponse>("ListMemberAccountsResponse")({memberAccounts: MemberAccounts, nextToken: S.optional(S.String)}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String, resourceId: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String), retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String, reason: S.optional(S.String), fieldList: S.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const listMemberAccounts = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/list-member-accounts", method: "GET", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.ListMemberAccounts" }, ListMemberAccountsRequest, ListMemberAccountsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{arn}", method: "GET", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{arn}", method: "POST", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{arn}", method: "DELETE", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listManagedNotificationChannelAssociations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/channels/list-managed-notification-channel-associations", method: "GET", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.ListManagedNotificationChannelAssociations" }, ListManagedNotificationChannelAssociationsRequest, ListManagedNotificationChannelAssociationsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

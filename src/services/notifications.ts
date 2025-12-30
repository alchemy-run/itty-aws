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
export class ManagedNotificationChannelAssociationSummary extends S.Class<ManagedNotificationChannelAssociationSummary>("ManagedNotificationChannelAssociationSummary")({channelIdentifier: S.String, channelType: S.String, overrideOption: S.optional(S.String)}) {}
export const ManagedNotificationChannelAssociations = S.Array(ManagedNotificationChannelAssociationSummary);
export class MemberAccount extends S.Class<MemberAccount>("MemberAccount")({notificationConfigurationArn: S.optional(S.String), accountId: S.String, status: S.String, statusReason: S.String, organizationalUnitId: S.String}) {}
export const MemberAccounts = S.Array(MemberAccount);
export class ListManagedNotificationChannelAssociationsResponse extends S.Class<ListManagedNotificationChannelAssociationsResponse>("ListManagedNotificationChannelAssociationsResponse")({nextToken: S.optional(S.String), channelAssociations: ManagedNotificationChannelAssociations}) {}
export class ListMemberAccountsResponse extends S.Class<ListMemberAccountsResponse>("ListMemberAccountsResponse")({memberAccounts: MemberAccounts, nextToken: S.optional(S.String)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * Returns a list of member accounts associated with a notification configuration.
 */export const listMemberAccounts = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/list-member-accounts", method: "GET", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.ListMemberAccounts" }, ListMemberAccountsRequest, ListMemberAccountsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of tags for a specified Amazon Resource Name (ARN).
 * 
 * For more information, see Tagging your Amazon Web Services resources in the *Tagging Amazon Web Services Resources User Guide*.
 * 
 * 
 * This is only supported for `NotificationConfigurations`.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{arn}", method: "GET", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tags the resource with a tag key and value.
 * 
 * For more information, see Tagging your Amazon Web Services resources in the *Tagging Amazon Web Services Resources User Guide*.
 * 
 * 
 * This is only supported for `NotificationConfigurations`.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{arn}", method: "POST", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Untags a resource with a specified Amazon Resource Name (ARN).
 * 
 * For more information, see Tagging your Amazon Web Services resources in the *Tagging Amazon Web Services Resources User Guide*.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{arn}", method: "DELETE", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of Account contacts and Channels associated with a `ManagedNotificationConfiguration`, in paginated format.
 */export const listManagedNotificationChannelAssociations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/channels/list-managed-notification-channel-associations", method: "GET", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.ListManagedNotificationChannelAssociations" }, ListManagedNotificationChannelAssociationsRequest, ListManagedNotificationChannelAssociationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

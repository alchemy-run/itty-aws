import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export class ListManagedNotificationChannelAssociationsRequest extends Schema.Class<ListManagedNotificationChannelAssociationsRequest>("ListManagedNotificationChannelAssociationsRequest")({managedNotificationConfigurationArn: Schema.String, maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)}) {}
export class ListMemberAccountsRequest extends Schema.Class<ListMemberAccountsRequest>("ListMemberAccountsRequest")({notificationConfigurationArn: Schema.String, maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String), memberAccount: Schema.optional(Schema.String), status: Schema.optional(Schema.String), organizationalUnitId: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({arn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({arn: Schema.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagMap)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({arn: Schema.String, tags: TagMap}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class ManagedNotificationChannelAssociationSummary extends Schema.Class<ManagedNotificationChannelAssociationSummary>("ManagedNotificationChannelAssociationSummary")({channelIdentifier: Schema.String, channelType: Schema.String, overrideOption: Schema.optional(Schema.String)}) {}
export const ManagedNotificationChannelAssociations = Schema.Array(ManagedNotificationChannelAssociationSummary);
export class MemberAccount extends Schema.Class<MemberAccount>("MemberAccount")({notificationConfigurationArn: Schema.optional(Schema.String), accountId: Schema.String, status: Schema.String, statusReason: Schema.String, organizationalUnitId: Schema.String}) {}
export const MemberAccounts = Schema.Array(MemberAccount);
export class ListManagedNotificationChannelAssociationsResponse extends Schema.Class<ListManagedNotificationChannelAssociationsResponse>("ListManagedNotificationChannelAssociationsResponse")({nextToken: Schema.optional(Schema.String), channelAssociations: ManagedNotificationChannelAssociations}) {}
export class ListMemberAccountsResponse extends Schema.Class<ListMemberAccountsResponse>("ListMemberAccountsResponse")({memberAccounts: MemberAccounts, nextToken: Schema.optional(Schema.String)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String, resourceId: Schema.String}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String, reason: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const listMemberAccounts = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/list-member-accounts", method: "GET", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.ListMemberAccounts" }, ListMemberAccountsRequest, ListMemberAccountsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{arn}", method: "GET", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{arn}", method: "POST", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{arn}", method: "DELETE", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listManagedNotificationChannelAssociations = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/channels/list-managed-notification-channel-associations", method: "GET", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.ListManagedNotificationChannelAssociations" }, ListManagedNotificationChannelAssociationsRequest, ListManagedNotificationChannelAssociationsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

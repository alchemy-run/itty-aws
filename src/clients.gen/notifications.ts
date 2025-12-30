import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export const ListManagedNotificationChannelAssociationsRequest = Schema.Struct({managedNotificationConfigurationArn: Schema.String, maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)});
export const ListMemberAccountsRequest = Schema.Struct({notificationConfigurationArn: Schema.String, maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String), memberAccount: Schema.optional(Schema.String), status: Schema.optional(Schema.String), organizationalUnitId: Schema.optional(Schema.String)});
export const ListTagsForResourceRequest = Schema.Struct({arn: Schema.String});
export const UntagResourceRequest = Schema.Struct({arn: Schema.String, tagKeys: TagKeys});
export const UntagResourceResponse = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagMap)});
export const TagResourceRequest = Schema.Struct({arn: Schema.String, tags: TagMap});
export const TagResourceResponse = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const ManagedNotificationChannelAssociationSummary = Schema.Struct({channelIdentifier: Schema.String, channelType: Schema.String, overrideOption: Schema.optional(Schema.String)});
export const ManagedNotificationChannelAssociations = Schema.Array(ManagedNotificationChannelAssociationSummary);
export const MemberAccount = Schema.Struct({notificationConfigurationArn: Schema.optional(Schema.String), accountId: Schema.String, status: Schema.String, statusReason: Schema.String, organizationalUnitId: Schema.String});
export const MemberAccounts = Schema.Array(MemberAccount);
export const ListManagedNotificationChannelAssociationsResponse = Schema.Struct({nextToken: Schema.optional(Schema.String), channelAssociations: ManagedNotificationChannelAssociations});
export const ListMemberAccountsResponse = Schema.Struct({memberAccounts: MemberAccounts, nextToken: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({message: Schema.String});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String});
export const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const listMemberAccounts = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/list-member-accounts", method: "GET", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.ListMemberAccounts" }, ListMemberAccountsRequest, ListMemberAccountsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{arn}", method: "GET", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{arn}", method: "POST", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{arn}", method: "DELETE", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listManagedNotificationChannelAssociations = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/channels/list-managed-notification-channel-associations", method: "GET", sdkId: "Notifications", sigV4ServiceName: "notifications", name: "Notifications.ListManagedNotificationChannelAssociations" }, ListManagedNotificationChannelAssociationsRequest, ListManagedNotificationChannelAssociationsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

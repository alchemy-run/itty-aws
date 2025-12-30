import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const NotificationSetting = Schema.Struct({enabled: Schema.Boolean, event: Schema.String, threshold: Schema.optional(Schema.Number), channel: Schema.optional(Schema.String)});
export const NotificationSettings = Schema.Array(NotificationSetting);
export const NotificationSettingKey = Schema.Struct({event: Schema.String, channel: Schema.optional(Schema.String)});
export const NotificationSettingKeys = Schema.Array(NotificationSettingKey);
export const Tag = Schema.Struct({key: Schema.String, value: Schema.String});
export const TagList = Schema.Array(Tag);
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagList)});
export const PutNotificationSettingsRequest = Schema.Struct({trustAnchorId: Schema.String, notificationSettings: NotificationSettings});
export const ResetNotificationSettingsRequest = Schema.Struct({trustAnchorId: Schema.String, notificationSettingKeys: NotificationSettingKeys});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagList});
export const TagResourceResponse = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const SourceData = Schema.Union(Schema.String, Schema.String);
export const Source = Schema.Struct({sourceType: Schema.optional(Schema.String), sourceData: Schema.optional(SourceData)});
export const NotificationSettingDetail = Schema.Struct({enabled: Schema.Boolean, event: Schema.String, threshold: Schema.optional(Schema.Number), channel: Schema.optional(Schema.String), configuredBy: Schema.optional(Schema.String)});
export const NotificationSettingDetails = Schema.Array(NotificationSettingDetail);
export const TrustAnchorDetail = Schema.Struct({trustAnchorId: Schema.optional(Schema.String), trustAnchorArn: Schema.optional(Schema.String), name: Schema.optional(Schema.String), source: Schema.optional(Source), enabled: Schema.optional(Schema.Boolean), createdAt: Schema.optional(Schema.Date), updatedAt: Schema.optional(Schema.Date), notificationSettings: Schema.optional(NotificationSettingDetails)});
export const ResetNotificationSettingsResponse = Schema.Struct({trustAnchor: TrustAnchorDetail});
export const TooManyTagsException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({message: Schema.optional(Schema.String)});
export const PutNotificationSettingsResponse = Schema.Struct({trustAnchor: TrustAnchorDetail});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class TooManyTagsExceptionError extends Schema.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/ListTagsForResource", method: "GET", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const resetNotificationSettings = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/reset-notifications-settings", method: "PATCH", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.ResetNotificationSettings" }, ResetNotificationSettingsRequest, ResetNotificationSettingsResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/TagResource", method: "POST", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, TooManyTagsExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/UntagResource", method: "POST", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putNotificationSettings = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/put-notifications-settings", method: "PATCH", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.PutNotificationSettings" }, PutNotificationSettingsRequest, PutNotificationSettingsResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

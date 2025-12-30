import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class NotificationSetting extends Schema.Class<NotificationSetting>("NotificationSetting")({enabled: Schema.Boolean, event: Schema.String, threshold: Schema.optional(Schema.Number), channel: Schema.optional(Schema.String)}) {}
export const NotificationSettings = Schema.Array(NotificationSetting);
export class NotificationSettingKey extends Schema.Class<NotificationSettingKey>("NotificationSettingKey")({event: Schema.String, channel: Schema.optional(Schema.String)}) {}
export const NotificationSettingKeys = Schema.Array(NotificationSettingKey);
export class Tag extends Schema.Class<Tag>("Tag")({key: Schema.String, value: Schema.String}) {}
export const TagList = Schema.Array(Tag);
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagList)}) {}
export class PutNotificationSettingsRequest extends Schema.Class<PutNotificationSettingsRequest>("PutNotificationSettingsRequest")({trustAnchorId: Schema.String, notificationSettings: NotificationSettings}) {}
export class ResetNotificationSettingsRequest extends Schema.Class<ResetNotificationSettingsRequest>("ResetNotificationSettingsRequest")({trustAnchorId: Schema.String, notificationSettingKeys: NotificationSettingKeys}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: TagList}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}
export const SourceData = Schema.Union(Schema.String, Schema.String);
export class Source extends Schema.Class<Source>("Source")({sourceType: Schema.optional(Schema.String), sourceData: Schema.optional(SourceData)}) {}
export class NotificationSettingDetail extends Schema.Class<NotificationSettingDetail>("NotificationSettingDetail")({enabled: Schema.Boolean, event: Schema.String, threshold: Schema.optional(Schema.Number), channel: Schema.optional(Schema.String), configuredBy: Schema.optional(Schema.String)}) {}
export const NotificationSettingDetails = Schema.Array(NotificationSettingDetail);
export class TrustAnchorDetail extends Schema.Class<TrustAnchorDetail>("TrustAnchorDetail")({trustAnchorId: Schema.optional(Schema.String), trustAnchorArn: Schema.optional(Schema.String), name: Schema.optional(Schema.String), source: Schema.optional(Source), enabled: Schema.optional(Schema.Boolean), createdAt: Schema.optional(Schema.Date), updatedAt: Schema.optional(Schema.Date), notificationSettings: Schema.optional(NotificationSettingDetails)}) {}
export class ResetNotificationSettingsResponse extends Schema.Class<ResetNotificationSettingsResponse>("ResetNotificationSettingsResponse")({trustAnchor: TrustAnchorDetail}) {}
export class TooManyTagsException extends Schema.Class<TooManyTagsException>("TooManyTagsException")({message: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.optional(Schema.String)}) {}
export class PutNotificationSettingsResponse extends Schema.Class<PutNotificationSettingsResponse>("PutNotificationSettingsResponse")({trustAnchor: TrustAnchorDetail}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class TooManyTagsExceptionError extends Schema.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/ListTagsForResource", method: "GET", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const resetNotificationSettings = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/reset-notifications-settings", method: "PATCH", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.ResetNotificationSettings" }, ResetNotificationSettingsRequest, ResetNotificationSettingsResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/TagResource", method: "POST", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, TooManyTagsExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/UntagResource", method: "POST", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putNotificationSettings = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/put-notifications-settings", method: "PATCH", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.PutNotificationSettings" }, PutNotificationSettingsRequest, PutNotificationSettingsResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

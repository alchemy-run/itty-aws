import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class NotificationSetting extends S.Class<NotificationSetting>("NotificationSetting")({enabled: S.Boolean, event: S.String, threshold: S.optional(S.Number), channel: S.optional(S.String)}) {}
export const NotificationSettings = S.Array(NotificationSetting);
export class NotificationSettingKey extends S.Class<NotificationSettingKey>("NotificationSettingKey")({event: S.String, channel: S.optional(S.String)}) {}
export const NotificationSettingKeys = S.Array(NotificationSettingKey);
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const TagList = S.Array(Tag);
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList)}) {}
export class PutNotificationSettingsRequest extends S.Class<PutNotificationSettingsRequest>("PutNotificationSettingsRequest")({trustAnchorId: S.String, notificationSettings: NotificationSettings}) {}
export class ResetNotificationSettingsRequest extends S.Class<ResetNotificationSettingsRequest>("ResetNotificationSettingsRequest")({trustAnchorId: S.String, notificationSettingKeys: NotificationSettingKeys}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export const SourceData = S.Union(S.String, S.String);
export class Source extends S.Class<Source>("Source")({sourceType: S.optional(S.String), sourceData: S.optional(SourceData)}) {}
export class NotificationSettingDetail extends S.Class<NotificationSettingDetail>("NotificationSettingDetail")({enabled: S.Boolean, event: S.String, threshold: S.optional(S.Number), channel: S.optional(S.String), configuredBy: S.optional(S.String)}) {}
export const NotificationSettingDetails = S.Array(NotificationSettingDetail);
export class TrustAnchorDetail extends S.Class<TrustAnchorDetail>("TrustAnchorDetail")({trustAnchorId: S.optional(S.String), trustAnchorArn: S.optional(S.String), name: S.optional(S.String), source: S.optional(Source), enabled: S.optional(S.Boolean), createdAt: S.optional(S.Date), updatedAt: S.optional(S.Date), notificationSettings: S.optional(NotificationSettingDetails)}) {}
export class ResetNotificationSettingsResponse extends S.Class<ResetNotificationSettingsResponse>("ResetNotificationSettingsResponse")({trustAnchor: TrustAnchorDetail}) {}
export class PutNotificationSettingsResponse extends S.Class<PutNotificationSettingsResponse>("PutNotificationSettingsResponse")({trustAnchor: TrustAnchorDetail}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {message: S.optional(S.String)}) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/ListTagsForResource", method: "GET", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const resetNotificationSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/reset-notifications-settings", method: "PATCH", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.ResetNotificationSettings" }, ResetNotificationSettingsRequest, ResetNotificationSettingsResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/TagResource", method: "POST", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, ResourceNotFoundException, TooManyTagsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/UntagResource", method: "POST", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putNotificationSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/put-notifications-settings", method: "PATCH", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "RolesAnywhere.PutNotificationSettings" }, PutNotificationSettingsRequest, PutNotificationSettingsResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

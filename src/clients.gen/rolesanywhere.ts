import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const UntagResourceResponse = Schema.Struct({})
const NotificationSetting = Schema.Struct({enabled: Schema.Boolean, event: Schema.String, threshold: Schema.optional(Schema.Number), channel: Schema.optional(Schema.String)})
const NotificationSettings = Schema.Array(NotificationSetting)
const NotificationSettingKey = Schema.Struct({event: Schema.String, channel: Schema.optional(Schema.String)})
const NotificationSettingKeys = Schema.Array(NotificationSettingKey)
const Tag = Schema.Struct({key: Schema.String, value: Schema.String})
const TagList = Schema.Array(Tag)
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagList)})
const PutNotificationSettingsRequest = Schema.Struct({trustAnchorId: Schema.String, notificationSettings: NotificationSettings})
const ResetNotificationSettingsRequest = Schema.Struct({trustAnchorId: Schema.String, notificationSettingKeys: NotificationSettingKeys})
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagList})
const TagResourceResponse = Schema.Struct({})
const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)})
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/ListTagsForResource", method: "GET", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResetNotificationSettingsResponse = Schema.Struct({trustAnchor: TrustAnchorDetail})
export const ResetNotificationSettings = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/reset-notifications-settings", method: "PATCH", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "ResetNotificationSettings" }, ResetNotificationSettingsRequest, ResetNotificationSettingsResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TooManyTagsException = Schema.Struct({message: Schema.optional(Schema.String)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/TagResource", method: "POST", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("TooManyTagsException", TooManyTagsException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationException = Schema.Struct({message: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/UntagResource", method: "POST", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const NotificationSettingDetail = Schema.Struct({enabled: Schema.Boolean, event: Schema.String, threshold: Schema.optional(Schema.Number), channel: Schema.optional(Schema.String), configuredBy: Schema.optional(Schema.String)})
const NotificationSettingDetails = Schema.Array(NotificationSettingDetail)
const SourceData = Schema.Union(Schema.String, Schema.String)
const Source = Schema.Struct({sourceType: Schema.optional(Schema.String), sourceData: Schema.optional(SourceData)})
const TrustAnchorDetail = Schema.Struct({trustAnchorId: Schema.optional(Schema.String), trustAnchorArn: Schema.optional(Schema.String), name: Schema.optional(Schema.String), source: Schema.optional(Source), enabled: Schema.optional(Schema.Boolean), createdAt: Schema.optional(Schema.Date), updatedAt: Schema.optional(Schema.Date), notificationSettings: Schema.optional(NotificationSettingDetails)})
const PutNotificationSettingsResponse = Schema.Struct({trustAnchor: TrustAnchorDetail})
export const PutNotificationSettings = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/put-notifications-settings", method: "PATCH", sdkId: "RolesAnywhere", sigV4ServiceName: "rolesanywhere", name: "PutNotificationSettings" }, PutNotificationSettingsRequest, PutNotificationSettingsResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

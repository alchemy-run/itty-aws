import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const __listOfLoggingStrategies = Schema.Array(Schema.String)
const __listOf__string = Schema.Array(Schema.String)
const ListAlertsRequest = Schema.Struct({MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String), ResourceArn: Schema.String})
const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: __listOf__string})
const __adsInteractionPublishOptInEventTypesList = Schema.Array(Schema.String)
const __adsInteractionExcludeEventTypesList = Schema.Array(Schema.String)
const __manifestServiceExcludeEventTypesList = Schema.Array(Schema.String)
const AdsInteractionLog = Schema.Struct({PublishOptInEventTypes: Schema.optional(__adsInteractionPublishOptInEventTypesList), ExcludeEventTypes: Schema.optional(__adsInteractionExcludeEventTypesList)})
const ManifestServiceInteractionLog = Schema.Struct({ExcludeEventTypes: Schema.optional(__manifestServiceExcludeEventTypesList)})
const __mapOf__string = Schema.Record({key: Schema.String, value: Schema.String})
const ConfigureLogsForPlaybackConfigurationRequest = Schema.Struct({PercentEnabled: Schema.Number, PlaybackConfigurationName: Schema.String, EnabledLoggingStrategies: Schema.optional(__listOfLoggingStrategies), AdsInteractionLog: Schema.optional(AdsInteractionLog), ManifestServiceInteractionLog: Schema.optional(ManifestServiceInteractionLog)})
const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(__mapOf__string)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, ErrorAnnotation("BadRequestException", BadRequestException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: __mapOf__string})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "TagResource" }, TagResourceRequest, Schema.Struct({}), ErrorAnnotation("BadRequestException", BadRequestException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const BadRequestException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "UntagResource" }, UntagResourceRequest, Schema.Struct({}), ErrorAnnotation("BadRequestException", BadRequestException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const Alert = Schema.Struct({AlertCode: Schema.String, AlertMessage: Schema.String, LastModifiedTime: Schema.Date, RelatedResourceArns: __listOf__string, ResourceArn: Schema.String, Category: Schema.optional(Schema.String)})
const __listOfAlert = Schema.Array(Alert)
const ConfigureLogsForPlaybackConfigurationResponse = Schema.Struct({PercentEnabled: Schema.Number, PlaybackConfigurationName: Schema.optional(Schema.String), EnabledLoggingStrategies: Schema.optional(__listOfLoggingStrategies), AdsInteractionLog: Schema.optional(AdsInteractionLog), ManifestServiceInteractionLog: Schema.optional(ManifestServiceInteractionLog)})
export const ConfigureLogsForPlaybackConfiguration = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/configureLogs/playbackConfiguration", method: "PUT", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "ConfigureLogsForPlaybackConfiguration" }, ConfigureLogsForPlaybackConfigurationRequest, ConfigureLogsForPlaybackConfigurationResponse, Schema.Void), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ListAlertsResponse = Schema.Struct({Items: Schema.optional(__listOfAlert), NextToken: Schema.optional(Schema.String)})
export const ListAlerts = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/alerts", method: "GET", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "ListAlerts" }, ListAlertsRequest, ListAlertsResponse, Schema.Void), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);

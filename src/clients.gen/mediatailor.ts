import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const __listOfLoggingStrategies = S.Array(S.String);
export const __listOf__string = S.Array(S.String);
export class ListAlertsRequest extends S.Class<ListAlertsRequest>("ListAlertsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ResourceArn: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: __listOf__string}) {}
export const __adsInteractionPublishOptInEventTypesList = S.Array(S.String);
export const __adsInteractionExcludeEventTypesList = S.Array(S.String);
export const __manifestServiceExcludeEventTypesList = S.Array(S.String);
export class AdsInteractionLog extends S.Class<AdsInteractionLog>("AdsInteractionLog")({PublishOptInEventTypes: S.optional(__adsInteractionPublishOptInEventTypesList), ExcludeEventTypes: S.optional(__adsInteractionExcludeEventTypesList)}) {}
export class ManifestServiceInteractionLog extends S.Class<ManifestServiceInteractionLog>("ManifestServiceInteractionLog")({ExcludeEventTypes: S.optional(__manifestServiceExcludeEventTypesList)}) {}
export const __mapOf__string = S.Record({key: S.String, value: S.String});
export class ConfigureLogsForPlaybackConfigurationRequest extends S.Class<ConfigureLogsForPlaybackConfigurationRequest>("ConfigureLogsForPlaybackConfigurationRequest")({PercentEnabled: S.Number, PlaybackConfigurationName: S.String, EnabledLoggingStrategies: S.optional(__listOfLoggingStrategies), AdsInteractionLog: S.optional(AdsInteractionLog), ManifestServiceInteractionLog: S.optional(ManifestServiceInteractionLog)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(__mapOf__string)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: __mapOf__string}) {}
export class BadRequestException extends S.Class<BadRequestException>("BadRequestException")({Message: S.optional(S.String)}) {}
export class Alert extends S.Class<Alert>("Alert")({AlertCode: S.String, AlertMessage: S.String, LastModifiedTime: S.Date, RelatedResourceArns: __listOf__string, ResourceArn: S.String, Category: S.optional(S.String)}) {}
export const __listOfAlert = S.Array(Alert);
export class ConfigureLogsForPlaybackConfigurationResponse extends S.Class<ConfigureLogsForPlaybackConfigurationResponse>("ConfigureLogsForPlaybackConfigurationResponse")({PercentEnabled: S.Number, PlaybackConfigurationName: S.optional(S.String), EnabledLoggingStrategies: S.optional(__listOfLoggingStrategies), AdsInteractionLog: S.optional(AdsInteractionLog), ManifestServiceInteractionLog: S.optional(ManifestServiceInteractionLog)}) {}
export class ListAlertsResponse extends S.Class<ListAlertsResponse>("ListAlertsResponse")({Items: S.optional(__listOfAlert), NextToken: S.optional(S.String)}) {}

//# Errors
export class BadRequestExceptionError extends S.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-04-23", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "MediaTailor.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-04-23", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "MediaTailor.TagResource" }, TagResourceRequest, S.Struct({}), [BadRequestExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-04-23", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "MediaTailor.UntagResource" }, UntagResourceRequest, S.Struct({}), [BadRequestExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const configureLogsForPlaybackConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-04-23", uri: "/configureLogs/playbackConfiguration", method: "PUT", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "MediaTailor.ConfigureLogsForPlaybackConfiguration" }, ConfigureLogsForPlaybackConfigurationRequest, ConfigureLogsForPlaybackConfigurationResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAlerts = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-04-23", uri: "/alerts", method: "GET", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "MediaTailor.ListAlerts" }, ListAlertsRequest, ListAlertsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

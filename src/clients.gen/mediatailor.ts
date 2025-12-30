import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const __listOfLoggingStrategies = Schema.Array(Schema.String);
export const __listOf__string = Schema.Array(Schema.String);
export const ListAlertsRequest = Schema.Struct({MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String), ResourceArn: Schema.String});
export const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: __listOf__string});
export const __adsInteractionPublishOptInEventTypesList = Schema.Array(Schema.String);
export const __adsInteractionExcludeEventTypesList = Schema.Array(Schema.String);
export const __manifestServiceExcludeEventTypesList = Schema.Array(Schema.String);
export const AdsInteractionLog = Schema.Struct({PublishOptInEventTypes: Schema.optional(__adsInteractionPublishOptInEventTypesList), ExcludeEventTypes: Schema.optional(__adsInteractionExcludeEventTypesList)});
export const ManifestServiceInteractionLog = Schema.Struct({ExcludeEventTypes: Schema.optional(__manifestServiceExcludeEventTypesList)});
export const __mapOf__string = Schema.Record({key: Schema.String, value: Schema.String});
export const ConfigureLogsForPlaybackConfigurationRequest = Schema.Struct({PercentEnabled: Schema.Number, PlaybackConfigurationName: Schema.String, EnabledLoggingStrategies: Schema.optional(__listOfLoggingStrategies), AdsInteractionLog: Schema.optional(AdsInteractionLog), ManifestServiceInteractionLog: Schema.optional(ManifestServiceInteractionLog)});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(__mapOf__string)});
export const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: __mapOf__string});
export const BadRequestException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const Alert = Schema.Struct({AlertCode: Schema.String, AlertMessage: Schema.String, LastModifiedTime: Schema.Date, RelatedResourceArns: __listOf__string, ResourceArn: Schema.String, Category: Schema.optional(Schema.String)});
export const __listOfAlert = Schema.Array(Alert);
export const ConfigureLogsForPlaybackConfigurationResponse = Schema.Struct({PercentEnabled: Schema.Number, PlaybackConfigurationName: Schema.optional(Schema.String), EnabledLoggingStrategies: Schema.optional(__listOfLoggingStrategies), AdsInteractionLog: Schema.optional(AdsInteractionLog), ManifestServiceInteractionLog: Schema.optional(ManifestServiceInteractionLog)});
export const ListAlertsResponse = Schema.Struct({Items: Schema.optional(__listOfAlert), NextToken: Schema.optional(Schema.String)});

//# Errors
export class BadRequestExceptionError extends Schema.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-04-23", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "MediaTailor.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-04-23", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "MediaTailor.TagResource" }, TagResourceRequest, Schema.Struct({}), [BadRequestExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-04-23", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "MediaTailor.UntagResource" }, UntagResourceRequest, Schema.Struct({}), [BadRequestExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const configureLogsForPlaybackConfiguration = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-04-23", uri: "/configureLogs/playbackConfiguration", method: "PUT", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "MediaTailor.ConfigureLogsForPlaybackConfiguration" }, ConfigureLogsForPlaybackConfigurationRequest, ConfigureLogsForPlaybackConfigurationResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAlerts = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-04-23", uri: "/alerts", method: "GET", sdkId: "MediaTailor", sigV4ServiceName: "mediatailor", name: "MediaTailor.ListAlerts" }, ListAlertsRequest, ListAlertsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

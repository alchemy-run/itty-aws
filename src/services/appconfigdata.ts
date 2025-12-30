import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetLatestConfigurationRequest extends S.Class<GetLatestConfigurationRequest>("GetLatestConfigurationRequest")({ConfigurationToken: S.String}) {}
export class GetLatestConfigurationResponse extends S.Class<GetLatestConfigurationResponse>("GetLatestConfigurationResponse")({NextPollConfigurationToken: S.optional(H.Header("Next-Poll-Configuration-Token")), NextPollIntervalInSeconds: S.optional(H.Header("Next-Poll-Interval-In-Seconds", S.Number)), ContentType: S.optional(H.Header("Content-Type")), Configuration: S.optional(H.Body("undefined", H.StreamBody())), VersionLabel: S.optional(H.Header("Version-Label"))}) {}
export class InvalidParameterDetail extends S.Class<InvalidParameterDetail>("InvalidParameterDetail")({Problem: S.optional(S.String)}) {}
export const InvalidParameterMap = S.Record({key: S.String, value: InvalidParameterDetail});
export const BadRequestDetails = S.Union(InvalidParameterMap);
export const StringMap = S.Record({key: S.String, value: S.String});

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {Message: S.optional(S.String), Reason: S.optional(S.String), Details: S.optional(BadRequestDetails)}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {Message: S.optional(S.String)}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {Message: S.optional(S.String), ResourceType: S.optional(S.String), ReferencedBy: S.optional(StringMap)}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Retrieves the latest deployed configuration. This API may return empty configuration
 * data if the client already has the latest version. For more information about this API
 * action and to view example CLI commands that show how to use it with the StartConfigurationSession API action, see Retrieving the
 * configuration in the *AppConfig User Guide*.
 * 
 * 
 * 
 * 
 * Note the following important information.
 * 
 * 
 * 
 * - Each configuration token is only valid for one call to
 * `GetLatestConfiguration`. The `GetLatestConfiguration`
 * response includes a `NextPollConfigurationToken` that should always
 * replace the token used for the just-completed call in preparation for the next
 * one.
 * 
 * 
 * 
 * - `GetLatestConfiguration` is a priced call. For more information, see
 * Pricing.
 */export const getLatestConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-11", uri: "/configuration", method: "GET", sdkId: "AppConfigData", sigV4ServiceName: "appconfig", name: "AppConfigData.GetLatestConfiguration" }, GetLatestConfigurationRequest, GetLatestConfigurationResponse, [BadRequestException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);

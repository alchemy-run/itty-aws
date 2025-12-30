import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetLatestConfigurationRequest extends S.Class<GetLatestConfigurationRequest>("GetLatestConfigurationRequest")({ConfigurationToken: S.String}) {}
export class GetLatestConfigurationResponse extends S.Class<GetLatestConfigurationResponse>("GetLatestConfigurationResponse")({NextPollConfigurationToken: S.optional(H.Header("Next-Poll-Configuration-Token")), NextPollIntervalInSeconds: S.optional(H.Header("Next-Poll-Interval-In-Seconds", S.Number)), ContentType: S.optional(H.Header("Content-Type")), Configuration: S.optional(H.Body("undefined", H.StreamBody())), VersionLabel: S.optional(H.Header("Version-Label"))}) {}
export class InvalidParameterDetail extends S.Class<InvalidParameterDetail>("InvalidParameterDetail")({Problem: S.optional(S.String)}) {}
export const InvalidParameterMap = S.Record({key: S.String, value: InvalidParameterDetail});
export const BadRequestDetails = S.Union(InvalidParameterMap);
export class BadRequestException extends S.Class<BadRequestException>("BadRequestException")({Message: S.optional(S.String), Reason: S.optional(S.String), Details: S.optional(BadRequestDetails)}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({Message: S.optional(S.String)}) {}
export const StringMap = S.Record({key: S.String, value: S.String});
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: S.optional(S.String), ResourceType: S.optional(S.String), ReferencedBy: S.optional(StringMap)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({Message: S.optional(S.String)}) {}

//# Errors
export class BadRequestExceptionError extends S.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};

//# Operations
export const getLatestConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-11", uri: "/configuration", method: "GET", sdkId: "AppConfigData", sigV4ServiceName: "appconfig", name: "AppConfigData.GetLatestConfiguration" }, GetLatestConfigurationRequest, GetLatestConfigurationResponse, [BadRequestExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
